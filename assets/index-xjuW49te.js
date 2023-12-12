function xx(e,t){for(var n=0;n<t.length;n++){const r=t[n];if(typeof r!="string"&&!Array.isArray(r)){for(const i in r)if(i!=="default"&&!(i in e)){const o=Object.getOwnPropertyDescriptor(r,i);o&&Object.defineProperty(e,i,o.get?o:{enumerable:!0,get:()=>r[i]})}}}return Object.freeze(Object.defineProperty(e,Symbol.toStringTag,{value:"Module"}))}(function(){const t=document.createElement("link").relList;if(t&&t.supports&&t.supports("modulepreload"))return;for(const i of document.querySelectorAll('link[rel="modulepreload"]'))r(i);new MutationObserver(i=>{for(const o of i)if(o.type==="childList")for(const s of o.addedNodes)s.tagName==="LINK"&&s.rel==="modulepreload"&&r(s)}).observe(document,{childList:!0,subtree:!0});function n(i){const o={};return i.integrity&&(o.integrity=i.integrity),i.referrerPolicy&&(o.referrerPolicy=i.referrerPolicy),i.crossOrigin==="use-credentials"?o.credentials="include":i.crossOrigin==="anonymous"?o.credentials="omit":o.credentials="same-origin",o}function r(i){if(i.ep)return;i.ep=!0;const o=n(i);fetch(i.href,o)}})();var yx=typeof globalThis<"u"?globalThis:typeof window<"u"?window:typeof global<"u"?global:typeof self<"u"?self:{};function ao(e){return e&&e.__esModule&&Object.prototype.hasOwnProperty.call(e,"default")?e.default:e}var ih={exports:{}},ia={},oh={exports:{}},ce={};/**
 * @license React
 * react.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */var lo=Symbol.for("react.element"),wx=Symbol.for("react.portal"),bx=Symbol.for("react.fragment"),Sx=Symbol.for("react.strict_mode"),kx=Symbol.for("react.profiler"),jx=Symbol.for("react.provider"),Cx=Symbol.for("react.context"),Ex=Symbol.for("react.forward_ref"),Ox=Symbol.for("react.suspense"),_x=Symbol.for("react.memo"),Px=Symbol.for("react.lazy"),kd=Symbol.iterator;function Tx(e){return e===null||typeof e!="object"?null:(e=kd&&e[kd]||e["@@iterator"],typeof e=="function"?e:null)}var sh={isMounted:function(){return!1},enqueueForceUpdate:function(){},enqueueReplaceState:function(){},enqueueSetState:function(){}},ah=Object.assign,lh={};function ei(e,t,n){this.props=e,this.context=t,this.refs=lh,this.updater=n||sh}ei.prototype.isReactComponent={};ei.prototype.setState=function(e,t){if(typeof e!="object"&&typeof e!="function"&&e!=null)throw Error("setState(...): takes an object of state variables to update or a function which returns an object of state variables.");this.updater.enqueueSetState(this,e,t,"setState")};ei.prototype.forceUpdate=function(e){this.updater.enqueueForceUpdate(this,e,"forceUpdate")};function uh(){}uh.prototype=ei.prototype;function Ju(e,t,n){this.props=e,this.context=t,this.refs=lh,this.updater=n||sh}var Zu=Ju.prototype=new uh;Zu.constructor=Ju;ah(Zu,ei.prototype);Zu.isPureReactComponent=!0;var jd=Array.isArray,ch=Object.prototype.hasOwnProperty,ec={current:null},dh={key:!0,ref:!0,__self:!0,__source:!0};function fh(e,t,n){var r,i={},o=null,s=null;if(t!=null)for(r in t.ref!==void 0&&(s=t.ref),t.key!==void 0&&(o=""+t.key),t)ch.call(t,r)&&!dh.hasOwnProperty(r)&&(i[r]=t[r]);var l=arguments.length-2;if(l===1)i.children=n;else if(1<l){for(var a=Array(l),c=0;c<l;c++)a[c]=arguments[c+2];i.children=a}if(e&&e.defaultProps)for(r in l=e.defaultProps,l)i[r]===void 0&&(i[r]=l[r]);return{$$typeof:lo,type:e,key:o,ref:s,props:i,_owner:ec.current}}function Mx(e,t){return{$$typeof:lo,type:e.type,key:t,ref:e.ref,props:e.props,_owner:e._owner}}function tc(e){return typeof e=="object"&&e!==null&&e.$$typeof===lo}function Rx(e){var t={"=":"=0",":":"=2"};return"$"+e.replace(/[=:]/g,function(n){return t[n]})}var Cd=/\/+/g;function Wa(e,t){return typeof e=="object"&&e!==null&&e.key!=null?Rx(""+e.key):t.toString(36)}function qo(e,t,n,r,i){var o=typeof e;(o==="undefined"||o==="boolean")&&(e=null);var s=!1;if(e===null)s=!0;else switch(o){case"string":case"number":s=!0;break;case"object":switch(e.$$typeof){case lo:case wx:s=!0}}if(s)return s=e,i=i(s),e=r===""?"."+Wa(s,0):r,jd(i)?(n="",e!=null&&(n=e.replace(Cd,"$&/")+"/"),qo(i,t,n,"",function(c){return c})):i!=null&&(tc(i)&&(i=Mx(i,n+(!i.key||s&&s.key===i.key?"":(""+i.key).replace(Cd,"$&/")+"/")+e)),t.push(i)),1;if(s=0,r=r===""?".":r+":",jd(e))for(var l=0;l<e.length;l++){o=e[l];var a=r+Wa(o,l);s+=qo(o,t,n,a,i)}else if(a=Tx(e),typeof a=="function")for(e=a.call(e),l=0;!(o=e.next()).done;)o=o.value,a=r+Wa(o,l++),s+=qo(o,t,n,a,i);else if(o==="object")throw t=String(e),Error("Objects are not valid as a React child (found: "+(t==="[object Object]"?"object with keys {"+Object.keys(e).join(", ")+"}":t)+"). If you meant to render a collection of children, use an array instead.");return s}function bo(e,t,n){if(e==null)return e;var r=[],i=0;return qo(e,r,"","",function(o){return t.call(n,o,i++)}),r}function Ix(e){if(e._status===-1){var t=e._result;t=t(),t.then(function(n){(e._status===0||e._status===-1)&&(e._status=1,e._result=n)},function(n){(e._status===0||e._status===-1)&&(e._status=2,e._result=n)}),e._status===-1&&(e._status=0,e._result=t)}if(e._status===1)return e._result.default;throw e._result}var ct={current:null},Jo={transition:null},Dx={ReactCurrentDispatcher:ct,ReactCurrentBatchConfig:Jo,ReactCurrentOwner:ec};ce.Children={map:bo,forEach:function(e,t,n){bo(e,function(){t.apply(this,arguments)},n)},count:function(e){var t=0;return bo(e,function(){t++}),t},toArray:function(e){return bo(e,function(t){return t})||[]},only:function(e){if(!tc(e))throw Error("React.Children.only expected to receive a single React element child.");return e}};ce.Component=ei;ce.Fragment=bx;ce.Profiler=kx;ce.PureComponent=Ju;ce.StrictMode=Sx;ce.Suspense=Ox;ce.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED=Dx;ce.cloneElement=function(e,t,n){if(e==null)throw Error("React.cloneElement(...): The argument must be a React element, but you passed "+e+".");var r=ah({},e.props),i=e.key,o=e.ref,s=e._owner;if(t!=null){if(t.ref!==void 0&&(o=t.ref,s=ec.current),t.key!==void 0&&(i=""+t.key),e.type&&e.type.defaultProps)var l=e.type.defaultProps;for(a in t)ch.call(t,a)&&!dh.hasOwnProperty(a)&&(r[a]=t[a]===void 0&&l!==void 0?l[a]:t[a])}var a=arguments.length-2;if(a===1)r.children=n;else if(1<a){l=Array(a);for(var c=0;c<a;c++)l[c]=arguments[c+2];r.children=l}return{$$typeof:lo,type:e.type,key:i,ref:o,props:r,_owner:s}};ce.createContext=function(e){return e={$$typeof:Cx,_currentValue:e,_currentValue2:e,_threadCount:0,Provider:null,Consumer:null,_defaultValue:null,_globalName:null},e.Provider={$$typeof:jx,_context:e},e.Consumer=e};ce.createElement=fh;ce.createFactory=function(e){var t=fh.bind(null,e);return t.type=e,t};ce.createRef=function(){return{current:null}};ce.forwardRef=function(e){return{$$typeof:Ex,render:e}};ce.isValidElement=tc;ce.lazy=function(e){return{$$typeof:Px,_payload:{_status:-1,_result:e},_init:Ix}};ce.memo=function(e,t){return{$$typeof:_x,type:e,compare:t===void 0?null:t}};ce.startTransition=function(e){var t=Jo.transition;Jo.transition={};try{e()}finally{Jo.transition=t}};ce.unstable_act=function(){throw Error("act(...) is not supported in production builds of React.")};ce.useCallback=function(e,t){return ct.current.useCallback(e,t)};ce.useContext=function(e){return ct.current.useContext(e)};ce.useDebugValue=function(){};ce.useDeferredValue=function(e){return ct.current.useDeferredValue(e)};ce.useEffect=function(e,t){return ct.current.useEffect(e,t)};ce.useId=function(){return ct.current.useId()};ce.useImperativeHandle=function(e,t,n){return ct.current.useImperativeHandle(e,t,n)};ce.useInsertionEffect=function(e,t){return ct.current.useInsertionEffect(e,t)};ce.useLayoutEffect=function(e,t){return ct.current.useLayoutEffect(e,t)};ce.useMemo=function(e,t){return ct.current.useMemo(e,t)};ce.useReducer=function(e,t,n){return ct.current.useReducer(e,t,n)};ce.useRef=function(e){return ct.current.useRef(e)};ce.useState=function(e){return ct.current.useState(e)};ce.useSyncExternalStore=function(e,t,n){return ct.current.useSyncExternalStore(e,t,n)};ce.useTransition=function(){return ct.current.useTransition()};ce.version="18.2.0";oh.exports=ce;var M=oh.exports;const Ce=ao(M),Ed=xx({__proto__:null,default:Ce},[M]);/**
 * @license React
 * react-jsx-runtime.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */var Lx=M,Ax=Symbol.for("react.element"),Fx=Symbol.for("react.fragment"),zx=Object.prototype.hasOwnProperty,Vx=Lx.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED.ReactCurrentOwner,Nx={key:!0,ref:!0,__self:!0,__source:!0};function ph(e,t,n){var r,i={},o=null,s=null;n!==void 0&&(o=""+n),t.key!==void 0&&(o=""+t.key),t.ref!==void 0&&(s=t.ref);for(r in t)zx.call(t,r)&&!Nx.hasOwnProperty(r)&&(i[r]=t[r]);if(e&&e.defaultProps)for(r in t=e.defaultProps,t)i[r]===void 0&&(i[r]=t[r]);return{$$typeof:Ax,type:e,key:o,ref:s,props:i,_owner:Vx.current}}ia.Fragment=Fx;ia.jsx=ph;ia.jsxs=ph;ih.exports=ia;var u=ih.exports,Wl={},hh={exports:{}},Et={},mh={exports:{}},gh={};/**
 * @license React
 * scheduler.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */(function(e){function t(z,Q){var Y=z.length;z.push(Q);e:for(;0<Y;){var de=Y-1>>>1,re=z[de];if(0<i(re,Q))z[de]=Q,z[Y]=re,Y=de;else break e}}function n(z){return z.length===0?null:z[0]}function r(z){if(z.length===0)return null;var Q=z[0],Y=z.pop();if(Y!==Q){z[0]=Y;e:for(var de=0,re=z.length,Oe=re>>>1;de<Oe;){var be=2*(de+1)-1,Ue=z[be],me=be+1,Se=z[me];if(0>i(Ue,Y))me<re&&0>i(Se,Ue)?(z[de]=Se,z[me]=Y,de=me):(z[de]=Ue,z[be]=Y,de=be);else if(me<re&&0>i(Se,Y))z[de]=Se,z[me]=Y,de=me;else break e}}return Q}function i(z,Q){var Y=z.sortIndex-Q.sortIndex;return Y!==0?Y:z.id-Q.id}if(typeof performance=="object"&&typeof performance.now=="function"){var o=performance;e.unstable_now=function(){return o.now()}}else{var s=Date,l=s.now();e.unstable_now=function(){return s.now()-l}}var a=[],c=[],d=1,f=null,m=3,y=!1,g=!1,v=!1,w=typeof setTimeout=="function"?setTimeout:null,p=typeof clearTimeout=="function"?clearTimeout:null,h=typeof setImmediate<"u"?setImmediate:null;typeof navigator<"u"&&navigator.scheduling!==void 0&&navigator.scheduling.isInputPending!==void 0&&navigator.scheduling.isInputPending.bind(navigator.scheduling);function x(z){for(var Q=n(c);Q!==null;){if(Q.callback===null)r(c);else if(Q.startTime<=z)r(c),Q.sortIndex=Q.expirationTime,t(a,Q);else break;Q=n(c)}}function b(z){if(v=!1,x(z),!g)if(n(a)!==null)g=!0,te(k);else{var Q=n(c);Q!==null&&xe(b,Q.startTime-z)}}function k(z,Q){g=!1,v&&(v=!1,p(P),P=-1),y=!0;var Y=m;try{for(x(Q),f=n(a);f!==null&&(!(f.expirationTime>Q)||z&&!W());){var de=f.callback;if(typeof de=="function"){f.callback=null,m=f.priorityLevel;var re=de(f.expirationTime<=Q);Q=e.unstable_now(),typeof re=="function"?f.callback=re:f===n(a)&&r(a),x(Q)}else r(a);f=n(a)}if(f!==null)var Oe=!0;else{var be=n(c);be!==null&&xe(b,be.startTime-Q),Oe=!1}return Oe}finally{f=null,m=Y,y=!1}}var _=!1,E=null,P=-1,T=5,I=-1;function W(){return!(e.unstable_now()-I<T)}function A(){if(E!==null){var z=e.unstable_now();I=z;var Q=!0;try{Q=E(!0,z)}finally{Q?D():(_=!1,E=null)}}else _=!1}var D;if(typeof h=="function")D=function(){h(A)};else if(typeof MessageChannel<"u"){var q=new MessageChannel,ee=q.port2;q.port1.onmessage=A,D=function(){ee.postMessage(null)}}else D=function(){w(A,0)};function te(z){E=z,_||(_=!0,D())}function xe(z,Q){P=w(function(){z(e.unstable_now())},Q)}e.unstable_IdlePriority=5,e.unstable_ImmediatePriority=1,e.unstable_LowPriority=4,e.unstable_NormalPriority=3,e.unstable_Profiling=null,e.unstable_UserBlockingPriority=2,e.unstable_cancelCallback=function(z){z.callback=null},e.unstable_continueExecution=function(){g||y||(g=!0,te(k))},e.unstable_forceFrameRate=function(z){0>z||125<z?console.error("forceFrameRate takes a positive int between 0 and 125, forcing frame rates higher than 125 fps is not supported"):T=0<z?Math.floor(1e3/z):5},e.unstable_getCurrentPriorityLevel=function(){return m},e.unstable_getFirstCallbackNode=function(){return n(a)},e.unstable_next=function(z){switch(m){case 1:case 2:case 3:var Q=3;break;default:Q=m}var Y=m;m=Q;try{return z()}finally{m=Y}},e.unstable_pauseExecution=function(){},e.unstable_requestPaint=function(){},e.unstable_runWithPriority=function(z,Q){switch(z){case 1:case 2:case 3:case 4:case 5:break;default:z=3}var Y=m;m=z;try{return Q()}finally{m=Y}},e.unstable_scheduleCallback=function(z,Q,Y){var de=e.unstable_now();switch(typeof Y=="object"&&Y!==null?(Y=Y.delay,Y=typeof Y=="number"&&0<Y?de+Y:de):Y=de,z){case 1:var re=-1;break;case 2:re=250;break;case 5:re=1073741823;break;case 4:re=1e4;break;default:re=5e3}return re=Y+re,z={id:d++,callback:Q,priorityLevel:z,startTime:Y,expirationTime:re,sortIndex:-1},Y>de?(z.sortIndex=Y,t(c,z),n(a)===null&&z===n(c)&&(v?(p(P),P=-1):v=!0,xe(b,Y-de))):(z.sortIndex=re,t(a,z),g||y||(g=!0,te(k))),z},e.unstable_shouldYield=W,e.unstable_wrapCallback=function(z){var Q=m;return function(){var Y=m;m=Q;try{return z.apply(this,arguments)}finally{m=Y}}}})(gh);mh.exports=gh;var $x=mh.exports;/**
 * @license React
 * react-dom.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */var vh=M,jt=$x;function L(e){for(var t="https://reactjs.org/docs/error-decoder.html?invariant="+e,n=1;n<arguments.length;n++)t+="&args[]="+encodeURIComponent(arguments[n]);return"Minified React error #"+e+"; visit "+t+" for the full message or use the non-minified dev environment for full errors and additional helpful warnings."}var xh=new Set,Vi={};function gr(e,t){Hr(e,t),Hr(e+"Capture",t)}function Hr(e,t){for(Vi[e]=t,e=0;e<t.length;e++)xh.add(t[e])}var wn=!(typeof window>"u"||typeof window.document>"u"||typeof window.document.createElement>"u"),Bl=Object.prototype.hasOwnProperty,Ux=/^[:A-Z_a-z\u00C0-\u00D6\u00D8-\u00F6\u00F8-\u02FF\u0370-\u037D\u037F-\u1FFF\u200C-\u200D\u2070-\u218F\u2C00-\u2FEF\u3001-\uD7FF\uF900-\uFDCF\uFDF0-\uFFFD][:A-Z_a-z\u00C0-\u00D6\u00D8-\u00F6\u00F8-\u02FF\u0370-\u037D\u037F-\u1FFF\u200C-\u200D\u2070-\u218F\u2C00-\u2FEF\u3001-\uD7FF\uF900-\uFDCF\uFDF0-\uFFFD\-.0-9\u00B7\u0300-\u036F\u203F-\u2040]*$/,Od={},_d={};function Wx(e){return Bl.call(_d,e)?!0:Bl.call(Od,e)?!1:Ux.test(e)?_d[e]=!0:(Od[e]=!0,!1)}function Bx(e,t,n,r){if(n!==null&&n.type===0)return!1;switch(typeof t){case"function":case"symbol":return!0;case"boolean":return r?!1:n!==null?!n.acceptsBooleans:(e=e.toLowerCase().slice(0,5),e!=="data-"&&e!=="aria-");default:return!1}}function Hx(e,t,n,r){if(t===null||typeof t>"u"||Bx(e,t,n,r))return!0;if(r)return!1;if(n!==null)switch(n.type){case 3:return!t;case 4:return t===!1;case 5:return isNaN(t);case 6:return isNaN(t)||1>t}return!1}function dt(e,t,n,r,i,o,s){this.acceptsBooleans=t===2||t===3||t===4,this.attributeName=r,this.attributeNamespace=i,this.mustUseProperty=n,this.propertyName=e,this.type=t,this.sanitizeURL=o,this.removeEmptyString=s}var Ze={};"children dangerouslySetInnerHTML defaultValue defaultChecked innerHTML suppressContentEditableWarning suppressHydrationWarning style".split(" ").forEach(function(e){Ze[e]=new dt(e,0,!1,e,null,!1,!1)});[["acceptCharset","accept-charset"],["className","class"],["htmlFor","for"],["httpEquiv","http-equiv"]].forEach(function(e){var t=e[0];Ze[t]=new dt(t,1,!1,e[1],null,!1,!1)});["contentEditable","draggable","spellCheck","value"].forEach(function(e){Ze[e]=new dt(e,2,!1,e.toLowerCase(),null,!1,!1)});["autoReverse","externalResourcesRequired","focusable","preserveAlpha"].forEach(function(e){Ze[e]=new dt(e,2,!1,e,null,!1,!1)});"allowFullScreen async autoFocus autoPlay controls default defer disabled disablePictureInPicture disableRemotePlayback formNoValidate hidden loop noModule noValidate open playsInline readOnly required reversed scoped seamless itemScope".split(" ").forEach(function(e){Ze[e]=new dt(e,3,!1,e.toLowerCase(),null,!1,!1)});["checked","multiple","muted","selected"].forEach(function(e){Ze[e]=new dt(e,3,!0,e,null,!1,!1)});["capture","download"].forEach(function(e){Ze[e]=new dt(e,4,!1,e,null,!1,!1)});["cols","rows","size","span"].forEach(function(e){Ze[e]=new dt(e,6,!1,e,null,!1,!1)});["rowSpan","start"].forEach(function(e){Ze[e]=new dt(e,5,!1,e.toLowerCase(),null,!1,!1)});var nc=/[\-:]([a-z])/g;function rc(e){return e[1].toUpperCase()}"accent-height alignment-baseline arabic-form baseline-shift cap-height clip-path clip-rule color-interpolation color-interpolation-filters color-profile color-rendering dominant-baseline enable-background fill-opacity fill-rule flood-color flood-opacity font-family font-size font-size-adjust font-stretch font-style font-variant font-weight glyph-name glyph-orientation-horizontal glyph-orientation-vertical horiz-adv-x horiz-origin-x image-rendering letter-spacing lighting-color marker-end marker-mid marker-start overline-position overline-thickness paint-order panose-1 pointer-events rendering-intent shape-rendering stop-color stop-opacity strikethrough-position strikethrough-thickness stroke-dasharray stroke-dashoffset stroke-linecap stroke-linejoin stroke-miterlimit stroke-opacity stroke-width text-anchor text-decoration text-rendering underline-position underline-thickness unicode-bidi unicode-range units-per-em v-alphabetic v-hanging v-ideographic v-mathematical vector-effect vert-adv-y vert-origin-x vert-origin-y word-spacing writing-mode xmlns:xlink x-height".split(" ").forEach(function(e){var t=e.replace(nc,rc);Ze[t]=new dt(t,1,!1,e,null,!1,!1)});"xlink:actuate xlink:arcrole xlink:role xlink:show xlink:title xlink:type".split(" ").forEach(function(e){var t=e.replace(nc,rc);Ze[t]=new dt(t,1,!1,e,"http://www.w3.org/1999/xlink",!1,!1)});["xml:base","xml:lang","xml:space"].forEach(function(e){var t=e.replace(nc,rc);Ze[t]=new dt(t,1,!1,e,"http://www.w3.org/XML/1998/namespace",!1,!1)});["tabIndex","crossOrigin"].forEach(function(e){Ze[e]=new dt(e,1,!1,e.toLowerCase(),null,!1,!1)});Ze.xlinkHref=new dt("xlinkHref",1,!1,"xlink:href","http://www.w3.org/1999/xlink",!0,!1);["src","href","action","formAction"].forEach(function(e){Ze[e]=new dt(e,1,!1,e.toLowerCase(),null,!0,!0)});function ic(e,t,n,r){var i=Ze.hasOwnProperty(t)?Ze[t]:null;(i!==null?i.type!==0:r||!(2<t.length)||t[0]!=="o"&&t[0]!=="O"||t[1]!=="n"&&t[1]!=="N")&&(Hx(t,n,i,r)&&(n=null),r||i===null?Wx(t)&&(n===null?e.removeAttribute(t):e.setAttribute(t,""+n)):i.mustUseProperty?e[i.propertyName]=n===null?i.type===3?!1:"":n:(t=i.attributeName,r=i.attributeNamespace,n===null?e.removeAttribute(t):(i=i.type,n=i===3||i===4&&n===!0?"":""+n,r?e.setAttributeNS(r,t,n):e.setAttribute(t,n))))}var jn=vh.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED,So=Symbol.for("react.element"),Cr=Symbol.for("react.portal"),Er=Symbol.for("react.fragment"),oc=Symbol.for("react.strict_mode"),Hl=Symbol.for("react.profiler"),yh=Symbol.for("react.provider"),wh=Symbol.for("react.context"),sc=Symbol.for("react.forward_ref"),Ql=Symbol.for("react.suspense"),Yl=Symbol.for("react.suspense_list"),ac=Symbol.for("react.memo"),Ln=Symbol.for("react.lazy"),bh=Symbol.for("react.offscreen"),Pd=Symbol.iterator;function oi(e){return e===null||typeof e!="object"?null:(e=Pd&&e[Pd]||e["@@iterator"],typeof e=="function"?e:null)}var Ie=Object.assign,Ba;function Si(e){if(Ba===void 0)try{throw Error()}catch(n){var t=n.stack.trim().match(/\n( *(at )?)/);Ba=t&&t[1]||""}return`
`+Ba+e}var Ha=!1;function Qa(e,t){if(!e||Ha)return"";Ha=!0;var n=Error.prepareStackTrace;Error.prepareStackTrace=void 0;try{if(t)if(t=function(){throw Error()},Object.defineProperty(t.prototype,"props",{set:function(){throw Error()}}),typeof Reflect=="object"&&Reflect.construct){try{Reflect.construct(t,[])}catch(c){var r=c}Reflect.construct(e,[],t)}else{try{t.call()}catch(c){r=c}e.call(t.prototype)}else{try{throw Error()}catch(c){r=c}e()}}catch(c){if(c&&r&&typeof c.stack=="string"){for(var i=c.stack.split(`
`),o=r.stack.split(`
`),s=i.length-1,l=o.length-1;1<=s&&0<=l&&i[s]!==o[l];)l--;for(;1<=s&&0<=l;s--,l--)if(i[s]!==o[l]){if(s!==1||l!==1)do if(s--,l--,0>l||i[s]!==o[l]){var a=`
`+i[s].replace(" at new "," at ");return e.displayName&&a.includes("<anonymous>")&&(a=a.replace("<anonymous>",e.displayName)),a}while(1<=s&&0<=l);break}}}finally{Ha=!1,Error.prepareStackTrace=n}return(e=e?e.displayName||e.name:"")?Si(e):""}function Qx(e){switch(e.tag){case 5:return Si(e.type);case 16:return Si("Lazy");case 13:return Si("Suspense");case 19:return Si("SuspenseList");case 0:case 2:case 15:return e=Qa(e.type,!1),e;case 11:return e=Qa(e.type.render,!1),e;case 1:return e=Qa(e.type,!0),e;default:return""}}function Kl(e){if(e==null)return null;if(typeof e=="function")return e.displayName||e.name||null;if(typeof e=="string")return e;switch(e){case Er:return"Fragment";case Cr:return"Portal";case Hl:return"Profiler";case oc:return"StrictMode";case Ql:return"Suspense";case Yl:return"SuspenseList"}if(typeof e=="object")switch(e.$$typeof){case wh:return(e.displayName||"Context")+".Consumer";case yh:return(e._context.displayName||"Context")+".Provider";case sc:var t=e.render;return e=e.displayName,e||(e=t.displayName||t.name||"",e=e!==""?"ForwardRef("+e+")":"ForwardRef"),e;case ac:return t=e.displayName||null,t!==null?t:Kl(e.type)||"Memo";case Ln:t=e._payload,e=e._init;try{return Kl(e(t))}catch{}}return null}function Yx(e){var t=e.type;switch(e.tag){case 24:return"Cache";case 9:return(t.displayName||"Context")+".Consumer";case 10:return(t._context.displayName||"Context")+".Provider";case 18:return"DehydratedFragment";case 11:return e=t.render,e=e.displayName||e.name||"",t.displayName||(e!==""?"ForwardRef("+e+")":"ForwardRef");case 7:return"Fragment";case 5:return t;case 4:return"Portal";case 3:return"Root";case 6:return"Text";case 16:return Kl(t);case 8:return t===oc?"StrictMode":"Mode";case 22:return"Offscreen";case 12:return"Profiler";case 21:return"Scope";case 13:return"Suspense";case 19:return"SuspenseList";case 25:return"TracingMarker";case 1:case 0:case 17:case 2:case 14:case 15:if(typeof t=="function")return t.displayName||t.name||null;if(typeof t=="string")return t}return null}function Xn(e){switch(typeof e){case"boolean":case"number":case"string":case"undefined":return e;case"object":return e;default:return""}}function Sh(e){var t=e.type;return(e=e.nodeName)&&e.toLowerCase()==="input"&&(t==="checkbox"||t==="radio")}function Kx(e){var t=Sh(e)?"checked":"value",n=Object.getOwnPropertyDescriptor(e.constructor.prototype,t),r=""+e[t];if(!e.hasOwnProperty(t)&&typeof n<"u"&&typeof n.get=="function"&&typeof n.set=="function"){var i=n.get,o=n.set;return Object.defineProperty(e,t,{configurable:!0,get:function(){return i.call(this)},set:function(s){r=""+s,o.call(this,s)}}),Object.defineProperty(e,t,{enumerable:n.enumerable}),{getValue:function(){return r},setValue:function(s){r=""+s},stopTracking:function(){e._valueTracker=null,delete e[t]}}}}function ko(e){e._valueTracker||(e._valueTracker=Kx(e))}function kh(e){if(!e)return!1;var t=e._valueTracker;if(!t)return!0;var n=t.getValue(),r="";return e&&(r=Sh(e)?e.checked?"true":"false":e.value),e=r,e!==n?(t.setValue(e),!0):!1}function ws(e){if(e=e||(typeof document<"u"?document:void 0),typeof e>"u")return null;try{return e.activeElement||e.body}catch{return e.body}}function Gl(e,t){var n=t.checked;return Ie({},t,{defaultChecked:void 0,defaultValue:void 0,value:void 0,checked:n??e._wrapperState.initialChecked})}function Td(e,t){var n=t.defaultValue==null?"":t.defaultValue,r=t.checked!=null?t.checked:t.defaultChecked;n=Xn(t.value!=null?t.value:n),e._wrapperState={initialChecked:r,initialValue:n,controlled:t.type==="checkbox"||t.type==="radio"?t.checked!=null:t.value!=null}}function jh(e,t){t=t.checked,t!=null&&ic(e,"checked",t,!1)}function Xl(e,t){jh(e,t);var n=Xn(t.value),r=t.type;if(n!=null)r==="number"?(n===0&&e.value===""||e.value!=n)&&(e.value=""+n):e.value!==""+n&&(e.value=""+n);else if(r==="submit"||r==="reset"){e.removeAttribute("value");return}t.hasOwnProperty("value")?ql(e,t.type,n):t.hasOwnProperty("defaultValue")&&ql(e,t.type,Xn(t.defaultValue)),t.checked==null&&t.defaultChecked!=null&&(e.defaultChecked=!!t.defaultChecked)}function Md(e,t,n){if(t.hasOwnProperty("value")||t.hasOwnProperty("defaultValue")){var r=t.type;if(!(r!=="submit"&&r!=="reset"||t.value!==void 0&&t.value!==null))return;t=""+e._wrapperState.initialValue,n||t===e.value||(e.value=t),e.defaultValue=t}n=e.name,n!==""&&(e.name=""),e.defaultChecked=!!e._wrapperState.initialChecked,n!==""&&(e.name=n)}function ql(e,t,n){(t!=="number"||ws(e.ownerDocument)!==e)&&(n==null?e.defaultValue=""+e._wrapperState.initialValue:e.defaultValue!==""+n&&(e.defaultValue=""+n))}var ki=Array.isArray;function zr(e,t,n,r){if(e=e.options,t){t={};for(var i=0;i<n.length;i++)t["$"+n[i]]=!0;for(n=0;n<e.length;n++)i=t.hasOwnProperty("$"+e[n].value),e[n].selected!==i&&(e[n].selected=i),i&&r&&(e[n].defaultSelected=!0)}else{for(n=""+Xn(n),t=null,i=0;i<e.length;i++){if(e[i].value===n){e[i].selected=!0,r&&(e[i].defaultSelected=!0);return}t!==null||e[i].disabled||(t=e[i])}t!==null&&(t.selected=!0)}}function Jl(e,t){if(t.dangerouslySetInnerHTML!=null)throw Error(L(91));return Ie({},t,{value:void 0,defaultValue:void 0,children:""+e._wrapperState.initialValue})}function Rd(e,t){var n=t.value;if(n==null){if(n=t.children,t=t.defaultValue,n!=null){if(t!=null)throw Error(L(92));if(ki(n)){if(1<n.length)throw Error(L(93));n=n[0]}t=n}t==null&&(t=""),n=t}e._wrapperState={initialValue:Xn(n)}}function Ch(e,t){var n=Xn(t.value),r=Xn(t.defaultValue);n!=null&&(n=""+n,n!==e.value&&(e.value=n),t.defaultValue==null&&e.defaultValue!==n&&(e.defaultValue=n)),r!=null&&(e.defaultValue=""+r)}function Id(e){var t=e.textContent;t===e._wrapperState.initialValue&&t!==""&&t!==null&&(e.value=t)}function Eh(e){switch(e){case"svg":return"http://www.w3.org/2000/svg";case"math":return"http://www.w3.org/1998/Math/MathML";default:return"http://www.w3.org/1999/xhtml"}}function Zl(e,t){return e==null||e==="http://www.w3.org/1999/xhtml"?Eh(t):e==="http://www.w3.org/2000/svg"&&t==="foreignObject"?"http://www.w3.org/1999/xhtml":e}var jo,Oh=function(e){return typeof MSApp<"u"&&MSApp.execUnsafeLocalFunction?function(t,n,r,i){MSApp.execUnsafeLocalFunction(function(){return e(t,n,r,i)})}:e}(function(e,t){if(e.namespaceURI!=="http://www.w3.org/2000/svg"||"innerHTML"in e)e.innerHTML=t;else{for(jo=jo||document.createElement("div"),jo.innerHTML="<svg>"+t.valueOf().toString()+"</svg>",t=jo.firstChild;e.firstChild;)e.removeChild(e.firstChild);for(;t.firstChild;)e.appendChild(t.firstChild)}});function Ni(e,t){if(t){var n=e.firstChild;if(n&&n===e.lastChild&&n.nodeType===3){n.nodeValue=t;return}}e.textContent=t}var _i={animationIterationCount:!0,aspectRatio:!0,borderImageOutset:!0,borderImageSlice:!0,borderImageWidth:!0,boxFlex:!0,boxFlexGroup:!0,boxOrdinalGroup:!0,columnCount:!0,columns:!0,flex:!0,flexGrow:!0,flexPositive:!0,flexShrink:!0,flexNegative:!0,flexOrder:!0,gridArea:!0,gridRow:!0,gridRowEnd:!0,gridRowSpan:!0,gridRowStart:!0,gridColumn:!0,gridColumnEnd:!0,gridColumnSpan:!0,gridColumnStart:!0,fontWeight:!0,lineClamp:!0,lineHeight:!0,opacity:!0,order:!0,orphans:!0,tabSize:!0,widows:!0,zIndex:!0,zoom:!0,fillOpacity:!0,floodOpacity:!0,stopOpacity:!0,strokeDasharray:!0,strokeDashoffset:!0,strokeMiterlimit:!0,strokeOpacity:!0,strokeWidth:!0},Gx=["Webkit","ms","Moz","O"];Object.keys(_i).forEach(function(e){Gx.forEach(function(t){t=t+e.charAt(0).toUpperCase()+e.substring(1),_i[t]=_i[e]})});function _h(e,t,n){return t==null||typeof t=="boolean"||t===""?"":n||typeof t!="number"||t===0||_i.hasOwnProperty(e)&&_i[e]?(""+t).trim():t+"px"}function Ph(e,t){e=e.style;for(var n in t)if(t.hasOwnProperty(n)){var r=n.indexOf("--")===0,i=_h(n,t[n],r);n==="float"&&(n="cssFloat"),r?e.setProperty(n,i):e[n]=i}}var Xx=Ie({menuitem:!0},{area:!0,base:!0,br:!0,col:!0,embed:!0,hr:!0,img:!0,input:!0,keygen:!0,link:!0,meta:!0,param:!0,source:!0,track:!0,wbr:!0});function eu(e,t){if(t){if(Xx[e]&&(t.children!=null||t.dangerouslySetInnerHTML!=null))throw Error(L(137,e));if(t.dangerouslySetInnerHTML!=null){if(t.children!=null)throw Error(L(60));if(typeof t.dangerouslySetInnerHTML!="object"||!("__html"in t.dangerouslySetInnerHTML))throw Error(L(61))}if(t.style!=null&&typeof t.style!="object")throw Error(L(62))}}function tu(e,t){if(e.indexOf("-")===-1)return typeof t.is=="string";switch(e){case"annotation-xml":case"color-profile":case"font-face":case"font-face-src":case"font-face-uri":case"font-face-format":case"font-face-name":case"missing-glyph":return!1;default:return!0}}var nu=null;function lc(e){return e=e.target||e.srcElement||window,e.correspondingUseElement&&(e=e.correspondingUseElement),e.nodeType===3?e.parentNode:e}var ru=null,Vr=null,Nr=null;function Dd(e){if(e=fo(e)){if(typeof ru!="function")throw Error(L(280));var t=e.stateNode;t&&(t=ua(t),ru(e.stateNode,e.type,t))}}function Th(e){Vr?Nr?Nr.push(e):Nr=[e]:Vr=e}function Mh(){if(Vr){var e=Vr,t=Nr;if(Nr=Vr=null,Dd(e),t)for(e=0;e<t.length;e++)Dd(t[e])}}function Rh(e,t){return e(t)}function Ih(){}var Ya=!1;function Dh(e,t,n){if(Ya)return e(t,n);Ya=!0;try{return Rh(e,t,n)}finally{Ya=!1,(Vr!==null||Nr!==null)&&(Ih(),Mh())}}function $i(e,t){var n=e.stateNode;if(n===null)return null;var r=ua(n);if(r===null)return null;n=r[t];e:switch(t){case"onClick":case"onClickCapture":case"onDoubleClick":case"onDoubleClickCapture":case"onMouseDown":case"onMouseDownCapture":case"onMouseMove":case"onMouseMoveCapture":case"onMouseUp":case"onMouseUpCapture":case"onMouseEnter":(r=!r.disabled)||(e=e.type,r=!(e==="button"||e==="input"||e==="select"||e==="textarea")),e=!r;break e;default:e=!1}if(e)return null;if(n&&typeof n!="function")throw Error(L(231,t,typeof n));return n}var iu=!1;if(wn)try{var si={};Object.defineProperty(si,"passive",{get:function(){iu=!0}}),window.addEventListener("test",si,si),window.removeEventListener("test",si,si)}catch{iu=!1}function qx(e,t,n,r,i,o,s,l,a){var c=Array.prototype.slice.call(arguments,3);try{t.apply(n,c)}catch(d){this.onError(d)}}var Pi=!1,bs=null,Ss=!1,ou=null,Jx={onError:function(e){Pi=!0,bs=e}};function Zx(e,t,n,r,i,o,s,l,a){Pi=!1,bs=null,qx.apply(Jx,arguments)}function e0(e,t,n,r,i,o,s,l,a){if(Zx.apply(this,arguments),Pi){if(Pi){var c=bs;Pi=!1,bs=null}else throw Error(L(198));Ss||(Ss=!0,ou=c)}}function vr(e){var t=e,n=e;if(e.alternate)for(;t.return;)t=t.return;else{e=t;do t=e,t.flags&4098&&(n=t.return),e=t.return;while(e)}return t.tag===3?n:null}function Lh(e){if(e.tag===13){var t=e.memoizedState;if(t===null&&(e=e.alternate,e!==null&&(t=e.memoizedState)),t!==null)return t.dehydrated}return null}function Ld(e){if(vr(e)!==e)throw Error(L(188))}function t0(e){var t=e.alternate;if(!t){if(t=vr(e),t===null)throw Error(L(188));return t!==e?null:e}for(var n=e,r=t;;){var i=n.return;if(i===null)break;var o=i.alternate;if(o===null){if(r=i.return,r!==null){n=r;continue}break}if(i.child===o.child){for(o=i.child;o;){if(o===n)return Ld(i),e;if(o===r)return Ld(i),t;o=o.sibling}throw Error(L(188))}if(n.return!==r.return)n=i,r=o;else{for(var s=!1,l=i.child;l;){if(l===n){s=!0,n=i,r=o;break}if(l===r){s=!0,r=i,n=o;break}l=l.sibling}if(!s){for(l=o.child;l;){if(l===n){s=!0,n=o,r=i;break}if(l===r){s=!0,r=o,n=i;break}l=l.sibling}if(!s)throw Error(L(189))}}if(n.alternate!==r)throw Error(L(190))}if(n.tag!==3)throw Error(L(188));return n.stateNode.current===n?e:t}function Ah(e){return e=t0(e),e!==null?Fh(e):null}function Fh(e){if(e.tag===5||e.tag===6)return e;for(e=e.child;e!==null;){var t=Fh(e);if(t!==null)return t;e=e.sibling}return null}var zh=jt.unstable_scheduleCallback,Ad=jt.unstable_cancelCallback,n0=jt.unstable_shouldYield,r0=jt.unstable_requestPaint,Fe=jt.unstable_now,i0=jt.unstable_getCurrentPriorityLevel,uc=jt.unstable_ImmediatePriority,Vh=jt.unstable_UserBlockingPriority,ks=jt.unstable_NormalPriority,o0=jt.unstable_LowPriority,Nh=jt.unstable_IdlePriority,oa=null,on=null;function s0(e){if(on&&typeof on.onCommitFiberRoot=="function")try{on.onCommitFiberRoot(oa,e,void 0,(e.current.flags&128)===128)}catch{}}var Ht=Math.clz32?Math.clz32:u0,a0=Math.log,l0=Math.LN2;function u0(e){return e>>>=0,e===0?32:31-(a0(e)/l0|0)|0}var Co=64,Eo=4194304;function ji(e){switch(e&-e){case 1:return 1;case 2:return 2;case 4:return 4;case 8:return 8;case 16:return 16;case 32:return 32;case 64:case 128:case 256:case 512:case 1024:case 2048:case 4096:case 8192:case 16384:case 32768:case 65536:case 131072:case 262144:case 524288:case 1048576:case 2097152:return e&4194240;case 4194304:case 8388608:case 16777216:case 33554432:case 67108864:return e&130023424;case 134217728:return 134217728;case 268435456:return 268435456;case 536870912:return 536870912;case 1073741824:return 1073741824;default:return e}}function js(e,t){var n=e.pendingLanes;if(n===0)return 0;var r=0,i=e.suspendedLanes,o=e.pingedLanes,s=n&268435455;if(s!==0){var l=s&~i;l!==0?r=ji(l):(o&=s,o!==0&&(r=ji(o)))}else s=n&~i,s!==0?r=ji(s):o!==0&&(r=ji(o));if(r===0)return 0;if(t!==0&&t!==r&&!(t&i)&&(i=r&-r,o=t&-t,i>=o||i===16&&(o&4194240)!==0))return t;if(r&4&&(r|=n&16),t=e.entangledLanes,t!==0)for(e=e.entanglements,t&=r;0<t;)n=31-Ht(t),i=1<<n,r|=e[n],t&=~i;return r}function c0(e,t){switch(e){case 1:case 2:case 4:return t+250;case 8:case 16:case 32:case 64:case 128:case 256:case 512:case 1024:case 2048:case 4096:case 8192:case 16384:case 32768:case 65536:case 131072:case 262144:case 524288:case 1048576:case 2097152:return t+5e3;case 4194304:case 8388608:case 16777216:case 33554432:case 67108864:return-1;case 134217728:case 268435456:case 536870912:case 1073741824:return-1;default:return-1}}function d0(e,t){for(var n=e.suspendedLanes,r=e.pingedLanes,i=e.expirationTimes,o=e.pendingLanes;0<o;){var s=31-Ht(o),l=1<<s,a=i[s];a===-1?(!(l&n)||l&r)&&(i[s]=c0(l,t)):a<=t&&(e.expiredLanes|=l),o&=~l}}function su(e){return e=e.pendingLanes&-1073741825,e!==0?e:e&1073741824?1073741824:0}function $h(){var e=Co;return Co<<=1,!(Co&4194240)&&(Co=64),e}function Ka(e){for(var t=[],n=0;31>n;n++)t.push(e);return t}function uo(e,t,n){e.pendingLanes|=t,t!==536870912&&(e.suspendedLanes=0,e.pingedLanes=0),e=e.eventTimes,t=31-Ht(t),e[t]=n}function f0(e,t){var n=e.pendingLanes&~t;e.pendingLanes=t,e.suspendedLanes=0,e.pingedLanes=0,e.expiredLanes&=t,e.mutableReadLanes&=t,e.entangledLanes&=t,t=e.entanglements;var r=e.eventTimes;for(e=e.expirationTimes;0<n;){var i=31-Ht(n),o=1<<i;t[i]=0,r[i]=-1,e[i]=-1,n&=~o}}function cc(e,t){var n=e.entangledLanes|=t;for(e=e.entanglements;n;){var r=31-Ht(n),i=1<<r;i&t|e[r]&t&&(e[r]|=t),n&=~i}}var ye=0;function Uh(e){return e&=-e,1<e?4<e?e&268435455?16:536870912:4:1}var Wh,dc,Bh,Hh,Qh,au=!1,Oo=[],Un=null,Wn=null,Bn=null,Ui=new Map,Wi=new Map,Fn=[],p0="mousedown mouseup touchcancel touchend touchstart auxclick dblclick pointercancel pointerdown pointerup dragend dragstart drop compositionend compositionstart keydown keypress keyup input textInput copy cut paste click change contextmenu reset submit".split(" ");function Fd(e,t){switch(e){case"focusin":case"focusout":Un=null;break;case"dragenter":case"dragleave":Wn=null;break;case"mouseover":case"mouseout":Bn=null;break;case"pointerover":case"pointerout":Ui.delete(t.pointerId);break;case"gotpointercapture":case"lostpointercapture":Wi.delete(t.pointerId)}}function ai(e,t,n,r,i,o){return e===null||e.nativeEvent!==o?(e={blockedOn:t,domEventName:n,eventSystemFlags:r,nativeEvent:o,targetContainers:[i]},t!==null&&(t=fo(t),t!==null&&dc(t)),e):(e.eventSystemFlags|=r,t=e.targetContainers,i!==null&&t.indexOf(i)===-1&&t.push(i),e)}function h0(e,t,n,r,i){switch(t){case"focusin":return Un=ai(Un,e,t,n,r,i),!0;case"dragenter":return Wn=ai(Wn,e,t,n,r,i),!0;case"mouseover":return Bn=ai(Bn,e,t,n,r,i),!0;case"pointerover":var o=i.pointerId;return Ui.set(o,ai(Ui.get(o)||null,e,t,n,r,i)),!0;case"gotpointercapture":return o=i.pointerId,Wi.set(o,ai(Wi.get(o)||null,e,t,n,r,i)),!0}return!1}function Yh(e){var t=ir(e.target);if(t!==null){var n=vr(t);if(n!==null){if(t=n.tag,t===13){if(t=Lh(n),t!==null){e.blockedOn=t,Qh(e.priority,function(){Bh(n)});return}}else if(t===3&&n.stateNode.current.memoizedState.isDehydrated){e.blockedOn=n.tag===3?n.stateNode.containerInfo:null;return}}}e.blockedOn=null}function Zo(e){if(e.blockedOn!==null)return!1;for(var t=e.targetContainers;0<t.length;){var n=lu(e.domEventName,e.eventSystemFlags,t[0],e.nativeEvent);if(n===null){n=e.nativeEvent;var r=new n.constructor(n.type,n);nu=r,n.target.dispatchEvent(r),nu=null}else return t=fo(n),t!==null&&dc(t),e.blockedOn=n,!1;t.shift()}return!0}function zd(e,t,n){Zo(e)&&n.delete(t)}function m0(){au=!1,Un!==null&&Zo(Un)&&(Un=null),Wn!==null&&Zo(Wn)&&(Wn=null),Bn!==null&&Zo(Bn)&&(Bn=null),Ui.forEach(zd),Wi.forEach(zd)}function li(e,t){e.blockedOn===t&&(e.blockedOn=null,au||(au=!0,jt.unstable_scheduleCallback(jt.unstable_NormalPriority,m0)))}function Bi(e){function t(i){return li(i,e)}if(0<Oo.length){li(Oo[0],e);for(var n=1;n<Oo.length;n++){var r=Oo[n];r.blockedOn===e&&(r.blockedOn=null)}}for(Un!==null&&li(Un,e),Wn!==null&&li(Wn,e),Bn!==null&&li(Bn,e),Ui.forEach(t),Wi.forEach(t),n=0;n<Fn.length;n++)r=Fn[n],r.blockedOn===e&&(r.blockedOn=null);for(;0<Fn.length&&(n=Fn[0],n.blockedOn===null);)Yh(n),n.blockedOn===null&&Fn.shift()}var $r=jn.ReactCurrentBatchConfig,Cs=!0;function g0(e,t,n,r){var i=ye,o=$r.transition;$r.transition=null;try{ye=1,fc(e,t,n,r)}finally{ye=i,$r.transition=o}}function v0(e,t,n,r){var i=ye,o=$r.transition;$r.transition=null;try{ye=4,fc(e,t,n,r)}finally{ye=i,$r.transition=o}}function fc(e,t,n,r){if(Cs){var i=lu(e,t,n,r);if(i===null)il(e,t,r,Es,n),Fd(e,r);else if(h0(i,e,t,n,r))r.stopPropagation();else if(Fd(e,r),t&4&&-1<p0.indexOf(e)){for(;i!==null;){var o=fo(i);if(o!==null&&Wh(o),o=lu(e,t,n,r),o===null&&il(e,t,r,Es,n),o===i)break;i=o}i!==null&&r.stopPropagation()}else il(e,t,r,null,n)}}var Es=null;function lu(e,t,n,r){if(Es=null,e=lc(r),e=ir(e),e!==null)if(t=vr(e),t===null)e=null;else if(n=t.tag,n===13){if(e=Lh(t),e!==null)return e;e=null}else if(n===3){if(t.stateNode.current.memoizedState.isDehydrated)return t.tag===3?t.stateNode.containerInfo:null;e=null}else t!==e&&(e=null);return Es=e,null}function Kh(e){switch(e){case"cancel":case"click":case"close":case"contextmenu":case"copy":case"cut":case"auxclick":case"dblclick":case"dragend":case"dragstart":case"drop":case"focusin":case"focusout":case"input":case"invalid":case"keydown":case"keypress":case"keyup":case"mousedown":case"mouseup":case"paste":case"pause":case"play":case"pointercancel":case"pointerdown":case"pointerup":case"ratechange":case"reset":case"resize":case"seeked":case"submit":case"touchcancel":case"touchend":case"touchstart":case"volumechange":case"change":case"selectionchange":case"textInput":case"compositionstart":case"compositionend":case"compositionupdate":case"beforeblur":case"afterblur":case"beforeinput":case"blur":case"fullscreenchange":case"focus":case"hashchange":case"popstate":case"select":case"selectstart":return 1;case"drag":case"dragenter":case"dragexit":case"dragleave":case"dragover":case"mousemove":case"mouseout":case"mouseover":case"pointermove":case"pointerout":case"pointerover":case"scroll":case"toggle":case"touchmove":case"wheel":case"mouseenter":case"mouseleave":case"pointerenter":case"pointerleave":return 4;case"message":switch(i0()){case uc:return 1;case Vh:return 4;case ks:case o0:return 16;case Nh:return 536870912;default:return 16}default:return 16}}var Vn=null,pc=null,es=null;function Gh(){if(es)return es;var e,t=pc,n=t.length,r,i="value"in Vn?Vn.value:Vn.textContent,o=i.length;for(e=0;e<n&&t[e]===i[e];e++);var s=n-e;for(r=1;r<=s&&t[n-r]===i[o-r];r++);return es=i.slice(e,1<r?1-r:void 0)}function ts(e){var t=e.keyCode;return"charCode"in e?(e=e.charCode,e===0&&t===13&&(e=13)):e=t,e===10&&(e=13),32<=e||e===13?e:0}function _o(){return!0}function Vd(){return!1}function Ot(e){function t(n,r,i,o,s){this._reactName=n,this._targetInst=i,this.type=r,this.nativeEvent=o,this.target=s,this.currentTarget=null;for(var l in e)e.hasOwnProperty(l)&&(n=e[l],this[l]=n?n(o):o[l]);return this.isDefaultPrevented=(o.defaultPrevented!=null?o.defaultPrevented:o.returnValue===!1)?_o:Vd,this.isPropagationStopped=Vd,this}return Ie(t.prototype,{preventDefault:function(){this.defaultPrevented=!0;var n=this.nativeEvent;n&&(n.preventDefault?n.preventDefault():typeof n.returnValue!="unknown"&&(n.returnValue=!1),this.isDefaultPrevented=_o)},stopPropagation:function(){var n=this.nativeEvent;n&&(n.stopPropagation?n.stopPropagation():typeof n.cancelBubble!="unknown"&&(n.cancelBubble=!0),this.isPropagationStopped=_o)},persist:function(){},isPersistent:_o}),t}var ti={eventPhase:0,bubbles:0,cancelable:0,timeStamp:function(e){return e.timeStamp||Date.now()},defaultPrevented:0,isTrusted:0},hc=Ot(ti),co=Ie({},ti,{view:0,detail:0}),x0=Ot(co),Ga,Xa,ui,sa=Ie({},co,{screenX:0,screenY:0,clientX:0,clientY:0,pageX:0,pageY:0,ctrlKey:0,shiftKey:0,altKey:0,metaKey:0,getModifierState:mc,button:0,buttons:0,relatedTarget:function(e){return e.relatedTarget===void 0?e.fromElement===e.srcElement?e.toElement:e.fromElement:e.relatedTarget},movementX:function(e){return"movementX"in e?e.movementX:(e!==ui&&(ui&&e.type==="mousemove"?(Ga=e.screenX-ui.screenX,Xa=e.screenY-ui.screenY):Xa=Ga=0,ui=e),Ga)},movementY:function(e){return"movementY"in e?e.movementY:Xa}}),Nd=Ot(sa),y0=Ie({},sa,{dataTransfer:0}),w0=Ot(y0),b0=Ie({},co,{relatedTarget:0}),qa=Ot(b0),S0=Ie({},ti,{animationName:0,elapsedTime:0,pseudoElement:0}),k0=Ot(S0),j0=Ie({},ti,{clipboardData:function(e){return"clipboardData"in e?e.clipboardData:window.clipboardData}}),C0=Ot(j0),E0=Ie({},ti,{data:0}),$d=Ot(E0),O0={Esc:"Escape",Spacebar:" ",Left:"ArrowLeft",Up:"ArrowUp",Right:"ArrowRight",Down:"ArrowDown",Del:"Delete",Win:"OS",Menu:"ContextMenu",Apps:"ContextMenu",Scroll:"ScrollLock",MozPrintableKey:"Unidentified"},_0={8:"Backspace",9:"Tab",12:"Clear",13:"Enter",16:"Shift",17:"Control",18:"Alt",19:"Pause",20:"CapsLock",27:"Escape",32:" ",33:"PageUp",34:"PageDown",35:"End",36:"Home",37:"ArrowLeft",38:"ArrowUp",39:"ArrowRight",40:"ArrowDown",45:"Insert",46:"Delete",112:"F1",113:"F2",114:"F3",115:"F4",116:"F5",117:"F6",118:"F7",119:"F8",120:"F9",121:"F10",122:"F11",123:"F12",144:"NumLock",145:"ScrollLock",224:"Meta"},P0={Alt:"altKey",Control:"ctrlKey",Meta:"metaKey",Shift:"shiftKey"};function T0(e){var t=this.nativeEvent;return t.getModifierState?t.getModifierState(e):(e=P0[e])?!!t[e]:!1}function mc(){return T0}var M0=Ie({},co,{key:function(e){if(e.key){var t=O0[e.key]||e.key;if(t!=="Unidentified")return t}return e.type==="keypress"?(e=ts(e),e===13?"Enter":String.fromCharCode(e)):e.type==="keydown"||e.type==="keyup"?_0[e.keyCode]||"Unidentified":""},code:0,location:0,ctrlKey:0,shiftKey:0,altKey:0,metaKey:0,repeat:0,locale:0,getModifierState:mc,charCode:function(e){return e.type==="keypress"?ts(e):0},keyCode:function(e){return e.type==="keydown"||e.type==="keyup"?e.keyCode:0},which:function(e){return e.type==="keypress"?ts(e):e.type==="keydown"||e.type==="keyup"?e.keyCode:0}}),R0=Ot(M0),I0=Ie({},sa,{pointerId:0,width:0,height:0,pressure:0,tangentialPressure:0,tiltX:0,tiltY:0,twist:0,pointerType:0,isPrimary:0}),Ud=Ot(I0),D0=Ie({},co,{touches:0,targetTouches:0,changedTouches:0,altKey:0,metaKey:0,ctrlKey:0,shiftKey:0,getModifierState:mc}),L0=Ot(D0),A0=Ie({},ti,{propertyName:0,elapsedTime:0,pseudoElement:0}),F0=Ot(A0),z0=Ie({},sa,{deltaX:function(e){return"deltaX"in e?e.deltaX:"wheelDeltaX"in e?-e.wheelDeltaX:0},deltaY:function(e){return"deltaY"in e?e.deltaY:"wheelDeltaY"in e?-e.wheelDeltaY:"wheelDelta"in e?-e.wheelDelta:0},deltaZ:0,deltaMode:0}),V0=Ot(z0),N0=[9,13,27,32],gc=wn&&"CompositionEvent"in window,Ti=null;wn&&"documentMode"in document&&(Ti=document.documentMode);var $0=wn&&"TextEvent"in window&&!Ti,Xh=wn&&(!gc||Ti&&8<Ti&&11>=Ti),Wd=" ",Bd=!1;function qh(e,t){switch(e){case"keyup":return N0.indexOf(t.keyCode)!==-1;case"keydown":return t.keyCode!==229;case"keypress":case"mousedown":case"focusout":return!0;default:return!1}}function Jh(e){return e=e.detail,typeof e=="object"&&"data"in e?e.data:null}var Or=!1;function U0(e,t){switch(e){case"compositionend":return Jh(t);case"keypress":return t.which!==32?null:(Bd=!0,Wd);case"textInput":return e=t.data,e===Wd&&Bd?null:e;default:return null}}function W0(e,t){if(Or)return e==="compositionend"||!gc&&qh(e,t)?(e=Gh(),es=pc=Vn=null,Or=!1,e):null;switch(e){case"paste":return null;case"keypress":if(!(t.ctrlKey||t.altKey||t.metaKey)||t.ctrlKey&&t.altKey){if(t.char&&1<t.char.length)return t.char;if(t.which)return String.fromCharCode(t.which)}return null;case"compositionend":return Xh&&t.locale!=="ko"?null:t.data;default:return null}}var B0={color:!0,date:!0,datetime:!0,"datetime-local":!0,email:!0,month:!0,number:!0,password:!0,range:!0,search:!0,tel:!0,text:!0,time:!0,url:!0,week:!0};function Hd(e){var t=e&&e.nodeName&&e.nodeName.toLowerCase();return t==="input"?!!B0[e.type]:t==="textarea"}function Zh(e,t,n,r){Th(r),t=Os(t,"onChange"),0<t.length&&(n=new hc("onChange","change",null,n,r),e.push({event:n,listeners:t}))}var Mi=null,Hi=null;function H0(e){cm(e,0)}function aa(e){var t=Tr(e);if(kh(t))return e}function Q0(e,t){if(e==="change")return t}var em=!1;if(wn){var Ja;if(wn){var Za="oninput"in document;if(!Za){var Qd=document.createElement("div");Qd.setAttribute("oninput","return;"),Za=typeof Qd.oninput=="function"}Ja=Za}else Ja=!1;em=Ja&&(!document.documentMode||9<document.documentMode)}function Yd(){Mi&&(Mi.detachEvent("onpropertychange",tm),Hi=Mi=null)}function tm(e){if(e.propertyName==="value"&&aa(Hi)){var t=[];Zh(t,Hi,e,lc(e)),Dh(H0,t)}}function Y0(e,t,n){e==="focusin"?(Yd(),Mi=t,Hi=n,Mi.attachEvent("onpropertychange",tm)):e==="focusout"&&Yd()}function K0(e){if(e==="selectionchange"||e==="keyup"||e==="keydown")return aa(Hi)}function G0(e,t){if(e==="click")return aa(t)}function X0(e,t){if(e==="input"||e==="change")return aa(t)}function q0(e,t){return e===t&&(e!==0||1/e===1/t)||e!==e&&t!==t}var Kt=typeof Object.is=="function"?Object.is:q0;function Qi(e,t){if(Kt(e,t))return!0;if(typeof e!="object"||e===null||typeof t!="object"||t===null)return!1;var n=Object.keys(e),r=Object.keys(t);if(n.length!==r.length)return!1;for(r=0;r<n.length;r++){var i=n[r];if(!Bl.call(t,i)||!Kt(e[i],t[i]))return!1}return!0}function Kd(e){for(;e&&e.firstChild;)e=e.firstChild;return e}function Gd(e,t){var n=Kd(e);e=0;for(var r;n;){if(n.nodeType===3){if(r=e+n.textContent.length,e<=t&&r>=t)return{node:n,offset:t-e};e=r}e:{for(;n;){if(n.nextSibling){n=n.nextSibling;break e}n=n.parentNode}n=void 0}n=Kd(n)}}function nm(e,t){return e&&t?e===t?!0:e&&e.nodeType===3?!1:t&&t.nodeType===3?nm(e,t.parentNode):"contains"in e?e.contains(t):e.compareDocumentPosition?!!(e.compareDocumentPosition(t)&16):!1:!1}function rm(){for(var e=window,t=ws();t instanceof e.HTMLIFrameElement;){try{var n=typeof t.contentWindow.location.href=="string"}catch{n=!1}if(n)e=t.contentWindow;else break;t=ws(e.document)}return t}function vc(e){var t=e&&e.nodeName&&e.nodeName.toLowerCase();return t&&(t==="input"&&(e.type==="text"||e.type==="search"||e.type==="tel"||e.type==="url"||e.type==="password")||t==="textarea"||e.contentEditable==="true")}function J0(e){var t=rm(),n=e.focusedElem,r=e.selectionRange;if(t!==n&&n&&n.ownerDocument&&nm(n.ownerDocument.documentElement,n)){if(r!==null&&vc(n)){if(t=r.start,e=r.end,e===void 0&&(e=t),"selectionStart"in n)n.selectionStart=t,n.selectionEnd=Math.min(e,n.value.length);else if(e=(t=n.ownerDocument||document)&&t.defaultView||window,e.getSelection){e=e.getSelection();var i=n.textContent.length,o=Math.min(r.start,i);r=r.end===void 0?o:Math.min(r.end,i),!e.extend&&o>r&&(i=r,r=o,o=i),i=Gd(n,o);var s=Gd(n,r);i&&s&&(e.rangeCount!==1||e.anchorNode!==i.node||e.anchorOffset!==i.offset||e.focusNode!==s.node||e.focusOffset!==s.offset)&&(t=t.createRange(),t.setStart(i.node,i.offset),e.removeAllRanges(),o>r?(e.addRange(t),e.extend(s.node,s.offset)):(t.setEnd(s.node,s.offset),e.addRange(t)))}}for(t=[],e=n;e=e.parentNode;)e.nodeType===1&&t.push({element:e,left:e.scrollLeft,top:e.scrollTop});for(typeof n.focus=="function"&&n.focus(),n=0;n<t.length;n++)e=t[n],e.element.scrollLeft=e.left,e.element.scrollTop=e.top}}var Z0=wn&&"documentMode"in document&&11>=document.documentMode,_r=null,uu=null,Ri=null,cu=!1;function Xd(e,t,n){var r=n.window===n?n.document:n.nodeType===9?n:n.ownerDocument;cu||_r==null||_r!==ws(r)||(r=_r,"selectionStart"in r&&vc(r)?r={start:r.selectionStart,end:r.selectionEnd}:(r=(r.ownerDocument&&r.ownerDocument.defaultView||window).getSelection(),r={anchorNode:r.anchorNode,anchorOffset:r.anchorOffset,focusNode:r.focusNode,focusOffset:r.focusOffset}),Ri&&Qi(Ri,r)||(Ri=r,r=Os(uu,"onSelect"),0<r.length&&(t=new hc("onSelect","select",null,t,n),e.push({event:t,listeners:r}),t.target=_r)))}function Po(e,t){var n={};return n[e.toLowerCase()]=t.toLowerCase(),n["Webkit"+e]="webkit"+t,n["Moz"+e]="moz"+t,n}var Pr={animationend:Po("Animation","AnimationEnd"),animationiteration:Po("Animation","AnimationIteration"),animationstart:Po("Animation","AnimationStart"),transitionend:Po("Transition","TransitionEnd")},el={},im={};wn&&(im=document.createElement("div").style,"AnimationEvent"in window||(delete Pr.animationend.animation,delete Pr.animationiteration.animation,delete Pr.animationstart.animation),"TransitionEvent"in window||delete Pr.transitionend.transition);function la(e){if(el[e])return el[e];if(!Pr[e])return e;var t=Pr[e],n;for(n in t)if(t.hasOwnProperty(n)&&n in im)return el[e]=t[n];return e}var om=la("animationend"),sm=la("animationiteration"),am=la("animationstart"),lm=la("transitionend"),um=new Map,qd="abort auxClick cancel canPlay canPlayThrough click close contextMenu copy cut drag dragEnd dragEnter dragExit dragLeave dragOver dragStart drop durationChange emptied encrypted ended error gotPointerCapture input invalid keyDown keyPress keyUp load loadedData loadedMetadata loadStart lostPointerCapture mouseDown mouseMove mouseOut mouseOver mouseUp paste pause play playing pointerCancel pointerDown pointerMove pointerOut pointerOver pointerUp progress rateChange reset resize seeked seeking stalled submit suspend timeUpdate touchCancel touchEnd touchStart volumeChange scroll toggle touchMove waiting wheel".split(" ");function Jn(e,t){um.set(e,t),gr(t,[e])}for(var tl=0;tl<qd.length;tl++){var nl=qd[tl],ey=nl.toLowerCase(),ty=nl[0].toUpperCase()+nl.slice(1);Jn(ey,"on"+ty)}Jn(om,"onAnimationEnd");Jn(sm,"onAnimationIteration");Jn(am,"onAnimationStart");Jn("dblclick","onDoubleClick");Jn("focusin","onFocus");Jn("focusout","onBlur");Jn(lm,"onTransitionEnd");Hr("onMouseEnter",["mouseout","mouseover"]);Hr("onMouseLeave",["mouseout","mouseover"]);Hr("onPointerEnter",["pointerout","pointerover"]);Hr("onPointerLeave",["pointerout","pointerover"]);gr("onChange","change click focusin focusout input keydown keyup selectionchange".split(" "));gr("onSelect","focusout contextmenu dragend focusin keydown keyup mousedown mouseup selectionchange".split(" "));gr("onBeforeInput",["compositionend","keypress","textInput","paste"]);gr("onCompositionEnd","compositionend focusout keydown keypress keyup mousedown".split(" "));gr("onCompositionStart","compositionstart focusout keydown keypress keyup mousedown".split(" "));gr("onCompositionUpdate","compositionupdate focusout keydown keypress keyup mousedown".split(" "));var Ci="abort canplay canplaythrough durationchange emptied encrypted ended error loadeddata loadedmetadata loadstart pause play playing progress ratechange resize seeked seeking stalled suspend timeupdate volumechange waiting".split(" "),ny=new Set("cancel close invalid load scroll toggle".split(" ").concat(Ci));function Jd(e,t,n){var r=e.type||"unknown-event";e.currentTarget=n,e0(r,t,void 0,e),e.currentTarget=null}function cm(e,t){t=(t&4)!==0;for(var n=0;n<e.length;n++){var r=e[n],i=r.event;r=r.listeners;e:{var o=void 0;if(t)for(var s=r.length-1;0<=s;s--){var l=r[s],a=l.instance,c=l.currentTarget;if(l=l.listener,a!==o&&i.isPropagationStopped())break e;Jd(i,l,c),o=a}else for(s=0;s<r.length;s++){if(l=r[s],a=l.instance,c=l.currentTarget,l=l.listener,a!==o&&i.isPropagationStopped())break e;Jd(i,l,c),o=a}}}if(Ss)throw e=ou,Ss=!1,ou=null,e}function _e(e,t){var n=t[mu];n===void 0&&(n=t[mu]=new Set);var r=e+"__bubble";n.has(r)||(dm(t,e,2,!1),n.add(r))}function rl(e,t,n){var r=0;t&&(r|=4),dm(n,e,r,t)}var To="_reactListening"+Math.random().toString(36).slice(2);function Yi(e){if(!e[To]){e[To]=!0,xh.forEach(function(n){n!=="selectionchange"&&(ny.has(n)||rl(n,!1,e),rl(n,!0,e))});var t=e.nodeType===9?e:e.ownerDocument;t===null||t[To]||(t[To]=!0,rl("selectionchange",!1,t))}}function dm(e,t,n,r){switch(Kh(t)){case 1:var i=g0;break;case 4:i=v0;break;default:i=fc}n=i.bind(null,t,n,e),i=void 0,!iu||t!=="touchstart"&&t!=="touchmove"&&t!=="wheel"||(i=!0),r?i!==void 0?e.addEventListener(t,n,{capture:!0,passive:i}):e.addEventListener(t,n,!0):i!==void 0?e.addEventListener(t,n,{passive:i}):e.addEventListener(t,n,!1)}function il(e,t,n,r,i){var o=r;if(!(t&1)&&!(t&2)&&r!==null)e:for(;;){if(r===null)return;var s=r.tag;if(s===3||s===4){var l=r.stateNode.containerInfo;if(l===i||l.nodeType===8&&l.parentNode===i)break;if(s===4)for(s=r.return;s!==null;){var a=s.tag;if((a===3||a===4)&&(a=s.stateNode.containerInfo,a===i||a.nodeType===8&&a.parentNode===i))return;s=s.return}for(;l!==null;){if(s=ir(l),s===null)return;if(a=s.tag,a===5||a===6){r=o=s;continue e}l=l.parentNode}}r=r.return}Dh(function(){var c=o,d=lc(n),f=[];e:{var m=um.get(e);if(m!==void 0){var y=hc,g=e;switch(e){case"keypress":if(ts(n)===0)break e;case"keydown":case"keyup":y=R0;break;case"focusin":g="focus",y=qa;break;case"focusout":g="blur",y=qa;break;case"beforeblur":case"afterblur":y=qa;break;case"click":if(n.button===2)break e;case"auxclick":case"dblclick":case"mousedown":case"mousemove":case"mouseup":case"mouseout":case"mouseover":case"contextmenu":y=Nd;break;case"drag":case"dragend":case"dragenter":case"dragexit":case"dragleave":case"dragover":case"dragstart":case"drop":y=w0;break;case"touchcancel":case"touchend":case"touchmove":case"touchstart":y=L0;break;case om:case sm:case am:y=k0;break;case lm:y=F0;break;case"scroll":y=x0;break;case"wheel":y=V0;break;case"copy":case"cut":case"paste":y=C0;break;case"gotpointercapture":case"lostpointercapture":case"pointercancel":case"pointerdown":case"pointermove":case"pointerout":case"pointerover":case"pointerup":y=Ud}var v=(t&4)!==0,w=!v&&e==="scroll",p=v?m!==null?m+"Capture":null:m;v=[];for(var h=c,x;h!==null;){x=h;var b=x.stateNode;if(x.tag===5&&b!==null&&(x=b,p!==null&&(b=$i(h,p),b!=null&&v.push(Ki(h,b,x)))),w)break;h=h.return}0<v.length&&(m=new y(m,g,null,n,d),f.push({event:m,listeners:v}))}}if(!(t&7)){e:{if(m=e==="mouseover"||e==="pointerover",y=e==="mouseout"||e==="pointerout",m&&n!==nu&&(g=n.relatedTarget||n.fromElement)&&(ir(g)||g[bn]))break e;if((y||m)&&(m=d.window===d?d:(m=d.ownerDocument)?m.defaultView||m.parentWindow:window,y?(g=n.relatedTarget||n.toElement,y=c,g=g?ir(g):null,g!==null&&(w=vr(g),g!==w||g.tag!==5&&g.tag!==6)&&(g=null)):(y=null,g=c),y!==g)){if(v=Nd,b="onMouseLeave",p="onMouseEnter",h="mouse",(e==="pointerout"||e==="pointerover")&&(v=Ud,b="onPointerLeave",p="onPointerEnter",h="pointer"),w=y==null?m:Tr(y),x=g==null?m:Tr(g),m=new v(b,h+"leave",y,n,d),m.target=w,m.relatedTarget=x,b=null,ir(d)===c&&(v=new v(p,h+"enter",g,n,d),v.target=x,v.relatedTarget=w,b=v),w=b,y&&g)t:{for(v=y,p=g,h=0,x=v;x;x=yr(x))h++;for(x=0,b=p;b;b=yr(b))x++;for(;0<h-x;)v=yr(v),h--;for(;0<x-h;)p=yr(p),x--;for(;h--;){if(v===p||p!==null&&v===p.alternate)break t;v=yr(v),p=yr(p)}v=null}else v=null;y!==null&&Zd(f,m,y,v,!1),g!==null&&w!==null&&Zd(f,w,g,v,!0)}}e:{if(m=c?Tr(c):window,y=m.nodeName&&m.nodeName.toLowerCase(),y==="select"||y==="input"&&m.type==="file")var k=Q0;else if(Hd(m))if(em)k=X0;else{k=K0;var _=Y0}else(y=m.nodeName)&&y.toLowerCase()==="input"&&(m.type==="checkbox"||m.type==="radio")&&(k=G0);if(k&&(k=k(e,c))){Zh(f,k,n,d);break e}_&&_(e,m,c),e==="focusout"&&(_=m._wrapperState)&&_.controlled&&m.type==="number"&&ql(m,"number",m.value)}switch(_=c?Tr(c):window,e){case"focusin":(Hd(_)||_.contentEditable==="true")&&(_r=_,uu=c,Ri=null);break;case"focusout":Ri=uu=_r=null;break;case"mousedown":cu=!0;break;case"contextmenu":case"mouseup":case"dragend":cu=!1,Xd(f,n,d);break;case"selectionchange":if(Z0)break;case"keydown":case"keyup":Xd(f,n,d)}var E;if(gc)e:{switch(e){case"compositionstart":var P="onCompositionStart";break e;case"compositionend":P="onCompositionEnd";break e;case"compositionupdate":P="onCompositionUpdate";break e}P=void 0}else Or?qh(e,n)&&(P="onCompositionEnd"):e==="keydown"&&n.keyCode===229&&(P="onCompositionStart");P&&(Xh&&n.locale!=="ko"&&(Or||P!=="onCompositionStart"?P==="onCompositionEnd"&&Or&&(E=Gh()):(Vn=d,pc="value"in Vn?Vn.value:Vn.textContent,Or=!0)),_=Os(c,P),0<_.length&&(P=new $d(P,e,null,n,d),f.push({event:P,listeners:_}),E?P.data=E:(E=Jh(n),E!==null&&(P.data=E)))),(E=$0?U0(e,n):W0(e,n))&&(c=Os(c,"onBeforeInput"),0<c.length&&(d=new $d("onBeforeInput","beforeinput",null,n,d),f.push({event:d,listeners:c}),d.data=E))}cm(f,t)})}function Ki(e,t,n){return{instance:e,listener:t,currentTarget:n}}function Os(e,t){for(var n=t+"Capture",r=[];e!==null;){var i=e,o=i.stateNode;i.tag===5&&o!==null&&(i=o,o=$i(e,n),o!=null&&r.unshift(Ki(e,o,i)),o=$i(e,t),o!=null&&r.push(Ki(e,o,i))),e=e.return}return r}function yr(e){if(e===null)return null;do e=e.return;while(e&&e.tag!==5);return e||null}function Zd(e,t,n,r,i){for(var o=t._reactName,s=[];n!==null&&n!==r;){var l=n,a=l.alternate,c=l.stateNode;if(a!==null&&a===r)break;l.tag===5&&c!==null&&(l=c,i?(a=$i(n,o),a!=null&&s.unshift(Ki(n,a,l))):i||(a=$i(n,o),a!=null&&s.push(Ki(n,a,l)))),n=n.return}s.length!==0&&e.push({event:t,listeners:s})}var ry=/\r\n?/g,iy=/\u0000|\uFFFD/g;function ef(e){return(typeof e=="string"?e:""+e).replace(ry,`
`).replace(iy,"")}function Mo(e,t,n){if(t=ef(t),ef(e)!==t&&n)throw Error(L(425))}function _s(){}var du=null,fu=null;function pu(e,t){return e==="textarea"||e==="noscript"||typeof t.children=="string"||typeof t.children=="number"||typeof t.dangerouslySetInnerHTML=="object"&&t.dangerouslySetInnerHTML!==null&&t.dangerouslySetInnerHTML.__html!=null}var hu=typeof setTimeout=="function"?setTimeout:void 0,oy=typeof clearTimeout=="function"?clearTimeout:void 0,tf=typeof Promise=="function"?Promise:void 0,sy=typeof queueMicrotask=="function"?queueMicrotask:typeof tf<"u"?function(e){return tf.resolve(null).then(e).catch(ay)}:hu;function ay(e){setTimeout(function(){throw e})}function ol(e,t){var n=t,r=0;do{var i=n.nextSibling;if(e.removeChild(n),i&&i.nodeType===8)if(n=i.data,n==="/$"){if(r===0){e.removeChild(i),Bi(t);return}r--}else n!=="$"&&n!=="$?"&&n!=="$!"||r++;n=i}while(n);Bi(t)}function Hn(e){for(;e!=null;e=e.nextSibling){var t=e.nodeType;if(t===1||t===3)break;if(t===8){if(t=e.data,t==="$"||t==="$!"||t==="$?")break;if(t==="/$")return null}}return e}function nf(e){e=e.previousSibling;for(var t=0;e;){if(e.nodeType===8){var n=e.data;if(n==="$"||n==="$!"||n==="$?"){if(t===0)return e;t--}else n==="/$"&&t++}e=e.previousSibling}return null}var ni=Math.random().toString(36).slice(2),en="__reactFiber$"+ni,Gi="__reactProps$"+ni,bn="__reactContainer$"+ni,mu="__reactEvents$"+ni,ly="__reactListeners$"+ni,uy="__reactHandles$"+ni;function ir(e){var t=e[en];if(t)return t;for(var n=e.parentNode;n;){if(t=n[bn]||n[en]){if(n=t.alternate,t.child!==null||n!==null&&n.child!==null)for(e=nf(e);e!==null;){if(n=e[en])return n;e=nf(e)}return t}e=n,n=e.parentNode}return null}function fo(e){return e=e[en]||e[bn],!e||e.tag!==5&&e.tag!==6&&e.tag!==13&&e.tag!==3?null:e}function Tr(e){if(e.tag===5||e.tag===6)return e.stateNode;throw Error(L(33))}function ua(e){return e[Gi]||null}var gu=[],Mr=-1;function Zn(e){return{current:e}}function Pe(e){0>Mr||(e.current=gu[Mr],gu[Mr]=null,Mr--)}function Ee(e,t){Mr++,gu[Mr]=e.current,e.current=t}var qn={},ot=Zn(qn),mt=Zn(!1),cr=qn;function Qr(e,t){var n=e.type.contextTypes;if(!n)return qn;var r=e.stateNode;if(r&&r.__reactInternalMemoizedUnmaskedChildContext===t)return r.__reactInternalMemoizedMaskedChildContext;var i={},o;for(o in n)i[o]=t[o];return r&&(e=e.stateNode,e.__reactInternalMemoizedUnmaskedChildContext=t,e.__reactInternalMemoizedMaskedChildContext=i),i}function gt(e){return e=e.childContextTypes,e!=null}function Ps(){Pe(mt),Pe(ot)}function rf(e,t,n){if(ot.current!==qn)throw Error(L(168));Ee(ot,t),Ee(mt,n)}function fm(e,t,n){var r=e.stateNode;if(t=t.childContextTypes,typeof r.getChildContext!="function")return n;r=r.getChildContext();for(var i in r)if(!(i in t))throw Error(L(108,Yx(e)||"Unknown",i));return Ie({},n,r)}function Ts(e){return e=(e=e.stateNode)&&e.__reactInternalMemoizedMergedChildContext||qn,cr=ot.current,Ee(ot,e),Ee(mt,mt.current),!0}function of(e,t,n){var r=e.stateNode;if(!r)throw Error(L(169));n?(e=fm(e,t,cr),r.__reactInternalMemoizedMergedChildContext=e,Pe(mt),Pe(ot),Ee(ot,e)):Pe(mt),Ee(mt,n)}var fn=null,ca=!1,sl=!1;function pm(e){fn===null?fn=[e]:fn.push(e)}function cy(e){ca=!0,pm(e)}function er(){if(!sl&&fn!==null){sl=!0;var e=0,t=ye;try{var n=fn;for(ye=1;e<n.length;e++){var r=n[e];do r=r(!0);while(r!==null)}fn=null,ca=!1}catch(i){throw fn!==null&&(fn=fn.slice(e+1)),zh(uc,er),i}finally{ye=t,sl=!1}}return null}var Rr=[],Ir=0,Ms=null,Rs=0,Mt=[],Rt=0,dr=null,hn=1,mn="";function nr(e,t){Rr[Ir++]=Rs,Rr[Ir++]=Ms,Ms=e,Rs=t}function hm(e,t,n){Mt[Rt++]=hn,Mt[Rt++]=mn,Mt[Rt++]=dr,dr=e;var r=hn;e=mn;var i=32-Ht(r)-1;r&=~(1<<i),n+=1;var o=32-Ht(t)+i;if(30<o){var s=i-i%5;o=(r&(1<<s)-1).toString(32),r>>=s,i-=s,hn=1<<32-Ht(t)+i|n<<i|r,mn=o+e}else hn=1<<o|n<<i|r,mn=e}function xc(e){e.return!==null&&(nr(e,1),hm(e,1,0))}function yc(e){for(;e===Ms;)Ms=Rr[--Ir],Rr[Ir]=null,Rs=Rr[--Ir],Rr[Ir]=null;for(;e===dr;)dr=Mt[--Rt],Mt[Rt]=null,mn=Mt[--Rt],Mt[Rt]=null,hn=Mt[--Rt],Mt[Rt]=null}var St=null,bt=null,Te=!1,Wt=null;function mm(e,t){var n=It(5,null,null,0);n.elementType="DELETED",n.stateNode=t,n.return=e,t=e.deletions,t===null?(e.deletions=[n],e.flags|=16):t.push(n)}function sf(e,t){switch(e.tag){case 5:var n=e.type;return t=t.nodeType!==1||n.toLowerCase()!==t.nodeName.toLowerCase()?null:t,t!==null?(e.stateNode=t,St=e,bt=Hn(t.firstChild),!0):!1;case 6:return t=e.pendingProps===""||t.nodeType!==3?null:t,t!==null?(e.stateNode=t,St=e,bt=null,!0):!1;case 13:return t=t.nodeType!==8?null:t,t!==null?(n=dr!==null?{id:hn,overflow:mn}:null,e.memoizedState={dehydrated:t,treeContext:n,retryLane:1073741824},n=It(18,null,null,0),n.stateNode=t,n.return=e,e.child=n,St=e,bt=null,!0):!1;default:return!1}}function vu(e){return(e.mode&1)!==0&&(e.flags&128)===0}function xu(e){if(Te){var t=bt;if(t){var n=t;if(!sf(e,t)){if(vu(e))throw Error(L(418));t=Hn(n.nextSibling);var r=St;t&&sf(e,t)?mm(r,n):(e.flags=e.flags&-4097|2,Te=!1,St=e)}}else{if(vu(e))throw Error(L(418));e.flags=e.flags&-4097|2,Te=!1,St=e}}}function af(e){for(e=e.return;e!==null&&e.tag!==5&&e.tag!==3&&e.tag!==13;)e=e.return;St=e}function Ro(e){if(e!==St)return!1;if(!Te)return af(e),Te=!0,!1;var t;if((t=e.tag!==3)&&!(t=e.tag!==5)&&(t=e.type,t=t!=="head"&&t!=="body"&&!pu(e.type,e.memoizedProps)),t&&(t=bt)){if(vu(e))throw gm(),Error(L(418));for(;t;)mm(e,t),t=Hn(t.nextSibling)}if(af(e),e.tag===13){if(e=e.memoizedState,e=e!==null?e.dehydrated:null,!e)throw Error(L(317));e:{for(e=e.nextSibling,t=0;e;){if(e.nodeType===8){var n=e.data;if(n==="/$"){if(t===0){bt=Hn(e.nextSibling);break e}t--}else n!=="$"&&n!=="$!"&&n!=="$?"||t++}e=e.nextSibling}bt=null}}else bt=St?Hn(e.stateNode.nextSibling):null;return!0}function gm(){for(var e=bt;e;)e=Hn(e.nextSibling)}function Yr(){bt=St=null,Te=!1}function wc(e){Wt===null?Wt=[e]:Wt.push(e)}var dy=jn.ReactCurrentBatchConfig;function Vt(e,t){if(e&&e.defaultProps){t=Ie({},t),e=e.defaultProps;for(var n in e)t[n]===void 0&&(t[n]=e[n]);return t}return t}var Is=Zn(null),Ds=null,Dr=null,bc=null;function Sc(){bc=Dr=Ds=null}function kc(e){var t=Is.current;Pe(Is),e._currentValue=t}function yu(e,t,n){for(;e!==null;){var r=e.alternate;if((e.childLanes&t)!==t?(e.childLanes|=t,r!==null&&(r.childLanes|=t)):r!==null&&(r.childLanes&t)!==t&&(r.childLanes|=t),e===n)break;e=e.return}}function Ur(e,t){Ds=e,bc=Dr=null,e=e.dependencies,e!==null&&e.firstContext!==null&&(e.lanes&t&&(ht=!0),e.firstContext=null)}function At(e){var t=e._currentValue;if(bc!==e)if(e={context:e,memoizedValue:t,next:null},Dr===null){if(Ds===null)throw Error(L(308));Dr=e,Ds.dependencies={lanes:0,firstContext:e}}else Dr=Dr.next=e;return t}var or=null;function jc(e){or===null?or=[e]:or.push(e)}function vm(e,t,n,r){var i=t.interleaved;return i===null?(n.next=n,jc(t)):(n.next=i.next,i.next=n),t.interleaved=n,Sn(e,r)}function Sn(e,t){e.lanes|=t;var n=e.alternate;for(n!==null&&(n.lanes|=t),n=e,e=e.return;e!==null;)e.childLanes|=t,n=e.alternate,n!==null&&(n.childLanes|=t),n=e,e=e.return;return n.tag===3?n.stateNode:null}var An=!1;function Cc(e){e.updateQueue={baseState:e.memoizedState,firstBaseUpdate:null,lastBaseUpdate:null,shared:{pending:null,interleaved:null,lanes:0},effects:null}}function xm(e,t){e=e.updateQueue,t.updateQueue===e&&(t.updateQueue={baseState:e.baseState,firstBaseUpdate:e.firstBaseUpdate,lastBaseUpdate:e.lastBaseUpdate,shared:e.shared,effects:e.effects})}function vn(e,t){return{eventTime:e,lane:t,tag:0,payload:null,callback:null,next:null}}function Qn(e,t,n){var r=e.updateQueue;if(r===null)return null;if(r=r.shared,he&2){var i=r.pending;return i===null?t.next=t:(t.next=i.next,i.next=t),r.pending=t,Sn(e,n)}return i=r.interleaved,i===null?(t.next=t,jc(r)):(t.next=i.next,i.next=t),r.interleaved=t,Sn(e,n)}function ns(e,t,n){if(t=t.updateQueue,t!==null&&(t=t.shared,(n&4194240)!==0)){var r=t.lanes;r&=e.pendingLanes,n|=r,t.lanes=n,cc(e,n)}}function lf(e,t){var n=e.updateQueue,r=e.alternate;if(r!==null&&(r=r.updateQueue,n===r)){var i=null,o=null;if(n=n.firstBaseUpdate,n!==null){do{var s={eventTime:n.eventTime,lane:n.lane,tag:n.tag,payload:n.payload,callback:n.callback,next:null};o===null?i=o=s:o=o.next=s,n=n.next}while(n!==null);o===null?i=o=t:o=o.next=t}else i=o=t;n={baseState:r.baseState,firstBaseUpdate:i,lastBaseUpdate:o,shared:r.shared,effects:r.effects},e.updateQueue=n;return}e=n.lastBaseUpdate,e===null?n.firstBaseUpdate=t:e.next=t,n.lastBaseUpdate=t}function Ls(e,t,n,r){var i=e.updateQueue;An=!1;var o=i.firstBaseUpdate,s=i.lastBaseUpdate,l=i.shared.pending;if(l!==null){i.shared.pending=null;var a=l,c=a.next;a.next=null,s===null?o=c:s.next=c,s=a;var d=e.alternate;d!==null&&(d=d.updateQueue,l=d.lastBaseUpdate,l!==s&&(l===null?d.firstBaseUpdate=c:l.next=c,d.lastBaseUpdate=a))}if(o!==null){var f=i.baseState;s=0,d=c=a=null,l=o;do{var m=l.lane,y=l.eventTime;if((r&m)===m){d!==null&&(d=d.next={eventTime:y,lane:0,tag:l.tag,payload:l.payload,callback:l.callback,next:null});e:{var g=e,v=l;switch(m=t,y=n,v.tag){case 1:if(g=v.payload,typeof g=="function"){f=g.call(y,f,m);break e}f=g;break e;case 3:g.flags=g.flags&-65537|128;case 0:if(g=v.payload,m=typeof g=="function"?g.call(y,f,m):g,m==null)break e;f=Ie({},f,m);break e;case 2:An=!0}}l.callback!==null&&l.lane!==0&&(e.flags|=64,m=i.effects,m===null?i.effects=[l]:m.push(l))}else y={eventTime:y,lane:m,tag:l.tag,payload:l.payload,callback:l.callback,next:null},d===null?(c=d=y,a=f):d=d.next=y,s|=m;if(l=l.next,l===null){if(l=i.shared.pending,l===null)break;m=l,l=m.next,m.next=null,i.lastBaseUpdate=m,i.shared.pending=null}}while(!0);if(d===null&&(a=f),i.baseState=a,i.firstBaseUpdate=c,i.lastBaseUpdate=d,t=i.shared.interleaved,t!==null){i=t;do s|=i.lane,i=i.next;while(i!==t)}else o===null&&(i.shared.lanes=0);pr|=s,e.lanes=s,e.memoizedState=f}}function uf(e,t,n){if(e=t.effects,t.effects=null,e!==null)for(t=0;t<e.length;t++){var r=e[t],i=r.callback;if(i!==null){if(r.callback=null,r=n,typeof i!="function")throw Error(L(191,i));i.call(r)}}}var ym=new vh.Component().refs;function wu(e,t,n,r){t=e.memoizedState,n=n(r,t),n=n==null?t:Ie({},t,n),e.memoizedState=n,e.lanes===0&&(e.updateQueue.baseState=n)}var da={isMounted:function(e){return(e=e._reactInternals)?vr(e)===e:!1},enqueueSetState:function(e,t,n){e=e._reactInternals;var r=ut(),i=Kn(e),o=vn(r,i);o.payload=t,n!=null&&(o.callback=n),t=Qn(e,o,i),t!==null&&(Qt(t,e,i,r),ns(t,e,i))},enqueueReplaceState:function(e,t,n){e=e._reactInternals;var r=ut(),i=Kn(e),o=vn(r,i);o.tag=1,o.payload=t,n!=null&&(o.callback=n),t=Qn(e,o,i),t!==null&&(Qt(t,e,i,r),ns(t,e,i))},enqueueForceUpdate:function(e,t){e=e._reactInternals;var n=ut(),r=Kn(e),i=vn(n,r);i.tag=2,t!=null&&(i.callback=t),t=Qn(e,i,r),t!==null&&(Qt(t,e,r,n),ns(t,e,r))}};function cf(e,t,n,r,i,o,s){return e=e.stateNode,typeof e.shouldComponentUpdate=="function"?e.shouldComponentUpdate(r,o,s):t.prototype&&t.prototype.isPureReactComponent?!Qi(n,r)||!Qi(i,o):!0}function wm(e,t,n){var r=!1,i=qn,o=t.contextType;return typeof o=="object"&&o!==null?o=At(o):(i=gt(t)?cr:ot.current,r=t.contextTypes,o=(r=r!=null)?Qr(e,i):qn),t=new t(n,o),e.memoizedState=t.state!==null&&t.state!==void 0?t.state:null,t.updater=da,e.stateNode=t,t._reactInternals=e,r&&(e=e.stateNode,e.__reactInternalMemoizedUnmaskedChildContext=i,e.__reactInternalMemoizedMaskedChildContext=o),t}function df(e,t,n,r){e=t.state,typeof t.componentWillReceiveProps=="function"&&t.componentWillReceiveProps(n,r),typeof t.UNSAFE_componentWillReceiveProps=="function"&&t.UNSAFE_componentWillReceiveProps(n,r),t.state!==e&&da.enqueueReplaceState(t,t.state,null)}function bu(e,t,n,r){var i=e.stateNode;i.props=n,i.state=e.memoizedState,i.refs=ym,Cc(e);var o=t.contextType;typeof o=="object"&&o!==null?i.context=At(o):(o=gt(t)?cr:ot.current,i.context=Qr(e,o)),i.state=e.memoizedState,o=t.getDerivedStateFromProps,typeof o=="function"&&(wu(e,t,o,n),i.state=e.memoizedState),typeof t.getDerivedStateFromProps=="function"||typeof i.getSnapshotBeforeUpdate=="function"||typeof i.UNSAFE_componentWillMount!="function"&&typeof i.componentWillMount!="function"||(t=i.state,typeof i.componentWillMount=="function"&&i.componentWillMount(),typeof i.UNSAFE_componentWillMount=="function"&&i.UNSAFE_componentWillMount(),t!==i.state&&da.enqueueReplaceState(i,i.state,null),Ls(e,n,i,r),i.state=e.memoizedState),typeof i.componentDidMount=="function"&&(e.flags|=4194308)}function ci(e,t,n){if(e=n.ref,e!==null&&typeof e!="function"&&typeof e!="object"){if(n._owner){if(n=n._owner,n){if(n.tag!==1)throw Error(L(309));var r=n.stateNode}if(!r)throw Error(L(147,e));var i=r,o=""+e;return t!==null&&t.ref!==null&&typeof t.ref=="function"&&t.ref._stringRef===o?t.ref:(t=function(s){var l=i.refs;l===ym&&(l=i.refs={}),s===null?delete l[o]:l[o]=s},t._stringRef=o,t)}if(typeof e!="string")throw Error(L(284));if(!n._owner)throw Error(L(290,e))}return e}function Io(e,t){throw e=Object.prototype.toString.call(t),Error(L(31,e==="[object Object]"?"object with keys {"+Object.keys(t).join(", ")+"}":e))}function ff(e){var t=e._init;return t(e._payload)}function bm(e){function t(p,h){if(e){var x=p.deletions;x===null?(p.deletions=[h],p.flags|=16):x.push(h)}}function n(p,h){if(!e)return null;for(;h!==null;)t(p,h),h=h.sibling;return null}function r(p,h){for(p=new Map;h!==null;)h.key!==null?p.set(h.key,h):p.set(h.index,h),h=h.sibling;return p}function i(p,h){return p=Gn(p,h),p.index=0,p.sibling=null,p}function o(p,h,x){return p.index=x,e?(x=p.alternate,x!==null?(x=x.index,x<h?(p.flags|=2,h):x):(p.flags|=2,h)):(p.flags|=1048576,h)}function s(p){return e&&p.alternate===null&&(p.flags|=2),p}function l(p,h,x,b){return h===null||h.tag!==6?(h=pl(x,p.mode,b),h.return=p,h):(h=i(h,x),h.return=p,h)}function a(p,h,x,b){var k=x.type;return k===Er?d(p,h,x.props.children,b,x.key):h!==null&&(h.elementType===k||typeof k=="object"&&k!==null&&k.$$typeof===Ln&&ff(k)===h.type)?(b=i(h,x.props),b.ref=ci(p,h,x),b.return=p,b):(b=ls(x.type,x.key,x.props,null,p.mode,b),b.ref=ci(p,h,x),b.return=p,b)}function c(p,h,x,b){return h===null||h.tag!==4||h.stateNode.containerInfo!==x.containerInfo||h.stateNode.implementation!==x.implementation?(h=hl(x,p.mode,b),h.return=p,h):(h=i(h,x.children||[]),h.return=p,h)}function d(p,h,x,b,k){return h===null||h.tag!==7?(h=ur(x,p.mode,b,k),h.return=p,h):(h=i(h,x),h.return=p,h)}function f(p,h,x){if(typeof h=="string"&&h!==""||typeof h=="number")return h=pl(""+h,p.mode,x),h.return=p,h;if(typeof h=="object"&&h!==null){switch(h.$$typeof){case So:return x=ls(h.type,h.key,h.props,null,p.mode,x),x.ref=ci(p,null,h),x.return=p,x;case Cr:return h=hl(h,p.mode,x),h.return=p,h;case Ln:var b=h._init;return f(p,b(h._payload),x)}if(ki(h)||oi(h))return h=ur(h,p.mode,x,null),h.return=p,h;Io(p,h)}return null}function m(p,h,x,b){var k=h!==null?h.key:null;if(typeof x=="string"&&x!==""||typeof x=="number")return k!==null?null:l(p,h,""+x,b);if(typeof x=="object"&&x!==null){switch(x.$$typeof){case So:return x.key===k?a(p,h,x,b):null;case Cr:return x.key===k?c(p,h,x,b):null;case Ln:return k=x._init,m(p,h,k(x._payload),b)}if(ki(x)||oi(x))return k!==null?null:d(p,h,x,b,null);Io(p,x)}return null}function y(p,h,x,b,k){if(typeof b=="string"&&b!==""||typeof b=="number")return p=p.get(x)||null,l(h,p,""+b,k);if(typeof b=="object"&&b!==null){switch(b.$$typeof){case So:return p=p.get(b.key===null?x:b.key)||null,a(h,p,b,k);case Cr:return p=p.get(b.key===null?x:b.key)||null,c(h,p,b,k);case Ln:var _=b._init;return y(p,h,x,_(b._payload),k)}if(ki(b)||oi(b))return p=p.get(x)||null,d(h,p,b,k,null);Io(h,b)}return null}function g(p,h,x,b){for(var k=null,_=null,E=h,P=h=0,T=null;E!==null&&P<x.length;P++){E.index>P?(T=E,E=null):T=E.sibling;var I=m(p,E,x[P],b);if(I===null){E===null&&(E=T);break}e&&E&&I.alternate===null&&t(p,E),h=o(I,h,P),_===null?k=I:_.sibling=I,_=I,E=T}if(P===x.length)return n(p,E),Te&&nr(p,P),k;if(E===null){for(;P<x.length;P++)E=f(p,x[P],b),E!==null&&(h=o(E,h,P),_===null?k=E:_.sibling=E,_=E);return Te&&nr(p,P),k}for(E=r(p,E);P<x.length;P++)T=y(E,p,P,x[P],b),T!==null&&(e&&T.alternate!==null&&E.delete(T.key===null?P:T.key),h=o(T,h,P),_===null?k=T:_.sibling=T,_=T);return e&&E.forEach(function(W){return t(p,W)}),Te&&nr(p,P),k}function v(p,h,x,b){var k=oi(x);if(typeof k!="function")throw Error(L(150));if(x=k.call(x),x==null)throw Error(L(151));for(var _=k=null,E=h,P=h=0,T=null,I=x.next();E!==null&&!I.done;P++,I=x.next()){E.index>P?(T=E,E=null):T=E.sibling;var W=m(p,E,I.value,b);if(W===null){E===null&&(E=T);break}e&&E&&W.alternate===null&&t(p,E),h=o(W,h,P),_===null?k=W:_.sibling=W,_=W,E=T}if(I.done)return n(p,E),Te&&nr(p,P),k;if(E===null){for(;!I.done;P++,I=x.next())I=f(p,I.value,b),I!==null&&(h=o(I,h,P),_===null?k=I:_.sibling=I,_=I);return Te&&nr(p,P),k}for(E=r(p,E);!I.done;P++,I=x.next())I=y(E,p,P,I.value,b),I!==null&&(e&&I.alternate!==null&&E.delete(I.key===null?P:I.key),h=o(I,h,P),_===null?k=I:_.sibling=I,_=I);return e&&E.forEach(function(A){return t(p,A)}),Te&&nr(p,P),k}function w(p,h,x,b){if(typeof x=="object"&&x!==null&&x.type===Er&&x.key===null&&(x=x.props.children),typeof x=="object"&&x!==null){switch(x.$$typeof){case So:e:{for(var k=x.key,_=h;_!==null;){if(_.key===k){if(k=x.type,k===Er){if(_.tag===7){n(p,_.sibling),h=i(_,x.props.children),h.return=p,p=h;break e}}else if(_.elementType===k||typeof k=="object"&&k!==null&&k.$$typeof===Ln&&ff(k)===_.type){n(p,_.sibling),h=i(_,x.props),h.ref=ci(p,_,x),h.return=p,p=h;break e}n(p,_);break}else t(p,_);_=_.sibling}x.type===Er?(h=ur(x.props.children,p.mode,b,x.key),h.return=p,p=h):(b=ls(x.type,x.key,x.props,null,p.mode,b),b.ref=ci(p,h,x),b.return=p,p=b)}return s(p);case Cr:e:{for(_=x.key;h!==null;){if(h.key===_)if(h.tag===4&&h.stateNode.containerInfo===x.containerInfo&&h.stateNode.implementation===x.implementation){n(p,h.sibling),h=i(h,x.children||[]),h.return=p,p=h;break e}else{n(p,h);break}else t(p,h);h=h.sibling}h=hl(x,p.mode,b),h.return=p,p=h}return s(p);case Ln:return _=x._init,w(p,h,_(x._payload),b)}if(ki(x))return g(p,h,x,b);if(oi(x))return v(p,h,x,b);Io(p,x)}return typeof x=="string"&&x!==""||typeof x=="number"?(x=""+x,h!==null&&h.tag===6?(n(p,h.sibling),h=i(h,x),h.return=p,p=h):(n(p,h),h=pl(x,p.mode,b),h.return=p,p=h),s(p)):n(p,h)}return w}var Kr=bm(!0),Sm=bm(!1),po={},sn=Zn(po),Xi=Zn(po),qi=Zn(po);function sr(e){if(e===po)throw Error(L(174));return e}function Ec(e,t){switch(Ee(qi,t),Ee(Xi,e),Ee(sn,po),e=t.nodeType,e){case 9:case 11:t=(t=t.documentElement)?t.namespaceURI:Zl(null,"");break;default:e=e===8?t.parentNode:t,t=e.namespaceURI||null,e=e.tagName,t=Zl(t,e)}Pe(sn),Ee(sn,t)}function Gr(){Pe(sn),Pe(Xi),Pe(qi)}function km(e){sr(qi.current);var t=sr(sn.current),n=Zl(t,e.type);t!==n&&(Ee(Xi,e),Ee(sn,n))}function Oc(e){Xi.current===e&&(Pe(sn),Pe(Xi))}var Me=Zn(0);function As(e){for(var t=e;t!==null;){if(t.tag===13){var n=t.memoizedState;if(n!==null&&(n=n.dehydrated,n===null||n.data==="$?"||n.data==="$!"))return t}else if(t.tag===19&&t.memoizedProps.revealOrder!==void 0){if(t.flags&128)return t}else if(t.child!==null){t.child.return=t,t=t.child;continue}if(t===e)break;for(;t.sibling===null;){if(t.return===null||t.return===e)return null;t=t.return}t.sibling.return=t.return,t=t.sibling}return null}var al=[];function _c(){for(var e=0;e<al.length;e++)al[e]._workInProgressVersionPrimary=null;al.length=0}var rs=jn.ReactCurrentDispatcher,ll=jn.ReactCurrentBatchConfig,fr=0,Re=null,We=null,Qe=null,Fs=!1,Ii=!1,Ji=0,fy=0;function tt(){throw Error(L(321))}function Pc(e,t){if(t===null)return!1;for(var n=0;n<t.length&&n<e.length;n++)if(!Kt(e[n],t[n]))return!1;return!0}function Tc(e,t,n,r,i,o){if(fr=o,Re=t,t.memoizedState=null,t.updateQueue=null,t.lanes=0,rs.current=e===null||e.memoizedState===null?gy:vy,e=n(r,i),Ii){o=0;do{if(Ii=!1,Ji=0,25<=o)throw Error(L(301));o+=1,Qe=We=null,t.updateQueue=null,rs.current=xy,e=n(r,i)}while(Ii)}if(rs.current=zs,t=We!==null&&We.next!==null,fr=0,Qe=We=Re=null,Fs=!1,t)throw Error(L(300));return e}function Mc(){var e=Ji!==0;return Ji=0,e}function qt(){var e={memoizedState:null,baseState:null,baseQueue:null,queue:null,next:null};return Qe===null?Re.memoizedState=Qe=e:Qe=Qe.next=e,Qe}function Ft(){if(We===null){var e=Re.alternate;e=e!==null?e.memoizedState:null}else e=We.next;var t=Qe===null?Re.memoizedState:Qe.next;if(t!==null)Qe=t,We=e;else{if(e===null)throw Error(L(310));We=e,e={memoizedState:We.memoizedState,baseState:We.baseState,baseQueue:We.baseQueue,queue:We.queue,next:null},Qe===null?Re.memoizedState=Qe=e:Qe=Qe.next=e}return Qe}function Zi(e,t){return typeof t=="function"?t(e):t}function ul(e){var t=Ft(),n=t.queue;if(n===null)throw Error(L(311));n.lastRenderedReducer=e;var r=We,i=r.baseQueue,o=n.pending;if(o!==null){if(i!==null){var s=i.next;i.next=o.next,o.next=s}r.baseQueue=i=o,n.pending=null}if(i!==null){o=i.next,r=r.baseState;var l=s=null,a=null,c=o;do{var d=c.lane;if((fr&d)===d)a!==null&&(a=a.next={lane:0,action:c.action,hasEagerState:c.hasEagerState,eagerState:c.eagerState,next:null}),r=c.hasEagerState?c.eagerState:e(r,c.action);else{var f={lane:d,action:c.action,hasEagerState:c.hasEagerState,eagerState:c.eagerState,next:null};a===null?(l=a=f,s=r):a=a.next=f,Re.lanes|=d,pr|=d}c=c.next}while(c!==null&&c!==o);a===null?s=r:a.next=l,Kt(r,t.memoizedState)||(ht=!0),t.memoizedState=r,t.baseState=s,t.baseQueue=a,n.lastRenderedState=r}if(e=n.interleaved,e!==null){i=e;do o=i.lane,Re.lanes|=o,pr|=o,i=i.next;while(i!==e)}else i===null&&(n.lanes=0);return[t.memoizedState,n.dispatch]}function cl(e){var t=Ft(),n=t.queue;if(n===null)throw Error(L(311));n.lastRenderedReducer=e;var r=n.dispatch,i=n.pending,o=t.memoizedState;if(i!==null){n.pending=null;var s=i=i.next;do o=e(o,s.action),s=s.next;while(s!==i);Kt(o,t.memoizedState)||(ht=!0),t.memoizedState=o,t.baseQueue===null&&(t.baseState=o),n.lastRenderedState=o}return[o,r]}function jm(){}function Cm(e,t){var n=Re,r=Ft(),i=t(),o=!Kt(r.memoizedState,i);if(o&&(r.memoizedState=i,ht=!0),r=r.queue,Rc(_m.bind(null,n,r,e),[e]),r.getSnapshot!==t||o||Qe!==null&&Qe.memoizedState.tag&1){if(n.flags|=2048,eo(9,Om.bind(null,n,r,i,t),void 0,null),Ye===null)throw Error(L(349));fr&30||Em(n,t,i)}return i}function Em(e,t,n){e.flags|=16384,e={getSnapshot:t,value:n},t=Re.updateQueue,t===null?(t={lastEffect:null,stores:null},Re.updateQueue=t,t.stores=[e]):(n=t.stores,n===null?t.stores=[e]:n.push(e))}function Om(e,t,n,r){t.value=n,t.getSnapshot=r,Pm(t)&&Tm(e)}function _m(e,t,n){return n(function(){Pm(t)&&Tm(e)})}function Pm(e){var t=e.getSnapshot;e=e.value;try{var n=t();return!Kt(e,n)}catch{return!0}}function Tm(e){var t=Sn(e,1);t!==null&&Qt(t,e,1,-1)}function pf(e){var t=qt();return typeof e=="function"&&(e=e()),t.memoizedState=t.baseState=e,e={pending:null,interleaved:null,lanes:0,dispatch:null,lastRenderedReducer:Zi,lastRenderedState:e},t.queue=e,e=e.dispatch=my.bind(null,Re,e),[t.memoizedState,e]}function eo(e,t,n,r){return e={tag:e,create:t,destroy:n,deps:r,next:null},t=Re.updateQueue,t===null?(t={lastEffect:null,stores:null},Re.updateQueue=t,t.lastEffect=e.next=e):(n=t.lastEffect,n===null?t.lastEffect=e.next=e:(r=n.next,n.next=e,e.next=r,t.lastEffect=e)),e}function Mm(){return Ft().memoizedState}function is(e,t,n,r){var i=qt();Re.flags|=e,i.memoizedState=eo(1|t,n,void 0,r===void 0?null:r)}function fa(e,t,n,r){var i=Ft();r=r===void 0?null:r;var o=void 0;if(We!==null){var s=We.memoizedState;if(o=s.destroy,r!==null&&Pc(r,s.deps)){i.memoizedState=eo(t,n,o,r);return}}Re.flags|=e,i.memoizedState=eo(1|t,n,o,r)}function hf(e,t){return is(8390656,8,e,t)}function Rc(e,t){return fa(2048,8,e,t)}function Rm(e,t){return fa(4,2,e,t)}function Im(e,t){return fa(4,4,e,t)}function Dm(e,t){if(typeof t=="function")return e=e(),t(e),function(){t(null)};if(t!=null)return e=e(),t.current=e,function(){t.current=null}}function Lm(e,t,n){return n=n!=null?n.concat([e]):null,fa(4,4,Dm.bind(null,t,e),n)}function Ic(){}function Am(e,t){var n=Ft();t=t===void 0?null:t;var r=n.memoizedState;return r!==null&&t!==null&&Pc(t,r[1])?r[0]:(n.memoizedState=[e,t],e)}function Fm(e,t){var n=Ft();t=t===void 0?null:t;var r=n.memoizedState;return r!==null&&t!==null&&Pc(t,r[1])?r[0]:(e=e(),n.memoizedState=[e,t],e)}function zm(e,t,n){return fr&21?(Kt(n,t)||(n=$h(),Re.lanes|=n,pr|=n,e.baseState=!0),t):(e.baseState&&(e.baseState=!1,ht=!0),e.memoizedState=n)}function py(e,t){var n=ye;ye=n!==0&&4>n?n:4,e(!0);var r=ll.transition;ll.transition={};try{e(!1),t()}finally{ye=n,ll.transition=r}}function Vm(){return Ft().memoizedState}function hy(e,t,n){var r=Kn(e);if(n={lane:r,action:n,hasEagerState:!1,eagerState:null,next:null},Nm(e))$m(t,n);else if(n=vm(e,t,n,r),n!==null){var i=ut();Qt(n,e,r,i),Um(n,t,r)}}function my(e,t,n){var r=Kn(e),i={lane:r,action:n,hasEagerState:!1,eagerState:null,next:null};if(Nm(e))$m(t,i);else{var o=e.alternate;if(e.lanes===0&&(o===null||o.lanes===0)&&(o=t.lastRenderedReducer,o!==null))try{var s=t.lastRenderedState,l=o(s,n);if(i.hasEagerState=!0,i.eagerState=l,Kt(l,s)){var a=t.interleaved;a===null?(i.next=i,jc(t)):(i.next=a.next,a.next=i),t.interleaved=i;return}}catch{}finally{}n=vm(e,t,i,r),n!==null&&(i=ut(),Qt(n,e,r,i),Um(n,t,r))}}function Nm(e){var t=e.alternate;return e===Re||t!==null&&t===Re}function $m(e,t){Ii=Fs=!0;var n=e.pending;n===null?t.next=t:(t.next=n.next,n.next=t),e.pending=t}function Um(e,t,n){if(n&4194240){var r=t.lanes;r&=e.pendingLanes,n|=r,t.lanes=n,cc(e,n)}}var zs={readContext:At,useCallback:tt,useContext:tt,useEffect:tt,useImperativeHandle:tt,useInsertionEffect:tt,useLayoutEffect:tt,useMemo:tt,useReducer:tt,useRef:tt,useState:tt,useDebugValue:tt,useDeferredValue:tt,useTransition:tt,useMutableSource:tt,useSyncExternalStore:tt,useId:tt,unstable_isNewReconciler:!1},gy={readContext:At,useCallback:function(e,t){return qt().memoizedState=[e,t===void 0?null:t],e},useContext:At,useEffect:hf,useImperativeHandle:function(e,t,n){return n=n!=null?n.concat([e]):null,is(4194308,4,Dm.bind(null,t,e),n)},useLayoutEffect:function(e,t){return is(4194308,4,e,t)},useInsertionEffect:function(e,t){return is(4,2,e,t)},useMemo:function(e,t){var n=qt();return t=t===void 0?null:t,e=e(),n.memoizedState=[e,t],e},useReducer:function(e,t,n){var r=qt();return t=n!==void 0?n(t):t,r.memoizedState=r.baseState=t,e={pending:null,interleaved:null,lanes:0,dispatch:null,lastRenderedReducer:e,lastRenderedState:t},r.queue=e,e=e.dispatch=hy.bind(null,Re,e),[r.memoizedState,e]},useRef:function(e){var t=qt();return e={current:e},t.memoizedState=e},useState:pf,useDebugValue:Ic,useDeferredValue:function(e){return qt().memoizedState=e},useTransition:function(){var e=pf(!1),t=e[0];return e=py.bind(null,e[1]),qt().memoizedState=e,[t,e]},useMutableSource:function(){},useSyncExternalStore:function(e,t,n){var r=Re,i=qt();if(Te){if(n===void 0)throw Error(L(407));n=n()}else{if(n=t(),Ye===null)throw Error(L(349));fr&30||Em(r,t,n)}i.memoizedState=n;var o={value:n,getSnapshot:t};return i.queue=o,hf(_m.bind(null,r,o,e),[e]),r.flags|=2048,eo(9,Om.bind(null,r,o,n,t),void 0,null),n},useId:function(){var e=qt(),t=Ye.identifierPrefix;if(Te){var n=mn,r=hn;n=(r&~(1<<32-Ht(r)-1)).toString(32)+n,t=":"+t+"R"+n,n=Ji++,0<n&&(t+="H"+n.toString(32)),t+=":"}else n=fy++,t=":"+t+"r"+n.toString(32)+":";return e.memoizedState=t},unstable_isNewReconciler:!1},vy={readContext:At,useCallback:Am,useContext:At,useEffect:Rc,useImperativeHandle:Lm,useInsertionEffect:Rm,useLayoutEffect:Im,useMemo:Fm,useReducer:ul,useRef:Mm,useState:function(){return ul(Zi)},useDebugValue:Ic,useDeferredValue:function(e){var t=Ft();return zm(t,We.memoizedState,e)},useTransition:function(){var e=ul(Zi)[0],t=Ft().memoizedState;return[e,t]},useMutableSource:jm,useSyncExternalStore:Cm,useId:Vm,unstable_isNewReconciler:!1},xy={readContext:At,useCallback:Am,useContext:At,useEffect:Rc,useImperativeHandle:Lm,useInsertionEffect:Rm,useLayoutEffect:Im,useMemo:Fm,useReducer:cl,useRef:Mm,useState:function(){return cl(Zi)},useDebugValue:Ic,useDeferredValue:function(e){var t=Ft();return We===null?t.memoizedState=e:zm(t,We.memoizedState,e)},useTransition:function(){var e=cl(Zi)[0],t=Ft().memoizedState;return[e,t]},useMutableSource:jm,useSyncExternalStore:Cm,useId:Vm,unstable_isNewReconciler:!1};function Xr(e,t){try{var n="",r=t;do n+=Qx(r),r=r.return;while(r);var i=n}catch(o){i=`
Error generating stack: `+o.message+`
`+o.stack}return{value:e,source:t,stack:i,digest:null}}function dl(e,t,n){return{value:e,source:null,stack:n??null,digest:t??null}}function Su(e,t){try{console.error(t.value)}catch(n){setTimeout(function(){throw n})}}var yy=typeof WeakMap=="function"?WeakMap:Map;function Wm(e,t,n){n=vn(-1,n),n.tag=3,n.payload={element:null};var r=t.value;return n.callback=function(){Ns||(Ns=!0,Ru=r),Su(e,t)},n}function Bm(e,t,n){n=vn(-1,n),n.tag=3;var r=e.type.getDerivedStateFromError;if(typeof r=="function"){var i=t.value;n.payload=function(){return r(i)},n.callback=function(){Su(e,t)}}var o=e.stateNode;return o!==null&&typeof o.componentDidCatch=="function"&&(n.callback=function(){Su(e,t),typeof r!="function"&&(Yn===null?Yn=new Set([this]):Yn.add(this));var s=t.stack;this.componentDidCatch(t.value,{componentStack:s!==null?s:""})}),n}function mf(e,t,n){var r=e.pingCache;if(r===null){r=e.pingCache=new yy;var i=new Set;r.set(t,i)}else i=r.get(t),i===void 0&&(i=new Set,r.set(t,i));i.has(n)||(i.add(n),e=Iy.bind(null,e,t,n),t.then(e,e))}function gf(e){do{var t;if((t=e.tag===13)&&(t=e.memoizedState,t=t!==null?t.dehydrated!==null:!0),t)return e;e=e.return}while(e!==null);return null}function vf(e,t,n,r,i){return e.mode&1?(e.flags|=65536,e.lanes=i,e):(e===t?e.flags|=65536:(e.flags|=128,n.flags|=131072,n.flags&=-52805,n.tag===1&&(n.alternate===null?n.tag=17:(t=vn(-1,1),t.tag=2,Qn(n,t,1))),n.lanes|=1),e)}var wy=jn.ReactCurrentOwner,ht=!1;function at(e,t,n,r){t.child=e===null?Sm(t,null,n,r):Kr(t,e.child,n,r)}function xf(e,t,n,r,i){n=n.render;var o=t.ref;return Ur(t,i),r=Tc(e,t,n,r,o,i),n=Mc(),e!==null&&!ht?(t.updateQueue=e.updateQueue,t.flags&=-2053,e.lanes&=~i,kn(e,t,i)):(Te&&n&&xc(t),t.flags|=1,at(e,t,r,i),t.child)}function yf(e,t,n,r,i){if(e===null){var o=n.type;return typeof o=="function"&&!$c(o)&&o.defaultProps===void 0&&n.compare===null&&n.defaultProps===void 0?(t.tag=15,t.type=o,Hm(e,t,o,r,i)):(e=ls(n.type,null,r,t,t.mode,i),e.ref=t.ref,e.return=t,t.child=e)}if(o=e.child,!(e.lanes&i)){var s=o.memoizedProps;if(n=n.compare,n=n!==null?n:Qi,n(s,r)&&e.ref===t.ref)return kn(e,t,i)}return t.flags|=1,e=Gn(o,r),e.ref=t.ref,e.return=t,t.child=e}function Hm(e,t,n,r,i){if(e!==null){var o=e.memoizedProps;if(Qi(o,r)&&e.ref===t.ref)if(ht=!1,t.pendingProps=r=o,(e.lanes&i)!==0)e.flags&131072&&(ht=!0);else return t.lanes=e.lanes,kn(e,t,i)}return ku(e,t,n,r,i)}function Qm(e,t,n){var r=t.pendingProps,i=r.children,o=e!==null?e.memoizedState:null;if(r.mode==="hidden")if(!(t.mode&1))t.memoizedState={baseLanes:0,cachePool:null,transitions:null},Ee(Ar,wt),wt|=n;else{if(!(n&1073741824))return e=o!==null?o.baseLanes|n:n,t.lanes=t.childLanes=1073741824,t.memoizedState={baseLanes:e,cachePool:null,transitions:null},t.updateQueue=null,Ee(Ar,wt),wt|=e,null;t.memoizedState={baseLanes:0,cachePool:null,transitions:null},r=o!==null?o.baseLanes:n,Ee(Ar,wt),wt|=r}else o!==null?(r=o.baseLanes|n,t.memoizedState=null):r=n,Ee(Ar,wt),wt|=r;return at(e,t,i,n),t.child}function Ym(e,t){var n=t.ref;(e===null&&n!==null||e!==null&&e.ref!==n)&&(t.flags|=512,t.flags|=2097152)}function ku(e,t,n,r,i){var o=gt(n)?cr:ot.current;return o=Qr(t,o),Ur(t,i),n=Tc(e,t,n,r,o,i),r=Mc(),e!==null&&!ht?(t.updateQueue=e.updateQueue,t.flags&=-2053,e.lanes&=~i,kn(e,t,i)):(Te&&r&&xc(t),t.flags|=1,at(e,t,n,i),t.child)}function wf(e,t,n,r,i){if(gt(n)){var o=!0;Ts(t)}else o=!1;if(Ur(t,i),t.stateNode===null)os(e,t),wm(t,n,r),bu(t,n,r,i),r=!0;else if(e===null){var s=t.stateNode,l=t.memoizedProps;s.props=l;var a=s.context,c=n.contextType;typeof c=="object"&&c!==null?c=At(c):(c=gt(n)?cr:ot.current,c=Qr(t,c));var d=n.getDerivedStateFromProps,f=typeof d=="function"||typeof s.getSnapshotBeforeUpdate=="function";f||typeof s.UNSAFE_componentWillReceiveProps!="function"&&typeof s.componentWillReceiveProps!="function"||(l!==r||a!==c)&&df(t,s,r,c),An=!1;var m=t.memoizedState;s.state=m,Ls(t,r,s,i),a=t.memoizedState,l!==r||m!==a||mt.current||An?(typeof d=="function"&&(wu(t,n,d,r),a=t.memoizedState),(l=An||cf(t,n,l,r,m,a,c))?(f||typeof s.UNSAFE_componentWillMount!="function"&&typeof s.componentWillMount!="function"||(typeof s.componentWillMount=="function"&&s.componentWillMount(),typeof s.UNSAFE_componentWillMount=="function"&&s.UNSAFE_componentWillMount()),typeof s.componentDidMount=="function"&&(t.flags|=4194308)):(typeof s.componentDidMount=="function"&&(t.flags|=4194308),t.memoizedProps=r,t.memoizedState=a),s.props=r,s.state=a,s.context=c,r=l):(typeof s.componentDidMount=="function"&&(t.flags|=4194308),r=!1)}else{s=t.stateNode,xm(e,t),l=t.memoizedProps,c=t.type===t.elementType?l:Vt(t.type,l),s.props=c,f=t.pendingProps,m=s.context,a=n.contextType,typeof a=="object"&&a!==null?a=At(a):(a=gt(n)?cr:ot.current,a=Qr(t,a));var y=n.getDerivedStateFromProps;(d=typeof y=="function"||typeof s.getSnapshotBeforeUpdate=="function")||typeof s.UNSAFE_componentWillReceiveProps!="function"&&typeof s.componentWillReceiveProps!="function"||(l!==f||m!==a)&&df(t,s,r,a),An=!1,m=t.memoizedState,s.state=m,Ls(t,r,s,i);var g=t.memoizedState;l!==f||m!==g||mt.current||An?(typeof y=="function"&&(wu(t,n,y,r),g=t.memoizedState),(c=An||cf(t,n,c,r,m,g,a)||!1)?(d||typeof s.UNSAFE_componentWillUpdate!="function"&&typeof s.componentWillUpdate!="function"||(typeof s.componentWillUpdate=="function"&&s.componentWillUpdate(r,g,a),typeof s.UNSAFE_componentWillUpdate=="function"&&s.UNSAFE_componentWillUpdate(r,g,a)),typeof s.componentDidUpdate=="function"&&(t.flags|=4),typeof s.getSnapshotBeforeUpdate=="function"&&(t.flags|=1024)):(typeof s.componentDidUpdate!="function"||l===e.memoizedProps&&m===e.memoizedState||(t.flags|=4),typeof s.getSnapshotBeforeUpdate!="function"||l===e.memoizedProps&&m===e.memoizedState||(t.flags|=1024),t.memoizedProps=r,t.memoizedState=g),s.props=r,s.state=g,s.context=a,r=c):(typeof s.componentDidUpdate!="function"||l===e.memoizedProps&&m===e.memoizedState||(t.flags|=4),typeof s.getSnapshotBeforeUpdate!="function"||l===e.memoizedProps&&m===e.memoizedState||(t.flags|=1024),r=!1)}return ju(e,t,n,r,o,i)}function ju(e,t,n,r,i,o){Ym(e,t);var s=(t.flags&128)!==0;if(!r&&!s)return i&&of(t,n,!1),kn(e,t,o);r=t.stateNode,wy.current=t;var l=s&&typeof n.getDerivedStateFromError!="function"?null:r.render();return t.flags|=1,e!==null&&s?(t.child=Kr(t,e.child,null,o),t.child=Kr(t,null,l,o)):at(e,t,l,o),t.memoizedState=r.state,i&&of(t,n,!0),t.child}function Km(e){var t=e.stateNode;t.pendingContext?rf(e,t.pendingContext,t.pendingContext!==t.context):t.context&&rf(e,t.context,!1),Ec(e,t.containerInfo)}function bf(e,t,n,r,i){return Yr(),wc(i),t.flags|=256,at(e,t,n,r),t.child}var Cu={dehydrated:null,treeContext:null,retryLane:0};function Eu(e){return{baseLanes:e,cachePool:null,transitions:null}}function Gm(e,t,n){var r=t.pendingProps,i=Me.current,o=!1,s=(t.flags&128)!==0,l;if((l=s)||(l=e!==null&&e.memoizedState===null?!1:(i&2)!==0),l?(o=!0,t.flags&=-129):(e===null||e.memoizedState!==null)&&(i|=1),Ee(Me,i&1),e===null)return xu(t),e=t.memoizedState,e!==null&&(e=e.dehydrated,e!==null)?(t.mode&1?e.data==="$!"?t.lanes=8:t.lanes=1073741824:t.lanes=1,null):(s=r.children,e=r.fallback,o?(r=t.mode,o=t.child,s={mode:"hidden",children:s},!(r&1)&&o!==null?(o.childLanes=0,o.pendingProps=s):o=ma(s,r,0,null),e=ur(e,r,n,null),o.return=t,e.return=t,o.sibling=e,t.child=o,t.child.memoizedState=Eu(n),t.memoizedState=Cu,e):Dc(t,s));if(i=e.memoizedState,i!==null&&(l=i.dehydrated,l!==null))return by(e,t,s,r,l,i,n);if(o){o=r.fallback,s=t.mode,i=e.child,l=i.sibling;var a={mode:"hidden",children:r.children};return!(s&1)&&t.child!==i?(r=t.child,r.childLanes=0,r.pendingProps=a,t.deletions=null):(r=Gn(i,a),r.subtreeFlags=i.subtreeFlags&14680064),l!==null?o=Gn(l,o):(o=ur(o,s,n,null),o.flags|=2),o.return=t,r.return=t,r.sibling=o,t.child=r,r=o,o=t.child,s=e.child.memoizedState,s=s===null?Eu(n):{baseLanes:s.baseLanes|n,cachePool:null,transitions:s.transitions},o.memoizedState=s,o.childLanes=e.childLanes&~n,t.memoizedState=Cu,r}return o=e.child,e=o.sibling,r=Gn(o,{mode:"visible",children:r.children}),!(t.mode&1)&&(r.lanes=n),r.return=t,r.sibling=null,e!==null&&(n=t.deletions,n===null?(t.deletions=[e],t.flags|=16):n.push(e)),t.child=r,t.memoizedState=null,r}function Dc(e,t){return t=ma({mode:"visible",children:t},e.mode,0,null),t.return=e,e.child=t}function Do(e,t,n,r){return r!==null&&wc(r),Kr(t,e.child,null,n),e=Dc(t,t.pendingProps.children),e.flags|=2,t.memoizedState=null,e}function by(e,t,n,r,i,o,s){if(n)return t.flags&256?(t.flags&=-257,r=dl(Error(L(422))),Do(e,t,s,r)):t.memoizedState!==null?(t.child=e.child,t.flags|=128,null):(o=r.fallback,i=t.mode,r=ma({mode:"visible",children:r.children},i,0,null),o=ur(o,i,s,null),o.flags|=2,r.return=t,o.return=t,r.sibling=o,t.child=r,t.mode&1&&Kr(t,e.child,null,s),t.child.memoizedState=Eu(s),t.memoizedState=Cu,o);if(!(t.mode&1))return Do(e,t,s,null);if(i.data==="$!"){if(r=i.nextSibling&&i.nextSibling.dataset,r)var l=r.dgst;return r=l,o=Error(L(419)),r=dl(o,r,void 0),Do(e,t,s,r)}if(l=(s&e.childLanes)!==0,ht||l){if(r=Ye,r!==null){switch(s&-s){case 4:i=2;break;case 16:i=8;break;case 64:case 128:case 256:case 512:case 1024:case 2048:case 4096:case 8192:case 16384:case 32768:case 65536:case 131072:case 262144:case 524288:case 1048576:case 2097152:case 4194304:case 8388608:case 16777216:case 33554432:case 67108864:i=32;break;case 536870912:i=268435456;break;default:i=0}i=i&(r.suspendedLanes|s)?0:i,i!==0&&i!==o.retryLane&&(o.retryLane=i,Sn(e,i),Qt(r,e,i,-1))}return Nc(),r=dl(Error(L(421))),Do(e,t,s,r)}return i.data==="$?"?(t.flags|=128,t.child=e.child,t=Dy.bind(null,e),i._reactRetry=t,null):(e=o.treeContext,bt=Hn(i.nextSibling),St=t,Te=!0,Wt=null,e!==null&&(Mt[Rt++]=hn,Mt[Rt++]=mn,Mt[Rt++]=dr,hn=e.id,mn=e.overflow,dr=t),t=Dc(t,r.children),t.flags|=4096,t)}function Sf(e,t,n){e.lanes|=t;var r=e.alternate;r!==null&&(r.lanes|=t),yu(e.return,t,n)}function fl(e,t,n,r,i){var o=e.memoizedState;o===null?e.memoizedState={isBackwards:t,rendering:null,renderingStartTime:0,last:r,tail:n,tailMode:i}:(o.isBackwards=t,o.rendering=null,o.renderingStartTime=0,o.last=r,o.tail=n,o.tailMode=i)}function Xm(e,t,n){var r=t.pendingProps,i=r.revealOrder,o=r.tail;if(at(e,t,r.children,n),r=Me.current,r&2)r=r&1|2,t.flags|=128;else{if(e!==null&&e.flags&128)e:for(e=t.child;e!==null;){if(e.tag===13)e.memoizedState!==null&&Sf(e,n,t);else if(e.tag===19)Sf(e,n,t);else if(e.child!==null){e.child.return=e,e=e.child;continue}if(e===t)break e;for(;e.sibling===null;){if(e.return===null||e.return===t)break e;e=e.return}e.sibling.return=e.return,e=e.sibling}r&=1}if(Ee(Me,r),!(t.mode&1))t.memoizedState=null;else switch(i){case"forwards":for(n=t.child,i=null;n!==null;)e=n.alternate,e!==null&&As(e)===null&&(i=n),n=n.sibling;n=i,n===null?(i=t.child,t.child=null):(i=n.sibling,n.sibling=null),fl(t,!1,i,n,o);break;case"backwards":for(n=null,i=t.child,t.child=null;i!==null;){if(e=i.alternate,e!==null&&As(e)===null){t.child=i;break}e=i.sibling,i.sibling=n,n=i,i=e}fl(t,!0,n,null,o);break;case"together":fl(t,!1,null,null,void 0);break;default:t.memoizedState=null}return t.child}function os(e,t){!(t.mode&1)&&e!==null&&(e.alternate=null,t.alternate=null,t.flags|=2)}function kn(e,t,n){if(e!==null&&(t.dependencies=e.dependencies),pr|=t.lanes,!(n&t.childLanes))return null;if(e!==null&&t.child!==e.child)throw Error(L(153));if(t.child!==null){for(e=t.child,n=Gn(e,e.pendingProps),t.child=n,n.return=t;e.sibling!==null;)e=e.sibling,n=n.sibling=Gn(e,e.pendingProps),n.return=t;n.sibling=null}return t.child}function Sy(e,t,n){switch(t.tag){case 3:Km(t),Yr();break;case 5:km(t);break;case 1:gt(t.type)&&Ts(t);break;case 4:Ec(t,t.stateNode.containerInfo);break;case 10:var r=t.type._context,i=t.memoizedProps.value;Ee(Is,r._currentValue),r._currentValue=i;break;case 13:if(r=t.memoizedState,r!==null)return r.dehydrated!==null?(Ee(Me,Me.current&1),t.flags|=128,null):n&t.child.childLanes?Gm(e,t,n):(Ee(Me,Me.current&1),e=kn(e,t,n),e!==null?e.sibling:null);Ee(Me,Me.current&1);break;case 19:if(r=(n&t.childLanes)!==0,e.flags&128){if(r)return Xm(e,t,n);t.flags|=128}if(i=t.memoizedState,i!==null&&(i.rendering=null,i.tail=null,i.lastEffect=null),Ee(Me,Me.current),r)break;return null;case 22:case 23:return t.lanes=0,Qm(e,t,n)}return kn(e,t,n)}var qm,Ou,Jm,Zm;qm=function(e,t){for(var n=t.child;n!==null;){if(n.tag===5||n.tag===6)e.appendChild(n.stateNode);else if(n.tag!==4&&n.child!==null){n.child.return=n,n=n.child;continue}if(n===t)break;for(;n.sibling===null;){if(n.return===null||n.return===t)return;n=n.return}n.sibling.return=n.return,n=n.sibling}};Ou=function(){};Jm=function(e,t,n,r){var i=e.memoizedProps;if(i!==r){e=t.stateNode,sr(sn.current);var o=null;switch(n){case"input":i=Gl(e,i),r=Gl(e,r),o=[];break;case"select":i=Ie({},i,{value:void 0}),r=Ie({},r,{value:void 0}),o=[];break;case"textarea":i=Jl(e,i),r=Jl(e,r),o=[];break;default:typeof i.onClick!="function"&&typeof r.onClick=="function"&&(e.onclick=_s)}eu(n,r);var s;n=null;for(c in i)if(!r.hasOwnProperty(c)&&i.hasOwnProperty(c)&&i[c]!=null)if(c==="style"){var l=i[c];for(s in l)l.hasOwnProperty(s)&&(n||(n={}),n[s]="")}else c!=="dangerouslySetInnerHTML"&&c!=="children"&&c!=="suppressContentEditableWarning"&&c!=="suppressHydrationWarning"&&c!=="autoFocus"&&(Vi.hasOwnProperty(c)?o||(o=[]):(o=o||[]).push(c,null));for(c in r){var a=r[c];if(l=i!=null?i[c]:void 0,r.hasOwnProperty(c)&&a!==l&&(a!=null||l!=null))if(c==="style")if(l){for(s in l)!l.hasOwnProperty(s)||a&&a.hasOwnProperty(s)||(n||(n={}),n[s]="");for(s in a)a.hasOwnProperty(s)&&l[s]!==a[s]&&(n||(n={}),n[s]=a[s])}else n||(o||(o=[]),o.push(c,n)),n=a;else c==="dangerouslySetInnerHTML"?(a=a?a.__html:void 0,l=l?l.__html:void 0,a!=null&&l!==a&&(o=o||[]).push(c,a)):c==="children"?typeof a!="string"&&typeof a!="number"||(o=o||[]).push(c,""+a):c!=="suppressContentEditableWarning"&&c!=="suppressHydrationWarning"&&(Vi.hasOwnProperty(c)?(a!=null&&c==="onScroll"&&_e("scroll",e),o||l===a||(o=[])):(o=o||[]).push(c,a))}n&&(o=o||[]).push("style",n);var c=o;(t.updateQueue=c)&&(t.flags|=4)}};Zm=function(e,t,n,r){n!==r&&(t.flags|=4)};function di(e,t){if(!Te)switch(e.tailMode){case"hidden":t=e.tail;for(var n=null;t!==null;)t.alternate!==null&&(n=t),t=t.sibling;n===null?e.tail=null:n.sibling=null;break;case"collapsed":n=e.tail;for(var r=null;n!==null;)n.alternate!==null&&(r=n),n=n.sibling;r===null?t||e.tail===null?e.tail=null:e.tail.sibling=null:r.sibling=null}}function nt(e){var t=e.alternate!==null&&e.alternate.child===e.child,n=0,r=0;if(t)for(var i=e.child;i!==null;)n|=i.lanes|i.childLanes,r|=i.subtreeFlags&14680064,r|=i.flags&14680064,i.return=e,i=i.sibling;else for(i=e.child;i!==null;)n|=i.lanes|i.childLanes,r|=i.subtreeFlags,r|=i.flags,i.return=e,i=i.sibling;return e.subtreeFlags|=r,e.childLanes=n,t}function ky(e,t,n){var r=t.pendingProps;switch(yc(t),t.tag){case 2:case 16:case 15:case 0:case 11:case 7:case 8:case 12:case 9:case 14:return nt(t),null;case 1:return gt(t.type)&&Ps(),nt(t),null;case 3:return r=t.stateNode,Gr(),Pe(mt),Pe(ot),_c(),r.pendingContext&&(r.context=r.pendingContext,r.pendingContext=null),(e===null||e.child===null)&&(Ro(t)?t.flags|=4:e===null||e.memoizedState.isDehydrated&&!(t.flags&256)||(t.flags|=1024,Wt!==null&&(Lu(Wt),Wt=null))),Ou(e,t),nt(t),null;case 5:Oc(t);var i=sr(qi.current);if(n=t.type,e!==null&&t.stateNode!=null)Jm(e,t,n,r,i),e.ref!==t.ref&&(t.flags|=512,t.flags|=2097152);else{if(!r){if(t.stateNode===null)throw Error(L(166));return nt(t),null}if(e=sr(sn.current),Ro(t)){r=t.stateNode,n=t.type;var o=t.memoizedProps;switch(r[en]=t,r[Gi]=o,e=(t.mode&1)!==0,n){case"dialog":_e("cancel",r),_e("close",r);break;case"iframe":case"object":case"embed":_e("load",r);break;case"video":case"audio":for(i=0;i<Ci.length;i++)_e(Ci[i],r);break;case"source":_e("error",r);break;case"img":case"image":case"link":_e("error",r),_e("load",r);break;case"details":_e("toggle",r);break;case"input":Td(r,o),_e("invalid",r);break;case"select":r._wrapperState={wasMultiple:!!o.multiple},_e("invalid",r);break;case"textarea":Rd(r,o),_e("invalid",r)}eu(n,o),i=null;for(var s in o)if(o.hasOwnProperty(s)){var l=o[s];s==="children"?typeof l=="string"?r.textContent!==l&&(o.suppressHydrationWarning!==!0&&Mo(r.textContent,l,e),i=["children",l]):typeof l=="number"&&r.textContent!==""+l&&(o.suppressHydrationWarning!==!0&&Mo(r.textContent,l,e),i=["children",""+l]):Vi.hasOwnProperty(s)&&l!=null&&s==="onScroll"&&_e("scroll",r)}switch(n){case"input":ko(r),Md(r,o,!0);break;case"textarea":ko(r),Id(r);break;case"select":case"option":break;default:typeof o.onClick=="function"&&(r.onclick=_s)}r=i,t.updateQueue=r,r!==null&&(t.flags|=4)}else{s=i.nodeType===9?i:i.ownerDocument,e==="http://www.w3.org/1999/xhtml"&&(e=Eh(n)),e==="http://www.w3.org/1999/xhtml"?n==="script"?(e=s.createElement("div"),e.innerHTML="<script><\/script>",e=e.removeChild(e.firstChild)):typeof r.is=="string"?e=s.createElement(n,{is:r.is}):(e=s.createElement(n),n==="select"&&(s=e,r.multiple?s.multiple=!0:r.size&&(s.size=r.size))):e=s.createElementNS(e,n),e[en]=t,e[Gi]=r,qm(e,t,!1,!1),t.stateNode=e;e:{switch(s=tu(n,r),n){case"dialog":_e("cancel",e),_e("close",e),i=r;break;case"iframe":case"object":case"embed":_e("load",e),i=r;break;case"video":case"audio":for(i=0;i<Ci.length;i++)_e(Ci[i],e);i=r;break;case"source":_e("error",e),i=r;break;case"img":case"image":case"link":_e("error",e),_e("load",e),i=r;break;case"details":_e("toggle",e),i=r;break;case"input":Td(e,r),i=Gl(e,r),_e("invalid",e);break;case"option":i=r;break;case"select":e._wrapperState={wasMultiple:!!r.multiple},i=Ie({},r,{value:void 0}),_e("invalid",e);break;case"textarea":Rd(e,r),i=Jl(e,r),_e("invalid",e);break;default:i=r}eu(n,i),l=i;for(o in l)if(l.hasOwnProperty(o)){var a=l[o];o==="style"?Ph(e,a):o==="dangerouslySetInnerHTML"?(a=a?a.__html:void 0,a!=null&&Oh(e,a)):o==="children"?typeof a=="string"?(n!=="textarea"||a!=="")&&Ni(e,a):typeof a=="number"&&Ni(e,""+a):o!=="suppressContentEditableWarning"&&o!=="suppressHydrationWarning"&&o!=="autoFocus"&&(Vi.hasOwnProperty(o)?a!=null&&o==="onScroll"&&_e("scroll",e):a!=null&&ic(e,o,a,s))}switch(n){case"input":ko(e),Md(e,r,!1);break;case"textarea":ko(e),Id(e);break;case"option":r.value!=null&&e.setAttribute("value",""+Xn(r.value));break;case"select":e.multiple=!!r.multiple,o=r.value,o!=null?zr(e,!!r.multiple,o,!1):r.defaultValue!=null&&zr(e,!!r.multiple,r.defaultValue,!0);break;default:typeof i.onClick=="function"&&(e.onclick=_s)}switch(n){case"button":case"input":case"select":case"textarea":r=!!r.autoFocus;break e;case"img":r=!0;break e;default:r=!1}}r&&(t.flags|=4)}t.ref!==null&&(t.flags|=512,t.flags|=2097152)}return nt(t),null;case 6:if(e&&t.stateNode!=null)Zm(e,t,e.memoizedProps,r);else{if(typeof r!="string"&&t.stateNode===null)throw Error(L(166));if(n=sr(qi.current),sr(sn.current),Ro(t)){if(r=t.stateNode,n=t.memoizedProps,r[en]=t,(o=r.nodeValue!==n)&&(e=St,e!==null))switch(e.tag){case 3:Mo(r.nodeValue,n,(e.mode&1)!==0);break;case 5:e.memoizedProps.suppressHydrationWarning!==!0&&Mo(r.nodeValue,n,(e.mode&1)!==0)}o&&(t.flags|=4)}else r=(n.nodeType===9?n:n.ownerDocument).createTextNode(r),r[en]=t,t.stateNode=r}return nt(t),null;case 13:if(Pe(Me),r=t.memoizedState,e===null||e.memoizedState!==null&&e.memoizedState.dehydrated!==null){if(Te&&bt!==null&&t.mode&1&&!(t.flags&128))gm(),Yr(),t.flags|=98560,o=!1;else if(o=Ro(t),r!==null&&r.dehydrated!==null){if(e===null){if(!o)throw Error(L(318));if(o=t.memoizedState,o=o!==null?o.dehydrated:null,!o)throw Error(L(317));o[en]=t}else Yr(),!(t.flags&128)&&(t.memoizedState=null),t.flags|=4;nt(t),o=!1}else Wt!==null&&(Lu(Wt),Wt=null),o=!0;if(!o)return t.flags&65536?t:null}return t.flags&128?(t.lanes=n,t):(r=r!==null,r!==(e!==null&&e.memoizedState!==null)&&r&&(t.child.flags|=8192,t.mode&1&&(e===null||Me.current&1?Be===0&&(Be=3):Nc())),t.updateQueue!==null&&(t.flags|=4),nt(t),null);case 4:return Gr(),Ou(e,t),e===null&&Yi(t.stateNode.containerInfo),nt(t),null;case 10:return kc(t.type._context),nt(t),null;case 17:return gt(t.type)&&Ps(),nt(t),null;case 19:if(Pe(Me),o=t.memoizedState,o===null)return nt(t),null;if(r=(t.flags&128)!==0,s=o.rendering,s===null)if(r)di(o,!1);else{if(Be!==0||e!==null&&e.flags&128)for(e=t.child;e!==null;){if(s=As(e),s!==null){for(t.flags|=128,di(o,!1),r=s.updateQueue,r!==null&&(t.updateQueue=r,t.flags|=4),t.subtreeFlags=0,r=n,n=t.child;n!==null;)o=n,e=r,o.flags&=14680066,s=o.alternate,s===null?(o.childLanes=0,o.lanes=e,o.child=null,o.subtreeFlags=0,o.memoizedProps=null,o.memoizedState=null,o.updateQueue=null,o.dependencies=null,o.stateNode=null):(o.childLanes=s.childLanes,o.lanes=s.lanes,o.child=s.child,o.subtreeFlags=0,o.deletions=null,o.memoizedProps=s.memoizedProps,o.memoizedState=s.memoizedState,o.updateQueue=s.updateQueue,o.type=s.type,e=s.dependencies,o.dependencies=e===null?null:{lanes:e.lanes,firstContext:e.firstContext}),n=n.sibling;return Ee(Me,Me.current&1|2),t.child}e=e.sibling}o.tail!==null&&Fe()>qr&&(t.flags|=128,r=!0,di(o,!1),t.lanes=4194304)}else{if(!r)if(e=As(s),e!==null){if(t.flags|=128,r=!0,n=e.updateQueue,n!==null&&(t.updateQueue=n,t.flags|=4),di(o,!0),o.tail===null&&o.tailMode==="hidden"&&!s.alternate&&!Te)return nt(t),null}else 2*Fe()-o.renderingStartTime>qr&&n!==1073741824&&(t.flags|=128,r=!0,di(o,!1),t.lanes=4194304);o.isBackwards?(s.sibling=t.child,t.child=s):(n=o.last,n!==null?n.sibling=s:t.child=s,o.last=s)}return o.tail!==null?(t=o.tail,o.rendering=t,o.tail=t.sibling,o.renderingStartTime=Fe(),t.sibling=null,n=Me.current,Ee(Me,r?n&1|2:n&1),t):(nt(t),null);case 22:case 23:return Vc(),r=t.memoizedState!==null,e!==null&&e.memoizedState!==null!==r&&(t.flags|=8192),r&&t.mode&1?wt&1073741824&&(nt(t),t.subtreeFlags&6&&(t.flags|=8192)):nt(t),null;case 24:return null;case 25:return null}throw Error(L(156,t.tag))}function jy(e,t){switch(yc(t),t.tag){case 1:return gt(t.type)&&Ps(),e=t.flags,e&65536?(t.flags=e&-65537|128,t):null;case 3:return Gr(),Pe(mt),Pe(ot),_c(),e=t.flags,e&65536&&!(e&128)?(t.flags=e&-65537|128,t):null;case 5:return Oc(t),null;case 13:if(Pe(Me),e=t.memoizedState,e!==null&&e.dehydrated!==null){if(t.alternate===null)throw Error(L(340));Yr()}return e=t.flags,e&65536?(t.flags=e&-65537|128,t):null;case 19:return Pe(Me),null;case 4:return Gr(),null;case 10:return kc(t.type._context),null;case 22:case 23:return Vc(),null;case 24:return null;default:return null}}var Lo=!1,it=!1,Cy=typeof WeakSet=="function"?WeakSet:Set,H=null;function Lr(e,t){var n=e.ref;if(n!==null)if(typeof n=="function")try{n(null)}catch(r){De(e,t,r)}else n.current=null}function _u(e,t,n){try{n()}catch(r){De(e,t,r)}}var kf=!1;function Ey(e,t){if(du=Cs,e=rm(),vc(e)){if("selectionStart"in e)var n={start:e.selectionStart,end:e.selectionEnd};else e:{n=(n=e.ownerDocument)&&n.defaultView||window;var r=n.getSelection&&n.getSelection();if(r&&r.rangeCount!==0){n=r.anchorNode;var i=r.anchorOffset,o=r.focusNode;r=r.focusOffset;try{n.nodeType,o.nodeType}catch{n=null;break e}var s=0,l=-1,a=-1,c=0,d=0,f=e,m=null;t:for(;;){for(var y;f!==n||i!==0&&f.nodeType!==3||(l=s+i),f!==o||r!==0&&f.nodeType!==3||(a=s+r),f.nodeType===3&&(s+=f.nodeValue.length),(y=f.firstChild)!==null;)m=f,f=y;for(;;){if(f===e)break t;if(m===n&&++c===i&&(l=s),m===o&&++d===r&&(a=s),(y=f.nextSibling)!==null)break;f=m,m=f.parentNode}f=y}n=l===-1||a===-1?null:{start:l,end:a}}else n=null}n=n||{start:0,end:0}}else n=null;for(fu={focusedElem:e,selectionRange:n},Cs=!1,H=t;H!==null;)if(t=H,e=t.child,(t.subtreeFlags&1028)!==0&&e!==null)e.return=t,H=e;else for(;H!==null;){t=H;try{var g=t.alternate;if(t.flags&1024)switch(t.tag){case 0:case 11:case 15:break;case 1:if(g!==null){var v=g.memoizedProps,w=g.memoizedState,p=t.stateNode,h=p.getSnapshotBeforeUpdate(t.elementType===t.type?v:Vt(t.type,v),w);p.__reactInternalSnapshotBeforeUpdate=h}break;case 3:var x=t.stateNode.containerInfo;x.nodeType===1?x.textContent="":x.nodeType===9&&x.documentElement&&x.removeChild(x.documentElement);break;case 5:case 6:case 4:case 17:break;default:throw Error(L(163))}}catch(b){De(t,t.return,b)}if(e=t.sibling,e!==null){e.return=t.return,H=e;break}H=t.return}return g=kf,kf=!1,g}function Di(e,t,n){var r=t.updateQueue;if(r=r!==null?r.lastEffect:null,r!==null){var i=r=r.next;do{if((i.tag&e)===e){var o=i.destroy;i.destroy=void 0,o!==void 0&&_u(t,n,o)}i=i.next}while(i!==r)}}function pa(e,t){if(t=t.updateQueue,t=t!==null?t.lastEffect:null,t!==null){var n=t=t.next;do{if((n.tag&e)===e){var r=n.create;n.destroy=r()}n=n.next}while(n!==t)}}function Pu(e){var t=e.ref;if(t!==null){var n=e.stateNode;switch(e.tag){case 5:e=n;break;default:e=n}typeof t=="function"?t(e):t.current=e}}function eg(e){var t=e.alternate;t!==null&&(e.alternate=null,eg(t)),e.child=null,e.deletions=null,e.sibling=null,e.tag===5&&(t=e.stateNode,t!==null&&(delete t[en],delete t[Gi],delete t[mu],delete t[ly],delete t[uy])),e.stateNode=null,e.return=null,e.dependencies=null,e.memoizedProps=null,e.memoizedState=null,e.pendingProps=null,e.stateNode=null,e.updateQueue=null}function tg(e){return e.tag===5||e.tag===3||e.tag===4}function jf(e){e:for(;;){for(;e.sibling===null;){if(e.return===null||tg(e.return))return null;e=e.return}for(e.sibling.return=e.return,e=e.sibling;e.tag!==5&&e.tag!==6&&e.tag!==18;){if(e.flags&2||e.child===null||e.tag===4)continue e;e.child.return=e,e=e.child}if(!(e.flags&2))return e.stateNode}}function Tu(e,t,n){var r=e.tag;if(r===5||r===6)e=e.stateNode,t?n.nodeType===8?n.parentNode.insertBefore(e,t):n.insertBefore(e,t):(n.nodeType===8?(t=n.parentNode,t.insertBefore(e,n)):(t=n,t.appendChild(e)),n=n._reactRootContainer,n!=null||t.onclick!==null||(t.onclick=_s));else if(r!==4&&(e=e.child,e!==null))for(Tu(e,t,n),e=e.sibling;e!==null;)Tu(e,t,n),e=e.sibling}function Mu(e,t,n){var r=e.tag;if(r===5||r===6)e=e.stateNode,t?n.insertBefore(e,t):n.appendChild(e);else if(r!==4&&(e=e.child,e!==null))for(Mu(e,t,n),e=e.sibling;e!==null;)Mu(e,t,n),e=e.sibling}var Xe=null,$t=!1;function En(e,t,n){for(n=n.child;n!==null;)ng(e,t,n),n=n.sibling}function ng(e,t,n){if(on&&typeof on.onCommitFiberUnmount=="function")try{on.onCommitFiberUnmount(oa,n)}catch{}switch(n.tag){case 5:it||Lr(n,t);case 6:var r=Xe,i=$t;Xe=null,En(e,t,n),Xe=r,$t=i,Xe!==null&&($t?(e=Xe,n=n.stateNode,e.nodeType===8?e.parentNode.removeChild(n):e.removeChild(n)):Xe.removeChild(n.stateNode));break;case 18:Xe!==null&&($t?(e=Xe,n=n.stateNode,e.nodeType===8?ol(e.parentNode,n):e.nodeType===1&&ol(e,n),Bi(e)):ol(Xe,n.stateNode));break;case 4:r=Xe,i=$t,Xe=n.stateNode.containerInfo,$t=!0,En(e,t,n),Xe=r,$t=i;break;case 0:case 11:case 14:case 15:if(!it&&(r=n.updateQueue,r!==null&&(r=r.lastEffect,r!==null))){i=r=r.next;do{var o=i,s=o.destroy;o=o.tag,s!==void 0&&(o&2||o&4)&&_u(n,t,s),i=i.next}while(i!==r)}En(e,t,n);break;case 1:if(!it&&(Lr(n,t),r=n.stateNode,typeof r.componentWillUnmount=="function"))try{r.props=n.memoizedProps,r.state=n.memoizedState,r.componentWillUnmount()}catch(l){De(n,t,l)}En(e,t,n);break;case 21:En(e,t,n);break;case 22:n.mode&1?(it=(r=it)||n.memoizedState!==null,En(e,t,n),it=r):En(e,t,n);break;default:En(e,t,n)}}function Cf(e){var t=e.updateQueue;if(t!==null){e.updateQueue=null;var n=e.stateNode;n===null&&(n=e.stateNode=new Cy),t.forEach(function(r){var i=Ly.bind(null,e,r);n.has(r)||(n.add(r),r.then(i,i))})}}function zt(e,t){var n=t.deletions;if(n!==null)for(var r=0;r<n.length;r++){var i=n[r];try{var o=e,s=t,l=s;e:for(;l!==null;){switch(l.tag){case 5:Xe=l.stateNode,$t=!1;break e;case 3:Xe=l.stateNode.containerInfo,$t=!0;break e;case 4:Xe=l.stateNode.containerInfo,$t=!0;break e}l=l.return}if(Xe===null)throw Error(L(160));ng(o,s,i),Xe=null,$t=!1;var a=i.alternate;a!==null&&(a.return=null),i.return=null}catch(c){De(i,t,c)}}if(t.subtreeFlags&12854)for(t=t.child;t!==null;)rg(t,e),t=t.sibling}function rg(e,t){var n=e.alternate,r=e.flags;switch(e.tag){case 0:case 11:case 14:case 15:if(zt(t,e),Gt(e),r&4){try{Di(3,e,e.return),pa(3,e)}catch(v){De(e,e.return,v)}try{Di(5,e,e.return)}catch(v){De(e,e.return,v)}}break;case 1:zt(t,e),Gt(e),r&512&&n!==null&&Lr(n,n.return);break;case 5:if(zt(t,e),Gt(e),r&512&&n!==null&&Lr(n,n.return),e.flags&32){var i=e.stateNode;try{Ni(i,"")}catch(v){De(e,e.return,v)}}if(r&4&&(i=e.stateNode,i!=null)){var o=e.memoizedProps,s=n!==null?n.memoizedProps:o,l=e.type,a=e.updateQueue;if(e.updateQueue=null,a!==null)try{l==="input"&&o.type==="radio"&&o.name!=null&&jh(i,o),tu(l,s);var c=tu(l,o);for(s=0;s<a.length;s+=2){var d=a[s],f=a[s+1];d==="style"?Ph(i,f):d==="dangerouslySetInnerHTML"?Oh(i,f):d==="children"?Ni(i,f):ic(i,d,f,c)}switch(l){case"input":Xl(i,o);break;case"textarea":Ch(i,o);break;case"select":var m=i._wrapperState.wasMultiple;i._wrapperState.wasMultiple=!!o.multiple;var y=o.value;y!=null?zr(i,!!o.multiple,y,!1):m!==!!o.multiple&&(o.defaultValue!=null?zr(i,!!o.multiple,o.defaultValue,!0):zr(i,!!o.multiple,o.multiple?[]:"",!1))}i[Gi]=o}catch(v){De(e,e.return,v)}}break;case 6:if(zt(t,e),Gt(e),r&4){if(e.stateNode===null)throw Error(L(162));i=e.stateNode,o=e.memoizedProps;try{i.nodeValue=o}catch(v){De(e,e.return,v)}}break;case 3:if(zt(t,e),Gt(e),r&4&&n!==null&&n.memoizedState.isDehydrated)try{Bi(t.containerInfo)}catch(v){De(e,e.return,v)}break;case 4:zt(t,e),Gt(e);break;case 13:zt(t,e),Gt(e),i=e.child,i.flags&8192&&(o=i.memoizedState!==null,i.stateNode.isHidden=o,!o||i.alternate!==null&&i.alternate.memoizedState!==null||(Fc=Fe())),r&4&&Cf(e);break;case 22:if(d=n!==null&&n.memoizedState!==null,e.mode&1?(it=(c=it)||d,zt(t,e),it=c):zt(t,e),Gt(e),r&8192){if(c=e.memoizedState!==null,(e.stateNode.isHidden=c)&&!d&&e.mode&1)for(H=e,d=e.child;d!==null;){for(f=H=d;H!==null;){switch(m=H,y=m.child,m.tag){case 0:case 11:case 14:case 15:Di(4,m,m.return);break;case 1:Lr(m,m.return);var g=m.stateNode;if(typeof g.componentWillUnmount=="function"){r=m,n=m.return;try{t=r,g.props=t.memoizedProps,g.state=t.memoizedState,g.componentWillUnmount()}catch(v){De(r,n,v)}}break;case 5:Lr(m,m.return);break;case 22:if(m.memoizedState!==null){Of(f);continue}}y!==null?(y.return=m,H=y):Of(f)}d=d.sibling}e:for(d=null,f=e;;){if(f.tag===5){if(d===null){d=f;try{i=f.stateNode,c?(o=i.style,typeof o.setProperty=="function"?o.setProperty("display","none","important"):o.display="none"):(l=f.stateNode,a=f.memoizedProps.style,s=a!=null&&a.hasOwnProperty("display")?a.display:null,l.style.display=_h("display",s))}catch(v){De(e,e.return,v)}}}else if(f.tag===6){if(d===null)try{f.stateNode.nodeValue=c?"":f.memoizedProps}catch(v){De(e,e.return,v)}}else if((f.tag!==22&&f.tag!==23||f.memoizedState===null||f===e)&&f.child!==null){f.child.return=f,f=f.child;continue}if(f===e)break e;for(;f.sibling===null;){if(f.return===null||f.return===e)break e;d===f&&(d=null),f=f.return}d===f&&(d=null),f.sibling.return=f.return,f=f.sibling}}break;case 19:zt(t,e),Gt(e),r&4&&Cf(e);break;case 21:break;default:zt(t,e),Gt(e)}}function Gt(e){var t=e.flags;if(t&2){try{e:{for(var n=e.return;n!==null;){if(tg(n)){var r=n;break e}n=n.return}throw Error(L(160))}switch(r.tag){case 5:var i=r.stateNode;r.flags&32&&(Ni(i,""),r.flags&=-33);var o=jf(e);Mu(e,o,i);break;case 3:case 4:var s=r.stateNode.containerInfo,l=jf(e);Tu(e,l,s);break;default:throw Error(L(161))}}catch(a){De(e,e.return,a)}e.flags&=-3}t&4096&&(e.flags&=-4097)}function Oy(e,t,n){H=e,ig(e)}function ig(e,t,n){for(var r=(e.mode&1)!==0;H!==null;){var i=H,o=i.child;if(i.tag===22&&r){var s=i.memoizedState!==null||Lo;if(!s){var l=i.alternate,a=l!==null&&l.memoizedState!==null||it;l=Lo;var c=it;if(Lo=s,(it=a)&&!c)for(H=i;H!==null;)s=H,a=s.child,s.tag===22&&s.memoizedState!==null?_f(i):a!==null?(a.return=s,H=a):_f(i);for(;o!==null;)H=o,ig(o),o=o.sibling;H=i,Lo=l,it=c}Ef(e)}else i.subtreeFlags&8772&&o!==null?(o.return=i,H=o):Ef(e)}}function Ef(e){for(;H!==null;){var t=H;if(t.flags&8772){var n=t.alternate;try{if(t.flags&8772)switch(t.tag){case 0:case 11:case 15:it||pa(5,t);break;case 1:var r=t.stateNode;if(t.flags&4&&!it)if(n===null)r.componentDidMount();else{var i=t.elementType===t.type?n.memoizedProps:Vt(t.type,n.memoizedProps);r.componentDidUpdate(i,n.memoizedState,r.__reactInternalSnapshotBeforeUpdate)}var o=t.updateQueue;o!==null&&uf(t,o,r);break;case 3:var s=t.updateQueue;if(s!==null){if(n=null,t.child!==null)switch(t.child.tag){case 5:n=t.child.stateNode;break;case 1:n=t.child.stateNode}uf(t,s,n)}break;case 5:var l=t.stateNode;if(n===null&&t.flags&4){n=l;var a=t.memoizedProps;switch(t.type){case"button":case"input":case"select":case"textarea":a.autoFocus&&n.focus();break;case"img":a.src&&(n.src=a.src)}}break;case 6:break;case 4:break;case 12:break;case 13:if(t.memoizedState===null){var c=t.alternate;if(c!==null){var d=c.memoizedState;if(d!==null){var f=d.dehydrated;f!==null&&Bi(f)}}}break;case 19:case 17:case 21:case 22:case 23:case 25:break;default:throw Error(L(163))}it||t.flags&512&&Pu(t)}catch(m){De(t,t.return,m)}}if(t===e){H=null;break}if(n=t.sibling,n!==null){n.return=t.return,H=n;break}H=t.return}}function Of(e){for(;H!==null;){var t=H;if(t===e){H=null;break}var n=t.sibling;if(n!==null){n.return=t.return,H=n;break}H=t.return}}function _f(e){for(;H!==null;){var t=H;try{switch(t.tag){case 0:case 11:case 15:var n=t.return;try{pa(4,t)}catch(a){De(t,n,a)}break;case 1:var r=t.stateNode;if(typeof r.componentDidMount=="function"){var i=t.return;try{r.componentDidMount()}catch(a){De(t,i,a)}}var o=t.return;try{Pu(t)}catch(a){De(t,o,a)}break;case 5:var s=t.return;try{Pu(t)}catch(a){De(t,s,a)}}}catch(a){De(t,t.return,a)}if(t===e){H=null;break}var l=t.sibling;if(l!==null){l.return=t.return,H=l;break}H=t.return}}var _y=Math.ceil,Vs=jn.ReactCurrentDispatcher,Lc=jn.ReactCurrentOwner,Dt=jn.ReactCurrentBatchConfig,he=0,Ye=null,Ne=null,Je=0,wt=0,Ar=Zn(0),Be=0,to=null,pr=0,ha=0,Ac=0,Li=null,pt=null,Fc=0,qr=1/0,dn=null,Ns=!1,Ru=null,Yn=null,Ao=!1,Nn=null,$s=0,Ai=0,Iu=null,ss=-1,as=0;function ut(){return he&6?Fe():ss!==-1?ss:ss=Fe()}function Kn(e){return e.mode&1?he&2&&Je!==0?Je&-Je:dy.transition!==null?(as===0&&(as=$h()),as):(e=ye,e!==0||(e=window.event,e=e===void 0?16:Kh(e.type)),e):1}function Qt(e,t,n,r){if(50<Ai)throw Ai=0,Iu=null,Error(L(185));uo(e,n,r),(!(he&2)||e!==Ye)&&(e===Ye&&(!(he&2)&&(ha|=n),Be===4&&zn(e,Je)),vt(e,r),n===1&&he===0&&!(t.mode&1)&&(qr=Fe()+500,ca&&er()))}function vt(e,t){var n=e.callbackNode;d0(e,t);var r=js(e,e===Ye?Je:0);if(r===0)n!==null&&Ad(n),e.callbackNode=null,e.callbackPriority=0;else if(t=r&-r,e.callbackPriority!==t){if(n!=null&&Ad(n),t===1)e.tag===0?cy(Pf.bind(null,e)):pm(Pf.bind(null,e)),sy(function(){!(he&6)&&er()}),n=null;else{switch(Uh(r)){case 1:n=uc;break;case 4:n=Vh;break;case 16:n=ks;break;case 536870912:n=Nh;break;default:n=ks}n=fg(n,og.bind(null,e))}e.callbackPriority=t,e.callbackNode=n}}function og(e,t){if(ss=-1,as=0,he&6)throw Error(L(327));var n=e.callbackNode;if(Wr()&&e.callbackNode!==n)return null;var r=js(e,e===Ye?Je:0);if(r===0)return null;if(r&30||r&e.expiredLanes||t)t=Us(e,r);else{t=r;var i=he;he|=2;var o=ag();(Ye!==e||Je!==t)&&(dn=null,qr=Fe()+500,lr(e,t));do try{My();break}catch(l){sg(e,l)}while(!0);Sc(),Vs.current=o,he=i,Ne!==null?t=0:(Ye=null,Je=0,t=Be)}if(t!==0){if(t===2&&(i=su(e),i!==0&&(r=i,t=Du(e,i))),t===1)throw n=to,lr(e,0),zn(e,r),vt(e,Fe()),n;if(t===6)zn(e,r);else{if(i=e.current.alternate,!(r&30)&&!Py(i)&&(t=Us(e,r),t===2&&(o=su(e),o!==0&&(r=o,t=Du(e,o))),t===1))throw n=to,lr(e,0),zn(e,r),vt(e,Fe()),n;switch(e.finishedWork=i,e.finishedLanes=r,t){case 0:case 1:throw Error(L(345));case 2:rr(e,pt,dn);break;case 3:if(zn(e,r),(r&130023424)===r&&(t=Fc+500-Fe(),10<t)){if(js(e,0)!==0)break;if(i=e.suspendedLanes,(i&r)!==r){ut(),e.pingedLanes|=e.suspendedLanes&i;break}e.timeoutHandle=hu(rr.bind(null,e,pt,dn),t);break}rr(e,pt,dn);break;case 4:if(zn(e,r),(r&4194240)===r)break;for(t=e.eventTimes,i=-1;0<r;){var s=31-Ht(r);o=1<<s,s=t[s],s>i&&(i=s),r&=~o}if(r=i,r=Fe()-r,r=(120>r?120:480>r?480:1080>r?1080:1920>r?1920:3e3>r?3e3:4320>r?4320:1960*_y(r/1960))-r,10<r){e.timeoutHandle=hu(rr.bind(null,e,pt,dn),r);break}rr(e,pt,dn);break;case 5:rr(e,pt,dn);break;default:throw Error(L(329))}}}return vt(e,Fe()),e.callbackNode===n?og.bind(null,e):null}function Du(e,t){var n=Li;return e.current.memoizedState.isDehydrated&&(lr(e,t).flags|=256),e=Us(e,t),e!==2&&(t=pt,pt=n,t!==null&&Lu(t)),e}function Lu(e){pt===null?pt=e:pt.push.apply(pt,e)}function Py(e){for(var t=e;;){if(t.flags&16384){var n=t.updateQueue;if(n!==null&&(n=n.stores,n!==null))for(var r=0;r<n.length;r++){var i=n[r],o=i.getSnapshot;i=i.value;try{if(!Kt(o(),i))return!1}catch{return!1}}}if(n=t.child,t.subtreeFlags&16384&&n!==null)n.return=t,t=n;else{if(t===e)break;for(;t.sibling===null;){if(t.return===null||t.return===e)return!0;t=t.return}t.sibling.return=t.return,t=t.sibling}}return!0}function zn(e,t){for(t&=~Ac,t&=~ha,e.suspendedLanes|=t,e.pingedLanes&=~t,e=e.expirationTimes;0<t;){var n=31-Ht(t),r=1<<n;e[n]=-1,t&=~r}}function Pf(e){if(he&6)throw Error(L(327));Wr();var t=js(e,0);if(!(t&1))return vt(e,Fe()),null;var n=Us(e,t);if(e.tag!==0&&n===2){var r=su(e);r!==0&&(t=r,n=Du(e,r))}if(n===1)throw n=to,lr(e,0),zn(e,t),vt(e,Fe()),n;if(n===6)throw Error(L(345));return e.finishedWork=e.current.alternate,e.finishedLanes=t,rr(e,pt,dn),vt(e,Fe()),null}function zc(e,t){var n=he;he|=1;try{return e(t)}finally{he=n,he===0&&(qr=Fe()+500,ca&&er())}}function hr(e){Nn!==null&&Nn.tag===0&&!(he&6)&&Wr();var t=he;he|=1;var n=Dt.transition,r=ye;try{if(Dt.transition=null,ye=1,e)return e()}finally{ye=r,Dt.transition=n,he=t,!(he&6)&&er()}}function Vc(){wt=Ar.current,Pe(Ar)}function lr(e,t){e.finishedWork=null,e.finishedLanes=0;var n=e.timeoutHandle;if(n!==-1&&(e.timeoutHandle=-1,oy(n)),Ne!==null)for(n=Ne.return;n!==null;){var r=n;switch(yc(r),r.tag){case 1:r=r.type.childContextTypes,r!=null&&Ps();break;case 3:Gr(),Pe(mt),Pe(ot),_c();break;case 5:Oc(r);break;case 4:Gr();break;case 13:Pe(Me);break;case 19:Pe(Me);break;case 10:kc(r.type._context);break;case 22:case 23:Vc()}n=n.return}if(Ye=e,Ne=e=Gn(e.current,null),Je=wt=t,Be=0,to=null,Ac=ha=pr=0,pt=Li=null,or!==null){for(t=0;t<or.length;t++)if(n=or[t],r=n.interleaved,r!==null){n.interleaved=null;var i=r.next,o=n.pending;if(o!==null){var s=o.next;o.next=i,r.next=s}n.pending=r}or=null}return e}function sg(e,t){do{var n=Ne;try{if(Sc(),rs.current=zs,Fs){for(var r=Re.memoizedState;r!==null;){var i=r.queue;i!==null&&(i.pending=null),r=r.next}Fs=!1}if(fr=0,Qe=We=Re=null,Ii=!1,Ji=0,Lc.current=null,n===null||n.return===null){Be=1,to=t,Ne=null;break}e:{var o=e,s=n.return,l=n,a=t;if(t=Je,l.flags|=32768,a!==null&&typeof a=="object"&&typeof a.then=="function"){var c=a,d=l,f=d.tag;if(!(d.mode&1)&&(f===0||f===11||f===15)){var m=d.alternate;m?(d.updateQueue=m.updateQueue,d.memoizedState=m.memoizedState,d.lanes=m.lanes):(d.updateQueue=null,d.memoizedState=null)}var y=gf(s);if(y!==null){y.flags&=-257,vf(y,s,l,o,t),y.mode&1&&mf(o,c,t),t=y,a=c;var g=t.updateQueue;if(g===null){var v=new Set;v.add(a),t.updateQueue=v}else g.add(a);break e}else{if(!(t&1)){mf(o,c,t),Nc();break e}a=Error(L(426))}}else if(Te&&l.mode&1){var w=gf(s);if(w!==null){!(w.flags&65536)&&(w.flags|=256),vf(w,s,l,o,t),wc(Xr(a,l));break e}}o=a=Xr(a,l),Be!==4&&(Be=2),Li===null?Li=[o]:Li.push(o),o=s;do{switch(o.tag){case 3:o.flags|=65536,t&=-t,o.lanes|=t;var p=Wm(o,a,t);lf(o,p);break e;case 1:l=a;var h=o.type,x=o.stateNode;if(!(o.flags&128)&&(typeof h.getDerivedStateFromError=="function"||x!==null&&typeof x.componentDidCatch=="function"&&(Yn===null||!Yn.has(x)))){o.flags|=65536,t&=-t,o.lanes|=t;var b=Bm(o,l,t);lf(o,b);break e}}o=o.return}while(o!==null)}ug(n)}catch(k){t=k,Ne===n&&n!==null&&(Ne=n=n.return);continue}break}while(!0)}function ag(){var e=Vs.current;return Vs.current=zs,e===null?zs:e}function Nc(){(Be===0||Be===3||Be===2)&&(Be=4),Ye===null||!(pr&268435455)&&!(ha&268435455)||zn(Ye,Je)}function Us(e,t){var n=he;he|=2;var r=ag();(Ye!==e||Je!==t)&&(dn=null,lr(e,t));do try{Ty();break}catch(i){sg(e,i)}while(!0);if(Sc(),he=n,Vs.current=r,Ne!==null)throw Error(L(261));return Ye=null,Je=0,Be}function Ty(){for(;Ne!==null;)lg(Ne)}function My(){for(;Ne!==null&&!n0();)lg(Ne)}function lg(e){var t=dg(e.alternate,e,wt);e.memoizedProps=e.pendingProps,t===null?ug(e):Ne=t,Lc.current=null}function ug(e){var t=e;do{var n=t.alternate;if(e=t.return,t.flags&32768){if(n=jy(n,t),n!==null){n.flags&=32767,Ne=n;return}if(e!==null)e.flags|=32768,e.subtreeFlags=0,e.deletions=null;else{Be=6,Ne=null;return}}else if(n=ky(n,t,wt),n!==null){Ne=n;return}if(t=t.sibling,t!==null){Ne=t;return}Ne=t=e}while(t!==null);Be===0&&(Be=5)}function rr(e,t,n){var r=ye,i=Dt.transition;try{Dt.transition=null,ye=1,Ry(e,t,n,r)}finally{Dt.transition=i,ye=r}return null}function Ry(e,t,n,r){do Wr();while(Nn!==null);if(he&6)throw Error(L(327));n=e.finishedWork;var i=e.finishedLanes;if(n===null)return null;if(e.finishedWork=null,e.finishedLanes=0,n===e.current)throw Error(L(177));e.callbackNode=null,e.callbackPriority=0;var o=n.lanes|n.childLanes;if(f0(e,o),e===Ye&&(Ne=Ye=null,Je=0),!(n.subtreeFlags&2064)&&!(n.flags&2064)||Ao||(Ao=!0,fg(ks,function(){return Wr(),null})),o=(n.flags&15990)!==0,n.subtreeFlags&15990||o){o=Dt.transition,Dt.transition=null;var s=ye;ye=1;var l=he;he|=4,Lc.current=null,Ey(e,n),rg(n,e),J0(fu),Cs=!!du,fu=du=null,e.current=n,Oy(n),r0(),he=l,ye=s,Dt.transition=o}else e.current=n;if(Ao&&(Ao=!1,Nn=e,$s=i),o=e.pendingLanes,o===0&&(Yn=null),s0(n.stateNode),vt(e,Fe()),t!==null)for(r=e.onRecoverableError,n=0;n<t.length;n++)i=t[n],r(i.value,{componentStack:i.stack,digest:i.digest});if(Ns)throw Ns=!1,e=Ru,Ru=null,e;return $s&1&&e.tag!==0&&Wr(),o=e.pendingLanes,o&1?e===Iu?Ai++:(Ai=0,Iu=e):Ai=0,er(),null}function Wr(){if(Nn!==null){var e=Uh($s),t=Dt.transition,n=ye;try{if(Dt.transition=null,ye=16>e?16:e,Nn===null)var r=!1;else{if(e=Nn,Nn=null,$s=0,he&6)throw Error(L(331));var i=he;for(he|=4,H=e.current;H!==null;){var o=H,s=o.child;if(H.flags&16){var l=o.deletions;if(l!==null){for(var a=0;a<l.length;a++){var c=l[a];for(H=c;H!==null;){var d=H;switch(d.tag){case 0:case 11:case 15:Di(8,d,o)}var f=d.child;if(f!==null)f.return=d,H=f;else for(;H!==null;){d=H;var m=d.sibling,y=d.return;if(eg(d),d===c){H=null;break}if(m!==null){m.return=y,H=m;break}H=y}}}var g=o.alternate;if(g!==null){var v=g.child;if(v!==null){g.child=null;do{var w=v.sibling;v.sibling=null,v=w}while(v!==null)}}H=o}}if(o.subtreeFlags&2064&&s!==null)s.return=o,H=s;else e:for(;H!==null;){if(o=H,o.flags&2048)switch(o.tag){case 0:case 11:case 15:Di(9,o,o.return)}var p=o.sibling;if(p!==null){p.return=o.return,H=p;break e}H=o.return}}var h=e.current;for(H=h;H!==null;){s=H;var x=s.child;if(s.subtreeFlags&2064&&x!==null)x.return=s,H=x;else e:for(s=h;H!==null;){if(l=H,l.flags&2048)try{switch(l.tag){case 0:case 11:case 15:pa(9,l)}}catch(k){De(l,l.return,k)}if(l===s){H=null;break e}var b=l.sibling;if(b!==null){b.return=l.return,H=b;break e}H=l.return}}if(he=i,er(),on&&typeof on.onPostCommitFiberRoot=="function")try{on.onPostCommitFiberRoot(oa,e)}catch{}r=!0}return r}finally{ye=n,Dt.transition=t}}return!1}function Tf(e,t,n){t=Xr(n,t),t=Wm(e,t,1),e=Qn(e,t,1),t=ut(),e!==null&&(uo(e,1,t),vt(e,t))}function De(e,t,n){if(e.tag===3)Tf(e,e,n);else for(;t!==null;){if(t.tag===3){Tf(t,e,n);break}else if(t.tag===1){var r=t.stateNode;if(typeof t.type.getDerivedStateFromError=="function"||typeof r.componentDidCatch=="function"&&(Yn===null||!Yn.has(r))){e=Xr(n,e),e=Bm(t,e,1),t=Qn(t,e,1),e=ut(),t!==null&&(uo(t,1,e),vt(t,e));break}}t=t.return}}function Iy(e,t,n){var r=e.pingCache;r!==null&&r.delete(t),t=ut(),e.pingedLanes|=e.suspendedLanes&n,Ye===e&&(Je&n)===n&&(Be===4||Be===3&&(Je&130023424)===Je&&500>Fe()-Fc?lr(e,0):Ac|=n),vt(e,t)}function cg(e,t){t===0&&(e.mode&1?(t=Eo,Eo<<=1,!(Eo&130023424)&&(Eo=4194304)):t=1);var n=ut();e=Sn(e,t),e!==null&&(uo(e,t,n),vt(e,n))}function Dy(e){var t=e.memoizedState,n=0;t!==null&&(n=t.retryLane),cg(e,n)}function Ly(e,t){var n=0;switch(e.tag){case 13:var r=e.stateNode,i=e.memoizedState;i!==null&&(n=i.retryLane);break;case 19:r=e.stateNode;break;default:throw Error(L(314))}r!==null&&r.delete(t),cg(e,n)}var dg;dg=function(e,t,n){if(e!==null)if(e.memoizedProps!==t.pendingProps||mt.current)ht=!0;else{if(!(e.lanes&n)&&!(t.flags&128))return ht=!1,Sy(e,t,n);ht=!!(e.flags&131072)}else ht=!1,Te&&t.flags&1048576&&hm(t,Rs,t.index);switch(t.lanes=0,t.tag){case 2:var r=t.type;os(e,t),e=t.pendingProps;var i=Qr(t,ot.current);Ur(t,n),i=Tc(null,t,r,e,i,n);var o=Mc();return t.flags|=1,typeof i=="object"&&i!==null&&typeof i.render=="function"&&i.$$typeof===void 0?(t.tag=1,t.memoizedState=null,t.updateQueue=null,gt(r)?(o=!0,Ts(t)):o=!1,t.memoizedState=i.state!==null&&i.state!==void 0?i.state:null,Cc(t),i.updater=da,t.stateNode=i,i._reactInternals=t,bu(t,r,e,n),t=ju(null,t,r,!0,o,n)):(t.tag=0,Te&&o&&xc(t),at(null,t,i,n),t=t.child),t;case 16:r=t.elementType;e:{switch(os(e,t),e=t.pendingProps,i=r._init,r=i(r._payload),t.type=r,i=t.tag=Fy(r),e=Vt(r,e),i){case 0:t=ku(null,t,r,e,n);break e;case 1:t=wf(null,t,r,e,n);break e;case 11:t=xf(null,t,r,e,n);break e;case 14:t=yf(null,t,r,Vt(r.type,e),n);break e}throw Error(L(306,r,""))}return t;case 0:return r=t.type,i=t.pendingProps,i=t.elementType===r?i:Vt(r,i),ku(e,t,r,i,n);case 1:return r=t.type,i=t.pendingProps,i=t.elementType===r?i:Vt(r,i),wf(e,t,r,i,n);case 3:e:{if(Km(t),e===null)throw Error(L(387));r=t.pendingProps,o=t.memoizedState,i=o.element,xm(e,t),Ls(t,r,null,n);var s=t.memoizedState;if(r=s.element,o.isDehydrated)if(o={element:r,isDehydrated:!1,cache:s.cache,pendingSuspenseBoundaries:s.pendingSuspenseBoundaries,transitions:s.transitions},t.updateQueue.baseState=o,t.memoizedState=o,t.flags&256){i=Xr(Error(L(423)),t),t=bf(e,t,r,n,i);break e}else if(r!==i){i=Xr(Error(L(424)),t),t=bf(e,t,r,n,i);break e}else for(bt=Hn(t.stateNode.containerInfo.firstChild),St=t,Te=!0,Wt=null,n=Sm(t,null,r,n),t.child=n;n;)n.flags=n.flags&-3|4096,n=n.sibling;else{if(Yr(),r===i){t=kn(e,t,n);break e}at(e,t,r,n)}t=t.child}return t;case 5:return km(t),e===null&&xu(t),r=t.type,i=t.pendingProps,o=e!==null?e.memoizedProps:null,s=i.children,pu(r,i)?s=null:o!==null&&pu(r,o)&&(t.flags|=32),Ym(e,t),at(e,t,s,n),t.child;case 6:return e===null&&xu(t),null;case 13:return Gm(e,t,n);case 4:return Ec(t,t.stateNode.containerInfo),r=t.pendingProps,e===null?t.child=Kr(t,null,r,n):at(e,t,r,n),t.child;case 11:return r=t.type,i=t.pendingProps,i=t.elementType===r?i:Vt(r,i),xf(e,t,r,i,n);case 7:return at(e,t,t.pendingProps,n),t.child;case 8:return at(e,t,t.pendingProps.children,n),t.child;case 12:return at(e,t,t.pendingProps.children,n),t.child;case 10:e:{if(r=t.type._context,i=t.pendingProps,o=t.memoizedProps,s=i.value,Ee(Is,r._currentValue),r._currentValue=s,o!==null)if(Kt(o.value,s)){if(o.children===i.children&&!mt.current){t=kn(e,t,n);break e}}else for(o=t.child,o!==null&&(o.return=t);o!==null;){var l=o.dependencies;if(l!==null){s=o.child;for(var a=l.firstContext;a!==null;){if(a.context===r){if(o.tag===1){a=vn(-1,n&-n),a.tag=2;var c=o.updateQueue;if(c!==null){c=c.shared;var d=c.pending;d===null?a.next=a:(a.next=d.next,d.next=a),c.pending=a}}o.lanes|=n,a=o.alternate,a!==null&&(a.lanes|=n),yu(o.return,n,t),l.lanes|=n;break}a=a.next}}else if(o.tag===10)s=o.type===t.type?null:o.child;else if(o.tag===18){if(s=o.return,s===null)throw Error(L(341));s.lanes|=n,l=s.alternate,l!==null&&(l.lanes|=n),yu(s,n,t),s=o.sibling}else s=o.child;if(s!==null)s.return=o;else for(s=o;s!==null;){if(s===t){s=null;break}if(o=s.sibling,o!==null){o.return=s.return,s=o;break}s=s.return}o=s}at(e,t,i.children,n),t=t.child}return t;case 9:return i=t.type,r=t.pendingProps.children,Ur(t,n),i=At(i),r=r(i),t.flags|=1,at(e,t,r,n),t.child;case 14:return r=t.type,i=Vt(r,t.pendingProps),i=Vt(r.type,i),yf(e,t,r,i,n);case 15:return Hm(e,t,t.type,t.pendingProps,n);case 17:return r=t.type,i=t.pendingProps,i=t.elementType===r?i:Vt(r,i),os(e,t),t.tag=1,gt(r)?(e=!0,Ts(t)):e=!1,Ur(t,n),wm(t,r,i),bu(t,r,i,n),ju(null,t,r,!0,e,n);case 19:return Xm(e,t,n);case 22:return Qm(e,t,n)}throw Error(L(156,t.tag))};function fg(e,t){return zh(e,t)}function Ay(e,t,n,r){this.tag=e,this.key=n,this.sibling=this.child=this.return=this.stateNode=this.type=this.elementType=null,this.index=0,this.ref=null,this.pendingProps=t,this.dependencies=this.memoizedState=this.updateQueue=this.memoizedProps=null,this.mode=r,this.subtreeFlags=this.flags=0,this.deletions=null,this.childLanes=this.lanes=0,this.alternate=null}function It(e,t,n,r){return new Ay(e,t,n,r)}function $c(e){return e=e.prototype,!(!e||!e.isReactComponent)}function Fy(e){if(typeof e=="function")return $c(e)?1:0;if(e!=null){if(e=e.$$typeof,e===sc)return 11;if(e===ac)return 14}return 2}function Gn(e,t){var n=e.alternate;return n===null?(n=It(e.tag,t,e.key,e.mode),n.elementType=e.elementType,n.type=e.type,n.stateNode=e.stateNode,n.alternate=e,e.alternate=n):(n.pendingProps=t,n.type=e.type,n.flags=0,n.subtreeFlags=0,n.deletions=null),n.flags=e.flags&14680064,n.childLanes=e.childLanes,n.lanes=e.lanes,n.child=e.child,n.memoizedProps=e.memoizedProps,n.memoizedState=e.memoizedState,n.updateQueue=e.updateQueue,t=e.dependencies,n.dependencies=t===null?null:{lanes:t.lanes,firstContext:t.firstContext},n.sibling=e.sibling,n.index=e.index,n.ref=e.ref,n}function ls(e,t,n,r,i,o){var s=2;if(r=e,typeof e=="function")$c(e)&&(s=1);else if(typeof e=="string")s=5;else e:switch(e){case Er:return ur(n.children,i,o,t);case oc:s=8,i|=8;break;case Hl:return e=It(12,n,t,i|2),e.elementType=Hl,e.lanes=o,e;case Ql:return e=It(13,n,t,i),e.elementType=Ql,e.lanes=o,e;case Yl:return e=It(19,n,t,i),e.elementType=Yl,e.lanes=o,e;case bh:return ma(n,i,o,t);default:if(typeof e=="object"&&e!==null)switch(e.$$typeof){case yh:s=10;break e;case wh:s=9;break e;case sc:s=11;break e;case ac:s=14;break e;case Ln:s=16,r=null;break e}throw Error(L(130,e==null?e:typeof e,""))}return t=It(s,n,t,i),t.elementType=e,t.type=r,t.lanes=o,t}function ur(e,t,n,r){return e=It(7,e,r,t),e.lanes=n,e}function ma(e,t,n,r){return e=It(22,e,r,t),e.elementType=bh,e.lanes=n,e.stateNode={isHidden:!1},e}function pl(e,t,n){return e=It(6,e,null,t),e.lanes=n,e}function hl(e,t,n){return t=It(4,e.children!==null?e.children:[],e.key,t),t.lanes=n,t.stateNode={containerInfo:e.containerInfo,pendingChildren:null,implementation:e.implementation},t}function zy(e,t,n,r,i){this.tag=t,this.containerInfo=e,this.finishedWork=this.pingCache=this.current=this.pendingChildren=null,this.timeoutHandle=-1,this.callbackNode=this.pendingContext=this.context=null,this.callbackPriority=0,this.eventTimes=Ka(0),this.expirationTimes=Ka(-1),this.entangledLanes=this.finishedLanes=this.mutableReadLanes=this.expiredLanes=this.pingedLanes=this.suspendedLanes=this.pendingLanes=0,this.entanglements=Ka(0),this.identifierPrefix=r,this.onRecoverableError=i,this.mutableSourceEagerHydrationData=null}function Uc(e,t,n,r,i,o,s,l,a){return e=new zy(e,t,n,l,a),t===1?(t=1,o===!0&&(t|=8)):t=0,o=It(3,null,null,t),e.current=o,o.stateNode=e,o.memoizedState={element:r,isDehydrated:n,cache:null,transitions:null,pendingSuspenseBoundaries:null},Cc(o),e}function Vy(e,t,n){var r=3<arguments.length&&arguments[3]!==void 0?arguments[3]:null;return{$$typeof:Cr,key:r==null?null:""+r,children:e,containerInfo:t,implementation:n}}function pg(e){if(!e)return qn;e=e._reactInternals;e:{if(vr(e)!==e||e.tag!==1)throw Error(L(170));var t=e;do{switch(t.tag){case 3:t=t.stateNode.context;break e;case 1:if(gt(t.type)){t=t.stateNode.__reactInternalMemoizedMergedChildContext;break e}}t=t.return}while(t!==null);throw Error(L(171))}if(e.tag===1){var n=e.type;if(gt(n))return fm(e,n,t)}return t}function hg(e,t,n,r,i,o,s,l,a){return e=Uc(n,r,!0,e,i,o,s,l,a),e.context=pg(null),n=e.current,r=ut(),i=Kn(n),o=vn(r,i),o.callback=t??null,Qn(n,o,i),e.current.lanes=i,uo(e,i,r),vt(e,r),e}function ga(e,t,n,r){var i=t.current,o=ut(),s=Kn(i);return n=pg(n),t.context===null?t.context=n:t.pendingContext=n,t=vn(o,s),t.payload={element:e},r=r===void 0?null:r,r!==null&&(t.callback=r),e=Qn(i,t,s),e!==null&&(Qt(e,i,s,o),ns(e,i,s)),s}function Ws(e){if(e=e.current,!e.child)return null;switch(e.child.tag){case 5:return e.child.stateNode;default:return e.child.stateNode}}function Mf(e,t){if(e=e.memoizedState,e!==null&&e.dehydrated!==null){var n=e.retryLane;e.retryLane=n!==0&&n<t?n:t}}function Wc(e,t){Mf(e,t),(e=e.alternate)&&Mf(e,t)}function Ny(){return null}var mg=typeof reportError=="function"?reportError:function(e){console.error(e)};function Bc(e){this._internalRoot=e}va.prototype.render=Bc.prototype.render=function(e){var t=this._internalRoot;if(t===null)throw Error(L(409));ga(e,t,null,null)};va.prototype.unmount=Bc.prototype.unmount=function(){var e=this._internalRoot;if(e!==null){this._internalRoot=null;var t=e.containerInfo;hr(function(){ga(null,e,null,null)}),t[bn]=null}};function va(e){this._internalRoot=e}va.prototype.unstable_scheduleHydration=function(e){if(e){var t=Hh();e={blockedOn:null,target:e,priority:t};for(var n=0;n<Fn.length&&t!==0&&t<Fn[n].priority;n++);Fn.splice(n,0,e),n===0&&Yh(e)}};function Hc(e){return!(!e||e.nodeType!==1&&e.nodeType!==9&&e.nodeType!==11)}function xa(e){return!(!e||e.nodeType!==1&&e.nodeType!==9&&e.nodeType!==11&&(e.nodeType!==8||e.nodeValue!==" react-mount-point-unstable "))}function Rf(){}function $y(e,t,n,r,i){if(i){if(typeof r=="function"){var o=r;r=function(){var c=Ws(s);o.call(c)}}var s=hg(t,r,e,0,null,!1,!1,"",Rf);return e._reactRootContainer=s,e[bn]=s.current,Yi(e.nodeType===8?e.parentNode:e),hr(),s}for(;i=e.lastChild;)e.removeChild(i);if(typeof r=="function"){var l=r;r=function(){var c=Ws(a);l.call(c)}}var a=Uc(e,0,!1,null,null,!1,!1,"",Rf);return e._reactRootContainer=a,e[bn]=a.current,Yi(e.nodeType===8?e.parentNode:e),hr(function(){ga(t,a,n,r)}),a}function ya(e,t,n,r,i){var o=n._reactRootContainer;if(o){var s=o;if(typeof i=="function"){var l=i;i=function(){var a=Ws(s);l.call(a)}}ga(t,s,e,i)}else s=$y(n,t,e,i,r);return Ws(s)}Wh=function(e){switch(e.tag){case 3:var t=e.stateNode;if(t.current.memoizedState.isDehydrated){var n=ji(t.pendingLanes);n!==0&&(cc(t,n|1),vt(t,Fe()),!(he&6)&&(qr=Fe()+500,er()))}break;case 13:hr(function(){var r=Sn(e,1);if(r!==null){var i=ut();Qt(r,e,1,i)}}),Wc(e,1)}};dc=function(e){if(e.tag===13){var t=Sn(e,134217728);if(t!==null){var n=ut();Qt(t,e,134217728,n)}Wc(e,134217728)}};Bh=function(e){if(e.tag===13){var t=Kn(e),n=Sn(e,t);if(n!==null){var r=ut();Qt(n,e,t,r)}Wc(e,t)}};Hh=function(){return ye};Qh=function(e,t){var n=ye;try{return ye=e,t()}finally{ye=n}};ru=function(e,t,n){switch(t){case"input":if(Xl(e,n),t=n.name,n.type==="radio"&&t!=null){for(n=e;n.parentNode;)n=n.parentNode;for(n=n.querySelectorAll("input[name="+JSON.stringify(""+t)+'][type="radio"]'),t=0;t<n.length;t++){var r=n[t];if(r!==e&&r.form===e.form){var i=ua(r);if(!i)throw Error(L(90));kh(r),Xl(r,i)}}}break;case"textarea":Ch(e,n);break;case"select":t=n.value,t!=null&&zr(e,!!n.multiple,t,!1)}};Rh=zc;Ih=hr;var Uy={usingClientEntryPoint:!1,Events:[fo,Tr,ua,Th,Mh,zc]},fi={findFiberByHostInstance:ir,bundleType:0,version:"18.2.0",rendererPackageName:"react-dom"},Wy={bundleType:fi.bundleType,version:fi.version,rendererPackageName:fi.rendererPackageName,rendererConfig:fi.rendererConfig,overrideHookState:null,overrideHookStateDeletePath:null,overrideHookStateRenamePath:null,overrideProps:null,overridePropsDeletePath:null,overridePropsRenamePath:null,setErrorHandler:null,setSuspenseHandler:null,scheduleUpdate:null,currentDispatcherRef:jn.ReactCurrentDispatcher,findHostInstanceByFiber:function(e){return e=Ah(e),e===null?null:e.stateNode},findFiberByHostInstance:fi.findFiberByHostInstance||Ny,findHostInstancesForRefresh:null,scheduleRefresh:null,scheduleRoot:null,setRefreshHandler:null,getCurrentFiber:null,reconcilerVersion:"18.2.0-next-9e3b772b8-20220608"};if(typeof __REACT_DEVTOOLS_GLOBAL_HOOK__<"u"){var Fo=__REACT_DEVTOOLS_GLOBAL_HOOK__;if(!Fo.isDisabled&&Fo.supportsFiber)try{oa=Fo.inject(Wy),on=Fo}catch{}}Et.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED=Uy;Et.createPortal=function(e,t){var n=2<arguments.length&&arguments[2]!==void 0?arguments[2]:null;if(!Hc(t))throw Error(L(200));return Vy(e,t,null,n)};Et.createRoot=function(e,t){if(!Hc(e))throw Error(L(299));var n=!1,r="",i=mg;return t!=null&&(t.unstable_strictMode===!0&&(n=!0),t.identifierPrefix!==void 0&&(r=t.identifierPrefix),t.onRecoverableError!==void 0&&(i=t.onRecoverableError)),t=Uc(e,1,!1,null,null,n,!1,r,i),e[bn]=t.current,Yi(e.nodeType===8?e.parentNode:e),new Bc(t)};Et.findDOMNode=function(e){if(e==null)return null;if(e.nodeType===1)return e;var t=e._reactInternals;if(t===void 0)throw typeof e.render=="function"?Error(L(188)):(e=Object.keys(e).join(","),Error(L(268,e)));return e=Ah(t),e=e===null?null:e.stateNode,e};Et.flushSync=function(e){return hr(e)};Et.hydrate=function(e,t,n){if(!xa(t))throw Error(L(200));return ya(null,e,t,!0,n)};Et.hydrateRoot=function(e,t,n){if(!Hc(e))throw Error(L(405));var r=n!=null&&n.hydratedSources||null,i=!1,o="",s=mg;if(n!=null&&(n.unstable_strictMode===!0&&(i=!0),n.identifierPrefix!==void 0&&(o=n.identifierPrefix),n.onRecoverableError!==void 0&&(s=n.onRecoverableError)),t=hg(t,null,e,1,n??null,i,!1,o,s),e[bn]=t.current,Yi(e),r)for(e=0;e<r.length;e++)n=r[e],i=n._getVersion,i=i(n._source),t.mutableSourceEagerHydrationData==null?t.mutableSourceEagerHydrationData=[n,i]:t.mutableSourceEagerHydrationData.push(n,i);return new va(t)};Et.render=function(e,t,n){if(!xa(t))throw Error(L(200));return ya(null,e,t,!1,n)};Et.unmountComponentAtNode=function(e){if(!xa(e))throw Error(L(40));return e._reactRootContainer?(hr(function(){ya(null,null,e,!1,function(){e._reactRootContainer=null,e[bn]=null})}),!0):!1};Et.unstable_batchedUpdates=zc;Et.unstable_renderSubtreeIntoContainer=function(e,t,n,r){if(!xa(n))throw Error(L(200));if(e==null||e._reactInternals===void 0)throw Error(L(38));return ya(e,t,n,!1,r)};Et.version="18.2.0-next-9e3b772b8-20220608";function gg(){if(!(typeof __REACT_DEVTOOLS_GLOBAL_HOOK__>"u"||typeof __REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE!="function"))try{__REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE(gg)}catch(e){console.error(e)}}gg(),hh.exports=Et;var ho=hh.exports;const By=ao(ho);var If=ho;Wl.createRoot=If.createRoot,Wl.hydrateRoot=If.hydrateRoot;var vg={exports:{}};(function(e,t){(function(r,i){e.exports=i(M)})(yx,n=>(()=>{var r={"./node_modules/css-mediaquery/index.js":(l,a)=>{a.match=g,a.parse=v;var c=/(?:(only|not)?\s*([^\s\(\)]+)(?:\s*and)?\s*)?(.+)?/i,d=/\(\s*([^\s\:\)]+)\s*(?:\:\s*([^\s\)]+))?\s*\)/,f=/^(?:(min|max)-)?(.+)/,m=/(em|rem|px|cm|mm|in|pt|pc)?$/,y=/(dpi|dpcm|dppx)?$/;function g(x,b){return v(x).some(function(k){var _=k.inverse,E=k.type==="all"||b.type===k.type;if(E&&_||!(E||_))return!1;var P=k.expressions.every(function(T){var I=T.feature,W=T.modifier,A=T.value,D=b[I];if(!D)return!1;switch(I){case"orientation":case"scan":return D.toLowerCase()===A.toLowerCase();case"width":case"height":case"device-width":case"device-height":A=h(A),D=h(D);break;case"resolution":A=p(A),D=p(D);break;case"aspect-ratio":case"device-aspect-ratio":case"device-pixel-ratio":A=w(A),D=w(D);break;case"grid":case"color":case"color-index":case"monochrome":A=parseInt(A,10)||1,D=parseInt(D,10)||0;break}switch(W){case"min":return D>=A;case"max":return D<=A;default:return D===A}});return P&&!_||!P&&_})}function v(x){return x.split(",").map(function(b){b=b.trim();var k=b.match(c),_=k[1],E=k[2],P=k[3]||"",T={};return T.inverse=!!_&&_.toLowerCase()==="not",T.type=E?E.toLowerCase():"all",P=P.match(/\([^\)]+\)/g)||[],T.expressions=P.map(function(I){var W=I.match(d),A=W[1].toLowerCase().match(f);return{modifier:A[1],feature:A[2],value:W[2]}}),T})}function w(x){var b=Number(x),k;return b||(k=x.match(/^(\d+)\s*\/\s*(\d+)$/),b=k[1]/k[2]),b}function p(x){var b=parseFloat(x),k=String(x).match(y)[1];switch(k){case"dpcm":return b/2.54;case"dppx":return b*96;default:return b}}function h(x){var b=parseFloat(x),k=String(x).match(m)[1];switch(k){case"em":return b*16;case"rem":return b*16;case"cm":return b*96/2.54;case"mm":return b*96/2.54/10;case"in":return b*96;case"pt":return b*72;case"pc":return b*72/12;default:return b}}},"./node_modules/hyphenate-style-name/index.js":(l,a,c)=>{c.r(a),c.d(a,{default:()=>v});var d=/[A-Z]/g,f=/^ms-/,m={};function y(w){return"-"+w.toLowerCase()}function g(w){if(m.hasOwnProperty(w))return m[w];var p=w.replace(d,y);return m[w]=f.test(p)?"-"+p:p}const v=g},"./node_modules/matchmediaquery/index.js":(l,a,c)=>{var d=c("./node_modules/css-mediaquery/index.js").match,f=typeof window<"u"?window.matchMedia:null;function m(g,v,w){var p=this;if(f&&!w){var h=f.call(window,g);this.matches=h.matches,this.media=h.media,h.addListener(k)}else this.matches=d(g,v),this.media=g;this.addListener=x,this.removeListener=b,this.dispose=_;function x(E){h&&h.addListener(E)}function b(E){h&&h.removeListener(E)}function k(E){p.matches=E.matches,p.media=E.media}function _(){h&&h.removeListener(k)}}function y(g,v,w){return new m(g,v,w)}l.exports=y},"./node_modules/object-assign/index.js":l=>{/*
object-assign
(c) Sindre Sorhus
@license MIT
*/var a=Object.getOwnPropertySymbols,c=Object.prototype.hasOwnProperty,d=Object.prototype.propertyIsEnumerable;function f(y){if(y==null)throw new TypeError("Object.assign cannot be called with null or undefined");return Object(y)}function m(){try{if(!Object.assign)return!1;var y=new String("abc");if(y[5]="de",Object.getOwnPropertyNames(y)[0]==="5")return!1;for(var g={},v=0;v<10;v++)g["_"+String.fromCharCode(v)]=v;var w=Object.getOwnPropertyNames(g).map(function(h){return g[h]});if(w.join("")!=="0123456789")return!1;var p={};return"abcdefghijklmnopqrst".split("").forEach(function(h){p[h]=h}),Object.keys(Object.assign({},p)).join("")==="abcdefghijklmnopqrst"}catch{return!1}}l.exports=m()?Object.assign:function(y,g){for(var v,w=f(y),p,h=1;h<arguments.length;h++){v=Object(arguments[h]);for(var x in v)c.call(v,x)&&(w[x]=v[x]);if(a){p=a(v);for(var b=0;b<p.length;b++)d.call(v,p[b])&&(w[p[b]]=v[p[b]])}}return w}},"./node_modules/prop-types/checkPropTypes.js":(l,a,c)=>{var d=function(){};{var f=c("./node_modules/prop-types/lib/ReactPropTypesSecret.js"),m={},y=c("./node_modules/prop-types/lib/has.js");d=function(v){var w="Warning: "+v;typeof console<"u"&&console.error(w);try{throw new Error(w)}catch{}}}function g(v,w,p,h,x){for(var b in v)if(y(v,b)){var k;try{if(typeof v[b]!="function"){var _=Error((h||"React class")+": "+p+" type `"+b+"` is invalid; it must be a function, usually from the `prop-types` package, but received `"+typeof v[b]+"`.This often happens because of typos such as `PropTypes.function` instead of `PropTypes.func`.");throw _.name="Invariant Violation",_}k=v[b](w,b,h,p,null,f)}catch(P){k=P}if(k&&!(k instanceof Error)&&d((h||"React class")+": type specification of "+p+" `"+b+"` is invalid; the type checker function must return `null` or an `Error` but returned a "+typeof k+". You may have forgotten to pass an argument to the type checker creator (arrayOf, instanceOf, objectOf, oneOf, oneOfType, and shape all require an argument)."),k instanceof Error&&!(k.message in m)){m[k.message]=!0;var E=x?x():"";d("Failed "+p+" type: "+k.message+(E??""))}}}g.resetWarningCache=function(){m={}},l.exports=g},"./node_modules/prop-types/factoryWithTypeCheckers.js":(l,a,c)=>{var d=c("./node_modules/react-is/index.js"),f=c("./node_modules/object-assign/index.js"),m=c("./node_modules/prop-types/lib/ReactPropTypesSecret.js"),y=c("./node_modules/prop-types/lib/has.js"),g=c("./node_modules/prop-types/checkPropTypes.js"),v=function(){};v=function(p){var h="Warning: "+p;typeof console<"u"&&console.error(h);try{throw new Error(h)}catch{}};function w(){return null}l.exports=function(p,h){var x=typeof Symbol=="function"&&Symbol.iterator,b="@@iterator";function k(F){var B=F&&(x&&F[x]||F[b]);if(typeof B=="function")return B}var _="<<anonymous>>",E={array:W("array"),bigint:W("bigint"),bool:W("boolean"),func:W("function"),number:W("number"),object:W("object"),string:W("string"),symbol:W("symbol"),any:A(),arrayOf:D,element:q(),elementType:ee(),instanceOf:te,node:Y(),objectOf:z,oneOf:xe,oneOfType:Q,shape:re,exact:Oe};function P(F,B){return F===B?F!==0||1/F===1/B:F!==F&&B!==B}function T(F,B){this.message=F,this.data=B&&typeof B=="object"?B:{},this.stack=""}T.prototype=Error.prototype;function I(F){var B={},ie=0;function se(le,ae,ue,pe,S,O,C){if(pe=pe||_,O=O||ue,C!==m){if(h){var $=new Error("Calling PropTypes validators directly is not supported by the `prop-types` package. Use `PropTypes.checkPropTypes()` to call them. Read more at http://fb.me/use-check-prop-types");throw $.name="Invariant Violation",$}else if(typeof console<"u"){var N=pe+":"+ue;!B[N]&&ie<3&&(v("You are manually calling a React.PropTypes validation function for the `"+O+"` prop on `"+pe+"`. This is deprecated and will throw in the standalone `prop-types` package. You may be seeing this warning due to a third-party PropTypes library. See https://fb.me/react-warning-dont-call-proptypes for details."),B[N]=!0,ie++)}}return ae[ue]==null?le?ae[ue]===null?new T("The "+S+" `"+O+"` is marked as required "+("in `"+pe+"`, but its value is `null`.")):new T("The "+S+" `"+O+"` is marked as required in "+("`"+pe+"`, but its value is `undefined`.")):null:F(ae,ue,pe,S,O)}var ne=se.bind(null,!1);return ne.isRequired=se.bind(null,!0),ne}function W(F){function B(ie,se,ne,le,ae,ue){var pe=ie[se],S=me(pe);if(S!==F){var O=Se(pe);return new T("Invalid "+le+" `"+ae+"` of type "+("`"+O+"` supplied to `"+ne+"`, expected ")+("`"+F+"`."),{expectedType:F})}return null}return I(B)}function A(){return I(w)}function D(F){function B(ie,se,ne,le,ae){if(typeof F!="function")return new T("Property `"+ae+"` of component `"+ne+"` has invalid PropType notation inside arrayOf.");var ue=ie[se];if(!Array.isArray(ue)){var pe=me(ue);return new T("Invalid "+le+" `"+ae+"` of type "+("`"+pe+"` supplied to `"+ne+"`, expected an array."))}for(var S=0;S<ue.length;S++){var O=F(ue,S,ne,le,ae+"["+S+"]",m);if(O instanceof Error)return O}return null}return I(B)}function q(){function F(B,ie,se,ne,le){var ae=B[ie];if(!p(ae)){var ue=me(ae);return new T("Invalid "+ne+" `"+le+"` of type "+("`"+ue+"` supplied to `"+se+"`, expected a single ReactElement."))}return null}return I(F)}function ee(){function F(B,ie,se,ne,le){var ae=B[ie];if(!d.isValidElementType(ae)){var ue=me(ae);return new T("Invalid "+ne+" `"+le+"` of type "+("`"+ue+"` supplied to `"+se+"`, expected a single ReactElement type."))}return null}return I(F)}function te(F){function B(ie,se,ne,le,ae){if(!(ie[se]instanceof F)){var ue=F.name||_,pe=yt(ie[se]);return new T("Invalid "+le+" `"+ae+"` of type "+("`"+pe+"` supplied to `"+ne+"`, expected ")+("instance of `"+ue+"`."))}return null}return I(B)}function xe(F){if(!Array.isArray(F))return arguments.length>1?v("Invalid arguments supplied to oneOf, expected an array, got "+arguments.length+" arguments. A common mistake is to write oneOf(x, y, z) instead of oneOf([x, y, z])."):v("Invalid argument supplied to oneOf, expected an array."),w;function B(ie,se,ne,le,ae){for(var ue=ie[se],pe=0;pe<F.length;pe++)if(P(ue,F[pe]))return null;var S=JSON.stringify(F,function(C,$){var N=Se($);return N==="symbol"?String($):$});return new T("Invalid "+le+" `"+ae+"` of value `"+String(ue)+"` "+("supplied to `"+ne+"`, expected one of "+S+"."))}return I(B)}function z(F){function B(ie,se,ne,le,ae){if(typeof F!="function")return new T("Property `"+ae+"` of component `"+ne+"` has invalid PropType notation inside objectOf.");var ue=ie[se],pe=me(ue);if(pe!=="object")return new T("Invalid "+le+" `"+ae+"` of type "+("`"+pe+"` supplied to `"+ne+"`, expected an object."));for(var S in ue)if(y(ue,S)){var O=F(ue,S,ne,le,ae+"."+S,m);if(O instanceof Error)return O}return null}return I(B)}function Q(F){if(!Array.isArray(F))return v("Invalid argument supplied to oneOfType, expected an instance of array."),w;for(var B=0;B<F.length;B++){var ie=F[B];if(typeof ie!="function")return v("Invalid argument supplied to oneOfType. Expected an array of check functions, but received "+et(ie)+" at index "+B+"."),w}function se(ne,le,ae,ue,pe){for(var S=[],O=0;O<F.length;O++){var C=F[O],$=C(ne,le,ae,ue,pe,m);if($==null)return null;$.data&&y($.data,"expectedType")&&S.push($.data.expectedType)}var N=S.length>0?", expected one of type ["+S.join(", ")+"]":"";return new T("Invalid "+ue+" `"+pe+"` supplied to "+("`"+ae+"`"+N+"."))}return I(se)}function Y(){function F(B,ie,se,ne,le){return be(B[ie])?null:new T("Invalid "+ne+" `"+le+"` supplied to "+("`"+se+"`, expected a ReactNode."))}return I(F)}function de(F,B,ie,se,ne){return new T((F||"React class")+": "+B+" type `"+ie+"."+se+"` is invalid; it must be a function, usually from the `prop-types` package, but received `"+ne+"`.")}function re(F){function B(ie,se,ne,le,ae){var ue=ie[se],pe=me(ue);if(pe!=="object")return new T("Invalid "+le+" `"+ae+"` of type `"+pe+"` "+("supplied to `"+ne+"`, expected `object`."));for(var S in F){var O=F[S];if(typeof O!="function")return de(ne,le,ae,S,Se(O));var C=O(ue,S,ne,le,ae+"."+S,m);if(C)return C}return null}return I(B)}function Oe(F){function B(ie,se,ne,le,ae){var ue=ie[se],pe=me(ue);if(pe!=="object")return new T("Invalid "+le+" `"+ae+"` of type `"+pe+"` "+("supplied to `"+ne+"`, expected `object`."));var S=f({},ie[se],F);for(var O in S){var C=F[O];if(y(F,O)&&typeof C!="function")return de(ne,le,ae,O,Se(C));if(!C)return new T("Invalid "+le+" `"+ae+"` key `"+O+"` supplied to `"+ne+"`.\nBad object: "+JSON.stringify(ie[se],null,"  ")+`
Valid keys: `+JSON.stringify(Object.keys(F),null,"  "));var $=C(ue,O,ne,le,ae+"."+O,m);if($)return $}return null}return I(B)}function be(F){switch(typeof F){case"number":case"string":case"undefined":return!0;case"boolean":return!F;case"object":if(Array.isArray(F))return F.every(be);if(F===null||p(F))return!0;var B=k(F);if(B){var ie=B.call(F),se;if(B!==F.entries){for(;!(se=ie.next()).done;)if(!be(se.value))return!1}else for(;!(se=ie.next()).done;){var ne=se.value;if(ne&&!be(ne[1]))return!1}}else return!1;return!0;default:return!1}}function Ue(F,B){return F==="symbol"?!0:B?B["@@toStringTag"]==="Symbol"||typeof Symbol=="function"&&B instanceof Symbol:!1}function me(F){var B=typeof F;return Array.isArray(F)?"array":F instanceof RegExp?"object":Ue(B,F)?"symbol":B}function Se(F){if(typeof F>"u"||F===null)return""+F;var B=me(F);if(B==="object"){if(F instanceof Date)return"date";if(F instanceof RegExp)return"regexp"}return B}function et(F){var B=Se(F);switch(B){case"array":case"object":return"an "+B;case"boolean":case"date":case"regexp":return"a "+B;default:return B}}function yt(F){return!F.constructor||!F.constructor.name?_:F.constructor.name}return E.checkPropTypes=g,E.resetWarningCache=g.resetWarningCache,E.PropTypes=E,E}},"./node_modules/prop-types/index.js":(l,a,c)=>{{var d=c("./node_modules/react-is/index.js"),f=!0;l.exports=c("./node_modules/prop-types/factoryWithTypeCheckers.js")(d.isElement,f)}},"./node_modules/prop-types/lib/ReactPropTypesSecret.js":l=>{var a="SECRET_DO_NOT_PASS_THIS_OR_YOU_WILL_BE_FIRED";l.exports=a},"./node_modules/prop-types/lib/has.js":l=>{l.exports=Function.call.bind(Object.prototype.hasOwnProperty)},"./node_modules/react-is/cjs/react-is.development.js":(l,a)=>{/** @license React v16.13.1
 * react-is.development.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */(function(){var c=typeof Symbol=="function"&&Symbol.for,d=c?Symbol.for("react.element"):60103,f=c?Symbol.for("react.portal"):60106,m=c?Symbol.for("react.fragment"):60107,y=c?Symbol.for("react.strict_mode"):60108,g=c?Symbol.for("react.profiler"):60114,v=c?Symbol.for("react.provider"):60109,w=c?Symbol.for("react.context"):60110,p=c?Symbol.for("react.async_mode"):60111,h=c?Symbol.for("react.concurrent_mode"):60111,x=c?Symbol.for("react.forward_ref"):60112,b=c?Symbol.for("react.suspense"):60113,k=c?Symbol.for("react.suspense_list"):60120,_=c?Symbol.for("react.memo"):60115,E=c?Symbol.for("react.lazy"):60116,P=c?Symbol.for("react.block"):60121,T=c?Symbol.for("react.fundamental"):60117,I=c?Symbol.for("react.responder"):60118,W=c?Symbol.for("react.scope"):60119;function A(C){return typeof C=="string"||typeof C=="function"||C===m||C===h||C===g||C===y||C===b||C===k||typeof C=="object"&&C!==null&&(C.$$typeof===E||C.$$typeof===_||C.$$typeof===v||C.$$typeof===w||C.$$typeof===x||C.$$typeof===T||C.$$typeof===I||C.$$typeof===W||C.$$typeof===P)}function D(C){if(typeof C=="object"&&C!==null){var $=C.$$typeof;switch($){case d:var N=C.type;switch(N){case p:case h:case m:case g:case y:case b:return N;default:var V=N&&N.$$typeof;switch(V){case w:case x:case E:case _:case v:return V;default:return $}}case f:return $}}}var q=p,ee=h,te=w,xe=v,z=d,Q=x,Y=m,de=E,re=_,Oe=f,be=g,Ue=y,me=b,Se=!1;function et(C){return Se||(Se=!0,console.warn("The ReactIs.isAsyncMode() alias has been deprecated, and will be removed in React 17+. Update your code to use ReactIs.isConcurrentMode() instead. It has the exact same API.")),yt(C)||D(C)===p}function yt(C){return D(C)===h}function F(C){return D(C)===w}function B(C){return D(C)===v}function ie(C){return typeof C=="object"&&C!==null&&C.$$typeof===d}function se(C){return D(C)===x}function ne(C){return D(C)===m}function le(C){return D(C)===E}function ae(C){return D(C)===_}function ue(C){return D(C)===f}function pe(C){return D(C)===g}function S(C){return D(C)===y}function O(C){return D(C)===b}a.AsyncMode=q,a.ConcurrentMode=ee,a.ContextConsumer=te,a.ContextProvider=xe,a.Element=z,a.ForwardRef=Q,a.Fragment=Y,a.Lazy=de,a.Memo=re,a.Portal=Oe,a.Profiler=be,a.StrictMode=Ue,a.Suspense=me,a.isAsyncMode=et,a.isConcurrentMode=yt,a.isContextConsumer=F,a.isContextProvider=B,a.isElement=ie,a.isForwardRef=se,a.isFragment=ne,a.isLazy=le,a.isMemo=ae,a.isPortal=ue,a.isProfiler=pe,a.isStrictMode=S,a.isSuspense=O,a.isValidElementType=A,a.typeOf=D})()},"./node_modules/react-is/index.js":(l,a,c)=>{l.exports=c("./node_modules/react-is/cjs/react-is.development.js")},"./node_modules/shallow-equal/dist/index.esm.js":(l,a,c)=>{c.r(a),c.d(a,{shallowEqualArrays:()=>f,shallowEqualObjects:()=>d});function d(m,y){if(m===y)return!0;if(!m||!y)return!1;var g=Object.keys(m),v=Object.keys(y),w=g.length;if(v.length!==w)return!1;for(var p=0;p<w;p++){var h=g[p];if(m[h]!==y[h]||!Object.prototype.hasOwnProperty.call(y,h))return!1}return!0}function f(m,y){if(m===y)return!0;if(!m||!y)return!1;var g=m.length;if(y.length!==g)return!1;for(var v=0;v<g;v++)if(m[v]!==y[v])return!1;return!0}},"./src/Component.ts":function(l,a,c){var d=this&&this.__rest||function(g,v){var w={};for(var p in g)Object.prototype.hasOwnProperty.call(g,p)&&v.indexOf(p)<0&&(w[p]=g[p]);if(g!=null&&typeof Object.getOwnPropertySymbols=="function")for(var h=0,p=Object.getOwnPropertySymbols(g);h<p.length;h++)v.indexOf(p[h])<0&&Object.prototype.propertyIsEnumerable.call(g,p[h])&&(w[p[h]]=g[p[h]]);return w},f=this&&this.__importDefault||function(g){return g&&g.__esModule?g:{default:g}};Object.defineProperty(a,"__esModule",{value:!0});var m=f(c("./src/useMediaQuery.ts")),y=function(g){var v=g.children,w=g.device,p=g.onChange,h=d(g,["children","device","onChange"]),x=(0,m.default)(h,w,p);return typeof v=="function"?v(x):x?v:null};a.default=y},"./src/Context.ts":(l,a,c)=>{Object.defineProperty(a,"__esModule",{value:!0});var d=c("react"),f=(0,d.createContext)(void 0);a.default=f},"./src/index.ts":function(l,a,c){var d=this&&this.__importDefault||function(v){return v&&v.__esModule?v:{default:v}};Object.defineProperty(a,"__esModule",{value:!0}),a.Context=a.toQuery=a.useMediaQuery=a.default=void 0;var f=d(c("./src/useMediaQuery.ts"));a.useMediaQuery=f.default;var m=d(c("./src/Component.ts"));a.default=m.default;var y=d(c("./src/toQuery.ts"));a.toQuery=y.default;var g=d(c("./src/Context.ts"));a.Context=g.default},"./src/mediaQuery.ts":function(l,a,c){var d=this&&this.__assign||function(){return d=Object.assign||function(b){for(var k,_=1,E=arguments.length;_<E;_++){k=arguments[_];for(var P in k)Object.prototype.hasOwnProperty.call(k,P)&&(b[P]=k[P])}return b},d.apply(this,arguments)},f=this&&this.__rest||function(b,k){var _={};for(var E in b)Object.prototype.hasOwnProperty.call(b,E)&&k.indexOf(E)<0&&(_[E]=b[E]);if(b!=null&&typeof Object.getOwnPropertySymbols=="function")for(var P=0,E=Object.getOwnPropertySymbols(b);P<E.length;P++)k.indexOf(E[P])<0&&Object.prototype.propertyIsEnumerable.call(b,E[P])&&(_[E[P]]=b[E[P]]);return _},m=this&&this.__importDefault||function(b){return b&&b.__esModule?b:{default:b}};Object.defineProperty(a,"__esModule",{value:!0});var y=m(c("./node_modules/prop-types/index.js")),g=y.default.oneOfType([y.default.string,y.default.number]),v={all:y.default.bool,grid:y.default.bool,aural:y.default.bool,braille:y.default.bool,handheld:y.default.bool,print:y.default.bool,projection:y.default.bool,screen:y.default.bool,tty:y.default.bool,tv:y.default.bool,embossed:y.default.bool},w={orientation:y.default.oneOf(["portrait","landscape"]),scan:y.default.oneOf(["progressive","interlace"]),aspectRatio:y.default.string,deviceAspectRatio:y.default.string,height:g,deviceHeight:g,width:g,deviceWidth:g,color:y.default.bool,colorIndex:y.default.bool,monochrome:y.default.bool,resolution:g,type:Object.keys(v)};w.type;var p=f(w,["type"]),h=d({minAspectRatio:y.default.string,maxAspectRatio:y.default.string,minDeviceAspectRatio:y.default.string,maxDeviceAspectRatio:y.default.string,minHeight:g,maxHeight:g,minDeviceHeight:g,maxDeviceHeight:g,minWidth:g,maxWidth:g,minDeviceWidth:g,maxDeviceWidth:g,minColor:y.default.number,maxColor:y.default.number,minColorIndex:y.default.number,maxColorIndex:y.default.number,minMonochrome:y.default.number,maxMonochrome:y.default.number,minResolution:g,maxResolution:g},p),x=d(d({},v),h);a.default={all:x,types:v,matchers:w,features:h}},"./src/toQuery.ts":function(l,a,c){var d=this&&this.__importDefault||function(p){return p&&p.__esModule?p:{default:p}};Object.defineProperty(a,"__esModule",{value:!0});var f=d(c("./node_modules/hyphenate-style-name/index.js")),m=d(c("./src/mediaQuery.ts")),y=function(p){return"not ".concat(p)},g=function(p,h){var x=(0,f.default)(p);return typeof h=="number"&&(h="".concat(h,"px")),h===!0?x:h===!1?y(x):"(".concat(x,": ").concat(h,")")},v=function(p){return p.join(" and ")},w=function(p){var h=[];return Object.keys(m.default.all).forEach(function(x){var b=p[x];b!=null&&h.push(g(x,b))}),v(h)};a.default=w},"./src/useMediaQuery.ts":function(l,a,c){var d=this&&this.__importDefault||function(T){return T&&T.__esModule?T:{default:T}};Object.defineProperty(a,"__esModule",{value:!0});var f=c("react"),m=d(c("./node_modules/matchmediaquery/index.js")),y=d(c("./node_modules/hyphenate-style-name/index.js")),g=c("./node_modules/shallow-equal/dist/index.esm.js"),v=d(c("./src/toQuery.ts")),w=d(c("./src/Context.ts")),p=function(T){return T.query||(0,v.default)(T)},h=function(T){if(T){var I=Object.keys(T);return I.reduce(function(W,A){return W[(0,y.default)(A)]=T[A],W},{})}},x=function(){var T=(0,f.useRef)(!1);return(0,f.useEffect)(function(){T.current=!0},[]),T.current},b=function(T){var I=(0,f.useContext)(w.default),W=function(){return h(T)||h(I)},A=(0,f.useState)(W),D=A[0],q=A[1];return(0,f.useEffect)(function(){var ee=W();(0,g.shallowEqualObjects)(D,ee)||q(ee)},[T,I]),D},k=function(T){var I=function(){return p(T)},W=(0,f.useState)(I),A=W[0],D=W[1];return(0,f.useEffect)(function(){var q=I();A!==q&&D(q)},[T]),A},_=function(T,I){var W=function(){return(0,m.default)(T,I||{},!!I)},A=(0,f.useState)(W),D=A[0],q=A[1],ee=x();return(0,f.useEffect)(function(){if(ee){var te=W();return q(te),function(){te&&te.dispose()}}},[T,I]),D},E=function(T){var I=(0,f.useState)(T.matches),W=I[0],A=I[1];return(0,f.useEffect)(function(){var D=function(q){A(q.matches)};return T.addListener(D),A(T.matches),function(){T.removeListener(D)}},[T]),W},P=function(T,I,W){var A=b(I),D=k(T);if(!D)throw new Error("Invalid or missing MediaQuery!");var q=_(D,A),ee=E(q),te=x();return(0,f.useEffect)(function(){te&&W&&W(ee)},[ee]),(0,f.useEffect)(function(){return function(){q&&q.dispose()}},[]),ee};a.default=P},react:l=>{l.exports=n}},i={};function o(l){var a=i[l];if(a!==void 0)return a.exports;var c=i[l]={exports:{}};return r[l].call(c.exports,c,c.exports,o),c.exports}o.d=(l,a)=>{for(var c in a)o.o(a,c)&&!o.o(l,c)&&Object.defineProperty(l,c,{enumerable:!0,get:a[c]})},o.o=(l,a)=>Object.prototype.hasOwnProperty.call(l,a),o.r=l=>{typeof Symbol<"u"&&Symbol.toStringTag&&Object.defineProperty(l,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(l,"__esModule",{value:!0})};var s=o("./src/index.ts");return s})())})(vg);var gn=vg.exports;const oe=ao(gn),Hy="/healthy-management-project/assets/olga_picture1x-6T0pnRyH.webp",Qy="/healthy-management-project/assets/olga_picture2x-4JmA7wGC.webp",Yy="/healthy-management-project/assets/olga_picture1x-ohcXIDw6.jpg",Ky="/healthy-management-project/assets/mob_olga_picture1x-PQXysebb.jpg",Gy="/healthy-management-project/assets/mob_olga_picture1x-1fPtYEvT.webp",Xy="/healthy-management-project/assets/mob_olga_picture2x-VJcRD770.webp",qy="/healthy-management-project/assets/olga_picture@1x-V6xBvkB4.jpg",Jy="/healthy-management-project/assets/olga_picture@1x-UUwfpH5W.webp",Zy="/healthy-management-project/assets/olga_picture@2x-MWfGyCra.webp",e1="/healthy-management-project/assets/olga_picture@1x-rIS7rOGv.jpg",t1="/healthy-management-project/assets/olga_picture@1x-aIsvHdrL.webp",n1="/healthy-management-project/assets/olga_picture@2x-3sK8O0o2.webp",K="/healthy-management-project/assets/sprite-IHRcLKoZ.svg";function J(){return J=Object.assign?Object.assign.bind():function(e){for(var t=1;t<arguments.length;t++){var n=arguments[t];for(var r in n)Object.prototype.hasOwnProperty.call(n,r)&&(e[r]=n[r])}return e},J.apply(this,arguments)}function xg(e){var t=Object.create(null);return function(n){return t[n]===void 0&&(t[n]=e(n)),t[n]}}var r1=/^((children|dangerouslySetInnerHTML|key|ref|autoFocus|defaultValue|defaultChecked|innerHTML|suppressContentEditableWarning|suppressHydrationWarning|valueLink|abbr|accept|acceptCharset|accessKey|action|allow|allowUserMedia|allowPaymentRequest|allowFullScreen|allowTransparency|alt|async|autoComplete|autoPlay|capture|cellPadding|cellSpacing|challenge|charSet|checked|cite|classID|className|cols|colSpan|content|contentEditable|contextMenu|controls|controlsList|coords|crossOrigin|data|dateTime|decoding|default|defer|dir|disabled|disablePictureInPicture|download|draggable|encType|enterKeyHint|form|formAction|formEncType|formMethod|formNoValidate|formTarget|frameBorder|headers|height|hidden|high|href|hrefLang|htmlFor|httpEquiv|id|inputMode|integrity|is|keyParams|keyType|kind|label|lang|list|loading|loop|low|marginHeight|marginWidth|max|maxLength|media|mediaGroup|method|min|minLength|multiple|muted|name|nonce|noValidate|open|optimum|pattern|placeholder|playsInline|poster|preload|profile|radioGroup|readOnly|referrerPolicy|rel|required|reversed|role|rows|rowSpan|sandbox|scope|scoped|scrolling|seamless|selected|shape|size|sizes|slot|span|spellCheck|src|srcDoc|srcLang|srcSet|start|step|style|summary|tabIndex|target|title|translate|type|useMap|value|width|wmode|wrap|about|datatype|inlist|prefix|property|resource|typeof|vocab|autoCapitalize|autoCorrect|autoSave|color|incremental|fallback|inert|itemProp|itemScope|itemType|itemID|itemRef|on|option|results|security|unselectable|accentHeight|accumulate|additive|alignmentBaseline|allowReorder|alphabetic|amplitude|arabicForm|ascent|attributeName|attributeType|autoReverse|azimuth|baseFrequency|baselineShift|baseProfile|bbox|begin|bias|by|calcMode|capHeight|clip|clipPathUnits|clipPath|clipRule|colorInterpolation|colorInterpolationFilters|colorProfile|colorRendering|contentScriptType|contentStyleType|cursor|cx|cy|d|decelerate|descent|diffuseConstant|direction|display|divisor|dominantBaseline|dur|dx|dy|edgeMode|elevation|enableBackground|end|exponent|externalResourcesRequired|fill|fillOpacity|fillRule|filter|filterRes|filterUnits|floodColor|floodOpacity|focusable|fontFamily|fontSize|fontSizeAdjust|fontStretch|fontStyle|fontVariant|fontWeight|format|from|fr|fx|fy|g1|g2|glyphName|glyphOrientationHorizontal|glyphOrientationVertical|glyphRef|gradientTransform|gradientUnits|hanging|horizAdvX|horizOriginX|ideographic|imageRendering|in|in2|intercept|k|k1|k2|k3|k4|kernelMatrix|kernelUnitLength|kerning|keyPoints|keySplines|keyTimes|lengthAdjust|letterSpacing|lightingColor|limitingConeAngle|local|markerEnd|markerMid|markerStart|markerHeight|markerUnits|markerWidth|mask|maskContentUnits|maskUnits|mathematical|mode|numOctaves|offset|opacity|operator|order|orient|orientation|origin|overflow|overlinePosition|overlineThickness|panose1|paintOrder|pathLength|patternContentUnits|patternTransform|patternUnits|pointerEvents|points|pointsAtX|pointsAtY|pointsAtZ|preserveAlpha|preserveAspectRatio|primitiveUnits|r|radius|refX|refY|renderingIntent|repeatCount|repeatDur|requiredExtensions|requiredFeatures|restart|result|rotate|rx|ry|scale|seed|shapeRendering|slope|spacing|specularConstant|specularExponent|speed|spreadMethod|startOffset|stdDeviation|stemh|stemv|stitchTiles|stopColor|stopOpacity|strikethroughPosition|strikethroughThickness|string|stroke|strokeDasharray|strokeDashoffset|strokeLinecap|strokeLinejoin|strokeMiterlimit|strokeOpacity|strokeWidth|surfaceScale|systemLanguage|tableValues|targetX|targetY|textAnchor|textDecoration|textRendering|textLength|to|transform|u1|u2|underlinePosition|underlineThickness|unicode|unicodeBidi|unicodeRange|unitsPerEm|vAlphabetic|vHanging|vIdeographic|vMathematical|values|vectorEffect|version|vertAdvY|vertOriginX|vertOriginY|viewBox|viewTarget|visibility|widths|wordSpacing|writingMode|x|xHeight|x1|x2|xChannelSelector|xlinkActuate|xlinkArcrole|xlinkHref|xlinkRole|xlinkShow|xlinkTitle|xlinkType|xmlBase|xmlns|xmlnsXlink|xmlLang|xmlSpace|y|y1|y2|yChannelSelector|z|zoomAndPan|for|class|autofocus)|(([Dd][Aa][Tt][Aa]|[Aa][Rr][Ii][Aa]|x)-.*))$/,i1=xg(function(e){return r1.test(e)||e.charCodeAt(0)===111&&e.charCodeAt(1)===110&&e.charCodeAt(2)<91});function o1(e){if(e.sheet)return e.sheet;for(var t=0;t<document.styleSheets.length;t++)if(document.styleSheets[t].ownerNode===e)return document.styleSheets[t]}function s1(e){var t=document.createElement("style");return t.setAttribute("data-emotion",e.key),e.nonce!==void 0&&t.setAttribute("nonce",e.nonce),t.appendChild(document.createTextNode("")),t.setAttribute("data-s",""),t}var a1=function(){function e(n){var r=this;this._insertTag=function(i){var o;r.tags.length===0?r.insertionPoint?o=r.insertionPoint.nextSibling:r.prepend?o=r.container.firstChild:o=r.before:o=r.tags[r.tags.length-1].nextSibling,r.container.insertBefore(i,o),r.tags.push(i)},this.isSpeedy=n.speedy===void 0?!0:n.speedy,this.tags=[],this.ctr=0,this.nonce=n.nonce,this.key=n.key,this.container=n.container,this.prepend=n.prepend,this.insertionPoint=n.insertionPoint,this.before=null}var t=e.prototype;return t.hydrate=function(r){r.forEach(this._insertTag)},t.insert=function(r){this.ctr%(this.isSpeedy?65e3:1)===0&&this._insertTag(s1(this));var i=this.tags[this.tags.length-1];if(this.isSpeedy){var o=o1(i);try{o.insertRule(r,o.cssRules.length)}catch{}}else i.appendChild(document.createTextNode(r));this.ctr++},t.flush=function(){this.tags.forEach(function(r){return r.parentNode&&r.parentNode.removeChild(r)}),this.tags=[],this.ctr=0},e}(),rt="-ms-",Bs="-moz-",ge="-webkit-",yg="comm",Qc="rule",Yc="decl",l1="@import",wg="@keyframes",u1="@layer",c1=Math.abs,wa=String.fromCharCode,d1=Object.assign;function f1(e,t){return qe(e,0)^45?(((t<<2^qe(e,0))<<2^qe(e,1))<<2^qe(e,2))<<2^qe(e,3):0}function bg(e){return e.trim()}function p1(e,t){return(e=t.exec(e))?e[0]:e}function ve(e,t,n){return e.replace(t,n)}function Au(e,t){return e.indexOf(t)}function qe(e,t){return e.charCodeAt(t)|0}function no(e,t,n){return e.slice(t,n)}function Jt(e){return e.length}function Kc(e){return e.length}function zo(e,t){return t.push(e),e}function h1(e,t){return e.map(t).join("")}var ba=1,Jr=1,Sg=0,xt=0,Ve=0,ri="";function Sa(e,t,n,r,i,o,s){return{value:e,root:t,parent:n,type:r,props:i,children:o,line:ba,column:Jr,length:s,return:""}}function pi(e,t){return d1(Sa("",null,null,"",null,null,0),e,{length:-e.length},t)}function m1(){return Ve}function g1(){return Ve=xt>0?qe(ri,--xt):0,Jr--,Ve===10&&(Jr=1,ba--),Ve}function kt(){return Ve=xt<Sg?qe(ri,xt++):0,Jr++,Ve===10&&(Jr=1,ba++),Ve}function an(){return qe(ri,xt)}function us(){return xt}function mo(e,t){return no(ri,e,t)}function ro(e){switch(e){case 0:case 9:case 10:case 13:case 32:return 5;case 33:case 43:case 44:case 47:case 62:case 64:case 126:case 59:case 123:case 125:return 4;case 58:return 3;case 34:case 39:case 40:case 91:return 2;case 41:case 93:return 1}return 0}function kg(e){return ba=Jr=1,Sg=Jt(ri=e),xt=0,[]}function jg(e){return ri="",e}function cs(e){return bg(mo(xt-1,Fu(e===91?e+2:e===40?e+1:e)))}function v1(e){for(;(Ve=an())&&Ve<33;)kt();return ro(e)>2||ro(Ve)>3?"":" "}function x1(e,t){for(;--t&&kt()&&!(Ve<48||Ve>102||Ve>57&&Ve<65||Ve>70&&Ve<97););return mo(e,us()+(t<6&&an()==32&&kt()==32))}function Fu(e){for(;kt();)switch(Ve){case e:return xt;case 34:case 39:e!==34&&e!==39&&Fu(Ve);break;case 40:e===41&&Fu(e);break;case 92:kt();break}return xt}function y1(e,t){for(;kt()&&e+Ve!==57;)if(e+Ve===84&&an()===47)break;return"/*"+mo(t,xt-1)+"*"+wa(e===47?e:kt())}function w1(e){for(;!ro(an());)kt();return mo(e,xt)}function b1(e){return jg(ds("",null,null,null,[""],e=kg(e),0,[0],e))}function ds(e,t,n,r,i,o,s,l,a){for(var c=0,d=0,f=s,m=0,y=0,g=0,v=1,w=1,p=1,h=0,x="",b=i,k=o,_=r,E=x;w;)switch(g=h,h=kt()){case 40:if(g!=108&&qe(E,f-1)==58){Au(E+=ve(cs(h),"&","&\f"),"&\f")!=-1&&(p=-1);break}case 34:case 39:case 91:E+=cs(h);break;case 9:case 10:case 13:case 32:E+=v1(g);break;case 92:E+=x1(us()-1,7);continue;case 47:switch(an()){case 42:case 47:zo(S1(y1(kt(),us()),t,n),a);break;default:E+="/"}break;case 123*v:l[c++]=Jt(E)*p;case 125*v:case 59:case 0:switch(h){case 0:case 125:w=0;case 59+d:p==-1&&(E=ve(E,/\f/g,"")),y>0&&Jt(E)-f&&zo(y>32?Lf(E+";",r,n,f-1):Lf(ve(E," ","")+";",r,n,f-2),a);break;case 59:E+=";";default:if(zo(_=Df(E,t,n,c,d,i,l,x,b=[],k=[],f),o),h===123)if(d===0)ds(E,t,_,_,b,o,f,l,k);else switch(m===99&&qe(E,3)===110?100:m){case 100:case 108:case 109:case 115:ds(e,_,_,r&&zo(Df(e,_,_,0,0,i,l,x,i,b=[],f),k),i,k,f,l,r?b:k);break;default:ds(E,_,_,_,[""],k,0,l,k)}}c=d=y=0,v=p=1,x=E="",f=s;break;case 58:f=1+Jt(E),y=g;default:if(v<1){if(h==123)--v;else if(h==125&&v++==0&&g1()==125)continue}switch(E+=wa(h),h*v){case 38:p=d>0?1:(E+="\f",-1);break;case 44:l[c++]=(Jt(E)-1)*p,p=1;break;case 64:an()===45&&(E+=cs(kt())),m=an(),d=f=Jt(x=E+=w1(us())),h++;break;case 45:g===45&&Jt(E)==2&&(v=0)}}return o}function Df(e,t,n,r,i,o,s,l,a,c,d){for(var f=i-1,m=i===0?o:[""],y=Kc(m),g=0,v=0,w=0;g<r;++g)for(var p=0,h=no(e,f+1,f=c1(v=s[g])),x=e;p<y;++p)(x=bg(v>0?m[p]+" "+h:ve(h,/&\f/g,m[p])))&&(a[w++]=x);return Sa(e,t,n,i===0?Qc:l,a,c,d)}function S1(e,t,n){return Sa(e,t,n,yg,wa(m1()),no(e,2,-2),0)}function Lf(e,t,n,r){return Sa(e,t,n,Yc,no(e,0,r),no(e,r+1,-1),r)}function Br(e,t){for(var n="",r=Kc(e),i=0;i<r;i++)n+=t(e[i],i,e,t)||"";return n}function k1(e,t,n,r){switch(e.type){case u1:if(e.children.length)break;case l1:case Yc:return e.return=e.return||e.value;case yg:return"";case wg:return e.return=e.value+"{"+Br(e.children,r)+"}";case Qc:e.value=e.props.join(",")}return Jt(n=Br(e.children,r))?e.return=e.value+"{"+n+"}":""}function j1(e){var t=Kc(e);return function(n,r,i,o){for(var s="",l=0;l<t;l++)s+=e[l](n,r,i,o)||"";return s}}function C1(e){return function(t){t.root||(t=t.return)&&e(t)}}var E1=function(t,n,r){for(var i=0,o=0;i=o,o=an(),i===38&&o===12&&(n[r]=1),!ro(o);)kt();return mo(t,xt)},O1=function(t,n){var r=-1,i=44;do switch(ro(i)){case 0:i===38&&an()===12&&(n[r]=1),t[r]+=E1(xt-1,n,r);break;case 2:t[r]+=cs(i);break;case 4:if(i===44){t[++r]=an()===58?"&\f":"",n[r]=t[r].length;break}default:t[r]+=wa(i)}while(i=kt());return t},_1=function(t,n){return jg(O1(kg(t),n))},Af=new WeakMap,P1=function(t){if(!(t.type!=="rule"||!t.parent||t.length<1)){for(var n=t.value,r=t.parent,i=t.column===r.column&&t.line===r.line;r.type!=="rule";)if(r=r.parent,!r)return;if(!(t.props.length===1&&n.charCodeAt(0)!==58&&!Af.get(r))&&!i){Af.set(t,!0);for(var o=[],s=_1(n,o),l=r.props,a=0,c=0;a<s.length;a++)for(var d=0;d<l.length;d++,c++)t.props[c]=o[a]?s[a].replace(/&\f/g,l[d]):l[d]+" "+s[a]}}},T1=function(t){if(t.type==="decl"){var n=t.value;n.charCodeAt(0)===108&&n.charCodeAt(2)===98&&(t.return="",t.value="")}};function Cg(e,t){switch(f1(e,t)){case 5103:return ge+"print-"+e+e;case 5737:case 4201:case 3177:case 3433:case 1641:case 4457:case 2921:case 5572:case 6356:case 5844:case 3191:case 6645:case 3005:case 6391:case 5879:case 5623:case 6135:case 4599:case 4855:case 4215:case 6389:case 5109:case 5365:case 5621:case 3829:return ge+e+e;case 5349:case 4246:case 4810:case 6968:case 2756:return ge+e+Bs+e+rt+e+e;case 6828:case 4268:return ge+e+rt+e+e;case 6165:return ge+e+rt+"flex-"+e+e;case 5187:return ge+e+ve(e,/(\w+).+(:[^]+)/,ge+"box-$1$2"+rt+"flex-$1$2")+e;case 5443:return ge+e+rt+"flex-item-"+ve(e,/flex-|-self/,"")+e;case 4675:return ge+e+rt+"flex-line-pack"+ve(e,/align-content|flex-|-self/,"")+e;case 5548:return ge+e+rt+ve(e,"shrink","negative")+e;case 5292:return ge+e+rt+ve(e,"basis","preferred-size")+e;case 6060:return ge+"box-"+ve(e,"-grow","")+ge+e+rt+ve(e,"grow","positive")+e;case 4554:return ge+ve(e,/([^-])(transform)/g,"$1"+ge+"$2")+e;case 6187:return ve(ve(ve(e,/(zoom-|grab)/,ge+"$1"),/(image-set)/,ge+"$1"),e,"")+e;case 5495:case 3959:return ve(e,/(image-set\([^]*)/,ge+"$1$`$1");case 4968:return ve(ve(e,/(.+:)(flex-)?(.*)/,ge+"box-pack:$3"+rt+"flex-pack:$3"),/s.+-b[^;]+/,"justify")+ge+e+e;case 4095:case 3583:case 4068:case 2532:return ve(e,/(.+)-inline(.+)/,ge+"$1$2")+e;case 8116:case 7059:case 5753:case 5535:case 5445:case 5701:case 4933:case 4677:case 5533:case 5789:case 5021:case 4765:if(Jt(e)-1-t>6)switch(qe(e,t+1)){case 109:if(qe(e,t+4)!==45)break;case 102:return ve(e,/(.+:)(.+)-([^]+)/,"$1"+ge+"$2-$3$1"+Bs+(qe(e,t+3)==108?"$3":"$2-$3"))+e;case 115:return~Au(e,"stretch")?Cg(ve(e,"stretch","fill-available"),t)+e:e}break;case 4949:if(qe(e,t+1)!==115)break;case 6444:switch(qe(e,Jt(e)-3-(~Au(e,"!important")&&10))){case 107:return ve(e,":",":"+ge)+e;case 101:return ve(e,/(.+:)([^;!]+)(;|!.+)?/,"$1"+ge+(qe(e,14)===45?"inline-":"")+"box$3$1"+ge+"$2$3$1"+rt+"$2box$3")+e}break;case 5936:switch(qe(e,t+11)){case 114:return ge+e+rt+ve(e,/[svh]\w+-[tblr]{2}/,"tb")+e;case 108:return ge+e+rt+ve(e,/[svh]\w+-[tblr]{2}/,"tb-rl")+e;case 45:return ge+e+rt+ve(e,/[svh]\w+-[tblr]{2}/,"lr")+e}return ge+e+rt+e+e}return e}var M1=function(t,n,r,i){if(t.length>-1&&!t.return)switch(t.type){case Yc:t.return=Cg(t.value,t.length);break;case wg:return Br([pi(t,{value:ve(t.value,"@","@"+ge)})],i);case Qc:if(t.length)return h1(t.props,function(o){switch(p1(o,/(::plac\w+|:read-\w+)/)){case":read-only":case":read-write":return Br([pi(t,{props:[ve(o,/:(read-\w+)/,":"+Bs+"$1")]})],i);case"::placeholder":return Br([pi(t,{props:[ve(o,/:(plac\w+)/,":"+ge+"input-$1")]}),pi(t,{props:[ve(o,/:(plac\w+)/,":"+Bs+"$1")]}),pi(t,{props:[ve(o,/:(plac\w+)/,rt+"input-$1")]})],i)}return""})}},R1=[M1],I1=function(t){var n=t.key;if(n==="css"){var r=document.querySelectorAll("style[data-emotion]:not([data-s])");Array.prototype.forEach.call(r,function(v){var w=v.getAttribute("data-emotion");w.indexOf(" ")!==-1&&(document.head.appendChild(v),v.setAttribute("data-s",""))})}var i=t.stylisPlugins||R1,o={},s,l=[];s=t.container||document.head,Array.prototype.forEach.call(document.querySelectorAll('style[data-emotion^="'+n+' "]'),function(v){for(var w=v.getAttribute("data-emotion").split(" "),p=1;p<w.length;p++)o[w[p]]=!0;l.push(v)});var a,c=[P1,T1];{var d,f=[k1,C1(function(v){d.insert(v)})],m=j1(c.concat(i,f)),y=function(w){return Br(b1(w),m)};a=function(w,p,h,x){d=h,y(w?w+"{"+p.styles+"}":p.styles),x&&(g.inserted[p.name]=!0)}}var g={key:n,sheet:new a1({key:n,container:s,nonce:t.nonce,speedy:t.speedy,prepend:t.prepend,insertionPoint:t.insertionPoint}),nonce:t.nonce,inserted:o,registered:{},insert:a};return g.sheet.hydrate(l),g},Eg={exports:{}},we={};/** @license React v16.13.1
 * react-is.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */var Ke=typeof Symbol=="function"&&Symbol.for,Gc=Ke?Symbol.for("react.element"):60103,Xc=Ke?Symbol.for("react.portal"):60106,ka=Ke?Symbol.for("react.fragment"):60107,ja=Ke?Symbol.for("react.strict_mode"):60108,Ca=Ke?Symbol.for("react.profiler"):60114,Ea=Ke?Symbol.for("react.provider"):60109,Oa=Ke?Symbol.for("react.context"):60110,qc=Ke?Symbol.for("react.async_mode"):60111,_a=Ke?Symbol.for("react.concurrent_mode"):60111,Pa=Ke?Symbol.for("react.forward_ref"):60112,Ta=Ke?Symbol.for("react.suspense"):60113,D1=Ke?Symbol.for("react.suspense_list"):60120,Ma=Ke?Symbol.for("react.memo"):60115,Ra=Ke?Symbol.for("react.lazy"):60116,L1=Ke?Symbol.for("react.block"):60121,A1=Ke?Symbol.for("react.fundamental"):60117,F1=Ke?Symbol.for("react.responder"):60118,z1=Ke?Symbol.for("react.scope"):60119;function _t(e){if(typeof e=="object"&&e!==null){var t=e.$$typeof;switch(t){case Gc:switch(e=e.type,e){case qc:case _a:case ka:case Ca:case ja:case Ta:return e;default:switch(e=e&&e.$$typeof,e){case Oa:case Pa:case Ra:case Ma:case Ea:return e;default:return t}}case Xc:return t}}}function Og(e){return _t(e)===_a}we.AsyncMode=qc;we.ConcurrentMode=_a;we.ContextConsumer=Oa;we.ContextProvider=Ea;we.Element=Gc;we.ForwardRef=Pa;we.Fragment=ka;we.Lazy=Ra;we.Memo=Ma;we.Portal=Xc;we.Profiler=Ca;we.StrictMode=ja;we.Suspense=Ta;we.isAsyncMode=function(e){return Og(e)||_t(e)===qc};we.isConcurrentMode=Og;we.isContextConsumer=function(e){return _t(e)===Oa};we.isContextProvider=function(e){return _t(e)===Ea};we.isElement=function(e){return typeof e=="object"&&e!==null&&e.$$typeof===Gc};we.isForwardRef=function(e){return _t(e)===Pa};we.isFragment=function(e){return _t(e)===ka};we.isLazy=function(e){return _t(e)===Ra};we.isMemo=function(e){return _t(e)===Ma};we.isPortal=function(e){return _t(e)===Xc};we.isProfiler=function(e){return _t(e)===Ca};we.isStrictMode=function(e){return _t(e)===ja};we.isSuspense=function(e){return _t(e)===Ta};we.isValidElementType=function(e){return typeof e=="string"||typeof e=="function"||e===ka||e===_a||e===Ca||e===ja||e===Ta||e===D1||typeof e=="object"&&e!==null&&(e.$$typeof===Ra||e.$$typeof===Ma||e.$$typeof===Ea||e.$$typeof===Oa||e.$$typeof===Pa||e.$$typeof===A1||e.$$typeof===F1||e.$$typeof===z1||e.$$typeof===L1)};we.typeOf=_t;Eg.exports=we;var V1=Eg.exports,_g=V1,N1={$$typeof:!0,render:!0,defaultProps:!0,displayName:!0,propTypes:!0},$1={$$typeof:!0,compare:!0,defaultProps:!0,displayName:!0,propTypes:!0,type:!0},Pg={};Pg[_g.ForwardRef]=N1;Pg[_g.Memo]=$1;var U1=!0;function Tg(e,t,n){var r="";return n.split(" ").forEach(function(i){e[i]!==void 0?t.push(e[i]+";"):r+=i+" "}),r}var Jc=function(t,n,r){var i=t.key+"-"+n.name;(r===!1||U1===!1)&&t.registered[i]===void 0&&(t.registered[i]=n.styles)},Mg=function(t,n,r){Jc(t,n,r);var i=t.key+"-"+n.name;if(t.inserted[n.name]===void 0){var o=n;do t.insert(n===o?"."+i:"",o,t.sheet,!0),o=o.next;while(o!==void 0)}};function W1(e){for(var t=0,n,r=0,i=e.length;i>=4;++r,i-=4)n=e.charCodeAt(r)&255|(e.charCodeAt(++r)&255)<<8|(e.charCodeAt(++r)&255)<<16|(e.charCodeAt(++r)&255)<<24,n=(n&65535)*1540483477+((n>>>16)*59797<<16),n^=n>>>24,t=(n&65535)*1540483477+((n>>>16)*59797<<16)^(t&65535)*1540483477+((t>>>16)*59797<<16);switch(i){case 3:t^=(e.charCodeAt(r+2)&255)<<16;case 2:t^=(e.charCodeAt(r+1)&255)<<8;case 1:t^=e.charCodeAt(r)&255,t=(t&65535)*1540483477+((t>>>16)*59797<<16)}return t^=t>>>13,t=(t&65535)*1540483477+((t>>>16)*59797<<16),((t^t>>>15)>>>0).toString(36)}var B1={animationIterationCount:1,aspectRatio:1,borderImageOutset:1,borderImageSlice:1,borderImageWidth:1,boxFlex:1,boxFlexGroup:1,boxOrdinalGroup:1,columnCount:1,columns:1,flex:1,flexGrow:1,flexPositive:1,flexShrink:1,flexNegative:1,flexOrder:1,gridRow:1,gridRowEnd:1,gridRowSpan:1,gridRowStart:1,gridColumn:1,gridColumnEnd:1,gridColumnSpan:1,gridColumnStart:1,msGridRow:1,msGridRowSpan:1,msGridColumn:1,msGridColumnSpan:1,fontWeight:1,lineHeight:1,opacity:1,order:1,orphans:1,tabSize:1,widows:1,zIndex:1,zoom:1,WebkitLineClamp:1,fillOpacity:1,floodOpacity:1,stopOpacity:1,strokeDasharray:1,strokeDashoffset:1,strokeMiterlimit:1,strokeOpacity:1,strokeWidth:1},H1=/[A-Z]|^ms/g,Q1=/_EMO_([^_]+?)_([^]*?)_EMO_/g,Rg=function(t){return t.charCodeAt(1)===45},Ff=function(t){return t!=null&&typeof t!="boolean"},ml=xg(function(e){return Rg(e)?e:e.replace(H1,"-$&").toLowerCase()}),zf=function(t,n){switch(t){case"animation":case"animationName":if(typeof n=="string")return n.replace(Q1,function(r,i,o){return Zt={name:i,styles:o,next:Zt},i})}return B1[t]!==1&&!Rg(t)&&typeof n=="number"&&n!==0?n+"px":n};function io(e,t,n){if(n==null)return"";if(n.__emotion_styles!==void 0)return n;switch(typeof n){case"boolean":return"";case"object":{if(n.anim===1)return Zt={name:n.name,styles:n.styles,next:Zt},n.name;if(n.styles!==void 0){var r=n.next;if(r!==void 0)for(;r!==void 0;)Zt={name:r.name,styles:r.styles,next:Zt},r=r.next;var i=n.styles+";";return i}return Y1(e,t,n)}case"function":{if(e!==void 0){var o=Zt,s=n(e);return Zt=o,io(e,t,s)}break}}if(t==null)return n;var l=t[n];return l!==void 0?l:n}function Y1(e,t,n){var r="";if(Array.isArray(n))for(var i=0;i<n.length;i++)r+=io(e,t,n[i])+";";else for(var o in n){var s=n[o];if(typeof s!="object")t!=null&&t[s]!==void 0?r+=o+"{"+t[s]+"}":Ff(s)&&(r+=ml(o)+":"+zf(o,s)+";");else if(Array.isArray(s)&&typeof s[0]=="string"&&(t==null||t[s[0]]===void 0))for(var l=0;l<s.length;l++)Ff(s[l])&&(r+=ml(o)+":"+zf(o,s[l])+";");else{var a=io(e,t,s);switch(o){case"animation":case"animationName":{r+=ml(o)+":"+a+";";break}default:r+=o+"{"+a+"}"}}}return r}var Vf=/label:\s*([^\s;\n{]+)\s*(;|$)/g,Zt,Zc=function(t,n,r){if(t.length===1&&typeof t[0]=="object"&&t[0]!==null&&t[0].styles!==void 0)return t[0];var i=!0,o="";Zt=void 0;var s=t[0];s==null||s.raw===void 0?(i=!1,o+=io(r,n,s)):o+=s[0];for(var l=1;l<t.length;l++)o+=io(r,n,t[l]),i&&(o+=s[l]);Vf.lastIndex=0;for(var a="",c;(c=Vf.exec(o))!==null;)a+="-"+c[1];var d=W1(o)+a;return{name:d,styles:o,next:Zt}},K1=function(t){return t()},G1=Ed.useInsertionEffect?Ed.useInsertionEffect:!1,Ig=G1||K1,ed={}.hasOwnProperty,Dg=M.createContext(typeof HTMLElement<"u"?I1({key:"css"}):null);Dg.Provider;var Lg=function(t){return M.forwardRef(function(n,r){var i=M.useContext(Dg);return t(n,i,r)})},Ag=M.createContext({}),zu="__EMOTION_TYPE_PLEASE_DO_NOT_USE__",X1=function(t,n){var r={};for(var i in n)ed.call(n,i)&&(r[i]=n[i]);return r[zu]=t,r},q1=function(t){var n=t.cache,r=t.serialized,i=t.isStringTag;return Jc(n,r,i),Ig(function(){return Mg(n,r,i)}),null},J1=Lg(function(e,t,n){var r=e.css;typeof r=="string"&&t.registered[r]!==void 0&&(r=t.registered[r]);var i=e[zu],o=[r],s="";typeof e.className=="string"?s=Tg(t.registered,o,e.className):e.className!=null&&(s=e.className+" ");var l=Zc(o,void 0,M.useContext(Ag));s+=t.key+"-"+l.name;var a={};for(var c in e)ed.call(e,c)&&c!=="css"&&c!==zu&&(a[c]=e[c]);return a.ref=n,a.className=s,M.createElement(M.Fragment,null,M.createElement(q1,{cache:t,serialized:l,isStringTag:typeof i=="string"}),M.createElement(i,a))}),Z1=J1,G=function(t,n){var r=arguments;if(n==null||!ed.call(n,"css"))return M.createElement.apply(void 0,r);var i=r.length,o=new Array(i);o[0]=Z1,o[1]=X1(t,n);for(var s=2;s<i;s++)o[s]=r[s];return M.createElement.apply(null,o)};function td(){for(var e=arguments.length,t=new Array(e),n=0;n<e;n++)t[n]=arguments[n];return Zc(t)}var ew=function(){var t=td.apply(void 0,arguments),n="animation-"+t.name;return{name:n,styles:"@keyframes "+n+"{"+t.styles+"}",anim:1,toString:function(){return"_EMO_"+this.name+"_"+this.styles+"_EMO_"}}},tw=i1,nw=function(t){return t!=="theme"},Nf=function(t){return typeof t=="string"&&t.charCodeAt(0)>96?tw:nw},$f=function(t,n,r){var i;if(n){var o=n.shouldForwardProp;i=t.__emotion_forwardProp&&o?function(s){return t.__emotion_forwardProp(s)&&o(s)}:o}return typeof i!="function"&&r&&(i=t.__emotion_forwardProp),i},rw=function(t){var n=t.cache,r=t.serialized,i=t.isStringTag;return Jc(n,r,i),Ig(function(){return Mg(n,r,i)}),null},iw=function e(t,n){var r=t.__emotion_real===t,i=r&&t.__emotion_base||t,o,s;n!==void 0&&(o=n.label,s=n.target);var l=$f(t,n,r),a=l||Nf(i),c=!a("as");return function(){var d=arguments,f=r&&t.__emotion_styles!==void 0?t.__emotion_styles.slice(0):[];if(o!==void 0&&f.push("label:"+o+";"),d[0]==null||d[0].raw===void 0)f.push.apply(f,d);else{f.push(d[0][0]);for(var m=d.length,y=1;y<m;y++)f.push(d[y],d[0][y])}var g=Lg(function(v,w,p){var h=c&&v.as||i,x="",b=[],k=v;if(v.theme==null){k={};for(var _ in v)k[_]=v[_];k.theme=M.useContext(Ag)}typeof v.className=="string"?x=Tg(w.registered,b,v.className):v.className!=null&&(x=v.className+" ");var E=Zc(f.concat(b),w.registered,k);x+=w.key+"-"+E.name,s!==void 0&&(x+=" "+s);var P=c&&l===void 0?Nf(h):a,T={};for(var I in v)c&&I==="as"||P(I)&&(T[I]=v[I]);return T.className=x,T.ref=p,M.createElement(M.Fragment,null,M.createElement(rw,{cache:w,serialized:E,isStringTag:typeof h=="string"}),M.createElement(h,T))});return g.displayName=o!==void 0?o:"Styled("+(typeof i=="string"?i:i.displayName||i.name||"Component")+")",g.defaultProps=t.defaultProps,g.__emotion_real=g,g.__emotion_base=i,g.__emotion_styles=f,g.__emotion_forwardProp=l,Object.defineProperty(g,"toString",{value:function(){return"."+s}}),g.withComponent=function(v,w){return e(v,J({},n,w,{shouldForwardProp:$f(g,w,!0)})).apply(void 0,f)},g}},ow=["a","abbr","address","area","article","aside","audio","b","base","bdi","bdo","big","blockquote","body","br","button","canvas","caption","cite","code","col","colgroup","data","datalist","dd","del","details","dfn","dialog","div","dl","dt","em","embed","fieldset","figcaption","figure","footer","form","h1","h2","h3","h4","h5","h6","head","header","hgroup","hr","html","i","iframe","img","input","ins","kbd","keygen","label","legend","li","link","main","map","mark","marquee","menu","menuitem","meta","meter","nav","noscript","object","ol","optgroup","option","output","p","param","picture","pre","progress","q","rp","rt","ruby","s","samp","script","section","select","small","source","span","strong","style","sub","summary","sup","table","tbody","td","textarea","tfoot","th","thead","time","title","tr","track","u","ul","var","video","wbr","circle","clipPath","defs","ellipse","foreignObject","g","image","line","linearGradient","mask","path","pattern","polygon","polyline","radialGradient","rect","stop","svg","text","tspan"],j=iw.bind();ow.forEach(function(e){j[e]=j(e)});const sw=j.section`
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
`,aw=j.h2`
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
`,lw=j.div`
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
`,Vo=j.img`
  border-radius: 18px;
`,uw=j.div`
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
`,cw=j.h3`
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
`,dw=j.p`
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
`,fw=j.ul`
  padding-left: 23px;
`,tr=j.li`
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
`,pw=j.ul`
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
`,gl=j.a`
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
`,vl=j.svg`
  margin-left: 10px;
`,hw=j.div`
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
`,mw=()=>u.jsx(sw,{className:"container",children:u.jsxs("div",{children:[u.jsx(aw,{children:"Про мене"}),u.jsxs(lw,{children:[u.jsxs(hw,{children:[u.jsx(oe,{maxWidth:767,children:u.jsx(Vo,{srcSet:`${Xy} 2x, ${Gy} 1x`,sizes:"(max-width: 767px) 100vw",src:Ky,alt:"Ольга Поліщук"})}),u.jsx(oe,{minWidth:768,maxWidth:1439,children:u.jsx(Vo,{srcSet:`${Zy} 2x, ${Jy} 1x`,type:"image/webp",sizes:"(min-width: 768px) 100vw (max-width: 1439px) 100vw",src:qy,alt:"Ольга Поліщук"})}),u.jsx(oe,{minWidth:1440,maxWidth:1919,children:u.jsx(Vo,{srcSet:`${n1} 2x, ${t1} 1x`,type:"image/webp",sizes:"(min-width: 1440px) 100vw (max-width: 1919px) 100vw",src:`${e1}`,alt:"Ольга Поліщук"})}),u.jsx(oe,{minWidth:1920,children:u.jsx(Vo,{srcSet:`${Qy} 2x, ${Hy} 1x`,type:"image/webp",sizes:"(min-width: 1920px) 100vw",src:Yy,alt:"Ольга Поліщук"})})]}),u.jsxs(uw,{children:[u.jsx(cw,{children:"Ольга Поліщук"}),u.jsx(dw,{children:"CEO and Founder студії стратегічного розвитку"}),u.jsxs(fw,{children:[u.jsx(tr,{children:"MBA Healthcare management"}),u.jsx(tr,{children:"Викладачка медичного маркетингу Бізнес-школа УКУ (LvBS)"}),u.jsx(tr,{children:`Експертка в "Центр Розвитку Громадського Здоров'я УКУ"`}),u.jsx(tr,{children:"Бізнес-консультантка, стратег з медичного маркетингу"}),u.jsx(tr,{children:'Керівниця проєкту "Стетоскоп" - телеграм канал про медичний менеджмент та маркетингу'}),u.jsx(tr,{children:"Більше 18 років досвіду в маркетингу та комунікаціях, з них більше 10 років досвіду в медичному та фармацевтичному бізнесі на керівних посадах"}),u.jsx(tr,{children:"Використання принципів доказової медицини"})]}),u.jsxs(pw,{children:[u.jsx("li",{children:u.jsxs(gl,{href:"https://www.instagram.com/olga_healthm/",target:"_blank",rel:"noopener noreferrer",children:["Instagram",u.jsx(vl,{width:"24",height:"24",children:u.jsx("use",{href:`${K}#icon-arrow-up-right`})})]})}),u.jsx("li",{children:u.jsxs(gl,{href:"https://www.facebook.com/olga.polishchuk.14",target:"_blank",rel:"noopener noreferrer",children:["Facebook",u.jsx(vl,{width:"24",height:"24",children:u.jsx("use",{href:`${K}#icon-arrow-up-right`})})]})}),u.jsx("li",{children:u.jsxs(gl,{href:"https://www.linkedin.com/in/olga-polishchuk-83362140/",target:"_blank",rel:"noopener noreferrer",children:["LinkedIn",u.jsx(vl,{width:"24",height:"24",children:u.jsx("use",{href:`${K}#icon-arrow-up-right`})})]})})]})]})]})]})}),gw=j.section`
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
`,vw=j.h2`
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
`,xw=j.div`
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
`,yw=j.p`
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
`,ww=j.p`
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
`,Uf=j.div`
  display: flex;
  gap: 16px;
  align-items: center;
  margin-bottom: 16px;
`,bw=j.div`
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
`,Sw=j.h4`
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
`,kw=j.div`
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
`,jw=j.h4`
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
`,Cw=j.p`
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
`,Ew=j.svg`
  fill: var(--primary-bluedark);
  border-radius: 100px;
  background: rgba(27, 54, 65, 0.2);
  width: 32px;
  height: 32px;
  padding: 3px;
`,Ow=j.svg`
  fill: var(--background-white);
  border-radius: 100px;
  background: rgba(244, 244, 246, 0.2);
  width: 32px;
  height: 32px;
  padding: 3px;
`,_w=()=>u.jsx(gw,{id:"aboutUs",className:"container",children:u.jsxs("div",{children:[u.jsx(vw,{children:"Про студію"}),u.jsxs(xw,{children:[u.jsx("div",{children:u.jsx(yw,{children:"Студія стратегічного розвитку медичних брендів «Healthy management» надає послуги медичного менеджменту, медичного маркетингу, консалтингу бізнес-процесів та створення стратегій здоров’я для підприємств та бізнесу. Ми співпрацюємо з медичними закладами, лікарями, власниками, керівниками та створюємо спільні стратегії та дії для ефективного просування та розвитку проєктів, використовуючи комплексний підхід"})}),u.jsxs(kw,{children:[u.jsxs(Uf,{children:[u.jsx(Ow,{children:u.jsx("use",{href:`${K}#icon-star`})}),u.jsx(jw,{children:"Наша місія"})]}),u.jsx(Cw,{children:"Будуємо ефективні стратегії по управлінню здоров’ям та створюємо продуктивні дії для популяризації здорового менеджменту"})]}),u.jsxs(bw,{children:[u.jsxs(Uf,{children:[u.jsx(Ew,{children:u.jsx("use",{href:`${K}#icon-star`})}),u.jsx(Sw,{children:"Наші цінності"})]}),u.jsx(ww,{children:"Повага, довіра, партнерство та експертність. Будуємо нову культуру управління здоровим менеджментом у медичній галузі"})]})]})]})}),Pw=j.section`
  padding-top: 40px;
  padding-bottom: 40px;

  @media screen and (min-width: 1920px) {
    padding-top: 80px;
    padding-bottom: 80px;
  }
`,Tw=j.div`
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
`,Mw=j.h2`
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
`,Rw=j.ul`
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
`,Iw=j.li`
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
`,Dw=[{id:1,tool:"Матриця стейкхолдерів"},{id:2,tool:"SWOT аналіз"},{id:3,tool:"Bussines model canvas"},{id:4,tool:"Value proposition canvas"},{id:5,tool:"Customer journey map"}],Lw=()=>u.jsx(Pw,{className:"container",children:u.jsxs(Tw,{children:[u.jsxs(Mw,{children:["Бізнес ",u.jsx("span",{children:"інструменти"}),", які використувуємо в партнерстві"]}),u.jsx(Rw,{children:Dw.map(e=>u.jsx(Iw,{children:e.tool},e.id))})]})});var Fg={exports:{}},Aw="SECRET_DO_NOT_PASS_THIS_OR_YOU_WILL_BE_FIRED",Fw=Aw,zw=Fw;function zg(){}function Vg(){}Vg.resetWarningCache=zg;var Vw=function(){function e(r,i,o,s,l,a){if(a!==zw){var c=new Error("Calling PropTypes validators directly is not supported by the `prop-types` package. Use PropTypes.checkPropTypes() to call them. Read more at http://fb.me/use-check-prop-types");throw c.name="Invariant Violation",c}}e.isRequired=e;function t(){return e}var n={array:e,bigint:e,bool:e,func:e,number:e,object:e,string:e,symbol:e,any:e,arrayOf:t,element:e,elementType:e,instanceOf:t,node:e,objectOf:t,oneOf:t,oneOfType:t,shape:t,exact:t,checkPropTypes:Vg,resetWarningCache:zg};return n.PropTypes=n,n};Fg.exports=Vw();var Nw=Fg.exports;const oo=ao(Nw),fs="/healthy-management-project/assets/icon-footer-MBx-ujYN.svg",$w=j.div`
  /* padding: 40px 0; */
  background-color: var(--background-bluedark);

  @media screen and (min-width: 768px) {
  }

  @media screen and (min-width: 1440px) {
  }

  @media screen and (min-width: 1920px) {
  }
`,Uw=j.div`
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
`,Wf=j.a`
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
`,Bf=j.div`
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
`,Xt=j.a`
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
`,Ww=j.div`
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
`,Bw=j.div`
  display: flex;
  align-items: flex-end;
  gap: 16px;

  /* @media screen and (min-width: 768px) {
  }

  @media screen and (min-width: 1440px) {
  } */

  /* @media screen and (min-width: 1920px) {
  } */
`,Hw=j.a`
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
`,Qw=j.div`
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
`,Hf=j.a`
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
`,Yw=j.div`
  display: flex;
  padding: 16px 24px;

  justify-content: center;
  align-items: center;
  border-top: 1px solid var(--system-default-20);
  background: var(--background-bluedark);
`,Kw=j.p`
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
`,Gw=j.div`
  position: fixed;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  background-color: rgba(0, 0, 0, 0.5);
  overflow: hidden;
  z-index: 1100;
`,Xw=j.div`
  padding: 80px;
  position: fixed;
  width: 1360px;
  border-radius: 24px;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
  background-color: white;
  z-index: 10000;
`,qw=j.div`
  height: 32px;
  display: flex;
  justify-content: space-between;
  margin-bottom: 40px;
`,Jw=j.svg`
  width: 24px;
  cursor: pointer;
`,Zw=j.h2`
  font-size: 24px;
  font-weight: 600;
  line-height: 32px;
  color: var(--typography-bluedark);
`,eb=j.ul`
  display: flex;
  flex-wrap: wrap;
  gap: 24px;
`,On=j.li`
  width: 282px;
  padding: 24px;
  gap: 16px;

  border-radius: 16px;
  background: var(--background-bluedark);
  box-shadow: 0px 0px 8px 0px rgba(27, 54, 65, 0.08);
`,_n=j.h3`
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
`,Pn=j.p`
  display: flex;
  justify-content: center;

  font-size: 14px;
  font-weight: 500;
  line-height: 18px;
  color: var(--typography-white);
`,Tn=j.div`
  gap: 16px;
  display: flex;
  flex-direction: column;
  justify-content: center;
`,Mn=j.div`
  display: flex;
  flex-direction: column;
  gap: 8px;
`,Rn=j.div`
  border-radius: 8px;
  overflow: hidden;
`,In=j.img`
  border-radius: 8px;

  &:hover {
    transform: scale(1.1);
    border-radius: 8px;
  }
`,Qf="/healthy-management-project/assets/Jilia_Kopytko-mYhzlt_-.webp",tb="/healthy-management-project/assets/Jilia_Kopytko@2x-gruKrAtD.jpg",Yf="/healthy-management-project/assets/Yelyzaveta_Domanska-Ru7up7Pj.webp",nb="/healthy-management-project/assets/Yelyzaveta_Domanska@2x-BYkqrL88.jpg",Kf="/healthy-management-project/assets/Oleksandr_Natalukha-YKEBbXyu.webp",rb="/healthy-management-project/assets/Oleksandr_Natalukha@2x-5OsrctvL.jpg",Gf="/healthy-management-project/assets/Valentyn_Havrylenko-ouVcypag.webp",ib="/healthy-management-project/assets/Valentyn_Havrylenko@2x-xBjJM6nL.jpg",Xf="/healthy-management-project/assets/Olha_Abent-lPe8g7w1.webp",ob="/healthy-management-project/assets/Olha_Abent@2x-fGgXmj71.jpg",qf="/healthy-management-project/assets/Viktoriia_Moryc-tWw5-4of.webp",sb="/healthy-management-project/assets/Viktoriia_Moryc@2x-AxiRex6x.jpg",Jf="/healthy-management-project/assets/Vyacheslav_Pavlyuk-py_hj3lz.webp",ab="/healthy-management-project/assets/Vyacheslav_Pavlyuk@2x-2qCtSSAb.jpg",Zf="/healthy-management-project/assets/Yaroslav_Li-nn0P6bIv.webp",lb="/healthy-management-project/assets/Yaroslav_Li@2x-xfuqLdiI.jpg",Vu=({handleClose:e,isModalOpen:t})=>{const n=i=>{i.target===i.currentTarget&&e()};M.useEffect(()=>{const i=document.body,o=()=>{t?i.classList.add("body-no-scroll"):i.classList.remove("body-no-scroll")},s=l=>{l.code==="Escape"&&t&&e()};return o(),window.addEventListener("keydown",s),()=>{window.removeEventListener("keydown",s)}},[e,t]);const r=document.getElementById("modal");return t?By.createPortal(u.jsx(Gw,{onClick:n,children:u.jsxs(Xw,{isModalOpen:t,children:[u.jsxs(qw,{children:[u.jsx(Zw,{children:"Команда, яка створила сторінку"}),u.jsx(Jw,{onClick:e,children:u.jsx("use",{href:`${K}#icon-close`})})]}),u.jsxs(eb,{children:[u.jsx(On,{children:u.jsxs(Tn,{children:[u.jsx(Rn,{children:u.jsx(In,{src:qf,srcSet:`${qf} 1x, ${sb} 2x`,alt:"Вікторія Мориц"})}),u.jsxs(Mn,{children:[u.jsx(_n,{children:u.jsxs("a",{href:"https://www.linkedin.com/in/viktoriia-moryc-61610962/",target:"_blank",rel:"noopener noreferrer",children:["Вікторія Мориц",u.jsx("svg",{width:"24",height:"24",children:u.jsx("use",{href:`${K}#icon-linkedin`})})]})}),u.jsx(Pn,{children:"Project Manager"})]})]})}),u.jsx(On,{children:u.jsxs(Tn,{children:[u.jsx(Rn,{children:u.jsx(In,{src:Qf,srcSet:`${Qf} 1x, ${tb} 2x`,alt:"Юлія Копитко"})}),u.jsxs(Mn,{children:[u.jsx(_n,{children:u.jsxs("a",{href:"https://www.linkedin.com/in/juliakopytko/",target:"_blank",rel:"noopener noreferrer",children:["Юлія Копитко",u.jsx("svg",{width:"24",height:"24",children:u.jsx("use",{href:`${K}#icon-linkedin`})})]})}),u.jsx(Pn,{children:"UX/UI Designer"})]})]})}),u.jsx(On,{children:u.jsxs(Tn,{children:[u.jsx(Rn,{children:u.jsx(In,{src:Zf,srcSet:`${Zf} 1x, ${lb} 2x`,alt:"Ярослав Лі"})}),u.jsxs(Mn,{children:[u.jsx(_n,{children:u.jsxs("a",{href:"https://www.linkedin.com/in/yaroslav-lee-b7070b294",target:"_blank",rel:"noopener noreferrer",children:["Ярослав Лі",u.jsx("svg",{width:"24",height:"24",children:u.jsx("use",{href:`${K}#icon-linkedin`})})]})}),u.jsx(Pn,{children:"Frontend Developer"})]})]})}),u.jsx(On,{children:u.jsxs(Tn,{children:[u.jsx(Rn,{children:u.jsx(In,{src:Yf,srcSet:`${Yf} 1x, ${nb} 2x`,alt:"Єлизавета Доманська"})}),u.jsxs(Mn,{children:[u.jsx(_n,{children:u.jsxs("a",{href:"https://www.linkedin.com/in/yelyzaveta-domanska-2185a5292/",target:"_blank",rel:"noopener noreferrer",children:["Єлизавета Доманська",u.jsx("svg",{width:"24",height:"24",children:u.jsx("use",{href:`${K}#icon-linkedin`})})]})}),u.jsx(Pn,{children:"Frontend Developer"})]})]})}),u.jsx(On,{children:u.jsxs(Tn,{children:[u.jsx(Rn,{children:u.jsx(In,{src:Kf,srcSet:`${Kf} 1x, ${rb} 2x`,alt:"Олександр Наталуха"})}),u.jsxs(Mn,{children:[u.jsx(_n,{children:u.jsxs("a",{href:"https://www.linkedin.com/in/oleksandr-natalukha",target:"_blank",rel:"noopener noreferrer",children:["Олександр Наталуха",u.jsx("svg",{width:"24",height:"24",children:u.jsx("use",{href:`${K}#icon-linkedin`})})]})}),u.jsx(Pn,{children:"Frontend Developer"})]})]})}),u.jsx(On,{children:u.jsxs(Tn,{children:[u.jsx(Rn,{children:u.jsx(In,{src:Gf,srcSet:`${Gf} 1x, ${ib} 2x`,alt:"Валентин Гавриленко"})}),u.jsxs(Mn,{children:[u.jsx(_n,{children:u.jsxs("a",{href:"https://www.linkedin.com/in/valentyn-havrylenko/",target:"_blank",rel:"noopener noreferrer",children:["Валентин Гавриленко",u.jsx("svg",{width:"24",height:"24",children:u.jsx("use",{href:`${K}#icon-linkedin`})})]})}),u.jsx(Pn,{children:"Frontend Developer"})]})]})}),u.jsx(On,{children:u.jsxs(Tn,{children:[u.jsx(Rn,{children:u.jsx(In,{src:Jf,srcSet:`${Jf} 1x, ${ab} 2x`,alt:"В´ячеслав Павлюк"})}),u.jsxs(Mn,{children:[u.jsx(_n,{children:u.jsxs("a",{href:"https://www.linkedin.com/in/vyacheslav-pavlyuk/",target:"_blank",rel:"noopener noreferrer",children:["В'ячеслав Павлюк",u.jsx("svg",{width:"24",height:"24",children:u.jsx("use",{href:`${K}#icon-linkedin`})})]})}),u.jsx(Pn,{children:"Fullstack Developer"})]})]})}),u.jsx(On,{children:u.jsxs(Tn,{children:[u.jsx(Rn,{children:u.jsx(In,{src:Xf,srcSet:`${Xf} 1x, ${ob} 2x`,alt:"Ольга Абент"})}),u.jsxs(Mn,{children:[u.jsx(_n,{children:u.jsxs("a",{href:"https://www.linkedin.com/in/abentolga/",target:"_blank",rel:"noopener noreferrer",children:["Ольга Абент",u.jsx("svg",{width:"24",height:"24",children:u.jsx("use",{href:`${K}#icon-linkedin`})})]})}),u.jsx(Pn,{children:"QA Engineer"})]})]})})]})]})}),r):null};Vu.propTypes={handleClose:oo.func.isRequired,isModalOpen:oo.bool.isRequired};function ub(e,t){if(t===e)return!1;const n=Object.values(t),r=Object.values(e);if(n.length!==r.length||n.some((o,s)=>o!==r[s]))return!0;const i=Object.keys(e);return Object.keys(t).some((o,s)=>o!==i[s])}function cb(e,t){return e.matches[t]=!1,e.mediaQueries[t]={},e}function Ng(e){const t=Object.keys(e);return typeof window>"u"?t.reduce(cb,{mediaQueries:{},matches:{}}):t.reduce((n,r)=>{const i=window.matchMedia(e[r]);return n.mediaQueries[r]=i,n.matches[r]=i.matches,n},{mediaQueries:{},matches:{}})}function db(e,t){function n(r,i){return r[i]=e.mediaQueries[i].matches,r}switch(t.type){case"updateMatches":return{matches:Object.keys(e.mediaQueries).reduce(n,{}),mediaQueries:e.mediaQueries};case"setQueries":return Ng(t.queries)}}function fb(e){const t=M.useRef(e),[n,r]=M.useReducer(db,e,Ng);M.useEffect(()=>{ub(e,t.current)&&(r({type:"setQueries",queries:e}),t.current=e)},[e]);function i(){return r({type:"updateMatches"})}function o(a){const c=i;return typeof a.addListener<"u"?a.addListener(c):a.addEventListener("change",c),c}M.useEffect(()=>{const a=Object.values(n.mediaQueries),c=a.map(o);function d(f,m){typeof f.addListener<"u"?f.removeListener(c[m]):f.removeEventListener("change",c[m])}return()=>{a.forEach(d)}},[n.mediaQueries]);const{matches:s}=n,l=M.useMemo(()=>Object.values(s),[s]);return{matches:s,matchesAny:l.some(Boolean),matchesAll:l.length>0&&l.every(Boolean)}}function pb(e){return fb(hb(e)).matchesAll}const xl={};function hb(e){return xl[e]===void 0&&(xl[e]={default:e}),xl[e]}const $g=({handleSetActiveLink:e})=>{const[t,n]=M.useState(!1),r=pb("(min-width: 1440px) and (max-width: 1919px)"),i=()=>{n(!0)},o=()=>{n(!1)};return u.jsxs($w,{id:"footer",children:[u.jsxs(Uw,{className:"container",children:[u.jsx("a",{href:"#home",children:u.jsx("svg",{width:"227",height:"40",children:u.jsx("use",{href:`${fs}#logo-white`})})}),r?u.jsxs(u.Fragment,{children:[u.jsxs(Bf,{children:[u.jsx(Xt,{href:"#home",onClick:s=>e("home",s),children:"Головна"}),u.jsx(Xt,{href:"#aboutUs",onClick:s=>e("aboutUs",s),children:"Про нас"}),u.jsx(Xt,{href:"#services",onClick:s=>e("services",s),children:"Послуги"}),u.jsx(Xt,{href:"#mentoring",onClick:s=>e("mentoring",s),children:"Менторство"}),u.jsx(Xt,{href:"#projects",onClick:s=>e("projects",s),children:"Проєкти"})]}),u.jsx(Wf,{onClick:i,children:"created by GoIT students"}),u.jsx(Vu,{handleClose:o,isModalOpen:t})]}):u.jsxs(u.Fragment,{children:[u.jsx(Wf,{onClick:i,children:"created by GoIT students"}),u.jsx(Vu,{handleClose:o,isModalOpen:t}),u.jsxs(Bf,{children:[u.jsx(Xt,{href:"#home",onClick:s=>e("home",s),children:"Головна"}),u.jsx(Xt,{href:"#aboutUs",onClick:s=>e("aboutUs",s),children:"Про нас"}),u.jsx(Xt,{href:"#services",onClick:s=>e("services",s),children:"Послуги"}),u.jsx(Xt,{href:"#mentoring",onClick:s=>e("mentoring",s),children:"Менторство"}),u.jsx(Xt,{href:"#projects",onClick:s=>e("projects",s),children:"Проєкти"})]})]}),u.jsxs(Ww,{children:[u.jsxs(Bw,{children:[u.jsx(Hw,{href:"https://www.facebook.com/profile.php?id=61551346490841",target:"_blank",rel:"noopener noreferrer",children:u.jsx("svg",{width:"32",height:"32",children:u.jsx("use",{href:`${fs}#facebook`})})}),u.jsx("a",{href:"https://www.instagram.com/healthymanagement_ua/",target:"_blank",rel:"noopener noreferrer",children:u.jsx("svg",{width:"40",height:"40",children:u.jsx("use",{href:`${fs}#instagram`})})})]}),u.jsxs(Qw,{children:[u.jsx(Hf,{href:"mailto:healthy.managements@gmail.com",children:"healthy.managements@gmail.com"}),u.jsx(Hf,{href:"tel:+380673160556",children:"+380 673 160 556"})]})]})]}),u.jsx(Yw,{children:u.jsx(Kw,{children:"© 2023 healthy management. All rights reserved"})})]})};$g.propTypes={handleSetActiveLink:oo.func.isRequired};const Fi="/healthy-management-project/assets/symbol-defs--0zN9DRa.svg",mb=j.header`
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
`,gb=j.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
`,vb=j.nav`
  @media screen and (min-width: 1440px) {
    display: flex;
    gap: 40px;
    align-items: center;
  }

  @media screen and (min-width: 1920px) {
  }
`,hi=j.a`
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
`,xb=j.a`
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
`,ep=j.svg`
  stroke: black;
  width: 40px;
  height: 40px;

  @media screen and (min-width: 768px) {
    width: 70px;
  }
`,tp=j.button`
  border: none;
  padding: 0;
  margin: 0;
  text-decoration: none;
  font-family: inherit;
  font-size: 100%;
  cursor: pointer;
  background: none;
`,yb=j.div`
  position: fixed;
  z-index: 1200;
  top: 0;
  left: 0;
  width: 100%;
`,wb=j.div`
  display: flex;
  width: 100%;
  padding-top: 32px;
  padding-bottom: 32px;
  justify-content: space-between;
  align-items: center;
  border-bottom: 1px solid var(--system-default-20, #dedede);
  background: var(--system-default-10, #f8f8f8);
`,bb=j.a`
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
`,Sb=j.svg`
  stroke: var(--primary-black);
`,kb=j.nav`
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
`,mi=j.a`
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
`,jb=j.button`
  border: none;
  padding: 0;
  margin: 0;
  text-decoration: none;
  font-family: inherit;
  font-size: 100%;
  cursor: pointer;
  background: none;
`,Cb=document.getElementById("modalMobail"),Ug=({onClose:e,handleSetActiveLink:t})=>ho.createPortal(u.jsx(yb,{children:u.jsxs("div",{className:"container",children:[u.jsxs(wb,{children:[u.jsx("a",{href:"#home",children:u.jsx("svg",{width:"40",height:"40",children:u.jsx("use",{href:`${Fi}#icon-g10`})})}),u.jsx(bb,{href:"#contact",children:"Контакт"}),u.jsx(jb,{type:"button",onClick:()=>e(),children:u.jsx(Sb,{width:"40",height:"40",children:u.jsx("use",{href:`${Fi}#icon-close`})})})]}),u.jsxs(kb,{children:[u.jsx(mi,{href:"#home",onClick:n=>{e(),t("home",n)},children:"Головна"}),u.jsx(mi,{href:"#aboutUs",onClick:n=>{e(),t("aboutUs",n)},children:"Про нас"}),u.jsx(mi,{href:"#services",onClick:n=>{e(),t("services",n)},children:"Послуги"}),u.jsx(mi,{href:"#mentoring",onClick:n=>{e(),t("mentoring",n)},children:"Менторство"}),u.jsx(mi,{href:"#projects",onClick:n=>{e(),t("projects",n)},children:"Проєкти"})]})]})}),Cb);Ug.propTypes={onClose:oo.func.isRequired};const Wg=({handleSetActiveLink:e})=>{const[t,n]=M.useState("home"),[r,i]=M.useState(!1),o=gn.useMediaQuery({query:"(max-width: 767px)"}),s=gn.useMediaQuery({query:"(min-width: 768px) and (max-width: 1439px)"}),l=gn.useMediaQuery({query:"(max-width: 1439px)"}),a=gn.useMediaQuery({query:"(min-width: 1440px)"}),c=()=>{i(!r)};return M.useEffect(()=>{const d=()=>{const m=["home","aboutUs","services","mentoring","projects","contact"].find(y=>{const g=document.getElementById(y);if(g){const v=g.getBoundingClientRect();return v.top<=120&&v.bottom>=120}return g});m&&n(m)};return window.addEventListener("scroll",d),()=>{window.removeEventListener("scroll",d)}},[]),u.jsxs(mb,{children:[u.jsx("div",{className:"container",children:u.jsxs(gb,{children:[l&&u.jsx("a",{href:"#home",children:u.jsx("svg",{width:"40",height:"40",children:u.jsx("use",{href:`${Fi}#icon-g10`})})}),a&&u.jsx("a",{href:"#home",children:u.jsx("svg",{width:"227",height:"40",children:u.jsx("use",{href:`${K}#logo-black`})})}),a&&u.jsxs(vb,{children:[u.jsx(hi,{href:"#home",className:t==="home"?"active":"",onClick:d=>e("home",d),children:"Головна"}),u.jsx(hi,{href:"#aboutUs",className:t==="aboutUs"?"active":"",onClick:d=>e("aboutUs",d),children:"Про нас"}),u.jsx(hi,{href:"#services",className:t==="services"?"active":"",onClick:d=>e("services",d),children:"Послуги"}),u.jsx(hi,{href:"#mentoring",className:t==="mentoring"?"active":"",onClick:d=>e("mentoring",d),children:"Менторство"}),u.jsx(hi,{href:"#projects",className:t==="projects"?"active":"",onClick:d=>e("projects",d),children:"Проєкти"})]}),u.jsx(xb,{href:"#contact",className:t==="contact"?"active":"",onClick:d=>e("contact",d),children:"Контакт"}),o&&u.jsx(tp,{type:"button",onClick:()=>c(),children:u.jsx(ep,{children:u.jsx("use",{href:`${Fi}#icon-menuburger`})})}),s&&u.jsx(tp,{type:"button",onClick:()=>c(),children:u.jsx(ep,{children:u.jsx("use",{href:`${Fi}#icon-menuburgerhorizontaltablet`})})})]})}),l&&r&&u.jsx(Ug,{onClose:c,handleSetActiveLink:e})]})};Wg.propTypes={handleSetActiveLink:oo.func.isRequired};const Eb="/healthy-management-project/assets/hero1x-6AVSlzud.webp",Ob="/healthy-management-project/assets/hero@2x-N6Dvbfg6.jpg",_b="/healthy-management-project/assets/hero1x-d4IOBsel.jpg",Pb="/healthy-management-project/assets/hero@2x-qDoBpvI0.jpg",Tb="/healthy-management-project/assets/hero@1x-gjNVfS_G.jpg",Mb="/healthy-management-project/assets/hero@2x-xeAfw2Nx.jpg",Rb="/healthy-management-project/assets/hero@1x-T7izVw7M.jpg",Ib="/healthy-management-project/assets/hero@2x-MzaNEgZc.jpg",Db=j.section`
  background-repeat: no-repeat;
  background-position: center;
  background-image: url(${_b});
  background-size: cover;
  margin-top: 120px;
  padding-top: 40px;
  padding-bottom: 40px;

  @media (min-device-pixel-ratio: 2),
    (min-resolution: 192dpi),
    (min-resolution: 2dppx) {
    background-image: url(${Pb});
  }

  @media screen and (min-width: 768px) {
    background-image: url(${Tb});
    margin-top: 120px;
    padding-top: 234px;
    padding-bottom: 234px;

    @media (min-device-pixel-ratio: 2),
      (min-resolution: 192dpi),
      (min-resolution: 2dppx) {
      background-image: url(${Mb});
    }
  }

  @media screen and (min-width: 1440px) {
    background-image: url(${Rb});
    margin-top: 120px;
    padding-top: 236px;
    padding-bottom: 236px;

    @media (min-device-pixel-ratio: 2),
      (min-resolution: 192dpi),
      (min-resolution: 2dppx) {
      background-image: url(${Ib});
    }
  }

  @media screen and (min-width: 1920px) {
    background-image: url(${Eb});

    margin-top: 120px;
    padding-top: 296px;
    padding-bottom: 296px;

    @media (min-device-pixel-ratio: 2),
      (min-resolution: 192dpi),
      (min-resolution: 2dppx) {
      background-image: url(${Ob});
    }
  }
`,Lb=j.h1`
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
`,Ab=j.h3`
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
`,Fb=j.ul`
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
`,yl=j.li`
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
`,zb=j.div`
  display: flex;
  flex-direction: column;
  gap: 24px;

  @media screen and (min-width: 768px) {
    flex-direction: row;
  }
`,Vb=j.a`
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
`,Nb=j.a`
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
`,$b=()=>u.jsx(Db,{id:"home",children:u.jsxs("div",{className:"container",children:[u.jsx(Lb,{children:"Бізнес-партнер з розвитку та комунікацій здорового менеджменту"}),u.jsx(Ab,{children:"Будуємо ефективні стратегії здорового менеджменту для медичних брендів:"}),u.jsxs(Fb,{children:[u.jsx(yl,{children:"медичний менеджмент і маркетинг,"}),u.jsx(yl,{children:"програми управління здоров'ям для підприємств та бізнесу,"}),u.jsx(yl,{children:"менторство"})]}),u.jsxs(zb,{children:[u.jsx(Vb,{href:"#contact",children:"Консультація"}),u.jsx(Nb,{href:"#services",children:"Послуги"})]})]})}),Ub=j.section`
  padding-top: 40px;
  padding-bottom: 40px;

  @media screen and (min-width: 1920px) {
    padding-top: 80px;
    padding-bottom: 80px;
  }
`,Wb=j.div`
  border-radius: 16px;
  padding: 24px;
  background: var(--background-bluedark);

  @media screen and (min-width: 1920px) {
    max-width: 100%;
    padding: 80px;
  }
`,Bb=j.h2`
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
`,Hb=j.ul`
  display: flex;
  padding: 0;
  flex-wrap: wrap;
  gap: 24px;
`,No=j.li`
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
`,$o=j.svg`
  width: 64px;
  height: 64px;
`,Uo=j.div`
  display: flex;
  flex-direction: column;
`,Wo=j.h3`
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
`,Bo=j.p`
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
`,Qb=()=>u.jsx(Ub,{className:"container",children:u.jsxs(Wb,{children:[u.jsx(Bb,{children:"Чому обирають нас"}),u.jsxs(Hb,{children:[u.jsxs(No,{children:[u.jsx($o,{children:u.jsx("use",{href:`${K}#hands-shake`})}),u.jsxs(Uo,{children:[u.jsx(Wo,{children:"Надійне партнерство та менторство"}),u.jsx(Bo,{children:"Ми налаштовані на довгострокове партнерство і дбаємо про комфортні та чесні комунікації"})]})]}),u.jsxs(No,{children:[u.jsx($o,{children:u.jsx("use",{href:`${K}#setting`})}),u.jsxs(Uo,{children:[u.jsx(Wo,{children:"Індивідуальний підхід"}),u.jsx(Bo,{children:"Кожен бізнес і послуга мають свої особливості. Ми занурюємося у ваш бізнес і пропонуємо індивідуальні стратегії, які допоможуть вам досягти успіху"})]})]}),u.jsxs(No,{children:[u.jsx($o,{children:u.jsx("use",{href:`${K}#icon-lamp`})}),u.jsxs(Uo,{children:[u.jsx(Wo,{children:"Експертні послуги"}),u.jsx(Bo,{children:"Ми опираємося на передовий досвід і використовуємо як класичні, так і сучасні підходи для досягнення поставленого результату"})]})]}),u.jsxs(No,{children:[u.jsx($o,{children:u.jsx("use",{href:`${K}#icon-puzzle`})}),u.jsxs(Uo,{children:[u.jsx(Wo,{children:"Комплексні рішення"}),u.jsx(Bo,{children:"Наша експертиза дозволяє пропонувати комплексні рішення для ефективної співпраці"})]})]})]})]})}),Yb="/healthy-management-project/assets/pic_mentorstvo1x-R5bIGNq0.webp",Kb="/healthy-management-project/assets/pic_mentorstvo2x-k6d-_Us1.jpg",Gb="/healthy-management-project/assets/pic_mentorstvo1x-DCmM7Ygj.jpg",Xb="/healthy-management-project/assets/mob_mentor1x-_de1iGBc.webp",qb="/healthy-management-project/assets/mob_mentor@2x-oAKhVwNJ.jpg",Jb="/healthy-management-project/assets/mob_mentor1x-1WPWjsx0.jpg",Zb="/healthy-management-project/assets/pic_mentorstvo_768_1x-Px4J1LUl.jpg",e2="/healthy-management-project/assets/pic_mentorstvo_768_1x-gkJzTmk_.webp",t2="/healthy-management-project/assets/pic_mentorstvo_768@2x-S5qjgsHl.webp",n2="/healthy-management-project/assets/pic_mentorstvo_1440_1x-WjllDGeR.webp",r2="/healthy-management-project/assets/pic_mentorstvo_1440@2x-O-l22q9a.webp",i2="/healthy-management-project/assets/pic_mentorstvo_1440_1x-7OpZfadC.jpg",o2=j.section`
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
`,s2=j.div`
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
`,a2=j.div`
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
`,l2=j.div`
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
`,u2=j.h2`
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
`,c2=j.h3`
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
`,np=j.h3`
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
`,d2=j.div`
  display: flex;
  flex-direction: column;
  gap: 24px;
  min-width: 320px;

  @media screen and (min-width: 1920px) {
    gap: 20px;
    margin-bottom: 56px;
  }
`,rp=j.p`
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
`,f2=j.a`
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
`,p2=j.div`
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
`,h2=j.div`
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
`,m2=j.ul`
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
`,ip=j.ul`
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
`,wr=j.li`
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
`,br=j.li`
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
`,g2=()=>u.jsxs(o2,{id:"mentoring",className:"container",children:[u.jsxs(s2,{children:[u.jsxs("div",{children:[u.jsx(oe,{minWidth:1920,children:u.jsx("img",{srcSet:`${Yb} 1x, ${Kb} 2x`,sizes:"(min-width: 1920px) 1920px",src:Gb,alt:"Ольга Поліщук - ваш ментор в медичній галузі"})}),u.jsx(oe,{minWidth:300,maxWidth:767,children:u.jsx("img",{srcSet:`${Xb} 1x, ${qb} 2x`,sizes:"(min-width: 375px) 375px",src:Jb,alt:"Ольга Поліщук - ваш ментор в медичній галузі"})}),u.jsx(oe,{minWidth:768,maxWidth:1439,children:u.jsx("img",{srcSet:`${e2} 1x, ${t2} 2x`,sizes:"(min-width: 768px) 768px",src:Zb,alt:"Ольга Поліщук - ваш ментор в медичній галузі"})}),u.jsx(oe,{minWidth:1440,maxWidth:1919,children:u.jsx("img",{srcSet:`${n2} 1x, ${r2} 2x`,sizes:"(min-width: 1440px) 100vw (max-width: 1919px) 100vw",src:i2,alt:"Ольга Поліщук - ваш ментор в медичній галузі"})})]}),u.jsxs(a2,{children:[u.jsx(u2,{children:"Менторство"}),u.jsxs(d2,{children:[u.jsxs(rp,{children:[u.jsx("b",{children:"Менторство в медичній галузі"})," - почути іншу думку, підтвердити власні гіпотези, зрозуміти вектор розвитку, отримати підтримку та пораду з питань менеджменту і медичного маркетингу"]}),u.jsxs(rp,{children:[u.jsx("b",{children:"Менторство"})," - це про взаємодію та чесну комунікацію, про спільні цінності та готовність до росту, про надійне партнерство та довіру"]})]}),u.jsx(f2,{href:"#contact",children:"Дізнатися вартість"})]})]}),u.jsx("div",{children:u.jsxs(p2,{children:[u.jsxs(l2,{children:[u.jsx(c2,{children:"Про що це?"}),u.jsxs(m2,{children:[u.jsx(wr,{children:u.jsx("p",{children:"Про прагнення почути чесну іншу думку/та або підтвердити власні гіпотези для власника/керівника"})}),u.jsx(wr,{children:u.jsx("p",{children:"Про бізнес-процеси та їх ефективність"})}),u.jsx(wr,{children:u.jsx("p",{children:"Про вектори розвитку бізнесу або проєкту"})}),u.jsx(wr,{children:u.jsx("p",{children:"Про практичний інструментарій для впровадження змін"})}),u.jsx(wr,{children:u.jsx("p",{children:"Про маркетинг, сервіс та комунікації в медичних бізнесах"})}),u.jsx(wr,{children:u.jsx("p",{children:"Про здоров'я працівників та стратегії підвищенння ефективності бізнесу"})})]})]}),u.jsxs(h2,{children:[u.jsx(np,{children:"Для кого"}),u.jsxs(ip,{children:[u.jsx(br,{children:u.jsx("p",{children:"Лідерам, які прагнуть змін"})}),u.jsx(br,{children:u.jsx("p",{children:"Власникам, які хочуть отримати незалежку експертну думку"})}),u.jsx(br,{children:u.jsx("p",{children:"Керівникам та маркетологам, яким потрібна підтримка"})}),u.jsx(br,{children:u.jsx("p",{children:"Лікарям, яким важливо отримати пораду"})})]}),u.jsx(np,{children:"Формат"}),u.jsxs(ip,{children:[u.jsx(br,{children:u.jsx("p",{children:"Індивідуальна ментор-сесія (від 1 години)"})}),u.jsx(br,{children:u.jsx("p",{children:"Персональний супровід на декілька місяців"})})]})]})]})})]}),Bg=j.section`
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
`,Hg=j.div`
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
`,v2=j.div`
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
`,Ho=j.div`
  position: relative;

  @media screen and (min-width: 1920px) {
    min-width: 370px;
  }
`,Qg=j.div`
  display: flex;
  flex-direction: column;

  @media screen and (min-width: 1290px) {
    gap: 40px;
    margin-bottom: 40px;
    flex-direction: row;
  }
`,Yg=j.div`
  min-width: 280px;
  gap: 16px;
  display: flex;
  flex-direction: column;

  @media screen and (min-width: 1920px) {
    min-width: 740px;
  }
`,Kg=j.div`
  @media screen and (min-width: 768px) {
    padding: 24px;
  }
`,Qo=j.p`
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
`,Gg=j.h2`
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
`,Xg=j.h3`
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
`,qg=j.p`
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
`,Jg=j.p`
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
`,Zg=j.a`
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
`,ev=j.p`
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
`,tv=j.ul`
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
`,Ut=j.li`
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
`,Pt=j.svg`
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
`,x2=()=>u.jsx(Bg,{className:"container",children:u.jsxs(Hg,{children:[u.jsxs(Qg,{children:[u.jsxs(Yg,{children:[u.jsx(Gg,{children:"Індивідуальна ментор сесія"}),u.jsx(qg,{children:"Вирішення вашого індивідуального запиту"}),u.jsx(Jg,{children:"від 1 години"}),u.jsx(Zg,{href:"#contact",children:"Замовити послугу"})]}),u.jsxs(Kg,{children:[u.jsx(Xg,{children:"Питання, з якими можете звернутися"}),u.jsxs(tv,{children:[u.jsx(Ut,{children:"Незалежна думка щодо маркетингу та розвитку"}),u.jsx(Ut,{children:"Порада по створенню відділу маркетингу або оцінка існуючої структури"}),u.jsx(Ut,{children:"Питання по роботі з підрядниками"}),u.jsx(Ut,{children:"Порада щодо оптимізації бізнес-процесів"}),u.jsx(Ut,{children:"Як вірно оцінити ефективність маркетингових дій"}),u.jsx(Ut,{children:"Які інструменти комунікацій використовувати"}),u.jsxs(Ut,{children:["Особисте питання по менеджменту та розвитку з питань управління"," ","здоров'ям"]})]})]})]}),u.jsx(ev,{children:"Шлях проведення менторської сесії"}),u.jsxs(v2,{children:[u.jsxs(Ho,{children:[u.jsx(oe,{minWidth:330,maxWidth:767,children:u.jsx(Pt,{children:u.jsx("use",{href:`${K}#icon-rectangle-mob`})})}),u.jsx(oe,{minWidth:768,maxWidth:1439,children:u.jsx(Pt,{children:u.jsx("use",{href:`${K}#icon-rectangle-tab`})})}),u.jsx(oe,{minWidth:1440,children:u.jsx(Pt,{children:u.jsx("use",{href:`${K}#icon-rectangle`})})}),u.jsx(Qo,{children:"Заповнення брифу"})]}),u.jsxs(Ho,{children:[u.jsx(oe,{minWidth:330,maxWidth:767,children:u.jsx(Pt,{children:u.jsx("use",{href:`${K}#icon-rectangle-mob`})})}),u.jsx(oe,{minWidth:768,maxWidth:1439,children:u.jsx(Pt,{children:u.jsx("use",{href:`${K}#icon-rectangle-tab`})})}),u.jsx(oe,{minWidth:1440,children:u.jsx(Pt,{children:u.jsx("use",{href:`${K}#icon-rectangle`})})}),u.jsx(Qo,{children:"Діагностика ситуації"})]}),u.jsxs(Ho,{children:[u.jsx(oe,{minWidth:330,maxWidth:767,children:u.jsx(Pt,{children:u.jsx("use",{href:`${K}#icon-rectangle-mob`})})}),u.jsx(oe,{minWidth:768,maxWidth:1439,children:u.jsx(Pt,{children:u.jsx("use",{href:`${K}#icon-rectangle-tab`})})}),u.jsx(oe,{minWidth:1440,children:u.jsx(Pt,{children:u.jsx("use",{href:`${K}#icon-rectangle`})})}),u.jsx(Qo,{children:"Проведення сесії"})]}),u.jsxs(Ho,{children:[u.jsx(oe,{minWidth:330,maxWidth:767,children:u.jsx(Pt,{children:u.jsx("use",{href:`${K}#icon-rectangle-mob`})})}),u.jsx(oe,{minWidth:768,maxWidth:1439,children:u.jsx(Pt,{children:u.jsx("use",{href:`${K}#icon-rectangle-tab`})})}),u.jsx(oe,{minWidth:1440,children:u.jsx(Pt,{children:u.jsx("use",{href:`${K}#icon-rectangle`})})}),u.jsx(Qo,{children:"Рекомендації"})]})]})]})}),y2=j.div`
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
`,st=j.svg`
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
`,gi=j.div`
  position: relative;
  height: 60px;

  @media screen and (min-width: 1440px) {
    width: 220px;
  }

  @media screen and (min-width: 1920px) {
    min-width: 285px;
  }
`;j.div`
  min-width: 740px;
  display: flex;
  flex-direction: column;
  gap: 16px;
`;const vi=j.p`
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
`,w2=()=>u.jsx(Bg,{className:"container",children:u.jsxs(Hg,{children:[u.jsxs(Qg,{children:[u.jsxs(Yg,{children:[u.jsx(Gg,{children:"Персональний супровід"}),u.jsx(qg,{children:"Пропрацьовуємо ваші запити та досягаємо посавлених цілей"}),u.jsx(Jg,{children:"від 2 місяців тісної взаємодії"}),u.jsx(Zg,{href:"#contact",children:"Замовити послугу"})]}),u.jsxs(Kg,{children:[u.jsx(Xg,{children:"Питання, з якими можете звернутися"}),u.jsxs(tv,{children:[u.jsx(Ut,{children:"Зануритись в бізнес-процеси та зрозуміти, де є точки зростання"}),u.jsx(Ut,{children:"Зрозуміти що таке маркетинг та як він працює у вашому бізнесі"}),u.jsx(Ut,{children:"Супровід розробки та впровадження стратегій"}),u.jsx(Ut,{children:"Особисті питання по медичному менеджменту, маркетингу та розвитку, управління здоров'ям"})]})]})]}),u.jsx(ev,{children:"Шлях проведення менторського супроводу"}),u.jsxs(y2,{children:[u.jsxs(gi,{children:[u.jsx(oe,{minWidth:330,maxWidth:767,children:u.jsx(st,{children:u.jsx("use",{href:`${K}#icon-rectangle-mob`})})}),u.jsx(oe,{minWidth:768,maxWidth:1439,children:u.jsx(st,{children:u.jsx("use",{href:`${K}#icon-rectangle-tab`})})}),u.jsx(oe,{minWidth:1440,children:u.jsx(st,{children:u.jsx("use",{href:`${K}#icon-rectangle2`})})}),u.jsx(vi,{children:"Заповнення брифу"})]}),u.jsxs(gi,{children:[u.jsx(oe,{minWidth:330,maxWidth:767,children:u.jsx(st,{children:u.jsx("use",{href:`${K}#icon-rectangle-mob`})})}),u.jsx(oe,{minWidth:768,maxWidth:1439,children:u.jsx(st,{children:u.jsx("use",{href:`${K}#icon-rectangle-tab`})})}),u.jsx(oe,{minWidth:1440,children:u.jsx(st,{children:u.jsx("use",{href:`${K}#icon-rectangle2`})})}),u.jsx(vi,{children:"Діагностика ситуації"})]}),u.jsxs(gi,{children:[u.jsx(oe,{minWidth:330,maxWidth:767,children:u.jsx(st,{children:u.jsx("use",{href:`${K}#icon-rectangle-mob`})})}),u.jsx(oe,{minWidth:768,maxWidth:1439,children:u.jsx(st,{children:u.jsx("use",{href:`${K}#icon-rectangle-tab`})})}),u.jsx(oe,{minWidth:1440,children:u.jsx(st,{children:u.jsx("use",{href:`${K}#icon-rectangle2`})})}),u.jsx(vi,{children:"Визначення зон росту"})]}),u.jsxs(gi,{children:[u.jsx(oe,{minWidth:330,maxWidth:767,children:u.jsx(st,{children:u.jsx("use",{href:`${K}#icon-rectangle-mob`})})}),u.jsx(oe,{minWidth:768,maxWidth:1439,children:u.jsx(st,{children:u.jsx("use",{href:`${K}#icon-rectangle-tab`})})}),u.jsx(oe,{minWidth:1440,children:u.jsx(st,{children:u.jsx("use",{href:`${K}#icon-rectangle2`})})}),u.jsx(vi,{children:"Менторинг"})]}),u.jsxs(gi,{children:[u.jsx(oe,{minWidth:330,maxWidth:767,children:u.jsx(st,{children:u.jsx("use",{href:`${K}#icon-rectangle-mob`})})}),u.jsx(oe,{minWidth:768,maxWidth:1439,children:u.jsx(st,{children:u.jsx("use",{href:`${K}#icon-rectangle-tab`})})}),u.jsx(oe,{minWidth:1440,children:u.jsx(st,{children:u.jsx("use",{href:`${K}#icon-rectangle2`})})}),u.jsx(vi,{children:"Рекомендації"})]})]})]})}),Ia=()=>{const e=gn.useMediaQuery({maxWidth:767}),t=gn.useMediaQuery({minWidth:768,maxWidth:1439}),n=gn.useMediaQuery({minWidth:1440,maxWidth:1919}),r=gn.useMediaQuery({minWidth:1920});return e&&"mobile"||t&&"tablet"||n&&"desktop"||r&&"largeDesktop"},b2="/healthy-management-project/assets/denta_derm1x-JWCICTe_.webp",S2="/healthy-management-project/assets/medialt1x-5LMkh0v8.webp",k2="/healthy-management-project/assets/cures1x--AoJBOWJ.webp",j2="/healthy-management-project/assets/clinic1x-YgK5Wnno.webp",C2="/healthy-management-project/assets/kmklam1x-FlPeEOTs.webp",E2="/healthy-management-project/assets/symmetrica1x-hhcOddzB.webp",wl=[{image:b2,category:"DentaDerm",title:"Діагностика бізнес-процесів, маркетингу, сервісу, розробка стратегії розвитку, менторство",about:["Діагностика бізнес-процесів та маркетингу","Стратегія розвитку","Підбір команди маркетингу","Менторство"],details:[{title:"Завдання:",about:["Розробка стратегії розвитку","Розробка нового сайту клініки","Пошук команди маркетингу"],comment:"Дії в результаті розробки стратегії розвитку передбачали роботу над проєктом в новому позиціонуванні,  пошук зовнішньої та внутрішньої команди для реалізації нового сайту, ведення соцмереж"},{title:"В результаті роботи над проєктом:",about:["Розроблені вектори розвитку","Розроблений та впроваджений новий сайт","Підібрана команда маркетингового супроводу"],comment:"В результаті співпраці партнер отримав комплексне бачення просування, сформована команда маркетингу"}]},{image:S2,category:"Medialt",title:"Діагностика бізнес-процесів, маркетингу, сервісу, розробка стратегії розвитку, менторство",about:["Аудит ринку та конкурентів","Аудит маркетингу та сервісу","Розробка стратегії розвитку"],details:[{title:"Завдання:",about:["Розробка стратегії розвитку"]},{title:"Робота над задачою була розділена на два етапи:",about:["Аналіз конкурентів, ринку, виявлення зовнішніх можливостей та загроз","Аналіз сервісу медичного центру, аналіз роботи контакт центру, маркетингу, наявної бази пацієнтів та внутрішніх бізнес-процесів"]},{title:"В результаті комплексного аудиту підготували стратегію розвитку, яка передбачала рекомендації щодо:",about:["Управління маркетингом","Оптимізації роботи сервісу","Можливості МІС","Етапи розвитку напрямків та клініки вцілому"],comment:"В результаті співпраці - за 5 місяців ріст обороту в два рази"}]},{image:k2,category:"Cures",title:"Автоматизація комунікації з пацієнтами",about:["Створення та запуск 20 чат-ботів для клінік","Проведення консультацій та аудитів комунікацій клінік з пацієнтами","Розробка персональних протоколів спілкування з пацієнтами"],details:[{title:"Завдання:",about:["Автоматизація комунікації з пацієнтами"]},{title:"В результаті роботи над проєктом:",about:["Розвиток проєкту по створенню чат-ботів для медичних центрів","Розробка протоколів супроводу та опитувальників для клінік","Проведення зустрічей та комунікацій з клініками","Розробка алгоритмів та запуск чат-ботів"],comment:"В результаті співпраці над проєктом запуск 20 чат-ботів для медичних центрів"}]},{image:j2,category:"Клініка ім. ак. Юрія Спіженка",title:"Менторство, діагностика бізнес-процесів, маркетингу та сервісу, розробка стратегії розвитку",about:["Діагностика бізнес-процесів","Аудит маркетингу та сервісу","Розробка стратегії розвитку та маркетингу","Розробка та впровадження комунікаційної стратегії","Ведення маркетингових активностей "],details:[{title:"Завдання:",about:["Рестарт клініки у воєний час"]},{title:"Робота над задачею була розділена на три етапи:",about:["Діагностика конкурентів, ринку, виявлення зовнішніх можливостей та загроз","Діагностика сервісу медичного центру, аналіз роботи контакт центру, маркетингу, наявної бази пацієнтів та внутрішніх бізнес-процесів","Розробка та впровадження стратегії маркетингу, комунікації та сервісу, супровід рекламних кампаній, оптимізація бізнес-процесів"],comment:"В результаті співпраці над проєктом: збільшення доходу клініки, вихід на довоєний об’єм"}]},{image:C2,category:"KMKlab",title:"Діагностика маркетингу, сервісу, бізнес-процесів",about:["Аудит маркетингу та інструментів комунікацій","Аудит сервісу","Розробка рекомендацій щодо розвитку"],details:[{title:"Завдання:",about:["Аудит поточної маркетингової стратегії","Аудит сервісу","Формування рекомендацій по розвитку"]},{title:"Робота над задачою була розділена на два етапи:",about:["Відвідування всіх відділень лабораторій з метою формування рекомендацій по кожній локації","Аналіз поточної ситуації маркетингу та комунікацій, ведення соціальних мереж"],comment:"В результаті співпраці проаналізовано роботу відділу маркетингу та підрядників та надані рекомендації щодо структури відділу, сформовані подальші  кроки  маркетингової  та сервісної стратегії"}]},{image:E2,category:"Symmetrica",title:"Менторство, діагностика маркетингу, сервісу, бізнес-процесів",about:["Аудит маркетингу та сервісу","Розробка рекомендацій щодо розвитку","Оптимізація бізнес-процесів"],details:[{title:"Завдання:",about:["Діагностика поточної маркетингової діяльності та комунікацій","Аудит сервісу","Аудит роботи підрядників","Формування рекомендацій по розвитку"]},{title:"В результаті роботи над проєктом:",about:["Проведений поточний аудит шляху пацієнта, виявлені точки зростання сервісу","Проаналізовано роботу відділу маркетингу і підрядників та надані рекомендації щодо структури відділу","Надані рекомендації щодо формування подальших кроків маркетингової  та сервісної стратегії","Сформовані конверсійні показники та вектори руху","Надана менторська підтримка"]}]}],O2=j.section`
  padding-top: 40px;
  padding-bottom: 40px;
  @media screen and (min-width: 768px) {
    padding-top: 80px;
    padding-bottom: 80px;
  }
`,_2=j.h2`
  font-size: 48px;
  font-weight: 600;
  line-height: calc(56 / 48);

  margin-bottom: 40px;
`,P2=j.ul`
  display: flex;
  gap: 24px;
  flex-wrap: wrap;
  @media screen and (min-width: 768px) {
  }
`,T2=j.span`
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
`,M2=j.svg`
  fill: currentColor;
  stroke: currentColor;

  width: 24px;
  height: 24px;
`,R2=j.li`
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
`,I2=j.div`
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
`,D2=j.div`
  display: flex;
  flex-direction: column;
  gap: 16px;
`,L2=j.h4`
  font-size: ${e=>e.forDetail?"18px":"16px"};
  font-weight: 600;
  line-height: calc(${e=>e.forDetail?24/18:24/16});

  @media screen and (min-width: 768px) {
    font-size: ${e=>e.forDetail?"24px":"20px"};
    line-height: calc(${e=>e.forDetail?32/24:28/20});
  }
`,A2=j.ul`
  display: flex;
  flex-direction: column;
  gap: 8px;
`,F2=j.li`
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
`,z2=j.p`
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
`,V2=j.svg`
  fill: currentColor;
  stroke: currentColor;
`,nd=({title:e,about:t,comment:n,additionalComment:r=!1})=>u.jsxs(D2,{children:[u.jsx(L2,{forDetail:r,children:e}),u.jsx(A2,{children:t==null?void 0:t.map(i=>u.jsxs(F2,{children:[u.jsx(V2,{children:u.jsx("use",{href:K+"#icon-done"})}),i]},i))}),n&&u.jsx(z2,{additionalComment:r,children:n})]}),N2=j.div`
  padding: 24px;
  display: flex;
  gap: 24px;
  flex-direction: column;

  color: var(--background-whitegrey, #f4f4f6);
  @media screen and (min-width: 768px) {
    padding: 40px;
  }
`,$2=j.h3`
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
`,U2=j.svg`
  fill: currentColor;
  stroke: currentColor;

  width: 24px;
  height: 24px;

  position: absolute;
  right: 28px;
  top: 28px;
`,W2=({dataList:{details:e,category:t}})=>{const n=Ia();return u.jsxs(N2,{children:[u.jsxs("div",{children:[u.jsx($2,{symbols:t.length,children:t}),n==="mobile"&&u.jsx(U2,{children:u.jsx("use",{href:K+"#icon-close"})})]}),e.map((r,i)=>u.jsx(nd,{title:r.title,about:r.about,comment:r.comment,additionalComment:i===0},r.title))]})},B2=j.div`
  display: flex;
  flex-direction: column;
  gap: 24px;

  color: var(--typography-bluedark, #1b3641);
`,H2=j.h3`
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
`,Q2=j.img`
  height: 279px;
  width: 100%;
  border-radius: 8px;
  object-fit: cover;
  @media screen and (min-width: 768px) {
    height: 300px;
  }
`,Y2=j.span`
  font-size: 14px;
  font-weight: 600;
  line-height: calc(18 / 14);
  text-align: center;
`,K2=({dataList:e,onClick:t})=>{const n=Ia(),{category:r,title:i,about:o=[],image:s}=e;return u.jsxs(B2,{onClick:t,children:[u.jsx(Q2,{src:s,alt:i}),u.jsx("div",{children:u.jsx(H2,{symbols:r.length,children:r})}),u.jsx(nd,{title:i,about:o}),n==="mobile"&&u.jsx(Y2,{children:"Детальніше"})]})},G2=({item:e})=>{const[t,n]=M.useState(!1),r=Ia(),i=()=>{r==="mobile"&&n(o=>!o)};return u.jsxs(R2,{children:[u.jsx(K2,{dataList:e,onClick:i}),u.jsx(I2,{isVisible:t,onClick:i,image:e.image,className:!t&&r==="mobile"?"visually-hidden":"",children:u.jsx(W2,{dataList:e})})]})},X2=()=>{const e=Ia(),[t,n]=M.useState(e==="mobile"?[...wl.slice(0,3)]:[...wl]),r=()=>{t.length>4?n(i=>i.slice(0,3)):n([...wl])};return u.jsxs(O2,{id:"projects",className:"container",style:{paddingTop:"80px",paddingBottom:"80px"},children:[u.jsx(_2,{children:"Проєкти"}),u.jsx(P2,{children:t.map(i=>u.jsx(G2,{item:i},i.category))}),e==="mobile"&&u.jsxs(T2,{onClick:r,children:[t.length>3?"Менше проєктів":"Більше проєктів",u.jsx(M2,{children:u.jsx("use",{href:K+`${t.length>3?"#icon-arrowup":"#icon-arrowdown"}`})})]})]})},q2=j.section`
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
`,J2=j.div`
  padding: 24px;
  border-radius: 16px;
  background: var(--background-white);

  @media screen and (min-width: 1920px) {
    padding: 80px;
    max-width: 828px;
    box-shadow: 0px 0px 8px 0px rgba(27, 54, 65, 0.08);
  }
`,Z2=j.div`
  display: flex;
  flex-direction: column;
  gap: 16px;
  margin-bottom: 24px;

  @media screen and (min-width: 1920px) {
    gap: 40px;
    margin-bottom: 40px;
  }
`,eS=j.h2`
  color: var(--typography-bluedark);
  font-size: 24px;
  font-weight: 600;
  line-height: 32px;

  @media screen and (min-width: 1920px) {
    font-size: 48px;
    line-height: 56px;
  }
`,tS=j.h2`
  color: var(--typography-bluedark);
  font-weight: 500;
  font-size: 15px;
  line-height: 22px;

  @media screen and (min-width: 1920px) {
    font-size: 20px;
    line-height: 28px;
  }
`,nS=j.ul`
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
`,Sl=j.svg`
  width: 24px;
  height: 24px;
  fill: var(--background-white);
  stroke-width: 4px;
`,kl=j.p`
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
`,rS="/healthy-management-project/assets/mob_olga_with_book1x-el2yagUK.webp",iS="/healthy-management-project/assets/mob_olga_with_book@2x-VYbutQBw.jpg",oS="/healthy-management-project/assets/mob_olga_with_book1x-fAO0seCI.jpg",sS="/healthy-management-project/assets/olga_with_book1x-SrpRZlIL.webp",aS="/healthy-management-project/assets/olga_with_book2x-na-cAYtV.webp",lS="/healthy-management-project/assets/olga_with_book1x-o5i5B_Z7.jpg",uS="/healthy-management-project/assets/olga_with_book_768_1x-q5jz0R6v.webp",cS="/healthy-management-project/assets/olga_with_book_768@2x-aSleAY5U.webp",dS="/healthy-management-project/assets/olga_with_book_768_1x-xn58vLYQ.jpg",fS="/healthy-management-project/assets/olga_with_book_1440_1x-Z35ryV4g.webp",op="/healthy-management-project/assets/olga_with_book_1440@2x-KX3o3AYH.webp",pS=()=>u.jsxs(q2,{className:"container",children:[u.jsxs(J2,{children:[u.jsxs(Z2,{children:[u.jsx(eS,{children:"Принципи роботи"}),u.jsx(tS,{children:"Наші принципи роботи полягають у співдії з ціннісними брендами та командами, які готові до чесної співпраці, щоб сприяти досягненню поставлених цілей. Готові ділитися власним досвідом та створювати стратегії здорового менеджменту та розвитку, маркетингу та сервісу"})]}),u.jsxs(nS,{children:[u.jsxs(bl,{children:[u.jsx(Sl,{children:u.jsx("use",{href:`${K}#icon-done-yellow`})}),u.jsx(kl,{children:"Більше 18 років досвіду в маркетингу та комунікаціях"})]}),u.jsxs(bl,{children:[u.jsx(Sl,{children:u.jsx("use",{href:`${K}#icon-done-yellow`})}),u.jsx(kl,{children:"Глибоке розуміння бізнес-процесів медичних закладів"})]}),u.jsxs(bl,{children:[u.jsx(Sl,{children:u.jsx("use",{href:`${K}#icon-done-yellow`})}),u.jsx(kl,{children:"Використання принципів доказової медицини"})]})]})]}),u.jsx(oe,{minWidth:375,maxWidth:767,children:u.jsx("img",{srcSet:`${rS} 1x, ${iS} 2x`,src:oS,alt:"Ольга Поліщук - ваш ментор в медичній галузі",loading:"lazy"})}),u.jsx(oe,{minWidth:768,maxWidth:1439,children:u.jsx("img",{srcSet:`${uS} 1x, ${cS} 2x`,src:dS,alt:"Ольга Поліщук - ваш ментор в медичній галузі",loading:"lazy"})}),u.jsx(oe,{minWidth:1440,maxWidth:1919,children:u.jsx("img",{srcSet:`${fS} 1x, ${op} 2x`,src:op,alt:"Ольга Поліщук - ваш ментор в медичній галузі",loading:"lazy"})}),u.jsx(oe,{minWidth:1920,children:u.jsx("img",{srcSet:`${sS} 1x, ${aS} 2x`,src:lS,alt:"Ольга Поліщук - ваш ментор в медичній галузі",loading:"lazy"})})]}),hS=j.button`
  display: flex;
  align-items: center;
  justify-content: center;
  width: 44px;
  height: 44px;
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
    width: 56px;
    height: 56px;
    right: 80px;
  }

  @media screen and (min-width: 1920px) {
    right: 120px;
  }
`,mS=()=>{const[e,t]=M.useState(!1);M.useEffect(()=>{const r=()=>{const i=window.scrollY,o=document.getElementById("footer"),s=window.innerHeight+window.scrollY-o.offsetTop,l=Math.max(80,s);t(i>480||s>80),document.documentElement.style.setProperty("--scroll-to-top-bottom",`${l}px`)};return window.addEventListener("scroll",r),()=>{window.removeEventListener("scroll",r)}},[]);const n=()=>{window.scrollTo({top:0,behavior:"smooth"})};return u.jsx(u.Fragment,{children:e&&u.jsx(hS,{onClick:n,children:u.jsx("svg",{width:"24",height:"24",children:u.jsx("use",{href:`${K}#icon-arrowup`})})})})};function nv(e,t){return function(){return e.apply(t,arguments)}}const{toString:gS}=Object.prototype,{getPrototypeOf:rd}=Object,Da=(e=>t=>{const n=gS.call(t);return e[n]||(e[n]=n.slice(8,-1).toLowerCase())})(Object.create(null)),ln=e=>(e=e.toLowerCase(),t=>Da(t)===e),La=e=>t=>typeof t===e,{isArray:ii}=Array,so=La("undefined");function vS(e){return e!==null&&!so(e)&&e.constructor!==null&&!so(e.constructor)&&Lt(e.constructor.isBuffer)&&e.constructor.isBuffer(e)}const rv=ln("ArrayBuffer");function xS(e){let t;return typeof ArrayBuffer<"u"&&ArrayBuffer.isView?t=ArrayBuffer.isView(e):t=e&&e.buffer&&rv(e.buffer),t}const yS=La("string"),Lt=La("function"),iv=La("number"),Aa=e=>e!==null&&typeof e=="object",wS=e=>e===!0||e===!1,ps=e=>{if(Da(e)!=="object")return!1;const t=rd(e);return(t===null||t===Object.prototype||Object.getPrototypeOf(t)===null)&&!(Symbol.toStringTag in e)&&!(Symbol.iterator in e)},bS=ln("Date"),SS=ln("File"),kS=ln("Blob"),jS=ln("FileList"),CS=e=>Aa(e)&&Lt(e.pipe),ES=e=>{let t;return e&&(typeof FormData=="function"&&e instanceof FormData||Lt(e.append)&&((t=Da(e))==="formdata"||t==="object"&&Lt(e.toString)&&e.toString()==="[object FormData]"))},OS=ln("URLSearchParams"),_S=e=>e.trim?e.trim():e.replace(/^[\s\uFEFF\xA0]+|[\s\uFEFF\xA0]+$/g,"");function go(e,t,{allOwnKeys:n=!1}={}){if(e===null||typeof e>"u")return;let r,i;if(typeof e!="object"&&(e=[e]),ii(e))for(r=0,i=e.length;r<i;r++)t.call(null,e[r],r,e);else{const o=n?Object.getOwnPropertyNames(e):Object.keys(e),s=o.length;let l;for(r=0;r<s;r++)l=o[r],t.call(null,e[l],l,e)}}function ov(e,t){t=t.toLowerCase();const n=Object.keys(e);let r=n.length,i;for(;r-- >0;)if(i=n[r],t===i.toLowerCase())return i;return null}const sv=typeof globalThis<"u"?globalThis:typeof self<"u"?self:typeof window<"u"?window:global,av=e=>!so(e)&&e!==sv;function Nu(){const{caseless:e}=av(this)&&this||{},t={},n=(r,i)=>{const o=e&&ov(t,i)||i;ps(t[o])&&ps(r)?t[o]=Nu(t[o],r):ps(r)?t[o]=Nu({},r):ii(r)?t[o]=r.slice():t[o]=r};for(let r=0,i=arguments.length;r<i;r++)arguments[r]&&go(arguments[r],n);return t}const PS=(e,t,n,{allOwnKeys:r}={})=>(go(t,(i,o)=>{n&&Lt(i)?e[o]=nv(i,n):e[o]=i},{allOwnKeys:r}),e),TS=e=>(e.charCodeAt(0)===65279&&(e=e.slice(1)),e),MS=(e,t,n,r)=>{e.prototype=Object.create(t.prototype,r),e.prototype.constructor=e,Object.defineProperty(e,"super",{value:t.prototype}),n&&Object.assign(e.prototype,n)},RS=(e,t,n,r)=>{let i,o,s;const l={};if(t=t||{},e==null)return t;do{for(i=Object.getOwnPropertyNames(e),o=i.length;o-- >0;)s=i[o],(!r||r(s,e,t))&&!l[s]&&(t[s]=e[s],l[s]=!0);e=n!==!1&&rd(e)}while(e&&(!n||n(e,t))&&e!==Object.prototype);return t},IS=(e,t,n)=>{e=String(e),(n===void 0||n>e.length)&&(n=e.length),n-=t.length;const r=e.indexOf(t,n);return r!==-1&&r===n},DS=e=>{if(!e)return null;if(ii(e))return e;let t=e.length;if(!iv(t))return null;const n=new Array(t);for(;t-- >0;)n[t]=e[t];return n},LS=(e=>t=>e&&t instanceof e)(typeof Uint8Array<"u"&&rd(Uint8Array)),AS=(e,t)=>{const r=(e&&e[Symbol.iterator]).call(e);let i;for(;(i=r.next())&&!i.done;){const o=i.value;t.call(e,o[0],o[1])}},FS=(e,t)=>{let n;const r=[];for(;(n=e.exec(t))!==null;)r.push(n);return r},zS=ln("HTMLFormElement"),VS=e=>e.toLowerCase().replace(/[-_\s]([a-z\d])(\w*)/g,function(n,r,i){return r.toUpperCase()+i}),sp=(({hasOwnProperty:e})=>(t,n)=>e.call(t,n))(Object.prototype),NS=ln("RegExp"),lv=(e,t)=>{const n=Object.getOwnPropertyDescriptors(e),r={};go(n,(i,o)=>{let s;(s=t(i,o,e))!==!1&&(r[o]=s||i)}),Object.defineProperties(e,r)},$S=e=>{lv(e,(t,n)=>{if(Lt(e)&&["arguments","caller","callee"].indexOf(n)!==-1)return!1;const r=e[n];if(Lt(r)){if(t.enumerable=!1,"writable"in t){t.writable=!1;return}t.set||(t.set=()=>{throw Error("Can not rewrite read-only method '"+n+"'")})}})},US=(e,t)=>{const n={},r=i=>{i.forEach(o=>{n[o]=!0})};return ii(e)?r(e):r(String(e).split(t)),n},WS=()=>{},BS=(e,t)=>(e=+e,Number.isFinite(e)?e:t),jl="abcdefghijklmnopqrstuvwxyz",ap="0123456789",uv={DIGIT:ap,ALPHA:jl,ALPHA_DIGIT:jl+jl.toUpperCase()+ap},HS=(e=16,t=uv.ALPHA_DIGIT)=>{let n="";const{length:r}=t;for(;e--;)n+=t[Math.random()*r|0];return n};function QS(e){return!!(e&&Lt(e.append)&&e[Symbol.toStringTag]==="FormData"&&e[Symbol.iterator])}const YS=e=>{const t=new Array(10),n=(r,i)=>{if(Aa(r)){if(t.indexOf(r)>=0)return;if(!("toJSON"in r)){t[i]=r;const o=ii(r)?[]:{};return go(r,(s,l)=>{const a=n(s,i+1);!so(a)&&(o[l]=a)}),t[i]=void 0,o}}return r};return n(e,0)},KS=ln("AsyncFunction"),GS=e=>e&&(Aa(e)||Lt(e))&&Lt(e.then)&&Lt(e.catch),R={isArray:ii,isArrayBuffer:rv,isBuffer:vS,isFormData:ES,isArrayBufferView:xS,isString:yS,isNumber:iv,isBoolean:wS,isObject:Aa,isPlainObject:ps,isUndefined:so,isDate:bS,isFile:SS,isBlob:kS,isRegExp:NS,isFunction:Lt,isStream:CS,isURLSearchParams:OS,isTypedArray:LS,isFileList:jS,forEach:go,merge:Nu,extend:PS,trim:_S,stripBOM:TS,inherits:MS,toFlatObject:RS,kindOf:Da,kindOfTest:ln,endsWith:IS,toArray:DS,forEachEntry:AS,matchAll:FS,isHTMLForm:zS,hasOwnProperty:sp,hasOwnProp:sp,reduceDescriptors:lv,freezeMethods:$S,toObjectSet:US,toCamelCase:VS,noop:WS,toFiniteNumber:BS,findKey:ov,global:sv,isContextDefined:av,ALPHABET:uv,generateString:HS,isSpecCompliantForm:QS,toJSONObject:YS,isAsyncFn:KS,isThenable:GS};function fe(e,t,n,r,i){Error.call(this),Error.captureStackTrace?Error.captureStackTrace(this,this.constructor):this.stack=new Error().stack,this.message=e,this.name="AxiosError",t&&(this.code=t),n&&(this.config=n),r&&(this.request=r),i&&(this.response=i)}R.inherits(fe,Error,{toJSON:function(){return{message:this.message,name:this.name,description:this.description,number:this.number,fileName:this.fileName,lineNumber:this.lineNumber,columnNumber:this.columnNumber,stack:this.stack,config:R.toJSONObject(this.config),code:this.code,status:this.response&&this.response.status?this.response.status:null}}});const cv=fe.prototype,dv={};["ERR_BAD_OPTION_VALUE","ERR_BAD_OPTION","ECONNABORTED","ETIMEDOUT","ERR_NETWORK","ERR_FR_TOO_MANY_REDIRECTS","ERR_DEPRECATED","ERR_BAD_RESPONSE","ERR_BAD_REQUEST","ERR_CANCELED","ERR_NOT_SUPPORT","ERR_INVALID_URL"].forEach(e=>{dv[e]={value:e}});Object.defineProperties(fe,dv);Object.defineProperty(cv,"isAxiosError",{value:!0});fe.from=(e,t,n,r,i,o)=>{const s=Object.create(cv);return R.toFlatObject(e,s,function(a){return a!==Error.prototype},l=>l!=="isAxiosError"),fe.call(s,e.message,t,n,r,i),s.cause=e,s.name=e.name,o&&Object.assign(s,o),s};const XS=null;function $u(e){return R.isPlainObject(e)||R.isArray(e)}function fv(e){return R.endsWith(e,"[]")?e.slice(0,-2):e}function lp(e,t,n){return e?e.concat(t).map(function(i,o){return i=fv(i),!n&&o?"["+i+"]":i}).join(n?".":""):t}function qS(e){return R.isArray(e)&&!e.some($u)}const JS=R.toFlatObject(R,{},null,function(t){return/^is[A-Z]/.test(t)});function Fa(e,t,n){if(!R.isObject(e))throw new TypeError("target must be an object");t=t||new FormData,n=R.toFlatObject(n,{metaTokens:!0,dots:!1,indexes:!1},!1,function(v,w){return!R.isUndefined(w[v])});const r=n.metaTokens,i=n.visitor||d,o=n.dots,s=n.indexes,a=(n.Blob||typeof Blob<"u"&&Blob)&&R.isSpecCompliantForm(t);if(!R.isFunction(i))throw new TypeError("visitor must be a function");function c(g){if(g===null)return"";if(R.isDate(g))return g.toISOString();if(!a&&R.isBlob(g))throw new fe("Blob is not supported. Use a Buffer instead.");return R.isArrayBuffer(g)||R.isTypedArray(g)?a&&typeof Blob=="function"?new Blob([g]):Buffer.from(g):g}function d(g,v,w){let p=g;if(g&&!w&&typeof g=="object"){if(R.endsWith(v,"{}"))v=r?v:v.slice(0,-2),g=JSON.stringify(g);else if(R.isArray(g)&&qS(g)||(R.isFileList(g)||R.endsWith(v,"[]"))&&(p=R.toArray(g)))return v=fv(v),p.forEach(function(x,b){!(R.isUndefined(x)||x===null)&&t.append(s===!0?lp([v],b,o):s===null?v:v+"[]",c(x))}),!1}return $u(g)?!0:(t.append(lp(w,v,o),c(g)),!1)}const f=[],m=Object.assign(JS,{defaultVisitor:d,convertValue:c,isVisitable:$u});function y(g,v){if(!R.isUndefined(g)){if(f.indexOf(g)!==-1)throw Error("Circular reference detected in "+v.join("."));f.push(g),R.forEach(g,function(p,h){(!(R.isUndefined(p)||p===null)&&i.call(t,p,R.isString(h)?h.trim():h,v,m))===!0&&y(p,v?v.concat(h):[h])}),f.pop()}}if(!R.isObject(e))throw new TypeError("data must be an object");return y(e),t}function up(e){const t={"!":"%21","'":"%27","(":"%28",")":"%29","~":"%7E","%20":"+","%00":"\0"};return encodeURIComponent(e).replace(/[!'()~]|%20|%00/g,function(r){return t[r]})}function id(e,t){this._pairs=[],e&&Fa(e,this,t)}const pv=id.prototype;pv.append=function(t,n){this._pairs.push([t,n])};pv.toString=function(t){const n=t?function(r){return t.call(this,r,up)}:up;return this._pairs.map(function(i){return n(i[0])+"="+n(i[1])},"").join("&")};function ZS(e){return encodeURIComponent(e).replace(/%3A/gi,":").replace(/%24/g,"$").replace(/%2C/gi,",").replace(/%20/g,"+").replace(/%5B/gi,"[").replace(/%5D/gi,"]")}function hv(e,t,n){if(!t)return e;const r=n&&n.encode||ZS,i=n&&n.serialize;let o;if(i?o=i(t,n):o=R.isURLSearchParams(t)?t.toString():new id(t,n).toString(r),o){const s=e.indexOf("#");s!==-1&&(e=e.slice(0,s)),e+=(e.indexOf("?")===-1?"?":"&")+o}return e}class ek{constructor(){this.handlers=[]}use(t,n,r){return this.handlers.push({fulfilled:t,rejected:n,synchronous:r?r.synchronous:!1,runWhen:r?r.runWhen:null}),this.handlers.length-1}eject(t){this.handlers[t]&&(this.handlers[t]=null)}clear(){this.handlers&&(this.handlers=[])}forEach(t){R.forEach(this.handlers,function(r){r!==null&&t(r)})}}const cp=ek,mv={silentJSONParsing:!0,forcedJSONParsing:!0,clarifyTimeoutError:!1},tk=typeof URLSearchParams<"u"?URLSearchParams:id,nk=typeof FormData<"u"?FormData:null,rk=typeof Blob<"u"?Blob:null,ik={isBrowser:!0,classes:{URLSearchParams:tk,FormData:nk,Blob:rk},protocols:["http","https","file","blob","url","data"]},gv=typeof window<"u"&&typeof document<"u",ok=(e=>gv&&["ReactNative","NativeScript","NS"].indexOf(e)<0)(typeof navigator<"u"&&navigator.product),sk=typeof WorkerGlobalScope<"u"&&self instanceof WorkerGlobalScope&&typeof self.importScripts=="function",ak=Object.freeze(Object.defineProperty({__proto__:null,hasBrowserEnv:gv,hasStandardBrowserEnv:ok,hasStandardBrowserWebWorkerEnv:sk},Symbol.toStringTag,{value:"Module"})),nn={...ak,...ik};function lk(e,t){return Fa(e,new nn.classes.URLSearchParams,Object.assign({visitor:function(n,r,i,o){return nn.isNode&&R.isBuffer(n)?(this.append(r,n.toString("base64")),!1):o.defaultVisitor.apply(this,arguments)}},t))}function uk(e){return R.matchAll(/\w+|\[(\w*)]/g,e).map(t=>t[0]==="[]"?"":t[1]||t[0])}function ck(e){const t={},n=Object.keys(e);let r;const i=n.length;let o;for(r=0;r<i;r++)o=n[r],t[o]=e[o];return t}function vv(e){function t(n,r,i,o){let s=n[o++];const l=Number.isFinite(+s),a=o>=n.length;return s=!s&&R.isArray(i)?i.length:s,a?(R.hasOwnProp(i,s)?i[s]=[i[s],r]:i[s]=r,!l):((!i[s]||!R.isObject(i[s]))&&(i[s]=[]),t(n,r,i[s],o)&&R.isArray(i[s])&&(i[s]=ck(i[s])),!l)}if(R.isFormData(e)&&R.isFunction(e.entries)){const n={};return R.forEachEntry(e,(r,i)=>{t(uk(r),i,n,0)}),n}return null}function dk(e,t,n){if(R.isString(e))try{return(t||JSON.parse)(e),R.trim(e)}catch(r){if(r.name!=="SyntaxError")throw r}return(n||JSON.stringify)(e)}const od={transitional:mv,adapter:["xhr","http"],transformRequest:[function(t,n){const r=n.getContentType()||"",i=r.indexOf("application/json")>-1,o=R.isObject(t);if(o&&R.isHTMLForm(t)&&(t=new FormData(t)),R.isFormData(t))return i&&i?JSON.stringify(vv(t)):t;if(R.isArrayBuffer(t)||R.isBuffer(t)||R.isStream(t)||R.isFile(t)||R.isBlob(t))return t;if(R.isArrayBufferView(t))return t.buffer;if(R.isURLSearchParams(t))return n.setContentType("application/x-www-form-urlencoded;charset=utf-8",!1),t.toString();let l;if(o){if(r.indexOf("application/x-www-form-urlencoded")>-1)return lk(t,this.formSerializer).toString();if((l=R.isFileList(t))||r.indexOf("multipart/form-data")>-1){const a=this.env&&this.env.FormData;return Fa(l?{"files[]":t}:t,a&&new a,this.formSerializer)}}return o||i?(n.setContentType("application/json",!1),dk(t)):t}],transformResponse:[function(t){const n=this.transitional||od.transitional,r=n&&n.forcedJSONParsing,i=this.responseType==="json";if(t&&R.isString(t)&&(r&&!this.responseType||i)){const s=!(n&&n.silentJSONParsing)&&i;try{return JSON.parse(t)}catch(l){if(s)throw l.name==="SyntaxError"?fe.from(l,fe.ERR_BAD_RESPONSE,this,null,this.response):l}}return t}],timeout:0,xsrfCookieName:"XSRF-TOKEN",xsrfHeaderName:"X-XSRF-TOKEN",maxContentLength:-1,maxBodyLength:-1,env:{FormData:nn.classes.FormData,Blob:nn.classes.Blob},validateStatus:function(t){return t>=200&&t<300},headers:{common:{Accept:"application/json, text/plain, */*","Content-Type":void 0}}};R.forEach(["delete","get","head","post","put","patch"],e=>{od.headers[e]={}});const sd=od,fk=R.toObjectSet(["age","authorization","content-length","content-type","etag","expires","from","host","if-modified-since","if-unmodified-since","last-modified","location","max-forwards","proxy-authorization","referer","retry-after","user-agent"]),pk=e=>{const t={};let n,r,i;return e&&e.split(`
`).forEach(function(s){i=s.indexOf(":"),n=s.substring(0,i).trim().toLowerCase(),r=s.substring(i+1).trim(),!(!n||t[n]&&fk[n])&&(n==="set-cookie"?t[n]?t[n].push(r):t[n]=[r]:t[n]=t[n]?t[n]+", "+r:r)}),t},dp=Symbol("internals");function xi(e){return e&&String(e).trim().toLowerCase()}function hs(e){return e===!1||e==null?e:R.isArray(e)?e.map(hs):String(e)}function hk(e){const t=Object.create(null),n=/([^\s,;=]+)\s*(?:=\s*([^,;]+))?/g;let r;for(;r=n.exec(e);)t[r[1]]=r[2];return t}const mk=e=>/^[-_a-zA-Z0-9^`|~,!#$%&'*+.]+$/.test(e.trim());function Cl(e,t,n,r,i){if(R.isFunction(r))return r.call(this,t,n);if(i&&(t=n),!!R.isString(t)){if(R.isString(r))return t.indexOf(r)!==-1;if(R.isRegExp(r))return r.test(t)}}function gk(e){return e.trim().toLowerCase().replace(/([a-z\d])(\w*)/g,(t,n,r)=>n.toUpperCase()+r)}function vk(e,t){const n=R.toCamelCase(" "+t);["get","set","has"].forEach(r=>{Object.defineProperty(e,r+n,{value:function(i,o,s){return this[r].call(this,t,i,o,s)},configurable:!0})})}class za{constructor(t){t&&this.set(t)}set(t,n,r){const i=this;function o(l,a,c){const d=xi(a);if(!d)throw new Error("header name must be a non-empty string");const f=R.findKey(i,d);(!f||i[f]===void 0||c===!0||c===void 0&&i[f]!==!1)&&(i[f||a]=hs(l))}const s=(l,a)=>R.forEach(l,(c,d)=>o(c,d,a));return R.isPlainObject(t)||t instanceof this.constructor?s(t,n):R.isString(t)&&(t=t.trim())&&!mk(t)?s(pk(t),n):t!=null&&o(n,t,r),this}get(t,n){if(t=xi(t),t){const r=R.findKey(this,t);if(r){const i=this[r];if(!n)return i;if(n===!0)return hk(i);if(R.isFunction(n))return n.call(this,i,r);if(R.isRegExp(n))return n.exec(i);throw new TypeError("parser must be boolean|regexp|function")}}}has(t,n){if(t=xi(t),t){const r=R.findKey(this,t);return!!(r&&this[r]!==void 0&&(!n||Cl(this,this[r],r,n)))}return!1}delete(t,n){const r=this;let i=!1;function o(s){if(s=xi(s),s){const l=R.findKey(r,s);l&&(!n||Cl(r,r[l],l,n))&&(delete r[l],i=!0)}}return R.isArray(t)?t.forEach(o):o(t),i}clear(t){const n=Object.keys(this);let r=n.length,i=!1;for(;r--;){const o=n[r];(!t||Cl(this,this[o],o,t,!0))&&(delete this[o],i=!0)}return i}normalize(t){const n=this,r={};return R.forEach(this,(i,o)=>{const s=R.findKey(r,o);if(s){n[s]=hs(i),delete n[o];return}const l=t?gk(o):String(o).trim();l!==o&&delete n[o],n[l]=hs(i),r[l]=!0}),this}concat(...t){return this.constructor.concat(this,...t)}toJSON(t){const n=Object.create(null);return R.forEach(this,(r,i)=>{r!=null&&r!==!1&&(n[i]=t&&R.isArray(r)?r.join(", "):r)}),n}[Symbol.iterator](){return Object.entries(this.toJSON())[Symbol.iterator]()}toString(){return Object.entries(this.toJSON()).map(([t,n])=>t+": "+n).join(`
`)}get[Symbol.toStringTag](){return"AxiosHeaders"}static from(t){return t instanceof this?t:new this(t)}static concat(t,...n){const r=new this(t);return n.forEach(i=>r.set(i)),r}static accessor(t){const r=(this[dp]=this[dp]={accessors:{}}).accessors,i=this.prototype;function o(s){const l=xi(s);r[l]||(vk(i,s),r[l]=!0)}return R.isArray(t)?t.forEach(o):o(t),this}}za.accessor(["Content-Type","Content-Length","Accept","Accept-Encoding","User-Agent","Authorization"]);R.reduceDescriptors(za.prototype,({value:e},t)=>{let n=t[0].toUpperCase()+t.slice(1);return{get:()=>e,set(r){this[n]=r}}});R.freezeMethods(za);const xn=za;function El(e,t){const n=this||sd,r=t||n,i=xn.from(r.headers);let o=r.data;return R.forEach(e,function(l){o=l.call(n,o,i.normalize(),t?t.status:void 0)}),i.normalize(),o}function xv(e){return!!(e&&e.__CANCEL__)}function vo(e,t,n){fe.call(this,e??"canceled",fe.ERR_CANCELED,t,n),this.name="CanceledError"}R.inherits(vo,fe,{__CANCEL__:!0});function xk(e,t,n){const r=n.config.validateStatus;!n.status||!r||r(n.status)?e(n):t(new fe("Request failed with status code "+n.status,[fe.ERR_BAD_REQUEST,fe.ERR_BAD_RESPONSE][Math.floor(n.status/100)-4],n.config,n.request,n))}const yk=nn.hasStandardBrowserEnv?{write(e,t,n,r,i,o){const s=[e+"="+encodeURIComponent(t)];R.isNumber(n)&&s.push("expires="+new Date(n).toGMTString()),R.isString(r)&&s.push("path="+r),R.isString(i)&&s.push("domain="+i),o===!0&&s.push("secure"),document.cookie=s.join("; ")},read(e){const t=document.cookie.match(new RegExp("(^|;\\s*)("+e+")=([^;]*)"));return t?decodeURIComponent(t[3]):null},remove(e){this.write(e,"",Date.now()-864e5)}}:{write(){},read(){return null},remove(){}};function wk(e){return/^([a-z][a-z\d+\-.]*:)?\/\//i.test(e)}function bk(e,t){return t?e.replace(/\/+$/,"")+"/"+t.replace(/^\/+/,""):e}function yv(e,t){return e&&!wk(t)?bk(e,t):t}const Sk=nn.hasStandardBrowserEnv?function(){const t=/(msie|trident)/i.test(navigator.userAgent),n=document.createElement("a");let r;function i(o){let s=o;return t&&(n.setAttribute("href",s),s=n.href),n.setAttribute("href",s),{href:n.href,protocol:n.protocol?n.protocol.replace(/:$/,""):"",host:n.host,search:n.search?n.search.replace(/^\?/,""):"",hash:n.hash?n.hash.replace(/^#/,""):"",hostname:n.hostname,port:n.port,pathname:n.pathname.charAt(0)==="/"?n.pathname:"/"+n.pathname}}return r=i(window.location.href),function(s){const l=R.isString(s)?i(s):s;return l.protocol===r.protocol&&l.host===r.host}}():function(){return function(){return!0}}();function kk(e){const t=/^([-+\w]{1,25})(:?\/\/|:)/.exec(e);return t&&t[1]||""}function jk(e,t){e=e||10;const n=new Array(e),r=new Array(e);let i=0,o=0,s;return t=t!==void 0?t:1e3,function(a){const c=Date.now(),d=r[o];s||(s=c),n[i]=a,r[i]=c;let f=o,m=0;for(;f!==i;)m+=n[f++],f=f%e;if(i=(i+1)%e,i===o&&(o=(o+1)%e),c-s<t)return;const y=d&&c-d;return y?Math.round(m*1e3/y):void 0}}function fp(e,t){let n=0;const r=jk(50,250);return i=>{const o=i.loaded,s=i.lengthComputable?i.total:void 0,l=o-n,a=r(l),c=o<=s;n=o;const d={loaded:o,total:s,progress:s?o/s:void 0,bytes:l,rate:a||void 0,estimated:a&&s&&c?(s-o)/a:void 0,event:i};d[t?"download":"upload"]=!0,e(d)}}const Ck=typeof XMLHttpRequest<"u",Ek=Ck&&function(e){return new Promise(function(n,r){let i=e.data;const o=xn.from(e.headers).normalize();let{responseType:s,withXSRFToken:l}=e,a;function c(){e.cancelToken&&e.cancelToken.unsubscribe(a),e.signal&&e.signal.removeEventListener("abort",a)}let d;if(R.isFormData(i)){if(nn.hasStandardBrowserEnv||nn.hasStandardBrowserWebWorkerEnv)o.setContentType(!1);else if((d=o.getContentType())!==!1){const[v,...w]=d?d.split(";").map(p=>p.trim()).filter(Boolean):[];o.setContentType([v||"multipart/form-data",...w].join("; "))}}let f=new XMLHttpRequest;if(e.auth){const v=e.auth.username||"",w=e.auth.password?unescape(encodeURIComponent(e.auth.password)):"";o.set("Authorization","Basic "+btoa(v+":"+w))}const m=yv(e.baseURL,e.url);f.open(e.method.toUpperCase(),hv(m,e.params,e.paramsSerializer),!0),f.timeout=e.timeout;function y(){if(!f)return;const v=xn.from("getAllResponseHeaders"in f&&f.getAllResponseHeaders()),p={data:!s||s==="text"||s==="json"?f.responseText:f.response,status:f.status,statusText:f.statusText,headers:v,config:e,request:f};xk(function(x){n(x),c()},function(x){r(x),c()},p),f=null}if("onloadend"in f?f.onloadend=y:f.onreadystatechange=function(){!f||f.readyState!==4||f.status===0&&!(f.responseURL&&f.responseURL.indexOf("file:")===0)||setTimeout(y)},f.onabort=function(){f&&(r(new fe("Request aborted",fe.ECONNABORTED,e,f)),f=null)},f.onerror=function(){r(new fe("Network Error",fe.ERR_NETWORK,e,f)),f=null},f.ontimeout=function(){let w=e.timeout?"timeout of "+e.timeout+"ms exceeded":"timeout exceeded";const p=e.transitional||mv;e.timeoutErrorMessage&&(w=e.timeoutErrorMessage),r(new fe(w,p.clarifyTimeoutError?fe.ETIMEDOUT:fe.ECONNABORTED,e,f)),f=null},nn.hasStandardBrowserEnv&&(l&&R.isFunction(l)&&(l=l(e)),l||l!==!1&&Sk(m))){const v=e.xsrfHeaderName&&e.xsrfCookieName&&yk.read(e.xsrfCookieName);v&&o.set(e.xsrfHeaderName,v)}i===void 0&&o.setContentType(null),"setRequestHeader"in f&&R.forEach(o.toJSON(),function(w,p){f.setRequestHeader(p,w)}),R.isUndefined(e.withCredentials)||(f.withCredentials=!!e.withCredentials),s&&s!=="json"&&(f.responseType=e.responseType),typeof e.onDownloadProgress=="function"&&f.addEventListener("progress",fp(e.onDownloadProgress,!0)),typeof e.onUploadProgress=="function"&&f.upload&&f.upload.addEventListener("progress",fp(e.onUploadProgress)),(e.cancelToken||e.signal)&&(a=v=>{f&&(r(!v||v.type?new vo(null,e,f):v),f.abort(),f=null)},e.cancelToken&&e.cancelToken.subscribe(a),e.signal&&(e.signal.aborted?a():e.signal.addEventListener("abort",a)));const g=kk(m);if(g&&nn.protocols.indexOf(g)===-1){r(new fe("Unsupported protocol "+g+":",fe.ERR_BAD_REQUEST,e));return}f.send(i||null)})},Uu={http:XS,xhr:Ek};R.forEach(Uu,(e,t)=>{if(e){try{Object.defineProperty(e,"name",{value:t})}catch{}Object.defineProperty(e,"adapterName",{value:t})}});const pp=e=>`- ${e}`,Ok=e=>R.isFunction(e)||e===null||e===!1,wv={getAdapter:e=>{e=R.isArray(e)?e:[e];const{length:t}=e;let n,r;const i={};for(let o=0;o<t;o++){n=e[o];let s;if(r=n,!Ok(n)&&(r=Uu[(s=String(n)).toLowerCase()],r===void 0))throw new fe(`Unknown adapter '${s}'`);if(r)break;i[s||"#"+o]=r}if(!r){const o=Object.entries(i).map(([l,a])=>`adapter ${l} `+(a===!1?"is not supported by the environment":"is not available in the build"));let s=t?o.length>1?`since :
`+o.map(pp).join(`
`):" "+pp(o[0]):"as no adapter specified";throw new fe("There is no suitable adapter to dispatch the request "+s,"ERR_NOT_SUPPORT")}return r},adapters:Uu};function Ol(e){if(e.cancelToken&&e.cancelToken.throwIfRequested(),e.signal&&e.signal.aborted)throw new vo(null,e)}function hp(e){return Ol(e),e.headers=xn.from(e.headers),e.data=El.call(e,e.transformRequest),["post","put","patch"].indexOf(e.method)!==-1&&e.headers.setContentType("application/x-www-form-urlencoded",!1),wv.getAdapter(e.adapter||sd.adapter)(e).then(function(r){return Ol(e),r.data=El.call(e,e.transformResponse,r),r.headers=xn.from(r.headers),r},function(r){return xv(r)||(Ol(e),r&&r.response&&(r.response.data=El.call(e,e.transformResponse,r.response),r.response.headers=xn.from(r.response.headers))),Promise.reject(r)})}const mp=e=>e instanceof xn?e.toJSON():e;function Zr(e,t){t=t||{};const n={};function r(c,d,f){return R.isPlainObject(c)&&R.isPlainObject(d)?R.merge.call({caseless:f},c,d):R.isPlainObject(d)?R.merge({},d):R.isArray(d)?d.slice():d}function i(c,d,f){if(R.isUndefined(d)){if(!R.isUndefined(c))return r(void 0,c,f)}else return r(c,d,f)}function o(c,d){if(!R.isUndefined(d))return r(void 0,d)}function s(c,d){if(R.isUndefined(d)){if(!R.isUndefined(c))return r(void 0,c)}else return r(void 0,d)}function l(c,d,f){if(f in t)return r(c,d);if(f in e)return r(void 0,c)}const a={url:o,method:o,data:o,baseURL:s,transformRequest:s,transformResponse:s,paramsSerializer:s,timeout:s,timeoutMessage:s,withCredentials:s,withXSRFToken:s,adapter:s,responseType:s,xsrfCookieName:s,xsrfHeaderName:s,onUploadProgress:s,onDownloadProgress:s,decompress:s,maxContentLength:s,maxBodyLength:s,beforeRedirect:s,transport:s,httpAgent:s,httpsAgent:s,cancelToken:s,socketPath:s,responseEncoding:s,validateStatus:l,headers:(c,d)=>i(mp(c),mp(d),!0)};return R.forEach(Object.keys(Object.assign({},e,t)),function(d){const f=a[d]||i,m=f(e[d],t[d],d);R.isUndefined(m)&&f!==l||(n[d]=m)}),n}const bv="1.6.2",ad={};["object","boolean","number","function","string","symbol"].forEach((e,t)=>{ad[e]=function(r){return typeof r===e||"a"+(t<1?"n ":" ")+e}});const gp={};ad.transitional=function(t,n,r){function i(o,s){return"[Axios v"+bv+"] Transitional option '"+o+"'"+s+(r?". "+r:"")}return(o,s,l)=>{if(t===!1)throw new fe(i(s," has been removed"+(n?" in "+n:"")),fe.ERR_DEPRECATED);return n&&!gp[s]&&(gp[s]=!0,console.warn(i(s," has been deprecated since v"+n+" and will be removed in the near future"))),t?t(o,s,l):!0}};function _k(e,t,n){if(typeof e!="object")throw new fe("options must be an object",fe.ERR_BAD_OPTION_VALUE);const r=Object.keys(e);let i=r.length;for(;i-- >0;){const o=r[i],s=t[o];if(s){const l=e[o],a=l===void 0||s(l,o,e);if(a!==!0)throw new fe("option "+o+" must be "+a,fe.ERR_BAD_OPTION_VALUE);continue}if(n!==!0)throw new fe("Unknown option "+o,fe.ERR_BAD_OPTION)}}const Wu={assertOptions:_k,validators:ad},Dn=Wu.validators;class Hs{constructor(t){this.defaults=t,this.interceptors={request:new cp,response:new cp}}request(t,n){typeof t=="string"?(n=n||{},n.url=t):n=t||{},n=Zr(this.defaults,n);const{transitional:r,paramsSerializer:i,headers:o}=n;r!==void 0&&Wu.assertOptions(r,{silentJSONParsing:Dn.transitional(Dn.boolean),forcedJSONParsing:Dn.transitional(Dn.boolean),clarifyTimeoutError:Dn.transitional(Dn.boolean)},!1),i!=null&&(R.isFunction(i)?n.paramsSerializer={serialize:i}:Wu.assertOptions(i,{encode:Dn.function,serialize:Dn.function},!0)),n.method=(n.method||this.defaults.method||"get").toLowerCase();let s=o&&R.merge(o.common,o[n.method]);o&&R.forEach(["delete","get","head","post","put","patch","common"],g=>{delete o[g]}),n.headers=xn.concat(s,o);const l=[];let a=!0;this.interceptors.request.forEach(function(v){typeof v.runWhen=="function"&&v.runWhen(n)===!1||(a=a&&v.synchronous,l.unshift(v.fulfilled,v.rejected))});const c=[];this.interceptors.response.forEach(function(v){c.push(v.fulfilled,v.rejected)});let d,f=0,m;if(!a){const g=[hp.bind(this),void 0];for(g.unshift.apply(g,l),g.push.apply(g,c),m=g.length,d=Promise.resolve(n);f<m;)d=d.then(g[f++],g[f++]);return d}m=l.length;let y=n;for(f=0;f<m;){const g=l[f++],v=l[f++];try{y=g(y)}catch(w){v.call(this,w);break}}try{d=hp.call(this,y)}catch(g){return Promise.reject(g)}for(f=0,m=c.length;f<m;)d=d.then(c[f++],c[f++]);return d}getUri(t){t=Zr(this.defaults,t);const n=yv(t.baseURL,t.url);return hv(n,t.params,t.paramsSerializer)}}R.forEach(["delete","get","head","options"],function(t){Hs.prototype[t]=function(n,r){return this.request(Zr(r||{},{method:t,url:n,data:(r||{}).data}))}});R.forEach(["post","put","patch"],function(t){function n(r){return function(o,s,l){return this.request(Zr(l||{},{method:t,headers:r?{"Content-Type":"multipart/form-data"}:{},url:o,data:s}))}}Hs.prototype[t]=n(),Hs.prototype[t+"Form"]=n(!0)});const ms=Hs;class ld{constructor(t){if(typeof t!="function")throw new TypeError("executor must be a function.");let n;this.promise=new Promise(function(o){n=o});const r=this;this.promise.then(i=>{if(!r._listeners)return;let o=r._listeners.length;for(;o-- >0;)r._listeners[o](i);r._listeners=null}),this.promise.then=i=>{let o;const s=new Promise(l=>{r.subscribe(l),o=l}).then(i);return s.cancel=function(){r.unsubscribe(o)},s},t(function(o,s,l){r.reason||(r.reason=new vo(o,s,l),n(r.reason))})}throwIfRequested(){if(this.reason)throw this.reason}subscribe(t){if(this.reason){t(this.reason);return}this._listeners?this._listeners.push(t):this._listeners=[t]}unsubscribe(t){if(!this._listeners)return;const n=this._listeners.indexOf(t);n!==-1&&this._listeners.splice(n,1)}static source(){let t;return{token:new ld(function(i){t=i}),cancel:t}}}const Pk=ld;function Tk(e){return function(n){return e.apply(null,n)}}function Mk(e){return R.isObject(e)&&e.isAxiosError===!0}const Bu={Continue:100,SwitchingProtocols:101,Processing:102,EarlyHints:103,Ok:200,Created:201,Accepted:202,NonAuthoritativeInformation:203,NoContent:204,ResetContent:205,PartialContent:206,MultiStatus:207,AlreadyReported:208,ImUsed:226,MultipleChoices:300,MovedPermanently:301,Found:302,SeeOther:303,NotModified:304,UseProxy:305,Unused:306,TemporaryRedirect:307,PermanentRedirect:308,BadRequest:400,Unauthorized:401,PaymentRequired:402,Forbidden:403,NotFound:404,MethodNotAllowed:405,NotAcceptable:406,ProxyAuthenticationRequired:407,RequestTimeout:408,Conflict:409,Gone:410,LengthRequired:411,PreconditionFailed:412,PayloadTooLarge:413,UriTooLong:414,UnsupportedMediaType:415,RangeNotSatisfiable:416,ExpectationFailed:417,ImATeapot:418,MisdirectedRequest:421,UnprocessableEntity:422,Locked:423,FailedDependency:424,TooEarly:425,UpgradeRequired:426,PreconditionRequired:428,TooManyRequests:429,RequestHeaderFieldsTooLarge:431,UnavailableForLegalReasons:451,InternalServerError:500,NotImplemented:501,BadGateway:502,ServiceUnavailable:503,GatewayTimeout:504,HttpVersionNotSupported:505,VariantAlsoNegotiates:506,InsufficientStorage:507,LoopDetected:508,NotExtended:510,NetworkAuthenticationRequired:511};Object.entries(Bu).forEach(([e,t])=>{Bu[t]=e});const Rk=Bu;function Sv(e){const t=new ms(e),n=nv(ms.prototype.request,t);return R.extend(n,ms.prototype,t,{allOwnKeys:!0}),R.extend(n,t,null,{allOwnKeys:!0}),n.create=function(i){return Sv(Zr(e,i))},n}const $e=Sv(sd);$e.Axios=ms;$e.CanceledError=vo;$e.CancelToken=Pk;$e.isCancel=xv;$e.VERSION=bv;$e.toFormData=Fa;$e.AxiosError=fe;$e.Cancel=$e.CanceledError;$e.all=function(t){return Promise.all(t)};$e.spread=Tk;$e.isAxiosError=Mk;$e.mergeConfig=Zr;$e.AxiosHeaders=xn;$e.formToJSON=e=>vv(R.isHTMLForm(e)?new FormData(e):e);$e.getAdapter=wv.getAdapter;$e.HttpStatusCode=Rk;$e.default=$e;const Ik=$e;function mr(e){"@babel/helpers - typeof";return mr=typeof Symbol=="function"&&typeof Symbol.iterator=="symbol"?function(t){return typeof t}:function(t){return t&&typeof Symbol=="function"&&t.constructor===Symbol&&t!==Symbol.prototype?"symbol":typeof t},mr(e)}function Dk(e,t){if(mr(e)!=="object"||e===null)return e;var n=e[Symbol.toPrimitive];if(n!==void 0){var r=n.call(e,t||"default");if(mr(r)!=="object")return r;throw new TypeError("@@toPrimitive must return a primitive value.")}return(t==="string"?String:Number)(e)}function kv(e){var t=Dk(e,"string");return mr(t)==="symbol"?t:String(t)}function Ei(e,t,n){return t=kv(t),t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function vp(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter(function(i){return Object.getOwnPropertyDescriptor(e,i).enumerable})),n.push.apply(n,r)}return n}function X(e){for(var t=1;t<arguments.length;t++){var n=arguments[t]!=null?arguments[t]:{};t%2?vp(Object(n),!0).forEach(function(r){Ei(e,r,n[r])}):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):vp(Object(n)).forEach(function(r){Object.defineProperty(e,r,Object.getOwnPropertyDescriptor(n,r))})}return e}function Lk(e){if(Array.isArray(e))return e}function Ak(e,t){var n=e==null?null:typeof Symbol<"u"&&e[Symbol.iterator]||e["@@iterator"];if(n!=null){var r,i,o,s,l=[],a=!0,c=!1;try{if(o=(n=n.call(e)).next,t===0){if(Object(n)!==n)return;a=!1}else for(;!(a=(r=o.call(n)).done)&&(l.push(r.value),l.length!==t);a=!0);}catch(d){c=!0,i=d}finally{try{if(!a&&n.return!=null&&(s=n.return(),Object(s)!==s))return}finally{if(c)throw i}}return l}}function Hu(e,t){(t==null||t>e.length)&&(t=e.length);for(var n=0,r=new Array(t);n<t;n++)r[n]=e[n];return r}function jv(e,t){if(e){if(typeof e=="string")return Hu(e,t);var n=Object.prototype.toString.call(e).slice(8,-1);if(n==="Object"&&e.constructor&&(n=e.constructor.name),n==="Map"||n==="Set")return Array.from(e);if(n==="Arguments"||/^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n))return Hu(e,t)}}function Fk(){throw new TypeError(`Invalid attempt to destructure non-iterable instance.
In order to be iterable, non-array objects must have a [Symbol.iterator]() method.`)}function yn(e,t){return Lk(e)||Ak(e,t)||jv(e,t)||Fk()}function zk(e,t){if(e==null)return{};var n={},r=Object.keys(e),i,o;for(o=0;o<r.length;o++)i=r[o],!(t.indexOf(i)>=0)&&(n[i]=e[i]);return n}function Cn(e,t){if(e==null)return{};var n=zk(e,t),r,i;if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(i=0;i<o.length;i++)r=o[i],!(t.indexOf(r)>=0)&&Object.prototype.propertyIsEnumerable.call(e,r)&&(n[r]=e[r])}return n}var Vk=["defaultInputValue","defaultMenuIsOpen","defaultValue","inputValue","menuIsOpen","onChange","onInputChange","onMenuClose","onMenuOpen","value"];function Nk(e){var t=e.defaultInputValue,n=t===void 0?"":t,r=e.defaultMenuIsOpen,i=r===void 0?!1:r,o=e.defaultValue,s=o===void 0?null:o,l=e.inputValue,a=e.menuIsOpen,c=e.onChange,d=e.onInputChange,f=e.onMenuClose,m=e.onMenuOpen,y=e.value,g=Cn(e,Vk),v=M.useState(l!==void 0?l:n),w=yn(v,2),p=w[0],h=w[1],x=M.useState(a!==void 0?a:i),b=yn(x,2),k=b[0],_=b[1],E=M.useState(y!==void 0?y:s),P=yn(E,2),T=P[0],I=P[1],W=M.useCallback(function(z,Q){typeof c=="function"&&c(z,Q),I(z)},[c]),A=M.useCallback(function(z,Q){var Y;typeof d=="function"&&(Y=d(z,Q)),h(Y!==void 0?Y:z)},[d]),D=M.useCallback(function(){typeof m=="function"&&m(),_(!0)},[m]),q=M.useCallback(function(){typeof f=="function"&&f(),_(!1)},[f]),ee=l!==void 0?l:p,te=a!==void 0?a:k,xe=y!==void 0?y:T;return X(X({},g),{},{inputValue:ee,menuIsOpen:te,onChange:W,onInputChange:A,onMenuClose:q,onMenuOpen:D,value:xe})}function $k(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}function xp(e,t){for(var n=0;n<t.length;n++){var r=t[n];r.enumerable=r.enumerable||!1,r.configurable=!0,"value"in r&&(r.writable=!0),Object.defineProperty(e,kv(r.key),r)}}function Uk(e,t,n){return t&&xp(e.prototype,t),n&&xp(e,n),Object.defineProperty(e,"prototype",{writable:!1}),e}function Qu(e,t){return Qu=Object.setPrototypeOf?Object.setPrototypeOf.bind():function(r,i){return r.__proto__=i,r},Qu(e,t)}function Wk(e,t){if(typeof t!="function"&&t!==null)throw new TypeError("Super expression must either be null or a function");e.prototype=Object.create(t&&t.prototype,{constructor:{value:e,writable:!0,configurable:!0}}),Object.defineProperty(e,"prototype",{writable:!1}),t&&Qu(e,t)}function Qs(e){return Qs=Object.setPrototypeOf?Object.getPrototypeOf.bind():function(n){return n.__proto__||Object.getPrototypeOf(n)},Qs(e)}function Bk(){if(typeof Reflect>"u"||!Reflect.construct||Reflect.construct.sham)return!1;if(typeof Proxy=="function")return!0;try{return Boolean.prototype.valueOf.call(Reflect.construct(Boolean,[],function(){})),!0}catch{return!1}}function Hk(e){if(e===void 0)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return e}function Qk(e,t){if(t&&(mr(t)==="object"||typeof t=="function"))return t;if(t!==void 0)throw new TypeError("Derived constructors may only return object or undefined");return Hk(e)}function Yk(e){var t=Bk();return function(){var r=Qs(e),i;if(t){var o=Qs(this).constructor;i=Reflect.construct(r,arguments,o)}else i=r.apply(this,arguments);return Qk(this,i)}}function Kk(e){if(Array.isArray(e))return Hu(e)}function Gk(e){if(typeof Symbol<"u"&&e[Symbol.iterator]!=null||e["@@iterator"]!=null)return Array.from(e)}function Xk(){throw new TypeError(`Invalid attempt to spread non-iterable instance.
In order to be iterable, non-array objects must have a [Symbol.iterator]() method.`)}function ud(e){return Kk(e)||Gk(e)||jv(e)||Xk()}function qk(e,t){return t||(t=e.slice(0)),Object.freeze(Object.defineProperties(e,{raw:{value:Object.freeze(t)}}))}const Jk=Math.min,Zk=Math.max,Ys=Math.round,Yo=Math.floor,Ks=e=>({x:e,y:e});function e4(e){return{...e,top:e.y,left:e.x,right:e.x+e.width,bottom:e.y+e.height}}function Cv(e){return Ov(e)?(e.nodeName||"").toLowerCase():"#document"}function Yt(e){var t;return(e==null||(t=e.ownerDocument)==null?void 0:t.defaultView)||window}function Ev(e){var t;return(t=(Ov(e)?e.ownerDocument:e.document)||window.document)==null?void 0:t.documentElement}function Ov(e){return e instanceof Node||e instanceof Yt(e).Node}function Yu(e){return e instanceof Element||e instanceof Yt(e).Element}function cd(e){return e instanceof HTMLElement||e instanceof Yt(e).HTMLElement}function yp(e){return typeof ShadowRoot>"u"?!1:e instanceof ShadowRoot||e instanceof Yt(e).ShadowRoot}function _v(e){const{overflow:t,overflowX:n,overflowY:r,display:i}=dd(e);return/auto|scroll|overlay|hidden|clip/.test(t+r+n)&&!["inline","contents"].includes(i)}function t4(){return typeof CSS>"u"||!CSS.supports?!1:CSS.supports("-webkit-backdrop-filter","none")}function n4(e){return["html","body","#document"].includes(Cv(e))}function dd(e){return Yt(e).getComputedStyle(e)}function r4(e){if(Cv(e)==="html")return e;const t=e.assignedSlot||e.parentNode||yp(e)&&e.host||Ev(e);return yp(t)?t.host:t}function Pv(e){const t=r4(e);return n4(t)?e.ownerDocument?e.ownerDocument.body:e.body:cd(t)&&_v(t)?t:Pv(t)}function Gs(e,t,n){var r;t===void 0&&(t=[]),n===void 0&&(n=!0);const i=Pv(e),o=i===((r=e.ownerDocument)==null?void 0:r.body),s=Yt(i);return o?t.concat(s,s.visualViewport||[],_v(i)?i:[],s.frameElement&&n?Gs(s.frameElement):[]):t.concat(i,Gs(i,[],n))}function i4(e){const t=dd(e);let n=parseFloat(t.width)||0,r=parseFloat(t.height)||0;const i=cd(e),o=i?e.offsetWidth:n,s=i?e.offsetHeight:r,l=Ys(n)!==o||Ys(r)!==s;return l&&(n=o,r=s),{width:n,height:r,$:l}}function fd(e){return Yu(e)?e:e.contextElement}function _l(e){const t=fd(e);if(!cd(t))return Ks(1);const n=t.getBoundingClientRect(),{width:r,height:i,$:o}=i4(t);let s=(o?Ys(n.width):n.width)/r,l=(o?Ys(n.height):n.height)/i;return(!s||!Number.isFinite(s))&&(s=1),(!l||!Number.isFinite(l))&&(l=1),{x:s,y:l}}const o4=Ks(0);function s4(e){const t=Yt(e);return!t4()||!t.visualViewport?o4:{x:t.visualViewport.offsetLeft,y:t.visualViewport.offsetTop}}function a4(e,t,n){return t===void 0&&(t=!1),!n||t&&n!==Yt(e)?!1:t}function wp(e,t,n,r){t===void 0&&(t=!1),n===void 0&&(n=!1);const i=e.getBoundingClientRect(),o=fd(e);let s=Ks(1);t&&(r?Yu(r)&&(s=_l(r)):s=_l(e));const l=a4(o,n,r)?s4(o):Ks(0);let a=(i.left+l.x)/s.x,c=(i.top+l.y)/s.y,d=i.width/s.x,f=i.height/s.y;if(o){const m=Yt(o),y=r&&Yu(r)?Yt(r):r;let g=m.frameElement;for(;g&&r&&y!==m;){const v=_l(g),w=g.getBoundingClientRect(),p=dd(g),h=w.left+(g.clientLeft+parseFloat(p.paddingLeft))*v.x,x=w.top+(g.clientTop+parseFloat(p.paddingTop))*v.y;a*=v.x,c*=v.y,d*=v.x,f*=v.y,a+=h,c+=x,g=Yt(g).frameElement}}return e4({width:d,height:f,x:a,y:c})}function l4(e,t){let n=null,r;const i=Ev(e);function o(){clearTimeout(r),n&&n.disconnect(),n=null}function s(l,a){l===void 0&&(l=!1),a===void 0&&(a=1),o();const{left:c,top:d,width:f,height:m}=e.getBoundingClientRect();if(l||t(),!f||!m)return;const y=Yo(d),g=Yo(i.clientWidth-(c+f)),v=Yo(i.clientHeight-(d+m)),w=Yo(c),h={rootMargin:-y+"px "+-g+"px "+-v+"px "+-w+"px",threshold:Zk(0,Jk(1,a))||1};let x=!0;function b(k){const _=k[0].intersectionRatio;if(_!==a){if(!x)return s();_?s(!1,_):r=setTimeout(()=>{s(!1,1e-7)},100)}x=!1}try{n=new IntersectionObserver(b,{...h,root:i.ownerDocument})}catch{n=new IntersectionObserver(b,h)}n.observe(e)}return s(!0),o}function u4(e,t,n,r){r===void 0&&(r={});const{ancestorScroll:i=!0,ancestorResize:o=!0,elementResize:s=typeof ResizeObserver=="function",layoutShift:l=typeof IntersectionObserver=="function",animationFrame:a=!1}=r,c=fd(e),d=i||o?[...c?Gs(c):[],...Gs(t)]:[];d.forEach(p=>{i&&p.addEventListener("scroll",n,{passive:!0}),o&&p.addEventListener("resize",n)});const f=c&&l?l4(c,n):null;let m=-1,y=null;s&&(y=new ResizeObserver(p=>{let[h]=p;h&&h.target===c&&y&&(y.unobserve(t),cancelAnimationFrame(m),m=requestAnimationFrame(()=>{y&&y.observe(t)})),n()}),c&&!a&&y.observe(c),y.observe(t));let g,v=a?wp(e):null;a&&w();function w(){const p=wp(e);v&&(p.x!==v.x||p.y!==v.y||p.width!==v.width||p.height!==v.height)&&n(),v=p,g=requestAnimationFrame(w)}return n(),()=>{d.forEach(p=>{i&&p.removeEventListener("scroll",n),o&&p.removeEventListener("resize",n)}),f&&f(),y&&y.disconnect(),y=null,a&&cancelAnimationFrame(g)}}var Ku=M.useLayoutEffect,c4=["className","clearValue","cx","getStyles","getClassNames","getValue","hasValue","isMulti","isRtl","options","selectOption","selectProps","setValue","theme"],Xs=function(){};function d4(e,t){return t?t[0]==="-"?e+t:e+"__"+t:e}function f4(e,t){for(var n=arguments.length,r=new Array(n>2?n-2:0),i=2;i<n;i++)r[i-2]=arguments[i];var o=[].concat(r);if(t&&e)for(var s in t)t.hasOwnProperty(s)&&t[s]&&o.push("".concat(d4(e,s)));return o.filter(function(l){return l}).map(function(l){return String(l).trim()}).join(" ")}var bp=function(t){return b4(t)?t.filter(Boolean):mr(t)==="object"&&t!==null?[t]:[]},Tv=function(t){t.className,t.clearValue,t.cx,t.getStyles,t.getClassNames,t.getValue,t.hasValue,t.isMulti,t.isRtl,t.options,t.selectOption,t.selectProps,t.setValue,t.theme;var n=Cn(t,c4);return X({},n)},Ae=function(t,n,r){var i=t.cx,o=t.getStyles,s=t.getClassNames,l=t.className;return{css:o(n,t),className:i(r??{},s(n,t),l)}};function Va(e){return[document.documentElement,document.body,window].indexOf(e)>-1}function p4(e){return Va(e)?window.innerHeight:e.clientHeight}function Mv(e){return Va(e)?window.pageYOffset:e.scrollTop}function qs(e,t){if(Va(e)){window.scrollTo(0,t);return}e.scrollTop=t}function h4(e){var t=getComputedStyle(e),n=t.position==="absolute",r=/(auto|scroll)/;if(t.position==="fixed")return document.documentElement;for(var i=e;i=i.parentElement;)if(t=getComputedStyle(i),!(n&&t.position==="static")&&r.test(t.overflow+t.overflowY+t.overflowX))return i;return document.documentElement}function m4(e,t,n,r){return n*((e=e/r-1)*e*e+1)+t}function Ko(e,t){var n=arguments.length>2&&arguments[2]!==void 0?arguments[2]:200,r=arguments.length>3&&arguments[3]!==void 0?arguments[3]:Xs,i=Mv(e),o=t-i,s=10,l=0;function a(){l+=s;var c=m4(l,i,o,n);qs(e,c),l<n?window.requestAnimationFrame(a):r(e)}a()}function Sp(e,t){var n=e.getBoundingClientRect(),r=t.getBoundingClientRect(),i=t.offsetHeight/3;r.bottom+i>n.bottom?qs(e,Math.min(t.offsetTop+t.clientHeight-e.offsetHeight+i,e.scrollHeight)):r.top-i<n.top&&qs(e,Math.max(t.offsetTop-i,0))}function g4(e){var t=e.getBoundingClientRect();return{bottom:t.bottom,height:t.height,left:t.left,right:t.right,top:t.top,width:t.width}}function kp(){try{return document.createEvent("TouchEvent"),!0}catch{return!1}}function v4(){try{return/Android|webOS|iPhone|iPad|iPod|BlackBerry|IEMobile|Opera Mini/i.test(navigator.userAgent)}catch{return!1}}var Rv=!1,x4={get passive(){return Rv=!0}},Go=typeof window<"u"?window:{};Go.addEventListener&&Go.removeEventListener&&(Go.addEventListener("p",Xs,x4),Go.removeEventListener("p",Xs,!1));var y4=Rv;function w4(e){return e!=null}function b4(e){return Array.isArray(e)}function Xo(e,t,n){return e?t:n}var S4=function(t){for(var n=arguments.length,r=new Array(n>1?n-1:0),i=1;i<n;i++)r[i-1]=arguments[i];var o=Object.entries(t).filter(function(s){var l=yn(s,1),a=l[0];return!r.includes(a)});return o.reduce(function(s,l){var a=yn(l,2),c=a[0],d=a[1];return s[c]=d,s},{})},k4=["children","innerProps"],j4=["children","innerProps"];function C4(e){var t=e.maxHeight,n=e.menuEl,r=e.minHeight,i=e.placement,o=e.shouldScroll,s=e.isFixedPosition,l=e.controlHeight,a=h4(n),c={placement:"bottom",maxHeight:t};if(!n||!n.offsetParent)return c;var d=a.getBoundingClientRect(),f=d.height,m=n.getBoundingClientRect(),y=m.bottom,g=m.height,v=m.top,w=n.offsetParent.getBoundingClientRect(),p=w.top,h=s?window.innerHeight:p4(a),x=Mv(a),b=parseInt(getComputedStyle(n).marginBottom,10),k=parseInt(getComputedStyle(n).marginTop,10),_=p-k,E=h-v,P=_+x,T=f-x-v,I=y-h+x+b,W=x+v-k,A=160;switch(i){case"auto":case"bottom":if(E>=g)return{placement:"bottom",maxHeight:t};if(T>=g&&!s)return o&&Ko(a,I,A),{placement:"bottom",maxHeight:t};if(!s&&T>=r||s&&E>=r){o&&Ko(a,I,A);var D=s?E-b:T-b;return{placement:"bottom",maxHeight:D}}if(i==="auto"||s){var q=t,ee=s?_:P;return ee>=r&&(q=Math.min(ee-b-l,t)),{placement:"top",maxHeight:q}}if(i==="bottom")return o&&qs(a,I),{placement:"bottom",maxHeight:t};break;case"top":if(_>=g)return{placement:"top",maxHeight:t};if(P>=g&&!s)return o&&Ko(a,W,A),{placement:"top",maxHeight:t};if(!s&&P>=r||s&&_>=r){var te=t;return(!s&&P>=r||s&&_>=r)&&(te=s?_-k:P-k),o&&Ko(a,W,A),{placement:"top",maxHeight:te}}return{placement:"bottom",maxHeight:t};default:throw new Error('Invalid placement provided "'.concat(i,'".'))}return c}function E4(e){var t={bottom:"top",top:"bottom"};return e?t[e]:"bottom"}var Iv=function(t){return t==="auto"?"bottom":t},O4=function(t,n){var r,i=t.placement,o=t.theme,s=o.borderRadius,l=o.spacing,a=o.colors;return X((r={label:"menu"},Ei(r,E4(i),"100%"),Ei(r,"position","absolute"),Ei(r,"width","100%"),Ei(r,"zIndex",1),r),n?{}:{backgroundColor:a.neutral0,borderRadius:s,boxShadow:"0 0 0 1px hsla(0, 0%, 0%, 0.1), 0 4px 11px hsla(0, 0%, 0%, 0.1)",marginBottom:l.menuGutter,marginTop:l.menuGutter})},Dv=M.createContext(null),_4=function(t){var n=t.children,r=t.minMenuHeight,i=t.maxMenuHeight,o=t.menuPlacement,s=t.menuPosition,l=t.menuShouldScrollIntoView,a=t.theme,c=M.useContext(Dv)||{},d=c.setPortalPlacement,f=M.useRef(null),m=M.useState(i),y=yn(m,2),g=y[0],v=y[1],w=M.useState(null),p=yn(w,2),h=p[0],x=p[1],b=a.spacing.controlHeight;return Ku(function(){var k=f.current;if(k){var _=s==="fixed",E=l&&!_,P=C4({maxHeight:i,menuEl:k,minHeight:r,placement:o,shouldScroll:E,isFixedPosition:_,controlHeight:b});v(P.maxHeight),x(P.placement),d==null||d(P.placement)}},[i,o,s,l,r,d,b]),n({ref:f,placerProps:X(X({},t),{},{placement:h||Iv(o),maxHeight:g})})},P4=function(t){var n=t.children,r=t.innerRef,i=t.innerProps;return G("div",J({},Ae(t,"menu",{menu:!0}),{ref:r},i),n)},T4=P4,M4=function(t,n){var r=t.maxHeight,i=t.theme.spacing.baseUnit;return X({maxHeight:r,overflowY:"auto",position:"relative",WebkitOverflowScrolling:"touch"},n?{}:{paddingBottom:i,paddingTop:i})},R4=function(t){var n=t.children,r=t.innerProps,i=t.innerRef,o=t.isMulti;return G("div",J({},Ae(t,"menuList",{"menu-list":!0,"menu-list--is-multi":o}),{ref:i},r),n)},Lv=function(t,n){var r=t.theme,i=r.spacing.baseUnit,o=r.colors;return X({textAlign:"center"},n?{}:{color:o.neutral40,padding:"".concat(i*2,"px ").concat(i*3,"px")})},I4=Lv,D4=Lv,L4=function(t){var n=t.children,r=n===void 0?"No options":n,i=t.innerProps,o=Cn(t,k4);return G("div",J({},Ae(X(X({},o),{},{children:r,innerProps:i}),"noOptionsMessage",{"menu-notice":!0,"menu-notice--no-options":!0}),i),r)},A4=function(t){var n=t.children,r=n===void 0?"Loading...":n,i=t.innerProps,o=Cn(t,j4);return G("div",J({},Ae(X(X({},o),{},{children:r,innerProps:i}),"loadingMessage",{"menu-notice":!0,"menu-notice--loading":!0}),i),r)},F4=function(t){var n=t.rect,r=t.offset,i=t.position;return{left:n.left,position:i,top:r,width:n.width,zIndex:1}},z4=function(t){var n=t.appendTo,r=t.children,i=t.controlElement,o=t.innerProps,s=t.menuPlacement,l=t.menuPosition,a=M.useRef(null),c=M.useRef(null),d=M.useState(Iv(s)),f=yn(d,2),m=f[0],y=f[1],g=M.useMemo(function(){return{setPortalPlacement:y}},[]),v=M.useState(null),w=yn(v,2),p=w[0],h=w[1],x=M.useCallback(function(){if(i){var E=g4(i),P=l==="fixed"?0:window.pageYOffset,T=E[m]+P;(T!==(p==null?void 0:p.offset)||E.left!==(p==null?void 0:p.rect.left)||E.width!==(p==null?void 0:p.rect.width))&&h({offset:T,rect:E})}},[i,l,m,p==null?void 0:p.offset,p==null?void 0:p.rect.left,p==null?void 0:p.rect.width]);Ku(function(){x()},[x]);var b=M.useCallback(function(){typeof c.current=="function"&&(c.current(),c.current=null),i&&a.current&&(c.current=u4(i,a.current,x,{elementResize:"ResizeObserver"in window}))},[i,x]);Ku(function(){b()},[b]);var k=M.useCallback(function(E){a.current=E,b()},[b]);if(!n&&l!=="fixed"||!p)return null;var _=G("div",J({ref:k},Ae(X(X({},t),{},{offset:p.offset,position:l,rect:p.rect}),"menuPortal",{"menu-portal":!0}),o),r);return G(Dv.Provider,{value:g},n?ho.createPortal(_,n):_)},V4=function(t){var n=t.isDisabled,r=t.isRtl;return{label:"container",direction:r?"rtl":void 0,pointerEvents:n?"none":void 0,position:"relative"}},N4=function(t){var n=t.children,r=t.innerProps,i=t.isDisabled,o=t.isRtl;return G("div",J({},Ae(t,"container",{"--is-disabled":i,"--is-rtl":o}),r),n)},$4=function(t,n){var r=t.theme.spacing,i=t.isMulti,o=t.hasValue,s=t.selectProps.controlShouldRenderValue;return X({alignItems:"center",display:i&&o&&s?"flex":"grid",flex:1,flexWrap:"wrap",WebkitOverflowScrolling:"touch",position:"relative",overflow:"hidden"},n?{}:{padding:"".concat(r.baseUnit/2,"px ").concat(r.baseUnit*2,"px")})},U4=function(t){var n=t.children,r=t.innerProps,i=t.isMulti,o=t.hasValue;return G("div",J({},Ae(t,"valueContainer",{"value-container":!0,"value-container--is-multi":i,"value-container--has-value":o}),r),n)},W4=function(){return{alignItems:"center",alignSelf:"stretch",display:"flex",flexShrink:0}},B4=function(t){var n=t.children,r=t.innerProps;return G("div",J({},Ae(t,"indicatorsContainer",{indicators:!0}),r),n)},jp,H4=["size"],Q4=["innerProps","isRtl","size"],Y4={name:"8mmkcg",styles:"display:inline-block;fill:currentColor;line-height:1;stroke:currentColor;stroke-width:0"},Av=function(t){var n=t.size,r=Cn(t,H4);return G("svg",J({height:n,width:n,viewBox:"0 0 20 20","aria-hidden":"true",focusable:"false",css:Y4},r))},pd=function(t){return G(Av,J({size:20},t),G("path",{d:"M14.348 14.849c-0.469 0.469-1.229 0.469-1.697 0l-2.651-3.030-2.651 3.029c-0.469 0.469-1.229 0.469-1.697 0-0.469-0.469-0.469-1.229 0-1.697l2.758-3.15-2.759-3.152c-0.469-0.469-0.469-1.228 0-1.697s1.228-0.469 1.697 0l2.652 3.031 2.651-3.031c0.469-0.469 1.228-0.469 1.697 0s0.469 1.229 0 1.697l-2.758 3.152 2.758 3.15c0.469 0.469 0.469 1.229 0 1.698z"}))},Fv=function(t){return G(Av,J({size:20},t),G("path",{d:"M4.516 7.548c0.436-0.446 1.043-0.481 1.576 0l3.908 3.747 3.908-3.747c0.533-0.481 1.141-0.446 1.574 0 0.436 0.445 0.408 1.197 0 1.615-0.406 0.418-4.695 4.502-4.695 4.502-0.217 0.223-0.502 0.335-0.787 0.335s-0.57-0.112-0.789-0.335c0 0-4.287-4.084-4.695-4.502s-0.436-1.17 0-1.615z"}))},zv=function(t,n){var r=t.isFocused,i=t.theme,o=i.spacing.baseUnit,s=i.colors;return X({label:"indicatorContainer",display:"flex",transition:"color 150ms"},n?{}:{color:r?s.neutral60:s.neutral20,padding:o*2,":hover":{color:r?s.neutral80:s.neutral40}})},K4=zv,G4=function(t){var n=t.children,r=t.innerProps;return G("div",J({},Ae(t,"dropdownIndicator",{indicator:!0,"dropdown-indicator":!0}),r),n||G(Fv,null))},X4=zv,q4=function(t){var n=t.children,r=t.innerProps;return G("div",J({},Ae(t,"clearIndicator",{indicator:!0,"clear-indicator":!0}),r),n||G(pd,null))},J4=function(t,n){var r=t.isDisabled,i=t.theme,o=i.spacing.baseUnit,s=i.colors;return X({label:"indicatorSeparator",alignSelf:"stretch",width:1},n?{}:{backgroundColor:r?s.neutral10:s.neutral20,marginBottom:o*2,marginTop:o*2})},Z4=function(t){var n=t.innerProps;return G("span",J({},n,Ae(t,"indicatorSeparator",{"indicator-separator":!0})))},ej=ew(jp||(jp=qk([`
  0%, 80%, 100% { opacity: 0; }
  40% { opacity: 1; }
`]))),tj=function(t,n){var r=t.isFocused,i=t.size,o=t.theme,s=o.colors,l=o.spacing.baseUnit;return X({label:"loadingIndicator",display:"flex",transition:"color 150ms",alignSelf:"center",fontSize:i,lineHeight:1,marginRight:i,textAlign:"center",verticalAlign:"middle"},n?{}:{color:r?s.neutral60:s.neutral20,padding:l*2})},Pl=function(t){var n=t.delay,r=t.offset;return G("span",{css:td({animation:"".concat(ej," 1s ease-in-out ").concat(n,"ms infinite;"),backgroundColor:"currentColor",borderRadius:"1em",display:"inline-block",marginLeft:r?"1em":void 0,height:"1em",verticalAlign:"top",width:"1em"},"","")})},nj=function(t){var n=t.innerProps,r=t.isRtl,i=t.size,o=i===void 0?4:i,s=Cn(t,Q4);return G("div",J({},Ae(X(X({},s),{},{innerProps:n,isRtl:r,size:o}),"loadingIndicator",{indicator:!0,"loading-indicator":!0}),n),G(Pl,{delay:0,offset:r}),G(Pl,{delay:160,offset:!0}),G(Pl,{delay:320,offset:!r}))},rj=function(t,n){var r=t.isDisabled,i=t.isFocused,o=t.theme,s=o.colors,l=o.borderRadius,a=o.spacing;return X({label:"control",alignItems:"center",cursor:"default",display:"flex",flexWrap:"wrap",justifyContent:"space-between",minHeight:a.controlHeight,outline:"0 !important",position:"relative",transition:"all 100ms"},n?{}:{backgroundColor:r?s.neutral5:s.neutral0,borderColor:r?s.neutral10:i?s.primary:s.neutral20,borderRadius:l,borderStyle:"solid",borderWidth:1,boxShadow:i?"0 0 0 1px ".concat(s.primary):void 0,"&:hover":{borderColor:i?s.primary:s.neutral30}})},ij=function(t){var n=t.children,r=t.isDisabled,i=t.isFocused,o=t.innerRef,s=t.innerProps,l=t.menuIsOpen;return G("div",J({ref:o},Ae(t,"control",{control:!0,"control--is-disabled":r,"control--is-focused":i,"control--menu-is-open":l}),s,{"aria-disabled":r||void 0}),n)},oj=ij,sj=["data"],aj=function(t,n){var r=t.theme.spacing;return n?{}:{paddingBottom:r.baseUnit*2,paddingTop:r.baseUnit*2}},lj=function(t){var n=t.children,r=t.cx,i=t.getStyles,o=t.getClassNames,s=t.Heading,l=t.headingProps,a=t.innerProps,c=t.label,d=t.theme,f=t.selectProps;return G("div",J({},Ae(t,"group",{group:!0}),a),G(s,J({},l,{selectProps:f,theme:d,getStyles:i,getClassNames:o,cx:r}),c),G("div",null,n))},uj=function(t,n){var r=t.theme,i=r.colors,o=r.spacing;return X({label:"group",cursor:"default",display:"block"},n?{}:{color:i.neutral40,fontSize:"75%",fontWeight:500,marginBottom:"0.25em",paddingLeft:o.baseUnit*3,paddingRight:o.baseUnit*3,textTransform:"uppercase"})},cj=function(t){var n=Tv(t);n.data;var r=Cn(n,sj);return G("div",J({},Ae(t,"groupHeading",{"group-heading":!0}),r))},dj=lj,fj=["innerRef","isDisabled","isHidden","inputClassName"],pj=function(t,n){var r=t.isDisabled,i=t.value,o=t.theme,s=o.spacing,l=o.colors;return X(X({visibility:r?"hidden":"visible",transform:i?"translateZ(0)":""},hj),n?{}:{margin:s.baseUnit/2,paddingBottom:s.baseUnit/2,paddingTop:s.baseUnit/2,color:l.neutral80})},Vv={gridArea:"1 / 2",font:"inherit",minWidth:"2px",border:0,margin:0,outline:0,padding:0},hj={flex:"1 1 auto",display:"inline-grid",gridArea:"1 / 1 / 2 / 3",gridTemplateColumns:"0 min-content","&:after":X({content:'attr(data-value) " "',visibility:"hidden",whiteSpace:"pre"},Vv)},mj=function(t){return X({label:"input",color:"inherit",background:0,opacity:t?0:1,width:"100%"},Vv)},gj=function(t){var n=t.cx,r=t.value,i=Tv(t),o=i.innerRef,s=i.isDisabled,l=i.isHidden,a=i.inputClassName,c=Cn(i,fj);return G("div",J({},Ae(t,"input",{"input-container":!0}),{"data-value":r||""}),G("input",J({className:n({input:!0},a),ref:o,style:mj(l),disabled:s},c)))},vj=gj,xj=function(t,n){var r=t.theme,i=r.spacing,o=r.borderRadius,s=r.colors;return X({label:"multiValue",display:"flex",minWidth:0},n?{}:{backgroundColor:s.neutral10,borderRadius:o/2,margin:i.baseUnit/2})},yj=function(t,n){var r=t.theme,i=r.borderRadius,o=r.colors,s=t.cropWithEllipsis;return X({overflow:"hidden",textOverflow:s||s===void 0?"ellipsis":void 0,whiteSpace:"nowrap"},n?{}:{borderRadius:i/2,color:o.neutral80,fontSize:"85%",padding:3,paddingLeft:6})},wj=function(t,n){var r=t.theme,i=r.spacing,o=r.borderRadius,s=r.colors,l=t.isFocused;return X({alignItems:"center",display:"flex"},n?{}:{borderRadius:o/2,backgroundColor:l?s.dangerLight:void 0,paddingLeft:i.baseUnit,paddingRight:i.baseUnit,":hover":{backgroundColor:s.dangerLight,color:s.danger}})},Nv=function(t){var n=t.children,r=t.innerProps;return G("div",r,n)},bj=Nv,Sj=Nv;function kj(e){var t=e.children,n=e.innerProps;return G("div",J({role:"button"},n),t||G(pd,{size:14}))}var jj=function(t){var n=t.children,r=t.components,i=t.data,o=t.innerProps,s=t.isDisabled,l=t.removeProps,a=t.selectProps,c=r.Container,d=r.Label,f=r.Remove;return G(c,{data:i,innerProps:X(X({},Ae(t,"multiValue",{"multi-value":!0,"multi-value--is-disabled":s})),o),selectProps:a},G(d,{data:i,innerProps:X({},Ae(t,"multiValueLabel",{"multi-value__label":!0})),selectProps:a},n),G(f,{data:i,innerProps:X(X({},Ae(t,"multiValueRemove",{"multi-value__remove":!0})),{},{"aria-label":"Remove ".concat(n||"option")},l),selectProps:a}))},Cj=jj,Ej=function(t,n){var r=t.isDisabled,i=t.isFocused,o=t.isSelected,s=t.theme,l=s.spacing,a=s.colors;return X({label:"option",cursor:"default",display:"block",fontSize:"inherit",width:"100%",userSelect:"none",WebkitTapHighlightColor:"rgba(0, 0, 0, 0)"},n?{}:{backgroundColor:o?a.primary:i?a.primary25:"transparent",color:r?a.neutral20:o?a.neutral0:"inherit",padding:"".concat(l.baseUnit*2,"px ").concat(l.baseUnit*3,"px"),":active":{backgroundColor:r?void 0:o?a.primary:a.primary50}})},Oj=function(t){var n=t.children,r=t.isDisabled,i=t.isFocused,o=t.isSelected,s=t.innerRef,l=t.innerProps;return G("div",J({},Ae(t,"option",{option:!0,"option--is-disabled":r,"option--is-focused":i,"option--is-selected":o}),{ref:s,"aria-disabled":r},l),n)},_j=Oj,Pj=function(t,n){var r=t.theme,i=r.spacing,o=r.colors;return X({label:"placeholder",gridArea:"1 / 1 / 2 / 3"},n?{}:{color:o.neutral50,marginLeft:i.baseUnit/2,marginRight:i.baseUnit/2})},Tj=function(t){var n=t.children,r=t.innerProps;return G("div",J({},Ae(t,"placeholder",{placeholder:!0}),r),n)},Mj=Tj,Rj=function(t,n){var r=t.isDisabled,i=t.theme,o=i.spacing,s=i.colors;return X({label:"singleValue",gridArea:"1 / 1 / 2 / 3",maxWidth:"100%",overflow:"hidden",textOverflow:"ellipsis",whiteSpace:"nowrap"},n?{}:{color:r?s.neutral40:s.neutral80,marginLeft:o.baseUnit/2,marginRight:o.baseUnit/2})},Ij=function(t){var n=t.children,r=t.isDisabled,i=t.innerProps;return G("div",J({},Ae(t,"singleValue",{"single-value":!0,"single-value--is-disabled":r}),i),n)},Dj=Ij,Lj={ClearIndicator:q4,Control:oj,DropdownIndicator:G4,DownChevron:Fv,CrossIcon:pd,Group:dj,GroupHeading:cj,IndicatorsContainer:B4,IndicatorSeparator:Z4,Input:vj,LoadingIndicator:nj,Menu:T4,MenuList:R4,MenuPortal:z4,LoadingMessage:A4,NoOptionsMessage:L4,MultiValue:Cj,MultiValueContainer:bj,MultiValueLabel:Sj,MultiValueRemove:kj,Option:_j,Placeholder:Mj,SelectContainer:N4,SingleValue:Dj,ValueContainer:U4},Aj=function(t){return X(X({},Lj),t.components)},Cp=Number.isNaN||function(t){return typeof t=="number"&&t!==t};function Fj(e,t){return!!(e===t||Cp(e)&&Cp(t))}function zj(e,t){if(e.length!==t.length)return!1;for(var n=0;n<e.length;n++)if(!Fj(e[n],t[n]))return!1;return!0}function Vj(e,t){t===void 0&&(t=zj);var n=null;function r(){for(var i=[],o=0;o<arguments.length;o++)i[o]=arguments[o];if(n&&n.lastThis===this&&t(i,n.lastArgs))return n.lastResult;var s=e.apply(this,i);return n={lastResult:s,lastArgs:i,lastThis:this},s}return r.clear=function(){n=null},r}var Nj={name:"7pg0cj-a11yText",styles:"label:a11yText;z-index:9999;border:0;clip:rect(1px, 1px, 1px, 1px);height:1px;width:1px;position:absolute;overflow:hidden;padding:0;white-space:nowrap"},$j=function(t){return G("span",J({css:Nj},t))},Ep=$j,Uj={guidance:function(t){var n=t.isSearchable,r=t.isMulti,i=t.tabSelectsValue,o=t.context,s=t.isInitialFocus;switch(o){case"menu":return"Use Up and Down to choose options, press Enter to select the currently focused option, press Escape to exit the menu".concat(i?", press Tab to select the option and exit the menu":"",".");case"input":return s?"".concat(t["aria-label"]||"Select"," is focused ").concat(n?",type to refine list":"",", press Down to open the menu, ").concat(r?" press left to focus selected values":""):"";case"value":return"Use left and right to toggle between focused values, press Backspace to remove the currently focused value";default:return""}},onChange:function(t){var n=t.action,r=t.label,i=r===void 0?"":r,o=t.labels,s=t.isDisabled;switch(n){case"deselect-option":case"pop-value":case"remove-value":return"option ".concat(i,", deselected.");case"clear":return"All selected options have been cleared.";case"initial-input-focus":return"option".concat(o.length>1?"s":""," ").concat(o.join(","),", selected.");case"select-option":return s?"option ".concat(i," is disabled. Select another option."):"option ".concat(i,", selected.");default:return""}},onFocus:function(t){var n=t.context,r=t.focused,i=t.options,o=t.label,s=o===void 0?"":o,l=t.selectValue,a=t.isDisabled,c=t.isSelected,d=t.isAppleDevice,f=function(v,w){return v&&v.length?"".concat(v.indexOf(w)+1," of ").concat(v.length):""};if(n==="value"&&l)return"value ".concat(s," focused, ").concat(f(l,r),".");if(n==="menu"&&d){var m=a?" disabled":"",y="".concat(c?" selected":"").concat(m);return"".concat(s).concat(y,", ").concat(f(i,r),".")}return""},onFilter:function(t){var n=t.inputValue,r=t.resultsMessage;return"".concat(r).concat(n?" for search term "+n:"",".")}},Wj=function(t){var n=t.ariaSelection,r=t.focusedOption,i=t.focusedValue,o=t.focusableOptions,s=t.isFocused,l=t.selectValue,a=t.selectProps,c=t.id,d=t.isAppleDevice,f=a.ariaLiveMessages,m=a.getOptionLabel,y=a.inputValue,g=a.isMulti,v=a.isOptionDisabled,w=a.isSearchable,p=a.menuIsOpen,h=a.options,x=a.screenReaderStatus,b=a.tabSelectsValue,k=a.isLoading,_=a["aria-label"],E=a["aria-live"],P=M.useMemo(function(){return X(X({},Uj),f||{})},[f]),T=M.useMemo(function(){var ee="";if(n&&P.onChange){var te=n.option,xe=n.options,z=n.removedValue,Q=n.removedValues,Y=n.value,de=function(et){return Array.isArray(et)?null:et},re=z||te||de(Y),Oe=re?m(re):"",be=xe||Q||void 0,Ue=be?be.map(m):[],me=X({isDisabled:re&&v(re,l),label:Oe,labels:Ue},n);ee=P.onChange(me)}return ee},[n,P,v,l,m]),I=M.useMemo(function(){var ee="",te=r||i,xe=!!(r&&l&&l.includes(r));if(te&&P.onFocus){var z={focused:te,label:m(te),isDisabled:v(te,l),isSelected:xe,options:o,context:te===r?"menu":"value",selectValue:l,isAppleDevice:d};ee=P.onFocus(z)}return ee},[r,i,m,v,P,o,l,d]),W=M.useMemo(function(){var ee="";if(p&&h.length&&!k&&P.onFilter){var te=x({count:o.length});ee=P.onFilter({inputValue:y,resultsMessage:te})}return ee},[o,y,p,P,h,x,k]),A=(n==null?void 0:n.action)==="initial-input-focus",D=M.useMemo(function(){var ee="";if(P.guidance){var te=i?"value":p?"menu":"input";ee=P.guidance({"aria-label":_,context:te,isDisabled:r&&v(r,l),isMulti:g,isSearchable:w,tabSelectsValue:b,isInitialFocus:A})}return ee},[_,r,i,g,v,w,p,P,l,b,A]),q=G(M.Fragment,null,G("span",{id:"aria-selection"},T),G("span",{id:"aria-focused"},I),G("span",{id:"aria-results"},W),G("span",{id:"aria-guidance"},D));return G(M.Fragment,null,G(Ep,{id:c},A&&q),G(Ep,{"aria-live":E,"aria-atomic":"false","aria-relevant":"additions text",role:"log"},s&&!A&&q))},Bj=Wj,Gu=[{base:"A",letters:"AⒶＡÀÁÂẦẤẪẨÃĀĂẰẮẴẲȦǠÄǞẢÅǺǍȀȂẠẬẶḀĄȺⱯ"},{base:"AA",letters:"Ꜳ"},{base:"AE",letters:"ÆǼǢ"},{base:"AO",letters:"Ꜵ"},{base:"AU",letters:"Ꜷ"},{base:"AV",letters:"ꜸꜺ"},{base:"AY",letters:"Ꜽ"},{base:"B",letters:"BⒷＢḂḄḆɃƂƁ"},{base:"C",letters:"CⒸＣĆĈĊČÇḈƇȻꜾ"},{base:"D",letters:"DⒹＤḊĎḌḐḒḎĐƋƊƉꝹ"},{base:"DZ",letters:"ǱǄ"},{base:"Dz",letters:"ǲǅ"},{base:"E",letters:"EⒺＥÈÉÊỀẾỄỂẼĒḔḖĔĖËẺĚȄȆẸỆȨḜĘḘḚƐƎ"},{base:"F",letters:"FⒻＦḞƑꝻ"},{base:"G",letters:"GⒼＧǴĜḠĞĠǦĢǤƓꞠꝽꝾ"},{base:"H",letters:"HⒽＨĤḢḦȞḤḨḪĦⱧⱵꞍ"},{base:"I",letters:"IⒾＩÌÍÎĨĪĬİÏḮỈǏȈȊỊĮḬƗ"},{base:"J",letters:"JⒿＪĴɈ"},{base:"K",letters:"KⓀＫḰǨḲĶḴƘⱩꝀꝂꝄꞢ"},{base:"L",letters:"LⓁＬĿĹĽḶḸĻḼḺŁȽⱢⱠꝈꝆꞀ"},{base:"LJ",letters:"Ǉ"},{base:"Lj",letters:"ǈ"},{base:"M",letters:"MⓂＭḾṀṂⱮƜ"},{base:"N",letters:"NⓃＮǸŃÑṄŇṆŅṊṈȠƝꞐꞤ"},{base:"NJ",letters:"Ǌ"},{base:"Nj",letters:"ǋ"},{base:"O",letters:"OⓄＯÒÓÔỒỐỖỔÕṌȬṎŌṐṒŎȮȰÖȪỎŐǑȌȎƠỜỚỠỞỢỌỘǪǬØǾƆƟꝊꝌ"},{base:"OI",letters:"Ƣ"},{base:"OO",letters:"Ꝏ"},{base:"OU",letters:"Ȣ"},{base:"P",letters:"PⓅＰṔṖƤⱣꝐꝒꝔ"},{base:"Q",letters:"QⓆＱꝖꝘɊ"},{base:"R",letters:"RⓇＲŔṘŘȐȒṚṜŖṞɌⱤꝚꞦꞂ"},{base:"S",letters:"SⓈＳẞŚṤŜṠŠṦṢṨȘŞⱾꞨꞄ"},{base:"T",letters:"TⓉＴṪŤṬȚŢṰṮŦƬƮȾꞆ"},{base:"TZ",letters:"Ꜩ"},{base:"U",letters:"UⓊＵÙÚÛŨṸŪṺŬÜǛǗǕǙỦŮŰǓȔȖƯỪỨỮỬỰỤṲŲṶṴɄ"},{base:"V",letters:"VⓋＶṼṾƲꝞɅ"},{base:"VY",letters:"Ꝡ"},{base:"W",letters:"WⓌＷẀẂŴẆẄẈⱲ"},{base:"X",letters:"XⓍＸẊẌ"},{base:"Y",letters:"YⓎＹỲÝŶỸȲẎŸỶỴƳɎỾ"},{base:"Z",letters:"ZⓏＺŹẐŻŽẒẔƵȤⱿⱫꝢ"},{base:"a",letters:"aⓐａẚàáâầấẫẩãāăằắẵẳȧǡäǟảåǻǎȁȃạậặḁąⱥɐ"},{base:"aa",letters:"ꜳ"},{base:"ae",letters:"æǽǣ"},{base:"ao",letters:"ꜵ"},{base:"au",letters:"ꜷ"},{base:"av",letters:"ꜹꜻ"},{base:"ay",letters:"ꜽ"},{base:"b",letters:"bⓑｂḃḅḇƀƃɓ"},{base:"c",letters:"cⓒｃćĉċčçḉƈȼꜿↄ"},{base:"d",letters:"dⓓｄḋďḍḑḓḏđƌɖɗꝺ"},{base:"dz",letters:"ǳǆ"},{base:"e",letters:"eⓔｅèéêềếễểẽēḕḗĕėëẻěȅȇẹệȩḝęḙḛɇɛǝ"},{base:"f",letters:"fⓕｆḟƒꝼ"},{base:"g",letters:"gⓖｇǵĝḡğġǧģǥɠꞡᵹꝿ"},{base:"h",letters:"hⓗｈĥḣḧȟḥḩḫẖħⱨⱶɥ"},{base:"hv",letters:"ƕ"},{base:"i",letters:"iⓘｉìíîĩīĭïḯỉǐȉȋịįḭɨı"},{base:"j",letters:"jⓙｊĵǰɉ"},{base:"k",letters:"kⓚｋḱǩḳķḵƙⱪꝁꝃꝅꞣ"},{base:"l",letters:"lⓛｌŀĺľḷḹļḽḻſłƚɫⱡꝉꞁꝇ"},{base:"lj",letters:"ǉ"},{base:"m",letters:"mⓜｍḿṁṃɱɯ"},{base:"n",letters:"nⓝｎǹńñṅňṇņṋṉƞɲŉꞑꞥ"},{base:"nj",letters:"ǌ"},{base:"o",letters:"oⓞｏòóôồốỗổõṍȭṏōṑṓŏȯȱöȫỏőǒȍȏơờớỡởợọộǫǭøǿɔꝋꝍɵ"},{base:"oi",letters:"ƣ"},{base:"ou",letters:"ȣ"},{base:"oo",letters:"ꝏ"},{base:"p",letters:"pⓟｐṕṗƥᵽꝑꝓꝕ"},{base:"q",letters:"qⓠｑɋꝗꝙ"},{base:"r",letters:"rⓡｒŕṙřȑȓṛṝŗṟɍɽꝛꞧꞃ"},{base:"s",letters:"sⓢｓßśṥŝṡšṧṣṩșşȿꞩꞅẛ"},{base:"t",letters:"tⓣｔṫẗťṭțţṱṯŧƭʈⱦꞇ"},{base:"tz",letters:"ꜩ"},{base:"u",letters:"uⓤｕùúûũṹūṻŭüǜǘǖǚủůűǔȕȗưừứữửựụṳųṷṵʉ"},{base:"v",letters:"vⓥｖṽṿʋꝟʌ"},{base:"vy",letters:"ꝡ"},{base:"w",letters:"wⓦｗẁẃŵẇẅẘẉⱳ"},{base:"x",letters:"xⓧｘẋẍ"},{base:"y",letters:"yⓨｙỳýŷỹȳẏÿỷẙỵƴɏỿ"},{base:"z",letters:"zⓩｚźẑżžẓẕƶȥɀⱬꝣ"}],Hj=new RegExp("["+Gu.map(function(e){return e.letters}).join("")+"]","g"),$v={};for(var Tl=0;Tl<Gu.length;Tl++)for(var Ml=Gu[Tl],Rl=0;Rl<Ml.letters.length;Rl++)$v[Ml.letters[Rl]]=Ml.base;var Uv=function(t){return t.replace(Hj,function(n){return $v[n]})},Qj=Vj(Uv),Op=function(t){return t.replace(/^\s+|\s+$/g,"")},Yj=function(t){return"".concat(t.label," ").concat(t.value)},Kj=function(t){return function(n,r){if(n.data.__isNew__)return!0;var i=X({ignoreCase:!0,ignoreAccents:!0,stringify:Yj,trim:!0,matchFrom:"any"},t),o=i.ignoreCase,s=i.ignoreAccents,l=i.stringify,a=i.trim,c=i.matchFrom,d=a?Op(r):r,f=a?Op(l(n)):l(n);return o&&(d=d.toLowerCase(),f=f.toLowerCase()),s&&(d=Qj(d),f=Uv(f)),c==="start"?f.substr(0,d.length)===d:f.indexOf(d)>-1}},Gj=["innerRef"];function Xj(e){var t=e.innerRef,n=Cn(e,Gj),r=S4(n,"onExited","in","enter","exit","appear");return G("input",J({ref:t},r,{css:td({label:"dummyInput",background:0,border:0,caretColor:"transparent",fontSize:"inherit",gridArea:"1 / 1 / 2 / 3",outline:0,padding:0,width:1,color:"transparent",left:-100,opacity:0,position:"relative",transform:"scale(.01)"},"","")}))}var qj=function(t){t.cancelable&&t.preventDefault(),t.stopPropagation()};function Jj(e){var t=e.isEnabled,n=e.onBottomArrive,r=e.onBottomLeave,i=e.onTopArrive,o=e.onTopLeave,s=M.useRef(!1),l=M.useRef(!1),a=M.useRef(0),c=M.useRef(null),d=M.useCallback(function(w,p){if(c.current!==null){var h=c.current,x=h.scrollTop,b=h.scrollHeight,k=h.clientHeight,_=c.current,E=p>0,P=b-k-x,T=!1;P>p&&s.current&&(r&&r(w),s.current=!1),E&&l.current&&(o&&o(w),l.current=!1),E&&p>P?(n&&!s.current&&n(w),_.scrollTop=b,T=!0,s.current=!0):!E&&-p>x&&(i&&!l.current&&i(w),_.scrollTop=0,T=!0,l.current=!0),T&&qj(w)}},[n,r,i,o]),f=M.useCallback(function(w){d(w,w.deltaY)},[d]),m=M.useCallback(function(w){a.current=w.changedTouches[0].clientY},[]),y=M.useCallback(function(w){var p=a.current-w.changedTouches[0].clientY;d(w,p)},[d]),g=M.useCallback(function(w){if(w){var p=y4?{passive:!1}:!1;w.addEventListener("wheel",f,p),w.addEventListener("touchstart",m,p),w.addEventListener("touchmove",y,p)}},[y,m,f]),v=M.useCallback(function(w){w&&(w.removeEventListener("wheel",f,!1),w.removeEventListener("touchstart",m,!1),w.removeEventListener("touchmove",y,!1))},[y,m,f]);return M.useEffect(function(){if(t){var w=c.current;return g(w),function(){v(w)}}},[t,g,v]),function(w){c.current=w}}var _p=["boxSizing","height","overflow","paddingRight","position"],Pp={boxSizing:"border-box",overflow:"hidden",position:"relative",height:"100%"};function Tp(e){e.preventDefault()}function Mp(e){e.stopPropagation()}function Rp(){var e=this.scrollTop,t=this.scrollHeight,n=e+this.offsetHeight;e===0?this.scrollTop=1:n===t&&(this.scrollTop=e-1)}function Ip(){return"ontouchstart"in window||navigator.maxTouchPoints}var Dp=!!(typeof window<"u"&&window.document&&window.document.createElement),yi=0,Sr={capture:!1,passive:!1};function Zj(e){var t=e.isEnabled,n=e.accountForScrollbars,r=n===void 0?!0:n,i=M.useRef({}),o=M.useRef(null),s=M.useCallback(function(a){if(Dp){var c=document.body,d=c&&c.style;if(r&&_p.forEach(function(g){var v=d&&d[g];i.current[g]=v}),r&&yi<1){var f=parseInt(i.current.paddingRight,10)||0,m=document.body?document.body.clientWidth:0,y=window.innerWidth-m+f||0;Object.keys(Pp).forEach(function(g){var v=Pp[g];d&&(d[g]=v)}),d&&(d.paddingRight="".concat(y,"px"))}c&&Ip()&&(c.addEventListener("touchmove",Tp,Sr),a&&(a.addEventListener("touchstart",Rp,Sr),a.addEventListener("touchmove",Mp,Sr))),yi+=1}},[r]),l=M.useCallback(function(a){if(Dp){var c=document.body,d=c&&c.style;yi=Math.max(yi-1,0),r&&yi<1&&_p.forEach(function(f){var m=i.current[f];d&&(d[f]=m)}),c&&Ip()&&(c.removeEventListener("touchmove",Tp,Sr),a&&(a.removeEventListener("touchstart",Rp,Sr),a.removeEventListener("touchmove",Mp,Sr)))}},[r]);return M.useEffect(function(){if(t){var a=o.current;return s(a),function(){l(a)}}},[t,s,l]),function(a){o.current=a}}var eC=function(t){var n=t.target;return n.ownerDocument.activeElement&&n.ownerDocument.activeElement.blur()},tC={name:"1kfdb0e",styles:"position:fixed;left:0;bottom:0;right:0;top:0"};function nC(e){var t=e.children,n=e.lockEnabled,r=e.captureEnabled,i=r===void 0?!0:r,o=e.onBottomArrive,s=e.onBottomLeave,l=e.onTopArrive,a=e.onTopLeave,c=Jj({isEnabled:i,onBottomArrive:o,onBottomLeave:s,onTopArrive:l,onTopLeave:a}),d=Zj({isEnabled:n}),f=function(y){c(y),d(y)};return G(M.Fragment,null,n&&G("div",{onClick:eC,css:tC}),t(f))}var rC={name:"1a0ro4n-requiredInput",styles:"label:requiredInput;opacity:0;pointer-events:none;position:absolute;bottom:0;left:0;right:0;width:100%"},iC=function(t){var n=t.name,r=t.onFocus;return G("input",{required:!0,name:n,tabIndex:-1,"aria-hidden":"true",onFocus:r,css:rC,value:"",onChange:function(){}})},oC=iC;function hd(e){var t;return typeof window<"u"&&window.navigator!=null?e.test(((t=window.navigator.userAgentData)===null||t===void 0?void 0:t.platform)||window.navigator.platform):!1}function sC(){return hd(/^iPhone/i)}function Wv(){return hd(/^Mac/i)}function aC(){return hd(/^iPad/i)||Wv()&&navigator.maxTouchPoints>1}function lC(){return sC()||aC()}function uC(){return Wv()||lC()}var cC=function(t){return t.label},dC=function(t){return t.label},fC=function(t){return t.value},pC=function(t){return!!t.isDisabled},hC={clearIndicator:X4,container:V4,control:rj,dropdownIndicator:K4,group:aj,groupHeading:uj,indicatorsContainer:W4,indicatorSeparator:J4,input:pj,loadingIndicator:tj,loadingMessage:D4,menu:O4,menuList:M4,menuPortal:F4,multiValue:xj,multiValueLabel:yj,multiValueRemove:wj,noOptionsMessage:I4,option:Ej,placeholder:Pj,singleValue:Rj,valueContainer:$4},mC={primary:"#2684FF",primary75:"#4C9AFF",primary50:"#B2D4FF",primary25:"#DEEBFF",danger:"#DE350B",dangerLight:"#FFBDAD",neutral0:"hsl(0, 0%, 100%)",neutral5:"hsl(0, 0%, 95%)",neutral10:"hsl(0, 0%, 90%)",neutral20:"hsl(0, 0%, 80%)",neutral30:"hsl(0, 0%, 70%)",neutral40:"hsl(0, 0%, 60%)",neutral50:"hsl(0, 0%, 50%)",neutral60:"hsl(0, 0%, 40%)",neutral70:"hsl(0, 0%, 30%)",neutral80:"hsl(0, 0%, 20%)",neutral90:"hsl(0, 0%, 10%)"},gC=4,Bv=4,vC=38,xC=Bv*2,yC={baseUnit:Bv,controlHeight:vC,menuGutter:xC},Il={borderRadius:gC,colors:mC,spacing:yC},wC={"aria-live":"polite",backspaceRemovesValue:!0,blurInputOnSelect:kp(),captureMenuScroll:!kp(),classNames:{},closeMenuOnSelect:!0,closeMenuOnScroll:!1,components:{},controlShouldRenderValue:!0,escapeClearsValue:!1,filterOption:Kj(),formatGroupLabel:cC,getOptionLabel:dC,getOptionValue:fC,isDisabled:!1,isLoading:!1,isMulti:!1,isRtl:!1,isSearchable:!0,isOptionDisabled:pC,loadingMessage:function(){return"Loading..."},maxMenuHeight:300,minMenuHeight:140,menuIsOpen:!1,menuPlacement:"bottom",menuPosition:"absolute",menuShouldBlockScroll:!1,menuShouldScrollIntoView:!v4(),noOptionsMessage:function(){return"No options"},openMenuOnFocus:!1,openMenuOnClick:!0,options:[],pageSize:5,placeholder:"Select...",screenReaderStatus:function(t){var n=t.count;return"".concat(n," result").concat(n!==1?"s":""," available")},styles:{},tabIndex:0,tabSelectsValue:!0,unstyled:!1};function Lp(e,t,n,r){var i=Yv(e,t,n),o=Kv(e,t,n),s=Qv(e,t),l=Js(e,t);return{type:"option",data:t,isDisabled:i,isSelected:o,label:s,value:l,index:r}}function gs(e,t){return e.options.map(function(n,r){if("options"in n){var i=n.options.map(function(s,l){return Lp(e,s,t,l)}).filter(function(s){return Fp(e,s)});return i.length>0?{type:"group",data:n,options:i,index:r}:void 0}var o=Lp(e,n,t,r);return Fp(e,o)?o:void 0}).filter(w4)}function Hv(e){return e.reduce(function(t,n){return n.type==="group"?t.push.apply(t,ud(n.options.map(function(r){return r.data}))):t.push(n.data),t},[])}function Ap(e,t){return e.reduce(function(n,r){return r.type==="group"?n.push.apply(n,ud(r.options.map(function(i){return{data:i.data,id:"".concat(t,"-").concat(r.index,"-").concat(i.index)}}))):n.push({data:r.data,id:"".concat(t,"-").concat(r.index)}),n},[])}function bC(e,t){return Hv(gs(e,t))}function Fp(e,t){var n=e.inputValue,r=n===void 0?"":n,i=t.data,o=t.isSelected,s=t.label,l=t.value;return(!Xv(e)||!o)&&Gv(e,{label:s,value:l,data:i},r)}function SC(e,t){var n=e.focusedValue,r=e.selectValue,i=r.indexOf(n);if(i>-1){var o=t.indexOf(n);if(o>-1)return n;if(i<t.length)return t[i]}return null}function kC(e,t){var n=e.focusedOption;return n&&t.indexOf(n)>-1?n:t[0]}var Dl=function(t,n){var r,i=(r=t.find(function(o){return o.data===n}))===null||r===void 0?void 0:r.id;return i||null},Qv=function(t,n){return t.getOptionLabel(n)},Js=function(t,n){return t.getOptionValue(n)};function Yv(e,t,n){return typeof e.isOptionDisabled=="function"?e.isOptionDisabled(t,n):!1}function Kv(e,t,n){if(n.indexOf(t)>-1)return!0;if(typeof e.isOptionSelected=="function")return e.isOptionSelected(t,n);var r=Js(e,t);return n.some(function(i){return Js(e,i)===r})}function Gv(e,t,n){return e.filterOption?e.filterOption(t,n):!0}var Xv=function(t){var n=t.hideSelectedOptions,r=t.isMulti;return n===void 0?r:n},jC=1,qv=function(e){Wk(n,e);var t=Yk(n);function n(r){var i;if($k(this,n),i=t.call(this,r),i.state={ariaSelection:null,focusedOption:null,focusedOptionId:null,focusableOptionsWithIds:[],focusedValue:null,inputIsHidden:!1,isFocused:!1,selectValue:[],clearFocusValueOnUpdate:!1,prevWasFocused:!1,inputIsHiddenAfterUpdate:void 0,prevProps:void 0,instancePrefix:""},i.blockOptionHover=!1,i.isComposing=!1,i.commonProps=void 0,i.initialTouchX=0,i.initialTouchY=0,i.openAfterFocus=!1,i.scrollToFocusedOptionOnUpdate=!1,i.userIsDragging=void 0,i.isAppleDevice=uC(),i.controlRef=null,i.getControlRef=function(a){i.controlRef=a},i.focusedOptionRef=null,i.getFocusedOptionRef=function(a){i.focusedOptionRef=a},i.menuListRef=null,i.getMenuListRef=function(a){i.menuListRef=a},i.inputRef=null,i.getInputRef=function(a){i.inputRef=a},i.focus=i.focusInput,i.blur=i.blurInput,i.onChange=function(a,c){var d=i.props,f=d.onChange,m=d.name;c.name=m,i.ariaOnChange(a,c),f(a,c)},i.setValue=function(a,c,d){var f=i.props,m=f.closeMenuOnSelect,y=f.isMulti,g=f.inputValue;i.onInputChange("",{action:"set-value",prevInputValue:g}),m&&(i.setState({inputIsHiddenAfterUpdate:!y}),i.onMenuClose()),i.setState({clearFocusValueOnUpdate:!0}),i.onChange(a,{action:c,option:d})},i.selectOption=function(a){var c=i.props,d=c.blurInputOnSelect,f=c.isMulti,m=c.name,y=i.state.selectValue,g=f&&i.isOptionSelected(a,y),v=i.isOptionDisabled(a,y);if(g){var w=i.getOptionValue(a);i.setValue(y.filter(function(p){return i.getOptionValue(p)!==w}),"deselect-option",a)}else if(!v)f?i.setValue([].concat(ud(y),[a]),"select-option",a):i.setValue(a,"select-option");else{i.ariaOnChange(a,{action:"select-option",option:a,name:m});return}d&&i.blurInput()},i.removeValue=function(a){var c=i.props.isMulti,d=i.state.selectValue,f=i.getOptionValue(a),m=d.filter(function(g){return i.getOptionValue(g)!==f}),y=Xo(c,m,m[0]||null);i.onChange(y,{action:"remove-value",removedValue:a}),i.focusInput()},i.clearValue=function(){var a=i.state.selectValue;i.onChange(Xo(i.props.isMulti,[],null),{action:"clear",removedValues:a})},i.popValue=function(){var a=i.props.isMulti,c=i.state.selectValue,d=c[c.length-1],f=c.slice(0,c.length-1),m=Xo(a,f,f[0]||null);i.onChange(m,{action:"pop-value",removedValue:d})},i.getFocusedOptionId=function(a){return Dl(i.state.focusableOptionsWithIds,a)},i.getFocusableOptionsWithIds=function(){return Ap(gs(i.props,i.state.selectValue),i.getElementId("option"))},i.getValue=function(){return i.state.selectValue},i.cx=function(){for(var a=arguments.length,c=new Array(a),d=0;d<a;d++)c[d]=arguments[d];return f4.apply(void 0,[i.props.classNamePrefix].concat(c))},i.getOptionLabel=function(a){return Qv(i.props,a)},i.getOptionValue=function(a){return Js(i.props,a)},i.getStyles=function(a,c){var d=i.props.unstyled,f=hC[a](c,d);f.boxSizing="border-box";var m=i.props.styles[a];return m?m(f,c):f},i.getClassNames=function(a,c){var d,f;return(d=(f=i.props.classNames)[a])===null||d===void 0?void 0:d.call(f,c)},i.getElementId=function(a){return"".concat(i.state.instancePrefix,"-").concat(a)},i.getComponents=function(){return Aj(i.props)},i.buildCategorizedOptions=function(){return gs(i.props,i.state.selectValue)},i.getCategorizedOptions=function(){return i.props.menuIsOpen?i.buildCategorizedOptions():[]},i.buildFocusableOptions=function(){return Hv(i.buildCategorizedOptions())},i.getFocusableOptions=function(){return i.props.menuIsOpen?i.buildFocusableOptions():[]},i.ariaOnChange=function(a,c){i.setState({ariaSelection:X({value:a},c)})},i.onMenuMouseDown=function(a){a.button===0&&(a.stopPropagation(),a.preventDefault(),i.focusInput())},i.onMenuMouseMove=function(a){i.blockOptionHover=!1},i.onControlMouseDown=function(a){if(!a.defaultPrevented){var c=i.props.openMenuOnClick;i.state.isFocused?i.props.menuIsOpen?a.target.tagName!=="INPUT"&&a.target.tagName!=="TEXTAREA"&&i.onMenuClose():c&&i.openMenu("first"):(c&&(i.openAfterFocus=!0),i.focusInput()),a.target.tagName!=="INPUT"&&a.target.tagName!=="TEXTAREA"&&a.preventDefault()}},i.onDropdownIndicatorMouseDown=function(a){if(!(a&&a.type==="mousedown"&&a.button!==0)&&!i.props.isDisabled){var c=i.props,d=c.isMulti,f=c.menuIsOpen;i.focusInput(),f?(i.setState({inputIsHiddenAfterUpdate:!d}),i.onMenuClose()):i.openMenu("first"),a.preventDefault()}},i.onClearIndicatorMouseDown=function(a){a&&a.type==="mousedown"&&a.button!==0||(i.clearValue(),a.preventDefault(),i.openAfterFocus=!1,a.type==="touchend"?i.focusInput():setTimeout(function(){return i.focusInput()}))},i.onScroll=function(a){typeof i.props.closeMenuOnScroll=="boolean"?a.target instanceof HTMLElement&&Va(a.target)&&i.props.onMenuClose():typeof i.props.closeMenuOnScroll=="function"&&i.props.closeMenuOnScroll(a)&&i.props.onMenuClose()},i.onCompositionStart=function(){i.isComposing=!0},i.onCompositionEnd=function(){i.isComposing=!1},i.onTouchStart=function(a){var c=a.touches,d=c&&c.item(0);d&&(i.initialTouchX=d.clientX,i.initialTouchY=d.clientY,i.userIsDragging=!1)},i.onTouchMove=function(a){var c=a.touches,d=c&&c.item(0);if(d){var f=Math.abs(d.clientX-i.initialTouchX),m=Math.abs(d.clientY-i.initialTouchY),y=5;i.userIsDragging=f>y||m>y}},i.onTouchEnd=function(a){i.userIsDragging||(i.controlRef&&!i.controlRef.contains(a.target)&&i.menuListRef&&!i.menuListRef.contains(a.target)&&i.blurInput(),i.initialTouchX=0,i.initialTouchY=0)},i.onControlTouchEnd=function(a){i.userIsDragging||i.onControlMouseDown(a)},i.onClearIndicatorTouchEnd=function(a){i.userIsDragging||i.onClearIndicatorMouseDown(a)},i.onDropdownIndicatorTouchEnd=function(a){i.userIsDragging||i.onDropdownIndicatorMouseDown(a)},i.handleInputChange=function(a){var c=i.props.inputValue,d=a.currentTarget.value;i.setState({inputIsHiddenAfterUpdate:!1}),i.onInputChange(d,{action:"input-change",prevInputValue:c}),i.props.menuIsOpen||i.onMenuOpen()},i.onInputFocus=function(a){i.props.onFocus&&i.props.onFocus(a),i.setState({inputIsHiddenAfterUpdate:!1,isFocused:!0}),(i.openAfterFocus||i.props.openMenuOnFocus)&&i.openMenu("first"),i.openAfterFocus=!1},i.onInputBlur=function(a){var c=i.props.inputValue;if(i.menuListRef&&i.menuListRef.contains(document.activeElement)){i.inputRef.focus();return}i.props.onBlur&&i.props.onBlur(a),i.onInputChange("",{action:"input-blur",prevInputValue:c}),i.onMenuClose(),i.setState({focusedValue:null,isFocused:!1})},i.onOptionHover=function(a){if(!(i.blockOptionHover||i.state.focusedOption===a)){var c=i.getFocusableOptions(),d=c.indexOf(a);i.setState({focusedOption:a,focusedOptionId:d>-1?i.getFocusedOptionId(a):null})}},i.shouldHideSelectedOptions=function(){return Xv(i.props)},i.onValueInputFocus=function(a){a.preventDefault(),a.stopPropagation(),i.focus()},i.onKeyDown=function(a){var c=i.props,d=c.isMulti,f=c.backspaceRemovesValue,m=c.escapeClearsValue,y=c.inputValue,g=c.isClearable,v=c.isDisabled,w=c.menuIsOpen,p=c.onKeyDown,h=c.tabSelectsValue,x=c.openMenuOnFocus,b=i.state,k=b.focusedOption,_=b.focusedValue,E=b.selectValue;if(!v&&!(typeof p=="function"&&(p(a),a.defaultPrevented))){switch(i.blockOptionHover=!0,a.key){case"ArrowLeft":if(!d||y)return;i.focusValue("previous");break;case"ArrowRight":if(!d||y)return;i.focusValue("next");break;case"Delete":case"Backspace":if(y)return;if(_)i.removeValue(_);else{if(!f)return;d?i.popValue():g&&i.clearValue()}break;case"Tab":if(i.isComposing||a.shiftKey||!w||!h||!k||x&&i.isOptionSelected(k,E))return;i.selectOption(k);break;case"Enter":if(a.keyCode===229)break;if(w){if(!k||i.isComposing)return;i.selectOption(k);break}return;case"Escape":w?(i.setState({inputIsHiddenAfterUpdate:!1}),i.onInputChange("",{action:"menu-close",prevInputValue:y}),i.onMenuClose()):g&&m&&i.clearValue();break;case" ":if(y)return;if(!w){i.openMenu("first");break}if(!k)return;i.selectOption(k);break;case"ArrowUp":w?i.focusOption("up"):i.openMenu("last");break;case"ArrowDown":w?i.focusOption("down"):i.openMenu("first");break;case"PageUp":if(!w)return;i.focusOption("pageup");break;case"PageDown":if(!w)return;i.focusOption("pagedown");break;case"Home":if(!w)return;i.focusOption("first");break;case"End":if(!w)return;i.focusOption("last");break;default:return}a.preventDefault()}},i.state.instancePrefix="react-select-"+(i.props.instanceId||++jC),i.state.selectValue=bp(r.value),r.menuIsOpen&&i.state.selectValue.length){var o=i.getFocusableOptionsWithIds(),s=i.buildFocusableOptions(),l=s.indexOf(i.state.selectValue[0]);i.state.focusableOptionsWithIds=o,i.state.focusedOption=s[l],i.state.focusedOptionId=Dl(o,s[l])}return i}return Uk(n,[{key:"componentDidMount",value:function(){this.startListeningComposition(),this.startListeningToTouch(),this.props.closeMenuOnScroll&&document&&document.addEventListener&&document.addEventListener("scroll",this.onScroll,!0),this.props.autoFocus&&this.focusInput(),this.props.menuIsOpen&&this.state.focusedOption&&this.menuListRef&&this.focusedOptionRef&&Sp(this.menuListRef,this.focusedOptionRef)}},{key:"componentDidUpdate",value:function(i){var o=this.props,s=o.isDisabled,l=o.menuIsOpen,a=this.state.isFocused;(a&&!s&&i.isDisabled||a&&l&&!i.menuIsOpen)&&this.focusInput(),a&&s&&!i.isDisabled?this.setState({isFocused:!1},this.onMenuClose):!a&&!s&&i.isDisabled&&this.inputRef===document.activeElement&&this.setState({isFocused:!0}),this.menuListRef&&this.focusedOptionRef&&this.scrollToFocusedOptionOnUpdate&&(Sp(this.menuListRef,this.focusedOptionRef),this.scrollToFocusedOptionOnUpdate=!1)}},{key:"componentWillUnmount",value:function(){this.stopListeningComposition(),this.stopListeningToTouch(),document.removeEventListener("scroll",this.onScroll,!0)}},{key:"onMenuOpen",value:function(){this.props.onMenuOpen()}},{key:"onMenuClose",value:function(){this.onInputChange("",{action:"menu-close",prevInputValue:this.props.inputValue}),this.props.onMenuClose()}},{key:"onInputChange",value:function(i,o){this.props.onInputChange(i,o)}},{key:"focusInput",value:function(){this.inputRef&&this.inputRef.focus()}},{key:"blurInput",value:function(){this.inputRef&&this.inputRef.blur()}},{key:"openMenu",value:function(i){var o=this,s=this.state,l=s.selectValue,a=s.isFocused,c=this.buildFocusableOptions(),d=i==="first"?0:c.length-1;if(!this.props.isMulti){var f=c.indexOf(l[0]);f>-1&&(d=f)}this.scrollToFocusedOptionOnUpdate=!(a&&this.menuListRef),this.setState({inputIsHiddenAfterUpdate:!1,focusedValue:null,focusedOption:c[d],focusedOptionId:this.getFocusedOptionId(c[d])},function(){return o.onMenuOpen()})}},{key:"focusValue",value:function(i){var o=this.state,s=o.selectValue,l=o.focusedValue;if(this.props.isMulti){this.setState({focusedOption:null});var a=s.indexOf(l);l||(a=-1);var c=s.length-1,d=-1;if(s.length){switch(i){case"previous":a===0?d=0:a===-1?d=c:d=a-1;break;case"next":a>-1&&a<c&&(d=a+1);break}this.setState({inputIsHidden:d!==-1,focusedValue:s[d]})}}}},{key:"focusOption",value:function(){var i=arguments.length>0&&arguments[0]!==void 0?arguments[0]:"first",o=this.props.pageSize,s=this.state.focusedOption,l=this.getFocusableOptions();if(l.length){var a=0,c=l.indexOf(s);s||(c=-1),i==="up"?a=c>0?c-1:l.length-1:i==="down"?a=(c+1)%l.length:i==="pageup"?(a=c-o,a<0&&(a=0)):i==="pagedown"?(a=c+o,a>l.length-1&&(a=l.length-1)):i==="last"&&(a=l.length-1),this.scrollToFocusedOptionOnUpdate=!0,this.setState({focusedOption:l[a],focusedValue:null,focusedOptionId:this.getFocusedOptionId(l[a])})}}},{key:"getTheme",value:function(){return this.props.theme?typeof this.props.theme=="function"?this.props.theme(Il):X(X({},Il),this.props.theme):Il}},{key:"getCommonProps",value:function(){var i=this.clearValue,o=this.cx,s=this.getStyles,l=this.getClassNames,a=this.getValue,c=this.selectOption,d=this.setValue,f=this.props,m=f.isMulti,y=f.isRtl,g=f.options,v=this.hasValue();return{clearValue:i,cx:o,getStyles:s,getClassNames:l,getValue:a,hasValue:v,isMulti:m,isRtl:y,options:g,selectOption:c,selectProps:f,setValue:d,theme:this.getTheme()}}},{key:"hasValue",value:function(){var i=this.state.selectValue;return i.length>0}},{key:"hasOptions",value:function(){return!!this.getFocusableOptions().length}},{key:"isClearable",value:function(){var i=this.props,o=i.isClearable,s=i.isMulti;return o===void 0?s:o}},{key:"isOptionDisabled",value:function(i,o){return Yv(this.props,i,o)}},{key:"isOptionSelected",value:function(i,o){return Kv(this.props,i,o)}},{key:"filterOption",value:function(i,o){return Gv(this.props,i,o)}},{key:"formatOptionLabel",value:function(i,o){if(typeof this.props.formatOptionLabel=="function"){var s=this.props.inputValue,l=this.state.selectValue;return this.props.formatOptionLabel(i,{context:o,inputValue:s,selectValue:l})}else return this.getOptionLabel(i)}},{key:"formatGroupLabel",value:function(i){return this.props.formatGroupLabel(i)}},{key:"startListeningComposition",value:function(){document&&document.addEventListener&&(document.addEventListener("compositionstart",this.onCompositionStart,!1),document.addEventListener("compositionend",this.onCompositionEnd,!1))}},{key:"stopListeningComposition",value:function(){document&&document.removeEventListener&&(document.removeEventListener("compositionstart",this.onCompositionStart),document.removeEventListener("compositionend",this.onCompositionEnd))}},{key:"startListeningToTouch",value:function(){document&&document.addEventListener&&(document.addEventListener("touchstart",this.onTouchStart,!1),document.addEventListener("touchmove",this.onTouchMove,!1),document.addEventListener("touchend",this.onTouchEnd,!1))}},{key:"stopListeningToTouch",value:function(){document&&document.removeEventListener&&(document.removeEventListener("touchstart",this.onTouchStart),document.removeEventListener("touchmove",this.onTouchMove),document.removeEventListener("touchend",this.onTouchEnd))}},{key:"renderInput",value:function(){var i=this.props,o=i.isDisabled,s=i.isSearchable,l=i.inputId,a=i.inputValue,c=i.tabIndex,d=i.form,f=i.menuIsOpen,m=i.required,y=this.getComponents(),g=y.Input,v=this.state,w=v.inputIsHidden,p=v.ariaSelection,h=this.commonProps,x=l||this.getElementId("input"),b=X(X(X({"aria-autocomplete":"list","aria-expanded":f,"aria-haspopup":!0,"aria-errormessage":this.props["aria-errormessage"],"aria-invalid":this.props["aria-invalid"],"aria-label":this.props["aria-label"],"aria-labelledby":this.props["aria-labelledby"],"aria-required":m,role:"combobox","aria-activedescendant":this.isAppleDevice?void 0:this.state.focusedOptionId||""},f&&{"aria-controls":this.getElementId("listbox")}),!s&&{"aria-readonly":!0}),this.hasValue()?(p==null?void 0:p.action)==="initial-input-focus"&&{"aria-describedby":this.getElementId("live-region")}:{"aria-describedby":this.getElementId("placeholder")});return s?M.createElement(g,J({},h,{autoCapitalize:"none",autoComplete:"off",autoCorrect:"off",id:x,innerRef:this.getInputRef,isDisabled:o,isHidden:w,onBlur:this.onInputBlur,onChange:this.handleInputChange,onFocus:this.onInputFocus,spellCheck:"false",tabIndex:c,form:d,type:"text",value:a},b)):M.createElement(Xj,J({id:x,innerRef:this.getInputRef,onBlur:this.onInputBlur,onChange:Xs,onFocus:this.onInputFocus,disabled:o,tabIndex:c,inputMode:"none",form:d,value:""},b))}},{key:"renderPlaceholderOrValue",value:function(){var i=this,o=this.getComponents(),s=o.MultiValue,l=o.MultiValueContainer,a=o.MultiValueLabel,c=o.MultiValueRemove,d=o.SingleValue,f=o.Placeholder,m=this.commonProps,y=this.props,g=y.controlShouldRenderValue,v=y.isDisabled,w=y.isMulti,p=y.inputValue,h=y.placeholder,x=this.state,b=x.selectValue,k=x.focusedValue,_=x.isFocused;if(!this.hasValue()||!g)return p?null:M.createElement(f,J({},m,{key:"placeholder",isDisabled:v,isFocused:_,innerProps:{id:this.getElementId("placeholder")}}),h);if(w)return b.map(function(P,T){var I=P===k,W="".concat(i.getOptionLabel(P),"-").concat(i.getOptionValue(P));return M.createElement(s,J({},m,{components:{Container:l,Label:a,Remove:c},isFocused:I,isDisabled:v,key:W,index:T,removeProps:{onClick:function(){return i.removeValue(P)},onTouchEnd:function(){return i.removeValue(P)},onMouseDown:function(D){D.preventDefault()}},data:P}),i.formatOptionLabel(P,"value"))});if(p)return null;var E=b[0];return M.createElement(d,J({},m,{data:E,isDisabled:v}),this.formatOptionLabel(E,"value"))}},{key:"renderClearIndicator",value:function(){var i=this.getComponents(),o=i.ClearIndicator,s=this.commonProps,l=this.props,a=l.isDisabled,c=l.isLoading,d=this.state.isFocused;if(!this.isClearable()||!o||a||!this.hasValue()||c)return null;var f={onMouseDown:this.onClearIndicatorMouseDown,onTouchEnd:this.onClearIndicatorTouchEnd,"aria-hidden":"true"};return M.createElement(o,J({},s,{innerProps:f,isFocused:d}))}},{key:"renderLoadingIndicator",value:function(){var i=this.getComponents(),o=i.LoadingIndicator,s=this.commonProps,l=this.props,a=l.isDisabled,c=l.isLoading,d=this.state.isFocused;if(!o||!c)return null;var f={"aria-hidden":"true"};return M.createElement(o,J({},s,{innerProps:f,isDisabled:a,isFocused:d}))}},{key:"renderIndicatorSeparator",value:function(){var i=this.getComponents(),o=i.DropdownIndicator,s=i.IndicatorSeparator;if(!o||!s)return null;var l=this.commonProps,a=this.props.isDisabled,c=this.state.isFocused;return M.createElement(s,J({},l,{isDisabled:a,isFocused:c}))}},{key:"renderDropdownIndicator",value:function(){var i=this.getComponents(),o=i.DropdownIndicator;if(!o)return null;var s=this.commonProps,l=this.props.isDisabled,a=this.state.isFocused,c={onMouseDown:this.onDropdownIndicatorMouseDown,onTouchEnd:this.onDropdownIndicatorTouchEnd,"aria-hidden":"true"};return M.createElement(o,J({},s,{innerProps:c,isDisabled:l,isFocused:a}))}},{key:"renderMenu",value:function(){var i=this,o=this.getComponents(),s=o.Group,l=o.GroupHeading,a=o.Menu,c=o.MenuList,d=o.MenuPortal,f=o.LoadingMessage,m=o.NoOptionsMessage,y=o.Option,g=this.commonProps,v=this.state.focusedOption,w=this.props,p=w.captureMenuScroll,h=w.inputValue,x=w.isLoading,b=w.loadingMessage,k=w.minMenuHeight,_=w.maxMenuHeight,E=w.menuIsOpen,P=w.menuPlacement,T=w.menuPosition,I=w.menuPortalTarget,W=w.menuShouldBlockScroll,A=w.menuShouldScrollIntoView,D=w.noOptionsMessage,q=w.onMenuScrollToTop,ee=w.onMenuScrollToBottom;if(!E)return null;var te=function(Oe,be){var Ue=Oe.type,me=Oe.data,Se=Oe.isDisabled,et=Oe.isSelected,yt=Oe.label,F=Oe.value,B=v===me,ie=Se?void 0:function(){return i.onOptionHover(me)},se=Se?void 0:function(){return i.selectOption(me)},ne="".concat(i.getElementId("option"),"-").concat(be),le={id:ne,onClick:se,onMouseMove:ie,onMouseOver:ie,tabIndex:-1,role:"option","aria-selected":i.isAppleDevice?void 0:et};return M.createElement(y,J({},g,{innerProps:le,data:me,isDisabled:Se,isSelected:et,key:ne,label:yt,type:Ue,value:F,isFocused:B,innerRef:B?i.getFocusedOptionRef:void 0}),i.formatOptionLabel(Oe.data,"menu"))},xe;if(this.hasOptions())xe=this.getCategorizedOptions().map(function(re){if(re.type==="group"){var Oe=re.data,be=re.options,Ue=re.index,me="".concat(i.getElementId("group"),"-").concat(Ue),Se="".concat(me,"-heading");return M.createElement(s,J({},g,{key:me,data:Oe,options:be,Heading:l,headingProps:{id:Se,data:re.data},label:i.formatGroupLabel(re.data)}),re.options.map(function(et){return te(et,"".concat(Ue,"-").concat(et.index))}))}else if(re.type==="option")return te(re,"".concat(re.index))});else if(x){var z=b({inputValue:h});if(z===null)return null;xe=M.createElement(f,g,z)}else{var Q=D({inputValue:h});if(Q===null)return null;xe=M.createElement(m,g,Q)}var Y={minMenuHeight:k,maxMenuHeight:_,menuPlacement:P,menuPosition:T,menuShouldScrollIntoView:A},de=M.createElement(_4,J({},g,Y),function(re){var Oe=re.ref,be=re.placerProps,Ue=be.placement,me=be.maxHeight;return M.createElement(a,J({},g,Y,{innerRef:Oe,innerProps:{onMouseDown:i.onMenuMouseDown,onMouseMove:i.onMenuMouseMove},isLoading:x,placement:Ue}),M.createElement(nC,{captureEnabled:p,onTopArrive:q,onBottomArrive:ee,lockEnabled:W},function(Se){return M.createElement(c,J({},g,{innerRef:function(yt){i.getMenuListRef(yt),Se(yt)},innerProps:{role:"listbox","aria-multiselectable":g.isMulti,id:i.getElementId("listbox")},isLoading:x,maxHeight:me,focusedOption:v}),xe)}))});return I||T==="fixed"?M.createElement(d,J({},g,{appendTo:I,controlElement:this.controlRef,menuPlacement:P,menuPosition:T}),de):de}},{key:"renderFormField",value:function(){var i=this,o=this.props,s=o.delimiter,l=o.isDisabled,a=o.isMulti,c=o.name,d=o.required,f=this.state.selectValue;if(d&&!this.hasValue()&&!l)return M.createElement(oC,{name:c,onFocus:this.onValueInputFocus});if(!(!c||l))if(a)if(s){var m=f.map(function(v){return i.getOptionValue(v)}).join(s);return M.createElement("input",{name:c,type:"hidden",value:m})}else{var y=f.length>0?f.map(function(v,w){return M.createElement("input",{key:"i-".concat(w),name:c,type:"hidden",value:i.getOptionValue(v)})}):M.createElement("input",{name:c,type:"hidden",value:""});return M.createElement("div",null,y)}else{var g=f[0]?this.getOptionValue(f[0]):"";return M.createElement("input",{name:c,type:"hidden",value:g})}}},{key:"renderLiveRegion",value:function(){var i=this.commonProps,o=this.state,s=o.ariaSelection,l=o.focusedOption,a=o.focusedValue,c=o.isFocused,d=o.selectValue,f=this.getFocusableOptions();return M.createElement(Bj,J({},i,{id:this.getElementId("live-region"),ariaSelection:s,focusedOption:l,focusedValue:a,isFocused:c,selectValue:d,focusableOptions:f,isAppleDevice:this.isAppleDevice}))}},{key:"render",value:function(){var i=this.getComponents(),o=i.Control,s=i.IndicatorsContainer,l=i.SelectContainer,a=i.ValueContainer,c=this.props,d=c.className,f=c.id,m=c.isDisabled,y=c.menuIsOpen,g=this.state.isFocused,v=this.commonProps=this.getCommonProps();return M.createElement(l,J({},v,{className:d,innerProps:{id:f,onKeyDown:this.onKeyDown},isDisabled:m,isFocused:g}),this.renderLiveRegion(),M.createElement(o,J({},v,{innerRef:this.getControlRef,innerProps:{onMouseDown:this.onControlMouseDown,onTouchEnd:this.onControlTouchEnd},isDisabled:m,isFocused:g,menuIsOpen:y}),M.createElement(a,J({},v,{isDisabled:m}),this.renderPlaceholderOrValue(),this.renderInput()),M.createElement(s,J({},v,{isDisabled:m}),this.renderClearIndicator(),this.renderLoadingIndicator(),this.renderIndicatorSeparator(),this.renderDropdownIndicator())),this.renderMenu(),this.renderFormField())}}],[{key:"getDerivedStateFromProps",value:function(i,o){var s=o.prevProps,l=o.clearFocusValueOnUpdate,a=o.inputIsHiddenAfterUpdate,c=o.ariaSelection,d=o.isFocused,f=o.prevWasFocused,m=o.instancePrefix,y=i.options,g=i.value,v=i.menuIsOpen,w=i.inputValue,p=i.isMulti,h=bp(g),x={};if(s&&(g!==s.value||y!==s.options||v!==s.menuIsOpen||w!==s.inputValue)){var b=v?bC(i,h):[],k=v?Ap(gs(i,h),"".concat(m,"-option")):[],_=l?SC(o,h):null,E=kC(o,b),P=Dl(k,E);x={selectValue:h,focusedOption:E,focusedOptionId:P,focusableOptionsWithIds:k,focusedValue:_,clearFocusValueOnUpdate:!1}}var T=a!=null&&i!==s?{inputIsHidden:a,inputIsHiddenAfterUpdate:void 0}:{},I=c,W=d&&f;return d&&!W&&(I={value:Xo(p,h,h[0]||null),options:h,action:"initial-input-focus"},W=!f),(c==null?void 0:c.action)==="initial-input-focus"&&(I=null),X(X(X({},x),T),{},{prevProps:i,ariaSelection:I,prevWasFocused:W})}}]),n}(M.Component);qv.defaultProps=wC;var CC=M.forwardRef(function(e,t){var n=Nk(e);return M.createElement(qv,J({ref:t},n))}),EC=CC;const OC=(e,t)=>{const[n,r]=M.useState(()=>{try{const o=window.localStorage.getItem(e);return o?JSON.parse(o):t}catch(o){return console.error("Error loading data from localStorage:",o),t}});return[n,o=>{try{const s=o instanceof Function?o(n):o;r(s),window.localStorage.setItem(e,JSON.stringify(s))}catch(s){console.error("Error storing data to localStorage:",s)}}]},zp=[{value:"",label:"Оберіть послугу"},{value:"Менторство та консультації",label:"Менторство та консультації"},{value:"Діагностика",label:"Діагностика"},{value:"Стратегії",label:"Стратегії"},{value:"Навчання",label:"Навчання"},{value:"Інше",label:"Інше"}],Vp="/healthy-management-project/assets/computer1x-nLk1eyXX.webp",_C="/healthy-management-project/assets/computer@2x-oGWk-qXD.webp",Np="/healthy-management-project/assets/mob_computer1x-gdjE7oao.webp",PC="/healthy-management-project/assets/mob_computer@2x-JptvcU_h.webp",cn=()=>u.jsx("svg",{width:"8",height:"8",children:u.jsx("use",{href:`${fs}#star`})});var Jv={exports:{}};function TC(e){return e&&typeof e=="object"&&"default"in e?e.default:e}var Ll=TC(M),MC=ho;function RC(e,t){for(var n=Object.getOwnPropertyNames(t),r=0;r<n.length;r++){var i=n[r],o=Object.getOwnPropertyDescriptor(t,i);o&&o.configurable&&e[i]===void 0&&Object.defineProperty(e,i,o)}return e}function Xu(){return(Xu=Object.assign||function(e){for(var t=1;t<arguments.length;t++){var n=arguments[t];for(var r in n)Object.prototype.hasOwnProperty.call(n,r)&&(e[r]=n[r])}return e}).apply(this,arguments)}function IC(e,t){e.prototype=Object.create(t.prototype),RC(e.prototype.constructor=e,t)}function DC(e,t){if(e==null)return{};var n,r,i={},o=Object.keys(e);for(r=0;r<o.length;r++)n=o[r],0<=t.indexOf(n)||(i[n]=e[n]);return i}function kr(e){if(e===void 0)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return e}var LC=function(e,t,n,r,i,o,s,l){if(!e){var a;if(t===void 0)a=new Error("Minified exception occurred; use the non-minified dev environment for the full error message and additional helpful warnings.");else{var c=[n,r,i,o,s,l],d=0;(a=new Error(t.replace(/%s/g,function(){return c[d++]}))).name="Invariant Violation"}throw a.framesToPop=1,a}},$p=LC;function Up(e,t,n){if("selectionStart"in e&&"selectionEnd"in e)e.selectionStart=t,e.selectionEnd=n;else{var r=e.createTextRange();r.collapse(!0),r.moveStart("character",t),r.moveEnd("character",n-t),r.select()}}function AC(e){var t=0,n=0;if("selectionStart"in e&&"selectionEnd"in e)t=e.selectionStart,n=e.selectionEnd;else{var r=document.selection.createRange();r.parentElement()===e&&(t=-r.moveStart("character",-e.value.length),n=-r.moveEnd("character",-e.value.length))}return{start:t,end:n,length:n-t}}var FC={9:"[0-9]",a:"[A-Za-z]","*":"[A-Za-z0-9]"},zC="_";function Wp(e,t,n){var r="",i="",o=null,s=[];if(t===void 0&&(t=zC),n==null&&(n=FC),!e||typeof e!="string")return{maskChar:t,formatChars:n,mask:null,prefix:null,lastEditablePosition:null,permanents:[]};var l=!1;return e.split("").forEach(function(a){l=!l&&a==="\\"||(l||!n[a]?(s.push(r.length),r.length===s.length-1&&(i+=a)):o=r.length+1,r+=a,!1)}),{maskChar:t,formatChars:n,prefix:i,mask:r,lastEditablePosition:o,permanents:s}}function Ct(e,t){return e.permanents.indexOf(t)!==-1}function Na(e,t,n){var r=e.mask,i=e.formatChars;if(!n)return!1;if(Ct(e,t))return r[t]===n;var o=i[r[t]];return new RegExp(o).test(n)}function Bp(e,t){return t.split("").every(function(n,r){return Ct(e,r)||!Na(e,r,n)})}function Oi(e,t){var n=e.maskChar,r=e.prefix;if(!n){for(;t.length>r.length&&Ct(e,t.length-1);)t=t.slice(0,t.length-1);return t.length}for(var i=r.length,o=t.length;o>=r.length;o--){var s=t[o];if(!Ct(e,o)&&Na(e,o,s)){i=o+1;break}}return i}function Zv(e,t){return Oi(e,t)===e.mask.length}function pn(e,t){var n=e.maskChar,r=e.mask,i=e.prefix;if(!n){for((t=qu(e,"",t,0)).length<i.length&&(t=i);t.length<r.length&&Ct(e,t.length);)t+=r[t.length];return t}if(t)return qu(e,pn(e,""),t,0);for(var o=0;o<r.length;o++)Ct(e,o)?t+=r[o]:t+=n;return t}function VC(e,t,n,r){var i=n+r,o=e.maskChar,s=e.mask,l=e.prefix,a=t.split("");if(o)return a.map(function(d,f){return f<n||i<=f?d:Ct(e,f)?s[f]:o}).join("");for(var c=i;c<a.length;c++)Ct(e,c)&&(a[c]="");return n=Math.max(l.length,n),a.splice(n,i-n),t=a.join(""),pn(e,t)}function qu(e,t,n,r){var i=e.mask,o=e.maskChar,s=e.prefix,l=n.split(""),a=Zv(e,t);return!o&&r>t.length&&(t+=i.slice(t.length,r)),l.every(function(c){for(;y=c,Ct(e,m=r)&&y!==i[m];){if(r>=t.length&&(t+=i[r]),d=c,f=r,o&&Ct(e,f)&&d===o)return!0;if(++r>=i.length)return!1}var d,f,m,y;return!Na(e,r,c)&&c!==o||(r<t.length?t=o||a||r<s.length?t.slice(0,r)+c+t.slice(r+1):(t=t.slice(0,r)+c+t.slice(r),pn(e,t)):o||(t+=c),++r<i.length)}),t}function NC(e,t,n,r){var i=e.mask,o=e.maskChar,s=n.split(""),l=r;return s.every(function(a){for(;d=a,Ct(e,c=r)&&d!==i[c];)if(++r>=i.length)return!1;var c,d;return(Na(e,r,a)||a===o)&&r++,r<i.length}),r-l}function $C(e,t){for(var n=t;0<=n;--n)if(!Ct(e,n))return n;return null}function zi(e,t){for(var n=e.mask,r=t;r<n.length;++r)if(!Ct(e,r))return r;return null}function Al(e){return e||e===0?e+"":""}function UC(e,t,n,r,i){var o=e.mask,s=e.prefix,l=e.lastEditablePosition,a=t,c="",d=0,f=0,m=Math.min(i.start,n.start);return n.end>i.start?f=(d=NC(e,r,c=a.slice(i.start,n.end),m))?i.length:0:a.length<r.length&&(f=r.length-a.length),a=r,f&&(f===1&&!i.length&&(m=i.start===n.start?zi(e,n.start):$C(e,n.start)),a=VC(e,a,m,f)),a=qu(e,a,c,m),(m+=d)>=o.length?m=o.length:m<s.length&&!d?m=s.length:m>=s.length&&m<l&&d&&(m=zi(e,m)),c||(c=null),{value:a=pn(e,a),enteredString:c,selection:{start:m,end:m}}}function WC(){var e=new RegExp("windows","i"),t=new RegExp("phone","i"),n=navigator.userAgent;return e.test(n)&&t.test(n)}function ft(e){return typeof e=="function"}function BC(){return window.requestAnimationFrame||window.webkitRequestAnimationFrame||window.mozRequestAnimationFrame}function ex(){return window.cancelAnimationFrame||window.webkitCancelRequestAnimationFrame||window.webkitCancelAnimationFrame||window.mozCancelAnimationFrame}function Hp(e){return(ex()?BC():function(){return setTimeout(e,1e3/60)})(e)}function Fl(e){(ex()||clearTimeout)(e)}var HC=function(e){function t(r){var i=e.call(this,r)||this;i.focused=!1,i.mounted=!1,i.previousSelection=null,i.selectionDeferId=null,i.saveSelectionLoopDeferId=null,i.saveSelectionLoop=function(){i.previousSelection=i.getSelection(),i.saveSelectionLoopDeferId=Hp(i.saveSelectionLoop)},i.runSaveSelectionLoop=function(){i.saveSelectionLoopDeferId===null&&i.saveSelectionLoop()},i.stopSaveSelectionLoop=function(){i.saveSelectionLoopDeferId!==null&&(Fl(i.saveSelectionLoopDeferId),i.saveSelectionLoopDeferId=null,i.previousSelection=null)},i.getInputDOMNode=function(){if(!i.mounted)return null;var g=MC.findDOMNode(kr(kr(i))),v=typeof window<"u"&&g instanceof window.Element;if(g&&!v)return null;if(g.nodeName!=="INPUT"&&(g=g.querySelector("input")),!g)throw new Error("react-input-mask: inputComponent doesn't contain input node");return g},i.getInputValue=function(){var g=i.getInputDOMNode();return g?g.value:null},i.setInputValue=function(g){var v=i.getInputDOMNode();v&&(i.value=g,v.value=g)},i.setCursorToEnd=function(){var g=Oi(i.maskOptions,i.value),v=zi(i.maskOptions,g);v!==null&&i.setCursorPosition(v)},i.setSelection=function(g,v,w){w===void 0&&(w={});var p=i.getInputDOMNode(),h=i.isFocused();p&&h&&(w.deferred||Up(p,g,v),i.selectionDeferId!==null&&Fl(i.selectionDeferId),i.selectionDeferId=Hp(function(){i.selectionDeferId=null,Up(p,g,v)}),i.previousSelection={start:g,end:v,length:Math.abs(v-g)})},i.getSelection=function(){return AC(i.getInputDOMNode())},i.getCursorPosition=function(){return i.getSelection().start},i.setCursorPosition=function(g){i.setSelection(g,g)},i.isFocused=function(){return i.focused},i.getBeforeMaskedValueChangeConfig=function(){var g=i.maskOptions,v=g.mask,w=g.maskChar,p=g.permanents,h=g.formatChars;return{mask:v,maskChar:w,permanents:p,alwaysShowMask:!!i.props.alwaysShowMask,formatChars:h}},i.isInputAutofilled=function(g,v,w,p){var h=i.getInputDOMNode();try{if(h.matches(":-webkit-autofill"))return!0}catch{}return!i.focused||p.end<w.length&&v.end===g.length},i.onChange=function(g){var v=kr(kr(i)).beforePasteState,w=kr(kr(i)).previousSelection,p=i.props.beforeMaskedValueChange,h=i.getInputValue(),x=i.value,b=i.getSelection();i.isInputAutofilled(h,b,x,w)&&(x=pn(i.maskOptions,""),w={start:0,end:0,length:0}),v&&(w=v.selection,x=v.value,b={start:w.start+h.length,end:w.start+h.length,length:0},h=x.slice(0,w.start)+h+x.slice(w.end),i.beforePasteState=null);var k=UC(i.maskOptions,h,b,x,w),_=k.enteredString,E=k.selection,P=k.value;if(ft(p)){var T=p({value:P,selection:E},{value:x,selection:w},_,i.getBeforeMaskedValueChangeConfig());P=T.value,E=T.selection}i.setInputValue(P),ft(i.props.onChange)&&i.props.onChange(g),i.isWindowsPhoneBrowser?i.setSelection(E.start,E.end,{deferred:!0}):i.setSelection(E.start,E.end)},i.onFocus=function(g){var v=i.props.beforeMaskedValueChange,w=i.maskOptions,p=w.mask,h=w.prefix;if(i.focused=!0,i.mounted=!0,p){if(i.value)Oi(i.maskOptions,i.value)<i.maskOptions.mask.length&&i.setCursorToEnd();else{var x=pn(i.maskOptions,h),b=pn(i.maskOptions,x),k=Oi(i.maskOptions,b),_=zi(i.maskOptions,k),E={start:_,end:_};if(ft(v)){var P=v({value:b,selection:E},{value:i.value,selection:null},null,i.getBeforeMaskedValueChangeConfig());b=P.value,E=P.selection}var T=b!==i.getInputValue();T&&i.setInputValue(b),T&&ft(i.props.onChange)&&i.props.onChange(g),i.setSelection(E.start,E.end)}i.runSaveSelectionLoop()}ft(i.props.onFocus)&&i.props.onFocus(g)},i.onBlur=function(g){var v=i.props.beforeMaskedValueChange,w=i.maskOptions.mask;if(i.stopSaveSelectionLoop(),i.focused=!1,w&&!i.props.alwaysShowMask&&Bp(i.maskOptions,i.value)){var p="";ft(v)&&(p=v({value:p,selection:null},{value:i.value,selection:i.previousSelection},null,i.getBeforeMaskedValueChangeConfig()).value);var h=p!==i.getInputValue();h&&i.setInputValue(p),h&&ft(i.props.onChange)&&i.props.onChange(g)}ft(i.props.onBlur)&&i.props.onBlur(g)},i.onMouseDown=function(g){if(!i.focused&&document.addEventListener){i.mouseDownX=g.clientX,i.mouseDownY=g.clientY,i.mouseDownTime=new Date().getTime();var v=function w(p){if(document.removeEventListener("mouseup",w),i.focused){var h=Math.abs(p.clientX-i.mouseDownX),x=Math.abs(p.clientY-i.mouseDownY),b=Math.max(h,x),k=new Date().getTime()-i.mouseDownTime;(b<=10&&k<=200||b<=5&&k<=300)&&i.setCursorToEnd()}};document.addEventListener("mouseup",v)}ft(i.props.onMouseDown)&&i.props.onMouseDown(g)},i.onPaste=function(g){ft(i.props.onPaste)&&i.props.onPaste(g),g.defaultPrevented||(i.beforePasteState={value:i.getInputValue(),selection:i.getSelection()},i.setInputValue(""))},i.handleRef=function(g){i.props.children==null&&ft(i.props.inputRef)&&i.props.inputRef(g)};var o=r.mask,s=r.maskChar,l=r.formatChars,a=r.alwaysShowMask,c=r.beforeMaskedValueChange,d=r.defaultValue,f=r.value;i.maskOptions=Wp(o,s,l),d==null&&(d=""),f==null&&(f=d);var m=Al(f);if(i.maskOptions.mask&&(a||m)&&(m=pn(i.maskOptions,m),ft(c))){var y=r.value;r.value==null&&(y=d),m=c({value:m,selection:null},{value:y=Al(y),selection:null},null,i.getBeforeMaskedValueChangeConfig()).value}return i.value=m,i}IC(t,e);var n=t.prototype;return n.componentDidMount=function(){this.mounted=!0,this.getInputDOMNode()&&(this.isWindowsPhoneBrowser=WC(),this.maskOptions.mask&&this.getInputValue()!==this.value&&this.setInputValue(this.value))},n.componentDidUpdate=function(){var r=this.previousSelection,i=this.props,o=i.beforeMaskedValueChange,s=i.alwaysShowMask,l=i.mask,a=i.maskChar,c=i.formatChars,d=this.maskOptions,f=s||this.isFocused(),m=this.props.value!=null,y=m?Al(this.props.value):this.value,g=r?r.start:null;if(this.maskOptions=Wp(l,a,c),this.maskOptions.mask){!d.mask&&this.isFocused()&&this.runSaveSelectionLoop();var v=this.maskOptions.mask&&this.maskOptions.mask!==d.mask;if(d.mask||m||(y=this.getInputValue()),(v||this.maskOptions.mask&&(y||f))&&(y=pn(this.maskOptions,y)),v){var w=Oi(this.maskOptions,y);(g===null||w<g)&&(g=Zv(this.maskOptions,y)?w:zi(this.maskOptions,w))}!this.maskOptions.mask||!Bp(this.maskOptions,y)||f||m&&this.props.value||(y="");var p={start:g,end:g};if(ft(o)){var h=o({value:y,selection:p},{value:this.value,selection:this.previousSelection},null,this.getBeforeMaskedValueChangeConfig());y=h.value,p=h.selection}this.value=y;var x=this.getInputValue()!==this.value;x?(this.setInputValue(this.value),this.forceUpdate()):v&&this.forceUpdate();var b=!1;p.start!=null&&p.end!=null&&(b=!r||r.start!==p.start||r.end!==p.end),(b||x)&&this.setSelection(p.start,p.end)}else d.mask&&(this.stopSaveSelectionLoop(),this.forceUpdate())},n.componentWillUnmount=function(){this.mounted=!1,this.selectionDeferId!==null&&Fl(this.selectionDeferId),this.stopSaveSelectionLoop()},n.render=function(){var r,i=this.props,o=(i.mask,i.alwaysShowMask,i.maskChar,i.formatChars,i.inputRef,i.beforeMaskedValueChange,i.children),s=DC(i,["mask","alwaysShowMask","maskChar","formatChars","inputRef","beforeMaskedValueChange","children"]);if(o){ft(o)||$p(!1);var l=["onChange","onPaste","onMouseDown","onFocus","onBlur","value","disabled","readOnly"],a=Xu({},s);l.forEach(function(d){return delete a[d]}),r=o(a),l.filter(function(d){return r.props[d]!=null&&r.props[d]!==s[d]}).length&&$p(!1)}else r=Ll.createElement("input",Xu({ref:this.handleRef},s));var c={onFocus:this.onFocus,onBlur:this.onBlur};return this.maskOptions.mask&&(s.disabled||s.readOnly||(c.onChange=this.onChange,c.onPaste=this.onPaste,c.onMouseDown=this.onMouseDown),s.value!=null&&(c.value=this.value)),r=Ll.cloneElement(r,c)},t}(Ll.Component),QC=HC;Jv.exports=QC;var YC=Jv.exports;const KC=ao(YC),GC=j.div`
  padding: 80px 0;
`,XC=j.h2`
  margin-bottom: 40px;
  font-size: 48px;
  font-weight: 600;
  line-height: 1.17;
  color: var(--typography-black);
`,qC=j.div`
  display: flex;
  gap: 24px;
  width: 100%;
  max-height: 860px;
`,Qp=j.img`
  width: 100%;
  height: 100%;
`,JC=j.div`
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  gap: 40px;
  flex: 1 0 0;
  max-width: 828px;
  padding: 80px;
  border-radius: 16px;
  background-color: var(--background-white);
`,ZC=j.h3`
  font-size: 24px;
  font-weight: 600;
  line-height: 1.33;
  color: var(--primary-bluedark);
`,eE=j.form`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-self: stretch;
`,Yp=j.label`
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
`,tE=j.label`
  display: flex;
  align-content: flex-start;
  flex-wrap: wrap;
  width: 100%;
  gap: 4px;
  font-size: 16px;
  font-weight: 600;
  line-height: 1.5;
  color: var(--primary-bluedark);
`,nE=j(cn)`
  vertical-align: super;
`,Kp=j.input`
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
`,rE=j.div`
  display: flex;
  gap: 8px;
`,Gp=j.label`
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
`,iE=j(KC)`
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
`,oE=j.textarea`
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
`,wi=j.p`
  display: flex;
  gap: 8px;
  align-items: center;
  font-size: 12px;
  font-weight: 400;
  line-height: 1.33;
  color: var(--secondary-red);
`,sE=j.button`
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
`;var xo=e=>e.type==="checkbox",Fr=e=>e instanceof Date,lt=e=>e==null;const tx=e=>typeof e=="object";var He=e=>!lt(e)&&!Array.isArray(e)&&tx(e)&&!Fr(e),nx=e=>He(e)&&e.target?xo(e.target)?e.target.checked:e.target.value:e,aE=e=>e.substring(0,e.search(/\.\d+(\.|$)/))||e,rx=(e,t)=>e.has(aE(t)),lE=e=>{const t=e.constructor&&e.constructor.prototype;return He(t)&&t.hasOwnProperty("isPrototypeOf")},md=typeof window<"u"&&typeof window.HTMLElement<"u"&&typeof document<"u";function Nt(e){let t;const n=Array.isArray(e);if(e instanceof Date)t=new Date(e);else if(e instanceof Set)t=new Set(e);else if(!(md&&(e instanceof Blob||e instanceof FileList))&&(n||He(e)))if(t=n?[]:{},!n&&!lE(e))t=e;else for(const r in e)e.hasOwnProperty(r)&&(t[r]=Nt(e[r]));else return e;return t}var yo=e=>Array.isArray(e)?e.filter(Boolean):[],Le=e=>e===void 0,U=(e,t,n)=>{if(!t||!He(e))return n;const r=yo(t.split(/[,[\].]+?/)).reduce((i,o)=>lt(i)?i:i[o],e);return Le(r)||r===e?Le(e[t])?n:e[t]:r},tn=e=>typeof e=="boolean";const Zs={BLUR:"blur",FOCUS_OUT:"focusout",CHANGE:"change"},Bt={onBlur:"onBlur",onChange:"onChange",onSubmit:"onSubmit",onTouched:"onTouched",all:"all"},un={max:"max",min:"min",maxLength:"maxLength",minLength:"minLength",pattern:"pattern",required:"required",validate:"validate"},uE=Ce.createContext(null),gd=()=>Ce.useContext(uE);var ix=(e,t,n,r=!0)=>{const i={defaultValues:t._defaultValues};for(const o in e)Object.defineProperty(i,o,{get:()=>{const s=o;return t._proxyFormState[s]!==Bt.all&&(t._proxyFormState[s]=!r||Bt.all),n&&(n[s]=!0),e[s]}});return i},Tt=e=>He(e)&&!Object.keys(e).length,ox=(e,t,n,r)=>{n(e);const{name:i,...o}=e;return Tt(o)||Object.keys(o).length>=Object.keys(t).length||Object.keys(o).find(s=>t[s]===(!r||Bt.all))},vs=e=>Array.isArray(e)?e:[e],sx=(e,t,n)=>!e||!t||e===t||vs(e).some(r=>r&&(n?r===t:r.startsWith(t)||t.startsWith(r)));function vd(e){const t=Ce.useRef(e);t.current=e,Ce.useEffect(()=>{const n=!e.disabled&&t.current.subject&&t.current.subject.subscribe({next:t.current.next});return()=>{n&&n.unsubscribe()}},[e.disabled])}function cE(e){const t=gd(),{control:n=t.control,disabled:r,name:i,exact:o}=e||{},[s,l]=Ce.useState(n._formState),a=Ce.useRef(!0),c=Ce.useRef({isDirty:!1,isLoading:!1,dirtyFields:!1,touchedFields:!1,isValidating:!1,isValid:!1,errors:!1}),d=Ce.useRef(i);return d.current=i,vd({disabled:r,next:f=>a.current&&sx(d.current,f.name,o)&&ox(f,c.current,n._updateFormState)&&l({...n._formState,...f}),subject:n._subjects.state}),Ce.useEffect(()=>(a.current=!0,c.current.isValid&&n._updateValid(!0),()=>{a.current=!1}),[n]),ix(s,n,c.current,!1)}var rn=e=>typeof e=="string",ax=(e,t,n,r,i)=>rn(e)?(r&&t.watch.add(e),U(n,e,i)):Array.isArray(e)?e.map(o=>(r&&t.watch.add(o),U(n,o))):(r&&(t.watchAll=!0),n);function dE(e){const t=gd(),{control:n=t.control,name:r,defaultValue:i,disabled:o,exact:s}=e||{},l=Ce.useRef(r);l.current=r,vd({disabled:o,subject:n._subjects.values,next:d=>{sx(l.current,d.name,s)&&c(Nt(ax(l.current,n._names,d.values||n._formValues,!1,i)))}});const[a,c]=Ce.useState(n._getWatch(r,i));return Ce.useEffect(()=>n._removeUnmounted()),a}var xd=e=>/^\w*$/.test(e),lx=e=>yo(e.replace(/["|']|\]/g,"").split(/\.|\[/));function je(e,t,n){let r=-1;const i=xd(t)?[t]:lx(t),o=i.length,s=o-1;for(;++r<o;){const l=i[r];let a=n;if(r!==s){const c=e[l];a=He(c)||Array.isArray(c)?c:isNaN(+i[r+1])?{}:[]}e[l]=a,e=e[l]}return e}function fE(e){const t=gd(),{name:n,disabled:r,control:i=t.control,shouldUnregister:o}=e,s=rx(i._names.array,n),l=dE({control:i,name:n,defaultValue:U(i._formValues,n,U(i._defaultValues,n,e.defaultValue)),exact:!0}),a=cE({control:i,name:n}),c=Ce.useRef(i.register(n,{...e.rules,value:l}));return c.current=i.register(n,e.rules),Ce.useEffect(()=>{const d=i._options.shouldUnregister||o,f=(m,y)=>{const g=U(i._fields,m);g&&(g._f.mount=y)};if(f(n,!0),d){const m=Nt(U(i._options.defaultValues,n));je(i._defaultValues,n,m),Le(U(i._formValues,n))&&je(i._formValues,n,m)}return()=>{(s?d&&!i._state.action:d)?i.unregister(n):f(n,!1)}},[n,i,s,o]),Ce.useEffect(()=>{U(i._fields,n)&&i._updateDisabledField({disabled:r,fields:i._fields,name:n,value:U(i._fields,n)._f.value})},[r,n,i]),{field:{name:n,value:l,...tn(r)||tn(a.disabled)?{disabled:a.disabled||r}:{},onChange:Ce.useCallback(d=>c.current.onChange({target:{value:nx(d),name:n},type:Zs.CHANGE}),[n]),onBlur:Ce.useCallback(()=>c.current.onBlur({target:{value:U(i._formValues,n),name:n},type:Zs.BLUR}),[n,i]),ref:d=>{const f=U(i._fields,n);f&&d&&(f._f.ref={focus:()=>d.focus(),select:()=>d.select(),setCustomValidity:m=>d.setCustomValidity(m),reportValidity:()=>d.reportValidity()})}},formState:a,fieldState:Object.defineProperties({},{invalid:{enumerable:!0,get:()=>!!U(a.errors,n)},isDirty:{enumerable:!0,get:()=>!!U(a.dirtyFields,n)},isTouched:{enumerable:!0,get:()=>!!U(a.touchedFields,n)},error:{enumerable:!0,get:()=>U(a.errors,n)}})}}const pE=e=>e.render(fE(e));var hE=(e,t,n,r,i)=>t?{...n[e],types:{...n[e]&&n[e].types?n[e].types:{},[r]:i||!0}}:{},Xp=e=>({isOnSubmit:!e||e===Bt.onSubmit,isOnBlur:e===Bt.onBlur,isOnChange:e===Bt.onChange,isOnAll:e===Bt.all,isOnTouch:e===Bt.onTouched}),qp=(e,t,n)=>!n&&(t.watchAll||t.watch.has(e)||[...t.watch].some(r=>e.startsWith(r)&&/^\.\w+/.test(e.slice(r.length))));const xs=(e,t,n,r)=>{for(const i of n||Object.keys(e)){const o=U(e,i);if(o){const{_f:s,...l}=o;if(s){if(s.refs&&s.refs[0]&&t(s.refs[0],i)&&!r)break;if(s.ref&&t(s.ref,s.name)&&!r)break}else He(l)&&xs(l,t)}}};var mE=(e,t,n)=>{const r=yo(U(e,n));return je(r,"root",t[n]),je(e,n,r),e},yd=e=>e.type==="file",$n=e=>typeof e=="function",ea=e=>{if(!md)return!1;const t=e?e.ownerDocument:0;return e instanceof(t&&t.defaultView?t.defaultView.HTMLElement:HTMLElement)},ys=e=>rn(e),wd=e=>e.type==="radio",ta=e=>e instanceof RegExp;const Jp={value:!1,isValid:!1},Zp={value:!0,isValid:!0};var ux=e=>{if(Array.isArray(e)){if(e.length>1){const t=e.filter(n=>n&&n.checked&&!n.disabled).map(n=>n.value);return{value:t,isValid:!!t.length}}return e[0].checked&&!e[0].disabled?e[0].attributes&&!Le(e[0].attributes.value)?Le(e[0].value)||e[0].value===""?Zp:{value:e[0].value,isValid:!0}:Zp:Jp}return Jp};const eh={isValid:!1,value:null};var cx=e=>Array.isArray(e)?e.reduce((t,n)=>n&&n.checked&&!n.disabled?{isValid:!0,value:n.value}:t,eh):eh;function th(e,t,n="validate"){if(ys(e)||Array.isArray(e)&&e.every(ys)||tn(e)&&!e)return{type:n,message:ys(e)?e:"",ref:t}}var jr=e=>He(e)&&!ta(e)?e:{value:e,message:""},nh=async(e,t,n,r,i)=>{const{ref:o,refs:s,required:l,maxLength:a,minLength:c,min:d,max:f,pattern:m,validate:y,name:g,valueAsNumber:v,mount:w,disabled:p}=e._f,h=U(t,g);if(!w||p)return{};const x=s?s[0]:o,b=A=>{r&&x.reportValidity&&(x.setCustomValidity(tn(A)?"":A||""),x.reportValidity())},k={},_=wd(o),E=xo(o),P=_||E,T=(v||yd(o))&&Le(o.value)&&Le(h)||ea(o)&&o.value===""||h===""||Array.isArray(h)&&!h.length,I=hE.bind(null,g,n,k),W=(A,D,q,ee=un.maxLength,te=un.minLength)=>{const xe=A?D:q;k[g]={type:A?ee:te,message:xe,ref:o,...I(A?ee:te,xe)}};if(i?!Array.isArray(h)||!h.length:l&&(!P&&(T||lt(h))||tn(h)&&!h||E&&!ux(s).isValid||_&&!cx(s).isValid)){const{value:A,message:D}=ys(l)?{value:!!l,message:l}:jr(l);if(A&&(k[g]={type:un.required,message:D,ref:x,...I(un.required,D)},!n))return b(D),k}if(!T&&(!lt(d)||!lt(f))){let A,D;const q=jr(f),ee=jr(d);if(!lt(h)&&!isNaN(h)){const te=o.valueAsNumber||h&&+h;lt(q.value)||(A=te>q.value),lt(ee.value)||(D=te<ee.value)}else{const te=o.valueAsDate||new Date(h),xe=Y=>new Date(new Date().toDateString()+" "+Y),z=o.type=="time",Q=o.type=="week";rn(q.value)&&h&&(A=z?xe(h)>xe(q.value):Q?h>q.value:te>new Date(q.value)),rn(ee.value)&&h&&(D=z?xe(h)<xe(ee.value):Q?h<ee.value:te<new Date(ee.value))}if((A||D)&&(W(!!A,q.message,ee.message,un.max,un.min),!n))return b(k[g].message),k}if((a||c)&&!T&&(rn(h)||i&&Array.isArray(h))){const A=jr(a),D=jr(c),q=!lt(A.value)&&h.length>+A.value,ee=!lt(D.value)&&h.length<+D.value;if((q||ee)&&(W(q,A.message,D.message),!n))return b(k[g].message),k}if(m&&!T&&rn(h)){const{value:A,message:D}=jr(m);if(ta(A)&&!h.match(A)&&(k[g]={type:un.pattern,message:D,ref:o,...I(un.pattern,D)},!n))return b(D),k}if(y){if($n(y)){const A=await y(h,t),D=th(A,x);if(D&&(k[g]={...D,...I(un.validate,D.message)},!n))return b(D.message),k}else if(He(y)){let A={};for(const D in y){if(!Tt(A)&&!n)break;const q=th(await y[D](h,t),x,D);q&&(A={...q,...I(D,q.message)},b(q.message),n&&(k[g]=A))}if(!Tt(A)&&(k[g]={ref:x,...A},!n))return k}}return b(!0),k};function gE(e,t){const n=t.slice(0,-1).length;let r=0;for(;r<n;)e=Le(e)?r++:e[t[r++]];return e}function vE(e){for(const t in e)if(e.hasOwnProperty(t)&&!Le(e[t]))return!1;return!0}function Ge(e,t){const n=Array.isArray(t)?t:xd(t)?[t]:lx(t),r=n.length===1?e:gE(e,n),i=n.length-1,o=n[i];return r&&delete r[o],i!==0&&(He(r)&&Tt(r)||Array.isArray(r)&&vE(r))&&Ge(e,n.slice(0,-1)),e}function zl(){let e=[];return{get observers(){return e},next:i=>{for(const o of e)o.next&&o.next(i)},subscribe:i=>(e.push(i),{unsubscribe:()=>{e=e.filter(o=>o!==i)}}),unsubscribe:()=>{e=[]}}}var na=e=>lt(e)||!tx(e);function ar(e,t){if(na(e)||na(t))return e===t;if(Fr(e)&&Fr(t))return e.getTime()===t.getTime();const n=Object.keys(e),r=Object.keys(t);if(n.length!==r.length)return!1;for(const i of n){const o=e[i];if(!r.includes(i))return!1;if(i!=="ref"){const s=t[i];if(Fr(o)&&Fr(s)||He(o)&&He(s)||Array.isArray(o)&&Array.isArray(s)?!ar(o,s):o!==s)return!1}}return!0}var dx=e=>e.type==="select-multiple",xE=e=>wd(e)||xo(e),Vl=e=>ea(e)&&e.isConnected,fx=e=>{for(const t in e)if($n(e[t]))return!0;return!1};function ra(e,t={}){const n=Array.isArray(e);if(He(e)||n)for(const r in e)Array.isArray(e[r])||He(e[r])&&!fx(e[r])?(t[r]=Array.isArray(e[r])?[]:{},ra(e[r],t[r])):lt(e[r])||(t[r]=!0);return t}function px(e,t,n){const r=Array.isArray(e);if(He(e)||r)for(const i in e)Array.isArray(e[i])||He(e[i])&&!fx(e[i])?Le(t)||na(n[i])?n[i]=Array.isArray(e[i])?ra(e[i],[]):{...ra(e[i])}:px(e[i],lt(t)?{}:t[i],n[i]):n[i]=!ar(e[i],t[i]);return n}var Nl=(e,t)=>px(e,t,ra(t)),hx=(e,{valueAsNumber:t,valueAsDate:n,setValueAs:r})=>Le(e)?e:t?e===""?NaN:e&&+e:n&&rn(e)?new Date(e):r?r(e):e;function $l(e){const t=e.ref;if(!(e.refs?e.refs.every(n=>n.disabled):t.disabled))return yd(t)?t.files:wd(t)?cx(e.refs).value:dx(t)?[...t.selectedOptions].map(({value:n})=>n):xo(t)?ux(e.refs).value:hx(Le(t.value)?e.ref.value:t.value,e)}var yE=(e,t,n,r)=>{const i={};for(const o of e){const s=U(t,o);s&&je(i,o,s._f)}return{criteriaMode:n,names:[...e],fields:i,shouldUseNativeValidation:r}},bi=e=>Le(e)?e:ta(e)?e.source:He(e)?ta(e.value)?e.value.source:e.value:e,wE=e=>e.mount&&(e.required||e.min||e.max||e.maxLength||e.minLength||e.pattern||e.validate);function rh(e,t,n){const r=U(e,n);if(r||xd(n))return{error:r,name:n};const i=n.split(".");for(;i.length;){const o=i.join("."),s=U(t,o),l=U(e,o);if(s&&!Array.isArray(s)&&n!==o)return{name:n};if(l&&l.type)return{name:o,error:l};i.pop()}return{name:n}}var bE=(e,t,n,r,i)=>i.isOnAll?!1:!n&&i.isOnTouch?!(t||e):(n?r.isOnBlur:i.isOnBlur)?!e:(n?r.isOnChange:i.isOnChange)?e:!0,SE=(e,t)=>!yo(U(e,t)).length&&Ge(e,t);const kE={mode:Bt.onSubmit,reValidateMode:Bt.onChange,shouldFocusError:!0};function jE(e={},t){let n={...kE,...e},r={submitCount:0,isDirty:!1,isLoading:$n(n.defaultValues),isValidating:!1,isSubmitted:!1,isSubmitting:!1,isSubmitSuccessful:!1,isValid:!1,touchedFields:{},dirtyFields:{},errors:{},disabled:!1},i={},o=He(n.defaultValues)||He(n.values)?Nt(n.defaultValues||n.values)||{}:{},s=n.shouldUnregister?{}:Nt(o),l={action:!1,mount:!1,watch:!1},a={mount:new Set,unMount:new Set,array:new Set,watch:new Set},c,d=0;const f={isDirty:!1,dirtyFields:!1,touchedFields:!1,isValidating:!1,isValid:!1,errors:!1},m={values:zl(),array:zl(),state:zl()},y=e.resetOptions&&e.resetOptions.keepDirtyValues,g=Xp(n.mode),v=Xp(n.reValidateMode),w=n.criteriaMode===Bt.all,p=S=>O=>{clearTimeout(d),d=setTimeout(S,O)},h=async S=>{if(f.isValid||S){const O=n.resolver?Tt((await T()).errors):await W(i,!0);O!==r.isValid&&m.state.next({isValid:O})}},x=S=>f.isValidating&&m.state.next({isValidating:S}),b=(S,O=[],C,$,N=!0,V=!0)=>{if($&&C){if(l.action=!0,V&&Array.isArray(U(i,S))){const Z=C(U(i,S),$.argA,$.argB);N&&je(i,S,Z)}if(V&&Array.isArray(U(r.errors,S))){const Z=C(U(r.errors,S),$.argA,$.argB);N&&je(r.errors,S,Z),SE(r.errors,S)}if(f.touchedFields&&V&&Array.isArray(U(r.touchedFields,S))){const Z=C(U(r.touchedFields,S),$.argA,$.argB);N&&je(r.touchedFields,S,Z)}f.dirtyFields&&(r.dirtyFields=Nl(o,s)),m.state.next({name:S,isDirty:D(S,O),dirtyFields:r.dirtyFields,errors:r.errors,isValid:r.isValid})}else je(s,S,O)},k=(S,O)=>{je(r.errors,S,O),m.state.next({errors:r.errors})},_=(S,O,C,$)=>{const N=U(i,S);if(N){const V=U(s,S,Le(C)?U(o,S):C);Le(V)||$&&$.defaultChecked||O?je(s,S,O?V:$l(N._f)):te(S,V),l.mount&&h()}},E=(S,O,C,$,N)=>{let V=!1,Z=!1;const ke={name:S};if(!C||$){f.isDirty&&(Z=r.isDirty,r.isDirty=ke.isDirty=D(),V=Z!==ke.isDirty);const ze=ar(U(o,S),O);Z=U(r.dirtyFields,S),ze?Ge(r.dirtyFields,S):je(r.dirtyFields,S,!0),ke.dirtyFields=r.dirtyFields,V=V||f.dirtyFields&&Z!==!ze}if(C){const ze=U(r.touchedFields,S);ze||(je(r.touchedFields,S,C),ke.touchedFields=r.touchedFields,V=V||f.touchedFields&&ze!==C)}return V&&N&&m.state.next(ke),V?ke:{}},P=(S,O,C,$)=>{const N=U(r.errors,S),V=f.isValid&&tn(O)&&r.isValid!==O;if(e.delayError&&C?(c=p(()=>k(S,C)),c(e.delayError)):(clearTimeout(d),c=null,C?je(r.errors,S,C):Ge(r.errors,S)),(C?!ar(N,C):N)||!Tt($)||V){const Z={...$,...V&&tn(O)?{isValid:O}:{},errors:r.errors,name:S};r={...r,...Z},m.state.next(Z)}x(!1)},T=async S=>n.resolver(s,n.context,yE(S||a.mount,i,n.criteriaMode,n.shouldUseNativeValidation)),I=async S=>{const{errors:O}=await T(S);if(S)for(const C of S){const $=U(O,C);$?je(r.errors,C,$):Ge(r.errors,C)}else r.errors=O;return O},W=async(S,O,C={valid:!0})=>{for(const $ in S){const N=S[$];if(N){const{_f:V,...Z}=N;if(V){const ke=a.array.has(V.name),ze=await nh(N,s,w,n.shouldUseNativeValidation&&!O,ke);if(ze[V.name]&&(C.valid=!1,O))break;!O&&(U(ze,V.name)?ke?mE(r.errors,ze,V.name):je(r.errors,V.name,ze[V.name]):Ge(r.errors,V.name))}Z&&await W(Z,O,C)}}return C.valid},A=()=>{for(const S of a.unMount){const O=U(i,S);O&&(O._f.refs?O._f.refs.every(C=>!Vl(C)):!Vl(O._f.ref))&&Se(S)}a.unMount=new Set},D=(S,O)=>(S&&O&&je(s,S,O),!ar(re(),o)),q=(S,O,C)=>ax(S,a,{...l.mount?s:Le(O)?o:rn(S)?{[S]:O}:O},C,O),ee=S=>yo(U(l.mount?s:o,S,e.shouldUnregister?U(o,S,[]):[])),te=(S,O,C={})=>{const $=U(i,S);let N=O;if($){const V=$._f;V&&(!V.disabled&&je(s,S,hx(O,V)),N=ea(V.ref)&&lt(O)?"":O,dx(V.ref)?[...V.ref.options].forEach(Z=>Z.selected=N.includes(Z.value)):V.refs?xo(V.ref)?V.refs.length>1?V.refs.forEach(Z=>(!Z.defaultChecked||!Z.disabled)&&(Z.checked=Array.isArray(N)?!!N.find(ke=>ke===Z.value):N===Z.value)):V.refs[0]&&(V.refs[0].checked=!!N):V.refs.forEach(Z=>Z.checked=Z.value===N):yd(V.ref)?V.ref.value="":(V.ref.value=N,V.ref.type||m.values.next({name:S,values:{...s}})))}(C.shouldDirty||C.shouldTouch)&&E(S,N,C.shouldTouch,C.shouldDirty,!0),C.shouldValidate&&de(S)},xe=(S,O,C)=>{for(const $ in O){const N=O[$],V=`${S}.${$}`,Z=U(i,V);(a.array.has(S)||!na(N)||Z&&!Z._f)&&!Fr(N)?xe(V,N,C):te(V,N,C)}},z=(S,O,C={})=>{const $=U(i,S),N=a.array.has(S),V=Nt(O);je(s,S,V),N?(m.array.next({name:S,values:{...s}}),(f.isDirty||f.dirtyFields)&&C.shouldDirty&&m.state.next({name:S,dirtyFields:Nl(o,s),isDirty:D(S,V)})):$&&!$._f&&!lt(V)?xe(S,V,C):te(S,V,C),qp(S,a)&&m.state.next({...r}),m.values.next({name:S,values:{...s}}),!l.mount&&t()},Q=async S=>{const O=S.target;let C=O.name,$=!0;const N=U(i,C),V=()=>O.type?$l(N._f):nx(S),Z=ke=>{$=Number.isNaN(ke)||ke===U(s,C,ke)};if(N){let ke,ze;const wo=V(),xr=S.type===Zs.BLUR||S.type===Zs.FOCUS_OUT,mx=!wE(N._f)&&!n.resolver&&!U(r.errors,C)&&!N._f.deps||bE(xr,U(r.touchedFields,C),r.isSubmitted,v,g),$a=qp(C,a,xr);je(s,C,wo),xr?(N._f.onBlur&&N._f.onBlur(S),c&&c(0)):N._f.onChange&&N._f.onChange(S);const Ua=E(C,wo,xr,!1),gx=!Tt(Ua)||$a;if(!xr&&m.values.next({name:C,type:S.type,values:{...s}}),mx)return f.isValid&&h(),gx&&m.state.next({name:C,...$a?{}:Ua});if(!xr&&$a&&m.state.next({...r}),x(!0),n.resolver){const{errors:bd}=await T([C]);if(Z(wo),$){const vx=rh(r.errors,i,C),Sd=rh(bd,i,vx.name||C);ke=Sd.error,C=Sd.name,ze=Tt(bd)}}else ke=(await nh(N,s,w,n.shouldUseNativeValidation))[C],Z(wo),$&&(ke?ze=!1:f.isValid&&(ze=await W(i,!0)));$&&(N._f.deps&&de(N._f.deps),P(C,ze,ke,Ua))}},Y=(S,O)=>{if(U(r.errors,O)&&S.focus)return S.focus(),1},de=async(S,O={})=>{let C,$;const N=vs(S);if(x(!0),n.resolver){const V=await I(Le(S)?S:N);C=Tt(V),$=S?!N.some(Z=>U(V,Z)):C}else S?($=(await Promise.all(N.map(async V=>{const Z=U(i,V);return await W(Z&&Z._f?{[V]:Z}:Z)}))).every(Boolean),!(!$&&!r.isValid)&&h()):$=C=await W(i);return m.state.next({...!rn(S)||f.isValid&&C!==r.isValid?{}:{name:S},...n.resolver||!S?{isValid:C}:{},errors:r.errors,isValidating:!1}),O.shouldFocus&&!$&&xs(i,Y,S?N:a.mount),$},re=S=>{const O={...o,...l.mount?s:{}};return Le(S)?O:rn(S)?U(O,S):S.map(C=>U(O,C))},Oe=(S,O)=>({invalid:!!U((O||r).errors,S),isDirty:!!U((O||r).dirtyFields,S),isTouched:!!U((O||r).touchedFields,S),error:U((O||r).errors,S)}),be=S=>{S&&vs(S).forEach(O=>Ge(r.errors,O)),m.state.next({errors:S?r.errors:{}})},Ue=(S,O,C)=>{const $=(U(i,S,{_f:{}})._f||{}).ref;je(r.errors,S,{...O,ref:$}),m.state.next({name:S,errors:r.errors,isValid:!1}),C&&C.shouldFocus&&$&&$.focus&&$.focus()},me=(S,O)=>$n(S)?m.values.subscribe({next:C=>S(q(void 0,O),C)}):q(S,O,!0),Se=(S,O={})=>{for(const C of S?vs(S):a.mount)a.mount.delete(C),a.array.delete(C),O.keepValue||(Ge(i,C),Ge(s,C)),!O.keepError&&Ge(r.errors,C),!O.keepDirty&&Ge(r.dirtyFields,C),!O.keepTouched&&Ge(r.touchedFields,C),!n.shouldUnregister&&!O.keepDefaultValue&&Ge(o,C);m.values.next({values:{...s}}),m.state.next({...r,...O.keepDirty?{isDirty:D()}:{}}),!O.keepIsValid&&h()},et=({disabled:S,name:O,field:C,fields:$,value:N})=>{if(tn(S)){const V=S?void 0:Le(N)?$l(C?C._f:U($,O)._f):N;je(s,O,V),E(O,V,!1,!1,!0)}},yt=(S,O={})=>{let C=U(i,S);const $=tn(O.disabled);return je(i,S,{...C||{},_f:{...C&&C._f?C._f:{ref:{name:S}},name:S,mount:!0,...O}}),a.mount.add(S),C?et({field:C,disabled:O.disabled,name:S}):_(S,!0,O.value),{...$?{disabled:O.disabled}:{},...n.progressive?{required:!!O.required,min:bi(O.min),max:bi(O.max),minLength:bi(O.minLength),maxLength:bi(O.maxLength),pattern:bi(O.pattern)}:{},name:S,onChange:Q,onBlur:Q,ref:N=>{if(N){yt(S,O),C=U(i,S);const V=Le(N.value)&&N.querySelectorAll&&N.querySelectorAll("input,select,textarea")[0]||N,Z=xE(V),ke=C._f.refs||[];if(Z?ke.find(ze=>ze===V):V===C._f.ref)return;je(i,S,{_f:{...C._f,...Z?{refs:[...ke.filter(Vl),V,...Array.isArray(U(o,S))?[{}]:[]],ref:{type:V.type,name:S}}:{ref:V}}}),_(S,!1,void 0,V)}else C=U(i,S,{}),C._f&&(C._f.mount=!1),(n.shouldUnregister||O.shouldUnregister)&&!(rx(a.array,S)&&l.action)&&a.unMount.add(S)}}},F=()=>n.shouldFocusError&&xs(i,Y,a.mount),B=S=>{tn(S)&&(m.state.next({disabled:S}),xs(i,O=>{O.disabled=S},0,!1))},ie=(S,O)=>async C=>{C&&(C.preventDefault&&C.preventDefault(),C.persist&&C.persist());let $=Nt(s);if(m.state.next({isSubmitting:!0}),n.resolver){const{errors:N,values:V}=await T();r.errors=N,$=V}else await W(i);Ge(r.errors,"root"),Tt(r.errors)?(m.state.next({errors:{}}),await S($,C)):(O&&await O({...r.errors},C),F(),setTimeout(F)),m.state.next({isSubmitted:!0,isSubmitting:!1,isSubmitSuccessful:Tt(r.errors),submitCount:r.submitCount+1,errors:r.errors})},se=(S,O={})=>{U(i,S)&&(Le(O.defaultValue)?z(S,U(o,S)):(z(S,O.defaultValue),je(o,S,O.defaultValue)),O.keepTouched||Ge(r.touchedFields,S),O.keepDirty||(Ge(r.dirtyFields,S),r.isDirty=O.defaultValue?D(S,U(o,S)):D()),O.keepError||(Ge(r.errors,S),f.isValid&&h()),m.state.next({...r}))},ne=(S,O={})=>{const C=S?Nt(S):o,$=Nt(C),N=S&&!Tt(S)?$:o;if(O.keepDefaultValues||(o=C),!O.keepValues){if(O.keepDirtyValues||y)for(const V of a.mount)U(r.dirtyFields,V)?je(N,V,U(s,V)):z(V,U(N,V));else{if(md&&Le(S))for(const V of a.mount){const Z=U(i,V);if(Z&&Z._f){const ke=Array.isArray(Z._f.refs)?Z._f.refs[0]:Z._f.ref;if(ea(ke)){const ze=ke.closest("form");if(ze){ze.reset();break}}}}i={}}s=e.shouldUnregister?O.keepDefaultValues?Nt(o):{}:Nt(N),m.array.next({values:{...N}}),m.values.next({values:{...N}})}a={mount:new Set,unMount:new Set,array:new Set,watch:new Set,watchAll:!1,focus:""},!l.mount&&t(),l.mount=!f.isValid||!!O.keepIsValid,l.watch=!!e.shouldUnregister,m.state.next({submitCount:O.keepSubmitCount?r.submitCount:0,isDirty:O.keepDirty?r.isDirty:!!(O.keepDefaultValues&&!ar(S,o)),isSubmitted:O.keepIsSubmitted?r.isSubmitted:!1,dirtyFields:O.keepDirtyValues?r.dirtyFields:O.keepDefaultValues&&S?Nl(o,S):{},touchedFields:O.keepTouched?r.touchedFields:{},errors:O.keepErrors?r.errors:{},isSubmitSuccessful:O.keepIsSubmitSuccessful?r.isSubmitSuccessful:!1,isSubmitting:!1})},le=(S,O)=>ne($n(S)?S(s):S,O);return{control:{register:yt,unregister:Se,getFieldState:Oe,handleSubmit:ie,setError:Ue,_executeSchema:T,_getWatch:q,_getDirty:D,_updateValid:h,_removeUnmounted:A,_updateFieldArray:b,_updateDisabledField:et,_getFieldArray:ee,_reset:ne,_resetDefaultValues:()=>$n(n.defaultValues)&&n.defaultValues().then(S=>{le(S,n.resetOptions),m.state.next({isLoading:!1})}),_updateFormState:S=>{r={...r,...S}},_disableForm:B,_subjects:m,_proxyFormState:f,get _fields(){return i},get _formValues(){return s},get _state(){return l},set _state(S){l=S},get _defaultValues(){return o},get _names(){return a},set _names(S){a=S},get _formState(){return r},set _formState(S){r=S},get _options(){return n},set _options(S){n={...n,...S}}},trigger:de,register:yt,handleSubmit:ie,watch:me,setValue:z,getValues:re,reset:le,resetField:se,clearErrors:be,unregister:Se,setError:Ue,setFocus:(S,O={})=>{const C=U(i,S),$=C&&C._f;if($){const N=$.refs?$.refs[0]:$.ref;N.focus&&(N.focus(),O.shouldSelect&&N.select())}},getFieldState:Oe}}function CE(e={}){const t=Ce.useRef(),n=Ce.useRef(),[r,i]=Ce.useState({isDirty:!1,isValidating:!1,isLoading:$n(e.defaultValues),isSubmitted:!1,isSubmitting:!1,isSubmitSuccessful:!1,isValid:!1,submitCount:0,dirtyFields:{},touchedFields:{},errors:{},disabled:!1,defaultValues:$n(e.defaultValues)?void 0:e.defaultValues});t.current||(t.current={...jE(e,()=>i(s=>({...s}))),formState:r});const o=t.current.control;return o._options=e,vd({subject:o._subjects.state,next:s=>{ox(s,o._proxyFormState,o._updateFormState,!0)&&i({...o._formState})}}),Ce.useEffect(()=>o._disableForm(e.disabled),[o,e.disabled]),Ce.useEffect(()=>{if(o._proxyFormState.isDirty){const s=o._getDirty();s!==r.isDirty&&o._subjects.state.next({isDirty:s})}},[o,r.isDirty]),Ce.useEffect(()=>{e.values&&!ar(e.values,n.current)?(o._reset(e.values,o._options.resetOptions),n.current=e.values):o._resetDefaultValues()},[e.values,o]),Ce.useEffect(()=>{o._state.mount||(o._updateValid(),o._state.mount=!0),o._state.watch&&(o._state.watch=!1,o._subjects.state.next({...o._formState})),o._removeUnmounted()}),t.current.formState=ix(r,o),t.current}const EE={control:(e,t)=>{const n=t.selectProps.errors;return{...e,display:"flex",width:"668px",height:"56px",marginTop:"8px",padding:"0px 16px",alignItems:"center",flexShrink:"0",alignSelf:"stretch",borderRadius:"16px",outline:"none",border:`1px solid ${n?"var(--secondary-red)":"transparent"}`,backgroundColor:"var(--background-white)",boxShadow:"0px 0px 8px 0px rgba(27, 54, 65, 0.08)","&:hover":{boxShadow:"0px 0px 16px 0px rgba(27, 54, 65, 0.16)"},"&:focus":{outline:"none",border:"1px solid var(--typography-grey)",background:"var(--background-white)",boxShadow:"0px 0px 8px 0px rgba(27, 54, 65, 0.08)"}}},dropdownIndicator:e=>({...e,color:"#062136"}),indicatorSeparator:()=>({color:"red"}),option:e=>({...e,display:"flex",alignItems:"flex-start",fontWeight:"400",backgroundColor:"var(--background-white)",color:"#1B3641","&:hover":{backgroundColor:"rgba(27, 54, 65, 0.2)",borderRadius:"16px",fontWeight:"600"}}),menu:e=>({...e,height:"auto",marginTop:"0",border:"none",borderRadius:"16px",boxShadow:"0px 0px 8px 0px rgba(27, 54, 65, 0.08)",color:"var(--primary-bluedark)",backgroundColor:"var(--background-white)"}),singleValue:e=>({...e,fontSize:"16px",fontWeight:"400",color:"var(--primary-bluedark)"})},OE=()=>{const[e,t]=OC("key",{name:"",email:"",phone:"",service:"",comment:""}),{name:n,email:r,phone:i,service:o,comment:s}=e,l=zp.find(p=>p.value===o),{register:a,handleSubmit:c,control:d,setValue:f,formState:{errors:m},reset:y}=CE({mode:"all",shouldFocusError:!1,defaultValues:{}});M.useEffect(()=>{const p=JSON.stringify(e);localStorage.setItem("key",p)},[e]);const g=p=>{f("service",(p==null?void 0:p.value)||""),t({...e,service:(p==null?void 0:p.value)||""})},v=p=>{t({...e,[p.target.name]:p.target.value})},w=async p=>{try{const h={...p,phone:p.phone.replace(/\D/g,"").slice(2)};await Ik.post("https://healthy-management.onrender.com/api/senddata",h),console.log(h),t({name:"",email:"",phone:"",service:"",comment:""}),y(),alert("Заявка відправлена!")}catch{alert("Помилка при відправці заявки")}};return u.jsx("section",{className:"container",id:"contact",children:u.jsxs(GC,{children:[u.jsx(XC,{children:"Контакт"}),u.jsxs(qC,{children:[u.jsxs("div",{children:[u.jsx(oe,{minWidth:1920,children:u.jsx(Qp,{srcSet:`${_C} 2x, ${Vp} 1x`,sizes:"(min-width: 1920px) 100vw",src:Vp,alt:"notebook",loading:"lazy"})}),u.jsx(oe,{minWidth:300,maxWidth:1919,children:u.jsx(Qp,{srcSet:`${Np} 375w, ${PC} 2x`,sizes:"(min-width: 375px) 375px",src:Np,alt:"notebook"})})]}),u.jsxs(JC,{children:[u.jsx(ZC,{children:"Залишайте контактні дані і ми з вами зв'яжемось"}),u.jsxs(eE,{onSubmit:c(w),children:[u.jsxs(Yp,{children:["Ім’я",u.jsx(nE,{}),u.jsx(Kp,{type:"text",placeholder:"Введіть своє ім’я",...a("name",{required:"Це поле обов'язкове для заповнення",pattern:{value:/^(?:[a-zA-Zа-яА-ЯґҐєЄіІїЇ'-]{1,32}(?:\s+[a-zA-Zа-яА-ЯґҐєЄіІїЇ'-]{1,32})?|[a-zA-Zа-яА-ЯґҐєЄіІїЇ'-]{1,64})$/,message:"Поле повинно містити одне або два слова"}}),value:n,onChange:v,errors:m.name}),m.name&&u.jsxs(wi,{children:[u.jsx(cn,{}),m.name.message]})]}),u.jsxs(rE,{children:[u.jsxs(Gp,{children:["Емейл",u.jsx(cn,{}),u.jsx(Kp,{type:"email",placeholder:"Введіть емейл",...a("email",{required:"Це поле обов'язкове для заповнення",pattern:{value:/[a-z0-9._%+-]+@[a-z0-9.-]+\.[a-z]{2,4}$/,message:"Введіть коректний емейл"}}),value:r,onChange:v,errors:m.email}),m.email&&u.jsxs(wi,{children:[u.jsx(cn,{}),m.email.message]})]}),u.jsxs(Gp,{children:["Номер телефону",u.jsx(cn,{}),u.jsx(iE,{type:"tel",mask:"+38(099)999-99-99",placeholder:"Введіть номер телефону",...a("phone",{required:"Це поле обов'язкове для заповнення",pattern:{value:/^\+\d{2}\(\d{3}\)\d{3}-\d{2}-\d{2}$/,message:"Введіть коректний номер телефона"}}),value:i,onChange:v,errors:m.phone}),m.phone&&u.jsxs(wi,{children:[u.jsx(cn,{}),m.phone.message]})]})]}),u.jsxs(Yp,{children:["Послуга",u.jsx(cn,{}),u.jsx(pE,{name:"service",control:d,shouldUnregister:!1,render:({field:p})=>u.jsx(EC,{...a("service",{required:"Оберіть послугу"}),placeholder:"Оберіть послугу",...p,options:zp,styles:EE,errors:m.service,onChange:g,value:l})}),m.service&&u.jsxs(wi,{children:[u.jsx(cn,{}),m.service.message]})]}),u.jsxs(tE,{children:["Повідомлення",u.jsx(oE,{name:"comment",placeholder:"Введіть ваше повідомлення",...a("comment",{pattern:{value:/^.{0,500}$/,message:"Максимальна довжина повідомлення 500 символів"}}),value:s,onChange:v,errors:m.comment}),m.comment&&u.jsxs(wi,{children:[u.jsx(cn,{}),m.comment.message]})]}),u.jsx(sE,{type:"submit",children:"Надіслати"})]})]})]})]})})},_E=j.section`
  padding-top: 40px;
  padding-bottom: 40px;

  @media screen and (min-width: 1920px) {
    padding-top: 80px;
    padding-bottom: 80px;
  }
`,PE=j.div`
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
`,TE=j.h2`
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
`,ME=j.p`
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
`,RE=j.span`
  color: var(--primary-yellow);
  font-size: 15px;
  line-height: 22px;

  @media screen and (min-width: 1920px) {
    font-size: 20px;
    font-weight: 500;
    line-height: 28px;
  }
`,IE=j.ul`
  display: flex;
  gap: 24px;
  flex-direction: column;
  margin-bottom: 24px;

  @media screen and (min-width: 1920px) {
    flex-direction: row;
    margin-bottom: 0;
  }
`,DE=j.li`
  position: relative;
  background: var(--background-white);
  padding: 24px;
  border-radius: 16px;

  @media screen and (min-width: 1920px) {
    width: calc((100% - (24px * 3)) / 4);
    padding: 40px;
  }
`,LE=j.div`
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
`,AE=j.a`
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
`,FE="/healthy-management-project/assets/icon-WQbGU7FW.svg",zE="/healthy-management-project/assets/icon-2-FNpGPcjZ.svg",VE="/healthy-management-project/assets/icon-3-GZg06_37.svg",NE="/healthy-management-project/assets/icon-4-9BBn0thK.svg",Ul=[{title:"Менторство та консультації",about:["Для власників та менеджерів з питань менеджменту та розвитку, медичного маркетингу та комунікацій, з питань програм управління здоров'ям","Стейхолдерам та парнерам з питань медичного менеджменту та маркетингу"],path:FE},{title:"Діагностика",about:["Аудит бізнес-процесів","Аудит маркетингу та сервісу","Аудит системи комунікацій та Сustomer Journey Map"],path:zE},{title:"Стратегії",about:["Проведення стратегічних сесій","Розробка стратегії розвитку та маркетингу ","Розробка стратегій внутрішніх комунікацій","Розробка стратегій управління здоров'ям"],path:VE},{title:"Навчання",about:["Медичний маркетинг","Комунікації та сервіс"],path:NE}],$E=()=>u.jsx(_E,{className:"container",id:"services",children:u.jsxs(PE,{children:[u.jsx(TE,{children:"Послуги"}),u.jsxs(ME,{children:["Будуємо ефективні ",u.jsx(RE,{children:"стратегії здорового менеджменту"})," для бізнесів. Розвивайте свій бізнес за допомогою ефективних стратегій здорового менеджменту."]}),u.jsx(IE,{children:Ul==null?void 0:Ul.map(e=>u.jsxs(DE,{children:[u.jsx(nd,{title:e.title,about:e.about,additionalComment:!0}),u.jsx(LE,{children:u.jsx("img",{src:e.path,alt:e.path})})]},e.title))}),u.jsx(AE,{href:"#contact",children:"Замовити консультацію"})]})});function UE(){const e=(t,n)=>{n.preventDefault();const r=document.getElementById(t);if(r){const i=r.getBoundingClientRect(),o=window.pageYOffset||document.documentElement.scrollTop;let s;const l=window.innerWidth;l<=768&&(s=i.top+o-80),(l>768||l<=1440)&&(s=i.top+o-80),l>1440||l<=1920?s=i.top+o-80:s=i.top+o-60,window.scrollTo({top:s,behavior:"smooth"}),setTimeout(()=>{n.target.blur()},1e3)}};return M.useEffect(()=>{fetch("https://healthy-management.onrender.com/api/wakeup")},[]),u.jsxs(u.Fragment,{children:[u.jsx(Wg,{handleSetActiveLink:e}),u.jsxs("main",{children:[u.jsx($b,{}),u.jsx(_w,{}),u.jsx(mw,{}),u.jsx(Qb,{}),u.jsx(pS,{}),u.jsx($E,{}),u.jsx(g2,{}),u.jsx(x2,{}),u.jsx(w2,{}),u.jsx(X2,{}),u.jsx(Lw,{}),u.jsx(OE,{})]}),u.jsx($g,{handleSetActiveLink:e}),u.jsx(mS,{})]})}Wl.createRoot(document.getElementById("root")).render(u.jsx(Ce.StrictMode,{children:u.jsx(UE,{})}));
