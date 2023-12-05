function dh(e,t){for(var n=0;n<t.length;n++){const r=t[n];if(typeof r!="string"&&!Array.isArray(r)){for(const i in r)if(i!=="default"&&!(i in e)){const o=Object.getOwnPropertyDescriptor(r,i);o&&Object.defineProperty(e,i,o.get?o:{enumerable:!0,get:()=>r[i]})}}}return Object.freeze(Object.defineProperty(e,Symbol.toStringTag,{value:"Module"}))}(function(){const t=document.createElement("link").relList;if(t&&t.supports&&t.supports("modulepreload"))return;for(const i of document.querySelectorAll('link[rel="modulepreload"]'))r(i);new MutationObserver(i=>{for(const o of i)if(o.type==="childList")for(const l of o.addedNodes)l.tagName==="LINK"&&l.rel==="modulepreload"&&r(l)}).observe(document,{childList:!0,subtree:!0});function n(i){const o={};return i.integrity&&(o.integrity=i.integrity),i.referrerPolicy&&(o.referrerPolicy=i.referrerPolicy),i.crossOrigin==="use-credentials"?o.credentials="include":i.crossOrigin==="anonymous"?o.credentials="omit":o.credentials="same-origin",o}function r(i){if(i.ep)return;i.ep=!0;const o=n(i);fetch(i.href,o)}})();var fh=typeof globalThis<"u"?globalThis:typeof window<"u"?window:typeof global<"u"?global:typeof self<"u"?self:{};function il(e){return e&&e.__esModule&&Object.prototype.hasOwnProperty.call(e,"default")?e.default:e}var sd={exports:{}},ol={},ad={exports:{}},ee={};/**
 * @license React
 * react.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */var bi=Symbol.for("react.element"),ph=Symbol.for("react.portal"),hh=Symbol.for("react.fragment"),mh=Symbol.for("react.strict_mode"),gh=Symbol.for("react.profiler"),yh=Symbol.for("react.provider"),xh=Symbol.for("react.context"),vh=Symbol.for("react.forward_ref"),wh=Symbol.for("react.suspense"),kh=Symbol.for("react.memo"),jh=Symbol.for("react.lazy"),yu=Symbol.iterator;function Sh(e){return e===null||typeof e!="object"?null:(e=yu&&e[yu]||e["@@iterator"],typeof e=="function"?e:null)}var ud={isMounted:function(){return!1},enqueueForceUpdate:function(){},enqueueReplaceState:function(){},enqueueSetState:function(){}},cd=Object.assign,dd={};function Tr(e,t,n){this.props=e,this.context=t,this.refs=dd,this.updater=n||ud}Tr.prototype.isReactComponent={};Tr.prototype.setState=function(e,t){if(typeof e!="object"&&typeof e!="function"&&e!=null)throw Error("setState(...): takes an object of state variables to update or a function which returns an object of state variables.");this.updater.enqueueSetState(this,e,t,"setState")};Tr.prototype.forceUpdate=function(e){this.updater.enqueueForceUpdate(this,e,"forceUpdate")};function fd(){}fd.prototype=Tr.prototype;function fa(e,t,n){this.props=e,this.context=t,this.refs=dd,this.updater=n||ud}var pa=fa.prototype=new fd;pa.constructor=fa;cd(pa,Tr.prototype);pa.isPureReactComponent=!0;var xu=Array.isArray,pd=Object.prototype.hasOwnProperty,ha={current:null},hd={key:!0,ref:!0,__self:!0,__source:!0};function md(e,t,n){var r,i={},o=null,l=null;if(t!=null)for(r in t.ref!==void 0&&(l=t.ref),t.key!==void 0&&(o=""+t.key),t)pd.call(t,r)&&!hd.hasOwnProperty(r)&&(i[r]=t[r]);var u=arguments.length-2;if(u===1)i.children=n;else if(1<u){for(var a=Array(u),d=0;d<u;d++)a[d]=arguments[d+2];i.children=a}if(e&&e.defaultProps)for(r in u=e.defaultProps,u)i[r]===void 0&&(i[r]=u[r]);return{$$typeof:bi,type:e,key:o,ref:l,props:i,_owner:ha.current}}function _h(e,t){return{$$typeof:bi,type:e.type,key:t,ref:e.ref,props:e.props,_owner:e._owner}}function ma(e){return typeof e=="object"&&e!==null&&e.$$typeof===bi}function Eh(e){var t={"=":"=0",":":"=2"};return"$"+e.replace(/[=:]/g,function(n){return t[n]})}var vu=/\/+/g;function bl(e,t){return typeof e=="object"&&e!==null&&e.key!=null?Eh(""+e.key):t.toString(36)}function uo(e,t,n,r,i){var o=typeof e;(o==="undefined"||o==="boolean")&&(e=null);var l=!1;if(e===null)l=!0;else switch(o){case"string":case"number":l=!0;break;case"object":switch(e.$$typeof){case bi:case ph:l=!0}}if(l)return l=e,i=i(l),e=r===""?"."+bl(l,0):r,xu(i)?(n="",e!=null&&(n=e.replace(vu,"$&/")+"/"),uo(i,t,n,"",function(d){return d})):i!=null&&(ma(i)&&(i=_h(i,n+(!i.key||l&&l.key===i.key?"":(""+i.key).replace(vu,"$&/")+"/")+e)),t.push(i)),1;if(l=0,r=r===""?".":r+":",xu(e))for(var u=0;u<e.length;u++){o=e[u];var a=r+bl(o,u);l+=uo(o,t,n,a,i)}else if(a=Sh(e),typeof a=="function")for(e=a.call(e),u=0;!(o=e.next()).done;)o=o.value,a=r+bl(o,u++),l+=uo(o,t,n,a,i);else if(o==="object")throw t=String(e),Error("Objects are not valid as a React child (found: "+(t==="[object Object]"?"object with keys {"+Object.keys(e).join(", ")+"}":t)+"). If you meant to render a collection of children, use an array instead.");return l}function Ai(e,t,n){if(e==null)return e;var r=[],i=0;return uo(e,r,"","",function(o){return t.call(n,o,i++)}),r}function Ch(e){if(e._status===-1){var t=e._result;t=t(),t.then(function(n){(e._status===0||e._status===-1)&&(e._status=1,e._result=n)},function(n){(e._status===0||e._status===-1)&&(e._status=2,e._result=n)}),e._status===-1&&(e._status=0,e._result=t)}if(e._status===1)return e._result.default;throw e._result}var Xe={current:null},co={transition:null},bh={ReactCurrentDispatcher:Xe,ReactCurrentBatchConfig:co,ReactCurrentOwner:ha};ee.Children={map:Ai,forEach:function(e,t,n){Ai(e,function(){t.apply(this,arguments)},n)},count:function(e){var t=0;return Ai(e,function(){t++}),t},toArray:function(e){return Ai(e,function(t){return t})||[]},only:function(e){if(!ma(e))throw Error("React.Children.only expected to receive a single React element child.");return e}};ee.Component=Tr;ee.Fragment=hh;ee.Profiler=gh;ee.PureComponent=fa;ee.StrictMode=mh;ee.Suspense=wh;ee.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED=bh;ee.cloneElement=function(e,t,n){if(e==null)throw Error("React.cloneElement(...): The argument must be a React element, but you passed "+e+".");var r=cd({},e.props),i=e.key,o=e.ref,l=e._owner;if(t!=null){if(t.ref!==void 0&&(o=t.ref,l=ha.current),t.key!==void 0&&(i=""+t.key),e.type&&e.type.defaultProps)var u=e.type.defaultProps;for(a in t)pd.call(t,a)&&!hd.hasOwnProperty(a)&&(r[a]=t[a]===void 0&&u!==void 0?u[a]:t[a])}var a=arguments.length-2;if(a===1)r.children=n;else if(1<a){u=Array(a);for(var d=0;d<a;d++)u[d]=arguments[d+2];r.children=u}return{$$typeof:bi,type:e.type,key:i,ref:o,props:r,_owner:l}};ee.createContext=function(e){return e={$$typeof:xh,_currentValue:e,_currentValue2:e,_threadCount:0,Provider:null,Consumer:null,_defaultValue:null,_globalName:null},e.Provider={$$typeof:yh,_context:e},e.Consumer=e};ee.createElement=md;ee.createFactory=function(e){var t=md.bind(null,e);return t.type=e,t};ee.createRef=function(){return{current:null}};ee.forwardRef=function(e){return{$$typeof:vh,render:e}};ee.isValidElement=ma;ee.lazy=function(e){return{$$typeof:jh,_payload:{_status:-1,_result:e},_init:Ch}};ee.memo=function(e,t){return{$$typeof:kh,type:e,compare:t===void 0?null:t}};ee.startTransition=function(e){var t=co.transition;co.transition={};try{e()}finally{co.transition=t}};ee.unstable_act=function(){throw Error("act(...) is not supported in production builds of React.")};ee.useCallback=function(e,t){return Xe.current.useCallback(e,t)};ee.useContext=function(e){return Xe.current.useContext(e)};ee.useDebugValue=function(){};ee.useDeferredValue=function(e){return Xe.current.useDeferredValue(e)};ee.useEffect=function(e,t){return Xe.current.useEffect(e,t)};ee.useId=function(){return Xe.current.useId()};ee.useImperativeHandle=function(e,t,n){return Xe.current.useImperativeHandle(e,t,n)};ee.useInsertionEffect=function(e,t){return Xe.current.useInsertionEffect(e,t)};ee.useLayoutEffect=function(e,t){return Xe.current.useLayoutEffect(e,t)};ee.useMemo=function(e,t){return Xe.current.useMemo(e,t)};ee.useReducer=function(e,t,n){return Xe.current.useReducer(e,t,n)};ee.useRef=function(e){return Xe.current.useRef(e)};ee.useState=function(e){return Xe.current.useState(e)};ee.useSyncExternalStore=function(e,t,n){return Xe.current.useSyncExternalStore(e,t,n)};ee.useTransition=function(){return Xe.current.useTransition()};ee.version="18.2.0";ad.exports=ee;var se=ad.exports;const dt=il(se),wu=dh({__proto__:null,default:dt},[se]);/**
 * @license React
 * react-jsx-runtime.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */var Th=se,Ph=Symbol.for("react.element"),Mh=Symbol.for("react.fragment"),Oh=Object.prototype.hasOwnProperty,zh=Th.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED.ReactCurrentOwner,Lh={key:!0,ref:!0,__self:!0,__source:!0};function gd(e,t,n){var r,i={},o=null,l=null;n!==void 0&&(o=""+n),t.key!==void 0&&(o=""+t.key),t.ref!==void 0&&(l=t.ref);for(r in t)Oh.call(t,r)&&!Lh.hasOwnProperty(r)&&(i[r]=t[r]);if(e&&e.defaultProps)for(r in t=e.defaultProps,t)i[r]===void 0&&(i[r]=t[r]);return{$$typeof:Ph,type:e,key:o,ref:l,props:i,_owner:zh.current}}ol.Fragment=Mh;ol.jsx=gd;ol.jsxs=gd;sd.exports=ol;var s=sd.exports,gs={},yd={exports:{}},at={},xd={exports:{}},vd={};/**
 * @license React
 * scheduler.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */(function(e){function t(I,B){var Q=I.length;I.push(B);e:for(;0<Q;){var le=Q-1>>>1,pe=I[le];if(0<i(pe,B))I[le]=B,I[Q]=pe,Q=le;else break e}}function n(I){return I.length===0?null:I[0]}function r(I){if(I.length===0)return null;var B=I[0],Q=I.pop();if(Q!==B){I[0]=Q;e:for(var le=0,pe=I.length,xt=pe>>>1;le<xt;){var Fe=2*(le+1)-1,Pt=I[Fe],_e=Fe+1,Re=I[_e];if(0>i(Pt,Q))_e<pe&&0>i(Re,Pt)?(I[le]=Re,I[_e]=Q,le=_e):(I[le]=Pt,I[Fe]=Q,le=Fe);else if(_e<pe&&0>i(Re,Q))I[le]=Re,I[_e]=Q,le=_e;else break e}}return B}function i(I,B){var Q=I.sortIndex-B.sortIndex;return Q!==0?Q:I.id-B.id}if(typeof performance=="object"&&typeof performance.now=="function"){var o=performance;e.unstable_now=function(){return o.now()}}else{var l=Date,u=l.now();e.unstable_now=function(){return l.now()-u}}var a=[],d=[],y=1,g=null,h=3,w=!1,x=!1,k=!1,T=typeof setTimeout=="function"?setTimeout:null,f=typeof clearTimeout=="function"?clearTimeout:null,c=typeof setImmediate<"u"?setImmediate:null;typeof navigator<"u"&&navigator.scheduling!==void 0&&navigator.scheduling.isInputPending!==void 0&&navigator.scheduling.isInputPending.bind(navigator.scheduling);function p(I){for(var B=n(d);B!==null;){if(B.callback===null)r(d);else if(B.startTime<=I)r(d),B.sortIndex=B.expirationTime,t(a,B);else break;B=n(d)}}function j(I){if(k=!1,p(I),!x)if(n(a)!==null)x=!0,ce(E);else{var B=n(d);B!==null&&Oe(j,B.startTime-I)}}function E(I,B){x=!1,k&&(k=!1,f(L),L=-1),w=!0;var Q=h;try{for(p(B),g=n(a);g!==null&&(!(g.expirationTime>B)||I&&!W());){var le=g.callback;if(typeof le=="function"){g.callback=null,h=g.priorityLevel;var pe=le(g.expirationTime<=B);B=e.unstable_now(),typeof pe=="function"?g.callback=pe:g===n(a)&&r(a),p(B)}else r(a);g=n(a)}if(g!==null)var xt=!0;else{var Fe=n(d);Fe!==null&&Oe(j,Fe.startTime-B),xt=!1}return xt}finally{g=null,h=Q,w=!1}}var b=!1,C=null,L=-1,P=5,R=-1;function W(){return!(e.unstable_now()-R<P)}function $(){if(C!==null){var I=e.unstable_now();R=I;var B=!0;try{B=C(!0,I)}finally{B?A():(b=!1,C=null)}}else b=!1}var A;if(typeof c=="function")A=function(){c($)};else if(typeof MessageChannel<"u"){var X=new MessageChannel,ae=X.port2;X.port1.onmessage=$,A=function(){ae.postMessage(null)}}else A=function(){T($,0)};function ce(I){C=I,b||(b=!0,A())}function Oe(I,B){L=T(function(){I(e.unstable_now())},B)}e.unstable_IdlePriority=5,e.unstable_ImmediatePriority=1,e.unstable_LowPriority=4,e.unstable_NormalPriority=3,e.unstable_Profiling=null,e.unstable_UserBlockingPriority=2,e.unstable_cancelCallback=function(I){I.callback=null},e.unstable_continueExecution=function(){x||w||(x=!0,ce(E))},e.unstable_forceFrameRate=function(I){0>I||125<I?console.error("forceFrameRate takes a positive int between 0 and 125, forcing frame rates higher than 125 fps is not supported"):P=0<I?Math.floor(1e3/I):5},e.unstable_getCurrentPriorityLevel=function(){return h},e.unstable_getFirstCallbackNode=function(){return n(a)},e.unstable_next=function(I){switch(h){case 1:case 2:case 3:var B=3;break;default:B=h}var Q=h;h=B;try{return I()}finally{h=Q}},e.unstable_pauseExecution=function(){},e.unstable_requestPaint=function(){},e.unstable_runWithPriority=function(I,B){switch(I){case 1:case 2:case 3:case 4:case 5:break;default:I=3}var Q=h;h=I;try{return B()}finally{h=Q}},e.unstable_scheduleCallback=function(I,B,Q){var le=e.unstable_now();switch(typeof Q=="object"&&Q!==null?(Q=Q.delay,Q=typeof Q=="number"&&0<Q?le+Q:le):Q=le,I){case 1:var pe=-1;break;case 2:pe=250;break;case 5:pe=1073741823;break;case 4:pe=1e4;break;default:pe=5e3}return pe=Q+pe,I={id:y++,callback:B,priorityLevel:I,startTime:Q,expirationTime:pe,sortIndex:-1},Q>le?(I.sortIndex=Q,t(d,I),n(a)===null&&I===n(d)&&(k?(f(L),L=-1):k=!0,Oe(j,Q-le))):(I.sortIndex=pe,t(a,I),x||w||(x=!0,ce(E))),I},e.unstable_shouldYield=W,e.unstable_wrapCallback=function(I){var B=h;return function(){var Q=h;h=B;try{return I.apply(this,arguments)}finally{h=Q}}}})(vd);xd.exports=vd;var Rh=xd.exports;/**
 * @license React
 * react-dom.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */var wd=se,st=Rh;function M(e){for(var t="https://reactjs.org/docs/error-decoder.html?invariant="+e,n=1;n<arguments.length;n++)t+="&args[]="+encodeURIComponent(arguments[n]);return"Minified React error #"+e+"; visit "+t+" for the full message or use the non-minified dev environment for full errors and additional helpful warnings."}var kd=new Set,li={};function Qn(e,t){wr(e,t),wr(e+"Capture",t)}function wr(e,t){for(li[e]=t,e=0;e<t.length;e++)kd.add(t[e])}var Kt=!(typeof window>"u"||typeof window.document>"u"||typeof window.document.createElement>"u"),ys=Object.prototype.hasOwnProperty,Nh=/^[:A-Z_a-z\u00C0-\u00D6\u00D8-\u00F6\u00F8-\u02FF\u0370-\u037D\u037F-\u1FFF\u200C-\u200D\u2070-\u218F\u2C00-\u2FEF\u3001-\uD7FF\uF900-\uFDCF\uFDF0-\uFFFD][:A-Z_a-z\u00C0-\u00D6\u00D8-\u00F6\u00F8-\u02FF\u0370-\u037D\u037F-\u1FFF\u200C-\u200D\u2070-\u218F\u2C00-\u2FEF\u3001-\uD7FF\uF900-\uFDCF\uFDF0-\uFFFD\-.0-9\u00B7\u0300-\u036F\u203F-\u2040]*$/,ku={},ju={};function Ah(e){return ys.call(ju,e)?!0:ys.call(ku,e)?!1:Nh.test(e)?ju[e]=!0:(ku[e]=!0,!1)}function Dh(e,t,n,r){if(n!==null&&n.type===0)return!1;switch(typeof t){case"function":case"symbol":return!0;case"boolean":return r?!1:n!==null?!n.acceptsBooleans:(e=e.toLowerCase().slice(0,5),e!=="data-"&&e!=="aria-");default:return!1}}function Ih(e,t,n,r){if(t===null||typeof t>"u"||Dh(e,t,n,r))return!0;if(r)return!1;if(n!==null)switch(n.type){case 3:return!t;case 4:return t===!1;case 5:return isNaN(t);case 6:return isNaN(t)||1>t}return!1}function Ge(e,t,n,r,i,o,l){this.acceptsBooleans=t===2||t===3||t===4,this.attributeName=r,this.attributeNamespace=i,this.mustUseProperty=n,this.propertyName=e,this.type=t,this.sanitizeURL=o,this.removeEmptyString=l}var $e={};"children dangerouslySetInnerHTML defaultValue defaultChecked innerHTML suppressContentEditableWarning suppressHydrationWarning style".split(" ").forEach(function(e){$e[e]=new Ge(e,0,!1,e,null,!1,!1)});[["acceptCharset","accept-charset"],["className","class"],["htmlFor","for"],["httpEquiv","http-equiv"]].forEach(function(e){var t=e[0];$e[t]=new Ge(t,1,!1,e[1],null,!1,!1)});["contentEditable","draggable","spellCheck","value"].forEach(function(e){$e[e]=new Ge(e,2,!1,e.toLowerCase(),null,!1,!1)});["autoReverse","externalResourcesRequired","focusable","preserveAlpha"].forEach(function(e){$e[e]=new Ge(e,2,!1,e,null,!1,!1)});"allowFullScreen async autoFocus autoPlay controls default defer disabled disablePictureInPicture disableRemotePlayback formNoValidate hidden loop noModule noValidate open playsInline readOnly required reversed scoped seamless itemScope".split(" ").forEach(function(e){$e[e]=new Ge(e,3,!1,e.toLowerCase(),null,!1,!1)});["checked","multiple","muted","selected"].forEach(function(e){$e[e]=new Ge(e,3,!0,e,null,!1,!1)});["capture","download"].forEach(function(e){$e[e]=new Ge(e,4,!1,e,null,!1,!1)});["cols","rows","size","span"].forEach(function(e){$e[e]=new Ge(e,6,!1,e,null,!1,!1)});["rowSpan","start"].forEach(function(e){$e[e]=new Ge(e,5,!1,e.toLowerCase(),null,!1,!1)});var ga=/[\-:]([a-z])/g;function ya(e){return e[1].toUpperCase()}"accent-height alignment-baseline arabic-form baseline-shift cap-height clip-path clip-rule color-interpolation color-interpolation-filters color-profile color-rendering dominant-baseline enable-background fill-opacity fill-rule flood-color flood-opacity font-family font-size font-size-adjust font-stretch font-style font-variant font-weight glyph-name glyph-orientation-horizontal glyph-orientation-vertical horiz-adv-x horiz-origin-x image-rendering letter-spacing lighting-color marker-end marker-mid marker-start overline-position overline-thickness paint-order panose-1 pointer-events rendering-intent shape-rendering stop-color stop-opacity strikethrough-position strikethrough-thickness stroke-dasharray stroke-dashoffset stroke-linecap stroke-linejoin stroke-miterlimit stroke-opacity stroke-width text-anchor text-decoration text-rendering underline-position underline-thickness unicode-bidi unicode-range units-per-em v-alphabetic v-hanging v-ideographic v-mathematical vector-effect vert-adv-y vert-origin-x vert-origin-y word-spacing writing-mode xmlns:xlink x-height".split(" ").forEach(function(e){var t=e.replace(ga,ya);$e[t]=new Ge(t,1,!1,e,null,!1,!1)});"xlink:actuate xlink:arcrole xlink:role xlink:show xlink:title xlink:type".split(" ").forEach(function(e){var t=e.replace(ga,ya);$e[t]=new Ge(t,1,!1,e,"http://www.w3.org/1999/xlink",!1,!1)});["xml:base","xml:lang","xml:space"].forEach(function(e){var t=e.replace(ga,ya);$e[t]=new Ge(t,1,!1,e,"http://www.w3.org/XML/1998/namespace",!1,!1)});["tabIndex","crossOrigin"].forEach(function(e){$e[e]=new Ge(e,1,!1,e.toLowerCase(),null,!1,!1)});$e.xlinkHref=new Ge("xlinkHref",1,!1,"xlink:href","http://www.w3.org/1999/xlink",!0,!1);["src","href","action","formAction"].forEach(function(e){$e[e]=new Ge(e,1,!1,e.toLowerCase(),null,!0,!0)});function xa(e,t,n,r){var i=$e.hasOwnProperty(t)?$e[t]:null;(i!==null?i.type!==0:r||!(2<t.length)||t[0]!=="o"&&t[0]!=="O"||t[1]!=="n"&&t[1]!=="N")&&(Ih(t,n,i,r)&&(n=null),r||i===null?Ah(t)&&(n===null?e.removeAttribute(t):e.setAttribute(t,""+n)):i.mustUseProperty?e[i.propertyName]=n===null?i.type===3?!1:"":n:(t=i.attributeName,r=i.attributeNamespace,n===null?e.removeAttribute(t):(i=i.type,n=i===3||i===4&&n===!0?"":""+n,r?e.setAttributeNS(r,t,n):e.setAttribute(t,n))))}var Jt=wd.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED,Di=Symbol.for("react.element"),er=Symbol.for("react.portal"),tr=Symbol.for("react.fragment"),va=Symbol.for("react.strict_mode"),xs=Symbol.for("react.profiler"),jd=Symbol.for("react.provider"),Sd=Symbol.for("react.context"),wa=Symbol.for("react.forward_ref"),vs=Symbol.for("react.suspense"),ws=Symbol.for("react.suspense_list"),ka=Symbol.for("react.memo"),cn=Symbol.for("react.lazy"),_d=Symbol.for("react.offscreen"),Su=Symbol.iterator;function zr(e){return e===null||typeof e!="object"?null:(e=Su&&e[Su]||e["@@iterator"],typeof e=="function"?e:null)}var we=Object.assign,Tl;function Yr(e){if(Tl===void 0)try{throw Error()}catch(n){var t=n.stack.trim().match(/\n( *(at )?)/);Tl=t&&t[1]||""}return`
`+Tl+e}var Pl=!1;function Ml(e,t){if(!e||Pl)return"";Pl=!0;var n=Error.prepareStackTrace;Error.prepareStackTrace=void 0;try{if(t)if(t=function(){throw Error()},Object.defineProperty(t.prototype,"props",{set:function(){throw Error()}}),typeof Reflect=="object"&&Reflect.construct){try{Reflect.construct(t,[])}catch(d){var r=d}Reflect.construct(e,[],t)}else{try{t.call()}catch(d){r=d}e.call(t.prototype)}else{try{throw Error()}catch(d){r=d}e()}}catch(d){if(d&&r&&typeof d.stack=="string"){for(var i=d.stack.split(`
`),o=r.stack.split(`
`),l=i.length-1,u=o.length-1;1<=l&&0<=u&&i[l]!==o[u];)u--;for(;1<=l&&0<=u;l--,u--)if(i[l]!==o[u]){if(l!==1||u!==1)do if(l--,u--,0>u||i[l]!==o[u]){var a=`
`+i[l].replace(" at new "," at ");return e.displayName&&a.includes("<anonymous>")&&(a=a.replace("<anonymous>",e.displayName)),a}while(1<=l&&0<=u);break}}}finally{Pl=!1,Error.prepareStackTrace=n}return(e=e?e.displayName||e.name:"")?Yr(e):""}function $h(e){switch(e.tag){case 5:return Yr(e.type);case 16:return Yr("Lazy");case 13:return Yr("Suspense");case 19:return Yr("SuspenseList");case 0:case 2:case 15:return e=Ml(e.type,!1),e;case 11:return e=Ml(e.type.render,!1),e;case 1:return e=Ml(e.type,!0),e;default:return""}}function ks(e){if(e==null)return null;if(typeof e=="function")return e.displayName||e.name||null;if(typeof e=="string")return e;switch(e){case tr:return"Fragment";case er:return"Portal";case xs:return"Profiler";case va:return"StrictMode";case vs:return"Suspense";case ws:return"SuspenseList"}if(typeof e=="object")switch(e.$$typeof){case Sd:return(e.displayName||"Context")+".Consumer";case jd:return(e._context.displayName||"Context")+".Provider";case wa:var t=e.render;return e=e.displayName,e||(e=t.displayName||t.name||"",e=e!==""?"ForwardRef("+e+")":"ForwardRef"),e;case ka:return t=e.displayName||null,t!==null?t:ks(e.type)||"Memo";case cn:t=e._payload,e=e._init;try{return ks(e(t))}catch{}}return null}function Fh(e){var t=e.type;switch(e.tag){case 24:return"Cache";case 9:return(t.displayName||"Context")+".Consumer";case 10:return(t._context.displayName||"Context")+".Provider";case 18:return"DehydratedFragment";case 11:return e=t.render,e=e.displayName||e.name||"",t.displayName||(e!==""?"ForwardRef("+e+")":"ForwardRef");case 7:return"Fragment";case 5:return t;case 4:return"Portal";case 3:return"Root";case 6:return"Text";case 16:return ks(t);case 8:return t===va?"StrictMode":"Mode";case 22:return"Offscreen";case 12:return"Profiler";case 21:return"Scope";case 13:return"Suspense";case 19:return"SuspenseList";case 25:return"TracingMarker";case 1:case 0:case 17:case 2:case 14:case 15:if(typeof t=="function")return t.displayName||t.name||null;if(typeof t=="string")return t}return null}function Cn(e){switch(typeof e){case"boolean":case"number":case"string":case"undefined":return e;case"object":return e;default:return""}}function Ed(e){var t=e.type;return(e=e.nodeName)&&e.toLowerCase()==="input"&&(t==="checkbox"||t==="radio")}function Vh(e){var t=Ed(e)?"checked":"value",n=Object.getOwnPropertyDescriptor(e.constructor.prototype,t),r=""+e[t];if(!e.hasOwnProperty(t)&&typeof n<"u"&&typeof n.get=="function"&&typeof n.set=="function"){var i=n.get,o=n.set;return Object.defineProperty(e,t,{configurable:!0,get:function(){return i.call(this)},set:function(l){r=""+l,o.call(this,l)}}),Object.defineProperty(e,t,{enumerable:n.enumerable}),{getValue:function(){return r},setValue:function(l){r=""+l},stopTracking:function(){e._valueTracker=null,delete e[t]}}}}function Ii(e){e._valueTracker||(e._valueTracker=Vh(e))}function Cd(e){if(!e)return!1;var t=e._valueTracker;if(!t)return!0;var n=t.getValue(),r="";return e&&(r=Ed(e)?e.checked?"true":"false":e.value),e=r,e!==n?(t.setValue(e),!0):!1}function To(e){if(e=e||(typeof document<"u"?document:void 0),typeof e>"u")return null;try{return e.activeElement||e.body}catch{return e.body}}function js(e,t){var n=t.checked;return we({},t,{defaultChecked:void 0,defaultValue:void 0,value:void 0,checked:n??e._wrapperState.initialChecked})}function _u(e,t){var n=t.defaultValue==null?"":t.defaultValue,r=t.checked!=null?t.checked:t.defaultChecked;n=Cn(t.value!=null?t.value:n),e._wrapperState={initialChecked:r,initialValue:n,controlled:t.type==="checkbox"||t.type==="radio"?t.checked!=null:t.value!=null}}function bd(e,t){t=t.checked,t!=null&&xa(e,"checked",t,!1)}function Ss(e,t){bd(e,t);var n=Cn(t.value),r=t.type;if(n!=null)r==="number"?(n===0&&e.value===""||e.value!=n)&&(e.value=""+n):e.value!==""+n&&(e.value=""+n);else if(r==="submit"||r==="reset"){e.removeAttribute("value");return}t.hasOwnProperty("value")?_s(e,t.type,n):t.hasOwnProperty("defaultValue")&&_s(e,t.type,Cn(t.defaultValue)),t.checked==null&&t.defaultChecked!=null&&(e.defaultChecked=!!t.defaultChecked)}function Eu(e,t,n){if(t.hasOwnProperty("value")||t.hasOwnProperty("defaultValue")){var r=t.type;if(!(r!=="submit"&&r!=="reset"||t.value!==void 0&&t.value!==null))return;t=""+e._wrapperState.initialValue,n||t===e.value||(e.value=t),e.defaultValue=t}n=e.name,n!==""&&(e.name=""),e.defaultChecked=!!e._wrapperState.initialChecked,n!==""&&(e.name=n)}function _s(e,t,n){(t!=="number"||To(e.ownerDocument)!==e)&&(n==null?e.defaultValue=""+e._wrapperState.initialValue:e.defaultValue!==""+n&&(e.defaultValue=""+n))}var Kr=Array.isArray;function pr(e,t,n,r){if(e=e.options,t){t={};for(var i=0;i<n.length;i++)t["$"+n[i]]=!0;for(n=0;n<e.length;n++)i=t.hasOwnProperty("$"+e[n].value),e[n].selected!==i&&(e[n].selected=i),i&&r&&(e[n].defaultSelected=!0)}else{for(n=""+Cn(n),t=null,i=0;i<e.length;i++){if(e[i].value===n){e[i].selected=!0,r&&(e[i].defaultSelected=!0);return}t!==null||e[i].disabled||(t=e[i])}t!==null&&(t.selected=!0)}}function Es(e,t){if(t.dangerouslySetInnerHTML!=null)throw Error(M(91));return we({},t,{value:void 0,defaultValue:void 0,children:""+e._wrapperState.initialValue})}function Cu(e,t){var n=t.value;if(n==null){if(n=t.children,t=t.defaultValue,n!=null){if(t!=null)throw Error(M(92));if(Kr(n)){if(1<n.length)throw Error(M(93));n=n[0]}t=n}t==null&&(t=""),n=t}e._wrapperState={initialValue:Cn(n)}}function Td(e,t){var n=Cn(t.value),r=Cn(t.defaultValue);n!=null&&(n=""+n,n!==e.value&&(e.value=n),t.defaultValue==null&&e.defaultValue!==n&&(e.defaultValue=n)),r!=null&&(e.defaultValue=""+r)}function bu(e){var t=e.textContent;t===e._wrapperState.initialValue&&t!==""&&t!==null&&(e.value=t)}function Pd(e){switch(e){case"svg":return"http://www.w3.org/2000/svg";case"math":return"http://www.w3.org/1998/Math/MathML";default:return"http://www.w3.org/1999/xhtml"}}function Cs(e,t){return e==null||e==="http://www.w3.org/1999/xhtml"?Pd(t):e==="http://www.w3.org/2000/svg"&&t==="foreignObject"?"http://www.w3.org/1999/xhtml":e}var $i,Md=function(e){return typeof MSApp<"u"&&MSApp.execUnsafeLocalFunction?function(t,n,r,i){MSApp.execUnsafeLocalFunction(function(){return e(t,n,r,i)})}:e}(function(e,t){if(e.namespaceURI!=="http://www.w3.org/2000/svg"||"innerHTML"in e)e.innerHTML=t;else{for($i=$i||document.createElement("div"),$i.innerHTML="<svg>"+t.valueOf().toString()+"</svg>",t=$i.firstChild;e.firstChild;)e.removeChild(e.firstChild);for(;t.firstChild;)e.appendChild(t.firstChild)}});function si(e,t){if(t){var n=e.firstChild;if(n&&n===e.lastChild&&n.nodeType===3){n.nodeValue=t;return}}e.textContent=t}var Zr={animationIterationCount:!0,aspectRatio:!0,borderImageOutset:!0,borderImageSlice:!0,borderImageWidth:!0,boxFlex:!0,boxFlexGroup:!0,boxOrdinalGroup:!0,columnCount:!0,columns:!0,flex:!0,flexGrow:!0,flexPositive:!0,flexShrink:!0,flexNegative:!0,flexOrder:!0,gridArea:!0,gridRow:!0,gridRowEnd:!0,gridRowSpan:!0,gridRowStart:!0,gridColumn:!0,gridColumnEnd:!0,gridColumnSpan:!0,gridColumnStart:!0,fontWeight:!0,lineClamp:!0,lineHeight:!0,opacity:!0,order:!0,orphans:!0,tabSize:!0,widows:!0,zIndex:!0,zoom:!0,fillOpacity:!0,floodOpacity:!0,stopOpacity:!0,strokeDasharray:!0,strokeDashoffset:!0,strokeMiterlimit:!0,strokeOpacity:!0,strokeWidth:!0},Uh=["Webkit","ms","Moz","O"];Object.keys(Zr).forEach(function(e){Uh.forEach(function(t){t=t+e.charAt(0).toUpperCase()+e.substring(1),Zr[t]=Zr[e]})});function Od(e,t,n){return t==null||typeof t=="boolean"||t===""?"":n||typeof t!="number"||t===0||Zr.hasOwnProperty(e)&&Zr[e]?(""+t).trim():t+"px"}function zd(e,t){e=e.style;for(var n in t)if(t.hasOwnProperty(n)){var r=n.indexOf("--")===0,i=Od(n,t[n],r);n==="float"&&(n="cssFloat"),r?e.setProperty(n,i):e[n]=i}}var Wh=we({menuitem:!0},{area:!0,base:!0,br:!0,col:!0,embed:!0,hr:!0,img:!0,input:!0,keygen:!0,link:!0,meta:!0,param:!0,source:!0,track:!0,wbr:!0});function bs(e,t){if(t){if(Wh[e]&&(t.children!=null||t.dangerouslySetInnerHTML!=null))throw Error(M(137,e));if(t.dangerouslySetInnerHTML!=null){if(t.children!=null)throw Error(M(60));if(typeof t.dangerouslySetInnerHTML!="object"||!("__html"in t.dangerouslySetInnerHTML))throw Error(M(61))}if(t.style!=null&&typeof t.style!="object")throw Error(M(62))}}function Ts(e,t){if(e.indexOf("-")===-1)return typeof t.is=="string";switch(e){case"annotation-xml":case"color-profile":case"font-face":case"font-face-src":case"font-face-uri":case"font-face-format":case"font-face-name":case"missing-glyph":return!1;default:return!0}}var Ps=null;function ja(e){return e=e.target||e.srcElement||window,e.correspondingUseElement&&(e=e.correspondingUseElement),e.nodeType===3?e.parentNode:e}var Ms=null,hr=null,mr=null;function Tu(e){if(e=Mi(e)){if(typeof Ms!="function")throw Error(M(280));var t=e.stateNode;t&&(t=cl(t),Ms(e.stateNode,e.type,t))}}function Ld(e){hr?mr?mr.push(e):mr=[e]:hr=e}function Rd(){if(hr){var e=hr,t=mr;if(mr=hr=null,Tu(e),t)for(e=0;e<t.length;e++)Tu(t[e])}}function Nd(e,t){return e(t)}function Ad(){}var Ol=!1;function Dd(e,t,n){if(Ol)return e(t,n);Ol=!0;try{return Nd(e,t,n)}finally{Ol=!1,(hr!==null||mr!==null)&&(Ad(),Rd())}}function ai(e,t){var n=e.stateNode;if(n===null)return null;var r=cl(n);if(r===null)return null;n=r[t];e:switch(t){case"onClick":case"onClickCapture":case"onDoubleClick":case"onDoubleClickCapture":case"onMouseDown":case"onMouseDownCapture":case"onMouseMove":case"onMouseMoveCapture":case"onMouseUp":case"onMouseUpCapture":case"onMouseEnter":(r=!r.disabled)||(e=e.type,r=!(e==="button"||e==="input"||e==="select"||e==="textarea")),e=!r;break e;default:e=!1}if(e)return null;if(n&&typeof n!="function")throw Error(M(231,t,typeof n));return n}var Os=!1;if(Kt)try{var Lr={};Object.defineProperty(Lr,"passive",{get:function(){Os=!0}}),window.addEventListener("test",Lr,Lr),window.removeEventListener("test",Lr,Lr)}catch{Os=!1}function Bh(e,t,n,r,i,o,l,u,a){var d=Array.prototype.slice.call(arguments,3);try{t.apply(n,d)}catch(y){this.onError(y)}}var Jr=!1,Po=null,Mo=!1,zs=null,Hh={onError:function(e){Jr=!0,Po=e}};function Qh(e,t,n,r,i,o,l,u,a){Jr=!1,Po=null,Bh.apply(Hh,arguments)}function Yh(e,t,n,r,i,o,l,u,a){if(Qh.apply(this,arguments),Jr){if(Jr){var d=Po;Jr=!1,Po=null}else throw Error(M(198));Mo||(Mo=!0,zs=d)}}function Yn(e){var t=e,n=e;if(e.alternate)for(;t.return;)t=t.return;else{e=t;do t=e,t.flags&4098&&(n=t.return),e=t.return;while(e)}return t.tag===3?n:null}function Id(e){if(e.tag===13){var t=e.memoizedState;if(t===null&&(e=e.alternate,e!==null&&(t=e.memoizedState)),t!==null)return t.dehydrated}return null}function Pu(e){if(Yn(e)!==e)throw Error(M(188))}function Kh(e){var t=e.alternate;if(!t){if(t=Yn(e),t===null)throw Error(M(188));return t!==e?null:e}for(var n=e,r=t;;){var i=n.return;if(i===null)break;var o=i.alternate;if(o===null){if(r=i.return,r!==null){n=r;continue}break}if(i.child===o.child){for(o=i.child;o;){if(o===n)return Pu(i),e;if(o===r)return Pu(i),t;o=o.sibling}throw Error(M(188))}if(n.return!==r.return)n=i,r=o;else{for(var l=!1,u=i.child;u;){if(u===n){l=!0,n=i,r=o;break}if(u===r){l=!0,r=i,n=o;break}u=u.sibling}if(!l){for(u=o.child;u;){if(u===n){l=!0,n=o,r=i;break}if(u===r){l=!0,r=o,n=i;break}u=u.sibling}if(!l)throw Error(M(189))}}if(n.alternate!==r)throw Error(M(190))}if(n.tag!==3)throw Error(M(188));return n.stateNode.current===n?e:t}function $d(e){return e=Kh(e),e!==null?Fd(e):null}function Fd(e){if(e.tag===5||e.tag===6)return e;for(e=e.child;e!==null;){var t=Fd(e);if(t!==null)return t;e=e.sibling}return null}var Vd=st.unstable_scheduleCallback,Mu=st.unstable_cancelCallback,Xh=st.unstable_shouldYield,Gh=st.unstable_requestPaint,Se=st.unstable_now,Zh=st.unstable_getCurrentPriorityLevel,Sa=st.unstable_ImmediatePriority,Ud=st.unstable_UserBlockingPriority,Oo=st.unstable_NormalPriority,Jh=st.unstable_LowPriority,Wd=st.unstable_IdlePriority,ll=null,Dt=null;function qh(e){if(Dt&&typeof Dt.onCommitFiberRoot=="function")try{Dt.onCommitFiberRoot(ll,e,void 0,(e.current.flags&128)===128)}catch{}}var Ct=Math.clz32?Math.clz32:nm,em=Math.log,tm=Math.LN2;function nm(e){return e>>>=0,e===0?32:31-(em(e)/tm|0)|0}var Fi=64,Vi=4194304;function Xr(e){switch(e&-e){case 1:return 1;case 2:return 2;case 4:return 4;case 8:return 8;case 16:return 16;case 32:return 32;case 64:case 128:case 256:case 512:case 1024:case 2048:case 4096:case 8192:case 16384:case 32768:case 65536:case 131072:case 262144:case 524288:case 1048576:case 2097152:return e&4194240;case 4194304:case 8388608:case 16777216:case 33554432:case 67108864:return e&130023424;case 134217728:return 134217728;case 268435456:return 268435456;case 536870912:return 536870912;case 1073741824:return 1073741824;default:return e}}function zo(e,t){var n=e.pendingLanes;if(n===0)return 0;var r=0,i=e.suspendedLanes,o=e.pingedLanes,l=n&268435455;if(l!==0){var u=l&~i;u!==0?r=Xr(u):(o&=l,o!==0&&(r=Xr(o)))}else l=n&~i,l!==0?r=Xr(l):o!==0&&(r=Xr(o));if(r===0)return 0;if(t!==0&&t!==r&&!(t&i)&&(i=r&-r,o=t&-t,i>=o||i===16&&(o&4194240)!==0))return t;if(r&4&&(r|=n&16),t=e.entangledLanes,t!==0)for(e=e.entanglements,t&=r;0<t;)n=31-Ct(t),i=1<<n,r|=e[n],t&=~i;return r}function rm(e,t){switch(e){case 1:case 2:case 4:return t+250;case 8:case 16:case 32:case 64:case 128:case 256:case 512:case 1024:case 2048:case 4096:case 8192:case 16384:case 32768:case 65536:case 131072:case 262144:case 524288:case 1048576:case 2097152:return t+5e3;case 4194304:case 8388608:case 16777216:case 33554432:case 67108864:return-1;case 134217728:case 268435456:case 536870912:case 1073741824:return-1;default:return-1}}function im(e,t){for(var n=e.suspendedLanes,r=e.pingedLanes,i=e.expirationTimes,o=e.pendingLanes;0<o;){var l=31-Ct(o),u=1<<l,a=i[l];a===-1?(!(u&n)||u&r)&&(i[l]=rm(u,t)):a<=t&&(e.expiredLanes|=u),o&=~u}}function Ls(e){return e=e.pendingLanes&-1073741825,e!==0?e:e&1073741824?1073741824:0}function Bd(){var e=Fi;return Fi<<=1,!(Fi&4194240)&&(Fi=64),e}function zl(e){for(var t=[],n=0;31>n;n++)t.push(e);return t}function Ti(e,t,n){e.pendingLanes|=t,t!==536870912&&(e.suspendedLanes=0,e.pingedLanes=0),e=e.eventTimes,t=31-Ct(t),e[t]=n}function om(e,t){var n=e.pendingLanes&~t;e.pendingLanes=t,e.suspendedLanes=0,e.pingedLanes=0,e.expiredLanes&=t,e.mutableReadLanes&=t,e.entangledLanes&=t,t=e.entanglements;var r=e.eventTimes;for(e=e.expirationTimes;0<n;){var i=31-Ct(n),o=1<<i;t[i]=0,r[i]=-1,e[i]=-1,n&=~o}}function _a(e,t){var n=e.entangledLanes|=t;for(e=e.entanglements;n;){var r=31-Ct(n),i=1<<r;i&t|e[r]&t&&(e[r]|=t),n&=~i}}var ue=0;function Hd(e){return e&=-e,1<e?4<e?e&268435455?16:536870912:4:1}var Qd,Ea,Yd,Kd,Xd,Rs=!1,Ui=[],xn=null,vn=null,wn=null,ui=new Map,ci=new Map,fn=[],lm="mousedown mouseup touchcancel touchend touchstart auxclick dblclick pointercancel pointerdown pointerup dragend dragstart drop compositionend compositionstart keydown keypress keyup input textInput copy cut paste click change contextmenu reset submit".split(" ");function Ou(e,t){switch(e){case"focusin":case"focusout":xn=null;break;case"dragenter":case"dragleave":vn=null;break;case"mouseover":case"mouseout":wn=null;break;case"pointerover":case"pointerout":ui.delete(t.pointerId);break;case"gotpointercapture":case"lostpointercapture":ci.delete(t.pointerId)}}function Rr(e,t,n,r,i,o){return e===null||e.nativeEvent!==o?(e={blockedOn:t,domEventName:n,eventSystemFlags:r,nativeEvent:o,targetContainers:[i]},t!==null&&(t=Mi(t),t!==null&&Ea(t)),e):(e.eventSystemFlags|=r,t=e.targetContainers,i!==null&&t.indexOf(i)===-1&&t.push(i),e)}function sm(e,t,n,r,i){switch(t){case"focusin":return xn=Rr(xn,e,t,n,r,i),!0;case"dragenter":return vn=Rr(vn,e,t,n,r,i),!0;case"mouseover":return wn=Rr(wn,e,t,n,r,i),!0;case"pointerover":var o=i.pointerId;return ui.set(o,Rr(ui.get(o)||null,e,t,n,r,i)),!0;case"gotpointercapture":return o=i.pointerId,ci.set(o,Rr(ci.get(o)||null,e,t,n,r,i)),!0}return!1}function Gd(e){var t=Rn(e.target);if(t!==null){var n=Yn(t);if(n!==null){if(t=n.tag,t===13){if(t=Id(n),t!==null){e.blockedOn=t,Xd(e.priority,function(){Yd(n)});return}}else if(t===3&&n.stateNode.current.memoizedState.isDehydrated){e.blockedOn=n.tag===3?n.stateNode.containerInfo:null;return}}}e.blockedOn=null}function fo(e){if(e.blockedOn!==null)return!1;for(var t=e.targetContainers;0<t.length;){var n=Ns(e.domEventName,e.eventSystemFlags,t[0],e.nativeEvent);if(n===null){n=e.nativeEvent;var r=new n.constructor(n.type,n);Ps=r,n.target.dispatchEvent(r),Ps=null}else return t=Mi(n),t!==null&&Ea(t),e.blockedOn=n,!1;t.shift()}return!0}function zu(e,t,n){fo(e)&&n.delete(t)}function am(){Rs=!1,xn!==null&&fo(xn)&&(xn=null),vn!==null&&fo(vn)&&(vn=null),wn!==null&&fo(wn)&&(wn=null),ui.forEach(zu),ci.forEach(zu)}function Nr(e,t){e.blockedOn===t&&(e.blockedOn=null,Rs||(Rs=!0,st.unstable_scheduleCallback(st.unstable_NormalPriority,am)))}function di(e){function t(i){return Nr(i,e)}if(0<Ui.length){Nr(Ui[0],e);for(var n=1;n<Ui.length;n++){var r=Ui[n];r.blockedOn===e&&(r.blockedOn=null)}}for(xn!==null&&Nr(xn,e),vn!==null&&Nr(vn,e),wn!==null&&Nr(wn,e),ui.forEach(t),ci.forEach(t),n=0;n<fn.length;n++)r=fn[n],r.blockedOn===e&&(r.blockedOn=null);for(;0<fn.length&&(n=fn[0],n.blockedOn===null);)Gd(n),n.blockedOn===null&&fn.shift()}var gr=Jt.ReactCurrentBatchConfig,Lo=!0;function um(e,t,n,r){var i=ue,o=gr.transition;gr.transition=null;try{ue=1,Ca(e,t,n,r)}finally{ue=i,gr.transition=o}}function cm(e,t,n,r){var i=ue,o=gr.transition;gr.transition=null;try{ue=4,Ca(e,t,n,r)}finally{ue=i,gr.transition=o}}function Ca(e,t,n,r){if(Lo){var i=Ns(e,t,n,r);if(i===null)Ul(e,t,r,Ro,n),Ou(e,r);else if(sm(i,e,t,n,r))r.stopPropagation();else if(Ou(e,r),t&4&&-1<lm.indexOf(e)){for(;i!==null;){var o=Mi(i);if(o!==null&&Qd(o),o=Ns(e,t,n,r),o===null&&Ul(e,t,r,Ro,n),o===i)break;i=o}i!==null&&r.stopPropagation()}else Ul(e,t,r,null,n)}}var Ro=null;function Ns(e,t,n,r){if(Ro=null,e=ja(r),e=Rn(e),e!==null)if(t=Yn(e),t===null)e=null;else if(n=t.tag,n===13){if(e=Id(t),e!==null)return e;e=null}else if(n===3){if(t.stateNode.current.memoizedState.isDehydrated)return t.tag===3?t.stateNode.containerInfo:null;e=null}else t!==e&&(e=null);return Ro=e,null}function Zd(e){switch(e){case"cancel":case"click":case"close":case"contextmenu":case"copy":case"cut":case"auxclick":case"dblclick":case"dragend":case"dragstart":case"drop":case"focusin":case"focusout":case"input":case"invalid":case"keydown":case"keypress":case"keyup":case"mousedown":case"mouseup":case"paste":case"pause":case"play":case"pointercancel":case"pointerdown":case"pointerup":case"ratechange":case"reset":case"resize":case"seeked":case"submit":case"touchcancel":case"touchend":case"touchstart":case"volumechange":case"change":case"selectionchange":case"textInput":case"compositionstart":case"compositionend":case"compositionupdate":case"beforeblur":case"afterblur":case"beforeinput":case"blur":case"fullscreenchange":case"focus":case"hashchange":case"popstate":case"select":case"selectstart":return 1;case"drag":case"dragenter":case"dragexit":case"dragleave":case"dragover":case"mousemove":case"mouseout":case"mouseover":case"pointermove":case"pointerout":case"pointerover":case"scroll":case"toggle":case"touchmove":case"wheel":case"mouseenter":case"mouseleave":case"pointerenter":case"pointerleave":return 4;case"message":switch(Zh()){case Sa:return 1;case Ud:return 4;case Oo:case Jh:return 16;case Wd:return 536870912;default:return 16}default:return 16}}var mn=null,ba=null,po=null;function Jd(){if(po)return po;var e,t=ba,n=t.length,r,i="value"in mn?mn.value:mn.textContent,o=i.length;for(e=0;e<n&&t[e]===i[e];e++);var l=n-e;for(r=1;r<=l&&t[n-r]===i[o-r];r++);return po=i.slice(e,1<r?1-r:void 0)}function ho(e){var t=e.keyCode;return"charCode"in e?(e=e.charCode,e===0&&t===13&&(e=13)):e=t,e===10&&(e=13),32<=e||e===13?e:0}function Wi(){return!0}function Lu(){return!1}function ut(e){function t(n,r,i,o,l){this._reactName=n,this._targetInst=i,this.type=r,this.nativeEvent=o,this.target=l,this.currentTarget=null;for(var u in e)e.hasOwnProperty(u)&&(n=e[u],this[u]=n?n(o):o[u]);return this.isDefaultPrevented=(o.defaultPrevented!=null?o.defaultPrevented:o.returnValue===!1)?Wi:Lu,this.isPropagationStopped=Lu,this}return we(t.prototype,{preventDefault:function(){this.defaultPrevented=!0;var n=this.nativeEvent;n&&(n.preventDefault?n.preventDefault():typeof n.returnValue!="unknown"&&(n.returnValue=!1),this.isDefaultPrevented=Wi)},stopPropagation:function(){var n=this.nativeEvent;n&&(n.stopPropagation?n.stopPropagation():typeof n.cancelBubble!="unknown"&&(n.cancelBubble=!0),this.isPropagationStopped=Wi)},persist:function(){},isPersistent:Wi}),t}var Pr={eventPhase:0,bubbles:0,cancelable:0,timeStamp:function(e){return e.timeStamp||Date.now()},defaultPrevented:0,isTrusted:0},Ta=ut(Pr),Pi=we({},Pr,{view:0,detail:0}),dm=ut(Pi),Ll,Rl,Ar,sl=we({},Pi,{screenX:0,screenY:0,clientX:0,clientY:0,pageX:0,pageY:0,ctrlKey:0,shiftKey:0,altKey:0,metaKey:0,getModifierState:Pa,button:0,buttons:0,relatedTarget:function(e){return e.relatedTarget===void 0?e.fromElement===e.srcElement?e.toElement:e.fromElement:e.relatedTarget},movementX:function(e){return"movementX"in e?e.movementX:(e!==Ar&&(Ar&&e.type==="mousemove"?(Ll=e.screenX-Ar.screenX,Rl=e.screenY-Ar.screenY):Rl=Ll=0,Ar=e),Ll)},movementY:function(e){return"movementY"in e?e.movementY:Rl}}),Ru=ut(sl),fm=we({},sl,{dataTransfer:0}),pm=ut(fm),hm=we({},Pi,{relatedTarget:0}),Nl=ut(hm),mm=we({},Pr,{animationName:0,elapsedTime:0,pseudoElement:0}),gm=ut(mm),ym=we({},Pr,{clipboardData:function(e){return"clipboardData"in e?e.clipboardData:window.clipboardData}}),xm=ut(ym),vm=we({},Pr,{data:0}),Nu=ut(vm),wm={Esc:"Escape",Spacebar:" ",Left:"ArrowLeft",Up:"ArrowUp",Right:"ArrowRight",Down:"ArrowDown",Del:"Delete",Win:"OS",Menu:"ContextMenu",Apps:"ContextMenu",Scroll:"ScrollLock",MozPrintableKey:"Unidentified"},km={8:"Backspace",9:"Tab",12:"Clear",13:"Enter",16:"Shift",17:"Control",18:"Alt",19:"Pause",20:"CapsLock",27:"Escape",32:" ",33:"PageUp",34:"PageDown",35:"End",36:"Home",37:"ArrowLeft",38:"ArrowUp",39:"ArrowRight",40:"ArrowDown",45:"Insert",46:"Delete",112:"F1",113:"F2",114:"F3",115:"F4",116:"F5",117:"F6",118:"F7",119:"F8",120:"F9",121:"F10",122:"F11",123:"F12",144:"NumLock",145:"ScrollLock",224:"Meta"},jm={Alt:"altKey",Control:"ctrlKey",Meta:"metaKey",Shift:"shiftKey"};function Sm(e){var t=this.nativeEvent;return t.getModifierState?t.getModifierState(e):(e=jm[e])?!!t[e]:!1}function Pa(){return Sm}var _m=we({},Pi,{key:function(e){if(e.key){var t=wm[e.key]||e.key;if(t!=="Unidentified")return t}return e.type==="keypress"?(e=ho(e),e===13?"Enter":String.fromCharCode(e)):e.type==="keydown"||e.type==="keyup"?km[e.keyCode]||"Unidentified":""},code:0,location:0,ctrlKey:0,shiftKey:0,altKey:0,metaKey:0,repeat:0,locale:0,getModifierState:Pa,charCode:function(e){return e.type==="keypress"?ho(e):0},keyCode:function(e){return e.type==="keydown"||e.type==="keyup"?e.keyCode:0},which:function(e){return e.type==="keypress"?ho(e):e.type==="keydown"||e.type==="keyup"?e.keyCode:0}}),Em=ut(_m),Cm=we({},sl,{pointerId:0,width:0,height:0,pressure:0,tangentialPressure:0,tiltX:0,tiltY:0,twist:0,pointerType:0,isPrimary:0}),Au=ut(Cm),bm=we({},Pi,{touches:0,targetTouches:0,changedTouches:0,altKey:0,metaKey:0,ctrlKey:0,shiftKey:0,getModifierState:Pa}),Tm=ut(bm),Pm=we({},Pr,{propertyName:0,elapsedTime:0,pseudoElement:0}),Mm=ut(Pm),Om=we({},sl,{deltaX:function(e){return"deltaX"in e?e.deltaX:"wheelDeltaX"in e?-e.wheelDeltaX:0},deltaY:function(e){return"deltaY"in e?e.deltaY:"wheelDeltaY"in e?-e.wheelDeltaY:"wheelDelta"in e?-e.wheelDelta:0},deltaZ:0,deltaMode:0}),zm=ut(Om),Lm=[9,13,27,32],Ma=Kt&&"CompositionEvent"in window,qr=null;Kt&&"documentMode"in document&&(qr=document.documentMode);var Rm=Kt&&"TextEvent"in window&&!qr,qd=Kt&&(!Ma||qr&&8<qr&&11>=qr),Du=" ",Iu=!1;function ef(e,t){switch(e){case"keyup":return Lm.indexOf(t.keyCode)!==-1;case"keydown":return t.keyCode!==229;case"keypress":case"mousedown":case"focusout":return!0;default:return!1}}function tf(e){return e=e.detail,typeof e=="object"&&"data"in e?e.data:null}var nr=!1;function Nm(e,t){switch(e){case"compositionend":return tf(t);case"keypress":return t.which!==32?null:(Iu=!0,Du);case"textInput":return e=t.data,e===Du&&Iu?null:e;default:return null}}function Am(e,t){if(nr)return e==="compositionend"||!Ma&&ef(e,t)?(e=Jd(),po=ba=mn=null,nr=!1,e):null;switch(e){case"paste":return null;case"keypress":if(!(t.ctrlKey||t.altKey||t.metaKey)||t.ctrlKey&&t.altKey){if(t.char&&1<t.char.length)return t.char;if(t.which)return String.fromCharCode(t.which)}return null;case"compositionend":return qd&&t.locale!=="ko"?null:t.data;default:return null}}var Dm={color:!0,date:!0,datetime:!0,"datetime-local":!0,email:!0,month:!0,number:!0,password:!0,range:!0,search:!0,tel:!0,text:!0,time:!0,url:!0,week:!0};function $u(e){var t=e&&e.nodeName&&e.nodeName.toLowerCase();return t==="input"?!!Dm[e.type]:t==="textarea"}function nf(e,t,n,r){Ld(r),t=No(t,"onChange"),0<t.length&&(n=new Ta("onChange","change",null,n,r),e.push({event:n,listeners:t}))}var ei=null,fi=null;function Im(e){hf(e,0)}function al(e){var t=or(e);if(Cd(t))return e}function $m(e,t){if(e==="change")return t}var rf=!1;if(Kt){var Al;if(Kt){var Dl="oninput"in document;if(!Dl){var Fu=document.createElement("div");Fu.setAttribute("oninput","return;"),Dl=typeof Fu.oninput=="function"}Al=Dl}else Al=!1;rf=Al&&(!document.documentMode||9<document.documentMode)}function Vu(){ei&&(ei.detachEvent("onpropertychange",of),fi=ei=null)}function of(e){if(e.propertyName==="value"&&al(fi)){var t=[];nf(t,fi,e,ja(e)),Dd(Im,t)}}function Fm(e,t,n){e==="focusin"?(Vu(),ei=t,fi=n,ei.attachEvent("onpropertychange",of)):e==="focusout"&&Vu()}function Vm(e){if(e==="selectionchange"||e==="keyup"||e==="keydown")return al(fi)}function Um(e,t){if(e==="click")return al(t)}function Wm(e,t){if(e==="input"||e==="change")return al(t)}function Bm(e,t){return e===t&&(e!==0||1/e===1/t)||e!==e&&t!==t}var Tt=typeof Object.is=="function"?Object.is:Bm;function pi(e,t){if(Tt(e,t))return!0;if(typeof e!="object"||e===null||typeof t!="object"||t===null)return!1;var n=Object.keys(e),r=Object.keys(t);if(n.length!==r.length)return!1;for(r=0;r<n.length;r++){var i=n[r];if(!ys.call(t,i)||!Tt(e[i],t[i]))return!1}return!0}function Uu(e){for(;e&&e.firstChild;)e=e.firstChild;return e}function Wu(e,t){var n=Uu(e);e=0;for(var r;n;){if(n.nodeType===3){if(r=e+n.textContent.length,e<=t&&r>=t)return{node:n,offset:t-e};e=r}e:{for(;n;){if(n.nextSibling){n=n.nextSibling;break e}n=n.parentNode}n=void 0}n=Uu(n)}}function lf(e,t){return e&&t?e===t?!0:e&&e.nodeType===3?!1:t&&t.nodeType===3?lf(e,t.parentNode):"contains"in e?e.contains(t):e.compareDocumentPosition?!!(e.compareDocumentPosition(t)&16):!1:!1}function sf(){for(var e=window,t=To();t instanceof e.HTMLIFrameElement;){try{var n=typeof t.contentWindow.location.href=="string"}catch{n=!1}if(n)e=t.contentWindow;else break;t=To(e.document)}return t}function Oa(e){var t=e&&e.nodeName&&e.nodeName.toLowerCase();return t&&(t==="input"&&(e.type==="text"||e.type==="search"||e.type==="tel"||e.type==="url"||e.type==="password")||t==="textarea"||e.contentEditable==="true")}function Hm(e){var t=sf(),n=e.focusedElem,r=e.selectionRange;if(t!==n&&n&&n.ownerDocument&&lf(n.ownerDocument.documentElement,n)){if(r!==null&&Oa(n)){if(t=r.start,e=r.end,e===void 0&&(e=t),"selectionStart"in n)n.selectionStart=t,n.selectionEnd=Math.min(e,n.value.length);else if(e=(t=n.ownerDocument||document)&&t.defaultView||window,e.getSelection){e=e.getSelection();var i=n.textContent.length,o=Math.min(r.start,i);r=r.end===void 0?o:Math.min(r.end,i),!e.extend&&o>r&&(i=r,r=o,o=i),i=Wu(n,o);var l=Wu(n,r);i&&l&&(e.rangeCount!==1||e.anchorNode!==i.node||e.anchorOffset!==i.offset||e.focusNode!==l.node||e.focusOffset!==l.offset)&&(t=t.createRange(),t.setStart(i.node,i.offset),e.removeAllRanges(),o>r?(e.addRange(t),e.extend(l.node,l.offset)):(t.setEnd(l.node,l.offset),e.addRange(t)))}}for(t=[],e=n;e=e.parentNode;)e.nodeType===1&&t.push({element:e,left:e.scrollLeft,top:e.scrollTop});for(typeof n.focus=="function"&&n.focus(),n=0;n<t.length;n++)e=t[n],e.element.scrollLeft=e.left,e.element.scrollTop=e.top}}var Qm=Kt&&"documentMode"in document&&11>=document.documentMode,rr=null,As=null,ti=null,Ds=!1;function Bu(e,t,n){var r=n.window===n?n.document:n.nodeType===9?n:n.ownerDocument;Ds||rr==null||rr!==To(r)||(r=rr,"selectionStart"in r&&Oa(r)?r={start:r.selectionStart,end:r.selectionEnd}:(r=(r.ownerDocument&&r.ownerDocument.defaultView||window).getSelection(),r={anchorNode:r.anchorNode,anchorOffset:r.anchorOffset,focusNode:r.focusNode,focusOffset:r.focusOffset}),ti&&pi(ti,r)||(ti=r,r=No(As,"onSelect"),0<r.length&&(t=new Ta("onSelect","select",null,t,n),e.push({event:t,listeners:r}),t.target=rr)))}function Bi(e,t){var n={};return n[e.toLowerCase()]=t.toLowerCase(),n["Webkit"+e]="webkit"+t,n["Moz"+e]="moz"+t,n}var ir={animationend:Bi("Animation","AnimationEnd"),animationiteration:Bi("Animation","AnimationIteration"),animationstart:Bi("Animation","AnimationStart"),transitionend:Bi("Transition","TransitionEnd")},Il={},af={};Kt&&(af=document.createElement("div").style,"AnimationEvent"in window||(delete ir.animationend.animation,delete ir.animationiteration.animation,delete ir.animationstart.animation),"TransitionEvent"in window||delete ir.transitionend.transition);function ul(e){if(Il[e])return Il[e];if(!ir[e])return e;var t=ir[e],n;for(n in t)if(t.hasOwnProperty(n)&&n in af)return Il[e]=t[n];return e}var uf=ul("animationend"),cf=ul("animationiteration"),df=ul("animationstart"),ff=ul("transitionend"),pf=new Map,Hu="abort auxClick cancel canPlay canPlayThrough click close contextMenu copy cut drag dragEnd dragEnter dragExit dragLeave dragOver dragStart drop durationChange emptied encrypted ended error gotPointerCapture input invalid keyDown keyPress keyUp load loadedData loadedMetadata loadStart lostPointerCapture mouseDown mouseMove mouseOut mouseOver mouseUp paste pause play playing pointerCancel pointerDown pointerMove pointerOut pointerOver pointerUp progress rateChange reset resize seeked seeking stalled submit suspend timeUpdate touchCancel touchEnd touchStart volumeChange scroll toggle touchMove waiting wheel".split(" ");function Tn(e,t){pf.set(e,t),Qn(t,[e])}for(var $l=0;$l<Hu.length;$l++){var Fl=Hu[$l],Ym=Fl.toLowerCase(),Km=Fl[0].toUpperCase()+Fl.slice(1);Tn(Ym,"on"+Km)}Tn(uf,"onAnimationEnd");Tn(cf,"onAnimationIteration");Tn(df,"onAnimationStart");Tn("dblclick","onDoubleClick");Tn("focusin","onFocus");Tn("focusout","onBlur");Tn(ff,"onTransitionEnd");wr("onMouseEnter",["mouseout","mouseover"]);wr("onMouseLeave",["mouseout","mouseover"]);wr("onPointerEnter",["pointerout","pointerover"]);wr("onPointerLeave",["pointerout","pointerover"]);Qn("onChange","change click focusin focusout input keydown keyup selectionchange".split(" "));Qn("onSelect","focusout contextmenu dragend focusin keydown keyup mousedown mouseup selectionchange".split(" "));Qn("onBeforeInput",["compositionend","keypress","textInput","paste"]);Qn("onCompositionEnd","compositionend focusout keydown keypress keyup mousedown".split(" "));Qn("onCompositionStart","compositionstart focusout keydown keypress keyup mousedown".split(" "));Qn("onCompositionUpdate","compositionupdate focusout keydown keypress keyup mousedown".split(" "));var Gr="abort canplay canplaythrough durationchange emptied encrypted ended error loadeddata loadedmetadata loadstart pause play playing progress ratechange resize seeked seeking stalled suspend timeupdate volumechange waiting".split(" "),Xm=new Set("cancel close invalid load scroll toggle".split(" ").concat(Gr));function Qu(e,t,n){var r=e.type||"unknown-event";e.currentTarget=n,Yh(r,t,void 0,e),e.currentTarget=null}function hf(e,t){t=(t&4)!==0;for(var n=0;n<e.length;n++){var r=e[n],i=r.event;r=r.listeners;e:{var o=void 0;if(t)for(var l=r.length-1;0<=l;l--){var u=r[l],a=u.instance,d=u.currentTarget;if(u=u.listener,a!==o&&i.isPropagationStopped())break e;Qu(i,u,d),o=a}else for(l=0;l<r.length;l++){if(u=r[l],a=u.instance,d=u.currentTarget,u=u.listener,a!==o&&i.isPropagationStopped())break e;Qu(i,u,d),o=a}}}if(Mo)throw e=zs,Mo=!1,zs=null,e}function he(e,t){var n=t[Us];n===void 0&&(n=t[Us]=new Set);var r=e+"__bubble";n.has(r)||(mf(t,e,2,!1),n.add(r))}function Vl(e,t,n){var r=0;t&&(r|=4),mf(n,e,r,t)}var Hi="_reactListening"+Math.random().toString(36).slice(2);function hi(e){if(!e[Hi]){e[Hi]=!0,kd.forEach(function(n){n!=="selectionchange"&&(Xm.has(n)||Vl(n,!1,e),Vl(n,!0,e))});var t=e.nodeType===9?e:e.ownerDocument;t===null||t[Hi]||(t[Hi]=!0,Vl("selectionchange",!1,t))}}function mf(e,t,n,r){switch(Zd(t)){case 1:var i=um;break;case 4:i=cm;break;default:i=Ca}n=i.bind(null,t,n,e),i=void 0,!Os||t!=="touchstart"&&t!=="touchmove"&&t!=="wheel"||(i=!0),r?i!==void 0?e.addEventListener(t,n,{capture:!0,passive:i}):e.addEventListener(t,n,!0):i!==void 0?e.addEventListener(t,n,{passive:i}):e.addEventListener(t,n,!1)}function Ul(e,t,n,r,i){var o=r;if(!(t&1)&&!(t&2)&&r!==null)e:for(;;){if(r===null)return;var l=r.tag;if(l===3||l===4){var u=r.stateNode.containerInfo;if(u===i||u.nodeType===8&&u.parentNode===i)break;if(l===4)for(l=r.return;l!==null;){var a=l.tag;if((a===3||a===4)&&(a=l.stateNode.containerInfo,a===i||a.nodeType===8&&a.parentNode===i))return;l=l.return}for(;u!==null;){if(l=Rn(u),l===null)return;if(a=l.tag,a===5||a===6){r=o=l;continue e}u=u.parentNode}}r=r.return}Dd(function(){var d=o,y=ja(n),g=[];e:{var h=pf.get(e);if(h!==void 0){var w=Ta,x=e;switch(e){case"keypress":if(ho(n)===0)break e;case"keydown":case"keyup":w=Em;break;case"focusin":x="focus",w=Nl;break;case"focusout":x="blur",w=Nl;break;case"beforeblur":case"afterblur":w=Nl;break;case"click":if(n.button===2)break e;case"auxclick":case"dblclick":case"mousedown":case"mousemove":case"mouseup":case"mouseout":case"mouseover":case"contextmenu":w=Ru;break;case"drag":case"dragend":case"dragenter":case"dragexit":case"dragleave":case"dragover":case"dragstart":case"drop":w=pm;break;case"touchcancel":case"touchend":case"touchmove":case"touchstart":w=Tm;break;case uf:case cf:case df:w=gm;break;case ff:w=Mm;break;case"scroll":w=dm;break;case"wheel":w=zm;break;case"copy":case"cut":case"paste":w=xm;break;case"gotpointercapture":case"lostpointercapture":case"pointercancel":case"pointerdown":case"pointermove":case"pointerout":case"pointerover":case"pointerup":w=Au}var k=(t&4)!==0,T=!k&&e==="scroll",f=k?h!==null?h+"Capture":null:h;k=[];for(var c=d,p;c!==null;){p=c;var j=p.stateNode;if(p.tag===5&&j!==null&&(p=j,f!==null&&(j=ai(c,f),j!=null&&k.push(mi(c,j,p)))),T)break;c=c.return}0<k.length&&(h=new w(h,x,null,n,y),g.push({event:h,listeners:k}))}}if(!(t&7)){e:{if(h=e==="mouseover"||e==="pointerover",w=e==="mouseout"||e==="pointerout",h&&n!==Ps&&(x=n.relatedTarget||n.fromElement)&&(Rn(x)||x[Xt]))break e;if((w||h)&&(h=y.window===y?y:(h=y.ownerDocument)?h.defaultView||h.parentWindow:window,w?(x=n.relatedTarget||n.toElement,w=d,x=x?Rn(x):null,x!==null&&(T=Yn(x),x!==T||x.tag!==5&&x.tag!==6)&&(x=null)):(w=null,x=d),w!==x)){if(k=Ru,j="onMouseLeave",f="onMouseEnter",c="mouse",(e==="pointerout"||e==="pointerover")&&(k=Au,j="onPointerLeave",f="onPointerEnter",c="pointer"),T=w==null?h:or(w),p=x==null?h:or(x),h=new k(j,c+"leave",w,n,y),h.target=T,h.relatedTarget=p,j=null,Rn(y)===d&&(k=new k(f,c+"enter",x,n,y),k.target=p,k.relatedTarget=T,j=k),T=j,w&&x)t:{for(k=w,f=x,c=0,p=k;p;p=Gn(p))c++;for(p=0,j=f;j;j=Gn(j))p++;for(;0<c-p;)k=Gn(k),c--;for(;0<p-c;)f=Gn(f),p--;for(;c--;){if(k===f||f!==null&&k===f.alternate)break t;k=Gn(k),f=Gn(f)}k=null}else k=null;w!==null&&Yu(g,h,w,k,!1),x!==null&&T!==null&&Yu(g,T,x,k,!0)}}e:{if(h=d?or(d):window,w=h.nodeName&&h.nodeName.toLowerCase(),w==="select"||w==="input"&&h.type==="file")var E=$m;else if($u(h))if(rf)E=Wm;else{E=Vm;var b=Fm}else(w=h.nodeName)&&w.toLowerCase()==="input"&&(h.type==="checkbox"||h.type==="radio")&&(E=Um);if(E&&(E=E(e,d))){nf(g,E,n,y);break e}b&&b(e,h,d),e==="focusout"&&(b=h._wrapperState)&&b.controlled&&h.type==="number"&&_s(h,"number",h.value)}switch(b=d?or(d):window,e){case"focusin":($u(b)||b.contentEditable==="true")&&(rr=b,As=d,ti=null);break;case"focusout":ti=As=rr=null;break;case"mousedown":Ds=!0;break;case"contextmenu":case"mouseup":case"dragend":Ds=!1,Bu(g,n,y);break;case"selectionchange":if(Qm)break;case"keydown":case"keyup":Bu(g,n,y)}var C;if(Ma)e:{switch(e){case"compositionstart":var L="onCompositionStart";break e;case"compositionend":L="onCompositionEnd";break e;case"compositionupdate":L="onCompositionUpdate";break e}L=void 0}else nr?ef(e,n)&&(L="onCompositionEnd"):e==="keydown"&&n.keyCode===229&&(L="onCompositionStart");L&&(qd&&n.locale!=="ko"&&(nr||L!=="onCompositionStart"?L==="onCompositionEnd"&&nr&&(C=Jd()):(mn=y,ba="value"in mn?mn.value:mn.textContent,nr=!0)),b=No(d,L),0<b.length&&(L=new Nu(L,e,null,n,y),g.push({event:L,listeners:b}),C?L.data=C:(C=tf(n),C!==null&&(L.data=C)))),(C=Rm?Nm(e,n):Am(e,n))&&(d=No(d,"onBeforeInput"),0<d.length&&(y=new Nu("onBeforeInput","beforeinput",null,n,y),g.push({event:y,listeners:d}),y.data=C))}hf(g,t)})}function mi(e,t,n){return{instance:e,listener:t,currentTarget:n}}function No(e,t){for(var n=t+"Capture",r=[];e!==null;){var i=e,o=i.stateNode;i.tag===5&&o!==null&&(i=o,o=ai(e,n),o!=null&&r.unshift(mi(e,o,i)),o=ai(e,t),o!=null&&r.push(mi(e,o,i))),e=e.return}return r}function Gn(e){if(e===null)return null;do e=e.return;while(e&&e.tag!==5);return e||null}function Yu(e,t,n,r,i){for(var o=t._reactName,l=[];n!==null&&n!==r;){var u=n,a=u.alternate,d=u.stateNode;if(a!==null&&a===r)break;u.tag===5&&d!==null&&(u=d,i?(a=ai(n,o),a!=null&&l.unshift(mi(n,a,u))):i||(a=ai(n,o),a!=null&&l.push(mi(n,a,u)))),n=n.return}l.length!==0&&e.push({event:t,listeners:l})}var Gm=/\r\n?/g,Zm=/\u0000|\uFFFD/g;function Ku(e){return(typeof e=="string"?e:""+e).replace(Gm,`
`).replace(Zm,"")}function Qi(e,t,n){if(t=Ku(t),Ku(e)!==t&&n)throw Error(M(425))}function Ao(){}var Is=null,$s=null;function Fs(e,t){return e==="textarea"||e==="noscript"||typeof t.children=="string"||typeof t.children=="number"||typeof t.dangerouslySetInnerHTML=="object"&&t.dangerouslySetInnerHTML!==null&&t.dangerouslySetInnerHTML.__html!=null}var Vs=typeof setTimeout=="function"?setTimeout:void 0,Jm=typeof clearTimeout=="function"?clearTimeout:void 0,Xu=typeof Promise=="function"?Promise:void 0,qm=typeof queueMicrotask=="function"?queueMicrotask:typeof Xu<"u"?function(e){return Xu.resolve(null).then(e).catch(eg)}:Vs;function eg(e){setTimeout(function(){throw e})}function Wl(e,t){var n=t,r=0;do{var i=n.nextSibling;if(e.removeChild(n),i&&i.nodeType===8)if(n=i.data,n==="/$"){if(r===0){e.removeChild(i),di(t);return}r--}else n!=="$"&&n!=="$?"&&n!=="$!"||r++;n=i}while(n);di(t)}function kn(e){for(;e!=null;e=e.nextSibling){var t=e.nodeType;if(t===1||t===3)break;if(t===8){if(t=e.data,t==="$"||t==="$!"||t==="$?")break;if(t==="/$")return null}}return e}function Gu(e){e=e.previousSibling;for(var t=0;e;){if(e.nodeType===8){var n=e.data;if(n==="$"||n==="$!"||n==="$?"){if(t===0)return e;t--}else n==="/$"&&t++}e=e.previousSibling}return null}var Mr=Math.random().toString(36).slice(2),Nt="__reactFiber$"+Mr,gi="__reactProps$"+Mr,Xt="__reactContainer$"+Mr,Us="__reactEvents$"+Mr,tg="__reactListeners$"+Mr,ng="__reactHandles$"+Mr;function Rn(e){var t=e[Nt];if(t)return t;for(var n=e.parentNode;n;){if(t=n[Xt]||n[Nt]){if(n=t.alternate,t.child!==null||n!==null&&n.child!==null)for(e=Gu(e);e!==null;){if(n=e[Nt])return n;e=Gu(e)}return t}e=n,n=e.parentNode}return null}function Mi(e){return e=e[Nt]||e[Xt],!e||e.tag!==5&&e.tag!==6&&e.tag!==13&&e.tag!==3?null:e}function or(e){if(e.tag===5||e.tag===6)return e.stateNode;throw Error(M(33))}function cl(e){return e[gi]||null}var Ws=[],lr=-1;function Pn(e){return{current:e}}function me(e){0>lr||(e.current=Ws[lr],Ws[lr]=null,lr--)}function fe(e,t){lr++,Ws[lr]=e.current,e.current=t}var bn={},He=Pn(bn),qe=Pn(!1),Vn=bn;function kr(e,t){var n=e.type.contextTypes;if(!n)return bn;var r=e.stateNode;if(r&&r.__reactInternalMemoizedUnmaskedChildContext===t)return r.__reactInternalMemoizedMaskedChildContext;var i={},o;for(o in n)i[o]=t[o];return r&&(e=e.stateNode,e.__reactInternalMemoizedUnmaskedChildContext=t,e.__reactInternalMemoizedMaskedChildContext=i),i}function et(e){return e=e.childContextTypes,e!=null}function Do(){me(qe),me(He)}function Zu(e,t,n){if(He.current!==bn)throw Error(M(168));fe(He,t),fe(qe,n)}function gf(e,t,n){var r=e.stateNode;if(t=t.childContextTypes,typeof r.getChildContext!="function")return n;r=r.getChildContext();for(var i in r)if(!(i in t))throw Error(M(108,Fh(e)||"Unknown",i));return we({},n,r)}function Io(e){return e=(e=e.stateNode)&&e.__reactInternalMemoizedMergedChildContext||bn,Vn=He.current,fe(He,e),fe(qe,qe.current),!0}function Ju(e,t,n){var r=e.stateNode;if(!r)throw Error(M(169));n?(e=gf(e,t,Vn),r.__reactInternalMemoizedMergedChildContext=e,me(qe),me(He),fe(He,e)):me(qe),fe(qe,n)}var Bt=null,dl=!1,Bl=!1;function yf(e){Bt===null?Bt=[e]:Bt.push(e)}function rg(e){dl=!0,yf(e)}function Mn(){if(!Bl&&Bt!==null){Bl=!0;var e=0,t=ue;try{var n=Bt;for(ue=1;e<n.length;e++){var r=n[e];do r=r(!0);while(r!==null)}Bt=null,dl=!1}catch(i){throw Bt!==null&&(Bt=Bt.slice(e+1)),Vd(Sa,Mn),i}finally{ue=t,Bl=!1}}return null}var sr=[],ar=0,$o=null,Fo=0,ft=[],pt=0,Un=null,Ht=1,Qt="";function zn(e,t){sr[ar++]=Fo,sr[ar++]=$o,$o=e,Fo=t}function xf(e,t,n){ft[pt++]=Ht,ft[pt++]=Qt,ft[pt++]=Un,Un=e;var r=Ht;e=Qt;var i=32-Ct(r)-1;r&=~(1<<i),n+=1;var o=32-Ct(t)+i;if(30<o){var l=i-i%5;o=(r&(1<<l)-1).toString(32),r>>=l,i-=l,Ht=1<<32-Ct(t)+i|n<<i|r,Qt=o+e}else Ht=1<<o|n<<i|r,Qt=e}function za(e){e.return!==null&&(zn(e,1),xf(e,1,0))}function La(e){for(;e===$o;)$o=sr[--ar],sr[ar]=null,Fo=sr[--ar],sr[ar]=null;for(;e===Un;)Un=ft[--pt],ft[pt]=null,Qt=ft[--pt],ft[pt]=null,Ht=ft[--pt],ft[pt]=null}var ot=null,it=null,ye=!1,_t=null;function vf(e,t){var n=ht(5,null,null,0);n.elementType="DELETED",n.stateNode=t,n.return=e,t=e.deletions,t===null?(e.deletions=[n],e.flags|=16):t.push(n)}function qu(e,t){switch(e.tag){case 5:var n=e.type;return t=t.nodeType!==1||n.toLowerCase()!==t.nodeName.toLowerCase()?null:t,t!==null?(e.stateNode=t,ot=e,it=kn(t.firstChild),!0):!1;case 6:return t=e.pendingProps===""||t.nodeType!==3?null:t,t!==null?(e.stateNode=t,ot=e,it=null,!0):!1;case 13:return t=t.nodeType!==8?null:t,t!==null?(n=Un!==null?{id:Ht,overflow:Qt}:null,e.memoizedState={dehydrated:t,treeContext:n,retryLane:1073741824},n=ht(18,null,null,0),n.stateNode=t,n.return=e,e.child=n,ot=e,it=null,!0):!1;default:return!1}}function Bs(e){return(e.mode&1)!==0&&(e.flags&128)===0}function Hs(e){if(ye){var t=it;if(t){var n=t;if(!qu(e,t)){if(Bs(e))throw Error(M(418));t=kn(n.nextSibling);var r=ot;t&&qu(e,t)?vf(r,n):(e.flags=e.flags&-4097|2,ye=!1,ot=e)}}else{if(Bs(e))throw Error(M(418));e.flags=e.flags&-4097|2,ye=!1,ot=e}}}function ec(e){for(e=e.return;e!==null&&e.tag!==5&&e.tag!==3&&e.tag!==13;)e=e.return;ot=e}function Yi(e){if(e!==ot)return!1;if(!ye)return ec(e),ye=!0,!1;var t;if((t=e.tag!==3)&&!(t=e.tag!==5)&&(t=e.type,t=t!=="head"&&t!=="body"&&!Fs(e.type,e.memoizedProps)),t&&(t=it)){if(Bs(e))throw wf(),Error(M(418));for(;t;)vf(e,t),t=kn(t.nextSibling)}if(ec(e),e.tag===13){if(e=e.memoizedState,e=e!==null?e.dehydrated:null,!e)throw Error(M(317));e:{for(e=e.nextSibling,t=0;e;){if(e.nodeType===8){var n=e.data;if(n==="/$"){if(t===0){it=kn(e.nextSibling);break e}t--}else n!=="$"&&n!=="$!"&&n!=="$?"||t++}e=e.nextSibling}it=null}}else it=ot?kn(e.stateNode.nextSibling):null;return!0}function wf(){for(var e=it;e;)e=kn(e.nextSibling)}function jr(){it=ot=null,ye=!1}function Ra(e){_t===null?_t=[e]:_t.push(e)}var ig=Jt.ReactCurrentBatchConfig;function kt(e,t){if(e&&e.defaultProps){t=we({},t),e=e.defaultProps;for(var n in e)t[n]===void 0&&(t[n]=e[n]);return t}return t}var Vo=Pn(null),Uo=null,ur=null,Na=null;function Aa(){Na=ur=Uo=null}function Da(e){var t=Vo.current;me(Vo),e._currentValue=t}function Qs(e,t,n){for(;e!==null;){var r=e.alternate;if((e.childLanes&t)!==t?(e.childLanes|=t,r!==null&&(r.childLanes|=t)):r!==null&&(r.childLanes&t)!==t&&(r.childLanes|=t),e===n)break;e=e.return}}function yr(e,t){Uo=e,Na=ur=null,e=e.dependencies,e!==null&&e.firstContext!==null&&(e.lanes&t&&(Je=!0),e.firstContext=null)}function gt(e){var t=e._currentValue;if(Na!==e)if(e={context:e,memoizedValue:t,next:null},ur===null){if(Uo===null)throw Error(M(308));ur=e,Uo.dependencies={lanes:0,firstContext:e}}else ur=ur.next=e;return t}var Nn=null;function Ia(e){Nn===null?Nn=[e]:Nn.push(e)}function kf(e,t,n,r){var i=t.interleaved;return i===null?(n.next=n,Ia(t)):(n.next=i.next,i.next=n),t.interleaved=n,Gt(e,r)}function Gt(e,t){e.lanes|=t;var n=e.alternate;for(n!==null&&(n.lanes|=t),n=e,e=e.return;e!==null;)e.childLanes|=t,n=e.alternate,n!==null&&(n.childLanes|=t),n=e,e=e.return;return n.tag===3?n.stateNode:null}var dn=!1;function $a(e){e.updateQueue={baseState:e.memoizedState,firstBaseUpdate:null,lastBaseUpdate:null,shared:{pending:null,interleaved:null,lanes:0},effects:null}}function jf(e,t){e=e.updateQueue,t.updateQueue===e&&(t.updateQueue={baseState:e.baseState,firstBaseUpdate:e.firstBaseUpdate,lastBaseUpdate:e.lastBaseUpdate,shared:e.shared,effects:e.effects})}function Yt(e,t){return{eventTime:e,lane:t,tag:0,payload:null,callback:null,next:null}}function jn(e,t,n){var r=e.updateQueue;if(r===null)return null;if(r=r.shared,re&2){var i=r.pending;return i===null?t.next=t:(t.next=i.next,i.next=t),r.pending=t,Gt(e,n)}return i=r.interleaved,i===null?(t.next=t,Ia(r)):(t.next=i.next,i.next=t),r.interleaved=t,Gt(e,n)}function mo(e,t,n){if(t=t.updateQueue,t!==null&&(t=t.shared,(n&4194240)!==0)){var r=t.lanes;r&=e.pendingLanes,n|=r,t.lanes=n,_a(e,n)}}function tc(e,t){var n=e.updateQueue,r=e.alternate;if(r!==null&&(r=r.updateQueue,n===r)){var i=null,o=null;if(n=n.firstBaseUpdate,n!==null){do{var l={eventTime:n.eventTime,lane:n.lane,tag:n.tag,payload:n.payload,callback:n.callback,next:null};o===null?i=o=l:o=o.next=l,n=n.next}while(n!==null);o===null?i=o=t:o=o.next=t}else i=o=t;n={baseState:r.baseState,firstBaseUpdate:i,lastBaseUpdate:o,shared:r.shared,effects:r.effects},e.updateQueue=n;return}e=n.lastBaseUpdate,e===null?n.firstBaseUpdate=t:e.next=t,n.lastBaseUpdate=t}function Wo(e,t,n,r){var i=e.updateQueue;dn=!1;var o=i.firstBaseUpdate,l=i.lastBaseUpdate,u=i.shared.pending;if(u!==null){i.shared.pending=null;var a=u,d=a.next;a.next=null,l===null?o=d:l.next=d,l=a;var y=e.alternate;y!==null&&(y=y.updateQueue,u=y.lastBaseUpdate,u!==l&&(u===null?y.firstBaseUpdate=d:u.next=d,y.lastBaseUpdate=a))}if(o!==null){var g=i.baseState;l=0,y=d=a=null,u=o;do{var h=u.lane,w=u.eventTime;if((r&h)===h){y!==null&&(y=y.next={eventTime:w,lane:0,tag:u.tag,payload:u.payload,callback:u.callback,next:null});e:{var x=e,k=u;switch(h=t,w=n,k.tag){case 1:if(x=k.payload,typeof x=="function"){g=x.call(w,g,h);break e}g=x;break e;case 3:x.flags=x.flags&-65537|128;case 0:if(x=k.payload,h=typeof x=="function"?x.call(w,g,h):x,h==null)break e;g=we({},g,h);break e;case 2:dn=!0}}u.callback!==null&&u.lane!==0&&(e.flags|=64,h=i.effects,h===null?i.effects=[u]:h.push(u))}else w={eventTime:w,lane:h,tag:u.tag,payload:u.payload,callback:u.callback,next:null},y===null?(d=y=w,a=g):y=y.next=w,l|=h;if(u=u.next,u===null){if(u=i.shared.pending,u===null)break;h=u,u=h.next,h.next=null,i.lastBaseUpdate=h,i.shared.pending=null}}while(!0);if(y===null&&(a=g),i.baseState=a,i.firstBaseUpdate=d,i.lastBaseUpdate=y,t=i.shared.interleaved,t!==null){i=t;do l|=i.lane,i=i.next;while(i!==t)}else o===null&&(i.shared.lanes=0);Bn|=l,e.lanes=l,e.memoizedState=g}}function nc(e,t,n){if(e=t.effects,t.effects=null,e!==null)for(t=0;t<e.length;t++){var r=e[t],i=r.callback;if(i!==null){if(r.callback=null,r=n,typeof i!="function")throw Error(M(191,i));i.call(r)}}}var Sf=new wd.Component().refs;function Ys(e,t,n,r){t=e.memoizedState,n=n(r,t),n=n==null?t:we({},t,n),e.memoizedState=n,e.lanes===0&&(e.updateQueue.baseState=n)}var fl={isMounted:function(e){return(e=e._reactInternals)?Yn(e)===e:!1},enqueueSetState:function(e,t,n){e=e._reactInternals;var r=Ke(),i=_n(e),o=Yt(r,i);o.payload=t,n!=null&&(o.callback=n),t=jn(e,o,i),t!==null&&(bt(t,e,i,r),mo(t,e,i))},enqueueReplaceState:function(e,t,n){e=e._reactInternals;var r=Ke(),i=_n(e),o=Yt(r,i);o.tag=1,o.payload=t,n!=null&&(o.callback=n),t=jn(e,o,i),t!==null&&(bt(t,e,i,r),mo(t,e,i))},enqueueForceUpdate:function(e,t){e=e._reactInternals;var n=Ke(),r=_n(e),i=Yt(n,r);i.tag=2,t!=null&&(i.callback=t),t=jn(e,i,r),t!==null&&(bt(t,e,r,n),mo(t,e,r))}};function rc(e,t,n,r,i,o,l){return e=e.stateNode,typeof e.shouldComponentUpdate=="function"?e.shouldComponentUpdate(r,o,l):t.prototype&&t.prototype.isPureReactComponent?!pi(n,r)||!pi(i,o):!0}function _f(e,t,n){var r=!1,i=bn,o=t.contextType;return typeof o=="object"&&o!==null?o=gt(o):(i=et(t)?Vn:He.current,r=t.contextTypes,o=(r=r!=null)?kr(e,i):bn),t=new t(n,o),e.memoizedState=t.state!==null&&t.state!==void 0?t.state:null,t.updater=fl,e.stateNode=t,t._reactInternals=e,r&&(e=e.stateNode,e.__reactInternalMemoizedUnmaskedChildContext=i,e.__reactInternalMemoizedMaskedChildContext=o),t}function ic(e,t,n,r){e=t.state,typeof t.componentWillReceiveProps=="function"&&t.componentWillReceiveProps(n,r),typeof t.UNSAFE_componentWillReceiveProps=="function"&&t.UNSAFE_componentWillReceiveProps(n,r),t.state!==e&&fl.enqueueReplaceState(t,t.state,null)}function Ks(e,t,n,r){var i=e.stateNode;i.props=n,i.state=e.memoizedState,i.refs=Sf,$a(e);var o=t.contextType;typeof o=="object"&&o!==null?i.context=gt(o):(o=et(t)?Vn:He.current,i.context=kr(e,o)),i.state=e.memoizedState,o=t.getDerivedStateFromProps,typeof o=="function"&&(Ys(e,t,o,n),i.state=e.memoizedState),typeof t.getDerivedStateFromProps=="function"||typeof i.getSnapshotBeforeUpdate=="function"||typeof i.UNSAFE_componentWillMount!="function"&&typeof i.componentWillMount!="function"||(t=i.state,typeof i.componentWillMount=="function"&&i.componentWillMount(),typeof i.UNSAFE_componentWillMount=="function"&&i.UNSAFE_componentWillMount(),t!==i.state&&fl.enqueueReplaceState(i,i.state,null),Wo(e,n,i,r),i.state=e.memoizedState),typeof i.componentDidMount=="function"&&(e.flags|=4194308)}function Dr(e,t,n){if(e=n.ref,e!==null&&typeof e!="function"&&typeof e!="object"){if(n._owner){if(n=n._owner,n){if(n.tag!==1)throw Error(M(309));var r=n.stateNode}if(!r)throw Error(M(147,e));var i=r,o=""+e;return t!==null&&t.ref!==null&&typeof t.ref=="function"&&t.ref._stringRef===o?t.ref:(t=function(l){var u=i.refs;u===Sf&&(u=i.refs={}),l===null?delete u[o]:u[o]=l},t._stringRef=o,t)}if(typeof e!="string")throw Error(M(284));if(!n._owner)throw Error(M(290,e))}return e}function Ki(e,t){throw e=Object.prototype.toString.call(t),Error(M(31,e==="[object Object]"?"object with keys {"+Object.keys(t).join(", ")+"}":e))}function oc(e){var t=e._init;return t(e._payload)}function Ef(e){function t(f,c){if(e){var p=f.deletions;p===null?(f.deletions=[c],f.flags|=16):p.push(c)}}function n(f,c){if(!e)return null;for(;c!==null;)t(f,c),c=c.sibling;return null}function r(f,c){for(f=new Map;c!==null;)c.key!==null?f.set(c.key,c):f.set(c.index,c),c=c.sibling;return f}function i(f,c){return f=En(f,c),f.index=0,f.sibling=null,f}function o(f,c,p){return f.index=p,e?(p=f.alternate,p!==null?(p=p.index,p<c?(f.flags|=2,c):p):(f.flags|=2,c)):(f.flags|=1048576,c)}function l(f){return e&&f.alternate===null&&(f.flags|=2),f}function u(f,c,p,j){return c===null||c.tag!==6?(c=Zl(p,f.mode,j),c.return=f,c):(c=i(c,p),c.return=f,c)}function a(f,c,p,j){var E=p.type;return E===tr?y(f,c,p.props.children,j,p.key):c!==null&&(c.elementType===E||typeof E=="object"&&E!==null&&E.$$typeof===cn&&oc(E)===c.type)?(j=i(c,p.props),j.ref=Dr(f,c,p),j.return=f,j):(j=ko(p.type,p.key,p.props,null,f.mode,j),j.ref=Dr(f,c,p),j.return=f,j)}function d(f,c,p,j){return c===null||c.tag!==4||c.stateNode.containerInfo!==p.containerInfo||c.stateNode.implementation!==p.implementation?(c=Jl(p,f.mode,j),c.return=f,c):(c=i(c,p.children||[]),c.return=f,c)}function y(f,c,p,j,E){return c===null||c.tag!==7?(c=Fn(p,f.mode,j,E),c.return=f,c):(c=i(c,p),c.return=f,c)}function g(f,c,p){if(typeof c=="string"&&c!==""||typeof c=="number")return c=Zl(""+c,f.mode,p),c.return=f,c;if(typeof c=="object"&&c!==null){switch(c.$$typeof){case Di:return p=ko(c.type,c.key,c.props,null,f.mode,p),p.ref=Dr(f,null,c),p.return=f,p;case er:return c=Jl(c,f.mode,p),c.return=f,c;case cn:var j=c._init;return g(f,j(c._payload),p)}if(Kr(c)||zr(c))return c=Fn(c,f.mode,p,null),c.return=f,c;Ki(f,c)}return null}function h(f,c,p,j){var E=c!==null?c.key:null;if(typeof p=="string"&&p!==""||typeof p=="number")return E!==null?null:u(f,c,""+p,j);if(typeof p=="object"&&p!==null){switch(p.$$typeof){case Di:return p.key===E?a(f,c,p,j):null;case er:return p.key===E?d(f,c,p,j):null;case cn:return E=p._init,h(f,c,E(p._payload),j)}if(Kr(p)||zr(p))return E!==null?null:y(f,c,p,j,null);Ki(f,p)}return null}function w(f,c,p,j,E){if(typeof j=="string"&&j!==""||typeof j=="number")return f=f.get(p)||null,u(c,f,""+j,E);if(typeof j=="object"&&j!==null){switch(j.$$typeof){case Di:return f=f.get(j.key===null?p:j.key)||null,a(c,f,j,E);case er:return f=f.get(j.key===null?p:j.key)||null,d(c,f,j,E);case cn:var b=j._init;return w(f,c,p,b(j._payload),E)}if(Kr(j)||zr(j))return f=f.get(p)||null,y(c,f,j,E,null);Ki(c,j)}return null}function x(f,c,p,j){for(var E=null,b=null,C=c,L=c=0,P=null;C!==null&&L<p.length;L++){C.index>L?(P=C,C=null):P=C.sibling;var R=h(f,C,p[L],j);if(R===null){C===null&&(C=P);break}e&&C&&R.alternate===null&&t(f,C),c=o(R,c,L),b===null?E=R:b.sibling=R,b=R,C=P}if(L===p.length)return n(f,C),ye&&zn(f,L),E;if(C===null){for(;L<p.length;L++)C=g(f,p[L],j),C!==null&&(c=o(C,c,L),b===null?E=C:b.sibling=C,b=C);return ye&&zn(f,L),E}for(C=r(f,C);L<p.length;L++)P=w(C,f,L,p[L],j),P!==null&&(e&&P.alternate!==null&&C.delete(P.key===null?L:P.key),c=o(P,c,L),b===null?E=P:b.sibling=P,b=P);return e&&C.forEach(function(W){return t(f,W)}),ye&&zn(f,L),E}function k(f,c,p,j){var E=zr(p);if(typeof E!="function")throw Error(M(150));if(p=E.call(p),p==null)throw Error(M(151));for(var b=E=null,C=c,L=c=0,P=null,R=p.next();C!==null&&!R.done;L++,R=p.next()){C.index>L?(P=C,C=null):P=C.sibling;var W=h(f,C,R.value,j);if(W===null){C===null&&(C=P);break}e&&C&&W.alternate===null&&t(f,C),c=o(W,c,L),b===null?E=W:b.sibling=W,b=W,C=P}if(R.done)return n(f,C),ye&&zn(f,L),E;if(C===null){for(;!R.done;L++,R=p.next())R=g(f,R.value,j),R!==null&&(c=o(R,c,L),b===null?E=R:b.sibling=R,b=R);return ye&&zn(f,L),E}for(C=r(f,C);!R.done;L++,R=p.next())R=w(C,f,L,R.value,j),R!==null&&(e&&R.alternate!==null&&C.delete(R.key===null?L:R.key),c=o(R,c,L),b===null?E=R:b.sibling=R,b=R);return e&&C.forEach(function($){return t(f,$)}),ye&&zn(f,L),E}function T(f,c,p,j){if(typeof p=="object"&&p!==null&&p.type===tr&&p.key===null&&(p=p.props.children),typeof p=="object"&&p!==null){switch(p.$$typeof){case Di:e:{for(var E=p.key,b=c;b!==null;){if(b.key===E){if(E=p.type,E===tr){if(b.tag===7){n(f,b.sibling),c=i(b,p.props.children),c.return=f,f=c;break e}}else if(b.elementType===E||typeof E=="object"&&E!==null&&E.$$typeof===cn&&oc(E)===b.type){n(f,b.sibling),c=i(b,p.props),c.ref=Dr(f,b,p),c.return=f,f=c;break e}n(f,b);break}else t(f,b);b=b.sibling}p.type===tr?(c=Fn(p.props.children,f.mode,j,p.key),c.return=f,f=c):(j=ko(p.type,p.key,p.props,null,f.mode,j),j.ref=Dr(f,c,p),j.return=f,f=j)}return l(f);case er:e:{for(b=p.key;c!==null;){if(c.key===b)if(c.tag===4&&c.stateNode.containerInfo===p.containerInfo&&c.stateNode.implementation===p.implementation){n(f,c.sibling),c=i(c,p.children||[]),c.return=f,f=c;break e}else{n(f,c);break}else t(f,c);c=c.sibling}c=Jl(p,f.mode,j),c.return=f,f=c}return l(f);case cn:return b=p._init,T(f,c,b(p._payload),j)}if(Kr(p))return x(f,c,p,j);if(zr(p))return k(f,c,p,j);Ki(f,p)}return typeof p=="string"&&p!==""||typeof p=="number"?(p=""+p,c!==null&&c.tag===6?(n(f,c.sibling),c=i(c,p),c.return=f,f=c):(n(f,c),c=Zl(p,f.mode,j),c.return=f,f=c),l(f)):n(f,c)}return T}var Sr=Ef(!0),Cf=Ef(!1),Oi={},It=Pn(Oi),yi=Pn(Oi),xi=Pn(Oi);function An(e){if(e===Oi)throw Error(M(174));return e}function Fa(e,t){switch(fe(xi,t),fe(yi,e),fe(It,Oi),e=t.nodeType,e){case 9:case 11:t=(t=t.documentElement)?t.namespaceURI:Cs(null,"");break;default:e=e===8?t.parentNode:t,t=e.namespaceURI||null,e=e.tagName,t=Cs(t,e)}me(It),fe(It,t)}function _r(){me(It),me(yi),me(xi)}function bf(e){An(xi.current);var t=An(It.current),n=Cs(t,e.type);t!==n&&(fe(yi,e),fe(It,n))}function Va(e){yi.current===e&&(me(It),me(yi))}var xe=Pn(0);function Bo(e){for(var t=e;t!==null;){if(t.tag===13){var n=t.memoizedState;if(n!==null&&(n=n.dehydrated,n===null||n.data==="$?"||n.data==="$!"))return t}else if(t.tag===19&&t.memoizedProps.revealOrder!==void 0){if(t.flags&128)return t}else if(t.child!==null){t.child.return=t,t=t.child;continue}if(t===e)break;for(;t.sibling===null;){if(t.return===null||t.return===e)return null;t=t.return}t.sibling.return=t.return,t=t.sibling}return null}var Hl=[];function Ua(){for(var e=0;e<Hl.length;e++)Hl[e]._workInProgressVersionPrimary=null;Hl.length=0}var go=Jt.ReactCurrentDispatcher,Ql=Jt.ReactCurrentBatchConfig,Wn=0,ve=null,Te=null,ze=null,Ho=!1,ni=!1,vi=0,og=0;function Ve(){throw Error(M(321))}function Wa(e,t){if(t===null)return!1;for(var n=0;n<t.length&&n<e.length;n++)if(!Tt(e[n],t[n]))return!1;return!0}function Ba(e,t,n,r,i,o){if(Wn=o,ve=t,t.memoizedState=null,t.updateQueue=null,t.lanes=0,go.current=e===null||e.memoizedState===null?ug:cg,e=n(r,i),ni){o=0;do{if(ni=!1,vi=0,25<=o)throw Error(M(301));o+=1,ze=Te=null,t.updateQueue=null,go.current=dg,e=n(r,i)}while(ni)}if(go.current=Qo,t=Te!==null&&Te.next!==null,Wn=0,ze=Te=ve=null,Ho=!1,t)throw Error(M(300));return e}function Ha(){var e=vi!==0;return vi=0,e}function zt(){var e={memoizedState:null,baseState:null,baseQueue:null,queue:null,next:null};return ze===null?ve.memoizedState=ze=e:ze=ze.next=e,ze}function yt(){if(Te===null){var e=ve.alternate;e=e!==null?e.memoizedState:null}else e=Te.next;var t=ze===null?ve.memoizedState:ze.next;if(t!==null)ze=t,Te=e;else{if(e===null)throw Error(M(310));Te=e,e={memoizedState:Te.memoizedState,baseState:Te.baseState,baseQueue:Te.baseQueue,queue:Te.queue,next:null},ze===null?ve.memoizedState=ze=e:ze=ze.next=e}return ze}function wi(e,t){return typeof t=="function"?t(e):t}function Yl(e){var t=yt(),n=t.queue;if(n===null)throw Error(M(311));n.lastRenderedReducer=e;var r=Te,i=r.baseQueue,o=n.pending;if(o!==null){if(i!==null){var l=i.next;i.next=o.next,o.next=l}r.baseQueue=i=o,n.pending=null}if(i!==null){o=i.next,r=r.baseState;var u=l=null,a=null,d=o;do{var y=d.lane;if((Wn&y)===y)a!==null&&(a=a.next={lane:0,action:d.action,hasEagerState:d.hasEagerState,eagerState:d.eagerState,next:null}),r=d.hasEagerState?d.eagerState:e(r,d.action);else{var g={lane:y,action:d.action,hasEagerState:d.hasEagerState,eagerState:d.eagerState,next:null};a===null?(u=a=g,l=r):a=a.next=g,ve.lanes|=y,Bn|=y}d=d.next}while(d!==null&&d!==o);a===null?l=r:a.next=u,Tt(r,t.memoizedState)||(Je=!0),t.memoizedState=r,t.baseState=l,t.baseQueue=a,n.lastRenderedState=r}if(e=n.interleaved,e!==null){i=e;do o=i.lane,ve.lanes|=o,Bn|=o,i=i.next;while(i!==e)}else i===null&&(n.lanes=0);return[t.memoizedState,n.dispatch]}function Kl(e){var t=yt(),n=t.queue;if(n===null)throw Error(M(311));n.lastRenderedReducer=e;var r=n.dispatch,i=n.pending,o=t.memoizedState;if(i!==null){n.pending=null;var l=i=i.next;do o=e(o,l.action),l=l.next;while(l!==i);Tt(o,t.memoizedState)||(Je=!0),t.memoizedState=o,t.baseQueue===null&&(t.baseState=o),n.lastRenderedState=o}return[o,r]}function Tf(){}function Pf(e,t){var n=ve,r=yt(),i=t(),o=!Tt(r.memoizedState,i);if(o&&(r.memoizedState=i,Je=!0),r=r.queue,Qa(zf.bind(null,n,r,e),[e]),r.getSnapshot!==t||o||ze!==null&&ze.memoizedState.tag&1){if(n.flags|=2048,ki(9,Of.bind(null,n,r,i,t),void 0,null),Le===null)throw Error(M(349));Wn&30||Mf(n,t,i)}return i}function Mf(e,t,n){e.flags|=16384,e={getSnapshot:t,value:n},t=ve.updateQueue,t===null?(t={lastEffect:null,stores:null},ve.updateQueue=t,t.stores=[e]):(n=t.stores,n===null?t.stores=[e]:n.push(e))}function Of(e,t,n,r){t.value=n,t.getSnapshot=r,Lf(t)&&Rf(e)}function zf(e,t,n){return n(function(){Lf(t)&&Rf(e)})}function Lf(e){var t=e.getSnapshot;e=e.value;try{var n=t();return!Tt(e,n)}catch{return!0}}function Rf(e){var t=Gt(e,1);t!==null&&bt(t,e,1,-1)}function lc(e){var t=zt();return typeof e=="function"&&(e=e()),t.memoizedState=t.baseState=e,e={pending:null,interleaved:null,lanes:0,dispatch:null,lastRenderedReducer:wi,lastRenderedState:e},t.queue=e,e=e.dispatch=ag.bind(null,ve,e),[t.memoizedState,e]}function ki(e,t,n,r){return e={tag:e,create:t,destroy:n,deps:r,next:null},t=ve.updateQueue,t===null?(t={lastEffect:null,stores:null},ve.updateQueue=t,t.lastEffect=e.next=e):(n=t.lastEffect,n===null?t.lastEffect=e.next=e:(r=n.next,n.next=e,e.next=r,t.lastEffect=e)),e}function Nf(){return yt().memoizedState}function yo(e,t,n,r){var i=zt();ve.flags|=e,i.memoizedState=ki(1|t,n,void 0,r===void 0?null:r)}function pl(e,t,n,r){var i=yt();r=r===void 0?null:r;var o=void 0;if(Te!==null){var l=Te.memoizedState;if(o=l.destroy,r!==null&&Wa(r,l.deps)){i.memoizedState=ki(t,n,o,r);return}}ve.flags|=e,i.memoizedState=ki(1|t,n,o,r)}function sc(e,t){return yo(8390656,8,e,t)}function Qa(e,t){return pl(2048,8,e,t)}function Af(e,t){return pl(4,2,e,t)}function Df(e,t){return pl(4,4,e,t)}function If(e,t){if(typeof t=="function")return e=e(),t(e),function(){t(null)};if(t!=null)return e=e(),t.current=e,function(){t.current=null}}function $f(e,t,n){return n=n!=null?n.concat([e]):null,pl(4,4,If.bind(null,t,e),n)}function Ya(){}function Ff(e,t){var n=yt();t=t===void 0?null:t;var r=n.memoizedState;return r!==null&&t!==null&&Wa(t,r[1])?r[0]:(n.memoizedState=[e,t],e)}function Vf(e,t){var n=yt();t=t===void 0?null:t;var r=n.memoizedState;return r!==null&&t!==null&&Wa(t,r[1])?r[0]:(e=e(),n.memoizedState=[e,t],e)}function Uf(e,t,n){return Wn&21?(Tt(n,t)||(n=Bd(),ve.lanes|=n,Bn|=n,e.baseState=!0),t):(e.baseState&&(e.baseState=!1,Je=!0),e.memoizedState=n)}function lg(e,t){var n=ue;ue=n!==0&&4>n?n:4,e(!0);var r=Ql.transition;Ql.transition={};try{e(!1),t()}finally{ue=n,Ql.transition=r}}function Wf(){return yt().memoizedState}function sg(e,t,n){var r=_n(e);if(n={lane:r,action:n,hasEagerState:!1,eagerState:null,next:null},Bf(e))Hf(t,n);else if(n=kf(e,t,n,r),n!==null){var i=Ke();bt(n,e,r,i),Qf(n,t,r)}}function ag(e,t,n){var r=_n(e),i={lane:r,action:n,hasEagerState:!1,eagerState:null,next:null};if(Bf(e))Hf(t,i);else{var o=e.alternate;if(e.lanes===0&&(o===null||o.lanes===0)&&(o=t.lastRenderedReducer,o!==null))try{var l=t.lastRenderedState,u=o(l,n);if(i.hasEagerState=!0,i.eagerState=u,Tt(u,l)){var a=t.interleaved;a===null?(i.next=i,Ia(t)):(i.next=a.next,a.next=i),t.interleaved=i;return}}catch{}finally{}n=kf(e,t,i,r),n!==null&&(i=Ke(),bt(n,e,r,i),Qf(n,t,r))}}function Bf(e){var t=e.alternate;return e===ve||t!==null&&t===ve}function Hf(e,t){ni=Ho=!0;var n=e.pending;n===null?t.next=t:(t.next=n.next,n.next=t),e.pending=t}function Qf(e,t,n){if(n&4194240){var r=t.lanes;r&=e.pendingLanes,n|=r,t.lanes=n,_a(e,n)}}var Qo={readContext:gt,useCallback:Ve,useContext:Ve,useEffect:Ve,useImperativeHandle:Ve,useInsertionEffect:Ve,useLayoutEffect:Ve,useMemo:Ve,useReducer:Ve,useRef:Ve,useState:Ve,useDebugValue:Ve,useDeferredValue:Ve,useTransition:Ve,useMutableSource:Ve,useSyncExternalStore:Ve,useId:Ve,unstable_isNewReconciler:!1},ug={readContext:gt,useCallback:function(e,t){return zt().memoizedState=[e,t===void 0?null:t],e},useContext:gt,useEffect:sc,useImperativeHandle:function(e,t,n){return n=n!=null?n.concat([e]):null,yo(4194308,4,If.bind(null,t,e),n)},useLayoutEffect:function(e,t){return yo(4194308,4,e,t)},useInsertionEffect:function(e,t){return yo(4,2,e,t)},useMemo:function(e,t){var n=zt();return t=t===void 0?null:t,e=e(),n.memoizedState=[e,t],e},useReducer:function(e,t,n){var r=zt();return t=n!==void 0?n(t):t,r.memoizedState=r.baseState=t,e={pending:null,interleaved:null,lanes:0,dispatch:null,lastRenderedReducer:e,lastRenderedState:t},r.queue=e,e=e.dispatch=sg.bind(null,ve,e),[r.memoizedState,e]},useRef:function(e){var t=zt();return e={current:e},t.memoizedState=e},useState:lc,useDebugValue:Ya,useDeferredValue:function(e){return zt().memoizedState=e},useTransition:function(){var e=lc(!1),t=e[0];return e=lg.bind(null,e[1]),zt().memoizedState=e,[t,e]},useMutableSource:function(){},useSyncExternalStore:function(e,t,n){var r=ve,i=zt();if(ye){if(n===void 0)throw Error(M(407));n=n()}else{if(n=t(),Le===null)throw Error(M(349));Wn&30||Mf(r,t,n)}i.memoizedState=n;var o={value:n,getSnapshot:t};return i.queue=o,sc(zf.bind(null,r,o,e),[e]),r.flags|=2048,ki(9,Of.bind(null,r,o,n,t),void 0,null),n},useId:function(){var e=zt(),t=Le.identifierPrefix;if(ye){var n=Qt,r=Ht;n=(r&~(1<<32-Ct(r)-1)).toString(32)+n,t=":"+t+"R"+n,n=vi++,0<n&&(t+="H"+n.toString(32)),t+=":"}else n=og++,t=":"+t+"r"+n.toString(32)+":";return e.memoizedState=t},unstable_isNewReconciler:!1},cg={readContext:gt,useCallback:Ff,useContext:gt,useEffect:Qa,useImperativeHandle:$f,useInsertionEffect:Af,useLayoutEffect:Df,useMemo:Vf,useReducer:Yl,useRef:Nf,useState:function(){return Yl(wi)},useDebugValue:Ya,useDeferredValue:function(e){var t=yt();return Uf(t,Te.memoizedState,e)},useTransition:function(){var e=Yl(wi)[0],t=yt().memoizedState;return[e,t]},useMutableSource:Tf,useSyncExternalStore:Pf,useId:Wf,unstable_isNewReconciler:!1},dg={readContext:gt,useCallback:Ff,useContext:gt,useEffect:Qa,useImperativeHandle:$f,useInsertionEffect:Af,useLayoutEffect:Df,useMemo:Vf,useReducer:Kl,useRef:Nf,useState:function(){return Kl(wi)},useDebugValue:Ya,useDeferredValue:function(e){var t=yt();return Te===null?t.memoizedState=e:Uf(t,Te.memoizedState,e)},useTransition:function(){var e=Kl(wi)[0],t=yt().memoizedState;return[e,t]},useMutableSource:Tf,useSyncExternalStore:Pf,useId:Wf,unstable_isNewReconciler:!1};function Er(e,t){try{var n="",r=t;do n+=$h(r),r=r.return;while(r);var i=n}catch(o){i=`
Error generating stack: `+o.message+`
`+o.stack}return{value:e,source:t,stack:i,digest:null}}function Xl(e,t,n){return{value:e,source:null,stack:n??null,digest:t??null}}function Xs(e,t){try{console.error(t.value)}catch(n){setTimeout(function(){throw n})}}var fg=typeof WeakMap=="function"?WeakMap:Map;function Yf(e,t,n){n=Yt(-1,n),n.tag=3,n.payload={element:null};var r=t.value;return n.callback=function(){Ko||(Ko=!0,oa=r),Xs(e,t)},n}function Kf(e,t,n){n=Yt(-1,n),n.tag=3;var r=e.type.getDerivedStateFromError;if(typeof r=="function"){var i=t.value;n.payload=function(){return r(i)},n.callback=function(){Xs(e,t)}}var o=e.stateNode;return o!==null&&typeof o.componentDidCatch=="function"&&(n.callback=function(){Xs(e,t),typeof r!="function"&&(Sn===null?Sn=new Set([this]):Sn.add(this));var l=t.stack;this.componentDidCatch(t.value,{componentStack:l!==null?l:""})}),n}function ac(e,t,n){var r=e.pingCache;if(r===null){r=e.pingCache=new fg;var i=new Set;r.set(t,i)}else i=r.get(t),i===void 0&&(i=new Set,r.set(t,i));i.has(n)||(i.add(n),e=Cg.bind(null,e,t,n),t.then(e,e))}function uc(e){do{var t;if((t=e.tag===13)&&(t=e.memoizedState,t=t!==null?t.dehydrated!==null:!0),t)return e;e=e.return}while(e!==null);return null}function cc(e,t,n,r,i){return e.mode&1?(e.flags|=65536,e.lanes=i,e):(e===t?e.flags|=65536:(e.flags|=128,n.flags|=131072,n.flags&=-52805,n.tag===1&&(n.alternate===null?n.tag=17:(t=Yt(-1,1),t.tag=2,jn(n,t,1))),n.lanes|=1),e)}var pg=Jt.ReactCurrentOwner,Je=!1;function Qe(e,t,n,r){t.child=e===null?Cf(t,null,n,r):Sr(t,e.child,n,r)}function dc(e,t,n,r,i){n=n.render;var o=t.ref;return yr(t,i),r=Ba(e,t,n,r,o,i),n=Ha(),e!==null&&!Je?(t.updateQueue=e.updateQueue,t.flags&=-2053,e.lanes&=~i,Zt(e,t,i)):(ye&&n&&za(t),t.flags|=1,Qe(e,t,r,i),t.child)}function fc(e,t,n,r,i){if(e===null){var o=n.type;return typeof o=="function"&&!tu(o)&&o.defaultProps===void 0&&n.compare===null&&n.defaultProps===void 0?(t.tag=15,t.type=o,Xf(e,t,o,r,i)):(e=ko(n.type,null,r,t,t.mode,i),e.ref=t.ref,e.return=t,t.child=e)}if(o=e.child,!(e.lanes&i)){var l=o.memoizedProps;if(n=n.compare,n=n!==null?n:pi,n(l,r)&&e.ref===t.ref)return Zt(e,t,i)}return t.flags|=1,e=En(o,r),e.ref=t.ref,e.return=t,t.child=e}function Xf(e,t,n,r,i){if(e!==null){var o=e.memoizedProps;if(pi(o,r)&&e.ref===t.ref)if(Je=!1,t.pendingProps=r=o,(e.lanes&i)!==0)e.flags&131072&&(Je=!0);else return t.lanes=e.lanes,Zt(e,t,i)}return Gs(e,t,n,r,i)}function Gf(e,t,n){var r=t.pendingProps,i=r.children,o=e!==null?e.memoizedState:null;if(r.mode==="hidden")if(!(t.mode&1))t.memoizedState={baseLanes:0,cachePool:null,transitions:null},fe(dr,rt),rt|=n;else{if(!(n&1073741824))return e=o!==null?o.baseLanes|n:n,t.lanes=t.childLanes=1073741824,t.memoizedState={baseLanes:e,cachePool:null,transitions:null},t.updateQueue=null,fe(dr,rt),rt|=e,null;t.memoizedState={baseLanes:0,cachePool:null,transitions:null},r=o!==null?o.baseLanes:n,fe(dr,rt),rt|=r}else o!==null?(r=o.baseLanes|n,t.memoizedState=null):r=n,fe(dr,rt),rt|=r;return Qe(e,t,i,n),t.child}function Zf(e,t){var n=t.ref;(e===null&&n!==null||e!==null&&e.ref!==n)&&(t.flags|=512,t.flags|=2097152)}function Gs(e,t,n,r,i){var o=et(n)?Vn:He.current;return o=kr(t,o),yr(t,i),n=Ba(e,t,n,r,o,i),r=Ha(),e!==null&&!Je?(t.updateQueue=e.updateQueue,t.flags&=-2053,e.lanes&=~i,Zt(e,t,i)):(ye&&r&&za(t),t.flags|=1,Qe(e,t,n,i),t.child)}function pc(e,t,n,r,i){if(et(n)){var o=!0;Io(t)}else o=!1;if(yr(t,i),t.stateNode===null)xo(e,t),_f(t,n,r),Ks(t,n,r,i),r=!0;else if(e===null){var l=t.stateNode,u=t.memoizedProps;l.props=u;var a=l.context,d=n.contextType;typeof d=="object"&&d!==null?d=gt(d):(d=et(n)?Vn:He.current,d=kr(t,d));var y=n.getDerivedStateFromProps,g=typeof y=="function"||typeof l.getSnapshotBeforeUpdate=="function";g||typeof l.UNSAFE_componentWillReceiveProps!="function"&&typeof l.componentWillReceiveProps!="function"||(u!==r||a!==d)&&ic(t,l,r,d),dn=!1;var h=t.memoizedState;l.state=h,Wo(t,r,l,i),a=t.memoizedState,u!==r||h!==a||qe.current||dn?(typeof y=="function"&&(Ys(t,n,y,r),a=t.memoizedState),(u=dn||rc(t,n,u,r,h,a,d))?(g||typeof l.UNSAFE_componentWillMount!="function"&&typeof l.componentWillMount!="function"||(typeof l.componentWillMount=="function"&&l.componentWillMount(),typeof l.UNSAFE_componentWillMount=="function"&&l.UNSAFE_componentWillMount()),typeof l.componentDidMount=="function"&&(t.flags|=4194308)):(typeof l.componentDidMount=="function"&&(t.flags|=4194308),t.memoizedProps=r,t.memoizedState=a),l.props=r,l.state=a,l.context=d,r=u):(typeof l.componentDidMount=="function"&&(t.flags|=4194308),r=!1)}else{l=t.stateNode,jf(e,t),u=t.memoizedProps,d=t.type===t.elementType?u:kt(t.type,u),l.props=d,g=t.pendingProps,h=l.context,a=n.contextType,typeof a=="object"&&a!==null?a=gt(a):(a=et(n)?Vn:He.current,a=kr(t,a));var w=n.getDerivedStateFromProps;(y=typeof w=="function"||typeof l.getSnapshotBeforeUpdate=="function")||typeof l.UNSAFE_componentWillReceiveProps!="function"&&typeof l.componentWillReceiveProps!="function"||(u!==g||h!==a)&&ic(t,l,r,a),dn=!1,h=t.memoizedState,l.state=h,Wo(t,r,l,i);var x=t.memoizedState;u!==g||h!==x||qe.current||dn?(typeof w=="function"&&(Ys(t,n,w,r),x=t.memoizedState),(d=dn||rc(t,n,d,r,h,x,a)||!1)?(y||typeof l.UNSAFE_componentWillUpdate!="function"&&typeof l.componentWillUpdate!="function"||(typeof l.componentWillUpdate=="function"&&l.componentWillUpdate(r,x,a),typeof l.UNSAFE_componentWillUpdate=="function"&&l.UNSAFE_componentWillUpdate(r,x,a)),typeof l.componentDidUpdate=="function"&&(t.flags|=4),typeof l.getSnapshotBeforeUpdate=="function"&&(t.flags|=1024)):(typeof l.componentDidUpdate!="function"||u===e.memoizedProps&&h===e.memoizedState||(t.flags|=4),typeof l.getSnapshotBeforeUpdate!="function"||u===e.memoizedProps&&h===e.memoizedState||(t.flags|=1024),t.memoizedProps=r,t.memoizedState=x),l.props=r,l.state=x,l.context=a,r=d):(typeof l.componentDidUpdate!="function"||u===e.memoizedProps&&h===e.memoizedState||(t.flags|=4),typeof l.getSnapshotBeforeUpdate!="function"||u===e.memoizedProps&&h===e.memoizedState||(t.flags|=1024),r=!1)}return Zs(e,t,n,r,o,i)}function Zs(e,t,n,r,i,o){Zf(e,t);var l=(t.flags&128)!==0;if(!r&&!l)return i&&Ju(t,n,!1),Zt(e,t,o);r=t.stateNode,pg.current=t;var u=l&&typeof n.getDerivedStateFromError!="function"?null:r.render();return t.flags|=1,e!==null&&l?(t.child=Sr(t,e.child,null,o),t.child=Sr(t,null,u,o)):Qe(e,t,u,o),t.memoizedState=r.state,i&&Ju(t,n,!0),t.child}function Jf(e){var t=e.stateNode;t.pendingContext?Zu(e,t.pendingContext,t.pendingContext!==t.context):t.context&&Zu(e,t.context,!1),Fa(e,t.containerInfo)}function hc(e,t,n,r,i){return jr(),Ra(i),t.flags|=256,Qe(e,t,n,r),t.child}var Js={dehydrated:null,treeContext:null,retryLane:0};function qs(e){return{baseLanes:e,cachePool:null,transitions:null}}function qf(e,t,n){var r=t.pendingProps,i=xe.current,o=!1,l=(t.flags&128)!==0,u;if((u=l)||(u=e!==null&&e.memoizedState===null?!1:(i&2)!==0),u?(o=!0,t.flags&=-129):(e===null||e.memoizedState!==null)&&(i|=1),fe(xe,i&1),e===null)return Hs(t),e=t.memoizedState,e!==null&&(e=e.dehydrated,e!==null)?(t.mode&1?e.data==="$!"?t.lanes=8:t.lanes=1073741824:t.lanes=1,null):(l=r.children,e=r.fallback,o?(r=t.mode,o=t.child,l={mode:"hidden",children:l},!(r&1)&&o!==null?(o.childLanes=0,o.pendingProps=l):o=gl(l,r,0,null),e=Fn(e,r,n,null),o.return=t,e.return=t,o.sibling=e,t.child=o,t.child.memoizedState=qs(n),t.memoizedState=Js,e):Ka(t,l));if(i=e.memoizedState,i!==null&&(u=i.dehydrated,u!==null))return hg(e,t,l,r,u,i,n);if(o){o=r.fallback,l=t.mode,i=e.child,u=i.sibling;var a={mode:"hidden",children:r.children};return!(l&1)&&t.child!==i?(r=t.child,r.childLanes=0,r.pendingProps=a,t.deletions=null):(r=En(i,a),r.subtreeFlags=i.subtreeFlags&14680064),u!==null?o=En(u,o):(o=Fn(o,l,n,null),o.flags|=2),o.return=t,r.return=t,r.sibling=o,t.child=r,r=o,o=t.child,l=e.child.memoizedState,l=l===null?qs(n):{baseLanes:l.baseLanes|n,cachePool:null,transitions:l.transitions},o.memoizedState=l,o.childLanes=e.childLanes&~n,t.memoizedState=Js,r}return o=e.child,e=o.sibling,r=En(o,{mode:"visible",children:r.children}),!(t.mode&1)&&(r.lanes=n),r.return=t,r.sibling=null,e!==null&&(n=t.deletions,n===null?(t.deletions=[e],t.flags|=16):n.push(e)),t.child=r,t.memoizedState=null,r}function Ka(e,t){return t=gl({mode:"visible",children:t},e.mode,0,null),t.return=e,e.child=t}function Xi(e,t,n,r){return r!==null&&Ra(r),Sr(t,e.child,null,n),e=Ka(t,t.pendingProps.children),e.flags|=2,t.memoizedState=null,e}function hg(e,t,n,r,i,o,l){if(n)return t.flags&256?(t.flags&=-257,r=Xl(Error(M(422))),Xi(e,t,l,r)):t.memoizedState!==null?(t.child=e.child,t.flags|=128,null):(o=r.fallback,i=t.mode,r=gl({mode:"visible",children:r.children},i,0,null),o=Fn(o,i,l,null),o.flags|=2,r.return=t,o.return=t,r.sibling=o,t.child=r,t.mode&1&&Sr(t,e.child,null,l),t.child.memoizedState=qs(l),t.memoizedState=Js,o);if(!(t.mode&1))return Xi(e,t,l,null);if(i.data==="$!"){if(r=i.nextSibling&&i.nextSibling.dataset,r)var u=r.dgst;return r=u,o=Error(M(419)),r=Xl(o,r,void 0),Xi(e,t,l,r)}if(u=(l&e.childLanes)!==0,Je||u){if(r=Le,r!==null){switch(l&-l){case 4:i=2;break;case 16:i=8;break;case 64:case 128:case 256:case 512:case 1024:case 2048:case 4096:case 8192:case 16384:case 32768:case 65536:case 131072:case 262144:case 524288:case 1048576:case 2097152:case 4194304:case 8388608:case 16777216:case 33554432:case 67108864:i=32;break;case 536870912:i=268435456;break;default:i=0}i=i&(r.suspendedLanes|l)?0:i,i!==0&&i!==o.retryLane&&(o.retryLane=i,Gt(e,i),bt(r,e,i,-1))}return eu(),r=Xl(Error(M(421))),Xi(e,t,l,r)}return i.data==="$?"?(t.flags|=128,t.child=e.child,t=bg.bind(null,e),i._reactRetry=t,null):(e=o.treeContext,it=kn(i.nextSibling),ot=t,ye=!0,_t=null,e!==null&&(ft[pt++]=Ht,ft[pt++]=Qt,ft[pt++]=Un,Ht=e.id,Qt=e.overflow,Un=t),t=Ka(t,r.children),t.flags|=4096,t)}function mc(e,t,n){e.lanes|=t;var r=e.alternate;r!==null&&(r.lanes|=t),Qs(e.return,t,n)}function Gl(e,t,n,r,i){var o=e.memoizedState;o===null?e.memoizedState={isBackwards:t,rendering:null,renderingStartTime:0,last:r,tail:n,tailMode:i}:(o.isBackwards=t,o.rendering=null,o.renderingStartTime=0,o.last=r,o.tail=n,o.tailMode=i)}function ep(e,t,n){var r=t.pendingProps,i=r.revealOrder,o=r.tail;if(Qe(e,t,r.children,n),r=xe.current,r&2)r=r&1|2,t.flags|=128;else{if(e!==null&&e.flags&128)e:for(e=t.child;e!==null;){if(e.tag===13)e.memoizedState!==null&&mc(e,n,t);else if(e.tag===19)mc(e,n,t);else if(e.child!==null){e.child.return=e,e=e.child;continue}if(e===t)break e;for(;e.sibling===null;){if(e.return===null||e.return===t)break e;e=e.return}e.sibling.return=e.return,e=e.sibling}r&=1}if(fe(xe,r),!(t.mode&1))t.memoizedState=null;else switch(i){case"forwards":for(n=t.child,i=null;n!==null;)e=n.alternate,e!==null&&Bo(e)===null&&(i=n),n=n.sibling;n=i,n===null?(i=t.child,t.child=null):(i=n.sibling,n.sibling=null),Gl(t,!1,i,n,o);break;case"backwards":for(n=null,i=t.child,t.child=null;i!==null;){if(e=i.alternate,e!==null&&Bo(e)===null){t.child=i;break}e=i.sibling,i.sibling=n,n=i,i=e}Gl(t,!0,n,null,o);break;case"together":Gl(t,!1,null,null,void 0);break;default:t.memoizedState=null}return t.child}function xo(e,t){!(t.mode&1)&&e!==null&&(e.alternate=null,t.alternate=null,t.flags|=2)}function Zt(e,t,n){if(e!==null&&(t.dependencies=e.dependencies),Bn|=t.lanes,!(n&t.childLanes))return null;if(e!==null&&t.child!==e.child)throw Error(M(153));if(t.child!==null){for(e=t.child,n=En(e,e.pendingProps),t.child=n,n.return=t;e.sibling!==null;)e=e.sibling,n=n.sibling=En(e,e.pendingProps),n.return=t;n.sibling=null}return t.child}function mg(e,t,n){switch(t.tag){case 3:Jf(t),jr();break;case 5:bf(t);break;case 1:et(t.type)&&Io(t);break;case 4:Fa(t,t.stateNode.containerInfo);break;case 10:var r=t.type._context,i=t.memoizedProps.value;fe(Vo,r._currentValue),r._currentValue=i;break;case 13:if(r=t.memoizedState,r!==null)return r.dehydrated!==null?(fe(xe,xe.current&1),t.flags|=128,null):n&t.child.childLanes?qf(e,t,n):(fe(xe,xe.current&1),e=Zt(e,t,n),e!==null?e.sibling:null);fe(xe,xe.current&1);break;case 19:if(r=(n&t.childLanes)!==0,e.flags&128){if(r)return ep(e,t,n);t.flags|=128}if(i=t.memoizedState,i!==null&&(i.rendering=null,i.tail=null,i.lastEffect=null),fe(xe,xe.current),r)break;return null;case 22:case 23:return t.lanes=0,Gf(e,t,n)}return Zt(e,t,n)}var tp,ea,np,rp;tp=function(e,t){for(var n=t.child;n!==null;){if(n.tag===5||n.tag===6)e.appendChild(n.stateNode);else if(n.tag!==4&&n.child!==null){n.child.return=n,n=n.child;continue}if(n===t)break;for(;n.sibling===null;){if(n.return===null||n.return===t)return;n=n.return}n.sibling.return=n.return,n=n.sibling}};ea=function(){};np=function(e,t,n,r){var i=e.memoizedProps;if(i!==r){e=t.stateNode,An(It.current);var o=null;switch(n){case"input":i=js(e,i),r=js(e,r),o=[];break;case"select":i=we({},i,{value:void 0}),r=we({},r,{value:void 0}),o=[];break;case"textarea":i=Es(e,i),r=Es(e,r),o=[];break;default:typeof i.onClick!="function"&&typeof r.onClick=="function"&&(e.onclick=Ao)}bs(n,r);var l;n=null;for(d in i)if(!r.hasOwnProperty(d)&&i.hasOwnProperty(d)&&i[d]!=null)if(d==="style"){var u=i[d];for(l in u)u.hasOwnProperty(l)&&(n||(n={}),n[l]="")}else d!=="dangerouslySetInnerHTML"&&d!=="children"&&d!=="suppressContentEditableWarning"&&d!=="suppressHydrationWarning"&&d!=="autoFocus"&&(li.hasOwnProperty(d)?o||(o=[]):(o=o||[]).push(d,null));for(d in r){var a=r[d];if(u=i!=null?i[d]:void 0,r.hasOwnProperty(d)&&a!==u&&(a!=null||u!=null))if(d==="style")if(u){for(l in u)!u.hasOwnProperty(l)||a&&a.hasOwnProperty(l)||(n||(n={}),n[l]="");for(l in a)a.hasOwnProperty(l)&&u[l]!==a[l]&&(n||(n={}),n[l]=a[l])}else n||(o||(o=[]),o.push(d,n)),n=a;else d==="dangerouslySetInnerHTML"?(a=a?a.__html:void 0,u=u?u.__html:void 0,a!=null&&u!==a&&(o=o||[]).push(d,a)):d==="children"?typeof a!="string"&&typeof a!="number"||(o=o||[]).push(d,""+a):d!=="suppressContentEditableWarning"&&d!=="suppressHydrationWarning"&&(li.hasOwnProperty(d)?(a!=null&&d==="onScroll"&&he("scroll",e),o||u===a||(o=[])):(o=o||[]).push(d,a))}n&&(o=o||[]).push("style",n);var d=o;(t.updateQueue=d)&&(t.flags|=4)}};rp=function(e,t,n,r){n!==r&&(t.flags|=4)};function Ir(e,t){if(!ye)switch(e.tailMode){case"hidden":t=e.tail;for(var n=null;t!==null;)t.alternate!==null&&(n=t),t=t.sibling;n===null?e.tail=null:n.sibling=null;break;case"collapsed":n=e.tail;for(var r=null;n!==null;)n.alternate!==null&&(r=n),n=n.sibling;r===null?t||e.tail===null?e.tail=null:e.tail.sibling=null:r.sibling=null}}function Ue(e){var t=e.alternate!==null&&e.alternate.child===e.child,n=0,r=0;if(t)for(var i=e.child;i!==null;)n|=i.lanes|i.childLanes,r|=i.subtreeFlags&14680064,r|=i.flags&14680064,i.return=e,i=i.sibling;else for(i=e.child;i!==null;)n|=i.lanes|i.childLanes,r|=i.subtreeFlags,r|=i.flags,i.return=e,i=i.sibling;return e.subtreeFlags|=r,e.childLanes=n,t}function gg(e,t,n){var r=t.pendingProps;switch(La(t),t.tag){case 2:case 16:case 15:case 0:case 11:case 7:case 8:case 12:case 9:case 14:return Ue(t),null;case 1:return et(t.type)&&Do(),Ue(t),null;case 3:return r=t.stateNode,_r(),me(qe),me(He),Ua(),r.pendingContext&&(r.context=r.pendingContext,r.pendingContext=null),(e===null||e.child===null)&&(Yi(t)?t.flags|=4:e===null||e.memoizedState.isDehydrated&&!(t.flags&256)||(t.flags|=1024,_t!==null&&(aa(_t),_t=null))),ea(e,t),Ue(t),null;case 5:Va(t);var i=An(xi.current);if(n=t.type,e!==null&&t.stateNode!=null)np(e,t,n,r,i),e.ref!==t.ref&&(t.flags|=512,t.flags|=2097152);else{if(!r){if(t.stateNode===null)throw Error(M(166));return Ue(t),null}if(e=An(It.current),Yi(t)){r=t.stateNode,n=t.type;var o=t.memoizedProps;switch(r[Nt]=t,r[gi]=o,e=(t.mode&1)!==0,n){case"dialog":he("cancel",r),he("close",r);break;case"iframe":case"object":case"embed":he("load",r);break;case"video":case"audio":for(i=0;i<Gr.length;i++)he(Gr[i],r);break;case"source":he("error",r);break;case"img":case"image":case"link":he("error",r),he("load",r);break;case"details":he("toggle",r);break;case"input":_u(r,o),he("invalid",r);break;case"select":r._wrapperState={wasMultiple:!!o.multiple},he("invalid",r);break;case"textarea":Cu(r,o),he("invalid",r)}bs(n,o),i=null;for(var l in o)if(o.hasOwnProperty(l)){var u=o[l];l==="children"?typeof u=="string"?r.textContent!==u&&(o.suppressHydrationWarning!==!0&&Qi(r.textContent,u,e),i=["children",u]):typeof u=="number"&&r.textContent!==""+u&&(o.suppressHydrationWarning!==!0&&Qi(r.textContent,u,e),i=["children",""+u]):li.hasOwnProperty(l)&&u!=null&&l==="onScroll"&&he("scroll",r)}switch(n){case"input":Ii(r),Eu(r,o,!0);break;case"textarea":Ii(r),bu(r);break;case"select":case"option":break;default:typeof o.onClick=="function"&&(r.onclick=Ao)}r=i,t.updateQueue=r,r!==null&&(t.flags|=4)}else{l=i.nodeType===9?i:i.ownerDocument,e==="http://www.w3.org/1999/xhtml"&&(e=Pd(n)),e==="http://www.w3.org/1999/xhtml"?n==="script"?(e=l.createElement("div"),e.innerHTML="<script><\/script>",e=e.removeChild(e.firstChild)):typeof r.is=="string"?e=l.createElement(n,{is:r.is}):(e=l.createElement(n),n==="select"&&(l=e,r.multiple?l.multiple=!0:r.size&&(l.size=r.size))):e=l.createElementNS(e,n),e[Nt]=t,e[gi]=r,tp(e,t,!1,!1),t.stateNode=e;e:{switch(l=Ts(n,r),n){case"dialog":he("cancel",e),he("close",e),i=r;break;case"iframe":case"object":case"embed":he("load",e),i=r;break;case"video":case"audio":for(i=0;i<Gr.length;i++)he(Gr[i],e);i=r;break;case"source":he("error",e),i=r;break;case"img":case"image":case"link":he("error",e),he("load",e),i=r;break;case"details":he("toggle",e),i=r;break;case"input":_u(e,r),i=js(e,r),he("invalid",e);break;case"option":i=r;break;case"select":e._wrapperState={wasMultiple:!!r.multiple},i=we({},r,{value:void 0}),he("invalid",e);break;case"textarea":Cu(e,r),i=Es(e,r),he("invalid",e);break;default:i=r}bs(n,i),u=i;for(o in u)if(u.hasOwnProperty(o)){var a=u[o];o==="style"?zd(e,a):o==="dangerouslySetInnerHTML"?(a=a?a.__html:void 0,a!=null&&Md(e,a)):o==="children"?typeof a=="string"?(n!=="textarea"||a!=="")&&si(e,a):typeof a=="number"&&si(e,""+a):o!=="suppressContentEditableWarning"&&o!=="suppressHydrationWarning"&&o!=="autoFocus"&&(li.hasOwnProperty(o)?a!=null&&o==="onScroll"&&he("scroll",e):a!=null&&xa(e,o,a,l))}switch(n){case"input":Ii(e),Eu(e,r,!1);break;case"textarea":Ii(e),bu(e);break;case"option":r.value!=null&&e.setAttribute("value",""+Cn(r.value));break;case"select":e.multiple=!!r.multiple,o=r.value,o!=null?pr(e,!!r.multiple,o,!1):r.defaultValue!=null&&pr(e,!!r.multiple,r.defaultValue,!0);break;default:typeof i.onClick=="function"&&(e.onclick=Ao)}switch(n){case"button":case"input":case"select":case"textarea":r=!!r.autoFocus;break e;case"img":r=!0;break e;default:r=!1}}r&&(t.flags|=4)}t.ref!==null&&(t.flags|=512,t.flags|=2097152)}return Ue(t),null;case 6:if(e&&t.stateNode!=null)rp(e,t,e.memoizedProps,r);else{if(typeof r!="string"&&t.stateNode===null)throw Error(M(166));if(n=An(xi.current),An(It.current),Yi(t)){if(r=t.stateNode,n=t.memoizedProps,r[Nt]=t,(o=r.nodeValue!==n)&&(e=ot,e!==null))switch(e.tag){case 3:Qi(r.nodeValue,n,(e.mode&1)!==0);break;case 5:e.memoizedProps.suppressHydrationWarning!==!0&&Qi(r.nodeValue,n,(e.mode&1)!==0)}o&&(t.flags|=4)}else r=(n.nodeType===9?n:n.ownerDocument).createTextNode(r),r[Nt]=t,t.stateNode=r}return Ue(t),null;case 13:if(me(xe),r=t.memoizedState,e===null||e.memoizedState!==null&&e.memoizedState.dehydrated!==null){if(ye&&it!==null&&t.mode&1&&!(t.flags&128))wf(),jr(),t.flags|=98560,o=!1;else if(o=Yi(t),r!==null&&r.dehydrated!==null){if(e===null){if(!o)throw Error(M(318));if(o=t.memoizedState,o=o!==null?o.dehydrated:null,!o)throw Error(M(317));o[Nt]=t}else jr(),!(t.flags&128)&&(t.memoizedState=null),t.flags|=4;Ue(t),o=!1}else _t!==null&&(aa(_t),_t=null),o=!0;if(!o)return t.flags&65536?t:null}return t.flags&128?(t.lanes=n,t):(r=r!==null,r!==(e!==null&&e.memoizedState!==null)&&r&&(t.child.flags|=8192,t.mode&1&&(e===null||xe.current&1?Pe===0&&(Pe=3):eu())),t.updateQueue!==null&&(t.flags|=4),Ue(t),null);case 4:return _r(),ea(e,t),e===null&&hi(t.stateNode.containerInfo),Ue(t),null;case 10:return Da(t.type._context),Ue(t),null;case 17:return et(t.type)&&Do(),Ue(t),null;case 19:if(me(xe),o=t.memoizedState,o===null)return Ue(t),null;if(r=(t.flags&128)!==0,l=o.rendering,l===null)if(r)Ir(o,!1);else{if(Pe!==0||e!==null&&e.flags&128)for(e=t.child;e!==null;){if(l=Bo(e),l!==null){for(t.flags|=128,Ir(o,!1),r=l.updateQueue,r!==null&&(t.updateQueue=r,t.flags|=4),t.subtreeFlags=0,r=n,n=t.child;n!==null;)o=n,e=r,o.flags&=14680066,l=o.alternate,l===null?(o.childLanes=0,o.lanes=e,o.child=null,o.subtreeFlags=0,o.memoizedProps=null,o.memoizedState=null,o.updateQueue=null,o.dependencies=null,o.stateNode=null):(o.childLanes=l.childLanes,o.lanes=l.lanes,o.child=l.child,o.subtreeFlags=0,o.deletions=null,o.memoizedProps=l.memoizedProps,o.memoizedState=l.memoizedState,o.updateQueue=l.updateQueue,o.type=l.type,e=l.dependencies,o.dependencies=e===null?null:{lanes:e.lanes,firstContext:e.firstContext}),n=n.sibling;return fe(xe,xe.current&1|2),t.child}e=e.sibling}o.tail!==null&&Se()>Cr&&(t.flags|=128,r=!0,Ir(o,!1),t.lanes=4194304)}else{if(!r)if(e=Bo(l),e!==null){if(t.flags|=128,r=!0,n=e.updateQueue,n!==null&&(t.updateQueue=n,t.flags|=4),Ir(o,!0),o.tail===null&&o.tailMode==="hidden"&&!l.alternate&&!ye)return Ue(t),null}else 2*Se()-o.renderingStartTime>Cr&&n!==1073741824&&(t.flags|=128,r=!0,Ir(o,!1),t.lanes=4194304);o.isBackwards?(l.sibling=t.child,t.child=l):(n=o.last,n!==null?n.sibling=l:t.child=l,o.last=l)}return o.tail!==null?(t=o.tail,o.rendering=t,o.tail=t.sibling,o.renderingStartTime=Se(),t.sibling=null,n=xe.current,fe(xe,r?n&1|2:n&1),t):(Ue(t),null);case 22:case 23:return qa(),r=t.memoizedState!==null,e!==null&&e.memoizedState!==null!==r&&(t.flags|=8192),r&&t.mode&1?rt&1073741824&&(Ue(t),t.subtreeFlags&6&&(t.flags|=8192)):Ue(t),null;case 24:return null;case 25:return null}throw Error(M(156,t.tag))}function yg(e,t){switch(La(t),t.tag){case 1:return et(t.type)&&Do(),e=t.flags,e&65536?(t.flags=e&-65537|128,t):null;case 3:return _r(),me(qe),me(He),Ua(),e=t.flags,e&65536&&!(e&128)?(t.flags=e&-65537|128,t):null;case 5:return Va(t),null;case 13:if(me(xe),e=t.memoizedState,e!==null&&e.dehydrated!==null){if(t.alternate===null)throw Error(M(340));jr()}return e=t.flags,e&65536?(t.flags=e&-65537|128,t):null;case 19:return me(xe),null;case 4:return _r(),null;case 10:return Da(t.type._context),null;case 22:case 23:return qa(),null;case 24:return null;default:return null}}var Gi=!1,Be=!1,xg=typeof WeakSet=="function"?WeakSet:Set,F=null;function cr(e,t){var n=e.ref;if(n!==null)if(typeof n=="function")try{n(null)}catch(r){ke(e,t,r)}else n.current=null}function ta(e,t,n){try{n()}catch(r){ke(e,t,r)}}var gc=!1;function vg(e,t){if(Is=Lo,e=sf(),Oa(e)){if("selectionStart"in e)var n={start:e.selectionStart,end:e.selectionEnd};else e:{n=(n=e.ownerDocument)&&n.defaultView||window;var r=n.getSelection&&n.getSelection();if(r&&r.rangeCount!==0){n=r.anchorNode;var i=r.anchorOffset,o=r.focusNode;r=r.focusOffset;try{n.nodeType,o.nodeType}catch{n=null;break e}var l=0,u=-1,a=-1,d=0,y=0,g=e,h=null;t:for(;;){for(var w;g!==n||i!==0&&g.nodeType!==3||(u=l+i),g!==o||r!==0&&g.nodeType!==3||(a=l+r),g.nodeType===3&&(l+=g.nodeValue.length),(w=g.firstChild)!==null;)h=g,g=w;for(;;){if(g===e)break t;if(h===n&&++d===i&&(u=l),h===o&&++y===r&&(a=l),(w=g.nextSibling)!==null)break;g=h,h=g.parentNode}g=w}n=u===-1||a===-1?null:{start:u,end:a}}else n=null}n=n||{start:0,end:0}}else n=null;for($s={focusedElem:e,selectionRange:n},Lo=!1,F=t;F!==null;)if(t=F,e=t.child,(t.subtreeFlags&1028)!==0&&e!==null)e.return=t,F=e;else for(;F!==null;){t=F;try{var x=t.alternate;if(t.flags&1024)switch(t.tag){case 0:case 11:case 15:break;case 1:if(x!==null){var k=x.memoizedProps,T=x.memoizedState,f=t.stateNode,c=f.getSnapshotBeforeUpdate(t.elementType===t.type?k:kt(t.type,k),T);f.__reactInternalSnapshotBeforeUpdate=c}break;case 3:var p=t.stateNode.containerInfo;p.nodeType===1?p.textContent="":p.nodeType===9&&p.documentElement&&p.removeChild(p.documentElement);break;case 5:case 6:case 4:case 17:break;default:throw Error(M(163))}}catch(j){ke(t,t.return,j)}if(e=t.sibling,e!==null){e.return=t.return,F=e;break}F=t.return}return x=gc,gc=!1,x}function ri(e,t,n){var r=t.updateQueue;if(r=r!==null?r.lastEffect:null,r!==null){var i=r=r.next;do{if((i.tag&e)===e){var o=i.destroy;i.destroy=void 0,o!==void 0&&ta(t,n,o)}i=i.next}while(i!==r)}}function hl(e,t){if(t=t.updateQueue,t=t!==null?t.lastEffect:null,t!==null){var n=t=t.next;do{if((n.tag&e)===e){var r=n.create;n.destroy=r()}n=n.next}while(n!==t)}}function na(e){var t=e.ref;if(t!==null){var n=e.stateNode;switch(e.tag){case 5:e=n;break;default:e=n}typeof t=="function"?t(e):t.current=e}}function ip(e){var t=e.alternate;t!==null&&(e.alternate=null,ip(t)),e.child=null,e.deletions=null,e.sibling=null,e.tag===5&&(t=e.stateNode,t!==null&&(delete t[Nt],delete t[gi],delete t[Us],delete t[tg],delete t[ng])),e.stateNode=null,e.return=null,e.dependencies=null,e.memoizedProps=null,e.memoizedState=null,e.pendingProps=null,e.stateNode=null,e.updateQueue=null}function op(e){return e.tag===5||e.tag===3||e.tag===4}function yc(e){e:for(;;){for(;e.sibling===null;){if(e.return===null||op(e.return))return null;e=e.return}for(e.sibling.return=e.return,e=e.sibling;e.tag!==5&&e.tag!==6&&e.tag!==18;){if(e.flags&2||e.child===null||e.tag===4)continue e;e.child.return=e,e=e.child}if(!(e.flags&2))return e.stateNode}}function ra(e,t,n){var r=e.tag;if(r===5||r===6)e=e.stateNode,t?n.nodeType===8?n.parentNode.insertBefore(e,t):n.insertBefore(e,t):(n.nodeType===8?(t=n.parentNode,t.insertBefore(e,n)):(t=n,t.appendChild(e)),n=n._reactRootContainer,n!=null||t.onclick!==null||(t.onclick=Ao));else if(r!==4&&(e=e.child,e!==null))for(ra(e,t,n),e=e.sibling;e!==null;)ra(e,t,n),e=e.sibling}function ia(e,t,n){var r=e.tag;if(r===5||r===6)e=e.stateNode,t?n.insertBefore(e,t):n.appendChild(e);else if(r!==4&&(e=e.child,e!==null))for(ia(e,t,n),e=e.sibling;e!==null;)ia(e,t,n),e=e.sibling}var Ae=null,jt=!1;function en(e,t,n){for(n=n.child;n!==null;)lp(e,t,n),n=n.sibling}function lp(e,t,n){if(Dt&&typeof Dt.onCommitFiberUnmount=="function")try{Dt.onCommitFiberUnmount(ll,n)}catch{}switch(n.tag){case 5:Be||cr(n,t);case 6:var r=Ae,i=jt;Ae=null,en(e,t,n),Ae=r,jt=i,Ae!==null&&(jt?(e=Ae,n=n.stateNode,e.nodeType===8?e.parentNode.removeChild(n):e.removeChild(n)):Ae.removeChild(n.stateNode));break;case 18:Ae!==null&&(jt?(e=Ae,n=n.stateNode,e.nodeType===8?Wl(e.parentNode,n):e.nodeType===1&&Wl(e,n),di(e)):Wl(Ae,n.stateNode));break;case 4:r=Ae,i=jt,Ae=n.stateNode.containerInfo,jt=!0,en(e,t,n),Ae=r,jt=i;break;case 0:case 11:case 14:case 15:if(!Be&&(r=n.updateQueue,r!==null&&(r=r.lastEffect,r!==null))){i=r=r.next;do{var o=i,l=o.destroy;o=o.tag,l!==void 0&&(o&2||o&4)&&ta(n,t,l),i=i.next}while(i!==r)}en(e,t,n);break;case 1:if(!Be&&(cr(n,t),r=n.stateNode,typeof r.componentWillUnmount=="function"))try{r.props=n.memoizedProps,r.state=n.memoizedState,r.componentWillUnmount()}catch(u){ke(n,t,u)}en(e,t,n);break;case 21:en(e,t,n);break;case 22:n.mode&1?(Be=(r=Be)||n.memoizedState!==null,en(e,t,n),Be=r):en(e,t,n);break;default:en(e,t,n)}}function xc(e){var t=e.updateQueue;if(t!==null){e.updateQueue=null;var n=e.stateNode;n===null&&(n=e.stateNode=new xg),t.forEach(function(r){var i=Tg.bind(null,e,r);n.has(r)||(n.add(r),r.then(i,i))})}}function vt(e,t){var n=t.deletions;if(n!==null)for(var r=0;r<n.length;r++){var i=n[r];try{var o=e,l=t,u=l;e:for(;u!==null;){switch(u.tag){case 5:Ae=u.stateNode,jt=!1;break e;case 3:Ae=u.stateNode.containerInfo,jt=!0;break e;case 4:Ae=u.stateNode.containerInfo,jt=!0;break e}u=u.return}if(Ae===null)throw Error(M(160));lp(o,l,i),Ae=null,jt=!1;var a=i.alternate;a!==null&&(a.return=null),i.return=null}catch(d){ke(i,t,d)}}if(t.subtreeFlags&12854)for(t=t.child;t!==null;)sp(t,e),t=t.sibling}function sp(e,t){var n=e.alternate,r=e.flags;switch(e.tag){case 0:case 11:case 14:case 15:if(vt(t,e),Mt(e),r&4){try{ri(3,e,e.return),hl(3,e)}catch(k){ke(e,e.return,k)}try{ri(5,e,e.return)}catch(k){ke(e,e.return,k)}}break;case 1:vt(t,e),Mt(e),r&512&&n!==null&&cr(n,n.return);break;case 5:if(vt(t,e),Mt(e),r&512&&n!==null&&cr(n,n.return),e.flags&32){var i=e.stateNode;try{si(i,"")}catch(k){ke(e,e.return,k)}}if(r&4&&(i=e.stateNode,i!=null)){var o=e.memoizedProps,l=n!==null?n.memoizedProps:o,u=e.type,a=e.updateQueue;if(e.updateQueue=null,a!==null)try{u==="input"&&o.type==="radio"&&o.name!=null&&bd(i,o),Ts(u,l);var d=Ts(u,o);for(l=0;l<a.length;l+=2){var y=a[l],g=a[l+1];y==="style"?zd(i,g):y==="dangerouslySetInnerHTML"?Md(i,g):y==="children"?si(i,g):xa(i,y,g,d)}switch(u){case"input":Ss(i,o);break;case"textarea":Td(i,o);break;case"select":var h=i._wrapperState.wasMultiple;i._wrapperState.wasMultiple=!!o.multiple;var w=o.value;w!=null?pr(i,!!o.multiple,w,!1):h!==!!o.multiple&&(o.defaultValue!=null?pr(i,!!o.multiple,o.defaultValue,!0):pr(i,!!o.multiple,o.multiple?[]:"",!1))}i[gi]=o}catch(k){ke(e,e.return,k)}}break;case 6:if(vt(t,e),Mt(e),r&4){if(e.stateNode===null)throw Error(M(162));i=e.stateNode,o=e.memoizedProps;try{i.nodeValue=o}catch(k){ke(e,e.return,k)}}break;case 3:if(vt(t,e),Mt(e),r&4&&n!==null&&n.memoizedState.isDehydrated)try{di(t.containerInfo)}catch(k){ke(e,e.return,k)}break;case 4:vt(t,e),Mt(e);break;case 13:vt(t,e),Mt(e),i=e.child,i.flags&8192&&(o=i.memoizedState!==null,i.stateNode.isHidden=o,!o||i.alternate!==null&&i.alternate.memoizedState!==null||(Za=Se())),r&4&&xc(e);break;case 22:if(y=n!==null&&n.memoizedState!==null,e.mode&1?(Be=(d=Be)||y,vt(t,e),Be=d):vt(t,e),Mt(e),r&8192){if(d=e.memoizedState!==null,(e.stateNode.isHidden=d)&&!y&&e.mode&1)for(F=e,y=e.child;y!==null;){for(g=F=y;F!==null;){switch(h=F,w=h.child,h.tag){case 0:case 11:case 14:case 15:ri(4,h,h.return);break;case 1:cr(h,h.return);var x=h.stateNode;if(typeof x.componentWillUnmount=="function"){r=h,n=h.return;try{t=r,x.props=t.memoizedProps,x.state=t.memoizedState,x.componentWillUnmount()}catch(k){ke(r,n,k)}}break;case 5:cr(h,h.return);break;case 22:if(h.memoizedState!==null){wc(g);continue}}w!==null?(w.return=h,F=w):wc(g)}y=y.sibling}e:for(y=null,g=e;;){if(g.tag===5){if(y===null){y=g;try{i=g.stateNode,d?(o=i.style,typeof o.setProperty=="function"?o.setProperty("display","none","important"):o.display="none"):(u=g.stateNode,a=g.memoizedProps.style,l=a!=null&&a.hasOwnProperty("display")?a.display:null,u.style.display=Od("display",l))}catch(k){ke(e,e.return,k)}}}else if(g.tag===6){if(y===null)try{g.stateNode.nodeValue=d?"":g.memoizedProps}catch(k){ke(e,e.return,k)}}else if((g.tag!==22&&g.tag!==23||g.memoizedState===null||g===e)&&g.child!==null){g.child.return=g,g=g.child;continue}if(g===e)break e;for(;g.sibling===null;){if(g.return===null||g.return===e)break e;y===g&&(y=null),g=g.return}y===g&&(y=null),g.sibling.return=g.return,g=g.sibling}}break;case 19:vt(t,e),Mt(e),r&4&&xc(e);break;case 21:break;default:vt(t,e),Mt(e)}}function Mt(e){var t=e.flags;if(t&2){try{e:{for(var n=e.return;n!==null;){if(op(n)){var r=n;break e}n=n.return}throw Error(M(160))}switch(r.tag){case 5:var i=r.stateNode;r.flags&32&&(si(i,""),r.flags&=-33);var o=yc(e);ia(e,o,i);break;case 3:case 4:var l=r.stateNode.containerInfo,u=yc(e);ra(e,u,l);break;default:throw Error(M(161))}}catch(a){ke(e,e.return,a)}e.flags&=-3}t&4096&&(e.flags&=-4097)}function wg(e,t,n){F=e,ap(e)}function ap(e,t,n){for(var r=(e.mode&1)!==0;F!==null;){var i=F,o=i.child;if(i.tag===22&&r){var l=i.memoizedState!==null||Gi;if(!l){var u=i.alternate,a=u!==null&&u.memoizedState!==null||Be;u=Gi;var d=Be;if(Gi=l,(Be=a)&&!d)for(F=i;F!==null;)l=F,a=l.child,l.tag===22&&l.memoizedState!==null?kc(i):a!==null?(a.return=l,F=a):kc(i);for(;o!==null;)F=o,ap(o),o=o.sibling;F=i,Gi=u,Be=d}vc(e)}else i.subtreeFlags&8772&&o!==null?(o.return=i,F=o):vc(e)}}function vc(e){for(;F!==null;){var t=F;if(t.flags&8772){var n=t.alternate;try{if(t.flags&8772)switch(t.tag){case 0:case 11:case 15:Be||hl(5,t);break;case 1:var r=t.stateNode;if(t.flags&4&&!Be)if(n===null)r.componentDidMount();else{var i=t.elementType===t.type?n.memoizedProps:kt(t.type,n.memoizedProps);r.componentDidUpdate(i,n.memoizedState,r.__reactInternalSnapshotBeforeUpdate)}var o=t.updateQueue;o!==null&&nc(t,o,r);break;case 3:var l=t.updateQueue;if(l!==null){if(n=null,t.child!==null)switch(t.child.tag){case 5:n=t.child.stateNode;break;case 1:n=t.child.stateNode}nc(t,l,n)}break;case 5:var u=t.stateNode;if(n===null&&t.flags&4){n=u;var a=t.memoizedProps;switch(t.type){case"button":case"input":case"select":case"textarea":a.autoFocus&&n.focus();break;case"img":a.src&&(n.src=a.src)}}break;case 6:break;case 4:break;case 12:break;case 13:if(t.memoizedState===null){var d=t.alternate;if(d!==null){var y=d.memoizedState;if(y!==null){var g=y.dehydrated;g!==null&&di(g)}}}break;case 19:case 17:case 21:case 22:case 23:case 25:break;default:throw Error(M(163))}Be||t.flags&512&&na(t)}catch(h){ke(t,t.return,h)}}if(t===e){F=null;break}if(n=t.sibling,n!==null){n.return=t.return,F=n;break}F=t.return}}function wc(e){for(;F!==null;){var t=F;if(t===e){F=null;break}var n=t.sibling;if(n!==null){n.return=t.return,F=n;break}F=t.return}}function kc(e){for(;F!==null;){var t=F;try{switch(t.tag){case 0:case 11:case 15:var n=t.return;try{hl(4,t)}catch(a){ke(t,n,a)}break;case 1:var r=t.stateNode;if(typeof r.componentDidMount=="function"){var i=t.return;try{r.componentDidMount()}catch(a){ke(t,i,a)}}var o=t.return;try{na(t)}catch(a){ke(t,o,a)}break;case 5:var l=t.return;try{na(t)}catch(a){ke(t,l,a)}}}catch(a){ke(t,t.return,a)}if(t===e){F=null;break}var u=t.sibling;if(u!==null){u.return=t.return,F=u;break}F=t.return}}var kg=Math.ceil,Yo=Jt.ReactCurrentDispatcher,Xa=Jt.ReactCurrentOwner,mt=Jt.ReactCurrentBatchConfig,re=0,Le=null,be=null,Ie=0,rt=0,dr=Pn(0),Pe=0,ji=null,Bn=0,ml=0,Ga=0,ii=null,Ze=null,Za=0,Cr=1/0,Wt=null,Ko=!1,oa=null,Sn=null,Zi=!1,gn=null,Xo=0,oi=0,la=null,vo=-1,wo=0;function Ke(){return re&6?Se():vo!==-1?vo:vo=Se()}function _n(e){return e.mode&1?re&2&&Ie!==0?Ie&-Ie:ig.transition!==null?(wo===0&&(wo=Bd()),wo):(e=ue,e!==0||(e=window.event,e=e===void 0?16:Zd(e.type)),e):1}function bt(e,t,n,r){if(50<oi)throw oi=0,la=null,Error(M(185));Ti(e,n,r),(!(re&2)||e!==Le)&&(e===Le&&(!(re&2)&&(ml|=n),Pe===4&&pn(e,Ie)),tt(e,r),n===1&&re===0&&!(t.mode&1)&&(Cr=Se()+500,dl&&Mn()))}function tt(e,t){var n=e.callbackNode;im(e,t);var r=zo(e,e===Le?Ie:0);if(r===0)n!==null&&Mu(n),e.callbackNode=null,e.callbackPriority=0;else if(t=r&-r,e.callbackPriority!==t){if(n!=null&&Mu(n),t===1)e.tag===0?rg(jc.bind(null,e)):yf(jc.bind(null,e)),qm(function(){!(re&6)&&Mn()}),n=null;else{switch(Hd(r)){case 1:n=Sa;break;case 4:n=Ud;break;case 16:n=Oo;break;case 536870912:n=Wd;break;default:n=Oo}n=gp(n,up.bind(null,e))}e.callbackPriority=t,e.callbackNode=n}}function up(e,t){if(vo=-1,wo=0,re&6)throw Error(M(327));var n=e.callbackNode;if(xr()&&e.callbackNode!==n)return null;var r=zo(e,e===Le?Ie:0);if(r===0)return null;if(r&30||r&e.expiredLanes||t)t=Go(e,r);else{t=r;var i=re;re|=2;var o=dp();(Le!==e||Ie!==t)&&(Wt=null,Cr=Se()+500,$n(e,t));do try{_g();break}catch(u){cp(e,u)}while(!0);Aa(),Yo.current=o,re=i,be!==null?t=0:(Le=null,Ie=0,t=Pe)}if(t!==0){if(t===2&&(i=Ls(e),i!==0&&(r=i,t=sa(e,i))),t===1)throw n=ji,$n(e,0),pn(e,r),tt(e,Se()),n;if(t===6)pn(e,r);else{if(i=e.current.alternate,!(r&30)&&!jg(i)&&(t=Go(e,r),t===2&&(o=Ls(e),o!==0&&(r=o,t=sa(e,o))),t===1))throw n=ji,$n(e,0),pn(e,r),tt(e,Se()),n;switch(e.finishedWork=i,e.finishedLanes=r,t){case 0:case 1:throw Error(M(345));case 2:Ln(e,Ze,Wt);break;case 3:if(pn(e,r),(r&130023424)===r&&(t=Za+500-Se(),10<t)){if(zo(e,0)!==0)break;if(i=e.suspendedLanes,(i&r)!==r){Ke(),e.pingedLanes|=e.suspendedLanes&i;break}e.timeoutHandle=Vs(Ln.bind(null,e,Ze,Wt),t);break}Ln(e,Ze,Wt);break;case 4:if(pn(e,r),(r&4194240)===r)break;for(t=e.eventTimes,i=-1;0<r;){var l=31-Ct(r);o=1<<l,l=t[l],l>i&&(i=l),r&=~o}if(r=i,r=Se()-r,r=(120>r?120:480>r?480:1080>r?1080:1920>r?1920:3e3>r?3e3:4320>r?4320:1960*kg(r/1960))-r,10<r){e.timeoutHandle=Vs(Ln.bind(null,e,Ze,Wt),r);break}Ln(e,Ze,Wt);break;case 5:Ln(e,Ze,Wt);break;default:throw Error(M(329))}}}return tt(e,Se()),e.callbackNode===n?up.bind(null,e):null}function sa(e,t){var n=ii;return e.current.memoizedState.isDehydrated&&($n(e,t).flags|=256),e=Go(e,t),e!==2&&(t=Ze,Ze=n,t!==null&&aa(t)),e}function aa(e){Ze===null?Ze=e:Ze.push.apply(Ze,e)}function jg(e){for(var t=e;;){if(t.flags&16384){var n=t.updateQueue;if(n!==null&&(n=n.stores,n!==null))for(var r=0;r<n.length;r++){var i=n[r],o=i.getSnapshot;i=i.value;try{if(!Tt(o(),i))return!1}catch{return!1}}}if(n=t.child,t.subtreeFlags&16384&&n!==null)n.return=t,t=n;else{if(t===e)break;for(;t.sibling===null;){if(t.return===null||t.return===e)return!0;t=t.return}t.sibling.return=t.return,t=t.sibling}}return!0}function pn(e,t){for(t&=~Ga,t&=~ml,e.suspendedLanes|=t,e.pingedLanes&=~t,e=e.expirationTimes;0<t;){var n=31-Ct(t),r=1<<n;e[n]=-1,t&=~r}}function jc(e){if(re&6)throw Error(M(327));xr();var t=zo(e,0);if(!(t&1))return tt(e,Se()),null;var n=Go(e,t);if(e.tag!==0&&n===2){var r=Ls(e);r!==0&&(t=r,n=sa(e,r))}if(n===1)throw n=ji,$n(e,0),pn(e,t),tt(e,Se()),n;if(n===6)throw Error(M(345));return e.finishedWork=e.current.alternate,e.finishedLanes=t,Ln(e,Ze,Wt),tt(e,Se()),null}function Ja(e,t){var n=re;re|=1;try{return e(t)}finally{re=n,re===0&&(Cr=Se()+500,dl&&Mn())}}function Hn(e){gn!==null&&gn.tag===0&&!(re&6)&&xr();var t=re;re|=1;var n=mt.transition,r=ue;try{if(mt.transition=null,ue=1,e)return e()}finally{ue=r,mt.transition=n,re=t,!(re&6)&&Mn()}}function qa(){rt=dr.current,me(dr)}function $n(e,t){e.finishedWork=null,e.finishedLanes=0;var n=e.timeoutHandle;if(n!==-1&&(e.timeoutHandle=-1,Jm(n)),be!==null)for(n=be.return;n!==null;){var r=n;switch(La(r),r.tag){case 1:r=r.type.childContextTypes,r!=null&&Do();break;case 3:_r(),me(qe),me(He),Ua();break;case 5:Va(r);break;case 4:_r();break;case 13:me(xe);break;case 19:me(xe);break;case 10:Da(r.type._context);break;case 22:case 23:qa()}n=n.return}if(Le=e,be=e=En(e.current,null),Ie=rt=t,Pe=0,ji=null,Ga=ml=Bn=0,Ze=ii=null,Nn!==null){for(t=0;t<Nn.length;t++)if(n=Nn[t],r=n.interleaved,r!==null){n.interleaved=null;var i=r.next,o=n.pending;if(o!==null){var l=o.next;o.next=i,r.next=l}n.pending=r}Nn=null}return e}function cp(e,t){do{var n=be;try{if(Aa(),go.current=Qo,Ho){for(var r=ve.memoizedState;r!==null;){var i=r.queue;i!==null&&(i.pending=null),r=r.next}Ho=!1}if(Wn=0,ze=Te=ve=null,ni=!1,vi=0,Xa.current=null,n===null||n.return===null){Pe=1,ji=t,be=null;break}e:{var o=e,l=n.return,u=n,a=t;if(t=Ie,u.flags|=32768,a!==null&&typeof a=="object"&&typeof a.then=="function"){var d=a,y=u,g=y.tag;if(!(y.mode&1)&&(g===0||g===11||g===15)){var h=y.alternate;h?(y.updateQueue=h.updateQueue,y.memoizedState=h.memoizedState,y.lanes=h.lanes):(y.updateQueue=null,y.memoizedState=null)}var w=uc(l);if(w!==null){w.flags&=-257,cc(w,l,u,o,t),w.mode&1&&ac(o,d,t),t=w,a=d;var x=t.updateQueue;if(x===null){var k=new Set;k.add(a),t.updateQueue=k}else x.add(a);break e}else{if(!(t&1)){ac(o,d,t),eu();break e}a=Error(M(426))}}else if(ye&&u.mode&1){var T=uc(l);if(T!==null){!(T.flags&65536)&&(T.flags|=256),cc(T,l,u,o,t),Ra(Er(a,u));break e}}o=a=Er(a,u),Pe!==4&&(Pe=2),ii===null?ii=[o]:ii.push(o),o=l;do{switch(o.tag){case 3:o.flags|=65536,t&=-t,o.lanes|=t;var f=Yf(o,a,t);tc(o,f);break e;case 1:u=a;var c=o.type,p=o.stateNode;if(!(o.flags&128)&&(typeof c.getDerivedStateFromError=="function"||p!==null&&typeof p.componentDidCatch=="function"&&(Sn===null||!Sn.has(p)))){o.flags|=65536,t&=-t,o.lanes|=t;var j=Kf(o,u,t);tc(o,j);break e}}o=o.return}while(o!==null)}pp(n)}catch(E){t=E,be===n&&n!==null&&(be=n=n.return);continue}break}while(!0)}function dp(){var e=Yo.current;return Yo.current=Qo,e===null?Qo:e}function eu(){(Pe===0||Pe===3||Pe===2)&&(Pe=4),Le===null||!(Bn&268435455)&&!(ml&268435455)||pn(Le,Ie)}function Go(e,t){var n=re;re|=2;var r=dp();(Le!==e||Ie!==t)&&(Wt=null,$n(e,t));do try{Sg();break}catch(i){cp(e,i)}while(!0);if(Aa(),re=n,Yo.current=r,be!==null)throw Error(M(261));return Le=null,Ie=0,Pe}function Sg(){for(;be!==null;)fp(be)}function _g(){for(;be!==null&&!Xh();)fp(be)}function fp(e){var t=mp(e.alternate,e,rt);e.memoizedProps=e.pendingProps,t===null?pp(e):be=t,Xa.current=null}function pp(e){var t=e;do{var n=t.alternate;if(e=t.return,t.flags&32768){if(n=yg(n,t),n!==null){n.flags&=32767,be=n;return}if(e!==null)e.flags|=32768,e.subtreeFlags=0,e.deletions=null;else{Pe=6,be=null;return}}else if(n=gg(n,t,rt),n!==null){be=n;return}if(t=t.sibling,t!==null){be=t;return}be=t=e}while(t!==null);Pe===0&&(Pe=5)}function Ln(e,t,n){var r=ue,i=mt.transition;try{mt.transition=null,ue=1,Eg(e,t,n,r)}finally{mt.transition=i,ue=r}return null}function Eg(e,t,n,r){do xr();while(gn!==null);if(re&6)throw Error(M(327));n=e.finishedWork;var i=e.finishedLanes;if(n===null)return null;if(e.finishedWork=null,e.finishedLanes=0,n===e.current)throw Error(M(177));e.callbackNode=null,e.callbackPriority=0;var o=n.lanes|n.childLanes;if(om(e,o),e===Le&&(be=Le=null,Ie=0),!(n.subtreeFlags&2064)&&!(n.flags&2064)||Zi||(Zi=!0,gp(Oo,function(){return xr(),null})),o=(n.flags&15990)!==0,n.subtreeFlags&15990||o){o=mt.transition,mt.transition=null;var l=ue;ue=1;var u=re;re|=4,Xa.current=null,vg(e,n),sp(n,e),Hm($s),Lo=!!Is,$s=Is=null,e.current=n,wg(n),Gh(),re=u,ue=l,mt.transition=o}else e.current=n;if(Zi&&(Zi=!1,gn=e,Xo=i),o=e.pendingLanes,o===0&&(Sn=null),qh(n.stateNode),tt(e,Se()),t!==null)for(r=e.onRecoverableError,n=0;n<t.length;n++)i=t[n],r(i.value,{componentStack:i.stack,digest:i.digest});if(Ko)throw Ko=!1,e=oa,oa=null,e;return Xo&1&&e.tag!==0&&xr(),o=e.pendingLanes,o&1?e===la?oi++:(oi=0,la=e):oi=0,Mn(),null}function xr(){if(gn!==null){var e=Hd(Xo),t=mt.transition,n=ue;try{if(mt.transition=null,ue=16>e?16:e,gn===null)var r=!1;else{if(e=gn,gn=null,Xo=0,re&6)throw Error(M(331));var i=re;for(re|=4,F=e.current;F!==null;){var o=F,l=o.child;if(F.flags&16){var u=o.deletions;if(u!==null){for(var a=0;a<u.length;a++){var d=u[a];for(F=d;F!==null;){var y=F;switch(y.tag){case 0:case 11:case 15:ri(8,y,o)}var g=y.child;if(g!==null)g.return=y,F=g;else for(;F!==null;){y=F;var h=y.sibling,w=y.return;if(ip(y),y===d){F=null;break}if(h!==null){h.return=w,F=h;break}F=w}}}var x=o.alternate;if(x!==null){var k=x.child;if(k!==null){x.child=null;do{var T=k.sibling;k.sibling=null,k=T}while(k!==null)}}F=o}}if(o.subtreeFlags&2064&&l!==null)l.return=o,F=l;else e:for(;F!==null;){if(o=F,o.flags&2048)switch(o.tag){case 0:case 11:case 15:ri(9,o,o.return)}var f=o.sibling;if(f!==null){f.return=o.return,F=f;break e}F=o.return}}var c=e.current;for(F=c;F!==null;){l=F;var p=l.child;if(l.subtreeFlags&2064&&p!==null)p.return=l,F=p;else e:for(l=c;F!==null;){if(u=F,u.flags&2048)try{switch(u.tag){case 0:case 11:case 15:hl(9,u)}}catch(E){ke(u,u.return,E)}if(u===l){F=null;break e}var j=u.sibling;if(j!==null){j.return=u.return,F=j;break e}F=u.return}}if(re=i,Mn(),Dt&&typeof Dt.onPostCommitFiberRoot=="function")try{Dt.onPostCommitFiberRoot(ll,e)}catch{}r=!0}return r}finally{ue=n,mt.transition=t}}return!1}function Sc(e,t,n){t=Er(n,t),t=Yf(e,t,1),e=jn(e,t,1),t=Ke(),e!==null&&(Ti(e,1,t),tt(e,t))}function ke(e,t,n){if(e.tag===3)Sc(e,e,n);else for(;t!==null;){if(t.tag===3){Sc(t,e,n);break}else if(t.tag===1){var r=t.stateNode;if(typeof t.type.getDerivedStateFromError=="function"||typeof r.componentDidCatch=="function"&&(Sn===null||!Sn.has(r))){e=Er(n,e),e=Kf(t,e,1),t=jn(t,e,1),e=Ke(),t!==null&&(Ti(t,1,e),tt(t,e));break}}t=t.return}}function Cg(e,t,n){var r=e.pingCache;r!==null&&r.delete(t),t=Ke(),e.pingedLanes|=e.suspendedLanes&n,Le===e&&(Ie&n)===n&&(Pe===4||Pe===3&&(Ie&130023424)===Ie&&500>Se()-Za?$n(e,0):Ga|=n),tt(e,t)}function hp(e,t){t===0&&(e.mode&1?(t=Vi,Vi<<=1,!(Vi&130023424)&&(Vi=4194304)):t=1);var n=Ke();e=Gt(e,t),e!==null&&(Ti(e,t,n),tt(e,n))}function bg(e){var t=e.memoizedState,n=0;t!==null&&(n=t.retryLane),hp(e,n)}function Tg(e,t){var n=0;switch(e.tag){case 13:var r=e.stateNode,i=e.memoizedState;i!==null&&(n=i.retryLane);break;case 19:r=e.stateNode;break;default:throw Error(M(314))}r!==null&&r.delete(t),hp(e,n)}var mp;mp=function(e,t,n){if(e!==null)if(e.memoizedProps!==t.pendingProps||qe.current)Je=!0;else{if(!(e.lanes&n)&&!(t.flags&128))return Je=!1,mg(e,t,n);Je=!!(e.flags&131072)}else Je=!1,ye&&t.flags&1048576&&xf(t,Fo,t.index);switch(t.lanes=0,t.tag){case 2:var r=t.type;xo(e,t),e=t.pendingProps;var i=kr(t,He.current);yr(t,n),i=Ba(null,t,r,e,i,n);var o=Ha();return t.flags|=1,typeof i=="object"&&i!==null&&typeof i.render=="function"&&i.$$typeof===void 0?(t.tag=1,t.memoizedState=null,t.updateQueue=null,et(r)?(o=!0,Io(t)):o=!1,t.memoizedState=i.state!==null&&i.state!==void 0?i.state:null,$a(t),i.updater=fl,t.stateNode=i,i._reactInternals=t,Ks(t,r,e,n),t=Zs(null,t,r,!0,o,n)):(t.tag=0,ye&&o&&za(t),Qe(null,t,i,n),t=t.child),t;case 16:r=t.elementType;e:{switch(xo(e,t),e=t.pendingProps,i=r._init,r=i(r._payload),t.type=r,i=t.tag=Mg(r),e=kt(r,e),i){case 0:t=Gs(null,t,r,e,n);break e;case 1:t=pc(null,t,r,e,n);break e;case 11:t=dc(null,t,r,e,n);break e;case 14:t=fc(null,t,r,kt(r.type,e),n);break e}throw Error(M(306,r,""))}return t;case 0:return r=t.type,i=t.pendingProps,i=t.elementType===r?i:kt(r,i),Gs(e,t,r,i,n);case 1:return r=t.type,i=t.pendingProps,i=t.elementType===r?i:kt(r,i),pc(e,t,r,i,n);case 3:e:{if(Jf(t),e===null)throw Error(M(387));r=t.pendingProps,o=t.memoizedState,i=o.element,jf(e,t),Wo(t,r,null,n);var l=t.memoizedState;if(r=l.element,o.isDehydrated)if(o={element:r,isDehydrated:!1,cache:l.cache,pendingSuspenseBoundaries:l.pendingSuspenseBoundaries,transitions:l.transitions},t.updateQueue.baseState=o,t.memoizedState=o,t.flags&256){i=Er(Error(M(423)),t),t=hc(e,t,r,n,i);break e}else if(r!==i){i=Er(Error(M(424)),t),t=hc(e,t,r,n,i);break e}else for(it=kn(t.stateNode.containerInfo.firstChild),ot=t,ye=!0,_t=null,n=Cf(t,null,r,n),t.child=n;n;)n.flags=n.flags&-3|4096,n=n.sibling;else{if(jr(),r===i){t=Zt(e,t,n);break e}Qe(e,t,r,n)}t=t.child}return t;case 5:return bf(t),e===null&&Hs(t),r=t.type,i=t.pendingProps,o=e!==null?e.memoizedProps:null,l=i.children,Fs(r,i)?l=null:o!==null&&Fs(r,o)&&(t.flags|=32),Zf(e,t),Qe(e,t,l,n),t.child;case 6:return e===null&&Hs(t),null;case 13:return qf(e,t,n);case 4:return Fa(t,t.stateNode.containerInfo),r=t.pendingProps,e===null?t.child=Sr(t,null,r,n):Qe(e,t,r,n),t.child;case 11:return r=t.type,i=t.pendingProps,i=t.elementType===r?i:kt(r,i),dc(e,t,r,i,n);case 7:return Qe(e,t,t.pendingProps,n),t.child;case 8:return Qe(e,t,t.pendingProps.children,n),t.child;case 12:return Qe(e,t,t.pendingProps.children,n),t.child;case 10:e:{if(r=t.type._context,i=t.pendingProps,o=t.memoizedProps,l=i.value,fe(Vo,r._currentValue),r._currentValue=l,o!==null)if(Tt(o.value,l)){if(o.children===i.children&&!qe.current){t=Zt(e,t,n);break e}}else for(o=t.child,o!==null&&(o.return=t);o!==null;){var u=o.dependencies;if(u!==null){l=o.child;for(var a=u.firstContext;a!==null;){if(a.context===r){if(o.tag===1){a=Yt(-1,n&-n),a.tag=2;var d=o.updateQueue;if(d!==null){d=d.shared;var y=d.pending;y===null?a.next=a:(a.next=y.next,y.next=a),d.pending=a}}o.lanes|=n,a=o.alternate,a!==null&&(a.lanes|=n),Qs(o.return,n,t),u.lanes|=n;break}a=a.next}}else if(o.tag===10)l=o.type===t.type?null:o.child;else if(o.tag===18){if(l=o.return,l===null)throw Error(M(341));l.lanes|=n,u=l.alternate,u!==null&&(u.lanes|=n),Qs(l,n,t),l=o.sibling}else l=o.child;if(l!==null)l.return=o;else for(l=o;l!==null;){if(l===t){l=null;break}if(o=l.sibling,o!==null){o.return=l.return,l=o;break}l=l.return}o=l}Qe(e,t,i.children,n),t=t.child}return t;case 9:return i=t.type,r=t.pendingProps.children,yr(t,n),i=gt(i),r=r(i),t.flags|=1,Qe(e,t,r,n),t.child;case 14:return r=t.type,i=kt(r,t.pendingProps),i=kt(r.type,i),fc(e,t,r,i,n);case 15:return Xf(e,t,t.type,t.pendingProps,n);case 17:return r=t.type,i=t.pendingProps,i=t.elementType===r?i:kt(r,i),xo(e,t),t.tag=1,et(r)?(e=!0,Io(t)):e=!1,yr(t,n),_f(t,r,i),Ks(t,r,i,n),Zs(null,t,r,!0,e,n);case 19:return ep(e,t,n);case 22:return Gf(e,t,n)}throw Error(M(156,t.tag))};function gp(e,t){return Vd(e,t)}function Pg(e,t,n,r){this.tag=e,this.key=n,this.sibling=this.child=this.return=this.stateNode=this.type=this.elementType=null,this.index=0,this.ref=null,this.pendingProps=t,this.dependencies=this.memoizedState=this.updateQueue=this.memoizedProps=null,this.mode=r,this.subtreeFlags=this.flags=0,this.deletions=null,this.childLanes=this.lanes=0,this.alternate=null}function ht(e,t,n,r){return new Pg(e,t,n,r)}function tu(e){return e=e.prototype,!(!e||!e.isReactComponent)}function Mg(e){if(typeof e=="function")return tu(e)?1:0;if(e!=null){if(e=e.$$typeof,e===wa)return 11;if(e===ka)return 14}return 2}function En(e,t){var n=e.alternate;return n===null?(n=ht(e.tag,t,e.key,e.mode),n.elementType=e.elementType,n.type=e.type,n.stateNode=e.stateNode,n.alternate=e,e.alternate=n):(n.pendingProps=t,n.type=e.type,n.flags=0,n.subtreeFlags=0,n.deletions=null),n.flags=e.flags&14680064,n.childLanes=e.childLanes,n.lanes=e.lanes,n.child=e.child,n.memoizedProps=e.memoizedProps,n.memoizedState=e.memoizedState,n.updateQueue=e.updateQueue,t=e.dependencies,n.dependencies=t===null?null:{lanes:t.lanes,firstContext:t.firstContext},n.sibling=e.sibling,n.index=e.index,n.ref=e.ref,n}function ko(e,t,n,r,i,o){var l=2;if(r=e,typeof e=="function")tu(e)&&(l=1);else if(typeof e=="string")l=5;else e:switch(e){case tr:return Fn(n.children,i,o,t);case va:l=8,i|=8;break;case xs:return e=ht(12,n,t,i|2),e.elementType=xs,e.lanes=o,e;case vs:return e=ht(13,n,t,i),e.elementType=vs,e.lanes=o,e;case ws:return e=ht(19,n,t,i),e.elementType=ws,e.lanes=o,e;case _d:return gl(n,i,o,t);default:if(typeof e=="object"&&e!==null)switch(e.$$typeof){case jd:l=10;break e;case Sd:l=9;break e;case wa:l=11;break e;case ka:l=14;break e;case cn:l=16,r=null;break e}throw Error(M(130,e==null?e:typeof e,""))}return t=ht(l,n,t,i),t.elementType=e,t.type=r,t.lanes=o,t}function Fn(e,t,n,r){return e=ht(7,e,r,t),e.lanes=n,e}function gl(e,t,n,r){return e=ht(22,e,r,t),e.elementType=_d,e.lanes=n,e.stateNode={isHidden:!1},e}function Zl(e,t,n){return e=ht(6,e,null,t),e.lanes=n,e}function Jl(e,t,n){return t=ht(4,e.children!==null?e.children:[],e.key,t),t.lanes=n,t.stateNode={containerInfo:e.containerInfo,pendingChildren:null,implementation:e.implementation},t}function Og(e,t,n,r,i){this.tag=t,this.containerInfo=e,this.finishedWork=this.pingCache=this.current=this.pendingChildren=null,this.timeoutHandle=-1,this.callbackNode=this.pendingContext=this.context=null,this.callbackPriority=0,this.eventTimes=zl(0),this.expirationTimes=zl(-1),this.entangledLanes=this.finishedLanes=this.mutableReadLanes=this.expiredLanes=this.pingedLanes=this.suspendedLanes=this.pendingLanes=0,this.entanglements=zl(0),this.identifierPrefix=r,this.onRecoverableError=i,this.mutableSourceEagerHydrationData=null}function nu(e,t,n,r,i,o,l,u,a){return e=new Og(e,t,n,u,a),t===1?(t=1,o===!0&&(t|=8)):t=0,o=ht(3,null,null,t),e.current=o,o.stateNode=e,o.memoizedState={element:r,isDehydrated:n,cache:null,transitions:null,pendingSuspenseBoundaries:null},$a(o),e}function zg(e,t,n){var r=3<arguments.length&&arguments[3]!==void 0?arguments[3]:null;return{$$typeof:er,key:r==null?null:""+r,children:e,containerInfo:t,implementation:n}}function yp(e){if(!e)return bn;e=e._reactInternals;e:{if(Yn(e)!==e||e.tag!==1)throw Error(M(170));var t=e;do{switch(t.tag){case 3:t=t.stateNode.context;break e;case 1:if(et(t.type)){t=t.stateNode.__reactInternalMemoizedMergedChildContext;break e}}t=t.return}while(t!==null);throw Error(M(171))}if(e.tag===1){var n=e.type;if(et(n))return gf(e,n,t)}return t}function xp(e,t,n,r,i,o,l,u,a){return e=nu(n,r,!0,e,i,o,l,u,a),e.context=yp(null),n=e.current,r=Ke(),i=_n(n),o=Yt(r,i),o.callback=t??null,jn(n,o,i),e.current.lanes=i,Ti(e,i,r),tt(e,r),e}function yl(e,t,n,r){var i=t.current,o=Ke(),l=_n(i);return n=yp(n),t.context===null?t.context=n:t.pendingContext=n,t=Yt(o,l),t.payload={element:e},r=r===void 0?null:r,r!==null&&(t.callback=r),e=jn(i,t,l),e!==null&&(bt(e,i,l,o),mo(e,i,l)),l}function Zo(e){if(e=e.current,!e.child)return null;switch(e.child.tag){case 5:return e.child.stateNode;default:return e.child.stateNode}}function _c(e,t){if(e=e.memoizedState,e!==null&&e.dehydrated!==null){var n=e.retryLane;e.retryLane=n!==0&&n<t?n:t}}function ru(e,t){_c(e,t),(e=e.alternate)&&_c(e,t)}function Lg(){return null}var vp=typeof reportError=="function"?reportError:function(e){console.error(e)};function iu(e){this._internalRoot=e}xl.prototype.render=iu.prototype.render=function(e){var t=this._internalRoot;if(t===null)throw Error(M(409));yl(e,t,null,null)};xl.prototype.unmount=iu.prototype.unmount=function(){var e=this._internalRoot;if(e!==null){this._internalRoot=null;var t=e.containerInfo;Hn(function(){yl(null,e,null,null)}),t[Xt]=null}};function xl(e){this._internalRoot=e}xl.prototype.unstable_scheduleHydration=function(e){if(e){var t=Kd();e={blockedOn:null,target:e,priority:t};for(var n=0;n<fn.length&&t!==0&&t<fn[n].priority;n++);fn.splice(n,0,e),n===0&&Gd(e)}};function ou(e){return!(!e||e.nodeType!==1&&e.nodeType!==9&&e.nodeType!==11)}function vl(e){return!(!e||e.nodeType!==1&&e.nodeType!==9&&e.nodeType!==11&&(e.nodeType!==8||e.nodeValue!==" react-mount-point-unstable "))}function Ec(){}function Rg(e,t,n,r,i){if(i){if(typeof r=="function"){var o=r;r=function(){var d=Zo(l);o.call(d)}}var l=xp(t,r,e,0,null,!1,!1,"",Ec);return e._reactRootContainer=l,e[Xt]=l.current,hi(e.nodeType===8?e.parentNode:e),Hn(),l}for(;i=e.lastChild;)e.removeChild(i);if(typeof r=="function"){var u=r;r=function(){var d=Zo(a);u.call(d)}}var a=nu(e,0,!1,null,null,!1,!1,"",Ec);return e._reactRootContainer=a,e[Xt]=a.current,hi(e.nodeType===8?e.parentNode:e),Hn(function(){yl(t,a,n,r)}),a}function wl(e,t,n,r,i){var o=n._reactRootContainer;if(o){var l=o;if(typeof i=="function"){var u=i;i=function(){var a=Zo(l);u.call(a)}}yl(t,l,e,i)}else l=Rg(n,t,e,i,r);return Zo(l)}Qd=function(e){switch(e.tag){case 3:var t=e.stateNode;if(t.current.memoizedState.isDehydrated){var n=Xr(t.pendingLanes);n!==0&&(_a(t,n|1),tt(t,Se()),!(re&6)&&(Cr=Se()+500,Mn()))}break;case 13:Hn(function(){var r=Gt(e,1);if(r!==null){var i=Ke();bt(r,e,1,i)}}),ru(e,1)}};Ea=function(e){if(e.tag===13){var t=Gt(e,134217728);if(t!==null){var n=Ke();bt(t,e,134217728,n)}ru(e,134217728)}};Yd=function(e){if(e.tag===13){var t=_n(e),n=Gt(e,t);if(n!==null){var r=Ke();bt(n,e,t,r)}ru(e,t)}};Kd=function(){return ue};Xd=function(e,t){var n=ue;try{return ue=e,t()}finally{ue=n}};Ms=function(e,t,n){switch(t){case"input":if(Ss(e,n),t=n.name,n.type==="radio"&&t!=null){for(n=e;n.parentNode;)n=n.parentNode;for(n=n.querySelectorAll("input[name="+JSON.stringify(""+t)+'][type="radio"]'),t=0;t<n.length;t++){var r=n[t];if(r!==e&&r.form===e.form){var i=cl(r);if(!i)throw Error(M(90));Cd(r),Ss(r,i)}}}break;case"textarea":Td(e,n);break;case"select":t=n.value,t!=null&&pr(e,!!n.multiple,t,!1)}};Nd=Ja;Ad=Hn;var Ng={usingClientEntryPoint:!1,Events:[Mi,or,cl,Ld,Rd,Ja]},$r={findFiberByHostInstance:Rn,bundleType:0,version:"18.2.0",rendererPackageName:"react-dom"},Ag={bundleType:$r.bundleType,version:$r.version,rendererPackageName:$r.rendererPackageName,rendererConfig:$r.rendererConfig,overrideHookState:null,overrideHookStateDeletePath:null,overrideHookStateRenamePath:null,overrideProps:null,overridePropsDeletePath:null,overridePropsRenamePath:null,setErrorHandler:null,setSuspenseHandler:null,scheduleUpdate:null,currentDispatcherRef:Jt.ReactCurrentDispatcher,findHostInstanceByFiber:function(e){return e=$d(e),e===null?null:e.stateNode},findFiberByHostInstance:$r.findFiberByHostInstance||Lg,findHostInstancesForRefresh:null,scheduleRefresh:null,scheduleRoot:null,setRefreshHandler:null,getCurrentFiber:null,reconcilerVersion:"18.2.0-next-9e3b772b8-20220608"};if(typeof __REACT_DEVTOOLS_GLOBAL_HOOK__<"u"){var Ji=__REACT_DEVTOOLS_GLOBAL_HOOK__;if(!Ji.isDisabled&&Ji.supportsFiber)try{ll=Ji.inject(Ag),Dt=Ji}catch{}}at.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED=Ng;at.createPortal=function(e,t){var n=2<arguments.length&&arguments[2]!==void 0?arguments[2]:null;if(!ou(t))throw Error(M(200));return zg(e,t,null,n)};at.createRoot=function(e,t){if(!ou(e))throw Error(M(299));var n=!1,r="",i=vp;return t!=null&&(t.unstable_strictMode===!0&&(n=!0),t.identifierPrefix!==void 0&&(r=t.identifierPrefix),t.onRecoverableError!==void 0&&(i=t.onRecoverableError)),t=nu(e,1,!1,null,null,n,!1,r,i),e[Xt]=t.current,hi(e.nodeType===8?e.parentNode:e),new iu(t)};at.findDOMNode=function(e){if(e==null)return null;if(e.nodeType===1)return e;var t=e._reactInternals;if(t===void 0)throw typeof e.render=="function"?Error(M(188)):(e=Object.keys(e).join(","),Error(M(268,e)));return e=$d(t),e=e===null?null:e.stateNode,e};at.flushSync=function(e){return Hn(e)};at.hydrate=function(e,t,n){if(!vl(t))throw Error(M(200));return wl(null,e,t,!0,n)};at.hydrateRoot=function(e,t,n){if(!ou(e))throw Error(M(405));var r=n!=null&&n.hydratedSources||null,i=!1,o="",l=vp;if(n!=null&&(n.unstable_strictMode===!0&&(i=!0),n.identifierPrefix!==void 0&&(o=n.identifierPrefix),n.onRecoverableError!==void 0&&(l=n.onRecoverableError)),t=xp(t,null,e,1,n??null,i,!1,o,l),e[Xt]=t.current,hi(e),r)for(e=0;e<r.length;e++)n=r[e],i=n._getVersion,i=i(n._source),t.mutableSourceEagerHydrationData==null?t.mutableSourceEagerHydrationData=[n,i]:t.mutableSourceEagerHydrationData.push(n,i);return new xl(t)};at.render=function(e,t,n){if(!vl(t))throw Error(M(200));return wl(null,e,t,!1,n)};at.unmountComponentAtNode=function(e){if(!vl(e))throw Error(M(40));return e._reactRootContainer?(Hn(function(){wl(null,null,e,!1,function(){e._reactRootContainer=null,e[Xt]=null})}),!0):!1};at.unstable_batchedUpdates=Ja;at.unstable_renderSubtreeIntoContainer=function(e,t,n,r){if(!vl(n))throw Error(M(200));if(e==null||e._reactInternals===void 0)throw Error(M(38));return wl(e,t,n,!1,r)};at.version="18.2.0-next-9e3b772b8-20220608";function wp(){if(!(typeof __REACT_DEVTOOLS_GLOBAL_HOOK__>"u"||typeof __REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE!="function"))try{__REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE(wp)}catch(e){console.error(e)}}wp(),yd.exports=at;var lu=yd.exports;const Dg=il(lu);var Cc=lu;gs.createRoot=Cc.createRoot,gs.hydrateRoot=Cc.hydrateRoot;const ql="/healthy-management-project/assets/olga_picture1x-48yp0Cvc.webp",Ig="/healthy-management-project/assets/olga_picture@2x-dFelWgxd.jpg",$g="/healthy-management-project/assets/olga_picture1x-ohcXIDw6.jpg",Fg="/healthy-management-project/assets/mob_olga_picture@2x-jz3O2U-O.jpg",Vg="/healthy-management-project/assets/mob_olga_picture1x-PQXysebb.jpg",Ug="/healthy-management-project/assets/mob_olga_picture1x-YL2VUwPK.webp",Y="/healthy-management-project/assets/sprite-gBYbMuxV.svg";function ua(){return ua=Object.assign?Object.assign.bind():function(e){for(var t=1;t<arguments.length;t++){var n=arguments[t];for(var r in n)Object.prototype.hasOwnProperty.call(n,r)&&(e[r]=n[r])}return e},ua.apply(this,arguments)}function kp(e){var t=Object.create(null);return function(n){return t[n]===void 0&&(t[n]=e(n)),t[n]}}var Wg=/^((children|dangerouslySetInnerHTML|key|ref|autoFocus|defaultValue|defaultChecked|innerHTML|suppressContentEditableWarning|suppressHydrationWarning|valueLink|abbr|accept|acceptCharset|accessKey|action|allow|allowUserMedia|allowPaymentRequest|allowFullScreen|allowTransparency|alt|async|autoComplete|autoPlay|capture|cellPadding|cellSpacing|challenge|charSet|checked|cite|classID|className|cols|colSpan|content|contentEditable|contextMenu|controls|controlsList|coords|crossOrigin|data|dateTime|decoding|default|defer|dir|disabled|disablePictureInPicture|download|draggable|encType|enterKeyHint|form|formAction|formEncType|formMethod|formNoValidate|formTarget|frameBorder|headers|height|hidden|high|href|hrefLang|htmlFor|httpEquiv|id|inputMode|integrity|is|keyParams|keyType|kind|label|lang|list|loading|loop|low|marginHeight|marginWidth|max|maxLength|media|mediaGroup|method|min|minLength|multiple|muted|name|nonce|noValidate|open|optimum|pattern|placeholder|playsInline|poster|preload|profile|radioGroup|readOnly|referrerPolicy|rel|required|reversed|role|rows|rowSpan|sandbox|scope|scoped|scrolling|seamless|selected|shape|size|sizes|slot|span|spellCheck|src|srcDoc|srcLang|srcSet|start|step|style|summary|tabIndex|target|title|translate|type|useMap|value|width|wmode|wrap|about|datatype|inlist|prefix|property|resource|typeof|vocab|autoCapitalize|autoCorrect|autoSave|color|incremental|fallback|inert|itemProp|itemScope|itemType|itemID|itemRef|on|option|results|security|unselectable|accentHeight|accumulate|additive|alignmentBaseline|allowReorder|alphabetic|amplitude|arabicForm|ascent|attributeName|attributeType|autoReverse|azimuth|baseFrequency|baselineShift|baseProfile|bbox|begin|bias|by|calcMode|capHeight|clip|clipPathUnits|clipPath|clipRule|colorInterpolation|colorInterpolationFilters|colorProfile|colorRendering|contentScriptType|contentStyleType|cursor|cx|cy|d|decelerate|descent|diffuseConstant|direction|display|divisor|dominantBaseline|dur|dx|dy|edgeMode|elevation|enableBackground|end|exponent|externalResourcesRequired|fill|fillOpacity|fillRule|filter|filterRes|filterUnits|floodColor|floodOpacity|focusable|fontFamily|fontSize|fontSizeAdjust|fontStretch|fontStyle|fontVariant|fontWeight|format|from|fr|fx|fy|g1|g2|glyphName|glyphOrientationHorizontal|glyphOrientationVertical|glyphRef|gradientTransform|gradientUnits|hanging|horizAdvX|horizOriginX|ideographic|imageRendering|in|in2|intercept|k|k1|k2|k3|k4|kernelMatrix|kernelUnitLength|kerning|keyPoints|keySplines|keyTimes|lengthAdjust|letterSpacing|lightingColor|limitingConeAngle|local|markerEnd|markerMid|markerStart|markerHeight|markerUnits|markerWidth|mask|maskContentUnits|maskUnits|mathematical|mode|numOctaves|offset|opacity|operator|order|orient|orientation|origin|overflow|overlinePosition|overlineThickness|panose1|paintOrder|pathLength|patternContentUnits|patternTransform|patternUnits|pointerEvents|points|pointsAtX|pointsAtY|pointsAtZ|preserveAlpha|preserveAspectRatio|primitiveUnits|r|radius|refX|refY|renderingIntent|repeatCount|repeatDur|requiredExtensions|requiredFeatures|restart|result|rotate|rx|ry|scale|seed|shapeRendering|slope|spacing|specularConstant|specularExponent|speed|spreadMethod|startOffset|stdDeviation|stemh|stemv|stitchTiles|stopColor|stopOpacity|strikethroughPosition|strikethroughThickness|string|stroke|strokeDasharray|strokeDashoffset|strokeLinecap|strokeLinejoin|strokeMiterlimit|strokeOpacity|strokeWidth|surfaceScale|systemLanguage|tableValues|targetX|targetY|textAnchor|textDecoration|textRendering|textLength|to|transform|u1|u2|underlinePosition|underlineThickness|unicode|unicodeBidi|unicodeRange|unitsPerEm|vAlphabetic|vHanging|vIdeographic|vMathematical|values|vectorEffect|version|vertAdvY|vertOriginX|vertOriginY|viewBox|viewTarget|visibility|widths|wordSpacing|writingMode|x|xHeight|x1|x2|xChannelSelector|xlinkActuate|xlinkArcrole|xlinkHref|xlinkRole|xlinkShow|xlinkTitle|xlinkType|xmlBase|xmlns|xmlnsXlink|xmlLang|xmlSpace|y|y1|y2|yChannelSelector|z|zoomAndPan|for|class|autofocus)|(([Dd][Aa][Tt][Aa]|[Aa][Rr][Ii][Aa]|x)-.*))$/,Bg=kp(function(e){return Wg.test(e)||e.charCodeAt(0)===111&&e.charCodeAt(1)===110&&e.charCodeAt(2)<91});function Hg(e){if(e.sheet)return e.sheet;for(var t=0;t<document.styleSheets.length;t++)if(document.styleSheets[t].ownerNode===e)return document.styleSheets[t]}function Qg(e){var t=document.createElement("style");return t.setAttribute("data-emotion",e.key),e.nonce!==void 0&&t.setAttribute("nonce",e.nonce),t.appendChild(document.createTextNode("")),t.setAttribute("data-s",""),t}var Yg=function(){function e(n){var r=this;this._insertTag=function(i){var o;r.tags.length===0?r.insertionPoint?o=r.insertionPoint.nextSibling:r.prepend?o=r.container.firstChild:o=r.before:o=r.tags[r.tags.length-1].nextSibling,r.container.insertBefore(i,o),r.tags.push(i)},this.isSpeedy=n.speedy===void 0?!0:n.speedy,this.tags=[],this.ctr=0,this.nonce=n.nonce,this.key=n.key,this.container=n.container,this.prepend=n.prepend,this.insertionPoint=n.insertionPoint,this.before=null}var t=e.prototype;return t.hydrate=function(r){r.forEach(this._insertTag)},t.insert=function(r){this.ctr%(this.isSpeedy?65e3:1)===0&&this._insertTag(Qg(this));var i=this.tags[this.tags.length-1];if(this.isSpeedy){var o=Hg(i);try{o.insertRule(r,o.cssRules.length)}catch{}}else i.appendChild(document.createTextNode(r));this.ctr++},t.flush=function(){this.tags.forEach(function(r){return r.parentNode&&r.parentNode.removeChild(r)}),this.tags=[],this.ctr=0},e}(),We="-ms-",Jo="-moz-",ie="-webkit-",jp="comm",su="rule",au="decl",Kg="@import",Sp="@keyframes",Xg="@layer",Gg=Math.abs,kl=String.fromCharCode,Zg=Object.assign;function Jg(e,t){return De(e,0)^45?(((t<<2^De(e,0))<<2^De(e,1))<<2^De(e,2))<<2^De(e,3):0}function _p(e){return e.trim()}function qg(e,t){return(e=t.exec(e))?e[0]:e}function oe(e,t,n){return e.replace(t,n)}function ca(e,t){return e.indexOf(t)}function De(e,t){return e.charCodeAt(t)|0}function Si(e,t,n){return e.slice(t,n)}function Lt(e){return e.length}function uu(e){return e.length}function qi(e,t){return t.push(e),e}function ey(e,t){return e.map(t).join("")}var jl=1,br=1,Ep=0,nt=0,Ce=0,Or="";function Sl(e,t,n,r,i,o,l){return{value:e,root:t,parent:n,type:r,props:i,children:o,line:jl,column:br,length:l,return:""}}function Fr(e,t){return Zg(Sl("",null,null,"",null,null,0),e,{length:-e.length},t)}function ty(){return Ce}function ny(){return Ce=nt>0?De(Or,--nt):0,br--,Ce===10&&(br=1,jl--),Ce}function lt(){return Ce=nt<Ep?De(Or,nt++):0,br++,Ce===10&&(br=1,jl++),Ce}function $t(){return De(Or,nt)}function jo(){return nt}function zi(e,t){return Si(Or,e,t)}function _i(e){switch(e){case 0:case 9:case 10:case 13:case 32:return 5;case 33:case 43:case 44:case 47:case 62:case 64:case 126:case 59:case 123:case 125:return 4;case 58:return 3;case 34:case 39:case 40:case 91:return 2;case 41:case 93:return 1}return 0}function Cp(e){return jl=br=1,Ep=Lt(Or=e),nt=0,[]}function bp(e){return Or="",e}function So(e){return _p(zi(nt-1,da(e===91?e+2:e===40?e+1:e)))}function ry(e){for(;(Ce=$t())&&Ce<33;)lt();return _i(e)>2||_i(Ce)>3?"":" "}function iy(e,t){for(;--t&&lt()&&!(Ce<48||Ce>102||Ce>57&&Ce<65||Ce>70&&Ce<97););return zi(e,jo()+(t<6&&$t()==32&&lt()==32))}function da(e){for(;lt();)switch(Ce){case e:return nt;case 34:case 39:e!==34&&e!==39&&da(Ce);break;case 40:e===41&&da(e);break;case 92:lt();break}return nt}function oy(e,t){for(;lt()&&e+Ce!==57;)if(e+Ce===84&&$t()===47)break;return"/*"+zi(t,nt-1)+"*"+kl(e===47?e:lt())}function ly(e){for(;!_i($t());)lt();return zi(e,nt)}function sy(e){return bp(_o("",null,null,null,[""],e=Cp(e),0,[0],e))}function _o(e,t,n,r,i,o,l,u,a){for(var d=0,y=0,g=l,h=0,w=0,x=0,k=1,T=1,f=1,c=0,p="",j=i,E=o,b=r,C=p;T;)switch(x=c,c=lt()){case 40:if(x!=108&&De(C,g-1)==58){ca(C+=oe(So(c),"&","&\f"),"&\f")!=-1&&(f=-1);break}case 34:case 39:case 91:C+=So(c);break;case 9:case 10:case 13:case 32:C+=ry(x);break;case 92:C+=iy(jo()-1,7);continue;case 47:switch($t()){case 42:case 47:qi(ay(oy(lt(),jo()),t,n),a);break;default:C+="/"}break;case 123*k:u[d++]=Lt(C)*f;case 125*k:case 59:case 0:switch(c){case 0:case 125:T=0;case 59+y:f==-1&&(C=oe(C,/\f/g,"")),w>0&&Lt(C)-g&&qi(w>32?Tc(C+";",r,n,g-1):Tc(oe(C," ","")+";",r,n,g-2),a);break;case 59:C+=";";default:if(qi(b=bc(C,t,n,d,y,i,u,p,j=[],E=[],g),o),c===123)if(y===0)_o(C,t,b,b,j,o,g,u,E);else switch(h===99&&De(C,3)===110?100:h){case 100:case 108:case 109:case 115:_o(e,b,b,r&&qi(bc(e,b,b,0,0,i,u,p,i,j=[],g),E),i,E,g,u,r?j:E);break;default:_o(C,b,b,b,[""],E,0,u,E)}}d=y=w=0,k=f=1,p=C="",g=l;break;case 58:g=1+Lt(C),w=x;default:if(k<1){if(c==123)--k;else if(c==125&&k++==0&&ny()==125)continue}switch(C+=kl(c),c*k){case 38:f=y>0?1:(C+="\f",-1);break;case 44:u[d++]=(Lt(C)-1)*f,f=1;break;case 64:$t()===45&&(C+=So(lt())),h=$t(),y=g=Lt(p=C+=ly(jo())),c++;break;case 45:x===45&&Lt(C)==2&&(k=0)}}return o}function bc(e,t,n,r,i,o,l,u,a,d,y){for(var g=i-1,h=i===0?o:[""],w=uu(h),x=0,k=0,T=0;x<r;++x)for(var f=0,c=Si(e,g+1,g=Gg(k=l[x])),p=e;f<w;++f)(p=_p(k>0?h[f]+" "+c:oe(c,/&\f/g,h[f])))&&(a[T++]=p);return Sl(e,t,n,i===0?su:u,a,d,y)}function ay(e,t,n){return Sl(e,t,n,jp,kl(ty()),Si(e,2,-2),0)}function Tc(e,t,n,r){return Sl(e,t,n,au,Si(e,0,r),Si(e,r+1,-1),r)}function vr(e,t){for(var n="",r=uu(e),i=0;i<r;i++)n+=t(e[i],i,e,t)||"";return n}function uy(e,t,n,r){switch(e.type){case Xg:if(e.children.length)break;case Kg:case au:return e.return=e.return||e.value;case jp:return"";case Sp:return e.return=e.value+"{"+vr(e.children,r)+"}";case su:e.value=e.props.join(",")}return Lt(n=vr(e.children,r))?e.return=e.value+"{"+n+"}":""}function cy(e){var t=uu(e);return function(n,r,i,o){for(var l="",u=0;u<t;u++)l+=e[u](n,r,i,o)||"";return l}}function dy(e){return function(t){t.root||(t=t.return)&&e(t)}}var fy=function(t,n,r){for(var i=0,o=0;i=o,o=$t(),i===38&&o===12&&(n[r]=1),!_i(o);)lt();return zi(t,nt)},py=function(t,n){var r=-1,i=44;do switch(_i(i)){case 0:i===38&&$t()===12&&(n[r]=1),t[r]+=fy(nt-1,n,r);break;case 2:t[r]+=So(i);break;case 4:if(i===44){t[++r]=$t()===58?"&\f":"",n[r]=t[r].length;break}default:t[r]+=kl(i)}while(i=lt());return t},hy=function(t,n){return bp(py(Cp(t),n))},Pc=new WeakMap,my=function(t){if(!(t.type!=="rule"||!t.parent||t.length<1)){for(var n=t.value,r=t.parent,i=t.column===r.column&&t.line===r.line;r.type!=="rule";)if(r=r.parent,!r)return;if(!(t.props.length===1&&n.charCodeAt(0)!==58&&!Pc.get(r))&&!i){Pc.set(t,!0);for(var o=[],l=hy(n,o),u=r.props,a=0,d=0;a<l.length;a++)for(var y=0;y<u.length;y++,d++)t.props[d]=o[a]?l[a].replace(/&\f/g,u[y]):u[y]+" "+l[a]}}},gy=function(t){if(t.type==="decl"){var n=t.value;n.charCodeAt(0)===108&&n.charCodeAt(2)===98&&(t.return="",t.value="")}};function Tp(e,t){switch(Jg(e,t)){case 5103:return ie+"print-"+e+e;case 5737:case 4201:case 3177:case 3433:case 1641:case 4457:case 2921:case 5572:case 6356:case 5844:case 3191:case 6645:case 3005:case 6391:case 5879:case 5623:case 6135:case 4599:case 4855:case 4215:case 6389:case 5109:case 5365:case 5621:case 3829:return ie+e+e;case 5349:case 4246:case 4810:case 6968:case 2756:return ie+e+Jo+e+We+e+e;case 6828:case 4268:return ie+e+We+e+e;case 6165:return ie+e+We+"flex-"+e+e;case 5187:return ie+e+oe(e,/(\w+).+(:[^]+)/,ie+"box-$1$2"+We+"flex-$1$2")+e;case 5443:return ie+e+We+"flex-item-"+oe(e,/flex-|-self/,"")+e;case 4675:return ie+e+We+"flex-line-pack"+oe(e,/align-content|flex-|-self/,"")+e;case 5548:return ie+e+We+oe(e,"shrink","negative")+e;case 5292:return ie+e+We+oe(e,"basis","preferred-size")+e;case 6060:return ie+"box-"+oe(e,"-grow","")+ie+e+We+oe(e,"grow","positive")+e;case 4554:return ie+oe(e,/([^-])(transform)/g,"$1"+ie+"$2")+e;case 6187:return oe(oe(oe(e,/(zoom-|grab)/,ie+"$1"),/(image-set)/,ie+"$1"),e,"")+e;case 5495:case 3959:return oe(e,/(image-set\([^]*)/,ie+"$1$`$1");case 4968:return oe(oe(e,/(.+:)(flex-)?(.*)/,ie+"box-pack:$3"+We+"flex-pack:$3"),/s.+-b[^;]+/,"justify")+ie+e+e;case 4095:case 3583:case 4068:case 2532:return oe(e,/(.+)-inline(.+)/,ie+"$1$2")+e;case 8116:case 7059:case 5753:case 5535:case 5445:case 5701:case 4933:case 4677:case 5533:case 5789:case 5021:case 4765:if(Lt(e)-1-t>6)switch(De(e,t+1)){case 109:if(De(e,t+4)!==45)break;case 102:return oe(e,/(.+:)(.+)-([^]+)/,"$1"+ie+"$2-$3$1"+Jo+(De(e,t+3)==108?"$3":"$2-$3"))+e;case 115:return~ca(e,"stretch")?Tp(oe(e,"stretch","fill-available"),t)+e:e}break;case 4949:if(De(e,t+1)!==115)break;case 6444:switch(De(e,Lt(e)-3-(~ca(e,"!important")&&10))){case 107:return oe(e,":",":"+ie)+e;case 101:return oe(e,/(.+:)([^;!]+)(;|!.+)?/,"$1"+ie+(De(e,14)===45?"inline-":"")+"box$3$1"+ie+"$2$3$1"+We+"$2box$3")+e}break;case 5936:switch(De(e,t+11)){case 114:return ie+e+We+oe(e,/[svh]\w+-[tblr]{2}/,"tb")+e;case 108:return ie+e+We+oe(e,/[svh]\w+-[tblr]{2}/,"tb-rl")+e;case 45:return ie+e+We+oe(e,/[svh]\w+-[tblr]{2}/,"lr")+e}return ie+e+We+e+e}return e}var yy=function(t,n,r,i){if(t.length>-1&&!t.return)switch(t.type){case au:t.return=Tp(t.value,t.length);break;case Sp:return vr([Fr(t,{value:oe(t.value,"@","@"+ie)})],i);case su:if(t.length)return ey(t.props,function(o){switch(qg(o,/(::plac\w+|:read-\w+)/)){case":read-only":case":read-write":return vr([Fr(t,{props:[oe(o,/:(read-\w+)/,":"+Jo+"$1")]})],i);case"::placeholder":return vr([Fr(t,{props:[oe(o,/:(plac\w+)/,":"+ie+"input-$1")]}),Fr(t,{props:[oe(o,/:(plac\w+)/,":"+Jo+"$1")]}),Fr(t,{props:[oe(o,/:(plac\w+)/,We+"input-$1")]})],i)}return""})}},xy=[yy],vy=function(t){var n=t.key;if(n==="css"){var r=document.querySelectorAll("style[data-emotion]:not([data-s])");Array.prototype.forEach.call(r,function(k){var T=k.getAttribute("data-emotion");T.indexOf(" ")!==-1&&(document.head.appendChild(k),k.setAttribute("data-s",""))})}var i=t.stylisPlugins||xy,o={},l,u=[];l=t.container||document.head,Array.prototype.forEach.call(document.querySelectorAll('style[data-emotion^="'+n+' "]'),function(k){for(var T=k.getAttribute("data-emotion").split(" "),f=1;f<T.length;f++)o[T[f]]=!0;u.push(k)});var a,d=[my,gy];{var y,g=[uy,dy(function(k){y.insert(k)})],h=cy(d.concat(i,g)),w=function(T){return vr(sy(T),h)};a=function(T,f,c,p){y=c,w(T?T+"{"+f.styles+"}":f.styles),p&&(x.inserted[f.name]=!0)}}var x={key:n,sheet:new Yg({key:n,container:l,nonce:t.nonce,speedy:t.speedy,prepend:t.prepend,insertionPoint:t.insertionPoint}),nonce:t.nonce,inserted:o,registered:{},insert:a};return x.sheet.hydrate(u),x},wy=!0;function ky(e,t,n){var r="";return n.split(" ").forEach(function(i){e[i]!==void 0?t.push(e[i]+";"):r+=i+" "}),r}var Pp=function(t,n,r){var i=t.key+"-"+n.name;(r===!1||wy===!1)&&t.registered[i]===void 0&&(t.registered[i]=n.styles)},jy=function(t,n,r){Pp(t,n,r);var i=t.key+"-"+n.name;if(t.inserted[n.name]===void 0){var o=n;do t.insert(n===o?"."+i:"",o,t.sheet,!0),o=o.next;while(o!==void 0)}};function Sy(e){for(var t=0,n,r=0,i=e.length;i>=4;++r,i-=4)n=e.charCodeAt(r)&255|(e.charCodeAt(++r)&255)<<8|(e.charCodeAt(++r)&255)<<16|(e.charCodeAt(++r)&255)<<24,n=(n&65535)*1540483477+((n>>>16)*59797<<16),n^=n>>>24,t=(n&65535)*1540483477+((n>>>16)*59797<<16)^(t&65535)*1540483477+((t>>>16)*59797<<16);switch(i){case 3:t^=(e.charCodeAt(r+2)&255)<<16;case 2:t^=(e.charCodeAt(r+1)&255)<<8;case 1:t^=e.charCodeAt(r)&255,t=(t&65535)*1540483477+((t>>>16)*59797<<16)}return t^=t>>>13,t=(t&65535)*1540483477+((t>>>16)*59797<<16),((t^t>>>15)>>>0).toString(36)}var _y={animationIterationCount:1,aspectRatio:1,borderImageOutset:1,borderImageSlice:1,borderImageWidth:1,boxFlex:1,boxFlexGroup:1,boxOrdinalGroup:1,columnCount:1,columns:1,flex:1,flexGrow:1,flexPositive:1,flexShrink:1,flexNegative:1,flexOrder:1,gridRow:1,gridRowEnd:1,gridRowSpan:1,gridRowStart:1,gridColumn:1,gridColumnEnd:1,gridColumnSpan:1,gridColumnStart:1,msGridRow:1,msGridRowSpan:1,msGridColumn:1,msGridColumnSpan:1,fontWeight:1,lineHeight:1,opacity:1,order:1,orphans:1,tabSize:1,widows:1,zIndex:1,zoom:1,WebkitLineClamp:1,fillOpacity:1,floodOpacity:1,stopOpacity:1,strokeDasharray:1,strokeDashoffset:1,strokeMiterlimit:1,strokeOpacity:1,strokeWidth:1},Ey=/[A-Z]|^ms/g,Cy=/_EMO_([^_]+?)_([^]*?)_EMO_/g,Mp=function(t){return t.charCodeAt(1)===45},Mc=function(t){return t!=null&&typeof t!="boolean"},es=kp(function(e){return Mp(e)?e:e.replace(Ey,"-$&").toLowerCase()}),Oc=function(t,n){switch(t){case"animation":case"animationName":if(typeof n=="string")return n.replace(Cy,function(r,i,o){return Rt={name:i,styles:o,next:Rt},i})}return _y[t]!==1&&!Mp(t)&&typeof n=="number"&&n!==0?n+"px":n};function Ei(e,t,n){if(n==null)return"";if(n.__emotion_styles!==void 0)return n;switch(typeof n){case"boolean":return"";case"object":{if(n.anim===1)return Rt={name:n.name,styles:n.styles,next:Rt},n.name;if(n.styles!==void 0){var r=n.next;if(r!==void 0)for(;r!==void 0;)Rt={name:r.name,styles:r.styles,next:Rt},r=r.next;var i=n.styles+";";return i}return by(e,t,n)}case"function":{if(e!==void 0){var o=Rt,l=n(e);return Rt=o,Ei(e,t,l)}break}}if(t==null)return n;var u=t[n];return u!==void 0?u:n}function by(e,t,n){var r="";if(Array.isArray(n))for(var i=0;i<n.length;i++)r+=Ei(e,t,n[i])+";";else for(var o in n){var l=n[o];if(typeof l!="object")t!=null&&t[l]!==void 0?r+=o+"{"+t[l]+"}":Mc(l)&&(r+=es(o)+":"+Oc(o,l)+";");else if(Array.isArray(l)&&typeof l[0]=="string"&&(t==null||t[l[0]]===void 0))for(var u=0;u<l.length;u++)Mc(l[u])&&(r+=es(o)+":"+Oc(o,l[u])+";");else{var a=Ei(e,t,l);switch(o){case"animation":case"animationName":{r+=es(o)+":"+a+";";break}default:r+=o+"{"+a+"}"}}}return r}var zc=/label:\s*([^\s;\n{]+)\s*(;|$)/g,Rt,Ty=function(t,n,r){if(t.length===1&&typeof t[0]=="object"&&t[0]!==null&&t[0].styles!==void 0)return t[0];var i=!0,o="";Rt=void 0;var l=t[0];l==null||l.raw===void 0?(i=!1,o+=Ei(r,n,l)):o+=l[0];for(var u=1;u<t.length;u++)o+=Ei(r,n,t[u]),i&&(o+=l[u]);zc.lastIndex=0;for(var a="",d;(d=zc.exec(o))!==null;)a+="-"+d[1];var y=Sy(o)+a;return{name:y,styles:o,next:Rt}},Py=function(t){return t()},My=wu.useInsertionEffect?wu.useInsertionEffect:!1,Oy=My||Py,Op=se.createContext(typeof HTMLElement<"u"?vy({key:"css"}):null);Op.Provider;var zy=function(t){return se.forwardRef(function(n,r){var i=se.useContext(Op);return t(n,i,r)})},Ly=se.createContext({}),Ry=Bg,Ny=function(t){return t!=="theme"},Lc=function(t){return typeof t=="string"&&t.charCodeAt(0)>96?Ry:Ny},Rc=function(t,n,r){var i;if(n){var o=n.shouldForwardProp;i=t.__emotion_forwardProp&&o?function(l){return t.__emotion_forwardProp(l)&&o(l)}:o}return typeof i!="function"&&r&&(i=t.__emotion_forwardProp),i},Ay=function(t){var n=t.cache,r=t.serialized,i=t.isStringTag;return Pp(n,r,i),Oy(function(){return jy(n,r,i)}),null},Dy=function e(t,n){var r=t.__emotion_real===t,i=r&&t.__emotion_base||t,o,l;n!==void 0&&(o=n.label,l=n.target);var u=Rc(t,n,r),a=u||Lc(i),d=!a("as");return function(){var y=arguments,g=r&&t.__emotion_styles!==void 0?t.__emotion_styles.slice(0):[];if(o!==void 0&&g.push("label:"+o+";"),y[0]==null||y[0].raw===void 0)g.push.apply(g,y);else{g.push(y[0][0]);for(var h=y.length,w=1;w<h;w++)g.push(y[w],y[0][w])}var x=zy(function(k,T,f){var c=d&&k.as||i,p="",j=[],E=k;if(k.theme==null){E={};for(var b in k)E[b]=k[b];E.theme=se.useContext(Ly)}typeof k.className=="string"?p=ky(T.registered,j,k.className):k.className!=null&&(p=k.className+" ");var C=Ty(g.concat(j),T.registered,E);p+=T.key+"-"+C.name,l!==void 0&&(p+=" "+l);var L=d&&u===void 0?Lc(c):a,P={};for(var R in k)d&&R==="as"||L(R)&&(P[R]=k[R]);return P.className=p,P.ref=f,se.createElement(se.Fragment,null,se.createElement(Ay,{cache:T,serialized:C,isStringTag:typeof c=="string"}),se.createElement(c,P))});return x.displayName=o!==void 0?o:"Styled("+(typeof i=="string"?i:i.displayName||i.name||"Component")+")",x.defaultProps=t.defaultProps,x.__emotion_real=x,x.__emotion_base=i,x.__emotion_styles=g,x.__emotion_forwardProp=u,Object.defineProperty(x,"toString",{value:function(){return"."+l}}),x.withComponent=function(k,T){return e(k,ua({},n,T,{shouldForwardProp:Rc(x,T,!0)})).apply(void 0,g)},x}},Iy=["a","abbr","address","area","article","aside","audio","b","base","bdi","bdo","big","blockquote","body","br","button","canvas","caption","cite","code","col","colgroup","data","datalist","dd","del","details","dfn","dialog","div","dl","dt","em","embed","fieldset","figcaption","figure","footer","form","h1","h2","h3","h4","h5","h6","head","header","hgroup","hr","html","i","iframe","img","input","ins","kbd","keygen","label","legend","li","link","main","map","mark","marquee","menu","menuitem","meta","meter","nav","noscript","object","ol","optgroup","option","output","p","param","picture","pre","progress","q","rp","rt","ruby","s","samp","script","section","select","small","source","span","strong","style","sub","summary","sup","table","tbody","td","textarea","tfoot","th","thead","time","title","tr","track","u","ul","var","video","wbr","circle","clipPath","defs","ellipse","foreignObject","g","image","line","linearGradient","mask","path","pattern","polygon","polyline","radialGradient","rect","stop","svg","text","tspan"],S=Dy.bind();Iy.forEach(function(e){S[e]=S(e)});const $y=S.section`
  max-width: 375px;
  margin-left: auto;
  margin-right: auto;
  padding: 24px;

  @media screen and (min-width: 768px) {
    max-width: 1920px;
    margin-left: auto;
    margin-right: auto;
    padding: 80px 120px;
  }
`,Fy=S.h2`
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
`,Vy=S.div`
  display: flex;
  flex-direction: column;
  gap: 24px;

  @media screen and (min-width: 768px) {
    display: flex;
    flex-direction: row;
    gap: 24px;
  }
`,Uy=S.div`
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
`,Wy=S.h3`
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
`,By=S.p`
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
`,On=S.li`
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
`,Hy=S.ul`
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
`,ts=S.a`
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
`,ns=S.svg`
  margin-left: 10px;
`,Qy=S.div`
  // width: calc((100% - 24px) / 2);
  max-width: 327px;
  border-radius: 16px;

  @media screen and (min-width: 768px) {
    // width: calc((100% - 24px) / 2);
    max-width: 828px;
    border-radius: 16px;
  }
`,Yy=()=>s.jsx($y,{children:s.jsxs("div",{children:[s.jsx(Fy,{children:"Про мене"}),s.jsxs(Vy,{children:[s.jsx(Qy,{children:s.jsxs("picture",{children:[s.jsx("source",{srcSet:`${ql} 2x, ${ql} 1x`,media:"(min-width: 768px)",type:"image/webp"}),s.jsx("source",{srcSet:`${Ig} 2x, ${$g} 1x`,media:"(min-width: 768px)",type:"image/png"}),s.jsx("source",{srcSet:`${Ug}`,media:"(min-width: 375px)",type:"image/webp"}),s.jsx("source",{srcSet:`${Fg} 2x, ${Vg} 1x`,media:"(min-width: 375px)",type:"image/png"}),s.jsx("img",{src:ql,alt:"Ольга Поліщук",width:"828px"})]})}),s.jsxs(Uy,{children:[s.jsx(Wy,{children:"Ольга Поліщук"}),s.jsx(By,{children:"CEO and Founder студії стратегічного розвитку"}),s.jsxs("ul",{children:[s.jsx(On,{children:"MBA Healthcare management"}),s.jsx(On,{children:"Викладачка медичного маркетингу Бізнес-школа УКУ (LvBS)"}),s.jsx(On,{children:`Експертка в "Центр Розвитку Громадського Здоров'я УКУ"`}),s.jsx(On,{children:"Бізнес-консультантка, стратег з медичного маркетингу"}),s.jsx(On,{children:'Керівниця проєкту "Стетоскоп" - телеграм канал про медичний менеджмент та маркетингу'}),s.jsx(On,{children:"Більше 18 років досвіду в маркетингу та комунікаціях, з них більше 10 років досвіду в медичному та фармацевтичному бізнесі на керівних посадах"}),s.jsx(On,{children:"Використання принципів доказової медицини"})]}),s.jsxs(Hy,{children:[s.jsx("li",{children:s.jsxs(ts,{href:"https://www.linkedin.com/in/olga-polishchuk-83362140/",target:"_blank",rel:"noopener noreferrer",children:["LinkedIn",s.jsx(ns,{width:"24",height:"24",children:s.jsx("use",{href:`${Y}#icon-arrow-up-right`})})]})}),s.jsx("li",{children:s.jsxs(ts,{href:"https://www.facebook.com/olga.polishchuk.14",target:"_blank",rel:"noopener noreferrer",children:["Facebook",s.jsx(ns,{width:"24",height:"24",children:s.jsx("use",{href:`${Y}#icon-arrow-up-right`})})]})}),s.jsx("li",{children:s.jsxs(ts,{href:"https://www.instagram.com/olga_healthm/",target:"_blank",rel:"noopener noreferrer",children:["Instagram",s.jsx(ns,{width:"24",height:"24",children:s.jsx("use",{href:`${Y}#icon-arrow-up-right`})})]})})]})]})]})]})}),Ky=S.section`
  max-width: 375px;
  margin-left: auto;
  margin-right: auto;
  padding: 40px 24px;

  @media screen and (min-width: 768px) {
    max-width: 1920px;
    margin-left: auto;
    margin-right: auto;
    padding: 80px 120px;
  }
`,Xy=S.h2`
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
`,Gy=S.div`
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
`,Zy=S.p`
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
`,Jy=S.p`
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
`,Nc=S.div`
  display: flex;
  gap: 16px;
  align-items: center;
  margin-bottom: 16px;
`,qy=S.div`
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
`,ex=S.h4`
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
`,tx=S.div`
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
`,nx=S.h4`
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
`,rx=S.p`
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
`,ix=S.svg`
  fill: var(--primary-bluedark, #1b3641);
  border-radius: 100px;
  background: rgba(27, 54, 65, 0.2);
  width: 32px;
  height: 32px;
`,ox=S.svg`
  fill: var(--background-white, #fcfcfc);
  border-radius: 100px;
  background: rgba(244, 244, 246, 0.2);
  width: 32px;
  height: 32px;
`,lx=()=>s.jsxs(Ky,{id:"aboutUs",children:[s.jsx(Xy,{children:"Про студію"}),s.jsxs(Gy,{children:[s.jsx("div",{children:s.jsx(Zy,{children:"Студія стратегічного розвитку медичних брендів «Healthy management» надає послуги медичного менеджменту, медичного маркетингу, консалтингу бізнес-процесів та створення стратегій здоров’я для підприємств та бізнесу. Ми співпрацюємо з медичними закладами, лікарями, власниками, керівниками та створюємо спільні стратегії та дії для ефективного просування та розвитку проєктів, використовуючи комплексний підхід"})}),s.jsxs(tx,{children:[s.jsxs(Nc,{children:[s.jsx(ox,{children:s.jsx("use",{href:`${Y}#icon-star`})}),s.jsx(nx,{children:"Наша місія"})]}),s.jsx(rx,{children:"Будуємо ефективні стратегії по управлінню здоров’ям та створюємо продуктивні дії для популяризації здорового менеджменту"})]}),s.jsxs(qy,{children:[s.jsxs(Nc,{children:[s.jsx(ix,{children:s.jsx("use",{href:`${Y}#icon-star`})}),s.jsx(ex,{children:"Наші цінності"})]}),s.jsx(Jy,{children:"Повага, довіра, партнерство та експертність. Будуємо нову культуру управління здоровим менеджментом у медичній галузі"})]})]})]}),sx=S.section`
  padding-top: 80px;
  padding-bottom: 80px;
`,ax=S.div`
  width: 100%;
  border-radius: 16px;
  padding: 80px;
  background-color: var(--background-bluedark);
`,ux=S.h2`
  margin-bottom: 40px;
  font-size: 48px;
  font-weight: 600;
  line-height: 1.17;
  color: var(--system-default-10);

  & span {
    color: var(--primary-yellow);
  }
`,cx=S.ul`
  display: flex;
  justify-content: space-between;
  gap: 24px;
  padding: 24px 0;
`,dx=S.li`
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
`,fx=[{id:1,tool:"Матриця стейкхолдерів"},{id:2,tool:"SWOT аналіз"},{id:3,tool:"Bussines model canvas"},{id:4,tool:"Value proposition canvas"},{id:5,tool:"Customer journey map"}],px=()=>s.jsx(sx,{className:"container",children:s.jsxs(ax,{children:[s.jsxs(ux,{children:["Бізнес ",s.jsx("span",{children:"інструменти"}),", які використувуємо в партнерстві"]}),s.jsx(cx,{children:fx.map(e=>s.jsx(dx,{children:e.tool},e.id))})]})});var zp={exports:{}},hx="SECRET_DO_NOT_PASS_THIS_OR_YOU_WILL_BE_FIRED",mx=hx,gx=mx;function Lp(){}function Rp(){}Rp.resetWarningCache=Lp;var yx=function(){function e(r,i,o,l,u,a){if(a!==gx){var d=new Error("Calling PropTypes validators directly is not supported by the `prop-types` package. Use PropTypes.checkPropTypes() to call them. Read more at http://fb.me/use-check-prop-types");throw d.name="Invariant Violation",d}}e.isRequired=e;function t(){return e}var n={array:e,bigint:e,bool:e,func:e,number:e,object:e,string:e,symbol:e,any:e,arrayOf:t,element:e,elementType:e,instanceOf:t,node:e,objectOf:t,oneOf:t,oneOfType:t,shape:t,exact:t,checkPropTypes:Rp,resetWarningCache:Lp};return n.PropTypes=n,n};zp.exports=yx();var xx=zp.exports;const Ci=il(xx),Eo="/healthy-management-project/assets/icon-footer-MBx-ujYN.svg",vx=S.div`
  padding: 40px 0 0 0;
  background-color: var(--background-bluedark);
`,wx=S.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
  margin-bottom: 40px;
`,kx=S.a`
  font-size: 16px;
  font-weight: 500;
  line-height: 1.5;
  cursor: pointer;
  border-bottom: 1px solid rgba(244, 244, 246, 0.4);
  color: var(--system-default-10);
`,jx=S.div`
  display: flex;
  align-items: center;
  gap: 40px;
`,Vr=S.a`
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
`,Sx=S.div`
  display: flex;
  gap: 40px;
`,_x=S.div`
  display: flex;
  gap: 16px;
  align-items: center;
`,Ex=S.a`
  padding: 8px;

  & svg {
    border-radius: 10px;
    background-color: var(--background-white);
    opacity: 0.8;
  }
`,Cx=S.div`
  display: flex;
  flex-direction: column;
`,Ac=S.a`
  font-size: 16px;
  font-weight: 500;
  line-height: 1.5;
  color: var(--system-default-10);
`,bx=S.p`
  padding: 16px 0;
  text-align: center;
  font-size: 12px;
  font-weight: 600;
  line-height: 1.67;
  text-transform: uppercase;
  border-top: 1px solid var(--system-default-20);
  color: var(--system-default-10);
`,Tx=S.div`
  position: fixed;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  background-color: rgba(0, 0, 0, 0.5);
  overflow: hidden;
  z-index: 1100;
`,Px=S.div`
  padding: 80px;
  position: fixed;
  width: 1360px;
  border-radius: 24px;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
  background-color: white;
  z-index: 10000;
`,Mx=S.div`
  height: 32px;
  display: flex;
  justify-content: space-between;
  margin-bottom: 40px;
`,Ox=S.svg`
  width: 24px;
  cursor: pointer;
`,zx=S.h2`
  font-size: 24px;
  font-weight: 600;
  line-height: 32px;
  color: var(--typography-bluedark);
`,Lx=S.ul`
  display: flex;
  flex-wrap: wrap;
  gap: 24px;
`,tn=S.li`
  width: 282px;
  padding: 24px;
  gap: 16px;

  border-radius: 16px;
  background: var(--background-bluedark);
  box-shadow: 0px 0px 8px 0px rgba(27, 54, 65, 0.08);
`,nn=S.h3`
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
`,rn=S.p`
  display: flex;
  justify-content: center;

  font-size: 14px;
  font-weight: 500;
  line-height: 18px;
  color: var(--typography-white);
`,on=S.div`
  gap: 16px;
  display: flex;
  flex-direction: column;
  justify-content: center;
`,ln=S.div`
  display: flex;
  flex-direction: column;
  gap: 8px;
`,sn=S.div`
  border-radius: 8px;
  overflow: hidden;
`,an=S.img`
  border-radius: 8px;

  &:hover {
    transform: scale(1.1);
    border-radius: 8px;
  }
`,Dc="/healthy-management-project/assets/Jilia_Kopytko-mYhzlt_-.webp",Rx="/healthy-management-project/assets/Jilia_Kopytko@2x-gruKrAtD.jpg",Ic="/healthy-management-project/assets/Yelyzaveta_Domanska-Ru7up7Pj.webp",Nx="/healthy-management-project/assets/Yelyzaveta_Domanska@2x-BYkqrL88.jpg",$c="/healthy-management-project/assets/Oleksandr_Natalukha-YKEBbXyu.webp",Ax="/healthy-management-project/assets/Oleksandr_Natalukha@2x-5OsrctvL.jpg",Fc="/healthy-management-project/assets/Valentyn_Havrylenko-ouVcypag.webp",Dx="/healthy-management-project/assets/Valentyn_Havrylenko@2x-xBjJM6nL.jpg",Vc="/healthy-management-project/assets/Olha_Abent-lPe8g7w1.webp",Ix="/healthy-management-project/assets/Olha_Abent@2x-fGgXmj71.jpg",Uc="/healthy-management-project/assets/Viktoriia_Moryc-tWw5-4of.webp",$x="/healthy-management-project/assets/Viktoriia_Moryc@2x-AxiRex6x.jpg",Wc="/healthy-management-project/assets/Vyacheslav_Pavlyuk-py_hj3lz.webp",Fx="/healthy-management-project/assets/Vyacheslav_Pavlyuk@2x-2qCtSSAb.jpg",Bc="/healthy-management-project/assets/Yaroslav_Li-nn0P6bIv.webp",Vx="/healthy-management-project/assets/Yaroslav_Li@2x-xfuqLdiI.jpg",Np=({handleClose:e,isModalOpen:t})=>{const n=i=>{i.target===i.currentTarget&&e()};se.useEffect(()=>{const i=document.body,o=()=>{t?i.classList.add("body-no-scroll"):i.classList.remove("body-no-scroll")},l=u=>{u.code==="Escape"&&t&&e()};return o(),window.addEventListener("keydown",l),()=>{window.removeEventListener("keydown",l)}},[e,t]);const r=document.getElementById("modal");return t?Dg.createPortal(s.jsx(Tx,{onClick:n,children:s.jsxs(Px,{isModalOpen:t,children:[s.jsxs(Mx,{children:[s.jsx(zx,{children:"Команда, яка створила сторінку"}),s.jsx(Ox,{onClick:e,children:s.jsx("use",{href:`${Y}#icon-close`})})]}),s.jsxs(Lx,{children:[s.jsx(tn,{children:s.jsxs(on,{children:[s.jsx(sn,{children:s.jsx(an,{src:Uc,srcSet:`${Uc} 1x, ${$x} 2x`,alt:"Вікторія Мориц"})}),s.jsxs(ln,{children:[s.jsx(nn,{children:s.jsxs("a",{href:"https://www.linkedin.com/in/viktoriia-moryc-61610962/",target:"_blank",rel:"noopener noreferrer",children:["Вікторія Мориц",s.jsx("svg",{width:"24",height:"24",children:s.jsx("use",{href:`${Y}#icon-linkedin`})})]})}),s.jsx(rn,{children:"Project Manager"})]})]})}),s.jsx(tn,{children:s.jsxs(on,{children:[s.jsx(sn,{children:s.jsx(an,{src:Dc,srcSet:`${Dc} 1x, ${Rx} 2x`,alt:"Юлія Копитко"})}),s.jsxs(ln,{children:[s.jsx(nn,{children:s.jsxs("a",{href:"https://www.linkedin.com/in/juliakopytko/",target:"_blank",rel:"noopener noreferrer",children:["Юлія Копитко",s.jsx("svg",{width:"24",height:"24",children:s.jsx("use",{href:`${Y}#icon-linkedin`})})]})}),s.jsx(rn,{children:"UX/UI Designer"})]})]})}),s.jsx(tn,{children:s.jsxs(on,{children:[s.jsx(sn,{children:s.jsx(an,{src:Bc,srcSet:`${Bc} 1x, ${Vx} 2x`,alt:"Ярослав Лі"})}),s.jsxs(ln,{children:[s.jsx(nn,{children:s.jsxs("a",{href:"https://www.linkedin.com/in/yaroslav-lee-b7070b294",target:"_blank",rel:"noopener noreferrer",children:["Ярослав Лі",s.jsx("svg",{width:"24",height:"24",children:s.jsx("use",{href:`${Y}#icon-linkedin`})})]})}),s.jsx(rn,{children:"Frontend Developer"})]})]})}),s.jsx(tn,{children:s.jsxs(on,{children:[s.jsx(sn,{children:s.jsx(an,{src:Ic,srcSet:`${Ic} 1x, ${Nx} 2x`,alt:"Єлизавета Доманська"})}),s.jsxs(ln,{children:[s.jsx(nn,{children:s.jsxs("a",{href:"https://www.linkedin.com/in/yelyzaveta-domanska-2185a5292/",target:"_blank",rel:"noopener noreferrer",children:["Єлизавета Доманська",s.jsx("svg",{width:"24",height:"24",children:s.jsx("use",{href:`${Y}#icon-linkedin`})})]})}),s.jsx(rn,{children:"Frontend Developer"})]})]})}),s.jsx(tn,{children:s.jsxs(on,{children:[s.jsx(sn,{children:s.jsx(an,{src:$c,srcSet:`${$c} 1x, ${Ax} 2x`,alt:"Олександр Наталуха"})}),s.jsxs(ln,{children:[s.jsx(nn,{children:s.jsxs("a",{href:"https://www.linkedin.com/in/oleksandr-natalukha",target:"_blank",rel:"noopener noreferrer",children:["Олександр Наталуха",s.jsx("svg",{width:"24",height:"24",children:s.jsx("use",{href:`${Y}#icon-linkedin`})})]})}),s.jsx(rn,{children:"Frontend Developer"})]})]})}),s.jsx(tn,{children:s.jsxs(on,{children:[s.jsx(sn,{children:s.jsx(an,{src:Fc,srcSet:`${Fc} 1x, ${Dx} 2x`,alt:"Валентин Гавриленко"})}),s.jsxs(ln,{children:[s.jsx(nn,{children:s.jsxs("a",{href:"https://www.linkedin.com/in/valentyn-havrylenko/",target:"_blank",rel:"noopener noreferrer",children:["Валентин Гавриленко",s.jsx("svg",{width:"24",height:"24",children:s.jsx("use",{href:`${Y}#icon-linkedin`})})]})}),s.jsx(rn,{children:"Frontend Developer"})]})]})}),s.jsx(tn,{children:s.jsxs(on,{children:[s.jsx(sn,{children:s.jsx(an,{src:Wc,srcSet:`${Wc} 1x, ${Fx} 2x`,alt:"В´ячеслав Павлюк"})}),s.jsxs(ln,{children:[s.jsx(nn,{children:s.jsxs("a",{href:"https://www.linkedin.com/in/vyacheslav-pavlyuk/",target:"_blank",rel:"noopener noreferrer",children:["В'ячеслав Павлюк",s.jsx("svg",{width:"24",height:"24",children:s.jsx("use",{href:`${Y}#icon-linkedin`})})]})}),s.jsx(rn,{children:"Fullstack Developer"})]})]})}),s.jsx(tn,{children:s.jsxs(on,{children:[s.jsx(sn,{children:s.jsx(an,{src:Vc,srcSet:`${Vc} 1x, ${Ix} 2x`,alt:"Ольга Абент"})}),s.jsxs(ln,{children:[s.jsx(nn,{children:s.jsxs("a",{href:"https://www.linkedin.com/in/abentolga/",target:"_blank",rel:"noopener noreferrer",children:["Ольга Абент",s.jsx("svg",{width:"24",height:"24",children:s.jsx("use",{href:`${Y}#icon-linkedin`})})]})}),s.jsx(rn,{children:"QA Engineer"})]})]})})]})]})}),r):null};Np.propTypes={handleClose:Ci.func.isRequired,isModalOpen:Ci.bool.isRequired};const Ap=({handleSetActiveLink:e})=>{const[t,n]=se.useState(!1),r=()=>{n(!0)},i=()=>{n(!1)};return s.jsxs(vx,{id:"footer",children:[s.jsxs(wx,{className:"container",children:[s.jsx("svg",{width:"227",height:"40",children:s.jsx("use",{href:`${Eo}#logo-white`})}),s.jsx(kx,{onClick:r,children:"created by GoIT students"}),s.jsx(Np,{handleClose:i,isModalOpen:t}),s.jsxs(jx,{children:[s.jsx(Vr,{href:"#home",onClick:o=>e("home",o),children:"Головна"}),s.jsx(Vr,{href:"#aboutUs",onClick:o=>e("aboutUs",o),children:"Про нас"}),s.jsx(Vr,{href:"#services",onClick:o=>e("services",o),children:"Послуги"}),s.jsx(Vr,{href:"#mentoring",onClick:o=>e("mentoring",o),children:"Менторство"}),s.jsx(Vr,{href:"#projects",onClick:o=>e("projects",o),children:"Проєкти"})]}),s.jsxs(Sx,{children:[s.jsxs(_x,{children:[s.jsx(Ex,{href:"https://www.facebook.com/profile.php?id=61551346490841",target:"_blank",rel:"noopener noreferrer",children:s.jsx("svg",{width:"32",height:"32",children:s.jsx("use",{href:`${Eo}#facebook`})})}),s.jsx("a",{href:"https://www.instagram.com/healthymanagement_ua/",target:"_blank",rel:"noopener noreferrer",children:s.jsx("svg",{width:"40",height:"40",children:s.jsx("use",{href:`${Eo}#instagram`})})})]}),s.jsxs(Cx,{children:[s.jsx(Ac,{href:"mailto:managementhealthy@gmail.com",children:"managementhealthy@gmail.com"}),s.jsx(Ac,{href:"tel:+380673160556",children:"+380 673 160 556"})]})]})]}),s.jsx(bx,{children:"© 2023 healthy managment. All rights reserved"})]})};Ap.propTypes={handleSetActiveLink:Ci.func.isRequired};const qo="/healthy-management-project/assets/symbol-defs-t7xx9-KA.svg",Ux=S.header`
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
`,Wx=S.div`
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
`,Bx=S.nav`
  display: flex;
  gap: 40px;
  align-items: center;
`,Ur=S.a`
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
`,Hx=S.a`
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
`,Qx=S.svg`
  stroke: black;
  width: 40px;
  height: 40px;
`,Yx=S.button`
  border: none;
  padding: 0;
  margin: 0;
  text-decoration: none;
  font-family: inherit;
  font-size: 100%;
  cursor: pointer;
  background: none;
`;var Dp={exports:{}};(function(e,t){(function(r,i){e.exports=i(se)})(fh,n=>(()=>{var r={"./node_modules/css-mediaquery/index.js":(u,a)=>{a.match=x,a.parse=k;var d=/(?:(only|not)?\s*([^\s\(\)]+)(?:\s*and)?\s*)?(.+)?/i,y=/\(\s*([^\s\:\)]+)\s*(?:\:\s*([^\s\)]+))?\s*\)/,g=/^(?:(min|max)-)?(.+)/,h=/(em|rem|px|cm|mm|in|pt|pc)?$/,w=/(dpi|dpcm|dppx)?$/;function x(p,j){return k(p).some(function(E){var b=E.inverse,C=E.type==="all"||j.type===E.type;if(C&&b||!(C||b))return!1;var L=E.expressions.every(function(P){var R=P.feature,W=P.modifier,$=P.value,A=j[R];if(!A)return!1;switch(R){case"orientation":case"scan":return A.toLowerCase()===$.toLowerCase();case"width":case"height":case"device-width":case"device-height":$=c($),A=c(A);break;case"resolution":$=f($),A=f(A);break;case"aspect-ratio":case"device-aspect-ratio":case"device-pixel-ratio":$=T($),A=T(A);break;case"grid":case"color":case"color-index":case"monochrome":$=parseInt($,10)||1,A=parseInt(A,10)||0;break}switch(W){case"min":return A>=$;case"max":return A<=$;default:return A===$}});return L&&!b||!L&&b})}function k(p){return p.split(",").map(function(j){j=j.trim();var E=j.match(d),b=E[1],C=E[2],L=E[3]||"",P={};return P.inverse=!!b&&b.toLowerCase()==="not",P.type=C?C.toLowerCase():"all",L=L.match(/\([^\)]+\)/g)||[],P.expressions=L.map(function(R){var W=R.match(y),$=W[1].toLowerCase().match(g);return{modifier:$[1],feature:$[2],value:W[2]}}),P})}function T(p){var j=Number(p),E;return j||(E=p.match(/^(\d+)\s*\/\s*(\d+)$/),j=E[1]/E[2]),j}function f(p){var j=parseFloat(p),E=String(p).match(w)[1];switch(E){case"dpcm":return j/2.54;case"dppx":return j*96;default:return j}}function c(p){var j=parseFloat(p),E=String(p).match(h)[1];switch(E){case"em":return j*16;case"rem":return j*16;case"cm":return j*96/2.54;case"mm":return j*96/2.54/10;case"in":return j*96;case"pt":return j*72;case"pc":return j*72/12;default:return j}}},"./node_modules/hyphenate-style-name/index.js":(u,a,d)=>{d.r(a),d.d(a,{default:()=>k});var y=/[A-Z]/g,g=/^ms-/,h={};function w(T){return"-"+T.toLowerCase()}function x(T){if(h.hasOwnProperty(T))return h[T];var f=T.replace(y,w);return h[T]=g.test(f)?"-"+f:f}const k=x},"./node_modules/matchmediaquery/index.js":(u,a,d)=>{var y=d("./node_modules/css-mediaquery/index.js").match,g=typeof window<"u"?window.matchMedia:null;function h(x,k,T){var f=this;if(g&&!T){var c=g.call(window,x);this.matches=c.matches,this.media=c.media,c.addListener(E)}else this.matches=y(x,k),this.media=x;this.addListener=p,this.removeListener=j,this.dispose=b;function p(C){c&&c.addListener(C)}function j(C){c&&c.removeListener(C)}function E(C){f.matches=C.matches,f.media=C.media}function b(){c&&c.removeListener(E)}}function w(x,k,T){return new h(x,k,T)}u.exports=w},"./node_modules/object-assign/index.js":u=>{/*
object-assign
(c) Sindre Sorhus
@license MIT
*/var a=Object.getOwnPropertySymbols,d=Object.prototype.hasOwnProperty,y=Object.prototype.propertyIsEnumerable;function g(w){if(w==null)throw new TypeError("Object.assign cannot be called with null or undefined");return Object(w)}function h(){try{if(!Object.assign)return!1;var w=new String("abc");if(w[5]="de",Object.getOwnPropertyNames(w)[0]==="5")return!1;for(var x={},k=0;k<10;k++)x["_"+String.fromCharCode(k)]=k;var T=Object.getOwnPropertyNames(x).map(function(c){return x[c]});if(T.join("")!=="0123456789")return!1;var f={};return"abcdefghijklmnopqrst".split("").forEach(function(c){f[c]=c}),Object.keys(Object.assign({},f)).join("")==="abcdefghijklmnopqrst"}catch{return!1}}u.exports=h()?Object.assign:function(w,x){for(var k,T=g(w),f,c=1;c<arguments.length;c++){k=Object(arguments[c]);for(var p in k)d.call(k,p)&&(T[p]=k[p]);if(a){f=a(k);for(var j=0;j<f.length;j++)y.call(k,f[j])&&(T[f[j]]=k[f[j]])}}return T}},"./node_modules/prop-types/checkPropTypes.js":(u,a,d)=>{var y=function(){};{var g=d("./node_modules/prop-types/lib/ReactPropTypesSecret.js"),h={},w=d("./node_modules/prop-types/lib/has.js");y=function(k){var T="Warning: "+k;typeof console<"u"&&console.error(T);try{throw new Error(T)}catch{}}}function x(k,T,f,c,p){for(var j in k)if(w(k,j)){var E;try{if(typeof k[j]!="function"){var b=Error((c||"React class")+": "+f+" type `"+j+"` is invalid; it must be a function, usually from the `prop-types` package, but received `"+typeof k[j]+"`.This often happens because of typos such as `PropTypes.function` instead of `PropTypes.func`.");throw b.name="Invariant Violation",b}E=k[j](T,j,c,f,null,g)}catch(L){E=L}if(E&&!(E instanceof Error)&&y((c||"React class")+": type specification of "+f+" `"+j+"` is invalid; the type checker function must return `null` or an `Error` but returned a "+typeof E+". You may have forgotten to pass an argument to the type checker creator (arrayOf, instanceOf, objectOf, oneOf, oneOfType, and shape all require an argument)."),E instanceof Error&&!(E.message in h)){h[E.message]=!0;var C=p?p():"";y("Failed "+f+" type: "+E.message+(C??""))}}}x.resetWarningCache=function(){h={}},u.exports=x},"./node_modules/prop-types/factoryWithTypeCheckers.js":(u,a,d)=>{var y=d("./node_modules/react-is/index.js"),g=d("./node_modules/object-assign/index.js"),h=d("./node_modules/prop-types/lib/ReactPropTypesSecret.js"),w=d("./node_modules/prop-types/lib/has.js"),x=d("./node_modules/prop-types/checkPropTypes.js"),k=function(){};k=function(f){var c="Warning: "+f;typeof console<"u"&&console.error(c);try{throw new Error(c)}catch{}};function T(){return null}u.exports=function(f,c){var p=typeof Symbol=="function"&&Symbol.iterator,j="@@iterator";function E(O){var V=O&&(p&&O[p]||O[j]);if(typeof V=="function")return V}var b="<<anonymous>>",C={array:W("array"),bigint:W("bigint"),bool:W("boolean"),func:W("function"),number:W("number"),object:W("object"),string:W("string"),symbol:W("symbol"),any:$(),arrayOf:A,element:X(),elementType:ae(),instanceOf:ce,node:Q(),objectOf:I,oneOf:Oe,oneOfType:B,shape:pe,exact:xt};function L(O,V){return O===V?O!==0||1/O===1/V:O!==O&&V!==V}function P(O,V){this.message=O,this.data=V&&typeof V=="object"?V:{},this.stack=""}P.prototype=Error.prototype;function R(O){var V={},G=0;function Z(te,J,q,ne,m,_,v){if(ne=ne||b,_=_||q,v!==h){if(c){var D=new Error("Calling PropTypes validators directly is not supported by the `prop-types` package. Use `PropTypes.checkPropTypes()` to call them. Read more at http://fb.me/use-check-prop-types");throw D.name="Invariant Violation",D}else if(typeof console<"u"){var N=ne+":"+q;!V[N]&&G<3&&(k("You are manually calling a React.PropTypes validation function for the `"+_+"` prop on `"+ne+"`. This is deprecated and will throw in the standalone `prop-types` package. You may be seeing this warning due to a third-party PropTypes library. See https://fb.me/react-warning-dont-call-proptypes for details."),V[N]=!0,G++)}}return J[q]==null?te?J[q]===null?new P("The "+m+" `"+_+"` is marked as required "+("in `"+ne+"`, but its value is `null`.")):new P("The "+m+" `"+_+"` is marked as required in "+("`"+ne+"`, but its value is `undefined`.")):null:O(J,q,ne,m,_)}var K=Z.bind(null,!1);return K.isRequired=Z.bind(null,!0),K}function W(O){function V(G,Z,K,te,J,q){var ne=G[Z],m=_e(ne);if(m!==O){var _=Re(ne);return new P("Invalid "+te+" `"+J+"` of type "+("`"+_+"` supplied to `"+K+"`, expected ")+("`"+O+"`."),{expectedType:O})}return null}return R(V)}function $(){return R(T)}function A(O){function V(G,Z,K,te,J){if(typeof O!="function")return new P("Property `"+J+"` of component `"+K+"` has invalid PropType notation inside arrayOf.");var q=G[Z];if(!Array.isArray(q)){var ne=_e(q);return new P("Invalid "+te+" `"+J+"` of type "+("`"+ne+"` supplied to `"+K+"`, expected an array."))}for(var m=0;m<q.length;m++){var _=O(q,m,K,te,J+"["+m+"]",h);if(_ instanceof Error)return _}return null}return R(V)}function X(){function O(V,G,Z,K,te){var J=V[G];if(!f(J)){var q=_e(J);return new P("Invalid "+K+" `"+te+"` of type "+("`"+q+"` supplied to `"+Z+"`, expected a single ReactElement."))}return null}return R(O)}function ae(){function O(V,G,Z,K,te){var J=V[G];if(!y.isValidElementType(J)){var q=_e(J);return new P("Invalid "+K+" `"+te+"` of type "+("`"+q+"` supplied to `"+Z+"`, expected a single ReactElement type."))}return null}return R(O)}function ce(O){function V(G,Z,K,te,J){if(!(G[Z]instanceof O)){var q=O.name||b,ne=qt(G[Z]);return new P("Invalid "+te+" `"+J+"` of type "+("`"+ne+"` supplied to `"+K+"`, expected ")+("instance of `"+q+"`."))}return null}return R(V)}function Oe(O){if(!Array.isArray(O))return arguments.length>1?k("Invalid arguments supplied to oneOf, expected an array, got "+arguments.length+" arguments. A common mistake is to write oneOf(x, y, z) instead of oneOf([x, y, z])."):k("Invalid argument supplied to oneOf, expected an array."),T;function V(G,Z,K,te,J){for(var q=G[Z],ne=0;ne<O.length;ne++)if(L(q,O[ne]))return null;var m=JSON.stringify(O,function(v,D){var N=Re(D);return N==="symbol"?String(D):D});return new P("Invalid "+te+" `"+J+"` of value `"+String(q)+"` "+("supplied to `"+K+"`, expected one of "+m+"."))}return R(V)}function I(O){function V(G,Z,K,te,J){if(typeof O!="function")return new P("Property `"+J+"` of component `"+K+"` has invalid PropType notation inside objectOf.");var q=G[Z],ne=_e(q);if(ne!=="object")return new P("Invalid "+te+" `"+J+"` of type "+("`"+ne+"` supplied to `"+K+"`, expected an object."));for(var m in q)if(w(q,m)){var _=O(q,m,K,te,J+"."+m,h);if(_ instanceof Error)return _}return null}return R(V)}function B(O){if(!Array.isArray(O))return k("Invalid argument supplied to oneOfType, expected an instance of array."),T;for(var V=0;V<O.length;V++){var G=O[V];if(typeof G!="function")return k("Invalid argument supplied to oneOfType. Expected an array of check functions, but received "+Kn(G)+" at index "+V+"."),T}function Z(K,te,J,q,ne){for(var m=[],_=0;_<O.length;_++){var v=O[_],D=v(K,te,J,q,ne,h);if(D==null)return null;D.data&&w(D.data,"expectedType")&&m.push(D.data.expectedType)}var N=m.length>0?", expected one of type ["+m.join(", ")+"]":"";return new P("Invalid "+q+" `"+ne+"` supplied to "+("`"+J+"`"+N+"."))}return R(Z)}function Q(){function O(V,G,Z,K,te){return Fe(V[G])?null:new P("Invalid "+K+" `"+te+"` supplied to "+("`"+Z+"`, expected a ReactNode."))}return R(O)}function le(O,V,G,Z,K){return new P((O||"React class")+": "+V+" type `"+G+"."+Z+"` is invalid; it must be a function, usually from the `prop-types` package, but received `"+K+"`.")}function pe(O){function V(G,Z,K,te,J){var q=G[Z],ne=_e(q);if(ne!=="object")return new P("Invalid "+te+" `"+J+"` of type `"+ne+"` "+("supplied to `"+K+"`, expected `object`."));for(var m in O){var _=O[m];if(typeof _!="function")return le(K,te,J,m,Re(_));var v=_(q,m,K,te,J+"."+m,h);if(v)return v}return null}return R(V)}function xt(O){function V(G,Z,K,te,J){var q=G[Z],ne=_e(q);if(ne!=="object")return new P("Invalid "+te+" `"+J+"` of type `"+ne+"` "+("supplied to `"+K+"`, expected `object`."));var m=g({},G[Z],O);for(var _ in m){var v=O[_];if(w(O,_)&&typeof v!="function")return le(K,te,J,_,Re(v));if(!v)return new P("Invalid "+te+" `"+J+"` key `"+_+"` supplied to `"+K+"`.\nBad object: "+JSON.stringify(G[Z],null,"  ")+`
Valid keys: `+JSON.stringify(Object.keys(O),null,"  "));var D=v(q,_,K,te,J+"."+_,h);if(D)return D}return null}return R(V)}function Fe(O){switch(typeof O){case"number":case"string":case"undefined":return!0;case"boolean":return!O;case"object":if(Array.isArray(O))return O.every(Fe);if(O===null||f(O))return!0;var V=E(O);if(V){var G=V.call(O),Z;if(V!==O.entries){for(;!(Z=G.next()).done;)if(!Fe(Z.value))return!1}else for(;!(Z=G.next()).done;){var K=Z.value;if(K&&!Fe(K[1]))return!1}}else return!1;return!0;default:return!1}}function Pt(O,V){return O==="symbol"?!0:V?V["@@toStringTag"]==="Symbol"||typeof Symbol=="function"&&V instanceof Symbol:!1}function _e(O){var V=typeof O;return Array.isArray(O)?"array":O instanceof RegExp?"object":Pt(V,O)?"symbol":V}function Re(O){if(typeof O>"u"||O===null)return""+O;var V=_e(O);if(V==="object"){if(O instanceof Date)return"date";if(O instanceof RegExp)return"regexp"}return V}function Kn(O){var V=Re(O);switch(V){case"array":case"object":return"an "+V;case"boolean":case"date":case"regexp":return"a "+V;default:return V}}function qt(O){return!O.constructor||!O.constructor.name?b:O.constructor.name}return C.checkPropTypes=x,C.resetWarningCache=x.resetWarningCache,C.PropTypes=C,C}},"./node_modules/prop-types/index.js":(u,a,d)=>{{var y=d("./node_modules/react-is/index.js"),g=!0;u.exports=d("./node_modules/prop-types/factoryWithTypeCheckers.js")(y.isElement,g)}},"./node_modules/prop-types/lib/ReactPropTypesSecret.js":u=>{var a="SECRET_DO_NOT_PASS_THIS_OR_YOU_WILL_BE_FIRED";u.exports=a},"./node_modules/prop-types/lib/has.js":u=>{u.exports=Function.call.bind(Object.prototype.hasOwnProperty)},"./node_modules/react-is/cjs/react-is.development.js":(u,a)=>{/** @license React v16.13.1
 * react-is.development.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */(function(){var d=typeof Symbol=="function"&&Symbol.for,y=d?Symbol.for("react.element"):60103,g=d?Symbol.for("react.portal"):60106,h=d?Symbol.for("react.fragment"):60107,w=d?Symbol.for("react.strict_mode"):60108,x=d?Symbol.for("react.profiler"):60114,k=d?Symbol.for("react.provider"):60109,T=d?Symbol.for("react.context"):60110,f=d?Symbol.for("react.async_mode"):60111,c=d?Symbol.for("react.concurrent_mode"):60111,p=d?Symbol.for("react.forward_ref"):60112,j=d?Symbol.for("react.suspense"):60113,E=d?Symbol.for("react.suspense_list"):60120,b=d?Symbol.for("react.memo"):60115,C=d?Symbol.for("react.lazy"):60116,L=d?Symbol.for("react.block"):60121,P=d?Symbol.for("react.fundamental"):60117,R=d?Symbol.for("react.responder"):60118,W=d?Symbol.for("react.scope"):60119;function $(v){return typeof v=="string"||typeof v=="function"||v===h||v===c||v===x||v===w||v===j||v===E||typeof v=="object"&&v!==null&&(v.$$typeof===C||v.$$typeof===b||v.$$typeof===k||v.$$typeof===T||v.$$typeof===p||v.$$typeof===P||v.$$typeof===R||v.$$typeof===W||v.$$typeof===L)}function A(v){if(typeof v=="object"&&v!==null){var D=v.$$typeof;switch(D){case y:var N=v.type;switch(N){case f:case c:case h:case x:case w:case j:return N;default:var z=N&&N.$$typeof;switch(z){case T:case p:case C:case b:case k:return z;default:return D}}case g:return D}}}var X=f,ae=c,ce=T,Oe=k,I=y,B=p,Q=h,le=C,pe=b,xt=g,Fe=x,Pt=w,_e=j,Re=!1;function Kn(v){return Re||(Re=!0,console.warn("The ReactIs.isAsyncMode() alias has been deprecated, and will be removed in React 17+. Update your code to use ReactIs.isConcurrentMode() instead. It has the exact same API.")),qt(v)||A(v)===f}function qt(v){return A(v)===c}function O(v){return A(v)===T}function V(v){return A(v)===k}function G(v){return typeof v=="object"&&v!==null&&v.$$typeof===y}function Z(v){return A(v)===p}function K(v){return A(v)===h}function te(v){return A(v)===C}function J(v){return A(v)===b}function q(v){return A(v)===g}function ne(v){return A(v)===x}function m(v){return A(v)===w}function _(v){return A(v)===j}a.AsyncMode=X,a.ConcurrentMode=ae,a.ContextConsumer=ce,a.ContextProvider=Oe,a.Element=I,a.ForwardRef=B,a.Fragment=Q,a.Lazy=le,a.Memo=pe,a.Portal=xt,a.Profiler=Fe,a.StrictMode=Pt,a.Suspense=_e,a.isAsyncMode=Kn,a.isConcurrentMode=qt,a.isContextConsumer=O,a.isContextProvider=V,a.isElement=G,a.isForwardRef=Z,a.isFragment=K,a.isLazy=te,a.isMemo=J,a.isPortal=q,a.isProfiler=ne,a.isStrictMode=m,a.isSuspense=_,a.isValidElementType=$,a.typeOf=A})()},"./node_modules/react-is/index.js":(u,a,d)=>{u.exports=d("./node_modules/react-is/cjs/react-is.development.js")},"./node_modules/shallow-equal/dist/index.esm.js":(u,a,d)=>{d.r(a),d.d(a,{shallowEqualArrays:()=>g,shallowEqualObjects:()=>y});function y(h,w){if(h===w)return!0;if(!h||!w)return!1;var x=Object.keys(h),k=Object.keys(w),T=x.length;if(k.length!==T)return!1;for(var f=0;f<T;f++){var c=x[f];if(h[c]!==w[c]||!Object.prototype.hasOwnProperty.call(w,c))return!1}return!0}function g(h,w){if(h===w)return!0;if(!h||!w)return!1;var x=h.length;if(w.length!==x)return!1;for(var k=0;k<x;k++)if(h[k]!==w[k])return!1;return!0}},"./src/Component.ts":function(u,a,d){var y=this&&this.__rest||function(x,k){var T={};for(var f in x)Object.prototype.hasOwnProperty.call(x,f)&&k.indexOf(f)<0&&(T[f]=x[f]);if(x!=null&&typeof Object.getOwnPropertySymbols=="function")for(var c=0,f=Object.getOwnPropertySymbols(x);c<f.length;c++)k.indexOf(f[c])<0&&Object.prototype.propertyIsEnumerable.call(x,f[c])&&(T[f[c]]=x[f[c]]);return T},g=this&&this.__importDefault||function(x){return x&&x.__esModule?x:{default:x}};Object.defineProperty(a,"__esModule",{value:!0});var h=g(d("./src/useMediaQuery.ts")),w=function(x){var k=x.children,T=x.device,f=x.onChange,c=y(x,["children","device","onChange"]),p=(0,h.default)(c,T,f);return typeof k=="function"?k(p):p?k:null};a.default=w},"./src/Context.ts":(u,a,d)=>{Object.defineProperty(a,"__esModule",{value:!0});var y=d("react"),g=(0,y.createContext)(void 0);a.default=g},"./src/index.ts":function(u,a,d){var y=this&&this.__importDefault||function(k){return k&&k.__esModule?k:{default:k}};Object.defineProperty(a,"__esModule",{value:!0}),a.Context=a.toQuery=a.useMediaQuery=a.default=void 0;var g=y(d("./src/useMediaQuery.ts"));a.useMediaQuery=g.default;var h=y(d("./src/Component.ts"));a.default=h.default;var w=y(d("./src/toQuery.ts"));a.toQuery=w.default;var x=y(d("./src/Context.ts"));a.Context=x.default},"./src/mediaQuery.ts":function(u,a,d){var y=this&&this.__assign||function(){return y=Object.assign||function(j){for(var E,b=1,C=arguments.length;b<C;b++){E=arguments[b];for(var L in E)Object.prototype.hasOwnProperty.call(E,L)&&(j[L]=E[L])}return j},y.apply(this,arguments)},g=this&&this.__rest||function(j,E){var b={};for(var C in j)Object.prototype.hasOwnProperty.call(j,C)&&E.indexOf(C)<0&&(b[C]=j[C]);if(j!=null&&typeof Object.getOwnPropertySymbols=="function")for(var L=0,C=Object.getOwnPropertySymbols(j);L<C.length;L++)E.indexOf(C[L])<0&&Object.prototype.propertyIsEnumerable.call(j,C[L])&&(b[C[L]]=j[C[L]]);return b},h=this&&this.__importDefault||function(j){return j&&j.__esModule?j:{default:j}};Object.defineProperty(a,"__esModule",{value:!0});var w=h(d("./node_modules/prop-types/index.js")),x=w.default.oneOfType([w.default.string,w.default.number]),k={all:w.default.bool,grid:w.default.bool,aural:w.default.bool,braille:w.default.bool,handheld:w.default.bool,print:w.default.bool,projection:w.default.bool,screen:w.default.bool,tty:w.default.bool,tv:w.default.bool,embossed:w.default.bool},T={orientation:w.default.oneOf(["portrait","landscape"]),scan:w.default.oneOf(["progressive","interlace"]),aspectRatio:w.default.string,deviceAspectRatio:w.default.string,height:x,deviceHeight:x,width:x,deviceWidth:x,color:w.default.bool,colorIndex:w.default.bool,monochrome:w.default.bool,resolution:x,type:Object.keys(k)};T.type;var f=g(T,["type"]),c=y({minAspectRatio:w.default.string,maxAspectRatio:w.default.string,minDeviceAspectRatio:w.default.string,maxDeviceAspectRatio:w.default.string,minHeight:x,maxHeight:x,minDeviceHeight:x,maxDeviceHeight:x,minWidth:x,maxWidth:x,minDeviceWidth:x,maxDeviceWidth:x,minColor:w.default.number,maxColor:w.default.number,minColorIndex:w.default.number,maxColorIndex:w.default.number,minMonochrome:w.default.number,maxMonochrome:w.default.number,minResolution:x,maxResolution:x},f),p=y(y({},k),c);a.default={all:p,types:k,matchers:T,features:c}},"./src/toQuery.ts":function(u,a,d){var y=this&&this.__importDefault||function(f){return f&&f.__esModule?f:{default:f}};Object.defineProperty(a,"__esModule",{value:!0});var g=y(d("./node_modules/hyphenate-style-name/index.js")),h=y(d("./src/mediaQuery.ts")),w=function(f){return"not ".concat(f)},x=function(f,c){var p=(0,g.default)(f);return typeof c=="number"&&(c="".concat(c,"px")),c===!0?p:c===!1?w(p):"(".concat(p,": ").concat(c,")")},k=function(f){return f.join(" and ")},T=function(f){var c=[];return Object.keys(h.default.all).forEach(function(p){var j=f[p];j!=null&&c.push(x(p,j))}),k(c)};a.default=T},"./src/useMediaQuery.ts":function(u,a,d){var y=this&&this.__importDefault||function(P){return P&&P.__esModule?P:{default:P}};Object.defineProperty(a,"__esModule",{value:!0});var g=d("react"),h=y(d("./node_modules/matchmediaquery/index.js")),w=y(d("./node_modules/hyphenate-style-name/index.js")),x=d("./node_modules/shallow-equal/dist/index.esm.js"),k=y(d("./src/toQuery.ts")),T=y(d("./src/Context.ts")),f=function(P){return P.query||(0,k.default)(P)},c=function(P){if(P){var R=Object.keys(P);return R.reduce(function(W,$){return W[(0,w.default)($)]=P[$],W},{})}},p=function(){var P=(0,g.useRef)(!1);return(0,g.useEffect)(function(){P.current=!0},[]),P.current},j=function(P){var R=(0,g.useContext)(T.default),W=function(){return c(P)||c(R)},$=(0,g.useState)(W),A=$[0],X=$[1];return(0,g.useEffect)(function(){var ae=W();(0,x.shallowEqualObjects)(A,ae)||X(ae)},[P,R]),A},E=function(P){var R=function(){return f(P)},W=(0,g.useState)(R),$=W[0],A=W[1];return(0,g.useEffect)(function(){var X=R();$!==X&&A(X)},[P]),$},b=function(P,R){var W=function(){return(0,h.default)(P,R||{},!!R)},$=(0,g.useState)(W),A=$[0],X=$[1],ae=p();return(0,g.useEffect)(function(){if(ae){var ce=W();return X(ce),function(){ce&&ce.dispose()}}},[P,R]),A},C=function(P){var R=(0,g.useState)(P.matches),W=R[0],$=R[1];return(0,g.useEffect)(function(){var A=function(X){$(X.matches)};return P.addListener(A),$(P.matches),function(){P.removeListener(A)}},[P]),W},L=function(P,R,W){var $=j(R),A=E(P);if(!A)throw new Error("Invalid or missing MediaQuery!");var X=b(A,$),ae=C(X),ce=p();return(0,g.useEffect)(function(){ce&&W&&W(ae)},[ae]),(0,g.useEffect)(function(){return function(){X&&X.dispose()}},[]),ae};a.default=L},react:u=>{u.exports=n}},i={};function o(u){var a=i[u];if(a!==void 0)return a.exports;var d=i[u]={exports:{}};return r[u].call(d.exports,d,d.exports,o),d.exports}o.d=(u,a)=>{for(var d in a)o.o(a,d)&&!o.o(u,d)&&Object.defineProperty(u,d,{enumerable:!0,get:a[d]})},o.o=(u,a)=>Object.prototype.hasOwnProperty.call(u,a),o.r=u=>{typeof Symbol<"u"&&Symbol.toStringTag&&Object.defineProperty(u,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(u,"__esModule",{value:!0})};var l=o("./src/index.ts");return l})())})(Dp);var Dn=Dp.exports;const Hc=il(Dn),Kx="_mabileMenuContainer_1kj9j_1",Xx="_divMobileMenu_1kj9j_13",Gx="_logoMenu_1kj9j_24",Zx="_contactMenu_1kj9j_28",Jx="_svgMenu_1kj9j_51",qx="_nav_1kj9j_55",ev="_navMenuMobile_1kj9j_66",tv="_buttonMenuMobile_1kj9j_75",wt={mabileMenuContainer:Kx,divMobileMenu:Xx,logoMenu:Gx,contactMenu:Zx,svgMenu:Jx,nav:qx,navMenuMobile:ev,buttonMenuMobile:tv},nv=document.getElementById("modalMobail"),Ip=({onClose:e,handleSetActiveLink:t})=>lu.createPortal(s.jsxs("div",{className:wt.mabileMenuContainer,children:[s.jsxs("div",{className:wt.divMobileMenu,children:[s.jsx("a",{href:"#home",children:s.jsx("svg",{width:"40",height:"40",children:s.jsx("use",{href:`${qo}#icon-g10`})})}),s.jsx("a",{className:wt.contactMenu,href:"#contact",children:"Контакт"}),s.jsx("button",{className:wt.buttonMenuMobile,type:"button",onClick:()=>e(),children:s.jsx("svg",{className:wt.svgMenu,width:"40",height:"40",children:s.jsx("use",{href:`${qo}#icon-close`})})})]}),s.jsxs("nav",{className:wt.nav,children:[s.jsx("a",{className:wt.navMenuMobile,href:"#home",onClick:n=>{e(),t("home",n)},children:"Головна"}),s.jsx("a",{className:wt.navMenuMobile,href:"#aboutUs",onClick:n=>{e(),t("aboutUs",n)},children:"Про нас"}),s.jsx("a",{className:wt.navMenuMobile,href:"#services",onClick:n=>{e(),t("aboutUs",n)},children:"Послуги"}),s.jsx("a",{className:wt.navMenuMobile,href:"#mentoring",onClick:n=>{e(),t("mentoring",n)},children:"Менторство"}),s.jsx("a",{className:wt.navMenuMobile,href:"#projects",onClick:n=>{e(),t("projects",n)},children:"Проєкти"})]})]}),nv);Ip.propTypes={onClose:Ci.func.isRequired};const $p=({handleSetActiveLink:e})=>{const[t,n]=se.useState("home"),[r,i]=se.useState(!1),o=Dn.useMediaQuery({query:"(max-width: 767px)"}),l=Dn.useMediaQuery({query:"(min-width: 768px)"}),u=()=>{i(!r)};return se.useEffect(()=>{const a=()=>{const y=["home","aboutUs","services","mentoring","projects","contact"].find(g=>{const h=document.getElementById(g);if(h){const w=h.getBoundingClientRect();return w.top<=120&&w.bottom>=120}return h});y&&n(y)};return window.addEventListener("scroll",a),()=>{window.removeEventListener("scroll",a)}},[]),s.jsxs(Ux,{children:[s.jsx("div",{className:"container",children:s.jsxs(Wx,{children:[o&&s.jsx("a",{href:"#home",children:s.jsx("svg",{width:"40",height:"40",children:s.jsx("use",{href:`${qo}#icon-g10`})})}),l&&s.jsx("a",{href:"#home",children:s.jsx("svg",{width:"227",height:"40",children:s.jsx("use",{href:`${Y}#logo-black`})})}),l&&s.jsxs(Bx,{children:[s.jsx(Ur,{href:"#home",className:t==="home"?"active":"",onClick:a=>e("home",a),children:"Головна"}),s.jsx(Ur,{href:"#aboutUs",className:t==="aboutUs"?"active":"",onClick:a=>e("aboutUs",a),children:"Про нас"}),s.jsx(Ur,{href:"#services",className:t==="services"?"active":"",onClick:a=>e("services",a),children:"Послуги"}),s.jsx(Ur,{href:"#mentoring",className:t==="mentoring"?"active":"",onClick:a=>e("mentoring",a),children:"Менторство"}),s.jsx(Ur,{href:"#projects",className:t==="projects"?"active":"",onClick:a=>e("projects",a),children:"Проєкти"})]}),s.jsx(Hx,{href:"#contact",className:t==="contact"?"active":"",onClick:a=>e("contact",a),children:"Контакт"}),o&&s.jsx(Yx,{type:"button",onClick:()=>u(),children:s.jsx(Qx,{children:s.jsx("use",{href:`${qo}#icon-menuburger`})})})]})}),o&&r&&s.jsx(Ip,{onClose:u,handleSetActiveLink:e})]})};$p.propTypes={handleSetActiveLink:Ci.func.isRequired};const rv="/healthy-management-project/assets/hero1x-6AVSlzud.webp",iv="/healthy-management-project/assets/hero1x-d4IOBsel.jpg",ov=S.section`
  background-repeat: no-repeat;
  background-position: center;
  background-image: url(${iv});
  background-size: cover;
  margin-top: 110px;
  padding-top: 40px;
  padding-bottom: 40px;

  @media screen and (min-width: 768px) {
    background-repeat: no-repeat;
    background-position: center;
    background-image: url(${rv});
    background-size: cover;
    margin-top: 120px;
    padding-top: 296px;
    padding-bottom: 296px;
  }
`,lv=S.h1`
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
`,sv=S.h3`
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
`,av=S.ul`
  margin-left: 20px;
  margin-top: 24px;
  margin-bottom: 48px;

  @media screen and (min-width: 768px) {
    margin-left: 38px;
    margin-top: 24px;
    margin-bottom: 40px;
  }
`,rs=S.li`
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
`,uv=S.div`
  display: flex;
  flex-direction: column;
  gap: 24px;

  @media screen and (min-width: 768px) {
    display: flex;
    flex-direction: row;
    gap: 24px;
  }
`,Qc=S.a`
  display: flex;
  flex-direction: row;
  min-width: 327px;
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
`,cv=()=>s.jsx(ov,{id:"home",children:s.jsxs("div",{className:"container",children:[s.jsx(lv,{children:"Бізнес-партнер з розвитку та комунікацій здорового менеджменту"}),s.jsx(sv,{children:"Будуємо ефективні стратегії здорового менеджменту для медичних брендів:"}),s.jsxs(av,{children:[s.jsx(rs,{children:"медичний менеджмент і маркетинг,"}),s.jsx(rs,{children:"програми управління здоров'ям для підприємств та бізнесу,"}),s.jsx(rs,{children:"менторство"})]}),s.jsxs(uv,{children:[s.jsx(Qc,{href:"#contact",children:"Консультація"}),s.jsx(Qc,{href:"services",children:"Послуги"})]})]})}),dv=S.section`
  padding-top: 24px;
  padding-bottom: 24px;

  @media screen and (min-width: 1920px) {
    padding-top: 80px;
    padding-bottom: 80px;
  }
`,fv=S.div`
  border-radius: 16px;
  padding: 24px;
  background: var(--background-bluedark);

  @media screen and (min-width: 1920px) {
    max-width: 100%;
    padding: 80px;
  }
`,pv=S.h2`
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
`,hv=S.ul`
  display: flex;
  padding: 0;
  flex-wrap: wrap;
  gap: 24px;
`,eo=S.li`
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
`,to=S.svg`
  width: 80px;
  height: 80px;
`,no=S.div`
  display: flex;
  flex-direction: column;
`,ro=S.h3`
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
`,io=S.p`
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
`,mv=()=>s.jsx(dv,{className:"container",children:s.jsxs(fv,{children:[s.jsx(pv,{children:"Чому обирають нас"}),s.jsxs(hv,{children:[s.jsxs(eo,{children:[s.jsx(to,{children:s.jsx("use",{href:`${Y}#hands-shake`})}),s.jsxs(no,{children:[s.jsx(ro,{children:"Надійне партнерство та менторство"}),s.jsx(io,{children:"Ми налаштовані на довгострокове партнерство і дбаємо про комфортні та чесні комунікації"})]})]}),s.jsxs(eo,{children:[s.jsx(to,{children:s.jsx("use",{href:`${Y}#setting`})}),s.jsxs(no,{children:[s.jsx(ro,{children:"Індивідуальний підхід"}),s.jsx(io,{children:"Кожен бізнес і послуга мають свої особливості. Ми занурюємося у ваш бізнес і пропонуємо індивідуальні стратегії, які допоможуть вам досягти успіху"})]})]}),s.jsxs(eo,{children:[s.jsx(to,{children:s.jsx("use",{href:`${Y}#icon-lamp`})}),s.jsxs(no,{children:[s.jsx(ro,{children:"Експертні послуги"}),s.jsx(io,{children:"Ми опираємося на передовий досвід і використовуємо як класичні, так і сучасні підходи для досягнення поставленого результату"})]})]}),s.jsxs(eo,{children:[s.jsx(to,{children:s.jsx("use",{href:`${Y}#icon-puzzle`})}),s.jsxs(no,{children:[s.jsx(ro,{children:"Комплексні рішення"}),s.jsx(io,{children:"Наша експертиза дозволяє пропонувати комплексні рішення для ефективної співпраці"})]})]})]})]})}),Yc="/healthy-management-project/assets/pic_mentorstvo1x-R5bIGNq0.webp",gv="/healthy-management-project/assets/pic_mentorstvo2x-k6d-_Us1.jpg",Kc="/healthy-management-project/assets/mob_mentor1x-_de1iGBc.webp",yv="/healthy-management-project/assets/mob_mentor@2x-oAKhVwNJ.jpg",xv=S.section`
  padding-top: 80px;
  padding-bottom: 80px;
`,vv=S.div`
  display: flex;
  flex-direction: column;
  gap: 24px;

  @media screen and (min-width: 1920px) {
    gap: 24px;
    margin-bottom: 40px;
    flex-direction: row;
  }
`,wv=S.div`
  display: flex;
  flex-direction: column;
  gap: 16px;

  @media screen and (min-width: 1920px) {
    max-width: 828px;
    align-items: flex-start;
  }
`,kv=S.div`
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
`,jv=S.h2`
  font-size: 24px;
  font-weight: 600;
  line-height: 32px;
  color: var(--typography-black);

  @media screen and (min-width: 1920px) {
    font-size: 48px;
    line-height: 56px;
    margin-bottom: 40px;
  }
`,Sv=S.h3`
  font-size: 18px;
  font-weight: 600;
  line-height: 24px;
  color: var(--typography-bluedark);

  @media screen and (min-width: 1920px) {
    font-size: 24px;
    line-height: 32px;
  }
`,Xc=S.h3`
  font-size: 18px;
  font-weight: 600;
  line-height: 24px;
  color: var(--typography-white);

  @media screen and (min-width: 1920px) {
    font-size: 24px;
    line-height: 32px;
  }
`,_v=S.div`
  display: flex;
  flex-direction: column;
  gap: 24px;
  min-width: 320px;

  @media screen and (min-width: 1920px) {
    margin-bottom: 80px;
  }
`,Gc=S.p`
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
`,Ev=S.a`
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
`,Cv=S.div`
  display: flex;
  flex-direction: column;
  gap: 24px;

  @media screen and (min-width: 1920px) {
    gap: 40px;
    flex-direction: row;
  }
`,bv=S.div`
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
`,Tv=S.ul`
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
`,Zc=S.ul`
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
`,Zn=S.li`
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
`,Jn=S.li`
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
`,Pv=()=>s.jsxs(xv,{id:"mentoring",className:"container",children:[s.jsxs(vv,{children:[s.jsxs("div",{children:[s.jsx(Hc,{minWidth:1920,children:s.jsx("img",{srcSet:`${Yc} 1920w, ${gv} 2x`,sizes:"(min-width: 1920px) 1920px",src:Yc,alt:"Ольга Поліщук - ваш ментор в медичній галузі"})}),s.jsx(Hc,{minWidth:375,maxWidth:1919,children:s.jsx("img",{srcSet:`${Kc} 375w, ${yv} 2x`,sizes:"(min-width: 375px) 375px",src:Kc,alt:"Ольга Поліщук - ваш ментор в медичній галузі"})})]}),s.jsxs(wv,{children:[s.jsx(jv,{children:"Менторство"}),s.jsxs(_v,{children:[s.jsxs(Gc,{children:[s.jsx("b",{children:"Менторство в медичній галузі"})," - почути іншу думку, підтвердити власні гіпотези, зрозуміти вектор розвитку, отримати підтримку та пораду з питань менеджменту і медичного маркетингу"]}),s.jsxs(Gc,{children:[s.jsx("b",{children:"Менторство"})," - це про взаємодію та чесну комунікацію, про спільні цінності та готовність до росту, про надійне партнерство та довіру"]})]}),s.jsx(Ev,{href:"#contact",children:"Дізнатися вартість"})]})]}),s.jsx("div",{children:s.jsxs(Cv,{children:[s.jsxs(kv,{children:[s.jsx(Sv,{children:"Про що це?"}),s.jsxs(Tv,{children:[s.jsx(Zn,{children:s.jsx("p",{children:"Про прагнення почути чесну іншу думку/та або підтвердити власні гіпотези для власника/керівника"})}),s.jsx(Zn,{children:s.jsx("p",{children:"Про бізнес-процеси та їх ефективність"})}),s.jsx(Zn,{children:s.jsx("p",{children:"Про вектори розвитку бізнесу або проєкту"})}),s.jsx(Zn,{children:s.jsx("p",{children:"Про практичний інструментарій для впровадження змін"})}),s.jsx(Zn,{children:s.jsx("p",{children:"Про маркетинг, сервіс та комунікації в медичних бізнесах"})}),s.jsx(Zn,{children:s.jsx("p",{children:"Про здоров'я працівників та стратегії підвищенння ефективності бізнесу"})})]})]}),s.jsxs(bv,{children:[s.jsx(Xc,{children:"Для кого"}),s.jsxs(Zc,{children:[s.jsx(Jn,{children:s.jsx("p",{children:"Лідерам, які прагнуть змін"})}),s.jsx(Jn,{children:s.jsx("p",{children:"Власникам, які хочуть отримати незалежку експертну думку"})}),s.jsx(Jn,{children:s.jsx("p",{children:"Керівникам та маркетологам, яким потрібна підтримка"})}),s.jsx(Jn,{children:s.jsx("p",{children:"Лікарям, яким важливо отримати пораду"})})]}),s.jsx(Xc,{children:"Формат"}),s.jsxs(Zc,{children:[s.jsx(Jn,{children:s.jsx("p",{children:"Індивідуальна ментор-сесія (від 1 години)"})}),s.jsx(Jn,{children:s.jsx("p",{children:"Персональний супровід на декілька місяців"})})]})]})]})})]}),Fp=S.section`
  padding-top: 24px;
  padding-bottom: 24px;

  @media screen and (min-width: 1920px) {
    padding-top: 80px;
    padding-bottom: 80px;
  }
`,Vp=S.div`
  padding: 24px;
  border-radius: 16px;
  box-shadow: 0px 0px 8px 0px rgba(27, 54, 65, 0.08);
  background: var(--background-white);

  @media screen and (min-width: 1920px) {
    padding: 80px;
  }
`,Mv=S.div`
  display: flex;
  flex-direction: column;
  gap: 3px;

  @media screen and (min-width: 1290px) {
    flex-direction: row;
    justify-content: space-between;
  }
`,oo=S.div`
  position: relative;

  @media screen and (min-width: 1920px) {
    min-width: 370px;
  }
`,Up=S.div`
  display: flex;
  flex-direction: column;

  @media screen and (min-width: 1290px) {
    gap: 40px;
    margin-bottom: 40px;
    flex-direction: row;
  }
`,Wp=S.div`
  min-width: 280px;
  gap: 16px;
  display: flex;
  flex-direction: column;

  @media screen and (min-width: 1920px) {
    min-width: 740px;
  }
`,Bp=S.div`
  @media screen and (min-width: 1920px) {
    padding: 24px;
  }
`,lo=S.p`
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
`,Hp=S.h2`
  color: var(--typography-black);
  font-size: 24px;
  font-weight: 600;
  line-height: 32px;

  @media screen and (min-width: 1920px) {
    font-size: 48px;
    line-height: 56px;
  }
`,Qp=S.h3`
  font-size: 18px;
  font-weight: 600;
  line-height: 1.3;
  margin-bottom: 24px;
  color: var(--typography-bluedark);

  @media screen and (min-width: 1920px) {
    font-size: 24px;
    margin-bottom: 16px;
  }
`,Yp=S.p`
  font-size: 16px;
  line-height: 24px;
  color: var(--typography-bluedark);

  @media screen and (min-width: 1920px) {
    font-size: 20px;
    font-weight: 500;
    line-height: 1.4;
  }
`,Kp=S.p`
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
`,Xp=S.a`
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
`,Gp=S.p`
  font-size: 18px;
  line-height: 1.3;
  font-weight: 600;
  margin-bottom: 16px;

  color: var(--typography-bluedark);

  @media screen and (min-width: 1920px) {
    font-size: 24px;
    margin-bottom: 24px;
  }
`,Zp=S.ul`
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
`,St=S.li`
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
`,un=S.svg`
  width: 266px;
  height: 56px;

  @media screen and (min-width: 1920px) {
    width: 370px;
    height: 80px;
  }
`;function Ov(e,t){if(t===e)return!1;const n=Object.values(t),r=Object.values(e);if(n.length!==r.length||n.some((o,l)=>o!==r[l]))return!0;const i=Object.keys(e);return Object.keys(t).some((o,l)=>o!==i[l])}function zv(e,t){return e.matches[t]=!1,e.mediaQueries[t]={},e}function Jp(e){const t=Object.keys(e);return typeof window>"u"?t.reduce(zv,{mediaQueries:{},matches:{}}):t.reduce((n,r)=>{const i=window.matchMedia(e[r]);return n.mediaQueries[r]=i,n.matches[r]=i.matches,n},{mediaQueries:{},matches:{}})}function Lv(e,t){function n(r,i){return r[i]=e.mediaQueries[i].matches,r}switch(t.type){case"updateMatches":return{matches:Object.keys(e.mediaQueries).reduce(n,{}),mediaQueries:e.mediaQueries};case"setQueries":return Jp(t.queries)}}function Rv(e){const t=se.useRef(e),[n,r]=se.useReducer(Lv,e,Jp);se.useEffect(()=>{Ov(e,t.current)&&(r({type:"setQueries",queries:e}),t.current=e)},[e]);function i(){return r({type:"updateMatches"})}function o(a){const d=i;return typeof a.addListener<"u"?a.addListener(d):a.addEventListener("change",d),d}se.useEffect(()=>{const a=Object.values(n.mediaQueries),d=a.map(o);function y(g,h){typeof g.addListener<"u"?g.removeListener(d[h]):g.removeEventListener("change",d[h])}return()=>{a.forEach(y)}},[n.mediaQueries]);const{matches:l}=n,u=se.useMemo(()=>Object.values(l),[l]);return{matches:l,matchesAny:u.some(Boolean),matchesAll:u.length>0&&u.every(Boolean)}}function qp(e){return Rv(Nv(e)).matchesAll}const is={};function Nv(e){return is[e]===void 0&&(is[e]={default:e}),is[e]}const Av=()=>{const e=qp("(max-width: 768px)");return s.jsx(Fp,{className:"container",children:s.jsxs(Vp,{children:[s.jsxs(Up,{children:[s.jsxs(Wp,{children:[s.jsx(Hp,{children:"Індивідуальна ментор сесія"}),s.jsx(Yp,{children:"Вирішення вашого індивідуального запиту"}),s.jsx(Kp,{children:"від 1 години"}),s.jsx(Xp,{href:"#contact",children:"Замовити послугу"})]}),s.jsxs(Bp,{children:[s.jsx(Qp,{children:"Питання, з якими можете звернутися"}),s.jsxs(Zp,{children:[s.jsx(St,{children:"Незалежна думка щодо маркетингу та розвитку"}),s.jsx(St,{children:"Порада по створенню відділу маркетингу або оцінка існуючої структури"}),s.jsx(St,{children:"Питання по роботі з підрядниками"}),s.jsx(St,{children:"Порада щодо оптимізації бізнес-процесів"}),s.jsx(St,{children:"Як вірно оцінити ефективність маркетингових дій"}),s.jsx(St,{children:"Які інструменти комунікацій використовувати"}),s.jsxs(St,{children:["Особисте питання по менеджменту та розвитку з питань управління"," ","здоров'ям"]})]})]})]}),s.jsx(Gp,{children:"Шлях проведення менторської сесії"}),s.jsxs(Mv,{children:[s.jsxs(oo,{children:[e?s.jsx(un,{children:s.jsx("use",{href:`${Y}#icon-rectangle-mob`})}):s.jsx(un,{children:s.jsx("use",{href:`${Y}#icon-rectangle`})}),s.jsx(lo,{children:"Заповнення брифу"})]}),s.jsxs(oo,{children:[e?s.jsx(un,{children:s.jsx("use",{href:`${Y}#icon-rectangle-mob`})}):s.jsx(un,{children:s.jsx("use",{href:`${Y}#icon-rectangle`})}),s.jsx(lo,{children:"Діагностика ситуації"})]}),s.jsxs(oo,{children:[e?s.jsx(un,{children:s.jsx("use",{href:`${Y}#icon-rectangle-mob`})}):s.jsx(un,{children:s.jsx("use",{href:`${Y}#icon-rectangle`})}),s.jsx(lo,{children:"Проведення сесії"})]}),s.jsxs(oo,{children:[e?s.jsx(un,{children:s.jsx("use",{href:`${Y}#icon-rectangle-mob`})}):s.jsx(un,{children:s.jsx("use",{href:`${Y}#icon-rectangle`})}),s.jsx(lo,{children:"Рекомендації"})]})]})]})})},Dv=S.div`
  display: flex;
  flex-direction: column;
  gap: 3px;

  @media screen and (min-width: 1920px) {
    flex-direction: row;
    justify-content: space-between;
    gap: 24px;
  }
`,Ot=S.svg`
  width: 260px;
  height: 60px;

  @media screen and (min-width: 1920px) {
    width: 285px;
    height: 80px;
  }
`,Wr=S.div`
  position: relative;
  height: 60px;

  @media screen and (min-width: 1920px) {
    min-width: 285px;
  }
`;S.div`
  min-width: 740px;
  display: flex;
  flex-direction: column;
  gap: 16px;
`;const Br=S.p`
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
`,Iv=()=>{const e=qp("(max-width: 768px)");return s.jsx(Fp,{className:"container",children:s.jsxs(Vp,{children:[s.jsxs(Up,{children:[s.jsxs(Wp,{children:[s.jsx(Hp,{children:"Персональний супровід"}),s.jsx(Yp,{children:"Пропрацьовуємо ваші запити та досягаємо посавлених цілей"}),s.jsx(Kp,{children:"від 2 місяців тісної взаємодії"}),s.jsx(Xp,{href:"#contact",children:"Замовити послугу"})]}),s.jsxs(Bp,{children:[s.jsx(Qp,{children:"Питання, з якими можете звернутися"}),s.jsxs(Zp,{children:[s.jsx(St,{children:"Зануритись в бізнес-процеси та зрозуміти, де є точки зростання"}),s.jsx(St,{children:"Зрозуміти що таке маркетинг та як він працює у вашому бізнесі"}),s.jsx(St,{children:"Супровід розробки та впровадження стратегій"}),s.jsx(St,{children:"Особисті питання по медичному менеджменту, маркетингу та розвитку, управління здоров'ям"})]})]})]}),s.jsx(Gp,{children:"Шлях проведення менторського супроводу"}),s.jsxs(Dv,{children:[s.jsxs(Wr,{children:[e?s.jsx(Ot,{children:s.jsx("use",{href:`${Y}#icon-rectangle-mob`})}):s.jsx(Ot,{children:s.jsx("use",{href:`${Y}#icon-rectangle2`})}),s.jsx(Br,{children:"Заповнення брифу"})]}),s.jsxs(Wr,{children:[e?s.jsx(Ot,{children:s.jsx("use",{href:`${Y}#icon-rectangle-mob`})}):s.jsx(Ot,{children:s.jsx("use",{href:`${Y}#icon-rectangle2`})}),s.jsx(Br,{children:"Діагностика ситуації"})]}),s.jsxs(Wr,{children:[e?s.jsx(Ot,{children:s.jsx("use",{href:`${Y}#icon-rectangle-mob`})}):s.jsx(Ot,{children:s.jsx("use",{href:`${Y}#icon-rectangle2`})}),s.jsx(Br,{children:"Визначення зон росту"})]}),s.jsxs(Wr,{children:[e?s.jsx(Ot,{children:s.jsx("use",{href:`${Y}#icon-rectangle-mob`})}):s.jsx(Ot,{children:s.jsx("use",{href:`${Y}#icon-rectangle2`})}),s.jsx(Br,{children:"Менторинг"})]}),s.jsxs(Wr,{children:[e?s.jsx(Ot,{children:s.jsx("use",{href:`${Y}#icon-rectangle-mob`})}):s.jsx(Ot,{children:s.jsx("use",{href:`${Y}#icon-rectangle2`})}),s.jsx(Br,{children:"Рекомендації"})]})]})]})})},_l=()=>{const e=Dn.useMediaQuery({maxWidth:767}),t=Dn.useMediaQuery({minWidth:768,maxWidth:1439}),n=Dn.useMediaQuery({minWidth:1440,maxWidth:1919}),r=Dn.useMediaQuery({minWidth:1920});return e&&"mobile"||t&&"tablet"||n&&"desktop"||r&&"largeDesktop"},$v="/healthy-management-project/assets/denta_derm1x-JWCICTe_.webp",Fv="/healthy-management-project/assets/medialt1x-5LMkh0v8.webp",Vv="/healthy-management-project/assets/cures1x--AoJBOWJ.webp",Uv="/healthy-management-project/assets/clinic1x-YgK5Wnno.webp",Wv="/healthy-management-project/assets/kmklam1x-FlPeEOTs.webp",Bv="/healthy-management-project/assets/symmetrica1x-hhcOddzB.webp",os=[{image:$v,category:"DentaDerm",title:"Діагностика бізнес-процесів, маркетингу, сервісу, розробка стратегії розвитку, менторство",about:["Діагностика бізнес-процесів та маркетингу","Стратегія розвитку","Підбір команди маркетингу","Менторство"],details:[{title:"Завдання:",about:["Розробка стратегії розвитку","Розробка нового сайту клініки","Пошук команди маркетингу"],comment:"Дії в результаті розробки стратегії розвитку передбачали роботу над проєктом в новому позиціонуванні,  пошук зовнішньої та внутрішньої команди для реалізації нового сайту, ведення соцмереж"},{title:"В результаті роботи над проєктом:",about:["Розроблені вектори розвитку","Розроблений та впроваджений новий сайт","Підібрана команда маркетингового супроводу"],comment:"В результаті співпраці партнер отримав комплексне бачення просування, сформована команда маркетингу"}]},{image:Fv,category:"Medialt",title:"Діагностика бізнес-процесів, маркетингу, сервісу, розробка стратегії розвитку, менторство",about:["Аудит ринку та конкурентів","Аудит маркетингу та сервісу","Розробка стратегії розвитку"],details:[{title:"Завдання:",about:["Розробка стратегії розвитку"]},{title:"Робота над задачою була розділена на два етапи:",about:["Аналіз конкурентів, ринку, виявлення зовнішніх можливостей та загроз","Аналіз сервісу медичного центру, аналіз роботи контакт центру, маркетингу, наявної бази пацієнтів та внутрішніх бізнес-процесів"]},{title:"В результаті комплексного аудиту підготували стратегію розвитку, яка передбачала рекомендації щодо:",about:["Управління маркетингом","Оптимізації роботи сервісу","Можливості МІС","Етапи розвитку напрямків та клініки вцілому"],comment:"В результаті співпраці - за 5 місяців ріст обороту в два рази"}]},{image:Vv,category:"Cures",title:"Автоматизація комунікації з пацієнтами",about:["Створення та запуск 20 чат-ботів для клінік","Проведення консультацій та аудитів комунікацій клінік з пацієнтами","Розробка персональних протоколів спілкування з пацієнтами"],details:[{title:"Завдання:",about:["Автоматизація комунікації з пацієнтами"]},{title:"В результаті роботи над проєктом:",about:["Розвиток проєкту по створенню чат-ботів для медичних центрів","Розробка протоколів супроводу та опитувальників для клінік","Проведення зустрічей та комунікацій з клініками","Розробка алгоритмів та запуск чат-ботів"],comment:"В результаті співпраці над проєктом запуск 20 чат-ботів для медичних центрів"}]},{image:Uv,category:"Клініка ім. ак. Юрія Спіженка",title:"Менторство, діагностика бізнес-процесів, маркетингу та сервісу, розробка стратегії розвитку",about:["Діагностика бізнес-процесів","Аудит маркетингу та сервісу","Розробка стратегії розвитку та маркетингу","Розробка та впровадження комунікаційної стратегії","Ведення маркетингових активностей "],details:[{title:"Завдання:",about:["Рестарт клініки у воєний час"]},{title:"Робота над задачею була розділена на три етапи:",about:["Діагностика конкурентів, ринку, виявлення зовнішніх можливостей та загроз","Діагностика сервісу медичного центру, аналіз роботи контакт центру, маркетингу, наявної бази пацієнтів та внутрішніх бізнес-процесів","Розробка та впровадження стратегії маркетингу, комунікації та сервісу, супровід рекламних кампаній, оптимізація бізнес-процесів"],comment:"В результаті співпраці над проєктом: збільшення доходу клініки, вихід на довоєний об’єм"}]},{image:Wv,category:"KMKlab",title:"Діагностика маркетингу, сервісу, бізнес-процесів",about:["Аудит маркетингу та інструментів комунікацій","Аудит сервісу","Розробка рекомендацій щодо розвитку"],details:[{title:"Завдання:",about:["Аудит поточної маркетингової стратегії","Аудит сервісу","Формування рекомендацій по розвитку"]},{title:"Робота над задачою була розділена на два етапи:",about:["Відвідування всіх відділень лабораторій з метою формування рекомендацій по кожній локації","Аналіз поточної ситуації маркетингу та комунікацій, ведення соціальних мереж"],comment:"В результаті співпраці проаналізовано роботу відділу маркетингу та підрядників та надані рекомендації щодо структури відділу, сформовані подальші  кроки  маркетингової  та сервісної стратегії"}]},{image:Bv,category:"Symmetrica",title:"Менторство, діагностика маркетингу, сервісу, бізнес-процесів",about:["Аудит маркетингу та сервісу","Розробка рекомендацій щодо розвитку","Оптимізація бізнес-процесів"],details:[{title:"Завдання:",about:["Діагностика поточної маркетингової діяльності та комунікацій","Аудит сервісу","Аудит роботи підрядників","Формування рекомендацій по розвитку"]},{title:"В результаті роботи над проєктом:",about:["Проведений поточний аудит шляху пацієнта, виявлені точки зростання сервісу","Проаналізовано роботу відділу маркетингу і підрядників та надані рекомендації щодо структури відділу","Надані рекомендації щодо формування подальших кроків маркетингової  та сервісної стратегії","Сформовані конверсійні показники та вектори руху","Надана менторська підтримка"]}]}],Hv=S.section`
  padding-top: 40px;
  padding-bottom: 40px;
  @media screen and (min-width: 768px) {
    padding-top: 80px;
    padding-bottom: 80px;
  }
`,Qv=S.h2`
  font-size: 48px;
  font-weight: 600;
  line-height: calc(56 / 48);

  margin-bottom: 40px;
`,Yv=S.ul`
  display: flex;
  gap: 24px;
  flex-wrap: wrap;
  @media screen and (min-width: 768px) {
  }
`,Kv=S.span`
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
`,Xv=S.svg`
  fill: currentColor;
  stroke: currentColor;

  width: 24px;
  height: 24px;
`,Gv=S.li`
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
`,Zv=S.div`
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
`,Jv=S.div`
  display: flex;
  flex-direction: column;
  gap: 16px;
`,qv=S.h4`
  font-size: ${e=>e.forDetail?"18px":"16px"};
  font-weight: 600;
  line-height: calc(${e=>e.forDetail?24/18:24/16});

  @media screen and (min-width: 768px) {
    font-size: ${e=>e.forDetail?"24px":"20px"};
    line-height: calc(${e=>e.forDetail?32/24:28/20});
  }
`,e0=S.ul`
  display: flex;
  flex-direction: column;
  gap: 8px;
`,t0=S.li`
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
`,n0=S.p`
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
`,r0=S.svg`
  fill: currentColor;
  stroke: currentColor;
`,cu=({title:e,about:t,comment:n,additionalComment:r=!1})=>s.jsxs(Jv,{children:[s.jsx(qv,{forDetail:r,children:e}),s.jsx(e0,{children:t==null?void 0:t.map(i=>s.jsxs(t0,{children:[s.jsx(r0,{children:s.jsx("use",{href:Y+"#icon-done"})}),i]},i))}),n&&s.jsx(n0,{additionalComment:r,children:n})]}),i0=S.div`
  padding: 24px;
  display: flex;
  gap: 24px;
  flex-direction: column;

  color: var(--background-whitegrey, #f4f4f6);
  @media screen and (min-width: 768px) {
    padding: 40px;
  }
`,o0=S.h3`
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
`,l0=S.svg`
  fill: currentColor;
  stroke: currentColor;

  width: 24px;
  height: 24px;

  position: absolute;
  right: 28px;
  top: 28px;
`,s0=({dataList:{details:e,category:t}})=>{const n=_l();return s.jsxs(i0,{children:[s.jsxs("div",{children:[s.jsx(o0,{symbols:t.length,children:t}),n==="mobile"&&s.jsx(l0,{children:s.jsx("use",{href:Y+"#icon-close"})})]}),e.map((r,i)=>s.jsx(cu,{title:r.title,about:r.about,comment:r.comment,additionalComment:i===0},r.title))]})},a0=S.div`
  display: flex;
  flex-direction: column;
  gap: 24px;

  color: var(--typography-bluedark, #1b3641);
`,u0=S.h3`
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
`,c0=S.img`
  height: 279px;
  width: 100%;
  border-radius: 8px;
  object-fit: cover;
  @media screen and (min-width: 768px) {
    height: 300px;
  }
`,d0=S.span`
  font-size: 14px;
  font-weight: 600;
  line-height: calc(18 / 14);
  text-align: center;
`,f0=({dataList:e,onClick:t})=>{const n=_l(),{category:r,title:i,about:o=[],image:l}=e;return s.jsxs(a0,{onClick:t,children:[s.jsx(c0,{src:l,alt:i}),s.jsx("div",{children:s.jsx(u0,{symbols:r.length,children:r})}),s.jsx(cu,{title:i,about:o}),n==="mobile"&&s.jsx(d0,{children:"Детальніше"})]})},p0=({item:e})=>{const[t,n]=se.useState(!1),r=_l(),i=()=>{r==="mobile"&&n(o=>!o)};return s.jsxs(Gv,{children:[s.jsx(f0,{dataList:e,onClick:i}),s.jsx(Zv,{isVisible:t,onClick:i,image:e.image,className:!t&&r==="mobile"?"visually-hidden":"",children:s.jsx(s0,{dataList:e})})]})},h0=()=>{const e=_l(),[t,n]=se.useState(e==="mobile"?[...os.slice(0,3)]:[...os]),r=()=>{t.length>4?n(i=>i.slice(0,3)):n([...os])};return s.jsxs(Hv,{id:"projects",className:"container",style:{paddingTop:"80px",paddingBottom:"80px"},children:[s.jsx(Qv,{children:"Проєкти"}),s.jsx(Yv,{children:t.map(i=>s.jsx(p0,{item:i},i.category))}),e==="mobile"&&s.jsxs(Kv,{onClick:r,children:[t.length>3?"Менше проєктів":"Більше проєктів",s.jsx(Xv,{children:s.jsx("use",{href:Y+`${t.length>3?"#icon-arrowup":"#icon-arrowdown"}`})})]})]})},m0=S.section`
  padding-top: 80px;
  padding-bottom: 80px;
  display: flex;
  gap: 24px;
`,g0=S.div`
  padding: 80px;
  max-width: 828px;
  height: 664px;
  box-shadow: 0px 0px 8px 0px rgba(27, 54, 65, 0.08);
  border-radius: 16px;
  background: var(--background-white);
`,y0=S.div`
  display: flex;
  flex-direction: column;
  gap: 40px;
  margin-bottom: 40px;
`,x0=S.h2`
  color: var(--typography-black);
  font-size: 48px;
  font-weight: 600;
  line-height: 56px;
`,v0=S.h2`
  color: var(--typography-bluedark);
  font-family: Montserrat;
  font-size: 20px;
  font-style: normal;
  font-weight: 500;
  line-height: 28px;
`,w0=S.ul`
  display: flex;
  flex-direction: column;
  gap: 24px;
`,ls=S.li`
  display: flex;
  gap: 16px;
  border-radius: 16px;
  background: var(--background-whitegrey);
  padding: 16px;
`,ss=S.svg`
  width: 24px;
  height: 24px;
  fill: var(--background-white);
  stroke-width: 4px;
`,as=S.p`
  color: var(--typography-bluedark);
  font-size: 20px;
  font-weight: 500;
  line-height: 28px;
`,k0=S.img`
  width: 828px;
  height: 664px;
`,j0="/healthy-management-project/assets/olga_with_book1x-kIN8FAVO.webp",S0="/healthy-management-project/assets/olga_with_book1x-KTuULWu1.jpg",_0="/healthy-management-project/assets/olga_with_book2x-lES61yI6.jpg",E0=()=>s.jsxs(m0,{className:"container",children:[s.jsxs(g0,{children:[s.jsxs(y0,{children:[s.jsx(x0,{children:"Принципи роботи"}),s.jsx(v0,{children:"Наші принципи роботи полягають у співдії з ціннісними брендами та командами, які готові до чесної співпраці, щоб сприяти досягненню поставлених цілей. Готові ділитися власним досвідом та створювати стратегії здорового менеджменту та розвитку, маркетингу та сервісу"})]}),s.jsxs(w0,{children:[s.jsxs(ls,{children:[s.jsx(ss,{children:s.jsx("use",{href:`${Y}#icon-done-yellow`})}),s.jsx(as,{children:"Більше 18 років досвіду в маркетингу та комунікаціях"})]}),s.jsxs(ls,{children:[s.jsx(ss,{children:s.jsx("use",{href:`${Y}#icon-done-yellow`})}),s.jsx(as,{children:"Глибоке розуміння бізнес-процесів медичних закладів"})]}),s.jsxs(ls,{children:[s.jsx(ss,{children:s.jsx("use",{href:`${Y}#icon-done-yellow`})}),s.jsx(as,{children:"Використання принципів доказової медицини"})]})]})]}),s.jsxs("picture",{children:[s.jsx("source",{srcSet:`${_0} 2x, ${S0} 1x`,media:"(min-width: 1920px)"}),s.jsx(k0,{src:j0,alt:"Ольга Поліщук"})]})]}),C0=S.button`
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
`,b0=()=>{const[e,t]=se.useState(!1);se.useEffect(()=>{const r=()=>{const i=window.scrollY,o=document.getElementById("footer"),l=window.innerHeight+window.scrollY-o.offsetTop,u=Math.max(80,l);t(i>480||l>80),document.documentElement.style.setProperty("--scroll-to-top-bottom",`${u}px`)};return window.addEventListener("scroll",r),()=>{window.removeEventListener("scroll",r)}},[]);const n=()=>{window.scrollTo({top:0,behavior:"smooth"})};return s.jsx(s.Fragment,{children:e&&s.jsx("section",{className:"container",children:s.jsx(C0,{onClick:n,children:s.jsx("svg",{width:"24",height:"24",children:s.jsx("use",{href:`${Y}#icon-arrowup`})})})})})},T0=(e,t)=>{const[n,r]=se.useState(()=>{try{const o=window.localStorage.getItem(e);return o?JSON.parse(o):t}catch(o){return console.error("Error loading data from localStorage:",o),t}});return[n,o=>{try{const l=o instanceof Function?o(n):o;r(l),window.localStorage.setItem(e,JSON.stringify(l))}catch(l){console.error("Error storing data to localStorage:",l)}}]},P0="/healthy-management-project/assets/computer1x-59AoGLTz.jpg",M0="/healthy-management-project/assets/computer1x-rNaa-S8Z.webp",O0="/healthy-management-project/assets/computer@2x-aIbrJSD2.jpg",Vt=()=>s.jsx("svg",{width:"8",height:"8",children:s.jsx("use",{href:`${Eo}#star`})}),z0=S.div`
  padding: 80px 0;
`,L0=S.h2`
  margin-bottom: 40px;
  font-size: 48px;
  font-weight: 600;
  line-height: 1.17;
  color: var(--typography-black);
`,R0=S.div`
  width: 100%;
  height: auto;
  display: flex;
  gap: 24px;
`,N0=S.img`
  max-width: 828px;
  height: 100%;
`,A0=S.div`
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  gap: 40px;
  flex: 1 0 0;
  max-width: 828px;
  padding: 80px;
  border-radius: 16px;
  background-color: var(--background-white);
`,D0=S.h3`
  font-size: 20px;
  font-weight: 600;
  line-height: 1.33;
  color: var(--primary-bluedark);
`,I0=S.form`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-self: stretch;
`,so=S.label`
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
`,$0=S.label`
  display: flex;
  align-content: flex-start;
  flex-wrap: wrap;
  gap: 10px;
  font-size: 16px;
  font-weight: 600;
  line-height: 1.5;
  color: var(--primary-bluedark);
`,F0=S(Vt)`
  vertical-align: super;
`,us=S.input`
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
  background: var(--background-white);
  box-shadow: 0px 0px 8px 0px rgba(27, 54, 65, 0.08);
  border: 1px solid
    ${e=>e.errors?"var(--secondary-red)":"none"};
`,V0=S.select`
  width: 100%;
  display: flex;
  height: 56px;
  padding: 0px 16px;
  align-items: center;
  gap: 8px;
  flex-shrink: 0;
  align-self: stretch;
  border-radius: 16px;
  border: none;
  border: 1px solid
    ${e=>e.errors?"var(--secondary-red)":"none"};
  background: var(--background-white);
  box-shadow: 0px 0px 8px 0px rgba(27, 54, 65, 0.08);
`,U0=S.textarea`
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
`,Hr=S.p`
  display: flex;
  gap: 8px;
  align-items: center;
  font-size: 12px;
  font-weight: 400;
  line-height: 1.33;
  color: var(--secondary-red);
`,W0=S.button`
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
`;var Li=e=>e.type==="checkbox",fr=e=>e instanceof Date,Ye=e=>e==null;const eh=e=>typeof e=="object";var Me=e=>!Ye(e)&&!Array.isArray(e)&&eh(e)&&!fr(e),B0=e=>Me(e)&&e.target?Li(e.target)?e.target.checked:e.target.value:e,H0=e=>e.substring(0,e.search(/\.\d+(\.|$)/))||e,Q0=(e,t)=>e.has(H0(t)),Y0=e=>{const t=e.constructor&&e.constructor.prototype;return Me(t)&&t.hasOwnProperty("isPrototypeOf")},du=typeof window<"u"&&typeof window.HTMLElement<"u"&&typeof document<"u";function Ut(e){let t;const n=Array.isArray(e);if(e instanceof Date)t=new Date(e);else if(e instanceof Set)t=new Set(e);else if(!(du&&(e instanceof Blob||e instanceof FileList))&&(n||Me(e)))if(t=n?[]:{},!n&&!Y0(e))t=e;else for(const r in e)e.hasOwnProperty(r)&&(t[r]=Ut(e[r]));else return e;return t}var Ri=e=>Array.isArray(e)?e.filter(Boolean):[],je=e=>e===void 0,U=(e,t,n)=>{if(!t||!Me(e))return n;const r=Ri(t.split(/[,[\].]+?/)).reduce((i,o)=>Ye(i)?i:i[o],e);return je(r)||r===e?je(e[t])?n:e[t]:r},hn=e=>typeof e=="boolean";const Jc={BLUR:"blur",FOCUS_OUT:"focusout",CHANGE:"change"},Et={onBlur:"onBlur",onChange:"onChange",onSubmit:"onSubmit",onTouched:"onTouched",all:"all"},Ft={max:"max",min:"min",maxLength:"maxLength",minLength:"minLength",pattern:"pattern",required:"required",validate:"validate"};dt.createContext(null);var K0=(e,t,n,r=!0)=>{const i={defaultValues:t._defaultValues};for(const o in e)Object.defineProperty(i,o,{get:()=>{const l=o;return t._proxyFormState[l]!==Et.all&&(t._proxyFormState[l]=!r||Et.all),n&&(n[l]=!0),e[l]}});return i},ct=e=>Me(e)&&!Object.keys(e).length,X0=(e,t,n,r)=>{n(e);const{name:i,...o}=e;return ct(o)||Object.keys(o).length>=Object.keys(t).length||Object.keys(o).find(l=>t[l]===(!r||Et.all))},cs=e=>Array.isArray(e)?e:[e];function G0(e){const t=dt.useRef(e);t.current=e,dt.useEffect(()=>{const n=!e.disabled&&t.current.subject&&t.current.subject.subscribe({next:t.current.next});return()=>{n&&n.unsubscribe()}},[e.disabled])}var At=e=>typeof e=="string",Z0=(e,t,n,r,i)=>At(e)?(r&&t.watch.add(e),U(n,e,i)):Array.isArray(e)?e.map(o=>(r&&t.watch.add(o),U(n,o))):(r&&(t.watchAll=!0),n),fu=e=>/^\w*$/.test(e),th=e=>Ri(e.replace(/["|']|\]/g,"").split(/\.|\[/));function ge(e,t,n){let r=-1;const i=fu(t)?[t]:th(t),o=i.length,l=o-1;for(;++r<o;){const u=i[r];let a=n;if(r!==l){const d=e[u];a=Me(d)||Array.isArray(d)?d:isNaN(+i[r+1])?{}:[]}e[u]=a,e=e[u]}return e}var J0=(e,t,n,r,i)=>t?{...n[e],types:{...n[e]&&n[e].types?n[e].types:{},[r]:i||!0}}:{},qc=e=>({isOnSubmit:!e||e===Et.onSubmit,isOnBlur:e===Et.onBlur,isOnChange:e===Et.onChange,isOnAll:e===Et.all,isOnTouch:e===Et.onTouched}),ed=(e,t,n)=>!n&&(t.watchAll||t.watch.has(e)||[...t.watch].some(r=>e.startsWith(r)&&/^\.\w+/.test(e.slice(r.length))));const Co=(e,t,n,r)=>{for(const i of n||Object.keys(e)){const o=U(e,i);if(o){const{_f:l,...u}=o;if(l){if(l.refs&&l.refs[0]&&t(l.refs[0],i)&&!r)break;if(l.ref&&t(l.ref,l.name)&&!r)break}else Me(u)&&Co(u,t)}}};var q0=(e,t,n)=>{const r=Ri(U(e,n));return ge(r,"root",t[n]),ge(e,n,r),e},pu=e=>e.type==="file",yn=e=>typeof e=="function",el=e=>{if(!du)return!1;const t=e?e.ownerDocument:0;return e instanceof(t&&t.defaultView?t.defaultView.HTMLElement:HTMLElement)},bo=e=>At(e),hu=e=>e.type==="radio",tl=e=>e instanceof RegExp;const td={value:!1,isValid:!1},nd={value:!0,isValid:!0};var nh=e=>{if(Array.isArray(e)){if(e.length>1){const t=e.filter(n=>n&&n.checked&&!n.disabled).map(n=>n.value);return{value:t,isValid:!!t.length}}return e[0].checked&&!e[0].disabled?e[0].attributes&&!je(e[0].attributes.value)?je(e[0].value)||e[0].value===""?nd:{value:e[0].value,isValid:!0}:nd:td}return td};const rd={isValid:!1,value:null};var rh=e=>Array.isArray(e)?e.reduce((t,n)=>n&&n.checked&&!n.disabled?{isValid:!0,value:n.value}:t,rd):rd;function id(e,t,n="validate"){if(bo(e)||Array.isArray(e)&&e.every(bo)||hn(e)&&!e)return{type:n,message:bo(e)?e:"",ref:t}}var qn=e=>Me(e)&&!tl(e)?e:{value:e,message:""},od=async(e,t,n,r,i)=>{const{ref:o,refs:l,required:u,maxLength:a,minLength:d,min:y,max:g,pattern:h,validate:w,name:x,valueAsNumber:k,mount:T,disabled:f}=e._f,c=U(t,x);if(!T||f)return{};const p=l?l[0]:o,j=$=>{r&&p.reportValidity&&(p.setCustomValidity(hn($)?"":$||""),p.reportValidity())},E={},b=hu(o),C=Li(o),L=b||C,P=(k||pu(o))&&je(o.value)&&je(c)||el(o)&&o.value===""||c===""||Array.isArray(c)&&!c.length,R=J0.bind(null,x,n,E),W=($,A,X,ae=Ft.maxLength,ce=Ft.minLength)=>{const Oe=$?A:X;E[x]={type:$?ae:ce,message:Oe,ref:o,...R($?ae:ce,Oe)}};if(i?!Array.isArray(c)||!c.length:u&&(!L&&(P||Ye(c))||hn(c)&&!c||C&&!nh(l).isValid||b&&!rh(l).isValid)){const{value:$,message:A}=bo(u)?{value:!!u,message:u}:qn(u);if($&&(E[x]={type:Ft.required,message:A,ref:p,...R(Ft.required,A)},!n))return j(A),E}if(!P&&(!Ye(y)||!Ye(g))){let $,A;const X=qn(g),ae=qn(y);if(!Ye(c)&&!isNaN(c)){const ce=o.valueAsNumber||c&&+c;Ye(X.value)||($=ce>X.value),Ye(ae.value)||(A=ce<ae.value)}else{const ce=o.valueAsDate||new Date(c),Oe=Q=>new Date(new Date().toDateString()+" "+Q),I=o.type=="time",B=o.type=="week";At(X.value)&&c&&($=I?Oe(c)>Oe(X.value):B?c>X.value:ce>new Date(X.value)),At(ae.value)&&c&&(A=I?Oe(c)<Oe(ae.value):B?c<ae.value:ce<new Date(ae.value))}if(($||A)&&(W(!!$,X.message,ae.message,Ft.max,Ft.min),!n))return j(E[x].message),E}if((a||d)&&!P&&(At(c)||i&&Array.isArray(c))){const $=qn(a),A=qn(d),X=!Ye($.value)&&c.length>+$.value,ae=!Ye(A.value)&&c.length<+A.value;if((X||ae)&&(W(X,$.message,A.message),!n))return j(E[x].message),E}if(h&&!P&&At(c)){const{value:$,message:A}=qn(h);if(tl($)&&!c.match($)&&(E[x]={type:Ft.pattern,message:A,ref:o,...R(Ft.pattern,A)},!n))return j(A),E}if(w){if(yn(w)){const $=await w(c,t),A=id($,p);if(A&&(E[x]={...A,...R(Ft.validate,A.message)},!n))return j(A.message),E}else if(Me(w)){let $={};for(const A in w){if(!ct($)&&!n)break;const X=id(await w[A](c,t),p,A);X&&($={...X,...R(A,X.message)},j(X.message),n&&(E[x]=$))}if(!ct($)&&(E[x]={ref:p,...$},!n))return E}}return j(!0),E};function e1(e,t){const n=t.slice(0,-1).length;let r=0;for(;r<n;)e=je(e)?r++:e[t[r++]];return e}function t1(e){for(const t in e)if(e.hasOwnProperty(t)&&!je(e[t]))return!1;return!0}function Ne(e,t){const n=Array.isArray(t)?t:fu(t)?[t]:th(t),r=n.length===1?e:e1(e,n),i=n.length-1,o=n[i];return r&&delete r[o],i!==0&&(Me(r)&&ct(r)||Array.isArray(r)&&t1(r))&&Ne(e,n.slice(0,-1)),e}function ds(){let e=[];return{get observers(){return e},next:i=>{for(const o of e)o.next&&o.next(i)},subscribe:i=>(e.push(i),{unsubscribe:()=>{e=e.filter(o=>o!==i)}}),unsubscribe:()=>{e=[]}}}var nl=e=>Ye(e)||!eh(e);function In(e,t){if(nl(e)||nl(t))return e===t;if(fr(e)&&fr(t))return e.getTime()===t.getTime();const n=Object.keys(e),r=Object.keys(t);if(n.length!==r.length)return!1;for(const i of n){const o=e[i];if(!r.includes(i))return!1;if(i!=="ref"){const l=t[i];if(fr(o)&&fr(l)||Me(o)&&Me(l)||Array.isArray(o)&&Array.isArray(l)?!In(o,l):o!==l)return!1}}return!0}var ih=e=>e.type==="select-multiple",n1=e=>hu(e)||Li(e),fs=e=>el(e)&&e.isConnected,oh=e=>{for(const t in e)if(yn(e[t]))return!0;return!1};function rl(e,t={}){const n=Array.isArray(e);if(Me(e)||n)for(const r in e)Array.isArray(e[r])||Me(e[r])&&!oh(e[r])?(t[r]=Array.isArray(e[r])?[]:{},rl(e[r],t[r])):Ye(e[r])||(t[r]=!0);return t}function lh(e,t,n){const r=Array.isArray(e);if(Me(e)||r)for(const i in e)Array.isArray(e[i])||Me(e[i])&&!oh(e[i])?je(t)||nl(n[i])?n[i]=Array.isArray(e[i])?rl(e[i],[]):{...rl(e[i])}:lh(e[i],Ye(t)?{}:t[i],n[i]):n[i]=!In(e[i],t[i]);return n}var ps=(e,t)=>lh(e,t,rl(t)),sh=(e,{valueAsNumber:t,valueAsDate:n,setValueAs:r})=>je(e)?e:t?e===""?NaN:e&&+e:n&&At(e)?new Date(e):r?r(e):e;function hs(e){const t=e.ref;if(!(e.refs?e.refs.every(n=>n.disabled):t.disabled))return pu(t)?t.files:hu(t)?rh(e.refs).value:ih(t)?[...t.selectedOptions].map(({value:n})=>n):Li(t)?nh(e.refs).value:sh(je(t.value)?e.ref.value:t.value,e)}var r1=(e,t,n,r)=>{const i={};for(const o of e){const l=U(t,o);l&&ge(i,o,l._f)}return{criteriaMode:n,names:[...e],fields:i,shouldUseNativeValidation:r}},Qr=e=>je(e)?e:tl(e)?e.source:Me(e)?tl(e.value)?e.value.source:e.value:e,i1=e=>e.mount&&(e.required||e.min||e.max||e.maxLength||e.minLength||e.pattern||e.validate);function ld(e,t,n){const r=U(e,n);if(r||fu(n))return{error:r,name:n};const i=n.split(".");for(;i.length;){const o=i.join("."),l=U(t,o),u=U(e,o);if(l&&!Array.isArray(l)&&n!==o)return{name:n};if(u&&u.type)return{name:o,error:u};i.pop()}return{name:n}}var o1=(e,t,n,r,i)=>i.isOnAll?!1:!n&&i.isOnTouch?!(t||e):(n?r.isOnBlur:i.isOnBlur)?!e:(n?r.isOnChange:i.isOnChange)?e:!0,l1=(e,t)=>!Ri(U(e,t)).length&&Ne(e,t);const s1={mode:Et.onSubmit,reValidateMode:Et.onChange,shouldFocusError:!0};function a1(e={},t){let n={...s1,...e},r={submitCount:0,isDirty:!1,isLoading:yn(n.defaultValues),isValidating:!1,isSubmitted:!1,isSubmitting:!1,isSubmitSuccessful:!1,isValid:!1,touchedFields:{},dirtyFields:{},errors:{},disabled:!1},i={},o=Me(n.defaultValues)||Me(n.values)?Ut(n.defaultValues||n.values)||{}:{},l=n.shouldUnregister?{}:Ut(o),u={action:!1,mount:!1,watch:!1},a={mount:new Set,unMount:new Set,array:new Set,watch:new Set},d,y=0;const g={isDirty:!1,dirtyFields:!1,touchedFields:!1,isValidating:!1,isValid:!1,errors:!1},h={values:ds(),array:ds(),state:ds()},w=e.resetOptions&&e.resetOptions.keepDirtyValues,x=qc(n.mode),k=qc(n.reValidateMode),T=n.criteriaMode===Et.all,f=m=>_=>{clearTimeout(y),y=setTimeout(m,_)},c=async m=>{if(g.isValid||m){const _=n.resolver?ct((await P()).errors):await W(i,!0);_!==r.isValid&&h.state.next({isValid:_})}},p=m=>g.isValidating&&h.state.next({isValidating:m}),j=(m,_=[],v,D,N=!0,z=!0)=>{if(D&&v){if(u.action=!0,z&&Array.isArray(U(i,m))){const H=v(U(i,m),D.argA,D.argB);N&&ge(i,m,H)}if(z&&Array.isArray(U(r.errors,m))){const H=v(U(r.errors,m),D.argA,D.argB);N&&ge(r.errors,m,H),l1(r.errors,m)}if(g.touchedFields&&z&&Array.isArray(U(r.touchedFields,m))){const H=v(U(r.touchedFields,m),D.argA,D.argB);N&&ge(r.touchedFields,m,H)}g.dirtyFields&&(r.dirtyFields=ps(o,l)),h.state.next({name:m,isDirty:A(m,_),dirtyFields:r.dirtyFields,errors:r.errors,isValid:r.isValid})}else ge(l,m,_)},E=(m,_)=>{ge(r.errors,m,_),h.state.next({errors:r.errors})},b=(m,_,v,D)=>{const N=U(i,m);if(N){const z=U(l,m,je(v)?U(o,m):v);je(z)||D&&D.defaultChecked||_?ge(l,m,_?z:hs(N._f)):ce(m,z),u.mount&&c()}},C=(m,_,v,D,N)=>{let z=!1,H=!1;const de={name:m};if(!v||D){g.isDirty&&(H=r.isDirty,r.isDirty=de.isDirty=A(),z=H!==de.isDirty);const Ee=In(U(o,m),_);H=U(r.dirtyFields,m),Ee?Ne(r.dirtyFields,m):ge(r.dirtyFields,m,!0),de.dirtyFields=r.dirtyFields,z=z||g.dirtyFields&&H!==!Ee}if(v){const Ee=U(r.touchedFields,m);Ee||(ge(r.touchedFields,m,v),de.touchedFields=r.touchedFields,z=z||g.touchedFields&&Ee!==v)}return z&&N&&h.state.next(de),z?de:{}},L=(m,_,v,D)=>{const N=U(r.errors,m),z=g.isValid&&hn(_)&&r.isValid!==_;if(e.delayError&&v?(d=f(()=>E(m,v)),d(e.delayError)):(clearTimeout(y),d=null,v?ge(r.errors,m,v):Ne(r.errors,m)),(v?!In(N,v):N)||!ct(D)||z){const H={...D,...z&&hn(_)?{isValid:_}:{},errors:r.errors,name:m};r={...r,...H},h.state.next(H)}p(!1)},P=async m=>n.resolver(l,n.context,r1(m||a.mount,i,n.criteriaMode,n.shouldUseNativeValidation)),R=async m=>{const{errors:_}=await P(m);if(m)for(const v of m){const D=U(_,v);D?ge(r.errors,v,D):Ne(r.errors,v)}else r.errors=_;return _},W=async(m,_,v={valid:!0})=>{for(const D in m){const N=m[D];if(N){const{_f:z,...H}=N;if(z){const de=a.array.has(z.name),Ee=await od(N,l,T,n.shouldUseNativeValidation&&!_,de);if(Ee[z.name]&&(v.valid=!1,_))break;!_&&(U(Ee,z.name)?de?q0(r.errors,Ee,z.name):ge(r.errors,z.name,Ee[z.name]):Ne(r.errors,z.name))}H&&await W(H,_,v)}}return v.valid},$=()=>{for(const m of a.unMount){const _=U(i,m);_&&(_._f.refs?_._f.refs.every(v=>!fs(v)):!fs(_._f.ref))&&Re(m)}a.unMount=new Set},A=(m,_)=>(m&&_&&ge(l,m,_),!In(pe(),o)),X=(m,_,v)=>Z0(m,a,{...u.mount?l:je(_)?o:At(m)?{[m]:_}:_},v,_),ae=m=>Ri(U(u.mount?l:o,m,e.shouldUnregister?U(o,m,[]):[])),ce=(m,_,v={})=>{const D=U(i,m);let N=_;if(D){const z=D._f;z&&(!z.disabled&&ge(l,m,sh(_,z)),N=el(z.ref)&&Ye(_)?"":_,ih(z.ref)?[...z.ref.options].forEach(H=>H.selected=N.includes(H.value)):z.refs?Li(z.ref)?z.refs.length>1?z.refs.forEach(H=>(!H.defaultChecked||!H.disabled)&&(H.checked=Array.isArray(N)?!!N.find(de=>de===H.value):N===H.value)):z.refs[0]&&(z.refs[0].checked=!!N):z.refs.forEach(H=>H.checked=H.value===N):pu(z.ref)?z.ref.value="":(z.ref.value=N,z.ref.type||h.values.next({name:m,values:{...l}})))}(v.shouldDirty||v.shouldTouch)&&C(m,N,v.shouldTouch,v.shouldDirty,!0),v.shouldValidate&&le(m)},Oe=(m,_,v)=>{for(const D in _){const N=_[D],z=`${m}.${D}`,H=U(i,z);(a.array.has(m)||!nl(N)||H&&!H._f)&&!fr(N)?Oe(z,N,v):ce(z,N,v)}},I=(m,_,v={})=>{const D=U(i,m),N=a.array.has(m),z=Ut(_);ge(l,m,z),N?(h.array.next({name:m,values:{...l}}),(g.isDirty||g.dirtyFields)&&v.shouldDirty&&h.state.next({name:m,dirtyFields:ps(o,l),isDirty:A(m,z)})):D&&!D._f&&!Ye(z)?Oe(m,z,v):ce(m,z,v),ed(m,a)&&h.state.next({...r}),h.values.next({name:m,values:{...l}}),!u.mount&&t()},B=async m=>{const _=m.target;let v=_.name,D=!0;const N=U(i,v),z=()=>_.type?hs(N._f):B0(m),H=de=>{D=Number.isNaN(de)||de===U(l,v,de)};if(N){let de,Ee;const Ni=z(),Xn=m.type===Jc.BLUR||m.type===Jc.FOCUS_OUT,ah=!i1(N._f)&&!n.resolver&&!U(r.errors,v)&&!N._f.deps||o1(Xn,U(r.touchedFields,v),r.isSubmitted,k,x),El=ed(v,a,Xn);ge(l,v,Ni),Xn?(N._f.onBlur&&N._f.onBlur(m),d&&d(0)):N._f.onChange&&N._f.onChange(m);const Cl=C(v,Ni,Xn,!1),uh=!ct(Cl)||El;if(!Xn&&h.values.next({name:v,type:m.type,values:{...l}}),ah)return g.isValid&&c(),uh&&h.state.next({name:v,...El?{}:Cl});if(!Xn&&El&&h.state.next({...r}),p(!0),n.resolver){const{errors:mu}=await P([v]);if(H(Ni),D){const ch=ld(r.errors,i,v),gu=ld(mu,i,ch.name||v);de=gu.error,v=gu.name,Ee=ct(mu)}}else de=(await od(N,l,T,n.shouldUseNativeValidation))[v],H(Ni),D&&(de?Ee=!1:g.isValid&&(Ee=await W(i,!0)));D&&(N._f.deps&&le(N._f.deps),L(v,Ee,de,Cl))}},Q=(m,_)=>{if(U(r.errors,_)&&m.focus)return m.focus(),1},le=async(m,_={})=>{let v,D;const N=cs(m);if(p(!0),n.resolver){const z=await R(je(m)?m:N);v=ct(z),D=m?!N.some(H=>U(z,H)):v}else m?(D=(await Promise.all(N.map(async z=>{const H=U(i,z);return await W(H&&H._f?{[z]:H}:H)}))).every(Boolean),!(!D&&!r.isValid)&&c()):D=v=await W(i);return h.state.next({...!At(m)||g.isValid&&v!==r.isValid?{}:{name:m},...n.resolver||!m?{isValid:v}:{},errors:r.errors,isValidating:!1}),_.shouldFocus&&!D&&Co(i,Q,m?N:a.mount),D},pe=m=>{const _={...o,...u.mount?l:{}};return je(m)?_:At(m)?U(_,m):m.map(v=>U(_,v))},xt=(m,_)=>({invalid:!!U((_||r).errors,m),isDirty:!!U((_||r).dirtyFields,m),isTouched:!!U((_||r).touchedFields,m),error:U((_||r).errors,m)}),Fe=m=>{m&&cs(m).forEach(_=>Ne(r.errors,_)),h.state.next({errors:m?r.errors:{}})},Pt=(m,_,v)=>{const D=(U(i,m,{_f:{}})._f||{}).ref;ge(r.errors,m,{..._,ref:D}),h.state.next({name:m,errors:r.errors,isValid:!1}),v&&v.shouldFocus&&D&&D.focus&&D.focus()},_e=(m,_)=>yn(m)?h.values.subscribe({next:v=>m(X(void 0,_),v)}):X(m,_,!0),Re=(m,_={})=>{for(const v of m?cs(m):a.mount)a.mount.delete(v),a.array.delete(v),_.keepValue||(Ne(i,v),Ne(l,v)),!_.keepError&&Ne(r.errors,v),!_.keepDirty&&Ne(r.dirtyFields,v),!_.keepTouched&&Ne(r.touchedFields,v),!n.shouldUnregister&&!_.keepDefaultValue&&Ne(o,v);h.values.next({values:{...l}}),h.state.next({...r,..._.keepDirty?{isDirty:A()}:{}}),!_.keepIsValid&&c()},Kn=({disabled:m,name:_,field:v,fields:D,value:N})=>{if(hn(m)){const z=m?void 0:je(N)?hs(v?v._f:U(D,_)._f):N;ge(l,_,z),C(_,z,!1,!1,!0)}},qt=(m,_={})=>{let v=U(i,m);const D=hn(_.disabled);return ge(i,m,{...v||{},_f:{...v&&v._f?v._f:{ref:{name:m}},name:m,mount:!0,..._}}),a.mount.add(m),v?Kn({field:v,disabled:_.disabled,name:m}):b(m,!0,_.value),{...D?{disabled:_.disabled}:{},...n.progressive?{required:!!_.required,min:Qr(_.min),max:Qr(_.max),minLength:Qr(_.minLength),maxLength:Qr(_.maxLength),pattern:Qr(_.pattern)}:{},name:m,onChange:B,onBlur:B,ref:N=>{if(N){qt(m,_),v=U(i,m);const z=je(N.value)&&N.querySelectorAll&&N.querySelectorAll("input,select,textarea")[0]||N,H=n1(z),de=v._f.refs||[];if(H?de.find(Ee=>Ee===z):z===v._f.ref)return;ge(i,m,{_f:{...v._f,...H?{refs:[...de.filter(fs),z,...Array.isArray(U(o,m))?[{}]:[]],ref:{type:z.type,name:m}}:{ref:z}}}),b(m,!1,void 0,z)}else v=U(i,m,{}),v._f&&(v._f.mount=!1),(n.shouldUnregister||_.shouldUnregister)&&!(Q0(a.array,m)&&u.action)&&a.unMount.add(m)}}},O=()=>n.shouldFocusError&&Co(i,Q,a.mount),V=m=>{hn(m)&&(h.state.next({disabled:m}),Co(i,_=>{_.disabled=m},0,!1))},G=(m,_)=>async v=>{v&&(v.preventDefault&&v.preventDefault(),v.persist&&v.persist());let D=Ut(l);if(h.state.next({isSubmitting:!0}),n.resolver){const{errors:N,values:z}=await P();r.errors=N,D=z}else await W(i);Ne(r.errors,"root"),ct(r.errors)?(h.state.next({errors:{}}),await m(D,v)):(_&&await _({...r.errors},v),O(),setTimeout(O)),h.state.next({isSubmitted:!0,isSubmitting:!1,isSubmitSuccessful:ct(r.errors),submitCount:r.submitCount+1,errors:r.errors})},Z=(m,_={})=>{U(i,m)&&(je(_.defaultValue)?I(m,U(o,m)):(I(m,_.defaultValue),ge(o,m,_.defaultValue)),_.keepTouched||Ne(r.touchedFields,m),_.keepDirty||(Ne(r.dirtyFields,m),r.isDirty=_.defaultValue?A(m,U(o,m)):A()),_.keepError||(Ne(r.errors,m),g.isValid&&c()),h.state.next({...r}))},K=(m,_={})=>{const v=m?Ut(m):o,D=Ut(v),N=m&&!ct(m)?D:o;if(_.keepDefaultValues||(o=v),!_.keepValues){if(_.keepDirtyValues||w)for(const z of a.mount)U(r.dirtyFields,z)?ge(N,z,U(l,z)):I(z,U(N,z));else{if(du&&je(m))for(const z of a.mount){const H=U(i,z);if(H&&H._f){const de=Array.isArray(H._f.refs)?H._f.refs[0]:H._f.ref;if(el(de)){const Ee=de.closest("form");if(Ee){Ee.reset();break}}}}i={}}l=e.shouldUnregister?_.keepDefaultValues?Ut(o):{}:Ut(N),h.array.next({values:{...N}}),h.values.next({values:{...N}})}a={mount:new Set,unMount:new Set,array:new Set,watch:new Set,watchAll:!1,focus:""},!u.mount&&t(),u.mount=!g.isValid||!!_.keepIsValid,u.watch=!!e.shouldUnregister,h.state.next({submitCount:_.keepSubmitCount?r.submitCount:0,isDirty:_.keepDirty?r.isDirty:!!(_.keepDefaultValues&&!In(m,o)),isSubmitted:_.keepIsSubmitted?r.isSubmitted:!1,dirtyFields:_.keepDirtyValues?r.dirtyFields:_.keepDefaultValues&&m?ps(o,m):{},touchedFields:_.keepTouched?r.touchedFields:{},errors:_.keepErrors?r.errors:{},isSubmitSuccessful:_.keepIsSubmitSuccessful?r.isSubmitSuccessful:!1,isSubmitting:!1})},te=(m,_)=>K(yn(m)?m(l):m,_);return{control:{register:qt,unregister:Re,getFieldState:xt,handleSubmit:G,setError:Pt,_executeSchema:P,_getWatch:X,_getDirty:A,_updateValid:c,_removeUnmounted:$,_updateFieldArray:j,_updateDisabledField:Kn,_getFieldArray:ae,_reset:K,_resetDefaultValues:()=>yn(n.defaultValues)&&n.defaultValues().then(m=>{te(m,n.resetOptions),h.state.next({isLoading:!1})}),_updateFormState:m=>{r={...r,...m}},_disableForm:V,_subjects:h,_proxyFormState:g,get _fields(){return i},get _formValues(){return l},get _state(){return u},set _state(m){u=m},get _defaultValues(){return o},get _names(){return a},set _names(m){a=m},get _formState(){return r},set _formState(m){r=m},get _options(){return n},set _options(m){n={...n,...m}}},trigger:le,register:qt,handleSubmit:G,watch:_e,setValue:I,getValues:pe,reset:te,resetField:Z,clearErrors:Fe,unregister:Re,setError:Pt,setFocus:(m,_={})=>{const v=U(i,m),D=v&&v._f;if(D){const N=D.refs?D.refs[0]:D.ref;N.focus&&(N.focus(),_.shouldSelect&&N.select())}},getFieldState:xt}}function u1(e={}){const t=dt.useRef(),n=dt.useRef(),[r,i]=dt.useState({isDirty:!1,isValidating:!1,isLoading:yn(e.defaultValues),isSubmitted:!1,isSubmitting:!1,isSubmitSuccessful:!1,isValid:!1,submitCount:0,dirtyFields:{},touchedFields:{},errors:{},disabled:!1,defaultValues:yn(e.defaultValues)?void 0:e.defaultValues});t.current||(t.current={...a1(e,()=>i(l=>({...l}))),formState:r});const o=t.current.control;return o._options=e,G0({subject:o._subjects.state,next:l=>{X0(l,o._proxyFormState,o._updateFormState,!0)&&i({...o._formState})}}),dt.useEffect(()=>o._disableForm(e.disabled),[o,e.disabled]),dt.useEffect(()=>{if(o._proxyFormState.isDirty){const l=o._getDirty();l!==r.isDirty&&o._subjects.state.next({isDirty:l})}},[o,r.isDirty]),dt.useEffect(()=>{e.values&&!In(e.values,n.current)?(o._reset(e.values,o._options.resetOptions),n.current=e.values):o._resetDefaultValues()},[e.values,o]),dt.useEffect(()=>{o._state.mount||(o._updateValid(),o._state.mount=!0),o._state.watch&&(o._state.watch=!1,o._subjects.state.next({...o._formState})),o._removeUnmounted()}),t.current.formState=K0(r,o),t.current}const c1=()=>{const[e,t]=T0("key",{name:"",email:"",phone:"",service:"",comment:""}),{name:n,email:r,phone:i,service:o,comment:l}=e,{register:u,handleSubmit:a,formState:{errors:d}}=u1({mode:"all"});se.useEffect(()=>{const h=JSON.stringify(e);localStorage.setItem("key",h)},[e]);const y=h=>{t({...e,[h.target.name]:h.target.value})},g=async h=>{try{console.log(h),t({name:"",email:"",phone:"",service:"",comment:""}),alert("Заявка відправлена!")}catch{alert("Помилка при відправці заявки")}};return s.jsx("section",{className:"container",id:"contact",children:s.jsxs(z0,{children:[s.jsx(L0,{children:"Контакт"}),s.jsxs(R0,{children:[s.jsxs("picture",{children:[s.jsx("source",{media:"(min-width: 1920px)",srcSet:`${M0} 1x, ${O0} 2x`}),s.jsx(N0,{src:P0})]}),s.jsxs(A0,{children:[s.jsx(D0,{children:"Залишайте ваші контактні дані і ми з вами зв'яжемось"}),s.jsxs(I0,{onSubmit:a(g),children:[s.jsxs(so,{children:["Ім’я",s.jsx(F0,{}),s.jsx(us,{type:"text",placeholder:"Введіть своє ім’я",...u("name",{required:"Це поле обов'язкове для заповнення",pattern:{value:/^(?:[a-zA-Zа-яА-ЯґҐєЄіІїЇ'-]{1,32}(?:\s+[a-zA-Zа-яА-ЯґҐєЄіІїЇ'-]{1,32})?|[a-zA-Zа-яА-ЯґҐєЄіІїЇ'-]{1,64})$/,message:"поле повинно містити одне або два слова"}}),value:n,onChange:y,errors:d.name}),d.name&&s.jsxs(Hr,{children:[s.jsx(Vt,{}),d.name.message]})]}),s.jsxs(so,{children:["Емейл",s.jsx(Vt,{}),s.jsx(us,{type:"email",placeholder:"Введіть емейл",...u("email",{required:"Це поле обов'язкове для заповнення",pattern:{value:/[a-z0-9._%+-]+@[a-z0-9.-]+\.[a-z]{2,4}$/,message:"Введіть коректний емейл"}}),value:r,onChange:y,errors:d.email}),d.email&&s.jsxs(Hr,{children:[s.jsx(Vt,{}),d.email.message]})]}),s.jsxs(so,{children:["Номер телефону",s.jsx(Vt,{}),s.jsx(us,{type:"tel",placeholder:"Введіть номер телефону",...u("phone",{required:"Це поле обов'язкове для заповнення",pattern:{value:/^0\d{9}$/,message:"Введіть коректний номер телефона"}}),value:i,onChange:y,errors:d.phone}),d.phone&&s.jsxs(Hr,{children:[s.jsx(Vt,{}),d.phone.message]})]}),s.jsxs(so,{children:["Послуга",s.jsx(Vt,{}),s.jsxs(V0,{...u("service",{required:"Оберіть послугу"}),value:o,onChange:y,errors:d.service,children:[s.jsx("option",{value:"",disabled:!0,hidden:!0,children:"Оберіть послугу"}),s.jsx("option",{value:"Менторство та консультації",children:"Менторство та консультації"}),s.jsx("option",{value:"Діагностика",children:"Діагностика"}),s.jsx("option",{value:"Стратегії",children:"Стратегії"}),s.jsx("option",{value:"Навчання",children:"Навчання"}),s.jsx("option",{value:"Інше",children:"Інше"})]}),d.service&&s.jsxs(Hr,{children:[s.jsx(Vt,{}),d.service.message]})]}),s.jsxs($0,{children:["Повідомлення",s.jsx(U0,{name:"comment",placeholder:"Введіть ваше повідомлення",...u("comment",{pattern:{value:/^.{0,500}$/,message:"Максимальна довжина повідомлення 500 символів"}}),value:l,onChange:y,errors:d.comment}),d.comment&&s.jsxs(Hr,{children:[s.jsx(Vt,{}),d.comment.message]})]}),s.jsx(W0,{type:"submit",children:"Надіслати"})]})]})]})]})})},d1=S.section`
  padding-top: 80px;
  padding-bottom: 80px;
`,f1=S.div`
  display: flex;
  flex-direction: column;
  gap: 40px;
  width: 100%;
  height: 884px;
  background: var(--background-bluedark);
  border-radius: 16px;
  padding: 80px;
`,p1=S.h2`
  font-size: 48px;
  font-weight: 600;
  line-height: 56px;
  color: var(--typography-white);
`,h1=S.p`
  color: var(--typography-white);
  font-size: 20px;
  font-weight: 500;
  line-height: 28px;
  width: 828px;
`,m1=S.span`
  color: var(--primary-yellow);
  font-size: 20px;
  font-weight: 500;
  line-height: 28px;
`,g1=S.ul`
  display: flex;
  gap: 24px;
`,y1=S.li`
  width: calc((100% - (24px * 3)) / 4);
  background: var(--background-white);
  padding: 40px;
  border-radius: 16px;
`,x1=S.button`
  width: 260px;
  height: 56px;
  color: var(--typography-bluedark);
  font-size: 16px;
  font-weight: 500;
  border: none;
  line-height: 24px;
  border-radius: 16px;
  background: var(--primary-yellow);
  box-shadow: 0px 0px 8px 0px rgba(248, 248, 248, 0.08);
  padding: 8px 24px;
  margin-left: auto;
  margin-right: auto;
`,ao="/healthy-management-project/assets/icon-2-FNpGPcjZ.svg",ms=[{title:"Менторство та консультації",about:["Для власників та менеджерів з питань менеджменту та розвитку, медичного маркетингу та комунікацій, з питань програм управління здоров'ям","Стейхолдерам та парнерам з питань медичного менеджменту та маркетингу"],path:ao},{title:"Діагностика",about:["Аудит бізнес-процесів","Аудит маркетингу та сервісу","Аудит системи комунікацій та Сustomer Journey Map"],path:ao},{title:"Стратегії",about:["Проведення стратегічних сесій","Розробка стратегії розвитку та маркетингу ","Розробка стратегій внутрішніх комунікацій","Розробка стратегій управління здоров'ям"],path:ao},{title:"Навчання",about:["Медичний маркетинг","Комунікації та сервіс"],path:ao}],v1=()=>s.jsx(d1,{className:"container",children:s.jsxs(f1,{children:[s.jsx(p1,{children:"Послуги"}),s.jsxs(h1,{children:["Будуємо ефективні ",s.jsx(m1,{children:"стратегії здорового менеджменту"})," для бізнесів. Розвивайте свій бізнес за допомогою ефективних стратегій здорового менеджменту."]}),s.jsx(g1,{children:ms==null?void 0:ms.map(e=>s.jsxs(y1,{children:[s.jsx(cu,{title:e.title,about:e.about,additionalComment:!0}),s.jsx("img",{src:e.path})]},e.title))}),s.jsx(x1,{children:"Замовити консультацію"})]})});function w1(){const e=(t,n)=>{n.preventDefault();const r=document.getElementById(t);if(r){const i=r.getBoundingClientRect(),o=window.pageYOffset||document.documentElement.scrollTop;let l;window.innerWidth<=375?l=i.top+o-80:l=i.top+o-60,window.scrollTo({top:l,behavior:"smooth"}),setTimeout(()=>{n.target.blur()},1e3)}};return s.jsxs(s.Fragment,{children:[s.jsx($p,{handleSetActiveLink:e}),s.jsxs("main",{children:[s.jsx(cv,{}),s.jsx(lx,{}),s.jsx(Yy,{}),s.jsx(mv,{}),s.jsx(E0,{}),s.jsx(v1,{}),s.jsx(Pv,{}),s.jsx(Av,{}),s.jsx(Iv,{}),s.jsx(h0,{}),s.jsx(px,{}),s.jsx(c1,{})]}),s.jsx(Ap,{handleSetActiveLink:e}),s.jsx(b0,{})]})}gs.createRoot(document.getElementById("root")).render(s.jsx(dt.StrictMode,{children:s.jsx(w1,{})}));
