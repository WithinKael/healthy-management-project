function mm(e,t){for(var n=0;n<t.length;n++){const r=t[n];if(typeof r!="string"&&!Array.isArray(r)){for(const i in r)if(i!=="default"&&!(i in e)){const o=Object.getOwnPropertyDescriptor(r,i);o&&Object.defineProperty(e,i,o.get?o:{enumerable:!0,get:()=>r[i]})}}}return Object.freeze(Object.defineProperty(e,Symbol.toStringTag,{value:"Module"}))}(function(){const t=document.createElement("link").relList;if(t&&t.supports&&t.supports("modulepreload"))return;for(const i of document.querySelectorAll('link[rel="modulepreload"]'))r(i);new MutationObserver(i=>{for(const o of i)if(o.type==="childList")for(const s of o.addedNodes)s.tagName==="LINK"&&s.rel==="modulepreload"&&r(s)}).observe(document,{childList:!0,subtree:!0});function n(i){const o={};return i.integrity&&(o.integrity=i.integrity),i.referrerPolicy&&(o.referrerPolicy=i.referrerPolicy),i.crossOrigin==="use-credentials"?o.credentials="include":i.crossOrigin==="anonymous"?o.credentials="omit":o.credentials="same-origin",o}function r(i){if(i.ep)return;i.ep=!0;const o=n(i);fetch(i.href,o)}})();var gm=typeof globalThis<"u"?globalThis:typeof window<"u"?window:typeof global<"u"?global:typeof self<"u"?self:{};function Na(e){return e&&e.__esModule&&Object.prototype.hasOwnProperty.call(e,"default")?e.default:e}var Vd={exports:{}},ms={},Wd={exports:{}},te={};/**
 * @license React
 * react.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */var Li=Symbol.for("react.element"),ym=Symbol.for("react.portal"),vm=Symbol.for("react.fragment"),xm=Symbol.for("react.strict_mode"),wm=Symbol.for("react.profiler"),km=Symbol.for("react.provider"),Sm=Symbol.for("react.context"),jm=Symbol.for("react.forward_ref"),Em=Symbol.for("react.suspense"),_m=Symbol.for("react.memo"),Cm=Symbol.for("react.lazy"),Hu=Symbol.iterator;function bm(e){return e===null||typeof e!="object"?null:(e=Hu&&e[Hu]||e["@@iterator"],typeof e=="function"?e:null)}var Hd={isMounted:function(){return!1},enqueueForceUpdate:function(){},enqueueReplaceState:function(){},enqueueSetState:function(){}},Qd=Object.assign,Yd={};function Nr(e,t,n){this.props=e,this.context=t,this.refs=Yd,this.updater=n||Hd}Nr.prototype.isReactComponent={};Nr.prototype.setState=function(e,t){if(typeof e!="object"&&typeof e!="function"&&e!=null)throw Error("setState(...): takes an object of state variables to update or a function which returns an object of state variables.");this.updater.enqueueSetState(this,e,t,"setState")};Nr.prototype.forceUpdate=function(e){this.updater.enqueueForceUpdate(this,e,"forceUpdate")};function Kd(){}Kd.prototype=Nr.prototype;function La(e,t,n){this.props=e,this.context=t,this.refs=Yd,this.updater=n||Hd}var za=La.prototype=new Kd;za.constructor=La;Qd(za,Nr.prototype);za.isPureReactComponent=!0;var Qu=Array.isArray,Xd=Object.prototype.hasOwnProperty,Da={current:null},Gd={key:!0,ref:!0,__self:!0,__source:!0};function Jd(e,t,n){var r,i={},o=null,s=null;if(t!=null)for(r in t.ref!==void 0&&(s=t.ref),t.key!==void 0&&(o=""+t.key),t)Xd.call(t,r)&&!Gd.hasOwnProperty(r)&&(i[r]=t[r]);var a=arguments.length-2;if(a===1)i.children=n;else if(1<a){for(var u=Array(a),c=0;c<a;c++)u[c]=arguments[c+2];i.children=u}if(e&&e.defaultProps)for(r in a=e.defaultProps,a)i[r]===void 0&&(i[r]=a[r]);return{$$typeof:Li,type:e,key:o,ref:s,props:i,_owner:Da.current}}function Tm(e,t){return{$$typeof:Li,type:e.type,key:t,ref:e.ref,props:e.props,_owner:e._owner}}function Fa(e){return typeof e=="object"&&e!==null&&e.$$typeof===Li}function Pm(e){var t={"=":"=0",":":"=2"};return"$"+e.replace(/[=:]/g,function(n){return t[n]})}var Yu=/\/+/g;function Bs(e,t){return typeof e=="object"&&e!==null&&e.key!=null?Pm(""+e.key):t.toString(36)}function vo(e,t,n,r,i){var o=typeof e;(o==="undefined"||o==="boolean")&&(e=null);var s=!1;if(e===null)s=!0;else switch(o){case"string":case"number":s=!0;break;case"object":switch(e.$$typeof){case Li:case ym:s=!0}}if(s)return s=e,i=i(s),e=r===""?"."+Bs(s,0):r,Qu(i)?(n="",e!=null&&(n=e.replace(Yu,"$&/")+"/"),vo(i,t,n,"",function(c){return c})):i!=null&&(Fa(i)&&(i=Tm(i,n+(!i.key||s&&s.key===i.key?"":(""+i.key).replace(Yu,"$&/")+"/")+e)),t.push(i)),1;if(s=0,r=r===""?".":r+":",Qu(e))for(var a=0;a<e.length;a++){o=e[a];var u=r+Bs(o,a);s+=vo(o,t,n,u,i)}else if(u=bm(e),typeof u=="function")for(e=u.call(e),a=0;!(o=e.next()).done;)o=o.value,u=r+Bs(o,a++),s+=vo(o,t,n,u,i);else if(o==="object")throw t=String(e),Error("Objects are not valid as a React child (found: "+(t==="[object Object]"?"object with keys {"+Object.keys(e).join(", ")+"}":t)+"). If you meant to render a collection of children, use an array instead.");return s}function Qi(e,t,n){if(e==null)return e;var r=[],i=0;return vo(e,r,"","",function(o){return t.call(n,o,i++)}),r}function Om(e){if(e._status===-1){var t=e._result;t=t(),t.then(function(n){(e._status===0||e._status===-1)&&(e._status=1,e._result=n)},function(n){(e._status===0||e._status===-1)&&(e._status=2,e._result=n)}),e._status===-1&&(e._status=0,e._result=t)}if(e._status===1)return e._result.default;throw e._result}var qe={current:null},xo={transition:null},Rm={ReactCurrentDispatcher:qe,ReactCurrentBatchConfig:xo,ReactCurrentOwner:Da};te.Children={map:Qi,forEach:function(e,t,n){Qi(e,function(){t.apply(this,arguments)},n)},count:function(e){var t=0;return Qi(e,function(){t++}),t},toArray:function(e){return Qi(e,function(t){return t})||[]},only:function(e){if(!Fa(e))throw Error("React.Children.only expected to receive a single React element child.");return e}};te.Component=Nr;te.Fragment=vm;te.Profiler=wm;te.PureComponent=La;te.StrictMode=xm;te.Suspense=Em;te.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED=Rm;te.cloneElement=function(e,t,n){if(e==null)throw Error("React.cloneElement(...): The argument must be a React element, but you passed "+e+".");var r=Qd({},e.props),i=e.key,o=e.ref,s=e._owner;if(t!=null){if(t.ref!==void 0&&(o=t.ref,s=Da.current),t.key!==void 0&&(i=""+t.key),e.type&&e.type.defaultProps)var a=e.type.defaultProps;for(u in t)Xd.call(t,u)&&!Gd.hasOwnProperty(u)&&(r[u]=t[u]===void 0&&a!==void 0?a[u]:t[u])}var u=arguments.length-2;if(u===1)r.children=n;else if(1<u){a=Array(u);for(var c=0;c<u;c++)a[c]=arguments[c+2];r.children=a}return{$$typeof:Li,type:e.type,key:i,ref:o,props:r,_owner:s}};te.createContext=function(e){return e={$$typeof:Sm,_currentValue:e,_currentValue2:e,_threadCount:0,Provider:null,Consumer:null,_defaultValue:null,_globalName:null},e.Provider={$$typeof:km,_context:e},e.Consumer=e};te.createElement=Jd;te.createFactory=function(e){var t=Jd.bind(null,e);return t.type=e,t};te.createRef=function(){return{current:null}};te.forwardRef=function(e){return{$$typeof:jm,render:e}};te.isValidElement=Fa;te.lazy=function(e){return{$$typeof:Cm,_payload:{_status:-1,_result:e},_init:Om}};te.memo=function(e,t){return{$$typeof:_m,type:e,compare:t===void 0?null:t}};te.startTransition=function(e){var t=xo.transition;xo.transition={};try{e()}finally{xo.transition=t}};te.unstable_act=function(){throw Error("act(...) is not supported in production builds of React.")};te.useCallback=function(e,t){return qe.current.useCallback(e,t)};te.useContext=function(e){return qe.current.useContext(e)};te.useDebugValue=function(){};te.useDeferredValue=function(e){return qe.current.useDeferredValue(e)};te.useEffect=function(e,t){return qe.current.useEffect(e,t)};te.useId=function(){return qe.current.useId()};te.useImperativeHandle=function(e,t,n){return qe.current.useImperativeHandle(e,t,n)};te.useInsertionEffect=function(e,t){return qe.current.useInsertionEffect(e,t)};te.useLayoutEffect=function(e,t){return qe.current.useLayoutEffect(e,t)};te.useMemo=function(e,t){return qe.current.useMemo(e,t)};te.useReducer=function(e,t,n){return qe.current.useReducer(e,t,n)};te.useRef=function(e){return qe.current.useRef(e)};te.useState=function(e){return qe.current.useState(e)};te.useSyncExternalStore=function(e,t,n){return qe.current.useSyncExternalStore(e,t,n)};te.useTransition=function(){return qe.current.useTransition()};te.version="18.2.0";Wd.exports=te;var ue=Wd.exports;const ht=Na(ue),Ku=mm({__proto__:null,default:ht},[ue]);/**
 * @license React
 * react-jsx-runtime.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */var Mm=ue,Am=Symbol.for("react.element"),Nm=Symbol.for("react.fragment"),Lm=Object.prototype.hasOwnProperty,zm=Mm.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED.ReactCurrentOwner,Dm={key:!0,ref:!0,__self:!0,__source:!0};function qd(e,t,n){var r,i={},o=null,s=null;n!==void 0&&(o=""+n),t.key!==void 0&&(o=""+t.key),t.ref!==void 0&&(s=t.ref);for(r in t)Lm.call(t,r)&&!Dm.hasOwnProperty(r)&&(i[r]=t[r]);if(e&&e.defaultProps)for(r in t=e.defaultProps,t)i[r]===void 0&&(i[r]=t[r]);return{$$typeof:Am,type:e,key:o,ref:s,props:i,_owner:zm.current}}ms.Fragment=Nm;ms.jsx=qd;ms.jsxs=qd;Vd.exports=ms;var l=Vd.exports,Al={},Zd={exports:{}},dt={},ef={exports:{}},tf={};/**
 * @license React
 * scheduler.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */(function(e){function t(I,H){var Y=I.length;I.push(H);e:for(;0<Y;){var ae=Y-1>>>1,me=I[ae];if(0<i(me,H))I[ae]=H,I[Y]=me,Y=ae;else break e}}function n(I){return I.length===0?null:I[0]}function r(I){if(I.length===0)return null;var H=I[0],Y=I.pop();if(Y!==H){I[0]=Y;e:for(var ae=0,me=I.length,St=me>>>1;ae<St;){var Ve=2*(ae+1)-1,At=I[Ve],Ce=Ve+1,De=I[Ce];if(0>i(At,Y))Ce<me&&0>i(De,At)?(I[ae]=De,I[Ce]=Y,ae=Ce):(I[ae]=At,I[Ve]=Y,ae=Ve);else if(Ce<me&&0>i(De,Y))I[ae]=De,I[Ce]=Y,ae=Ce;else break e}}return H}function i(I,H){var Y=I.sortIndex-H.sortIndex;return Y!==0?Y:I.id-H.id}if(typeof performance=="object"&&typeof performance.now=="function"){var o=performance;e.unstable_now=function(){return o.now()}}else{var s=Date,a=s.now();e.unstable_now=function(){return s.now()-a}}var u=[],c=[],m=1,f=null,h=3,w=!1,y=!1,v=!1,b=typeof setTimeout=="function"?setTimeout:null,p=typeof clearTimeout=="function"?clearTimeout:null,d=typeof setImmediate<"u"?setImmediate:null;typeof navigator<"u"&&navigator.scheduling!==void 0&&navigator.scheduling.isInputPending!==void 0&&navigator.scheduling.isInputPending.bind(navigator.scheduling);function g(I){for(var H=n(c);H!==null;){if(H.callback===null)r(c);else if(H.startTime<=I)r(c),H.sortIndex=H.expirationTime,t(u,H);else break;H=n(c)}}function k(I){if(v=!1,g(I),!y)if(n(u)!==null)y=!0,fe(_);else{var H=n(c);H!==null&&Ne(k,H.startTime-I)}}function _(I,H){y=!1,v&&(v=!1,p(N),N=-1),w=!0;var Y=h;try{for(g(H),f=n(u);f!==null&&(!(f.expirationTime>H)||I&&!W());){var ae=f.callback;if(typeof ae=="function"){f.callback=null,h=f.priorityLevel;var me=ae(f.expirationTime<=H);H=e.unstable_now(),typeof me=="function"?f.callback=me:f===n(u)&&r(u),g(H)}else r(u);f=n(u)}if(f!==null)var St=!0;else{var Ve=n(c);Ve!==null&&Ne(k,Ve.startTime-H),St=!1}return St}finally{f=null,h=Y,w=!1}}var P=!1,C=null,N=-1,O=5,L=-1;function W(){return!(e.unstable_now()-L<O)}function $(){if(C!==null){var I=e.unstable_now();L=I;var H=!0;try{H=C(!0,I)}finally{H?D():(P=!1,C=null)}}else P=!1}var D;if(typeof d=="function")D=function(){d($)};else if(typeof MessageChannel<"u"){var G=new MessageChannel,ce=G.port2;G.port1.onmessage=$,D=function(){ce.postMessage(null)}}else D=function(){b($,0)};function fe(I){C=I,P||(P=!0,D())}function Ne(I,H){N=b(function(){I(e.unstable_now())},H)}e.unstable_IdlePriority=5,e.unstable_ImmediatePriority=1,e.unstable_LowPriority=4,e.unstable_NormalPriority=3,e.unstable_Profiling=null,e.unstable_UserBlockingPriority=2,e.unstable_cancelCallback=function(I){I.callback=null},e.unstable_continueExecution=function(){y||w||(y=!0,fe(_))},e.unstable_forceFrameRate=function(I){0>I||125<I?console.error("forceFrameRate takes a positive int between 0 and 125, forcing frame rates higher than 125 fps is not supported"):O=0<I?Math.floor(1e3/I):5},e.unstable_getCurrentPriorityLevel=function(){return h},e.unstable_getFirstCallbackNode=function(){return n(u)},e.unstable_next=function(I){switch(h){case 1:case 2:case 3:var H=3;break;default:H=h}var Y=h;h=H;try{return I()}finally{h=Y}},e.unstable_pauseExecution=function(){},e.unstable_requestPaint=function(){},e.unstable_runWithPriority=function(I,H){switch(I){case 1:case 2:case 3:case 4:case 5:break;default:I=3}var Y=h;h=I;try{return H()}finally{h=Y}},e.unstable_scheduleCallback=function(I,H,Y){var ae=e.unstable_now();switch(typeof Y=="object"&&Y!==null?(Y=Y.delay,Y=typeof Y=="number"&&0<Y?ae+Y:ae):Y=ae,I){case 1:var me=-1;break;case 2:me=250;break;case 5:me=1073741823;break;case 4:me=1e4;break;default:me=5e3}return me=Y+me,I={id:m++,callback:H,priorityLevel:I,startTime:Y,expirationTime:me,sortIndex:-1},Y>ae?(I.sortIndex=Y,t(c,I),n(u)===null&&I===n(c)&&(v?(p(N),N=-1):v=!0,Ne(k,Y-ae))):(I.sortIndex=me,t(u,I),y||w||(y=!0,fe(_))),I},e.unstable_shouldYield=W,e.unstable_wrapCallback=function(I){var H=h;return function(){var Y=h;h=H;try{return I.apply(this,arguments)}finally{h=Y}}}})(tf);ef.exports=tf;var Fm=ef.exports;/**
 * @license React
 * react-dom.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */var nf=ue,ct=Fm;function R(e){for(var t="https://reactjs.org/docs/error-decoder.html?invariant="+e,n=1;n<arguments.length;n++)t+="&args[]="+encodeURIComponent(arguments[n]);return"Minified React error #"+e+"; visit "+t+" for the full message or use the non-minified dev environment for full errors and additional helpful warnings."}var rf=new Set,pi={};function Gn(e,t){_r(e,t),_r(e+"Capture",t)}function _r(e,t){for(pi[e]=t,e=0;e<t.length;e++)rf.add(t[e])}var en=!(typeof window>"u"||typeof window.document>"u"||typeof window.document.createElement>"u"),Nl=Object.prototype.hasOwnProperty,Im=/^[:A-Z_a-z\u00C0-\u00D6\u00D8-\u00F6\u00F8-\u02FF\u0370-\u037D\u037F-\u1FFF\u200C-\u200D\u2070-\u218F\u2C00-\u2FEF\u3001-\uD7FF\uF900-\uFDCF\uFDF0-\uFFFD][:A-Z_a-z\u00C0-\u00D6\u00D8-\u00F6\u00F8-\u02FF\u0370-\u037D\u037F-\u1FFF\u200C-\u200D\u2070-\u218F\u2C00-\u2FEF\u3001-\uD7FF\uF900-\uFDCF\uFDF0-\uFFFD\-.0-9\u00B7\u0300-\u036F\u203F-\u2040]*$/,Xu={},Gu={};function $m(e){return Nl.call(Gu,e)?!0:Nl.call(Xu,e)?!1:Im.test(e)?Gu[e]=!0:(Xu[e]=!0,!1)}function Um(e,t,n,r){if(n!==null&&n.type===0)return!1;switch(typeof t){case"function":case"symbol":return!0;case"boolean":return r?!1:n!==null?!n.acceptsBooleans:(e=e.toLowerCase().slice(0,5),e!=="data-"&&e!=="aria-");default:return!1}}function Bm(e,t,n,r){if(t===null||typeof t>"u"||Um(e,t,n,r))return!0;if(r)return!1;if(n!==null)switch(n.type){case 3:return!t;case 4:return t===!1;case 5:return isNaN(t);case 6:return isNaN(t)||1>t}return!1}function Ze(e,t,n,r,i,o,s){this.acceptsBooleans=t===2||t===3||t===4,this.attributeName=r,this.attributeNamespace=i,this.mustUseProperty=n,this.propertyName=e,this.type=t,this.sanitizeURL=o,this.removeEmptyString=s}var Be={};"children dangerouslySetInnerHTML defaultValue defaultChecked innerHTML suppressContentEditableWarning suppressHydrationWarning style".split(" ").forEach(function(e){Be[e]=new Ze(e,0,!1,e,null,!1,!1)});[["acceptCharset","accept-charset"],["className","class"],["htmlFor","for"],["httpEquiv","http-equiv"]].forEach(function(e){var t=e[0];Be[t]=new Ze(t,1,!1,e[1],null,!1,!1)});["contentEditable","draggable","spellCheck","value"].forEach(function(e){Be[e]=new Ze(e,2,!1,e.toLowerCase(),null,!1,!1)});["autoReverse","externalResourcesRequired","focusable","preserveAlpha"].forEach(function(e){Be[e]=new Ze(e,2,!1,e,null,!1,!1)});"allowFullScreen async autoFocus autoPlay controls default defer disabled disablePictureInPicture disableRemotePlayback formNoValidate hidden loop noModule noValidate open playsInline readOnly required reversed scoped seamless itemScope".split(" ").forEach(function(e){Be[e]=new Ze(e,3,!1,e.toLowerCase(),null,!1,!1)});["checked","multiple","muted","selected"].forEach(function(e){Be[e]=new Ze(e,3,!0,e,null,!1,!1)});["capture","download"].forEach(function(e){Be[e]=new Ze(e,4,!1,e,null,!1,!1)});["cols","rows","size","span"].forEach(function(e){Be[e]=new Ze(e,6,!1,e,null,!1,!1)});["rowSpan","start"].forEach(function(e){Be[e]=new Ze(e,5,!1,e.toLowerCase(),null,!1,!1)});var Ia=/[\-:]([a-z])/g;function $a(e){return e[1].toUpperCase()}"accent-height alignment-baseline arabic-form baseline-shift cap-height clip-path clip-rule color-interpolation color-interpolation-filters color-profile color-rendering dominant-baseline enable-background fill-opacity fill-rule flood-color flood-opacity font-family font-size font-size-adjust font-stretch font-style font-variant font-weight glyph-name glyph-orientation-horizontal glyph-orientation-vertical horiz-adv-x horiz-origin-x image-rendering letter-spacing lighting-color marker-end marker-mid marker-start overline-position overline-thickness paint-order panose-1 pointer-events rendering-intent shape-rendering stop-color stop-opacity strikethrough-position strikethrough-thickness stroke-dasharray stroke-dashoffset stroke-linecap stroke-linejoin stroke-miterlimit stroke-opacity stroke-width text-anchor text-decoration text-rendering underline-position underline-thickness unicode-bidi unicode-range units-per-em v-alphabetic v-hanging v-ideographic v-mathematical vector-effect vert-adv-y vert-origin-x vert-origin-y word-spacing writing-mode xmlns:xlink x-height".split(" ").forEach(function(e){var t=e.replace(Ia,$a);Be[t]=new Ze(t,1,!1,e,null,!1,!1)});"xlink:actuate xlink:arcrole xlink:role xlink:show xlink:title xlink:type".split(" ").forEach(function(e){var t=e.replace(Ia,$a);Be[t]=new Ze(t,1,!1,e,"http://www.w3.org/1999/xlink",!1,!1)});["xml:base","xml:lang","xml:space"].forEach(function(e){var t=e.replace(Ia,$a);Be[t]=new Ze(t,1,!1,e,"http://www.w3.org/XML/1998/namespace",!1,!1)});["tabIndex","crossOrigin"].forEach(function(e){Be[e]=new Ze(e,1,!1,e.toLowerCase(),null,!1,!1)});Be.xlinkHref=new Ze("xlinkHref",1,!1,"xlink:href","http://www.w3.org/1999/xlink",!0,!1);["src","href","action","formAction"].forEach(function(e){Be[e]=new Ze(e,1,!1,e.toLowerCase(),null,!0,!0)});function Ua(e,t,n,r){var i=Be.hasOwnProperty(t)?Be[t]:null;(i!==null?i.type!==0:r||!(2<t.length)||t[0]!=="o"&&t[0]!=="O"||t[1]!=="n"&&t[1]!=="N")&&(Bm(t,n,i,r)&&(n=null),r||i===null?$m(t)&&(n===null?e.removeAttribute(t):e.setAttribute(t,""+n)):i.mustUseProperty?e[i.propertyName]=n===null?i.type===3?!1:"":n:(t=i.attributeName,r=i.attributeNamespace,n===null?e.removeAttribute(t):(i=i.type,n=i===3||i===4&&n===!0?"":""+n,r?e.setAttributeNS(r,t,n):e.setAttribute(t,n))))}var on=nf.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED,Yi=Symbol.for("react.element"),ir=Symbol.for("react.portal"),or=Symbol.for("react.fragment"),Ba=Symbol.for("react.strict_mode"),Ll=Symbol.for("react.profiler"),of=Symbol.for("react.provider"),sf=Symbol.for("react.context"),Va=Symbol.for("react.forward_ref"),zl=Symbol.for("react.suspense"),Dl=Symbol.for("react.suspense_list"),Wa=Symbol.for("react.memo"),hn=Symbol.for("react.lazy"),lf=Symbol.for("react.offscreen"),Ju=Symbol.iterator;function Ir(e){return e===null||typeof e!="object"?null:(e=Ju&&e[Ju]||e["@@iterator"],typeof e=="function"?e:null)}var Se=Object.assign,Vs;function ei(e){if(Vs===void 0)try{throw Error()}catch(n){var t=n.stack.trim().match(/\n( *(at )?)/);Vs=t&&t[1]||""}return`
`+Vs+e}var Ws=!1;function Hs(e,t){if(!e||Ws)return"";Ws=!0;var n=Error.prepareStackTrace;Error.prepareStackTrace=void 0;try{if(t)if(t=function(){throw Error()},Object.defineProperty(t.prototype,"props",{set:function(){throw Error()}}),typeof Reflect=="object"&&Reflect.construct){try{Reflect.construct(t,[])}catch(c){var r=c}Reflect.construct(e,[],t)}else{try{t.call()}catch(c){r=c}e.call(t.prototype)}else{try{throw Error()}catch(c){r=c}e()}}catch(c){if(c&&r&&typeof c.stack=="string"){for(var i=c.stack.split(`
`),o=r.stack.split(`
`),s=i.length-1,a=o.length-1;1<=s&&0<=a&&i[s]!==o[a];)a--;for(;1<=s&&0<=a;s--,a--)if(i[s]!==o[a]){if(s!==1||a!==1)do if(s--,a--,0>a||i[s]!==o[a]){var u=`
`+i[s].replace(" at new "," at ");return e.displayName&&u.includes("<anonymous>")&&(u=u.replace("<anonymous>",e.displayName)),u}while(1<=s&&0<=a);break}}}finally{Ws=!1,Error.prepareStackTrace=n}return(e=e?e.displayName||e.name:"")?ei(e):""}function Vm(e){switch(e.tag){case 5:return ei(e.type);case 16:return ei("Lazy");case 13:return ei("Suspense");case 19:return ei("SuspenseList");case 0:case 2:case 15:return e=Hs(e.type,!1),e;case 11:return e=Hs(e.type.render,!1),e;case 1:return e=Hs(e.type,!0),e;default:return""}}function Fl(e){if(e==null)return null;if(typeof e=="function")return e.displayName||e.name||null;if(typeof e=="string")return e;switch(e){case or:return"Fragment";case ir:return"Portal";case Ll:return"Profiler";case Ba:return"StrictMode";case zl:return"Suspense";case Dl:return"SuspenseList"}if(typeof e=="object")switch(e.$$typeof){case sf:return(e.displayName||"Context")+".Consumer";case of:return(e._context.displayName||"Context")+".Provider";case Va:var t=e.render;return e=e.displayName,e||(e=t.displayName||t.name||"",e=e!==""?"ForwardRef("+e+")":"ForwardRef"),e;case Wa:return t=e.displayName||null,t!==null?t:Fl(e.type)||"Memo";case hn:t=e._payload,e=e._init;try{return Fl(e(t))}catch{}}return null}function Wm(e){var t=e.type;switch(e.tag){case 24:return"Cache";case 9:return(t.displayName||"Context")+".Consumer";case 10:return(t._context.displayName||"Context")+".Provider";case 18:return"DehydratedFragment";case 11:return e=t.render,e=e.displayName||e.name||"",t.displayName||(e!==""?"ForwardRef("+e+")":"ForwardRef");case 7:return"Fragment";case 5:return t;case 4:return"Portal";case 3:return"Root";case 6:return"Text";case 16:return Fl(t);case 8:return t===Ba?"StrictMode":"Mode";case 22:return"Offscreen";case 12:return"Profiler";case 21:return"Scope";case 13:return"Suspense";case 19:return"SuspenseList";case 25:return"TracingMarker";case 1:case 0:case 17:case 2:case 14:case 15:if(typeof t=="function")return t.displayName||t.name||null;if(typeof t=="string")return t}return null}function On(e){switch(typeof e){case"boolean":case"number":case"string":case"undefined":return e;case"object":return e;default:return""}}function af(e){var t=e.type;return(e=e.nodeName)&&e.toLowerCase()==="input"&&(t==="checkbox"||t==="radio")}function Hm(e){var t=af(e)?"checked":"value",n=Object.getOwnPropertyDescriptor(e.constructor.prototype,t),r=""+e[t];if(!e.hasOwnProperty(t)&&typeof n<"u"&&typeof n.get=="function"&&typeof n.set=="function"){var i=n.get,o=n.set;return Object.defineProperty(e,t,{configurable:!0,get:function(){return i.call(this)},set:function(s){r=""+s,o.call(this,s)}}),Object.defineProperty(e,t,{enumerable:n.enumerable}),{getValue:function(){return r},setValue:function(s){r=""+s},stopTracking:function(){e._valueTracker=null,delete e[t]}}}}function Ki(e){e._valueTracker||(e._valueTracker=Hm(e))}function uf(e){if(!e)return!1;var t=e._valueTracker;if(!t)return!0;var n=t.getValue(),r="";return e&&(r=af(e)?e.checked?"true":"false":e.value),e=r,e!==n?(t.setValue(e),!0):!1}function Fo(e){if(e=e||(typeof document<"u"?document:void 0),typeof e>"u")return null;try{return e.activeElement||e.body}catch{return e.body}}function Il(e,t){var n=t.checked;return Se({},t,{defaultChecked:void 0,defaultValue:void 0,value:void 0,checked:n??e._wrapperState.initialChecked})}function qu(e,t){var n=t.defaultValue==null?"":t.defaultValue,r=t.checked!=null?t.checked:t.defaultChecked;n=On(t.value!=null?t.value:n),e._wrapperState={initialChecked:r,initialValue:n,controlled:t.type==="checkbox"||t.type==="radio"?t.checked!=null:t.value!=null}}function cf(e,t){t=t.checked,t!=null&&Ua(e,"checked",t,!1)}function $l(e,t){cf(e,t);var n=On(t.value),r=t.type;if(n!=null)r==="number"?(n===0&&e.value===""||e.value!=n)&&(e.value=""+n):e.value!==""+n&&(e.value=""+n);else if(r==="submit"||r==="reset"){e.removeAttribute("value");return}t.hasOwnProperty("value")?Ul(e,t.type,n):t.hasOwnProperty("defaultValue")&&Ul(e,t.type,On(t.defaultValue)),t.checked==null&&t.defaultChecked!=null&&(e.defaultChecked=!!t.defaultChecked)}function Zu(e,t,n){if(t.hasOwnProperty("value")||t.hasOwnProperty("defaultValue")){var r=t.type;if(!(r!=="submit"&&r!=="reset"||t.value!==void 0&&t.value!==null))return;t=""+e._wrapperState.initialValue,n||t===e.value||(e.value=t),e.defaultValue=t}n=e.name,n!==""&&(e.name=""),e.defaultChecked=!!e._wrapperState.initialChecked,n!==""&&(e.name=n)}function Ul(e,t,n){(t!=="number"||Fo(e.ownerDocument)!==e)&&(n==null?e.defaultValue=""+e._wrapperState.initialValue:e.defaultValue!==""+n&&(e.defaultValue=""+n))}var ti=Array.isArray;function vr(e,t,n,r){if(e=e.options,t){t={};for(var i=0;i<n.length;i++)t["$"+n[i]]=!0;for(n=0;n<e.length;n++)i=t.hasOwnProperty("$"+e[n].value),e[n].selected!==i&&(e[n].selected=i),i&&r&&(e[n].defaultSelected=!0)}else{for(n=""+On(n),t=null,i=0;i<e.length;i++){if(e[i].value===n){e[i].selected=!0,r&&(e[i].defaultSelected=!0);return}t!==null||e[i].disabled||(t=e[i])}t!==null&&(t.selected=!0)}}function Bl(e,t){if(t.dangerouslySetInnerHTML!=null)throw Error(R(91));return Se({},t,{value:void 0,defaultValue:void 0,children:""+e._wrapperState.initialValue})}function ec(e,t){var n=t.value;if(n==null){if(n=t.children,t=t.defaultValue,n!=null){if(t!=null)throw Error(R(92));if(ti(n)){if(1<n.length)throw Error(R(93));n=n[0]}t=n}t==null&&(t=""),n=t}e._wrapperState={initialValue:On(n)}}function df(e,t){var n=On(t.value),r=On(t.defaultValue);n!=null&&(n=""+n,n!==e.value&&(e.value=n),t.defaultValue==null&&e.defaultValue!==n&&(e.defaultValue=n)),r!=null&&(e.defaultValue=""+r)}function tc(e){var t=e.textContent;t===e._wrapperState.initialValue&&t!==""&&t!==null&&(e.value=t)}function ff(e){switch(e){case"svg":return"http://www.w3.org/2000/svg";case"math":return"http://www.w3.org/1998/Math/MathML";default:return"http://www.w3.org/1999/xhtml"}}function Vl(e,t){return e==null||e==="http://www.w3.org/1999/xhtml"?ff(t):e==="http://www.w3.org/2000/svg"&&t==="foreignObject"?"http://www.w3.org/1999/xhtml":e}var Xi,pf=function(e){return typeof MSApp<"u"&&MSApp.execUnsafeLocalFunction?function(t,n,r,i){MSApp.execUnsafeLocalFunction(function(){return e(t,n,r,i)})}:e}(function(e,t){if(e.namespaceURI!=="http://www.w3.org/2000/svg"||"innerHTML"in e)e.innerHTML=t;else{for(Xi=Xi||document.createElement("div"),Xi.innerHTML="<svg>"+t.valueOf().toString()+"</svg>",t=Xi.firstChild;e.firstChild;)e.removeChild(e.firstChild);for(;t.firstChild;)e.appendChild(t.firstChild)}});function hi(e,t){if(t){var n=e.firstChild;if(n&&n===e.lastChild&&n.nodeType===3){n.nodeValue=t;return}}e.textContent=t}var ii={animationIterationCount:!0,aspectRatio:!0,borderImageOutset:!0,borderImageSlice:!0,borderImageWidth:!0,boxFlex:!0,boxFlexGroup:!0,boxOrdinalGroup:!0,columnCount:!0,columns:!0,flex:!0,flexGrow:!0,flexPositive:!0,flexShrink:!0,flexNegative:!0,flexOrder:!0,gridArea:!0,gridRow:!0,gridRowEnd:!0,gridRowSpan:!0,gridRowStart:!0,gridColumn:!0,gridColumnEnd:!0,gridColumnSpan:!0,gridColumnStart:!0,fontWeight:!0,lineClamp:!0,lineHeight:!0,opacity:!0,order:!0,orphans:!0,tabSize:!0,widows:!0,zIndex:!0,zoom:!0,fillOpacity:!0,floodOpacity:!0,stopOpacity:!0,strokeDasharray:!0,strokeDashoffset:!0,strokeMiterlimit:!0,strokeOpacity:!0,strokeWidth:!0},Qm=["Webkit","ms","Moz","O"];Object.keys(ii).forEach(function(e){Qm.forEach(function(t){t=t+e.charAt(0).toUpperCase()+e.substring(1),ii[t]=ii[e]})});function hf(e,t,n){return t==null||typeof t=="boolean"||t===""?"":n||typeof t!="number"||t===0||ii.hasOwnProperty(e)&&ii[e]?(""+t).trim():t+"px"}function mf(e,t){e=e.style;for(var n in t)if(t.hasOwnProperty(n)){var r=n.indexOf("--")===0,i=hf(n,t[n],r);n==="float"&&(n="cssFloat"),r?e.setProperty(n,i):e[n]=i}}var Ym=Se({menuitem:!0},{area:!0,base:!0,br:!0,col:!0,embed:!0,hr:!0,img:!0,input:!0,keygen:!0,link:!0,meta:!0,param:!0,source:!0,track:!0,wbr:!0});function Wl(e,t){if(t){if(Ym[e]&&(t.children!=null||t.dangerouslySetInnerHTML!=null))throw Error(R(137,e));if(t.dangerouslySetInnerHTML!=null){if(t.children!=null)throw Error(R(60));if(typeof t.dangerouslySetInnerHTML!="object"||!("__html"in t.dangerouslySetInnerHTML))throw Error(R(61))}if(t.style!=null&&typeof t.style!="object")throw Error(R(62))}}function Hl(e,t){if(e.indexOf("-")===-1)return typeof t.is=="string";switch(e){case"annotation-xml":case"color-profile":case"font-face":case"font-face-src":case"font-face-uri":case"font-face-format":case"font-face-name":case"missing-glyph":return!1;default:return!0}}var Ql=null;function Ha(e){return e=e.target||e.srcElement||window,e.correspondingUseElement&&(e=e.correspondingUseElement),e.nodeType===3?e.parentNode:e}var Yl=null,xr=null,wr=null;function nc(e){if(e=Fi(e)){if(typeof Yl!="function")throw Error(R(280));var t=e.stateNode;t&&(t=ws(t),Yl(e.stateNode,e.type,t))}}function gf(e){xr?wr?wr.push(e):wr=[e]:xr=e}function yf(){if(xr){var e=xr,t=wr;if(wr=xr=null,nc(e),t)for(e=0;e<t.length;e++)nc(t[e])}}function vf(e,t){return e(t)}function xf(){}var Qs=!1;function wf(e,t,n){if(Qs)return e(t,n);Qs=!0;try{return vf(e,t,n)}finally{Qs=!1,(xr!==null||wr!==null)&&(xf(),yf())}}function mi(e,t){var n=e.stateNode;if(n===null)return null;var r=ws(n);if(r===null)return null;n=r[t];e:switch(t){case"onClick":case"onClickCapture":case"onDoubleClick":case"onDoubleClickCapture":case"onMouseDown":case"onMouseDownCapture":case"onMouseMove":case"onMouseMoveCapture":case"onMouseUp":case"onMouseUpCapture":case"onMouseEnter":(r=!r.disabled)||(e=e.type,r=!(e==="button"||e==="input"||e==="select"||e==="textarea")),e=!r;break e;default:e=!1}if(e)return null;if(n&&typeof n!="function")throw Error(R(231,t,typeof n));return n}var Kl=!1;if(en)try{var $r={};Object.defineProperty($r,"passive",{get:function(){Kl=!0}}),window.addEventListener("test",$r,$r),window.removeEventListener("test",$r,$r)}catch{Kl=!1}function Km(e,t,n,r,i,o,s,a,u){var c=Array.prototype.slice.call(arguments,3);try{t.apply(n,c)}catch(m){this.onError(m)}}var oi=!1,Io=null,$o=!1,Xl=null,Xm={onError:function(e){oi=!0,Io=e}};function Gm(e,t,n,r,i,o,s,a,u){oi=!1,Io=null,Km.apply(Xm,arguments)}function Jm(e,t,n,r,i,o,s,a,u){if(Gm.apply(this,arguments),oi){if(oi){var c=Io;oi=!1,Io=null}else throw Error(R(198));$o||($o=!0,Xl=c)}}function Jn(e){var t=e,n=e;if(e.alternate)for(;t.return;)t=t.return;else{e=t;do t=e,t.flags&4098&&(n=t.return),e=t.return;while(e)}return t.tag===3?n:null}function kf(e){if(e.tag===13){var t=e.memoizedState;if(t===null&&(e=e.alternate,e!==null&&(t=e.memoizedState)),t!==null)return t.dehydrated}return null}function rc(e){if(Jn(e)!==e)throw Error(R(188))}function qm(e){var t=e.alternate;if(!t){if(t=Jn(e),t===null)throw Error(R(188));return t!==e?null:e}for(var n=e,r=t;;){var i=n.return;if(i===null)break;var o=i.alternate;if(o===null){if(r=i.return,r!==null){n=r;continue}break}if(i.child===o.child){for(o=i.child;o;){if(o===n)return rc(i),e;if(o===r)return rc(i),t;o=o.sibling}throw Error(R(188))}if(n.return!==r.return)n=i,r=o;else{for(var s=!1,a=i.child;a;){if(a===n){s=!0,n=i,r=o;break}if(a===r){s=!0,r=i,n=o;break}a=a.sibling}if(!s){for(a=o.child;a;){if(a===n){s=!0,n=o,r=i;break}if(a===r){s=!0,r=o,n=i;break}a=a.sibling}if(!s)throw Error(R(189))}}if(n.alternate!==r)throw Error(R(190))}if(n.tag!==3)throw Error(R(188));return n.stateNode.current===n?e:t}function Sf(e){return e=qm(e),e!==null?jf(e):null}function jf(e){if(e.tag===5||e.tag===6)return e;for(e=e.child;e!==null;){var t=jf(e);if(t!==null)return t;e=e.sibling}return null}var Ef=ct.unstable_scheduleCallback,ic=ct.unstable_cancelCallback,Zm=ct.unstable_shouldYield,eg=ct.unstable_requestPaint,_e=ct.unstable_now,tg=ct.unstable_getCurrentPriorityLevel,Qa=ct.unstable_ImmediatePriority,_f=ct.unstable_UserBlockingPriority,Uo=ct.unstable_NormalPriority,ng=ct.unstable_LowPriority,Cf=ct.unstable_IdlePriority,gs=null,Bt=null;function rg(e){if(Bt&&typeof Bt.onCommitFiberRoot=="function")try{Bt.onCommitFiberRoot(gs,e,void 0,(e.current.flags&128)===128)}catch{}}var Ot=Math.clz32?Math.clz32:sg,ig=Math.log,og=Math.LN2;function sg(e){return e>>>=0,e===0?32:31-(ig(e)/og|0)|0}var Gi=64,Ji=4194304;function ni(e){switch(e&-e){case 1:return 1;case 2:return 2;case 4:return 4;case 8:return 8;case 16:return 16;case 32:return 32;case 64:case 128:case 256:case 512:case 1024:case 2048:case 4096:case 8192:case 16384:case 32768:case 65536:case 131072:case 262144:case 524288:case 1048576:case 2097152:return e&4194240;case 4194304:case 8388608:case 16777216:case 33554432:case 67108864:return e&130023424;case 134217728:return 134217728;case 268435456:return 268435456;case 536870912:return 536870912;case 1073741824:return 1073741824;default:return e}}function Bo(e,t){var n=e.pendingLanes;if(n===0)return 0;var r=0,i=e.suspendedLanes,o=e.pingedLanes,s=n&268435455;if(s!==0){var a=s&~i;a!==0?r=ni(a):(o&=s,o!==0&&(r=ni(o)))}else s=n&~i,s!==0?r=ni(s):o!==0&&(r=ni(o));if(r===0)return 0;if(t!==0&&t!==r&&!(t&i)&&(i=r&-r,o=t&-t,i>=o||i===16&&(o&4194240)!==0))return t;if(r&4&&(r|=n&16),t=e.entangledLanes,t!==0)for(e=e.entanglements,t&=r;0<t;)n=31-Ot(t),i=1<<n,r|=e[n],t&=~i;return r}function lg(e,t){switch(e){case 1:case 2:case 4:return t+250;case 8:case 16:case 32:case 64:case 128:case 256:case 512:case 1024:case 2048:case 4096:case 8192:case 16384:case 32768:case 65536:case 131072:case 262144:case 524288:case 1048576:case 2097152:return t+5e3;case 4194304:case 8388608:case 16777216:case 33554432:case 67108864:return-1;case 134217728:case 268435456:case 536870912:case 1073741824:return-1;default:return-1}}function ag(e,t){for(var n=e.suspendedLanes,r=e.pingedLanes,i=e.expirationTimes,o=e.pendingLanes;0<o;){var s=31-Ot(o),a=1<<s,u=i[s];u===-1?(!(a&n)||a&r)&&(i[s]=lg(a,t)):u<=t&&(e.expiredLanes|=a),o&=~a}}function Gl(e){return e=e.pendingLanes&-1073741825,e!==0?e:e&1073741824?1073741824:0}function bf(){var e=Gi;return Gi<<=1,!(Gi&4194240)&&(Gi=64),e}function Ys(e){for(var t=[],n=0;31>n;n++)t.push(e);return t}function zi(e,t,n){e.pendingLanes|=t,t!==536870912&&(e.suspendedLanes=0,e.pingedLanes=0),e=e.eventTimes,t=31-Ot(t),e[t]=n}function ug(e,t){var n=e.pendingLanes&~t;e.pendingLanes=t,e.suspendedLanes=0,e.pingedLanes=0,e.expiredLanes&=t,e.mutableReadLanes&=t,e.entangledLanes&=t,t=e.entanglements;var r=e.eventTimes;for(e=e.expirationTimes;0<n;){var i=31-Ot(n),o=1<<i;t[i]=0,r[i]=-1,e[i]=-1,n&=~o}}function Ya(e,t){var n=e.entangledLanes|=t;for(e=e.entanglements;n;){var r=31-Ot(n),i=1<<r;i&t|e[r]&t&&(e[r]|=t),n&=~i}}var de=0;function Tf(e){return e&=-e,1<e?4<e?e&268435455?16:536870912:4:1}var Pf,Ka,Of,Rf,Mf,Jl=!1,qi=[],Sn=null,jn=null,En=null,gi=new Map,yi=new Map,gn=[],cg="mousedown mouseup touchcancel touchend touchstart auxclick dblclick pointercancel pointerdown pointerup dragend dragstart drop compositionend compositionstart keydown keypress keyup input textInput copy cut paste click change contextmenu reset submit".split(" ");function oc(e,t){switch(e){case"focusin":case"focusout":Sn=null;break;case"dragenter":case"dragleave":jn=null;break;case"mouseover":case"mouseout":En=null;break;case"pointerover":case"pointerout":gi.delete(t.pointerId);break;case"gotpointercapture":case"lostpointercapture":yi.delete(t.pointerId)}}function Ur(e,t,n,r,i,o){return e===null||e.nativeEvent!==o?(e={blockedOn:t,domEventName:n,eventSystemFlags:r,nativeEvent:o,targetContainers:[i]},t!==null&&(t=Fi(t),t!==null&&Ka(t)),e):(e.eventSystemFlags|=r,t=e.targetContainers,i!==null&&t.indexOf(i)===-1&&t.push(i),e)}function dg(e,t,n,r,i){switch(t){case"focusin":return Sn=Ur(Sn,e,t,n,r,i),!0;case"dragenter":return jn=Ur(jn,e,t,n,r,i),!0;case"mouseover":return En=Ur(En,e,t,n,r,i),!0;case"pointerover":var o=i.pointerId;return gi.set(o,Ur(gi.get(o)||null,e,t,n,r,i)),!0;case"gotpointercapture":return o=i.pointerId,yi.set(o,Ur(yi.get(o)||null,e,t,n,r,i)),!0}return!1}function Af(e){var t=Fn(e.target);if(t!==null){var n=Jn(t);if(n!==null){if(t=n.tag,t===13){if(t=kf(n),t!==null){e.blockedOn=t,Mf(e.priority,function(){Of(n)});return}}else if(t===3&&n.stateNode.current.memoizedState.isDehydrated){e.blockedOn=n.tag===3?n.stateNode.containerInfo:null;return}}}e.blockedOn=null}function wo(e){if(e.blockedOn!==null)return!1;for(var t=e.targetContainers;0<t.length;){var n=ql(e.domEventName,e.eventSystemFlags,t[0],e.nativeEvent);if(n===null){n=e.nativeEvent;var r=new n.constructor(n.type,n);Ql=r,n.target.dispatchEvent(r),Ql=null}else return t=Fi(n),t!==null&&Ka(t),e.blockedOn=n,!1;t.shift()}return!0}function sc(e,t,n){wo(e)&&n.delete(t)}function fg(){Jl=!1,Sn!==null&&wo(Sn)&&(Sn=null),jn!==null&&wo(jn)&&(jn=null),En!==null&&wo(En)&&(En=null),gi.forEach(sc),yi.forEach(sc)}function Br(e,t){e.blockedOn===t&&(e.blockedOn=null,Jl||(Jl=!0,ct.unstable_scheduleCallback(ct.unstable_NormalPriority,fg)))}function vi(e){function t(i){return Br(i,e)}if(0<qi.length){Br(qi[0],e);for(var n=1;n<qi.length;n++){var r=qi[n];r.blockedOn===e&&(r.blockedOn=null)}}for(Sn!==null&&Br(Sn,e),jn!==null&&Br(jn,e),En!==null&&Br(En,e),gi.forEach(t),yi.forEach(t),n=0;n<gn.length;n++)r=gn[n],r.blockedOn===e&&(r.blockedOn=null);for(;0<gn.length&&(n=gn[0],n.blockedOn===null);)Af(n),n.blockedOn===null&&gn.shift()}var kr=on.ReactCurrentBatchConfig,Vo=!0;function pg(e,t,n,r){var i=de,o=kr.transition;kr.transition=null;try{de=1,Xa(e,t,n,r)}finally{de=i,kr.transition=o}}function hg(e,t,n,r){var i=de,o=kr.transition;kr.transition=null;try{de=4,Xa(e,t,n,r)}finally{de=i,kr.transition=o}}function Xa(e,t,n,r){if(Vo){var i=ql(e,t,n,r);if(i===null)rl(e,t,r,Wo,n),oc(e,r);else if(dg(i,e,t,n,r))r.stopPropagation();else if(oc(e,r),t&4&&-1<cg.indexOf(e)){for(;i!==null;){var o=Fi(i);if(o!==null&&Pf(o),o=ql(e,t,n,r),o===null&&rl(e,t,r,Wo,n),o===i)break;i=o}i!==null&&r.stopPropagation()}else rl(e,t,r,null,n)}}var Wo=null;function ql(e,t,n,r){if(Wo=null,e=Ha(r),e=Fn(e),e!==null)if(t=Jn(e),t===null)e=null;else if(n=t.tag,n===13){if(e=kf(t),e!==null)return e;e=null}else if(n===3){if(t.stateNode.current.memoizedState.isDehydrated)return t.tag===3?t.stateNode.containerInfo:null;e=null}else t!==e&&(e=null);return Wo=e,null}function Nf(e){switch(e){case"cancel":case"click":case"close":case"contextmenu":case"copy":case"cut":case"auxclick":case"dblclick":case"dragend":case"dragstart":case"drop":case"focusin":case"focusout":case"input":case"invalid":case"keydown":case"keypress":case"keyup":case"mousedown":case"mouseup":case"paste":case"pause":case"play":case"pointercancel":case"pointerdown":case"pointerup":case"ratechange":case"reset":case"resize":case"seeked":case"submit":case"touchcancel":case"touchend":case"touchstart":case"volumechange":case"change":case"selectionchange":case"textInput":case"compositionstart":case"compositionend":case"compositionupdate":case"beforeblur":case"afterblur":case"beforeinput":case"blur":case"fullscreenchange":case"focus":case"hashchange":case"popstate":case"select":case"selectstart":return 1;case"drag":case"dragenter":case"dragexit":case"dragleave":case"dragover":case"mousemove":case"mouseout":case"mouseover":case"pointermove":case"pointerout":case"pointerover":case"scroll":case"toggle":case"touchmove":case"wheel":case"mouseenter":case"mouseleave":case"pointerenter":case"pointerleave":return 4;case"message":switch(tg()){case Qa:return 1;case _f:return 4;case Uo:case ng:return 16;case Cf:return 536870912;default:return 16}default:return 16}}var xn=null,Ga=null,ko=null;function Lf(){if(ko)return ko;var e,t=Ga,n=t.length,r,i="value"in xn?xn.value:xn.textContent,o=i.length;for(e=0;e<n&&t[e]===i[e];e++);var s=n-e;for(r=1;r<=s&&t[n-r]===i[o-r];r++);return ko=i.slice(e,1<r?1-r:void 0)}function So(e){var t=e.keyCode;return"charCode"in e?(e=e.charCode,e===0&&t===13&&(e=13)):e=t,e===10&&(e=13),32<=e||e===13?e:0}function Zi(){return!0}function lc(){return!1}function ft(e){function t(n,r,i,o,s){this._reactName=n,this._targetInst=i,this.type=r,this.nativeEvent=o,this.target=s,this.currentTarget=null;for(var a in e)e.hasOwnProperty(a)&&(n=e[a],this[a]=n?n(o):o[a]);return this.isDefaultPrevented=(o.defaultPrevented!=null?o.defaultPrevented:o.returnValue===!1)?Zi:lc,this.isPropagationStopped=lc,this}return Se(t.prototype,{preventDefault:function(){this.defaultPrevented=!0;var n=this.nativeEvent;n&&(n.preventDefault?n.preventDefault():typeof n.returnValue!="unknown"&&(n.returnValue=!1),this.isDefaultPrevented=Zi)},stopPropagation:function(){var n=this.nativeEvent;n&&(n.stopPropagation?n.stopPropagation():typeof n.cancelBubble!="unknown"&&(n.cancelBubble=!0),this.isPropagationStopped=Zi)},persist:function(){},isPersistent:Zi}),t}var Lr={eventPhase:0,bubbles:0,cancelable:0,timeStamp:function(e){return e.timeStamp||Date.now()},defaultPrevented:0,isTrusted:0},Ja=ft(Lr),Di=Se({},Lr,{view:0,detail:0}),mg=ft(Di),Ks,Xs,Vr,ys=Se({},Di,{screenX:0,screenY:0,clientX:0,clientY:0,pageX:0,pageY:0,ctrlKey:0,shiftKey:0,altKey:0,metaKey:0,getModifierState:qa,button:0,buttons:0,relatedTarget:function(e){return e.relatedTarget===void 0?e.fromElement===e.srcElement?e.toElement:e.fromElement:e.relatedTarget},movementX:function(e){return"movementX"in e?e.movementX:(e!==Vr&&(Vr&&e.type==="mousemove"?(Ks=e.screenX-Vr.screenX,Xs=e.screenY-Vr.screenY):Xs=Ks=0,Vr=e),Ks)},movementY:function(e){return"movementY"in e?e.movementY:Xs}}),ac=ft(ys),gg=Se({},ys,{dataTransfer:0}),yg=ft(gg),vg=Se({},Di,{relatedTarget:0}),Gs=ft(vg),xg=Se({},Lr,{animationName:0,elapsedTime:0,pseudoElement:0}),wg=ft(xg),kg=Se({},Lr,{clipboardData:function(e){return"clipboardData"in e?e.clipboardData:window.clipboardData}}),Sg=ft(kg),jg=Se({},Lr,{data:0}),uc=ft(jg),Eg={Esc:"Escape",Spacebar:" ",Left:"ArrowLeft",Up:"ArrowUp",Right:"ArrowRight",Down:"ArrowDown",Del:"Delete",Win:"OS",Menu:"ContextMenu",Apps:"ContextMenu",Scroll:"ScrollLock",MozPrintableKey:"Unidentified"},_g={8:"Backspace",9:"Tab",12:"Clear",13:"Enter",16:"Shift",17:"Control",18:"Alt",19:"Pause",20:"CapsLock",27:"Escape",32:" ",33:"PageUp",34:"PageDown",35:"End",36:"Home",37:"ArrowLeft",38:"ArrowUp",39:"ArrowRight",40:"ArrowDown",45:"Insert",46:"Delete",112:"F1",113:"F2",114:"F3",115:"F4",116:"F5",117:"F6",118:"F7",119:"F8",120:"F9",121:"F10",122:"F11",123:"F12",144:"NumLock",145:"ScrollLock",224:"Meta"},Cg={Alt:"altKey",Control:"ctrlKey",Meta:"metaKey",Shift:"shiftKey"};function bg(e){var t=this.nativeEvent;return t.getModifierState?t.getModifierState(e):(e=Cg[e])?!!t[e]:!1}function qa(){return bg}var Tg=Se({},Di,{key:function(e){if(e.key){var t=Eg[e.key]||e.key;if(t!=="Unidentified")return t}return e.type==="keypress"?(e=So(e),e===13?"Enter":String.fromCharCode(e)):e.type==="keydown"||e.type==="keyup"?_g[e.keyCode]||"Unidentified":""},code:0,location:0,ctrlKey:0,shiftKey:0,altKey:0,metaKey:0,repeat:0,locale:0,getModifierState:qa,charCode:function(e){return e.type==="keypress"?So(e):0},keyCode:function(e){return e.type==="keydown"||e.type==="keyup"?e.keyCode:0},which:function(e){return e.type==="keypress"?So(e):e.type==="keydown"||e.type==="keyup"?e.keyCode:0}}),Pg=ft(Tg),Og=Se({},ys,{pointerId:0,width:0,height:0,pressure:0,tangentialPressure:0,tiltX:0,tiltY:0,twist:0,pointerType:0,isPrimary:0}),cc=ft(Og),Rg=Se({},Di,{touches:0,targetTouches:0,changedTouches:0,altKey:0,metaKey:0,ctrlKey:0,shiftKey:0,getModifierState:qa}),Mg=ft(Rg),Ag=Se({},Lr,{propertyName:0,elapsedTime:0,pseudoElement:0}),Ng=ft(Ag),Lg=Se({},ys,{deltaX:function(e){return"deltaX"in e?e.deltaX:"wheelDeltaX"in e?-e.wheelDeltaX:0},deltaY:function(e){return"deltaY"in e?e.deltaY:"wheelDeltaY"in e?-e.wheelDeltaY:"wheelDelta"in e?-e.wheelDelta:0},deltaZ:0,deltaMode:0}),zg=ft(Lg),Dg=[9,13,27,32],Za=en&&"CompositionEvent"in window,si=null;en&&"documentMode"in document&&(si=document.documentMode);var Fg=en&&"TextEvent"in window&&!si,zf=en&&(!Za||si&&8<si&&11>=si),dc=" ",fc=!1;function Df(e,t){switch(e){case"keyup":return Dg.indexOf(t.keyCode)!==-1;case"keydown":return t.keyCode!==229;case"keypress":case"mousedown":case"focusout":return!0;default:return!1}}function Ff(e){return e=e.detail,typeof e=="object"&&"data"in e?e.data:null}var sr=!1;function Ig(e,t){switch(e){case"compositionend":return Ff(t);case"keypress":return t.which!==32?null:(fc=!0,dc);case"textInput":return e=t.data,e===dc&&fc?null:e;default:return null}}function $g(e,t){if(sr)return e==="compositionend"||!Za&&Df(e,t)?(e=Lf(),ko=Ga=xn=null,sr=!1,e):null;switch(e){case"paste":return null;case"keypress":if(!(t.ctrlKey||t.altKey||t.metaKey)||t.ctrlKey&&t.altKey){if(t.char&&1<t.char.length)return t.char;if(t.which)return String.fromCharCode(t.which)}return null;case"compositionend":return zf&&t.locale!=="ko"?null:t.data;default:return null}}var Ug={color:!0,date:!0,datetime:!0,"datetime-local":!0,email:!0,month:!0,number:!0,password:!0,range:!0,search:!0,tel:!0,text:!0,time:!0,url:!0,week:!0};function pc(e){var t=e&&e.nodeName&&e.nodeName.toLowerCase();return t==="input"?!!Ug[e.type]:t==="textarea"}function If(e,t,n,r){gf(r),t=Ho(t,"onChange"),0<t.length&&(n=new Ja("onChange","change",null,n,r),e.push({event:n,listeners:t}))}var li=null,xi=null;function Bg(e){Gf(e,0)}function vs(e){var t=ur(e);if(uf(t))return e}function Vg(e,t){if(e==="change")return t}var $f=!1;if(en){var Js;if(en){var qs="oninput"in document;if(!qs){var hc=document.createElement("div");hc.setAttribute("oninput","return;"),qs=typeof hc.oninput=="function"}Js=qs}else Js=!1;$f=Js&&(!document.documentMode||9<document.documentMode)}function mc(){li&&(li.detachEvent("onpropertychange",Uf),xi=li=null)}function Uf(e){if(e.propertyName==="value"&&vs(xi)){var t=[];If(t,xi,e,Ha(e)),wf(Bg,t)}}function Wg(e,t,n){e==="focusin"?(mc(),li=t,xi=n,li.attachEvent("onpropertychange",Uf)):e==="focusout"&&mc()}function Hg(e){if(e==="selectionchange"||e==="keyup"||e==="keydown")return vs(xi)}function Qg(e,t){if(e==="click")return vs(t)}function Yg(e,t){if(e==="input"||e==="change")return vs(t)}function Kg(e,t){return e===t&&(e!==0||1/e===1/t)||e!==e&&t!==t}var Mt=typeof Object.is=="function"?Object.is:Kg;function wi(e,t){if(Mt(e,t))return!0;if(typeof e!="object"||e===null||typeof t!="object"||t===null)return!1;var n=Object.keys(e),r=Object.keys(t);if(n.length!==r.length)return!1;for(r=0;r<n.length;r++){var i=n[r];if(!Nl.call(t,i)||!Mt(e[i],t[i]))return!1}return!0}function gc(e){for(;e&&e.firstChild;)e=e.firstChild;return e}function yc(e,t){var n=gc(e);e=0;for(var r;n;){if(n.nodeType===3){if(r=e+n.textContent.length,e<=t&&r>=t)return{node:n,offset:t-e};e=r}e:{for(;n;){if(n.nextSibling){n=n.nextSibling;break e}n=n.parentNode}n=void 0}n=gc(n)}}function Bf(e,t){return e&&t?e===t?!0:e&&e.nodeType===3?!1:t&&t.nodeType===3?Bf(e,t.parentNode):"contains"in e?e.contains(t):e.compareDocumentPosition?!!(e.compareDocumentPosition(t)&16):!1:!1}function Vf(){for(var e=window,t=Fo();t instanceof e.HTMLIFrameElement;){try{var n=typeof t.contentWindow.location.href=="string"}catch{n=!1}if(n)e=t.contentWindow;else break;t=Fo(e.document)}return t}function eu(e){var t=e&&e.nodeName&&e.nodeName.toLowerCase();return t&&(t==="input"&&(e.type==="text"||e.type==="search"||e.type==="tel"||e.type==="url"||e.type==="password")||t==="textarea"||e.contentEditable==="true")}function Xg(e){var t=Vf(),n=e.focusedElem,r=e.selectionRange;if(t!==n&&n&&n.ownerDocument&&Bf(n.ownerDocument.documentElement,n)){if(r!==null&&eu(n)){if(t=r.start,e=r.end,e===void 0&&(e=t),"selectionStart"in n)n.selectionStart=t,n.selectionEnd=Math.min(e,n.value.length);else if(e=(t=n.ownerDocument||document)&&t.defaultView||window,e.getSelection){e=e.getSelection();var i=n.textContent.length,o=Math.min(r.start,i);r=r.end===void 0?o:Math.min(r.end,i),!e.extend&&o>r&&(i=r,r=o,o=i),i=yc(n,o);var s=yc(n,r);i&&s&&(e.rangeCount!==1||e.anchorNode!==i.node||e.anchorOffset!==i.offset||e.focusNode!==s.node||e.focusOffset!==s.offset)&&(t=t.createRange(),t.setStart(i.node,i.offset),e.removeAllRanges(),o>r?(e.addRange(t),e.extend(s.node,s.offset)):(t.setEnd(s.node,s.offset),e.addRange(t)))}}for(t=[],e=n;e=e.parentNode;)e.nodeType===1&&t.push({element:e,left:e.scrollLeft,top:e.scrollTop});for(typeof n.focus=="function"&&n.focus(),n=0;n<t.length;n++)e=t[n],e.element.scrollLeft=e.left,e.element.scrollTop=e.top}}var Gg=en&&"documentMode"in document&&11>=document.documentMode,lr=null,Zl=null,ai=null,ea=!1;function vc(e,t,n){var r=n.window===n?n.document:n.nodeType===9?n:n.ownerDocument;ea||lr==null||lr!==Fo(r)||(r=lr,"selectionStart"in r&&eu(r)?r={start:r.selectionStart,end:r.selectionEnd}:(r=(r.ownerDocument&&r.ownerDocument.defaultView||window).getSelection(),r={anchorNode:r.anchorNode,anchorOffset:r.anchorOffset,focusNode:r.focusNode,focusOffset:r.focusOffset}),ai&&wi(ai,r)||(ai=r,r=Ho(Zl,"onSelect"),0<r.length&&(t=new Ja("onSelect","select",null,t,n),e.push({event:t,listeners:r}),t.target=lr)))}function eo(e,t){var n={};return n[e.toLowerCase()]=t.toLowerCase(),n["Webkit"+e]="webkit"+t,n["Moz"+e]="moz"+t,n}var ar={animationend:eo("Animation","AnimationEnd"),animationiteration:eo("Animation","AnimationIteration"),animationstart:eo("Animation","AnimationStart"),transitionend:eo("Transition","TransitionEnd")},Zs={},Wf={};en&&(Wf=document.createElement("div").style,"AnimationEvent"in window||(delete ar.animationend.animation,delete ar.animationiteration.animation,delete ar.animationstart.animation),"TransitionEvent"in window||delete ar.transitionend.transition);function xs(e){if(Zs[e])return Zs[e];if(!ar[e])return e;var t=ar[e],n;for(n in t)if(t.hasOwnProperty(n)&&n in Wf)return Zs[e]=t[n];return e}var Hf=xs("animationend"),Qf=xs("animationiteration"),Yf=xs("animationstart"),Kf=xs("transitionend"),Xf=new Map,xc="abort auxClick cancel canPlay canPlayThrough click close contextMenu copy cut drag dragEnd dragEnter dragExit dragLeave dragOver dragStart drop durationChange emptied encrypted ended error gotPointerCapture input invalid keyDown keyPress keyUp load loadedData loadedMetadata loadStart lostPointerCapture mouseDown mouseMove mouseOut mouseOver mouseUp paste pause play playing pointerCancel pointerDown pointerMove pointerOut pointerOver pointerUp progress rateChange reset resize seeked seeking stalled submit suspend timeUpdate touchCancel touchEnd touchStart volumeChange scroll toggle touchMove waiting wheel".split(" ");function Mn(e,t){Xf.set(e,t),Gn(t,[e])}for(var el=0;el<xc.length;el++){var tl=xc[el],Jg=tl.toLowerCase(),qg=tl[0].toUpperCase()+tl.slice(1);Mn(Jg,"on"+qg)}Mn(Hf,"onAnimationEnd");Mn(Qf,"onAnimationIteration");Mn(Yf,"onAnimationStart");Mn("dblclick","onDoubleClick");Mn("focusin","onFocus");Mn("focusout","onBlur");Mn(Kf,"onTransitionEnd");_r("onMouseEnter",["mouseout","mouseover"]);_r("onMouseLeave",["mouseout","mouseover"]);_r("onPointerEnter",["pointerout","pointerover"]);_r("onPointerLeave",["pointerout","pointerover"]);Gn("onChange","change click focusin focusout input keydown keyup selectionchange".split(" "));Gn("onSelect","focusout contextmenu dragend focusin keydown keyup mousedown mouseup selectionchange".split(" "));Gn("onBeforeInput",["compositionend","keypress","textInput","paste"]);Gn("onCompositionEnd","compositionend focusout keydown keypress keyup mousedown".split(" "));Gn("onCompositionStart","compositionstart focusout keydown keypress keyup mousedown".split(" "));Gn("onCompositionUpdate","compositionupdate focusout keydown keypress keyup mousedown".split(" "));var ri="abort canplay canplaythrough durationchange emptied encrypted ended error loadeddata loadedmetadata loadstart pause play playing progress ratechange resize seeked seeking stalled suspend timeupdate volumechange waiting".split(" "),Zg=new Set("cancel close invalid load scroll toggle".split(" ").concat(ri));function wc(e,t,n){var r=e.type||"unknown-event";e.currentTarget=n,Jm(r,t,void 0,e),e.currentTarget=null}function Gf(e,t){t=(t&4)!==0;for(var n=0;n<e.length;n++){var r=e[n],i=r.event;r=r.listeners;e:{var o=void 0;if(t)for(var s=r.length-1;0<=s;s--){var a=r[s],u=a.instance,c=a.currentTarget;if(a=a.listener,u!==o&&i.isPropagationStopped())break e;wc(i,a,c),o=u}else for(s=0;s<r.length;s++){if(a=r[s],u=a.instance,c=a.currentTarget,a=a.listener,u!==o&&i.isPropagationStopped())break e;wc(i,a,c),o=u}}}if($o)throw e=Xl,$o=!1,Xl=null,e}function ge(e,t){var n=t[oa];n===void 0&&(n=t[oa]=new Set);var r=e+"__bubble";n.has(r)||(Jf(t,e,2,!1),n.add(r))}function nl(e,t,n){var r=0;t&&(r|=4),Jf(n,e,r,t)}var to="_reactListening"+Math.random().toString(36).slice(2);function ki(e){if(!e[to]){e[to]=!0,rf.forEach(function(n){n!=="selectionchange"&&(Zg.has(n)||nl(n,!1,e),nl(n,!0,e))});var t=e.nodeType===9?e:e.ownerDocument;t===null||t[to]||(t[to]=!0,nl("selectionchange",!1,t))}}function Jf(e,t,n,r){switch(Nf(t)){case 1:var i=pg;break;case 4:i=hg;break;default:i=Xa}n=i.bind(null,t,n,e),i=void 0,!Kl||t!=="touchstart"&&t!=="touchmove"&&t!=="wheel"||(i=!0),r?i!==void 0?e.addEventListener(t,n,{capture:!0,passive:i}):e.addEventListener(t,n,!0):i!==void 0?e.addEventListener(t,n,{passive:i}):e.addEventListener(t,n,!1)}function rl(e,t,n,r,i){var o=r;if(!(t&1)&&!(t&2)&&r!==null)e:for(;;){if(r===null)return;var s=r.tag;if(s===3||s===4){var a=r.stateNode.containerInfo;if(a===i||a.nodeType===8&&a.parentNode===i)break;if(s===4)for(s=r.return;s!==null;){var u=s.tag;if((u===3||u===4)&&(u=s.stateNode.containerInfo,u===i||u.nodeType===8&&u.parentNode===i))return;s=s.return}for(;a!==null;){if(s=Fn(a),s===null)return;if(u=s.tag,u===5||u===6){r=o=s;continue e}a=a.parentNode}}r=r.return}wf(function(){var c=o,m=Ha(n),f=[];e:{var h=Xf.get(e);if(h!==void 0){var w=Ja,y=e;switch(e){case"keypress":if(So(n)===0)break e;case"keydown":case"keyup":w=Pg;break;case"focusin":y="focus",w=Gs;break;case"focusout":y="blur",w=Gs;break;case"beforeblur":case"afterblur":w=Gs;break;case"click":if(n.button===2)break e;case"auxclick":case"dblclick":case"mousedown":case"mousemove":case"mouseup":case"mouseout":case"mouseover":case"contextmenu":w=ac;break;case"drag":case"dragend":case"dragenter":case"dragexit":case"dragleave":case"dragover":case"dragstart":case"drop":w=yg;break;case"touchcancel":case"touchend":case"touchmove":case"touchstart":w=Mg;break;case Hf:case Qf:case Yf:w=wg;break;case Kf:w=Ng;break;case"scroll":w=mg;break;case"wheel":w=zg;break;case"copy":case"cut":case"paste":w=Sg;break;case"gotpointercapture":case"lostpointercapture":case"pointercancel":case"pointerdown":case"pointermove":case"pointerout":case"pointerover":case"pointerup":w=cc}var v=(t&4)!==0,b=!v&&e==="scroll",p=v?h!==null?h+"Capture":null:h;v=[];for(var d=c,g;d!==null;){g=d;var k=g.stateNode;if(g.tag===5&&k!==null&&(g=k,p!==null&&(k=mi(d,p),k!=null&&v.push(Si(d,k,g)))),b)break;d=d.return}0<v.length&&(h=new w(h,y,null,n,m),f.push({event:h,listeners:v}))}}if(!(t&7)){e:{if(h=e==="mouseover"||e==="pointerover",w=e==="mouseout"||e==="pointerout",h&&n!==Ql&&(y=n.relatedTarget||n.fromElement)&&(Fn(y)||y[tn]))break e;if((w||h)&&(h=m.window===m?m:(h=m.ownerDocument)?h.defaultView||h.parentWindow:window,w?(y=n.relatedTarget||n.toElement,w=c,y=y?Fn(y):null,y!==null&&(b=Jn(y),y!==b||y.tag!==5&&y.tag!==6)&&(y=null)):(w=null,y=c),w!==y)){if(v=ac,k="onMouseLeave",p="onMouseEnter",d="mouse",(e==="pointerout"||e==="pointerover")&&(v=cc,k="onPointerLeave",p="onPointerEnter",d="pointer"),b=w==null?h:ur(w),g=y==null?h:ur(y),h=new v(k,d+"leave",w,n,m),h.target=b,h.relatedTarget=g,k=null,Fn(m)===c&&(v=new v(p,d+"enter",y,n,m),v.target=g,v.relatedTarget=b,k=v),b=k,w&&y)t:{for(v=w,p=y,d=0,g=v;g;g=er(g))d++;for(g=0,k=p;k;k=er(k))g++;for(;0<d-g;)v=er(v),d--;for(;0<g-d;)p=er(p),g--;for(;d--;){if(v===p||p!==null&&v===p.alternate)break t;v=er(v),p=er(p)}v=null}else v=null;w!==null&&kc(f,h,w,v,!1),y!==null&&b!==null&&kc(f,b,y,v,!0)}}e:{if(h=c?ur(c):window,w=h.nodeName&&h.nodeName.toLowerCase(),w==="select"||w==="input"&&h.type==="file")var _=Vg;else if(pc(h))if($f)_=Yg;else{_=Hg;var P=Wg}else(w=h.nodeName)&&w.toLowerCase()==="input"&&(h.type==="checkbox"||h.type==="radio")&&(_=Qg);if(_&&(_=_(e,c))){If(f,_,n,m);break e}P&&P(e,h,c),e==="focusout"&&(P=h._wrapperState)&&P.controlled&&h.type==="number"&&Ul(h,"number",h.value)}switch(P=c?ur(c):window,e){case"focusin":(pc(P)||P.contentEditable==="true")&&(lr=P,Zl=c,ai=null);break;case"focusout":ai=Zl=lr=null;break;case"mousedown":ea=!0;break;case"contextmenu":case"mouseup":case"dragend":ea=!1,vc(f,n,m);break;case"selectionchange":if(Gg)break;case"keydown":case"keyup":vc(f,n,m)}var C;if(Za)e:{switch(e){case"compositionstart":var N="onCompositionStart";break e;case"compositionend":N="onCompositionEnd";break e;case"compositionupdate":N="onCompositionUpdate";break e}N=void 0}else sr?Df(e,n)&&(N="onCompositionEnd"):e==="keydown"&&n.keyCode===229&&(N="onCompositionStart");N&&(zf&&n.locale!=="ko"&&(sr||N!=="onCompositionStart"?N==="onCompositionEnd"&&sr&&(C=Lf()):(xn=m,Ga="value"in xn?xn.value:xn.textContent,sr=!0)),P=Ho(c,N),0<P.length&&(N=new uc(N,e,null,n,m),f.push({event:N,listeners:P}),C?N.data=C:(C=Ff(n),C!==null&&(N.data=C)))),(C=Fg?Ig(e,n):$g(e,n))&&(c=Ho(c,"onBeforeInput"),0<c.length&&(m=new uc("onBeforeInput","beforeinput",null,n,m),f.push({event:m,listeners:c}),m.data=C))}Gf(f,t)})}function Si(e,t,n){return{instance:e,listener:t,currentTarget:n}}function Ho(e,t){for(var n=t+"Capture",r=[];e!==null;){var i=e,o=i.stateNode;i.tag===5&&o!==null&&(i=o,o=mi(e,n),o!=null&&r.unshift(Si(e,o,i)),o=mi(e,t),o!=null&&r.push(Si(e,o,i))),e=e.return}return r}function er(e){if(e===null)return null;do e=e.return;while(e&&e.tag!==5);return e||null}function kc(e,t,n,r,i){for(var o=t._reactName,s=[];n!==null&&n!==r;){var a=n,u=a.alternate,c=a.stateNode;if(u!==null&&u===r)break;a.tag===5&&c!==null&&(a=c,i?(u=mi(n,o),u!=null&&s.unshift(Si(n,u,a))):i||(u=mi(n,o),u!=null&&s.push(Si(n,u,a)))),n=n.return}s.length!==0&&e.push({event:t,listeners:s})}var ey=/\r\n?/g,ty=/\u0000|\uFFFD/g;function Sc(e){return(typeof e=="string"?e:""+e).replace(ey,`
`).replace(ty,"")}function no(e,t,n){if(t=Sc(t),Sc(e)!==t&&n)throw Error(R(425))}function Qo(){}var ta=null,na=null;function ra(e,t){return e==="textarea"||e==="noscript"||typeof t.children=="string"||typeof t.children=="number"||typeof t.dangerouslySetInnerHTML=="object"&&t.dangerouslySetInnerHTML!==null&&t.dangerouslySetInnerHTML.__html!=null}var ia=typeof setTimeout=="function"?setTimeout:void 0,ny=typeof clearTimeout=="function"?clearTimeout:void 0,jc=typeof Promise=="function"?Promise:void 0,ry=typeof queueMicrotask=="function"?queueMicrotask:typeof jc<"u"?function(e){return jc.resolve(null).then(e).catch(iy)}:ia;function iy(e){setTimeout(function(){throw e})}function il(e,t){var n=t,r=0;do{var i=n.nextSibling;if(e.removeChild(n),i&&i.nodeType===8)if(n=i.data,n==="/$"){if(r===0){e.removeChild(i),vi(t);return}r--}else n!=="$"&&n!=="$?"&&n!=="$!"||r++;n=i}while(n);vi(t)}function _n(e){for(;e!=null;e=e.nextSibling){var t=e.nodeType;if(t===1||t===3)break;if(t===8){if(t=e.data,t==="$"||t==="$!"||t==="$?")break;if(t==="/$")return null}}return e}function Ec(e){e=e.previousSibling;for(var t=0;e;){if(e.nodeType===8){var n=e.data;if(n==="$"||n==="$!"||n==="$?"){if(t===0)return e;t--}else n==="/$"&&t++}e=e.previousSibling}return null}var zr=Math.random().toString(36).slice(2),It="__reactFiber$"+zr,ji="__reactProps$"+zr,tn="__reactContainer$"+zr,oa="__reactEvents$"+zr,oy="__reactListeners$"+zr,sy="__reactHandles$"+zr;function Fn(e){var t=e[It];if(t)return t;for(var n=e.parentNode;n;){if(t=n[tn]||n[It]){if(n=t.alternate,t.child!==null||n!==null&&n.child!==null)for(e=Ec(e);e!==null;){if(n=e[It])return n;e=Ec(e)}return t}e=n,n=e.parentNode}return null}function Fi(e){return e=e[It]||e[tn],!e||e.tag!==5&&e.tag!==6&&e.tag!==13&&e.tag!==3?null:e}function ur(e){if(e.tag===5||e.tag===6)return e.stateNode;throw Error(R(33))}function ws(e){return e[ji]||null}var sa=[],cr=-1;function An(e){return{current:e}}function ye(e){0>cr||(e.current=sa[cr],sa[cr]=null,cr--)}function he(e,t){cr++,sa[cr]=e.current,e.current=t}var Rn={},Ke=An(Rn),nt=An(!1),Hn=Rn;function Cr(e,t){var n=e.type.contextTypes;if(!n)return Rn;var r=e.stateNode;if(r&&r.__reactInternalMemoizedUnmaskedChildContext===t)return r.__reactInternalMemoizedMaskedChildContext;var i={},o;for(o in n)i[o]=t[o];return r&&(e=e.stateNode,e.__reactInternalMemoizedUnmaskedChildContext=t,e.__reactInternalMemoizedMaskedChildContext=i),i}function rt(e){return e=e.childContextTypes,e!=null}function Yo(){ye(nt),ye(Ke)}function _c(e,t,n){if(Ke.current!==Rn)throw Error(R(168));he(Ke,t),he(nt,n)}function qf(e,t,n){var r=e.stateNode;if(t=t.childContextTypes,typeof r.getChildContext!="function")return n;r=r.getChildContext();for(var i in r)if(!(i in t))throw Error(R(108,Wm(e)||"Unknown",i));return Se({},n,r)}function Ko(e){return e=(e=e.stateNode)&&e.__reactInternalMemoizedMergedChildContext||Rn,Hn=Ke.current,he(Ke,e),he(nt,nt.current),!0}function Cc(e,t,n){var r=e.stateNode;if(!r)throw Error(R(169));n?(e=qf(e,t,Hn),r.__reactInternalMemoizedMergedChildContext=e,ye(nt),ye(Ke),he(Ke,e)):ye(nt),he(nt,n)}var Xt=null,ks=!1,ol=!1;function Zf(e){Xt===null?Xt=[e]:Xt.push(e)}function ly(e){ks=!0,Zf(e)}function Nn(){if(!ol&&Xt!==null){ol=!0;var e=0,t=de;try{var n=Xt;for(de=1;e<n.length;e++){var r=n[e];do r=r(!0);while(r!==null)}Xt=null,ks=!1}catch(i){throw Xt!==null&&(Xt=Xt.slice(e+1)),Ef(Qa,Nn),i}finally{de=t,ol=!1}}return null}var dr=[],fr=0,Xo=null,Go=0,mt=[],gt=0,Qn=null,Gt=1,Jt="";function zn(e,t){dr[fr++]=Go,dr[fr++]=Xo,Xo=e,Go=t}function ep(e,t,n){mt[gt++]=Gt,mt[gt++]=Jt,mt[gt++]=Qn,Qn=e;var r=Gt;e=Jt;var i=32-Ot(r)-1;r&=~(1<<i),n+=1;var o=32-Ot(t)+i;if(30<o){var s=i-i%5;o=(r&(1<<s)-1).toString(32),r>>=s,i-=s,Gt=1<<32-Ot(t)+i|n<<i|r,Jt=o+e}else Gt=1<<o|n<<i|r,Jt=e}function tu(e){e.return!==null&&(zn(e,1),ep(e,1,0))}function nu(e){for(;e===Xo;)Xo=dr[--fr],dr[fr]=null,Go=dr[--fr],dr[fr]=null;for(;e===Qn;)Qn=mt[--gt],mt[gt]=null,Jt=mt[--gt],mt[gt]=null,Gt=mt[--gt],mt[gt]=null}var at=null,lt=null,xe=!1,Tt=null;function tp(e,t){var n=yt(5,null,null,0);n.elementType="DELETED",n.stateNode=t,n.return=e,t=e.deletions,t===null?(e.deletions=[n],e.flags|=16):t.push(n)}function bc(e,t){switch(e.tag){case 5:var n=e.type;return t=t.nodeType!==1||n.toLowerCase()!==t.nodeName.toLowerCase()?null:t,t!==null?(e.stateNode=t,at=e,lt=_n(t.firstChild),!0):!1;case 6:return t=e.pendingProps===""||t.nodeType!==3?null:t,t!==null?(e.stateNode=t,at=e,lt=null,!0):!1;case 13:return t=t.nodeType!==8?null:t,t!==null?(n=Qn!==null?{id:Gt,overflow:Jt}:null,e.memoizedState={dehydrated:t,treeContext:n,retryLane:1073741824},n=yt(18,null,null,0),n.stateNode=t,n.return=e,e.child=n,at=e,lt=null,!0):!1;default:return!1}}function la(e){return(e.mode&1)!==0&&(e.flags&128)===0}function aa(e){if(xe){var t=lt;if(t){var n=t;if(!bc(e,t)){if(la(e))throw Error(R(418));t=_n(n.nextSibling);var r=at;t&&bc(e,t)?tp(r,n):(e.flags=e.flags&-4097|2,xe=!1,at=e)}}else{if(la(e))throw Error(R(418));e.flags=e.flags&-4097|2,xe=!1,at=e}}}function Tc(e){for(e=e.return;e!==null&&e.tag!==5&&e.tag!==3&&e.tag!==13;)e=e.return;at=e}function ro(e){if(e!==at)return!1;if(!xe)return Tc(e),xe=!0,!1;var t;if((t=e.tag!==3)&&!(t=e.tag!==5)&&(t=e.type,t=t!=="head"&&t!=="body"&&!ra(e.type,e.memoizedProps)),t&&(t=lt)){if(la(e))throw np(),Error(R(418));for(;t;)tp(e,t),t=_n(t.nextSibling)}if(Tc(e),e.tag===13){if(e=e.memoizedState,e=e!==null?e.dehydrated:null,!e)throw Error(R(317));e:{for(e=e.nextSibling,t=0;e;){if(e.nodeType===8){var n=e.data;if(n==="/$"){if(t===0){lt=_n(e.nextSibling);break e}t--}else n!=="$"&&n!=="$!"&&n!=="$?"||t++}e=e.nextSibling}lt=null}}else lt=at?_n(e.stateNode.nextSibling):null;return!0}function np(){for(var e=lt;e;)e=_n(e.nextSibling)}function br(){lt=at=null,xe=!1}function ru(e){Tt===null?Tt=[e]:Tt.push(e)}var ay=on.ReactCurrentBatchConfig;function _t(e,t){if(e&&e.defaultProps){t=Se({},t),e=e.defaultProps;for(var n in e)t[n]===void 0&&(t[n]=e[n]);return t}return t}var Jo=An(null),qo=null,pr=null,iu=null;function ou(){iu=pr=qo=null}function su(e){var t=Jo.current;ye(Jo),e._currentValue=t}function ua(e,t,n){for(;e!==null;){var r=e.alternate;if((e.childLanes&t)!==t?(e.childLanes|=t,r!==null&&(r.childLanes|=t)):r!==null&&(r.childLanes&t)!==t&&(r.childLanes|=t),e===n)break;e=e.return}}function Sr(e,t){qo=e,iu=pr=null,e=e.dependencies,e!==null&&e.firstContext!==null&&(e.lanes&t&&(tt=!0),e.firstContext=null)}function wt(e){var t=e._currentValue;if(iu!==e)if(e={context:e,memoizedValue:t,next:null},pr===null){if(qo===null)throw Error(R(308));pr=e,qo.dependencies={lanes:0,firstContext:e}}else pr=pr.next=e;return t}var In=null;function lu(e){In===null?In=[e]:In.push(e)}function rp(e,t,n,r){var i=t.interleaved;return i===null?(n.next=n,lu(t)):(n.next=i.next,i.next=n),t.interleaved=n,nn(e,r)}function nn(e,t){e.lanes|=t;var n=e.alternate;for(n!==null&&(n.lanes|=t),n=e,e=e.return;e!==null;)e.childLanes|=t,n=e.alternate,n!==null&&(n.childLanes|=t),n=e,e=e.return;return n.tag===3?n.stateNode:null}var mn=!1;function au(e){e.updateQueue={baseState:e.memoizedState,firstBaseUpdate:null,lastBaseUpdate:null,shared:{pending:null,interleaved:null,lanes:0},effects:null}}function ip(e,t){e=e.updateQueue,t.updateQueue===e&&(t.updateQueue={baseState:e.baseState,firstBaseUpdate:e.firstBaseUpdate,lastBaseUpdate:e.lastBaseUpdate,shared:e.shared,effects:e.effects})}function qt(e,t){return{eventTime:e,lane:t,tag:0,payload:null,callback:null,next:null}}function Cn(e,t,n){var r=e.updateQueue;if(r===null)return null;if(r=r.shared,oe&2){var i=r.pending;return i===null?t.next=t:(t.next=i.next,i.next=t),r.pending=t,nn(e,n)}return i=r.interleaved,i===null?(t.next=t,lu(r)):(t.next=i.next,i.next=t),r.interleaved=t,nn(e,n)}function jo(e,t,n){if(t=t.updateQueue,t!==null&&(t=t.shared,(n&4194240)!==0)){var r=t.lanes;r&=e.pendingLanes,n|=r,t.lanes=n,Ya(e,n)}}function Pc(e,t){var n=e.updateQueue,r=e.alternate;if(r!==null&&(r=r.updateQueue,n===r)){var i=null,o=null;if(n=n.firstBaseUpdate,n!==null){do{var s={eventTime:n.eventTime,lane:n.lane,tag:n.tag,payload:n.payload,callback:n.callback,next:null};o===null?i=o=s:o=o.next=s,n=n.next}while(n!==null);o===null?i=o=t:o=o.next=t}else i=o=t;n={baseState:r.baseState,firstBaseUpdate:i,lastBaseUpdate:o,shared:r.shared,effects:r.effects},e.updateQueue=n;return}e=n.lastBaseUpdate,e===null?n.firstBaseUpdate=t:e.next=t,n.lastBaseUpdate=t}function Zo(e,t,n,r){var i=e.updateQueue;mn=!1;var o=i.firstBaseUpdate,s=i.lastBaseUpdate,a=i.shared.pending;if(a!==null){i.shared.pending=null;var u=a,c=u.next;u.next=null,s===null?o=c:s.next=c,s=u;var m=e.alternate;m!==null&&(m=m.updateQueue,a=m.lastBaseUpdate,a!==s&&(a===null?m.firstBaseUpdate=c:a.next=c,m.lastBaseUpdate=u))}if(o!==null){var f=i.baseState;s=0,m=c=u=null,a=o;do{var h=a.lane,w=a.eventTime;if((r&h)===h){m!==null&&(m=m.next={eventTime:w,lane:0,tag:a.tag,payload:a.payload,callback:a.callback,next:null});e:{var y=e,v=a;switch(h=t,w=n,v.tag){case 1:if(y=v.payload,typeof y=="function"){f=y.call(w,f,h);break e}f=y;break e;case 3:y.flags=y.flags&-65537|128;case 0:if(y=v.payload,h=typeof y=="function"?y.call(w,f,h):y,h==null)break e;f=Se({},f,h);break e;case 2:mn=!0}}a.callback!==null&&a.lane!==0&&(e.flags|=64,h=i.effects,h===null?i.effects=[a]:h.push(a))}else w={eventTime:w,lane:h,tag:a.tag,payload:a.payload,callback:a.callback,next:null},m===null?(c=m=w,u=f):m=m.next=w,s|=h;if(a=a.next,a===null){if(a=i.shared.pending,a===null)break;h=a,a=h.next,h.next=null,i.lastBaseUpdate=h,i.shared.pending=null}}while(!0);if(m===null&&(u=f),i.baseState=u,i.firstBaseUpdate=c,i.lastBaseUpdate=m,t=i.shared.interleaved,t!==null){i=t;do s|=i.lane,i=i.next;while(i!==t)}else o===null&&(i.shared.lanes=0);Kn|=s,e.lanes=s,e.memoizedState=f}}function Oc(e,t,n){if(e=t.effects,t.effects=null,e!==null)for(t=0;t<e.length;t++){var r=e[t],i=r.callback;if(i!==null){if(r.callback=null,r=n,typeof i!="function")throw Error(R(191,i));i.call(r)}}}var op=new nf.Component().refs;function ca(e,t,n,r){t=e.memoizedState,n=n(r,t),n=n==null?t:Se({},t,n),e.memoizedState=n,e.lanes===0&&(e.updateQueue.baseState=n)}var Ss={isMounted:function(e){return(e=e._reactInternals)?Jn(e)===e:!1},enqueueSetState:function(e,t,n){e=e._reactInternals;var r=Je(),i=Tn(e),o=qt(r,i);o.payload=t,n!=null&&(o.callback=n),t=Cn(e,o,i),t!==null&&(Rt(t,e,i,r),jo(t,e,i))},enqueueReplaceState:function(e,t,n){e=e._reactInternals;var r=Je(),i=Tn(e),o=qt(r,i);o.tag=1,o.payload=t,n!=null&&(o.callback=n),t=Cn(e,o,i),t!==null&&(Rt(t,e,i,r),jo(t,e,i))},enqueueForceUpdate:function(e,t){e=e._reactInternals;var n=Je(),r=Tn(e),i=qt(n,r);i.tag=2,t!=null&&(i.callback=t),t=Cn(e,i,r),t!==null&&(Rt(t,e,r,n),jo(t,e,r))}};function Rc(e,t,n,r,i,o,s){return e=e.stateNode,typeof e.shouldComponentUpdate=="function"?e.shouldComponentUpdate(r,o,s):t.prototype&&t.prototype.isPureReactComponent?!wi(n,r)||!wi(i,o):!0}function sp(e,t,n){var r=!1,i=Rn,o=t.contextType;return typeof o=="object"&&o!==null?o=wt(o):(i=rt(t)?Hn:Ke.current,r=t.contextTypes,o=(r=r!=null)?Cr(e,i):Rn),t=new t(n,o),e.memoizedState=t.state!==null&&t.state!==void 0?t.state:null,t.updater=Ss,e.stateNode=t,t._reactInternals=e,r&&(e=e.stateNode,e.__reactInternalMemoizedUnmaskedChildContext=i,e.__reactInternalMemoizedMaskedChildContext=o),t}function Mc(e,t,n,r){e=t.state,typeof t.componentWillReceiveProps=="function"&&t.componentWillReceiveProps(n,r),typeof t.UNSAFE_componentWillReceiveProps=="function"&&t.UNSAFE_componentWillReceiveProps(n,r),t.state!==e&&Ss.enqueueReplaceState(t,t.state,null)}function da(e,t,n,r){var i=e.stateNode;i.props=n,i.state=e.memoizedState,i.refs=op,au(e);var o=t.contextType;typeof o=="object"&&o!==null?i.context=wt(o):(o=rt(t)?Hn:Ke.current,i.context=Cr(e,o)),i.state=e.memoizedState,o=t.getDerivedStateFromProps,typeof o=="function"&&(ca(e,t,o,n),i.state=e.memoizedState),typeof t.getDerivedStateFromProps=="function"||typeof i.getSnapshotBeforeUpdate=="function"||typeof i.UNSAFE_componentWillMount!="function"&&typeof i.componentWillMount!="function"||(t=i.state,typeof i.componentWillMount=="function"&&i.componentWillMount(),typeof i.UNSAFE_componentWillMount=="function"&&i.UNSAFE_componentWillMount(),t!==i.state&&Ss.enqueueReplaceState(i,i.state,null),Zo(e,n,i,r),i.state=e.memoizedState),typeof i.componentDidMount=="function"&&(e.flags|=4194308)}function Wr(e,t,n){if(e=n.ref,e!==null&&typeof e!="function"&&typeof e!="object"){if(n._owner){if(n=n._owner,n){if(n.tag!==1)throw Error(R(309));var r=n.stateNode}if(!r)throw Error(R(147,e));var i=r,o=""+e;return t!==null&&t.ref!==null&&typeof t.ref=="function"&&t.ref._stringRef===o?t.ref:(t=function(s){var a=i.refs;a===op&&(a=i.refs={}),s===null?delete a[o]:a[o]=s},t._stringRef=o,t)}if(typeof e!="string")throw Error(R(284));if(!n._owner)throw Error(R(290,e))}return e}function io(e,t){throw e=Object.prototype.toString.call(t),Error(R(31,e==="[object Object]"?"object with keys {"+Object.keys(t).join(", ")+"}":e))}function Ac(e){var t=e._init;return t(e._payload)}function lp(e){function t(p,d){if(e){var g=p.deletions;g===null?(p.deletions=[d],p.flags|=16):g.push(d)}}function n(p,d){if(!e)return null;for(;d!==null;)t(p,d),d=d.sibling;return null}function r(p,d){for(p=new Map;d!==null;)d.key!==null?p.set(d.key,d):p.set(d.index,d),d=d.sibling;return p}function i(p,d){return p=Pn(p,d),p.index=0,p.sibling=null,p}function o(p,d,g){return p.index=g,e?(g=p.alternate,g!==null?(g=g.index,g<d?(p.flags|=2,d):g):(p.flags|=2,d)):(p.flags|=1048576,d)}function s(p){return e&&p.alternate===null&&(p.flags|=2),p}function a(p,d,g,k){return d===null||d.tag!==6?(d=fl(g,p.mode,k),d.return=p,d):(d=i(d,g),d.return=p,d)}function u(p,d,g,k){var _=g.type;return _===or?m(p,d,g.props.children,k,g.key):d!==null&&(d.elementType===_||typeof _=="object"&&_!==null&&_.$$typeof===hn&&Ac(_)===d.type)?(k=i(d,g.props),k.ref=Wr(p,d,g),k.return=p,k):(k=Po(g.type,g.key,g.props,null,p.mode,k),k.ref=Wr(p,d,g),k.return=p,k)}function c(p,d,g,k){return d===null||d.tag!==4||d.stateNode.containerInfo!==g.containerInfo||d.stateNode.implementation!==g.implementation?(d=pl(g,p.mode,k),d.return=p,d):(d=i(d,g.children||[]),d.return=p,d)}function m(p,d,g,k,_){return d===null||d.tag!==7?(d=Wn(g,p.mode,k,_),d.return=p,d):(d=i(d,g),d.return=p,d)}function f(p,d,g){if(typeof d=="string"&&d!==""||typeof d=="number")return d=fl(""+d,p.mode,g),d.return=p,d;if(typeof d=="object"&&d!==null){switch(d.$$typeof){case Yi:return g=Po(d.type,d.key,d.props,null,p.mode,g),g.ref=Wr(p,null,d),g.return=p,g;case ir:return d=pl(d,p.mode,g),d.return=p,d;case hn:var k=d._init;return f(p,k(d._payload),g)}if(ti(d)||Ir(d))return d=Wn(d,p.mode,g,null),d.return=p,d;io(p,d)}return null}function h(p,d,g,k){var _=d!==null?d.key:null;if(typeof g=="string"&&g!==""||typeof g=="number")return _!==null?null:a(p,d,""+g,k);if(typeof g=="object"&&g!==null){switch(g.$$typeof){case Yi:return g.key===_?u(p,d,g,k):null;case ir:return g.key===_?c(p,d,g,k):null;case hn:return _=g._init,h(p,d,_(g._payload),k)}if(ti(g)||Ir(g))return _!==null?null:m(p,d,g,k,null);io(p,g)}return null}function w(p,d,g,k,_){if(typeof k=="string"&&k!==""||typeof k=="number")return p=p.get(g)||null,a(d,p,""+k,_);if(typeof k=="object"&&k!==null){switch(k.$$typeof){case Yi:return p=p.get(k.key===null?g:k.key)||null,u(d,p,k,_);case ir:return p=p.get(k.key===null?g:k.key)||null,c(d,p,k,_);case hn:var P=k._init;return w(p,d,g,P(k._payload),_)}if(ti(k)||Ir(k))return p=p.get(g)||null,m(d,p,k,_,null);io(d,k)}return null}function y(p,d,g,k){for(var _=null,P=null,C=d,N=d=0,O=null;C!==null&&N<g.length;N++){C.index>N?(O=C,C=null):O=C.sibling;var L=h(p,C,g[N],k);if(L===null){C===null&&(C=O);break}e&&C&&L.alternate===null&&t(p,C),d=o(L,d,N),P===null?_=L:P.sibling=L,P=L,C=O}if(N===g.length)return n(p,C),xe&&zn(p,N),_;if(C===null){for(;N<g.length;N++)C=f(p,g[N],k),C!==null&&(d=o(C,d,N),P===null?_=C:P.sibling=C,P=C);return xe&&zn(p,N),_}for(C=r(p,C);N<g.length;N++)O=w(C,p,N,g[N],k),O!==null&&(e&&O.alternate!==null&&C.delete(O.key===null?N:O.key),d=o(O,d,N),P===null?_=O:P.sibling=O,P=O);return e&&C.forEach(function(W){return t(p,W)}),xe&&zn(p,N),_}function v(p,d,g,k){var _=Ir(g);if(typeof _!="function")throw Error(R(150));if(g=_.call(g),g==null)throw Error(R(151));for(var P=_=null,C=d,N=d=0,O=null,L=g.next();C!==null&&!L.done;N++,L=g.next()){C.index>N?(O=C,C=null):O=C.sibling;var W=h(p,C,L.value,k);if(W===null){C===null&&(C=O);break}e&&C&&W.alternate===null&&t(p,C),d=o(W,d,N),P===null?_=W:P.sibling=W,P=W,C=O}if(L.done)return n(p,C),xe&&zn(p,N),_;if(C===null){for(;!L.done;N++,L=g.next())L=f(p,L.value,k),L!==null&&(d=o(L,d,N),P===null?_=L:P.sibling=L,P=L);return xe&&zn(p,N),_}for(C=r(p,C);!L.done;N++,L=g.next())L=w(C,p,N,L.value,k),L!==null&&(e&&L.alternate!==null&&C.delete(L.key===null?N:L.key),d=o(L,d,N),P===null?_=L:P.sibling=L,P=L);return e&&C.forEach(function($){return t(p,$)}),xe&&zn(p,N),_}function b(p,d,g,k){if(typeof g=="object"&&g!==null&&g.type===or&&g.key===null&&(g=g.props.children),typeof g=="object"&&g!==null){switch(g.$$typeof){case Yi:e:{for(var _=g.key,P=d;P!==null;){if(P.key===_){if(_=g.type,_===or){if(P.tag===7){n(p,P.sibling),d=i(P,g.props.children),d.return=p,p=d;break e}}else if(P.elementType===_||typeof _=="object"&&_!==null&&_.$$typeof===hn&&Ac(_)===P.type){n(p,P.sibling),d=i(P,g.props),d.ref=Wr(p,P,g),d.return=p,p=d;break e}n(p,P);break}else t(p,P);P=P.sibling}g.type===or?(d=Wn(g.props.children,p.mode,k,g.key),d.return=p,p=d):(k=Po(g.type,g.key,g.props,null,p.mode,k),k.ref=Wr(p,d,g),k.return=p,p=k)}return s(p);case ir:e:{for(P=g.key;d!==null;){if(d.key===P)if(d.tag===4&&d.stateNode.containerInfo===g.containerInfo&&d.stateNode.implementation===g.implementation){n(p,d.sibling),d=i(d,g.children||[]),d.return=p,p=d;break e}else{n(p,d);break}else t(p,d);d=d.sibling}d=pl(g,p.mode,k),d.return=p,p=d}return s(p);case hn:return P=g._init,b(p,d,P(g._payload),k)}if(ti(g))return y(p,d,g,k);if(Ir(g))return v(p,d,g,k);io(p,g)}return typeof g=="string"&&g!==""||typeof g=="number"?(g=""+g,d!==null&&d.tag===6?(n(p,d.sibling),d=i(d,g),d.return=p,p=d):(n(p,d),d=fl(g,p.mode,k),d.return=p,p=d),s(p)):n(p,d)}return b}var Tr=lp(!0),ap=lp(!1),Ii={},Vt=An(Ii),Ei=An(Ii),_i=An(Ii);function $n(e){if(e===Ii)throw Error(R(174));return e}function uu(e,t){switch(he(_i,t),he(Ei,e),he(Vt,Ii),e=t.nodeType,e){case 9:case 11:t=(t=t.documentElement)?t.namespaceURI:Vl(null,"");break;default:e=e===8?t.parentNode:t,t=e.namespaceURI||null,e=e.tagName,t=Vl(t,e)}ye(Vt),he(Vt,t)}function Pr(){ye(Vt),ye(Ei),ye(_i)}function up(e){$n(_i.current);var t=$n(Vt.current),n=Vl(t,e.type);t!==n&&(he(Ei,e),he(Vt,n))}function cu(e){Ei.current===e&&(ye(Vt),ye(Ei))}var we=An(0);function es(e){for(var t=e;t!==null;){if(t.tag===13){var n=t.memoizedState;if(n!==null&&(n=n.dehydrated,n===null||n.data==="$?"||n.data==="$!"))return t}else if(t.tag===19&&t.memoizedProps.revealOrder!==void 0){if(t.flags&128)return t}else if(t.child!==null){t.child.return=t,t=t.child;continue}if(t===e)break;for(;t.sibling===null;){if(t.return===null||t.return===e)return null;t=t.return}t.sibling.return=t.return,t=t.sibling}return null}var sl=[];function du(){for(var e=0;e<sl.length;e++)sl[e]._workInProgressVersionPrimary=null;sl.length=0}var Eo=on.ReactCurrentDispatcher,ll=on.ReactCurrentBatchConfig,Yn=0,ke=null,Re=null,Le=null,ts=!1,ui=!1,Ci=0,uy=0;function We(){throw Error(R(321))}function fu(e,t){if(t===null)return!1;for(var n=0;n<t.length&&n<e.length;n++)if(!Mt(e[n],t[n]))return!1;return!0}function pu(e,t,n,r,i,o){if(Yn=o,ke=t,t.memoizedState=null,t.updateQueue=null,t.lanes=0,Eo.current=e===null||e.memoizedState===null?py:hy,e=n(r,i),ui){o=0;do{if(ui=!1,Ci=0,25<=o)throw Error(R(301));o+=1,Le=Re=null,t.updateQueue=null,Eo.current=my,e=n(r,i)}while(ui)}if(Eo.current=ns,t=Re!==null&&Re.next!==null,Yn=0,Le=Re=ke=null,ts=!1,t)throw Error(R(300));return e}function hu(){var e=Ci!==0;return Ci=0,e}function zt(){var e={memoizedState:null,baseState:null,baseQueue:null,queue:null,next:null};return Le===null?ke.memoizedState=Le=e:Le=Le.next=e,Le}function kt(){if(Re===null){var e=ke.alternate;e=e!==null?e.memoizedState:null}else e=Re.next;var t=Le===null?ke.memoizedState:Le.next;if(t!==null)Le=t,Re=e;else{if(e===null)throw Error(R(310));Re=e,e={memoizedState:Re.memoizedState,baseState:Re.baseState,baseQueue:Re.baseQueue,queue:Re.queue,next:null},Le===null?ke.memoizedState=Le=e:Le=Le.next=e}return Le}function bi(e,t){return typeof t=="function"?t(e):t}function al(e){var t=kt(),n=t.queue;if(n===null)throw Error(R(311));n.lastRenderedReducer=e;var r=Re,i=r.baseQueue,o=n.pending;if(o!==null){if(i!==null){var s=i.next;i.next=o.next,o.next=s}r.baseQueue=i=o,n.pending=null}if(i!==null){o=i.next,r=r.baseState;var a=s=null,u=null,c=o;do{var m=c.lane;if((Yn&m)===m)u!==null&&(u=u.next={lane:0,action:c.action,hasEagerState:c.hasEagerState,eagerState:c.eagerState,next:null}),r=c.hasEagerState?c.eagerState:e(r,c.action);else{var f={lane:m,action:c.action,hasEagerState:c.hasEagerState,eagerState:c.eagerState,next:null};u===null?(a=u=f,s=r):u=u.next=f,ke.lanes|=m,Kn|=m}c=c.next}while(c!==null&&c!==o);u===null?s=r:u.next=a,Mt(r,t.memoizedState)||(tt=!0),t.memoizedState=r,t.baseState=s,t.baseQueue=u,n.lastRenderedState=r}if(e=n.interleaved,e!==null){i=e;do o=i.lane,ke.lanes|=o,Kn|=o,i=i.next;while(i!==e)}else i===null&&(n.lanes=0);return[t.memoizedState,n.dispatch]}function ul(e){var t=kt(),n=t.queue;if(n===null)throw Error(R(311));n.lastRenderedReducer=e;var r=n.dispatch,i=n.pending,o=t.memoizedState;if(i!==null){n.pending=null;var s=i=i.next;do o=e(o,s.action),s=s.next;while(s!==i);Mt(o,t.memoizedState)||(tt=!0),t.memoizedState=o,t.baseQueue===null&&(t.baseState=o),n.lastRenderedState=o}return[o,r]}function cp(){}function dp(e,t){var n=ke,r=kt(),i=t(),o=!Mt(r.memoizedState,i);if(o&&(r.memoizedState=i,tt=!0),r=r.queue,mu(hp.bind(null,n,r,e),[e]),r.getSnapshot!==t||o||Le!==null&&Le.memoizedState.tag&1){if(n.flags|=2048,Ti(9,pp.bind(null,n,r,i,t),void 0,null),ze===null)throw Error(R(349));Yn&30||fp(n,t,i)}return i}function fp(e,t,n){e.flags|=16384,e={getSnapshot:t,value:n},t=ke.updateQueue,t===null?(t={lastEffect:null,stores:null},ke.updateQueue=t,t.stores=[e]):(n=t.stores,n===null?t.stores=[e]:n.push(e))}function pp(e,t,n,r){t.value=n,t.getSnapshot=r,mp(t)&&gp(e)}function hp(e,t,n){return n(function(){mp(t)&&gp(e)})}function mp(e){var t=e.getSnapshot;e=e.value;try{var n=t();return!Mt(e,n)}catch{return!0}}function gp(e){var t=nn(e,1);t!==null&&Rt(t,e,1,-1)}function Nc(e){var t=zt();return typeof e=="function"&&(e=e()),t.memoizedState=t.baseState=e,e={pending:null,interleaved:null,lanes:0,dispatch:null,lastRenderedReducer:bi,lastRenderedState:e},t.queue=e,e=e.dispatch=fy.bind(null,ke,e),[t.memoizedState,e]}function Ti(e,t,n,r){return e={tag:e,create:t,destroy:n,deps:r,next:null},t=ke.updateQueue,t===null?(t={lastEffect:null,stores:null},ke.updateQueue=t,t.lastEffect=e.next=e):(n=t.lastEffect,n===null?t.lastEffect=e.next=e:(r=n.next,n.next=e,e.next=r,t.lastEffect=e)),e}function yp(){return kt().memoizedState}function _o(e,t,n,r){var i=zt();ke.flags|=e,i.memoizedState=Ti(1|t,n,void 0,r===void 0?null:r)}function js(e,t,n,r){var i=kt();r=r===void 0?null:r;var o=void 0;if(Re!==null){var s=Re.memoizedState;if(o=s.destroy,r!==null&&fu(r,s.deps)){i.memoizedState=Ti(t,n,o,r);return}}ke.flags|=e,i.memoizedState=Ti(1|t,n,o,r)}function Lc(e,t){return _o(8390656,8,e,t)}function mu(e,t){return js(2048,8,e,t)}function vp(e,t){return js(4,2,e,t)}function xp(e,t){return js(4,4,e,t)}function wp(e,t){if(typeof t=="function")return e=e(),t(e),function(){t(null)};if(t!=null)return e=e(),t.current=e,function(){t.current=null}}function kp(e,t,n){return n=n!=null?n.concat([e]):null,js(4,4,wp.bind(null,t,e),n)}function gu(){}function Sp(e,t){var n=kt();t=t===void 0?null:t;var r=n.memoizedState;return r!==null&&t!==null&&fu(t,r[1])?r[0]:(n.memoizedState=[e,t],e)}function jp(e,t){var n=kt();t=t===void 0?null:t;var r=n.memoizedState;return r!==null&&t!==null&&fu(t,r[1])?r[0]:(e=e(),n.memoizedState=[e,t],e)}function Ep(e,t,n){return Yn&21?(Mt(n,t)||(n=bf(),ke.lanes|=n,Kn|=n,e.baseState=!0),t):(e.baseState&&(e.baseState=!1,tt=!0),e.memoizedState=n)}function cy(e,t){var n=de;de=n!==0&&4>n?n:4,e(!0);var r=ll.transition;ll.transition={};try{e(!1),t()}finally{de=n,ll.transition=r}}function _p(){return kt().memoizedState}function dy(e,t,n){var r=Tn(e);if(n={lane:r,action:n,hasEagerState:!1,eagerState:null,next:null},Cp(e))bp(t,n);else if(n=rp(e,t,n,r),n!==null){var i=Je();Rt(n,e,r,i),Tp(n,t,r)}}function fy(e,t,n){var r=Tn(e),i={lane:r,action:n,hasEagerState:!1,eagerState:null,next:null};if(Cp(e))bp(t,i);else{var o=e.alternate;if(e.lanes===0&&(o===null||o.lanes===0)&&(o=t.lastRenderedReducer,o!==null))try{var s=t.lastRenderedState,a=o(s,n);if(i.hasEagerState=!0,i.eagerState=a,Mt(a,s)){var u=t.interleaved;u===null?(i.next=i,lu(t)):(i.next=u.next,u.next=i),t.interleaved=i;return}}catch{}finally{}n=rp(e,t,i,r),n!==null&&(i=Je(),Rt(n,e,r,i),Tp(n,t,r))}}function Cp(e){var t=e.alternate;return e===ke||t!==null&&t===ke}function bp(e,t){ui=ts=!0;var n=e.pending;n===null?t.next=t:(t.next=n.next,n.next=t),e.pending=t}function Tp(e,t,n){if(n&4194240){var r=t.lanes;r&=e.pendingLanes,n|=r,t.lanes=n,Ya(e,n)}}var ns={readContext:wt,useCallback:We,useContext:We,useEffect:We,useImperativeHandle:We,useInsertionEffect:We,useLayoutEffect:We,useMemo:We,useReducer:We,useRef:We,useState:We,useDebugValue:We,useDeferredValue:We,useTransition:We,useMutableSource:We,useSyncExternalStore:We,useId:We,unstable_isNewReconciler:!1},py={readContext:wt,useCallback:function(e,t){return zt().memoizedState=[e,t===void 0?null:t],e},useContext:wt,useEffect:Lc,useImperativeHandle:function(e,t,n){return n=n!=null?n.concat([e]):null,_o(4194308,4,wp.bind(null,t,e),n)},useLayoutEffect:function(e,t){return _o(4194308,4,e,t)},useInsertionEffect:function(e,t){return _o(4,2,e,t)},useMemo:function(e,t){var n=zt();return t=t===void 0?null:t,e=e(),n.memoizedState=[e,t],e},useReducer:function(e,t,n){var r=zt();return t=n!==void 0?n(t):t,r.memoizedState=r.baseState=t,e={pending:null,interleaved:null,lanes:0,dispatch:null,lastRenderedReducer:e,lastRenderedState:t},r.queue=e,e=e.dispatch=dy.bind(null,ke,e),[r.memoizedState,e]},useRef:function(e){var t=zt();return e={current:e},t.memoizedState=e},useState:Nc,useDebugValue:gu,useDeferredValue:function(e){return zt().memoizedState=e},useTransition:function(){var e=Nc(!1),t=e[0];return e=cy.bind(null,e[1]),zt().memoizedState=e,[t,e]},useMutableSource:function(){},useSyncExternalStore:function(e,t,n){var r=ke,i=zt();if(xe){if(n===void 0)throw Error(R(407));n=n()}else{if(n=t(),ze===null)throw Error(R(349));Yn&30||fp(r,t,n)}i.memoizedState=n;var o={value:n,getSnapshot:t};return i.queue=o,Lc(hp.bind(null,r,o,e),[e]),r.flags|=2048,Ti(9,pp.bind(null,r,o,n,t),void 0,null),n},useId:function(){var e=zt(),t=ze.identifierPrefix;if(xe){var n=Jt,r=Gt;n=(r&~(1<<32-Ot(r)-1)).toString(32)+n,t=":"+t+"R"+n,n=Ci++,0<n&&(t+="H"+n.toString(32)),t+=":"}else n=uy++,t=":"+t+"r"+n.toString(32)+":";return e.memoizedState=t},unstable_isNewReconciler:!1},hy={readContext:wt,useCallback:Sp,useContext:wt,useEffect:mu,useImperativeHandle:kp,useInsertionEffect:vp,useLayoutEffect:xp,useMemo:jp,useReducer:al,useRef:yp,useState:function(){return al(bi)},useDebugValue:gu,useDeferredValue:function(e){var t=kt();return Ep(t,Re.memoizedState,e)},useTransition:function(){var e=al(bi)[0],t=kt().memoizedState;return[e,t]},useMutableSource:cp,useSyncExternalStore:dp,useId:_p,unstable_isNewReconciler:!1},my={readContext:wt,useCallback:Sp,useContext:wt,useEffect:mu,useImperativeHandle:kp,useInsertionEffect:vp,useLayoutEffect:xp,useMemo:jp,useReducer:ul,useRef:yp,useState:function(){return ul(bi)},useDebugValue:gu,useDeferredValue:function(e){var t=kt();return Re===null?t.memoizedState=e:Ep(t,Re.memoizedState,e)},useTransition:function(){var e=ul(bi)[0],t=kt().memoizedState;return[e,t]},useMutableSource:cp,useSyncExternalStore:dp,useId:_p,unstable_isNewReconciler:!1};function Or(e,t){try{var n="",r=t;do n+=Vm(r),r=r.return;while(r);var i=n}catch(o){i=`
Error generating stack: `+o.message+`
`+o.stack}return{value:e,source:t,stack:i,digest:null}}function cl(e,t,n){return{value:e,source:null,stack:n??null,digest:t??null}}function fa(e,t){try{console.error(t.value)}catch(n){setTimeout(function(){throw n})}}var gy=typeof WeakMap=="function"?WeakMap:Map;function Pp(e,t,n){n=qt(-1,n),n.tag=3,n.payload={element:null};var r=t.value;return n.callback=function(){is||(is=!0,Sa=r),fa(e,t)},n}function Op(e,t,n){n=qt(-1,n),n.tag=3;var r=e.type.getDerivedStateFromError;if(typeof r=="function"){var i=t.value;n.payload=function(){return r(i)},n.callback=function(){fa(e,t)}}var o=e.stateNode;return o!==null&&typeof o.componentDidCatch=="function"&&(n.callback=function(){fa(e,t),typeof r!="function"&&(bn===null?bn=new Set([this]):bn.add(this));var s=t.stack;this.componentDidCatch(t.value,{componentStack:s!==null?s:""})}),n}function zc(e,t,n){var r=e.pingCache;if(r===null){r=e.pingCache=new gy;var i=new Set;r.set(t,i)}else i=r.get(t),i===void 0&&(i=new Set,r.set(t,i));i.has(n)||(i.add(n),e=Oy.bind(null,e,t,n),t.then(e,e))}function Dc(e){do{var t;if((t=e.tag===13)&&(t=e.memoizedState,t=t!==null?t.dehydrated!==null:!0),t)return e;e=e.return}while(e!==null);return null}function Fc(e,t,n,r,i){return e.mode&1?(e.flags|=65536,e.lanes=i,e):(e===t?e.flags|=65536:(e.flags|=128,n.flags|=131072,n.flags&=-52805,n.tag===1&&(n.alternate===null?n.tag=17:(t=qt(-1,1),t.tag=2,Cn(n,t,1))),n.lanes|=1),e)}var yy=on.ReactCurrentOwner,tt=!1;function Xe(e,t,n,r){t.child=e===null?ap(t,null,n,r):Tr(t,e.child,n,r)}function Ic(e,t,n,r,i){n=n.render;var o=t.ref;return Sr(t,i),r=pu(e,t,n,r,o,i),n=hu(),e!==null&&!tt?(t.updateQueue=e.updateQueue,t.flags&=-2053,e.lanes&=~i,rn(e,t,i)):(xe&&n&&tu(t),t.flags|=1,Xe(e,t,r,i),t.child)}function $c(e,t,n,r,i){if(e===null){var o=n.type;return typeof o=="function"&&!Eu(o)&&o.defaultProps===void 0&&n.compare===null&&n.defaultProps===void 0?(t.tag=15,t.type=o,Rp(e,t,o,r,i)):(e=Po(n.type,null,r,t,t.mode,i),e.ref=t.ref,e.return=t,t.child=e)}if(o=e.child,!(e.lanes&i)){var s=o.memoizedProps;if(n=n.compare,n=n!==null?n:wi,n(s,r)&&e.ref===t.ref)return rn(e,t,i)}return t.flags|=1,e=Pn(o,r),e.ref=t.ref,e.return=t,t.child=e}function Rp(e,t,n,r,i){if(e!==null){var o=e.memoizedProps;if(wi(o,r)&&e.ref===t.ref)if(tt=!1,t.pendingProps=r=o,(e.lanes&i)!==0)e.flags&131072&&(tt=!0);else return t.lanes=e.lanes,rn(e,t,i)}return pa(e,t,n,r,i)}function Mp(e,t,n){var r=t.pendingProps,i=r.children,o=e!==null?e.memoizedState:null;if(r.mode==="hidden")if(!(t.mode&1))t.memoizedState={baseLanes:0,cachePool:null,transitions:null},he(mr,st),st|=n;else{if(!(n&1073741824))return e=o!==null?o.baseLanes|n:n,t.lanes=t.childLanes=1073741824,t.memoizedState={baseLanes:e,cachePool:null,transitions:null},t.updateQueue=null,he(mr,st),st|=e,null;t.memoizedState={baseLanes:0,cachePool:null,transitions:null},r=o!==null?o.baseLanes:n,he(mr,st),st|=r}else o!==null?(r=o.baseLanes|n,t.memoizedState=null):r=n,he(mr,st),st|=r;return Xe(e,t,i,n),t.child}function Ap(e,t){var n=t.ref;(e===null&&n!==null||e!==null&&e.ref!==n)&&(t.flags|=512,t.flags|=2097152)}function pa(e,t,n,r,i){var o=rt(n)?Hn:Ke.current;return o=Cr(t,o),Sr(t,i),n=pu(e,t,n,r,o,i),r=hu(),e!==null&&!tt?(t.updateQueue=e.updateQueue,t.flags&=-2053,e.lanes&=~i,rn(e,t,i)):(xe&&r&&tu(t),t.flags|=1,Xe(e,t,n,i),t.child)}function Uc(e,t,n,r,i){if(rt(n)){var o=!0;Ko(t)}else o=!1;if(Sr(t,i),t.stateNode===null)Co(e,t),sp(t,n,r),da(t,n,r,i),r=!0;else if(e===null){var s=t.stateNode,a=t.memoizedProps;s.props=a;var u=s.context,c=n.contextType;typeof c=="object"&&c!==null?c=wt(c):(c=rt(n)?Hn:Ke.current,c=Cr(t,c));var m=n.getDerivedStateFromProps,f=typeof m=="function"||typeof s.getSnapshotBeforeUpdate=="function";f||typeof s.UNSAFE_componentWillReceiveProps!="function"&&typeof s.componentWillReceiveProps!="function"||(a!==r||u!==c)&&Mc(t,s,r,c),mn=!1;var h=t.memoizedState;s.state=h,Zo(t,r,s,i),u=t.memoizedState,a!==r||h!==u||nt.current||mn?(typeof m=="function"&&(ca(t,n,m,r),u=t.memoizedState),(a=mn||Rc(t,n,a,r,h,u,c))?(f||typeof s.UNSAFE_componentWillMount!="function"&&typeof s.componentWillMount!="function"||(typeof s.componentWillMount=="function"&&s.componentWillMount(),typeof s.UNSAFE_componentWillMount=="function"&&s.UNSAFE_componentWillMount()),typeof s.componentDidMount=="function"&&(t.flags|=4194308)):(typeof s.componentDidMount=="function"&&(t.flags|=4194308),t.memoizedProps=r,t.memoizedState=u),s.props=r,s.state=u,s.context=c,r=a):(typeof s.componentDidMount=="function"&&(t.flags|=4194308),r=!1)}else{s=t.stateNode,ip(e,t),a=t.memoizedProps,c=t.type===t.elementType?a:_t(t.type,a),s.props=c,f=t.pendingProps,h=s.context,u=n.contextType,typeof u=="object"&&u!==null?u=wt(u):(u=rt(n)?Hn:Ke.current,u=Cr(t,u));var w=n.getDerivedStateFromProps;(m=typeof w=="function"||typeof s.getSnapshotBeforeUpdate=="function")||typeof s.UNSAFE_componentWillReceiveProps!="function"&&typeof s.componentWillReceiveProps!="function"||(a!==f||h!==u)&&Mc(t,s,r,u),mn=!1,h=t.memoizedState,s.state=h,Zo(t,r,s,i);var y=t.memoizedState;a!==f||h!==y||nt.current||mn?(typeof w=="function"&&(ca(t,n,w,r),y=t.memoizedState),(c=mn||Rc(t,n,c,r,h,y,u)||!1)?(m||typeof s.UNSAFE_componentWillUpdate!="function"&&typeof s.componentWillUpdate!="function"||(typeof s.componentWillUpdate=="function"&&s.componentWillUpdate(r,y,u),typeof s.UNSAFE_componentWillUpdate=="function"&&s.UNSAFE_componentWillUpdate(r,y,u)),typeof s.componentDidUpdate=="function"&&(t.flags|=4),typeof s.getSnapshotBeforeUpdate=="function"&&(t.flags|=1024)):(typeof s.componentDidUpdate!="function"||a===e.memoizedProps&&h===e.memoizedState||(t.flags|=4),typeof s.getSnapshotBeforeUpdate!="function"||a===e.memoizedProps&&h===e.memoizedState||(t.flags|=1024),t.memoizedProps=r,t.memoizedState=y),s.props=r,s.state=y,s.context=u,r=c):(typeof s.componentDidUpdate!="function"||a===e.memoizedProps&&h===e.memoizedState||(t.flags|=4),typeof s.getSnapshotBeforeUpdate!="function"||a===e.memoizedProps&&h===e.memoizedState||(t.flags|=1024),r=!1)}return ha(e,t,n,r,o,i)}function ha(e,t,n,r,i,o){Ap(e,t);var s=(t.flags&128)!==0;if(!r&&!s)return i&&Cc(t,n,!1),rn(e,t,o);r=t.stateNode,yy.current=t;var a=s&&typeof n.getDerivedStateFromError!="function"?null:r.render();return t.flags|=1,e!==null&&s?(t.child=Tr(t,e.child,null,o),t.child=Tr(t,null,a,o)):Xe(e,t,a,o),t.memoizedState=r.state,i&&Cc(t,n,!0),t.child}function Np(e){var t=e.stateNode;t.pendingContext?_c(e,t.pendingContext,t.pendingContext!==t.context):t.context&&_c(e,t.context,!1),uu(e,t.containerInfo)}function Bc(e,t,n,r,i){return br(),ru(i),t.flags|=256,Xe(e,t,n,r),t.child}var ma={dehydrated:null,treeContext:null,retryLane:0};function ga(e){return{baseLanes:e,cachePool:null,transitions:null}}function Lp(e,t,n){var r=t.pendingProps,i=we.current,o=!1,s=(t.flags&128)!==0,a;if((a=s)||(a=e!==null&&e.memoizedState===null?!1:(i&2)!==0),a?(o=!0,t.flags&=-129):(e===null||e.memoizedState!==null)&&(i|=1),he(we,i&1),e===null)return aa(t),e=t.memoizedState,e!==null&&(e=e.dehydrated,e!==null)?(t.mode&1?e.data==="$!"?t.lanes=8:t.lanes=1073741824:t.lanes=1,null):(s=r.children,e=r.fallback,o?(r=t.mode,o=t.child,s={mode:"hidden",children:s},!(r&1)&&o!==null?(o.childLanes=0,o.pendingProps=s):o=Cs(s,r,0,null),e=Wn(e,r,n,null),o.return=t,e.return=t,o.sibling=e,t.child=o,t.child.memoizedState=ga(n),t.memoizedState=ma,e):yu(t,s));if(i=e.memoizedState,i!==null&&(a=i.dehydrated,a!==null))return vy(e,t,s,r,a,i,n);if(o){o=r.fallback,s=t.mode,i=e.child,a=i.sibling;var u={mode:"hidden",children:r.children};return!(s&1)&&t.child!==i?(r=t.child,r.childLanes=0,r.pendingProps=u,t.deletions=null):(r=Pn(i,u),r.subtreeFlags=i.subtreeFlags&14680064),a!==null?o=Pn(a,o):(o=Wn(o,s,n,null),o.flags|=2),o.return=t,r.return=t,r.sibling=o,t.child=r,r=o,o=t.child,s=e.child.memoizedState,s=s===null?ga(n):{baseLanes:s.baseLanes|n,cachePool:null,transitions:s.transitions},o.memoizedState=s,o.childLanes=e.childLanes&~n,t.memoizedState=ma,r}return o=e.child,e=o.sibling,r=Pn(o,{mode:"visible",children:r.children}),!(t.mode&1)&&(r.lanes=n),r.return=t,r.sibling=null,e!==null&&(n=t.deletions,n===null?(t.deletions=[e],t.flags|=16):n.push(e)),t.child=r,t.memoizedState=null,r}function yu(e,t){return t=Cs({mode:"visible",children:t},e.mode,0,null),t.return=e,e.child=t}function oo(e,t,n,r){return r!==null&&ru(r),Tr(t,e.child,null,n),e=yu(t,t.pendingProps.children),e.flags|=2,t.memoizedState=null,e}function vy(e,t,n,r,i,o,s){if(n)return t.flags&256?(t.flags&=-257,r=cl(Error(R(422))),oo(e,t,s,r)):t.memoizedState!==null?(t.child=e.child,t.flags|=128,null):(o=r.fallback,i=t.mode,r=Cs({mode:"visible",children:r.children},i,0,null),o=Wn(o,i,s,null),o.flags|=2,r.return=t,o.return=t,r.sibling=o,t.child=r,t.mode&1&&Tr(t,e.child,null,s),t.child.memoizedState=ga(s),t.memoizedState=ma,o);if(!(t.mode&1))return oo(e,t,s,null);if(i.data==="$!"){if(r=i.nextSibling&&i.nextSibling.dataset,r)var a=r.dgst;return r=a,o=Error(R(419)),r=cl(o,r,void 0),oo(e,t,s,r)}if(a=(s&e.childLanes)!==0,tt||a){if(r=ze,r!==null){switch(s&-s){case 4:i=2;break;case 16:i=8;break;case 64:case 128:case 256:case 512:case 1024:case 2048:case 4096:case 8192:case 16384:case 32768:case 65536:case 131072:case 262144:case 524288:case 1048576:case 2097152:case 4194304:case 8388608:case 16777216:case 33554432:case 67108864:i=32;break;case 536870912:i=268435456;break;default:i=0}i=i&(r.suspendedLanes|s)?0:i,i!==0&&i!==o.retryLane&&(o.retryLane=i,nn(e,i),Rt(r,e,i,-1))}return ju(),r=cl(Error(R(421))),oo(e,t,s,r)}return i.data==="$?"?(t.flags|=128,t.child=e.child,t=Ry.bind(null,e),i._reactRetry=t,null):(e=o.treeContext,lt=_n(i.nextSibling),at=t,xe=!0,Tt=null,e!==null&&(mt[gt++]=Gt,mt[gt++]=Jt,mt[gt++]=Qn,Gt=e.id,Jt=e.overflow,Qn=t),t=yu(t,r.children),t.flags|=4096,t)}function Vc(e,t,n){e.lanes|=t;var r=e.alternate;r!==null&&(r.lanes|=t),ua(e.return,t,n)}function dl(e,t,n,r,i){var o=e.memoizedState;o===null?e.memoizedState={isBackwards:t,rendering:null,renderingStartTime:0,last:r,tail:n,tailMode:i}:(o.isBackwards=t,o.rendering=null,o.renderingStartTime=0,o.last=r,o.tail=n,o.tailMode=i)}function zp(e,t,n){var r=t.pendingProps,i=r.revealOrder,o=r.tail;if(Xe(e,t,r.children,n),r=we.current,r&2)r=r&1|2,t.flags|=128;else{if(e!==null&&e.flags&128)e:for(e=t.child;e!==null;){if(e.tag===13)e.memoizedState!==null&&Vc(e,n,t);else if(e.tag===19)Vc(e,n,t);else if(e.child!==null){e.child.return=e,e=e.child;continue}if(e===t)break e;for(;e.sibling===null;){if(e.return===null||e.return===t)break e;e=e.return}e.sibling.return=e.return,e=e.sibling}r&=1}if(he(we,r),!(t.mode&1))t.memoizedState=null;else switch(i){case"forwards":for(n=t.child,i=null;n!==null;)e=n.alternate,e!==null&&es(e)===null&&(i=n),n=n.sibling;n=i,n===null?(i=t.child,t.child=null):(i=n.sibling,n.sibling=null),dl(t,!1,i,n,o);break;case"backwards":for(n=null,i=t.child,t.child=null;i!==null;){if(e=i.alternate,e!==null&&es(e)===null){t.child=i;break}e=i.sibling,i.sibling=n,n=i,i=e}dl(t,!0,n,null,o);break;case"together":dl(t,!1,null,null,void 0);break;default:t.memoizedState=null}return t.child}function Co(e,t){!(t.mode&1)&&e!==null&&(e.alternate=null,t.alternate=null,t.flags|=2)}function rn(e,t,n){if(e!==null&&(t.dependencies=e.dependencies),Kn|=t.lanes,!(n&t.childLanes))return null;if(e!==null&&t.child!==e.child)throw Error(R(153));if(t.child!==null){for(e=t.child,n=Pn(e,e.pendingProps),t.child=n,n.return=t;e.sibling!==null;)e=e.sibling,n=n.sibling=Pn(e,e.pendingProps),n.return=t;n.sibling=null}return t.child}function xy(e,t,n){switch(t.tag){case 3:Np(t),br();break;case 5:up(t);break;case 1:rt(t.type)&&Ko(t);break;case 4:uu(t,t.stateNode.containerInfo);break;case 10:var r=t.type._context,i=t.memoizedProps.value;he(Jo,r._currentValue),r._currentValue=i;break;case 13:if(r=t.memoizedState,r!==null)return r.dehydrated!==null?(he(we,we.current&1),t.flags|=128,null):n&t.child.childLanes?Lp(e,t,n):(he(we,we.current&1),e=rn(e,t,n),e!==null?e.sibling:null);he(we,we.current&1);break;case 19:if(r=(n&t.childLanes)!==0,e.flags&128){if(r)return zp(e,t,n);t.flags|=128}if(i=t.memoizedState,i!==null&&(i.rendering=null,i.tail=null,i.lastEffect=null),he(we,we.current),r)break;return null;case 22:case 23:return t.lanes=0,Mp(e,t,n)}return rn(e,t,n)}var Dp,ya,Fp,Ip;Dp=function(e,t){for(var n=t.child;n!==null;){if(n.tag===5||n.tag===6)e.appendChild(n.stateNode);else if(n.tag!==4&&n.child!==null){n.child.return=n,n=n.child;continue}if(n===t)break;for(;n.sibling===null;){if(n.return===null||n.return===t)return;n=n.return}n.sibling.return=n.return,n=n.sibling}};ya=function(){};Fp=function(e,t,n,r){var i=e.memoizedProps;if(i!==r){e=t.stateNode,$n(Vt.current);var o=null;switch(n){case"input":i=Il(e,i),r=Il(e,r),o=[];break;case"select":i=Se({},i,{value:void 0}),r=Se({},r,{value:void 0}),o=[];break;case"textarea":i=Bl(e,i),r=Bl(e,r),o=[];break;default:typeof i.onClick!="function"&&typeof r.onClick=="function"&&(e.onclick=Qo)}Wl(n,r);var s;n=null;for(c in i)if(!r.hasOwnProperty(c)&&i.hasOwnProperty(c)&&i[c]!=null)if(c==="style"){var a=i[c];for(s in a)a.hasOwnProperty(s)&&(n||(n={}),n[s]="")}else c!=="dangerouslySetInnerHTML"&&c!=="children"&&c!=="suppressContentEditableWarning"&&c!=="suppressHydrationWarning"&&c!=="autoFocus"&&(pi.hasOwnProperty(c)?o||(o=[]):(o=o||[]).push(c,null));for(c in r){var u=r[c];if(a=i!=null?i[c]:void 0,r.hasOwnProperty(c)&&u!==a&&(u!=null||a!=null))if(c==="style")if(a){for(s in a)!a.hasOwnProperty(s)||u&&u.hasOwnProperty(s)||(n||(n={}),n[s]="");for(s in u)u.hasOwnProperty(s)&&a[s]!==u[s]&&(n||(n={}),n[s]=u[s])}else n||(o||(o=[]),o.push(c,n)),n=u;else c==="dangerouslySetInnerHTML"?(u=u?u.__html:void 0,a=a?a.__html:void 0,u!=null&&a!==u&&(o=o||[]).push(c,u)):c==="children"?typeof u!="string"&&typeof u!="number"||(o=o||[]).push(c,""+u):c!=="suppressContentEditableWarning"&&c!=="suppressHydrationWarning"&&(pi.hasOwnProperty(c)?(u!=null&&c==="onScroll"&&ge("scroll",e),o||a===u||(o=[])):(o=o||[]).push(c,u))}n&&(o=o||[]).push("style",n);var c=o;(t.updateQueue=c)&&(t.flags|=4)}};Ip=function(e,t,n,r){n!==r&&(t.flags|=4)};function Hr(e,t){if(!xe)switch(e.tailMode){case"hidden":t=e.tail;for(var n=null;t!==null;)t.alternate!==null&&(n=t),t=t.sibling;n===null?e.tail=null:n.sibling=null;break;case"collapsed":n=e.tail;for(var r=null;n!==null;)n.alternate!==null&&(r=n),n=n.sibling;r===null?t||e.tail===null?e.tail=null:e.tail.sibling=null:r.sibling=null}}function He(e){var t=e.alternate!==null&&e.alternate.child===e.child,n=0,r=0;if(t)for(var i=e.child;i!==null;)n|=i.lanes|i.childLanes,r|=i.subtreeFlags&14680064,r|=i.flags&14680064,i.return=e,i=i.sibling;else for(i=e.child;i!==null;)n|=i.lanes|i.childLanes,r|=i.subtreeFlags,r|=i.flags,i.return=e,i=i.sibling;return e.subtreeFlags|=r,e.childLanes=n,t}function wy(e,t,n){var r=t.pendingProps;switch(nu(t),t.tag){case 2:case 16:case 15:case 0:case 11:case 7:case 8:case 12:case 9:case 14:return He(t),null;case 1:return rt(t.type)&&Yo(),He(t),null;case 3:return r=t.stateNode,Pr(),ye(nt),ye(Ke),du(),r.pendingContext&&(r.context=r.pendingContext,r.pendingContext=null),(e===null||e.child===null)&&(ro(t)?t.flags|=4:e===null||e.memoizedState.isDehydrated&&!(t.flags&256)||(t.flags|=1024,Tt!==null&&(_a(Tt),Tt=null))),ya(e,t),He(t),null;case 5:cu(t);var i=$n(_i.current);if(n=t.type,e!==null&&t.stateNode!=null)Fp(e,t,n,r,i),e.ref!==t.ref&&(t.flags|=512,t.flags|=2097152);else{if(!r){if(t.stateNode===null)throw Error(R(166));return He(t),null}if(e=$n(Vt.current),ro(t)){r=t.stateNode,n=t.type;var o=t.memoizedProps;switch(r[It]=t,r[ji]=o,e=(t.mode&1)!==0,n){case"dialog":ge("cancel",r),ge("close",r);break;case"iframe":case"object":case"embed":ge("load",r);break;case"video":case"audio":for(i=0;i<ri.length;i++)ge(ri[i],r);break;case"source":ge("error",r);break;case"img":case"image":case"link":ge("error",r),ge("load",r);break;case"details":ge("toggle",r);break;case"input":qu(r,o),ge("invalid",r);break;case"select":r._wrapperState={wasMultiple:!!o.multiple},ge("invalid",r);break;case"textarea":ec(r,o),ge("invalid",r)}Wl(n,o),i=null;for(var s in o)if(o.hasOwnProperty(s)){var a=o[s];s==="children"?typeof a=="string"?r.textContent!==a&&(o.suppressHydrationWarning!==!0&&no(r.textContent,a,e),i=["children",a]):typeof a=="number"&&r.textContent!==""+a&&(o.suppressHydrationWarning!==!0&&no(r.textContent,a,e),i=["children",""+a]):pi.hasOwnProperty(s)&&a!=null&&s==="onScroll"&&ge("scroll",r)}switch(n){case"input":Ki(r),Zu(r,o,!0);break;case"textarea":Ki(r),tc(r);break;case"select":case"option":break;default:typeof o.onClick=="function"&&(r.onclick=Qo)}r=i,t.updateQueue=r,r!==null&&(t.flags|=4)}else{s=i.nodeType===9?i:i.ownerDocument,e==="http://www.w3.org/1999/xhtml"&&(e=ff(n)),e==="http://www.w3.org/1999/xhtml"?n==="script"?(e=s.createElement("div"),e.innerHTML="<script><\/script>",e=e.removeChild(e.firstChild)):typeof r.is=="string"?e=s.createElement(n,{is:r.is}):(e=s.createElement(n),n==="select"&&(s=e,r.multiple?s.multiple=!0:r.size&&(s.size=r.size))):e=s.createElementNS(e,n),e[It]=t,e[ji]=r,Dp(e,t,!1,!1),t.stateNode=e;e:{switch(s=Hl(n,r),n){case"dialog":ge("cancel",e),ge("close",e),i=r;break;case"iframe":case"object":case"embed":ge("load",e),i=r;break;case"video":case"audio":for(i=0;i<ri.length;i++)ge(ri[i],e);i=r;break;case"source":ge("error",e),i=r;break;case"img":case"image":case"link":ge("error",e),ge("load",e),i=r;break;case"details":ge("toggle",e),i=r;break;case"input":qu(e,r),i=Il(e,r),ge("invalid",e);break;case"option":i=r;break;case"select":e._wrapperState={wasMultiple:!!r.multiple},i=Se({},r,{value:void 0}),ge("invalid",e);break;case"textarea":ec(e,r),i=Bl(e,r),ge("invalid",e);break;default:i=r}Wl(n,i),a=i;for(o in a)if(a.hasOwnProperty(o)){var u=a[o];o==="style"?mf(e,u):o==="dangerouslySetInnerHTML"?(u=u?u.__html:void 0,u!=null&&pf(e,u)):o==="children"?typeof u=="string"?(n!=="textarea"||u!=="")&&hi(e,u):typeof u=="number"&&hi(e,""+u):o!=="suppressContentEditableWarning"&&o!=="suppressHydrationWarning"&&o!=="autoFocus"&&(pi.hasOwnProperty(o)?u!=null&&o==="onScroll"&&ge("scroll",e):u!=null&&Ua(e,o,u,s))}switch(n){case"input":Ki(e),Zu(e,r,!1);break;case"textarea":Ki(e),tc(e);break;case"option":r.value!=null&&e.setAttribute("value",""+On(r.value));break;case"select":e.multiple=!!r.multiple,o=r.value,o!=null?vr(e,!!r.multiple,o,!1):r.defaultValue!=null&&vr(e,!!r.multiple,r.defaultValue,!0);break;default:typeof i.onClick=="function"&&(e.onclick=Qo)}switch(n){case"button":case"input":case"select":case"textarea":r=!!r.autoFocus;break e;case"img":r=!0;break e;default:r=!1}}r&&(t.flags|=4)}t.ref!==null&&(t.flags|=512,t.flags|=2097152)}return He(t),null;case 6:if(e&&t.stateNode!=null)Ip(e,t,e.memoizedProps,r);else{if(typeof r!="string"&&t.stateNode===null)throw Error(R(166));if(n=$n(_i.current),$n(Vt.current),ro(t)){if(r=t.stateNode,n=t.memoizedProps,r[It]=t,(o=r.nodeValue!==n)&&(e=at,e!==null))switch(e.tag){case 3:no(r.nodeValue,n,(e.mode&1)!==0);break;case 5:e.memoizedProps.suppressHydrationWarning!==!0&&no(r.nodeValue,n,(e.mode&1)!==0)}o&&(t.flags|=4)}else r=(n.nodeType===9?n:n.ownerDocument).createTextNode(r),r[It]=t,t.stateNode=r}return He(t),null;case 13:if(ye(we),r=t.memoizedState,e===null||e.memoizedState!==null&&e.memoizedState.dehydrated!==null){if(xe&&lt!==null&&t.mode&1&&!(t.flags&128))np(),br(),t.flags|=98560,o=!1;else if(o=ro(t),r!==null&&r.dehydrated!==null){if(e===null){if(!o)throw Error(R(318));if(o=t.memoizedState,o=o!==null?o.dehydrated:null,!o)throw Error(R(317));o[It]=t}else br(),!(t.flags&128)&&(t.memoizedState=null),t.flags|=4;He(t),o=!1}else Tt!==null&&(_a(Tt),Tt=null),o=!0;if(!o)return t.flags&65536?t:null}return t.flags&128?(t.lanes=n,t):(r=r!==null,r!==(e!==null&&e.memoizedState!==null)&&r&&(t.child.flags|=8192,t.mode&1&&(e===null||we.current&1?Me===0&&(Me=3):ju())),t.updateQueue!==null&&(t.flags|=4),He(t),null);case 4:return Pr(),ya(e,t),e===null&&ki(t.stateNode.containerInfo),He(t),null;case 10:return su(t.type._context),He(t),null;case 17:return rt(t.type)&&Yo(),He(t),null;case 19:if(ye(we),o=t.memoizedState,o===null)return He(t),null;if(r=(t.flags&128)!==0,s=o.rendering,s===null)if(r)Hr(o,!1);else{if(Me!==0||e!==null&&e.flags&128)for(e=t.child;e!==null;){if(s=es(e),s!==null){for(t.flags|=128,Hr(o,!1),r=s.updateQueue,r!==null&&(t.updateQueue=r,t.flags|=4),t.subtreeFlags=0,r=n,n=t.child;n!==null;)o=n,e=r,o.flags&=14680066,s=o.alternate,s===null?(o.childLanes=0,o.lanes=e,o.child=null,o.subtreeFlags=0,o.memoizedProps=null,o.memoizedState=null,o.updateQueue=null,o.dependencies=null,o.stateNode=null):(o.childLanes=s.childLanes,o.lanes=s.lanes,o.child=s.child,o.subtreeFlags=0,o.deletions=null,o.memoizedProps=s.memoizedProps,o.memoizedState=s.memoizedState,o.updateQueue=s.updateQueue,o.type=s.type,e=s.dependencies,o.dependencies=e===null?null:{lanes:e.lanes,firstContext:e.firstContext}),n=n.sibling;return he(we,we.current&1|2),t.child}e=e.sibling}o.tail!==null&&_e()>Rr&&(t.flags|=128,r=!0,Hr(o,!1),t.lanes=4194304)}else{if(!r)if(e=es(s),e!==null){if(t.flags|=128,r=!0,n=e.updateQueue,n!==null&&(t.updateQueue=n,t.flags|=4),Hr(o,!0),o.tail===null&&o.tailMode==="hidden"&&!s.alternate&&!xe)return He(t),null}else 2*_e()-o.renderingStartTime>Rr&&n!==1073741824&&(t.flags|=128,r=!0,Hr(o,!1),t.lanes=4194304);o.isBackwards?(s.sibling=t.child,t.child=s):(n=o.last,n!==null?n.sibling=s:t.child=s,o.last=s)}return o.tail!==null?(t=o.tail,o.rendering=t,o.tail=t.sibling,o.renderingStartTime=_e(),t.sibling=null,n=we.current,he(we,r?n&1|2:n&1),t):(He(t),null);case 22:case 23:return Su(),r=t.memoizedState!==null,e!==null&&e.memoizedState!==null!==r&&(t.flags|=8192),r&&t.mode&1?st&1073741824&&(He(t),t.subtreeFlags&6&&(t.flags|=8192)):He(t),null;case 24:return null;case 25:return null}throw Error(R(156,t.tag))}function ky(e,t){switch(nu(t),t.tag){case 1:return rt(t.type)&&Yo(),e=t.flags,e&65536?(t.flags=e&-65537|128,t):null;case 3:return Pr(),ye(nt),ye(Ke),du(),e=t.flags,e&65536&&!(e&128)?(t.flags=e&-65537|128,t):null;case 5:return cu(t),null;case 13:if(ye(we),e=t.memoizedState,e!==null&&e.dehydrated!==null){if(t.alternate===null)throw Error(R(340));br()}return e=t.flags,e&65536?(t.flags=e&-65537|128,t):null;case 19:return ye(we),null;case 4:return Pr(),null;case 10:return su(t.type._context),null;case 22:case 23:return Su(),null;case 24:return null;default:return null}}var so=!1,Ye=!1,Sy=typeof WeakSet=="function"?WeakSet:Set,U=null;function hr(e,t){var n=e.ref;if(n!==null)if(typeof n=="function")try{n(null)}catch(r){je(e,t,r)}else n.current=null}function va(e,t,n){try{n()}catch(r){je(e,t,r)}}var Wc=!1;function jy(e,t){if(ta=Vo,e=Vf(),eu(e)){if("selectionStart"in e)var n={start:e.selectionStart,end:e.selectionEnd};else e:{n=(n=e.ownerDocument)&&n.defaultView||window;var r=n.getSelection&&n.getSelection();if(r&&r.rangeCount!==0){n=r.anchorNode;var i=r.anchorOffset,o=r.focusNode;r=r.focusOffset;try{n.nodeType,o.nodeType}catch{n=null;break e}var s=0,a=-1,u=-1,c=0,m=0,f=e,h=null;t:for(;;){for(var w;f!==n||i!==0&&f.nodeType!==3||(a=s+i),f!==o||r!==0&&f.nodeType!==3||(u=s+r),f.nodeType===3&&(s+=f.nodeValue.length),(w=f.firstChild)!==null;)h=f,f=w;for(;;){if(f===e)break t;if(h===n&&++c===i&&(a=s),h===o&&++m===r&&(u=s),(w=f.nextSibling)!==null)break;f=h,h=f.parentNode}f=w}n=a===-1||u===-1?null:{start:a,end:u}}else n=null}n=n||{start:0,end:0}}else n=null;for(na={focusedElem:e,selectionRange:n},Vo=!1,U=t;U!==null;)if(t=U,e=t.child,(t.subtreeFlags&1028)!==0&&e!==null)e.return=t,U=e;else for(;U!==null;){t=U;try{var y=t.alternate;if(t.flags&1024)switch(t.tag){case 0:case 11:case 15:break;case 1:if(y!==null){var v=y.memoizedProps,b=y.memoizedState,p=t.stateNode,d=p.getSnapshotBeforeUpdate(t.elementType===t.type?v:_t(t.type,v),b);p.__reactInternalSnapshotBeforeUpdate=d}break;case 3:var g=t.stateNode.containerInfo;g.nodeType===1?g.textContent="":g.nodeType===9&&g.documentElement&&g.removeChild(g.documentElement);break;case 5:case 6:case 4:case 17:break;default:throw Error(R(163))}}catch(k){je(t,t.return,k)}if(e=t.sibling,e!==null){e.return=t.return,U=e;break}U=t.return}return y=Wc,Wc=!1,y}function ci(e,t,n){var r=t.updateQueue;if(r=r!==null?r.lastEffect:null,r!==null){var i=r=r.next;do{if((i.tag&e)===e){var o=i.destroy;i.destroy=void 0,o!==void 0&&va(t,n,o)}i=i.next}while(i!==r)}}function Es(e,t){if(t=t.updateQueue,t=t!==null?t.lastEffect:null,t!==null){var n=t=t.next;do{if((n.tag&e)===e){var r=n.create;n.destroy=r()}n=n.next}while(n!==t)}}function xa(e){var t=e.ref;if(t!==null){var n=e.stateNode;switch(e.tag){case 5:e=n;break;default:e=n}typeof t=="function"?t(e):t.current=e}}function $p(e){var t=e.alternate;t!==null&&(e.alternate=null,$p(t)),e.child=null,e.deletions=null,e.sibling=null,e.tag===5&&(t=e.stateNode,t!==null&&(delete t[It],delete t[ji],delete t[oa],delete t[oy],delete t[sy])),e.stateNode=null,e.return=null,e.dependencies=null,e.memoizedProps=null,e.memoizedState=null,e.pendingProps=null,e.stateNode=null,e.updateQueue=null}function Up(e){return e.tag===5||e.tag===3||e.tag===4}function Hc(e){e:for(;;){for(;e.sibling===null;){if(e.return===null||Up(e.return))return null;e=e.return}for(e.sibling.return=e.return,e=e.sibling;e.tag!==5&&e.tag!==6&&e.tag!==18;){if(e.flags&2||e.child===null||e.tag===4)continue e;e.child.return=e,e=e.child}if(!(e.flags&2))return e.stateNode}}function wa(e,t,n){var r=e.tag;if(r===5||r===6)e=e.stateNode,t?n.nodeType===8?n.parentNode.insertBefore(e,t):n.insertBefore(e,t):(n.nodeType===8?(t=n.parentNode,t.insertBefore(e,n)):(t=n,t.appendChild(e)),n=n._reactRootContainer,n!=null||t.onclick!==null||(t.onclick=Qo));else if(r!==4&&(e=e.child,e!==null))for(wa(e,t,n),e=e.sibling;e!==null;)wa(e,t,n),e=e.sibling}function ka(e,t,n){var r=e.tag;if(r===5||r===6)e=e.stateNode,t?n.insertBefore(e,t):n.appendChild(e);else if(r!==4&&(e=e.child,e!==null))for(ka(e,t,n),e=e.sibling;e!==null;)ka(e,t,n),e=e.sibling}var Ie=null,Ct=!1;function ln(e,t,n){for(n=n.child;n!==null;)Bp(e,t,n),n=n.sibling}function Bp(e,t,n){if(Bt&&typeof Bt.onCommitFiberUnmount=="function")try{Bt.onCommitFiberUnmount(gs,n)}catch{}switch(n.tag){case 5:Ye||hr(n,t);case 6:var r=Ie,i=Ct;Ie=null,ln(e,t,n),Ie=r,Ct=i,Ie!==null&&(Ct?(e=Ie,n=n.stateNode,e.nodeType===8?e.parentNode.removeChild(n):e.removeChild(n)):Ie.removeChild(n.stateNode));break;case 18:Ie!==null&&(Ct?(e=Ie,n=n.stateNode,e.nodeType===8?il(e.parentNode,n):e.nodeType===1&&il(e,n),vi(e)):il(Ie,n.stateNode));break;case 4:r=Ie,i=Ct,Ie=n.stateNode.containerInfo,Ct=!0,ln(e,t,n),Ie=r,Ct=i;break;case 0:case 11:case 14:case 15:if(!Ye&&(r=n.updateQueue,r!==null&&(r=r.lastEffect,r!==null))){i=r=r.next;do{var o=i,s=o.destroy;o=o.tag,s!==void 0&&(o&2||o&4)&&va(n,t,s),i=i.next}while(i!==r)}ln(e,t,n);break;case 1:if(!Ye&&(hr(n,t),r=n.stateNode,typeof r.componentWillUnmount=="function"))try{r.props=n.memoizedProps,r.state=n.memoizedState,r.componentWillUnmount()}catch(a){je(n,t,a)}ln(e,t,n);break;case 21:ln(e,t,n);break;case 22:n.mode&1?(Ye=(r=Ye)||n.memoizedState!==null,ln(e,t,n),Ye=r):ln(e,t,n);break;default:ln(e,t,n)}}function Qc(e){var t=e.updateQueue;if(t!==null){e.updateQueue=null;var n=e.stateNode;n===null&&(n=e.stateNode=new Sy),t.forEach(function(r){var i=My.bind(null,e,r);n.has(r)||(n.add(r),r.then(i,i))})}}function jt(e,t){var n=t.deletions;if(n!==null)for(var r=0;r<n.length;r++){var i=n[r];try{var o=e,s=t,a=s;e:for(;a!==null;){switch(a.tag){case 5:Ie=a.stateNode,Ct=!1;break e;case 3:Ie=a.stateNode.containerInfo,Ct=!0;break e;case 4:Ie=a.stateNode.containerInfo,Ct=!0;break e}a=a.return}if(Ie===null)throw Error(R(160));Bp(o,s,i),Ie=null,Ct=!1;var u=i.alternate;u!==null&&(u.return=null),i.return=null}catch(c){je(i,t,c)}}if(t.subtreeFlags&12854)for(t=t.child;t!==null;)Vp(t,e),t=t.sibling}function Vp(e,t){var n=e.alternate,r=e.flags;switch(e.tag){case 0:case 11:case 14:case 15:if(jt(t,e),Nt(e),r&4){try{ci(3,e,e.return),Es(3,e)}catch(v){je(e,e.return,v)}try{ci(5,e,e.return)}catch(v){je(e,e.return,v)}}break;case 1:jt(t,e),Nt(e),r&512&&n!==null&&hr(n,n.return);break;case 5:if(jt(t,e),Nt(e),r&512&&n!==null&&hr(n,n.return),e.flags&32){var i=e.stateNode;try{hi(i,"")}catch(v){je(e,e.return,v)}}if(r&4&&(i=e.stateNode,i!=null)){var o=e.memoizedProps,s=n!==null?n.memoizedProps:o,a=e.type,u=e.updateQueue;if(e.updateQueue=null,u!==null)try{a==="input"&&o.type==="radio"&&o.name!=null&&cf(i,o),Hl(a,s);var c=Hl(a,o);for(s=0;s<u.length;s+=2){var m=u[s],f=u[s+1];m==="style"?mf(i,f):m==="dangerouslySetInnerHTML"?pf(i,f):m==="children"?hi(i,f):Ua(i,m,f,c)}switch(a){case"input":$l(i,o);break;case"textarea":df(i,o);break;case"select":var h=i._wrapperState.wasMultiple;i._wrapperState.wasMultiple=!!o.multiple;var w=o.value;w!=null?vr(i,!!o.multiple,w,!1):h!==!!o.multiple&&(o.defaultValue!=null?vr(i,!!o.multiple,o.defaultValue,!0):vr(i,!!o.multiple,o.multiple?[]:"",!1))}i[ji]=o}catch(v){je(e,e.return,v)}}break;case 6:if(jt(t,e),Nt(e),r&4){if(e.stateNode===null)throw Error(R(162));i=e.stateNode,o=e.memoizedProps;try{i.nodeValue=o}catch(v){je(e,e.return,v)}}break;case 3:if(jt(t,e),Nt(e),r&4&&n!==null&&n.memoizedState.isDehydrated)try{vi(t.containerInfo)}catch(v){je(e,e.return,v)}break;case 4:jt(t,e),Nt(e);break;case 13:jt(t,e),Nt(e),i=e.child,i.flags&8192&&(o=i.memoizedState!==null,i.stateNode.isHidden=o,!o||i.alternate!==null&&i.alternate.memoizedState!==null||(wu=_e())),r&4&&Qc(e);break;case 22:if(m=n!==null&&n.memoizedState!==null,e.mode&1?(Ye=(c=Ye)||m,jt(t,e),Ye=c):jt(t,e),Nt(e),r&8192){if(c=e.memoizedState!==null,(e.stateNode.isHidden=c)&&!m&&e.mode&1)for(U=e,m=e.child;m!==null;){for(f=U=m;U!==null;){switch(h=U,w=h.child,h.tag){case 0:case 11:case 14:case 15:ci(4,h,h.return);break;case 1:hr(h,h.return);var y=h.stateNode;if(typeof y.componentWillUnmount=="function"){r=h,n=h.return;try{t=r,y.props=t.memoizedProps,y.state=t.memoizedState,y.componentWillUnmount()}catch(v){je(r,n,v)}}break;case 5:hr(h,h.return);break;case 22:if(h.memoizedState!==null){Kc(f);continue}}w!==null?(w.return=h,U=w):Kc(f)}m=m.sibling}e:for(m=null,f=e;;){if(f.tag===5){if(m===null){m=f;try{i=f.stateNode,c?(o=i.style,typeof o.setProperty=="function"?o.setProperty("display","none","important"):o.display="none"):(a=f.stateNode,u=f.memoizedProps.style,s=u!=null&&u.hasOwnProperty("display")?u.display:null,a.style.display=hf("display",s))}catch(v){je(e,e.return,v)}}}else if(f.tag===6){if(m===null)try{f.stateNode.nodeValue=c?"":f.memoizedProps}catch(v){je(e,e.return,v)}}else if((f.tag!==22&&f.tag!==23||f.memoizedState===null||f===e)&&f.child!==null){f.child.return=f,f=f.child;continue}if(f===e)break e;for(;f.sibling===null;){if(f.return===null||f.return===e)break e;m===f&&(m=null),f=f.return}m===f&&(m=null),f.sibling.return=f.return,f=f.sibling}}break;case 19:jt(t,e),Nt(e),r&4&&Qc(e);break;case 21:break;default:jt(t,e),Nt(e)}}function Nt(e){var t=e.flags;if(t&2){try{e:{for(var n=e.return;n!==null;){if(Up(n)){var r=n;break e}n=n.return}throw Error(R(160))}switch(r.tag){case 5:var i=r.stateNode;r.flags&32&&(hi(i,""),r.flags&=-33);var o=Hc(e);ka(e,o,i);break;case 3:case 4:var s=r.stateNode.containerInfo,a=Hc(e);wa(e,a,s);break;default:throw Error(R(161))}}catch(u){je(e,e.return,u)}e.flags&=-3}t&4096&&(e.flags&=-4097)}function Ey(e,t,n){U=e,Wp(e)}function Wp(e,t,n){for(var r=(e.mode&1)!==0;U!==null;){var i=U,o=i.child;if(i.tag===22&&r){var s=i.memoizedState!==null||so;if(!s){var a=i.alternate,u=a!==null&&a.memoizedState!==null||Ye;a=so;var c=Ye;if(so=s,(Ye=u)&&!c)for(U=i;U!==null;)s=U,u=s.child,s.tag===22&&s.memoizedState!==null?Xc(i):u!==null?(u.return=s,U=u):Xc(i);for(;o!==null;)U=o,Wp(o),o=o.sibling;U=i,so=a,Ye=c}Yc(e)}else i.subtreeFlags&8772&&o!==null?(o.return=i,U=o):Yc(e)}}function Yc(e){for(;U!==null;){var t=U;if(t.flags&8772){var n=t.alternate;try{if(t.flags&8772)switch(t.tag){case 0:case 11:case 15:Ye||Es(5,t);break;case 1:var r=t.stateNode;if(t.flags&4&&!Ye)if(n===null)r.componentDidMount();else{var i=t.elementType===t.type?n.memoizedProps:_t(t.type,n.memoizedProps);r.componentDidUpdate(i,n.memoizedState,r.__reactInternalSnapshotBeforeUpdate)}var o=t.updateQueue;o!==null&&Oc(t,o,r);break;case 3:var s=t.updateQueue;if(s!==null){if(n=null,t.child!==null)switch(t.child.tag){case 5:n=t.child.stateNode;break;case 1:n=t.child.stateNode}Oc(t,s,n)}break;case 5:var a=t.stateNode;if(n===null&&t.flags&4){n=a;var u=t.memoizedProps;switch(t.type){case"button":case"input":case"select":case"textarea":u.autoFocus&&n.focus();break;case"img":u.src&&(n.src=u.src)}}break;case 6:break;case 4:break;case 12:break;case 13:if(t.memoizedState===null){var c=t.alternate;if(c!==null){var m=c.memoizedState;if(m!==null){var f=m.dehydrated;f!==null&&vi(f)}}}break;case 19:case 17:case 21:case 22:case 23:case 25:break;default:throw Error(R(163))}Ye||t.flags&512&&xa(t)}catch(h){je(t,t.return,h)}}if(t===e){U=null;break}if(n=t.sibling,n!==null){n.return=t.return,U=n;break}U=t.return}}function Kc(e){for(;U!==null;){var t=U;if(t===e){U=null;break}var n=t.sibling;if(n!==null){n.return=t.return,U=n;break}U=t.return}}function Xc(e){for(;U!==null;){var t=U;try{switch(t.tag){case 0:case 11:case 15:var n=t.return;try{Es(4,t)}catch(u){je(t,n,u)}break;case 1:var r=t.stateNode;if(typeof r.componentDidMount=="function"){var i=t.return;try{r.componentDidMount()}catch(u){je(t,i,u)}}var o=t.return;try{xa(t)}catch(u){je(t,o,u)}break;case 5:var s=t.return;try{xa(t)}catch(u){je(t,s,u)}}}catch(u){je(t,t.return,u)}if(t===e){U=null;break}var a=t.sibling;if(a!==null){a.return=t.return,U=a;break}U=t.return}}var _y=Math.ceil,rs=on.ReactCurrentDispatcher,vu=on.ReactCurrentOwner,vt=on.ReactCurrentBatchConfig,oe=0,ze=null,Pe=null,Ue=0,st=0,mr=An(0),Me=0,Pi=null,Kn=0,_s=0,xu=0,di=null,et=null,wu=0,Rr=1/0,Kt=null,is=!1,Sa=null,bn=null,lo=!1,wn=null,os=0,fi=0,ja=null,bo=-1,To=0;function Je(){return oe&6?_e():bo!==-1?bo:bo=_e()}function Tn(e){return e.mode&1?oe&2&&Ue!==0?Ue&-Ue:ay.transition!==null?(To===0&&(To=bf()),To):(e=de,e!==0||(e=window.event,e=e===void 0?16:Nf(e.type)),e):1}function Rt(e,t,n,r){if(50<fi)throw fi=0,ja=null,Error(R(185));zi(e,n,r),(!(oe&2)||e!==ze)&&(e===ze&&(!(oe&2)&&(_s|=n),Me===4&&yn(e,Ue)),it(e,r),n===1&&oe===0&&!(t.mode&1)&&(Rr=_e()+500,ks&&Nn()))}function it(e,t){var n=e.callbackNode;ag(e,t);var r=Bo(e,e===ze?Ue:0);if(r===0)n!==null&&ic(n),e.callbackNode=null,e.callbackPriority=0;else if(t=r&-r,e.callbackPriority!==t){if(n!=null&&ic(n),t===1)e.tag===0?ly(Gc.bind(null,e)):Zf(Gc.bind(null,e)),ry(function(){!(oe&6)&&Nn()}),n=null;else{switch(Tf(r)){case 1:n=Qa;break;case 4:n=_f;break;case 16:n=Uo;break;case 536870912:n=Cf;break;default:n=Uo}n=qp(n,Hp.bind(null,e))}e.callbackPriority=t,e.callbackNode=n}}function Hp(e,t){if(bo=-1,To=0,oe&6)throw Error(R(327));var n=e.callbackNode;if(jr()&&e.callbackNode!==n)return null;var r=Bo(e,e===ze?Ue:0);if(r===0)return null;if(r&30||r&e.expiredLanes||t)t=ss(e,r);else{t=r;var i=oe;oe|=2;var o=Yp();(ze!==e||Ue!==t)&&(Kt=null,Rr=_e()+500,Vn(e,t));do try{Ty();break}catch(a){Qp(e,a)}while(!0);ou(),rs.current=o,oe=i,Pe!==null?t=0:(ze=null,Ue=0,t=Me)}if(t!==0){if(t===2&&(i=Gl(e),i!==0&&(r=i,t=Ea(e,i))),t===1)throw n=Pi,Vn(e,0),yn(e,r),it(e,_e()),n;if(t===6)yn(e,r);else{if(i=e.current.alternate,!(r&30)&&!Cy(i)&&(t=ss(e,r),t===2&&(o=Gl(e),o!==0&&(r=o,t=Ea(e,o))),t===1))throw n=Pi,Vn(e,0),yn(e,r),it(e,_e()),n;switch(e.finishedWork=i,e.finishedLanes=r,t){case 0:case 1:throw Error(R(345));case 2:Dn(e,et,Kt);break;case 3:if(yn(e,r),(r&130023424)===r&&(t=wu+500-_e(),10<t)){if(Bo(e,0)!==0)break;if(i=e.suspendedLanes,(i&r)!==r){Je(),e.pingedLanes|=e.suspendedLanes&i;break}e.timeoutHandle=ia(Dn.bind(null,e,et,Kt),t);break}Dn(e,et,Kt);break;case 4:if(yn(e,r),(r&4194240)===r)break;for(t=e.eventTimes,i=-1;0<r;){var s=31-Ot(r);o=1<<s,s=t[s],s>i&&(i=s),r&=~o}if(r=i,r=_e()-r,r=(120>r?120:480>r?480:1080>r?1080:1920>r?1920:3e3>r?3e3:4320>r?4320:1960*_y(r/1960))-r,10<r){e.timeoutHandle=ia(Dn.bind(null,e,et,Kt),r);break}Dn(e,et,Kt);break;case 5:Dn(e,et,Kt);break;default:throw Error(R(329))}}}return it(e,_e()),e.callbackNode===n?Hp.bind(null,e):null}function Ea(e,t){var n=di;return e.current.memoizedState.isDehydrated&&(Vn(e,t).flags|=256),e=ss(e,t),e!==2&&(t=et,et=n,t!==null&&_a(t)),e}function _a(e){et===null?et=e:et.push.apply(et,e)}function Cy(e){for(var t=e;;){if(t.flags&16384){var n=t.updateQueue;if(n!==null&&(n=n.stores,n!==null))for(var r=0;r<n.length;r++){var i=n[r],o=i.getSnapshot;i=i.value;try{if(!Mt(o(),i))return!1}catch{return!1}}}if(n=t.child,t.subtreeFlags&16384&&n!==null)n.return=t,t=n;else{if(t===e)break;for(;t.sibling===null;){if(t.return===null||t.return===e)return!0;t=t.return}t.sibling.return=t.return,t=t.sibling}}return!0}function yn(e,t){for(t&=~xu,t&=~_s,e.suspendedLanes|=t,e.pingedLanes&=~t,e=e.expirationTimes;0<t;){var n=31-Ot(t),r=1<<n;e[n]=-1,t&=~r}}function Gc(e){if(oe&6)throw Error(R(327));jr();var t=Bo(e,0);if(!(t&1))return it(e,_e()),null;var n=ss(e,t);if(e.tag!==0&&n===2){var r=Gl(e);r!==0&&(t=r,n=Ea(e,r))}if(n===1)throw n=Pi,Vn(e,0),yn(e,t),it(e,_e()),n;if(n===6)throw Error(R(345));return e.finishedWork=e.current.alternate,e.finishedLanes=t,Dn(e,et,Kt),it(e,_e()),null}function ku(e,t){var n=oe;oe|=1;try{return e(t)}finally{oe=n,oe===0&&(Rr=_e()+500,ks&&Nn())}}function Xn(e){wn!==null&&wn.tag===0&&!(oe&6)&&jr();var t=oe;oe|=1;var n=vt.transition,r=de;try{if(vt.transition=null,de=1,e)return e()}finally{de=r,vt.transition=n,oe=t,!(oe&6)&&Nn()}}function Su(){st=mr.current,ye(mr)}function Vn(e,t){e.finishedWork=null,e.finishedLanes=0;var n=e.timeoutHandle;if(n!==-1&&(e.timeoutHandle=-1,ny(n)),Pe!==null)for(n=Pe.return;n!==null;){var r=n;switch(nu(r),r.tag){case 1:r=r.type.childContextTypes,r!=null&&Yo();break;case 3:Pr(),ye(nt),ye(Ke),du();break;case 5:cu(r);break;case 4:Pr();break;case 13:ye(we);break;case 19:ye(we);break;case 10:su(r.type._context);break;case 22:case 23:Su()}n=n.return}if(ze=e,Pe=e=Pn(e.current,null),Ue=st=t,Me=0,Pi=null,xu=_s=Kn=0,et=di=null,In!==null){for(t=0;t<In.length;t++)if(n=In[t],r=n.interleaved,r!==null){n.interleaved=null;var i=r.next,o=n.pending;if(o!==null){var s=o.next;o.next=i,r.next=s}n.pending=r}In=null}return e}function Qp(e,t){do{var n=Pe;try{if(ou(),Eo.current=ns,ts){for(var r=ke.memoizedState;r!==null;){var i=r.queue;i!==null&&(i.pending=null),r=r.next}ts=!1}if(Yn=0,Le=Re=ke=null,ui=!1,Ci=0,vu.current=null,n===null||n.return===null){Me=1,Pi=t,Pe=null;break}e:{var o=e,s=n.return,a=n,u=t;if(t=Ue,a.flags|=32768,u!==null&&typeof u=="object"&&typeof u.then=="function"){var c=u,m=a,f=m.tag;if(!(m.mode&1)&&(f===0||f===11||f===15)){var h=m.alternate;h?(m.updateQueue=h.updateQueue,m.memoizedState=h.memoizedState,m.lanes=h.lanes):(m.updateQueue=null,m.memoizedState=null)}var w=Dc(s);if(w!==null){w.flags&=-257,Fc(w,s,a,o,t),w.mode&1&&zc(o,c,t),t=w,u=c;var y=t.updateQueue;if(y===null){var v=new Set;v.add(u),t.updateQueue=v}else y.add(u);break e}else{if(!(t&1)){zc(o,c,t),ju();break e}u=Error(R(426))}}else if(xe&&a.mode&1){var b=Dc(s);if(b!==null){!(b.flags&65536)&&(b.flags|=256),Fc(b,s,a,o,t),ru(Or(u,a));break e}}o=u=Or(u,a),Me!==4&&(Me=2),di===null?di=[o]:di.push(o),o=s;do{switch(o.tag){case 3:o.flags|=65536,t&=-t,o.lanes|=t;var p=Pp(o,u,t);Pc(o,p);break e;case 1:a=u;var d=o.type,g=o.stateNode;if(!(o.flags&128)&&(typeof d.getDerivedStateFromError=="function"||g!==null&&typeof g.componentDidCatch=="function"&&(bn===null||!bn.has(g)))){o.flags|=65536,t&=-t,o.lanes|=t;var k=Op(o,a,t);Pc(o,k);break e}}o=o.return}while(o!==null)}Xp(n)}catch(_){t=_,Pe===n&&n!==null&&(Pe=n=n.return);continue}break}while(!0)}function Yp(){var e=rs.current;return rs.current=ns,e===null?ns:e}function ju(){(Me===0||Me===3||Me===2)&&(Me=4),ze===null||!(Kn&268435455)&&!(_s&268435455)||yn(ze,Ue)}function ss(e,t){var n=oe;oe|=2;var r=Yp();(ze!==e||Ue!==t)&&(Kt=null,Vn(e,t));do try{by();break}catch(i){Qp(e,i)}while(!0);if(ou(),oe=n,rs.current=r,Pe!==null)throw Error(R(261));return ze=null,Ue=0,Me}function by(){for(;Pe!==null;)Kp(Pe)}function Ty(){for(;Pe!==null&&!Zm();)Kp(Pe)}function Kp(e){var t=Jp(e.alternate,e,st);e.memoizedProps=e.pendingProps,t===null?Xp(e):Pe=t,vu.current=null}function Xp(e){var t=e;do{var n=t.alternate;if(e=t.return,t.flags&32768){if(n=ky(n,t),n!==null){n.flags&=32767,Pe=n;return}if(e!==null)e.flags|=32768,e.subtreeFlags=0,e.deletions=null;else{Me=6,Pe=null;return}}else if(n=wy(n,t,st),n!==null){Pe=n;return}if(t=t.sibling,t!==null){Pe=t;return}Pe=t=e}while(t!==null);Me===0&&(Me=5)}function Dn(e,t,n){var r=de,i=vt.transition;try{vt.transition=null,de=1,Py(e,t,n,r)}finally{vt.transition=i,de=r}return null}function Py(e,t,n,r){do jr();while(wn!==null);if(oe&6)throw Error(R(327));n=e.finishedWork;var i=e.finishedLanes;if(n===null)return null;if(e.finishedWork=null,e.finishedLanes=0,n===e.current)throw Error(R(177));e.callbackNode=null,e.callbackPriority=0;var o=n.lanes|n.childLanes;if(ug(e,o),e===ze&&(Pe=ze=null,Ue=0),!(n.subtreeFlags&2064)&&!(n.flags&2064)||lo||(lo=!0,qp(Uo,function(){return jr(),null})),o=(n.flags&15990)!==0,n.subtreeFlags&15990||o){o=vt.transition,vt.transition=null;var s=de;de=1;var a=oe;oe|=4,vu.current=null,jy(e,n),Vp(n,e),Xg(na),Vo=!!ta,na=ta=null,e.current=n,Ey(n),eg(),oe=a,de=s,vt.transition=o}else e.current=n;if(lo&&(lo=!1,wn=e,os=i),o=e.pendingLanes,o===0&&(bn=null),rg(n.stateNode),it(e,_e()),t!==null)for(r=e.onRecoverableError,n=0;n<t.length;n++)i=t[n],r(i.value,{componentStack:i.stack,digest:i.digest});if(is)throw is=!1,e=Sa,Sa=null,e;return os&1&&e.tag!==0&&jr(),o=e.pendingLanes,o&1?e===ja?fi++:(fi=0,ja=e):fi=0,Nn(),null}function jr(){if(wn!==null){var e=Tf(os),t=vt.transition,n=de;try{if(vt.transition=null,de=16>e?16:e,wn===null)var r=!1;else{if(e=wn,wn=null,os=0,oe&6)throw Error(R(331));var i=oe;for(oe|=4,U=e.current;U!==null;){var o=U,s=o.child;if(U.flags&16){var a=o.deletions;if(a!==null){for(var u=0;u<a.length;u++){var c=a[u];for(U=c;U!==null;){var m=U;switch(m.tag){case 0:case 11:case 15:ci(8,m,o)}var f=m.child;if(f!==null)f.return=m,U=f;else for(;U!==null;){m=U;var h=m.sibling,w=m.return;if($p(m),m===c){U=null;break}if(h!==null){h.return=w,U=h;break}U=w}}}var y=o.alternate;if(y!==null){var v=y.child;if(v!==null){y.child=null;do{var b=v.sibling;v.sibling=null,v=b}while(v!==null)}}U=o}}if(o.subtreeFlags&2064&&s!==null)s.return=o,U=s;else e:for(;U!==null;){if(o=U,o.flags&2048)switch(o.tag){case 0:case 11:case 15:ci(9,o,o.return)}var p=o.sibling;if(p!==null){p.return=o.return,U=p;break e}U=o.return}}var d=e.current;for(U=d;U!==null;){s=U;var g=s.child;if(s.subtreeFlags&2064&&g!==null)g.return=s,U=g;else e:for(s=d;U!==null;){if(a=U,a.flags&2048)try{switch(a.tag){case 0:case 11:case 15:Es(9,a)}}catch(_){je(a,a.return,_)}if(a===s){U=null;break e}var k=a.sibling;if(k!==null){k.return=a.return,U=k;break e}U=a.return}}if(oe=i,Nn(),Bt&&typeof Bt.onPostCommitFiberRoot=="function")try{Bt.onPostCommitFiberRoot(gs,e)}catch{}r=!0}return r}finally{de=n,vt.transition=t}}return!1}function Jc(e,t,n){t=Or(n,t),t=Pp(e,t,1),e=Cn(e,t,1),t=Je(),e!==null&&(zi(e,1,t),it(e,t))}function je(e,t,n){if(e.tag===3)Jc(e,e,n);else for(;t!==null;){if(t.tag===3){Jc(t,e,n);break}else if(t.tag===1){var r=t.stateNode;if(typeof t.type.getDerivedStateFromError=="function"||typeof r.componentDidCatch=="function"&&(bn===null||!bn.has(r))){e=Or(n,e),e=Op(t,e,1),t=Cn(t,e,1),e=Je(),t!==null&&(zi(t,1,e),it(t,e));break}}t=t.return}}function Oy(e,t,n){var r=e.pingCache;r!==null&&r.delete(t),t=Je(),e.pingedLanes|=e.suspendedLanes&n,ze===e&&(Ue&n)===n&&(Me===4||Me===3&&(Ue&130023424)===Ue&&500>_e()-wu?Vn(e,0):xu|=n),it(e,t)}function Gp(e,t){t===0&&(e.mode&1?(t=Ji,Ji<<=1,!(Ji&130023424)&&(Ji=4194304)):t=1);var n=Je();e=nn(e,t),e!==null&&(zi(e,t,n),it(e,n))}function Ry(e){var t=e.memoizedState,n=0;t!==null&&(n=t.retryLane),Gp(e,n)}function My(e,t){var n=0;switch(e.tag){case 13:var r=e.stateNode,i=e.memoizedState;i!==null&&(n=i.retryLane);break;case 19:r=e.stateNode;break;default:throw Error(R(314))}r!==null&&r.delete(t),Gp(e,n)}var Jp;Jp=function(e,t,n){if(e!==null)if(e.memoizedProps!==t.pendingProps||nt.current)tt=!0;else{if(!(e.lanes&n)&&!(t.flags&128))return tt=!1,xy(e,t,n);tt=!!(e.flags&131072)}else tt=!1,xe&&t.flags&1048576&&ep(t,Go,t.index);switch(t.lanes=0,t.tag){case 2:var r=t.type;Co(e,t),e=t.pendingProps;var i=Cr(t,Ke.current);Sr(t,n),i=pu(null,t,r,e,i,n);var o=hu();return t.flags|=1,typeof i=="object"&&i!==null&&typeof i.render=="function"&&i.$$typeof===void 0?(t.tag=1,t.memoizedState=null,t.updateQueue=null,rt(r)?(o=!0,Ko(t)):o=!1,t.memoizedState=i.state!==null&&i.state!==void 0?i.state:null,au(t),i.updater=Ss,t.stateNode=i,i._reactInternals=t,da(t,r,e,n),t=ha(null,t,r,!0,o,n)):(t.tag=0,xe&&o&&tu(t),Xe(null,t,i,n),t=t.child),t;case 16:r=t.elementType;e:{switch(Co(e,t),e=t.pendingProps,i=r._init,r=i(r._payload),t.type=r,i=t.tag=Ny(r),e=_t(r,e),i){case 0:t=pa(null,t,r,e,n);break e;case 1:t=Uc(null,t,r,e,n);break e;case 11:t=Ic(null,t,r,e,n);break e;case 14:t=$c(null,t,r,_t(r.type,e),n);break e}throw Error(R(306,r,""))}return t;case 0:return r=t.type,i=t.pendingProps,i=t.elementType===r?i:_t(r,i),pa(e,t,r,i,n);case 1:return r=t.type,i=t.pendingProps,i=t.elementType===r?i:_t(r,i),Uc(e,t,r,i,n);case 3:e:{if(Np(t),e===null)throw Error(R(387));r=t.pendingProps,o=t.memoizedState,i=o.element,ip(e,t),Zo(t,r,null,n);var s=t.memoizedState;if(r=s.element,o.isDehydrated)if(o={element:r,isDehydrated:!1,cache:s.cache,pendingSuspenseBoundaries:s.pendingSuspenseBoundaries,transitions:s.transitions},t.updateQueue.baseState=o,t.memoizedState=o,t.flags&256){i=Or(Error(R(423)),t),t=Bc(e,t,r,n,i);break e}else if(r!==i){i=Or(Error(R(424)),t),t=Bc(e,t,r,n,i);break e}else for(lt=_n(t.stateNode.containerInfo.firstChild),at=t,xe=!0,Tt=null,n=ap(t,null,r,n),t.child=n;n;)n.flags=n.flags&-3|4096,n=n.sibling;else{if(br(),r===i){t=rn(e,t,n);break e}Xe(e,t,r,n)}t=t.child}return t;case 5:return up(t),e===null&&aa(t),r=t.type,i=t.pendingProps,o=e!==null?e.memoizedProps:null,s=i.children,ra(r,i)?s=null:o!==null&&ra(r,o)&&(t.flags|=32),Ap(e,t),Xe(e,t,s,n),t.child;case 6:return e===null&&aa(t),null;case 13:return Lp(e,t,n);case 4:return uu(t,t.stateNode.containerInfo),r=t.pendingProps,e===null?t.child=Tr(t,null,r,n):Xe(e,t,r,n),t.child;case 11:return r=t.type,i=t.pendingProps,i=t.elementType===r?i:_t(r,i),Ic(e,t,r,i,n);case 7:return Xe(e,t,t.pendingProps,n),t.child;case 8:return Xe(e,t,t.pendingProps.children,n),t.child;case 12:return Xe(e,t,t.pendingProps.children,n),t.child;case 10:e:{if(r=t.type._context,i=t.pendingProps,o=t.memoizedProps,s=i.value,he(Jo,r._currentValue),r._currentValue=s,o!==null)if(Mt(o.value,s)){if(o.children===i.children&&!nt.current){t=rn(e,t,n);break e}}else for(o=t.child,o!==null&&(o.return=t);o!==null;){var a=o.dependencies;if(a!==null){s=o.child;for(var u=a.firstContext;u!==null;){if(u.context===r){if(o.tag===1){u=qt(-1,n&-n),u.tag=2;var c=o.updateQueue;if(c!==null){c=c.shared;var m=c.pending;m===null?u.next=u:(u.next=m.next,m.next=u),c.pending=u}}o.lanes|=n,u=o.alternate,u!==null&&(u.lanes|=n),ua(o.return,n,t),a.lanes|=n;break}u=u.next}}else if(o.tag===10)s=o.type===t.type?null:o.child;else if(o.tag===18){if(s=o.return,s===null)throw Error(R(341));s.lanes|=n,a=s.alternate,a!==null&&(a.lanes|=n),ua(s,n,t),s=o.sibling}else s=o.child;if(s!==null)s.return=o;else for(s=o;s!==null;){if(s===t){s=null;break}if(o=s.sibling,o!==null){o.return=s.return,s=o;break}s=s.return}o=s}Xe(e,t,i.children,n),t=t.child}return t;case 9:return i=t.type,r=t.pendingProps.children,Sr(t,n),i=wt(i),r=r(i),t.flags|=1,Xe(e,t,r,n),t.child;case 14:return r=t.type,i=_t(r,t.pendingProps),i=_t(r.type,i),$c(e,t,r,i,n);case 15:return Rp(e,t,t.type,t.pendingProps,n);case 17:return r=t.type,i=t.pendingProps,i=t.elementType===r?i:_t(r,i),Co(e,t),t.tag=1,rt(r)?(e=!0,Ko(t)):e=!1,Sr(t,n),sp(t,r,i),da(t,r,i,n),ha(null,t,r,!0,e,n);case 19:return zp(e,t,n);case 22:return Mp(e,t,n)}throw Error(R(156,t.tag))};function qp(e,t){return Ef(e,t)}function Ay(e,t,n,r){this.tag=e,this.key=n,this.sibling=this.child=this.return=this.stateNode=this.type=this.elementType=null,this.index=0,this.ref=null,this.pendingProps=t,this.dependencies=this.memoizedState=this.updateQueue=this.memoizedProps=null,this.mode=r,this.subtreeFlags=this.flags=0,this.deletions=null,this.childLanes=this.lanes=0,this.alternate=null}function yt(e,t,n,r){return new Ay(e,t,n,r)}function Eu(e){return e=e.prototype,!(!e||!e.isReactComponent)}function Ny(e){if(typeof e=="function")return Eu(e)?1:0;if(e!=null){if(e=e.$$typeof,e===Va)return 11;if(e===Wa)return 14}return 2}function Pn(e,t){var n=e.alternate;return n===null?(n=yt(e.tag,t,e.key,e.mode),n.elementType=e.elementType,n.type=e.type,n.stateNode=e.stateNode,n.alternate=e,e.alternate=n):(n.pendingProps=t,n.type=e.type,n.flags=0,n.subtreeFlags=0,n.deletions=null),n.flags=e.flags&14680064,n.childLanes=e.childLanes,n.lanes=e.lanes,n.child=e.child,n.memoizedProps=e.memoizedProps,n.memoizedState=e.memoizedState,n.updateQueue=e.updateQueue,t=e.dependencies,n.dependencies=t===null?null:{lanes:t.lanes,firstContext:t.firstContext},n.sibling=e.sibling,n.index=e.index,n.ref=e.ref,n}function Po(e,t,n,r,i,o){var s=2;if(r=e,typeof e=="function")Eu(e)&&(s=1);else if(typeof e=="string")s=5;else e:switch(e){case or:return Wn(n.children,i,o,t);case Ba:s=8,i|=8;break;case Ll:return e=yt(12,n,t,i|2),e.elementType=Ll,e.lanes=o,e;case zl:return e=yt(13,n,t,i),e.elementType=zl,e.lanes=o,e;case Dl:return e=yt(19,n,t,i),e.elementType=Dl,e.lanes=o,e;case lf:return Cs(n,i,o,t);default:if(typeof e=="object"&&e!==null)switch(e.$$typeof){case of:s=10;break e;case sf:s=9;break e;case Va:s=11;break e;case Wa:s=14;break e;case hn:s=16,r=null;break e}throw Error(R(130,e==null?e:typeof e,""))}return t=yt(s,n,t,i),t.elementType=e,t.type=r,t.lanes=o,t}function Wn(e,t,n,r){return e=yt(7,e,r,t),e.lanes=n,e}function Cs(e,t,n,r){return e=yt(22,e,r,t),e.elementType=lf,e.lanes=n,e.stateNode={isHidden:!1},e}function fl(e,t,n){return e=yt(6,e,null,t),e.lanes=n,e}function pl(e,t,n){return t=yt(4,e.children!==null?e.children:[],e.key,t),t.lanes=n,t.stateNode={containerInfo:e.containerInfo,pendingChildren:null,implementation:e.implementation},t}function Ly(e,t,n,r,i){this.tag=t,this.containerInfo=e,this.finishedWork=this.pingCache=this.current=this.pendingChildren=null,this.timeoutHandle=-1,this.callbackNode=this.pendingContext=this.context=null,this.callbackPriority=0,this.eventTimes=Ys(0),this.expirationTimes=Ys(-1),this.entangledLanes=this.finishedLanes=this.mutableReadLanes=this.expiredLanes=this.pingedLanes=this.suspendedLanes=this.pendingLanes=0,this.entanglements=Ys(0),this.identifierPrefix=r,this.onRecoverableError=i,this.mutableSourceEagerHydrationData=null}function _u(e,t,n,r,i,o,s,a,u){return e=new Ly(e,t,n,a,u),t===1?(t=1,o===!0&&(t|=8)):t=0,o=yt(3,null,null,t),e.current=o,o.stateNode=e,o.memoizedState={element:r,isDehydrated:n,cache:null,transitions:null,pendingSuspenseBoundaries:null},au(o),e}function zy(e,t,n){var r=3<arguments.length&&arguments[3]!==void 0?arguments[3]:null;return{$$typeof:ir,key:r==null?null:""+r,children:e,containerInfo:t,implementation:n}}function Zp(e){if(!e)return Rn;e=e._reactInternals;e:{if(Jn(e)!==e||e.tag!==1)throw Error(R(170));var t=e;do{switch(t.tag){case 3:t=t.stateNode.context;break e;case 1:if(rt(t.type)){t=t.stateNode.__reactInternalMemoizedMergedChildContext;break e}}t=t.return}while(t!==null);throw Error(R(171))}if(e.tag===1){var n=e.type;if(rt(n))return qf(e,n,t)}return t}function eh(e,t,n,r,i,o,s,a,u){return e=_u(n,r,!0,e,i,o,s,a,u),e.context=Zp(null),n=e.current,r=Je(),i=Tn(n),o=qt(r,i),o.callback=t??null,Cn(n,o,i),e.current.lanes=i,zi(e,i,r),it(e,r),e}function bs(e,t,n,r){var i=t.current,o=Je(),s=Tn(i);return n=Zp(n),t.context===null?t.context=n:t.pendingContext=n,t=qt(o,s),t.payload={element:e},r=r===void 0?null:r,r!==null&&(t.callback=r),e=Cn(i,t,s),e!==null&&(Rt(e,i,s,o),jo(e,i,s)),s}function ls(e){if(e=e.current,!e.child)return null;switch(e.child.tag){case 5:return e.child.stateNode;default:return e.child.stateNode}}function qc(e,t){if(e=e.memoizedState,e!==null&&e.dehydrated!==null){var n=e.retryLane;e.retryLane=n!==0&&n<t?n:t}}function Cu(e,t){qc(e,t),(e=e.alternate)&&qc(e,t)}function Dy(){return null}var th=typeof reportError=="function"?reportError:function(e){console.error(e)};function bu(e){this._internalRoot=e}Ts.prototype.render=bu.prototype.render=function(e){var t=this._internalRoot;if(t===null)throw Error(R(409));bs(e,t,null,null)};Ts.prototype.unmount=bu.prototype.unmount=function(){var e=this._internalRoot;if(e!==null){this._internalRoot=null;var t=e.containerInfo;Xn(function(){bs(null,e,null,null)}),t[tn]=null}};function Ts(e){this._internalRoot=e}Ts.prototype.unstable_scheduleHydration=function(e){if(e){var t=Rf();e={blockedOn:null,target:e,priority:t};for(var n=0;n<gn.length&&t!==0&&t<gn[n].priority;n++);gn.splice(n,0,e),n===0&&Af(e)}};function Tu(e){return!(!e||e.nodeType!==1&&e.nodeType!==9&&e.nodeType!==11)}function Ps(e){return!(!e||e.nodeType!==1&&e.nodeType!==9&&e.nodeType!==11&&(e.nodeType!==8||e.nodeValue!==" react-mount-point-unstable "))}function Zc(){}function Fy(e,t,n,r,i){if(i){if(typeof r=="function"){var o=r;r=function(){var c=ls(s);o.call(c)}}var s=eh(t,r,e,0,null,!1,!1,"",Zc);return e._reactRootContainer=s,e[tn]=s.current,ki(e.nodeType===8?e.parentNode:e),Xn(),s}for(;i=e.lastChild;)e.removeChild(i);if(typeof r=="function"){var a=r;r=function(){var c=ls(u);a.call(c)}}var u=_u(e,0,!1,null,null,!1,!1,"",Zc);return e._reactRootContainer=u,e[tn]=u.current,ki(e.nodeType===8?e.parentNode:e),Xn(function(){bs(t,u,n,r)}),u}function Os(e,t,n,r,i){var o=n._reactRootContainer;if(o){var s=o;if(typeof i=="function"){var a=i;i=function(){var u=ls(s);a.call(u)}}bs(t,s,e,i)}else s=Fy(n,t,e,i,r);return ls(s)}Pf=function(e){switch(e.tag){case 3:var t=e.stateNode;if(t.current.memoizedState.isDehydrated){var n=ni(t.pendingLanes);n!==0&&(Ya(t,n|1),it(t,_e()),!(oe&6)&&(Rr=_e()+500,Nn()))}break;case 13:Xn(function(){var r=nn(e,1);if(r!==null){var i=Je();Rt(r,e,1,i)}}),Cu(e,1)}};Ka=function(e){if(e.tag===13){var t=nn(e,134217728);if(t!==null){var n=Je();Rt(t,e,134217728,n)}Cu(e,134217728)}};Of=function(e){if(e.tag===13){var t=Tn(e),n=nn(e,t);if(n!==null){var r=Je();Rt(n,e,t,r)}Cu(e,t)}};Rf=function(){return de};Mf=function(e,t){var n=de;try{return de=e,t()}finally{de=n}};Yl=function(e,t,n){switch(t){case"input":if($l(e,n),t=n.name,n.type==="radio"&&t!=null){for(n=e;n.parentNode;)n=n.parentNode;for(n=n.querySelectorAll("input[name="+JSON.stringify(""+t)+'][type="radio"]'),t=0;t<n.length;t++){var r=n[t];if(r!==e&&r.form===e.form){var i=ws(r);if(!i)throw Error(R(90));uf(r),$l(r,i)}}}break;case"textarea":df(e,n);break;case"select":t=n.value,t!=null&&vr(e,!!n.multiple,t,!1)}};vf=ku;xf=Xn;var Iy={usingClientEntryPoint:!1,Events:[Fi,ur,ws,gf,yf,ku]},Qr={findFiberByHostInstance:Fn,bundleType:0,version:"18.2.0",rendererPackageName:"react-dom"},$y={bundleType:Qr.bundleType,version:Qr.version,rendererPackageName:Qr.rendererPackageName,rendererConfig:Qr.rendererConfig,overrideHookState:null,overrideHookStateDeletePath:null,overrideHookStateRenamePath:null,overrideProps:null,overridePropsDeletePath:null,overridePropsRenamePath:null,setErrorHandler:null,setSuspenseHandler:null,scheduleUpdate:null,currentDispatcherRef:on.ReactCurrentDispatcher,findHostInstanceByFiber:function(e){return e=Sf(e),e===null?null:e.stateNode},findFiberByHostInstance:Qr.findFiberByHostInstance||Dy,findHostInstancesForRefresh:null,scheduleRefresh:null,scheduleRoot:null,setRefreshHandler:null,getCurrentFiber:null,reconcilerVersion:"18.2.0-next-9e3b772b8-20220608"};if(typeof __REACT_DEVTOOLS_GLOBAL_HOOK__<"u"){var ao=__REACT_DEVTOOLS_GLOBAL_HOOK__;if(!ao.isDisabled&&ao.supportsFiber)try{gs=ao.inject($y),Bt=ao}catch{}}dt.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED=Iy;dt.createPortal=function(e,t){var n=2<arguments.length&&arguments[2]!==void 0?arguments[2]:null;if(!Tu(t))throw Error(R(200));return zy(e,t,null,n)};dt.createRoot=function(e,t){if(!Tu(e))throw Error(R(299));var n=!1,r="",i=th;return t!=null&&(t.unstable_strictMode===!0&&(n=!0),t.identifierPrefix!==void 0&&(r=t.identifierPrefix),t.onRecoverableError!==void 0&&(i=t.onRecoverableError)),t=_u(e,1,!1,null,null,n,!1,r,i),e[tn]=t.current,ki(e.nodeType===8?e.parentNode:e),new bu(t)};dt.findDOMNode=function(e){if(e==null)return null;if(e.nodeType===1)return e;var t=e._reactInternals;if(t===void 0)throw typeof e.render=="function"?Error(R(188)):(e=Object.keys(e).join(","),Error(R(268,e)));return e=Sf(t),e=e===null?null:e.stateNode,e};dt.flushSync=function(e){return Xn(e)};dt.hydrate=function(e,t,n){if(!Ps(t))throw Error(R(200));return Os(null,e,t,!0,n)};dt.hydrateRoot=function(e,t,n){if(!Tu(e))throw Error(R(405));var r=n!=null&&n.hydratedSources||null,i=!1,o="",s=th;if(n!=null&&(n.unstable_strictMode===!0&&(i=!0),n.identifierPrefix!==void 0&&(o=n.identifierPrefix),n.onRecoverableError!==void 0&&(s=n.onRecoverableError)),t=eh(t,null,e,1,n??null,i,!1,o,s),e[tn]=t.current,ki(e),r)for(e=0;e<r.length;e++)n=r[e],i=n._getVersion,i=i(n._source),t.mutableSourceEagerHydrationData==null?t.mutableSourceEagerHydrationData=[n,i]:t.mutableSourceEagerHydrationData.push(n,i);return new Ts(t)};dt.render=function(e,t,n){if(!Ps(t))throw Error(R(200));return Os(null,e,t,!1,n)};dt.unmountComponentAtNode=function(e){if(!Ps(e))throw Error(R(40));return e._reactRootContainer?(Xn(function(){Os(null,null,e,!1,function(){e._reactRootContainer=null,e[tn]=null})}),!0):!1};dt.unstable_batchedUpdates=ku;dt.unstable_renderSubtreeIntoContainer=function(e,t,n,r){if(!Ps(n))throw Error(R(200));if(e==null||e._reactInternals===void 0)throw Error(R(38));return Os(e,t,n,!1,r)};dt.version="18.2.0-next-9e3b772b8-20220608";function nh(){if(!(typeof __REACT_DEVTOOLS_GLOBAL_HOOK__>"u"||typeof __REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE!="function"))try{__REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE(nh)}catch(e){console.error(e)}}nh(),Zd.exports=dt;var Pu=Zd.exports;const Uy=Na(Pu);var ed=Pu;Al.createRoot=ed.createRoot,Al.hydrateRoot=ed.hydrateRoot;const hl="/healthy-management-project/assets/olga_picture1x-48yp0Cvc.webp",By="/healthy-management-project/assets/olga_picture@2x-dFelWgxd.jpg",Vy="/healthy-management-project/assets/olga_picture1x-ohcXIDw6.jpg",Wy="/healthy-management-project/assets/mob_olga_picture@2x-jz3O2U-O.jpg",Hy="/healthy-management-project/assets/mob_olga_picture1x-PQXysebb.jpg",Qy="/healthy-management-project/assets/mob_olga_picture1x-YL2VUwPK.webp",K="/healthy-management-project/assets/sprite-EuI-mRGf.svg";function Ca(){return Ca=Object.assign?Object.assign.bind():function(e){for(var t=1;t<arguments.length;t++){var n=arguments[t];for(var r in n)Object.prototype.hasOwnProperty.call(n,r)&&(e[r]=n[r])}return e},Ca.apply(this,arguments)}function rh(e){var t=Object.create(null);return function(n){return t[n]===void 0&&(t[n]=e(n)),t[n]}}var Yy=/^((children|dangerouslySetInnerHTML|key|ref|autoFocus|defaultValue|defaultChecked|innerHTML|suppressContentEditableWarning|suppressHydrationWarning|valueLink|abbr|accept|acceptCharset|accessKey|action|allow|allowUserMedia|allowPaymentRequest|allowFullScreen|allowTransparency|alt|async|autoComplete|autoPlay|capture|cellPadding|cellSpacing|challenge|charSet|checked|cite|classID|className|cols|colSpan|content|contentEditable|contextMenu|controls|controlsList|coords|crossOrigin|data|dateTime|decoding|default|defer|dir|disabled|disablePictureInPicture|download|draggable|encType|enterKeyHint|form|formAction|formEncType|formMethod|formNoValidate|formTarget|frameBorder|headers|height|hidden|high|href|hrefLang|htmlFor|httpEquiv|id|inputMode|integrity|is|keyParams|keyType|kind|label|lang|list|loading|loop|low|marginHeight|marginWidth|max|maxLength|media|mediaGroup|method|min|minLength|multiple|muted|name|nonce|noValidate|open|optimum|pattern|placeholder|playsInline|poster|preload|profile|radioGroup|readOnly|referrerPolicy|rel|required|reversed|role|rows|rowSpan|sandbox|scope|scoped|scrolling|seamless|selected|shape|size|sizes|slot|span|spellCheck|src|srcDoc|srcLang|srcSet|start|step|style|summary|tabIndex|target|title|translate|type|useMap|value|width|wmode|wrap|about|datatype|inlist|prefix|property|resource|typeof|vocab|autoCapitalize|autoCorrect|autoSave|color|incremental|fallback|inert|itemProp|itemScope|itemType|itemID|itemRef|on|option|results|security|unselectable|accentHeight|accumulate|additive|alignmentBaseline|allowReorder|alphabetic|amplitude|arabicForm|ascent|attributeName|attributeType|autoReverse|azimuth|baseFrequency|baselineShift|baseProfile|bbox|begin|bias|by|calcMode|capHeight|clip|clipPathUnits|clipPath|clipRule|colorInterpolation|colorInterpolationFilters|colorProfile|colorRendering|contentScriptType|contentStyleType|cursor|cx|cy|d|decelerate|descent|diffuseConstant|direction|display|divisor|dominantBaseline|dur|dx|dy|edgeMode|elevation|enableBackground|end|exponent|externalResourcesRequired|fill|fillOpacity|fillRule|filter|filterRes|filterUnits|floodColor|floodOpacity|focusable|fontFamily|fontSize|fontSizeAdjust|fontStretch|fontStyle|fontVariant|fontWeight|format|from|fr|fx|fy|g1|g2|glyphName|glyphOrientationHorizontal|glyphOrientationVertical|glyphRef|gradientTransform|gradientUnits|hanging|horizAdvX|horizOriginX|ideographic|imageRendering|in|in2|intercept|k|k1|k2|k3|k4|kernelMatrix|kernelUnitLength|kerning|keyPoints|keySplines|keyTimes|lengthAdjust|letterSpacing|lightingColor|limitingConeAngle|local|markerEnd|markerMid|markerStart|markerHeight|markerUnits|markerWidth|mask|maskContentUnits|maskUnits|mathematical|mode|numOctaves|offset|opacity|operator|order|orient|orientation|origin|overflow|overlinePosition|overlineThickness|panose1|paintOrder|pathLength|patternContentUnits|patternTransform|patternUnits|pointerEvents|points|pointsAtX|pointsAtY|pointsAtZ|preserveAlpha|preserveAspectRatio|primitiveUnits|r|radius|refX|refY|renderingIntent|repeatCount|repeatDur|requiredExtensions|requiredFeatures|restart|result|rotate|rx|ry|scale|seed|shapeRendering|slope|spacing|specularConstant|specularExponent|speed|spreadMethod|startOffset|stdDeviation|stemh|stemv|stitchTiles|stopColor|stopOpacity|strikethroughPosition|strikethroughThickness|string|stroke|strokeDasharray|strokeDashoffset|strokeLinecap|strokeLinejoin|strokeMiterlimit|strokeOpacity|strokeWidth|surfaceScale|systemLanguage|tableValues|targetX|targetY|textAnchor|textDecoration|textRendering|textLength|to|transform|u1|u2|underlinePosition|underlineThickness|unicode|unicodeBidi|unicodeRange|unitsPerEm|vAlphabetic|vHanging|vIdeographic|vMathematical|values|vectorEffect|version|vertAdvY|vertOriginX|vertOriginY|viewBox|viewTarget|visibility|widths|wordSpacing|writingMode|x|xHeight|x1|x2|xChannelSelector|xlinkActuate|xlinkArcrole|xlinkHref|xlinkRole|xlinkShow|xlinkTitle|xlinkType|xmlBase|xmlns|xmlnsXlink|xmlLang|xmlSpace|y|y1|y2|yChannelSelector|z|zoomAndPan|for|class|autofocus)|(([Dd][Aa][Tt][Aa]|[Aa][Rr][Ii][Aa]|x)-.*))$/,Ky=rh(function(e){return Yy.test(e)||e.charCodeAt(0)===111&&e.charCodeAt(1)===110&&e.charCodeAt(2)<91});function Xy(e){if(e.sheet)return e.sheet;for(var t=0;t<document.styleSheets.length;t++)if(document.styleSheets[t].ownerNode===e)return document.styleSheets[t]}function Gy(e){var t=document.createElement("style");return t.setAttribute("data-emotion",e.key),e.nonce!==void 0&&t.setAttribute("nonce",e.nonce),t.appendChild(document.createTextNode("")),t.setAttribute("data-s",""),t}var Jy=function(){function e(n){var r=this;this._insertTag=function(i){var o;r.tags.length===0?r.insertionPoint?o=r.insertionPoint.nextSibling:r.prepend?o=r.container.firstChild:o=r.before:o=r.tags[r.tags.length-1].nextSibling,r.container.insertBefore(i,o),r.tags.push(i)},this.isSpeedy=n.speedy===void 0?!0:n.speedy,this.tags=[],this.ctr=0,this.nonce=n.nonce,this.key=n.key,this.container=n.container,this.prepend=n.prepend,this.insertionPoint=n.insertionPoint,this.before=null}var t=e.prototype;return t.hydrate=function(r){r.forEach(this._insertTag)},t.insert=function(r){this.ctr%(this.isSpeedy?65e3:1)===0&&this._insertTag(Gy(this));var i=this.tags[this.tags.length-1];if(this.isSpeedy){var o=Xy(i);try{o.insertRule(r,o.cssRules.length)}catch{}}else i.appendChild(document.createTextNode(r));this.ctr++},t.flush=function(){this.tags.forEach(function(r){return r.parentNode&&r.parentNode.removeChild(r)}),this.tags=[],this.ctr=0},e}(),Qe="-ms-",as="-moz-",se="-webkit-",ih="comm",Ou="rule",Ru="decl",qy="@import",oh="@keyframes",Zy="@layer",e0=Math.abs,Rs=String.fromCharCode,t0=Object.assign;function n0(e,t){return $e(e,0)^45?(((t<<2^$e(e,0))<<2^$e(e,1))<<2^$e(e,2))<<2^$e(e,3):0}function sh(e){return e.trim()}function r0(e,t){return(e=t.exec(e))?e[0]:e}function le(e,t,n){return e.replace(t,n)}function ba(e,t){return e.indexOf(t)}function $e(e,t){return e.charCodeAt(t)|0}function Oi(e,t,n){return e.slice(t,n)}function Dt(e){return e.length}function Mu(e){return e.length}function uo(e,t){return t.push(e),e}function i0(e,t){return e.map(t).join("")}var Ms=1,Mr=1,lh=0,ot=0,Te=0,Dr="";function As(e,t,n,r,i,o,s){return{value:e,root:t,parent:n,type:r,props:i,children:o,line:Ms,column:Mr,length:s,return:""}}function Yr(e,t){return t0(As("",null,null,"",null,null,0),e,{length:-e.length},t)}function o0(){return Te}function s0(){return Te=ot>0?$e(Dr,--ot):0,Mr--,Te===10&&(Mr=1,Ms--),Te}function ut(){return Te=ot<lh?$e(Dr,ot++):0,Mr++,Te===10&&(Mr=1,Ms++),Te}function Wt(){return $e(Dr,ot)}function Oo(){return ot}function $i(e,t){return Oi(Dr,e,t)}function Ri(e){switch(e){case 0:case 9:case 10:case 13:case 32:return 5;case 33:case 43:case 44:case 47:case 62:case 64:case 126:case 59:case 123:case 125:return 4;case 58:return 3;case 34:case 39:case 40:case 91:return 2;case 41:case 93:return 1}return 0}function ah(e){return Ms=Mr=1,lh=Dt(Dr=e),ot=0,[]}function uh(e){return Dr="",e}function Ro(e){return sh($i(ot-1,Ta(e===91?e+2:e===40?e+1:e)))}function l0(e){for(;(Te=Wt())&&Te<33;)ut();return Ri(e)>2||Ri(Te)>3?"":" "}function a0(e,t){for(;--t&&ut()&&!(Te<48||Te>102||Te>57&&Te<65||Te>70&&Te<97););return $i(e,Oo()+(t<6&&Wt()==32&&ut()==32))}function Ta(e){for(;ut();)switch(Te){case e:return ot;case 34:case 39:e!==34&&e!==39&&Ta(Te);break;case 40:e===41&&Ta(e);break;case 92:ut();break}return ot}function u0(e,t){for(;ut()&&e+Te!==57;)if(e+Te===84&&Wt()===47)break;return"/*"+$i(t,ot-1)+"*"+Rs(e===47?e:ut())}function c0(e){for(;!Ri(Wt());)ut();return $i(e,ot)}function d0(e){return uh(Mo("",null,null,null,[""],e=ah(e),0,[0],e))}function Mo(e,t,n,r,i,o,s,a,u){for(var c=0,m=0,f=s,h=0,w=0,y=0,v=1,b=1,p=1,d=0,g="",k=i,_=o,P=r,C=g;b;)switch(y=d,d=ut()){case 40:if(y!=108&&$e(C,f-1)==58){ba(C+=le(Ro(d),"&","&\f"),"&\f")!=-1&&(p=-1);break}case 34:case 39:case 91:C+=Ro(d);break;case 9:case 10:case 13:case 32:C+=l0(y);break;case 92:C+=a0(Oo()-1,7);continue;case 47:switch(Wt()){case 42:case 47:uo(f0(u0(ut(),Oo()),t,n),u);break;default:C+="/"}break;case 123*v:a[c++]=Dt(C)*p;case 125*v:case 59:case 0:switch(d){case 0:case 125:b=0;case 59+m:p==-1&&(C=le(C,/\f/g,"")),w>0&&Dt(C)-f&&uo(w>32?nd(C+";",r,n,f-1):nd(le(C," ","")+";",r,n,f-2),u);break;case 59:C+=";";default:if(uo(P=td(C,t,n,c,m,i,a,g,k=[],_=[],f),o),d===123)if(m===0)Mo(C,t,P,P,k,o,f,a,_);else switch(h===99&&$e(C,3)===110?100:h){case 100:case 108:case 109:case 115:Mo(e,P,P,r&&uo(td(e,P,P,0,0,i,a,g,i,k=[],f),_),i,_,f,a,r?k:_);break;default:Mo(C,P,P,P,[""],_,0,a,_)}}c=m=w=0,v=p=1,g=C="",f=s;break;case 58:f=1+Dt(C),w=y;default:if(v<1){if(d==123)--v;else if(d==125&&v++==0&&s0()==125)continue}switch(C+=Rs(d),d*v){case 38:p=m>0?1:(C+="\f",-1);break;case 44:a[c++]=(Dt(C)-1)*p,p=1;break;case 64:Wt()===45&&(C+=Ro(ut())),h=Wt(),m=f=Dt(g=C+=c0(Oo())),d++;break;case 45:y===45&&Dt(C)==2&&(v=0)}}return o}function td(e,t,n,r,i,o,s,a,u,c,m){for(var f=i-1,h=i===0?o:[""],w=Mu(h),y=0,v=0,b=0;y<r;++y)for(var p=0,d=Oi(e,f+1,f=e0(v=s[y])),g=e;p<w;++p)(g=sh(v>0?h[p]+" "+d:le(d,/&\f/g,h[p])))&&(u[b++]=g);return As(e,t,n,i===0?Ou:a,u,c,m)}function f0(e,t,n){return As(e,t,n,ih,Rs(o0()),Oi(e,2,-2),0)}function nd(e,t,n,r){return As(e,t,n,Ru,Oi(e,0,r),Oi(e,r+1,-1),r)}function Er(e,t){for(var n="",r=Mu(e),i=0;i<r;i++)n+=t(e[i],i,e,t)||"";return n}function p0(e,t,n,r){switch(e.type){case Zy:if(e.children.length)break;case qy:case Ru:return e.return=e.return||e.value;case ih:return"";case oh:return e.return=e.value+"{"+Er(e.children,r)+"}";case Ou:e.value=e.props.join(",")}return Dt(n=Er(e.children,r))?e.return=e.value+"{"+n+"}":""}function h0(e){var t=Mu(e);return function(n,r,i,o){for(var s="",a=0;a<t;a++)s+=e[a](n,r,i,o)||"";return s}}function m0(e){return function(t){t.root||(t=t.return)&&e(t)}}var g0=function(t,n,r){for(var i=0,o=0;i=o,o=Wt(),i===38&&o===12&&(n[r]=1),!Ri(o);)ut();return $i(t,ot)},y0=function(t,n){var r=-1,i=44;do switch(Ri(i)){case 0:i===38&&Wt()===12&&(n[r]=1),t[r]+=g0(ot-1,n,r);break;case 2:t[r]+=Ro(i);break;case 4:if(i===44){t[++r]=Wt()===58?"&\f":"",n[r]=t[r].length;break}default:t[r]+=Rs(i)}while(i=ut());return t},v0=function(t,n){return uh(y0(ah(t),n))},rd=new WeakMap,x0=function(t){if(!(t.type!=="rule"||!t.parent||t.length<1)){for(var n=t.value,r=t.parent,i=t.column===r.column&&t.line===r.line;r.type!=="rule";)if(r=r.parent,!r)return;if(!(t.props.length===1&&n.charCodeAt(0)!==58&&!rd.get(r))&&!i){rd.set(t,!0);for(var o=[],s=v0(n,o),a=r.props,u=0,c=0;u<s.length;u++)for(var m=0;m<a.length;m++,c++)t.props[c]=o[u]?s[u].replace(/&\f/g,a[m]):a[m]+" "+s[u]}}},w0=function(t){if(t.type==="decl"){var n=t.value;n.charCodeAt(0)===108&&n.charCodeAt(2)===98&&(t.return="",t.value="")}};function ch(e,t){switch(n0(e,t)){case 5103:return se+"print-"+e+e;case 5737:case 4201:case 3177:case 3433:case 1641:case 4457:case 2921:case 5572:case 6356:case 5844:case 3191:case 6645:case 3005:case 6391:case 5879:case 5623:case 6135:case 4599:case 4855:case 4215:case 6389:case 5109:case 5365:case 5621:case 3829:return se+e+e;case 5349:case 4246:case 4810:case 6968:case 2756:return se+e+as+e+Qe+e+e;case 6828:case 4268:return se+e+Qe+e+e;case 6165:return se+e+Qe+"flex-"+e+e;case 5187:return se+e+le(e,/(\w+).+(:[^]+)/,se+"box-$1$2"+Qe+"flex-$1$2")+e;case 5443:return se+e+Qe+"flex-item-"+le(e,/flex-|-self/,"")+e;case 4675:return se+e+Qe+"flex-line-pack"+le(e,/align-content|flex-|-self/,"")+e;case 5548:return se+e+Qe+le(e,"shrink","negative")+e;case 5292:return se+e+Qe+le(e,"basis","preferred-size")+e;case 6060:return se+"box-"+le(e,"-grow","")+se+e+Qe+le(e,"grow","positive")+e;case 4554:return se+le(e,/([^-])(transform)/g,"$1"+se+"$2")+e;case 6187:return le(le(le(e,/(zoom-|grab)/,se+"$1"),/(image-set)/,se+"$1"),e,"")+e;case 5495:case 3959:return le(e,/(image-set\([^]*)/,se+"$1$`$1");case 4968:return le(le(e,/(.+:)(flex-)?(.*)/,se+"box-pack:$3"+Qe+"flex-pack:$3"),/s.+-b[^;]+/,"justify")+se+e+e;case 4095:case 3583:case 4068:case 2532:return le(e,/(.+)-inline(.+)/,se+"$1$2")+e;case 8116:case 7059:case 5753:case 5535:case 5445:case 5701:case 4933:case 4677:case 5533:case 5789:case 5021:case 4765:if(Dt(e)-1-t>6)switch($e(e,t+1)){case 109:if($e(e,t+4)!==45)break;case 102:return le(e,/(.+:)(.+)-([^]+)/,"$1"+se+"$2-$3$1"+as+($e(e,t+3)==108?"$3":"$2-$3"))+e;case 115:return~ba(e,"stretch")?ch(le(e,"stretch","fill-available"),t)+e:e}break;case 4949:if($e(e,t+1)!==115)break;case 6444:switch($e(e,Dt(e)-3-(~ba(e,"!important")&&10))){case 107:return le(e,":",":"+se)+e;case 101:return le(e,/(.+:)([^;!]+)(;|!.+)?/,"$1"+se+($e(e,14)===45?"inline-":"")+"box$3$1"+se+"$2$3$1"+Qe+"$2box$3")+e}break;case 5936:switch($e(e,t+11)){case 114:return se+e+Qe+le(e,/[svh]\w+-[tblr]{2}/,"tb")+e;case 108:return se+e+Qe+le(e,/[svh]\w+-[tblr]{2}/,"tb-rl")+e;case 45:return se+e+Qe+le(e,/[svh]\w+-[tblr]{2}/,"lr")+e}return se+e+Qe+e+e}return e}var k0=function(t,n,r,i){if(t.length>-1&&!t.return)switch(t.type){case Ru:t.return=ch(t.value,t.length);break;case oh:return Er([Yr(t,{value:le(t.value,"@","@"+se)})],i);case Ou:if(t.length)return i0(t.props,function(o){switch(r0(o,/(::plac\w+|:read-\w+)/)){case":read-only":case":read-write":return Er([Yr(t,{props:[le(o,/:(read-\w+)/,":"+as+"$1")]})],i);case"::placeholder":return Er([Yr(t,{props:[le(o,/:(plac\w+)/,":"+se+"input-$1")]}),Yr(t,{props:[le(o,/:(plac\w+)/,":"+as+"$1")]}),Yr(t,{props:[le(o,/:(plac\w+)/,Qe+"input-$1")]})],i)}return""})}},S0=[k0],j0=function(t){var n=t.key;if(n==="css"){var r=document.querySelectorAll("style[data-emotion]:not([data-s])");Array.prototype.forEach.call(r,function(v){var b=v.getAttribute("data-emotion");b.indexOf(" ")!==-1&&(document.head.appendChild(v),v.setAttribute("data-s",""))})}var i=t.stylisPlugins||S0,o={},s,a=[];s=t.container||document.head,Array.prototype.forEach.call(document.querySelectorAll('style[data-emotion^="'+n+' "]'),function(v){for(var b=v.getAttribute("data-emotion").split(" "),p=1;p<b.length;p++)o[b[p]]=!0;a.push(v)});var u,c=[x0,w0];{var m,f=[p0,m0(function(v){m.insert(v)})],h=h0(c.concat(i,f)),w=function(b){return Er(d0(b),h)};u=function(b,p,d,g){m=d,w(b?b+"{"+p.styles+"}":p.styles),g&&(y.inserted[p.name]=!0)}}var y={key:n,sheet:new Jy({key:n,container:s,nonce:t.nonce,speedy:t.speedy,prepend:t.prepend,insertionPoint:t.insertionPoint}),nonce:t.nonce,inserted:o,registered:{},insert:u};return y.sheet.hydrate(a),y},E0=!0;function _0(e,t,n){var r="";return n.split(" ").forEach(function(i){e[i]!==void 0?t.push(e[i]+";"):r+=i+" "}),r}var dh=function(t,n,r){var i=t.key+"-"+n.name;(r===!1||E0===!1)&&t.registered[i]===void 0&&(t.registered[i]=n.styles)},C0=function(t,n,r){dh(t,n,r);var i=t.key+"-"+n.name;if(t.inserted[n.name]===void 0){var o=n;do t.insert(n===o?"."+i:"",o,t.sheet,!0),o=o.next;while(o!==void 0)}};function b0(e){for(var t=0,n,r=0,i=e.length;i>=4;++r,i-=4)n=e.charCodeAt(r)&255|(e.charCodeAt(++r)&255)<<8|(e.charCodeAt(++r)&255)<<16|(e.charCodeAt(++r)&255)<<24,n=(n&65535)*1540483477+((n>>>16)*59797<<16),n^=n>>>24,t=(n&65535)*1540483477+((n>>>16)*59797<<16)^(t&65535)*1540483477+((t>>>16)*59797<<16);switch(i){case 3:t^=(e.charCodeAt(r+2)&255)<<16;case 2:t^=(e.charCodeAt(r+1)&255)<<8;case 1:t^=e.charCodeAt(r)&255,t=(t&65535)*1540483477+((t>>>16)*59797<<16)}return t^=t>>>13,t=(t&65535)*1540483477+((t>>>16)*59797<<16),((t^t>>>15)>>>0).toString(36)}var T0={animationIterationCount:1,aspectRatio:1,borderImageOutset:1,borderImageSlice:1,borderImageWidth:1,boxFlex:1,boxFlexGroup:1,boxOrdinalGroup:1,columnCount:1,columns:1,flex:1,flexGrow:1,flexPositive:1,flexShrink:1,flexNegative:1,flexOrder:1,gridRow:1,gridRowEnd:1,gridRowSpan:1,gridRowStart:1,gridColumn:1,gridColumnEnd:1,gridColumnSpan:1,gridColumnStart:1,msGridRow:1,msGridRowSpan:1,msGridColumn:1,msGridColumnSpan:1,fontWeight:1,lineHeight:1,opacity:1,order:1,orphans:1,tabSize:1,widows:1,zIndex:1,zoom:1,WebkitLineClamp:1,fillOpacity:1,floodOpacity:1,stopOpacity:1,strokeDasharray:1,strokeDashoffset:1,strokeMiterlimit:1,strokeOpacity:1,strokeWidth:1},P0=/[A-Z]|^ms/g,O0=/_EMO_([^_]+?)_([^]*?)_EMO_/g,fh=function(t){return t.charCodeAt(1)===45},id=function(t){return t!=null&&typeof t!="boolean"},ml=rh(function(e){return fh(e)?e:e.replace(P0,"-$&").toLowerCase()}),od=function(t,n){switch(t){case"animation":case"animationName":if(typeof n=="string")return n.replace(O0,function(r,i,o){return Ft={name:i,styles:o,next:Ft},i})}return T0[t]!==1&&!fh(t)&&typeof n=="number"&&n!==0?n+"px":n};function Mi(e,t,n){if(n==null)return"";if(n.__emotion_styles!==void 0)return n;switch(typeof n){case"boolean":return"";case"object":{if(n.anim===1)return Ft={name:n.name,styles:n.styles,next:Ft},n.name;if(n.styles!==void 0){var r=n.next;if(r!==void 0)for(;r!==void 0;)Ft={name:r.name,styles:r.styles,next:Ft},r=r.next;var i=n.styles+";";return i}return R0(e,t,n)}case"function":{if(e!==void 0){var o=Ft,s=n(e);return Ft=o,Mi(e,t,s)}break}}if(t==null)return n;var a=t[n];return a!==void 0?a:n}function R0(e,t,n){var r="";if(Array.isArray(n))for(var i=0;i<n.length;i++)r+=Mi(e,t,n[i])+";";else for(var o in n){var s=n[o];if(typeof s!="object")t!=null&&t[s]!==void 0?r+=o+"{"+t[s]+"}":id(s)&&(r+=ml(o)+":"+od(o,s)+";");else if(Array.isArray(s)&&typeof s[0]=="string"&&(t==null||t[s[0]]===void 0))for(var a=0;a<s.length;a++)id(s[a])&&(r+=ml(o)+":"+od(o,s[a])+";");else{var u=Mi(e,t,s);switch(o){case"animation":case"animationName":{r+=ml(o)+":"+u+";";break}default:r+=o+"{"+u+"}"}}}return r}var sd=/label:\s*([^\s;\n{]+)\s*(;|$)/g,Ft,M0=function(t,n,r){if(t.length===1&&typeof t[0]=="object"&&t[0]!==null&&t[0].styles!==void 0)return t[0];var i=!0,o="";Ft=void 0;var s=t[0];s==null||s.raw===void 0?(i=!1,o+=Mi(r,n,s)):o+=s[0];for(var a=1;a<t.length;a++)o+=Mi(r,n,t[a]),i&&(o+=s[a]);sd.lastIndex=0;for(var u="",c;(c=sd.exec(o))!==null;)u+="-"+c[1];var m=b0(o)+u;return{name:m,styles:o,next:Ft}},A0=function(t){return t()},N0=Ku.useInsertionEffect?Ku.useInsertionEffect:!1,L0=N0||A0,ph=ue.createContext(typeof HTMLElement<"u"?j0({key:"css"}):null);ph.Provider;var z0=function(t){return ue.forwardRef(function(n,r){var i=ue.useContext(ph);return t(n,i,r)})},D0=ue.createContext({}),F0=Ky,I0=function(t){return t!=="theme"},ld=function(t){return typeof t=="string"&&t.charCodeAt(0)>96?F0:I0},ad=function(t,n,r){var i;if(n){var o=n.shouldForwardProp;i=t.__emotion_forwardProp&&o?function(s){return t.__emotion_forwardProp(s)&&o(s)}:o}return typeof i!="function"&&r&&(i=t.__emotion_forwardProp),i},$0=function(t){var n=t.cache,r=t.serialized,i=t.isStringTag;return dh(n,r,i),L0(function(){return C0(n,r,i)}),null},U0=function e(t,n){var r=t.__emotion_real===t,i=r&&t.__emotion_base||t,o,s;n!==void 0&&(o=n.label,s=n.target);var a=ad(t,n,r),u=a||ld(i),c=!u("as");return function(){var m=arguments,f=r&&t.__emotion_styles!==void 0?t.__emotion_styles.slice(0):[];if(o!==void 0&&f.push("label:"+o+";"),m[0]==null||m[0].raw===void 0)f.push.apply(f,m);else{f.push(m[0][0]);for(var h=m.length,w=1;w<h;w++)f.push(m[w],m[0][w])}var y=z0(function(v,b,p){var d=c&&v.as||i,g="",k=[],_=v;if(v.theme==null){_={};for(var P in v)_[P]=v[P];_.theme=ue.useContext(D0)}typeof v.className=="string"?g=_0(b.registered,k,v.className):v.className!=null&&(g=v.className+" ");var C=M0(f.concat(k),b.registered,_);g+=b.key+"-"+C.name,s!==void 0&&(g+=" "+s);var N=c&&a===void 0?ld(d):u,O={};for(var L in v)c&&L==="as"||N(L)&&(O[L]=v[L]);return O.className=g,O.ref=p,ue.createElement(ue.Fragment,null,ue.createElement($0,{cache:b,serialized:C,isStringTag:typeof d=="string"}),ue.createElement(d,O))});return y.displayName=o!==void 0?o:"Styled("+(typeof i=="string"?i:i.displayName||i.name||"Component")+")",y.defaultProps=t.defaultProps,y.__emotion_real=y,y.__emotion_base=i,y.__emotion_styles=f,y.__emotion_forwardProp=a,Object.defineProperty(y,"toString",{value:function(){return"."+s}}),y.withComponent=function(v,b){return e(v,Ca({},n,b,{shouldForwardProp:ad(y,b,!0)})).apply(void 0,f)},y}},B0=["a","abbr","address","area","article","aside","audio","b","base","bdi","bdo","big","blockquote","body","br","button","canvas","caption","cite","code","col","colgroup","data","datalist","dd","del","details","dfn","dialog","div","dl","dt","em","embed","fieldset","figcaption","figure","footer","form","h1","h2","h3","h4","h5","h6","head","header","hgroup","hr","html","i","iframe","img","input","ins","kbd","keygen","label","legend","li","link","main","map","mark","marquee","menu","menuitem","meta","meter","nav","noscript","object","ol","optgroup","option","output","p","param","picture","pre","progress","q","rp","rt","ruby","s","samp","script","section","select","small","source","span","strong","style","sub","summary","sup","table","tbody","td","textarea","tfoot","th","thead","time","title","tr","track","u","ul","var","video","wbr","circle","clipPath","defs","ellipse","foreignObject","g","image","line","linearGradient","mask","path","pattern","polygon","polyline","radialGradient","rect","stop","svg","text","tspan"],E=U0.bind();B0.forEach(function(e){E[e]=E(e)});const V0=E.section`
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
`,W0=E.h2`
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
`,H0=E.div`
  display: flex;
  flex-direction: column;
  gap: 24px;

  @media screen and (min-width: 768px) {
    display: flex;
    flex-direction: row;
    gap: 24px;
  }
`,Q0=E.div`
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
`,Y0=E.h3`
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
`,K0=E.p`
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
`,Ln=E.li`
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
`,X0=E.ul`
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
`,gl=E.a`
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
`,yl=E.svg`
  margin-left: 10px;
`,G0=E.div`
  // width: calc((100% - 24px) / 2);
  max-width: 327px;
  border-radius: 16px;

  @media screen and (min-width: 768px) {
    // width: calc((100% - 24px) / 2);
    max-width: 828px;
    border-radius: 16px;
  }
`,J0=()=>l.jsx(V0,{children:l.jsxs("div",{children:[l.jsx(W0,{children:"Про мене"}),l.jsxs(H0,{children:[l.jsx(G0,{children:l.jsxs("picture",{children:[l.jsx("source",{srcSet:`${hl} 2x, ${hl} 1x`,media:"(min-width: 768px)",type:"image/webp"}),l.jsx("source",{srcSet:`${By} 2x, ${Vy} 1x`,media:"(min-width: 768px)",type:"image/png"}),l.jsx("source",{srcSet:`${Qy}`,media:"(min-width: 375px)",type:"image/webp"}),l.jsx("source",{srcSet:`${Wy} 2x, ${Hy} 1x`,media:"(min-width: 375px)",type:"image/png"}),l.jsx("img",{src:hl,alt:"Ольга Поліщук",width:"828px"})]})}),l.jsxs(Q0,{children:[l.jsx(Y0,{children:"Ольга Поліщук"}),l.jsx(K0,{children:"CEO and Founder студії стратегічного розвитку"}),l.jsxs("ul",{children:[l.jsx(Ln,{children:"MBA Healthcare management"}),l.jsx(Ln,{children:"Викладачка медичного маркетингу Бізнес-школа УКУ (LvBS)"}),l.jsx(Ln,{children:`Експертка в "Центр Розвитку Громадського Здоров'я УКУ"`}),l.jsx(Ln,{children:"Бізнес-консультантка, стратег з медичного маркетингу"}),l.jsx(Ln,{children:'Керівниця проєкту "Стетоскоп" - телеграм канал про медичний менеджмент та маркетингу'}),l.jsx(Ln,{children:"Більше 18 років досвіду в маркетингу та комунікаціях, з них більше 10 років досвіду в медичному та фармацевтичному бізнесі на керівних посадах"}),l.jsx(Ln,{children:"Використання принципів доказової медицини"})]}),l.jsxs(X0,{children:[l.jsx("li",{children:l.jsxs(gl,{href:"https://www.linkedin.com/in/olga-polishchuk-83362140/",target:"_blank",rel:"noopener noreferrer",children:["LinkedIn",l.jsx(yl,{width:"24",height:"24",children:l.jsx("use",{href:`${K}#icon-arrow-up-right`})})]})}),l.jsx("li",{children:l.jsxs(gl,{href:"https://www.facebook.com/olga.polishchuk.14",target:"_blank",rel:"noopener noreferrer",children:["Facebook",l.jsx(yl,{width:"24",height:"24",children:l.jsx("use",{href:`${K}#icon-arrow-up-right`})})]})}),l.jsx("li",{children:l.jsxs(gl,{href:"https://www.instagram.com/olga_healthm/",target:"_blank",rel:"noopener noreferrer",children:["Instagram",l.jsx(yl,{width:"24",height:"24",children:l.jsx("use",{href:`${K}#icon-arrow-up-right`})})]})})]})]})]})]})}),q0=E.section`
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
`,Z0=E.h2`
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
`,ev=E.div`
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
`,tv=E.p`
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
`,nv=E.p`
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
`,ud=E.div`
  display: flex;
  gap: 16px;
  align-items: center;
  margin-bottom: 16px;
`,rv=E.div`
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
`,iv=E.h4`
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
`,ov=E.div`
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
`,sv=E.h4`
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
`,lv=E.p`
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
`,av=E.svg`
  fill: var(--primary-bluedark, #1b3641);
  border-radius: 100px;
  background: rgba(27, 54, 65, 0.2);
  width: 32px;
  height: 32px;
`,uv=E.svg`
  fill: var(--background-white, #fcfcfc);
  border-radius: 100px;
  background: rgba(244, 244, 246, 0.2);
  width: 32px;
  height: 32px;
`,cv=()=>l.jsxs(q0,{id:"aboutUs",children:[l.jsx(Z0,{children:"Про студію"}),l.jsxs(ev,{children:[l.jsx("div",{children:l.jsx(tv,{children:"Студія стратегічного розвитку медичних брендів «Healthy management» надає послуги медичного менеджменту, медичного маркетингу, консалтингу бізнес-процесів та створення стратегій здоров’я для підприємств та бізнесу. Ми співпрацюємо з медичними закладами, лікарями, власниками, керівниками та створюємо спільні стратегії та дії для ефективного просування та розвитку проєктів, використовуючи комплексний підхід"})}),l.jsxs(ov,{children:[l.jsxs(ud,{children:[l.jsx(uv,{children:l.jsx("use",{href:`${K}#icon-star`})}),l.jsx(sv,{children:"Наша місія"})]}),l.jsx(lv,{children:"Будуємо ефективні стратегії по управлінню здоров’ям та створюємо продуктивні дії для популяризації здорового менеджменту"})]}),l.jsxs(rv,{children:[l.jsxs(ud,{children:[l.jsx(av,{children:l.jsx("use",{href:`${K}#icon-star`})}),l.jsx(iv,{children:"Наші цінності"})]}),l.jsx(nv,{children:"Повага, довіра, партнерство та експертність. Будуємо нову культуру управління здоровим менеджментом у медичній галузі"})]})]})]}),dv=E.section`
  padding-top: 80px;
  padding-bottom: 80px;
`,fv=E.div`
  width: 100%;
  border-radius: 16px;
  padding: 80px;
  background-color: var(--background-bluedark);
`,pv=E.h2`
  margin-bottom: 40px;
  font-size: 48px;
  font-weight: 600;
  line-height: 1.17;
  color: var(--system-default-10);

  & span {
    color: var(--primary-yellow);
  }
`,hv=E.ul`
  display: flex;
  justify-content: space-between;
  gap: 24px;
  padding: 24px 0;
`,mv=E.li`
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
`,gv=[{id:1,tool:"Матриця стейкхолдерів"},{id:2,tool:"SWOT аналіз"},{id:3,tool:"Bussines model canvas"},{id:4,tool:"Value proposition canvas"},{id:5,tool:"Customer journey map"}],yv=()=>l.jsx(dv,{className:"container",children:l.jsxs(fv,{children:[l.jsxs(pv,{children:["Бізнес ",l.jsx("span",{children:"інструменти"}),", які використувуємо в партнерстві"]}),l.jsx(hv,{children:gv.map(e=>l.jsx(mv,{children:e.tool},e.id))})]})});var hh={exports:{}},vv="SECRET_DO_NOT_PASS_THIS_OR_YOU_WILL_BE_FIRED",xv=vv,wv=xv;function mh(){}function gh(){}gh.resetWarningCache=mh;var kv=function(){function e(r,i,o,s,a,u){if(u!==wv){var c=new Error("Calling PropTypes validators directly is not supported by the `prop-types` package. Use PropTypes.checkPropTypes() to call them. Read more at http://fb.me/use-check-prop-types");throw c.name="Invariant Violation",c}}e.isRequired=e;function t(){return e}var n={array:e,bigint:e,bool:e,func:e,number:e,object:e,string:e,symbol:e,any:e,arrayOf:t,element:e,elementType:e,instanceOf:t,node:e,objectOf:t,oneOf:t,oneOfType:t,shape:t,exact:t,checkPropTypes:gh,resetWarningCache:mh};return n.PropTypes=n,n};hh.exports=kv();var Sv=hh.exports;const Ai=Na(Sv),Un="/healthy-management-project/assets/icon-footer-MBx-ujYN.svg",jv=E.div`
  padding: 40px 0 0 0;
  background-color: var(--background-bluedark);
`,Ev=E.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
  margin-bottom: 40px;
`,_v=E.a`
  font-size: 16px;
  font-weight: 500;
  line-height: 1.5;
  cursor: pointer;
  border-bottom: 1px solid rgba(244, 244, 246, 0.4);
  color: var(--system-default-10);
`,Cv=E.div`
  display: flex;
  align-items: center;
  gap: 40px;
`,Kr=E.a`
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
`,bv=E.div`
  display: flex;
  gap: 40px;
`,Tv=E.div`
  display: flex;
  gap: 16px;
  align-items: center;
`,Pv=E.a`
  padding: 8px;

  & svg {
    border-radius: 10px;
    background-color: var(--background-white);
    opacity: 0.8;
  }
`,Ov=E.div`
  display: flex;
  flex-direction: column;
`,cd=E.a`
  font-size: 16px;
  font-weight: 500;
  line-height: 1.5;
  color: var(--system-default-10);
`,Rv=E.p`
  padding: 16px 0;
  text-align: center;
  font-size: 12px;
  font-weight: 600;
  line-height: 1.67;
  text-transform: uppercase;
  border-top: 1px solid var(--system-default-20);
  color: var(--system-default-10);
`,Mv=E.div`
  position: fixed;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  background-color: rgba(0, 0, 0, 0.5);
  overflow: hidden;
  z-index: 1100;
`,Av=E.div`
  padding: 80px;
  position: fixed;
  width: 1360px;
  border-radius: 24px;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
  background-color: white;
  z-index: 10000;
`,Nv=E.div`
  height: 32px;
  display: flex;
  justify-content: space-between;
  margin-bottom: 40px;
`,Lv=E.svg`
  width: 24px;
  cursor: pointer;
`,zv=E.h2`
  font-size: 24px;
  font-weight: 600;
  line-height: 32px;
  color: var(--typography-bluedark);
`,Dv=E.ul`
  display: flex;
  flex-wrap: wrap;
  gap: 24px;
`,an=E.li`
  width: 282px;
  padding: 24px;
  gap: 16px;

  border-radius: 16px;
  background: var(--background-bluedark);
  box-shadow: 0px 0px 8px 0px rgba(27, 54, 65, 0.08);
`,un=E.h3`
  display: flex;
  justify-content: center;
  gap: 8px;

  font-size: 16px;
  font-weight: 600;
  line-height: 24px;
  text-align: center;
  color: var(--typography-white);
`,cn=E.p`
  display: flex;
  justify-content: center;

  font-size: 14px;
  font-weight: 500;
  line-height: 18px;
  color: var(--typography-white);
`,dn=E.div`
  gap: 16px;
  display: flex;
  flex-direction: column;
  justify-content: center;
`,dd="/healthy-management-project/assets/Jilia_Kopytko-mYhzlt_-.webp",Fv="/healthy-management-project/assets/Jilia_Kopytko@2x-gruKrAtD.jpg",fd="/healthy-management-project/assets/Yelyzaveta_Domanska-Ru7up7Pj.webp",Iv="/healthy-management-project/assets/Yelyzaveta_Domanska@2x-BYkqrL88.jpg",pd="/healthy-management-project/assets/Oleksandr_Natalukha-YKEBbXyu.webp",$v="/healthy-management-project/assets/Oleksandr_Natalukha@2x-5OsrctvL.jpg",hd="/healthy-management-project/assets/Valentyn_Havrylenko-ouVcypag.webp",Uv="/healthy-management-project/assets/Valentyn_Havrylenko@2x-xBjJM6nL.jpg",md="/healthy-management-project/assets/Olha_Abent-lPe8g7w1.webp",Bv="/healthy-management-project/assets/Olha_Abent@2x-fGgXmj71.jpg",gd="/healthy-management-project/assets/Viktoriia_Moryc-tWw5-4of.webp",Vv="/healthy-management-project/assets/Viktoriia_Moryc@2x-AxiRex6x.jpg",yd="/healthy-management-project/assets/Vyacheslav_Pavlyuk-py_hj3lz.webp",Wv="/healthy-management-project/assets/Vyacheslav_Pavlyuk@2x-2qCtSSAb.jpg",vd="/healthy-management-project/assets/Yaroslav_Li-nn0P6bIv.webp",Hv="/healthy-management-project/assets/Yaroslav_Li@2x-xfuqLdiI.jpg",yh=({handleClose:e,isModalOpen:t})=>{const n=i=>{i.target===i.currentTarget&&e()};ue.useEffect(()=>{const i=document.body,o=()=>{t?i.classList.add("body-no-scroll"):i.classList.remove("body-no-scroll")},s=a=>{a.code==="Escape"&&t&&e()};return o(),window.addEventListener("keydown",s),()=>{window.removeEventListener("keydown",s)}},[e,t]);const r=document.getElementById("modal");return t?Uy.createPortal(l.jsx(Mv,{onClick:n,children:l.jsxs(Av,{isModalOpen:t,children:[l.jsxs(Nv,{children:[l.jsx(zv,{children:"Команда, яка створила сторінку"}),l.jsx(Lv,{onClick:e,children:l.jsx("use",{href:`${K}#icon-close`})})]}),l.jsxs(Dv,{children:[l.jsxs(an,{children:[l.jsxs(dn,{children:[l.jsx("img",{src:gd,srcSet:`${gd} 1x, ${Vv} 2x`,alt:"Вікторія Мориц"}),l.jsxs(un,{children:["Вікторія Мориц",l.jsx("a",{href:"https://www.linkedin.com/in/viktoriia-moryc-61610962/",target:"_blank",rel:"noopener noreferrer",children:l.jsx("svg",{width:"24",height:"24",children:l.jsx("use",{href:`${K}#icon-linkedin`})})})]})]}),l.jsx(cn,{children:"Project Manager"})]}),l.jsxs(an,{children:[l.jsxs(dn,{children:[l.jsx("img",{src:dd,srcSet:`${dd} 1x, ${Fv} 2x`,alt:"Юлія Копитко"}),l.jsxs(un,{children:["Юлія Копитко",l.jsx("a",{href:"https://www.linkedin.com/in/juliakopytko/",target:"_blank",rel:"noopener noreferrer",children:l.jsx("svg",{width:"24",height:"24",children:l.jsx("use",{href:`${K}#icon-linkedin`})})})]})]}),l.jsx(cn,{children:"UX/UI Designer"})]}),l.jsxs(an,{children:[l.jsxs(dn,{children:[l.jsx("img",{src:vd,srcSet:`${vd} 1x, ${Hv} 2x`,alt:"Ярослав Лі"}),l.jsxs(un,{children:["Ярослав Лі",l.jsx("a",{href:"https://www.linkedin.com/in/yaroslav-lee-b7070b294",target:"_blank",rel:"noopener noreferrer",children:l.jsx("svg",{width:"24",height:"24",children:l.jsx("use",{href:`${K}#icon-linkedin`})})})]})]}),l.jsx(cn,{children:"Frontend Developer"})]}),l.jsxs(an,{children:[l.jsxs(dn,{children:[l.jsx("img",{src:fd,srcSet:`${fd} 1x, ${Iv} 2x`,alt:"Єлизавета Доманська"}),l.jsxs(un,{children:["Єлизавета Доманська",l.jsx("a",{href:"https://www.linkedin.com/in/yelyzaveta-domanska-2185a5292/",target:"_blank",rel:"noopener noreferrer",children:l.jsx("svg",{width:"24",height:"24",children:l.jsx("use",{href:`${K}#icon-linkedin`})})})]})]}),l.jsx(cn,{children:"Frontend Developer"})]}),l.jsxs(an,{children:[l.jsxs(dn,{children:[l.jsx("img",{src:pd,srcSet:`${pd} 1x, ${$v} 2x`,alt:"Олександр Наталуха"}),l.jsxs(un,{children:["Олександр Наталуха",l.jsx("a",{href:"https://www.linkedin.com/in/oleksandr-natalukha",target:"_blank",rel:"noopener noreferrer",children:l.jsx("svg",{width:"24",height:"24",children:l.jsx("use",{href:`${K}#icon-linkedin`})})})]})]}),l.jsx(cn,{children:"Frontend Developer"})]}),l.jsxs(an,{children:[l.jsxs(dn,{children:[l.jsx("img",{src:hd,srcSet:`${hd} 1x, ${Uv} 2x`,alt:"Валентин Гавриленко"}),l.jsxs(un,{children:["Валентин Гавриленко",l.jsx("a",{href:"https://www.linkedin.com/in/valentyn-havrylenko/",target:"_blank",rel:"noopener noreferrer",children:l.jsx("svg",{width:"24",height:"24",children:l.jsx("use",{href:`${K}#icon-linkedin`})})})]})]}),l.jsx(cn,{children:"Frontend Developer"})]}),l.jsxs(an,{children:[l.jsxs(dn,{children:[l.jsx("img",{src:yd,srcSet:`${yd} 1x, ${Wv} 2x`,alt:"В´ячеслав Павлюк"}),l.jsxs(un,{children:["В'ячеслав Павлюк",l.jsx("a",{href:"https://www.linkedin.com/in/vyacheslav-pavlyuk/",target:"_blank",rel:"noopener noreferrer",children:l.jsx("svg",{width:"24",height:"24",children:l.jsx("use",{href:`${K}#icon-linkedin`})})})]})]}),l.jsx(cn,{children:"Fullstack Developer"})]}),l.jsxs(an,{children:[l.jsxs(dn,{children:[l.jsx("img",{src:md,srcSet:`${md} 1x, ${Bv} 2x`,alt:"Ольга Абент"}),l.jsxs(un,{children:["Ольга Абент",l.jsx("a",{href:"https://www.linkedin.com/in/abentolga/",target:"_blank",rel:"noopener noreferrer",children:l.jsx("svg",{width:"24",height:"24",children:l.jsx("use",{href:`${K}#icon-linkedin`})})})]})]}),l.jsx(cn,{children:"QA Engineer"})]})]})]})}),r):null};yh.propTypes={handleClose:Ai.func.isRequired,isModalOpen:Ai.bool.isRequired};const vh=({handleSetActiveLink:e})=>{const[t,n]=ue.useState(!1),r=()=>{n(!0)},i=()=>{n(!1)};return l.jsxs(jv,{id:"footer",children:[l.jsxs(Ev,{className:"container",children:[l.jsx("svg",{width:"227",height:"40",children:l.jsx("use",{href:`${Un}#logo-white`})}),l.jsx(_v,{onClick:r,children:"created by GoIT students"}),l.jsx(yh,{handleClose:i,isModalOpen:t}),l.jsxs(Cv,{children:[l.jsx(Kr,{href:"#home",onClick:o=>e("home",o),children:"Головна"}),l.jsx(Kr,{href:"#aboutUs",onClick:o=>e("aboutUs",o),children:"Про нас"}),l.jsx(Kr,{href:"#services",onClick:o=>e("services",o),children:"Послуги"}),l.jsx(Kr,{href:"#mentoring",onClick:o=>e("mentoring",o),children:"Менторство"}),l.jsx(Kr,{href:"#projects",onClick:o=>e("projects",o),children:"Проєкти"})]}),l.jsxs(bv,{children:[l.jsxs(Tv,{children:[l.jsx(Pv,{href:"https://www.facebook.com/profile.php?id=61551346490841",target:"_blank",rel:"noopener noreferrer",children:l.jsx("svg",{width:"32",height:"32",children:l.jsx("use",{href:`${Un}#facebook`})})}),l.jsx("a",{href:"https://www.instagram.com/healthymanagement_ua/",target:"_blank",rel:"noopener noreferrer",children:l.jsx("svg",{width:"40",height:"40",children:l.jsx("use",{href:`${Un}#instagram`})})})]}),l.jsxs(Ov,{children:[l.jsx(cd,{href:"mailto:managementhealthy@gmail.com",children:"managementhealthy@gmail.com"}),l.jsx(cd,{href:"tel:+380673160556",children:"+380 673 160 556"})]})]})]}),l.jsx(Rv,{children:"© 2023 healthy managment. All rights reserved"})]})};vh.propTypes={handleSetActiveLink:Ai.func.isRequired};const us="/healthy-management-project/assets/symbol-defs-t7xx9-KA.svg",Qv=E.header`
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
`,Yv=E.div`
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
`,Kv=E.nav`
  display: flex;
  gap: 40px;
  align-items: center;
`,Xr=E.a`
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
`,Xv=E.a`
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
`,Gv=E.svg`
  stroke: black;
  width: 40px;
  height: 40px;
`,Jv=E.button`
  border: none;
  padding: 0;
  margin: 0;
  text-decoration: none;
  font-family: inherit;
  font-size: 100%;
  cursor: pointer;
  background: none;
`;var xh={exports:{}};(function(e,t){(function(r,i){e.exports=i(ue)})(gm,n=>(()=>{var r={"./node_modules/css-mediaquery/index.js":(a,u)=>{u.match=y,u.parse=v;var c=/(?:(only|not)?\s*([^\s\(\)]+)(?:\s*and)?\s*)?(.+)?/i,m=/\(\s*([^\s\:\)]+)\s*(?:\:\s*([^\s\)]+))?\s*\)/,f=/^(?:(min|max)-)?(.+)/,h=/(em|rem|px|cm|mm|in|pt|pc)?$/,w=/(dpi|dpcm|dppx)?$/;function y(g,k){return v(g).some(function(_){var P=_.inverse,C=_.type==="all"||k.type===_.type;if(C&&P||!(C||P))return!1;var N=_.expressions.every(function(O){var L=O.feature,W=O.modifier,$=O.value,D=k[L];if(!D)return!1;switch(L){case"orientation":case"scan":return D.toLowerCase()===$.toLowerCase();case"width":case"height":case"device-width":case"device-height":$=d($),D=d(D);break;case"resolution":$=p($),D=p(D);break;case"aspect-ratio":case"device-aspect-ratio":case"device-pixel-ratio":$=b($),D=b(D);break;case"grid":case"color":case"color-index":case"monochrome":$=parseInt($,10)||1,D=parseInt(D,10)||0;break}switch(W){case"min":return D>=$;case"max":return D<=$;default:return D===$}});return N&&!P||!N&&P})}function v(g){return g.split(",").map(function(k){k=k.trim();var _=k.match(c),P=_[1],C=_[2],N=_[3]||"",O={};return O.inverse=!!P&&P.toLowerCase()==="not",O.type=C?C.toLowerCase():"all",N=N.match(/\([^\)]+\)/g)||[],O.expressions=N.map(function(L){var W=L.match(m),$=W[1].toLowerCase().match(f);return{modifier:$[1],feature:$[2],value:W[2]}}),O})}function b(g){var k=Number(g),_;return k||(_=g.match(/^(\d+)\s*\/\s*(\d+)$/),k=_[1]/_[2]),k}function p(g){var k=parseFloat(g),_=String(g).match(w)[1];switch(_){case"dpcm":return k/2.54;case"dppx":return k*96;default:return k}}function d(g){var k=parseFloat(g),_=String(g).match(h)[1];switch(_){case"em":return k*16;case"rem":return k*16;case"cm":return k*96/2.54;case"mm":return k*96/2.54/10;case"in":return k*96;case"pt":return k*72;case"pc":return k*72/12;default:return k}}},"./node_modules/hyphenate-style-name/index.js":(a,u,c)=>{c.r(u),c.d(u,{default:()=>v});var m=/[A-Z]/g,f=/^ms-/,h={};function w(b){return"-"+b.toLowerCase()}function y(b){if(h.hasOwnProperty(b))return h[b];var p=b.replace(m,w);return h[b]=f.test(p)?"-"+p:p}const v=y},"./node_modules/matchmediaquery/index.js":(a,u,c)=>{var m=c("./node_modules/css-mediaquery/index.js").match,f=typeof window<"u"?window.matchMedia:null;function h(y,v,b){var p=this;if(f&&!b){var d=f.call(window,y);this.matches=d.matches,this.media=d.media,d.addListener(_)}else this.matches=m(y,v),this.media=y;this.addListener=g,this.removeListener=k,this.dispose=P;function g(C){d&&d.addListener(C)}function k(C){d&&d.removeListener(C)}function _(C){p.matches=C.matches,p.media=C.media}function P(){d&&d.removeListener(_)}}function w(y,v,b){return new h(y,v,b)}a.exports=w},"./node_modules/object-assign/index.js":a=>{/*
object-assign
(c) Sindre Sorhus
@license MIT
*/var u=Object.getOwnPropertySymbols,c=Object.prototype.hasOwnProperty,m=Object.prototype.propertyIsEnumerable;function f(w){if(w==null)throw new TypeError("Object.assign cannot be called with null or undefined");return Object(w)}function h(){try{if(!Object.assign)return!1;var w=new String("abc");if(w[5]="de",Object.getOwnPropertyNames(w)[0]==="5")return!1;for(var y={},v=0;v<10;v++)y["_"+String.fromCharCode(v)]=v;var b=Object.getOwnPropertyNames(y).map(function(d){return y[d]});if(b.join("")!=="0123456789")return!1;var p={};return"abcdefghijklmnopqrst".split("").forEach(function(d){p[d]=d}),Object.keys(Object.assign({},p)).join("")==="abcdefghijklmnopqrst"}catch{return!1}}a.exports=h()?Object.assign:function(w,y){for(var v,b=f(w),p,d=1;d<arguments.length;d++){v=Object(arguments[d]);for(var g in v)c.call(v,g)&&(b[g]=v[g]);if(u){p=u(v);for(var k=0;k<p.length;k++)m.call(v,p[k])&&(b[p[k]]=v[p[k]])}}return b}},"./node_modules/prop-types/checkPropTypes.js":(a,u,c)=>{var m=function(){};{var f=c("./node_modules/prop-types/lib/ReactPropTypesSecret.js"),h={},w=c("./node_modules/prop-types/lib/has.js");m=function(v){var b="Warning: "+v;typeof console<"u"&&console.error(b);try{throw new Error(b)}catch{}}}function y(v,b,p,d,g){for(var k in v)if(w(v,k)){var _;try{if(typeof v[k]!="function"){var P=Error((d||"React class")+": "+p+" type `"+k+"` is invalid; it must be a function, usually from the `prop-types` package, but received `"+typeof v[k]+"`.This often happens because of typos such as `PropTypes.function` instead of `PropTypes.func`.");throw P.name="Invariant Violation",P}_=v[k](b,k,d,p,null,f)}catch(N){_=N}if(_&&!(_ instanceof Error)&&m((d||"React class")+": type specification of "+p+" `"+k+"` is invalid; the type checker function must return `null` or an `Error` but returned a "+typeof _+". You may have forgotten to pass an argument to the type checker creator (arrayOf, instanceOf, objectOf, oneOf, oneOfType, and shape all require an argument)."),_ instanceof Error&&!(_.message in h)){h[_.message]=!0;var C=g?g():"";m("Failed "+p+" type: "+_.message+(C??""))}}}y.resetWarningCache=function(){h={}},a.exports=y},"./node_modules/prop-types/factoryWithTypeCheckers.js":(a,u,c)=>{var m=c("./node_modules/react-is/index.js"),f=c("./node_modules/object-assign/index.js"),h=c("./node_modules/prop-types/lib/ReactPropTypesSecret.js"),w=c("./node_modules/prop-types/lib/has.js"),y=c("./node_modules/prop-types/checkPropTypes.js"),v=function(){};v=function(p){var d="Warning: "+p;typeof console<"u"&&console.error(d);try{throw new Error(d)}catch{}};function b(){return null}a.exports=function(p,d){var g=typeof Symbol=="function"&&Symbol.iterator,k="@@iterator";function _(M){var B=M&&(g&&M[g]||M[k]);if(typeof B=="function")return B}var P="<<anonymous>>",C={array:W("array"),bigint:W("bigint"),bool:W("boolean"),func:W("function"),number:W("number"),object:W("object"),string:W("string"),symbol:W("symbol"),any:$(),arrayOf:D,element:G(),elementType:ce(),instanceOf:fe,node:Y(),objectOf:I,oneOf:Ne,oneOfType:H,shape:me,exact:St};function N(M,B){return M===B?M!==0||1/M===1/B:M!==M&&B!==B}function O(M,B){this.message=M,this.data=B&&typeof B=="object"?B:{},this.stack=""}O.prototype=Error.prototype;function L(M){var B={},J=0;function q(ne,Z,ee,ie,x,j,S){if(ie=ie||P,j=j||ee,S!==h){if(d){var F=new Error("Calling PropTypes validators directly is not supported by the `prop-types` package. Use `PropTypes.checkPropTypes()` to call them. Read more at http://fb.me/use-check-prop-types");throw F.name="Invariant Violation",F}else if(typeof console<"u"){var z=ie+":"+ee;!B[z]&&J<3&&(v("You are manually calling a React.PropTypes validation function for the `"+j+"` prop on `"+ie+"`. This is deprecated and will throw in the standalone `prop-types` package. You may be seeing this warning due to a third-party PropTypes library. See https://fb.me/react-warning-dont-call-proptypes for details."),B[z]=!0,J++)}}return Z[ee]==null?ne?Z[ee]===null?new O("The "+x+" `"+j+"` is marked as required "+("in `"+ie+"`, but its value is `null`.")):new O("The "+x+" `"+j+"` is marked as required in "+("`"+ie+"`, but its value is `undefined`.")):null:M(Z,ee,ie,x,j)}var X=q.bind(null,!1);return X.isRequired=q.bind(null,!0),X}function W(M){function B(J,q,X,ne,Z,ee){var ie=J[q],x=Ce(ie);if(x!==M){var j=De(ie);return new O("Invalid "+ne+" `"+Z+"` of type "+("`"+j+"` supplied to `"+X+"`, expected ")+("`"+M+"`."),{expectedType:M})}return null}return L(B)}function $(){return L(b)}function D(M){function B(J,q,X,ne,Z){if(typeof M!="function")return new O("Property `"+Z+"` of component `"+X+"` has invalid PropType notation inside arrayOf.");var ee=J[q];if(!Array.isArray(ee)){var ie=Ce(ee);return new O("Invalid "+ne+" `"+Z+"` of type "+("`"+ie+"` supplied to `"+X+"`, expected an array."))}for(var x=0;x<ee.length;x++){var j=M(ee,x,X,ne,Z+"["+x+"]",h);if(j instanceof Error)return j}return null}return L(B)}function G(){function M(B,J,q,X,ne){var Z=B[J];if(!p(Z)){var ee=Ce(Z);return new O("Invalid "+X+" `"+ne+"` of type "+("`"+ee+"` supplied to `"+q+"`, expected a single ReactElement."))}return null}return L(M)}function ce(){function M(B,J,q,X,ne){var Z=B[J];if(!m.isValidElementType(Z)){var ee=Ce(Z);return new O("Invalid "+X+" `"+ne+"` of type "+("`"+ee+"` supplied to `"+q+"`, expected a single ReactElement type."))}return null}return L(M)}function fe(M){function B(J,q,X,ne,Z){if(!(J[q]instanceof M)){var ee=M.name||P,ie=sn(J[q]);return new O("Invalid "+ne+" `"+Z+"` of type "+("`"+ie+"` supplied to `"+X+"`, expected ")+("instance of `"+ee+"`."))}return null}return L(B)}function Ne(M){if(!Array.isArray(M))return arguments.length>1?v("Invalid arguments supplied to oneOf, expected an array, got "+arguments.length+" arguments. A common mistake is to write oneOf(x, y, z) instead of oneOf([x, y, z])."):v("Invalid argument supplied to oneOf, expected an array."),b;function B(J,q,X,ne,Z){for(var ee=J[q],ie=0;ie<M.length;ie++)if(N(ee,M[ie]))return null;var x=JSON.stringify(M,function(S,F){var z=De(F);return z==="symbol"?String(F):F});return new O("Invalid "+ne+" `"+Z+"` of value `"+String(ee)+"` "+("supplied to `"+X+"`, expected one of "+x+"."))}return L(B)}function I(M){function B(J,q,X,ne,Z){if(typeof M!="function")return new O("Property `"+Z+"` of component `"+X+"` has invalid PropType notation inside objectOf.");var ee=J[q],ie=Ce(ee);if(ie!=="object")return new O("Invalid "+ne+" `"+Z+"` of type "+("`"+ie+"` supplied to `"+X+"`, expected an object."));for(var x in ee)if(w(ee,x)){var j=M(ee,x,X,ne,Z+"."+x,h);if(j instanceof Error)return j}return null}return L(B)}function H(M){if(!Array.isArray(M))return v("Invalid argument supplied to oneOfType, expected an instance of array."),b;for(var B=0;B<M.length;B++){var J=M[B];if(typeof J!="function")return v("Invalid argument supplied to oneOfType. Expected an array of check functions, but received "+qn(J)+" at index "+B+"."),b}function q(X,ne,Z,ee,ie){for(var x=[],j=0;j<M.length;j++){var S=M[j],F=S(X,ne,Z,ee,ie,h);if(F==null)return null;F.data&&w(F.data,"expectedType")&&x.push(F.data.expectedType)}var z=x.length>0?", expected one of type ["+x.join(", ")+"]":"";return new O("Invalid "+ee+" `"+ie+"` supplied to "+("`"+Z+"`"+z+"."))}return L(q)}function Y(){function M(B,J,q,X,ne){return Ve(B[J])?null:new O("Invalid "+X+" `"+ne+"` supplied to "+("`"+q+"`, expected a ReactNode."))}return L(M)}function ae(M,B,J,q,X){return new O((M||"React class")+": "+B+" type `"+J+"."+q+"` is invalid; it must be a function, usually from the `prop-types` package, but received `"+X+"`.")}function me(M){function B(J,q,X,ne,Z){var ee=J[q],ie=Ce(ee);if(ie!=="object")return new O("Invalid "+ne+" `"+Z+"` of type `"+ie+"` "+("supplied to `"+X+"`, expected `object`."));for(var x in M){var j=M[x];if(typeof j!="function")return ae(X,ne,Z,x,De(j));var S=j(ee,x,X,ne,Z+"."+x,h);if(S)return S}return null}return L(B)}function St(M){function B(J,q,X,ne,Z){var ee=J[q],ie=Ce(ee);if(ie!=="object")return new O("Invalid "+ne+" `"+Z+"` of type `"+ie+"` "+("supplied to `"+X+"`, expected `object`."));var x=f({},J[q],M);for(var j in x){var S=M[j];if(w(M,j)&&typeof S!="function")return ae(X,ne,Z,j,De(S));if(!S)return new O("Invalid "+ne+" `"+Z+"` key `"+j+"` supplied to `"+X+"`.\nBad object: "+JSON.stringify(J[q],null,"  ")+`
Valid keys: `+JSON.stringify(Object.keys(M),null,"  "));var F=S(ee,j,X,ne,Z+"."+j,h);if(F)return F}return null}return L(B)}function Ve(M){switch(typeof M){case"number":case"string":case"undefined":return!0;case"boolean":return!M;case"object":if(Array.isArray(M))return M.every(Ve);if(M===null||p(M))return!0;var B=_(M);if(B){var J=B.call(M),q;if(B!==M.entries){for(;!(q=J.next()).done;)if(!Ve(q.value))return!1}else for(;!(q=J.next()).done;){var X=q.value;if(X&&!Ve(X[1]))return!1}}else return!1;return!0;default:return!1}}function At(M,B){return M==="symbol"?!0:B?B["@@toStringTag"]==="Symbol"||typeof Symbol=="function"&&B instanceof Symbol:!1}function Ce(M){var B=typeof M;return Array.isArray(M)?"array":M instanceof RegExp?"object":At(B,M)?"symbol":B}function De(M){if(typeof M>"u"||M===null)return""+M;var B=Ce(M);if(B==="object"){if(M instanceof Date)return"date";if(M instanceof RegExp)return"regexp"}return B}function qn(M){var B=De(M);switch(B){case"array":case"object":return"an "+B;case"boolean":case"date":case"regexp":return"a "+B;default:return B}}function sn(M){return!M.constructor||!M.constructor.name?P:M.constructor.name}return C.checkPropTypes=y,C.resetWarningCache=y.resetWarningCache,C.PropTypes=C,C}},"./node_modules/prop-types/index.js":(a,u,c)=>{{var m=c("./node_modules/react-is/index.js"),f=!0;a.exports=c("./node_modules/prop-types/factoryWithTypeCheckers.js")(m.isElement,f)}},"./node_modules/prop-types/lib/ReactPropTypesSecret.js":a=>{var u="SECRET_DO_NOT_PASS_THIS_OR_YOU_WILL_BE_FIRED";a.exports=u},"./node_modules/prop-types/lib/has.js":a=>{a.exports=Function.call.bind(Object.prototype.hasOwnProperty)},"./node_modules/react-is/cjs/react-is.development.js":(a,u)=>{/** @license React v16.13.1
 * react-is.development.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */(function(){var c=typeof Symbol=="function"&&Symbol.for,m=c?Symbol.for("react.element"):60103,f=c?Symbol.for("react.portal"):60106,h=c?Symbol.for("react.fragment"):60107,w=c?Symbol.for("react.strict_mode"):60108,y=c?Symbol.for("react.profiler"):60114,v=c?Symbol.for("react.provider"):60109,b=c?Symbol.for("react.context"):60110,p=c?Symbol.for("react.async_mode"):60111,d=c?Symbol.for("react.concurrent_mode"):60111,g=c?Symbol.for("react.forward_ref"):60112,k=c?Symbol.for("react.suspense"):60113,_=c?Symbol.for("react.suspense_list"):60120,P=c?Symbol.for("react.memo"):60115,C=c?Symbol.for("react.lazy"):60116,N=c?Symbol.for("react.block"):60121,O=c?Symbol.for("react.fundamental"):60117,L=c?Symbol.for("react.responder"):60118,W=c?Symbol.for("react.scope"):60119;function $(S){return typeof S=="string"||typeof S=="function"||S===h||S===d||S===y||S===w||S===k||S===_||typeof S=="object"&&S!==null&&(S.$$typeof===C||S.$$typeof===P||S.$$typeof===v||S.$$typeof===b||S.$$typeof===g||S.$$typeof===O||S.$$typeof===L||S.$$typeof===W||S.$$typeof===N)}function D(S){if(typeof S=="object"&&S!==null){var F=S.$$typeof;switch(F){case m:var z=S.type;switch(z){case p:case d:case h:case y:case w:case k:return z;default:var A=z&&z.$$typeof;switch(A){case b:case g:case C:case P:case v:return A;default:return F}}case f:return F}}}var G=p,ce=d,fe=b,Ne=v,I=m,H=g,Y=h,ae=C,me=P,St=f,Ve=y,At=w,Ce=k,De=!1;function qn(S){return De||(De=!0,console.warn("The ReactIs.isAsyncMode() alias has been deprecated, and will be removed in React 17+. Update your code to use ReactIs.isConcurrentMode() instead. It has the exact same API.")),sn(S)||D(S)===p}function sn(S){return D(S)===d}function M(S){return D(S)===b}function B(S){return D(S)===v}function J(S){return typeof S=="object"&&S!==null&&S.$$typeof===m}function q(S){return D(S)===g}function X(S){return D(S)===h}function ne(S){return D(S)===C}function Z(S){return D(S)===P}function ee(S){return D(S)===f}function ie(S){return D(S)===y}function x(S){return D(S)===w}function j(S){return D(S)===k}u.AsyncMode=G,u.ConcurrentMode=ce,u.ContextConsumer=fe,u.ContextProvider=Ne,u.Element=I,u.ForwardRef=H,u.Fragment=Y,u.Lazy=ae,u.Memo=me,u.Portal=St,u.Profiler=Ve,u.StrictMode=At,u.Suspense=Ce,u.isAsyncMode=qn,u.isConcurrentMode=sn,u.isContextConsumer=M,u.isContextProvider=B,u.isElement=J,u.isForwardRef=q,u.isFragment=X,u.isLazy=ne,u.isMemo=Z,u.isPortal=ee,u.isProfiler=ie,u.isStrictMode=x,u.isSuspense=j,u.isValidElementType=$,u.typeOf=D})()},"./node_modules/react-is/index.js":(a,u,c)=>{a.exports=c("./node_modules/react-is/cjs/react-is.development.js")},"./node_modules/shallow-equal/dist/index.esm.js":(a,u,c)=>{c.r(u),c.d(u,{shallowEqualArrays:()=>f,shallowEqualObjects:()=>m});function m(h,w){if(h===w)return!0;if(!h||!w)return!1;var y=Object.keys(h),v=Object.keys(w),b=y.length;if(v.length!==b)return!1;for(var p=0;p<b;p++){var d=y[p];if(h[d]!==w[d]||!Object.prototype.hasOwnProperty.call(w,d))return!1}return!0}function f(h,w){if(h===w)return!0;if(!h||!w)return!1;var y=h.length;if(w.length!==y)return!1;for(var v=0;v<y;v++)if(h[v]!==w[v])return!1;return!0}},"./src/Component.ts":function(a,u,c){var m=this&&this.__rest||function(y,v){var b={};for(var p in y)Object.prototype.hasOwnProperty.call(y,p)&&v.indexOf(p)<0&&(b[p]=y[p]);if(y!=null&&typeof Object.getOwnPropertySymbols=="function")for(var d=0,p=Object.getOwnPropertySymbols(y);d<p.length;d++)v.indexOf(p[d])<0&&Object.prototype.propertyIsEnumerable.call(y,p[d])&&(b[p[d]]=y[p[d]]);return b},f=this&&this.__importDefault||function(y){return y&&y.__esModule?y:{default:y}};Object.defineProperty(u,"__esModule",{value:!0});var h=f(c("./src/useMediaQuery.ts")),w=function(y){var v=y.children,b=y.device,p=y.onChange,d=m(y,["children","device","onChange"]),g=(0,h.default)(d,b,p);return typeof v=="function"?v(g):g?v:null};u.default=w},"./src/Context.ts":(a,u,c)=>{Object.defineProperty(u,"__esModule",{value:!0});var m=c("react"),f=(0,m.createContext)(void 0);u.default=f},"./src/index.ts":function(a,u,c){var m=this&&this.__importDefault||function(v){return v&&v.__esModule?v:{default:v}};Object.defineProperty(u,"__esModule",{value:!0}),u.Context=u.toQuery=u.useMediaQuery=u.default=void 0;var f=m(c("./src/useMediaQuery.ts"));u.useMediaQuery=f.default;var h=m(c("./src/Component.ts"));u.default=h.default;var w=m(c("./src/toQuery.ts"));u.toQuery=w.default;var y=m(c("./src/Context.ts"));u.Context=y.default},"./src/mediaQuery.ts":function(a,u,c){var m=this&&this.__assign||function(){return m=Object.assign||function(k){for(var _,P=1,C=arguments.length;P<C;P++){_=arguments[P];for(var N in _)Object.prototype.hasOwnProperty.call(_,N)&&(k[N]=_[N])}return k},m.apply(this,arguments)},f=this&&this.__rest||function(k,_){var P={};for(var C in k)Object.prototype.hasOwnProperty.call(k,C)&&_.indexOf(C)<0&&(P[C]=k[C]);if(k!=null&&typeof Object.getOwnPropertySymbols=="function")for(var N=0,C=Object.getOwnPropertySymbols(k);N<C.length;N++)_.indexOf(C[N])<0&&Object.prototype.propertyIsEnumerable.call(k,C[N])&&(P[C[N]]=k[C[N]]);return P},h=this&&this.__importDefault||function(k){return k&&k.__esModule?k:{default:k}};Object.defineProperty(u,"__esModule",{value:!0});var w=h(c("./node_modules/prop-types/index.js")),y=w.default.oneOfType([w.default.string,w.default.number]),v={all:w.default.bool,grid:w.default.bool,aural:w.default.bool,braille:w.default.bool,handheld:w.default.bool,print:w.default.bool,projection:w.default.bool,screen:w.default.bool,tty:w.default.bool,tv:w.default.bool,embossed:w.default.bool},b={orientation:w.default.oneOf(["portrait","landscape"]),scan:w.default.oneOf(["progressive","interlace"]),aspectRatio:w.default.string,deviceAspectRatio:w.default.string,height:y,deviceHeight:y,width:y,deviceWidth:y,color:w.default.bool,colorIndex:w.default.bool,monochrome:w.default.bool,resolution:y,type:Object.keys(v)};b.type;var p=f(b,["type"]),d=m({minAspectRatio:w.default.string,maxAspectRatio:w.default.string,minDeviceAspectRatio:w.default.string,maxDeviceAspectRatio:w.default.string,minHeight:y,maxHeight:y,minDeviceHeight:y,maxDeviceHeight:y,minWidth:y,maxWidth:y,minDeviceWidth:y,maxDeviceWidth:y,minColor:w.default.number,maxColor:w.default.number,minColorIndex:w.default.number,maxColorIndex:w.default.number,minMonochrome:w.default.number,maxMonochrome:w.default.number,minResolution:y,maxResolution:y},p),g=m(m({},v),d);u.default={all:g,types:v,matchers:b,features:d}},"./src/toQuery.ts":function(a,u,c){var m=this&&this.__importDefault||function(p){return p&&p.__esModule?p:{default:p}};Object.defineProperty(u,"__esModule",{value:!0});var f=m(c("./node_modules/hyphenate-style-name/index.js")),h=m(c("./src/mediaQuery.ts")),w=function(p){return"not ".concat(p)},y=function(p,d){var g=(0,f.default)(p);return typeof d=="number"&&(d="".concat(d,"px")),d===!0?g:d===!1?w(g):"(".concat(g,": ").concat(d,")")},v=function(p){return p.join(" and ")},b=function(p){var d=[];return Object.keys(h.default.all).forEach(function(g){var k=p[g];k!=null&&d.push(y(g,k))}),v(d)};u.default=b},"./src/useMediaQuery.ts":function(a,u,c){var m=this&&this.__importDefault||function(O){return O&&O.__esModule?O:{default:O}};Object.defineProperty(u,"__esModule",{value:!0});var f=c("react"),h=m(c("./node_modules/matchmediaquery/index.js")),w=m(c("./node_modules/hyphenate-style-name/index.js")),y=c("./node_modules/shallow-equal/dist/index.esm.js"),v=m(c("./src/toQuery.ts")),b=m(c("./src/Context.ts")),p=function(O){return O.query||(0,v.default)(O)},d=function(O){if(O){var L=Object.keys(O);return L.reduce(function(W,$){return W[(0,w.default)($)]=O[$],W},{})}},g=function(){var O=(0,f.useRef)(!1);return(0,f.useEffect)(function(){O.current=!0},[]),O.current},k=function(O){var L=(0,f.useContext)(b.default),W=function(){return d(O)||d(L)},$=(0,f.useState)(W),D=$[0],G=$[1];return(0,f.useEffect)(function(){var ce=W();(0,y.shallowEqualObjects)(D,ce)||G(ce)},[O,L]),D},_=function(O){var L=function(){return p(O)},W=(0,f.useState)(L),$=W[0],D=W[1];return(0,f.useEffect)(function(){var G=L();$!==G&&D(G)},[O]),$},P=function(O,L){var W=function(){return(0,h.default)(O,L||{},!!L)},$=(0,f.useState)(W),D=$[0],G=$[1],ce=g();return(0,f.useEffect)(function(){if(ce){var fe=W();return G(fe),function(){fe&&fe.dispose()}}},[O,L]),D},C=function(O){var L=(0,f.useState)(O.matches),W=L[0],$=L[1];return(0,f.useEffect)(function(){var D=function(G){$(G.matches)};return O.addListener(D),$(O.matches),function(){O.removeListener(D)}},[O]),W},N=function(O,L,W){var $=k(L),D=_(O);if(!D)throw new Error("Invalid or missing MediaQuery!");var G=P(D,$),ce=C(G),fe=g();return(0,f.useEffect)(function(){fe&&W&&W(ce)},[ce]),(0,f.useEffect)(function(){return function(){G&&G.dispose()}},[]),ce};u.default=N},react:a=>{a.exports=n}},i={};function o(a){var u=i[a];if(u!==void 0)return u.exports;var c=i[a]={exports:{}};return r[a].call(c.exports,c,c.exports,o),c.exports}o.d=(a,u)=>{for(var c in u)o.o(u,c)&&!o.o(a,c)&&Object.defineProperty(a,c,{enumerable:!0,get:u[c]})},o.o=(a,u)=>Object.prototype.hasOwnProperty.call(a,u),o.r=a=>{typeof Symbol<"u"&&Symbol.toStringTag&&Object.defineProperty(a,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(a,"__esModule",{value:!0})};var s=o("./src/index.ts");return s})())})(xh);var gr=xh.exports;const qv="_mabileMenuContainer_1kj9j_1",Zv="_divMobileMenu_1kj9j_13",ex="_logoMenu_1kj9j_24",tx="_contactMenu_1kj9j_28",nx="_svgMenu_1kj9j_51",rx="_nav_1kj9j_55",ix="_navMenuMobile_1kj9j_66",ox="_buttonMenuMobile_1kj9j_75",Et={mabileMenuContainer:qv,divMobileMenu:Zv,logoMenu:ex,contactMenu:tx,svgMenu:nx,nav:rx,navMenuMobile:ix,buttonMenuMobile:ox},sx=document.getElementById("modalMobail"),wh=({onClose:e,handleSetActiveLink:t})=>Pu.createPortal(l.jsxs("div",{className:Et.mabileMenuContainer,children:[l.jsxs("div",{className:Et.divMobileMenu,children:[l.jsx("a",{href:"#home",children:l.jsx("svg",{width:"40",height:"40",children:l.jsx("use",{href:`${us}#icon-g10`})})}),l.jsx("a",{className:Et.contactMenu,href:"#contact",children:"Контакт"}),l.jsx("button",{className:Et.buttonMenuMobile,type:"button",onClick:()=>e(),children:l.jsx("svg",{className:Et.svgMenu,width:"40",height:"40",children:l.jsx("use",{href:`${us}#icon-close`})})})]}),l.jsxs("nav",{className:Et.nav,children:[l.jsx("a",{className:Et.navMenuMobile,href:"#home",onClick:n=>{e(),t("home",n)},children:"Головна"}),l.jsx("a",{className:Et.navMenuMobile,href:"#aboutUs",onClick:n=>{e(),t("aboutUs",n)},children:"Про нас"}),l.jsx("a",{className:Et.navMenuMobile,href:"#services",onClick:n=>{e(),t("aboutUs",n)},children:"Послуги"}),l.jsx("a",{className:Et.navMenuMobile,href:"#mentoring",onClick:n=>{e(),t("mentoring",n)},children:"Менторство"}),l.jsx("a",{className:Et.navMenuMobile,href:"#projects",onClick:n=>{e(),t("projects",n)},children:"Проєкти"})]})]}),sx);wh.propTypes={onClose:Ai.func.isRequired};const kh=({handleSetActiveLink:e})=>{const[t,n]=ue.useState("home"),[r,i]=ue.useState(!1),o=gr.useMediaQuery({query:"(max-width: 767px)"}),s=gr.useMediaQuery({query:"(min-width: 768px)"}),a=()=>{i(!r)};return ue.useEffect(()=>{const u=()=>{const m=["home","aboutUs","services","mentoring","projects","contact"].find(f=>{const h=document.getElementById(f);if(h){const w=h.getBoundingClientRect();return w.top<=120&&w.bottom>=120}return h});m&&n(m)};return window.addEventListener("scroll",u),()=>{window.removeEventListener("scroll",u)}},[]),l.jsxs(Qv,{children:[l.jsx("div",{className:"container",children:l.jsxs(Yv,{children:[o&&l.jsx("a",{href:"#home",children:l.jsx("svg",{width:"40",height:"40",children:l.jsx("use",{href:`${us}#icon-g10`})})}),s&&l.jsx("a",{href:"#home",children:l.jsx("svg",{width:"227",height:"40",children:l.jsx("use",{href:`${K}#logo-black`})})}),s&&l.jsxs(Kv,{children:[l.jsx(Xr,{href:"#home",className:t==="home"?"active":"",onClick:u=>e("home",u),children:"Головна"}),l.jsx(Xr,{href:"#aboutUs",className:t==="aboutUs"?"active":"",onClick:u=>e("aboutUs",u),children:"Про нас"}),l.jsx(Xr,{href:"#services",className:t==="services"?"active":"",onClick:u=>e("services",u),children:"Послуги"}),l.jsx(Xr,{href:"#mentoring",className:t==="mentoring"?"active":"",onClick:u=>e("mentoring",u),children:"Менторство"}),l.jsx(Xr,{href:"#projects",className:t==="projects"?"active":"",onClick:u=>e("projects",u),children:"Проєкти"})]}),l.jsx(Xv,{href:"#contact",className:t==="contact"?"active":"",onClick:u=>e("contact",u),children:"Контакт"}),o&&l.jsx(Jv,{type:"button",onClick:()=>a(),children:l.jsx(Gv,{children:l.jsx("use",{href:`${us}#icon-menuburger`})})})]})}),o&&r&&l.jsx(wh,{onClose:a,handleSetActiveLink:e})]})};kh.propTypes={handleSetActiveLink:Ai.func.isRequired};const lx="/healthy-management-project/assets/hero1x-6AVSlzud.webp",ax="/healthy-management-project/assets/hero1x-d4IOBsel.jpg",ux=E.section`
  background-repeat: no-repeat;
  background-position: center;
  background-image: url(${ax});
  background-size: cover;
  margin-top: 110px;
  padding-top: 40px;
  padding-bottom: 40px;

  @media screen and (min-width: 768px) {
    background-repeat: no-repeat;
    background-position: center;
    background-image: url(${lx});
    background-size: cover;
    margin-top: 120px;
    padding-top: 296px;
    padding-bottom: 296px;
  }
`,cx=E.h1`
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
`,dx=E.h3`
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
`,fx=E.ul`
  margin-left: 20px;
  margin-top: 24px;
  margin-bottom: 48px;

  @media screen and (min-width: 768px) {
    margin-left: 38px;
    margin-top: 24px;
    margin-bottom: 40px;
  }
`,vl=E.li`
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
`,px=E.div`
  display: flex;
  flex-direction: column;
  gap: 24px;

  @media screen and (min-width: 768px) {
    display: flex;
    flex-direction: row;
    gap: 24px;
  }
`,xd=E.a`
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
`,hx=()=>l.jsx(ux,{id:"home",children:l.jsxs("div",{className:"container",children:[l.jsx(cx,{children:"Бізнес-партнер з розвитку та комунікацій здорового менеджменту"}),l.jsx(dx,{children:"Будуємо ефективні стратегії здорового менеджменту для медичних брендів:"}),l.jsxs(fx,{children:[l.jsx(vl,{children:"медичний менеджмент і маркетинг,"}),l.jsx(vl,{children:"програми управління здоров'ям для підприємств та бізнесу,"}),l.jsx(vl,{children:"менторство"})]}),l.jsxs(px,{children:[l.jsx(xd,{href:"#contact",children:"Консультація"}),l.jsx(xd,{href:"services",children:"Послуги"})]})]})}),mx=E.section`
  padding-top: 80px;
  padding-bottom: 80px;
`,gx=E.div`
  max-width: 100%;
  height: 680px;
  border-radius: 16px;
  padding: 80px;
  background: var(--background-bluedark);
`,yx=E.h2`
  font-size: 48px;
  font-style: normal;
  font-weight: 600;
  line-height: 56px;
  color: var(--system-default-10);
  margin-bottom: 40px;
`,vx=E.ul`
  display: flex;
  padding: 0;
  flex-wrap: wrap;
  gap: 24px;
`,co=E.li`
  display: flex;
  justify-content: center;
  align-items: center;
  column-gap: 24px;
  flex-basis: calc((100% - 24px) / 2);
  padding: 40px;
`,fo=E.svg`
  width: 80px;
  height: 80px;
`,po=E.div`
  display: flex;
  flex-direction: column;
`,ho=E.h3`
  color: var(--system-default-10);
  font-size: 24px;
  font-weight: 600;
  line-height: 32px;
  margin-bottom: 16px;
`,mo=E.p`
  max-width: 542px;
  color: var(--system-default-10);
  font-size: 16px;
  font-weight: 500;
  line-height: 24px;
`,xx=()=>l.jsx(mx,{className:"container",children:l.jsxs(gx,{children:[l.jsx(yx,{children:"Чому обирають нас"}),l.jsxs(vx,{children:[l.jsxs(co,{children:[l.jsx(fo,{children:l.jsx("use",{href:`${K}#hands-shake`})}),l.jsxs(po,{children:[l.jsx(ho,{children:"Надійне партнерство та менторство"}),l.jsx(mo,{children:"Ми налаштовані на довгострокове партнерство і дбаємо про комфорті та чесні комунікації"})]})]}),l.jsxs(co,{children:[l.jsx(fo,{children:l.jsx("use",{href:`${K}#setting`})}),l.jsxs(po,{children:[l.jsx(ho,{children:"Індивідуальний підхід"}),l.jsx(mo,{children:"Кожен бізнес і послуга мають свої особливості. Ми занурюємося у ваш бізнес і пропонуємо індивідуальні стратегії, які допоможуть вам досягти успіху"})]})]}),l.jsxs(co,{children:[l.jsx(fo,{children:l.jsx("use",{href:`${K}#icon-lamp`})}),l.jsxs(po,{children:[l.jsx(ho,{children:"Експертні послуги"}),l.jsx(mo,{children:"Ми опираємося на передовий досвід і використовуємо як класичні, так і сучасні підходи для досягнення поставленого результату"})]})]}),l.jsxs(co,{children:[l.jsx(fo,{children:l.jsx("use",{href:`${K}#icon-puzzle`})}),l.jsxs(po,{children:[l.jsx(ho,{children:"Комплексні рішення"}),l.jsx(mo,{children:"Наша експертиза дозволяє пропонувати комплексні рішення для ефективної співпраці"})]})]})]})]})}),wx="/healthy-management-project/assets/pic_mentorstvo1x-DCmM7Ygj.jpg",kx="/healthy-management-project/assets/pic_mentorstvo1x-R5bIGNq0.webp",Sx="/healthy-management-project/assets/pic_mentorstvo2x-k6d-_Us1.jpg",jx="/healthy-management-project/assets/mob_mentor1x-_de1iGBc.webp",Ex="/healthy-management-project/assets/mob_mentor@2x-oAKhVwNJ.jpg",_x=E.section`
  padding-top: 80px;
  padding-bottom: 80px;
`,Cx=E.div`
  display: flex;
  gap: 24px;
  margin-bottom: 40px;
`,bx=E.div`
  max-width: 828px;
  display: flex;
  flex-direction: column;
  align-items: flex-start;
`,Tx=E.div`
  display: flex;
  flex-direction: column;
  gap: 24px;
  max-width: 820px;
  height: 392px;
  padding: 40px;
  border-radius: 16px;
  background: var(--background-white);
  box-shadow: 0px 0px 8px 0px rgba(27, 54, 65, 0.08);
`,Px=E.img`
  width: 828px;
  height: 468px;
`,Ox=E.h2`
  font-size: 48px;
  font-weight: 600;
  line-height: 56px;
  margin-bottom: 40px;
  color: var(--typography-black);
`,Rx=E.h3`
  font-size: 24px;
  font-weight: 600;
  line-height: 32px;
  color: var(--typography-bluedark);
`,wd=E.h3`
  font-size: 24px;
  font-weight: 600;
  line-height: 32px;
  color: var(--typography-white);
`,Mx=E.div`
  margin-bottom: 80px;
`,kd=E.p`
  font-size: 20px;
  font-weight: 500;
  max-width: 720px;
  line-height: 28px;
  color: var(--typography-bluedark);

  &:not(:last-child) {
    margin-bottom: 16px;
  }
`,Ax=E.a`
  display: flex;
  justify-content: center;
  align-items: center;

  font-size: 16px;
  font-weight: 500;
  line-height: 24px;
  color: var(--typography-bluedark);

  width: 260px;
  height: 56px;
  padding: 8px 24px;
  border-radius: 16px;
  background-color: transparent;
  border: 1px solid var(--background-bluedark);
  box-shadow: 0px 0px 8px 0px rgba(27, 54, 65, 0.08);

  &:hover,
  &focus {
    font-weight: 600;
    background: var(--background-white);
  }
`,Nx=E.div`
  display: flex;
  gap: 40px;
`,Lx=E.div`
  display: flex;
  flex-direction: column;
  align-items: flex-start;

  padding: 40px;
  gap: 24px;
  flex: 1 0 0;
  border-radius: 16px;
  box-shadow: 0px 0px 8px 0px rgba(27, 54, 65, 0.08);
  background-color: var(--background-bluedark);
`,zx=E.ul`
  display: flex;
  flex-direction: column;
  gap: 8px;

  font-size: 16px;
  font-weight: 500;
  line-height: 24px;
  color: var(--typography-bluedark);
`,Sd=E.ul`
  display: flex;
  flex-direction: column;
  gap: 8px;

  font-size: 16px;
  font-weight: 500;
  line-height: 24px;
  color: #f8f8f8;
`,tr=E.li`
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
`,nr=E.li`
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
    background-color: var(--typography-white);
    border-radius: 50%;
  }
`,Dx=()=>l.jsxs(_x,{id:"mentoring",className:"container",children:[l.jsxs(Cx,{children:[l.jsxs("div",{children:[l.jsxs("picture",{children:[l.jsx("source",{media:"(min-width: 1920px)",srcSet:`${kx} 1x, ${Sx} 2x`}),l.jsx("source",{media:"(min-width: 375px)",srcSet:`${jx} 1x, ${Ex} 2x`})]}),l.jsx(Px,{src:wx,alt:"Ольга Поліщук"})]}),l.jsxs(bx,{children:[l.jsx(Ox,{children:"Менторство"}),l.jsxs(Mx,{children:[l.jsxs(kd,{children:[l.jsx("b",{children:"Менторство в медичній галузі"}),"- почути іншу думку, підтвердити власні гіпотези, зрозуміти вектор розвитку, отримати підтримку та пораду з питань менеджменту і медичного маркетингу"]}),l.jsxs(kd,{children:[l.jsx("b",{children:"Менторство"})," - це про взаємодію та чесну комунікацію, про спільні цінності та готовність до росту, про надійне партнерство та довіру"]})]}),l.jsx(Ax,{href:"#contact",children:"Дізнатися вартість"})]})]}),l.jsx("div",{children:l.jsxs(Nx,{children:[l.jsxs(Tx,{children:[l.jsx(Rx,{children:"Про що це?"}),l.jsxs(zx,{children:[l.jsx(tr,{children:l.jsx("p",{children:"Про прагнення почути чесну іншу думку/та або підтвердити власні гіпотези для власника/керівника"})}),l.jsx(tr,{children:l.jsx("p",{children:"Про бізнес-процеси та їх ефективність"})}),l.jsx(tr,{children:l.jsx("p",{children:"Про вектори розвитку бізнесу або проєкту"})}),l.jsx(tr,{children:l.jsx("p",{children:"Про практичний інструментарій для впровадження змін"})}),l.jsx(tr,{children:l.jsx("p",{children:"Про маркетинг, сервіс та комунікації в медичних бізнесах"})}),l.jsx(tr,{children:l.jsx("p",{children:"Про здоров'я працівників та стратегії підвищенння ефективності бізнесу"})})]})]}),l.jsxs(Lx,{children:[l.jsx(wd,{children:"Для кого"}),l.jsxs(Sd,{children:[l.jsx(nr,{children:l.jsx("p",{children:"Лідерам, які прагнуть змін"})}),l.jsx(nr,{children:l.jsx("p",{children:"Власникам, які хочуть отримати незалежку експертну думку"})}),l.jsx(nr,{children:l.jsx("p",{children:"Керівникам та маркетологам, яким потрібна підтримка"})}),l.jsx(nr,{children:l.jsx("p",{children:"Лікарям, яким важливо отримати пораду"})})]}),l.jsx(wd,{children:"Формат"}),l.jsxs(Sd,{children:[l.jsx(nr,{children:l.jsx("p",{children:"Індивідуальна ментор-сесія (від 1 години)"})}),l.jsx(nr,{children:l.jsx("p",{children:"Персональний супровід на декілька місяців"})})]})]})]})})]}),Sh=E.section`
  padding-top: 24px;
  padding-bottom: 24px;

  @media screen and (min-width: 1920px) {
    padding-top: 80px;
    padding-bottom: 80px;
  }
`,jh=E.div`
  padding: 24px;
  border-radius: 16px;
  box-shadow: 0px 0px 8px 0px rgba(27, 54, 65, 0.08);
  background: var(--background-white);

  @media screen and (min-width: 1920px) {
    padding: 80px;
  }
`,Fx=E.div`
  display: flex;
  flex-direction: column;
  gap: 3px;

  @media screen and (min-width: 1290px) {
    flex-direction: row;
    justify-content: space-between;
  }
`,go=E.div`
  position: relative;

  @media screen and (min-width: 1920px) {
    min-width: 370px;
  }
`,Eh=E.div`
  display: flex;
  flex-direction: column;

  @media screen and (min-width: 1290px) {
    gap: 40px;
    margin-bottom: 40px;
    flex-direction: row;
  }
`,_h=E.div`
  min-width: 280px;
  gap: 16px;
  display: flex;
  flex-direction: column;

  @media screen and (min-width: 1920px) {
    min-width: 740px;
  }
`,Ch=E.div`
  @media screen and (min-width: 1920px) {
    padding: 24px;
  }
`,yo=E.p`
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
`,bh=E.h2`
  color: var(--typography-black);
  font-size: 24px;
  font-weight: 600;
  line-height: 32px;

  @media screen and (min-width: 1920px) {
    font-size: 48px;
    line-height: 56px;
  }
`,Th=E.h3`
  font-size: 18px;
  font-weight: 600;
  line-height: 1.3;
  margin-bottom: 24px;
  color: var(--typography-bluedark);

  @media screen and (min-width: 1920px) {
    font-size: 24px;
    margin-bottom: 16px;
  }
`,Ph=E.p`
  font-size: 16px;
  line-height: 24px;
  color: var(--typography-bluedark);

  @media screen and (min-width: 1920px) {
    font-size: 20px;
    font-weight: 500;
    line-height: 1.4;
  }
`,Oh=E.p`
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
`,Rh=E.a`
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
`,Mh=E.p`
  font-size: 18px;
  line-height: 1.3;
  font-weight: 600;
  margin-bottom: 16px;

  color: var(--typography-bluedark);

  @media screen and (min-width: 1920px) {
    font-size: 24px;
    margin-bottom: 24px;
  }
`,Ah=E.ul`
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
`,bt=E.li`
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
`,fn=E.svg`
  width: 266px;
  height: 56px;

  @media screen and (min-width: 1920px) {
    width: 370px;
    height: 80px;
  }
`;function Ix(e,t){if(t===e)return!1;const n=Object.values(t),r=Object.values(e);if(n.length!==r.length||n.some((o,s)=>o!==r[s]))return!0;const i=Object.keys(e);return Object.keys(t).some((o,s)=>o!==i[s])}function $x(e,t){return e.matches[t]=!1,e.mediaQueries[t]={},e}function Nh(e){const t=Object.keys(e);return typeof window>"u"?t.reduce($x,{mediaQueries:{},matches:{}}):t.reduce((n,r)=>{const i=window.matchMedia(e[r]);return n.mediaQueries[r]=i,n.matches[r]=i.matches,n},{mediaQueries:{},matches:{}})}function Ux(e,t){function n(r,i){return r[i]=e.mediaQueries[i].matches,r}switch(t.type){case"updateMatches":return{matches:Object.keys(e.mediaQueries).reduce(n,{}),mediaQueries:e.mediaQueries};case"setQueries":return Nh(t.queries)}}function Bx(e){const t=ue.useRef(e),[n,r]=ue.useReducer(Ux,e,Nh);ue.useEffect(()=>{Ix(e,t.current)&&(r({type:"setQueries",queries:e}),t.current=e)},[e]);function i(){return r({type:"updateMatches"})}function o(u){const c=i;return typeof u.addListener<"u"?u.addListener(c):u.addEventListener("change",c),c}ue.useEffect(()=>{const u=Object.values(n.mediaQueries),c=u.map(o);function m(f,h){typeof f.addListener<"u"?f.removeListener(c[h]):f.removeEventListener("change",c[h])}return()=>{u.forEach(m)}},[n.mediaQueries]);const{matches:s}=n,a=ue.useMemo(()=>Object.values(s),[s]);return{matches:s,matchesAny:a.some(Boolean),matchesAll:a.length>0&&a.every(Boolean)}}function Lh(e){return Bx(Vx(e)).matchesAll}const xl={};function Vx(e){return xl[e]===void 0&&(xl[e]={default:e}),xl[e]}const Wx=()=>{const e=Lh("(max-width: 768px)");return l.jsx(Sh,{className:"container",children:l.jsxs(jh,{children:[l.jsxs(Eh,{children:[l.jsxs(_h,{children:[l.jsx(bh,{children:"Індивідуальна ментор сесія"}),l.jsx(Ph,{children:"Вирішення вашого індивідуального запиту"}),l.jsx(Oh,{children:"від 1 години"}),l.jsx(Rh,{href:"#contact",children:"Замовити послугу"})]}),l.jsxs(Ch,{children:[l.jsx(Th,{children:"Питання, з якими можете звернутися"}),l.jsxs(Ah,{children:[l.jsx(bt,{children:"Незалежна думка щодо маркетингу та розвитку"}),l.jsx(bt,{children:"Порада по створенню відділу маркетингу або оцінка існуючої структури"}),l.jsx(bt,{children:"Питання по роботі з підрядниками"}),l.jsx(bt,{children:"Порада щодо оптимізації бізнес-процесів"}),l.jsx(bt,{children:"Як вірно оцінити ефективність маркетингових дій"}),l.jsx(bt,{children:"Які інструменти комунікацій використовувати"}),l.jsxs(bt,{children:["Особисте питання по менеджменту та розвитку з питань управління"," ","здоров'ям"]})]})]})]}),l.jsx(Mh,{children:"Шлях проведення менторської сесії"}),l.jsxs(Fx,{children:[l.jsxs(go,{children:[e?l.jsx(fn,{children:l.jsx("use",{href:`${K}#icon-rectangle-mob`})}):l.jsx(fn,{children:l.jsx("use",{href:`${K}#icon-rectangle`})}),l.jsx(yo,{children:"Заповнення брифу"})]}),l.jsxs(go,{children:[e?l.jsx(fn,{children:l.jsx("use",{href:`${K}#icon-rectangle-mob`})}):l.jsx(fn,{children:l.jsx("use",{href:`${K}#icon-rectangle`})}),l.jsx(yo,{children:"Діагностика ситуації"})]}),l.jsxs(go,{children:[e?l.jsx(fn,{children:l.jsx("use",{href:`${K}#icon-rectangle-mob`})}):l.jsx(fn,{children:l.jsx("use",{href:`${K}#icon-rectangle`})}),l.jsx(yo,{children:"Проведення сесії"})]}),l.jsxs(go,{children:[e?l.jsx(fn,{children:l.jsx("use",{href:`${K}#icon-rectangle-mob`})}):l.jsx(fn,{children:l.jsx("use",{href:`${K}#icon-rectangle`})}),l.jsx(yo,{children:"Рекомендації"})]})]})]})})},Hx=E.div`
  display: flex;
  flex-direction: column;
  gap: 3px;

  @media screen and (min-width: 1920px) {
    flex-direction: row;
    justify-content: space-between;
    gap: 24px;
  }
`,Lt=E.svg`
  width: 260px;
  height: 60px;

  @media screen and (min-width: 1920px) {
    width: 285px;
    height: 80px;
  }
`,Gr=E.div`
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
`;const Jr=E.p`
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
`,Qx=()=>{const e=Lh("(max-width: 768px)");return l.jsx(Sh,{className:"container",children:l.jsxs(jh,{children:[l.jsxs(Eh,{children:[l.jsxs(_h,{children:[l.jsx(bh,{children:"Персональний супровід"}),l.jsx(Ph,{children:"Пропрацьовуємо ваші запити та досягаємо посавлених цілей"}),l.jsx(Oh,{children:"від 2 місяців тісної взаємодії"}),l.jsx(Rh,{href:"#contact",children:"Замовити послугу"})]}),l.jsxs(Ch,{children:[l.jsx(Th,{children:"Питання, з якими можете звернутися"}),l.jsxs(Ah,{children:[l.jsx(bt,{children:"Зануритись в бізнес-процеси та зрозуміти, де є точки зростання"}),l.jsx(bt,{children:"Зрозуміти що таке маркетинг та як він працює у вашому бізнесі"}),l.jsx(bt,{children:"Супровід розробки та впровадження стратегій"}),l.jsx(bt,{children:"Особисті питання по медичному менеджменту, маркетингу та розвитку, управління здоров'ям"})]})]})]}),l.jsx(Mh,{children:"Шлях проведення менторськогог супроводу"}),l.jsxs(Hx,{children:[l.jsxs(Gr,{children:[e?l.jsx(Lt,{children:l.jsx("use",{href:`${K}#icon-rectangle-mob`})}):l.jsx(Lt,{children:l.jsx("use",{href:`${K}#icon-rectangle2`})}),l.jsx(Jr,{children:"Заповнення брифу"})]}),l.jsxs(Gr,{children:[e?l.jsx(Lt,{children:l.jsx("use",{href:`${K}#icon-rectangle-mob`})}):l.jsx(Lt,{children:l.jsx("use",{href:`${K}#icon-rectangle2`})}),l.jsx(Jr,{children:"Діагностика ситуації"})]}),l.jsxs(Gr,{children:[e?l.jsx(Lt,{children:l.jsx("use",{href:`${K}#icon-rectangle-mob`})}):l.jsx(Lt,{children:l.jsx("use",{href:`${K}#icon-rectangle2`})}),l.jsx(Jr,{children:"Визначення зон росту"})]}),l.jsxs(Gr,{children:[e?l.jsx(Lt,{children:l.jsx("use",{href:`${K}#icon-rectangle-mob`})}):l.jsx(Lt,{children:l.jsx("use",{href:`${K}#icon-rectangle2`})}),l.jsx(Jr,{children:"Менторинг"})]}),l.jsxs(Gr,{children:[e?l.jsx(Lt,{children:l.jsx("use",{href:`${K}#icon-rectangle-mob`})}):l.jsx(Lt,{children:l.jsx("use",{href:`${K}#icon-rectangle2`})}),l.jsx(Jr,{children:"Рекомендації"})]})]})]})})},Ns=()=>{const e=gr.useMediaQuery({maxWidth:767}),t=gr.useMediaQuery({minWidth:768,maxWidth:1439}),n=gr.useMediaQuery({minWidth:1440,maxWidth:1919}),r=gr.useMediaQuery({minWidth:1920});return e&&"mobile"||t&&"tablet"||n&&"desktop"||r&&"largeDesktop"},Yx="/healthy-management-project/assets/denta_derm1x-JWCICTe_.webp",Kx="/healthy-management-project/assets/medialt1x-5LMkh0v8.webp",Xx="/healthy-management-project/assets/cures1x--AoJBOWJ.webp",Gx="/healthy-management-project/assets/clinic1x-YgK5Wnno.webp",Jx="/healthy-management-project/assets/kmklam1x-FlPeEOTs.webp",qx="/healthy-management-project/assets/symmetrica1x-hhcOddzB.webp",wl=[{image:Yx,category:"DentaDerm",title:"Діагностика бізнес-процесів, маркетингу, сервісу, розробка стратегії розвитку, менторство",about:["Діагностика бізнес-процесів та маркетингу","Стратегія розвитку","Підбір команди маркетингу","Менторство"],details:[{title:"Завдання:",about:["Розробка стратегії розвитку","Розробка нового сайту клініки","Пошук команди маркетингу"],comment:"Дії в результаті розробки стратегії розвитку передбачали роботу над проєктом в новому позиціонуванні,  пошук зовнішньої та внутрішньої команди для реалізації нового сайту, ведення соцмереж"},{title:"В результаті роботи над проєктом:",about:["Розроблені вектори розвитку","Розроблений та впроваджений новий сайт","Підібрана команда маркетингового супроводу"],comment:"В результаті співпраці партнер отримав комплексне бачення просування, сформована команда маркетингу"}]},{image:Kx,category:"Medialt",title:"Діагностика бізнес-процесів, маркетингу, сервісу, розробка стратегії розвитку, менторство",about:["Аудит ринку та конкурентів","Аудит маркетингу та сервісу","Розробка стратегії розвитку"],details:[{title:"Завдання:",about:["Розробка стратегії розвитку"]},{title:"Робота над задачою була розділена на два етапи:",about:["Аналіз конкурентів, ринку, виявлення зовнішніх можливостей та загроз","Аналіз сервісу медичного центру, аналіз роботи контакт центру, маркетингу, наявної бази пацієнтів та внутрішніх бізнес-процесів"]},{title:"В результаті комплексного аудиту підготували стратегію розвитку, яка передбачала рекомендації щодо:",about:["Управління маркетингом","Оптимізації роботи сервісу","Можливості МІС","Етапи розвитку напрямків та клініки вцілому"],comment:"В результаті співпраці - за 5 місяців ріст обороту в два рази"}]},{image:Xx,category:"Cures",title:"Автоматизація комунікації з пацієнтами",about:["Створення та запуск 20 чат-ботів для клінік","Проведення консультацій та аудитів комунікацій клінік з пацієнтами","Розробка персональних протоколів спілкування з пацієнтами"],details:[{title:"Завдання:",about:["Автоматизація комунікації з пацієнтами"]},{title:"В результаті роботи над проєктом:",about:["Розвиток проєкту по створенню чат-ботів для медичних центрів","Розробка протоколів супроводу та опитувальників для клінік","Проведення зустрічей та комунікацій з клініками","Розробка алгоритмів та запуск чат-ботів"],comment:"В результаті співпраці над проєктом запуск 20 чат-ботів для медичних центрів"}]},{image:Gx,category:"Клініка ім. ак. Юрія Спіженка",title:"Менторство, діагностика бізнес-процесів, маркетингу та сервісу, розробка стратегії розвитку",about:["Діагностика бізнес-процесів","Аудит маркетингу та сервісу","Розробка стратегії розвитку та маркетингу","Розробка та впровадження комунікаційної стратегії","Ведення маркетингових активностей "],details:[{title:"Завдання:",about:["Рестарт клініки у воєний час"]},{title:"Робота над задачею була розділена на три етапи:",about:["Діагностика конкурентів, ринку, виявлення зовнішніх можливостей та загроз","Діагностика сервісу медичного центру, аналіз роботи контакт центру, маркетингу, наявної бази пацієнтів та внутрішніх бізнес-процесів","Розробка та впровадження стратегії маркетингу, комунікації та сервісу, супровід рекламних кампаній, оптимізація бізнес-процесів"],comment:"В результаті співпраці над проєктом: збільшення доходу клініки, вихід на довоєний об’єм"}]},{image:Jx,category:"KMKlab",title:"Діагностика маркетингу, сервісу, бізнес-процесів",about:["Аудит маркетингу та інструментів комунікацій","Аудит сервісу","Розробка рекомендацій щодо розвитку"],details:[{title:"Завдання:",about:["Аудит поточної маркетингової стратегії","Аудит сервісу","Формування рекомендацій по розвитку"]},{title:"Робота над задачою була розділена на два етапи:",about:["Відвідування всіх відділень лабораторій з метою формування рекомендацій по кожній локації","Аналіз поточної ситуації маркетингу та комунікацій, ведення соціальних мереж"],comment:"В результаті співпраці проаналізовано роботу відділу маркетингу та підрядників та надані рекомендації щодо структури відділу, сформовані подальші  кроки  маркетингової  та сервісної стратегії"}]},{image:qx,category:"Symmetrica",title:"Менторство, діагностика маркетингу, сервісу, бізнес-процесів",about:["Аудит маркетингу та сервісу","Розробка рекомендацій щодо розвитку","Оптимізація бізнес-процесів"],details:[{title:"Завдання:",about:["Діагностика поточної маркетингової діяльності та комунікацій","Аудит сервісу","Аудит роботи підрядників","Формування рекомендацій по розвитку"]},{title:"В результаті роботи над проєктом:",about:["Проведений поточний аудит шляху пацієнта, виявлені точки зростання сервісу","Проаналізовано роботу відділу маркетингу і підрядників та надані рекомендації щодо структури відділу","Надані рекомендації щодо формування подальших кроків маркетингової  та сервісної стратегії","Сформовані конверсійні показники та вектори руху","Надана менторська підтримка"]}]}],Zx=E.section`
  padding-top: 40px;
  padding-bottom: 40px;
  @media screen and (min-width: 768px) {
    padding-top: 80px;
    padding-bottom: 80px;
  }
`,e1=E.h2`
  font-size: 48px;
  font-weight: 600;
  line-height: calc(56 / 48);

  margin-bottom: 40px;
`,t1=E.ul`
  display: flex;
  gap: 24px;
  flex-wrap: wrap;
  @media screen and (min-width: 768px) {
  }
`,n1=E.span`
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
`,r1=E.svg`
  fill: currentColor;
  stroke: currentColor;

  width: 24px;
  height: 24px;
`,i1=E.li`
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
`,o1=E.div`
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
`,s1=E.div`
  display: flex;
  flex-direction: column;
  gap: 16px;
`,l1=E.h4`
  font-size: ${e=>e.forDetail?"18px":"16px"};
  font-weight: 600;
  line-height: calc(${e=>e.forDetail?24/18:24/16});

  @media screen and (min-width: 768px) {
    font-size: ${e=>e.forDetail?"24px":"20px"};
    line-height: calc(${e=>e.forDetail?32/24:28/20});
  }
`,a1=E.ul`
  display: flex;
  flex-direction: column;
  gap: 8px;
`,u1=E.li`
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
`,c1=E.p`
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
`,d1=E.svg`
  fill: currentColor;
  stroke: currentColor;
`,zh=({title:e,about:t,comment:n,additionalComment:r=!1})=>l.jsxs(s1,{children:[l.jsx(l1,{forDetail:r,children:e}),l.jsx(a1,{children:t==null?void 0:t.map(i=>l.jsxs(u1,{children:[l.jsx(d1,{children:l.jsx("use",{href:K+"#icon-done"})}),i]},i))}),n&&l.jsx(c1,{additionalComment:r,children:n})]}),f1=E.div`
  padding: 24px;
  display: flex;
  gap: 24px;
  flex-direction: column;

  color: var(--background-whitegrey, #f4f4f6);
  @media screen and (min-width: 768px) {
    padding: 40px;
  }
`,p1=E.h3`
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
`,h1=E.svg`
  fill: currentColor;
  stroke: currentColor;

  width: 24px;
  height: 24px;

  position: absolute;
  right: 28px;
  top: 28px;
`,m1=({dataList:{details:e,category:t}})=>{const n=Ns();return l.jsxs(f1,{children:[l.jsxs("div",{children:[l.jsx(p1,{symbols:t.length,children:t}),n==="mobile"&&l.jsx(h1,{children:l.jsx("use",{href:K+"#icon-close"})})]}),e.map((r,i)=>l.jsx(zh,{title:r.title,about:r.about,comment:r.comment,additionalComment:i===0},r.title))]})},g1=E.div`
  display: flex;
  flex-direction: column;
  gap: 24px;

  color: var(--typography-bluedark, #1b3641);
`,y1=E.h3`
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
`,v1=E.img`
  height: 279px;
  width: 100%;
  border-radius: 8px;
  object-fit: cover;
  @media screen and (min-width: 768px) {
    height: 300px;
  }
`,x1=E.span`
  font-size: 14px;
  font-weight: 600;
  line-height: calc(18 / 14);
  text-align: center;
`,w1=({dataList:e,onClick:t})=>{const n=Ns(),{category:r,title:i,about:o=[],image:s}=e;return l.jsxs(g1,{onClick:t,children:[l.jsx(v1,{src:s,alt:i}),l.jsx("div",{children:l.jsx(y1,{symbols:r.length,children:r})}),l.jsx(zh,{title:i,about:o}),n==="mobile"&&l.jsx(x1,{children:"Детальніше"})]})},k1=({item:e})=>{const[t,n]=ue.useState(!1),r=Ns(),i=()=>{r==="mobile"&&n(o=>!o)};return l.jsxs(i1,{children:[l.jsx(w1,{dataList:e,onClick:i}),l.jsx(o1,{isVisible:t,onClick:i,image:e.image,className:!t&&r==="mobile"?"visually-hidden":"",children:l.jsx(m1,{dataList:e})})]})},S1=()=>{const e=Ns(),[t,n]=ue.useState(e==="mobile"?[...wl.slice(0,3)]:[...wl]),r=()=>{t.length>4?n(i=>i.slice(0,3)):n([...wl])};return l.jsxs(Zx,{id:"projects",className:"container",style:{paddingTop:"80px",paddingBottom:"80px"},children:[l.jsx(e1,{children:"Проєкти"}),l.jsx(t1,{children:t.map(i=>l.jsx(k1,{item:i},i.category))}),e==="mobile"&&l.jsxs(n1,{onClick:r,children:[t.length>3?"Менше проєктів":"Більше проєктів",l.jsx(r1,{children:l.jsx("use",{href:K+`${t.length>3?"#icon-arrowup":"#icon-arrowdown"}`})})]})]})},j1=E.section`
  padding-top: 80px;
  padding-bottom: 80px;
  display: flex;
  gap: 24px;
`,E1=E.div`
  padding: 80px;
  max-width: 828px;
  height: 664px;
  box-shadow: 0px 0px 8px 0px rgba(27, 54, 65, 0.08);
  border-radius: 16px;
  background: var(--background-white);
`,_1=E.div`
  display: flex;
  flex-direction: column;
  gap: 40px;
  margin-bottom: 40px;
`,C1=E.h2`
  color: var(--typography-black);
  font-size: 48px;
  font-weight: 600;
  line-height: 56px;
`,b1=E.h2`
  color: var(--typography-bluedark);
  font-family: Montserrat;
  font-size: 20px;
  font-style: normal;
  font-weight: 500;
  line-height: 28px;
`,T1=E.ul`
  display: flex;
  flex-direction: column;
  gap: 24px;
`,kl=E.li`
  display: flex;
  gap: 16px;
  border-radius: 16px;
  background: var(--background-whitegrey);
  padding: 16px;
`,Sl=E.svg`
  width: 24px;
  height: 24px;
  fill: var(--background-white);
  stroke-width: 4px;
`,jl=E.p`
  color: var(--typography-bluedark);
  font-size: 20px;
  font-weight: 500;
  line-height: 28px;
`,P1=E.img`
  width: 828px;
  height: 664px;
`,O1="/healthy-management-project/assets/olga_with_book1x-kIN8FAVO.webp",R1="/healthy-management-project/assets/olga_with_book1x-KTuULWu1.jpg",M1="/healthy-management-project/assets/olga_with_book2x-lES61yI6.jpg",A1=()=>l.jsxs(j1,{className:"container",children:[l.jsxs(E1,{children:[l.jsxs(_1,{children:[l.jsx(C1,{children:"Принципи роботи"}),l.jsx(b1,{children:"Наші принципи роботи полягають у співдії з ціннісними брендами та командами, які готові до чесної співпраці, щоб сприяти досягненню поставлених цілей. Готові ділитися власним досвідом та створювати стратегії здорового менеджменту та розвитку, маркетингу та сервісу"})]}),l.jsxs(T1,{children:[l.jsxs(kl,{children:[l.jsx(Sl,{children:l.jsx("use",{href:`${K}#icon-done-yellow`})}),l.jsx(jl,{children:"Більше 18 років досвіду в маркетингу та комунікаціях"})]}),l.jsxs(kl,{children:[l.jsx(Sl,{children:l.jsx("use",{href:`${K}#icon-done-yellow`})}),l.jsx(jl,{children:"Глибоке розуміння бізнес-процесів медичних закладів"})]}),l.jsxs(kl,{children:[l.jsx(Sl,{children:l.jsx("use",{href:`${K}#icon-done-yellow`})}),l.jsx(jl,{children:"Використання принципів доказової медицини"})]})]})]}),l.jsxs("picture",{children:[l.jsx("source",{srcSet:`${M1} 2x, ${R1} 1x`,media:"(min-width: 1920px)"}),l.jsx(P1,{src:O1,alt:"Ольга Поліщук"})]})]}),N1=E.button`
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
`,L1=()=>{const[e,t]=ue.useState(!1);ue.useEffect(()=>{const r=()=>{const i=window.scrollY,o=document.getElementById("footer"),s=window.innerHeight+window.scrollY-o.offsetTop,a=Math.max(80,s);t(i>480||s>80),document.documentElement.style.setProperty("--scroll-to-top-bottom",`${a}px`)};return window.addEventListener("scroll",r),()=>{window.removeEventListener("scroll",r)}},[]);const n=()=>{window.scrollTo({top:0,behavior:"smooth"})};return l.jsx(l.Fragment,{children:e&&l.jsx("section",{className:"container",children:l.jsx(N1,{onClick:n,children:l.jsx("svg",{width:"24",height:"24",children:l.jsx("use",{href:`${K}#icon-arrowup`})})})})})};function Dh(e,t){return function(){return e.apply(t,arguments)}}const{toString:z1}=Object.prototype,{getPrototypeOf:Au}=Object,Ls=(e=>t=>{const n=z1.call(t);return e[n]||(e[n]=n.slice(8,-1).toLowerCase())})(Object.create(null)),Ht=e=>(e=e.toLowerCase(),t=>Ls(t)===e),zs=e=>t=>typeof t===e,{isArray:Fr}=Array,Ni=zs("undefined");function D1(e){return e!==null&&!Ni(e)&&e.constructor!==null&&!Ni(e.constructor)&&xt(e.constructor.isBuffer)&&e.constructor.isBuffer(e)}const Fh=Ht("ArrayBuffer");function F1(e){let t;return typeof ArrayBuffer<"u"&&ArrayBuffer.isView?t=ArrayBuffer.isView(e):t=e&&e.buffer&&Fh(e.buffer),t}const I1=zs("string"),xt=zs("function"),Ih=zs("number"),Ds=e=>e!==null&&typeof e=="object",$1=e=>e===!0||e===!1,Ao=e=>{if(Ls(e)!=="object")return!1;const t=Au(e);return(t===null||t===Object.prototype||Object.getPrototypeOf(t)===null)&&!(Symbol.toStringTag in e)&&!(Symbol.iterator in e)},U1=Ht("Date"),B1=Ht("File"),V1=Ht("Blob"),W1=Ht("FileList"),H1=e=>Ds(e)&&xt(e.pipe),Q1=e=>{let t;return e&&(typeof FormData=="function"&&e instanceof FormData||xt(e.append)&&((t=Ls(e))==="formdata"||t==="object"&&xt(e.toString)&&e.toString()==="[object FormData]"))},Y1=Ht("URLSearchParams"),K1=e=>e.trim?e.trim():e.replace(/^[\s\uFEFF\xA0]+|[\s\uFEFF\xA0]+$/g,"");function Ui(e,t,{allOwnKeys:n=!1}={}){if(e===null||typeof e>"u")return;let r,i;if(typeof e!="object"&&(e=[e]),Fr(e))for(r=0,i=e.length;r<i;r++)t.call(null,e[r],r,e);else{const o=n?Object.getOwnPropertyNames(e):Object.keys(e),s=o.length;let a;for(r=0;r<s;r++)a=o[r],t.call(null,e[a],a,e)}}function $h(e,t){t=t.toLowerCase();const n=Object.keys(e);let r=n.length,i;for(;r-- >0;)if(i=n[r],t===i.toLowerCase())return i;return null}const Uh=typeof globalThis<"u"?globalThis:typeof self<"u"?self:typeof window<"u"?window:global,Bh=e=>!Ni(e)&&e!==Uh;function Pa(){const{caseless:e}=Bh(this)&&this||{},t={},n=(r,i)=>{const o=e&&$h(t,i)||i;Ao(t[o])&&Ao(r)?t[o]=Pa(t[o],r):Ao(r)?t[o]=Pa({},r):Fr(r)?t[o]=r.slice():t[o]=r};for(let r=0,i=arguments.length;r<i;r++)arguments[r]&&Ui(arguments[r],n);return t}const X1=(e,t,n,{allOwnKeys:r}={})=>(Ui(t,(i,o)=>{n&&xt(i)?e[o]=Dh(i,n):e[o]=i},{allOwnKeys:r}),e),G1=e=>(e.charCodeAt(0)===65279&&(e=e.slice(1)),e),J1=(e,t,n,r)=>{e.prototype=Object.create(t.prototype,r),e.prototype.constructor=e,Object.defineProperty(e,"super",{value:t.prototype}),n&&Object.assign(e.prototype,n)},q1=(e,t,n,r)=>{let i,o,s;const a={};if(t=t||{},e==null)return t;do{for(i=Object.getOwnPropertyNames(e),o=i.length;o-- >0;)s=i[o],(!r||r(s,e,t))&&!a[s]&&(t[s]=e[s],a[s]=!0);e=n!==!1&&Au(e)}while(e&&(!n||n(e,t))&&e!==Object.prototype);return t},Z1=(e,t,n)=>{e=String(e),(n===void 0||n>e.length)&&(n=e.length),n-=t.length;const r=e.indexOf(t,n);return r!==-1&&r===n},ew=e=>{if(!e)return null;if(Fr(e))return e;let t=e.length;if(!Ih(t))return null;const n=new Array(t);for(;t-- >0;)n[t]=e[t];return n},tw=(e=>t=>e&&t instanceof e)(typeof Uint8Array<"u"&&Au(Uint8Array)),nw=(e,t)=>{const r=(e&&e[Symbol.iterator]).call(e);let i;for(;(i=r.next())&&!i.done;){const o=i.value;t.call(e,o[0],o[1])}},rw=(e,t)=>{let n;const r=[];for(;(n=e.exec(t))!==null;)r.push(n);return r},iw=Ht("HTMLFormElement"),ow=e=>e.toLowerCase().replace(/[-_\s]([a-z\d])(\w*)/g,function(n,r,i){return r.toUpperCase()+i}),jd=(({hasOwnProperty:e})=>(t,n)=>e.call(t,n))(Object.prototype),sw=Ht("RegExp"),Vh=(e,t)=>{const n=Object.getOwnPropertyDescriptors(e),r={};Ui(n,(i,o)=>{let s;(s=t(i,o,e))!==!1&&(r[o]=s||i)}),Object.defineProperties(e,r)},lw=e=>{Vh(e,(t,n)=>{if(xt(e)&&["arguments","caller","callee"].indexOf(n)!==-1)return!1;const r=e[n];if(xt(r)){if(t.enumerable=!1,"writable"in t){t.writable=!1;return}t.set||(t.set=()=>{throw Error("Can not rewrite read-only method '"+n+"'")})}})},aw=(e,t)=>{const n={},r=i=>{i.forEach(o=>{n[o]=!0})};return Fr(e)?r(e):r(String(e).split(t)),n},uw=()=>{},cw=(e,t)=>(e=+e,Number.isFinite(e)?e:t),El="abcdefghijklmnopqrstuvwxyz",Ed="0123456789",Wh={DIGIT:Ed,ALPHA:El,ALPHA_DIGIT:El+El.toUpperCase()+Ed},dw=(e=16,t=Wh.ALPHA_DIGIT)=>{let n="";const{length:r}=t;for(;e--;)n+=t[Math.random()*r|0];return n};function fw(e){return!!(e&&xt(e.append)&&e[Symbol.toStringTag]==="FormData"&&e[Symbol.iterator])}const pw=e=>{const t=new Array(10),n=(r,i)=>{if(Ds(r)){if(t.indexOf(r)>=0)return;if(!("toJSON"in r)){t[i]=r;const o=Fr(r)?[]:{};return Ui(r,(s,a)=>{const u=n(s,i+1);!Ni(u)&&(o[a]=u)}),t[i]=void 0,o}}return r};return n(e,0)},hw=Ht("AsyncFunction"),mw=e=>e&&(Ds(e)||xt(e))&&xt(e.then)&&xt(e.catch),T={isArray:Fr,isArrayBuffer:Fh,isBuffer:D1,isFormData:Q1,isArrayBufferView:F1,isString:I1,isNumber:Ih,isBoolean:$1,isObject:Ds,isPlainObject:Ao,isUndefined:Ni,isDate:U1,isFile:B1,isBlob:V1,isRegExp:sw,isFunction:xt,isStream:H1,isURLSearchParams:Y1,isTypedArray:tw,isFileList:W1,forEach:Ui,merge:Pa,extend:X1,trim:K1,stripBOM:G1,inherits:J1,toFlatObject:q1,kindOf:Ls,kindOfTest:Ht,endsWith:Z1,toArray:ew,forEachEntry:nw,matchAll:rw,isHTMLForm:iw,hasOwnProperty:jd,hasOwnProp:jd,reduceDescriptors:Vh,freezeMethods:lw,toObjectSet:aw,toCamelCase:ow,noop:uw,toFiniteNumber:cw,findKey:$h,global:Uh,isContextDefined:Bh,ALPHABET:Wh,generateString:dw,isSpecCompliantForm:fw,toJSONObject:pw,isAsyncFn:hw,isThenable:mw};function re(e,t,n,r,i){Error.call(this),Error.captureStackTrace?Error.captureStackTrace(this,this.constructor):this.stack=new Error().stack,this.message=e,this.name="AxiosError",t&&(this.code=t),n&&(this.config=n),r&&(this.request=r),i&&(this.response=i)}T.inherits(re,Error,{toJSON:function(){return{message:this.message,name:this.name,description:this.description,number:this.number,fileName:this.fileName,lineNumber:this.lineNumber,columnNumber:this.columnNumber,stack:this.stack,config:T.toJSONObject(this.config),code:this.code,status:this.response&&this.response.status?this.response.status:null}}});const Hh=re.prototype,Qh={};["ERR_BAD_OPTION_VALUE","ERR_BAD_OPTION","ECONNABORTED","ETIMEDOUT","ERR_NETWORK","ERR_FR_TOO_MANY_REDIRECTS","ERR_DEPRECATED","ERR_BAD_RESPONSE","ERR_BAD_REQUEST","ERR_CANCELED","ERR_NOT_SUPPORT","ERR_INVALID_URL"].forEach(e=>{Qh[e]={value:e}});Object.defineProperties(re,Qh);Object.defineProperty(Hh,"isAxiosError",{value:!0});re.from=(e,t,n,r,i,o)=>{const s=Object.create(Hh);return T.toFlatObject(e,s,function(u){return u!==Error.prototype},a=>a!=="isAxiosError"),re.call(s,e.message,t,n,r,i),s.cause=e,s.name=e.name,o&&Object.assign(s,o),s};const gw=null;function Oa(e){return T.isPlainObject(e)||T.isArray(e)}function Yh(e){return T.endsWith(e,"[]")?e.slice(0,-2):e}function _d(e,t,n){return e?e.concat(t).map(function(i,o){return i=Yh(i),!n&&o?"["+i+"]":i}).join(n?".":""):t}function yw(e){return T.isArray(e)&&!e.some(Oa)}const vw=T.toFlatObject(T,{},null,function(t){return/^is[A-Z]/.test(t)});function Fs(e,t,n){if(!T.isObject(e))throw new TypeError("target must be an object");t=t||new FormData,n=T.toFlatObject(n,{metaTokens:!0,dots:!1,indexes:!1},!1,function(v,b){return!T.isUndefined(b[v])});const r=n.metaTokens,i=n.visitor||m,o=n.dots,s=n.indexes,u=(n.Blob||typeof Blob<"u"&&Blob)&&T.isSpecCompliantForm(t);if(!T.isFunction(i))throw new TypeError("visitor must be a function");function c(y){if(y===null)return"";if(T.isDate(y))return y.toISOString();if(!u&&T.isBlob(y))throw new re("Blob is not supported. Use a Buffer instead.");return T.isArrayBuffer(y)||T.isTypedArray(y)?u&&typeof Blob=="function"?new Blob([y]):Buffer.from(y):y}function m(y,v,b){let p=y;if(y&&!b&&typeof y=="object"){if(T.endsWith(v,"{}"))v=r?v:v.slice(0,-2),y=JSON.stringify(y);else if(T.isArray(y)&&yw(y)||(T.isFileList(y)||T.endsWith(v,"[]"))&&(p=T.toArray(y)))return v=Yh(v),p.forEach(function(g,k){!(T.isUndefined(g)||g===null)&&t.append(s===!0?_d([v],k,o):s===null?v:v+"[]",c(g))}),!1}return Oa(y)?!0:(t.append(_d(b,v,o),c(y)),!1)}const f=[],h=Object.assign(vw,{defaultVisitor:m,convertValue:c,isVisitable:Oa});function w(y,v){if(!T.isUndefined(y)){if(f.indexOf(y)!==-1)throw Error("Circular reference detected in "+v.join("."));f.push(y),T.forEach(y,function(p,d){(!(T.isUndefined(p)||p===null)&&i.call(t,p,T.isString(d)?d.trim():d,v,h))===!0&&w(p,v?v.concat(d):[d])}),f.pop()}}if(!T.isObject(e))throw new TypeError("data must be an object");return w(e),t}function Cd(e){const t={"!":"%21","'":"%27","(":"%28",")":"%29","~":"%7E","%20":"+","%00":"\0"};return encodeURIComponent(e).replace(/[!'()~]|%20|%00/g,function(r){return t[r]})}function Nu(e,t){this._pairs=[],e&&Fs(e,this,t)}const Kh=Nu.prototype;Kh.append=function(t,n){this._pairs.push([t,n])};Kh.toString=function(t){const n=t?function(r){return t.call(this,r,Cd)}:Cd;return this._pairs.map(function(i){return n(i[0])+"="+n(i[1])},"").join("&")};function xw(e){return encodeURIComponent(e).replace(/%3A/gi,":").replace(/%24/g,"$").replace(/%2C/gi,",").replace(/%20/g,"+").replace(/%5B/gi,"[").replace(/%5D/gi,"]")}function Xh(e,t,n){if(!t)return e;const r=n&&n.encode||xw,i=n&&n.serialize;let o;if(i?o=i(t,n):o=T.isURLSearchParams(t)?t.toString():new Nu(t,n).toString(r),o){const s=e.indexOf("#");s!==-1&&(e=e.slice(0,s)),e+=(e.indexOf("?")===-1?"?":"&")+o}return e}class ww{constructor(){this.handlers=[]}use(t,n,r){return this.handlers.push({fulfilled:t,rejected:n,synchronous:r?r.synchronous:!1,runWhen:r?r.runWhen:null}),this.handlers.length-1}eject(t){this.handlers[t]&&(this.handlers[t]=null)}clear(){this.handlers&&(this.handlers=[])}forEach(t){T.forEach(this.handlers,function(r){r!==null&&t(r)})}}const bd=ww,Gh={silentJSONParsing:!0,forcedJSONParsing:!0,clarifyTimeoutError:!1},kw=typeof URLSearchParams<"u"?URLSearchParams:Nu,Sw=typeof FormData<"u"?FormData:null,jw=typeof Blob<"u"?Blob:null,Ew={isBrowser:!0,classes:{URLSearchParams:kw,FormData:Sw,Blob:jw},protocols:["http","https","file","blob","url","data"]},Jh=typeof window<"u"&&typeof document<"u",_w=(e=>Jh&&["ReactNative","NativeScript","NS"].indexOf(e)<0)(typeof navigator<"u"&&navigator.product),Cw=typeof WorkerGlobalScope<"u"&&self instanceof WorkerGlobalScope&&typeof self.importScripts=="function",bw=Object.freeze(Object.defineProperty({__proto__:null,hasBrowserEnv:Jh,hasStandardBrowserEnv:_w,hasStandardBrowserWebWorkerEnv:Cw},Symbol.toStringTag,{value:"Module"})),$t={...bw,...Ew};function Tw(e,t){return Fs(e,new $t.classes.URLSearchParams,Object.assign({visitor:function(n,r,i,o){return $t.isNode&&T.isBuffer(n)?(this.append(r,n.toString("base64")),!1):o.defaultVisitor.apply(this,arguments)}},t))}function Pw(e){return T.matchAll(/\w+|\[(\w*)]/g,e).map(t=>t[0]==="[]"?"":t[1]||t[0])}function Ow(e){const t={},n=Object.keys(e);let r;const i=n.length;let o;for(r=0;r<i;r++)o=n[r],t[o]=e[o];return t}function qh(e){function t(n,r,i,o){let s=n[o++];const a=Number.isFinite(+s),u=o>=n.length;return s=!s&&T.isArray(i)?i.length:s,u?(T.hasOwnProp(i,s)?i[s]=[i[s],r]:i[s]=r,!a):((!i[s]||!T.isObject(i[s]))&&(i[s]=[]),t(n,r,i[s],o)&&T.isArray(i[s])&&(i[s]=Ow(i[s])),!a)}if(T.isFormData(e)&&T.isFunction(e.entries)){const n={};return T.forEachEntry(e,(r,i)=>{t(Pw(r),i,n,0)}),n}return null}function Rw(e,t,n){if(T.isString(e))try{return(t||JSON.parse)(e),T.trim(e)}catch(r){if(r.name!=="SyntaxError")throw r}return(n||JSON.stringify)(e)}const Lu={transitional:Gh,adapter:["xhr","http"],transformRequest:[function(t,n){const r=n.getContentType()||"",i=r.indexOf("application/json")>-1,o=T.isObject(t);if(o&&T.isHTMLForm(t)&&(t=new FormData(t)),T.isFormData(t))return i&&i?JSON.stringify(qh(t)):t;if(T.isArrayBuffer(t)||T.isBuffer(t)||T.isStream(t)||T.isFile(t)||T.isBlob(t))return t;if(T.isArrayBufferView(t))return t.buffer;if(T.isURLSearchParams(t))return n.setContentType("application/x-www-form-urlencoded;charset=utf-8",!1),t.toString();let a;if(o){if(r.indexOf("application/x-www-form-urlencoded")>-1)return Tw(t,this.formSerializer).toString();if((a=T.isFileList(t))||r.indexOf("multipart/form-data")>-1){const u=this.env&&this.env.FormData;return Fs(a?{"files[]":t}:t,u&&new u,this.formSerializer)}}return o||i?(n.setContentType("application/json",!1),Rw(t)):t}],transformResponse:[function(t){const n=this.transitional||Lu.transitional,r=n&&n.forcedJSONParsing,i=this.responseType==="json";if(t&&T.isString(t)&&(r&&!this.responseType||i)){const s=!(n&&n.silentJSONParsing)&&i;try{return JSON.parse(t)}catch(a){if(s)throw a.name==="SyntaxError"?re.from(a,re.ERR_BAD_RESPONSE,this,null,this.response):a}}return t}],timeout:0,xsrfCookieName:"XSRF-TOKEN",xsrfHeaderName:"X-XSRF-TOKEN",maxContentLength:-1,maxBodyLength:-1,env:{FormData:$t.classes.FormData,Blob:$t.classes.Blob},validateStatus:function(t){return t>=200&&t<300},headers:{common:{Accept:"application/json, text/plain, */*","Content-Type":void 0}}};T.forEach(["delete","get","head","post","put","patch"],e=>{Lu.headers[e]={}});const zu=Lu,Mw=T.toObjectSet(["age","authorization","content-length","content-type","etag","expires","from","host","if-modified-since","if-unmodified-since","last-modified","location","max-forwards","proxy-authorization","referer","retry-after","user-agent"]),Aw=e=>{const t={};let n,r,i;return e&&e.split(`
`).forEach(function(s){i=s.indexOf(":"),n=s.substring(0,i).trim().toLowerCase(),r=s.substring(i+1).trim(),!(!n||t[n]&&Mw[n])&&(n==="set-cookie"?t[n]?t[n].push(r):t[n]=[r]:t[n]=t[n]?t[n]+", "+r:r)}),t},Td=Symbol("internals");function qr(e){return e&&String(e).trim().toLowerCase()}function No(e){return e===!1||e==null?e:T.isArray(e)?e.map(No):String(e)}function Nw(e){const t=Object.create(null),n=/([^\s,;=]+)\s*(?:=\s*([^,;]+))?/g;let r;for(;r=n.exec(e);)t[r[1]]=r[2];return t}const Lw=e=>/^[-_a-zA-Z0-9^`|~,!#$%&'*+.]+$/.test(e.trim());function _l(e,t,n,r,i){if(T.isFunction(r))return r.call(this,t,n);if(i&&(t=n),!!T.isString(t)){if(T.isString(r))return t.indexOf(r)!==-1;if(T.isRegExp(r))return r.test(t)}}function zw(e){return e.trim().toLowerCase().replace(/([a-z\d])(\w*)/g,(t,n,r)=>n.toUpperCase()+r)}function Dw(e,t){const n=T.toCamelCase(" "+t);["get","set","has"].forEach(r=>{Object.defineProperty(e,r+n,{value:function(i,o,s){return this[r].call(this,t,i,o,s)},configurable:!0})})}class Is{constructor(t){t&&this.set(t)}set(t,n,r){const i=this;function o(a,u,c){const m=qr(u);if(!m)throw new Error("header name must be a non-empty string");const f=T.findKey(i,m);(!f||i[f]===void 0||c===!0||c===void 0&&i[f]!==!1)&&(i[f||u]=No(a))}const s=(a,u)=>T.forEach(a,(c,m)=>o(c,m,u));return T.isPlainObject(t)||t instanceof this.constructor?s(t,n):T.isString(t)&&(t=t.trim())&&!Lw(t)?s(Aw(t),n):t!=null&&o(n,t,r),this}get(t,n){if(t=qr(t),t){const r=T.findKey(this,t);if(r){const i=this[r];if(!n)return i;if(n===!0)return Nw(i);if(T.isFunction(n))return n.call(this,i,r);if(T.isRegExp(n))return n.exec(i);throw new TypeError("parser must be boolean|regexp|function")}}}has(t,n){if(t=qr(t),t){const r=T.findKey(this,t);return!!(r&&this[r]!==void 0&&(!n||_l(this,this[r],r,n)))}return!1}delete(t,n){const r=this;let i=!1;function o(s){if(s=qr(s),s){const a=T.findKey(r,s);a&&(!n||_l(r,r[a],a,n))&&(delete r[a],i=!0)}}return T.isArray(t)?t.forEach(o):o(t),i}clear(t){const n=Object.keys(this);let r=n.length,i=!1;for(;r--;){const o=n[r];(!t||_l(this,this[o],o,t,!0))&&(delete this[o],i=!0)}return i}normalize(t){const n=this,r={};return T.forEach(this,(i,o)=>{const s=T.findKey(r,o);if(s){n[s]=No(i),delete n[o];return}const a=t?zw(o):String(o).trim();a!==o&&delete n[o],n[a]=No(i),r[a]=!0}),this}concat(...t){return this.constructor.concat(this,...t)}toJSON(t){const n=Object.create(null);return T.forEach(this,(r,i)=>{r!=null&&r!==!1&&(n[i]=t&&T.isArray(r)?r.join(", "):r)}),n}[Symbol.iterator](){return Object.entries(this.toJSON())[Symbol.iterator]()}toString(){return Object.entries(this.toJSON()).map(([t,n])=>t+": "+n).join(`
`)}get[Symbol.toStringTag](){return"AxiosHeaders"}static from(t){return t instanceof this?t:new this(t)}static concat(t,...n){const r=new this(t);return n.forEach(i=>r.set(i)),r}static accessor(t){const r=(this[Td]=this[Td]={accessors:{}}).accessors,i=this.prototype;function o(s){const a=qr(s);r[a]||(Dw(i,s),r[a]=!0)}return T.isArray(t)?t.forEach(o):o(t),this}}Is.accessor(["Content-Type","Content-Length","Accept","Accept-Encoding","User-Agent","Authorization"]);T.reduceDescriptors(Is.prototype,({value:e},t)=>{let n=t[0].toUpperCase()+t.slice(1);return{get:()=>e,set(r){this[n]=r}}});T.freezeMethods(Is);const Zt=Is;function Cl(e,t){const n=this||zu,r=t||n,i=Zt.from(r.headers);let o=r.data;return T.forEach(e,function(a){o=a.call(n,o,i.normalize(),t?t.status:void 0)}),i.normalize(),o}function Zh(e){return!!(e&&e.__CANCEL__)}function Bi(e,t,n){re.call(this,e??"canceled",re.ERR_CANCELED,t,n),this.name="CanceledError"}T.inherits(Bi,re,{__CANCEL__:!0});function Fw(e,t,n){const r=n.config.validateStatus;!n.status||!r||r(n.status)?e(n):t(new re("Request failed with status code "+n.status,[re.ERR_BAD_REQUEST,re.ERR_BAD_RESPONSE][Math.floor(n.status/100)-4],n.config,n.request,n))}const Iw=$t.hasStandardBrowserEnv?{write(e,t,n,r,i,o){const s=[e+"="+encodeURIComponent(t)];T.isNumber(n)&&s.push("expires="+new Date(n).toGMTString()),T.isString(r)&&s.push("path="+r),T.isString(i)&&s.push("domain="+i),o===!0&&s.push("secure"),document.cookie=s.join("; ")},read(e){const t=document.cookie.match(new RegExp("(^|;\\s*)("+e+")=([^;]*)"));return t?decodeURIComponent(t[3]):null},remove(e){this.write(e,"",Date.now()-864e5)}}:{write(){},read(){return null},remove(){}};function $w(e){return/^([a-z][a-z\d+\-.]*:)?\/\//i.test(e)}function Uw(e,t){return t?e.replace(/\/+$/,"")+"/"+t.replace(/^\/+/,""):e}function em(e,t){return e&&!$w(t)?Uw(e,t):t}const Bw=$t.hasStandardBrowserEnv?function(){const t=/(msie|trident)/i.test(navigator.userAgent),n=document.createElement("a");let r;function i(o){let s=o;return t&&(n.setAttribute("href",s),s=n.href),n.setAttribute("href",s),{href:n.href,protocol:n.protocol?n.protocol.replace(/:$/,""):"",host:n.host,search:n.search?n.search.replace(/^\?/,""):"",hash:n.hash?n.hash.replace(/^#/,""):"",hostname:n.hostname,port:n.port,pathname:n.pathname.charAt(0)==="/"?n.pathname:"/"+n.pathname}}return r=i(window.location.href),function(s){const a=T.isString(s)?i(s):s;return a.protocol===r.protocol&&a.host===r.host}}():function(){return function(){return!0}}();function Vw(e){const t=/^([-+\w]{1,25})(:?\/\/|:)/.exec(e);return t&&t[1]||""}function Ww(e,t){e=e||10;const n=new Array(e),r=new Array(e);let i=0,o=0,s;return t=t!==void 0?t:1e3,function(u){const c=Date.now(),m=r[o];s||(s=c),n[i]=u,r[i]=c;let f=o,h=0;for(;f!==i;)h+=n[f++],f=f%e;if(i=(i+1)%e,i===o&&(o=(o+1)%e),c-s<t)return;const w=m&&c-m;return w?Math.round(h*1e3/w):void 0}}function Pd(e,t){let n=0;const r=Ww(50,250);return i=>{const o=i.loaded,s=i.lengthComputable?i.total:void 0,a=o-n,u=r(a),c=o<=s;n=o;const m={loaded:o,total:s,progress:s?o/s:void 0,bytes:a,rate:u||void 0,estimated:u&&s&&c?(s-o)/u:void 0,event:i};m[t?"download":"upload"]=!0,e(m)}}const Hw=typeof XMLHttpRequest<"u",Qw=Hw&&function(e){return new Promise(function(n,r){let i=e.data;const o=Zt.from(e.headers).normalize();let{responseType:s,withXSRFToken:a}=e,u;function c(){e.cancelToken&&e.cancelToken.unsubscribe(u),e.signal&&e.signal.removeEventListener("abort",u)}let m;if(T.isFormData(i)){if($t.hasStandardBrowserEnv||$t.hasStandardBrowserWebWorkerEnv)o.setContentType(!1);else if((m=o.getContentType())!==!1){const[v,...b]=m?m.split(";").map(p=>p.trim()).filter(Boolean):[];o.setContentType([v||"multipart/form-data",...b].join("; "))}}let f=new XMLHttpRequest;if(e.auth){const v=e.auth.username||"",b=e.auth.password?unescape(encodeURIComponent(e.auth.password)):"";o.set("Authorization","Basic "+btoa(v+":"+b))}const h=em(e.baseURL,e.url);f.open(e.method.toUpperCase(),Xh(h,e.params,e.paramsSerializer),!0),f.timeout=e.timeout;function w(){if(!f)return;const v=Zt.from("getAllResponseHeaders"in f&&f.getAllResponseHeaders()),p={data:!s||s==="text"||s==="json"?f.responseText:f.response,status:f.status,statusText:f.statusText,headers:v,config:e,request:f};Fw(function(g){n(g),c()},function(g){r(g),c()},p),f=null}if("onloadend"in f?f.onloadend=w:f.onreadystatechange=function(){!f||f.readyState!==4||f.status===0&&!(f.responseURL&&f.responseURL.indexOf("file:")===0)||setTimeout(w)},f.onabort=function(){f&&(r(new re("Request aborted",re.ECONNABORTED,e,f)),f=null)},f.onerror=function(){r(new re("Network Error",re.ERR_NETWORK,e,f)),f=null},f.ontimeout=function(){let b=e.timeout?"timeout of "+e.timeout+"ms exceeded":"timeout exceeded";const p=e.transitional||Gh;e.timeoutErrorMessage&&(b=e.timeoutErrorMessage),r(new re(b,p.clarifyTimeoutError?re.ETIMEDOUT:re.ECONNABORTED,e,f)),f=null},$t.hasStandardBrowserEnv&&(a&&T.isFunction(a)&&(a=a(e)),a||a!==!1&&Bw(h))){const v=e.xsrfHeaderName&&e.xsrfCookieName&&Iw.read(e.xsrfCookieName);v&&o.set(e.xsrfHeaderName,v)}i===void 0&&o.setContentType(null),"setRequestHeader"in f&&T.forEach(o.toJSON(),function(b,p){f.setRequestHeader(p,b)}),T.isUndefined(e.withCredentials)||(f.withCredentials=!!e.withCredentials),s&&s!=="json"&&(f.responseType=e.responseType),typeof e.onDownloadProgress=="function"&&f.addEventListener("progress",Pd(e.onDownloadProgress,!0)),typeof e.onUploadProgress=="function"&&f.upload&&f.upload.addEventListener("progress",Pd(e.onUploadProgress)),(e.cancelToken||e.signal)&&(u=v=>{f&&(r(!v||v.type?new Bi(null,e,f):v),f.abort(),f=null)},e.cancelToken&&e.cancelToken.subscribe(u),e.signal&&(e.signal.aborted?u():e.signal.addEventListener("abort",u)));const y=Vw(h);if(y&&$t.protocols.indexOf(y)===-1){r(new re("Unsupported protocol "+y+":",re.ERR_BAD_REQUEST,e));return}f.send(i||null)})},Ra={http:gw,xhr:Qw};T.forEach(Ra,(e,t)=>{if(e){try{Object.defineProperty(e,"name",{value:t})}catch{}Object.defineProperty(e,"adapterName",{value:t})}});const Od=e=>`- ${e}`,Yw=e=>T.isFunction(e)||e===null||e===!1,tm={getAdapter:e=>{e=T.isArray(e)?e:[e];const{length:t}=e;let n,r;const i={};for(let o=0;o<t;o++){n=e[o];let s;if(r=n,!Yw(n)&&(r=Ra[(s=String(n)).toLowerCase()],r===void 0))throw new re(`Unknown adapter '${s}'`);if(r)break;i[s||"#"+o]=r}if(!r){const o=Object.entries(i).map(([a,u])=>`adapter ${a} `+(u===!1?"is not supported by the environment":"is not available in the build"));let s=t?o.length>1?`since :
`+o.map(Od).join(`
`):" "+Od(o[0]):"as no adapter specified";throw new re("There is no suitable adapter to dispatch the request "+s,"ERR_NOT_SUPPORT")}return r},adapters:Ra};function bl(e){if(e.cancelToken&&e.cancelToken.throwIfRequested(),e.signal&&e.signal.aborted)throw new Bi(null,e)}function Rd(e){return bl(e),e.headers=Zt.from(e.headers),e.data=Cl.call(e,e.transformRequest),["post","put","patch"].indexOf(e.method)!==-1&&e.headers.setContentType("application/x-www-form-urlencoded",!1),tm.getAdapter(e.adapter||zu.adapter)(e).then(function(r){return bl(e),r.data=Cl.call(e,e.transformResponse,r),r.headers=Zt.from(r.headers),r},function(r){return Zh(r)||(bl(e),r&&r.response&&(r.response.data=Cl.call(e,e.transformResponse,r.response),r.response.headers=Zt.from(r.response.headers))),Promise.reject(r)})}const Md=e=>e instanceof Zt?e.toJSON():e;function Ar(e,t){t=t||{};const n={};function r(c,m,f){return T.isPlainObject(c)&&T.isPlainObject(m)?T.merge.call({caseless:f},c,m):T.isPlainObject(m)?T.merge({},m):T.isArray(m)?m.slice():m}function i(c,m,f){if(T.isUndefined(m)){if(!T.isUndefined(c))return r(void 0,c,f)}else return r(c,m,f)}function o(c,m){if(!T.isUndefined(m))return r(void 0,m)}function s(c,m){if(T.isUndefined(m)){if(!T.isUndefined(c))return r(void 0,c)}else return r(void 0,m)}function a(c,m,f){if(f in t)return r(c,m);if(f in e)return r(void 0,c)}const u={url:o,method:o,data:o,baseURL:s,transformRequest:s,transformResponse:s,paramsSerializer:s,timeout:s,timeoutMessage:s,withCredentials:s,withXSRFToken:s,adapter:s,responseType:s,xsrfCookieName:s,xsrfHeaderName:s,onUploadProgress:s,onDownloadProgress:s,decompress:s,maxContentLength:s,maxBodyLength:s,beforeRedirect:s,transport:s,httpAgent:s,httpsAgent:s,cancelToken:s,socketPath:s,responseEncoding:s,validateStatus:a,headers:(c,m)=>i(Md(c),Md(m),!0)};return T.forEach(Object.keys(Object.assign({},e,t)),function(m){const f=u[m]||i,h=f(e[m],t[m],m);T.isUndefined(h)&&f!==a||(n[m]=h)}),n}const nm="1.6.2",Du={};["object","boolean","number","function","string","symbol"].forEach((e,t)=>{Du[e]=function(r){return typeof r===e||"a"+(t<1?"n ":" ")+e}});const Ad={};Du.transitional=function(t,n,r){function i(o,s){return"[Axios v"+nm+"] Transitional option '"+o+"'"+s+(r?". "+r:"")}return(o,s,a)=>{if(t===!1)throw new re(i(s," has been removed"+(n?" in "+n:"")),re.ERR_DEPRECATED);return n&&!Ad[s]&&(Ad[s]=!0,console.warn(i(s," has been deprecated since v"+n+" and will be removed in the near future"))),t?t(o,s,a):!0}};function Kw(e,t,n){if(typeof e!="object")throw new re("options must be an object",re.ERR_BAD_OPTION_VALUE);const r=Object.keys(e);let i=r.length;for(;i-- >0;){const o=r[i],s=t[o];if(s){const a=e[o],u=a===void 0||s(a,o,e);if(u!==!0)throw new re("option "+o+" must be "+u,re.ERR_BAD_OPTION_VALUE);continue}if(n!==!0)throw new re("Unknown option "+o,re.ERR_BAD_OPTION)}}const Ma={assertOptions:Kw,validators:Du},pn=Ma.validators;class cs{constructor(t){this.defaults=t,this.interceptors={request:new bd,response:new bd}}request(t,n){typeof t=="string"?(n=n||{},n.url=t):n=t||{},n=Ar(this.defaults,n);const{transitional:r,paramsSerializer:i,headers:o}=n;r!==void 0&&Ma.assertOptions(r,{silentJSONParsing:pn.transitional(pn.boolean),forcedJSONParsing:pn.transitional(pn.boolean),clarifyTimeoutError:pn.transitional(pn.boolean)},!1),i!=null&&(T.isFunction(i)?n.paramsSerializer={serialize:i}:Ma.assertOptions(i,{encode:pn.function,serialize:pn.function},!0)),n.method=(n.method||this.defaults.method||"get").toLowerCase();let s=o&&T.merge(o.common,o[n.method]);o&&T.forEach(["delete","get","head","post","put","patch","common"],y=>{delete o[y]}),n.headers=Zt.concat(s,o);const a=[];let u=!0;this.interceptors.request.forEach(function(v){typeof v.runWhen=="function"&&v.runWhen(n)===!1||(u=u&&v.synchronous,a.unshift(v.fulfilled,v.rejected))});const c=[];this.interceptors.response.forEach(function(v){c.push(v.fulfilled,v.rejected)});let m,f=0,h;if(!u){const y=[Rd.bind(this),void 0];for(y.unshift.apply(y,a),y.push.apply(y,c),h=y.length,m=Promise.resolve(n);f<h;)m=m.then(y[f++],y[f++]);return m}h=a.length;let w=n;for(f=0;f<h;){const y=a[f++],v=a[f++];try{w=y(w)}catch(b){v.call(this,b);break}}try{m=Rd.call(this,w)}catch(y){return Promise.reject(y)}for(f=0,h=c.length;f<h;)m=m.then(c[f++],c[f++]);return m}getUri(t){t=Ar(this.defaults,t);const n=em(t.baseURL,t.url);return Xh(n,t.params,t.paramsSerializer)}}T.forEach(["delete","get","head","options"],function(t){cs.prototype[t]=function(n,r){return this.request(Ar(r||{},{method:t,url:n,data:(r||{}).data}))}});T.forEach(["post","put","patch"],function(t){function n(r){return function(o,s,a){return this.request(Ar(a||{},{method:t,headers:r?{"Content-Type":"multipart/form-data"}:{},url:o,data:s}))}}cs.prototype[t]=n(),cs.prototype[t+"Form"]=n(!0)});const Lo=cs;class Fu{constructor(t){if(typeof t!="function")throw new TypeError("executor must be a function.");let n;this.promise=new Promise(function(o){n=o});const r=this;this.promise.then(i=>{if(!r._listeners)return;let o=r._listeners.length;for(;o-- >0;)r._listeners[o](i);r._listeners=null}),this.promise.then=i=>{let o;const s=new Promise(a=>{r.subscribe(a),o=a}).then(i);return s.cancel=function(){r.unsubscribe(o)},s},t(function(o,s,a){r.reason||(r.reason=new Bi(o,s,a),n(r.reason))})}throwIfRequested(){if(this.reason)throw this.reason}subscribe(t){if(this.reason){t(this.reason);return}this._listeners?this._listeners.push(t):this._listeners=[t]}unsubscribe(t){if(!this._listeners)return;const n=this._listeners.indexOf(t);n!==-1&&this._listeners.splice(n,1)}static source(){let t;return{token:new Fu(function(i){t=i}),cancel:t}}}const Xw=Fu;function Gw(e){return function(n){return e.apply(null,n)}}function Jw(e){return T.isObject(e)&&e.isAxiosError===!0}const Aa={Continue:100,SwitchingProtocols:101,Processing:102,EarlyHints:103,Ok:200,Created:201,Accepted:202,NonAuthoritativeInformation:203,NoContent:204,ResetContent:205,PartialContent:206,MultiStatus:207,AlreadyReported:208,ImUsed:226,MultipleChoices:300,MovedPermanently:301,Found:302,SeeOther:303,NotModified:304,UseProxy:305,Unused:306,TemporaryRedirect:307,PermanentRedirect:308,BadRequest:400,Unauthorized:401,PaymentRequired:402,Forbidden:403,NotFound:404,MethodNotAllowed:405,NotAcceptable:406,ProxyAuthenticationRequired:407,RequestTimeout:408,Conflict:409,Gone:410,LengthRequired:411,PreconditionFailed:412,PayloadTooLarge:413,UriTooLong:414,UnsupportedMediaType:415,RangeNotSatisfiable:416,ExpectationFailed:417,ImATeapot:418,MisdirectedRequest:421,UnprocessableEntity:422,Locked:423,FailedDependency:424,TooEarly:425,UpgradeRequired:426,PreconditionRequired:428,TooManyRequests:429,RequestHeaderFieldsTooLarge:431,UnavailableForLegalReasons:451,InternalServerError:500,NotImplemented:501,BadGateway:502,ServiceUnavailable:503,GatewayTimeout:504,HttpVersionNotSupported:505,VariantAlsoNegotiates:506,InsufficientStorage:507,LoopDetected:508,NotExtended:510,NetworkAuthenticationRequired:511};Object.entries(Aa).forEach(([e,t])=>{Aa[t]=e});const qw=Aa;function rm(e){const t=new Lo(e),n=Dh(Lo.prototype.request,t);return T.extend(n,Lo.prototype,t,{allOwnKeys:!0}),T.extend(n,t,null,{allOwnKeys:!0}),n.create=function(i){return rm(Ar(e,i))},n}const Oe=rm(zu);Oe.Axios=Lo;Oe.CanceledError=Bi;Oe.CancelToken=Xw;Oe.isCancel=Zh;Oe.VERSION=nm;Oe.toFormData=Fs;Oe.AxiosError=re;Oe.Cancel=Oe.CanceledError;Oe.all=function(t){return Promise.all(t)};Oe.spread=Gw;Oe.isAxiosError=Jw;Oe.mergeConfig=Ar;Oe.AxiosHeaders=Zt;Oe.formToJSON=e=>qh(T.isHTMLForm(e)?new FormData(e):e);Oe.getAdapter=tm.getAdapter;Oe.HttpStatusCode=qw;Oe.default=Oe;const Zw=Oe,e2="/healthy-management-project/assets/computer1x-59AoGLTz.jpg",t2="/healthy-management-project/assets/computer1x-rNaa-S8Z.webp",n2="/healthy-management-project/assets/computer@2x-aIbrJSD2.jpg",r2=E.div`
  padding: 80px 0;
`,i2=E.h2`
  margin-bottom: 40px;
  font-size: 48px;
  font-weight: 600;
  line-height: 1.17;
  color: var(--typography-black);
`,o2=E.div`
  width: 100%;
  height: 738px;
  display: flex;
  gap: 24px;
`,s2=E.img`
  max-width: 828px;
`,l2=E.div`
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  gap: 40px;
  flex: 1 0 0;
  max-width: 828px;
  padding: 80px;
  border-radius: 16px;
  background-color: var(--background-white);
`;E.h3`
  font-size: 20px;
  font-weight: 500;
  line-height: 1.4;
  color: var(--primary-bluedark);
`;const a2=E.form`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-self: stretch;
`,u2=E.button`
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
`;var Vi=e=>e.type==="checkbox",yr=e=>e instanceof Date,Ge=e=>e==null;const im=e=>typeof e=="object";var Ae=e=>!Ge(e)&&!Array.isArray(e)&&im(e)&&!yr(e),c2=e=>Ae(e)&&e.target?Vi(e.target)?e.target.checked:e.target.value:e,d2=e=>e.substring(0,e.search(/\.\d+(\.|$)/))||e,f2=(e,t)=>e.has(d2(t)),p2=e=>{const t=e.constructor&&e.constructor.prototype;return Ae(t)&&t.hasOwnProperty("isPrototypeOf")},Iu=typeof window<"u"&&typeof window.HTMLElement<"u"&&typeof document<"u";function Yt(e){let t;const n=Array.isArray(e);if(e instanceof Date)t=new Date(e);else if(e instanceof Set)t=new Set(e);else if(!(Iu&&(e instanceof Blob||e instanceof FileList))&&(n||Ae(e)))if(t=n?[]:{},!n&&!p2(e))t=e;else for(const r in e)e.hasOwnProperty(r)&&(t[r]=Yt(e[r]));else return e;return t}var Wi=e=>Array.isArray(e)?e.filter(Boolean):[],Ee=e=>e===void 0,V=(e,t,n)=>{if(!t||!Ae(e))return n;const r=Wi(t.split(/[,[\].]+?/)).reduce((i,o)=>Ge(i)?i:i[o],e);return Ee(r)||r===e?Ee(e[t])?n:e[t]:r},vn=e=>typeof e=="boolean";const Nd={BLUR:"blur",FOCUS_OUT:"focusout",CHANGE:"change"},Pt={onBlur:"onBlur",onChange:"onChange",onSubmit:"onSubmit",onTouched:"onTouched",all:"all"},Qt={max:"max",min:"min",maxLength:"maxLength",minLength:"minLength",pattern:"pattern",required:"required",validate:"validate"};ht.createContext(null);var h2=(e,t,n,r=!0)=>{const i={defaultValues:t._defaultValues};for(const o in e)Object.defineProperty(i,o,{get:()=>{const s=o;return t._proxyFormState[s]!==Pt.all&&(t._proxyFormState[s]=!r||Pt.all),n&&(n[s]=!0),e[s]}});return i},pt=e=>Ae(e)&&!Object.keys(e).length,m2=(e,t,n,r)=>{n(e);const{name:i,...o}=e;return pt(o)||Object.keys(o).length>=Object.keys(t).length||Object.keys(o).find(s=>t[s]===(!r||Pt.all))},Tl=e=>Array.isArray(e)?e:[e];function g2(e){const t=ht.useRef(e);t.current=e,ht.useEffect(()=>{const n=!e.disabled&&t.current.subject&&t.current.subject.subscribe({next:t.current.next});return()=>{n&&n.unsubscribe()}},[e.disabled])}var Ut=e=>typeof e=="string",y2=(e,t,n,r,i)=>Ut(e)?(r&&t.watch.add(e),V(n,e,i)):Array.isArray(e)?e.map(o=>(r&&t.watch.add(o),V(n,o))):(r&&(t.watchAll=!0),n),$u=e=>/^\w*$/.test(e),om=e=>Wi(e.replace(/["|']|\]/g,"").split(/\.|\[/));function ve(e,t,n){let r=-1;const i=$u(t)?[t]:om(t),o=i.length,s=o-1;for(;++r<o;){const a=i[r];let u=n;if(r!==s){const c=e[a];u=Ae(c)||Array.isArray(c)?c:isNaN(+i[r+1])?{}:[]}e[a]=u,e=e[a]}return e}var v2=(e,t,n,r,i)=>t?{...n[e],types:{...n[e]&&n[e].types?n[e].types:{},[r]:i||!0}}:{},Ld=e=>({isOnSubmit:!e||e===Pt.onSubmit,isOnBlur:e===Pt.onBlur,isOnChange:e===Pt.onChange,isOnAll:e===Pt.all,isOnTouch:e===Pt.onTouched}),zd=(e,t,n)=>!n&&(t.watchAll||t.watch.has(e)||[...t.watch].some(r=>e.startsWith(r)&&/^\.\w+/.test(e.slice(r.length))));const zo=(e,t,n,r)=>{for(const i of n||Object.keys(e)){const o=V(e,i);if(o){const{_f:s,...a}=o;if(s){if(s.refs&&s.refs[0]&&t(s.refs[0],i)&&!r)break;if(s.ref&&t(s.ref,s.name)&&!r)break}else Ae(a)&&zo(a,t)}}};var x2=(e,t,n)=>{const r=Wi(V(e,n));return ve(r,"root",t[n]),ve(e,n,r),e},Uu=e=>e.type==="file",kn=e=>typeof e=="function",ds=e=>{if(!Iu)return!1;const t=e?e.ownerDocument:0;return e instanceof(t&&t.defaultView?t.defaultView.HTMLElement:HTMLElement)},Do=e=>Ut(e),Bu=e=>e.type==="radio",fs=e=>e instanceof RegExp;const Dd={value:!1,isValid:!1},Fd={value:!0,isValid:!0};var sm=e=>{if(Array.isArray(e)){if(e.length>1){const t=e.filter(n=>n&&n.checked&&!n.disabled).map(n=>n.value);return{value:t,isValid:!!t.length}}return e[0].checked&&!e[0].disabled?e[0].attributes&&!Ee(e[0].attributes.value)?Ee(e[0].value)||e[0].value===""?Fd:{value:e[0].value,isValid:!0}:Fd:Dd}return Dd};const Id={isValid:!1,value:null};var lm=e=>Array.isArray(e)?e.reduce((t,n)=>n&&n.checked&&!n.disabled?{isValid:!0,value:n.value}:t,Id):Id;function $d(e,t,n="validate"){if(Do(e)||Array.isArray(e)&&e.every(Do)||vn(e)&&!e)return{type:n,message:Do(e)?e:"",ref:t}}var rr=e=>Ae(e)&&!fs(e)?e:{value:e,message:""},Ud=async(e,t,n,r,i)=>{const{ref:o,refs:s,required:a,maxLength:u,minLength:c,min:m,max:f,pattern:h,validate:w,name:y,valueAsNumber:v,mount:b,disabled:p}=e._f,d=V(t,y);if(!b||p)return{};const g=s?s[0]:o,k=$=>{r&&g.reportValidity&&(g.setCustomValidity(vn($)?"":$||""),g.reportValidity())},_={},P=Bu(o),C=Vi(o),N=P||C,O=(v||Uu(o))&&Ee(o.value)&&Ee(d)||ds(o)&&o.value===""||d===""||Array.isArray(d)&&!d.length,L=v2.bind(null,y,n,_),W=($,D,G,ce=Qt.maxLength,fe=Qt.minLength)=>{const Ne=$?D:G;_[y]={type:$?ce:fe,message:Ne,ref:o,...L($?ce:fe,Ne)}};if(i?!Array.isArray(d)||!d.length:a&&(!N&&(O||Ge(d))||vn(d)&&!d||C&&!sm(s).isValid||P&&!lm(s).isValid)){const{value:$,message:D}=Do(a)?{value:!!a,message:a}:rr(a);if($&&(_[y]={type:Qt.required,message:D,ref:g,...L(Qt.required,D)},!n))return k(D),_}if(!O&&(!Ge(m)||!Ge(f))){let $,D;const G=rr(f),ce=rr(m);if(!Ge(d)&&!isNaN(d)){const fe=o.valueAsNumber||d&&+d;Ge(G.value)||($=fe>G.value),Ge(ce.value)||(D=fe<ce.value)}else{const fe=o.valueAsDate||new Date(d),Ne=Y=>new Date(new Date().toDateString()+" "+Y),I=o.type=="time",H=o.type=="week";Ut(G.value)&&d&&($=I?Ne(d)>Ne(G.value):H?d>G.value:fe>new Date(G.value)),Ut(ce.value)&&d&&(D=I?Ne(d)<Ne(ce.value):H?d<ce.value:fe<new Date(ce.value))}if(($||D)&&(W(!!$,G.message,ce.message,Qt.max,Qt.min),!n))return k(_[y].message),_}if((u||c)&&!O&&(Ut(d)||i&&Array.isArray(d))){const $=rr(u),D=rr(c),G=!Ge($.value)&&d.length>+$.value,ce=!Ge(D.value)&&d.length<+D.value;if((G||ce)&&(W(G,$.message,D.message),!n))return k(_[y].message),_}if(h&&!O&&Ut(d)){const{value:$,message:D}=rr(h);if(fs($)&&!d.match($)&&(_[y]={type:Qt.pattern,message:D,ref:o,...L(Qt.pattern,D)},!n))return k(D),_}if(w){if(kn(w)){const $=await w(d,t),D=$d($,g);if(D&&(_[y]={...D,...L(Qt.validate,D.message)},!n))return k(D.message),_}else if(Ae(w)){let $={};for(const D in w){if(!pt($)&&!n)break;const G=$d(await w[D](d,t),g,D);G&&($={...G,...L(D,G.message)},k(G.message),n&&(_[y]=$))}if(!pt($)&&(_[y]={ref:g,...$},!n))return _}}return k(!0),_};function w2(e,t){const n=t.slice(0,-1).length;let r=0;for(;r<n;)e=Ee(e)?r++:e[t[r++]];return e}function k2(e){for(const t in e)if(e.hasOwnProperty(t)&&!Ee(e[t]))return!1;return!0}function Fe(e,t){const n=Array.isArray(t)?t:$u(t)?[t]:om(t),r=n.length===1?e:w2(e,n),i=n.length-1,o=n[i];return r&&delete r[o],i!==0&&(Ae(r)&&pt(r)||Array.isArray(r)&&k2(r))&&Fe(e,n.slice(0,-1)),e}function Pl(){let e=[];return{get observers(){return e},next:i=>{for(const o of e)o.next&&o.next(i)},subscribe:i=>(e.push(i),{unsubscribe:()=>{e=e.filter(o=>o!==i)}}),unsubscribe:()=>{e=[]}}}var ps=e=>Ge(e)||!im(e);function Bn(e,t){if(ps(e)||ps(t))return e===t;if(yr(e)&&yr(t))return e.getTime()===t.getTime();const n=Object.keys(e),r=Object.keys(t);if(n.length!==r.length)return!1;for(const i of n){const o=e[i];if(!r.includes(i))return!1;if(i!=="ref"){const s=t[i];if(yr(o)&&yr(s)||Ae(o)&&Ae(s)||Array.isArray(o)&&Array.isArray(s)?!Bn(o,s):o!==s)return!1}}return!0}var am=e=>e.type==="select-multiple",S2=e=>Bu(e)||Vi(e),Ol=e=>ds(e)&&e.isConnected,um=e=>{for(const t in e)if(kn(e[t]))return!0;return!1};function hs(e,t={}){const n=Array.isArray(e);if(Ae(e)||n)for(const r in e)Array.isArray(e[r])||Ae(e[r])&&!um(e[r])?(t[r]=Array.isArray(e[r])?[]:{},hs(e[r],t[r])):Ge(e[r])||(t[r]=!0);return t}function cm(e,t,n){const r=Array.isArray(e);if(Ae(e)||r)for(const i in e)Array.isArray(e[i])||Ae(e[i])&&!um(e[i])?Ee(t)||ps(n[i])?n[i]=Array.isArray(e[i])?hs(e[i],[]):{...hs(e[i])}:cm(e[i],Ge(t)?{}:t[i],n[i]):n[i]=!Bn(e[i],t[i]);return n}var Rl=(e,t)=>cm(e,t,hs(t)),dm=(e,{valueAsNumber:t,valueAsDate:n,setValueAs:r})=>Ee(e)?e:t?e===""?NaN:e&&+e:n&&Ut(e)?new Date(e):r?r(e):e;function Ml(e){const t=e.ref;if(!(e.refs?e.refs.every(n=>n.disabled):t.disabled))return Uu(t)?t.files:Bu(t)?lm(e.refs).value:am(t)?[...t.selectedOptions].map(({value:n})=>n):Vi(t)?sm(e.refs).value:dm(Ee(t.value)?e.ref.value:t.value,e)}var j2=(e,t,n,r)=>{const i={};for(const o of e){const s=V(t,o);s&&ve(i,o,s._f)}return{criteriaMode:n,names:[...e],fields:i,shouldUseNativeValidation:r}},Zr=e=>Ee(e)?e:fs(e)?e.source:Ae(e)?fs(e.value)?e.value.source:e.value:e,E2=e=>e.mount&&(e.required||e.min||e.max||e.maxLength||e.minLength||e.pattern||e.validate);function Bd(e,t,n){const r=V(e,n);if(r||$u(n))return{error:r,name:n};const i=n.split(".");for(;i.length;){const o=i.join("."),s=V(t,o),a=V(e,o);if(s&&!Array.isArray(s)&&n!==o)return{name:n};if(a&&a.type)return{name:o,error:a};i.pop()}return{name:n}}var _2=(e,t,n,r,i)=>i.isOnAll?!1:!n&&i.isOnTouch?!(t||e):(n?r.isOnBlur:i.isOnBlur)?!e:(n?r.isOnChange:i.isOnChange)?e:!0,C2=(e,t)=>!Wi(V(e,t)).length&&Fe(e,t);const b2={mode:Pt.onSubmit,reValidateMode:Pt.onChange,shouldFocusError:!0};function T2(e={},t){let n={...b2,...e},r={submitCount:0,isDirty:!1,isLoading:kn(n.defaultValues),isValidating:!1,isSubmitted:!1,isSubmitting:!1,isSubmitSuccessful:!1,isValid:!1,touchedFields:{},dirtyFields:{},errors:{},disabled:!1},i={},o=Ae(n.defaultValues)||Ae(n.values)?Yt(n.defaultValues||n.values)||{}:{},s=n.shouldUnregister?{}:Yt(o),a={action:!1,mount:!1,watch:!1},u={mount:new Set,unMount:new Set,array:new Set,watch:new Set},c,m=0;const f={isDirty:!1,dirtyFields:!1,touchedFields:!1,isValidating:!1,isValid:!1,errors:!1},h={values:Pl(),array:Pl(),state:Pl()},w=e.resetOptions&&e.resetOptions.keepDirtyValues,y=Ld(n.mode),v=Ld(n.reValidateMode),b=n.criteriaMode===Pt.all,p=x=>j=>{clearTimeout(m),m=setTimeout(x,j)},d=async x=>{if(f.isValid||x){const j=n.resolver?pt((await O()).errors):await W(i,!0);j!==r.isValid&&h.state.next({isValid:j})}},g=x=>f.isValidating&&h.state.next({isValidating:x}),k=(x,j=[],S,F,z=!0,A=!0)=>{if(F&&S){if(a.action=!0,A&&Array.isArray(V(i,x))){const Q=S(V(i,x),F.argA,F.argB);z&&ve(i,x,Q)}if(A&&Array.isArray(V(r.errors,x))){const Q=S(V(r.errors,x),F.argA,F.argB);z&&ve(r.errors,x,Q),C2(r.errors,x)}if(f.touchedFields&&A&&Array.isArray(V(r.touchedFields,x))){const Q=S(V(r.touchedFields,x),F.argA,F.argB);z&&ve(r.touchedFields,x,Q)}f.dirtyFields&&(r.dirtyFields=Rl(o,s)),h.state.next({name:x,isDirty:D(x,j),dirtyFields:r.dirtyFields,errors:r.errors,isValid:r.isValid})}else ve(s,x,j)},_=(x,j)=>{ve(r.errors,x,j),h.state.next({errors:r.errors})},P=(x,j,S,F)=>{const z=V(i,x);if(z){const A=V(s,x,Ee(S)?V(o,x):S);Ee(A)||F&&F.defaultChecked||j?ve(s,x,j?A:Ml(z._f)):fe(x,A),a.mount&&d()}},C=(x,j,S,F,z)=>{let A=!1,Q=!1;const pe={name:x};if(!S||F){f.isDirty&&(Q=r.isDirty,r.isDirty=pe.isDirty=D(),A=Q!==pe.isDirty);const be=Bn(V(o,x),j);Q=V(r.dirtyFields,x),be?Fe(r.dirtyFields,x):ve(r.dirtyFields,x,!0),pe.dirtyFields=r.dirtyFields,A=A||f.dirtyFields&&Q!==!be}if(S){const be=V(r.touchedFields,x);be||(ve(r.touchedFields,x,S),pe.touchedFields=r.touchedFields,A=A||f.touchedFields&&be!==S)}return A&&z&&h.state.next(pe),A?pe:{}},N=(x,j,S,F)=>{const z=V(r.errors,x),A=f.isValid&&vn(j)&&r.isValid!==j;if(e.delayError&&S?(c=p(()=>_(x,S)),c(e.delayError)):(clearTimeout(m),c=null,S?ve(r.errors,x,S):Fe(r.errors,x)),(S?!Bn(z,S):z)||!pt(F)||A){const Q={...F,...A&&vn(j)?{isValid:j}:{},errors:r.errors,name:x};r={...r,...Q},h.state.next(Q)}g(!1)},O=async x=>n.resolver(s,n.context,j2(x||u.mount,i,n.criteriaMode,n.shouldUseNativeValidation)),L=async x=>{const{errors:j}=await O(x);if(x)for(const S of x){const F=V(j,S);F?ve(r.errors,S,F):Fe(r.errors,S)}else r.errors=j;return j},W=async(x,j,S={valid:!0})=>{for(const F in x){const z=x[F];if(z){const{_f:A,...Q}=z;if(A){const pe=u.array.has(A.name),be=await Ud(z,s,b,n.shouldUseNativeValidation&&!j,pe);if(be[A.name]&&(S.valid=!1,j))break;!j&&(V(be,A.name)?pe?x2(r.errors,be,A.name):ve(r.errors,A.name,be[A.name]):Fe(r.errors,A.name))}Q&&await W(Q,j,S)}}return S.valid},$=()=>{for(const x of u.unMount){const j=V(i,x);j&&(j._f.refs?j._f.refs.every(S=>!Ol(S)):!Ol(j._f.ref))&&De(x)}u.unMount=new Set},D=(x,j)=>(x&&j&&ve(s,x,j),!Bn(me(),o)),G=(x,j,S)=>y2(x,u,{...a.mount?s:Ee(j)?o:Ut(x)?{[x]:j}:j},S,j),ce=x=>Wi(V(a.mount?s:o,x,e.shouldUnregister?V(o,x,[]):[])),fe=(x,j,S={})=>{const F=V(i,x);let z=j;if(F){const A=F._f;A&&(!A.disabled&&ve(s,x,dm(j,A)),z=ds(A.ref)&&Ge(j)?"":j,am(A.ref)?[...A.ref.options].forEach(Q=>Q.selected=z.includes(Q.value)):A.refs?Vi(A.ref)?A.refs.length>1?A.refs.forEach(Q=>(!Q.defaultChecked||!Q.disabled)&&(Q.checked=Array.isArray(z)?!!z.find(pe=>pe===Q.value):z===Q.value)):A.refs[0]&&(A.refs[0].checked=!!z):A.refs.forEach(Q=>Q.checked=Q.value===z):Uu(A.ref)?A.ref.value="":(A.ref.value=z,A.ref.type||h.values.next({name:x,values:{...s}})))}(S.shouldDirty||S.shouldTouch)&&C(x,z,S.shouldTouch,S.shouldDirty,!0),S.shouldValidate&&ae(x)},Ne=(x,j,S)=>{for(const F in j){const z=j[F],A=`${x}.${F}`,Q=V(i,A);(u.array.has(x)||!ps(z)||Q&&!Q._f)&&!yr(z)?Ne(A,z,S):fe(A,z,S)}},I=(x,j,S={})=>{const F=V(i,x),z=u.array.has(x),A=Yt(j);ve(s,x,A),z?(h.array.next({name:x,values:{...s}}),(f.isDirty||f.dirtyFields)&&S.shouldDirty&&h.state.next({name:x,dirtyFields:Rl(o,s),isDirty:D(x,A)})):F&&!F._f&&!Ge(A)?Ne(x,A,S):fe(x,A,S),zd(x,u)&&h.state.next({...r}),h.values.next({name:x,values:{...s}}),!a.mount&&t()},H=async x=>{const j=x.target;let S=j.name,F=!0;const z=V(i,S),A=()=>j.type?Ml(z._f):c2(x),Q=pe=>{F=Number.isNaN(pe)||pe===V(s,S,pe)};if(z){let pe,be;const Hi=A(),Zn=x.type===Nd.BLUR||x.type===Nd.FOCUS_OUT,fm=!E2(z._f)&&!n.resolver&&!V(r.errors,S)&&!z._f.deps||_2(Zn,V(r.touchedFields,S),r.isSubmitted,v,y),$s=zd(S,u,Zn);ve(s,S,Hi),Zn?(z._f.onBlur&&z._f.onBlur(x),c&&c(0)):z._f.onChange&&z._f.onChange(x);const Us=C(S,Hi,Zn,!1),pm=!pt(Us)||$s;if(!Zn&&h.values.next({name:S,type:x.type,values:{...s}}),fm)return f.isValid&&d(),pm&&h.state.next({name:S,...$s?{}:Us});if(!Zn&&$s&&h.state.next({...r}),g(!0),n.resolver){const{errors:Vu}=await O([S]);if(Q(Hi),F){const hm=Bd(r.errors,i,S),Wu=Bd(Vu,i,hm.name||S);pe=Wu.error,S=Wu.name,be=pt(Vu)}}else pe=(await Ud(z,s,b,n.shouldUseNativeValidation))[S],Q(Hi),F&&(pe?be=!1:f.isValid&&(be=await W(i,!0)));F&&(z._f.deps&&ae(z._f.deps),N(S,be,pe,Us))}},Y=(x,j)=>{if(V(r.errors,j)&&x.focus)return x.focus(),1},ae=async(x,j={})=>{let S,F;const z=Tl(x);if(g(!0),n.resolver){const A=await L(Ee(x)?x:z);S=pt(A),F=x?!z.some(Q=>V(A,Q)):S}else x?(F=(await Promise.all(z.map(async A=>{const Q=V(i,A);return await W(Q&&Q._f?{[A]:Q}:Q)}))).every(Boolean),!(!F&&!r.isValid)&&d()):F=S=await W(i);return h.state.next({...!Ut(x)||f.isValid&&S!==r.isValid?{}:{name:x},...n.resolver||!x?{isValid:S}:{},errors:r.errors,isValidating:!1}),j.shouldFocus&&!F&&zo(i,Y,x?z:u.mount),F},me=x=>{const j={...o,...a.mount?s:{}};return Ee(x)?j:Ut(x)?V(j,x):x.map(S=>V(j,S))},St=(x,j)=>({invalid:!!V((j||r).errors,x),isDirty:!!V((j||r).dirtyFields,x),isTouched:!!V((j||r).touchedFields,x),error:V((j||r).errors,x)}),Ve=x=>{x&&Tl(x).forEach(j=>Fe(r.errors,j)),h.state.next({errors:x?r.errors:{}})},At=(x,j,S)=>{const F=(V(i,x,{_f:{}})._f||{}).ref;ve(r.errors,x,{...j,ref:F}),h.state.next({name:x,errors:r.errors,isValid:!1}),S&&S.shouldFocus&&F&&F.focus&&F.focus()},Ce=(x,j)=>kn(x)?h.values.subscribe({next:S=>x(G(void 0,j),S)}):G(x,j,!0),De=(x,j={})=>{for(const S of x?Tl(x):u.mount)u.mount.delete(S),u.array.delete(S),j.keepValue||(Fe(i,S),Fe(s,S)),!j.keepError&&Fe(r.errors,S),!j.keepDirty&&Fe(r.dirtyFields,S),!j.keepTouched&&Fe(r.touchedFields,S),!n.shouldUnregister&&!j.keepDefaultValue&&Fe(o,S);h.values.next({values:{...s}}),h.state.next({...r,...j.keepDirty?{isDirty:D()}:{}}),!j.keepIsValid&&d()},qn=({disabled:x,name:j,field:S,fields:F,value:z})=>{if(vn(x)){const A=x?void 0:Ee(z)?Ml(S?S._f:V(F,j)._f):z;ve(s,j,A),C(j,A,!1,!1,!0)}},sn=(x,j={})=>{let S=V(i,x);const F=vn(j.disabled);return ve(i,x,{...S||{},_f:{...S&&S._f?S._f:{ref:{name:x}},name:x,mount:!0,...j}}),u.mount.add(x),S?qn({field:S,disabled:j.disabled,name:x}):P(x,!0,j.value),{...F?{disabled:j.disabled}:{},...n.progressive?{required:!!j.required,min:Zr(j.min),max:Zr(j.max),minLength:Zr(j.minLength),maxLength:Zr(j.maxLength),pattern:Zr(j.pattern)}:{},name:x,onChange:H,onBlur:H,ref:z=>{if(z){sn(x,j),S=V(i,x);const A=Ee(z.value)&&z.querySelectorAll&&z.querySelectorAll("input,select,textarea")[0]||z,Q=S2(A),pe=S._f.refs||[];if(Q?pe.find(be=>be===A):A===S._f.ref)return;ve(i,x,{_f:{...S._f,...Q?{refs:[...pe.filter(Ol),A,...Array.isArray(V(o,x))?[{}]:[]],ref:{type:A.type,name:x}}:{ref:A}}}),P(x,!1,void 0,A)}else S=V(i,x,{}),S._f&&(S._f.mount=!1),(n.shouldUnregister||j.shouldUnregister)&&!(f2(u.array,x)&&a.action)&&u.unMount.add(x)}}},M=()=>n.shouldFocusError&&zo(i,Y,u.mount),B=x=>{vn(x)&&(h.state.next({disabled:x}),zo(i,j=>{j.disabled=x},0,!1))},J=(x,j)=>async S=>{S&&(S.preventDefault&&S.preventDefault(),S.persist&&S.persist());let F=Yt(s);if(h.state.next({isSubmitting:!0}),n.resolver){const{errors:z,values:A}=await O();r.errors=z,F=A}else await W(i);Fe(r.errors,"root"),pt(r.errors)?(h.state.next({errors:{}}),await x(F,S)):(j&&await j({...r.errors},S),M(),setTimeout(M)),h.state.next({isSubmitted:!0,isSubmitting:!1,isSubmitSuccessful:pt(r.errors),submitCount:r.submitCount+1,errors:r.errors})},q=(x,j={})=>{V(i,x)&&(Ee(j.defaultValue)?I(x,V(o,x)):(I(x,j.defaultValue),ve(o,x,j.defaultValue)),j.keepTouched||Fe(r.touchedFields,x),j.keepDirty||(Fe(r.dirtyFields,x),r.isDirty=j.defaultValue?D(x,V(o,x)):D()),j.keepError||(Fe(r.errors,x),f.isValid&&d()),h.state.next({...r}))},X=(x,j={})=>{const S=x?Yt(x):o,F=Yt(S),z=x&&!pt(x)?F:o;if(j.keepDefaultValues||(o=S),!j.keepValues){if(j.keepDirtyValues||w)for(const A of u.mount)V(r.dirtyFields,A)?ve(z,A,V(s,A)):I(A,V(z,A));else{if(Iu&&Ee(x))for(const A of u.mount){const Q=V(i,A);if(Q&&Q._f){const pe=Array.isArray(Q._f.refs)?Q._f.refs[0]:Q._f.ref;if(ds(pe)){const be=pe.closest("form");if(be){be.reset();break}}}}i={}}s=e.shouldUnregister?j.keepDefaultValues?Yt(o):{}:Yt(z),h.array.next({values:{...z}}),h.values.next({values:{...z}})}u={mount:new Set,unMount:new Set,array:new Set,watch:new Set,watchAll:!1,focus:""},!a.mount&&t(),a.mount=!f.isValid||!!j.keepIsValid,a.watch=!!e.shouldUnregister,h.state.next({submitCount:j.keepSubmitCount?r.submitCount:0,isDirty:j.keepDirty?r.isDirty:!!(j.keepDefaultValues&&!Bn(x,o)),isSubmitted:j.keepIsSubmitted?r.isSubmitted:!1,dirtyFields:j.keepDirtyValues?r.dirtyFields:j.keepDefaultValues&&x?Rl(o,x):{},touchedFields:j.keepTouched?r.touchedFields:{},errors:j.keepErrors?r.errors:{},isSubmitSuccessful:j.keepIsSubmitSuccessful?r.isSubmitSuccessful:!1,isSubmitting:!1})},ne=(x,j)=>X(kn(x)?x(s):x,j);return{control:{register:sn,unregister:De,getFieldState:St,handleSubmit:J,setError:At,_executeSchema:O,_getWatch:G,_getDirty:D,_updateValid:d,_removeUnmounted:$,_updateFieldArray:k,_updateDisabledField:qn,_getFieldArray:ce,_reset:X,_resetDefaultValues:()=>kn(n.defaultValues)&&n.defaultValues().then(x=>{ne(x,n.resetOptions),h.state.next({isLoading:!1})}),_updateFormState:x=>{r={...r,...x}},_disableForm:B,_subjects:h,_proxyFormState:f,get _fields(){return i},get _formValues(){return s},get _state(){return a},set _state(x){a=x},get _defaultValues(){return o},get _names(){return u},set _names(x){u=x},get _formState(){return r},set _formState(x){r=x},get _options(){return n},set _options(x){n={...n,...x}}},trigger:ae,register:sn,handleSubmit:J,watch:Ce,setValue:I,getValues:me,reset:ne,resetField:q,clearErrors:Ve,unregister:De,setError:At,setFocus:(x,j={})=>{const S=V(i,x),F=S&&S._f;if(F){const z=F.refs?F.refs[0]:F.ref;z.focus&&(z.focus(),j.shouldSelect&&z.select())}},getFieldState:St}}function P2(e={}){const t=ht.useRef(),n=ht.useRef(),[r,i]=ht.useState({isDirty:!1,isValidating:!1,isLoading:kn(e.defaultValues),isSubmitted:!1,isSubmitting:!1,isSubmitSuccessful:!1,isValid:!1,submitCount:0,dirtyFields:{},touchedFields:{},errors:{},disabled:!1,defaultValues:kn(e.defaultValues)?void 0:e.defaultValues});t.current||(t.current={...T2(e,()=>i(s=>({...s}))),formState:r});const o=t.current.control;return o._options=e,g2({subject:o._subjects.state,next:s=>{m2(s,o._proxyFormState,o._updateFormState,!0)&&i({...o._formState})}}),ht.useEffect(()=>o._disableForm(e.disabled),[o,e.disabled]),ht.useEffect(()=>{if(o._proxyFormState.isDirty){const s=o._getDirty();s!==r.isDirty&&o._subjects.state.next({isDirty:s})}},[o,r.isDirty]),ht.useEffect(()=>{e.values&&!Bn(e.values,n.current)?(o._reset(e.values,o._options.resetOptions),n.current=e.values):o._resetDefaultValues()},[e.values,o]),ht.useEffect(()=>{o._state.mount||(o._updateValid(),o._state.mount=!0),o._state.watch&&(o._state.watch=!1,o._subjects.state.next({...o._formState})),o._removeUnmounted()}),t.current.formState=h2(r,o),t.current}const O2=()=>{const[e,t]=ue.useState(()=>{const h=localStorage.getItem("key");return JSON.parse(h)??[{name:"",email:"",phone:"",service:"",comment:""}]}),{name:n,email:r,phone:i,service:o,comment:s}=e,{register:a,handleSubmit:u,formState:{errors:c}}=P2({mode:"all"});ue.useEffect(()=>{const h=JSON.stringify(e);localStorage.setItem("key",h)},[e]);const m=h=>{t({...e,[h.target.name]:h.target.value})},f=async h=>{try{await Zw.post("https://healthy-management.onrender.com/api/senddata",h),console.log(h),t({name:"",email:"",phone:"",service:"",comment:""}),alert("Заявка відправлена!")}catch{alert("Помилка при відправці заявки")}};return l.jsx("section",{className:"container",id:"contact",children:l.jsxs(r2,{children:[l.jsx(i2,{children:"Контакт"}),l.jsxs(o2,{children:[l.jsxs("picture",{children:[l.jsx("source",{media:"(min-width: 1920px)",srcSet:`${t2} 1x, ${n2} 2x`}),l.jsx(s2,{src:e2})]}),l.jsxs(l2,{children:[l.jsx("h3",{children:"Залишайте ваші контактні дані і ми з вами зв'яжемось"}),l.jsxs(a2,{onSubmit:u(f),children:[l.jsxs("label",{children:["Ім’я",l.jsx("svg",{width:"8",height:"8",children:l.jsx("use",{href:`${Un}#star`})})]}),l.jsx("input",{type:"text",placeholder:"Введіть своє ім’я",...a("name",{required:"Це поле обов'язкове для заповнення",pattern:{value:/^(?:[a-zA-Zа-яА-ЯґҐєЄіІїЇ'-]{1,32}(?:\s+[a-zA-Zа-яА-ЯґҐєЄіІїЇ'-]{1,32})?|[a-zA-Zа-яА-ЯґҐєЄіІїЇ'-]{1,64})$/,message:"Поле повинно містити одне або два слова"}}),value:n,onChange:m}),c.name&&l.jsx("div",{style:{color:"red"},children:c.name.message}),l.jsxs("label",{children:["Емейл",l.jsx("svg",{width:"8",height:"8",children:l.jsx("use",{href:`${Un}#star`})})]}),l.jsx("input",{type:"email",placeholder:"Введіть емейл",...a("email",{required:"Це поле обов'язкове для заповнення",pattern:{value:/[a-z0-9._%+-]+@[a-z0-9.-]+\.[a-z]{2,4}$/,message:"Введіть коректний емейл"}}),value:r,onChange:m}),c.email&&l.jsx("div",{style:{color:"red"},children:c.email.message}),l.jsxs("label",{children:["Номер телефону",l.jsx("svg",{width:"8",height:"8",children:l.jsx("use",{href:`${Un}#star`})})]}),l.jsx("input",{type:"tel",placeholder:"Введіть номер телефону",...a("phone",{required:"Це поле обов'язкове для заповнення",pattern:{value:/^0\d{9}$/,message:"Введіть коректний номер телефона"}}),value:i,onChange:m}),c.phone&&l.jsx("div",{style:{color:"red"},children:c.phone.message}),l.jsxs("label",{children:["Послуга",l.jsx("svg",{width:"8",height:"8",children:l.jsx("use",{href:`${Un}#star`})})]}),l.jsxs("select",{...a("service",{required:"Оберіть послугу"}),value:o,onChange:m,children:[l.jsx("option",{value:"",disabled:!0,hidden:!0,children:"Оберіть послугу"}),l.jsx("option",{value:"Менторство та консультації",children:"Менторство та консультації"}),l.jsx("option",{value:"Діагностика",children:"Діагностика"}),l.jsx("option",{value:"Стратегії",children:"Стратегії"}),l.jsx("option",{value:"Навчання",children:"Навчання"}),l.jsx("option",{value:"Інше",children:"Інше"})]}),c.service&&l.jsx("div",{style:{color:"red"},children:c.service.message}),l.jsx("label",{children:"Повідомлення"}),l.jsx("textarea",{name:"comment",placeholder:"Введіть ваше повідомлення",...a("comment",{pattern:{value:/^.{0,500}$/,message:"Максимальна довжина повідомлення 500 символів"}}),value:s,onChange:m}),c.comment&&l.jsx("div",{style:{color:"red"},children:c.comment.message}),l.jsx(u2,{type:"submit",children:"Надіслати"})]})]})]})]})})};function R2(){const e=(t,n)=>{n.preventDefault();const r=document.getElementById(t);if(r){const i=r.getBoundingClientRect(),o=window.pageYOffset||document.documentElement.scrollTop;let s;window.innerWidth<=375?s=i.top+o-80:s=i.top+o-60,window.scrollTo({top:s,behavior:"smooth"}),setTimeout(()=>{n.target.blur()},1e3)}};return l.jsxs(l.Fragment,{children:[l.jsx(kh,{handleSetActiveLink:e}),l.jsxs("main",{children:[l.jsx(hx,{}),l.jsx(cv,{}),l.jsx(J0,{}),l.jsx(xx,{}),l.jsx(A1,{}),l.jsx(Dx,{}),l.jsx(Wx,{}),l.jsx(Qx,{}),l.jsx(S1,{}),l.jsx(yv,{}),l.jsx(O2,{})]}),l.jsx(vh,{handleSetActiveLink:e}),l.jsx(L1,{})]})}Al.createRoot(document.getElementById("root")).render(l.jsx(ht.StrictMode,{children:l.jsx(R2,{})}));
