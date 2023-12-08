function Jg(e,t){for(var n=0;n<t.length;n++){const r=t[n];if(typeof r!="string"&&!Array.isArray(r)){for(const i in r)if(i!=="default"&&!(i in e)){const o=Object.getOwnPropertyDescriptor(r,i);o&&Object.defineProperty(e,i,o.get?o:{enumerable:!0,get:()=>r[i]})}}}return Object.freeze(Object.defineProperty(e,Symbol.toStringTag,{value:"Module"}))}(function(){const t=document.createElement("link").relList;if(t&&t.supports&&t.supports("modulepreload"))return;for(const i of document.querySelectorAll('link[rel="modulepreload"]'))r(i);new MutationObserver(i=>{for(const o of i)if(o.type==="childList")for(const a of o.addedNodes)a.tagName==="LINK"&&a.rel==="modulepreload"&&r(a)}).observe(document,{childList:!0,subtree:!0});function n(i){const o={};return i.integrity&&(o.integrity=i.integrity),i.referrerPolicy&&(o.referrerPolicy=i.referrerPolicy),i.crossOrigin==="use-credentials"?o.credentials="include":i.crossOrigin==="anonymous"?o.credentials="omit":o.credentials="same-origin",o}function r(i){if(i.ep)return;i.ep=!0;const o=n(i);fetch(i.href,o)}})();var ev=typeof globalThis<"u"?globalThis:typeof window<"u"?window:typeof global<"u"?global:typeof self<"u"?self:{};function Ki(e){return e&&e.__esModule&&Object.prototype.hasOwnProperty.call(e,"default")?e.default:e}var ip={exports:{}},$a={},op={exports:{}},se={};/**
 * @license React
 * react.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */var Gi=Symbol.for("react.element"),tv=Symbol.for("react.portal"),nv=Symbol.for("react.fragment"),rv=Symbol.for("react.strict_mode"),iv=Symbol.for("react.profiler"),ov=Symbol.for("react.provider"),av=Symbol.for("react.context"),lv=Symbol.for("react.forward_ref"),sv=Symbol.for("react.suspense"),uv=Symbol.for("react.memo"),cv=Symbol.for("react.lazy"),Ac=Symbol.iterator;function dv(e){return e===null||typeof e!="object"?null:(e=Ac&&e[Ac]||e["@@iterator"],typeof e=="function"?e:null)}var ap={isMounted:function(){return!1},enqueueForceUpdate:function(){},enqueueReplaceState:function(){},enqueueSetState:function(){}},lp=Object.assign,sp={};function Br(e,t,n){this.props=e,this.context=t,this.refs=sp,this.updater=n||ap}Br.prototype.isReactComponent={};Br.prototype.setState=function(e,t){if(typeof e!="object"&&typeof e!="function"&&e!=null)throw Error("setState(...): takes an object of state variables to update or a function which returns an object of state variables.");this.updater.enqueueSetState(this,e,t,"setState")};Br.prototype.forceUpdate=function(e){this.updater.enqueueForceUpdate(this,e,"forceUpdate")};function up(){}up.prototype=Br.prototype;function xu(e,t,n){this.props=e,this.context=t,this.refs=sp,this.updater=n||ap}var wu=xu.prototype=new up;wu.constructor=xu;lp(wu,Br.prototype);wu.isPureReactComponent=!0;var zc=Array.isArray,cp=Object.prototype.hasOwnProperty,Su={current:null},dp={key:!0,ref:!0,__self:!0,__source:!0};function fp(e,t,n){var r,i={},o=null,a=null;if(t!=null)for(r in t.ref!==void 0&&(a=t.ref),t.key!==void 0&&(o=""+t.key),t)cp.call(t,r)&&!dp.hasOwnProperty(r)&&(i[r]=t[r]);var s=arguments.length-2;if(s===1)i.children=n;else if(1<s){for(var l=Array(s),u=0;u<s;u++)l[u]=arguments[u+2];i.children=l}if(e&&e.defaultProps)for(r in s=e.defaultProps,s)i[r]===void 0&&(i[r]=s[r]);return{$$typeof:Gi,type:e,key:o,ref:a,props:i,_owner:Su.current}}function fv(e,t){return{$$typeof:Gi,type:e.type,key:t,ref:e.ref,props:e.props,_owner:e._owner}}function bu(e){return typeof e=="object"&&e!==null&&e.$$typeof===Gi}function pv(e){var t={"=":"=0",":":"=2"};return"$"+e.replace(/[=:]/g,function(n){return t[n]})}var $c=/\/+/g;function wl(e,t){return typeof e=="object"&&e!==null&&e.key!=null?pv(""+e.key):t.toString(36)}function Vo(e,t,n,r,i){var o=typeof e;(o==="undefined"||o==="boolean")&&(e=null);var a=!1;if(e===null)a=!0;else switch(o){case"string":case"number":a=!0;break;case"object":switch(e.$$typeof){case Gi:case tv:a=!0}}if(a)return a=e,i=i(a),e=r===""?"."+wl(a,0):r,zc(i)?(n="",e!=null&&(n=e.replace($c,"$&/")+"/"),Vo(i,t,n,"",function(u){return u})):i!=null&&(bu(i)&&(i=fv(i,n+(!i.key||a&&a.key===i.key?"":(""+i.key).replace($c,"$&/")+"/")+e)),t.push(i)),1;if(a=0,r=r===""?".":r+":",zc(e))for(var s=0;s<e.length;s++){o=e[s];var l=r+wl(o,s);a+=Vo(o,t,n,l,i)}else if(l=dv(e),typeof l=="function")for(e=l.call(e),s=0;!(o=e.next()).done;)o=o.value,l=r+wl(o,s++),a+=Vo(o,t,n,l,i);else if(o==="object")throw t=String(e),Error("Objects are not valid as a React child (found: "+(t==="[object Object]"?"object with keys {"+Object.keys(e).join(", ")+"}":t)+"). If you meant to render a collection of children, use an array instead.");return a}function oo(e,t,n){if(e==null)return e;var r=[],i=0;return Vo(e,r,"","",function(o){return t.call(n,o,i++)}),r}function hv(e){if(e._status===-1){var t=e._result;t=t(),t.then(function(n){(e._status===0||e._status===-1)&&(e._status=1,e._result=n)},function(n){(e._status===0||e._status===-1)&&(e._status=2,e._result=n)}),e._status===-1&&(e._status=0,e._result=t)}if(e._status===1)return e._result.default;throw e._result}var ot={current:null},Fo={transition:null},mv={ReactCurrentDispatcher:ot,ReactCurrentBatchConfig:Fo,ReactCurrentOwner:Su};se.Children={map:oo,forEach:function(e,t,n){oo(e,function(){t.apply(this,arguments)},n)},count:function(e){var t=0;return oo(e,function(){t++}),t},toArray:function(e){return oo(e,function(t){return t})||[]},only:function(e){if(!bu(e))throw Error("React.Children.only expected to receive a single React element child.");return e}};se.Component=Br;se.Fragment=nv;se.Profiler=iv;se.PureComponent=xu;se.StrictMode=rv;se.Suspense=sv;se.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED=mv;se.cloneElement=function(e,t,n){if(e==null)throw Error("React.cloneElement(...): The argument must be a React element, but you passed "+e+".");var r=lp({},e.props),i=e.key,o=e.ref,a=e._owner;if(t!=null){if(t.ref!==void 0&&(o=t.ref,a=Su.current),t.key!==void 0&&(i=""+t.key),e.type&&e.type.defaultProps)var s=e.type.defaultProps;for(l in t)cp.call(t,l)&&!dp.hasOwnProperty(l)&&(r[l]=t[l]===void 0&&s!==void 0?s[l]:t[l])}var l=arguments.length-2;if(l===1)r.children=n;else if(1<l){s=Array(l);for(var u=0;u<l;u++)s[u]=arguments[u+2];r.children=s}return{$$typeof:Gi,type:e.type,key:i,ref:o,props:r,_owner:a}};se.createContext=function(e){return e={$$typeof:av,_currentValue:e,_currentValue2:e,_threadCount:0,Provider:null,Consumer:null,_defaultValue:null,_globalName:null},e.Provider={$$typeof:ov,_context:e},e.Consumer=e};se.createElement=fp;se.createFactory=function(e){var t=fp.bind(null,e);return t.type=e,t};se.createRef=function(){return{current:null}};se.forwardRef=function(e){return{$$typeof:lv,render:e}};se.isValidElement=bu;se.lazy=function(e){return{$$typeof:cv,_payload:{_status:-1,_result:e},_init:hv}};se.memo=function(e,t){return{$$typeof:uv,type:e,compare:t===void 0?null:t}};se.startTransition=function(e){var t=Fo.transition;Fo.transition={};try{e()}finally{Fo.transition=t}};se.unstable_act=function(){throw Error("act(...) is not supported in production builds of React.")};se.useCallback=function(e,t){return ot.current.useCallback(e,t)};se.useContext=function(e){return ot.current.useContext(e)};se.useDebugValue=function(){};se.useDeferredValue=function(e){return ot.current.useDeferredValue(e)};se.useEffect=function(e,t){return ot.current.useEffect(e,t)};se.useId=function(){return ot.current.useId()};se.useImperativeHandle=function(e,t,n){return ot.current.useImperativeHandle(e,t,n)};se.useInsertionEffect=function(e,t){return ot.current.useInsertionEffect(e,t)};se.useLayoutEffect=function(e,t){return ot.current.useLayoutEffect(e,t)};se.useMemo=function(e,t){return ot.current.useMemo(e,t)};se.useReducer=function(e,t,n){return ot.current.useReducer(e,t,n)};se.useRef=function(e){return ot.current.useRef(e)};se.useState=function(e){return ot.current.useState(e)};se.useSyncExternalStore=function(e,t,n){return ot.current.useSyncExternalStore(e,t,n)};se.useTransition=function(){return ot.current.useTransition()};se.version="18.2.0";op.exports=se;var T=op.exports;const be=Ki(T),Nc=Jg({__proto__:null,default:be},[T]);/**
 * @license React
 * react-jsx-runtime.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */var gv=T,vv=Symbol.for("react.element"),yv=Symbol.for("react.fragment"),xv=Object.prototype.hasOwnProperty,wv=gv.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED.ReactCurrentOwner,Sv={key:!0,ref:!0,__self:!0,__source:!0};function pp(e,t,n){var r,i={},o=null,a=null;n!==void 0&&(o=""+n),t.key!==void 0&&(o=""+t.key),t.ref!==void 0&&(a=t.ref);for(r in t)xv.call(t,r)&&!Sv.hasOwnProperty(r)&&(i[r]=t[r]);if(e&&e.defaultProps)for(r in t=e.defaultProps,t)i[r]===void 0&&(i[r]=t[r]);return{$$typeof:vv,type:e,key:o,ref:a,props:i,_owner:wv.current}}$a.Fragment=yv;$a.jsx=pp;$a.jsxs=pp;ip.exports=$a;var c=ip.exports,gs={},hp={exports:{}},St={},mp={exports:{}},gp={};/**
 * @license React
 * scheduler.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */(function(e){function t(F,B){var Q=F.length;F.push(B);e:for(;0<Q;){var ue=Q-1>>>1,te=F[ue];if(0<i(te,B))F[ue]=B,F[Q]=te,Q=ue;else break e}}function n(F){return F.length===0?null:F[0]}function r(F){if(F.length===0)return null;var B=F[0],Q=F.pop();if(Q!==B){F[0]=Q;e:for(var ue=0,te=F.length,Ce=te>>>1;ue<Ce;){var ye=2*(ue+1)-1,Ae=F[ye],fe=ye+1,xe=F[fe];if(0>i(Ae,Q))fe<te&&0>i(xe,Ae)?(F[ue]=xe,F[fe]=Q,ue=fe):(F[ue]=Ae,F[ye]=Q,ue=ye);else if(fe<te&&0>i(xe,Q))F[ue]=xe,F[fe]=Q,ue=fe;else break e}}return B}function i(F,B){var Q=F.sortIndex-B.sortIndex;return Q!==0?Q:F.id-B.id}if(typeof performance=="object"&&typeof performance.now=="function"){var o=performance;e.unstable_now=function(){return o.now()}}else{var a=Date,s=a.now();e.unstable_now=function(){return a.now()-s}}var l=[],u=[],p=1,h=null,m=3,x=!1,g=!1,y=!1,S=typeof setTimeout=="function"?setTimeout:null,d=typeof clearTimeout=="function"?clearTimeout:null,f=typeof setImmediate<"u"?setImmediate:null;typeof navigator<"u"&&navigator.scheduling!==void 0&&navigator.scheduling.isInputPending!==void 0&&navigator.scheduling.isInputPending.bind(navigator.scheduling);function v(F){for(var B=n(u);B!==null;){if(B.callback===null)r(u);else if(B.startTime<=F)r(u),B.sortIndex=B.expirationTime,t(l,B);else break;B=n(u)}}function w(F){if(y=!1,v(F),!g)if(n(l)!==null)g=!0,J(k);else{var B=n(u);B!==null&&me(w,B.startTime-F)}}function k(F,B){g=!1,y&&(y=!1,d(P),P=-1),x=!0;var Q=m;try{for(v(B),h=n(l);h!==null&&(!(h.expirationTime>B)||F&&!U());){var ue=h.callback;if(typeof ue=="function"){h.callback=null,m=h.priorityLevel;var te=ue(h.expirationTime<=B);B=e.unstable_now(),typeof te=="function"?h.callback=te:h===n(l)&&r(l),v(B)}else r(l);h=n(l)}if(h!==null)var Ce=!0;else{var ye=n(u);ye!==null&&me(w,ye.startTime-B),Ce=!1}return Ce}finally{h=null,m=Q,x=!1}}var O=!1,j=null,P=-1,M=5,I=-1;function U(){return!(e.unstable_now()-I<M)}function D(){if(j!==null){var F=e.unstable_now();I=F;var B=!0;try{B=j(!0,F)}finally{B?R():(O=!1,j=null)}}else O=!1}var R;if(typeof f=="function")R=function(){f(D)};else if(typeof MessageChannel<"u"){var G=new MessageChannel,q=G.port2;G.port1.onmessage=D,R=function(){q.postMessage(null)}}else R=function(){S(D,0)};function J(F){j=F,O||(O=!0,R())}function me(F,B){P=S(function(){F(e.unstable_now())},B)}e.unstable_IdlePriority=5,e.unstable_ImmediatePriority=1,e.unstable_LowPriority=4,e.unstable_NormalPriority=3,e.unstable_Profiling=null,e.unstable_UserBlockingPriority=2,e.unstable_cancelCallback=function(F){F.callback=null},e.unstable_continueExecution=function(){g||x||(g=!0,J(k))},e.unstable_forceFrameRate=function(F){0>F||125<F?console.error("forceFrameRate takes a positive int between 0 and 125, forcing frame rates higher than 125 fps is not supported"):M=0<F?Math.floor(1e3/F):5},e.unstable_getCurrentPriorityLevel=function(){return m},e.unstable_getFirstCallbackNode=function(){return n(l)},e.unstable_next=function(F){switch(m){case 1:case 2:case 3:var B=3;break;default:B=m}var Q=m;m=B;try{return F()}finally{m=Q}},e.unstable_pauseExecution=function(){},e.unstable_requestPaint=function(){},e.unstable_runWithPriority=function(F,B){switch(F){case 1:case 2:case 3:case 4:case 5:break;default:F=3}var Q=m;m=F;try{return B()}finally{m=Q}},e.unstable_scheduleCallback=function(F,B,Q){var ue=e.unstable_now();switch(typeof Q=="object"&&Q!==null?(Q=Q.delay,Q=typeof Q=="number"&&0<Q?ue+Q:ue):Q=ue,F){case 1:var te=-1;break;case 2:te=250;break;case 5:te=1073741823;break;case 4:te=1e4;break;default:te=5e3}return te=Q+te,F={id:p++,callback:B,priorityLevel:F,startTime:Q,expirationTime:te,sortIndex:-1},Q>ue?(F.sortIndex=Q,t(u,F),n(l)===null&&F===n(u)&&(y?(d(P),P=-1):y=!0,me(w,Q-ue))):(F.sortIndex=te,t(l,F),g||x||(g=!0,J(k))),F},e.unstable_shouldYield=U,e.unstable_wrapCallback=function(F){var B=m;return function(){var Q=m;m=B;try{return F.apply(this,arguments)}finally{m=Q}}}})(gp);mp.exports=gp;var bv=mp.exports;/**
 * @license React
 * react-dom.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */var vp=T,xt=bv;function L(e){for(var t="https://reactjs.org/docs/error-decoder.html?invariant="+e,n=1;n<arguments.length;n++)t+="&args[]="+encodeURIComponent(arguments[n]);return"Minified React error #"+e+"; visit "+t+" for the full message or use the non-minified dev environment for full errors and additional helpful warnings."}var yp=new Set,_i={};function lr(e,t){Vr(e,t),Vr(e+"Capture",t)}function Vr(e,t){for(_i[e]=t,e=0;e<t.length;e++)yp.add(t[e])}var cn=!(typeof window>"u"||typeof window.document>"u"||typeof window.document.createElement>"u"),vs=Object.prototype.hasOwnProperty,kv=/^[:A-Z_a-z\u00C0-\u00D6\u00D8-\u00F6\u00F8-\u02FF\u0370-\u037D\u037F-\u1FFF\u200C-\u200D\u2070-\u218F\u2C00-\u2FEF\u3001-\uD7FF\uF900-\uFDCF\uFDF0-\uFFFD][:A-Z_a-z\u00C0-\u00D6\u00D8-\u00F6\u00F8-\u02FF\u0370-\u037D\u037F-\u1FFF\u200C-\u200D\u2070-\u218F\u2C00-\u2FEF\u3001-\uD7FF\uF900-\uFDCF\uFDF0-\uFFFD\-.0-9\u00B7\u0300-\u036F\u203F-\u2040]*$/,Uc={},Wc={};function Cv(e){return vs.call(Wc,e)?!0:vs.call(Uc,e)?!1:kv.test(e)?Wc[e]=!0:(Uc[e]=!0,!1)}function jv(e,t,n,r){if(n!==null&&n.type===0)return!1;switch(typeof t){case"function":case"symbol":return!0;case"boolean":return r?!1:n!==null?!n.acceptsBooleans:(e=e.toLowerCase().slice(0,5),e!=="data-"&&e!=="aria-");default:return!1}}function Ev(e,t,n,r){if(t===null||typeof t>"u"||jv(e,t,n,r))return!0;if(r)return!1;if(n!==null)switch(n.type){case 3:return!t;case 4:return t===!1;case 5:return isNaN(t);case 6:return isNaN(t)||1>t}return!1}function at(e,t,n,r,i,o,a){this.acceptsBooleans=t===2||t===3||t===4,this.attributeName=r,this.attributeNamespace=i,this.mustUseProperty=n,this.propertyName=e,this.type=t,this.sanitizeURL=o,this.removeEmptyString=a}var Ge={};"children dangerouslySetInnerHTML defaultValue defaultChecked innerHTML suppressContentEditableWarning suppressHydrationWarning style".split(" ").forEach(function(e){Ge[e]=new at(e,0,!1,e,null,!1,!1)});[["acceptCharset","accept-charset"],["className","class"],["htmlFor","for"],["httpEquiv","http-equiv"]].forEach(function(e){var t=e[0];Ge[t]=new at(t,1,!1,e[1],null,!1,!1)});["contentEditable","draggable","spellCheck","value"].forEach(function(e){Ge[e]=new at(e,2,!1,e.toLowerCase(),null,!1,!1)});["autoReverse","externalResourcesRequired","focusable","preserveAlpha"].forEach(function(e){Ge[e]=new at(e,2,!1,e,null,!1,!1)});"allowFullScreen async autoFocus autoPlay controls default defer disabled disablePictureInPicture disableRemotePlayback formNoValidate hidden loop noModule noValidate open playsInline readOnly required reversed scoped seamless itemScope".split(" ").forEach(function(e){Ge[e]=new at(e,3,!1,e.toLowerCase(),null,!1,!1)});["checked","multiple","muted","selected"].forEach(function(e){Ge[e]=new at(e,3,!0,e,null,!1,!1)});["capture","download"].forEach(function(e){Ge[e]=new at(e,4,!1,e,null,!1,!1)});["cols","rows","size","span"].forEach(function(e){Ge[e]=new at(e,6,!1,e,null,!1,!1)});["rowSpan","start"].forEach(function(e){Ge[e]=new at(e,5,!1,e.toLowerCase(),null,!1,!1)});var ku=/[\-:]([a-z])/g;function Cu(e){return e[1].toUpperCase()}"accent-height alignment-baseline arabic-form baseline-shift cap-height clip-path clip-rule color-interpolation color-interpolation-filters color-profile color-rendering dominant-baseline enable-background fill-opacity fill-rule flood-color flood-opacity font-family font-size font-size-adjust font-stretch font-style font-variant font-weight glyph-name glyph-orientation-horizontal glyph-orientation-vertical horiz-adv-x horiz-origin-x image-rendering letter-spacing lighting-color marker-end marker-mid marker-start overline-position overline-thickness paint-order panose-1 pointer-events rendering-intent shape-rendering stop-color stop-opacity strikethrough-position strikethrough-thickness stroke-dasharray stroke-dashoffset stroke-linecap stroke-linejoin stroke-miterlimit stroke-opacity stroke-width text-anchor text-decoration text-rendering underline-position underline-thickness unicode-bidi unicode-range units-per-em v-alphabetic v-hanging v-ideographic v-mathematical vector-effect vert-adv-y vert-origin-x vert-origin-y word-spacing writing-mode xmlns:xlink x-height".split(" ").forEach(function(e){var t=e.replace(ku,Cu);Ge[t]=new at(t,1,!1,e,null,!1,!1)});"xlink:actuate xlink:arcrole xlink:role xlink:show xlink:title xlink:type".split(" ").forEach(function(e){var t=e.replace(ku,Cu);Ge[t]=new at(t,1,!1,e,"http://www.w3.org/1999/xlink",!1,!1)});["xml:base","xml:lang","xml:space"].forEach(function(e){var t=e.replace(ku,Cu);Ge[t]=new at(t,1,!1,e,"http://www.w3.org/XML/1998/namespace",!1,!1)});["tabIndex","crossOrigin"].forEach(function(e){Ge[e]=new at(e,1,!1,e.toLowerCase(),null,!1,!1)});Ge.xlinkHref=new at("xlinkHref",1,!1,"xlink:href","http://www.w3.org/1999/xlink",!0,!1);["src","href","action","formAction"].forEach(function(e){Ge[e]=new at(e,1,!1,e.toLowerCase(),null,!0,!0)});function ju(e,t,n,r){var i=Ge.hasOwnProperty(t)?Ge[t]:null;(i!==null?i.type!==0:r||!(2<t.length)||t[0]!=="o"&&t[0]!=="O"||t[1]!=="n"&&t[1]!=="N")&&(Ev(t,n,i,r)&&(n=null),r||i===null?Cv(t)&&(n===null?e.removeAttribute(t):e.setAttribute(t,""+n)):i.mustUseProperty?e[i.propertyName]=n===null?i.type===3?!1:"":n:(t=i.attributeName,r=i.attributeNamespace,n===null?e.removeAttribute(t):(i=i.type,n=i===3||i===4&&n===!0?"":""+n,r?e.setAttributeNS(r,t,n):e.setAttribute(t,n))))}var hn=vp.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED,ao=Symbol.for("react.element"),gr=Symbol.for("react.portal"),vr=Symbol.for("react.fragment"),Eu=Symbol.for("react.strict_mode"),ys=Symbol.for("react.profiler"),xp=Symbol.for("react.provider"),wp=Symbol.for("react.context"),_u=Symbol.for("react.forward_ref"),xs=Symbol.for("react.suspense"),ws=Symbol.for("react.suspense_list"),Ou=Symbol.for("react.memo"),jn=Symbol.for("react.lazy"),Sp=Symbol.for("react.offscreen"),Hc=Symbol.iterator;function Gr(e){return e===null||typeof e!="object"?null:(e=Hc&&e[Hc]||e["@@iterator"],typeof e=="function"?e:null)}var Me=Object.assign,Sl;function di(e){if(Sl===void 0)try{throw Error()}catch(n){var t=n.stack.trim().match(/\n( *(at )?)/);Sl=t&&t[1]||""}return`
`+Sl+e}var bl=!1;function kl(e,t){if(!e||bl)return"";bl=!0;var n=Error.prepareStackTrace;Error.prepareStackTrace=void 0;try{if(t)if(t=function(){throw Error()},Object.defineProperty(t.prototype,"props",{set:function(){throw Error()}}),typeof Reflect=="object"&&Reflect.construct){try{Reflect.construct(t,[])}catch(u){var r=u}Reflect.construct(e,[],t)}else{try{t.call()}catch(u){r=u}e.call(t.prototype)}else{try{throw Error()}catch(u){r=u}e()}}catch(u){if(u&&r&&typeof u.stack=="string"){for(var i=u.stack.split(`
`),o=r.stack.split(`
`),a=i.length-1,s=o.length-1;1<=a&&0<=s&&i[a]!==o[s];)s--;for(;1<=a&&0<=s;a--,s--)if(i[a]!==o[s]){if(a!==1||s!==1)do if(a--,s--,0>s||i[a]!==o[s]){var l=`
`+i[a].replace(" at new "," at ");return e.displayName&&l.includes("<anonymous>")&&(l=l.replace("<anonymous>",e.displayName)),l}while(1<=a&&0<=s);break}}}finally{bl=!1,Error.prepareStackTrace=n}return(e=e?e.displayName||e.name:"")?di(e):""}function _v(e){switch(e.tag){case 5:return di(e.type);case 16:return di("Lazy");case 13:return di("Suspense");case 19:return di("SuspenseList");case 0:case 2:case 15:return e=kl(e.type,!1),e;case 11:return e=kl(e.type.render,!1),e;case 1:return e=kl(e.type,!0),e;default:return""}}function Ss(e){if(e==null)return null;if(typeof e=="function")return e.displayName||e.name||null;if(typeof e=="string")return e;switch(e){case vr:return"Fragment";case gr:return"Portal";case ys:return"Profiler";case Eu:return"StrictMode";case xs:return"Suspense";case ws:return"SuspenseList"}if(typeof e=="object")switch(e.$$typeof){case wp:return(e.displayName||"Context")+".Consumer";case xp:return(e._context.displayName||"Context")+".Provider";case _u:var t=e.render;return e=e.displayName,e||(e=t.displayName||t.name||"",e=e!==""?"ForwardRef("+e+")":"ForwardRef"),e;case Ou:return t=e.displayName||null,t!==null?t:Ss(e.type)||"Memo";case jn:t=e._payload,e=e._init;try{return Ss(e(t))}catch{}}return null}function Ov(e){var t=e.type;switch(e.tag){case 24:return"Cache";case 9:return(t.displayName||"Context")+".Consumer";case 10:return(t._context.displayName||"Context")+".Provider";case 18:return"DehydratedFragment";case 11:return e=t.render,e=e.displayName||e.name||"",t.displayName||(e!==""?"ForwardRef("+e+")":"ForwardRef");case 7:return"Fragment";case 5:return t;case 4:return"Portal";case 3:return"Root";case 6:return"Text";case 16:return Ss(t);case 8:return t===Eu?"StrictMode":"Mode";case 22:return"Offscreen";case 12:return"Profiler";case 21:return"Scope";case 13:return"Suspense";case 19:return"SuspenseList";case 25:return"TracingMarker";case 1:case 0:case 17:case 2:case 14:case 15:if(typeof t=="function")return t.displayName||t.name||null;if(typeof t=="string")return t}return null}function $n(e){switch(typeof e){case"boolean":case"number":case"string":case"undefined":return e;case"object":return e;default:return""}}function bp(e){var t=e.type;return(e=e.nodeName)&&e.toLowerCase()==="input"&&(t==="checkbox"||t==="radio")}function Pv(e){var t=bp(e)?"checked":"value",n=Object.getOwnPropertyDescriptor(e.constructor.prototype,t),r=""+e[t];if(!e.hasOwnProperty(t)&&typeof n<"u"&&typeof n.get=="function"&&typeof n.set=="function"){var i=n.get,o=n.set;return Object.defineProperty(e,t,{configurable:!0,get:function(){return i.call(this)},set:function(a){r=""+a,o.call(this,a)}}),Object.defineProperty(e,t,{enumerable:n.enumerable}),{getValue:function(){return r},setValue:function(a){r=""+a},stopTracking:function(){e._valueTracker=null,delete e[t]}}}}function lo(e){e._valueTracker||(e._valueTracker=Pv(e))}function kp(e){if(!e)return!1;var t=e._valueTracker;if(!t)return!0;var n=t.getValue(),r="";return e&&(r=bp(e)?e.checked?"true":"false":e.value),e=r,e!==n?(t.setValue(e),!0):!1}function na(e){if(e=e||(typeof document<"u"?document:void 0),typeof e>"u")return null;try{return e.activeElement||e.body}catch{return e.body}}function bs(e,t){var n=t.checked;return Me({},t,{defaultChecked:void 0,defaultValue:void 0,value:void 0,checked:n??e._wrapperState.initialChecked})}function Bc(e,t){var n=t.defaultValue==null?"":t.defaultValue,r=t.checked!=null?t.checked:t.defaultChecked;n=$n(t.value!=null?t.value:n),e._wrapperState={initialChecked:r,initialValue:n,controlled:t.type==="checkbox"||t.type==="radio"?t.checked!=null:t.value!=null}}function Cp(e,t){t=t.checked,t!=null&&ju(e,"checked",t,!1)}function ks(e,t){Cp(e,t);var n=$n(t.value),r=t.type;if(n!=null)r==="number"?(n===0&&e.value===""||e.value!=n)&&(e.value=""+n):e.value!==""+n&&(e.value=""+n);else if(r==="submit"||r==="reset"){e.removeAttribute("value");return}t.hasOwnProperty("value")?Cs(e,t.type,n):t.hasOwnProperty("defaultValue")&&Cs(e,t.type,$n(t.defaultValue)),t.checked==null&&t.defaultChecked!=null&&(e.defaultChecked=!!t.defaultChecked)}function Qc(e,t,n){if(t.hasOwnProperty("value")||t.hasOwnProperty("defaultValue")){var r=t.type;if(!(r!=="submit"&&r!=="reset"||t.value!==void 0&&t.value!==null))return;t=""+e._wrapperState.initialValue,n||t===e.value||(e.value=t),e.defaultValue=t}n=e.name,n!==""&&(e.name=""),e.defaultChecked=!!e._wrapperState.initialChecked,n!==""&&(e.name=n)}function Cs(e,t,n){(t!=="number"||na(e.ownerDocument)!==e)&&(n==null?e.defaultValue=""+e._wrapperState.initialValue:e.defaultValue!==""+n&&(e.defaultValue=""+n))}var fi=Array.isArray;function Pr(e,t,n,r){if(e=e.options,t){t={};for(var i=0;i<n.length;i++)t["$"+n[i]]=!0;for(n=0;n<e.length;n++)i=t.hasOwnProperty("$"+e[n].value),e[n].selected!==i&&(e[n].selected=i),i&&r&&(e[n].defaultSelected=!0)}else{for(n=""+$n(n),t=null,i=0;i<e.length;i++){if(e[i].value===n){e[i].selected=!0,r&&(e[i].defaultSelected=!0);return}t!==null||e[i].disabled||(t=e[i])}t!==null&&(t.selected=!0)}}function js(e,t){if(t.dangerouslySetInnerHTML!=null)throw Error(L(91));return Me({},t,{value:void 0,defaultValue:void 0,children:""+e._wrapperState.initialValue})}function Yc(e,t){var n=t.value;if(n==null){if(n=t.children,t=t.defaultValue,n!=null){if(t!=null)throw Error(L(92));if(fi(n)){if(1<n.length)throw Error(L(93));n=n[0]}t=n}t==null&&(t=""),n=t}e._wrapperState={initialValue:$n(n)}}function jp(e,t){var n=$n(t.value),r=$n(t.defaultValue);n!=null&&(n=""+n,n!==e.value&&(e.value=n),t.defaultValue==null&&e.defaultValue!==n&&(e.defaultValue=n)),r!=null&&(e.defaultValue=""+r)}function Kc(e){var t=e.textContent;t===e._wrapperState.initialValue&&t!==""&&t!==null&&(e.value=t)}function Ep(e){switch(e){case"svg":return"http://www.w3.org/2000/svg";case"math":return"http://www.w3.org/1998/Math/MathML";default:return"http://www.w3.org/1999/xhtml"}}function Es(e,t){return e==null||e==="http://www.w3.org/1999/xhtml"?Ep(t):e==="http://www.w3.org/2000/svg"&&t==="foreignObject"?"http://www.w3.org/1999/xhtml":e}var so,_p=function(e){return typeof MSApp<"u"&&MSApp.execUnsafeLocalFunction?function(t,n,r,i){MSApp.execUnsafeLocalFunction(function(){return e(t,n,r,i)})}:e}(function(e,t){if(e.namespaceURI!=="http://www.w3.org/2000/svg"||"innerHTML"in e)e.innerHTML=t;else{for(so=so||document.createElement("div"),so.innerHTML="<svg>"+t.valueOf().toString()+"</svg>",t=so.firstChild;e.firstChild;)e.removeChild(e.firstChild);for(;t.firstChild;)e.appendChild(t.firstChild)}});function Oi(e,t){if(t){var n=e.firstChild;if(n&&n===e.lastChild&&n.nodeType===3){n.nodeValue=t;return}}e.textContent=t}var vi={animationIterationCount:!0,aspectRatio:!0,borderImageOutset:!0,borderImageSlice:!0,borderImageWidth:!0,boxFlex:!0,boxFlexGroup:!0,boxOrdinalGroup:!0,columnCount:!0,columns:!0,flex:!0,flexGrow:!0,flexPositive:!0,flexShrink:!0,flexNegative:!0,flexOrder:!0,gridArea:!0,gridRow:!0,gridRowEnd:!0,gridRowSpan:!0,gridRowStart:!0,gridColumn:!0,gridColumnEnd:!0,gridColumnSpan:!0,gridColumnStart:!0,fontWeight:!0,lineClamp:!0,lineHeight:!0,opacity:!0,order:!0,orphans:!0,tabSize:!0,widows:!0,zIndex:!0,zoom:!0,fillOpacity:!0,floodOpacity:!0,stopOpacity:!0,strokeDasharray:!0,strokeDashoffset:!0,strokeMiterlimit:!0,strokeOpacity:!0,strokeWidth:!0},Mv=["Webkit","ms","Moz","O"];Object.keys(vi).forEach(function(e){Mv.forEach(function(t){t=t+e.charAt(0).toUpperCase()+e.substring(1),vi[t]=vi[e]})});function Op(e,t,n){return t==null||typeof t=="boolean"||t===""?"":n||typeof t!="number"||t===0||vi.hasOwnProperty(e)&&vi[e]?(""+t).trim():t+"px"}function Pp(e,t){e=e.style;for(var n in t)if(t.hasOwnProperty(n)){var r=n.indexOf("--")===0,i=Op(n,t[n],r);n==="float"&&(n="cssFloat"),r?e.setProperty(n,i):e[n]=i}}var Tv=Me({menuitem:!0},{area:!0,base:!0,br:!0,col:!0,embed:!0,hr:!0,img:!0,input:!0,keygen:!0,link:!0,meta:!0,param:!0,source:!0,track:!0,wbr:!0});function _s(e,t){if(t){if(Tv[e]&&(t.children!=null||t.dangerouslySetInnerHTML!=null))throw Error(L(137,e));if(t.dangerouslySetInnerHTML!=null){if(t.children!=null)throw Error(L(60));if(typeof t.dangerouslySetInnerHTML!="object"||!("__html"in t.dangerouslySetInnerHTML))throw Error(L(61))}if(t.style!=null&&typeof t.style!="object")throw Error(L(62))}}function Os(e,t){if(e.indexOf("-")===-1)return typeof t.is=="string";switch(e){case"annotation-xml":case"color-profile":case"font-face":case"font-face-src":case"font-face-uri":case"font-face-format":case"font-face-name":case"missing-glyph":return!1;default:return!0}}var Ps=null;function Pu(e){return e=e.target||e.srcElement||window,e.correspondingUseElement&&(e=e.correspondingUseElement),e.nodeType===3?e.parentNode:e}var Ms=null,Mr=null,Tr=null;function Gc(e){if(e=qi(e)){if(typeof Ms!="function")throw Error(L(280));var t=e.stateNode;t&&(t=Ba(t),Ms(e.stateNode,e.type,t))}}function Mp(e){Mr?Tr?Tr.push(e):Tr=[e]:Mr=e}function Tp(){if(Mr){var e=Mr,t=Tr;if(Tr=Mr=null,Gc(e),t)for(e=0;e<t.length;e++)Gc(t[e])}}function Ip(e,t){return e(t)}function Rp(){}var Cl=!1;function Lp(e,t,n){if(Cl)return e(t,n);Cl=!0;try{return Ip(e,t,n)}finally{Cl=!1,(Mr!==null||Tr!==null)&&(Rp(),Tp())}}function Pi(e,t){var n=e.stateNode;if(n===null)return null;var r=Ba(n);if(r===null)return null;n=r[t];e:switch(t){case"onClick":case"onClickCapture":case"onDoubleClick":case"onDoubleClickCapture":case"onMouseDown":case"onMouseDownCapture":case"onMouseMove":case"onMouseMoveCapture":case"onMouseUp":case"onMouseUpCapture":case"onMouseEnter":(r=!r.disabled)||(e=e.type,r=!(e==="button"||e==="input"||e==="select"||e==="textarea")),e=!r;break e;default:e=!1}if(e)return null;if(n&&typeof n!="function")throw Error(L(231,t,typeof n));return n}var Ts=!1;if(cn)try{var Xr={};Object.defineProperty(Xr,"passive",{get:function(){Ts=!0}}),window.addEventListener("test",Xr,Xr),window.removeEventListener("test",Xr,Xr)}catch{Ts=!1}function Iv(e,t,n,r,i,o,a,s,l){var u=Array.prototype.slice.call(arguments,3);try{t.apply(n,u)}catch(p){this.onError(p)}}var yi=!1,ra=null,ia=!1,Is=null,Rv={onError:function(e){yi=!0,ra=e}};function Lv(e,t,n,r,i,o,a,s,l){yi=!1,ra=null,Iv.apply(Rv,arguments)}function Dv(e,t,n,r,i,o,a,s,l){if(Lv.apply(this,arguments),yi){if(yi){var u=ra;yi=!1,ra=null}else throw Error(L(198));ia||(ia=!0,Is=u)}}function sr(e){var t=e,n=e;if(e.alternate)for(;t.return;)t=t.return;else{e=t;do t=e,t.flags&4098&&(n=t.return),e=t.return;while(e)}return t.tag===3?n:null}function Dp(e){if(e.tag===13){var t=e.memoizedState;if(t===null&&(e=e.alternate,e!==null&&(t=e.memoizedState)),t!==null)return t.dehydrated}return null}function Xc(e){if(sr(e)!==e)throw Error(L(188))}function Vv(e){var t=e.alternate;if(!t){if(t=sr(e),t===null)throw Error(L(188));return t!==e?null:e}for(var n=e,r=t;;){var i=n.return;if(i===null)break;var o=i.alternate;if(o===null){if(r=i.return,r!==null){n=r;continue}break}if(i.child===o.child){for(o=i.child;o;){if(o===n)return Xc(i),e;if(o===r)return Xc(i),t;o=o.sibling}throw Error(L(188))}if(n.return!==r.return)n=i,r=o;else{for(var a=!1,s=i.child;s;){if(s===n){a=!0,n=i,r=o;break}if(s===r){a=!0,r=i,n=o;break}s=s.sibling}if(!a){for(s=o.child;s;){if(s===n){a=!0,n=o,r=i;break}if(s===r){a=!0,r=o,n=i;break}s=s.sibling}if(!a)throw Error(L(189))}}if(n.alternate!==r)throw Error(L(190))}if(n.tag!==3)throw Error(L(188));return n.stateNode.current===n?e:t}function Vp(e){return e=Vv(e),e!==null?Fp(e):null}function Fp(e){if(e.tag===5||e.tag===6)return e;for(e=e.child;e!==null;){var t=Fp(e);if(t!==null)return t;e=e.sibling}return null}var Ap=xt.unstable_scheduleCallback,Zc=xt.unstable_cancelCallback,Fv=xt.unstable_shouldYield,Av=xt.unstable_requestPaint,Le=xt.unstable_now,zv=xt.unstable_getCurrentPriorityLevel,Mu=xt.unstable_ImmediatePriority,zp=xt.unstable_UserBlockingPriority,oa=xt.unstable_NormalPriority,$v=xt.unstable_LowPriority,$p=xt.unstable_IdlePriority,Na=null,Zt=null;function Nv(e){if(Zt&&typeof Zt.onCommitFiberRoot=="function")try{Zt.onCommitFiberRoot(Na,e,void 0,(e.current.flags&128)===128)}catch{}}var zt=Math.clz32?Math.clz32:Hv,Uv=Math.log,Wv=Math.LN2;function Hv(e){return e>>>=0,e===0?32:31-(Uv(e)/Wv|0)|0}var uo=64,co=4194304;function pi(e){switch(e&-e){case 1:return 1;case 2:return 2;case 4:return 4;case 8:return 8;case 16:return 16;case 32:return 32;case 64:case 128:case 256:case 512:case 1024:case 2048:case 4096:case 8192:case 16384:case 32768:case 65536:case 131072:case 262144:case 524288:case 1048576:case 2097152:return e&4194240;case 4194304:case 8388608:case 16777216:case 33554432:case 67108864:return e&130023424;case 134217728:return 134217728;case 268435456:return 268435456;case 536870912:return 536870912;case 1073741824:return 1073741824;default:return e}}function aa(e,t){var n=e.pendingLanes;if(n===0)return 0;var r=0,i=e.suspendedLanes,o=e.pingedLanes,a=n&268435455;if(a!==0){var s=a&~i;s!==0?r=pi(s):(o&=a,o!==0&&(r=pi(o)))}else a=n&~i,a!==0?r=pi(a):o!==0&&(r=pi(o));if(r===0)return 0;if(t!==0&&t!==r&&!(t&i)&&(i=r&-r,o=t&-t,i>=o||i===16&&(o&4194240)!==0))return t;if(r&4&&(r|=n&16),t=e.entangledLanes,t!==0)for(e=e.entanglements,t&=r;0<t;)n=31-zt(t),i=1<<n,r|=e[n],t&=~i;return r}function Bv(e,t){switch(e){case 1:case 2:case 4:return t+250;case 8:case 16:case 32:case 64:case 128:case 256:case 512:case 1024:case 2048:case 4096:case 8192:case 16384:case 32768:case 65536:case 131072:case 262144:case 524288:case 1048576:case 2097152:return t+5e3;case 4194304:case 8388608:case 16777216:case 33554432:case 67108864:return-1;case 134217728:case 268435456:case 536870912:case 1073741824:return-1;default:return-1}}function Qv(e,t){for(var n=e.suspendedLanes,r=e.pingedLanes,i=e.expirationTimes,o=e.pendingLanes;0<o;){var a=31-zt(o),s=1<<a,l=i[a];l===-1?(!(s&n)||s&r)&&(i[a]=Bv(s,t)):l<=t&&(e.expiredLanes|=s),o&=~s}}function Rs(e){return e=e.pendingLanes&-1073741825,e!==0?e:e&1073741824?1073741824:0}function Np(){var e=uo;return uo<<=1,!(uo&4194240)&&(uo=64),e}function jl(e){for(var t=[],n=0;31>n;n++)t.push(e);return t}function Xi(e,t,n){e.pendingLanes|=t,t!==536870912&&(e.suspendedLanes=0,e.pingedLanes=0),e=e.eventTimes,t=31-zt(t),e[t]=n}function Yv(e,t){var n=e.pendingLanes&~t;e.pendingLanes=t,e.suspendedLanes=0,e.pingedLanes=0,e.expiredLanes&=t,e.mutableReadLanes&=t,e.entangledLanes&=t,t=e.entanglements;var r=e.eventTimes;for(e=e.expirationTimes;0<n;){var i=31-zt(n),o=1<<i;t[i]=0,r[i]=-1,e[i]=-1,n&=~o}}function Tu(e,t){var n=e.entangledLanes|=t;for(e=e.entanglements;n;){var r=31-zt(n),i=1<<r;i&t|e[r]&t&&(e[r]|=t),n&=~i}}var ge=0;function Up(e){return e&=-e,1<e?4<e?e&268435455?16:536870912:4:1}var Wp,Iu,Hp,Bp,Qp,Ls=!1,fo=[],In=null,Rn=null,Ln=null,Mi=new Map,Ti=new Map,_n=[],Kv="mousedown mouseup touchcancel touchend touchstart auxclick dblclick pointercancel pointerdown pointerup dragend dragstart drop compositionend compositionstart keydown keypress keyup input textInput copy cut paste click change contextmenu reset submit".split(" ");function qc(e,t){switch(e){case"focusin":case"focusout":In=null;break;case"dragenter":case"dragleave":Rn=null;break;case"mouseover":case"mouseout":Ln=null;break;case"pointerover":case"pointerout":Mi.delete(t.pointerId);break;case"gotpointercapture":case"lostpointercapture":Ti.delete(t.pointerId)}}function Zr(e,t,n,r,i,o){return e===null||e.nativeEvent!==o?(e={blockedOn:t,domEventName:n,eventSystemFlags:r,nativeEvent:o,targetContainers:[i]},t!==null&&(t=qi(t),t!==null&&Iu(t)),e):(e.eventSystemFlags|=r,t=e.targetContainers,i!==null&&t.indexOf(i)===-1&&t.push(i),e)}function Gv(e,t,n,r,i){switch(t){case"focusin":return In=Zr(In,e,t,n,r,i),!0;case"dragenter":return Rn=Zr(Rn,e,t,n,r,i),!0;case"mouseover":return Ln=Zr(Ln,e,t,n,r,i),!0;case"pointerover":var o=i.pointerId;return Mi.set(o,Zr(Mi.get(o)||null,e,t,n,r,i)),!0;case"gotpointercapture":return o=i.pointerId,Ti.set(o,Zr(Ti.get(o)||null,e,t,n,r,i)),!0}return!1}function Yp(e){var t=Kn(e.target);if(t!==null){var n=sr(t);if(n!==null){if(t=n.tag,t===13){if(t=Dp(n),t!==null){e.blockedOn=t,Qp(e.priority,function(){Hp(n)});return}}else if(t===3&&n.stateNode.current.memoizedState.isDehydrated){e.blockedOn=n.tag===3?n.stateNode.containerInfo:null;return}}}e.blockedOn=null}function Ao(e){if(e.blockedOn!==null)return!1;for(var t=e.targetContainers;0<t.length;){var n=Ds(e.domEventName,e.eventSystemFlags,t[0],e.nativeEvent);if(n===null){n=e.nativeEvent;var r=new n.constructor(n.type,n);Ps=r,n.target.dispatchEvent(r),Ps=null}else return t=qi(n),t!==null&&Iu(t),e.blockedOn=n,!1;t.shift()}return!0}function Jc(e,t,n){Ao(e)&&n.delete(t)}function Xv(){Ls=!1,In!==null&&Ao(In)&&(In=null),Rn!==null&&Ao(Rn)&&(Rn=null),Ln!==null&&Ao(Ln)&&(Ln=null),Mi.forEach(Jc),Ti.forEach(Jc)}function qr(e,t){e.blockedOn===t&&(e.blockedOn=null,Ls||(Ls=!0,xt.unstable_scheduleCallback(xt.unstable_NormalPriority,Xv)))}function Ii(e){function t(i){return qr(i,e)}if(0<fo.length){qr(fo[0],e);for(var n=1;n<fo.length;n++){var r=fo[n];r.blockedOn===e&&(r.blockedOn=null)}}for(In!==null&&qr(In,e),Rn!==null&&qr(Rn,e),Ln!==null&&qr(Ln,e),Mi.forEach(t),Ti.forEach(t),n=0;n<_n.length;n++)r=_n[n],r.blockedOn===e&&(r.blockedOn=null);for(;0<_n.length&&(n=_n[0],n.blockedOn===null);)Yp(n),n.blockedOn===null&&_n.shift()}var Ir=hn.ReactCurrentBatchConfig,la=!0;function Zv(e,t,n,r){var i=ge,o=Ir.transition;Ir.transition=null;try{ge=1,Ru(e,t,n,r)}finally{ge=i,Ir.transition=o}}function qv(e,t,n,r){var i=ge,o=Ir.transition;Ir.transition=null;try{ge=4,Ru(e,t,n,r)}finally{ge=i,Ir.transition=o}}function Ru(e,t,n,r){if(la){var i=Ds(e,t,n,r);if(i===null)Dl(e,t,r,sa,n),qc(e,r);else if(Gv(i,e,t,n,r))r.stopPropagation();else if(qc(e,r),t&4&&-1<Kv.indexOf(e)){for(;i!==null;){var o=qi(i);if(o!==null&&Wp(o),o=Ds(e,t,n,r),o===null&&Dl(e,t,r,sa,n),o===i)break;i=o}i!==null&&r.stopPropagation()}else Dl(e,t,r,null,n)}}var sa=null;function Ds(e,t,n,r){if(sa=null,e=Pu(r),e=Kn(e),e!==null)if(t=sr(e),t===null)e=null;else if(n=t.tag,n===13){if(e=Dp(t),e!==null)return e;e=null}else if(n===3){if(t.stateNode.current.memoizedState.isDehydrated)return t.tag===3?t.stateNode.containerInfo:null;e=null}else t!==e&&(e=null);return sa=e,null}function Kp(e){switch(e){case"cancel":case"click":case"close":case"contextmenu":case"copy":case"cut":case"auxclick":case"dblclick":case"dragend":case"dragstart":case"drop":case"focusin":case"focusout":case"input":case"invalid":case"keydown":case"keypress":case"keyup":case"mousedown":case"mouseup":case"paste":case"pause":case"play":case"pointercancel":case"pointerdown":case"pointerup":case"ratechange":case"reset":case"resize":case"seeked":case"submit":case"touchcancel":case"touchend":case"touchstart":case"volumechange":case"change":case"selectionchange":case"textInput":case"compositionstart":case"compositionend":case"compositionupdate":case"beforeblur":case"afterblur":case"beforeinput":case"blur":case"fullscreenchange":case"focus":case"hashchange":case"popstate":case"select":case"selectstart":return 1;case"drag":case"dragenter":case"dragexit":case"dragleave":case"dragover":case"mousemove":case"mouseout":case"mouseover":case"pointermove":case"pointerout":case"pointerover":case"scroll":case"toggle":case"touchmove":case"wheel":case"mouseenter":case"mouseleave":case"pointerenter":case"pointerleave":return 4;case"message":switch(zv()){case Mu:return 1;case zp:return 4;case oa:case $v:return 16;case $p:return 536870912;default:return 16}default:return 16}}var Pn=null,Lu=null,zo=null;function Gp(){if(zo)return zo;var e,t=Lu,n=t.length,r,i="value"in Pn?Pn.value:Pn.textContent,o=i.length;for(e=0;e<n&&t[e]===i[e];e++);var a=n-e;for(r=1;r<=a&&t[n-r]===i[o-r];r++);return zo=i.slice(e,1<r?1-r:void 0)}function $o(e){var t=e.keyCode;return"charCode"in e?(e=e.charCode,e===0&&t===13&&(e=13)):e=t,e===10&&(e=13),32<=e||e===13?e:0}function po(){return!0}function ed(){return!1}function bt(e){function t(n,r,i,o,a){this._reactName=n,this._targetInst=i,this.type=r,this.nativeEvent=o,this.target=a,this.currentTarget=null;for(var s in e)e.hasOwnProperty(s)&&(n=e[s],this[s]=n?n(o):o[s]);return this.isDefaultPrevented=(o.defaultPrevented!=null?o.defaultPrevented:o.returnValue===!1)?po:ed,this.isPropagationStopped=ed,this}return Me(t.prototype,{preventDefault:function(){this.defaultPrevented=!0;var n=this.nativeEvent;n&&(n.preventDefault?n.preventDefault():typeof n.returnValue!="unknown"&&(n.returnValue=!1),this.isDefaultPrevented=po)},stopPropagation:function(){var n=this.nativeEvent;n&&(n.stopPropagation?n.stopPropagation():typeof n.cancelBubble!="unknown"&&(n.cancelBubble=!0),this.isPropagationStopped=po)},persist:function(){},isPersistent:po}),t}var Qr={eventPhase:0,bubbles:0,cancelable:0,timeStamp:function(e){return e.timeStamp||Date.now()},defaultPrevented:0,isTrusted:0},Du=bt(Qr),Zi=Me({},Qr,{view:0,detail:0}),Jv=bt(Zi),El,_l,Jr,Ua=Me({},Zi,{screenX:0,screenY:0,clientX:0,clientY:0,pageX:0,pageY:0,ctrlKey:0,shiftKey:0,altKey:0,metaKey:0,getModifierState:Vu,button:0,buttons:0,relatedTarget:function(e){return e.relatedTarget===void 0?e.fromElement===e.srcElement?e.toElement:e.fromElement:e.relatedTarget},movementX:function(e){return"movementX"in e?e.movementX:(e!==Jr&&(Jr&&e.type==="mousemove"?(El=e.screenX-Jr.screenX,_l=e.screenY-Jr.screenY):_l=El=0,Jr=e),El)},movementY:function(e){return"movementY"in e?e.movementY:_l}}),td=bt(Ua),e0=Me({},Ua,{dataTransfer:0}),t0=bt(e0),n0=Me({},Zi,{relatedTarget:0}),Ol=bt(n0),r0=Me({},Qr,{animationName:0,elapsedTime:0,pseudoElement:0}),i0=bt(r0),o0=Me({},Qr,{clipboardData:function(e){return"clipboardData"in e?e.clipboardData:window.clipboardData}}),a0=bt(o0),l0=Me({},Qr,{data:0}),nd=bt(l0),s0={Esc:"Escape",Spacebar:" ",Left:"ArrowLeft",Up:"ArrowUp",Right:"ArrowRight",Down:"ArrowDown",Del:"Delete",Win:"OS",Menu:"ContextMenu",Apps:"ContextMenu",Scroll:"ScrollLock",MozPrintableKey:"Unidentified"},u0={8:"Backspace",9:"Tab",12:"Clear",13:"Enter",16:"Shift",17:"Control",18:"Alt",19:"Pause",20:"CapsLock",27:"Escape",32:" ",33:"PageUp",34:"PageDown",35:"End",36:"Home",37:"ArrowLeft",38:"ArrowUp",39:"ArrowRight",40:"ArrowDown",45:"Insert",46:"Delete",112:"F1",113:"F2",114:"F3",115:"F4",116:"F5",117:"F6",118:"F7",119:"F8",120:"F9",121:"F10",122:"F11",123:"F12",144:"NumLock",145:"ScrollLock",224:"Meta"},c0={Alt:"altKey",Control:"ctrlKey",Meta:"metaKey",Shift:"shiftKey"};function d0(e){var t=this.nativeEvent;return t.getModifierState?t.getModifierState(e):(e=c0[e])?!!t[e]:!1}function Vu(){return d0}var f0=Me({},Zi,{key:function(e){if(e.key){var t=s0[e.key]||e.key;if(t!=="Unidentified")return t}return e.type==="keypress"?(e=$o(e),e===13?"Enter":String.fromCharCode(e)):e.type==="keydown"||e.type==="keyup"?u0[e.keyCode]||"Unidentified":""},code:0,location:0,ctrlKey:0,shiftKey:0,altKey:0,metaKey:0,repeat:0,locale:0,getModifierState:Vu,charCode:function(e){return e.type==="keypress"?$o(e):0},keyCode:function(e){return e.type==="keydown"||e.type==="keyup"?e.keyCode:0},which:function(e){return e.type==="keypress"?$o(e):e.type==="keydown"||e.type==="keyup"?e.keyCode:0}}),p0=bt(f0),h0=Me({},Ua,{pointerId:0,width:0,height:0,pressure:0,tangentialPressure:0,tiltX:0,tiltY:0,twist:0,pointerType:0,isPrimary:0}),rd=bt(h0),m0=Me({},Zi,{touches:0,targetTouches:0,changedTouches:0,altKey:0,metaKey:0,ctrlKey:0,shiftKey:0,getModifierState:Vu}),g0=bt(m0),v0=Me({},Qr,{propertyName:0,elapsedTime:0,pseudoElement:0}),y0=bt(v0),x0=Me({},Ua,{deltaX:function(e){return"deltaX"in e?e.deltaX:"wheelDeltaX"in e?-e.wheelDeltaX:0},deltaY:function(e){return"deltaY"in e?e.deltaY:"wheelDeltaY"in e?-e.wheelDeltaY:"wheelDelta"in e?-e.wheelDelta:0},deltaZ:0,deltaMode:0}),w0=bt(x0),S0=[9,13,27,32],Fu=cn&&"CompositionEvent"in window,xi=null;cn&&"documentMode"in document&&(xi=document.documentMode);var b0=cn&&"TextEvent"in window&&!xi,Xp=cn&&(!Fu||xi&&8<xi&&11>=xi),id=" ",od=!1;function Zp(e,t){switch(e){case"keyup":return S0.indexOf(t.keyCode)!==-1;case"keydown":return t.keyCode!==229;case"keypress":case"mousedown":case"focusout":return!0;default:return!1}}function qp(e){return e=e.detail,typeof e=="object"&&"data"in e?e.data:null}var yr=!1;function k0(e,t){switch(e){case"compositionend":return qp(t);case"keypress":return t.which!==32?null:(od=!0,id);case"textInput":return e=t.data,e===id&&od?null:e;default:return null}}function C0(e,t){if(yr)return e==="compositionend"||!Fu&&Zp(e,t)?(e=Gp(),zo=Lu=Pn=null,yr=!1,e):null;switch(e){case"paste":return null;case"keypress":if(!(t.ctrlKey||t.altKey||t.metaKey)||t.ctrlKey&&t.altKey){if(t.char&&1<t.char.length)return t.char;if(t.which)return String.fromCharCode(t.which)}return null;case"compositionend":return Xp&&t.locale!=="ko"?null:t.data;default:return null}}var j0={color:!0,date:!0,datetime:!0,"datetime-local":!0,email:!0,month:!0,number:!0,password:!0,range:!0,search:!0,tel:!0,text:!0,time:!0,url:!0,week:!0};function ad(e){var t=e&&e.nodeName&&e.nodeName.toLowerCase();return t==="input"?!!j0[e.type]:t==="textarea"}function Jp(e,t,n,r){Mp(r),t=ua(t,"onChange"),0<t.length&&(n=new Du("onChange","change",null,n,r),e.push({event:n,listeners:t}))}var wi=null,Ri=null;function E0(e){ch(e,0)}function Wa(e){var t=Sr(e);if(kp(t))return e}function _0(e,t){if(e==="change")return t}var eh=!1;if(cn){var Pl;if(cn){var Ml="oninput"in document;if(!Ml){var ld=document.createElement("div");ld.setAttribute("oninput","return;"),Ml=typeof ld.oninput=="function"}Pl=Ml}else Pl=!1;eh=Pl&&(!document.documentMode||9<document.documentMode)}function sd(){wi&&(wi.detachEvent("onpropertychange",th),Ri=wi=null)}function th(e){if(e.propertyName==="value"&&Wa(Ri)){var t=[];Jp(t,Ri,e,Pu(e)),Lp(E0,t)}}function O0(e,t,n){e==="focusin"?(sd(),wi=t,Ri=n,wi.attachEvent("onpropertychange",th)):e==="focusout"&&sd()}function P0(e){if(e==="selectionchange"||e==="keyup"||e==="keydown")return Wa(Ri)}function M0(e,t){if(e==="click")return Wa(t)}function T0(e,t){if(e==="input"||e==="change")return Wa(t)}function I0(e,t){return e===t&&(e!==0||1/e===1/t)||e!==e&&t!==t}var Ut=typeof Object.is=="function"?Object.is:I0;function Li(e,t){if(Ut(e,t))return!0;if(typeof e!="object"||e===null||typeof t!="object"||t===null)return!1;var n=Object.keys(e),r=Object.keys(t);if(n.length!==r.length)return!1;for(r=0;r<n.length;r++){var i=n[r];if(!vs.call(t,i)||!Ut(e[i],t[i]))return!1}return!0}function ud(e){for(;e&&e.firstChild;)e=e.firstChild;return e}function cd(e,t){var n=ud(e);e=0;for(var r;n;){if(n.nodeType===3){if(r=e+n.textContent.length,e<=t&&r>=t)return{node:n,offset:t-e};e=r}e:{for(;n;){if(n.nextSibling){n=n.nextSibling;break e}n=n.parentNode}n=void 0}n=ud(n)}}function nh(e,t){return e&&t?e===t?!0:e&&e.nodeType===3?!1:t&&t.nodeType===3?nh(e,t.parentNode):"contains"in e?e.contains(t):e.compareDocumentPosition?!!(e.compareDocumentPosition(t)&16):!1:!1}function rh(){for(var e=window,t=na();t instanceof e.HTMLIFrameElement;){try{var n=typeof t.contentWindow.location.href=="string"}catch{n=!1}if(n)e=t.contentWindow;else break;t=na(e.document)}return t}function Au(e){var t=e&&e.nodeName&&e.nodeName.toLowerCase();return t&&(t==="input"&&(e.type==="text"||e.type==="search"||e.type==="tel"||e.type==="url"||e.type==="password")||t==="textarea"||e.contentEditable==="true")}function R0(e){var t=rh(),n=e.focusedElem,r=e.selectionRange;if(t!==n&&n&&n.ownerDocument&&nh(n.ownerDocument.documentElement,n)){if(r!==null&&Au(n)){if(t=r.start,e=r.end,e===void 0&&(e=t),"selectionStart"in n)n.selectionStart=t,n.selectionEnd=Math.min(e,n.value.length);else if(e=(t=n.ownerDocument||document)&&t.defaultView||window,e.getSelection){e=e.getSelection();var i=n.textContent.length,o=Math.min(r.start,i);r=r.end===void 0?o:Math.min(r.end,i),!e.extend&&o>r&&(i=r,r=o,o=i),i=cd(n,o);var a=cd(n,r);i&&a&&(e.rangeCount!==1||e.anchorNode!==i.node||e.anchorOffset!==i.offset||e.focusNode!==a.node||e.focusOffset!==a.offset)&&(t=t.createRange(),t.setStart(i.node,i.offset),e.removeAllRanges(),o>r?(e.addRange(t),e.extend(a.node,a.offset)):(t.setEnd(a.node,a.offset),e.addRange(t)))}}for(t=[],e=n;e=e.parentNode;)e.nodeType===1&&t.push({element:e,left:e.scrollLeft,top:e.scrollTop});for(typeof n.focus=="function"&&n.focus(),n=0;n<t.length;n++)e=t[n],e.element.scrollLeft=e.left,e.element.scrollTop=e.top}}var L0=cn&&"documentMode"in document&&11>=document.documentMode,xr=null,Vs=null,Si=null,Fs=!1;function dd(e,t,n){var r=n.window===n?n.document:n.nodeType===9?n:n.ownerDocument;Fs||xr==null||xr!==na(r)||(r=xr,"selectionStart"in r&&Au(r)?r={start:r.selectionStart,end:r.selectionEnd}:(r=(r.ownerDocument&&r.ownerDocument.defaultView||window).getSelection(),r={anchorNode:r.anchorNode,anchorOffset:r.anchorOffset,focusNode:r.focusNode,focusOffset:r.focusOffset}),Si&&Li(Si,r)||(Si=r,r=ua(Vs,"onSelect"),0<r.length&&(t=new Du("onSelect","select",null,t,n),e.push({event:t,listeners:r}),t.target=xr)))}function ho(e,t){var n={};return n[e.toLowerCase()]=t.toLowerCase(),n["Webkit"+e]="webkit"+t,n["Moz"+e]="moz"+t,n}var wr={animationend:ho("Animation","AnimationEnd"),animationiteration:ho("Animation","AnimationIteration"),animationstart:ho("Animation","AnimationStart"),transitionend:ho("Transition","TransitionEnd")},Tl={},ih={};cn&&(ih=document.createElement("div").style,"AnimationEvent"in window||(delete wr.animationend.animation,delete wr.animationiteration.animation,delete wr.animationstart.animation),"TransitionEvent"in window||delete wr.transitionend.transition);function Ha(e){if(Tl[e])return Tl[e];if(!wr[e])return e;var t=wr[e],n;for(n in t)if(t.hasOwnProperty(n)&&n in ih)return Tl[e]=t[n];return e}var oh=Ha("animationend"),ah=Ha("animationiteration"),lh=Ha("animationstart"),sh=Ha("transitionend"),uh=new Map,fd="abort auxClick cancel canPlay canPlayThrough click close contextMenu copy cut drag dragEnd dragEnter dragExit dragLeave dragOver dragStart drop durationChange emptied encrypted ended error gotPointerCapture input invalid keyDown keyPress keyUp load loadedData loadedMetadata loadStart lostPointerCapture mouseDown mouseMove mouseOut mouseOver mouseUp paste pause play playing pointerCancel pointerDown pointerMove pointerOut pointerOver pointerUp progress rateChange reset resize seeked seeking stalled submit suspend timeUpdate touchCancel touchEnd touchStart volumeChange scroll toggle touchMove waiting wheel".split(" ");function Un(e,t){uh.set(e,t),lr(t,[e])}for(var Il=0;Il<fd.length;Il++){var Rl=fd[Il],D0=Rl.toLowerCase(),V0=Rl[0].toUpperCase()+Rl.slice(1);Un(D0,"on"+V0)}Un(oh,"onAnimationEnd");Un(ah,"onAnimationIteration");Un(lh,"onAnimationStart");Un("dblclick","onDoubleClick");Un("focusin","onFocus");Un("focusout","onBlur");Un(sh,"onTransitionEnd");Vr("onMouseEnter",["mouseout","mouseover"]);Vr("onMouseLeave",["mouseout","mouseover"]);Vr("onPointerEnter",["pointerout","pointerover"]);Vr("onPointerLeave",["pointerout","pointerover"]);lr("onChange","change click focusin focusout input keydown keyup selectionchange".split(" "));lr("onSelect","focusout contextmenu dragend focusin keydown keyup mousedown mouseup selectionchange".split(" "));lr("onBeforeInput",["compositionend","keypress","textInput","paste"]);lr("onCompositionEnd","compositionend focusout keydown keypress keyup mousedown".split(" "));lr("onCompositionStart","compositionstart focusout keydown keypress keyup mousedown".split(" "));lr("onCompositionUpdate","compositionupdate focusout keydown keypress keyup mousedown".split(" "));var hi="abort canplay canplaythrough durationchange emptied encrypted ended error loadeddata loadedmetadata loadstart pause play playing progress ratechange resize seeked seeking stalled suspend timeupdate volumechange waiting".split(" "),F0=new Set("cancel close invalid load scroll toggle".split(" ").concat(hi));function pd(e,t,n){var r=e.type||"unknown-event";e.currentTarget=n,Dv(r,t,void 0,e),e.currentTarget=null}function ch(e,t){t=(t&4)!==0;for(var n=0;n<e.length;n++){var r=e[n],i=r.event;r=r.listeners;e:{var o=void 0;if(t)for(var a=r.length-1;0<=a;a--){var s=r[a],l=s.instance,u=s.currentTarget;if(s=s.listener,l!==o&&i.isPropagationStopped())break e;pd(i,s,u),o=l}else for(a=0;a<r.length;a++){if(s=r[a],l=s.instance,u=s.currentTarget,s=s.listener,l!==o&&i.isPropagationStopped())break e;pd(i,s,u),o=l}}}if(ia)throw e=Is,ia=!1,Is=null,e}function je(e,t){var n=t[Us];n===void 0&&(n=t[Us]=new Set);var r=e+"__bubble";n.has(r)||(dh(t,e,2,!1),n.add(r))}function Ll(e,t,n){var r=0;t&&(r|=4),dh(n,e,r,t)}var mo="_reactListening"+Math.random().toString(36).slice(2);function Di(e){if(!e[mo]){e[mo]=!0,yp.forEach(function(n){n!=="selectionchange"&&(F0.has(n)||Ll(n,!1,e),Ll(n,!0,e))});var t=e.nodeType===9?e:e.ownerDocument;t===null||t[mo]||(t[mo]=!0,Ll("selectionchange",!1,t))}}function dh(e,t,n,r){switch(Kp(t)){case 1:var i=Zv;break;case 4:i=qv;break;default:i=Ru}n=i.bind(null,t,n,e),i=void 0,!Ts||t!=="touchstart"&&t!=="touchmove"&&t!=="wheel"||(i=!0),r?i!==void 0?e.addEventListener(t,n,{capture:!0,passive:i}):e.addEventListener(t,n,!0):i!==void 0?e.addEventListener(t,n,{passive:i}):e.addEventListener(t,n,!1)}function Dl(e,t,n,r,i){var o=r;if(!(t&1)&&!(t&2)&&r!==null)e:for(;;){if(r===null)return;var a=r.tag;if(a===3||a===4){var s=r.stateNode.containerInfo;if(s===i||s.nodeType===8&&s.parentNode===i)break;if(a===4)for(a=r.return;a!==null;){var l=a.tag;if((l===3||l===4)&&(l=a.stateNode.containerInfo,l===i||l.nodeType===8&&l.parentNode===i))return;a=a.return}for(;s!==null;){if(a=Kn(s),a===null)return;if(l=a.tag,l===5||l===6){r=o=a;continue e}s=s.parentNode}}r=r.return}Lp(function(){var u=o,p=Pu(n),h=[];e:{var m=uh.get(e);if(m!==void 0){var x=Du,g=e;switch(e){case"keypress":if($o(n)===0)break e;case"keydown":case"keyup":x=p0;break;case"focusin":g="focus",x=Ol;break;case"focusout":g="blur",x=Ol;break;case"beforeblur":case"afterblur":x=Ol;break;case"click":if(n.button===2)break e;case"auxclick":case"dblclick":case"mousedown":case"mousemove":case"mouseup":case"mouseout":case"mouseover":case"contextmenu":x=td;break;case"drag":case"dragend":case"dragenter":case"dragexit":case"dragleave":case"dragover":case"dragstart":case"drop":x=t0;break;case"touchcancel":case"touchend":case"touchmove":case"touchstart":x=g0;break;case oh:case ah:case lh:x=i0;break;case sh:x=y0;break;case"scroll":x=Jv;break;case"wheel":x=w0;break;case"copy":case"cut":case"paste":x=a0;break;case"gotpointercapture":case"lostpointercapture":case"pointercancel":case"pointerdown":case"pointermove":case"pointerout":case"pointerover":case"pointerup":x=rd}var y=(t&4)!==0,S=!y&&e==="scroll",d=y?m!==null?m+"Capture":null:m;y=[];for(var f=u,v;f!==null;){v=f;var w=v.stateNode;if(v.tag===5&&w!==null&&(v=w,d!==null&&(w=Pi(f,d),w!=null&&y.push(Vi(f,w,v)))),S)break;f=f.return}0<y.length&&(m=new x(m,g,null,n,p),h.push({event:m,listeners:y}))}}if(!(t&7)){e:{if(m=e==="mouseover"||e==="pointerover",x=e==="mouseout"||e==="pointerout",m&&n!==Ps&&(g=n.relatedTarget||n.fromElement)&&(Kn(g)||g[dn]))break e;if((x||m)&&(m=p.window===p?p:(m=p.ownerDocument)?m.defaultView||m.parentWindow:window,x?(g=n.relatedTarget||n.toElement,x=u,g=g?Kn(g):null,g!==null&&(S=sr(g),g!==S||g.tag!==5&&g.tag!==6)&&(g=null)):(x=null,g=u),x!==g)){if(y=td,w="onMouseLeave",d="onMouseEnter",f="mouse",(e==="pointerout"||e==="pointerover")&&(y=rd,w="onPointerLeave",d="onPointerEnter",f="pointer"),S=x==null?m:Sr(x),v=g==null?m:Sr(g),m=new y(w,f+"leave",x,n,p),m.target=S,m.relatedTarget=v,w=null,Kn(p)===u&&(y=new y(d,f+"enter",g,n,p),y.target=v,y.relatedTarget=S,w=y),S=w,x&&g)t:{for(y=x,d=g,f=0,v=y;v;v=cr(v))f++;for(v=0,w=d;w;w=cr(w))v++;for(;0<f-v;)y=cr(y),f--;for(;0<v-f;)d=cr(d),v--;for(;f--;){if(y===d||d!==null&&y===d.alternate)break t;y=cr(y),d=cr(d)}y=null}else y=null;x!==null&&hd(h,m,x,y,!1),g!==null&&S!==null&&hd(h,S,g,y,!0)}}e:{if(m=u?Sr(u):window,x=m.nodeName&&m.nodeName.toLowerCase(),x==="select"||x==="input"&&m.type==="file")var k=_0;else if(ad(m))if(eh)k=T0;else{k=P0;var O=O0}else(x=m.nodeName)&&x.toLowerCase()==="input"&&(m.type==="checkbox"||m.type==="radio")&&(k=M0);if(k&&(k=k(e,u))){Jp(h,k,n,p);break e}O&&O(e,m,u),e==="focusout"&&(O=m._wrapperState)&&O.controlled&&m.type==="number"&&Cs(m,"number",m.value)}switch(O=u?Sr(u):window,e){case"focusin":(ad(O)||O.contentEditable==="true")&&(xr=O,Vs=u,Si=null);break;case"focusout":Si=Vs=xr=null;break;case"mousedown":Fs=!0;break;case"contextmenu":case"mouseup":case"dragend":Fs=!1,dd(h,n,p);break;case"selectionchange":if(L0)break;case"keydown":case"keyup":dd(h,n,p)}var j;if(Fu)e:{switch(e){case"compositionstart":var P="onCompositionStart";break e;case"compositionend":P="onCompositionEnd";break e;case"compositionupdate":P="onCompositionUpdate";break e}P=void 0}else yr?Zp(e,n)&&(P="onCompositionEnd"):e==="keydown"&&n.keyCode===229&&(P="onCompositionStart");P&&(Xp&&n.locale!=="ko"&&(yr||P!=="onCompositionStart"?P==="onCompositionEnd"&&yr&&(j=Gp()):(Pn=p,Lu="value"in Pn?Pn.value:Pn.textContent,yr=!0)),O=ua(u,P),0<O.length&&(P=new nd(P,e,null,n,p),h.push({event:P,listeners:O}),j?P.data=j:(j=qp(n),j!==null&&(P.data=j)))),(j=b0?k0(e,n):C0(e,n))&&(u=ua(u,"onBeforeInput"),0<u.length&&(p=new nd("onBeforeInput","beforeinput",null,n,p),h.push({event:p,listeners:u}),p.data=j))}ch(h,t)})}function Vi(e,t,n){return{instance:e,listener:t,currentTarget:n}}function ua(e,t){for(var n=t+"Capture",r=[];e!==null;){var i=e,o=i.stateNode;i.tag===5&&o!==null&&(i=o,o=Pi(e,n),o!=null&&r.unshift(Vi(e,o,i)),o=Pi(e,t),o!=null&&r.push(Vi(e,o,i))),e=e.return}return r}function cr(e){if(e===null)return null;do e=e.return;while(e&&e.tag!==5);return e||null}function hd(e,t,n,r,i){for(var o=t._reactName,a=[];n!==null&&n!==r;){var s=n,l=s.alternate,u=s.stateNode;if(l!==null&&l===r)break;s.tag===5&&u!==null&&(s=u,i?(l=Pi(n,o),l!=null&&a.unshift(Vi(n,l,s))):i||(l=Pi(n,o),l!=null&&a.push(Vi(n,l,s)))),n=n.return}a.length!==0&&e.push({event:t,listeners:a})}var A0=/\r\n?/g,z0=/\u0000|\uFFFD/g;function md(e){return(typeof e=="string"?e:""+e).replace(A0,`
`).replace(z0,"")}function go(e,t,n){if(t=md(t),md(e)!==t&&n)throw Error(L(425))}function ca(){}var As=null,zs=null;function $s(e,t){return e==="textarea"||e==="noscript"||typeof t.children=="string"||typeof t.children=="number"||typeof t.dangerouslySetInnerHTML=="object"&&t.dangerouslySetInnerHTML!==null&&t.dangerouslySetInnerHTML.__html!=null}var Ns=typeof setTimeout=="function"?setTimeout:void 0,$0=typeof clearTimeout=="function"?clearTimeout:void 0,gd=typeof Promise=="function"?Promise:void 0,N0=typeof queueMicrotask=="function"?queueMicrotask:typeof gd<"u"?function(e){return gd.resolve(null).then(e).catch(U0)}:Ns;function U0(e){setTimeout(function(){throw e})}function Vl(e,t){var n=t,r=0;do{var i=n.nextSibling;if(e.removeChild(n),i&&i.nodeType===8)if(n=i.data,n==="/$"){if(r===0){e.removeChild(i),Ii(t);return}r--}else n!=="$"&&n!=="$?"&&n!=="$!"||r++;n=i}while(n);Ii(t)}function Dn(e){for(;e!=null;e=e.nextSibling){var t=e.nodeType;if(t===1||t===3)break;if(t===8){if(t=e.data,t==="$"||t==="$!"||t==="$?")break;if(t==="/$")return null}}return e}function vd(e){e=e.previousSibling;for(var t=0;e;){if(e.nodeType===8){var n=e.data;if(n==="$"||n==="$!"||n==="$?"){if(t===0)return e;t--}else n==="/$"&&t++}e=e.previousSibling}return null}var Yr=Math.random().toString(36).slice(2),Kt="__reactFiber$"+Yr,Fi="__reactProps$"+Yr,dn="__reactContainer$"+Yr,Us="__reactEvents$"+Yr,W0="__reactListeners$"+Yr,H0="__reactHandles$"+Yr;function Kn(e){var t=e[Kt];if(t)return t;for(var n=e.parentNode;n;){if(t=n[dn]||n[Kt]){if(n=t.alternate,t.child!==null||n!==null&&n.child!==null)for(e=vd(e);e!==null;){if(n=e[Kt])return n;e=vd(e)}return t}e=n,n=e.parentNode}return null}function qi(e){return e=e[Kt]||e[dn],!e||e.tag!==5&&e.tag!==6&&e.tag!==13&&e.tag!==3?null:e}function Sr(e){if(e.tag===5||e.tag===6)return e.stateNode;throw Error(L(33))}function Ba(e){return e[Fi]||null}var Ws=[],br=-1;function Wn(e){return{current:e}}function Ee(e){0>br||(e.current=Ws[br],Ws[br]=null,br--)}function ke(e,t){br++,Ws[br]=e.current,e.current=t}var Nn={},tt=Wn(Nn),ct=Wn(!1),tr=Nn;function Fr(e,t){var n=e.type.contextTypes;if(!n)return Nn;var r=e.stateNode;if(r&&r.__reactInternalMemoizedUnmaskedChildContext===t)return r.__reactInternalMemoizedMaskedChildContext;var i={},o;for(o in n)i[o]=t[o];return r&&(e=e.stateNode,e.__reactInternalMemoizedUnmaskedChildContext=t,e.__reactInternalMemoizedMaskedChildContext=i),i}function dt(e){return e=e.childContextTypes,e!=null}function da(){Ee(ct),Ee(tt)}function yd(e,t,n){if(tt.current!==Nn)throw Error(L(168));ke(tt,t),ke(ct,n)}function fh(e,t,n){var r=e.stateNode;if(t=t.childContextTypes,typeof r.getChildContext!="function")return n;r=r.getChildContext();for(var i in r)if(!(i in t))throw Error(L(108,Ov(e)||"Unknown",i));return Me({},n,r)}function fa(e){return e=(e=e.stateNode)&&e.__reactInternalMemoizedMergedChildContext||Nn,tr=tt.current,ke(tt,e),ke(ct,ct.current),!0}function xd(e,t,n){var r=e.stateNode;if(!r)throw Error(L(169));n?(e=fh(e,t,tr),r.__reactInternalMemoizedMergedChildContext=e,Ee(ct),Ee(tt),ke(tt,e)):Ee(ct),ke(ct,n)}var rn=null,Qa=!1,Fl=!1;function ph(e){rn===null?rn=[e]:rn.push(e)}function B0(e){Qa=!0,ph(e)}function Hn(){if(!Fl&&rn!==null){Fl=!0;var e=0,t=ge;try{var n=rn;for(ge=1;e<n.length;e++){var r=n[e];do r=r(!0);while(r!==null)}rn=null,Qa=!1}catch(i){throw rn!==null&&(rn=rn.slice(e+1)),Ap(Mu,Hn),i}finally{ge=t,Fl=!1}}return null}var kr=[],Cr=0,pa=null,ha=0,jt=[],Et=0,nr=null,an=1,ln="";function Qn(e,t){kr[Cr++]=ha,kr[Cr++]=pa,pa=e,ha=t}function hh(e,t,n){jt[Et++]=an,jt[Et++]=ln,jt[Et++]=nr,nr=e;var r=an;e=ln;var i=32-zt(r)-1;r&=~(1<<i),n+=1;var o=32-zt(t)+i;if(30<o){var a=i-i%5;o=(r&(1<<a)-1).toString(32),r>>=a,i-=a,an=1<<32-zt(t)+i|n<<i|r,ln=o+e}else an=1<<o|n<<i|r,ln=e}function zu(e){e.return!==null&&(Qn(e,1),hh(e,1,0))}function $u(e){for(;e===pa;)pa=kr[--Cr],kr[Cr]=null,ha=kr[--Cr],kr[Cr]=null;for(;e===nr;)nr=jt[--Et],jt[Et]=null,ln=jt[--Et],jt[Et]=null,an=jt[--Et],jt[Et]=null}var vt=null,gt=null,_e=!1,Ft=null;function mh(e,t){var n=_t(5,null,null,0);n.elementType="DELETED",n.stateNode=t,n.return=e,t=e.deletions,t===null?(e.deletions=[n],e.flags|=16):t.push(n)}function wd(e,t){switch(e.tag){case 5:var n=e.type;return t=t.nodeType!==1||n.toLowerCase()!==t.nodeName.toLowerCase()?null:t,t!==null?(e.stateNode=t,vt=e,gt=Dn(t.firstChild),!0):!1;case 6:return t=e.pendingProps===""||t.nodeType!==3?null:t,t!==null?(e.stateNode=t,vt=e,gt=null,!0):!1;case 13:return t=t.nodeType!==8?null:t,t!==null?(n=nr!==null?{id:an,overflow:ln}:null,e.memoizedState={dehydrated:t,treeContext:n,retryLane:1073741824},n=_t(18,null,null,0),n.stateNode=t,n.return=e,e.child=n,vt=e,gt=null,!0):!1;default:return!1}}function Hs(e){return(e.mode&1)!==0&&(e.flags&128)===0}function Bs(e){if(_e){var t=gt;if(t){var n=t;if(!wd(e,t)){if(Hs(e))throw Error(L(418));t=Dn(n.nextSibling);var r=vt;t&&wd(e,t)?mh(r,n):(e.flags=e.flags&-4097|2,_e=!1,vt=e)}}else{if(Hs(e))throw Error(L(418));e.flags=e.flags&-4097|2,_e=!1,vt=e}}}function Sd(e){for(e=e.return;e!==null&&e.tag!==5&&e.tag!==3&&e.tag!==13;)e=e.return;vt=e}function vo(e){if(e!==vt)return!1;if(!_e)return Sd(e),_e=!0,!1;var t;if((t=e.tag!==3)&&!(t=e.tag!==5)&&(t=e.type,t=t!=="head"&&t!=="body"&&!$s(e.type,e.memoizedProps)),t&&(t=gt)){if(Hs(e))throw gh(),Error(L(418));for(;t;)mh(e,t),t=Dn(t.nextSibling)}if(Sd(e),e.tag===13){if(e=e.memoizedState,e=e!==null?e.dehydrated:null,!e)throw Error(L(317));e:{for(e=e.nextSibling,t=0;e;){if(e.nodeType===8){var n=e.data;if(n==="/$"){if(t===0){gt=Dn(e.nextSibling);break e}t--}else n!=="$"&&n!=="$!"&&n!=="$?"||t++}e=e.nextSibling}gt=null}}else gt=vt?Dn(e.stateNode.nextSibling):null;return!0}function gh(){for(var e=gt;e;)e=Dn(e.nextSibling)}function Ar(){gt=vt=null,_e=!1}function Nu(e){Ft===null?Ft=[e]:Ft.push(e)}var Q0=hn.ReactCurrentBatchConfig;function Rt(e,t){if(e&&e.defaultProps){t=Me({},t),e=e.defaultProps;for(var n in e)t[n]===void 0&&(t[n]=e[n]);return t}return t}var ma=Wn(null),ga=null,jr=null,Uu=null;function Wu(){Uu=jr=ga=null}function Hu(e){var t=ma.current;Ee(ma),e._currentValue=t}function Qs(e,t,n){for(;e!==null;){var r=e.alternate;if((e.childLanes&t)!==t?(e.childLanes|=t,r!==null&&(r.childLanes|=t)):r!==null&&(r.childLanes&t)!==t&&(r.childLanes|=t),e===n)break;e=e.return}}function Rr(e,t){ga=e,Uu=jr=null,e=e.dependencies,e!==null&&e.firstContext!==null&&(e.lanes&t&&(ut=!0),e.firstContext=null)}function Pt(e){var t=e._currentValue;if(Uu!==e)if(e={context:e,memoizedValue:t,next:null},jr===null){if(ga===null)throw Error(L(308));jr=e,ga.dependencies={lanes:0,firstContext:e}}else jr=jr.next=e;return t}var Gn=null;function Bu(e){Gn===null?Gn=[e]:Gn.push(e)}function vh(e,t,n,r){var i=t.interleaved;return i===null?(n.next=n,Bu(t)):(n.next=i.next,i.next=n),t.interleaved=n,fn(e,r)}function fn(e,t){e.lanes|=t;var n=e.alternate;for(n!==null&&(n.lanes|=t),n=e,e=e.return;e!==null;)e.childLanes|=t,n=e.alternate,n!==null&&(n.childLanes|=t),n=e,e=e.return;return n.tag===3?n.stateNode:null}var En=!1;function Qu(e){e.updateQueue={baseState:e.memoizedState,firstBaseUpdate:null,lastBaseUpdate:null,shared:{pending:null,interleaved:null,lanes:0},effects:null}}function yh(e,t){e=e.updateQueue,t.updateQueue===e&&(t.updateQueue={baseState:e.baseState,firstBaseUpdate:e.firstBaseUpdate,lastBaseUpdate:e.lastBaseUpdate,shared:e.shared,effects:e.effects})}function sn(e,t){return{eventTime:e,lane:t,tag:0,payload:null,callback:null,next:null}}function Vn(e,t,n){var r=e.updateQueue;if(r===null)return null;if(r=r.shared,de&2){var i=r.pending;return i===null?t.next=t:(t.next=i.next,i.next=t),r.pending=t,fn(e,n)}return i=r.interleaved,i===null?(t.next=t,Bu(r)):(t.next=i.next,i.next=t),r.interleaved=t,fn(e,n)}function No(e,t,n){if(t=t.updateQueue,t!==null&&(t=t.shared,(n&4194240)!==0)){var r=t.lanes;r&=e.pendingLanes,n|=r,t.lanes=n,Tu(e,n)}}function bd(e,t){var n=e.updateQueue,r=e.alternate;if(r!==null&&(r=r.updateQueue,n===r)){var i=null,o=null;if(n=n.firstBaseUpdate,n!==null){do{var a={eventTime:n.eventTime,lane:n.lane,tag:n.tag,payload:n.payload,callback:n.callback,next:null};o===null?i=o=a:o=o.next=a,n=n.next}while(n!==null);o===null?i=o=t:o=o.next=t}else i=o=t;n={baseState:r.baseState,firstBaseUpdate:i,lastBaseUpdate:o,shared:r.shared,effects:r.effects},e.updateQueue=n;return}e=n.lastBaseUpdate,e===null?n.firstBaseUpdate=t:e.next=t,n.lastBaseUpdate=t}function va(e,t,n,r){var i=e.updateQueue;En=!1;var o=i.firstBaseUpdate,a=i.lastBaseUpdate,s=i.shared.pending;if(s!==null){i.shared.pending=null;var l=s,u=l.next;l.next=null,a===null?o=u:a.next=u,a=l;var p=e.alternate;p!==null&&(p=p.updateQueue,s=p.lastBaseUpdate,s!==a&&(s===null?p.firstBaseUpdate=u:s.next=u,p.lastBaseUpdate=l))}if(o!==null){var h=i.baseState;a=0,p=u=l=null,s=o;do{var m=s.lane,x=s.eventTime;if((r&m)===m){p!==null&&(p=p.next={eventTime:x,lane:0,tag:s.tag,payload:s.payload,callback:s.callback,next:null});e:{var g=e,y=s;switch(m=t,x=n,y.tag){case 1:if(g=y.payload,typeof g=="function"){h=g.call(x,h,m);break e}h=g;break e;case 3:g.flags=g.flags&-65537|128;case 0:if(g=y.payload,m=typeof g=="function"?g.call(x,h,m):g,m==null)break e;h=Me({},h,m);break e;case 2:En=!0}}s.callback!==null&&s.lane!==0&&(e.flags|=64,m=i.effects,m===null?i.effects=[s]:m.push(s))}else x={eventTime:x,lane:m,tag:s.tag,payload:s.payload,callback:s.callback,next:null},p===null?(u=p=x,l=h):p=p.next=x,a|=m;if(s=s.next,s===null){if(s=i.shared.pending,s===null)break;m=s,s=m.next,m.next=null,i.lastBaseUpdate=m,i.shared.pending=null}}while(!0);if(p===null&&(l=h),i.baseState=l,i.firstBaseUpdate=u,i.lastBaseUpdate=p,t=i.shared.interleaved,t!==null){i=t;do a|=i.lane,i=i.next;while(i!==t)}else o===null&&(i.shared.lanes=0);ir|=a,e.lanes=a,e.memoizedState=h}}function kd(e,t,n){if(e=t.effects,t.effects=null,e!==null)for(t=0;t<e.length;t++){var r=e[t],i=r.callback;if(i!==null){if(r.callback=null,r=n,typeof i!="function")throw Error(L(191,i));i.call(r)}}}var xh=new vp.Component().refs;function Ys(e,t,n,r){t=e.memoizedState,n=n(r,t),n=n==null?t:Me({},t,n),e.memoizedState=n,e.lanes===0&&(e.updateQueue.baseState=n)}var Ya={isMounted:function(e){return(e=e._reactInternals)?sr(e)===e:!1},enqueueSetState:function(e,t,n){e=e._reactInternals;var r=it(),i=An(e),o=sn(r,i);o.payload=t,n!=null&&(o.callback=n),t=Vn(e,o,i),t!==null&&($t(t,e,i,r),No(t,e,i))},enqueueReplaceState:function(e,t,n){e=e._reactInternals;var r=it(),i=An(e),o=sn(r,i);o.tag=1,o.payload=t,n!=null&&(o.callback=n),t=Vn(e,o,i),t!==null&&($t(t,e,i,r),No(t,e,i))},enqueueForceUpdate:function(e,t){e=e._reactInternals;var n=it(),r=An(e),i=sn(n,r);i.tag=2,t!=null&&(i.callback=t),t=Vn(e,i,r),t!==null&&($t(t,e,r,n),No(t,e,r))}};function Cd(e,t,n,r,i,o,a){return e=e.stateNode,typeof e.shouldComponentUpdate=="function"?e.shouldComponentUpdate(r,o,a):t.prototype&&t.prototype.isPureReactComponent?!Li(n,r)||!Li(i,o):!0}function wh(e,t,n){var r=!1,i=Nn,o=t.contextType;return typeof o=="object"&&o!==null?o=Pt(o):(i=dt(t)?tr:tt.current,r=t.contextTypes,o=(r=r!=null)?Fr(e,i):Nn),t=new t(n,o),e.memoizedState=t.state!==null&&t.state!==void 0?t.state:null,t.updater=Ya,e.stateNode=t,t._reactInternals=e,r&&(e=e.stateNode,e.__reactInternalMemoizedUnmaskedChildContext=i,e.__reactInternalMemoizedMaskedChildContext=o),t}function jd(e,t,n,r){e=t.state,typeof t.componentWillReceiveProps=="function"&&t.componentWillReceiveProps(n,r),typeof t.UNSAFE_componentWillReceiveProps=="function"&&t.UNSAFE_componentWillReceiveProps(n,r),t.state!==e&&Ya.enqueueReplaceState(t,t.state,null)}function Ks(e,t,n,r){var i=e.stateNode;i.props=n,i.state=e.memoizedState,i.refs=xh,Qu(e);var o=t.contextType;typeof o=="object"&&o!==null?i.context=Pt(o):(o=dt(t)?tr:tt.current,i.context=Fr(e,o)),i.state=e.memoizedState,o=t.getDerivedStateFromProps,typeof o=="function"&&(Ys(e,t,o,n),i.state=e.memoizedState),typeof t.getDerivedStateFromProps=="function"||typeof i.getSnapshotBeforeUpdate=="function"||typeof i.UNSAFE_componentWillMount!="function"&&typeof i.componentWillMount!="function"||(t=i.state,typeof i.componentWillMount=="function"&&i.componentWillMount(),typeof i.UNSAFE_componentWillMount=="function"&&i.UNSAFE_componentWillMount(),t!==i.state&&Ya.enqueueReplaceState(i,i.state,null),va(e,n,i,r),i.state=e.memoizedState),typeof i.componentDidMount=="function"&&(e.flags|=4194308)}function ei(e,t,n){if(e=n.ref,e!==null&&typeof e!="function"&&typeof e!="object"){if(n._owner){if(n=n._owner,n){if(n.tag!==1)throw Error(L(309));var r=n.stateNode}if(!r)throw Error(L(147,e));var i=r,o=""+e;return t!==null&&t.ref!==null&&typeof t.ref=="function"&&t.ref._stringRef===o?t.ref:(t=function(a){var s=i.refs;s===xh&&(s=i.refs={}),a===null?delete s[o]:s[o]=a},t._stringRef=o,t)}if(typeof e!="string")throw Error(L(284));if(!n._owner)throw Error(L(290,e))}return e}function yo(e,t){throw e=Object.prototype.toString.call(t),Error(L(31,e==="[object Object]"?"object with keys {"+Object.keys(t).join(", ")+"}":e))}function Ed(e){var t=e._init;return t(e._payload)}function Sh(e){function t(d,f){if(e){var v=d.deletions;v===null?(d.deletions=[f],d.flags|=16):v.push(f)}}function n(d,f){if(!e)return null;for(;f!==null;)t(d,f),f=f.sibling;return null}function r(d,f){for(d=new Map;f!==null;)f.key!==null?d.set(f.key,f):d.set(f.index,f),f=f.sibling;return d}function i(d,f){return d=zn(d,f),d.index=0,d.sibling=null,d}function o(d,f,v){return d.index=v,e?(v=d.alternate,v!==null?(v=v.index,v<f?(d.flags|=2,f):v):(d.flags|=2,f)):(d.flags|=1048576,f)}function a(d){return e&&d.alternate===null&&(d.flags|=2),d}function s(d,f,v,w){return f===null||f.tag!==6?(f=Hl(v,d.mode,w),f.return=d,f):(f=i(f,v),f.return=d,f)}function l(d,f,v,w){var k=v.type;return k===vr?p(d,f,v.props.children,w,v.key):f!==null&&(f.elementType===k||typeof k=="object"&&k!==null&&k.$$typeof===jn&&Ed(k)===f.type)?(w=i(f,v.props),w.ref=ei(d,f,v),w.return=d,w):(w=Yo(v.type,v.key,v.props,null,d.mode,w),w.ref=ei(d,f,v),w.return=d,w)}function u(d,f,v,w){return f===null||f.tag!==4||f.stateNode.containerInfo!==v.containerInfo||f.stateNode.implementation!==v.implementation?(f=Bl(v,d.mode,w),f.return=d,f):(f=i(f,v.children||[]),f.return=d,f)}function p(d,f,v,w,k){return f===null||f.tag!==7?(f=er(v,d.mode,w,k),f.return=d,f):(f=i(f,v),f.return=d,f)}function h(d,f,v){if(typeof f=="string"&&f!==""||typeof f=="number")return f=Hl(""+f,d.mode,v),f.return=d,f;if(typeof f=="object"&&f!==null){switch(f.$$typeof){case ao:return v=Yo(f.type,f.key,f.props,null,d.mode,v),v.ref=ei(d,null,f),v.return=d,v;case gr:return f=Bl(f,d.mode,v),f.return=d,f;case jn:var w=f._init;return h(d,w(f._payload),v)}if(fi(f)||Gr(f))return f=er(f,d.mode,v,null),f.return=d,f;yo(d,f)}return null}function m(d,f,v,w){var k=f!==null?f.key:null;if(typeof v=="string"&&v!==""||typeof v=="number")return k!==null?null:s(d,f,""+v,w);if(typeof v=="object"&&v!==null){switch(v.$$typeof){case ao:return v.key===k?l(d,f,v,w):null;case gr:return v.key===k?u(d,f,v,w):null;case jn:return k=v._init,m(d,f,k(v._payload),w)}if(fi(v)||Gr(v))return k!==null?null:p(d,f,v,w,null);yo(d,v)}return null}function x(d,f,v,w,k){if(typeof w=="string"&&w!==""||typeof w=="number")return d=d.get(v)||null,s(f,d,""+w,k);if(typeof w=="object"&&w!==null){switch(w.$$typeof){case ao:return d=d.get(w.key===null?v:w.key)||null,l(f,d,w,k);case gr:return d=d.get(w.key===null?v:w.key)||null,u(f,d,w,k);case jn:var O=w._init;return x(d,f,v,O(w._payload),k)}if(fi(w)||Gr(w))return d=d.get(v)||null,p(f,d,w,k,null);yo(f,w)}return null}function g(d,f,v,w){for(var k=null,O=null,j=f,P=f=0,M=null;j!==null&&P<v.length;P++){j.index>P?(M=j,j=null):M=j.sibling;var I=m(d,j,v[P],w);if(I===null){j===null&&(j=M);break}e&&j&&I.alternate===null&&t(d,j),f=o(I,f,P),O===null?k=I:O.sibling=I,O=I,j=M}if(P===v.length)return n(d,j),_e&&Qn(d,P),k;if(j===null){for(;P<v.length;P++)j=h(d,v[P],w),j!==null&&(f=o(j,f,P),O===null?k=j:O.sibling=j,O=j);return _e&&Qn(d,P),k}for(j=r(d,j);P<v.length;P++)M=x(j,d,P,v[P],w),M!==null&&(e&&M.alternate!==null&&j.delete(M.key===null?P:M.key),f=o(M,f,P),O===null?k=M:O.sibling=M,O=M);return e&&j.forEach(function(U){return t(d,U)}),_e&&Qn(d,P),k}function y(d,f,v,w){var k=Gr(v);if(typeof k!="function")throw Error(L(150));if(v=k.call(v),v==null)throw Error(L(151));for(var O=k=null,j=f,P=f=0,M=null,I=v.next();j!==null&&!I.done;P++,I=v.next()){j.index>P?(M=j,j=null):M=j.sibling;var U=m(d,j,I.value,w);if(U===null){j===null&&(j=M);break}e&&j&&U.alternate===null&&t(d,j),f=o(U,f,P),O===null?k=U:O.sibling=U,O=U,j=M}if(I.done)return n(d,j),_e&&Qn(d,P),k;if(j===null){for(;!I.done;P++,I=v.next())I=h(d,I.value,w),I!==null&&(f=o(I,f,P),O===null?k=I:O.sibling=I,O=I);return _e&&Qn(d,P),k}for(j=r(d,j);!I.done;P++,I=v.next())I=x(j,d,P,I.value,w),I!==null&&(e&&I.alternate!==null&&j.delete(I.key===null?P:I.key),f=o(I,f,P),O===null?k=I:O.sibling=I,O=I);return e&&j.forEach(function(D){return t(d,D)}),_e&&Qn(d,P),k}function S(d,f,v,w){if(typeof v=="object"&&v!==null&&v.type===vr&&v.key===null&&(v=v.props.children),typeof v=="object"&&v!==null){switch(v.$$typeof){case ao:e:{for(var k=v.key,O=f;O!==null;){if(O.key===k){if(k=v.type,k===vr){if(O.tag===7){n(d,O.sibling),f=i(O,v.props.children),f.return=d,d=f;break e}}else if(O.elementType===k||typeof k=="object"&&k!==null&&k.$$typeof===jn&&Ed(k)===O.type){n(d,O.sibling),f=i(O,v.props),f.ref=ei(d,O,v),f.return=d,d=f;break e}n(d,O);break}else t(d,O);O=O.sibling}v.type===vr?(f=er(v.props.children,d.mode,w,v.key),f.return=d,d=f):(w=Yo(v.type,v.key,v.props,null,d.mode,w),w.ref=ei(d,f,v),w.return=d,d=w)}return a(d);case gr:e:{for(O=v.key;f!==null;){if(f.key===O)if(f.tag===4&&f.stateNode.containerInfo===v.containerInfo&&f.stateNode.implementation===v.implementation){n(d,f.sibling),f=i(f,v.children||[]),f.return=d,d=f;break e}else{n(d,f);break}else t(d,f);f=f.sibling}f=Bl(v,d.mode,w),f.return=d,d=f}return a(d);case jn:return O=v._init,S(d,f,O(v._payload),w)}if(fi(v))return g(d,f,v,w);if(Gr(v))return y(d,f,v,w);yo(d,v)}return typeof v=="string"&&v!==""||typeof v=="number"?(v=""+v,f!==null&&f.tag===6?(n(d,f.sibling),f=i(f,v),f.return=d,d=f):(n(d,f),f=Hl(v,d.mode,w),f.return=d,d=f),a(d)):n(d,f)}return S}var zr=Sh(!0),bh=Sh(!1),Ji={},qt=Wn(Ji),Ai=Wn(Ji),zi=Wn(Ji);function Xn(e){if(e===Ji)throw Error(L(174));return e}function Yu(e,t){switch(ke(zi,t),ke(Ai,e),ke(qt,Ji),e=t.nodeType,e){case 9:case 11:t=(t=t.documentElement)?t.namespaceURI:Es(null,"");break;default:e=e===8?t.parentNode:t,t=e.namespaceURI||null,e=e.tagName,t=Es(t,e)}Ee(qt),ke(qt,t)}function $r(){Ee(qt),Ee(Ai),Ee(zi)}function kh(e){Xn(zi.current);var t=Xn(qt.current),n=Es(t,e.type);t!==n&&(ke(Ai,e),ke(qt,n))}function Ku(e){Ai.current===e&&(Ee(qt),Ee(Ai))}var Oe=Wn(0);function ya(e){for(var t=e;t!==null;){if(t.tag===13){var n=t.memoizedState;if(n!==null&&(n=n.dehydrated,n===null||n.data==="$?"||n.data==="$!"))return t}else if(t.tag===19&&t.memoizedProps.revealOrder!==void 0){if(t.flags&128)return t}else if(t.child!==null){t.child.return=t,t=t.child;continue}if(t===e)break;for(;t.sibling===null;){if(t.return===null||t.return===e)return null;t=t.return}t.sibling.return=t.return,t=t.sibling}return null}var Al=[];function Gu(){for(var e=0;e<Al.length;e++)Al[e]._workInProgressVersionPrimary=null;Al.length=0}var Uo=hn.ReactCurrentDispatcher,zl=hn.ReactCurrentBatchConfig,rr=0,Pe=null,ze=null,Ue=null,xa=!1,bi=!1,$i=0,Y0=0;function Ze(){throw Error(L(321))}function Xu(e,t){if(t===null)return!1;for(var n=0;n<t.length&&n<e.length;n++)if(!Ut(e[n],t[n]))return!1;return!0}function Zu(e,t,n,r,i,o){if(rr=o,Pe=t,t.memoizedState=null,t.updateQueue=null,t.lanes=0,Uo.current=e===null||e.memoizedState===null?Z0:q0,e=n(r,i),bi){o=0;do{if(bi=!1,$i=0,25<=o)throw Error(L(301));o+=1,Ue=ze=null,t.updateQueue=null,Uo.current=J0,e=n(r,i)}while(bi)}if(Uo.current=wa,t=ze!==null&&ze.next!==null,rr=0,Ue=ze=Pe=null,xa=!1,t)throw Error(L(300));return e}function qu(){var e=$i!==0;return $i=0,e}function Bt(){var e={memoizedState:null,baseState:null,baseQueue:null,queue:null,next:null};return Ue===null?Pe.memoizedState=Ue=e:Ue=Ue.next=e,Ue}function Mt(){if(ze===null){var e=Pe.alternate;e=e!==null?e.memoizedState:null}else e=ze.next;var t=Ue===null?Pe.memoizedState:Ue.next;if(t!==null)Ue=t,ze=e;else{if(e===null)throw Error(L(310));ze=e,e={memoizedState:ze.memoizedState,baseState:ze.baseState,baseQueue:ze.baseQueue,queue:ze.queue,next:null},Ue===null?Pe.memoizedState=Ue=e:Ue=Ue.next=e}return Ue}function Ni(e,t){return typeof t=="function"?t(e):t}function $l(e){var t=Mt(),n=t.queue;if(n===null)throw Error(L(311));n.lastRenderedReducer=e;var r=ze,i=r.baseQueue,o=n.pending;if(o!==null){if(i!==null){var a=i.next;i.next=o.next,o.next=a}r.baseQueue=i=o,n.pending=null}if(i!==null){o=i.next,r=r.baseState;var s=a=null,l=null,u=o;do{var p=u.lane;if((rr&p)===p)l!==null&&(l=l.next={lane:0,action:u.action,hasEagerState:u.hasEagerState,eagerState:u.eagerState,next:null}),r=u.hasEagerState?u.eagerState:e(r,u.action);else{var h={lane:p,action:u.action,hasEagerState:u.hasEagerState,eagerState:u.eagerState,next:null};l===null?(s=l=h,a=r):l=l.next=h,Pe.lanes|=p,ir|=p}u=u.next}while(u!==null&&u!==o);l===null?a=r:l.next=s,Ut(r,t.memoizedState)||(ut=!0),t.memoizedState=r,t.baseState=a,t.baseQueue=l,n.lastRenderedState=r}if(e=n.interleaved,e!==null){i=e;do o=i.lane,Pe.lanes|=o,ir|=o,i=i.next;while(i!==e)}else i===null&&(n.lanes=0);return[t.memoizedState,n.dispatch]}function Nl(e){var t=Mt(),n=t.queue;if(n===null)throw Error(L(311));n.lastRenderedReducer=e;var r=n.dispatch,i=n.pending,o=t.memoizedState;if(i!==null){n.pending=null;var a=i=i.next;do o=e(o,a.action),a=a.next;while(a!==i);Ut(o,t.memoizedState)||(ut=!0),t.memoizedState=o,t.baseQueue===null&&(t.baseState=o),n.lastRenderedState=o}return[o,r]}function Ch(){}function jh(e,t){var n=Pe,r=Mt(),i=t(),o=!Ut(r.memoizedState,i);if(o&&(r.memoizedState=i,ut=!0),r=r.queue,Ju(Oh.bind(null,n,r,e),[e]),r.getSnapshot!==t||o||Ue!==null&&Ue.memoizedState.tag&1){if(n.flags|=2048,Ui(9,_h.bind(null,n,r,i,t),void 0,null),We===null)throw Error(L(349));rr&30||Eh(n,t,i)}return i}function Eh(e,t,n){e.flags|=16384,e={getSnapshot:t,value:n},t=Pe.updateQueue,t===null?(t={lastEffect:null,stores:null},Pe.updateQueue=t,t.stores=[e]):(n=t.stores,n===null?t.stores=[e]:n.push(e))}function _h(e,t,n,r){t.value=n,t.getSnapshot=r,Ph(t)&&Mh(e)}function Oh(e,t,n){return n(function(){Ph(t)&&Mh(e)})}function Ph(e){var t=e.getSnapshot;e=e.value;try{var n=t();return!Ut(e,n)}catch{return!0}}function Mh(e){var t=fn(e,1);t!==null&&$t(t,e,1,-1)}function _d(e){var t=Bt();return typeof e=="function"&&(e=e()),t.memoizedState=t.baseState=e,e={pending:null,interleaved:null,lanes:0,dispatch:null,lastRenderedReducer:Ni,lastRenderedState:e},t.queue=e,e=e.dispatch=X0.bind(null,Pe,e),[t.memoizedState,e]}function Ui(e,t,n,r){return e={tag:e,create:t,destroy:n,deps:r,next:null},t=Pe.updateQueue,t===null?(t={lastEffect:null,stores:null},Pe.updateQueue=t,t.lastEffect=e.next=e):(n=t.lastEffect,n===null?t.lastEffect=e.next=e:(r=n.next,n.next=e,e.next=r,t.lastEffect=e)),e}function Th(){return Mt().memoizedState}function Wo(e,t,n,r){var i=Bt();Pe.flags|=e,i.memoizedState=Ui(1|t,n,void 0,r===void 0?null:r)}function Ka(e,t,n,r){var i=Mt();r=r===void 0?null:r;var o=void 0;if(ze!==null){var a=ze.memoizedState;if(o=a.destroy,r!==null&&Xu(r,a.deps)){i.memoizedState=Ui(t,n,o,r);return}}Pe.flags|=e,i.memoizedState=Ui(1|t,n,o,r)}function Od(e,t){return Wo(8390656,8,e,t)}function Ju(e,t){return Ka(2048,8,e,t)}function Ih(e,t){return Ka(4,2,e,t)}function Rh(e,t){return Ka(4,4,e,t)}function Lh(e,t){if(typeof t=="function")return e=e(),t(e),function(){t(null)};if(t!=null)return e=e(),t.current=e,function(){t.current=null}}function Dh(e,t,n){return n=n!=null?n.concat([e]):null,Ka(4,4,Lh.bind(null,t,e),n)}function ec(){}function Vh(e,t){var n=Mt();t=t===void 0?null:t;var r=n.memoizedState;return r!==null&&t!==null&&Xu(t,r[1])?r[0]:(n.memoizedState=[e,t],e)}function Fh(e,t){var n=Mt();t=t===void 0?null:t;var r=n.memoizedState;return r!==null&&t!==null&&Xu(t,r[1])?r[0]:(e=e(),n.memoizedState=[e,t],e)}function Ah(e,t,n){return rr&21?(Ut(n,t)||(n=Np(),Pe.lanes|=n,ir|=n,e.baseState=!0),t):(e.baseState&&(e.baseState=!1,ut=!0),e.memoizedState=n)}function K0(e,t){var n=ge;ge=n!==0&&4>n?n:4,e(!0);var r=zl.transition;zl.transition={};try{e(!1),t()}finally{ge=n,zl.transition=r}}function zh(){return Mt().memoizedState}function G0(e,t,n){var r=An(e);if(n={lane:r,action:n,hasEagerState:!1,eagerState:null,next:null},$h(e))Nh(t,n);else if(n=vh(e,t,n,r),n!==null){var i=it();$t(n,e,r,i),Uh(n,t,r)}}function X0(e,t,n){var r=An(e),i={lane:r,action:n,hasEagerState:!1,eagerState:null,next:null};if($h(e))Nh(t,i);else{var o=e.alternate;if(e.lanes===0&&(o===null||o.lanes===0)&&(o=t.lastRenderedReducer,o!==null))try{var a=t.lastRenderedState,s=o(a,n);if(i.hasEagerState=!0,i.eagerState=s,Ut(s,a)){var l=t.interleaved;l===null?(i.next=i,Bu(t)):(i.next=l.next,l.next=i),t.interleaved=i;return}}catch{}finally{}n=vh(e,t,i,r),n!==null&&(i=it(),$t(n,e,r,i),Uh(n,t,r))}}function $h(e){var t=e.alternate;return e===Pe||t!==null&&t===Pe}function Nh(e,t){bi=xa=!0;var n=e.pending;n===null?t.next=t:(t.next=n.next,n.next=t),e.pending=t}function Uh(e,t,n){if(n&4194240){var r=t.lanes;r&=e.pendingLanes,n|=r,t.lanes=n,Tu(e,n)}}var wa={readContext:Pt,useCallback:Ze,useContext:Ze,useEffect:Ze,useImperativeHandle:Ze,useInsertionEffect:Ze,useLayoutEffect:Ze,useMemo:Ze,useReducer:Ze,useRef:Ze,useState:Ze,useDebugValue:Ze,useDeferredValue:Ze,useTransition:Ze,useMutableSource:Ze,useSyncExternalStore:Ze,useId:Ze,unstable_isNewReconciler:!1},Z0={readContext:Pt,useCallback:function(e,t){return Bt().memoizedState=[e,t===void 0?null:t],e},useContext:Pt,useEffect:Od,useImperativeHandle:function(e,t,n){return n=n!=null?n.concat([e]):null,Wo(4194308,4,Lh.bind(null,t,e),n)},useLayoutEffect:function(e,t){return Wo(4194308,4,e,t)},useInsertionEffect:function(e,t){return Wo(4,2,e,t)},useMemo:function(e,t){var n=Bt();return t=t===void 0?null:t,e=e(),n.memoizedState=[e,t],e},useReducer:function(e,t,n){var r=Bt();return t=n!==void 0?n(t):t,r.memoizedState=r.baseState=t,e={pending:null,interleaved:null,lanes:0,dispatch:null,lastRenderedReducer:e,lastRenderedState:t},r.queue=e,e=e.dispatch=G0.bind(null,Pe,e),[r.memoizedState,e]},useRef:function(e){var t=Bt();return e={current:e},t.memoizedState=e},useState:_d,useDebugValue:ec,useDeferredValue:function(e){return Bt().memoizedState=e},useTransition:function(){var e=_d(!1),t=e[0];return e=K0.bind(null,e[1]),Bt().memoizedState=e,[t,e]},useMutableSource:function(){},useSyncExternalStore:function(e,t,n){var r=Pe,i=Bt();if(_e){if(n===void 0)throw Error(L(407));n=n()}else{if(n=t(),We===null)throw Error(L(349));rr&30||Eh(r,t,n)}i.memoizedState=n;var o={value:n,getSnapshot:t};return i.queue=o,Od(Oh.bind(null,r,o,e),[e]),r.flags|=2048,Ui(9,_h.bind(null,r,o,n,t),void 0,null),n},useId:function(){var e=Bt(),t=We.identifierPrefix;if(_e){var n=ln,r=an;n=(r&~(1<<32-zt(r)-1)).toString(32)+n,t=":"+t+"R"+n,n=$i++,0<n&&(t+="H"+n.toString(32)),t+=":"}else n=Y0++,t=":"+t+"r"+n.toString(32)+":";return e.memoizedState=t},unstable_isNewReconciler:!1},q0={readContext:Pt,useCallback:Vh,useContext:Pt,useEffect:Ju,useImperativeHandle:Dh,useInsertionEffect:Ih,useLayoutEffect:Rh,useMemo:Fh,useReducer:$l,useRef:Th,useState:function(){return $l(Ni)},useDebugValue:ec,useDeferredValue:function(e){var t=Mt();return Ah(t,ze.memoizedState,e)},useTransition:function(){var e=$l(Ni)[0],t=Mt().memoizedState;return[e,t]},useMutableSource:Ch,useSyncExternalStore:jh,useId:zh,unstable_isNewReconciler:!1},J0={readContext:Pt,useCallback:Vh,useContext:Pt,useEffect:Ju,useImperativeHandle:Dh,useInsertionEffect:Ih,useLayoutEffect:Rh,useMemo:Fh,useReducer:Nl,useRef:Th,useState:function(){return Nl(Ni)},useDebugValue:ec,useDeferredValue:function(e){var t=Mt();return ze===null?t.memoizedState=e:Ah(t,ze.memoizedState,e)},useTransition:function(){var e=Nl(Ni)[0],t=Mt().memoizedState;return[e,t]},useMutableSource:Ch,useSyncExternalStore:jh,useId:zh,unstable_isNewReconciler:!1};function Nr(e,t){try{var n="",r=t;do n+=_v(r),r=r.return;while(r);var i=n}catch(o){i=`
Error generating stack: `+o.message+`
`+o.stack}return{value:e,source:t,stack:i,digest:null}}function Ul(e,t,n){return{value:e,source:null,stack:n??null,digest:t??null}}function Gs(e,t){try{console.error(t.value)}catch(n){setTimeout(function(){throw n})}}var ey=typeof WeakMap=="function"?WeakMap:Map;function Wh(e,t,n){n=sn(-1,n),n.tag=3,n.payload={element:null};var r=t.value;return n.callback=function(){ba||(ba=!0,ou=r),Gs(e,t)},n}function Hh(e,t,n){n=sn(-1,n),n.tag=3;var r=e.type.getDerivedStateFromError;if(typeof r=="function"){var i=t.value;n.payload=function(){return r(i)},n.callback=function(){Gs(e,t)}}var o=e.stateNode;return o!==null&&typeof o.componentDidCatch=="function"&&(n.callback=function(){Gs(e,t),typeof r!="function"&&(Fn===null?Fn=new Set([this]):Fn.add(this));var a=t.stack;this.componentDidCatch(t.value,{componentStack:a!==null?a:""})}),n}function Pd(e,t,n){var r=e.pingCache;if(r===null){r=e.pingCache=new ey;var i=new Set;r.set(t,i)}else i=r.get(t),i===void 0&&(i=new Set,r.set(t,i));i.has(n)||(i.add(n),e=hy.bind(null,e,t,n),t.then(e,e))}function Md(e){do{var t;if((t=e.tag===13)&&(t=e.memoizedState,t=t!==null?t.dehydrated!==null:!0),t)return e;e=e.return}while(e!==null);return null}function Td(e,t,n,r,i){return e.mode&1?(e.flags|=65536,e.lanes=i,e):(e===t?e.flags|=65536:(e.flags|=128,n.flags|=131072,n.flags&=-52805,n.tag===1&&(n.alternate===null?n.tag=17:(t=sn(-1,1),t.tag=2,Vn(n,t,1))),n.lanes|=1),e)}var ty=hn.ReactCurrentOwner,ut=!1;function nt(e,t,n,r){t.child=e===null?bh(t,null,n,r):zr(t,e.child,n,r)}function Id(e,t,n,r,i){n=n.render;var o=t.ref;return Rr(t,i),r=Zu(e,t,n,r,o,i),n=qu(),e!==null&&!ut?(t.updateQueue=e.updateQueue,t.flags&=-2053,e.lanes&=~i,pn(e,t,i)):(_e&&n&&zu(t),t.flags|=1,nt(e,t,r,i),t.child)}function Rd(e,t,n,r,i){if(e===null){var o=n.type;return typeof o=="function"&&!sc(o)&&o.defaultProps===void 0&&n.compare===null&&n.defaultProps===void 0?(t.tag=15,t.type=o,Bh(e,t,o,r,i)):(e=Yo(n.type,null,r,t,t.mode,i),e.ref=t.ref,e.return=t,t.child=e)}if(o=e.child,!(e.lanes&i)){var a=o.memoizedProps;if(n=n.compare,n=n!==null?n:Li,n(a,r)&&e.ref===t.ref)return pn(e,t,i)}return t.flags|=1,e=zn(o,r),e.ref=t.ref,e.return=t,t.child=e}function Bh(e,t,n,r,i){if(e!==null){var o=e.memoizedProps;if(Li(o,r)&&e.ref===t.ref)if(ut=!1,t.pendingProps=r=o,(e.lanes&i)!==0)e.flags&131072&&(ut=!0);else return t.lanes=e.lanes,pn(e,t,i)}return Xs(e,t,n,r,i)}function Qh(e,t,n){var r=t.pendingProps,i=r.children,o=e!==null?e.memoizedState:null;if(r.mode==="hidden")if(!(t.mode&1))t.memoizedState={baseLanes:0,cachePool:null,transitions:null},ke(_r,mt),mt|=n;else{if(!(n&1073741824))return e=o!==null?o.baseLanes|n:n,t.lanes=t.childLanes=1073741824,t.memoizedState={baseLanes:e,cachePool:null,transitions:null},t.updateQueue=null,ke(_r,mt),mt|=e,null;t.memoizedState={baseLanes:0,cachePool:null,transitions:null},r=o!==null?o.baseLanes:n,ke(_r,mt),mt|=r}else o!==null?(r=o.baseLanes|n,t.memoizedState=null):r=n,ke(_r,mt),mt|=r;return nt(e,t,i,n),t.child}function Yh(e,t){var n=t.ref;(e===null&&n!==null||e!==null&&e.ref!==n)&&(t.flags|=512,t.flags|=2097152)}function Xs(e,t,n,r,i){var o=dt(n)?tr:tt.current;return o=Fr(t,o),Rr(t,i),n=Zu(e,t,n,r,o,i),r=qu(),e!==null&&!ut?(t.updateQueue=e.updateQueue,t.flags&=-2053,e.lanes&=~i,pn(e,t,i)):(_e&&r&&zu(t),t.flags|=1,nt(e,t,n,i),t.child)}function Ld(e,t,n,r,i){if(dt(n)){var o=!0;fa(t)}else o=!1;if(Rr(t,i),t.stateNode===null)Ho(e,t),wh(t,n,r),Ks(t,n,r,i),r=!0;else if(e===null){var a=t.stateNode,s=t.memoizedProps;a.props=s;var l=a.context,u=n.contextType;typeof u=="object"&&u!==null?u=Pt(u):(u=dt(n)?tr:tt.current,u=Fr(t,u));var p=n.getDerivedStateFromProps,h=typeof p=="function"||typeof a.getSnapshotBeforeUpdate=="function";h||typeof a.UNSAFE_componentWillReceiveProps!="function"&&typeof a.componentWillReceiveProps!="function"||(s!==r||l!==u)&&jd(t,a,r,u),En=!1;var m=t.memoizedState;a.state=m,va(t,r,a,i),l=t.memoizedState,s!==r||m!==l||ct.current||En?(typeof p=="function"&&(Ys(t,n,p,r),l=t.memoizedState),(s=En||Cd(t,n,s,r,m,l,u))?(h||typeof a.UNSAFE_componentWillMount!="function"&&typeof a.componentWillMount!="function"||(typeof a.componentWillMount=="function"&&a.componentWillMount(),typeof a.UNSAFE_componentWillMount=="function"&&a.UNSAFE_componentWillMount()),typeof a.componentDidMount=="function"&&(t.flags|=4194308)):(typeof a.componentDidMount=="function"&&(t.flags|=4194308),t.memoizedProps=r,t.memoizedState=l),a.props=r,a.state=l,a.context=u,r=s):(typeof a.componentDidMount=="function"&&(t.flags|=4194308),r=!1)}else{a=t.stateNode,yh(e,t),s=t.memoizedProps,u=t.type===t.elementType?s:Rt(t.type,s),a.props=u,h=t.pendingProps,m=a.context,l=n.contextType,typeof l=="object"&&l!==null?l=Pt(l):(l=dt(n)?tr:tt.current,l=Fr(t,l));var x=n.getDerivedStateFromProps;(p=typeof x=="function"||typeof a.getSnapshotBeforeUpdate=="function")||typeof a.UNSAFE_componentWillReceiveProps!="function"&&typeof a.componentWillReceiveProps!="function"||(s!==h||m!==l)&&jd(t,a,r,l),En=!1,m=t.memoizedState,a.state=m,va(t,r,a,i);var g=t.memoizedState;s!==h||m!==g||ct.current||En?(typeof x=="function"&&(Ys(t,n,x,r),g=t.memoizedState),(u=En||Cd(t,n,u,r,m,g,l)||!1)?(p||typeof a.UNSAFE_componentWillUpdate!="function"&&typeof a.componentWillUpdate!="function"||(typeof a.componentWillUpdate=="function"&&a.componentWillUpdate(r,g,l),typeof a.UNSAFE_componentWillUpdate=="function"&&a.UNSAFE_componentWillUpdate(r,g,l)),typeof a.componentDidUpdate=="function"&&(t.flags|=4),typeof a.getSnapshotBeforeUpdate=="function"&&(t.flags|=1024)):(typeof a.componentDidUpdate!="function"||s===e.memoizedProps&&m===e.memoizedState||(t.flags|=4),typeof a.getSnapshotBeforeUpdate!="function"||s===e.memoizedProps&&m===e.memoizedState||(t.flags|=1024),t.memoizedProps=r,t.memoizedState=g),a.props=r,a.state=g,a.context=l,r=u):(typeof a.componentDidUpdate!="function"||s===e.memoizedProps&&m===e.memoizedState||(t.flags|=4),typeof a.getSnapshotBeforeUpdate!="function"||s===e.memoizedProps&&m===e.memoizedState||(t.flags|=1024),r=!1)}return Zs(e,t,n,r,o,i)}function Zs(e,t,n,r,i,o){Yh(e,t);var a=(t.flags&128)!==0;if(!r&&!a)return i&&xd(t,n,!1),pn(e,t,o);r=t.stateNode,ty.current=t;var s=a&&typeof n.getDerivedStateFromError!="function"?null:r.render();return t.flags|=1,e!==null&&a?(t.child=zr(t,e.child,null,o),t.child=zr(t,null,s,o)):nt(e,t,s,o),t.memoizedState=r.state,i&&xd(t,n,!0),t.child}function Kh(e){var t=e.stateNode;t.pendingContext?yd(e,t.pendingContext,t.pendingContext!==t.context):t.context&&yd(e,t.context,!1),Yu(e,t.containerInfo)}function Dd(e,t,n,r,i){return Ar(),Nu(i),t.flags|=256,nt(e,t,n,r),t.child}var qs={dehydrated:null,treeContext:null,retryLane:0};function Js(e){return{baseLanes:e,cachePool:null,transitions:null}}function Gh(e,t,n){var r=t.pendingProps,i=Oe.current,o=!1,a=(t.flags&128)!==0,s;if((s=a)||(s=e!==null&&e.memoizedState===null?!1:(i&2)!==0),s?(o=!0,t.flags&=-129):(e===null||e.memoizedState!==null)&&(i|=1),ke(Oe,i&1),e===null)return Bs(t),e=t.memoizedState,e!==null&&(e=e.dehydrated,e!==null)?(t.mode&1?e.data==="$!"?t.lanes=8:t.lanes=1073741824:t.lanes=1,null):(a=r.children,e=r.fallback,o?(r=t.mode,o=t.child,a={mode:"hidden",children:a},!(r&1)&&o!==null?(o.childLanes=0,o.pendingProps=a):o=Za(a,r,0,null),e=er(e,r,n,null),o.return=t,e.return=t,o.sibling=e,t.child=o,t.child.memoizedState=Js(n),t.memoizedState=qs,e):tc(t,a));if(i=e.memoizedState,i!==null&&(s=i.dehydrated,s!==null))return ny(e,t,a,r,s,i,n);if(o){o=r.fallback,a=t.mode,i=e.child,s=i.sibling;var l={mode:"hidden",children:r.children};return!(a&1)&&t.child!==i?(r=t.child,r.childLanes=0,r.pendingProps=l,t.deletions=null):(r=zn(i,l),r.subtreeFlags=i.subtreeFlags&14680064),s!==null?o=zn(s,o):(o=er(o,a,n,null),o.flags|=2),o.return=t,r.return=t,r.sibling=o,t.child=r,r=o,o=t.child,a=e.child.memoizedState,a=a===null?Js(n):{baseLanes:a.baseLanes|n,cachePool:null,transitions:a.transitions},o.memoizedState=a,o.childLanes=e.childLanes&~n,t.memoizedState=qs,r}return o=e.child,e=o.sibling,r=zn(o,{mode:"visible",children:r.children}),!(t.mode&1)&&(r.lanes=n),r.return=t,r.sibling=null,e!==null&&(n=t.deletions,n===null?(t.deletions=[e],t.flags|=16):n.push(e)),t.child=r,t.memoizedState=null,r}function tc(e,t){return t=Za({mode:"visible",children:t},e.mode,0,null),t.return=e,e.child=t}function xo(e,t,n,r){return r!==null&&Nu(r),zr(t,e.child,null,n),e=tc(t,t.pendingProps.children),e.flags|=2,t.memoizedState=null,e}function ny(e,t,n,r,i,o,a){if(n)return t.flags&256?(t.flags&=-257,r=Ul(Error(L(422))),xo(e,t,a,r)):t.memoizedState!==null?(t.child=e.child,t.flags|=128,null):(o=r.fallback,i=t.mode,r=Za({mode:"visible",children:r.children},i,0,null),o=er(o,i,a,null),o.flags|=2,r.return=t,o.return=t,r.sibling=o,t.child=r,t.mode&1&&zr(t,e.child,null,a),t.child.memoizedState=Js(a),t.memoizedState=qs,o);if(!(t.mode&1))return xo(e,t,a,null);if(i.data==="$!"){if(r=i.nextSibling&&i.nextSibling.dataset,r)var s=r.dgst;return r=s,o=Error(L(419)),r=Ul(o,r,void 0),xo(e,t,a,r)}if(s=(a&e.childLanes)!==0,ut||s){if(r=We,r!==null){switch(a&-a){case 4:i=2;break;case 16:i=8;break;case 64:case 128:case 256:case 512:case 1024:case 2048:case 4096:case 8192:case 16384:case 32768:case 65536:case 131072:case 262144:case 524288:case 1048576:case 2097152:case 4194304:case 8388608:case 16777216:case 33554432:case 67108864:i=32;break;case 536870912:i=268435456;break;default:i=0}i=i&(r.suspendedLanes|a)?0:i,i!==0&&i!==o.retryLane&&(o.retryLane=i,fn(e,i),$t(r,e,i,-1))}return lc(),r=Ul(Error(L(421))),xo(e,t,a,r)}return i.data==="$?"?(t.flags|=128,t.child=e.child,t=my.bind(null,e),i._reactRetry=t,null):(e=o.treeContext,gt=Dn(i.nextSibling),vt=t,_e=!0,Ft=null,e!==null&&(jt[Et++]=an,jt[Et++]=ln,jt[Et++]=nr,an=e.id,ln=e.overflow,nr=t),t=tc(t,r.children),t.flags|=4096,t)}function Vd(e,t,n){e.lanes|=t;var r=e.alternate;r!==null&&(r.lanes|=t),Qs(e.return,t,n)}function Wl(e,t,n,r,i){var o=e.memoizedState;o===null?e.memoizedState={isBackwards:t,rendering:null,renderingStartTime:0,last:r,tail:n,tailMode:i}:(o.isBackwards=t,o.rendering=null,o.renderingStartTime=0,o.last=r,o.tail=n,o.tailMode=i)}function Xh(e,t,n){var r=t.pendingProps,i=r.revealOrder,o=r.tail;if(nt(e,t,r.children,n),r=Oe.current,r&2)r=r&1|2,t.flags|=128;else{if(e!==null&&e.flags&128)e:for(e=t.child;e!==null;){if(e.tag===13)e.memoizedState!==null&&Vd(e,n,t);else if(e.tag===19)Vd(e,n,t);else if(e.child!==null){e.child.return=e,e=e.child;continue}if(e===t)break e;for(;e.sibling===null;){if(e.return===null||e.return===t)break e;e=e.return}e.sibling.return=e.return,e=e.sibling}r&=1}if(ke(Oe,r),!(t.mode&1))t.memoizedState=null;else switch(i){case"forwards":for(n=t.child,i=null;n!==null;)e=n.alternate,e!==null&&ya(e)===null&&(i=n),n=n.sibling;n=i,n===null?(i=t.child,t.child=null):(i=n.sibling,n.sibling=null),Wl(t,!1,i,n,o);break;case"backwards":for(n=null,i=t.child,t.child=null;i!==null;){if(e=i.alternate,e!==null&&ya(e)===null){t.child=i;break}e=i.sibling,i.sibling=n,n=i,i=e}Wl(t,!0,n,null,o);break;case"together":Wl(t,!1,null,null,void 0);break;default:t.memoizedState=null}return t.child}function Ho(e,t){!(t.mode&1)&&e!==null&&(e.alternate=null,t.alternate=null,t.flags|=2)}function pn(e,t,n){if(e!==null&&(t.dependencies=e.dependencies),ir|=t.lanes,!(n&t.childLanes))return null;if(e!==null&&t.child!==e.child)throw Error(L(153));if(t.child!==null){for(e=t.child,n=zn(e,e.pendingProps),t.child=n,n.return=t;e.sibling!==null;)e=e.sibling,n=n.sibling=zn(e,e.pendingProps),n.return=t;n.sibling=null}return t.child}function ry(e,t,n){switch(t.tag){case 3:Kh(t),Ar();break;case 5:kh(t);break;case 1:dt(t.type)&&fa(t);break;case 4:Yu(t,t.stateNode.containerInfo);break;case 10:var r=t.type._context,i=t.memoizedProps.value;ke(ma,r._currentValue),r._currentValue=i;break;case 13:if(r=t.memoizedState,r!==null)return r.dehydrated!==null?(ke(Oe,Oe.current&1),t.flags|=128,null):n&t.child.childLanes?Gh(e,t,n):(ke(Oe,Oe.current&1),e=pn(e,t,n),e!==null?e.sibling:null);ke(Oe,Oe.current&1);break;case 19:if(r=(n&t.childLanes)!==0,e.flags&128){if(r)return Xh(e,t,n);t.flags|=128}if(i=t.memoizedState,i!==null&&(i.rendering=null,i.tail=null,i.lastEffect=null),ke(Oe,Oe.current),r)break;return null;case 22:case 23:return t.lanes=0,Qh(e,t,n)}return pn(e,t,n)}var Zh,eu,qh,Jh;Zh=function(e,t){for(var n=t.child;n!==null;){if(n.tag===5||n.tag===6)e.appendChild(n.stateNode);else if(n.tag!==4&&n.child!==null){n.child.return=n,n=n.child;continue}if(n===t)break;for(;n.sibling===null;){if(n.return===null||n.return===t)return;n=n.return}n.sibling.return=n.return,n=n.sibling}};eu=function(){};qh=function(e,t,n,r){var i=e.memoizedProps;if(i!==r){e=t.stateNode,Xn(qt.current);var o=null;switch(n){case"input":i=bs(e,i),r=bs(e,r),o=[];break;case"select":i=Me({},i,{value:void 0}),r=Me({},r,{value:void 0}),o=[];break;case"textarea":i=js(e,i),r=js(e,r),o=[];break;default:typeof i.onClick!="function"&&typeof r.onClick=="function"&&(e.onclick=ca)}_s(n,r);var a;n=null;for(u in i)if(!r.hasOwnProperty(u)&&i.hasOwnProperty(u)&&i[u]!=null)if(u==="style"){var s=i[u];for(a in s)s.hasOwnProperty(a)&&(n||(n={}),n[a]="")}else u!=="dangerouslySetInnerHTML"&&u!=="children"&&u!=="suppressContentEditableWarning"&&u!=="suppressHydrationWarning"&&u!=="autoFocus"&&(_i.hasOwnProperty(u)?o||(o=[]):(o=o||[]).push(u,null));for(u in r){var l=r[u];if(s=i!=null?i[u]:void 0,r.hasOwnProperty(u)&&l!==s&&(l!=null||s!=null))if(u==="style")if(s){for(a in s)!s.hasOwnProperty(a)||l&&l.hasOwnProperty(a)||(n||(n={}),n[a]="");for(a in l)l.hasOwnProperty(a)&&s[a]!==l[a]&&(n||(n={}),n[a]=l[a])}else n||(o||(o=[]),o.push(u,n)),n=l;else u==="dangerouslySetInnerHTML"?(l=l?l.__html:void 0,s=s?s.__html:void 0,l!=null&&s!==l&&(o=o||[]).push(u,l)):u==="children"?typeof l!="string"&&typeof l!="number"||(o=o||[]).push(u,""+l):u!=="suppressContentEditableWarning"&&u!=="suppressHydrationWarning"&&(_i.hasOwnProperty(u)?(l!=null&&u==="onScroll"&&je("scroll",e),o||s===l||(o=[])):(o=o||[]).push(u,l))}n&&(o=o||[]).push("style",n);var u=o;(t.updateQueue=u)&&(t.flags|=4)}};Jh=function(e,t,n,r){n!==r&&(t.flags|=4)};function ti(e,t){if(!_e)switch(e.tailMode){case"hidden":t=e.tail;for(var n=null;t!==null;)t.alternate!==null&&(n=t),t=t.sibling;n===null?e.tail=null:n.sibling=null;break;case"collapsed":n=e.tail;for(var r=null;n!==null;)n.alternate!==null&&(r=n),n=n.sibling;r===null?t||e.tail===null?e.tail=null:e.tail.sibling=null:r.sibling=null}}function qe(e){var t=e.alternate!==null&&e.alternate.child===e.child,n=0,r=0;if(t)for(var i=e.child;i!==null;)n|=i.lanes|i.childLanes,r|=i.subtreeFlags&14680064,r|=i.flags&14680064,i.return=e,i=i.sibling;else for(i=e.child;i!==null;)n|=i.lanes|i.childLanes,r|=i.subtreeFlags,r|=i.flags,i.return=e,i=i.sibling;return e.subtreeFlags|=r,e.childLanes=n,t}function iy(e,t,n){var r=t.pendingProps;switch($u(t),t.tag){case 2:case 16:case 15:case 0:case 11:case 7:case 8:case 12:case 9:case 14:return qe(t),null;case 1:return dt(t.type)&&da(),qe(t),null;case 3:return r=t.stateNode,$r(),Ee(ct),Ee(tt),Gu(),r.pendingContext&&(r.context=r.pendingContext,r.pendingContext=null),(e===null||e.child===null)&&(vo(t)?t.flags|=4:e===null||e.memoizedState.isDehydrated&&!(t.flags&256)||(t.flags|=1024,Ft!==null&&(su(Ft),Ft=null))),eu(e,t),qe(t),null;case 5:Ku(t);var i=Xn(zi.current);if(n=t.type,e!==null&&t.stateNode!=null)qh(e,t,n,r,i),e.ref!==t.ref&&(t.flags|=512,t.flags|=2097152);else{if(!r){if(t.stateNode===null)throw Error(L(166));return qe(t),null}if(e=Xn(qt.current),vo(t)){r=t.stateNode,n=t.type;var o=t.memoizedProps;switch(r[Kt]=t,r[Fi]=o,e=(t.mode&1)!==0,n){case"dialog":je("cancel",r),je("close",r);break;case"iframe":case"object":case"embed":je("load",r);break;case"video":case"audio":for(i=0;i<hi.length;i++)je(hi[i],r);break;case"source":je("error",r);break;case"img":case"image":case"link":je("error",r),je("load",r);break;case"details":je("toggle",r);break;case"input":Bc(r,o),je("invalid",r);break;case"select":r._wrapperState={wasMultiple:!!o.multiple},je("invalid",r);break;case"textarea":Yc(r,o),je("invalid",r)}_s(n,o),i=null;for(var a in o)if(o.hasOwnProperty(a)){var s=o[a];a==="children"?typeof s=="string"?r.textContent!==s&&(o.suppressHydrationWarning!==!0&&go(r.textContent,s,e),i=["children",s]):typeof s=="number"&&r.textContent!==""+s&&(o.suppressHydrationWarning!==!0&&go(r.textContent,s,e),i=["children",""+s]):_i.hasOwnProperty(a)&&s!=null&&a==="onScroll"&&je("scroll",r)}switch(n){case"input":lo(r),Qc(r,o,!0);break;case"textarea":lo(r),Kc(r);break;case"select":case"option":break;default:typeof o.onClick=="function"&&(r.onclick=ca)}r=i,t.updateQueue=r,r!==null&&(t.flags|=4)}else{a=i.nodeType===9?i:i.ownerDocument,e==="http://www.w3.org/1999/xhtml"&&(e=Ep(n)),e==="http://www.w3.org/1999/xhtml"?n==="script"?(e=a.createElement("div"),e.innerHTML="<script><\/script>",e=e.removeChild(e.firstChild)):typeof r.is=="string"?e=a.createElement(n,{is:r.is}):(e=a.createElement(n),n==="select"&&(a=e,r.multiple?a.multiple=!0:r.size&&(a.size=r.size))):e=a.createElementNS(e,n),e[Kt]=t,e[Fi]=r,Zh(e,t,!1,!1),t.stateNode=e;e:{switch(a=Os(n,r),n){case"dialog":je("cancel",e),je("close",e),i=r;break;case"iframe":case"object":case"embed":je("load",e),i=r;break;case"video":case"audio":for(i=0;i<hi.length;i++)je(hi[i],e);i=r;break;case"source":je("error",e),i=r;break;case"img":case"image":case"link":je("error",e),je("load",e),i=r;break;case"details":je("toggle",e),i=r;break;case"input":Bc(e,r),i=bs(e,r),je("invalid",e);break;case"option":i=r;break;case"select":e._wrapperState={wasMultiple:!!r.multiple},i=Me({},r,{value:void 0}),je("invalid",e);break;case"textarea":Yc(e,r),i=js(e,r),je("invalid",e);break;default:i=r}_s(n,i),s=i;for(o in s)if(s.hasOwnProperty(o)){var l=s[o];o==="style"?Pp(e,l):o==="dangerouslySetInnerHTML"?(l=l?l.__html:void 0,l!=null&&_p(e,l)):o==="children"?typeof l=="string"?(n!=="textarea"||l!=="")&&Oi(e,l):typeof l=="number"&&Oi(e,""+l):o!=="suppressContentEditableWarning"&&o!=="suppressHydrationWarning"&&o!=="autoFocus"&&(_i.hasOwnProperty(o)?l!=null&&o==="onScroll"&&je("scroll",e):l!=null&&ju(e,o,l,a))}switch(n){case"input":lo(e),Qc(e,r,!1);break;case"textarea":lo(e),Kc(e);break;case"option":r.value!=null&&e.setAttribute("value",""+$n(r.value));break;case"select":e.multiple=!!r.multiple,o=r.value,o!=null?Pr(e,!!r.multiple,o,!1):r.defaultValue!=null&&Pr(e,!!r.multiple,r.defaultValue,!0);break;default:typeof i.onClick=="function"&&(e.onclick=ca)}switch(n){case"button":case"input":case"select":case"textarea":r=!!r.autoFocus;break e;case"img":r=!0;break e;default:r=!1}}r&&(t.flags|=4)}t.ref!==null&&(t.flags|=512,t.flags|=2097152)}return qe(t),null;case 6:if(e&&t.stateNode!=null)Jh(e,t,e.memoizedProps,r);else{if(typeof r!="string"&&t.stateNode===null)throw Error(L(166));if(n=Xn(zi.current),Xn(qt.current),vo(t)){if(r=t.stateNode,n=t.memoizedProps,r[Kt]=t,(o=r.nodeValue!==n)&&(e=vt,e!==null))switch(e.tag){case 3:go(r.nodeValue,n,(e.mode&1)!==0);break;case 5:e.memoizedProps.suppressHydrationWarning!==!0&&go(r.nodeValue,n,(e.mode&1)!==0)}o&&(t.flags|=4)}else r=(n.nodeType===9?n:n.ownerDocument).createTextNode(r),r[Kt]=t,t.stateNode=r}return qe(t),null;case 13:if(Ee(Oe),r=t.memoizedState,e===null||e.memoizedState!==null&&e.memoizedState.dehydrated!==null){if(_e&&gt!==null&&t.mode&1&&!(t.flags&128))gh(),Ar(),t.flags|=98560,o=!1;else if(o=vo(t),r!==null&&r.dehydrated!==null){if(e===null){if(!o)throw Error(L(318));if(o=t.memoizedState,o=o!==null?o.dehydrated:null,!o)throw Error(L(317));o[Kt]=t}else Ar(),!(t.flags&128)&&(t.memoizedState=null),t.flags|=4;qe(t),o=!1}else Ft!==null&&(su(Ft),Ft=null),o=!0;if(!o)return t.flags&65536?t:null}return t.flags&128?(t.lanes=n,t):(r=r!==null,r!==(e!==null&&e.memoizedState!==null)&&r&&(t.child.flags|=8192,t.mode&1&&(e===null||Oe.current&1?$e===0&&($e=3):lc())),t.updateQueue!==null&&(t.flags|=4),qe(t),null);case 4:return $r(),eu(e,t),e===null&&Di(t.stateNode.containerInfo),qe(t),null;case 10:return Hu(t.type._context),qe(t),null;case 17:return dt(t.type)&&da(),qe(t),null;case 19:if(Ee(Oe),o=t.memoizedState,o===null)return qe(t),null;if(r=(t.flags&128)!==0,a=o.rendering,a===null)if(r)ti(o,!1);else{if($e!==0||e!==null&&e.flags&128)for(e=t.child;e!==null;){if(a=ya(e),a!==null){for(t.flags|=128,ti(o,!1),r=a.updateQueue,r!==null&&(t.updateQueue=r,t.flags|=4),t.subtreeFlags=0,r=n,n=t.child;n!==null;)o=n,e=r,o.flags&=14680066,a=o.alternate,a===null?(o.childLanes=0,o.lanes=e,o.child=null,o.subtreeFlags=0,o.memoizedProps=null,o.memoizedState=null,o.updateQueue=null,o.dependencies=null,o.stateNode=null):(o.childLanes=a.childLanes,o.lanes=a.lanes,o.child=a.child,o.subtreeFlags=0,o.deletions=null,o.memoizedProps=a.memoizedProps,o.memoizedState=a.memoizedState,o.updateQueue=a.updateQueue,o.type=a.type,e=a.dependencies,o.dependencies=e===null?null:{lanes:e.lanes,firstContext:e.firstContext}),n=n.sibling;return ke(Oe,Oe.current&1|2),t.child}e=e.sibling}o.tail!==null&&Le()>Ur&&(t.flags|=128,r=!0,ti(o,!1),t.lanes=4194304)}else{if(!r)if(e=ya(a),e!==null){if(t.flags|=128,r=!0,n=e.updateQueue,n!==null&&(t.updateQueue=n,t.flags|=4),ti(o,!0),o.tail===null&&o.tailMode==="hidden"&&!a.alternate&&!_e)return qe(t),null}else 2*Le()-o.renderingStartTime>Ur&&n!==1073741824&&(t.flags|=128,r=!0,ti(o,!1),t.lanes=4194304);o.isBackwards?(a.sibling=t.child,t.child=a):(n=o.last,n!==null?n.sibling=a:t.child=a,o.last=a)}return o.tail!==null?(t=o.tail,o.rendering=t,o.tail=t.sibling,o.renderingStartTime=Le(),t.sibling=null,n=Oe.current,ke(Oe,r?n&1|2:n&1),t):(qe(t),null);case 22:case 23:return ac(),r=t.memoizedState!==null,e!==null&&e.memoizedState!==null!==r&&(t.flags|=8192),r&&t.mode&1?mt&1073741824&&(qe(t),t.subtreeFlags&6&&(t.flags|=8192)):qe(t),null;case 24:return null;case 25:return null}throw Error(L(156,t.tag))}function oy(e,t){switch($u(t),t.tag){case 1:return dt(t.type)&&da(),e=t.flags,e&65536?(t.flags=e&-65537|128,t):null;case 3:return $r(),Ee(ct),Ee(tt),Gu(),e=t.flags,e&65536&&!(e&128)?(t.flags=e&-65537|128,t):null;case 5:return Ku(t),null;case 13:if(Ee(Oe),e=t.memoizedState,e!==null&&e.dehydrated!==null){if(t.alternate===null)throw Error(L(340));Ar()}return e=t.flags,e&65536?(t.flags=e&-65537|128,t):null;case 19:return Ee(Oe),null;case 4:return $r(),null;case 10:return Hu(t.type._context),null;case 22:case 23:return ac(),null;case 24:return null;default:return null}}var wo=!1,et=!1,ay=typeof WeakSet=="function"?WeakSet:Set,H=null;function Er(e,t){var n=e.ref;if(n!==null)if(typeof n=="function")try{n(null)}catch(r){Te(e,t,r)}else n.current=null}function tu(e,t,n){try{n()}catch(r){Te(e,t,r)}}var Fd=!1;function ly(e,t){if(As=la,e=rh(),Au(e)){if("selectionStart"in e)var n={start:e.selectionStart,end:e.selectionEnd};else e:{n=(n=e.ownerDocument)&&n.defaultView||window;var r=n.getSelection&&n.getSelection();if(r&&r.rangeCount!==0){n=r.anchorNode;var i=r.anchorOffset,o=r.focusNode;r=r.focusOffset;try{n.nodeType,o.nodeType}catch{n=null;break e}var a=0,s=-1,l=-1,u=0,p=0,h=e,m=null;t:for(;;){for(var x;h!==n||i!==0&&h.nodeType!==3||(s=a+i),h!==o||r!==0&&h.nodeType!==3||(l=a+r),h.nodeType===3&&(a+=h.nodeValue.length),(x=h.firstChild)!==null;)m=h,h=x;for(;;){if(h===e)break t;if(m===n&&++u===i&&(s=a),m===o&&++p===r&&(l=a),(x=h.nextSibling)!==null)break;h=m,m=h.parentNode}h=x}n=s===-1||l===-1?null:{start:s,end:l}}else n=null}n=n||{start:0,end:0}}else n=null;for(zs={focusedElem:e,selectionRange:n},la=!1,H=t;H!==null;)if(t=H,e=t.child,(t.subtreeFlags&1028)!==0&&e!==null)e.return=t,H=e;else for(;H!==null;){t=H;try{var g=t.alternate;if(t.flags&1024)switch(t.tag){case 0:case 11:case 15:break;case 1:if(g!==null){var y=g.memoizedProps,S=g.memoizedState,d=t.stateNode,f=d.getSnapshotBeforeUpdate(t.elementType===t.type?y:Rt(t.type,y),S);d.__reactInternalSnapshotBeforeUpdate=f}break;case 3:var v=t.stateNode.containerInfo;v.nodeType===1?v.textContent="":v.nodeType===9&&v.documentElement&&v.removeChild(v.documentElement);break;case 5:case 6:case 4:case 17:break;default:throw Error(L(163))}}catch(w){Te(t,t.return,w)}if(e=t.sibling,e!==null){e.return=t.return,H=e;break}H=t.return}return g=Fd,Fd=!1,g}function ki(e,t,n){var r=t.updateQueue;if(r=r!==null?r.lastEffect:null,r!==null){var i=r=r.next;do{if((i.tag&e)===e){var o=i.destroy;i.destroy=void 0,o!==void 0&&tu(t,n,o)}i=i.next}while(i!==r)}}function Ga(e,t){if(t=t.updateQueue,t=t!==null?t.lastEffect:null,t!==null){var n=t=t.next;do{if((n.tag&e)===e){var r=n.create;n.destroy=r()}n=n.next}while(n!==t)}}function nu(e){var t=e.ref;if(t!==null){var n=e.stateNode;switch(e.tag){case 5:e=n;break;default:e=n}typeof t=="function"?t(e):t.current=e}}function em(e){var t=e.alternate;t!==null&&(e.alternate=null,em(t)),e.child=null,e.deletions=null,e.sibling=null,e.tag===5&&(t=e.stateNode,t!==null&&(delete t[Kt],delete t[Fi],delete t[Us],delete t[W0],delete t[H0])),e.stateNode=null,e.return=null,e.dependencies=null,e.memoizedProps=null,e.memoizedState=null,e.pendingProps=null,e.stateNode=null,e.updateQueue=null}function tm(e){return e.tag===5||e.tag===3||e.tag===4}function Ad(e){e:for(;;){for(;e.sibling===null;){if(e.return===null||tm(e.return))return null;e=e.return}for(e.sibling.return=e.return,e=e.sibling;e.tag!==5&&e.tag!==6&&e.tag!==18;){if(e.flags&2||e.child===null||e.tag===4)continue e;e.child.return=e,e=e.child}if(!(e.flags&2))return e.stateNode}}function ru(e,t,n){var r=e.tag;if(r===5||r===6)e=e.stateNode,t?n.nodeType===8?n.parentNode.insertBefore(e,t):n.insertBefore(e,t):(n.nodeType===8?(t=n.parentNode,t.insertBefore(e,n)):(t=n,t.appendChild(e)),n=n._reactRootContainer,n!=null||t.onclick!==null||(t.onclick=ca));else if(r!==4&&(e=e.child,e!==null))for(ru(e,t,n),e=e.sibling;e!==null;)ru(e,t,n),e=e.sibling}function iu(e,t,n){var r=e.tag;if(r===5||r===6)e=e.stateNode,t?n.insertBefore(e,t):n.appendChild(e);else if(r!==4&&(e=e.child,e!==null))for(iu(e,t,n),e=e.sibling;e!==null;)iu(e,t,n),e=e.sibling}var Qe=null,Dt=!1;function gn(e,t,n){for(n=n.child;n!==null;)nm(e,t,n),n=n.sibling}function nm(e,t,n){if(Zt&&typeof Zt.onCommitFiberUnmount=="function")try{Zt.onCommitFiberUnmount(Na,n)}catch{}switch(n.tag){case 5:et||Er(n,t);case 6:var r=Qe,i=Dt;Qe=null,gn(e,t,n),Qe=r,Dt=i,Qe!==null&&(Dt?(e=Qe,n=n.stateNode,e.nodeType===8?e.parentNode.removeChild(n):e.removeChild(n)):Qe.removeChild(n.stateNode));break;case 18:Qe!==null&&(Dt?(e=Qe,n=n.stateNode,e.nodeType===8?Vl(e.parentNode,n):e.nodeType===1&&Vl(e,n),Ii(e)):Vl(Qe,n.stateNode));break;case 4:r=Qe,i=Dt,Qe=n.stateNode.containerInfo,Dt=!0,gn(e,t,n),Qe=r,Dt=i;break;case 0:case 11:case 14:case 15:if(!et&&(r=n.updateQueue,r!==null&&(r=r.lastEffect,r!==null))){i=r=r.next;do{var o=i,a=o.destroy;o=o.tag,a!==void 0&&(o&2||o&4)&&tu(n,t,a),i=i.next}while(i!==r)}gn(e,t,n);break;case 1:if(!et&&(Er(n,t),r=n.stateNode,typeof r.componentWillUnmount=="function"))try{r.props=n.memoizedProps,r.state=n.memoizedState,r.componentWillUnmount()}catch(s){Te(n,t,s)}gn(e,t,n);break;case 21:gn(e,t,n);break;case 22:n.mode&1?(et=(r=et)||n.memoizedState!==null,gn(e,t,n),et=r):gn(e,t,n);break;default:gn(e,t,n)}}function zd(e){var t=e.updateQueue;if(t!==null){e.updateQueue=null;var n=e.stateNode;n===null&&(n=e.stateNode=new ay),t.forEach(function(r){var i=gy.bind(null,e,r);n.has(r)||(n.add(r),r.then(i,i))})}}function Tt(e,t){var n=t.deletions;if(n!==null)for(var r=0;r<n.length;r++){var i=n[r];try{var o=e,a=t,s=a;e:for(;s!==null;){switch(s.tag){case 5:Qe=s.stateNode,Dt=!1;break e;case 3:Qe=s.stateNode.containerInfo,Dt=!0;break e;case 4:Qe=s.stateNode.containerInfo,Dt=!0;break e}s=s.return}if(Qe===null)throw Error(L(160));nm(o,a,i),Qe=null,Dt=!1;var l=i.alternate;l!==null&&(l.return=null),i.return=null}catch(u){Te(i,t,u)}}if(t.subtreeFlags&12854)for(t=t.child;t!==null;)rm(t,e),t=t.sibling}function rm(e,t){var n=e.alternate,r=e.flags;switch(e.tag){case 0:case 11:case 14:case 15:if(Tt(t,e),Wt(e),r&4){try{ki(3,e,e.return),Ga(3,e)}catch(y){Te(e,e.return,y)}try{ki(5,e,e.return)}catch(y){Te(e,e.return,y)}}break;case 1:Tt(t,e),Wt(e),r&512&&n!==null&&Er(n,n.return);break;case 5:if(Tt(t,e),Wt(e),r&512&&n!==null&&Er(n,n.return),e.flags&32){var i=e.stateNode;try{Oi(i,"")}catch(y){Te(e,e.return,y)}}if(r&4&&(i=e.stateNode,i!=null)){var o=e.memoizedProps,a=n!==null?n.memoizedProps:o,s=e.type,l=e.updateQueue;if(e.updateQueue=null,l!==null)try{s==="input"&&o.type==="radio"&&o.name!=null&&Cp(i,o),Os(s,a);var u=Os(s,o);for(a=0;a<l.length;a+=2){var p=l[a],h=l[a+1];p==="style"?Pp(i,h):p==="dangerouslySetInnerHTML"?_p(i,h):p==="children"?Oi(i,h):ju(i,p,h,u)}switch(s){case"input":ks(i,o);break;case"textarea":jp(i,o);break;case"select":var m=i._wrapperState.wasMultiple;i._wrapperState.wasMultiple=!!o.multiple;var x=o.value;x!=null?Pr(i,!!o.multiple,x,!1):m!==!!o.multiple&&(o.defaultValue!=null?Pr(i,!!o.multiple,o.defaultValue,!0):Pr(i,!!o.multiple,o.multiple?[]:"",!1))}i[Fi]=o}catch(y){Te(e,e.return,y)}}break;case 6:if(Tt(t,e),Wt(e),r&4){if(e.stateNode===null)throw Error(L(162));i=e.stateNode,o=e.memoizedProps;try{i.nodeValue=o}catch(y){Te(e,e.return,y)}}break;case 3:if(Tt(t,e),Wt(e),r&4&&n!==null&&n.memoizedState.isDehydrated)try{Ii(t.containerInfo)}catch(y){Te(e,e.return,y)}break;case 4:Tt(t,e),Wt(e);break;case 13:Tt(t,e),Wt(e),i=e.child,i.flags&8192&&(o=i.memoizedState!==null,i.stateNode.isHidden=o,!o||i.alternate!==null&&i.alternate.memoizedState!==null||(ic=Le())),r&4&&zd(e);break;case 22:if(p=n!==null&&n.memoizedState!==null,e.mode&1?(et=(u=et)||p,Tt(t,e),et=u):Tt(t,e),Wt(e),r&8192){if(u=e.memoizedState!==null,(e.stateNode.isHidden=u)&&!p&&e.mode&1)for(H=e,p=e.child;p!==null;){for(h=H=p;H!==null;){switch(m=H,x=m.child,m.tag){case 0:case 11:case 14:case 15:ki(4,m,m.return);break;case 1:Er(m,m.return);var g=m.stateNode;if(typeof g.componentWillUnmount=="function"){r=m,n=m.return;try{t=r,g.props=t.memoizedProps,g.state=t.memoizedState,g.componentWillUnmount()}catch(y){Te(r,n,y)}}break;case 5:Er(m,m.return);break;case 22:if(m.memoizedState!==null){Nd(h);continue}}x!==null?(x.return=m,H=x):Nd(h)}p=p.sibling}e:for(p=null,h=e;;){if(h.tag===5){if(p===null){p=h;try{i=h.stateNode,u?(o=i.style,typeof o.setProperty=="function"?o.setProperty("display","none","important"):o.display="none"):(s=h.stateNode,l=h.memoizedProps.style,a=l!=null&&l.hasOwnProperty("display")?l.display:null,s.style.display=Op("display",a))}catch(y){Te(e,e.return,y)}}}else if(h.tag===6){if(p===null)try{h.stateNode.nodeValue=u?"":h.memoizedProps}catch(y){Te(e,e.return,y)}}else if((h.tag!==22&&h.tag!==23||h.memoizedState===null||h===e)&&h.child!==null){h.child.return=h,h=h.child;continue}if(h===e)break e;for(;h.sibling===null;){if(h.return===null||h.return===e)break e;p===h&&(p=null),h=h.return}p===h&&(p=null),h.sibling.return=h.return,h=h.sibling}}break;case 19:Tt(t,e),Wt(e),r&4&&zd(e);break;case 21:break;default:Tt(t,e),Wt(e)}}function Wt(e){var t=e.flags;if(t&2){try{e:{for(var n=e.return;n!==null;){if(tm(n)){var r=n;break e}n=n.return}throw Error(L(160))}switch(r.tag){case 5:var i=r.stateNode;r.flags&32&&(Oi(i,""),r.flags&=-33);var o=Ad(e);iu(e,o,i);break;case 3:case 4:var a=r.stateNode.containerInfo,s=Ad(e);ru(e,s,a);break;default:throw Error(L(161))}}catch(l){Te(e,e.return,l)}e.flags&=-3}t&4096&&(e.flags&=-4097)}function sy(e,t,n){H=e,im(e)}function im(e,t,n){for(var r=(e.mode&1)!==0;H!==null;){var i=H,o=i.child;if(i.tag===22&&r){var a=i.memoizedState!==null||wo;if(!a){var s=i.alternate,l=s!==null&&s.memoizedState!==null||et;s=wo;var u=et;if(wo=a,(et=l)&&!u)for(H=i;H!==null;)a=H,l=a.child,a.tag===22&&a.memoizedState!==null?Ud(i):l!==null?(l.return=a,H=l):Ud(i);for(;o!==null;)H=o,im(o),o=o.sibling;H=i,wo=s,et=u}$d(e)}else i.subtreeFlags&8772&&o!==null?(o.return=i,H=o):$d(e)}}function $d(e){for(;H!==null;){var t=H;if(t.flags&8772){var n=t.alternate;try{if(t.flags&8772)switch(t.tag){case 0:case 11:case 15:et||Ga(5,t);break;case 1:var r=t.stateNode;if(t.flags&4&&!et)if(n===null)r.componentDidMount();else{var i=t.elementType===t.type?n.memoizedProps:Rt(t.type,n.memoizedProps);r.componentDidUpdate(i,n.memoizedState,r.__reactInternalSnapshotBeforeUpdate)}var o=t.updateQueue;o!==null&&kd(t,o,r);break;case 3:var a=t.updateQueue;if(a!==null){if(n=null,t.child!==null)switch(t.child.tag){case 5:n=t.child.stateNode;break;case 1:n=t.child.stateNode}kd(t,a,n)}break;case 5:var s=t.stateNode;if(n===null&&t.flags&4){n=s;var l=t.memoizedProps;switch(t.type){case"button":case"input":case"select":case"textarea":l.autoFocus&&n.focus();break;case"img":l.src&&(n.src=l.src)}}break;case 6:break;case 4:break;case 12:break;case 13:if(t.memoizedState===null){var u=t.alternate;if(u!==null){var p=u.memoizedState;if(p!==null){var h=p.dehydrated;h!==null&&Ii(h)}}}break;case 19:case 17:case 21:case 22:case 23:case 25:break;default:throw Error(L(163))}et||t.flags&512&&nu(t)}catch(m){Te(t,t.return,m)}}if(t===e){H=null;break}if(n=t.sibling,n!==null){n.return=t.return,H=n;break}H=t.return}}function Nd(e){for(;H!==null;){var t=H;if(t===e){H=null;break}var n=t.sibling;if(n!==null){n.return=t.return,H=n;break}H=t.return}}function Ud(e){for(;H!==null;){var t=H;try{switch(t.tag){case 0:case 11:case 15:var n=t.return;try{Ga(4,t)}catch(l){Te(t,n,l)}break;case 1:var r=t.stateNode;if(typeof r.componentDidMount=="function"){var i=t.return;try{r.componentDidMount()}catch(l){Te(t,i,l)}}var o=t.return;try{nu(t)}catch(l){Te(t,o,l)}break;case 5:var a=t.return;try{nu(t)}catch(l){Te(t,a,l)}}}catch(l){Te(t,t.return,l)}if(t===e){H=null;break}var s=t.sibling;if(s!==null){s.return=t.return,H=s;break}H=t.return}}var uy=Math.ceil,Sa=hn.ReactCurrentDispatcher,nc=hn.ReactCurrentOwner,Ot=hn.ReactCurrentBatchConfig,de=0,We=null,Fe=null,Ke=0,mt=0,_r=Wn(0),$e=0,Wi=null,ir=0,Xa=0,rc=0,Ci=null,st=null,ic=0,Ur=1/0,nn=null,ba=!1,ou=null,Fn=null,So=!1,Mn=null,ka=0,ji=0,au=null,Bo=-1,Qo=0;function it(){return de&6?Le():Bo!==-1?Bo:Bo=Le()}function An(e){return e.mode&1?de&2&&Ke!==0?Ke&-Ke:Q0.transition!==null?(Qo===0&&(Qo=Np()),Qo):(e=ge,e!==0||(e=window.event,e=e===void 0?16:Kp(e.type)),e):1}function $t(e,t,n,r){if(50<ji)throw ji=0,au=null,Error(L(185));Xi(e,n,r),(!(de&2)||e!==We)&&(e===We&&(!(de&2)&&(Xa|=n),$e===4&&On(e,Ke)),ft(e,r),n===1&&de===0&&!(t.mode&1)&&(Ur=Le()+500,Qa&&Hn()))}function ft(e,t){var n=e.callbackNode;Qv(e,t);var r=aa(e,e===We?Ke:0);if(r===0)n!==null&&Zc(n),e.callbackNode=null,e.callbackPriority=0;else if(t=r&-r,e.callbackPriority!==t){if(n!=null&&Zc(n),t===1)e.tag===0?B0(Wd.bind(null,e)):ph(Wd.bind(null,e)),N0(function(){!(de&6)&&Hn()}),n=null;else{switch(Up(r)){case 1:n=Mu;break;case 4:n=zp;break;case 16:n=oa;break;case 536870912:n=$p;break;default:n=oa}n=fm(n,om.bind(null,e))}e.callbackPriority=t,e.callbackNode=n}}function om(e,t){if(Bo=-1,Qo=0,de&6)throw Error(L(327));var n=e.callbackNode;if(Lr()&&e.callbackNode!==n)return null;var r=aa(e,e===We?Ke:0);if(r===0)return null;if(r&30||r&e.expiredLanes||t)t=Ca(e,r);else{t=r;var i=de;de|=2;var o=lm();(We!==e||Ke!==t)&&(nn=null,Ur=Le()+500,Jn(e,t));do try{fy();break}catch(s){am(e,s)}while(!0);Wu(),Sa.current=o,de=i,Fe!==null?t=0:(We=null,Ke=0,t=$e)}if(t!==0){if(t===2&&(i=Rs(e),i!==0&&(r=i,t=lu(e,i))),t===1)throw n=Wi,Jn(e,0),On(e,r),ft(e,Le()),n;if(t===6)On(e,r);else{if(i=e.current.alternate,!(r&30)&&!cy(i)&&(t=Ca(e,r),t===2&&(o=Rs(e),o!==0&&(r=o,t=lu(e,o))),t===1))throw n=Wi,Jn(e,0),On(e,r),ft(e,Le()),n;switch(e.finishedWork=i,e.finishedLanes=r,t){case 0:case 1:throw Error(L(345));case 2:Yn(e,st,nn);break;case 3:if(On(e,r),(r&130023424)===r&&(t=ic+500-Le(),10<t)){if(aa(e,0)!==0)break;if(i=e.suspendedLanes,(i&r)!==r){it(),e.pingedLanes|=e.suspendedLanes&i;break}e.timeoutHandle=Ns(Yn.bind(null,e,st,nn),t);break}Yn(e,st,nn);break;case 4:if(On(e,r),(r&4194240)===r)break;for(t=e.eventTimes,i=-1;0<r;){var a=31-zt(r);o=1<<a,a=t[a],a>i&&(i=a),r&=~o}if(r=i,r=Le()-r,r=(120>r?120:480>r?480:1080>r?1080:1920>r?1920:3e3>r?3e3:4320>r?4320:1960*uy(r/1960))-r,10<r){e.timeoutHandle=Ns(Yn.bind(null,e,st,nn),r);break}Yn(e,st,nn);break;case 5:Yn(e,st,nn);break;default:throw Error(L(329))}}}return ft(e,Le()),e.callbackNode===n?om.bind(null,e):null}function lu(e,t){var n=Ci;return e.current.memoizedState.isDehydrated&&(Jn(e,t).flags|=256),e=Ca(e,t),e!==2&&(t=st,st=n,t!==null&&su(t)),e}function su(e){st===null?st=e:st.push.apply(st,e)}function cy(e){for(var t=e;;){if(t.flags&16384){var n=t.updateQueue;if(n!==null&&(n=n.stores,n!==null))for(var r=0;r<n.length;r++){var i=n[r],o=i.getSnapshot;i=i.value;try{if(!Ut(o(),i))return!1}catch{return!1}}}if(n=t.child,t.subtreeFlags&16384&&n!==null)n.return=t,t=n;else{if(t===e)break;for(;t.sibling===null;){if(t.return===null||t.return===e)return!0;t=t.return}t.sibling.return=t.return,t=t.sibling}}return!0}function On(e,t){for(t&=~rc,t&=~Xa,e.suspendedLanes|=t,e.pingedLanes&=~t,e=e.expirationTimes;0<t;){var n=31-zt(t),r=1<<n;e[n]=-1,t&=~r}}function Wd(e){if(de&6)throw Error(L(327));Lr();var t=aa(e,0);if(!(t&1))return ft(e,Le()),null;var n=Ca(e,t);if(e.tag!==0&&n===2){var r=Rs(e);r!==0&&(t=r,n=lu(e,r))}if(n===1)throw n=Wi,Jn(e,0),On(e,t),ft(e,Le()),n;if(n===6)throw Error(L(345));return e.finishedWork=e.current.alternate,e.finishedLanes=t,Yn(e,st,nn),ft(e,Le()),null}function oc(e,t){var n=de;de|=1;try{return e(t)}finally{de=n,de===0&&(Ur=Le()+500,Qa&&Hn())}}function or(e){Mn!==null&&Mn.tag===0&&!(de&6)&&Lr();var t=de;de|=1;var n=Ot.transition,r=ge;try{if(Ot.transition=null,ge=1,e)return e()}finally{ge=r,Ot.transition=n,de=t,!(de&6)&&Hn()}}function ac(){mt=_r.current,Ee(_r)}function Jn(e,t){e.finishedWork=null,e.finishedLanes=0;var n=e.timeoutHandle;if(n!==-1&&(e.timeoutHandle=-1,$0(n)),Fe!==null)for(n=Fe.return;n!==null;){var r=n;switch($u(r),r.tag){case 1:r=r.type.childContextTypes,r!=null&&da();break;case 3:$r(),Ee(ct),Ee(tt),Gu();break;case 5:Ku(r);break;case 4:$r();break;case 13:Ee(Oe);break;case 19:Ee(Oe);break;case 10:Hu(r.type._context);break;case 22:case 23:ac()}n=n.return}if(We=e,Fe=e=zn(e.current,null),Ke=mt=t,$e=0,Wi=null,rc=Xa=ir=0,st=Ci=null,Gn!==null){for(t=0;t<Gn.length;t++)if(n=Gn[t],r=n.interleaved,r!==null){n.interleaved=null;var i=r.next,o=n.pending;if(o!==null){var a=o.next;o.next=i,r.next=a}n.pending=r}Gn=null}return e}function am(e,t){do{var n=Fe;try{if(Wu(),Uo.current=wa,xa){for(var r=Pe.memoizedState;r!==null;){var i=r.queue;i!==null&&(i.pending=null),r=r.next}xa=!1}if(rr=0,Ue=ze=Pe=null,bi=!1,$i=0,nc.current=null,n===null||n.return===null){$e=1,Wi=t,Fe=null;break}e:{var o=e,a=n.return,s=n,l=t;if(t=Ke,s.flags|=32768,l!==null&&typeof l=="object"&&typeof l.then=="function"){var u=l,p=s,h=p.tag;if(!(p.mode&1)&&(h===0||h===11||h===15)){var m=p.alternate;m?(p.updateQueue=m.updateQueue,p.memoizedState=m.memoizedState,p.lanes=m.lanes):(p.updateQueue=null,p.memoizedState=null)}var x=Md(a);if(x!==null){x.flags&=-257,Td(x,a,s,o,t),x.mode&1&&Pd(o,u,t),t=x,l=u;var g=t.updateQueue;if(g===null){var y=new Set;y.add(l),t.updateQueue=y}else g.add(l);break e}else{if(!(t&1)){Pd(o,u,t),lc();break e}l=Error(L(426))}}else if(_e&&s.mode&1){var S=Md(a);if(S!==null){!(S.flags&65536)&&(S.flags|=256),Td(S,a,s,o,t),Nu(Nr(l,s));break e}}o=l=Nr(l,s),$e!==4&&($e=2),Ci===null?Ci=[o]:Ci.push(o),o=a;do{switch(o.tag){case 3:o.flags|=65536,t&=-t,o.lanes|=t;var d=Wh(o,l,t);bd(o,d);break e;case 1:s=l;var f=o.type,v=o.stateNode;if(!(o.flags&128)&&(typeof f.getDerivedStateFromError=="function"||v!==null&&typeof v.componentDidCatch=="function"&&(Fn===null||!Fn.has(v)))){o.flags|=65536,t&=-t,o.lanes|=t;var w=Hh(o,s,t);bd(o,w);break e}}o=o.return}while(o!==null)}um(n)}catch(k){t=k,Fe===n&&n!==null&&(Fe=n=n.return);continue}break}while(!0)}function lm(){var e=Sa.current;return Sa.current=wa,e===null?wa:e}function lc(){($e===0||$e===3||$e===2)&&($e=4),We===null||!(ir&268435455)&&!(Xa&268435455)||On(We,Ke)}function Ca(e,t){var n=de;de|=2;var r=lm();(We!==e||Ke!==t)&&(nn=null,Jn(e,t));do try{dy();break}catch(i){am(e,i)}while(!0);if(Wu(),de=n,Sa.current=r,Fe!==null)throw Error(L(261));return We=null,Ke=0,$e}function dy(){for(;Fe!==null;)sm(Fe)}function fy(){for(;Fe!==null&&!Fv();)sm(Fe)}function sm(e){var t=dm(e.alternate,e,mt);e.memoizedProps=e.pendingProps,t===null?um(e):Fe=t,nc.current=null}function um(e){var t=e;do{var n=t.alternate;if(e=t.return,t.flags&32768){if(n=oy(n,t),n!==null){n.flags&=32767,Fe=n;return}if(e!==null)e.flags|=32768,e.subtreeFlags=0,e.deletions=null;else{$e=6,Fe=null;return}}else if(n=iy(n,t,mt),n!==null){Fe=n;return}if(t=t.sibling,t!==null){Fe=t;return}Fe=t=e}while(t!==null);$e===0&&($e=5)}function Yn(e,t,n){var r=ge,i=Ot.transition;try{Ot.transition=null,ge=1,py(e,t,n,r)}finally{Ot.transition=i,ge=r}return null}function py(e,t,n,r){do Lr();while(Mn!==null);if(de&6)throw Error(L(327));n=e.finishedWork;var i=e.finishedLanes;if(n===null)return null;if(e.finishedWork=null,e.finishedLanes=0,n===e.current)throw Error(L(177));e.callbackNode=null,e.callbackPriority=0;var o=n.lanes|n.childLanes;if(Yv(e,o),e===We&&(Fe=We=null,Ke=0),!(n.subtreeFlags&2064)&&!(n.flags&2064)||So||(So=!0,fm(oa,function(){return Lr(),null})),o=(n.flags&15990)!==0,n.subtreeFlags&15990||o){o=Ot.transition,Ot.transition=null;var a=ge;ge=1;var s=de;de|=4,nc.current=null,ly(e,n),rm(n,e),R0(zs),la=!!As,zs=As=null,e.current=n,sy(n),Av(),de=s,ge=a,Ot.transition=o}else e.current=n;if(So&&(So=!1,Mn=e,ka=i),o=e.pendingLanes,o===0&&(Fn=null),Nv(n.stateNode),ft(e,Le()),t!==null)for(r=e.onRecoverableError,n=0;n<t.length;n++)i=t[n],r(i.value,{componentStack:i.stack,digest:i.digest});if(ba)throw ba=!1,e=ou,ou=null,e;return ka&1&&e.tag!==0&&Lr(),o=e.pendingLanes,o&1?e===au?ji++:(ji=0,au=e):ji=0,Hn(),null}function Lr(){if(Mn!==null){var e=Up(ka),t=Ot.transition,n=ge;try{if(Ot.transition=null,ge=16>e?16:e,Mn===null)var r=!1;else{if(e=Mn,Mn=null,ka=0,de&6)throw Error(L(331));var i=de;for(de|=4,H=e.current;H!==null;){var o=H,a=o.child;if(H.flags&16){var s=o.deletions;if(s!==null){for(var l=0;l<s.length;l++){var u=s[l];for(H=u;H!==null;){var p=H;switch(p.tag){case 0:case 11:case 15:ki(8,p,o)}var h=p.child;if(h!==null)h.return=p,H=h;else for(;H!==null;){p=H;var m=p.sibling,x=p.return;if(em(p),p===u){H=null;break}if(m!==null){m.return=x,H=m;break}H=x}}}var g=o.alternate;if(g!==null){var y=g.child;if(y!==null){g.child=null;do{var S=y.sibling;y.sibling=null,y=S}while(y!==null)}}H=o}}if(o.subtreeFlags&2064&&a!==null)a.return=o,H=a;else e:for(;H!==null;){if(o=H,o.flags&2048)switch(o.tag){case 0:case 11:case 15:ki(9,o,o.return)}var d=o.sibling;if(d!==null){d.return=o.return,H=d;break e}H=o.return}}var f=e.current;for(H=f;H!==null;){a=H;var v=a.child;if(a.subtreeFlags&2064&&v!==null)v.return=a,H=v;else e:for(a=f;H!==null;){if(s=H,s.flags&2048)try{switch(s.tag){case 0:case 11:case 15:Ga(9,s)}}catch(k){Te(s,s.return,k)}if(s===a){H=null;break e}var w=s.sibling;if(w!==null){w.return=s.return,H=w;break e}H=s.return}}if(de=i,Hn(),Zt&&typeof Zt.onPostCommitFiberRoot=="function")try{Zt.onPostCommitFiberRoot(Na,e)}catch{}r=!0}return r}finally{ge=n,Ot.transition=t}}return!1}function Hd(e,t,n){t=Nr(n,t),t=Wh(e,t,1),e=Vn(e,t,1),t=it(),e!==null&&(Xi(e,1,t),ft(e,t))}function Te(e,t,n){if(e.tag===3)Hd(e,e,n);else for(;t!==null;){if(t.tag===3){Hd(t,e,n);break}else if(t.tag===1){var r=t.stateNode;if(typeof t.type.getDerivedStateFromError=="function"||typeof r.componentDidCatch=="function"&&(Fn===null||!Fn.has(r))){e=Nr(n,e),e=Hh(t,e,1),t=Vn(t,e,1),e=it(),t!==null&&(Xi(t,1,e),ft(t,e));break}}t=t.return}}function hy(e,t,n){var r=e.pingCache;r!==null&&r.delete(t),t=it(),e.pingedLanes|=e.suspendedLanes&n,We===e&&(Ke&n)===n&&($e===4||$e===3&&(Ke&130023424)===Ke&&500>Le()-ic?Jn(e,0):rc|=n),ft(e,t)}function cm(e,t){t===0&&(e.mode&1?(t=co,co<<=1,!(co&130023424)&&(co=4194304)):t=1);var n=it();e=fn(e,t),e!==null&&(Xi(e,t,n),ft(e,n))}function my(e){var t=e.memoizedState,n=0;t!==null&&(n=t.retryLane),cm(e,n)}function gy(e,t){var n=0;switch(e.tag){case 13:var r=e.stateNode,i=e.memoizedState;i!==null&&(n=i.retryLane);break;case 19:r=e.stateNode;break;default:throw Error(L(314))}r!==null&&r.delete(t),cm(e,n)}var dm;dm=function(e,t,n){if(e!==null)if(e.memoizedProps!==t.pendingProps||ct.current)ut=!0;else{if(!(e.lanes&n)&&!(t.flags&128))return ut=!1,ry(e,t,n);ut=!!(e.flags&131072)}else ut=!1,_e&&t.flags&1048576&&hh(t,ha,t.index);switch(t.lanes=0,t.tag){case 2:var r=t.type;Ho(e,t),e=t.pendingProps;var i=Fr(t,tt.current);Rr(t,n),i=Zu(null,t,r,e,i,n);var o=qu();return t.flags|=1,typeof i=="object"&&i!==null&&typeof i.render=="function"&&i.$$typeof===void 0?(t.tag=1,t.memoizedState=null,t.updateQueue=null,dt(r)?(o=!0,fa(t)):o=!1,t.memoizedState=i.state!==null&&i.state!==void 0?i.state:null,Qu(t),i.updater=Ya,t.stateNode=i,i._reactInternals=t,Ks(t,r,e,n),t=Zs(null,t,r,!0,o,n)):(t.tag=0,_e&&o&&zu(t),nt(null,t,i,n),t=t.child),t;case 16:r=t.elementType;e:{switch(Ho(e,t),e=t.pendingProps,i=r._init,r=i(r._payload),t.type=r,i=t.tag=yy(r),e=Rt(r,e),i){case 0:t=Xs(null,t,r,e,n);break e;case 1:t=Ld(null,t,r,e,n);break e;case 11:t=Id(null,t,r,e,n);break e;case 14:t=Rd(null,t,r,Rt(r.type,e),n);break e}throw Error(L(306,r,""))}return t;case 0:return r=t.type,i=t.pendingProps,i=t.elementType===r?i:Rt(r,i),Xs(e,t,r,i,n);case 1:return r=t.type,i=t.pendingProps,i=t.elementType===r?i:Rt(r,i),Ld(e,t,r,i,n);case 3:e:{if(Kh(t),e===null)throw Error(L(387));r=t.pendingProps,o=t.memoizedState,i=o.element,yh(e,t),va(t,r,null,n);var a=t.memoizedState;if(r=a.element,o.isDehydrated)if(o={element:r,isDehydrated:!1,cache:a.cache,pendingSuspenseBoundaries:a.pendingSuspenseBoundaries,transitions:a.transitions},t.updateQueue.baseState=o,t.memoizedState=o,t.flags&256){i=Nr(Error(L(423)),t),t=Dd(e,t,r,n,i);break e}else if(r!==i){i=Nr(Error(L(424)),t),t=Dd(e,t,r,n,i);break e}else for(gt=Dn(t.stateNode.containerInfo.firstChild),vt=t,_e=!0,Ft=null,n=bh(t,null,r,n),t.child=n;n;)n.flags=n.flags&-3|4096,n=n.sibling;else{if(Ar(),r===i){t=pn(e,t,n);break e}nt(e,t,r,n)}t=t.child}return t;case 5:return kh(t),e===null&&Bs(t),r=t.type,i=t.pendingProps,o=e!==null?e.memoizedProps:null,a=i.children,$s(r,i)?a=null:o!==null&&$s(r,o)&&(t.flags|=32),Yh(e,t),nt(e,t,a,n),t.child;case 6:return e===null&&Bs(t),null;case 13:return Gh(e,t,n);case 4:return Yu(t,t.stateNode.containerInfo),r=t.pendingProps,e===null?t.child=zr(t,null,r,n):nt(e,t,r,n),t.child;case 11:return r=t.type,i=t.pendingProps,i=t.elementType===r?i:Rt(r,i),Id(e,t,r,i,n);case 7:return nt(e,t,t.pendingProps,n),t.child;case 8:return nt(e,t,t.pendingProps.children,n),t.child;case 12:return nt(e,t,t.pendingProps.children,n),t.child;case 10:e:{if(r=t.type._context,i=t.pendingProps,o=t.memoizedProps,a=i.value,ke(ma,r._currentValue),r._currentValue=a,o!==null)if(Ut(o.value,a)){if(o.children===i.children&&!ct.current){t=pn(e,t,n);break e}}else for(o=t.child,o!==null&&(o.return=t);o!==null;){var s=o.dependencies;if(s!==null){a=o.child;for(var l=s.firstContext;l!==null;){if(l.context===r){if(o.tag===1){l=sn(-1,n&-n),l.tag=2;var u=o.updateQueue;if(u!==null){u=u.shared;var p=u.pending;p===null?l.next=l:(l.next=p.next,p.next=l),u.pending=l}}o.lanes|=n,l=o.alternate,l!==null&&(l.lanes|=n),Qs(o.return,n,t),s.lanes|=n;break}l=l.next}}else if(o.tag===10)a=o.type===t.type?null:o.child;else if(o.tag===18){if(a=o.return,a===null)throw Error(L(341));a.lanes|=n,s=a.alternate,s!==null&&(s.lanes|=n),Qs(a,n,t),a=o.sibling}else a=o.child;if(a!==null)a.return=o;else for(a=o;a!==null;){if(a===t){a=null;break}if(o=a.sibling,o!==null){o.return=a.return,a=o;break}a=a.return}o=a}nt(e,t,i.children,n),t=t.child}return t;case 9:return i=t.type,r=t.pendingProps.children,Rr(t,n),i=Pt(i),r=r(i),t.flags|=1,nt(e,t,r,n),t.child;case 14:return r=t.type,i=Rt(r,t.pendingProps),i=Rt(r.type,i),Rd(e,t,r,i,n);case 15:return Bh(e,t,t.type,t.pendingProps,n);case 17:return r=t.type,i=t.pendingProps,i=t.elementType===r?i:Rt(r,i),Ho(e,t),t.tag=1,dt(r)?(e=!0,fa(t)):e=!1,Rr(t,n),wh(t,r,i),Ks(t,r,i,n),Zs(null,t,r,!0,e,n);case 19:return Xh(e,t,n);case 22:return Qh(e,t,n)}throw Error(L(156,t.tag))};function fm(e,t){return Ap(e,t)}function vy(e,t,n,r){this.tag=e,this.key=n,this.sibling=this.child=this.return=this.stateNode=this.type=this.elementType=null,this.index=0,this.ref=null,this.pendingProps=t,this.dependencies=this.memoizedState=this.updateQueue=this.memoizedProps=null,this.mode=r,this.subtreeFlags=this.flags=0,this.deletions=null,this.childLanes=this.lanes=0,this.alternate=null}function _t(e,t,n,r){return new vy(e,t,n,r)}function sc(e){return e=e.prototype,!(!e||!e.isReactComponent)}function yy(e){if(typeof e=="function")return sc(e)?1:0;if(e!=null){if(e=e.$$typeof,e===_u)return 11;if(e===Ou)return 14}return 2}function zn(e,t){var n=e.alternate;return n===null?(n=_t(e.tag,t,e.key,e.mode),n.elementType=e.elementType,n.type=e.type,n.stateNode=e.stateNode,n.alternate=e,e.alternate=n):(n.pendingProps=t,n.type=e.type,n.flags=0,n.subtreeFlags=0,n.deletions=null),n.flags=e.flags&14680064,n.childLanes=e.childLanes,n.lanes=e.lanes,n.child=e.child,n.memoizedProps=e.memoizedProps,n.memoizedState=e.memoizedState,n.updateQueue=e.updateQueue,t=e.dependencies,n.dependencies=t===null?null:{lanes:t.lanes,firstContext:t.firstContext},n.sibling=e.sibling,n.index=e.index,n.ref=e.ref,n}function Yo(e,t,n,r,i,o){var a=2;if(r=e,typeof e=="function")sc(e)&&(a=1);else if(typeof e=="string")a=5;else e:switch(e){case vr:return er(n.children,i,o,t);case Eu:a=8,i|=8;break;case ys:return e=_t(12,n,t,i|2),e.elementType=ys,e.lanes=o,e;case xs:return e=_t(13,n,t,i),e.elementType=xs,e.lanes=o,e;case ws:return e=_t(19,n,t,i),e.elementType=ws,e.lanes=o,e;case Sp:return Za(n,i,o,t);default:if(typeof e=="object"&&e!==null)switch(e.$$typeof){case xp:a=10;break e;case wp:a=9;break e;case _u:a=11;break e;case Ou:a=14;break e;case jn:a=16,r=null;break e}throw Error(L(130,e==null?e:typeof e,""))}return t=_t(a,n,t,i),t.elementType=e,t.type=r,t.lanes=o,t}function er(e,t,n,r){return e=_t(7,e,r,t),e.lanes=n,e}function Za(e,t,n,r){return e=_t(22,e,r,t),e.elementType=Sp,e.lanes=n,e.stateNode={isHidden:!1},e}function Hl(e,t,n){return e=_t(6,e,null,t),e.lanes=n,e}function Bl(e,t,n){return t=_t(4,e.children!==null?e.children:[],e.key,t),t.lanes=n,t.stateNode={containerInfo:e.containerInfo,pendingChildren:null,implementation:e.implementation},t}function xy(e,t,n,r,i){this.tag=t,this.containerInfo=e,this.finishedWork=this.pingCache=this.current=this.pendingChildren=null,this.timeoutHandle=-1,this.callbackNode=this.pendingContext=this.context=null,this.callbackPriority=0,this.eventTimes=jl(0),this.expirationTimes=jl(-1),this.entangledLanes=this.finishedLanes=this.mutableReadLanes=this.expiredLanes=this.pingedLanes=this.suspendedLanes=this.pendingLanes=0,this.entanglements=jl(0),this.identifierPrefix=r,this.onRecoverableError=i,this.mutableSourceEagerHydrationData=null}function uc(e,t,n,r,i,o,a,s,l){return e=new xy(e,t,n,s,l),t===1?(t=1,o===!0&&(t|=8)):t=0,o=_t(3,null,null,t),e.current=o,o.stateNode=e,o.memoizedState={element:r,isDehydrated:n,cache:null,transitions:null,pendingSuspenseBoundaries:null},Qu(o),e}function wy(e,t,n){var r=3<arguments.length&&arguments[3]!==void 0?arguments[3]:null;return{$$typeof:gr,key:r==null?null:""+r,children:e,containerInfo:t,implementation:n}}function pm(e){if(!e)return Nn;e=e._reactInternals;e:{if(sr(e)!==e||e.tag!==1)throw Error(L(170));var t=e;do{switch(t.tag){case 3:t=t.stateNode.context;break e;case 1:if(dt(t.type)){t=t.stateNode.__reactInternalMemoizedMergedChildContext;break e}}t=t.return}while(t!==null);throw Error(L(171))}if(e.tag===1){var n=e.type;if(dt(n))return fh(e,n,t)}return t}function hm(e,t,n,r,i,o,a,s,l){return e=uc(n,r,!0,e,i,o,a,s,l),e.context=pm(null),n=e.current,r=it(),i=An(n),o=sn(r,i),o.callback=t??null,Vn(n,o,i),e.current.lanes=i,Xi(e,i,r),ft(e,r),e}function qa(e,t,n,r){var i=t.current,o=it(),a=An(i);return n=pm(n),t.context===null?t.context=n:t.pendingContext=n,t=sn(o,a),t.payload={element:e},r=r===void 0?null:r,r!==null&&(t.callback=r),e=Vn(i,t,a),e!==null&&($t(e,i,a,o),No(e,i,a)),a}function ja(e){if(e=e.current,!e.child)return null;switch(e.child.tag){case 5:return e.child.stateNode;default:return e.child.stateNode}}function Bd(e,t){if(e=e.memoizedState,e!==null&&e.dehydrated!==null){var n=e.retryLane;e.retryLane=n!==0&&n<t?n:t}}function cc(e,t){Bd(e,t),(e=e.alternate)&&Bd(e,t)}function Sy(){return null}var mm=typeof reportError=="function"?reportError:function(e){console.error(e)};function dc(e){this._internalRoot=e}Ja.prototype.render=dc.prototype.render=function(e){var t=this._internalRoot;if(t===null)throw Error(L(409));qa(e,t,null,null)};Ja.prototype.unmount=dc.prototype.unmount=function(){var e=this._internalRoot;if(e!==null){this._internalRoot=null;var t=e.containerInfo;or(function(){qa(null,e,null,null)}),t[dn]=null}};function Ja(e){this._internalRoot=e}Ja.prototype.unstable_scheduleHydration=function(e){if(e){var t=Bp();e={blockedOn:null,target:e,priority:t};for(var n=0;n<_n.length&&t!==0&&t<_n[n].priority;n++);_n.splice(n,0,e),n===0&&Yp(e)}};function fc(e){return!(!e||e.nodeType!==1&&e.nodeType!==9&&e.nodeType!==11)}function el(e){return!(!e||e.nodeType!==1&&e.nodeType!==9&&e.nodeType!==11&&(e.nodeType!==8||e.nodeValue!==" react-mount-point-unstable "))}function Qd(){}function by(e,t,n,r,i){if(i){if(typeof r=="function"){var o=r;r=function(){var u=ja(a);o.call(u)}}var a=hm(t,r,e,0,null,!1,!1,"",Qd);return e._reactRootContainer=a,e[dn]=a.current,Di(e.nodeType===8?e.parentNode:e),or(),a}for(;i=e.lastChild;)e.removeChild(i);if(typeof r=="function"){var s=r;r=function(){var u=ja(l);s.call(u)}}var l=uc(e,0,!1,null,null,!1,!1,"",Qd);return e._reactRootContainer=l,e[dn]=l.current,Di(e.nodeType===8?e.parentNode:e),or(function(){qa(t,l,n,r)}),l}function tl(e,t,n,r,i){var o=n._reactRootContainer;if(o){var a=o;if(typeof i=="function"){var s=i;i=function(){var l=ja(a);s.call(l)}}qa(t,a,e,i)}else a=by(n,t,e,i,r);return ja(a)}Wp=function(e){switch(e.tag){case 3:var t=e.stateNode;if(t.current.memoizedState.isDehydrated){var n=pi(t.pendingLanes);n!==0&&(Tu(t,n|1),ft(t,Le()),!(de&6)&&(Ur=Le()+500,Hn()))}break;case 13:or(function(){var r=fn(e,1);if(r!==null){var i=it();$t(r,e,1,i)}}),cc(e,1)}};Iu=function(e){if(e.tag===13){var t=fn(e,134217728);if(t!==null){var n=it();$t(t,e,134217728,n)}cc(e,134217728)}};Hp=function(e){if(e.tag===13){var t=An(e),n=fn(e,t);if(n!==null){var r=it();$t(n,e,t,r)}cc(e,t)}};Bp=function(){return ge};Qp=function(e,t){var n=ge;try{return ge=e,t()}finally{ge=n}};Ms=function(e,t,n){switch(t){case"input":if(ks(e,n),t=n.name,n.type==="radio"&&t!=null){for(n=e;n.parentNode;)n=n.parentNode;for(n=n.querySelectorAll("input[name="+JSON.stringify(""+t)+'][type="radio"]'),t=0;t<n.length;t++){var r=n[t];if(r!==e&&r.form===e.form){var i=Ba(r);if(!i)throw Error(L(90));kp(r),ks(r,i)}}}break;case"textarea":jp(e,n);break;case"select":t=n.value,t!=null&&Pr(e,!!n.multiple,t,!1)}};Ip=oc;Rp=or;var ky={usingClientEntryPoint:!1,Events:[qi,Sr,Ba,Mp,Tp,oc]},ni={findFiberByHostInstance:Kn,bundleType:0,version:"18.2.0",rendererPackageName:"react-dom"},Cy={bundleType:ni.bundleType,version:ni.version,rendererPackageName:ni.rendererPackageName,rendererConfig:ni.rendererConfig,overrideHookState:null,overrideHookStateDeletePath:null,overrideHookStateRenamePath:null,overrideProps:null,overridePropsDeletePath:null,overridePropsRenamePath:null,setErrorHandler:null,setSuspenseHandler:null,scheduleUpdate:null,currentDispatcherRef:hn.ReactCurrentDispatcher,findHostInstanceByFiber:function(e){return e=Vp(e),e===null?null:e.stateNode},findFiberByHostInstance:ni.findFiberByHostInstance||Sy,findHostInstancesForRefresh:null,scheduleRefresh:null,scheduleRoot:null,setRefreshHandler:null,getCurrentFiber:null,reconcilerVersion:"18.2.0-next-9e3b772b8-20220608"};if(typeof __REACT_DEVTOOLS_GLOBAL_HOOK__<"u"){var bo=__REACT_DEVTOOLS_GLOBAL_HOOK__;if(!bo.isDisabled&&bo.supportsFiber)try{Na=bo.inject(Cy),Zt=bo}catch{}}St.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED=ky;St.createPortal=function(e,t){var n=2<arguments.length&&arguments[2]!==void 0?arguments[2]:null;if(!fc(t))throw Error(L(200));return wy(e,t,null,n)};St.createRoot=function(e,t){if(!fc(e))throw Error(L(299));var n=!1,r="",i=mm;return t!=null&&(t.unstable_strictMode===!0&&(n=!0),t.identifierPrefix!==void 0&&(r=t.identifierPrefix),t.onRecoverableError!==void 0&&(i=t.onRecoverableError)),t=uc(e,1,!1,null,null,n,!1,r,i),e[dn]=t.current,Di(e.nodeType===8?e.parentNode:e),new dc(t)};St.findDOMNode=function(e){if(e==null)return null;if(e.nodeType===1)return e;var t=e._reactInternals;if(t===void 0)throw typeof e.render=="function"?Error(L(188)):(e=Object.keys(e).join(","),Error(L(268,e)));return e=Vp(t),e=e===null?null:e.stateNode,e};St.flushSync=function(e){return or(e)};St.hydrate=function(e,t,n){if(!el(t))throw Error(L(200));return tl(null,e,t,!0,n)};St.hydrateRoot=function(e,t,n){if(!fc(e))throw Error(L(405));var r=n!=null&&n.hydratedSources||null,i=!1,o="",a=mm;if(n!=null&&(n.unstable_strictMode===!0&&(i=!0),n.identifierPrefix!==void 0&&(o=n.identifierPrefix),n.onRecoverableError!==void 0&&(a=n.onRecoverableError)),t=hm(t,null,e,1,n??null,i,!1,o,a),e[dn]=t.current,Di(e),r)for(e=0;e<r.length;e++)n=r[e],i=n._getVersion,i=i(n._source),t.mutableSourceEagerHydrationData==null?t.mutableSourceEagerHydrationData=[n,i]:t.mutableSourceEagerHydrationData.push(n,i);return new Ja(t)};St.render=function(e,t,n){if(!el(t))throw Error(L(200));return tl(null,e,t,!1,n)};St.unmountComponentAtNode=function(e){if(!el(e))throw Error(L(40));return e._reactRootContainer?(or(function(){tl(null,null,e,!1,function(){e._reactRootContainer=null,e[dn]=null})}),!0):!1};St.unstable_batchedUpdates=oc;St.unstable_renderSubtreeIntoContainer=function(e,t,n,r){if(!el(n))throw Error(L(200));if(e==null||e._reactInternals===void 0)throw Error(L(38));return tl(e,t,n,!1,r)};St.version="18.2.0-next-9e3b772b8-20220608";function gm(){if(!(typeof __REACT_DEVTOOLS_GLOBAL_HOOK__>"u"||typeof __REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE!="function"))try{__REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE(gm)}catch(e){console.error(e)}}gm(),hp.exports=St;var eo=hp.exports;const jy=Ki(eo);var Yd=eo;gs.createRoot=Yd.createRoot,gs.hydrateRoot=Yd.hydrateRoot;var vm={exports:{}};(function(e,t){(function(r,i){e.exports=i(T)})(ev,n=>(()=>{var r={"./node_modules/css-mediaquery/index.js":(s,l)=>{l.match=g,l.parse=y;var u=/(?:(only|not)?\s*([^\s\(\)]+)(?:\s*and)?\s*)?(.+)?/i,p=/\(\s*([^\s\:\)]+)\s*(?:\:\s*([^\s\)]+))?\s*\)/,h=/^(?:(min|max)-)?(.+)/,m=/(em|rem|px|cm|mm|in|pt|pc)?$/,x=/(dpi|dpcm|dppx)?$/;function g(v,w){return y(v).some(function(k){var O=k.inverse,j=k.type==="all"||w.type===k.type;if(j&&O||!(j||O))return!1;var P=k.expressions.every(function(M){var I=M.feature,U=M.modifier,D=M.value,R=w[I];if(!R)return!1;switch(I){case"orientation":case"scan":return R.toLowerCase()===D.toLowerCase();case"width":case"height":case"device-width":case"device-height":D=f(D),R=f(R);break;case"resolution":D=d(D),R=d(R);break;case"aspect-ratio":case"device-aspect-ratio":case"device-pixel-ratio":D=S(D),R=S(R);break;case"grid":case"color":case"color-index":case"monochrome":D=parseInt(D,10)||1,R=parseInt(R,10)||0;break}switch(U){case"min":return R>=D;case"max":return R<=D;default:return R===D}});return P&&!O||!P&&O})}function y(v){return v.split(",").map(function(w){w=w.trim();var k=w.match(u),O=k[1],j=k[2],P=k[3]||"",M={};return M.inverse=!!O&&O.toLowerCase()==="not",M.type=j?j.toLowerCase():"all",P=P.match(/\([^\)]+\)/g)||[],M.expressions=P.map(function(I){var U=I.match(p),D=U[1].toLowerCase().match(h);return{modifier:D[1],feature:D[2],value:U[2]}}),M})}function S(v){var w=Number(v),k;return w||(k=v.match(/^(\d+)\s*\/\s*(\d+)$/),w=k[1]/k[2]),w}function d(v){var w=parseFloat(v),k=String(v).match(x)[1];switch(k){case"dpcm":return w/2.54;case"dppx":return w*96;default:return w}}function f(v){var w=parseFloat(v),k=String(v).match(m)[1];switch(k){case"em":return w*16;case"rem":return w*16;case"cm":return w*96/2.54;case"mm":return w*96/2.54/10;case"in":return w*96;case"pt":return w*72;case"pc":return w*72/12;default:return w}}},"./node_modules/hyphenate-style-name/index.js":(s,l,u)=>{u.r(l),u.d(l,{default:()=>y});var p=/[A-Z]/g,h=/^ms-/,m={};function x(S){return"-"+S.toLowerCase()}function g(S){if(m.hasOwnProperty(S))return m[S];var d=S.replace(p,x);return m[S]=h.test(d)?"-"+d:d}const y=g},"./node_modules/matchmediaquery/index.js":(s,l,u)=>{var p=u("./node_modules/css-mediaquery/index.js").match,h=typeof window<"u"?window.matchMedia:null;function m(g,y,S){var d=this;if(h&&!S){var f=h.call(window,g);this.matches=f.matches,this.media=f.media,f.addListener(k)}else this.matches=p(g,y),this.media=g;this.addListener=v,this.removeListener=w,this.dispose=O;function v(j){f&&f.addListener(j)}function w(j){f&&f.removeListener(j)}function k(j){d.matches=j.matches,d.media=j.media}function O(){f&&f.removeListener(k)}}function x(g,y,S){return new m(g,y,S)}s.exports=x},"./node_modules/object-assign/index.js":s=>{/*
object-assign
(c) Sindre Sorhus
@license MIT
*/var l=Object.getOwnPropertySymbols,u=Object.prototype.hasOwnProperty,p=Object.prototype.propertyIsEnumerable;function h(x){if(x==null)throw new TypeError("Object.assign cannot be called with null or undefined");return Object(x)}function m(){try{if(!Object.assign)return!1;var x=new String("abc");if(x[5]="de",Object.getOwnPropertyNames(x)[0]==="5")return!1;for(var g={},y=0;y<10;y++)g["_"+String.fromCharCode(y)]=y;var S=Object.getOwnPropertyNames(g).map(function(f){return g[f]});if(S.join("")!=="0123456789")return!1;var d={};return"abcdefghijklmnopqrst".split("").forEach(function(f){d[f]=f}),Object.keys(Object.assign({},d)).join("")==="abcdefghijklmnopqrst"}catch{return!1}}s.exports=m()?Object.assign:function(x,g){for(var y,S=h(x),d,f=1;f<arguments.length;f++){y=Object(arguments[f]);for(var v in y)u.call(y,v)&&(S[v]=y[v]);if(l){d=l(y);for(var w=0;w<d.length;w++)p.call(y,d[w])&&(S[d[w]]=y[d[w]])}}return S}},"./node_modules/prop-types/checkPropTypes.js":(s,l,u)=>{var p=function(){};{var h=u("./node_modules/prop-types/lib/ReactPropTypesSecret.js"),m={},x=u("./node_modules/prop-types/lib/has.js");p=function(y){var S="Warning: "+y;typeof console<"u"&&console.error(S);try{throw new Error(S)}catch{}}}function g(y,S,d,f,v){for(var w in y)if(x(y,w)){var k;try{if(typeof y[w]!="function"){var O=Error((f||"React class")+": "+d+" type `"+w+"` is invalid; it must be a function, usually from the `prop-types` package, but received `"+typeof y[w]+"`.This often happens because of typos such as `PropTypes.function` instead of `PropTypes.func`.");throw O.name="Invariant Violation",O}k=y[w](S,w,f,d,null,h)}catch(P){k=P}if(k&&!(k instanceof Error)&&p((f||"React class")+": type specification of "+d+" `"+w+"` is invalid; the type checker function must return `null` or an `Error` but returned a "+typeof k+". You may have forgotten to pass an argument to the type checker creator (arrayOf, instanceOf, objectOf, oneOf, oneOfType, and shape all require an argument)."),k instanceof Error&&!(k.message in m)){m[k.message]=!0;var j=v?v():"";p("Failed "+d+" type: "+k.message+(j??""))}}}g.resetWarningCache=function(){m={}},s.exports=g},"./node_modules/prop-types/factoryWithTypeCheckers.js":(s,l,u)=>{var p=u("./node_modules/react-is/index.js"),h=u("./node_modules/object-assign/index.js"),m=u("./node_modules/prop-types/lib/ReactPropTypesSecret.js"),x=u("./node_modules/prop-types/lib/has.js"),g=u("./node_modules/prop-types/checkPropTypes.js"),y=function(){};y=function(d){var f="Warning: "+d;typeof console<"u"&&console.error(f);try{throw new Error(f)}catch{}};function S(){return null}s.exports=function(d,f){var v=typeof Symbol=="function"&&Symbol.iterator,w="@@iterator";function k(V){var W=V&&(v&&V[v]||V[w]);if(typeof W=="function")return W}var O="<<anonymous>>",j={array:U("array"),bigint:U("bigint"),bool:U("boolean"),func:U("function"),number:U("number"),object:U("object"),string:U("string"),symbol:U("symbol"),any:D(),arrayOf:R,element:G(),elementType:q(),instanceOf:J,node:Q(),objectOf:F,oneOf:me,oneOfType:B,shape:te,exact:Ce};function P(V,W){return V===W?V!==0||1/V===1/W:V!==V&&W!==W}function M(V,W){this.message=V,this.data=W&&typeof W=="object"?W:{},this.stack=""}M.prototype=Error.prototype;function I(V){var W={},re=0;function ie(ae,oe,le,ce,b,_,C){if(ce=ce||O,_=_||le,C!==m){if(f){var $=new Error("Calling PropTypes validators directly is not supported by the `prop-types` package. Use `PropTypes.checkPropTypes()` to call them. Read more at http://fb.me/use-check-prop-types");throw $.name="Invariant Violation",$}else if(typeof console<"u"){var z=ce+":"+le;!W[z]&&re<3&&(y("You are manually calling a React.PropTypes validation function for the `"+_+"` prop on `"+ce+"`. This is deprecated and will throw in the standalone `prop-types` package. You may be seeing this warning due to a third-party PropTypes library. See https://fb.me/react-warning-dont-call-proptypes for details."),W[z]=!0,re++)}}return oe[le]==null?ae?oe[le]===null?new M("The "+b+" `"+_+"` is marked as required "+("in `"+ce+"`, but its value is `null`.")):new M("The "+b+" `"+_+"` is marked as required in "+("`"+ce+"`, but its value is `undefined`.")):null:V(oe,le,ce,b,_)}var ee=ie.bind(null,!1);return ee.isRequired=ie.bind(null,!0),ee}function U(V){function W(re,ie,ee,ae,oe,le){var ce=re[ie],b=fe(ce);if(b!==V){var _=xe(ce);return new M("Invalid "+ae+" `"+oe+"` of type "+("`"+_+"` supplied to `"+ee+"`, expected ")+("`"+V+"`."),{expectedType:V})}return null}return I(W)}function D(){return I(S)}function R(V){function W(re,ie,ee,ae,oe){if(typeof V!="function")return new M("Property `"+oe+"` of component `"+ee+"` has invalid PropType notation inside arrayOf.");var le=re[ie];if(!Array.isArray(le)){var ce=fe(le);return new M("Invalid "+ae+" `"+oe+"` of type "+("`"+ce+"` supplied to `"+ee+"`, expected an array."))}for(var b=0;b<le.length;b++){var _=V(le,b,ee,ae,oe+"["+b+"]",m);if(_ instanceof Error)return _}return null}return I(W)}function G(){function V(W,re,ie,ee,ae){var oe=W[re];if(!d(oe)){var le=fe(oe);return new M("Invalid "+ee+" `"+ae+"` of type "+("`"+le+"` supplied to `"+ie+"`, expected a single ReactElement."))}return null}return I(V)}function q(){function V(W,re,ie,ee,ae){var oe=W[re];if(!p.isValidElementType(oe)){var le=fe(oe);return new M("Invalid "+ee+" `"+ae+"` of type "+("`"+le+"` supplied to `"+ie+"`, expected a single ReactElement type."))}return null}return I(V)}function J(V){function W(re,ie,ee,ae,oe){if(!(re[ie]instanceof V)){var le=V.name||O,ce=ht(re[ie]);return new M("Invalid "+ae+" `"+oe+"` of type "+("`"+ce+"` supplied to `"+ee+"`, expected ")+("instance of `"+le+"`."))}return null}return I(W)}function me(V){if(!Array.isArray(V))return arguments.length>1?y("Invalid arguments supplied to oneOf, expected an array, got "+arguments.length+" arguments. A common mistake is to write oneOf(x, y, z) instead of oneOf([x, y, z])."):y("Invalid argument supplied to oneOf, expected an array."),S;function W(re,ie,ee,ae,oe){for(var le=re[ie],ce=0;ce<V.length;ce++)if(P(le,V[ce]))return null;var b=JSON.stringify(V,function(C,$){var z=xe($);return z==="symbol"?String($):$});return new M("Invalid "+ae+" `"+oe+"` of value `"+String(le)+"` "+("supplied to `"+ee+"`, expected one of "+b+"."))}return I(W)}function F(V){function W(re,ie,ee,ae,oe){if(typeof V!="function")return new M("Property `"+oe+"` of component `"+ee+"` has invalid PropType notation inside objectOf.");var le=re[ie],ce=fe(le);if(ce!=="object")return new M("Invalid "+ae+" `"+oe+"` of type "+("`"+ce+"` supplied to `"+ee+"`, expected an object."));for(var b in le)if(x(le,b)){var _=V(le,b,ee,ae,oe+"."+b,m);if(_ instanceof Error)return _}return null}return I(W)}function B(V){if(!Array.isArray(V))return y("Invalid argument supplied to oneOfType, expected an instance of array."),S;for(var W=0;W<V.length;W++){var re=V[W];if(typeof re!="function")return y("Invalid argument supplied to oneOfType. Expected an array of check functions, but received "+Xe(re)+" at index "+W+"."),S}function ie(ee,ae,oe,le,ce){for(var b=[],_=0;_<V.length;_++){var C=V[_],$=C(ee,ae,oe,le,ce,m);if($==null)return null;$.data&&x($.data,"expectedType")&&b.push($.data.expectedType)}var z=b.length>0?", expected one of type ["+b.join(", ")+"]":"";return new M("Invalid "+le+" `"+ce+"` supplied to "+("`"+oe+"`"+z+"."))}return I(ie)}function Q(){function V(W,re,ie,ee,ae){return ye(W[re])?null:new M("Invalid "+ee+" `"+ae+"` supplied to "+("`"+ie+"`, expected a ReactNode."))}return I(V)}function ue(V,W,re,ie,ee){return new M((V||"React class")+": "+W+" type `"+re+"."+ie+"` is invalid; it must be a function, usually from the `prop-types` package, but received `"+ee+"`.")}function te(V){function W(re,ie,ee,ae,oe){var le=re[ie],ce=fe(le);if(ce!=="object")return new M("Invalid "+ae+" `"+oe+"` of type `"+ce+"` "+("supplied to `"+ee+"`, expected `object`."));for(var b in V){var _=V[b];if(typeof _!="function")return ue(ee,ae,oe,b,xe(_));var C=_(le,b,ee,ae,oe+"."+b,m);if(C)return C}return null}return I(W)}function Ce(V){function W(re,ie,ee,ae,oe){var le=re[ie],ce=fe(le);if(ce!=="object")return new M("Invalid "+ae+" `"+oe+"` of type `"+ce+"` "+("supplied to `"+ee+"`, expected `object`."));var b=h({},re[ie],V);for(var _ in b){var C=V[_];if(x(V,_)&&typeof C!="function")return ue(ee,ae,oe,_,xe(C));if(!C)return new M("Invalid "+ae+" `"+oe+"` key `"+_+"` supplied to `"+ee+"`.\nBad object: "+JSON.stringify(re[ie],null,"  ")+`
Valid keys: `+JSON.stringify(Object.keys(V),null,"  "));var $=C(le,_,ee,ae,oe+"."+_,m);if($)return $}return null}return I(W)}function ye(V){switch(typeof V){case"number":case"string":case"undefined":return!0;case"boolean":return!V;case"object":if(Array.isArray(V))return V.every(ye);if(V===null||d(V))return!0;var W=k(V);if(W){var re=W.call(V),ie;if(W!==V.entries){for(;!(ie=re.next()).done;)if(!ye(ie.value))return!1}else for(;!(ie=re.next()).done;){var ee=ie.value;if(ee&&!ye(ee[1]))return!1}}else return!1;return!0;default:return!1}}function Ae(V,W){return V==="symbol"?!0:W?W["@@toStringTag"]==="Symbol"||typeof Symbol=="function"&&W instanceof Symbol:!1}function fe(V){var W=typeof V;return Array.isArray(V)?"array":V instanceof RegExp?"object":Ae(W,V)?"symbol":W}function xe(V){if(typeof V>"u"||V===null)return""+V;var W=fe(V);if(W==="object"){if(V instanceof Date)return"date";if(V instanceof RegExp)return"regexp"}return W}function Xe(V){var W=xe(V);switch(W){case"array":case"object":return"an "+W;case"boolean":case"date":case"regexp":return"a "+W;default:return W}}function ht(V){return!V.constructor||!V.constructor.name?O:V.constructor.name}return j.checkPropTypes=g,j.resetWarningCache=g.resetWarningCache,j.PropTypes=j,j}},"./node_modules/prop-types/index.js":(s,l,u)=>{{var p=u("./node_modules/react-is/index.js"),h=!0;s.exports=u("./node_modules/prop-types/factoryWithTypeCheckers.js")(p.isElement,h)}},"./node_modules/prop-types/lib/ReactPropTypesSecret.js":s=>{var l="SECRET_DO_NOT_PASS_THIS_OR_YOU_WILL_BE_FIRED";s.exports=l},"./node_modules/prop-types/lib/has.js":s=>{s.exports=Function.call.bind(Object.prototype.hasOwnProperty)},"./node_modules/react-is/cjs/react-is.development.js":(s,l)=>{/** @license React v16.13.1
 * react-is.development.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */(function(){var u=typeof Symbol=="function"&&Symbol.for,p=u?Symbol.for("react.element"):60103,h=u?Symbol.for("react.portal"):60106,m=u?Symbol.for("react.fragment"):60107,x=u?Symbol.for("react.strict_mode"):60108,g=u?Symbol.for("react.profiler"):60114,y=u?Symbol.for("react.provider"):60109,S=u?Symbol.for("react.context"):60110,d=u?Symbol.for("react.async_mode"):60111,f=u?Symbol.for("react.concurrent_mode"):60111,v=u?Symbol.for("react.forward_ref"):60112,w=u?Symbol.for("react.suspense"):60113,k=u?Symbol.for("react.suspense_list"):60120,O=u?Symbol.for("react.memo"):60115,j=u?Symbol.for("react.lazy"):60116,P=u?Symbol.for("react.block"):60121,M=u?Symbol.for("react.fundamental"):60117,I=u?Symbol.for("react.responder"):60118,U=u?Symbol.for("react.scope"):60119;function D(C){return typeof C=="string"||typeof C=="function"||C===m||C===f||C===g||C===x||C===w||C===k||typeof C=="object"&&C!==null&&(C.$$typeof===j||C.$$typeof===O||C.$$typeof===y||C.$$typeof===S||C.$$typeof===v||C.$$typeof===M||C.$$typeof===I||C.$$typeof===U||C.$$typeof===P)}function R(C){if(typeof C=="object"&&C!==null){var $=C.$$typeof;switch($){case p:var z=C.type;switch(z){case d:case f:case m:case g:case x:case w:return z;default:var A=z&&z.$$typeof;switch(A){case S:case v:case j:case O:case y:return A;default:return $}}case h:return $}}}var G=d,q=f,J=S,me=y,F=p,B=v,Q=m,ue=j,te=O,Ce=h,ye=g,Ae=x,fe=w,xe=!1;function Xe(C){return xe||(xe=!0,console.warn("The ReactIs.isAsyncMode() alias has been deprecated, and will be removed in React 17+. Update your code to use ReactIs.isConcurrentMode() instead. It has the exact same API.")),ht(C)||R(C)===d}function ht(C){return R(C)===f}function V(C){return R(C)===S}function W(C){return R(C)===y}function re(C){return typeof C=="object"&&C!==null&&C.$$typeof===p}function ie(C){return R(C)===v}function ee(C){return R(C)===m}function ae(C){return R(C)===j}function oe(C){return R(C)===O}function le(C){return R(C)===h}function ce(C){return R(C)===g}function b(C){return R(C)===x}function _(C){return R(C)===w}l.AsyncMode=G,l.ConcurrentMode=q,l.ContextConsumer=J,l.ContextProvider=me,l.Element=F,l.ForwardRef=B,l.Fragment=Q,l.Lazy=ue,l.Memo=te,l.Portal=Ce,l.Profiler=ye,l.StrictMode=Ae,l.Suspense=fe,l.isAsyncMode=Xe,l.isConcurrentMode=ht,l.isContextConsumer=V,l.isContextProvider=W,l.isElement=re,l.isForwardRef=ie,l.isFragment=ee,l.isLazy=ae,l.isMemo=oe,l.isPortal=le,l.isProfiler=ce,l.isStrictMode=b,l.isSuspense=_,l.isValidElementType=D,l.typeOf=R})()},"./node_modules/react-is/index.js":(s,l,u)=>{s.exports=u("./node_modules/react-is/cjs/react-is.development.js")},"./node_modules/shallow-equal/dist/index.esm.js":(s,l,u)=>{u.r(l),u.d(l,{shallowEqualArrays:()=>h,shallowEqualObjects:()=>p});function p(m,x){if(m===x)return!0;if(!m||!x)return!1;var g=Object.keys(m),y=Object.keys(x),S=g.length;if(y.length!==S)return!1;for(var d=0;d<S;d++){var f=g[d];if(m[f]!==x[f]||!Object.prototype.hasOwnProperty.call(x,f))return!1}return!0}function h(m,x){if(m===x)return!0;if(!m||!x)return!1;var g=m.length;if(x.length!==g)return!1;for(var y=0;y<g;y++)if(m[y]!==x[y])return!1;return!0}},"./src/Component.ts":function(s,l,u){var p=this&&this.__rest||function(g,y){var S={};for(var d in g)Object.prototype.hasOwnProperty.call(g,d)&&y.indexOf(d)<0&&(S[d]=g[d]);if(g!=null&&typeof Object.getOwnPropertySymbols=="function")for(var f=0,d=Object.getOwnPropertySymbols(g);f<d.length;f++)y.indexOf(d[f])<0&&Object.prototype.propertyIsEnumerable.call(g,d[f])&&(S[d[f]]=g[d[f]]);return S},h=this&&this.__importDefault||function(g){return g&&g.__esModule?g:{default:g}};Object.defineProperty(l,"__esModule",{value:!0});var m=h(u("./src/useMediaQuery.ts")),x=function(g){var y=g.children,S=g.device,d=g.onChange,f=p(g,["children","device","onChange"]),v=(0,m.default)(f,S,d);return typeof y=="function"?y(v):v?y:null};l.default=x},"./src/Context.ts":(s,l,u)=>{Object.defineProperty(l,"__esModule",{value:!0});var p=u("react"),h=(0,p.createContext)(void 0);l.default=h},"./src/index.ts":function(s,l,u){var p=this&&this.__importDefault||function(y){return y&&y.__esModule?y:{default:y}};Object.defineProperty(l,"__esModule",{value:!0}),l.Context=l.toQuery=l.useMediaQuery=l.default=void 0;var h=p(u("./src/useMediaQuery.ts"));l.useMediaQuery=h.default;var m=p(u("./src/Component.ts"));l.default=m.default;var x=p(u("./src/toQuery.ts"));l.toQuery=x.default;var g=p(u("./src/Context.ts"));l.Context=g.default},"./src/mediaQuery.ts":function(s,l,u){var p=this&&this.__assign||function(){return p=Object.assign||function(w){for(var k,O=1,j=arguments.length;O<j;O++){k=arguments[O];for(var P in k)Object.prototype.hasOwnProperty.call(k,P)&&(w[P]=k[P])}return w},p.apply(this,arguments)},h=this&&this.__rest||function(w,k){var O={};for(var j in w)Object.prototype.hasOwnProperty.call(w,j)&&k.indexOf(j)<0&&(O[j]=w[j]);if(w!=null&&typeof Object.getOwnPropertySymbols=="function")for(var P=0,j=Object.getOwnPropertySymbols(w);P<j.length;P++)k.indexOf(j[P])<0&&Object.prototype.propertyIsEnumerable.call(w,j[P])&&(O[j[P]]=w[j[P]]);return O},m=this&&this.__importDefault||function(w){return w&&w.__esModule?w:{default:w}};Object.defineProperty(l,"__esModule",{value:!0});var x=m(u("./node_modules/prop-types/index.js")),g=x.default.oneOfType([x.default.string,x.default.number]),y={all:x.default.bool,grid:x.default.bool,aural:x.default.bool,braille:x.default.bool,handheld:x.default.bool,print:x.default.bool,projection:x.default.bool,screen:x.default.bool,tty:x.default.bool,tv:x.default.bool,embossed:x.default.bool},S={orientation:x.default.oneOf(["portrait","landscape"]),scan:x.default.oneOf(["progressive","interlace"]),aspectRatio:x.default.string,deviceAspectRatio:x.default.string,height:g,deviceHeight:g,width:g,deviceWidth:g,color:x.default.bool,colorIndex:x.default.bool,monochrome:x.default.bool,resolution:g,type:Object.keys(y)};S.type;var d=h(S,["type"]),f=p({minAspectRatio:x.default.string,maxAspectRatio:x.default.string,minDeviceAspectRatio:x.default.string,maxDeviceAspectRatio:x.default.string,minHeight:g,maxHeight:g,minDeviceHeight:g,maxDeviceHeight:g,minWidth:g,maxWidth:g,minDeviceWidth:g,maxDeviceWidth:g,minColor:x.default.number,maxColor:x.default.number,minColorIndex:x.default.number,maxColorIndex:x.default.number,minMonochrome:x.default.number,maxMonochrome:x.default.number,minResolution:g,maxResolution:g},d),v=p(p({},y),f);l.default={all:v,types:y,matchers:S,features:f}},"./src/toQuery.ts":function(s,l,u){var p=this&&this.__importDefault||function(d){return d&&d.__esModule?d:{default:d}};Object.defineProperty(l,"__esModule",{value:!0});var h=p(u("./node_modules/hyphenate-style-name/index.js")),m=p(u("./src/mediaQuery.ts")),x=function(d){return"not ".concat(d)},g=function(d,f){var v=(0,h.default)(d);return typeof f=="number"&&(f="".concat(f,"px")),f===!0?v:f===!1?x(v):"(".concat(v,": ").concat(f,")")},y=function(d){return d.join(" and ")},S=function(d){var f=[];return Object.keys(m.default.all).forEach(function(v){var w=d[v];w!=null&&f.push(g(v,w))}),y(f)};l.default=S},"./src/useMediaQuery.ts":function(s,l,u){var p=this&&this.__importDefault||function(M){return M&&M.__esModule?M:{default:M}};Object.defineProperty(l,"__esModule",{value:!0});var h=u("react"),m=p(u("./node_modules/matchmediaquery/index.js")),x=p(u("./node_modules/hyphenate-style-name/index.js")),g=u("./node_modules/shallow-equal/dist/index.esm.js"),y=p(u("./src/toQuery.ts")),S=p(u("./src/Context.ts")),d=function(M){return M.query||(0,y.default)(M)},f=function(M){if(M){var I=Object.keys(M);return I.reduce(function(U,D){return U[(0,x.default)(D)]=M[D],U},{})}},v=function(){var M=(0,h.useRef)(!1);return(0,h.useEffect)(function(){M.current=!0},[]),M.current},w=function(M){var I=(0,h.useContext)(S.default),U=function(){return f(M)||f(I)},D=(0,h.useState)(U),R=D[0],G=D[1];return(0,h.useEffect)(function(){var q=U();(0,g.shallowEqualObjects)(R,q)||G(q)},[M,I]),R},k=function(M){var I=function(){return d(M)},U=(0,h.useState)(I),D=U[0],R=U[1];return(0,h.useEffect)(function(){var G=I();D!==G&&R(G)},[M]),D},O=function(M,I){var U=function(){return(0,m.default)(M,I||{},!!I)},D=(0,h.useState)(U),R=D[0],G=D[1],q=v();return(0,h.useEffect)(function(){if(q){var J=U();return G(J),function(){J&&J.dispose()}}},[M,I]),R},j=function(M){var I=(0,h.useState)(M.matches),U=I[0],D=I[1];return(0,h.useEffect)(function(){var R=function(G){D(G.matches)};return M.addListener(R),D(M.matches),function(){M.removeListener(R)}},[M]),U},P=function(M,I,U){var D=w(I),R=k(M);if(!R)throw new Error("Invalid or missing MediaQuery!");var G=O(R,D),q=j(G),J=v();return(0,h.useEffect)(function(){J&&U&&U(q)},[q]),(0,h.useEffect)(function(){return function(){G&&G.dispose()}},[]),q};l.default=P},react:s=>{s.exports=n}},i={};function o(s){var l=i[s];if(l!==void 0)return l.exports;var u=i[s]={exports:{}};return r[s].call(u.exports,u,u.exports,o),u.exports}o.d=(s,l)=>{for(var u in l)o.o(l,u)&&!o.o(s,u)&&Object.defineProperty(s,u,{enumerable:!0,get:l[u]})},o.o=(s,l)=>Object.prototype.hasOwnProperty.call(s,l),o.r=s=>{typeof Symbol<"u"&&Symbol.toStringTag&&Object.defineProperty(s,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(s,"__esModule",{value:!0})};var a=o("./src/index.ts");return a})())})(vm);var Zn=vm.exports;const Wr=Ki(Zn),Ey="/healthy-management-project/assets/olga_picture1x-48yp0Cvc.webp",_y="/healthy-management-project/assets/olga_picture@2x-dFelWgxd.jpg",Oy="/healthy-management-project/assets/olga_picture1x-ohcXIDw6.jpg",Py="/healthy-management-project/assets/mob_olga_picture@2x-jz3O2U-O.jpg",My="/healthy-management-project/assets/mob_olga_picture1x-PQXysebb.jpg",Ty="/healthy-management-project/assets/mob_olga_picture1x-YL2VUwPK.webp",ne="/healthy-management-project/assets/sprite-gBYbMuxV.svg";function X(){return X=Object.assign?Object.assign.bind():function(e){for(var t=1;t<arguments.length;t++){var n=arguments[t];for(var r in n)Object.prototype.hasOwnProperty.call(n,r)&&(e[r]=n[r])}return e},X.apply(this,arguments)}function ym(e){var t=Object.create(null);return function(n){return t[n]===void 0&&(t[n]=e(n)),t[n]}}var Iy=/^((children|dangerouslySetInnerHTML|key|ref|autoFocus|defaultValue|defaultChecked|innerHTML|suppressContentEditableWarning|suppressHydrationWarning|valueLink|abbr|accept|acceptCharset|accessKey|action|allow|allowUserMedia|allowPaymentRequest|allowFullScreen|allowTransparency|alt|async|autoComplete|autoPlay|capture|cellPadding|cellSpacing|challenge|charSet|checked|cite|classID|className|cols|colSpan|content|contentEditable|contextMenu|controls|controlsList|coords|crossOrigin|data|dateTime|decoding|default|defer|dir|disabled|disablePictureInPicture|download|draggable|encType|enterKeyHint|form|formAction|formEncType|formMethod|formNoValidate|formTarget|frameBorder|headers|height|hidden|high|href|hrefLang|htmlFor|httpEquiv|id|inputMode|integrity|is|keyParams|keyType|kind|label|lang|list|loading|loop|low|marginHeight|marginWidth|max|maxLength|media|mediaGroup|method|min|minLength|multiple|muted|name|nonce|noValidate|open|optimum|pattern|placeholder|playsInline|poster|preload|profile|radioGroup|readOnly|referrerPolicy|rel|required|reversed|role|rows|rowSpan|sandbox|scope|scoped|scrolling|seamless|selected|shape|size|sizes|slot|span|spellCheck|src|srcDoc|srcLang|srcSet|start|step|style|summary|tabIndex|target|title|translate|type|useMap|value|width|wmode|wrap|about|datatype|inlist|prefix|property|resource|typeof|vocab|autoCapitalize|autoCorrect|autoSave|color|incremental|fallback|inert|itemProp|itemScope|itemType|itemID|itemRef|on|option|results|security|unselectable|accentHeight|accumulate|additive|alignmentBaseline|allowReorder|alphabetic|amplitude|arabicForm|ascent|attributeName|attributeType|autoReverse|azimuth|baseFrequency|baselineShift|baseProfile|bbox|begin|bias|by|calcMode|capHeight|clip|clipPathUnits|clipPath|clipRule|colorInterpolation|colorInterpolationFilters|colorProfile|colorRendering|contentScriptType|contentStyleType|cursor|cx|cy|d|decelerate|descent|diffuseConstant|direction|display|divisor|dominantBaseline|dur|dx|dy|edgeMode|elevation|enableBackground|end|exponent|externalResourcesRequired|fill|fillOpacity|fillRule|filter|filterRes|filterUnits|floodColor|floodOpacity|focusable|fontFamily|fontSize|fontSizeAdjust|fontStretch|fontStyle|fontVariant|fontWeight|format|from|fr|fx|fy|g1|g2|glyphName|glyphOrientationHorizontal|glyphOrientationVertical|glyphRef|gradientTransform|gradientUnits|hanging|horizAdvX|horizOriginX|ideographic|imageRendering|in|in2|intercept|k|k1|k2|k3|k4|kernelMatrix|kernelUnitLength|kerning|keyPoints|keySplines|keyTimes|lengthAdjust|letterSpacing|lightingColor|limitingConeAngle|local|markerEnd|markerMid|markerStart|markerHeight|markerUnits|markerWidth|mask|maskContentUnits|maskUnits|mathematical|mode|numOctaves|offset|opacity|operator|order|orient|orientation|origin|overflow|overlinePosition|overlineThickness|panose1|paintOrder|pathLength|patternContentUnits|patternTransform|patternUnits|pointerEvents|points|pointsAtX|pointsAtY|pointsAtZ|preserveAlpha|preserveAspectRatio|primitiveUnits|r|radius|refX|refY|renderingIntent|repeatCount|repeatDur|requiredExtensions|requiredFeatures|restart|result|rotate|rx|ry|scale|seed|shapeRendering|slope|spacing|specularConstant|specularExponent|speed|spreadMethod|startOffset|stdDeviation|stemh|stemv|stitchTiles|stopColor|stopOpacity|strikethroughPosition|strikethroughThickness|string|stroke|strokeDasharray|strokeDashoffset|strokeLinecap|strokeLinejoin|strokeMiterlimit|strokeOpacity|strokeWidth|surfaceScale|systemLanguage|tableValues|targetX|targetY|textAnchor|textDecoration|textRendering|textLength|to|transform|u1|u2|underlinePosition|underlineThickness|unicode|unicodeBidi|unicodeRange|unitsPerEm|vAlphabetic|vHanging|vIdeographic|vMathematical|values|vectorEffect|version|vertAdvY|vertOriginX|vertOriginY|viewBox|viewTarget|visibility|widths|wordSpacing|writingMode|x|xHeight|x1|x2|xChannelSelector|xlinkActuate|xlinkArcrole|xlinkHref|xlinkRole|xlinkShow|xlinkTitle|xlinkType|xmlBase|xmlns|xmlnsXlink|xmlLang|xmlSpace|y|y1|y2|yChannelSelector|z|zoomAndPan|for|class|autofocus)|(([Dd][Aa][Tt][Aa]|[Aa][Rr][Ii][Aa]|x)-.*))$/,Ry=ym(function(e){return Iy.test(e)||e.charCodeAt(0)===111&&e.charCodeAt(1)===110&&e.charCodeAt(2)<91});function Ly(e){if(e.sheet)return e.sheet;for(var t=0;t<document.styleSheets.length;t++)if(document.styleSheets[t].ownerNode===e)return document.styleSheets[t]}function Dy(e){var t=document.createElement("style");return t.setAttribute("data-emotion",e.key),e.nonce!==void 0&&t.setAttribute("nonce",e.nonce),t.appendChild(document.createTextNode("")),t.setAttribute("data-s",""),t}var Vy=function(){function e(n){var r=this;this._insertTag=function(i){var o;r.tags.length===0?r.insertionPoint?o=r.insertionPoint.nextSibling:r.prepend?o=r.container.firstChild:o=r.before:o=r.tags[r.tags.length-1].nextSibling,r.container.insertBefore(i,o),r.tags.push(i)},this.isSpeedy=n.speedy===void 0?!0:n.speedy,this.tags=[],this.ctr=0,this.nonce=n.nonce,this.key=n.key,this.container=n.container,this.prepend=n.prepend,this.insertionPoint=n.insertionPoint,this.before=null}var t=e.prototype;return t.hydrate=function(r){r.forEach(this._insertTag)},t.insert=function(r){this.ctr%(this.isSpeedy?65e3:1)===0&&this._insertTag(Dy(this));var i=this.tags[this.tags.length-1];if(this.isSpeedy){var o=Ly(i);try{o.insertRule(r,o.cssRules.length)}catch{}}else i.appendChild(document.createTextNode(r));this.ctr++},t.flush=function(){this.tags.forEach(function(r){return r.parentNode&&r.parentNode.removeChild(r)}),this.tags=[],this.ctr=0},e}(),Je="-ms-",Ea="-moz-",pe="-webkit-",xm="comm",pc="rule",hc="decl",Fy="@import",wm="@keyframes",Ay="@layer",zy=Math.abs,nl=String.fromCharCode,$y=Object.assign;function Ny(e,t){return Ye(e,0)^45?(((t<<2^Ye(e,0))<<2^Ye(e,1))<<2^Ye(e,2))<<2^Ye(e,3):0}function Sm(e){return e.trim()}function Uy(e,t){return(e=t.exec(e))?e[0]:e}function he(e,t,n){return e.replace(t,n)}function uu(e,t){return e.indexOf(t)}function Ye(e,t){return e.charCodeAt(t)|0}function Hi(e,t,n){return e.slice(t,n)}function Qt(e){return e.length}function mc(e){return e.length}function ko(e,t){return t.push(e),e}function Wy(e,t){return e.map(t).join("")}var rl=1,Hr=1,bm=0,pt=0,Ve=0,Kr="";function il(e,t,n,r,i,o,a){return{value:e,root:t,parent:n,type:r,props:i,children:o,line:rl,column:Hr,length:a,return:""}}function ri(e,t){return $y(il("",null,null,"",null,null,0),e,{length:-e.length},t)}function Hy(){return Ve}function By(){return Ve=pt>0?Ye(Kr,--pt):0,Hr--,Ve===10&&(Hr=1,rl--),Ve}function yt(){return Ve=pt<bm?Ye(Kr,pt++):0,Hr++,Ve===10&&(Hr=1,rl++),Ve}function Jt(){return Ye(Kr,pt)}function Ko(){return pt}function to(e,t){return Hi(Kr,e,t)}function Bi(e){switch(e){case 0:case 9:case 10:case 13:case 32:return 5;case 33:case 43:case 44:case 47:case 62:case 64:case 126:case 59:case 123:case 125:return 4;case 58:return 3;case 34:case 39:case 40:case 91:return 2;case 41:case 93:return 1}return 0}function km(e){return rl=Hr=1,bm=Qt(Kr=e),pt=0,[]}function Cm(e){return Kr="",e}function Go(e){return Sm(to(pt-1,cu(e===91?e+2:e===40?e+1:e)))}function Qy(e){for(;(Ve=Jt())&&Ve<33;)yt();return Bi(e)>2||Bi(Ve)>3?"":" "}function Yy(e,t){for(;--t&&yt()&&!(Ve<48||Ve>102||Ve>57&&Ve<65||Ve>70&&Ve<97););return to(e,Ko()+(t<6&&Jt()==32&&yt()==32))}function cu(e){for(;yt();)switch(Ve){case e:return pt;case 34:case 39:e!==34&&e!==39&&cu(Ve);break;case 40:e===41&&cu(e);break;case 92:yt();break}return pt}function Ky(e,t){for(;yt()&&e+Ve!==57;)if(e+Ve===84&&Jt()===47)break;return"/*"+to(t,pt-1)+"*"+nl(e===47?e:yt())}function Gy(e){for(;!Bi(Jt());)yt();return to(e,pt)}function Xy(e){return Cm(Xo("",null,null,null,[""],e=km(e),0,[0],e))}function Xo(e,t,n,r,i,o,a,s,l){for(var u=0,p=0,h=a,m=0,x=0,g=0,y=1,S=1,d=1,f=0,v="",w=i,k=o,O=r,j=v;S;)switch(g=f,f=yt()){case 40:if(g!=108&&Ye(j,h-1)==58){uu(j+=he(Go(f),"&","&\f"),"&\f")!=-1&&(d=-1);break}case 34:case 39:case 91:j+=Go(f);break;case 9:case 10:case 13:case 32:j+=Qy(g);break;case 92:j+=Yy(Ko()-1,7);continue;case 47:switch(Jt()){case 42:case 47:ko(Zy(Ky(yt(),Ko()),t,n),l);break;default:j+="/"}break;case 123*y:s[u++]=Qt(j)*d;case 125*y:case 59:case 0:switch(f){case 0:case 125:S=0;case 59+p:d==-1&&(j=he(j,/\f/g,"")),x>0&&Qt(j)-h&&ko(x>32?Gd(j+";",r,n,h-1):Gd(he(j," ","")+";",r,n,h-2),l);break;case 59:j+=";";default:if(ko(O=Kd(j,t,n,u,p,i,s,v,w=[],k=[],h),o),f===123)if(p===0)Xo(j,t,O,O,w,o,h,s,k);else switch(m===99&&Ye(j,3)===110?100:m){case 100:case 108:case 109:case 115:Xo(e,O,O,r&&ko(Kd(e,O,O,0,0,i,s,v,i,w=[],h),k),i,k,h,s,r?w:k);break;default:Xo(j,O,O,O,[""],k,0,s,k)}}u=p=x=0,y=d=1,v=j="",h=a;break;case 58:h=1+Qt(j),x=g;default:if(y<1){if(f==123)--y;else if(f==125&&y++==0&&By()==125)continue}switch(j+=nl(f),f*y){case 38:d=p>0?1:(j+="\f",-1);break;case 44:s[u++]=(Qt(j)-1)*d,d=1;break;case 64:Jt()===45&&(j+=Go(yt())),m=Jt(),p=h=Qt(v=j+=Gy(Ko())),f++;break;case 45:g===45&&Qt(j)==2&&(y=0)}}return o}function Kd(e,t,n,r,i,o,a,s,l,u,p){for(var h=i-1,m=i===0?o:[""],x=mc(m),g=0,y=0,S=0;g<r;++g)for(var d=0,f=Hi(e,h+1,h=zy(y=a[g])),v=e;d<x;++d)(v=Sm(y>0?m[d]+" "+f:he(f,/&\f/g,m[d])))&&(l[S++]=v);return il(e,t,n,i===0?pc:s,l,u,p)}function Zy(e,t,n){return il(e,t,n,xm,nl(Hy()),Hi(e,2,-2),0)}function Gd(e,t,n,r){return il(e,t,n,hc,Hi(e,0,r),Hi(e,r+1,-1),r)}function Dr(e,t){for(var n="",r=mc(e),i=0;i<r;i++)n+=t(e[i],i,e,t)||"";return n}function qy(e,t,n,r){switch(e.type){case Ay:if(e.children.length)break;case Fy:case hc:return e.return=e.return||e.value;case xm:return"";case wm:return e.return=e.value+"{"+Dr(e.children,r)+"}";case pc:e.value=e.props.join(",")}return Qt(n=Dr(e.children,r))?e.return=e.value+"{"+n+"}":""}function Jy(e){var t=mc(e);return function(n,r,i,o){for(var a="",s=0;s<t;s++)a+=e[s](n,r,i,o)||"";return a}}function ex(e){return function(t){t.root||(t=t.return)&&e(t)}}var tx=function(t,n,r){for(var i=0,o=0;i=o,o=Jt(),i===38&&o===12&&(n[r]=1),!Bi(o);)yt();return to(t,pt)},nx=function(t,n){var r=-1,i=44;do switch(Bi(i)){case 0:i===38&&Jt()===12&&(n[r]=1),t[r]+=tx(pt-1,n,r);break;case 2:t[r]+=Go(i);break;case 4:if(i===44){t[++r]=Jt()===58?"&\f":"",n[r]=t[r].length;break}default:t[r]+=nl(i)}while(i=yt());return t},rx=function(t,n){return Cm(nx(km(t),n))},Xd=new WeakMap,ix=function(t){if(!(t.type!=="rule"||!t.parent||t.length<1)){for(var n=t.value,r=t.parent,i=t.column===r.column&&t.line===r.line;r.type!=="rule";)if(r=r.parent,!r)return;if(!(t.props.length===1&&n.charCodeAt(0)!==58&&!Xd.get(r))&&!i){Xd.set(t,!0);for(var o=[],a=rx(n,o),s=r.props,l=0,u=0;l<a.length;l++)for(var p=0;p<s.length;p++,u++)t.props[u]=o[l]?a[l].replace(/&\f/g,s[p]):s[p]+" "+a[l]}}},ox=function(t){if(t.type==="decl"){var n=t.value;n.charCodeAt(0)===108&&n.charCodeAt(2)===98&&(t.return="",t.value="")}};function jm(e,t){switch(Ny(e,t)){case 5103:return pe+"print-"+e+e;case 5737:case 4201:case 3177:case 3433:case 1641:case 4457:case 2921:case 5572:case 6356:case 5844:case 3191:case 6645:case 3005:case 6391:case 5879:case 5623:case 6135:case 4599:case 4855:case 4215:case 6389:case 5109:case 5365:case 5621:case 3829:return pe+e+e;case 5349:case 4246:case 4810:case 6968:case 2756:return pe+e+Ea+e+Je+e+e;case 6828:case 4268:return pe+e+Je+e+e;case 6165:return pe+e+Je+"flex-"+e+e;case 5187:return pe+e+he(e,/(\w+).+(:[^]+)/,pe+"box-$1$2"+Je+"flex-$1$2")+e;case 5443:return pe+e+Je+"flex-item-"+he(e,/flex-|-self/,"")+e;case 4675:return pe+e+Je+"flex-line-pack"+he(e,/align-content|flex-|-self/,"")+e;case 5548:return pe+e+Je+he(e,"shrink","negative")+e;case 5292:return pe+e+Je+he(e,"basis","preferred-size")+e;case 6060:return pe+"box-"+he(e,"-grow","")+pe+e+Je+he(e,"grow","positive")+e;case 4554:return pe+he(e,/([^-])(transform)/g,"$1"+pe+"$2")+e;case 6187:return he(he(he(e,/(zoom-|grab)/,pe+"$1"),/(image-set)/,pe+"$1"),e,"")+e;case 5495:case 3959:return he(e,/(image-set\([^]*)/,pe+"$1$`$1");case 4968:return he(he(e,/(.+:)(flex-)?(.*)/,pe+"box-pack:$3"+Je+"flex-pack:$3"),/s.+-b[^;]+/,"justify")+pe+e+e;case 4095:case 3583:case 4068:case 2532:return he(e,/(.+)-inline(.+)/,pe+"$1$2")+e;case 8116:case 7059:case 5753:case 5535:case 5445:case 5701:case 4933:case 4677:case 5533:case 5789:case 5021:case 4765:if(Qt(e)-1-t>6)switch(Ye(e,t+1)){case 109:if(Ye(e,t+4)!==45)break;case 102:return he(e,/(.+:)(.+)-([^]+)/,"$1"+pe+"$2-$3$1"+Ea+(Ye(e,t+3)==108?"$3":"$2-$3"))+e;case 115:return~uu(e,"stretch")?jm(he(e,"stretch","fill-available"),t)+e:e}break;case 4949:if(Ye(e,t+1)!==115)break;case 6444:switch(Ye(e,Qt(e)-3-(~uu(e,"!important")&&10))){case 107:return he(e,":",":"+pe)+e;case 101:return he(e,/(.+:)([^;!]+)(;|!.+)?/,"$1"+pe+(Ye(e,14)===45?"inline-":"")+"box$3$1"+pe+"$2$3$1"+Je+"$2box$3")+e}break;case 5936:switch(Ye(e,t+11)){case 114:return pe+e+Je+he(e,/[svh]\w+-[tblr]{2}/,"tb")+e;case 108:return pe+e+Je+he(e,/[svh]\w+-[tblr]{2}/,"tb-rl")+e;case 45:return pe+e+Je+he(e,/[svh]\w+-[tblr]{2}/,"lr")+e}return pe+e+Je+e+e}return e}var ax=function(t,n,r,i){if(t.length>-1&&!t.return)switch(t.type){case hc:t.return=jm(t.value,t.length);break;case wm:return Dr([ri(t,{value:he(t.value,"@","@"+pe)})],i);case pc:if(t.length)return Wy(t.props,function(o){switch(Uy(o,/(::plac\w+|:read-\w+)/)){case":read-only":case":read-write":return Dr([ri(t,{props:[he(o,/:(read-\w+)/,":"+Ea+"$1")]})],i);case"::placeholder":return Dr([ri(t,{props:[he(o,/:(plac\w+)/,":"+pe+"input-$1")]}),ri(t,{props:[he(o,/:(plac\w+)/,":"+Ea+"$1")]}),ri(t,{props:[he(o,/:(plac\w+)/,Je+"input-$1")]})],i)}return""})}},lx=[ax],sx=function(t){var n=t.key;if(n==="css"){var r=document.querySelectorAll("style[data-emotion]:not([data-s])");Array.prototype.forEach.call(r,function(y){var S=y.getAttribute("data-emotion");S.indexOf(" ")!==-1&&(document.head.appendChild(y),y.setAttribute("data-s",""))})}var i=t.stylisPlugins||lx,o={},a,s=[];a=t.container||document.head,Array.prototype.forEach.call(document.querySelectorAll('style[data-emotion^="'+n+' "]'),function(y){for(var S=y.getAttribute("data-emotion").split(" "),d=1;d<S.length;d++)o[S[d]]=!0;s.push(y)});var l,u=[ix,ox];{var p,h=[qy,ex(function(y){p.insert(y)})],m=Jy(u.concat(i,h)),x=function(S){return Dr(Xy(S),m)};l=function(S,d,f,v){p=f,x(S?S+"{"+d.styles+"}":d.styles),v&&(g.inserted[d.name]=!0)}}var g={key:n,sheet:new Vy({key:n,container:a,nonce:t.nonce,speedy:t.speedy,prepend:t.prepend,insertionPoint:t.insertionPoint}),nonce:t.nonce,inserted:o,registered:{},insert:l};return g.sheet.hydrate(s),g},Em={exports:{}},ve={};/** @license React v16.13.1
 * react-is.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */var He=typeof Symbol=="function"&&Symbol.for,gc=He?Symbol.for("react.element"):60103,vc=He?Symbol.for("react.portal"):60106,ol=He?Symbol.for("react.fragment"):60107,al=He?Symbol.for("react.strict_mode"):60108,ll=He?Symbol.for("react.profiler"):60114,sl=He?Symbol.for("react.provider"):60109,ul=He?Symbol.for("react.context"):60110,yc=He?Symbol.for("react.async_mode"):60111,cl=He?Symbol.for("react.concurrent_mode"):60111,dl=He?Symbol.for("react.forward_ref"):60112,fl=He?Symbol.for("react.suspense"):60113,ux=He?Symbol.for("react.suspense_list"):60120,pl=He?Symbol.for("react.memo"):60115,hl=He?Symbol.for("react.lazy"):60116,cx=He?Symbol.for("react.block"):60121,dx=He?Symbol.for("react.fundamental"):60117,fx=He?Symbol.for("react.responder"):60118,px=He?Symbol.for("react.scope"):60119;function kt(e){if(typeof e=="object"&&e!==null){var t=e.$$typeof;switch(t){case gc:switch(e=e.type,e){case yc:case cl:case ol:case ll:case al:case fl:return e;default:switch(e=e&&e.$$typeof,e){case ul:case dl:case hl:case pl:case sl:return e;default:return t}}case vc:return t}}}function _m(e){return kt(e)===cl}ve.AsyncMode=yc;ve.ConcurrentMode=cl;ve.ContextConsumer=ul;ve.ContextProvider=sl;ve.Element=gc;ve.ForwardRef=dl;ve.Fragment=ol;ve.Lazy=hl;ve.Memo=pl;ve.Portal=vc;ve.Profiler=ll;ve.StrictMode=al;ve.Suspense=fl;ve.isAsyncMode=function(e){return _m(e)||kt(e)===yc};ve.isConcurrentMode=_m;ve.isContextConsumer=function(e){return kt(e)===ul};ve.isContextProvider=function(e){return kt(e)===sl};ve.isElement=function(e){return typeof e=="object"&&e!==null&&e.$$typeof===gc};ve.isForwardRef=function(e){return kt(e)===dl};ve.isFragment=function(e){return kt(e)===ol};ve.isLazy=function(e){return kt(e)===hl};ve.isMemo=function(e){return kt(e)===pl};ve.isPortal=function(e){return kt(e)===vc};ve.isProfiler=function(e){return kt(e)===ll};ve.isStrictMode=function(e){return kt(e)===al};ve.isSuspense=function(e){return kt(e)===fl};ve.isValidElementType=function(e){return typeof e=="string"||typeof e=="function"||e===ol||e===cl||e===ll||e===al||e===fl||e===ux||typeof e=="object"&&e!==null&&(e.$$typeof===hl||e.$$typeof===pl||e.$$typeof===sl||e.$$typeof===ul||e.$$typeof===dl||e.$$typeof===dx||e.$$typeof===fx||e.$$typeof===px||e.$$typeof===cx)};ve.typeOf=kt;Em.exports=ve;var hx=Em.exports,Om=hx,mx={$$typeof:!0,render:!0,defaultProps:!0,displayName:!0,propTypes:!0},gx={$$typeof:!0,compare:!0,defaultProps:!0,displayName:!0,propTypes:!0,type:!0},Pm={};Pm[Om.ForwardRef]=mx;Pm[Om.Memo]=gx;var vx=!0;function Mm(e,t,n){var r="";return n.split(" ").forEach(function(i){e[i]!==void 0?t.push(e[i]+";"):r+=i+" "}),r}var xc=function(t,n,r){var i=t.key+"-"+n.name;(r===!1||vx===!1)&&t.registered[i]===void 0&&(t.registered[i]=n.styles)},Tm=function(t,n,r){xc(t,n,r);var i=t.key+"-"+n.name;if(t.inserted[n.name]===void 0){var o=n;do t.insert(n===o?"."+i:"",o,t.sheet,!0),o=o.next;while(o!==void 0)}};function yx(e){for(var t=0,n,r=0,i=e.length;i>=4;++r,i-=4)n=e.charCodeAt(r)&255|(e.charCodeAt(++r)&255)<<8|(e.charCodeAt(++r)&255)<<16|(e.charCodeAt(++r)&255)<<24,n=(n&65535)*1540483477+((n>>>16)*59797<<16),n^=n>>>24,t=(n&65535)*1540483477+((n>>>16)*59797<<16)^(t&65535)*1540483477+((t>>>16)*59797<<16);switch(i){case 3:t^=(e.charCodeAt(r+2)&255)<<16;case 2:t^=(e.charCodeAt(r+1)&255)<<8;case 1:t^=e.charCodeAt(r)&255,t=(t&65535)*1540483477+((t>>>16)*59797<<16)}return t^=t>>>13,t=(t&65535)*1540483477+((t>>>16)*59797<<16),((t^t>>>15)>>>0).toString(36)}var xx={animationIterationCount:1,aspectRatio:1,borderImageOutset:1,borderImageSlice:1,borderImageWidth:1,boxFlex:1,boxFlexGroup:1,boxOrdinalGroup:1,columnCount:1,columns:1,flex:1,flexGrow:1,flexPositive:1,flexShrink:1,flexNegative:1,flexOrder:1,gridRow:1,gridRowEnd:1,gridRowSpan:1,gridRowStart:1,gridColumn:1,gridColumnEnd:1,gridColumnSpan:1,gridColumnStart:1,msGridRow:1,msGridRowSpan:1,msGridColumn:1,msGridColumnSpan:1,fontWeight:1,lineHeight:1,opacity:1,order:1,orphans:1,tabSize:1,widows:1,zIndex:1,zoom:1,WebkitLineClamp:1,fillOpacity:1,floodOpacity:1,stopOpacity:1,strokeDasharray:1,strokeDashoffset:1,strokeMiterlimit:1,strokeOpacity:1,strokeWidth:1},wx=/[A-Z]|^ms/g,Sx=/_EMO_([^_]+?)_([^]*?)_EMO_/g,Im=function(t){return t.charCodeAt(1)===45},Zd=function(t){return t!=null&&typeof t!="boolean"},Ql=ym(function(e){return Im(e)?e:e.replace(wx,"-$&").toLowerCase()}),qd=function(t,n){switch(t){case"animation":case"animationName":if(typeof n=="string")return n.replace(Sx,function(r,i,o){return Yt={name:i,styles:o,next:Yt},i})}return xx[t]!==1&&!Im(t)&&typeof n=="number"&&n!==0?n+"px":n};function Qi(e,t,n){if(n==null)return"";if(n.__emotion_styles!==void 0)return n;switch(typeof n){case"boolean":return"";case"object":{if(n.anim===1)return Yt={name:n.name,styles:n.styles,next:Yt},n.name;if(n.styles!==void 0){var r=n.next;if(r!==void 0)for(;r!==void 0;)Yt={name:r.name,styles:r.styles,next:Yt},r=r.next;var i=n.styles+";";return i}return bx(e,t,n)}case"function":{if(e!==void 0){var o=Yt,a=n(e);return Yt=o,Qi(e,t,a)}break}}if(t==null)return n;var s=t[n];return s!==void 0?s:n}function bx(e,t,n){var r="";if(Array.isArray(n))for(var i=0;i<n.length;i++)r+=Qi(e,t,n[i])+";";else for(var o in n){var a=n[o];if(typeof a!="object")t!=null&&t[a]!==void 0?r+=o+"{"+t[a]+"}":Zd(a)&&(r+=Ql(o)+":"+qd(o,a)+";");else if(Array.isArray(a)&&typeof a[0]=="string"&&(t==null||t[a[0]]===void 0))for(var s=0;s<a.length;s++)Zd(a[s])&&(r+=Ql(o)+":"+qd(o,a[s])+";");else{var l=Qi(e,t,a);switch(o){case"animation":case"animationName":{r+=Ql(o)+":"+l+";";break}default:r+=o+"{"+l+"}"}}}return r}var Jd=/label:\s*([^\s;\n{]+)\s*(;|$)/g,Yt,wc=function(t,n,r){if(t.length===1&&typeof t[0]=="object"&&t[0]!==null&&t[0].styles!==void 0)return t[0];var i=!0,o="";Yt=void 0;var a=t[0];a==null||a.raw===void 0?(i=!1,o+=Qi(r,n,a)):o+=a[0];for(var s=1;s<t.length;s++)o+=Qi(r,n,t[s]),i&&(o+=a[s]);Jd.lastIndex=0;for(var l="",u;(u=Jd.exec(o))!==null;)l+="-"+u[1];var p=yx(o)+l;return{name:p,styles:o,next:Yt}},kx=function(t){return t()},Cx=Nc.useInsertionEffect?Nc.useInsertionEffect:!1,Rm=Cx||kx,Sc={}.hasOwnProperty,Lm=T.createContext(typeof HTMLElement<"u"?sx({key:"css"}):null);Lm.Provider;var Dm=function(t){return T.forwardRef(function(n,r){var i=T.useContext(Lm);return t(n,i,r)})},Vm=T.createContext({}),du="__EMOTION_TYPE_PLEASE_DO_NOT_USE__",jx=function(t,n){var r={};for(var i in n)Sc.call(n,i)&&(r[i]=n[i]);return r[du]=t,r},Ex=function(t){var n=t.cache,r=t.serialized,i=t.isStringTag;return xc(n,r,i),Rm(function(){return Tm(n,r,i)}),null},_x=Dm(function(e,t,n){var r=e.css;typeof r=="string"&&t.registered[r]!==void 0&&(r=t.registered[r]);var i=e[du],o=[r],a="";typeof e.className=="string"?a=Mm(t.registered,o,e.className):e.className!=null&&(a=e.className+" ");var s=wc(o,void 0,T.useContext(Vm));a+=t.key+"-"+s.name;var l={};for(var u in e)Sc.call(e,u)&&u!=="css"&&u!==du&&(l[u]=e[u]);return l.ref=n,l.className=a,T.createElement(T.Fragment,null,T.createElement(Ex,{cache:t,serialized:s,isStringTag:typeof i=="string"}),T.createElement(i,l))}),Ox=_x,Y=function(t,n){var r=arguments;if(n==null||!Sc.call(n,"css"))return T.createElement.apply(void 0,r);var i=r.length,o=new Array(i);o[0]=Ox,o[1]=jx(t,n);for(var a=2;a<i;a++)o[a]=r[a];return T.createElement.apply(null,o)};function bc(){for(var e=arguments.length,t=new Array(e),n=0;n<e;n++)t[n]=arguments[n];return wc(t)}var Px=function(){var t=bc.apply(void 0,arguments),n="animation-"+t.name;return{name:n,styles:"@keyframes "+n+"{"+t.styles+"}",anim:1,toString:function(){return"_EMO_"+this.name+"_"+this.styles+"_EMO_"}}},Mx=Ry,Tx=function(t){return t!=="theme"},ef=function(t){return typeof t=="string"&&t.charCodeAt(0)>96?Mx:Tx},tf=function(t,n,r){var i;if(n){var o=n.shouldForwardProp;i=t.__emotion_forwardProp&&o?function(a){return t.__emotion_forwardProp(a)&&o(a)}:o}return typeof i!="function"&&r&&(i=t.__emotion_forwardProp),i},Ix=function(t){var n=t.cache,r=t.serialized,i=t.isStringTag;return xc(n,r,i),Rm(function(){return Tm(n,r,i)}),null},Rx=function e(t,n){var r=t.__emotion_real===t,i=r&&t.__emotion_base||t,o,a;n!==void 0&&(o=n.label,a=n.target);var s=tf(t,n,r),l=s||ef(i),u=!l("as");return function(){var p=arguments,h=r&&t.__emotion_styles!==void 0?t.__emotion_styles.slice(0):[];if(o!==void 0&&h.push("label:"+o+";"),p[0]==null||p[0].raw===void 0)h.push.apply(h,p);else{h.push(p[0][0]);for(var m=p.length,x=1;x<m;x++)h.push(p[x],p[0][x])}var g=Dm(function(y,S,d){var f=u&&y.as||i,v="",w=[],k=y;if(y.theme==null){k={};for(var O in y)k[O]=y[O];k.theme=T.useContext(Vm)}typeof y.className=="string"?v=Mm(S.registered,w,y.className):y.className!=null&&(v=y.className+" ");var j=wc(h.concat(w),S.registered,k);v+=S.key+"-"+j.name,a!==void 0&&(v+=" "+a);var P=u&&s===void 0?ef(f):l,M={};for(var I in y)u&&I==="as"||P(I)&&(M[I]=y[I]);return M.className=v,M.ref=d,T.createElement(T.Fragment,null,T.createElement(Ix,{cache:S,serialized:j,isStringTag:typeof f=="string"}),T.createElement(f,M))});return g.displayName=o!==void 0?o:"Styled("+(typeof i=="string"?i:i.displayName||i.name||"Component")+")",g.defaultProps=t.defaultProps,g.__emotion_real=g,g.__emotion_base=i,g.__emotion_styles=h,g.__emotion_forwardProp=s,Object.defineProperty(g,"toString",{value:function(){return"."+a}}),g.withComponent=function(y,S){return e(y,X({},n,S,{shouldForwardProp:tf(g,S,!0)})).apply(void 0,h)},g}},Lx=["a","abbr","address","area","article","aside","audio","b","base","bdi","bdo","big","blockquote","body","br","button","canvas","caption","cite","code","col","colgroup","data","datalist","dd","del","details","dfn","dialog","div","dl","dt","em","embed","fieldset","figcaption","figure","footer","form","h1","h2","h3","h4","h5","h6","head","header","hgroup","hr","html","i","iframe","img","input","ins","kbd","keygen","label","legend","li","link","main","map","mark","marquee","menu","menuitem","meta","meter","nav","noscript","object","ol","optgroup","option","output","p","param","picture","pre","progress","q","rp","rt","ruby","s","samp","script","section","select","small","source","span","strong","style","sub","summary","sup","table","tbody","td","textarea","tfoot","th","thead","time","title","tr","track","u","ul","var","video","wbr","circle","clipPath","defs","ellipse","foreignObject","g","image","line","linearGradient","mask","path","pattern","polygon","polyline","radialGradient","rect","stop","svg","text","tspan"],E=Rx.bind();Lx.forEach(function(e){E[e]=E(e)});const Dx=E.section`
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
`,Vx=E.h2`
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
`,Fx=E.div`
  display: flex;
  flex-direction: column;
  gap: 24px;

  @media screen and (min-width: 768px) {
    display: flex;
    flex-direction: row;
    gap: 24px;
  }
`,Ax=E.div`
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
`,zx=E.h3`
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
`,$x=E.p`
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
`,Bn=E.li`
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
`,Nx=E.ul`
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
`,Yl=E.a`
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
`,Kl=E.svg`
  margin-left: 10px;
`,Ux=E.div`
  // width: calc((100% - 24px) / 2);
  max-width: 327px;
  border-radius: 16px;

  @media screen and (min-width: 768px) {
    // width: calc((100% - 24px) / 2);
    max-width: 828px;
    border-radius: 16px;
  }
`,Wx=()=>c.jsx(Dx,{className:"container",children:c.jsxs("div",{children:[c.jsx(Vx,{children:"Про мене"}),c.jsxs(Fx,{children:[c.jsxs(Ux,{children:[c.jsx(Wr,{maxWidth:767,children:c.jsx("img",{srcSet:`${Py} 2x, ${My} 1x`,sizes:"(max-width: 767px) 100vw",src:Ty,alt:"Ольга Поліщук"})}),c.jsx(Wr,{minWidth:768,children:c.jsx("img",{srcSet:`${_y} 2x, ${Oy} 1x`,sizes:"(min-width: 768px) 100vw",src:Ey,alt:"Ольга Поліщук"})})]}),c.jsxs(Ax,{children:[c.jsx(zx,{children:"Ольга Поліщук"}),c.jsx($x,{children:"CEO and Founder студії стратегічного розвитку"}),c.jsxs("ul",{children:[c.jsx(Bn,{children:"MBA Healthcare management"}),c.jsx(Bn,{children:"Викладачка медичного маркетингу Бізнес-школа УКУ (LvBS)"}),c.jsx(Bn,{children:`Експертка в "Центр Розвитку Громадського Здоров'я УКУ"`}),c.jsx(Bn,{children:"Бізнес-консультантка, стратег з медичного маркетингу"}),c.jsx(Bn,{children:'Керівниця проєкту "Стетоскоп" - телеграм канал про медичний менеджмент та маркетингу'}),c.jsx(Bn,{children:"Більше 18 років досвіду в маркетингу та комунікаціях, з них більше 10 років досвіду в медичному та фармацевтичному бізнесі на керівних посадах"}),c.jsx(Bn,{children:"Використання принципів доказової медицини"})]}),c.jsxs(Nx,{children:[c.jsx("li",{children:c.jsxs(Yl,{href:"https://www.linkedin.com/in/olga-polishchuk-83362140/",target:"_blank",rel:"noopener noreferrer",children:["LinkedIn",c.jsx(Kl,{width:"24",height:"24",children:c.jsx("use",{href:`${ne}#icon-arrow-up-right`})})]})}),c.jsx("li",{children:c.jsxs(Yl,{href:"https://www.facebook.com/olga.polishchuk.14",target:"_blank",rel:"noopener noreferrer",children:["Facebook",c.jsx(Kl,{width:"24",height:"24",children:c.jsx("use",{href:`${ne}#icon-arrow-up-right`})})]})}),c.jsx("li",{children:c.jsxs(Yl,{href:"https://www.instagram.com/olga_healthm/",target:"_blank",rel:"noopener noreferrer",children:["Instagram",c.jsx(Kl,{width:"24",height:"24",children:c.jsx("use",{href:`${ne}#icon-arrow-up-right`})})]})})]})]})]})]})}),Hx=E.section`
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
`,Bx=E.h2`
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
`,Qx=E.div`
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
`,Yx=E.p`
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
`,Kx=E.p`
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
`,nf=E.div`
  display: flex;
  gap: 16px;
  align-items: center;
  margin-bottom: 16px;
`,Gx=E.div`
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
`,Xx=E.h4`
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
`,Zx=E.div`
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
`,qx=E.h4`
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
`,Jx=E.p`
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
`,e1=E.svg`
  fill: var(--primary-bluedark, #1b3641);
  border-radius: 100px;
  background: rgba(27, 54, 65, 0.2);
  width: 32px;
  height: 32px;
`,t1=E.svg`
  fill: var(--background-white, #fcfcfc);
  border-radius: 100px;
  background: rgba(244, 244, 246, 0.2);
  width: 32px;
  height: 32px;
`,n1=()=>c.jsx(Hx,{id:"aboutUs",className:"container",children:c.jsxs("div",{children:[c.jsx(Bx,{children:"Про студію"}),c.jsxs(Qx,{children:[c.jsx("div",{children:c.jsx(Yx,{children:"Студія стратегічного розвитку медичних брендів «Healthy management» надає послуги медичного менеджменту, медичного маркетингу, консалтингу бізнес-процесів та створення стратегій здоров’я для підприємств та бізнесу. Ми співпрацюємо з медичними закладами, лікарями, власниками, керівниками та створюємо спільні стратегії та дії для ефективного просування та розвитку проєктів, використовуючи комплексний підхід"})}),c.jsxs(Zx,{children:[c.jsxs(nf,{children:[c.jsx(t1,{children:c.jsx("use",{href:`${ne}#icon-star`})}),c.jsx(qx,{children:"Наша місія"})]}),c.jsx(Jx,{children:"Будуємо ефективні стратегії по управлінню здоров’ям та створюємо продуктивні дії для популяризації здорового менеджменту"})]}),c.jsxs(Gx,{children:[c.jsxs(nf,{children:[c.jsx(e1,{children:c.jsx("use",{href:`${ne}#icon-star`})}),c.jsx(Xx,{children:"Наші цінності"})]}),c.jsx(Kx,{children:"Повага, довіра, партнерство та експертність. Будуємо нову культуру управління здоровим менеджментом у медичній галузі"})]})]})]})}),r1=E.section`
  padding-top: 80px;
  padding-bottom: 80px;
`,i1=E.div`
  width: 100%;
  border-radius: 16px;
  padding: 80px;
  background-color: var(--background-bluedark);
`,o1=E.h2`
  margin-bottom: 40px;
  font-size: 48px;
  font-weight: 600;
  line-height: 1.17;
  color: var(--system-default-10);

  & span {
    color: var(--primary-yellow);
  }
`,a1=E.ul`
  display: flex;
  justify-content: space-between;
  gap: 24px;
  padding: 24px 0;
`,l1=E.li`
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
`,s1=[{id:1,tool:"Матриця стейкхолдерів"},{id:2,tool:"SWOT аналіз"},{id:3,tool:"Bussines model canvas"},{id:4,tool:"Value proposition canvas"},{id:5,tool:"Customer journey map"}],u1=()=>c.jsx(r1,{className:"container",children:c.jsxs(i1,{children:[c.jsxs(o1,{children:["Бізнес ",c.jsx("span",{children:"інструменти"}),", які використувуємо в партнерстві"]}),c.jsx(a1,{children:s1.map(e=>c.jsx(l1,{children:e.tool},e.id))})]})});var Fm={exports:{}},c1="SECRET_DO_NOT_PASS_THIS_OR_YOU_WILL_BE_FIRED",d1=c1,f1=d1;function Am(){}function zm(){}zm.resetWarningCache=Am;var p1=function(){function e(r,i,o,a,s,l){if(l!==f1){var u=new Error("Calling PropTypes validators directly is not supported by the `prop-types` package. Use PropTypes.checkPropTypes() to call them. Read more at http://fb.me/use-check-prop-types");throw u.name="Invariant Violation",u}}e.isRequired=e;function t(){return e}var n={array:e,bigint:e,bool:e,func:e,number:e,object:e,string:e,symbol:e,any:e,arrayOf:t,element:e,elementType:e,instanceOf:t,node:e,objectOf:t,oneOf:t,oneOfType:t,shape:t,exact:t,checkPropTypes:zm,resetWarningCache:Am};return n.PropTypes=n,n};Fm.exports=p1();var h1=Fm.exports;const Yi=Ki(h1),Zo="/healthy-management-project/assets/icon-footer-MBx-ujYN.svg",m1=E.div`
  padding: 40px 0 0 0;
  background-color: var(--background-bluedark);
`,g1=E.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
  margin-bottom: 40px;
`,v1=E.a`
  font-size: 16px;
  font-weight: 500;
  line-height: 1.5;
  cursor: pointer;
  border-bottom: 1px solid rgba(244, 244, 246, 0.4);
  color: var(--system-default-10);
`,y1=E.div`
  display: flex;
  align-items: center;
  gap: 40px;
`,ii=E.a`
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
`,x1=E.div`
  display: flex;
  gap: 40px;
`,w1=E.div`
  display: flex;
  gap: 16px;
  align-items: center;
`,S1=E.a`
  padding: 8px;

  & svg {
    border-radius: 10px;
    background-color: var(--background-white);
    opacity: 0.8;
  }
`,b1=E.div`
  display: flex;
  flex-direction: column;
`,rf=E.a`
  font-size: 16px;
  font-weight: 500;
  line-height: 1.5;
  color: var(--system-default-10);
`,k1=E.p`
  padding: 16px 0;
  text-align: center;
  font-size: 12px;
  font-weight: 600;
  line-height: 1.67;
  text-transform: uppercase;
  border-top: 1px solid var(--system-default-20);
  color: var(--system-default-10);
`,C1=E.div`
  position: fixed;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  background-color: rgba(0, 0, 0, 0.5);
  overflow: hidden;
  z-index: 1100;
`,j1=E.div`
  padding: 80px;
  position: fixed;
  width: 1360px;
  border-radius: 24px;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
  background-color: white;
  z-index: 10000;
`,E1=E.div`
  height: 32px;
  display: flex;
  justify-content: space-between;
  margin-bottom: 40px;
`,_1=E.svg`
  width: 24px;
  cursor: pointer;
`,O1=E.h2`
  font-size: 24px;
  font-weight: 600;
  line-height: 32px;
  color: var(--typography-bluedark);
`,P1=E.ul`
  display: flex;
  flex-wrap: wrap;
  gap: 24px;
`,vn=E.li`
  width: 282px;
  padding: 24px;
  gap: 16px;

  border-radius: 16px;
  background: var(--background-bluedark);
  box-shadow: 0px 0px 8px 0px rgba(27, 54, 65, 0.08);
`,yn=E.h3`
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
`,xn=E.p`
  display: flex;
  justify-content: center;

  font-size: 14px;
  font-weight: 500;
  line-height: 18px;
  color: var(--typography-white);
`,wn=E.div`
  gap: 16px;
  display: flex;
  flex-direction: column;
  justify-content: center;
`,Sn=E.div`
  display: flex;
  flex-direction: column;
  gap: 8px;
`,bn=E.div`
  border-radius: 8px;
  overflow: hidden;
`,kn=E.img`
  border-radius: 8px;

  &:hover {
    transform: scale(1.1);
    border-radius: 8px;
  }
`,of="/healthy-management-project/assets/Jilia_Kopytko-mYhzlt_-.webp",M1="/healthy-management-project/assets/Jilia_Kopytko@2x-gruKrAtD.jpg",af="/healthy-management-project/assets/Yelyzaveta_Domanska-Ru7up7Pj.webp",T1="/healthy-management-project/assets/Yelyzaveta_Domanska@2x-BYkqrL88.jpg",lf="/healthy-management-project/assets/Oleksandr_Natalukha-YKEBbXyu.webp",I1="/healthy-management-project/assets/Oleksandr_Natalukha@2x-5OsrctvL.jpg",sf="/healthy-management-project/assets/Valentyn_Havrylenko-ouVcypag.webp",R1="/healthy-management-project/assets/Valentyn_Havrylenko@2x-xBjJM6nL.jpg",uf="/healthy-management-project/assets/Olha_Abent-lPe8g7w1.webp",L1="/healthy-management-project/assets/Olha_Abent@2x-fGgXmj71.jpg",cf="/healthy-management-project/assets/Viktoriia_Moryc-tWw5-4of.webp",D1="/healthy-management-project/assets/Viktoriia_Moryc@2x-AxiRex6x.jpg",df="/healthy-management-project/assets/Vyacheslav_Pavlyuk-py_hj3lz.webp",V1="/healthy-management-project/assets/Vyacheslav_Pavlyuk@2x-2qCtSSAb.jpg",ff="/healthy-management-project/assets/Yaroslav_Li-nn0P6bIv.webp",F1="/healthy-management-project/assets/Yaroslav_Li@2x-xfuqLdiI.jpg",$m=({handleClose:e,isModalOpen:t})=>{const n=i=>{i.target===i.currentTarget&&e()};T.useEffect(()=>{const i=document.body,o=()=>{t?i.classList.add("body-no-scroll"):i.classList.remove("body-no-scroll")},a=s=>{s.code==="Escape"&&t&&e()};return o(),window.addEventListener("keydown",a),()=>{window.removeEventListener("keydown",a)}},[e,t]);const r=document.getElementById("modal");return t?jy.createPortal(c.jsx(C1,{onClick:n,children:c.jsxs(j1,{isModalOpen:t,children:[c.jsxs(E1,{children:[c.jsx(O1,{children:"Команда, яка створила сторінку"}),c.jsx(_1,{onClick:e,children:c.jsx("use",{href:`${ne}#icon-close`})})]}),c.jsxs(P1,{children:[c.jsx(vn,{children:c.jsxs(wn,{children:[c.jsx(bn,{children:c.jsx(kn,{src:cf,srcSet:`${cf} 1x, ${D1} 2x`,alt:"Вікторія Мориц"})}),c.jsxs(Sn,{children:[c.jsx(yn,{children:c.jsxs("a",{href:"https://www.linkedin.com/in/viktoriia-moryc-61610962/",target:"_blank",rel:"noopener noreferrer",children:["Вікторія Мориц",c.jsx("svg",{width:"24",height:"24",children:c.jsx("use",{href:`${ne}#icon-linkedin`})})]})}),c.jsx(xn,{children:"Project Manager"})]})]})}),c.jsx(vn,{children:c.jsxs(wn,{children:[c.jsx(bn,{children:c.jsx(kn,{src:of,srcSet:`${of} 1x, ${M1} 2x`,alt:"Юлія Копитко"})}),c.jsxs(Sn,{children:[c.jsx(yn,{children:c.jsxs("a",{href:"https://www.linkedin.com/in/juliakopytko/",target:"_blank",rel:"noopener noreferrer",children:["Юлія Копитко",c.jsx("svg",{width:"24",height:"24",children:c.jsx("use",{href:`${ne}#icon-linkedin`})})]})}),c.jsx(xn,{children:"UX/UI Designer"})]})]})}),c.jsx(vn,{children:c.jsxs(wn,{children:[c.jsx(bn,{children:c.jsx(kn,{src:ff,srcSet:`${ff} 1x, ${F1} 2x`,alt:"Ярослав Лі"})}),c.jsxs(Sn,{children:[c.jsx(yn,{children:c.jsxs("a",{href:"https://www.linkedin.com/in/yaroslav-lee-b7070b294",target:"_blank",rel:"noopener noreferrer",children:["Ярослав Лі",c.jsx("svg",{width:"24",height:"24",children:c.jsx("use",{href:`${ne}#icon-linkedin`})})]})}),c.jsx(xn,{children:"Frontend Developer"})]})]})}),c.jsx(vn,{children:c.jsxs(wn,{children:[c.jsx(bn,{children:c.jsx(kn,{src:af,srcSet:`${af} 1x, ${T1} 2x`,alt:"Єлизавета Доманська"})}),c.jsxs(Sn,{children:[c.jsx(yn,{children:c.jsxs("a",{href:"https://www.linkedin.com/in/yelyzaveta-domanska-2185a5292/",target:"_blank",rel:"noopener noreferrer",children:["Єлизавета Доманська",c.jsx("svg",{width:"24",height:"24",children:c.jsx("use",{href:`${ne}#icon-linkedin`})})]})}),c.jsx(xn,{children:"Frontend Developer"})]})]})}),c.jsx(vn,{children:c.jsxs(wn,{children:[c.jsx(bn,{children:c.jsx(kn,{src:lf,srcSet:`${lf} 1x, ${I1} 2x`,alt:"Олександр Наталуха"})}),c.jsxs(Sn,{children:[c.jsx(yn,{children:c.jsxs("a",{href:"https://www.linkedin.com/in/oleksandr-natalukha",target:"_blank",rel:"noopener noreferrer",children:["Олександр Наталуха",c.jsx("svg",{width:"24",height:"24",children:c.jsx("use",{href:`${ne}#icon-linkedin`})})]})}),c.jsx(xn,{children:"Frontend Developer"})]})]})}),c.jsx(vn,{children:c.jsxs(wn,{children:[c.jsx(bn,{children:c.jsx(kn,{src:sf,srcSet:`${sf} 1x, ${R1} 2x`,alt:"Валентин Гавриленко"})}),c.jsxs(Sn,{children:[c.jsx(yn,{children:c.jsxs("a",{href:"https://www.linkedin.com/in/valentyn-havrylenko/",target:"_blank",rel:"noopener noreferrer",children:["Валентин Гавриленко",c.jsx("svg",{width:"24",height:"24",children:c.jsx("use",{href:`${ne}#icon-linkedin`})})]})}),c.jsx(xn,{children:"Frontend Developer"})]})]})}),c.jsx(vn,{children:c.jsxs(wn,{children:[c.jsx(bn,{children:c.jsx(kn,{src:df,srcSet:`${df} 1x, ${V1} 2x`,alt:"В´ячеслав Павлюк"})}),c.jsxs(Sn,{children:[c.jsx(yn,{children:c.jsxs("a",{href:"https://www.linkedin.com/in/vyacheslav-pavlyuk/",target:"_blank",rel:"noopener noreferrer",children:["В'ячеслав Павлюк",c.jsx("svg",{width:"24",height:"24",children:c.jsx("use",{href:`${ne}#icon-linkedin`})})]})}),c.jsx(xn,{children:"Fullstack Developer"})]})]})}),c.jsx(vn,{children:c.jsxs(wn,{children:[c.jsx(bn,{children:c.jsx(kn,{src:uf,srcSet:`${uf} 1x, ${L1} 2x`,alt:"Ольга Абент"})}),c.jsxs(Sn,{children:[c.jsx(yn,{children:c.jsxs("a",{href:"https://www.linkedin.com/in/abentolga/",target:"_blank",rel:"noopener noreferrer",children:["Ольга Абент",c.jsx("svg",{width:"24",height:"24",children:c.jsx("use",{href:`${ne}#icon-linkedin`})})]})}),c.jsx(xn,{children:"QA Engineer"})]})]})})]})]})}),r):null};$m.propTypes={handleClose:Yi.func.isRequired,isModalOpen:Yi.bool.isRequired};const Nm=({handleSetActiveLink:e})=>{const[t,n]=T.useState(!1),r=()=>{n(!0)},i=()=>{n(!1)};return c.jsxs(m1,{id:"footer",children:[c.jsxs(g1,{className:"container",children:[c.jsx("svg",{width:"227",height:"40",children:c.jsx("use",{href:`${Zo}#logo-white`})}),c.jsx(v1,{onClick:r,children:"created by GoIT students"}),c.jsx($m,{handleClose:i,isModalOpen:t}),c.jsxs(y1,{children:[c.jsx(ii,{href:"#home",onClick:o=>e("home",o),children:"Головна"}),c.jsx(ii,{href:"#aboutUs",onClick:o=>e("aboutUs",o),children:"Про нас"}),c.jsx(ii,{href:"#services",onClick:o=>e("services",o),children:"Послуги"}),c.jsx(ii,{href:"#mentoring",onClick:o=>e("mentoring",o),children:"Менторство"}),c.jsx(ii,{href:"#projects",onClick:o=>e("projects",o),children:"Проєкти"})]}),c.jsxs(x1,{children:[c.jsxs(w1,{children:[c.jsx(S1,{href:"https://www.facebook.com/profile.php?id=61551346490841",target:"_blank",rel:"noopener noreferrer",children:c.jsx("svg",{width:"32",height:"32",children:c.jsx("use",{href:`${Zo}#facebook`})})}),c.jsx("a",{href:"https://www.instagram.com/healthymanagement_ua/",target:"_blank",rel:"noopener noreferrer",children:c.jsx("svg",{width:"40",height:"40",children:c.jsx("use",{href:`${Zo}#instagram`})})})]}),c.jsxs(b1,{children:[c.jsx(rf,{href:"mailto:managementhealthy@gmail.com",children:"managementhealthy@gmail.com"}),c.jsx(rf,{href:"tel:+380673160556",children:"+380 673 160 556"})]})]})]}),c.jsx(k1,{children:"© 2023 healthy managment. All rights reserved"})]})};Nm.propTypes={handleSetActiveLink:Yi.func.isRequired};const _a="/healthy-management-project/assets/symbol-defs-t7xx9-KA.svg",A1=E.header`
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
`,z1=E.div`
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
`,$1=E.nav`
  display: flex;
  gap: 40px;
  align-items: center;
`,oi=E.a`
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
`,N1=E.a`
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
`,U1=E.svg`
  stroke: black;
  width: 40px;
  height: 40px;
`,W1=E.button`
  border: none;
  padding: 0;
  margin: 0;
  text-decoration: none;
  font-family: inherit;
  font-size: 100%;
  cursor: pointer;
  background: none;
`,H1="_mabileMenuContainer_15uw8_1",B1="_divMobileMenu_15uw8_13",Q1="_logoMenu_15uw8_24",Y1="_contactMenu_15uw8_28",K1="_svgMenu_15uw8_51",G1="_nav_15uw8_55",X1="_navMenuMobile_15uw8_66",Z1="_buttonMenuMobile_15uw8_75",It={mabileMenuContainer:H1,divMobileMenu:B1,logoMenu:Q1,contactMenu:Y1,svgMenu:K1,nav:G1,navMenuMobile:X1,buttonMenuMobile:Z1},q1=document.getElementById("modalMobail"),Um=({onClose:e,handleSetActiveLink:t})=>eo.createPortal(c.jsx("div",{className:It.mabileMenuContainer,children:c.jsxs("div",{className:"container",children:[c.jsxs("div",{className:It.divMobileMenu,children:[c.jsx("a",{href:"#home",children:c.jsx("svg",{width:"40",height:"40",children:c.jsx("use",{href:`${_a}#icon-g10`})})}),c.jsx("a",{className:It.contactMenu,href:"#contact",children:"Контакт"}),c.jsx("button",{className:It.buttonMenuMobile,type:"button",onClick:()=>e(),children:c.jsx("svg",{className:It.svgMenu,width:"40",height:"40",children:c.jsx("use",{href:`${_a}#icon-close`})})})]}),c.jsxs("nav",{className:It.nav,children:[c.jsx("a",{className:It.navMenuMobile,href:"#home",onClick:n=>{e(),t("home",n)},children:"Головна"}),c.jsx("a",{className:It.navMenuMobile,href:"#aboutUs",onClick:n=>{e(),t("aboutUs",n)},children:"Про нас"}),c.jsx("a",{className:It.navMenuMobile,href:"#services",onClick:n=>{e(),t("services",n)},children:"Послуги"}),c.jsx("a",{className:It.navMenuMobile,href:"#mentoring",onClick:n=>{e(),t("mentoring",n)},children:"Менторство"}),c.jsx("a",{className:It.navMenuMobile,href:"#projects",onClick:n=>{e(),t("projects",n)},children:"Проєкти"})]})]})}),q1);Um.propTypes={onClose:Yi.func.isRequired};const Wm=({handleSetActiveLink:e})=>{const[t,n]=T.useState("home"),[r,i]=T.useState(!1),o=Zn.useMediaQuery({query:"(max-width: 767px)"}),a=Zn.useMediaQuery({query:"(min-width: 768px)"}),s=()=>{i(!r)};return T.useEffect(()=>{const l=()=>{const p=["home","aboutUs","services","mentoring","projects","contact"].find(h=>{const m=document.getElementById(h);if(m){const x=m.getBoundingClientRect();return x.top<=120&&x.bottom>=120}return m});p&&n(p)};return window.addEventListener("scroll",l),()=>{window.removeEventListener("scroll",l)}},[]),c.jsxs(A1,{children:[c.jsx("div",{className:"container",children:c.jsxs(z1,{children:[o&&c.jsx("a",{href:"#home",children:c.jsx("svg",{width:"40",height:"40",children:c.jsx("use",{href:`${_a}#icon-g10`})})}),a&&c.jsx("a",{href:"#home",children:c.jsx("svg",{width:"227",height:"40",children:c.jsx("use",{href:`${ne}#logo-black`})})}),a&&c.jsxs($1,{children:[c.jsx(oi,{href:"#home",className:t==="home"?"active":"",onClick:l=>e("home",l),children:"Головна"}),c.jsx(oi,{href:"#aboutUs",className:t==="aboutUs"?"active":"",onClick:l=>e("aboutUs",l),children:"Про нас"}),c.jsx(oi,{href:"#services",className:t==="services"?"active":"",onClick:l=>e("services",l),children:"Послуги"}),c.jsx(oi,{href:"#mentoring",className:t==="mentoring"?"active":"",onClick:l=>e("mentoring",l),children:"Менторство"}),c.jsx(oi,{href:"#projects",className:t==="projects"?"active":"",onClick:l=>e("projects",l),children:"Проєкти"})]}),c.jsx(N1,{href:"#contact",className:t==="contact"?"active":"",onClick:l=>e("contact",l),children:"Контакт"}),o&&c.jsx(W1,{type:"button",onClick:()=>s(),children:c.jsx(U1,{children:c.jsx("use",{href:`${_a}#icon-menuburger`})})})]})}),o&&r&&c.jsx(Um,{onClose:s,handleSetActiveLink:e})]})};Wm.propTypes={handleSetActiveLink:Yi.func.isRequired};const J1="/healthy-management-project/assets/hero1x-6AVSlzud.webp",ew="/healthy-management-project/assets/hero1x-d4IOBsel.jpg",tw=E.section`
  background-repeat: no-repeat;
  background-position: center;
  background-image: url(${ew});
  background-size: cover;
  margin-top: 130px;
  padding-top: 40px;
  padding-bottom: 40px;

  @media screen and (min-width: 768px) {
    background-repeat: no-repeat;
    background-position: center;
    background-image: url(${J1});
    background-size: cover;
    margin-top: 120px;
    padding-top: 296px;
    padding-bottom: 296px;
  }
`,nw=E.h1`
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
`,rw=E.h3`
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
`,iw=E.ul`
  margin-left: 20px;
  margin-top: 24px;
  margin-bottom: 48px;

  @media screen and (min-width: 768px) {
    margin-left: 38px;
    margin-top: 24px;
    margin-bottom: 40px;
  }
`,Gl=E.li`
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
`,ow=E.div`
  display: flex;
  flex-direction: column;
  gap: 24px;

  @media screen and (min-width: 768px) {
    display: flex;
    flex-direction: row;
    gap: 24px;
  }
`,pf=E.a`
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
`,aw=()=>c.jsx(tw,{id:"home",children:c.jsxs("div",{className:"container",children:[c.jsx(nw,{children:"Бізнес-партнер з розвитку та комунікацій здорового менеджменту"}),c.jsx(rw,{children:"Будуємо ефективні стратегії здорового менеджменту для медичних брендів:"}),c.jsxs(iw,{children:[c.jsx(Gl,{children:"медичний менеджмент і маркетинг,"}),c.jsx(Gl,{children:"програми управління здоров'ям для підприємств та бізнесу,"}),c.jsx(Gl,{children:"менторство"})]}),c.jsxs(ow,{children:[c.jsx(pf,{href:"#contact",children:"Консультація"}),c.jsx(pf,{href:"#services",children:"Послуги"})]})]})}),lw=E.section`
  padding-top: 24px;
  padding-bottom: 24px;

  @media screen and (min-width: 1920px) {
    padding-top: 80px;
    padding-bottom: 80px;
  }
`,sw=E.div`
  border-radius: 16px;
  padding: 24px;
  background: var(--background-bluedark);

  @media screen and (min-width: 1920px) {
    max-width: 100%;
    padding: 80px;
  }
`,uw=E.h2`
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
`,cw=E.ul`
  display: flex;
  padding: 0;
  flex-wrap: wrap;
  gap: 24px;
`,Co=E.li`
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
`,jo=E.svg`
  width: 80px;
  height: 80px;
`,Eo=E.div`
  display: flex;
  flex-direction: column;
`,_o=E.h3`
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
`,Oo=E.p`
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
`,dw=()=>c.jsx(lw,{className:"container",children:c.jsxs(sw,{children:[c.jsx(uw,{children:"Чому обирають нас"}),c.jsxs(cw,{children:[c.jsxs(Co,{children:[c.jsx(jo,{children:c.jsx("use",{href:`${ne}#hands-shake`})}),c.jsxs(Eo,{children:[c.jsx(_o,{children:"Надійне партнерство та менторство"}),c.jsx(Oo,{children:"Ми налаштовані на довгострокове партнерство і дбаємо про комфортні та чесні комунікації"})]})]}),c.jsxs(Co,{children:[c.jsx(jo,{children:c.jsx("use",{href:`${ne}#setting`})}),c.jsxs(Eo,{children:[c.jsx(_o,{children:"Індивідуальний підхід"}),c.jsx(Oo,{children:"Кожен бізнес і послуга мають свої особливості. Ми занурюємося у ваш бізнес і пропонуємо індивідуальні стратегії, які допоможуть вам досягти успіху"})]})]}),c.jsxs(Co,{children:[c.jsx(jo,{children:c.jsx("use",{href:`${ne}#icon-lamp`})}),c.jsxs(Eo,{children:[c.jsx(_o,{children:"Експертні послуги"}),c.jsx(Oo,{children:"Ми опираємося на передовий досвід і використовуємо як класичні, так і сучасні підходи для досягнення поставленого результату"})]})]}),c.jsxs(Co,{children:[c.jsx(jo,{children:c.jsx("use",{href:`${ne}#icon-puzzle`})}),c.jsxs(Eo,{children:[c.jsx(_o,{children:"Комплексні рішення"}),c.jsx(Oo,{children:"Наша експертиза дозволяє пропонувати комплексні рішення для ефективної співпраці"})]})]})]})]})}),hf="/healthy-management-project/assets/pic_mentorstvo1x-R5bIGNq0.webp",fw="/healthy-management-project/assets/pic_mentorstvo2x-k6d-_Us1.jpg",mf="/healthy-management-project/assets/mob_mentor1x-_de1iGBc.webp",pw="/healthy-management-project/assets/mob_mentor@2x-oAKhVwNJ.jpg",hw=E.section`
  padding-top: 80px;
  padding-bottom: 80px;
`,mw=E.div`
  display: flex;
  flex-direction: column;
  gap: 24px;

  @media screen and (min-width: 1920px) {
    gap: 40px;
    margin-bottom: 40px;
    flex-direction: row;
  }
`,gw=E.div`
  display: flex;
  flex-direction: column;
  gap: 16px;

  @media screen and (min-width: 1920px) {
    max-width: 828px;
    align-items: flex-start;
  }
`,vw=E.div`
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
`,yw=E.h2`
  font-size: 24px;
  font-weight: 600;
  line-height: 32px;
  color: var(--typography-black);

  @media screen and (min-width: 1920px) {
    font-size: 48px;
    line-height: 56px;
    margin-bottom: 40px;
  }
`,xw=E.h3`
  font-size: 18px;
  font-weight: 600;
  line-height: 24px;
  color: var(--typography-bluedark);

  @media screen and (min-width: 1920px) {
    font-size: 24px;
    line-height: 32px;
  }
`,gf=E.h3`
  font-size: 18px;
  font-weight: 600;
  line-height: 24px;
  color: var(--typography-white);

  @media screen and (min-width: 1920px) {
    font-size: 24px;
    line-height: 32px;
  }
`,ww=E.div`
  display: flex;
  flex-direction: column;
  gap: 24px;
  min-width: 320px;

  @media screen and (min-width: 1920px) {
    margin-bottom: 80px;
  }
`,vf=E.p`
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
`,Sw=E.a`
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
`,bw=E.div`
  display: flex;
  flex-direction: column;
  gap: 24px;

  @media screen and (min-width: 1920px) {
    gap: 40px;
    flex-direction: row;
  }
`,kw=E.div`
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
`,Cw=E.ul`
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
`,yf=E.ul`
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
`,dr=E.li`
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
`,fr=E.li`
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
`,jw=()=>c.jsxs(hw,{id:"mentoring",className:"container",children:[c.jsxs(mw,{children:[c.jsxs("div",{children:[c.jsx(Wr,{minWidth:1920,children:c.jsx("img",{srcSet:`${hf} 1920w, ${fw} 2x`,sizes:"(min-width: 1920px) 1920px",src:hf,alt:"Ольга Поліщук - ваш ментор в медичній галузі"})}),c.jsx(Wr,{minWidth:300,maxWidth:1919,children:c.jsx("img",{srcSet:`${mf} 375w, ${pw} 2x`,sizes:"(min-width: 375px) 375px",src:mf,alt:"Ольга Поліщук - ваш ментор в медичній галузі"})})]}),c.jsxs(gw,{children:[c.jsx(yw,{children:"Менторство"}),c.jsxs(ww,{children:[c.jsxs(vf,{children:[c.jsx("b",{children:"Менторство в медичній галузі"})," - почути іншу думку, підтвердити власні гіпотези, зрозуміти вектор розвитку, отримати підтримку та пораду з питань менеджменту і медичного маркетингу"]}),c.jsxs(vf,{children:[c.jsx("b",{children:"Менторство"})," - це про взаємодію та чесну комунікацію, про спільні цінності та готовність до росту, про надійне партнерство та довіру"]})]}),c.jsx(Sw,{href:"#contact",children:"Дізнатися вартість"})]})]}),c.jsx("div",{children:c.jsxs(bw,{children:[c.jsxs(vw,{children:[c.jsx(xw,{children:"Про що це?"}),c.jsxs(Cw,{children:[c.jsx(dr,{children:c.jsx("p",{children:"Про прагнення почути чесну іншу думку/та або підтвердити власні гіпотези для власника/керівника"})}),c.jsx(dr,{children:c.jsx("p",{children:"Про бізнес-процеси та їх ефективність"})}),c.jsx(dr,{children:c.jsx("p",{children:"Про вектори розвитку бізнесу або проєкту"})}),c.jsx(dr,{children:c.jsx("p",{children:"Про практичний інструментарій для впровадження змін"})}),c.jsx(dr,{children:c.jsx("p",{children:"Про маркетинг, сервіс та комунікації в медичних бізнесах"})}),c.jsx(dr,{children:c.jsx("p",{children:"Про здоров'я працівників та стратегії підвищенння ефективності бізнесу"})})]})]}),c.jsxs(kw,{children:[c.jsx(gf,{children:"Для кого"}),c.jsxs(yf,{children:[c.jsx(fr,{children:c.jsx("p",{children:"Лідерам, які прагнуть змін"})}),c.jsx(fr,{children:c.jsx("p",{children:"Власникам, які хочуть отримати незалежку експертну думку"})}),c.jsx(fr,{children:c.jsx("p",{children:"Керівникам та маркетологам, яким потрібна підтримка"})}),c.jsx(fr,{children:c.jsx("p",{children:"Лікарям, яким важливо отримати пораду"})})]}),c.jsx(gf,{children:"Формат"}),c.jsxs(yf,{children:[c.jsx(fr,{children:c.jsx("p",{children:"Індивідуальна ментор-сесія (від 1 години)"})}),c.jsx(fr,{children:c.jsx("p",{children:"Персональний супровід на декілька місяців"})})]})]})]})})]}),Hm=E.section`
  padding-top: 24px;
  padding-bottom: 24px;

  @media screen and (min-width: 1920px) {
    padding-top: 80px;
    padding-bottom: 80px;
  }
`,Bm=E.div`
  padding: 24px;
  border-radius: 16px;
  box-shadow: 0px 0px 8px 0px rgba(27, 54, 65, 0.08);
  background: var(--background-white);

  @media screen and (min-width: 1920px) {
    padding: 80px;
  }
`,Ew=E.div`
  display: flex;
  flex-direction: column;
  gap: 3px;

  @media screen and (min-width: 1290px) {
    flex-direction: row;
    justify-content: space-between;
  }
`,Po=E.div`
  position: relative;

  @media screen and (min-width: 1920px) {
    min-width: 370px;
  }
`,Qm=E.div`
  display: flex;
  flex-direction: column;

  @media screen and (min-width: 1290px) {
    gap: 40px;
    margin-bottom: 40px;
    flex-direction: row;
  }
`,Ym=E.div`
  min-width: 280px;
  gap: 16px;
  display: flex;
  flex-direction: column;

  @media screen and (min-width: 1920px) {
    min-width: 740px;
  }
`,Km=E.div`
  @media screen and (min-width: 1920px) {
    padding: 24px;
  }
`,Mo=E.p`
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
`,Gm=E.h2`
  color: var(--typography-black);
  font-size: 24px;
  font-weight: 600;
  line-height: 32px;

  @media screen and (min-width: 1920px) {
    font-size: 48px;
    line-height: 56px;
  }
`,Xm=E.h3`
  font-size: 18px;
  font-weight: 600;
  line-height: 1.3;
  margin-bottom: 24px;
  color: var(--typography-bluedark);

  @media screen and (min-width: 1920px) {
    font-size: 24px;
    margin-bottom: 16px;
  }
`,Zm=E.p`
  font-size: 16px;
  line-height: 24px;
  color: var(--typography-bluedark);

  @media screen and (min-width: 1920px) {
    font-size: 20px;
    font-weight: 500;
    line-height: 1.4;
  }
`,qm=E.p`
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
`,Jm=E.a`
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
`,eg=E.p`
  font-size: 18px;
  line-height: 1.3;
  font-weight: 600;
  margin-bottom: 16px;

  color: var(--typography-bluedark);

  @media screen and (min-width: 1920px) {
    font-size: 24px;
    margin-bottom: 24px;
  }
`,tg=E.ul`
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
`,Vt=E.li`
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
`,Cn=E.svg`
  width: 266px;
  height: 56px;

  @media screen and (min-width: 1920px) {
    width: 370px;
    height: 80px;
  }
`;function _w(e,t){if(t===e)return!1;const n=Object.values(t),r=Object.values(e);if(n.length!==r.length||n.some((o,a)=>o!==r[a]))return!0;const i=Object.keys(e);return Object.keys(t).some((o,a)=>o!==i[a])}function Ow(e,t){return e.matches[t]=!1,e.mediaQueries[t]={},e}function ng(e){const t=Object.keys(e);return typeof window>"u"?t.reduce(Ow,{mediaQueries:{},matches:{}}):t.reduce((n,r)=>{const i=window.matchMedia(e[r]);return n.mediaQueries[r]=i,n.matches[r]=i.matches,n},{mediaQueries:{},matches:{}})}function Pw(e,t){function n(r,i){return r[i]=e.mediaQueries[i].matches,r}switch(t.type){case"updateMatches":return{matches:Object.keys(e.mediaQueries).reduce(n,{}),mediaQueries:e.mediaQueries};case"setQueries":return ng(t.queries)}}function Mw(e){const t=T.useRef(e),[n,r]=T.useReducer(Pw,e,ng);T.useEffect(()=>{_w(e,t.current)&&(r({type:"setQueries",queries:e}),t.current=e)},[e]);function i(){return r({type:"updateMatches"})}function o(l){const u=i;return typeof l.addListener<"u"?l.addListener(u):l.addEventListener("change",u),u}T.useEffect(()=>{const l=Object.values(n.mediaQueries),u=l.map(o);function p(h,m){typeof h.addListener<"u"?h.removeListener(u[m]):h.removeEventListener("change",u[m])}return()=>{l.forEach(p)}},[n.mediaQueries]);const{matches:a}=n,s=T.useMemo(()=>Object.values(a),[a]);return{matches:a,matchesAny:s.some(Boolean),matchesAll:s.length>0&&s.every(Boolean)}}function rg(e){return Mw(Tw(e)).matchesAll}const Xl={};function Tw(e){return Xl[e]===void 0&&(Xl[e]={default:e}),Xl[e]}const Iw=()=>{const e=rg("(max-width: 768px)");return c.jsx(Hm,{className:"container",children:c.jsxs(Bm,{children:[c.jsxs(Qm,{children:[c.jsxs(Ym,{children:[c.jsx(Gm,{children:"Індивідуальна ментор сесія"}),c.jsx(Zm,{children:"Вирішення вашого індивідуального запиту"}),c.jsx(qm,{children:"від 1 години"}),c.jsx(Jm,{href:"#contact",children:"Замовити послугу"})]}),c.jsxs(Km,{children:[c.jsx(Xm,{children:"Питання, з якими можете звернутися"}),c.jsxs(tg,{children:[c.jsx(Vt,{children:"Незалежна думка щодо маркетингу та розвитку"}),c.jsx(Vt,{children:"Порада по створенню відділу маркетингу або оцінка існуючої структури"}),c.jsx(Vt,{children:"Питання по роботі з підрядниками"}),c.jsx(Vt,{children:"Порада щодо оптимізації бізнес-процесів"}),c.jsx(Vt,{children:"Як вірно оцінити ефективність маркетингових дій"}),c.jsx(Vt,{children:"Які інструменти комунікацій використовувати"}),c.jsxs(Vt,{children:["Особисте питання по менеджменту та розвитку з питань управління"," ","здоров'ям"]})]})]})]}),c.jsx(eg,{children:"Шлях проведення менторської сесії"}),c.jsxs(Ew,{children:[c.jsxs(Po,{children:[e?c.jsx(Cn,{children:c.jsx("use",{href:`${ne}#icon-rectangle-mob`})}):c.jsx(Cn,{children:c.jsx("use",{href:`${ne}#icon-rectangle`})}),c.jsx(Mo,{children:"Заповнення брифу"})]}),c.jsxs(Po,{children:[e?c.jsx(Cn,{children:c.jsx("use",{href:`${ne}#icon-rectangle-mob`})}):c.jsx(Cn,{children:c.jsx("use",{href:`${ne}#icon-rectangle`})}),c.jsx(Mo,{children:"Діагностика ситуації"})]}),c.jsxs(Po,{children:[e?c.jsx(Cn,{children:c.jsx("use",{href:`${ne}#icon-rectangle-mob`})}):c.jsx(Cn,{children:c.jsx("use",{href:`${ne}#icon-rectangle`})}),c.jsx(Mo,{children:"Проведення сесії"})]}),c.jsxs(Po,{children:[e?c.jsx(Cn,{children:c.jsx("use",{href:`${ne}#icon-rectangle-mob`})}):c.jsx(Cn,{children:c.jsx("use",{href:`${ne}#icon-rectangle`})}),c.jsx(Mo,{children:"Рекомендації"})]})]})]})})},Rw=E.div`
  display: flex;
  flex-direction: column;
  gap: 3px;

  @media screen and (min-width: 1920px) {
    flex-direction: row;
    justify-content: space-between;
    gap: 24px;
  }
`,Ht=E.svg`
  width: 260px;
  height: 60px;

  @media screen and (min-width: 1920px) {
    width: 285px;
    height: 80px;
  }
`,ai=E.div`
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
`;const li=E.p`
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
`,Lw=()=>{const e=rg("(max-width: 768px)");return c.jsx(Hm,{className:"container",children:c.jsxs(Bm,{children:[c.jsxs(Qm,{children:[c.jsxs(Ym,{children:[c.jsx(Gm,{children:"Персональний супровід"}),c.jsx(Zm,{children:"Пропрацьовуємо ваші запити та досягаємо посавлених цілей"}),c.jsx(qm,{children:"від 2 місяців тісної взаємодії"}),c.jsx(Jm,{href:"#contact",children:"Замовити послугу"})]}),c.jsxs(Km,{children:[c.jsx(Xm,{children:"Питання, з якими можете звернутися"}),c.jsxs(tg,{children:[c.jsx(Vt,{children:"Зануритись в бізнес-процеси та зрозуміти, де є точки зростання"}),c.jsx(Vt,{children:"Зрозуміти що таке маркетинг та як він працює у вашому бізнесі"}),c.jsx(Vt,{children:"Супровід розробки та впровадження стратегій"}),c.jsx(Vt,{children:"Особисті питання по медичному менеджменту, маркетингу та розвитку, управління здоров'ям"})]})]})]}),c.jsx(eg,{children:"Шлях проведення менторського супроводу"}),c.jsxs(Rw,{children:[c.jsxs(ai,{children:[e?c.jsx(Ht,{children:c.jsx("use",{href:`${ne}#icon-rectangle-mob`})}):c.jsx(Ht,{children:c.jsx("use",{href:`${ne}#icon-rectangle2`})}),c.jsx(li,{children:"Заповнення брифу"})]}),c.jsxs(ai,{children:[e?c.jsx(Ht,{children:c.jsx("use",{href:`${ne}#icon-rectangle-mob`})}):c.jsx(Ht,{children:c.jsx("use",{href:`${ne}#icon-rectangle2`})}),c.jsx(li,{children:"Діагностика ситуації"})]}),c.jsxs(ai,{children:[e?c.jsx(Ht,{children:c.jsx("use",{href:`${ne}#icon-rectangle-mob`})}):c.jsx(Ht,{children:c.jsx("use",{href:`${ne}#icon-rectangle2`})}),c.jsx(li,{children:"Визначення зон росту"})]}),c.jsxs(ai,{children:[e?c.jsx(Ht,{children:c.jsx("use",{href:`${ne}#icon-rectangle-mob`})}):c.jsx(Ht,{children:c.jsx("use",{href:`${ne}#icon-rectangle2`})}),c.jsx(li,{children:"Менторинг"})]}),c.jsxs(ai,{children:[e?c.jsx(Ht,{children:c.jsx("use",{href:`${ne}#icon-rectangle-mob`})}):c.jsx(Ht,{children:c.jsx("use",{href:`${ne}#icon-rectangle2`})}),c.jsx(li,{children:"Рекомендації"})]})]})]})})},ml=()=>{const e=Zn.useMediaQuery({maxWidth:767}),t=Zn.useMediaQuery({minWidth:768,maxWidth:1439}),n=Zn.useMediaQuery({minWidth:1440,maxWidth:1919}),r=Zn.useMediaQuery({minWidth:1920});return e&&"mobile"||t&&"tablet"||n&&"desktop"||r&&"largeDesktop"},Dw="/healthy-management-project/assets/denta_derm1x-JWCICTe_.webp",Vw="/healthy-management-project/assets/medialt1x-5LMkh0v8.webp",Fw="/healthy-management-project/assets/cures1x--AoJBOWJ.webp",Aw="/healthy-management-project/assets/clinic1x-YgK5Wnno.webp",zw="/healthy-management-project/assets/kmklam1x-FlPeEOTs.webp",$w="/healthy-management-project/assets/symmetrica1x-hhcOddzB.webp",Zl=[{image:Dw,category:"DentaDerm",title:"Діагностика бізнес-процесів, маркетингу, сервісу, розробка стратегії розвитку, менторство",about:["Діагностика бізнес-процесів та маркетингу","Стратегія розвитку","Підбір команди маркетингу","Менторство"],details:[{title:"Завдання:",about:["Розробка стратегії розвитку","Розробка нового сайту клініки","Пошук команди маркетингу"],comment:"Дії в результаті розробки стратегії розвитку передбачали роботу над проєктом в новому позиціонуванні,  пошук зовнішньої та внутрішньої команди для реалізації нового сайту, ведення соцмереж"},{title:"В результаті роботи над проєктом:",about:["Розроблені вектори розвитку","Розроблений та впроваджений новий сайт","Підібрана команда маркетингового супроводу"],comment:"В результаті співпраці партнер отримав комплексне бачення просування, сформована команда маркетингу"}]},{image:Vw,category:"Medialt",title:"Діагностика бізнес-процесів, маркетингу, сервісу, розробка стратегії розвитку, менторство",about:["Аудит ринку та конкурентів","Аудит маркетингу та сервісу","Розробка стратегії розвитку"],details:[{title:"Завдання:",about:["Розробка стратегії розвитку"]},{title:"Робота над задачою була розділена на два етапи:",about:["Аналіз конкурентів, ринку, виявлення зовнішніх можливостей та загроз","Аналіз сервісу медичного центру, аналіз роботи контакт центру, маркетингу, наявної бази пацієнтів та внутрішніх бізнес-процесів"]},{title:"В результаті комплексного аудиту підготували стратегію розвитку, яка передбачала рекомендації щодо:",about:["Управління маркетингом","Оптимізації роботи сервісу","Можливості МІС","Етапи розвитку напрямків та клініки вцілому"],comment:"В результаті співпраці - за 5 місяців ріст обороту в два рази"}]},{image:Fw,category:"Cures",title:"Автоматизація комунікації з пацієнтами",about:["Створення та запуск 20 чат-ботів для клінік","Проведення консультацій та аудитів комунікацій клінік з пацієнтами","Розробка персональних протоколів спілкування з пацієнтами"],details:[{title:"Завдання:",about:["Автоматизація комунікації з пацієнтами"]},{title:"В результаті роботи над проєктом:",about:["Розвиток проєкту по створенню чат-ботів для медичних центрів","Розробка протоколів супроводу та опитувальників для клінік","Проведення зустрічей та комунікацій з клініками","Розробка алгоритмів та запуск чат-ботів"],comment:"В результаті співпраці над проєктом запуск 20 чат-ботів для медичних центрів"}]},{image:Aw,category:"Клініка ім. ак. Юрія Спіженка",title:"Менторство, діагностика бізнес-процесів, маркетингу та сервісу, розробка стратегії розвитку",about:["Діагностика бізнес-процесів","Аудит маркетингу та сервісу","Розробка стратегії розвитку та маркетингу","Розробка та впровадження комунікаційної стратегії","Ведення маркетингових активностей "],details:[{title:"Завдання:",about:["Рестарт клініки у воєний час"]},{title:"Робота над задачею була розділена на три етапи:",about:["Діагностика конкурентів, ринку, виявлення зовнішніх можливостей та загроз","Діагностика сервісу медичного центру, аналіз роботи контакт центру, маркетингу, наявної бази пацієнтів та внутрішніх бізнес-процесів","Розробка та впровадження стратегії маркетингу, комунікації та сервісу, супровід рекламних кампаній, оптимізація бізнес-процесів"],comment:"В результаті співпраці над проєктом: збільшення доходу клініки, вихід на довоєний об’єм"}]},{image:zw,category:"KMKlab",title:"Діагностика маркетингу, сервісу, бізнес-процесів",about:["Аудит маркетингу та інструментів комунікацій","Аудит сервісу","Розробка рекомендацій щодо розвитку"],details:[{title:"Завдання:",about:["Аудит поточної маркетингової стратегії","Аудит сервісу","Формування рекомендацій по розвитку"]},{title:"Робота над задачою була розділена на два етапи:",about:["Відвідування всіх відділень лабораторій з метою формування рекомендацій по кожній локації","Аналіз поточної ситуації маркетингу та комунікацій, ведення соціальних мереж"],comment:"В результаті співпраці проаналізовано роботу відділу маркетингу та підрядників та надані рекомендації щодо структури відділу, сформовані подальші  кроки  маркетингової  та сервісної стратегії"}]},{image:$w,category:"Symmetrica",title:"Менторство, діагностика маркетингу, сервісу, бізнес-процесів",about:["Аудит маркетингу та сервісу","Розробка рекомендацій щодо розвитку","Оптимізація бізнес-процесів"],details:[{title:"Завдання:",about:["Діагностика поточної маркетингової діяльності та комунікацій","Аудит сервісу","Аудит роботи підрядників","Формування рекомендацій по розвитку"]},{title:"В результаті роботи над проєктом:",about:["Проведений поточний аудит шляху пацієнта, виявлені точки зростання сервісу","Проаналізовано роботу відділу маркетингу і підрядників та надані рекомендації щодо структури відділу","Надані рекомендації щодо формування подальших кроків маркетингової  та сервісної стратегії","Сформовані конверсійні показники та вектори руху","Надана менторська підтримка"]}]}],Nw=E.section`
  padding-top: 40px;
  padding-bottom: 40px;
  @media screen and (min-width: 768px) {
    padding-top: 80px;
    padding-bottom: 80px;
  }
`,Uw=E.h2`
  font-size: 48px;
  font-weight: 600;
  line-height: calc(56 / 48);

  margin-bottom: 40px;
`,Ww=E.ul`
  display: flex;
  gap: 24px;
  flex-wrap: wrap;
  @media screen and (min-width: 768px) {
  }
`,Hw=E.span`
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
`,Bw=E.svg`
  fill: currentColor;
  stroke: currentColor;

  width: 24px;
  height: 24px;
`,Qw=E.li`
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
`,Yw=E.div`
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
`,Kw=E.div`
  display: flex;
  flex-direction: column;
  gap: 16px;
`,Gw=E.h4`
  font-size: ${e=>e.forDetail?"18px":"16px"};
  font-weight: 600;
  line-height: calc(${e=>e.forDetail?24/18:24/16});

  @media screen and (min-width: 768px) {
    font-size: ${e=>e.forDetail?"24px":"20px"};
    line-height: calc(${e=>e.forDetail?32/24:28/20});
  }
`,Xw=E.ul`
  display: flex;
  flex-direction: column;
  gap: 8px;
`,Zw=E.li`
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
`,qw=E.p`
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
`,Jw=E.svg`
  fill: currentColor;
  stroke: currentColor;
`,kc=({title:e,about:t,comment:n,additionalComment:r=!1})=>c.jsxs(Kw,{children:[c.jsx(Gw,{forDetail:r,children:e}),c.jsx(Xw,{children:t==null?void 0:t.map(i=>c.jsxs(Zw,{children:[c.jsx(Jw,{children:c.jsx("use",{href:ne+"#icon-done"})}),i]},i))}),n&&c.jsx(qw,{additionalComment:r,children:n})]}),eS=E.div`
  padding: 24px;
  display: flex;
  gap: 24px;
  flex-direction: column;

  color: var(--background-whitegrey, #f4f4f6);
  @media screen and (min-width: 768px) {
    padding: 40px;
  }
`,tS=E.h3`
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
`,nS=E.svg`
  fill: currentColor;
  stroke: currentColor;

  width: 24px;
  height: 24px;

  position: absolute;
  right: 28px;
  top: 28px;
`,rS=({dataList:{details:e,category:t}})=>{const n=ml();return c.jsxs(eS,{children:[c.jsxs("div",{children:[c.jsx(tS,{symbols:t.length,children:t}),n==="mobile"&&c.jsx(nS,{children:c.jsx("use",{href:ne+"#icon-close"})})]}),e.map((r,i)=>c.jsx(kc,{title:r.title,about:r.about,comment:r.comment,additionalComment:i===0},r.title))]})},iS=E.div`
  display: flex;
  flex-direction: column;
  gap: 24px;

  color: var(--typography-bluedark, #1b3641);
`,oS=E.h3`
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
`,aS=E.img`
  height: 279px;
  width: 100%;
  border-radius: 8px;
  object-fit: cover;
  @media screen and (min-width: 768px) {
    height: 300px;
  }
`,lS=E.span`
  font-size: 14px;
  font-weight: 600;
  line-height: calc(18 / 14);
  text-align: center;
`,sS=({dataList:e,onClick:t})=>{const n=ml(),{category:r,title:i,about:o=[],image:a}=e;return c.jsxs(iS,{onClick:t,children:[c.jsx(aS,{src:a,alt:i}),c.jsx("div",{children:c.jsx(oS,{symbols:r.length,children:r})}),c.jsx(kc,{title:i,about:o}),n==="mobile"&&c.jsx(lS,{children:"Детальніше"})]})},uS=({item:e})=>{const[t,n]=T.useState(!1),r=ml(),i=()=>{r==="mobile"&&n(o=>!o)};return c.jsxs(Qw,{children:[c.jsx(sS,{dataList:e,onClick:i}),c.jsx(Yw,{isVisible:t,onClick:i,image:e.image,className:!t&&r==="mobile"?"visually-hidden":"",children:c.jsx(rS,{dataList:e})})]})},cS=()=>{const e=ml(),[t,n]=T.useState(e==="mobile"?[...Zl.slice(0,3)]:[...Zl]),r=()=>{t.length>4?n(i=>i.slice(0,3)):n([...Zl])};return c.jsxs(Nw,{id:"projects",className:"container",style:{paddingTop:"80px",paddingBottom:"80px"},children:[c.jsx(Uw,{children:"Проєкти"}),c.jsx(Ww,{children:t.map(i=>c.jsx(uS,{item:i},i.category))}),e==="mobile"&&c.jsxs(Hw,{onClick:r,children:[t.length>3?"Менше проєктів":"Більше проєктів",c.jsx(Bw,{children:c.jsx("use",{href:ne+`${t.length>3?"#icon-arrowup":"#icon-arrowdown"}`})})]})]})},dS=E.section`
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
`,fS=E.div`
  padding: 24px;
  border-radius: 16px;
  background: var(--background-white);

  @media screen and (min-width: 1920px) {
    padding: 80px;
    max-width: 828px;
    box-shadow: 0px 0px 8px 0px rgba(27, 54, 65, 0.08);
  }
`,pS=E.div`
  display: flex;
  flex-direction: column;
  gap: 16px;
  margin-bottom: 24px;

  @media screen and (min-width: 1920px) {
    gap: 40px;
    margin-bottom: 40px;
  }
`,hS=E.h2`
  color: var(--typography-bluedark);
  font-size: 24px;
  font-weight: 600;
  line-height: 32px;

  @media screen and (min-width: 1920px) {
    font-size: 48px;
    line-height: 56px;
  }
`,mS=E.h2`
  color: var(--typography-bluedark);
  font-weight: 500;
  font-size: 16px;
  line-height: 24px;

  @media screen and (min-width: 1920px) {
    font-size: 20px;
    line-height: 28px;
  }
`,gS=E.ul`
  display: flex;
  flex-direction: column;
  gap: 16px;

  @media screen and (min-width: 1920px) {
    gap: 24px;
  }
`,ql=E.li`
  display: flex;
  align-items: center;
  gap: 16px;
  border-radius: 16px;
  background: var(--background-whitegrey);
  padding: 16px;
`,Jl=E.svg`
  width: 24px;
  height: 24px;
  fill: var(--background-white);
  stroke-width: 4px;
`,es=E.p`
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
`,vS=E.img`
  width: 100%;
  height: 327px;
  border-radius: 16px;

  @media screen and (min-width: 1920px) {
    width: 828px;
    height: 664px;
  }
`,yS="/healthy-management-project/assets/olga_with_book1x-kIN8FAVO.webp",xS="/healthy-management-project/assets/olga_with_book1x-KTuULWu1.jpg",wS="/healthy-management-project/assets/olga_with_book2x-lES61yI6.jpg",SS=()=>c.jsxs(dS,{className:"container",children:[c.jsxs(fS,{children:[c.jsxs(pS,{children:[c.jsx(hS,{children:"Принципи роботи"}),c.jsx(mS,{children:"Наші принципи роботи полягають у співдії з ціннісними брендами та командами, які готові до чесної співпраці, щоб сприяти досягненню поставлених цілей. Готові ділитися власним досвідом та створювати стратегії здорового менеджменту та розвитку, маркетингу та сервісу"})]}),c.jsxs(gS,{children:[c.jsxs(ql,{children:[c.jsx(Jl,{children:c.jsx("use",{href:`${ne}#icon-done-yellow`})}),c.jsx(es,{children:"Більше 18 років досвіду в маркетингу та комунікаціях"})]}),c.jsxs(ql,{children:[c.jsx(Jl,{children:c.jsx("use",{href:`${ne}#icon-done-yellow`})}),c.jsx(es,{children:"Глибоке розуміння бізнес-процесів медичних закладів"})]}),c.jsxs(ql,{children:[c.jsx(Jl,{children:c.jsx("use",{href:`${ne}#icon-done-yellow`})}),c.jsx(es,{children:"Використання принципів доказової медицини"})]})]})]}),c.jsxs("picture",{children:[c.jsx("source",{srcSet:`${wS} 2x, ${xS} 1x`,media:"(min-width: 1920px)"}),c.jsx(vS,{src:yS,alt:"Ольга Поліщук"})]})]}),bS=E.button`
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
`,kS=()=>{const[e,t]=T.useState(!1);T.useEffect(()=>{const r=()=>{const i=window.scrollY,o=document.getElementById("footer"),a=window.innerHeight+window.scrollY-o.offsetTop,s=Math.max(80,a);t(i>480||a>80),document.documentElement.style.setProperty("--scroll-to-top-bottom",`${s}px`)};return window.addEventListener("scroll",r),()=>{window.removeEventListener("scroll",r)}},[]);const n=()=>{window.scrollTo({top:0,behavior:"smooth"})};return c.jsx(c.Fragment,{children:e&&c.jsx("section",{className:"container",children:c.jsx(bS,{onClick:n,children:c.jsx("svg",{width:"24",height:"24",children:c.jsx("use",{href:`${ne}#icon-arrowup`})})})})})};function ar(e){"@babel/helpers - typeof";return ar=typeof Symbol=="function"&&typeof Symbol.iterator=="symbol"?function(t){return typeof t}:function(t){return t&&typeof Symbol=="function"&&t.constructor===Symbol&&t!==Symbol.prototype?"symbol":typeof t},ar(e)}function CS(e,t){if(ar(e)!=="object"||e===null)return e;var n=e[Symbol.toPrimitive];if(n!==void 0){var r=n.call(e,t||"default");if(ar(r)!=="object")return r;throw new TypeError("@@toPrimitive must return a primitive value.")}return(t==="string"?String:Number)(e)}function ig(e){var t=CS(e,"string");return ar(t)==="symbol"?t:String(t)}function mi(e,t,n){return t=ig(t),t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function xf(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter(function(i){return Object.getOwnPropertyDescriptor(e,i).enumerable})),n.push.apply(n,r)}return n}function K(e){for(var t=1;t<arguments.length;t++){var n=arguments[t]!=null?arguments[t]:{};t%2?xf(Object(n),!0).forEach(function(r){mi(e,r,n[r])}):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):xf(Object(n)).forEach(function(r){Object.defineProperty(e,r,Object.getOwnPropertyDescriptor(n,r))})}return e}function jS(e){if(Array.isArray(e))return e}function ES(e,t){var n=e==null?null:typeof Symbol<"u"&&e[Symbol.iterator]||e["@@iterator"];if(n!=null){var r,i,o,a,s=[],l=!0,u=!1;try{if(o=(n=n.call(e)).next,t===0){if(Object(n)!==n)return;l=!1}else for(;!(l=(r=o.call(n)).done)&&(s.push(r.value),s.length!==t);l=!0);}catch(p){u=!0,i=p}finally{try{if(!l&&n.return!=null&&(a=n.return(),Object(a)!==a))return}finally{if(u)throw i}}return s}}function fu(e,t){(t==null||t>e.length)&&(t=e.length);for(var n=0,r=new Array(t);n<t;n++)r[n]=e[n];return r}function og(e,t){if(e){if(typeof e=="string")return fu(e,t);var n=Object.prototype.toString.call(e).slice(8,-1);if(n==="Object"&&e.constructor&&(n=e.constructor.name),n==="Map"||n==="Set")return Array.from(e);if(n==="Arguments"||/^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n))return fu(e,t)}}function _S(){throw new TypeError(`Invalid attempt to destructure non-iterable instance.
In order to be iterable, non-array objects must have a [Symbol.iterator]() method.`)}function un(e,t){return jS(e)||ES(e,t)||og(e,t)||_S()}function OS(e,t){if(e==null)return{};var n={},r=Object.keys(e),i,o;for(o=0;o<r.length;o++)i=r[o],!(t.indexOf(i)>=0)&&(n[i]=e[i]);return n}function mn(e,t){if(e==null)return{};var n=OS(e,t),r,i;if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(i=0;i<o.length;i++)r=o[i],!(t.indexOf(r)>=0)&&Object.prototype.propertyIsEnumerable.call(e,r)&&(n[r]=e[r])}return n}var PS=["defaultInputValue","defaultMenuIsOpen","defaultValue","inputValue","menuIsOpen","onChange","onInputChange","onMenuClose","onMenuOpen","value"];function MS(e){var t=e.defaultInputValue,n=t===void 0?"":t,r=e.defaultMenuIsOpen,i=r===void 0?!1:r,o=e.defaultValue,a=o===void 0?null:o,s=e.inputValue,l=e.menuIsOpen,u=e.onChange,p=e.onInputChange,h=e.onMenuClose,m=e.onMenuOpen,x=e.value,g=mn(e,PS),y=T.useState(s!==void 0?s:n),S=un(y,2),d=S[0],f=S[1],v=T.useState(l!==void 0?l:i),w=un(v,2),k=w[0],O=w[1],j=T.useState(x!==void 0?x:a),P=un(j,2),M=P[0],I=P[1],U=T.useCallback(function(F,B){typeof u=="function"&&u(F,B),I(F)},[u]),D=T.useCallback(function(F,B){var Q;typeof p=="function"&&(Q=p(F,B)),f(Q!==void 0?Q:F)},[p]),R=T.useCallback(function(){typeof m=="function"&&m(),O(!0)},[m]),G=T.useCallback(function(){typeof h=="function"&&h(),O(!1)},[h]),q=s!==void 0?s:d,J=l!==void 0?l:k,me=x!==void 0?x:M;return K(K({},g),{},{inputValue:q,menuIsOpen:J,onChange:U,onInputChange:D,onMenuClose:G,onMenuOpen:R,value:me})}function TS(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}function wf(e,t){for(var n=0;n<t.length;n++){var r=t[n];r.enumerable=r.enumerable||!1,r.configurable=!0,"value"in r&&(r.writable=!0),Object.defineProperty(e,ig(r.key),r)}}function IS(e,t,n){return t&&wf(e.prototype,t),n&&wf(e,n),Object.defineProperty(e,"prototype",{writable:!1}),e}function pu(e,t){return pu=Object.setPrototypeOf?Object.setPrototypeOf.bind():function(r,i){return r.__proto__=i,r},pu(e,t)}function RS(e,t){if(typeof t!="function"&&t!==null)throw new TypeError("Super expression must either be null or a function");e.prototype=Object.create(t&&t.prototype,{constructor:{value:e,writable:!0,configurable:!0}}),Object.defineProperty(e,"prototype",{writable:!1}),t&&pu(e,t)}function Oa(e){return Oa=Object.setPrototypeOf?Object.getPrototypeOf.bind():function(n){return n.__proto__||Object.getPrototypeOf(n)},Oa(e)}function LS(){if(typeof Reflect>"u"||!Reflect.construct||Reflect.construct.sham)return!1;if(typeof Proxy=="function")return!0;try{return Boolean.prototype.valueOf.call(Reflect.construct(Boolean,[],function(){})),!0}catch{return!1}}function DS(e){if(e===void 0)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return e}function VS(e,t){if(t&&(ar(t)==="object"||typeof t=="function"))return t;if(t!==void 0)throw new TypeError("Derived constructors may only return object or undefined");return DS(e)}function FS(e){var t=LS();return function(){var r=Oa(e),i;if(t){var o=Oa(this).constructor;i=Reflect.construct(r,arguments,o)}else i=r.apply(this,arguments);return VS(this,i)}}function AS(e){if(Array.isArray(e))return fu(e)}function zS(e){if(typeof Symbol<"u"&&e[Symbol.iterator]!=null||e["@@iterator"]!=null)return Array.from(e)}function $S(){throw new TypeError(`Invalid attempt to spread non-iterable instance.
In order to be iterable, non-array objects must have a [Symbol.iterator]() method.`)}function Cc(e){return AS(e)||zS(e)||og(e)||$S()}function NS(e,t){return t||(t=e.slice(0)),Object.freeze(Object.defineProperties(e,{raw:{value:Object.freeze(t)}}))}const US=Math.min,WS=Math.max,Pa=Math.round,To=Math.floor,Ma=e=>({x:e,y:e});function HS(e){return{...e,top:e.y,left:e.x,right:e.x+e.width,bottom:e.y+e.height}}function ag(e){return sg(e)?(e.nodeName||"").toLowerCase():"#document"}function Nt(e){var t;return(e==null||(t=e.ownerDocument)==null?void 0:t.defaultView)||window}function lg(e){var t;return(t=(sg(e)?e.ownerDocument:e.document)||window.document)==null?void 0:t.documentElement}function sg(e){return e instanceof Node||e instanceof Nt(e).Node}function hu(e){return e instanceof Element||e instanceof Nt(e).Element}function jc(e){return e instanceof HTMLElement||e instanceof Nt(e).HTMLElement}function Sf(e){return typeof ShadowRoot>"u"?!1:e instanceof ShadowRoot||e instanceof Nt(e).ShadowRoot}function ug(e){const{overflow:t,overflowX:n,overflowY:r,display:i}=Ec(e);return/auto|scroll|overlay|hidden|clip/.test(t+r+n)&&!["inline","contents"].includes(i)}function BS(){return typeof CSS>"u"||!CSS.supports?!1:CSS.supports("-webkit-backdrop-filter","none")}function QS(e){return["html","body","#document"].includes(ag(e))}function Ec(e){return Nt(e).getComputedStyle(e)}function YS(e){if(ag(e)==="html")return e;const t=e.assignedSlot||e.parentNode||Sf(e)&&e.host||lg(e);return Sf(t)?t.host:t}function cg(e){const t=YS(e);return QS(t)?e.ownerDocument?e.ownerDocument.body:e.body:jc(t)&&ug(t)?t:cg(t)}function Ta(e,t,n){var r;t===void 0&&(t=[]),n===void 0&&(n=!0);const i=cg(e),o=i===((r=e.ownerDocument)==null?void 0:r.body),a=Nt(i);return o?t.concat(a,a.visualViewport||[],ug(i)?i:[],a.frameElement&&n?Ta(a.frameElement):[]):t.concat(i,Ta(i,[],n))}function KS(e){const t=Ec(e);let n=parseFloat(t.width)||0,r=parseFloat(t.height)||0;const i=jc(e),o=i?e.offsetWidth:n,a=i?e.offsetHeight:r,s=Pa(n)!==o||Pa(r)!==a;return s&&(n=o,r=a),{width:n,height:r,$:s}}function _c(e){return hu(e)?e:e.contextElement}function ts(e){const t=_c(e);if(!jc(t))return Ma(1);const n=t.getBoundingClientRect(),{width:r,height:i,$:o}=KS(t);let a=(o?Pa(n.width):n.width)/r,s=(o?Pa(n.height):n.height)/i;return(!a||!Number.isFinite(a))&&(a=1),(!s||!Number.isFinite(s))&&(s=1),{x:a,y:s}}const GS=Ma(0);function XS(e){const t=Nt(e);return!BS()||!t.visualViewport?GS:{x:t.visualViewport.offsetLeft,y:t.visualViewport.offsetTop}}function ZS(e,t,n){return t===void 0&&(t=!1),!n||t&&n!==Nt(e)?!1:t}function bf(e,t,n,r){t===void 0&&(t=!1),n===void 0&&(n=!1);const i=e.getBoundingClientRect(),o=_c(e);let a=Ma(1);t&&(r?hu(r)&&(a=ts(r)):a=ts(e));const s=ZS(o,n,r)?XS(o):Ma(0);let l=(i.left+s.x)/a.x,u=(i.top+s.y)/a.y,p=i.width/a.x,h=i.height/a.y;if(o){const m=Nt(o),x=r&&hu(r)?Nt(r):r;let g=m.frameElement;for(;g&&r&&x!==m;){const y=ts(g),S=g.getBoundingClientRect(),d=Ec(g),f=S.left+(g.clientLeft+parseFloat(d.paddingLeft))*y.x,v=S.top+(g.clientTop+parseFloat(d.paddingTop))*y.y;l*=y.x,u*=y.y,p*=y.x,h*=y.y,l+=f,u+=v,g=Nt(g).frameElement}}return HS({width:p,height:h,x:l,y:u})}function qS(e,t){let n=null,r;const i=lg(e);function o(){clearTimeout(r),n&&n.disconnect(),n=null}function a(s,l){s===void 0&&(s=!1),l===void 0&&(l=1),o();const{left:u,top:p,width:h,height:m}=e.getBoundingClientRect();if(s||t(),!h||!m)return;const x=To(p),g=To(i.clientWidth-(u+h)),y=To(i.clientHeight-(p+m)),S=To(u),f={rootMargin:-x+"px "+-g+"px "+-y+"px "+-S+"px",threshold:WS(0,US(1,l))||1};let v=!0;function w(k){const O=k[0].intersectionRatio;if(O!==l){if(!v)return a();O?a(!1,O):r=setTimeout(()=>{a(!1,1e-7)},100)}v=!1}try{n=new IntersectionObserver(w,{...f,root:i.ownerDocument})}catch{n=new IntersectionObserver(w,f)}n.observe(e)}return a(!0),o}function JS(e,t,n,r){r===void 0&&(r={});const{ancestorScroll:i=!0,ancestorResize:o=!0,elementResize:a=typeof ResizeObserver=="function",layoutShift:s=typeof IntersectionObserver=="function",animationFrame:l=!1}=r,u=_c(e),p=i||o?[...u?Ta(u):[],...Ta(t)]:[];p.forEach(d=>{i&&d.addEventListener("scroll",n,{passive:!0}),o&&d.addEventListener("resize",n)});const h=u&&s?qS(u,n):null;let m=-1,x=null;a&&(x=new ResizeObserver(d=>{let[f]=d;f&&f.target===u&&x&&(x.unobserve(t),cancelAnimationFrame(m),m=requestAnimationFrame(()=>{x&&x.observe(t)})),n()}),u&&!l&&x.observe(u),x.observe(t));let g,y=l?bf(e):null;l&&S();function S(){const d=bf(e);y&&(d.x!==y.x||d.y!==y.y||d.width!==y.width||d.height!==y.height)&&n(),y=d,g=requestAnimationFrame(S)}return n(),()=>{p.forEach(d=>{i&&d.removeEventListener("scroll",n),o&&d.removeEventListener("resize",n)}),h&&h(),x&&x.disconnect(),x=null,l&&cancelAnimationFrame(g)}}var mu=T.useLayoutEffect,eb=["className","clearValue","cx","getStyles","getClassNames","getValue","hasValue","isMulti","isRtl","options","selectOption","selectProps","setValue","theme"],Ia=function(){};function tb(e,t){return t?t[0]==="-"?e+t:e+"__"+t:e}function nb(e,t){for(var n=arguments.length,r=new Array(n>2?n-2:0),i=2;i<n;i++)r[i-2]=arguments[i];var o=[].concat(r);if(t&&e)for(var a in t)t.hasOwnProperty(a)&&t[a]&&o.push("".concat(tb(e,a)));return o.filter(function(s){return s}).map(function(s){return String(s).trim()}).join(" ")}var kf=function(t){return db(t)?t.filter(Boolean):ar(t)==="object"&&t!==null?[t]:[]},dg=function(t){t.className,t.clearValue,t.cx,t.getStyles,t.getClassNames,t.getValue,t.hasValue,t.isMulti,t.isRtl,t.options,t.selectOption,t.selectProps,t.setValue,t.theme;var n=mn(t,eb);return K({},n)},Re=function(t,n,r){var i=t.cx,o=t.getStyles,a=t.getClassNames,s=t.className;return{css:o(n,t),className:i(r??{},a(n,t),s)}};function gl(e){return[document.documentElement,document.body,window].indexOf(e)>-1}function rb(e){return gl(e)?window.innerHeight:e.clientHeight}function fg(e){return gl(e)?window.pageYOffset:e.scrollTop}function Ra(e,t){if(gl(e)){window.scrollTo(0,t);return}e.scrollTop=t}function ib(e){var t=getComputedStyle(e),n=t.position==="absolute",r=/(auto|scroll)/;if(t.position==="fixed")return document.documentElement;for(var i=e;i=i.parentElement;)if(t=getComputedStyle(i),!(n&&t.position==="static")&&r.test(t.overflow+t.overflowY+t.overflowX))return i;return document.documentElement}function ob(e,t,n,r){return n*((e=e/r-1)*e*e+1)+t}function Io(e,t){var n=arguments.length>2&&arguments[2]!==void 0?arguments[2]:200,r=arguments.length>3&&arguments[3]!==void 0?arguments[3]:Ia,i=fg(e),o=t-i,a=10,s=0;function l(){s+=a;var u=ob(s,i,o,n);Ra(e,u),s<n?window.requestAnimationFrame(l):r(e)}l()}function Cf(e,t){var n=e.getBoundingClientRect(),r=t.getBoundingClientRect(),i=t.offsetHeight/3;r.bottom+i>n.bottom?Ra(e,Math.min(t.offsetTop+t.clientHeight-e.offsetHeight+i,e.scrollHeight)):r.top-i<n.top&&Ra(e,Math.max(t.offsetTop-i,0))}function ab(e){var t=e.getBoundingClientRect();return{bottom:t.bottom,height:t.height,left:t.left,right:t.right,top:t.top,width:t.width}}function jf(){try{return document.createEvent("TouchEvent"),!0}catch{return!1}}function lb(){try{return/Android|webOS|iPhone|iPad|iPod|BlackBerry|IEMobile|Opera Mini/i.test(navigator.userAgent)}catch{return!1}}var pg=!1,sb={get passive(){return pg=!0}},Ro=typeof window<"u"?window:{};Ro.addEventListener&&Ro.removeEventListener&&(Ro.addEventListener("p",Ia,sb),Ro.removeEventListener("p",Ia,!1));var ub=pg;function cb(e){return e!=null}function db(e){return Array.isArray(e)}function Lo(e,t,n){return e?t:n}var fb=function(t){for(var n=arguments.length,r=new Array(n>1?n-1:0),i=1;i<n;i++)r[i-1]=arguments[i];var o=Object.entries(t).filter(function(a){var s=un(a,1),l=s[0];return!r.includes(l)});return o.reduce(function(a,s){var l=un(s,2),u=l[0],p=l[1];return a[u]=p,a},{})},pb=["children","innerProps"],hb=["children","innerProps"];function mb(e){var t=e.maxHeight,n=e.menuEl,r=e.minHeight,i=e.placement,o=e.shouldScroll,a=e.isFixedPosition,s=e.controlHeight,l=ib(n),u={placement:"bottom",maxHeight:t};if(!n||!n.offsetParent)return u;var p=l.getBoundingClientRect(),h=p.height,m=n.getBoundingClientRect(),x=m.bottom,g=m.height,y=m.top,S=n.offsetParent.getBoundingClientRect(),d=S.top,f=a?window.innerHeight:rb(l),v=fg(l),w=parseInt(getComputedStyle(n).marginBottom,10),k=parseInt(getComputedStyle(n).marginTop,10),O=d-k,j=f-y,P=O+v,M=h-v-y,I=x-f+v+w,U=v+y-k,D=160;switch(i){case"auto":case"bottom":if(j>=g)return{placement:"bottom",maxHeight:t};if(M>=g&&!a)return o&&Io(l,I,D),{placement:"bottom",maxHeight:t};if(!a&&M>=r||a&&j>=r){o&&Io(l,I,D);var R=a?j-w:M-w;return{placement:"bottom",maxHeight:R}}if(i==="auto"||a){var G=t,q=a?O:P;return q>=r&&(G=Math.min(q-w-s,t)),{placement:"top",maxHeight:G}}if(i==="bottom")return o&&Ra(l,I),{placement:"bottom",maxHeight:t};break;case"top":if(O>=g)return{placement:"top",maxHeight:t};if(P>=g&&!a)return o&&Io(l,U,D),{placement:"top",maxHeight:t};if(!a&&P>=r||a&&O>=r){var J=t;return(!a&&P>=r||a&&O>=r)&&(J=a?O-k:P-k),o&&Io(l,U,D),{placement:"top",maxHeight:J}}return{placement:"bottom",maxHeight:t};default:throw new Error('Invalid placement provided "'.concat(i,'".'))}return u}function gb(e){var t={bottom:"top",top:"bottom"};return e?t[e]:"bottom"}var hg=function(t){return t==="auto"?"bottom":t},vb=function(t,n){var r,i=t.placement,o=t.theme,a=o.borderRadius,s=o.spacing,l=o.colors;return K((r={label:"menu"},mi(r,gb(i),"100%"),mi(r,"position","absolute"),mi(r,"width","100%"),mi(r,"zIndex",1),r),n?{}:{backgroundColor:l.neutral0,borderRadius:a,boxShadow:"0 0 0 1px hsla(0, 0%, 0%, 0.1), 0 4px 11px hsla(0, 0%, 0%, 0.1)",marginBottom:s.menuGutter,marginTop:s.menuGutter})},mg=T.createContext(null),yb=function(t){var n=t.children,r=t.minMenuHeight,i=t.maxMenuHeight,o=t.menuPlacement,a=t.menuPosition,s=t.menuShouldScrollIntoView,l=t.theme,u=T.useContext(mg)||{},p=u.setPortalPlacement,h=T.useRef(null),m=T.useState(i),x=un(m,2),g=x[0],y=x[1],S=T.useState(null),d=un(S,2),f=d[0],v=d[1],w=l.spacing.controlHeight;return mu(function(){var k=h.current;if(k){var O=a==="fixed",j=s&&!O,P=mb({maxHeight:i,menuEl:k,minHeight:r,placement:o,shouldScroll:j,isFixedPosition:O,controlHeight:w});y(P.maxHeight),v(P.placement),p==null||p(P.placement)}},[i,o,a,s,r,p,w]),n({ref:h,placerProps:K(K({},t),{},{placement:f||hg(o),maxHeight:g})})},xb=function(t){var n=t.children,r=t.innerRef,i=t.innerProps;return Y("div",X({},Re(t,"menu",{menu:!0}),{ref:r},i),n)},wb=xb,Sb=function(t,n){var r=t.maxHeight,i=t.theme.spacing.baseUnit;return K({maxHeight:r,overflowY:"auto",position:"relative",WebkitOverflowScrolling:"touch"},n?{}:{paddingBottom:i,paddingTop:i})},bb=function(t){var n=t.children,r=t.innerProps,i=t.innerRef,o=t.isMulti;return Y("div",X({},Re(t,"menuList",{"menu-list":!0,"menu-list--is-multi":o}),{ref:i},r),n)},gg=function(t,n){var r=t.theme,i=r.spacing.baseUnit,o=r.colors;return K({textAlign:"center"},n?{}:{color:o.neutral40,padding:"".concat(i*2,"px ").concat(i*3,"px")})},kb=gg,Cb=gg,jb=function(t){var n=t.children,r=n===void 0?"No options":n,i=t.innerProps,o=mn(t,pb);return Y("div",X({},Re(K(K({},o),{},{children:r,innerProps:i}),"noOptionsMessage",{"menu-notice":!0,"menu-notice--no-options":!0}),i),r)},Eb=function(t){var n=t.children,r=n===void 0?"Loading...":n,i=t.innerProps,o=mn(t,hb);return Y("div",X({},Re(K(K({},o),{},{children:r,innerProps:i}),"loadingMessage",{"menu-notice":!0,"menu-notice--loading":!0}),i),r)},_b=function(t){var n=t.rect,r=t.offset,i=t.position;return{left:n.left,position:i,top:r,width:n.width,zIndex:1}},Ob=function(t){var n=t.appendTo,r=t.children,i=t.controlElement,o=t.innerProps,a=t.menuPlacement,s=t.menuPosition,l=T.useRef(null),u=T.useRef(null),p=T.useState(hg(a)),h=un(p,2),m=h[0],x=h[1],g=T.useMemo(function(){return{setPortalPlacement:x}},[]),y=T.useState(null),S=un(y,2),d=S[0],f=S[1],v=T.useCallback(function(){if(i){var j=ab(i),P=s==="fixed"?0:window.pageYOffset,M=j[m]+P;(M!==(d==null?void 0:d.offset)||j.left!==(d==null?void 0:d.rect.left)||j.width!==(d==null?void 0:d.rect.width))&&f({offset:M,rect:j})}},[i,s,m,d==null?void 0:d.offset,d==null?void 0:d.rect.left,d==null?void 0:d.rect.width]);mu(function(){v()},[v]);var w=T.useCallback(function(){typeof u.current=="function"&&(u.current(),u.current=null),i&&l.current&&(u.current=JS(i,l.current,v,{elementResize:"ResizeObserver"in window}))},[i,v]);mu(function(){w()},[w]);var k=T.useCallback(function(j){l.current=j,w()},[w]);if(!n&&s!=="fixed"||!d)return null;var O=Y("div",X({ref:k},Re(K(K({},t),{},{offset:d.offset,position:s,rect:d.rect}),"menuPortal",{"menu-portal":!0}),o),r);return Y(mg.Provider,{value:g},n?eo.createPortal(O,n):O)},Pb=function(t){var n=t.isDisabled,r=t.isRtl;return{label:"container",direction:r?"rtl":void 0,pointerEvents:n?"none":void 0,position:"relative"}},Mb=function(t){var n=t.children,r=t.innerProps,i=t.isDisabled,o=t.isRtl;return Y("div",X({},Re(t,"container",{"--is-disabled":i,"--is-rtl":o}),r),n)},Tb=function(t,n){var r=t.theme.spacing,i=t.isMulti,o=t.hasValue,a=t.selectProps.controlShouldRenderValue;return K({alignItems:"center",display:i&&o&&a?"flex":"grid",flex:1,flexWrap:"wrap",WebkitOverflowScrolling:"touch",position:"relative",overflow:"hidden"},n?{}:{padding:"".concat(r.baseUnit/2,"px ").concat(r.baseUnit*2,"px")})},Ib=function(t){var n=t.children,r=t.innerProps,i=t.isMulti,o=t.hasValue;return Y("div",X({},Re(t,"valueContainer",{"value-container":!0,"value-container--is-multi":i,"value-container--has-value":o}),r),n)},Rb=function(){return{alignItems:"center",alignSelf:"stretch",display:"flex",flexShrink:0}},Lb=function(t){var n=t.children,r=t.innerProps;return Y("div",X({},Re(t,"indicatorsContainer",{indicators:!0}),r),n)},Ef,Db=["size"],Vb=["innerProps","isRtl","size"],Fb={name:"8mmkcg",styles:"display:inline-block;fill:currentColor;line-height:1;stroke:currentColor;stroke-width:0"},vg=function(t){var n=t.size,r=mn(t,Db);return Y("svg",X({height:n,width:n,viewBox:"0 0 20 20","aria-hidden":"true",focusable:"false",css:Fb},r))},Oc=function(t){return Y(vg,X({size:20},t),Y("path",{d:"M14.348 14.849c-0.469 0.469-1.229 0.469-1.697 0l-2.651-3.030-2.651 3.029c-0.469 0.469-1.229 0.469-1.697 0-0.469-0.469-0.469-1.229 0-1.697l2.758-3.15-2.759-3.152c-0.469-0.469-0.469-1.228 0-1.697s1.228-0.469 1.697 0l2.652 3.031 2.651-3.031c0.469-0.469 1.228-0.469 1.697 0s0.469 1.229 0 1.697l-2.758 3.152 2.758 3.15c0.469 0.469 0.469 1.229 0 1.698z"}))},yg=function(t){return Y(vg,X({size:20},t),Y("path",{d:"M4.516 7.548c0.436-0.446 1.043-0.481 1.576 0l3.908 3.747 3.908-3.747c0.533-0.481 1.141-0.446 1.574 0 0.436 0.445 0.408 1.197 0 1.615-0.406 0.418-4.695 4.502-4.695 4.502-0.217 0.223-0.502 0.335-0.787 0.335s-0.57-0.112-0.789-0.335c0 0-4.287-4.084-4.695-4.502s-0.436-1.17 0-1.615z"}))},xg=function(t,n){var r=t.isFocused,i=t.theme,o=i.spacing.baseUnit,a=i.colors;return K({label:"indicatorContainer",display:"flex",transition:"color 150ms"},n?{}:{color:r?a.neutral60:a.neutral20,padding:o*2,":hover":{color:r?a.neutral80:a.neutral40}})},Ab=xg,zb=function(t){var n=t.children,r=t.innerProps;return Y("div",X({},Re(t,"dropdownIndicator",{indicator:!0,"dropdown-indicator":!0}),r),n||Y(yg,null))},$b=xg,Nb=function(t){var n=t.children,r=t.innerProps;return Y("div",X({},Re(t,"clearIndicator",{indicator:!0,"clear-indicator":!0}),r),n||Y(Oc,null))},Ub=function(t,n){var r=t.isDisabled,i=t.theme,o=i.spacing.baseUnit,a=i.colors;return K({label:"indicatorSeparator",alignSelf:"stretch",width:1},n?{}:{backgroundColor:r?a.neutral10:a.neutral20,marginBottom:o*2,marginTop:o*2})},Wb=function(t){var n=t.innerProps;return Y("span",X({},n,Re(t,"indicatorSeparator",{"indicator-separator":!0})))},Hb=Px(Ef||(Ef=NS([`
  0%, 80%, 100% { opacity: 0; }
  40% { opacity: 1; }
`]))),Bb=function(t,n){var r=t.isFocused,i=t.size,o=t.theme,a=o.colors,s=o.spacing.baseUnit;return K({label:"loadingIndicator",display:"flex",transition:"color 150ms",alignSelf:"center",fontSize:i,lineHeight:1,marginRight:i,textAlign:"center",verticalAlign:"middle"},n?{}:{color:r?a.neutral60:a.neutral20,padding:s*2})},ns=function(t){var n=t.delay,r=t.offset;return Y("span",{css:bc({animation:"".concat(Hb," 1s ease-in-out ").concat(n,"ms infinite;"),backgroundColor:"currentColor",borderRadius:"1em",display:"inline-block",marginLeft:r?"1em":void 0,height:"1em",verticalAlign:"top",width:"1em"},"","")})},Qb=function(t){var n=t.innerProps,r=t.isRtl,i=t.size,o=i===void 0?4:i,a=mn(t,Vb);return Y("div",X({},Re(K(K({},a),{},{innerProps:n,isRtl:r,size:o}),"loadingIndicator",{indicator:!0,"loading-indicator":!0}),n),Y(ns,{delay:0,offset:r}),Y(ns,{delay:160,offset:!0}),Y(ns,{delay:320,offset:!r}))},Yb=function(t,n){var r=t.isDisabled,i=t.isFocused,o=t.theme,a=o.colors,s=o.borderRadius,l=o.spacing;return K({label:"control",alignItems:"center",cursor:"default",display:"flex",flexWrap:"wrap",justifyContent:"space-between",minHeight:l.controlHeight,outline:"0 !important",position:"relative",transition:"all 100ms"},n?{}:{backgroundColor:r?a.neutral5:a.neutral0,borderColor:r?a.neutral10:i?a.primary:a.neutral20,borderRadius:s,borderStyle:"solid",borderWidth:1,boxShadow:i?"0 0 0 1px ".concat(a.primary):void 0,"&:hover":{borderColor:i?a.primary:a.neutral30}})},Kb=function(t){var n=t.children,r=t.isDisabled,i=t.isFocused,o=t.innerRef,a=t.innerProps,s=t.menuIsOpen;return Y("div",X({ref:o},Re(t,"control",{control:!0,"control--is-disabled":r,"control--is-focused":i,"control--menu-is-open":s}),a,{"aria-disabled":r||void 0}),n)},Gb=Kb,Xb=["data"],Zb=function(t,n){var r=t.theme.spacing;return n?{}:{paddingBottom:r.baseUnit*2,paddingTop:r.baseUnit*2}},qb=function(t){var n=t.children,r=t.cx,i=t.getStyles,o=t.getClassNames,a=t.Heading,s=t.headingProps,l=t.innerProps,u=t.label,p=t.theme,h=t.selectProps;return Y("div",X({},Re(t,"group",{group:!0}),l),Y(a,X({},s,{selectProps:h,theme:p,getStyles:i,getClassNames:o,cx:r}),u),Y("div",null,n))},Jb=function(t,n){var r=t.theme,i=r.colors,o=r.spacing;return K({label:"group",cursor:"default",display:"block"},n?{}:{color:i.neutral40,fontSize:"75%",fontWeight:500,marginBottom:"0.25em",paddingLeft:o.baseUnit*3,paddingRight:o.baseUnit*3,textTransform:"uppercase"})},e2=function(t){var n=dg(t);n.data;var r=mn(n,Xb);return Y("div",X({},Re(t,"groupHeading",{"group-heading":!0}),r))},t2=qb,n2=["innerRef","isDisabled","isHidden","inputClassName"],r2=function(t,n){var r=t.isDisabled,i=t.value,o=t.theme,a=o.spacing,s=o.colors;return K(K({visibility:r?"hidden":"visible",transform:i?"translateZ(0)":""},i2),n?{}:{margin:a.baseUnit/2,paddingBottom:a.baseUnit/2,paddingTop:a.baseUnit/2,color:s.neutral80})},wg={gridArea:"1 / 2",font:"inherit",minWidth:"2px",border:0,margin:0,outline:0,padding:0},i2={flex:"1 1 auto",display:"inline-grid",gridArea:"1 / 1 / 2 / 3",gridTemplateColumns:"0 min-content","&:after":K({content:'attr(data-value) " "',visibility:"hidden",whiteSpace:"pre"},wg)},o2=function(t){return K({label:"input",color:"inherit",background:0,opacity:t?0:1,width:"100%"},wg)},a2=function(t){var n=t.cx,r=t.value,i=dg(t),o=i.innerRef,a=i.isDisabled,s=i.isHidden,l=i.inputClassName,u=mn(i,n2);return Y("div",X({},Re(t,"input",{"input-container":!0}),{"data-value":r||""}),Y("input",X({className:n({input:!0},l),ref:o,style:o2(s),disabled:a},u)))},l2=a2,s2=function(t,n){var r=t.theme,i=r.spacing,o=r.borderRadius,a=r.colors;return K({label:"multiValue",display:"flex",minWidth:0},n?{}:{backgroundColor:a.neutral10,borderRadius:o/2,margin:i.baseUnit/2})},u2=function(t,n){var r=t.theme,i=r.borderRadius,o=r.colors,a=t.cropWithEllipsis;return K({overflow:"hidden",textOverflow:a||a===void 0?"ellipsis":void 0,whiteSpace:"nowrap"},n?{}:{borderRadius:i/2,color:o.neutral80,fontSize:"85%",padding:3,paddingLeft:6})},c2=function(t,n){var r=t.theme,i=r.spacing,o=r.borderRadius,a=r.colors,s=t.isFocused;return K({alignItems:"center",display:"flex"},n?{}:{borderRadius:o/2,backgroundColor:s?a.dangerLight:void 0,paddingLeft:i.baseUnit,paddingRight:i.baseUnit,":hover":{backgroundColor:a.dangerLight,color:a.danger}})},Sg=function(t){var n=t.children,r=t.innerProps;return Y("div",r,n)},d2=Sg,f2=Sg;function p2(e){var t=e.children,n=e.innerProps;return Y("div",X({role:"button"},n),t||Y(Oc,{size:14}))}var h2=function(t){var n=t.children,r=t.components,i=t.data,o=t.innerProps,a=t.isDisabled,s=t.removeProps,l=t.selectProps,u=r.Container,p=r.Label,h=r.Remove;return Y(u,{data:i,innerProps:K(K({},Re(t,"multiValue",{"multi-value":!0,"multi-value--is-disabled":a})),o),selectProps:l},Y(p,{data:i,innerProps:K({},Re(t,"multiValueLabel",{"multi-value__label":!0})),selectProps:l},n),Y(h,{data:i,innerProps:K(K({},Re(t,"multiValueRemove",{"multi-value__remove":!0})),{},{"aria-label":"Remove ".concat(n||"option")},s),selectProps:l}))},m2=h2,g2=function(t,n){var r=t.isDisabled,i=t.isFocused,o=t.isSelected,a=t.theme,s=a.spacing,l=a.colors;return K({label:"option",cursor:"default",display:"block",fontSize:"inherit",width:"100%",userSelect:"none",WebkitTapHighlightColor:"rgba(0, 0, 0, 0)"},n?{}:{backgroundColor:o?l.primary:i?l.primary25:"transparent",color:r?l.neutral20:o?l.neutral0:"inherit",padding:"".concat(s.baseUnit*2,"px ").concat(s.baseUnit*3,"px"),":active":{backgroundColor:r?void 0:o?l.primary:l.primary50}})},v2=function(t){var n=t.children,r=t.isDisabled,i=t.isFocused,o=t.isSelected,a=t.innerRef,s=t.innerProps;return Y("div",X({},Re(t,"option",{option:!0,"option--is-disabled":r,"option--is-focused":i,"option--is-selected":o}),{ref:a,"aria-disabled":r},s),n)},y2=v2,x2=function(t,n){var r=t.theme,i=r.spacing,o=r.colors;return K({label:"placeholder",gridArea:"1 / 1 / 2 / 3"},n?{}:{color:o.neutral50,marginLeft:i.baseUnit/2,marginRight:i.baseUnit/2})},w2=function(t){var n=t.children,r=t.innerProps;return Y("div",X({},Re(t,"placeholder",{placeholder:!0}),r),n)},S2=w2,b2=function(t,n){var r=t.isDisabled,i=t.theme,o=i.spacing,a=i.colors;return K({label:"singleValue",gridArea:"1 / 1 / 2 / 3",maxWidth:"100%",overflow:"hidden",textOverflow:"ellipsis",whiteSpace:"nowrap"},n?{}:{color:r?a.neutral40:a.neutral80,marginLeft:o.baseUnit/2,marginRight:o.baseUnit/2})},k2=function(t){var n=t.children,r=t.isDisabled,i=t.innerProps;return Y("div",X({},Re(t,"singleValue",{"single-value":!0,"single-value--is-disabled":r}),i),n)},C2=k2,j2={ClearIndicator:Nb,Control:Gb,DropdownIndicator:zb,DownChevron:yg,CrossIcon:Oc,Group:t2,GroupHeading:e2,IndicatorsContainer:Lb,IndicatorSeparator:Wb,Input:l2,LoadingIndicator:Qb,Menu:wb,MenuList:bb,MenuPortal:Ob,LoadingMessage:Eb,NoOptionsMessage:jb,MultiValue:m2,MultiValueContainer:d2,MultiValueLabel:f2,MultiValueRemove:p2,Option:y2,Placeholder:S2,SelectContainer:Mb,SingleValue:C2,ValueContainer:Ib},E2=function(t){return K(K({},j2),t.components)},_f=Number.isNaN||function(t){return typeof t=="number"&&t!==t};function _2(e,t){return!!(e===t||_f(e)&&_f(t))}function O2(e,t){if(e.length!==t.length)return!1;for(var n=0;n<e.length;n++)if(!_2(e[n],t[n]))return!1;return!0}function P2(e,t){t===void 0&&(t=O2);var n=null;function r(){for(var i=[],o=0;o<arguments.length;o++)i[o]=arguments[o];if(n&&n.lastThis===this&&t(i,n.lastArgs))return n.lastResult;var a=e.apply(this,i);return n={lastResult:a,lastArgs:i,lastThis:this},a}return r.clear=function(){n=null},r}var M2={name:"7pg0cj-a11yText",styles:"label:a11yText;z-index:9999;border:0;clip:rect(1px, 1px, 1px, 1px);height:1px;width:1px;position:absolute;overflow:hidden;padding:0;white-space:nowrap"},T2=function(t){return Y("span",X({css:M2},t))},Of=T2,I2={guidance:function(t){var n=t.isSearchable,r=t.isMulti,i=t.tabSelectsValue,o=t.context,a=t.isInitialFocus;switch(o){case"menu":return"Use Up and Down to choose options, press Enter to select the currently focused option, press Escape to exit the menu".concat(i?", press Tab to select the option and exit the menu":"",".");case"input":return a?"".concat(t["aria-label"]||"Select"," is focused ").concat(n?",type to refine list":"",", press Down to open the menu, ").concat(r?" press left to focus selected values":""):"";case"value":return"Use left and right to toggle between focused values, press Backspace to remove the currently focused value";default:return""}},onChange:function(t){var n=t.action,r=t.label,i=r===void 0?"":r,o=t.labels,a=t.isDisabled;switch(n){case"deselect-option":case"pop-value":case"remove-value":return"option ".concat(i,", deselected.");case"clear":return"All selected options have been cleared.";case"initial-input-focus":return"option".concat(o.length>1?"s":""," ").concat(o.join(","),", selected.");case"select-option":return a?"option ".concat(i," is disabled. Select another option."):"option ".concat(i,", selected.");default:return""}},onFocus:function(t){var n=t.context,r=t.focused,i=t.options,o=t.label,a=o===void 0?"":o,s=t.selectValue,l=t.isDisabled,u=t.isSelected,p=t.isAppleDevice,h=function(y,S){return y&&y.length?"".concat(y.indexOf(S)+1," of ").concat(y.length):""};if(n==="value"&&s)return"value ".concat(a," focused, ").concat(h(s,r),".");if(n==="menu"&&p){var m=l?" disabled":"",x="".concat(u?" selected":"").concat(m);return"".concat(a).concat(x,", ").concat(h(i,r),".")}return""},onFilter:function(t){var n=t.inputValue,r=t.resultsMessage;return"".concat(r).concat(n?" for search term "+n:"",".")}},R2=function(t){var n=t.ariaSelection,r=t.focusedOption,i=t.focusedValue,o=t.focusableOptions,a=t.isFocused,s=t.selectValue,l=t.selectProps,u=t.id,p=t.isAppleDevice,h=l.ariaLiveMessages,m=l.getOptionLabel,x=l.inputValue,g=l.isMulti,y=l.isOptionDisabled,S=l.isSearchable,d=l.menuIsOpen,f=l.options,v=l.screenReaderStatus,w=l.tabSelectsValue,k=l.isLoading,O=l["aria-label"],j=l["aria-live"],P=T.useMemo(function(){return K(K({},I2),h||{})},[h]),M=T.useMemo(function(){var q="";if(n&&P.onChange){var J=n.option,me=n.options,F=n.removedValue,B=n.removedValues,Q=n.value,ue=function(Xe){return Array.isArray(Xe)?null:Xe},te=F||J||ue(Q),Ce=te?m(te):"",ye=me||B||void 0,Ae=ye?ye.map(m):[],fe=K({isDisabled:te&&y(te,s),label:Ce,labels:Ae},n);q=P.onChange(fe)}return q},[n,P,y,s,m]),I=T.useMemo(function(){var q="",J=r||i,me=!!(r&&s&&s.includes(r));if(J&&P.onFocus){var F={focused:J,label:m(J),isDisabled:y(J,s),isSelected:me,options:o,context:J===r?"menu":"value",selectValue:s,isAppleDevice:p};q=P.onFocus(F)}return q},[r,i,m,y,P,o,s,p]),U=T.useMemo(function(){var q="";if(d&&f.length&&!k&&P.onFilter){var J=v({count:o.length});q=P.onFilter({inputValue:x,resultsMessage:J})}return q},[o,x,d,P,f,v,k]),D=(n==null?void 0:n.action)==="initial-input-focus",R=T.useMemo(function(){var q="";if(P.guidance){var J=i?"value":d?"menu":"input";q=P.guidance({"aria-label":O,context:J,isDisabled:r&&y(r,s),isMulti:g,isSearchable:S,tabSelectsValue:w,isInitialFocus:D})}return q},[O,r,i,g,y,S,d,P,s,w,D]),G=Y(T.Fragment,null,Y("span",{id:"aria-selection"},M),Y("span",{id:"aria-focused"},I),Y("span",{id:"aria-results"},U),Y("span",{id:"aria-guidance"},R));return Y(T.Fragment,null,Y(Of,{id:u},D&&G),Y(Of,{"aria-live":j,"aria-atomic":"false","aria-relevant":"additions text",role:"log"},a&&!D&&G))},L2=R2,gu=[{base:"A",letters:"AⒶＡÀÁÂẦẤẪẨÃĀĂẰẮẴẲȦǠÄǞẢÅǺǍȀȂẠẬẶḀĄȺⱯ"},{base:"AA",letters:"Ꜳ"},{base:"AE",letters:"ÆǼǢ"},{base:"AO",letters:"Ꜵ"},{base:"AU",letters:"Ꜷ"},{base:"AV",letters:"ꜸꜺ"},{base:"AY",letters:"Ꜽ"},{base:"B",letters:"BⒷＢḂḄḆɃƂƁ"},{base:"C",letters:"CⒸＣĆĈĊČÇḈƇȻꜾ"},{base:"D",letters:"DⒹＤḊĎḌḐḒḎĐƋƊƉꝹ"},{base:"DZ",letters:"ǱǄ"},{base:"Dz",letters:"ǲǅ"},{base:"E",letters:"EⒺＥÈÉÊỀẾỄỂẼĒḔḖĔĖËẺĚȄȆẸỆȨḜĘḘḚƐƎ"},{base:"F",letters:"FⒻＦḞƑꝻ"},{base:"G",letters:"GⒼＧǴĜḠĞĠǦĢǤƓꞠꝽꝾ"},{base:"H",letters:"HⒽＨĤḢḦȞḤḨḪĦⱧⱵꞍ"},{base:"I",letters:"IⒾＩÌÍÎĨĪĬİÏḮỈǏȈȊỊĮḬƗ"},{base:"J",letters:"JⒿＪĴɈ"},{base:"K",letters:"KⓀＫḰǨḲĶḴƘⱩꝀꝂꝄꞢ"},{base:"L",letters:"LⓁＬĿĹĽḶḸĻḼḺŁȽⱢⱠꝈꝆꞀ"},{base:"LJ",letters:"Ǉ"},{base:"Lj",letters:"ǈ"},{base:"M",letters:"MⓂＭḾṀṂⱮƜ"},{base:"N",letters:"NⓃＮǸŃÑṄŇṆŅṊṈȠƝꞐꞤ"},{base:"NJ",letters:"Ǌ"},{base:"Nj",letters:"ǋ"},{base:"O",letters:"OⓄＯÒÓÔỒỐỖỔÕṌȬṎŌṐṒŎȮȰÖȪỎŐǑȌȎƠỜỚỠỞỢỌỘǪǬØǾƆƟꝊꝌ"},{base:"OI",letters:"Ƣ"},{base:"OO",letters:"Ꝏ"},{base:"OU",letters:"Ȣ"},{base:"P",letters:"PⓅＰṔṖƤⱣꝐꝒꝔ"},{base:"Q",letters:"QⓆＱꝖꝘɊ"},{base:"R",letters:"RⓇＲŔṘŘȐȒṚṜŖṞɌⱤꝚꞦꞂ"},{base:"S",letters:"SⓈＳẞŚṤŜṠŠṦṢṨȘŞⱾꞨꞄ"},{base:"T",letters:"TⓉＴṪŤṬȚŢṰṮŦƬƮȾꞆ"},{base:"TZ",letters:"Ꜩ"},{base:"U",letters:"UⓊＵÙÚÛŨṸŪṺŬÜǛǗǕǙỦŮŰǓȔȖƯỪỨỮỬỰỤṲŲṶṴɄ"},{base:"V",letters:"VⓋＶṼṾƲꝞɅ"},{base:"VY",letters:"Ꝡ"},{base:"W",letters:"WⓌＷẀẂŴẆẄẈⱲ"},{base:"X",letters:"XⓍＸẊẌ"},{base:"Y",letters:"YⓎＹỲÝŶỸȲẎŸỶỴƳɎỾ"},{base:"Z",letters:"ZⓏＺŹẐŻŽẒẔƵȤⱿⱫꝢ"},{base:"a",letters:"aⓐａẚàáâầấẫẩãāăằắẵẳȧǡäǟảåǻǎȁȃạậặḁąⱥɐ"},{base:"aa",letters:"ꜳ"},{base:"ae",letters:"æǽǣ"},{base:"ao",letters:"ꜵ"},{base:"au",letters:"ꜷ"},{base:"av",letters:"ꜹꜻ"},{base:"ay",letters:"ꜽ"},{base:"b",letters:"bⓑｂḃḅḇƀƃɓ"},{base:"c",letters:"cⓒｃćĉċčçḉƈȼꜿↄ"},{base:"d",letters:"dⓓｄḋďḍḑḓḏđƌɖɗꝺ"},{base:"dz",letters:"ǳǆ"},{base:"e",letters:"eⓔｅèéêềếễểẽēḕḗĕėëẻěȅȇẹệȩḝęḙḛɇɛǝ"},{base:"f",letters:"fⓕｆḟƒꝼ"},{base:"g",letters:"gⓖｇǵĝḡğġǧģǥɠꞡᵹꝿ"},{base:"h",letters:"hⓗｈĥḣḧȟḥḩḫẖħⱨⱶɥ"},{base:"hv",letters:"ƕ"},{base:"i",letters:"iⓘｉìíîĩīĭïḯỉǐȉȋịįḭɨı"},{base:"j",letters:"jⓙｊĵǰɉ"},{base:"k",letters:"kⓚｋḱǩḳķḵƙⱪꝁꝃꝅꞣ"},{base:"l",letters:"lⓛｌŀĺľḷḹļḽḻſłƚɫⱡꝉꞁꝇ"},{base:"lj",letters:"ǉ"},{base:"m",letters:"mⓜｍḿṁṃɱɯ"},{base:"n",letters:"nⓝｎǹńñṅňṇņṋṉƞɲŉꞑꞥ"},{base:"nj",letters:"ǌ"},{base:"o",letters:"oⓞｏòóôồốỗổõṍȭṏōṑṓŏȯȱöȫỏőǒȍȏơờớỡởợọộǫǭøǿɔꝋꝍɵ"},{base:"oi",letters:"ƣ"},{base:"ou",letters:"ȣ"},{base:"oo",letters:"ꝏ"},{base:"p",letters:"pⓟｐṕṗƥᵽꝑꝓꝕ"},{base:"q",letters:"qⓠｑɋꝗꝙ"},{base:"r",letters:"rⓡｒŕṙřȑȓṛṝŗṟɍɽꝛꞧꞃ"},{base:"s",letters:"sⓢｓßśṥŝṡšṧṣṩșşȿꞩꞅẛ"},{base:"t",letters:"tⓣｔṫẗťṭțţṱṯŧƭʈⱦꞇ"},{base:"tz",letters:"ꜩ"},{base:"u",letters:"uⓤｕùúûũṹūṻŭüǜǘǖǚủůűǔȕȗưừứữửựụṳųṷṵʉ"},{base:"v",letters:"vⓥｖṽṿʋꝟʌ"},{base:"vy",letters:"ꝡ"},{base:"w",letters:"wⓦｗẁẃŵẇẅẘẉⱳ"},{base:"x",letters:"xⓧｘẋẍ"},{base:"y",letters:"yⓨｙỳýŷỹȳẏÿỷẙỵƴɏỿ"},{base:"z",letters:"zⓩｚźẑżžẓẕƶȥɀⱬꝣ"}],D2=new RegExp("["+gu.map(function(e){return e.letters}).join("")+"]","g"),bg={};for(var rs=0;rs<gu.length;rs++)for(var is=gu[rs],os=0;os<is.letters.length;os++)bg[is.letters[os]]=is.base;var kg=function(t){return t.replace(D2,function(n){return bg[n]})},V2=P2(kg),Pf=function(t){return t.replace(/^\s+|\s+$/g,"")},F2=function(t){return"".concat(t.label," ").concat(t.value)},A2=function(t){return function(n,r){if(n.data.__isNew__)return!0;var i=K({ignoreCase:!0,ignoreAccents:!0,stringify:F2,trim:!0,matchFrom:"any"},t),o=i.ignoreCase,a=i.ignoreAccents,s=i.stringify,l=i.trim,u=i.matchFrom,p=l?Pf(r):r,h=l?Pf(s(n)):s(n);return o&&(p=p.toLowerCase(),h=h.toLowerCase()),a&&(p=V2(p),h=kg(h)),u==="start"?h.substr(0,p.length)===p:h.indexOf(p)>-1}},z2=["innerRef"];function $2(e){var t=e.innerRef,n=mn(e,z2),r=fb(n,"onExited","in","enter","exit","appear");return Y("input",X({ref:t},r,{css:bc({label:"dummyInput",background:0,border:0,caretColor:"transparent",fontSize:"inherit",gridArea:"1 / 1 / 2 / 3",outline:0,padding:0,width:1,color:"transparent",left:-100,opacity:0,position:"relative",transform:"scale(.01)"},"","")}))}var N2=function(t){t.cancelable&&t.preventDefault(),t.stopPropagation()};function U2(e){var t=e.isEnabled,n=e.onBottomArrive,r=e.onBottomLeave,i=e.onTopArrive,o=e.onTopLeave,a=T.useRef(!1),s=T.useRef(!1),l=T.useRef(0),u=T.useRef(null),p=T.useCallback(function(S,d){if(u.current!==null){var f=u.current,v=f.scrollTop,w=f.scrollHeight,k=f.clientHeight,O=u.current,j=d>0,P=w-k-v,M=!1;P>d&&a.current&&(r&&r(S),a.current=!1),j&&s.current&&(o&&o(S),s.current=!1),j&&d>P?(n&&!a.current&&n(S),O.scrollTop=w,M=!0,a.current=!0):!j&&-d>v&&(i&&!s.current&&i(S),O.scrollTop=0,M=!0,s.current=!0),M&&N2(S)}},[n,r,i,o]),h=T.useCallback(function(S){p(S,S.deltaY)},[p]),m=T.useCallback(function(S){l.current=S.changedTouches[0].clientY},[]),x=T.useCallback(function(S){var d=l.current-S.changedTouches[0].clientY;p(S,d)},[p]),g=T.useCallback(function(S){if(S){var d=ub?{passive:!1}:!1;S.addEventListener("wheel",h,d),S.addEventListener("touchstart",m,d),S.addEventListener("touchmove",x,d)}},[x,m,h]),y=T.useCallback(function(S){S&&(S.removeEventListener("wheel",h,!1),S.removeEventListener("touchstart",m,!1),S.removeEventListener("touchmove",x,!1))},[x,m,h]);return T.useEffect(function(){if(t){var S=u.current;return g(S),function(){y(S)}}},[t,g,y]),function(S){u.current=S}}var Mf=["boxSizing","height","overflow","paddingRight","position"],Tf={boxSizing:"border-box",overflow:"hidden",position:"relative",height:"100%"};function If(e){e.preventDefault()}function Rf(e){e.stopPropagation()}function Lf(){var e=this.scrollTop,t=this.scrollHeight,n=e+this.offsetHeight;e===0?this.scrollTop=1:n===t&&(this.scrollTop=e-1)}function Df(){return"ontouchstart"in window||navigator.maxTouchPoints}var Vf=!!(typeof window<"u"&&window.document&&window.document.createElement),si=0,pr={capture:!1,passive:!1};function W2(e){var t=e.isEnabled,n=e.accountForScrollbars,r=n===void 0?!0:n,i=T.useRef({}),o=T.useRef(null),a=T.useCallback(function(l){if(Vf){var u=document.body,p=u&&u.style;if(r&&Mf.forEach(function(g){var y=p&&p[g];i.current[g]=y}),r&&si<1){var h=parseInt(i.current.paddingRight,10)||0,m=document.body?document.body.clientWidth:0,x=window.innerWidth-m+h||0;Object.keys(Tf).forEach(function(g){var y=Tf[g];p&&(p[g]=y)}),p&&(p.paddingRight="".concat(x,"px"))}u&&Df()&&(u.addEventListener("touchmove",If,pr),l&&(l.addEventListener("touchstart",Lf,pr),l.addEventListener("touchmove",Rf,pr))),si+=1}},[r]),s=T.useCallback(function(l){if(Vf){var u=document.body,p=u&&u.style;si=Math.max(si-1,0),r&&si<1&&Mf.forEach(function(h){var m=i.current[h];p&&(p[h]=m)}),u&&Df()&&(u.removeEventListener("touchmove",If,pr),l&&(l.removeEventListener("touchstart",Lf,pr),l.removeEventListener("touchmove",Rf,pr)))}},[r]);return T.useEffect(function(){if(t){var l=o.current;return a(l),function(){s(l)}}},[t,a,s]),function(l){o.current=l}}var H2=function(t){var n=t.target;return n.ownerDocument.activeElement&&n.ownerDocument.activeElement.blur()},B2={name:"1kfdb0e",styles:"position:fixed;left:0;bottom:0;right:0;top:0"};function Q2(e){var t=e.children,n=e.lockEnabled,r=e.captureEnabled,i=r===void 0?!0:r,o=e.onBottomArrive,a=e.onBottomLeave,s=e.onTopArrive,l=e.onTopLeave,u=U2({isEnabled:i,onBottomArrive:o,onBottomLeave:a,onTopArrive:s,onTopLeave:l}),p=W2({isEnabled:n}),h=function(x){u(x),p(x)};return Y(T.Fragment,null,n&&Y("div",{onClick:H2,css:B2}),t(h))}var Y2={name:"1a0ro4n-requiredInput",styles:"label:requiredInput;opacity:0;pointer-events:none;position:absolute;bottom:0;left:0;right:0;width:100%"},K2=function(t){var n=t.name,r=t.onFocus;return Y("input",{required:!0,name:n,tabIndex:-1,"aria-hidden":"true",onFocus:r,css:Y2,value:"",onChange:function(){}})},G2=K2;function Pc(e){var t;return typeof window<"u"&&window.navigator!=null?e.test(((t=window.navigator.userAgentData)===null||t===void 0?void 0:t.platform)||window.navigator.platform):!1}function X2(){return Pc(/^iPhone/i)}function Cg(){return Pc(/^Mac/i)}function Z2(){return Pc(/^iPad/i)||Cg()&&navigator.maxTouchPoints>1}function q2(){return X2()||Z2()}function J2(){return Cg()||q2()}var ek=function(t){return t.label},tk=function(t){return t.label},nk=function(t){return t.value},rk=function(t){return!!t.isDisabled},ik={clearIndicator:$b,container:Pb,control:Yb,dropdownIndicator:Ab,group:Zb,groupHeading:Jb,indicatorsContainer:Rb,indicatorSeparator:Ub,input:r2,loadingIndicator:Bb,loadingMessage:Cb,menu:vb,menuList:Sb,menuPortal:_b,multiValue:s2,multiValueLabel:u2,multiValueRemove:c2,noOptionsMessage:kb,option:g2,placeholder:x2,singleValue:b2,valueContainer:Tb},ok={primary:"#2684FF",primary75:"#4C9AFF",primary50:"#B2D4FF",primary25:"#DEEBFF",danger:"#DE350B",dangerLight:"#FFBDAD",neutral0:"hsl(0, 0%, 100%)",neutral5:"hsl(0, 0%, 95%)",neutral10:"hsl(0, 0%, 90%)",neutral20:"hsl(0, 0%, 80%)",neutral30:"hsl(0, 0%, 70%)",neutral40:"hsl(0, 0%, 60%)",neutral50:"hsl(0, 0%, 50%)",neutral60:"hsl(0, 0%, 40%)",neutral70:"hsl(0, 0%, 30%)",neutral80:"hsl(0, 0%, 20%)",neutral90:"hsl(0, 0%, 10%)"},ak=4,jg=4,lk=38,sk=jg*2,uk={baseUnit:jg,controlHeight:lk,menuGutter:sk},as={borderRadius:ak,colors:ok,spacing:uk},ck={"aria-live":"polite",backspaceRemovesValue:!0,blurInputOnSelect:jf(),captureMenuScroll:!jf(),classNames:{},closeMenuOnSelect:!0,closeMenuOnScroll:!1,components:{},controlShouldRenderValue:!0,escapeClearsValue:!1,filterOption:A2(),formatGroupLabel:ek,getOptionLabel:tk,getOptionValue:nk,isDisabled:!1,isLoading:!1,isMulti:!1,isRtl:!1,isSearchable:!0,isOptionDisabled:rk,loadingMessage:function(){return"Loading..."},maxMenuHeight:300,minMenuHeight:140,menuIsOpen:!1,menuPlacement:"bottom",menuPosition:"absolute",menuShouldBlockScroll:!1,menuShouldScrollIntoView:!lb(),noOptionsMessage:function(){return"No options"},openMenuOnFocus:!1,openMenuOnClick:!0,options:[],pageSize:5,placeholder:"Select...",screenReaderStatus:function(t){var n=t.count;return"".concat(n," result").concat(n!==1?"s":""," available")},styles:{},tabIndex:0,tabSelectsValue:!0,unstyled:!1};function Ff(e,t,n,r){var i=Og(e,t,n),o=Pg(e,t,n),a=_g(e,t),s=La(e,t);return{type:"option",data:t,isDisabled:i,isSelected:o,label:a,value:s,index:r}}function qo(e,t){return e.options.map(function(n,r){if("options"in n){var i=n.options.map(function(a,s){return Ff(e,a,t,s)}).filter(function(a){return zf(e,a)});return i.length>0?{type:"group",data:n,options:i,index:r}:void 0}var o=Ff(e,n,t,r);return zf(e,o)?o:void 0}).filter(cb)}function Eg(e){return e.reduce(function(t,n){return n.type==="group"?t.push.apply(t,Cc(n.options.map(function(r){return r.data}))):t.push(n.data),t},[])}function Af(e,t){return e.reduce(function(n,r){return r.type==="group"?n.push.apply(n,Cc(r.options.map(function(i){return{data:i.data,id:"".concat(t,"-").concat(r.index,"-").concat(i.index)}}))):n.push({data:r.data,id:"".concat(t,"-").concat(r.index)}),n},[])}function dk(e,t){return Eg(qo(e,t))}function zf(e,t){var n=e.inputValue,r=n===void 0?"":n,i=t.data,o=t.isSelected,a=t.label,s=t.value;return(!Tg(e)||!o)&&Mg(e,{label:a,value:s,data:i},r)}function fk(e,t){var n=e.focusedValue,r=e.selectValue,i=r.indexOf(n);if(i>-1){var o=t.indexOf(n);if(o>-1)return n;if(i<t.length)return t[i]}return null}function pk(e,t){var n=e.focusedOption;return n&&t.indexOf(n)>-1?n:t[0]}var ls=function(t,n){var r,i=(r=t.find(function(o){return o.data===n}))===null||r===void 0?void 0:r.id;return i||null},_g=function(t,n){return t.getOptionLabel(n)},La=function(t,n){return t.getOptionValue(n)};function Og(e,t,n){return typeof e.isOptionDisabled=="function"?e.isOptionDisabled(t,n):!1}function Pg(e,t,n){if(n.indexOf(t)>-1)return!0;if(typeof e.isOptionSelected=="function")return e.isOptionSelected(t,n);var r=La(e,t);return n.some(function(i){return La(e,i)===r})}function Mg(e,t,n){return e.filterOption?e.filterOption(t,n):!0}var Tg=function(t){var n=t.hideSelectedOptions,r=t.isMulti;return n===void 0?r:n},hk=1,Ig=function(e){RS(n,e);var t=FS(n);function n(r){var i;if(TS(this,n),i=t.call(this,r),i.state={ariaSelection:null,focusedOption:null,focusedOptionId:null,focusableOptionsWithIds:[],focusedValue:null,inputIsHidden:!1,isFocused:!1,selectValue:[],clearFocusValueOnUpdate:!1,prevWasFocused:!1,inputIsHiddenAfterUpdate:void 0,prevProps:void 0,instancePrefix:""},i.blockOptionHover=!1,i.isComposing=!1,i.commonProps=void 0,i.initialTouchX=0,i.initialTouchY=0,i.openAfterFocus=!1,i.scrollToFocusedOptionOnUpdate=!1,i.userIsDragging=void 0,i.isAppleDevice=J2(),i.controlRef=null,i.getControlRef=function(l){i.controlRef=l},i.focusedOptionRef=null,i.getFocusedOptionRef=function(l){i.focusedOptionRef=l},i.menuListRef=null,i.getMenuListRef=function(l){i.menuListRef=l},i.inputRef=null,i.getInputRef=function(l){i.inputRef=l},i.focus=i.focusInput,i.blur=i.blurInput,i.onChange=function(l,u){var p=i.props,h=p.onChange,m=p.name;u.name=m,i.ariaOnChange(l,u),h(l,u)},i.setValue=function(l,u,p){var h=i.props,m=h.closeMenuOnSelect,x=h.isMulti,g=h.inputValue;i.onInputChange("",{action:"set-value",prevInputValue:g}),m&&(i.setState({inputIsHiddenAfterUpdate:!x}),i.onMenuClose()),i.setState({clearFocusValueOnUpdate:!0}),i.onChange(l,{action:u,option:p})},i.selectOption=function(l){var u=i.props,p=u.blurInputOnSelect,h=u.isMulti,m=u.name,x=i.state.selectValue,g=h&&i.isOptionSelected(l,x),y=i.isOptionDisabled(l,x);if(g){var S=i.getOptionValue(l);i.setValue(x.filter(function(d){return i.getOptionValue(d)!==S}),"deselect-option",l)}else if(!y)h?i.setValue([].concat(Cc(x),[l]),"select-option",l):i.setValue(l,"select-option");else{i.ariaOnChange(l,{action:"select-option",option:l,name:m});return}p&&i.blurInput()},i.removeValue=function(l){var u=i.props.isMulti,p=i.state.selectValue,h=i.getOptionValue(l),m=p.filter(function(g){return i.getOptionValue(g)!==h}),x=Lo(u,m,m[0]||null);i.onChange(x,{action:"remove-value",removedValue:l}),i.focusInput()},i.clearValue=function(){var l=i.state.selectValue;i.onChange(Lo(i.props.isMulti,[],null),{action:"clear",removedValues:l})},i.popValue=function(){var l=i.props.isMulti,u=i.state.selectValue,p=u[u.length-1],h=u.slice(0,u.length-1),m=Lo(l,h,h[0]||null);i.onChange(m,{action:"pop-value",removedValue:p})},i.getFocusedOptionId=function(l){return ls(i.state.focusableOptionsWithIds,l)},i.getFocusableOptionsWithIds=function(){return Af(qo(i.props,i.state.selectValue),i.getElementId("option"))},i.getValue=function(){return i.state.selectValue},i.cx=function(){for(var l=arguments.length,u=new Array(l),p=0;p<l;p++)u[p]=arguments[p];return nb.apply(void 0,[i.props.classNamePrefix].concat(u))},i.getOptionLabel=function(l){return _g(i.props,l)},i.getOptionValue=function(l){return La(i.props,l)},i.getStyles=function(l,u){var p=i.props.unstyled,h=ik[l](u,p);h.boxSizing="border-box";var m=i.props.styles[l];return m?m(h,u):h},i.getClassNames=function(l,u){var p,h;return(p=(h=i.props.classNames)[l])===null||p===void 0?void 0:p.call(h,u)},i.getElementId=function(l){return"".concat(i.state.instancePrefix,"-").concat(l)},i.getComponents=function(){return E2(i.props)},i.buildCategorizedOptions=function(){return qo(i.props,i.state.selectValue)},i.getCategorizedOptions=function(){return i.props.menuIsOpen?i.buildCategorizedOptions():[]},i.buildFocusableOptions=function(){return Eg(i.buildCategorizedOptions())},i.getFocusableOptions=function(){return i.props.menuIsOpen?i.buildFocusableOptions():[]},i.ariaOnChange=function(l,u){i.setState({ariaSelection:K({value:l},u)})},i.onMenuMouseDown=function(l){l.button===0&&(l.stopPropagation(),l.preventDefault(),i.focusInput())},i.onMenuMouseMove=function(l){i.blockOptionHover=!1},i.onControlMouseDown=function(l){if(!l.defaultPrevented){var u=i.props.openMenuOnClick;i.state.isFocused?i.props.menuIsOpen?l.target.tagName!=="INPUT"&&l.target.tagName!=="TEXTAREA"&&i.onMenuClose():u&&i.openMenu("first"):(u&&(i.openAfterFocus=!0),i.focusInput()),l.target.tagName!=="INPUT"&&l.target.tagName!=="TEXTAREA"&&l.preventDefault()}},i.onDropdownIndicatorMouseDown=function(l){if(!(l&&l.type==="mousedown"&&l.button!==0)&&!i.props.isDisabled){var u=i.props,p=u.isMulti,h=u.menuIsOpen;i.focusInput(),h?(i.setState({inputIsHiddenAfterUpdate:!p}),i.onMenuClose()):i.openMenu("first"),l.preventDefault()}},i.onClearIndicatorMouseDown=function(l){l&&l.type==="mousedown"&&l.button!==0||(i.clearValue(),l.preventDefault(),i.openAfterFocus=!1,l.type==="touchend"?i.focusInput():setTimeout(function(){return i.focusInput()}))},i.onScroll=function(l){typeof i.props.closeMenuOnScroll=="boolean"?l.target instanceof HTMLElement&&gl(l.target)&&i.props.onMenuClose():typeof i.props.closeMenuOnScroll=="function"&&i.props.closeMenuOnScroll(l)&&i.props.onMenuClose()},i.onCompositionStart=function(){i.isComposing=!0},i.onCompositionEnd=function(){i.isComposing=!1},i.onTouchStart=function(l){var u=l.touches,p=u&&u.item(0);p&&(i.initialTouchX=p.clientX,i.initialTouchY=p.clientY,i.userIsDragging=!1)},i.onTouchMove=function(l){var u=l.touches,p=u&&u.item(0);if(p){var h=Math.abs(p.clientX-i.initialTouchX),m=Math.abs(p.clientY-i.initialTouchY),x=5;i.userIsDragging=h>x||m>x}},i.onTouchEnd=function(l){i.userIsDragging||(i.controlRef&&!i.controlRef.contains(l.target)&&i.menuListRef&&!i.menuListRef.contains(l.target)&&i.blurInput(),i.initialTouchX=0,i.initialTouchY=0)},i.onControlTouchEnd=function(l){i.userIsDragging||i.onControlMouseDown(l)},i.onClearIndicatorTouchEnd=function(l){i.userIsDragging||i.onClearIndicatorMouseDown(l)},i.onDropdownIndicatorTouchEnd=function(l){i.userIsDragging||i.onDropdownIndicatorMouseDown(l)},i.handleInputChange=function(l){var u=i.props.inputValue,p=l.currentTarget.value;i.setState({inputIsHiddenAfterUpdate:!1}),i.onInputChange(p,{action:"input-change",prevInputValue:u}),i.props.menuIsOpen||i.onMenuOpen()},i.onInputFocus=function(l){i.props.onFocus&&i.props.onFocus(l),i.setState({inputIsHiddenAfterUpdate:!1,isFocused:!0}),(i.openAfterFocus||i.props.openMenuOnFocus)&&i.openMenu("first"),i.openAfterFocus=!1},i.onInputBlur=function(l){var u=i.props.inputValue;if(i.menuListRef&&i.menuListRef.contains(document.activeElement)){i.inputRef.focus();return}i.props.onBlur&&i.props.onBlur(l),i.onInputChange("",{action:"input-blur",prevInputValue:u}),i.onMenuClose(),i.setState({focusedValue:null,isFocused:!1})},i.onOptionHover=function(l){if(!(i.blockOptionHover||i.state.focusedOption===l)){var u=i.getFocusableOptions(),p=u.indexOf(l);i.setState({focusedOption:l,focusedOptionId:p>-1?i.getFocusedOptionId(l):null})}},i.shouldHideSelectedOptions=function(){return Tg(i.props)},i.onValueInputFocus=function(l){l.preventDefault(),l.stopPropagation(),i.focus()},i.onKeyDown=function(l){var u=i.props,p=u.isMulti,h=u.backspaceRemovesValue,m=u.escapeClearsValue,x=u.inputValue,g=u.isClearable,y=u.isDisabled,S=u.menuIsOpen,d=u.onKeyDown,f=u.tabSelectsValue,v=u.openMenuOnFocus,w=i.state,k=w.focusedOption,O=w.focusedValue,j=w.selectValue;if(!y&&!(typeof d=="function"&&(d(l),l.defaultPrevented))){switch(i.blockOptionHover=!0,l.key){case"ArrowLeft":if(!p||x)return;i.focusValue("previous");break;case"ArrowRight":if(!p||x)return;i.focusValue("next");break;case"Delete":case"Backspace":if(x)return;if(O)i.removeValue(O);else{if(!h)return;p?i.popValue():g&&i.clearValue()}break;case"Tab":if(i.isComposing||l.shiftKey||!S||!f||!k||v&&i.isOptionSelected(k,j))return;i.selectOption(k);break;case"Enter":if(l.keyCode===229)break;if(S){if(!k||i.isComposing)return;i.selectOption(k);break}return;case"Escape":S?(i.setState({inputIsHiddenAfterUpdate:!1}),i.onInputChange("",{action:"menu-close",prevInputValue:x}),i.onMenuClose()):g&&m&&i.clearValue();break;case" ":if(x)return;if(!S){i.openMenu("first");break}if(!k)return;i.selectOption(k);break;case"ArrowUp":S?i.focusOption("up"):i.openMenu("last");break;case"ArrowDown":S?i.focusOption("down"):i.openMenu("first");break;case"PageUp":if(!S)return;i.focusOption("pageup");break;case"PageDown":if(!S)return;i.focusOption("pagedown");break;case"Home":if(!S)return;i.focusOption("first");break;case"End":if(!S)return;i.focusOption("last");break;default:return}l.preventDefault()}},i.state.instancePrefix="react-select-"+(i.props.instanceId||++hk),i.state.selectValue=kf(r.value),r.menuIsOpen&&i.state.selectValue.length){var o=i.getFocusableOptionsWithIds(),a=i.buildFocusableOptions(),s=a.indexOf(i.state.selectValue[0]);i.state.focusableOptionsWithIds=o,i.state.focusedOption=a[s],i.state.focusedOptionId=ls(o,a[s])}return i}return IS(n,[{key:"componentDidMount",value:function(){this.startListeningComposition(),this.startListeningToTouch(),this.props.closeMenuOnScroll&&document&&document.addEventListener&&document.addEventListener("scroll",this.onScroll,!0),this.props.autoFocus&&this.focusInput(),this.props.menuIsOpen&&this.state.focusedOption&&this.menuListRef&&this.focusedOptionRef&&Cf(this.menuListRef,this.focusedOptionRef)}},{key:"componentDidUpdate",value:function(i){var o=this.props,a=o.isDisabled,s=o.menuIsOpen,l=this.state.isFocused;(l&&!a&&i.isDisabled||l&&s&&!i.menuIsOpen)&&this.focusInput(),l&&a&&!i.isDisabled?this.setState({isFocused:!1},this.onMenuClose):!l&&!a&&i.isDisabled&&this.inputRef===document.activeElement&&this.setState({isFocused:!0}),this.menuListRef&&this.focusedOptionRef&&this.scrollToFocusedOptionOnUpdate&&(Cf(this.menuListRef,this.focusedOptionRef),this.scrollToFocusedOptionOnUpdate=!1)}},{key:"componentWillUnmount",value:function(){this.stopListeningComposition(),this.stopListeningToTouch(),document.removeEventListener("scroll",this.onScroll,!0)}},{key:"onMenuOpen",value:function(){this.props.onMenuOpen()}},{key:"onMenuClose",value:function(){this.onInputChange("",{action:"menu-close",prevInputValue:this.props.inputValue}),this.props.onMenuClose()}},{key:"onInputChange",value:function(i,o){this.props.onInputChange(i,o)}},{key:"focusInput",value:function(){this.inputRef&&this.inputRef.focus()}},{key:"blurInput",value:function(){this.inputRef&&this.inputRef.blur()}},{key:"openMenu",value:function(i){var o=this,a=this.state,s=a.selectValue,l=a.isFocused,u=this.buildFocusableOptions(),p=i==="first"?0:u.length-1;if(!this.props.isMulti){var h=u.indexOf(s[0]);h>-1&&(p=h)}this.scrollToFocusedOptionOnUpdate=!(l&&this.menuListRef),this.setState({inputIsHiddenAfterUpdate:!1,focusedValue:null,focusedOption:u[p],focusedOptionId:this.getFocusedOptionId(u[p])},function(){return o.onMenuOpen()})}},{key:"focusValue",value:function(i){var o=this.state,a=o.selectValue,s=o.focusedValue;if(this.props.isMulti){this.setState({focusedOption:null});var l=a.indexOf(s);s||(l=-1);var u=a.length-1,p=-1;if(a.length){switch(i){case"previous":l===0?p=0:l===-1?p=u:p=l-1;break;case"next":l>-1&&l<u&&(p=l+1);break}this.setState({inputIsHidden:p!==-1,focusedValue:a[p]})}}}},{key:"focusOption",value:function(){var i=arguments.length>0&&arguments[0]!==void 0?arguments[0]:"first",o=this.props.pageSize,a=this.state.focusedOption,s=this.getFocusableOptions();if(s.length){var l=0,u=s.indexOf(a);a||(u=-1),i==="up"?l=u>0?u-1:s.length-1:i==="down"?l=(u+1)%s.length:i==="pageup"?(l=u-o,l<0&&(l=0)):i==="pagedown"?(l=u+o,l>s.length-1&&(l=s.length-1)):i==="last"&&(l=s.length-1),this.scrollToFocusedOptionOnUpdate=!0,this.setState({focusedOption:s[l],focusedValue:null,focusedOptionId:this.getFocusedOptionId(s[l])})}}},{key:"getTheme",value:function(){return this.props.theme?typeof this.props.theme=="function"?this.props.theme(as):K(K({},as),this.props.theme):as}},{key:"getCommonProps",value:function(){var i=this.clearValue,o=this.cx,a=this.getStyles,s=this.getClassNames,l=this.getValue,u=this.selectOption,p=this.setValue,h=this.props,m=h.isMulti,x=h.isRtl,g=h.options,y=this.hasValue();return{clearValue:i,cx:o,getStyles:a,getClassNames:s,getValue:l,hasValue:y,isMulti:m,isRtl:x,options:g,selectOption:u,selectProps:h,setValue:p,theme:this.getTheme()}}},{key:"hasValue",value:function(){var i=this.state.selectValue;return i.length>0}},{key:"hasOptions",value:function(){return!!this.getFocusableOptions().length}},{key:"isClearable",value:function(){var i=this.props,o=i.isClearable,a=i.isMulti;return o===void 0?a:o}},{key:"isOptionDisabled",value:function(i,o){return Og(this.props,i,o)}},{key:"isOptionSelected",value:function(i,o){return Pg(this.props,i,o)}},{key:"filterOption",value:function(i,o){return Mg(this.props,i,o)}},{key:"formatOptionLabel",value:function(i,o){if(typeof this.props.formatOptionLabel=="function"){var a=this.props.inputValue,s=this.state.selectValue;return this.props.formatOptionLabel(i,{context:o,inputValue:a,selectValue:s})}else return this.getOptionLabel(i)}},{key:"formatGroupLabel",value:function(i){return this.props.formatGroupLabel(i)}},{key:"startListeningComposition",value:function(){document&&document.addEventListener&&(document.addEventListener("compositionstart",this.onCompositionStart,!1),document.addEventListener("compositionend",this.onCompositionEnd,!1))}},{key:"stopListeningComposition",value:function(){document&&document.removeEventListener&&(document.removeEventListener("compositionstart",this.onCompositionStart),document.removeEventListener("compositionend",this.onCompositionEnd))}},{key:"startListeningToTouch",value:function(){document&&document.addEventListener&&(document.addEventListener("touchstart",this.onTouchStart,!1),document.addEventListener("touchmove",this.onTouchMove,!1),document.addEventListener("touchend",this.onTouchEnd,!1))}},{key:"stopListeningToTouch",value:function(){document&&document.removeEventListener&&(document.removeEventListener("touchstart",this.onTouchStart),document.removeEventListener("touchmove",this.onTouchMove),document.removeEventListener("touchend",this.onTouchEnd))}},{key:"renderInput",value:function(){var i=this.props,o=i.isDisabled,a=i.isSearchable,s=i.inputId,l=i.inputValue,u=i.tabIndex,p=i.form,h=i.menuIsOpen,m=i.required,x=this.getComponents(),g=x.Input,y=this.state,S=y.inputIsHidden,d=y.ariaSelection,f=this.commonProps,v=s||this.getElementId("input"),w=K(K(K({"aria-autocomplete":"list","aria-expanded":h,"aria-haspopup":!0,"aria-errormessage":this.props["aria-errormessage"],"aria-invalid":this.props["aria-invalid"],"aria-label":this.props["aria-label"],"aria-labelledby":this.props["aria-labelledby"],"aria-required":m,role:"combobox","aria-activedescendant":this.isAppleDevice?void 0:this.state.focusedOptionId||""},h&&{"aria-controls":this.getElementId("listbox")}),!a&&{"aria-readonly":!0}),this.hasValue()?(d==null?void 0:d.action)==="initial-input-focus"&&{"aria-describedby":this.getElementId("live-region")}:{"aria-describedby":this.getElementId("placeholder")});return a?T.createElement(g,X({},f,{autoCapitalize:"none",autoComplete:"off",autoCorrect:"off",id:v,innerRef:this.getInputRef,isDisabled:o,isHidden:S,onBlur:this.onInputBlur,onChange:this.handleInputChange,onFocus:this.onInputFocus,spellCheck:"false",tabIndex:u,form:p,type:"text",value:l},w)):T.createElement($2,X({id:v,innerRef:this.getInputRef,onBlur:this.onInputBlur,onChange:Ia,onFocus:this.onInputFocus,disabled:o,tabIndex:u,inputMode:"none",form:p,value:""},w))}},{key:"renderPlaceholderOrValue",value:function(){var i=this,o=this.getComponents(),a=o.MultiValue,s=o.MultiValueContainer,l=o.MultiValueLabel,u=o.MultiValueRemove,p=o.SingleValue,h=o.Placeholder,m=this.commonProps,x=this.props,g=x.controlShouldRenderValue,y=x.isDisabled,S=x.isMulti,d=x.inputValue,f=x.placeholder,v=this.state,w=v.selectValue,k=v.focusedValue,O=v.isFocused;if(!this.hasValue()||!g)return d?null:T.createElement(h,X({},m,{key:"placeholder",isDisabled:y,isFocused:O,innerProps:{id:this.getElementId("placeholder")}}),f);if(S)return w.map(function(P,M){var I=P===k,U="".concat(i.getOptionLabel(P),"-").concat(i.getOptionValue(P));return T.createElement(a,X({},m,{components:{Container:s,Label:l,Remove:u},isFocused:I,isDisabled:y,key:U,index:M,removeProps:{onClick:function(){return i.removeValue(P)},onTouchEnd:function(){return i.removeValue(P)},onMouseDown:function(R){R.preventDefault()}},data:P}),i.formatOptionLabel(P,"value"))});if(d)return null;var j=w[0];return T.createElement(p,X({},m,{data:j,isDisabled:y}),this.formatOptionLabel(j,"value"))}},{key:"renderClearIndicator",value:function(){var i=this.getComponents(),o=i.ClearIndicator,a=this.commonProps,s=this.props,l=s.isDisabled,u=s.isLoading,p=this.state.isFocused;if(!this.isClearable()||!o||l||!this.hasValue()||u)return null;var h={onMouseDown:this.onClearIndicatorMouseDown,onTouchEnd:this.onClearIndicatorTouchEnd,"aria-hidden":"true"};return T.createElement(o,X({},a,{innerProps:h,isFocused:p}))}},{key:"renderLoadingIndicator",value:function(){var i=this.getComponents(),o=i.LoadingIndicator,a=this.commonProps,s=this.props,l=s.isDisabled,u=s.isLoading,p=this.state.isFocused;if(!o||!u)return null;var h={"aria-hidden":"true"};return T.createElement(o,X({},a,{innerProps:h,isDisabled:l,isFocused:p}))}},{key:"renderIndicatorSeparator",value:function(){var i=this.getComponents(),o=i.DropdownIndicator,a=i.IndicatorSeparator;if(!o||!a)return null;var s=this.commonProps,l=this.props.isDisabled,u=this.state.isFocused;return T.createElement(a,X({},s,{isDisabled:l,isFocused:u}))}},{key:"renderDropdownIndicator",value:function(){var i=this.getComponents(),o=i.DropdownIndicator;if(!o)return null;var a=this.commonProps,s=this.props.isDisabled,l=this.state.isFocused,u={onMouseDown:this.onDropdownIndicatorMouseDown,onTouchEnd:this.onDropdownIndicatorTouchEnd,"aria-hidden":"true"};return T.createElement(o,X({},a,{innerProps:u,isDisabled:s,isFocused:l}))}},{key:"renderMenu",value:function(){var i=this,o=this.getComponents(),a=o.Group,s=o.GroupHeading,l=o.Menu,u=o.MenuList,p=o.MenuPortal,h=o.LoadingMessage,m=o.NoOptionsMessage,x=o.Option,g=this.commonProps,y=this.state.focusedOption,S=this.props,d=S.captureMenuScroll,f=S.inputValue,v=S.isLoading,w=S.loadingMessage,k=S.minMenuHeight,O=S.maxMenuHeight,j=S.menuIsOpen,P=S.menuPlacement,M=S.menuPosition,I=S.menuPortalTarget,U=S.menuShouldBlockScroll,D=S.menuShouldScrollIntoView,R=S.noOptionsMessage,G=S.onMenuScrollToTop,q=S.onMenuScrollToBottom;if(!j)return null;var J=function(Ce,ye){var Ae=Ce.type,fe=Ce.data,xe=Ce.isDisabled,Xe=Ce.isSelected,ht=Ce.label,V=Ce.value,W=y===fe,re=xe?void 0:function(){return i.onOptionHover(fe)},ie=xe?void 0:function(){return i.selectOption(fe)},ee="".concat(i.getElementId("option"),"-").concat(ye),ae={id:ee,onClick:ie,onMouseMove:re,onMouseOver:re,tabIndex:-1,role:"option","aria-selected":i.isAppleDevice?void 0:Xe};return T.createElement(x,X({},g,{innerProps:ae,data:fe,isDisabled:xe,isSelected:Xe,key:ee,label:ht,type:Ae,value:V,isFocused:W,innerRef:W?i.getFocusedOptionRef:void 0}),i.formatOptionLabel(Ce.data,"menu"))},me;if(this.hasOptions())me=this.getCategorizedOptions().map(function(te){if(te.type==="group"){var Ce=te.data,ye=te.options,Ae=te.index,fe="".concat(i.getElementId("group"),"-").concat(Ae),xe="".concat(fe,"-heading");return T.createElement(a,X({},g,{key:fe,data:Ce,options:ye,Heading:s,headingProps:{id:xe,data:te.data},label:i.formatGroupLabel(te.data)}),te.options.map(function(Xe){return J(Xe,"".concat(Ae,"-").concat(Xe.index))}))}else if(te.type==="option")return J(te,"".concat(te.index))});else if(v){var F=w({inputValue:f});if(F===null)return null;me=T.createElement(h,g,F)}else{var B=R({inputValue:f});if(B===null)return null;me=T.createElement(m,g,B)}var Q={minMenuHeight:k,maxMenuHeight:O,menuPlacement:P,menuPosition:M,menuShouldScrollIntoView:D},ue=T.createElement(yb,X({},g,Q),function(te){var Ce=te.ref,ye=te.placerProps,Ae=ye.placement,fe=ye.maxHeight;return T.createElement(l,X({},g,Q,{innerRef:Ce,innerProps:{onMouseDown:i.onMenuMouseDown,onMouseMove:i.onMenuMouseMove},isLoading:v,placement:Ae}),T.createElement(Q2,{captureEnabled:d,onTopArrive:G,onBottomArrive:q,lockEnabled:U},function(xe){return T.createElement(u,X({},g,{innerRef:function(ht){i.getMenuListRef(ht),xe(ht)},innerProps:{role:"listbox","aria-multiselectable":g.isMulti,id:i.getElementId("listbox")},isLoading:v,maxHeight:fe,focusedOption:y}),me)}))});return I||M==="fixed"?T.createElement(p,X({},g,{appendTo:I,controlElement:this.controlRef,menuPlacement:P,menuPosition:M}),ue):ue}},{key:"renderFormField",value:function(){var i=this,o=this.props,a=o.delimiter,s=o.isDisabled,l=o.isMulti,u=o.name,p=o.required,h=this.state.selectValue;if(p&&!this.hasValue()&&!s)return T.createElement(G2,{name:u,onFocus:this.onValueInputFocus});if(!(!u||s))if(l)if(a){var m=h.map(function(y){return i.getOptionValue(y)}).join(a);return T.createElement("input",{name:u,type:"hidden",value:m})}else{var x=h.length>0?h.map(function(y,S){return T.createElement("input",{key:"i-".concat(S),name:u,type:"hidden",value:i.getOptionValue(y)})}):T.createElement("input",{name:u,type:"hidden",value:""});return T.createElement("div",null,x)}else{var g=h[0]?this.getOptionValue(h[0]):"";return T.createElement("input",{name:u,type:"hidden",value:g})}}},{key:"renderLiveRegion",value:function(){var i=this.commonProps,o=this.state,a=o.ariaSelection,s=o.focusedOption,l=o.focusedValue,u=o.isFocused,p=o.selectValue,h=this.getFocusableOptions();return T.createElement(L2,X({},i,{id:this.getElementId("live-region"),ariaSelection:a,focusedOption:s,focusedValue:l,isFocused:u,selectValue:p,focusableOptions:h,isAppleDevice:this.isAppleDevice}))}},{key:"render",value:function(){var i=this.getComponents(),o=i.Control,a=i.IndicatorsContainer,s=i.SelectContainer,l=i.ValueContainer,u=this.props,p=u.className,h=u.id,m=u.isDisabled,x=u.menuIsOpen,g=this.state.isFocused,y=this.commonProps=this.getCommonProps();return T.createElement(s,X({},y,{className:p,innerProps:{id:h,onKeyDown:this.onKeyDown},isDisabled:m,isFocused:g}),this.renderLiveRegion(),T.createElement(o,X({},y,{innerRef:this.getControlRef,innerProps:{onMouseDown:this.onControlMouseDown,onTouchEnd:this.onControlTouchEnd},isDisabled:m,isFocused:g,menuIsOpen:x}),T.createElement(l,X({},y,{isDisabled:m}),this.renderPlaceholderOrValue(),this.renderInput()),T.createElement(a,X({},y,{isDisabled:m}),this.renderClearIndicator(),this.renderLoadingIndicator(),this.renderIndicatorSeparator(),this.renderDropdownIndicator())),this.renderMenu(),this.renderFormField())}}],[{key:"getDerivedStateFromProps",value:function(i,o){var a=o.prevProps,s=o.clearFocusValueOnUpdate,l=o.inputIsHiddenAfterUpdate,u=o.ariaSelection,p=o.isFocused,h=o.prevWasFocused,m=o.instancePrefix,x=i.options,g=i.value,y=i.menuIsOpen,S=i.inputValue,d=i.isMulti,f=kf(g),v={};if(a&&(g!==a.value||x!==a.options||y!==a.menuIsOpen||S!==a.inputValue)){var w=y?dk(i,f):[],k=y?Af(qo(i,f),"".concat(m,"-option")):[],O=s?fk(o,f):null,j=pk(o,w),P=ls(k,j);v={selectValue:f,focusedOption:j,focusedOptionId:P,focusableOptionsWithIds:k,focusedValue:O,clearFocusValueOnUpdate:!1}}var M=l!=null&&i!==a?{inputIsHidden:l,inputIsHiddenAfterUpdate:void 0}:{},I=u,U=p&&h;return p&&!U&&(I={value:Lo(d,f,f[0]||null),options:f,action:"initial-input-focus"},U=!h),(u==null?void 0:u.action)==="initial-input-focus"&&(I=null),K(K(K({},v),M),{},{prevProps:i,ariaSelection:I,prevWasFocused:U})}}]),n}(T.Component);Ig.defaultProps=ck;var mk=T.forwardRef(function(e,t){var n=MS(e);return T.createElement(Ig,X({ref:t},n))}),gk=mk;const vk=(e,t)=>{const[n,r]=T.useState(()=>{try{const o=window.localStorage.getItem(e);return o?JSON.parse(o):t}catch(o){return console.error("Error loading data from localStorage:",o),t}});return[n,o=>{try{const a=o instanceof Function?o(n):o;r(a),window.localStorage.setItem(e,JSON.stringify(a))}catch(a){console.error("Error storing data to localStorage:",a)}}]},$f=[{value:"",label:"Оберіть послугу"},{value:"Менторство та консультації",label:"Менторство та консультації"},{value:"Діагностика",label:"Діагностика"},{value:"Стратегії",label:"Стратегії"},{value:"Навчання",label:"Навчання"},{value:"Інше",label:"Інше"}],Nf="/healthy-management-project/assets/computer1x-bHdljI7O.webp",yk="/healthy-management-project/assets/computer@2x-PvRGcLkF.webp",Uf="/healthy-management-project/assets/mob_computer1x-gdjE7oao.webp",xk="/healthy-management-project/assets/mob_computer@2x-JptvcU_h.webp",tn=()=>c.jsx("svg",{width:"8",height:"8",children:c.jsx("use",{href:`${Zo}#star`})});var Rg={exports:{}};function wk(e){return e&&typeof e=="object"&&"default"in e?e.default:e}var ss=wk(T),Sk=eo;function bk(e,t){for(var n=Object.getOwnPropertyNames(t),r=0;r<n.length;r++){var i=n[r],o=Object.getOwnPropertyDescriptor(t,i);o&&o.configurable&&e[i]===void 0&&Object.defineProperty(e,i,o)}return e}function vu(){return(vu=Object.assign||function(e){for(var t=1;t<arguments.length;t++){var n=arguments[t];for(var r in n)Object.prototype.hasOwnProperty.call(n,r)&&(e[r]=n[r])}return e}).apply(this,arguments)}function kk(e,t){e.prototype=Object.create(t.prototype),bk(e.prototype.constructor=e,t)}function Ck(e,t){if(e==null)return{};var n,r,i={},o=Object.keys(e);for(r=0;r<o.length;r++)n=o[r],0<=t.indexOf(n)||(i[n]=e[n]);return i}function hr(e){if(e===void 0)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return e}var jk=function(e,t,n,r,i,o,a,s){if(!e){var l;if(t===void 0)l=new Error("Minified exception occurred; use the non-minified dev environment for the full error message and additional helpful warnings.");else{var u=[n,r,i,o,a,s],p=0;(l=new Error(t.replace(/%s/g,function(){return u[p++]}))).name="Invariant Violation"}throw l.framesToPop=1,l}},Wf=jk;function Hf(e,t,n){if("selectionStart"in e&&"selectionEnd"in e)e.selectionStart=t,e.selectionEnd=n;else{var r=e.createTextRange();r.collapse(!0),r.moveStart("character",t),r.moveEnd("character",n-t),r.select()}}function Ek(e){var t=0,n=0;if("selectionStart"in e&&"selectionEnd"in e)t=e.selectionStart,n=e.selectionEnd;else{var r=document.selection.createRange();r.parentElement()===e&&(t=-r.moveStart("character",-e.value.length),n=-r.moveEnd("character",-e.value.length))}return{start:t,end:n,length:n-t}}var _k={9:"[0-9]",a:"[A-Za-z]","*":"[A-Za-z0-9]"},Ok="_";function Bf(e,t,n){var r="",i="",o=null,a=[];if(t===void 0&&(t=Ok),n==null&&(n=_k),!e||typeof e!="string")return{maskChar:t,formatChars:n,mask:null,prefix:null,lastEditablePosition:null,permanents:[]};var s=!1;return e.split("").forEach(function(l){s=!s&&l==="\\"||(s||!n[l]?(a.push(r.length),r.length===a.length-1&&(i+=l)):o=r.length+1,r+=l,!1)}),{maskChar:t,formatChars:n,prefix:i,mask:r,lastEditablePosition:o,permanents:a}}function wt(e,t){return e.permanents.indexOf(t)!==-1}function vl(e,t,n){var r=e.mask,i=e.formatChars;if(!n)return!1;if(wt(e,t))return r[t]===n;var o=i[r[t]];return new RegExp(o).test(n)}function Qf(e,t){return t.split("").every(function(n,r){return wt(e,r)||!vl(e,r,n)})}function gi(e,t){var n=e.maskChar,r=e.prefix;if(!n){for(;t.length>r.length&&wt(e,t.length-1);)t=t.slice(0,t.length-1);return t.length}for(var i=r.length,o=t.length;o>=r.length;o--){var a=t[o];if(!wt(e,o)&&vl(e,o,a)){i=o+1;break}}return i}function Lg(e,t){return gi(e,t)===e.mask.length}function on(e,t){var n=e.maskChar,r=e.mask,i=e.prefix;if(!n){for((t=yu(e,"",t,0)).length<i.length&&(t=i);t.length<r.length&&wt(e,t.length);)t+=r[t.length];return t}if(t)return yu(e,on(e,""),t,0);for(var o=0;o<r.length;o++)wt(e,o)?t+=r[o]:t+=n;return t}function Pk(e,t,n,r){var i=n+r,o=e.maskChar,a=e.mask,s=e.prefix,l=t.split("");if(o)return l.map(function(p,h){return h<n||i<=h?p:wt(e,h)?a[h]:o}).join("");for(var u=i;u<l.length;u++)wt(e,u)&&(l[u]="");return n=Math.max(s.length,n),l.splice(n,i-n),t=l.join(""),on(e,t)}function yu(e,t,n,r){var i=e.mask,o=e.maskChar,a=e.prefix,s=n.split(""),l=Lg(e,t);return!o&&r>t.length&&(t+=i.slice(t.length,r)),s.every(function(u){for(;x=u,wt(e,m=r)&&x!==i[m];){if(r>=t.length&&(t+=i[r]),p=u,h=r,o&&wt(e,h)&&p===o)return!0;if(++r>=i.length)return!1}var p,h,m,x;return!vl(e,r,u)&&u!==o||(r<t.length?t=o||l||r<a.length?t.slice(0,r)+u+t.slice(r+1):(t=t.slice(0,r)+u+t.slice(r),on(e,t)):o||(t+=u),++r<i.length)}),t}function Mk(e,t,n,r){var i=e.mask,o=e.maskChar,a=n.split(""),s=r;return a.every(function(l){for(;p=l,wt(e,u=r)&&p!==i[u];)if(++r>=i.length)return!1;var u,p;return(vl(e,r,l)||l===o)&&r++,r<i.length}),r-s}function Tk(e,t){for(var n=t;0<=n;--n)if(!wt(e,n))return n;return null}function Ei(e,t){for(var n=e.mask,r=t;r<n.length;++r)if(!wt(e,r))return r;return null}function us(e){return e||e===0?e+"":""}function Ik(e,t,n,r,i){var o=e.mask,a=e.prefix,s=e.lastEditablePosition,l=t,u="",p=0,h=0,m=Math.min(i.start,n.start);return n.end>i.start?h=(p=Mk(e,r,u=l.slice(i.start,n.end),m))?i.length:0:l.length<r.length&&(h=r.length-l.length),l=r,h&&(h===1&&!i.length&&(m=i.start===n.start?Ei(e,n.start):Tk(e,n.start)),l=Pk(e,l,m,h)),l=yu(e,l,u,m),(m+=p)>=o.length?m=o.length:m<a.length&&!p?m=a.length:m>=a.length&&m<s&&p&&(m=Ei(e,m)),u||(u=null),{value:l=on(e,l),enteredString:u,selection:{start:m,end:m}}}function Rk(){var e=new RegExp("windows","i"),t=new RegExp("phone","i"),n=navigator.userAgent;return e.test(n)&&t.test(n)}function lt(e){return typeof e=="function"}function Lk(){return window.requestAnimationFrame||window.webkitRequestAnimationFrame||window.mozRequestAnimationFrame}function Dg(){return window.cancelAnimationFrame||window.webkitCancelRequestAnimationFrame||window.webkitCancelAnimationFrame||window.mozCancelAnimationFrame}function Yf(e){return(Dg()?Lk():function(){return setTimeout(e,1e3/60)})(e)}function cs(e){(Dg()||clearTimeout)(e)}var Dk=function(e){function t(r){var i=e.call(this,r)||this;i.focused=!1,i.mounted=!1,i.previousSelection=null,i.selectionDeferId=null,i.saveSelectionLoopDeferId=null,i.saveSelectionLoop=function(){i.previousSelection=i.getSelection(),i.saveSelectionLoopDeferId=Yf(i.saveSelectionLoop)},i.runSaveSelectionLoop=function(){i.saveSelectionLoopDeferId===null&&i.saveSelectionLoop()},i.stopSaveSelectionLoop=function(){i.saveSelectionLoopDeferId!==null&&(cs(i.saveSelectionLoopDeferId),i.saveSelectionLoopDeferId=null,i.previousSelection=null)},i.getInputDOMNode=function(){if(!i.mounted)return null;var g=Sk.findDOMNode(hr(hr(i))),y=typeof window<"u"&&g instanceof window.Element;if(g&&!y)return null;if(g.nodeName!=="INPUT"&&(g=g.querySelector("input")),!g)throw new Error("react-input-mask: inputComponent doesn't contain input node");return g},i.getInputValue=function(){var g=i.getInputDOMNode();return g?g.value:null},i.setInputValue=function(g){var y=i.getInputDOMNode();y&&(i.value=g,y.value=g)},i.setCursorToEnd=function(){var g=gi(i.maskOptions,i.value),y=Ei(i.maskOptions,g);y!==null&&i.setCursorPosition(y)},i.setSelection=function(g,y,S){S===void 0&&(S={});var d=i.getInputDOMNode(),f=i.isFocused();d&&f&&(S.deferred||Hf(d,g,y),i.selectionDeferId!==null&&cs(i.selectionDeferId),i.selectionDeferId=Yf(function(){i.selectionDeferId=null,Hf(d,g,y)}),i.previousSelection={start:g,end:y,length:Math.abs(y-g)})},i.getSelection=function(){return Ek(i.getInputDOMNode())},i.getCursorPosition=function(){return i.getSelection().start},i.setCursorPosition=function(g){i.setSelection(g,g)},i.isFocused=function(){return i.focused},i.getBeforeMaskedValueChangeConfig=function(){var g=i.maskOptions,y=g.mask,S=g.maskChar,d=g.permanents,f=g.formatChars;return{mask:y,maskChar:S,permanents:d,alwaysShowMask:!!i.props.alwaysShowMask,formatChars:f}},i.isInputAutofilled=function(g,y,S,d){var f=i.getInputDOMNode();try{if(f.matches(":-webkit-autofill"))return!0}catch{}return!i.focused||d.end<S.length&&y.end===g.length},i.onChange=function(g){var y=hr(hr(i)).beforePasteState,S=hr(hr(i)).previousSelection,d=i.props.beforeMaskedValueChange,f=i.getInputValue(),v=i.value,w=i.getSelection();i.isInputAutofilled(f,w,v,S)&&(v=on(i.maskOptions,""),S={start:0,end:0,length:0}),y&&(S=y.selection,v=y.value,w={start:S.start+f.length,end:S.start+f.length,length:0},f=v.slice(0,S.start)+f+v.slice(S.end),i.beforePasteState=null);var k=Ik(i.maskOptions,f,w,v,S),O=k.enteredString,j=k.selection,P=k.value;if(lt(d)){var M=d({value:P,selection:j},{value:v,selection:S},O,i.getBeforeMaskedValueChangeConfig());P=M.value,j=M.selection}i.setInputValue(P),lt(i.props.onChange)&&i.props.onChange(g),i.isWindowsPhoneBrowser?i.setSelection(j.start,j.end,{deferred:!0}):i.setSelection(j.start,j.end)},i.onFocus=function(g){var y=i.props.beforeMaskedValueChange,S=i.maskOptions,d=S.mask,f=S.prefix;if(i.focused=!0,i.mounted=!0,d){if(i.value)gi(i.maskOptions,i.value)<i.maskOptions.mask.length&&i.setCursorToEnd();else{var v=on(i.maskOptions,f),w=on(i.maskOptions,v),k=gi(i.maskOptions,w),O=Ei(i.maskOptions,k),j={start:O,end:O};if(lt(y)){var P=y({value:w,selection:j},{value:i.value,selection:null},null,i.getBeforeMaskedValueChangeConfig());w=P.value,j=P.selection}var M=w!==i.getInputValue();M&&i.setInputValue(w),M&&lt(i.props.onChange)&&i.props.onChange(g),i.setSelection(j.start,j.end)}i.runSaveSelectionLoop()}lt(i.props.onFocus)&&i.props.onFocus(g)},i.onBlur=function(g){var y=i.props.beforeMaskedValueChange,S=i.maskOptions.mask;if(i.stopSaveSelectionLoop(),i.focused=!1,S&&!i.props.alwaysShowMask&&Qf(i.maskOptions,i.value)){var d="";lt(y)&&(d=y({value:d,selection:null},{value:i.value,selection:i.previousSelection},null,i.getBeforeMaskedValueChangeConfig()).value);var f=d!==i.getInputValue();f&&i.setInputValue(d),f&&lt(i.props.onChange)&&i.props.onChange(g)}lt(i.props.onBlur)&&i.props.onBlur(g)},i.onMouseDown=function(g){if(!i.focused&&document.addEventListener){i.mouseDownX=g.clientX,i.mouseDownY=g.clientY,i.mouseDownTime=new Date().getTime();var y=function S(d){if(document.removeEventListener("mouseup",S),i.focused){var f=Math.abs(d.clientX-i.mouseDownX),v=Math.abs(d.clientY-i.mouseDownY),w=Math.max(f,v),k=new Date().getTime()-i.mouseDownTime;(w<=10&&k<=200||w<=5&&k<=300)&&i.setCursorToEnd()}};document.addEventListener("mouseup",y)}lt(i.props.onMouseDown)&&i.props.onMouseDown(g)},i.onPaste=function(g){lt(i.props.onPaste)&&i.props.onPaste(g),g.defaultPrevented||(i.beforePasteState={value:i.getInputValue(),selection:i.getSelection()},i.setInputValue(""))},i.handleRef=function(g){i.props.children==null&&lt(i.props.inputRef)&&i.props.inputRef(g)};var o=r.mask,a=r.maskChar,s=r.formatChars,l=r.alwaysShowMask,u=r.beforeMaskedValueChange,p=r.defaultValue,h=r.value;i.maskOptions=Bf(o,a,s),p==null&&(p=""),h==null&&(h=p);var m=us(h);if(i.maskOptions.mask&&(l||m)&&(m=on(i.maskOptions,m),lt(u))){var x=r.value;r.value==null&&(x=p),m=u({value:m,selection:null},{value:x=us(x),selection:null},null,i.getBeforeMaskedValueChangeConfig()).value}return i.value=m,i}kk(t,e);var n=t.prototype;return n.componentDidMount=function(){this.mounted=!0,this.getInputDOMNode()&&(this.isWindowsPhoneBrowser=Rk(),this.maskOptions.mask&&this.getInputValue()!==this.value&&this.setInputValue(this.value))},n.componentDidUpdate=function(){var r=this.previousSelection,i=this.props,o=i.beforeMaskedValueChange,a=i.alwaysShowMask,s=i.mask,l=i.maskChar,u=i.formatChars,p=this.maskOptions,h=a||this.isFocused(),m=this.props.value!=null,x=m?us(this.props.value):this.value,g=r?r.start:null;if(this.maskOptions=Bf(s,l,u),this.maskOptions.mask){!p.mask&&this.isFocused()&&this.runSaveSelectionLoop();var y=this.maskOptions.mask&&this.maskOptions.mask!==p.mask;if(p.mask||m||(x=this.getInputValue()),(y||this.maskOptions.mask&&(x||h))&&(x=on(this.maskOptions,x)),y){var S=gi(this.maskOptions,x);(g===null||S<g)&&(g=Lg(this.maskOptions,x)?S:Ei(this.maskOptions,S))}!this.maskOptions.mask||!Qf(this.maskOptions,x)||h||m&&this.props.value||(x="");var d={start:g,end:g};if(lt(o)){var f=o({value:x,selection:d},{value:this.value,selection:this.previousSelection},null,this.getBeforeMaskedValueChangeConfig());x=f.value,d=f.selection}this.value=x;var v=this.getInputValue()!==this.value;v?(this.setInputValue(this.value),this.forceUpdate()):y&&this.forceUpdate();var w=!1;d.start!=null&&d.end!=null&&(w=!r||r.start!==d.start||r.end!==d.end),(w||v)&&this.setSelection(d.start,d.end)}else p.mask&&(this.stopSaveSelectionLoop(),this.forceUpdate())},n.componentWillUnmount=function(){this.mounted=!1,this.selectionDeferId!==null&&cs(this.selectionDeferId),this.stopSaveSelectionLoop()},n.render=function(){var r,i=this.props,o=(i.mask,i.alwaysShowMask,i.maskChar,i.formatChars,i.inputRef,i.beforeMaskedValueChange,i.children),a=Ck(i,["mask","alwaysShowMask","maskChar","formatChars","inputRef","beforeMaskedValueChange","children"]);if(o){lt(o)||Wf(!1);var s=["onChange","onPaste","onMouseDown","onFocus","onBlur","value","disabled","readOnly"],l=vu({},a);s.forEach(function(p){return delete l[p]}),r=o(l),s.filter(function(p){return r.props[p]!=null&&r.props[p]!==a[p]}).length&&Wf(!1)}else r=ss.createElement("input",vu({ref:this.handleRef},a));var u={onFocus:this.onFocus,onBlur:this.onBlur};return this.maskOptions.mask&&(a.disabled||a.readOnly||(u.onChange=this.onChange,u.onPaste=this.onPaste,u.onMouseDown=this.onMouseDown),a.value!=null&&(u.value=this.value)),r=ss.cloneElement(r,u)},t}(ss.Component),Vk=Dk;Rg.exports=Vk;var Fk=Rg.exports;const Ak=Ki(Fk),zk=E.div`
  padding: 80px 0;
`,$k=E.h2`
  margin-bottom: 40px;
  font-size: 48px;
  font-weight: 600;
  line-height: 1.17;
  color: var(--typography-black);
`,Nk=E.div`
  width: 100%;
  height: auto;
  display: flex;
  gap: 24px;
`,Kf=E.img`
  width: 100%;
  height: 100%;
`,Uk=E.div`
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  gap: 40px;
  flex: 1 0 0;
  max-width: 828px;
  padding: 80px;
  border-radius: 16px;
  background-color: var(--background-white);
`,Wk=E.h3`
  font-size: 20px;
  font-weight: 600;
  line-height: 1.33;
  color: var(--primary-bluedark);
`,Hk=E.form`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-self: stretch;
`,Do=E.label`
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
`,Bk=E.label`
  display: flex;
  align-content: flex-start;
  flex-wrap: wrap;
  gap: 10px;
  font-size: 16px;
  font-weight: 600;
  line-height: 1.5;
  color: var(--primary-bluedark);
`,Qk=E(tn)`
  vertical-align: super;
`,Gf=E.input`
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
`,Yk=E(Ak)`
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
`,Kk=E.textarea`
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
`,ui=E.p`
  display: flex;
  gap: 8px;
  align-items: center;
  font-size: 12px;
  font-weight: 400;
  line-height: 1.33;
  color: var(--secondary-red);
`,Gk=E.button`
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
`;var no=e=>e.type==="checkbox",Or=e=>e instanceof Date,rt=e=>e==null;const Vg=e=>typeof e=="object";var Ne=e=>!rt(e)&&!Array.isArray(e)&&Vg(e)&&!Or(e),Fg=e=>Ne(e)&&e.target?no(e.target)?e.target.checked:e.target.value:e,Xk=e=>e.substring(0,e.search(/\.\d+(\.|$)/))||e,Ag=(e,t)=>e.has(Xk(t)),Zk=e=>{const t=e.constructor&&e.constructor.prototype;return Ne(t)&&t.hasOwnProperty("isPrototypeOf")},Mc=typeof window<"u"&&typeof window.HTMLElement<"u"&&typeof document<"u";function Lt(e){let t;const n=Array.isArray(e);if(e instanceof Date)t=new Date(e);else if(e instanceof Set)t=new Set(e);else if(!(Mc&&(e instanceof Blob||e instanceof FileList))&&(n||Ne(e)))if(t=n?[]:{},!n&&!Zk(e))t=e;else for(const r in e)e.hasOwnProperty(r)&&(t[r]=Lt(e[r]));else return e;return t}var ro=e=>Array.isArray(e)?e.filter(Boolean):[],Ie=e=>e===void 0,N=(e,t,n)=>{if(!t||!Ne(e))return n;const r=ro(t.split(/[,[\].]+?/)).reduce((i,o)=>rt(i)?i:i[o],e);return Ie(r)||r===e?Ie(e[t])?n:e[t]:r},Gt=e=>typeof e=="boolean";const Da={BLUR:"blur",FOCUS_OUT:"focusout",CHANGE:"change"},At={onBlur:"onBlur",onChange:"onChange",onSubmit:"onSubmit",onTouched:"onTouched",all:"all"},en={max:"max",min:"min",maxLength:"maxLength",minLength:"minLength",pattern:"pattern",required:"required",validate:"validate"},qk=be.createContext(null),Tc=()=>be.useContext(qk);var zg=(e,t,n,r=!0)=>{const i={defaultValues:t._defaultValues};for(const o in e)Object.defineProperty(i,o,{get:()=>{const a=o;return t._proxyFormState[a]!==At.all&&(t._proxyFormState[a]=!r||At.all),n&&(n[a]=!0),e[a]}});return i},Ct=e=>Ne(e)&&!Object.keys(e).length,$g=(e,t,n,r)=>{n(e);const{name:i,...o}=e;return Ct(o)||Object.keys(o).length>=Object.keys(t).length||Object.keys(o).find(a=>t[a]===(!r||At.all))},Jo=e=>Array.isArray(e)?e:[e],Ng=(e,t,n)=>!e||!t||e===t||Jo(e).some(r=>r&&(n?r===t:r.startsWith(t)||t.startsWith(r)));function Ic(e){const t=be.useRef(e);t.current=e,be.useEffect(()=>{const n=!e.disabled&&t.current.subject&&t.current.subject.subscribe({next:t.current.next});return()=>{n&&n.unsubscribe()}},[e.disabled])}function Jk(e){const t=Tc(),{control:n=t.control,disabled:r,name:i,exact:o}=e||{},[a,s]=be.useState(n._formState),l=be.useRef(!0),u=be.useRef({isDirty:!1,isLoading:!1,dirtyFields:!1,touchedFields:!1,isValidating:!1,isValid:!1,errors:!1}),p=be.useRef(i);return p.current=i,Ic({disabled:r,next:h=>l.current&&Ng(p.current,h.name,o)&&$g(h,u.current,n._updateFormState)&&s({...n._formState,...h}),subject:n._subjects.state}),be.useEffect(()=>(l.current=!0,u.current.isValid&&n._updateValid(!0),()=>{l.current=!1}),[n]),zg(a,n,u.current,!1)}var Xt=e=>typeof e=="string",Ug=(e,t,n,r,i)=>Xt(e)?(r&&t.watch.add(e),N(n,e,i)):Array.isArray(e)?e.map(o=>(r&&t.watch.add(o),N(n,o))):(r&&(t.watchAll=!0),n);function eC(e){const t=Tc(),{control:n=t.control,name:r,defaultValue:i,disabled:o,exact:a}=e||{},s=be.useRef(r);s.current=r,Ic({disabled:o,subject:n._subjects.values,next:p=>{Ng(s.current,p.name,a)&&u(Lt(Ug(s.current,n._names,p.values||n._formValues,!1,i)))}});const[l,u]=be.useState(n._getWatch(r,i));return be.useEffect(()=>n._removeUnmounted()),l}var Rc=e=>/^\w*$/.test(e),Wg=e=>ro(e.replace(/["|']|\]/g,"").split(/\.|\[/));function Se(e,t,n){let r=-1;const i=Rc(t)?[t]:Wg(t),o=i.length,a=o-1;for(;++r<o;){const s=i[r];let l=n;if(r!==a){const u=e[s];l=Ne(u)||Array.isArray(u)?u:isNaN(+i[r+1])?{}:[]}e[s]=l,e=e[s]}return e}function tC(e){const t=Tc(),{name:n,disabled:r,control:i=t.control,shouldUnregister:o}=e,a=Ag(i._names.array,n),s=eC({control:i,name:n,defaultValue:N(i._formValues,n,N(i._defaultValues,n,e.defaultValue)),exact:!0}),l=Jk({control:i,name:n}),u=be.useRef(i.register(n,{...e.rules,value:s}));return u.current=i.register(n,e.rules),be.useEffect(()=>{const p=i._options.shouldUnregister||o,h=(m,x)=>{const g=N(i._fields,m);g&&(g._f.mount=x)};if(h(n,!0),p){const m=Lt(N(i._options.defaultValues,n));Se(i._defaultValues,n,m),Ie(N(i._formValues,n))&&Se(i._formValues,n,m)}return()=>{(a?p&&!i._state.action:p)?i.unregister(n):h(n,!1)}},[n,i,a,o]),be.useEffect(()=>{N(i._fields,n)&&i._updateDisabledField({disabled:r,fields:i._fields,name:n,value:N(i._fields,n)._f.value})},[r,n,i]),{field:{name:n,value:s,...Gt(r)||Gt(l.disabled)?{disabled:l.disabled||r}:{},onChange:be.useCallback(p=>u.current.onChange({target:{value:Fg(p),name:n},type:Da.CHANGE}),[n]),onBlur:be.useCallback(()=>u.current.onBlur({target:{value:N(i._formValues,n),name:n},type:Da.BLUR}),[n,i]),ref:p=>{const h=N(i._fields,n);h&&p&&(h._f.ref={focus:()=>p.focus(),select:()=>p.select(),setCustomValidity:m=>p.setCustomValidity(m),reportValidity:()=>p.reportValidity()})}},formState:l,fieldState:Object.defineProperties({},{invalid:{enumerable:!0,get:()=>!!N(l.errors,n)},isDirty:{enumerable:!0,get:()=>!!N(l.dirtyFields,n)},isTouched:{enumerable:!0,get:()=>!!N(l.touchedFields,n)},error:{enumerable:!0,get:()=>N(l.errors,n)}})}}const nC=e=>e.render(tC(e));var rC=(e,t,n,r,i)=>t?{...n[e],types:{...n[e]&&n[e].types?n[e].types:{},[r]:i||!0}}:{},Xf=e=>({isOnSubmit:!e||e===At.onSubmit,isOnBlur:e===At.onBlur,isOnChange:e===At.onChange,isOnAll:e===At.all,isOnTouch:e===At.onTouched}),Zf=(e,t,n)=>!n&&(t.watchAll||t.watch.has(e)||[...t.watch].some(r=>e.startsWith(r)&&/^\.\w+/.test(e.slice(r.length))));const ea=(e,t,n,r)=>{for(const i of n||Object.keys(e)){const o=N(e,i);if(o){const{_f:a,...s}=o;if(a){if(a.refs&&a.refs[0]&&t(a.refs[0],i)&&!r)break;if(a.ref&&t(a.ref,a.name)&&!r)break}else Ne(s)&&ea(s,t)}}};var iC=(e,t,n)=>{const r=ro(N(e,n));return Se(r,"root",t[n]),Se(e,n,r),e},Lc=e=>e.type==="file",Tn=e=>typeof e=="function",Va=e=>{if(!Mc)return!1;const t=e?e.ownerDocument:0;return e instanceof(t&&t.defaultView?t.defaultView.HTMLElement:HTMLElement)},ta=e=>Xt(e),Dc=e=>e.type==="radio",Fa=e=>e instanceof RegExp;const qf={value:!1,isValid:!1},Jf={value:!0,isValid:!0};var Hg=e=>{if(Array.isArray(e)){if(e.length>1){const t=e.filter(n=>n&&n.checked&&!n.disabled).map(n=>n.value);return{value:t,isValid:!!t.length}}return e[0].checked&&!e[0].disabled?e[0].attributes&&!Ie(e[0].attributes.value)?Ie(e[0].value)||e[0].value===""?Jf:{value:e[0].value,isValid:!0}:Jf:qf}return qf};const ep={isValid:!1,value:null};var Bg=e=>Array.isArray(e)?e.reduce((t,n)=>n&&n.checked&&!n.disabled?{isValid:!0,value:n.value}:t,ep):ep;function tp(e,t,n="validate"){if(ta(e)||Array.isArray(e)&&e.every(ta)||Gt(e)&&!e)return{type:n,message:ta(e)?e:"",ref:t}}var mr=e=>Ne(e)&&!Fa(e)?e:{value:e,message:""},np=async(e,t,n,r,i)=>{const{ref:o,refs:a,required:s,maxLength:l,minLength:u,min:p,max:h,pattern:m,validate:x,name:g,valueAsNumber:y,mount:S,disabled:d}=e._f,f=N(t,g);if(!S||d)return{};const v=a?a[0]:o,w=D=>{r&&v.reportValidity&&(v.setCustomValidity(Gt(D)?"":D||""),v.reportValidity())},k={},O=Dc(o),j=no(o),P=O||j,M=(y||Lc(o))&&Ie(o.value)&&Ie(f)||Va(o)&&o.value===""||f===""||Array.isArray(f)&&!f.length,I=rC.bind(null,g,n,k),U=(D,R,G,q=en.maxLength,J=en.minLength)=>{const me=D?R:G;k[g]={type:D?q:J,message:me,ref:o,...I(D?q:J,me)}};if(i?!Array.isArray(f)||!f.length:s&&(!P&&(M||rt(f))||Gt(f)&&!f||j&&!Hg(a).isValid||O&&!Bg(a).isValid)){const{value:D,message:R}=ta(s)?{value:!!s,message:s}:mr(s);if(D&&(k[g]={type:en.required,message:R,ref:v,...I(en.required,R)},!n))return w(R),k}if(!M&&(!rt(p)||!rt(h))){let D,R;const G=mr(h),q=mr(p);if(!rt(f)&&!isNaN(f)){const J=o.valueAsNumber||f&&+f;rt(G.value)||(D=J>G.value),rt(q.value)||(R=J<q.value)}else{const J=o.valueAsDate||new Date(f),me=Q=>new Date(new Date().toDateString()+" "+Q),F=o.type=="time",B=o.type=="week";Xt(G.value)&&f&&(D=F?me(f)>me(G.value):B?f>G.value:J>new Date(G.value)),Xt(q.value)&&f&&(R=F?me(f)<me(q.value):B?f<q.value:J<new Date(q.value))}if((D||R)&&(U(!!D,G.message,q.message,en.max,en.min),!n))return w(k[g].message),k}if((l||u)&&!M&&(Xt(f)||i&&Array.isArray(f))){const D=mr(l),R=mr(u),G=!rt(D.value)&&f.length>+D.value,q=!rt(R.value)&&f.length<+R.value;if((G||q)&&(U(G,D.message,R.message),!n))return w(k[g].message),k}if(m&&!M&&Xt(f)){const{value:D,message:R}=mr(m);if(Fa(D)&&!f.match(D)&&(k[g]={type:en.pattern,message:R,ref:o,...I(en.pattern,R)},!n))return w(R),k}if(x){if(Tn(x)){const D=await x(f,t),R=tp(D,v);if(R&&(k[g]={...R,...I(en.validate,R.message)},!n))return w(R.message),k}else if(Ne(x)){let D={};for(const R in x){if(!Ct(D)&&!n)break;const G=tp(await x[R](f,t),v,R);G&&(D={...G,...I(R,G.message)},w(G.message),n&&(k[g]=D))}if(!Ct(D)&&(k[g]={ref:v,...D},!n))return k}}return w(!0),k};function oC(e,t){const n=t.slice(0,-1).length;let r=0;for(;r<n;)e=Ie(e)?r++:e[t[r++]];return e}function aC(e){for(const t in e)if(e.hasOwnProperty(t)&&!Ie(e[t]))return!1;return!0}function Be(e,t){const n=Array.isArray(t)?t:Rc(t)?[t]:Wg(t),r=n.length===1?e:oC(e,n),i=n.length-1,o=n[i];return r&&delete r[o],i!==0&&(Ne(r)&&Ct(r)||Array.isArray(r)&&aC(r))&&Be(e,n.slice(0,-1)),e}function ds(){let e=[];return{get observers(){return e},next:i=>{for(const o of e)o.next&&o.next(i)},subscribe:i=>(e.push(i),{unsubscribe:()=>{e=e.filter(o=>o!==i)}}),unsubscribe:()=>{e=[]}}}var Aa=e=>rt(e)||!Vg(e);function qn(e,t){if(Aa(e)||Aa(t))return e===t;if(Or(e)&&Or(t))return e.getTime()===t.getTime();const n=Object.keys(e),r=Object.keys(t);if(n.length!==r.length)return!1;for(const i of n){const o=e[i];if(!r.includes(i))return!1;if(i!=="ref"){const a=t[i];if(Or(o)&&Or(a)||Ne(o)&&Ne(a)||Array.isArray(o)&&Array.isArray(a)?!qn(o,a):o!==a)return!1}}return!0}var Qg=e=>e.type==="select-multiple",lC=e=>Dc(e)||no(e),fs=e=>Va(e)&&e.isConnected,Yg=e=>{for(const t in e)if(Tn(e[t]))return!0;return!1};function za(e,t={}){const n=Array.isArray(e);if(Ne(e)||n)for(const r in e)Array.isArray(e[r])||Ne(e[r])&&!Yg(e[r])?(t[r]=Array.isArray(e[r])?[]:{},za(e[r],t[r])):rt(e[r])||(t[r]=!0);return t}function Kg(e,t,n){const r=Array.isArray(e);if(Ne(e)||r)for(const i in e)Array.isArray(e[i])||Ne(e[i])&&!Yg(e[i])?Ie(t)||Aa(n[i])?n[i]=Array.isArray(e[i])?za(e[i],[]):{...za(e[i])}:Kg(e[i],rt(t)?{}:t[i],n[i]):n[i]=!qn(e[i],t[i]);return n}var ps=(e,t)=>Kg(e,t,za(t)),Gg=(e,{valueAsNumber:t,valueAsDate:n,setValueAs:r})=>Ie(e)?e:t?e===""?NaN:e&&+e:n&&Xt(e)?new Date(e):r?r(e):e;function hs(e){const t=e.ref;if(!(e.refs?e.refs.every(n=>n.disabled):t.disabled))return Lc(t)?t.files:Dc(t)?Bg(e.refs).value:Qg(t)?[...t.selectedOptions].map(({value:n})=>n):no(t)?Hg(e.refs).value:Gg(Ie(t.value)?e.ref.value:t.value,e)}var sC=(e,t,n,r)=>{const i={};for(const o of e){const a=N(t,o);a&&Se(i,o,a._f)}return{criteriaMode:n,names:[...e],fields:i,shouldUseNativeValidation:r}},ci=e=>Ie(e)?e:Fa(e)?e.source:Ne(e)?Fa(e.value)?e.value.source:e.value:e,uC=e=>e.mount&&(e.required||e.min||e.max||e.maxLength||e.minLength||e.pattern||e.validate);function rp(e,t,n){const r=N(e,n);if(r||Rc(n))return{error:r,name:n};const i=n.split(".");for(;i.length;){const o=i.join("."),a=N(t,o),s=N(e,o);if(a&&!Array.isArray(a)&&n!==o)return{name:n};if(s&&s.type)return{name:o,error:s};i.pop()}return{name:n}}var cC=(e,t,n,r,i)=>i.isOnAll?!1:!n&&i.isOnTouch?!(t||e):(n?r.isOnBlur:i.isOnBlur)?!e:(n?r.isOnChange:i.isOnChange)?e:!0,dC=(e,t)=>!ro(N(e,t)).length&&Be(e,t);const fC={mode:At.onSubmit,reValidateMode:At.onChange,shouldFocusError:!0};function pC(e={},t){let n={...fC,...e},r={submitCount:0,isDirty:!1,isLoading:Tn(n.defaultValues),isValidating:!1,isSubmitted:!1,isSubmitting:!1,isSubmitSuccessful:!1,isValid:!1,touchedFields:{},dirtyFields:{},errors:{},disabled:!1},i={},o=Ne(n.defaultValues)||Ne(n.values)?Lt(n.defaultValues||n.values)||{}:{},a=n.shouldUnregister?{}:Lt(o),s={action:!1,mount:!1,watch:!1},l={mount:new Set,unMount:new Set,array:new Set,watch:new Set},u,p=0;const h={isDirty:!1,dirtyFields:!1,touchedFields:!1,isValidating:!1,isValid:!1,errors:!1},m={values:ds(),array:ds(),state:ds()},x=e.resetOptions&&e.resetOptions.keepDirtyValues,g=Xf(n.mode),y=Xf(n.reValidateMode),S=n.criteriaMode===At.all,d=b=>_=>{clearTimeout(p),p=setTimeout(b,_)},f=async b=>{if(h.isValid||b){const _=n.resolver?Ct((await M()).errors):await U(i,!0);_!==r.isValid&&m.state.next({isValid:_})}},v=b=>h.isValidating&&m.state.next({isValidating:b}),w=(b,_=[],C,$,z=!0,A=!0)=>{if($&&C){if(s.action=!0,A&&Array.isArray(N(i,b))){const Z=C(N(i,b),$.argA,$.argB);z&&Se(i,b,Z)}if(A&&Array.isArray(N(r.errors,b))){const Z=C(N(r.errors,b),$.argA,$.argB);z&&Se(r.errors,b,Z),dC(r.errors,b)}if(h.touchedFields&&A&&Array.isArray(N(r.touchedFields,b))){const Z=C(N(r.touchedFields,b),$.argA,$.argB);z&&Se(r.touchedFields,b,Z)}h.dirtyFields&&(r.dirtyFields=ps(o,a)),m.state.next({name:b,isDirty:R(b,_),dirtyFields:r.dirtyFields,errors:r.errors,isValid:r.isValid})}else Se(a,b,_)},k=(b,_)=>{Se(r.errors,b,_),m.state.next({errors:r.errors})},O=(b,_,C,$)=>{const z=N(i,b);if(z){const A=N(a,b,Ie(C)?N(o,b):C);Ie(A)||$&&$.defaultChecked||_?Se(a,b,_?A:hs(z._f)):J(b,A),s.mount&&f()}},j=(b,_,C,$,z)=>{let A=!1,Z=!1;const we={name:b};if(!C||$){h.isDirty&&(Z=r.isDirty,r.isDirty=we.isDirty=R(),A=Z!==we.isDirty);const De=qn(N(o,b),_);Z=N(r.dirtyFields,b),De?Be(r.dirtyFields,b):Se(r.dirtyFields,b,!0),we.dirtyFields=r.dirtyFields,A=A||h.dirtyFields&&Z!==!De}if(C){const De=N(r.touchedFields,b);De||(Se(r.touchedFields,b,C),we.touchedFields=r.touchedFields,A=A||h.touchedFields&&De!==C)}return A&&z&&m.state.next(we),A?we:{}},P=(b,_,C,$)=>{const z=N(r.errors,b),A=h.isValid&&Gt(_)&&r.isValid!==_;if(e.delayError&&C?(u=d(()=>k(b,C)),u(e.delayError)):(clearTimeout(p),u=null,C?Se(r.errors,b,C):Be(r.errors,b)),(C?!qn(z,C):z)||!Ct($)||A){const Z={...$,...A&&Gt(_)?{isValid:_}:{},errors:r.errors,name:b};r={...r,...Z},m.state.next(Z)}v(!1)},M=async b=>n.resolver(a,n.context,sC(b||l.mount,i,n.criteriaMode,n.shouldUseNativeValidation)),I=async b=>{const{errors:_}=await M(b);if(b)for(const C of b){const $=N(_,C);$?Se(r.errors,C,$):Be(r.errors,C)}else r.errors=_;return _},U=async(b,_,C={valid:!0})=>{for(const $ in b){const z=b[$];if(z){const{_f:A,...Z}=z;if(A){const we=l.array.has(A.name),De=await np(z,a,S,n.shouldUseNativeValidation&&!_,we);if(De[A.name]&&(C.valid=!1,_))break;!_&&(N(De,A.name)?we?iC(r.errors,De,A.name):Se(r.errors,A.name,De[A.name]):Be(r.errors,A.name))}Z&&await U(Z,_,C)}}return C.valid},D=()=>{for(const b of l.unMount){const _=N(i,b);_&&(_._f.refs?_._f.refs.every(C=>!fs(C)):!fs(_._f.ref))&&xe(b)}l.unMount=new Set},R=(b,_)=>(b&&_&&Se(a,b,_),!qn(te(),o)),G=(b,_,C)=>Ug(b,l,{...s.mount?a:Ie(_)?o:Xt(b)?{[b]:_}:_},C,_),q=b=>ro(N(s.mount?a:o,b,e.shouldUnregister?N(o,b,[]):[])),J=(b,_,C={})=>{const $=N(i,b);let z=_;if($){const A=$._f;A&&(!A.disabled&&Se(a,b,Gg(_,A)),z=Va(A.ref)&&rt(_)?"":_,Qg(A.ref)?[...A.ref.options].forEach(Z=>Z.selected=z.includes(Z.value)):A.refs?no(A.ref)?A.refs.length>1?A.refs.forEach(Z=>(!Z.defaultChecked||!Z.disabled)&&(Z.checked=Array.isArray(z)?!!z.find(we=>we===Z.value):z===Z.value)):A.refs[0]&&(A.refs[0].checked=!!z):A.refs.forEach(Z=>Z.checked=Z.value===z):Lc(A.ref)?A.ref.value="":(A.ref.value=z,A.ref.type||m.values.next({name:b,values:{...a}})))}(C.shouldDirty||C.shouldTouch)&&j(b,z,C.shouldTouch,C.shouldDirty,!0),C.shouldValidate&&ue(b)},me=(b,_,C)=>{for(const $ in _){const z=_[$],A=`${b}.${$}`,Z=N(i,A);(l.array.has(b)||!Aa(z)||Z&&!Z._f)&&!Or(z)?me(A,z,C):J(A,z,C)}},F=(b,_,C={})=>{const $=N(i,b),z=l.array.has(b),A=Lt(_);Se(a,b,A),z?(m.array.next({name:b,values:{...a}}),(h.isDirty||h.dirtyFields)&&C.shouldDirty&&m.state.next({name:b,dirtyFields:ps(o,a),isDirty:R(b,A)})):$&&!$._f&&!rt(A)?me(b,A,C):J(b,A,C),Zf(b,l)&&m.state.next({...r}),m.values.next({name:b,values:{...a}}),!s.mount&&t()},B=async b=>{const _=b.target;let C=_.name,$=!0;const z=N(i,C),A=()=>_.type?hs(z._f):Fg(b),Z=we=>{$=Number.isNaN(we)||we===N(a,C,we)};if(z){let we,De;const io=A(),ur=b.type===Da.BLUR||b.type===Da.FOCUS_OUT,Xg=!uC(z._f)&&!n.resolver&&!N(r.errors,C)&&!z._f.deps||cC(ur,N(r.touchedFields,C),r.isSubmitted,y,g),yl=Zf(C,l,ur);Se(a,C,io),ur?(z._f.onBlur&&z._f.onBlur(b),u&&u(0)):z._f.onChange&&z._f.onChange(b);const xl=j(C,io,ur,!1),Zg=!Ct(xl)||yl;if(!ur&&m.values.next({name:C,type:b.type,values:{...a}}),Xg)return h.isValid&&f(),Zg&&m.state.next({name:C,...yl?{}:xl});if(!ur&&yl&&m.state.next({...r}),v(!0),n.resolver){const{errors:Vc}=await M([C]);if(Z(io),$){const qg=rp(r.errors,i,C),Fc=rp(Vc,i,qg.name||C);we=Fc.error,C=Fc.name,De=Ct(Vc)}}else we=(await np(z,a,S,n.shouldUseNativeValidation))[C],Z(io),$&&(we?De=!1:h.isValid&&(De=await U(i,!0)));$&&(z._f.deps&&ue(z._f.deps),P(C,De,we,xl))}},Q=(b,_)=>{if(N(r.errors,_)&&b.focus)return b.focus(),1},ue=async(b,_={})=>{let C,$;const z=Jo(b);if(v(!0),n.resolver){const A=await I(Ie(b)?b:z);C=Ct(A),$=b?!z.some(Z=>N(A,Z)):C}else b?($=(await Promise.all(z.map(async A=>{const Z=N(i,A);return await U(Z&&Z._f?{[A]:Z}:Z)}))).every(Boolean),!(!$&&!r.isValid)&&f()):$=C=await U(i);return m.state.next({...!Xt(b)||h.isValid&&C!==r.isValid?{}:{name:b},...n.resolver||!b?{isValid:C}:{},errors:r.errors,isValidating:!1}),_.shouldFocus&&!$&&ea(i,Q,b?z:l.mount),$},te=b=>{const _={...o,...s.mount?a:{}};return Ie(b)?_:Xt(b)?N(_,b):b.map(C=>N(_,C))},Ce=(b,_)=>({invalid:!!N((_||r).errors,b),isDirty:!!N((_||r).dirtyFields,b),isTouched:!!N((_||r).touchedFields,b),error:N((_||r).errors,b)}),ye=b=>{b&&Jo(b).forEach(_=>Be(r.errors,_)),m.state.next({errors:b?r.errors:{}})},Ae=(b,_,C)=>{const $=(N(i,b,{_f:{}})._f||{}).ref;Se(r.errors,b,{..._,ref:$}),m.state.next({name:b,errors:r.errors,isValid:!1}),C&&C.shouldFocus&&$&&$.focus&&$.focus()},fe=(b,_)=>Tn(b)?m.values.subscribe({next:C=>b(G(void 0,_),C)}):G(b,_,!0),xe=(b,_={})=>{for(const C of b?Jo(b):l.mount)l.mount.delete(C),l.array.delete(C),_.keepValue||(Be(i,C),Be(a,C)),!_.keepError&&Be(r.errors,C),!_.keepDirty&&Be(r.dirtyFields,C),!_.keepTouched&&Be(r.touchedFields,C),!n.shouldUnregister&&!_.keepDefaultValue&&Be(o,C);m.values.next({values:{...a}}),m.state.next({...r,..._.keepDirty?{isDirty:R()}:{}}),!_.keepIsValid&&f()},Xe=({disabled:b,name:_,field:C,fields:$,value:z})=>{if(Gt(b)){const A=b?void 0:Ie(z)?hs(C?C._f:N($,_)._f):z;Se(a,_,A),j(_,A,!1,!1,!0)}},ht=(b,_={})=>{let C=N(i,b);const $=Gt(_.disabled);return Se(i,b,{...C||{},_f:{...C&&C._f?C._f:{ref:{name:b}},name:b,mount:!0,..._}}),l.mount.add(b),C?Xe({field:C,disabled:_.disabled,name:b}):O(b,!0,_.value),{...$?{disabled:_.disabled}:{},...n.progressive?{required:!!_.required,min:ci(_.min),max:ci(_.max),minLength:ci(_.minLength),maxLength:ci(_.maxLength),pattern:ci(_.pattern)}:{},name:b,onChange:B,onBlur:B,ref:z=>{if(z){ht(b,_),C=N(i,b);const A=Ie(z.value)&&z.querySelectorAll&&z.querySelectorAll("input,select,textarea")[0]||z,Z=lC(A),we=C._f.refs||[];if(Z?we.find(De=>De===A):A===C._f.ref)return;Se(i,b,{_f:{...C._f,...Z?{refs:[...we.filter(fs),A,...Array.isArray(N(o,b))?[{}]:[]],ref:{type:A.type,name:b}}:{ref:A}}}),O(b,!1,void 0,A)}else C=N(i,b,{}),C._f&&(C._f.mount=!1),(n.shouldUnregister||_.shouldUnregister)&&!(Ag(l.array,b)&&s.action)&&l.unMount.add(b)}}},V=()=>n.shouldFocusError&&ea(i,Q,l.mount),W=b=>{Gt(b)&&(m.state.next({disabled:b}),ea(i,_=>{_.disabled=b},0,!1))},re=(b,_)=>async C=>{C&&(C.preventDefault&&C.preventDefault(),C.persist&&C.persist());let $=Lt(a);if(m.state.next({isSubmitting:!0}),n.resolver){const{errors:z,values:A}=await M();r.errors=z,$=A}else await U(i);Be(r.errors,"root"),Ct(r.errors)?(m.state.next({errors:{}}),await b($,C)):(_&&await _({...r.errors},C),V(),setTimeout(V)),m.state.next({isSubmitted:!0,isSubmitting:!1,isSubmitSuccessful:Ct(r.errors),submitCount:r.submitCount+1,errors:r.errors})},ie=(b,_={})=>{N(i,b)&&(Ie(_.defaultValue)?F(b,N(o,b)):(F(b,_.defaultValue),Se(o,b,_.defaultValue)),_.keepTouched||Be(r.touchedFields,b),_.keepDirty||(Be(r.dirtyFields,b),r.isDirty=_.defaultValue?R(b,N(o,b)):R()),_.keepError||(Be(r.errors,b),h.isValid&&f()),m.state.next({...r}))},ee=(b,_={})=>{const C=b?Lt(b):o,$=Lt(C),z=b&&!Ct(b)?$:o;if(_.keepDefaultValues||(o=C),!_.keepValues){if(_.keepDirtyValues||x)for(const A of l.mount)N(r.dirtyFields,A)?Se(z,A,N(a,A)):F(A,N(z,A));else{if(Mc&&Ie(b))for(const A of l.mount){const Z=N(i,A);if(Z&&Z._f){const we=Array.isArray(Z._f.refs)?Z._f.refs[0]:Z._f.ref;if(Va(we)){const De=we.closest("form");if(De){De.reset();break}}}}i={}}a=e.shouldUnregister?_.keepDefaultValues?Lt(o):{}:Lt(z),m.array.next({values:{...z}}),m.values.next({values:{...z}})}l={mount:new Set,unMount:new Set,array:new Set,watch:new Set,watchAll:!1,focus:""},!s.mount&&t(),s.mount=!h.isValid||!!_.keepIsValid,s.watch=!!e.shouldUnregister,m.state.next({submitCount:_.keepSubmitCount?r.submitCount:0,isDirty:_.keepDirty?r.isDirty:!!(_.keepDefaultValues&&!qn(b,o)),isSubmitted:_.keepIsSubmitted?r.isSubmitted:!1,dirtyFields:_.keepDirtyValues?r.dirtyFields:_.keepDefaultValues&&b?ps(o,b):{},touchedFields:_.keepTouched?r.touchedFields:{},errors:_.keepErrors?r.errors:{},isSubmitSuccessful:_.keepIsSubmitSuccessful?r.isSubmitSuccessful:!1,isSubmitting:!1})},ae=(b,_)=>ee(Tn(b)?b(a):b,_);return{control:{register:ht,unregister:xe,getFieldState:Ce,handleSubmit:re,setError:Ae,_executeSchema:M,_getWatch:G,_getDirty:R,_updateValid:f,_removeUnmounted:D,_updateFieldArray:w,_updateDisabledField:Xe,_getFieldArray:q,_reset:ee,_resetDefaultValues:()=>Tn(n.defaultValues)&&n.defaultValues().then(b=>{ae(b,n.resetOptions),m.state.next({isLoading:!1})}),_updateFormState:b=>{r={...r,...b}},_disableForm:W,_subjects:m,_proxyFormState:h,get _fields(){return i},get _formValues(){return a},get _state(){return s},set _state(b){s=b},get _defaultValues(){return o},get _names(){return l},set _names(b){l=b},get _formState(){return r},set _formState(b){r=b},get _options(){return n},set _options(b){n={...n,...b}}},trigger:ue,register:ht,handleSubmit:re,watch:fe,setValue:F,getValues:te,reset:ae,resetField:ie,clearErrors:ye,unregister:xe,setError:Ae,setFocus:(b,_={})=>{const C=N(i,b),$=C&&C._f;if($){const z=$.refs?$.refs[0]:$.ref;z.focus&&(z.focus(),_.shouldSelect&&z.select())}},getFieldState:Ce}}function hC(e={}){const t=be.useRef(),n=be.useRef(),[r,i]=be.useState({isDirty:!1,isValidating:!1,isLoading:Tn(e.defaultValues),isSubmitted:!1,isSubmitting:!1,isSubmitSuccessful:!1,isValid:!1,submitCount:0,dirtyFields:{},touchedFields:{},errors:{},disabled:!1,defaultValues:Tn(e.defaultValues)?void 0:e.defaultValues});t.current||(t.current={...pC(e,()=>i(a=>({...a}))),formState:r});const o=t.current.control;return o._options=e,Ic({subject:o._subjects.state,next:a=>{$g(a,o._proxyFormState,o._updateFormState,!0)&&i({...o._formState})}}),be.useEffect(()=>o._disableForm(e.disabled),[o,e.disabled]),be.useEffect(()=>{if(o._proxyFormState.isDirty){const a=o._getDirty();a!==r.isDirty&&o._subjects.state.next({isDirty:a})}},[o,r.isDirty]),be.useEffect(()=>{e.values&&!qn(e.values,n.current)?(o._reset(e.values,o._options.resetOptions),n.current=e.values):o._resetDefaultValues()},[e.values,o]),be.useEffect(()=>{o._state.mount||(o._updateValid(),o._state.mount=!0),o._state.watch&&(o._state.watch=!1,o._subjects.state.next({...o._formState})),o._removeUnmounted()}),t.current.formState=zg(r,o),t.current}const mC={control:(e,t)=>{const n=t.selectProps.errors;return{...e,display:"flex",width:"668px",height:"56px",marginTop:"8px",padding:"0px 16px",alignItems:"center",flexShrink:"0",alignSelf:"stretch",borderRadius:"16px",outline:"none",border:`1px solid ${n?"var(--secondary-red)":"transparent"}`,backgroundColor:"var(--background-white)",boxShadow:"0px 0px 8px 0px rgba(27, 54, 65, 0.08)","&:hover":{boxShadow:"0px 0px 16px 0px rgba(27, 54, 65, 0.16)"},"&:focus":{outline:"none",border:"1px solid var(--typography-grey)",background:"var(--background-white)",boxShadow:"0px 0px 8px 0px rgba(27, 54, 65, 0.08)"}}},dropdownIndicator:e=>({...e,color:"#062136"}),indicatorSeparator:()=>({color:"red"}),option:e=>({...e,display:"flex",alignItems:"flex-start",fontWeight:"400",backgroundColor:"var(--background-white)",color:"#1B3641","&:hover":{backgroundColor:"rgba(27, 54, 65, 0.2)",borderRadius:"16px",fontWeight:"600"}}),menu:e=>({...e,height:"auto",marginTop:"0",border:"none",borderRadius:"16px",boxShadow:"0px 0px 8px 0px rgba(27, 54, 65, 0.08)",color:"var(--primary-bluedark)",backgroundColor:"var(--background-white)"}),singleValue:e=>({...e,fontSize:"16px",fontWeight:"400",color:"var(--primary-bluedark)"})},gC=()=>{const[e,t]=vk("key",{name:"",email:"",phone:"",service:"",comment:""}),{name:n,email:r,phone:i,service:o,comment:a}=e,s=$f.find(d=>d.value===o),{register:l,handleSubmit:u,control:p,setValue:h,formState:{errors:m},reset:x}=hC({mode:"all",shouldFocusError:!1,defaultValues:{}});T.useEffect(()=>{const d=JSON.stringify(e);localStorage.setItem("key",d)},[e]);const g=d=>{h("service",(d==null?void 0:d.value)||""),t({...e,service:(d==null?void 0:d.value)||""})},y=d=>{t({...e,[d.target.name]:d.target.value})},S=async d=>{try{const f={...d,phone:d.phone.replace(/\D/g,"").slice(2)};console.log(f),t({name:"",email:"",phone:"",service:"",comment:""}),x(),alert("Заявка відправлена!")}catch{alert("Помилка при відправці заявки")}};return c.jsx("section",{className:"container",id:"contact",children:c.jsxs(zk,{children:[c.jsx($k,{children:"Контакт"}),c.jsxs(Nk,{children:[c.jsxs("div",{children:[c.jsx(Wr,{minWidth:1920,children:c.jsx(Kf,{srcSet:`${Nf} 1920w, ${yk} 2x`,sizes:"(min-width: 1920px) 1920px",src:Nf,alt:"notebook"})}),c.jsx(Wr,{minWidth:300,maxWidth:1919,children:c.jsx(Kf,{srcSet:`${Uf} 375w, ${xk} 2x`,sizes:"(min-width: 375px) 375px",src:Uf,alt:"notebook"})})]}),c.jsxs(Uk,{children:[c.jsx(Wk,{children:"Залишайте ваші контактні дані і ми з вами зв'яжемось"}),c.jsxs(Hk,{onSubmit:u(S),children:[c.jsxs(Do,{children:["Ім’я",c.jsx(Qk,{}),c.jsx(Gf,{type:"text",placeholder:"Введіть своє ім’я",...l("name",{required:"Це поле обов'язкове для заповнення",pattern:{value:/^(?:[a-zA-Zа-яА-ЯґҐєЄіІїЇ'-]{1,32}(?:\s+[a-zA-Zа-яА-ЯґҐєЄіІїЇ'-]{1,32})?|[a-zA-Zа-яА-ЯґҐєЄіІїЇ'-]{1,64})$/,message:"поле повинно містити одне або два слова"}}),value:n,onChange:y,errors:m.name}),m.name&&c.jsxs(ui,{children:[c.jsx(tn,{}),m.name.message]})]}),c.jsxs(Do,{children:["Емейл",c.jsx(tn,{}),c.jsx(Gf,{type:"email",placeholder:"Введіть емейл",...l("email",{required:"Це поле обов'язкове для заповнення",pattern:{value:/[a-z0-9._%+-]+@[a-z0-9.-]+\.[a-z]{2,4}$/,message:"Введіть коректний емейл"}}),value:r,onChange:y,errors:m.email}),m.email&&c.jsxs(ui,{children:[c.jsx(tn,{}),m.email.message]})]}),c.jsxs(Do,{children:["Номер телефону",c.jsx(tn,{}),c.jsx(Yk,{mask:"+38(099)999-99-99",type:"tel",placeholder:"Введіть номер телефону",...l("phone",{required:"Це поле обов'язкове для заповнення",pattern:{value:/^\+\d{2}\(\d{3}\)\d{3}-\d{2}-\d{2}$/,message:"Введіть коректний номер телефона"}}),value:i,onChange:y,errors:m.phone}),m.phone&&c.jsxs(ui,{children:[c.jsx(tn,{}),m.phone.message]})]}),c.jsxs(Do,{children:["Послуга",c.jsx(tn,{}),c.jsx(nC,{name:"service",control:p,shouldUnregister:!1,render:({field:d})=>c.jsx(gk,{...l("service",{required:"Оберіть послугу"}),placeholder:"Оберіть послугу",...d,options:$f,styles:mC,errors:m.service,onChange:g,value:s})}),m.service&&c.jsxs(ui,{children:[c.jsx(tn,{}),m.service.message]})]}),c.jsxs(Bk,{children:["Повідомлення",c.jsx(Kk,{name:"comment",placeholder:"Введіть ваше повідомлення",...l("comment",{pattern:{value:/^.{0,500}$/,message:"Максимальна довжина повідомлення 500 символів"}}),value:a,onChange:y,errors:m.comment}),m.comment&&c.jsxs(ui,{children:[c.jsx(tn,{}),m.comment.message]})]}),c.jsx(Gk,{type:"submit",children:"Надіслати"})]})]})]})]})})},vC=E.section`
  padding-top: 80px;
  padding-bottom: 80px;
`,yC=E.div`
  display: flex;
  flex-direction: column;
  gap: 40px;
  width: 100%;
  height: 884px;
  background: var(--background-bluedark);
  border-radius: 16px;
  padding: 80px;
`,xC=E.h2`
  font-size: 48px;
  font-weight: 600;
  line-height: 56px;
  color: var(--typography-white);
`,wC=E.p`
  color: var(--typography-white);
  font-size: 20px;
  font-weight: 500;
  line-height: 28px;
  width: 828px;
`,SC=E.span`
  color: var(--primary-yellow);
  font-size: 20px;
  font-weight: 500;
  line-height: 28px;
`,bC=E.ul`
  display: flex;
  gap: 24px;
`,kC=E.li`
  position: relative;
  width: calc((100% - (24px * 3)) / 4);
  background: var(--background-white);
  padding: 40px;
  border-radius: 16px;
`,CC=E.div`
  position: absolute;
  width: 80px;
  height: 80px;
  border-radius: 16px;
  padding: 16px;
  background: var(--primary-yellow);
  left: 258px;
  top: -24px;
`,jC=E.a`
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
`,EC="/healthy-management-project/assets/icon-WQbGU7FW.svg",_C="/healthy-management-project/assets/icon-2-FNpGPcjZ.svg",OC="/healthy-management-project/assets/icon-3-GZg06_37.svg",PC="/healthy-management-project/assets/icon-4-9BBn0thK.svg",ms=[{title:"Менторство та консультації",about:["Для власників та менеджерів з питань менеджменту та розвитку, медичного маркетингу та комунікацій, з питань програм управління здоров'ям","Стейхолдерам та парнерам з питань медичного менеджменту та маркетингу"],path:EC},{title:"Діагностика",about:["Аудит бізнес-процесів","Аудит маркетингу та сервісу","Аудит системи комунікацій та Сustomer Journey Map"],path:_C},{title:"Стратегії",about:["Проведення стратегічних сесій","Розробка стратегії розвитку та маркетингу ","Розробка стратегій внутрішніх комунікацій","Розробка стратегій управління здоров'ям"],path:OC},{title:"Навчання",about:["Медичний маркетинг","Комунікації та сервіс"],path:PC}],MC=()=>c.jsx(vC,{className:"container",id:"services",children:c.jsxs(yC,{children:[c.jsx(xC,{children:"Послуги"}),c.jsxs(wC,{children:["Будуємо ефективні ",c.jsx(SC,{children:"стратегії здорового менеджменту"})," для бізнесів. Розвивайте свій бізнес за допомогою ефективних стратегій здорового менеджменту."]}),c.jsx(bC,{children:ms==null?void 0:ms.map(e=>c.jsxs(kC,{children:[c.jsx(kc,{title:e.title,about:e.about,additionalComment:!0}),c.jsx(CC,{children:c.jsx("img",{src:e.path,alt:""})})]},e.title))}),c.jsx(jC,{href:"#contact",children:"Замовити консультацію"})]})});function TC(){const e=(t,n)=>{n.preventDefault();const r=document.getElementById(t);if(r){const i=r.getBoundingClientRect(),o=window.pageYOffset||document.documentElement.scrollTop;let a;window.innerWidth<=768?a=i.top+o-80:a=i.top+o-60,window.scrollTo({top:a,behavior:"smooth"}),setTimeout(()=>{n.target.blur()},1e3)}};return c.jsxs(c.Fragment,{children:[c.jsx(Wm,{handleSetActiveLink:e}),c.jsxs("main",{children:[c.jsx(aw,{}),c.jsx(n1,{}),c.jsx(Wx,{}),c.jsx(dw,{}),c.jsx(SS,{}),c.jsx(MC,{}),c.jsx(jw,{}),c.jsx(Iw,{}),c.jsx(Lw,{}),c.jsx(cS,{}),c.jsx(u1,{}),c.jsx(gC,{})]}),c.jsx(Nm,{handleSetActiveLink:e}),c.jsx(kS,{})]})}gs.createRoot(document.getElementById("root")).render(c.jsx(be.StrictMode,{children:c.jsx(TC,{})}));
