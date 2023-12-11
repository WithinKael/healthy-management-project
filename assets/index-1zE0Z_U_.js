function wp(e,t){for(var n=0;n<t.length;n++){const r=t[n];if(typeof r!="string"&&!Array.isArray(r)){for(const i in r)if(i!=="default"&&!(i in e)){const o=Object.getOwnPropertyDescriptor(r,i);o&&Object.defineProperty(e,i,o.get?o:{enumerable:!0,get:()=>r[i]})}}}return Object.freeze(Object.defineProperty(e,Symbol.toStringTag,{value:"Module"}))}(function(){const t=document.createElement("link").relList;if(t&&t.supports&&t.supports("modulepreload"))return;for(const i of document.querySelectorAll('link[rel="modulepreload"]'))r(i);new MutationObserver(i=>{for(const o of i)if(o.type==="childList")for(const l of o.addedNodes)l.tagName==="LINK"&&l.rel==="modulepreload"&&r(l)}).observe(document,{childList:!0,subtree:!0});function n(i){const o={};return i.integrity&&(o.integrity=i.integrity),i.referrerPolicy&&(o.referrerPolicy=i.referrerPolicy),i.crossOrigin==="use-credentials"?o.credentials="include":i.crossOrigin==="anonymous"?o.credentials="omit":o.credentials="same-origin",o}function r(i){if(i.ep)return;i.ep=!0;const o=n(i);fetch(i.href,o)}})();var kp=typeof globalThis<"u"?globalThis:typeof window<"u"?window:typeof global<"u"?global:typeof self<"u"?self:{};function so(e){return e&&e.__esModule&&Object.prototype.hasOwnProperty.call(e,"default")?e.default:e}var Tu={exports:{}},uo={},Ou={exports:{}},H={};/**
 * @license React
 * react.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */var Xr=Symbol.for("react.element"),Sp=Symbol.for("react.portal"),Ep=Symbol.for("react.fragment"),Cp=Symbol.for("react.strict_mode"),_p=Symbol.for("react.profiler"),jp=Symbol.for("react.provider"),Pp=Symbol.for("react.context"),zp=Symbol.for("react.forward_ref"),Tp=Symbol.for("react.suspense"),Op=Symbol.for("react.memo"),bp=Symbol.for("react.lazy"),rs=Symbol.iterator;function Mp(e){return e===null||typeof e!="object"?null:(e=rs&&e[rs]||e["@@iterator"],typeof e=="function"?e:null)}var bu={isMounted:function(){return!1},enqueueForceUpdate:function(){},enqueueReplaceState:function(){},enqueueSetState:function(){}},Mu=Object.assign,Ru={};function Jn(e,t,n){this.props=e,this.context=t,this.refs=Ru,this.updater=n||bu}Jn.prototype.isReactComponent={};Jn.prototype.setState=function(e,t){if(typeof e!="object"&&typeof e!="function"&&e!=null)throw Error("setState(...): takes an object of state variables to update or a function which returns an object of state variables.");this.updater.enqueueSetState(this,e,t,"setState")};Jn.prototype.forceUpdate=function(e){this.updater.enqueueForceUpdate(this,e,"forceUpdate")};function Lu(){}Lu.prototype=Jn.prototype;function oa(e,t,n){this.props=e,this.context=t,this.refs=Ru,this.updater=n||bu}var la=oa.prototype=new Lu;la.constructor=oa;Mu(la,Jn.prototype);la.isPureReactComponent=!0;var is=Array.isArray,Nu=Object.prototype.hasOwnProperty,aa={current:null},Iu={key:!0,ref:!0,__self:!0,__source:!0};function Du(e,t,n){var r,i={},o=null,l=null;if(t!=null)for(r in t.ref!==void 0&&(l=t.ref),t.key!==void 0&&(o=""+t.key),t)Nu.call(t,r)&&!Iu.hasOwnProperty(r)&&(i[r]=t[r]);var s=arguments.length-2;if(s===1)i.children=n;else if(1<s){for(var a=Array(s),c=0;c<s;c++)a[c]=arguments[c+2];i.children=a}if(e&&e.defaultProps)for(r in s=e.defaultProps,s)i[r]===void 0&&(i[r]=s[r]);return{$$typeof:Xr,type:e,key:o,ref:l,props:i,_owner:aa.current}}function Rp(e,t){return{$$typeof:Xr,type:e.type,key:t,ref:e.ref,props:e.props,_owner:e._owner}}function sa(e){return typeof e=="object"&&e!==null&&e.$$typeof===Xr}function Lp(e){var t={"=":"=0",":":"=2"};return"$"+e.replace(/[=:]/g,function(n){return t[n]})}var os=/\/+/g;function bo(e,t){return typeof e=="object"&&e!==null&&e.key!=null?Lp(""+e.key):t.toString(36)}function Si(e,t,n,r,i){var o=typeof e;(o==="undefined"||o==="boolean")&&(e=null);var l=!1;if(e===null)l=!0;else switch(o){case"string":case"number":l=!0;break;case"object":switch(e.$$typeof){case Xr:case Sp:l=!0}}if(l)return l=e,i=i(l),e=r===""?"."+bo(l,0):r,is(i)?(n="",e!=null&&(n=e.replace(os,"$&/")+"/"),Si(i,t,n,"",function(c){return c})):i!=null&&(sa(i)&&(i=Rp(i,n+(!i.key||l&&l.key===i.key?"":(""+i.key).replace(os,"$&/")+"/")+e)),t.push(i)),1;if(l=0,r=r===""?".":r+":",is(e))for(var s=0;s<e.length;s++){o=e[s];var a=r+bo(o,s);l+=Si(o,t,n,a,i)}else if(a=Mp(e),typeof a=="function")for(e=a.call(e),s=0;!(o=e.next()).done;)o=o.value,a=r+bo(o,s++),l+=Si(o,t,n,a,i);else if(o==="object")throw t=String(e),Error("Objects are not valid as a React child (found: "+(t==="[object Object]"?"object with keys {"+Object.keys(e).join(", ")+"}":t)+"). If you meant to render a collection of children, use an array instead.");return l}function ni(e,t,n){if(e==null)return e;var r=[],i=0;return Si(e,r,"","",function(o){return t.call(n,o,i++)}),r}function Np(e){if(e._status===-1){var t=e._result;t=t(),t.then(function(n){(e._status===0||e._status===-1)&&(e._status=1,e._result=n)},function(n){(e._status===0||e._status===-1)&&(e._status=2,e._result=n)}),e._status===-1&&(e._status=0,e._result=t)}if(e._status===1)return e._result.default;throw e._result}var Ne={current:null},Ei={transition:null},Ip={ReactCurrentDispatcher:Ne,ReactCurrentBatchConfig:Ei,ReactCurrentOwner:aa};H.Children={map:ni,forEach:function(e,t,n){ni(e,function(){t.apply(this,arguments)},n)},count:function(e){var t=0;return ni(e,function(){t++}),t},toArray:function(e){return ni(e,function(t){return t})||[]},only:function(e){if(!sa(e))throw Error("React.Children.only expected to receive a single React element child.");return e}};H.Component=Jn;H.Fragment=Ep;H.Profiler=_p;H.PureComponent=oa;H.StrictMode=Cp;H.Suspense=Tp;H.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED=Ip;H.cloneElement=function(e,t,n){if(e==null)throw Error("React.cloneElement(...): The argument must be a React element, but you passed "+e+".");var r=Mu({},e.props),i=e.key,o=e.ref,l=e._owner;if(t!=null){if(t.ref!==void 0&&(o=t.ref,l=aa.current),t.key!==void 0&&(i=""+t.key),e.type&&e.type.defaultProps)var s=e.type.defaultProps;for(a in t)Nu.call(t,a)&&!Iu.hasOwnProperty(a)&&(r[a]=t[a]===void 0&&s!==void 0?s[a]:t[a])}var a=arguments.length-2;if(a===1)r.children=n;else if(1<a){s=Array(a);for(var c=0;c<a;c++)s[c]=arguments[c+2];r.children=s}return{$$typeof:Xr,type:e.type,key:i,ref:o,props:r,_owner:l}};H.createContext=function(e){return e={$$typeof:Pp,_currentValue:e,_currentValue2:e,_threadCount:0,Provider:null,Consumer:null,_defaultValue:null,_globalName:null},e.Provider={$$typeof:jp,_context:e},e.Consumer=e};H.createElement=Du;H.createFactory=function(e){var t=Du.bind(null,e);return t.type=e,t};H.createRef=function(){return{current:null}};H.forwardRef=function(e){return{$$typeof:zp,render:e}};H.isValidElement=sa;H.lazy=function(e){return{$$typeof:bp,_payload:{_status:-1,_result:e},_init:Np}};H.memo=function(e,t){return{$$typeof:Op,type:e,compare:t===void 0?null:t}};H.startTransition=function(e){var t=Ei.transition;Ei.transition={};try{e()}finally{Ei.transition=t}};H.unstable_act=function(){throw Error("act(...) is not supported in production builds of React.")};H.useCallback=function(e,t){return Ne.current.useCallback(e,t)};H.useContext=function(e){return Ne.current.useContext(e)};H.useDebugValue=function(){};H.useDeferredValue=function(e){return Ne.current.useDeferredValue(e)};H.useEffect=function(e,t){return Ne.current.useEffect(e,t)};H.useId=function(){return Ne.current.useId()};H.useImperativeHandle=function(e,t,n){return Ne.current.useImperativeHandle(e,t,n)};H.useInsertionEffect=function(e,t){return Ne.current.useInsertionEffect(e,t)};H.useLayoutEffect=function(e,t){return Ne.current.useLayoutEffect(e,t)};H.useMemo=function(e,t){return Ne.current.useMemo(e,t)};H.useReducer=function(e,t,n){return Ne.current.useReducer(e,t,n)};H.useRef=function(e){return Ne.current.useRef(e)};H.useState=function(e){return Ne.current.useState(e)};H.useSyncExternalStore=function(e,t,n){return Ne.current.useSyncExternalStore(e,t,n)};H.useTransition=function(){return Ne.current.useTransition()};H.version="18.2.0";Ou.exports=H;var Re=Ou.exports;const Au=so(Re),ls=wp({__proto__:null,default:Au},[Re]);/**
 * @license React
 * react-jsx-runtime.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */var Dp=Re,Ap=Symbol.for("react.element"),$p=Symbol.for("react.fragment"),Fp=Object.prototype.hasOwnProperty,Wp=Dp.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED.ReactCurrentOwner,Up={key:!0,ref:!0,__self:!0,__source:!0};function $u(e,t,n){var r,i={},o=null,l=null;n!==void 0&&(o=""+n),t.key!==void 0&&(o=""+t.key),t.ref!==void 0&&(l=t.ref);for(r in t)Fp.call(t,r)&&!Up.hasOwnProperty(r)&&(i[r]=t[r]);if(e&&e.defaultProps)for(r in t=e.defaultProps,t)i[r]===void 0&&(i[r]=t[r]);return{$$typeof:Ap,type:e,key:o,ref:l,props:i,_owner:Wp.current}}uo.Fragment=$p;uo.jsx=$u;uo.jsxs=$u;Tu.exports=uo;var v=Tu.exports,al={},Fu={exports:{}},et={},Wu={exports:{}},Uu={};/**
 * @license React
 * scheduler.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */(function(e){function t(b,I){var $=b.length;b.push(I);e:for(;0<$;){var ne=$-1>>>1,ce=b[ne];if(0<i(ce,I))b[ne]=I,b[$]=ce,$=ne;else break e}}function n(b){return b.length===0?null:b[0]}function r(b){if(b.length===0)return null;var I=b[0],$=b.pop();if($!==I){b[0]=$;e:for(var ne=0,ce=b.length,Dt=ce>>>1;ne<Dt;){var Ae=2*(ne+1)-1,ln=b[Ae],ve=Ae+1,Ye=b[ve];if(0>i(ln,$))ve<ce&&0>i(Ye,ln)?(b[ne]=Ye,b[ve]=$,ne=ve):(b[ne]=ln,b[Ae]=$,ne=Ae);else if(ve<ce&&0>i(Ye,$))b[ne]=Ye,b[ve]=$,ne=ve;else break e}}return I}function i(b,I){var $=b.sortIndex-I.sortIndex;return $!==0?$:b.id-I.id}if(typeof performance=="object"&&typeof performance.now=="function"){var o=performance;e.unstable_now=function(){return o.now()}}else{var l=Date,s=l.now();e.unstable_now=function(){return l.now()-s}}var a=[],c=[],g=1,x=null,m=3,y=!1,f=!1,h=!1,C=typeof setTimeout=="function"?setTimeout:null,d=typeof clearTimeout=="function"?clearTimeout:null,u=typeof setImmediate<"u"?setImmediate:null;typeof navigator<"u"&&navigator.scheduling!==void 0&&navigator.scheduling.isInputPending!==void 0&&navigator.scheduling.isInputPending.bind(navigator.scheduling);function p(b){for(var I=n(c);I!==null;){if(I.callback===null)r(c);else if(I.startTime<=b)r(c),I.sortIndex=I.expirationTime,t(a,I);else break;I=n(c)}}function w(b){if(h=!1,p(b),!f)if(n(a)!==null)f=!0,Qe(E);else{var I=n(c);I!==null&&on(w,I.startTime-b)}}function E(b,I){f=!1,h&&(h=!1,d(z),z=-1),y=!0;var $=m;try{for(p(I),x=n(a);x!==null&&(!(x.expirationTime>I)||b&&!D());){var ne=x.callback;if(typeof ne=="function"){x.callback=null,m=x.priorityLevel;var ce=ne(x.expirationTime<=I);I=e.unstable_now(),typeof ce=="function"?x.callback=ce:x===n(a)&&r(a),p(I)}else r(a);x=n(a)}if(x!==null)var Dt=!0;else{var Ae=n(c);Ae!==null&&on(w,Ae.startTime-I),Dt=!1}return Dt}finally{x=null,m=$,y=!1}}var _=!1,S=null,z=-1,j=5,O=-1;function D(){return!(e.unstable_now()-O<j)}function A(){if(S!==null){var b=e.unstable_now();O=b;var I=!0;try{I=S(!0,b)}finally{I?N():(_=!1,S=null)}}else _=!1}var N;if(typeof u=="function")N=function(){u(A)};else if(typeof MessageChannel<"u"){var me=new MessageChannel,De=me.port2;me.port1.onmessage=A,N=function(){De.postMessage(null)}}else N=function(){C(A,0)};function Qe(b){S=b,_||(_=!0,N())}function on(b,I){z=C(function(){b(e.unstable_now())},I)}e.unstable_IdlePriority=5,e.unstable_ImmediatePriority=1,e.unstable_LowPriority=4,e.unstable_NormalPriority=3,e.unstable_Profiling=null,e.unstable_UserBlockingPriority=2,e.unstable_cancelCallback=function(b){b.callback=null},e.unstable_continueExecution=function(){f||y||(f=!0,Qe(E))},e.unstable_forceFrameRate=function(b){0>b||125<b?console.error("forceFrameRate takes a positive int between 0 and 125, forcing frame rates higher than 125 fps is not supported"):j=0<b?Math.floor(1e3/b):5},e.unstable_getCurrentPriorityLevel=function(){return m},e.unstable_getFirstCallbackNode=function(){return n(a)},e.unstable_next=function(b){switch(m){case 1:case 2:case 3:var I=3;break;default:I=m}var $=m;m=I;try{return b()}finally{m=$}},e.unstable_pauseExecution=function(){},e.unstable_requestPaint=function(){},e.unstable_runWithPriority=function(b,I){switch(b){case 1:case 2:case 3:case 4:case 5:break;default:b=3}var $=m;m=b;try{return I()}finally{m=$}},e.unstable_scheduleCallback=function(b,I,$){var ne=e.unstable_now();switch(typeof $=="object"&&$!==null?($=$.delay,$=typeof $=="number"&&0<$?ne+$:ne):$=ne,b){case 1:var ce=-1;break;case 2:ce=250;break;case 5:ce=1073741823;break;case 4:ce=1e4;break;default:ce=5e3}return ce=$+ce,b={id:g++,callback:I,priorityLevel:b,startTime:$,expirationTime:ce,sortIndex:-1},$>ne?(b.sortIndex=$,t(c,b),n(a)===null&&b===n(c)&&(h?(d(z),z=-1):h=!0,on(w,$-ne))):(b.sortIndex=ce,t(a,b),f||y||(f=!0,Qe(E))),b},e.unstable_shouldYield=D,e.unstable_wrapCallback=function(b){var I=m;return function(){var $=m;m=I;try{return b.apply(this,arguments)}finally{m=$}}}})(Uu);Wu.exports=Uu;var Vp=Wu.exports;/**
 * @license React
 * react-dom.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */var Vu=Re,Je=Vp;function P(e){for(var t="https://reactjs.org/docs/error-decoder.html?invariant="+e,n=1;n<arguments.length;n++)t+="&args[]="+encodeURIComponent(arguments[n]);return"Minified React error #"+e+"; visit "+t+" for the full message or use the non-minified dev environment for full errors and additional helpful warnings."}var Hu=new Set,zr={};function yn(e,t){Hn(e,t),Hn(e+"Capture",t)}function Hn(e,t){for(zr[e]=t,e=0;e<t.length;e++)Hu.add(t[e])}var Mt=!(typeof window>"u"||typeof window.document>"u"||typeof window.document.createElement>"u"),sl=Object.prototype.hasOwnProperty,Hp=/^[:A-Z_a-z\u00C0-\u00D6\u00D8-\u00F6\u00F8-\u02FF\u0370-\u037D\u037F-\u1FFF\u200C-\u200D\u2070-\u218F\u2C00-\u2FEF\u3001-\uD7FF\uF900-\uFDCF\uFDF0-\uFFFD][:A-Z_a-z\u00C0-\u00D6\u00D8-\u00F6\u00F8-\u02FF\u0370-\u037D\u037F-\u1FFF\u200C-\u200D\u2070-\u218F\u2C00-\u2FEF\u3001-\uD7FF\uF900-\uFDCF\uFDF0-\uFFFD\-.0-9\u00B7\u0300-\u036F\u203F-\u2040]*$/,as={},ss={};function Bp(e){return sl.call(ss,e)?!0:sl.call(as,e)?!1:Hp.test(e)?ss[e]=!0:(as[e]=!0,!1)}function Qp(e,t,n,r){if(n!==null&&n.type===0)return!1;switch(typeof t){case"function":case"symbol":return!0;case"boolean":return r?!1:n!==null?!n.acceptsBooleans:(e=e.toLowerCase().slice(0,5),e!=="data-"&&e!=="aria-");default:return!1}}function Yp(e,t,n,r){if(t===null||typeof t>"u"||Qp(e,t,n,r))return!0;if(r)return!1;if(n!==null)switch(n.type){case 3:return!t;case 4:return t===!1;case 5:return isNaN(t);case 6:return isNaN(t)||1>t}return!1}function Ie(e,t,n,r,i,o,l){this.acceptsBooleans=t===2||t===3||t===4,this.attributeName=r,this.attributeNamespace=i,this.mustUseProperty=n,this.propertyName=e,this.type=t,this.sanitizeURL=o,this.removeEmptyString=l}var _e={};"children dangerouslySetInnerHTML defaultValue defaultChecked innerHTML suppressContentEditableWarning suppressHydrationWarning style".split(" ").forEach(function(e){_e[e]=new Ie(e,0,!1,e,null,!1,!1)});[["acceptCharset","accept-charset"],["className","class"],["htmlFor","for"],["httpEquiv","http-equiv"]].forEach(function(e){var t=e[0];_e[t]=new Ie(t,1,!1,e[1],null,!1,!1)});["contentEditable","draggable","spellCheck","value"].forEach(function(e){_e[e]=new Ie(e,2,!1,e.toLowerCase(),null,!1,!1)});["autoReverse","externalResourcesRequired","focusable","preserveAlpha"].forEach(function(e){_e[e]=new Ie(e,2,!1,e,null,!1,!1)});"allowFullScreen async autoFocus autoPlay controls default defer disabled disablePictureInPicture disableRemotePlayback formNoValidate hidden loop noModule noValidate open playsInline readOnly required reversed scoped seamless itemScope".split(" ").forEach(function(e){_e[e]=new Ie(e,3,!1,e.toLowerCase(),null,!1,!1)});["checked","multiple","muted","selected"].forEach(function(e){_e[e]=new Ie(e,3,!0,e,null,!1,!1)});["capture","download"].forEach(function(e){_e[e]=new Ie(e,4,!1,e,null,!1,!1)});["cols","rows","size","span"].forEach(function(e){_e[e]=new Ie(e,6,!1,e,null,!1,!1)});["rowSpan","start"].forEach(function(e){_e[e]=new Ie(e,5,!1,e.toLowerCase(),null,!1,!1)});var ua=/[\-:]([a-z])/g;function ca(e){return e[1].toUpperCase()}"accent-height alignment-baseline arabic-form baseline-shift cap-height clip-path clip-rule color-interpolation color-interpolation-filters color-profile color-rendering dominant-baseline enable-background fill-opacity fill-rule flood-color flood-opacity font-family font-size font-size-adjust font-stretch font-style font-variant font-weight glyph-name glyph-orientation-horizontal glyph-orientation-vertical horiz-adv-x horiz-origin-x image-rendering letter-spacing lighting-color marker-end marker-mid marker-start overline-position overline-thickness paint-order panose-1 pointer-events rendering-intent shape-rendering stop-color stop-opacity strikethrough-position strikethrough-thickness stroke-dasharray stroke-dashoffset stroke-linecap stroke-linejoin stroke-miterlimit stroke-opacity stroke-width text-anchor text-decoration text-rendering underline-position underline-thickness unicode-bidi unicode-range units-per-em v-alphabetic v-hanging v-ideographic v-mathematical vector-effect vert-adv-y vert-origin-x vert-origin-y word-spacing writing-mode xmlns:xlink x-height".split(" ").forEach(function(e){var t=e.replace(ua,ca);_e[t]=new Ie(t,1,!1,e,null,!1,!1)});"xlink:actuate xlink:arcrole xlink:role xlink:show xlink:title xlink:type".split(" ").forEach(function(e){var t=e.replace(ua,ca);_e[t]=new Ie(t,1,!1,e,"http://www.w3.org/1999/xlink",!1,!1)});["xml:base","xml:lang","xml:space"].forEach(function(e){var t=e.replace(ua,ca);_e[t]=new Ie(t,1,!1,e,"http://www.w3.org/XML/1998/namespace",!1,!1)});["tabIndex","crossOrigin"].forEach(function(e){_e[e]=new Ie(e,1,!1,e.toLowerCase(),null,!1,!1)});_e.xlinkHref=new Ie("xlinkHref",1,!1,"xlink:href","http://www.w3.org/1999/xlink",!0,!1);["src","href","action","formAction"].forEach(function(e){_e[e]=new Ie(e,1,!1,e.toLowerCase(),null,!0,!0)});function da(e,t,n,r){var i=_e.hasOwnProperty(t)?_e[t]:null;(i!==null?i.type!==0:r||!(2<t.length)||t[0]!=="o"&&t[0]!=="O"||t[1]!=="n"&&t[1]!=="N")&&(Yp(t,n,i,r)&&(n=null),r||i===null?Bp(t)&&(n===null?e.removeAttribute(t):e.setAttribute(t,""+n)):i.mustUseProperty?e[i.propertyName]=n===null?i.type===3?!1:"":n:(t=i.attributeName,r=i.attributeNamespace,n===null?e.removeAttribute(t):(i=i.type,n=i===3||i===4&&n===!0?"":""+n,r?e.setAttributeNS(r,t,n):e.setAttribute(t,n))))}var It=Vu.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED,ri=Symbol.for("react.element"),_n=Symbol.for("react.portal"),jn=Symbol.for("react.fragment"),pa=Symbol.for("react.strict_mode"),ul=Symbol.for("react.profiler"),Bu=Symbol.for("react.provider"),Qu=Symbol.for("react.context"),fa=Symbol.for("react.forward_ref"),cl=Symbol.for("react.suspense"),dl=Symbol.for("react.suspense_list"),ha=Symbol.for("react.memo"),$t=Symbol.for("react.lazy"),Yu=Symbol.for("react.offscreen"),us=Symbol.iterator;function nr(e){return e===null||typeof e!="object"?null:(e=us&&e[us]||e["@@iterator"],typeof e=="function"?e:null)}var ue=Object.assign,Mo;function fr(e){if(Mo===void 0)try{throw Error()}catch(n){var t=n.stack.trim().match(/\n( *(at )?)/);Mo=t&&t[1]||""}return`
`+Mo+e}var Ro=!1;function Lo(e,t){if(!e||Ro)return"";Ro=!0;var n=Error.prepareStackTrace;Error.prepareStackTrace=void 0;try{if(t)if(t=function(){throw Error()},Object.defineProperty(t.prototype,"props",{set:function(){throw Error()}}),typeof Reflect=="object"&&Reflect.construct){try{Reflect.construct(t,[])}catch(c){var r=c}Reflect.construct(e,[],t)}else{try{t.call()}catch(c){r=c}e.call(t.prototype)}else{try{throw Error()}catch(c){r=c}e()}}catch(c){if(c&&r&&typeof c.stack=="string"){for(var i=c.stack.split(`
`),o=r.stack.split(`
`),l=i.length-1,s=o.length-1;1<=l&&0<=s&&i[l]!==o[s];)s--;for(;1<=l&&0<=s;l--,s--)if(i[l]!==o[s]){if(l!==1||s!==1)do if(l--,s--,0>s||i[l]!==o[s]){var a=`
`+i[l].replace(" at new "," at ");return e.displayName&&a.includes("<anonymous>")&&(a=a.replace("<anonymous>",e.displayName)),a}while(1<=l&&0<=s);break}}}finally{Ro=!1,Error.prepareStackTrace=n}return(e=e?e.displayName||e.name:"")?fr(e):""}function Kp(e){switch(e.tag){case 5:return fr(e.type);case 16:return fr("Lazy");case 13:return fr("Suspense");case 19:return fr("SuspenseList");case 0:case 2:case 15:return e=Lo(e.type,!1),e;case 11:return e=Lo(e.type.render,!1),e;case 1:return e=Lo(e.type,!0),e;default:return""}}function pl(e){if(e==null)return null;if(typeof e=="function")return e.displayName||e.name||null;if(typeof e=="string")return e;switch(e){case jn:return"Fragment";case _n:return"Portal";case ul:return"Profiler";case pa:return"StrictMode";case cl:return"Suspense";case dl:return"SuspenseList"}if(typeof e=="object")switch(e.$$typeof){case Qu:return(e.displayName||"Context")+".Consumer";case Bu:return(e._context.displayName||"Context")+".Provider";case fa:var t=e.render;return e=e.displayName,e||(e=t.displayName||t.name||"",e=e!==""?"ForwardRef("+e+")":"ForwardRef"),e;case ha:return t=e.displayName||null,t!==null?t:pl(e.type)||"Memo";case $t:t=e._payload,e=e._init;try{return pl(e(t))}catch{}}return null}function Xp(e){var t=e.type;switch(e.tag){case 24:return"Cache";case 9:return(t.displayName||"Context")+".Consumer";case 10:return(t._context.displayName||"Context")+".Provider";case 18:return"DehydratedFragment";case 11:return e=t.render,e=e.displayName||e.name||"",t.displayName||(e!==""?"ForwardRef("+e+")":"ForwardRef");case 7:return"Fragment";case 5:return t;case 4:return"Portal";case 3:return"Root";case 6:return"Text";case 16:return pl(t);case 8:return t===pa?"StrictMode":"Mode";case 22:return"Offscreen";case 12:return"Profiler";case 21:return"Scope";case 13:return"Suspense";case 19:return"SuspenseList";case 25:return"TracingMarker";case 1:case 0:case 17:case 2:case 14:case 15:if(typeof t=="function")return t.displayName||t.name||null;if(typeof t=="string")return t}return null}function qt(e){switch(typeof e){case"boolean":case"number":case"string":case"undefined":return e;case"object":return e;default:return""}}function Ku(e){var t=e.type;return(e=e.nodeName)&&e.toLowerCase()==="input"&&(t==="checkbox"||t==="radio")}function Gp(e){var t=Ku(e)?"checked":"value",n=Object.getOwnPropertyDescriptor(e.constructor.prototype,t),r=""+e[t];if(!e.hasOwnProperty(t)&&typeof n<"u"&&typeof n.get=="function"&&typeof n.set=="function"){var i=n.get,o=n.set;return Object.defineProperty(e,t,{configurable:!0,get:function(){return i.call(this)},set:function(l){r=""+l,o.call(this,l)}}),Object.defineProperty(e,t,{enumerable:n.enumerable}),{getValue:function(){return r},setValue:function(l){r=""+l},stopTracking:function(){e._valueTracker=null,delete e[t]}}}}function ii(e){e._valueTracker||(e._valueTracker=Gp(e))}function Xu(e){if(!e)return!1;var t=e._valueTracker;if(!t)return!0;var n=t.getValue(),r="";return e&&(r=Ku(e)?e.checked?"true":"false":e.value),e=r,e!==n?(t.setValue(e),!0):!1}function Di(e){if(e=e||(typeof document<"u"?document:void 0),typeof e>"u")return null;try{return e.activeElement||e.body}catch{return e.body}}function fl(e,t){var n=t.checked;return ue({},t,{defaultChecked:void 0,defaultValue:void 0,value:void 0,checked:n??e._wrapperState.initialChecked})}function cs(e,t){var n=t.defaultValue==null?"":t.defaultValue,r=t.checked!=null?t.checked:t.defaultChecked;n=qt(t.value!=null?t.value:n),e._wrapperState={initialChecked:r,initialValue:n,controlled:t.type==="checkbox"||t.type==="radio"?t.checked!=null:t.value!=null}}function Gu(e,t){t=t.checked,t!=null&&da(e,"checked",t,!1)}function hl(e,t){Gu(e,t);var n=qt(t.value),r=t.type;if(n!=null)r==="number"?(n===0&&e.value===""||e.value!=n)&&(e.value=""+n):e.value!==""+n&&(e.value=""+n);else if(r==="submit"||r==="reset"){e.removeAttribute("value");return}t.hasOwnProperty("value")?ml(e,t.type,n):t.hasOwnProperty("defaultValue")&&ml(e,t.type,qt(t.defaultValue)),t.checked==null&&t.defaultChecked!=null&&(e.defaultChecked=!!t.defaultChecked)}function ds(e,t,n){if(t.hasOwnProperty("value")||t.hasOwnProperty("defaultValue")){var r=t.type;if(!(r!=="submit"&&r!=="reset"||t.value!==void 0&&t.value!==null))return;t=""+e._wrapperState.initialValue,n||t===e.value||(e.value=t),e.defaultValue=t}n=e.name,n!==""&&(e.name=""),e.defaultChecked=!!e._wrapperState.initialChecked,n!==""&&(e.name=n)}function ml(e,t,n){(t!=="number"||Di(e.ownerDocument)!==e)&&(n==null?e.defaultValue=""+e._wrapperState.initialValue:e.defaultValue!==""+n&&(e.defaultValue=""+n))}var hr=Array.isArray;function Dn(e,t,n,r){if(e=e.options,t){t={};for(var i=0;i<n.length;i++)t["$"+n[i]]=!0;for(n=0;n<e.length;n++)i=t.hasOwnProperty("$"+e[n].value),e[n].selected!==i&&(e[n].selected=i),i&&r&&(e[n].defaultSelected=!0)}else{for(n=""+qt(n),t=null,i=0;i<e.length;i++){if(e[i].value===n){e[i].selected=!0,r&&(e[i].defaultSelected=!0);return}t!==null||e[i].disabled||(t=e[i])}t!==null&&(t.selected=!0)}}function gl(e,t){if(t.dangerouslySetInnerHTML!=null)throw Error(P(91));return ue({},t,{value:void 0,defaultValue:void 0,children:""+e._wrapperState.initialValue})}function ps(e,t){var n=t.value;if(n==null){if(n=t.children,t=t.defaultValue,n!=null){if(t!=null)throw Error(P(92));if(hr(n)){if(1<n.length)throw Error(P(93));n=n[0]}t=n}t==null&&(t=""),n=t}e._wrapperState={initialValue:qt(n)}}function Zu(e,t){var n=qt(t.value),r=qt(t.defaultValue);n!=null&&(n=""+n,n!==e.value&&(e.value=n),t.defaultValue==null&&e.defaultValue!==n&&(e.defaultValue=n)),r!=null&&(e.defaultValue=""+r)}function fs(e){var t=e.textContent;t===e._wrapperState.initialValue&&t!==""&&t!==null&&(e.value=t)}function Ju(e){switch(e){case"svg":return"http://www.w3.org/2000/svg";case"math":return"http://www.w3.org/1998/Math/MathML";default:return"http://www.w3.org/1999/xhtml"}}function xl(e,t){return e==null||e==="http://www.w3.org/1999/xhtml"?Ju(t):e==="http://www.w3.org/2000/svg"&&t==="foreignObject"?"http://www.w3.org/1999/xhtml":e}var oi,qu=function(e){return typeof MSApp<"u"&&MSApp.execUnsafeLocalFunction?function(t,n,r,i){MSApp.execUnsafeLocalFunction(function(){return e(t,n,r,i)})}:e}(function(e,t){if(e.namespaceURI!=="http://www.w3.org/2000/svg"||"innerHTML"in e)e.innerHTML=t;else{for(oi=oi||document.createElement("div"),oi.innerHTML="<svg>"+t.valueOf().toString()+"</svg>",t=oi.firstChild;e.firstChild;)e.removeChild(e.firstChild);for(;t.firstChild;)e.appendChild(t.firstChild)}});function Tr(e,t){if(t){var n=e.firstChild;if(n&&n===e.lastChild&&n.nodeType===3){n.nodeValue=t;return}}e.textContent=t}var vr={animationIterationCount:!0,aspectRatio:!0,borderImageOutset:!0,borderImageSlice:!0,borderImageWidth:!0,boxFlex:!0,boxFlexGroup:!0,boxOrdinalGroup:!0,columnCount:!0,columns:!0,flex:!0,flexGrow:!0,flexPositive:!0,flexShrink:!0,flexNegative:!0,flexOrder:!0,gridArea:!0,gridRow:!0,gridRowEnd:!0,gridRowSpan:!0,gridRowStart:!0,gridColumn:!0,gridColumnEnd:!0,gridColumnSpan:!0,gridColumnStart:!0,fontWeight:!0,lineClamp:!0,lineHeight:!0,opacity:!0,order:!0,orphans:!0,tabSize:!0,widows:!0,zIndex:!0,zoom:!0,fillOpacity:!0,floodOpacity:!0,stopOpacity:!0,strokeDasharray:!0,strokeDashoffset:!0,strokeMiterlimit:!0,strokeOpacity:!0,strokeWidth:!0},Zp=["Webkit","ms","Moz","O"];Object.keys(vr).forEach(function(e){Zp.forEach(function(t){t=t+e.charAt(0).toUpperCase()+e.substring(1),vr[t]=vr[e]})});function ec(e,t,n){return t==null||typeof t=="boolean"||t===""?"":n||typeof t!="number"||t===0||vr.hasOwnProperty(e)&&vr[e]?(""+t).trim():t+"px"}function tc(e,t){e=e.style;for(var n in t)if(t.hasOwnProperty(n)){var r=n.indexOf("--")===0,i=ec(n,t[n],r);n==="float"&&(n="cssFloat"),r?e.setProperty(n,i):e[n]=i}}var Jp=ue({menuitem:!0},{area:!0,base:!0,br:!0,col:!0,embed:!0,hr:!0,img:!0,input:!0,keygen:!0,link:!0,meta:!0,param:!0,source:!0,track:!0,wbr:!0});function vl(e,t){if(t){if(Jp[e]&&(t.children!=null||t.dangerouslySetInnerHTML!=null))throw Error(P(137,e));if(t.dangerouslySetInnerHTML!=null){if(t.children!=null)throw Error(P(60));if(typeof t.dangerouslySetInnerHTML!="object"||!("__html"in t.dangerouslySetInnerHTML))throw Error(P(61))}if(t.style!=null&&typeof t.style!="object")throw Error(P(62))}}function yl(e,t){if(e.indexOf("-")===-1)return typeof t.is=="string";switch(e){case"annotation-xml":case"color-profile":case"font-face":case"font-face-src":case"font-face-uri":case"font-face-format":case"font-face-name":case"missing-glyph":return!1;default:return!0}}var wl=null;function ma(e){return e=e.target||e.srcElement||window,e.correspondingUseElement&&(e=e.correspondingUseElement),e.nodeType===3?e.parentNode:e}var kl=null,An=null,$n=null;function hs(e){if(e=Jr(e)){if(typeof kl!="function")throw Error(P(280));var t=e.stateNode;t&&(t=mo(t),kl(e.stateNode,e.type,t))}}function nc(e){An?$n?$n.push(e):$n=[e]:An=e}function rc(){if(An){var e=An,t=$n;if($n=An=null,hs(e),t)for(e=0;e<t.length;e++)hs(t[e])}}function ic(e,t){return e(t)}function oc(){}var No=!1;function lc(e,t,n){if(No)return e(t,n);No=!0;try{return ic(e,t,n)}finally{No=!1,(An!==null||$n!==null)&&(oc(),rc())}}function Or(e,t){var n=e.stateNode;if(n===null)return null;var r=mo(n);if(r===null)return null;n=r[t];e:switch(t){case"onClick":case"onClickCapture":case"onDoubleClick":case"onDoubleClickCapture":case"onMouseDown":case"onMouseDownCapture":case"onMouseMove":case"onMouseMoveCapture":case"onMouseUp":case"onMouseUpCapture":case"onMouseEnter":(r=!r.disabled)||(e=e.type,r=!(e==="button"||e==="input"||e==="select"||e==="textarea")),e=!r;break e;default:e=!1}if(e)return null;if(n&&typeof n!="function")throw Error(P(231,t,typeof n));return n}var Sl=!1;if(Mt)try{var rr={};Object.defineProperty(rr,"passive",{get:function(){Sl=!0}}),window.addEventListener("test",rr,rr),window.removeEventListener("test",rr,rr)}catch{Sl=!1}function qp(e,t,n,r,i,o,l,s,a){var c=Array.prototype.slice.call(arguments,3);try{t.apply(n,c)}catch(g){this.onError(g)}}var yr=!1,Ai=null,$i=!1,El=null,ef={onError:function(e){yr=!0,Ai=e}};function tf(e,t,n,r,i,o,l,s,a){yr=!1,Ai=null,qp.apply(ef,arguments)}function nf(e,t,n,r,i,o,l,s,a){if(tf.apply(this,arguments),yr){if(yr){var c=Ai;yr=!1,Ai=null}else throw Error(P(198));$i||($i=!0,El=c)}}function wn(e){var t=e,n=e;if(e.alternate)for(;t.return;)t=t.return;else{e=t;do t=e,t.flags&4098&&(n=t.return),e=t.return;while(e)}return t.tag===3?n:null}function ac(e){if(e.tag===13){var t=e.memoizedState;if(t===null&&(e=e.alternate,e!==null&&(t=e.memoizedState)),t!==null)return t.dehydrated}return null}function ms(e){if(wn(e)!==e)throw Error(P(188))}function rf(e){var t=e.alternate;if(!t){if(t=wn(e),t===null)throw Error(P(188));return t!==e?null:e}for(var n=e,r=t;;){var i=n.return;if(i===null)break;var o=i.alternate;if(o===null){if(r=i.return,r!==null){n=r;continue}break}if(i.child===o.child){for(o=i.child;o;){if(o===n)return ms(i),e;if(o===r)return ms(i),t;o=o.sibling}throw Error(P(188))}if(n.return!==r.return)n=i,r=o;else{for(var l=!1,s=i.child;s;){if(s===n){l=!0,n=i,r=o;break}if(s===r){l=!0,r=i,n=o;break}s=s.sibling}if(!l){for(s=o.child;s;){if(s===n){l=!0,n=o,r=i;break}if(s===r){l=!0,r=o,n=i;break}s=s.sibling}if(!l)throw Error(P(189))}}if(n.alternate!==r)throw Error(P(190))}if(n.tag!==3)throw Error(P(188));return n.stateNode.current===n?e:t}function sc(e){return e=rf(e),e!==null?uc(e):null}function uc(e){if(e.tag===5||e.tag===6)return e;for(e=e.child;e!==null;){var t=uc(e);if(t!==null)return t;e=e.sibling}return null}var cc=Je.unstable_scheduleCallback,gs=Je.unstable_cancelCallback,of=Je.unstable_shouldYield,lf=Je.unstable_requestPaint,pe=Je.unstable_now,af=Je.unstable_getCurrentPriorityLevel,ga=Je.unstable_ImmediatePriority,dc=Je.unstable_UserBlockingPriority,Fi=Je.unstable_NormalPriority,sf=Je.unstable_LowPriority,pc=Je.unstable_IdlePriority,co=null,Et=null;function uf(e){if(Et&&typeof Et.onCommitFiberRoot=="function")try{Et.onCommitFiberRoot(co,e,void 0,(e.current.flags&128)===128)}catch{}}var mt=Math.clz32?Math.clz32:pf,cf=Math.log,df=Math.LN2;function pf(e){return e>>>=0,e===0?32:31-(cf(e)/df|0)|0}var li=64,ai=4194304;function mr(e){switch(e&-e){case 1:return 1;case 2:return 2;case 4:return 4;case 8:return 8;case 16:return 16;case 32:return 32;case 64:case 128:case 256:case 512:case 1024:case 2048:case 4096:case 8192:case 16384:case 32768:case 65536:case 131072:case 262144:case 524288:case 1048576:case 2097152:return e&4194240;case 4194304:case 8388608:case 16777216:case 33554432:case 67108864:return e&130023424;case 134217728:return 134217728;case 268435456:return 268435456;case 536870912:return 536870912;case 1073741824:return 1073741824;default:return e}}function Wi(e,t){var n=e.pendingLanes;if(n===0)return 0;var r=0,i=e.suspendedLanes,o=e.pingedLanes,l=n&268435455;if(l!==0){var s=l&~i;s!==0?r=mr(s):(o&=l,o!==0&&(r=mr(o)))}else l=n&~i,l!==0?r=mr(l):o!==0&&(r=mr(o));if(r===0)return 0;if(t!==0&&t!==r&&!(t&i)&&(i=r&-r,o=t&-t,i>=o||i===16&&(o&4194240)!==0))return t;if(r&4&&(r|=n&16),t=e.entangledLanes,t!==0)for(e=e.entanglements,t&=r;0<t;)n=31-mt(t),i=1<<n,r|=e[n],t&=~i;return r}function ff(e,t){switch(e){case 1:case 2:case 4:return t+250;case 8:case 16:case 32:case 64:case 128:case 256:case 512:case 1024:case 2048:case 4096:case 8192:case 16384:case 32768:case 65536:case 131072:case 262144:case 524288:case 1048576:case 2097152:return t+5e3;case 4194304:case 8388608:case 16777216:case 33554432:case 67108864:return-1;case 134217728:case 268435456:case 536870912:case 1073741824:return-1;default:return-1}}function hf(e,t){for(var n=e.suspendedLanes,r=e.pingedLanes,i=e.expirationTimes,o=e.pendingLanes;0<o;){var l=31-mt(o),s=1<<l,a=i[l];a===-1?(!(s&n)||s&r)&&(i[l]=ff(s,t)):a<=t&&(e.expiredLanes|=s),o&=~s}}function Cl(e){return e=e.pendingLanes&-1073741825,e!==0?e:e&1073741824?1073741824:0}function fc(){var e=li;return li<<=1,!(li&4194240)&&(li=64),e}function Io(e){for(var t=[],n=0;31>n;n++)t.push(e);return t}function Gr(e,t,n){e.pendingLanes|=t,t!==536870912&&(e.suspendedLanes=0,e.pingedLanes=0),e=e.eventTimes,t=31-mt(t),e[t]=n}function mf(e,t){var n=e.pendingLanes&~t;e.pendingLanes=t,e.suspendedLanes=0,e.pingedLanes=0,e.expiredLanes&=t,e.mutableReadLanes&=t,e.entangledLanes&=t,t=e.entanglements;var r=e.eventTimes;for(e=e.expirationTimes;0<n;){var i=31-mt(n),o=1<<i;t[i]=0,r[i]=-1,e[i]=-1,n&=~o}}function xa(e,t){var n=e.entangledLanes|=t;for(e=e.entanglements;n;){var r=31-mt(n),i=1<<r;i&t|e[r]&t&&(e[r]|=t),n&=~i}}var ee=0;function hc(e){return e&=-e,1<e?4<e?e&268435455?16:536870912:4:1}var mc,va,gc,xc,vc,_l=!1,si=[],Bt=null,Qt=null,Yt=null,br=new Map,Mr=new Map,Wt=[],gf="mousedown mouseup touchcancel touchend touchstart auxclick dblclick pointercancel pointerdown pointerup dragend dragstart drop compositionend compositionstart keydown keypress keyup input textInput copy cut paste click change contextmenu reset submit".split(" ");function xs(e,t){switch(e){case"focusin":case"focusout":Bt=null;break;case"dragenter":case"dragleave":Qt=null;break;case"mouseover":case"mouseout":Yt=null;break;case"pointerover":case"pointerout":br.delete(t.pointerId);break;case"gotpointercapture":case"lostpointercapture":Mr.delete(t.pointerId)}}function ir(e,t,n,r,i,o){return e===null||e.nativeEvent!==o?(e={blockedOn:t,domEventName:n,eventSystemFlags:r,nativeEvent:o,targetContainers:[i]},t!==null&&(t=Jr(t),t!==null&&va(t)),e):(e.eventSystemFlags|=r,t=e.targetContainers,i!==null&&t.indexOf(i)===-1&&t.push(i),e)}function xf(e,t,n,r,i){switch(t){case"focusin":return Bt=ir(Bt,e,t,n,r,i),!0;case"dragenter":return Qt=ir(Qt,e,t,n,r,i),!0;case"mouseover":return Yt=ir(Yt,e,t,n,r,i),!0;case"pointerover":var o=i.pointerId;return br.set(o,ir(br.get(o)||null,e,t,n,r,i)),!0;case"gotpointercapture":return o=i.pointerId,Mr.set(o,ir(Mr.get(o)||null,e,t,n,r,i)),!0}return!1}function yc(e){var t=un(e.target);if(t!==null){var n=wn(t);if(n!==null){if(t=n.tag,t===13){if(t=ac(n),t!==null){e.blockedOn=t,vc(e.priority,function(){gc(n)});return}}else if(t===3&&n.stateNode.current.memoizedState.isDehydrated){e.blockedOn=n.tag===3?n.stateNode.containerInfo:null;return}}}e.blockedOn=null}function Ci(e){if(e.blockedOn!==null)return!1;for(var t=e.targetContainers;0<t.length;){var n=jl(e.domEventName,e.eventSystemFlags,t[0],e.nativeEvent);if(n===null){n=e.nativeEvent;var r=new n.constructor(n.type,n);wl=r,n.target.dispatchEvent(r),wl=null}else return t=Jr(n),t!==null&&va(t),e.blockedOn=n,!1;t.shift()}return!0}function vs(e,t,n){Ci(e)&&n.delete(t)}function vf(){_l=!1,Bt!==null&&Ci(Bt)&&(Bt=null),Qt!==null&&Ci(Qt)&&(Qt=null),Yt!==null&&Ci(Yt)&&(Yt=null),br.forEach(vs),Mr.forEach(vs)}function or(e,t){e.blockedOn===t&&(e.blockedOn=null,_l||(_l=!0,Je.unstable_scheduleCallback(Je.unstable_NormalPriority,vf)))}function Rr(e){function t(i){return or(i,e)}if(0<si.length){or(si[0],e);for(var n=1;n<si.length;n++){var r=si[n];r.blockedOn===e&&(r.blockedOn=null)}}for(Bt!==null&&or(Bt,e),Qt!==null&&or(Qt,e),Yt!==null&&or(Yt,e),br.forEach(t),Mr.forEach(t),n=0;n<Wt.length;n++)r=Wt[n],r.blockedOn===e&&(r.blockedOn=null);for(;0<Wt.length&&(n=Wt[0],n.blockedOn===null);)yc(n),n.blockedOn===null&&Wt.shift()}var Fn=It.ReactCurrentBatchConfig,Ui=!0;function yf(e,t,n,r){var i=ee,o=Fn.transition;Fn.transition=null;try{ee=1,ya(e,t,n,r)}finally{ee=i,Fn.transition=o}}function wf(e,t,n,r){var i=ee,o=Fn.transition;Fn.transition=null;try{ee=4,ya(e,t,n,r)}finally{ee=i,Fn.transition=o}}function ya(e,t,n,r){if(Ui){var i=jl(e,t,n,r);if(i===null)Qo(e,t,r,Vi,n),xs(e,r);else if(xf(i,e,t,n,r))r.stopPropagation();else if(xs(e,r),t&4&&-1<gf.indexOf(e)){for(;i!==null;){var o=Jr(i);if(o!==null&&mc(o),o=jl(e,t,n,r),o===null&&Qo(e,t,r,Vi,n),o===i)break;i=o}i!==null&&r.stopPropagation()}else Qo(e,t,r,null,n)}}var Vi=null;function jl(e,t,n,r){if(Vi=null,e=ma(r),e=un(e),e!==null)if(t=wn(e),t===null)e=null;else if(n=t.tag,n===13){if(e=ac(t),e!==null)return e;e=null}else if(n===3){if(t.stateNode.current.memoizedState.isDehydrated)return t.tag===3?t.stateNode.containerInfo:null;e=null}else t!==e&&(e=null);return Vi=e,null}function wc(e){switch(e){case"cancel":case"click":case"close":case"contextmenu":case"copy":case"cut":case"auxclick":case"dblclick":case"dragend":case"dragstart":case"drop":case"focusin":case"focusout":case"input":case"invalid":case"keydown":case"keypress":case"keyup":case"mousedown":case"mouseup":case"paste":case"pause":case"play":case"pointercancel":case"pointerdown":case"pointerup":case"ratechange":case"reset":case"resize":case"seeked":case"submit":case"touchcancel":case"touchend":case"touchstart":case"volumechange":case"change":case"selectionchange":case"textInput":case"compositionstart":case"compositionend":case"compositionupdate":case"beforeblur":case"afterblur":case"beforeinput":case"blur":case"fullscreenchange":case"focus":case"hashchange":case"popstate":case"select":case"selectstart":return 1;case"drag":case"dragenter":case"dragexit":case"dragleave":case"dragover":case"mousemove":case"mouseout":case"mouseover":case"pointermove":case"pointerout":case"pointerover":case"scroll":case"toggle":case"touchmove":case"wheel":case"mouseenter":case"mouseleave":case"pointerenter":case"pointerleave":return 4;case"message":switch(af()){case ga:return 1;case dc:return 4;case Fi:case sf:return 16;case pc:return 536870912;default:return 16}default:return 16}}var Vt=null,wa=null,_i=null;function kc(){if(_i)return _i;var e,t=wa,n=t.length,r,i="value"in Vt?Vt.value:Vt.textContent,o=i.length;for(e=0;e<n&&t[e]===i[e];e++);var l=n-e;for(r=1;r<=l&&t[n-r]===i[o-r];r++);return _i=i.slice(e,1<r?1-r:void 0)}function ji(e){var t=e.keyCode;return"charCode"in e?(e=e.charCode,e===0&&t===13&&(e=13)):e=t,e===10&&(e=13),32<=e||e===13?e:0}function ui(){return!0}function ys(){return!1}function tt(e){function t(n,r,i,o,l){this._reactName=n,this._targetInst=i,this.type=r,this.nativeEvent=o,this.target=l,this.currentTarget=null;for(var s in e)e.hasOwnProperty(s)&&(n=e[s],this[s]=n?n(o):o[s]);return this.isDefaultPrevented=(o.defaultPrevented!=null?o.defaultPrevented:o.returnValue===!1)?ui:ys,this.isPropagationStopped=ys,this}return ue(t.prototype,{preventDefault:function(){this.defaultPrevented=!0;var n=this.nativeEvent;n&&(n.preventDefault?n.preventDefault():typeof n.returnValue!="unknown"&&(n.returnValue=!1),this.isDefaultPrevented=ui)},stopPropagation:function(){var n=this.nativeEvent;n&&(n.stopPropagation?n.stopPropagation():typeof n.cancelBubble!="unknown"&&(n.cancelBubble=!0),this.isPropagationStopped=ui)},persist:function(){},isPersistent:ui}),t}var qn={eventPhase:0,bubbles:0,cancelable:0,timeStamp:function(e){return e.timeStamp||Date.now()},defaultPrevented:0,isTrusted:0},ka=tt(qn),Zr=ue({},qn,{view:0,detail:0}),kf=tt(Zr),Do,Ao,lr,po=ue({},Zr,{screenX:0,screenY:0,clientX:0,clientY:0,pageX:0,pageY:0,ctrlKey:0,shiftKey:0,altKey:0,metaKey:0,getModifierState:Sa,button:0,buttons:0,relatedTarget:function(e){return e.relatedTarget===void 0?e.fromElement===e.srcElement?e.toElement:e.fromElement:e.relatedTarget},movementX:function(e){return"movementX"in e?e.movementX:(e!==lr&&(lr&&e.type==="mousemove"?(Do=e.screenX-lr.screenX,Ao=e.screenY-lr.screenY):Ao=Do=0,lr=e),Do)},movementY:function(e){return"movementY"in e?e.movementY:Ao}}),ws=tt(po),Sf=ue({},po,{dataTransfer:0}),Ef=tt(Sf),Cf=ue({},Zr,{relatedTarget:0}),$o=tt(Cf),_f=ue({},qn,{animationName:0,elapsedTime:0,pseudoElement:0}),jf=tt(_f),Pf=ue({},qn,{clipboardData:function(e){return"clipboardData"in e?e.clipboardData:window.clipboardData}}),zf=tt(Pf),Tf=ue({},qn,{data:0}),ks=tt(Tf),Of={Esc:"Escape",Spacebar:" ",Left:"ArrowLeft",Up:"ArrowUp",Right:"ArrowRight",Down:"ArrowDown",Del:"Delete",Win:"OS",Menu:"ContextMenu",Apps:"ContextMenu",Scroll:"ScrollLock",MozPrintableKey:"Unidentified"},bf={8:"Backspace",9:"Tab",12:"Clear",13:"Enter",16:"Shift",17:"Control",18:"Alt",19:"Pause",20:"CapsLock",27:"Escape",32:" ",33:"PageUp",34:"PageDown",35:"End",36:"Home",37:"ArrowLeft",38:"ArrowUp",39:"ArrowRight",40:"ArrowDown",45:"Insert",46:"Delete",112:"F1",113:"F2",114:"F3",115:"F4",116:"F5",117:"F6",118:"F7",119:"F8",120:"F9",121:"F10",122:"F11",123:"F12",144:"NumLock",145:"ScrollLock",224:"Meta"},Mf={Alt:"altKey",Control:"ctrlKey",Meta:"metaKey",Shift:"shiftKey"};function Rf(e){var t=this.nativeEvent;return t.getModifierState?t.getModifierState(e):(e=Mf[e])?!!t[e]:!1}function Sa(){return Rf}var Lf=ue({},Zr,{key:function(e){if(e.key){var t=Of[e.key]||e.key;if(t!=="Unidentified")return t}return e.type==="keypress"?(e=ji(e),e===13?"Enter":String.fromCharCode(e)):e.type==="keydown"||e.type==="keyup"?bf[e.keyCode]||"Unidentified":""},code:0,location:0,ctrlKey:0,shiftKey:0,altKey:0,metaKey:0,repeat:0,locale:0,getModifierState:Sa,charCode:function(e){return e.type==="keypress"?ji(e):0},keyCode:function(e){return e.type==="keydown"||e.type==="keyup"?e.keyCode:0},which:function(e){return e.type==="keypress"?ji(e):e.type==="keydown"||e.type==="keyup"?e.keyCode:0}}),Nf=tt(Lf),If=ue({},po,{pointerId:0,width:0,height:0,pressure:0,tangentialPressure:0,tiltX:0,tiltY:0,twist:0,pointerType:0,isPrimary:0}),Ss=tt(If),Df=ue({},Zr,{touches:0,targetTouches:0,changedTouches:0,altKey:0,metaKey:0,ctrlKey:0,shiftKey:0,getModifierState:Sa}),Af=tt(Df),$f=ue({},qn,{propertyName:0,elapsedTime:0,pseudoElement:0}),Ff=tt($f),Wf=ue({},po,{deltaX:function(e){return"deltaX"in e?e.deltaX:"wheelDeltaX"in e?-e.wheelDeltaX:0},deltaY:function(e){return"deltaY"in e?e.deltaY:"wheelDeltaY"in e?-e.wheelDeltaY:"wheelDelta"in e?-e.wheelDelta:0},deltaZ:0,deltaMode:0}),Uf=tt(Wf),Vf=[9,13,27,32],Ea=Mt&&"CompositionEvent"in window,wr=null;Mt&&"documentMode"in document&&(wr=document.documentMode);var Hf=Mt&&"TextEvent"in window&&!wr,Sc=Mt&&(!Ea||wr&&8<wr&&11>=wr),Es=" ",Cs=!1;function Ec(e,t){switch(e){case"keyup":return Vf.indexOf(t.keyCode)!==-1;case"keydown":return t.keyCode!==229;case"keypress":case"mousedown":case"focusout":return!0;default:return!1}}function Cc(e){return e=e.detail,typeof e=="object"&&"data"in e?e.data:null}var Pn=!1;function Bf(e,t){switch(e){case"compositionend":return Cc(t);case"keypress":return t.which!==32?null:(Cs=!0,Es);case"textInput":return e=t.data,e===Es&&Cs?null:e;default:return null}}function Qf(e,t){if(Pn)return e==="compositionend"||!Ea&&Ec(e,t)?(e=kc(),_i=wa=Vt=null,Pn=!1,e):null;switch(e){case"paste":return null;case"keypress":if(!(t.ctrlKey||t.altKey||t.metaKey)||t.ctrlKey&&t.altKey){if(t.char&&1<t.char.length)return t.char;if(t.which)return String.fromCharCode(t.which)}return null;case"compositionend":return Sc&&t.locale!=="ko"?null:t.data;default:return null}}var Yf={color:!0,date:!0,datetime:!0,"datetime-local":!0,email:!0,month:!0,number:!0,password:!0,range:!0,search:!0,tel:!0,text:!0,time:!0,url:!0,week:!0};function _s(e){var t=e&&e.nodeName&&e.nodeName.toLowerCase();return t==="input"?!!Yf[e.type]:t==="textarea"}function _c(e,t,n,r){nc(r),t=Hi(t,"onChange"),0<t.length&&(n=new ka("onChange","change",null,n,r),e.push({event:n,listeners:t}))}var kr=null,Lr=null;function Kf(e){Ic(e,0)}function fo(e){var t=On(e);if(Xu(t))return e}function Xf(e,t){if(e==="change")return t}var jc=!1;if(Mt){var Fo;if(Mt){var Wo="oninput"in document;if(!Wo){var js=document.createElement("div");js.setAttribute("oninput","return;"),Wo=typeof js.oninput=="function"}Fo=Wo}else Fo=!1;jc=Fo&&(!document.documentMode||9<document.documentMode)}function Ps(){kr&&(kr.detachEvent("onpropertychange",Pc),Lr=kr=null)}function Pc(e){if(e.propertyName==="value"&&fo(Lr)){var t=[];_c(t,Lr,e,ma(e)),lc(Kf,t)}}function Gf(e,t,n){e==="focusin"?(Ps(),kr=t,Lr=n,kr.attachEvent("onpropertychange",Pc)):e==="focusout"&&Ps()}function Zf(e){if(e==="selectionchange"||e==="keyup"||e==="keydown")return fo(Lr)}function Jf(e,t){if(e==="click")return fo(t)}function qf(e,t){if(e==="input"||e==="change")return fo(t)}function eh(e,t){return e===t&&(e!==0||1/e===1/t)||e!==e&&t!==t}var xt=typeof Object.is=="function"?Object.is:eh;function Nr(e,t){if(xt(e,t))return!0;if(typeof e!="object"||e===null||typeof t!="object"||t===null)return!1;var n=Object.keys(e),r=Object.keys(t);if(n.length!==r.length)return!1;for(r=0;r<n.length;r++){var i=n[r];if(!sl.call(t,i)||!xt(e[i],t[i]))return!1}return!0}function zs(e){for(;e&&e.firstChild;)e=e.firstChild;return e}function Ts(e,t){var n=zs(e);e=0;for(var r;n;){if(n.nodeType===3){if(r=e+n.textContent.length,e<=t&&r>=t)return{node:n,offset:t-e};e=r}e:{for(;n;){if(n.nextSibling){n=n.nextSibling;break e}n=n.parentNode}n=void 0}n=zs(n)}}function zc(e,t){return e&&t?e===t?!0:e&&e.nodeType===3?!1:t&&t.nodeType===3?zc(e,t.parentNode):"contains"in e?e.contains(t):e.compareDocumentPosition?!!(e.compareDocumentPosition(t)&16):!1:!1}function Tc(){for(var e=window,t=Di();t instanceof e.HTMLIFrameElement;){try{var n=typeof t.contentWindow.location.href=="string"}catch{n=!1}if(n)e=t.contentWindow;else break;t=Di(e.document)}return t}function Ca(e){var t=e&&e.nodeName&&e.nodeName.toLowerCase();return t&&(t==="input"&&(e.type==="text"||e.type==="search"||e.type==="tel"||e.type==="url"||e.type==="password")||t==="textarea"||e.contentEditable==="true")}function th(e){var t=Tc(),n=e.focusedElem,r=e.selectionRange;if(t!==n&&n&&n.ownerDocument&&zc(n.ownerDocument.documentElement,n)){if(r!==null&&Ca(n)){if(t=r.start,e=r.end,e===void 0&&(e=t),"selectionStart"in n)n.selectionStart=t,n.selectionEnd=Math.min(e,n.value.length);else if(e=(t=n.ownerDocument||document)&&t.defaultView||window,e.getSelection){e=e.getSelection();var i=n.textContent.length,o=Math.min(r.start,i);r=r.end===void 0?o:Math.min(r.end,i),!e.extend&&o>r&&(i=r,r=o,o=i),i=Ts(n,o);var l=Ts(n,r);i&&l&&(e.rangeCount!==1||e.anchorNode!==i.node||e.anchorOffset!==i.offset||e.focusNode!==l.node||e.focusOffset!==l.offset)&&(t=t.createRange(),t.setStart(i.node,i.offset),e.removeAllRanges(),o>r?(e.addRange(t),e.extend(l.node,l.offset)):(t.setEnd(l.node,l.offset),e.addRange(t)))}}for(t=[],e=n;e=e.parentNode;)e.nodeType===1&&t.push({element:e,left:e.scrollLeft,top:e.scrollTop});for(typeof n.focus=="function"&&n.focus(),n=0;n<t.length;n++)e=t[n],e.element.scrollLeft=e.left,e.element.scrollTop=e.top}}var nh=Mt&&"documentMode"in document&&11>=document.documentMode,zn=null,Pl=null,Sr=null,zl=!1;function Os(e,t,n){var r=n.window===n?n.document:n.nodeType===9?n:n.ownerDocument;zl||zn==null||zn!==Di(r)||(r=zn,"selectionStart"in r&&Ca(r)?r={start:r.selectionStart,end:r.selectionEnd}:(r=(r.ownerDocument&&r.ownerDocument.defaultView||window).getSelection(),r={anchorNode:r.anchorNode,anchorOffset:r.anchorOffset,focusNode:r.focusNode,focusOffset:r.focusOffset}),Sr&&Nr(Sr,r)||(Sr=r,r=Hi(Pl,"onSelect"),0<r.length&&(t=new ka("onSelect","select",null,t,n),e.push({event:t,listeners:r}),t.target=zn)))}function ci(e,t){var n={};return n[e.toLowerCase()]=t.toLowerCase(),n["Webkit"+e]="webkit"+t,n["Moz"+e]="moz"+t,n}var Tn={animationend:ci("Animation","AnimationEnd"),animationiteration:ci("Animation","AnimationIteration"),animationstart:ci("Animation","AnimationStart"),transitionend:ci("Transition","TransitionEnd")},Uo={},Oc={};Mt&&(Oc=document.createElement("div").style,"AnimationEvent"in window||(delete Tn.animationend.animation,delete Tn.animationiteration.animation,delete Tn.animationstart.animation),"TransitionEvent"in window||delete Tn.transitionend.transition);function ho(e){if(Uo[e])return Uo[e];if(!Tn[e])return e;var t=Tn[e],n;for(n in t)if(t.hasOwnProperty(n)&&n in Oc)return Uo[e]=t[n];return e}var bc=ho("animationend"),Mc=ho("animationiteration"),Rc=ho("animationstart"),Lc=ho("transitionend"),Nc=new Map,bs="abort auxClick cancel canPlay canPlayThrough click close contextMenu copy cut drag dragEnd dragEnter dragExit dragLeave dragOver dragStart drop durationChange emptied encrypted ended error gotPointerCapture input invalid keyDown keyPress keyUp load loadedData loadedMetadata loadStart lostPointerCapture mouseDown mouseMove mouseOut mouseOver mouseUp paste pause play playing pointerCancel pointerDown pointerMove pointerOut pointerOver pointerUp progress rateChange reset resize seeked seeking stalled submit suspend timeUpdate touchCancel touchEnd touchStart volumeChange scroll toggle touchMove waiting wheel".split(" ");function tn(e,t){Nc.set(e,t),yn(t,[e])}for(var Vo=0;Vo<bs.length;Vo++){var Ho=bs[Vo],rh=Ho.toLowerCase(),ih=Ho[0].toUpperCase()+Ho.slice(1);tn(rh,"on"+ih)}tn(bc,"onAnimationEnd");tn(Mc,"onAnimationIteration");tn(Rc,"onAnimationStart");tn("dblclick","onDoubleClick");tn("focusin","onFocus");tn("focusout","onBlur");tn(Lc,"onTransitionEnd");Hn("onMouseEnter",["mouseout","mouseover"]);Hn("onMouseLeave",["mouseout","mouseover"]);Hn("onPointerEnter",["pointerout","pointerover"]);Hn("onPointerLeave",["pointerout","pointerover"]);yn("onChange","change click focusin focusout input keydown keyup selectionchange".split(" "));yn("onSelect","focusout contextmenu dragend focusin keydown keyup mousedown mouseup selectionchange".split(" "));yn("onBeforeInput",["compositionend","keypress","textInput","paste"]);yn("onCompositionEnd","compositionend focusout keydown keypress keyup mousedown".split(" "));yn("onCompositionStart","compositionstart focusout keydown keypress keyup mousedown".split(" "));yn("onCompositionUpdate","compositionupdate focusout keydown keypress keyup mousedown".split(" "));var gr="abort canplay canplaythrough durationchange emptied encrypted ended error loadeddata loadedmetadata loadstart pause play playing progress ratechange resize seeked seeking stalled suspend timeupdate volumechange waiting".split(" "),oh=new Set("cancel close invalid load scroll toggle".split(" ").concat(gr));function Ms(e,t,n){var r=e.type||"unknown-event";e.currentTarget=n,nf(r,t,void 0,e),e.currentTarget=null}function Ic(e,t){t=(t&4)!==0;for(var n=0;n<e.length;n++){var r=e[n],i=r.event;r=r.listeners;e:{var o=void 0;if(t)for(var l=r.length-1;0<=l;l--){var s=r[l],a=s.instance,c=s.currentTarget;if(s=s.listener,a!==o&&i.isPropagationStopped())break e;Ms(i,s,c),o=a}else for(l=0;l<r.length;l++){if(s=r[l],a=s.instance,c=s.currentTarget,s=s.listener,a!==o&&i.isPropagationStopped())break e;Ms(i,s,c),o=a}}}if($i)throw e=El,$i=!1,El=null,e}function ie(e,t){var n=t[Rl];n===void 0&&(n=t[Rl]=new Set);var r=e+"__bubble";n.has(r)||(Dc(t,e,2,!1),n.add(r))}function Bo(e,t,n){var r=0;t&&(r|=4),Dc(n,e,r,t)}var di="_reactListening"+Math.random().toString(36).slice(2);function Ir(e){if(!e[di]){e[di]=!0,Hu.forEach(function(n){n!=="selectionchange"&&(oh.has(n)||Bo(n,!1,e),Bo(n,!0,e))});var t=e.nodeType===9?e:e.ownerDocument;t===null||t[di]||(t[di]=!0,Bo("selectionchange",!1,t))}}function Dc(e,t,n,r){switch(wc(t)){case 1:var i=yf;break;case 4:i=wf;break;default:i=ya}n=i.bind(null,t,n,e),i=void 0,!Sl||t!=="touchstart"&&t!=="touchmove"&&t!=="wheel"||(i=!0),r?i!==void 0?e.addEventListener(t,n,{capture:!0,passive:i}):e.addEventListener(t,n,!0):i!==void 0?e.addEventListener(t,n,{passive:i}):e.addEventListener(t,n,!1)}function Qo(e,t,n,r,i){var o=r;if(!(t&1)&&!(t&2)&&r!==null)e:for(;;){if(r===null)return;var l=r.tag;if(l===3||l===4){var s=r.stateNode.containerInfo;if(s===i||s.nodeType===8&&s.parentNode===i)break;if(l===4)for(l=r.return;l!==null;){var a=l.tag;if((a===3||a===4)&&(a=l.stateNode.containerInfo,a===i||a.nodeType===8&&a.parentNode===i))return;l=l.return}for(;s!==null;){if(l=un(s),l===null)return;if(a=l.tag,a===5||a===6){r=o=l;continue e}s=s.parentNode}}r=r.return}lc(function(){var c=o,g=ma(n),x=[];e:{var m=Nc.get(e);if(m!==void 0){var y=ka,f=e;switch(e){case"keypress":if(ji(n)===0)break e;case"keydown":case"keyup":y=Nf;break;case"focusin":f="focus",y=$o;break;case"focusout":f="blur",y=$o;break;case"beforeblur":case"afterblur":y=$o;break;case"click":if(n.button===2)break e;case"auxclick":case"dblclick":case"mousedown":case"mousemove":case"mouseup":case"mouseout":case"mouseover":case"contextmenu":y=ws;break;case"drag":case"dragend":case"dragenter":case"dragexit":case"dragleave":case"dragover":case"dragstart":case"drop":y=Ef;break;case"touchcancel":case"touchend":case"touchmove":case"touchstart":y=Af;break;case bc:case Mc:case Rc:y=jf;break;case Lc:y=Ff;break;case"scroll":y=kf;break;case"wheel":y=Uf;break;case"copy":case"cut":case"paste":y=zf;break;case"gotpointercapture":case"lostpointercapture":case"pointercancel":case"pointerdown":case"pointermove":case"pointerout":case"pointerover":case"pointerup":y=Ss}var h=(t&4)!==0,C=!h&&e==="scroll",d=h?m!==null?m+"Capture":null:m;h=[];for(var u=c,p;u!==null;){p=u;var w=p.stateNode;if(p.tag===5&&w!==null&&(p=w,d!==null&&(w=Or(u,d),w!=null&&h.push(Dr(u,w,p)))),C)break;u=u.return}0<h.length&&(m=new y(m,f,null,n,g),x.push({event:m,listeners:h}))}}if(!(t&7)){e:{if(m=e==="mouseover"||e==="pointerover",y=e==="mouseout"||e==="pointerout",m&&n!==wl&&(f=n.relatedTarget||n.fromElement)&&(un(f)||f[Rt]))break e;if((y||m)&&(m=g.window===g?g:(m=g.ownerDocument)?m.defaultView||m.parentWindow:window,y?(f=n.relatedTarget||n.toElement,y=c,f=f?un(f):null,f!==null&&(C=wn(f),f!==C||f.tag!==5&&f.tag!==6)&&(f=null)):(y=null,f=c),y!==f)){if(h=ws,w="onMouseLeave",d="onMouseEnter",u="mouse",(e==="pointerout"||e==="pointerover")&&(h=Ss,w="onPointerLeave",d="onPointerEnter",u="pointer"),C=y==null?m:On(y),p=f==null?m:On(f),m=new h(w,u+"leave",y,n,g),m.target=C,m.relatedTarget=p,w=null,un(g)===c&&(h=new h(d,u+"enter",f,n,g),h.target=p,h.relatedTarget=C,w=h),C=w,y&&f)t:{for(h=y,d=f,u=0,p=h;p;p=kn(p))u++;for(p=0,w=d;w;w=kn(w))p++;for(;0<u-p;)h=kn(h),u--;for(;0<p-u;)d=kn(d),p--;for(;u--;){if(h===d||d!==null&&h===d.alternate)break t;h=kn(h),d=kn(d)}h=null}else h=null;y!==null&&Rs(x,m,y,h,!1),f!==null&&C!==null&&Rs(x,C,f,h,!0)}}e:{if(m=c?On(c):window,y=m.nodeName&&m.nodeName.toLowerCase(),y==="select"||y==="input"&&m.type==="file")var E=Xf;else if(_s(m))if(jc)E=qf;else{E=Zf;var _=Gf}else(y=m.nodeName)&&y.toLowerCase()==="input"&&(m.type==="checkbox"||m.type==="radio")&&(E=Jf);if(E&&(E=E(e,c))){_c(x,E,n,g);break e}_&&_(e,m,c),e==="focusout"&&(_=m._wrapperState)&&_.controlled&&m.type==="number"&&ml(m,"number",m.value)}switch(_=c?On(c):window,e){case"focusin":(_s(_)||_.contentEditable==="true")&&(zn=_,Pl=c,Sr=null);break;case"focusout":Sr=Pl=zn=null;break;case"mousedown":zl=!0;break;case"contextmenu":case"mouseup":case"dragend":zl=!1,Os(x,n,g);break;case"selectionchange":if(nh)break;case"keydown":case"keyup":Os(x,n,g)}var S;if(Ea)e:{switch(e){case"compositionstart":var z="onCompositionStart";break e;case"compositionend":z="onCompositionEnd";break e;case"compositionupdate":z="onCompositionUpdate";break e}z=void 0}else Pn?Ec(e,n)&&(z="onCompositionEnd"):e==="keydown"&&n.keyCode===229&&(z="onCompositionStart");z&&(Sc&&n.locale!=="ko"&&(Pn||z!=="onCompositionStart"?z==="onCompositionEnd"&&Pn&&(S=kc()):(Vt=g,wa="value"in Vt?Vt.value:Vt.textContent,Pn=!0)),_=Hi(c,z),0<_.length&&(z=new ks(z,e,null,n,g),x.push({event:z,listeners:_}),S?z.data=S:(S=Cc(n),S!==null&&(z.data=S)))),(S=Hf?Bf(e,n):Qf(e,n))&&(c=Hi(c,"onBeforeInput"),0<c.length&&(g=new ks("onBeforeInput","beforeinput",null,n,g),x.push({event:g,listeners:c}),g.data=S))}Ic(x,t)})}function Dr(e,t,n){return{instance:e,listener:t,currentTarget:n}}function Hi(e,t){for(var n=t+"Capture",r=[];e!==null;){var i=e,o=i.stateNode;i.tag===5&&o!==null&&(i=o,o=Or(e,n),o!=null&&r.unshift(Dr(e,o,i)),o=Or(e,t),o!=null&&r.push(Dr(e,o,i))),e=e.return}return r}function kn(e){if(e===null)return null;do e=e.return;while(e&&e.tag!==5);return e||null}function Rs(e,t,n,r,i){for(var o=t._reactName,l=[];n!==null&&n!==r;){var s=n,a=s.alternate,c=s.stateNode;if(a!==null&&a===r)break;s.tag===5&&c!==null&&(s=c,i?(a=Or(n,o),a!=null&&l.unshift(Dr(n,a,s))):i||(a=Or(n,o),a!=null&&l.push(Dr(n,a,s)))),n=n.return}l.length!==0&&e.push({event:t,listeners:l})}var lh=/\r\n?/g,ah=/\u0000|\uFFFD/g;function Ls(e){return(typeof e=="string"?e:""+e).replace(lh,`
`).replace(ah,"")}function pi(e,t,n){if(t=Ls(t),Ls(e)!==t&&n)throw Error(P(425))}function Bi(){}var Tl=null,Ol=null;function bl(e,t){return e==="textarea"||e==="noscript"||typeof t.children=="string"||typeof t.children=="number"||typeof t.dangerouslySetInnerHTML=="object"&&t.dangerouslySetInnerHTML!==null&&t.dangerouslySetInnerHTML.__html!=null}var Ml=typeof setTimeout=="function"?setTimeout:void 0,sh=typeof clearTimeout=="function"?clearTimeout:void 0,Ns=typeof Promise=="function"?Promise:void 0,uh=typeof queueMicrotask=="function"?queueMicrotask:typeof Ns<"u"?function(e){return Ns.resolve(null).then(e).catch(ch)}:Ml;function ch(e){setTimeout(function(){throw e})}function Yo(e,t){var n=t,r=0;do{var i=n.nextSibling;if(e.removeChild(n),i&&i.nodeType===8)if(n=i.data,n==="/$"){if(r===0){e.removeChild(i),Rr(t);return}r--}else n!=="$"&&n!=="$?"&&n!=="$!"||r++;n=i}while(n);Rr(t)}function Kt(e){for(;e!=null;e=e.nextSibling){var t=e.nodeType;if(t===1||t===3)break;if(t===8){if(t=e.data,t==="$"||t==="$!"||t==="$?")break;if(t==="/$")return null}}return e}function Is(e){e=e.previousSibling;for(var t=0;e;){if(e.nodeType===8){var n=e.data;if(n==="$"||n==="$!"||n==="$?"){if(t===0)return e;t--}else n==="/$"&&t++}e=e.previousSibling}return null}var er=Math.random().toString(36).slice(2),St="__reactFiber$"+er,Ar="__reactProps$"+er,Rt="__reactContainer$"+er,Rl="__reactEvents$"+er,dh="__reactListeners$"+er,ph="__reactHandles$"+er;function un(e){var t=e[St];if(t)return t;for(var n=e.parentNode;n;){if(t=n[Rt]||n[St]){if(n=t.alternate,t.child!==null||n!==null&&n.child!==null)for(e=Is(e);e!==null;){if(n=e[St])return n;e=Is(e)}return t}e=n,n=e.parentNode}return null}function Jr(e){return e=e[St]||e[Rt],!e||e.tag!==5&&e.tag!==6&&e.tag!==13&&e.tag!==3?null:e}function On(e){if(e.tag===5||e.tag===6)return e.stateNode;throw Error(P(33))}function mo(e){return e[Ar]||null}var Ll=[],bn=-1;function nn(e){return{current:e}}function oe(e){0>bn||(e.current=Ll[bn],Ll[bn]=null,bn--)}function re(e,t){bn++,Ll[bn]=e.current,e.current=t}var en={},Oe=nn(en),Ue=nn(!1),hn=en;function Bn(e,t){var n=e.type.contextTypes;if(!n)return en;var r=e.stateNode;if(r&&r.__reactInternalMemoizedUnmaskedChildContext===t)return r.__reactInternalMemoizedMaskedChildContext;var i={},o;for(o in n)i[o]=t[o];return r&&(e=e.stateNode,e.__reactInternalMemoizedUnmaskedChildContext=t,e.__reactInternalMemoizedMaskedChildContext=i),i}function Ve(e){return e=e.childContextTypes,e!=null}function Qi(){oe(Ue),oe(Oe)}function Ds(e,t,n){if(Oe.current!==en)throw Error(P(168));re(Oe,t),re(Ue,n)}function Ac(e,t,n){var r=e.stateNode;if(t=t.childContextTypes,typeof r.getChildContext!="function")return n;r=r.getChildContext();for(var i in r)if(!(i in t))throw Error(P(108,Xp(e)||"Unknown",i));return ue({},n,r)}function Yi(e){return e=(e=e.stateNode)&&e.__reactInternalMemoizedMergedChildContext||en,hn=Oe.current,re(Oe,e),re(Ue,Ue.current),!0}function As(e,t,n){var r=e.stateNode;if(!r)throw Error(P(169));n?(e=Ac(e,t,hn),r.__reactInternalMemoizedMergedChildContext=e,oe(Ue),oe(Oe),re(Oe,e)):oe(Ue),re(Ue,n)}var Pt=null,go=!1,Ko=!1;function $c(e){Pt===null?Pt=[e]:Pt.push(e)}function fh(e){go=!0,$c(e)}function rn(){if(!Ko&&Pt!==null){Ko=!0;var e=0,t=ee;try{var n=Pt;for(ee=1;e<n.length;e++){var r=n[e];do r=r(!0);while(r!==null)}Pt=null,go=!1}catch(i){throw Pt!==null&&(Pt=Pt.slice(e+1)),cc(ga,rn),i}finally{ee=t,Ko=!1}}return null}var Mn=[],Rn=0,Ki=null,Xi=0,rt=[],it=0,mn=null,Tt=1,Ot="";function an(e,t){Mn[Rn++]=Xi,Mn[Rn++]=Ki,Ki=e,Xi=t}function Fc(e,t,n){rt[it++]=Tt,rt[it++]=Ot,rt[it++]=mn,mn=e;var r=Tt;e=Ot;var i=32-mt(r)-1;r&=~(1<<i),n+=1;var o=32-mt(t)+i;if(30<o){var l=i-i%5;o=(r&(1<<l)-1).toString(32),r>>=l,i-=l,Tt=1<<32-mt(t)+i|n<<i|r,Ot=o+e}else Tt=1<<o|n<<i|r,Ot=e}function _a(e){e.return!==null&&(an(e,1),Fc(e,1,0))}function ja(e){for(;e===Ki;)Ki=Mn[--Rn],Mn[Rn]=null,Xi=Mn[--Rn],Mn[Rn]=null;for(;e===mn;)mn=rt[--it],rt[it]=null,Ot=rt[--it],rt[it]=null,Tt=rt[--it],rt[it]=null}var Ge=null,Xe=null,le=!1,ht=null;function Wc(e,t){var n=ot(5,null,null,0);n.elementType="DELETED",n.stateNode=t,n.return=e,t=e.deletions,t===null?(e.deletions=[n],e.flags|=16):t.push(n)}function $s(e,t){switch(e.tag){case 5:var n=e.type;return t=t.nodeType!==1||n.toLowerCase()!==t.nodeName.toLowerCase()?null:t,t!==null?(e.stateNode=t,Ge=e,Xe=Kt(t.firstChild),!0):!1;case 6:return t=e.pendingProps===""||t.nodeType!==3?null:t,t!==null?(e.stateNode=t,Ge=e,Xe=null,!0):!1;case 13:return t=t.nodeType!==8?null:t,t!==null?(n=mn!==null?{id:Tt,overflow:Ot}:null,e.memoizedState={dehydrated:t,treeContext:n,retryLane:1073741824},n=ot(18,null,null,0),n.stateNode=t,n.return=e,e.child=n,Ge=e,Xe=null,!0):!1;default:return!1}}function Nl(e){return(e.mode&1)!==0&&(e.flags&128)===0}function Il(e){if(le){var t=Xe;if(t){var n=t;if(!$s(e,t)){if(Nl(e))throw Error(P(418));t=Kt(n.nextSibling);var r=Ge;t&&$s(e,t)?Wc(r,n):(e.flags=e.flags&-4097|2,le=!1,Ge=e)}}else{if(Nl(e))throw Error(P(418));e.flags=e.flags&-4097|2,le=!1,Ge=e}}}function Fs(e){for(e=e.return;e!==null&&e.tag!==5&&e.tag!==3&&e.tag!==13;)e=e.return;Ge=e}function fi(e){if(e!==Ge)return!1;if(!le)return Fs(e),le=!0,!1;var t;if((t=e.tag!==3)&&!(t=e.tag!==5)&&(t=e.type,t=t!=="head"&&t!=="body"&&!bl(e.type,e.memoizedProps)),t&&(t=Xe)){if(Nl(e))throw Uc(),Error(P(418));for(;t;)Wc(e,t),t=Kt(t.nextSibling)}if(Fs(e),e.tag===13){if(e=e.memoizedState,e=e!==null?e.dehydrated:null,!e)throw Error(P(317));e:{for(e=e.nextSibling,t=0;e;){if(e.nodeType===8){var n=e.data;if(n==="/$"){if(t===0){Xe=Kt(e.nextSibling);break e}t--}else n!=="$"&&n!=="$!"&&n!=="$?"||t++}e=e.nextSibling}Xe=null}}else Xe=Ge?Kt(e.stateNode.nextSibling):null;return!0}function Uc(){for(var e=Xe;e;)e=Kt(e.nextSibling)}function Qn(){Xe=Ge=null,le=!1}function Pa(e){ht===null?ht=[e]:ht.push(e)}var hh=It.ReactCurrentBatchConfig;function dt(e,t){if(e&&e.defaultProps){t=ue({},t),e=e.defaultProps;for(var n in e)t[n]===void 0&&(t[n]=e[n]);return t}return t}var Gi=nn(null),Zi=null,Ln=null,za=null;function Ta(){za=Ln=Zi=null}function Oa(e){var t=Gi.current;oe(Gi),e._currentValue=t}function Dl(e,t,n){for(;e!==null;){var r=e.alternate;if((e.childLanes&t)!==t?(e.childLanes|=t,r!==null&&(r.childLanes|=t)):r!==null&&(r.childLanes&t)!==t&&(r.childLanes|=t),e===n)break;e=e.return}}function Wn(e,t){Zi=e,za=Ln=null,e=e.dependencies,e!==null&&e.firstContext!==null&&(e.lanes&t&&(We=!0),e.firstContext=null)}function at(e){var t=e._currentValue;if(za!==e)if(e={context:e,memoizedValue:t,next:null},Ln===null){if(Zi===null)throw Error(P(308));Ln=e,Zi.dependencies={lanes:0,firstContext:e}}else Ln=Ln.next=e;return t}var cn=null;function ba(e){cn===null?cn=[e]:cn.push(e)}function Vc(e,t,n,r){var i=t.interleaved;return i===null?(n.next=n,ba(t)):(n.next=i.next,i.next=n),t.interleaved=n,Lt(e,r)}function Lt(e,t){e.lanes|=t;var n=e.alternate;for(n!==null&&(n.lanes|=t),n=e,e=e.return;e!==null;)e.childLanes|=t,n=e.alternate,n!==null&&(n.childLanes|=t),n=e,e=e.return;return n.tag===3?n.stateNode:null}var Ft=!1;function Ma(e){e.updateQueue={baseState:e.memoizedState,firstBaseUpdate:null,lastBaseUpdate:null,shared:{pending:null,interleaved:null,lanes:0},effects:null}}function Hc(e,t){e=e.updateQueue,t.updateQueue===e&&(t.updateQueue={baseState:e.baseState,firstBaseUpdate:e.firstBaseUpdate,lastBaseUpdate:e.lastBaseUpdate,shared:e.shared,effects:e.effects})}function bt(e,t){return{eventTime:e,lane:t,tag:0,payload:null,callback:null,next:null}}function Xt(e,t,n){var r=e.updateQueue;if(r===null)return null;if(r=r.shared,Q&2){var i=r.pending;return i===null?t.next=t:(t.next=i.next,i.next=t),r.pending=t,Lt(e,n)}return i=r.interleaved,i===null?(t.next=t,ba(r)):(t.next=i.next,i.next=t),r.interleaved=t,Lt(e,n)}function Pi(e,t,n){if(t=t.updateQueue,t!==null&&(t=t.shared,(n&4194240)!==0)){var r=t.lanes;r&=e.pendingLanes,n|=r,t.lanes=n,xa(e,n)}}function Ws(e,t){var n=e.updateQueue,r=e.alternate;if(r!==null&&(r=r.updateQueue,n===r)){var i=null,o=null;if(n=n.firstBaseUpdate,n!==null){do{var l={eventTime:n.eventTime,lane:n.lane,tag:n.tag,payload:n.payload,callback:n.callback,next:null};o===null?i=o=l:o=o.next=l,n=n.next}while(n!==null);o===null?i=o=t:o=o.next=t}else i=o=t;n={baseState:r.baseState,firstBaseUpdate:i,lastBaseUpdate:o,shared:r.shared,effects:r.effects},e.updateQueue=n;return}e=n.lastBaseUpdate,e===null?n.firstBaseUpdate=t:e.next=t,n.lastBaseUpdate=t}function Ji(e,t,n,r){var i=e.updateQueue;Ft=!1;var o=i.firstBaseUpdate,l=i.lastBaseUpdate,s=i.shared.pending;if(s!==null){i.shared.pending=null;var a=s,c=a.next;a.next=null,l===null?o=c:l.next=c,l=a;var g=e.alternate;g!==null&&(g=g.updateQueue,s=g.lastBaseUpdate,s!==l&&(s===null?g.firstBaseUpdate=c:s.next=c,g.lastBaseUpdate=a))}if(o!==null){var x=i.baseState;l=0,g=c=a=null,s=o;do{var m=s.lane,y=s.eventTime;if((r&m)===m){g!==null&&(g=g.next={eventTime:y,lane:0,tag:s.tag,payload:s.payload,callback:s.callback,next:null});e:{var f=e,h=s;switch(m=t,y=n,h.tag){case 1:if(f=h.payload,typeof f=="function"){x=f.call(y,x,m);break e}x=f;break e;case 3:f.flags=f.flags&-65537|128;case 0:if(f=h.payload,m=typeof f=="function"?f.call(y,x,m):f,m==null)break e;x=ue({},x,m);break e;case 2:Ft=!0}}s.callback!==null&&s.lane!==0&&(e.flags|=64,m=i.effects,m===null?i.effects=[s]:m.push(s))}else y={eventTime:y,lane:m,tag:s.tag,payload:s.payload,callback:s.callback,next:null},g===null?(c=g=y,a=x):g=g.next=y,l|=m;if(s=s.next,s===null){if(s=i.shared.pending,s===null)break;m=s,s=m.next,m.next=null,i.lastBaseUpdate=m,i.shared.pending=null}}while(!0);if(g===null&&(a=x),i.baseState=a,i.firstBaseUpdate=c,i.lastBaseUpdate=g,t=i.shared.interleaved,t!==null){i=t;do l|=i.lane,i=i.next;while(i!==t)}else o===null&&(i.shared.lanes=0);xn|=l,e.lanes=l,e.memoizedState=x}}function Us(e,t,n){if(e=t.effects,t.effects=null,e!==null)for(t=0;t<e.length;t++){var r=e[t],i=r.callback;if(i!==null){if(r.callback=null,r=n,typeof i!="function")throw Error(P(191,i));i.call(r)}}}var Bc=new Vu.Component().refs;function Al(e,t,n,r){t=e.memoizedState,n=n(r,t),n=n==null?t:ue({},t,n),e.memoizedState=n,e.lanes===0&&(e.updateQueue.baseState=n)}var xo={isMounted:function(e){return(e=e._reactInternals)?wn(e)===e:!1},enqueueSetState:function(e,t,n){e=e._reactInternals;var r=Le(),i=Zt(e),o=bt(r,i);o.payload=t,n!=null&&(o.callback=n),t=Xt(e,o,i),t!==null&&(gt(t,e,i,r),Pi(t,e,i))},enqueueReplaceState:function(e,t,n){e=e._reactInternals;var r=Le(),i=Zt(e),o=bt(r,i);o.tag=1,o.payload=t,n!=null&&(o.callback=n),t=Xt(e,o,i),t!==null&&(gt(t,e,i,r),Pi(t,e,i))},enqueueForceUpdate:function(e,t){e=e._reactInternals;var n=Le(),r=Zt(e),i=bt(n,r);i.tag=2,t!=null&&(i.callback=t),t=Xt(e,i,r),t!==null&&(gt(t,e,r,n),Pi(t,e,r))}};function Vs(e,t,n,r,i,o,l){return e=e.stateNode,typeof e.shouldComponentUpdate=="function"?e.shouldComponentUpdate(r,o,l):t.prototype&&t.prototype.isPureReactComponent?!Nr(n,r)||!Nr(i,o):!0}function Qc(e,t,n){var r=!1,i=en,o=t.contextType;return typeof o=="object"&&o!==null?o=at(o):(i=Ve(t)?hn:Oe.current,r=t.contextTypes,o=(r=r!=null)?Bn(e,i):en),t=new t(n,o),e.memoizedState=t.state!==null&&t.state!==void 0?t.state:null,t.updater=xo,e.stateNode=t,t._reactInternals=e,r&&(e=e.stateNode,e.__reactInternalMemoizedUnmaskedChildContext=i,e.__reactInternalMemoizedMaskedChildContext=o),t}function Hs(e,t,n,r){e=t.state,typeof t.componentWillReceiveProps=="function"&&t.componentWillReceiveProps(n,r),typeof t.UNSAFE_componentWillReceiveProps=="function"&&t.UNSAFE_componentWillReceiveProps(n,r),t.state!==e&&xo.enqueueReplaceState(t,t.state,null)}function $l(e,t,n,r){var i=e.stateNode;i.props=n,i.state=e.memoizedState,i.refs=Bc,Ma(e);var o=t.contextType;typeof o=="object"&&o!==null?i.context=at(o):(o=Ve(t)?hn:Oe.current,i.context=Bn(e,o)),i.state=e.memoizedState,o=t.getDerivedStateFromProps,typeof o=="function"&&(Al(e,t,o,n),i.state=e.memoizedState),typeof t.getDerivedStateFromProps=="function"||typeof i.getSnapshotBeforeUpdate=="function"||typeof i.UNSAFE_componentWillMount!="function"&&typeof i.componentWillMount!="function"||(t=i.state,typeof i.componentWillMount=="function"&&i.componentWillMount(),typeof i.UNSAFE_componentWillMount=="function"&&i.UNSAFE_componentWillMount(),t!==i.state&&xo.enqueueReplaceState(i,i.state,null),Ji(e,n,i,r),i.state=e.memoizedState),typeof i.componentDidMount=="function"&&(e.flags|=4194308)}function ar(e,t,n){if(e=n.ref,e!==null&&typeof e!="function"&&typeof e!="object"){if(n._owner){if(n=n._owner,n){if(n.tag!==1)throw Error(P(309));var r=n.stateNode}if(!r)throw Error(P(147,e));var i=r,o=""+e;return t!==null&&t.ref!==null&&typeof t.ref=="function"&&t.ref._stringRef===o?t.ref:(t=function(l){var s=i.refs;s===Bc&&(s=i.refs={}),l===null?delete s[o]:s[o]=l},t._stringRef=o,t)}if(typeof e!="string")throw Error(P(284));if(!n._owner)throw Error(P(290,e))}return e}function hi(e,t){throw e=Object.prototype.toString.call(t),Error(P(31,e==="[object Object]"?"object with keys {"+Object.keys(t).join(", ")+"}":e))}function Bs(e){var t=e._init;return t(e._payload)}function Yc(e){function t(d,u){if(e){var p=d.deletions;p===null?(d.deletions=[u],d.flags|=16):p.push(u)}}function n(d,u){if(!e)return null;for(;u!==null;)t(d,u),u=u.sibling;return null}function r(d,u){for(d=new Map;u!==null;)u.key!==null?d.set(u.key,u):d.set(u.index,u),u=u.sibling;return d}function i(d,u){return d=Jt(d,u),d.index=0,d.sibling=null,d}function o(d,u,p){return d.index=p,e?(p=d.alternate,p!==null?(p=p.index,p<u?(d.flags|=2,u):p):(d.flags|=2,u)):(d.flags|=1048576,u)}function l(d){return e&&d.alternate===null&&(d.flags|=2),d}function s(d,u,p,w){return u===null||u.tag!==6?(u=tl(p,d.mode,w),u.return=d,u):(u=i(u,p),u.return=d,u)}function a(d,u,p,w){var E=p.type;return E===jn?g(d,u,p.props.children,w,p.key):u!==null&&(u.elementType===E||typeof E=="object"&&E!==null&&E.$$typeof===$t&&Bs(E)===u.type)?(w=i(u,p.props),w.ref=ar(d,u,p),w.return=d,w):(w=Ri(p.type,p.key,p.props,null,d.mode,w),w.ref=ar(d,u,p),w.return=d,w)}function c(d,u,p,w){return u===null||u.tag!==4||u.stateNode.containerInfo!==p.containerInfo||u.stateNode.implementation!==p.implementation?(u=nl(p,d.mode,w),u.return=d,u):(u=i(u,p.children||[]),u.return=d,u)}function g(d,u,p,w,E){return u===null||u.tag!==7?(u=fn(p,d.mode,w,E),u.return=d,u):(u=i(u,p),u.return=d,u)}function x(d,u,p){if(typeof u=="string"&&u!==""||typeof u=="number")return u=tl(""+u,d.mode,p),u.return=d,u;if(typeof u=="object"&&u!==null){switch(u.$$typeof){case ri:return p=Ri(u.type,u.key,u.props,null,d.mode,p),p.ref=ar(d,null,u),p.return=d,p;case _n:return u=nl(u,d.mode,p),u.return=d,u;case $t:var w=u._init;return x(d,w(u._payload),p)}if(hr(u)||nr(u))return u=fn(u,d.mode,p,null),u.return=d,u;hi(d,u)}return null}function m(d,u,p,w){var E=u!==null?u.key:null;if(typeof p=="string"&&p!==""||typeof p=="number")return E!==null?null:s(d,u,""+p,w);if(typeof p=="object"&&p!==null){switch(p.$$typeof){case ri:return p.key===E?a(d,u,p,w):null;case _n:return p.key===E?c(d,u,p,w):null;case $t:return E=p._init,m(d,u,E(p._payload),w)}if(hr(p)||nr(p))return E!==null?null:g(d,u,p,w,null);hi(d,p)}return null}function y(d,u,p,w,E){if(typeof w=="string"&&w!==""||typeof w=="number")return d=d.get(p)||null,s(u,d,""+w,E);if(typeof w=="object"&&w!==null){switch(w.$$typeof){case ri:return d=d.get(w.key===null?p:w.key)||null,a(u,d,w,E);case _n:return d=d.get(w.key===null?p:w.key)||null,c(u,d,w,E);case $t:var _=w._init;return y(d,u,p,_(w._payload),E)}if(hr(w)||nr(w))return d=d.get(p)||null,g(u,d,w,E,null);hi(u,w)}return null}function f(d,u,p,w){for(var E=null,_=null,S=u,z=u=0,j=null;S!==null&&z<p.length;z++){S.index>z?(j=S,S=null):j=S.sibling;var O=m(d,S,p[z],w);if(O===null){S===null&&(S=j);break}e&&S&&O.alternate===null&&t(d,S),u=o(O,u,z),_===null?E=O:_.sibling=O,_=O,S=j}if(z===p.length)return n(d,S),le&&an(d,z),E;if(S===null){for(;z<p.length;z++)S=x(d,p[z],w),S!==null&&(u=o(S,u,z),_===null?E=S:_.sibling=S,_=S);return le&&an(d,z),E}for(S=r(d,S);z<p.length;z++)j=y(S,d,z,p[z],w),j!==null&&(e&&j.alternate!==null&&S.delete(j.key===null?z:j.key),u=o(j,u,z),_===null?E=j:_.sibling=j,_=j);return e&&S.forEach(function(D){return t(d,D)}),le&&an(d,z),E}function h(d,u,p,w){var E=nr(p);if(typeof E!="function")throw Error(P(150));if(p=E.call(p),p==null)throw Error(P(151));for(var _=E=null,S=u,z=u=0,j=null,O=p.next();S!==null&&!O.done;z++,O=p.next()){S.index>z?(j=S,S=null):j=S.sibling;var D=m(d,S,O.value,w);if(D===null){S===null&&(S=j);break}e&&S&&D.alternate===null&&t(d,S),u=o(D,u,z),_===null?E=D:_.sibling=D,_=D,S=j}if(O.done)return n(d,S),le&&an(d,z),E;if(S===null){for(;!O.done;z++,O=p.next())O=x(d,O.value,w),O!==null&&(u=o(O,u,z),_===null?E=O:_.sibling=O,_=O);return le&&an(d,z),E}for(S=r(d,S);!O.done;z++,O=p.next())O=y(S,d,z,O.value,w),O!==null&&(e&&O.alternate!==null&&S.delete(O.key===null?z:O.key),u=o(O,u,z),_===null?E=O:_.sibling=O,_=O);return e&&S.forEach(function(A){return t(d,A)}),le&&an(d,z),E}function C(d,u,p,w){if(typeof p=="object"&&p!==null&&p.type===jn&&p.key===null&&(p=p.props.children),typeof p=="object"&&p!==null){switch(p.$$typeof){case ri:e:{for(var E=p.key,_=u;_!==null;){if(_.key===E){if(E=p.type,E===jn){if(_.tag===7){n(d,_.sibling),u=i(_,p.props.children),u.return=d,d=u;break e}}else if(_.elementType===E||typeof E=="object"&&E!==null&&E.$$typeof===$t&&Bs(E)===_.type){n(d,_.sibling),u=i(_,p.props),u.ref=ar(d,_,p),u.return=d,d=u;break e}n(d,_);break}else t(d,_);_=_.sibling}p.type===jn?(u=fn(p.props.children,d.mode,w,p.key),u.return=d,d=u):(w=Ri(p.type,p.key,p.props,null,d.mode,w),w.ref=ar(d,u,p),w.return=d,d=w)}return l(d);case _n:e:{for(_=p.key;u!==null;){if(u.key===_)if(u.tag===4&&u.stateNode.containerInfo===p.containerInfo&&u.stateNode.implementation===p.implementation){n(d,u.sibling),u=i(u,p.children||[]),u.return=d,d=u;break e}else{n(d,u);break}else t(d,u);u=u.sibling}u=nl(p,d.mode,w),u.return=d,d=u}return l(d);case $t:return _=p._init,C(d,u,_(p._payload),w)}if(hr(p))return f(d,u,p,w);if(nr(p))return h(d,u,p,w);hi(d,p)}return typeof p=="string"&&p!==""||typeof p=="number"?(p=""+p,u!==null&&u.tag===6?(n(d,u.sibling),u=i(u,p),u.return=d,d=u):(n(d,u),u=tl(p,d.mode,w),u.return=d,d=u),l(d)):n(d,u)}return C}var Yn=Yc(!0),Kc=Yc(!1),qr={},Ct=nn(qr),$r=nn(qr),Fr=nn(qr);function dn(e){if(e===qr)throw Error(P(174));return e}function Ra(e,t){switch(re(Fr,t),re($r,e),re(Ct,qr),e=t.nodeType,e){case 9:case 11:t=(t=t.documentElement)?t.namespaceURI:xl(null,"");break;default:e=e===8?t.parentNode:t,t=e.namespaceURI||null,e=e.tagName,t=xl(t,e)}oe(Ct),re(Ct,t)}function Kn(){oe(Ct),oe($r),oe(Fr)}function Xc(e){dn(Fr.current);var t=dn(Ct.current),n=xl(t,e.type);t!==n&&(re($r,e),re(Ct,n))}function La(e){$r.current===e&&(oe(Ct),oe($r))}var ae=nn(0);function qi(e){for(var t=e;t!==null;){if(t.tag===13){var n=t.memoizedState;if(n!==null&&(n=n.dehydrated,n===null||n.data==="$?"||n.data==="$!"))return t}else if(t.tag===19&&t.memoizedProps.revealOrder!==void 0){if(t.flags&128)return t}else if(t.child!==null){t.child.return=t,t=t.child;continue}if(t===e)break;for(;t.sibling===null;){if(t.return===null||t.return===e)return null;t=t.return}t.sibling.return=t.return,t=t.sibling}return null}var Xo=[];function Na(){for(var e=0;e<Xo.length;e++)Xo[e]._workInProgressVersionPrimary=null;Xo.length=0}var zi=It.ReactCurrentDispatcher,Go=It.ReactCurrentBatchConfig,gn=0,se=null,ge=null,we=null,eo=!1,Er=!1,Wr=0,mh=0;function je(){throw Error(P(321))}function Ia(e,t){if(t===null)return!1;for(var n=0;n<t.length&&n<e.length;n++)if(!xt(e[n],t[n]))return!1;return!0}function Da(e,t,n,r,i,o){if(gn=o,se=t,t.memoizedState=null,t.updateQueue=null,t.lanes=0,zi.current=e===null||e.memoizedState===null?yh:wh,e=n(r,i),Er){o=0;do{if(Er=!1,Wr=0,25<=o)throw Error(P(301));o+=1,we=ge=null,t.updateQueue=null,zi.current=kh,e=n(r,i)}while(Er)}if(zi.current=to,t=ge!==null&&ge.next!==null,gn=0,we=ge=se=null,eo=!1,t)throw Error(P(300));return e}function Aa(){var e=Wr!==0;return Wr=0,e}function yt(){var e={memoizedState:null,baseState:null,baseQueue:null,queue:null,next:null};return we===null?se.memoizedState=we=e:we=we.next=e,we}function st(){if(ge===null){var e=se.alternate;e=e!==null?e.memoizedState:null}else e=ge.next;var t=we===null?se.memoizedState:we.next;if(t!==null)we=t,ge=e;else{if(e===null)throw Error(P(310));ge=e,e={memoizedState:ge.memoizedState,baseState:ge.baseState,baseQueue:ge.baseQueue,queue:ge.queue,next:null},we===null?se.memoizedState=we=e:we=we.next=e}return we}function Ur(e,t){return typeof t=="function"?t(e):t}function Zo(e){var t=st(),n=t.queue;if(n===null)throw Error(P(311));n.lastRenderedReducer=e;var r=ge,i=r.baseQueue,o=n.pending;if(o!==null){if(i!==null){var l=i.next;i.next=o.next,o.next=l}r.baseQueue=i=o,n.pending=null}if(i!==null){o=i.next,r=r.baseState;var s=l=null,a=null,c=o;do{var g=c.lane;if((gn&g)===g)a!==null&&(a=a.next={lane:0,action:c.action,hasEagerState:c.hasEagerState,eagerState:c.eagerState,next:null}),r=c.hasEagerState?c.eagerState:e(r,c.action);else{var x={lane:g,action:c.action,hasEagerState:c.hasEagerState,eagerState:c.eagerState,next:null};a===null?(s=a=x,l=r):a=a.next=x,se.lanes|=g,xn|=g}c=c.next}while(c!==null&&c!==o);a===null?l=r:a.next=s,xt(r,t.memoizedState)||(We=!0),t.memoizedState=r,t.baseState=l,t.baseQueue=a,n.lastRenderedState=r}if(e=n.interleaved,e!==null){i=e;do o=i.lane,se.lanes|=o,xn|=o,i=i.next;while(i!==e)}else i===null&&(n.lanes=0);return[t.memoizedState,n.dispatch]}function Jo(e){var t=st(),n=t.queue;if(n===null)throw Error(P(311));n.lastRenderedReducer=e;var r=n.dispatch,i=n.pending,o=t.memoizedState;if(i!==null){n.pending=null;var l=i=i.next;do o=e(o,l.action),l=l.next;while(l!==i);xt(o,t.memoizedState)||(We=!0),t.memoizedState=o,t.baseQueue===null&&(t.baseState=o),n.lastRenderedState=o}return[o,r]}function Gc(){}function Zc(e,t){var n=se,r=st(),i=t(),o=!xt(r.memoizedState,i);if(o&&(r.memoizedState=i,We=!0),r=r.queue,$a(ed.bind(null,n,r,e),[e]),r.getSnapshot!==t||o||we!==null&&we.memoizedState.tag&1){if(n.flags|=2048,Vr(9,qc.bind(null,n,r,i,t),void 0,null),ke===null)throw Error(P(349));gn&30||Jc(n,t,i)}return i}function Jc(e,t,n){e.flags|=16384,e={getSnapshot:t,value:n},t=se.updateQueue,t===null?(t={lastEffect:null,stores:null},se.updateQueue=t,t.stores=[e]):(n=t.stores,n===null?t.stores=[e]:n.push(e))}function qc(e,t,n,r){t.value=n,t.getSnapshot=r,td(t)&&nd(e)}function ed(e,t,n){return n(function(){td(t)&&nd(e)})}function td(e){var t=e.getSnapshot;e=e.value;try{var n=t();return!xt(e,n)}catch{return!0}}function nd(e){var t=Lt(e,1);t!==null&&gt(t,e,1,-1)}function Qs(e){var t=yt();return typeof e=="function"&&(e=e()),t.memoizedState=t.baseState=e,e={pending:null,interleaved:null,lanes:0,dispatch:null,lastRenderedReducer:Ur,lastRenderedState:e},t.queue=e,e=e.dispatch=vh.bind(null,se,e),[t.memoizedState,e]}function Vr(e,t,n,r){return e={tag:e,create:t,destroy:n,deps:r,next:null},t=se.updateQueue,t===null?(t={lastEffect:null,stores:null},se.updateQueue=t,t.lastEffect=e.next=e):(n=t.lastEffect,n===null?t.lastEffect=e.next=e:(r=n.next,n.next=e,e.next=r,t.lastEffect=e)),e}function rd(){return st().memoizedState}function Ti(e,t,n,r){var i=yt();se.flags|=e,i.memoizedState=Vr(1|t,n,void 0,r===void 0?null:r)}function vo(e,t,n,r){var i=st();r=r===void 0?null:r;var o=void 0;if(ge!==null){var l=ge.memoizedState;if(o=l.destroy,r!==null&&Ia(r,l.deps)){i.memoizedState=Vr(t,n,o,r);return}}se.flags|=e,i.memoizedState=Vr(1|t,n,o,r)}function Ys(e,t){return Ti(8390656,8,e,t)}function $a(e,t){return vo(2048,8,e,t)}function id(e,t){return vo(4,2,e,t)}function od(e,t){return vo(4,4,e,t)}function ld(e,t){if(typeof t=="function")return e=e(),t(e),function(){t(null)};if(t!=null)return e=e(),t.current=e,function(){t.current=null}}function ad(e,t,n){return n=n!=null?n.concat([e]):null,vo(4,4,ld.bind(null,t,e),n)}function Fa(){}function sd(e,t){var n=st();t=t===void 0?null:t;var r=n.memoizedState;return r!==null&&t!==null&&Ia(t,r[1])?r[0]:(n.memoizedState=[e,t],e)}function ud(e,t){var n=st();t=t===void 0?null:t;var r=n.memoizedState;return r!==null&&t!==null&&Ia(t,r[1])?r[0]:(e=e(),n.memoizedState=[e,t],e)}function cd(e,t,n){return gn&21?(xt(n,t)||(n=fc(),se.lanes|=n,xn|=n,e.baseState=!0),t):(e.baseState&&(e.baseState=!1,We=!0),e.memoizedState=n)}function gh(e,t){var n=ee;ee=n!==0&&4>n?n:4,e(!0);var r=Go.transition;Go.transition={};try{e(!1),t()}finally{ee=n,Go.transition=r}}function dd(){return st().memoizedState}function xh(e,t,n){var r=Zt(e);if(n={lane:r,action:n,hasEagerState:!1,eagerState:null,next:null},pd(e))fd(t,n);else if(n=Vc(e,t,n,r),n!==null){var i=Le();gt(n,e,r,i),hd(n,t,r)}}function vh(e,t,n){var r=Zt(e),i={lane:r,action:n,hasEagerState:!1,eagerState:null,next:null};if(pd(e))fd(t,i);else{var o=e.alternate;if(e.lanes===0&&(o===null||o.lanes===0)&&(o=t.lastRenderedReducer,o!==null))try{var l=t.lastRenderedState,s=o(l,n);if(i.hasEagerState=!0,i.eagerState=s,xt(s,l)){var a=t.interleaved;a===null?(i.next=i,ba(t)):(i.next=a.next,a.next=i),t.interleaved=i;return}}catch{}finally{}n=Vc(e,t,i,r),n!==null&&(i=Le(),gt(n,e,r,i),hd(n,t,r))}}function pd(e){var t=e.alternate;return e===se||t!==null&&t===se}function fd(e,t){Er=eo=!0;var n=e.pending;n===null?t.next=t:(t.next=n.next,n.next=t),e.pending=t}function hd(e,t,n){if(n&4194240){var r=t.lanes;r&=e.pendingLanes,n|=r,t.lanes=n,xa(e,n)}}var to={readContext:at,useCallback:je,useContext:je,useEffect:je,useImperativeHandle:je,useInsertionEffect:je,useLayoutEffect:je,useMemo:je,useReducer:je,useRef:je,useState:je,useDebugValue:je,useDeferredValue:je,useTransition:je,useMutableSource:je,useSyncExternalStore:je,useId:je,unstable_isNewReconciler:!1},yh={readContext:at,useCallback:function(e,t){return yt().memoizedState=[e,t===void 0?null:t],e},useContext:at,useEffect:Ys,useImperativeHandle:function(e,t,n){return n=n!=null?n.concat([e]):null,Ti(4194308,4,ld.bind(null,t,e),n)},useLayoutEffect:function(e,t){return Ti(4194308,4,e,t)},useInsertionEffect:function(e,t){return Ti(4,2,e,t)},useMemo:function(e,t){var n=yt();return t=t===void 0?null:t,e=e(),n.memoizedState=[e,t],e},useReducer:function(e,t,n){var r=yt();return t=n!==void 0?n(t):t,r.memoizedState=r.baseState=t,e={pending:null,interleaved:null,lanes:0,dispatch:null,lastRenderedReducer:e,lastRenderedState:t},r.queue=e,e=e.dispatch=xh.bind(null,se,e),[r.memoizedState,e]},useRef:function(e){var t=yt();return e={current:e},t.memoizedState=e},useState:Qs,useDebugValue:Fa,useDeferredValue:function(e){return yt().memoizedState=e},useTransition:function(){var e=Qs(!1),t=e[0];return e=gh.bind(null,e[1]),yt().memoizedState=e,[t,e]},useMutableSource:function(){},useSyncExternalStore:function(e,t,n){var r=se,i=yt();if(le){if(n===void 0)throw Error(P(407));n=n()}else{if(n=t(),ke===null)throw Error(P(349));gn&30||Jc(r,t,n)}i.memoizedState=n;var o={value:n,getSnapshot:t};return i.queue=o,Ys(ed.bind(null,r,o,e),[e]),r.flags|=2048,Vr(9,qc.bind(null,r,o,n,t),void 0,null),n},useId:function(){var e=yt(),t=ke.identifierPrefix;if(le){var n=Ot,r=Tt;n=(r&~(1<<32-mt(r)-1)).toString(32)+n,t=":"+t+"R"+n,n=Wr++,0<n&&(t+="H"+n.toString(32)),t+=":"}else n=mh++,t=":"+t+"r"+n.toString(32)+":";return e.memoizedState=t},unstable_isNewReconciler:!1},wh={readContext:at,useCallback:sd,useContext:at,useEffect:$a,useImperativeHandle:ad,useInsertionEffect:id,useLayoutEffect:od,useMemo:ud,useReducer:Zo,useRef:rd,useState:function(){return Zo(Ur)},useDebugValue:Fa,useDeferredValue:function(e){var t=st();return cd(t,ge.memoizedState,e)},useTransition:function(){var e=Zo(Ur)[0],t=st().memoizedState;return[e,t]},useMutableSource:Gc,useSyncExternalStore:Zc,useId:dd,unstable_isNewReconciler:!1},kh={readContext:at,useCallback:sd,useContext:at,useEffect:$a,useImperativeHandle:ad,useInsertionEffect:id,useLayoutEffect:od,useMemo:ud,useReducer:Jo,useRef:rd,useState:function(){return Jo(Ur)},useDebugValue:Fa,useDeferredValue:function(e){var t=st();return ge===null?t.memoizedState=e:cd(t,ge.memoizedState,e)},useTransition:function(){var e=Jo(Ur)[0],t=st().memoizedState;return[e,t]},useMutableSource:Gc,useSyncExternalStore:Zc,useId:dd,unstable_isNewReconciler:!1};function Xn(e,t){try{var n="",r=t;do n+=Kp(r),r=r.return;while(r);var i=n}catch(o){i=`
Error generating stack: `+o.message+`
`+o.stack}return{value:e,source:t,stack:i,digest:null}}function qo(e,t,n){return{value:e,source:null,stack:n??null,digest:t??null}}function Fl(e,t){try{console.error(t.value)}catch(n){setTimeout(function(){throw n})}}var Sh=typeof WeakMap=="function"?WeakMap:Map;function md(e,t,n){n=bt(-1,n),n.tag=3,n.payload={element:null};var r=t.value;return n.callback=function(){ro||(ro=!0,Gl=r),Fl(e,t)},n}function gd(e,t,n){n=bt(-1,n),n.tag=3;var r=e.type.getDerivedStateFromError;if(typeof r=="function"){var i=t.value;n.payload=function(){return r(i)},n.callback=function(){Fl(e,t)}}var o=e.stateNode;return o!==null&&typeof o.componentDidCatch=="function"&&(n.callback=function(){Fl(e,t),typeof r!="function"&&(Gt===null?Gt=new Set([this]):Gt.add(this));var l=t.stack;this.componentDidCatch(t.value,{componentStack:l!==null?l:""})}),n}function Ks(e,t,n){var r=e.pingCache;if(r===null){r=e.pingCache=new Sh;var i=new Set;r.set(t,i)}else i=r.get(t),i===void 0&&(i=new Set,r.set(t,i));i.has(n)||(i.add(n),e=Ih.bind(null,e,t,n),t.then(e,e))}function Xs(e){do{var t;if((t=e.tag===13)&&(t=e.memoizedState,t=t!==null?t.dehydrated!==null:!0),t)return e;e=e.return}while(e!==null);return null}function Gs(e,t,n,r,i){return e.mode&1?(e.flags|=65536,e.lanes=i,e):(e===t?e.flags|=65536:(e.flags|=128,n.flags|=131072,n.flags&=-52805,n.tag===1&&(n.alternate===null?n.tag=17:(t=bt(-1,1),t.tag=2,Xt(n,t,1))),n.lanes|=1),e)}var Eh=It.ReactCurrentOwner,We=!1;function Me(e,t,n,r){t.child=e===null?Kc(t,null,n,r):Yn(t,e.child,n,r)}function Zs(e,t,n,r,i){n=n.render;var o=t.ref;return Wn(t,i),r=Da(e,t,n,r,o,i),n=Aa(),e!==null&&!We?(t.updateQueue=e.updateQueue,t.flags&=-2053,e.lanes&=~i,Nt(e,t,i)):(le&&n&&_a(t),t.flags|=1,Me(e,t,r,i),t.child)}function Js(e,t,n,r,i){if(e===null){var o=n.type;return typeof o=="function"&&!Ka(o)&&o.defaultProps===void 0&&n.compare===null&&n.defaultProps===void 0?(t.tag=15,t.type=o,xd(e,t,o,r,i)):(e=Ri(n.type,null,r,t,t.mode,i),e.ref=t.ref,e.return=t,t.child=e)}if(o=e.child,!(e.lanes&i)){var l=o.memoizedProps;if(n=n.compare,n=n!==null?n:Nr,n(l,r)&&e.ref===t.ref)return Nt(e,t,i)}return t.flags|=1,e=Jt(o,r),e.ref=t.ref,e.return=t,t.child=e}function xd(e,t,n,r,i){if(e!==null){var o=e.memoizedProps;if(Nr(o,r)&&e.ref===t.ref)if(We=!1,t.pendingProps=r=o,(e.lanes&i)!==0)e.flags&131072&&(We=!0);else return t.lanes=e.lanes,Nt(e,t,i)}return Wl(e,t,n,r,i)}function vd(e,t,n){var r=t.pendingProps,i=r.children,o=e!==null?e.memoizedState:null;if(r.mode==="hidden")if(!(t.mode&1))t.memoizedState={baseLanes:0,cachePool:null,transitions:null},re(In,Ke),Ke|=n;else{if(!(n&1073741824))return e=o!==null?o.baseLanes|n:n,t.lanes=t.childLanes=1073741824,t.memoizedState={baseLanes:e,cachePool:null,transitions:null},t.updateQueue=null,re(In,Ke),Ke|=e,null;t.memoizedState={baseLanes:0,cachePool:null,transitions:null},r=o!==null?o.baseLanes:n,re(In,Ke),Ke|=r}else o!==null?(r=o.baseLanes|n,t.memoizedState=null):r=n,re(In,Ke),Ke|=r;return Me(e,t,i,n),t.child}function yd(e,t){var n=t.ref;(e===null&&n!==null||e!==null&&e.ref!==n)&&(t.flags|=512,t.flags|=2097152)}function Wl(e,t,n,r,i){var o=Ve(n)?hn:Oe.current;return o=Bn(t,o),Wn(t,i),n=Da(e,t,n,r,o,i),r=Aa(),e!==null&&!We?(t.updateQueue=e.updateQueue,t.flags&=-2053,e.lanes&=~i,Nt(e,t,i)):(le&&r&&_a(t),t.flags|=1,Me(e,t,n,i),t.child)}function qs(e,t,n,r,i){if(Ve(n)){var o=!0;Yi(t)}else o=!1;if(Wn(t,i),t.stateNode===null)Oi(e,t),Qc(t,n,r),$l(t,n,r,i),r=!0;else if(e===null){var l=t.stateNode,s=t.memoizedProps;l.props=s;var a=l.context,c=n.contextType;typeof c=="object"&&c!==null?c=at(c):(c=Ve(n)?hn:Oe.current,c=Bn(t,c));var g=n.getDerivedStateFromProps,x=typeof g=="function"||typeof l.getSnapshotBeforeUpdate=="function";x||typeof l.UNSAFE_componentWillReceiveProps!="function"&&typeof l.componentWillReceiveProps!="function"||(s!==r||a!==c)&&Hs(t,l,r,c),Ft=!1;var m=t.memoizedState;l.state=m,Ji(t,r,l,i),a=t.memoizedState,s!==r||m!==a||Ue.current||Ft?(typeof g=="function"&&(Al(t,n,g,r),a=t.memoizedState),(s=Ft||Vs(t,n,s,r,m,a,c))?(x||typeof l.UNSAFE_componentWillMount!="function"&&typeof l.componentWillMount!="function"||(typeof l.componentWillMount=="function"&&l.componentWillMount(),typeof l.UNSAFE_componentWillMount=="function"&&l.UNSAFE_componentWillMount()),typeof l.componentDidMount=="function"&&(t.flags|=4194308)):(typeof l.componentDidMount=="function"&&(t.flags|=4194308),t.memoizedProps=r,t.memoizedState=a),l.props=r,l.state=a,l.context=c,r=s):(typeof l.componentDidMount=="function"&&(t.flags|=4194308),r=!1)}else{l=t.stateNode,Hc(e,t),s=t.memoizedProps,c=t.type===t.elementType?s:dt(t.type,s),l.props=c,x=t.pendingProps,m=l.context,a=n.contextType,typeof a=="object"&&a!==null?a=at(a):(a=Ve(n)?hn:Oe.current,a=Bn(t,a));var y=n.getDerivedStateFromProps;(g=typeof y=="function"||typeof l.getSnapshotBeforeUpdate=="function")||typeof l.UNSAFE_componentWillReceiveProps!="function"&&typeof l.componentWillReceiveProps!="function"||(s!==x||m!==a)&&Hs(t,l,r,a),Ft=!1,m=t.memoizedState,l.state=m,Ji(t,r,l,i);var f=t.memoizedState;s!==x||m!==f||Ue.current||Ft?(typeof y=="function"&&(Al(t,n,y,r),f=t.memoizedState),(c=Ft||Vs(t,n,c,r,m,f,a)||!1)?(g||typeof l.UNSAFE_componentWillUpdate!="function"&&typeof l.componentWillUpdate!="function"||(typeof l.componentWillUpdate=="function"&&l.componentWillUpdate(r,f,a),typeof l.UNSAFE_componentWillUpdate=="function"&&l.UNSAFE_componentWillUpdate(r,f,a)),typeof l.componentDidUpdate=="function"&&(t.flags|=4),typeof l.getSnapshotBeforeUpdate=="function"&&(t.flags|=1024)):(typeof l.componentDidUpdate!="function"||s===e.memoizedProps&&m===e.memoizedState||(t.flags|=4),typeof l.getSnapshotBeforeUpdate!="function"||s===e.memoizedProps&&m===e.memoizedState||(t.flags|=1024),t.memoizedProps=r,t.memoizedState=f),l.props=r,l.state=f,l.context=a,r=c):(typeof l.componentDidUpdate!="function"||s===e.memoizedProps&&m===e.memoizedState||(t.flags|=4),typeof l.getSnapshotBeforeUpdate!="function"||s===e.memoizedProps&&m===e.memoizedState||(t.flags|=1024),r=!1)}return Ul(e,t,n,r,o,i)}function Ul(e,t,n,r,i,o){yd(e,t);var l=(t.flags&128)!==0;if(!r&&!l)return i&&As(t,n,!1),Nt(e,t,o);r=t.stateNode,Eh.current=t;var s=l&&typeof n.getDerivedStateFromError!="function"?null:r.render();return t.flags|=1,e!==null&&l?(t.child=Yn(t,e.child,null,o),t.child=Yn(t,null,s,o)):Me(e,t,s,o),t.memoizedState=r.state,i&&As(t,n,!0),t.child}function wd(e){var t=e.stateNode;t.pendingContext?Ds(e,t.pendingContext,t.pendingContext!==t.context):t.context&&Ds(e,t.context,!1),Ra(e,t.containerInfo)}function eu(e,t,n,r,i){return Qn(),Pa(i),t.flags|=256,Me(e,t,n,r),t.child}var Vl={dehydrated:null,treeContext:null,retryLane:0};function Hl(e){return{baseLanes:e,cachePool:null,transitions:null}}function kd(e,t,n){var r=t.pendingProps,i=ae.current,o=!1,l=(t.flags&128)!==0,s;if((s=l)||(s=e!==null&&e.memoizedState===null?!1:(i&2)!==0),s?(o=!0,t.flags&=-129):(e===null||e.memoizedState!==null)&&(i|=1),re(ae,i&1),e===null)return Il(t),e=t.memoizedState,e!==null&&(e=e.dehydrated,e!==null)?(t.mode&1?e.data==="$!"?t.lanes=8:t.lanes=1073741824:t.lanes=1,null):(l=r.children,e=r.fallback,o?(r=t.mode,o=t.child,l={mode:"hidden",children:l},!(r&1)&&o!==null?(o.childLanes=0,o.pendingProps=l):o=ko(l,r,0,null),e=fn(e,r,n,null),o.return=t,e.return=t,o.sibling=e,t.child=o,t.child.memoizedState=Hl(n),t.memoizedState=Vl,e):Wa(t,l));if(i=e.memoizedState,i!==null&&(s=i.dehydrated,s!==null))return Ch(e,t,l,r,s,i,n);if(o){o=r.fallback,l=t.mode,i=e.child,s=i.sibling;var a={mode:"hidden",children:r.children};return!(l&1)&&t.child!==i?(r=t.child,r.childLanes=0,r.pendingProps=a,t.deletions=null):(r=Jt(i,a),r.subtreeFlags=i.subtreeFlags&14680064),s!==null?o=Jt(s,o):(o=fn(o,l,n,null),o.flags|=2),o.return=t,r.return=t,r.sibling=o,t.child=r,r=o,o=t.child,l=e.child.memoizedState,l=l===null?Hl(n):{baseLanes:l.baseLanes|n,cachePool:null,transitions:l.transitions},o.memoizedState=l,o.childLanes=e.childLanes&~n,t.memoizedState=Vl,r}return o=e.child,e=o.sibling,r=Jt(o,{mode:"visible",children:r.children}),!(t.mode&1)&&(r.lanes=n),r.return=t,r.sibling=null,e!==null&&(n=t.deletions,n===null?(t.deletions=[e],t.flags|=16):n.push(e)),t.child=r,t.memoizedState=null,r}function Wa(e,t){return t=ko({mode:"visible",children:t},e.mode,0,null),t.return=e,e.child=t}function mi(e,t,n,r){return r!==null&&Pa(r),Yn(t,e.child,null,n),e=Wa(t,t.pendingProps.children),e.flags|=2,t.memoizedState=null,e}function Ch(e,t,n,r,i,o,l){if(n)return t.flags&256?(t.flags&=-257,r=qo(Error(P(422))),mi(e,t,l,r)):t.memoizedState!==null?(t.child=e.child,t.flags|=128,null):(o=r.fallback,i=t.mode,r=ko({mode:"visible",children:r.children},i,0,null),o=fn(o,i,l,null),o.flags|=2,r.return=t,o.return=t,r.sibling=o,t.child=r,t.mode&1&&Yn(t,e.child,null,l),t.child.memoizedState=Hl(l),t.memoizedState=Vl,o);if(!(t.mode&1))return mi(e,t,l,null);if(i.data==="$!"){if(r=i.nextSibling&&i.nextSibling.dataset,r)var s=r.dgst;return r=s,o=Error(P(419)),r=qo(o,r,void 0),mi(e,t,l,r)}if(s=(l&e.childLanes)!==0,We||s){if(r=ke,r!==null){switch(l&-l){case 4:i=2;break;case 16:i=8;break;case 64:case 128:case 256:case 512:case 1024:case 2048:case 4096:case 8192:case 16384:case 32768:case 65536:case 131072:case 262144:case 524288:case 1048576:case 2097152:case 4194304:case 8388608:case 16777216:case 33554432:case 67108864:i=32;break;case 536870912:i=268435456;break;default:i=0}i=i&(r.suspendedLanes|l)?0:i,i!==0&&i!==o.retryLane&&(o.retryLane=i,Lt(e,i),gt(r,e,i,-1))}return Ya(),r=qo(Error(P(421))),mi(e,t,l,r)}return i.data==="$?"?(t.flags|=128,t.child=e.child,t=Dh.bind(null,e),i._reactRetry=t,null):(e=o.treeContext,Xe=Kt(i.nextSibling),Ge=t,le=!0,ht=null,e!==null&&(rt[it++]=Tt,rt[it++]=Ot,rt[it++]=mn,Tt=e.id,Ot=e.overflow,mn=t),t=Wa(t,r.children),t.flags|=4096,t)}function tu(e,t,n){e.lanes|=t;var r=e.alternate;r!==null&&(r.lanes|=t),Dl(e.return,t,n)}function el(e,t,n,r,i){var o=e.memoizedState;o===null?e.memoizedState={isBackwards:t,rendering:null,renderingStartTime:0,last:r,tail:n,tailMode:i}:(o.isBackwards=t,o.rendering=null,o.renderingStartTime=0,o.last=r,o.tail=n,o.tailMode=i)}function Sd(e,t,n){var r=t.pendingProps,i=r.revealOrder,o=r.tail;if(Me(e,t,r.children,n),r=ae.current,r&2)r=r&1|2,t.flags|=128;else{if(e!==null&&e.flags&128)e:for(e=t.child;e!==null;){if(e.tag===13)e.memoizedState!==null&&tu(e,n,t);else if(e.tag===19)tu(e,n,t);else if(e.child!==null){e.child.return=e,e=e.child;continue}if(e===t)break e;for(;e.sibling===null;){if(e.return===null||e.return===t)break e;e=e.return}e.sibling.return=e.return,e=e.sibling}r&=1}if(re(ae,r),!(t.mode&1))t.memoizedState=null;else switch(i){case"forwards":for(n=t.child,i=null;n!==null;)e=n.alternate,e!==null&&qi(e)===null&&(i=n),n=n.sibling;n=i,n===null?(i=t.child,t.child=null):(i=n.sibling,n.sibling=null),el(t,!1,i,n,o);break;case"backwards":for(n=null,i=t.child,t.child=null;i!==null;){if(e=i.alternate,e!==null&&qi(e)===null){t.child=i;break}e=i.sibling,i.sibling=n,n=i,i=e}el(t,!0,n,null,o);break;case"together":el(t,!1,null,null,void 0);break;default:t.memoizedState=null}return t.child}function Oi(e,t){!(t.mode&1)&&e!==null&&(e.alternate=null,t.alternate=null,t.flags|=2)}function Nt(e,t,n){if(e!==null&&(t.dependencies=e.dependencies),xn|=t.lanes,!(n&t.childLanes))return null;if(e!==null&&t.child!==e.child)throw Error(P(153));if(t.child!==null){for(e=t.child,n=Jt(e,e.pendingProps),t.child=n,n.return=t;e.sibling!==null;)e=e.sibling,n=n.sibling=Jt(e,e.pendingProps),n.return=t;n.sibling=null}return t.child}function _h(e,t,n){switch(t.tag){case 3:wd(t),Qn();break;case 5:Xc(t);break;case 1:Ve(t.type)&&Yi(t);break;case 4:Ra(t,t.stateNode.containerInfo);break;case 10:var r=t.type._context,i=t.memoizedProps.value;re(Gi,r._currentValue),r._currentValue=i;break;case 13:if(r=t.memoizedState,r!==null)return r.dehydrated!==null?(re(ae,ae.current&1),t.flags|=128,null):n&t.child.childLanes?kd(e,t,n):(re(ae,ae.current&1),e=Nt(e,t,n),e!==null?e.sibling:null);re(ae,ae.current&1);break;case 19:if(r=(n&t.childLanes)!==0,e.flags&128){if(r)return Sd(e,t,n);t.flags|=128}if(i=t.memoizedState,i!==null&&(i.rendering=null,i.tail=null,i.lastEffect=null),re(ae,ae.current),r)break;return null;case 22:case 23:return t.lanes=0,vd(e,t,n)}return Nt(e,t,n)}var Ed,Bl,Cd,_d;Ed=function(e,t){for(var n=t.child;n!==null;){if(n.tag===5||n.tag===6)e.appendChild(n.stateNode);else if(n.tag!==4&&n.child!==null){n.child.return=n,n=n.child;continue}if(n===t)break;for(;n.sibling===null;){if(n.return===null||n.return===t)return;n=n.return}n.sibling.return=n.return,n=n.sibling}};Bl=function(){};Cd=function(e,t,n,r){var i=e.memoizedProps;if(i!==r){e=t.stateNode,dn(Ct.current);var o=null;switch(n){case"input":i=fl(e,i),r=fl(e,r),o=[];break;case"select":i=ue({},i,{value:void 0}),r=ue({},r,{value:void 0}),o=[];break;case"textarea":i=gl(e,i),r=gl(e,r),o=[];break;default:typeof i.onClick!="function"&&typeof r.onClick=="function"&&(e.onclick=Bi)}vl(n,r);var l;n=null;for(c in i)if(!r.hasOwnProperty(c)&&i.hasOwnProperty(c)&&i[c]!=null)if(c==="style"){var s=i[c];for(l in s)s.hasOwnProperty(l)&&(n||(n={}),n[l]="")}else c!=="dangerouslySetInnerHTML"&&c!=="children"&&c!=="suppressContentEditableWarning"&&c!=="suppressHydrationWarning"&&c!=="autoFocus"&&(zr.hasOwnProperty(c)?o||(o=[]):(o=o||[]).push(c,null));for(c in r){var a=r[c];if(s=i!=null?i[c]:void 0,r.hasOwnProperty(c)&&a!==s&&(a!=null||s!=null))if(c==="style")if(s){for(l in s)!s.hasOwnProperty(l)||a&&a.hasOwnProperty(l)||(n||(n={}),n[l]="");for(l in a)a.hasOwnProperty(l)&&s[l]!==a[l]&&(n||(n={}),n[l]=a[l])}else n||(o||(o=[]),o.push(c,n)),n=a;else c==="dangerouslySetInnerHTML"?(a=a?a.__html:void 0,s=s?s.__html:void 0,a!=null&&s!==a&&(o=o||[]).push(c,a)):c==="children"?typeof a!="string"&&typeof a!="number"||(o=o||[]).push(c,""+a):c!=="suppressContentEditableWarning"&&c!=="suppressHydrationWarning"&&(zr.hasOwnProperty(c)?(a!=null&&c==="onScroll"&&ie("scroll",e),o||s===a||(o=[])):(o=o||[]).push(c,a))}n&&(o=o||[]).push("style",n);var c=o;(t.updateQueue=c)&&(t.flags|=4)}};_d=function(e,t,n,r){n!==r&&(t.flags|=4)};function sr(e,t){if(!le)switch(e.tailMode){case"hidden":t=e.tail;for(var n=null;t!==null;)t.alternate!==null&&(n=t),t=t.sibling;n===null?e.tail=null:n.sibling=null;break;case"collapsed":n=e.tail;for(var r=null;n!==null;)n.alternate!==null&&(r=n),n=n.sibling;r===null?t||e.tail===null?e.tail=null:e.tail.sibling=null:r.sibling=null}}function Pe(e){var t=e.alternate!==null&&e.alternate.child===e.child,n=0,r=0;if(t)for(var i=e.child;i!==null;)n|=i.lanes|i.childLanes,r|=i.subtreeFlags&14680064,r|=i.flags&14680064,i.return=e,i=i.sibling;else for(i=e.child;i!==null;)n|=i.lanes|i.childLanes,r|=i.subtreeFlags,r|=i.flags,i.return=e,i=i.sibling;return e.subtreeFlags|=r,e.childLanes=n,t}function jh(e,t,n){var r=t.pendingProps;switch(ja(t),t.tag){case 2:case 16:case 15:case 0:case 11:case 7:case 8:case 12:case 9:case 14:return Pe(t),null;case 1:return Ve(t.type)&&Qi(),Pe(t),null;case 3:return r=t.stateNode,Kn(),oe(Ue),oe(Oe),Na(),r.pendingContext&&(r.context=r.pendingContext,r.pendingContext=null),(e===null||e.child===null)&&(fi(t)?t.flags|=4:e===null||e.memoizedState.isDehydrated&&!(t.flags&256)||(t.flags|=1024,ht!==null&&(ql(ht),ht=null))),Bl(e,t),Pe(t),null;case 5:La(t);var i=dn(Fr.current);if(n=t.type,e!==null&&t.stateNode!=null)Cd(e,t,n,r,i),e.ref!==t.ref&&(t.flags|=512,t.flags|=2097152);else{if(!r){if(t.stateNode===null)throw Error(P(166));return Pe(t),null}if(e=dn(Ct.current),fi(t)){r=t.stateNode,n=t.type;var o=t.memoizedProps;switch(r[St]=t,r[Ar]=o,e=(t.mode&1)!==0,n){case"dialog":ie("cancel",r),ie("close",r);break;case"iframe":case"object":case"embed":ie("load",r);break;case"video":case"audio":for(i=0;i<gr.length;i++)ie(gr[i],r);break;case"source":ie("error",r);break;case"img":case"image":case"link":ie("error",r),ie("load",r);break;case"details":ie("toggle",r);break;case"input":cs(r,o),ie("invalid",r);break;case"select":r._wrapperState={wasMultiple:!!o.multiple},ie("invalid",r);break;case"textarea":ps(r,o),ie("invalid",r)}vl(n,o),i=null;for(var l in o)if(o.hasOwnProperty(l)){var s=o[l];l==="children"?typeof s=="string"?r.textContent!==s&&(o.suppressHydrationWarning!==!0&&pi(r.textContent,s,e),i=["children",s]):typeof s=="number"&&r.textContent!==""+s&&(o.suppressHydrationWarning!==!0&&pi(r.textContent,s,e),i=["children",""+s]):zr.hasOwnProperty(l)&&s!=null&&l==="onScroll"&&ie("scroll",r)}switch(n){case"input":ii(r),ds(r,o,!0);break;case"textarea":ii(r),fs(r);break;case"select":case"option":break;default:typeof o.onClick=="function"&&(r.onclick=Bi)}r=i,t.updateQueue=r,r!==null&&(t.flags|=4)}else{l=i.nodeType===9?i:i.ownerDocument,e==="http://www.w3.org/1999/xhtml"&&(e=Ju(n)),e==="http://www.w3.org/1999/xhtml"?n==="script"?(e=l.createElement("div"),e.innerHTML="<script><\/script>",e=e.removeChild(e.firstChild)):typeof r.is=="string"?e=l.createElement(n,{is:r.is}):(e=l.createElement(n),n==="select"&&(l=e,r.multiple?l.multiple=!0:r.size&&(l.size=r.size))):e=l.createElementNS(e,n),e[St]=t,e[Ar]=r,Ed(e,t,!1,!1),t.stateNode=e;e:{switch(l=yl(n,r),n){case"dialog":ie("cancel",e),ie("close",e),i=r;break;case"iframe":case"object":case"embed":ie("load",e),i=r;break;case"video":case"audio":for(i=0;i<gr.length;i++)ie(gr[i],e);i=r;break;case"source":ie("error",e),i=r;break;case"img":case"image":case"link":ie("error",e),ie("load",e),i=r;break;case"details":ie("toggle",e),i=r;break;case"input":cs(e,r),i=fl(e,r),ie("invalid",e);break;case"option":i=r;break;case"select":e._wrapperState={wasMultiple:!!r.multiple},i=ue({},r,{value:void 0}),ie("invalid",e);break;case"textarea":ps(e,r),i=gl(e,r),ie("invalid",e);break;default:i=r}vl(n,i),s=i;for(o in s)if(s.hasOwnProperty(o)){var a=s[o];o==="style"?tc(e,a):o==="dangerouslySetInnerHTML"?(a=a?a.__html:void 0,a!=null&&qu(e,a)):o==="children"?typeof a=="string"?(n!=="textarea"||a!=="")&&Tr(e,a):typeof a=="number"&&Tr(e,""+a):o!=="suppressContentEditableWarning"&&o!=="suppressHydrationWarning"&&o!=="autoFocus"&&(zr.hasOwnProperty(o)?a!=null&&o==="onScroll"&&ie("scroll",e):a!=null&&da(e,o,a,l))}switch(n){case"input":ii(e),ds(e,r,!1);break;case"textarea":ii(e),fs(e);break;case"option":r.value!=null&&e.setAttribute("value",""+qt(r.value));break;case"select":e.multiple=!!r.multiple,o=r.value,o!=null?Dn(e,!!r.multiple,o,!1):r.defaultValue!=null&&Dn(e,!!r.multiple,r.defaultValue,!0);break;default:typeof i.onClick=="function"&&(e.onclick=Bi)}switch(n){case"button":case"input":case"select":case"textarea":r=!!r.autoFocus;break e;case"img":r=!0;break e;default:r=!1}}r&&(t.flags|=4)}t.ref!==null&&(t.flags|=512,t.flags|=2097152)}return Pe(t),null;case 6:if(e&&t.stateNode!=null)_d(e,t,e.memoizedProps,r);else{if(typeof r!="string"&&t.stateNode===null)throw Error(P(166));if(n=dn(Fr.current),dn(Ct.current),fi(t)){if(r=t.stateNode,n=t.memoizedProps,r[St]=t,(o=r.nodeValue!==n)&&(e=Ge,e!==null))switch(e.tag){case 3:pi(r.nodeValue,n,(e.mode&1)!==0);break;case 5:e.memoizedProps.suppressHydrationWarning!==!0&&pi(r.nodeValue,n,(e.mode&1)!==0)}o&&(t.flags|=4)}else r=(n.nodeType===9?n:n.ownerDocument).createTextNode(r),r[St]=t,t.stateNode=r}return Pe(t),null;case 13:if(oe(ae),r=t.memoizedState,e===null||e.memoizedState!==null&&e.memoizedState.dehydrated!==null){if(le&&Xe!==null&&t.mode&1&&!(t.flags&128))Uc(),Qn(),t.flags|=98560,o=!1;else if(o=fi(t),r!==null&&r.dehydrated!==null){if(e===null){if(!o)throw Error(P(318));if(o=t.memoizedState,o=o!==null?o.dehydrated:null,!o)throw Error(P(317));o[St]=t}else Qn(),!(t.flags&128)&&(t.memoizedState=null),t.flags|=4;Pe(t),o=!1}else ht!==null&&(ql(ht),ht=null),o=!0;if(!o)return t.flags&65536?t:null}return t.flags&128?(t.lanes=n,t):(r=r!==null,r!==(e!==null&&e.memoizedState!==null)&&r&&(t.child.flags|=8192,t.mode&1&&(e===null||ae.current&1?xe===0&&(xe=3):Ya())),t.updateQueue!==null&&(t.flags|=4),Pe(t),null);case 4:return Kn(),Bl(e,t),e===null&&Ir(t.stateNode.containerInfo),Pe(t),null;case 10:return Oa(t.type._context),Pe(t),null;case 17:return Ve(t.type)&&Qi(),Pe(t),null;case 19:if(oe(ae),o=t.memoizedState,o===null)return Pe(t),null;if(r=(t.flags&128)!==0,l=o.rendering,l===null)if(r)sr(o,!1);else{if(xe!==0||e!==null&&e.flags&128)for(e=t.child;e!==null;){if(l=qi(e),l!==null){for(t.flags|=128,sr(o,!1),r=l.updateQueue,r!==null&&(t.updateQueue=r,t.flags|=4),t.subtreeFlags=0,r=n,n=t.child;n!==null;)o=n,e=r,o.flags&=14680066,l=o.alternate,l===null?(o.childLanes=0,o.lanes=e,o.child=null,o.subtreeFlags=0,o.memoizedProps=null,o.memoizedState=null,o.updateQueue=null,o.dependencies=null,o.stateNode=null):(o.childLanes=l.childLanes,o.lanes=l.lanes,o.child=l.child,o.subtreeFlags=0,o.deletions=null,o.memoizedProps=l.memoizedProps,o.memoizedState=l.memoizedState,o.updateQueue=l.updateQueue,o.type=l.type,e=l.dependencies,o.dependencies=e===null?null:{lanes:e.lanes,firstContext:e.firstContext}),n=n.sibling;return re(ae,ae.current&1|2),t.child}e=e.sibling}o.tail!==null&&pe()>Gn&&(t.flags|=128,r=!0,sr(o,!1),t.lanes=4194304)}else{if(!r)if(e=qi(l),e!==null){if(t.flags|=128,r=!0,n=e.updateQueue,n!==null&&(t.updateQueue=n,t.flags|=4),sr(o,!0),o.tail===null&&o.tailMode==="hidden"&&!l.alternate&&!le)return Pe(t),null}else 2*pe()-o.renderingStartTime>Gn&&n!==1073741824&&(t.flags|=128,r=!0,sr(o,!1),t.lanes=4194304);o.isBackwards?(l.sibling=t.child,t.child=l):(n=o.last,n!==null?n.sibling=l:t.child=l,o.last=l)}return o.tail!==null?(t=o.tail,o.rendering=t,o.tail=t.sibling,o.renderingStartTime=pe(),t.sibling=null,n=ae.current,re(ae,r?n&1|2:n&1),t):(Pe(t),null);case 22:case 23:return Qa(),r=t.memoizedState!==null,e!==null&&e.memoizedState!==null!==r&&(t.flags|=8192),r&&t.mode&1?Ke&1073741824&&(Pe(t),t.subtreeFlags&6&&(t.flags|=8192)):Pe(t),null;case 24:return null;case 25:return null}throw Error(P(156,t.tag))}function Ph(e,t){switch(ja(t),t.tag){case 1:return Ve(t.type)&&Qi(),e=t.flags,e&65536?(t.flags=e&-65537|128,t):null;case 3:return Kn(),oe(Ue),oe(Oe),Na(),e=t.flags,e&65536&&!(e&128)?(t.flags=e&-65537|128,t):null;case 5:return La(t),null;case 13:if(oe(ae),e=t.memoizedState,e!==null&&e.dehydrated!==null){if(t.alternate===null)throw Error(P(340));Qn()}return e=t.flags,e&65536?(t.flags=e&-65537|128,t):null;case 19:return oe(ae),null;case 4:return Kn(),null;case 10:return Oa(t.type._context),null;case 22:case 23:return Qa(),null;case 24:return null;default:return null}}var gi=!1,Te=!1,zh=typeof WeakSet=="function"?WeakSet:Set,R=null;function Nn(e,t){var n=e.ref;if(n!==null)if(typeof n=="function")try{n(null)}catch(r){de(e,t,r)}else n.current=null}function Ql(e,t,n){try{n()}catch(r){de(e,t,r)}}var nu=!1;function Th(e,t){if(Tl=Ui,e=Tc(),Ca(e)){if("selectionStart"in e)var n={start:e.selectionStart,end:e.selectionEnd};else e:{n=(n=e.ownerDocument)&&n.defaultView||window;var r=n.getSelection&&n.getSelection();if(r&&r.rangeCount!==0){n=r.anchorNode;var i=r.anchorOffset,o=r.focusNode;r=r.focusOffset;try{n.nodeType,o.nodeType}catch{n=null;break e}var l=0,s=-1,a=-1,c=0,g=0,x=e,m=null;t:for(;;){for(var y;x!==n||i!==0&&x.nodeType!==3||(s=l+i),x!==o||r!==0&&x.nodeType!==3||(a=l+r),x.nodeType===3&&(l+=x.nodeValue.length),(y=x.firstChild)!==null;)m=x,x=y;for(;;){if(x===e)break t;if(m===n&&++c===i&&(s=l),m===o&&++g===r&&(a=l),(y=x.nextSibling)!==null)break;x=m,m=x.parentNode}x=y}n=s===-1||a===-1?null:{start:s,end:a}}else n=null}n=n||{start:0,end:0}}else n=null;for(Ol={focusedElem:e,selectionRange:n},Ui=!1,R=t;R!==null;)if(t=R,e=t.child,(t.subtreeFlags&1028)!==0&&e!==null)e.return=t,R=e;else for(;R!==null;){t=R;try{var f=t.alternate;if(t.flags&1024)switch(t.tag){case 0:case 11:case 15:break;case 1:if(f!==null){var h=f.memoizedProps,C=f.memoizedState,d=t.stateNode,u=d.getSnapshotBeforeUpdate(t.elementType===t.type?h:dt(t.type,h),C);d.__reactInternalSnapshotBeforeUpdate=u}break;case 3:var p=t.stateNode.containerInfo;p.nodeType===1?p.textContent="":p.nodeType===9&&p.documentElement&&p.removeChild(p.documentElement);break;case 5:case 6:case 4:case 17:break;default:throw Error(P(163))}}catch(w){de(t,t.return,w)}if(e=t.sibling,e!==null){e.return=t.return,R=e;break}R=t.return}return f=nu,nu=!1,f}function Cr(e,t,n){var r=t.updateQueue;if(r=r!==null?r.lastEffect:null,r!==null){var i=r=r.next;do{if((i.tag&e)===e){var o=i.destroy;i.destroy=void 0,o!==void 0&&Ql(t,n,o)}i=i.next}while(i!==r)}}function yo(e,t){if(t=t.updateQueue,t=t!==null?t.lastEffect:null,t!==null){var n=t=t.next;do{if((n.tag&e)===e){var r=n.create;n.destroy=r()}n=n.next}while(n!==t)}}function Yl(e){var t=e.ref;if(t!==null){var n=e.stateNode;switch(e.tag){case 5:e=n;break;default:e=n}typeof t=="function"?t(e):t.current=e}}function jd(e){var t=e.alternate;t!==null&&(e.alternate=null,jd(t)),e.child=null,e.deletions=null,e.sibling=null,e.tag===5&&(t=e.stateNode,t!==null&&(delete t[St],delete t[Ar],delete t[Rl],delete t[dh],delete t[ph])),e.stateNode=null,e.return=null,e.dependencies=null,e.memoizedProps=null,e.memoizedState=null,e.pendingProps=null,e.stateNode=null,e.updateQueue=null}function Pd(e){return e.tag===5||e.tag===3||e.tag===4}function ru(e){e:for(;;){for(;e.sibling===null;){if(e.return===null||Pd(e.return))return null;e=e.return}for(e.sibling.return=e.return,e=e.sibling;e.tag!==5&&e.tag!==6&&e.tag!==18;){if(e.flags&2||e.child===null||e.tag===4)continue e;e.child.return=e,e=e.child}if(!(e.flags&2))return e.stateNode}}function Kl(e,t,n){var r=e.tag;if(r===5||r===6)e=e.stateNode,t?n.nodeType===8?n.parentNode.insertBefore(e,t):n.insertBefore(e,t):(n.nodeType===8?(t=n.parentNode,t.insertBefore(e,n)):(t=n,t.appendChild(e)),n=n._reactRootContainer,n!=null||t.onclick!==null||(t.onclick=Bi));else if(r!==4&&(e=e.child,e!==null))for(Kl(e,t,n),e=e.sibling;e!==null;)Kl(e,t,n),e=e.sibling}function Xl(e,t,n){var r=e.tag;if(r===5||r===6)e=e.stateNode,t?n.insertBefore(e,t):n.appendChild(e);else if(r!==4&&(e=e.child,e!==null))for(Xl(e,t,n),e=e.sibling;e!==null;)Xl(e,t,n),e=e.sibling}var Se=null,pt=!1;function At(e,t,n){for(n=n.child;n!==null;)zd(e,t,n),n=n.sibling}function zd(e,t,n){if(Et&&typeof Et.onCommitFiberUnmount=="function")try{Et.onCommitFiberUnmount(co,n)}catch{}switch(n.tag){case 5:Te||Nn(n,t);case 6:var r=Se,i=pt;Se=null,At(e,t,n),Se=r,pt=i,Se!==null&&(pt?(e=Se,n=n.stateNode,e.nodeType===8?e.parentNode.removeChild(n):e.removeChild(n)):Se.removeChild(n.stateNode));break;case 18:Se!==null&&(pt?(e=Se,n=n.stateNode,e.nodeType===8?Yo(e.parentNode,n):e.nodeType===1&&Yo(e,n),Rr(e)):Yo(Se,n.stateNode));break;case 4:r=Se,i=pt,Se=n.stateNode.containerInfo,pt=!0,At(e,t,n),Se=r,pt=i;break;case 0:case 11:case 14:case 15:if(!Te&&(r=n.updateQueue,r!==null&&(r=r.lastEffect,r!==null))){i=r=r.next;do{var o=i,l=o.destroy;o=o.tag,l!==void 0&&(o&2||o&4)&&Ql(n,t,l),i=i.next}while(i!==r)}At(e,t,n);break;case 1:if(!Te&&(Nn(n,t),r=n.stateNode,typeof r.componentWillUnmount=="function"))try{r.props=n.memoizedProps,r.state=n.memoizedState,r.componentWillUnmount()}catch(s){de(n,t,s)}At(e,t,n);break;case 21:At(e,t,n);break;case 22:n.mode&1?(Te=(r=Te)||n.memoizedState!==null,At(e,t,n),Te=r):At(e,t,n);break;default:At(e,t,n)}}function iu(e){var t=e.updateQueue;if(t!==null){e.updateQueue=null;var n=e.stateNode;n===null&&(n=e.stateNode=new zh),t.forEach(function(r){var i=Ah.bind(null,e,r);n.has(r)||(n.add(r),r.then(i,i))})}}function ct(e,t){var n=t.deletions;if(n!==null)for(var r=0;r<n.length;r++){var i=n[r];try{var o=e,l=t,s=l;e:for(;s!==null;){switch(s.tag){case 5:Se=s.stateNode,pt=!1;break e;case 3:Se=s.stateNode.containerInfo,pt=!0;break e;case 4:Se=s.stateNode.containerInfo,pt=!0;break e}s=s.return}if(Se===null)throw Error(P(160));zd(o,l,i),Se=null,pt=!1;var a=i.alternate;a!==null&&(a.return=null),i.return=null}catch(c){de(i,t,c)}}if(t.subtreeFlags&12854)for(t=t.child;t!==null;)Td(t,e),t=t.sibling}function Td(e,t){var n=e.alternate,r=e.flags;switch(e.tag){case 0:case 11:case 14:case 15:if(ct(t,e),vt(e),r&4){try{Cr(3,e,e.return),yo(3,e)}catch(h){de(e,e.return,h)}try{Cr(5,e,e.return)}catch(h){de(e,e.return,h)}}break;case 1:ct(t,e),vt(e),r&512&&n!==null&&Nn(n,n.return);break;case 5:if(ct(t,e),vt(e),r&512&&n!==null&&Nn(n,n.return),e.flags&32){var i=e.stateNode;try{Tr(i,"")}catch(h){de(e,e.return,h)}}if(r&4&&(i=e.stateNode,i!=null)){var o=e.memoizedProps,l=n!==null?n.memoizedProps:o,s=e.type,a=e.updateQueue;if(e.updateQueue=null,a!==null)try{s==="input"&&o.type==="radio"&&o.name!=null&&Gu(i,o),yl(s,l);var c=yl(s,o);for(l=0;l<a.length;l+=2){var g=a[l],x=a[l+1];g==="style"?tc(i,x):g==="dangerouslySetInnerHTML"?qu(i,x):g==="children"?Tr(i,x):da(i,g,x,c)}switch(s){case"input":hl(i,o);break;case"textarea":Zu(i,o);break;case"select":var m=i._wrapperState.wasMultiple;i._wrapperState.wasMultiple=!!o.multiple;var y=o.value;y!=null?Dn(i,!!o.multiple,y,!1):m!==!!o.multiple&&(o.defaultValue!=null?Dn(i,!!o.multiple,o.defaultValue,!0):Dn(i,!!o.multiple,o.multiple?[]:"",!1))}i[Ar]=o}catch(h){de(e,e.return,h)}}break;case 6:if(ct(t,e),vt(e),r&4){if(e.stateNode===null)throw Error(P(162));i=e.stateNode,o=e.memoizedProps;try{i.nodeValue=o}catch(h){de(e,e.return,h)}}break;case 3:if(ct(t,e),vt(e),r&4&&n!==null&&n.memoizedState.isDehydrated)try{Rr(t.containerInfo)}catch(h){de(e,e.return,h)}break;case 4:ct(t,e),vt(e);break;case 13:ct(t,e),vt(e),i=e.child,i.flags&8192&&(o=i.memoizedState!==null,i.stateNode.isHidden=o,!o||i.alternate!==null&&i.alternate.memoizedState!==null||(Ha=pe())),r&4&&iu(e);break;case 22:if(g=n!==null&&n.memoizedState!==null,e.mode&1?(Te=(c=Te)||g,ct(t,e),Te=c):ct(t,e),vt(e),r&8192){if(c=e.memoizedState!==null,(e.stateNode.isHidden=c)&&!g&&e.mode&1)for(R=e,g=e.child;g!==null;){for(x=R=g;R!==null;){switch(m=R,y=m.child,m.tag){case 0:case 11:case 14:case 15:Cr(4,m,m.return);break;case 1:Nn(m,m.return);var f=m.stateNode;if(typeof f.componentWillUnmount=="function"){r=m,n=m.return;try{t=r,f.props=t.memoizedProps,f.state=t.memoizedState,f.componentWillUnmount()}catch(h){de(r,n,h)}}break;case 5:Nn(m,m.return);break;case 22:if(m.memoizedState!==null){lu(x);continue}}y!==null?(y.return=m,R=y):lu(x)}g=g.sibling}e:for(g=null,x=e;;){if(x.tag===5){if(g===null){g=x;try{i=x.stateNode,c?(o=i.style,typeof o.setProperty=="function"?o.setProperty("display","none","important"):o.display="none"):(s=x.stateNode,a=x.memoizedProps.style,l=a!=null&&a.hasOwnProperty("display")?a.display:null,s.style.display=ec("display",l))}catch(h){de(e,e.return,h)}}}else if(x.tag===6){if(g===null)try{x.stateNode.nodeValue=c?"":x.memoizedProps}catch(h){de(e,e.return,h)}}else if((x.tag!==22&&x.tag!==23||x.memoizedState===null||x===e)&&x.child!==null){x.child.return=x,x=x.child;continue}if(x===e)break e;for(;x.sibling===null;){if(x.return===null||x.return===e)break e;g===x&&(g=null),x=x.return}g===x&&(g=null),x.sibling.return=x.return,x=x.sibling}}break;case 19:ct(t,e),vt(e),r&4&&iu(e);break;case 21:break;default:ct(t,e),vt(e)}}function vt(e){var t=e.flags;if(t&2){try{e:{for(var n=e.return;n!==null;){if(Pd(n)){var r=n;break e}n=n.return}throw Error(P(160))}switch(r.tag){case 5:var i=r.stateNode;r.flags&32&&(Tr(i,""),r.flags&=-33);var o=ru(e);Xl(e,o,i);break;case 3:case 4:var l=r.stateNode.containerInfo,s=ru(e);Kl(e,s,l);break;default:throw Error(P(161))}}catch(a){de(e,e.return,a)}e.flags&=-3}t&4096&&(e.flags&=-4097)}function Oh(e,t,n){R=e,Od(e)}function Od(e,t,n){for(var r=(e.mode&1)!==0;R!==null;){var i=R,o=i.child;if(i.tag===22&&r){var l=i.memoizedState!==null||gi;if(!l){var s=i.alternate,a=s!==null&&s.memoizedState!==null||Te;s=gi;var c=Te;if(gi=l,(Te=a)&&!c)for(R=i;R!==null;)l=R,a=l.child,l.tag===22&&l.memoizedState!==null?au(i):a!==null?(a.return=l,R=a):au(i);for(;o!==null;)R=o,Od(o),o=o.sibling;R=i,gi=s,Te=c}ou(e)}else i.subtreeFlags&8772&&o!==null?(o.return=i,R=o):ou(e)}}function ou(e){for(;R!==null;){var t=R;if(t.flags&8772){var n=t.alternate;try{if(t.flags&8772)switch(t.tag){case 0:case 11:case 15:Te||yo(5,t);break;case 1:var r=t.stateNode;if(t.flags&4&&!Te)if(n===null)r.componentDidMount();else{var i=t.elementType===t.type?n.memoizedProps:dt(t.type,n.memoizedProps);r.componentDidUpdate(i,n.memoizedState,r.__reactInternalSnapshotBeforeUpdate)}var o=t.updateQueue;o!==null&&Us(t,o,r);break;case 3:var l=t.updateQueue;if(l!==null){if(n=null,t.child!==null)switch(t.child.tag){case 5:n=t.child.stateNode;break;case 1:n=t.child.stateNode}Us(t,l,n)}break;case 5:var s=t.stateNode;if(n===null&&t.flags&4){n=s;var a=t.memoizedProps;switch(t.type){case"button":case"input":case"select":case"textarea":a.autoFocus&&n.focus();break;case"img":a.src&&(n.src=a.src)}}break;case 6:break;case 4:break;case 12:break;case 13:if(t.memoizedState===null){var c=t.alternate;if(c!==null){var g=c.memoizedState;if(g!==null){var x=g.dehydrated;x!==null&&Rr(x)}}}break;case 19:case 17:case 21:case 22:case 23:case 25:break;default:throw Error(P(163))}Te||t.flags&512&&Yl(t)}catch(m){de(t,t.return,m)}}if(t===e){R=null;break}if(n=t.sibling,n!==null){n.return=t.return,R=n;break}R=t.return}}function lu(e){for(;R!==null;){var t=R;if(t===e){R=null;break}var n=t.sibling;if(n!==null){n.return=t.return,R=n;break}R=t.return}}function au(e){for(;R!==null;){var t=R;try{switch(t.tag){case 0:case 11:case 15:var n=t.return;try{yo(4,t)}catch(a){de(t,n,a)}break;case 1:var r=t.stateNode;if(typeof r.componentDidMount=="function"){var i=t.return;try{r.componentDidMount()}catch(a){de(t,i,a)}}var o=t.return;try{Yl(t)}catch(a){de(t,o,a)}break;case 5:var l=t.return;try{Yl(t)}catch(a){de(t,l,a)}}}catch(a){de(t,t.return,a)}if(t===e){R=null;break}var s=t.sibling;if(s!==null){s.return=t.return,R=s;break}R=t.return}}var bh=Math.ceil,no=It.ReactCurrentDispatcher,Ua=It.ReactCurrentOwner,lt=It.ReactCurrentBatchConfig,Q=0,ke=null,he=null,Ce=0,Ke=0,In=nn(0),xe=0,Hr=null,xn=0,wo=0,Va=0,_r=null,Fe=null,Ha=0,Gn=1/0,jt=null,ro=!1,Gl=null,Gt=null,xi=!1,Ht=null,io=0,jr=0,Zl=null,bi=-1,Mi=0;function Le(){return Q&6?pe():bi!==-1?bi:bi=pe()}function Zt(e){return e.mode&1?Q&2&&Ce!==0?Ce&-Ce:hh.transition!==null?(Mi===0&&(Mi=fc()),Mi):(e=ee,e!==0||(e=window.event,e=e===void 0?16:wc(e.type)),e):1}function gt(e,t,n,r){if(50<jr)throw jr=0,Zl=null,Error(P(185));Gr(e,n,r),(!(Q&2)||e!==ke)&&(e===ke&&(!(Q&2)&&(wo|=n),xe===4&&Ut(e,Ce)),He(e,r),n===1&&Q===0&&!(t.mode&1)&&(Gn=pe()+500,go&&rn()))}function He(e,t){var n=e.callbackNode;hf(e,t);var r=Wi(e,e===ke?Ce:0);if(r===0)n!==null&&gs(n),e.callbackNode=null,e.callbackPriority=0;else if(t=r&-r,e.callbackPriority!==t){if(n!=null&&gs(n),t===1)e.tag===0?fh(su.bind(null,e)):$c(su.bind(null,e)),uh(function(){!(Q&6)&&rn()}),n=null;else{switch(hc(r)){case 1:n=ga;break;case 4:n=dc;break;case 16:n=Fi;break;case 536870912:n=pc;break;default:n=Fi}n=Ad(n,bd.bind(null,e))}e.callbackPriority=t,e.callbackNode=n}}function bd(e,t){if(bi=-1,Mi=0,Q&6)throw Error(P(327));var n=e.callbackNode;if(Un()&&e.callbackNode!==n)return null;var r=Wi(e,e===ke?Ce:0);if(r===0)return null;if(r&30||r&e.expiredLanes||t)t=oo(e,r);else{t=r;var i=Q;Q|=2;var o=Rd();(ke!==e||Ce!==t)&&(jt=null,Gn=pe()+500,pn(e,t));do try{Lh();break}catch(s){Md(e,s)}while(!0);Ta(),no.current=o,Q=i,he!==null?t=0:(ke=null,Ce=0,t=xe)}if(t!==0){if(t===2&&(i=Cl(e),i!==0&&(r=i,t=Jl(e,i))),t===1)throw n=Hr,pn(e,0),Ut(e,r),He(e,pe()),n;if(t===6)Ut(e,r);else{if(i=e.current.alternate,!(r&30)&&!Mh(i)&&(t=oo(e,r),t===2&&(o=Cl(e),o!==0&&(r=o,t=Jl(e,o))),t===1))throw n=Hr,pn(e,0),Ut(e,r),He(e,pe()),n;switch(e.finishedWork=i,e.finishedLanes=r,t){case 0:case 1:throw Error(P(345));case 2:sn(e,Fe,jt);break;case 3:if(Ut(e,r),(r&130023424)===r&&(t=Ha+500-pe(),10<t)){if(Wi(e,0)!==0)break;if(i=e.suspendedLanes,(i&r)!==r){Le(),e.pingedLanes|=e.suspendedLanes&i;break}e.timeoutHandle=Ml(sn.bind(null,e,Fe,jt),t);break}sn(e,Fe,jt);break;case 4:if(Ut(e,r),(r&4194240)===r)break;for(t=e.eventTimes,i=-1;0<r;){var l=31-mt(r);o=1<<l,l=t[l],l>i&&(i=l),r&=~o}if(r=i,r=pe()-r,r=(120>r?120:480>r?480:1080>r?1080:1920>r?1920:3e3>r?3e3:4320>r?4320:1960*bh(r/1960))-r,10<r){e.timeoutHandle=Ml(sn.bind(null,e,Fe,jt),r);break}sn(e,Fe,jt);break;case 5:sn(e,Fe,jt);break;default:throw Error(P(329))}}}return He(e,pe()),e.callbackNode===n?bd.bind(null,e):null}function Jl(e,t){var n=_r;return e.current.memoizedState.isDehydrated&&(pn(e,t).flags|=256),e=oo(e,t),e!==2&&(t=Fe,Fe=n,t!==null&&ql(t)),e}function ql(e){Fe===null?Fe=e:Fe.push.apply(Fe,e)}function Mh(e){for(var t=e;;){if(t.flags&16384){var n=t.updateQueue;if(n!==null&&(n=n.stores,n!==null))for(var r=0;r<n.length;r++){var i=n[r],o=i.getSnapshot;i=i.value;try{if(!xt(o(),i))return!1}catch{return!1}}}if(n=t.child,t.subtreeFlags&16384&&n!==null)n.return=t,t=n;else{if(t===e)break;for(;t.sibling===null;){if(t.return===null||t.return===e)return!0;t=t.return}t.sibling.return=t.return,t=t.sibling}}return!0}function Ut(e,t){for(t&=~Va,t&=~wo,e.suspendedLanes|=t,e.pingedLanes&=~t,e=e.expirationTimes;0<t;){var n=31-mt(t),r=1<<n;e[n]=-1,t&=~r}}function su(e){if(Q&6)throw Error(P(327));Un();var t=Wi(e,0);if(!(t&1))return He(e,pe()),null;var n=oo(e,t);if(e.tag!==0&&n===2){var r=Cl(e);r!==0&&(t=r,n=Jl(e,r))}if(n===1)throw n=Hr,pn(e,0),Ut(e,t),He(e,pe()),n;if(n===6)throw Error(P(345));return e.finishedWork=e.current.alternate,e.finishedLanes=t,sn(e,Fe,jt),He(e,pe()),null}function Ba(e,t){var n=Q;Q|=1;try{return e(t)}finally{Q=n,Q===0&&(Gn=pe()+500,go&&rn())}}function vn(e){Ht!==null&&Ht.tag===0&&!(Q&6)&&Un();var t=Q;Q|=1;var n=lt.transition,r=ee;try{if(lt.transition=null,ee=1,e)return e()}finally{ee=r,lt.transition=n,Q=t,!(Q&6)&&rn()}}function Qa(){Ke=In.current,oe(In)}function pn(e,t){e.finishedWork=null,e.finishedLanes=0;var n=e.timeoutHandle;if(n!==-1&&(e.timeoutHandle=-1,sh(n)),he!==null)for(n=he.return;n!==null;){var r=n;switch(ja(r),r.tag){case 1:r=r.type.childContextTypes,r!=null&&Qi();break;case 3:Kn(),oe(Ue),oe(Oe),Na();break;case 5:La(r);break;case 4:Kn();break;case 13:oe(ae);break;case 19:oe(ae);break;case 10:Oa(r.type._context);break;case 22:case 23:Qa()}n=n.return}if(ke=e,he=e=Jt(e.current,null),Ce=Ke=t,xe=0,Hr=null,Va=wo=xn=0,Fe=_r=null,cn!==null){for(t=0;t<cn.length;t++)if(n=cn[t],r=n.interleaved,r!==null){n.interleaved=null;var i=r.next,o=n.pending;if(o!==null){var l=o.next;o.next=i,r.next=l}n.pending=r}cn=null}return e}function Md(e,t){do{var n=he;try{if(Ta(),zi.current=to,eo){for(var r=se.memoizedState;r!==null;){var i=r.queue;i!==null&&(i.pending=null),r=r.next}eo=!1}if(gn=0,we=ge=se=null,Er=!1,Wr=0,Ua.current=null,n===null||n.return===null){xe=1,Hr=t,he=null;break}e:{var o=e,l=n.return,s=n,a=t;if(t=Ce,s.flags|=32768,a!==null&&typeof a=="object"&&typeof a.then=="function"){var c=a,g=s,x=g.tag;if(!(g.mode&1)&&(x===0||x===11||x===15)){var m=g.alternate;m?(g.updateQueue=m.updateQueue,g.memoizedState=m.memoizedState,g.lanes=m.lanes):(g.updateQueue=null,g.memoizedState=null)}var y=Xs(l);if(y!==null){y.flags&=-257,Gs(y,l,s,o,t),y.mode&1&&Ks(o,c,t),t=y,a=c;var f=t.updateQueue;if(f===null){var h=new Set;h.add(a),t.updateQueue=h}else f.add(a);break e}else{if(!(t&1)){Ks(o,c,t),Ya();break e}a=Error(P(426))}}else if(le&&s.mode&1){var C=Xs(l);if(C!==null){!(C.flags&65536)&&(C.flags|=256),Gs(C,l,s,o,t),Pa(Xn(a,s));break e}}o=a=Xn(a,s),xe!==4&&(xe=2),_r===null?_r=[o]:_r.push(o),o=l;do{switch(o.tag){case 3:o.flags|=65536,t&=-t,o.lanes|=t;var d=md(o,a,t);Ws(o,d);break e;case 1:s=a;var u=o.type,p=o.stateNode;if(!(o.flags&128)&&(typeof u.getDerivedStateFromError=="function"||p!==null&&typeof p.componentDidCatch=="function"&&(Gt===null||!Gt.has(p)))){o.flags|=65536,t&=-t,o.lanes|=t;var w=gd(o,s,t);Ws(o,w);break e}}o=o.return}while(o!==null)}Nd(n)}catch(E){t=E,he===n&&n!==null&&(he=n=n.return);continue}break}while(!0)}function Rd(){var e=no.current;return no.current=to,e===null?to:e}function Ya(){(xe===0||xe===3||xe===2)&&(xe=4),ke===null||!(xn&268435455)&&!(wo&268435455)||Ut(ke,Ce)}function oo(e,t){var n=Q;Q|=2;var r=Rd();(ke!==e||Ce!==t)&&(jt=null,pn(e,t));do try{Rh();break}catch(i){Md(e,i)}while(!0);if(Ta(),Q=n,no.current=r,he!==null)throw Error(P(261));return ke=null,Ce=0,xe}function Rh(){for(;he!==null;)Ld(he)}function Lh(){for(;he!==null&&!of();)Ld(he)}function Ld(e){var t=Dd(e.alternate,e,Ke);e.memoizedProps=e.pendingProps,t===null?Nd(e):he=t,Ua.current=null}function Nd(e){var t=e;do{var n=t.alternate;if(e=t.return,t.flags&32768){if(n=Ph(n,t),n!==null){n.flags&=32767,he=n;return}if(e!==null)e.flags|=32768,e.subtreeFlags=0,e.deletions=null;else{xe=6,he=null;return}}else if(n=jh(n,t,Ke),n!==null){he=n;return}if(t=t.sibling,t!==null){he=t;return}he=t=e}while(t!==null);xe===0&&(xe=5)}function sn(e,t,n){var r=ee,i=lt.transition;try{lt.transition=null,ee=1,Nh(e,t,n,r)}finally{lt.transition=i,ee=r}return null}function Nh(e,t,n,r){do Un();while(Ht!==null);if(Q&6)throw Error(P(327));n=e.finishedWork;var i=e.finishedLanes;if(n===null)return null;if(e.finishedWork=null,e.finishedLanes=0,n===e.current)throw Error(P(177));e.callbackNode=null,e.callbackPriority=0;var o=n.lanes|n.childLanes;if(mf(e,o),e===ke&&(he=ke=null,Ce=0),!(n.subtreeFlags&2064)&&!(n.flags&2064)||xi||(xi=!0,Ad(Fi,function(){return Un(),null})),o=(n.flags&15990)!==0,n.subtreeFlags&15990||o){o=lt.transition,lt.transition=null;var l=ee;ee=1;var s=Q;Q|=4,Ua.current=null,Th(e,n),Td(n,e),th(Ol),Ui=!!Tl,Ol=Tl=null,e.current=n,Oh(n),lf(),Q=s,ee=l,lt.transition=o}else e.current=n;if(xi&&(xi=!1,Ht=e,io=i),o=e.pendingLanes,o===0&&(Gt=null),uf(n.stateNode),He(e,pe()),t!==null)for(r=e.onRecoverableError,n=0;n<t.length;n++)i=t[n],r(i.value,{componentStack:i.stack,digest:i.digest});if(ro)throw ro=!1,e=Gl,Gl=null,e;return io&1&&e.tag!==0&&Un(),o=e.pendingLanes,o&1?e===Zl?jr++:(jr=0,Zl=e):jr=0,rn(),null}function Un(){if(Ht!==null){var e=hc(io),t=lt.transition,n=ee;try{if(lt.transition=null,ee=16>e?16:e,Ht===null)var r=!1;else{if(e=Ht,Ht=null,io=0,Q&6)throw Error(P(331));var i=Q;for(Q|=4,R=e.current;R!==null;){var o=R,l=o.child;if(R.flags&16){var s=o.deletions;if(s!==null){for(var a=0;a<s.length;a++){var c=s[a];for(R=c;R!==null;){var g=R;switch(g.tag){case 0:case 11:case 15:Cr(8,g,o)}var x=g.child;if(x!==null)x.return=g,R=x;else for(;R!==null;){g=R;var m=g.sibling,y=g.return;if(jd(g),g===c){R=null;break}if(m!==null){m.return=y,R=m;break}R=y}}}var f=o.alternate;if(f!==null){var h=f.child;if(h!==null){f.child=null;do{var C=h.sibling;h.sibling=null,h=C}while(h!==null)}}R=o}}if(o.subtreeFlags&2064&&l!==null)l.return=o,R=l;else e:for(;R!==null;){if(o=R,o.flags&2048)switch(o.tag){case 0:case 11:case 15:Cr(9,o,o.return)}var d=o.sibling;if(d!==null){d.return=o.return,R=d;break e}R=o.return}}var u=e.current;for(R=u;R!==null;){l=R;var p=l.child;if(l.subtreeFlags&2064&&p!==null)p.return=l,R=p;else e:for(l=u;R!==null;){if(s=R,s.flags&2048)try{switch(s.tag){case 0:case 11:case 15:yo(9,s)}}catch(E){de(s,s.return,E)}if(s===l){R=null;break e}var w=s.sibling;if(w!==null){w.return=s.return,R=w;break e}R=s.return}}if(Q=i,rn(),Et&&typeof Et.onPostCommitFiberRoot=="function")try{Et.onPostCommitFiberRoot(co,e)}catch{}r=!0}return r}finally{ee=n,lt.transition=t}}return!1}function uu(e,t,n){t=Xn(n,t),t=md(e,t,1),e=Xt(e,t,1),t=Le(),e!==null&&(Gr(e,1,t),He(e,t))}function de(e,t,n){if(e.tag===3)uu(e,e,n);else for(;t!==null;){if(t.tag===3){uu(t,e,n);break}else if(t.tag===1){var r=t.stateNode;if(typeof t.type.getDerivedStateFromError=="function"||typeof r.componentDidCatch=="function"&&(Gt===null||!Gt.has(r))){e=Xn(n,e),e=gd(t,e,1),t=Xt(t,e,1),e=Le(),t!==null&&(Gr(t,1,e),He(t,e));break}}t=t.return}}function Ih(e,t,n){var r=e.pingCache;r!==null&&r.delete(t),t=Le(),e.pingedLanes|=e.suspendedLanes&n,ke===e&&(Ce&n)===n&&(xe===4||xe===3&&(Ce&130023424)===Ce&&500>pe()-Ha?pn(e,0):Va|=n),He(e,t)}function Id(e,t){t===0&&(e.mode&1?(t=ai,ai<<=1,!(ai&130023424)&&(ai=4194304)):t=1);var n=Le();e=Lt(e,t),e!==null&&(Gr(e,t,n),He(e,n))}function Dh(e){var t=e.memoizedState,n=0;t!==null&&(n=t.retryLane),Id(e,n)}function Ah(e,t){var n=0;switch(e.tag){case 13:var r=e.stateNode,i=e.memoizedState;i!==null&&(n=i.retryLane);break;case 19:r=e.stateNode;break;default:throw Error(P(314))}r!==null&&r.delete(t),Id(e,n)}var Dd;Dd=function(e,t,n){if(e!==null)if(e.memoizedProps!==t.pendingProps||Ue.current)We=!0;else{if(!(e.lanes&n)&&!(t.flags&128))return We=!1,_h(e,t,n);We=!!(e.flags&131072)}else We=!1,le&&t.flags&1048576&&Fc(t,Xi,t.index);switch(t.lanes=0,t.tag){case 2:var r=t.type;Oi(e,t),e=t.pendingProps;var i=Bn(t,Oe.current);Wn(t,n),i=Da(null,t,r,e,i,n);var o=Aa();return t.flags|=1,typeof i=="object"&&i!==null&&typeof i.render=="function"&&i.$$typeof===void 0?(t.tag=1,t.memoizedState=null,t.updateQueue=null,Ve(r)?(o=!0,Yi(t)):o=!1,t.memoizedState=i.state!==null&&i.state!==void 0?i.state:null,Ma(t),i.updater=xo,t.stateNode=i,i._reactInternals=t,$l(t,r,e,n),t=Ul(null,t,r,!0,o,n)):(t.tag=0,le&&o&&_a(t),Me(null,t,i,n),t=t.child),t;case 16:r=t.elementType;e:{switch(Oi(e,t),e=t.pendingProps,i=r._init,r=i(r._payload),t.type=r,i=t.tag=Fh(r),e=dt(r,e),i){case 0:t=Wl(null,t,r,e,n);break e;case 1:t=qs(null,t,r,e,n);break e;case 11:t=Zs(null,t,r,e,n);break e;case 14:t=Js(null,t,r,dt(r.type,e),n);break e}throw Error(P(306,r,""))}return t;case 0:return r=t.type,i=t.pendingProps,i=t.elementType===r?i:dt(r,i),Wl(e,t,r,i,n);case 1:return r=t.type,i=t.pendingProps,i=t.elementType===r?i:dt(r,i),qs(e,t,r,i,n);case 3:e:{if(wd(t),e===null)throw Error(P(387));r=t.pendingProps,o=t.memoizedState,i=o.element,Hc(e,t),Ji(t,r,null,n);var l=t.memoizedState;if(r=l.element,o.isDehydrated)if(o={element:r,isDehydrated:!1,cache:l.cache,pendingSuspenseBoundaries:l.pendingSuspenseBoundaries,transitions:l.transitions},t.updateQueue.baseState=o,t.memoizedState=o,t.flags&256){i=Xn(Error(P(423)),t),t=eu(e,t,r,n,i);break e}else if(r!==i){i=Xn(Error(P(424)),t),t=eu(e,t,r,n,i);break e}else for(Xe=Kt(t.stateNode.containerInfo.firstChild),Ge=t,le=!0,ht=null,n=Kc(t,null,r,n),t.child=n;n;)n.flags=n.flags&-3|4096,n=n.sibling;else{if(Qn(),r===i){t=Nt(e,t,n);break e}Me(e,t,r,n)}t=t.child}return t;case 5:return Xc(t),e===null&&Il(t),r=t.type,i=t.pendingProps,o=e!==null?e.memoizedProps:null,l=i.children,bl(r,i)?l=null:o!==null&&bl(r,o)&&(t.flags|=32),yd(e,t),Me(e,t,l,n),t.child;case 6:return e===null&&Il(t),null;case 13:return kd(e,t,n);case 4:return Ra(t,t.stateNode.containerInfo),r=t.pendingProps,e===null?t.child=Yn(t,null,r,n):Me(e,t,r,n),t.child;case 11:return r=t.type,i=t.pendingProps,i=t.elementType===r?i:dt(r,i),Zs(e,t,r,i,n);case 7:return Me(e,t,t.pendingProps,n),t.child;case 8:return Me(e,t,t.pendingProps.children,n),t.child;case 12:return Me(e,t,t.pendingProps.children,n),t.child;case 10:e:{if(r=t.type._context,i=t.pendingProps,o=t.memoizedProps,l=i.value,re(Gi,r._currentValue),r._currentValue=l,o!==null)if(xt(o.value,l)){if(o.children===i.children&&!Ue.current){t=Nt(e,t,n);break e}}else for(o=t.child,o!==null&&(o.return=t);o!==null;){var s=o.dependencies;if(s!==null){l=o.child;for(var a=s.firstContext;a!==null;){if(a.context===r){if(o.tag===1){a=bt(-1,n&-n),a.tag=2;var c=o.updateQueue;if(c!==null){c=c.shared;var g=c.pending;g===null?a.next=a:(a.next=g.next,g.next=a),c.pending=a}}o.lanes|=n,a=o.alternate,a!==null&&(a.lanes|=n),Dl(o.return,n,t),s.lanes|=n;break}a=a.next}}else if(o.tag===10)l=o.type===t.type?null:o.child;else if(o.tag===18){if(l=o.return,l===null)throw Error(P(341));l.lanes|=n,s=l.alternate,s!==null&&(s.lanes|=n),Dl(l,n,t),l=o.sibling}else l=o.child;if(l!==null)l.return=o;else for(l=o;l!==null;){if(l===t){l=null;break}if(o=l.sibling,o!==null){o.return=l.return,l=o;break}l=l.return}o=l}Me(e,t,i.children,n),t=t.child}return t;case 9:return i=t.type,r=t.pendingProps.children,Wn(t,n),i=at(i),r=r(i),t.flags|=1,Me(e,t,r,n),t.child;case 14:return r=t.type,i=dt(r,t.pendingProps),i=dt(r.type,i),Js(e,t,r,i,n);case 15:return xd(e,t,t.type,t.pendingProps,n);case 17:return r=t.type,i=t.pendingProps,i=t.elementType===r?i:dt(r,i),Oi(e,t),t.tag=1,Ve(r)?(e=!0,Yi(t)):e=!1,Wn(t,n),Qc(t,r,i),$l(t,r,i,n),Ul(null,t,r,!0,e,n);case 19:return Sd(e,t,n);case 22:return vd(e,t,n)}throw Error(P(156,t.tag))};function Ad(e,t){return cc(e,t)}function $h(e,t,n,r){this.tag=e,this.key=n,this.sibling=this.child=this.return=this.stateNode=this.type=this.elementType=null,this.index=0,this.ref=null,this.pendingProps=t,this.dependencies=this.memoizedState=this.updateQueue=this.memoizedProps=null,this.mode=r,this.subtreeFlags=this.flags=0,this.deletions=null,this.childLanes=this.lanes=0,this.alternate=null}function ot(e,t,n,r){return new $h(e,t,n,r)}function Ka(e){return e=e.prototype,!(!e||!e.isReactComponent)}function Fh(e){if(typeof e=="function")return Ka(e)?1:0;if(e!=null){if(e=e.$$typeof,e===fa)return 11;if(e===ha)return 14}return 2}function Jt(e,t){var n=e.alternate;return n===null?(n=ot(e.tag,t,e.key,e.mode),n.elementType=e.elementType,n.type=e.type,n.stateNode=e.stateNode,n.alternate=e,e.alternate=n):(n.pendingProps=t,n.type=e.type,n.flags=0,n.subtreeFlags=0,n.deletions=null),n.flags=e.flags&14680064,n.childLanes=e.childLanes,n.lanes=e.lanes,n.child=e.child,n.memoizedProps=e.memoizedProps,n.memoizedState=e.memoizedState,n.updateQueue=e.updateQueue,t=e.dependencies,n.dependencies=t===null?null:{lanes:t.lanes,firstContext:t.firstContext},n.sibling=e.sibling,n.index=e.index,n.ref=e.ref,n}function Ri(e,t,n,r,i,o){var l=2;if(r=e,typeof e=="function")Ka(e)&&(l=1);else if(typeof e=="string")l=5;else e:switch(e){case jn:return fn(n.children,i,o,t);case pa:l=8,i|=8;break;case ul:return e=ot(12,n,t,i|2),e.elementType=ul,e.lanes=o,e;case cl:return e=ot(13,n,t,i),e.elementType=cl,e.lanes=o,e;case dl:return e=ot(19,n,t,i),e.elementType=dl,e.lanes=o,e;case Yu:return ko(n,i,o,t);default:if(typeof e=="object"&&e!==null)switch(e.$$typeof){case Bu:l=10;break e;case Qu:l=9;break e;case fa:l=11;break e;case ha:l=14;break e;case $t:l=16,r=null;break e}throw Error(P(130,e==null?e:typeof e,""))}return t=ot(l,n,t,i),t.elementType=e,t.type=r,t.lanes=o,t}function fn(e,t,n,r){return e=ot(7,e,r,t),e.lanes=n,e}function ko(e,t,n,r){return e=ot(22,e,r,t),e.elementType=Yu,e.lanes=n,e.stateNode={isHidden:!1},e}function tl(e,t,n){return e=ot(6,e,null,t),e.lanes=n,e}function nl(e,t,n){return t=ot(4,e.children!==null?e.children:[],e.key,t),t.lanes=n,t.stateNode={containerInfo:e.containerInfo,pendingChildren:null,implementation:e.implementation},t}function Wh(e,t,n,r,i){this.tag=t,this.containerInfo=e,this.finishedWork=this.pingCache=this.current=this.pendingChildren=null,this.timeoutHandle=-1,this.callbackNode=this.pendingContext=this.context=null,this.callbackPriority=0,this.eventTimes=Io(0),this.expirationTimes=Io(-1),this.entangledLanes=this.finishedLanes=this.mutableReadLanes=this.expiredLanes=this.pingedLanes=this.suspendedLanes=this.pendingLanes=0,this.entanglements=Io(0),this.identifierPrefix=r,this.onRecoverableError=i,this.mutableSourceEagerHydrationData=null}function Xa(e,t,n,r,i,o,l,s,a){return e=new Wh(e,t,n,s,a),t===1?(t=1,o===!0&&(t|=8)):t=0,o=ot(3,null,null,t),e.current=o,o.stateNode=e,o.memoizedState={element:r,isDehydrated:n,cache:null,transitions:null,pendingSuspenseBoundaries:null},Ma(o),e}function Uh(e,t,n){var r=3<arguments.length&&arguments[3]!==void 0?arguments[3]:null;return{$$typeof:_n,key:r==null?null:""+r,children:e,containerInfo:t,implementation:n}}function $d(e){if(!e)return en;e=e._reactInternals;e:{if(wn(e)!==e||e.tag!==1)throw Error(P(170));var t=e;do{switch(t.tag){case 3:t=t.stateNode.context;break e;case 1:if(Ve(t.type)){t=t.stateNode.__reactInternalMemoizedMergedChildContext;break e}}t=t.return}while(t!==null);throw Error(P(171))}if(e.tag===1){var n=e.type;if(Ve(n))return Ac(e,n,t)}return t}function Fd(e,t,n,r,i,o,l,s,a){return e=Xa(n,r,!0,e,i,o,l,s,a),e.context=$d(null),n=e.current,r=Le(),i=Zt(n),o=bt(r,i),o.callback=t??null,Xt(n,o,i),e.current.lanes=i,Gr(e,i,r),He(e,r),e}function So(e,t,n,r){var i=t.current,o=Le(),l=Zt(i);return n=$d(n),t.context===null?t.context=n:t.pendingContext=n,t=bt(o,l),t.payload={element:e},r=r===void 0?null:r,r!==null&&(t.callback=r),e=Xt(i,t,l),e!==null&&(gt(e,i,l,o),Pi(e,i,l)),l}function lo(e){if(e=e.current,!e.child)return null;switch(e.child.tag){case 5:return e.child.stateNode;default:return e.child.stateNode}}function cu(e,t){if(e=e.memoizedState,e!==null&&e.dehydrated!==null){var n=e.retryLane;e.retryLane=n!==0&&n<t?n:t}}function Ga(e,t){cu(e,t),(e=e.alternate)&&cu(e,t)}function Vh(){return null}var Wd=typeof reportError=="function"?reportError:function(e){console.error(e)};function Za(e){this._internalRoot=e}Eo.prototype.render=Za.prototype.render=function(e){var t=this._internalRoot;if(t===null)throw Error(P(409));So(e,t,null,null)};Eo.prototype.unmount=Za.prototype.unmount=function(){var e=this._internalRoot;if(e!==null){this._internalRoot=null;var t=e.containerInfo;vn(function(){So(null,e,null,null)}),t[Rt]=null}};function Eo(e){this._internalRoot=e}Eo.prototype.unstable_scheduleHydration=function(e){if(e){var t=xc();e={blockedOn:null,target:e,priority:t};for(var n=0;n<Wt.length&&t!==0&&t<Wt[n].priority;n++);Wt.splice(n,0,e),n===0&&yc(e)}};function Ja(e){return!(!e||e.nodeType!==1&&e.nodeType!==9&&e.nodeType!==11)}function Co(e){return!(!e||e.nodeType!==1&&e.nodeType!==9&&e.nodeType!==11&&(e.nodeType!==8||e.nodeValue!==" react-mount-point-unstable "))}function du(){}function Hh(e,t,n,r,i){if(i){if(typeof r=="function"){var o=r;r=function(){var c=lo(l);o.call(c)}}var l=Fd(t,r,e,0,null,!1,!1,"",du);return e._reactRootContainer=l,e[Rt]=l.current,Ir(e.nodeType===8?e.parentNode:e),vn(),l}for(;i=e.lastChild;)e.removeChild(i);if(typeof r=="function"){var s=r;r=function(){var c=lo(a);s.call(c)}}var a=Xa(e,0,!1,null,null,!1,!1,"",du);return e._reactRootContainer=a,e[Rt]=a.current,Ir(e.nodeType===8?e.parentNode:e),vn(function(){So(t,a,n,r)}),a}function _o(e,t,n,r,i){var o=n._reactRootContainer;if(o){var l=o;if(typeof i=="function"){var s=i;i=function(){var a=lo(l);s.call(a)}}So(t,l,e,i)}else l=Hh(n,t,e,i,r);return lo(l)}mc=function(e){switch(e.tag){case 3:var t=e.stateNode;if(t.current.memoizedState.isDehydrated){var n=mr(t.pendingLanes);n!==0&&(xa(t,n|1),He(t,pe()),!(Q&6)&&(Gn=pe()+500,rn()))}break;case 13:vn(function(){var r=Lt(e,1);if(r!==null){var i=Le();gt(r,e,1,i)}}),Ga(e,1)}};va=function(e){if(e.tag===13){var t=Lt(e,134217728);if(t!==null){var n=Le();gt(t,e,134217728,n)}Ga(e,134217728)}};gc=function(e){if(e.tag===13){var t=Zt(e),n=Lt(e,t);if(n!==null){var r=Le();gt(n,e,t,r)}Ga(e,t)}};xc=function(){return ee};vc=function(e,t){var n=ee;try{return ee=e,t()}finally{ee=n}};kl=function(e,t,n){switch(t){case"input":if(hl(e,n),t=n.name,n.type==="radio"&&t!=null){for(n=e;n.parentNode;)n=n.parentNode;for(n=n.querySelectorAll("input[name="+JSON.stringify(""+t)+'][type="radio"]'),t=0;t<n.length;t++){var r=n[t];if(r!==e&&r.form===e.form){var i=mo(r);if(!i)throw Error(P(90));Xu(r),hl(r,i)}}}break;case"textarea":Zu(e,n);break;case"select":t=n.value,t!=null&&Dn(e,!!n.multiple,t,!1)}};ic=Ba;oc=vn;var Bh={usingClientEntryPoint:!1,Events:[Jr,On,mo,nc,rc,Ba]},ur={findFiberByHostInstance:un,bundleType:0,version:"18.2.0",rendererPackageName:"react-dom"},Qh={bundleType:ur.bundleType,version:ur.version,rendererPackageName:ur.rendererPackageName,rendererConfig:ur.rendererConfig,overrideHookState:null,overrideHookStateDeletePath:null,overrideHookStateRenamePath:null,overrideProps:null,overridePropsDeletePath:null,overridePropsRenamePath:null,setErrorHandler:null,setSuspenseHandler:null,scheduleUpdate:null,currentDispatcherRef:It.ReactCurrentDispatcher,findHostInstanceByFiber:function(e){return e=sc(e),e===null?null:e.stateNode},findFiberByHostInstance:ur.findFiberByHostInstance||Vh,findHostInstancesForRefresh:null,scheduleRefresh:null,scheduleRoot:null,setRefreshHandler:null,getCurrentFiber:null,reconcilerVersion:"18.2.0-next-9e3b772b8-20220608"};if(typeof __REACT_DEVTOOLS_GLOBAL_HOOK__<"u"){var vi=__REACT_DEVTOOLS_GLOBAL_HOOK__;if(!vi.isDisabled&&vi.supportsFiber)try{co=vi.inject(Qh),Et=vi}catch{}}et.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED=Bh;et.createPortal=function(e,t){var n=2<arguments.length&&arguments[2]!==void 0?arguments[2]:null;if(!Ja(t))throw Error(P(200));return Uh(e,t,null,n)};et.createRoot=function(e,t){if(!Ja(e))throw Error(P(299));var n=!1,r="",i=Wd;return t!=null&&(t.unstable_strictMode===!0&&(n=!0),t.identifierPrefix!==void 0&&(r=t.identifierPrefix),t.onRecoverableError!==void 0&&(i=t.onRecoverableError)),t=Xa(e,1,!1,null,null,n,!1,r,i),e[Rt]=t.current,Ir(e.nodeType===8?e.parentNode:e),new Za(t)};et.findDOMNode=function(e){if(e==null)return null;if(e.nodeType===1)return e;var t=e._reactInternals;if(t===void 0)throw typeof e.render=="function"?Error(P(188)):(e=Object.keys(e).join(","),Error(P(268,e)));return e=sc(t),e=e===null?null:e.stateNode,e};et.flushSync=function(e){return vn(e)};et.hydrate=function(e,t,n){if(!Co(t))throw Error(P(200));return _o(null,e,t,!0,n)};et.hydrateRoot=function(e,t,n){if(!Ja(e))throw Error(P(405));var r=n!=null&&n.hydratedSources||null,i=!1,o="",l=Wd;if(n!=null&&(n.unstable_strictMode===!0&&(i=!0),n.identifierPrefix!==void 0&&(o=n.identifierPrefix),n.onRecoverableError!==void 0&&(l=n.onRecoverableError)),t=Fd(t,null,e,1,n??null,i,!1,o,l),e[Rt]=t.current,Ir(e),r)for(e=0;e<r.length;e++)n=r[e],i=n._getVersion,i=i(n._source),t.mutableSourceEagerHydrationData==null?t.mutableSourceEagerHydrationData=[n,i]:t.mutableSourceEagerHydrationData.push(n,i);return new Eo(t)};et.render=function(e,t,n){if(!Co(t))throw Error(P(200));return _o(null,e,t,!1,n)};et.unmountComponentAtNode=function(e){if(!Co(e))throw Error(P(40));return e._reactRootContainer?(vn(function(){_o(null,null,e,!1,function(){e._reactRootContainer=null,e[Rt]=null})}),!0):!1};et.unstable_batchedUpdates=Ba;et.unstable_renderSubtreeIntoContainer=function(e,t,n,r){if(!Co(n))throw Error(P(200));if(e==null||e._reactInternals===void 0)throw Error(P(38));return _o(e,t,n,!1,r)};et.version="18.2.0-next-9e3b772b8-20220608";function Ud(){if(!(typeof __REACT_DEVTOOLS_GLOBAL_HOOK__>"u"||typeof __REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE!="function"))try{__REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE(Ud)}catch(e){console.error(e)}}Ud(),Fu.exports=et;var Vd=Fu.exports,pu=Vd;al.createRoot=pu.createRoot,al.hydrateRoot=pu.hydrateRoot;var Hd={exports:{}};(function(e,t){(function(r,i){e.exports=i(Re)})(kp,n=>(()=>{var r={"./node_modules/css-mediaquery/index.js":(s,a)=>{a.match=f,a.parse=h;var c=/(?:(only|not)?\s*([^\s\(\)]+)(?:\s*and)?\s*)?(.+)?/i,g=/\(\s*([^\s\:\)]+)\s*(?:\:\s*([^\s\)]+))?\s*\)/,x=/^(?:(min|max)-)?(.+)/,m=/(em|rem|px|cm|mm|in|pt|pc)?$/,y=/(dpi|dpcm|dppx)?$/;function f(p,w){return h(p).some(function(E){var _=E.inverse,S=E.type==="all"||w.type===E.type;if(S&&_||!(S||_))return!1;var z=E.expressions.every(function(j){var O=j.feature,D=j.modifier,A=j.value,N=w[O];if(!N)return!1;switch(O){case"orientation":case"scan":return N.toLowerCase()===A.toLowerCase();case"width":case"height":case"device-width":case"device-height":A=u(A),N=u(N);break;case"resolution":A=d(A),N=d(N);break;case"aspect-ratio":case"device-aspect-ratio":case"device-pixel-ratio":A=C(A),N=C(N);break;case"grid":case"color":case"color-index":case"monochrome":A=parseInt(A,10)||1,N=parseInt(N,10)||0;break}switch(D){case"min":return N>=A;case"max":return N<=A;default:return N===A}});return z&&!_||!z&&_})}function h(p){return p.split(",").map(function(w){w=w.trim();var E=w.match(c),_=E[1],S=E[2],z=E[3]||"",j={};return j.inverse=!!_&&_.toLowerCase()==="not",j.type=S?S.toLowerCase():"all",z=z.match(/\([^\)]+\)/g)||[],j.expressions=z.map(function(O){var D=O.match(g),A=D[1].toLowerCase().match(x);return{modifier:A[1],feature:A[2],value:D[2]}}),j})}function C(p){var w=Number(p),E;return w||(E=p.match(/^(\d+)\s*\/\s*(\d+)$/),w=E[1]/E[2]),w}function d(p){var w=parseFloat(p),E=String(p).match(y)[1];switch(E){case"dpcm":return w/2.54;case"dppx":return w*96;default:return w}}function u(p){var w=parseFloat(p),E=String(p).match(m)[1];switch(E){case"em":return w*16;case"rem":return w*16;case"cm":return w*96/2.54;case"mm":return w*96/2.54/10;case"in":return w*96;case"pt":return w*72;case"pc":return w*72/12;default:return w}}},"./node_modules/hyphenate-style-name/index.js":(s,a,c)=>{c.r(a),c.d(a,{default:()=>h});var g=/[A-Z]/g,x=/^ms-/,m={};function y(C){return"-"+C.toLowerCase()}function f(C){if(m.hasOwnProperty(C))return m[C];var d=C.replace(g,y);return m[C]=x.test(d)?"-"+d:d}const h=f},"./node_modules/matchmediaquery/index.js":(s,a,c)=>{var g=c("./node_modules/css-mediaquery/index.js").match,x=typeof window<"u"?window.matchMedia:null;function m(f,h,C){var d=this;if(x&&!C){var u=x.call(window,f);this.matches=u.matches,this.media=u.media,u.addListener(E)}else this.matches=g(f,h),this.media=f;this.addListener=p,this.removeListener=w,this.dispose=_;function p(S){u&&u.addListener(S)}function w(S){u&&u.removeListener(S)}function E(S){d.matches=S.matches,d.media=S.media}function _(){u&&u.removeListener(E)}}function y(f,h,C){return new m(f,h,C)}s.exports=y},"./node_modules/object-assign/index.js":s=>{/*
object-assign
(c) Sindre Sorhus
@license MIT
*/var a=Object.getOwnPropertySymbols,c=Object.prototype.hasOwnProperty,g=Object.prototype.propertyIsEnumerable;function x(y){if(y==null)throw new TypeError("Object.assign cannot be called with null or undefined");return Object(y)}function m(){try{if(!Object.assign)return!1;var y=new String("abc");if(y[5]="de",Object.getOwnPropertyNames(y)[0]==="5")return!1;for(var f={},h=0;h<10;h++)f["_"+String.fromCharCode(h)]=h;var C=Object.getOwnPropertyNames(f).map(function(u){return f[u]});if(C.join("")!=="0123456789")return!1;var d={};return"abcdefghijklmnopqrst".split("").forEach(function(u){d[u]=u}),Object.keys(Object.assign({},d)).join("")==="abcdefghijklmnopqrst"}catch{return!1}}s.exports=m()?Object.assign:function(y,f){for(var h,C=x(y),d,u=1;u<arguments.length;u++){h=Object(arguments[u]);for(var p in h)c.call(h,p)&&(C[p]=h[p]);if(a){d=a(h);for(var w=0;w<d.length;w++)g.call(h,d[w])&&(C[d[w]]=h[d[w]])}}return C}},"./node_modules/prop-types/checkPropTypes.js":(s,a,c)=>{var g=function(){};{var x=c("./node_modules/prop-types/lib/ReactPropTypesSecret.js"),m={},y=c("./node_modules/prop-types/lib/has.js");g=function(h){var C="Warning: "+h;typeof console<"u"&&console.error(C);try{throw new Error(C)}catch{}}}function f(h,C,d,u,p){for(var w in h)if(y(h,w)){var E;try{if(typeof h[w]!="function"){var _=Error((u||"React class")+": "+d+" type `"+w+"` is invalid; it must be a function, usually from the `prop-types` package, but received `"+typeof h[w]+"`.This often happens because of typos such as `PropTypes.function` instead of `PropTypes.func`.");throw _.name="Invariant Violation",_}E=h[w](C,w,u,d,null,x)}catch(z){E=z}if(E&&!(E instanceof Error)&&g((u||"React class")+": type specification of "+d+" `"+w+"` is invalid; the type checker function must return `null` or an `Error` but returned a "+typeof E+". You may have forgotten to pass an argument to the type checker creator (arrayOf, instanceOf, objectOf, oneOf, oneOfType, and shape all require an argument)."),E instanceof Error&&!(E.message in m)){m[E.message]=!0;var S=p?p():"";g("Failed "+d+" type: "+E.message+(S??""))}}}f.resetWarningCache=function(){m={}},s.exports=f},"./node_modules/prop-types/factoryWithTypeCheckers.js":(s,a,c)=>{var g=c("./node_modules/react-is/index.js"),x=c("./node_modules/object-assign/index.js"),m=c("./node_modules/prop-types/lib/ReactPropTypesSecret.js"),y=c("./node_modules/prop-types/lib/has.js"),f=c("./node_modules/prop-types/checkPropTypes.js"),h=function(){};h=function(d){var u="Warning: "+d;typeof console<"u"&&console.error(u);try{throw new Error(u)}catch{}};function C(){return null}s.exports=function(d,u){var p=typeof Symbol=="function"&&Symbol.iterator,w="@@iterator";function E(T){var L=T&&(p&&T[p]||T[w]);if(typeof L=="function")return L}var _="<<anonymous>>",S={array:D("array"),bigint:D("bigint"),bool:D("boolean"),func:D("function"),number:D("number"),object:D("object"),string:D("string"),symbol:D("symbol"),any:A(),arrayOf:N,element:me(),elementType:De(),instanceOf:Qe,node:$(),objectOf:b,oneOf:on,oneOfType:I,shape:ce,exact:Dt};function z(T,L){return T===L?T!==0||1/T===1/L:T!==T&&L!==L}function j(T,L){this.message=T,this.data=L&&typeof L=="object"?L:{},this.stack=""}j.prototype=Error.prototype;function O(T){var L={},B=0;function U(Y,W,V,K,q,X,M){if(K=K||_,X=X||V,M!==m){if(u){var ye=new Error("Calling PropTypes validators directly is not supported by the `prop-types` package. Use `PropTypes.checkPropTypes()` to call them. Read more at http://fb.me/use-check-prop-types");throw ye.name="Invariant Violation",ye}else if(typeof console<"u"){var ut=K+":"+V;!L[ut]&&B<3&&(h("You are manually calling a React.PropTypes validation function for the `"+X+"` prop on `"+K+"`. This is deprecated and will throw in the standalone `prop-types` package. You may be seeing this warning due to a third-party PropTypes library. See https://fb.me/react-warning-dont-call-proptypes for details."),L[ut]=!0,B++)}}return W[V]==null?Y?W[V]===null?new j("The "+q+" `"+X+"` is marked as required "+("in `"+K+"`, but its value is `null`.")):new j("The "+q+" `"+X+"` is marked as required in "+("`"+K+"`, but its value is `undefined`.")):null:T(W,V,K,q,X)}var F=U.bind(null,!1);return F.isRequired=U.bind(null,!0),F}function D(T){function L(B,U,F,Y,W,V){var K=B[U],q=ve(K);if(q!==T){var X=Ye(K);return new j("Invalid "+Y+" `"+W+"` of type "+("`"+X+"` supplied to `"+F+"`, expected ")+("`"+T+"`."),{expectedType:T})}return null}return O(L)}function A(){return O(C)}function N(T){function L(B,U,F,Y,W){if(typeof T!="function")return new j("Property `"+W+"` of component `"+F+"` has invalid PropType notation inside arrayOf.");var V=B[U];if(!Array.isArray(V)){var K=ve(V);return new j("Invalid "+Y+" `"+W+"` of type "+("`"+K+"` supplied to `"+F+"`, expected an array."))}for(var q=0;q<V.length;q++){var X=T(V,q,F,Y,W+"["+q+"]",m);if(X instanceof Error)return X}return null}return O(L)}function me(){function T(L,B,U,F,Y){var W=L[B];if(!d(W)){var V=ve(W);return new j("Invalid "+F+" `"+Y+"` of type "+("`"+V+"` supplied to `"+U+"`, expected a single ReactElement."))}return null}return O(T)}function De(){function T(L,B,U,F,Y){var W=L[B];if(!g.isValidElementType(W)){var V=ve(W);return new j("Invalid "+F+" `"+Y+"` of type "+("`"+V+"` supplied to `"+U+"`, expected a single ReactElement type."))}return null}return O(T)}function Qe(T){function L(B,U,F,Y,W){if(!(B[U]instanceof T)){var V=T.name||_,K=ti(B[U]);return new j("Invalid "+Y+" `"+W+"` of type "+("`"+K+"` supplied to `"+F+"`, expected ")+("instance of `"+V+"`."))}return null}return O(L)}function on(T){if(!Array.isArray(T))return arguments.length>1?h("Invalid arguments supplied to oneOf, expected an array, got "+arguments.length+" arguments. A common mistake is to write oneOf(x, y, z) instead of oneOf([x, y, z])."):h("Invalid argument supplied to oneOf, expected an array."),C;function L(B,U,F,Y,W){for(var V=B[U],K=0;K<T.length;K++)if(z(V,T[K]))return null;var q=JSON.stringify(T,function(M,ye){var ut=Ye(ye);return ut==="symbol"?String(ye):ye});return new j("Invalid "+Y+" `"+W+"` of value `"+String(V)+"` "+("supplied to `"+F+"`, expected one of "+q+"."))}return O(L)}function b(T){function L(B,U,F,Y,W){if(typeof T!="function")return new j("Property `"+W+"` of component `"+F+"` has invalid PropType notation inside objectOf.");var V=B[U],K=ve(V);if(K!=="object")return new j("Invalid "+Y+" `"+W+"` of type "+("`"+K+"` supplied to `"+F+"`, expected an object."));for(var q in V)if(y(V,q)){var X=T(V,q,F,Y,W+"."+q,m);if(X instanceof Error)return X}return null}return O(L)}function I(T){if(!Array.isArray(T))return h("Invalid argument supplied to oneOfType, expected an instance of array."),C;for(var L=0;L<T.length;L++){var B=T[L];if(typeof B!="function")return h("Invalid argument supplied to oneOfType. Expected an array of check functions, but received "+Oo(B)+" at index "+L+"."),C}function U(F,Y,W,V,K){for(var q=[],X=0;X<T.length;X++){var M=T[X],ye=M(F,Y,W,V,K,m);if(ye==null)return null;ye.data&&y(ye.data,"expectedType")&&q.push(ye.data.expectedType)}var ut=q.length>0?", expected one of type ["+q.join(", ")+"]":"";return new j("Invalid "+V+" `"+K+"` supplied to "+("`"+W+"`"+ut+"."))}return O(U)}function $(){function T(L,B,U,F,Y){return Ae(L[B])?null:new j("Invalid "+F+" `"+Y+"` supplied to "+("`"+U+"`, expected a ReactNode."))}return O(T)}function ne(T,L,B,U,F){return new j((T||"React class")+": "+L+" type `"+B+"."+U+"` is invalid; it must be a function, usually from the `prop-types` package, but received `"+F+"`.")}function ce(T){function L(B,U,F,Y,W){var V=B[U],K=ve(V);if(K!=="object")return new j("Invalid "+Y+" `"+W+"` of type `"+K+"` "+("supplied to `"+F+"`, expected `object`."));for(var q in T){var X=T[q];if(typeof X!="function")return ne(F,Y,W,q,Ye(X));var M=X(V,q,F,Y,W+"."+q,m);if(M)return M}return null}return O(L)}function Dt(T){function L(B,U,F,Y,W){var V=B[U],K=ve(V);if(K!=="object")return new j("Invalid "+Y+" `"+W+"` of type `"+K+"` "+("supplied to `"+F+"`, expected `object`."));var q=x({},B[U],T);for(var X in q){var M=T[X];if(y(T,X)&&typeof M!="function")return ne(F,Y,W,X,Ye(M));if(!M)return new j("Invalid "+Y+" `"+W+"` key `"+X+"` supplied to `"+F+"`.\nBad object: "+JSON.stringify(B[U],null,"  ")+`
Valid keys: `+JSON.stringify(Object.keys(T),null,"  "));var ye=M(V,X,F,Y,W+"."+X,m);if(ye)return ye}return null}return O(L)}function Ae(T){switch(typeof T){case"number":case"string":case"undefined":return!0;case"boolean":return!T;case"object":if(Array.isArray(T))return T.every(Ae);if(T===null||d(T))return!0;var L=E(T);if(L){var B=L.call(T),U;if(L!==T.entries){for(;!(U=B.next()).done;)if(!Ae(U.value))return!1}else for(;!(U=B.next()).done;){var F=U.value;if(F&&!Ae(F[1]))return!1}}else return!1;return!0;default:return!1}}function ln(T,L){return T==="symbol"?!0:L?L["@@toStringTag"]==="Symbol"||typeof Symbol=="function"&&L instanceof Symbol:!1}function ve(T){var L=typeof T;return Array.isArray(T)?"array":T instanceof RegExp?"object":ln(L,T)?"symbol":L}function Ye(T){if(typeof T>"u"||T===null)return""+T;var L=ve(T);if(L==="object"){if(T instanceof Date)return"date";if(T instanceof RegExp)return"regexp"}return L}function Oo(T){var L=Ye(T);switch(L){case"array":case"object":return"an "+L;case"boolean":case"date":case"regexp":return"a "+L;default:return L}}function ti(T){return!T.constructor||!T.constructor.name?_:T.constructor.name}return S.checkPropTypes=f,S.resetWarningCache=f.resetWarningCache,S.PropTypes=S,S}},"./node_modules/prop-types/index.js":(s,a,c)=>{{var g=c("./node_modules/react-is/index.js"),x=!0;s.exports=c("./node_modules/prop-types/factoryWithTypeCheckers.js")(g.isElement,x)}},"./node_modules/prop-types/lib/ReactPropTypesSecret.js":s=>{var a="SECRET_DO_NOT_PASS_THIS_OR_YOU_WILL_BE_FIRED";s.exports=a},"./node_modules/prop-types/lib/has.js":s=>{s.exports=Function.call.bind(Object.prototype.hasOwnProperty)},"./node_modules/react-is/cjs/react-is.development.js":(s,a)=>{/** @license React v16.13.1
 * react-is.development.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */(function(){var c=typeof Symbol=="function"&&Symbol.for,g=c?Symbol.for("react.element"):60103,x=c?Symbol.for("react.portal"):60106,m=c?Symbol.for("react.fragment"):60107,y=c?Symbol.for("react.strict_mode"):60108,f=c?Symbol.for("react.profiler"):60114,h=c?Symbol.for("react.provider"):60109,C=c?Symbol.for("react.context"):60110,d=c?Symbol.for("react.async_mode"):60111,u=c?Symbol.for("react.concurrent_mode"):60111,p=c?Symbol.for("react.forward_ref"):60112,w=c?Symbol.for("react.suspense"):60113,E=c?Symbol.for("react.suspense_list"):60120,_=c?Symbol.for("react.memo"):60115,S=c?Symbol.for("react.lazy"):60116,z=c?Symbol.for("react.block"):60121,j=c?Symbol.for("react.fundamental"):60117,O=c?Symbol.for("react.responder"):60118,D=c?Symbol.for("react.scope"):60119;function A(M){return typeof M=="string"||typeof M=="function"||M===m||M===u||M===f||M===y||M===w||M===E||typeof M=="object"&&M!==null&&(M.$$typeof===S||M.$$typeof===_||M.$$typeof===h||M.$$typeof===C||M.$$typeof===p||M.$$typeof===j||M.$$typeof===O||M.$$typeof===D||M.$$typeof===z)}function N(M){if(typeof M=="object"&&M!==null){var ye=M.$$typeof;switch(ye){case g:var ut=M.type;switch(ut){case d:case u:case m:case f:case y:case w:return ut;default:var ns=ut&&ut.$$typeof;switch(ns){case C:case p:case S:case _:case h:return ns;default:return ye}}case x:return ye}}}var me=d,De=u,Qe=C,on=h,b=g,I=p,$=m,ne=S,ce=_,Dt=x,Ae=f,ln=y,ve=w,Ye=!1;function Oo(M){return Ye||(Ye=!0,console.warn("The ReactIs.isAsyncMode() alias has been deprecated, and will be removed in React 17+. Update your code to use ReactIs.isConcurrentMode() instead. It has the exact same API.")),ti(M)||N(M)===d}function ti(M){return N(M)===u}function T(M){return N(M)===C}function L(M){return N(M)===h}function B(M){return typeof M=="object"&&M!==null&&M.$$typeof===g}function U(M){return N(M)===p}function F(M){return N(M)===m}function Y(M){return N(M)===S}function W(M){return N(M)===_}function V(M){return N(M)===x}function K(M){return N(M)===f}function q(M){return N(M)===y}function X(M){return N(M)===w}a.AsyncMode=me,a.ConcurrentMode=De,a.ContextConsumer=Qe,a.ContextProvider=on,a.Element=b,a.ForwardRef=I,a.Fragment=$,a.Lazy=ne,a.Memo=ce,a.Portal=Dt,a.Profiler=Ae,a.StrictMode=ln,a.Suspense=ve,a.isAsyncMode=Oo,a.isConcurrentMode=ti,a.isContextConsumer=T,a.isContextProvider=L,a.isElement=B,a.isForwardRef=U,a.isFragment=F,a.isLazy=Y,a.isMemo=W,a.isPortal=V,a.isProfiler=K,a.isStrictMode=q,a.isSuspense=X,a.isValidElementType=A,a.typeOf=N})()},"./node_modules/react-is/index.js":(s,a,c)=>{s.exports=c("./node_modules/react-is/cjs/react-is.development.js")},"./node_modules/shallow-equal/dist/index.esm.js":(s,a,c)=>{c.r(a),c.d(a,{shallowEqualArrays:()=>x,shallowEqualObjects:()=>g});function g(m,y){if(m===y)return!0;if(!m||!y)return!1;var f=Object.keys(m),h=Object.keys(y),C=f.length;if(h.length!==C)return!1;for(var d=0;d<C;d++){var u=f[d];if(m[u]!==y[u]||!Object.prototype.hasOwnProperty.call(y,u))return!1}return!0}function x(m,y){if(m===y)return!0;if(!m||!y)return!1;var f=m.length;if(y.length!==f)return!1;for(var h=0;h<f;h++)if(m[h]!==y[h])return!1;return!0}},"./src/Component.ts":function(s,a,c){var g=this&&this.__rest||function(f,h){var C={};for(var d in f)Object.prototype.hasOwnProperty.call(f,d)&&h.indexOf(d)<0&&(C[d]=f[d]);if(f!=null&&typeof Object.getOwnPropertySymbols=="function")for(var u=0,d=Object.getOwnPropertySymbols(f);u<d.length;u++)h.indexOf(d[u])<0&&Object.prototype.propertyIsEnumerable.call(f,d[u])&&(C[d[u]]=f[d[u]]);return C},x=this&&this.__importDefault||function(f){return f&&f.__esModule?f:{default:f}};Object.defineProperty(a,"__esModule",{value:!0});var m=x(c("./src/useMediaQuery.ts")),y=function(f){var h=f.children,C=f.device,d=f.onChange,u=g(f,["children","device","onChange"]),p=(0,m.default)(u,C,d);return typeof h=="function"?h(p):p?h:null};a.default=y},"./src/Context.ts":(s,a,c)=>{Object.defineProperty(a,"__esModule",{value:!0});var g=c("react"),x=(0,g.createContext)(void 0);a.default=x},"./src/index.ts":function(s,a,c){var g=this&&this.__importDefault||function(h){return h&&h.__esModule?h:{default:h}};Object.defineProperty(a,"__esModule",{value:!0}),a.Context=a.toQuery=a.useMediaQuery=a.default=void 0;var x=g(c("./src/useMediaQuery.ts"));a.useMediaQuery=x.default;var m=g(c("./src/Component.ts"));a.default=m.default;var y=g(c("./src/toQuery.ts"));a.toQuery=y.default;var f=g(c("./src/Context.ts"));a.Context=f.default},"./src/mediaQuery.ts":function(s,a,c){var g=this&&this.__assign||function(){return g=Object.assign||function(w){for(var E,_=1,S=arguments.length;_<S;_++){E=arguments[_];for(var z in E)Object.prototype.hasOwnProperty.call(E,z)&&(w[z]=E[z])}return w},g.apply(this,arguments)},x=this&&this.__rest||function(w,E){var _={};for(var S in w)Object.prototype.hasOwnProperty.call(w,S)&&E.indexOf(S)<0&&(_[S]=w[S]);if(w!=null&&typeof Object.getOwnPropertySymbols=="function")for(var z=0,S=Object.getOwnPropertySymbols(w);z<S.length;z++)E.indexOf(S[z])<0&&Object.prototype.propertyIsEnumerable.call(w,S[z])&&(_[S[z]]=w[S[z]]);return _},m=this&&this.__importDefault||function(w){return w&&w.__esModule?w:{default:w}};Object.defineProperty(a,"__esModule",{value:!0});var y=m(c("./node_modules/prop-types/index.js")),f=y.default.oneOfType([y.default.string,y.default.number]),h={all:y.default.bool,grid:y.default.bool,aural:y.default.bool,braille:y.default.bool,handheld:y.default.bool,print:y.default.bool,projection:y.default.bool,screen:y.default.bool,tty:y.default.bool,tv:y.default.bool,embossed:y.default.bool},C={orientation:y.default.oneOf(["portrait","landscape"]),scan:y.default.oneOf(["progressive","interlace"]),aspectRatio:y.default.string,deviceAspectRatio:y.default.string,height:f,deviceHeight:f,width:f,deviceWidth:f,color:y.default.bool,colorIndex:y.default.bool,monochrome:y.default.bool,resolution:f,type:Object.keys(h)};C.type;var d=x(C,["type"]),u=g({minAspectRatio:y.default.string,maxAspectRatio:y.default.string,minDeviceAspectRatio:y.default.string,maxDeviceAspectRatio:y.default.string,minHeight:f,maxHeight:f,minDeviceHeight:f,maxDeviceHeight:f,minWidth:f,maxWidth:f,minDeviceWidth:f,maxDeviceWidth:f,minColor:y.default.number,maxColor:y.default.number,minColorIndex:y.default.number,maxColorIndex:y.default.number,minMonochrome:y.default.number,maxMonochrome:y.default.number,minResolution:f,maxResolution:f},d),p=g(g({},h),u);a.default={all:p,types:h,matchers:C,features:u}},"./src/toQuery.ts":function(s,a,c){var g=this&&this.__importDefault||function(d){return d&&d.__esModule?d:{default:d}};Object.defineProperty(a,"__esModule",{value:!0});var x=g(c("./node_modules/hyphenate-style-name/index.js")),m=g(c("./src/mediaQuery.ts")),y=function(d){return"not ".concat(d)},f=function(d,u){var p=(0,x.default)(d);return typeof u=="number"&&(u="".concat(u,"px")),u===!0?p:u===!1?y(p):"(".concat(p,": ").concat(u,")")},h=function(d){return d.join(" and ")},C=function(d){var u=[];return Object.keys(m.default.all).forEach(function(p){var w=d[p];w!=null&&u.push(f(p,w))}),h(u)};a.default=C},"./src/useMediaQuery.ts":function(s,a,c){var g=this&&this.__importDefault||function(j){return j&&j.__esModule?j:{default:j}};Object.defineProperty(a,"__esModule",{value:!0});var x=c("react"),m=g(c("./node_modules/matchmediaquery/index.js")),y=g(c("./node_modules/hyphenate-style-name/index.js")),f=c("./node_modules/shallow-equal/dist/index.esm.js"),h=g(c("./src/toQuery.ts")),C=g(c("./src/Context.ts")),d=function(j){return j.query||(0,h.default)(j)},u=function(j){if(j){var O=Object.keys(j);return O.reduce(function(D,A){return D[(0,y.default)(A)]=j[A],D},{})}},p=function(){var j=(0,x.useRef)(!1);return(0,x.useEffect)(function(){j.current=!0},[]),j.current},w=function(j){var O=(0,x.useContext)(C.default),D=function(){return u(j)||u(O)},A=(0,x.useState)(D),N=A[0],me=A[1];return(0,x.useEffect)(function(){var De=D();(0,f.shallowEqualObjects)(N,De)||me(De)},[j,O]),N},E=function(j){var O=function(){return d(j)},D=(0,x.useState)(O),A=D[0],N=D[1];return(0,x.useEffect)(function(){var me=O();A!==me&&N(me)},[j]),A},_=function(j,O){var D=function(){return(0,m.default)(j,O||{},!!O)},A=(0,x.useState)(D),N=A[0],me=A[1],De=p();return(0,x.useEffect)(function(){if(De){var Qe=D();return me(Qe),function(){Qe&&Qe.dispose()}}},[j,O]),N},S=function(j){var O=(0,x.useState)(j.matches),D=O[0],A=O[1];return(0,x.useEffect)(function(){var N=function(me){A(me.matches)};return j.addListener(N),A(j.matches),function(){j.removeListener(N)}},[j]),D},z=function(j,O,D){var A=w(O),N=E(j);if(!N)throw new Error("Invalid or missing MediaQuery!");var me=_(N,A),De=S(me),Qe=p();return(0,x.useEffect)(function(){Qe&&D&&D(De)},[De]),(0,x.useEffect)(function(){return function(){me&&me.dispose()}},[]),De};a.default=z},react:s=>{s.exports=n}},i={};function o(s){var a=i[s];if(a!==void 0)return a.exports;var c=i[s]={exports:{}};return r[s].call(c.exports,c,c.exports,o),c.exports}o.d=(s,a)=>{for(var c in a)o.o(a,c)&&!o.o(s,c)&&Object.defineProperty(s,c,{enumerable:!0,get:a[c]})},o.o=(s,a)=>Object.prototype.hasOwnProperty.call(s,a),o.r=s=>{typeof Symbol<"u"&&Symbol.toStringTag&&Object.defineProperty(s,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(s,"__esModule",{value:!0})};var l=o("./src/index.ts");return l})())})(Hd);var Yh=Hd.exports;const J=so(Yh),te="/healthy-management-project/assets/sprite-IHRcLKoZ.svg";function ea(){return ea=Object.assign?Object.assign.bind():function(e){for(var t=1;t<arguments.length;t++){var n=arguments[t];for(var r in n)Object.prototype.hasOwnProperty.call(n,r)&&(e[r]=n[r])}return e},ea.apply(this,arguments)}function Bd(e){var t=Object.create(null);return function(n){return t[n]===void 0&&(t[n]=e(n)),t[n]}}var Kh=/^((children|dangerouslySetInnerHTML|key|ref|autoFocus|defaultValue|defaultChecked|innerHTML|suppressContentEditableWarning|suppressHydrationWarning|valueLink|abbr|accept|acceptCharset|accessKey|action|allow|allowUserMedia|allowPaymentRequest|allowFullScreen|allowTransparency|alt|async|autoComplete|autoPlay|capture|cellPadding|cellSpacing|challenge|charSet|checked|cite|classID|className|cols|colSpan|content|contentEditable|contextMenu|controls|controlsList|coords|crossOrigin|data|dateTime|decoding|default|defer|dir|disabled|disablePictureInPicture|download|draggable|encType|enterKeyHint|form|formAction|formEncType|formMethod|formNoValidate|formTarget|frameBorder|headers|height|hidden|high|href|hrefLang|htmlFor|httpEquiv|id|inputMode|integrity|is|keyParams|keyType|kind|label|lang|list|loading|loop|low|marginHeight|marginWidth|max|maxLength|media|mediaGroup|method|min|minLength|multiple|muted|name|nonce|noValidate|open|optimum|pattern|placeholder|playsInline|poster|preload|profile|radioGroup|readOnly|referrerPolicy|rel|required|reversed|role|rows|rowSpan|sandbox|scope|scoped|scrolling|seamless|selected|shape|size|sizes|slot|span|spellCheck|src|srcDoc|srcLang|srcSet|start|step|style|summary|tabIndex|target|title|translate|type|useMap|value|width|wmode|wrap|about|datatype|inlist|prefix|property|resource|typeof|vocab|autoCapitalize|autoCorrect|autoSave|color|incremental|fallback|inert|itemProp|itemScope|itemType|itemID|itemRef|on|option|results|security|unselectable|accentHeight|accumulate|additive|alignmentBaseline|allowReorder|alphabetic|amplitude|arabicForm|ascent|attributeName|attributeType|autoReverse|azimuth|baseFrequency|baselineShift|baseProfile|bbox|begin|bias|by|calcMode|capHeight|clip|clipPathUnits|clipPath|clipRule|colorInterpolation|colorInterpolationFilters|colorProfile|colorRendering|contentScriptType|contentStyleType|cursor|cx|cy|d|decelerate|descent|diffuseConstant|direction|display|divisor|dominantBaseline|dur|dx|dy|edgeMode|elevation|enableBackground|end|exponent|externalResourcesRequired|fill|fillOpacity|fillRule|filter|filterRes|filterUnits|floodColor|floodOpacity|focusable|fontFamily|fontSize|fontSizeAdjust|fontStretch|fontStyle|fontVariant|fontWeight|format|from|fr|fx|fy|g1|g2|glyphName|glyphOrientationHorizontal|glyphOrientationVertical|glyphRef|gradientTransform|gradientUnits|hanging|horizAdvX|horizOriginX|ideographic|imageRendering|in|in2|intercept|k|k1|k2|k3|k4|kernelMatrix|kernelUnitLength|kerning|keyPoints|keySplines|keyTimes|lengthAdjust|letterSpacing|lightingColor|limitingConeAngle|local|markerEnd|markerMid|markerStart|markerHeight|markerUnits|markerWidth|mask|maskContentUnits|maskUnits|mathematical|mode|numOctaves|offset|opacity|operator|order|orient|orientation|origin|overflow|overlinePosition|overlineThickness|panose1|paintOrder|pathLength|patternContentUnits|patternTransform|patternUnits|pointerEvents|points|pointsAtX|pointsAtY|pointsAtZ|preserveAlpha|preserveAspectRatio|primitiveUnits|r|radius|refX|refY|renderingIntent|repeatCount|repeatDur|requiredExtensions|requiredFeatures|restart|result|rotate|rx|ry|scale|seed|shapeRendering|slope|spacing|specularConstant|specularExponent|speed|spreadMethod|startOffset|stdDeviation|stemh|stemv|stitchTiles|stopColor|stopOpacity|strikethroughPosition|strikethroughThickness|string|stroke|strokeDasharray|strokeDashoffset|strokeLinecap|strokeLinejoin|strokeMiterlimit|strokeOpacity|strokeWidth|surfaceScale|systemLanguage|tableValues|targetX|targetY|textAnchor|textDecoration|textRendering|textLength|to|transform|u1|u2|underlinePosition|underlineThickness|unicode|unicodeBidi|unicodeRange|unitsPerEm|vAlphabetic|vHanging|vIdeographic|vMathematical|values|vectorEffect|version|vertAdvY|vertOriginX|vertOriginY|viewBox|viewTarget|visibility|widths|wordSpacing|writingMode|x|xHeight|x1|x2|xChannelSelector|xlinkActuate|xlinkArcrole|xlinkHref|xlinkRole|xlinkShow|xlinkTitle|xlinkType|xmlBase|xmlns|xmlnsXlink|xmlLang|xmlSpace|y|y1|y2|yChannelSelector|z|zoomAndPan|for|class|autofocus)|(([Dd][Aa][Tt][Aa]|[Aa][Rr][Ii][Aa]|x)-.*))$/,Xh=Bd(function(e){return Kh.test(e)||e.charCodeAt(0)===111&&e.charCodeAt(1)===110&&e.charCodeAt(2)<91});function Gh(e){if(e.sheet)return e.sheet;for(var t=0;t<document.styleSheets.length;t++)if(document.styleSheets[t].ownerNode===e)return document.styleSheets[t]}function Zh(e){var t=document.createElement("style");return t.setAttribute("data-emotion",e.key),e.nonce!==void 0&&t.setAttribute("nonce",e.nonce),t.appendChild(document.createTextNode("")),t.setAttribute("data-s",""),t}var Jh=function(){function e(n){var r=this;this._insertTag=function(i){var o;r.tags.length===0?r.insertionPoint?o=r.insertionPoint.nextSibling:r.prepend?o=r.container.firstChild:o=r.before:o=r.tags[r.tags.length-1].nextSibling,r.container.insertBefore(i,o),r.tags.push(i)},this.isSpeedy=n.speedy===void 0?!0:n.speedy,this.tags=[],this.ctr=0,this.nonce=n.nonce,this.key=n.key,this.container=n.container,this.prepend=n.prepend,this.insertionPoint=n.insertionPoint,this.before=null}var t=e.prototype;return t.hydrate=function(r){r.forEach(this._insertTag)},t.insert=function(r){this.ctr%(this.isSpeedy?65e3:1)===0&&this._insertTag(Zh(this));var i=this.tags[this.tags.length-1];if(this.isSpeedy){var o=Gh(i);try{o.insertRule(r,o.cssRules.length)}catch{}}else i.appendChild(document.createTextNode(r));this.ctr++},t.flush=function(){this.tags.forEach(function(r){return r.parentNode&&r.parentNode.removeChild(r)}),this.tags=[],this.ctr=0},e}(),ze="-ms-",ao="-moz-",G="-webkit-",Qd="comm",qa="rule",es="decl",qh="@import",Yd="@keyframes",em="@layer",tm=Math.abs,jo=String.fromCharCode,nm=Object.assign;function rm(e,t){return Ee(e,0)^45?(((t<<2^Ee(e,0))<<2^Ee(e,1))<<2^Ee(e,2))<<2^Ee(e,3):0}function Kd(e){return e.trim()}function im(e,t){return(e=t.exec(e))?e[0]:e}function Z(e,t,n){return e.replace(t,n)}function ta(e,t){return e.indexOf(t)}function Ee(e,t){return e.charCodeAt(t)|0}function Br(e,t,n){return e.slice(t,n)}function wt(e){return e.length}function ts(e){return e.length}function yi(e,t){return t.push(e),e}function om(e,t){return e.map(t).join("")}var Po=1,Zn=1,Xd=0,Be=0,fe=0,tr="";function zo(e,t,n,r,i,o,l){return{value:e,root:t,parent:n,type:r,props:i,children:o,line:Po,column:Zn,length:l,return:""}}function cr(e,t){return nm(zo("",null,null,"",null,null,0),e,{length:-e.length},t)}function lm(){return fe}function am(){return fe=Be>0?Ee(tr,--Be):0,Zn--,fe===10&&(Zn=1,Po--),fe}function Ze(){return fe=Be<Xd?Ee(tr,Be++):0,Zn++,fe===10&&(Zn=1,Po++),fe}function _t(){return Ee(tr,Be)}function Li(){return Be}function ei(e,t){return Br(tr,e,t)}function Qr(e){switch(e){case 0:case 9:case 10:case 13:case 32:return 5;case 33:case 43:case 44:case 47:case 62:case 64:case 126:case 59:case 123:case 125:return 4;case 58:return 3;case 34:case 39:case 40:case 91:return 2;case 41:case 93:return 1}return 0}function Gd(e){return Po=Zn=1,Xd=wt(tr=e),Be=0,[]}function Zd(e){return tr="",e}function Ni(e){return Kd(ei(Be-1,na(e===91?e+2:e===40?e+1:e)))}function sm(e){for(;(fe=_t())&&fe<33;)Ze();return Qr(e)>2||Qr(fe)>3?"":" "}function um(e,t){for(;--t&&Ze()&&!(fe<48||fe>102||fe>57&&fe<65||fe>70&&fe<97););return ei(e,Li()+(t<6&&_t()==32&&Ze()==32))}function na(e){for(;Ze();)switch(fe){case e:return Be;case 34:case 39:e!==34&&e!==39&&na(fe);break;case 40:e===41&&na(e);break;case 92:Ze();break}return Be}function cm(e,t){for(;Ze()&&e+fe!==57;)if(e+fe===84&&_t()===47)break;return"/*"+ei(t,Be-1)+"*"+jo(e===47?e:Ze())}function dm(e){for(;!Qr(_t());)Ze();return ei(e,Be)}function pm(e){return Zd(Ii("",null,null,null,[""],e=Gd(e),0,[0],e))}function Ii(e,t,n,r,i,o,l,s,a){for(var c=0,g=0,x=l,m=0,y=0,f=0,h=1,C=1,d=1,u=0,p="",w=i,E=o,_=r,S=p;C;)switch(f=u,u=Ze()){case 40:if(f!=108&&Ee(S,x-1)==58){ta(S+=Z(Ni(u),"&","&\f"),"&\f")!=-1&&(d=-1);break}case 34:case 39:case 91:S+=Ni(u);break;case 9:case 10:case 13:case 32:S+=sm(f);break;case 92:S+=um(Li()-1,7);continue;case 47:switch(_t()){case 42:case 47:yi(fm(cm(Ze(),Li()),t,n),a);break;default:S+="/"}break;case 123*h:s[c++]=wt(S)*d;case 125*h:case 59:case 0:switch(u){case 0:case 125:C=0;case 59+g:d==-1&&(S=Z(S,/\f/g,"")),y>0&&wt(S)-x&&yi(y>32?hu(S+";",r,n,x-1):hu(Z(S," ","")+";",r,n,x-2),a);break;case 59:S+=";";default:if(yi(_=fu(S,t,n,c,g,i,s,p,w=[],E=[],x),o),u===123)if(g===0)Ii(S,t,_,_,w,o,x,s,E);else switch(m===99&&Ee(S,3)===110?100:m){case 100:case 108:case 109:case 115:Ii(e,_,_,r&&yi(fu(e,_,_,0,0,i,s,p,i,w=[],x),E),i,E,x,s,r?w:E);break;default:Ii(S,_,_,_,[""],E,0,s,E)}}c=g=y=0,h=d=1,p=S="",x=l;break;case 58:x=1+wt(S),y=f;default:if(h<1){if(u==123)--h;else if(u==125&&h++==0&&am()==125)continue}switch(S+=jo(u),u*h){case 38:d=g>0?1:(S+="\f",-1);break;case 44:s[c++]=(wt(S)-1)*d,d=1;break;case 64:_t()===45&&(S+=Ni(Ze())),m=_t(),g=x=wt(p=S+=dm(Li())),u++;break;case 45:f===45&&wt(S)==2&&(h=0)}}return o}function fu(e,t,n,r,i,o,l,s,a,c,g){for(var x=i-1,m=i===0?o:[""],y=ts(m),f=0,h=0,C=0;f<r;++f)for(var d=0,u=Br(e,x+1,x=tm(h=l[f])),p=e;d<y;++d)(p=Kd(h>0?m[d]+" "+u:Z(u,/&\f/g,m[d])))&&(a[C++]=p);return zo(e,t,n,i===0?qa:s,a,c,g)}function fm(e,t,n){return zo(e,t,n,Qd,jo(lm()),Br(e,2,-2),0)}function hu(e,t,n,r){return zo(e,t,n,es,Br(e,0,r),Br(e,r+1,-1),r)}function Vn(e,t){for(var n="",r=ts(e),i=0;i<r;i++)n+=t(e[i],i,e,t)||"";return n}function hm(e,t,n,r){switch(e.type){case em:if(e.children.length)break;case qh:case es:return e.return=e.return||e.value;case Qd:return"";case Yd:return e.return=e.value+"{"+Vn(e.children,r)+"}";case qa:e.value=e.props.join(",")}return wt(n=Vn(e.children,r))?e.return=e.value+"{"+n+"}":""}function mm(e){var t=ts(e);return function(n,r,i,o){for(var l="",s=0;s<t;s++)l+=e[s](n,r,i,o)||"";return l}}function gm(e){return function(t){t.root||(t=t.return)&&e(t)}}var xm=function(t,n,r){for(var i=0,o=0;i=o,o=_t(),i===38&&o===12&&(n[r]=1),!Qr(o);)Ze();return ei(t,Be)},vm=function(t,n){var r=-1,i=44;do switch(Qr(i)){case 0:i===38&&_t()===12&&(n[r]=1),t[r]+=xm(Be-1,n,r);break;case 2:t[r]+=Ni(i);break;case 4:if(i===44){t[++r]=_t()===58?"&\f":"",n[r]=t[r].length;break}default:t[r]+=jo(i)}while(i=Ze());return t},ym=function(t,n){return Zd(vm(Gd(t),n))},mu=new WeakMap,wm=function(t){if(!(t.type!=="rule"||!t.parent||t.length<1)){for(var n=t.value,r=t.parent,i=t.column===r.column&&t.line===r.line;r.type!=="rule";)if(r=r.parent,!r)return;if(!(t.props.length===1&&n.charCodeAt(0)!==58&&!mu.get(r))&&!i){mu.set(t,!0);for(var o=[],l=ym(n,o),s=r.props,a=0,c=0;a<l.length;a++)for(var g=0;g<s.length;g++,c++)t.props[c]=o[a]?l[a].replace(/&\f/g,s[g]):s[g]+" "+l[a]}}},km=function(t){if(t.type==="decl"){var n=t.value;n.charCodeAt(0)===108&&n.charCodeAt(2)===98&&(t.return="",t.value="")}};function Jd(e,t){switch(rm(e,t)){case 5103:return G+"print-"+e+e;case 5737:case 4201:case 3177:case 3433:case 1641:case 4457:case 2921:case 5572:case 6356:case 5844:case 3191:case 6645:case 3005:case 6391:case 5879:case 5623:case 6135:case 4599:case 4855:case 4215:case 6389:case 5109:case 5365:case 5621:case 3829:return G+e+e;case 5349:case 4246:case 4810:case 6968:case 2756:return G+e+ao+e+ze+e+e;case 6828:case 4268:return G+e+ze+e+e;case 6165:return G+e+ze+"flex-"+e+e;case 5187:return G+e+Z(e,/(\w+).+(:[^]+)/,G+"box-$1$2"+ze+"flex-$1$2")+e;case 5443:return G+e+ze+"flex-item-"+Z(e,/flex-|-self/,"")+e;case 4675:return G+e+ze+"flex-line-pack"+Z(e,/align-content|flex-|-self/,"")+e;case 5548:return G+e+ze+Z(e,"shrink","negative")+e;case 5292:return G+e+ze+Z(e,"basis","preferred-size")+e;case 6060:return G+"box-"+Z(e,"-grow","")+G+e+ze+Z(e,"grow","positive")+e;case 4554:return G+Z(e,/([^-])(transform)/g,"$1"+G+"$2")+e;case 6187:return Z(Z(Z(e,/(zoom-|grab)/,G+"$1"),/(image-set)/,G+"$1"),e,"")+e;case 5495:case 3959:return Z(e,/(image-set\([^]*)/,G+"$1$`$1");case 4968:return Z(Z(e,/(.+:)(flex-)?(.*)/,G+"box-pack:$3"+ze+"flex-pack:$3"),/s.+-b[^;]+/,"justify")+G+e+e;case 4095:case 3583:case 4068:case 2532:return Z(e,/(.+)-inline(.+)/,G+"$1$2")+e;case 8116:case 7059:case 5753:case 5535:case 5445:case 5701:case 4933:case 4677:case 5533:case 5789:case 5021:case 4765:if(wt(e)-1-t>6)switch(Ee(e,t+1)){case 109:if(Ee(e,t+4)!==45)break;case 102:return Z(e,/(.+:)(.+)-([^]+)/,"$1"+G+"$2-$3$1"+ao+(Ee(e,t+3)==108?"$3":"$2-$3"))+e;case 115:return~ta(e,"stretch")?Jd(Z(e,"stretch","fill-available"),t)+e:e}break;case 4949:if(Ee(e,t+1)!==115)break;case 6444:switch(Ee(e,wt(e)-3-(~ta(e,"!important")&&10))){case 107:return Z(e,":",":"+G)+e;case 101:return Z(e,/(.+:)([^;!]+)(;|!.+)?/,"$1"+G+(Ee(e,14)===45?"inline-":"")+"box$3$1"+G+"$2$3$1"+ze+"$2box$3")+e}break;case 5936:switch(Ee(e,t+11)){case 114:return G+e+ze+Z(e,/[svh]\w+-[tblr]{2}/,"tb")+e;case 108:return G+e+ze+Z(e,/[svh]\w+-[tblr]{2}/,"tb-rl")+e;case 45:return G+e+ze+Z(e,/[svh]\w+-[tblr]{2}/,"lr")+e}return G+e+ze+e+e}return e}var Sm=function(t,n,r,i){if(t.length>-1&&!t.return)switch(t.type){case es:t.return=Jd(t.value,t.length);break;case Yd:return Vn([cr(t,{value:Z(t.value,"@","@"+G)})],i);case qa:if(t.length)return om(t.props,function(o){switch(im(o,/(::plac\w+|:read-\w+)/)){case":read-only":case":read-write":return Vn([cr(t,{props:[Z(o,/:(read-\w+)/,":"+ao+"$1")]})],i);case"::placeholder":return Vn([cr(t,{props:[Z(o,/:(plac\w+)/,":"+G+"input-$1")]}),cr(t,{props:[Z(o,/:(plac\w+)/,":"+ao+"$1")]}),cr(t,{props:[Z(o,/:(plac\w+)/,ze+"input-$1")]})],i)}return""})}},Em=[Sm],Cm=function(t){var n=t.key;if(n==="css"){var r=document.querySelectorAll("style[data-emotion]:not([data-s])");Array.prototype.forEach.call(r,function(h){var C=h.getAttribute("data-emotion");C.indexOf(" ")!==-1&&(document.head.appendChild(h),h.setAttribute("data-s",""))})}var i=t.stylisPlugins||Em,o={},l,s=[];l=t.container||document.head,Array.prototype.forEach.call(document.querySelectorAll('style[data-emotion^="'+n+' "]'),function(h){for(var C=h.getAttribute("data-emotion").split(" "),d=1;d<C.length;d++)o[C[d]]=!0;s.push(h)});var a,c=[wm,km];{var g,x=[hm,gm(function(h){g.insert(h)})],m=mm(c.concat(i,x)),y=function(C){return Vn(pm(C),m)};a=function(C,d,u,p){g=u,y(C?C+"{"+d.styles+"}":d.styles),p&&(f.inserted[d.name]=!0)}}var f={key:n,sheet:new Jh({key:n,container:l,nonce:t.nonce,speedy:t.speedy,prepend:t.prepend,insertionPoint:t.insertionPoint}),nonce:t.nonce,inserted:o,registered:{},insert:a};return f.sheet.hydrate(s),f},_m=!0;function jm(e,t,n){var r="";return n.split(" ").forEach(function(i){e[i]!==void 0?t.push(e[i]+";"):r+=i+" "}),r}var qd=function(t,n,r){var i=t.key+"-"+n.name;(r===!1||_m===!1)&&t.registered[i]===void 0&&(t.registered[i]=n.styles)},Pm=function(t,n,r){qd(t,n,r);var i=t.key+"-"+n.name;if(t.inserted[n.name]===void 0){var o=n;do t.insert(n===o?"."+i:"",o,t.sheet,!0),o=o.next;while(o!==void 0)}};function zm(e){for(var t=0,n,r=0,i=e.length;i>=4;++r,i-=4)n=e.charCodeAt(r)&255|(e.charCodeAt(++r)&255)<<8|(e.charCodeAt(++r)&255)<<16|(e.charCodeAt(++r)&255)<<24,n=(n&65535)*1540483477+((n>>>16)*59797<<16),n^=n>>>24,t=(n&65535)*1540483477+((n>>>16)*59797<<16)^(t&65535)*1540483477+((t>>>16)*59797<<16);switch(i){case 3:t^=(e.charCodeAt(r+2)&255)<<16;case 2:t^=(e.charCodeAt(r+1)&255)<<8;case 1:t^=e.charCodeAt(r)&255,t=(t&65535)*1540483477+((t>>>16)*59797<<16)}return t^=t>>>13,t=(t&65535)*1540483477+((t>>>16)*59797<<16),((t^t>>>15)>>>0).toString(36)}var Tm={animationIterationCount:1,aspectRatio:1,borderImageOutset:1,borderImageSlice:1,borderImageWidth:1,boxFlex:1,boxFlexGroup:1,boxOrdinalGroup:1,columnCount:1,columns:1,flex:1,flexGrow:1,flexPositive:1,flexShrink:1,flexNegative:1,flexOrder:1,gridRow:1,gridRowEnd:1,gridRowSpan:1,gridRowStart:1,gridColumn:1,gridColumnEnd:1,gridColumnSpan:1,gridColumnStart:1,msGridRow:1,msGridRowSpan:1,msGridColumn:1,msGridColumnSpan:1,fontWeight:1,lineHeight:1,opacity:1,order:1,orphans:1,tabSize:1,widows:1,zIndex:1,zoom:1,WebkitLineClamp:1,fillOpacity:1,floodOpacity:1,stopOpacity:1,strokeDasharray:1,strokeDashoffset:1,strokeMiterlimit:1,strokeOpacity:1,strokeWidth:1},Om=/[A-Z]|^ms/g,bm=/_EMO_([^_]+?)_([^]*?)_EMO_/g,ep=function(t){return t.charCodeAt(1)===45},gu=function(t){return t!=null&&typeof t!="boolean"},rl=Bd(function(e){return ep(e)?e:e.replace(Om,"-$&").toLowerCase()}),xu=function(t,n){switch(t){case"animation":case"animationName":if(typeof n=="string")return n.replace(bm,function(r,i,o){return kt={name:i,styles:o,next:kt},i})}return Tm[t]!==1&&!ep(t)&&typeof n=="number"&&n!==0?n+"px":n};function Yr(e,t,n){if(n==null)return"";if(n.__emotion_styles!==void 0)return n;switch(typeof n){case"boolean":return"";case"object":{if(n.anim===1)return kt={name:n.name,styles:n.styles,next:kt},n.name;if(n.styles!==void 0){var r=n.next;if(r!==void 0)for(;r!==void 0;)kt={name:r.name,styles:r.styles,next:kt},r=r.next;var i=n.styles+";";return i}return Mm(e,t,n)}case"function":{if(e!==void 0){var o=kt,l=n(e);return kt=o,Yr(e,t,l)}break}}if(t==null)return n;var s=t[n];return s!==void 0?s:n}function Mm(e,t,n){var r="";if(Array.isArray(n))for(var i=0;i<n.length;i++)r+=Yr(e,t,n[i])+";";else for(var o in n){var l=n[o];if(typeof l!="object")t!=null&&t[l]!==void 0?r+=o+"{"+t[l]+"}":gu(l)&&(r+=rl(o)+":"+xu(o,l)+";");else if(Array.isArray(l)&&typeof l[0]=="string"&&(t==null||t[l[0]]===void 0))for(var s=0;s<l.length;s++)gu(l[s])&&(r+=rl(o)+":"+xu(o,l[s])+";");else{var a=Yr(e,t,l);switch(o){case"animation":case"animationName":{r+=rl(o)+":"+a+";";break}default:r+=o+"{"+a+"}"}}}return r}var vu=/label:\s*([^\s;\n{]+)\s*(;|$)/g,kt,Rm=function(t,n,r){if(t.length===1&&typeof t[0]=="object"&&t[0]!==null&&t[0].styles!==void 0)return t[0];var i=!0,o="";kt=void 0;var l=t[0];l==null||l.raw===void 0?(i=!1,o+=Yr(r,n,l)):o+=l[0];for(var s=1;s<t.length;s++)o+=Yr(r,n,t[s]),i&&(o+=l[s]);vu.lastIndex=0;for(var a="",c;(c=vu.exec(o))!==null;)a+="-"+c[1];var g=zm(o)+a;return{name:g,styles:o,next:kt}},Lm=function(t){return t()},Nm=ls.useInsertionEffect?ls.useInsertionEffect:!1,Im=Nm||Lm,tp=Re.createContext(typeof HTMLElement<"u"?Cm({key:"css"}):null);tp.Provider;var Dm=function(t){return Re.forwardRef(function(n,r){var i=Re.useContext(tp);return t(n,i,r)})},Am=Re.createContext({}),$m=Xh,Fm=function(t){return t!=="theme"},yu=function(t){return typeof t=="string"&&t.charCodeAt(0)>96?$m:Fm},wu=function(t,n,r){var i;if(n){var o=n.shouldForwardProp;i=t.__emotion_forwardProp&&o?function(l){return t.__emotion_forwardProp(l)&&o(l)}:o}return typeof i!="function"&&r&&(i=t.__emotion_forwardProp),i},Wm=function(t){var n=t.cache,r=t.serialized,i=t.isStringTag;return qd(n,r,i),Im(function(){return Pm(n,r,i)}),null},Um=function e(t,n){var r=t.__emotion_real===t,i=r&&t.__emotion_base||t,o,l;n!==void 0&&(o=n.label,l=n.target);var s=wu(t,n,r),a=s||yu(i),c=!a("as");return function(){var g=arguments,x=r&&t.__emotion_styles!==void 0?t.__emotion_styles.slice(0):[];if(o!==void 0&&x.push("label:"+o+";"),g[0]==null||g[0].raw===void 0)x.push.apply(x,g);else{x.push(g[0][0]);for(var m=g.length,y=1;y<m;y++)x.push(g[y],g[0][y])}var f=Dm(function(h,C,d){var u=c&&h.as||i,p="",w=[],E=h;if(h.theme==null){E={};for(var _ in h)E[_]=h[_];E.theme=Re.useContext(Am)}typeof h.className=="string"?p=jm(C.registered,w,h.className):h.className!=null&&(p=h.className+" ");var S=Rm(x.concat(w),C.registered,E);p+=C.key+"-"+S.name,l!==void 0&&(p+=" "+l);var z=c&&s===void 0?yu(u):a,j={};for(var O in h)c&&O==="as"||z(O)&&(j[O]=h[O]);return j.className=p,j.ref=d,Re.createElement(Re.Fragment,null,Re.createElement(Wm,{cache:C,serialized:S,isStringTag:typeof u=="string"}),Re.createElement(u,j))});return f.displayName=o!==void 0?o:"Styled("+(typeof i=="string"?i:i.displayName||i.name||"Component")+")",f.defaultProps=t.defaultProps,f.__emotion_real=f,f.__emotion_base=i,f.__emotion_styles=x,f.__emotion_forwardProp=s,Object.defineProperty(f,"toString",{value:function(){return"."+l}}),f.withComponent=function(h,C){return e(h,ea({},n,C,{shouldForwardProp:wu(f,C,!0)})).apply(void 0,x)},f}},Vm=["a","abbr","address","area","article","aside","audio","b","base","bdi","bdo","big","blockquote","body","br","button","canvas","caption","cite","code","col","colgroup","data","datalist","dd","del","details","dfn","dialog","div","dl","dt","em","embed","fieldset","figcaption","figure","footer","form","h1","h2","h3","h4","h5","h6","head","header","hgroup","hr","html","i","iframe","img","input","ins","kbd","keygen","label","legend","li","link","main","map","mark","marquee","menu","menuitem","meta","meter","nav","noscript","object","ol","optgroup","option","output","p","param","picture","pre","progress","q","rp","rt","ruby","s","samp","script","section","select","small","source","span","strong","style","sub","summary","sup","table","tbody","td","textarea","tfoot","th","thead","time","title","tr","track","u","ul","var","video","wbr","circle","clipPath","defs","ellipse","foreignObject","g","image","line","linearGradient","mask","path","pattern","polygon","polyline","radialGradient","rect","stop","svg","text","tspan"],k=Um.bind();Vm.forEach(function(e){k[e]=k(e)});k.section`
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
`;k.h2`
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
`;k.div`
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
`;k.img`
  border-radius: 18px;
`;k.div`
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
`;k.h3`
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
`;k.p`
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
`;k.ul`
  padding-left: 23px;
`;k.li`
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
`;k.ul`
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
`;k.a`
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
`;k.svg`
  margin-left: 10px;
`;k.div`
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
`;k.section`
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
`;k.h2`
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
`;k.div`
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
`;k.p`
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
`;k.p`
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
`;k.div`
  display: flex;
  gap: 16px;
  align-items: center;
  margin-bottom: 16px;
`;k.div`
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
`;k.h4`
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
`;k.div`
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
`;k.h4`
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
`;k.p`
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
`;k.svg`
  fill: var(--primary-bluedark);
  border-radius: 100px;
  background: rgba(27, 54, 65, 0.2);
  width: 32px;
  height: 32px;
  padding: 3px;
`;k.svg`
  fill: var(--background-white);
  border-radius: 100px;
  background: rgba(244, 244, 246, 0.2);
  width: 32px;
  height: 32px;
  padding: 3px;
`;k.section`
  padding-top: 40px;
  padding-bottom: 40px;

  @media screen and (min-width: 1920px) {
    padding-top: 80px;
    padding-bottom: 80px;
  }
`;k.div`
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
`;k.h2`
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
`;k.ul`
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
`;k.li`
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
`;var np={exports:{}},Hm="SECRET_DO_NOT_PASS_THIS_OR_YOU_WILL_BE_FIRED",Bm=Hm,Qm=Bm;function rp(){}function ip(){}ip.resetWarningCache=rp;var Ym=function(){function e(r,i,o,l,s,a){if(a!==Qm){var c=new Error("Calling PropTypes validators directly is not supported by the `prop-types` package. Use PropTypes.checkPropTypes() to call them. Read more at http://fb.me/use-check-prop-types");throw c.name="Invariant Violation",c}}e.isRequired=e;function t(){return e}var n={array:e,bigint:e,bool:e,func:e,number:e,object:e,string:e,symbol:e,any:e,arrayOf:t,element:e,elementType:e,instanceOf:t,node:e,objectOf:t,oneOf:t,oneOfType:t,shape:t,exact:t,checkPropTypes:ip,resetWarningCache:rp};return n.PropTypes=n,n};np.exports=Ym();var Km=np.exports;const Kr=so(Km),Xm="/healthy-management-project/assets/icon-footer-MBx-ujYN.svg";k.div`
  /* padding: 40px 0; */
  background-color: var(--background-bluedark);

  @media screen and (min-width: 768px) {
  }

  @media screen and (min-width: 1440px) {
  }

  @media screen and (min-width: 1920px) {
  }
`;k.div`
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
`;k.a`
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
`;k.div`
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
`;k.a`
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
`;k.div`
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
`;k.div`
  display: flex;
  align-items: flex-end;
  gap: 16px;

  /* @media screen and (min-width: 768px) {
  }

  @media screen and (min-width: 1440px) {
  } */

  /* @media screen and (min-width: 1920px) {
  } */
`;k.a`
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
`;k.div`
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
`;k.a`
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
`;k.div`
  display: flex;
  padding: 16px 24px;

  justify-content: center;
  align-items: center;
  border-top: 1px solid var(--system-default-20);
  background: var(--background-bluedark);
`;k.p`
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
`;k.div`
  position: fixed;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  background-color: rgba(0, 0, 0, 0.5);
  overflow: hidden;
  z-index: 1100;
`;k.div`
  padding: 80px;
  position: fixed;
  width: 1360px;
  border-radius: 24px;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
  background-color: white;
  z-index: 10000;
`;k.div`
  height: 32px;
  display: flex;
  justify-content: space-between;
  margin-bottom: 40px;
`;k.svg`
  width: 24px;
  cursor: pointer;
`;k.h2`
  font-size: 24px;
  font-weight: 600;
  line-height: 32px;
  color: var(--typography-bluedark);
`;k.ul`
  display: flex;
  flex-wrap: wrap;
  gap: 24px;
`;k.li`
  width: 282px;
  padding: 24px;
  gap: 16px;

  border-radius: 16px;
  background: var(--background-bluedark);
  box-shadow: 0px 0px 8px 0px rgba(27, 54, 65, 0.08);
`;k.h3`
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
`;k.p`
  display: flex;
  justify-content: center;

  font-size: 14px;
  font-weight: 500;
  line-height: 18px;
  color: var(--typography-white);
`;k.div`
  gap: 16px;
  display: flex;
  flex-direction: column;
  justify-content: center;
`;k.div`
  display: flex;
  flex-direction: column;
  gap: 8px;
`;k.div`
  border-radius: 8px;
  overflow: hidden;
`;k.img`
  border-radius: 8px;

  &:hover {
    transform: scale(1.1);
    border-radius: 8px;
  }
`;Kr.func.isRequired,Kr.bool.isRequired;Kr.func.isRequired;k.header`
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
`;k.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
`;k.nav`
  @media screen and (min-width: 1440px) {
    display: flex;
    gap: 40px;
    align-items: center;
  }

  @media screen and (min-width: 1920px) {
  }
`;k.a`
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
`;k.a`
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
`;k.svg`
  stroke: black;
  width: 40px;
  height: 40px;

  @media screen and (min-width: 768px) {
    width: 70px;
  }
`;k.button`
  border: none;
  padding: 0;
  margin: 0;
  text-decoration: none;
  font-family: inherit;
  font-size: 100%;
  cursor: pointer;
  background: none;
`;k.div`
  position: fixed;
  z-index: 1200;
  top: 0;
  left: 0;
  width: 100%;
`;k.div`
  display: flex;
  width: 100%;
  padding-top: 32px;
  padding-bottom: 32px;
  justify-content: space-between;
  align-items: center;
  border-bottom: 1px solid var(--system-default-20, #dedede);
  background: var(--system-default-10, #f8f8f8);
`;k.a`
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
`;k.svg`
  stroke: var(--primary-black);
`;k.nav`
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
`;k.a`
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
`;k.button`
  border: none;
  padding: 0;
  margin: 0;
  text-decoration: none;
  font-family: inherit;
  font-size: 100%;
  cursor: pointer;
  background: none;
`;document.getElementById("modalMobail");Kr.func.isRequired;Kr.func.isRequired;const Gm="/healthy-management-project/assets/hero1x-6AVSlzud.webp",Zm="/healthy-management-project/assets/hero@2x-N6Dvbfg6.jpg",Jm="/healthy-management-project/assets/hero1x-d4IOBsel.jpg",qm="/healthy-management-project/assets/hero@2x-qDoBpvI0.jpg",eg="/healthy-management-project/assets/hero@1x-gjNVfS_G.jpg",tg="/healthy-management-project/assets/hero@2x-xeAfw2Nx.jpg",ng="/healthy-management-project/assets/hero@1x-T7izVw7M.jpg",rg="/healthy-management-project/assets/hero@2x-MzaNEgZc.jpg";k.section`
  background-repeat: no-repeat;
  background-position: center;
  background-image: url(${Jm});
  background-size: cover;
  margin-top: 120px;
  padding-top: 40px;
  padding-bottom: 40px;

  @media (min-device-pixel-ratio: 2),
    (min-resolution: 192dpi),
    (min-resolution: 2dppx) {
    background-image: url(${qm});
  }

  @media screen and (min-width: 768px) {
    background-image: url(${eg});
    margin-top: 120px;
    padding-top: 234px;
    padding-bottom: 234px;

    @media (min-device-pixel-ratio: 2),
      (min-resolution: 192dpi),
      (min-resolution: 2dppx) {
      background-image: url(${tg});
    }
  }

  @media screen and (min-width: 1440px) {
    background-image: url(${ng});
    margin-top: 120px;
    padding-top: 236px;
    padding-bottom: 236px;

    @media (min-device-pixel-ratio: 2),
      (min-resolution: 192dpi),
      (min-resolution: 2dppx) {
      background-image: url(${rg});
    }
  }

  @media screen and (min-width: 1920px) {
    background-image: url(${Gm});

    margin-top: 120px;
    padding-top: 296px;
    padding-bottom: 296px;

    @media (min-device-pixel-ratio: 2),
      (min-resolution: 192dpi),
      (min-resolution: 2dppx) {
      background-image: url(${Zm});
    }
  }
`;k.h1`
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
`;k.h3`
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
`;k.ul`
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
`;k.li`
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
`;k.div`
  display: flex;
  flex-direction: column;
  gap: 24px;

  @media screen and (min-width: 768px) {
    flex-direction: row;
  }
`;k.a`
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
`;k.a`
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
`;k.section`
  padding-top: 24px;
  padding-bottom: 24px;

  @media screen and (min-width: 1920px) {
    padding-top: 80px;
    padding-bottom: 80px;
  }
`;k.div`
  border-radius: 16px;
  padding: 24px;
  background: var(--background-bluedark);

  @media screen and (min-width: 1920px) {
    max-width: 100%;
    padding: 80px;
  }
`;k.h2`
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
`;k.ul`
  display: flex;
  padding: 0;
  flex-wrap: wrap;
  gap: 24px;
`;k.li`
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
`;k.svg`
  width: 80px;
  height: 80px;
`;k.div`
  display: flex;
  flex-direction: column;
`;k.h3`
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
`;k.p`
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
`;const ig="/healthy-management-project/assets/pic_mentorstvo1x-R5bIGNq0.webp",og="/healthy-management-project/assets/pic_mentorstvo2x-k6d-_Us1.jpg",lg="/healthy-management-project/assets/pic_mentorstvo1x-DCmM7Ygj.jpg",ag="/healthy-management-project/assets/mob_mentor1x-_de1iGBc.webp",sg="/healthy-management-project/assets/mob_mentor@2x-oAKhVwNJ.jpg",ug="/healthy-management-project/assets/mob_mentor1x-1WPWjsx0.jpg",cg="/healthy-management-project/assets/pic_mentorstvo_768_1x-Px4J1LUl.jpg",dg="/healthy-management-project/assets/pic_mentorstvo_768_1x-gkJzTmk_.webp",pg="/healthy-management-project/assets/pic_mentorstvo_768@2x-S5qjgsHl.webp",fg="/healthy-management-project/assets/pic_mentorstvo_1440_1x-WjllDGeR.webp",hg="/healthy-management-project/assets/pic_mentorstvo_1440@2x-O-l22q9a.webp",mg="/healthy-management-project/assets/pic_mentorstvo_1440_1x-7OpZfadC.jpg",gg=k.section`
  padding: 40px 24px;

  @media screen and (min-width: 768px) {
    padding: 40px;
  }

  @media screen and (min-width: 1440px) {
    padding: 40px 80px;
  }

  @media screen and (min-width: 1920px) {
    padding-top: 80px;
    padding-bottom: 80px;
  }
`,xg=k.div`
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
    gap: 40px;
    margin-bottom: 40px;
  }
`,vg=k.div`
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
`,yg=k.div`
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
`,wg=k.h2`
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
    margin-bottom: 40px;
  }
`,kg=k.h3`
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
`,ku=k.h3`
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
`,Sg=k.div`
  display: flex;
  flex-direction: column;
  gap: 24px;
  min-width: 320px;

  @media screen and (min-width: 1920px) {
    margin-bottom: 80px;
  }
`,Su=k.p`
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
    max-width: 720px;
    line-height: 28px;

    &:not(:last-child) {
      margin-bottom: 16px;
    }
  }
`,Eg=k.a`
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

    &:hover,
    &focus {
      font-weight: 600;
      background: var(--background-white);
    }
  }
`,Cg=k.div`
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
`,_g=k.div`
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
    padding: 40px;
    gap: 24px;
    flex: 1 0 0;
  }
`,jg=k.ul`
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
`,Eu=k.ul`
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
`,Sn=k.li`
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
`,En=k.li`
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
`,Pg=()=>v.jsxs(gg,{id:"mentoring",className:"container",children:[v.jsxs(xg,{children:[v.jsxs("div",{children:[v.jsx(J,{minWidth:1920,children:v.jsx("img",{srcSet:`${ig} 1x, ${og} 2x`,sizes:"(min-width: 1920px) 1920px",src:lg,alt:"Ольга Поліщук - ваш ментор в медичній галузі"})}),v.jsx(J,{minWidth:300,maxWidth:767,children:v.jsx("img",{srcSet:`${ag} 1x, ${sg} 2x`,sizes:"(min-width: 375px) 375px",src:ug,alt:"Ольга Поліщук - ваш ментор в медичній галузі"})}),v.jsx(J,{minWidth:768,maxWidth:1439,children:v.jsx("img",{srcSet:`${dg} 1x, ${pg} 2x`,sizes:"(min-width: 768px) 768px",src:cg,alt:"Ольга Поліщук - ваш ментор в медичній галузі"})}),v.jsx(J,{minWidth:1440,maxWidth:1919,children:v.jsx("img",{srcSet:`${fg} 1x, ${hg} 2x`,sizes:"(min-width: 1440px) 100vw (max-width: 1919px) 100vw",src:mg,alt:"Ольга Поліщук - ваш ментор в медичній галузі"})})]}),v.jsxs(vg,{children:[v.jsx(wg,{children:"Менторство"}),v.jsxs(Sg,{children:[v.jsxs(Su,{children:[v.jsx("b",{children:"Менторство в медичній галузі"})," - почути іншу думку, підтвердити власні гіпотези, зрозуміти вектор розвитку, отримати підтримку та пораду з питань менеджменту і медичного маркетингу"]}),v.jsxs(Su,{children:[v.jsx("b",{children:"Менторство"})," - це про взаємодію та чесну комунікацію, про спільні цінності та готовність до росту, про надійне партнерство та довіру"]})]}),v.jsx(Eg,{href:"#contact",children:"Дізнатися вартість"})]})]}),v.jsx("div",{children:v.jsxs(Cg,{children:[v.jsxs(yg,{children:[v.jsx(kg,{children:"Про що це?"}),v.jsxs(jg,{children:[v.jsx(Sn,{children:v.jsx("p",{children:"Про прагнення почути чесну іншу думку/та або підтвердити власні гіпотези для власника/керівника"})}),v.jsx(Sn,{children:v.jsx("p",{children:"Про бізнес-процеси та їх ефективність"})}),v.jsx(Sn,{children:v.jsx("p",{children:"Про вектори розвитку бізнесу або проєкту"})}),v.jsx(Sn,{children:v.jsx("p",{children:"Про практичний інструментарій для впровадження змін"})}),v.jsx(Sn,{children:v.jsx("p",{children:"Про маркетинг, сервіс та комунікації в медичних бізнесах"})}),v.jsx(Sn,{children:v.jsx("p",{children:"Про здоров'я працівників та стратегії підвищенння ефективності бізнесу"})})]})]}),v.jsxs(_g,{children:[v.jsx(ku,{children:"Для кого"}),v.jsxs(Eu,{children:[v.jsx(En,{children:v.jsx("p",{children:"Лідерам, які прагнуть змін"})}),v.jsx(En,{children:v.jsx("p",{children:"Власникам, які хочуть отримати незалежку експертну думку"})}),v.jsx(En,{children:v.jsx("p",{children:"Керівникам та маркетологам, яким потрібна підтримка"})}),v.jsx(En,{children:v.jsx("p",{children:"Лікарям, яким важливо отримати пораду"})})]}),v.jsx(ku,{children:"Формат"}),v.jsxs(Eu,{children:[v.jsx(En,{children:v.jsx("p",{children:"Індивідуальна ментор-сесія (від 1 години)"})}),v.jsx(En,{children:v.jsx("p",{children:"Персональний супровід на декілька місяців"})})]})]})]})})]}),op=k.section`
  padding: 40px 24px;

  @media screen and (min-width: 768px) {
    padding: 40px;
  }
  @media screen and (min-width: 1440px) {
    padding: 40px 80px;
  }

  @media screen and (min-width: 1920px) {
    padding-top: 80px;
    padding-bottom: 80px;
  }
`,lp=k.div`
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
`,zg=k.div`
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
    justify-content: space-between;
  }
`,wi=k.div`
  position: relative;

  @media screen and (min-width: 1920px) {
    min-width: 370px;
  }
`,ap=k.div`
  display: flex;
  flex-direction: column;

  @media screen and (min-width: 1290px) {
    gap: 40px;
    margin-bottom: 40px;
    flex-direction: row;
  }
`,sp=k.div`
  min-width: 280px;
  gap: 16px;
  display: flex;
  flex-direction: column;

  @media screen and (min-width: 1920px) {
    min-width: 740px;
  }
`,up=k.div`
  @media screen and (min-width: 768px) {
    padding: 24px;
  }
`,ki=k.p`
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
    justify-content: center;
    width: 100%;
    font-size: 20px;
    line-height: 1.4;
    top: 50%;
    left: 50%;
  }
`,cp=k.h2`
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
`,dp=k.h3`
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
`,pp=k.p`
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
`,fp=k.p`
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
`,hp=k.a`
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
`,mp=k.p`
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
`,gp=k.ul`
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
`,ft=k.li`
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
`,nt=k.svg`
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
`,Tg=()=>v.jsx(op,{className:"container",children:v.jsxs(lp,{children:[v.jsxs(ap,{children:[v.jsxs(sp,{children:[v.jsx(cp,{children:"Індивідуальна ментор сесія"}),v.jsx(pp,{children:"Вирішення вашого індивідуального запиту"}),v.jsx(fp,{children:"від 1 години"}),v.jsx(hp,{href:"#contact",children:"Замовити послугу"})]}),v.jsxs(up,{children:[v.jsx(dp,{children:"Питання, з якими можете звернутися"}),v.jsxs(gp,{children:[v.jsx(ft,{children:"Незалежна думка щодо маркетингу та розвитку"}),v.jsx(ft,{children:"Порада по створенню відділу маркетингу або оцінка існуючої структури"}),v.jsx(ft,{children:"Питання по роботі з підрядниками"}),v.jsx(ft,{children:"Порада щодо оптимізації бізнес-процесів"}),v.jsx(ft,{children:"Як вірно оцінити ефективність маркетингових дій"}),v.jsx(ft,{children:"Які інструменти комунікацій використовувати"}),v.jsxs(ft,{children:["Особисте питання по менеджменту та розвитку з питань управління"," ","здоров'ям"]})]})]})]}),v.jsx(mp,{children:"Шлях проведення менторської сесії"}),v.jsxs(zg,{children:[v.jsxs(wi,{children:[v.jsx(J,{minWidth:330,maxWidth:767,children:v.jsx(nt,{children:v.jsx("use",{href:`${te}#icon-rectangle-mob`})})}),v.jsx(J,{minWidth:768,maxWidth:1439,children:v.jsx(nt,{children:v.jsx("use",{href:`${te}#icon-rectangle-tab`})})}),v.jsx(J,{minWidth:1440,children:v.jsx(nt,{children:v.jsx("use",{href:`${te}#icon-rectangle`})})}),v.jsx(ki,{children:"Заповнення брифу"})]}),v.jsxs(wi,{children:[v.jsx(J,{minWidth:330,maxWidth:767,children:v.jsx(nt,{children:v.jsx("use",{href:`${te}#icon-rectangle-mob`})})}),v.jsx(J,{minWidth:768,maxWidth:1439,children:v.jsx(nt,{children:v.jsx("use",{href:`${te}#icon-rectangle-tab`})})}),v.jsx(J,{minWidth:1440,children:v.jsx(nt,{children:v.jsx("use",{href:`${te}#icon-rectangle`})})}),v.jsx(ki,{children:"Діагностика ситуації"})]}),v.jsxs(wi,{children:[v.jsx(J,{minWidth:330,maxWidth:767,children:v.jsx(nt,{children:v.jsx("use",{href:`${te}#icon-rectangle-mob`})})}),v.jsx(J,{minWidth:768,maxWidth:1439,children:v.jsx(nt,{children:v.jsx("use",{href:`${te}#icon-rectangle-tab`})})}),v.jsx(J,{minWidth:1440,children:v.jsx(nt,{children:v.jsx("use",{href:`${te}#icon-rectangle`})})}),v.jsx(ki,{children:"Проведення сесії"})]}),v.jsxs(wi,{children:[v.jsx(J,{minWidth:330,maxWidth:767,children:v.jsx(nt,{children:v.jsx("use",{href:`${te}#icon-rectangle-mob`})})}),v.jsx(J,{minWidth:768,maxWidth:1439,children:v.jsx(nt,{children:v.jsx("use",{href:`${te}#icon-rectangle-tab`})})}),v.jsx(J,{minWidth:1440,children:v.jsx(nt,{children:v.jsx("use",{href:`${te}#icon-rectangle`})})}),v.jsx(ki,{children:"Рекомендації"})]})]})]})}),Og=k.div`
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
    justify-content: space-between;
  }
`,be=k.svg`
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
`,dr=k.div`
  position: relative;
  height: 60px;

  @media screen and (min-width: 1440px) {
    width: 220px;
  }

  @media screen and (min-width: 1920px) {
    min-width: 285px;
  }
`;k.div`
  min-width: 740px;
  display: flex;
  flex-direction: column;
  gap: 16px;
`;const pr=k.p`
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
    width: 100%;
    justify-content: center;
    top: 70%;
    font-size: 20px;
    line-height: 1.4;
  }
`,bg=()=>v.jsx(op,{className:"container",children:v.jsxs(lp,{children:[v.jsxs(ap,{children:[v.jsxs(sp,{children:[v.jsx(cp,{children:"Персональний супровід"}),v.jsx(pp,{children:"Пропрацьовуємо ваші запити та досягаємо посавлених цілей"}),v.jsx(fp,{children:"від 2 місяців тісної взаємодії"}),v.jsx(hp,{href:"#contact",children:"Замовити послугу"})]}),v.jsxs(up,{children:[v.jsx(dp,{children:"Питання, з якими можете звернутися"}),v.jsxs(gp,{children:[v.jsx(ft,{children:"Зануритись в бізнес-процеси та зрозуміти, де є точки зростання"}),v.jsx(ft,{children:"Зрозуміти що таке маркетинг та як він працює у вашому бізнесі"}),v.jsx(ft,{children:"Супровід розробки та впровадження стратегій"}),v.jsx(ft,{children:"Особисті питання по медичному менеджменту, маркетингу та розвитку, управління здоров'ям"})]})]})]}),v.jsx(mp,{children:"Шлях проведення менторського супроводу"}),v.jsxs(Og,{children:[v.jsxs(dr,{children:[v.jsx(J,{minWidth:330,maxWidth:767,children:v.jsx(be,{children:v.jsx("use",{href:`${te}#icon-rectangle-mob`})})}),v.jsx(J,{minWidth:768,maxWidth:1439,children:v.jsx(be,{children:v.jsx("use",{href:`${te}#icon-rectangle-tab`})})}),v.jsx(J,{minWidth:1440,children:v.jsx(be,{children:v.jsx("use",{href:`${te}#icon-rectangle2`})})}),v.jsx(pr,{children:"Заповнення брифу"})]}),v.jsxs(dr,{children:[v.jsx(J,{minWidth:330,maxWidth:767,children:v.jsx(be,{children:v.jsx("use",{href:`${te}#icon-rectangle-mob`})})}),v.jsx(J,{minWidth:768,maxWidth:1439,children:v.jsx(be,{children:v.jsx("use",{href:`${te}#icon-rectangle-tab`})})}),v.jsx(J,{minWidth:1440,children:v.jsx(be,{children:v.jsx("use",{href:`${te}#icon-rectangle2`})})}),v.jsx(pr,{children:"Діагностика ситуації"})]}),v.jsxs(dr,{children:[v.jsx(J,{minWidth:330,maxWidth:767,children:v.jsx(be,{children:v.jsx("use",{href:`${te}#icon-rectangle-mob`})})}),v.jsx(J,{minWidth:768,maxWidth:1439,children:v.jsx(be,{children:v.jsx("use",{href:`${te}#icon-rectangle-tab`})})}),v.jsx(J,{minWidth:1440,children:v.jsx(be,{children:v.jsx("use",{href:`${te}#icon-rectangle2`})})}),v.jsx(pr,{children:"Визначення зон росту"})]}),v.jsxs(dr,{children:[v.jsx(J,{minWidth:330,maxWidth:767,children:v.jsx(be,{children:v.jsx("use",{href:`${te}#icon-rectangle-mob`})})}),v.jsx(J,{minWidth:768,maxWidth:1439,children:v.jsx(be,{children:v.jsx("use",{href:`${te}#icon-rectangle-tab`})})}),v.jsx(J,{minWidth:1440,children:v.jsx(be,{children:v.jsx("use",{href:`${te}#icon-rectangle2`})})}),v.jsx(pr,{children:"Менторинг"})]}),v.jsxs(dr,{children:[v.jsx(J,{minWidth:330,maxWidth:767,children:v.jsx(be,{children:v.jsx("use",{href:`${te}#icon-rectangle-mob`})})}),v.jsx(J,{minWidth:768,maxWidth:1439,children:v.jsx(be,{children:v.jsx("use",{href:`${te}#icon-rectangle-tab`})})}),v.jsx(J,{minWidth:1440,children:v.jsx(be,{children:v.jsx("use",{href:`${te}#icon-rectangle2`})})}),v.jsx(pr,{children:"Рекомендації"})]})]})]})});k.section`
  padding-top: 40px;
  padding-bottom: 40px;
  @media screen and (min-width: 768px) {
    padding-top: 80px;
    padding-bottom: 80px;
  }
`;k.h2`
  font-size: 48px;
  font-weight: 600;
  line-height: calc(56 / 48);

  margin-bottom: 40px;
`;k.ul`
  display: flex;
  gap: 24px;
  flex-wrap: wrap;
  @media screen and (min-width: 768px) {
  }
`;k.span`
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
`;k.svg`
  fill: currentColor;
  stroke: currentColor;

  width: 24px;
  height: 24px;
`;k.li`
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
`;k.div`
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
`;k.div`
  display: flex;
  flex-direction: column;
  gap: 16px;
`;k.h4`
  font-size: ${e=>e.forDetail?"18px":"16px"};
  font-weight: 600;
  line-height: calc(${e=>e.forDetail?24/18:24/16});

  @media screen and (min-width: 768px) {
    font-size: ${e=>e.forDetail?"24px":"20px"};
    line-height: calc(${e=>e.forDetail?32/24:28/20});
  }
`;k.ul`
  display: flex;
  flex-direction: column;
  gap: 8px;
`;k.li`
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
`;k.p`
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
`;k.svg`
  fill: currentColor;
  stroke: currentColor;
`;k.div`
  padding: 24px;
  display: flex;
  gap: 24px;
  flex-direction: column;

  color: var(--background-whitegrey, #f4f4f6);
  @media screen and (min-width: 768px) {
    padding: 40px;
  }
`;k.h3`
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
`;k.svg`
  fill: currentColor;
  stroke: currentColor;

  width: 24px;
  height: 24px;

  position: absolute;
  right: 28px;
  top: 28px;
`;k.div`
  display: flex;
  flex-direction: column;
  gap: 24px;

  color: var(--typography-bluedark, #1b3641);
`;k.h3`
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
`;k.img`
  height: 279px;
  width: 100%;
  border-radius: 8px;
  object-fit: cover;
  @media screen and (min-width: 768px) {
    height: 300px;
  }
`;k.span`
  font-size: 14px;
  font-weight: 600;
  line-height: calc(18 / 14);
  text-align: center;
`;k.section`
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
`;k.div`
  padding: 24px;
  border-radius: 16px;
  background: var(--background-white);

  @media screen and (min-width: 1920px) {
    padding: 80px;
    max-width: 828px;
    box-shadow: 0px 0px 8px 0px rgba(27, 54, 65, 0.08);
  }
`;k.div`
  display: flex;
  flex-direction: column;
  gap: 16px;
  margin-bottom: 24px;

  @media screen and (min-width: 1920px) {
    gap: 40px;
    margin-bottom: 40px;
  }
`;k.h2`
  color: var(--typography-bluedark);
  font-size: 24px;
  font-weight: 600;
  line-height: 32px;

  @media screen and (min-width: 1920px) {
    font-size: 48px;
    line-height: 56px;
  }
`;k.h2`
  color: var(--typography-bluedark);
  font-weight: 500;
  font-size: 16px;
  line-height: 24px;

  @media screen and (min-width: 1920px) {
    font-size: 20px;
    line-height: 28px;
  }
`;k.ul`
  display: flex;
  flex-direction: column;
  gap: 16px;

  @media screen and (min-width: 1920px) {
    gap: 24px;
  }
`;k.li`
  display: flex;
  align-items: center;
  gap: 16px;
  border-radius: 16px;
  background: var(--background-whitegrey);
  padding: 16px;
`;k.svg`
  width: 24px;
  height: 24px;
  fill: var(--background-white);
  stroke-width: 4px;
`;k.p`
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
`;k.img`
  width: 100%;
  height: 327px;
  border-radius: 16px;

  @media screen and (min-width: 1920px) {
    width: 828px;
    height: 664px;
  }
`;k.button`
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
`;const Mg=()=>v.jsx("svg",{width:"8",height:"8",children:v.jsx("use",{href:`${Xm}#star`})});var xp={exports:{}};function Rg(e){return e&&typeof e=="object"&&"default"in e?e.default:e}var il=Rg(Re),Lg=Vd;function Ng(e,t){for(var n=Object.getOwnPropertyNames(t),r=0;r<n.length;r++){var i=n[r],o=Object.getOwnPropertyDescriptor(t,i);o&&o.configurable&&e[i]===void 0&&Object.defineProperty(e,i,o)}return e}function ra(){return(ra=Object.assign||function(e){for(var t=1;t<arguments.length;t++){var n=arguments[t];for(var r in n)Object.prototype.hasOwnProperty.call(n,r)&&(e[r]=n[r])}return e}).apply(this,arguments)}function Ig(e,t){e.prototype=Object.create(t.prototype),Ng(e.prototype.constructor=e,t)}function Dg(e,t){if(e==null)return{};var n,r,i={},o=Object.keys(e);for(r=0;r<o.length;r++)n=o[r],0<=t.indexOf(n)||(i[n]=e[n]);return i}function Cn(e){if(e===void 0)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return e}var Ag=function(e,t,n,r,i,o,l,s){if(!e){var a;if(t===void 0)a=new Error("Minified exception occurred; use the non-minified dev environment for the full error message and additional helpful warnings.");else{var c=[n,r,i,o,l,s],g=0;(a=new Error(t.replace(/%s/g,function(){return c[g++]}))).name="Invariant Violation"}throw a.framesToPop=1,a}},Cu=Ag;function _u(e,t,n){if("selectionStart"in e&&"selectionEnd"in e)e.selectionStart=t,e.selectionEnd=n;else{var r=e.createTextRange();r.collapse(!0),r.moveStart("character",t),r.moveEnd("character",n-t),r.select()}}function $g(e){var t=0,n=0;if("selectionStart"in e&&"selectionEnd"in e)t=e.selectionStart,n=e.selectionEnd;else{var r=document.selection.createRange();r.parentElement()===e&&(t=-r.moveStart("character",-e.value.length),n=-r.moveEnd("character",-e.value.length))}return{start:t,end:n,length:n-t}}var Fg={9:"[0-9]",a:"[A-Za-z]","*":"[A-Za-z0-9]"},Wg="_";function ju(e,t,n){var r="",i="",o=null,l=[];if(t===void 0&&(t=Wg),n==null&&(n=Fg),!e||typeof e!="string")return{maskChar:t,formatChars:n,mask:null,prefix:null,lastEditablePosition:null,permanents:[]};var s=!1;return e.split("").forEach(function(a){s=!s&&a==="\\"||(s||!n[a]?(l.push(r.length),r.length===l.length-1&&(i+=a)):o=r.length+1,r+=a,!1)}),{maskChar:t,formatChars:n,prefix:i,mask:r,lastEditablePosition:o,permanents:l}}function qe(e,t){return e.permanents.indexOf(t)!==-1}function To(e,t,n){var r=e.mask,i=e.formatChars;if(!n)return!1;if(qe(e,t))return r[t]===n;var o=i[r[t]];return new RegExp(o).test(n)}function Pu(e,t){return t.split("").every(function(n,r){return qe(e,r)||!To(e,r,n)})}function xr(e,t){var n=e.maskChar,r=e.prefix;if(!n){for(;t.length>r.length&&qe(e,t.length-1);)t=t.slice(0,t.length-1);return t.length}for(var i=r.length,o=t.length;o>=r.length;o--){var l=t[o];if(!qe(e,o)&&To(e,o,l)){i=o+1;break}}return i}function vp(e,t){return xr(e,t)===e.mask.length}function zt(e,t){var n=e.maskChar,r=e.mask,i=e.prefix;if(!n){for((t=ia(e,"",t,0)).length<i.length&&(t=i);t.length<r.length&&qe(e,t.length);)t+=r[t.length];return t}if(t)return ia(e,zt(e,""),t,0);for(var o=0;o<r.length;o++)qe(e,o)?t+=r[o]:t+=n;return t}function Ug(e,t,n,r){var i=n+r,o=e.maskChar,l=e.mask,s=e.prefix,a=t.split("");if(o)return a.map(function(g,x){return x<n||i<=x?g:qe(e,x)?l[x]:o}).join("");for(var c=i;c<a.length;c++)qe(e,c)&&(a[c]="");return n=Math.max(s.length,n),a.splice(n,i-n),t=a.join(""),zt(e,t)}function ia(e,t,n,r){var i=e.mask,o=e.maskChar,l=e.prefix,s=n.split(""),a=vp(e,t);return!o&&r>t.length&&(t+=i.slice(t.length,r)),s.every(function(c){for(;y=c,qe(e,m=r)&&y!==i[m];){if(r>=t.length&&(t+=i[r]),g=c,x=r,o&&qe(e,x)&&g===o)return!0;if(++r>=i.length)return!1}var g,x,m,y;return!To(e,r,c)&&c!==o||(r<t.length?t=o||a||r<l.length?t.slice(0,r)+c+t.slice(r+1):(t=t.slice(0,r)+c+t.slice(r),zt(e,t)):o||(t+=c),++r<i.length)}),t}function Vg(e,t,n,r){var i=e.mask,o=e.maskChar,l=n.split(""),s=r;return l.every(function(a){for(;g=a,qe(e,c=r)&&g!==i[c];)if(++r>=i.length)return!1;var c,g;return(To(e,r,a)||a===o)&&r++,r<i.length}),r-s}function Hg(e,t){for(var n=t;0<=n;--n)if(!qe(e,n))return n;return null}function Pr(e,t){for(var n=e.mask,r=t;r<n.length;++r)if(!qe(e,r))return r;return null}function ol(e){return e||e===0?e+"":""}function Bg(e,t,n,r,i){var o=e.mask,l=e.prefix,s=e.lastEditablePosition,a=t,c="",g=0,x=0,m=Math.min(i.start,n.start);return n.end>i.start?x=(g=Vg(e,r,c=a.slice(i.start,n.end),m))?i.length:0:a.length<r.length&&(x=r.length-a.length),a=r,x&&(x===1&&!i.length&&(m=i.start===n.start?Pr(e,n.start):Hg(e,n.start)),a=Ug(e,a,m,x)),a=ia(e,a,c,m),(m+=g)>=o.length?m=o.length:m<l.length&&!g?m=l.length:m>=l.length&&m<s&&g&&(m=Pr(e,m)),c||(c=null),{value:a=zt(e,a),enteredString:c,selection:{start:m,end:m}}}function Qg(){var e=new RegExp("windows","i"),t=new RegExp("phone","i"),n=navigator.userAgent;return e.test(n)&&t.test(n)}function $e(e){return typeof e=="function"}function Yg(){return window.requestAnimationFrame||window.webkitRequestAnimationFrame||window.mozRequestAnimationFrame}function yp(){return window.cancelAnimationFrame||window.webkitCancelRequestAnimationFrame||window.webkitCancelAnimationFrame||window.mozCancelAnimationFrame}function zu(e){return(yp()?Yg():function(){return setTimeout(e,1e3/60)})(e)}function ll(e){(yp()||clearTimeout)(e)}var Kg=function(e){function t(r){var i=e.call(this,r)||this;i.focused=!1,i.mounted=!1,i.previousSelection=null,i.selectionDeferId=null,i.saveSelectionLoopDeferId=null,i.saveSelectionLoop=function(){i.previousSelection=i.getSelection(),i.saveSelectionLoopDeferId=zu(i.saveSelectionLoop)},i.runSaveSelectionLoop=function(){i.saveSelectionLoopDeferId===null&&i.saveSelectionLoop()},i.stopSaveSelectionLoop=function(){i.saveSelectionLoopDeferId!==null&&(ll(i.saveSelectionLoopDeferId),i.saveSelectionLoopDeferId=null,i.previousSelection=null)},i.getInputDOMNode=function(){if(!i.mounted)return null;var f=Lg.findDOMNode(Cn(Cn(i))),h=typeof window<"u"&&f instanceof window.Element;if(f&&!h)return null;if(f.nodeName!=="INPUT"&&(f=f.querySelector("input")),!f)throw new Error("react-input-mask: inputComponent doesn't contain input node");return f},i.getInputValue=function(){var f=i.getInputDOMNode();return f?f.value:null},i.setInputValue=function(f){var h=i.getInputDOMNode();h&&(i.value=f,h.value=f)},i.setCursorToEnd=function(){var f=xr(i.maskOptions,i.value),h=Pr(i.maskOptions,f);h!==null&&i.setCursorPosition(h)},i.setSelection=function(f,h,C){C===void 0&&(C={});var d=i.getInputDOMNode(),u=i.isFocused();d&&u&&(C.deferred||_u(d,f,h),i.selectionDeferId!==null&&ll(i.selectionDeferId),i.selectionDeferId=zu(function(){i.selectionDeferId=null,_u(d,f,h)}),i.previousSelection={start:f,end:h,length:Math.abs(h-f)})},i.getSelection=function(){return $g(i.getInputDOMNode())},i.getCursorPosition=function(){return i.getSelection().start},i.setCursorPosition=function(f){i.setSelection(f,f)},i.isFocused=function(){return i.focused},i.getBeforeMaskedValueChangeConfig=function(){var f=i.maskOptions,h=f.mask,C=f.maskChar,d=f.permanents,u=f.formatChars;return{mask:h,maskChar:C,permanents:d,alwaysShowMask:!!i.props.alwaysShowMask,formatChars:u}},i.isInputAutofilled=function(f,h,C,d){var u=i.getInputDOMNode();try{if(u.matches(":-webkit-autofill"))return!0}catch{}return!i.focused||d.end<C.length&&h.end===f.length},i.onChange=function(f){var h=Cn(Cn(i)).beforePasteState,C=Cn(Cn(i)).previousSelection,d=i.props.beforeMaskedValueChange,u=i.getInputValue(),p=i.value,w=i.getSelection();i.isInputAutofilled(u,w,p,C)&&(p=zt(i.maskOptions,""),C={start:0,end:0,length:0}),h&&(C=h.selection,p=h.value,w={start:C.start+u.length,end:C.start+u.length,length:0},u=p.slice(0,C.start)+u+p.slice(C.end),i.beforePasteState=null);var E=Bg(i.maskOptions,u,w,p,C),_=E.enteredString,S=E.selection,z=E.value;if($e(d)){var j=d({value:z,selection:S},{value:p,selection:C},_,i.getBeforeMaskedValueChangeConfig());z=j.value,S=j.selection}i.setInputValue(z),$e(i.props.onChange)&&i.props.onChange(f),i.isWindowsPhoneBrowser?i.setSelection(S.start,S.end,{deferred:!0}):i.setSelection(S.start,S.end)},i.onFocus=function(f){var h=i.props.beforeMaskedValueChange,C=i.maskOptions,d=C.mask,u=C.prefix;if(i.focused=!0,i.mounted=!0,d){if(i.value)xr(i.maskOptions,i.value)<i.maskOptions.mask.length&&i.setCursorToEnd();else{var p=zt(i.maskOptions,u),w=zt(i.maskOptions,p),E=xr(i.maskOptions,w),_=Pr(i.maskOptions,E),S={start:_,end:_};if($e(h)){var z=h({value:w,selection:S},{value:i.value,selection:null},null,i.getBeforeMaskedValueChangeConfig());w=z.value,S=z.selection}var j=w!==i.getInputValue();j&&i.setInputValue(w),j&&$e(i.props.onChange)&&i.props.onChange(f),i.setSelection(S.start,S.end)}i.runSaveSelectionLoop()}$e(i.props.onFocus)&&i.props.onFocus(f)},i.onBlur=function(f){var h=i.props.beforeMaskedValueChange,C=i.maskOptions.mask;if(i.stopSaveSelectionLoop(),i.focused=!1,C&&!i.props.alwaysShowMask&&Pu(i.maskOptions,i.value)){var d="";$e(h)&&(d=h({value:d,selection:null},{value:i.value,selection:i.previousSelection},null,i.getBeforeMaskedValueChangeConfig()).value);var u=d!==i.getInputValue();u&&i.setInputValue(d),u&&$e(i.props.onChange)&&i.props.onChange(f)}$e(i.props.onBlur)&&i.props.onBlur(f)},i.onMouseDown=function(f){if(!i.focused&&document.addEventListener){i.mouseDownX=f.clientX,i.mouseDownY=f.clientY,i.mouseDownTime=new Date().getTime();var h=function C(d){if(document.removeEventListener("mouseup",C),i.focused){var u=Math.abs(d.clientX-i.mouseDownX),p=Math.abs(d.clientY-i.mouseDownY),w=Math.max(u,p),E=new Date().getTime()-i.mouseDownTime;(w<=10&&E<=200||w<=5&&E<=300)&&i.setCursorToEnd()}};document.addEventListener("mouseup",h)}$e(i.props.onMouseDown)&&i.props.onMouseDown(f)},i.onPaste=function(f){$e(i.props.onPaste)&&i.props.onPaste(f),f.defaultPrevented||(i.beforePasteState={value:i.getInputValue(),selection:i.getSelection()},i.setInputValue(""))},i.handleRef=function(f){i.props.children==null&&$e(i.props.inputRef)&&i.props.inputRef(f)};var o=r.mask,l=r.maskChar,s=r.formatChars,a=r.alwaysShowMask,c=r.beforeMaskedValueChange,g=r.defaultValue,x=r.value;i.maskOptions=ju(o,l,s),g==null&&(g=""),x==null&&(x=g);var m=ol(x);if(i.maskOptions.mask&&(a||m)&&(m=zt(i.maskOptions,m),$e(c))){var y=r.value;r.value==null&&(y=g),m=c({value:m,selection:null},{value:y=ol(y),selection:null},null,i.getBeforeMaskedValueChangeConfig()).value}return i.value=m,i}Ig(t,e);var n=t.prototype;return n.componentDidMount=function(){this.mounted=!0,this.getInputDOMNode()&&(this.isWindowsPhoneBrowser=Qg(),this.maskOptions.mask&&this.getInputValue()!==this.value&&this.setInputValue(this.value))},n.componentDidUpdate=function(){var r=this.previousSelection,i=this.props,o=i.beforeMaskedValueChange,l=i.alwaysShowMask,s=i.mask,a=i.maskChar,c=i.formatChars,g=this.maskOptions,x=l||this.isFocused(),m=this.props.value!=null,y=m?ol(this.props.value):this.value,f=r?r.start:null;if(this.maskOptions=ju(s,a,c),this.maskOptions.mask){!g.mask&&this.isFocused()&&this.runSaveSelectionLoop();var h=this.maskOptions.mask&&this.maskOptions.mask!==g.mask;if(g.mask||m||(y=this.getInputValue()),(h||this.maskOptions.mask&&(y||x))&&(y=zt(this.maskOptions,y)),h){var C=xr(this.maskOptions,y);(f===null||C<f)&&(f=vp(this.maskOptions,y)?C:Pr(this.maskOptions,C))}!this.maskOptions.mask||!Pu(this.maskOptions,y)||x||m&&this.props.value||(y="");var d={start:f,end:f};if($e(o)){var u=o({value:y,selection:d},{value:this.value,selection:this.previousSelection},null,this.getBeforeMaskedValueChangeConfig());y=u.value,d=u.selection}this.value=y;var p=this.getInputValue()!==this.value;p?(this.setInputValue(this.value),this.forceUpdate()):h&&this.forceUpdate();var w=!1;d.start!=null&&d.end!=null&&(w=!r||r.start!==d.start||r.end!==d.end),(w||p)&&this.setSelection(d.start,d.end)}else g.mask&&(this.stopSaveSelectionLoop(),this.forceUpdate())},n.componentWillUnmount=function(){this.mounted=!1,this.selectionDeferId!==null&&ll(this.selectionDeferId),this.stopSaveSelectionLoop()},n.render=function(){var r,i=this.props,o=(i.mask,i.alwaysShowMask,i.maskChar,i.formatChars,i.inputRef,i.beforeMaskedValueChange,i.children),l=Dg(i,["mask","alwaysShowMask","maskChar","formatChars","inputRef","beforeMaskedValueChange","children"]);if(o){$e(o)||Cu(!1);var s=["onChange","onPaste","onMouseDown","onFocus","onBlur","value","disabled","readOnly"],a=ra({},l);s.forEach(function(g){return delete a[g]}),r=o(a),s.filter(function(g){return r.props[g]!=null&&r.props[g]!==l[g]}).length&&Cu(!1)}else r=il.createElement("input",ra({ref:this.handleRef},l));var c={onFocus:this.onFocus,onBlur:this.onBlur};return this.maskOptions.mask&&(l.disabled||l.readOnly||(c.onChange=this.onChange,c.onPaste=this.onPaste,c.onMouseDown=this.onMouseDown),l.value!=null&&(c.value=this.value)),r=il.cloneElement(r,c)},t}(il.Component),Xg=Kg;xp.exports=Xg;var Gg=xp.exports;const Zg=so(Gg);k.div`
  padding: 80px 0;
`;k.h2`
  margin-bottom: 40px;
  font-size: 48px;
  font-weight: 600;
  line-height: 1.17;
  color: var(--typography-black);
`;k.div`
  display: flex;
  gap: 24px;
  width: 100%;
  max-height: 860px;
`;k.img`
  width: 100%;
  height: 100%;
`;k.div`
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  gap: 40px;
  flex: 1 0 0;
  max-width: 828px;
  padding: 80px;
  border-radius: 16px;
  background-color: var(--background-white);
`;k.h3`
  font-size: 24px;
  font-weight: 600;
  line-height: 1.33;
  color: var(--primary-bluedark);
`;k.form`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-self: stretch;
`;k.label`
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
`;k.label`
  display: flex;
  align-content: flex-start;
  flex-wrap: wrap;
  width: 100%;
  gap: 4px;
  font-size: 16px;
  font-weight: 600;
  line-height: 1.5;
  color: var(--primary-bluedark);
`;k(Mg)`
  vertical-align: super;
`;k.input`
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
`;k.div`
  display: flex;
  gap: 8px;
`;k.label`
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
`;k(Zg)`
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
`;k.textarea`
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
`;k.p`
  display: flex;
  gap: 8px;
  align-items: center;
  font-size: 12px;
  font-weight: 400;
  line-height: 1.33;
  color: var(--secondary-red);
`;k.button`
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
`;k.section`
  padding-top: 80px;
  padding-bottom: 80px;
`;k.div`
  display: flex;
  flex-direction: column;
  gap: 40px;
  width: 100%;
  height: 884px;
  background: var(--background-bluedark);
  border-radius: 16px;
  padding: 80px;
`;k.h2`
  font-size: 48px;
  font-weight: 600;
  line-height: 56px;
  color: var(--typography-white);
`;k.p`
  color: var(--typography-white);
  font-size: 20px;
  font-weight: 500;
  line-height: 28px;
  width: 828px;
`;k.span`
  color: var(--primary-yellow);
  font-size: 20px;
  font-weight: 500;
  line-height: 28px;
`;k.ul`
  display: flex;
  gap: 24px;
`;k.li`
  position: relative;
  width: calc((100% - (24px * 3)) / 4);
  background: var(--background-white);
  padding: 40px;
  border-radius: 16px;
`;k.div`
  position: absolute;
  width: 80px;
  height: 80px;
  border-radius: 16px;
  padding: 16px;
  background: var(--primary-yellow);
  left: 258px;
  top: -24px;
`;k.a`
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
`;function Jg(){return v.jsx(v.Fragment,{children:v.jsxs("main",{children:[v.jsx(Pg,{}),v.jsx(Tg,{}),v.jsx(bg,{})]})})}al.createRoot(document.getElementById("root")).render(v.jsx(Au.StrictMode,{children:v.jsx(Jg,{})}));
