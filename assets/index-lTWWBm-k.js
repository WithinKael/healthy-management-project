function rx(e,t){for(var n=0;n<t.length;n++){const r=t[n];if(typeof r!="string"&&!Array.isArray(r)){for(const i in r)if(i!=="default"&&!(i in e)){const o=Object.getOwnPropertyDescriptor(r,i);o&&Object.defineProperty(e,i,o.get?o:{enumerable:!0,get:()=>r[i]})}}}return Object.freeze(Object.defineProperty(e,Symbol.toStringTag,{value:"Module"}))}(function(){const t=document.createElement("link").relList;if(t&&t.supports&&t.supports("modulepreload"))return;for(const i of document.querySelectorAll('link[rel="modulepreload"]'))r(i);new MutationObserver(i=>{for(const o of i)if(o.type==="childList")for(const a of o.addedNodes)a.tagName==="LINK"&&a.rel==="modulepreload"&&r(a)}).observe(document,{childList:!0,subtree:!0});function n(i){const o={};return i.integrity&&(o.integrity=i.integrity),i.referrerPolicy&&(o.referrerPolicy=i.referrerPolicy),i.crossOrigin==="use-credentials"?o.credentials="include":i.crossOrigin==="anonymous"?o.credentials="omit":o.credentials="same-origin",o}function r(i){if(i.ep)return;i.ep=!0;const o=n(i);fetch(i.href,o)}})();var sp=typeof globalThis<"u"?globalThis:typeof window<"u"?window:typeof global<"u"?global:typeof self<"u"?self:{};function Kr(e){return e&&e.__esModule&&Object.prototype.hasOwnProperty.call(e,"default")?e.default:e}var lp={exports:{}},Ua={},up={exports:{}},ue={};/**
 * @license React
 * react.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */var Zi=Symbol.for("react.element"),ix=Symbol.for("react.portal"),ox=Symbol.for("react.fragment"),ax=Symbol.for("react.strict_mode"),sx=Symbol.for("react.profiler"),lx=Symbol.for("react.provider"),ux=Symbol.for("react.context"),cx=Symbol.for("react.forward_ref"),dx=Symbol.for("react.suspense"),fx=Symbol.for("react.memo"),px=Symbol.for("react.lazy"),Fc=Symbol.iterator;function hx(e){return e===null||typeof e!="object"?null:(e=Fc&&e[Fc]||e["@@iterator"],typeof e=="function"?e:null)}var cp={isMounted:function(){return!1},enqueueForceUpdate:function(){},enqueueReplaceState:function(){},enqueueSetState:function(){}},dp=Object.assign,fp={};function Jr(e,t,n){this.props=e,this.context=t,this.refs=fp,this.updater=n||cp}Jr.prototype.isReactComponent={};Jr.prototype.setState=function(e,t){if(typeof e!="object"&&typeof e!="function"&&e!=null)throw Error("setState(...): takes an object of state variables to update or a function which returns an object of state variables.");this.updater.enqueueSetState(this,e,t,"setState")};Jr.prototype.forceUpdate=function(e){this.updater.enqueueForceUpdate(this,e,"forceUpdate")};function pp(){}pp.prototype=Jr.prototype;function wu(e,t,n){this.props=e,this.context=t,this.refs=fp,this.updater=n||cp}var bu=wu.prototype=new pp;bu.constructor=wu;dp(bu,Jr.prototype);bu.isPureReactComponent=!0;var Nc=Array.isArray,hp=Object.prototype.hasOwnProperty,ku={current:null},mp={key:!0,ref:!0,__self:!0,__source:!0};function gp(e,t,n){var r,i={},o=null,a=null;if(t!=null)for(r in t.ref!==void 0&&(a=t.ref),t.key!==void 0&&(o=""+t.key),t)hp.call(t,r)&&!mp.hasOwnProperty(r)&&(i[r]=t[r]);var l=arguments.length-2;if(l===1)i.children=n;else if(1<l){for(var s=Array(l),u=0;u<l;u++)s[u]=arguments[u+2];i.children=s}if(e&&e.defaultProps)for(r in l=e.defaultProps,l)i[r]===void 0&&(i[r]=l[r]);return{$$typeof:Zi,type:e,key:o,ref:a,props:i,_owner:ku.current}}function mx(e,t){return{$$typeof:Zi,type:e.type,key:t,ref:e.ref,props:e.props,_owner:e._owner}}function Su(e){return typeof e=="object"&&e!==null&&e.$$typeof===Zi}function gx(e){var t={"=":"=0",":":"=2"};return"$"+e.replace(/[=:]/g,function(n){return t[n]})}var Vc=/\/+/g;function bs(e,t){return typeof e=="object"&&e!==null&&e.key!=null?gx(""+e.key):t.toString(36)}function Fo(e,t,n,r,i){var o=typeof e;(o==="undefined"||o==="boolean")&&(e=null);var a=!1;if(e===null)a=!0;else switch(o){case"string":case"number":a=!0;break;case"object":switch(e.$$typeof){case Zi:case ix:a=!0}}if(a)return a=e,i=i(a),e=r===""?"."+bs(a,0):r,Nc(i)?(n="",e!=null&&(n=e.replace(Vc,"$&/")+"/"),Fo(i,t,n,"",function(u){return u})):i!=null&&(Su(i)&&(i=mx(i,n+(!i.key||a&&a.key===i.key?"":(""+i.key).replace(Vc,"$&/")+"/")+e)),t.push(i)),1;if(a=0,r=r===""?".":r+":",Nc(e))for(var l=0;l<e.length;l++){o=e[l];var s=r+bs(o,l);a+=Fo(o,t,n,s,i)}else if(s=hx(e),typeof s=="function")for(e=s.call(e),l=0;!(o=e.next()).done;)o=o.value,s=r+bs(o,l++),a+=Fo(o,t,n,s,i);else if(o==="object")throw t=String(e),Error("Objects are not valid as a React child (found: "+(t==="[object Object]"?"object with keys {"+Object.keys(e).join(", ")+"}":t)+"). If you meant to render a collection of children, use an array instead.");return a}function ao(e,t,n){if(e==null)return e;var r=[],i=0;return Fo(e,r,"","",function(o){return t.call(n,o,i++)}),r}function xx(e){if(e._status===-1){var t=e._result;t=t(),t.then(function(n){(e._status===0||e._status===-1)&&(e._status=1,e._result=n)},function(n){(e._status===0||e._status===-1)&&(e._status=2,e._result=n)}),e._status===-1&&(e._status=0,e._result=t)}if(e._status===1)return e._result.default;throw e._result}var lt={current:null},No={transition:null},vx={ReactCurrentDispatcher:lt,ReactCurrentBatchConfig:No,ReactCurrentOwner:ku};ue.Children={map:ao,forEach:function(e,t,n){ao(e,function(){t.apply(this,arguments)},n)},count:function(e){var t=0;return ao(e,function(){t++}),t},toArray:function(e){return ao(e,function(t){return t})||[]},only:function(e){if(!Su(e))throw Error("React.Children.only expected to receive a single React element child.");return e}};ue.Component=Jr;ue.Fragment=ox;ue.Profiler=sx;ue.PureComponent=wu;ue.StrictMode=ax;ue.Suspense=dx;ue.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED=vx;ue.cloneElement=function(e,t,n){if(e==null)throw Error("React.cloneElement(...): The argument must be a React element, but you passed "+e+".");var r=dp({},e.props),i=e.key,o=e.ref,a=e._owner;if(t!=null){if(t.ref!==void 0&&(o=t.ref,a=ku.current),t.key!==void 0&&(i=""+t.key),e.type&&e.type.defaultProps)var l=e.type.defaultProps;for(s in t)hp.call(t,s)&&!mp.hasOwnProperty(s)&&(r[s]=t[s]===void 0&&l!==void 0?l[s]:t[s])}var s=arguments.length-2;if(s===1)r.children=n;else if(1<s){l=Array(s);for(var u=0;u<s;u++)l[u]=arguments[u+2];r.children=l}return{$$typeof:Zi,type:e.type,key:i,ref:o,props:r,_owner:a}};ue.createContext=function(e){return e={$$typeof:ux,_currentValue:e,_currentValue2:e,_threadCount:0,Provider:null,Consumer:null,_defaultValue:null,_globalName:null},e.Provider={$$typeof:lx,_context:e},e.Consumer=e};ue.createElement=gp;ue.createFactory=function(e){var t=gp.bind(null,e);return t.type=e,t};ue.createRef=function(){return{current:null}};ue.forwardRef=function(e){return{$$typeof:cx,render:e}};ue.isValidElement=Su;ue.lazy=function(e){return{$$typeof:px,_payload:{_status:-1,_result:e},_init:xx}};ue.memo=function(e,t){return{$$typeof:fx,type:e,compare:t===void 0?null:t}};ue.startTransition=function(e){var t=No.transition;No.transition={};try{e()}finally{No.transition=t}};ue.unstable_act=function(){throw Error("act(...) is not supported in production builds of React.")};ue.useCallback=function(e,t){return lt.current.useCallback(e,t)};ue.useContext=function(e){return lt.current.useContext(e)};ue.useDebugValue=function(){};ue.useDeferredValue=function(e){return lt.current.useDeferredValue(e)};ue.useEffect=function(e,t){return lt.current.useEffect(e,t)};ue.useId=function(){return lt.current.useId()};ue.useImperativeHandle=function(e,t,n){return lt.current.useImperativeHandle(e,t,n)};ue.useInsertionEffect=function(e,t){return lt.current.useInsertionEffect(e,t)};ue.useLayoutEffect=function(e,t){return lt.current.useLayoutEffect(e,t)};ue.useMemo=function(e,t){return lt.current.useMemo(e,t)};ue.useReducer=function(e,t,n){return lt.current.useReducer(e,t,n)};ue.useRef=function(e){return lt.current.useRef(e)};ue.useState=function(e){return lt.current.useState(e)};ue.useSyncExternalStore=function(e,t,n){return lt.current.useSyncExternalStore(e,t,n)};ue.useTransition=function(){return lt.current.useTransition()};ue.version="18.2.0";up.exports=ue;var R=up.exports;const be=Kr(R),Uc=rx({__proto__:null,default:be},[R]);/**
 * @license React
 * react-jsx-runtime.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */var yx=R,wx=Symbol.for("react.element"),bx=Symbol.for("react.fragment"),kx=Object.prototype.hasOwnProperty,Sx=yx.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED.ReactCurrentOwner,jx={key:!0,ref:!0,__self:!0,__source:!0};function xp(e,t,n){var r,i={},o=null,a=null;n!==void 0&&(o=""+n),t.key!==void 0&&(o=""+t.key),t.ref!==void 0&&(a=t.ref);for(r in t)kx.call(t,r)&&!jx.hasOwnProperty(r)&&(i[r]=t[r]);if(e&&e.defaultProps)for(r in t=e.defaultProps,t)i[r]===void 0&&(i[r]=t[r]);return{$$typeof:wx,type:e,key:o,ref:a,props:i,_owner:Sx.current}}Ua.Fragment=bx;Ua.jsx=xp;Ua.jsxs=xp;lp.exports=Ua;var c=lp.exports,hl={},vp={exports:{}},St={},yp={exports:{}},wp={};/**
 * @license React
 * scheduler.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */(function(e){function t(F,Q){var X=F.length;F.push(Q);e:for(;0<X;){var ce=X-1>>>1,ne=F[ce];if(0<i(ne,Q))F[ce]=Q,F[X]=ne,X=ce;else break e}}function n(F){return F.length===0?null:F[0]}function r(F){if(F.length===0)return null;var Q=F[0],X=F.pop();if(X!==Q){F[0]=X;e:for(var ce=0,ne=F.length,Ce=ne>>>1;ce<Ce;){var we=2*(ce+1)-1,We=F[we],de=we+1,Pe=F[de];if(0>i(We,X))de<ne&&0>i(Pe,We)?(F[ce]=Pe,F[de]=X,ce=de):(F[ce]=We,F[we]=X,ce=we);else if(de<ne&&0>i(Pe,X))F[ce]=Pe,F[de]=X,ce=de;else break e}}return Q}function i(F,Q){var X=F.sortIndex-Q.sortIndex;return X!==0?X:F.id-Q.id}if(typeof performance=="object"&&typeof performance.now=="function"){var o=performance;e.unstable_now=function(){return o.now()}}else{var a=Date,l=a.now();e.unstable_now=function(){return a.now()-l}}var s=[],u=[],p=1,h=null,g=3,v=!1,x=!1,y=!1,b=typeof setTimeout=="function"?setTimeout:null,d=typeof clearTimeout=="function"?clearTimeout:null,f=typeof setImmediate<"u"?setImmediate:null;typeof navigator<"u"&&navigator.scheduling!==void 0&&navigator.scheduling.isInputPending!==void 0&&navigator.scheduling.isInputPending.bind(navigator.scheduling);function m(F){for(var Q=n(u);Q!==null;){if(Q.callback===null)r(u);else if(Q.startTime<=F)r(u),Q.sortIndex=Q.expirationTime,t(s,Q);else break;Q=n(u)}}function w(F){if(y=!1,m(F),!x)if(n(s)!==null)x=!0,q(k);else{var Q=n(u);Q!==null&&he(w,Q.startTime-F)}}function k(F,Q){x=!1,y&&(y=!1,d(j),j=-1),v=!0;var X=g;try{for(m(Q),h=n(s);h!==null&&(!(h.expirationTime>Q)||F&&!_());){var ce=h.callback;if(typeof ce=="function"){h.callback=null,g=h.priorityLevel;var ne=ce(h.expirationTime<=Q);Q=e.unstable_now(),typeof ne=="function"?h.callback=ne:h===n(s)&&r(s),m(Q)}else r(s);h=n(s)}if(h!==null)var Ce=!0;else{var we=n(u);we!==null&&he(w,we.startTime-Q),Ce=!1}return Ce}finally{h=null,g=X,v=!1}}var M=!1,E=null,j=-1,C=5,T=-1;function _(){return!(e.unstable_now()-T<C)}function I(){if(E!==null){var F=e.unstable_now();T=F;var Q=!0;try{Q=E(!0,F)}finally{Q?L():(M=!1,E=null)}}else M=!1}var L;if(typeof f=="function")L=function(){f(I)};else if(typeof MessageChannel<"u"){var U=new MessageChannel,H=U.port2;U.port1.onmessage=I,L=function(){H.postMessage(null)}}else L=function(){b(I,0)};function q(F){E=F,M||(M=!0,L())}function he(F,Q){j=b(function(){F(e.unstable_now())},Q)}e.unstable_IdlePriority=5,e.unstable_ImmediatePriority=1,e.unstable_LowPriority=4,e.unstable_NormalPriority=3,e.unstable_Profiling=null,e.unstable_UserBlockingPriority=2,e.unstable_cancelCallback=function(F){F.callback=null},e.unstable_continueExecution=function(){x||v||(x=!0,q(k))},e.unstable_forceFrameRate=function(F){0>F||125<F?console.error("forceFrameRate takes a positive int between 0 and 125, forcing frame rates higher than 125 fps is not supported"):C=0<F?Math.floor(1e3/F):5},e.unstable_getCurrentPriorityLevel=function(){return g},e.unstable_getFirstCallbackNode=function(){return n(s)},e.unstable_next=function(F){switch(g){case 1:case 2:case 3:var Q=3;break;default:Q=g}var X=g;g=Q;try{return F()}finally{g=X}},e.unstable_pauseExecution=function(){},e.unstable_requestPaint=function(){},e.unstable_runWithPriority=function(F,Q){switch(F){case 1:case 2:case 3:case 4:case 5:break;default:F=3}var X=g;g=F;try{return Q()}finally{g=X}},e.unstable_scheduleCallback=function(F,Q,X){var ce=e.unstable_now();switch(typeof X=="object"&&X!==null?(X=X.delay,X=typeof X=="number"&&0<X?ce+X:ce):X=ce,F){case 1:var ne=-1;break;case 2:ne=250;break;case 5:ne=1073741823;break;case 4:ne=1e4;break;default:ne=5e3}return ne=X+ne,F={id:p++,callback:Q,priorityLevel:F,startTime:X,expirationTime:ne,sortIndex:-1},X>ce?(F.sortIndex=X,t(u,F),n(s)===null&&F===n(u)&&(y?(d(j),j=-1):y=!0,he(w,X-ce))):(F.sortIndex=ne,t(s,F),x||v||(x=!0,q(k))),F},e.unstable_shouldYield=_,e.unstable_wrapCallback=function(F){var Q=g;return function(){var X=g;g=Q;try{return F.apply(this,arguments)}finally{g=X}}}})(wp);yp.exports=wp;var Cx=yp.exports;/**
 * @license React
 * react-dom.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */var bp=R,bt=Cx;function z(e){for(var t="https://reactjs.org/docs/error-decoder.html?invariant="+e,n=1;n<arguments.length;n++)t+="&args[]="+encodeURIComponent(arguments[n]);return"Minified React error #"+e+"; visit "+t+" for the full message or use the non-minified dev environment for full errors and additional helpful warnings."}var kp=new Set,_i={};function fr(e,t){Ur(e,t),Ur(e+"Capture",t)}function Ur(e,t){for(_i[e]=t,e=0;e<t.length;e++)kp.add(t[e])}var mn=!(typeof window>"u"||typeof window.document>"u"||typeof window.document.createElement>"u"),ml=Object.prototype.hasOwnProperty,Ox=/^[:A-Z_a-z\u00C0-\u00D6\u00D8-\u00F6\u00F8-\u02FF\u0370-\u037D\u037F-\u1FFF\u200C-\u200D\u2070-\u218F\u2C00-\u2FEF\u3001-\uD7FF\uF900-\uFDCF\uFDF0-\uFFFD][:A-Z_a-z\u00C0-\u00D6\u00D8-\u00F6\u00F8-\u02FF\u0370-\u037D\u037F-\u1FFF\u200C-\u200D\u2070-\u218F\u2C00-\u2FEF\u3001-\uD7FF\uF900-\uFDCF\uFDF0-\uFFFD\-.0-9\u00B7\u0300-\u036F\u203F-\u2040]*$/,Wc={},Bc={};function Ex(e){return ml.call(Bc,e)?!0:ml.call(Wc,e)?!1:Ox.test(e)?Bc[e]=!0:(Wc[e]=!0,!1)}function Px(e,t,n,r){if(n!==null&&n.type===0)return!1;switch(typeof t){case"function":case"symbol":return!0;case"boolean":return r?!1:n!==null?!n.acceptsBooleans:(e=e.toLowerCase().slice(0,5),e!=="data-"&&e!=="aria-");default:return!1}}function Mx(e,t,n,r){if(t===null||typeof t>"u"||Px(e,t,n,r))return!0;if(r)return!1;if(n!==null)switch(n.type){case 3:return!t;case 4:return t===!1;case 5:return isNaN(t);case 6:return isNaN(t)||1>t}return!1}function ut(e,t,n,r,i,o,a){this.acceptsBooleans=t===2||t===3||t===4,this.attributeName=r,this.attributeNamespace=i,this.mustUseProperty=n,this.propertyName=e,this.type=t,this.sanitizeURL=o,this.removeEmptyString=a}var Ge={};"children dangerouslySetInnerHTML defaultValue defaultChecked innerHTML suppressContentEditableWarning suppressHydrationWarning style".split(" ").forEach(function(e){Ge[e]=new ut(e,0,!1,e,null,!1,!1)});[["acceptCharset","accept-charset"],["className","class"],["htmlFor","for"],["httpEquiv","http-equiv"]].forEach(function(e){var t=e[0];Ge[t]=new ut(t,1,!1,e[1],null,!1,!1)});["contentEditable","draggable","spellCheck","value"].forEach(function(e){Ge[e]=new ut(e,2,!1,e.toLowerCase(),null,!1,!1)});["autoReverse","externalResourcesRequired","focusable","preserveAlpha"].forEach(function(e){Ge[e]=new ut(e,2,!1,e,null,!1,!1)});"allowFullScreen async autoFocus autoPlay controls default defer disabled disablePictureInPicture disableRemotePlayback formNoValidate hidden loop noModule noValidate open playsInline readOnly required reversed scoped seamless itemScope".split(" ").forEach(function(e){Ge[e]=new ut(e,3,!1,e.toLowerCase(),null,!1,!1)});["checked","multiple","muted","selected"].forEach(function(e){Ge[e]=new ut(e,3,!0,e,null,!1,!1)});["capture","download"].forEach(function(e){Ge[e]=new ut(e,4,!1,e,null,!1,!1)});["cols","rows","size","span"].forEach(function(e){Ge[e]=new ut(e,6,!1,e,null,!1,!1)});["rowSpan","start"].forEach(function(e){Ge[e]=new ut(e,5,!1,e.toLowerCase(),null,!1,!1)});var ju=/[\-:]([a-z])/g;function Cu(e){return e[1].toUpperCase()}"accent-height alignment-baseline arabic-form baseline-shift cap-height clip-path clip-rule color-interpolation color-interpolation-filters color-profile color-rendering dominant-baseline enable-background fill-opacity fill-rule flood-color flood-opacity font-family font-size font-size-adjust font-stretch font-style font-variant font-weight glyph-name glyph-orientation-horizontal glyph-orientation-vertical horiz-adv-x horiz-origin-x image-rendering letter-spacing lighting-color marker-end marker-mid marker-start overline-position overline-thickness paint-order panose-1 pointer-events rendering-intent shape-rendering stop-color stop-opacity strikethrough-position strikethrough-thickness stroke-dasharray stroke-dashoffset stroke-linecap stroke-linejoin stroke-miterlimit stroke-opacity stroke-width text-anchor text-decoration text-rendering underline-position underline-thickness unicode-bidi unicode-range units-per-em v-alphabetic v-hanging v-ideographic v-mathematical vector-effect vert-adv-y vert-origin-x vert-origin-y word-spacing writing-mode xmlns:xlink x-height".split(" ").forEach(function(e){var t=e.replace(ju,Cu);Ge[t]=new ut(t,1,!1,e,null,!1,!1)});"xlink:actuate xlink:arcrole xlink:role xlink:show xlink:title xlink:type".split(" ").forEach(function(e){var t=e.replace(ju,Cu);Ge[t]=new ut(t,1,!1,e,"http://www.w3.org/1999/xlink",!1,!1)});["xml:base","xml:lang","xml:space"].forEach(function(e){var t=e.replace(ju,Cu);Ge[t]=new ut(t,1,!1,e,"http://www.w3.org/XML/1998/namespace",!1,!1)});["tabIndex","crossOrigin"].forEach(function(e){Ge[e]=new ut(e,1,!1,e.toLowerCase(),null,!1,!1)});Ge.xlinkHref=new ut("xlinkHref",1,!1,"xlink:href","http://www.w3.org/1999/xlink",!0,!1);["src","href","action","formAction"].forEach(function(e){Ge[e]=new ut(e,1,!1,e.toLowerCase(),null,!0,!0)});function Ou(e,t,n,r){var i=Ge.hasOwnProperty(t)?Ge[t]:null;(i!==null?i.type!==0:r||!(2<t.length)||t[0]!=="o"&&t[0]!=="O"||t[1]!=="n"&&t[1]!=="N")&&(Mx(t,n,i,r)&&(n=null),r||i===null?Ex(t)&&(n===null?e.removeAttribute(t):e.setAttribute(t,""+n)):i.mustUseProperty?e[i.propertyName]=n===null?i.type===3?!1:"":n:(t=i.attributeName,r=i.attributeNamespace,n===null?e.removeAttribute(t):(i=i.type,n=i===3||i===4&&n===!0?"":""+n,r?e.setAttributeNS(r,t,n):e.setAttribute(t,n))))}var yn=bp.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED,so=Symbol.for("react.element"),br=Symbol.for("react.portal"),kr=Symbol.for("react.fragment"),Eu=Symbol.for("react.strict_mode"),gl=Symbol.for("react.profiler"),Sp=Symbol.for("react.provider"),jp=Symbol.for("react.context"),Pu=Symbol.for("react.forward_ref"),xl=Symbol.for("react.suspense"),vl=Symbol.for("react.suspense_list"),Mu=Symbol.for("react.memo"),Tn=Symbol.for("react.lazy"),Cp=Symbol.for("react.offscreen"),Hc=Symbol.iterator;function ei(e){return e===null||typeof e!="object"?null:(e=Hc&&e[Hc]||e["@@iterator"],typeof e=="function"?e:null)}var Ae=Object.assign,ks;function hi(e){if(ks===void 0)try{throw Error()}catch(n){var t=n.stack.trim().match(/\n( *(at )?)/);ks=t&&t[1]||""}return`
`+ks+e}var Ss=!1;function js(e,t){if(!e||Ss)return"";Ss=!0;var n=Error.prepareStackTrace;Error.prepareStackTrace=void 0;try{if(t)if(t=function(){throw Error()},Object.defineProperty(t.prototype,"props",{set:function(){throw Error()}}),typeof Reflect=="object"&&Reflect.construct){try{Reflect.construct(t,[])}catch(u){var r=u}Reflect.construct(e,[],t)}else{try{t.call()}catch(u){r=u}e.call(t.prototype)}else{try{throw Error()}catch(u){r=u}e()}}catch(u){if(u&&r&&typeof u.stack=="string"){for(var i=u.stack.split(`
`),o=r.stack.split(`
`),a=i.length-1,l=o.length-1;1<=a&&0<=l&&i[a]!==o[l];)l--;for(;1<=a&&0<=l;a--,l--)if(i[a]!==o[l]){if(a!==1||l!==1)do if(a--,l--,0>l||i[a]!==o[l]){var s=`
`+i[a].replace(" at new "," at ");return e.displayName&&s.includes("<anonymous>")&&(s=s.replace("<anonymous>",e.displayName)),s}while(1<=a&&0<=l);break}}}finally{Ss=!1,Error.prepareStackTrace=n}return(e=e?e.displayName||e.name:"")?hi(e):""}function Tx(e){switch(e.tag){case 5:return hi(e.type);case 16:return hi("Lazy");case 13:return hi("Suspense");case 19:return hi("SuspenseList");case 0:case 2:case 15:return e=js(e.type,!1),e;case 11:return e=js(e.type.render,!1),e;case 1:return e=js(e.type,!0),e;default:return""}}function yl(e){if(e==null)return null;if(typeof e=="function")return e.displayName||e.name||null;if(typeof e=="string")return e;switch(e){case kr:return"Fragment";case br:return"Portal";case gl:return"Profiler";case Eu:return"StrictMode";case xl:return"Suspense";case vl:return"SuspenseList"}if(typeof e=="object")switch(e.$$typeof){case jp:return(e.displayName||"Context")+".Consumer";case Sp:return(e._context.displayName||"Context")+".Provider";case Pu:var t=e.render;return e=e.displayName,e||(e=t.displayName||t.name||"",e=e!==""?"ForwardRef("+e+")":"ForwardRef"),e;case Mu:return t=e.displayName||null,t!==null?t:yl(e.type)||"Memo";case Tn:t=e._payload,e=e._init;try{return yl(e(t))}catch{}}return null}function _x(e){var t=e.type;switch(e.tag){case 24:return"Cache";case 9:return(t.displayName||"Context")+".Consumer";case 10:return(t._context.displayName||"Context")+".Provider";case 18:return"DehydratedFragment";case 11:return e=t.render,e=e.displayName||e.name||"",t.displayName||(e!==""?"ForwardRef("+e+")":"ForwardRef");case 7:return"Fragment";case 5:return t;case 4:return"Portal";case 3:return"Root";case 6:return"Text";case 16:return yl(t);case 8:return t===Eu?"StrictMode":"Mode";case 22:return"Offscreen";case 12:return"Profiler";case 21:return"Scope";case 13:return"Suspense";case 19:return"SuspenseList";case 25:return"TracingMarker";case 1:case 0:case 17:case 2:case 14:case 15:if(typeof t=="function")return t.displayName||t.name||null;if(typeof t=="string")return t}return null}function Yn(e){switch(typeof e){case"boolean":case"number":case"string":case"undefined":return e;case"object":return e;default:return""}}function Op(e){var t=e.type;return(e=e.nodeName)&&e.toLowerCase()==="input"&&(t==="checkbox"||t==="radio")}function Ax(e){var t=Op(e)?"checked":"value",n=Object.getOwnPropertyDescriptor(e.constructor.prototype,t),r=""+e[t];if(!e.hasOwnProperty(t)&&typeof n<"u"&&typeof n.get=="function"&&typeof n.set=="function"){var i=n.get,o=n.set;return Object.defineProperty(e,t,{configurable:!0,get:function(){return i.call(this)},set:function(a){r=""+a,o.call(this,a)}}),Object.defineProperty(e,t,{enumerable:n.enumerable}),{getValue:function(){return r},setValue:function(a){r=""+a},stopTracking:function(){e._valueTracker=null,delete e[t]}}}}function lo(e){e._valueTracker||(e._valueTracker=Ax(e))}function Ep(e){if(!e)return!1;var t=e._valueTracker;if(!t)return!0;var n=t.getValue(),r="";return e&&(r=Op(e)?e.checked?"true":"false":e.value),e=r,e!==n?(t.setValue(e),!0):!1}function ia(e){if(e=e||(typeof document<"u"?document:void 0),typeof e>"u")return null;try{return e.activeElement||e.body}catch{return e.body}}function wl(e,t){var n=t.checked;return Ae({},t,{defaultChecked:void 0,defaultValue:void 0,value:void 0,checked:n??e._wrapperState.initialChecked})}function $c(e,t){var n=t.defaultValue==null?"":t.defaultValue,r=t.checked!=null?t.checked:t.defaultChecked;n=Yn(t.value!=null?t.value:n),e._wrapperState={initialChecked:r,initialValue:n,controlled:t.type==="checkbox"||t.type==="radio"?t.checked!=null:t.value!=null}}function Pp(e,t){t=t.checked,t!=null&&Ou(e,"checked",t,!1)}function bl(e,t){Pp(e,t);var n=Yn(t.value),r=t.type;if(n!=null)r==="number"?(n===0&&e.value===""||e.value!=n)&&(e.value=""+n):e.value!==""+n&&(e.value=""+n);else if(r==="submit"||r==="reset"){e.removeAttribute("value");return}t.hasOwnProperty("value")?kl(e,t.type,n):t.hasOwnProperty("defaultValue")&&kl(e,t.type,Yn(t.defaultValue)),t.checked==null&&t.defaultChecked!=null&&(e.defaultChecked=!!t.defaultChecked)}function Yc(e,t,n){if(t.hasOwnProperty("value")||t.hasOwnProperty("defaultValue")){var r=t.type;if(!(r!=="submit"&&r!=="reset"||t.value!==void 0&&t.value!==null))return;t=""+e._wrapperState.initialValue,n||t===e.value||(e.value=t),e.defaultValue=t}n=e.name,n!==""&&(e.name=""),e.defaultChecked=!!e._wrapperState.initialChecked,n!==""&&(e.name=n)}function kl(e,t,n){(t!=="number"||ia(e.ownerDocument)!==e)&&(n==null?e.defaultValue=""+e._wrapperState.initialValue:e.defaultValue!==""+n&&(e.defaultValue=""+n))}var mi=Array.isArray;function Lr(e,t,n,r){if(e=e.options,t){t={};for(var i=0;i<n.length;i++)t["$"+n[i]]=!0;for(n=0;n<e.length;n++)i=t.hasOwnProperty("$"+e[n].value),e[n].selected!==i&&(e[n].selected=i),i&&r&&(e[n].defaultSelected=!0)}else{for(n=""+Yn(n),t=null,i=0;i<e.length;i++){if(e[i].value===n){e[i].selected=!0,r&&(e[i].defaultSelected=!0);return}t!==null||e[i].disabled||(t=e[i])}t!==null&&(t.selected=!0)}}function Sl(e,t){if(t.dangerouslySetInnerHTML!=null)throw Error(z(91));return Ae({},t,{value:void 0,defaultValue:void 0,children:""+e._wrapperState.initialValue})}function Qc(e,t){var n=t.value;if(n==null){if(n=t.children,t=t.defaultValue,n!=null){if(t!=null)throw Error(z(92));if(mi(n)){if(1<n.length)throw Error(z(93));n=n[0]}t=n}t==null&&(t=""),n=t}e._wrapperState={initialValue:Yn(n)}}function Mp(e,t){var n=Yn(t.value),r=Yn(t.defaultValue);n!=null&&(n=""+n,n!==e.value&&(e.value=n),t.defaultValue==null&&e.defaultValue!==n&&(e.defaultValue=n)),r!=null&&(e.defaultValue=""+r)}function Xc(e){var t=e.textContent;t===e._wrapperState.initialValue&&t!==""&&t!==null&&(e.value=t)}function Tp(e){switch(e){case"svg":return"http://www.w3.org/2000/svg";case"math":return"http://www.w3.org/1998/Math/MathML";default:return"http://www.w3.org/1999/xhtml"}}function jl(e,t){return e==null||e==="http://www.w3.org/1999/xhtml"?Tp(t):e==="http://www.w3.org/2000/svg"&&t==="foreignObject"?"http://www.w3.org/1999/xhtml":e}var uo,_p=function(e){return typeof MSApp<"u"&&MSApp.execUnsafeLocalFunction?function(t,n,r,i){MSApp.execUnsafeLocalFunction(function(){return e(t,n,r,i)})}:e}(function(e,t){if(e.namespaceURI!=="http://www.w3.org/2000/svg"||"innerHTML"in e)e.innerHTML=t;else{for(uo=uo||document.createElement("div"),uo.innerHTML="<svg>"+t.valueOf().toString()+"</svg>",t=uo.firstChild;e.firstChild;)e.removeChild(e.firstChild);for(;t.firstChild;)e.appendChild(t.firstChild)}});function Ai(e,t){if(t){var n=e.firstChild;if(n&&n===e.lastChild&&n.nodeType===3){n.nodeValue=t;return}}e.textContent=t}var wi={animationIterationCount:!0,aspectRatio:!0,borderImageOutset:!0,borderImageSlice:!0,borderImageWidth:!0,boxFlex:!0,boxFlexGroup:!0,boxOrdinalGroup:!0,columnCount:!0,columns:!0,flex:!0,flexGrow:!0,flexPositive:!0,flexShrink:!0,flexNegative:!0,flexOrder:!0,gridArea:!0,gridRow:!0,gridRowEnd:!0,gridRowSpan:!0,gridRowStart:!0,gridColumn:!0,gridColumnEnd:!0,gridColumnSpan:!0,gridColumnStart:!0,fontWeight:!0,lineClamp:!0,lineHeight:!0,opacity:!0,order:!0,orphans:!0,tabSize:!0,widows:!0,zIndex:!0,zoom:!0,fillOpacity:!0,floodOpacity:!0,stopOpacity:!0,strokeDasharray:!0,strokeDashoffset:!0,strokeMiterlimit:!0,strokeOpacity:!0,strokeWidth:!0},Ix=["Webkit","ms","Moz","O"];Object.keys(wi).forEach(function(e){Ix.forEach(function(t){t=t+e.charAt(0).toUpperCase()+e.substring(1),wi[t]=wi[e]})});function Ap(e,t,n){return t==null||typeof t=="boolean"||t===""?"":n||typeof t!="number"||t===0||wi.hasOwnProperty(e)&&wi[e]?(""+t).trim():t+"px"}function Ip(e,t){e=e.style;for(var n in t)if(t.hasOwnProperty(n)){var r=n.indexOf("--")===0,i=Ap(n,t[n],r);n==="float"&&(n="cssFloat"),r?e.setProperty(n,i):e[n]=i}}var Lx=Ae({menuitem:!0},{area:!0,base:!0,br:!0,col:!0,embed:!0,hr:!0,img:!0,input:!0,keygen:!0,link:!0,meta:!0,param:!0,source:!0,track:!0,wbr:!0});function Cl(e,t){if(t){if(Lx[e]&&(t.children!=null||t.dangerouslySetInnerHTML!=null))throw Error(z(137,e));if(t.dangerouslySetInnerHTML!=null){if(t.children!=null)throw Error(z(60));if(typeof t.dangerouslySetInnerHTML!="object"||!("__html"in t.dangerouslySetInnerHTML))throw Error(z(61))}if(t.style!=null&&typeof t.style!="object")throw Error(z(62))}}function Ol(e,t){if(e.indexOf("-")===-1)return typeof t.is=="string";switch(e){case"annotation-xml":case"color-profile":case"font-face":case"font-face-src":case"font-face-uri":case"font-face-format":case"font-face-name":case"missing-glyph":return!1;default:return!0}}var El=null;function Tu(e){return e=e.target||e.srcElement||window,e.correspondingUseElement&&(e=e.correspondingUseElement),e.nodeType===3?e.parentNode:e}var Pl=null,Rr=null,zr=null;function Kc(e){if(e=eo(e)){if(typeof Pl!="function")throw Error(z(280));var t=e.stateNode;t&&(t=Ya(t),Pl(e.stateNode,e.type,t))}}function Lp(e){Rr?zr?zr.push(e):zr=[e]:Rr=e}function Rp(){if(Rr){var e=Rr,t=zr;if(zr=Rr=null,Kc(e),t)for(e=0;e<t.length;e++)Kc(t[e])}}function zp(e,t){return e(t)}function Dp(){}var Cs=!1;function Fp(e,t,n){if(Cs)return e(t,n);Cs=!0;try{return zp(e,t,n)}finally{Cs=!1,(Rr!==null||zr!==null)&&(Dp(),Rp())}}function Ii(e,t){var n=e.stateNode;if(n===null)return null;var r=Ya(n);if(r===null)return null;n=r[t];e:switch(t){case"onClick":case"onClickCapture":case"onDoubleClick":case"onDoubleClickCapture":case"onMouseDown":case"onMouseDownCapture":case"onMouseMove":case"onMouseMoveCapture":case"onMouseUp":case"onMouseUpCapture":case"onMouseEnter":(r=!r.disabled)||(e=e.type,r=!(e==="button"||e==="input"||e==="select"||e==="textarea")),e=!r;break e;default:e=!1}if(e)return null;if(n&&typeof n!="function")throw Error(z(231,t,typeof n));return n}var Ml=!1;if(mn)try{var ti={};Object.defineProperty(ti,"passive",{get:function(){Ml=!0}}),window.addEventListener("test",ti,ti),window.removeEventListener("test",ti,ti)}catch{Ml=!1}function Rx(e,t,n,r,i,o,a,l,s){var u=Array.prototype.slice.call(arguments,3);try{t.apply(n,u)}catch(p){this.onError(p)}}var bi=!1,oa=null,aa=!1,Tl=null,zx={onError:function(e){bi=!0,oa=e}};function Dx(e,t,n,r,i,o,a,l,s){bi=!1,oa=null,Rx.apply(zx,arguments)}function Fx(e,t,n,r,i,o,a,l,s){if(Dx.apply(this,arguments),bi){if(bi){var u=oa;bi=!1,oa=null}else throw Error(z(198));aa||(aa=!0,Tl=u)}}function pr(e){var t=e,n=e;if(e.alternate)for(;t.return;)t=t.return;else{e=t;do t=e,t.flags&4098&&(n=t.return),e=t.return;while(e)}return t.tag===3?n:null}function Np(e){if(e.tag===13){var t=e.memoizedState;if(t===null&&(e=e.alternate,e!==null&&(t=e.memoizedState)),t!==null)return t.dehydrated}return null}function Jc(e){if(pr(e)!==e)throw Error(z(188))}function Nx(e){var t=e.alternate;if(!t){if(t=pr(e),t===null)throw Error(z(188));return t!==e?null:e}for(var n=e,r=t;;){var i=n.return;if(i===null)break;var o=i.alternate;if(o===null){if(r=i.return,r!==null){n=r;continue}break}if(i.child===o.child){for(o=i.child;o;){if(o===n)return Jc(i),e;if(o===r)return Jc(i),t;o=o.sibling}throw Error(z(188))}if(n.return!==r.return)n=i,r=o;else{for(var a=!1,l=i.child;l;){if(l===n){a=!0,n=i,r=o;break}if(l===r){a=!0,r=i,n=o;break}l=l.sibling}if(!a){for(l=o.child;l;){if(l===n){a=!0,n=o,r=i;break}if(l===r){a=!0,r=o,n=i;break}l=l.sibling}if(!a)throw Error(z(189))}}if(n.alternate!==r)throw Error(z(190))}if(n.tag!==3)throw Error(z(188));return n.stateNode.current===n?e:t}function Vp(e){return e=Nx(e),e!==null?Up(e):null}function Up(e){if(e.tag===5||e.tag===6)return e;for(e=e.child;e!==null;){var t=Up(e);if(t!==null)return t;e=e.sibling}return null}var Wp=bt.unstable_scheduleCallback,Zc=bt.unstable_cancelCallback,Vx=bt.unstable_shouldYield,Ux=bt.unstable_requestPaint,ze=bt.unstable_now,Wx=bt.unstable_getCurrentPriorityLevel,_u=bt.unstable_ImmediatePriority,Bp=bt.unstable_UserBlockingPriority,sa=bt.unstable_NormalPriority,Bx=bt.unstable_LowPriority,Hp=bt.unstable_IdlePriority,Wa=null,tn=null;function Hx(e){if(tn&&typeof tn.onCommitFiberRoot=="function")try{tn.onCommitFiberRoot(Wa,e,void 0,(e.current.flags&128)===128)}catch{}}var Bt=Math.clz32?Math.clz32:Qx,$x=Math.log,Yx=Math.LN2;function Qx(e){return e>>>=0,e===0?32:31-($x(e)/Yx|0)|0}var co=64,fo=4194304;function gi(e){switch(e&-e){case 1:return 1;case 2:return 2;case 4:return 4;case 8:return 8;case 16:return 16;case 32:return 32;case 64:case 128:case 256:case 512:case 1024:case 2048:case 4096:case 8192:case 16384:case 32768:case 65536:case 131072:case 262144:case 524288:case 1048576:case 2097152:return e&4194240;case 4194304:case 8388608:case 16777216:case 33554432:case 67108864:return e&130023424;case 134217728:return 134217728;case 268435456:return 268435456;case 536870912:return 536870912;case 1073741824:return 1073741824;default:return e}}function la(e,t){var n=e.pendingLanes;if(n===0)return 0;var r=0,i=e.suspendedLanes,o=e.pingedLanes,a=n&268435455;if(a!==0){var l=a&~i;l!==0?r=gi(l):(o&=a,o!==0&&(r=gi(o)))}else a=n&~i,a!==0?r=gi(a):o!==0&&(r=gi(o));if(r===0)return 0;if(t!==0&&t!==r&&!(t&i)&&(i=r&-r,o=t&-t,i>=o||i===16&&(o&4194240)!==0))return t;if(r&4&&(r|=n&16),t=e.entangledLanes,t!==0)for(e=e.entanglements,t&=r;0<t;)n=31-Bt(t),i=1<<n,r|=e[n],t&=~i;return r}function Xx(e,t){switch(e){case 1:case 2:case 4:return t+250;case 8:case 16:case 32:case 64:case 128:case 256:case 512:case 1024:case 2048:case 4096:case 8192:case 16384:case 32768:case 65536:case 131072:case 262144:case 524288:case 1048576:case 2097152:return t+5e3;case 4194304:case 8388608:case 16777216:case 33554432:case 67108864:return-1;case 134217728:case 268435456:case 536870912:case 1073741824:return-1;default:return-1}}function Kx(e,t){for(var n=e.suspendedLanes,r=e.pingedLanes,i=e.expirationTimes,o=e.pendingLanes;0<o;){var a=31-Bt(o),l=1<<a,s=i[a];s===-1?(!(l&n)||l&r)&&(i[a]=Xx(l,t)):s<=t&&(e.expiredLanes|=l),o&=~l}}function _l(e){return e=e.pendingLanes&-1073741825,e!==0?e:e&1073741824?1073741824:0}function $p(){var e=co;return co<<=1,!(co&4194240)&&(co=64),e}function Os(e){for(var t=[],n=0;31>n;n++)t.push(e);return t}function Gi(e,t,n){e.pendingLanes|=t,t!==536870912&&(e.suspendedLanes=0,e.pingedLanes=0),e=e.eventTimes,t=31-Bt(t),e[t]=n}function Jx(e,t){var n=e.pendingLanes&~t;e.pendingLanes=t,e.suspendedLanes=0,e.pingedLanes=0,e.expiredLanes&=t,e.mutableReadLanes&=t,e.entangledLanes&=t,t=e.entanglements;var r=e.eventTimes;for(e=e.expirationTimes;0<n;){var i=31-Bt(n),o=1<<i;t[i]=0,r[i]=-1,e[i]=-1,n&=~o}}function Au(e,t){var n=e.entangledLanes|=t;for(e=e.entanglements;n;){var r=31-Bt(n),i=1<<r;i&t|e[r]&t&&(e[r]|=t),n&=~i}}var ve=0;function Yp(e){return e&=-e,1<e?4<e?e&268435455?16:536870912:4:1}var Qp,Iu,Xp,Kp,Jp,Al=!1,po=[],Fn=null,Nn=null,Vn=null,Li=new Map,Ri=new Map,An=[],Zx="mousedown mouseup touchcancel touchend touchstart auxclick dblclick pointercancel pointerdown pointerup dragend dragstart drop compositionend compositionstart keydown keypress keyup input textInput copy cut paste click change contextmenu reset submit".split(" ");function Gc(e,t){switch(e){case"focusin":case"focusout":Fn=null;break;case"dragenter":case"dragleave":Nn=null;break;case"mouseover":case"mouseout":Vn=null;break;case"pointerover":case"pointerout":Li.delete(t.pointerId);break;case"gotpointercapture":case"lostpointercapture":Ri.delete(t.pointerId)}}function ni(e,t,n,r,i,o){return e===null||e.nativeEvent!==o?(e={blockedOn:t,domEventName:n,eventSystemFlags:r,nativeEvent:o,targetContainers:[i]},t!==null&&(t=eo(t),t!==null&&Iu(t)),e):(e.eventSystemFlags|=r,t=e.targetContainers,i!==null&&t.indexOf(i)===-1&&t.push(i),e)}function Gx(e,t,n,r,i){switch(t){case"focusin":return Fn=ni(Fn,e,t,n,r,i),!0;case"dragenter":return Nn=ni(Nn,e,t,n,r,i),!0;case"mouseover":return Vn=ni(Vn,e,t,n,r,i),!0;case"pointerover":var o=i.pointerId;return Li.set(o,ni(Li.get(o)||null,e,t,n,r,i)),!0;case"gotpointercapture":return o=i.pointerId,Ri.set(o,ni(Ri.get(o)||null,e,t,n,r,i)),!0}return!1}function Zp(e){var t=qn(e.target);if(t!==null){var n=pr(t);if(n!==null){if(t=n.tag,t===13){if(t=Np(n),t!==null){e.blockedOn=t,Jp(e.priority,function(){Xp(n)});return}}else if(t===3&&n.stateNode.current.memoizedState.isDehydrated){e.blockedOn=n.tag===3?n.stateNode.containerInfo:null;return}}}e.blockedOn=null}function Vo(e){if(e.blockedOn!==null)return!1;for(var t=e.targetContainers;0<t.length;){var n=Il(e.domEventName,e.eventSystemFlags,t[0],e.nativeEvent);if(n===null){n=e.nativeEvent;var r=new n.constructor(n.type,n);El=r,n.target.dispatchEvent(r),El=null}else return t=eo(n),t!==null&&Iu(t),e.blockedOn=n,!1;t.shift()}return!0}function qc(e,t,n){Vo(e)&&n.delete(t)}function qx(){Al=!1,Fn!==null&&Vo(Fn)&&(Fn=null),Nn!==null&&Vo(Nn)&&(Nn=null),Vn!==null&&Vo(Vn)&&(Vn=null),Li.forEach(qc),Ri.forEach(qc)}function ri(e,t){e.blockedOn===t&&(e.blockedOn=null,Al||(Al=!0,bt.unstable_scheduleCallback(bt.unstable_NormalPriority,qx)))}function zi(e){function t(i){return ri(i,e)}if(0<po.length){ri(po[0],e);for(var n=1;n<po.length;n++){var r=po[n];r.blockedOn===e&&(r.blockedOn=null)}}for(Fn!==null&&ri(Fn,e),Nn!==null&&ri(Nn,e),Vn!==null&&ri(Vn,e),Li.forEach(t),Ri.forEach(t),n=0;n<An.length;n++)r=An[n],r.blockedOn===e&&(r.blockedOn=null);for(;0<An.length&&(n=An[0],n.blockedOn===null);)Zp(n),n.blockedOn===null&&An.shift()}var Dr=yn.ReactCurrentBatchConfig,ua=!0;function ev(e,t,n,r){var i=ve,o=Dr.transition;Dr.transition=null;try{ve=1,Lu(e,t,n,r)}finally{ve=i,Dr.transition=o}}function tv(e,t,n,r){var i=ve,o=Dr.transition;Dr.transition=null;try{ve=4,Lu(e,t,n,r)}finally{ve=i,Dr.transition=o}}function Lu(e,t,n,r){if(ua){var i=Il(e,t,n,r);if(i===null)zs(e,t,r,ca,n),Gc(e,r);else if(Gx(i,e,t,n,r))r.stopPropagation();else if(Gc(e,r),t&4&&-1<Zx.indexOf(e)){for(;i!==null;){var o=eo(i);if(o!==null&&Qp(o),o=Il(e,t,n,r),o===null&&zs(e,t,r,ca,n),o===i)break;i=o}i!==null&&r.stopPropagation()}else zs(e,t,r,null,n)}}var ca=null;function Il(e,t,n,r){if(ca=null,e=Tu(r),e=qn(e),e!==null)if(t=pr(e),t===null)e=null;else if(n=t.tag,n===13){if(e=Np(t),e!==null)return e;e=null}else if(n===3){if(t.stateNode.current.memoizedState.isDehydrated)return t.tag===3?t.stateNode.containerInfo:null;e=null}else t!==e&&(e=null);return ca=e,null}function Gp(e){switch(e){case"cancel":case"click":case"close":case"contextmenu":case"copy":case"cut":case"auxclick":case"dblclick":case"dragend":case"dragstart":case"drop":case"focusin":case"focusout":case"input":case"invalid":case"keydown":case"keypress":case"keyup":case"mousedown":case"mouseup":case"paste":case"pause":case"play":case"pointercancel":case"pointerdown":case"pointerup":case"ratechange":case"reset":case"resize":case"seeked":case"submit":case"touchcancel":case"touchend":case"touchstart":case"volumechange":case"change":case"selectionchange":case"textInput":case"compositionstart":case"compositionend":case"compositionupdate":case"beforeblur":case"afterblur":case"beforeinput":case"blur":case"fullscreenchange":case"focus":case"hashchange":case"popstate":case"select":case"selectstart":return 1;case"drag":case"dragenter":case"dragexit":case"dragleave":case"dragover":case"mousemove":case"mouseout":case"mouseover":case"pointermove":case"pointerout":case"pointerover":case"scroll":case"toggle":case"touchmove":case"wheel":case"mouseenter":case"mouseleave":case"pointerenter":case"pointerleave":return 4;case"message":switch(Wx()){case _u:return 1;case Bp:return 4;case sa:case Bx:return 16;case Hp:return 536870912;default:return 16}default:return 16}}var Ln=null,Ru=null,Uo=null;function qp(){if(Uo)return Uo;var e,t=Ru,n=t.length,r,i="value"in Ln?Ln.value:Ln.textContent,o=i.length;for(e=0;e<n&&t[e]===i[e];e++);var a=n-e;for(r=1;r<=a&&t[n-r]===i[o-r];r++);return Uo=i.slice(e,1<r?1-r:void 0)}function Wo(e){var t=e.keyCode;return"charCode"in e?(e=e.charCode,e===0&&t===13&&(e=13)):e=t,e===10&&(e=13),32<=e||e===13?e:0}function ho(){return!0}function ed(){return!1}function jt(e){function t(n,r,i,o,a){this._reactName=n,this._targetInst=i,this.type=r,this.nativeEvent=o,this.target=a,this.currentTarget=null;for(var l in e)e.hasOwnProperty(l)&&(n=e[l],this[l]=n?n(o):o[l]);return this.isDefaultPrevented=(o.defaultPrevented!=null?o.defaultPrevented:o.returnValue===!1)?ho:ed,this.isPropagationStopped=ed,this}return Ae(t.prototype,{preventDefault:function(){this.defaultPrevented=!0;var n=this.nativeEvent;n&&(n.preventDefault?n.preventDefault():typeof n.returnValue!="unknown"&&(n.returnValue=!1),this.isDefaultPrevented=ho)},stopPropagation:function(){var n=this.nativeEvent;n&&(n.stopPropagation?n.stopPropagation():typeof n.cancelBubble!="unknown"&&(n.cancelBubble=!0),this.isPropagationStopped=ho)},persist:function(){},isPersistent:ho}),t}var Zr={eventPhase:0,bubbles:0,cancelable:0,timeStamp:function(e){return e.timeStamp||Date.now()},defaultPrevented:0,isTrusted:0},zu=jt(Zr),qi=Ae({},Zr,{view:0,detail:0}),nv=jt(qi),Es,Ps,ii,Ba=Ae({},qi,{screenX:0,screenY:0,clientX:0,clientY:0,pageX:0,pageY:0,ctrlKey:0,shiftKey:0,altKey:0,metaKey:0,getModifierState:Du,button:0,buttons:0,relatedTarget:function(e){return e.relatedTarget===void 0?e.fromElement===e.srcElement?e.toElement:e.fromElement:e.relatedTarget},movementX:function(e){return"movementX"in e?e.movementX:(e!==ii&&(ii&&e.type==="mousemove"?(Es=e.screenX-ii.screenX,Ps=e.screenY-ii.screenY):Ps=Es=0,ii=e),Es)},movementY:function(e){return"movementY"in e?e.movementY:Ps}}),td=jt(Ba),rv=Ae({},Ba,{dataTransfer:0}),iv=jt(rv),ov=Ae({},qi,{relatedTarget:0}),Ms=jt(ov),av=Ae({},Zr,{animationName:0,elapsedTime:0,pseudoElement:0}),sv=jt(av),lv=Ae({},Zr,{clipboardData:function(e){return"clipboardData"in e?e.clipboardData:window.clipboardData}}),uv=jt(lv),cv=Ae({},Zr,{data:0}),nd=jt(cv),dv={Esc:"Escape",Spacebar:" ",Left:"ArrowLeft",Up:"ArrowUp",Right:"ArrowRight",Down:"ArrowDown",Del:"Delete",Win:"OS",Menu:"ContextMenu",Apps:"ContextMenu",Scroll:"ScrollLock",MozPrintableKey:"Unidentified"},fv={8:"Backspace",9:"Tab",12:"Clear",13:"Enter",16:"Shift",17:"Control",18:"Alt",19:"Pause",20:"CapsLock",27:"Escape",32:" ",33:"PageUp",34:"PageDown",35:"End",36:"Home",37:"ArrowLeft",38:"ArrowUp",39:"ArrowRight",40:"ArrowDown",45:"Insert",46:"Delete",112:"F1",113:"F2",114:"F3",115:"F4",116:"F5",117:"F6",118:"F7",119:"F8",120:"F9",121:"F10",122:"F11",123:"F12",144:"NumLock",145:"ScrollLock",224:"Meta"},pv={Alt:"altKey",Control:"ctrlKey",Meta:"metaKey",Shift:"shiftKey"};function hv(e){var t=this.nativeEvent;return t.getModifierState?t.getModifierState(e):(e=pv[e])?!!t[e]:!1}function Du(){return hv}var mv=Ae({},qi,{key:function(e){if(e.key){var t=dv[e.key]||e.key;if(t!=="Unidentified")return t}return e.type==="keypress"?(e=Wo(e),e===13?"Enter":String.fromCharCode(e)):e.type==="keydown"||e.type==="keyup"?fv[e.keyCode]||"Unidentified":""},code:0,location:0,ctrlKey:0,shiftKey:0,altKey:0,metaKey:0,repeat:0,locale:0,getModifierState:Du,charCode:function(e){return e.type==="keypress"?Wo(e):0},keyCode:function(e){return e.type==="keydown"||e.type==="keyup"?e.keyCode:0},which:function(e){return e.type==="keypress"?Wo(e):e.type==="keydown"||e.type==="keyup"?e.keyCode:0}}),gv=jt(mv),xv=Ae({},Ba,{pointerId:0,width:0,height:0,pressure:0,tangentialPressure:0,tiltX:0,tiltY:0,twist:0,pointerType:0,isPrimary:0}),rd=jt(xv),vv=Ae({},qi,{touches:0,targetTouches:0,changedTouches:0,altKey:0,metaKey:0,ctrlKey:0,shiftKey:0,getModifierState:Du}),yv=jt(vv),wv=Ae({},Zr,{propertyName:0,elapsedTime:0,pseudoElement:0}),bv=jt(wv),kv=Ae({},Ba,{deltaX:function(e){return"deltaX"in e?e.deltaX:"wheelDeltaX"in e?-e.wheelDeltaX:0},deltaY:function(e){return"deltaY"in e?e.deltaY:"wheelDeltaY"in e?-e.wheelDeltaY:"wheelDelta"in e?-e.wheelDelta:0},deltaZ:0,deltaMode:0}),Sv=jt(kv),jv=[9,13,27,32],Fu=mn&&"CompositionEvent"in window,ki=null;mn&&"documentMode"in document&&(ki=document.documentMode);var Cv=mn&&"TextEvent"in window&&!ki,eh=mn&&(!Fu||ki&&8<ki&&11>=ki),id=" ",od=!1;function th(e,t){switch(e){case"keyup":return jv.indexOf(t.keyCode)!==-1;case"keydown":return t.keyCode!==229;case"keypress":case"mousedown":case"focusout":return!0;default:return!1}}function nh(e){return e=e.detail,typeof e=="object"&&"data"in e?e.data:null}var Sr=!1;function Ov(e,t){switch(e){case"compositionend":return nh(t);case"keypress":return t.which!==32?null:(od=!0,id);case"textInput":return e=t.data,e===id&&od?null:e;default:return null}}function Ev(e,t){if(Sr)return e==="compositionend"||!Fu&&th(e,t)?(e=qp(),Uo=Ru=Ln=null,Sr=!1,e):null;switch(e){case"paste":return null;case"keypress":if(!(t.ctrlKey||t.altKey||t.metaKey)||t.ctrlKey&&t.altKey){if(t.char&&1<t.char.length)return t.char;if(t.which)return String.fromCharCode(t.which)}return null;case"compositionend":return eh&&t.locale!=="ko"?null:t.data;default:return null}}var Pv={color:!0,date:!0,datetime:!0,"datetime-local":!0,email:!0,month:!0,number:!0,password:!0,range:!0,search:!0,tel:!0,text:!0,time:!0,url:!0,week:!0};function ad(e){var t=e&&e.nodeName&&e.nodeName.toLowerCase();return t==="input"?!!Pv[e.type]:t==="textarea"}function rh(e,t,n,r){Lp(r),t=da(t,"onChange"),0<t.length&&(n=new zu("onChange","change",null,n,r),e.push({event:n,listeners:t}))}var Si=null,Di=null;function Mv(e){hh(e,0)}function Ha(e){var t=Or(e);if(Ep(t))return e}function Tv(e,t){if(e==="change")return t}var ih=!1;if(mn){var Ts;if(mn){var _s="oninput"in document;if(!_s){var sd=document.createElement("div");sd.setAttribute("oninput","return;"),_s=typeof sd.oninput=="function"}Ts=_s}else Ts=!1;ih=Ts&&(!document.documentMode||9<document.documentMode)}function ld(){Si&&(Si.detachEvent("onpropertychange",oh),Di=Si=null)}function oh(e){if(e.propertyName==="value"&&Ha(Di)){var t=[];rh(t,Di,e,Tu(e)),Fp(Mv,t)}}function _v(e,t,n){e==="focusin"?(ld(),Si=t,Di=n,Si.attachEvent("onpropertychange",oh)):e==="focusout"&&ld()}function Av(e){if(e==="selectionchange"||e==="keyup"||e==="keydown")return Ha(Di)}function Iv(e,t){if(e==="click")return Ha(t)}function Lv(e,t){if(e==="input"||e==="change")return Ha(t)}function Rv(e,t){return e===t&&(e!==0||1/e===1/t)||e!==e&&t!==t}var Yt=typeof Object.is=="function"?Object.is:Rv;function Fi(e,t){if(Yt(e,t))return!0;if(typeof e!="object"||e===null||typeof t!="object"||t===null)return!1;var n=Object.keys(e),r=Object.keys(t);if(n.length!==r.length)return!1;for(r=0;r<n.length;r++){var i=n[r];if(!ml.call(t,i)||!Yt(e[i],t[i]))return!1}return!0}function ud(e){for(;e&&e.firstChild;)e=e.firstChild;return e}function cd(e,t){var n=ud(e);e=0;for(var r;n;){if(n.nodeType===3){if(r=e+n.textContent.length,e<=t&&r>=t)return{node:n,offset:t-e};e=r}e:{for(;n;){if(n.nextSibling){n=n.nextSibling;break e}n=n.parentNode}n=void 0}n=ud(n)}}function ah(e,t){return e&&t?e===t?!0:e&&e.nodeType===3?!1:t&&t.nodeType===3?ah(e,t.parentNode):"contains"in e?e.contains(t):e.compareDocumentPosition?!!(e.compareDocumentPosition(t)&16):!1:!1}function sh(){for(var e=window,t=ia();t instanceof e.HTMLIFrameElement;){try{var n=typeof t.contentWindow.location.href=="string"}catch{n=!1}if(n)e=t.contentWindow;else break;t=ia(e.document)}return t}function Nu(e){var t=e&&e.nodeName&&e.nodeName.toLowerCase();return t&&(t==="input"&&(e.type==="text"||e.type==="search"||e.type==="tel"||e.type==="url"||e.type==="password")||t==="textarea"||e.contentEditable==="true")}function zv(e){var t=sh(),n=e.focusedElem,r=e.selectionRange;if(t!==n&&n&&n.ownerDocument&&ah(n.ownerDocument.documentElement,n)){if(r!==null&&Nu(n)){if(t=r.start,e=r.end,e===void 0&&(e=t),"selectionStart"in n)n.selectionStart=t,n.selectionEnd=Math.min(e,n.value.length);else if(e=(t=n.ownerDocument||document)&&t.defaultView||window,e.getSelection){e=e.getSelection();var i=n.textContent.length,o=Math.min(r.start,i);r=r.end===void 0?o:Math.min(r.end,i),!e.extend&&o>r&&(i=r,r=o,o=i),i=cd(n,o);var a=cd(n,r);i&&a&&(e.rangeCount!==1||e.anchorNode!==i.node||e.anchorOffset!==i.offset||e.focusNode!==a.node||e.focusOffset!==a.offset)&&(t=t.createRange(),t.setStart(i.node,i.offset),e.removeAllRanges(),o>r?(e.addRange(t),e.extend(a.node,a.offset)):(t.setEnd(a.node,a.offset),e.addRange(t)))}}for(t=[],e=n;e=e.parentNode;)e.nodeType===1&&t.push({element:e,left:e.scrollLeft,top:e.scrollTop});for(typeof n.focus=="function"&&n.focus(),n=0;n<t.length;n++)e=t[n],e.element.scrollLeft=e.left,e.element.scrollTop=e.top}}var Dv=mn&&"documentMode"in document&&11>=document.documentMode,jr=null,Ll=null,ji=null,Rl=!1;function dd(e,t,n){var r=n.window===n?n.document:n.nodeType===9?n:n.ownerDocument;Rl||jr==null||jr!==ia(r)||(r=jr,"selectionStart"in r&&Nu(r)?r={start:r.selectionStart,end:r.selectionEnd}:(r=(r.ownerDocument&&r.ownerDocument.defaultView||window).getSelection(),r={anchorNode:r.anchorNode,anchorOffset:r.anchorOffset,focusNode:r.focusNode,focusOffset:r.focusOffset}),ji&&Fi(ji,r)||(ji=r,r=da(Ll,"onSelect"),0<r.length&&(t=new zu("onSelect","select",null,t,n),e.push({event:t,listeners:r}),t.target=jr)))}function mo(e,t){var n={};return n[e.toLowerCase()]=t.toLowerCase(),n["Webkit"+e]="webkit"+t,n["Moz"+e]="moz"+t,n}var Cr={animationend:mo("Animation","AnimationEnd"),animationiteration:mo("Animation","AnimationIteration"),animationstart:mo("Animation","AnimationStart"),transitionend:mo("Transition","TransitionEnd")},As={},lh={};mn&&(lh=document.createElement("div").style,"AnimationEvent"in window||(delete Cr.animationend.animation,delete Cr.animationiteration.animation,delete Cr.animationstart.animation),"TransitionEvent"in window||delete Cr.transitionend.transition);function $a(e){if(As[e])return As[e];if(!Cr[e])return e;var t=Cr[e],n;for(n in t)if(t.hasOwnProperty(n)&&n in lh)return As[e]=t[n];return e}var uh=$a("animationend"),ch=$a("animationiteration"),dh=$a("animationstart"),fh=$a("transitionend"),ph=new Map,fd="abort auxClick cancel canPlay canPlayThrough click close contextMenu copy cut drag dragEnd dragEnter dragExit dragLeave dragOver dragStart drop durationChange emptied encrypted ended error gotPointerCapture input invalid keyDown keyPress keyUp load loadedData loadedMetadata loadStart lostPointerCapture mouseDown mouseMove mouseOut mouseOver mouseUp paste pause play playing pointerCancel pointerDown pointerMove pointerOut pointerOver pointerUp progress rateChange reset resize seeked seeking stalled submit suspend timeUpdate touchCancel touchEnd touchStart volumeChange scroll toggle touchMove waiting wheel".split(" ");function Xn(e,t){ph.set(e,t),fr(t,[e])}for(var Is=0;Is<fd.length;Is++){var Ls=fd[Is],Fv=Ls.toLowerCase(),Nv=Ls[0].toUpperCase()+Ls.slice(1);Xn(Fv,"on"+Nv)}Xn(uh,"onAnimationEnd");Xn(ch,"onAnimationIteration");Xn(dh,"onAnimationStart");Xn("dblclick","onDoubleClick");Xn("focusin","onFocus");Xn("focusout","onBlur");Xn(fh,"onTransitionEnd");Ur("onMouseEnter",["mouseout","mouseover"]);Ur("onMouseLeave",["mouseout","mouseover"]);Ur("onPointerEnter",["pointerout","pointerover"]);Ur("onPointerLeave",["pointerout","pointerover"]);fr("onChange","change click focusin focusout input keydown keyup selectionchange".split(" "));fr("onSelect","focusout contextmenu dragend focusin keydown keyup mousedown mouseup selectionchange".split(" "));fr("onBeforeInput",["compositionend","keypress","textInput","paste"]);fr("onCompositionEnd","compositionend focusout keydown keypress keyup mousedown".split(" "));fr("onCompositionStart","compositionstart focusout keydown keypress keyup mousedown".split(" "));fr("onCompositionUpdate","compositionupdate focusout keydown keypress keyup mousedown".split(" "));var xi="abort canplay canplaythrough durationchange emptied encrypted ended error loadeddata loadedmetadata loadstart pause play playing progress ratechange resize seeked seeking stalled suspend timeupdate volumechange waiting".split(" "),Vv=new Set("cancel close invalid load scroll toggle".split(" ").concat(xi));function pd(e,t,n){var r=e.type||"unknown-event";e.currentTarget=n,Fx(r,t,void 0,e),e.currentTarget=null}function hh(e,t){t=(t&4)!==0;for(var n=0;n<e.length;n++){var r=e[n],i=r.event;r=r.listeners;e:{var o=void 0;if(t)for(var a=r.length-1;0<=a;a--){var l=r[a],s=l.instance,u=l.currentTarget;if(l=l.listener,s!==o&&i.isPropagationStopped())break e;pd(i,l,u),o=s}else for(a=0;a<r.length;a++){if(l=r[a],s=l.instance,u=l.currentTarget,l=l.listener,s!==o&&i.isPropagationStopped())break e;pd(i,l,u),o=s}}}if(aa)throw e=Tl,aa=!1,Tl=null,e}function Oe(e,t){var n=t[Vl];n===void 0&&(n=t[Vl]=new Set);var r=e+"__bubble";n.has(r)||(mh(t,e,2,!1),n.add(r))}function Rs(e,t,n){var r=0;t&&(r|=4),mh(n,e,r,t)}var go="_reactListening"+Math.random().toString(36).slice(2);function Ni(e){if(!e[go]){e[go]=!0,kp.forEach(function(n){n!=="selectionchange"&&(Vv.has(n)||Rs(n,!1,e),Rs(n,!0,e))});var t=e.nodeType===9?e:e.ownerDocument;t===null||t[go]||(t[go]=!0,Rs("selectionchange",!1,t))}}function mh(e,t,n,r){switch(Gp(t)){case 1:var i=ev;break;case 4:i=tv;break;default:i=Lu}n=i.bind(null,t,n,e),i=void 0,!Ml||t!=="touchstart"&&t!=="touchmove"&&t!=="wheel"||(i=!0),r?i!==void 0?e.addEventListener(t,n,{capture:!0,passive:i}):e.addEventListener(t,n,!0):i!==void 0?e.addEventListener(t,n,{passive:i}):e.addEventListener(t,n,!1)}function zs(e,t,n,r,i){var o=r;if(!(t&1)&&!(t&2)&&r!==null)e:for(;;){if(r===null)return;var a=r.tag;if(a===3||a===4){var l=r.stateNode.containerInfo;if(l===i||l.nodeType===8&&l.parentNode===i)break;if(a===4)for(a=r.return;a!==null;){var s=a.tag;if((s===3||s===4)&&(s=a.stateNode.containerInfo,s===i||s.nodeType===8&&s.parentNode===i))return;a=a.return}for(;l!==null;){if(a=qn(l),a===null)return;if(s=a.tag,s===5||s===6){r=o=a;continue e}l=l.parentNode}}r=r.return}Fp(function(){var u=o,p=Tu(n),h=[];e:{var g=ph.get(e);if(g!==void 0){var v=zu,x=e;switch(e){case"keypress":if(Wo(n)===0)break e;case"keydown":case"keyup":v=gv;break;case"focusin":x="focus",v=Ms;break;case"focusout":x="blur",v=Ms;break;case"beforeblur":case"afterblur":v=Ms;break;case"click":if(n.button===2)break e;case"auxclick":case"dblclick":case"mousedown":case"mousemove":case"mouseup":case"mouseout":case"mouseover":case"contextmenu":v=td;break;case"drag":case"dragend":case"dragenter":case"dragexit":case"dragleave":case"dragover":case"dragstart":case"drop":v=iv;break;case"touchcancel":case"touchend":case"touchmove":case"touchstart":v=yv;break;case uh:case ch:case dh:v=sv;break;case fh:v=bv;break;case"scroll":v=nv;break;case"wheel":v=Sv;break;case"copy":case"cut":case"paste":v=uv;break;case"gotpointercapture":case"lostpointercapture":case"pointercancel":case"pointerdown":case"pointermove":case"pointerout":case"pointerover":case"pointerup":v=rd}var y=(t&4)!==0,b=!y&&e==="scroll",d=y?g!==null?g+"Capture":null:g;y=[];for(var f=u,m;f!==null;){m=f;var w=m.stateNode;if(m.tag===5&&w!==null&&(m=w,d!==null&&(w=Ii(f,d),w!=null&&y.push(Vi(f,w,m)))),b)break;f=f.return}0<y.length&&(g=new v(g,x,null,n,p),h.push({event:g,listeners:y}))}}if(!(t&7)){e:{if(g=e==="mouseover"||e==="pointerover",v=e==="mouseout"||e==="pointerout",g&&n!==El&&(x=n.relatedTarget||n.fromElement)&&(qn(x)||x[gn]))break e;if((v||g)&&(g=p.window===p?p:(g=p.ownerDocument)?g.defaultView||g.parentWindow:window,v?(x=n.relatedTarget||n.toElement,v=u,x=x?qn(x):null,x!==null&&(b=pr(x),x!==b||x.tag!==5&&x.tag!==6)&&(x=null)):(v=null,x=u),v!==x)){if(y=td,w="onMouseLeave",d="onMouseEnter",f="mouse",(e==="pointerout"||e==="pointerover")&&(y=rd,w="onPointerLeave",d="onPointerEnter",f="pointer"),b=v==null?g:Or(v),m=x==null?g:Or(x),g=new y(w,f+"leave",v,n,p),g.target=b,g.relatedTarget=m,w=null,qn(p)===u&&(y=new y(d,f+"enter",x,n,p),y.target=m,y.relatedTarget=b,w=y),b=w,v&&x)t:{for(y=v,d=x,f=0,m=y;m;m=mr(m))f++;for(m=0,w=d;w;w=mr(w))m++;for(;0<f-m;)y=mr(y),f--;for(;0<m-f;)d=mr(d),m--;for(;f--;){if(y===d||d!==null&&y===d.alternate)break t;y=mr(y),d=mr(d)}y=null}else y=null;v!==null&&hd(h,g,v,y,!1),x!==null&&b!==null&&hd(h,b,x,y,!0)}}e:{if(g=u?Or(u):window,v=g.nodeName&&g.nodeName.toLowerCase(),v==="select"||v==="input"&&g.type==="file")var k=Tv;else if(ad(g))if(ih)k=Lv;else{k=Av;var M=_v}else(v=g.nodeName)&&v.toLowerCase()==="input"&&(g.type==="checkbox"||g.type==="radio")&&(k=Iv);if(k&&(k=k(e,u))){rh(h,k,n,p);break e}M&&M(e,g,u),e==="focusout"&&(M=g._wrapperState)&&M.controlled&&g.type==="number"&&kl(g,"number",g.value)}switch(M=u?Or(u):window,e){case"focusin":(ad(M)||M.contentEditable==="true")&&(jr=M,Ll=u,ji=null);break;case"focusout":ji=Ll=jr=null;break;case"mousedown":Rl=!0;break;case"contextmenu":case"mouseup":case"dragend":Rl=!1,dd(h,n,p);break;case"selectionchange":if(Dv)break;case"keydown":case"keyup":dd(h,n,p)}var E;if(Fu)e:{switch(e){case"compositionstart":var j="onCompositionStart";break e;case"compositionend":j="onCompositionEnd";break e;case"compositionupdate":j="onCompositionUpdate";break e}j=void 0}else Sr?th(e,n)&&(j="onCompositionEnd"):e==="keydown"&&n.keyCode===229&&(j="onCompositionStart");j&&(eh&&n.locale!=="ko"&&(Sr||j!=="onCompositionStart"?j==="onCompositionEnd"&&Sr&&(E=qp()):(Ln=p,Ru="value"in Ln?Ln.value:Ln.textContent,Sr=!0)),M=da(u,j),0<M.length&&(j=new nd(j,e,null,n,p),h.push({event:j,listeners:M}),E?j.data=E:(E=nh(n),E!==null&&(j.data=E)))),(E=Cv?Ov(e,n):Ev(e,n))&&(u=da(u,"onBeforeInput"),0<u.length&&(p=new nd("onBeforeInput","beforeinput",null,n,p),h.push({event:p,listeners:u}),p.data=E))}hh(h,t)})}function Vi(e,t,n){return{instance:e,listener:t,currentTarget:n}}function da(e,t){for(var n=t+"Capture",r=[];e!==null;){var i=e,o=i.stateNode;i.tag===5&&o!==null&&(i=o,o=Ii(e,n),o!=null&&r.unshift(Vi(e,o,i)),o=Ii(e,t),o!=null&&r.push(Vi(e,o,i))),e=e.return}return r}function mr(e){if(e===null)return null;do e=e.return;while(e&&e.tag!==5);return e||null}function hd(e,t,n,r,i){for(var o=t._reactName,a=[];n!==null&&n!==r;){var l=n,s=l.alternate,u=l.stateNode;if(s!==null&&s===r)break;l.tag===5&&u!==null&&(l=u,i?(s=Ii(n,o),s!=null&&a.unshift(Vi(n,s,l))):i||(s=Ii(n,o),s!=null&&a.push(Vi(n,s,l)))),n=n.return}a.length!==0&&e.push({event:t,listeners:a})}var Uv=/\r\n?/g,Wv=/\u0000|\uFFFD/g;function md(e){return(typeof e=="string"?e:""+e).replace(Uv,`
`).replace(Wv,"")}function xo(e,t,n){if(t=md(t),md(e)!==t&&n)throw Error(z(425))}function fa(){}var zl=null,Dl=null;function Fl(e,t){return e==="textarea"||e==="noscript"||typeof t.children=="string"||typeof t.children=="number"||typeof t.dangerouslySetInnerHTML=="object"&&t.dangerouslySetInnerHTML!==null&&t.dangerouslySetInnerHTML.__html!=null}var Nl=typeof setTimeout=="function"?setTimeout:void 0,Bv=typeof clearTimeout=="function"?clearTimeout:void 0,gd=typeof Promise=="function"?Promise:void 0,Hv=typeof queueMicrotask=="function"?queueMicrotask:typeof gd<"u"?function(e){return gd.resolve(null).then(e).catch($v)}:Nl;function $v(e){setTimeout(function(){throw e})}function Ds(e,t){var n=t,r=0;do{var i=n.nextSibling;if(e.removeChild(n),i&&i.nodeType===8)if(n=i.data,n==="/$"){if(r===0){e.removeChild(i),zi(t);return}r--}else n!=="$"&&n!=="$?"&&n!=="$!"||r++;n=i}while(n);zi(t)}function Un(e){for(;e!=null;e=e.nextSibling){var t=e.nodeType;if(t===1||t===3)break;if(t===8){if(t=e.data,t==="$"||t==="$!"||t==="$?")break;if(t==="/$")return null}}return e}function xd(e){e=e.previousSibling;for(var t=0;e;){if(e.nodeType===8){var n=e.data;if(n==="$"||n==="$!"||n==="$?"){if(t===0)return e;t--}else n==="/$"&&t++}e=e.previousSibling}return null}var Gr=Math.random().toString(36).slice(2),qt="__reactFiber$"+Gr,Ui="__reactProps$"+Gr,gn="__reactContainer$"+Gr,Vl="__reactEvents$"+Gr,Yv="__reactListeners$"+Gr,Qv="__reactHandles$"+Gr;function qn(e){var t=e[qt];if(t)return t;for(var n=e.parentNode;n;){if(t=n[gn]||n[qt]){if(n=t.alternate,t.child!==null||n!==null&&n.child!==null)for(e=xd(e);e!==null;){if(n=e[qt])return n;e=xd(e)}return t}e=n,n=e.parentNode}return null}function eo(e){return e=e[qt]||e[gn],!e||e.tag!==5&&e.tag!==6&&e.tag!==13&&e.tag!==3?null:e}function Or(e){if(e.tag===5||e.tag===6)return e.stateNode;throw Error(z(33))}function Ya(e){return e[Ui]||null}var Ul=[],Er=-1;function Kn(e){return{current:e}}function Ee(e){0>Er||(e.current=Ul[Er],Ul[Er]=null,Er--)}function je(e,t){Er++,Ul[Er]=e.current,e.current=t}var Qn={},rt=Kn(Qn),pt=Kn(!1),ar=Qn;function Wr(e,t){var n=e.type.contextTypes;if(!n)return Qn;var r=e.stateNode;if(r&&r.__reactInternalMemoizedUnmaskedChildContext===t)return r.__reactInternalMemoizedMaskedChildContext;var i={},o;for(o in n)i[o]=t[o];return r&&(e=e.stateNode,e.__reactInternalMemoizedUnmaskedChildContext=t,e.__reactInternalMemoizedMaskedChildContext=i),i}function ht(e){return e=e.childContextTypes,e!=null}function pa(){Ee(pt),Ee(rt)}function vd(e,t,n){if(rt.current!==Qn)throw Error(z(168));je(rt,t),je(pt,n)}function gh(e,t,n){var r=e.stateNode;if(t=t.childContextTypes,typeof r.getChildContext!="function")return n;r=r.getChildContext();for(var i in r)if(!(i in t))throw Error(z(108,_x(e)||"Unknown",i));return Ae({},n,r)}function ha(e){return e=(e=e.stateNode)&&e.__reactInternalMemoizedMergedChildContext||Qn,ar=rt.current,je(rt,e),je(pt,pt.current),!0}function yd(e,t,n){var r=e.stateNode;if(!r)throw Error(z(169));n?(e=gh(e,t,ar),r.__reactInternalMemoizedMergedChildContext=e,Ee(pt),Ee(rt),je(rt,e)):Ee(pt),je(pt,n)}var un=null,Qa=!1,Fs=!1;function xh(e){un===null?un=[e]:un.push(e)}function Xv(e){Qa=!0,xh(e)}function Jn(){if(!Fs&&un!==null){Fs=!0;var e=0,t=ve;try{var n=un;for(ve=1;e<n.length;e++){var r=n[e];do r=r(!0);while(r!==null)}un=null,Qa=!1}catch(i){throw un!==null&&(un=un.slice(e+1)),Wp(_u,Jn),i}finally{ve=t,Fs=!1}}return null}var Pr=[],Mr=0,ma=null,ga=0,Mt=[],Tt=0,sr=null,dn=1,fn="";function Zn(e,t){Pr[Mr++]=ga,Pr[Mr++]=ma,ma=e,ga=t}function vh(e,t,n){Mt[Tt++]=dn,Mt[Tt++]=fn,Mt[Tt++]=sr,sr=e;var r=dn;e=fn;var i=32-Bt(r)-1;r&=~(1<<i),n+=1;var o=32-Bt(t)+i;if(30<o){var a=i-i%5;o=(r&(1<<a)-1).toString(32),r>>=a,i-=a,dn=1<<32-Bt(t)+i|n<<i|r,fn=o+e}else dn=1<<o|n<<i|r,fn=e}function Vu(e){e.return!==null&&(Zn(e,1),vh(e,1,0))}function Uu(e){for(;e===ma;)ma=Pr[--Mr],Pr[Mr]=null,ga=Pr[--Mr],Pr[Mr]=null;for(;e===sr;)sr=Mt[--Tt],Mt[Tt]=null,fn=Mt[--Tt],Mt[Tt]=null,dn=Mt[--Tt],Mt[Tt]=null}var yt=null,vt=null,Me=!1,Ut=null;function yh(e,t){var n=At(5,null,null,0);n.elementType="DELETED",n.stateNode=t,n.return=e,t=e.deletions,t===null?(e.deletions=[n],e.flags|=16):t.push(n)}function wd(e,t){switch(e.tag){case 5:var n=e.type;return t=t.nodeType!==1||n.toLowerCase()!==t.nodeName.toLowerCase()?null:t,t!==null?(e.stateNode=t,yt=e,vt=Un(t.firstChild),!0):!1;case 6:return t=e.pendingProps===""||t.nodeType!==3?null:t,t!==null?(e.stateNode=t,yt=e,vt=null,!0):!1;case 13:return t=t.nodeType!==8?null:t,t!==null?(n=sr!==null?{id:dn,overflow:fn}:null,e.memoizedState={dehydrated:t,treeContext:n,retryLane:1073741824},n=At(18,null,null,0),n.stateNode=t,n.return=e,e.child=n,yt=e,vt=null,!0):!1;default:return!1}}function Wl(e){return(e.mode&1)!==0&&(e.flags&128)===0}function Bl(e){if(Me){var t=vt;if(t){var n=t;if(!wd(e,t)){if(Wl(e))throw Error(z(418));t=Un(n.nextSibling);var r=yt;t&&wd(e,t)?yh(r,n):(e.flags=e.flags&-4097|2,Me=!1,yt=e)}}else{if(Wl(e))throw Error(z(418));e.flags=e.flags&-4097|2,Me=!1,yt=e}}}function bd(e){for(e=e.return;e!==null&&e.tag!==5&&e.tag!==3&&e.tag!==13;)e=e.return;yt=e}function vo(e){if(e!==yt)return!1;if(!Me)return bd(e),Me=!0,!1;var t;if((t=e.tag!==3)&&!(t=e.tag!==5)&&(t=e.type,t=t!=="head"&&t!=="body"&&!Fl(e.type,e.memoizedProps)),t&&(t=vt)){if(Wl(e))throw wh(),Error(z(418));for(;t;)yh(e,t),t=Un(t.nextSibling)}if(bd(e),e.tag===13){if(e=e.memoizedState,e=e!==null?e.dehydrated:null,!e)throw Error(z(317));e:{for(e=e.nextSibling,t=0;e;){if(e.nodeType===8){var n=e.data;if(n==="/$"){if(t===0){vt=Un(e.nextSibling);break e}t--}else n!=="$"&&n!=="$!"&&n!=="$?"||t++}e=e.nextSibling}vt=null}}else vt=yt?Un(e.stateNode.nextSibling):null;return!0}function wh(){for(var e=vt;e;)e=Un(e.nextSibling)}function Br(){vt=yt=null,Me=!1}function Wu(e){Ut===null?Ut=[e]:Ut.push(e)}var Kv=yn.ReactCurrentBatchConfig;function Dt(e,t){if(e&&e.defaultProps){t=Ae({},t),e=e.defaultProps;for(var n in e)t[n]===void 0&&(t[n]=e[n]);return t}return t}var xa=Kn(null),va=null,Tr=null,Bu=null;function Hu(){Bu=Tr=va=null}function $u(e){var t=xa.current;Ee(xa),e._currentValue=t}function Hl(e,t,n){for(;e!==null;){var r=e.alternate;if((e.childLanes&t)!==t?(e.childLanes|=t,r!==null&&(r.childLanes|=t)):r!==null&&(r.childLanes&t)!==t&&(r.childLanes|=t),e===n)break;e=e.return}}function Fr(e,t){va=e,Bu=Tr=null,e=e.dependencies,e!==null&&e.firstContext!==null&&(e.lanes&t&&(ft=!0),e.firstContext=null)}function Lt(e){var t=e._currentValue;if(Bu!==e)if(e={context:e,memoizedValue:t,next:null},Tr===null){if(va===null)throw Error(z(308));Tr=e,va.dependencies={lanes:0,firstContext:e}}else Tr=Tr.next=e;return t}var er=null;function Yu(e){er===null?er=[e]:er.push(e)}function bh(e,t,n,r){var i=t.interleaved;return i===null?(n.next=n,Yu(t)):(n.next=i.next,i.next=n),t.interleaved=n,xn(e,r)}function xn(e,t){e.lanes|=t;var n=e.alternate;for(n!==null&&(n.lanes|=t),n=e,e=e.return;e!==null;)e.childLanes|=t,n=e.alternate,n!==null&&(n.childLanes|=t),n=e,e=e.return;return n.tag===3?n.stateNode:null}var _n=!1;function Qu(e){e.updateQueue={baseState:e.memoizedState,firstBaseUpdate:null,lastBaseUpdate:null,shared:{pending:null,interleaved:null,lanes:0},effects:null}}function kh(e,t){e=e.updateQueue,t.updateQueue===e&&(t.updateQueue={baseState:e.baseState,firstBaseUpdate:e.firstBaseUpdate,lastBaseUpdate:e.lastBaseUpdate,shared:e.shared,effects:e.effects})}function pn(e,t){return{eventTime:e,lane:t,tag:0,payload:null,callback:null,next:null}}function Wn(e,t,n){var r=e.updateQueue;if(r===null)return null;if(r=r.shared,pe&2){var i=r.pending;return i===null?t.next=t:(t.next=i.next,i.next=t),r.pending=t,xn(e,n)}return i=r.interleaved,i===null?(t.next=t,Yu(r)):(t.next=i.next,i.next=t),r.interleaved=t,xn(e,n)}function Bo(e,t,n){if(t=t.updateQueue,t!==null&&(t=t.shared,(n&4194240)!==0)){var r=t.lanes;r&=e.pendingLanes,n|=r,t.lanes=n,Au(e,n)}}function kd(e,t){var n=e.updateQueue,r=e.alternate;if(r!==null&&(r=r.updateQueue,n===r)){var i=null,o=null;if(n=n.firstBaseUpdate,n!==null){do{var a={eventTime:n.eventTime,lane:n.lane,tag:n.tag,payload:n.payload,callback:n.callback,next:null};o===null?i=o=a:o=o.next=a,n=n.next}while(n!==null);o===null?i=o=t:o=o.next=t}else i=o=t;n={baseState:r.baseState,firstBaseUpdate:i,lastBaseUpdate:o,shared:r.shared,effects:r.effects},e.updateQueue=n;return}e=n.lastBaseUpdate,e===null?n.firstBaseUpdate=t:e.next=t,n.lastBaseUpdate=t}function ya(e,t,n,r){var i=e.updateQueue;_n=!1;var o=i.firstBaseUpdate,a=i.lastBaseUpdate,l=i.shared.pending;if(l!==null){i.shared.pending=null;var s=l,u=s.next;s.next=null,a===null?o=u:a.next=u,a=s;var p=e.alternate;p!==null&&(p=p.updateQueue,l=p.lastBaseUpdate,l!==a&&(l===null?p.firstBaseUpdate=u:l.next=u,p.lastBaseUpdate=s))}if(o!==null){var h=i.baseState;a=0,p=u=s=null,l=o;do{var g=l.lane,v=l.eventTime;if((r&g)===g){p!==null&&(p=p.next={eventTime:v,lane:0,tag:l.tag,payload:l.payload,callback:l.callback,next:null});e:{var x=e,y=l;switch(g=t,v=n,y.tag){case 1:if(x=y.payload,typeof x=="function"){h=x.call(v,h,g);break e}h=x;break e;case 3:x.flags=x.flags&-65537|128;case 0:if(x=y.payload,g=typeof x=="function"?x.call(v,h,g):x,g==null)break e;h=Ae({},h,g);break e;case 2:_n=!0}}l.callback!==null&&l.lane!==0&&(e.flags|=64,g=i.effects,g===null?i.effects=[l]:g.push(l))}else v={eventTime:v,lane:g,tag:l.tag,payload:l.payload,callback:l.callback,next:null},p===null?(u=p=v,s=h):p=p.next=v,a|=g;if(l=l.next,l===null){if(l=i.shared.pending,l===null)break;g=l,l=g.next,g.next=null,i.lastBaseUpdate=g,i.shared.pending=null}}while(!0);if(p===null&&(s=h),i.baseState=s,i.firstBaseUpdate=u,i.lastBaseUpdate=p,t=i.shared.interleaved,t!==null){i=t;do a|=i.lane,i=i.next;while(i!==t)}else o===null&&(i.shared.lanes=0);ur|=a,e.lanes=a,e.memoizedState=h}}function Sd(e,t,n){if(e=t.effects,t.effects=null,e!==null)for(t=0;t<e.length;t++){var r=e[t],i=r.callback;if(i!==null){if(r.callback=null,r=n,typeof i!="function")throw Error(z(191,i));i.call(r)}}}var Sh=new bp.Component().refs;function $l(e,t,n,r){t=e.memoizedState,n=n(r,t),n=n==null?t:Ae({},t,n),e.memoizedState=n,e.lanes===0&&(e.updateQueue.baseState=n)}var Xa={isMounted:function(e){return(e=e._reactInternals)?pr(e)===e:!1},enqueueSetState:function(e,t,n){e=e._reactInternals;var r=st(),i=Hn(e),o=pn(r,i);o.payload=t,n!=null&&(o.callback=n),t=Wn(e,o,i),t!==null&&(Ht(t,e,i,r),Bo(t,e,i))},enqueueReplaceState:function(e,t,n){e=e._reactInternals;var r=st(),i=Hn(e),o=pn(r,i);o.tag=1,o.payload=t,n!=null&&(o.callback=n),t=Wn(e,o,i),t!==null&&(Ht(t,e,i,r),Bo(t,e,i))},enqueueForceUpdate:function(e,t){e=e._reactInternals;var n=st(),r=Hn(e),i=pn(n,r);i.tag=2,t!=null&&(i.callback=t),t=Wn(e,i,r),t!==null&&(Ht(t,e,r,n),Bo(t,e,r))}};function jd(e,t,n,r,i,o,a){return e=e.stateNode,typeof e.shouldComponentUpdate=="function"?e.shouldComponentUpdate(r,o,a):t.prototype&&t.prototype.isPureReactComponent?!Fi(n,r)||!Fi(i,o):!0}function jh(e,t,n){var r=!1,i=Qn,o=t.contextType;return typeof o=="object"&&o!==null?o=Lt(o):(i=ht(t)?ar:rt.current,r=t.contextTypes,o=(r=r!=null)?Wr(e,i):Qn),t=new t(n,o),e.memoizedState=t.state!==null&&t.state!==void 0?t.state:null,t.updater=Xa,e.stateNode=t,t._reactInternals=e,r&&(e=e.stateNode,e.__reactInternalMemoizedUnmaskedChildContext=i,e.__reactInternalMemoizedMaskedChildContext=o),t}function Cd(e,t,n,r){e=t.state,typeof t.componentWillReceiveProps=="function"&&t.componentWillReceiveProps(n,r),typeof t.UNSAFE_componentWillReceiveProps=="function"&&t.UNSAFE_componentWillReceiveProps(n,r),t.state!==e&&Xa.enqueueReplaceState(t,t.state,null)}function Yl(e,t,n,r){var i=e.stateNode;i.props=n,i.state=e.memoizedState,i.refs=Sh,Qu(e);var o=t.contextType;typeof o=="object"&&o!==null?i.context=Lt(o):(o=ht(t)?ar:rt.current,i.context=Wr(e,o)),i.state=e.memoizedState,o=t.getDerivedStateFromProps,typeof o=="function"&&($l(e,t,o,n),i.state=e.memoizedState),typeof t.getDerivedStateFromProps=="function"||typeof i.getSnapshotBeforeUpdate=="function"||typeof i.UNSAFE_componentWillMount!="function"&&typeof i.componentWillMount!="function"||(t=i.state,typeof i.componentWillMount=="function"&&i.componentWillMount(),typeof i.UNSAFE_componentWillMount=="function"&&i.UNSAFE_componentWillMount(),t!==i.state&&Xa.enqueueReplaceState(i,i.state,null),ya(e,n,i,r),i.state=e.memoizedState),typeof i.componentDidMount=="function"&&(e.flags|=4194308)}function oi(e,t,n){if(e=n.ref,e!==null&&typeof e!="function"&&typeof e!="object"){if(n._owner){if(n=n._owner,n){if(n.tag!==1)throw Error(z(309));var r=n.stateNode}if(!r)throw Error(z(147,e));var i=r,o=""+e;return t!==null&&t.ref!==null&&typeof t.ref=="function"&&t.ref._stringRef===o?t.ref:(t=function(a){var l=i.refs;l===Sh&&(l=i.refs={}),a===null?delete l[o]:l[o]=a},t._stringRef=o,t)}if(typeof e!="string")throw Error(z(284));if(!n._owner)throw Error(z(290,e))}return e}function yo(e,t){throw e=Object.prototype.toString.call(t),Error(z(31,e==="[object Object]"?"object with keys {"+Object.keys(t).join(", ")+"}":e))}function Od(e){var t=e._init;return t(e._payload)}function Ch(e){function t(d,f){if(e){var m=d.deletions;m===null?(d.deletions=[f],d.flags|=16):m.push(f)}}function n(d,f){if(!e)return null;for(;f!==null;)t(d,f),f=f.sibling;return null}function r(d,f){for(d=new Map;f!==null;)f.key!==null?d.set(f.key,f):d.set(f.index,f),f=f.sibling;return d}function i(d,f){return d=$n(d,f),d.index=0,d.sibling=null,d}function o(d,f,m){return d.index=m,e?(m=d.alternate,m!==null?(m=m.index,m<f?(d.flags|=2,f):m):(d.flags|=2,f)):(d.flags|=1048576,f)}function a(d){return e&&d.alternate===null&&(d.flags|=2),d}function l(d,f,m,w){return f===null||f.tag!==6?(f=$s(m,d.mode,w),f.return=d,f):(f=i(f,m),f.return=d,f)}function s(d,f,m,w){var k=m.type;return k===kr?p(d,f,m.props.children,w,m.key):f!==null&&(f.elementType===k||typeof k=="object"&&k!==null&&k.$$typeof===Tn&&Od(k)===f.type)?(w=i(f,m.props),w.ref=oi(d,f,m),w.return=d,w):(w=Ko(m.type,m.key,m.props,null,d.mode,w),w.ref=oi(d,f,m),w.return=d,w)}function u(d,f,m,w){return f===null||f.tag!==4||f.stateNode.containerInfo!==m.containerInfo||f.stateNode.implementation!==m.implementation?(f=Ys(m,d.mode,w),f.return=d,f):(f=i(f,m.children||[]),f.return=d,f)}function p(d,f,m,w,k){return f===null||f.tag!==7?(f=ir(m,d.mode,w,k),f.return=d,f):(f=i(f,m),f.return=d,f)}function h(d,f,m){if(typeof f=="string"&&f!==""||typeof f=="number")return f=$s(""+f,d.mode,m),f.return=d,f;if(typeof f=="object"&&f!==null){switch(f.$$typeof){case so:return m=Ko(f.type,f.key,f.props,null,d.mode,m),m.ref=oi(d,null,f),m.return=d,m;case br:return f=Ys(f,d.mode,m),f.return=d,f;case Tn:var w=f._init;return h(d,w(f._payload),m)}if(mi(f)||ei(f))return f=ir(f,d.mode,m,null),f.return=d,f;yo(d,f)}return null}function g(d,f,m,w){var k=f!==null?f.key:null;if(typeof m=="string"&&m!==""||typeof m=="number")return k!==null?null:l(d,f,""+m,w);if(typeof m=="object"&&m!==null){switch(m.$$typeof){case so:return m.key===k?s(d,f,m,w):null;case br:return m.key===k?u(d,f,m,w):null;case Tn:return k=m._init,g(d,f,k(m._payload),w)}if(mi(m)||ei(m))return k!==null?null:p(d,f,m,w,null);yo(d,m)}return null}function v(d,f,m,w,k){if(typeof w=="string"&&w!==""||typeof w=="number")return d=d.get(m)||null,l(f,d,""+w,k);if(typeof w=="object"&&w!==null){switch(w.$$typeof){case so:return d=d.get(w.key===null?m:w.key)||null,s(f,d,w,k);case br:return d=d.get(w.key===null?m:w.key)||null,u(f,d,w,k);case Tn:var M=w._init;return v(d,f,m,M(w._payload),k)}if(mi(w)||ei(w))return d=d.get(m)||null,p(f,d,w,k,null);yo(f,w)}return null}function x(d,f,m,w){for(var k=null,M=null,E=f,j=f=0,C=null;E!==null&&j<m.length;j++){E.index>j?(C=E,E=null):C=E.sibling;var T=g(d,E,m[j],w);if(T===null){E===null&&(E=C);break}e&&E&&T.alternate===null&&t(d,E),f=o(T,f,j),M===null?k=T:M.sibling=T,M=T,E=C}if(j===m.length)return n(d,E),Me&&Zn(d,j),k;if(E===null){for(;j<m.length;j++)E=h(d,m[j],w),E!==null&&(f=o(E,f,j),M===null?k=E:M.sibling=E,M=E);return Me&&Zn(d,j),k}for(E=r(d,E);j<m.length;j++)C=v(E,d,j,m[j],w),C!==null&&(e&&C.alternate!==null&&E.delete(C.key===null?j:C.key),f=o(C,f,j),M===null?k=C:M.sibling=C,M=C);return e&&E.forEach(function(_){return t(d,_)}),Me&&Zn(d,j),k}function y(d,f,m,w){var k=ei(m);if(typeof k!="function")throw Error(z(150));if(m=k.call(m),m==null)throw Error(z(151));for(var M=k=null,E=f,j=f=0,C=null,T=m.next();E!==null&&!T.done;j++,T=m.next()){E.index>j?(C=E,E=null):C=E.sibling;var _=g(d,E,T.value,w);if(_===null){E===null&&(E=C);break}e&&E&&_.alternate===null&&t(d,E),f=o(_,f,j),M===null?k=_:M.sibling=_,M=_,E=C}if(T.done)return n(d,E),Me&&Zn(d,j),k;if(E===null){for(;!T.done;j++,T=m.next())T=h(d,T.value,w),T!==null&&(f=o(T,f,j),M===null?k=T:M.sibling=T,M=T);return Me&&Zn(d,j),k}for(E=r(d,E);!T.done;j++,T=m.next())T=v(E,d,j,T.value,w),T!==null&&(e&&T.alternate!==null&&E.delete(T.key===null?j:T.key),f=o(T,f,j),M===null?k=T:M.sibling=T,M=T);return e&&E.forEach(function(I){return t(d,I)}),Me&&Zn(d,j),k}function b(d,f,m,w){if(typeof m=="object"&&m!==null&&m.type===kr&&m.key===null&&(m=m.props.children),typeof m=="object"&&m!==null){switch(m.$$typeof){case so:e:{for(var k=m.key,M=f;M!==null;){if(M.key===k){if(k=m.type,k===kr){if(M.tag===7){n(d,M.sibling),f=i(M,m.props.children),f.return=d,d=f;break e}}else if(M.elementType===k||typeof k=="object"&&k!==null&&k.$$typeof===Tn&&Od(k)===M.type){n(d,M.sibling),f=i(M,m.props),f.ref=oi(d,M,m),f.return=d,d=f;break e}n(d,M);break}else t(d,M);M=M.sibling}m.type===kr?(f=ir(m.props.children,d.mode,w,m.key),f.return=d,d=f):(w=Ko(m.type,m.key,m.props,null,d.mode,w),w.ref=oi(d,f,m),w.return=d,d=w)}return a(d);case br:e:{for(M=m.key;f!==null;){if(f.key===M)if(f.tag===4&&f.stateNode.containerInfo===m.containerInfo&&f.stateNode.implementation===m.implementation){n(d,f.sibling),f=i(f,m.children||[]),f.return=d,d=f;break e}else{n(d,f);break}else t(d,f);f=f.sibling}f=Ys(m,d.mode,w),f.return=d,d=f}return a(d);case Tn:return M=m._init,b(d,f,M(m._payload),w)}if(mi(m))return x(d,f,m,w);if(ei(m))return y(d,f,m,w);yo(d,m)}return typeof m=="string"&&m!==""||typeof m=="number"?(m=""+m,f!==null&&f.tag===6?(n(d,f.sibling),f=i(f,m),f.return=d,d=f):(n(d,f),f=$s(m,d.mode,w),f.return=d,d=f),a(d)):n(d,f)}return b}var Hr=Ch(!0),Oh=Ch(!1),to={},nn=Kn(to),Wi=Kn(to),Bi=Kn(to);function tr(e){if(e===to)throw Error(z(174));return e}function Xu(e,t){switch(je(Bi,t),je(Wi,e),je(nn,to),e=t.nodeType,e){case 9:case 11:t=(t=t.documentElement)?t.namespaceURI:jl(null,"");break;default:e=e===8?t.parentNode:t,t=e.namespaceURI||null,e=e.tagName,t=jl(t,e)}Ee(nn),je(nn,t)}function $r(){Ee(nn),Ee(Wi),Ee(Bi)}function Eh(e){tr(Bi.current);var t=tr(nn.current),n=jl(t,e.type);t!==n&&(je(Wi,e),je(nn,n))}function Ku(e){Wi.current===e&&(Ee(nn),Ee(Wi))}var Te=Kn(0);function wa(e){for(var t=e;t!==null;){if(t.tag===13){var n=t.memoizedState;if(n!==null&&(n=n.dehydrated,n===null||n.data==="$?"||n.data==="$!"))return t}else if(t.tag===19&&t.memoizedProps.revealOrder!==void 0){if(t.flags&128)return t}else if(t.child!==null){t.child.return=t,t=t.child;continue}if(t===e)break;for(;t.sibling===null;){if(t.return===null||t.return===e)return null;t=t.return}t.sibling.return=t.return,t=t.sibling}return null}var Ns=[];function Ju(){for(var e=0;e<Ns.length;e++)Ns[e]._workInProgressVersionPrimary=null;Ns.length=0}var Ho=yn.ReactCurrentDispatcher,Vs=yn.ReactCurrentBatchConfig,lr=0,_e=null,Ne=null,He=null,ba=!1,Ci=!1,Hi=0,Jv=0;function qe(){throw Error(z(321))}function Zu(e,t){if(t===null)return!1;for(var n=0;n<t.length&&n<e.length;n++)if(!Yt(e[n],t[n]))return!1;return!0}function Gu(e,t,n,r,i,o){if(lr=o,_e=t,t.memoizedState=null,t.updateQueue=null,t.lanes=0,Ho.current=e===null||e.memoizedState===null?e0:t0,e=n(r,i),Ci){o=0;do{if(Ci=!1,Hi=0,25<=o)throw Error(z(301));o+=1,He=Ne=null,t.updateQueue=null,Ho.current=n0,e=n(r,i)}while(Ci)}if(Ho.current=ka,t=Ne!==null&&Ne.next!==null,lr=0,He=Ne=_e=null,ba=!1,t)throw Error(z(300));return e}function qu(){var e=Hi!==0;return Hi=0,e}function Jt(){var e={memoizedState:null,baseState:null,baseQueue:null,queue:null,next:null};return He===null?_e.memoizedState=He=e:He=He.next=e,He}function Rt(){if(Ne===null){var e=_e.alternate;e=e!==null?e.memoizedState:null}else e=Ne.next;var t=He===null?_e.memoizedState:He.next;if(t!==null)He=t,Ne=e;else{if(e===null)throw Error(z(310));Ne=e,e={memoizedState:Ne.memoizedState,baseState:Ne.baseState,baseQueue:Ne.baseQueue,queue:Ne.queue,next:null},He===null?_e.memoizedState=He=e:He=He.next=e}return He}function $i(e,t){return typeof t=="function"?t(e):t}function Us(e){var t=Rt(),n=t.queue;if(n===null)throw Error(z(311));n.lastRenderedReducer=e;var r=Ne,i=r.baseQueue,o=n.pending;if(o!==null){if(i!==null){var a=i.next;i.next=o.next,o.next=a}r.baseQueue=i=o,n.pending=null}if(i!==null){o=i.next,r=r.baseState;var l=a=null,s=null,u=o;do{var p=u.lane;if((lr&p)===p)s!==null&&(s=s.next={lane:0,action:u.action,hasEagerState:u.hasEagerState,eagerState:u.eagerState,next:null}),r=u.hasEagerState?u.eagerState:e(r,u.action);else{var h={lane:p,action:u.action,hasEagerState:u.hasEagerState,eagerState:u.eagerState,next:null};s===null?(l=s=h,a=r):s=s.next=h,_e.lanes|=p,ur|=p}u=u.next}while(u!==null&&u!==o);s===null?a=r:s.next=l,Yt(r,t.memoizedState)||(ft=!0),t.memoizedState=r,t.baseState=a,t.baseQueue=s,n.lastRenderedState=r}if(e=n.interleaved,e!==null){i=e;do o=i.lane,_e.lanes|=o,ur|=o,i=i.next;while(i!==e)}else i===null&&(n.lanes=0);return[t.memoizedState,n.dispatch]}function Ws(e){var t=Rt(),n=t.queue;if(n===null)throw Error(z(311));n.lastRenderedReducer=e;var r=n.dispatch,i=n.pending,o=t.memoizedState;if(i!==null){n.pending=null;var a=i=i.next;do o=e(o,a.action),a=a.next;while(a!==i);Yt(o,t.memoizedState)||(ft=!0),t.memoizedState=o,t.baseQueue===null&&(t.baseState=o),n.lastRenderedState=o}return[o,r]}function Ph(){}function Mh(e,t){var n=_e,r=Rt(),i=t(),o=!Yt(r.memoizedState,i);if(o&&(r.memoizedState=i,ft=!0),r=r.queue,ec(Ah.bind(null,n,r,e),[e]),r.getSnapshot!==t||o||He!==null&&He.memoizedState.tag&1){if(n.flags|=2048,Yi(9,_h.bind(null,n,r,i,t),void 0,null),$e===null)throw Error(z(349));lr&30||Th(n,t,i)}return i}function Th(e,t,n){e.flags|=16384,e={getSnapshot:t,value:n},t=_e.updateQueue,t===null?(t={lastEffect:null,stores:null},_e.updateQueue=t,t.stores=[e]):(n=t.stores,n===null?t.stores=[e]:n.push(e))}function _h(e,t,n,r){t.value=n,t.getSnapshot=r,Ih(t)&&Lh(e)}function Ah(e,t,n){return n(function(){Ih(t)&&Lh(e)})}function Ih(e){var t=e.getSnapshot;e=e.value;try{var n=t();return!Yt(e,n)}catch{return!0}}function Lh(e){var t=xn(e,1);t!==null&&Ht(t,e,1,-1)}function Ed(e){var t=Jt();return typeof e=="function"&&(e=e()),t.memoizedState=t.baseState=e,e={pending:null,interleaved:null,lanes:0,dispatch:null,lastRenderedReducer:$i,lastRenderedState:e},t.queue=e,e=e.dispatch=qv.bind(null,_e,e),[t.memoizedState,e]}function Yi(e,t,n,r){return e={tag:e,create:t,destroy:n,deps:r,next:null},t=_e.updateQueue,t===null?(t={lastEffect:null,stores:null},_e.updateQueue=t,t.lastEffect=e.next=e):(n=t.lastEffect,n===null?t.lastEffect=e.next=e:(r=n.next,n.next=e,e.next=r,t.lastEffect=e)),e}function Rh(){return Rt().memoizedState}function $o(e,t,n,r){var i=Jt();_e.flags|=e,i.memoizedState=Yi(1|t,n,void 0,r===void 0?null:r)}function Ka(e,t,n,r){var i=Rt();r=r===void 0?null:r;var o=void 0;if(Ne!==null){var a=Ne.memoizedState;if(o=a.destroy,r!==null&&Zu(r,a.deps)){i.memoizedState=Yi(t,n,o,r);return}}_e.flags|=e,i.memoizedState=Yi(1|t,n,o,r)}function Pd(e,t){return $o(8390656,8,e,t)}function ec(e,t){return Ka(2048,8,e,t)}function zh(e,t){return Ka(4,2,e,t)}function Dh(e,t){return Ka(4,4,e,t)}function Fh(e,t){if(typeof t=="function")return e=e(),t(e),function(){t(null)};if(t!=null)return e=e(),t.current=e,function(){t.current=null}}function Nh(e,t,n){return n=n!=null?n.concat([e]):null,Ka(4,4,Fh.bind(null,t,e),n)}function tc(){}function Vh(e,t){var n=Rt();t=t===void 0?null:t;var r=n.memoizedState;return r!==null&&t!==null&&Zu(t,r[1])?r[0]:(n.memoizedState=[e,t],e)}function Uh(e,t){var n=Rt();t=t===void 0?null:t;var r=n.memoizedState;return r!==null&&t!==null&&Zu(t,r[1])?r[0]:(e=e(),n.memoizedState=[e,t],e)}function Wh(e,t,n){return lr&21?(Yt(n,t)||(n=$p(),_e.lanes|=n,ur|=n,e.baseState=!0),t):(e.baseState&&(e.baseState=!1,ft=!0),e.memoizedState=n)}function Zv(e,t){var n=ve;ve=n!==0&&4>n?n:4,e(!0);var r=Vs.transition;Vs.transition={};try{e(!1),t()}finally{ve=n,Vs.transition=r}}function Bh(){return Rt().memoizedState}function Gv(e,t,n){var r=Hn(e);if(n={lane:r,action:n,hasEagerState:!1,eagerState:null,next:null},Hh(e))$h(t,n);else if(n=bh(e,t,n,r),n!==null){var i=st();Ht(n,e,r,i),Yh(n,t,r)}}function qv(e,t,n){var r=Hn(e),i={lane:r,action:n,hasEagerState:!1,eagerState:null,next:null};if(Hh(e))$h(t,i);else{var o=e.alternate;if(e.lanes===0&&(o===null||o.lanes===0)&&(o=t.lastRenderedReducer,o!==null))try{var a=t.lastRenderedState,l=o(a,n);if(i.hasEagerState=!0,i.eagerState=l,Yt(l,a)){var s=t.interleaved;s===null?(i.next=i,Yu(t)):(i.next=s.next,s.next=i),t.interleaved=i;return}}catch{}finally{}n=bh(e,t,i,r),n!==null&&(i=st(),Ht(n,e,r,i),Yh(n,t,r))}}function Hh(e){var t=e.alternate;return e===_e||t!==null&&t===_e}function $h(e,t){Ci=ba=!0;var n=e.pending;n===null?t.next=t:(t.next=n.next,n.next=t),e.pending=t}function Yh(e,t,n){if(n&4194240){var r=t.lanes;r&=e.pendingLanes,n|=r,t.lanes=n,Au(e,n)}}var ka={readContext:Lt,useCallback:qe,useContext:qe,useEffect:qe,useImperativeHandle:qe,useInsertionEffect:qe,useLayoutEffect:qe,useMemo:qe,useReducer:qe,useRef:qe,useState:qe,useDebugValue:qe,useDeferredValue:qe,useTransition:qe,useMutableSource:qe,useSyncExternalStore:qe,useId:qe,unstable_isNewReconciler:!1},e0={readContext:Lt,useCallback:function(e,t){return Jt().memoizedState=[e,t===void 0?null:t],e},useContext:Lt,useEffect:Pd,useImperativeHandle:function(e,t,n){return n=n!=null?n.concat([e]):null,$o(4194308,4,Fh.bind(null,t,e),n)},useLayoutEffect:function(e,t){return $o(4194308,4,e,t)},useInsertionEffect:function(e,t){return $o(4,2,e,t)},useMemo:function(e,t){var n=Jt();return t=t===void 0?null:t,e=e(),n.memoizedState=[e,t],e},useReducer:function(e,t,n){var r=Jt();return t=n!==void 0?n(t):t,r.memoizedState=r.baseState=t,e={pending:null,interleaved:null,lanes:0,dispatch:null,lastRenderedReducer:e,lastRenderedState:t},r.queue=e,e=e.dispatch=Gv.bind(null,_e,e),[r.memoizedState,e]},useRef:function(e){var t=Jt();return e={current:e},t.memoizedState=e},useState:Ed,useDebugValue:tc,useDeferredValue:function(e){return Jt().memoizedState=e},useTransition:function(){var e=Ed(!1),t=e[0];return e=Zv.bind(null,e[1]),Jt().memoizedState=e,[t,e]},useMutableSource:function(){},useSyncExternalStore:function(e,t,n){var r=_e,i=Jt();if(Me){if(n===void 0)throw Error(z(407));n=n()}else{if(n=t(),$e===null)throw Error(z(349));lr&30||Th(r,t,n)}i.memoizedState=n;var o={value:n,getSnapshot:t};return i.queue=o,Pd(Ah.bind(null,r,o,e),[e]),r.flags|=2048,Yi(9,_h.bind(null,r,o,n,t),void 0,null),n},useId:function(){var e=Jt(),t=$e.identifierPrefix;if(Me){var n=fn,r=dn;n=(r&~(1<<32-Bt(r)-1)).toString(32)+n,t=":"+t+"R"+n,n=Hi++,0<n&&(t+="H"+n.toString(32)),t+=":"}else n=Jv++,t=":"+t+"r"+n.toString(32)+":";return e.memoizedState=t},unstable_isNewReconciler:!1},t0={readContext:Lt,useCallback:Vh,useContext:Lt,useEffect:ec,useImperativeHandle:Nh,useInsertionEffect:zh,useLayoutEffect:Dh,useMemo:Uh,useReducer:Us,useRef:Rh,useState:function(){return Us($i)},useDebugValue:tc,useDeferredValue:function(e){var t=Rt();return Wh(t,Ne.memoizedState,e)},useTransition:function(){var e=Us($i)[0],t=Rt().memoizedState;return[e,t]},useMutableSource:Ph,useSyncExternalStore:Mh,useId:Bh,unstable_isNewReconciler:!1},n0={readContext:Lt,useCallback:Vh,useContext:Lt,useEffect:ec,useImperativeHandle:Nh,useInsertionEffect:zh,useLayoutEffect:Dh,useMemo:Uh,useReducer:Ws,useRef:Rh,useState:function(){return Ws($i)},useDebugValue:tc,useDeferredValue:function(e){var t=Rt();return Ne===null?t.memoizedState=e:Wh(t,Ne.memoizedState,e)},useTransition:function(){var e=Ws($i)[0],t=Rt().memoizedState;return[e,t]},useMutableSource:Ph,useSyncExternalStore:Mh,useId:Bh,unstable_isNewReconciler:!1};function Yr(e,t){try{var n="",r=t;do n+=Tx(r),r=r.return;while(r);var i=n}catch(o){i=`
Error generating stack: `+o.message+`
`+o.stack}return{value:e,source:t,stack:i,digest:null}}function Bs(e,t,n){return{value:e,source:null,stack:n??null,digest:t??null}}function Ql(e,t){try{console.error(t.value)}catch(n){setTimeout(function(){throw n})}}var r0=typeof WeakMap=="function"?WeakMap:Map;function Qh(e,t,n){n=pn(-1,n),n.tag=3,n.payload={element:null};var r=t.value;return n.callback=function(){ja||(ja=!0,ru=r),Ql(e,t)},n}function Xh(e,t,n){n=pn(-1,n),n.tag=3;var r=e.type.getDerivedStateFromError;if(typeof r=="function"){var i=t.value;n.payload=function(){return r(i)},n.callback=function(){Ql(e,t)}}var o=e.stateNode;return o!==null&&typeof o.componentDidCatch=="function"&&(n.callback=function(){Ql(e,t),typeof r!="function"&&(Bn===null?Bn=new Set([this]):Bn.add(this));var a=t.stack;this.componentDidCatch(t.value,{componentStack:a!==null?a:""})}),n}function Md(e,t,n){var r=e.pingCache;if(r===null){r=e.pingCache=new r0;var i=new Set;r.set(t,i)}else i=r.get(t),i===void 0&&(i=new Set,r.set(t,i));i.has(n)||(i.add(n),e=x0.bind(null,e,t,n),t.then(e,e))}function Td(e){do{var t;if((t=e.tag===13)&&(t=e.memoizedState,t=t!==null?t.dehydrated!==null:!0),t)return e;e=e.return}while(e!==null);return null}function _d(e,t,n,r,i){return e.mode&1?(e.flags|=65536,e.lanes=i,e):(e===t?e.flags|=65536:(e.flags|=128,n.flags|=131072,n.flags&=-52805,n.tag===1&&(n.alternate===null?n.tag=17:(t=pn(-1,1),t.tag=2,Wn(n,t,1))),n.lanes|=1),e)}var i0=yn.ReactCurrentOwner,ft=!1;function ot(e,t,n,r){t.child=e===null?Oh(t,null,n,r):Hr(t,e.child,n,r)}function Ad(e,t,n,r,i){n=n.render;var o=t.ref;return Fr(t,i),r=Gu(e,t,n,r,o,i),n=qu(),e!==null&&!ft?(t.updateQueue=e.updateQueue,t.flags&=-2053,e.lanes&=~i,vn(e,t,i)):(Me&&n&&Vu(t),t.flags|=1,ot(e,t,r,i),t.child)}function Id(e,t,n,r,i){if(e===null){var o=n.type;return typeof o=="function"&&!uc(o)&&o.defaultProps===void 0&&n.compare===null&&n.defaultProps===void 0?(t.tag=15,t.type=o,Kh(e,t,o,r,i)):(e=Ko(n.type,null,r,t,t.mode,i),e.ref=t.ref,e.return=t,t.child=e)}if(o=e.child,!(e.lanes&i)){var a=o.memoizedProps;if(n=n.compare,n=n!==null?n:Fi,n(a,r)&&e.ref===t.ref)return vn(e,t,i)}return t.flags|=1,e=$n(o,r),e.ref=t.ref,e.return=t,t.child=e}function Kh(e,t,n,r,i){if(e!==null){var o=e.memoizedProps;if(Fi(o,r)&&e.ref===t.ref)if(ft=!1,t.pendingProps=r=o,(e.lanes&i)!==0)e.flags&131072&&(ft=!0);else return t.lanes=e.lanes,vn(e,t,i)}return Xl(e,t,n,r,i)}function Jh(e,t,n){var r=t.pendingProps,i=r.children,o=e!==null?e.memoizedState:null;if(r.mode==="hidden")if(!(t.mode&1))t.memoizedState={baseLanes:0,cachePool:null,transitions:null},je(Ar,xt),xt|=n;else{if(!(n&1073741824))return e=o!==null?o.baseLanes|n:n,t.lanes=t.childLanes=1073741824,t.memoizedState={baseLanes:e,cachePool:null,transitions:null},t.updateQueue=null,je(Ar,xt),xt|=e,null;t.memoizedState={baseLanes:0,cachePool:null,transitions:null},r=o!==null?o.baseLanes:n,je(Ar,xt),xt|=r}else o!==null?(r=o.baseLanes|n,t.memoizedState=null):r=n,je(Ar,xt),xt|=r;return ot(e,t,i,n),t.child}function Zh(e,t){var n=t.ref;(e===null&&n!==null||e!==null&&e.ref!==n)&&(t.flags|=512,t.flags|=2097152)}function Xl(e,t,n,r,i){var o=ht(n)?ar:rt.current;return o=Wr(t,o),Fr(t,i),n=Gu(e,t,n,r,o,i),r=qu(),e!==null&&!ft?(t.updateQueue=e.updateQueue,t.flags&=-2053,e.lanes&=~i,vn(e,t,i)):(Me&&r&&Vu(t),t.flags|=1,ot(e,t,n,i),t.child)}function Ld(e,t,n,r,i){if(ht(n)){var o=!0;ha(t)}else o=!1;if(Fr(t,i),t.stateNode===null)Yo(e,t),jh(t,n,r),Yl(t,n,r,i),r=!0;else if(e===null){var a=t.stateNode,l=t.memoizedProps;a.props=l;var s=a.context,u=n.contextType;typeof u=="object"&&u!==null?u=Lt(u):(u=ht(n)?ar:rt.current,u=Wr(t,u));var p=n.getDerivedStateFromProps,h=typeof p=="function"||typeof a.getSnapshotBeforeUpdate=="function";h||typeof a.UNSAFE_componentWillReceiveProps!="function"&&typeof a.componentWillReceiveProps!="function"||(l!==r||s!==u)&&Cd(t,a,r,u),_n=!1;var g=t.memoizedState;a.state=g,ya(t,r,a,i),s=t.memoizedState,l!==r||g!==s||pt.current||_n?(typeof p=="function"&&($l(t,n,p,r),s=t.memoizedState),(l=_n||jd(t,n,l,r,g,s,u))?(h||typeof a.UNSAFE_componentWillMount!="function"&&typeof a.componentWillMount!="function"||(typeof a.componentWillMount=="function"&&a.componentWillMount(),typeof a.UNSAFE_componentWillMount=="function"&&a.UNSAFE_componentWillMount()),typeof a.componentDidMount=="function"&&(t.flags|=4194308)):(typeof a.componentDidMount=="function"&&(t.flags|=4194308),t.memoizedProps=r,t.memoizedState=s),a.props=r,a.state=s,a.context=u,r=l):(typeof a.componentDidMount=="function"&&(t.flags|=4194308),r=!1)}else{a=t.stateNode,kh(e,t),l=t.memoizedProps,u=t.type===t.elementType?l:Dt(t.type,l),a.props=u,h=t.pendingProps,g=a.context,s=n.contextType,typeof s=="object"&&s!==null?s=Lt(s):(s=ht(n)?ar:rt.current,s=Wr(t,s));var v=n.getDerivedStateFromProps;(p=typeof v=="function"||typeof a.getSnapshotBeforeUpdate=="function")||typeof a.UNSAFE_componentWillReceiveProps!="function"&&typeof a.componentWillReceiveProps!="function"||(l!==h||g!==s)&&Cd(t,a,r,s),_n=!1,g=t.memoizedState,a.state=g,ya(t,r,a,i);var x=t.memoizedState;l!==h||g!==x||pt.current||_n?(typeof v=="function"&&($l(t,n,v,r),x=t.memoizedState),(u=_n||jd(t,n,u,r,g,x,s)||!1)?(p||typeof a.UNSAFE_componentWillUpdate!="function"&&typeof a.componentWillUpdate!="function"||(typeof a.componentWillUpdate=="function"&&a.componentWillUpdate(r,x,s),typeof a.UNSAFE_componentWillUpdate=="function"&&a.UNSAFE_componentWillUpdate(r,x,s)),typeof a.componentDidUpdate=="function"&&(t.flags|=4),typeof a.getSnapshotBeforeUpdate=="function"&&(t.flags|=1024)):(typeof a.componentDidUpdate!="function"||l===e.memoizedProps&&g===e.memoizedState||(t.flags|=4),typeof a.getSnapshotBeforeUpdate!="function"||l===e.memoizedProps&&g===e.memoizedState||(t.flags|=1024),t.memoizedProps=r,t.memoizedState=x),a.props=r,a.state=x,a.context=s,r=u):(typeof a.componentDidUpdate!="function"||l===e.memoizedProps&&g===e.memoizedState||(t.flags|=4),typeof a.getSnapshotBeforeUpdate!="function"||l===e.memoizedProps&&g===e.memoizedState||(t.flags|=1024),r=!1)}return Kl(e,t,n,r,o,i)}function Kl(e,t,n,r,i,o){Zh(e,t);var a=(t.flags&128)!==0;if(!r&&!a)return i&&yd(t,n,!1),vn(e,t,o);r=t.stateNode,i0.current=t;var l=a&&typeof n.getDerivedStateFromError!="function"?null:r.render();return t.flags|=1,e!==null&&a?(t.child=Hr(t,e.child,null,o),t.child=Hr(t,null,l,o)):ot(e,t,l,o),t.memoizedState=r.state,i&&yd(t,n,!0),t.child}function Gh(e){var t=e.stateNode;t.pendingContext?vd(e,t.pendingContext,t.pendingContext!==t.context):t.context&&vd(e,t.context,!1),Xu(e,t.containerInfo)}function Rd(e,t,n,r,i){return Br(),Wu(i),t.flags|=256,ot(e,t,n,r),t.child}var Jl={dehydrated:null,treeContext:null,retryLane:0};function Zl(e){return{baseLanes:e,cachePool:null,transitions:null}}function qh(e,t,n){var r=t.pendingProps,i=Te.current,o=!1,a=(t.flags&128)!==0,l;if((l=a)||(l=e!==null&&e.memoizedState===null?!1:(i&2)!==0),l?(o=!0,t.flags&=-129):(e===null||e.memoizedState!==null)&&(i|=1),je(Te,i&1),e===null)return Bl(t),e=t.memoizedState,e!==null&&(e=e.dehydrated,e!==null)?(t.mode&1?e.data==="$!"?t.lanes=8:t.lanes=1073741824:t.lanes=1,null):(a=r.children,e=r.fallback,o?(r=t.mode,o=t.child,a={mode:"hidden",children:a},!(r&1)&&o!==null?(o.childLanes=0,o.pendingProps=a):o=Ga(a,r,0,null),e=ir(e,r,n,null),o.return=t,e.return=t,o.sibling=e,t.child=o,t.child.memoizedState=Zl(n),t.memoizedState=Jl,e):nc(t,a));if(i=e.memoizedState,i!==null&&(l=i.dehydrated,l!==null))return o0(e,t,a,r,l,i,n);if(o){o=r.fallback,a=t.mode,i=e.child,l=i.sibling;var s={mode:"hidden",children:r.children};return!(a&1)&&t.child!==i?(r=t.child,r.childLanes=0,r.pendingProps=s,t.deletions=null):(r=$n(i,s),r.subtreeFlags=i.subtreeFlags&14680064),l!==null?o=$n(l,o):(o=ir(o,a,n,null),o.flags|=2),o.return=t,r.return=t,r.sibling=o,t.child=r,r=o,o=t.child,a=e.child.memoizedState,a=a===null?Zl(n):{baseLanes:a.baseLanes|n,cachePool:null,transitions:a.transitions},o.memoizedState=a,o.childLanes=e.childLanes&~n,t.memoizedState=Jl,r}return o=e.child,e=o.sibling,r=$n(o,{mode:"visible",children:r.children}),!(t.mode&1)&&(r.lanes=n),r.return=t,r.sibling=null,e!==null&&(n=t.deletions,n===null?(t.deletions=[e],t.flags|=16):n.push(e)),t.child=r,t.memoizedState=null,r}function nc(e,t){return t=Ga({mode:"visible",children:t},e.mode,0,null),t.return=e,e.child=t}function wo(e,t,n,r){return r!==null&&Wu(r),Hr(t,e.child,null,n),e=nc(t,t.pendingProps.children),e.flags|=2,t.memoizedState=null,e}function o0(e,t,n,r,i,o,a){if(n)return t.flags&256?(t.flags&=-257,r=Bs(Error(z(422))),wo(e,t,a,r)):t.memoizedState!==null?(t.child=e.child,t.flags|=128,null):(o=r.fallback,i=t.mode,r=Ga({mode:"visible",children:r.children},i,0,null),o=ir(o,i,a,null),o.flags|=2,r.return=t,o.return=t,r.sibling=o,t.child=r,t.mode&1&&Hr(t,e.child,null,a),t.child.memoizedState=Zl(a),t.memoizedState=Jl,o);if(!(t.mode&1))return wo(e,t,a,null);if(i.data==="$!"){if(r=i.nextSibling&&i.nextSibling.dataset,r)var l=r.dgst;return r=l,o=Error(z(419)),r=Bs(o,r,void 0),wo(e,t,a,r)}if(l=(a&e.childLanes)!==0,ft||l){if(r=$e,r!==null){switch(a&-a){case 4:i=2;break;case 16:i=8;break;case 64:case 128:case 256:case 512:case 1024:case 2048:case 4096:case 8192:case 16384:case 32768:case 65536:case 131072:case 262144:case 524288:case 1048576:case 2097152:case 4194304:case 8388608:case 16777216:case 33554432:case 67108864:i=32;break;case 536870912:i=268435456;break;default:i=0}i=i&(r.suspendedLanes|a)?0:i,i!==0&&i!==o.retryLane&&(o.retryLane=i,xn(e,i),Ht(r,e,i,-1))}return lc(),r=Bs(Error(z(421))),wo(e,t,a,r)}return i.data==="$?"?(t.flags|=128,t.child=e.child,t=v0.bind(null,e),i._reactRetry=t,null):(e=o.treeContext,vt=Un(i.nextSibling),yt=t,Me=!0,Ut=null,e!==null&&(Mt[Tt++]=dn,Mt[Tt++]=fn,Mt[Tt++]=sr,dn=e.id,fn=e.overflow,sr=t),t=nc(t,r.children),t.flags|=4096,t)}function zd(e,t,n){e.lanes|=t;var r=e.alternate;r!==null&&(r.lanes|=t),Hl(e.return,t,n)}function Hs(e,t,n,r,i){var o=e.memoizedState;o===null?e.memoizedState={isBackwards:t,rendering:null,renderingStartTime:0,last:r,tail:n,tailMode:i}:(o.isBackwards=t,o.rendering=null,o.renderingStartTime=0,o.last=r,o.tail=n,o.tailMode=i)}function em(e,t,n){var r=t.pendingProps,i=r.revealOrder,o=r.tail;if(ot(e,t,r.children,n),r=Te.current,r&2)r=r&1|2,t.flags|=128;else{if(e!==null&&e.flags&128)e:for(e=t.child;e!==null;){if(e.tag===13)e.memoizedState!==null&&zd(e,n,t);else if(e.tag===19)zd(e,n,t);else if(e.child!==null){e.child.return=e,e=e.child;continue}if(e===t)break e;for(;e.sibling===null;){if(e.return===null||e.return===t)break e;e=e.return}e.sibling.return=e.return,e=e.sibling}r&=1}if(je(Te,r),!(t.mode&1))t.memoizedState=null;else switch(i){case"forwards":for(n=t.child,i=null;n!==null;)e=n.alternate,e!==null&&wa(e)===null&&(i=n),n=n.sibling;n=i,n===null?(i=t.child,t.child=null):(i=n.sibling,n.sibling=null),Hs(t,!1,i,n,o);break;case"backwards":for(n=null,i=t.child,t.child=null;i!==null;){if(e=i.alternate,e!==null&&wa(e)===null){t.child=i;break}e=i.sibling,i.sibling=n,n=i,i=e}Hs(t,!0,n,null,o);break;case"together":Hs(t,!1,null,null,void 0);break;default:t.memoizedState=null}return t.child}function Yo(e,t){!(t.mode&1)&&e!==null&&(e.alternate=null,t.alternate=null,t.flags|=2)}function vn(e,t,n){if(e!==null&&(t.dependencies=e.dependencies),ur|=t.lanes,!(n&t.childLanes))return null;if(e!==null&&t.child!==e.child)throw Error(z(153));if(t.child!==null){for(e=t.child,n=$n(e,e.pendingProps),t.child=n,n.return=t;e.sibling!==null;)e=e.sibling,n=n.sibling=$n(e,e.pendingProps),n.return=t;n.sibling=null}return t.child}function a0(e,t,n){switch(t.tag){case 3:Gh(t),Br();break;case 5:Eh(t);break;case 1:ht(t.type)&&ha(t);break;case 4:Xu(t,t.stateNode.containerInfo);break;case 10:var r=t.type._context,i=t.memoizedProps.value;je(xa,r._currentValue),r._currentValue=i;break;case 13:if(r=t.memoizedState,r!==null)return r.dehydrated!==null?(je(Te,Te.current&1),t.flags|=128,null):n&t.child.childLanes?qh(e,t,n):(je(Te,Te.current&1),e=vn(e,t,n),e!==null?e.sibling:null);je(Te,Te.current&1);break;case 19:if(r=(n&t.childLanes)!==0,e.flags&128){if(r)return em(e,t,n);t.flags|=128}if(i=t.memoizedState,i!==null&&(i.rendering=null,i.tail=null,i.lastEffect=null),je(Te,Te.current),r)break;return null;case 22:case 23:return t.lanes=0,Jh(e,t,n)}return vn(e,t,n)}var tm,Gl,nm,rm;tm=function(e,t){for(var n=t.child;n!==null;){if(n.tag===5||n.tag===6)e.appendChild(n.stateNode);else if(n.tag!==4&&n.child!==null){n.child.return=n,n=n.child;continue}if(n===t)break;for(;n.sibling===null;){if(n.return===null||n.return===t)return;n=n.return}n.sibling.return=n.return,n=n.sibling}};Gl=function(){};nm=function(e,t,n,r){var i=e.memoizedProps;if(i!==r){e=t.stateNode,tr(nn.current);var o=null;switch(n){case"input":i=wl(e,i),r=wl(e,r),o=[];break;case"select":i=Ae({},i,{value:void 0}),r=Ae({},r,{value:void 0}),o=[];break;case"textarea":i=Sl(e,i),r=Sl(e,r),o=[];break;default:typeof i.onClick!="function"&&typeof r.onClick=="function"&&(e.onclick=fa)}Cl(n,r);var a;n=null;for(u in i)if(!r.hasOwnProperty(u)&&i.hasOwnProperty(u)&&i[u]!=null)if(u==="style"){var l=i[u];for(a in l)l.hasOwnProperty(a)&&(n||(n={}),n[a]="")}else u!=="dangerouslySetInnerHTML"&&u!=="children"&&u!=="suppressContentEditableWarning"&&u!=="suppressHydrationWarning"&&u!=="autoFocus"&&(_i.hasOwnProperty(u)?o||(o=[]):(o=o||[]).push(u,null));for(u in r){var s=r[u];if(l=i!=null?i[u]:void 0,r.hasOwnProperty(u)&&s!==l&&(s!=null||l!=null))if(u==="style")if(l){for(a in l)!l.hasOwnProperty(a)||s&&s.hasOwnProperty(a)||(n||(n={}),n[a]="");for(a in s)s.hasOwnProperty(a)&&l[a]!==s[a]&&(n||(n={}),n[a]=s[a])}else n||(o||(o=[]),o.push(u,n)),n=s;else u==="dangerouslySetInnerHTML"?(s=s?s.__html:void 0,l=l?l.__html:void 0,s!=null&&l!==s&&(o=o||[]).push(u,s)):u==="children"?typeof s!="string"&&typeof s!="number"||(o=o||[]).push(u,""+s):u!=="suppressContentEditableWarning"&&u!=="suppressHydrationWarning"&&(_i.hasOwnProperty(u)?(s!=null&&u==="onScroll"&&Oe("scroll",e),o||l===s||(o=[])):(o=o||[]).push(u,s))}n&&(o=o||[]).push("style",n);var u=o;(t.updateQueue=u)&&(t.flags|=4)}};rm=function(e,t,n,r){n!==r&&(t.flags|=4)};function ai(e,t){if(!Me)switch(e.tailMode){case"hidden":t=e.tail;for(var n=null;t!==null;)t.alternate!==null&&(n=t),t=t.sibling;n===null?e.tail=null:n.sibling=null;break;case"collapsed":n=e.tail;for(var r=null;n!==null;)n.alternate!==null&&(r=n),n=n.sibling;r===null?t||e.tail===null?e.tail=null:e.tail.sibling=null:r.sibling=null}}function et(e){var t=e.alternate!==null&&e.alternate.child===e.child,n=0,r=0;if(t)for(var i=e.child;i!==null;)n|=i.lanes|i.childLanes,r|=i.subtreeFlags&14680064,r|=i.flags&14680064,i.return=e,i=i.sibling;else for(i=e.child;i!==null;)n|=i.lanes|i.childLanes,r|=i.subtreeFlags,r|=i.flags,i.return=e,i=i.sibling;return e.subtreeFlags|=r,e.childLanes=n,t}function s0(e,t,n){var r=t.pendingProps;switch(Uu(t),t.tag){case 2:case 16:case 15:case 0:case 11:case 7:case 8:case 12:case 9:case 14:return et(t),null;case 1:return ht(t.type)&&pa(),et(t),null;case 3:return r=t.stateNode,$r(),Ee(pt),Ee(rt),Ju(),r.pendingContext&&(r.context=r.pendingContext,r.pendingContext=null),(e===null||e.child===null)&&(vo(t)?t.flags|=4:e===null||e.memoizedState.isDehydrated&&!(t.flags&256)||(t.flags|=1024,Ut!==null&&(au(Ut),Ut=null))),Gl(e,t),et(t),null;case 5:Ku(t);var i=tr(Bi.current);if(n=t.type,e!==null&&t.stateNode!=null)nm(e,t,n,r,i),e.ref!==t.ref&&(t.flags|=512,t.flags|=2097152);else{if(!r){if(t.stateNode===null)throw Error(z(166));return et(t),null}if(e=tr(nn.current),vo(t)){r=t.stateNode,n=t.type;var o=t.memoizedProps;switch(r[qt]=t,r[Ui]=o,e=(t.mode&1)!==0,n){case"dialog":Oe("cancel",r),Oe("close",r);break;case"iframe":case"object":case"embed":Oe("load",r);break;case"video":case"audio":for(i=0;i<xi.length;i++)Oe(xi[i],r);break;case"source":Oe("error",r);break;case"img":case"image":case"link":Oe("error",r),Oe("load",r);break;case"details":Oe("toggle",r);break;case"input":$c(r,o),Oe("invalid",r);break;case"select":r._wrapperState={wasMultiple:!!o.multiple},Oe("invalid",r);break;case"textarea":Qc(r,o),Oe("invalid",r)}Cl(n,o),i=null;for(var a in o)if(o.hasOwnProperty(a)){var l=o[a];a==="children"?typeof l=="string"?r.textContent!==l&&(o.suppressHydrationWarning!==!0&&xo(r.textContent,l,e),i=["children",l]):typeof l=="number"&&r.textContent!==""+l&&(o.suppressHydrationWarning!==!0&&xo(r.textContent,l,e),i=["children",""+l]):_i.hasOwnProperty(a)&&l!=null&&a==="onScroll"&&Oe("scroll",r)}switch(n){case"input":lo(r),Yc(r,o,!0);break;case"textarea":lo(r),Xc(r);break;case"select":case"option":break;default:typeof o.onClick=="function"&&(r.onclick=fa)}r=i,t.updateQueue=r,r!==null&&(t.flags|=4)}else{a=i.nodeType===9?i:i.ownerDocument,e==="http://www.w3.org/1999/xhtml"&&(e=Tp(n)),e==="http://www.w3.org/1999/xhtml"?n==="script"?(e=a.createElement("div"),e.innerHTML="<script><\/script>",e=e.removeChild(e.firstChild)):typeof r.is=="string"?e=a.createElement(n,{is:r.is}):(e=a.createElement(n),n==="select"&&(a=e,r.multiple?a.multiple=!0:r.size&&(a.size=r.size))):e=a.createElementNS(e,n),e[qt]=t,e[Ui]=r,tm(e,t,!1,!1),t.stateNode=e;e:{switch(a=Ol(n,r),n){case"dialog":Oe("cancel",e),Oe("close",e),i=r;break;case"iframe":case"object":case"embed":Oe("load",e),i=r;break;case"video":case"audio":for(i=0;i<xi.length;i++)Oe(xi[i],e);i=r;break;case"source":Oe("error",e),i=r;break;case"img":case"image":case"link":Oe("error",e),Oe("load",e),i=r;break;case"details":Oe("toggle",e),i=r;break;case"input":$c(e,r),i=wl(e,r),Oe("invalid",e);break;case"option":i=r;break;case"select":e._wrapperState={wasMultiple:!!r.multiple},i=Ae({},r,{value:void 0}),Oe("invalid",e);break;case"textarea":Qc(e,r),i=Sl(e,r),Oe("invalid",e);break;default:i=r}Cl(n,i),l=i;for(o in l)if(l.hasOwnProperty(o)){var s=l[o];o==="style"?Ip(e,s):o==="dangerouslySetInnerHTML"?(s=s?s.__html:void 0,s!=null&&_p(e,s)):o==="children"?typeof s=="string"?(n!=="textarea"||s!=="")&&Ai(e,s):typeof s=="number"&&Ai(e,""+s):o!=="suppressContentEditableWarning"&&o!=="suppressHydrationWarning"&&o!=="autoFocus"&&(_i.hasOwnProperty(o)?s!=null&&o==="onScroll"&&Oe("scroll",e):s!=null&&Ou(e,o,s,a))}switch(n){case"input":lo(e),Yc(e,r,!1);break;case"textarea":lo(e),Xc(e);break;case"option":r.value!=null&&e.setAttribute("value",""+Yn(r.value));break;case"select":e.multiple=!!r.multiple,o=r.value,o!=null?Lr(e,!!r.multiple,o,!1):r.defaultValue!=null&&Lr(e,!!r.multiple,r.defaultValue,!0);break;default:typeof i.onClick=="function"&&(e.onclick=fa)}switch(n){case"button":case"input":case"select":case"textarea":r=!!r.autoFocus;break e;case"img":r=!0;break e;default:r=!1}}r&&(t.flags|=4)}t.ref!==null&&(t.flags|=512,t.flags|=2097152)}return et(t),null;case 6:if(e&&t.stateNode!=null)rm(e,t,e.memoizedProps,r);else{if(typeof r!="string"&&t.stateNode===null)throw Error(z(166));if(n=tr(Bi.current),tr(nn.current),vo(t)){if(r=t.stateNode,n=t.memoizedProps,r[qt]=t,(o=r.nodeValue!==n)&&(e=yt,e!==null))switch(e.tag){case 3:xo(r.nodeValue,n,(e.mode&1)!==0);break;case 5:e.memoizedProps.suppressHydrationWarning!==!0&&xo(r.nodeValue,n,(e.mode&1)!==0)}o&&(t.flags|=4)}else r=(n.nodeType===9?n:n.ownerDocument).createTextNode(r),r[qt]=t,t.stateNode=r}return et(t),null;case 13:if(Ee(Te),r=t.memoizedState,e===null||e.memoizedState!==null&&e.memoizedState.dehydrated!==null){if(Me&&vt!==null&&t.mode&1&&!(t.flags&128))wh(),Br(),t.flags|=98560,o=!1;else if(o=vo(t),r!==null&&r.dehydrated!==null){if(e===null){if(!o)throw Error(z(318));if(o=t.memoizedState,o=o!==null?o.dehydrated:null,!o)throw Error(z(317));o[qt]=t}else Br(),!(t.flags&128)&&(t.memoizedState=null),t.flags|=4;et(t),o=!1}else Ut!==null&&(au(Ut),Ut=null),o=!0;if(!o)return t.flags&65536?t:null}return t.flags&128?(t.lanes=n,t):(r=r!==null,r!==(e!==null&&e.memoizedState!==null)&&r&&(t.child.flags|=8192,t.mode&1&&(e===null||Te.current&1?Ve===0&&(Ve=3):lc())),t.updateQueue!==null&&(t.flags|=4),et(t),null);case 4:return $r(),Gl(e,t),e===null&&Ni(t.stateNode.containerInfo),et(t),null;case 10:return $u(t.type._context),et(t),null;case 17:return ht(t.type)&&pa(),et(t),null;case 19:if(Ee(Te),o=t.memoizedState,o===null)return et(t),null;if(r=(t.flags&128)!==0,a=o.rendering,a===null)if(r)ai(o,!1);else{if(Ve!==0||e!==null&&e.flags&128)for(e=t.child;e!==null;){if(a=wa(e),a!==null){for(t.flags|=128,ai(o,!1),r=a.updateQueue,r!==null&&(t.updateQueue=r,t.flags|=4),t.subtreeFlags=0,r=n,n=t.child;n!==null;)o=n,e=r,o.flags&=14680066,a=o.alternate,a===null?(o.childLanes=0,o.lanes=e,o.child=null,o.subtreeFlags=0,o.memoizedProps=null,o.memoizedState=null,o.updateQueue=null,o.dependencies=null,o.stateNode=null):(o.childLanes=a.childLanes,o.lanes=a.lanes,o.child=a.child,o.subtreeFlags=0,o.deletions=null,o.memoizedProps=a.memoizedProps,o.memoizedState=a.memoizedState,o.updateQueue=a.updateQueue,o.type=a.type,e=a.dependencies,o.dependencies=e===null?null:{lanes:e.lanes,firstContext:e.firstContext}),n=n.sibling;return je(Te,Te.current&1|2),t.child}e=e.sibling}o.tail!==null&&ze()>Qr&&(t.flags|=128,r=!0,ai(o,!1),t.lanes=4194304)}else{if(!r)if(e=wa(a),e!==null){if(t.flags|=128,r=!0,n=e.updateQueue,n!==null&&(t.updateQueue=n,t.flags|=4),ai(o,!0),o.tail===null&&o.tailMode==="hidden"&&!a.alternate&&!Me)return et(t),null}else 2*ze()-o.renderingStartTime>Qr&&n!==1073741824&&(t.flags|=128,r=!0,ai(o,!1),t.lanes=4194304);o.isBackwards?(a.sibling=t.child,t.child=a):(n=o.last,n!==null?n.sibling=a:t.child=a,o.last=a)}return o.tail!==null?(t=o.tail,o.rendering=t,o.tail=t.sibling,o.renderingStartTime=ze(),t.sibling=null,n=Te.current,je(Te,r?n&1|2:n&1),t):(et(t),null);case 22:case 23:return sc(),r=t.memoizedState!==null,e!==null&&e.memoizedState!==null!==r&&(t.flags|=8192),r&&t.mode&1?xt&1073741824&&(et(t),t.subtreeFlags&6&&(t.flags|=8192)):et(t),null;case 24:return null;case 25:return null}throw Error(z(156,t.tag))}function l0(e,t){switch(Uu(t),t.tag){case 1:return ht(t.type)&&pa(),e=t.flags,e&65536?(t.flags=e&-65537|128,t):null;case 3:return $r(),Ee(pt),Ee(rt),Ju(),e=t.flags,e&65536&&!(e&128)?(t.flags=e&-65537|128,t):null;case 5:return Ku(t),null;case 13:if(Ee(Te),e=t.memoizedState,e!==null&&e.dehydrated!==null){if(t.alternate===null)throw Error(z(340));Br()}return e=t.flags,e&65536?(t.flags=e&-65537|128,t):null;case 19:return Ee(Te),null;case 4:return $r(),null;case 10:return $u(t.type._context),null;case 22:case 23:return sc(),null;case 24:return null;default:return null}}var bo=!1,nt=!1,u0=typeof WeakSet=="function"?WeakSet:Set,Y=null;function _r(e,t){var n=e.ref;if(n!==null)if(typeof n=="function")try{n(null)}catch(r){Ie(e,t,r)}else n.current=null}function ql(e,t,n){try{n()}catch(r){Ie(e,t,r)}}var Dd=!1;function c0(e,t){if(zl=ua,e=sh(),Nu(e)){if("selectionStart"in e)var n={start:e.selectionStart,end:e.selectionEnd};else e:{n=(n=e.ownerDocument)&&n.defaultView||window;var r=n.getSelection&&n.getSelection();if(r&&r.rangeCount!==0){n=r.anchorNode;var i=r.anchorOffset,o=r.focusNode;r=r.focusOffset;try{n.nodeType,o.nodeType}catch{n=null;break e}var a=0,l=-1,s=-1,u=0,p=0,h=e,g=null;t:for(;;){for(var v;h!==n||i!==0&&h.nodeType!==3||(l=a+i),h!==o||r!==0&&h.nodeType!==3||(s=a+r),h.nodeType===3&&(a+=h.nodeValue.length),(v=h.firstChild)!==null;)g=h,h=v;for(;;){if(h===e)break t;if(g===n&&++u===i&&(l=a),g===o&&++p===r&&(s=a),(v=h.nextSibling)!==null)break;h=g,g=h.parentNode}h=v}n=l===-1||s===-1?null:{start:l,end:s}}else n=null}n=n||{start:0,end:0}}else n=null;for(Dl={focusedElem:e,selectionRange:n},ua=!1,Y=t;Y!==null;)if(t=Y,e=t.child,(t.subtreeFlags&1028)!==0&&e!==null)e.return=t,Y=e;else for(;Y!==null;){t=Y;try{var x=t.alternate;if(t.flags&1024)switch(t.tag){case 0:case 11:case 15:break;case 1:if(x!==null){var y=x.memoizedProps,b=x.memoizedState,d=t.stateNode,f=d.getSnapshotBeforeUpdate(t.elementType===t.type?y:Dt(t.type,y),b);d.__reactInternalSnapshotBeforeUpdate=f}break;case 3:var m=t.stateNode.containerInfo;m.nodeType===1?m.textContent="":m.nodeType===9&&m.documentElement&&m.removeChild(m.documentElement);break;case 5:case 6:case 4:case 17:break;default:throw Error(z(163))}}catch(w){Ie(t,t.return,w)}if(e=t.sibling,e!==null){e.return=t.return,Y=e;break}Y=t.return}return x=Dd,Dd=!1,x}function Oi(e,t,n){var r=t.updateQueue;if(r=r!==null?r.lastEffect:null,r!==null){var i=r=r.next;do{if((i.tag&e)===e){var o=i.destroy;i.destroy=void 0,o!==void 0&&ql(t,n,o)}i=i.next}while(i!==r)}}function Ja(e,t){if(t=t.updateQueue,t=t!==null?t.lastEffect:null,t!==null){var n=t=t.next;do{if((n.tag&e)===e){var r=n.create;n.destroy=r()}n=n.next}while(n!==t)}}function eu(e){var t=e.ref;if(t!==null){var n=e.stateNode;switch(e.tag){case 5:e=n;break;default:e=n}typeof t=="function"?t(e):t.current=e}}function im(e){var t=e.alternate;t!==null&&(e.alternate=null,im(t)),e.child=null,e.deletions=null,e.sibling=null,e.tag===5&&(t=e.stateNode,t!==null&&(delete t[qt],delete t[Ui],delete t[Vl],delete t[Yv],delete t[Qv])),e.stateNode=null,e.return=null,e.dependencies=null,e.memoizedProps=null,e.memoizedState=null,e.pendingProps=null,e.stateNode=null,e.updateQueue=null}function om(e){return e.tag===5||e.tag===3||e.tag===4}function Fd(e){e:for(;;){for(;e.sibling===null;){if(e.return===null||om(e.return))return null;e=e.return}for(e.sibling.return=e.return,e=e.sibling;e.tag!==5&&e.tag!==6&&e.tag!==18;){if(e.flags&2||e.child===null||e.tag===4)continue e;e.child.return=e,e=e.child}if(!(e.flags&2))return e.stateNode}}function tu(e,t,n){var r=e.tag;if(r===5||r===6)e=e.stateNode,t?n.nodeType===8?n.parentNode.insertBefore(e,t):n.insertBefore(e,t):(n.nodeType===8?(t=n.parentNode,t.insertBefore(e,n)):(t=n,t.appendChild(e)),n=n._reactRootContainer,n!=null||t.onclick!==null||(t.onclick=fa));else if(r!==4&&(e=e.child,e!==null))for(tu(e,t,n),e=e.sibling;e!==null;)tu(e,t,n),e=e.sibling}function nu(e,t,n){var r=e.tag;if(r===5||r===6)e=e.stateNode,t?n.insertBefore(e,t):n.appendChild(e);else if(r!==4&&(e=e.child,e!==null))for(nu(e,t,n),e=e.sibling;e!==null;)nu(e,t,n),e=e.sibling}var Ke=null,Nt=!1;function bn(e,t,n){for(n=n.child;n!==null;)am(e,t,n),n=n.sibling}function am(e,t,n){if(tn&&typeof tn.onCommitFiberUnmount=="function")try{tn.onCommitFiberUnmount(Wa,n)}catch{}switch(n.tag){case 5:nt||_r(n,t);case 6:var r=Ke,i=Nt;Ke=null,bn(e,t,n),Ke=r,Nt=i,Ke!==null&&(Nt?(e=Ke,n=n.stateNode,e.nodeType===8?e.parentNode.removeChild(n):e.removeChild(n)):Ke.removeChild(n.stateNode));break;case 18:Ke!==null&&(Nt?(e=Ke,n=n.stateNode,e.nodeType===8?Ds(e.parentNode,n):e.nodeType===1&&Ds(e,n),zi(e)):Ds(Ke,n.stateNode));break;case 4:r=Ke,i=Nt,Ke=n.stateNode.containerInfo,Nt=!0,bn(e,t,n),Ke=r,Nt=i;break;case 0:case 11:case 14:case 15:if(!nt&&(r=n.updateQueue,r!==null&&(r=r.lastEffect,r!==null))){i=r=r.next;do{var o=i,a=o.destroy;o=o.tag,a!==void 0&&(o&2||o&4)&&ql(n,t,a),i=i.next}while(i!==r)}bn(e,t,n);break;case 1:if(!nt&&(_r(n,t),r=n.stateNode,typeof r.componentWillUnmount=="function"))try{r.props=n.memoizedProps,r.state=n.memoizedState,r.componentWillUnmount()}catch(l){Ie(n,t,l)}bn(e,t,n);break;case 21:bn(e,t,n);break;case 22:n.mode&1?(nt=(r=nt)||n.memoizedState!==null,bn(e,t,n),nt=r):bn(e,t,n);break;default:bn(e,t,n)}}function Nd(e){var t=e.updateQueue;if(t!==null){e.updateQueue=null;var n=e.stateNode;n===null&&(n=e.stateNode=new u0),t.forEach(function(r){var i=y0.bind(null,e,r);n.has(r)||(n.add(r),r.then(i,i))})}}function zt(e,t){var n=t.deletions;if(n!==null)for(var r=0;r<n.length;r++){var i=n[r];try{var o=e,a=t,l=a;e:for(;l!==null;){switch(l.tag){case 5:Ke=l.stateNode,Nt=!1;break e;case 3:Ke=l.stateNode.containerInfo,Nt=!0;break e;case 4:Ke=l.stateNode.containerInfo,Nt=!0;break e}l=l.return}if(Ke===null)throw Error(z(160));am(o,a,i),Ke=null,Nt=!1;var s=i.alternate;s!==null&&(s.return=null),i.return=null}catch(u){Ie(i,t,u)}}if(t.subtreeFlags&12854)for(t=t.child;t!==null;)sm(t,e),t=t.sibling}function sm(e,t){var n=e.alternate,r=e.flags;switch(e.tag){case 0:case 11:case 14:case 15:if(zt(t,e),Xt(e),r&4){try{Oi(3,e,e.return),Ja(3,e)}catch(y){Ie(e,e.return,y)}try{Oi(5,e,e.return)}catch(y){Ie(e,e.return,y)}}break;case 1:zt(t,e),Xt(e),r&512&&n!==null&&_r(n,n.return);break;case 5:if(zt(t,e),Xt(e),r&512&&n!==null&&_r(n,n.return),e.flags&32){var i=e.stateNode;try{Ai(i,"")}catch(y){Ie(e,e.return,y)}}if(r&4&&(i=e.stateNode,i!=null)){var o=e.memoizedProps,a=n!==null?n.memoizedProps:o,l=e.type,s=e.updateQueue;if(e.updateQueue=null,s!==null)try{l==="input"&&o.type==="radio"&&o.name!=null&&Pp(i,o),Ol(l,a);var u=Ol(l,o);for(a=0;a<s.length;a+=2){var p=s[a],h=s[a+1];p==="style"?Ip(i,h):p==="dangerouslySetInnerHTML"?_p(i,h):p==="children"?Ai(i,h):Ou(i,p,h,u)}switch(l){case"input":bl(i,o);break;case"textarea":Mp(i,o);break;case"select":var g=i._wrapperState.wasMultiple;i._wrapperState.wasMultiple=!!o.multiple;var v=o.value;v!=null?Lr(i,!!o.multiple,v,!1):g!==!!o.multiple&&(o.defaultValue!=null?Lr(i,!!o.multiple,o.defaultValue,!0):Lr(i,!!o.multiple,o.multiple?[]:"",!1))}i[Ui]=o}catch(y){Ie(e,e.return,y)}}break;case 6:if(zt(t,e),Xt(e),r&4){if(e.stateNode===null)throw Error(z(162));i=e.stateNode,o=e.memoizedProps;try{i.nodeValue=o}catch(y){Ie(e,e.return,y)}}break;case 3:if(zt(t,e),Xt(e),r&4&&n!==null&&n.memoizedState.isDehydrated)try{zi(t.containerInfo)}catch(y){Ie(e,e.return,y)}break;case 4:zt(t,e),Xt(e);break;case 13:zt(t,e),Xt(e),i=e.child,i.flags&8192&&(o=i.memoizedState!==null,i.stateNode.isHidden=o,!o||i.alternate!==null&&i.alternate.memoizedState!==null||(oc=ze())),r&4&&Nd(e);break;case 22:if(p=n!==null&&n.memoizedState!==null,e.mode&1?(nt=(u=nt)||p,zt(t,e),nt=u):zt(t,e),Xt(e),r&8192){if(u=e.memoizedState!==null,(e.stateNode.isHidden=u)&&!p&&e.mode&1)for(Y=e,p=e.child;p!==null;){for(h=Y=p;Y!==null;){switch(g=Y,v=g.child,g.tag){case 0:case 11:case 14:case 15:Oi(4,g,g.return);break;case 1:_r(g,g.return);var x=g.stateNode;if(typeof x.componentWillUnmount=="function"){r=g,n=g.return;try{t=r,x.props=t.memoizedProps,x.state=t.memoizedState,x.componentWillUnmount()}catch(y){Ie(r,n,y)}}break;case 5:_r(g,g.return);break;case 22:if(g.memoizedState!==null){Ud(h);continue}}v!==null?(v.return=g,Y=v):Ud(h)}p=p.sibling}e:for(p=null,h=e;;){if(h.tag===5){if(p===null){p=h;try{i=h.stateNode,u?(o=i.style,typeof o.setProperty=="function"?o.setProperty("display","none","important"):o.display="none"):(l=h.stateNode,s=h.memoizedProps.style,a=s!=null&&s.hasOwnProperty("display")?s.display:null,l.style.display=Ap("display",a))}catch(y){Ie(e,e.return,y)}}}else if(h.tag===6){if(p===null)try{h.stateNode.nodeValue=u?"":h.memoizedProps}catch(y){Ie(e,e.return,y)}}else if((h.tag!==22&&h.tag!==23||h.memoizedState===null||h===e)&&h.child!==null){h.child.return=h,h=h.child;continue}if(h===e)break e;for(;h.sibling===null;){if(h.return===null||h.return===e)break e;p===h&&(p=null),h=h.return}p===h&&(p=null),h.sibling.return=h.return,h=h.sibling}}break;case 19:zt(t,e),Xt(e),r&4&&Nd(e);break;case 21:break;default:zt(t,e),Xt(e)}}function Xt(e){var t=e.flags;if(t&2){try{e:{for(var n=e.return;n!==null;){if(om(n)){var r=n;break e}n=n.return}throw Error(z(160))}switch(r.tag){case 5:var i=r.stateNode;r.flags&32&&(Ai(i,""),r.flags&=-33);var o=Fd(e);nu(e,o,i);break;case 3:case 4:var a=r.stateNode.containerInfo,l=Fd(e);tu(e,l,a);break;default:throw Error(z(161))}}catch(s){Ie(e,e.return,s)}e.flags&=-3}t&4096&&(e.flags&=-4097)}function d0(e,t,n){Y=e,lm(e)}function lm(e,t,n){for(var r=(e.mode&1)!==0;Y!==null;){var i=Y,o=i.child;if(i.tag===22&&r){var a=i.memoizedState!==null||bo;if(!a){var l=i.alternate,s=l!==null&&l.memoizedState!==null||nt;l=bo;var u=nt;if(bo=a,(nt=s)&&!u)for(Y=i;Y!==null;)a=Y,s=a.child,a.tag===22&&a.memoizedState!==null?Wd(i):s!==null?(s.return=a,Y=s):Wd(i);for(;o!==null;)Y=o,lm(o),o=o.sibling;Y=i,bo=l,nt=u}Vd(e)}else i.subtreeFlags&8772&&o!==null?(o.return=i,Y=o):Vd(e)}}function Vd(e){for(;Y!==null;){var t=Y;if(t.flags&8772){var n=t.alternate;try{if(t.flags&8772)switch(t.tag){case 0:case 11:case 15:nt||Ja(5,t);break;case 1:var r=t.stateNode;if(t.flags&4&&!nt)if(n===null)r.componentDidMount();else{var i=t.elementType===t.type?n.memoizedProps:Dt(t.type,n.memoizedProps);r.componentDidUpdate(i,n.memoizedState,r.__reactInternalSnapshotBeforeUpdate)}var o=t.updateQueue;o!==null&&Sd(t,o,r);break;case 3:var a=t.updateQueue;if(a!==null){if(n=null,t.child!==null)switch(t.child.tag){case 5:n=t.child.stateNode;break;case 1:n=t.child.stateNode}Sd(t,a,n)}break;case 5:var l=t.stateNode;if(n===null&&t.flags&4){n=l;var s=t.memoizedProps;switch(t.type){case"button":case"input":case"select":case"textarea":s.autoFocus&&n.focus();break;case"img":s.src&&(n.src=s.src)}}break;case 6:break;case 4:break;case 12:break;case 13:if(t.memoizedState===null){var u=t.alternate;if(u!==null){var p=u.memoizedState;if(p!==null){var h=p.dehydrated;h!==null&&zi(h)}}}break;case 19:case 17:case 21:case 22:case 23:case 25:break;default:throw Error(z(163))}nt||t.flags&512&&eu(t)}catch(g){Ie(t,t.return,g)}}if(t===e){Y=null;break}if(n=t.sibling,n!==null){n.return=t.return,Y=n;break}Y=t.return}}function Ud(e){for(;Y!==null;){var t=Y;if(t===e){Y=null;break}var n=t.sibling;if(n!==null){n.return=t.return,Y=n;break}Y=t.return}}function Wd(e){for(;Y!==null;){var t=Y;try{switch(t.tag){case 0:case 11:case 15:var n=t.return;try{Ja(4,t)}catch(s){Ie(t,n,s)}break;case 1:var r=t.stateNode;if(typeof r.componentDidMount=="function"){var i=t.return;try{r.componentDidMount()}catch(s){Ie(t,i,s)}}var o=t.return;try{eu(t)}catch(s){Ie(t,o,s)}break;case 5:var a=t.return;try{eu(t)}catch(s){Ie(t,a,s)}}}catch(s){Ie(t,t.return,s)}if(t===e){Y=null;break}var l=t.sibling;if(l!==null){l.return=t.return,Y=l;break}Y=t.return}}var f0=Math.ceil,Sa=yn.ReactCurrentDispatcher,rc=yn.ReactCurrentOwner,It=yn.ReactCurrentBatchConfig,pe=0,$e=null,Fe=null,Ze=0,xt=0,Ar=Kn(0),Ve=0,Qi=null,ur=0,Za=0,ic=0,Ei=null,dt=null,oc=0,Qr=1/0,ln=null,ja=!1,ru=null,Bn=null,ko=!1,Rn=null,Ca=0,Pi=0,iu=null,Qo=-1,Xo=0;function st(){return pe&6?ze():Qo!==-1?Qo:Qo=ze()}function Hn(e){return e.mode&1?pe&2&&Ze!==0?Ze&-Ze:Kv.transition!==null?(Xo===0&&(Xo=$p()),Xo):(e=ve,e!==0||(e=window.event,e=e===void 0?16:Gp(e.type)),e):1}function Ht(e,t,n,r){if(50<Pi)throw Pi=0,iu=null,Error(z(185));Gi(e,n,r),(!(pe&2)||e!==$e)&&(e===$e&&(!(pe&2)&&(Za|=n),Ve===4&&In(e,Ze)),mt(e,r),n===1&&pe===0&&!(t.mode&1)&&(Qr=ze()+500,Qa&&Jn()))}function mt(e,t){var n=e.callbackNode;Kx(e,t);var r=la(e,e===$e?Ze:0);if(r===0)n!==null&&Zc(n),e.callbackNode=null,e.callbackPriority=0;else if(t=r&-r,e.callbackPriority!==t){if(n!=null&&Zc(n),t===1)e.tag===0?Xv(Bd.bind(null,e)):xh(Bd.bind(null,e)),Hv(function(){!(pe&6)&&Jn()}),n=null;else{switch(Yp(r)){case 1:n=_u;break;case 4:n=Bp;break;case 16:n=sa;break;case 536870912:n=Hp;break;default:n=sa}n=gm(n,um.bind(null,e))}e.callbackPriority=t,e.callbackNode=n}}function um(e,t){if(Qo=-1,Xo=0,pe&6)throw Error(z(327));var n=e.callbackNode;if(Nr()&&e.callbackNode!==n)return null;var r=la(e,e===$e?Ze:0);if(r===0)return null;if(r&30||r&e.expiredLanes||t)t=Oa(e,r);else{t=r;var i=pe;pe|=2;var o=dm();($e!==e||Ze!==t)&&(ln=null,Qr=ze()+500,rr(e,t));do try{m0();break}catch(l){cm(e,l)}while(!0);Hu(),Sa.current=o,pe=i,Fe!==null?t=0:($e=null,Ze=0,t=Ve)}if(t!==0){if(t===2&&(i=_l(e),i!==0&&(r=i,t=ou(e,i))),t===1)throw n=Qi,rr(e,0),In(e,r),mt(e,ze()),n;if(t===6)In(e,r);else{if(i=e.current.alternate,!(r&30)&&!p0(i)&&(t=Oa(e,r),t===2&&(o=_l(e),o!==0&&(r=o,t=ou(e,o))),t===1))throw n=Qi,rr(e,0),In(e,r),mt(e,ze()),n;switch(e.finishedWork=i,e.finishedLanes=r,t){case 0:case 1:throw Error(z(345));case 2:Gn(e,dt,ln);break;case 3:if(In(e,r),(r&130023424)===r&&(t=oc+500-ze(),10<t)){if(la(e,0)!==0)break;if(i=e.suspendedLanes,(i&r)!==r){st(),e.pingedLanes|=e.suspendedLanes&i;break}e.timeoutHandle=Nl(Gn.bind(null,e,dt,ln),t);break}Gn(e,dt,ln);break;case 4:if(In(e,r),(r&4194240)===r)break;for(t=e.eventTimes,i=-1;0<r;){var a=31-Bt(r);o=1<<a,a=t[a],a>i&&(i=a),r&=~o}if(r=i,r=ze()-r,r=(120>r?120:480>r?480:1080>r?1080:1920>r?1920:3e3>r?3e3:4320>r?4320:1960*f0(r/1960))-r,10<r){e.timeoutHandle=Nl(Gn.bind(null,e,dt,ln),r);break}Gn(e,dt,ln);break;case 5:Gn(e,dt,ln);break;default:throw Error(z(329))}}}return mt(e,ze()),e.callbackNode===n?um.bind(null,e):null}function ou(e,t){var n=Ei;return e.current.memoizedState.isDehydrated&&(rr(e,t).flags|=256),e=Oa(e,t),e!==2&&(t=dt,dt=n,t!==null&&au(t)),e}function au(e){dt===null?dt=e:dt.push.apply(dt,e)}function p0(e){for(var t=e;;){if(t.flags&16384){var n=t.updateQueue;if(n!==null&&(n=n.stores,n!==null))for(var r=0;r<n.length;r++){var i=n[r],o=i.getSnapshot;i=i.value;try{if(!Yt(o(),i))return!1}catch{return!1}}}if(n=t.child,t.subtreeFlags&16384&&n!==null)n.return=t,t=n;else{if(t===e)break;for(;t.sibling===null;){if(t.return===null||t.return===e)return!0;t=t.return}t.sibling.return=t.return,t=t.sibling}}return!0}function In(e,t){for(t&=~ic,t&=~Za,e.suspendedLanes|=t,e.pingedLanes&=~t,e=e.expirationTimes;0<t;){var n=31-Bt(t),r=1<<n;e[n]=-1,t&=~r}}function Bd(e){if(pe&6)throw Error(z(327));Nr();var t=la(e,0);if(!(t&1))return mt(e,ze()),null;var n=Oa(e,t);if(e.tag!==0&&n===2){var r=_l(e);r!==0&&(t=r,n=ou(e,r))}if(n===1)throw n=Qi,rr(e,0),In(e,t),mt(e,ze()),n;if(n===6)throw Error(z(345));return e.finishedWork=e.current.alternate,e.finishedLanes=t,Gn(e,dt,ln),mt(e,ze()),null}function ac(e,t){var n=pe;pe|=1;try{return e(t)}finally{pe=n,pe===0&&(Qr=ze()+500,Qa&&Jn())}}function cr(e){Rn!==null&&Rn.tag===0&&!(pe&6)&&Nr();var t=pe;pe|=1;var n=It.transition,r=ve;try{if(It.transition=null,ve=1,e)return e()}finally{ve=r,It.transition=n,pe=t,!(pe&6)&&Jn()}}function sc(){xt=Ar.current,Ee(Ar)}function rr(e,t){e.finishedWork=null,e.finishedLanes=0;var n=e.timeoutHandle;if(n!==-1&&(e.timeoutHandle=-1,Bv(n)),Fe!==null)for(n=Fe.return;n!==null;){var r=n;switch(Uu(r),r.tag){case 1:r=r.type.childContextTypes,r!=null&&pa();break;case 3:$r(),Ee(pt),Ee(rt),Ju();break;case 5:Ku(r);break;case 4:$r();break;case 13:Ee(Te);break;case 19:Ee(Te);break;case 10:$u(r.type._context);break;case 22:case 23:sc()}n=n.return}if($e=e,Fe=e=$n(e.current,null),Ze=xt=t,Ve=0,Qi=null,ic=Za=ur=0,dt=Ei=null,er!==null){for(t=0;t<er.length;t++)if(n=er[t],r=n.interleaved,r!==null){n.interleaved=null;var i=r.next,o=n.pending;if(o!==null){var a=o.next;o.next=i,r.next=a}n.pending=r}er=null}return e}function cm(e,t){do{var n=Fe;try{if(Hu(),Ho.current=ka,ba){for(var r=_e.memoizedState;r!==null;){var i=r.queue;i!==null&&(i.pending=null),r=r.next}ba=!1}if(lr=0,He=Ne=_e=null,Ci=!1,Hi=0,rc.current=null,n===null||n.return===null){Ve=1,Qi=t,Fe=null;break}e:{var o=e,a=n.return,l=n,s=t;if(t=Ze,l.flags|=32768,s!==null&&typeof s=="object"&&typeof s.then=="function"){var u=s,p=l,h=p.tag;if(!(p.mode&1)&&(h===0||h===11||h===15)){var g=p.alternate;g?(p.updateQueue=g.updateQueue,p.memoizedState=g.memoizedState,p.lanes=g.lanes):(p.updateQueue=null,p.memoizedState=null)}var v=Td(a);if(v!==null){v.flags&=-257,_d(v,a,l,o,t),v.mode&1&&Md(o,u,t),t=v,s=u;var x=t.updateQueue;if(x===null){var y=new Set;y.add(s),t.updateQueue=y}else x.add(s);break e}else{if(!(t&1)){Md(o,u,t),lc();break e}s=Error(z(426))}}else if(Me&&l.mode&1){var b=Td(a);if(b!==null){!(b.flags&65536)&&(b.flags|=256),_d(b,a,l,o,t),Wu(Yr(s,l));break e}}o=s=Yr(s,l),Ve!==4&&(Ve=2),Ei===null?Ei=[o]:Ei.push(o),o=a;do{switch(o.tag){case 3:o.flags|=65536,t&=-t,o.lanes|=t;var d=Qh(o,s,t);kd(o,d);break e;case 1:l=s;var f=o.type,m=o.stateNode;if(!(o.flags&128)&&(typeof f.getDerivedStateFromError=="function"||m!==null&&typeof m.componentDidCatch=="function"&&(Bn===null||!Bn.has(m)))){o.flags|=65536,t&=-t,o.lanes|=t;var w=Xh(o,l,t);kd(o,w);break e}}o=o.return}while(o!==null)}pm(n)}catch(k){t=k,Fe===n&&n!==null&&(Fe=n=n.return);continue}break}while(!0)}function dm(){var e=Sa.current;return Sa.current=ka,e===null?ka:e}function lc(){(Ve===0||Ve===3||Ve===2)&&(Ve=4),$e===null||!(ur&268435455)&&!(Za&268435455)||In($e,Ze)}function Oa(e,t){var n=pe;pe|=2;var r=dm();($e!==e||Ze!==t)&&(ln=null,rr(e,t));do try{h0();break}catch(i){cm(e,i)}while(!0);if(Hu(),pe=n,Sa.current=r,Fe!==null)throw Error(z(261));return $e=null,Ze=0,Ve}function h0(){for(;Fe!==null;)fm(Fe)}function m0(){for(;Fe!==null&&!Vx();)fm(Fe)}function fm(e){var t=mm(e.alternate,e,xt);e.memoizedProps=e.pendingProps,t===null?pm(e):Fe=t,rc.current=null}function pm(e){var t=e;do{var n=t.alternate;if(e=t.return,t.flags&32768){if(n=l0(n,t),n!==null){n.flags&=32767,Fe=n;return}if(e!==null)e.flags|=32768,e.subtreeFlags=0,e.deletions=null;else{Ve=6,Fe=null;return}}else if(n=s0(n,t,xt),n!==null){Fe=n;return}if(t=t.sibling,t!==null){Fe=t;return}Fe=t=e}while(t!==null);Ve===0&&(Ve=5)}function Gn(e,t,n){var r=ve,i=It.transition;try{It.transition=null,ve=1,g0(e,t,n,r)}finally{It.transition=i,ve=r}return null}function g0(e,t,n,r){do Nr();while(Rn!==null);if(pe&6)throw Error(z(327));n=e.finishedWork;var i=e.finishedLanes;if(n===null)return null;if(e.finishedWork=null,e.finishedLanes=0,n===e.current)throw Error(z(177));e.callbackNode=null,e.callbackPriority=0;var o=n.lanes|n.childLanes;if(Jx(e,o),e===$e&&(Fe=$e=null,Ze=0),!(n.subtreeFlags&2064)&&!(n.flags&2064)||ko||(ko=!0,gm(sa,function(){return Nr(),null})),o=(n.flags&15990)!==0,n.subtreeFlags&15990||o){o=It.transition,It.transition=null;var a=ve;ve=1;var l=pe;pe|=4,rc.current=null,c0(e,n),sm(n,e),zv(Dl),ua=!!zl,Dl=zl=null,e.current=n,d0(n),Ux(),pe=l,ve=a,It.transition=o}else e.current=n;if(ko&&(ko=!1,Rn=e,Ca=i),o=e.pendingLanes,o===0&&(Bn=null),Hx(n.stateNode),mt(e,ze()),t!==null)for(r=e.onRecoverableError,n=0;n<t.length;n++)i=t[n],r(i.value,{componentStack:i.stack,digest:i.digest});if(ja)throw ja=!1,e=ru,ru=null,e;return Ca&1&&e.tag!==0&&Nr(),o=e.pendingLanes,o&1?e===iu?Pi++:(Pi=0,iu=e):Pi=0,Jn(),null}function Nr(){if(Rn!==null){var e=Yp(Ca),t=It.transition,n=ve;try{if(It.transition=null,ve=16>e?16:e,Rn===null)var r=!1;else{if(e=Rn,Rn=null,Ca=0,pe&6)throw Error(z(331));var i=pe;for(pe|=4,Y=e.current;Y!==null;){var o=Y,a=o.child;if(Y.flags&16){var l=o.deletions;if(l!==null){for(var s=0;s<l.length;s++){var u=l[s];for(Y=u;Y!==null;){var p=Y;switch(p.tag){case 0:case 11:case 15:Oi(8,p,o)}var h=p.child;if(h!==null)h.return=p,Y=h;else for(;Y!==null;){p=Y;var g=p.sibling,v=p.return;if(im(p),p===u){Y=null;break}if(g!==null){g.return=v,Y=g;break}Y=v}}}var x=o.alternate;if(x!==null){var y=x.child;if(y!==null){x.child=null;do{var b=y.sibling;y.sibling=null,y=b}while(y!==null)}}Y=o}}if(o.subtreeFlags&2064&&a!==null)a.return=o,Y=a;else e:for(;Y!==null;){if(o=Y,o.flags&2048)switch(o.tag){case 0:case 11:case 15:Oi(9,o,o.return)}var d=o.sibling;if(d!==null){d.return=o.return,Y=d;break e}Y=o.return}}var f=e.current;for(Y=f;Y!==null;){a=Y;var m=a.child;if(a.subtreeFlags&2064&&m!==null)m.return=a,Y=m;else e:for(a=f;Y!==null;){if(l=Y,l.flags&2048)try{switch(l.tag){case 0:case 11:case 15:Ja(9,l)}}catch(k){Ie(l,l.return,k)}if(l===a){Y=null;break e}var w=l.sibling;if(w!==null){w.return=l.return,Y=w;break e}Y=l.return}}if(pe=i,Jn(),tn&&typeof tn.onPostCommitFiberRoot=="function")try{tn.onPostCommitFiberRoot(Wa,e)}catch{}r=!0}return r}finally{ve=n,It.transition=t}}return!1}function Hd(e,t,n){t=Yr(n,t),t=Qh(e,t,1),e=Wn(e,t,1),t=st(),e!==null&&(Gi(e,1,t),mt(e,t))}function Ie(e,t,n){if(e.tag===3)Hd(e,e,n);else for(;t!==null;){if(t.tag===3){Hd(t,e,n);break}else if(t.tag===1){var r=t.stateNode;if(typeof t.type.getDerivedStateFromError=="function"||typeof r.componentDidCatch=="function"&&(Bn===null||!Bn.has(r))){e=Yr(n,e),e=Xh(t,e,1),t=Wn(t,e,1),e=st(),t!==null&&(Gi(t,1,e),mt(t,e));break}}t=t.return}}function x0(e,t,n){var r=e.pingCache;r!==null&&r.delete(t),t=st(),e.pingedLanes|=e.suspendedLanes&n,$e===e&&(Ze&n)===n&&(Ve===4||Ve===3&&(Ze&130023424)===Ze&&500>ze()-oc?rr(e,0):ic|=n),mt(e,t)}function hm(e,t){t===0&&(e.mode&1?(t=fo,fo<<=1,!(fo&130023424)&&(fo=4194304)):t=1);var n=st();e=xn(e,t),e!==null&&(Gi(e,t,n),mt(e,n))}function v0(e){var t=e.memoizedState,n=0;t!==null&&(n=t.retryLane),hm(e,n)}function y0(e,t){var n=0;switch(e.tag){case 13:var r=e.stateNode,i=e.memoizedState;i!==null&&(n=i.retryLane);break;case 19:r=e.stateNode;break;default:throw Error(z(314))}r!==null&&r.delete(t),hm(e,n)}var mm;mm=function(e,t,n){if(e!==null)if(e.memoizedProps!==t.pendingProps||pt.current)ft=!0;else{if(!(e.lanes&n)&&!(t.flags&128))return ft=!1,a0(e,t,n);ft=!!(e.flags&131072)}else ft=!1,Me&&t.flags&1048576&&vh(t,ga,t.index);switch(t.lanes=0,t.tag){case 2:var r=t.type;Yo(e,t),e=t.pendingProps;var i=Wr(t,rt.current);Fr(t,n),i=Gu(null,t,r,e,i,n);var o=qu();return t.flags|=1,typeof i=="object"&&i!==null&&typeof i.render=="function"&&i.$$typeof===void 0?(t.tag=1,t.memoizedState=null,t.updateQueue=null,ht(r)?(o=!0,ha(t)):o=!1,t.memoizedState=i.state!==null&&i.state!==void 0?i.state:null,Qu(t),i.updater=Xa,t.stateNode=i,i._reactInternals=t,Yl(t,r,e,n),t=Kl(null,t,r,!0,o,n)):(t.tag=0,Me&&o&&Vu(t),ot(null,t,i,n),t=t.child),t;case 16:r=t.elementType;e:{switch(Yo(e,t),e=t.pendingProps,i=r._init,r=i(r._payload),t.type=r,i=t.tag=b0(r),e=Dt(r,e),i){case 0:t=Xl(null,t,r,e,n);break e;case 1:t=Ld(null,t,r,e,n);break e;case 11:t=Ad(null,t,r,e,n);break e;case 14:t=Id(null,t,r,Dt(r.type,e),n);break e}throw Error(z(306,r,""))}return t;case 0:return r=t.type,i=t.pendingProps,i=t.elementType===r?i:Dt(r,i),Xl(e,t,r,i,n);case 1:return r=t.type,i=t.pendingProps,i=t.elementType===r?i:Dt(r,i),Ld(e,t,r,i,n);case 3:e:{if(Gh(t),e===null)throw Error(z(387));r=t.pendingProps,o=t.memoizedState,i=o.element,kh(e,t),ya(t,r,null,n);var a=t.memoizedState;if(r=a.element,o.isDehydrated)if(o={element:r,isDehydrated:!1,cache:a.cache,pendingSuspenseBoundaries:a.pendingSuspenseBoundaries,transitions:a.transitions},t.updateQueue.baseState=o,t.memoizedState=o,t.flags&256){i=Yr(Error(z(423)),t),t=Rd(e,t,r,n,i);break e}else if(r!==i){i=Yr(Error(z(424)),t),t=Rd(e,t,r,n,i);break e}else for(vt=Un(t.stateNode.containerInfo.firstChild),yt=t,Me=!0,Ut=null,n=Oh(t,null,r,n),t.child=n;n;)n.flags=n.flags&-3|4096,n=n.sibling;else{if(Br(),r===i){t=vn(e,t,n);break e}ot(e,t,r,n)}t=t.child}return t;case 5:return Eh(t),e===null&&Bl(t),r=t.type,i=t.pendingProps,o=e!==null?e.memoizedProps:null,a=i.children,Fl(r,i)?a=null:o!==null&&Fl(r,o)&&(t.flags|=32),Zh(e,t),ot(e,t,a,n),t.child;case 6:return e===null&&Bl(t),null;case 13:return qh(e,t,n);case 4:return Xu(t,t.stateNode.containerInfo),r=t.pendingProps,e===null?t.child=Hr(t,null,r,n):ot(e,t,r,n),t.child;case 11:return r=t.type,i=t.pendingProps,i=t.elementType===r?i:Dt(r,i),Ad(e,t,r,i,n);case 7:return ot(e,t,t.pendingProps,n),t.child;case 8:return ot(e,t,t.pendingProps.children,n),t.child;case 12:return ot(e,t,t.pendingProps.children,n),t.child;case 10:e:{if(r=t.type._context,i=t.pendingProps,o=t.memoizedProps,a=i.value,je(xa,r._currentValue),r._currentValue=a,o!==null)if(Yt(o.value,a)){if(o.children===i.children&&!pt.current){t=vn(e,t,n);break e}}else for(o=t.child,o!==null&&(o.return=t);o!==null;){var l=o.dependencies;if(l!==null){a=o.child;for(var s=l.firstContext;s!==null;){if(s.context===r){if(o.tag===1){s=pn(-1,n&-n),s.tag=2;var u=o.updateQueue;if(u!==null){u=u.shared;var p=u.pending;p===null?s.next=s:(s.next=p.next,p.next=s),u.pending=s}}o.lanes|=n,s=o.alternate,s!==null&&(s.lanes|=n),Hl(o.return,n,t),l.lanes|=n;break}s=s.next}}else if(o.tag===10)a=o.type===t.type?null:o.child;else if(o.tag===18){if(a=o.return,a===null)throw Error(z(341));a.lanes|=n,l=a.alternate,l!==null&&(l.lanes|=n),Hl(a,n,t),a=o.sibling}else a=o.child;if(a!==null)a.return=o;else for(a=o;a!==null;){if(a===t){a=null;break}if(o=a.sibling,o!==null){o.return=a.return,a=o;break}a=a.return}o=a}ot(e,t,i.children,n),t=t.child}return t;case 9:return i=t.type,r=t.pendingProps.children,Fr(t,n),i=Lt(i),r=r(i),t.flags|=1,ot(e,t,r,n),t.child;case 14:return r=t.type,i=Dt(r,t.pendingProps),i=Dt(r.type,i),Id(e,t,r,i,n);case 15:return Kh(e,t,t.type,t.pendingProps,n);case 17:return r=t.type,i=t.pendingProps,i=t.elementType===r?i:Dt(r,i),Yo(e,t),t.tag=1,ht(r)?(e=!0,ha(t)):e=!1,Fr(t,n),jh(t,r,i),Yl(t,r,i,n),Kl(null,t,r,!0,e,n);case 19:return em(e,t,n);case 22:return Jh(e,t,n)}throw Error(z(156,t.tag))};function gm(e,t){return Wp(e,t)}function w0(e,t,n,r){this.tag=e,this.key=n,this.sibling=this.child=this.return=this.stateNode=this.type=this.elementType=null,this.index=0,this.ref=null,this.pendingProps=t,this.dependencies=this.memoizedState=this.updateQueue=this.memoizedProps=null,this.mode=r,this.subtreeFlags=this.flags=0,this.deletions=null,this.childLanes=this.lanes=0,this.alternate=null}function At(e,t,n,r){return new w0(e,t,n,r)}function uc(e){return e=e.prototype,!(!e||!e.isReactComponent)}function b0(e){if(typeof e=="function")return uc(e)?1:0;if(e!=null){if(e=e.$$typeof,e===Pu)return 11;if(e===Mu)return 14}return 2}function $n(e,t){var n=e.alternate;return n===null?(n=At(e.tag,t,e.key,e.mode),n.elementType=e.elementType,n.type=e.type,n.stateNode=e.stateNode,n.alternate=e,e.alternate=n):(n.pendingProps=t,n.type=e.type,n.flags=0,n.subtreeFlags=0,n.deletions=null),n.flags=e.flags&14680064,n.childLanes=e.childLanes,n.lanes=e.lanes,n.child=e.child,n.memoizedProps=e.memoizedProps,n.memoizedState=e.memoizedState,n.updateQueue=e.updateQueue,t=e.dependencies,n.dependencies=t===null?null:{lanes:t.lanes,firstContext:t.firstContext},n.sibling=e.sibling,n.index=e.index,n.ref=e.ref,n}function Ko(e,t,n,r,i,o){var a=2;if(r=e,typeof e=="function")uc(e)&&(a=1);else if(typeof e=="string")a=5;else e:switch(e){case kr:return ir(n.children,i,o,t);case Eu:a=8,i|=8;break;case gl:return e=At(12,n,t,i|2),e.elementType=gl,e.lanes=o,e;case xl:return e=At(13,n,t,i),e.elementType=xl,e.lanes=o,e;case vl:return e=At(19,n,t,i),e.elementType=vl,e.lanes=o,e;case Cp:return Ga(n,i,o,t);default:if(typeof e=="object"&&e!==null)switch(e.$$typeof){case Sp:a=10;break e;case jp:a=9;break e;case Pu:a=11;break e;case Mu:a=14;break e;case Tn:a=16,r=null;break e}throw Error(z(130,e==null?e:typeof e,""))}return t=At(a,n,t,i),t.elementType=e,t.type=r,t.lanes=o,t}function ir(e,t,n,r){return e=At(7,e,r,t),e.lanes=n,e}function Ga(e,t,n,r){return e=At(22,e,r,t),e.elementType=Cp,e.lanes=n,e.stateNode={isHidden:!1},e}function $s(e,t,n){return e=At(6,e,null,t),e.lanes=n,e}function Ys(e,t,n){return t=At(4,e.children!==null?e.children:[],e.key,t),t.lanes=n,t.stateNode={containerInfo:e.containerInfo,pendingChildren:null,implementation:e.implementation},t}function k0(e,t,n,r,i){this.tag=t,this.containerInfo=e,this.finishedWork=this.pingCache=this.current=this.pendingChildren=null,this.timeoutHandle=-1,this.callbackNode=this.pendingContext=this.context=null,this.callbackPriority=0,this.eventTimes=Os(0),this.expirationTimes=Os(-1),this.entangledLanes=this.finishedLanes=this.mutableReadLanes=this.expiredLanes=this.pingedLanes=this.suspendedLanes=this.pendingLanes=0,this.entanglements=Os(0),this.identifierPrefix=r,this.onRecoverableError=i,this.mutableSourceEagerHydrationData=null}function cc(e,t,n,r,i,o,a,l,s){return e=new k0(e,t,n,l,s),t===1?(t=1,o===!0&&(t|=8)):t=0,o=At(3,null,null,t),e.current=o,o.stateNode=e,o.memoizedState={element:r,isDehydrated:n,cache:null,transitions:null,pendingSuspenseBoundaries:null},Qu(o),e}function S0(e,t,n){var r=3<arguments.length&&arguments[3]!==void 0?arguments[3]:null;return{$$typeof:br,key:r==null?null:""+r,children:e,containerInfo:t,implementation:n}}function xm(e){if(!e)return Qn;e=e._reactInternals;e:{if(pr(e)!==e||e.tag!==1)throw Error(z(170));var t=e;do{switch(t.tag){case 3:t=t.stateNode.context;break e;case 1:if(ht(t.type)){t=t.stateNode.__reactInternalMemoizedMergedChildContext;break e}}t=t.return}while(t!==null);throw Error(z(171))}if(e.tag===1){var n=e.type;if(ht(n))return gh(e,n,t)}return t}function vm(e,t,n,r,i,o,a,l,s){return e=cc(n,r,!0,e,i,o,a,l,s),e.context=xm(null),n=e.current,r=st(),i=Hn(n),o=pn(r,i),o.callback=t??null,Wn(n,o,i),e.current.lanes=i,Gi(e,i,r),mt(e,r),e}function qa(e,t,n,r){var i=t.current,o=st(),a=Hn(i);return n=xm(n),t.context===null?t.context=n:t.pendingContext=n,t=pn(o,a),t.payload={element:e},r=r===void 0?null:r,r!==null&&(t.callback=r),e=Wn(i,t,a),e!==null&&(Ht(e,i,a,o),Bo(e,i,a)),a}function Ea(e){if(e=e.current,!e.child)return null;switch(e.child.tag){case 5:return e.child.stateNode;default:return e.child.stateNode}}function $d(e,t){if(e=e.memoizedState,e!==null&&e.dehydrated!==null){var n=e.retryLane;e.retryLane=n!==0&&n<t?n:t}}function dc(e,t){$d(e,t),(e=e.alternate)&&$d(e,t)}function j0(){return null}var ym=typeof reportError=="function"?reportError:function(e){console.error(e)};function fc(e){this._internalRoot=e}es.prototype.render=fc.prototype.render=function(e){var t=this._internalRoot;if(t===null)throw Error(z(409));qa(e,t,null,null)};es.prototype.unmount=fc.prototype.unmount=function(){var e=this._internalRoot;if(e!==null){this._internalRoot=null;var t=e.containerInfo;cr(function(){qa(null,e,null,null)}),t[gn]=null}};function es(e){this._internalRoot=e}es.prototype.unstable_scheduleHydration=function(e){if(e){var t=Kp();e={blockedOn:null,target:e,priority:t};for(var n=0;n<An.length&&t!==0&&t<An[n].priority;n++);An.splice(n,0,e),n===0&&Zp(e)}};function pc(e){return!(!e||e.nodeType!==1&&e.nodeType!==9&&e.nodeType!==11)}function ts(e){return!(!e||e.nodeType!==1&&e.nodeType!==9&&e.nodeType!==11&&(e.nodeType!==8||e.nodeValue!==" react-mount-point-unstable "))}function Yd(){}function C0(e,t,n,r,i){if(i){if(typeof r=="function"){var o=r;r=function(){var u=Ea(a);o.call(u)}}var a=vm(t,r,e,0,null,!1,!1,"",Yd);return e._reactRootContainer=a,e[gn]=a.current,Ni(e.nodeType===8?e.parentNode:e),cr(),a}for(;i=e.lastChild;)e.removeChild(i);if(typeof r=="function"){var l=r;r=function(){var u=Ea(s);l.call(u)}}var s=cc(e,0,!1,null,null,!1,!1,"",Yd);return e._reactRootContainer=s,e[gn]=s.current,Ni(e.nodeType===8?e.parentNode:e),cr(function(){qa(t,s,n,r)}),s}function ns(e,t,n,r,i){var o=n._reactRootContainer;if(o){var a=o;if(typeof i=="function"){var l=i;i=function(){var s=Ea(a);l.call(s)}}qa(t,a,e,i)}else a=C0(n,t,e,i,r);return Ea(a)}Qp=function(e){switch(e.tag){case 3:var t=e.stateNode;if(t.current.memoizedState.isDehydrated){var n=gi(t.pendingLanes);n!==0&&(Au(t,n|1),mt(t,ze()),!(pe&6)&&(Qr=ze()+500,Jn()))}break;case 13:cr(function(){var r=xn(e,1);if(r!==null){var i=st();Ht(r,e,1,i)}}),dc(e,1)}};Iu=function(e){if(e.tag===13){var t=xn(e,134217728);if(t!==null){var n=st();Ht(t,e,134217728,n)}dc(e,134217728)}};Xp=function(e){if(e.tag===13){var t=Hn(e),n=xn(e,t);if(n!==null){var r=st();Ht(n,e,t,r)}dc(e,t)}};Kp=function(){return ve};Jp=function(e,t){var n=ve;try{return ve=e,t()}finally{ve=n}};Pl=function(e,t,n){switch(t){case"input":if(bl(e,n),t=n.name,n.type==="radio"&&t!=null){for(n=e;n.parentNode;)n=n.parentNode;for(n=n.querySelectorAll("input[name="+JSON.stringify(""+t)+'][type="radio"]'),t=0;t<n.length;t++){var r=n[t];if(r!==e&&r.form===e.form){var i=Ya(r);if(!i)throw Error(z(90));Ep(r),bl(r,i)}}}break;case"textarea":Mp(e,n);break;case"select":t=n.value,t!=null&&Lr(e,!!n.multiple,t,!1)}};zp=ac;Dp=cr;var O0={usingClientEntryPoint:!1,Events:[eo,Or,Ya,Lp,Rp,ac]},si={findFiberByHostInstance:qn,bundleType:0,version:"18.2.0",rendererPackageName:"react-dom"},E0={bundleType:si.bundleType,version:si.version,rendererPackageName:si.rendererPackageName,rendererConfig:si.rendererConfig,overrideHookState:null,overrideHookStateDeletePath:null,overrideHookStateRenamePath:null,overrideProps:null,overridePropsDeletePath:null,overridePropsRenamePath:null,setErrorHandler:null,setSuspenseHandler:null,scheduleUpdate:null,currentDispatcherRef:yn.ReactCurrentDispatcher,findHostInstanceByFiber:function(e){return e=Vp(e),e===null?null:e.stateNode},findFiberByHostInstance:si.findFiberByHostInstance||j0,findHostInstancesForRefresh:null,scheduleRefresh:null,scheduleRoot:null,setRefreshHandler:null,getCurrentFiber:null,reconcilerVersion:"18.2.0-next-9e3b772b8-20220608"};if(typeof __REACT_DEVTOOLS_GLOBAL_HOOK__<"u"){var So=__REACT_DEVTOOLS_GLOBAL_HOOK__;if(!So.isDisabled&&So.supportsFiber)try{Wa=So.inject(E0),tn=So}catch{}}St.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED=O0;St.createPortal=function(e,t){var n=2<arguments.length&&arguments[2]!==void 0?arguments[2]:null;if(!pc(t))throw Error(z(200));return S0(e,t,null,n)};St.createRoot=function(e,t){if(!pc(e))throw Error(z(299));var n=!1,r="",i=ym;return t!=null&&(t.unstable_strictMode===!0&&(n=!0),t.identifierPrefix!==void 0&&(r=t.identifierPrefix),t.onRecoverableError!==void 0&&(i=t.onRecoverableError)),t=cc(e,1,!1,null,null,n,!1,r,i),e[gn]=t.current,Ni(e.nodeType===8?e.parentNode:e),new fc(t)};St.findDOMNode=function(e){if(e==null)return null;if(e.nodeType===1)return e;var t=e._reactInternals;if(t===void 0)throw typeof e.render=="function"?Error(z(188)):(e=Object.keys(e).join(","),Error(z(268,e)));return e=Vp(t),e=e===null?null:e.stateNode,e};St.flushSync=function(e){return cr(e)};St.hydrate=function(e,t,n){if(!ts(t))throw Error(z(200));return ns(null,e,t,!0,n)};St.hydrateRoot=function(e,t,n){if(!pc(e))throw Error(z(405));var r=n!=null&&n.hydratedSources||null,i=!1,o="",a=ym;if(n!=null&&(n.unstable_strictMode===!0&&(i=!0),n.identifierPrefix!==void 0&&(o=n.identifierPrefix),n.onRecoverableError!==void 0&&(a=n.onRecoverableError)),t=vm(t,null,e,1,n??null,i,!1,o,a),e[gn]=t.current,Ni(e),r)for(e=0;e<r.length;e++)n=r[e],i=n._getVersion,i=i(n._source),t.mutableSourceEagerHydrationData==null?t.mutableSourceEagerHydrationData=[n,i]:t.mutableSourceEagerHydrationData.push(n,i);return new es(t)};St.render=function(e,t,n){if(!ts(t))throw Error(z(200));return ns(null,e,t,!1,n)};St.unmountComponentAtNode=function(e){if(!ts(e))throw Error(z(40));return e._reactRootContainer?(cr(function(){ns(null,null,e,!1,function(){e._reactRootContainer=null,e[gn]=null})}),!0):!1};St.unstable_batchedUpdates=ac;St.unstable_renderSubtreeIntoContainer=function(e,t,n,r){if(!ts(n))throw Error(z(200));if(e==null||e._reactInternals===void 0)throw Error(z(38));return ns(e,t,n,!1,r)};St.version="18.2.0-next-9e3b772b8-20220608";function wm(){if(!(typeof __REACT_DEVTOOLS_GLOBAL_HOOK__>"u"||typeof __REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE!="function"))try{__REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE(wm)}catch(e){console.error(e)}}wm(),vp.exports=St;var no=vp.exports;const P0=Kr(no);var Qd=no;hl.createRoot=Qd.createRoot,hl.hydrateRoot=Qd.hydrateRoot;var bm={exports:{}};(function(e,t){(function(r,i){e.exports=i(R)})(sp,n=>(()=>{var r={"./node_modules/css-mediaquery/index.js":(l,s)=>{s.match=x,s.parse=y;var u=/(?:(only|not)?\s*([^\s\(\)]+)(?:\s*and)?\s*)?(.+)?/i,p=/\(\s*([^\s\:\)]+)\s*(?:\:\s*([^\s\)]+))?\s*\)/,h=/^(?:(min|max)-)?(.+)/,g=/(em|rem|px|cm|mm|in|pt|pc)?$/,v=/(dpi|dpcm|dppx)?$/;function x(m,w){return y(m).some(function(k){var M=k.inverse,E=k.type==="all"||w.type===k.type;if(E&&M||!(E||M))return!1;var j=k.expressions.every(function(C){var T=C.feature,_=C.modifier,I=C.value,L=w[T];if(!L)return!1;switch(T){case"orientation":case"scan":return L.toLowerCase()===I.toLowerCase();case"width":case"height":case"device-width":case"device-height":I=f(I),L=f(L);break;case"resolution":I=d(I),L=d(L);break;case"aspect-ratio":case"device-aspect-ratio":case"device-pixel-ratio":I=b(I),L=b(L);break;case"grid":case"color":case"color-index":case"monochrome":I=parseInt(I,10)||1,L=parseInt(L,10)||0;break}switch(_){case"min":return L>=I;case"max":return L<=I;default:return L===I}});return j&&!M||!j&&M})}function y(m){return m.split(",").map(function(w){w=w.trim();var k=w.match(u),M=k[1],E=k[2],j=k[3]||"",C={};return C.inverse=!!M&&M.toLowerCase()==="not",C.type=E?E.toLowerCase():"all",j=j.match(/\([^\)]+\)/g)||[],C.expressions=j.map(function(T){var _=T.match(p),I=_[1].toLowerCase().match(h);return{modifier:I[1],feature:I[2],value:_[2]}}),C})}function b(m){var w=Number(m),k;return w||(k=m.match(/^(\d+)\s*\/\s*(\d+)$/),w=k[1]/k[2]),w}function d(m){var w=parseFloat(m),k=String(m).match(v)[1];switch(k){case"dpcm":return w/2.54;case"dppx":return w*96;default:return w}}function f(m){var w=parseFloat(m),k=String(m).match(g)[1];switch(k){case"em":return w*16;case"rem":return w*16;case"cm":return w*96/2.54;case"mm":return w*96/2.54/10;case"in":return w*96;case"pt":return w*72;case"pc":return w*72/12;default:return w}}},"./node_modules/hyphenate-style-name/index.js":(l,s,u)=>{u.r(s),u.d(s,{default:()=>y});var p=/[A-Z]/g,h=/^ms-/,g={};function v(b){return"-"+b.toLowerCase()}function x(b){if(g.hasOwnProperty(b))return g[b];var d=b.replace(p,v);return g[b]=h.test(d)?"-"+d:d}const y=x},"./node_modules/matchmediaquery/index.js":(l,s,u)=>{var p=u("./node_modules/css-mediaquery/index.js").match,h=typeof window<"u"?window.matchMedia:null;function g(x,y,b){var d=this;if(h&&!b){var f=h.call(window,x);this.matches=f.matches,this.media=f.media,f.addListener(k)}else this.matches=p(x,y),this.media=x;this.addListener=m,this.removeListener=w,this.dispose=M;function m(E){f&&f.addListener(E)}function w(E){f&&f.removeListener(E)}function k(E){d.matches=E.matches,d.media=E.media}function M(){f&&f.removeListener(k)}}function v(x,y,b){return new g(x,y,b)}l.exports=v},"./node_modules/object-assign/index.js":l=>{/*
object-assign
(c) Sindre Sorhus
@license MIT
*/var s=Object.getOwnPropertySymbols,u=Object.prototype.hasOwnProperty,p=Object.prototype.propertyIsEnumerable;function h(v){if(v==null)throw new TypeError("Object.assign cannot be called with null or undefined");return Object(v)}function g(){try{if(!Object.assign)return!1;var v=new String("abc");if(v[5]="de",Object.getOwnPropertyNames(v)[0]==="5")return!1;for(var x={},y=0;y<10;y++)x["_"+String.fromCharCode(y)]=y;var b=Object.getOwnPropertyNames(x).map(function(f){return x[f]});if(b.join("")!=="0123456789")return!1;var d={};return"abcdefghijklmnopqrst".split("").forEach(function(f){d[f]=f}),Object.keys(Object.assign({},d)).join("")==="abcdefghijklmnopqrst"}catch{return!1}}l.exports=g()?Object.assign:function(v,x){for(var y,b=h(v),d,f=1;f<arguments.length;f++){y=Object(arguments[f]);for(var m in y)u.call(y,m)&&(b[m]=y[m]);if(s){d=s(y);for(var w=0;w<d.length;w++)p.call(y,d[w])&&(b[d[w]]=y[d[w]])}}return b}},"./node_modules/prop-types/checkPropTypes.js":(l,s,u)=>{var p=function(){};{var h=u("./node_modules/prop-types/lib/ReactPropTypesSecret.js"),g={},v=u("./node_modules/prop-types/lib/has.js");p=function(y){var b="Warning: "+y;typeof console<"u"&&console.error(b);try{throw new Error(b)}catch{}}}function x(y,b,d,f,m){for(var w in y)if(v(y,w)){var k;try{if(typeof y[w]!="function"){var M=Error((f||"React class")+": "+d+" type `"+w+"` is invalid; it must be a function, usually from the `prop-types` package, but received `"+typeof y[w]+"`.This often happens because of typos such as `PropTypes.function` instead of `PropTypes.func`.");throw M.name="Invariant Violation",M}k=y[w](b,w,f,d,null,h)}catch(j){k=j}if(k&&!(k instanceof Error)&&p((f||"React class")+": type specification of "+d+" `"+w+"` is invalid; the type checker function must return `null` or an `Error` but returned a "+typeof k+". You may have forgotten to pass an argument to the type checker creator (arrayOf, instanceOf, objectOf, oneOf, oneOfType, and shape all require an argument)."),k instanceof Error&&!(k.message in g)){g[k.message]=!0;var E=m?m():"";p("Failed "+d+" type: "+k.message+(E??""))}}}x.resetWarningCache=function(){g={}},l.exports=x},"./node_modules/prop-types/factoryWithTypeCheckers.js":(l,s,u)=>{var p=u("./node_modules/react-is/index.js"),h=u("./node_modules/object-assign/index.js"),g=u("./node_modules/prop-types/lib/ReactPropTypesSecret.js"),v=u("./node_modules/prop-types/lib/has.js"),x=u("./node_modules/prop-types/checkPropTypes.js"),y=function(){};y=function(d){var f="Warning: "+d;typeof console<"u"&&console.error(f);try{throw new Error(f)}catch{}};function b(){return null}l.exports=function(d,f){var m=typeof Symbol=="function"&&Symbol.iterator,w="@@iterator";function k(D){var $=D&&(m&&D[m]||D[w]);if(typeof $=="function")return $}var M="<<anonymous>>",E={array:_("array"),bigint:_("bigint"),bool:_("boolean"),func:_("function"),number:_("number"),object:_("object"),string:_("string"),symbol:_("symbol"),any:I(),arrayOf:L,element:U(),elementType:H(),instanceOf:q,node:X(),objectOf:F,oneOf:he,oneOfType:Q,shape:ne,exact:Ce};function j(D,$){return D===$?D!==0||1/D===1/$:D!==D&&$!==$}function C(D,$){this.message=D,this.data=$&&typeof $=="object"?$:{},this.stack=""}C.prototype=Error.prototype;function T(D){var $={},oe=0;function ie(se,ae,le,fe,xe,S,O){if(fe=fe||M,S=S||le,O!==g){if(f){var A=new Error("Calling PropTypes validators directly is not supported by the `prop-types` package. Use `PropTypes.checkPropTypes()` to call them. Read more at http://fb.me/use-check-prop-types");throw A.name="Invariant Violation",A}else if(typeof console<"u"){var W=fe+":"+le;!$[W]&&oe<3&&(y("You are manually calling a React.PropTypes validation function for the `"+S+"` prop on `"+fe+"`. This is deprecated and will throw in the standalone `prop-types` package. You may be seeing this warning due to a third-party PropTypes library. See https://fb.me/react-warning-dont-call-proptypes for details."),$[W]=!0,oe++)}}return ae[le]==null?se?ae[le]===null?new C("The "+xe+" `"+S+"` is marked as required "+("in `"+fe+"`, but its value is `null`.")):new C("The "+xe+" `"+S+"` is marked as required in "+("`"+fe+"`, but its value is `undefined`.")):null:D(ae,le,fe,xe,S)}var re=ie.bind(null,!1);return re.isRequired=ie.bind(null,!0),re}function _(D){function $(oe,ie,re,se,ae,le){var fe=oe[ie],xe=de(fe);if(xe!==D){var S=Pe(fe);return new C("Invalid "+se+" `"+ae+"` of type "+("`"+S+"` supplied to `"+re+"`, expected ")+("`"+D+"`."),{expectedType:D})}return null}return T($)}function I(){return T(b)}function L(D){function $(oe,ie,re,se,ae){if(typeof D!="function")return new C("Property `"+ae+"` of component `"+re+"` has invalid PropType notation inside arrayOf.");var le=oe[ie];if(!Array.isArray(le)){var fe=de(le);return new C("Invalid "+se+" `"+ae+"` of type "+("`"+fe+"` supplied to `"+re+"`, expected an array."))}for(var xe=0;xe<le.length;xe++){var S=D(le,xe,re,se,ae+"["+xe+"]",g);if(S instanceof Error)return S}return null}return T($)}function U(){function D($,oe,ie,re,se){var ae=$[oe];if(!d(ae)){var le=de(ae);return new C("Invalid "+re+" `"+se+"` of type "+("`"+le+"` supplied to `"+ie+"`, expected a single ReactElement."))}return null}return T(D)}function H(){function D($,oe,ie,re,se){var ae=$[oe];if(!p.isValidElementType(ae)){var le=de(ae);return new C("Invalid "+re+" `"+se+"` of type "+("`"+le+"` supplied to `"+ie+"`, expected a single ReactElement type."))}return null}return T(D)}function q(D){function $(oe,ie,re,se,ae){if(!(oe[ie]instanceof D)){var le=D.name||M,fe=Ot(oe[ie]);return new C("Invalid "+se+" `"+ae+"` of type "+("`"+fe+"` supplied to `"+re+"`, expected ")+("instance of `"+le+"`."))}return null}return T($)}function he(D){if(!Array.isArray(D))return arguments.length>1?y("Invalid arguments supplied to oneOf, expected an array, got "+arguments.length+" arguments. A common mistake is to write oneOf(x, y, z) instead of oneOf([x, y, z])."):y("Invalid argument supplied to oneOf, expected an array."),b;function $(oe,ie,re,se,ae){for(var le=oe[ie],fe=0;fe<D.length;fe++)if(j(le,D[fe]))return null;var xe=JSON.stringify(D,function(O,A){var W=Pe(A);return W==="symbol"?String(A):A});return new C("Invalid "+se+" `"+ae+"` of value `"+String(le)+"` "+("supplied to `"+re+"`, expected one of "+xe+"."))}return T($)}function F(D){function $(oe,ie,re,se,ae){if(typeof D!="function")return new C("Property `"+ae+"` of component `"+re+"` has invalid PropType notation inside objectOf.");var le=oe[ie],fe=de(le);if(fe!=="object")return new C("Invalid "+se+" `"+ae+"` of type "+("`"+fe+"` supplied to `"+re+"`, expected an object."));for(var xe in le)if(v(le,xe)){var S=D(le,xe,re,se,ae+"."+xe,g);if(S instanceof Error)return S}return null}return T($)}function Q(D){if(!Array.isArray(D))return y("Invalid argument supplied to oneOfType, expected an instance of array."),b;for(var $=0;$<D.length;$++){var oe=D[$];if(typeof oe!="function")return y("Invalid argument supplied to oneOfType. Expected an array of check functions, but received "+Qe(oe)+" at index "+$+"."),b}function ie(re,se,ae,le,fe){for(var xe=[],S=0;S<D.length;S++){var O=D[S],A=O(re,se,ae,le,fe,g);if(A==null)return null;A.data&&v(A.data,"expectedType")&&xe.push(A.data.expectedType)}var W=xe.length>0?", expected one of type ["+xe.join(", ")+"]":"";return new C("Invalid "+le+" `"+fe+"` supplied to "+("`"+ae+"`"+W+"."))}return T(ie)}function X(){function D($,oe,ie,re,se){return we($[oe])?null:new C("Invalid "+re+" `"+se+"` supplied to "+("`"+ie+"`, expected a ReactNode."))}return T(D)}function ce(D,$,oe,ie,re){return new C((D||"React class")+": "+$+" type `"+oe+"."+ie+"` is invalid; it must be a function, usually from the `prop-types` package, but received `"+re+"`.")}function ne(D){function $(oe,ie,re,se,ae){var le=oe[ie],fe=de(le);if(fe!=="object")return new C("Invalid "+se+" `"+ae+"` of type `"+fe+"` "+("supplied to `"+re+"`, expected `object`."));for(var xe in D){var S=D[xe];if(typeof S!="function")return ce(re,se,ae,xe,Pe(S));var O=S(le,xe,re,se,ae+"."+xe,g);if(O)return O}return null}return T($)}function Ce(D){function $(oe,ie,re,se,ae){var le=oe[ie],fe=de(le);if(fe!=="object")return new C("Invalid "+se+" `"+ae+"` of type `"+fe+"` "+("supplied to `"+re+"`, expected `object`."));var xe=h({},oe[ie],D);for(var S in xe){var O=D[S];if(v(D,S)&&typeof O!="function")return ce(re,se,ae,S,Pe(O));if(!O)return new C("Invalid "+se+" `"+ae+"` key `"+S+"` supplied to `"+re+"`.\nBad object: "+JSON.stringify(oe[ie],null,"  ")+`
Valid keys: `+JSON.stringify(Object.keys(D),null,"  "));var A=O(le,S,re,se,ae+"."+S,g);if(A)return A}return null}return T($)}function we(D){switch(typeof D){case"number":case"string":case"undefined":return!0;case"boolean":return!D;case"object":if(Array.isArray(D))return D.every(we);if(D===null||d(D))return!0;var $=k(D);if($){var oe=$.call(D),ie;if($!==D.entries){for(;!(ie=oe.next()).done;)if(!we(ie.value))return!1}else for(;!(ie=oe.next()).done;){var re=ie.value;if(re&&!we(re[1]))return!1}}else return!1;return!0;default:return!1}}function We(D,$){return D==="symbol"?!0:$?$["@@toStringTag"]==="Symbol"||typeof Symbol=="function"&&$ instanceof Symbol:!1}function de(D){var $=typeof D;return Array.isArray(D)?"array":D instanceof RegExp?"object":We($,D)?"symbol":$}function Pe(D){if(typeof D>"u"||D===null)return""+D;var $=de(D);if($==="object"){if(D instanceof Date)return"date";if(D instanceof RegExp)return"regexp"}return $}function Qe(D){var $=Pe(D);switch($){case"array":case"object":return"an "+$;case"boolean":case"date":case"regexp":return"a "+$;default:return $}}function Ot(D){return!D.constructor||!D.constructor.name?M:D.constructor.name}return E.checkPropTypes=x,E.resetWarningCache=x.resetWarningCache,E.PropTypes=E,E}},"./node_modules/prop-types/index.js":(l,s,u)=>{{var p=u("./node_modules/react-is/index.js"),h=!0;l.exports=u("./node_modules/prop-types/factoryWithTypeCheckers.js")(p.isElement,h)}},"./node_modules/prop-types/lib/ReactPropTypesSecret.js":l=>{var s="SECRET_DO_NOT_PASS_THIS_OR_YOU_WILL_BE_FIRED";l.exports=s},"./node_modules/prop-types/lib/has.js":l=>{l.exports=Function.call.bind(Object.prototype.hasOwnProperty)},"./node_modules/react-is/cjs/react-is.development.js":(l,s)=>{/** @license React v16.13.1
 * react-is.development.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */(function(){var u=typeof Symbol=="function"&&Symbol.for,p=u?Symbol.for("react.element"):60103,h=u?Symbol.for("react.portal"):60106,g=u?Symbol.for("react.fragment"):60107,v=u?Symbol.for("react.strict_mode"):60108,x=u?Symbol.for("react.profiler"):60114,y=u?Symbol.for("react.provider"):60109,b=u?Symbol.for("react.context"):60110,d=u?Symbol.for("react.async_mode"):60111,f=u?Symbol.for("react.concurrent_mode"):60111,m=u?Symbol.for("react.forward_ref"):60112,w=u?Symbol.for("react.suspense"):60113,k=u?Symbol.for("react.suspense_list"):60120,M=u?Symbol.for("react.memo"):60115,E=u?Symbol.for("react.lazy"):60116,j=u?Symbol.for("react.block"):60121,C=u?Symbol.for("react.fundamental"):60117,T=u?Symbol.for("react.responder"):60118,_=u?Symbol.for("react.scope"):60119;function I(O){return typeof O=="string"||typeof O=="function"||O===g||O===f||O===x||O===v||O===w||O===k||typeof O=="object"&&O!==null&&(O.$$typeof===E||O.$$typeof===M||O.$$typeof===y||O.$$typeof===b||O.$$typeof===m||O.$$typeof===C||O.$$typeof===T||O.$$typeof===_||O.$$typeof===j)}function L(O){if(typeof O=="object"&&O!==null){var A=O.$$typeof;switch(A){case p:var W=O.type;switch(W){case d:case f:case g:case x:case v:case w:return W;default:var V=W&&W.$$typeof;switch(V){case b:case m:case E:case M:case y:return V;default:return A}}case h:return A}}}var U=d,H=f,q=b,he=y,F=p,Q=m,X=g,ce=E,ne=M,Ce=h,we=x,We=v,de=w,Pe=!1;function Qe(O){return Pe||(Pe=!0,console.warn("The ReactIs.isAsyncMode() alias has been deprecated, and will be removed in React 17+. Update your code to use ReactIs.isConcurrentMode() instead. It has the exact same API.")),Ot(O)||L(O)===d}function Ot(O){return L(O)===f}function D(O){return L(O)===b}function $(O){return L(O)===y}function oe(O){return typeof O=="object"&&O!==null&&O.$$typeof===p}function ie(O){return L(O)===m}function re(O){return L(O)===g}function se(O){return L(O)===E}function ae(O){return L(O)===M}function le(O){return L(O)===h}function fe(O){return L(O)===x}function xe(O){return L(O)===v}function S(O){return L(O)===w}s.AsyncMode=U,s.ConcurrentMode=H,s.ContextConsumer=q,s.ContextProvider=he,s.Element=F,s.ForwardRef=Q,s.Fragment=X,s.Lazy=ce,s.Memo=ne,s.Portal=Ce,s.Profiler=we,s.StrictMode=We,s.Suspense=de,s.isAsyncMode=Qe,s.isConcurrentMode=Ot,s.isContextConsumer=D,s.isContextProvider=$,s.isElement=oe,s.isForwardRef=ie,s.isFragment=re,s.isLazy=se,s.isMemo=ae,s.isPortal=le,s.isProfiler=fe,s.isStrictMode=xe,s.isSuspense=S,s.isValidElementType=I,s.typeOf=L})()},"./node_modules/react-is/index.js":(l,s,u)=>{l.exports=u("./node_modules/react-is/cjs/react-is.development.js")},"./node_modules/shallow-equal/dist/index.esm.js":(l,s,u)=>{u.r(s),u.d(s,{shallowEqualArrays:()=>h,shallowEqualObjects:()=>p});function p(g,v){if(g===v)return!0;if(!g||!v)return!1;var x=Object.keys(g),y=Object.keys(v),b=x.length;if(y.length!==b)return!1;for(var d=0;d<b;d++){var f=x[d];if(g[f]!==v[f]||!Object.prototype.hasOwnProperty.call(v,f))return!1}return!0}function h(g,v){if(g===v)return!0;if(!g||!v)return!1;var x=g.length;if(v.length!==x)return!1;for(var y=0;y<x;y++)if(g[y]!==v[y])return!1;return!0}},"./src/Component.ts":function(l,s,u){var p=this&&this.__rest||function(x,y){var b={};for(var d in x)Object.prototype.hasOwnProperty.call(x,d)&&y.indexOf(d)<0&&(b[d]=x[d]);if(x!=null&&typeof Object.getOwnPropertySymbols=="function")for(var f=0,d=Object.getOwnPropertySymbols(x);f<d.length;f++)y.indexOf(d[f])<0&&Object.prototype.propertyIsEnumerable.call(x,d[f])&&(b[d[f]]=x[d[f]]);return b},h=this&&this.__importDefault||function(x){return x&&x.__esModule?x:{default:x}};Object.defineProperty(s,"__esModule",{value:!0});var g=h(u("./src/useMediaQuery.ts")),v=function(x){var y=x.children,b=x.device,d=x.onChange,f=p(x,["children","device","onChange"]),m=(0,g.default)(f,b,d);return typeof y=="function"?y(m):m?y:null};s.default=v},"./src/Context.ts":(l,s,u)=>{Object.defineProperty(s,"__esModule",{value:!0});var p=u("react"),h=(0,p.createContext)(void 0);s.default=h},"./src/index.ts":function(l,s,u){var p=this&&this.__importDefault||function(y){return y&&y.__esModule?y:{default:y}};Object.defineProperty(s,"__esModule",{value:!0}),s.Context=s.toQuery=s.useMediaQuery=s.default=void 0;var h=p(u("./src/useMediaQuery.ts"));s.useMediaQuery=h.default;var g=p(u("./src/Component.ts"));s.default=g.default;var v=p(u("./src/toQuery.ts"));s.toQuery=v.default;var x=p(u("./src/Context.ts"));s.Context=x.default},"./src/mediaQuery.ts":function(l,s,u){var p=this&&this.__assign||function(){return p=Object.assign||function(w){for(var k,M=1,E=arguments.length;M<E;M++){k=arguments[M];for(var j in k)Object.prototype.hasOwnProperty.call(k,j)&&(w[j]=k[j])}return w},p.apply(this,arguments)},h=this&&this.__rest||function(w,k){var M={};for(var E in w)Object.prototype.hasOwnProperty.call(w,E)&&k.indexOf(E)<0&&(M[E]=w[E]);if(w!=null&&typeof Object.getOwnPropertySymbols=="function")for(var j=0,E=Object.getOwnPropertySymbols(w);j<E.length;j++)k.indexOf(E[j])<0&&Object.prototype.propertyIsEnumerable.call(w,E[j])&&(M[E[j]]=w[E[j]]);return M},g=this&&this.__importDefault||function(w){return w&&w.__esModule?w:{default:w}};Object.defineProperty(s,"__esModule",{value:!0});var v=g(u("./node_modules/prop-types/index.js")),x=v.default.oneOfType([v.default.string,v.default.number]),y={all:v.default.bool,grid:v.default.bool,aural:v.default.bool,braille:v.default.bool,handheld:v.default.bool,print:v.default.bool,projection:v.default.bool,screen:v.default.bool,tty:v.default.bool,tv:v.default.bool,embossed:v.default.bool},b={orientation:v.default.oneOf(["portrait","landscape"]),scan:v.default.oneOf(["progressive","interlace"]),aspectRatio:v.default.string,deviceAspectRatio:v.default.string,height:x,deviceHeight:x,width:x,deviceWidth:x,color:v.default.bool,colorIndex:v.default.bool,monochrome:v.default.bool,resolution:x,type:Object.keys(y)};b.type;var d=h(b,["type"]),f=p({minAspectRatio:v.default.string,maxAspectRatio:v.default.string,minDeviceAspectRatio:v.default.string,maxDeviceAspectRatio:v.default.string,minHeight:x,maxHeight:x,minDeviceHeight:x,maxDeviceHeight:x,minWidth:x,maxWidth:x,minDeviceWidth:x,maxDeviceWidth:x,minColor:v.default.number,maxColor:v.default.number,minColorIndex:v.default.number,maxColorIndex:v.default.number,minMonochrome:v.default.number,maxMonochrome:v.default.number,minResolution:x,maxResolution:x},d),m=p(p({},y),f);s.default={all:m,types:y,matchers:b,features:f}},"./src/toQuery.ts":function(l,s,u){var p=this&&this.__importDefault||function(d){return d&&d.__esModule?d:{default:d}};Object.defineProperty(s,"__esModule",{value:!0});var h=p(u("./node_modules/hyphenate-style-name/index.js")),g=p(u("./src/mediaQuery.ts")),v=function(d){return"not ".concat(d)},x=function(d,f){var m=(0,h.default)(d);return typeof f=="number"&&(f="".concat(f,"px")),f===!0?m:f===!1?v(m):"(".concat(m,": ").concat(f,")")},y=function(d){return d.join(" and ")},b=function(d){var f=[];return Object.keys(g.default.all).forEach(function(m){var w=d[m];w!=null&&f.push(x(m,w))}),y(f)};s.default=b},"./src/useMediaQuery.ts":function(l,s,u){var p=this&&this.__importDefault||function(C){return C&&C.__esModule?C:{default:C}};Object.defineProperty(s,"__esModule",{value:!0});var h=u("react"),g=p(u("./node_modules/matchmediaquery/index.js")),v=p(u("./node_modules/hyphenate-style-name/index.js")),x=u("./node_modules/shallow-equal/dist/index.esm.js"),y=p(u("./src/toQuery.ts")),b=p(u("./src/Context.ts")),d=function(C){return C.query||(0,y.default)(C)},f=function(C){if(C){var T=Object.keys(C);return T.reduce(function(_,I){return _[(0,v.default)(I)]=C[I],_},{})}},m=function(){var C=(0,h.useRef)(!1);return(0,h.useEffect)(function(){C.current=!0},[]),C.current},w=function(C){var T=(0,h.useContext)(b.default),_=function(){return f(C)||f(T)},I=(0,h.useState)(_),L=I[0],U=I[1];return(0,h.useEffect)(function(){var H=_();(0,x.shallowEqualObjects)(L,H)||U(H)},[C,T]),L},k=function(C){var T=function(){return d(C)},_=(0,h.useState)(T),I=_[0],L=_[1];return(0,h.useEffect)(function(){var U=T();I!==U&&L(U)},[C]),I},M=function(C,T){var _=function(){return(0,g.default)(C,T||{},!!T)},I=(0,h.useState)(_),L=I[0],U=I[1],H=m();return(0,h.useEffect)(function(){if(H){var q=_();return U(q),function(){q&&q.dispose()}}},[C,T]),L},E=function(C){var T=(0,h.useState)(C.matches),_=T[0],I=T[1];return(0,h.useEffect)(function(){var L=function(U){I(U.matches)};return C.addListener(L),I(C.matches),function(){C.removeListener(L)}},[C]),_},j=function(C,T,_){var I=w(T),L=k(C);if(!L)throw new Error("Invalid or missing MediaQuery!");var U=M(L,I),H=E(U),q=m();return(0,h.useEffect)(function(){q&&_&&_(H)},[H]),(0,h.useEffect)(function(){return function(){U&&U.dispose()}},[]),H};s.default=j},react:l=>{l.exports=n}},i={};function o(l){var s=i[l];if(s!==void 0)return s.exports;var u=i[l]={exports:{}};return r[l].call(u.exports,u,u.exports,o),u.exports}o.d=(l,s)=>{for(var u in s)o.o(s,u)&&!o.o(l,u)&&Object.defineProperty(l,u,{enumerable:!0,get:s[u]})},o.o=(l,s)=>Object.prototype.hasOwnProperty.call(l,s),o.r=l=>{typeof Symbol<"u"&&Symbol.toStringTag&&Object.defineProperty(l,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(l,"__esModule",{value:!0})};var a=o("./src/index.ts");return a})())})(bm);var zn=bm.exports;const K=Kr(zn);function G(){return G=Object.assign?Object.assign.bind():function(e){for(var t=1;t<arguments.length;t++){var n=arguments[t];for(var r in n)Object.prototype.hasOwnProperty.call(n,r)&&(e[r]=n[r])}return e},G.apply(this,arguments)}function km(e){var t=Object.create(null);return function(n){return t[n]===void 0&&(t[n]=e(n)),t[n]}}var M0=/^((children|dangerouslySetInnerHTML|key|ref|autoFocus|defaultValue|defaultChecked|innerHTML|suppressContentEditableWarning|suppressHydrationWarning|valueLink|abbr|accept|acceptCharset|accessKey|action|allow|allowUserMedia|allowPaymentRequest|allowFullScreen|allowTransparency|alt|async|autoComplete|autoPlay|capture|cellPadding|cellSpacing|challenge|charSet|checked|cite|classID|className|cols|colSpan|content|contentEditable|contextMenu|controls|controlsList|coords|crossOrigin|data|dateTime|decoding|default|defer|dir|disabled|disablePictureInPicture|download|draggable|encType|enterKeyHint|form|formAction|formEncType|formMethod|formNoValidate|formTarget|frameBorder|headers|height|hidden|high|href|hrefLang|htmlFor|httpEquiv|id|inputMode|integrity|is|keyParams|keyType|kind|label|lang|list|loading|loop|low|marginHeight|marginWidth|max|maxLength|media|mediaGroup|method|min|minLength|multiple|muted|name|nonce|noValidate|open|optimum|pattern|placeholder|playsInline|poster|preload|profile|radioGroup|readOnly|referrerPolicy|rel|required|reversed|role|rows|rowSpan|sandbox|scope|scoped|scrolling|seamless|selected|shape|size|sizes|slot|span|spellCheck|src|srcDoc|srcLang|srcSet|start|step|style|summary|tabIndex|target|title|translate|type|useMap|value|width|wmode|wrap|about|datatype|inlist|prefix|property|resource|typeof|vocab|autoCapitalize|autoCorrect|autoSave|color|incremental|fallback|inert|itemProp|itemScope|itemType|itemID|itemRef|on|option|results|security|unselectable|accentHeight|accumulate|additive|alignmentBaseline|allowReorder|alphabetic|amplitude|arabicForm|ascent|attributeName|attributeType|autoReverse|azimuth|baseFrequency|baselineShift|baseProfile|bbox|begin|bias|by|calcMode|capHeight|clip|clipPathUnits|clipPath|clipRule|colorInterpolation|colorInterpolationFilters|colorProfile|colorRendering|contentScriptType|contentStyleType|cursor|cx|cy|d|decelerate|descent|diffuseConstant|direction|display|divisor|dominantBaseline|dur|dx|dy|edgeMode|elevation|enableBackground|end|exponent|externalResourcesRequired|fill|fillOpacity|fillRule|filter|filterRes|filterUnits|floodColor|floodOpacity|focusable|fontFamily|fontSize|fontSizeAdjust|fontStretch|fontStyle|fontVariant|fontWeight|format|from|fr|fx|fy|g1|g2|glyphName|glyphOrientationHorizontal|glyphOrientationVertical|glyphRef|gradientTransform|gradientUnits|hanging|horizAdvX|horizOriginX|ideographic|imageRendering|in|in2|intercept|k|k1|k2|k3|k4|kernelMatrix|kernelUnitLength|kerning|keyPoints|keySplines|keyTimes|lengthAdjust|letterSpacing|lightingColor|limitingConeAngle|local|markerEnd|markerMid|markerStart|markerHeight|markerUnits|markerWidth|mask|maskContentUnits|maskUnits|mathematical|mode|numOctaves|offset|opacity|operator|order|orient|orientation|origin|overflow|overlinePosition|overlineThickness|panose1|paintOrder|pathLength|patternContentUnits|patternTransform|patternUnits|pointerEvents|points|pointsAtX|pointsAtY|pointsAtZ|preserveAlpha|preserveAspectRatio|primitiveUnits|r|radius|refX|refY|renderingIntent|repeatCount|repeatDur|requiredExtensions|requiredFeatures|restart|result|rotate|rx|ry|scale|seed|shapeRendering|slope|spacing|specularConstant|specularExponent|speed|spreadMethod|startOffset|stdDeviation|stemh|stemv|stitchTiles|stopColor|stopOpacity|strikethroughPosition|strikethroughThickness|string|stroke|strokeDasharray|strokeDashoffset|strokeLinecap|strokeLinejoin|strokeMiterlimit|strokeOpacity|strokeWidth|surfaceScale|systemLanguage|tableValues|targetX|targetY|textAnchor|textDecoration|textRendering|textLength|to|transform|u1|u2|underlinePosition|underlineThickness|unicode|unicodeBidi|unicodeRange|unitsPerEm|vAlphabetic|vHanging|vIdeographic|vMathematical|values|vectorEffect|version|vertAdvY|vertOriginX|vertOriginY|viewBox|viewTarget|visibility|widths|wordSpacing|writingMode|x|xHeight|x1|x2|xChannelSelector|xlinkActuate|xlinkArcrole|xlinkHref|xlinkRole|xlinkShow|xlinkTitle|xlinkType|xmlBase|xmlns|xmlnsXlink|xmlLang|xmlSpace|y|y1|y2|yChannelSelector|z|zoomAndPan|for|class|autofocus)|(([Dd][Aa][Tt][Aa]|[Aa][Rr][Ii][Aa]|x)-.*))$/,T0=km(function(e){return M0.test(e)||e.charCodeAt(0)===111&&e.charCodeAt(1)===110&&e.charCodeAt(2)<91});function _0(e){if(e.sheet)return e.sheet;for(var t=0;t<document.styleSheets.length;t++)if(document.styleSheets[t].ownerNode===e)return document.styleSheets[t]}function A0(e){var t=document.createElement("style");return t.setAttribute("data-emotion",e.key),e.nonce!==void 0&&t.setAttribute("nonce",e.nonce),t.appendChild(document.createTextNode("")),t.setAttribute("data-s",""),t}var I0=function(){function e(n){var r=this;this._insertTag=function(i){var o;r.tags.length===0?r.insertionPoint?o=r.insertionPoint.nextSibling:r.prepend?o=r.container.firstChild:o=r.before:o=r.tags[r.tags.length-1].nextSibling,r.container.insertBefore(i,o),r.tags.push(i)},this.isSpeedy=n.speedy===void 0?!0:n.speedy,this.tags=[],this.ctr=0,this.nonce=n.nonce,this.key=n.key,this.container=n.container,this.prepend=n.prepend,this.insertionPoint=n.insertionPoint,this.before=null}var t=e.prototype;return t.hydrate=function(r){r.forEach(this._insertTag)},t.insert=function(r){this.ctr%(this.isSpeedy?65e3:1)===0&&this._insertTag(A0(this));var i=this.tags[this.tags.length-1];if(this.isSpeedy){var o=_0(i);try{o.insertRule(r,o.cssRules.length)}catch{}}else i.appendChild(document.createTextNode(r));this.ctr++},t.flush=function(){this.tags.forEach(function(r){return r.parentNode&&r.parentNode.removeChild(r)}),this.tags=[],this.ctr=0},e}(),tt="-ms-",Pa="-moz-",me="-webkit-",Sm="comm",hc="rule",mc="decl",L0="@import",jm="@keyframes",R0="@layer",z0=Math.abs,rs=String.fromCharCode,D0=Object.assign;function F0(e,t){return Je(e,0)^45?(((t<<2^Je(e,0))<<2^Je(e,1))<<2^Je(e,2))<<2^Je(e,3):0}function Cm(e){return e.trim()}function N0(e,t){return(e=t.exec(e))?e[0]:e}function ge(e,t,n){return e.replace(t,n)}function su(e,t){return e.indexOf(t)}function Je(e,t){return e.charCodeAt(t)|0}function Xi(e,t,n){return e.slice(t,n)}function Zt(e){return e.length}function gc(e){return e.length}function jo(e,t){return t.push(e),e}function V0(e,t){return e.map(t).join("")}var is=1,Xr=1,Om=0,gt=0,De=0,qr="";function os(e,t,n,r,i,o,a){return{value:e,root:t,parent:n,type:r,props:i,children:o,line:is,column:Xr,length:a,return:""}}function li(e,t){return D0(os("",null,null,"",null,null,0),e,{length:-e.length},t)}function U0(){return De}function W0(){return De=gt>0?Je(qr,--gt):0,Xr--,De===10&&(Xr=1,is--),De}function wt(){return De=gt<Om?Je(qr,gt++):0,Xr++,De===10&&(Xr=1,is++),De}function rn(){return Je(qr,gt)}function Jo(){return gt}function ro(e,t){return Xi(qr,e,t)}function Ki(e){switch(e){case 0:case 9:case 10:case 13:case 32:return 5;case 33:case 43:case 44:case 47:case 62:case 64:case 126:case 59:case 123:case 125:return 4;case 58:return 3;case 34:case 39:case 40:case 91:return 2;case 41:case 93:return 1}return 0}function Em(e){return is=Xr=1,Om=Zt(qr=e),gt=0,[]}function Pm(e){return qr="",e}function Zo(e){return Cm(ro(gt-1,lu(e===91?e+2:e===40?e+1:e)))}function B0(e){for(;(De=rn())&&De<33;)wt();return Ki(e)>2||Ki(De)>3?"":" "}function H0(e,t){for(;--t&&wt()&&!(De<48||De>102||De>57&&De<65||De>70&&De<97););return ro(e,Jo()+(t<6&&rn()==32&&wt()==32))}function lu(e){for(;wt();)switch(De){case e:return gt;case 34:case 39:e!==34&&e!==39&&lu(De);break;case 40:e===41&&lu(e);break;case 92:wt();break}return gt}function $0(e,t){for(;wt()&&e+De!==57;)if(e+De===84&&rn()===47)break;return"/*"+ro(t,gt-1)+"*"+rs(e===47?e:wt())}function Y0(e){for(;!Ki(rn());)wt();return ro(e,gt)}function Q0(e){return Pm(Go("",null,null,null,[""],e=Em(e),0,[0],e))}function Go(e,t,n,r,i,o,a,l,s){for(var u=0,p=0,h=a,g=0,v=0,x=0,y=1,b=1,d=1,f=0,m="",w=i,k=o,M=r,E=m;b;)switch(x=f,f=wt()){case 40:if(x!=108&&Je(E,h-1)==58){su(E+=ge(Zo(f),"&","&\f"),"&\f")!=-1&&(d=-1);break}case 34:case 39:case 91:E+=Zo(f);break;case 9:case 10:case 13:case 32:E+=B0(x);break;case 92:E+=H0(Jo()-1,7);continue;case 47:switch(rn()){case 42:case 47:jo(X0($0(wt(),Jo()),t,n),s);break;default:E+="/"}break;case 123*y:l[u++]=Zt(E)*d;case 125*y:case 59:case 0:switch(f){case 0:case 125:b=0;case 59+p:d==-1&&(E=ge(E,/\f/g,"")),v>0&&Zt(E)-h&&jo(v>32?Kd(E+";",r,n,h-1):Kd(ge(E," ","")+";",r,n,h-2),s);break;case 59:E+=";";default:if(jo(M=Xd(E,t,n,u,p,i,l,m,w=[],k=[],h),o),f===123)if(p===0)Go(E,t,M,M,w,o,h,l,k);else switch(g===99&&Je(E,3)===110?100:g){case 100:case 108:case 109:case 115:Go(e,M,M,r&&jo(Xd(e,M,M,0,0,i,l,m,i,w=[],h),k),i,k,h,l,r?w:k);break;default:Go(E,M,M,M,[""],k,0,l,k)}}u=p=v=0,y=d=1,m=E="",h=a;break;case 58:h=1+Zt(E),v=x;default:if(y<1){if(f==123)--y;else if(f==125&&y++==0&&W0()==125)continue}switch(E+=rs(f),f*y){case 38:d=p>0?1:(E+="\f",-1);break;case 44:l[u++]=(Zt(E)-1)*d,d=1;break;case 64:rn()===45&&(E+=Zo(wt())),g=rn(),p=h=Zt(m=E+=Y0(Jo())),f++;break;case 45:x===45&&Zt(E)==2&&(y=0)}}return o}function Xd(e,t,n,r,i,o,a,l,s,u,p){for(var h=i-1,g=i===0?o:[""],v=gc(g),x=0,y=0,b=0;x<r;++x)for(var d=0,f=Xi(e,h+1,h=z0(y=a[x])),m=e;d<v;++d)(m=Cm(y>0?g[d]+" "+f:ge(f,/&\f/g,g[d])))&&(s[b++]=m);return os(e,t,n,i===0?hc:l,s,u,p)}function X0(e,t,n){return os(e,t,n,Sm,rs(U0()),Xi(e,2,-2),0)}function Kd(e,t,n,r){return os(e,t,n,mc,Xi(e,0,r),Xi(e,r+1,-1),r)}function Vr(e,t){for(var n="",r=gc(e),i=0;i<r;i++)n+=t(e[i],i,e,t)||"";return n}function K0(e,t,n,r){switch(e.type){case R0:if(e.children.length)break;case L0:case mc:return e.return=e.return||e.value;case Sm:return"";case jm:return e.return=e.value+"{"+Vr(e.children,r)+"}";case hc:e.value=e.props.join(",")}return Zt(n=Vr(e.children,r))?e.return=e.value+"{"+n+"}":""}function J0(e){var t=gc(e);return function(n,r,i,o){for(var a="",l=0;l<t;l++)a+=e[l](n,r,i,o)||"";return a}}function Z0(e){return function(t){t.root||(t=t.return)&&e(t)}}var G0=function(t,n,r){for(var i=0,o=0;i=o,o=rn(),i===38&&o===12&&(n[r]=1),!Ki(o);)wt();return ro(t,gt)},q0=function(t,n){var r=-1,i=44;do switch(Ki(i)){case 0:i===38&&rn()===12&&(n[r]=1),t[r]+=G0(gt-1,n,r);break;case 2:t[r]+=Zo(i);break;case 4:if(i===44){t[++r]=rn()===58?"&\f":"",n[r]=t[r].length;break}default:t[r]+=rs(i)}while(i=wt());return t},ey=function(t,n){return Pm(q0(Em(t),n))},Jd=new WeakMap,ty=function(t){if(!(t.type!=="rule"||!t.parent||t.length<1)){for(var n=t.value,r=t.parent,i=t.column===r.column&&t.line===r.line;r.type!=="rule";)if(r=r.parent,!r)return;if(!(t.props.length===1&&n.charCodeAt(0)!==58&&!Jd.get(r))&&!i){Jd.set(t,!0);for(var o=[],a=ey(n,o),l=r.props,s=0,u=0;s<a.length;s++)for(var p=0;p<l.length;p++,u++)t.props[u]=o[s]?a[s].replace(/&\f/g,l[p]):l[p]+" "+a[s]}}},ny=function(t){if(t.type==="decl"){var n=t.value;n.charCodeAt(0)===108&&n.charCodeAt(2)===98&&(t.return="",t.value="")}};function Mm(e,t){switch(F0(e,t)){case 5103:return me+"print-"+e+e;case 5737:case 4201:case 3177:case 3433:case 1641:case 4457:case 2921:case 5572:case 6356:case 5844:case 3191:case 6645:case 3005:case 6391:case 5879:case 5623:case 6135:case 4599:case 4855:case 4215:case 6389:case 5109:case 5365:case 5621:case 3829:return me+e+e;case 5349:case 4246:case 4810:case 6968:case 2756:return me+e+Pa+e+tt+e+e;case 6828:case 4268:return me+e+tt+e+e;case 6165:return me+e+tt+"flex-"+e+e;case 5187:return me+e+ge(e,/(\w+).+(:[^]+)/,me+"box-$1$2"+tt+"flex-$1$2")+e;case 5443:return me+e+tt+"flex-item-"+ge(e,/flex-|-self/,"")+e;case 4675:return me+e+tt+"flex-line-pack"+ge(e,/align-content|flex-|-self/,"")+e;case 5548:return me+e+tt+ge(e,"shrink","negative")+e;case 5292:return me+e+tt+ge(e,"basis","preferred-size")+e;case 6060:return me+"box-"+ge(e,"-grow","")+me+e+tt+ge(e,"grow","positive")+e;case 4554:return me+ge(e,/([^-])(transform)/g,"$1"+me+"$2")+e;case 6187:return ge(ge(ge(e,/(zoom-|grab)/,me+"$1"),/(image-set)/,me+"$1"),e,"")+e;case 5495:case 3959:return ge(e,/(image-set\([^]*)/,me+"$1$`$1");case 4968:return ge(ge(e,/(.+:)(flex-)?(.*)/,me+"box-pack:$3"+tt+"flex-pack:$3"),/s.+-b[^;]+/,"justify")+me+e+e;case 4095:case 3583:case 4068:case 2532:return ge(e,/(.+)-inline(.+)/,me+"$1$2")+e;case 8116:case 7059:case 5753:case 5535:case 5445:case 5701:case 4933:case 4677:case 5533:case 5789:case 5021:case 4765:if(Zt(e)-1-t>6)switch(Je(e,t+1)){case 109:if(Je(e,t+4)!==45)break;case 102:return ge(e,/(.+:)(.+)-([^]+)/,"$1"+me+"$2-$3$1"+Pa+(Je(e,t+3)==108?"$3":"$2-$3"))+e;case 115:return~su(e,"stretch")?Mm(ge(e,"stretch","fill-available"),t)+e:e}break;case 4949:if(Je(e,t+1)!==115)break;case 6444:switch(Je(e,Zt(e)-3-(~su(e,"!important")&&10))){case 107:return ge(e,":",":"+me)+e;case 101:return ge(e,/(.+:)([^;!]+)(;|!.+)?/,"$1"+me+(Je(e,14)===45?"inline-":"")+"box$3$1"+me+"$2$3$1"+tt+"$2box$3")+e}break;case 5936:switch(Je(e,t+11)){case 114:return me+e+tt+ge(e,/[svh]\w+-[tblr]{2}/,"tb")+e;case 108:return me+e+tt+ge(e,/[svh]\w+-[tblr]{2}/,"tb-rl")+e;case 45:return me+e+tt+ge(e,/[svh]\w+-[tblr]{2}/,"lr")+e}return me+e+tt+e+e}return e}var ry=function(t,n,r,i){if(t.length>-1&&!t.return)switch(t.type){case mc:t.return=Mm(t.value,t.length);break;case jm:return Vr([li(t,{value:ge(t.value,"@","@"+me)})],i);case hc:if(t.length)return V0(t.props,function(o){switch(N0(o,/(::plac\w+|:read-\w+)/)){case":read-only":case":read-write":return Vr([li(t,{props:[ge(o,/:(read-\w+)/,":"+Pa+"$1")]})],i);case"::placeholder":return Vr([li(t,{props:[ge(o,/:(plac\w+)/,":"+me+"input-$1")]}),li(t,{props:[ge(o,/:(plac\w+)/,":"+Pa+"$1")]}),li(t,{props:[ge(o,/:(plac\w+)/,tt+"input-$1")]})],i)}return""})}},iy=[ry],oy=function(t){var n=t.key;if(n==="css"){var r=document.querySelectorAll("style[data-emotion]:not([data-s])");Array.prototype.forEach.call(r,function(y){var b=y.getAttribute("data-emotion");b.indexOf(" ")!==-1&&(document.head.appendChild(y),y.setAttribute("data-s",""))})}var i=t.stylisPlugins||iy,o={},a,l=[];a=t.container||document.head,Array.prototype.forEach.call(document.querySelectorAll('style[data-emotion^="'+n+' "]'),function(y){for(var b=y.getAttribute("data-emotion").split(" "),d=1;d<b.length;d++)o[b[d]]=!0;l.push(y)});var s,u=[ty,ny];{var p,h=[K0,Z0(function(y){p.insert(y)})],g=J0(u.concat(i,h)),v=function(b){return Vr(Q0(b),g)};s=function(b,d,f,m){p=f,v(b?b+"{"+d.styles+"}":d.styles),m&&(x.inserted[d.name]=!0)}}var x={key:n,sheet:new I0({key:n,container:a,nonce:t.nonce,speedy:t.speedy,prepend:t.prepend,insertionPoint:t.insertionPoint}),nonce:t.nonce,inserted:o,registered:{},insert:s};return x.sheet.hydrate(l),x},Tm={exports:{}},ye={};/** @license React v16.13.1
 * react-is.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */var Ye=typeof Symbol=="function"&&Symbol.for,xc=Ye?Symbol.for("react.element"):60103,vc=Ye?Symbol.for("react.portal"):60106,as=Ye?Symbol.for("react.fragment"):60107,ss=Ye?Symbol.for("react.strict_mode"):60108,ls=Ye?Symbol.for("react.profiler"):60114,us=Ye?Symbol.for("react.provider"):60109,cs=Ye?Symbol.for("react.context"):60110,yc=Ye?Symbol.for("react.async_mode"):60111,ds=Ye?Symbol.for("react.concurrent_mode"):60111,fs=Ye?Symbol.for("react.forward_ref"):60112,ps=Ye?Symbol.for("react.suspense"):60113,ay=Ye?Symbol.for("react.suspense_list"):60120,hs=Ye?Symbol.for("react.memo"):60115,ms=Ye?Symbol.for("react.lazy"):60116,sy=Ye?Symbol.for("react.block"):60121,ly=Ye?Symbol.for("react.fundamental"):60117,uy=Ye?Symbol.for("react.responder"):60118,cy=Ye?Symbol.for("react.scope"):60119;function Ct(e){if(typeof e=="object"&&e!==null){var t=e.$$typeof;switch(t){case xc:switch(e=e.type,e){case yc:case ds:case as:case ls:case ss:case ps:return e;default:switch(e=e&&e.$$typeof,e){case cs:case fs:case ms:case hs:case us:return e;default:return t}}case vc:return t}}}function _m(e){return Ct(e)===ds}ye.AsyncMode=yc;ye.ConcurrentMode=ds;ye.ContextConsumer=cs;ye.ContextProvider=us;ye.Element=xc;ye.ForwardRef=fs;ye.Fragment=as;ye.Lazy=ms;ye.Memo=hs;ye.Portal=vc;ye.Profiler=ls;ye.StrictMode=ss;ye.Suspense=ps;ye.isAsyncMode=function(e){return _m(e)||Ct(e)===yc};ye.isConcurrentMode=_m;ye.isContextConsumer=function(e){return Ct(e)===cs};ye.isContextProvider=function(e){return Ct(e)===us};ye.isElement=function(e){return typeof e=="object"&&e!==null&&e.$$typeof===xc};ye.isForwardRef=function(e){return Ct(e)===fs};ye.isFragment=function(e){return Ct(e)===as};ye.isLazy=function(e){return Ct(e)===ms};ye.isMemo=function(e){return Ct(e)===hs};ye.isPortal=function(e){return Ct(e)===vc};ye.isProfiler=function(e){return Ct(e)===ls};ye.isStrictMode=function(e){return Ct(e)===ss};ye.isSuspense=function(e){return Ct(e)===ps};ye.isValidElementType=function(e){return typeof e=="string"||typeof e=="function"||e===as||e===ds||e===ls||e===ss||e===ps||e===ay||typeof e=="object"&&e!==null&&(e.$$typeof===ms||e.$$typeof===hs||e.$$typeof===us||e.$$typeof===cs||e.$$typeof===fs||e.$$typeof===ly||e.$$typeof===uy||e.$$typeof===cy||e.$$typeof===sy)};ye.typeOf=Ct;Tm.exports=ye;var dy=Tm.exports,Am=dy,fy={$$typeof:!0,render:!0,defaultProps:!0,displayName:!0,propTypes:!0},py={$$typeof:!0,compare:!0,defaultProps:!0,displayName:!0,propTypes:!0,type:!0},Im={};Im[Am.ForwardRef]=fy;Im[Am.Memo]=py;var hy=!0;function Lm(e,t,n){var r="";return n.split(" ").forEach(function(i){e[i]!==void 0?t.push(e[i]+";"):r+=i+" "}),r}var wc=function(t,n,r){var i=t.key+"-"+n.name;(r===!1||hy===!1)&&t.registered[i]===void 0&&(t.registered[i]=n.styles)},Rm=function(t,n,r){wc(t,n,r);var i=t.key+"-"+n.name;if(t.inserted[n.name]===void 0){var o=n;do t.insert(n===o?"."+i:"",o,t.sheet,!0),o=o.next;while(o!==void 0)}};function my(e){for(var t=0,n,r=0,i=e.length;i>=4;++r,i-=4)n=e.charCodeAt(r)&255|(e.charCodeAt(++r)&255)<<8|(e.charCodeAt(++r)&255)<<16|(e.charCodeAt(++r)&255)<<24,n=(n&65535)*1540483477+((n>>>16)*59797<<16),n^=n>>>24,t=(n&65535)*1540483477+((n>>>16)*59797<<16)^(t&65535)*1540483477+((t>>>16)*59797<<16);switch(i){case 3:t^=(e.charCodeAt(r+2)&255)<<16;case 2:t^=(e.charCodeAt(r+1)&255)<<8;case 1:t^=e.charCodeAt(r)&255,t=(t&65535)*1540483477+((t>>>16)*59797<<16)}return t^=t>>>13,t=(t&65535)*1540483477+((t>>>16)*59797<<16),((t^t>>>15)>>>0).toString(36)}var gy={animationIterationCount:1,aspectRatio:1,borderImageOutset:1,borderImageSlice:1,borderImageWidth:1,boxFlex:1,boxFlexGroup:1,boxOrdinalGroup:1,columnCount:1,columns:1,flex:1,flexGrow:1,flexPositive:1,flexShrink:1,flexNegative:1,flexOrder:1,gridRow:1,gridRowEnd:1,gridRowSpan:1,gridRowStart:1,gridColumn:1,gridColumnEnd:1,gridColumnSpan:1,gridColumnStart:1,msGridRow:1,msGridRowSpan:1,msGridColumn:1,msGridColumnSpan:1,fontWeight:1,lineHeight:1,opacity:1,order:1,orphans:1,tabSize:1,widows:1,zIndex:1,zoom:1,WebkitLineClamp:1,fillOpacity:1,floodOpacity:1,stopOpacity:1,strokeDasharray:1,strokeDashoffset:1,strokeMiterlimit:1,strokeOpacity:1,strokeWidth:1},xy=/[A-Z]|^ms/g,vy=/_EMO_([^_]+?)_([^]*?)_EMO_/g,zm=function(t){return t.charCodeAt(1)===45},Zd=function(t){return t!=null&&typeof t!="boolean"},Qs=km(function(e){return zm(e)?e:e.replace(xy,"-$&").toLowerCase()}),Gd=function(t,n){switch(t){case"animation":case"animationName":if(typeof n=="string")return n.replace(vy,function(r,i,o){return Gt={name:i,styles:o,next:Gt},i})}return gy[t]!==1&&!zm(t)&&typeof n=="number"&&n!==0?n+"px":n};function Ji(e,t,n){if(n==null)return"";if(n.__emotion_styles!==void 0)return n;switch(typeof n){case"boolean":return"";case"object":{if(n.anim===1)return Gt={name:n.name,styles:n.styles,next:Gt},n.name;if(n.styles!==void 0){var r=n.next;if(r!==void 0)for(;r!==void 0;)Gt={name:r.name,styles:r.styles,next:Gt},r=r.next;var i=n.styles+";";return i}return yy(e,t,n)}case"function":{if(e!==void 0){var o=Gt,a=n(e);return Gt=o,Ji(e,t,a)}break}}if(t==null)return n;var l=t[n];return l!==void 0?l:n}function yy(e,t,n){var r="";if(Array.isArray(n))for(var i=0;i<n.length;i++)r+=Ji(e,t,n[i])+";";else for(var o in n){var a=n[o];if(typeof a!="object")t!=null&&t[a]!==void 0?r+=o+"{"+t[a]+"}":Zd(a)&&(r+=Qs(o)+":"+Gd(o,a)+";");else if(Array.isArray(a)&&typeof a[0]=="string"&&(t==null||t[a[0]]===void 0))for(var l=0;l<a.length;l++)Zd(a[l])&&(r+=Qs(o)+":"+Gd(o,a[l])+";");else{var s=Ji(e,t,a);switch(o){case"animation":case"animationName":{r+=Qs(o)+":"+s+";";break}default:r+=o+"{"+s+"}"}}}return r}var qd=/label:\s*([^\s;\n{]+)\s*(;|$)/g,Gt,bc=function(t,n,r){if(t.length===1&&typeof t[0]=="object"&&t[0]!==null&&t[0].styles!==void 0)return t[0];var i=!0,o="";Gt=void 0;var a=t[0];a==null||a.raw===void 0?(i=!1,o+=Ji(r,n,a)):o+=a[0];for(var l=1;l<t.length;l++)o+=Ji(r,n,t[l]),i&&(o+=a[l]);qd.lastIndex=0;for(var s="",u;(u=qd.exec(o))!==null;)s+="-"+u[1];var p=my(o)+s;return{name:p,styles:o,next:Gt}},wy=function(t){return t()},by=Uc.useInsertionEffect?Uc.useInsertionEffect:!1,Dm=by||wy,kc={}.hasOwnProperty,Fm=R.createContext(typeof HTMLElement<"u"?oy({key:"css"}):null);Fm.Provider;var Nm=function(t){return R.forwardRef(function(n,r){var i=R.useContext(Fm);return t(n,i,r)})},Vm=R.createContext({}),uu="__EMOTION_TYPE_PLEASE_DO_NOT_USE__",ky=function(t,n){var r={};for(var i in n)kc.call(n,i)&&(r[i]=n[i]);return r[uu]=t,r},Sy=function(t){var n=t.cache,r=t.serialized,i=t.isStringTag;return wc(n,r,i),Dm(function(){return Rm(n,r,i)}),null},jy=Nm(function(e,t,n){var r=e.css;typeof r=="string"&&t.registered[r]!==void 0&&(r=t.registered[r]);var i=e[uu],o=[r],a="";typeof e.className=="string"?a=Lm(t.registered,o,e.className):e.className!=null&&(a=e.className+" ");var l=bc(o,void 0,R.useContext(Vm));a+=t.key+"-"+l.name;var s={};for(var u in e)kc.call(e,u)&&u!=="css"&&u!==uu&&(s[u]=e[u]);return s.ref=n,s.className=a,R.createElement(R.Fragment,null,R.createElement(Sy,{cache:t,serialized:l,isStringTag:typeof i=="string"}),R.createElement(i,s))}),Cy=jy,J=function(t,n){var r=arguments;if(n==null||!kc.call(n,"css"))return R.createElement.apply(void 0,r);var i=r.length,o=new Array(i);o[0]=Cy,o[1]=ky(t,n);for(var a=2;a<i;a++)o[a]=r[a];return R.createElement.apply(null,o)};function or(){for(var e=arguments.length,t=new Array(e),n=0;n<e;n++)t[n]=arguments[n];return bc(t)}var Oy=function(){var t=or.apply(void 0,arguments),n="animation-"+t.name;return{name:n,styles:"@keyframes "+n+"{"+t.styles+"}",anim:1,toString:function(){return"_EMO_"+this.name+"_"+this.styles+"_EMO_"}}},Ey=T0,Py=function(t){return t!=="theme"},ef=function(t){return typeof t=="string"&&t.charCodeAt(0)>96?Ey:Py},tf=function(t,n,r){var i;if(n){var o=n.shouldForwardProp;i=t.__emotion_forwardProp&&o?function(a){return t.__emotion_forwardProp(a)&&o(a)}:o}return typeof i!="function"&&r&&(i=t.__emotion_forwardProp),i},My=function(t){var n=t.cache,r=t.serialized,i=t.isStringTag;return wc(n,r,i),Dm(function(){return Rm(n,r,i)}),null},Ty=function e(t,n){var r=t.__emotion_real===t,i=r&&t.__emotion_base||t,o,a;n!==void 0&&(o=n.label,a=n.target);var l=tf(t,n,r),s=l||ef(i),u=!s("as");return function(){var p=arguments,h=r&&t.__emotion_styles!==void 0?t.__emotion_styles.slice(0):[];if(o!==void 0&&h.push("label:"+o+";"),p[0]==null||p[0].raw===void 0)h.push.apply(h,p);else{h.push(p[0][0]);for(var g=p.length,v=1;v<g;v++)h.push(p[v],p[0][v])}var x=Nm(function(y,b,d){var f=u&&y.as||i,m="",w=[],k=y;if(y.theme==null){k={};for(var M in y)k[M]=y[M];k.theme=R.useContext(Vm)}typeof y.className=="string"?m=Lm(b.registered,w,y.className):y.className!=null&&(m=y.className+" ");var E=bc(h.concat(w),b.registered,k);m+=b.key+"-"+E.name,a!==void 0&&(m+=" "+a);var j=u&&l===void 0?ef(f):s,C={};for(var T in y)u&&T==="as"||j(T)&&(C[T]=y[T]);return C.className=m,C.ref=d,R.createElement(R.Fragment,null,R.createElement(My,{cache:b,serialized:E,isStringTag:typeof f=="string"}),R.createElement(f,C))});return x.displayName=o!==void 0?o:"Styled("+(typeof i=="string"?i:i.displayName||i.name||"Component")+")",x.defaultProps=t.defaultProps,x.__emotion_real=x,x.__emotion_base=i,x.__emotion_styles=h,x.__emotion_forwardProp=l,Object.defineProperty(x,"toString",{value:function(){return"."+a}}),x.withComponent=function(y,b){return e(y,G({},n,b,{shouldForwardProp:tf(x,b,!0)})).apply(void 0,h)},x}},_y=["a","abbr","address","area","article","aside","audio","b","base","bdi","bdo","big","blockquote","body","br","button","canvas","caption","cite","code","col","colgroup","data","datalist","dd","del","details","dfn","dialog","div","dl","dt","em","embed","fieldset","figcaption","figure","footer","form","h1","h2","h3","h4","h5","h6","head","header","hgroup","hr","html","i","iframe","img","input","ins","kbd","keygen","label","legend","li","link","main","map","mark","marquee","menu","menuitem","meta","meter","nav","noscript","object","ol","optgroup","option","output","p","param","picture","pre","progress","q","rp","rt","ruby","s","samp","script","section","select","small","source","span","strong","style","sub","summary","sup","table","tbody","td","textarea","tfoot","th","thead","time","title","tr","track","u","ul","var","video","wbr","circle","clipPath","defs","ellipse","foreignObject","g","image","line","linearGradient","mask","path","pattern","polygon","polyline","radialGradient","rect","stop","svg","text","tspan"],P=Ty.bind();_y.forEach(function(e){P[e]=P(e)});const Ay=P.section`
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
`,Iy=P.h2`
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
`,Ly=P.div`
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
`,Ry=P.img`
  border-radius: 18px;
`,zy=P.div`
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
`,Dy=P.h3`
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
`,Fy=P.p`
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
`,Ny=P.ul`
  padding-left: 23px;
`,Vy=P.li`
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
`,Uy=P.ul`
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
`,Wy=P.a`
  position: relative;
  display: flex;
  justify-content: center;
  align-items: center;
  color: var(--primary-bluedark);
  font-family: Montserrat;
  font-size: 15px;
  font-style: normal;
  font-weight: 600;
  line-height: 22px; /* 200% */

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
    font-size: 18px;

    line-height: 24px;
  }

  @media screen and (min-width: 1440px) {
    line-height: 22px;
  }
  @media screen and (min-width: 1920px) {
    font-size: 20px;
    line-height: 28px;
  }
`,By=P.svg`
  margin-left: 10px;
`,Hy=P.div`
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
`,$y="/healthy-management-project/assets/olga_picture1x-6T0pnRyH.webp",Yy="/healthy-management-project/assets/olga_picture2x-4JmA7wGC.webp",Qy="/healthy-management-project/assets/olga_picture1x-ohcXIDw6.jpg",Xy="/healthy-management-project/assets/mob_olga_picture1x-PQXysebb.jpg",Ky="/healthy-management-project/assets/mob_olga_picture1x-1fPtYEvT.webp",Jy="/healthy-management-project/assets/mob_olga_picture2x-VJcRD770.webp",Zy="/healthy-management-project/assets/olga_picture@1x-V6xBvkB4.jpg",Gy="/healthy-management-project/assets/olga_picture@1x-UUwfpH5W.webp",qy="/healthy-management-project/assets/olga_picture@2x-MWfGyCra.webp",e1="/healthy-management-project/assets/olga_picture@1x-rIS7rOGv.jpg",t1="/healthy-management-project/assets/olga_picture@1x-aIsvHdrL.webp",n1="/healthy-management-project/assets/olga_picture@2x-3sK8O0o2.webp",r1=[{query:"(max-width: 767px)",imgData:{srcSet:`${Jy} 2x, ${Ky} 1x`,sizes:"(max-width: 767px) 100vw",src:Xy}},{query:"(min-width: 768px) and (max-width: 1439px)",imgData:{srcSet:`${qy} 2x, ${Gy} 1x`,type:"image/webp",sizes:"(min-width: 768px) 100vw (max-width: 1439px) 100vw",src:Zy}},{query:"(min-width: 1440px) and (max-width: 1919px)",imgData:{srcSet:`${n1} 2x, ${t1} 1x`,type:"image/webp",sizes:"(min-width: 1440px) 100vw (max-width: 1919px) 100vw",src:e1}},{query:"(min-width: 1920px)",imgData:{srcSet:`${Yy} 2x, ${$y} 1x`,type:"image/webp",sizes:"(min-width: 1920px) 100vw",src:Qy}}],i1=[{name:"Instagram",href:"https://www.instagram.com/olga_healthm/"},{name:"Facebook",href:"https://www.facebook.com/olga.polishchuk.14"},{name:"LinkedIn",href:"https://www.linkedin.com/in/olga-polishchuk-83362140/"}],o1=["MBA Healthcare management","Викладачка медичного маркетингу Бізнес-школа УКУ (LvBS)",`Експертка в "Центр Розвитку Громадського Здоров'я УКУ"`,"Бізнес-консультантка, стратег з медичного маркетингу",'Керівниця проєкту "Стетоскоп" - телеграм канал про медичний менеджмент та маркетингу',"Більше 18 років досвіду в маркетингу та комунікаціях, з них більше 10 років досвіду в медичному та фармацевтичному бізнесі на керівних посадах","Використання принципів доказової медицини"],te="/healthy-management-project/assets/sprite-F2nHWZk-.svg",a1=()=>c.jsx(By,{width:"24",height:"24",children:c.jsx("use",{href:`${te}#icon-arrow-up-right`})}),s1=()=>c.jsx(Ay,{className:"container",children:c.jsxs("div",{children:[c.jsx(Iy,{children:"Про мене"}),c.jsxs(Ly,{children:[c.jsx(Hy,{children:r1.map((e,t)=>c.jsx(K,{query:e.query,children:c.jsx(Ry,{alt:"Ольга Поліщук",...e.imgData})},t))}),c.jsxs(zy,{children:[c.jsx(Dy,{children:"Ольга Поліщук"}),c.jsx(Fy,{children:"CEO and Founder студії стратегічного розвитку"}),c.jsx(Ny,{children:o1.map((e,t)=>c.jsx(Vy,{children:e},t))}),c.jsx(Uy,{children:i1.map((e,t)=>c.jsx("li",{children:c.jsxs(Wy,{href:e.href,target:"_blank",rel:"noopener noreferrer",children:[e.name,c.jsx(a1,{})]})},t))})]})]})]})}),l1=P.section`
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
`,u1=P.h2`
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
`,c1=P.div`
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
`,d1=P.p`
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
`,f1=P.p`
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
`,nf=P.div`
  display: flex;
  gap: 16px;
  align-items: center;
  margin-bottom: 16px;
`,p1=P.div`
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
`,h1=P.h4`
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
`,m1=P.div`
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
`,g1=P.h4`
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
`,x1=P.p`
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
`,v1=P.svg`
  border-radius: 100px;
  width: 32px;
  height: 32px;
  padding: 3px;

  fill: ${e=>e.fill||"currentColor"};
  background: ${e=>e.background||"transparent"};
`;var Um={exports:{}},y1="SECRET_DO_NOT_PASS_THIS_OR_YOU_WILL_BE_FIRED",w1=y1,b1=w1;function Wm(){}function Bm(){}Bm.resetWarningCache=Wm;var k1=function(){function e(r,i,o,a,l,s){if(s!==b1){var u=new Error("Calling PropTypes validators directly is not supported by the `prop-types` package. Use PropTypes.checkPropTypes() to call them. Read more at http://fb.me/use-check-prop-types");throw u.name="Invariant Violation",u}}e.isRequired=e;function t(){return e}var n={array:e,bigint:e,bool:e,func:e,number:e,object:e,string:e,symbol:e,any:e,arrayOf:t,element:e,elementType:e,instanceOf:t,node:e,objectOf:t,oneOf:t,oneOfType:t,shape:t,exact:t,checkPropTypes:Bm,resetWarningCache:Wm};return n.PropTypes=n,n};Um.exports=k1();var S1=Um.exports;const on=Kr(S1),cu=({fill:e,background:t})=>c.jsx(v1,{fill:e,background:t,children:c.jsx("use",{href:`${te}#icon-star`})});cu.propTypes={fill:on.string,background:on.string};const j1=()=>c.jsx(l1,{id:"aboutUs",className:"container",children:c.jsxs("div",{children:[c.jsx(u1,{children:"Про студію"}),c.jsxs(c1,{children:[c.jsx("div",{children:c.jsx(d1,{children:"Студія стратегічного розвитку медичних брендів «Healthy management» надає послуги медичного менеджменту, медичного маркетингу, консалтингу бізнес-процесів та створення стратегій здоров’я для підприємств та бізнесу. Ми співпрацюємо з медичними закладами, лікарями, власниками, керівниками та створюємо спільні стратегії та дії для ефективного просування та розвитку проєктів, використовуючи комплексний підхід"})}),c.jsxs(m1,{children:[c.jsxs(nf,{children:[c.jsx(cu,{fill:"var(--background-white)",background:"rgba(244, 244, 246, 0.2)"}),c.jsx(g1,{children:"Наша місія"})]}),c.jsx(x1,{children:"Будуємо ефективні стратегії по управлінню здоров’ям та створюємо продуктивні дії для популяризації здорового менеджменту"})]}),c.jsxs(p1,{children:[c.jsxs(nf,{children:[c.jsx(cu,{fill:"var(--primary-bluedark)",background:"rgba(27, 54, 65, 0.2)"}),c.jsx(h1,{children:"Наші цінності"})]}),c.jsx(f1,{children:"Повага, довіра, партнерство та експертність. Будуємо нову культуру управління здоровим менеджментом у медичній галузі"})]})]})]})}),C1=P.section`
  padding-top: 40px;
  padding-bottom: 40px;

  @media screen and (min-width: 1920px) {
    padding-top: 80px;
    padding-bottom: 80px;
  }
`,O1=P.div`
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
`,E1=P.h2`
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
`,P1=P.ul`
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
`,M1=P.li`
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
`,T1=[{id:1,tool:"Матриця стейкхолдерів"},{id:2,tool:"SWOT аналіз"},{id:3,tool:"Bussines model canvas"},{id:4,tool:"Value proposition canvas"},{id:5,tool:"Customer journey map"}],_1=()=>c.jsx(C1,{className:"container",children:c.jsxs(O1,{children:[c.jsxs(E1,{children:["Бізнес ",c.jsx("span",{children:"інструменти"}),", які використувуємо в партнерстві"]}),c.jsx(P1,{children:T1.map(e=>c.jsx(M1,{children:e.tool},e.id))})]})}),qo="/healthy-management-project/assets/icon-footer-MBx-ujYN.svg",A1=P.div`
  /* padding: 40px 0; */
  background-color: var(--background-bluedark);

  @media screen and (min-width: 768px) {
  }

  @media screen and (min-width: 1440px) {
  }

  @media screen and (min-width: 1920px) {
  }
`,I1=P.div`
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
`,rf=P.a`
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
`,of=P.div`
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
`,Kt=P.a`
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
`,L1=P.div`
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
`,R1=P.div`
  display: flex;
  align-items: flex-end;
  gap: 16px;

  /* @media screen and (min-width: 768px) {
  }

  @media screen and (min-width: 1440px) {
  } */

  /* @media screen and (min-width: 1920px) {
  } */
`,z1=P.a`
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
`,D1=P.div`
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
`,af=P.a`
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
`,F1=P.div`
  display: flex;
  padding: 16px 24px;

  justify-content: center;
  align-items: center;
  border-top: 1px solid var(--system-default-20);
  background: var(--background-bluedark);
`,N1=P.p`
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
`,V1=P.div`
  position: fixed;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  background-color: rgba(6, 33, 54, 0.4);
  overflow: hidden;
  z-index: 1100;
`,U1=P.div`
  background-color: white;
  padding: 40px 24px 52px 24px;
  border-radius: 16px;

  @media screen and (min-width: 768px) {
    padding: 40px 40px;
  }

  @media screen and (min-width: 1440px) {
    padding: 40px 80px;
    position: fixed;
    width: 1360px;
    border-radius: 24px;
    top: 50%;
    left: 50%;
    transform: translate(-50%, -50%);
    z-index: 10000;
  }

  @media screen and (min-width: 1920px) {
    padding: 80px;
  }
`,W1=P.div`
  height: 32px;
  display: flex;
  align-items: center;
  justify-content: space-between;
  margin-bottom: 24px;

  @media screen and (min-width: 1920px) {
    margin-bottom: 40px;
  }
`,kn=P.span`
  display: flex;
  align-items: center;

  width: 16px;
  height: 16px;
  border-radius: 2px;
  background-color: currentColor;

  @media screen and (min-width: 1440px) {
    background-color: none;
  }
`,Sn=P.svg`
  width: 15px;
  height: 13px;
  fill: var(--typography-white);

  @media screen and (min-width: 1440px) {
    fill: var(--typography-bluedark);
  }
`,B1=P.svg`
  width: 24px;
  height: 24px;
  cursor: pointer;
  stroke: #062136;
`,H1=P.h2`
  font-size: 16px;
  font-weight: 600;
  line-height: 24px;
  color: var(--typography-bluedark);

  @media screen and (min-width: 768px) {
    font-size: 20px;
    line-height: 28px;
  }

  @media screen and (min-width: 1920px) {
    font-size: 24px;
    line-height: 32px;
  }
`,$1=P.ul`
  display: flex;
  flex-direction: column;
  gap: 16px;

  @media screen and (min-width: 768px) {
    flex-direction: row;
    flex-wrap: wrap;

    margin-bottom: 0px;
  }

  @media screen and (min-width: 1440px) {
    flex-direction: row;
    flex-wrap: wrap;
    gap: 24px;

    margin-bottom: 0px;
  }
`,jn=P.li`
  @media screen and (min-width: 768px) {
    width: 336px;
  }

  @media screen and (min-width: 1440px) {
    width: 282px;
    padding: 24px;
    gap: 16px;

    border-radius: 16px;
    background: var(--background-bluedark);
    box-shadow: 0px 0px 8px 0px rgba(27, 54, 65, 0.08);
  }
`,Cn=P.h3`
  font-size: 14px;
  font-weight: 600;
  line-height: 20px;

  color: var(--typography-bluedark);

  a {
    color: inherit;
    display: flex;
    justify-content: center;
    align-items: center;
    column-gap: 8px;
  }

  @media screen and (min-width: 1440px) {
    display: flex;

    gap: 8px;

    font-size: 15px;
    line-height: 18px;

    color: var(--typography-white);

    a {
      text-decoration: none;

      display: flex;
      align-items: center;
      gap: 8px;
    }
  }

  @media screen and (min-width: 1920px) {
    font-size: 16px;
    line-height: 24px;
  }
`,On=P.p`
  font-size: 12px;
  font-weight: 400;
  line-height: 16px;

  color: var(--typography-bluedark);

  @media screen and (min-width: 1440px) {
    display: flex;
    justify-content: center;

    font-size: 14px;
    font-weight: 500;
    line-height: 20px;
    color: var(--typography-white);
  }
`,En=P.div`
  display: flex;
  flex-direction: row;
  gap: 16px;

  @media screen and (min-width: 1440px) {
    flex-direction: column;
    justify-content: center;
  }
`,Pn=P.div`
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  justify-content: center;

  @media screen and (min-width: 1440px) {
    align-items: center;
    gap: 4px;
  }

  @media screen and (min-width: 1920px) {
    gap: 8px;
  }
`,Mn=P.div`
  border-radius: 8px;
  overflow: hidden;
`;P.img`
  border-radius: 8px;

  &:hover {
    transform: scale(1.1);
    border-radius: 8px;
  }
`;const sf="/healthy-management-project/assets/Jilia_Kopytko-mYhzlt_-.webp",Y1="/healthy-management-project/assets/Jilia_Kopytko@2x-gruKrAtD.jpg",Q1="data:image/webp;base64,UklGRloHAABXRUJQVlA4IE4HAAAwIgCdASpGAEYAPikQh0KhoQnsr3gMAUJYwDF/DmMNJor7+T3jyo/M65U/4PSj8wb9N+mP5jvKL/Zn3ef5z1AP106wn9u/Ye/bP00vZf/cz9t7Cl+M3nD4cvO3trul2oR8f+5f6H8ufXLvt2qv858pPJhAD/NuFr67/5f1TeZP+N8V3yT2APzz/u/Ubz1vR//b9wf+a/2n/o+tV7GfQY/cBA//SiCrMXA+0MgqUUaIcsx1zQ7pwil/DXeib88+9l6AaaFg0SmY0KsGqtPGtjDajGpL2huqzQQOJPZPuuql/JJKHYhIBm2YcG6vL5hP4+uOtenpzTZm5I86Cqdq/PQ5bsklys1SMQJQJv6vvtQ0nsCd+BN78GSKQUAA/v/+F922HBjT7A3h76S67YSOZQH+QXR+6XbPsWsGR7fBiurrYSvP8I2DSmakMOmBNDiaO2LWtWXACNyiGE5oWKBCB8l2Qdfy0aoc5KUcBuZoBTY67Eha1+p9sTKH7IOXxaEERHjIMs25D46gJKLRa224wt6UR3PIo7b8Npf+L7LmJOepdCCNPEZ7p+mOh+cvZNfCAJKhrAt4kk9i8ZRnWo2it7F7hvzll9kzff2cKxJSskaCmdSEL4H41El6YAAiFUR8Ix6sJcAlsIhRPSfnpLtp3qpJAlI6dLoUjbk+JTaky0xXR2iUH7Q7JRivqIgnpPVBCPPB69D23OMcfA6WRq6piunhbllT+pymW/Eg5WyK2gc0yTjFthyu0JH0cz22oJfInRDUyQSSRoKWpbLncIxy5fSGpJTyD1spZXccq3B5dvxc4y3kaTETtG39dPxF486zu6NvhIVMdljzDywEytP22xjGaGKXvyEyBbfD/9a96e3PlU4792OeV/VWBWE+X+WTxYFM8r4ECi2se+bLfvxdF9Iz2pVpo4+TVdhGm3YRBooH5Oty1s5pux2cfUFnqqkGkxOAvLV1ea8j/DyyCrIRCXQoJF8K3oz59FxmTNieTVVf5i9+VfAQIVsqJFOL5S0iRzPaKfw03LcSF5nq0TJFdJLyinEe3jjf8UgXg0Pl8HG5bmUzPlrUcavXsoAPGbQkxydk/jrzCeTa5c33oC9CUsJm/rzTJzebDMq80FtWwn+t+w8pdqyYxDD3NLPYVaJxsXkIRd9ISA84vmgIGU+o3FETJh1bZ/4LtQCXb4nr7iLJ/HSTQ01ovtIL0mP5XMc7N3Ni+Pt/5JGWasdFDcvzgJpK0O/P6BTDlbwX0DJnFZgIrFeVUWBV8g10u78uYyQzYyEfjdzfCWa+asNgavrEOBSl205DM6ONL9xSrtRoORqSC55taUnuRfbkMJ6wZOf3L9TuN8NaJhLDCVoqlNCxEZq89aSTNIckZutlD21KHIlQmGa1Ew5AENDZax9eDs/SMFfk71Vb+nlOdfcafxrmQhJMDfD3lgi7tyqY9ui+BhqnVAfNcT/wU1TQj9kB/eg9DGCAeCN5XrND5KipXWmY7txm8wNxUUNQiFEqjdIbcSIiGT71pGpuIMX8Y66ti87xEZKO2OgL8EZWtixxdSURnm34dkCYkWM25zMjP7nh2MHfth2O8SDRxr9ubhD08kRZa3WVZiQebrL08a12nL0IxYBe4+8jAEaBvhU5MfXJr9EKe/bhdORc2mr57PlP7fisjzP6tiVZEuWnkvaO72IkeAtJ5rqivHjgI95rA78m8611BF0KEUnIT0hrFdfTX+NQYdtctcGTMlw+jt36ebc8LleIz9FZrdWrAb2dq/sQQaymNeFA69a8R/+atDGrT2IGhrkOuYtfw15brgYFvAf9lgWE54+ahD+LIfNVrcf3cqmSuXDgvFu2vSeT6zmho6g6PcP0armMJyIyT40UIqnf+HH9b2fjHEpusfBs4JYKDl673rYhQTj8YW1eSiNF/dZJqr6+qUfZyakdpAimfCV/BIQP7C8FdmTn9cSytzJXzDePjXPHY1VcoqzgOR6rrspVXE4xNA5Z20LEC4Rd/cSAcg3pWqKFqZA+rRAO6ky7QyBoU5KPcOjG/D5nJ1EjwP92fkhv0pwpVhhK7g760jW/fx1gvbdCJMuczUrNlCzH6v32Ahh7/Md0UhFoh1lCkCpV3nT6H4+0pFWVZV2zIDeTmCA5kf/Uff62PDXp3sr0urMzthdWBvfU87CE/um36vx2J3ryiW1WEX4LEn8rO+gzI0Dr/pqaAIU94AdbrS19h/99qDtknhveFPNk+2F/MUEeuAMmJaUBtTh6jkRd/qK8W6obGdvV9JwGl0Fa+1NijyI3xwbV4f9z474RrnC94j4xmJNJiwtuTQA77TtBco5v0RgYUA//zGgB/uSA1OHY67++r/oPRil7RmfFmdWCT1t5ACQnjkTbySLy+6/H57pK4nvn0oG1PqzAXDEouxoZbychkhWCKs5QoJL+kw3sKkAAFTyUffpTm2XBFPdGu2D//aLf3d36aCRf+iG1O/X69nBvxivoAncFSiMBtJRrIAAA",X1="/healthy-management-project/assets/Jilia_Kopytko_mob@2-Prc8D07h.webp",K1="/healthy-management-project/assets/Jilia_Kopytko_mob-A3G-y9iz.jpg",lf="/healthy-management-project/assets/Yelyzaveta_Domanska-Ru7up7Pj.webp",J1="/healthy-management-project/assets/Yelyzaveta_Domanska@2x-BYkqrL88.jpg",Z1="data:image/webp;base64,UklGRqgLAABXRUJQVlA4TJsLAAAvRUARAM2ISdMU+Moi+h8zAU+SZKu2bduWeym1ttZh0OS5eG2mRYeZQ8yUgRM6J3aClJCTgJMC5jhvZt77TJ5jDujUWq2l+IFMRMQETEJ+/t8/eQ0TCXhPc0EmJDJalzMCmVBJZcisZiJSMli7evlDf/AKSWjzl/9yPZ8ehmoGogJUONGDIF0iYIDJ3ARlJUGABqP2j7/w5y/98gq5/bNtWYT15iWJNBMDgiTPpItIKwYBTqSMJqMKYMQ8B+Lv/vmPVviLb9615TzXwZMMUUYaALiS3mlspGdaBmB00kCEqpEYVTh984u/9/QvKwXmegCUcBACAcGSgANBOAxQCF4LBYNAImnWIqv+9p2/qg6Y2YIBiFIYBfbusGRKGQBhSpN5KTAwBHdkWFwN2TT6g/+usGJEOEBXRpqBEAzC5fOr86vNtq1OmDSzIQOGBMVAlfqiybHX5799WLvF4bA7EklamgTBF8rDl54y3a1NT7b310aZZZe5SxIJyPZbOTOebbeOfDYvV56SYJ5iCrTYfXKjJDILcvfo3rEnM5he3QAaIb3IY0VDzQNcs99cUUqR1oWQmXP+zBVdQSaNOf33awtHMDoc5jTKEO20bGe4kqXYeAwSJhgSpoQZ+hd2w9AbA4WRQvz3+0sKTFMBBImGUVdhHfD1Uamx5ykti8iWjLmKerApq34l0WhKwA77lzNlhJnDQzKZtTkbrHTJ1TYDQI90ZLC7GdqDcqpytC2rSiKU4POXHBJLhlcoBQNmmwMAwrBlwo3ytJ5iVXU9rfZkV0/OcGO1PPQOUTnfYcIIowvmAWWEkASSYePKSQJGkARBnJeLw/Lu+4e+HMcS2ZrA/d00Od1oKSPUJ3UXrLvoY7kJQCnCPZQgr71d2yfeeil2aEKxjgOxvTkIKMUs0xMweN03K7NKFHNf9uwmQqEA3LgZLvP2R189yssonLNnsgs8k4q7k0JGsILYixBsKDan0sKAlGA0YPYet09veF8Gk4fIQEAvXjKDmZsIBgCkFxwkGr1f1AoDCMDcUBi7o+Dx2TKHgT0io1uPxL7dVXqBCBhEgctlHa5SREy27CkA+n+kcZdKWwyW3RGJzIhQAIf7qUIDAImE6HLzbBxUT6wn3AMs2SVwpxk2z+Fu1Wp78bQXsy7EvTCSBCJFyLJkwpXhbnVu1QHCA0D24TKbdHngMFFt85n+fs4ymxOrhZsCpkxSkAV3kxO1klAiTRCiCwI23qxfffL06JUTPfrWCl+fcTZGoF+86oSQkARklzbzIca1AcgsxbqnpeBh6rvjLl4PNy6++Obx5ZMLu3MDp33nmOYbxQmhwyRMh95wHHQTE5IXMjPNHUzbdiHZv/p0feP9b83f/NA9+P3dRWK5x3qAQGVSRNtP6Tmu/RI0CWSKJoFytz0mF7dPbt1aHtXheTleH8XVIedtXSyMJoYoIRPRUhYygmStED0RNGHAprQjGO58dFi+fFhsntnx0Ke5z7OtFw5YhogUzRt6oLOaw1OVCZFwAOI150MMm3LjzMuyz9/VwrNFt9lXY6EgINMMmENBmSehTtFKJ10gmH0imosxjn27Poqnz3Y+5MGjjevBYAmljCB6QhIqilqlwVBSJAj4tlufDXWzvXow3snLZ6tyqRuTYl6tKthNGRSoPgctUwZkCqTMPCmA0A7J5lYuv3X28Psup8Pt6cWL6fuezxmrs05BTInAPIs9QZooJYwpSyVhALbsJqDsvnJnedVyPLfx8s14QeXNRc+UAJoiDNnFLMwAlFmJ8CSMsIhry4T7fr3L5af/+533PrL76nHd7EXc7WQiJdIOm+pNSUdMCUEkTSkTgcx5BggUdl4M76w+s/uOr9fLZw11XIagpASo71p1KP0glwFUOgGACUChZnITsx4evPfysKFuEg/IMo6QlARBInfNPNkSEoVUJpVKE0ReNlNjEf0wPvzW66dYr+nf2I4VS4q0hCBT0dzIyikEpABFMtIoChmtHKBW6iDPxXfKq8NJx/nDOixPFgcIdFRXRzrUhtK6LA1hDBNAymQpHIr3NE+Nrd/RxXQ/p82je6+erXidVmxcjPX47OTFBpE0TOkMAyAaU6QIybhnMoVpsnq0noejv1se+t2FQLvajszFUC1WyzvfnpXGlqJlVoGSQEhK0XWIcZ/e+sDxeMGrs/HRG2rmYOxHenUf6r6uTvKiq0Qm0GCWZEoUoM4wTa3UACfZePLWR/v8xTce2usnqwl7W6tzGJ3VD6dDvbg2n7N6C6v0RHVLU0qZ4A7B6DV4eu/7f/L+fLb/zluvt8v9oqwmTOYYSy2L85PquZkYXGSXFZD2/6UwBpAbFae5jl7+ge97LVVX89d2PdpM9dkHp5c6LjZalWcnT7xIFE0WgASShBtN1yxDWokPv/Pu+wuOpjpcPt5mJbK72+jtqA8V1zd08erXDxkawjjFvGSIpjSjObUv3poX/5nVRxfUvka/dbHPbh7FRmLsduOq3Pr2/ejLdpGiw4g+ZwXITppgOByW6Llc3V28fSy0YgGUcwkspZh5qdN4+8mNqzqgLx4HBy6Wk9cVZUYv4UiZtgUQh+0HXr6ZgHsU25X9wQC30Sgu2crdB6986V659HrOwdfF6UZAkgiPgG2TZVNs/O1XKxkZPjW7wOyQmY2LpjIAq+X03VvHD46PHprmXBREX1DInkL3ErGh53w0/eabRZ6KDHAbMS+HBqd8nLEomctn5fLOtByfH9iwMAZMRJpnQCFNJsTZ+369FGXPiIhdr9iebM+26Sav1ACz5aPd9Q88PL0672U0yAqMpJkTmWydgv3G8VCQUI85Me3vbqYbz25xH0UopYB95um3++vTrd2jXNWA6KABICAgJ4ntQ4u31gJCaD1btDsv+vpyXZDmQSEplILnbXH/+rpl8wJHSpYSPFPYwdXv563CFHtT69qWW8+4uljk8boyA+Y2dtTx/PHt4115Rh8IkVJkBEWDz63Uw/CDd5hSUxxS2qyOrvs418VytSyDtTlCC9ii/jfcbjzGsWUSJFJKwMEyB1Q/cStlmYrWokzX6/V3767qq2ux62yBq110jBrHw5Pp5rE/C6cRSgcDVgzUhBB9YYrMbEpraMPyq98z+dNpeXy3bJPcXNRMlrVeXK1WRw+vNxGmNCsZEAT0TnL+piMERE4e3E/L4cUHvllscby0stqgl+sLQ7Za+9aG5fCkzUmDguZdJLEHoehDlp490oOTesnb55fj6dmyN2XdL/axmboaxnaoZTi+7kiCpiRoEGzuxjneA1sIqUSyH+r+pU+e3jvJFlGnPvauaTfDwjHbONp4Xg2RSkqEJFyCZn4kUJoFb0Jr2N//14+9RMzUbMTBdpgYQGoq61pW55tMKWU0Ggk1ajoeXhNSYbBM9bZf9v3q3efbWMBRYm9bznN6KJC2HksZvoOZEimYk8gMQ7x6wiQlSyPnCeNw+P6vjMtVDFBrdRP9oIQiEX4cjx/krb5ZkVBSgmxTArF/P4UQLJVomX1YPTl6VTXrpARejIceBwgZiPjO416ZcXvj4QaApF0Tkf6J3U1kMlMQY7o6I1+emOzWehyWV3XeoSNC1r+7XjGzv/UuaeZmhNy7V1j5yCITCaT1GfsdVk9//DKYmnsbdpxb0yXUGUBGsUHK996dfRzopYi2dyjL7dtDSlIw0/Z9Wto71wlpqpNfLtq2zOfh1pEkWjW31B9/9Oec7k7BsF92mX94YMiQ0SO3+y3s4+2Q0RzTMNv+MLfdZmndskBdtTjxW4W/+Arc3WCKfc0ivJu0EDu99XaR+Tp2LVXlfc6y2U3z4oOXO7A45tngxT/0uxOXv/9jVsyKGcLn5OJtChaROWn7Yrfz1w7LdTXahD0O7br66vi1m+cbWO1PhpL+a79xaPTFz//hW3dApAYw/d49ExHZex4OFxePPmxn3oE+KcecbTg5W+12J2+03Yb1ur320z9/69ABAA==",G1="/healthy-management-project/assets/Yelyzaveta_Domanska_mob@2x-ZIU7pPaq.webp",q1="/healthy-management-project/assets/Yelyzaveta_Domanska_mob-KAXsGiGc.jpg",uf="/healthy-management-project/assets/Oleksandr_Natalukha-YKEBbXyu.webp",ew="/healthy-management-project/assets/Oleksandr_Natalukha@2x-5OsrctvL.jpg",tw="data:image/webp;base64,UklGRsIIAABXRUJQVlA4ILYIAADwJgCdASpGAEYAPiUOhkIhhmaJswYAkSxAFYZXsFn5XzMbG/a/wd+M3IiGD5O+hv1V+Ip/YOqX5j/1d/WT3kfRL/hvUA/on8362j0AP2d9Nr9xvhe/bv9ovaH/+t1s+lX1f8UfrL2/9TTNPaH/J/uR+8+Wb5a75/hjqEfj/9A/U7hdMu8Tv1m13mgH+a/Rg0MPVv/c9wj+Zf3P/pcDWtfu1naMNVde+omB6pn9+zSJDp5yzaC23WYEsxrm1j/s50AEJ0SjbJ7nOZLT+XQ+yvKCWJcqEpNPddL+Am6pPj/XNpRtLzCa3zHtMuEOsHXALRybS2V96pUuv+g5LP/HHKMcpEYxtt79Mxr0Ohf6lLrIhHgcOqPovMyrkeNtpAdsjUKnX8PxmVvtlkiMDY0A55y3ZcNTNDQPDHNkxbAhe1xHQAD+/syfYX+85P/TIPKn2Puqu+XVty3+y76BcUtEJQqu4voHPSnnbL1ucWC0joJxk/cYI+VX8EzU8brkDKDl/3064YJUVeEiC3zte0WxGR15upzuZ0zbpjvZA4W5ChhNs3cqkHgEl5KTu6frht2gDP/f3TumxV/f1+GMW37vF+bU0AI2XMoQvcPOs0gaaK4qeQFiMIlsTCTGfkY3kegQF0of5eoRZ+W5hZuRcZmT4zDU2kAiL1uGtZ5yb4LTht8bjenYtn9o7IxNleHnLKj+vVT9uio+chd/4wpHfeA9RJRJYdgMsru6dcSIv9p/1rX0lt/I5iHHFw7J7V/JpTSN+Z5y9IEHXjhLVOcltsVWnuNq5f70usc38GJg53Va+N5Lu6bSdLD50OdlwyfyYeG0bRrdJNQWGrFBn59ABHBgD5TBh9bd2pQqSmmMU4YEsvY53195ra3WiGJEq/RHBU2B7mOEapF8lWk7zVXwLh/99XOdsu4fxfr3optkRoppr21h2aI3CVw4n+xkUfxA3TmHvIHXCu3oa38IZMmh09FhquGbb8IL8BwT9nL6/gJHEM+tsQrlMOOPekKj6EZL1KzMfshJAhblwSgsi5btF1uNfP35628NL2B8lLvGr0JMBytRX1DQtX1e37WOv62GOYgAnTydO4eEnqZe/TFc/LlvgKxxd4RTjkP2OX8s4viWm+7GS4MvkdK9lehmYCf8AdbMcvM+E3LOc/7gHcffbQUvyqGL2jYmj/ptvKZDhYdHaWKltEF59M3l+UtRr6HhvczY97Bl8d09UdPV5vDqDeJWwTP0RYlk4xyJ6l6ECyLeIqVDiOpFPunWUloCTA74pj3NshkVqR16ZRO8sYVLM7Ts5HUyk+m+9C6i7ncBUT7kdXXqLbHB8wEah7cbvMCAsyx++U6waf24nnakfJo/4ed99294d8rxUTIXMTzNqp5fcThfG0fSaZk0tL3dui6vdTCtzjvyOWEefWPeqDj26aLJeNLV1hVT1ZVijMgqafjMqXbEry9NJa8P+AYM88v82UoimJCFnAQJlxo87ZK5zAyMUO2BllaKyogTtEpFLwbO716SmGoXRAduJXxgtvBQW21WiNjJ2LvIM8JG1MNy8MDBcrRwbYSm30w1ddNvPsoxHWQD35NEFvJce3MqDR3FtzN3ZpAskvm9dfso6/6lOwGgDdtk3cEoUaaPFwCvEHDwjf+WXSZgwzX7of3yIjjVJRNLs32Rt9P2a14xM2KZmNZ8UKEaA0fxoQMhHAM45hua/eOT69CTyvdq4TJ6x9/wj9B/syWbKOpFol4KHV0lVdsroFrq7QALMLJPpaBKlIYoRIZuzJr8EfvFYsNJtLhdz5HYbnogkr7bQljhL4+r2XhuzgIy4ZERIwv6Ap6nOqdyF4ecAA9joAKaqH1Jcq61HZ8JfSw57KeE6u/jAahdIjXmoi5DnXapcs0PPsN9/yh2htoiswKHtg0h42y+UoZNQ0HSagflOImC+XAkSL67UIIwYd5RFCEgFu/vzdJ0Ip26P3gTfXxH12JdIJcSxtWBF0j0pQuE0GA5WtYojLrTIx8gvhRY3qUMrhiS/Q4B6FY8vEj5XmGDXRxY8vWe5xnHoPAfDHa/1VPwAwP+2R1Vudf+Y0G263op/qCUYr/y8WrZSDxH/SrXTV1/YBHh/eLkbtJrS6xuBm2QV28Lq0xYKRl0okp8yX3UObge4yUt8xPcFrn096ixgSrXZPt9Zib9bIynPBCiP+Fs+KCshiw6F4zjSeSl3iyuu/8Fi+GFzJZaoqt3xvGnZ26Gfewhs+/jsHmmSHtYn6OcmazWkj5jOmGKHFqsV56bOrlNkq8H+tQuxPuY0NtRiHOZqwEnd/RtDgRp1OMhtsaKC6OkyZxr4/xwHxHXZ6nnlZp749P6KCMObfmMiP+QHOMf6T0nbLDAkLj3snKb5V+2PrT+yT/TvyYfSiIB+DUNYb6L8H+g1G+xytvU/iD0dljTgGZllly8NtGkdBx5Jz9GnnWrpe1e/QRbqiYCbwpXvfQAz4htkdYIMO4ru2z2Q/qPUU+evXb9w+l+0j0qxA7YEKcge4cpu4wzBcNzqmwdK1AUtd0Z2aKy+4BklOt+U/0S1nFx1VWLCRoTkTS/QvnTjSXJGJb0fNwUwZ65a61cLxfz8xPTyT5qogLrWWsodM/9Ieh1b8UfUJarWnjyIn/6hMVtAxdu20/Sk0OD3eOSQrvU2DV2vayMhZfJXrJaYfrQTFjxQ0nzNuNcrc21tuvL23cv/PjBdvLaVAxwdiXxn8Bf6OG9RZvsbbKhrc7elMo/Fbo/x9Knept2ixbyj364kcONXZ0qAjc1FLxdgp0zVT9dP6+KTsf2hvXWX698pr+e/krROADneJkmhqXpIfW4o8RrBOAEICFSlN1kADI8h8/TWKP05p7ZrXnxPGVwg1qXIgHYgSFnG7ZMaAb5sP5cZe395Tei5yt9DouT7UZM67+er/8skmgfAmEqoX+w0QJs4QL7D8nO11ME/r8R3N3ZuijK4AcJurrlu3it/NrkAAAA",nw="/healthy-management-project/assets/Oleksandr_Natalukha_mob@2x-RIG0Ti6n.webp",rw="/healthy-management-project/assets/Oleksandr_Natalukha_mob-ke5BS3BJ.jpg",cf="/healthy-management-project/assets/Valentyn_Havrylenko-ouVcypag.webp",iw="/healthy-management-project/assets/Valentyn_Havrylenko@2x-xBjJM6nL.jpg",ow="data:image/webp;base64,UklGRhYIAABXRUJQVlA4IAoIAACQIQCdASpGAEYAPiEMhUIhh4LpVQYAgSgCdMug+p9R5mNffxG1olo7PciPqz40D3zeaL9u/WU9J/oAf1rqQvQA6WP+6f9z0kru//H/UB6r+NT19jO+FOIj2xv1/HzKT/juAZhjx0eNoZv0U/VvsDfzL+y+kB7EPRAGLSjX99J9ZzNLE8a4pa4UJH1G1bbZT7f8m+y2Vmw5BCkZTX096E04HNvPS8diyDb/FLNAyUuwBy7KmAYWypU+98a/f7Vtv2jpD6nK7qZomxNPPCb3ee7gWCv5bq9FEEC8P73MvL4I+gsG7E8WiCwqdfwH5u0es/bij1OknISkJCC49JVzUQksk0UVW/CTacCSJVrP7frTSPYwUf8AAP7/fA9udJf+4vb0yWKvm/3rZXBUdffGuQaaZsao1go9y9Aui8TCXRAtX/ygUgnAFQ7L/LBkDXMHmwb8r6jj+HAtCGguXKqIpRXjqrYQOdieRU5oldUpxrK6xMp5NWNUH7HKpuw4Uj79rtDftZ4NA7f/82V4/MxMoNSgXiE75n/nJ5CZcddkZS2Mm8mWW59qx9ZphX2SSTrfgmLqyMyknsrld2PvStR1xCnP+ye25y+IwCPBjOgB6pWz6iw9yHnNFP9wm/3XAkrQ7NDpv+aMojU4UavBwkCxuUAMPK6mYHUNDrOjpBXV6tSHKR+vfi2L1BVsJtQ0VBexYKf3zqIf/ziwn5/xhbU1x/hSEojr/n2vju6rPNIx+2c31wTi3udDWC/Jdmr13PbuH4kLZgg9R/b2RjGYqfe9y15LduNS7tWXnEks6PscddGtXVewo78N9opbRBRT98Tf9tOuh3ztWU+OE/t+iaLTjMxeslUaMwpxZjsZ3xSG7Tz3cfN/cpoI/5gaOIZyQA1crh2AsDwii/doeUGwXchDU2cQll6dogpmAo26NW/CB3XaiTm8eScLLHbb+KcDZ6RxpJGb1mza1mJcinPsU2PxNfzi7J6Vq/CdHD9kbGPn6WRGt/aMN4gya/Sl22Xm2mqFBJnpA481BPRmRuV6Yp9vlmt7WXAtOesbijLSVp5o6Lo/2gi/lsrl5fSAevupbSGUEX4YOw2i4GFFxOXe5evGQdLcjKPjhLorU8/LTkPAd9f3HiZrXm/Fw/Ir0ETPmsZSzNZsOsSAy3TGn2A/zxz/3eU8MhBFdmkzf7xLhiWErKdb4X0+ZQu/deoRW/Z8r5tPO7MoJUtuUNrcwR+Lft+YA18TqCpK31Ms52xwtKkdB9nEjN61kmP42ld1W9D+TtW9+RrvE3Q7ZSz0/UnmkNzt7+D7nJueh3mkLn6ERd0zIp9LqR4Ru28kZvttRmDtEy7HE0f2dq0FF2Iu8VAUTPP/VBOspawDCanE4+Ukuyg/9dngR8AbmxPe/4xWTWT9hA70B/TKfBWdEtttzAovte+VXw4aIV9jb6zGIGjDA+3Gz/wixWW7q1SuYltOVuh3fdGLeUUAPRyu2METLWhdXPVTv2UR4OmEKQDb2OV15Z82OreMZx8jJ920QptzLRm6IJzyja10klbnfgPByj1WslHJYbYDrtHC87vz5gubljHXr1pJWDMCP+UN8b/eGvHdwS52uWPaNVQb5/+/RW676ysViT9pYQvLjXLrrpkOeqgu9b1N5Z7EOsOUF1hnkKXe47tnjeF0pqvNu3nUjhg/AkbwgMHbTvEnii6/Ym3+C1fr/+XOIBKZ21aUXVYwnSTXOn36IgDIrpQmH+9Kmhmop8vaV0fIcf1RwHlWZSTk0zp8kv4hvya+zjsXo2/RidKfpzNY/PEHbww5dbawwXLhfFss1/LsyDyofDsH3OBSP8134CcVEE1jaMc+ERPdO/1VXW3AXa51kgjSdPL92fvb8MrV1Rq5La/0FygcGUkv6KgEWaEWKFwPEKio3L5LY5sou6yA+3Md9IU8B/GswvjAVk/WnfFIC1IdADmPOiXMGYYcxs93EmXOp7YEf5S07EA+hqTdzzuzYwHyEkam6vpDt5/I/aSf83HaB9MfSF69DZB/a1lEFxN2n6hm75U5FT4VP0xgdv/6UHPIAMUdj1ZA1ROatxUW8NmWb384WI6Nl2CL6OkENusmAfbzuzOTGPiNaEczlVVIsVnvkDc/nwmhs3R4hPxgg03IrEcB/cqXBjzoYGhgkANgX4cqKRp9F+HLUY20nKk86GLaUHkugpJaRJTJmC6SKpcGKJlwc4a6DPiEgs0dDh2JcZX5FHKB1XFd6NK3z9sfKFDULf1C+Ut/6SLezU2pPWX+fY8o40B4AXhCMsx0IEHlib7kTrbp3BdYySG5oKzfZqSdJg5CRp2znwy9SRrgoi6oSMgM6cVmtB1vZjH7UmcOYG6MZs/IgKppnXZYDP9hy5Ih4LjPVnwfcaywlPa7ji1j0hnRd/IhhIkB07T1tGEZ22nhwa1NzjeOQ40ZWF6tbvtKmfG5uCgPgXcxaU385ngez4T2p1v/P+uOqqQAIX/ytkvm/2g4Zx/p4hm3njYrQTLU2+YbGt+t4rahHMegWwABQdbp0gpJ+cXweZgiczr3+z+b/AHMUCfAdXp3L8OffS+P07/Oxj7MYchfPO0dElmkIUGWtf/A+tvmqiZbRUNTebQSZ5qJ+Llg2YVCroyUMjgEIaidBkc0tpQ0b5S+hanR+u1k0EYbxe7Xa/1Aw18vmcCa6XCL/xQDiZMbWPUNf6EWvcCR1S831Tnh7YZKButi8fOP4xq0H4PjgYP1MK9pDRQ8YFefAAA=",aw="/healthy-management-project/assets/Valentyn_Havrylenko_mob@2x-Er7ZIkUj.webp",sw="/healthy-management-project/assets/Valentyn_Havrylenko_mob-KQjegZSK.jpg",df="/healthy-management-project/assets/Olha_Abent-lPe8g7w1.webp",lw="/healthy-management-project/assets/Olha_Abent@2x-fGgXmj71.jpg",uw="data:image/webp;base64,UklGRpIFAABXRUJQVlA4IIYFAABQHACdASpGAEYAPikQh0IhoQo9twAMAUJZwDTGA2re8oGA5LdKXbAbgzeOPQA6WX9xMIY7C/6X9QHrb41PUHsPnGPt/99/Jvlb2vf7v+PnCvce/XD8utU2/zfJ0xzf9D1P/9Ty6fQ//E/vXwBfxv+mf6z83/7b84HsY9C79ZDl//DnMp08wDnXRfkXYa8eWiuC5cNCTRaKtASLBBeNULEHOQtzHU5PTdRMPHSUoWh1b5PgsmR7MXAxN/kn0O7eGpry5Ahw1WP8dITFR7CJcFbeGzSY9Maai3Q3wT0MdLmzNEU02GvAPaJZ5ooAAP7/9ApjNxC29/i10gSg30cBJsyHW1rl7iPHXPtnXvxYeKv/veaM6s0uZVlh8mn53+FKLnHfD2P40O/ZQYjUZ0zPbi1O0lSnmb/kGkfyBaj4jxXPT+2NbGswoaMXlKtrcy7aQn5hyTEsjOJYhqUa+PUkKL+2d+nXrvn9gqN36ENfKXN85/WiH2DKPVf7m56zZUmz27ztIhanmE0dTEoRlxM0ByxhAyAN3F1VLDivwMbxGR+HXBFNNkOGZyEwlLFxIGxA6AJw0kN9o9yx4OOXJSgPSq1hbEdfyg8kMe3VqAkNV9Nf7GMQ4/3qAH1AMMYorQkocnAvtbYL0+Ni36P1FsfE+sayN3VvVlx3ZPkuocFZ2dA6PufIHqFkR8iLeaedrzmDxCYZDn0ZanhLiueHBg/1rf+Tcz3b0JSCynsLOAlxE69zgZp6kWTrnpoo/vTyzN3KY806FGo1Q1nnNG1reusXz47IZvN43RHdarb1Fw4O+XgQs4GOWYXen2S/K5i1Kwy0bQi/nYdY+S7He+lt9WzSP+5/eN7yifzK4XcDDzQEDW+809GWDFvrfMaahNYA3+Upc//qoMlIoAaT9diUEwkyZqsdEY6+RE30BIZcaCFBxyhHMs8l/8m3RCxzdQss1A9NKCc7aJY6/8ECPPLZB3kqemBEnUR+xBJ18+NCOJ0wPakFq+ukJoyB/oHx63WEVV7VJorOp6NKjHSBjGooR//NehiPgB/+4h+3KIYMrS5fe4kjOWfXZZ9wftX/oRz8zUif9ml9tfC/V/jrq+ZZ9K5a+2Pzguvt6+ybrxE2Fqf3eIUL1/jz69xwNqf7/rFlecN3XWUqOPv4Lj3+y9WZnGe5oJ19mxv+BCf1VAvOxVqC7ijF7qjZi5O3LDgofbwdSZz/FAT/TXh6456rfOrZ9H/ydddM9D+bS1gb+RO8TvnBjfu1SAON4HW5tut2kxhSrQu/o4zYgvEVDI+vZaSsEBnaW2sABdmQw5/DOOgsIWAfemMSH9CrEFO3kmnbOp5C//1ZpMv8R++EikjLb8W2chF1lp6vQx0shbzOe5HplYEf4Cf/+e5fBoRv163Ip9NxsyCFls8ikcK8SoOkbkGvcMyu2YuPJdjORvQw5KRHfKlk1we0FX4xKhE5RmETMX8ykyqN5mU7a2U3TtSuqY94iD4Ki6GWKC0I+3JMbCp3c+KFDs8jLUOO1MQ/yXBJBtB4JeS9jYdJbZwnJi3RPdtoe2XhhWT1YiUYSIfK4M1UrsKDsWbFzAlaJQBIMSxeVlTUKqNmueolkcmrKqIizHh//ITodav6PEveAU5wDPP/+8ZONB4y8Jp1Tz5Dy9h1wYUwZ31P7YBchnfB+6YSGiGPX5/UgifuUMZ/7ZXG28bPp6JjyyUGHqZFmOO57toAT3mA05uNM4/+aVUfrbhTcOOLw1ccLU7Ucf+Dssa7DPj/3hF/7p6e4v/4/BFjzXjQcZt47ZIH4MpiHSuu8nnzOD6gFutSUbT6mOtClq58PneD9mXwiaQJkAFFh+Ojy3Wu+otQgRmKnLD7q8dDuvK/We0/HKvw9vkqGyO3MAAA",cw="data:image/webp;base64,UklGRhwMAABXRUJQVlA4IBAMAADwOgCdASqMAIwAPikSh0KhoQrc1pwMAUJZwDWaQA1+30nnDWB/N8IaY/tMyRepfxQ+nX5jPKm9Yn+Q9HL+zdaf6GHS4X7v24/3L8kvPPyQ+xParlMxHflf4N/U/l17V+Efqy8nv+W/Kz8wPb73dYAPrN/rfyq/qvPj9lPNP/0XJqcgPcF/M//B+035af93zhfSf/N/zf48/YN/Mf6l/uf77+6/eP/ar2UP1rN9X8/dvWcpwm3gqyTvMoKlWkxmJy+YCbNXwI25mr0/QFzNTQdQn23pjh5ThxtlTzTfCHb1Z5wnOREK0UUXvG+RI9yNkuDnor1rwiBABpSlHLS+/2+ScGJQw2OVccj670v+tlN+QwKNZvq9FliNIurGLemNwAoYDBZwD8230f0SLONXLILu36iO6YxPLzeywf6z0lgXiNt6NgNRd8JtYV1lKgxo0M2eAfV2hB1QXKJB5Xy8TTfhfdj+AQXXFmaN/8LFU28P4eJaT8Gvady0JSJ4gfX+qb8kdtDX1vjNmoWulZHQBBQqdF1F5Z8syWJoeMXsnyV5iOB62Uy7dI3QvHUxAYYdCvIY5S/UwQTkcAN0YRWkupHWk/zwcUjwkPPIBJc8J+MzlJV0tUT9SY8kLMBejlsBowAA/v/zxZ6y1kBLAIqU3jAG/XYG7ASSH7Ne89/u78IYJLtHeLkyPPvlfNt1BJC6UXt2CalH1vZLKWWTaI0/MY55P4ztp9Z/8vT40hWmA4HxZf2RBp8z+XZAV1ao3k66WfMVx9AGjVHmb8vjDzf5Yj54tsMOfcBeJYcvUTZRCNQu0nK+yz/fm+TYnyZWfcfD16b51BbO7WUD9hm68L7+GQLbEb/nbgb+oZHTUtlNmMWzOJWDjRdByA6z+WoEfSAJ7CPEpyC38MsRCDMZreub53ZpLlojQ7vB6mb/S5an3XsbivKdCcSe5gUzFMNvRF9UKLN1YyGQh9xYgWuoY+5wt99zXD8+Jm2Zud/PZJ4c3NSTNQKle1ouByHJVQMfeyjtOOn2CsBaklRxHxRifxV3OuuhmPQ3V2qXESpJZMoCAhw171lxtMjHvZg4zqtHJ0Z7Dpv+QhTmnssish0edegVrE1jF+xs7TGLpnZg4OWCc0IE5jLHXmo2WKFkrXBMf5K93p5ULAkVOs6CHFEipx4tTIYzdlBwzvnC2Q/reK9QMN/J8UGwqNHIuDVF04ZAixyn08+yhr26zbsHuGnZKd9t3wnhltY1JMupnFmis53TbmgQPa7Vxc1j+4jZadXj0mywRWZssrtjMw86URH3mAmb4V+FQry1um0FGUfv+2+15YDKjjlEyUhemtOM9K/pAq8ZOB5SMfS2Kx2uWuTJ9u4JDZiWRkXDKdBV/8/+z2GwBtQPfax1x0zB5hjjt6qQ8tPOcfcoKl1hrHCkCOhsIDgiK/VxJIRkdkAuNo5PusOVfSIHvtO4s/cnNxKEPH3Yei9R9mmuVfnP47fxJrHJN2zWU0K69vglYpZojiY0ZiMafir7hkNcaerL0TOCwi0zi30V4Fqw/iN9WJnQ0yOHwPEyK5tte1oGRnDRDAh3w1lY88MBfYnMJtN3IAPRY2NC+9/M78F8XNz4EA8QSrjNfTEwLYSklIX3B5w3sLGao9t5KLFjbpr450ES4uK2ci8VG+3Cnlj1HYse7IAPBF8DCyq+YtWbL3fsDbjfTZTruixVIbcBrxJh7P3Vba4IAThwldO9HhAD8/da36uZwGz55yPiJopQ1ArwZA/qMie/lKSMUSQHXwME45MLOkyseDlUFOJXJZA7JFKPaGP4a1SMFpAv8RMQafFfbqrv6x1qR+fb2Qfjss4LEgRtrPhQPUL+zw5O0KLg0pkKMEaj2zP4LW4j30kKtmZWAPny6k8ZjATXVz5XHdrTX6+V8UpwoL9h+0Kz6FSDp1Ug0rSCSgt/eg/JneGTum43Pj/h9rKKXgJmL33iwrcb3jJ05RVhq5h1x4seaDPH69BEDoFuy6HXr7eYf01/Ohk7/XRXMLl4vFE0Lj4ALy6w4/Sl5Kea5B3r4Kdg97qU2rzUKOOJ0YV/Ztnn88NvxiyV4TeN8nPa/ABFpXwJffSshyFAr3jHfpf9kFoypV7BGLVj1EUuPEi6R8tlhG6NXZJ4K4q66zVSwq3V8jdpgnfIOExusWkwqSnidWX9cNNCcU7ia3sygIz3OZpa23xN3K3KbNJUfTxJoUTiqtbj1CVWw1g93OAkzGc4NYnT6vlMf8D0G5Z7WMRAbxN6A2fwz26xdy2dOTYb5z+PeWum4nm4DM0BEvs74v6SwvKEDt1YFagfAfofAcHSgpnIuESv93179JBeyq8OBO/TFfWNKBhVONTCsTQZoamIQi2pcZhEO+kSf+dXgPfGtmmJf3qLpqj8GT4cb91wKHgPYf5QEXg3kGSe+jdswFrhnbO19yZgr2sxnPSUBrszCpSMTXcTTDYiGskh8UKhJdlVHlVMRw7WdL6MOsrhK5/mJJrlS1SwnGfEHTqR8RVhTXxtG87FP+MRScX1c9rZk9afGOZ1YzL77XBd5wLGl2EKkF4QAtB9/Ps+pJ3LT2xQx67MZMJm1A7R+PMIuBPMxrxLyra+fgiC3+BOxOIPJvTgnn9I054VVG7nIV5GSkDhGw/Pe1Dd26zr6n4oE9cMnPu/39wYzWGsOgfokPr/eJ9VX39dgqNAcMiPCQXcQ558AtHYvP6FMKS680vcRKSkcN/ad+aBfzAL4yQP4YmIdTZIkhPywawihyZOx9Lyy0unjR6giU6tINM2qACAUYn2ebbvP/+ojL7METtrfu6Kq+6bcd5Deh/fjESvZpxYRZkxDRuOJeVSW80xo7zE2nJsuOED8RPKX2Z9f29MxufDlUIuZXZxzGRIyZt2jqFfODK9d7edbJ4zPhIyMqtk0hqdVf29Y7pCuUHsNqqdpeTMQeRMnfLDVDXEsRjaqRj4qFtzhSoi2Dwgtdgb7pWMoThIZmAN+R6fWa9pxjHQl6ltyFRAKVo+kRfkZeShY4CuhrWJtu7Av9XSoTB8+tlqfHChlPBVhlKrCD6br56Sb4ABxhuYn5LB2rloOTACFxHpCAGozr10AEl0eJ+BXIYXwAwqWmpmV87gUdlVG6xjxa/vw4aKSQpmeceJXb9eFbG6ObVLdWKF/IYem83n+m4y62Fi9jSYUB5C+FREMf5+nzXwLEFFST/5EJKFmqtCcXLbi2mU5GOaVjQh/xUtF4txzF4UCBP2R7adzXGDQSYDyGCv06J3mfkfvrSCX/75n/I5p8W093VgA0/WzqaePt8QduXtRSfhr83Tf0axr5Lv4s4rUANltj9r4EyUdjPWYCPDzjRQCjPEick2tbQLejZvrdTeemn8HtZuRx13aU2GtHenprj/UkHwa4PrHpQUvC3n+ZJCowsmLrYEE0LQiJNjxsAerhlQahSggetGJpaaSK0OFp1TqZVMZp9+RRWqsko+yQ0FJwlMcvAYWf/w6P3q/xIVjHn+X+7EvojFmQgFsKQ6HGrtw5rPauOEhd6gSROSSce8JrfBQG4pIjfrppx86mKhhl0o32Wf8gFWtpxT8Q4PpOVWH8qJvZj9RjlKFctwiYUqkCCPvZ+/71NTlogFkI/p6nUMhqaC68vrOV1XTRPjunmaaV4rBjnKkl2yF48eM9rtsXYFX3FRoaX3CIo5lMOulRI6AnPca/+nXGgSUCz0iJJVIQr7QZlVNV97YVHVKm4T+FV4ZzNPIr0vHANNEdsCO7itoeLl/rAgfQIPEZTV2rR/Fv8b9Hgj2VFXPtwnp1VWiLhbkHJdxpwlfxLqfS9okgu2cu8nnZXJwJTWWSum47RuRmqzrkX4j32Nrc50fhxYoKajWSBVAc54Pfjxp/tGdz5LRnwot8WbQOefLBoLwmRXJcXOgwnxb4WMPJuxUSXxTqE4C2DA1usb2h/nvgKdAb/RrrfgTUdgZOgBi//UzqVCKGeqCFf4ZYA9d2YOi0bT9DrQpZ8YHIM+4oO8P771uNBpn3vpf6VgVQKPLimE1/ZbJHpeU2pM61LPOPttmTly91gQwk/nylnz52dt+OeMxmGz/WAG4yTenebAGbxaT8nS2T8ARaeQtkxsRdR3Wfvuj1H/YAAA",dw="/healthy-management-project/assets/Olha_Abent_mob-OELuHJGt.jpg",ff="/healthy-management-project/assets/Viktoriia_Moryc-tWw5-4of.webp",fw="/healthy-management-project/assets/Viktoriia_Moryc@2x-AxiRex6x.jpg",pw="/healthy-management-project/assets/Viktoriia_Moryc_mob1x-i9eVsNxq.webp",hw="/healthy-management-project/assets/Viktoriia_Moryc_mob@2x-ZF_1f7DI.webp",mw="/healthy-management-project/assets/Viktoriia_Moryc_mob-7w-XgnKm.jpg",pf="/healthy-management-project/assets/Vyacheslav_Pavlyuk-py_hj3lz.webp",gw="/healthy-management-project/assets/Vyacheslav_Pavlyuk@2x-2qCtSSAb.jpg",xw="/healthy-management-project/assets/Vyacheslav_Pavlyuk_mob1x-ayDkVe2o.webp",vw="/healthy-management-project/assets/Vyacheslav_Pavlyuk_mob@2x-yWKoviF3.webp",yw="/healthy-management-project/assets/Vyacheslav_Pavlyuk_mob-7v_64oYD.jpg",hf="/healthy-management-project/assets/Yaroslav_Li-nn0P6bIv.webp",ww="/healthy-management-project/assets/Yaroslav_Li@2x-xfuqLdiI.jpg",bw="/healthy-management-project/assets/Yaroslav_Li_mob1x-WRXC_pfB.webp",kw="/healthy-management-project/assets/Yaroslav_Li_mob@2x-hfyZuTJ6.webp",Sw="/healthy-management-project/assets/Yaroslav_Li_mob-XCPFEv8b.jpg",du=({handleClose:e,isModalOpen:t})=>{const n=i=>{i.target===i.currentTarget&&e()};R.useEffect(()=>{const i=document.body,o=()=>{t?i.classList.add("body-no-scroll"):i.classList.remove("body-no-scroll")},a=l=>{l.code==="Escape"&&t&&e()};return o(),window.addEventListener("keydown",a),()=>{window.removeEventListener("keydown",a)}},[e,t]);const r=document.getElementById("modal");return t?P0.createPortal(c.jsx(V1,{onClick:n,children:c.jsxs(U1,{isModalOpen:t,children:[c.jsxs(W1,{children:[c.jsx(H1,{children:"Команда, яка створила сторінку"}),c.jsx(B1,{onClick:e,children:c.jsx("use",{href:`${te}#icon-close`})})]}),c.jsxs($1,{children:[c.jsx(jn,{children:c.jsxs(En,{children:[c.jsxs(Mn,{children:[c.jsx(K,{minWidth:320,maxWidth:1439,children:c.jsx("img",{srcSet:`${pw} 1x, ${hw} 2x`,src:mw,alt:"Вікторія Мориц - Project Manager"})}),c.jsx(K,{minWidth:1440,children:c.jsx("img",{src:ff,srcSet:`${ff} 1x, ${fw} 2x`,alt:"Вікторія Мориц - Project Manager"})})]}),c.jsxs(Pn,{children:[c.jsx(Cn,{children:c.jsxs("a",{href:"https://www.linkedin.com/in/viktoriia-moryc-61610962/",target:"_blank",rel:"noopener noreferrer",children:["Вікторія Мориц",c.jsx(kn,{children:c.jsx(Sn,{children:c.jsx("use",{href:`${te}#icon-linkedin`})})})]})}),c.jsx(On,{children:"Project Manager"})]})]})}),c.jsx(jn,{children:c.jsxs(En,{children:[c.jsxs(Mn,{children:[c.jsx(K,{minWidth:320,maxWidth:1439,children:c.jsx("img",{srcSet:`${Q1} 1x, ${X1} 2x`,src:K1,alt:"Юлія Копитко UX/UI Designer"})}),c.jsx(K,{minWidth:1440,children:c.jsx("img",{srcSet:`${sf} 1x, ${Y1} 2x`,src:sf,alt:"Юлія Копитко UX/UI Designer"})})]}),c.jsxs(Pn,{children:[c.jsx(Cn,{children:c.jsxs("a",{href:"https://www.linkedin.com/in/juliakopytko/",target:"_blank",rel:"noopener noreferrer",children:["Юлія Копитко",c.jsx(kn,{children:c.jsx(Sn,{children:c.jsx("use",{href:`${te}#icon-linkedin`})})})]})}),c.jsx(On,{children:"UX/UI Designer"})]})]})}),c.jsx(jn,{children:c.jsxs(En,{children:[c.jsxs(Mn,{children:[c.jsx(K,{minWidth:320,maxWidth:1439,children:c.jsx("img",{srcSet:`${bw} 1x, ${kw} 2x`,src:Sw,alt:"Ярослав Лі - Frontend Developer"})}),c.jsx(K,{minWidth:1440,children:c.jsx("img",{srcSet:`${hf} 1x, ${ww} 2x`,src:hf,alt:"Ярослав Лі - Frontend Developer"})})]}),c.jsxs(Pn,{children:[c.jsx(Cn,{children:c.jsxs("a",{href:"https://www.linkedin.com/in/yaroslav-lee-b7070b294",target:"_blank",rel:"noopener noreferrer",children:["Ярослав Лі",c.jsx(kn,{children:c.jsx(Sn,{children:c.jsx("use",{href:`${te}#icon-linkedin`})})})]})}),c.jsx(On,{children:"Frontend Developer"})]})]})}),c.jsx(jn,{children:c.jsxs(En,{children:[c.jsxs(Mn,{children:[c.jsx(K,{minWidth:320,maxWidth:1439,children:c.jsx("img",{srcSet:`${Z1} 1x, ${G1} 2x`,src:q1,alt:"Єлизавета Доманська - Frontend Developer"})}),c.jsx(K,{minWidth:1440,children:c.jsx("img",{srcSet:`${lf} 1x, ${J1} 2x`,src:lf,alt:"Єлизавета Доманська - Frontend Developer"})})]}),c.jsxs(Pn,{children:[c.jsx(Cn,{children:c.jsxs("a",{href:"https://www.linkedin.com/in/yelyzaveta-domanska-2185a5292/",target:"_blank",rel:"noopener noreferrer",children:["Єлизавета Доманська",c.jsx(kn,{children:c.jsx(Sn,{children:c.jsx("use",{href:`${te}#icon-linkedin`})})})]})}),c.jsx(On,{children:"Frontend Developer"})]})]})}),c.jsx(jn,{children:c.jsxs(En,{children:[c.jsxs(Mn,{children:[c.jsx(K,{minWidth:320,maxWidth:1439,children:c.jsx("img",{srcSet:`${tw} 1x, ${nw} 2x`,src:rw,alt:"Олександр Наталуха - Frontend Developer"})}),c.jsx(K,{minWidth:1440,children:c.jsx("img",{srcSet:`${uf} 1x, ${ew} 2x`,src:uf,alt:"Олександр Наталуха - Frontend Developer"})})]}),c.jsxs(Pn,{children:[c.jsx(Cn,{children:c.jsxs("a",{href:"https://www.linkedin.com/in/oleksandr-natalukha",target:"_blank",rel:"noopener noreferrer",children:["Олександр Наталуха",c.jsx(kn,{children:c.jsx(Sn,{children:c.jsx("use",{href:`${te}#icon-linkedin`})})})]})}),c.jsx(On,{children:"Frontend Developer"})]})]})}),c.jsx(jn,{children:c.jsxs(En,{children:[c.jsxs(Mn,{children:[c.jsx(K,{minWidth:320,maxWidth:1439,children:c.jsx("img",{srcSet:`${ow} 1x, ${aw} 2x`,src:sw,alt:"Валентин Гавриленко - Frontend Developer"})}),c.jsx(K,{minWidth:1440,children:c.jsx("img",{srcSet:`${cf} 1x, ${iw} 2x`,src:cf,alt:"Валентин Гавриленко - Frontend Developer"})})]}),c.jsxs(Pn,{children:[c.jsx(Cn,{children:c.jsxs("a",{href:"https://www.linkedin.com/in/valentyn-havrylenko/",target:"_blank",rel:"noopener noreferrer",children:["Валентин Гавриленко",c.jsx(kn,{children:c.jsx(Sn,{children:c.jsx("use",{href:`${te}#icon-linkedin`})})})]})}),c.jsx(On,{children:"Frontend Developer"})]})]})}),c.jsx(jn,{children:c.jsxs(En,{children:[c.jsxs(Mn,{children:[c.jsx(K,{minWidth:320,maxWidth:1439,children:c.jsx("img",{srcSet:`${xw} 1x, ${vw} 2x`,src:yw,alt:"В´ячеслав Павлюк - Frontend Developer"})}),c.jsx(K,{minWidth:1440,children:c.jsx("img",{srcSet:`${pf} 1x, ${gw} 2x`,src:pf,alt:"В´ячеслав Павлюк - Frontend Developer"})})]}),c.jsxs(Pn,{children:[c.jsx(Cn,{children:c.jsxs("a",{href:"https://www.linkedin.com/in/vyacheslav-pavlyuk/",target:"_blank",rel:"noopener noreferrer",children:["В'ячеслав Павлюк",c.jsx(kn,{children:c.jsx(Sn,{children:c.jsx("use",{href:`${te}#icon-linkedin`})})})]})}),c.jsx(On,{children:"Fullstack Developer"})]})]})}),c.jsx(jn,{children:c.jsxs(En,{children:[c.jsxs(Mn,{children:[c.jsx(K,{minWidth:320,maxWidth:1439,children:c.jsx("img",{srcSet:`${uw} 1x, ${cw} 2x`,src:dw,alt:"Ольга Абент - QA Engineer"})}),c.jsx(K,{minWidth:1440,children:c.jsx("img",{srcSet:`${df} 1x, ${lw} 2x`,src:df,alt:"Ольга Абент - QA Engineer"})})]}),c.jsxs(Pn,{children:[c.jsx(Cn,{children:c.jsxs("a",{href:"https://www.linkedin.com/in/abentolga/",target:"_blank",rel:"noopener noreferrer",children:["Ольга Абент",c.jsx(kn,{children:c.jsx(Sn,{children:c.jsx("use",{href:`${te}#icon-linkedin`})})})]})}),c.jsx(On,{children:"QA Engineer"})]})]})})]})]})}),r):null};du.propTypes={handleClose:on.func.isRequired,isModalOpen:on.bool.isRequired};function jw(e,t){if(t===e)return!1;const n=Object.values(t),r=Object.values(e);if(n.length!==r.length||n.some((o,a)=>o!==r[a]))return!0;const i=Object.keys(e);return Object.keys(t).some((o,a)=>o!==i[a])}function Cw(e,t){return e.matches[t]=!1,e.mediaQueries[t]={},e}function Hm(e){const t=Object.keys(e);return typeof window>"u"?t.reduce(Cw,{mediaQueries:{},matches:{}}):t.reduce((n,r)=>{const i=window.matchMedia(e[r]);return n.mediaQueries[r]=i,n.matches[r]=i.matches,n},{mediaQueries:{},matches:{}})}function Ow(e,t){function n(r,i){return r[i]=e.mediaQueries[i].matches,r}switch(t.type){case"updateMatches":return{matches:Object.keys(e.mediaQueries).reduce(n,{}),mediaQueries:e.mediaQueries};case"setQueries":return Hm(t.queries)}}function Ew(e){const t=R.useRef(e),[n,r]=R.useReducer(Ow,e,Hm);R.useEffect(()=>{jw(e,t.current)&&(r({type:"setQueries",queries:e}),t.current=e)},[e]);function i(){return r({type:"updateMatches"})}function o(s){const u=i;return typeof s.addListener<"u"?s.addListener(u):s.addEventListener("change",u),u}R.useEffect(()=>{const s=Object.values(n.mediaQueries),u=s.map(o);function p(h,g){typeof h.addListener<"u"?h.removeListener(u[g]):h.removeEventListener("change",u[g])}return()=>{s.forEach(p)}},[n.mediaQueries]);const{matches:a}=n,l=R.useMemo(()=>Object.values(a),[a]);return{matches:a,matchesAny:l.some(Boolean),matchesAll:l.length>0&&l.every(Boolean)}}function Pw(e){return Ew(Mw(e)).matchesAll}const Xs={};function Mw(e){return Xs[e]===void 0&&(Xs[e]={default:e}),Xs[e]}const $m=({handleSetActiveLink:e})=>{const[t,n]=R.useState(!1),r=Pw("(min-width: 1440px) and (max-width: 1919px)"),i=()=>{n(!0)},o=()=>{n(!1)};return c.jsxs(A1,{id:"footer",children:[c.jsxs(I1,{className:"container",children:[c.jsx("a",{href:"#home",children:c.jsx("svg",{width:"227",height:"40",children:c.jsx("use",{href:`${qo}#logo-white`})})}),r?c.jsxs(c.Fragment,{children:[c.jsxs(of,{children:[c.jsx(Kt,{href:"#home",onClick:a=>e("home",a),children:"Головна"}),c.jsx(Kt,{href:"#aboutUs",onClick:a=>e("aboutUs",a),children:"Про нас"}),c.jsx(Kt,{href:"#services",onClick:a=>e("services",a),children:"Послуги"}),c.jsx(Kt,{href:"#mentoring",onClick:a=>e("mentoring",a),children:"Менторство"}),c.jsx(Kt,{href:"#projects",onClick:a=>e("projects",a),children:"Проєкти"})]}),c.jsx(rf,{onClick:i,children:"created by GoIT students"}),c.jsx(du,{handleClose:o,isModalOpen:t})]}):c.jsxs(c.Fragment,{children:[c.jsx(rf,{onClick:i,children:"created by GoIT students"}),c.jsx(du,{handleClose:o,isModalOpen:t}),c.jsxs(of,{children:[c.jsx(Kt,{href:"#home",onClick:a=>e("home",a),children:"Головна"}),c.jsx(Kt,{href:"#aboutUs",onClick:a=>e("aboutUs",a),children:"Про нас"}),c.jsx(Kt,{href:"#services",onClick:a=>e("services",a),children:"Послуги"}),c.jsx(Kt,{href:"#mentoring",onClick:a=>e("mentoring",a),children:"Менторство"}),c.jsx(Kt,{href:"#projects",onClick:a=>e("projects",a),children:"Проєкти"})]})]}),c.jsxs(L1,{children:[c.jsxs(R1,{children:[c.jsx(z1,{href:"https://www.facebook.com/profile.php?id=61551346490841",target:"_blank",rel:"noopener noreferrer",children:c.jsx("svg",{width:"32",height:"32",children:c.jsx("use",{href:`${qo}#facebook`})})}),c.jsx("a",{href:"https://www.instagram.com/healthymanagement_ua/",target:"_blank",rel:"noopener noreferrer",children:c.jsx("svg",{width:"40",height:"40",children:c.jsx("use",{href:`${qo}#instagram`})})})]}),c.jsxs(D1,{children:[c.jsx(af,{href:"mailto:healthy.managements@gmail.com",children:"healthy.managements@gmail.com"}),c.jsx(af,{href:"tel:+380673160556",children:"+380 673 160 556"})]})]})]}),c.jsx(F1,{children:c.jsx(N1,{children:"© 2023 healthy management. All rights reserved"})})]})};$m.propTypes={handleSetActiveLink:on.func.isRequired};const ea="/healthy-management-project/assets/symbol-defs--0zN9DRa.svg",Tw=P.header`
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
`,_w=P.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
`,Aw=P.nav`
  @media screen and (min-width: 1440px) {
    display: flex;
    gap: 40px;
    align-items: center;
  }

  @media screen and (min-width: 1920px) {
  }
`,Iw=P.a`
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
`,Lw=P.a`
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
`,Rw=P.svg`
  stroke: black;
  width: 40px;
  height: 40px;

  @media screen and (min-width: 768px) {
    width: 70px;
  }
`,zw=P.button`
  border: none;
  padding: 0;
  margin: 0;
  text-decoration: none;
  font-family: inherit;
  font-size: 100%;
  cursor: pointer;
  background: none;
`,Dw=P.div`
  position: fixed;
  z-index: 1200;
  top: 0;
  left: 0;
  width: 100%;
`,Fw=P.div`
  display: flex;
  width: 100%;
  padding-top: 32px;
  padding-bottom: 32px;
  justify-content: space-between;
  align-items: center;
  border-bottom: 1px solid var(--system-default-20, #dedede);
  background: var(--system-default-10, #f8f8f8);
`,Nw=P.a`
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
`,Vw=P.nav`
  position: fixed;
  left: 0;
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
`,Uw=P.a`
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
`,Ww=P.button`
  border: none;
  padding: 0;
  margin: 0;
  text-decoration: none;
  font-family: inherit;
  font-size: 100%;
  cursor: pointer;
  background: none;
`,Bw=[{id:"home",label:"Головна"},{id:"aboutUs",label:"Про нас"},{id:"services",label:"Послуги"},{id:"mentoring",label:"Менторство"},{id:"projects",label:"Проєкти"}],mf=({name:e,stroke:t})=>c.jsx("svg",{width:40,height:40,stroke:t,children:c.jsx("use",{href:`${ea}#${e}`})}),Hw=document.getElementById("modalMobail"),Ym=({onClose:e,handleSetActiveLink:t})=>no.createPortal(c.jsx(Dw,{children:c.jsxs("div",{className:"container",children:[c.jsxs(Fw,{children:[c.jsx("a",{href:"#home",children:c.jsx(mf,{name:"icon-g10"})}),c.jsx(Nw,{href:"#contact",onClick:n=>{e(),t("contact",n)},children:"Контакт"}),c.jsx(Ww,{type:"button",onClick:()=>e(),children:c.jsx(mf,{name:"icon-close",stroke:"var(--primary-black)"})})]}),c.jsx(Vw,{children:Bw.map(({id:n,label:r})=>c.jsx(Uw,{href:`#${n}`,onClick:i=>{e(),t(n,i)},children:r},n))})]})}),Hw);Ym.propTypes={onClose:on.func.isRequired};const $w=[{id:"home",label:"Головна"},{id:"aboutUs",label:"Про нас"},{id:"services",label:"Послуги"},{id:"mentoring",label:"Менторство"},{id:"projects",label:"Проєкти"}],Qm=({handleSetActiveLink:e})=>{const[t,n]=R.useState("home"),[r,i]=R.useState(!1),o=zn.useMediaQuery({query:"(min-width: 768px) and (max-width: 1439px)"}),a=zn.useMediaQuery({query:"(max-width: 1439px)"}),l=zn.useMediaQuery({query:"(min-width: 1440px)"}),s=()=>i(!r),u=()=>{const h=["home","aboutUs","services","mentoring","projects","contact"].find(g=>{const v=document.getElementById(g);if(v){const x=v.getBoundingClientRect();return x.top<=120&&x.bottom>=120}return v});h&&n(h)};return R.useEffect(()=>(r?document.body.style.overflow="hidden":document.body.style.overflow="auto",window.addEventListener("scroll",u),()=>window.removeEventListener("scroll",u)),[r]),c.jsxs(Tw,{children:[c.jsx("div",{className:"container",children:c.jsxs(_w,{children:[(a||l)&&c.jsx("a",{href:"#home",children:c.jsx("svg",{width:l?"227":"40",height:"40",children:c.jsx("use",{href:l?`${te}#logo-black`:`${ea}#icon-g10`})})}),l&&c.jsx(Aw,{children:$w.map(p=>c.jsx(Iw,{href:`#${p.id}`,className:t===p.id?"active":"",onClick:h=>e(p.id,h),children:p.label},p.id))}),c.jsx(Lw,{href:"#contact",className:t==="contact"?"active":"",onClick:p=>e("contact",p),children:"Контакт"}),(a||o)&&c.jsx(zw,{type:"button",onClick:s,children:c.jsx(Rw,{children:c.jsx("use",{href:o?`${ea}#icon-menuburgerhorizontaltablet`:`${ea}#icon-menuburger`})})})]})}),a&&r&&c.jsx(Ym,{onClose:s,handleSetActiveLink:e})]})};Qm.propTypes={handleSetActiveLink:on.func.isRequired};const Yw="/healthy-management-project/assets/hero1x-6AVSlzud.webp",Qw="/healthy-management-project/assets/hero@2x-N6Dvbfg6.jpg",Xw="/healthy-management-project/assets/hero1x-d4IOBsel.jpg",Kw="/healthy-management-project/assets/hero@2x-qDoBpvI0.jpg",Jw="/healthy-management-project/assets/hero@1x-gjNVfS_G.jpg",Zw="/healthy-management-project/assets/hero@2x-xeAfw2Nx.jpg",Gw="/healthy-management-project/assets/hero@1x-T7izVw7M.jpg",qw="/healthy-management-project/assets/hero@2x-MzaNEgZc.jpg",eb=P.section`
  background-repeat: no-repeat;
  background-position: center;
  background-image: url(${Xw});
  background-size: cover;
  margin-top: 120px;
  padding-top: 40px;
  padding-bottom: 40px;

  @media (min-device-pixel-ratio: 2),
    (min-resolution: 192dpi),
    (min-resolution: 2dppx) {
    background-image: url(${Kw});
  }

  @media screen and (min-width: 768px) {
    background-image: url(${Jw});
    margin-top: 120px;
    padding-top: 234px;
    padding-bottom: 234px;

    @media (min-device-pixel-ratio: 2),
      (min-resolution: 192dpi),
      (min-resolution: 2dppx) {
      background-image: url(${Zw});
    }
  }

  @media screen and (min-width: 1440px) {
    background-image: url(${Gw});
    margin-top: 120px;
    padding-top: 236px;
    padding-bottom: 236px;

    @media (min-device-pixel-ratio: 2),
      (min-resolution: 192dpi),
      (min-resolution: 2dppx) {
      background-image: url(${qw});
    }
  }

  @media screen and (min-width: 1920px) {
    background-image: url(${Yw});

    margin-top: 120px;
    padding-top: 296px;
    padding-bottom: 296px;

    @media (min-device-pixel-ratio: 2),
      (min-resolution: 192dpi),
      (min-resolution: 2dppx) {
      background-image: url(${Qw});
    }
  }
`,tb=P.h1`
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
`,nb=P.h3`
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
`,rb=P.ul`
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
`,ib=P.li`
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
`,ob=P.div`
  display: flex;
  flex-direction: column;
  gap: 24px;

  @media screen and (min-width: 768px) {
    flex-direction: row;
  }
`,Xm=P.a`
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
`,ab=P(Xm)`
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
`,sb=P(Xm)`
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
`,lb=["медичний менеджмент і маркетинг,","програми управління здоров'ям для підприємств та бізнесу,","менторство"],fu=({type:e,children:t,href:n})=>e==="contact"?c.jsx(ab,{href:n,children:t}):e==="services"?c.jsx(sb,{href:n,children:t}):null;fu.propTypes={type:on.oneOf(["contact","services"]).isRequired,children:on.node.isRequired,href:on.string.isRequired};const ub=()=>c.jsx(eb,{id:"home",children:c.jsxs("div",{className:"container",children:[c.jsx(tb,{children:"Бізнес-партнер з розвитку та комунікацій здорового менеджменту"}),c.jsx(nb,{children:"Будуємо ефективні стратегії здорового менеджменту для медичних брендів:"}),c.jsx(rb,{children:lb.map((e,t)=>c.jsx(ib,{children:e},t))}),c.jsxs(ob,{children:[c.jsx(fu,{type:"contact",href:"#contact",children:"Консультація"}),c.jsx(fu,{type:"services",href:"#services",children:"Послуги"})]})]})}),cb=P.section`
  padding-top: 40px;
  padding-bottom: 40px;

  @media screen and (min-width: 1920px) {
    padding-top: 80px;
    padding-bottom: 80px;
  }
`,db=P.div`
  max-width: 100%;
  border-radius: 16px;
  padding: 24px;
  background: var(--background-bluedark);

  @media screen and (min-width: 768px) {
    padding: 40px;
  }

  @media screen and (min-width: 1920px) {
    padding: 80px;
  }
`,fb=P.h2`
  color: var(--system-default-10);
  font-size: 24px;
  font-weight: 600;
  line-height: 32px;
  margin-bottom: 24px;

  @media screen and (min-width: 768px) {
    font-size: 32px;
    line-height: 40px;
    margin-bottom: 16px;
  }

  @media screen and (min-width: 1920px) {
    font-size: 48px;
    line-height: 56px;
    margin-bottom: 40px;
  }
`,pb=P.ul`
  display: flex;
  padding: 0;
  flex-wrap: wrap;
  gap: 24px;
`,Co=P.li`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  gap: 16px;

  @media screen and (min-width: 768px) {
    flex-direction: row;
    padding: 24px;
    height: 159px;
  }

  @media screen and (min-width: 1920px) {
    flex-basis: calc((100% - 24px) / 2);
    padding: 40px;
    gap: 24px;
    height: 200px;
  }
`,Oo=P.svg`
  width: 64px;
  height: 64px;

  @media screen and (min-width: 768px) {
    width: 80px;
    height: 80px;
  }
`,Eo=P.div`
  display: flex;
  justify-content: center;
  align-items: center;
  width: 64px;
  height: 64px;

  @media screen and (min-width: 768px) {
    width: 80px;
    height: 80px;
  }
`,Po=P.div`
  display: flex;
  flex-direction: column;
`,Mo=P.h3`
  width: 100%;
  font-weight: 600;
  font-size: 16px;
  line-height: 24px;
  margin-bottom: 8px;
  color: var(--system-default-10);

  @media screen and (min-width: 768px) {
    font-size: 20px;
    line-height: 28px;
  }

  @media screen and (min-width: 1920px) {
    font-size: 24px;
    line-height: 32px;
    margin-bottom: 16px;
  }
`,To=P.p`
  color: var(--system-default-10);
  font-size: 14px;
  font-weight: 500;
  line-height: 20px;

  @media screen and (min-width: 768px) {
    font-size: 15px;
    line-height: 22px;
  }

  @media screen and (min-width: 1920px) {
    max-width: 542px;
    font-size: 16px;
    line-height: 24px;
  }
`,hb=()=>c.jsx(cb,{className:"container",children:c.jsxs(db,{children:[c.jsx(fb,{children:"Чому обирають нас"}),c.jsxs(pb,{children:[c.jsxs(Co,{children:[c.jsx(Eo,{children:c.jsx(Oo,{children:c.jsx("use",{href:`${te}#hands-shake`})})}),c.jsxs(Po,{children:[c.jsx(Mo,{children:"Надійне партнерство та менторство"}),c.jsx(To,{children:"Ми налаштовані на довгострокове партнерство і дбаємо про комфортні та чесні комунікації"})]})]}),c.jsxs(Co,{children:[c.jsx(Eo,{children:c.jsx(Oo,{children:c.jsx("use",{href:`${te}#setting`})})}),c.jsxs(Po,{children:[c.jsx(Mo,{children:"Індивідуальний підхід"}),c.jsx(To,{children:"Кожен бізнес і послуга мають свої особливості. Ми занурюємося у ваш бізнес і пропонуємо індивідуальні стратегії, які допоможуть вам досягти успіху"})]})]}),c.jsxs(Co,{children:[c.jsx(Eo,{children:c.jsx(Oo,{children:c.jsx("use",{href:`${te}#icon-lamp`})})}),c.jsxs(Po,{children:[c.jsx(Mo,{children:"Експертні послуги"}),c.jsx(To,{children:"Ми опираємося на передовий досвід і використовуємо як класичні, так і сучасні підходи для досягнення поставленого результату"})]})]}),c.jsxs(Co,{children:[c.jsx(Eo,{children:c.jsx(Oo,{children:c.jsx("use",{href:`${te}#icon-puzzle`})})}),c.jsxs(Po,{children:[c.jsx(Mo,{children:"Комплексні рішення"}),c.jsx(To,{children:"Наша експертиза дозволяє пропонувати комплексні рішення для ефективної співпраці"})]})]})]})]})}),mb="/healthy-management-project/assets/pic_mentorstvo1x-R5bIGNq0.webp",gb="/healthy-management-project/assets/pic_mentorstvo2x-k6d-_Us1.jpg",xb="/healthy-management-project/assets/pic_mentorstvo1x-DCmM7Ygj.jpg",vb="/healthy-management-project/assets/mob_mentor1x-_de1iGBc.webp",yb="/healthy-management-project/assets/mob_mentor@2x-oAKhVwNJ.jpg",wb="/healthy-management-project/assets/mob_mentor1x-1WPWjsx0.jpg",bb="/healthy-management-project/assets/pic_mentorstvo_768_1x-Px4J1LUl.jpg",kb="/healthy-management-project/assets/pic_mentorstvo_768_1x-gkJzTmk_.webp",Sb="/healthy-management-project/assets/pic_mentorstvo_768@2x-S5qjgsHl.webp",jb="/healthy-management-project/assets/pic_mentorstvo_1440_1x-WjllDGeR.webp",Cb="/healthy-management-project/assets/pic_mentorstvo_1440@2x-O-l22q9a.webp",Ob="/healthy-management-project/assets/pic_mentorstvo_1440_1x-7OpZfadC.jpg",Eb=P.section`
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
`,Pb=P.div`
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
`,Mb=P.div`
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
`,Tb=P.div`
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
`,_b=P.h2`
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
`,Ab=P.h3`
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
`,gf=P.h3`
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
`,Ib=P.div`
  display: flex;
  flex-direction: column;
  gap: 24px;
  min-width: 320px;

  @media screen and (min-width: 1920px) {
    gap: 20px;
    margin-bottom: 56px;
  }
`,xf=P.p`
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
`,Lb=P.a`
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
`,Rb=P.div`
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
`,zb=P.div`
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
`,Db=P.ul`
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
`,vf=P.ul`
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
`,gr=P.li`
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
`,xr=P.li`
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
`,Fb=()=>c.jsxs(Eb,{id:"mentoring",className:"container",children:[c.jsxs(Pb,{children:[c.jsxs("div",{children:[c.jsx(K,{minWidth:1920,children:c.jsx("img",{srcSet:`${mb} 1x, ${gb} 2x`,sizes:"(min-width: 1920px) 1920px",src:xb,alt:"Ольга Поліщук - ваш ментор в медичній галузі"})}),c.jsx(K,{minWidth:300,maxWidth:767,children:c.jsx("img",{srcSet:`${vb} 1x, ${yb} 2x`,sizes:"(min-width: 375px) 375px",src:wb,alt:"Ольга Поліщук - ваш ментор в медичній галузі"})}),c.jsx(K,{minWidth:768,maxWidth:1439,children:c.jsx("img",{srcSet:`${kb} 1x, ${Sb} 2x`,sizes:"(min-width: 768px) 768px",src:bb,alt:"Ольга Поліщук - ваш ментор в медичній галузі"})}),c.jsx(K,{minWidth:1440,maxWidth:1919,children:c.jsx("img",{srcSet:`${jb} 1x, ${Cb} 2x`,sizes:"(min-width: 1440px) 100vw (max-width: 1919px) 100vw",src:Ob,alt:"Ольга Поліщук - ваш ментор в медичній галузі"})})]}),c.jsxs(Mb,{children:[c.jsx(_b,{children:"Менторство"}),c.jsxs(Ib,{children:[c.jsxs(xf,{children:[c.jsx("b",{children:"Менторство в медичній галузі"})," - почути іншу думку, підтвердити власні гіпотези, зрозуміти вектор розвитку, отримати підтримку та пораду з питань менеджменту і медичного маркетингу"]}),c.jsxs(xf,{children:[c.jsx("b",{children:"Менторство"})," - це про взаємодію та чесну комунікацію, про спільні цінності та готовність до росту, про надійне партнерство та довіру"]})]}),c.jsx(Lb,{href:"#contact",children:"Дізнатися вартість"})]})]}),c.jsx("div",{children:c.jsxs(Rb,{children:[c.jsxs(Tb,{children:[c.jsx(Ab,{children:"Про що це?"}),c.jsxs(Db,{children:[c.jsx(gr,{children:c.jsx("p",{children:"Про прагнення почути чесну іншу думку/та або підтвердити власні гіпотези для власника/керівника"})}),c.jsx(gr,{children:c.jsx("p",{children:"Про бізнес-процеси та їх ефективність"})}),c.jsx(gr,{children:c.jsx("p",{children:"Про вектори розвитку бізнесу або проєкту"})}),c.jsx(gr,{children:c.jsx("p",{children:"Про практичний інструментарій для впровадження змін"})}),c.jsx(gr,{children:c.jsx("p",{children:"Про маркетинг, сервіс та комунікації в медичних бізнесах"})}),c.jsx(gr,{children:c.jsx("p",{children:"Про здоров'я працівників та стратегії підвищенння ефективності бізнесу"})})]})]}),c.jsxs(zb,{children:[c.jsx(gf,{children:"Для кого"}),c.jsxs(vf,{children:[c.jsx(xr,{children:c.jsx("p",{children:"Лідерам, які прагнуть змін"})}),c.jsx(xr,{children:c.jsx("p",{children:"Власникам, які хочуть отримати незалежку експертну думку"})}),c.jsx(xr,{children:c.jsx("p",{children:"Керівникам та маркетологам, яким потрібна підтримка"})}),c.jsx(xr,{children:c.jsx("p",{children:"Лікарям, яким важливо отримати пораду"})})]}),c.jsx(gf,{children:"Формат"}),c.jsxs(vf,{children:[c.jsx(xr,{children:c.jsx("p",{children:"Індивідуальна ментор-сесія (від 1 години)"})}),c.jsx(xr,{children:c.jsx("p",{children:"Персональний супровід на декілька місяців"})})]})]})]})})]}),Km=P.section`
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
`,Jm=P.div`
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
`,Nb=P.div`
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
`,_o=P.div`
  position: relative;

  @media screen and (min-width: 1920px) {
    min-width: 370px;
  }
`,Zm=P.div`
  display: flex;
  flex-direction: column;

  @media screen and (min-width: 1290px) {
    gap: 40px;
    margin-bottom: 40px;
    flex-direction: row;
  }
`,Gm=P.div`
  min-width: 280px;
  gap: 16px;
  display: flex;
  flex-direction: column;

  @media screen and (min-width: 1920px) {
    min-width: 740px;
  }
`,qm=P.div`
  @media screen and (min-width: 768px) {
    padding: 24px;
  }
`,Ao=P.p`
  display: flex;
  font-size: 16px;
  font-weight: 600;
  line-height: 1.5;
  min-width: 200px;

  position: absolute;
  text-align: center;
  top: 45%;
  left: 50%;
  transform: translate(-50%, -50%);
  z-index: 2;
  color: var(--typography-white);

  @media screen and (min-width: 768px) {
    font-size: 15px;
    left: 42%;
  }

  @media screen and (min-width: 1920px) {
    justify-content: flex-start;
    width: 100%;
    font-size: 16px;
    line-height: 1.4;
    top: 48%;
    left: 60%;
  }
`,eg=P.h2`
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
`,tg=P.h3`
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
`,ng=P.p`
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
`,rg=P.p`
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
`,ig=P.a`
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
`,og=P.p`
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
`,ag=P.ul`
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
`,Vt=P.li`
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
`,Et=P.svg`
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
`,Vb=()=>c.jsx(Km,{className:"container",children:c.jsxs(Jm,{children:[c.jsxs(Zm,{children:[c.jsxs(Gm,{children:[c.jsx(eg,{children:"Індивідуальна ментор сесія"}),c.jsx(ng,{children:"Вирішення вашого індивідуального запиту"}),c.jsx(rg,{children:"від 1 години"}),c.jsx(ig,{href:"#contact",children:"Замовити послугу"})]}),c.jsxs(qm,{children:[c.jsx(tg,{children:"Питання, з якими можете звернутися"}),c.jsxs(ag,{children:[c.jsx(Vt,{children:"Незалежна думка щодо маркетингу та розвитку"}),c.jsx(Vt,{children:"Порада по створенню відділу маркетингу або оцінка існуючої структури"}),c.jsx(Vt,{children:"Питання по роботі з підрядниками"}),c.jsx(Vt,{children:"Порада щодо оптимізації бізнес-процесів"}),c.jsx(Vt,{children:"Як вірно оцінити ефективність маркетингових дій"}),c.jsx(Vt,{children:"Які інструменти комунікацій використовувати"}),c.jsxs(Vt,{children:["Особисте питання по менеджменту та розвитку з питань управління"," ","здоров'ям"]})]})]})]}),c.jsx(og,{children:"Шлях проведення менторської сесії"}),c.jsxs(Nb,{children:[c.jsxs(_o,{children:[c.jsx(K,{minWidth:330,maxWidth:767,children:c.jsx(Et,{children:c.jsx("use",{href:`${te}#icon-rectangle-mob`})})}),c.jsx(K,{minWidth:768,maxWidth:1439,children:c.jsx(Et,{children:c.jsx("use",{href:`${te}#icon-rectangle-tab`})})}),c.jsx(K,{minWidth:1440,children:c.jsx(Et,{children:c.jsx("use",{href:`${te}#icon-rectangle`})})}),c.jsx(Ao,{children:"Заповнення брифу"})]}),c.jsxs(_o,{children:[c.jsx(K,{minWidth:330,maxWidth:767,children:c.jsx(Et,{children:c.jsx("use",{href:`${te}#icon-rectangle-mob`})})}),c.jsx(K,{minWidth:768,maxWidth:1439,children:c.jsx(Et,{children:c.jsx("use",{href:`${te}#icon-rectangle-tab`})})}),c.jsx(K,{minWidth:1440,children:c.jsx(Et,{children:c.jsx("use",{href:`${te}#icon-rectangle`})})}),c.jsx(Ao,{children:"Діагностика ситуації"})]}),c.jsxs(_o,{children:[c.jsx(K,{minWidth:330,maxWidth:767,children:c.jsx(Et,{children:c.jsx("use",{href:`${te}#icon-rectangle-mob`})})}),c.jsx(K,{minWidth:768,maxWidth:1439,children:c.jsx(Et,{children:c.jsx("use",{href:`${te}#icon-rectangle-tab`})})}),c.jsx(K,{minWidth:1440,children:c.jsx(Et,{children:c.jsx("use",{href:`${te}#icon-rectangle`})})}),c.jsx(Ao,{children:"Проведення сесії"})]}),c.jsxs(_o,{children:[c.jsx(K,{minWidth:330,maxWidth:767,children:c.jsx(Et,{children:c.jsx("use",{href:`${te}#icon-rectangle-mob`})})}),c.jsx(K,{minWidth:768,maxWidth:1439,children:c.jsx(Et,{children:c.jsx("use",{href:`${te}#icon-rectangle-tab`})})}),c.jsx(K,{minWidth:1440,children:c.jsx(Et,{children:c.jsx("use",{href:`${te}#icon-rectangle`})})}),c.jsx(Ao,{children:"Рекомендації"})]})]})]})}),Ub=P.div`
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
`,it=P.svg`
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
`,ui=P.div`
  position: relative;
  height: 60px;

  @media screen and (min-width: 1440px) {
    width: 220px;
  }

  @media screen and (min-width: 1920px) {
    min-width: 285px;
  }
`;P.div`
  min-width: 740px;
  display: flex;
  flex-direction: column;
  gap: 16px;
`;const ci=P.p`
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
`,Wb=()=>c.jsx(Km,{className:"container",children:c.jsxs(Jm,{children:[c.jsxs(Zm,{children:[c.jsxs(Gm,{children:[c.jsx(eg,{children:"Персональний супровід"}),c.jsx(ng,{children:"Пропрацьовуємо ваші запити та досягаємо посавлених цілей"}),c.jsx(rg,{children:"від 2 місяців тісної взаємодії"}),c.jsx(ig,{href:"#contact",children:"Замовити послугу"})]}),c.jsxs(qm,{children:[c.jsx(tg,{children:"Питання, з якими можете звернутися"}),c.jsxs(ag,{children:[c.jsx(Vt,{children:"Зануритись в бізнес-процеси та зрозуміти, де є точки зростання"}),c.jsx(Vt,{children:"Зрозуміти що таке маркетинг та як він працює у вашому бізнесі"}),c.jsx(Vt,{children:"Супровід розробки та впровадження стратегій"}),c.jsx(Vt,{children:"Особисті питання по медичному менеджменту, маркетингу та розвитку, управління здоров'ям"})]})]})]}),c.jsx(og,{children:"Шлях проведення менторського супроводу"}),c.jsxs(Ub,{children:[c.jsxs(ui,{children:[c.jsx(K,{minWidth:330,maxWidth:767,children:c.jsx(it,{children:c.jsx("use",{href:`${te}#icon-rectangle-mob`})})}),c.jsx(K,{minWidth:768,maxWidth:1439,children:c.jsx(it,{children:c.jsx("use",{href:`${te}#icon-rectangle-tab`})})}),c.jsx(K,{minWidth:1440,children:c.jsx(it,{children:c.jsx("use",{href:`${te}#icon-rectangle2`})})}),c.jsx(ci,{children:"Заповнення брифу"})]}),c.jsxs(ui,{children:[c.jsx(K,{minWidth:330,maxWidth:767,children:c.jsx(it,{children:c.jsx("use",{href:`${te}#icon-rectangle-mob`})})}),c.jsx(K,{minWidth:768,maxWidth:1439,children:c.jsx(it,{children:c.jsx("use",{href:`${te}#icon-rectangle-tab`})})}),c.jsx(K,{minWidth:1440,children:c.jsx(it,{children:c.jsx("use",{href:`${te}#icon-rectangle2`})})}),c.jsx(ci,{children:"Діагностика ситуації"})]}),c.jsxs(ui,{children:[c.jsx(K,{minWidth:330,maxWidth:767,children:c.jsx(it,{children:c.jsx("use",{href:`${te}#icon-rectangle-mob`})})}),c.jsx(K,{minWidth:768,maxWidth:1439,children:c.jsx(it,{children:c.jsx("use",{href:`${te}#icon-rectangle-tab`})})}),c.jsx(K,{minWidth:1440,children:c.jsx(it,{children:c.jsx("use",{href:`${te}#icon-rectangle2`})})}),c.jsx(ci,{children:"Визначення зон росту"})]}),c.jsxs(ui,{children:[c.jsx(K,{minWidth:330,maxWidth:767,children:c.jsx(it,{children:c.jsx("use",{href:`${te}#icon-rectangle-mob`})})}),c.jsx(K,{minWidth:768,maxWidth:1439,children:c.jsx(it,{children:c.jsx("use",{href:`${te}#icon-rectangle-tab`})})}),c.jsx(K,{minWidth:1440,children:c.jsx(it,{children:c.jsx("use",{href:`${te}#icon-rectangle2`})})}),c.jsx(ci,{children:"Менторинг"})]}),c.jsxs(ui,{children:[c.jsx(K,{minWidth:330,maxWidth:767,children:c.jsx(it,{children:c.jsx("use",{href:`${te}#icon-rectangle-mob`})})}),c.jsx(K,{minWidth:768,maxWidth:1439,children:c.jsx(it,{children:c.jsx("use",{href:`${te}#icon-rectangle-tab`})})}),c.jsx(K,{minWidth:1440,children:c.jsx(it,{children:c.jsx("use",{href:`${te}#icon-rectangle2`})})}),c.jsx(ci,{children:"Рекомендації"})]})]})]})}),gs=()=>{const e=zn.useMediaQuery({maxWidth:767}),t=zn.useMediaQuery({minWidth:768,maxWidth:1439}),n=zn.useMediaQuery({minWidth:1440,maxWidth:1919}),r=zn.useMediaQuery({minWidth:1920});return e&&"mobile"||t&&"tablet"||n&&"desktop"||r&&"largeDesktop"},Bb="/healthy-management-project/assets/denta_derm1x-JWCICTe_.webp",Hb="/healthy-management-project/assets/medialt1x-5LMkh0v8.webp",$b="/healthy-management-project/assets/cures1x--AoJBOWJ.webp",Yb="/healthy-management-project/assets/clinic1x-YgK5Wnno.webp",Qb="/healthy-management-project/assets/kmklam1x-FlPeEOTs.webp",Xb="/healthy-management-project/assets/symmetrica1x-hhcOddzB.webp",Ks=[{image:Bb,category:"DentaDerm",title:"Діагностика бізнес-процесів, маркетингу, сервісу, розробка стратегії розвитку, менторство",about:["Діагностика бізнес-процесів та маркетингу","Стратегія розвитку","Підбір команди маркетингу","Менторство"],details:[{title:"Завдання:",about:["Розробка стратегії розвитку","Розробка нового сайту клініки","Пошук команди маркетингу"],comment:"Дії в результаті розробки стратегії розвитку передбачали роботу над проєктом в новому позиціонуванні,  пошук зовнішньої та внутрішньої команди для реалізації нового сайту, ведення соцмереж"},{title:"В результаті роботи над проєктом:",about:["Розроблені вектори розвитку","Розроблений та впроваджений новий сайт","Підібрана команда маркетингового супроводу"],comment:"В результаті співпраці партнер отримав комплексне бачення просування, сформована команда маркетингу"}]},{image:Hb,category:"Medialt",title:"Діагностика бізнес-процесів, маркетингу, сервісу, розробка стратегії розвитку, менторство",about:["Аудит ринку та конкурентів","Аудит маркетингу та сервісу","Розробка стратегії розвитку"],details:[{title:"Завдання:",about:["Розробка стратегії розвитку"]},{title:"Робота над задачою була розділена на два етапи:",about:["Аналіз конкурентів, ринку, виявлення зовнішніх можливостей та загроз","Аналіз сервісу медичного центру, аналіз роботи контакт центру, маркетингу, наявної бази пацієнтів та внутрішніх бізнес-процесів"]},{title:"В результаті комплексного аудиту підготували стратегію розвитку, яка передбачала рекомендації щодо:",about:["Управління маркетингом","Оптимізації роботи сервісу","Можливості МІС","Етапи розвитку напрямків та клініки вцілому"],comment:"В результаті співпраці - за 5 місяців ріст обороту в два рази"}]},{image:$b,category:"Cures",title:"Автоматизація комунікації з пацієнтами",about:["Створення та запуск 20 чат-ботів для клінік","Проведення консультацій та аудитів комунікацій клінік з пацієнтами","Розробка персональних протоколів спілкування з пацієнтами"],details:[{title:"Завдання:",about:["Автоматизація комунікації з пацієнтами"]},{title:"В результаті роботи над проєктом:",about:["Розвиток проєкту по створенню чат-ботів для медичних центрів","Розробка протоколів супроводу та опитувальників для клінік","Проведення зустрічей та комунікацій з клініками","Розробка алгоритмів та запуск чат-ботів"],comment:"В результаті співпраці над проєктом запуск 20 чат-ботів для медичних центрів"}]},{image:Yb,category:"Клініка ім. ак. Юрія Спіженка",title:"Менторство, діагностика бізнес-процесів, маркетингу та сервісу, розробка стратегії розвитку",about:["Діагностика бізнес-процесів","Аудит маркетингу та сервісу","Розробка стратегії розвитку та маркетингу","Розробка та впровадження комунікаційної стратегії","Ведення маркетингових активностей "],details:[{title:"Завдання:",about:["Рестарт клініки у воєний час"]},{title:"Робота над задачею була розділена на три етапи:",about:["Діагностика конкурентів, ринку, виявлення зовнішніх можливостей та загроз","Діагностика сервісу медичного центру, аналіз роботи контакт центру, маркетингу, наявної бази пацієнтів та внутрішніх бізнес-процесів","Розробка та впровадження стратегії маркетингу, комунікації та сервісу, супровід рекламних кампаній, оптимізація бізнес-процесів"],comment:"В результаті співпраці над проєктом: збільшення доходу клініки, вихід на довоєний об’єм"}]},{image:Qb,category:"KMKlab",title:"Діагностика маркетингу, сервісу, бізнес-процесів",about:["Аудит маркетингу та інструментів комунікацій","Аудит сервісу","Розробка рекомендацій щодо розвитку"],details:[{title:"Завдання:",about:["Аудит поточної маркетингової стратегії","Аудит сервісу","Формування рекомендацій по розвитку"]},{title:"Робота над задачою була розділена на два етапи:",about:["Відвідування всіх відділень лабораторій з метою формування рекомендацій по кожній локації","Аналіз поточної ситуації маркетингу та комунікацій, ведення соціальних мереж"],comment:"В результаті співпраці проаналізовано роботу відділу маркетингу та підрядників та надані рекомендації щодо структури відділу, сформовані подальші  кроки  маркетингової  та сервісної стратегії"}]},{image:Xb,category:"Symmetrica",title:"Менторство, діагностика маркетингу, сервісу, бізнес-процесів",about:["Аудит маркетингу та сервісу","Розробка рекомендацій щодо розвитку","Оптимізація бізнес-процесів"],details:[{title:"Завдання:",about:["Діагностика поточної маркетингової діяльності та комунікацій","Аудит сервісу","Аудит роботи підрядників","Формування рекомендацій по розвитку"]},{title:"В результаті роботи над проєктом:",about:["Проведений поточний аудит шляху пацієнта, виявлені точки зростання сервісу","Проаналізовано роботу відділу маркетингу і підрядників та надані рекомендації щодо структури відділу","Надані рекомендації щодо формування подальших кроків маркетингової  та сервісної стратегії","Сформовані конверсійні показники та вектори руху","Надана менторська підтримка"]}]}],Kb=P.section`
  padding-top: 40px;
  padding-bottom: 40px;
  @media screen and (min-width: 1920px) {
    padding-top: 80px;
    padding-bottom: 80px;
  }
`,Jb=P.h2`
  font-size: 24px;
  font-weight: 600;
  line-height: calc(32 / 24);

  margin-bottom: 24px;
  @media screen and (min-width: 768px) {
    font-size: 32px;
    line-height: calc(40 / 32);

    margin-bottom: 16px;
  }
  @media screen and (min-width: 1440px) {
    font-size: 36px;
    line-height: calc(48 / 36);

    margin-bottom: 24px;
  }
  @media screen and (min-width: 1920px) {
    font-size: 48px;
    line-height: calc(56 / 48);

    margin-bottom: 40px;
  }
`,Zb=P.ul`
  display: flex;
  gap: 24px;
  flex-wrap: wrap;
`,Gb=P.span`
  font-weight: 600;
  font-size: 14px;
  line-height: calc(20 / 14);

  margin-top: 14px;
  padding-top: 24px;

  display: flex;
  gap: 16px;
  align-items: center;
  justify-content: center;
  text-align: center;
  @media screen and (min-width: 768px) {
    font-size: 15px;
    line-height: calc(22 / 15);

    margin-top: 13px;
    padding-top: 16px;
  }
`,qb=P.svg`
  fill: currentColor;
  stroke: currentColor;

  width: 24px;
  height: 24px;
`,e2=P.li`
  display: flex;
  flex-direction: column;
  justify-content: space-between;

  width: 100%;
  padding: 24px;
  border-radius: 16px;
  height: 772px;

  box-shadow: 0px 0px 8px 0px rgba(27, 54, 65, 0.08);
  background-color: var(--background-white);

  overflow: hidden;
  position: relative;
  @media screen and (min-width: 768px) {
    padding: 40px;
    height: 676px;

    &:hover > div {
      opacity: 1;
    }
  }
  @media screen and (min-width: 1440px) {
    width: calc((100% - 2 * 24px) / 3);
    height: 808px;
  }
`,t2=P.div`
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
`,n2=P.div`
  display: flex;
  flex-direction: column;
  gap: 16px;
`,r2=P.h4`
  font-weight: 600;

  /* Вариант "project" */
  ${({variant:e})=>e==="project"&&or`
      font-size: 15px;
      line-height: calc(22 / 15);

      @media screen and (min-width: 768px) {
        font-size: 18px;
        line-height: calc(24 / 18);
      }
      @media screen and (min-width: 1440px) {
        font-size: 18px;
        line-height: calc(22 / 18);
      }
      @media screen and (min-width: 1920px) {
        font-size: 20px;
        line-height: calc(28 / 20);
      }
    `}

  /* Вариант "projectDetail" */
  ${({variant:e})=>e==="projectDetail"&&or`
      font-size: 16px;
      line-height: calc(24 / 16);

      @media screen and (min-width: 768px) {
        font-size: 20px;
        line-height: calc(28 / 20);
      }
      @media screen and (min-width: 1440px) {
        font-size: 20px;
        line-height: calc(24 / 20);
      }
      @media screen and (min-width: 1920px) {
        font-size: 24px;
        line-height: calc(32 / 24);
      }
    `}

    /* Вариант "services" */
  ${({variant:e})=>e==="services"&&or`
      font-size: 24px;
      line-height: calc(32 / 24);

      @media screen and (min-width: 768px) {
        font-size: 20px;
        line-height: calc(28 / 20);
      }
      @media screen and (min-width: 1440px) {
        font-size: 20px;
        line-height: calc(24 / 20);
      }
      @media screen and (min-width: 1920px) {
        font-size: 24px;
        line-height: calc(32 / 24);
      }
    `}
`,i2=P.ul`
  display: flex;
  flex-direction: column;
  gap: 8px;

  @media screen and (min-width: 768px) {
    gap: 10px;
  }
  @media screen and (min-width: 1440px) {
    gap: 14px;
  }
  @media screen and (min-width: 1920px) {
    gap: 8px;
  }
`,o2=P.li`
  font-size: 14px;
  line-height: calc(20 / 14);
  font-weight: 500;

  display: flex;
  gap: 8px;

  & > svg {
    max-width: 24px;
    height: 24px;
  }
  @media screen and (min-width: 768px) {
    font-size: 15px;
    line-height: calc(22 / 15);
  }
  @media screen and (min-width: 1440px) {
    font-size: 15px;
    line-height: calc(18 / 15);
  }
  @media screen and (min-width: 1920px) {
    font-size: 16px;
    line-height: calc(24 / 16);
  }

  ${({variant:e})=>e==="services"&&or`
      @media screen and (min-width: 768px) {
        width: 408px;
      }

      @media screen and (min-width: 1440px) {
        width: 100%;
      }
    `}
`,a2=P.p`
  font-size: ${e=>e.additionalComment?"14px":"15px"};
  font-weight: ${e=>e.additionalComment?500:600};
  line-height: calc(
    ${e=>e.additionalComment?20/14:22/15}
  );
  @media screen and (min-width: 768px) {
    font-size: "18px";
    line-height: calc(24 / 18);
  }
  @media screen and (min-width: 1440px) {
    line-height: calc(22 / 18);
  }
  @media screen and (min-width: 1920px) {
    font-size: "20px";
    line-height: calc(28 / 20);
  }
`,s2=P.svg`
  fill: currentColor;
  stroke: currentColor;
`,Sc=({title:e,about:t,comment:n,variant:r,additionalComment:i=!1})=>c.jsxs(n2,{children:[c.jsx(r2,{variant:r,children:e}),c.jsx(i2,{children:t==null?void 0:t.map(o=>c.jsxs(o2,{variant:r,children:[c.jsx(s2,{children:c.jsx("use",{href:te+"#icon-done"})}),o]},o))}),n&&c.jsx(a2,{additionalComment:i,children:n})]}),l2=P.div`
  padding: 24px;
  display: flex;
  gap: 24px;
  flex-direction: column;

  color: var(--background-whitegrey, #f4f4f6);
  @media screen and (min-width: 768px) {
    padding: 40px;
  }
`,u2=P.h3`
  padding: 4px 16px;
  border-radius: 16px;
  background: rgba(244, 244, 246, 0.1);
  font-size: 16px;
  line-height: calc(24 / 16);
  font-weight: 600;
  display: ${e=>e.symbols>20?"block":"inline"};
  width: ${e=>e.symbols>20?"200px":"100%"};

  @media screen and (min-width: 768px) {
    font-size: 20px;
    line-height: calc(28 / 20);
    display: inline;
  }
  @media screen and (min-width: 1440px) {
    line-height: calc(24 / 20);
    display: ${e=>e.symbols>20?"block":"inline"};
  }
  @media screen and (min-width: 1920px) {
    font-size: 24px;
    line-height: calc(32 / 24);
    display: inline;
  }
`,c2=P.svg`
  fill: currentColor;
  stroke: currentColor;

  width: 24px;
  height: 24px;

  position: absolute;
  right: 24px;
  top: 24px;
`,d2=({dataList:{details:e,category:t}})=>{const n=gs();return c.jsxs(l2,{children:[c.jsxs("div",{children:[c.jsx(u2,{symbols:t.length,children:t}),n==="mobile"&&c.jsx(c2,{children:c.jsx("use",{href:te+"#icon-close"})})]}),e.map((r,i)=>c.jsx(Sc,{title:r.title,about:r.about,comment:r.comment,additionalComment:i===0,variant:"projectDetail"},r.title))]})},f2=P.div`
  display: flex;
  flex-direction: column;
  gap: 24px;

  color: var(--typography-bluedark, #1b3641);
`,p2=P.h3`
  font-size: 16px;
  line-height: calc(24 / 16);
  font-weight: 600;

  padding: 4px 16px;
  display: ${e=>e.symbols>20?"block":"inline"};
  border-radius: 16px;
  background: rgba(27, 54, 65, 0.2);
  @media screen and (min-width: 768px) {
    font-size: 20px;
    line-height: calc(28 / 20);
    display: inline;
  }
  @media screen and (min-width: 1440px) {
    line-height: calc(24 / 20);
    display: ${e=>e.symbols>20?"block":"inline"};
  }
  @media screen and (min-width: 1920px) {
    font-size: 24px;
    line-height: calc(32 / 24);
    display: inline;
  }
`,h2=P.img`
  height: 279px;
  width: 100%;
  border-radius: 8px;
  object-fit: cover;
  @media screen and (min-width: 768px) {
    height: 300px;
  }
`,m2=P.span`
  display: block;
  font-size: 14px;
  font-weight: 600;
  line-height: calc(20 / 14);
  text-align: center;
`,g2=({dataList:e})=>{const t=gs(),{category:n,title:r,about:i=[],image:o}=e;return c.jsxs(c.Fragment,{children:[c.jsxs(f2,{children:[c.jsx(h2,{src:o,alt:r}),c.jsx("div",{children:c.jsx(p2,{symbols:n.length,children:n})}),c.jsx(Sc,{title:r,about:i,variant:"project"})]}),t==="mobile"&&c.jsx(m2,{children:"Детальніше"})]})},x2=({item:e})=>{const[t,n]=R.useState(!1),r=gs(),i=()=>{r==="mobile"&&n(o=>!o)};return c.jsxs(e2,{onClick:i,children:[c.jsx(g2,{dataList:e}),c.jsx(t2,{isVisible:t,image:e.image,className:!t&&r==="mobile"?"visually-hidden":"",children:c.jsx(d2,{dataList:e})})]})},v2=()=>{const e=gs(),[t,n]=R.useState(e==="mobile"||e==="tablet"?[...Ks.slice(0,1)]:[...Ks]),r=()=>{t.length>2?n(i=>i.slice(0,1)):n([...Ks])};return c.jsxs(Kb,{id:"projects",className:"container",children:[c.jsx(Jb,{children:"Проєкти"}),c.jsx(Zb,{children:t.map(i=>c.jsx(x2,{item:i},i.category))}),(e==="mobile"||e==="tablet")&&c.jsxs(Gb,{onClick:r,children:[t.length>2?"Менше проєктів":"Більше проєктів",c.jsx(qb,{children:c.jsx("use",{href:te+`${t.length>2?"#icon-arrowup":"#icon-arrowdown"}`})})]})]})},y2=P.section`
  display: flex;
  flex-direction: column;
  padding-top: 40px;
  padding-bottom: 40px;
  gap: 24px;

  @media screen and (min-width: 768px) {
    gap: 16px;
  }

  @media screen and (min-width: 1920px) {
    flex-direction: row;
    gap: 24px;
    padding-top: 80px;
    padding-bottom: 80px;
  }
`,w2=P.div`
  padding: 24px;
  border-radius: 16px;
  background: var(--background-white);

  @media screen and (min-width: 768px) {
    padding: 40px;
    box-shadow: 0px 0px 8px 0px rgba(27, 54, 65, 0.08);
  }

  @media screen and (min-width: 1920px) {
    padding: 80px;
    max-width: 828px;
  }
`,b2=P.div`
  display: flex;
  flex-direction: column;
  gap: 16px;
  margin-bottom: 24px;

  @media screen and (min-width: 768px) {
    margin-bottom: 16px;
  }

  @media screen and (min-width: 1920px) {
    gap: 40px;
    margin-bottom: 40px;
  }
`,k2=P.h2`
  color: var(--typography-bluedark);
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
`,S2=P.h2`
  color: var(--typography-bluedark);
  font-weight: 500;
  font-size: 15px;
  line-height: 22px;

  @media screen and (min-width: 768px) {
    font-size: 18px;
    line-height: 24px;
  }

  @media screen and (min-width: 1920px) {
    font-size: 20px;
    line-height: 28px;
  }
`,j2=P.ul`
  display: flex;
  flex-direction: column;
  gap: 16px;

  @media screen and (min-width: 1920px) {
    gap: 24px;
  }
`,Js=P.li`
  display: flex;
  align-items: center;
  gap: 16px;
  border-radius: 16px;
  background: var(--background-whitegrey);
  padding: 16px;
`,Zs=P.svg`
  width: 24px;
  height: 24px;
  fill: var(--background-white);
  stroke-width: 4px;
`,Gs=P.p`
  color: var(--typography-bluedark);
  width: 207px;
  font-weight: 500;
  font-size: 15px;
  line-height: 22px;

  @media screen and (min-width: 768px) {
    width: 100%;
    font-size: 18px;
    line-height: 24px;
  }

  @media screen and (min-width: 1920px) {
    font-size: 20px;
    line-height: 28px;
  }
`,C2="/healthy-management-project/assets/mob_olga_with_book1x-el2yagUK.webp",O2="/healthy-management-project/assets/mob_olga_with_book@2x-VYbutQBw.jpg",E2="/healthy-management-project/assets/mob_olga_with_book1x-fAO0seCI.jpg",P2="/healthy-management-project/assets/olga_with_book1x-SrpRZlIL.webp",M2="/healthy-management-project/assets/olga_with_book2x-na-cAYtV.webp",T2="/healthy-management-project/assets/olga_with_book1x-o5i5B_Z7.jpg",_2="/healthy-management-project/assets/olga_with_book_768_1x-q5jz0R6v.webp",A2="/healthy-management-project/assets/olga_with_book_768@2x-aSleAY5U.webp",I2="/healthy-management-project/assets/olga_with_book_768_1x-xn58vLYQ.jpg",L2="/healthy-management-project/assets/olga_with_book_1440_1x-Z35ryV4g.webp",yf="/healthy-management-project/assets/olga_with_book_1440@2x-KX3o3AYH.webp",R2=()=>c.jsxs(y2,{className:"container",children:[c.jsxs(w2,{children:[c.jsxs(b2,{children:[c.jsx(k2,{children:"Принципи роботи"}),c.jsx(S2,{children:"Наші принципи роботи полягають у співдії з ціннісними брендами та командами, які готові до чесної співпраці, щоб сприяти досягненню поставлених цілей. Готові ділитися власним досвідом та створювати стратегії здорового менеджменту та розвитку, маркетингу та сервісу"})]}),c.jsxs(j2,{children:[c.jsxs(Js,{children:[c.jsx(Zs,{children:c.jsx("use",{href:`${te}#icon-done-yellow`})}),c.jsx(Gs,{children:"Більше 18 років досвіду в маркетингу та комунікаціях"})]}),c.jsxs(Js,{children:[c.jsx(Zs,{children:c.jsx("use",{href:`${te}#icon-done-yellow`})}),c.jsx(Gs,{children:"Глибоке розуміння бізнес-процесів медичних закладів"})]}),c.jsxs(Js,{children:[c.jsx(Zs,{children:c.jsx("use",{href:`${te}#icon-done-yellow`})}),c.jsx(Gs,{children:"Використання принципів доказової медицини"})]})]})]}),c.jsx(K,{minWidth:375,maxWidth:767,children:c.jsx("img",{srcSet:`${C2} 1x, ${O2} 2x`,src:E2,alt:"Ольга Поліщук - ваш ментор в медичній галузі",loading:"lazy"})}),c.jsx(K,{minWidth:768,maxWidth:1439,children:c.jsx("img",{srcSet:`${_2} 1x, ${A2} 2x`,src:I2,alt:"Ольга Поліщук - ваш ментор в медичній галузі",loading:"lazy"})}),c.jsx(K,{minWidth:1440,maxWidth:1919,children:c.jsx("img",{srcSet:`${L2} 1x, ${yf} 2x`,src:yf,alt:"Ольга Поліщук - ваш ментор в медичній галузі",loading:"lazy"})}),c.jsx(K,{minWidth:1920,children:c.jsx("img",{srcSet:`${P2} 1x, ${M2} 2x`,src:T2,alt:"Ольга Поліщук - ваш ментор в медичній галузі",loading:"lazy"})})]}),z2=P.button`
  display: flex;
  align-items: center;
  justify-content: center;
  width: 40px;
  height: 40px;
  position: fixed;
  bottom: var(--scroll-to-top-bottom);
  right: calc(100% / 2 - 327px / 2);
  /* padding: 8px; */
  background-color: var(--primary-yellow);
  box-shadow: 0px 0px 8px 0px rgba(27, 54, 65, 0.08);
  border: none;
  border-radius: 16px;
  z-index: 999;

  &:hover {
    box-shadow: 0px 0px 16px 0px rgba(27, 54, 65, 0.16);
  }

  @media screen and (min-width: 768px) {
    right: calc(100% / 2 - 688px / 2);
  }

  @media screen and (min-width: 1440px) {
    width: 48px;
    height: 48px;
    right: calc(100% / 2 - 1280px / 2);
  }

  @media screen and (min-width: 1920px) {
    width: 56px;
    height: 56px;
    right: calc(100% / 2 - 1680px / 2);
  }
`,D2=()=>{const[e,t]=R.useState(!1);R.useEffect(()=>{const r=()=>{const i=window.scrollY,o=document.getElementById("footer"),a=window.innerHeight+window.scrollY-o.offsetTop,l=Math.max(80,a);t(i>480||a>80),document.documentElement.style.setProperty("--scroll-to-top-bottom",`${l}px`)};return window.addEventListener("scroll",r),()=>{window.removeEventListener("scroll",r)}},[]);const n=()=>{window.scrollTo({top:0,behavior:"smooth"})};return c.jsx(c.Fragment,{children:e&&c.jsx(z2,{onClick:n,children:c.jsx("svg",{width:"24",height:"24",children:c.jsx("use",{href:`${te}#icon-arrowup`})})})})};function dr(e){"@babel/helpers - typeof";return dr=typeof Symbol=="function"&&typeof Symbol.iterator=="symbol"?function(t){return typeof t}:function(t){return t&&typeof Symbol=="function"&&t.constructor===Symbol&&t!==Symbol.prototype?"symbol":typeof t},dr(e)}function F2(e,t){if(dr(e)!="object"||!e)return e;var n=e[Symbol.toPrimitive];if(n!==void 0){var r=n.call(e,t||"default");if(dr(r)!="object")return r;throw new TypeError("@@toPrimitive must return a primitive value.")}return(t==="string"?String:Number)(e)}function sg(e){var t=F2(e,"string");return dr(t)=="symbol"?t:String(t)}function vi(e,t,n){return t=sg(t),t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function wf(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter(function(i){return Object.getOwnPropertyDescriptor(e,i).enumerable})),n.push.apply(n,r)}return n}function Z(e){for(var t=1;t<arguments.length;t++){var n=arguments[t]!=null?arguments[t]:{};t%2?wf(Object(n),!0).forEach(function(r){vi(e,r,n[r])}):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):wf(Object(n)).forEach(function(r){Object.defineProperty(e,r,Object.getOwnPropertyDescriptor(n,r))})}return e}function N2(e){if(Array.isArray(e))return e}function V2(e,t){var n=e==null?null:typeof Symbol<"u"&&e[Symbol.iterator]||e["@@iterator"];if(n!=null){var r,i,o,a,l=[],s=!0,u=!1;try{if(o=(n=n.call(e)).next,t===0){if(Object(n)!==n)return;s=!1}else for(;!(s=(r=o.call(n)).done)&&(l.push(r.value),l.length!==t);s=!0);}catch(p){u=!0,i=p}finally{try{if(!s&&n.return!=null&&(a=n.return(),Object(a)!==a))return}finally{if(u)throw i}}return l}}function pu(e,t){(t==null||t>e.length)&&(t=e.length);for(var n=0,r=new Array(t);n<t;n++)r[n]=e[n];return r}function lg(e,t){if(e){if(typeof e=="string")return pu(e,t);var n=Object.prototype.toString.call(e).slice(8,-1);if(n==="Object"&&e.constructor&&(n=e.constructor.name),n==="Map"||n==="Set")return Array.from(e);if(n==="Arguments"||/^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n))return pu(e,t)}}function U2(){throw new TypeError(`Invalid attempt to destructure non-iterable instance.
In order to be iterable, non-array objects must have a [Symbol.iterator]() method.`)}function hn(e,t){return N2(e)||V2(e,t)||lg(e,t)||U2()}function W2(e,t){if(e==null)return{};var n={},r=Object.keys(e),i,o;for(o=0;o<r.length;o++)i=r[o],!(t.indexOf(i)>=0)&&(n[i]=e[i]);return n}function wn(e,t){if(e==null)return{};var n=W2(e,t),r,i;if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(i=0;i<o.length;i++)r=o[i],!(t.indexOf(r)>=0)&&Object.prototype.propertyIsEnumerable.call(e,r)&&(n[r]=e[r])}return n}var B2=["defaultInputValue","defaultMenuIsOpen","defaultValue","inputValue","menuIsOpen","onChange","onInputChange","onMenuClose","onMenuOpen","value"];function H2(e){var t=e.defaultInputValue,n=t===void 0?"":t,r=e.defaultMenuIsOpen,i=r===void 0?!1:r,o=e.defaultValue,a=o===void 0?null:o,l=e.inputValue,s=e.menuIsOpen,u=e.onChange,p=e.onInputChange,h=e.onMenuClose,g=e.onMenuOpen,v=e.value,x=wn(e,B2),y=R.useState(l!==void 0?l:n),b=hn(y,2),d=b[0],f=b[1],m=R.useState(s!==void 0?s:i),w=hn(m,2),k=w[0],M=w[1],E=R.useState(v!==void 0?v:a),j=hn(E,2),C=j[0],T=j[1],_=R.useCallback(function(F,Q){typeof u=="function"&&u(F,Q),T(F)},[u]),I=R.useCallback(function(F,Q){var X;typeof p=="function"&&(X=p(F,Q)),f(X!==void 0?X:F)},[p]),L=R.useCallback(function(){typeof g=="function"&&g(),M(!0)},[g]),U=R.useCallback(function(){typeof h=="function"&&h(),M(!1)},[h]),H=l!==void 0?l:d,q=s!==void 0?s:k,he=v!==void 0?v:C;return Z(Z({},x),{},{inputValue:H,menuIsOpen:q,onChange:_,onInputChange:I,onMenuClose:U,onMenuOpen:L,value:he})}function $2(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}function bf(e,t){for(var n=0;n<t.length;n++){var r=t[n];r.enumerable=r.enumerable||!1,r.configurable=!0,"value"in r&&(r.writable=!0),Object.defineProperty(e,sg(r.key),r)}}function Y2(e,t,n){return t&&bf(e.prototype,t),n&&bf(e,n),Object.defineProperty(e,"prototype",{writable:!1}),e}function hu(e,t){return hu=Object.setPrototypeOf?Object.setPrototypeOf.bind():function(r,i){return r.__proto__=i,r},hu(e,t)}function Q2(e,t){if(typeof t!="function"&&t!==null)throw new TypeError("Super expression must either be null or a function");e.prototype=Object.create(t&&t.prototype,{constructor:{value:e,writable:!0,configurable:!0}}),Object.defineProperty(e,"prototype",{writable:!1}),t&&hu(e,t)}function Ma(e){return Ma=Object.setPrototypeOf?Object.getPrototypeOf.bind():function(n){return n.__proto__||Object.getPrototypeOf(n)},Ma(e)}function X2(){if(typeof Reflect>"u"||!Reflect.construct||Reflect.construct.sham)return!1;if(typeof Proxy=="function")return!0;try{return Boolean.prototype.valueOf.call(Reflect.construct(Boolean,[],function(){})),!0}catch{return!1}}function K2(e){if(e===void 0)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return e}function J2(e,t){if(t&&(dr(t)==="object"||typeof t=="function"))return t;if(t!==void 0)throw new TypeError("Derived constructors may only return object or undefined");return K2(e)}function Z2(e){var t=X2();return function(){var r=Ma(e),i;if(t){var o=Ma(this).constructor;i=Reflect.construct(r,arguments,o)}else i=r.apply(this,arguments);return J2(this,i)}}function G2(e){if(Array.isArray(e))return pu(e)}function q2(e){if(typeof Symbol<"u"&&e[Symbol.iterator]!=null||e["@@iterator"]!=null)return Array.from(e)}function e4(){throw new TypeError(`Invalid attempt to spread non-iterable instance.
In order to be iterable, non-array objects must have a [Symbol.iterator]() method.`)}function jc(e){return G2(e)||q2(e)||lg(e)||e4()}function t4(e,t){return t||(t=e.slice(0)),Object.freeze(Object.defineProperties(e,{raw:{value:Object.freeze(t)}}))}const n4=Math.min,r4=Math.max,Ta=Math.round,Io=Math.floor,_a=e=>({x:e,y:e});function i4(e){return{...e,top:e.y,left:e.x,right:e.x+e.width,bottom:e.y+e.height}}function ug(e){return dg(e)?(e.nodeName||"").toLowerCase():"#document"}function $t(e){var t;return(e==null||(t=e.ownerDocument)==null?void 0:t.defaultView)||window}function cg(e){var t;return(t=(dg(e)?e.ownerDocument:e.document)||window.document)==null?void 0:t.documentElement}function dg(e){return e instanceof Node||e instanceof $t(e).Node}function mu(e){return e instanceof Element||e instanceof $t(e).Element}function Cc(e){return e instanceof HTMLElement||e instanceof $t(e).HTMLElement}function kf(e){return typeof ShadowRoot>"u"?!1:e instanceof ShadowRoot||e instanceof $t(e).ShadowRoot}function fg(e){const{overflow:t,overflowX:n,overflowY:r,display:i}=Oc(e);return/auto|scroll|overlay|hidden|clip/.test(t+r+n)&&!["inline","contents"].includes(i)}function o4(){return typeof CSS>"u"||!CSS.supports?!1:CSS.supports("-webkit-backdrop-filter","none")}function a4(e){return["html","body","#document"].includes(ug(e))}function Oc(e){return $t(e).getComputedStyle(e)}function s4(e){if(ug(e)==="html")return e;const t=e.assignedSlot||e.parentNode||kf(e)&&e.host||cg(e);return kf(t)?t.host:t}function pg(e){const t=s4(e);return a4(t)?e.ownerDocument?e.ownerDocument.body:e.body:Cc(t)&&fg(t)?t:pg(t)}function Aa(e,t,n){var r;t===void 0&&(t=[]),n===void 0&&(n=!0);const i=pg(e),o=i===((r=e.ownerDocument)==null?void 0:r.body),a=$t(i);return o?t.concat(a,a.visualViewport||[],fg(i)?i:[],a.frameElement&&n?Aa(a.frameElement):[]):t.concat(i,Aa(i,[],n))}function l4(e){const t=Oc(e);let n=parseFloat(t.width)||0,r=parseFloat(t.height)||0;const i=Cc(e),o=i?e.offsetWidth:n,a=i?e.offsetHeight:r,l=Ta(n)!==o||Ta(r)!==a;return l&&(n=o,r=a),{width:n,height:r,$:l}}function Ec(e){return mu(e)?e:e.contextElement}function qs(e){const t=Ec(e);if(!Cc(t))return _a(1);const n=t.getBoundingClientRect(),{width:r,height:i,$:o}=l4(t);let a=(o?Ta(n.width):n.width)/r,l=(o?Ta(n.height):n.height)/i;return(!a||!Number.isFinite(a))&&(a=1),(!l||!Number.isFinite(l))&&(l=1),{x:a,y:l}}const u4=_a(0);function c4(e){const t=$t(e);return!o4()||!t.visualViewport?u4:{x:t.visualViewport.offsetLeft,y:t.visualViewport.offsetTop}}function d4(e,t,n){return t===void 0&&(t=!1),!n||t&&n!==$t(e)?!1:t}function Sf(e,t,n,r){t===void 0&&(t=!1),n===void 0&&(n=!1);const i=e.getBoundingClientRect(),o=Ec(e);let a=_a(1);t&&(r?mu(r)&&(a=qs(r)):a=qs(e));const l=d4(o,n,r)?c4(o):_a(0);let s=(i.left+l.x)/a.x,u=(i.top+l.y)/a.y,p=i.width/a.x,h=i.height/a.y;if(o){const g=$t(o),v=r&&mu(r)?$t(r):r;let x=g.frameElement;for(;x&&r&&v!==g;){const y=qs(x),b=x.getBoundingClientRect(),d=Oc(x),f=b.left+(x.clientLeft+parseFloat(d.paddingLeft))*y.x,m=b.top+(x.clientTop+parseFloat(d.paddingTop))*y.y;s*=y.x,u*=y.y,p*=y.x,h*=y.y,s+=f,u+=m,x=$t(x).frameElement}}return i4({width:p,height:h,x:s,y:u})}function f4(e,t){let n=null,r;const i=cg(e);function o(){clearTimeout(r),n&&n.disconnect(),n=null}function a(l,s){l===void 0&&(l=!1),s===void 0&&(s=1),o();const{left:u,top:p,width:h,height:g}=e.getBoundingClientRect();if(l||t(),!h||!g)return;const v=Io(p),x=Io(i.clientWidth-(u+h)),y=Io(i.clientHeight-(p+g)),b=Io(u),f={rootMargin:-v+"px "+-x+"px "+-y+"px "+-b+"px",threshold:r4(0,n4(1,s))||1};let m=!0;function w(k){const M=k[0].intersectionRatio;if(M!==s){if(!m)return a();M?a(!1,M):r=setTimeout(()=>{a(!1,1e-7)},100)}m=!1}try{n=new IntersectionObserver(w,{...f,root:i.ownerDocument})}catch{n=new IntersectionObserver(w,f)}n.observe(e)}return a(!0),o}function p4(e,t,n,r){r===void 0&&(r={});const{ancestorScroll:i=!0,ancestorResize:o=!0,elementResize:a=typeof ResizeObserver=="function",layoutShift:l=typeof IntersectionObserver=="function",animationFrame:s=!1}=r,u=Ec(e),p=i||o?[...u?Aa(u):[],...Aa(t)]:[];p.forEach(d=>{i&&d.addEventListener("scroll",n,{passive:!0}),o&&d.addEventListener("resize",n)});const h=u&&l?f4(u,n):null;let g=-1,v=null;a&&(v=new ResizeObserver(d=>{let[f]=d;f&&f.target===u&&v&&(v.unobserve(t),cancelAnimationFrame(g),g=requestAnimationFrame(()=>{v&&v.observe(t)})),n()}),u&&!s&&v.observe(u),v.observe(t));let x,y=s?Sf(e):null;s&&b();function b(){const d=Sf(e);y&&(d.x!==y.x||d.y!==y.y||d.width!==y.width||d.height!==y.height)&&n(),y=d,x=requestAnimationFrame(b)}return n(),()=>{p.forEach(d=>{i&&d.removeEventListener("scroll",n),o&&d.removeEventListener("resize",n)}),h&&h(),v&&v.disconnect(),v=null,s&&cancelAnimationFrame(x)}}var gu=R.useLayoutEffect,h4=["className","clearValue","cx","getStyles","getClassNames","getValue","hasValue","isMulti","isRtl","options","selectOption","selectProps","setValue","theme"],Ia=function(){};function m4(e,t){return t?t[0]==="-"?e+t:e+"__"+t:e}function g4(e,t){for(var n=arguments.length,r=new Array(n>2?n-2:0),i=2;i<n;i++)r[i-2]=arguments[i];var o=[].concat(r);if(t&&e)for(var a in t)t.hasOwnProperty(a)&&t[a]&&o.push("".concat(m4(e,a)));return o.filter(function(l){return l}).map(function(l){return String(l).trim()}).join(" ")}var jf=function(t){return C4(t)?t.filter(Boolean):dr(t)==="object"&&t!==null?[t]:[]},hg=function(t){t.className,t.clearValue,t.cx,t.getStyles,t.getClassNames,t.getValue,t.hasValue,t.isMulti,t.isRtl,t.options,t.selectOption,t.selectProps,t.setValue,t.theme;var n=wn(t,h4);return Z({},n)},Re=function(t,n,r){var i=t.cx,o=t.getStyles,a=t.getClassNames,l=t.className;return{css:o(n,t),className:i(r??{},a(n,t),l)}};function xs(e){return[document.documentElement,document.body,window].indexOf(e)>-1}function x4(e){return xs(e)?window.innerHeight:e.clientHeight}function mg(e){return xs(e)?window.pageYOffset:e.scrollTop}function La(e,t){if(xs(e)){window.scrollTo(0,t);return}e.scrollTop=t}function v4(e){var t=getComputedStyle(e),n=t.position==="absolute",r=/(auto|scroll)/;if(t.position==="fixed")return document.documentElement;for(var i=e;i=i.parentElement;)if(t=getComputedStyle(i),!(n&&t.position==="static")&&r.test(t.overflow+t.overflowY+t.overflowX))return i;return document.documentElement}function y4(e,t,n,r){return n*((e=e/r-1)*e*e+1)+t}function Lo(e,t){var n=arguments.length>2&&arguments[2]!==void 0?arguments[2]:200,r=arguments.length>3&&arguments[3]!==void 0?arguments[3]:Ia,i=mg(e),o=t-i,a=10,l=0;function s(){l+=a;var u=y4(l,i,o,n);La(e,u),l<n?window.requestAnimationFrame(s):r(e)}s()}function Cf(e,t){var n=e.getBoundingClientRect(),r=t.getBoundingClientRect(),i=t.offsetHeight/3;r.bottom+i>n.bottom?La(e,Math.min(t.offsetTop+t.clientHeight-e.offsetHeight+i,e.scrollHeight)):r.top-i<n.top&&La(e,Math.max(t.offsetTop-i,0))}function w4(e){var t=e.getBoundingClientRect();return{bottom:t.bottom,height:t.height,left:t.left,right:t.right,top:t.top,width:t.width}}function Of(){try{return document.createEvent("TouchEvent"),!0}catch{return!1}}function b4(){try{return/Android|webOS|iPhone|iPad|iPod|BlackBerry|IEMobile|Opera Mini/i.test(navigator.userAgent)}catch{return!1}}var gg=!1,k4={get passive(){return gg=!0}},Ro=typeof window<"u"?window:{};Ro.addEventListener&&Ro.removeEventListener&&(Ro.addEventListener("p",Ia,k4),Ro.removeEventListener("p",Ia,!1));var S4=gg;function j4(e){return e!=null}function C4(e){return Array.isArray(e)}function zo(e,t,n){return e?t:n}var O4=function(t){for(var n=arguments.length,r=new Array(n>1?n-1:0),i=1;i<n;i++)r[i-1]=arguments[i];var o=Object.entries(t).filter(function(a){var l=hn(a,1),s=l[0];return!r.includes(s)});return o.reduce(function(a,l){var s=hn(l,2),u=s[0],p=s[1];return a[u]=p,a},{})},E4=["children","innerProps"],P4=["children","innerProps"];function M4(e){var t=e.maxHeight,n=e.menuEl,r=e.minHeight,i=e.placement,o=e.shouldScroll,a=e.isFixedPosition,l=e.controlHeight,s=v4(n),u={placement:"bottom",maxHeight:t};if(!n||!n.offsetParent)return u;var p=s.getBoundingClientRect(),h=p.height,g=n.getBoundingClientRect(),v=g.bottom,x=g.height,y=g.top,b=n.offsetParent.getBoundingClientRect(),d=b.top,f=a?window.innerHeight:x4(s),m=mg(s),w=parseInt(getComputedStyle(n).marginBottom,10),k=parseInt(getComputedStyle(n).marginTop,10),M=d-k,E=f-y,j=M+m,C=h-m-y,T=v-f+m+w,_=m+y-k,I=160;switch(i){case"auto":case"bottom":if(E>=x)return{placement:"bottom",maxHeight:t};if(C>=x&&!a)return o&&Lo(s,T,I),{placement:"bottom",maxHeight:t};if(!a&&C>=r||a&&E>=r){o&&Lo(s,T,I);var L=a?E-w:C-w;return{placement:"bottom",maxHeight:L}}if(i==="auto"||a){var U=t,H=a?M:j;return H>=r&&(U=Math.min(H-w-l,t)),{placement:"top",maxHeight:U}}if(i==="bottom")return o&&La(s,T),{placement:"bottom",maxHeight:t};break;case"top":if(M>=x)return{placement:"top",maxHeight:t};if(j>=x&&!a)return o&&Lo(s,_,I),{placement:"top",maxHeight:t};if(!a&&j>=r||a&&M>=r){var q=t;return(!a&&j>=r||a&&M>=r)&&(q=a?M-k:j-k),o&&Lo(s,_,I),{placement:"top",maxHeight:q}}return{placement:"bottom",maxHeight:t};default:throw new Error('Invalid placement provided "'.concat(i,'".'))}return u}function T4(e){var t={bottom:"top",top:"bottom"};return e?t[e]:"bottom"}var xg=function(t){return t==="auto"?"bottom":t},_4=function(t,n){var r,i=t.placement,o=t.theme,a=o.borderRadius,l=o.spacing,s=o.colors;return Z((r={label:"menu"},vi(r,T4(i),"100%"),vi(r,"position","absolute"),vi(r,"width","100%"),vi(r,"zIndex",1),r),n?{}:{backgroundColor:s.neutral0,borderRadius:a,boxShadow:"0 0 0 1px hsla(0, 0%, 0%, 0.1), 0 4px 11px hsla(0, 0%, 0%, 0.1)",marginBottom:l.menuGutter,marginTop:l.menuGutter})},vg=R.createContext(null),A4=function(t){var n=t.children,r=t.minMenuHeight,i=t.maxMenuHeight,o=t.menuPlacement,a=t.menuPosition,l=t.menuShouldScrollIntoView,s=t.theme,u=R.useContext(vg)||{},p=u.setPortalPlacement,h=R.useRef(null),g=R.useState(i),v=hn(g,2),x=v[0],y=v[1],b=R.useState(null),d=hn(b,2),f=d[0],m=d[1],w=s.spacing.controlHeight;return gu(function(){var k=h.current;if(k){var M=a==="fixed",E=l&&!M,j=M4({maxHeight:i,menuEl:k,minHeight:r,placement:o,shouldScroll:E,isFixedPosition:M,controlHeight:w});y(j.maxHeight),m(j.placement),p==null||p(j.placement)}},[i,o,a,l,r,p,w]),n({ref:h,placerProps:Z(Z({},t),{},{placement:f||xg(o),maxHeight:x})})},I4=function(t){var n=t.children,r=t.innerRef,i=t.innerProps;return J("div",G({},Re(t,"menu",{menu:!0}),{ref:r},i),n)},L4=I4,R4=function(t,n){var r=t.maxHeight,i=t.theme.spacing.baseUnit;return Z({maxHeight:r,overflowY:"auto",position:"relative",WebkitOverflowScrolling:"touch"},n?{}:{paddingBottom:i,paddingTop:i})},z4=function(t){var n=t.children,r=t.innerProps,i=t.innerRef,o=t.isMulti;return J("div",G({},Re(t,"menuList",{"menu-list":!0,"menu-list--is-multi":o}),{ref:i},r),n)},yg=function(t,n){var r=t.theme,i=r.spacing.baseUnit,o=r.colors;return Z({textAlign:"center"},n?{}:{color:o.neutral40,padding:"".concat(i*2,"px ").concat(i*3,"px")})},D4=yg,F4=yg,N4=function(t){var n=t.children,r=n===void 0?"No options":n,i=t.innerProps,o=wn(t,E4);return J("div",G({},Re(Z(Z({},o),{},{children:r,innerProps:i}),"noOptionsMessage",{"menu-notice":!0,"menu-notice--no-options":!0}),i),r)},V4=function(t){var n=t.children,r=n===void 0?"Loading...":n,i=t.innerProps,o=wn(t,P4);return J("div",G({},Re(Z(Z({},o),{},{children:r,innerProps:i}),"loadingMessage",{"menu-notice":!0,"menu-notice--loading":!0}),i),r)},U4=function(t){var n=t.rect,r=t.offset,i=t.position;return{left:n.left,position:i,top:r,width:n.width,zIndex:1}},W4=function(t){var n=t.appendTo,r=t.children,i=t.controlElement,o=t.innerProps,a=t.menuPlacement,l=t.menuPosition,s=R.useRef(null),u=R.useRef(null),p=R.useState(xg(a)),h=hn(p,2),g=h[0],v=h[1],x=R.useMemo(function(){return{setPortalPlacement:v}},[]),y=R.useState(null),b=hn(y,2),d=b[0],f=b[1],m=R.useCallback(function(){if(i){var E=w4(i),j=l==="fixed"?0:window.pageYOffset,C=E[g]+j;(C!==(d==null?void 0:d.offset)||E.left!==(d==null?void 0:d.rect.left)||E.width!==(d==null?void 0:d.rect.width))&&f({offset:C,rect:E})}},[i,l,g,d==null?void 0:d.offset,d==null?void 0:d.rect.left,d==null?void 0:d.rect.width]);gu(function(){m()},[m]);var w=R.useCallback(function(){typeof u.current=="function"&&(u.current(),u.current=null),i&&s.current&&(u.current=p4(i,s.current,m,{elementResize:"ResizeObserver"in window}))},[i,m]);gu(function(){w()},[w]);var k=R.useCallback(function(E){s.current=E,w()},[w]);if(!n&&l!=="fixed"||!d)return null;var M=J("div",G({ref:k},Re(Z(Z({},t),{},{offset:d.offset,position:l,rect:d.rect}),"menuPortal",{"menu-portal":!0}),o),r);return J(vg.Provider,{value:x},n?no.createPortal(M,n):M)},B4=function(t){var n=t.isDisabled,r=t.isRtl;return{label:"container",direction:r?"rtl":void 0,pointerEvents:n?"none":void 0,position:"relative"}},H4=function(t){var n=t.children,r=t.innerProps,i=t.isDisabled,o=t.isRtl;return J("div",G({},Re(t,"container",{"--is-disabled":i,"--is-rtl":o}),r),n)},$4=function(t,n){var r=t.theme.spacing,i=t.isMulti,o=t.hasValue,a=t.selectProps.controlShouldRenderValue;return Z({alignItems:"center",display:i&&o&&a?"flex":"grid",flex:1,flexWrap:"wrap",WebkitOverflowScrolling:"touch",position:"relative",overflow:"hidden"},n?{}:{padding:"".concat(r.baseUnit/2,"px ").concat(r.baseUnit*2,"px")})},Y4=function(t){var n=t.children,r=t.innerProps,i=t.isMulti,o=t.hasValue;return J("div",G({},Re(t,"valueContainer",{"value-container":!0,"value-container--is-multi":i,"value-container--has-value":o}),r),n)},Q4=function(){return{alignItems:"center",alignSelf:"stretch",display:"flex",flexShrink:0}},X4=function(t){var n=t.children,r=t.innerProps;return J("div",G({},Re(t,"indicatorsContainer",{indicators:!0}),r),n)},Ef,K4=["size"],J4=["innerProps","isRtl","size"],Z4={name:"8mmkcg",styles:"display:inline-block;fill:currentColor;line-height:1;stroke:currentColor;stroke-width:0"},wg=function(t){var n=t.size,r=wn(t,K4);return J("svg",G({height:n,width:n,viewBox:"0 0 20 20","aria-hidden":"true",focusable:"false",css:Z4},r))},Pc=function(t){return J(wg,G({size:20},t),J("path",{d:"M14.348 14.849c-0.469 0.469-1.229 0.469-1.697 0l-2.651-3.030-2.651 3.029c-0.469 0.469-1.229 0.469-1.697 0-0.469-0.469-0.469-1.229 0-1.697l2.758-3.15-2.759-3.152c-0.469-0.469-0.469-1.228 0-1.697s1.228-0.469 1.697 0l2.652 3.031 2.651-3.031c0.469-0.469 1.228-0.469 1.697 0s0.469 1.229 0 1.697l-2.758 3.152 2.758 3.15c0.469 0.469 0.469 1.229 0 1.698z"}))},bg=function(t){return J(wg,G({size:20},t),J("path",{d:"M4.516 7.548c0.436-0.446 1.043-0.481 1.576 0l3.908 3.747 3.908-3.747c0.533-0.481 1.141-0.446 1.574 0 0.436 0.445 0.408 1.197 0 1.615-0.406 0.418-4.695 4.502-4.695 4.502-0.217 0.223-0.502 0.335-0.787 0.335s-0.57-0.112-0.789-0.335c0 0-4.287-4.084-4.695-4.502s-0.436-1.17 0-1.615z"}))},kg=function(t,n){var r=t.isFocused,i=t.theme,o=i.spacing.baseUnit,a=i.colors;return Z({label:"indicatorContainer",display:"flex",transition:"color 150ms"},n?{}:{color:r?a.neutral60:a.neutral20,padding:o*2,":hover":{color:r?a.neutral80:a.neutral40}})},G4=kg,q4=function(t){var n=t.children,r=t.innerProps;return J("div",G({},Re(t,"dropdownIndicator",{indicator:!0,"dropdown-indicator":!0}),r),n||J(bg,null))},ek=kg,tk=function(t){var n=t.children,r=t.innerProps;return J("div",G({},Re(t,"clearIndicator",{indicator:!0,"clear-indicator":!0}),r),n||J(Pc,null))},nk=function(t,n){var r=t.isDisabled,i=t.theme,o=i.spacing.baseUnit,a=i.colors;return Z({label:"indicatorSeparator",alignSelf:"stretch",width:1},n?{}:{backgroundColor:r?a.neutral10:a.neutral20,marginBottom:o*2,marginTop:o*2})},rk=function(t){var n=t.innerProps;return J("span",G({},n,Re(t,"indicatorSeparator",{"indicator-separator":!0})))},ik=Oy(Ef||(Ef=t4([`
  0%, 80%, 100% { opacity: 0; }
  40% { opacity: 1; }
`]))),ok=function(t,n){var r=t.isFocused,i=t.size,o=t.theme,a=o.colors,l=o.spacing.baseUnit;return Z({label:"loadingIndicator",display:"flex",transition:"color 150ms",alignSelf:"center",fontSize:i,lineHeight:1,marginRight:i,textAlign:"center",verticalAlign:"middle"},n?{}:{color:r?a.neutral60:a.neutral20,padding:l*2})},el=function(t){var n=t.delay,r=t.offset;return J("span",{css:or({animation:"".concat(ik," 1s ease-in-out ").concat(n,"ms infinite;"),backgroundColor:"currentColor",borderRadius:"1em",display:"inline-block",marginLeft:r?"1em":void 0,height:"1em",verticalAlign:"top",width:"1em"},"","")})},ak=function(t){var n=t.innerProps,r=t.isRtl,i=t.size,o=i===void 0?4:i,a=wn(t,J4);return J("div",G({},Re(Z(Z({},a),{},{innerProps:n,isRtl:r,size:o}),"loadingIndicator",{indicator:!0,"loading-indicator":!0}),n),J(el,{delay:0,offset:r}),J(el,{delay:160,offset:!0}),J(el,{delay:320,offset:!r}))},sk=function(t,n){var r=t.isDisabled,i=t.isFocused,o=t.theme,a=o.colors,l=o.borderRadius,s=o.spacing;return Z({label:"control",alignItems:"center",cursor:"default",display:"flex",flexWrap:"wrap",justifyContent:"space-between",minHeight:s.controlHeight,outline:"0 !important",position:"relative",transition:"all 100ms"},n?{}:{backgroundColor:r?a.neutral5:a.neutral0,borderColor:r?a.neutral10:i?a.primary:a.neutral20,borderRadius:l,borderStyle:"solid",borderWidth:1,boxShadow:i?"0 0 0 1px ".concat(a.primary):void 0,"&:hover":{borderColor:i?a.primary:a.neutral30}})},lk=function(t){var n=t.children,r=t.isDisabled,i=t.isFocused,o=t.innerRef,a=t.innerProps,l=t.menuIsOpen;return J("div",G({ref:o},Re(t,"control",{control:!0,"control--is-disabled":r,"control--is-focused":i,"control--menu-is-open":l}),a,{"aria-disabled":r||void 0}),n)},uk=lk,ck=["data"],dk=function(t,n){var r=t.theme.spacing;return n?{}:{paddingBottom:r.baseUnit*2,paddingTop:r.baseUnit*2}},fk=function(t){var n=t.children,r=t.cx,i=t.getStyles,o=t.getClassNames,a=t.Heading,l=t.headingProps,s=t.innerProps,u=t.label,p=t.theme,h=t.selectProps;return J("div",G({},Re(t,"group",{group:!0}),s),J(a,G({},l,{selectProps:h,theme:p,getStyles:i,getClassNames:o,cx:r}),u),J("div",null,n))},pk=function(t,n){var r=t.theme,i=r.colors,o=r.spacing;return Z({label:"group",cursor:"default",display:"block"},n?{}:{color:i.neutral40,fontSize:"75%",fontWeight:500,marginBottom:"0.25em",paddingLeft:o.baseUnit*3,paddingRight:o.baseUnit*3,textTransform:"uppercase"})},hk=function(t){var n=hg(t);n.data;var r=wn(n,ck);return J("div",G({},Re(t,"groupHeading",{"group-heading":!0}),r))},mk=fk,gk=["innerRef","isDisabled","isHidden","inputClassName"],xk=function(t,n){var r=t.isDisabled,i=t.value,o=t.theme,a=o.spacing,l=o.colors;return Z(Z({visibility:r?"hidden":"visible",transform:i?"translateZ(0)":""},vk),n?{}:{margin:a.baseUnit/2,paddingBottom:a.baseUnit/2,paddingTop:a.baseUnit/2,color:l.neutral80})},Sg={gridArea:"1 / 2",font:"inherit",minWidth:"2px",border:0,margin:0,outline:0,padding:0},vk={flex:"1 1 auto",display:"inline-grid",gridArea:"1 / 1 / 2 / 3",gridTemplateColumns:"0 min-content","&:after":Z({content:'attr(data-value) " "',visibility:"hidden",whiteSpace:"pre"},Sg)},yk=function(t){return Z({label:"input",color:"inherit",background:0,opacity:t?0:1,width:"100%"},Sg)},wk=function(t){var n=t.cx,r=t.value,i=hg(t),o=i.innerRef,a=i.isDisabled,l=i.isHidden,s=i.inputClassName,u=wn(i,gk);return J("div",G({},Re(t,"input",{"input-container":!0}),{"data-value":r||""}),J("input",G({className:n({input:!0},s),ref:o,style:yk(l),disabled:a},u)))},bk=wk,kk=function(t,n){var r=t.theme,i=r.spacing,o=r.borderRadius,a=r.colors;return Z({label:"multiValue",display:"flex",minWidth:0},n?{}:{backgroundColor:a.neutral10,borderRadius:o/2,margin:i.baseUnit/2})},Sk=function(t,n){var r=t.theme,i=r.borderRadius,o=r.colors,a=t.cropWithEllipsis;return Z({overflow:"hidden",textOverflow:a||a===void 0?"ellipsis":void 0,whiteSpace:"nowrap"},n?{}:{borderRadius:i/2,color:o.neutral80,fontSize:"85%",padding:3,paddingLeft:6})},jk=function(t,n){var r=t.theme,i=r.spacing,o=r.borderRadius,a=r.colors,l=t.isFocused;return Z({alignItems:"center",display:"flex"},n?{}:{borderRadius:o/2,backgroundColor:l?a.dangerLight:void 0,paddingLeft:i.baseUnit,paddingRight:i.baseUnit,":hover":{backgroundColor:a.dangerLight,color:a.danger}})},jg=function(t){var n=t.children,r=t.innerProps;return J("div",r,n)},Ck=jg,Ok=jg;function Ek(e){var t=e.children,n=e.innerProps;return J("div",G({role:"button"},n),t||J(Pc,{size:14}))}var Pk=function(t){var n=t.children,r=t.components,i=t.data,o=t.innerProps,a=t.isDisabled,l=t.removeProps,s=t.selectProps,u=r.Container,p=r.Label,h=r.Remove;return J(u,{data:i,innerProps:Z(Z({},Re(t,"multiValue",{"multi-value":!0,"multi-value--is-disabled":a})),o),selectProps:s},J(p,{data:i,innerProps:Z({},Re(t,"multiValueLabel",{"multi-value__label":!0})),selectProps:s},n),J(h,{data:i,innerProps:Z(Z({},Re(t,"multiValueRemove",{"multi-value__remove":!0})),{},{"aria-label":"Remove ".concat(n||"option")},l),selectProps:s}))},Mk=Pk,Tk=function(t,n){var r=t.isDisabled,i=t.isFocused,o=t.isSelected,a=t.theme,l=a.spacing,s=a.colors;return Z({label:"option",cursor:"default",display:"block",fontSize:"inherit",width:"100%",userSelect:"none",WebkitTapHighlightColor:"rgba(0, 0, 0, 0)"},n?{}:{backgroundColor:o?s.primary:i?s.primary25:"transparent",color:r?s.neutral20:o?s.neutral0:"inherit",padding:"".concat(l.baseUnit*2,"px ").concat(l.baseUnit*3,"px"),":active":{backgroundColor:r?void 0:o?s.primary:s.primary50}})},_k=function(t){var n=t.children,r=t.isDisabled,i=t.isFocused,o=t.isSelected,a=t.innerRef,l=t.innerProps;return J("div",G({},Re(t,"option",{option:!0,"option--is-disabled":r,"option--is-focused":i,"option--is-selected":o}),{ref:a,"aria-disabled":r},l),n)},Ak=_k,Ik=function(t,n){var r=t.theme,i=r.spacing,o=r.colors;return Z({label:"placeholder",gridArea:"1 / 1 / 2 / 3"},n?{}:{color:o.neutral50,marginLeft:i.baseUnit/2,marginRight:i.baseUnit/2})},Lk=function(t){var n=t.children,r=t.innerProps;return J("div",G({},Re(t,"placeholder",{placeholder:!0}),r),n)},Rk=Lk,zk=function(t,n){var r=t.isDisabled,i=t.theme,o=i.spacing,a=i.colors;return Z({label:"singleValue",gridArea:"1 / 1 / 2 / 3",maxWidth:"100%",overflow:"hidden",textOverflow:"ellipsis",whiteSpace:"nowrap"},n?{}:{color:r?a.neutral40:a.neutral80,marginLeft:o.baseUnit/2,marginRight:o.baseUnit/2})},Dk=function(t){var n=t.children,r=t.isDisabled,i=t.innerProps;return J("div",G({},Re(t,"singleValue",{"single-value":!0,"single-value--is-disabled":r}),i),n)},Fk=Dk,Nk={ClearIndicator:tk,Control:uk,DropdownIndicator:q4,DownChevron:bg,CrossIcon:Pc,Group:mk,GroupHeading:hk,IndicatorsContainer:X4,IndicatorSeparator:rk,Input:bk,LoadingIndicator:ak,Menu:L4,MenuList:z4,MenuPortal:W4,LoadingMessage:V4,NoOptionsMessage:N4,MultiValue:Mk,MultiValueContainer:Ck,MultiValueLabel:Ok,MultiValueRemove:Ek,Option:Ak,Placeholder:Rk,SelectContainer:H4,SingleValue:Fk,ValueContainer:Y4},Vk=function(t){return Z(Z({},Nk),t.components)},Pf=Number.isNaN||function(t){return typeof t=="number"&&t!==t};function Uk(e,t){return!!(e===t||Pf(e)&&Pf(t))}function Wk(e,t){if(e.length!==t.length)return!1;for(var n=0;n<e.length;n++)if(!Uk(e[n],t[n]))return!1;return!0}function Bk(e,t){t===void 0&&(t=Wk);var n=null;function r(){for(var i=[],o=0;o<arguments.length;o++)i[o]=arguments[o];if(n&&n.lastThis===this&&t(i,n.lastArgs))return n.lastResult;var a=e.apply(this,i);return n={lastResult:a,lastArgs:i,lastThis:this},a}return r.clear=function(){n=null},r}var Hk={name:"7pg0cj-a11yText",styles:"label:a11yText;z-index:9999;border:0;clip:rect(1px, 1px, 1px, 1px);height:1px;width:1px;position:absolute;overflow:hidden;padding:0;white-space:nowrap"},$k=function(t){return J("span",G({css:Hk},t))},Mf=$k,Yk={guidance:function(t){var n=t.isSearchable,r=t.isMulti,i=t.tabSelectsValue,o=t.context,a=t.isInitialFocus;switch(o){case"menu":return"Use Up and Down to choose options, press Enter to select the currently focused option, press Escape to exit the menu".concat(i?", press Tab to select the option and exit the menu":"",".");case"input":return a?"".concat(t["aria-label"]||"Select"," is focused ").concat(n?",type to refine list":"",", press Down to open the menu, ").concat(r?" press left to focus selected values":""):"";case"value":return"Use left and right to toggle between focused values, press Backspace to remove the currently focused value";default:return""}},onChange:function(t){var n=t.action,r=t.label,i=r===void 0?"":r,o=t.labels,a=t.isDisabled;switch(n){case"deselect-option":case"pop-value":case"remove-value":return"option ".concat(i,", deselected.");case"clear":return"All selected options have been cleared.";case"initial-input-focus":return"option".concat(o.length>1?"s":""," ").concat(o.join(","),", selected.");case"select-option":return a?"option ".concat(i," is disabled. Select another option."):"option ".concat(i,", selected.");default:return""}},onFocus:function(t){var n=t.context,r=t.focused,i=t.options,o=t.label,a=o===void 0?"":o,l=t.selectValue,s=t.isDisabled,u=t.isSelected,p=t.isAppleDevice,h=function(y,b){return y&&y.length?"".concat(y.indexOf(b)+1," of ").concat(y.length):""};if(n==="value"&&l)return"value ".concat(a," focused, ").concat(h(l,r),".");if(n==="menu"&&p){var g=s?" disabled":"",v="".concat(u?" selected":"").concat(g);return"".concat(a).concat(v,", ").concat(h(i,r),".")}return""},onFilter:function(t){var n=t.inputValue,r=t.resultsMessage;return"".concat(r).concat(n?" for search term "+n:"",".")}},Qk=function(t){var n=t.ariaSelection,r=t.focusedOption,i=t.focusedValue,o=t.focusableOptions,a=t.isFocused,l=t.selectValue,s=t.selectProps,u=t.id,p=t.isAppleDevice,h=s.ariaLiveMessages,g=s.getOptionLabel,v=s.inputValue,x=s.isMulti,y=s.isOptionDisabled,b=s.isSearchable,d=s.menuIsOpen,f=s.options,m=s.screenReaderStatus,w=s.tabSelectsValue,k=s.isLoading,M=s["aria-label"],E=s["aria-live"],j=R.useMemo(function(){return Z(Z({},Yk),h||{})},[h]),C=R.useMemo(function(){var H="";if(n&&j.onChange){var q=n.option,he=n.options,F=n.removedValue,Q=n.removedValues,X=n.value,ce=function(Qe){return Array.isArray(Qe)?null:Qe},ne=F||q||ce(X),Ce=ne?g(ne):"",we=he||Q||void 0,We=we?we.map(g):[],de=Z({isDisabled:ne&&y(ne,l),label:Ce,labels:We},n);H=j.onChange(de)}return H},[n,j,y,l,g]),T=R.useMemo(function(){var H="",q=r||i,he=!!(r&&l&&l.includes(r));if(q&&j.onFocus){var F={focused:q,label:g(q),isDisabled:y(q,l),isSelected:he,options:o,context:q===r?"menu":"value",selectValue:l,isAppleDevice:p};H=j.onFocus(F)}return H},[r,i,g,y,j,o,l,p]),_=R.useMemo(function(){var H="";if(d&&f.length&&!k&&j.onFilter){var q=m({count:o.length});H=j.onFilter({inputValue:v,resultsMessage:q})}return H},[o,v,d,j,f,m,k]),I=(n==null?void 0:n.action)==="initial-input-focus",L=R.useMemo(function(){var H="";if(j.guidance){var q=i?"value":d?"menu":"input";H=j.guidance({"aria-label":M,context:q,isDisabled:r&&y(r,l),isMulti:x,isSearchable:b,tabSelectsValue:w,isInitialFocus:I})}return H},[M,r,i,x,y,b,d,j,l,w,I]),U=J(R.Fragment,null,J("span",{id:"aria-selection"},C),J("span",{id:"aria-focused"},T),J("span",{id:"aria-results"},_),J("span",{id:"aria-guidance"},L));return J(R.Fragment,null,J(Mf,{id:u},I&&U),J(Mf,{"aria-live":E,"aria-atomic":"false","aria-relevant":"additions text",role:"log"},a&&!I&&U))},Xk=Qk,xu=[{base:"A",letters:"AⒶＡÀÁÂẦẤẪẨÃĀĂẰẮẴẲȦǠÄǞẢÅǺǍȀȂẠẬẶḀĄȺⱯ"},{base:"AA",letters:"Ꜳ"},{base:"AE",letters:"ÆǼǢ"},{base:"AO",letters:"Ꜵ"},{base:"AU",letters:"Ꜷ"},{base:"AV",letters:"ꜸꜺ"},{base:"AY",letters:"Ꜽ"},{base:"B",letters:"BⒷＢḂḄḆɃƂƁ"},{base:"C",letters:"CⒸＣĆĈĊČÇḈƇȻꜾ"},{base:"D",letters:"DⒹＤḊĎḌḐḒḎĐƋƊƉꝹ"},{base:"DZ",letters:"ǱǄ"},{base:"Dz",letters:"ǲǅ"},{base:"E",letters:"EⒺＥÈÉÊỀẾỄỂẼĒḔḖĔĖËẺĚȄȆẸỆȨḜĘḘḚƐƎ"},{base:"F",letters:"FⒻＦḞƑꝻ"},{base:"G",letters:"GⒼＧǴĜḠĞĠǦĢǤƓꞠꝽꝾ"},{base:"H",letters:"HⒽＨĤḢḦȞḤḨḪĦⱧⱵꞍ"},{base:"I",letters:"IⒾＩÌÍÎĨĪĬİÏḮỈǏȈȊỊĮḬƗ"},{base:"J",letters:"JⒿＪĴɈ"},{base:"K",letters:"KⓀＫḰǨḲĶḴƘⱩꝀꝂꝄꞢ"},{base:"L",letters:"LⓁＬĿĹĽḶḸĻḼḺŁȽⱢⱠꝈꝆꞀ"},{base:"LJ",letters:"Ǉ"},{base:"Lj",letters:"ǈ"},{base:"M",letters:"MⓂＭḾṀṂⱮƜ"},{base:"N",letters:"NⓃＮǸŃÑṄŇṆŅṊṈȠƝꞐꞤ"},{base:"NJ",letters:"Ǌ"},{base:"Nj",letters:"ǋ"},{base:"O",letters:"OⓄＯÒÓÔỒỐỖỔÕṌȬṎŌṐṒŎȮȰÖȪỎŐǑȌȎƠỜỚỠỞỢỌỘǪǬØǾƆƟꝊꝌ"},{base:"OI",letters:"Ƣ"},{base:"OO",letters:"Ꝏ"},{base:"OU",letters:"Ȣ"},{base:"P",letters:"PⓅＰṔṖƤⱣꝐꝒꝔ"},{base:"Q",letters:"QⓆＱꝖꝘɊ"},{base:"R",letters:"RⓇＲŔṘŘȐȒṚṜŖṞɌⱤꝚꞦꞂ"},{base:"S",letters:"SⓈＳẞŚṤŜṠŠṦṢṨȘŞⱾꞨꞄ"},{base:"T",letters:"TⓉＴṪŤṬȚŢṰṮŦƬƮȾꞆ"},{base:"TZ",letters:"Ꜩ"},{base:"U",letters:"UⓊＵÙÚÛŨṸŪṺŬÜǛǗǕǙỦŮŰǓȔȖƯỪỨỮỬỰỤṲŲṶṴɄ"},{base:"V",letters:"VⓋＶṼṾƲꝞɅ"},{base:"VY",letters:"Ꝡ"},{base:"W",letters:"WⓌＷẀẂŴẆẄẈⱲ"},{base:"X",letters:"XⓍＸẊẌ"},{base:"Y",letters:"YⓎＹỲÝŶỸȲẎŸỶỴƳɎỾ"},{base:"Z",letters:"ZⓏＺŹẐŻŽẒẔƵȤⱿⱫꝢ"},{base:"a",letters:"aⓐａẚàáâầấẫẩãāăằắẵẳȧǡäǟảåǻǎȁȃạậặḁąⱥɐ"},{base:"aa",letters:"ꜳ"},{base:"ae",letters:"æǽǣ"},{base:"ao",letters:"ꜵ"},{base:"au",letters:"ꜷ"},{base:"av",letters:"ꜹꜻ"},{base:"ay",letters:"ꜽ"},{base:"b",letters:"bⓑｂḃḅḇƀƃɓ"},{base:"c",letters:"cⓒｃćĉċčçḉƈȼꜿↄ"},{base:"d",letters:"dⓓｄḋďḍḑḓḏđƌɖɗꝺ"},{base:"dz",letters:"ǳǆ"},{base:"e",letters:"eⓔｅèéêềếễểẽēḕḗĕėëẻěȅȇẹệȩḝęḙḛɇɛǝ"},{base:"f",letters:"fⓕｆḟƒꝼ"},{base:"g",letters:"gⓖｇǵĝḡğġǧģǥɠꞡᵹꝿ"},{base:"h",letters:"hⓗｈĥḣḧȟḥḩḫẖħⱨⱶɥ"},{base:"hv",letters:"ƕ"},{base:"i",letters:"iⓘｉìíîĩīĭïḯỉǐȉȋịįḭɨı"},{base:"j",letters:"jⓙｊĵǰɉ"},{base:"k",letters:"kⓚｋḱǩḳķḵƙⱪꝁꝃꝅꞣ"},{base:"l",letters:"lⓛｌŀĺľḷḹļḽḻſłƚɫⱡꝉꞁꝇ"},{base:"lj",letters:"ǉ"},{base:"m",letters:"mⓜｍḿṁṃɱɯ"},{base:"n",letters:"nⓝｎǹńñṅňṇņṋṉƞɲŉꞑꞥ"},{base:"nj",letters:"ǌ"},{base:"o",letters:"oⓞｏòóôồốỗổõṍȭṏōṑṓŏȯȱöȫỏőǒȍȏơờớỡởợọộǫǭøǿɔꝋꝍɵ"},{base:"oi",letters:"ƣ"},{base:"ou",letters:"ȣ"},{base:"oo",letters:"ꝏ"},{base:"p",letters:"pⓟｐṕṗƥᵽꝑꝓꝕ"},{base:"q",letters:"qⓠｑɋꝗꝙ"},{base:"r",letters:"rⓡｒŕṙřȑȓṛṝŗṟɍɽꝛꞧꞃ"},{base:"s",letters:"sⓢｓßśṥŝṡšṧṣṩșşȿꞩꞅẛ"},{base:"t",letters:"tⓣｔṫẗťṭțţṱṯŧƭʈⱦꞇ"},{base:"tz",letters:"ꜩ"},{base:"u",letters:"uⓤｕùúûũṹūṻŭüǜǘǖǚủůűǔȕȗưừứữửựụṳųṷṵʉ"},{base:"v",letters:"vⓥｖṽṿʋꝟʌ"},{base:"vy",letters:"ꝡ"},{base:"w",letters:"wⓦｗẁẃŵẇẅẘẉⱳ"},{base:"x",letters:"xⓧｘẋẍ"},{base:"y",letters:"yⓨｙỳýŷỹȳẏÿỷẙỵƴɏỿ"},{base:"z",letters:"zⓩｚźẑżžẓẕƶȥɀⱬꝣ"}],Kk=new RegExp("["+xu.map(function(e){return e.letters}).join("")+"]","g"),Cg={};for(var tl=0;tl<xu.length;tl++)for(var nl=xu[tl],rl=0;rl<nl.letters.length;rl++)Cg[nl.letters[rl]]=nl.base;var Og=function(t){return t.replace(Kk,function(n){return Cg[n]})},Jk=Bk(Og),Tf=function(t){return t.replace(/^\s+|\s+$/g,"")},Zk=function(t){return"".concat(t.label," ").concat(t.value)},Gk=function(t){return function(n,r){if(n.data.__isNew__)return!0;var i=Z({ignoreCase:!0,ignoreAccents:!0,stringify:Zk,trim:!0,matchFrom:"any"},t),o=i.ignoreCase,a=i.ignoreAccents,l=i.stringify,s=i.trim,u=i.matchFrom,p=s?Tf(r):r,h=s?Tf(l(n)):l(n);return o&&(p=p.toLowerCase(),h=h.toLowerCase()),a&&(p=Jk(p),h=Og(h)),u==="start"?h.substr(0,p.length)===p:h.indexOf(p)>-1}},qk=["innerRef"];function eS(e){var t=e.innerRef,n=wn(e,qk),r=O4(n,"onExited","in","enter","exit","appear");return J("input",G({ref:t},r,{css:or({label:"dummyInput",background:0,border:0,caretColor:"transparent",fontSize:"inherit",gridArea:"1 / 1 / 2 / 3",outline:0,padding:0,width:1,color:"transparent",left:-100,opacity:0,position:"relative",transform:"scale(.01)"},"","")}))}var tS=function(t){t.cancelable&&t.preventDefault(),t.stopPropagation()};function nS(e){var t=e.isEnabled,n=e.onBottomArrive,r=e.onBottomLeave,i=e.onTopArrive,o=e.onTopLeave,a=R.useRef(!1),l=R.useRef(!1),s=R.useRef(0),u=R.useRef(null),p=R.useCallback(function(b,d){if(u.current!==null){var f=u.current,m=f.scrollTop,w=f.scrollHeight,k=f.clientHeight,M=u.current,E=d>0,j=w-k-m,C=!1;j>d&&a.current&&(r&&r(b),a.current=!1),E&&l.current&&(o&&o(b),l.current=!1),E&&d>j?(n&&!a.current&&n(b),M.scrollTop=w,C=!0,a.current=!0):!E&&-d>m&&(i&&!l.current&&i(b),M.scrollTop=0,C=!0,l.current=!0),C&&tS(b)}},[n,r,i,o]),h=R.useCallback(function(b){p(b,b.deltaY)},[p]),g=R.useCallback(function(b){s.current=b.changedTouches[0].clientY},[]),v=R.useCallback(function(b){var d=s.current-b.changedTouches[0].clientY;p(b,d)},[p]),x=R.useCallback(function(b){if(b){var d=S4?{passive:!1}:!1;b.addEventListener("wheel",h,d),b.addEventListener("touchstart",g,d),b.addEventListener("touchmove",v,d)}},[v,g,h]),y=R.useCallback(function(b){b&&(b.removeEventListener("wheel",h,!1),b.removeEventListener("touchstart",g,!1),b.removeEventListener("touchmove",v,!1))},[v,g,h]);return R.useEffect(function(){if(t){var b=u.current;return x(b),function(){y(b)}}},[t,x,y]),function(b){u.current=b}}var _f=["boxSizing","height","overflow","paddingRight","position"],Af={boxSizing:"border-box",overflow:"hidden",position:"relative",height:"100%"};function If(e){e.preventDefault()}function Lf(e){e.stopPropagation()}function Rf(){var e=this.scrollTop,t=this.scrollHeight,n=e+this.offsetHeight;e===0?this.scrollTop=1:n===t&&(this.scrollTop=e-1)}function zf(){return"ontouchstart"in window||navigator.maxTouchPoints}var Df=!!(typeof window<"u"&&window.document&&window.document.createElement),di=0,vr={capture:!1,passive:!1};function rS(e){var t=e.isEnabled,n=e.accountForScrollbars,r=n===void 0?!0:n,i=R.useRef({}),o=R.useRef(null),a=R.useCallback(function(s){if(Df){var u=document.body,p=u&&u.style;if(r&&_f.forEach(function(x){var y=p&&p[x];i.current[x]=y}),r&&di<1){var h=parseInt(i.current.paddingRight,10)||0,g=document.body?document.body.clientWidth:0,v=window.innerWidth-g+h||0;Object.keys(Af).forEach(function(x){var y=Af[x];p&&(p[x]=y)}),p&&(p.paddingRight="".concat(v,"px"))}u&&zf()&&(u.addEventListener("touchmove",If,vr),s&&(s.addEventListener("touchstart",Rf,vr),s.addEventListener("touchmove",Lf,vr))),di+=1}},[r]),l=R.useCallback(function(s){if(Df){var u=document.body,p=u&&u.style;di=Math.max(di-1,0),r&&di<1&&_f.forEach(function(h){var g=i.current[h];p&&(p[h]=g)}),u&&zf()&&(u.removeEventListener("touchmove",If,vr),s&&(s.removeEventListener("touchstart",Rf,vr),s.removeEventListener("touchmove",Lf,vr)))}},[r]);return R.useEffect(function(){if(t){var s=o.current;return a(s),function(){l(s)}}},[t,a,l]),function(s){o.current=s}}var iS=function(t){var n=t.target;return n.ownerDocument.activeElement&&n.ownerDocument.activeElement.blur()},oS={name:"1kfdb0e",styles:"position:fixed;left:0;bottom:0;right:0;top:0"};function aS(e){var t=e.children,n=e.lockEnabled,r=e.captureEnabled,i=r===void 0?!0:r,o=e.onBottomArrive,a=e.onBottomLeave,l=e.onTopArrive,s=e.onTopLeave,u=nS({isEnabled:i,onBottomArrive:o,onBottomLeave:a,onTopArrive:l,onTopLeave:s}),p=rS({isEnabled:n}),h=function(v){u(v),p(v)};return J(R.Fragment,null,n&&J("div",{onClick:iS,css:oS}),t(h))}var sS={name:"1a0ro4n-requiredInput",styles:"label:requiredInput;opacity:0;pointer-events:none;position:absolute;bottom:0;left:0;right:0;width:100%"},lS=function(t){var n=t.name,r=t.onFocus;return J("input",{required:!0,name:n,tabIndex:-1,"aria-hidden":"true",onFocus:r,css:sS,value:"",onChange:function(){}})},uS=lS;function Mc(e){var t;return typeof window<"u"&&window.navigator!=null?e.test(((t=window.navigator.userAgentData)===null||t===void 0?void 0:t.platform)||window.navigator.platform):!1}function cS(){return Mc(/^iPhone/i)}function Eg(){return Mc(/^Mac/i)}function dS(){return Mc(/^iPad/i)||Eg()&&navigator.maxTouchPoints>1}function fS(){return cS()||dS()}function pS(){return Eg()||fS()}var hS=function(t){return t.label},mS=function(t){return t.label},gS=function(t){return t.value},xS=function(t){return!!t.isDisabled},vS={clearIndicator:ek,container:B4,control:sk,dropdownIndicator:G4,group:dk,groupHeading:pk,indicatorsContainer:Q4,indicatorSeparator:nk,input:xk,loadingIndicator:ok,loadingMessage:F4,menu:_4,menuList:R4,menuPortal:U4,multiValue:kk,multiValueLabel:Sk,multiValueRemove:jk,noOptionsMessage:D4,option:Tk,placeholder:Ik,singleValue:zk,valueContainer:$4},yS={primary:"#2684FF",primary75:"#4C9AFF",primary50:"#B2D4FF",primary25:"#DEEBFF",danger:"#DE350B",dangerLight:"#FFBDAD",neutral0:"hsl(0, 0%, 100%)",neutral5:"hsl(0, 0%, 95%)",neutral10:"hsl(0, 0%, 90%)",neutral20:"hsl(0, 0%, 80%)",neutral30:"hsl(0, 0%, 70%)",neutral40:"hsl(0, 0%, 60%)",neutral50:"hsl(0, 0%, 50%)",neutral60:"hsl(0, 0%, 40%)",neutral70:"hsl(0, 0%, 30%)",neutral80:"hsl(0, 0%, 20%)",neutral90:"hsl(0, 0%, 10%)"},wS=4,Pg=4,bS=38,kS=Pg*2,SS={baseUnit:Pg,controlHeight:bS,menuGutter:kS},il={borderRadius:wS,colors:yS,spacing:SS},jS={"aria-live":"polite",backspaceRemovesValue:!0,blurInputOnSelect:Of(),captureMenuScroll:!Of(),classNames:{},closeMenuOnSelect:!0,closeMenuOnScroll:!1,components:{},controlShouldRenderValue:!0,escapeClearsValue:!1,filterOption:Gk(),formatGroupLabel:hS,getOptionLabel:mS,getOptionValue:gS,isDisabled:!1,isLoading:!1,isMulti:!1,isRtl:!1,isSearchable:!0,isOptionDisabled:xS,loadingMessage:function(){return"Loading..."},maxMenuHeight:300,minMenuHeight:140,menuIsOpen:!1,menuPlacement:"bottom",menuPosition:"absolute",menuShouldBlockScroll:!1,menuShouldScrollIntoView:!b4(),noOptionsMessage:function(){return"No options"},openMenuOnFocus:!1,openMenuOnClick:!0,options:[],pageSize:5,placeholder:"Select...",screenReaderStatus:function(t){var n=t.count;return"".concat(n," result").concat(n!==1?"s":""," available")},styles:{},tabIndex:0,tabSelectsValue:!0,unstyled:!1};function Ff(e,t,n,r){var i=_g(e,t,n),o=Ag(e,t,n),a=Tg(e,t),l=Ra(e,t);return{type:"option",data:t,isDisabled:i,isSelected:o,label:a,value:l,index:r}}function ta(e,t){return e.options.map(function(n,r){if("options"in n){var i=n.options.map(function(a,l){return Ff(e,a,t,l)}).filter(function(a){return Vf(e,a)});return i.length>0?{type:"group",data:n,options:i,index:r}:void 0}var o=Ff(e,n,t,r);return Vf(e,o)?o:void 0}).filter(j4)}function Mg(e){return e.reduce(function(t,n){return n.type==="group"?t.push.apply(t,jc(n.options.map(function(r){return r.data}))):t.push(n.data),t},[])}function Nf(e,t){return e.reduce(function(n,r){return r.type==="group"?n.push.apply(n,jc(r.options.map(function(i){return{data:i.data,id:"".concat(t,"-").concat(r.index,"-").concat(i.index)}}))):n.push({data:r.data,id:"".concat(t,"-").concat(r.index)}),n},[])}function CS(e,t){return Mg(ta(e,t))}function Vf(e,t){var n=e.inputValue,r=n===void 0?"":n,i=t.data,o=t.isSelected,a=t.label,l=t.value;return(!Lg(e)||!o)&&Ig(e,{label:a,value:l,data:i},r)}function OS(e,t){var n=e.focusedValue,r=e.selectValue,i=r.indexOf(n);if(i>-1){var o=t.indexOf(n);if(o>-1)return n;if(i<t.length)return t[i]}return null}function ES(e,t){var n=e.focusedOption;return n&&t.indexOf(n)>-1?n:t[0]}var ol=function(t,n){var r,i=(r=t.find(function(o){return o.data===n}))===null||r===void 0?void 0:r.id;return i||null},Tg=function(t,n){return t.getOptionLabel(n)},Ra=function(t,n){return t.getOptionValue(n)};function _g(e,t,n){return typeof e.isOptionDisabled=="function"?e.isOptionDisabled(t,n):!1}function Ag(e,t,n){if(n.indexOf(t)>-1)return!0;if(typeof e.isOptionSelected=="function")return e.isOptionSelected(t,n);var r=Ra(e,t);return n.some(function(i){return Ra(e,i)===r})}function Ig(e,t,n){return e.filterOption?e.filterOption(t,n):!0}var Lg=function(t){var n=t.hideSelectedOptions,r=t.isMulti;return n===void 0?r:n},PS=1,Rg=function(e){Q2(n,e);var t=Z2(n);function n(r){var i;if($2(this,n),i=t.call(this,r),i.state={ariaSelection:null,focusedOption:null,focusedOptionId:null,focusableOptionsWithIds:[],focusedValue:null,inputIsHidden:!1,isFocused:!1,selectValue:[],clearFocusValueOnUpdate:!1,prevWasFocused:!1,inputIsHiddenAfterUpdate:void 0,prevProps:void 0,instancePrefix:""},i.blockOptionHover=!1,i.isComposing=!1,i.commonProps=void 0,i.initialTouchX=0,i.initialTouchY=0,i.openAfterFocus=!1,i.scrollToFocusedOptionOnUpdate=!1,i.userIsDragging=void 0,i.isAppleDevice=pS(),i.controlRef=null,i.getControlRef=function(s){i.controlRef=s},i.focusedOptionRef=null,i.getFocusedOptionRef=function(s){i.focusedOptionRef=s},i.menuListRef=null,i.getMenuListRef=function(s){i.menuListRef=s},i.inputRef=null,i.getInputRef=function(s){i.inputRef=s},i.focus=i.focusInput,i.blur=i.blurInput,i.onChange=function(s,u){var p=i.props,h=p.onChange,g=p.name;u.name=g,i.ariaOnChange(s,u),h(s,u)},i.setValue=function(s,u,p){var h=i.props,g=h.closeMenuOnSelect,v=h.isMulti,x=h.inputValue;i.onInputChange("",{action:"set-value",prevInputValue:x}),g&&(i.setState({inputIsHiddenAfterUpdate:!v}),i.onMenuClose()),i.setState({clearFocusValueOnUpdate:!0}),i.onChange(s,{action:u,option:p})},i.selectOption=function(s){var u=i.props,p=u.blurInputOnSelect,h=u.isMulti,g=u.name,v=i.state.selectValue,x=h&&i.isOptionSelected(s,v),y=i.isOptionDisabled(s,v);if(x){var b=i.getOptionValue(s);i.setValue(v.filter(function(d){return i.getOptionValue(d)!==b}),"deselect-option",s)}else if(!y)h?i.setValue([].concat(jc(v),[s]),"select-option",s):i.setValue(s,"select-option");else{i.ariaOnChange(s,{action:"select-option",option:s,name:g});return}p&&i.blurInput()},i.removeValue=function(s){var u=i.props.isMulti,p=i.state.selectValue,h=i.getOptionValue(s),g=p.filter(function(x){return i.getOptionValue(x)!==h}),v=zo(u,g,g[0]||null);i.onChange(v,{action:"remove-value",removedValue:s}),i.focusInput()},i.clearValue=function(){var s=i.state.selectValue;i.onChange(zo(i.props.isMulti,[],null),{action:"clear",removedValues:s})},i.popValue=function(){var s=i.props.isMulti,u=i.state.selectValue,p=u[u.length-1],h=u.slice(0,u.length-1),g=zo(s,h,h[0]||null);i.onChange(g,{action:"pop-value",removedValue:p})},i.getFocusedOptionId=function(s){return ol(i.state.focusableOptionsWithIds,s)},i.getFocusableOptionsWithIds=function(){return Nf(ta(i.props,i.state.selectValue),i.getElementId("option"))},i.getValue=function(){return i.state.selectValue},i.cx=function(){for(var s=arguments.length,u=new Array(s),p=0;p<s;p++)u[p]=arguments[p];return g4.apply(void 0,[i.props.classNamePrefix].concat(u))},i.getOptionLabel=function(s){return Tg(i.props,s)},i.getOptionValue=function(s){return Ra(i.props,s)},i.getStyles=function(s,u){var p=i.props.unstyled,h=vS[s](u,p);h.boxSizing="border-box";var g=i.props.styles[s];return g?g(h,u):h},i.getClassNames=function(s,u){var p,h;return(p=(h=i.props.classNames)[s])===null||p===void 0?void 0:p.call(h,u)},i.getElementId=function(s){return"".concat(i.state.instancePrefix,"-").concat(s)},i.getComponents=function(){return Vk(i.props)},i.buildCategorizedOptions=function(){return ta(i.props,i.state.selectValue)},i.getCategorizedOptions=function(){return i.props.menuIsOpen?i.buildCategorizedOptions():[]},i.buildFocusableOptions=function(){return Mg(i.buildCategorizedOptions())},i.getFocusableOptions=function(){return i.props.menuIsOpen?i.buildFocusableOptions():[]},i.ariaOnChange=function(s,u){i.setState({ariaSelection:Z({value:s},u)})},i.onMenuMouseDown=function(s){s.button===0&&(s.stopPropagation(),s.preventDefault(),i.focusInput())},i.onMenuMouseMove=function(s){i.blockOptionHover=!1},i.onControlMouseDown=function(s){if(!s.defaultPrevented){var u=i.props.openMenuOnClick;i.state.isFocused?i.props.menuIsOpen?s.target.tagName!=="INPUT"&&s.target.tagName!=="TEXTAREA"&&i.onMenuClose():u&&i.openMenu("first"):(u&&(i.openAfterFocus=!0),i.focusInput()),s.target.tagName!=="INPUT"&&s.target.tagName!=="TEXTAREA"&&s.preventDefault()}},i.onDropdownIndicatorMouseDown=function(s){if(!(s&&s.type==="mousedown"&&s.button!==0)&&!i.props.isDisabled){var u=i.props,p=u.isMulti,h=u.menuIsOpen;i.focusInput(),h?(i.setState({inputIsHiddenAfterUpdate:!p}),i.onMenuClose()):i.openMenu("first"),s.preventDefault()}},i.onClearIndicatorMouseDown=function(s){s&&s.type==="mousedown"&&s.button!==0||(i.clearValue(),s.preventDefault(),i.openAfterFocus=!1,s.type==="touchend"?i.focusInput():setTimeout(function(){return i.focusInput()}))},i.onScroll=function(s){typeof i.props.closeMenuOnScroll=="boolean"?s.target instanceof HTMLElement&&xs(s.target)&&i.props.onMenuClose():typeof i.props.closeMenuOnScroll=="function"&&i.props.closeMenuOnScroll(s)&&i.props.onMenuClose()},i.onCompositionStart=function(){i.isComposing=!0},i.onCompositionEnd=function(){i.isComposing=!1},i.onTouchStart=function(s){var u=s.touches,p=u&&u.item(0);p&&(i.initialTouchX=p.clientX,i.initialTouchY=p.clientY,i.userIsDragging=!1)},i.onTouchMove=function(s){var u=s.touches,p=u&&u.item(0);if(p){var h=Math.abs(p.clientX-i.initialTouchX),g=Math.abs(p.clientY-i.initialTouchY),v=5;i.userIsDragging=h>v||g>v}},i.onTouchEnd=function(s){i.userIsDragging||(i.controlRef&&!i.controlRef.contains(s.target)&&i.menuListRef&&!i.menuListRef.contains(s.target)&&i.blurInput(),i.initialTouchX=0,i.initialTouchY=0)},i.onControlTouchEnd=function(s){i.userIsDragging||i.onControlMouseDown(s)},i.onClearIndicatorTouchEnd=function(s){i.userIsDragging||i.onClearIndicatorMouseDown(s)},i.onDropdownIndicatorTouchEnd=function(s){i.userIsDragging||i.onDropdownIndicatorMouseDown(s)},i.handleInputChange=function(s){var u=i.props.inputValue,p=s.currentTarget.value;i.setState({inputIsHiddenAfterUpdate:!1}),i.onInputChange(p,{action:"input-change",prevInputValue:u}),i.props.menuIsOpen||i.onMenuOpen()},i.onInputFocus=function(s){i.props.onFocus&&i.props.onFocus(s),i.setState({inputIsHiddenAfterUpdate:!1,isFocused:!0}),(i.openAfterFocus||i.props.openMenuOnFocus)&&i.openMenu("first"),i.openAfterFocus=!1},i.onInputBlur=function(s){var u=i.props.inputValue;if(i.menuListRef&&i.menuListRef.contains(document.activeElement)){i.inputRef.focus();return}i.props.onBlur&&i.props.onBlur(s),i.onInputChange("",{action:"input-blur",prevInputValue:u}),i.onMenuClose(),i.setState({focusedValue:null,isFocused:!1})},i.onOptionHover=function(s){if(!(i.blockOptionHover||i.state.focusedOption===s)){var u=i.getFocusableOptions(),p=u.indexOf(s);i.setState({focusedOption:s,focusedOptionId:p>-1?i.getFocusedOptionId(s):null})}},i.shouldHideSelectedOptions=function(){return Lg(i.props)},i.onValueInputFocus=function(s){s.preventDefault(),s.stopPropagation(),i.focus()},i.onKeyDown=function(s){var u=i.props,p=u.isMulti,h=u.backspaceRemovesValue,g=u.escapeClearsValue,v=u.inputValue,x=u.isClearable,y=u.isDisabled,b=u.menuIsOpen,d=u.onKeyDown,f=u.tabSelectsValue,m=u.openMenuOnFocus,w=i.state,k=w.focusedOption,M=w.focusedValue,E=w.selectValue;if(!y&&!(typeof d=="function"&&(d(s),s.defaultPrevented))){switch(i.blockOptionHover=!0,s.key){case"ArrowLeft":if(!p||v)return;i.focusValue("previous");break;case"ArrowRight":if(!p||v)return;i.focusValue("next");break;case"Delete":case"Backspace":if(v)return;if(M)i.removeValue(M);else{if(!h)return;p?i.popValue():x&&i.clearValue()}break;case"Tab":if(i.isComposing||s.shiftKey||!b||!f||!k||m&&i.isOptionSelected(k,E))return;i.selectOption(k);break;case"Enter":if(s.keyCode===229)break;if(b){if(!k||i.isComposing)return;i.selectOption(k);break}return;case"Escape":b?(i.setState({inputIsHiddenAfterUpdate:!1}),i.onInputChange("",{action:"menu-close",prevInputValue:v}),i.onMenuClose()):x&&g&&i.clearValue();break;case" ":if(v)return;if(!b){i.openMenu("first");break}if(!k)return;i.selectOption(k);break;case"ArrowUp":b?i.focusOption("up"):i.openMenu("last");break;case"ArrowDown":b?i.focusOption("down"):i.openMenu("first");break;case"PageUp":if(!b)return;i.focusOption("pageup");break;case"PageDown":if(!b)return;i.focusOption("pagedown");break;case"Home":if(!b)return;i.focusOption("first");break;case"End":if(!b)return;i.focusOption("last");break;default:return}s.preventDefault()}},i.state.instancePrefix="react-select-"+(i.props.instanceId||++PS),i.state.selectValue=jf(r.value),r.menuIsOpen&&i.state.selectValue.length){var o=i.getFocusableOptionsWithIds(),a=i.buildFocusableOptions(),l=a.indexOf(i.state.selectValue[0]);i.state.focusableOptionsWithIds=o,i.state.focusedOption=a[l],i.state.focusedOptionId=ol(o,a[l])}return i}return Y2(n,[{key:"componentDidMount",value:function(){this.startListeningComposition(),this.startListeningToTouch(),this.props.closeMenuOnScroll&&document&&document.addEventListener&&document.addEventListener("scroll",this.onScroll,!0),this.props.autoFocus&&this.focusInput(),this.props.menuIsOpen&&this.state.focusedOption&&this.menuListRef&&this.focusedOptionRef&&Cf(this.menuListRef,this.focusedOptionRef)}},{key:"componentDidUpdate",value:function(i){var o=this.props,a=o.isDisabled,l=o.menuIsOpen,s=this.state.isFocused;(s&&!a&&i.isDisabled||s&&l&&!i.menuIsOpen)&&this.focusInput(),s&&a&&!i.isDisabled?this.setState({isFocused:!1},this.onMenuClose):!s&&!a&&i.isDisabled&&this.inputRef===document.activeElement&&this.setState({isFocused:!0}),this.menuListRef&&this.focusedOptionRef&&this.scrollToFocusedOptionOnUpdate&&(Cf(this.menuListRef,this.focusedOptionRef),this.scrollToFocusedOptionOnUpdate=!1)}},{key:"componentWillUnmount",value:function(){this.stopListeningComposition(),this.stopListeningToTouch(),document.removeEventListener("scroll",this.onScroll,!0)}},{key:"onMenuOpen",value:function(){this.props.onMenuOpen()}},{key:"onMenuClose",value:function(){this.onInputChange("",{action:"menu-close",prevInputValue:this.props.inputValue}),this.props.onMenuClose()}},{key:"onInputChange",value:function(i,o){this.props.onInputChange(i,o)}},{key:"focusInput",value:function(){this.inputRef&&this.inputRef.focus()}},{key:"blurInput",value:function(){this.inputRef&&this.inputRef.blur()}},{key:"openMenu",value:function(i){var o=this,a=this.state,l=a.selectValue,s=a.isFocused,u=this.buildFocusableOptions(),p=i==="first"?0:u.length-1;if(!this.props.isMulti){var h=u.indexOf(l[0]);h>-1&&(p=h)}this.scrollToFocusedOptionOnUpdate=!(s&&this.menuListRef),this.setState({inputIsHiddenAfterUpdate:!1,focusedValue:null,focusedOption:u[p],focusedOptionId:this.getFocusedOptionId(u[p])},function(){return o.onMenuOpen()})}},{key:"focusValue",value:function(i){var o=this.state,a=o.selectValue,l=o.focusedValue;if(this.props.isMulti){this.setState({focusedOption:null});var s=a.indexOf(l);l||(s=-1);var u=a.length-1,p=-1;if(a.length){switch(i){case"previous":s===0?p=0:s===-1?p=u:p=s-1;break;case"next":s>-1&&s<u&&(p=s+1);break}this.setState({inputIsHidden:p!==-1,focusedValue:a[p]})}}}},{key:"focusOption",value:function(){var i=arguments.length>0&&arguments[0]!==void 0?arguments[0]:"first",o=this.props.pageSize,a=this.state.focusedOption,l=this.getFocusableOptions();if(l.length){var s=0,u=l.indexOf(a);a||(u=-1),i==="up"?s=u>0?u-1:l.length-1:i==="down"?s=(u+1)%l.length:i==="pageup"?(s=u-o,s<0&&(s=0)):i==="pagedown"?(s=u+o,s>l.length-1&&(s=l.length-1)):i==="last"&&(s=l.length-1),this.scrollToFocusedOptionOnUpdate=!0,this.setState({focusedOption:l[s],focusedValue:null,focusedOptionId:this.getFocusedOptionId(l[s])})}}},{key:"getTheme",value:function(){return this.props.theme?typeof this.props.theme=="function"?this.props.theme(il):Z(Z({},il),this.props.theme):il}},{key:"getCommonProps",value:function(){var i=this.clearValue,o=this.cx,a=this.getStyles,l=this.getClassNames,s=this.getValue,u=this.selectOption,p=this.setValue,h=this.props,g=h.isMulti,v=h.isRtl,x=h.options,y=this.hasValue();return{clearValue:i,cx:o,getStyles:a,getClassNames:l,getValue:s,hasValue:y,isMulti:g,isRtl:v,options:x,selectOption:u,selectProps:h,setValue:p,theme:this.getTheme()}}},{key:"hasValue",value:function(){var i=this.state.selectValue;return i.length>0}},{key:"hasOptions",value:function(){return!!this.getFocusableOptions().length}},{key:"isClearable",value:function(){var i=this.props,o=i.isClearable,a=i.isMulti;return o===void 0?a:o}},{key:"isOptionDisabled",value:function(i,o){return _g(this.props,i,o)}},{key:"isOptionSelected",value:function(i,o){return Ag(this.props,i,o)}},{key:"filterOption",value:function(i,o){return Ig(this.props,i,o)}},{key:"formatOptionLabel",value:function(i,o){if(typeof this.props.formatOptionLabel=="function"){var a=this.props.inputValue,l=this.state.selectValue;return this.props.formatOptionLabel(i,{context:o,inputValue:a,selectValue:l})}else return this.getOptionLabel(i)}},{key:"formatGroupLabel",value:function(i){return this.props.formatGroupLabel(i)}},{key:"startListeningComposition",value:function(){document&&document.addEventListener&&(document.addEventListener("compositionstart",this.onCompositionStart,!1),document.addEventListener("compositionend",this.onCompositionEnd,!1))}},{key:"stopListeningComposition",value:function(){document&&document.removeEventListener&&(document.removeEventListener("compositionstart",this.onCompositionStart),document.removeEventListener("compositionend",this.onCompositionEnd))}},{key:"startListeningToTouch",value:function(){document&&document.addEventListener&&(document.addEventListener("touchstart",this.onTouchStart,!1),document.addEventListener("touchmove",this.onTouchMove,!1),document.addEventListener("touchend",this.onTouchEnd,!1))}},{key:"stopListeningToTouch",value:function(){document&&document.removeEventListener&&(document.removeEventListener("touchstart",this.onTouchStart),document.removeEventListener("touchmove",this.onTouchMove),document.removeEventListener("touchend",this.onTouchEnd))}},{key:"renderInput",value:function(){var i=this.props,o=i.isDisabled,a=i.isSearchable,l=i.inputId,s=i.inputValue,u=i.tabIndex,p=i.form,h=i.menuIsOpen,g=i.required,v=this.getComponents(),x=v.Input,y=this.state,b=y.inputIsHidden,d=y.ariaSelection,f=this.commonProps,m=l||this.getElementId("input"),w=Z(Z(Z({"aria-autocomplete":"list","aria-expanded":h,"aria-haspopup":!0,"aria-errormessage":this.props["aria-errormessage"],"aria-invalid":this.props["aria-invalid"],"aria-label":this.props["aria-label"],"aria-labelledby":this.props["aria-labelledby"],"aria-required":g,role:"combobox","aria-activedescendant":this.isAppleDevice?void 0:this.state.focusedOptionId||""},h&&{"aria-controls":this.getElementId("listbox")}),!a&&{"aria-readonly":!0}),this.hasValue()?(d==null?void 0:d.action)==="initial-input-focus"&&{"aria-describedby":this.getElementId("live-region")}:{"aria-describedby":this.getElementId("placeholder")});return a?R.createElement(x,G({},f,{autoCapitalize:"none",autoComplete:"off",autoCorrect:"off",id:m,innerRef:this.getInputRef,isDisabled:o,isHidden:b,onBlur:this.onInputBlur,onChange:this.handleInputChange,onFocus:this.onInputFocus,spellCheck:"false",tabIndex:u,form:p,type:"text",value:s},w)):R.createElement(eS,G({id:m,innerRef:this.getInputRef,onBlur:this.onInputBlur,onChange:Ia,onFocus:this.onInputFocus,disabled:o,tabIndex:u,inputMode:"none",form:p,value:""},w))}},{key:"renderPlaceholderOrValue",value:function(){var i=this,o=this.getComponents(),a=o.MultiValue,l=o.MultiValueContainer,s=o.MultiValueLabel,u=o.MultiValueRemove,p=o.SingleValue,h=o.Placeholder,g=this.commonProps,v=this.props,x=v.controlShouldRenderValue,y=v.isDisabled,b=v.isMulti,d=v.inputValue,f=v.placeholder,m=this.state,w=m.selectValue,k=m.focusedValue,M=m.isFocused;if(!this.hasValue()||!x)return d?null:R.createElement(h,G({},g,{key:"placeholder",isDisabled:y,isFocused:M,innerProps:{id:this.getElementId("placeholder")}}),f);if(b)return w.map(function(j,C){var T=j===k,_="".concat(i.getOptionLabel(j),"-").concat(i.getOptionValue(j));return R.createElement(a,G({},g,{components:{Container:l,Label:s,Remove:u},isFocused:T,isDisabled:y,key:_,index:C,removeProps:{onClick:function(){return i.removeValue(j)},onTouchEnd:function(){return i.removeValue(j)},onMouseDown:function(L){L.preventDefault()}},data:j}),i.formatOptionLabel(j,"value"))});if(d)return null;var E=w[0];return R.createElement(p,G({},g,{data:E,isDisabled:y}),this.formatOptionLabel(E,"value"))}},{key:"renderClearIndicator",value:function(){var i=this.getComponents(),o=i.ClearIndicator,a=this.commonProps,l=this.props,s=l.isDisabled,u=l.isLoading,p=this.state.isFocused;if(!this.isClearable()||!o||s||!this.hasValue()||u)return null;var h={onMouseDown:this.onClearIndicatorMouseDown,onTouchEnd:this.onClearIndicatorTouchEnd,"aria-hidden":"true"};return R.createElement(o,G({},a,{innerProps:h,isFocused:p}))}},{key:"renderLoadingIndicator",value:function(){var i=this.getComponents(),o=i.LoadingIndicator,a=this.commonProps,l=this.props,s=l.isDisabled,u=l.isLoading,p=this.state.isFocused;if(!o||!u)return null;var h={"aria-hidden":"true"};return R.createElement(o,G({},a,{innerProps:h,isDisabled:s,isFocused:p}))}},{key:"renderIndicatorSeparator",value:function(){var i=this.getComponents(),o=i.DropdownIndicator,a=i.IndicatorSeparator;if(!o||!a)return null;var l=this.commonProps,s=this.props.isDisabled,u=this.state.isFocused;return R.createElement(a,G({},l,{isDisabled:s,isFocused:u}))}},{key:"renderDropdownIndicator",value:function(){var i=this.getComponents(),o=i.DropdownIndicator;if(!o)return null;var a=this.commonProps,l=this.props.isDisabled,s=this.state.isFocused,u={onMouseDown:this.onDropdownIndicatorMouseDown,onTouchEnd:this.onDropdownIndicatorTouchEnd,"aria-hidden":"true"};return R.createElement(o,G({},a,{innerProps:u,isDisabled:l,isFocused:s}))}},{key:"renderMenu",value:function(){var i=this,o=this.getComponents(),a=o.Group,l=o.GroupHeading,s=o.Menu,u=o.MenuList,p=o.MenuPortal,h=o.LoadingMessage,g=o.NoOptionsMessage,v=o.Option,x=this.commonProps,y=this.state.focusedOption,b=this.props,d=b.captureMenuScroll,f=b.inputValue,m=b.isLoading,w=b.loadingMessage,k=b.minMenuHeight,M=b.maxMenuHeight,E=b.menuIsOpen,j=b.menuPlacement,C=b.menuPosition,T=b.menuPortalTarget,_=b.menuShouldBlockScroll,I=b.menuShouldScrollIntoView,L=b.noOptionsMessage,U=b.onMenuScrollToTop,H=b.onMenuScrollToBottom;if(!E)return null;var q=function(Ce,we){var We=Ce.type,de=Ce.data,Pe=Ce.isDisabled,Qe=Ce.isSelected,Ot=Ce.label,D=Ce.value,$=y===de,oe=Pe?void 0:function(){return i.onOptionHover(de)},ie=Pe?void 0:function(){return i.selectOption(de)},re="".concat(i.getElementId("option"),"-").concat(we),se={id:re,onClick:ie,onMouseMove:oe,onMouseOver:oe,tabIndex:-1,role:"option","aria-selected":i.isAppleDevice?void 0:Qe};return R.createElement(v,G({},x,{innerProps:se,data:de,isDisabled:Pe,isSelected:Qe,key:re,label:Ot,type:We,value:D,isFocused:$,innerRef:$?i.getFocusedOptionRef:void 0}),i.formatOptionLabel(Ce.data,"menu"))},he;if(this.hasOptions())he=this.getCategorizedOptions().map(function(ne){if(ne.type==="group"){var Ce=ne.data,we=ne.options,We=ne.index,de="".concat(i.getElementId("group"),"-").concat(We),Pe="".concat(de,"-heading");return R.createElement(a,G({},x,{key:de,data:Ce,options:we,Heading:l,headingProps:{id:Pe,data:ne.data},label:i.formatGroupLabel(ne.data)}),ne.options.map(function(Qe){return q(Qe,"".concat(We,"-").concat(Qe.index))}))}else if(ne.type==="option")return q(ne,"".concat(ne.index))});else if(m){var F=w({inputValue:f});if(F===null)return null;he=R.createElement(h,x,F)}else{var Q=L({inputValue:f});if(Q===null)return null;he=R.createElement(g,x,Q)}var X={minMenuHeight:k,maxMenuHeight:M,menuPlacement:j,menuPosition:C,menuShouldScrollIntoView:I},ce=R.createElement(A4,G({},x,X),function(ne){var Ce=ne.ref,we=ne.placerProps,We=we.placement,de=we.maxHeight;return R.createElement(s,G({},x,X,{innerRef:Ce,innerProps:{onMouseDown:i.onMenuMouseDown,onMouseMove:i.onMenuMouseMove},isLoading:m,placement:We}),R.createElement(aS,{captureEnabled:d,onTopArrive:U,onBottomArrive:H,lockEnabled:_},function(Pe){return R.createElement(u,G({},x,{innerRef:function(Ot){i.getMenuListRef(Ot),Pe(Ot)},innerProps:{role:"listbox","aria-multiselectable":x.isMulti,id:i.getElementId("listbox")},isLoading:m,maxHeight:de,focusedOption:y}),he)}))});return T||C==="fixed"?R.createElement(p,G({},x,{appendTo:T,controlElement:this.controlRef,menuPlacement:j,menuPosition:C}),ce):ce}},{key:"renderFormField",value:function(){var i=this,o=this.props,a=o.delimiter,l=o.isDisabled,s=o.isMulti,u=o.name,p=o.required,h=this.state.selectValue;if(p&&!this.hasValue()&&!l)return R.createElement(uS,{name:u,onFocus:this.onValueInputFocus});if(!(!u||l))if(s)if(a){var g=h.map(function(y){return i.getOptionValue(y)}).join(a);return R.createElement("input",{name:u,type:"hidden",value:g})}else{var v=h.length>0?h.map(function(y,b){return R.createElement("input",{key:"i-".concat(b),name:u,type:"hidden",value:i.getOptionValue(y)})}):R.createElement("input",{name:u,type:"hidden",value:""});return R.createElement("div",null,v)}else{var x=h[0]?this.getOptionValue(h[0]):"";return R.createElement("input",{name:u,type:"hidden",value:x})}}},{key:"renderLiveRegion",value:function(){var i=this.commonProps,o=this.state,a=o.ariaSelection,l=o.focusedOption,s=o.focusedValue,u=o.isFocused,p=o.selectValue,h=this.getFocusableOptions();return R.createElement(Xk,G({},i,{id:this.getElementId("live-region"),ariaSelection:a,focusedOption:l,focusedValue:s,isFocused:u,selectValue:p,focusableOptions:h,isAppleDevice:this.isAppleDevice}))}},{key:"render",value:function(){var i=this.getComponents(),o=i.Control,a=i.IndicatorsContainer,l=i.SelectContainer,s=i.ValueContainer,u=this.props,p=u.className,h=u.id,g=u.isDisabled,v=u.menuIsOpen,x=this.state.isFocused,y=this.commonProps=this.getCommonProps();return R.createElement(l,G({},y,{className:p,innerProps:{id:h,onKeyDown:this.onKeyDown},isDisabled:g,isFocused:x}),this.renderLiveRegion(),R.createElement(o,G({},y,{innerRef:this.getControlRef,innerProps:{onMouseDown:this.onControlMouseDown,onTouchEnd:this.onControlTouchEnd},isDisabled:g,isFocused:x,menuIsOpen:v}),R.createElement(s,G({},y,{isDisabled:g}),this.renderPlaceholderOrValue(),this.renderInput()),R.createElement(a,G({},y,{isDisabled:g}),this.renderClearIndicator(),this.renderLoadingIndicator(),this.renderIndicatorSeparator(),this.renderDropdownIndicator())),this.renderMenu(),this.renderFormField())}}],[{key:"getDerivedStateFromProps",value:function(i,o){var a=o.prevProps,l=o.clearFocusValueOnUpdate,s=o.inputIsHiddenAfterUpdate,u=o.ariaSelection,p=o.isFocused,h=o.prevWasFocused,g=o.instancePrefix,v=i.options,x=i.value,y=i.menuIsOpen,b=i.inputValue,d=i.isMulti,f=jf(x),m={};if(a&&(x!==a.value||v!==a.options||y!==a.menuIsOpen||b!==a.inputValue)){var w=y?CS(i,f):[],k=y?Nf(ta(i,f),"".concat(g,"-option")):[],M=l?OS(o,f):null,E=ES(o,w),j=ol(k,E);m={selectValue:f,focusedOption:E,focusedOptionId:j,focusableOptionsWithIds:k,focusedValue:M,clearFocusValueOnUpdate:!1}}var C=s!=null&&i!==a?{inputIsHidden:s,inputIsHiddenAfterUpdate:void 0}:{},T=u,_=p&&h;return p&&!_&&(T={value:zo(d,f,f[0]||null),options:f,action:"initial-input-focus"},_=!h),(u==null?void 0:u.action)==="initial-input-focus"&&(T=null),Z(Z(Z({},m),C),{},{prevProps:i,ariaSelection:T,prevWasFocused:_})}}]),n}(R.Component);Rg.defaultProps=jS;var MS=R.forwardRef(function(e,t){var n=H2(e);return R.createElement(Rg,G({ref:t},n))}),TS=MS,zg={exports:{}};(function(e,t){(function(n,r){e.exports=r()})(sp,function(){return function(n){function r(o){if(i[o])return i[o].exports;var a=i[o]={i:o,l:!1,exports:{}};return n[o].call(a.exports,a,a.exports,r),a.l=!0,a.exports}var i={};return r.m=n,r.c=i,r.d=function(o,a,l){r.o(o,a)||Object.defineProperty(o,a,{configurable:!1,enumerable:!0,get:l})},r.n=function(o){var a=o&&o.__esModule?function(){return o.default}:function(){return o};return r.d(a,"a",a),a},r.o=function(o,a){return Object.prototype.hasOwnProperty.call(o,a)},r.p="",r(r.s=8)}([function(n,r,i){Object.defineProperty(r,"__esModule",{value:!0});var o="swal-button";r.CLASS_NAMES={MODAL:"swal-modal",OVERLAY:"swal-overlay",SHOW_MODAL:"swal-overlay--show-modal",MODAL_TITLE:"swal-title",MODAL_TEXT:"swal-text",ICON:"swal-icon",ICON_CUSTOM:"swal-icon--custom",CONTENT:"swal-content",FOOTER:"swal-footer",BUTTON_CONTAINER:"swal-button-container",BUTTON:o,CONFIRM_BUTTON:o+"--confirm",CANCEL_BUTTON:o+"--cancel",DANGER_BUTTON:o+"--danger",BUTTON_LOADING:o+"--loading",BUTTON_LOADER:o+"__loader"},r.default=r.CLASS_NAMES},function(n,r,i){Object.defineProperty(r,"__esModule",{value:!0}),r.getNode=function(o){var a="."+o;return document.querySelector(a)},r.stringToNode=function(o){var a=document.createElement("div");return a.innerHTML=o.trim(),a.firstChild},r.insertAfter=function(o,a){var l=a.nextSibling;a.parentNode.insertBefore(o,l)},r.removeNode=function(o){o.parentElement.removeChild(o)},r.throwErr=function(o){throw o=o.replace(/ +(?= )/g,""),"SweetAlert: "+(o=o.trim())},r.isPlainObject=function(o){if(Object.prototype.toString.call(o)!=="[object Object]")return!1;var a=Object.getPrototypeOf(o);return a===null||a===Object.prototype},r.ordinalSuffixOf=function(o){var a=o%10,l=o%100;return a===1&&l!==11?o+"st":a===2&&l!==12?o+"nd":a===3&&l!==13?o+"rd":o+"th"}},function(n,r,i){function o(g){for(var v in g)r.hasOwnProperty(v)||(r[v]=g[v])}Object.defineProperty(r,"__esModule",{value:!0}),o(i(25));var a=i(26);r.overlayMarkup=a.default,o(i(27)),o(i(28)),o(i(29));var l=i(0),s=l.default.MODAL_TITLE,u=l.default.MODAL_TEXT,p=l.default.ICON,h=l.default.FOOTER;r.iconMarkup=`
  <div class="`+p+'"></div>',r.titleMarkup=`
  <div class="`+s+`"></div>
`,r.textMarkup=`
  <div class="`+u+'"></div>',r.footerMarkup=`
  <div class="`+h+`"></div>
`},function(n,r,i){Object.defineProperty(r,"__esModule",{value:!0});var o=i(1);r.CONFIRM_KEY="confirm",r.CANCEL_KEY="cancel";var a={visible:!0,text:null,value:null,className:"",closeModal:!0},l=Object.assign({},a,{visible:!1,text:"Cancel",value:null}),s=Object.assign({},a,{text:"OK",value:!0});r.defaultButtonList={cancel:l,confirm:s};var u=function(v){switch(v){case r.CONFIRM_KEY:return s;case r.CANCEL_KEY:return l;default:var x=v.charAt(0).toUpperCase()+v.slice(1);return Object.assign({},a,{text:x,value:v})}},p=function(v,x){var y=u(v);return x===!0?Object.assign({},y,{visible:!0}):typeof x=="string"?Object.assign({},y,{visible:!0,text:x}):o.isPlainObject(x)?Object.assign({visible:!0},y,x):Object.assign({},y,{visible:!1})},h=function(v){for(var x={},y=0,b=Object.keys(v);y<b.length;y++){var d=b[y],f=v[d],m=p(d,f);x[d]=m}return x.cancel||(x.cancel=l),x},g=function(v){var x={};switch(v.length){case 1:x[r.CANCEL_KEY]=Object.assign({},l,{visible:!1});break;case 2:x[r.CANCEL_KEY]=p(r.CANCEL_KEY,v[0]),x[r.CONFIRM_KEY]=p(r.CONFIRM_KEY,v[1]);break;default:o.throwErr("Invalid number of 'buttons' in array ("+v.length+`).
      If you want more than 2 buttons, you need to use an object!`)}return x};r.getButtonListOpts=function(v){var x=r.defaultButtonList;return typeof v=="string"?x[r.CONFIRM_KEY]=p(r.CONFIRM_KEY,v):Array.isArray(v)?x=g(v):o.isPlainObject(v)?x=h(v):v===!0?x=g([!0,!0]):v===!1?x=g([!1,!1]):v===void 0&&(x=r.defaultButtonList),x}},function(n,r,i){Object.defineProperty(r,"__esModule",{value:!0});var o=i(1),a=i(2),l=i(0),s=l.default.MODAL,u=l.default.OVERLAY,p=i(30),h=i(31),g=i(32),v=i(33);r.injectElIntoModal=function(d){var f=o.getNode(s),m=o.stringToNode(d);return f.appendChild(m),m};var x=function(d){d.className=s,d.textContent=""},y=function(d,f){x(d);var m=f.className;m&&d.classList.add(m)};r.initModalContent=function(d){var f=o.getNode(s);y(f,d),p.default(d.icon),h.initTitle(d.title),h.initText(d.text),v.default(d.content),g.default(d.buttons,d.dangerMode)};var b=function(){var d=o.getNode(u),f=o.stringToNode(a.modalMarkup);d.appendChild(f)};r.default=b},function(n,r,i){Object.defineProperty(r,"__esModule",{value:!0});var o=i(3),a={isOpen:!1,promise:null,actions:{},timer:null},l=Object.assign({},a);r.resetState=function(){l=Object.assign({},a)},r.setActionValue=function(u){if(typeof u=="string")return s(o.CONFIRM_KEY,u);for(var p in u)s(p,u[p])};var s=function(u,p){l.actions[u]||(l.actions[u]={}),Object.assign(l.actions[u],{value:p})};r.setActionOptionsFor=function(u,p){var h=(p===void 0?{}:p).closeModal,g=h===void 0||h;Object.assign(l.actions[u],{closeModal:g})},r.default=l},function(n,r,i){Object.defineProperty(r,"__esModule",{value:!0});var o=i(1),a=i(3),l=i(0),s=l.default.OVERLAY,u=l.default.SHOW_MODAL,p=l.default.BUTTON,h=l.default.BUTTON_LOADING,g=i(5);r.openModal=function(){o.getNode(s).classList.add(u),g.default.isOpen=!0};var v=function(){o.getNode(s).classList.remove(u),g.default.isOpen=!1};r.onAction=function(x){x===void 0&&(x=a.CANCEL_KEY);var y=g.default.actions[x],b=y.value;if(y.closeModal===!1){var d=p+"--"+x;o.getNode(d).classList.add(h)}else v();g.default.promise.resolve(b)},r.getState=function(){var x=Object.assign({},g.default);return delete x.promise,delete x.timer,x},r.stopLoading=function(){for(var x=document.querySelectorAll("."+p),y=0;y<x.length;y++)x[y].classList.remove(h)}},function(n,r){var i;i=function(){return this}();try{i=i||Function("return this")()||(0,eval)("this")}catch{typeof window=="object"&&(i=window)}n.exports=i},function(n,r,i){(function(o){n.exports=o.sweetAlert=i(9)}).call(r,i(7))},function(n,r,i){(function(o){n.exports=o.swal=i(10)}).call(r,i(7))},function(n,r,i){typeof window<"u"&&i(11),i(16);var o=i(23).default;n.exports=o},function(n,r,i){var o=i(12);typeof o=="string"&&(o=[[n.i,o,""]]);var a={insertAt:"top"};a.transform=void 0,i(14)(o,a),o.locals&&(n.exports=o.locals)},function(n,r,i){r=n.exports=i(13)(void 0),r.push([n.i,'.swal-icon--error{border-color:#f27474;-webkit-animation:animateErrorIcon .5s;animation:animateErrorIcon .5s}.swal-icon--error__x-mark{position:relative;display:block;-webkit-animation:animateXMark .5s;animation:animateXMark .5s}.swal-icon--error__line{position:absolute;height:5px;width:47px;background-color:#f27474;display:block;top:37px;border-radius:2px}.swal-icon--error__line--left{-webkit-transform:rotate(45deg);transform:rotate(45deg);left:17px}.swal-icon--error__line--right{-webkit-transform:rotate(-45deg);transform:rotate(-45deg);right:16px}@-webkit-keyframes animateErrorIcon{0%{-webkit-transform:rotateX(100deg);transform:rotateX(100deg);opacity:0}to{-webkit-transform:rotateX(0deg);transform:rotateX(0deg);opacity:1}}@keyframes animateErrorIcon{0%{-webkit-transform:rotateX(100deg);transform:rotateX(100deg);opacity:0}to{-webkit-transform:rotateX(0deg);transform:rotateX(0deg);opacity:1}}@-webkit-keyframes animateXMark{0%{-webkit-transform:scale(.4);transform:scale(.4);margin-top:26px;opacity:0}50%{-webkit-transform:scale(.4);transform:scale(.4);margin-top:26px;opacity:0}80%{-webkit-transform:scale(1.15);transform:scale(1.15);margin-top:-6px}to{-webkit-transform:scale(1);transform:scale(1);margin-top:0;opacity:1}}@keyframes animateXMark{0%{-webkit-transform:scale(.4);transform:scale(.4);margin-top:26px;opacity:0}50%{-webkit-transform:scale(.4);transform:scale(.4);margin-top:26px;opacity:0}80%{-webkit-transform:scale(1.15);transform:scale(1.15);margin-top:-6px}to{-webkit-transform:scale(1);transform:scale(1);margin-top:0;opacity:1}}.swal-icon--warning{border-color:#f8bb86;-webkit-animation:pulseWarning .75s infinite alternate;animation:pulseWarning .75s infinite alternate}.swal-icon--warning__body{width:5px;height:47px;top:10px;border-radius:2px;margin-left:-2px}.swal-icon--warning__body,.swal-icon--warning__dot{position:absolute;left:50%;background-color:#f8bb86}.swal-icon--warning__dot{width:7px;height:7px;border-radius:50%;margin-left:-4px;bottom:-11px}@-webkit-keyframes pulseWarning{0%{border-color:#f8d486}to{border-color:#f8bb86}}@keyframes pulseWarning{0%{border-color:#f8d486}to{border-color:#f8bb86}}.swal-icon--success{border-color:#a5dc86}.swal-icon--success:after,.swal-icon--success:before{content:"";border-radius:50%;position:absolute;width:60px;height:120px;background:#fff;-webkit-transform:rotate(45deg);transform:rotate(45deg)}.swal-icon--success:before{border-radius:120px 0 0 120px;top:-7px;left:-33px;-webkit-transform:rotate(-45deg);transform:rotate(-45deg);-webkit-transform-origin:60px 60px;transform-origin:60px 60px}.swal-icon--success:after{border-radius:0 120px 120px 0;top:-11px;left:30px;-webkit-transform:rotate(-45deg);transform:rotate(-45deg);-webkit-transform-origin:0 60px;transform-origin:0 60px;-webkit-animation:rotatePlaceholder 4.25s ease-in;animation:rotatePlaceholder 4.25s ease-in}.swal-icon--success__ring{width:80px;height:80px;border:4px solid hsla(98,55%,69%,.2);border-radius:50%;box-sizing:content-box;position:absolute;left:-4px;top:-4px;z-index:2}.swal-icon--success__hide-corners{width:5px;height:90px;background-color:#fff;padding:1px;position:absolute;left:28px;top:8px;z-index:1;-webkit-transform:rotate(-45deg);transform:rotate(-45deg)}.swal-icon--success__line{height:5px;background-color:#a5dc86;display:block;border-radius:2px;position:absolute;z-index:2}.swal-icon--success__line--tip{width:25px;left:14px;top:46px;-webkit-transform:rotate(45deg);transform:rotate(45deg);-webkit-animation:animateSuccessTip .75s;animation:animateSuccessTip .75s}.swal-icon--success__line--long{width:47px;right:8px;top:38px;-webkit-transform:rotate(-45deg);transform:rotate(-45deg);-webkit-animation:animateSuccessLong .75s;animation:animateSuccessLong .75s}@-webkit-keyframes rotatePlaceholder{0%{-webkit-transform:rotate(-45deg);transform:rotate(-45deg)}5%{-webkit-transform:rotate(-45deg);transform:rotate(-45deg)}12%{-webkit-transform:rotate(-405deg);transform:rotate(-405deg)}to{-webkit-transform:rotate(-405deg);transform:rotate(-405deg)}}@keyframes rotatePlaceholder{0%{-webkit-transform:rotate(-45deg);transform:rotate(-45deg)}5%{-webkit-transform:rotate(-45deg);transform:rotate(-45deg)}12%{-webkit-transform:rotate(-405deg);transform:rotate(-405deg)}to{-webkit-transform:rotate(-405deg);transform:rotate(-405deg)}}@-webkit-keyframes animateSuccessTip{0%{width:0;left:1px;top:19px}54%{width:0;left:1px;top:19px}70%{width:50px;left:-8px;top:37px}84%{width:17px;left:21px;top:48px}to{width:25px;left:14px;top:45px}}@keyframes animateSuccessTip{0%{width:0;left:1px;top:19px}54%{width:0;left:1px;top:19px}70%{width:50px;left:-8px;top:37px}84%{width:17px;left:21px;top:48px}to{width:25px;left:14px;top:45px}}@-webkit-keyframes animateSuccessLong{0%{width:0;right:46px;top:54px}65%{width:0;right:46px;top:54px}84%{width:55px;right:0;top:35px}to{width:47px;right:8px;top:38px}}@keyframes animateSuccessLong{0%{width:0;right:46px;top:54px}65%{width:0;right:46px;top:54px}84%{width:55px;right:0;top:35px}to{width:47px;right:8px;top:38px}}.swal-icon--info{border-color:#c9dae1}.swal-icon--info:before{width:5px;height:29px;bottom:17px;border-radius:2px;margin-left:-2px}.swal-icon--info:after,.swal-icon--info:before{content:"";position:absolute;left:50%;background-color:#c9dae1}.swal-icon--info:after{width:7px;height:7px;border-radius:50%;margin-left:-3px;top:19px}.swal-icon{width:80px;height:80px;border-width:4px;border-style:solid;border-radius:50%;padding:0;position:relative;box-sizing:content-box;margin:20px auto}.swal-icon:first-child{margin-top:32px}.swal-icon--custom{width:auto;height:auto;max-width:100%;border:none;border-radius:0}.swal-icon img{max-width:100%;max-height:100%}.swal-title{color:rgba(0,0,0,.65);font-weight:600;text-transform:none;position:relative;display:block;padding:13px 16px;font-size:27px;line-height:normal;text-align:center;margin-bottom:0}.swal-title:first-child{margin-top:26px}.swal-title:not(:first-child){padding-bottom:0}.swal-title:not(:last-child){margin-bottom:13px}.swal-text{font-size:16px;position:relative;float:none;line-height:normal;vertical-align:top;text-align:left;display:inline-block;margin:0;padding:0 10px;font-weight:400;color:rgba(0,0,0,.64);max-width:calc(100% - 20px);overflow-wrap:break-word;box-sizing:border-box}.swal-text:first-child{margin-top:45px}.swal-text:last-child{margin-bottom:45px}.swal-footer{text-align:right;padding-top:13px;margin-top:13px;padding:13px 16px;border-radius:inherit;border-top-left-radius:0;border-top-right-radius:0}.swal-button-container{margin:5px;display:inline-block;position:relative}.swal-button{background-color:#7cd1f9;color:#fff;border:none;box-shadow:none;border-radius:5px;font-weight:600;font-size:14px;padding:10px 24px;margin:0;cursor:pointer}.swal-button:not([disabled]):hover{background-color:#78cbf2}.swal-button:active{background-color:#70bce0}.swal-button:focus{outline:none;box-shadow:0 0 0 1px #fff,0 0 0 3px rgba(43,114,165,.29)}.swal-button[disabled]{opacity:.5;cursor:default}.swal-button::-moz-focus-inner{border:0}.swal-button--cancel{color:#555;background-color:#efefef}.swal-button--cancel:not([disabled]):hover{background-color:#e8e8e8}.swal-button--cancel:active{background-color:#d7d7d7}.swal-button--cancel:focus{box-shadow:0 0 0 1px #fff,0 0 0 3px rgba(116,136,150,.29)}.swal-button--danger{background-color:#e64942}.swal-button--danger:not([disabled]):hover{background-color:#df4740}.swal-button--danger:active{background-color:#cf423b}.swal-button--danger:focus{box-shadow:0 0 0 1px #fff,0 0 0 3px rgba(165,43,43,.29)}.swal-content{padding:0 20px;margin-top:20px;font-size:medium}.swal-content:last-child{margin-bottom:20px}.swal-content__input,.swal-content__textarea{-webkit-appearance:none;background-color:#fff;border:none;font-size:14px;display:block;box-sizing:border-box;width:100%;border:1px solid rgba(0,0,0,.14);padding:10px 13px;border-radius:2px;transition:border-color .2s}.swal-content__input:focus,.swal-content__textarea:focus{outline:none;border-color:#6db8ff}.swal-content__textarea{resize:vertical}.swal-button--loading{color:transparent}.swal-button--loading~.swal-button__loader{opacity:1}.swal-button__loader{position:absolute;height:auto;width:43px;z-index:2;left:50%;top:50%;-webkit-transform:translateX(-50%) translateY(-50%);transform:translateX(-50%) translateY(-50%);text-align:center;pointer-events:none;opacity:0}.swal-button__loader div{display:inline-block;float:none;vertical-align:baseline;width:9px;height:9px;padding:0;border:none;margin:2px;opacity:.4;border-radius:7px;background-color:hsla(0,0%,100%,.9);transition:background .2s;-webkit-animation:swal-loading-anim 1s infinite;animation:swal-loading-anim 1s infinite}.swal-button__loader div:nth-child(3n+2){-webkit-animation-delay:.15s;animation-delay:.15s}.swal-button__loader div:nth-child(3n+3){-webkit-animation-delay:.3s;animation-delay:.3s}@-webkit-keyframes swal-loading-anim{0%{opacity:.4}20%{opacity:.4}50%{opacity:1}to{opacity:.4}}@keyframes swal-loading-anim{0%{opacity:.4}20%{opacity:.4}50%{opacity:1}to{opacity:.4}}.swal-overlay{position:fixed;top:0;bottom:0;left:0;right:0;text-align:center;font-size:0;overflow-y:auto;background-color:rgba(0,0,0,.4);z-index:10000;pointer-events:none;opacity:0;transition:opacity .3s}.swal-overlay:before{content:" ";display:inline-block;vertical-align:middle;height:100%}.swal-overlay--show-modal{opacity:1;pointer-events:auto}.swal-overlay--show-modal .swal-modal{opacity:1;pointer-events:auto;box-sizing:border-box;-webkit-animation:showSweetAlert .3s;animation:showSweetAlert .3s;will-change:transform}.swal-modal{width:478px;opacity:0;pointer-events:none;background-color:#fff;text-align:center;border-radius:5px;position:static;margin:20px auto;display:inline-block;vertical-align:middle;-webkit-transform:scale(1);transform:scale(1);-webkit-transform-origin:50% 50%;transform-origin:50% 50%;z-index:10001;transition:opacity .2s,-webkit-transform .3s;transition:transform .3s,opacity .2s;transition:transform .3s,opacity .2s,-webkit-transform .3s}@media (max-width:500px){.swal-modal{width:calc(100% - 20px)}}@-webkit-keyframes showSweetAlert{0%{-webkit-transform:scale(1);transform:scale(1)}1%{-webkit-transform:scale(.5);transform:scale(.5)}45%{-webkit-transform:scale(1.05);transform:scale(1.05)}80%{-webkit-transform:scale(.95);transform:scale(.95)}to{-webkit-transform:scale(1);transform:scale(1)}}@keyframes showSweetAlert{0%{-webkit-transform:scale(1);transform:scale(1)}1%{-webkit-transform:scale(.5);transform:scale(.5)}45%{-webkit-transform:scale(1.05);transform:scale(1.05)}80%{-webkit-transform:scale(.95);transform:scale(.95)}to{-webkit-transform:scale(1);transform:scale(1)}}',""])},function(n,r){function i(a,l){var s=a[1]||"",u=a[3];if(!u)return s;if(l&&typeof btoa=="function"){var p=o(u);return[s].concat(u.sources.map(function(h){return"/*# sourceURL="+u.sourceRoot+h+" */"})).concat([p]).join(`
`)}return[s].join(`
`)}function o(a){return"/*# sourceMappingURL=data:application/json;charset=utf-8;base64,"+btoa(unescape(encodeURIComponent(JSON.stringify(a))))+" */"}n.exports=function(a){var l=[];return l.toString=function(){return this.map(function(s){var u=i(s,a);return s[2]?"@media "+s[2]+"{"+u+"}":u}).join("")},l.i=function(s,u){typeof s=="string"&&(s=[[null,s,""]]);for(var p={},h=0;h<this.length;h++){var g=this[h][0];typeof g=="number"&&(p[g]=!0)}for(h=0;h<s.length;h++){var v=s[h];typeof v[0]=="number"&&p[v[0]]||(u&&!v[2]?v[2]=u:u&&(v[2]="("+v[2]+") and ("+u+")"),l.push(v))}},l}},function(n,r,i){function o(j,C){for(var T=0;T<j.length;T++){var _=j[T],I=b[_.id];if(I){I.refs++;for(var L=0;L<I.parts.length;L++)I.parts[L](_.parts[L]);for(;L<_.parts.length;L++)I.parts.push(g(_.parts[L],C))}else{for(var U=[],L=0;L<_.parts.length;L++)U.push(g(_.parts[L],C));b[_.id]={id:_.id,refs:1,parts:U}}}}function a(j,C){for(var T=[],_={},I=0;I<j.length;I++){var L=j[I],U=C.base?L[0]+C.base:L[0],H=L[1],q=L[2],he=L[3],F={css:H,media:q,sourceMap:he};_[U]?_[U].parts.push(F):T.push(_[U]={id:U,parts:[F]})}return T}function l(j,C){var T=f(j.insertInto);if(!T)throw new Error("Couldn't find a style target. This probably means that the value for the 'insertInto' parameter is invalid.");var _=k[k.length-1];if(j.insertAt==="top")_?_.nextSibling?T.insertBefore(C,_.nextSibling):T.appendChild(C):T.insertBefore(C,T.firstChild),k.push(C);else{if(j.insertAt!=="bottom")throw new Error("Invalid value for parameter 'insertAt'. Must be 'top' or 'bottom'.");T.appendChild(C)}}function s(j){if(j.parentNode===null)return!1;j.parentNode.removeChild(j);var C=k.indexOf(j);C>=0&&k.splice(C,1)}function u(j){var C=document.createElement("style");return j.attrs.type="text/css",h(C,j.attrs),l(j,C),C}function p(j){var C=document.createElement("link");return j.attrs.type="text/css",j.attrs.rel="stylesheet",h(C,j.attrs),l(j,C),C}function h(j,C){Object.keys(C).forEach(function(T){j.setAttribute(T,C[T])})}function g(j,C){var T,_,I,L;if(C.transform&&j.css){if(!(L=C.transform(j.css)))return function(){};j.css=L}if(C.singleton){var U=w++;T=m||(m=u(C)),_=v.bind(null,T,U,!1),I=v.bind(null,T,U,!0)}else j.sourceMap&&typeof URL=="function"&&typeof URL.createObjectURL=="function"&&typeof URL.revokeObjectURL=="function"&&typeof Blob=="function"&&typeof btoa=="function"?(T=p(C),_=y.bind(null,T,C),I=function(){s(T),T.href&&URL.revokeObjectURL(T.href)}):(T=u(C),_=x.bind(null,T),I=function(){s(T)});return _(j),function(H){if(H){if(H.css===j.css&&H.media===j.media&&H.sourceMap===j.sourceMap)return;_(j=H)}else I()}}function v(j,C,T,_){var I=T?"":_.css;if(j.styleSheet)j.styleSheet.cssText=E(C,I);else{var L=document.createTextNode(I),U=j.childNodes;U[C]&&j.removeChild(U[C]),U.length?j.insertBefore(L,U[C]):j.appendChild(L)}}function x(j,C){var T=C.css,_=C.media;if(_&&j.setAttribute("media",_),j.styleSheet)j.styleSheet.cssText=T;else{for(;j.firstChild;)j.removeChild(j.firstChild);j.appendChild(document.createTextNode(T))}}function y(j,C,T){var _=T.css,I=T.sourceMap,L=C.convertToAbsoluteUrls===void 0&&I;(C.convertToAbsoluteUrls||L)&&(_=M(_)),I&&(_+=`
/*# sourceMappingURL=data:application/json;base64,`+btoa(unescape(encodeURIComponent(JSON.stringify(I))))+" */");var U=new Blob([_],{type:"text/css"}),H=j.href;j.href=URL.createObjectURL(U),H&&URL.revokeObjectURL(H)}var b={},d=function(j){var C;return function(){return C===void 0&&(C=j.apply(this,arguments)),C}}(function(){return window&&document&&document.all&&!window.atob}),f=function(j){var C={};return function(T){return C[T]===void 0&&(C[T]=j.call(this,T)),C[T]}}(function(j){return document.querySelector(j)}),m=null,w=0,k=[],M=i(15);n.exports=function(j,C){if(typeof DEBUG<"u"&&DEBUG&&typeof document!="object")throw new Error("The style-loader cannot be used in a non-browser environment");C=C||{},C.attrs=typeof C.attrs=="object"?C.attrs:{},C.singleton||(C.singleton=d()),C.insertInto||(C.insertInto="head"),C.insertAt||(C.insertAt="bottom");var T=a(j,C);return o(T,C),function(_){for(var I=[],L=0;L<T.length;L++){var U=T[L],H=b[U.id];H.refs--,I.push(H)}_&&o(a(_,C),C);for(var L=0;L<I.length;L++){var H=I[L];if(H.refs===0){for(var q=0;q<H.parts.length;q++)H.parts[q]();delete b[H.id]}}}};var E=function(){var j=[];return function(C,T){return j[C]=T,j.filter(Boolean).join(`
`)}}()},function(n,r){n.exports=function(i){var o=typeof window<"u"&&window.location;if(!o)throw new Error("fixUrls requires window.location");if(!i||typeof i!="string")return i;var a=o.protocol+"//"+o.host,l=a+o.pathname.replace(/\/[^\/]*$/,"/");return i.replace(/url\s*\(((?:[^)(]|\((?:[^)(]+|\([^)(]*\))*\))*)\)/gi,function(s,u){var p=u.trim().replace(/^"(.*)"$/,function(g,v){return v}).replace(/^'(.*)'$/,function(g,v){return v});if(/^(#|data:|http:\/\/|https:\/\/|file:\/\/\/)/i.test(p))return s;var h;return h=p.indexOf("//")===0?p:p.indexOf("/")===0?a+p:l+p.replace(/^\.\//,""),"url("+JSON.stringify(h)+")"})}},function(n,r,i){var o=i(17);typeof window>"u"||window.Promise||(window.Promise=o),i(21),String.prototype.includes||(String.prototype.includes=function(a,l){return typeof l!="number"&&(l=0),!(l+a.length>this.length)&&this.indexOf(a,l)!==-1}),Array.prototype.includes||Object.defineProperty(Array.prototype,"includes",{value:function(a,l){if(this==null)throw new TypeError('"this" is null or not defined');var s=Object(this),u=s.length>>>0;if(u===0)return!1;for(var p=0|l,h=Math.max(p>=0?p:u-Math.abs(p),0);h<u;){if(function(g,v){return g===v||typeof g=="number"&&typeof v=="number"&&isNaN(g)&&isNaN(v)}(s[h],a))return!0;h++}return!1}}),typeof window<"u"&&function(a){a.forEach(function(l){l.hasOwnProperty("remove")||Object.defineProperty(l,"remove",{configurable:!0,enumerable:!0,writable:!0,value:function(){this.parentNode.removeChild(this)}})})}([Element.prototype,CharacterData.prototype,DocumentType.prototype])},function(n,r,i){(function(o){(function(a){function l(){}function s(d,f){return function(){d.apply(f,arguments)}}function u(d){if(typeof this!="object")throw new TypeError("Promises must be constructed via new");if(typeof d!="function")throw new TypeError("not a function");this._state=0,this._handled=!1,this._value=void 0,this._deferreds=[],y(d,this)}function p(d,f){for(;d._state===3;)d=d._value;if(d._state===0)return void d._deferreds.push(f);d._handled=!0,u._immediateFn(function(){var m=d._state===1?f.onFulfilled:f.onRejected;if(m===null)return void(d._state===1?h:g)(f.promise,d._value);var w;try{w=m(d._value)}catch(k){return void g(f.promise,k)}h(f.promise,w)})}function h(d,f){try{if(f===d)throw new TypeError("A promise cannot be resolved with itself.");if(f&&(typeof f=="object"||typeof f=="function")){var m=f.then;if(f instanceof u)return d._state=3,d._value=f,void v(d);if(typeof m=="function")return void y(s(m,f),d)}d._state=1,d._value=f,v(d)}catch(w){g(d,w)}}function g(d,f){d._state=2,d._value=f,v(d)}function v(d){d._state===2&&d._deferreds.length===0&&u._immediateFn(function(){d._handled||u._unhandledRejectionFn(d._value)});for(var f=0,m=d._deferreds.length;f<m;f++)p(d,d._deferreds[f]);d._deferreds=null}function x(d,f,m){this.onFulfilled=typeof d=="function"?d:null,this.onRejected=typeof f=="function"?f:null,this.promise=m}function y(d,f){var m=!1;try{d(function(w){m||(m=!0,h(f,w))},function(w){m||(m=!0,g(f,w))})}catch(w){if(m)return;m=!0,g(f,w)}}var b=setTimeout;u.prototype.catch=function(d){return this.then(null,d)},u.prototype.then=function(d,f){var m=new this.constructor(l);return p(this,new x(d,f,m)),m},u.all=function(d){var f=Array.prototype.slice.call(d);return new u(function(m,w){function k(j,C){try{if(C&&(typeof C=="object"||typeof C=="function")){var T=C.then;if(typeof T=="function")return void T.call(C,function(_){k(j,_)},w)}f[j]=C,--M==0&&m(f)}catch(_){w(_)}}if(f.length===0)return m([]);for(var M=f.length,E=0;E<f.length;E++)k(E,f[E])})},u.resolve=function(d){return d&&typeof d=="object"&&d.constructor===u?d:new u(function(f){f(d)})},u.reject=function(d){return new u(function(f,m){m(d)})},u.race=function(d){return new u(function(f,m){for(var w=0,k=d.length;w<k;w++)d[w].then(f,m)})},u._immediateFn=typeof o=="function"&&function(d){o(d)}||function(d){b(d,0)},u._unhandledRejectionFn=function(d){typeof console<"u"&&console&&console.warn("Possible Unhandled Promise Rejection:",d)},u._setImmediateFn=function(d){u._immediateFn=d},u._setUnhandledRejectionFn=function(d){u._unhandledRejectionFn=d},n!==void 0&&n.exports?n.exports=u:a.Promise||(a.Promise=u)})(this)}).call(r,i(18).setImmediate)},function(n,r,i){function o(l,s){this._id=l,this._clearFn=s}var a=Function.prototype.apply;r.setTimeout=function(){return new o(a.call(setTimeout,window,arguments),clearTimeout)},r.setInterval=function(){return new o(a.call(setInterval,window,arguments),clearInterval)},r.clearTimeout=r.clearInterval=function(l){l&&l.close()},o.prototype.unref=o.prototype.ref=function(){},o.prototype.close=function(){this._clearFn.call(window,this._id)},r.enroll=function(l,s){clearTimeout(l._idleTimeoutId),l._idleTimeout=s},r.unenroll=function(l){clearTimeout(l._idleTimeoutId),l._idleTimeout=-1},r._unrefActive=r.active=function(l){clearTimeout(l._idleTimeoutId);var s=l._idleTimeout;s>=0&&(l._idleTimeoutId=setTimeout(function(){l._onTimeout&&l._onTimeout()},s))},i(19),r.setImmediate=setImmediate,r.clearImmediate=clearImmediate},function(n,r,i){(function(o,a){(function(l,s){function u(m){typeof m!="function"&&(m=new Function(""+m));for(var w=new Array(arguments.length-1),k=0;k<w.length;k++)w[k]=arguments[k+1];var M={callback:m,args:w};return y[x]=M,v(x),x++}function p(m){delete y[m]}function h(m){var w=m.callback,k=m.args;switch(k.length){case 0:w();break;case 1:w(k[0]);break;case 2:w(k[0],k[1]);break;case 3:w(k[0],k[1],k[2]);break;default:w.apply(s,k)}}function g(m){if(b)setTimeout(g,0,m);else{var w=y[m];if(w){b=!0;try{h(w)}finally{p(m),b=!1}}}}if(!l.setImmediate){var v,x=1,y={},b=!1,d=l.document,f=Object.getPrototypeOf&&Object.getPrototypeOf(l);f=f&&f.setTimeout?f:l,{}.toString.call(l.process)==="[object process]"?function(){v=function(m){a.nextTick(function(){g(m)})}}():function(){if(l.postMessage&&!l.importScripts){var m=!0,w=l.onmessage;return l.onmessage=function(){m=!1},l.postMessage("","*"),l.onmessage=w,m}}()?function(){var m="setImmediate$"+Math.random()+"$",w=function(k){k.source===l&&typeof k.data=="string"&&k.data.indexOf(m)===0&&g(+k.data.slice(m.length))};l.addEventListener?l.addEventListener("message",w,!1):l.attachEvent("onmessage",w),v=function(k){l.postMessage(m+k,"*")}}():l.MessageChannel?function(){var m=new MessageChannel;m.port1.onmessage=function(w){g(w.data)},v=function(w){m.port2.postMessage(w)}}():d&&"onreadystatechange"in d.createElement("script")?function(){var m=d.documentElement;v=function(w){var k=d.createElement("script");k.onreadystatechange=function(){g(w),k.onreadystatechange=null,m.removeChild(k),k=null},m.appendChild(k)}}():function(){v=function(m){setTimeout(g,0,m)}}(),f.setImmediate=u,f.clearImmediate=p}})(typeof self>"u"?o===void 0?this:o:self)}).call(r,i(7),i(20))},function(n,r){function i(){throw new Error("setTimeout has not been defined")}function o(){throw new Error("clearTimeout has not been defined")}function a(m){if(g===setTimeout)return setTimeout(m,0);if((g===i||!g)&&setTimeout)return g=setTimeout,setTimeout(m,0);try{return g(m,0)}catch{try{return g.call(null,m,0)}catch{return g.call(this,m,0)}}}function l(m){if(v===clearTimeout)return clearTimeout(m);if((v===o||!v)&&clearTimeout)return v=clearTimeout,clearTimeout(m);try{return v(m)}catch{try{return v.call(null,m)}catch{return v.call(this,m)}}}function s(){d&&y&&(d=!1,y.length?b=y.concat(b):f=-1,b.length&&u())}function u(){if(!d){var m=a(s);d=!0;for(var w=b.length;w;){for(y=b,b=[];++f<w;)y&&y[f].run();f=-1,w=b.length}y=null,d=!1,l(m)}}function p(m,w){this.fun=m,this.array=w}function h(){}var g,v,x=n.exports={};(function(){try{g=typeof setTimeout=="function"?setTimeout:i}catch{g=i}try{v=typeof clearTimeout=="function"?clearTimeout:o}catch{v=o}})();var y,b=[],d=!1,f=-1;x.nextTick=function(m){var w=new Array(arguments.length-1);if(arguments.length>1)for(var k=1;k<arguments.length;k++)w[k-1]=arguments[k];b.push(new p(m,w)),b.length!==1||d||a(u)},p.prototype.run=function(){this.fun.apply(null,this.array)},x.title="browser",x.browser=!0,x.env={},x.argv=[],x.version="",x.versions={},x.on=h,x.addListener=h,x.once=h,x.off=h,x.removeListener=h,x.removeAllListeners=h,x.emit=h,x.prependListener=h,x.prependOnceListener=h,x.listeners=function(m){return[]},x.binding=function(m){throw new Error("process.binding is not supported")},x.cwd=function(){return"/"},x.chdir=function(m){throw new Error("process.chdir is not supported")},x.umask=function(){return 0}},function(n,r,i){i(22).polyfill()},function(n,r,i){function o(l,s){if(l==null)throw new TypeError("Cannot convert first argument to object");for(var u=Object(l),p=1;p<arguments.length;p++){var h=arguments[p];if(h!=null)for(var g=Object.keys(Object(h)),v=0,x=g.length;v<x;v++){var y=g[v],b=Object.getOwnPropertyDescriptor(h,y);b!==void 0&&b.enumerable&&(u[y]=h[y])}}return u}function a(){Object.assign||Object.defineProperty(Object,"assign",{enumerable:!1,configurable:!0,writable:!0,value:o})}n.exports={assign:o,polyfill:a}},function(n,r,i){Object.defineProperty(r,"__esModule",{value:!0});var o=i(24),a=i(6),l=i(5),s=i(36),u=function(){for(var p=[],h=0;h<arguments.length;h++)p[h]=arguments[h];if(typeof window<"u"){var g=s.getOpts.apply(void 0,p);return new Promise(function(v,x){l.default.promise={resolve:v,reject:x},o.default(g),setTimeout(function(){a.openModal()})})}};u.close=a.onAction,u.getState=a.getState,u.setActionValue=l.setActionValue,u.stopLoading=a.stopLoading,u.setDefaults=s.setDefaults,r.default=u},function(n,r,i){Object.defineProperty(r,"__esModule",{value:!0});var o=i(1),a=i(0),l=a.default.MODAL,s=i(4),u=i(34),p=i(35),h=i(1);r.init=function(g){o.getNode(l)||(document.body||h.throwErr("You can only use SweetAlert AFTER the DOM has loaded!"),u.default(),s.default()),s.initModalContent(g),p.default(g)},r.default=r.init},function(n,r,i){Object.defineProperty(r,"__esModule",{value:!0});var o=i(0),a=o.default.MODAL;r.modalMarkup=`
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
`},function(n,r,i){Object.defineProperty(r,"__esModule",{value:!0});var o=i(4),a=i(2),l=i(0),s=l.default.ICON,u=l.default.ICON_CUSTOM,p=["error","warning","success","info"],h={error:a.errorIconMarkup(),warning:a.warningIconMarkup(),success:a.successIconMarkup()},g=function(y,b){var d=s+"--"+y;b.classList.add(d);var f=h[y];f&&(b.innerHTML=f)},v=function(y,b){b.classList.add(u);var d=document.createElement("img");d.src=y,b.appendChild(d)},x=function(y){if(y){var b=o.injectElIntoModal(a.iconMarkup);p.includes(y)?g(y,b):v(y,b)}};r.default=x},function(n,r,i){Object.defineProperty(r,"__esModule",{value:!0});var o=i(2),a=i(4),l=function(s){navigator.userAgent.includes("AppleWebKit")&&(s.style.display="none",s.offsetHeight,s.style.display="")};r.initTitle=function(s){if(s){var u=a.injectElIntoModal(o.titleMarkup);u.textContent=s,l(u)}},r.initText=function(s){if(s){var u=document.createDocumentFragment();s.split(`
`).forEach(function(h,g,v){u.appendChild(document.createTextNode(h)),g<v.length-1&&u.appendChild(document.createElement("br"))});var p=a.injectElIntoModal(o.textMarkup);p.appendChild(u),l(p)}}},function(n,r,i){Object.defineProperty(r,"__esModule",{value:!0});var o=i(1),a=i(4),l=i(0),s=l.default.BUTTON,u=l.default.DANGER_BUTTON,p=i(3),h=i(2),g=i(6),v=i(5),x=function(b,d,f){var m=d.text,w=d.value,k=d.className,M=d.closeModal,E=o.stringToNode(h.buttonMarkup),j=E.querySelector("."+s),C=s+"--"+b;j.classList.add(C),k&&(Array.isArray(k)?k:k.split(" ")).filter(function(_){return _.length>0}).forEach(function(_){j.classList.add(_)}),f&&b===p.CONFIRM_KEY&&j.classList.add(u),j.textContent=m;var T={};return T[b]=w,v.setActionValue(T),v.setActionOptionsFor(b,{closeModal:M}),j.addEventListener("click",function(){return g.onAction(b)}),E},y=function(b,d){var f=a.injectElIntoModal(h.footerMarkup);for(var m in b){var w=b[m],k=x(m,w,d);w.visible&&f.appendChild(k)}f.children.length===0&&f.remove()};r.default=y},function(n,r,i){Object.defineProperty(r,"__esModule",{value:!0});var o=i(3),a=i(4),l=i(2),s=i(5),u=i(6),p=i(0),h=p.default.CONTENT,g=function(y){y.addEventListener("input",function(b){var d=b.target,f=d.value;s.setActionValue(f)}),y.addEventListener("keyup",function(b){if(b.key==="Enter")return u.onAction(o.CONFIRM_KEY)}),setTimeout(function(){y.focus(),s.setActionValue("")},0)},v=function(y,b,d){var f=document.createElement(b),m=h+"__"+b;f.classList.add(m);for(var w in d){var k=d[w];f[w]=k}b==="input"&&g(f),y.appendChild(f)},x=function(y){if(y){var b=a.injectElIntoModal(l.contentMarkup),d=y.element,f=y.attributes;typeof d=="string"?v(b,d,f):b.appendChild(d)}};r.default=x},function(n,r,i){Object.defineProperty(r,"__esModule",{value:!0});var o=i(1),a=i(2),l=function(){var s=o.stringToNode(a.overlayMarkup);document.body.appendChild(s)};r.default=l},function(n,r,i){Object.defineProperty(r,"__esModule",{value:!0});var o=i(5),a=i(6),l=i(1),s=i(3),u=i(0),p=u.default.MODAL,h=u.default.BUTTON,g=u.default.OVERLAY,v=function(_){_.preventDefault(),f()},x=function(_){_.preventDefault(),m()},y=function(_){if(o.default.isOpen)switch(_.key){case"Escape":return a.onAction(s.CANCEL_KEY)}},b=function(_){if(o.default.isOpen)switch(_.key){case"Tab":return v(_)}},d=function(_){if(o.default.isOpen)return _.key==="Tab"&&_.shiftKey?x(_):void 0},f=function(){var _=l.getNode(h);_&&(_.tabIndex=0,_.focus())},m=function(){var _=l.getNode(p),I=_.querySelectorAll("."+h),L=I.length-1,U=I[L];U&&U.focus()},w=function(_){_[_.length-1].addEventListener("keydown",b)},k=function(_){_[0].addEventListener("keydown",d)},M=function(){var _=l.getNode(p),I=_.querySelectorAll("."+h);I.length&&(w(I),k(I))},E=function(_){if(l.getNode(g)===_.target)return a.onAction(s.CANCEL_KEY)},j=function(_){var I=l.getNode(g);I.removeEventListener("click",E),_&&I.addEventListener("click",E)},C=function(_){o.default.timer&&clearTimeout(o.default.timer),_&&(o.default.timer=window.setTimeout(function(){return a.onAction(s.CANCEL_KEY)},_))},T=function(_){_.closeOnEsc?document.addEventListener("keyup",y):document.removeEventListener("keyup",y),_.dangerMode?f():m(),M(),j(_.closeOnClickOutside),C(_.timer)};r.default=T},function(n,r,i){Object.defineProperty(r,"__esModule",{value:!0});var o=i(1),a=i(3),l=i(37),s=i(38),u={title:null,text:null,icon:null,buttons:a.defaultButtonList,content:null,className:null,closeOnClickOutside:!0,closeOnEsc:!0,dangerMode:!1,timer:null},p=Object.assign({},u);r.setDefaults=function(d){p=Object.assign({},u,d)};var h=function(d){var f=d&&d.button,m=d&&d.buttons;return f!==void 0&&m!==void 0&&o.throwErr("Cannot set both 'button' and 'buttons' options!"),f!==void 0?{confirm:f}:m},g=function(d){return o.ordinalSuffixOf(d+1)},v=function(d,f){o.throwErr(g(f)+" argument ('"+d+"') is invalid")},x=function(d,f){var m=d+1,w=f[m];o.isPlainObject(w)||w===void 0||o.throwErr("Expected "+g(m)+" argument ('"+w+"') to be a plain object")},y=function(d,f){var m=d+1,w=f[m];w!==void 0&&o.throwErr("Unexpected "+g(m)+" argument ("+w+")")},b=function(d,f,m,w){var k=typeof f,M=k==="string",E=f instanceof Element;if(M){if(m===0)return{text:f};if(m===1)return{text:f,title:w[0]};if(m===2)return x(m,w),{icon:f};v(f,m)}else{if(E&&m===0)return x(m,w),{content:f};if(o.isPlainObject(f))return y(m,w),f;v(f,m)}};r.getOpts=function(){for(var d=[],f=0;f<arguments.length;f++)d[f]=arguments[f];var m={};d.forEach(function(M,E){var j=b(0,M,E,d);Object.assign(m,j)});var w=h(m);m.buttons=a.getButtonListOpts(w),delete m.button,m.content=l.getContentOpts(m.content);var k=Object.assign({},u,p,m);return Object.keys(k).forEach(function(M){s.DEPRECATED_OPTS[M]&&s.logDeprecation(M)}),k}},function(n,r,i){Object.defineProperty(r,"__esModule",{value:!0});var o=i(1),a={element:"input",attributes:{placeholder:""}};r.getContentOpts=function(l){var s={};return o.isPlainObject(l)?Object.assign(s,l):l instanceof Element?{element:l}:l==="input"?a:null}},function(n,r,i){Object.defineProperty(r,"__esModule",{value:!0}),r.logDeprecation=function(o){var a=r.DEPRECATED_OPTS[o],l=a.onlyRename,s=a.replacement,u=a.subOption,p=a.link,h=l?"renamed":"deprecated",g='SweetAlert warning: "'+o+'" option has been '+h+".";s&&(g+=" Please use"+(u?' "'+u+'" in ':" ")+'"'+s+'" instead.');var v="https://sweetalert.js.org";g+=p?" More details: "+v+p:" More details: "+v+"/guides/#upgrading-from-1x",console.warn(g)},r.DEPRECATED_OPTS={type:{replacement:"icon",link:"/docs/#icon"},imageUrl:{replacement:"icon",link:"/docs/#icon"},customClass:{replacement:"className",onlyRename:!0,link:"/docs/#classname"},imageSize:{},showCancelButton:{replacement:"buttons",link:"/docs/#buttons"},showConfirmButton:{replacement:"button",link:"/docs/#button"},confirmButtonText:{replacement:"button",link:"/docs/#button"},confirmButtonColor:{},cancelButtonText:{replacement:"buttons",link:"/docs/#buttons"},closeOnConfirm:{replacement:"button",subOption:"closeModal",link:"/docs/#button"},closeOnCancel:{replacement:"buttons",subOption:"closeModal",link:"/docs/#buttons"},showLoaderOnConfirm:{replacement:"buttons"},animation:{},inputType:{replacement:"content",link:"/docs/#content"},inputValue:{replacement:"content",link:"/docs/#content"},inputPlaceholder:{replacement:"content",link:"/docs/#content"},html:{replacement:"content",link:"/docs/#content"},allowEscapeKey:{replacement:"closeOnEsc",onlyRename:!0,link:"/docs/#closeonesc"},allowClickOutside:{replacement:"closeOnClickOutside",onlyRename:!0,link:"/docs/#closeonclickoutside"}}}])})})(zg);var _S=zg.exports;const Uf=Kr(_S),AS=(e,t)=>{const[n,r]=R.useState(()=>{try{const o=window.localStorage.getItem(e);return o?JSON.parse(o):t}catch(o){return console.error("Error loading data from localStorage:",o),t}});return[n,o=>{try{const a=o instanceof Function?o(n):o;r(a),window.localStorage.setItem(e,JSON.stringify(a))}catch(a){console.error("Error storing data to localStorage:",a)}}]},Wf=[{value:"",label:"Оберіть послугу"},{value:"Менторство та консультації",label:"Менторство та консультації"},{value:"Діагностика",label:"Діагностика"},{value:"Стратегії",label:"Стратегії"},{value:"Навчання",label:"Навчання"},{value:"Інше",label:"Інше"}],Bf="/healthy-management-project/assets/computer1x-nLk1eyXX.webp",IS="/healthy-management-project/assets/computer@2x-oGWk-qXD.webp",LS="/healthy-management-project/assets/computer_1440_1x-l4N2dq6p.jpg",RS="/healthy-management-project/assets/computer_1440_1x-sUcWDD18.webp",zS="/healthy-management-project/assets/computer_1440@2x-vTT-4SwT.webp",DS="/healthy-management-project/assets/computer_768_1x-Oro_pkzQ.jpg",FS="/healthy-management-project/assets/computer_768_1x-brb-BlfY.webp",NS="/healthy-management-project/assets/computer_768@2x-fbWMIh0a.webp",Hf="/healthy-management-project/assets/mob_computer1x-gdjE7oao.webp",VS="/healthy-management-project/assets/mob_computer@2x-JptvcU_h.webp",sn=()=>c.jsx("svg",{width:"8",height:"8",children:c.jsx("use",{href:`${qo}#star`})});var Dg={exports:{}};function US(e){return e&&typeof e=="object"&&"default"in e?e.default:e}var al=US(R),WS=no;function BS(e,t){for(var n=Object.getOwnPropertyNames(t),r=0;r<n.length;r++){var i=n[r],o=Object.getOwnPropertyDescriptor(t,i);o&&o.configurable&&e[i]===void 0&&Object.defineProperty(e,i,o)}return e}function vu(){return(vu=Object.assign||function(e){for(var t=1;t<arguments.length;t++){var n=arguments[t];for(var r in n)Object.prototype.hasOwnProperty.call(n,r)&&(e[r]=n[r])}return e}).apply(this,arguments)}function HS(e,t){e.prototype=Object.create(t.prototype),BS(e.prototype.constructor=e,t)}function $S(e,t){if(e==null)return{};var n,r,i={},o=Object.keys(e);for(r=0;r<o.length;r++)n=o[r],0<=t.indexOf(n)||(i[n]=e[n]);return i}function yr(e){if(e===void 0)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return e}var YS=function(e,t,n,r,i,o,a,l){if(!e){var s;if(t===void 0)s=new Error("Minified exception occurred; use the non-minified dev environment for the full error message and additional helpful warnings.");else{var u=[n,r,i,o,a,l],p=0;(s=new Error(t.replace(/%s/g,function(){return u[p++]}))).name="Invariant Violation"}throw s.framesToPop=1,s}},$f=YS;function Yf(e,t,n){if("selectionStart"in e&&"selectionEnd"in e)e.selectionStart=t,e.selectionEnd=n;else{var r=e.createTextRange();r.collapse(!0),r.moveStart("character",t),r.moveEnd("character",n-t),r.select()}}function QS(e){var t=0,n=0;if("selectionStart"in e&&"selectionEnd"in e)t=e.selectionStart,n=e.selectionEnd;else{var r=document.selection.createRange();r.parentElement()===e&&(t=-r.moveStart("character",-e.value.length),n=-r.moveEnd("character",-e.value.length))}return{start:t,end:n,length:n-t}}var XS={9:"[0-9]",a:"[A-Za-z]","*":"[A-Za-z0-9]"},KS="_";function Qf(e,t,n){var r="",i="",o=null,a=[];if(t===void 0&&(t=KS),n==null&&(n=XS),!e||typeof e!="string")return{maskChar:t,formatChars:n,mask:null,prefix:null,lastEditablePosition:null,permanents:[]};var l=!1;return e.split("").forEach(function(s){l=!l&&s==="\\"||(l||!n[s]?(a.push(r.length),r.length===a.length-1&&(i+=s)):o=r.length+1,r+=s,!1)}),{maskChar:t,formatChars:n,prefix:i,mask:r,lastEditablePosition:o,permanents:a}}function kt(e,t){return e.permanents.indexOf(t)!==-1}function vs(e,t,n){var r=e.mask,i=e.formatChars;if(!n)return!1;if(kt(e,t))return r[t]===n;var o=i[r[t]];return new RegExp(o).test(n)}function Xf(e,t){return t.split("").every(function(n,r){return kt(e,r)||!vs(e,r,n)})}function yi(e,t){var n=e.maskChar,r=e.prefix;if(!n){for(;t.length>r.length&&kt(e,t.length-1);)t=t.slice(0,t.length-1);return t.length}for(var i=r.length,o=t.length;o>=r.length;o--){var a=t[o];if(!kt(e,o)&&vs(e,o,a)){i=o+1;break}}return i}function Fg(e,t){return yi(e,t)===e.mask.length}function cn(e,t){var n=e.maskChar,r=e.mask,i=e.prefix;if(!n){for((t=yu(e,"",t,0)).length<i.length&&(t=i);t.length<r.length&&kt(e,t.length);)t+=r[t.length];return t}if(t)return yu(e,cn(e,""),t,0);for(var o=0;o<r.length;o++)kt(e,o)?t+=r[o]:t+=n;return t}function JS(e,t,n,r){var i=n+r,o=e.maskChar,a=e.mask,l=e.prefix,s=t.split("");if(o)return s.map(function(p,h){return h<n||i<=h?p:kt(e,h)?a[h]:o}).join("");for(var u=i;u<s.length;u++)kt(e,u)&&(s[u]="");return n=Math.max(l.length,n),s.splice(n,i-n),t=s.join(""),cn(e,t)}function yu(e,t,n,r){var i=e.mask,o=e.maskChar,a=e.prefix,l=n.split(""),s=Fg(e,t);return!o&&r>t.length&&(t+=i.slice(t.length,r)),l.every(function(u){for(;v=u,kt(e,g=r)&&v!==i[g];){if(r>=t.length&&(t+=i[r]),p=u,h=r,o&&kt(e,h)&&p===o)return!0;if(++r>=i.length)return!1}var p,h,g,v;return!vs(e,r,u)&&u!==o||(r<t.length?t=o||s||r<a.length?t.slice(0,r)+u+t.slice(r+1):(t=t.slice(0,r)+u+t.slice(r),cn(e,t)):o||(t+=u),++r<i.length)}),t}function ZS(e,t,n,r){var i=e.mask,o=e.maskChar,a=n.split(""),l=r;return a.every(function(s){for(;p=s,kt(e,u=r)&&p!==i[u];)if(++r>=i.length)return!1;var u,p;return(vs(e,r,s)||s===o)&&r++,r<i.length}),r-l}function GS(e,t){for(var n=t;0<=n;--n)if(!kt(e,n))return n;return null}function Mi(e,t){for(var n=e.mask,r=t;r<n.length;++r)if(!kt(e,r))return r;return null}function sl(e){return e||e===0?e+"":""}function qS(e,t,n,r,i){var o=e.mask,a=e.prefix,l=e.lastEditablePosition,s=t,u="",p=0,h=0,g=Math.min(i.start,n.start);return n.end>i.start?h=(p=ZS(e,r,u=s.slice(i.start,n.end),g))?i.length:0:s.length<r.length&&(h=r.length-s.length),s=r,h&&(h===1&&!i.length&&(g=i.start===n.start?Mi(e,n.start):GS(e,n.start)),s=JS(e,s,g,h)),s=yu(e,s,u,g),(g+=p)>=o.length?g=o.length:g<a.length&&!p?g=a.length:g>=a.length&&g<l&&p&&(g=Mi(e,g)),u||(u=null),{value:s=cn(e,s),enteredString:u,selection:{start:g,end:g}}}function ej(){var e=new RegExp("windows","i"),t=new RegExp("phone","i"),n=navigator.userAgent;return e.test(n)&&t.test(n)}function ct(e){return typeof e=="function"}function tj(){return window.requestAnimationFrame||window.webkitRequestAnimationFrame||window.mozRequestAnimationFrame}function Ng(){return window.cancelAnimationFrame||window.webkitCancelRequestAnimationFrame||window.webkitCancelAnimationFrame||window.mozCancelAnimationFrame}function Kf(e){return(Ng()?tj():function(){return setTimeout(e,1e3/60)})(e)}function ll(e){(Ng()||clearTimeout)(e)}var nj=function(e){function t(r){var i=e.call(this,r)||this;i.focused=!1,i.mounted=!1,i.previousSelection=null,i.selectionDeferId=null,i.saveSelectionLoopDeferId=null,i.saveSelectionLoop=function(){i.previousSelection=i.getSelection(),i.saveSelectionLoopDeferId=Kf(i.saveSelectionLoop)},i.runSaveSelectionLoop=function(){i.saveSelectionLoopDeferId===null&&i.saveSelectionLoop()},i.stopSaveSelectionLoop=function(){i.saveSelectionLoopDeferId!==null&&(ll(i.saveSelectionLoopDeferId),i.saveSelectionLoopDeferId=null,i.previousSelection=null)},i.getInputDOMNode=function(){if(!i.mounted)return null;var x=WS.findDOMNode(yr(yr(i))),y=typeof window<"u"&&x instanceof window.Element;if(x&&!y)return null;if(x.nodeName!=="INPUT"&&(x=x.querySelector("input")),!x)throw new Error("react-input-mask: inputComponent doesn't contain input node");return x},i.getInputValue=function(){var x=i.getInputDOMNode();return x?x.value:null},i.setInputValue=function(x){var y=i.getInputDOMNode();y&&(i.value=x,y.value=x)},i.setCursorToEnd=function(){var x=yi(i.maskOptions,i.value),y=Mi(i.maskOptions,x);y!==null&&i.setCursorPosition(y)},i.setSelection=function(x,y,b){b===void 0&&(b={});var d=i.getInputDOMNode(),f=i.isFocused();d&&f&&(b.deferred||Yf(d,x,y),i.selectionDeferId!==null&&ll(i.selectionDeferId),i.selectionDeferId=Kf(function(){i.selectionDeferId=null,Yf(d,x,y)}),i.previousSelection={start:x,end:y,length:Math.abs(y-x)})},i.getSelection=function(){return QS(i.getInputDOMNode())},i.getCursorPosition=function(){return i.getSelection().start},i.setCursorPosition=function(x){i.setSelection(x,x)},i.isFocused=function(){return i.focused},i.getBeforeMaskedValueChangeConfig=function(){var x=i.maskOptions,y=x.mask,b=x.maskChar,d=x.permanents,f=x.formatChars;return{mask:y,maskChar:b,permanents:d,alwaysShowMask:!!i.props.alwaysShowMask,formatChars:f}},i.isInputAutofilled=function(x,y,b,d){var f=i.getInputDOMNode();try{if(f.matches(":-webkit-autofill"))return!0}catch{}return!i.focused||d.end<b.length&&y.end===x.length},i.onChange=function(x){var y=yr(yr(i)).beforePasteState,b=yr(yr(i)).previousSelection,d=i.props.beforeMaskedValueChange,f=i.getInputValue(),m=i.value,w=i.getSelection();i.isInputAutofilled(f,w,m,b)&&(m=cn(i.maskOptions,""),b={start:0,end:0,length:0}),y&&(b=y.selection,m=y.value,w={start:b.start+f.length,end:b.start+f.length,length:0},f=m.slice(0,b.start)+f+m.slice(b.end),i.beforePasteState=null);var k=qS(i.maskOptions,f,w,m,b),M=k.enteredString,E=k.selection,j=k.value;if(ct(d)){var C=d({value:j,selection:E},{value:m,selection:b},M,i.getBeforeMaskedValueChangeConfig());j=C.value,E=C.selection}i.setInputValue(j),ct(i.props.onChange)&&i.props.onChange(x),i.isWindowsPhoneBrowser?i.setSelection(E.start,E.end,{deferred:!0}):i.setSelection(E.start,E.end)},i.onFocus=function(x){var y=i.props.beforeMaskedValueChange,b=i.maskOptions,d=b.mask,f=b.prefix;if(i.focused=!0,i.mounted=!0,d){if(i.value)yi(i.maskOptions,i.value)<i.maskOptions.mask.length&&i.setCursorToEnd();else{var m=cn(i.maskOptions,f),w=cn(i.maskOptions,m),k=yi(i.maskOptions,w),M=Mi(i.maskOptions,k),E={start:M,end:M};if(ct(y)){var j=y({value:w,selection:E},{value:i.value,selection:null},null,i.getBeforeMaskedValueChangeConfig());w=j.value,E=j.selection}var C=w!==i.getInputValue();C&&i.setInputValue(w),C&&ct(i.props.onChange)&&i.props.onChange(x),i.setSelection(E.start,E.end)}i.runSaveSelectionLoop()}ct(i.props.onFocus)&&i.props.onFocus(x)},i.onBlur=function(x){var y=i.props.beforeMaskedValueChange,b=i.maskOptions.mask;if(i.stopSaveSelectionLoop(),i.focused=!1,b&&!i.props.alwaysShowMask&&Xf(i.maskOptions,i.value)){var d="";ct(y)&&(d=y({value:d,selection:null},{value:i.value,selection:i.previousSelection},null,i.getBeforeMaskedValueChangeConfig()).value);var f=d!==i.getInputValue();f&&i.setInputValue(d),f&&ct(i.props.onChange)&&i.props.onChange(x)}ct(i.props.onBlur)&&i.props.onBlur(x)},i.onMouseDown=function(x){if(!i.focused&&document.addEventListener){i.mouseDownX=x.clientX,i.mouseDownY=x.clientY,i.mouseDownTime=new Date().getTime();var y=function b(d){if(document.removeEventListener("mouseup",b),i.focused){var f=Math.abs(d.clientX-i.mouseDownX),m=Math.abs(d.clientY-i.mouseDownY),w=Math.max(f,m),k=new Date().getTime()-i.mouseDownTime;(w<=10&&k<=200||w<=5&&k<=300)&&i.setCursorToEnd()}};document.addEventListener("mouseup",y)}ct(i.props.onMouseDown)&&i.props.onMouseDown(x)},i.onPaste=function(x){ct(i.props.onPaste)&&i.props.onPaste(x),x.defaultPrevented||(i.beforePasteState={value:i.getInputValue(),selection:i.getSelection()},i.setInputValue(""))},i.handleRef=function(x){i.props.children==null&&ct(i.props.inputRef)&&i.props.inputRef(x)};var o=r.mask,a=r.maskChar,l=r.formatChars,s=r.alwaysShowMask,u=r.beforeMaskedValueChange,p=r.defaultValue,h=r.value;i.maskOptions=Qf(o,a,l),p==null&&(p=""),h==null&&(h=p);var g=sl(h);if(i.maskOptions.mask&&(s||g)&&(g=cn(i.maskOptions,g),ct(u))){var v=r.value;r.value==null&&(v=p),g=u({value:g,selection:null},{value:v=sl(v),selection:null},null,i.getBeforeMaskedValueChangeConfig()).value}return i.value=g,i}HS(t,e);var n=t.prototype;return n.componentDidMount=function(){this.mounted=!0,this.getInputDOMNode()&&(this.isWindowsPhoneBrowser=ej(),this.maskOptions.mask&&this.getInputValue()!==this.value&&this.setInputValue(this.value))},n.componentDidUpdate=function(){var r=this.previousSelection,i=this.props,o=i.beforeMaskedValueChange,a=i.alwaysShowMask,l=i.mask,s=i.maskChar,u=i.formatChars,p=this.maskOptions,h=a||this.isFocused(),g=this.props.value!=null,v=g?sl(this.props.value):this.value,x=r?r.start:null;if(this.maskOptions=Qf(l,s,u),this.maskOptions.mask){!p.mask&&this.isFocused()&&this.runSaveSelectionLoop();var y=this.maskOptions.mask&&this.maskOptions.mask!==p.mask;if(p.mask||g||(v=this.getInputValue()),(y||this.maskOptions.mask&&(v||h))&&(v=cn(this.maskOptions,v)),y){var b=yi(this.maskOptions,v);(x===null||b<x)&&(x=Fg(this.maskOptions,v)?b:Mi(this.maskOptions,b))}!this.maskOptions.mask||!Xf(this.maskOptions,v)||h||g&&this.props.value||(v="");var d={start:x,end:x};if(ct(o)){var f=o({value:v,selection:d},{value:this.value,selection:this.previousSelection},null,this.getBeforeMaskedValueChangeConfig());v=f.value,d=f.selection}this.value=v;var m=this.getInputValue()!==this.value;m?(this.setInputValue(this.value),this.forceUpdate()):y&&this.forceUpdate();var w=!1;d.start!=null&&d.end!=null&&(w=!r||r.start!==d.start||r.end!==d.end),(w||m)&&this.setSelection(d.start,d.end)}else p.mask&&(this.stopSaveSelectionLoop(),this.forceUpdate())},n.componentWillUnmount=function(){this.mounted=!1,this.selectionDeferId!==null&&ll(this.selectionDeferId),this.stopSaveSelectionLoop()},n.render=function(){var r,i=this.props,o=(i.mask,i.alwaysShowMask,i.maskChar,i.formatChars,i.inputRef,i.beforeMaskedValueChange,i.children),a=$S(i,["mask","alwaysShowMask","maskChar","formatChars","inputRef","beforeMaskedValueChange","children"]);if(o){ct(o)||$f(!1);var l=["onChange","onPaste","onMouseDown","onFocus","onBlur","value","disabled","readOnly"],s=vu({},a);l.forEach(function(p){return delete s[p]}),r=o(s),l.filter(function(p){return r.props[p]!=null&&r.props[p]!==a[p]}).length&&$f(!1)}else r=al.createElement("input",vu({ref:this.handleRef},a));var u={onFocus:this.onFocus,onBlur:this.onBlur};return this.maskOptions.mask&&(a.disabled||a.readOnly||(u.onChange=this.onChange,u.onPaste=this.onPaste,u.onMouseDown=this.onMouseDown),a.value!=null&&(u.value=this.value)),r=al.cloneElement(r,u)},t}(al.Component),rj=nj;Dg.exports=rj;var ij=Dg.exports;const oj=Kr(ij),aj=P.section`
  padding-top: 40px;
  padding-bottom: 40px;

  @media screen and (min-width: 1920px) {
    padding-top: 80px;
    padding-bottom: 80px;
  }
`,sj=P.div`
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
`,lj=P.h2`
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
`,uj=P.div`
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
`,Do=P.img`
  width: 100%;
  height: 100%;
`,cj=P.div`
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
`,dj=P.h3`
  font-size: 16px;
  font-weight: 500;
  line-height: 1.5;
  color: var(--primary-bluedark);

  @media screen and (min-width: 768px) {
    font-size: 20px;
    font-weight: 600;
    line-height: 1.4;
  }

  @media screen and (min-width: 1440px) {
    line-height: 1.2;
  }

  @media screen and (min-width: 1920px) {
    font-size: 24px;
    line-height: 1.33;
  }
`,fj=P.form`
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  gap: 8px;
  align-self: stretch;
`,Jf=P.label`
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
    line-height: 1.5;
  }
`,pj=P(sn)`
  vertical-align: super;
`,Zf=P.input`
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
`,hj=P.div`
  display: flex;
  flex-direction: column;
  gap: 8px;
  width: 100%;

  @media screen and (min-width: 1440px) {
    flex-direction: row;
  }
`,Gf=P.label`
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
    line-height: 1.5;
  }
`,mj=P(oj)`
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
`,gj=P.label`
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
    line-height: 1.5;
  }
`,xj=P.textarea`
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
`,fi=P.p`
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
`,vj=P.button`
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
`;var io=e=>e.type==="checkbox",Ir=e=>e instanceof Date,at=e=>e==null;const Vg=e=>typeof e=="object";var Ue=e=>!at(e)&&!Array.isArray(e)&&Vg(e)&&!Ir(e),Ug=e=>Ue(e)&&e.target?io(e.target)?e.target.checked:e.target.value:e,yj=e=>e.substring(0,e.search(/\.\d+(\.|$)/))||e,Wg=(e,t)=>e.has(yj(t)),wj=e=>{const t=e.constructor&&e.constructor.prototype;return Ue(t)&&t.hasOwnProperty("isPrototypeOf")},Tc=typeof window<"u"&&typeof window.HTMLElement<"u"&&typeof document<"u";function Ft(e){let t;const n=Array.isArray(e);if(e instanceof Date)t=new Date(e);else if(e instanceof Set)t=new Set(e);else if(!(Tc&&(e instanceof Blob||e instanceof FileList))&&(n||Ue(e)))if(t=n?[]:{},!n&&!wj(e))t=e;else for(const r in e)e.hasOwnProperty(r)&&(t[r]=Ft(e[r]));else return e;return t}var oo=e=>Array.isArray(e)?e.filter(Boolean):[],Le=e=>e===void 0,B=(e,t,n)=>{if(!t||!Ue(e))return n;const r=oo(t.split(/[,[\].]+?/)).reduce((i,o)=>at(i)?i:i[o],e);return Le(r)||r===e?Le(e[t])?n:e[t]:r},_t=e=>typeof e=="boolean";const za={BLUR:"blur",FOCUS_OUT:"focusout",CHANGE:"change"},Wt={onBlur:"onBlur",onChange:"onChange",onSubmit:"onSubmit",onTouched:"onTouched",all:"all"},an={max:"max",min:"min",maxLength:"maxLength",minLength:"minLength",pattern:"pattern",required:"required",validate:"validate"},bj=be.createContext(null),_c=()=>be.useContext(bj);var Bg=(e,t,n,r=!0)=>{const i={defaultValues:t._defaultValues};for(const o in e)Object.defineProperty(i,o,{get:()=>{const a=o;return t._proxyFormState[a]!==Wt.all&&(t._proxyFormState[a]=!r||Wt.all),n&&(n[a]=!0),e[a]}});return i},Pt=e=>Ue(e)&&!Object.keys(e).length,Hg=(e,t,n,r)=>{n(e);const{name:i,...o}=e;return Pt(o)||Object.keys(o).length>=Object.keys(t).length||Object.keys(o).find(a=>t[a]===(!r||Wt.all))},na=e=>Array.isArray(e)?e:[e],$g=(e,t,n)=>!e||!t||e===t||na(e).some(r=>r&&(n?r===t:r.startsWith(t)||t.startsWith(r)));function Ac(e){const t=be.useRef(e);t.current=e,be.useEffect(()=>{const n=!e.disabled&&t.current.subject&&t.current.subject.subscribe({next:t.current.next});return()=>{n&&n.unsubscribe()}},[e.disabled])}function kj(e){const t=_c(),{control:n=t.control,disabled:r,name:i,exact:o}=e||{},[a,l]=be.useState(n._formState),s=be.useRef(!0),u=be.useRef({isDirty:!1,isLoading:!1,dirtyFields:!1,touchedFields:!1,isValidating:!1,isValid:!1,errors:!1}),p=be.useRef(i);return p.current=i,Ac({disabled:r,next:h=>s.current&&$g(p.current,h.name,o)&&Hg(h,u.current,n._updateFormState)&&l({...n._formState,...h}),subject:n._subjects.state}),be.useEffect(()=>(s.current=!0,u.current.isValid&&n._updateValid(!0),()=>{s.current=!1}),[n]),Bg(a,n,u.current,!1)}var en=e=>typeof e=="string",Yg=(e,t,n,r,i)=>en(e)?(r&&t.watch.add(e),B(n,e,i)):Array.isArray(e)?e.map(o=>(r&&t.watch.add(o),B(n,o))):(r&&(t.watchAll=!0),n);function Sj(e){const t=_c(),{control:n=t.control,name:r,defaultValue:i,disabled:o,exact:a}=e||{},l=be.useRef(r);l.current=r,Ac({disabled:o,subject:n._subjects.values,next:p=>{$g(l.current,p.name,a)&&u(Ft(Yg(l.current,n._names,p.values||n._formValues,!1,i)))}});const[s,u]=be.useState(n._getWatch(r,i));return be.useEffect(()=>n._removeUnmounted()),s}var Ic=e=>/^\w*$/.test(e),Qg=e=>oo(e.replace(/["|']|\]/g,"").split(/\.|\[/)),Se=(e,t,n)=>{let r=-1;const i=Ic(t)?[t]:Qg(t),o=i.length,a=o-1;for(;++r<o;){const l=i[r];let s=n;if(r!==a){const u=e[l];s=Ue(u)||Array.isArray(u)?u:isNaN(+i[r+1])?{}:[]}e[l]=s,e=e[l]}return e};function jj(e){const t=_c(),{name:n,disabled:r,control:i=t.control,shouldUnregister:o}=e,a=Wg(i._names.array,n),l=Sj({control:i,name:n,defaultValue:B(i._formValues,n,B(i._defaultValues,n,e.defaultValue)),exact:!0}),s=kj({control:i,name:n}),u=be.useRef(i.register(n,{...e.rules,value:l,..._t(e.disabled)?{disabled:e.disabled}:{}}));return be.useEffect(()=>{const p=i._options.shouldUnregister||o,h=(g,v)=>{const x=B(i._fields,g);x&&(x._f.mount=v)};if(h(n,!0),p){const g=Ft(B(i._options.defaultValues,n));Se(i._defaultValues,n,g),Le(B(i._formValues,n))&&Se(i._formValues,n,g)}return()=>{(a?p&&!i._state.action:p)?i.unregister(n):h(n,!1)}},[n,i,a,o]),be.useEffect(()=>{B(i._fields,n)&&i._updateDisabledField({disabled:r,fields:i._fields,name:n,value:B(i._fields,n)._f.value})},[r,n,i]),{field:{name:n,value:l,..._t(r)||_t(s.disabled)?{disabled:s.disabled||r}:{},onChange:be.useCallback(p=>u.current.onChange({target:{value:Ug(p),name:n},type:za.CHANGE}),[n]),onBlur:be.useCallback(()=>u.current.onBlur({target:{value:B(i._formValues,n),name:n},type:za.BLUR}),[n,i]),ref:p=>{const h=B(i._fields,n);h&&p&&(h._f.ref={focus:()=>p.focus(),select:()=>p.select(),setCustomValidity:g=>p.setCustomValidity(g),reportValidity:()=>p.reportValidity()})}},formState:s,fieldState:Object.defineProperties({},{invalid:{enumerable:!0,get:()=>!!B(s.errors,n)},isDirty:{enumerable:!0,get:()=>!!B(s.dirtyFields,n)},isTouched:{enumerable:!0,get:()=>!!B(s.touchedFields,n)},error:{enumerable:!0,get:()=>B(s.errors,n)}})}}const Cj=e=>e.render(jj(e));var Oj=(e,t,n,r,i)=>t?{...n[e],types:{...n[e]&&n[e].types?n[e].types:{},[r]:i||!0}}:{},qf=e=>({isOnSubmit:!e||e===Wt.onSubmit,isOnBlur:e===Wt.onBlur,isOnChange:e===Wt.onChange,isOnAll:e===Wt.all,isOnTouch:e===Wt.onTouched}),ep=(e,t,n)=>!n&&(t.watchAll||t.watch.has(e)||[...t.watch].some(r=>e.startsWith(r)&&/^\.\w+/.test(e.slice(r.length))));const Ti=(e,t,n,r)=>{for(const i of n||Object.keys(e)){const o=B(e,i);if(o){const{_f:a,...l}=o;if(a){if(a.refs&&a.refs[0]&&t(a.refs[0],i)&&!r)break;if(a.ref&&t(a.ref,a.name)&&!r)break;Ti(l,t)}else Ue(l)&&Ti(l,t)}}};var Ej=(e,t,n)=>{const r=oo(B(e,n));return Se(r,"root",t[n]),Se(e,n,r),e},Lc=e=>e.type==="file",Dn=e=>typeof e=="function",Da=e=>{if(!Tc)return!1;const t=e?e.ownerDocument:0;return e instanceof(t&&t.defaultView?t.defaultView.HTMLElement:HTMLElement)},ra=e=>en(e),Rc=e=>e.type==="radio",Fa=e=>e instanceof RegExp;const tp={value:!1,isValid:!1},np={value:!0,isValid:!0};var Xg=e=>{if(Array.isArray(e)){if(e.length>1){const t=e.filter(n=>n&&n.checked&&!n.disabled).map(n=>n.value);return{value:t,isValid:!!t.length}}return e[0].checked&&!e[0].disabled?e[0].attributes&&!Le(e[0].attributes.value)?Le(e[0].value)||e[0].value===""?np:{value:e[0].value,isValid:!0}:np:tp}return tp};const rp={isValid:!1,value:null};var Kg=e=>Array.isArray(e)?e.reduce((t,n)=>n&&n.checked&&!n.disabled?{isValid:!0,value:n.value}:t,rp):rp;function ip(e,t,n="validate"){if(ra(e)||Array.isArray(e)&&e.every(ra)||_t(e)&&!e)return{type:n,message:ra(e)?e:"",ref:t}}var wr=e=>Ue(e)&&!Fa(e)?e:{value:e,message:""},op=async(e,t,n,r,i)=>{const{ref:o,refs:a,required:l,maxLength:s,minLength:u,min:p,max:h,pattern:g,validate:v,name:x,valueAsNumber:y,mount:b,disabled:d}=e._f,f=B(t,x);if(!b||d)return{};const m=a?a[0]:o,w=I=>{r&&m.reportValidity&&(m.setCustomValidity(_t(I)?"":I||""),m.reportValidity())},k={},M=Rc(o),E=io(o),j=M||E,C=(y||Lc(o))&&Le(o.value)&&Le(f)||Da(o)&&o.value===""||f===""||Array.isArray(f)&&!f.length,T=Oj.bind(null,x,n,k),_=(I,L,U,H=an.maxLength,q=an.minLength)=>{const he=I?L:U;k[x]={type:I?H:q,message:he,ref:o,...T(I?H:q,he)}};if(i?!Array.isArray(f)||!f.length:l&&(!j&&(C||at(f))||_t(f)&&!f||E&&!Xg(a).isValid||M&&!Kg(a).isValid)){const{value:I,message:L}=ra(l)?{value:!!l,message:l}:wr(l);if(I&&(k[x]={type:an.required,message:L,ref:m,...T(an.required,L)},!n))return w(L),k}if(!C&&(!at(p)||!at(h))){let I,L;const U=wr(h),H=wr(p);if(!at(f)&&!isNaN(f)){const q=o.valueAsNumber||f&&+f;at(U.value)||(I=q>U.value),at(H.value)||(L=q<H.value)}else{const q=o.valueAsDate||new Date(f),he=X=>new Date(new Date().toDateString()+" "+X),F=o.type=="time",Q=o.type=="week";en(U.value)&&f&&(I=F?he(f)>he(U.value):Q?f>U.value:q>new Date(U.value)),en(H.value)&&f&&(L=F?he(f)<he(H.value):Q?f<H.value:q<new Date(H.value))}if((I||L)&&(_(!!I,U.message,H.message,an.max,an.min),!n))return w(k[x].message),k}if((s||u)&&!C&&(en(f)||i&&Array.isArray(f))){const I=wr(s),L=wr(u),U=!at(I.value)&&f.length>+I.value,H=!at(L.value)&&f.length<+L.value;if((U||H)&&(_(U,I.message,L.message),!n))return w(k[x].message),k}if(g&&!C&&en(f)){const{value:I,message:L}=wr(g);if(Fa(I)&&!f.match(I)&&(k[x]={type:an.pattern,message:L,ref:o,...T(an.pattern,L)},!n))return w(L),k}if(v){if(Dn(v)){const I=await v(f,t),L=ip(I,m);if(L&&(k[x]={...L,...T(an.validate,L.message)},!n))return w(L.message),k}else if(Ue(v)){let I={};for(const L in v){if(!Pt(I)&&!n)break;const U=ip(await v[L](f,t),m,L);U&&(I={...U,...T(L,U.message)},w(U.message),n&&(k[x]=I))}if(!Pt(I)&&(k[x]={ref:m,...I},!n))return k}}return w(!0),k};function Pj(e,t){const n=t.slice(0,-1).length;let r=0;for(;r<n;)e=Le(e)?r++:e[t[r++]];return e}function Mj(e){for(const t in e)if(e.hasOwnProperty(t)&&!Le(e[t]))return!1;return!0}function Xe(e,t){const n=Array.isArray(t)?t:Ic(t)?[t]:Qg(t),r=n.length===1?e:Pj(e,n),i=n.length-1,o=n[i];return r&&delete r[o],i!==0&&(Ue(r)&&Pt(r)||Array.isArray(r)&&Mj(r))&&Xe(e,n.slice(0,-1)),e}var ul=()=>{let e=[];return{get observers(){return e},next:i=>{for(const o of e)o.next&&o.next(i)},subscribe:i=>(e.push(i),{unsubscribe:()=>{e=e.filter(o=>o!==i)}}),unsubscribe:()=>{e=[]}}},Na=e=>at(e)||!Vg(e);function nr(e,t){if(Na(e)||Na(t))return e===t;if(Ir(e)&&Ir(t))return e.getTime()===t.getTime();const n=Object.keys(e),r=Object.keys(t);if(n.length!==r.length)return!1;for(const i of n){const o=e[i];if(!r.includes(i))return!1;if(i!=="ref"){const a=t[i];if(Ir(o)&&Ir(a)||Ue(o)&&Ue(a)||Array.isArray(o)&&Array.isArray(a)?!nr(o,a):o!==a)return!1}}return!0}var Jg=e=>e.type==="select-multiple",Tj=e=>Rc(e)||io(e),cl=e=>Da(e)&&e.isConnected,Zg=e=>{for(const t in e)if(Dn(e[t]))return!0;return!1};function Va(e,t={}){const n=Array.isArray(e);if(Ue(e)||n)for(const r in e)Array.isArray(e[r])||Ue(e[r])&&!Zg(e[r])?(t[r]=Array.isArray(e[r])?[]:{},Va(e[r],t[r])):at(e[r])||(t[r]=!0);return t}function Gg(e,t,n){const r=Array.isArray(e);if(Ue(e)||r)for(const i in e)Array.isArray(e[i])||Ue(e[i])&&!Zg(e[i])?Le(t)||Na(n[i])?n[i]=Array.isArray(e[i])?Va(e[i],[]):{...Va(e[i])}:Gg(e[i],at(t)?{}:t[i],n[i]):n[i]=!nr(e[i],t[i]);return n}var dl=(e,t)=>Gg(e,t,Va(t)),qg=(e,{valueAsNumber:t,valueAsDate:n,setValueAs:r})=>Le(e)?e:t?e===""?NaN:e&&+e:n&&en(e)?new Date(e):r?r(e):e;function fl(e){const t=e.ref;if(!(e.refs?e.refs.every(n=>n.disabled):t.disabled))return Lc(t)?t.files:Rc(t)?Kg(e.refs).value:Jg(t)?[...t.selectedOptions].map(({value:n})=>n):io(t)?Xg(e.refs).value:qg(Le(t.value)?e.ref.value:t.value,e)}var _j=(e,t,n,r)=>{const i={};for(const o of e){const a=B(t,o);a&&Se(i,o,a._f)}return{criteriaMode:n,names:[...e],fields:i,shouldUseNativeValidation:r}},pi=e=>Le(e)?e:Fa(e)?e.source:Ue(e)?Fa(e.value)?e.value.source:e.value:e,Aj=e=>e.mount&&(e.required||e.min||e.max||e.maxLength||e.minLength||e.pattern||e.validate);function ap(e,t,n){const r=B(e,n);if(r||Ic(n))return{error:r,name:n};const i=n.split(".");for(;i.length;){const o=i.join("."),a=B(t,o),l=B(e,o);if(a&&!Array.isArray(a)&&n!==o)return{name:n};if(l&&l.type)return{name:o,error:l};i.pop()}return{name:n}}var Ij=(e,t,n,r,i)=>i.isOnAll?!1:!n&&i.isOnTouch?!(t||e):(n?r.isOnBlur:i.isOnBlur)?!e:(n?r.isOnChange:i.isOnChange)?e:!0,Lj=(e,t)=>!oo(B(e,t)).length&&Xe(e,t);const Rj={mode:Wt.onSubmit,reValidateMode:Wt.onChange,shouldFocusError:!0};function zj(e={},t){let n={...Rj,...e},r={submitCount:0,isDirty:!1,isLoading:Dn(n.defaultValues),isValidating:!1,isSubmitted:!1,isSubmitting:!1,isSubmitSuccessful:!1,isValid:!1,touchedFields:{},dirtyFields:{},errors:n.errors||{},disabled:!1},i={},o=Ue(n.defaultValues)||Ue(n.values)?Ft(n.defaultValues||n.values)||{}:{},a=n.shouldUnregister?{}:Ft(o),l={action:!1,mount:!1,watch:!1},s={mount:new Set,unMount:new Set,array:new Set,watch:new Set},u,p=0;const h={isDirty:!1,dirtyFields:!1,touchedFields:!1,isValidating:!1,isValid:!1,errors:!1},g={values:ul(),array:ul(),state:ul()},v=e.resetOptions&&e.resetOptions.keepDirtyValues,x=qf(n.mode),y=qf(n.reValidateMode),b=n.criteriaMode===Wt.all,d=S=>O=>{clearTimeout(p),p=setTimeout(S,O)},f=async S=>{if(h.isValid||S){const O=n.resolver?Pt((await T()).errors):await I(i,!0);O!==r.isValid&&g.state.next({isValid:O})}},m=S=>h.isValidating&&g.state.next({isValidating:S}),w=(S,O=[],A,W,V=!0,N=!0)=>{if(W&&A){if(l.action=!0,N&&Array.isArray(B(i,S))){const ee=A(B(i,S),W.argA,W.argB);V&&Se(i,S,ee)}if(N&&Array.isArray(B(r.errors,S))){const ee=A(B(r.errors,S),W.argA,W.argB);V&&Se(r.errors,S,ee),Lj(r.errors,S)}if(h.touchedFields&&N&&Array.isArray(B(r.touchedFields,S))){const ee=A(B(r.touchedFields,S),W.argA,W.argB);V&&Se(r.touchedFields,S,ee)}h.dirtyFields&&(r.dirtyFields=dl(o,a)),g.state.next({name:S,isDirty:U(S,O),dirtyFields:r.dirtyFields,errors:r.errors,isValid:r.isValid})}else Se(a,S,O)},k=(S,O)=>{Se(r.errors,S,O),g.state.next({errors:r.errors})},M=S=>{r.errors=S,g.state.next({errors:r.errors,isValid:!1})},E=(S,O,A,W)=>{const V=B(i,S);if(V){const N=B(a,S,Le(A)?B(o,S):A);Le(N)||W&&W.defaultChecked||O?Se(a,S,O?N:fl(V._f)):he(S,N),l.mount&&f()}},j=(S,O,A,W,V)=>{let N=!1,ee=!1;const ke={name:S},Be=!!(B(i,S)&&B(i,S)._f.disabled);if(!A||W){h.isDirty&&(ee=r.isDirty,r.isDirty=ke.isDirty=U(),N=ee!==ke.isDirty);const Qt=Be||nr(B(o,S),O);ee=!!(!Be&&B(r.dirtyFields,S)),Qt||Be?Xe(r.dirtyFields,S):Se(r.dirtyFields,S,!0),ke.dirtyFields=r.dirtyFields,N=N||h.dirtyFields&&ee!==!Qt}if(A){const Qt=B(r.touchedFields,S);Qt||(Se(r.touchedFields,S,A),ke.touchedFields=r.touchedFields,N=N||h.touchedFields&&Qt!==A)}return N&&V&&g.state.next(ke),N?ke:{}},C=(S,O,A,W)=>{const V=B(r.errors,S),N=h.isValid&&_t(O)&&r.isValid!==O;if(e.delayError&&A?(u=d(()=>k(S,A)),u(e.delayError)):(clearTimeout(p),u=null,A?Se(r.errors,S,A):Xe(r.errors,S)),(A?!nr(V,A):V)||!Pt(W)||N){const ee={...W,...N&&_t(O)?{isValid:O}:{},errors:r.errors,name:S};r={...r,...ee},g.state.next(ee)}m(!1)},T=async S=>n.resolver(a,n.context,_j(S||s.mount,i,n.criteriaMode,n.shouldUseNativeValidation)),_=async S=>{const{errors:O}=await T(S);if(S)for(const A of S){const W=B(O,A);W?Se(r.errors,A,W):Xe(r.errors,A)}else r.errors=O;return O},I=async(S,O,A={valid:!0})=>{for(const W in S){const V=S[W];if(V){const{_f:N,...ee}=V;if(N){const ke=s.array.has(N.name),Be=await op(V,a,b,n.shouldUseNativeValidation&&!O,ke);if(Be[N.name]&&(A.valid=!1,O))break;!O&&(B(Be,N.name)?ke?Ej(r.errors,Be,N.name):Se(r.errors,N.name,Be[N.name]):Xe(r.errors,N.name))}ee&&await I(ee,O,A)}}return A.valid},L=()=>{for(const S of s.unMount){const O=B(i,S);O&&(O._f.refs?O._f.refs.every(A=>!cl(A)):!cl(O._f.ref))&&Qe(S)}s.unMount=new Set},U=(S,O)=>(S&&O&&Se(a,S,O),!nr(Ce(),o)),H=(S,O,A)=>Yg(S,s,{...l.mount?a:Le(O)?o:en(S)?{[S]:O}:O},A,O),q=S=>oo(B(l.mount?a:o,S,e.shouldUnregister?B(o,S,[]):[])),he=(S,O,A={})=>{const W=B(i,S);let V=O;if(W){const N=W._f;N&&(!N.disabled&&Se(a,S,qg(O,N)),V=Da(N.ref)&&at(O)?"":O,Jg(N.ref)?[...N.ref.options].forEach(ee=>ee.selected=V.includes(ee.value)):N.refs?io(N.ref)?N.refs.length>1?N.refs.forEach(ee=>(!ee.defaultChecked||!ee.disabled)&&(ee.checked=Array.isArray(V)?!!V.find(ke=>ke===ee.value):V===ee.value)):N.refs[0]&&(N.refs[0].checked=!!V):N.refs.forEach(ee=>ee.checked=ee.value===V):Lc(N.ref)?N.ref.value="":(N.ref.value=V,N.ref.type||g.values.next({name:S,values:{...a}})))}(A.shouldDirty||A.shouldTouch)&&j(S,V,A.shouldTouch,A.shouldDirty,!0),A.shouldValidate&&ne(S)},F=(S,O,A)=>{for(const W in O){const V=O[W],N=`${S}.${W}`,ee=B(i,N);(s.array.has(S)||!Na(V)||ee&&!ee._f)&&!Ir(V)?F(N,V,A):he(N,V,A)}},Q=(S,O,A={})=>{const W=B(i,S),V=s.array.has(S),N=Ft(O);Se(a,S,N),V?(g.array.next({name:S,values:{...a}}),(h.isDirty||h.dirtyFields)&&A.shouldDirty&&g.state.next({name:S,dirtyFields:dl(o,a),isDirty:U(S,N)})):W&&!W._f&&!at(N)?F(S,N,A):he(S,N,A),ep(S,s)&&g.state.next({...r}),g.values.next({name:S,values:{...a}}),!l.mount&&t()},X=async S=>{const O=S.target;let A=O.name,W=!0;const V=B(i,A),N=()=>O.type?fl(V._f):Ug(S),ee=ke=>{W=Number.isNaN(ke)||ke===B(a,A,ke)};if(V){let ke,Be;const Qt=N(),hr=S.type===za.BLUR||S.type===za.FOCUS_OUT,ex=!Aj(V._f)&&!n.resolver&&!B(r.errors,A)&&!V._f.deps||Ij(hr,B(r.touchedFields,A),r.isSubmitted,y,x),ys=ep(A,s,hr);Se(a,A,Qt),hr?(V._f.onBlur&&V._f.onBlur(S),u&&u(0)):V._f.onChange&&V._f.onChange(S);const ws=j(A,Qt,hr,!1),tx=!Pt(ws)||ys;if(!hr&&g.values.next({name:A,type:S.type,values:{...a}}),ex)return h.isValid&&f(),tx&&g.state.next({name:A,...ys?{}:ws});if(!hr&&ys&&g.state.next({...r}),m(!0),n.resolver){const{errors:zc}=await T([A]);if(ee(Qt),W){const nx=ap(r.errors,i,A),Dc=ap(zc,i,nx.name||A);ke=Dc.error,A=Dc.name,Be=Pt(zc)}}else ke=(await op(V,a,b,n.shouldUseNativeValidation))[A],ee(Qt),W&&(ke?Be=!1:h.isValid&&(Be=await I(i,!0)));W&&(V._f.deps&&ne(V._f.deps),C(A,Be,ke,ws))}},ce=(S,O)=>{if(B(r.errors,O)&&S.focus)return S.focus(),1},ne=async(S,O={})=>{let A,W;const V=na(S);if(m(!0),n.resolver){const N=await _(Le(S)?S:V);A=Pt(N),W=S?!V.some(ee=>B(N,ee)):A}else S?(W=(await Promise.all(V.map(async N=>{const ee=B(i,N);return await I(ee&&ee._f?{[N]:ee}:ee)}))).every(Boolean),!(!W&&!r.isValid)&&f()):W=A=await I(i);return g.state.next({...!en(S)||h.isValid&&A!==r.isValid?{}:{name:S},...n.resolver||!S?{isValid:A}:{},errors:r.errors,isValidating:!1}),O.shouldFocus&&!W&&Ti(i,ce,S?V:s.mount),W},Ce=S=>{const O={...o,...l.mount?a:{}};return Le(S)?O:en(S)?B(O,S):S.map(A=>B(O,A))},we=(S,O)=>({invalid:!!B((O||r).errors,S),isDirty:!!B((O||r).dirtyFields,S),isTouched:!!B((O||r).touchedFields,S),error:B((O||r).errors,S)}),We=S=>{S&&na(S).forEach(O=>Xe(r.errors,O)),g.state.next({errors:S?r.errors:{}})},de=(S,O,A)=>{const W=(B(i,S,{_f:{}})._f||{}).ref;Se(r.errors,S,{...O,ref:W}),g.state.next({name:S,errors:r.errors,isValid:!1}),A&&A.shouldFocus&&W&&W.focus&&W.focus()},Pe=(S,O)=>Dn(S)?g.values.subscribe({next:A=>S(H(void 0,O),A)}):H(S,O,!0),Qe=(S,O={})=>{for(const A of S?na(S):s.mount)s.mount.delete(A),s.array.delete(A),O.keepValue||(Xe(i,A),Xe(a,A)),!O.keepError&&Xe(r.errors,A),!O.keepDirty&&Xe(r.dirtyFields,A),!O.keepTouched&&Xe(r.touchedFields,A),!n.shouldUnregister&&!O.keepDefaultValue&&Xe(o,A);g.values.next({values:{...a}}),g.state.next({...r,...O.keepDirty?{isDirty:U()}:{}}),!O.keepIsValid&&f()},Ot=({disabled:S,name:O,field:A,fields:W,value:V})=>{if(_t(S)){const N=S?void 0:Le(V)?fl(A?A._f:B(W,O)._f):V;Se(a,O,N),j(O,N,!1,!1,!0)}},D=(S,O={})=>{let A=B(i,S);const W=_t(O.disabled);return Se(i,S,{...A||{},_f:{...A&&A._f?A._f:{ref:{name:S}},name:S,mount:!0,...O}}),s.mount.add(S),A?Ot({field:A,disabled:O.disabled,name:S,value:O.value}):E(S,!0,O.value),{...W?{disabled:O.disabled}:{},...n.progressive?{required:!!O.required,min:pi(O.min),max:pi(O.max),minLength:pi(O.minLength),maxLength:pi(O.maxLength),pattern:pi(O.pattern)}:{},name:S,onChange:X,onBlur:X,ref:V=>{if(V){D(S,O),A=B(i,S);const N=Le(V.value)&&V.querySelectorAll&&V.querySelectorAll("input,select,textarea")[0]||V,ee=Tj(N),ke=A._f.refs||[];if(ee?ke.find(Be=>Be===N):N===A._f.ref)return;Se(i,S,{_f:{...A._f,...ee?{refs:[...ke.filter(cl),N,...Array.isArray(B(o,S))?[{}]:[]],ref:{type:N.type,name:S}}:{ref:N}}}),E(S,!1,void 0,N)}else A=B(i,S,{}),A._f&&(A._f.mount=!1),(n.shouldUnregister||O.shouldUnregister)&&!(Wg(s.array,S)&&l.action)&&s.unMount.add(S)}}},$=()=>n.shouldFocusError&&Ti(i,ce,s.mount),oe=S=>{_t(S)&&(g.state.next({disabled:S}),Ti(i,(O,A)=>{let W=S;const V=B(i,A);V&&_t(V._f.disabled)&&(W||(W=V._f.disabled)),O.disabled=W},0,!1))},ie=(S,O)=>async A=>{A&&(A.preventDefault&&A.preventDefault(),A.persist&&A.persist());let W=Ft(a);if(g.state.next({isSubmitting:!0}),n.resolver){const{errors:V,values:N}=await T();r.errors=V,W=N}else await I(i);Xe(r.errors,"root"),Pt(r.errors)?(g.state.next({errors:{}}),await S(W,A)):(O&&await O({...r.errors},A),$(),setTimeout($)),g.state.next({isSubmitted:!0,isSubmitting:!1,isSubmitSuccessful:Pt(r.errors),submitCount:r.submitCount+1,errors:r.errors})},re=(S,O={})=>{B(i,S)&&(Le(O.defaultValue)?Q(S,B(o,S)):(Q(S,O.defaultValue),Se(o,S,O.defaultValue)),O.keepTouched||Xe(r.touchedFields,S),O.keepDirty||(Xe(r.dirtyFields,S),r.isDirty=O.defaultValue?U(S,B(o,S)):U()),O.keepError||(Xe(r.errors,S),h.isValid&&f()),g.state.next({...r}))},se=(S,O={})=>{const A=S?Ft(S):o,W=Ft(A),V=S&&!Pt(S)?W:o;if(O.keepDefaultValues||(o=A),!O.keepValues){if(O.keepDirtyValues||v)for(const N of s.mount)B(r.dirtyFields,N)?Se(V,N,B(a,N)):Q(N,B(V,N));else{if(Tc&&Le(S))for(const N of s.mount){const ee=B(i,N);if(ee&&ee._f){const ke=Array.isArray(ee._f.refs)?ee._f.refs[0]:ee._f.ref;if(Da(ke)){const Be=ke.closest("form");if(Be){Be.reset();break}}}}i={}}a=e.shouldUnregister?O.keepDefaultValues?Ft(o):{}:Ft(V),g.array.next({values:{...V}}),g.values.next({values:{...V}})}s={mount:new Set,unMount:new Set,array:new Set,watch:new Set,watchAll:!1,focus:""},!l.mount&&t(),l.mount=!h.isValid||!!O.keepIsValid,l.watch=!!e.shouldUnregister,g.state.next({submitCount:O.keepSubmitCount?r.submitCount:0,isDirty:O.keepDirty?r.isDirty:!!(O.keepDefaultValues&&!nr(S,o)),isSubmitted:O.keepIsSubmitted?r.isSubmitted:!1,dirtyFields:O.keepDirtyValues?r.dirtyFields:O.keepDefaultValues&&S?dl(o,S):{},touchedFields:O.keepTouched?r.touchedFields:{},errors:O.keepErrors?r.errors:{},isSubmitSuccessful:O.keepIsSubmitSuccessful?r.isSubmitSuccessful:!1,isSubmitting:!1})},ae=(S,O)=>se(Dn(S)?S(a):S,O);return{control:{register:D,unregister:Qe,getFieldState:we,handleSubmit:ie,setError:de,_executeSchema:T,_getWatch:H,_getDirty:U,_updateValid:f,_removeUnmounted:L,_updateFieldArray:w,_updateDisabledField:Ot,_getFieldArray:q,_reset:se,_resetDefaultValues:()=>Dn(n.defaultValues)&&n.defaultValues().then(S=>{ae(S,n.resetOptions),g.state.next({isLoading:!1})}),_updateFormState:S=>{r={...r,...S}},_disableForm:oe,_subjects:g,_proxyFormState:h,_setErrors:M,get _fields(){return i},get _formValues(){return a},get _state(){return l},set _state(S){l=S},get _defaultValues(){return o},get _names(){return s},set _names(S){s=S},get _formState(){return r},set _formState(S){r=S},get _options(){return n},set _options(S){n={...n,...S}}},trigger:ne,register:D,handleSubmit:ie,watch:Pe,setValue:Q,getValues:Ce,reset:ae,resetField:re,clearErrors:We,unregister:Qe,setError:de,setFocus:(S,O={})=>{const A=B(i,S),W=A&&A._f;if(W){const V=W.refs?W.refs[0]:W.ref;V.focus&&(V.focus(),O.shouldSelect&&V.select())}},getFieldState:we}}function Dj(e={}){const t=be.useRef(),n=be.useRef(),[r,i]=be.useState({isDirty:!1,isValidating:!1,isLoading:Dn(e.defaultValues),isSubmitted:!1,isSubmitting:!1,isSubmitSuccessful:!1,isValid:!1,submitCount:0,dirtyFields:{},touchedFields:{},errors:e.errors||{},disabled:!1,defaultValues:Dn(e.defaultValues)?void 0:e.defaultValues});t.current||(t.current={...zj(e,()=>i(a=>({...a}))),formState:r});const o=t.current.control;return o._options=e,Ac({subject:o._subjects.state,next:a=>{Hg(a,o._proxyFormState,o._updateFormState,!0)&&i({...o._formState})}}),be.useEffect(()=>o._disableForm(e.disabled),[o,e.disabled]),be.useEffect(()=>{if(o._proxyFormState.isDirty){const a=o._getDirty();a!==r.isDirty&&o._subjects.state.next({isDirty:a})}},[o,r.isDirty]),be.useEffect(()=>{e.values&&!nr(e.values,n.current)?(o._reset(e.values,o._options.resetOptions),n.current=e.values,i(a=>({...a}))):o._resetDefaultValues()},[e.values,o]),be.useEffect(()=>{e.errors&&o._setErrors(e.errors)},[e.errors,o]),be.useEffect(()=>{o._state.mount||(o._updateValid(),o._state.mount=!0),o._state.watch&&(o._state.watch=!1,o._subjects.state.next({...o._formState})),o._removeUnmounted()}),t.current.formState=Bg(r,o),t.current}const Fj={container:e=>({...e,width:"100%"}),control:(e,t)=>{const n=t.selectProps.errors;return{...e,display:"flex",height:"48px",padding:"12px 16px",alignItems:"center",flexShrink:"0",gap:"8px",alignSelf:"stretch",alignContent:"flex-start",borderRadius:"16px",outline:"none",border:`1px solid ${n?"var(--secondary-red)":"transparent"}`,backgroundColor:"var(--background-white)",boxShadow:"0px 0px 8px 0px rgba(27, 54, 65, 0.08)","&:hover":{boxShadow:"0px 0px 16px 0px rgba(27, 54, 65, 0.16)"},"&:focus":{outline:"none",border:"1px solid var(--typography-grey)",background:"var(--background-white)",boxShadow:"0px 0px 8px 0px rgba(27, 54, 65, 0.08)"},"@media screen and (min-width: 768px)":{height:"56px"},"@media screen and (min-width: 1440px)":{padding:"14px 16px"},"@media screen and (min-width: 1920px)":{padding:"12px 16px"}}},dropdownIndicator:e=>({...e,color:"#161717",padding:"0"}),indicatorSeparator:()=>({display:"none"}),option:e=>({...e,display:"flex",alignItems:"flex-start",fontSize:"14px",lineHeight:"1.43",fontWeight:"400",backgroundColor:"var(--background-white)",color:"#1B3641","&:hover":{backgroundColor:"rgba(27, 54, 65, 0.2)",fontWeight:"600"},"@media screen and (min-width: 768px)":{fontSize:"15px",lineHeight:"1.47"},"@media screen and (min-width: 1920px)":{fontSize:"16px",lineHeight:"1.5"}}),menu:e=>({...e,height:"auto",marginTop:"0",border:"none",borderRadius:"16px",boxShadow:"0px 0px 8px 0px rgba(27, 54, 65, 0.08)",color:"var(--primary-bluedark)",backgroundColor:"var(--background-white)"}),singleValue:e=>({...e,fontSize:"14px",fontWeight:"500",lineHeight:"1.43",textAlign:"start",flex:"1 0 0",color:"var(--primary-bluedark)","@media screen and (min-width: 768px)":{fontSize:"15px",lineHeight:"1.47"},"@media screen and (min-width: 1920px)":{fontSize:"16px",lineHeight:"1.5"}}),valueContainer:e=>({...e,padding:"0"})},Nj=()=>{const e=R.useRef(),[t,n]=AS("key",{name:"",email:"",phone:"",service:"",comment:""}),{name:r,email:i,phone:o,service:a,comment:l}=t,s=Wf.find(f=>f.value===a),{register:u,handleSubmit:p,control:h,setValue:g,formState:{errors:v},reset:x}=Dj({mode:"all",shouldFocusError:!1,defaultValues:{}});R.useEffect(()=>{const f=JSON.stringify(t);localStorage.setItem("key",f)},[t]);const y=f=>{g("service",f||null),n({...t,service:(f==null?void 0:f.value)||""})},b=f=>{n({...t,[f.target.name]:f.target.value})},d=async f=>{try{const m={...f,phone:f.phone.replace(/\D/g,"").slice(2),service:s.value};console.log(m),n({name:"",email:"",phone:"",service:"",comment:""}),x(),Uf("Вітаю!","Ваша заявка успішно відправлена!","success",{buttons:!1,timer:5e3})}catch{Uf("Вибачте!","При відправці заявки сталася помилка, спробуйте ще раз!","error",{buttons:!1,timer:5e3})}};return c.jsx(aj,{className:"container",id:"contact",children:c.jsxs(sj,{children:[c.jsx(lj,{children:"Контакт"}),c.jsxs(uj,{children:[c.jsxs("div",{children:[c.jsx(K,{maxWidth:767,children:c.jsx(Do,{srcSet:`${VS} 2x, ${Hf} 1x`,sizes:"(max-width: 767px) 100vw",src:Hf,alt:"notebook",loading:"lazy"})}),c.jsx(K,{minWidth:768,maxWidth:1439,children:c.jsx(Do,{srcSet:`${NS} 2x, ${FS} 1x`,type:"image/webp",sizes:"(min-width: 768px) 100vw (max-width: 1439px) 100vw",src:DS,alt:"notebook",loading:"lazy"})}),c.jsx(K,{minWidth:1440,maxWidth:1919,children:c.jsx(Do,{srcSet:`${zS} 2x, ${RS} 1x`,type:"image/webp",sizes:"(min-width: 1440px) 100vw (max-width: 1919px) 100vw",src:`${LS}`,alt:"notebook",loading:"lazy"})}),c.jsx(K,{minWidth:1920,children:c.jsx(Do,{srcSet:`${IS} 2x, ${Bf} 1x`,type:"image/webp",sizes:"(min-width: 1920px) 100vw",src:Bf,alt:"notebook",loading:"lazy"})})]}),c.jsxs(cj,{children:[c.jsx(dj,{children:"Залишайте контактні дані і ми з вами зв'яжемось"}),c.jsxs(fj,{onSubmit:p(d),children:[c.jsxs(Jf,{children:["Ім’я",c.jsx(pj,{}),c.jsx(Zf,{type:"text",placeholder:"Введіть своє ім’я",...u("name",{required:"Це поле обов'язкове для заповнення",pattern:{value:/^(?:[a-zA-Zа-яА-ЯґҐєЄіІїЇ'-]{1,32}(?:\s+[a-zA-Zа-яА-ЯґҐєЄіІїЇ'-]{1,32})?|[a-zA-Zа-яА-ЯґҐєЄіІїЇ'-]{1,64})$/,message:"Поле повинно містити одне або два слова"}}),value:r,onChange:b,errors:v.name}),v.name&&c.jsxs(fi,{children:[c.jsx(sn,{}),v.name.message]})]}),c.jsxs(hj,{children:[c.jsxs(Gf,{children:["Емейл",c.jsx(sn,{}),c.jsx(Zf,{type:"email",placeholder:"Введіть емейл",...u("email",{required:"Це поле обов'язкове для заповнення",pattern:{value:/[a-z0-9._%+-]+@[a-z0-9.-]+\.[a-z]{2,4}$/,message:"Введіть коректний емейл"}}),value:i,onChange:b,errors:v.email}),v.email&&c.jsxs(fi,{children:[c.jsx(sn,{}),v.email.message]})]}),c.jsxs(Gf,{children:["Номер телефону",c.jsx(sn,{}),c.jsx(mj,{ref:e,type:"tel",mask:"+38(099)999-99-99",placeholder:"Введіть номер телефону",...u("phone",{required:"Це поле обов'язкове для заповнення",pattern:{value:/^\+\d{2}\(\d{3}\)\d{3}-\d{2}-\d{2}$/,message:"Введіть коректний номер телефона"}}),value:o,onChange:b,errors:v.phone}),v.phone&&c.jsxs(fi,{children:[c.jsx(sn,{}),v.phone.message]})]})]}),c.jsxs(Jf,{children:["Послуга",c.jsx(sn,{}),c.jsx(Cj,{name:"service",control:h,shouldUnregister:!1,defaultValue:a,rules:{validate:f=>f?void 0:"Оберіть послугу"},render:({field:f})=>c.jsx(TS,{...u("service",{required:"Оберіть послугу"}),placeholder:"Оберіть послугу",...f,options:Wf,styles:Fj,errors:v.service,onChange:y,value:s})}),v.service&&c.jsxs(fi,{children:[c.jsx(sn,{}),v.service.message]})]}),c.jsxs(gj,{children:["Повідомлення",c.jsx(xj,{name:"comment",placeholder:"Введіть ваше повідомлення",...u("comment",{maxLength:{value:500,message:"Максимальна кількість 500 символів"}}),value:l,onChange:b,errors:v.comment}),v.comment&&c.jsxs(fi,{children:[c.jsx(sn,{}),v.comment.message]})]}),c.jsx(vj,{type:"submit",children:"Надіслати"})]})]})]})]})})},Vj=P.section`
  padding-top: 40px;
  padding-bottom: 40px;

  @media screen and (min-width: 1920px) {
    padding-top: 80px;
    padding-bottom: 80px;
  }
`,Uj=P.div`
  display: flex;
  flex-direction: column;
  background: var(--background-bluedark);
  border-radius: 16px;
  padding: 24px;
  width: 100%;
  height: auto;

  @media screen and (min-width: 768px) {
    gap: 16px;
    padding: 40px;
  }

  @media screen and (min-width: 1920px) {
    gap: 40px;
    padding: 80px;
  }
`,Wj=P.h2`
  font-size: 24px;
  line-height: 32px;
  color: var(--typography-white);
  font-weight: 600;
  margin-bottom: 16px;

  @media screen and (min-width: 768px) {
    font-size: 32px;
    line-height: 40px;
    margin-bottom: 0px;
  }

  @media screen and (min-width: 1920px) {
    font-size: 48px;
    line-height: 56px;
  }
`,Bj=P.p`
  color: var(--typography-white);
  font-size: 15px;
  line-height: 22px;
  font-weight: 500;
  margin-bottom: 24px;

  @media screen and (min-width: 768px) {
    font-size: 18px;
    line-height: 24px;
    margin-bottom: 0px;
  }

  @media screen and (min-width: 1920px) {
    font-size: 20px;
    line-height: 28px;
    width: 828px;
  }
`,Hj=P.span`
  color: var(--primary-yellow);
  font-size: 15px;
  line-height: 22px;

  @media screen and (min-width: 768px) {
    font-size: 18px;
    line-height: 24px;
  }

  @media screen and (min-width: 1920px) {
    font-size: 20px;
    font-weight: 500;
    line-height: 28px;
  }
`,$j=P.ul`
  display: flex;
  gap: 24px;
  flex-direction: column;
  margin-bottom: 24px;

  @media screen and (min-width: 768px) {
    gap: 16px;
    margin-bottom: 0;
  }

  @media screen and (min-width: 1920px) {
    gap: 24px;
    flex-direction: row;
  }
`,Yj=P.li`
  position: relative;
  background: var(--background-white);
  padding: 24px;
  border-radius: 16px;

  @media screen and (min-width: 1920px) {
    width: calc((100% - (24px * 3)) / 4);
    padding: 40px;
  }
`,Qj=P.div`
  position: absolute;
  width: 64px;
  height: 64px;
  border-radius: 16px;
  padding: 16px;
  background: var(--primary-yellow);
  right: 17px;
  top: -15px;

  @media screen and (min-width: 768px) {
    width: 56px;
    height: 56px;
    right: 24px;
    top: 24px;
  }

  @media screen and (min-width: 1920px) {
    width: 80px;
    height: 80px;
    left: 258px;
    top: -24px;
  }
`,Xj=P.a`
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
  line-height: 20px;
  font-weight: 500;
  border-radius: 16px;
  box-shadow: 0px 0px 8px 0px rgba(248, 248, 248, 0.08);
  margin-left: auto;
  margin-right: auto;

  @media screen and (min-width: 768px) {
    width: 260px;
    font-size: 15px;
    line-height: 22px;
  }

  @media screen and (min-width: 1920px) {
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
`,Kj="/healthy-management-project/assets/icon-WQbGU7FW.svg",Jj="/healthy-management-project/assets/icon-2-FNpGPcjZ.svg",Zj="/healthy-management-project/assets/icon-3-GZg06_37.svg",Gj="/healthy-management-project/assets/icon-4-9BBn0thK.svg",pl=[{title:"Менторство та консультації",about:["Для власників та менеджерів з питань менеджменту та розвитку, медичного маркетингу та комунікацій, з питань програм управління здоров'ям","Стейхолдерам та парнерам з питань медичного менеджменту та маркетингу"],path:Kj},{title:"Діагностика",about:["Аудит бізнес-процесів","Аудит маркетингу та сервісу","Аудит системи комунікацій та Сustomer Journey Map"],path:Jj},{title:"Стратегії",about:["Проведення стратегічних сесій","Розробка стратегії розвитку та маркетингу ","Розробка стратегій внутрішніх комунікацій","Розробка стратегій управління здоров'ям"],path:Zj},{title:"Навчання",about:["Медичний маркетинг","Комунікації та сервіс"],path:Gj}],qj=()=>c.jsx(Vj,{className:"container",id:"services",children:c.jsxs(Uj,{children:[c.jsx(Wj,{children:"Послуги"}),c.jsxs(Bj,{children:["Будуємо ефективні ",c.jsx(Hj,{children:"стратегії здорового менеджменту"})," для бізнесів. Розвивайте свій бізнес за допомогою ефективних стратегій здорового менеджменту."]}),c.jsx($j,{children:pl==null?void 0:pl.map(e=>c.jsxs(Yj,{children:[c.jsx(Sc,{title:e.title,about:e.about,variant:"services"}),c.jsx(Qj,{children:c.jsx("img",{src:e.path,alt:e.path})})]},e.title))}),c.jsx(Xj,{href:"#contact",children:"Замовити консультацію"})]})});function eC(){const e=(t,n)=>{n.preventDefault();const r=document.getElementById(t);if(r){const i=r.getBoundingClientRect(),o=window.pageYOffset||document.documentElement.scrollTop;let a;const l=window.innerWidth;l<=768&&(a=i.top+o-80),(l>768||l<=1440)&&(a=i.top+o-80),l>1440||l<=1920?a=i.top+o-80:a=i.top+o-60,window.scrollTo({top:a,behavior:"smooth"}),setTimeout(()=>{n.target.blur()},1e3)}};return R.useEffect(()=>{fetch("https://healthy-management.onrender.com/api/wakeup")},[]),c.jsxs(c.Fragment,{children:[c.jsx(Qm,{handleSetActiveLink:e}),c.jsxs("main",{children:[c.jsx(ub,{}),c.jsx(j1,{}),c.jsx(s1,{}),c.jsx(hb,{}),c.jsx(R2,{}),c.jsx(qj,{}),c.jsx(Fb,{}),c.jsx(Vb,{}),c.jsx(Wb,{}),c.jsx(v2,{}),c.jsx(_1,{}),c.jsx(Nj,{}),c.jsx(D2,{})]}),c.jsx($m,{handleSetActiveLink:e})]})}hl.createRoot(document.getElementById("root")).render(c.jsx(be.StrictMode,{children:c.jsx(eC,{})}));
