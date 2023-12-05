function km(e,t){for(var n=0;n<t.length;n++){const r=t[n];if(typeof r!="string"&&!Array.isArray(r)){for(const i in r)if(i!=="default"&&!(i in e)){const o=Object.getOwnPropertyDescriptor(r,i);o&&Object.defineProperty(e,i,o.get?o:{enumerable:!0,get:()=>r[i]})}}}return Object.freeze(Object.defineProperty(e,Symbol.toStringTag,{value:"Module"}))}(function(){const t=document.createElement("link").relList;if(t&&t.supports&&t.supports("modulepreload"))return;for(const i of document.querySelectorAll('link[rel="modulepreload"]'))r(i);new MutationObserver(i=>{for(const o of i)if(o.type==="childList")for(const s of o.addedNodes)s.tagName==="LINK"&&s.rel==="modulepreload"&&r(s)}).observe(document,{childList:!0,subtree:!0});function n(i){const o={};return i.integrity&&(o.integrity=i.integrity),i.referrerPolicy&&(o.referrerPolicy=i.referrerPolicy),i.crossOrigin==="use-credentials"?o.credentials="include":i.crossOrigin==="anonymous"?o.credentials="omit":o.credentials="same-origin",o}function r(i){if(i.ep)return;i.ep=!0;const o=n(i);fetch(i.href,o)}})();var Sm=typeof globalThis<"u"?globalThis:typeof window<"u"?window:typeof global<"u"?global:typeof self<"u"?self:{};function xs(e){return e&&e.__esModule&&Object.prototype.hasOwnProperty.call(e,"default")?e.default:e}var Xd={exports:{}},vs={},Gd={exports:{}},te={};/**
 * @license React
 * react.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */var Fi=Symbol.for("react.element"),jm=Symbol.for("react.portal"),Em=Symbol.for("react.fragment"),_m=Symbol.for("react.strict_mode"),bm=Symbol.for("react.profiler"),Cm=Symbol.for("react.provider"),Tm=Symbol.for("react.context"),Pm=Symbol.for("react.forward_ref"),Om=Symbol.for("react.suspense"),Rm=Symbol.for("react.memo"),Mm=Symbol.for("react.lazy"),Ku=Symbol.iterator;function Am(e){return e===null||typeof e!="object"?null:(e=Ku&&e[Ku]||e["@@iterator"],typeof e=="function"?e:null)}var Jd={isMounted:function(){return!1},enqueueForceUpdate:function(){},enqueueReplaceState:function(){},enqueueSetState:function(){}},qd=Object.assign,Zd={};function Dr(e,t,n){this.props=e,this.context=t,this.refs=Zd,this.updater=n||Jd}Dr.prototype.isReactComponent={};Dr.prototype.setState=function(e,t){if(typeof e!="object"&&typeof e!="function"&&e!=null)throw Error("setState(...): takes an object of state variables to update or a function which returns an object of state variables.");this.updater.enqueueSetState(this,e,t,"setState")};Dr.prototype.forceUpdate=function(e){this.updater.enqueueForceUpdate(this,e,"forceUpdate")};function ef(){}ef.prototype=Dr.prototype;function Fa(e,t,n){this.props=e,this.context=t,this.refs=Zd,this.updater=n||Jd}var Ia=Fa.prototype=new ef;Ia.constructor=Fa;qd(Ia,Dr.prototype);Ia.isPureReactComponent=!0;var Xu=Array.isArray,tf=Object.prototype.hasOwnProperty,$a={current:null},nf={key:!0,ref:!0,__self:!0,__source:!0};function rf(e,t,n){var r,i={},o=null,s=null;if(t!=null)for(r in t.ref!==void 0&&(s=t.ref),t.key!==void 0&&(o=""+t.key),t)tf.call(t,r)&&!nf.hasOwnProperty(r)&&(i[r]=t[r]);var a=arguments.length-2;if(a===1)i.children=n;else if(1<a){for(var u=Array(a),c=0;c<a;c++)u[c]=arguments[c+2];i.children=u}if(e&&e.defaultProps)for(r in a=e.defaultProps,a)i[r]===void 0&&(i[r]=a[r]);return{$$typeof:Fi,type:e,key:o,ref:s,props:i,_owner:$a.current}}function Nm(e,t){return{$$typeof:Fi,type:e.type,key:t,ref:e.ref,props:e.props,_owner:e._owner}}function Ua(e){return typeof e=="object"&&e!==null&&e.$$typeof===Fi}function zm(e){var t={"=":"=0",":":"=2"};return"$"+e.replace(/[=:]/g,function(n){return t[n]})}var Gu=/\/+/g;function Qs(e,t){return typeof e=="object"&&e!==null&&e.key!=null?zm(""+e.key):t.toString(36)}function ko(e,t,n,r,i){var o=typeof e;(o==="undefined"||o==="boolean")&&(e=null);var s=!1;if(e===null)s=!0;else switch(o){case"string":case"number":s=!0;break;case"object":switch(e.$$typeof){case Fi:case jm:s=!0}}if(s)return s=e,i=i(s),e=r===""?"."+Qs(s,0):r,Xu(i)?(n="",e!=null&&(n=e.replace(Gu,"$&/")+"/"),ko(i,t,n,"",function(c){return c})):i!=null&&(Ua(i)&&(i=Nm(i,n+(!i.key||s&&s.key===i.key?"":(""+i.key).replace(Gu,"$&/")+"/")+e)),t.push(i)),1;if(s=0,r=r===""?".":r+":",Xu(e))for(var a=0;a<e.length;a++){o=e[a];var u=r+Qs(o,a);s+=ko(o,t,n,u,i)}else if(u=Am(e),typeof u=="function")for(e=u.call(e),a=0;!(o=e.next()).done;)o=o.value,u=r+Qs(o,a++),s+=ko(o,t,n,u,i);else if(o==="object")throw t=String(e),Error("Objects are not valid as a React child (found: "+(t==="[object Object]"?"object with keys {"+Object.keys(e).join(", ")+"}":t)+"). If you meant to render a collection of children, use an array instead.");return s}function Xi(e,t,n){if(e==null)return e;var r=[],i=0;return ko(e,r,"","",function(o){return t.call(n,o,i++)}),r}function Lm(e){if(e._status===-1){var t=e._result;t=t(),t.then(function(n){(e._status===0||e._status===-1)&&(e._status=1,e._result=n)},function(n){(e._status===0||e._status===-1)&&(e._status=2,e._result=n)}),e._status===-1&&(e._status=0,e._result=t)}if(e._status===1)return e._result.default;throw e._result}var qe={current:null},So={transition:null},Dm={ReactCurrentDispatcher:qe,ReactCurrentBatchConfig:So,ReactCurrentOwner:$a};te.Children={map:Xi,forEach:function(e,t,n){Xi(e,function(){t.apply(this,arguments)},n)},count:function(e){var t=0;return Xi(e,function(){t++}),t},toArray:function(e){return Xi(e,function(t){return t})||[]},only:function(e){if(!Ua(e))throw Error("React.Children.only expected to receive a single React element child.");return e}};te.Component=Dr;te.Fragment=Em;te.Profiler=bm;te.PureComponent=Fa;te.StrictMode=_m;te.Suspense=Om;te.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED=Dm;te.cloneElement=function(e,t,n){if(e==null)throw Error("React.cloneElement(...): The argument must be a React element, but you passed "+e+".");var r=qd({},e.props),i=e.key,o=e.ref,s=e._owner;if(t!=null){if(t.ref!==void 0&&(o=t.ref,s=$a.current),t.key!==void 0&&(i=""+t.key),e.type&&e.type.defaultProps)var a=e.type.defaultProps;for(u in t)tf.call(t,u)&&!nf.hasOwnProperty(u)&&(r[u]=t[u]===void 0&&a!==void 0?a[u]:t[u])}var u=arguments.length-2;if(u===1)r.children=n;else if(1<u){a=Array(u);for(var c=0;c<u;c++)a[c]=arguments[c+2];r.children=a}return{$$typeof:Fi,type:e.type,key:i,ref:o,props:r,_owner:s}};te.createContext=function(e){return e={$$typeof:Tm,_currentValue:e,_currentValue2:e,_threadCount:0,Provider:null,Consumer:null,_defaultValue:null,_globalName:null},e.Provider={$$typeof:Cm,_context:e},e.Consumer=e};te.createElement=rf;te.createFactory=function(e){var t=rf.bind(null,e);return t.type=e,t};te.createRef=function(){return{current:null}};te.forwardRef=function(e){return{$$typeof:Pm,render:e}};te.isValidElement=Ua;te.lazy=function(e){return{$$typeof:Mm,_payload:{_status:-1,_result:e},_init:Lm}};te.memo=function(e,t){return{$$typeof:Rm,type:e,compare:t===void 0?null:t}};te.startTransition=function(e){var t=So.transition;So.transition={};try{e()}finally{So.transition=t}};te.unstable_act=function(){throw Error("act(...) is not supported in production builds of React.")};te.useCallback=function(e,t){return qe.current.useCallback(e,t)};te.useContext=function(e){return qe.current.useContext(e)};te.useDebugValue=function(){};te.useDeferredValue=function(e){return qe.current.useDeferredValue(e)};te.useEffect=function(e,t){return qe.current.useEffect(e,t)};te.useId=function(){return qe.current.useId()};te.useImperativeHandle=function(e,t,n){return qe.current.useImperativeHandle(e,t,n)};te.useInsertionEffect=function(e,t){return qe.current.useInsertionEffect(e,t)};te.useLayoutEffect=function(e,t){return qe.current.useLayoutEffect(e,t)};te.useMemo=function(e,t){return qe.current.useMemo(e,t)};te.useReducer=function(e,t,n){return qe.current.useReducer(e,t,n)};te.useRef=function(e){return qe.current.useRef(e)};te.useState=function(e){return qe.current.useState(e)};te.useSyncExternalStore=function(e,t,n){return qe.current.useSyncExternalStore(e,t,n)};te.useTransition=function(){return qe.current.useTransition()};te.version="18.2.0";Gd.exports=te;var ue=Gd.exports;const ht=xs(ue),Ju=km({__proto__:null,default:ht},[ue]);/**
 * @license React
 * react-jsx-runtime.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */var Fm=ue,Im=Symbol.for("react.element"),$m=Symbol.for("react.fragment"),Um=Object.prototype.hasOwnProperty,Bm=Fm.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED.ReactCurrentOwner,Vm={key:!0,ref:!0,__self:!0,__source:!0};function of(e,t,n){var r,i={},o=null,s=null;n!==void 0&&(o=""+n),t.key!==void 0&&(o=""+t.key),t.ref!==void 0&&(s=t.ref);for(r in t)Um.call(t,r)&&!Vm.hasOwnProperty(r)&&(i[r]=t[r]);if(e&&e.defaultProps)for(r in t=e.defaultProps,t)i[r]===void 0&&(i[r]=t[r]);return{$$typeof:Im,type:e,key:o,ref:s,props:i,_owner:Bm.current}}vs.Fragment=$m;vs.jsx=of;vs.jsxs=of;Xd.exports=vs;var l=Xd.exports,Dl={},sf={exports:{}},dt={},lf={exports:{}},af={};/**
 * @license React
 * scheduler.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */(function(e){function t(I,H){var Y=I.length;I.push(H);e:for(;0<Y;){var ae=Y-1>>>1,me=I[ae];if(0<i(me,H))I[ae]=H,I[Y]=me,Y=ae;else break e}}function n(I){return I.length===0?null:I[0]}function r(I){if(I.length===0)return null;var H=I[0],Y=I.pop();if(Y!==H){I[0]=Y;e:for(var ae=0,me=I.length,St=me>>>1;ae<St;){var Ve=2*(ae+1)-1,At=I[Ve],be=Ve+1,De=I[be];if(0>i(At,Y))be<me&&0>i(De,At)?(I[ae]=De,I[be]=Y,ae=be):(I[ae]=At,I[Ve]=Y,ae=Ve);else if(be<me&&0>i(De,Y))I[ae]=De,I[be]=Y,ae=be;else break e}}return H}function i(I,H){var Y=I.sortIndex-H.sortIndex;return Y!==0?Y:I.id-H.id}if(typeof performance=="object"&&typeof performance.now=="function"){var o=performance;e.unstable_now=function(){return o.now()}}else{var s=Date,a=s.now();e.unstable_now=function(){return s.now()-a}}var u=[],c=[],m=1,f=null,h=3,w=!1,y=!1,x=!1,C=typeof setTimeout=="function"?setTimeout:null,p=typeof clearTimeout=="function"?clearTimeout:null,d=typeof setImmediate<"u"?setImmediate:null;typeof navigator<"u"&&navigator.scheduling!==void 0&&navigator.scheduling.isInputPending!==void 0&&navigator.scheduling.isInputPending.bind(navigator.scheduling);function g(I){for(var H=n(c);H!==null;){if(H.callback===null)r(c);else if(H.startTime<=I)r(c),H.sortIndex=H.expirationTime,t(u,H);else break;H=n(c)}}function k(I){if(x=!1,g(I),!y)if(n(u)!==null)y=!0,fe(_);else{var H=n(c);H!==null&&Ne(k,H.startTime-I)}}function _(I,H){y=!1,x&&(x=!1,p(N),N=-1),w=!0;var Y=h;try{for(g(H),f=n(u);f!==null&&(!(f.expirationTime>H)||I&&!W());){var ae=f.callback;if(typeof ae=="function"){f.callback=null,h=f.priorityLevel;var me=ae(f.expirationTime<=H);H=e.unstable_now(),typeof me=="function"?f.callback=me:f===n(u)&&r(u),g(H)}else r(u);f=n(u)}if(f!==null)var St=!0;else{var Ve=n(c);Ve!==null&&Ne(k,Ve.startTime-H),St=!1}return St}finally{f=null,h=Y,w=!1}}var P=!1,b=null,N=-1,O=5,z=-1;function W(){return!(e.unstable_now()-z<O)}function $(){if(b!==null){var I=e.unstable_now();z=I;var H=!0;try{H=b(!0,I)}finally{H?D():(P=!1,b=null)}}else P=!1}var D;if(typeof d=="function")D=function(){d($)};else if(typeof MessageChannel<"u"){var G=new MessageChannel,ce=G.port2;G.port1.onmessage=$,D=function(){ce.postMessage(null)}}else D=function(){C($,0)};function fe(I){b=I,P||(P=!0,D())}function Ne(I,H){N=C(function(){I(e.unstable_now())},H)}e.unstable_IdlePriority=5,e.unstable_ImmediatePriority=1,e.unstable_LowPriority=4,e.unstable_NormalPriority=3,e.unstable_Profiling=null,e.unstable_UserBlockingPriority=2,e.unstable_cancelCallback=function(I){I.callback=null},e.unstable_continueExecution=function(){y||w||(y=!0,fe(_))},e.unstable_forceFrameRate=function(I){0>I||125<I?console.error("forceFrameRate takes a positive int between 0 and 125, forcing frame rates higher than 125 fps is not supported"):O=0<I?Math.floor(1e3/I):5},e.unstable_getCurrentPriorityLevel=function(){return h},e.unstable_getFirstCallbackNode=function(){return n(u)},e.unstable_next=function(I){switch(h){case 1:case 2:case 3:var H=3;break;default:H=h}var Y=h;h=H;try{return I()}finally{h=Y}},e.unstable_pauseExecution=function(){},e.unstable_requestPaint=function(){},e.unstable_runWithPriority=function(I,H){switch(I){case 1:case 2:case 3:case 4:case 5:break;default:I=3}var Y=h;h=I;try{return H()}finally{h=Y}},e.unstable_scheduleCallback=function(I,H,Y){var ae=e.unstable_now();switch(typeof Y=="object"&&Y!==null?(Y=Y.delay,Y=typeof Y=="number"&&0<Y?ae+Y:ae):Y=ae,I){case 1:var me=-1;break;case 2:me=250;break;case 5:me=1073741823;break;case 4:me=1e4;break;default:me=5e3}return me=Y+me,I={id:m++,callback:H,priorityLevel:I,startTime:Y,expirationTime:me,sortIndex:-1},Y>ae?(I.sortIndex=Y,t(c,I),n(u)===null&&I===n(c)&&(x?(p(N),N=-1):x=!0,Ne(k,Y-ae))):(I.sortIndex=me,t(u,I),y||w||(y=!0,fe(_))),I},e.unstable_shouldYield=W,e.unstable_wrapCallback=function(I){var H=h;return function(){var Y=h;h=H;try{return I.apply(this,arguments)}finally{h=Y}}}})(af);lf.exports=af;var Wm=lf.exports;/**
 * @license React
 * react-dom.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */var uf=ue,ct=Wm;function R(e){for(var t="https://reactjs.org/docs/error-decoder.html?invariant="+e,n=1;n<arguments.length;n++)t+="&args[]="+encodeURIComponent(arguments[n]);return"Minified React error #"+e+"; visit "+t+" for the full message or use the non-minified dev environment for full errors and additional helpful warnings."}var cf=new Set,gi={};function er(e,t){Tr(e,t),Tr(e+"Capture",t)}function Tr(e,t){for(gi[e]=t,e=0;e<t.length;e++)cf.add(t[e])}var en=!(typeof window>"u"||typeof window.document>"u"||typeof window.document.createElement>"u"),Fl=Object.prototype.hasOwnProperty,Hm=/^[:A-Z_a-z\u00C0-\u00D6\u00D8-\u00F6\u00F8-\u02FF\u0370-\u037D\u037F-\u1FFF\u200C-\u200D\u2070-\u218F\u2C00-\u2FEF\u3001-\uD7FF\uF900-\uFDCF\uFDF0-\uFFFD][:A-Z_a-z\u00C0-\u00D6\u00D8-\u00F6\u00F8-\u02FF\u0370-\u037D\u037F-\u1FFF\u200C-\u200D\u2070-\u218F\u2C00-\u2FEF\u3001-\uD7FF\uF900-\uFDCF\uFDF0-\uFFFD\-.0-9\u00B7\u0300-\u036F\u203F-\u2040]*$/,qu={},Zu={};function Qm(e){return Fl.call(Zu,e)?!0:Fl.call(qu,e)?!1:Hm.test(e)?Zu[e]=!0:(qu[e]=!0,!1)}function Ym(e,t,n,r){if(n!==null&&n.type===0)return!1;switch(typeof t){case"function":case"symbol":return!0;case"boolean":return r?!1:n!==null?!n.acceptsBooleans:(e=e.toLowerCase().slice(0,5),e!=="data-"&&e!=="aria-");default:return!1}}function Km(e,t,n,r){if(t===null||typeof t>"u"||Ym(e,t,n,r))return!0;if(r)return!1;if(n!==null)switch(n.type){case 3:return!t;case 4:return t===!1;case 5:return isNaN(t);case 6:return isNaN(t)||1>t}return!1}function Ze(e,t,n,r,i,o,s){this.acceptsBooleans=t===2||t===3||t===4,this.attributeName=r,this.attributeNamespace=i,this.mustUseProperty=n,this.propertyName=e,this.type=t,this.sanitizeURL=o,this.removeEmptyString=s}var Be={};"children dangerouslySetInnerHTML defaultValue defaultChecked innerHTML suppressContentEditableWarning suppressHydrationWarning style".split(" ").forEach(function(e){Be[e]=new Ze(e,0,!1,e,null,!1,!1)});[["acceptCharset","accept-charset"],["className","class"],["htmlFor","for"],["httpEquiv","http-equiv"]].forEach(function(e){var t=e[0];Be[t]=new Ze(t,1,!1,e[1],null,!1,!1)});["contentEditable","draggable","spellCheck","value"].forEach(function(e){Be[e]=new Ze(e,2,!1,e.toLowerCase(),null,!1,!1)});["autoReverse","externalResourcesRequired","focusable","preserveAlpha"].forEach(function(e){Be[e]=new Ze(e,2,!1,e,null,!1,!1)});"allowFullScreen async autoFocus autoPlay controls default defer disabled disablePictureInPicture disableRemotePlayback formNoValidate hidden loop noModule noValidate open playsInline readOnly required reversed scoped seamless itemScope".split(" ").forEach(function(e){Be[e]=new Ze(e,3,!1,e.toLowerCase(),null,!1,!1)});["checked","multiple","muted","selected"].forEach(function(e){Be[e]=new Ze(e,3,!0,e,null,!1,!1)});["capture","download"].forEach(function(e){Be[e]=new Ze(e,4,!1,e,null,!1,!1)});["cols","rows","size","span"].forEach(function(e){Be[e]=new Ze(e,6,!1,e,null,!1,!1)});["rowSpan","start"].forEach(function(e){Be[e]=new Ze(e,5,!1,e.toLowerCase(),null,!1,!1)});var Ba=/[\-:]([a-z])/g;function Va(e){return e[1].toUpperCase()}"accent-height alignment-baseline arabic-form baseline-shift cap-height clip-path clip-rule color-interpolation color-interpolation-filters color-profile color-rendering dominant-baseline enable-background fill-opacity fill-rule flood-color flood-opacity font-family font-size font-size-adjust font-stretch font-style font-variant font-weight glyph-name glyph-orientation-horizontal glyph-orientation-vertical horiz-adv-x horiz-origin-x image-rendering letter-spacing lighting-color marker-end marker-mid marker-start overline-position overline-thickness paint-order panose-1 pointer-events rendering-intent shape-rendering stop-color stop-opacity strikethrough-position strikethrough-thickness stroke-dasharray stroke-dashoffset stroke-linecap stroke-linejoin stroke-miterlimit stroke-opacity stroke-width text-anchor text-decoration text-rendering underline-position underline-thickness unicode-bidi unicode-range units-per-em v-alphabetic v-hanging v-ideographic v-mathematical vector-effect vert-adv-y vert-origin-x vert-origin-y word-spacing writing-mode xmlns:xlink x-height".split(" ").forEach(function(e){var t=e.replace(Ba,Va);Be[t]=new Ze(t,1,!1,e,null,!1,!1)});"xlink:actuate xlink:arcrole xlink:role xlink:show xlink:title xlink:type".split(" ").forEach(function(e){var t=e.replace(Ba,Va);Be[t]=new Ze(t,1,!1,e,"http://www.w3.org/1999/xlink",!1,!1)});["xml:base","xml:lang","xml:space"].forEach(function(e){var t=e.replace(Ba,Va);Be[t]=new Ze(t,1,!1,e,"http://www.w3.org/XML/1998/namespace",!1,!1)});["tabIndex","crossOrigin"].forEach(function(e){Be[e]=new Ze(e,1,!1,e.toLowerCase(),null,!1,!1)});Be.xlinkHref=new Ze("xlinkHref",1,!1,"xlink:href","http://www.w3.org/1999/xlink",!0,!1);["src","href","action","formAction"].forEach(function(e){Be[e]=new Ze(e,1,!1,e.toLowerCase(),null,!0,!0)});function Wa(e,t,n,r){var i=Be.hasOwnProperty(t)?Be[t]:null;(i!==null?i.type!==0:r||!(2<t.length)||t[0]!=="o"&&t[0]!=="O"||t[1]!=="n"&&t[1]!=="N")&&(Km(t,n,i,r)&&(n=null),r||i===null?Qm(t)&&(n===null?e.removeAttribute(t):e.setAttribute(t,""+n)):i.mustUseProperty?e[i.propertyName]=n===null?i.type===3?!1:"":n:(t=i.attributeName,r=i.attributeNamespace,n===null?e.removeAttribute(t):(i=i.type,n=i===3||i===4&&n===!0?"":""+n,r?e.setAttributeNS(r,t,n):e.setAttribute(t,n))))}var on=uf.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED,Gi=Symbol.for("react.element"),ar=Symbol.for("react.portal"),ur=Symbol.for("react.fragment"),Ha=Symbol.for("react.strict_mode"),Il=Symbol.for("react.profiler"),df=Symbol.for("react.provider"),ff=Symbol.for("react.context"),Qa=Symbol.for("react.forward_ref"),$l=Symbol.for("react.suspense"),Ul=Symbol.for("react.suspense_list"),Ya=Symbol.for("react.memo"),yn=Symbol.for("react.lazy"),pf=Symbol.for("react.offscreen"),ec=Symbol.iterator;function Br(e){return e===null||typeof e!="object"?null:(e=ec&&e[ec]||e["@@iterator"],typeof e=="function"?e:null)}var Se=Object.assign,Ys;function ri(e){if(Ys===void 0)try{throw Error()}catch(n){var t=n.stack.trim().match(/\n( *(at )?)/);Ys=t&&t[1]||""}return`
`+Ys+e}var Ks=!1;function Xs(e,t){if(!e||Ks)return"";Ks=!0;var n=Error.prepareStackTrace;Error.prepareStackTrace=void 0;try{if(t)if(t=function(){throw Error()},Object.defineProperty(t.prototype,"props",{set:function(){throw Error()}}),typeof Reflect=="object"&&Reflect.construct){try{Reflect.construct(t,[])}catch(c){var r=c}Reflect.construct(e,[],t)}else{try{t.call()}catch(c){r=c}e.call(t.prototype)}else{try{throw Error()}catch(c){r=c}e()}}catch(c){if(c&&r&&typeof c.stack=="string"){for(var i=c.stack.split(`
`),o=r.stack.split(`
`),s=i.length-1,a=o.length-1;1<=s&&0<=a&&i[s]!==o[a];)a--;for(;1<=s&&0<=a;s--,a--)if(i[s]!==o[a]){if(s!==1||a!==1)do if(s--,a--,0>a||i[s]!==o[a]){var u=`
`+i[s].replace(" at new "," at ");return e.displayName&&u.includes("<anonymous>")&&(u=u.replace("<anonymous>",e.displayName)),u}while(1<=s&&0<=a);break}}}finally{Ks=!1,Error.prepareStackTrace=n}return(e=e?e.displayName||e.name:"")?ri(e):""}function Xm(e){switch(e.tag){case 5:return ri(e.type);case 16:return ri("Lazy");case 13:return ri("Suspense");case 19:return ri("SuspenseList");case 0:case 2:case 15:return e=Xs(e.type,!1),e;case 11:return e=Xs(e.type.render,!1),e;case 1:return e=Xs(e.type,!0),e;default:return""}}function Bl(e){if(e==null)return null;if(typeof e=="function")return e.displayName||e.name||null;if(typeof e=="string")return e;switch(e){case ur:return"Fragment";case ar:return"Portal";case Il:return"Profiler";case Ha:return"StrictMode";case $l:return"Suspense";case Ul:return"SuspenseList"}if(typeof e=="object")switch(e.$$typeof){case ff:return(e.displayName||"Context")+".Consumer";case df:return(e._context.displayName||"Context")+".Provider";case Qa:var t=e.render;return e=e.displayName,e||(e=t.displayName||t.name||"",e=e!==""?"ForwardRef("+e+")":"ForwardRef"),e;case Ya:return t=e.displayName||null,t!==null?t:Bl(e.type)||"Memo";case yn:t=e._payload,e=e._init;try{return Bl(e(t))}catch{}}return null}function Gm(e){var t=e.type;switch(e.tag){case 24:return"Cache";case 9:return(t.displayName||"Context")+".Consumer";case 10:return(t._context.displayName||"Context")+".Provider";case 18:return"DehydratedFragment";case 11:return e=t.render,e=e.displayName||e.name||"",t.displayName||(e!==""?"ForwardRef("+e+")":"ForwardRef");case 7:return"Fragment";case 5:return t;case 4:return"Portal";case 3:return"Root";case 6:return"Text";case 16:return Bl(t);case 8:return t===Ha?"StrictMode":"Mode";case 22:return"Offscreen";case 12:return"Profiler";case 21:return"Scope";case 13:return"Suspense";case 19:return"SuspenseList";case 25:return"TracingMarker";case 1:case 0:case 17:case 2:case 14:case 15:if(typeof t=="function")return t.displayName||t.name||null;if(typeof t=="string")return t}return null}function An(e){switch(typeof e){case"boolean":case"number":case"string":case"undefined":return e;case"object":return e;default:return""}}function hf(e){var t=e.type;return(e=e.nodeName)&&e.toLowerCase()==="input"&&(t==="checkbox"||t==="radio")}function Jm(e){var t=hf(e)?"checked":"value",n=Object.getOwnPropertyDescriptor(e.constructor.prototype,t),r=""+e[t];if(!e.hasOwnProperty(t)&&typeof n<"u"&&typeof n.get=="function"&&typeof n.set=="function"){var i=n.get,o=n.set;return Object.defineProperty(e,t,{configurable:!0,get:function(){return i.call(this)},set:function(s){r=""+s,o.call(this,s)}}),Object.defineProperty(e,t,{enumerable:n.enumerable}),{getValue:function(){return r},setValue:function(s){r=""+s},stopTracking:function(){e._valueTracker=null,delete e[t]}}}}function Ji(e){e._valueTracker||(e._valueTracker=Jm(e))}function mf(e){if(!e)return!1;var t=e._valueTracker;if(!t)return!0;var n=t.getValue(),r="";return e&&(r=hf(e)?e.checked?"true":"false":e.value),e=r,e!==n?(t.setValue(e),!0):!1}function Uo(e){if(e=e||(typeof document<"u"?document:void 0),typeof e>"u")return null;try{return e.activeElement||e.body}catch{return e.body}}function Vl(e,t){var n=t.checked;return Se({},t,{defaultChecked:void 0,defaultValue:void 0,value:void 0,checked:n??e._wrapperState.initialChecked})}function tc(e,t){var n=t.defaultValue==null?"":t.defaultValue,r=t.checked!=null?t.checked:t.defaultChecked;n=An(t.value!=null?t.value:n),e._wrapperState={initialChecked:r,initialValue:n,controlled:t.type==="checkbox"||t.type==="radio"?t.checked!=null:t.value!=null}}function gf(e,t){t=t.checked,t!=null&&Wa(e,"checked",t,!1)}function Wl(e,t){gf(e,t);var n=An(t.value),r=t.type;if(n!=null)r==="number"?(n===0&&e.value===""||e.value!=n)&&(e.value=""+n):e.value!==""+n&&(e.value=""+n);else if(r==="submit"||r==="reset"){e.removeAttribute("value");return}t.hasOwnProperty("value")?Hl(e,t.type,n):t.hasOwnProperty("defaultValue")&&Hl(e,t.type,An(t.defaultValue)),t.checked==null&&t.defaultChecked!=null&&(e.defaultChecked=!!t.defaultChecked)}function nc(e,t,n){if(t.hasOwnProperty("value")||t.hasOwnProperty("defaultValue")){var r=t.type;if(!(r!=="submit"&&r!=="reset"||t.value!==void 0&&t.value!==null))return;t=""+e._wrapperState.initialValue,n||t===e.value||(e.value=t),e.defaultValue=t}n=e.name,n!==""&&(e.name=""),e.defaultChecked=!!e._wrapperState.initialChecked,n!==""&&(e.name=n)}function Hl(e,t,n){(t!=="number"||Uo(e.ownerDocument)!==e)&&(n==null?e.defaultValue=""+e._wrapperState.initialValue:e.defaultValue!==""+n&&(e.defaultValue=""+n))}var ii=Array.isArray;function kr(e,t,n,r){if(e=e.options,t){t={};for(var i=0;i<n.length;i++)t["$"+n[i]]=!0;for(n=0;n<e.length;n++)i=t.hasOwnProperty("$"+e[n].value),e[n].selected!==i&&(e[n].selected=i),i&&r&&(e[n].defaultSelected=!0)}else{for(n=""+An(n),t=null,i=0;i<e.length;i++){if(e[i].value===n){e[i].selected=!0,r&&(e[i].defaultSelected=!0);return}t!==null||e[i].disabled||(t=e[i])}t!==null&&(t.selected=!0)}}function Ql(e,t){if(t.dangerouslySetInnerHTML!=null)throw Error(R(91));return Se({},t,{value:void 0,defaultValue:void 0,children:""+e._wrapperState.initialValue})}function rc(e,t){var n=t.value;if(n==null){if(n=t.children,t=t.defaultValue,n!=null){if(t!=null)throw Error(R(92));if(ii(n)){if(1<n.length)throw Error(R(93));n=n[0]}t=n}t==null&&(t=""),n=t}e._wrapperState={initialValue:An(n)}}function yf(e,t){var n=An(t.value),r=An(t.defaultValue);n!=null&&(n=""+n,n!==e.value&&(e.value=n),t.defaultValue==null&&e.defaultValue!==n&&(e.defaultValue=n)),r!=null&&(e.defaultValue=""+r)}function ic(e){var t=e.textContent;t===e._wrapperState.initialValue&&t!==""&&t!==null&&(e.value=t)}function xf(e){switch(e){case"svg":return"http://www.w3.org/2000/svg";case"math":return"http://www.w3.org/1998/Math/MathML";default:return"http://www.w3.org/1999/xhtml"}}function Yl(e,t){return e==null||e==="http://www.w3.org/1999/xhtml"?xf(t):e==="http://www.w3.org/2000/svg"&&t==="foreignObject"?"http://www.w3.org/1999/xhtml":e}var qi,vf=function(e){return typeof MSApp<"u"&&MSApp.execUnsafeLocalFunction?function(t,n,r,i){MSApp.execUnsafeLocalFunction(function(){return e(t,n,r,i)})}:e}(function(e,t){if(e.namespaceURI!=="http://www.w3.org/2000/svg"||"innerHTML"in e)e.innerHTML=t;else{for(qi=qi||document.createElement("div"),qi.innerHTML="<svg>"+t.valueOf().toString()+"</svg>",t=qi.firstChild;e.firstChild;)e.removeChild(e.firstChild);for(;t.firstChild;)e.appendChild(t.firstChild)}});function yi(e,t){if(t){var n=e.firstChild;if(n&&n===e.lastChild&&n.nodeType===3){n.nodeValue=t;return}}e.textContent=t}var li={animationIterationCount:!0,aspectRatio:!0,borderImageOutset:!0,borderImageSlice:!0,borderImageWidth:!0,boxFlex:!0,boxFlexGroup:!0,boxOrdinalGroup:!0,columnCount:!0,columns:!0,flex:!0,flexGrow:!0,flexPositive:!0,flexShrink:!0,flexNegative:!0,flexOrder:!0,gridArea:!0,gridRow:!0,gridRowEnd:!0,gridRowSpan:!0,gridRowStart:!0,gridColumn:!0,gridColumnEnd:!0,gridColumnSpan:!0,gridColumnStart:!0,fontWeight:!0,lineClamp:!0,lineHeight:!0,opacity:!0,order:!0,orphans:!0,tabSize:!0,widows:!0,zIndex:!0,zoom:!0,fillOpacity:!0,floodOpacity:!0,stopOpacity:!0,strokeDasharray:!0,strokeDashoffset:!0,strokeMiterlimit:!0,strokeOpacity:!0,strokeWidth:!0},qm=["Webkit","ms","Moz","O"];Object.keys(li).forEach(function(e){qm.forEach(function(t){t=t+e.charAt(0).toUpperCase()+e.substring(1),li[t]=li[e]})});function wf(e,t,n){return t==null||typeof t=="boolean"||t===""?"":n||typeof t!="number"||t===0||li.hasOwnProperty(e)&&li[e]?(""+t).trim():t+"px"}function kf(e,t){e=e.style;for(var n in t)if(t.hasOwnProperty(n)){var r=n.indexOf("--")===0,i=wf(n,t[n],r);n==="float"&&(n="cssFloat"),r?e.setProperty(n,i):e[n]=i}}var Zm=Se({menuitem:!0},{area:!0,base:!0,br:!0,col:!0,embed:!0,hr:!0,img:!0,input:!0,keygen:!0,link:!0,meta:!0,param:!0,source:!0,track:!0,wbr:!0});function Kl(e,t){if(t){if(Zm[e]&&(t.children!=null||t.dangerouslySetInnerHTML!=null))throw Error(R(137,e));if(t.dangerouslySetInnerHTML!=null){if(t.children!=null)throw Error(R(60));if(typeof t.dangerouslySetInnerHTML!="object"||!("__html"in t.dangerouslySetInnerHTML))throw Error(R(61))}if(t.style!=null&&typeof t.style!="object")throw Error(R(62))}}function Xl(e,t){if(e.indexOf("-")===-1)return typeof t.is=="string";switch(e){case"annotation-xml":case"color-profile":case"font-face":case"font-face-src":case"font-face-uri":case"font-face-format":case"font-face-name":case"missing-glyph":return!1;default:return!0}}var Gl=null;function Ka(e){return e=e.target||e.srcElement||window,e.correspondingUseElement&&(e=e.correspondingUseElement),e.nodeType===3?e.parentNode:e}var Jl=null,Sr=null,jr=null;function oc(e){if(e=Ui(e)){if(typeof Jl!="function")throw Error(R(280));var t=e.stateNode;t&&(t=Es(t),Jl(e.stateNode,e.type,t))}}function Sf(e){Sr?jr?jr.push(e):jr=[e]:Sr=e}function jf(){if(Sr){var e=Sr,t=jr;if(jr=Sr=null,oc(e),t)for(e=0;e<t.length;e++)oc(t[e])}}function Ef(e,t){return e(t)}function _f(){}var Gs=!1;function bf(e,t,n){if(Gs)return e(t,n);Gs=!0;try{return Ef(e,t,n)}finally{Gs=!1,(Sr!==null||jr!==null)&&(_f(),jf())}}function xi(e,t){var n=e.stateNode;if(n===null)return null;var r=Es(n);if(r===null)return null;n=r[t];e:switch(t){case"onClick":case"onClickCapture":case"onDoubleClick":case"onDoubleClickCapture":case"onMouseDown":case"onMouseDownCapture":case"onMouseMove":case"onMouseMoveCapture":case"onMouseUp":case"onMouseUpCapture":case"onMouseEnter":(r=!r.disabled)||(e=e.type,r=!(e==="button"||e==="input"||e==="select"||e==="textarea")),e=!r;break e;default:e=!1}if(e)return null;if(n&&typeof n!="function")throw Error(R(231,t,typeof n));return n}var ql=!1;if(en)try{var Vr={};Object.defineProperty(Vr,"passive",{get:function(){ql=!0}}),window.addEventListener("test",Vr,Vr),window.removeEventListener("test",Vr,Vr)}catch{ql=!1}function eg(e,t,n,r,i,o,s,a,u){var c=Array.prototype.slice.call(arguments,3);try{t.apply(n,c)}catch(m){this.onError(m)}}var ai=!1,Bo=null,Vo=!1,Zl=null,tg={onError:function(e){ai=!0,Bo=e}};function ng(e,t,n,r,i,o,s,a,u){ai=!1,Bo=null,eg.apply(tg,arguments)}function rg(e,t,n,r,i,o,s,a,u){if(ng.apply(this,arguments),ai){if(ai){var c=Bo;ai=!1,Bo=null}else throw Error(R(198));Vo||(Vo=!0,Zl=c)}}function tr(e){var t=e,n=e;if(e.alternate)for(;t.return;)t=t.return;else{e=t;do t=e,t.flags&4098&&(n=t.return),e=t.return;while(e)}return t.tag===3?n:null}function Cf(e){if(e.tag===13){var t=e.memoizedState;if(t===null&&(e=e.alternate,e!==null&&(t=e.memoizedState)),t!==null)return t.dehydrated}return null}function sc(e){if(tr(e)!==e)throw Error(R(188))}function ig(e){var t=e.alternate;if(!t){if(t=tr(e),t===null)throw Error(R(188));return t!==e?null:e}for(var n=e,r=t;;){var i=n.return;if(i===null)break;var o=i.alternate;if(o===null){if(r=i.return,r!==null){n=r;continue}break}if(i.child===o.child){for(o=i.child;o;){if(o===n)return sc(i),e;if(o===r)return sc(i),t;o=o.sibling}throw Error(R(188))}if(n.return!==r.return)n=i,r=o;else{for(var s=!1,a=i.child;a;){if(a===n){s=!0,n=i,r=o;break}if(a===r){s=!0,r=i,n=o;break}a=a.sibling}if(!s){for(a=o.child;a;){if(a===n){s=!0,n=o,r=i;break}if(a===r){s=!0,r=o,n=i;break}a=a.sibling}if(!s)throw Error(R(189))}}if(n.alternate!==r)throw Error(R(190))}if(n.tag!==3)throw Error(R(188));return n.stateNode.current===n?e:t}function Tf(e){return e=ig(e),e!==null?Pf(e):null}function Pf(e){if(e.tag===5||e.tag===6)return e;for(e=e.child;e!==null;){var t=Pf(e);if(t!==null)return t;e=e.sibling}return null}var Of=ct.unstable_scheduleCallback,lc=ct.unstable_cancelCallback,og=ct.unstable_shouldYield,sg=ct.unstable_requestPaint,_e=ct.unstable_now,lg=ct.unstable_getCurrentPriorityLevel,Xa=ct.unstable_ImmediatePriority,Rf=ct.unstable_UserBlockingPriority,Wo=ct.unstable_NormalPriority,ag=ct.unstable_LowPriority,Mf=ct.unstable_IdlePriority,ws=null,Bt=null;function ug(e){if(Bt&&typeof Bt.onCommitFiberRoot=="function")try{Bt.onCommitFiberRoot(ws,e,void 0,(e.current.flags&128)===128)}catch{}}var Ot=Math.clz32?Math.clz32:fg,cg=Math.log,dg=Math.LN2;function fg(e){return e>>>=0,e===0?32:31-(cg(e)/dg|0)|0}var Zi=64,eo=4194304;function oi(e){switch(e&-e){case 1:return 1;case 2:return 2;case 4:return 4;case 8:return 8;case 16:return 16;case 32:return 32;case 64:case 128:case 256:case 512:case 1024:case 2048:case 4096:case 8192:case 16384:case 32768:case 65536:case 131072:case 262144:case 524288:case 1048576:case 2097152:return e&4194240;case 4194304:case 8388608:case 16777216:case 33554432:case 67108864:return e&130023424;case 134217728:return 134217728;case 268435456:return 268435456;case 536870912:return 536870912;case 1073741824:return 1073741824;default:return e}}function Ho(e,t){var n=e.pendingLanes;if(n===0)return 0;var r=0,i=e.suspendedLanes,o=e.pingedLanes,s=n&268435455;if(s!==0){var a=s&~i;a!==0?r=oi(a):(o&=s,o!==0&&(r=oi(o)))}else s=n&~i,s!==0?r=oi(s):o!==0&&(r=oi(o));if(r===0)return 0;if(t!==0&&t!==r&&!(t&i)&&(i=r&-r,o=t&-t,i>=o||i===16&&(o&4194240)!==0))return t;if(r&4&&(r|=n&16),t=e.entangledLanes,t!==0)for(e=e.entanglements,t&=r;0<t;)n=31-Ot(t),i=1<<n,r|=e[n],t&=~i;return r}function pg(e,t){switch(e){case 1:case 2:case 4:return t+250;case 8:case 16:case 32:case 64:case 128:case 256:case 512:case 1024:case 2048:case 4096:case 8192:case 16384:case 32768:case 65536:case 131072:case 262144:case 524288:case 1048576:case 2097152:return t+5e3;case 4194304:case 8388608:case 16777216:case 33554432:case 67108864:return-1;case 134217728:case 268435456:case 536870912:case 1073741824:return-1;default:return-1}}function hg(e,t){for(var n=e.suspendedLanes,r=e.pingedLanes,i=e.expirationTimes,o=e.pendingLanes;0<o;){var s=31-Ot(o),a=1<<s,u=i[s];u===-1?(!(a&n)||a&r)&&(i[s]=pg(a,t)):u<=t&&(e.expiredLanes|=a),o&=~a}}function ea(e){return e=e.pendingLanes&-1073741825,e!==0?e:e&1073741824?1073741824:0}function Af(){var e=Zi;return Zi<<=1,!(Zi&4194240)&&(Zi=64),e}function Js(e){for(var t=[],n=0;31>n;n++)t.push(e);return t}function Ii(e,t,n){e.pendingLanes|=t,t!==536870912&&(e.suspendedLanes=0,e.pingedLanes=0),e=e.eventTimes,t=31-Ot(t),e[t]=n}function mg(e,t){var n=e.pendingLanes&~t;e.pendingLanes=t,e.suspendedLanes=0,e.pingedLanes=0,e.expiredLanes&=t,e.mutableReadLanes&=t,e.entangledLanes&=t,t=e.entanglements;var r=e.eventTimes;for(e=e.expirationTimes;0<n;){var i=31-Ot(n),o=1<<i;t[i]=0,r[i]=-1,e[i]=-1,n&=~o}}function Ga(e,t){var n=e.entangledLanes|=t;for(e=e.entanglements;n;){var r=31-Ot(n),i=1<<r;i&t|e[r]&t&&(e[r]|=t),n&=~i}}var de=0;function Nf(e){return e&=-e,1<e?4<e?e&268435455?16:536870912:4:1}var zf,Ja,Lf,Df,Ff,ta=!1,to=[],_n=null,bn=null,Cn=null,vi=new Map,wi=new Map,vn=[],gg="mousedown mouseup touchcancel touchend touchstart auxclick dblclick pointercancel pointerdown pointerup dragend dragstart drop compositionend compositionstart keydown keypress keyup input textInput copy cut paste click change contextmenu reset submit".split(" ");function ac(e,t){switch(e){case"focusin":case"focusout":_n=null;break;case"dragenter":case"dragleave":bn=null;break;case"mouseover":case"mouseout":Cn=null;break;case"pointerover":case"pointerout":vi.delete(t.pointerId);break;case"gotpointercapture":case"lostpointercapture":wi.delete(t.pointerId)}}function Wr(e,t,n,r,i,o){return e===null||e.nativeEvent!==o?(e={blockedOn:t,domEventName:n,eventSystemFlags:r,nativeEvent:o,targetContainers:[i]},t!==null&&(t=Ui(t),t!==null&&Ja(t)),e):(e.eventSystemFlags|=r,t=e.targetContainers,i!==null&&t.indexOf(i)===-1&&t.push(i),e)}function yg(e,t,n,r,i){switch(t){case"focusin":return _n=Wr(_n,e,t,n,r,i),!0;case"dragenter":return bn=Wr(bn,e,t,n,r,i),!0;case"mouseover":return Cn=Wr(Cn,e,t,n,r,i),!0;case"pointerover":var o=i.pointerId;return vi.set(o,Wr(vi.get(o)||null,e,t,n,r,i)),!0;case"gotpointercapture":return o=i.pointerId,wi.set(o,Wr(wi.get(o)||null,e,t,n,r,i)),!0}return!1}function If(e){var t=Un(e.target);if(t!==null){var n=tr(t);if(n!==null){if(t=n.tag,t===13){if(t=Cf(n),t!==null){e.blockedOn=t,Ff(e.priority,function(){Lf(n)});return}}else if(t===3&&n.stateNode.current.memoizedState.isDehydrated){e.blockedOn=n.tag===3?n.stateNode.containerInfo:null;return}}}e.blockedOn=null}function jo(e){if(e.blockedOn!==null)return!1;for(var t=e.targetContainers;0<t.length;){var n=na(e.domEventName,e.eventSystemFlags,t[0],e.nativeEvent);if(n===null){n=e.nativeEvent;var r=new n.constructor(n.type,n);Gl=r,n.target.dispatchEvent(r),Gl=null}else return t=Ui(n),t!==null&&Ja(t),e.blockedOn=n,!1;t.shift()}return!0}function uc(e,t,n){jo(e)&&n.delete(t)}function xg(){ta=!1,_n!==null&&jo(_n)&&(_n=null),bn!==null&&jo(bn)&&(bn=null),Cn!==null&&jo(Cn)&&(Cn=null),vi.forEach(uc),wi.forEach(uc)}function Hr(e,t){e.blockedOn===t&&(e.blockedOn=null,ta||(ta=!0,ct.unstable_scheduleCallback(ct.unstable_NormalPriority,xg)))}function ki(e){function t(i){return Hr(i,e)}if(0<to.length){Hr(to[0],e);for(var n=1;n<to.length;n++){var r=to[n];r.blockedOn===e&&(r.blockedOn=null)}}for(_n!==null&&Hr(_n,e),bn!==null&&Hr(bn,e),Cn!==null&&Hr(Cn,e),vi.forEach(t),wi.forEach(t),n=0;n<vn.length;n++)r=vn[n],r.blockedOn===e&&(r.blockedOn=null);for(;0<vn.length&&(n=vn[0],n.blockedOn===null);)If(n),n.blockedOn===null&&vn.shift()}var Er=on.ReactCurrentBatchConfig,Qo=!0;function vg(e,t,n,r){var i=de,o=Er.transition;Er.transition=null;try{de=1,qa(e,t,n,r)}finally{de=i,Er.transition=o}}function wg(e,t,n,r){var i=de,o=Er.transition;Er.transition=null;try{de=4,qa(e,t,n,r)}finally{de=i,Er.transition=o}}function qa(e,t,n,r){if(Qo){var i=na(e,t,n,r);if(i===null)ll(e,t,r,Yo,n),ac(e,r);else if(yg(i,e,t,n,r))r.stopPropagation();else if(ac(e,r),t&4&&-1<gg.indexOf(e)){for(;i!==null;){var o=Ui(i);if(o!==null&&zf(o),o=na(e,t,n,r),o===null&&ll(e,t,r,Yo,n),o===i)break;i=o}i!==null&&r.stopPropagation()}else ll(e,t,r,null,n)}}var Yo=null;function na(e,t,n,r){if(Yo=null,e=Ka(r),e=Un(e),e!==null)if(t=tr(e),t===null)e=null;else if(n=t.tag,n===13){if(e=Cf(t),e!==null)return e;e=null}else if(n===3){if(t.stateNode.current.memoizedState.isDehydrated)return t.tag===3?t.stateNode.containerInfo:null;e=null}else t!==e&&(e=null);return Yo=e,null}function $f(e){switch(e){case"cancel":case"click":case"close":case"contextmenu":case"copy":case"cut":case"auxclick":case"dblclick":case"dragend":case"dragstart":case"drop":case"focusin":case"focusout":case"input":case"invalid":case"keydown":case"keypress":case"keyup":case"mousedown":case"mouseup":case"paste":case"pause":case"play":case"pointercancel":case"pointerdown":case"pointerup":case"ratechange":case"reset":case"resize":case"seeked":case"submit":case"touchcancel":case"touchend":case"touchstart":case"volumechange":case"change":case"selectionchange":case"textInput":case"compositionstart":case"compositionend":case"compositionupdate":case"beforeblur":case"afterblur":case"beforeinput":case"blur":case"fullscreenchange":case"focus":case"hashchange":case"popstate":case"select":case"selectstart":return 1;case"drag":case"dragenter":case"dragexit":case"dragleave":case"dragover":case"mousemove":case"mouseout":case"mouseover":case"pointermove":case"pointerout":case"pointerover":case"scroll":case"toggle":case"touchmove":case"wheel":case"mouseenter":case"mouseleave":case"pointerenter":case"pointerleave":return 4;case"message":switch(lg()){case Xa:return 1;case Rf:return 4;case Wo:case ag:return 16;case Mf:return 536870912;default:return 16}default:return 16}}var Sn=null,Za=null,Eo=null;function Uf(){if(Eo)return Eo;var e,t=Za,n=t.length,r,i="value"in Sn?Sn.value:Sn.textContent,o=i.length;for(e=0;e<n&&t[e]===i[e];e++);var s=n-e;for(r=1;r<=s&&t[n-r]===i[o-r];r++);return Eo=i.slice(e,1<r?1-r:void 0)}function _o(e){var t=e.keyCode;return"charCode"in e?(e=e.charCode,e===0&&t===13&&(e=13)):e=t,e===10&&(e=13),32<=e||e===13?e:0}function no(){return!0}function cc(){return!1}function ft(e){function t(n,r,i,o,s){this._reactName=n,this._targetInst=i,this.type=r,this.nativeEvent=o,this.target=s,this.currentTarget=null;for(var a in e)e.hasOwnProperty(a)&&(n=e[a],this[a]=n?n(o):o[a]);return this.isDefaultPrevented=(o.defaultPrevented!=null?o.defaultPrevented:o.returnValue===!1)?no:cc,this.isPropagationStopped=cc,this}return Se(t.prototype,{preventDefault:function(){this.defaultPrevented=!0;var n=this.nativeEvent;n&&(n.preventDefault?n.preventDefault():typeof n.returnValue!="unknown"&&(n.returnValue=!1),this.isDefaultPrevented=no)},stopPropagation:function(){var n=this.nativeEvent;n&&(n.stopPropagation?n.stopPropagation():typeof n.cancelBubble!="unknown"&&(n.cancelBubble=!0),this.isPropagationStopped=no)},persist:function(){},isPersistent:no}),t}var Fr={eventPhase:0,bubbles:0,cancelable:0,timeStamp:function(e){return e.timeStamp||Date.now()},defaultPrevented:0,isTrusted:0},eu=ft(Fr),$i=Se({},Fr,{view:0,detail:0}),kg=ft($i),qs,Zs,Qr,ks=Se({},$i,{screenX:0,screenY:0,clientX:0,clientY:0,pageX:0,pageY:0,ctrlKey:0,shiftKey:0,altKey:0,metaKey:0,getModifierState:tu,button:0,buttons:0,relatedTarget:function(e){return e.relatedTarget===void 0?e.fromElement===e.srcElement?e.toElement:e.fromElement:e.relatedTarget},movementX:function(e){return"movementX"in e?e.movementX:(e!==Qr&&(Qr&&e.type==="mousemove"?(qs=e.screenX-Qr.screenX,Zs=e.screenY-Qr.screenY):Zs=qs=0,Qr=e),qs)},movementY:function(e){return"movementY"in e?e.movementY:Zs}}),dc=ft(ks),Sg=Se({},ks,{dataTransfer:0}),jg=ft(Sg),Eg=Se({},$i,{relatedTarget:0}),el=ft(Eg),_g=Se({},Fr,{animationName:0,elapsedTime:0,pseudoElement:0}),bg=ft(_g),Cg=Se({},Fr,{clipboardData:function(e){return"clipboardData"in e?e.clipboardData:window.clipboardData}}),Tg=ft(Cg),Pg=Se({},Fr,{data:0}),fc=ft(Pg),Og={Esc:"Escape",Spacebar:" ",Left:"ArrowLeft",Up:"ArrowUp",Right:"ArrowRight",Down:"ArrowDown",Del:"Delete",Win:"OS",Menu:"ContextMenu",Apps:"ContextMenu",Scroll:"ScrollLock",MozPrintableKey:"Unidentified"},Rg={8:"Backspace",9:"Tab",12:"Clear",13:"Enter",16:"Shift",17:"Control",18:"Alt",19:"Pause",20:"CapsLock",27:"Escape",32:" ",33:"PageUp",34:"PageDown",35:"End",36:"Home",37:"ArrowLeft",38:"ArrowUp",39:"ArrowRight",40:"ArrowDown",45:"Insert",46:"Delete",112:"F1",113:"F2",114:"F3",115:"F4",116:"F5",117:"F6",118:"F7",119:"F8",120:"F9",121:"F10",122:"F11",123:"F12",144:"NumLock",145:"ScrollLock",224:"Meta"},Mg={Alt:"altKey",Control:"ctrlKey",Meta:"metaKey",Shift:"shiftKey"};function Ag(e){var t=this.nativeEvent;return t.getModifierState?t.getModifierState(e):(e=Mg[e])?!!t[e]:!1}function tu(){return Ag}var Ng=Se({},$i,{key:function(e){if(e.key){var t=Og[e.key]||e.key;if(t!=="Unidentified")return t}return e.type==="keypress"?(e=_o(e),e===13?"Enter":String.fromCharCode(e)):e.type==="keydown"||e.type==="keyup"?Rg[e.keyCode]||"Unidentified":""},code:0,location:0,ctrlKey:0,shiftKey:0,altKey:0,metaKey:0,repeat:0,locale:0,getModifierState:tu,charCode:function(e){return e.type==="keypress"?_o(e):0},keyCode:function(e){return e.type==="keydown"||e.type==="keyup"?e.keyCode:0},which:function(e){return e.type==="keypress"?_o(e):e.type==="keydown"||e.type==="keyup"?e.keyCode:0}}),zg=ft(Ng),Lg=Se({},ks,{pointerId:0,width:0,height:0,pressure:0,tangentialPressure:0,tiltX:0,tiltY:0,twist:0,pointerType:0,isPrimary:0}),pc=ft(Lg),Dg=Se({},$i,{touches:0,targetTouches:0,changedTouches:0,altKey:0,metaKey:0,ctrlKey:0,shiftKey:0,getModifierState:tu}),Fg=ft(Dg),Ig=Se({},Fr,{propertyName:0,elapsedTime:0,pseudoElement:0}),$g=ft(Ig),Ug=Se({},ks,{deltaX:function(e){return"deltaX"in e?e.deltaX:"wheelDeltaX"in e?-e.wheelDeltaX:0},deltaY:function(e){return"deltaY"in e?e.deltaY:"wheelDeltaY"in e?-e.wheelDeltaY:"wheelDelta"in e?-e.wheelDelta:0},deltaZ:0,deltaMode:0}),Bg=ft(Ug),Vg=[9,13,27,32],nu=en&&"CompositionEvent"in window,ui=null;en&&"documentMode"in document&&(ui=document.documentMode);var Wg=en&&"TextEvent"in window&&!ui,Bf=en&&(!nu||ui&&8<ui&&11>=ui),hc=" ",mc=!1;function Vf(e,t){switch(e){case"keyup":return Vg.indexOf(t.keyCode)!==-1;case"keydown":return t.keyCode!==229;case"keypress":case"mousedown":case"focusout":return!0;default:return!1}}function Wf(e){return e=e.detail,typeof e=="object"&&"data"in e?e.data:null}var cr=!1;function Hg(e,t){switch(e){case"compositionend":return Wf(t);case"keypress":return t.which!==32?null:(mc=!0,hc);case"textInput":return e=t.data,e===hc&&mc?null:e;default:return null}}function Qg(e,t){if(cr)return e==="compositionend"||!nu&&Vf(e,t)?(e=Uf(),Eo=Za=Sn=null,cr=!1,e):null;switch(e){case"paste":return null;case"keypress":if(!(t.ctrlKey||t.altKey||t.metaKey)||t.ctrlKey&&t.altKey){if(t.char&&1<t.char.length)return t.char;if(t.which)return String.fromCharCode(t.which)}return null;case"compositionend":return Bf&&t.locale!=="ko"?null:t.data;default:return null}}var Yg={color:!0,date:!0,datetime:!0,"datetime-local":!0,email:!0,month:!0,number:!0,password:!0,range:!0,search:!0,tel:!0,text:!0,time:!0,url:!0,week:!0};function gc(e){var t=e&&e.nodeName&&e.nodeName.toLowerCase();return t==="input"?!!Yg[e.type]:t==="textarea"}function Hf(e,t,n,r){Sf(r),t=Ko(t,"onChange"),0<t.length&&(n=new eu("onChange","change",null,n,r),e.push({event:n,listeners:t}))}var ci=null,Si=null;function Kg(e){np(e,0)}function Ss(e){var t=pr(e);if(mf(t))return e}function Xg(e,t){if(e==="change")return t}var Qf=!1;if(en){var tl;if(en){var nl="oninput"in document;if(!nl){var yc=document.createElement("div");yc.setAttribute("oninput","return;"),nl=typeof yc.oninput=="function"}tl=nl}else tl=!1;Qf=tl&&(!document.documentMode||9<document.documentMode)}function xc(){ci&&(ci.detachEvent("onpropertychange",Yf),Si=ci=null)}function Yf(e){if(e.propertyName==="value"&&Ss(Si)){var t=[];Hf(t,Si,e,Ka(e)),bf(Kg,t)}}function Gg(e,t,n){e==="focusin"?(xc(),ci=t,Si=n,ci.attachEvent("onpropertychange",Yf)):e==="focusout"&&xc()}function Jg(e){if(e==="selectionchange"||e==="keyup"||e==="keydown")return Ss(Si)}function qg(e,t){if(e==="click")return Ss(t)}function Zg(e,t){if(e==="input"||e==="change")return Ss(t)}function ey(e,t){return e===t&&(e!==0||1/e===1/t)||e!==e&&t!==t}var Mt=typeof Object.is=="function"?Object.is:ey;function ji(e,t){if(Mt(e,t))return!0;if(typeof e!="object"||e===null||typeof t!="object"||t===null)return!1;var n=Object.keys(e),r=Object.keys(t);if(n.length!==r.length)return!1;for(r=0;r<n.length;r++){var i=n[r];if(!Fl.call(t,i)||!Mt(e[i],t[i]))return!1}return!0}function vc(e){for(;e&&e.firstChild;)e=e.firstChild;return e}function wc(e,t){var n=vc(e);e=0;for(var r;n;){if(n.nodeType===3){if(r=e+n.textContent.length,e<=t&&r>=t)return{node:n,offset:t-e};e=r}e:{for(;n;){if(n.nextSibling){n=n.nextSibling;break e}n=n.parentNode}n=void 0}n=vc(n)}}function Kf(e,t){return e&&t?e===t?!0:e&&e.nodeType===3?!1:t&&t.nodeType===3?Kf(e,t.parentNode):"contains"in e?e.contains(t):e.compareDocumentPosition?!!(e.compareDocumentPosition(t)&16):!1:!1}function Xf(){for(var e=window,t=Uo();t instanceof e.HTMLIFrameElement;){try{var n=typeof t.contentWindow.location.href=="string"}catch{n=!1}if(n)e=t.contentWindow;else break;t=Uo(e.document)}return t}function ru(e){var t=e&&e.nodeName&&e.nodeName.toLowerCase();return t&&(t==="input"&&(e.type==="text"||e.type==="search"||e.type==="tel"||e.type==="url"||e.type==="password")||t==="textarea"||e.contentEditable==="true")}function ty(e){var t=Xf(),n=e.focusedElem,r=e.selectionRange;if(t!==n&&n&&n.ownerDocument&&Kf(n.ownerDocument.documentElement,n)){if(r!==null&&ru(n)){if(t=r.start,e=r.end,e===void 0&&(e=t),"selectionStart"in n)n.selectionStart=t,n.selectionEnd=Math.min(e,n.value.length);else if(e=(t=n.ownerDocument||document)&&t.defaultView||window,e.getSelection){e=e.getSelection();var i=n.textContent.length,o=Math.min(r.start,i);r=r.end===void 0?o:Math.min(r.end,i),!e.extend&&o>r&&(i=r,r=o,o=i),i=wc(n,o);var s=wc(n,r);i&&s&&(e.rangeCount!==1||e.anchorNode!==i.node||e.anchorOffset!==i.offset||e.focusNode!==s.node||e.focusOffset!==s.offset)&&(t=t.createRange(),t.setStart(i.node,i.offset),e.removeAllRanges(),o>r?(e.addRange(t),e.extend(s.node,s.offset)):(t.setEnd(s.node,s.offset),e.addRange(t)))}}for(t=[],e=n;e=e.parentNode;)e.nodeType===1&&t.push({element:e,left:e.scrollLeft,top:e.scrollTop});for(typeof n.focus=="function"&&n.focus(),n=0;n<t.length;n++)e=t[n],e.element.scrollLeft=e.left,e.element.scrollTop=e.top}}var ny=en&&"documentMode"in document&&11>=document.documentMode,dr=null,ra=null,di=null,ia=!1;function kc(e,t,n){var r=n.window===n?n.document:n.nodeType===9?n:n.ownerDocument;ia||dr==null||dr!==Uo(r)||(r=dr,"selectionStart"in r&&ru(r)?r={start:r.selectionStart,end:r.selectionEnd}:(r=(r.ownerDocument&&r.ownerDocument.defaultView||window).getSelection(),r={anchorNode:r.anchorNode,anchorOffset:r.anchorOffset,focusNode:r.focusNode,focusOffset:r.focusOffset}),di&&ji(di,r)||(di=r,r=Ko(ra,"onSelect"),0<r.length&&(t=new eu("onSelect","select",null,t,n),e.push({event:t,listeners:r}),t.target=dr)))}function ro(e,t){var n={};return n[e.toLowerCase()]=t.toLowerCase(),n["Webkit"+e]="webkit"+t,n["Moz"+e]="moz"+t,n}var fr={animationend:ro("Animation","AnimationEnd"),animationiteration:ro("Animation","AnimationIteration"),animationstart:ro("Animation","AnimationStart"),transitionend:ro("Transition","TransitionEnd")},rl={},Gf={};en&&(Gf=document.createElement("div").style,"AnimationEvent"in window||(delete fr.animationend.animation,delete fr.animationiteration.animation,delete fr.animationstart.animation),"TransitionEvent"in window||delete fr.transitionend.transition);function js(e){if(rl[e])return rl[e];if(!fr[e])return e;var t=fr[e],n;for(n in t)if(t.hasOwnProperty(n)&&n in Gf)return rl[e]=t[n];return e}var Jf=js("animationend"),qf=js("animationiteration"),Zf=js("animationstart"),ep=js("transitionend"),tp=new Map,Sc="abort auxClick cancel canPlay canPlayThrough click close contextMenu copy cut drag dragEnd dragEnter dragExit dragLeave dragOver dragStart drop durationChange emptied encrypted ended error gotPointerCapture input invalid keyDown keyPress keyUp load loadedData loadedMetadata loadStart lostPointerCapture mouseDown mouseMove mouseOut mouseOver mouseUp paste pause play playing pointerCancel pointerDown pointerMove pointerOut pointerOver pointerUp progress rateChange reset resize seeked seeking stalled submit suspend timeUpdate touchCancel touchEnd touchStart volumeChange scroll toggle touchMove waiting wheel".split(" ");function zn(e,t){tp.set(e,t),er(t,[e])}for(var il=0;il<Sc.length;il++){var ol=Sc[il],ry=ol.toLowerCase(),iy=ol[0].toUpperCase()+ol.slice(1);zn(ry,"on"+iy)}zn(Jf,"onAnimationEnd");zn(qf,"onAnimationIteration");zn(Zf,"onAnimationStart");zn("dblclick","onDoubleClick");zn("focusin","onFocus");zn("focusout","onBlur");zn(ep,"onTransitionEnd");Tr("onMouseEnter",["mouseout","mouseover"]);Tr("onMouseLeave",["mouseout","mouseover"]);Tr("onPointerEnter",["pointerout","pointerover"]);Tr("onPointerLeave",["pointerout","pointerover"]);er("onChange","change click focusin focusout input keydown keyup selectionchange".split(" "));er("onSelect","focusout contextmenu dragend focusin keydown keyup mousedown mouseup selectionchange".split(" "));er("onBeforeInput",["compositionend","keypress","textInput","paste"]);er("onCompositionEnd","compositionend focusout keydown keypress keyup mousedown".split(" "));er("onCompositionStart","compositionstart focusout keydown keypress keyup mousedown".split(" "));er("onCompositionUpdate","compositionupdate focusout keydown keypress keyup mousedown".split(" "));var si="abort canplay canplaythrough durationchange emptied encrypted ended error loadeddata loadedmetadata loadstart pause play playing progress ratechange resize seeked seeking stalled suspend timeupdate volumechange waiting".split(" "),oy=new Set("cancel close invalid load scroll toggle".split(" ").concat(si));function jc(e,t,n){var r=e.type||"unknown-event";e.currentTarget=n,rg(r,t,void 0,e),e.currentTarget=null}function np(e,t){t=(t&4)!==0;for(var n=0;n<e.length;n++){var r=e[n],i=r.event;r=r.listeners;e:{var o=void 0;if(t)for(var s=r.length-1;0<=s;s--){var a=r[s],u=a.instance,c=a.currentTarget;if(a=a.listener,u!==o&&i.isPropagationStopped())break e;jc(i,a,c),o=u}else for(s=0;s<r.length;s++){if(a=r[s],u=a.instance,c=a.currentTarget,a=a.listener,u!==o&&i.isPropagationStopped())break e;jc(i,a,c),o=u}}}if(Vo)throw e=Zl,Vo=!1,Zl=null,e}function ge(e,t){var n=t[ua];n===void 0&&(n=t[ua]=new Set);var r=e+"__bubble";n.has(r)||(rp(t,e,2,!1),n.add(r))}function sl(e,t,n){var r=0;t&&(r|=4),rp(n,e,r,t)}var io="_reactListening"+Math.random().toString(36).slice(2);function Ei(e){if(!e[io]){e[io]=!0,cf.forEach(function(n){n!=="selectionchange"&&(oy.has(n)||sl(n,!1,e),sl(n,!0,e))});var t=e.nodeType===9?e:e.ownerDocument;t===null||t[io]||(t[io]=!0,sl("selectionchange",!1,t))}}function rp(e,t,n,r){switch($f(t)){case 1:var i=vg;break;case 4:i=wg;break;default:i=qa}n=i.bind(null,t,n,e),i=void 0,!ql||t!=="touchstart"&&t!=="touchmove"&&t!=="wheel"||(i=!0),r?i!==void 0?e.addEventListener(t,n,{capture:!0,passive:i}):e.addEventListener(t,n,!0):i!==void 0?e.addEventListener(t,n,{passive:i}):e.addEventListener(t,n,!1)}function ll(e,t,n,r,i){var o=r;if(!(t&1)&&!(t&2)&&r!==null)e:for(;;){if(r===null)return;var s=r.tag;if(s===3||s===4){var a=r.stateNode.containerInfo;if(a===i||a.nodeType===8&&a.parentNode===i)break;if(s===4)for(s=r.return;s!==null;){var u=s.tag;if((u===3||u===4)&&(u=s.stateNode.containerInfo,u===i||u.nodeType===8&&u.parentNode===i))return;s=s.return}for(;a!==null;){if(s=Un(a),s===null)return;if(u=s.tag,u===5||u===6){r=o=s;continue e}a=a.parentNode}}r=r.return}bf(function(){var c=o,m=Ka(n),f=[];e:{var h=tp.get(e);if(h!==void 0){var w=eu,y=e;switch(e){case"keypress":if(_o(n)===0)break e;case"keydown":case"keyup":w=zg;break;case"focusin":y="focus",w=el;break;case"focusout":y="blur",w=el;break;case"beforeblur":case"afterblur":w=el;break;case"click":if(n.button===2)break e;case"auxclick":case"dblclick":case"mousedown":case"mousemove":case"mouseup":case"mouseout":case"mouseover":case"contextmenu":w=dc;break;case"drag":case"dragend":case"dragenter":case"dragexit":case"dragleave":case"dragover":case"dragstart":case"drop":w=jg;break;case"touchcancel":case"touchend":case"touchmove":case"touchstart":w=Fg;break;case Jf:case qf:case Zf:w=bg;break;case ep:w=$g;break;case"scroll":w=kg;break;case"wheel":w=Bg;break;case"copy":case"cut":case"paste":w=Tg;break;case"gotpointercapture":case"lostpointercapture":case"pointercancel":case"pointerdown":case"pointermove":case"pointerout":case"pointerover":case"pointerup":w=pc}var x=(t&4)!==0,C=!x&&e==="scroll",p=x?h!==null?h+"Capture":null:h;x=[];for(var d=c,g;d!==null;){g=d;var k=g.stateNode;if(g.tag===5&&k!==null&&(g=k,p!==null&&(k=xi(d,p),k!=null&&x.push(_i(d,k,g)))),C)break;d=d.return}0<x.length&&(h=new w(h,y,null,n,m),f.push({event:h,listeners:x}))}}if(!(t&7)){e:{if(h=e==="mouseover"||e==="pointerover",w=e==="mouseout"||e==="pointerout",h&&n!==Gl&&(y=n.relatedTarget||n.fromElement)&&(Un(y)||y[tn]))break e;if((w||h)&&(h=m.window===m?m:(h=m.ownerDocument)?h.defaultView||h.parentWindow:window,w?(y=n.relatedTarget||n.toElement,w=c,y=y?Un(y):null,y!==null&&(C=tr(y),y!==C||y.tag!==5&&y.tag!==6)&&(y=null)):(w=null,y=c),w!==y)){if(x=dc,k="onMouseLeave",p="onMouseEnter",d="mouse",(e==="pointerout"||e==="pointerover")&&(x=pc,k="onPointerLeave",p="onPointerEnter",d="pointer"),C=w==null?h:pr(w),g=y==null?h:pr(y),h=new x(k,d+"leave",w,n,m),h.target=C,h.relatedTarget=g,k=null,Un(m)===c&&(x=new x(p,d+"enter",y,n,m),x.target=g,x.relatedTarget=C,k=x),C=k,w&&y)t:{for(x=w,p=y,d=0,g=x;g;g=ir(g))d++;for(g=0,k=p;k;k=ir(k))g++;for(;0<d-g;)x=ir(x),d--;for(;0<g-d;)p=ir(p),g--;for(;d--;){if(x===p||p!==null&&x===p.alternate)break t;x=ir(x),p=ir(p)}x=null}else x=null;w!==null&&Ec(f,h,w,x,!1),y!==null&&C!==null&&Ec(f,C,y,x,!0)}}e:{if(h=c?pr(c):window,w=h.nodeName&&h.nodeName.toLowerCase(),w==="select"||w==="input"&&h.type==="file")var _=Xg;else if(gc(h))if(Qf)_=Zg;else{_=Jg;var P=Gg}else(w=h.nodeName)&&w.toLowerCase()==="input"&&(h.type==="checkbox"||h.type==="radio")&&(_=qg);if(_&&(_=_(e,c))){Hf(f,_,n,m);break e}P&&P(e,h,c),e==="focusout"&&(P=h._wrapperState)&&P.controlled&&h.type==="number"&&Hl(h,"number",h.value)}switch(P=c?pr(c):window,e){case"focusin":(gc(P)||P.contentEditable==="true")&&(dr=P,ra=c,di=null);break;case"focusout":di=ra=dr=null;break;case"mousedown":ia=!0;break;case"contextmenu":case"mouseup":case"dragend":ia=!1,kc(f,n,m);break;case"selectionchange":if(ny)break;case"keydown":case"keyup":kc(f,n,m)}var b;if(nu)e:{switch(e){case"compositionstart":var N="onCompositionStart";break e;case"compositionend":N="onCompositionEnd";break e;case"compositionupdate":N="onCompositionUpdate";break e}N=void 0}else cr?Vf(e,n)&&(N="onCompositionEnd"):e==="keydown"&&n.keyCode===229&&(N="onCompositionStart");N&&(Bf&&n.locale!=="ko"&&(cr||N!=="onCompositionStart"?N==="onCompositionEnd"&&cr&&(b=Uf()):(Sn=m,Za="value"in Sn?Sn.value:Sn.textContent,cr=!0)),P=Ko(c,N),0<P.length&&(N=new fc(N,e,null,n,m),f.push({event:N,listeners:P}),b?N.data=b:(b=Wf(n),b!==null&&(N.data=b)))),(b=Wg?Hg(e,n):Qg(e,n))&&(c=Ko(c,"onBeforeInput"),0<c.length&&(m=new fc("onBeforeInput","beforeinput",null,n,m),f.push({event:m,listeners:c}),m.data=b))}np(f,t)})}function _i(e,t,n){return{instance:e,listener:t,currentTarget:n}}function Ko(e,t){for(var n=t+"Capture",r=[];e!==null;){var i=e,o=i.stateNode;i.tag===5&&o!==null&&(i=o,o=xi(e,n),o!=null&&r.unshift(_i(e,o,i)),o=xi(e,t),o!=null&&r.push(_i(e,o,i))),e=e.return}return r}function ir(e){if(e===null)return null;do e=e.return;while(e&&e.tag!==5);return e||null}function Ec(e,t,n,r,i){for(var o=t._reactName,s=[];n!==null&&n!==r;){var a=n,u=a.alternate,c=a.stateNode;if(u!==null&&u===r)break;a.tag===5&&c!==null&&(a=c,i?(u=xi(n,o),u!=null&&s.unshift(_i(n,u,a))):i||(u=xi(n,o),u!=null&&s.push(_i(n,u,a)))),n=n.return}s.length!==0&&e.push({event:t,listeners:s})}var sy=/\r\n?/g,ly=/\u0000|\uFFFD/g;function _c(e){return(typeof e=="string"?e:""+e).replace(sy,`
`).replace(ly,"")}function oo(e,t,n){if(t=_c(t),_c(e)!==t&&n)throw Error(R(425))}function Xo(){}var oa=null,sa=null;function la(e,t){return e==="textarea"||e==="noscript"||typeof t.children=="string"||typeof t.children=="number"||typeof t.dangerouslySetInnerHTML=="object"&&t.dangerouslySetInnerHTML!==null&&t.dangerouslySetInnerHTML.__html!=null}var aa=typeof setTimeout=="function"?setTimeout:void 0,ay=typeof clearTimeout=="function"?clearTimeout:void 0,bc=typeof Promise=="function"?Promise:void 0,uy=typeof queueMicrotask=="function"?queueMicrotask:typeof bc<"u"?function(e){return bc.resolve(null).then(e).catch(cy)}:aa;function cy(e){setTimeout(function(){throw e})}function al(e,t){var n=t,r=0;do{var i=n.nextSibling;if(e.removeChild(n),i&&i.nodeType===8)if(n=i.data,n==="/$"){if(r===0){e.removeChild(i),ki(t);return}r--}else n!=="$"&&n!=="$?"&&n!=="$!"||r++;n=i}while(n);ki(t)}function Tn(e){for(;e!=null;e=e.nextSibling){var t=e.nodeType;if(t===1||t===3)break;if(t===8){if(t=e.data,t==="$"||t==="$!"||t==="$?")break;if(t==="/$")return null}}return e}function Cc(e){e=e.previousSibling;for(var t=0;e;){if(e.nodeType===8){var n=e.data;if(n==="$"||n==="$!"||n==="$?"){if(t===0)return e;t--}else n==="/$"&&t++}e=e.previousSibling}return null}var Ir=Math.random().toString(36).slice(2),It="__reactFiber$"+Ir,bi="__reactProps$"+Ir,tn="__reactContainer$"+Ir,ua="__reactEvents$"+Ir,dy="__reactListeners$"+Ir,fy="__reactHandles$"+Ir;function Un(e){var t=e[It];if(t)return t;for(var n=e.parentNode;n;){if(t=n[tn]||n[It]){if(n=t.alternate,t.child!==null||n!==null&&n.child!==null)for(e=Cc(e);e!==null;){if(n=e[It])return n;e=Cc(e)}return t}e=n,n=e.parentNode}return null}function Ui(e){return e=e[It]||e[tn],!e||e.tag!==5&&e.tag!==6&&e.tag!==13&&e.tag!==3?null:e}function pr(e){if(e.tag===5||e.tag===6)return e.stateNode;throw Error(R(33))}function Es(e){return e[bi]||null}var ca=[],hr=-1;function Ln(e){return{current:e}}function ye(e){0>hr||(e.current=ca[hr],ca[hr]=null,hr--)}function he(e,t){hr++,ca[hr]=e.current,e.current=t}var Nn={},Ke=Ln(Nn),nt=Ln(!1),Xn=Nn;function Pr(e,t){var n=e.type.contextTypes;if(!n)return Nn;var r=e.stateNode;if(r&&r.__reactInternalMemoizedUnmaskedChildContext===t)return r.__reactInternalMemoizedMaskedChildContext;var i={},o;for(o in n)i[o]=t[o];return r&&(e=e.stateNode,e.__reactInternalMemoizedUnmaskedChildContext=t,e.__reactInternalMemoizedMaskedChildContext=i),i}function rt(e){return e=e.childContextTypes,e!=null}function Go(){ye(nt),ye(Ke)}function Tc(e,t,n){if(Ke.current!==Nn)throw Error(R(168));he(Ke,t),he(nt,n)}function ip(e,t,n){var r=e.stateNode;if(t=t.childContextTypes,typeof r.getChildContext!="function")return n;r=r.getChildContext();for(var i in r)if(!(i in t))throw Error(R(108,Gm(e)||"Unknown",i));return Se({},n,r)}function Jo(e){return e=(e=e.stateNode)&&e.__reactInternalMemoizedMergedChildContext||Nn,Xn=Ke.current,he(Ke,e),he(nt,nt.current),!0}function Pc(e,t,n){var r=e.stateNode;if(!r)throw Error(R(169));n?(e=ip(e,t,Xn),r.__reactInternalMemoizedMergedChildContext=e,ye(nt),ye(Ke),he(Ke,e)):ye(nt),he(nt,n)}var Xt=null,_s=!1,ul=!1;function op(e){Xt===null?Xt=[e]:Xt.push(e)}function py(e){_s=!0,op(e)}function Dn(){if(!ul&&Xt!==null){ul=!0;var e=0,t=de;try{var n=Xt;for(de=1;e<n.length;e++){var r=n[e];do r=r(!0);while(r!==null)}Xt=null,_s=!1}catch(i){throw Xt!==null&&(Xt=Xt.slice(e+1)),Of(Xa,Dn),i}finally{de=t,ul=!1}}return null}var mr=[],gr=0,qo=null,Zo=0,mt=[],gt=0,Gn=null,Gt=1,Jt="";function In(e,t){mr[gr++]=Zo,mr[gr++]=qo,qo=e,Zo=t}function sp(e,t,n){mt[gt++]=Gt,mt[gt++]=Jt,mt[gt++]=Gn,Gn=e;var r=Gt;e=Jt;var i=32-Ot(r)-1;r&=~(1<<i),n+=1;var o=32-Ot(t)+i;if(30<o){var s=i-i%5;o=(r&(1<<s)-1).toString(32),r>>=s,i-=s,Gt=1<<32-Ot(t)+i|n<<i|r,Jt=o+e}else Gt=1<<o|n<<i|r,Jt=e}function iu(e){e.return!==null&&(In(e,1),sp(e,1,0))}function ou(e){for(;e===qo;)qo=mr[--gr],mr[gr]=null,Zo=mr[--gr],mr[gr]=null;for(;e===Gn;)Gn=mt[--gt],mt[gt]=null,Jt=mt[--gt],mt[gt]=null,Gt=mt[--gt],mt[gt]=null}var at=null,lt=null,ve=!1,Tt=null;function lp(e,t){var n=yt(5,null,null,0);n.elementType="DELETED",n.stateNode=t,n.return=e,t=e.deletions,t===null?(e.deletions=[n],e.flags|=16):t.push(n)}function Oc(e,t){switch(e.tag){case 5:var n=e.type;return t=t.nodeType!==1||n.toLowerCase()!==t.nodeName.toLowerCase()?null:t,t!==null?(e.stateNode=t,at=e,lt=Tn(t.firstChild),!0):!1;case 6:return t=e.pendingProps===""||t.nodeType!==3?null:t,t!==null?(e.stateNode=t,at=e,lt=null,!0):!1;case 13:return t=t.nodeType!==8?null:t,t!==null?(n=Gn!==null?{id:Gt,overflow:Jt}:null,e.memoizedState={dehydrated:t,treeContext:n,retryLane:1073741824},n=yt(18,null,null,0),n.stateNode=t,n.return=e,e.child=n,at=e,lt=null,!0):!1;default:return!1}}function da(e){return(e.mode&1)!==0&&(e.flags&128)===0}function fa(e){if(ve){var t=lt;if(t){var n=t;if(!Oc(e,t)){if(da(e))throw Error(R(418));t=Tn(n.nextSibling);var r=at;t&&Oc(e,t)?lp(r,n):(e.flags=e.flags&-4097|2,ve=!1,at=e)}}else{if(da(e))throw Error(R(418));e.flags=e.flags&-4097|2,ve=!1,at=e}}}function Rc(e){for(e=e.return;e!==null&&e.tag!==5&&e.tag!==3&&e.tag!==13;)e=e.return;at=e}function so(e){if(e!==at)return!1;if(!ve)return Rc(e),ve=!0,!1;var t;if((t=e.tag!==3)&&!(t=e.tag!==5)&&(t=e.type,t=t!=="head"&&t!=="body"&&!la(e.type,e.memoizedProps)),t&&(t=lt)){if(da(e))throw ap(),Error(R(418));for(;t;)lp(e,t),t=Tn(t.nextSibling)}if(Rc(e),e.tag===13){if(e=e.memoizedState,e=e!==null?e.dehydrated:null,!e)throw Error(R(317));e:{for(e=e.nextSibling,t=0;e;){if(e.nodeType===8){var n=e.data;if(n==="/$"){if(t===0){lt=Tn(e.nextSibling);break e}t--}else n!=="$"&&n!=="$!"&&n!=="$?"||t++}e=e.nextSibling}lt=null}}else lt=at?Tn(e.stateNode.nextSibling):null;return!0}function ap(){for(var e=lt;e;)e=Tn(e.nextSibling)}function Or(){lt=at=null,ve=!1}function su(e){Tt===null?Tt=[e]:Tt.push(e)}var hy=on.ReactCurrentBatchConfig;function _t(e,t){if(e&&e.defaultProps){t=Se({},t),e=e.defaultProps;for(var n in e)t[n]===void 0&&(t[n]=e[n]);return t}return t}var es=Ln(null),ts=null,yr=null,lu=null;function au(){lu=yr=ts=null}function uu(e){var t=es.current;ye(es),e._currentValue=t}function pa(e,t,n){for(;e!==null;){var r=e.alternate;if((e.childLanes&t)!==t?(e.childLanes|=t,r!==null&&(r.childLanes|=t)):r!==null&&(r.childLanes&t)!==t&&(r.childLanes|=t),e===n)break;e=e.return}}function _r(e,t){ts=e,lu=yr=null,e=e.dependencies,e!==null&&e.firstContext!==null&&(e.lanes&t&&(tt=!0),e.firstContext=null)}function wt(e){var t=e._currentValue;if(lu!==e)if(e={context:e,memoizedValue:t,next:null},yr===null){if(ts===null)throw Error(R(308));yr=e,ts.dependencies={lanes:0,firstContext:e}}else yr=yr.next=e;return t}var Bn=null;function cu(e){Bn===null?Bn=[e]:Bn.push(e)}function up(e,t,n,r){var i=t.interleaved;return i===null?(n.next=n,cu(t)):(n.next=i.next,i.next=n),t.interleaved=n,nn(e,r)}function nn(e,t){e.lanes|=t;var n=e.alternate;for(n!==null&&(n.lanes|=t),n=e,e=e.return;e!==null;)e.childLanes|=t,n=e.alternate,n!==null&&(n.childLanes|=t),n=e,e=e.return;return n.tag===3?n.stateNode:null}var xn=!1;function du(e){e.updateQueue={baseState:e.memoizedState,firstBaseUpdate:null,lastBaseUpdate:null,shared:{pending:null,interleaved:null,lanes:0},effects:null}}function cp(e,t){e=e.updateQueue,t.updateQueue===e&&(t.updateQueue={baseState:e.baseState,firstBaseUpdate:e.firstBaseUpdate,lastBaseUpdate:e.lastBaseUpdate,shared:e.shared,effects:e.effects})}function qt(e,t){return{eventTime:e,lane:t,tag:0,payload:null,callback:null,next:null}}function Pn(e,t,n){var r=e.updateQueue;if(r===null)return null;if(r=r.shared,oe&2){var i=r.pending;return i===null?t.next=t:(t.next=i.next,i.next=t),r.pending=t,nn(e,n)}return i=r.interleaved,i===null?(t.next=t,cu(r)):(t.next=i.next,i.next=t),r.interleaved=t,nn(e,n)}function bo(e,t,n){if(t=t.updateQueue,t!==null&&(t=t.shared,(n&4194240)!==0)){var r=t.lanes;r&=e.pendingLanes,n|=r,t.lanes=n,Ga(e,n)}}function Mc(e,t){var n=e.updateQueue,r=e.alternate;if(r!==null&&(r=r.updateQueue,n===r)){var i=null,o=null;if(n=n.firstBaseUpdate,n!==null){do{var s={eventTime:n.eventTime,lane:n.lane,tag:n.tag,payload:n.payload,callback:n.callback,next:null};o===null?i=o=s:o=o.next=s,n=n.next}while(n!==null);o===null?i=o=t:o=o.next=t}else i=o=t;n={baseState:r.baseState,firstBaseUpdate:i,lastBaseUpdate:o,shared:r.shared,effects:r.effects},e.updateQueue=n;return}e=n.lastBaseUpdate,e===null?n.firstBaseUpdate=t:e.next=t,n.lastBaseUpdate=t}function ns(e,t,n,r){var i=e.updateQueue;xn=!1;var o=i.firstBaseUpdate,s=i.lastBaseUpdate,a=i.shared.pending;if(a!==null){i.shared.pending=null;var u=a,c=u.next;u.next=null,s===null?o=c:s.next=c,s=u;var m=e.alternate;m!==null&&(m=m.updateQueue,a=m.lastBaseUpdate,a!==s&&(a===null?m.firstBaseUpdate=c:a.next=c,m.lastBaseUpdate=u))}if(o!==null){var f=i.baseState;s=0,m=c=u=null,a=o;do{var h=a.lane,w=a.eventTime;if((r&h)===h){m!==null&&(m=m.next={eventTime:w,lane:0,tag:a.tag,payload:a.payload,callback:a.callback,next:null});e:{var y=e,x=a;switch(h=t,w=n,x.tag){case 1:if(y=x.payload,typeof y=="function"){f=y.call(w,f,h);break e}f=y;break e;case 3:y.flags=y.flags&-65537|128;case 0:if(y=x.payload,h=typeof y=="function"?y.call(w,f,h):y,h==null)break e;f=Se({},f,h);break e;case 2:xn=!0}}a.callback!==null&&a.lane!==0&&(e.flags|=64,h=i.effects,h===null?i.effects=[a]:h.push(a))}else w={eventTime:w,lane:h,tag:a.tag,payload:a.payload,callback:a.callback,next:null},m===null?(c=m=w,u=f):m=m.next=w,s|=h;if(a=a.next,a===null){if(a=i.shared.pending,a===null)break;h=a,a=h.next,h.next=null,i.lastBaseUpdate=h,i.shared.pending=null}}while(!0);if(m===null&&(u=f),i.baseState=u,i.firstBaseUpdate=c,i.lastBaseUpdate=m,t=i.shared.interleaved,t!==null){i=t;do s|=i.lane,i=i.next;while(i!==t)}else o===null&&(i.shared.lanes=0);qn|=s,e.lanes=s,e.memoizedState=f}}function Ac(e,t,n){if(e=t.effects,t.effects=null,e!==null)for(t=0;t<e.length;t++){var r=e[t],i=r.callback;if(i!==null){if(r.callback=null,r=n,typeof i!="function")throw Error(R(191,i));i.call(r)}}}var dp=new uf.Component().refs;function ha(e,t,n,r){t=e.memoizedState,n=n(r,t),n=n==null?t:Se({},t,n),e.memoizedState=n,e.lanes===0&&(e.updateQueue.baseState=n)}var bs={isMounted:function(e){return(e=e._reactInternals)?tr(e)===e:!1},enqueueSetState:function(e,t,n){e=e._reactInternals;var r=Je(),i=Rn(e),o=qt(r,i);o.payload=t,n!=null&&(o.callback=n),t=Pn(e,o,i),t!==null&&(Rt(t,e,i,r),bo(t,e,i))},enqueueReplaceState:function(e,t,n){e=e._reactInternals;var r=Je(),i=Rn(e),o=qt(r,i);o.tag=1,o.payload=t,n!=null&&(o.callback=n),t=Pn(e,o,i),t!==null&&(Rt(t,e,i,r),bo(t,e,i))},enqueueForceUpdate:function(e,t){e=e._reactInternals;var n=Je(),r=Rn(e),i=qt(n,r);i.tag=2,t!=null&&(i.callback=t),t=Pn(e,i,r),t!==null&&(Rt(t,e,r,n),bo(t,e,r))}};function Nc(e,t,n,r,i,o,s){return e=e.stateNode,typeof e.shouldComponentUpdate=="function"?e.shouldComponentUpdate(r,o,s):t.prototype&&t.prototype.isPureReactComponent?!ji(n,r)||!ji(i,o):!0}function fp(e,t,n){var r=!1,i=Nn,o=t.contextType;return typeof o=="object"&&o!==null?o=wt(o):(i=rt(t)?Xn:Ke.current,r=t.contextTypes,o=(r=r!=null)?Pr(e,i):Nn),t=new t(n,o),e.memoizedState=t.state!==null&&t.state!==void 0?t.state:null,t.updater=bs,e.stateNode=t,t._reactInternals=e,r&&(e=e.stateNode,e.__reactInternalMemoizedUnmaskedChildContext=i,e.__reactInternalMemoizedMaskedChildContext=o),t}function zc(e,t,n,r){e=t.state,typeof t.componentWillReceiveProps=="function"&&t.componentWillReceiveProps(n,r),typeof t.UNSAFE_componentWillReceiveProps=="function"&&t.UNSAFE_componentWillReceiveProps(n,r),t.state!==e&&bs.enqueueReplaceState(t,t.state,null)}function ma(e,t,n,r){var i=e.stateNode;i.props=n,i.state=e.memoizedState,i.refs=dp,du(e);var o=t.contextType;typeof o=="object"&&o!==null?i.context=wt(o):(o=rt(t)?Xn:Ke.current,i.context=Pr(e,o)),i.state=e.memoizedState,o=t.getDerivedStateFromProps,typeof o=="function"&&(ha(e,t,o,n),i.state=e.memoizedState),typeof t.getDerivedStateFromProps=="function"||typeof i.getSnapshotBeforeUpdate=="function"||typeof i.UNSAFE_componentWillMount!="function"&&typeof i.componentWillMount!="function"||(t=i.state,typeof i.componentWillMount=="function"&&i.componentWillMount(),typeof i.UNSAFE_componentWillMount=="function"&&i.UNSAFE_componentWillMount(),t!==i.state&&bs.enqueueReplaceState(i,i.state,null),ns(e,n,i,r),i.state=e.memoizedState),typeof i.componentDidMount=="function"&&(e.flags|=4194308)}function Yr(e,t,n){if(e=n.ref,e!==null&&typeof e!="function"&&typeof e!="object"){if(n._owner){if(n=n._owner,n){if(n.tag!==1)throw Error(R(309));var r=n.stateNode}if(!r)throw Error(R(147,e));var i=r,o=""+e;return t!==null&&t.ref!==null&&typeof t.ref=="function"&&t.ref._stringRef===o?t.ref:(t=function(s){var a=i.refs;a===dp&&(a=i.refs={}),s===null?delete a[o]:a[o]=s},t._stringRef=o,t)}if(typeof e!="string")throw Error(R(284));if(!n._owner)throw Error(R(290,e))}return e}function lo(e,t){throw e=Object.prototype.toString.call(t),Error(R(31,e==="[object Object]"?"object with keys {"+Object.keys(t).join(", ")+"}":e))}function Lc(e){var t=e._init;return t(e._payload)}function pp(e){function t(p,d){if(e){var g=p.deletions;g===null?(p.deletions=[d],p.flags|=16):g.push(d)}}function n(p,d){if(!e)return null;for(;d!==null;)t(p,d),d=d.sibling;return null}function r(p,d){for(p=new Map;d!==null;)d.key!==null?p.set(d.key,d):p.set(d.index,d),d=d.sibling;return p}function i(p,d){return p=Mn(p,d),p.index=0,p.sibling=null,p}function o(p,d,g){return p.index=g,e?(g=p.alternate,g!==null?(g=g.index,g<d?(p.flags|=2,d):g):(p.flags|=2,d)):(p.flags|=1048576,d)}function s(p){return e&&p.alternate===null&&(p.flags|=2),p}function a(p,d,g,k){return d===null||d.tag!==6?(d=gl(g,p.mode,k),d.return=p,d):(d=i(d,g),d.return=p,d)}function u(p,d,g,k){var _=g.type;return _===ur?m(p,d,g.props.children,k,g.key):d!==null&&(d.elementType===_||typeof _=="object"&&_!==null&&_.$$typeof===yn&&Lc(_)===d.type)?(k=i(d,g.props),k.ref=Yr(p,d,g),k.return=p,k):(k=Mo(g.type,g.key,g.props,null,p.mode,k),k.ref=Yr(p,d,g),k.return=p,k)}function c(p,d,g,k){return d===null||d.tag!==4||d.stateNode.containerInfo!==g.containerInfo||d.stateNode.implementation!==g.implementation?(d=yl(g,p.mode,k),d.return=p,d):(d=i(d,g.children||[]),d.return=p,d)}function m(p,d,g,k,_){return d===null||d.tag!==7?(d=Kn(g,p.mode,k,_),d.return=p,d):(d=i(d,g),d.return=p,d)}function f(p,d,g){if(typeof d=="string"&&d!==""||typeof d=="number")return d=gl(""+d,p.mode,g),d.return=p,d;if(typeof d=="object"&&d!==null){switch(d.$$typeof){case Gi:return g=Mo(d.type,d.key,d.props,null,p.mode,g),g.ref=Yr(p,null,d),g.return=p,g;case ar:return d=yl(d,p.mode,g),d.return=p,d;case yn:var k=d._init;return f(p,k(d._payload),g)}if(ii(d)||Br(d))return d=Kn(d,p.mode,g,null),d.return=p,d;lo(p,d)}return null}function h(p,d,g,k){var _=d!==null?d.key:null;if(typeof g=="string"&&g!==""||typeof g=="number")return _!==null?null:a(p,d,""+g,k);if(typeof g=="object"&&g!==null){switch(g.$$typeof){case Gi:return g.key===_?u(p,d,g,k):null;case ar:return g.key===_?c(p,d,g,k):null;case yn:return _=g._init,h(p,d,_(g._payload),k)}if(ii(g)||Br(g))return _!==null?null:m(p,d,g,k,null);lo(p,g)}return null}function w(p,d,g,k,_){if(typeof k=="string"&&k!==""||typeof k=="number")return p=p.get(g)||null,a(d,p,""+k,_);if(typeof k=="object"&&k!==null){switch(k.$$typeof){case Gi:return p=p.get(k.key===null?g:k.key)||null,u(d,p,k,_);case ar:return p=p.get(k.key===null?g:k.key)||null,c(d,p,k,_);case yn:var P=k._init;return w(p,d,g,P(k._payload),_)}if(ii(k)||Br(k))return p=p.get(g)||null,m(d,p,k,_,null);lo(d,k)}return null}function y(p,d,g,k){for(var _=null,P=null,b=d,N=d=0,O=null;b!==null&&N<g.length;N++){b.index>N?(O=b,b=null):O=b.sibling;var z=h(p,b,g[N],k);if(z===null){b===null&&(b=O);break}e&&b&&z.alternate===null&&t(p,b),d=o(z,d,N),P===null?_=z:P.sibling=z,P=z,b=O}if(N===g.length)return n(p,b),ve&&In(p,N),_;if(b===null){for(;N<g.length;N++)b=f(p,g[N],k),b!==null&&(d=o(b,d,N),P===null?_=b:P.sibling=b,P=b);return ve&&In(p,N),_}for(b=r(p,b);N<g.length;N++)O=w(b,p,N,g[N],k),O!==null&&(e&&O.alternate!==null&&b.delete(O.key===null?N:O.key),d=o(O,d,N),P===null?_=O:P.sibling=O,P=O);return e&&b.forEach(function(W){return t(p,W)}),ve&&In(p,N),_}function x(p,d,g,k){var _=Br(g);if(typeof _!="function")throw Error(R(150));if(g=_.call(g),g==null)throw Error(R(151));for(var P=_=null,b=d,N=d=0,O=null,z=g.next();b!==null&&!z.done;N++,z=g.next()){b.index>N?(O=b,b=null):O=b.sibling;var W=h(p,b,z.value,k);if(W===null){b===null&&(b=O);break}e&&b&&W.alternate===null&&t(p,b),d=o(W,d,N),P===null?_=W:P.sibling=W,P=W,b=O}if(z.done)return n(p,b),ve&&In(p,N),_;if(b===null){for(;!z.done;N++,z=g.next())z=f(p,z.value,k),z!==null&&(d=o(z,d,N),P===null?_=z:P.sibling=z,P=z);return ve&&In(p,N),_}for(b=r(p,b);!z.done;N++,z=g.next())z=w(b,p,N,z.value,k),z!==null&&(e&&z.alternate!==null&&b.delete(z.key===null?N:z.key),d=o(z,d,N),P===null?_=z:P.sibling=z,P=z);return e&&b.forEach(function($){return t(p,$)}),ve&&In(p,N),_}function C(p,d,g,k){if(typeof g=="object"&&g!==null&&g.type===ur&&g.key===null&&(g=g.props.children),typeof g=="object"&&g!==null){switch(g.$$typeof){case Gi:e:{for(var _=g.key,P=d;P!==null;){if(P.key===_){if(_=g.type,_===ur){if(P.tag===7){n(p,P.sibling),d=i(P,g.props.children),d.return=p,p=d;break e}}else if(P.elementType===_||typeof _=="object"&&_!==null&&_.$$typeof===yn&&Lc(_)===P.type){n(p,P.sibling),d=i(P,g.props),d.ref=Yr(p,P,g),d.return=p,p=d;break e}n(p,P);break}else t(p,P);P=P.sibling}g.type===ur?(d=Kn(g.props.children,p.mode,k,g.key),d.return=p,p=d):(k=Mo(g.type,g.key,g.props,null,p.mode,k),k.ref=Yr(p,d,g),k.return=p,p=k)}return s(p);case ar:e:{for(P=g.key;d!==null;){if(d.key===P)if(d.tag===4&&d.stateNode.containerInfo===g.containerInfo&&d.stateNode.implementation===g.implementation){n(p,d.sibling),d=i(d,g.children||[]),d.return=p,p=d;break e}else{n(p,d);break}else t(p,d);d=d.sibling}d=yl(g,p.mode,k),d.return=p,p=d}return s(p);case yn:return P=g._init,C(p,d,P(g._payload),k)}if(ii(g))return y(p,d,g,k);if(Br(g))return x(p,d,g,k);lo(p,g)}return typeof g=="string"&&g!==""||typeof g=="number"?(g=""+g,d!==null&&d.tag===6?(n(p,d.sibling),d=i(d,g),d.return=p,p=d):(n(p,d),d=gl(g,p.mode,k),d.return=p,p=d),s(p)):n(p,d)}return C}var Rr=pp(!0),hp=pp(!1),Bi={},Vt=Ln(Bi),Ci=Ln(Bi),Ti=Ln(Bi);function Vn(e){if(e===Bi)throw Error(R(174));return e}function fu(e,t){switch(he(Ti,t),he(Ci,e),he(Vt,Bi),e=t.nodeType,e){case 9:case 11:t=(t=t.documentElement)?t.namespaceURI:Yl(null,"");break;default:e=e===8?t.parentNode:t,t=e.namespaceURI||null,e=e.tagName,t=Yl(t,e)}ye(Vt),he(Vt,t)}function Mr(){ye(Vt),ye(Ci),ye(Ti)}function mp(e){Vn(Ti.current);var t=Vn(Vt.current),n=Yl(t,e.type);t!==n&&(he(Ci,e),he(Vt,n))}function pu(e){Ci.current===e&&(ye(Vt),ye(Ci))}var we=Ln(0);function rs(e){for(var t=e;t!==null;){if(t.tag===13){var n=t.memoizedState;if(n!==null&&(n=n.dehydrated,n===null||n.data==="$?"||n.data==="$!"))return t}else if(t.tag===19&&t.memoizedProps.revealOrder!==void 0){if(t.flags&128)return t}else if(t.child!==null){t.child.return=t,t=t.child;continue}if(t===e)break;for(;t.sibling===null;){if(t.return===null||t.return===e)return null;t=t.return}t.sibling.return=t.return,t=t.sibling}return null}var cl=[];function hu(){for(var e=0;e<cl.length;e++)cl[e]._workInProgressVersionPrimary=null;cl.length=0}var Co=on.ReactCurrentDispatcher,dl=on.ReactCurrentBatchConfig,Jn=0,ke=null,Re=null,ze=null,is=!1,fi=!1,Pi=0,my=0;function We(){throw Error(R(321))}function mu(e,t){if(t===null)return!1;for(var n=0;n<t.length&&n<e.length;n++)if(!Mt(e[n],t[n]))return!1;return!0}function gu(e,t,n,r,i,o){if(Jn=o,ke=t,t.memoizedState=null,t.updateQueue=null,t.lanes=0,Co.current=e===null||e.memoizedState===null?vy:wy,e=n(r,i),fi){o=0;do{if(fi=!1,Pi=0,25<=o)throw Error(R(301));o+=1,ze=Re=null,t.updateQueue=null,Co.current=ky,e=n(r,i)}while(fi)}if(Co.current=os,t=Re!==null&&Re.next!==null,Jn=0,ze=Re=ke=null,is=!1,t)throw Error(R(300));return e}function yu(){var e=Pi!==0;return Pi=0,e}function Lt(){var e={memoizedState:null,baseState:null,baseQueue:null,queue:null,next:null};return ze===null?ke.memoizedState=ze=e:ze=ze.next=e,ze}function kt(){if(Re===null){var e=ke.alternate;e=e!==null?e.memoizedState:null}else e=Re.next;var t=ze===null?ke.memoizedState:ze.next;if(t!==null)ze=t,Re=e;else{if(e===null)throw Error(R(310));Re=e,e={memoizedState:Re.memoizedState,baseState:Re.baseState,baseQueue:Re.baseQueue,queue:Re.queue,next:null},ze===null?ke.memoizedState=ze=e:ze=ze.next=e}return ze}function Oi(e,t){return typeof t=="function"?t(e):t}function fl(e){var t=kt(),n=t.queue;if(n===null)throw Error(R(311));n.lastRenderedReducer=e;var r=Re,i=r.baseQueue,o=n.pending;if(o!==null){if(i!==null){var s=i.next;i.next=o.next,o.next=s}r.baseQueue=i=o,n.pending=null}if(i!==null){o=i.next,r=r.baseState;var a=s=null,u=null,c=o;do{var m=c.lane;if((Jn&m)===m)u!==null&&(u=u.next={lane:0,action:c.action,hasEagerState:c.hasEagerState,eagerState:c.eagerState,next:null}),r=c.hasEagerState?c.eagerState:e(r,c.action);else{var f={lane:m,action:c.action,hasEagerState:c.hasEagerState,eagerState:c.eagerState,next:null};u===null?(a=u=f,s=r):u=u.next=f,ke.lanes|=m,qn|=m}c=c.next}while(c!==null&&c!==o);u===null?s=r:u.next=a,Mt(r,t.memoizedState)||(tt=!0),t.memoizedState=r,t.baseState=s,t.baseQueue=u,n.lastRenderedState=r}if(e=n.interleaved,e!==null){i=e;do o=i.lane,ke.lanes|=o,qn|=o,i=i.next;while(i!==e)}else i===null&&(n.lanes=0);return[t.memoizedState,n.dispatch]}function pl(e){var t=kt(),n=t.queue;if(n===null)throw Error(R(311));n.lastRenderedReducer=e;var r=n.dispatch,i=n.pending,o=t.memoizedState;if(i!==null){n.pending=null;var s=i=i.next;do o=e(o,s.action),s=s.next;while(s!==i);Mt(o,t.memoizedState)||(tt=!0),t.memoizedState=o,t.baseQueue===null&&(t.baseState=o),n.lastRenderedState=o}return[o,r]}function gp(){}function yp(e,t){var n=ke,r=kt(),i=t(),o=!Mt(r.memoizedState,i);if(o&&(r.memoizedState=i,tt=!0),r=r.queue,xu(wp.bind(null,n,r,e),[e]),r.getSnapshot!==t||o||ze!==null&&ze.memoizedState.tag&1){if(n.flags|=2048,Ri(9,vp.bind(null,n,r,i,t),void 0,null),Le===null)throw Error(R(349));Jn&30||xp(n,t,i)}return i}function xp(e,t,n){e.flags|=16384,e={getSnapshot:t,value:n},t=ke.updateQueue,t===null?(t={lastEffect:null,stores:null},ke.updateQueue=t,t.stores=[e]):(n=t.stores,n===null?t.stores=[e]:n.push(e))}function vp(e,t,n,r){t.value=n,t.getSnapshot=r,kp(t)&&Sp(e)}function wp(e,t,n){return n(function(){kp(t)&&Sp(e)})}function kp(e){var t=e.getSnapshot;e=e.value;try{var n=t();return!Mt(e,n)}catch{return!0}}function Sp(e){var t=nn(e,1);t!==null&&Rt(t,e,1,-1)}function Dc(e){var t=Lt();return typeof e=="function"&&(e=e()),t.memoizedState=t.baseState=e,e={pending:null,interleaved:null,lanes:0,dispatch:null,lastRenderedReducer:Oi,lastRenderedState:e},t.queue=e,e=e.dispatch=xy.bind(null,ke,e),[t.memoizedState,e]}function Ri(e,t,n,r){return e={tag:e,create:t,destroy:n,deps:r,next:null},t=ke.updateQueue,t===null?(t={lastEffect:null,stores:null},ke.updateQueue=t,t.lastEffect=e.next=e):(n=t.lastEffect,n===null?t.lastEffect=e.next=e:(r=n.next,n.next=e,e.next=r,t.lastEffect=e)),e}function jp(){return kt().memoizedState}function To(e,t,n,r){var i=Lt();ke.flags|=e,i.memoizedState=Ri(1|t,n,void 0,r===void 0?null:r)}function Cs(e,t,n,r){var i=kt();r=r===void 0?null:r;var o=void 0;if(Re!==null){var s=Re.memoizedState;if(o=s.destroy,r!==null&&mu(r,s.deps)){i.memoizedState=Ri(t,n,o,r);return}}ke.flags|=e,i.memoizedState=Ri(1|t,n,o,r)}function Fc(e,t){return To(8390656,8,e,t)}function xu(e,t){return Cs(2048,8,e,t)}function Ep(e,t){return Cs(4,2,e,t)}function _p(e,t){return Cs(4,4,e,t)}function bp(e,t){if(typeof t=="function")return e=e(),t(e),function(){t(null)};if(t!=null)return e=e(),t.current=e,function(){t.current=null}}function Cp(e,t,n){return n=n!=null?n.concat([e]):null,Cs(4,4,bp.bind(null,t,e),n)}function vu(){}function Tp(e,t){var n=kt();t=t===void 0?null:t;var r=n.memoizedState;return r!==null&&t!==null&&mu(t,r[1])?r[0]:(n.memoizedState=[e,t],e)}function Pp(e,t){var n=kt();t=t===void 0?null:t;var r=n.memoizedState;return r!==null&&t!==null&&mu(t,r[1])?r[0]:(e=e(),n.memoizedState=[e,t],e)}function Op(e,t,n){return Jn&21?(Mt(n,t)||(n=Af(),ke.lanes|=n,qn|=n,e.baseState=!0),t):(e.baseState&&(e.baseState=!1,tt=!0),e.memoizedState=n)}function gy(e,t){var n=de;de=n!==0&&4>n?n:4,e(!0);var r=dl.transition;dl.transition={};try{e(!1),t()}finally{de=n,dl.transition=r}}function Rp(){return kt().memoizedState}function yy(e,t,n){var r=Rn(e);if(n={lane:r,action:n,hasEagerState:!1,eagerState:null,next:null},Mp(e))Ap(t,n);else if(n=up(e,t,n,r),n!==null){var i=Je();Rt(n,e,r,i),Np(n,t,r)}}function xy(e,t,n){var r=Rn(e),i={lane:r,action:n,hasEagerState:!1,eagerState:null,next:null};if(Mp(e))Ap(t,i);else{var o=e.alternate;if(e.lanes===0&&(o===null||o.lanes===0)&&(o=t.lastRenderedReducer,o!==null))try{var s=t.lastRenderedState,a=o(s,n);if(i.hasEagerState=!0,i.eagerState=a,Mt(a,s)){var u=t.interleaved;u===null?(i.next=i,cu(t)):(i.next=u.next,u.next=i),t.interleaved=i;return}}catch{}finally{}n=up(e,t,i,r),n!==null&&(i=Je(),Rt(n,e,r,i),Np(n,t,r))}}function Mp(e){var t=e.alternate;return e===ke||t!==null&&t===ke}function Ap(e,t){fi=is=!0;var n=e.pending;n===null?t.next=t:(t.next=n.next,n.next=t),e.pending=t}function Np(e,t,n){if(n&4194240){var r=t.lanes;r&=e.pendingLanes,n|=r,t.lanes=n,Ga(e,n)}}var os={readContext:wt,useCallback:We,useContext:We,useEffect:We,useImperativeHandle:We,useInsertionEffect:We,useLayoutEffect:We,useMemo:We,useReducer:We,useRef:We,useState:We,useDebugValue:We,useDeferredValue:We,useTransition:We,useMutableSource:We,useSyncExternalStore:We,useId:We,unstable_isNewReconciler:!1},vy={readContext:wt,useCallback:function(e,t){return Lt().memoizedState=[e,t===void 0?null:t],e},useContext:wt,useEffect:Fc,useImperativeHandle:function(e,t,n){return n=n!=null?n.concat([e]):null,To(4194308,4,bp.bind(null,t,e),n)},useLayoutEffect:function(e,t){return To(4194308,4,e,t)},useInsertionEffect:function(e,t){return To(4,2,e,t)},useMemo:function(e,t){var n=Lt();return t=t===void 0?null:t,e=e(),n.memoizedState=[e,t],e},useReducer:function(e,t,n){var r=Lt();return t=n!==void 0?n(t):t,r.memoizedState=r.baseState=t,e={pending:null,interleaved:null,lanes:0,dispatch:null,lastRenderedReducer:e,lastRenderedState:t},r.queue=e,e=e.dispatch=yy.bind(null,ke,e),[r.memoizedState,e]},useRef:function(e){var t=Lt();return e={current:e},t.memoizedState=e},useState:Dc,useDebugValue:vu,useDeferredValue:function(e){return Lt().memoizedState=e},useTransition:function(){var e=Dc(!1),t=e[0];return e=gy.bind(null,e[1]),Lt().memoizedState=e,[t,e]},useMutableSource:function(){},useSyncExternalStore:function(e,t,n){var r=ke,i=Lt();if(ve){if(n===void 0)throw Error(R(407));n=n()}else{if(n=t(),Le===null)throw Error(R(349));Jn&30||xp(r,t,n)}i.memoizedState=n;var o={value:n,getSnapshot:t};return i.queue=o,Fc(wp.bind(null,r,o,e),[e]),r.flags|=2048,Ri(9,vp.bind(null,r,o,n,t),void 0,null),n},useId:function(){var e=Lt(),t=Le.identifierPrefix;if(ve){var n=Jt,r=Gt;n=(r&~(1<<32-Ot(r)-1)).toString(32)+n,t=":"+t+"R"+n,n=Pi++,0<n&&(t+="H"+n.toString(32)),t+=":"}else n=my++,t=":"+t+"r"+n.toString(32)+":";return e.memoizedState=t},unstable_isNewReconciler:!1},wy={readContext:wt,useCallback:Tp,useContext:wt,useEffect:xu,useImperativeHandle:Cp,useInsertionEffect:Ep,useLayoutEffect:_p,useMemo:Pp,useReducer:fl,useRef:jp,useState:function(){return fl(Oi)},useDebugValue:vu,useDeferredValue:function(e){var t=kt();return Op(t,Re.memoizedState,e)},useTransition:function(){var e=fl(Oi)[0],t=kt().memoizedState;return[e,t]},useMutableSource:gp,useSyncExternalStore:yp,useId:Rp,unstable_isNewReconciler:!1},ky={readContext:wt,useCallback:Tp,useContext:wt,useEffect:xu,useImperativeHandle:Cp,useInsertionEffect:Ep,useLayoutEffect:_p,useMemo:Pp,useReducer:pl,useRef:jp,useState:function(){return pl(Oi)},useDebugValue:vu,useDeferredValue:function(e){var t=kt();return Re===null?t.memoizedState=e:Op(t,Re.memoizedState,e)},useTransition:function(){var e=pl(Oi)[0],t=kt().memoizedState;return[e,t]},useMutableSource:gp,useSyncExternalStore:yp,useId:Rp,unstable_isNewReconciler:!1};function Ar(e,t){try{var n="",r=t;do n+=Xm(r),r=r.return;while(r);var i=n}catch(o){i=`
Error generating stack: `+o.message+`
`+o.stack}return{value:e,source:t,stack:i,digest:null}}function hl(e,t,n){return{value:e,source:null,stack:n??null,digest:t??null}}function ga(e,t){try{console.error(t.value)}catch(n){setTimeout(function(){throw n})}}var Sy=typeof WeakMap=="function"?WeakMap:Map;function zp(e,t,n){n=qt(-1,n),n.tag=3,n.payload={element:null};var r=t.value;return n.callback=function(){ls||(ls=!0,ba=r),ga(e,t)},n}function Lp(e,t,n){n=qt(-1,n),n.tag=3;var r=e.type.getDerivedStateFromError;if(typeof r=="function"){var i=t.value;n.payload=function(){return r(i)},n.callback=function(){ga(e,t)}}var o=e.stateNode;return o!==null&&typeof o.componentDidCatch=="function"&&(n.callback=function(){ga(e,t),typeof r!="function"&&(On===null?On=new Set([this]):On.add(this));var s=t.stack;this.componentDidCatch(t.value,{componentStack:s!==null?s:""})}),n}function Ic(e,t,n){var r=e.pingCache;if(r===null){r=e.pingCache=new Sy;var i=new Set;r.set(t,i)}else i=r.get(t),i===void 0&&(i=new Set,r.set(t,i));i.has(n)||(i.add(n),e=Ly.bind(null,e,t,n),t.then(e,e))}function $c(e){do{var t;if((t=e.tag===13)&&(t=e.memoizedState,t=t!==null?t.dehydrated!==null:!0),t)return e;e=e.return}while(e!==null);return null}function Uc(e,t,n,r,i){return e.mode&1?(e.flags|=65536,e.lanes=i,e):(e===t?e.flags|=65536:(e.flags|=128,n.flags|=131072,n.flags&=-52805,n.tag===1&&(n.alternate===null?n.tag=17:(t=qt(-1,1),t.tag=2,Pn(n,t,1))),n.lanes|=1),e)}var jy=on.ReactCurrentOwner,tt=!1;function Xe(e,t,n,r){t.child=e===null?hp(t,null,n,r):Rr(t,e.child,n,r)}function Bc(e,t,n,r,i){n=n.render;var o=t.ref;return _r(t,i),r=gu(e,t,n,r,o,i),n=yu(),e!==null&&!tt?(t.updateQueue=e.updateQueue,t.flags&=-2053,e.lanes&=~i,rn(e,t,i)):(ve&&n&&iu(t),t.flags|=1,Xe(e,t,r,i),t.child)}function Vc(e,t,n,r,i){if(e===null){var o=n.type;return typeof o=="function"&&!Cu(o)&&o.defaultProps===void 0&&n.compare===null&&n.defaultProps===void 0?(t.tag=15,t.type=o,Dp(e,t,o,r,i)):(e=Mo(n.type,null,r,t,t.mode,i),e.ref=t.ref,e.return=t,t.child=e)}if(o=e.child,!(e.lanes&i)){var s=o.memoizedProps;if(n=n.compare,n=n!==null?n:ji,n(s,r)&&e.ref===t.ref)return rn(e,t,i)}return t.flags|=1,e=Mn(o,r),e.ref=t.ref,e.return=t,t.child=e}function Dp(e,t,n,r,i){if(e!==null){var o=e.memoizedProps;if(ji(o,r)&&e.ref===t.ref)if(tt=!1,t.pendingProps=r=o,(e.lanes&i)!==0)e.flags&131072&&(tt=!0);else return t.lanes=e.lanes,rn(e,t,i)}return ya(e,t,n,r,i)}function Fp(e,t,n){var r=t.pendingProps,i=r.children,o=e!==null?e.memoizedState:null;if(r.mode==="hidden")if(!(t.mode&1))t.memoizedState={baseLanes:0,cachePool:null,transitions:null},he(vr,st),st|=n;else{if(!(n&1073741824))return e=o!==null?o.baseLanes|n:n,t.lanes=t.childLanes=1073741824,t.memoizedState={baseLanes:e,cachePool:null,transitions:null},t.updateQueue=null,he(vr,st),st|=e,null;t.memoizedState={baseLanes:0,cachePool:null,transitions:null},r=o!==null?o.baseLanes:n,he(vr,st),st|=r}else o!==null?(r=o.baseLanes|n,t.memoizedState=null):r=n,he(vr,st),st|=r;return Xe(e,t,i,n),t.child}function Ip(e,t){var n=t.ref;(e===null&&n!==null||e!==null&&e.ref!==n)&&(t.flags|=512,t.flags|=2097152)}function ya(e,t,n,r,i){var o=rt(n)?Xn:Ke.current;return o=Pr(t,o),_r(t,i),n=gu(e,t,n,r,o,i),r=yu(),e!==null&&!tt?(t.updateQueue=e.updateQueue,t.flags&=-2053,e.lanes&=~i,rn(e,t,i)):(ve&&r&&iu(t),t.flags|=1,Xe(e,t,n,i),t.child)}function Wc(e,t,n,r,i){if(rt(n)){var o=!0;Jo(t)}else o=!1;if(_r(t,i),t.stateNode===null)Po(e,t),fp(t,n,r),ma(t,n,r,i),r=!0;else if(e===null){var s=t.stateNode,a=t.memoizedProps;s.props=a;var u=s.context,c=n.contextType;typeof c=="object"&&c!==null?c=wt(c):(c=rt(n)?Xn:Ke.current,c=Pr(t,c));var m=n.getDerivedStateFromProps,f=typeof m=="function"||typeof s.getSnapshotBeforeUpdate=="function";f||typeof s.UNSAFE_componentWillReceiveProps!="function"&&typeof s.componentWillReceiveProps!="function"||(a!==r||u!==c)&&zc(t,s,r,c),xn=!1;var h=t.memoizedState;s.state=h,ns(t,r,s,i),u=t.memoizedState,a!==r||h!==u||nt.current||xn?(typeof m=="function"&&(ha(t,n,m,r),u=t.memoizedState),(a=xn||Nc(t,n,a,r,h,u,c))?(f||typeof s.UNSAFE_componentWillMount!="function"&&typeof s.componentWillMount!="function"||(typeof s.componentWillMount=="function"&&s.componentWillMount(),typeof s.UNSAFE_componentWillMount=="function"&&s.UNSAFE_componentWillMount()),typeof s.componentDidMount=="function"&&(t.flags|=4194308)):(typeof s.componentDidMount=="function"&&(t.flags|=4194308),t.memoizedProps=r,t.memoizedState=u),s.props=r,s.state=u,s.context=c,r=a):(typeof s.componentDidMount=="function"&&(t.flags|=4194308),r=!1)}else{s=t.stateNode,cp(e,t),a=t.memoizedProps,c=t.type===t.elementType?a:_t(t.type,a),s.props=c,f=t.pendingProps,h=s.context,u=n.contextType,typeof u=="object"&&u!==null?u=wt(u):(u=rt(n)?Xn:Ke.current,u=Pr(t,u));var w=n.getDerivedStateFromProps;(m=typeof w=="function"||typeof s.getSnapshotBeforeUpdate=="function")||typeof s.UNSAFE_componentWillReceiveProps!="function"&&typeof s.componentWillReceiveProps!="function"||(a!==f||h!==u)&&zc(t,s,r,u),xn=!1,h=t.memoizedState,s.state=h,ns(t,r,s,i);var y=t.memoizedState;a!==f||h!==y||nt.current||xn?(typeof w=="function"&&(ha(t,n,w,r),y=t.memoizedState),(c=xn||Nc(t,n,c,r,h,y,u)||!1)?(m||typeof s.UNSAFE_componentWillUpdate!="function"&&typeof s.componentWillUpdate!="function"||(typeof s.componentWillUpdate=="function"&&s.componentWillUpdate(r,y,u),typeof s.UNSAFE_componentWillUpdate=="function"&&s.UNSAFE_componentWillUpdate(r,y,u)),typeof s.componentDidUpdate=="function"&&(t.flags|=4),typeof s.getSnapshotBeforeUpdate=="function"&&(t.flags|=1024)):(typeof s.componentDidUpdate!="function"||a===e.memoizedProps&&h===e.memoizedState||(t.flags|=4),typeof s.getSnapshotBeforeUpdate!="function"||a===e.memoizedProps&&h===e.memoizedState||(t.flags|=1024),t.memoizedProps=r,t.memoizedState=y),s.props=r,s.state=y,s.context=u,r=c):(typeof s.componentDidUpdate!="function"||a===e.memoizedProps&&h===e.memoizedState||(t.flags|=4),typeof s.getSnapshotBeforeUpdate!="function"||a===e.memoizedProps&&h===e.memoizedState||(t.flags|=1024),r=!1)}return xa(e,t,n,r,o,i)}function xa(e,t,n,r,i,o){Ip(e,t);var s=(t.flags&128)!==0;if(!r&&!s)return i&&Pc(t,n,!1),rn(e,t,o);r=t.stateNode,jy.current=t;var a=s&&typeof n.getDerivedStateFromError!="function"?null:r.render();return t.flags|=1,e!==null&&s?(t.child=Rr(t,e.child,null,o),t.child=Rr(t,null,a,o)):Xe(e,t,a,o),t.memoizedState=r.state,i&&Pc(t,n,!0),t.child}function $p(e){var t=e.stateNode;t.pendingContext?Tc(e,t.pendingContext,t.pendingContext!==t.context):t.context&&Tc(e,t.context,!1),fu(e,t.containerInfo)}function Hc(e,t,n,r,i){return Or(),su(i),t.flags|=256,Xe(e,t,n,r),t.child}var va={dehydrated:null,treeContext:null,retryLane:0};function wa(e){return{baseLanes:e,cachePool:null,transitions:null}}function Up(e,t,n){var r=t.pendingProps,i=we.current,o=!1,s=(t.flags&128)!==0,a;if((a=s)||(a=e!==null&&e.memoizedState===null?!1:(i&2)!==0),a?(o=!0,t.flags&=-129):(e===null||e.memoizedState!==null)&&(i|=1),he(we,i&1),e===null)return fa(t),e=t.memoizedState,e!==null&&(e=e.dehydrated,e!==null)?(t.mode&1?e.data==="$!"?t.lanes=8:t.lanes=1073741824:t.lanes=1,null):(s=r.children,e=r.fallback,o?(r=t.mode,o=t.child,s={mode:"hidden",children:s},!(r&1)&&o!==null?(o.childLanes=0,o.pendingProps=s):o=Os(s,r,0,null),e=Kn(e,r,n,null),o.return=t,e.return=t,o.sibling=e,t.child=o,t.child.memoizedState=wa(n),t.memoizedState=va,e):wu(t,s));if(i=e.memoizedState,i!==null&&(a=i.dehydrated,a!==null))return Ey(e,t,s,r,a,i,n);if(o){o=r.fallback,s=t.mode,i=e.child,a=i.sibling;var u={mode:"hidden",children:r.children};return!(s&1)&&t.child!==i?(r=t.child,r.childLanes=0,r.pendingProps=u,t.deletions=null):(r=Mn(i,u),r.subtreeFlags=i.subtreeFlags&14680064),a!==null?o=Mn(a,o):(o=Kn(o,s,n,null),o.flags|=2),o.return=t,r.return=t,r.sibling=o,t.child=r,r=o,o=t.child,s=e.child.memoizedState,s=s===null?wa(n):{baseLanes:s.baseLanes|n,cachePool:null,transitions:s.transitions},o.memoizedState=s,o.childLanes=e.childLanes&~n,t.memoizedState=va,r}return o=e.child,e=o.sibling,r=Mn(o,{mode:"visible",children:r.children}),!(t.mode&1)&&(r.lanes=n),r.return=t,r.sibling=null,e!==null&&(n=t.deletions,n===null?(t.deletions=[e],t.flags|=16):n.push(e)),t.child=r,t.memoizedState=null,r}function wu(e,t){return t=Os({mode:"visible",children:t},e.mode,0,null),t.return=e,e.child=t}function ao(e,t,n,r){return r!==null&&su(r),Rr(t,e.child,null,n),e=wu(t,t.pendingProps.children),e.flags|=2,t.memoizedState=null,e}function Ey(e,t,n,r,i,o,s){if(n)return t.flags&256?(t.flags&=-257,r=hl(Error(R(422))),ao(e,t,s,r)):t.memoizedState!==null?(t.child=e.child,t.flags|=128,null):(o=r.fallback,i=t.mode,r=Os({mode:"visible",children:r.children},i,0,null),o=Kn(o,i,s,null),o.flags|=2,r.return=t,o.return=t,r.sibling=o,t.child=r,t.mode&1&&Rr(t,e.child,null,s),t.child.memoizedState=wa(s),t.memoizedState=va,o);if(!(t.mode&1))return ao(e,t,s,null);if(i.data==="$!"){if(r=i.nextSibling&&i.nextSibling.dataset,r)var a=r.dgst;return r=a,o=Error(R(419)),r=hl(o,r,void 0),ao(e,t,s,r)}if(a=(s&e.childLanes)!==0,tt||a){if(r=Le,r!==null){switch(s&-s){case 4:i=2;break;case 16:i=8;break;case 64:case 128:case 256:case 512:case 1024:case 2048:case 4096:case 8192:case 16384:case 32768:case 65536:case 131072:case 262144:case 524288:case 1048576:case 2097152:case 4194304:case 8388608:case 16777216:case 33554432:case 67108864:i=32;break;case 536870912:i=268435456;break;default:i=0}i=i&(r.suspendedLanes|s)?0:i,i!==0&&i!==o.retryLane&&(o.retryLane=i,nn(e,i),Rt(r,e,i,-1))}return bu(),r=hl(Error(R(421))),ao(e,t,s,r)}return i.data==="$?"?(t.flags|=128,t.child=e.child,t=Dy.bind(null,e),i._reactRetry=t,null):(e=o.treeContext,lt=Tn(i.nextSibling),at=t,ve=!0,Tt=null,e!==null&&(mt[gt++]=Gt,mt[gt++]=Jt,mt[gt++]=Gn,Gt=e.id,Jt=e.overflow,Gn=t),t=wu(t,r.children),t.flags|=4096,t)}function Qc(e,t,n){e.lanes|=t;var r=e.alternate;r!==null&&(r.lanes|=t),pa(e.return,t,n)}function ml(e,t,n,r,i){var o=e.memoizedState;o===null?e.memoizedState={isBackwards:t,rendering:null,renderingStartTime:0,last:r,tail:n,tailMode:i}:(o.isBackwards=t,o.rendering=null,o.renderingStartTime=0,o.last=r,o.tail=n,o.tailMode=i)}function Bp(e,t,n){var r=t.pendingProps,i=r.revealOrder,o=r.tail;if(Xe(e,t,r.children,n),r=we.current,r&2)r=r&1|2,t.flags|=128;else{if(e!==null&&e.flags&128)e:for(e=t.child;e!==null;){if(e.tag===13)e.memoizedState!==null&&Qc(e,n,t);else if(e.tag===19)Qc(e,n,t);else if(e.child!==null){e.child.return=e,e=e.child;continue}if(e===t)break e;for(;e.sibling===null;){if(e.return===null||e.return===t)break e;e=e.return}e.sibling.return=e.return,e=e.sibling}r&=1}if(he(we,r),!(t.mode&1))t.memoizedState=null;else switch(i){case"forwards":for(n=t.child,i=null;n!==null;)e=n.alternate,e!==null&&rs(e)===null&&(i=n),n=n.sibling;n=i,n===null?(i=t.child,t.child=null):(i=n.sibling,n.sibling=null),ml(t,!1,i,n,o);break;case"backwards":for(n=null,i=t.child,t.child=null;i!==null;){if(e=i.alternate,e!==null&&rs(e)===null){t.child=i;break}e=i.sibling,i.sibling=n,n=i,i=e}ml(t,!0,n,null,o);break;case"together":ml(t,!1,null,null,void 0);break;default:t.memoizedState=null}return t.child}function Po(e,t){!(t.mode&1)&&e!==null&&(e.alternate=null,t.alternate=null,t.flags|=2)}function rn(e,t,n){if(e!==null&&(t.dependencies=e.dependencies),qn|=t.lanes,!(n&t.childLanes))return null;if(e!==null&&t.child!==e.child)throw Error(R(153));if(t.child!==null){for(e=t.child,n=Mn(e,e.pendingProps),t.child=n,n.return=t;e.sibling!==null;)e=e.sibling,n=n.sibling=Mn(e,e.pendingProps),n.return=t;n.sibling=null}return t.child}function _y(e,t,n){switch(t.tag){case 3:$p(t),Or();break;case 5:mp(t);break;case 1:rt(t.type)&&Jo(t);break;case 4:fu(t,t.stateNode.containerInfo);break;case 10:var r=t.type._context,i=t.memoizedProps.value;he(es,r._currentValue),r._currentValue=i;break;case 13:if(r=t.memoizedState,r!==null)return r.dehydrated!==null?(he(we,we.current&1),t.flags|=128,null):n&t.child.childLanes?Up(e,t,n):(he(we,we.current&1),e=rn(e,t,n),e!==null?e.sibling:null);he(we,we.current&1);break;case 19:if(r=(n&t.childLanes)!==0,e.flags&128){if(r)return Bp(e,t,n);t.flags|=128}if(i=t.memoizedState,i!==null&&(i.rendering=null,i.tail=null,i.lastEffect=null),he(we,we.current),r)break;return null;case 22:case 23:return t.lanes=0,Fp(e,t,n)}return rn(e,t,n)}var Vp,ka,Wp,Hp;Vp=function(e,t){for(var n=t.child;n!==null;){if(n.tag===5||n.tag===6)e.appendChild(n.stateNode);else if(n.tag!==4&&n.child!==null){n.child.return=n,n=n.child;continue}if(n===t)break;for(;n.sibling===null;){if(n.return===null||n.return===t)return;n=n.return}n.sibling.return=n.return,n=n.sibling}};ka=function(){};Wp=function(e,t,n,r){var i=e.memoizedProps;if(i!==r){e=t.stateNode,Vn(Vt.current);var o=null;switch(n){case"input":i=Vl(e,i),r=Vl(e,r),o=[];break;case"select":i=Se({},i,{value:void 0}),r=Se({},r,{value:void 0}),o=[];break;case"textarea":i=Ql(e,i),r=Ql(e,r),o=[];break;default:typeof i.onClick!="function"&&typeof r.onClick=="function"&&(e.onclick=Xo)}Kl(n,r);var s;n=null;for(c in i)if(!r.hasOwnProperty(c)&&i.hasOwnProperty(c)&&i[c]!=null)if(c==="style"){var a=i[c];for(s in a)a.hasOwnProperty(s)&&(n||(n={}),n[s]="")}else c!=="dangerouslySetInnerHTML"&&c!=="children"&&c!=="suppressContentEditableWarning"&&c!=="suppressHydrationWarning"&&c!=="autoFocus"&&(gi.hasOwnProperty(c)?o||(o=[]):(o=o||[]).push(c,null));for(c in r){var u=r[c];if(a=i!=null?i[c]:void 0,r.hasOwnProperty(c)&&u!==a&&(u!=null||a!=null))if(c==="style")if(a){for(s in a)!a.hasOwnProperty(s)||u&&u.hasOwnProperty(s)||(n||(n={}),n[s]="");for(s in u)u.hasOwnProperty(s)&&a[s]!==u[s]&&(n||(n={}),n[s]=u[s])}else n||(o||(o=[]),o.push(c,n)),n=u;else c==="dangerouslySetInnerHTML"?(u=u?u.__html:void 0,a=a?a.__html:void 0,u!=null&&a!==u&&(o=o||[]).push(c,u)):c==="children"?typeof u!="string"&&typeof u!="number"||(o=o||[]).push(c,""+u):c!=="suppressContentEditableWarning"&&c!=="suppressHydrationWarning"&&(gi.hasOwnProperty(c)?(u!=null&&c==="onScroll"&&ge("scroll",e),o||a===u||(o=[])):(o=o||[]).push(c,u))}n&&(o=o||[]).push("style",n);var c=o;(t.updateQueue=c)&&(t.flags|=4)}};Hp=function(e,t,n,r){n!==r&&(t.flags|=4)};function Kr(e,t){if(!ve)switch(e.tailMode){case"hidden":t=e.tail;for(var n=null;t!==null;)t.alternate!==null&&(n=t),t=t.sibling;n===null?e.tail=null:n.sibling=null;break;case"collapsed":n=e.tail;for(var r=null;n!==null;)n.alternate!==null&&(r=n),n=n.sibling;r===null?t||e.tail===null?e.tail=null:e.tail.sibling=null:r.sibling=null}}function He(e){var t=e.alternate!==null&&e.alternate.child===e.child,n=0,r=0;if(t)for(var i=e.child;i!==null;)n|=i.lanes|i.childLanes,r|=i.subtreeFlags&14680064,r|=i.flags&14680064,i.return=e,i=i.sibling;else for(i=e.child;i!==null;)n|=i.lanes|i.childLanes,r|=i.subtreeFlags,r|=i.flags,i.return=e,i=i.sibling;return e.subtreeFlags|=r,e.childLanes=n,t}function by(e,t,n){var r=t.pendingProps;switch(ou(t),t.tag){case 2:case 16:case 15:case 0:case 11:case 7:case 8:case 12:case 9:case 14:return He(t),null;case 1:return rt(t.type)&&Go(),He(t),null;case 3:return r=t.stateNode,Mr(),ye(nt),ye(Ke),hu(),r.pendingContext&&(r.context=r.pendingContext,r.pendingContext=null),(e===null||e.child===null)&&(so(t)?t.flags|=4:e===null||e.memoizedState.isDehydrated&&!(t.flags&256)||(t.flags|=1024,Tt!==null&&(Pa(Tt),Tt=null))),ka(e,t),He(t),null;case 5:pu(t);var i=Vn(Ti.current);if(n=t.type,e!==null&&t.stateNode!=null)Wp(e,t,n,r,i),e.ref!==t.ref&&(t.flags|=512,t.flags|=2097152);else{if(!r){if(t.stateNode===null)throw Error(R(166));return He(t),null}if(e=Vn(Vt.current),so(t)){r=t.stateNode,n=t.type;var o=t.memoizedProps;switch(r[It]=t,r[bi]=o,e=(t.mode&1)!==0,n){case"dialog":ge("cancel",r),ge("close",r);break;case"iframe":case"object":case"embed":ge("load",r);break;case"video":case"audio":for(i=0;i<si.length;i++)ge(si[i],r);break;case"source":ge("error",r);break;case"img":case"image":case"link":ge("error",r),ge("load",r);break;case"details":ge("toggle",r);break;case"input":tc(r,o),ge("invalid",r);break;case"select":r._wrapperState={wasMultiple:!!o.multiple},ge("invalid",r);break;case"textarea":rc(r,o),ge("invalid",r)}Kl(n,o),i=null;for(var s in o)if(o.hasOwnProperty(s)){var a=o[s];s==="children"?typeof a=="string"?r.textContent!==a&&(o.suppressHydrationWarning!==!0&&oo(r.textContent,a,e),i=["children",a]):typeof a=="number"&&r.textContent!==""+a&&(o.suppressHydrationWarning!==!0&&oo(r.textContent,a,e),i=["children",""+a]):gi.hasOwnProperty(s)&&a!=null&&s==="onScroll"&&ge("scroll",r)}switch(n){case"input":Ji(r),nc(r,o,!0);break;case"textarea":Ji(r),ic(r);break;case"select":case"option":break;default:typeof o.onClick=="function"&&(r.onclick=Xo)}r=i,t.updateQueue=r,r!==null&&(t.flags|=4)}else{s=i.nodeType===9?i:i.ownerDocument,e==="http://www.w3.org/1999/xhtml"&&(e=xf(n)),e==="http://www.w3.org/1999/xhtml"?n==="script"?(e=s.createElement("div"),e.innerHTML="<script><\/script>",e=e.removeChild(e.firstChild)):typeof r.is=="string"?e=s.createElement(n,{is:r.is}):(e=s.createElement(n),n==="select"&&(s=e,r.multiple?s.multiple=!0:r.size&&(s.size=r.size))):e=s.createElementNS(e,n),e[It]=t,e[bi]=r,Vp(e,t,!1,!1),t.stateNode=e;e:{switch(s=Xl(n,r),n){case"dialog":ge("cancel",e),ge("close",e),i=r;break;case"iframe":case"object":case"embed":ge("load",e),i=r;break;case"video":case"audio":for(i=0;i<si.length;i++)ge(si[i],e);i=r;break;case"source":ge("error",e),i=r;break;case"img":case"image":case"link":ge("error",e),ge("load",e),i=r;break;case"details":ge("toggle",e),i=r;break;case"input":tc(e,r),i=Vl(e,r),ge("invalid",e);break;case"option":i=r;break;case"select":e._wrapperState={wasMultiple:!!r.multiple},i=Se({},r,{value:void 0}),ge("invalid",e);break;case"textarea":rc(e,r),i=Ql(e,r),ge("invalid",e);break;default:i=r}Kl(n,i),a=i;for(o in a)if(a.hasOwnProperty(o)){var u=a[o];o==="style"?kf(e,u):o==="dangerouslySetInnerHTML"?(u=u?u.__html:void 0,u!=null&&vf(e,u)):o==="children"?typeof u=="string"?(n!=="textarea"||u!=="")&&yi(e,u):typeof u=="number"&&yi(e,""+u):o!=="suppressContentEditableWarning"&&o!=="suppressHydrationWarning"&&o!=="autoFocus"&&(gi.hasOwnProperty(o)?u!=null&&o==="onScroll"&&ge("scroll",e):u!=null&&Wa(e,o,u,s))}switch(n){case"input":Ji(e),nc(e,r,!1);break;case"textarea":Ji(e),ic(e);break;case"option":r.value!=null&&e.setAttribute("value",""+An(r.value));break;case"select":e.multiple=!!r.multiple,o=r.value,o!=null?kr(e,!!r.multiple,o,!1):r.defaultValue!=null&&kr(e,!!r.multiple,r.defaultValue,!0);break;default:typeof i.onClick=="function"&&(e.onclick=Xo)}switch(n){case"button":case"input":case"select":case"textarea":r=!!r.autoFocus;break e;case"img":r=!0;break e;default:r=!1}}r&&(t.flags|=4)}t.ref!==null&&(t.flags|=512,t.flags|=2097152)}return He(t),null;case 6:if(e&&t.stateNode!=null)Hp(e,t,e.memoizedProps,r);else{if(typeof r!="string"&&t.stateNode===null)throw Error(R(166));if(n=Vn(Ti.current),Vn(Vt.current),so(t)){if(r=t.stateNode,n=t.memoizedProps,r[It]=t,(o=r.nodeValue!==n)&&(e=at,e!==null))switch(e.tag){case 3:oo(r.nodeValue,n,(e.mode&1)!==0);break;case 5:e.memoizedProps.suppressHydrationWarning!==!0&&oo(r.nodeValue,n,(e.mode&1)!==0)}o&&(t.flags|=4)}else r=(n.nodeType===9?n:n.ownerDocument).createTextNode(r),r[It]=t,t.stateNode=r}return He(t),null;case 13:if(ye(we),r=t.memoizedState,e===null||e.memoizedState!==null&&e.memoizedState.dehydrated!==null){if(ve&&lt!==null&&t.mode&1&&!(t.flags&128))ap(),Or(),t.flags|=98560,o=!1;else if(o=so(t),r!==null&&r.dehydrated!==null){if(e===null){if(!o)throw Error(R(318));if(o=t.memoizedState,o=o!==null?o.dehydrated:null,!o)throw Error(R(317));o[It]=t}else Or(),!(t.flags&128)&&(t.memoizedState=null),t.flags|=4;He(t),o=!1}else Tt!==null&&(Pa(Tt),Tt=null),o=!0;if(!o)return t.flags&65536?t:null}return t.flags&128?(t.lanes=n,t):(r=r!==null,r!==(e!==null&&e.memoizedState!==null)&&r&&(t.child.flags|=8192,t.mode&1&&(e===null||we.current&1?Me===0&&(Me=3):bu())),t.updateQueue!==null&&(t.flags|=4),He(t),null);case 4:return Mr(),ka(e,t),e===null&&Ei(t.stateNode.containerInfo),He(t),null;case 10:return uu(t.type._context),He(t),null;case 17:return rt(t.type)&&Go(),He(t),null;case 19:if(ye(we),o=t.memoizedState,o===null)return He(t),null;if(r=(t.flags&128)!==0,s=o.rendering,s===null)if(r)Kr(o,!1);else{if(Me!==0||e!==null&&e.flags&128)for(e=t.child;e!==null;){if(s=rs(e),s!==null){for(t.flags|=128,Kr(o,!1),r=s.updateQueue,r!==null&&(t.updateQueue=r,t.flags|=4),t.subtreeFlags=0,r=n,n=t.child;n!==null;)o=n,e=r,o.flags&=14680066,s=o.alternate,s===null?(o.childLanes=0,o.lanes=e,o.child=null,o.subtreeFlags=0,o.memoizedProps=null,o.memoizedState=null,o.updateQueue=null,o.dependencies=null,o.stateNode=null):(o.childLanes=s.childLanes,o.lanes=s.lanes,o.child=s.child,o.subtreeFlags=0,o.deletions=null,o.memoizedProps=s.memoizedProps,o.memoizedState=s.memoizedState,o.updateQueue=s.updateQueue,o.type=s.type,e=s.dependencies,o.dependencies=e===null?null:{lanes:e.lanes,firstContext:e.firstContext}),n=n.sibling;return he(we,we.current&1|2),t.child}e=e.sibling}o.tail!==null&&_e()>Nr&&(t.flags|=128,r=!0,Kr(o,!1),t.lanes=4194304)}else{if(!r)if(e=rs(s),e!==null){if(t.flags|=128,r=!0,n=e.updateQueue,n!==null&&(t.updateQueue=n,t.flags|=4),Kr(o,!0),o.tail===null&&o.tailMode==="hidden"&&!s.alternate&&!ve)return He(t),null}else 2*_e()-o.renderingStartTime>Nr&&n!==1073741824&&(t.flags|=128,r=!0,Kr(o,!1),t.lanes=4194304);o.isBackwards?(s.sibling=t.child,t.child=s):(n=o.last,n!==null?n.sibling=s:t.child=s,o.last=s)}return o.tail!==null?(t=o.tail,o.rendering=t,o.tail=t.sibling,o.renderingStartTime=_e(),t.sibling=null,n=we.current,he(we,r?n&1|2:n&1),t):(He(t),null);case 22:case 23:return _u(),r=t.memoizedState!==null,e!==null&&e.memoizedState!==null!==r&&(t.flags|=8192),r&&t.mode&1?st&1073741824&&(He(t),t.subtreeFlags&6&&(t.flags|=8192)):He(t),null;case 24:return null;case 25:return null}throw Error(R(156,t.tag))}function Cy(e,t){switch(ou(t),t.tag){case 1:return rt(t.type)&&Go(),e=t.flags,e&65536?(t.flags=e&-65537|128,t):null;case 3:return Mr(),ye(nt),ye(Ke),hu(),e=t.flags,e&65536&&!(e&128)?(t.flags=e&-65537|128,t):null;case 5:return pu(t),null;case 13:if(ye(we),e=t.memoizedState,e!==null&&e.dehydrated!==null){if(t.alternate===null)throw Error(R(340));Or()}return e=t.flags,e&65536?(t.flags=e&-65537|128,t):null;case 19:return ye(we),null;case 4:return Mr(),null;case 10:return uu(t.type._context),null;case 22:case 23:return _u(),null;case 24:return null;default:return null}}var uo=!1,Ye=!1,Ty=typeof WeakSet=="function"?WeakSet:Set,U=null;function xr(e,t){var n=e.ref;if(n!==null)if(typeof n=="function")try{n(null)}catch(r){je(e,t,r)}else n.current=null}function Sa(e,t,n){try{n()}catch(r){je(e,t,r)}}var Yc=!1;function Py(e,t){if(oa=Qo,e=Xf(),ru(e)){if("selectionStart"in e)var n={start:e.selectionStart,end:e.selectionEnd};else e:{n=(n=e.ownerDocument)&&n.defaultView||window;var r=n.getSelection&&n.getSelection();if(r&&r.rangeCount!==0){n=r.anchorNode;var i=r.anchorOffset,o=r.focusNode;r=r.focusOffset;try{n.nodeType,o.nodeType}catch{n=null;break e}var s=0,a=-1,u=-1,c=0,m=0,f=e,h=null;t:for(;;){for(var w;f!==n||i!==0&&f.nodeType!==3||(a=s+i),f!==o||r!==0&&f.nodeType!==3||(u=s+r),f.nodeType===3&&(s+=f.nodeValue.length),(w=f.firstChild)!==null;)h=f,f=w;for(;;){if(f===e)break t;if(h===n&&++c===i&&(a=s),h===o&&++m===r&&(u=s),(w=f.nextSibling)!==null)break;f=h,h=f.parentNode}f=w}n=a===-1||u===-1?null:{start:a,end:u}}else n=null}n=n||{start:0,end:0}}else n=null;for(sa={focusedElem:e,selectionRange:n},Qo=!1,U=t;U!==null;)if(t=U,e=t.child,(t.subtreeFlags&1028)!==0&&e!==null)e.return=t,U=e;else for(;U!==null;){t=U;try{var y=t.alternate;if(t.flags&1024)switch(t.tag){case 0:case 11:case 15:break;case 1:if(y!==null){var x=y.memoizedProps,C=y.memoizedState,p=t.stateNode,d=p.getSnapshotBeforeUpdate(t.elementType===t.type?x:_t(t.type,x),C);p.__reactInternalSnapshotBeforeUpdate=d}break;case 3:var g=t.stateNode.containerInfo;g.nodeType===1?g.textContent="":g.nodeType===9&&g.documentElement&&g.removeChild(g.documentElement);break;case 5:case 6:case 4:case 17:break;default:throw Error(R(163))}}catch(k){je(t,t.return,k)}if(e=t.sibling,e!==null){e.return=t.return,U=e;break}U=t.return}return y=Yc,Yc=!1,y}function pi(e,t,n){var r=t.updateQueue;if(r=r!==null?r.lastEffect:null,r!==null){var i=r=r.next;do{if((i.tag&e)===e){var o=i.destroy;i.destroy=void 0,o!==void 0&&Sa(t,n,o)}i=i.next}while(i!==r)}}function Ts(e,t){if(t=t.updateQueue,t=t!==null?t.lastEffect:null,t!==null){var n=t=t.next;do{if((n.tag&e)===e){var r=n.create;n.destroy=r()}n=n.next}while(n!==t)}}function ja(e){var t=e.ref;if(t!==null){var n=e.stateNode;switch(e.tag){case 5:e=n;break;default:e=n}typeof t=="function"?t(e):t.current=e}}function Qp(e){var t=e.alternate;t!==null&&(e.alternate=null,Qp(t)),e.child=null,e.deletions=null,e.sibling=null,e.tag===5&&(t=e.stateNode,t!==null&&(delete t[It],delete t[bi],delete t[ua],delete t[dy],delete t[fy])),e.stateNode=null,e.return=null,e.dependencies=null,e.memoizedProps=null,e.memoizedState=null,e.pendingProps=null,e.stateNode=null,e.updateQueue=null}function Yp(e){return e.tag===5||e.tag===3||e.tag===4}function Kc(e){e:for(;;){for(;e.sibling===null;){if(e.return===null||Yp(e.return))return null;e=e.return}for(e.sibling.return=e.return,e=e.sibling;e.tag!==5&&e.tag!==6&&e.tag!==18;){if(e.flags&2||e.child===null||e.tag===4)continue e;e.child.return=e,e=e.child}if(!(e.flags&2))return e.stateNode}}function Ea(e,t,n){var r=e.tag;if(r===5||r===6)e=e.stateNode,t?n.nodeType===8?n.parentNode.insertBefore(e,t):n.insertBefore(e,t):(n.nodeType===8?(t=n.parentNode,t.insertBefore(e,n)):(t=n,t.appendChild(e)),n=n._reactRootContainer,n!=null||t.onclick!==null||(t.onclick=Xo));else if(r!==4&&(e=e.child,e!==null))for(Ea(e,t,n),e=e.sibling;e!==null;)Ea(e,t,n),e=e.sibling}function _a(e,t,n){var r=e.tag;if(r===5||r===6)e=e.stateNode,t?n.insertBefore(e,t):n.appendChild(e);else if(r!==4&&(e=e.child,e!==null))for(_a(e,t,n),e=e.sibling;e!==null;)_a(e,t,n),e=e.sibling}var Ie=null,bt=!1;function ln(e,t,n){for(n=n.child;n!==null;)Kp(e,t,n),n=n.sibling}function Kp(e,t,n){if(Bt&&typeof Bt.onCommitFiberUnmount=="function")try{Bt.onCommitFiberUnmount(ws,n)}catch{}switch(n.tag){case 5:Ye||xr(n,t);case 6:var r=Ie,i=bt;Ie=null,ln(e,t,n),Ie=r,bt=i,Ie!==null&&(bt?(e=Ie,n=n.stateNode,e.nodeType===8?e.parentNode.removeChild(n):e.removeChild(n)):Ie.removeChild(n.stateNode));break;case 18:Ie!==null&&(bt?(e=Ie,n=n.stateNode,e.nodeType===8?al(e.parentNode,n):e.nodeType===1&&al(e,n),ki(e)):al(Ie,n.stateNode));break;case 4:r=Ie,i=bt,Ie=n.stateNode.containerInfo,bt=!0,ln(e,t,n),Ie=r,bt=i;break;case 0:case 11:case 14:case 15:if(!Ye&&(r=n.updateQueue,r!==null&&(r=r.lastEffect,r!==null))){i=r=r.next;do{var o=i,s=o.destroy;o=o.tag,s!==void 0&&(o&2||o&4)&&Sa(n,t,s),i=i.next}while(i!==r)}ln(e,t,n);break;case 1:if(!Ye&&(xr(n,t),r=n.stateNode,typeof r.componentWillUnmount=="function"))try{r.props=n.memoizedProps,r.state=n.memoizedState,r.componentWillUnmount()}catch(a){je(n,t,a)}ln(e,t,n);break;case 21:ln(e,t,n);break;case 22:n.mode&1?(Ye=(r=Ye)||n.memoizedState!==null,ln(e,t,n),Ye=r):ln(e,t,n);break;default:ln(e,t,n)}}function Xc(e){var t=e.updateQueue;if(t!==null){e.updateQueue=null;var n=e.stateNode;n===null&&(n=e.stateNode=new Ty),t.forEach(function(r){var i=Fy.bind(null,e,r);n.has(r)||(n.add(r),r.then(i,i))})}}function jt(e,t){var n=t.deletions;if(n!==null)for(var r=0;r<n.length;r++){var i=n[r];try{var o=e,s=t,a=s;e:for(;a!==null;){switch(a.tag){case 5:Ie=a.stateNode,bt=!1;break e;case 3:Ie=a.stateNode.containerInfo,bt=!0;break e;case 4:Ie=a.stateNode.containerInfo,bt=!0;break e}a=a.return}if(Ie===null)throw Error(R(160));Kp(o,s,i),Ie=null,bt=!1;var u=i.alternate;u!==null&&(u.return=null),i.return=null}catch(c){je(i,t,c)}}if(t.subtreeFlags&12854)for(t=t.child;t!==null;)Xp(t,e),t=t.sibling}function Xp(e,t){var n=e.alternate,r=e.flags;switch(e.tag){case 0:case 11:case 14:case 15:if(jt(t,e),Nt(e),r&4){try{pi(3,e,e.return),Ts(3,e)}catch(x){je(e,e.return,x)}try{pi(5,e,e.return)}catch(x){je(e,e.return,x)}}break;case 1:jt(t,e),Nt(e),r&512&&n!==null&&xr(n,n.return);break;case 5:if(jt(t,e),Nt(e),r&512&&n!==null&&xr(n,n.return),e.flags&32){var i=e.stateNode;try{yi(i,"")}catch(x){je(e,e.return,x)}}if(r&4&&(i=e.stateNode,i!=null)){var o=e.memoizedProps,s=n!==null?n.memoizedProps:o,a=e.type,u=e.updateQueue;if(e.updateQueue=null,u!==null)try{a==="input"&&o.type==="radio"&&o.name!=null&&gf(i,o),Xl(a,s);var c=Xl(a,o);for(s=0;s<u.length;s+=2){var m=u[s],f=u[s+1];m==="style"?kf(i,f):m==="dangerouslySetInnerHTML"?vf(i,f):m==="children"?yi(i,f):Wa(i,m,f,c)}switch(a){case"input":Wl(i,o);break;case"textarea":yf(i,o);break;case"select":var h=i._wrapperState.wasMultiple;i._wrapperState.wasMultiple=!!o.multiple;var w=o.value;w!=null?kr(i,!!o.multiple,w,!1):h!==!!o.multiple&&(o.defaultValue!=null?kr(i,!!o.multiple,o.defaultValue,!0):kr(i,!!o.multiple,o.multiple?[]:"",!1))}i[bi]=o}catch(x){je(e,e.return,x)}}break;case 6:if(jt(t,e),Nt(e),r&4){if(e.stateNode===null)throw Error(R(162));i=e.stateNode,o=e.memoizedProps;try{i.nodeValue=o}catch(x){je(e,e.return,x)}}break;case 3:if(jt(t,e),Nt(e),r&4&&n!==null&&n.memoizedState.isDehydrated)try{ki(t.containerInfo)}catch(x){je(e,e.return,x)}break;case 4:jt(t,e),Nt(e);break;case 13:jt(t,e),Nt(e),i=e.child,i.flags&8192&&(o=i.memoizedState!==null,i.stateNode.isHidden=o,!o||i.alternate!==null&&i.alternate.memoizedState!==null||(ju=_e())),r&4&&Xc(e);break;case 22:if(m=n!==null&&n.memoizedState!==null,e.mode&1?(Ye=(c=Ye)||m,jt(t,e),Ye=c):jt(t,e),Nt(e),r&8192){if(c=e.memoizedState!==null,(e.stateNode.isHidden=c)&&!m&&e.mode&1)for(U=e,m=e.child;m!==null;){for(f=U=m;U!==null;){switch(h=U,w=h.child,h.tag){case 0:case 11:case 14:case 15:pi(4,h,h.return);break;case 1:xr(h,h.return);var y=h.stateNode;if(typeof y.componentWillUnmount=="function"){r=h,n=h.return;try{t=r,y.props=t.memoizedProps,y.state=t.memoizedState,y.componentWillUnmount()}catch(x){je(r,n,x)}}break;case 5:xr(h,h.return);break;case 22:if(h.memoizedState!==null){Jc(f);continue}}w!==null?(w.return=h,U=w):Jc(f)}m=m.sibling}e:for(m=null,f=e;;){if(f.tag===5){if(m===null){m=f;try{i=f.stateNode,c?(o=i.style,typeof o.setProperty=="function"?o.setProperty("display","none","important"):o.display="none"):(a=f.stateNode,u=f.memoizedProps.style,s=u!=null&&u.hasOwnProperty("display")?u.display:null,a.style.display=wf("display",s))}catch(x){je(e,e.return,x)}}}else if(f.tag===6){if(m===null)try{f.stateNode.nodeValue=c?"":f.memoizedProps}catch(x){je(e,e.return,x)}}else if((f.tag!==22&&f.tag!==23||f.memoizedState===null||f===e)&&f.child!==null){f.child.return=f,f=f.child;continue}if(f===e)break e;for(;f.sibling===null;){if(f.return===null||f.return===e)break e;m===f&&(m=null),f=f.return}m===f&&(m=null),f.sibling.return=f.return,f=f.sibling}}break;case 19:jt(t,e),Nt(e),r&4&&Xc(e);break;case 21:break;default:jt(t,e),Nt(e)}}function Nt(e){var t=e.flags;if(t&2){try{e:{for(var n=e.return;n!==null;){if(Yp(n)){var r=n;break e}n=n.return}throw Error(R(160))}switch(r.tag){case 5:var i=r.stateNode;r.flags&32&&(yi(i,""),r.flags&=-33);var o=Kc(e);_a(e,o,i);break;case 3:case 4:var s=r.stateNode.containerInfo,a=Kc(e);Ea(e,a,s);break;default:throw Error(R(161))}}catch(u){je(e,e.return,u)}e.flags&=-3}t&4096&&(e.flags&=-4097)}function Oy(e,t,n){U=e,Gp(e)}function Gp(e,t,n){for(var r=(e.mode&1)!==0;U!==null;){var i=U,o=i.child;if(i.tag===22&&r){var s=i.memoizedState!==null||uo;if(!s){var a=i.alternate,u=a!==null&&a.memoizedState!==null||Ye;a=uo;var c=Ye;if(uo=s,(Ye=u)&&!c)for(U=i;U!==null;)s=U,u=s.child,s.tag===22&&s.memoizedState!==null?qc(i):u!==null?(u.return=s,U=u):qc(i);for(;o!==null;)U=o,Gp(o),o=o.sibling;U=i,uo=a,Ye=c}Gc(e)}else i.subtreeFlags&8772&&o!==null?(o.return=i,U=o):Gc(e)}}function Gc(e){for(;U!==null;){var t=U;if(t.flags&8772){var n=t.alternate;try{if(t.flags&8772)switch(t.tag){case 0:case 11:case 15:Ye||Ts(5,t);break;case 1:var r=t.stateNode;if(t.flags&4&&!Ye)if(n===null)r.componentDidMount();else{var i=t.elementType===t.type?n.memoizedProps:_t(t.type,n.memoizedProps);r.componentDidUpdate(i,n.memoizedState,r.__reactInternalSnapshotBeforeUpdate)}var o=t.updateQueue;o!==null&&Ac(t,o,r);break;case 3:var s=t.updateQueue;if(s!==null){if(n=null,t.child!==null)switch(t.child.tag){case 5:n=t.child.stateNode;break;case 1:n=t.child.stateNode}Ac(t,s,n)}break;case 5:var a=t.stateNode;if(n===null&&t.flags&4){n=a;var u=t.memoizedProps;switch(t.type){case"button":case"input":case"select":case"textarea":u.autoFocus&&n.focus();break;case"img":u.src&&(n.src=u.src)}}break;case 6:break;case 4:break;case 12:break;case 13:if(t.memoizedState===null){var c=t.alternate;if(c!==null){var m=c.memoizedState;if(m!==null){var f=m.dehydrated;f!==null&&ki(f)}}}break;case 19:case 17:case 21:case 22:case 23:case 25:break;default:throw Error(R(163))}Ye||t.flags&512&&ja(t)}catch(h){je(t,t.return,h)}}if(t===e){U=null;break}if(n=t.sibling,n!==null){n.return=t.return,U=n;break}U=t.return}}function Jc(e){for(;U!==null;){var t=U;if(t===e){U=null;break}var n=t.sibling;if(n!==null){n.return=t.return,U=n;break}U=t.return}}function qc(e){for(;U!==null;){var t=U;try{switch(t.tag){case 0:case 11:case 15:var n=t.return;try{Ts(4,t)}catch(u){je(t,n,u)}break;case 1:var r=t.stateNode;if(typeof r.componentDidMount=="function"){var i=t.return;try{r.componentDidMount()}catch(u){je(t,i,u)}}var o=t.return;try{ja(t)}catch(u){je(t,o,u)}break;case 5:var s=t.return;try{ja(t)}catch(u){je(t,s,u)}}}catch(u){je(t,t.return,u)}if(t===e){U=null;break}var a=t.sibling;if(a!==null){a.return=t.return,U=a;break}U=t.return}}var Ry=Math.ceil,ss=on.ReactCurrentDispatcher,ku=on.ReactCurrentOwner,xt=on.ReactCurrentBatchConfig,oe=0,Le=null,Pe=null,Ue=0,st=0,vr=Ln(0),Me=0,Mi=null,qn=0,Ps=0,Su=0,hi=null,et=null,ju=0,Nr=1/0,Kt=null,ls=!1,ba=null,On=null,co=!1,jn=null,as=0,mi=0,Ca=null,Oo=-1,Ro=0;function Je(){return oe&6?_e():Oo!==-1?Oo:Oo=_e()}function Rn(e){return e.mode&1?oe&2&&Ue!==0?Ue&-Ue:hy.transition!==null?(Ro===0&&(Ro=Af()),Ro):(e=de,e!==0||(e=window.event,e=e===void 0?16:$f(e.type)),e):1}function Rt(e,t,n,r){if(50<mi)throw mi=0,Ca=null,Error(R(185));Ii(e,n,r),(!(oe&2)||e!==Le)&&(e===Le&&(!(oe&2)&&(Ps|=n),Me===4&&wn(e,Ue)),it(e,r),n===1&&oe===0&&!(t.mode&1)&&(Nr=_e()+500,_s&&Dn()))}function it(e,t){var n=e.callbackNode;hg(e,t);var r=Ho(e,e===Le?Ue:0);if(r===0)n!==null&&lc(n),e.callbackNode=null,e.callbackPriority=0;else if(t=r&-r,e.callbackPriority!==t){if(n!=null&&lc(n),t===1)e.tag===0?py(Zc.bind(null,e)):op(Zc.bind(null,e)),uy(function(){!(oe&6)&&Dn()}),n=null;else{switch(Nf(r)){case 1:n=Xa;break;case 4:n=Rf;break;case 16:n=Wo;break;case 536870912:n=Mf;break;default:n=Wo}n=ih(n,Jp.bind(null,e))}e.callbackPriority=t,e.callbackNode=n}}function Jp(e,t){if(Oo=-1,Ro=0,oe&6)throw Error(R(327));var n=e.callbackNode;if(br()&&e.callbackNode!==n)return null;var r=Ho(e,e===Le?Ue:0);if(r===0)return null;if(r&30||r&e.expiredLanes||t)t=us(e,r);else{t=r;var i=oe;oe|=2;var o=Zp();(Le!==e||Ue!==t)&&(Kt=null,Nr=_e()+500,Yn(e,t));do try{Ny();break}catch(a){qp(e,a)}while(!0);au(),ss.current=o,oe=i,Pe!==null?t=0:(Le=null,Ue=0,t=Me)}if(t!==0){if(t===2&&(i=ea(e),i!==0&&(r=i,t=Ta(e,i))),t===1)throw n=Mi,Yn(e,0),wn(e,r),it(e,_e()),n;if(t===6)wn(e,r);else{if(i=e.current.alternate,!(r&30)&&!My(i)&&(t=us(e,r),t===2&&(o=ea(e),o!==0&&(r=o,t=Ta(e,o))),t===1))throw n=Mi,Yn(e,0),wn(e,r),it(e,_e()),n;switch(e.finishedWork=i,e.finishedLanes=r,t){case 0:case 1:throw Error(R(345));case 2:$n(e,et,Kt);break;case 3:if(wn(e,r),(r&130023424)===r&&(t=ju+500-_e(),10<t)){if(Ho(e,0)!==0)break;if(i=e.suspendedLanes,(i&r)!==r){Je(),e.pingedLanes|=e.suspendedLanes&i;break}e.timeoutHandle=aa($n.bind(null,e,et,Kt),t);break}$n(e,et,Kt);break;case 4:if(wn(e,r),(r&4194240)===r)break;for(t=e.eventTimes,i=-1;0<r;){var s=31-Ot(r);o=1<<s,s=t[s],s>i&&(i=s),r&=~o}if(r=i,r=_e()-r,r=(120>r?120:480>r?480:1080>r?1080:1920>r?1920:3e3>r?3e3:4320>r?4320:1960*Ry(r/1960))-r,10<r){e.timeoutHandle=aa($n.bind(null,e,et,Kt),r);break}$n(e,et,Kt);break;case 5:$n(e,et,Kt);break;default:throw Error(R(329))}}}return it(e,_e()),e.callbackNode===n?Jp.bind(null,e):null}function Ta(e,t){var n=hi;return e.current.memoizedState.isDehydrated&&(Yn(e,t).flags|=256),e=us(e,t),e!==2&&(t=et,et=n,t!==null&&Pa(t)),e}function Pa(e){et===null?et=e:et.push.apply(et,e)}function My(e){for(var t=e;;){if(t.flags&16384){var n=t.updateQueue;if(n!==null&&(n=n.stores,n!==null))for(var r=0;r<n.length;r++){var i=n[r],o=i.getSnapshot;i=i.value;try{if(!Mt(o(),i))return!1}catch{return!1}}}if(n=t.child,t.subtreeFlags&16384&&n!==null)n.return=t,t=n;else{if(t===e)break;for(;t.sibling===null;){if(t.return===null||t.return===e)return!0;t=t.return}t.sibling.return=t.return,t=t.sibling}}return!0}function wn(e,t){for(t&=~Su,t&=~Ps,e.suspendedLanes|=t,e.pingedLanes&=~t,e=e.expirationTimes;0<t;){var n=31-Ot(t),r=1<<n;e[n]=-1,t&=~r}}function Zc(e){if(oe&6)throw Error(R(327));br();var t=Ho(e,0);if(!(t&1))return it(e,_e()),null;var n=us(e,t);if(e.tag!==0&&n===2){var r=ea(e);r!==0&&(t=r,n=Ta(e,r))}if(n===1)throw n=Mi,Yn(e,0),wn(e,t),it(e,_e()),n;if(n===6)throw Error(R(345));return e.finishedWork=e.current.alternate,e.finishedLanes=t,$n(e,et,Kt),it(e,_e()),null}function Eu(e,t){var n=oe;oe|=1;try{return e(t)}finally{oe=n,oe===0&&(Nr=_e()+500,_s&&Dn())}}function Zn(e){jn!==null&&jn.tag===0&&!(oe&6)&&br();var t=oe;oe|=1;var n=xt.transition,r=de;try{if(xt.transition=null,de=1,e)return e()}finally{de=r,xt.transition=n,oe=t,!(oe&6)&&Dn()}}function _u(){st=vr.current,ye(vr)}function Yn(e,t){e.finishedWork=null,e.finishedLanes=0;var n=e.timeoutHandle;if(n!==-1&&(e.timeoutHandle=-1,ay(n)),Pe!==null)for(n=Pe.return;n!==null;){var r=n;switch(ou(r),r.tag){case 1:r=r.type.childContextTypes,r!=null&&Go();break;case 3:Mr(),ye(nt),ye(Ke),hu();break;case 5:pu(r);break;case 4:Mr();break;case 13:ye(we);break;case 19:ye(we);break;case 10:uu(r.type._context);break;case 22:case 23:_u()}n=n.return}if(Le=e,Pe=e=Mn(e.current,null),Ue=st=t,Me=0,Mi=null,Su=Ps=qn=0,et=hi=null,Bn!==null){for(t=0;t<Bn.length;t++)if(n=Bn[t],r=n.interleaved,r!==null){n.interleaved=null;var i=r.next,o=n.pending;if(o!==null){var s=o.next;o.next=i,r.next=s}n.pending=r}Bn=null}return e}function qp(e,t){do{var n=Pe;try{if(au(),Co.current=os,is){for(var r=ke.memoizedState;r!==null;){var i=r.queue;i!==null&&(i.pending=null),r=r.next}is=!1}if(Jn=0,ze=Re=ke=null,fi=!1,Pi=0,ku.current=null,n===null||n.return===null){Me=1,Mi=t,Pe=null;break}e:{var o=e,s=n.return,a=n,u=t;if(t=Ue,a.flags|=32768,u!==null&&typeof u=="object"&&typeof u.then=="function"){var c=u,m=a,f=m.tag;if(!(m.mode&1)&&(f===0||f===11||f===15)){var h=m.alternate;h?(m.updateQueue=h.updateQueue,m.memoizedState=h.memoizedState,m.lanes=h.lanes):(m.updateQueue=null,m.memoizedState=null)}var w=$c(s);if(w!==null){w.flags&=-257,Uc(w,s,a,o,t),w.mode&1&&Ic(o,c,t),t=w,u=c;var y=t.updateQueue;if(y===null){var x=new Set;x.add(u),t.updateQueue=x}else y.add(u);break e}else{if(!(t&1)){Ic(o,c,t),bu();break e}u=Error(R(426))}}else if(ve&&a.mode&1){var C=$c(s);if(C!==null){!(C.flags&65536)&&(C.flags|=256),Uc(C,s,a,o,t),su(Ar(u,a));break e}}o=u=Ar(u,a),Me!==4&&(Me=2),hi===null?hi=[o]:hi.push(o),o=s;do{switch(o.tag){case 3:o.flags|=65536,t&=-t,o.lanes|=t;var p=zp(o,u,t);Mc(o,p);break e;case 1:a=u;var d=o.type,g=o.stateNode;if(!(o.flags&128)&&(typeof d.getDerivedStateFromError=="function"||g!==null&&typeof g.componentDidCatch=="function"&&(On===null||!On.has(g)))){o.flags|=65536,t&=-t,o.lanes|=t;var k=Lp(o,a,t);Mc(o,k);break e}}o=o.return}while(o!==null)}th(n)}catch(_){t=_,Pe===n&&n!==null&&(Pe=n=n.return);continue}break}while(!0)}function Zp(){var e=ss.current;return ss.current=os,e===null?os:e}function bu(){(Me===0||Me===3||Me===2)&&(Me=4),Le===null||!(qn&268435455)&&!(Ps&268435455)||wn(Le,Ue)}function us(e,t){var n=oe;oe|=2;var r=Zp();(Le!==e||Ue!==t)&&(Kt=null,Yn(e,t));do try{Ay();break}catch(i){qp(e,i)}while(!0);if(au(),oe=n,ss.current=r,Pe!==null)throw Error(R(261));return Le=null,Ue=0,Me}function Ay(){for(;Pe!==null;)eh(Pe)}function Ny(){for(;Pe!==null&&!og();)eh(Pe)}function eh(e){var t=rh(e.alternate,e,st);e.memoizedProps=e.pendingProps,t===null?th(e):Pe=t,ku.current=null}function th(e){var t=e;do{var n=t.alternate;if(e=t.return,t.flags&32768){if(n=Cy(n,t),n!==null){n.flags&=32767,Pe=n;return}if(e!==null)e.flags|=32768,e.subtreeFlags=0,e.deletions=null;else{Me=6,Pe=null;return}}else if(n=by(n,t,st),n!==null){Pe=n;return}if(t=t.sibling,t!==null){Pe=t;return}Pe=t=e}while(t!==null);Me===0&&(Me=5)}function $n(e,t,n){var r=de,i=xt.transition;try{xt.transition=null,de=1,zy(e,t,n,r)}finally{xt.transition=i,de=r}return null}function zy(e,t,n,r){do br();while(jn!==null);if(oe&6)throw Error(R(327));n=e.finishedWork;var i=e.finishedLanes;if(n===null)return null;if(e.finishedWork=null,e.finishedLanes=0,n===e.current)throw Error(R(177));e.callbackNode=null,e.callbackPriority=0;var o=n.lanes|n.childLanes;if(mg(e,o),e===Le&&(Pe=Le=null,Ue=0),!(n.subtreeFlags&2064)&&!(n.flags&2064)||co||(co=!0,ih(Wo,function(){return br(),null})),o=(n.flags&15990)!==0,n.subtreeFlags&15990||o){o=xt.transition,xt.transition=null;var s=de;de=1;var a=oe;oe|=4,ku.current=null,Py(e,n),Xp(n,e),ty(sa),Qo=!!oa,sa=oa=null,e.current=n,Oy(n),sg(),oe=a,de=s,xt.transition=o}else e.current=n;if(co&&(co=!1,jn=e,as=i),o=e.pendingLanes,o===0&&(On=null),ug(n.stateNode),it(e,_e()),t!==null)for(r=e.onRecoverableError,n=0;n<t.length;n++)i=t[n],r(i.value,{componentStack:i.stack,digest:i.digest});if(ls)throw ls=!1,e=ba,ba=null,e;return as&1&&e.tag!==0&&br(),o=e.pendingLanes,o&1?e===Ca?mi++:(mi=0,Ca=e):mi=0,Dn(),null}function br(){if(jn!==null){var e=Nf(as),t=xt.transition,n=de;try{if(xt.transition=null,de=16>e?16:e,jn===null)var r=!1;else{if(e=jn,jn=null,as=0,oe&6)throw Error(R(331));var i=oe;for(oe|=4,U=e.current;U!==null;){var o=U,s=o.child;if(U.flags&16){var a=o.deletions;if(a!==null){for(var u=0;u<a.length;u++){var c=a[u];for(U=c;U!==null;){var m=U;switch(m.tag){case 0:case 11:case 15:pi(8,m,o)}var f=m.child;if(f!==null)f.return=m,U=f;else for(;U!==null;){m=U;var h=m.sibling,w=m.return;if(Qp(m),m===c){U=null;break}if(h!==null){h.return=w,U=h;break}U=w}}}var y=o.alternate;if(y!==null){var x=y.child;if(x!==null){y.child=null;do{var C=x.sibling;x.sibling=null,x=C}while(x!==null)}}U=o}}if(o.subtreeFlags&2064&&s!==null)s.return=o,U=s;else e:for(;U!==null;){if(o=U,o.flags&2048)switch(o.tag){case 0:case 11:case 15:pi(9,o,o.return)}var p=o.sibling;if(p!==null){p.return=o.return,U=p;break e}U=o.return}}var d=e.current;for(U=d;U!==null;){s=U;var g=s.child;if(s.subtreeFlags&2064&&g!==null)g.return=s,U=g;else e:for(s=d;U!==null;){if(a=U,a.flags&2048)try{switch(a.tag){case 0:case 11:case 15:Ts(9,a)}}catch(_){je(a,a.return,_)}if(a===s){U=null;break e}var k=a.sibling;if(k!==null){k.return=a.return,U=k;break e}U=a.return}}if(oe=i,Dn(),Bt&&typeof Bt.onPostCommitFiberRoot=="function")try{Bt.onPostCommitFiberRoot(ws,e)}catch{}r=!0}return r}finally{de=n,xt.transition=t}}return!1}function ed(e,t,n){t=Ar(n,t),t=zp(e,t,1),e=Pn(e,t,1),t=Je(),e!==null&&(Ii(e,1,t),it(e,t))}function je(e,t,n){if(e.tag===3)ed(e,e,n);else for(;t!==null;){if(t.tag===3){ed(t,e,n);break}else if(t.tag===1){var r=t.stateNode;if(typeof t.type.getDerivedStateFromError=="function"||typeof r.componentDidCatch=="function"&&(On===null||!On.has(r))){e=Ar(n,e),e=Lp(t,e,1),t=Pn(t,e,1),e=Je(),t!==null&&(Ii(t,1,e),it(t,e));break}}t=t.return}}function Ly(e,t,n){var r=e.pingCache;r!==null&&r.delete(t),t=Je(),e.pingedLanes|=e.suspendedLanes&n,Le===e&&(Ue&n)===n&&(Me===4||Me===3&&(Ue&130023424)===Ue&&500>_e()-ju?Yn(e,0):Su|=n),it(e,t)}function nh(e,t){t===0&&(e.mode&1?(t=eo,eo<<=1,!(eo&130023424)&&(eo=4194304)):t=1);var n=Je();e=nn(e,t),e!==null&&(Ii(e,t,n),it(e,n))}function Dy(e){var t=e.memoizedState,n=0;t!==null&&(n=t.retryLane),nh(e,n)}function Fy(e,t){var n=0;switch(e.tag){case 13:var r=e.stateNode,i=e.memoizedState;i!==null&&(n=i.retryLane);break;case 19:r=e.stateNode;break;default:throw Error(R(314))}r!==null&&r.delete(t),nh(e,n)}var rh;rh=function(e,t,n){if(e!==null)if(e.memoizedProps!==t.pendingProps||nt.current)tt=!0;else{if(!(e.lanes&n)&&!(t.flags&128))return tt=!1,_y(e,t,n);tt=!!(e.flags&131072)}else tt=!1,ve&&t.flags&1048576&&sp(t,Zo,t.index);switch(t.lanes=0,t.tag){case 2:var r=t.type;Po(e,t),e=t.pendingProps;var i=Pr(t,Ke.current);_r(t,n),i=gu(null,t,r,e,i,n);var o=yu();return t.flags|=1,typeof i=="object"&&i!==null&&typeof i.render=="function"&&i.$$typeof===void 0?(t.tag=1,t.memoizedState=null,t.updateQueue=null,rt(r)?(o=!0,Jo(t)):o=!1,t.memoizedState=i.state!==null&&i.state!==void 0?i.state:null,du(t),i.updater=bs,t.stateNode=i,i._reactInternals=t,ma(t,r,e,n),t=xa(null,t,r,!0,o,n)):(t.tag=0,ve&&o&&iu(t),Xe(null,t,i,n),t=t.child),t;case 16:r=t.elementType;e:{switch(Po(e,t),e=t.pendingProps,i=r._init,r=i(r._payload),t.type=r,i=t.tag=$y(r),e=_t(r,e),i){case 0:t=ya(null,t,r,e,n);break e;case 1:t=Wc(null,t,r,e,n);break e;case 11:t=Bc(null,t,r,e,n);break e;case 14:t=Vc(null,t,r,_t(r.type,e),n);break e}throw Error(R(306,r,""))}return t;case 0:return r=t.type,i=t.pendingProps,i=t.elementType===r?i:_t(r,i),ya(e,t,r,i,n);case 1:return r=t.type,i=t.pendingProps,i=t.elementType===r?i:_t(r,i),Wc(e,t,r,i,n);case 3:e:{if($p(t),e===null)throw Error(R(387));r=t.pendingProps,o=t.memoizedState,i=o.element,cp(e,t),ns(t,r,null,n);var s=t.memoizedState;if(r=s.element,o.isDehydrated)if(o={element:r,isDehydrated:!1,cache:s.cache,pendingSuspenseBoundaries:s.pendingSuspenseBoundaries,transitions:s.transitions},t.updateQueue.baseState=o,t.memoizedState=o,t.flags&256){i=Ar(Error(R(423)),t),t=Hc(e,t,r,n,i);break e}else if(r!==i){i=Ar(Error(R(424)),t),t=Hc(e,t,r,n,i);break e}else for(lt=Tn(t.stateNode.containerInfo.firstChild),at=t,ve=!0,Tt=null,n=hp(t,null,r,n),t.child=n;n;)n.flags=n.flags&-3|4096,n=n.sibling;else{if(Or(),r===i){t=rn(e,t,n);break e}Xe(e,t,r,n)}t=t.child}return t;case 5:return mp(t),e===null&&fa(t),r=t.type,i=t.pendingProps,o=e!==null?e.memoizedProps:null,s=i.children,la(r,i)?s=null:o!==null&&la(r,o)&&(t.flags|=32),Ip(e,t),Xe(e,t,s,n),t.child;case 6:return e===null&&fa(t),null;case 13:return Up(e,t,n);case 4:return fu(t,t.stateNode.containerInfo),r=t.pendingProps,e===null?t.child=Rr(t,null,r,n):Xe(e,t,r,n),t.child;case 11:return r=t.type,i=t.pendingProps,i=t.elementType===r?i:_t(r,i),Bc(e,t,r,i,n);case 7:return Xe(e,t,t.pendingProps,n),t.child;case 8:return Xe(e,t,t.pendingProps.children,n),t.child;case 12:return Xe(e,t,t.pendingProps.children,n),t.child;case 10:e:{if(r=t.type._context,i=t.pendingProps,o=t.memoizedProps,s=i.value,he(es,r._currentValue),r._currentValue=s,o!==null)if(Mt(o.value,s)){if(o.children===i.children&&!nt.current){t=rn(e,t,n);break e}}else for(o=t.child,o!==null&&(o.return=t);o!==null;){var a=o.dependencies;if(a!==null){s=o.child;for(var u=a.firstContext;u!==null;){if(u.context===r){if(o.tag===1){u=qt(-1,n&-n),u.tag=2;var c=o.updateQueue;if(c!==null){c=c.shared;var m=c.pending;m===null?u.next=u:(u.next=m.next,m.next=u),c.pending=u}}o.lanes|=n,u=o.alternate,u!==null&&(u.lanes|=n),pa(o.return,n,t),a.lanes|=n;break}u=u.next}}else if(o.tag===10)s=o.type===t.type?null:o.child;else if(o.tag===18){if(s=o.return,s===null)throw Error(R(341));s.lanes|=n,a=s.alternate,a!==null&&(a.lanes|=n),pa(s,n,t),s=o.sibling}else s=o.child;if(s!==null)s.return=o;else for(s=o;s!==null;){if(s===t){s=null;break}if(o=s.sibling,o!==null){o.return=s.return,s=o;break}s=s.return}o=s}Xe(e,t,i.children,n),t=t.child}return t;case 9:return i=t.type,r=t.pendingProps.children,_r(t,n),i=wt(i),r=r(i),t.flags|=1,Xe(e,t,r,n),t.child;case 14:return r=t.type,i=_t(r,t.pendingProps),i=_t(r.type,i),Vc(e,t,r,i,n);case 15:return Dp(e,t,t.type,t.pendingProps,n);case 17:return r=t.type,i=t.pendingProps,i=t.elementType===r?i:_t(r,i),Po(e,t),t.tag=1,rt(r)?(e=!0,Jo(t)):e=!1,_r(t,n),fp(t,r,i),ma(t,r,i,n),xa(null,t,r,!0,e,n);case 19:return Bp(e,t,n);case 22:return Fp(e,t,n)}throw Error(R(156,t.tag))};function ih(e,t){return Of(e,t)}function Iy(e,t,n,r){this.tag=e,this.key=n,this.sibling=this.child=this.return=this.stateNode=this.type=this.elementType=null,this.index=0,this.ref=null,this.pendingProps=t,this.dependencies=this.memoizedState=this.updateQueue=this.memoizedProps=null,this.mode=r,this.subtreeFlags=this.flags=0,this.deletions=null,this.childLanes=this.lanes=0,this.alternate=null}function yt(e,t,n,r){return new Iy(e,t,n,r)}function Cu(e){return e=e.prototype,!(!e||!e.isReactComponent)}function $y(e){if(typeof e=="function")return Cu(e)?1:0;if(e!=null){if(e=e.$$typeof,e===Qa)return 11;if(e===Ya)return 14}return 2}function Mn(e,t){var n=e.alternate;return n===null?(n=yt(e.tag,t,e.key,e.mode),n.elementType=e.elementType,n.type=e.type,n.stateNode=e.stateNode,n.alternate=e,e.alternate=n):(n.pendingProps=t,n.type=e.type,n.flags=0,n.subtreeFlags=0,n.deletions=null),n.flags=e.flags&14680064,n.childLanes=e.childLanes,n.lanes=e.lanes,n.child=e.child,n.memoizedProps=e.memoizedProps,n.memoizedState=e.memoizedState,n.updateQueue=e.updateQueue,t=e.dependencies,n.dependencies=t===null?null:{lanes:t.lanes,firstContext:t.firstContext},n.sibling=e.sibling,n.index=e.index,n.ref=e.ref,n}function Mo(e,t,n,r,i,o){var s=2;if(r=e,typeof e=="function")Cu(e)&&(s=1);else if(typeof e=="string")s=5;else e:switch(e){case ur:return Kn(n.children,i,o,t);case Ha:s=8,i|=8;break;case Il:return e=yt(12,n,t,i|2),e.elementType=Il,e.lanes=o,e;case $l:return e=yt(13,n,t,i),e.elementType=$l,e.lanes=o,e;case Ul:return e=yt(19,n,t,i),e.elementType=Ul,e.lanes=o,e;case pf:return Os(n,i,o,t);default:if(typeof e=="object"&&e!==null)switch(e.$$typeof){case df:s=10;break e;case ff:s=9;break e;case Qa:s=11;break e;case Ya:s=14;break e;case yn:s=16,r=null;break e}throw Error(R(130,e==null?e:typeof e,""))}return t=yt(s,n,t,i),t.elementType=e,t.type=r,t.lanes=o,t}function Kn(e,t,n,r){return e=yt(7,e,r,t),e.lanes=n,e}function Os(e,t,n,r){return e=yt(22,e,r,t),e.elementType=pf,e.lanes=n,e.stateNode={isHidden:!1},e}function gl(e,t,n){return e=yt(6,e,null,t),e.lanes=n,e}function yl(e,t,n){return t=yt(4,e.children!==null?e.children:[],e.key,t),t.lanes=n,t.stateNode={containerInfo:e.containerInfo,pendingChildren:null,implementation:e.implementation},t}function Uy(e,t,n,r,i){this.tag=t,this.containerInfo=e,this.finishedWork=this.pingCache=this.current=this.pendingChildren=null,this.timeoutHandle=-1,this.callbackNode=this.pendingContext=this.context=null,this.callbackPriority=0,this.eventTimes=Js(0),this.expirationTimes=Js(-1),this.entangledLanes=this.finishedLanes=this.mutableReadLanes=this.expiredLanes=this.pingedLanes=this.suspendedLanes=this.pendingLanes=0,this.entanglements=Js(0),this.identifierPrefix=r,this.onRecoverableError=i,this.mutableSourceEagerHydrationData=null}function Tu(e,t,n,r,i,o,s,a,u){return e=new Uy(e,t,n,a,u),t===1?(t=1,o===!0&&(t|=8)):t=0,o=yt(3,null,null,t),e.current=o,o.stateNode=e,o.memoizedState={element:r,isDehydrated:n,cache:null,transitions:null,pendingSuspenseBoundaries:null},du(o),e}function By(e,t,n){var r=3<arguments.length&&arguments[3]!==void 0?arguments[3]:null;return{$$typeof:ar,key:r==null?null:""+r,children:e,containerInfo:t,implementation:n}}function oh(e){if(!e)return Nn;e=e._reactInternals;e:{if(tr(e)!==e||e.tag!==1)throw Error(R(170));var t=e;do{switch(t.tag){case 3:t=t.stateNode.context;break e;case 1:if(rt(t.type)){t=t.stateNode.__reactInternalMemoizedMergedChildContext;break e}}t=t.return}while(t!==null);throw Error(R(171))}if(e.tag===1){var n=e.type;if(rt(n))return ip(e,n,t)}return t}function sh(e,t,n,r,i,o,s,a,u){return e=Tu(n,r,!0,e,i,o,s,a,u),e.context=oh(null),n=e.current,r=Je(),i=Rn(n),o=qt(r,i),o.callback=t??null,Pn(n,o,i),e.current.lanes=i,Ii(e,i,r),it(e,r),e}function Rs(e,t,n,r){var i=t.current,o=Je(),s=Rn(i);return n=oh(n),t.context===null?t.context=n:t.pendingContext=n,t=qt(o,s),t.payload={element:e},r=r===void 0?null:r,r!==null&&(t.callback=r),e=Pn(i,t,s),e!==null&&(Rt(e,i,s,o),bo(e,i,s)),s}function cs(e){if(e=e.current,!e.child)return null;switch(e.child.tag){case 5:return e.child.stateNode;default:return e.child.stateNode}}function td(e,t){if(e=e.memoizedState,e!==null&&e.dehydrated!==null){var n=e.retryLane;e.retryLane=n!==0&&n<t?n:t}}function Pu(e,t){td(e,t),(e=e.alternate)&&td(e,t)}function Vy(){return null}var lh=typeof reportError=="function"?reportError:function(e){console.error(e)};function Ou(e){this._internalRoot=e}Ms.prototype.render=Ou.prototype.render=function(e){var t=this._internalRoot;if(t===null)throw Error(R(409));Rs(e,t,null,null)};Ms.prototype.unmount=Ou.prototype.unmount=function(){var e=this._internalRoot;if(e!==null){this._internalRoot=null;var t=e.containerInfo;Zn(function(){Rs(null,e,null,null)}),t[tn]=null}};function Ms(e){this._internalRoot=e}Ms.prototype.unstable_scheduleHydration=function(e){if(e){var t=Df();e={blockedOn:null,target:e,priority:t};for(var n=0;n<vn.length&&t!==0&&t<vn[n].priority;n++);vn.splice(n,0,e),n===0&&If(e)}};function Ru(e){return!(!e||e.nodeType!==1&&e.nodeType!==9&&e.nodeType!==11)}function As(e){return!(!e||e.nodeType!==1&&e.nodeType!==9&&e.nodeType!==11&&(e.nodeType!==8||e.nodeValue!==" react-mount-point-unstable "))}function nd(){}function Wy(e,t,n,r,i){if(i){if(typeof r=="function"){var o=r;r=function(){var c=cs(s);o.call(c)}}var s=sh(t,r,e,0,null,!1,!1,"",nd);return e._reactRootContainer=s,e[tn]=s.current,Ei(e.nodeType===8?e.parentNode:e),Zn(),s}for(;i=e.lastChild;)e.removeChild(i);if(typeof r=="function"){var a=r;r=function(){var c=cs(u);a.call(c)}}var u=Tu(e,0,!1,null,null,!1,!1,"",nd);return e._reactRootContainer=u,e[tn]=u.current,Ei(e.nodeType===8?e.parentNode:e),Zn(function(){Rs(t,u,n,r)}),u}function Ns(e,t,n,r,i){var o=n._reactRootContainer;if(o){var s=o;if(typeof i=="function"){var a=i;i=function(){var u=cs(s);a.call(u)}}Rs(t,s,e,i)}else s=Wy(n,t,e,i,r);return cs(s)}zf=function(e){switch(e.tag){case 3:var t=e.stateNode;if(t.current.memoizedState.isDehydrated){var n=oi(t.pendingLanes);n!==0&&(Ga(t,n|1),it(t,_e()),!(oe&6)&&(Nr=_e()+500,Dn()))}break;case 13:Zn(function(){var r=nn(e,1);if(r!==null){var i=Je();Rt(r,e,1,i)}}),Pu(e,1)}};Ja=function(e){if(e.tag===13){var t=nn(e,134217728);if(t!==null){var n=Je();Rt(t,e,134217728,n)}Pu(e,134217728)}};Lf=function(e){if(e.tag===13){var t=Rn(e),n=nn(e,t);if(n!==null){var r=Je();Rt(n,e,t,r)}Pu(e,t)}};Df=function(){return de};Ff=function(e,t){var n=de;try{return de=e,t()}finally{de=n}};Jl=function(e,t,n){switch(t){case"input":if(Wl(e,n),t=n.name,n.type==="radio"&&t!=null){for(n=e;n.parentNode;)n=n.parentNode;for(n=n.querySelectorAll("input[name="+JSON.stringify(""+t)+'][type="radio"]'),t=0;t<n.length;t++){var r=n[t];if(r!==e&&r.form===e.form){var i=Es(r);if(!i)throw Error(R(90));mf(r),Wl(r,i)}}}break;case"textarea":yf(e,n);break;case"select":t=n.value,t!=null&&kr(e,!!n.multiple,t,!1)}};Ef=Eu;_f=Zn;var Hy={usingClientEntryPoint:!1,Events:[Ui,pr,Es,Sf,jf,Eu]},Xr={findFiberByHostInstance:Un,bundleType:0,version:"18.2.0",rendererPackageName:"react-dom"},Qy={bundleType:Xr.bundleType,version:Xr.version,rendererPackageName:Xr.rendererPackageName,rendererConfig:Xr.rendererConfig,overrideHookState:null,overrideHookStateDeletePath:null,overrideHookStateRenamePath:null,overrideProps:null,overridePropsDeletePath:null,overridePropsRenamePath:null,setErrorHandler:null,setSuspenseHandler:null,scheduleUpdate:null,currentDispatcherRef:on.ReactCurrentDispatcher,findHostInstanceByFiber:function(e){return e=Tf(e),e===null?null:e.stateNode},findFiberByHostInstance:Xr.findFiberByHostInstance||Vy,findHostInstancesForRefresh:null,scheduleRefresh:null,scheduleRoot:null,setRefreshHandler:null,getCurrentFiber:null,reconcilerVersion:"18.2.0-next-9e3b772b8-20220608"};if(typeof __REACT_DEVTOOLS_GLOBAL_HOOK__<"u"){var fo=__REACT_DEVTOOLS_GLOBAL_HOOK__;if(!fo.isDisabled&&fo.supportsFiber)try{ws=fo.inject(Qy),Bt=fo}catch{}}dt.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED=Hy;dt.createPortal=function(e,t){var n=2<arguments.length&&arguments[2]!==void 0?arguments[2]:null;if(!Ru(t))throw Error(R(200));return By(e,t,null,n)};dt.createRoot=function(e,t){if(!Ru(e))throw Error(R(299));var n=!1,r="",i=lh;return t!=null&&(t.unstable_strictMode===!0&&(n=!0),t.identifierPrefix!==void 0&&(r=t.identifierPrefix),t.onRecoverableError!==void 0&&(i=t.onRecoverableError)),t=Tu(e,1,!1,null,null,n,!1,r,i),e[tn]=t.current,Ei(e.nodeType===8?e.parentNode:e),new Ou(t)};dt.findDOMNode=function(e){if(e==null)return null;if(e.nodeType===1)return e;var t=e._reactInternals;if(t===void 0)throw typeof e.render=="function"?Error(R(188)):(e=Object.keys(e).join(","),Error(R(268,e)));return e=Tf(t),e=e===null?null:e.stateNode,e};dt.flushSync=function(e){return Zn(e)};dt.hydrate=function(e,t,n){if(!As(t))throw Error(R(200));return Ns(null,e,t,!0,n)};dt.hydrateRoot=function(e,t,n){if(!Ru(e))throw Error(R(405));var r=n!=null&&n.hydratedSources||null,i=!1,o="",s=lh;if(n!=null&&(n.unstable_strictMode===!0&&(i=!0),n.identifierPrefix!==void 0&&(o=n.identifierPrefix),n.onRecoverableError!==void 0&&(s=n.onRecoverableError)),t=sh(t,null,e,1,n??null,i,!1,o,s),e[tn]=t.current,Ei(e),r)for(e=0;e<r.length;e++)n=r[e],i=n._getVersion,i=i(n._source),t.mutableSourceEagerHydrationData==null?t.mutableSourceEagerHydrationData=[n,i]:t.mutableSourceEagerHydrationData.push(n,i);return new Ms(t)};dt.render=function(e,t,n){if(!As(t))throw Error(R(200));return Ns(null,e,t,!1,n)};dt.unmountComponentAtNode=function(e){if(!As(e))throw Error(R(40));return e._reactRootContainer?(Zn(function(){Ns(null,null,e,!1,function(){e._reactRootContainer=null,e[tn]=null})}),!0):!1};dt.unstable_batchedUpdates=Eu;dt.unstable_renderSubtreeIntoContainer=function(e,t,n,r){if(!As(n))throw Error(R(200));if(e==null||e._reactInternals===void 0)throw Error(R(38));return Ns(e,t,n,!1,r)};dt.version="18.2.0-next-9e3b772b8-20220608";function ah(){if(!(typeof __REACT_DEVTOOLS_GLOBAL_HOOK__>"u"||typeof __REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE!="function"))try{__REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE(ah)}catch(e){console.error(e)}}ah(),sf.exports=dt;var Mu=sf.exports;const Yy=xs(Mu);var rd=Mu;Dl.createRoot=rd.createRoot,Dl.hydrateRoot=rd.hydrateRoot;const xl="/healthy-management-project/assets/olga_picture1x-48yp0Cvc.webp",Ky="/healthy-management-project/assets/olga_picture@2x-dFelWgxd.jpg",Xy="/healthy-management-project/assets/olga_picture1x-ohcXIDw6.jpg",Gy="/healthy-management-project/assets/mob_olga_picture@2x-jz3O2U-O.jpg",Jy="/healthy-management-project/assets/mob_olga_picture1x-PQXysebb.jpg",qy="/healthy-management-project/assets/mob_olga_picture1x-YL2VUwPK.webp",K="/healthy-management-project/assets/sprite-EuI-mRGf.svg";function Oa(){return Oa=Object.assign?Object.assign.bind():function(e){for(var t=1;t<arguments.length;t++){var n=arguments[t];for(var r in n)Object.prototype.hasOwnProperty.call(n,r)&&(e[r]=n[r])}return e},Oa.apply(this,arguments)}function uh(e){var t=Object.create(null);return function(n){return t[n]===void 0&&(t[n]=e(n)),t[n]}}var Zy=/^((children|dangerouslySetInnerHTML|key|ref|autoFocus|defaultValue|defaultChecked|innerHTML|suppressContentEditableWarning|suppressHydrationWarning|valueLink|abbr|accept|acceptCharset|accessKey|action|allow|allowUserMedia|allowPaymentRequest|allowFullScreen|allowTransparency|alt|async|autoComplete|autoPlay|capture|cellPadding|cellSpacing|challenge|charSet|checked|cite|classID|className|cols|colSpan|content|contentEditable|contextMenu|controls|controlsList|coords|crossOrigin|data|dateTime|decoding|default|defer|dir|disabled|disablePictureInPicture|download|draggable|encType|enterKeyHint|form|formAction|formEncType|formMethod|formNoValidate|formTarget|frameBorder|headers|height|hidden|high|href|hrefLang|htmlFor|httpEquiv|id|inputMode|integrity|is|keyParams|keyType|kind|label|lang|list|loading|loop|low|marginHeight|marginWidth|max|maxLength|media|mediaGroup|method|min|minLength|multiple|muted|name|nonce|noValidate|open|optimum|pattern|placeholder|playsInline|poster|preload|profile|radioGroup|readOnly|referrerPolicy|rel|required|reversed|role|rows|rowSpan|sandbox|scope|scoped|scrolling|seamless|selected|shape|size|sizes|slot|span|spellCheck|src|srcDoc|srcLang|srcSet|start|step|style|summary|tabIndex|target|title|translate|type|useMap|value|width|wmode|wrap|about|datatype|inlist|prefix|property|resource|typeof|vocab|autoCapitalize|autoCorrect|autoSave|color|incremental|fallback|inert|itemProp|itemScope|itemType|itemID|itemRef|on|option|results|security|unselectable|accentHeight|accumulate|additive|alignmentBaseline|allowReorder|alphabetic|amplitude|arabicForm|ascent|attributeName|attributeType|autoReverse|azimuth|baseFrequency|baselineShift|baseProfile|bbox|begin|bias|by|calcMode|capHeight|clip|clipPathUnits|clipPath|clipRule|colorInterpolation|colorInterpolationFilters|colorProfile|colorRendering|contentScriptType|contentStyleType|cursor|cx|cy|d|decelerate|descent|diffuseConstant|direction|display|divisor|dominantBaseline|dur|dx|dy|edgeMode|elevation|enableBackground|end|exponent|externalResourcesRequired|fill|fillOpacity|fillRule|filter|filterRes|filterUnits|floodColor|floodOpacity|focusable|fontFamily|fontSize|fontSizeAdjust|fontStretch|fontStyle|fontVariant|fontWeight|format|from|fr|fx|fy|g1|g2|glyphName|glyphOrientationHorizontal|glyphOrientationVertical|glyphRef|gradientTransform|gradientUnits|hanging|horizAdvX|horizOriginX|ideographic|imageRendering|in|in2|intercept|k|k1|k2|k3|k4|kernelMatrix|kernelUnitLength|kerning|keyPoints|keySplines|keyTimes|lengthAdjust|letterSpacing|lightingColor|limitingConeAngle|local|markerEnd|markerMid|markerStart|markerHeight|markerUnits|markerWidth|mask|maskContentUnits|maskUnits|mathematical|mode|numOctaves|offset|opacity|operator|order|orient|orientation|origin|overflow|overlinePosition|overlineThickness|panose1|paintOrder|pathLength|patternContentUnits|patternTransform|patternUnits|pointerEvents|points|pointsAtX|pointsAtY|pointsAtZ|preserveAlpha|preserveAspectRatio|primitiveUnits|r|radius|refX|refY|renderingIntent|repeatCount|repeatDur|requiredExtensions|requiredFeatures|restart|result|rotate|rx|ry|scale|seed|shapeRendering|slope|spacing|specularConstant|specularExponent|speed|spreadMethod|startOffset|stdDeviation|stemh|stemv|stitchTiles|stopColor|stopOpacity|strikethroughPosition|strikethroughThickness|string|stroke|strokeDasharray|strokeDashoffset|strokeLinecap|strokeLinejoin|strokeMiterlimit|strokeOpacity|strokeWidth|surfaceScale|systemLanguage|tableValues|targetX|targetY|textAnchor|textDecoration|textRendering|textLength|to|transform|u1|u2|underlinePosition|underlineThickness|unicode|unicodeBidi|unicodeRange|unitsPerEm|vAlphabetic|vHanging|vIdeographic|vMathematical|values|vectorEffect|version|vertAdvY|vertOriginX|vertOriginY|viewBox|viewTarget|visibility|widths|wordSpacing|writingMode|x|xHeight|x1|x2|xChannelSelector|xlinkActuate|xlinkArcrole|xlinkHref|xlinkRole|xlinkShow|xlinkTitle|xlinkType|xmlBase|xmlns|xmlnsXlink|xmlLang|xmlSpace|y|y1|y2|yChannelSelector|z|zoomAndPan|for|class|autofocus)|(([Dd][Aa][Tt][Aa]|[Aa][Rr][Ii][Aa]|x)-.*))$/,ex=uh(function(e){return Zy.test(e)||e.charCodeAt(0)===111&&e.charCodeAt(1)===110&&e.charCodeAt(2)<91});function tx(e){if(e.sheet)return e.sheet;for(var t=0;t<document.styleSheets.length;t++)if(document.styleSheets[t].ownerNode===e)return document.styleSheets[t]}function nx(e){var t=document.createElement("style");return t.setAttribute("data-emotion",e.key),e.nonce!==void 0&&t.setAttribute("nonce",e.nonce),t.appendChild(document.createTextNode("")),t.setAttribute("data-s",""),t}var rx=function(){function e(n){var r=this;this._insertTag=function(i){var o;r.tags.length===0?r.insertionPoint?o=r.insertionPoint.nextSibling:r.prepend?o=r.container.firstChild:o=r.before:o=r.tags[r.tags.length-1].nextSibling,r.container.insertBefore(i,o),r.tags.push(i)},this.isSpeedy=n.speedy===void 0?!0:n.speedy,this.tags=[],this.ctr=0,this.nonce=n.nonce,this.key=n.key,this.container=n.container,this.prepend=n.prepend,this.insertionPoint=n.insertionPoint,this.before=null}var t=e.prototype;return t.hydrate=function(r){r.forEach(this._insertTag)},t.insert=function(r){this.ctr%(this.isSpeedy?65e3:1)===0&&this._insertTag(nx(this));var i=this.tags[this.tags.length-1];if(this.isSpeedy){var o=tx(i);try{o.insertRule(r,o.cssRules.length)}catch{}}else i.appendChild(document.createTextNode(r));this.ctr++},t.flush=function(){this.tags.forEach(function(r){return r.parentNode&&r.parentNode.removeChild(r)}),this.tags=[],this.ctr=0},e}(),Qe="-ms-",ds="-moz-",se="-webkit-",ch="comm",Au="rule",Nu="decl",ix="@import",dh="@keyframes",ox="@layer",sx=Math.abs,zs=String.fromCharCode,lx=Object.assign;function ax(e,t){return $e(e,0)^45?(((t<<2^$e(e,0))<<2^$e(e,1))<<2^$e(e,2))<<2^$e(e,3):0}function fh(e){return e.trim()}function ux(e,t){return(e=t.exec(e))?e[0]:e}function le(e,t,n){return e.replace(t,n)}function Ra(e,t){return e.indexOf(t)}function $e(e,t){return e.charCodeAt(t)|0}function Ai(e,t,n){return e.slice(t,n)}function Dt(e){return e.length}function zu(e){return e.length}function po(e,t){return t.push(e),e}function cx(e,t){return e.map(t).join("")}var Ls=1,zr=1,ph=0,ot=0,Te=0,$r="";function Ds(e,t,n,r,i,o,s){return{value:e,root:t,parent:n,type:r,props:i,children:o,line:Ls,column:zr,length:s,return:""}}function Gr(e,t){return lx(Ds("",null,null,"",null,null,0),e,{length:-e.length},t)}function dx(){return Te}function fx(){return Te=ot>0?$e($r,--ot):0,zr--,Te===10&&(zr=1,Ls--),Te}function ut(){return Te=ot<ph?$e($r,ot++):0,zr++,Te===10&&(zr=1,Ls++),Te}function Wt(){return $e($r,ot)}function Ao(){return ot}function Vi(e,t){return Ai($r,e,t)}function Ni(e){switch(e){case 0:case 9:case 10:case 13:case 32:return 5;case 33:case 43:case 44:case 47:case 62:case 64:case 126:case 59:case 123:case 125:return 4;case 58:return 3;case 34:case 39:case 40:case 91:return 2;case 41:case 93:return 1}return 0}function hh(e){return Ls=zr=1,ph=Dt($r=e),ot=0,[]}function mh(e){return $r="",e}function No(e){return fh(Vi(ot-1,Ma(e===91?e+2:e===40?e+1:e)))}function px(e){for(;(Te=Wt())&&Te<33;)ut();return Ni(e)>2||Ni(Te)>3?"":" "}function hx(e,t){for(;--t&&ut()&&!(Te<48||Te>102||Te>57&&Te<65||Te>70&&Te<97););return Vi(e,Ao()+(t<6&&Wt()==32&&ut()==32))}function Ma(e){for(;ut();)switch(Te){case e:return ot;case 34:case 39:e!==34&&e!==39&&Ma(Te);break;case 40:e===41&&Ma(e);break;case 92:ut();break}return ot}function mx(e,t){for(;ut()&&e+Te!==57;)if(e+Te===84&&Wt()===47)break;return"/*"+Vi(t,ot-1)+"*"+zs(e===47?e:ut())}function gx(e){for(;!Ni(Wt());)ut();return Vi(e,ot)}function yx(e){return mh(zo("",null,null,null,[""],e=hh(e),0,[0],e))}function zo(e,t,n,r,i,o,s,a,u){for(var c=0,m=0,f=s,h=0,w=0,y=0,x=1,C=1,p=1,d=0,g="",k=i,_=o,P=r,b=g;C;)switch(y=d,d=ut()){case 40:if(y!=108&&$e(b,f-1)==58){Ra(b+=le(No(d),"&","&\f"),"&\f")!=-1&&(p=-1);break}case 34:case 39:case 91:b+=No(d);break;case 9:case 10:case 13:case 32:b+=px(y);break;case 92:b+=hx(Ao()-1,7);continue;case 47:switch(Wt()){case 42:case 47:po(xx(mx(ut(),Ao()),t,n),u);break;default:b+="/"}break;case 123*x:a[c++]=Dt(b)*p;case 125*x:case 59:case 0:switch(d){case 0:case 125:C=0;case 59+m:p==-1&&(b=le(b,/\f/g,"")),w>0&&Dt(b)-f&&po(w>32?od(b+";",r,n,f-1):od(le(b," ","")+";",r,n,f-2),u);break;case 59:b+=";";default:if(po(P=id(b,t,n,c,m,i,a,g,k=[],_=[],f),o),d===123)if(m===0)zo(b,t,P,P,k,o,f,a,_);else switch(h===99&&$e(b,3)===110?100:h){case 100:case 108:case 109:case 115:zo(e,P,P,r&&po(id(e,P,P,0,0,i,a,g,i,k=[],f),_),i,_,f,a,r?k:_);break;default:zo(b,P,P,P,[""],_,0,a,_)}}c=m=w=0,x=p=1,g=b="",f=s;break;case 58:f=1+Dt(b),w=y;default:if(x<1){if(d==123)--x;else if(d==125&&x++==0&&fx()==125)continue}switch(b+=zs(d),d*x){case 38:p=m>0?1:(b+="\f",-1);break;case 44:a[c++]=(Dt(b)-1)*p,p=1;break;case 64:Wt()===45&&(b+=No(ut())),h=Wt(),m=f=Dt(g=b+=gx(Ao())),d++;break;case 45:y===45&&Dt(b)==2&&(x=0)}}return o}function id(e,t,n,r,i,o,s,a,u,c,m){for(var f=i-1,h=i===0?o:[""],w=zu(h),y=0,x=0,C=0;y<r;++y)for(var p=0,d=Ai(e,f+1,f=sx(x=s[y])),g=e;p<w;++p)(g=fh(x>0?h[p]+" "+d:le(d,/&\f/g,h[p])))&&(u[C++]=g);return Ds(e,t,n,i===0?Au:a,u,c,m)}function xx(e,t,n){return Ds(e,t,n,ch,zs(dx()),Ai(e,2,-2),0)}function od(e,t,n,r){return Ds(e,t,n,Nu,Ai(e,0,r),Ai(e,r+1,-1),r)}function Cr(e,t){for(var n="",r=zu(e),i=0;i<r;i++)n+=t(e[i],i,e,t)||"";return n}function vx(e,t,n,r){switch(e.type){case ox:if(e.children.length)break;case ix:case Nu:return e.return=e.return||e.value;case ch:return"";case dh:return e.return=e.value+"{"+Cr(e.children,r)+"}";case Au:e.value=e.props.join(",")}return Dt(n=Cr(e.children,r))?e.return=e.value+"{"+n+"}":""}function wx(e){var t=zu(e);return function(n,r,i,o){for(var s="",a=0;a<t;a++)s+=e[a](n,r,i,o)||"";return s}}function kx(e){return function(t){t.root||(t=t.return)&&e(t)}}var Sx=function(t,n,r){for(var i=0,o=0;i=o,o=Wt(),i===38&&o===12&&(n[r]=1),!Ni(o);)ut();return Vi(t,ot)},jx=function(t,n){var r=-1,i=44;do switch(Ni(i)){case 0:i===38&&Wt()===12&&(n[r]=1),t[r]+=Sx(ot-1,n,r);break;case 2:t[r]+=No(i);break;case 4:if(i===44){t[++r]=Wt()===58?"&\f":"",n[r]=t[r].length;break}default:t[r]+=zs(i)}while(i=ut());return t},Ex=function(t,n){return mh(jx(hh(t),n))},sd=new WeakMap,_x=function(t){if(!(t.type!=="rule"||!t.parent||t.length<1)){for(var n=t.value,r=t.parent,i=t.column===r.column&&t.line===r.line;r.type!=="rule";)if(r=r.parent,!r)return;if(!(t.props.length===1&&n.charCodeAt(0)!==58&&!sd.get(r))&&!i){sd.set(t,!0);for(var o=[],s=Ex(n,o),a=r.props,u=0,c=0;u<s.length;u++)for(var m=0;m<a.length;m++,c++)t.props[c]=o[u]?s[u].replace(/&\f/g,a[m]):a[m]+" "+s[u]}}},bx=function(t){if(t.type==="decl"){var n=t.value;n.charCodeAt(0)===108&&n.charCodeAt(2)===98&&(t.return="",t.value="")}};function gh(e,t){switch(ax(e,t)){case 5103:return se+"print-"+e+e;case 5737:case 4201:case 3177:case 3433:case 1641:case 4457:case 2921:case 5572:case 6356:case 5844:case 3191:case 6645:case 3005:case 6391:case 5879:case 5623:case 6135:case 4599:case 4855:case 4215:case 6389:case 5109:case 5365:case 5621:case 3829:return se+e+e;case 5349:case 4246:case 4810:case 6968:case 2756:return se+e+ds+e+Qe+e+e;case 6828:case 4268:return se+e+Qe+e+e;case 6165:return se+e+Qe+"flex-"+e+e;case 5187:return se+e+le(e,/(\w+).+(:[^]+)/,se+"box-$1$2"+Qe+"flex-$1$2")+e;case 5443:return se+e+Qe+"flex-item-"+le(e,/flex-|-self/,"")+e;case 4675:return se+e+Qe+"flex-line-pack"+le(e,/align-content|flex-|-self/,"")+e;case 5548:return se+e+Qe+le(e,"shrink","negative")+e;case 5292:return se+e+Qe+le(e,"basis","preferred-size")+e;case 6060:return se+"box-"+le(e,"-grow","")+se+e+Qe+le(e,"grow","positive")+e;case 4554:return se+le(e,/([^-])(transform)/g,"$1"+se+"$2")+e;case 6187:return le(le(le(e,/(zoom-|grab)/,se+"$1"),/(image-set)/,se+"$1"),e,"")+e;case 5495:case 3959:return le(e,/(image-set\([^]*)/,se+"$1$`$1");case 4968:return le(le(e,/(.+:)(flex-)?(.*)/,se+"box-pack:$3"+Qe+"flex-pack:$3"),/s.+-b[^;]+/,"justify")+se+e+e;case 4095:case 3583:case 4068:case 2532:return le(e,/(.+)-inline(.+)/,se+"$1$2")+e;case 8116:case 7059:case 5753:case 5535:case 5445:case 5701:case 4933:case 4677:case 5533:case 5789:case 5021:case 4765:if(Dt(e)-1-t>6)switch($e(e,t+1)){case 109:if($e(e,t+4)!==45)break;case 102:return le(e,/(.+:)(.+)-([^]+)/,"$1"+se+"$2-$3$1"+ds+($e(e,t+3)==108?"$3":"$2-$3"))+e;case 115:return~Ra(e,"stretch")?gh(le(e,"stretch","fill-available"),t)+e:e}break;case 4949:if($e(e,t+1)!==115)break;case 6444:switch($e(e,Dt(e)-3-(~Ra(e,"!important")&&10))){case 107:return le(e,":",":"+se)+e;case 101:return le(e,/(.+:)([^;!]+)(;|!.+)?/,"$1"+se+($e(e,14)===45?"inline-":"")+"box$3$1"+se+"$2$3$1"+Qe+"$2box$3")+e}break;case 5936:switch($e(e,t+11)){case 114:return se+e+Qe+le(e,/[svh]\w+-[tblr]{2}/,"tb")+e;case 108:return se+e+Qe+le(e,/[svh]\w+-[tblr]{2}/,"tb-rl")+e;case 45:return se+e+Qe+le(e,/[svh]\w+-[tblr]{2}/,"lr")+e}return se+e+Qe+e+e}return e}var Cx=function(t,n,r,i){if(t.length>-1&&!t.return)switch(t.type){case Nu:t.return=gh(t.value,t.length);break;case dh:return Cr([Gr(t,{value:le(t.value,"@","@"+se)})],i);case Au:if(t.length)return cx(t.props,function(o){switch(ux(o,/(::plac\w+|:read-\w+)/)){case":read-only":case":read-write":return Cr([Gr(t,{props:[le(o,/:(read-\w+)/,":"+ds+"$1")]})],i);case"::placeholder":return Cr([Gr(t,{props:[le(o,/:(plac\w+)/,":"+se+"input-$1")]}),Gr(t,{props:[le(o,/:(plac\w+)/,":"+ds+"$1")]}),Gr(t,{props:[le(o,/:(plac\w+)/,Qe+"input-$1")]})],i)}return""})}},Tx=[Cx],Px=function(t){var n=t.key;if(n==="css"){var r=document.querySelectorAll("style[data-emotion]:not([data-s])");Array.prototype.forEach.call(r,function(x){var C=x.getAttribute("data-emotion");C.indexOf(" ")!==-1&&(document.head.appendChild(x),x.setAttribute("data-s",""))})}var i=t.stylisPlugins||Tx,o={},s,a=[];s=t.container||document.head,Array.prototype.forEach.call(document.querySelectorAll('style[data-emotion^="'+n+' "]'),function(x){for(var C=x.getAttribute("data-emotion").split(" "),p=1;p<C.length;p++)o[C[p]]=!0;a.push(x)});var u,c=[_x,bx];{var m,f=[vx,kx(function(x){m.insert(x)})],h=wx(c.concat(i,f)),w=function(C){return Cr(yx(C),h)};u=function(C,p,d,g){m=d,w(C?C+"{"+p.styles+"}":p.styles),g&&(y.inserted[p.name]=!0)}}var y={key:n,sheet:new rx({key:n,container:s,nonce:t.nonce,speedy:t.speedy,prepend:t.prepend,insertionPoint:t.insertionPoint}),nonce:t.nonce,inserted:o,registered:{},insert:u};return y.sheet.hydrate(a),y},Ox=!0;function Rx(e,t,n){var r="";return n.split(" ").forEach(function(i){e[i]!==void 0?t.push(e[i]+";"):r+=i+" "}),r}var yh=function(t,n,r){var i=t.key+"-"+n.name;(r===!1||Ox===!1)&&t.registered[i]===void 0&&(t.registered[i]=n.styles)},Mx=function(t,n,r){yh(t,n,r);var i=t.key+"-"+n.name;if(t.inserted[n.name]===void 0){var o=n;do t.insert(n===o?"."+i:"",o,t.sheet,!0),o=o.next;while(o!==void 0)}};function Ax(e){for(var t=0,n,r=0,i=e.length;i>=4;++r,i-=4)n=e.charCodeAt(r)&255|(e.charCodeAt(++r)&255)<<8|(e.charCodeAt(++r)&255)<<16|(e.charCodeAt(++r)&255)<<24,n=(n&65535)*1540483477+((n>>>16)*59797<<16),n^=n>>>24,t=(n&65535)*1540483477+((n>>>16)*59797<<16)^(t&65535)*1540483477+((t>>>16)*59797<<16);switch(i){case 3:t^=(e.charCodeAt(r+2)&255)<<16;case 2:t^=(e.charCodeAt(r+1)&255)<<8;case 1:t^=e.charCodeAt(r)&255,t=(t&65535)*1540483477+((t>>>16)*59797<<16)}return t^=t>>>13,t=(t&65535)*1540483477+((t>>>16)*59797<<16),((t^t>>>15)>>>0).toString(36)}var Nx={animationIterationCount:1,aspectRatio:1,borderImageOutset:1,borderImageSlice:1,borderImageWidth:1,boxFlex:1,boxFlexGroup:1,boxOrdinalGroup:1,columnCount:1,columns:1,flex:1,flexGrow:1,flexPositive:1,flexShrink:1,flexNegative:1,flexOrder:1,gridRow:1,gridRowEnd:1,gridRowSpan:1,gridRowStart:1,gridColumn:1,gridColumnEnd:1,gridColumnSpan:1,gridColumnStart:1,msGridRow:1,msGridRowSpan:1,msGridColumn:1,msGridColumnSpan:1,fontWeight:1,lineHeight:1,opacity:1,order:1,orphans:1,tabSize:1,widows:1,zIndex:1,zoom:1,WebkitLineClamp:1,fillOpacity:1,floodOpacity:1,stopOpacity:1,strokeDasharray:1,strokeDashoffset:1,strokeMiterlimit:1,strokeOpacity:1,strokeWidth:1},zx=/[A-Z]|^ms/g,Lx=/_EMO_([^_]+?)_([^]*?)_EMO_/g,xh=function(t){return t.charCodeAt(1)===45},ld=function(t){return t!=null&&typeof t!="boolean"},vl=uh(function(e){return xh(e)?e:e.replace(zx,"-$&").toLowerCase()}),ad=function(t,n){switch(t){case"animation":case"animationName":if(typeof n=="string")return n.replace(Lx,function(r,i,o){return Ft={name:i,styles:o,next:Ft},i})}return Nx[t]!==1&&!xh(t)&&typeof n=="number"&&n!==0?n+"px":n};function zi(e,t,n){if(n==null)return"";if(n.__emotion_styles!==void 0)return n;switch(typeof n){case"boolean":return"";case"object":{if(n.anim===1)return Ft={name:n.name,styles:n.styles,next:Ft},n.name;if(n.styles!==void 0){var r=n.next;if(r!==void 0)for(;r!==void 0;)Ft={name:r.name,styles:r.styles,next:Ft},r=r.next;var i=n.styles+";";return i}return Dx(e,t,n)}case"function":{if(e!==void 0){var o=Ft,s=n(e);return Ft=o,zi(e,t,s)}break}}if(t==null)return n;var a=t[n];return a!==void 0?a:n}function Dx(e,t,n){var r="";if(Array.isArray(n))for(var i=0;i<n.length;i++)r+=zi(e,t,n[i])+";";else for(var o in n){var s=n[o];if(typeof s!="object")t!=null&&t[s]!==void 0?r+=o+"{"+t[s]+"}":ld(s)&&(r+=vl(o)+":"+ad(o,s)+";");else if(Array.isArray(s)&&typeof s[0]=="string"&&(t==null||t[s[0]]===void 0))for(var a=0;a<s.length;a++)ld(s[a])&&(r+=vl(o)+":"+ad(o,s[a])+";");else{var u=zi(e,t,s);switch(o){case"animation":case"animationName":{r+=vl(o)+":"+u+";";break}default:r+=o+"{"+u+"}"}}}return r}var ud=/label:\s*([^\s;\n{]+)\s*(;|$)/g,Ft,Fx=function(t,n,r){if(t.length===1&&typeof t[0]=="object"&&t[0]!==null&&t[0].styles!==void 0)return t[0];var i=!0,o="";Ft=void 0;var s=t[0];s==null||s.raw===void 0?(i=!1,o+=zi(r,n,s)):o+=s[0];for(var a=1;a<t.length;a++)o+=zi(r,n,t[a]),i&&(o+=s[a]);ud.lastIndex=0;for(var u="",c;(c=ud.exec(o))!==null;)u+="-"+c[1];var m=Ax(o)+u;return{name:m,styles:o,next:Ft}},Ix=function(t){return t()},$x=Ju.useInsertionEffect?Ju.useInsertionEffect:!1,Ux=$x||Ix,vh=ue.createContext(typeof HTMLElement<"u"?Px({key:"css"}):null);vh.Provider;var Bx=function(t){return ue.forwardRef(function(n,r){var i=ue.useContext(vh);return t(n,i,r)})},Vx=ue.createContext({}),Wx=ex,Hx=function(t){return t!=="theme"},cd=function(t){return typeof t=="string"&&t.charCodeAt(0)>96?Wx:Hx},dd=function(t,n,r){var i;if(n){var o=n.shouldForwardProp;i=t.__emotion_forwardProp&&o?function(s){return t.__emotion_forwardProp(s)&&o(s)}:o}return typeof i!="function"&&r&&(i=t.__emotion_forwardProp),i},Qx=function(t){var n=t.cache,r=t.serialized,i=t.isStringTag;return yh(n,r,i),Ux(function(){return Mx(n,r,i)}),null},Yx=function e(t,n){var r=t.__emotion_real===t,i=r&&t.__emotion_base||t,o,s;n!==void 0&&(o=n.label,s=n.target);var a=dd(t,n,r),u=a||cd(i),c=!u("as");return function(){var m=arguments,f=r&&t.__emotion_styles!==void 0?t.__emotion_styles.slice(0):[];if(o!==void 0&&f.push("label:"+o+";"),m[0]==null||m[0].raw===void 0)f.push.apply(f,m);else{f.push(m[0][0]);for(var h=m.length,w=1;w<h;w++)f.push(m[w],m[0][w])}var y=Bx(function(x,C,p){var d=c&&x.as||i,g="",k=[],_=x;if(x.theme==null){_={};for(var P in x)_[P]=x[P];_.theme=ue.useContext(Vx)}typeof x.className=="string"?g=Rx(C.registered,k,x.className):x.className!=null&&(g=x.className+" ");var b=Fx(f.concat(k),C.registered,_);g+=C.key+"-"+b.name,s!==void 0&&(g+=" "+s);var N=c&&a===void 0?cd(d):u,O={};for(var z in x)c&&z==="as"||N(z)&&(O[z]=x[z]);return O.className=g,O.ref=p,ue.createElement(ue.Fragment,null,ue.createElement(Qx,{cache:C,serialized:b,isStringTag:typeof d=="string"}),ue.createElement(d,O))});return y.displayName=o!==void 0?o:"Styled("+(typeof i=="string"?i:i.displayName||i.name||"Component")+")",y.defaultProps=t.defaultProps,y.__emotion_real=y,y.__emotion_base=i,y.__emotion_styles=f,y.__emotion_forwardProp=a,Object.defineProperty(y,"toString",{value:function(){return"."+s}}),y.withComponent=function(x,C){return e(x,Oa({},n,C,{shouldForwardProp:dd(y,C,!0)})).apply(void 0,f)},y}},Kx=["a","abbr","address","area","article","aside","audio","b","base","bdi","bdo","big","blockquote","body","br","button","canvas","caption","cite","code","col","colgroup","data","datalist","dd","del","details","dfn","dialog","div","dl","dt","em","embed","fieldset","figcaption","figure","footer","form","h1","h2","h3","h4","h5","h6","head","header","hgroup","hr","html","i","iframe","img","input","ins","kbd","keygen","label","legend","li","link","main","map","mark","marquee","menu","menuitem","meta","meter","nav","noscript","object","ol","optgroup","option","output","p","param","picture","pre","progress","q","rp","rt","ruby","s","samp","script","section","select","small","source","span","strong","style","sub","summary","sup","table","tbody","td","textarea","tfoot","th","thead","time","title","tr","track","u","ul","var","video","wbr","circle","clipPath","defs","ellipse","foreignObject","g","image","line","linearGradient","mask","path","pattern","polygon","polyline","radialGradient","rect","stop","svg","text","tspan"],E=Yx.bind();Kx.forEach(function(e){E[e]=E(e)});const Xx=E.section`
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
`,Gx=E.h2`
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
`,Jx=E.div`
  display: flex;
  flex-direction: column;
  gap: 24px;

  @media screen and (min-width: 768px) {
    display: flex;
    flex-direction: row;
    gap: 24px;
  }
`,qx=E.div`
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
`,Zx=E.h3`
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
`,e0=E.p`
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
`,Fn=E.li`
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
`,t0=E.ul`
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
`,wl=E.a`
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
`,kl=E.svg`
  margin-left: 10px;
`,n0=E.div`
  // width: calc((100% - 24px) / 2);
  max-width: 327px;
  border-radius: 16px;

  @media screen and (min-width: 768px) {
    // width: calc((100% - 24px) / 2);
    max-width: 828px;
    border-radius: 16px;
  }
`,r0=()=>l.jsx(Xx,{children:l.jsxs("div",{children:[l.jsx(Gx,{children:"Про мене"}),l.jsxs(Jx,{children:[l.jsx(n0,{children:l.jsxs("picture",{children:[l.jsx("source",{srcSet:`${xl} 2x, ${xl} 1x`,media:"(min-width: 768px)",type:"image/webp"}),l.jsx("source",{srcSet:`${Ky} 2x, ${Xy} 1x`,media:"(min-width: 768px)",type:"image/png"}),l.jsx("source",{srcSet:`${qy}`,media:"(min-width: 375px)",type:"image/webp"}),l.jsx("source",{srcSet:`${Gy} 2x, ${Jy} 1x`,media:"(min-width: 375px)",type:"image/png"}),l.jsx("img",{src:xl,alt:"Ольга Поліщук",width:"828px"})]})}),l.jsxs(qx,{children:[l.jsx(Zx,{children:"Ольга Поліщук"}),l.jsx(e0,{children:"CEO and Founder студії стратегічного розвитку"}),l.jsxs("ul",{children:[l.jsx(Fn,{children:"MBA Healthcare management"}),l.jsx(Fn,{children:"Викладачка медичного маркетингу Бізнес-школа УКУ (LvBS)"}),l.jsx(Fn,{children:`Експертка в "Центр Розвитку Громадського Здоров'я УКУ"`}),l.jsx(Fn,{children:"Бізнес-консультантка, стратег з медичного маркетингу"}),l.jsx(Fn,{children:'Керівниця проєкту "Стетоскоп" - телеграм канал про медичний менеджмент та маркетингу'}),l.jsx(Fn,{children:"Більше 18 років досвіду в маркетингу та комунікаціях, з них більше 10 років досвіду в медичному та фармацевтичному бізнесі на керівних посадах"}),l.jsx(Fn,{children:"Використання принципів доказової медицини"})]}),l.jsxs(t0,{children:[l.jsx("li",{children:l.jsxs(wl,{href:"https://www.linkedin.com/in/olga-polishchuk-83362140/",target:"_blank",rel:"noopener noreferrer",children:["LinkedIn",l.jsx(kl,{width:"24",height:"24",children:l.jsx("use",{href:`${K}#icon-arrow-up-right`})})]})}),l.jsx("li",{children:l.jsxs(wl,{href:"https://www.facebook.com/olga.polishchuk.14",target:"_blank",rel:"noopener noreferrer",children:["Facebook",l.jsx(kl,{width:"24",height:"24",children:l.jsx("use",{href:`${K}#icon-arrow-up-right`})})]})}),l.jsx("li",{children:l.jsxs(wl,{href:"https://www.instagram.com/olga_healthm/",target:"_blank",rel:"noopener noreferrer",children:["Instagram",l.jsx(kl,{width:"24",height:"24",children:l.jsx("use",{href:`${K}#icon-arrow-up-right`})})]})})]})]})]})]})}),i0=E.section`
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
`,o0=E.h2`
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
`,s0=E.div`
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
`,l0=E.p`
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
`,a0=E.p`
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
`,fd=E.div`
  display: flex;
  gap: 16px;
  align-items: center;
  margin-bottom: 16px;
`,u0=E.div`
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
`,c0=E.h4`
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
`,d0=E.div`
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
`,f0=E.h4`
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
`,p0=E.p`
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
`,h0=E.svg`
  fill: var(--primary-bluedark, #1b3641);
  border-radius: 100px;
  background: rgba(27, 54, 65, 0.2);
  width: 32px;
  height: 32px;
`,m0=E.svg`
  fill: var(--background-white, #fcfcfc);
  border-radius: 100px;
  background: rgba(244, 244, 246, 0.2);
  width: 32px;
  height: 32px;
`,g0=()=>l.jsxs(i0,{id:"aboutUs",children:[l.jsx(o0,{children:"Про студію"}),l.jsxs(s0,{children:[l.jsx("div",{children:l.jsx(l0,{children:"Студія стратегічного розвитку медичних брендів «Healthy management» надає послуги медичного менеджменту, медичного маркетингу, консалтингу бізнес-процесів та створення стратегій здоров’я для підприємств та бізнесу. Ми співпрацюємо з медичними закладами, лікарями, власниками, керівниками та створюємо спільні стратегії та дії для ефективного просування та розвитку проєктів, використовуючи комплексний підхід"})}),l.jsxs(d0,{children:[l.jsxs(fd,{children:[l.jsx(m0,{children:l.jsx("use",{href:`${K}#icon-star`})}),l.jsx(f0,{children:"Наша місія"})]}),l.jsx(p0,{children:"Будуємо ефективні стратегії по управлінню здоров’ям та створюємо продуктивні дії для популяризації здорового менеджменту"})]}),l.jsxs(u0,{children:[l.jsxs(fd,{children:[l.jsx(h0,{children:l.jsx("use",{href:`${K}#icon-star`})}),l.jsx(c0,{children:"Наші цінності"})]}),l.jsx(a0,{children:"Повага, довіра, партнерство та експертність. Будуємо нову культуру управління здоровим менеджментом у медичній галузі"})]})]})]}),y0=E.section`
  padding-top: 80px;
  padding-bottom: 80px;
`,x0=E.div`
  width: 100%;
  border-radius: 16px;
  padding: 80px;
  background-color: var(--background-bluedark);
`,v0=E.h2`
  margin-bottom: 40px;
  font-size: 48px;
  font-weight: 600;
  line-height: 1.17;
  color: var(--system-default-10);

  & span {
    color: var(--primary-yellow);
  }
`,w0=E.ul`
  display: flex;
  justify-content: space-between;
  gap: 24px;
  padding: 24px 0;
`,k0=E.li`
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
`,S0=[{id:1,tool:"Матриця стейкхолдерів"},{id:2,tool:"SWOT аналіз"},{id:3,tool:"Bussines model canvas"},{id:4,tool:"Value proposition canvas"},{id:5,tool:"Customer journey map"}],j0=()=>l.jsx(y0,{className:"container",children:l.jsxs(x0,{children:[l.jsxs(v0,{children:["Бізнес ",l.jsx("span",{children:"інструменти"}),", які використувуємо в партнерстві"]}),l.jsx(w0,{children:S0.map(e=>l.jsx(k0,{children:e.tool},e.id))})]})});var wh={exports:{}},E0="SECRET_DO_NOT_PASS_THIS_OR_YOU_WILL_BE_FIRED",_0=E0,b0=_0;function kh(){}function Sh(){}Sh.resetWarningCache=kh;var C0=function(){function e(r,i,o,s,a,u){if(u!==b0){var c=new Error("Calling PropTypes validators directly is not supported by the `prop-types` package. Use PropTypes.checkPropTypes() to call them. Read more at http://fb.me/use-check-prop-types");throw c.name="Invariant Violation",c}}e.isRequired=e;function t(){return e}var n={array:e,bigint:e,bool:e,func:e,number:e,object:e,string:e,symbol:e,any:e,arrayOf:t,element:e,elementType:e,instanceOf:t,node:e,objectOf:t,oneOf:t,oneOfType:t,shape:t,exact:t,checkPropTypes:Sh,resetWarningCache:kh};return n.PropTypes=n,n};wh.exports=C0();var T0=wh.exports;const Li=xs(T0),Wn="/healthy-management-project/assets/icon-footer-MBx-ujYN.svg",P0=E.div`
  padding: 40px 0 0 0;
  background-color: var(--background-bluedark);
`,O0=E.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
  margin-bottom: 40px;
`,R0=E.a`
  font-size: 16px;
  font-weight: 500;
  line-height: 1.5;
  cursor: pointer;
  border-bottom: 1px solid rgba(244, 244, 246, 0.4);
  color: var(--system-default-10);
`,M0=E.div`
  display: flex;
  align-items: center;
  gap: 40px;
`,Jr=E.a`
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
`,A0=E.div`
  display: flex;
  gap: 40px;
`,N0=E.div`
  display: flex;
  gap: 16px;
  align-items: center;
`,z0=E.a`
  padding: 8px;

  & svg {
    border-radius: 10px;
    background-color: var(--background-white);
    opacity: 0.8;
  }
`,L0=E.div`
  display: flex;
  flex-direction: column;
`,pd=E.a`
  font-size: 16px;
  font-weight: 500;
  line-height: 1.5;
  color: var(--system-default-10);
`,D0=E.p`
  padding: 16px 0;
  text-align: center;
  font-size: 12px;
  font-weight: 600;
  line-height: 1.67;
  text-transform: uppercase;
  border-top: 1px solid var(--system-default-20);
  color: var(--system-default-10);
`,F0=E.div`
  position: fixed;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  background-color: rgba(0, 0, 0, 0.5);
  overflow: hidden;
  z-index: 1100;
`,I0=E.div`
  padding: 80px;
  position: fixed;
  width: 1360px;
  border-radius: 24px;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
  background-color: white;
  z-index: 10000;
`,$0=E.div`
  height: 32px;
  display: flex;
  justify-content: space-between;
  margin-bottom: 40px;
`,U0=E.svg`
  width: 24px;
  cursor: pointer;
`,B0=E.h2`
  font-size: 24px;
  font-weight: 600;
  line-height: 32px;
  color: var(--typography-bluedark);
`,V0=E.ul`
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

  a {
    text-decoration: none;
    color: inherit;
    display: flex;
    align-items: center;
    gap: 8px;
  }
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
`,fn=E.div`
  display: flex;
  flex-direction: column;
  gap: 8px;
`,pn=E.div`
  border-radius: 8px;
  overflow: hidden;
`,hn=E.img`
  border-radius: 8px;

  &:hover {
    transform: scale(1.1);
    border-radius: 8px;
  }
`,hd="/healthy-management-project/assets/Jilia_Kopytko-mYhzlt_-.webp",W0="/healthy-management-project/assets/Jilia_Kopytko@2x-gruKrAtD.jpg",md="/healthy-management-project/assets/Yelyzaveta_Domanska-Ru7up7Pj.webp",H0="/healthy-management-project/assets/Yelyzaveta_Domanska@2x-BYkqrL88.jpg",gd="/healthy-management-project/assets/Oleksandr_Natalukha-YKEBbXyu.webp",Q0="/healthy-management-project/assets/Oleksandr_Natalukha@2x-5OsrctvL.jpg",yd="/healthy-management-project/assets/Valentyn_Havrylenko-ouVcypag.webp",Y0="/healthy-management-project/assets/Valentyn_Havrylenko@2x-xBjJM6nL.jpg",xd="/healthy-management-project/assets/Olha_Abent-lPe8g7w1.webp",K0="/healthy-management-project/assets/Olha_Abent@2x-fGgXmj71.jpg",vd="/healthy-management-project/assets/Viktoriia_Moryc-tWw5-4of.webp",X0="/healthy-management-project/assets/Viktoriia_Moryc@2x-AxiRex6x.jpg",wd="/healthy-management-project/assets/Vyacheslav_Pavlyuk-py_hj3lz.webp",G0="/healthy-management-project/assets/Vyacheslav_Pavlyuk@2x-2qCtSSAb.jpg",kd="/healthy-management-project/assets/Yaroslav_Li-nn0P6bIv.webp",J0="/healthy-management-project/assets/Yaroslav_Li@2x-xfuqLdiI.jpg",jh=({handleClose:e,isModalOpen:t})=>{const n=i=>{i.target===i.currentTarget&&e()};ue.useEffect(()=>{const i=document.body,o=()=>{t?i.classList.add("body-no-scroll"):i.classList.remove("body-no-scroll")},s=a=>{a.code==="Escape"&&t&&e()};return o(),window.addEventListener("keydown",s),()=>{window.removeEventListener("keydown",s)}},[e,t]);const r=document.getElementById("modal");return t?Yy.createPortal(l.jsx(F0,{onClick:n,children:l.jsxs(I0,{isModalOpen:t,children:[l.jsxs($0,{children:[l.jsx(B0,{children:"Команда, яка створила сторінку"}),l.jsx(U0,{onClick:e,children:l.jsx("use",{href:`${K}#icon-close`})})]}),l.jsxs(V0,{children:[l.jsx(an,{children:l.jsxs(dn,{children:[l.jsx(pn,{children:l.jsx(hn,{src:vd,srcSet:`${vd} 1x, ${X0} 2x`,alt:"Вікторія Мориц"})}),l.jsxs(fn,{children:[l.jsx(un,{children:l.jsxs("a",{href:"https://www.linkedin.com/in/viktoriia-moryc-61610962/",target:"_blank",rel:"noopener noreferrer",children:["Вікторія Мориц",l.jsx("svg",{width:"24",height:"24",children:l.jsx("use",{href:`${K}#icon-linkedin`})})]})}),l.jsx(cn,{children:"Project Manager"})]})]})}),l.jsx(an,{children:l.jsxs(dn,{children:[l.jsx(pn,{children:l.jsx(hn,{src:hd,srcSet:`${hd} 1x, ${W0} 2x`,alt:"Юлія Копитко"})}),l.jsxs(fn,{children:[" ",l.jsx(un,{children:l.jsxs("a",{href:"https://www.linkedin.com/in/juliakopytko/",target:"_blank",rel:"noopener noreferrer",children:["Юлія Копитко",l.jsx("svg",{width:"24",height:"24",children:l.jsx("use",{href:`${K}#icon-linkedin`})})]})}),l.jsx(cn,{children:"UX/UI Designer"})]})]})}),l.jsx(an,{children:l.jsxs(dn,{children:[l.jsx(pn,{children:l.jsx(hn,{src:kd,srcSet:`${kd} 1x, ${J0} 2x`,alt:"Ярослав Лі"})}),l.jsxs(fn,{children:[l.jsx(un,{children:l.jsxs("a",{href:"https://www.linkedin.com/in/yaroslav-lee-b7070b294",target:"_blank",rel:"noopener noreferrer",children:["Ярослав Лі",l.jsx("svg",{width:"24",height:"24",children:l.jsx("use",{href:`${K}#icon-linkedin`})})]})}),l.jsx(cn,{children:"Frontend Developer"})]})]})}),l.jsx(an,{children:l.jsxs(dn,{children:[l.jsx(pn,{children:l.jsx(hn,{src:md,srcSet:`${md} 1x, ${H0} 2x`,alt:"Єлизавета Доманська"})}),l.jsxs(fn,{children:[l.jsx(un,{children:l.jsxs("a",{href:"https://www.linkedin.com/in/yelyzaveta-domanska-2185a5292/",target:"_blank",rel:"noopener noreferrer",children:["Єлизавета Доманська",l.jsx("svg",{width:"24",height:"24",children:l.jsx("use",{href:`${K}#icon-linkedin`})})]})}),l.jsx(cn,{children:"Frontend Developer"})]})]})}),l.jsx(an,{children:l.jsxs(dn,{children:[l.jsx(pn,{children:l.jsx(hn,{src:gd,srcSet:`${gd} 1x, ${Q0} 2x`,alt:"Олександр Наталуха"})}),l.jsxs(fn,{children:[l.jsx(un,{children:l.jsxs("a",{href:"https://www.linkedin.com/in/oleksandr-natalukha",target:"_blank",rel:"noopener noreferrer",children:["Олександр Наталуха",l.jsx("svg",{width:"24",height:"24",children:l.jsx("use",{href:`${K}#icon-linkedin`})})]})}),l.jsx(cn,{children:"Frontend Developer"})]})]})}),l.jsx(an,{children:l.jsxs(dn,{children:[l.jsx(pn,{children:l.jsx(hn,{src:yd,srcSet:`${yd} 1x, ${Y0} 2x`,alt:"Валентин Гавриленко"})}),l.jsxs(fn,{children:[l.jsx(un,{children:l.jsxs("a",{href:"https://www.linkedin.com/in/valentyn-havrylenko/",target:"_blank",rel:"noopener noreferrer",children:["Валентин Гавриленко",l.jsx("svg",{width:"24",height:"24",children:l.jsx("use",{href:`${K}#icon-linkedin`})})]})}),l.jsx(cn,{children:"Frontend Developer"})]})]})}),l.jsx(an,{children:l.jsxs(dn,{children:[l.jsx(pn,{children:l.jsx(hn,{src:wd,srcSet:`${wd} 1x, ${G0} 2x`,alt:"В´ячеслав Павлюк"})}),l.jsxs(fn,{children:[l.jsx(un,{children:l.jsxs("a",{href:"https://www.linkedin.com/in/vyacheslav-pavlyuk/",target:"_blank",rel:"noopener noreferrer",children:["В'ячеслав Павлюк",l.jsx("svg",{width:"24",height:"24",children:l.jsx("use",{href:`${K}#icon-linkedin`})})]})}),l.jsx(cn,{children:"Fullstack Developer"})]})]})}),l.jsx(an,{children:l.jsxs(dn,{children:[l.jsx(pn,{children:l.jsx(hn,{src:xd,srcSet:`${xd} 1x, ${K0} 2x`,alt:"Ольга Абент"})}),l.jsxs(fn,{children:[l.jsx(un,{children:l.jsxs("a",{href:"https://www.linkedin.com/in/abentolga/",target:"_blank",rel:"noopener noreferrer",children:["Ольга Абент",l.jsx("svg",{width:"24",height:"24",children:l.jsx("use",{href:`${K}#icon-linkedin`})})]})}),l.jsx(cn,{children:"QA Engineer"})]})]})})]})]})}),r):null};jh.propTypes={handleClose:Li.func.isRequired,isModalOpen:Li.bool.isRequired};const Eh=({handleSetActiveLink:e})=>{const[t,n]=ue.useState(!1),r=()=>{n(!0)},i=()=>{n(!1)};return l.jsxs(P0,{id:"footer",children:[l.jsxs(O0,{className:"container",children:[l.jsx("svg",{width:"227",height:"40",children:l.jsx("use",{href:`${Wn}#logo-white`})}),l.jsx(R0,{onClick:r,children:"created by GoIT students"}),l.jsx(jh,{handleClose:i,isModalOpen:t}),l.jsxs(M0,{children:[l.jsx(Jr,{href:"#home",onClick:o=>e("home",o),children:"Головна"}),l.jsx(Jr,{href:"#aboutUs",onClick:o=>e("aboutUs",o),children:"Про нас"}),l.jsx(Jr,{href:"#services",onClick:o=>e("services",o),children:"Послуги"}),l.jsx(Jr,{href:"#mentoring",onClick:o=>e("mentoring",o),children:"Менторство"}),l.jsx(Jr,{href:"#projects",onClick:o=>e("projects",o),children:"Проєкти"})]}),l.jsxs(A0,{children:[l.jsxs(N0,{children:[l.jsx(z0,{href:"https://www.facebook.com/profile.php?id=61551346490841",target:"_blank",rel:"noopener noreferrer",children:l.jsx("svg",{width:"32",height:"32",children:l.jsx("use",{href:`${Wn}#facebook`})})}),l.jsx("a",{href:"https://www.instagram.com/healthymanagement_ua/",target:"_blank",rel:"noopener noreferrer",children:l.jsx("svg",{width:"40",height:"40",children:l.jsx("use",{href:`${Wn}#instagram`})})})]}),l.jsxs(L0,{children:[l.jsx(pd,{href:"mailto:managementhealthy@gmail.com",children:"managementhealthy@gmail.com"}),l.jsx(pd,{href:"tel:+380673160556",children:"+380 673 160 556"})]})]})]}),l.jsx(D0,{children:"© 2023 healthy managment. All rights reserved"})]})};Eh.propTypes={handleSetActiveLink:Li.func.isRequired};const fs="/healthy-management-project/assets/symbol-defs-t7xx9-KA.svg",q0=E.header`
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
`,Z0=E.div`
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
`,ev=E.nav`
  display: flex;
  gap: 40px;
  align-items: center;
`,qr=E.a`
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
`,tv=E.a`
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
`,nv=E.svg`
  stroke: black;
  width: 40px;
  height: 40px;
`,rv=E.button`
  border: none;
  padding: 0;
  margin: 0;
  text-decoration: none;
  font-family: inherit;
  font-size: 100%;
  cursor: pointer;
  background: none;
`;var _h={exports:{}};(function(e,t){(function(r,i){e.exports=i(ue)})(Sm,n=>(()=>{var r={"./node_modules/css-mediaquery/index.js":(a,u)=>{u.match=y,u.parse=x;var c=/(?:(only|not)?\s*([^\s\(\)]+)(?:\s*and)?\s*)?(.+)?/i,m=/\(\s*([^\s\:\)]+)\s*(?:\:\s*([^\s\)]+))?\s*\)/,f=/^(?:(min|max)-)?(.+)/,h=/(em|rem|px|cm|mm|in|pt|pc)?$/,w=/(dpi|dpcm|dppx)?$/;function y(g,k){return x(g).some(function(_){var P=_.inverse,b=_.type==="all"||k.type===_.type;if(b&&P||!(b||P))return!1;var N=_.expressions.every(function(O){var z=O.feature,W=O.modifier,$=O.value,D=k[z];if(!D)return!1;switch(z){case"orientation":case"scan":return D.toLowerCase()===$.toLowerCase();case"width":case"height":case"device-width":case"device-height":$=d($),D=d(D);break;case"resolution":$=p($),D=p(D);break;case"aspect-ratio":case"device-aspect-ratio":case"device-pixel-ratio":$=C($),D=C(D);break;case"grid":case"color":case"color-index":case"monochrome":$=parseInt($,10)||1,D=parseInt(D,10)||0;break}switch(W){case"min":return D>=$;case"max":return D<=$;default:return D===$}});return N&&!P||!N&&P})}function x(g){return g.split(",").map(function(k){k=k.trim();var _=k.match(c),P=_[1],b=_[2],N=_[3]||"",O={};return O.inverse=!!P&&P.toLowerCase()==="not",O.type=b?b.toLowerCase():"all",N=N.match(/\([^\)]+\)/g)||[],O.expressions=N.map(function(z){var W=z.match(m),$=W[1].toLowerCase().match(f);return{modifier:$[1],feature:$[2],value:W[2]}}),O})}function C(g){var k=Number(g),_;return k||(_=g.match(/^(\d+)\s*\/\s*(\d+)$/),k=_[1]/_[2]),k}function p(g){var k=parseFloat(g),_=String(g).match(w)[1];switch(_){case"dpcm":return k/2.54;case"dppx":return k*96;default:return k}}function d(g){var k=parseFloat(g),_=String(g).match(h)[1];switch(_){case"em":return k*16;case"rem":return k*16;case"cm":return k*96/2.54;case"mm":return k*96/2.54/10;case"in":return k*96;case"pt":return k*72;case"pc":return k*72/12;default:return k}}},"./node_modules/hyphenate-style-name/index.js":(a,u,c)=>{c.r(u),c.d(u,{default:()=>x});var m=/[A-Z]/g,f=/^ms-/,h={};function w(C){return"-"+C.toLowerCase()}function y(C){if(h.hasOwnProperty(C))return h[C];var p=C.replace(m,w);return h[C]=f.test(p)?"-"+p:p}const x=y},"./node_modules/matchmediaquery/index.js":(a,u,c)=>{var m=c("./node_modules/css-mediaquery/index.js").match,f=typeof window<"u"?window.matchMedia:null;function h(y,x,C){var p=this;if(f&&!C){var d=f.call(window,y);this.matches=d.matches,this.media=d.media,d.addListener(_)}else this.matches=m(y,x),this.media=y;this.addListener=g,this.removeListener=k,this.dispose=P;function g(b){d&&d.addListener(b)}function k(b){d&&d.removeListener(b)}function _(b){p.matches=b.matches,p.media=b.media}function P(){d&&d.removeListener(_)}}function w(y,x,C){return new h(y,x,C)}a.exports=w},"./node_modules/object-assign/index.js":a=>{/*
object-assign
(c) Sindre Sorhus
@license MIT
*/var u=Object.getOwnPropertySymbols,c=Object.prototype.hasOwnProperty,m=Object.prototype.propertyIsEnumerable;function f(w){if(w==null)throw new TypeError("Object.assign cannot be called with null or undefined");return Object(w)}function h(){try{if(!Object.assign)return!1;var w=new String("abc");if(w[5]="de",Object.getOwnPropertyNames(w)[0]==="5")return!1;for(var y={},x=0;x<10;x++)y["_"+String.fromCharCode(x)]=x;var C=Object.getOwnPropertyNames(y).map(function(d){return y[d]});if(C.join("")!=="0123456789")return!1;var p={};return"abcdefghijklmnopqrst".split("").forEach(function(d){p[d]=d}),Object.keys(Object.assign({},p)).join("")==="abcdefghijklmnopqrst"}catch{return!1}}a.exports=h()?Object.assign:function(w,y){for(var x,C=f(w),p,d=1;d<arguments.length;d++){x=Object(arguments[d]);for(var g in x)c.call(x,g)&&(C[g]=x[g]);if(u){p=u(x);for(var k=0;k<p.length;k++)m.call(x,p[k])&&(C[p[k]]=x[p[k]])}}return C}},"./node_modules/prop-types/checkPropTypes.js":(a,u,c)=>{var m=function(){};{var f=c("./node_modules/prop-types/lib/ReactPropTypesSecret.js"),h={},w=c("./node_modules/prop-types/lib/has.js");m=function(x){var C="Warning: "+x;typeof console<"u"&&console.error(C);try{throw new Error(C)}catch{}}}function y(x,C,p,d,g){for(var k in x)if(w(x,k)){var _;try{if(typeof x[k]!="function"){var P=Error((d||"React class")+": "+p+" type `"+k+"` is invalid; it must be a function, usually from the `prop-types` package, but received `"+typeof x[k]+"`.This often happens because of typos such as `PropTypes.function` instead of `PropTypes.func`.");throw P.name="Invariant Violation",P}_=x[k](C,k,d,p,null,f)}catch(N){_=N}if(_&&!(_ instanceof Error)&&m((d||"React class")+": type specification of "+p+" `"+k+"` is invalid; the type checker function must return `null` or an `Error` but returned a "+typeof _+". You may have forgotten to pass an argument to the type checker creator (arrayOf, instanceOf, objectOf, oneOf, oneOfType, and shape all require an argument)."),_ instanceof Error&&!(_.message in h)){h[_.message]=!0;var b=g?g():"";m("Failed "+p+" type: "+_.message+(b??""))}}}y.resetWarningCache=function(){h={}},a.exports=y},"./node_modules/prop-types/factoryWithTypeCheckers.js":(a,u,c)=>{var m=c("./node_modules/react-is/index.js"),f=c("./node_modules/object-assign/index.js"),h=c("./node_modules/prop-types/lib/ReactPropTypesSecret.js"),w=c("./node_modules/prop-types/lib/has.js"),y=c("./node_modules/prop-types/checkPropTypes.js"),x=function(){};x=function(p){var d="Warning: "+p;typeof console<"u"&&console.error(d);try{throw new Error(d)}catch{}};function C(){return null}a.exports=function(p,d){var g=typeof Symbol=="function"&&Symbol.iterator,k="@@iterator";function _(M){var B=M&&(g&&M[g]||M[k]);if(typeof B=="function")return B}var P="<<anonymous>>",b={array:W("array"),bigint:W("bigint"),bool:W("boolean"),func:W("function"),number:W("number"),object:W("object"),string:W("string"),symbol:W("symbol"),any:$(),arrayOf:D,element:G(),elementType:ce(),instanceOf:fe,node:Y(),objectOf:I,oneOf:Ne,oneOfType:H,shape:me,exact:St};function N(M,B){return M===B?M!==0||1/M===1/B:M!==M&&B!==B}function O(M,B){this.message=M,this.data=B&&typeof B=="object"?B:{},this.stack=""}O.prototype=Error.prototype;function z(M){var B={},J=0;function q(ne,Z,ee,ie,v,j,S){if(ie=ie||P,j=j||ee,S!==h){if(d){var F=new Error("Calling PropTypes validators directly is not supported by the `prop-types` package. Use `PropTypes.checkPropTypes()` to call them. Read more at http://fb.me/use-check-prop-types");throw F.name="Invariant Violation",F}else if(typeof console<"u"){var L=ie+":"+ee;!B[L]&&J<3&&(x("You are manually calling a React.PropTypes validation function for the `"+j+"` prop on `"+ie+"`. This is deprecated and will throw in the standalone `prop-types` package. You may be seeing this warning due to a third-party PropTypes library. See https://fb.me/react-warning-dont-call-proptypes for details."),B[L]=!0,J++)}}return Z[ee]==null?ne?Z[ee]===null?new O("The "+v+" `"+j+"` is marked as required "+("in `"+ie+"`, but its value is `null`.")):new O("The "+v+" `"+j+"` is marked as required in "+("`"+ie+"`, but its value is `undefined`.")):null:M(Z,ee,ie,v,j)}var X=q.bind(null,!1);return X.isRequired=q.bind(null,!0),X}function W(M){function B(J,q,X,ne,Z,ee){var ie=J[q],v=be(ie);if(v!==M){var j=De(ie);return new O("Invalid "+ne+" `"+Z+"` of type "+("`"+j+"` supplied to `"+X+"`, expected ")+("`"+M+"`."),{expectedType:M})}return null}return z(B)}function $(){return z(C)}function D(M){function B(J,q,X,ne,Z){if(typeof M!="function")return new O("Property `"+Z+"` of component `"+X+"` has invalid PropType notation inside arrayOf.");var ee=J[q];if(!Array.isArray(ee)){var ie=be(ee);return new O("Invalid "+ne+" `"+Z+"` of type "+("`"+ie+"` supplied to `"+X+"`, expected an array."))}for(var v=0;v<ee.length;v++){var j=M(ee,v,X,ne,Z+"["+v+"]",h);if(j instanceof Error)return j}return null}return z(B)}function G(){function M(B,J,q,X,ne){var Z=B[J];if(!p(Z)){var ee=be(Z);return new O("Invalid "+X+" `"+ne+"` of type "+("`"+ee+"` supplied to `"+q+"`, expected a single ReactElement."))}return null}return z(M)}function ce(){function M(B,J,q,X,ne){var Z=B[J];if(!m.isValidElementType(Z)){var ee=be(Z);return new O("Invalid "+X+" `"+ne+"` of type "+("`"+ee+"` supplied to `"+q+"`, expected a single ReactElement type."))}return null}return z(M)}function fe(M){function B(J,q,X,ne,Z){if(!(J[q]instanceof M)){var ee=M.name||P,ie=sn(J[q]);return new O("Invalid "+ne+" `"+Z+"` of type "+("`"+ie+"` supplied to `"+X+"`, expected ")+("instance of `"+ee+"`."))}return null}return z(B)}function Ne(M){if(!Array.isArray(M))return arguments.length>1?x("Invalid arguments supplied to oneOf, expected an array, got "+arguments.length+" arguments. A common mistake is to write oneOf(x, y, z) instead of oneOf([x, y, z])."):x("Invalid argument supplied to oneOf, expected an array."),C;function B(J,q,X,ne,Z){for(var ee=J[q],ie=0;ie<M.length;ie++)if(N(ee,M[ie]))return null;var v=JSON.stringify(M,function(S,F){var L=De(F);return L==="symbol"?String(F):F});return new O("Invalid "+ne+" `"+Z+"` of value `"+String(ee)+"` "+("supplied to `"+X+"`, expected one of "+v+"."))}return z(B)}function I(M){function B(J,q,X,ne,Z){if(typeof M!="function")return new O("Property `"+Z+"` of component `"+X+"` has invalid PropType notation inside objectOf.");var ee=J[q],ie=be(ee);if(ie!=="object")return new O("Invalid "+ne+" `"+Z+"` of type "+("`"+ie+"` supplied to `"+X+"`, expected an object."));for(var v in ee)if(w(ee,v)){var j=M(ee,v,X,ne,Z+"."+v,h);if(j instanceof Error)return j}return null}return z(B)}function H(M){if(!Array.isArray(M))return x("Invalid argument supplied to oneOfType, expected an instance of array."),C;for(var B=0;B<M.length;B++){var J=M[B];if(typeof J!="function")return x("Invalid argument supplied to oneOfType. Expected an array of check functions, but received "+nr(J)+" at index "+B+"."),C}function q(X,ne,Z,ee,ie){for(var v=[],j=0;j<M.length;j++){var S=M[j],F=S(X,ne,Z,ee,ie,h);if(F==null)return null;F.data&&w(F.data,"expectedType")&&v.push(F.data.expectedType)}var L=v.length>0?", expected one of type ["+v.join(", ")+"]":"";return new O("Invalid "+ee+" `"+ie+"` supplied to "+("`"+Z+"`"+L+"."))}return z(q)}function Y(){function M(B,J,q,X,ne){return Ve(B[J])?null:new O("Invalid "+X+" `"+ne+"` supplied to "+("`"+q+"`, expected a ReactNode."))}return z(M)}function ae(M,B,J,q,X){return new O((M||"React class")+": "+B+" type `"+J+"."+q+"` is invalid; it must be a function, usually from the `prop-types` package, but received `"+X+"`.")}function me(M){function B(J,q,X,ne,Z){var ee=J[q],ie=be(ee);if(ie!=="object")return new O("Invalid "+ne+" `"+Z+"` of type `"+ie+"` "+("supplied to `"+X+"`, expected `object`."));for(var v in M){var j=M[v];if(typeof j!="function")return ae(X,ne,Z,v,De(j));var S=j(ee,v,X,ne,Z+"."+v,h);if(S)return S}return null}return z(B)}function St(M){function B(J,q,X,ne,Z){var ee=J[q],ie=be(ee);if(ie!=="object")return new O("Invalid "+ne+" `"+Z+"` of type `"+ie+"` "+("supplied to `"+X+"`, expected `object`."));var v=f({},J[q],M);for(var j in v){var S=M[j];if(w(M,j)&&typeof S!="function")return ae(X,ne,Z,j,De(S));if(!S)return new O("Invalid "+ne+" `"+Z+"` key `"+j+"` supplied to `"+X+"`.\nBad object: "+JSON.stringify(J[q],null,"  ")+`
Valid keys: `+JSON.stringify(Object.keys(M),null,"  "));var F=S(ee,j,X,ne,Z+"."+j,h);if(F)return F}return null}return z(B)}function Ve(M){switch(typeof M){case"number":case"string":case"undefined":return!0;case"boolean":return!M;case"object":if(Array.isArray(M))return M.every(Ve);if(M===null||p(M))return!0;var B=_(M);if(B){var J=B.call(M),q;if(B!==M.entries){for(;!(q=J.next()).done;)if(!Ve(q.value))return!1}else for(;!(q=J.next()).done;){var X=q.value;if(X&&!Ve(X[1]))return!1}}else return!1;return!0;default:return!1}}function At(M,B){return M==="symbol"?!0:B?B["@@toStringTag"]==="Symbol"||typeof Symbol=="function"&&B instanceof Symbol:!1}function be(M){var B=typeof M;return Array.isArray(M)?"array":M instanceof RegExp?"object":At(B,M)?"symbol":B}function De(M){if(typeof M>"u"||M===null)return""+M;var B=be(M);if(B==="object"){if(M instanceof Date)return"date";if(M instanceof RegExp)return"regexp"}return B}function nr(M){var B=De(M);switch(B){case"array":case"object":return"an "+B;case"boolean":case"date":case"regexp":return"a "+B;default:return B}}function sn(M){return!M.constructor||!M.constructor.name?P:M.constructor.name}return b.checkPropTypes=y,b.resetWarningCache=y.resetWarningCache,b.PropTypes=b,b}},"./node_modules/prop-types/index.js":(a,u,c)=>{{var m=c("./node_modules/react-is/index.js"),f=!0;a.exports=c("./node_modules/prop-types/factoryWithTypeCheckers.js")(m.isElement,f)}},"./node_modules/prop-types/lib/ReactPropTypesSecret.js":a=>{var u="SECRET_DO_NOT_PASS_THIS_OR_YOU_WILL_BE_FIRED";a.exports=u},"./node_modules/prop-types/lib/has.js":a=>{a.exports=Function.call.bind(Object.prototype.hasOwnProperty)},"./node_modules/react-is/cjs/react-is.development.js":(a,u)=>{/** @license React v16.13.1
 * react-is.development.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */(function(){var c=typeof Symbol=="function"&&Symbol.for,m=c?Symbol.for("react.element"):60103,f=c?Symbol.for("react.portal"):60106,h=c?Symbol.for("react.fragment"):60107,w=c?Symbol.for("react.strict_mode"):60108,y=c?Symbol.for("react.profiler"):60114,x=c?Symbol.for("react.provider"):60109,C=c?Symbol.for("react.context"):60110,p=c?Symbol.for("react.async_mode"):60111,d=c?Symbol.for("react.concurrent_mode"):60111,g=c?Symbol.for("react.forward_ref"):60112,k=c?Symbol.for("react.suspense"):60113,_=c?Symbol.for("react.suspense_list"):60120,P=c?Symbol.for("react.memo"):60115,b=c?Symbol.for("react.lazy"):60116,N=c?Symbol.for("react.block"):60121,O=c?Symbol.for("react.fundamental"):60117,z=c?Symbol.for("react.responder"):60118,W=c?Symbol.for("react.scope"):60119;function $(S){return typeof S=="string"||typeof S=="function"||S===h||S===d||S===y||S===w||S===k||S===_||typeof S=="object"&&S!==null&&(S.$$typeof===b||S.$$typeof===P||S.$$typeof===x||S.$$typeof===C||S.$$typeof===g||S.$$typeof===O||S.$$typeof===z||S.$$typeof===W||S.$$typeof===N)}function D(S){if(typeof S=="object"&&S!==null){var F=S.$$typeof;switch(F){case m:var L=S.type;switch(L){case p:case d:case h:case y:case w:case k:return L;default:var A=L&&L.$$typeof;switch(A){case C:case g:case b:case P:case x:return A;default:return F}}case f:return F}}}var G=p,ce=d,fe=C,Ne=x,I=m,H=g,Y=h,ae=b,me=P,St=f,Ve=y,At=w,be=k,De=!1;function nr(S){return De||(De=!0,console.warn("The ReactIs.isAsyncMode() alias has been deprecated, and will be removed in React 17+. Update your code to use ReactIs.isConcurrentMode() instead. It has the exact same API.")),sn(S)||D(S)===p}function sn(S){return D(S)===d}function M(S){return D(S)===C}function B(S){return D(S)===x}function J(S){return typeof S=="object"&&S!==null&&S.$$typeof===m}function q(S){return D(S)===g}function X(S){return D(S)===h}function ne(S){return D(S)===b}function Z(S){return D(S)===P}function ee(S){return D(S)===f}function ie(S){return D(S)===y}function v(S){return D(S)===w}function j(S){return D(S)===k}u.AsyncMode=G,u.ConcurrentMode=ce,u.ContextConsumer=fe,u.ContextProvider=Ne,u.Element=I,u.ForwardRef=H,u.Fragment=Y,u.Lazy=ae,u.Memo=me,u.Portal=St,u.Profiler=Ve,u.StrictMode=At,u.Suspense=be,u.isAsyncMode=nr,u.isConcurrentMode=sn,u.isContextConsumer=M,u.isContextProvider=B,u.isElement=J,u.isForwardRef=q,u.isFragment=X,u.isLazy=ne,u.isMemo=Z,u.isPortal=ee,u.isProfiler=ie,u.isStrictMode=v,u.isSuspense=j,u.isValidElementType=$,u.typeOf=D})()},"./node_modules/react-is/index.js":(a,u,c)=>{a.exports=c("./node_modules/react-is/cjs/react-is.development.js")},"./node_modules/shallow-equal/dist/index.esm.js":(a,u,c)=>{c.r(u),c.d(u,{shallowEqualArrays:()=>f,shallowEqualObjects:()=>m});function m(h,w){if(h===w)return!0;if(!h||!w)return!1;var y=Object.keys(h),x=Object.keys(w),C=y.length;if(x.length!==C)return!1;for(var p=0;p<C;p++){var d=y[p];if(h[d]!==w[d]||!Object.prototype.hasOwnProperty.call(w,d))return!1}return!0}function f(h,w){if(h===w)return!0;if(!h||!w)return!1;var y=h.length;if(w.length!==y)return!1;for(var x=0;x<y;x++)if(h[x]!==w[x])return!1;return!0}},"./src/Component.ts":function(a,u,c){var m=this&&this.__rest||function(y,x){var C={};for(var p in y)Object.prototype.hasOwnProperty.call(y,p)&&x.indexOf(p)<0&&(C[p]=y[p]);if(y!=null&&typeof Object.getOwnPropertySymbols=="function")for(var d=0,p=Object.getOwnPropertySymbols(y);d<p.length;d++)x.indexOf(p[d])<0&&Object.prototype.propertyIsEnumerable.call(y,p[d])&&(C[p[d]]=y[p[d]]);return C},f=this&&this.__importDefault||function(y){return y&&y.__esModule?y:{default:y}};Object.defineProperty(u,"__esModule",{value:!0});var h=f(c("./src/useMediaQuery.ts")),w=function(y){var x=y.children,C=y.device,p=y.onChange,d=m(y,["children","device","onChange"]),g=(0,h.default)(d,C,p);return typeof x=="function"?x(g):g?x:null};u.default=w},"./src/Context.ts":(a,u,c)=>{Object.defineProperty(u,"__esModule",{value:!0});var m=c("react"),f=(0,m.createContext)(void 0);u.default=f},"./src/index.ts":function(a,u,c){var m=this&&this.__importDefault||function(x){return x&&x.__esModule?x:{default:x}};Object.defineProperty(u,"__esModule",{value:!0}),u.Context=u.toQuery=u.useMediaQuery=u.default=void 0;var f=m(c("./src/useMediaQuery.ts"));u.useMediaQuery=f.default;var h=m(c("./src/Component.ts"));u.default=h.default;var w=m(c("./src/toQuery.ts"));u.toQuery=w.default;var y=m(c("./src/Context.ts"));u.Context=y.default},"./src/mediaQuery.ts":function(a,u,c){var m=this&&this.__assign||function(){return m=Object.assign||function(k){for(var _,P=1,b=arguments.length;P<b;P++){_=arguments[P];for(var N in _)Object.prototype.hasOwnProperty.call(_,N)&&(k[N]=_[N])}return k},m.apply(this,arguments)},f=this&&this.__rest||function(k,_){var P={};for(var b in k)Object.prototype.hasOwnProperty.call(k,b)&&_.indexOf(b)<0&&(P[b]=k[b]);if(k!=null&&typeof Object.getOwnPropertySymbols=="function")for(var N=0,b=Object.getOwnPropertySymbols(k);N<b.length;N++)_.indexOf(b[N])<0&&Object.prototype.propertyIsEnumerable.call(k,b[N])&&(P[b[N]]=k[b[N]]);return P},h=this&&this.__importDefault||function(k){return k&&k.__esModule?k:{default:k}};Object.defineProperty(u,"__esModule",{value:!0});var w=h(c("./node_modules/prop-types/index.js")),y=w.default.oneOfType([w.default.string,w.default.number]),x={all:w.default.bool,grid:w.default.bool,aural:w.default.bool,braille:w.default.bool,handheld:w.default.bool,print:w.default.bool,projection:w.default.bool,screen:w.default.bool,tty:w.default.bool,tv:w.default.bool,embossed:w.default.bool},C={orientation:w.default.oneOf(["portrait","landscape"]),scan:w.default.oneOf(["progressive","interlace"]),aspectRatio:w.default.string,deviceAspectRatio:w.default.string,height:y,deviceHeight:y,width:y,deviceWidth:y,color:w.default.bool,colorIndex:w.default.bool,monochrome:w.default.bool,resolution:y,type:Object.keys(x)};C.type;var p=f(C,["type"]),d=m({minAspectRatio:w.default.string,maxAspectRatio:w.default.string,minDeviceAspectRatio:w.default.string,maxDeviceAspectRatio:w.default.string,minHeight:y,maxHeight:y,minDeviceHeight:y,maxDeviceHeight:y,minWidth:y,maxWidth:y,minDeviceWidth:y,maxDeviceWidth:y,minColor:w.default.number,maxColor:w.default.number,minColorIndex:w.default.number,maxColorIndex:w.default.number,minMonochrome:w.default.number,maxMonochrome:w.default.number,minResolution:y,maxResolution:y},p),g=m(m({},x),d);u.default={all:g,types:x,matchers:C,features:d}},"./src/toQuery.ts":function(a,u,c){var m=this&&this.__importDefault||function(p){return p&&p.__esModule?p:{default:p}};Object.defineProperty(u,"__esModule",{value:!0});var f=m(c("./node_modules/hyphenate-style-name/index.js")),h=m(c("./src/mediaQuery.ts")),w=function(p){return"not ".concat(p)},y=function(p,d){var g=(0,f.default)(p);return typeof d=="number"&&(d="".concat(d,"px")),d===!0?g:d===!1?w(g):"(".concat(g,": ").concat(d,")")},x=function(p){return p.join(" and ")},C=function(p){var d=[];return Object.keys(h.default.all).forEach(function(g){var k=p[g];k!=null&&d.push(y(g,k))}),x(d)};u.default=C},"./src/useMediaQuery.ts":function(a,u,c){var m=this&&this.__importDefault||function(O){return O&&O.__esModule?O:{default:O}};Object.defineProperty(u,"__esModule",{value:!0});var f=c("react"),h=m(c("./node_modules/matchmediaquery/index.js")),w=m(c("./node_modules/hyphenate-style-name/index.js")),y=c("./node_modules/shallow-equal/dist/index.esm.js"),x=m(c("./src/toQuery.ts")),C=m(c("./src/Context.ts")),p=function(O){return O.query||(0,x.default)(O)},d=function(O){if(O){var z=Object.keys(O);return z.reduce(function(W,$){return W[(0,w.default)($)]=O[$],W},{})}},g=function(){var O=(0,f.useRef)(!1);return(0,f.useEffect)(function(){O.current=!0},[]),O.current},k=function(O){var z=(0,f.useContext)(C.default),W=function(){return d(O)||d(z)},$=(0,f.useState)(W),D=$[0],G=$[1];return(0,f.useEffect)(function(){var ce=W();(0,y.shallowEqualObjects)(D,ce)||G(ce)},[O,z]),D},_=function(O){var z=function(){return p(O)},W=(0,f.useState)(z),$=W[0],D=W[1];return(0,f.useEffect)(function(){var G=z();$!==G&&D(G)},[O]),$},P=function(O,z){var W=function(){return(0,h.default)(O,z||{},!!z)},$=(0,f.useState)(W),D=$[0],G=$[1],ce=g();return(0,f.useEffect)(function(){if(ce){var fe=W();return G(fe),function(){fe&&fe.dispose()}}},[O,z]),D},b=function(O){var z=(0,f.useState)(O.matches),W=z[0],$=z[1];return(0,f.useEffect)(function(){var D=function(G){$(G.matches)};return O.addListener(D),$(O.matches),function(){O.removeListener(D)}},[O]),W},N=function(O,z,W){var $=k(z),D=_(O);if(!D)throw new Error("Invalid or missing MediaQuery!");var G=P(D,$),ce=b(G),fe=g();return(0,f.useEffect)(function(){fe&&W&&W(ce)},[ce]),(0,f.useEffect)(function(){return function(){G&&G.dispose()}},[]),ce};u.default=N},react:a=>{a.exports=n}},i={};function o(a){var u=i[a];if(u!==void 0)return u.exports;var c=i[a]={exports:{}};return r[a].call(c.exports,c,c.exports,o),c.exports}o.d=(a,u)=>{for(var c in u)o.o(u,c)&&!o.o(a,c)&&Object.defineProperty(a,c,{enumerable:!0,get:u[c]})},o.o=(a,u)=>Object.prototype.hasOwnProperty.call(a,u),o.r=a=>{typeof Symbol<"u"&&Symbol.toStringTag&&Object.defineProperty(a,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(a,"__esModule",{value:!0})};var s=o("./src/index.ts");return s})())})(_h);var Hn=_h.exports;const Sd=xs(Hn),iv="_mabileMenuContainer_1kj9j_1",ov="_divMobileMenu_1kj9j_13",sv="_logoMenu_1kj9j_24",lv="_contactMenu_1kj9j_28",av="_svgMenu_1kj9j_51",uv="_nav_1kj9j_55",cv="_navMenuMobile_1kj9j_66",dv="_buttonMenuMobile_1kj9j_75",Et={mabileMenuContainer:iv,divMobileMenu:ov,logoMenu:sv,contactMenu:lv,svgMenu:av,nav:uv,navMenuMobile:cv,buttonMenuMobile:dv},fv=document.getElementById("modalMobail"),bh=({onClose:e,handleSetActiveLink:t})=>Mu.createPortal(l.jsxs("div",{className:Et.mabileMenuContainer,children:[l.jsxs("div",{className:Et.divMobileMenu,children:[l.jsx("a",{href:"#home",children:l.jsx("svg",{width:"40",height:"40",children:l.jsx("use",{href:`${fs}#icon-g10`})})}),l.jsx("a",{className:Et.contactMenu,href:"#contact",children:"Контакт"}),l.jsx("button",{className:Et.buttonMenuMobile,type:"button",onClick:()=>e(),children:l.jsx("svg",{className:Et.svgMenu,width:"40",height:"40",children:l.jsx("use",{href:`${fs}#icon-close`})})})]}),l.jsxs("nav",{className:Et.nav,children:[l.jsx("a",{className:Et.navMenuMobile,href:"#home",onClick:n=>{e(),t("home",n)},children:"Головна"}),l.jsx("a",{className:Et.navMenuMobile,href:"#aboutUs",onClick:n=>{e(),t("aboutUs",n)},children:"Про нас"}),l.jsx("a",{className:Et.navMenuMobile,href:"#services",onClick:n=>{e(),t("aboutUs",n)},children:"Послуги"}),l.jsx("a",{className:Et.navMenuMobile,href:"#mentoring",onClick:n=>{e(),t("mentoring",n)},children:"Менторство"}),l.jsx("a",{className:Et.navMenuMobile,href:"#projects",onClick:n=>{e(),t("projects",n)},children:"Проєкти"})]})]}),fv);bh.propTypes={onClose:Li.func.isRequired};const Ch=({handleSetActiveLink:e})=>{const[t,n]=ue.useState("home"),[r,i]=ue.useState(!1),o=Hn.useMediaQuery({query:"(max-width: 767px)"}),s=Hn.useMediaQuery({query:"(min-width: 768px)"}),a=()=>{i(!r)};return ue.useEffect(()=>{const u=()=>{const m=["home","aboutUs","services","mentoring","projects","contact"].find(f=>{const h=document.getElementById(f);if(h){const w=h.getBoundingClientRect();return w.top<=120&&w.bottom>=120}return h});m&&n(m)};return window.addEventListener("scroll",u),()=>{window.removeEventListener("scroll",u)}},[]),l.jsxs(q0,{children:[l.jsx("div",{className:"container",children:l.jsxs(Z0,{children:[o&&l.jsx("a",{href:"#home",children:l.jsx("svg",{width:"40",height:"40",children:l.jsx("use",{href:`${fs}#icon-g10`})})}),s&&l.jsx("a",{href:"#home",children:l.jsx("svg",{width:"227",height:"40",children:l.jsx("use",{href:`${K}#logo-black`})})}),s&&l.jsxs(ev,{children:[l.jsx(qr,{href:"#home",className:t==="home"?"active":"",onClick:u=>e("home",u),children:"Головна"}),l.jsx(qr,{href:"#aboutUs",className:t==="aboutUs"?"active":"",onClick:u=>e("aboutUs",u),children:"Про нас"}),l.jsx(qr,{href:"#services",className:t==="services"?"active":"",onClick:u=>e("services",u),children:"Послуги"}),l.jsx(qr,{href:"#mentoring",className:t==="mentoring"?"active":"",onClick:u=>e("mentoring",u),children:"Менторство"}),l.jsx(qr,{href:"#projects",className:t==="projects"?"active":"",onClick:u=>e("projects",u),children:"Проєкти"})]}),l.jsx(tv,{href:"#contact",className:t==="contact"?"active":"",onClick:u=>e("contact",u),children:"Контакт"}),o&&l.jsx(rv,{type:"button",onClick:()=>a(),children:l.jsx(nv,{children:l.jsx("use",{href:`${fs}#icon-menuburger`})})})]})}),o&&r&&l.jsx(bh,{onClose:a,handleSetActiveLink:e})]})};Ch.propTypes={handleSetActiveLink:Li.func.isRequired};const pv="/healthy-management-project/assets/hero1x-6AVSlzud.webp",hv="/healthy-management-project/assets/hero1x-d4IOBsel.jpg",mv=E.section`
  background-repeat: no-repeat;
  background-position: center;
  background-image: url(${hv});
  background-size: cover;
  margin-top: 110px;
  padding-top: 40px;
  padding-bottom: 40px;

  @media screen and (min-width: 768px) {
    background-repeat: no-repeat;
    background-position: center;
    background-image: url(${pv});
    background-size: cover;
    margin-top: 120px;
    padding-top: 296px;
    padding-bottom: 296px;
  }
`,gv=E.h1`
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
`,yv=E.h3`
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
`,xv=E.ul`
  margin-left: 20px;
  margin-top: 24px;
  margin-bottom: 48px;

  @media screen and (min-width: 768px) {
    margin-left: 38px;
    margin-top: 24px;
    margin-bottom: 40px;
  }
`,Sl=E.li`
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
`,vv=E.div`
  display: flex;
  flex-direction: column;
  gap: 24px;

  @media screen and (min-width: 768px) {
    display: flex;
    flex-direction: row;
    gap: 24px;
  }
`,jd=E.a`
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
`,wv=()=>l.jsx(mv,{id:"home",children:l.jsxs("div",{className:"container",children:[l.jsx(gv,{children:"Бізнес-партнер з розвитку та комунікацій здорового менеджменту"}),l.jsx(yv,{children:"Будуємо ефективні стратегії здорового менеджменту для медичних брендів:"}),l.jsxs(xv,{children:[l.jsx(Sl,{children:"медичний менеджмент і маркетинг,"}),l.jsx(Sl,{children:"програми управління здоров'ям для підприємств та бізнесу,"}),l.jsx(Sl,{children:"менторство"})]}),l.jsxs(vv,{children:[l.jsx(jd,{href:"#contact",children:"Консультація"}),l.jsx(jd,{href:"services",children:"Послуги"})]})]})}),kv=E.section`
  padding-top: 80px;
  padding-bottom: 80px;
`,Sv=E.div`
  max-width: 100%;
  height: 680px;
  border-radius: 16px;
  padding: 80px;
  background: var(--background-bluedark);
`,jv=E.h2`
  font-size: 48px;
  font-style: normal;
  font-weight: 600;
  line-height: 56px;
  color: var(--system-default-10);
  margin-bottom: 40px;
`,Ev=E.ul`
  display: flex;
  padding: 0;
  flex-wrap: wrap;
  gap: 24px;
`,ho=E.li`
  display: flex;
  justify-content: center;
  align-items: center;
  column-gap: 24px;
  flex-basis: calc((100% - 24px) / 2);
  padding: 40px;
`,mo=E.svg`
  width: 80px;
  height: 80px;
`,go=E.div`
  display: flex;
  flex-direction: column;
`,yo=E.h3`
  color: var(--system-default-10);
  font-size: 24px;
  font-weight: 600;
  line-height: 32px;
  margin-bottom: 16px;
`,xo=E.p`
  max-width: 542px;
  color: var(--system-default-10);
  font-size: 16px;
  font-weight: 500;
  line-height: 24px;
`,_v=()=>l.jsx(kv,{className:"container",children:l.jsxs(Sv,{children:[l.jsx(jv,{children:"Чому обирають нас"}),l.jsxs(Ev,{children:[l.jsxs(ho,{children:[l.jsx(mo,{children:l.jsx("use",{href:`${K}#hands-shake`})}),l.jsxs(go,{children:[l.jsx(yo,{children:"Надійне партнерство та менторство"}),l.jsx(xo,{children:"Ми налаштовані на довгострокове партнерство і дбаємо про комфорті та чесні комунікації"})]})]}),l.jsxs(ho,{children:[l.jsx(mo,{children:l.jsx("use",{href:`${K}#setting`})}),l.jsxs(go,{children:[l.jsx(yo,{children:"Індивідуальний підхід"}),l.jsx(xo,{children:"Кожен бізнес і послуга мають свої особливості. Ми занурюємося у ваш бізнес і пропонуємо індивідуальні стратегії, які допоможуть вам досягти успіху"})]})]}),l.jsxs(ho,{children:[l.jsx(mo,{children:l.jsx("use",{href:`${K}#icon-lamp`})}),l.jsxs(go,{children:[l.jsx(yo,{children:"Експертні послуги"}),l.jsx(xo,{children:"Ми опираємося на передовий досвід і використовуємо як класичні, так і сучасні підходи для досягнення поставленого результату"})]})]}),l.jsxs(ho,{children:[l.jsx(mo,{children:l.jsx("use",{href:`${K}#icon-puzzle`})}),l.jsxs(go,{children:[l.jsx(yo,{children:"Комплексні рішення"}),l.jsx(xo,{children:"Наша експертиза дозволяє пропонувати комплексні рішення для ефективної співпраці"})]})]})]})]})}),Ed="/healthy-management-project/assets/pic_mentorstvo1x-R5bIGNq0.webp",bv="/healthy-management-project/assets/pic_mentorstvo2x-k6d-_Us1.jpg",_d="/healthy-management-project/assets/mob_mentor1x-_de1iGBc.webp",Cv="/healthy-management-project/assets/mob_mentor@2x-oAKhVwNJ.jpg",Tv=E.section`
  padding-top: 80px;
  padding-bottom: 80px;
`,Pv=E.div`
  display: flex;
  flex-direction: column;
  gap: 24px;

  @media screen and (min-width: 1920px) {
    gap: 24px;
    margin-bottom: 40px;
    flex-direction: row;
  }
`,Ov=E.div`
  display: flex;
  flex-direction: column;
  gap: 16px;

  @media screen and (min-width: 1920px) {
    max-width: 828px;
    align-items: flex-start;
  }
`,Rv=E.div`
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
`,Mv=E.h2`
  font-size: 24px;
  font-weight: 600;
  line-height: 32px;
  color: var(--typography-black);

  @media screen and (min-width: 1920px) {
    font-size: 48px;
    line-height: 56px;
    margin-bottom: 40px;
  }
`,Av=E.h3`
  font-size: 18px;
  font-weight: 600;
  line-height: 24px;
  color: var(--typography-bluedark);

  @media screen and (min-width: 1920px) {
    font-size: 24px;
    line-height: 32px;
  }
`,bd=E.h3`
  font-size: 18px;
  font-weight: 600;
  line-height: 24px;
  color: var(--typography-white);

  @media screen and (min-width: 1920px) {
    font-size: 24px;
    line-height: 32px;
  }
`,Nv=E.div`
  display: flex;
  flex-direction: column;
  gap: 24px;
  min-width: 320px;

  @media screen and (min-width: 1920px) {
    margin-bottom: 80px;
  }
`,Cd=E.p`
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
`,zv=E.a`
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
`,Lv=E.div`
  display: flex;
  flex-direction: column;
  gap: 24px;

  @media screen and (min-width: 1920px) {
    gap: 40px;
    flex-direction: row;
  }
`,Dv=E.div`
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
`,Fv=E.ul`
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
`,Td=E.ul`
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
`,or=E.li`
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
`,sr=E.li`
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
`,Iv=()=>l.jsxs(Tv,{id:"mentoring",className:"container",children:[l.jsxs(Pv,{children:[l.jsxs("div",{children:[l.jsx(Sd,{minWidth:1920,children:l.jsx("img",{srcSet:`${Ed} 1920w, ${bv} 2x`,sizes:"(min-width: 1920px) 1920px",src:Ed,alt:"Ольга Поліщук - ваш ментор в медичній галузі"})}),l.jsx(Sd,{minWidth:375,maxWidth:1919,children:l.jsx("img",{srcSet:`${_d} 375w, ${Cv} 2x`,sizes:"(min-width: 375px) 375px",src:_d,alt:"Ольга Поліщук - ваш ментор в медичній галузі"})})]}),l.jsxs(Ov,{children:[l.jsx(Mv,{children:"Менторство"}),l.jsxs(Nv,{children:[l.jsxs(Cd,{children:[l.jsx("b",{children:"Менторство в медичній галузі"})," - почути іншу думку, підтвердити власні гіпотези, зрозуміти вектор розвитку, отримати підтримку та пораду з питань менеджменту і медичного маркетингу"]}),l.jsxs(Cd,{children:[l.jsx("b",{children:"Менторство"})," - це про взаємодію та чесну комунікацію, про спільні цінності та готовність до росту, про надійне партнерство та довіру"]})]}),l.jsx(zv,{href:"#contact",children:"Дізнатися вартість"})]})]}),l.jsx("div",{children:l.jsxs(Lv,{children:[l.jsxs(Rv,{children:[l.jsx(Av,{children:"Про що це?"}),l.jsxs(Fv,{children:[l.jsx(or,{children:l.jsx("p",{children:"Про прагнення почути чесну іншу думку/та або підтвердити власні гіпотези для власника/керівника"})}),l.jsx(or,{children:l.jsx("p",{children:"Про бізнес-процеси та їх ефективність"})}),l.jsx(or,{children:l.jsx("p",{children:"Про вектори розвитку бізнесу або проєкту"})}),l.jsx(or,{children:l.jsx("p",{children:"Про практичний інструментарій для впровадження змін"})}),l.jsx(or,{children:l.jsx("p",{children:"Про маркетинг, сервіс та комунікації в медичних бізнесах"})}),l.jsx(or,{children:l.jsx("p",{children:"Про здоров'я працівників та стратегії підвищенння ефективності бізнесу"})})]})]}),l.jsxs(Dv,{children:[l.jsx(bd,{children:"Для кого"}),l.jsxs(Td,{children:[l.jsx(sr,{children:l.jsx("p",{children:"Лідерам, які прагнуть змін"})}),l.jsx(sr,{children:l.jsx("p",{children:"Власникам, які хочуть отримати незалежку експертну думку"})}),l.jsx(sr,{children:l.jsx("p",{children:"Керівникам та маркетологам, яким потрібна підтримка"})}),l.jsx(sr,{children:l.jsx("p",{children:"Лікарям, яким важливо отримати пораду"})})]}),l.jsx(bd,{children:"Формат"}),l.jsxs(Td,{children:[l.jsx(sr,{children:l.jsx("p",{children:"Індивідуальна ментор-сесія (від 1 години)"})}),l.jsx(sr,{children:l.jsx("p",{children:"Персональний супровід на декілька місяців"})})]})]})]})})]}),Th=E.section`
  padding-top: 24px;
  padding-bottom: 24px;

  @media screen and (min-width: 1920px) {
    padding-top: 80px;
    padding-bottom: 80px;
  }
`,Ph=E.div`
  padding: 24px;
  border-radius: 16px;
  box-shadow: 0px 0px 8px 0px rgba(27, 54, 65, 0.08);
  background: var(--background-white);

  @media screen and (min-width: 1920px) {
    padding: 80px;
  }
`,$v=E.div`
  display: flex;
  flex-direction: column;
  gap: 3px;

  @media screen and (min-width: 1290px) {
    flex-direction: row;
    justify-content: space-between;
  }
`,vo=E.div`
  position: relative;

  @media screen and (min-width: 1920px) {
    min-width: 370px;
  }
`,Oh=E.div`
  display: flex;
  flex-direction: column;

  @media screen and (min-width: 1290px) {
    gap: 40px;
    margin-bottom: 40px;
    flex-direction: row;
  }
`,Rh=E.div`
  min-width: 280px;
  gap: 16px;
  display: flex;
  flex-direction: column;

  @media screen and (min-width: 1920px) {
    min-width: 740px;
  }
`,Mh=E.div`
  @media screen and (min-width: 1920px) {
    padding: 24px;
  }
`,wo=E.p`
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
`,Ah=E.h2`
  color: var(--typography-black);
  font-size: 24px;
  font-weight: 600;
  line-height: 32px;

  @media screen and (min-width: 1920px) {
    font-size: 48px;
    line-height: 56px;
  }
`,Nh=E.h3`
  font-size: 18px;
  font-weight: 600;
  line-height: 1.3;
  margin-bottom: 24px;
  color: var(--typography-bluedark);

  @media screen and (min-width: 1920px) {
    font-size: 24px;
    margin-bottom: 16px;
  }
`,zh=E.p`
  font-size: 16px;
  line-height: 24px;
  color: var(--typography-bluedark);

  @media screen and (min-width: 1920px) {
    font-size: 20px;
    font-weight: 500;
    line-height: 1.4;
  }
`,Lh=E.p`
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
`,Dh=E.a`
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
`,Fh=E.p`
  font-size: 18px;
  line-height: 1.3;
  font-weight: 600;
  margin-bottom: 16px;

  color: var(--typography-bluedark);

  @media screen and (min-width: 1920px) {
    font-size: 24px;
    margin-bottom: 24px;
  }
`,Ih=E.ul`
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
`,Ct=E.li`
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
`,mn=E.svg`
  width: 266px;
  height: 56px;

  @media screen and (min-width: 1920px) {
    width: 370px;
    height: 80px;
  }
`;function Uv(e,t){if(t===e)return!1;const n=Object.values(t),r=Object.values(e);if(n.length!==r.length||n.some((o,s)=>o!==r[s]))return!0;const i=Object.keys(e);return Object.keys(t).some((o,s)=>o!==i[s])}function Bv(e,t){return e.matches[t]=!1,e.mediaQueries[t]={},e}function $h(e){const t=Object.keys(e);return typeof window>"u"?t.reduce(Bv,{mediaQueries:{},matches:{}}):t.reduce((n,r)=>{const i=window.matchMedia(e[r]);return n.mediaQueries[r]=i,n.matches[r]=i.matches,n},{mediaQueries:{},matches:{}})}function Vv(e,t){function n(r,i){return r[i]=e.mediaQueries[i].matches,r}switch(t.type){case"updateMatches":return{matches:Object.keys(e.mediaQueries).reduce(n,{}),mediaQueries:e.mediaQueries};case"setQueries":return $h(t.queries)}}function Wv(e){const t=ue.useRef(e),[n,r]=ue.useReducer(Vv,e,$h);ue.useEffect(()=>{Uv(e,t.current)&&(r({type:"setQueries",queries:e}),t.current=e)},[e]);function i(){return r({type:"updateMatches"})}function o(u){const c=i;return typeof u.addListener<"u"?u.addListener(c):u.addEventListener("change",c),c}ue.useEffect(()=>{const u=Object.values(n.mediaQueries),c=u.map(o);function m(f,h){typeof f.addListener<"u"?f.removeListener(c[h]):f.removeEventListener("change",c[h])}return()=>{u.forEach(m)}},[n.mediaQueries]);const{matches:s}=n,a=ue.useMemo(()=>Object.values(s),[s]);return{matches:s,matchesAny:a.some(Boolean),matchesAll:a.length>0&&a.every(Boolean)}}function Uh(e){return Wv(Hv(e)).matchesAll}const jl={};function Hv(e){return jl[e]===void 0&&(jl[e]={default:e}),jl[e]}const Qv=()=>{const e=Uh("(max-width: 768px)");return l.jsx(Th,{className:"container",children:l.jsxs(Ph,{children:[l.jsxs(Oh,{children:[l.jsxs(Rh,{children:[l.jsx(Ah,{children:"Індивідуальна ментор сесія"}),l.jsx(zh,{children:"Вирішення вашого індивідуального запиту"}),l.jsx(Lh,{children:"від 1 години"}),l.jsx(Dh,{href:"#contact",children:"Замовити послугу"})]}),l.jsxs(Mh,{children:[l.jsx(Nh,{children:"Питання, з якими можете звернутися"}),l.jsxs(Ih,{children:[l.jsx(Ct,{children:"Незалежна думка щодо маркетингу та розвитку"}),l.jsx(Ct,{children:"Порада по створенню відділу маркетингу або оцінка існуючої структури"}),l.jsx(Ct,{children:"Питання по роботі з підрядниками"}),l.jsx(Ct,{children:"Порада щодо оптимізації бізнес-процесів"}),l.jsx(Ct,{children:"Як вірно оцінити ефективність маркетингових дій"}),l.jsx(Ct,{children:"Які інструменти комунікацій використовувати"}),l.jsxs(Ct,{children:["Особисте питання по менеджменту та розвитку з питань управління"," ","здоров'ям"]})]})]})]}),l.jsx(Fh,{children:"Шлях проведення менторської сесії"}),l.jsxs($v,{children:[l.jsxs(vo,{children:[e?l.jsx(mn,{children:l.jsx("use",{href:`${K}#icon-rectangle-mob`})}):l.jsx(mn,{children:l.jsx("use",{href:`${K}#icon-rectangle`})}),l.jsx(wo,{children:"Заповнення брифу"})]}),l.jsxs(vo,{children:[e?l.jsx(mn,{children:l.jsx("use",{href:`${K}#icon-rectangle-mob`})}):l.jsx(mn,{children:l.jsx("use",{href:`${K}#icon-rectangle`})}),l.jsx(wo,{children:"Діагностика ситуації"})]}),l.jsxs(vo,{children:[e?l.jsx(mn,{children:l.jsx("use",{href:`${K}#icon-rectangle-mob`})}):l.jsx(mn,{children:l.jsx("use",{href:`${K}#icon-rectangle`})}),l.jsx(wo,{children:"Проведення сесії"})]}),l.jsxs(vo,{children:[e?l.jsx(mn,{children:l.jsx("use",{href:`${K}#icon-rectangle-mob`})}):l.jsx(mn,{children:l.jsx("use",{href:`${K}#icon-rectangle`})}),l.jsx(wo,{children:"Рекомендації"})]})]})]})})},Yv=E.div`
  display: flex;
  flex-direction: column;
  gap: 3px;

  @media screen and (min-width: 1920px) {
    flex-direction: row;
    justify-content: space-between;
    gap: 24px;
  }
`,zt=E.svg`
  width: 260px;
  height: 60px;

  @media screen and (min-width: 1920px) {
    width: 285px;
    height: 80px;
  }
`,Zr=E.div`
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
`;const ei=E.p`
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
`,Kv=()=>{const e=Uh("(max-width: 768px)");return l.jsx(Th,{className:"container",children:l.jsxs(Ph,{children:[l.jsxs(Oh,{children:[l.jsxs(Rh,{children:[l.jsx(Ah,{children:"Персональний супровід"}),l.jsx(zh,{children:"Пропрацьовуємо ваші запити та досягаємо посавлених цілей"}),l.jsx(Lh,{children:"від 2 місяців тісної взаємодії"}),l.jsx(Dh,{href:"#contact",children:"Замовити послугу"})]}),l.jsxs(Mh,{children:[l.jsx(Nh,{children:"Питання, з якими можете звернутися"}),l.jsxs(Ih,{children:[l.jsx(Ct,{children:"Зануритись в бізнес-процеси та зрозуміти, де є точки зростання"}),l.jsx(Ct,{children:"Зрозуміти що таке маркетинг та як він працює у вашому бізнесі"}),l.jsx(Ct,{children:"Супровід розробки та впровадження стратегій"}),l.jsx(Ct,{children:"Особисті питання по медичному менеджменту, маркетингу та розвитку, управління здоров'ям"})]})]})]}),l.jsx(Fh,{children:"Шлях проведення менторськогог супроводу"}),l.jsxs(Yv,{children:[l.jsxs(Zr,{children:[e?l.jsx(zt,{children:l.jsx("use",{href:`${K}#icon-rectangle-mob`})}):l.jsx(zt,{children:l.jsx("use",{href:`${K}#icon-rectangle2`})}),l.jsx(ei,{children:"Заповнення брифу"})]}),l.jsxs(Zr,{children:[e?l.jsx(zt,{children:l.jsx("use",{href:`${K}#icon-rectangle-mob`})}):l.jsx(zt,{children:l.jsx("use",{href:`${K}#icon-rectangle2`})}),l.jsx(ei,{children:"Діагностика ситуації"})]}),l.jsxs(Zr,{children:[e?l.jsx(zt,{children:l.jsx("use",{href:`${K}#icon-rectangle-mob`})}):l.jsx(zt,{children:l.jsx("use",{href:`${K}#icon-rectangle2`})}),l.jsx(ei,{children:"Визначення зон росту"})]}),l.jsxs(Zr,{children:[e?l.jsx(zt,{children:l.jsx("use",{href:`${K}#icon-rectangle-mob`})}):l.jsx(zt,{children:l.jsx("use",{href:`${K}#icon-rectangle2`})}),l.jsx(ei,{children:"Менторинг"})]}),l.jsxs(Zr,{children:[e?l.jsx(zt,{children:l.jsx("use",{href:`${K}#icon-rectangle-mob`})}):l.jsx(zt,{children:l.jsx("use",{href:`${K}#icon-rectangle2`})}),l.jsx(ei,{children:"Рекомендації"})]})]})]})})},Fs=()=>{const e=Hn.useMediaQuery({maxWidth:767}),t=Hn.useMediaQuery({minWidth:768,maxWidth:1439}),n=Hn.useMediaQuery({minWidth:1440,maxWidth:1919}),r=Hn.useMediaQuery({minWidth:1920});return e&&"mobile"||t&&"tablet"||n&&"desktop"||r&&"largeDesktop"},Xv="/healthy-management-project/assets/denta_derm1x-JWCICTe_.webp",Gv="/healthy-management-project/assets/medialt1x-5LMkh0v8.webp",Jv="/healthy-management-project/assets/cures1x--AoJBOWJ.webp",qv="/healthy-management-project/assets/clinic1x-YgK5Wnno.webp",Zv="/healthy-management-project/assets/kmklam1x-FlPeEOTs.webp",e1="/healthy-management-project/assets/symmetrica1x-hhcOddzB.webp",El=[{image:Xv,category:"DentaDerm",title:"Діагностика бізнес-процесів, маркетингу, сервісу, розробка стратегії розвитку, менторство",about:["Діагностика бізнес-процесів та маркетингу","Стратегія розвитку","Підбір команди маркетингу","Менторство"],details:[{title:"Завдання:",about:["Розробка стратегії розвитку","Розробка нового сайту клініки","Пошук команди маркетингу"],comment:"Дії в результаті розробки стратегії розвитку передбачали роботу над проєктом в новому позиціонуванні,  пошук зовнішньої та внутрішньої команди для реалізації нового сайту, ведення соцмереж"},{title:"В результаті роботи над проєктом:",about:["Розроблені вектори розвитку","Розроблений та впроваджений новий сайт","Підібрана команда маркетингового супроводу"],comment:"В результаті співпраці партнер отримав комплексне бачення просування, сформована команда маркетингу"}]},{image:Gv,category:"Medialt",title:"Діагностика бізнес-процесів, маркетингу, сервісу, розробка стратегії розвитку, менторство",about:["Аудит ринку та конкурентів","Аудит маркетингу та сервісу","Розробка стратегії розвитку"],details:[{title:"Завдання:",about:["Розробка стратегії розвитку"]},{title:"Робота над задачою була розділена на два етапи:",about:["Аналіз конкурентів, ринку, виявлення зовнішніх можливостей та загроз","Аналіз сервісу медичного центру, аналіз роботи контакт центру, маркетингу, наявної бази пацієнтів та внутрішніх бізнес-процесів"]},{title:"В результаті комплексного аудиту підготували стратегію розвитку, яка передбачала рекомендації щодо:",about:["Управління маркетингом","Оптимізації роботи сервісу","Можливості МІС","Етапи розвитку напрямків та клініки вцілому"],comment:"В результаті співпраці - за 5 місяців ріст обороту в два рази"}]},{image:Jv,category:"Cures",title:"Автоматизація комунікації з пацієнтами",about:["Створення та запуск 20 чат-ботів для клінік","Проведення консультацій та аудитів комунікацій клінік з пацієнтами","Розробка персональних протоколів спілкування з пацієнтами"],details:[{title:"Завдання:",about:["Автоматизація комунікації з пацієнтами"]},{title:"В результаті роботи над проєктом:",about:["Розвиток проєкту по створенню чат-ботів для медичних центрів","Розробка протоколів супроводу та опитувальників для клінік","Проведення зустрічей та комунікацій з клініками","Розробка алгоритмів та запуск чат-ботів"],comment:"В результаті співпраці над проєктом запуск 20 чат-ботів для медичних центрів"}]},{image:qv,category:"Клініка ім. ак. Юрія Спіженка",title:"Менторство, діагностика бізнес-процесів, маркетингу та сервісу, розробка стратегії розвитку",about:["Діагностика бізнес-процесів","Аудит маркетингу та сервісу","Розробка стратегії розвитку та маркетингу","Розробка та впровадження комунікаційної стратегії","Ведення маркетингових активностей "],details:[{title:"Завдання:",about:["Рестарт клініки у воєний час"]},{title:"Робота над задачею була розділена на три етапи:",about:["Діагностика конкурентів, ринку, виявлення зовнішніх можливостей та загроз","Діагностика сервісу медичного центру, аналіз роботи контакт центру, маркетингу, наявної бази пацієнтів та внутрішніх бізнес-процесів","Розробка та впровадження стратегії маркетингу, комунікації та сервісу, супровід рекламних кампаній, оптимізація бізнес-процесів"],comment:"В результаті співпраці над проєктом: збільшення доходу клініки, вихід на довоєний об’єм"}]},{image:Zv,category:"KMKlab",title:"Діагностика маркетингу, сервісу, бізнес-процесів",about:["Аудит маркетингу та інструментів комунікацій","Аудит сервісу","Розробка рекомендацій щодо розвитку"],details:[{title:"Завдання:",about:["Аудит поточної маркетингової стратегії","Аудит сервісу","Формування рекомендацій по розвитку"]},{title:"Робота над задачою була розділена на два етапи:",about:["Відвідування всіх відділень лабораторій з метою формування рекомендацій по кожній локації","Аналіз поточної ситуації маркетингу та комунікацій, ведення соціальних мереж"],comment:"В результаті співпраці проаналізовано роботу відділу маркетингу та підрядників та надані рекомендації щодо структури відділу, сформовані подальші  кроки  маркетингової  та сервісної стратегії"}]},{image:e1,category:"Symmetrica",title:"Менторство, діагностика маркетингу, сервісу, бізнес-процесів",about:["Аудит маркетингу та сервісу","Розробка рекомендацій щодо розвитку","Оптимізація бізнес-процесів"],details:[{title:"Завдання:",about:["Діагностика поточної маркетингової діяльності та комунікацій","Аудит сервісу","Аудит роботи підрядників","Формування рекомендацій по розвитку"]},{title:"В результаті роботи над проєктом:",about:["Проведений поточний аудит шляху пацієнта, виявлені точки зростання сервісу","Проаналізовано роботу відділу маркетингу і підрядників та надані рекомендації щодо структури відділу","Надані рекомендації щодо формування подальших кроків маркетингової  та сервісної стратегії","Сформовані конверсійні показники та вектори руху","Надана менторська підтримка"]}]}],t1=E.section`
  padding-top: 40px;
  padding-bottom: 40px;
  @media screen and (min-width: 768px) {
    padding-top: 80px;
    padding-bottom: 80px;
  }
`,n1=E.h2`
  font-size: 48px;
  font-weight: 600;
  line-height: calc(56 / 48);

  margin-bottom: 40px;
`,r1=E.ul`
  display: flex;
  gap: 24px;
  flex-wrap: wrap;
  @media screen and (min-width: 768px) {
  }
`,i1=E.span`
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
`,o1=E.svg`
  fill: currentColor;
  stroke: currentColor;

  width: 24px;
  height: 24px;
`,s1=E.li`
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
`,l1=E.div`
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
`,a1=E.div`
  display: flex;
  flex-direction: column;
  gap: 16px;
`,u1=E.h4`
  font-size: ${e=>e.forDetail?"18px":"16px"};
  font-weight: 600;
  line-height: calc(${e=>e.forDetail?24/18:24/16});

  @media screen and (min-width: 768px) {
    font-size: ${e=>e.forDetail?"24px":"20px"};
    line-height: calc(${e=>e.forDetail?32/24:28/20});
  }
`,c1=E.ul`
  display: flex;
  flex-direction: column;
  gap: 8px;
`,d1=E.li`
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
`,f1=E.p`
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
`,p1=E.svg`
  fill: currentColor;
  stroke: currentColor;
`,Bh=({title:e,about:t,comment:n,additionalComment:r=!1})=>l.jsxs(a1,{children:[l.jsx(u1,{forDetail:r,children:e}),l.jsx(c1,{children:t==null?void 0:t.map(i=>l.jsxs(d1,{children:[l.jsx(p1,{children:l.jsx("use",{href:K+"#icon-done"})}),i]},i))}),n&&l.jsx(f1,{additionalComment:r,children:n})]}),h1=E.div`
  padding: 24px;
  display: flex;
  gap: 24px;
  flex-direction: column;

  color: var(--background-whitegrey, #f4f4f6);
  @media screen and (min-width: 768px) {
    padding: 40px;
  }
`,m1=E.h3`
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
`,g1=E.svg`
  fill: currentColor;
  stroke: currentColor;

  width: 24px;
  height: 24px;

  position: absolute;
  right: 28px;
  top: 28px;
`,y1=({dataList:{details:e,category:t}})=>{const n=Fs();return l.jsxs(h1,{children:[l.jsxs("div",{children:[l.jsx(m1,{symbols:t.length,children:t}),n==="mobile"&&l.jsx(g1,{children:l.jsx("use",{href:K+"#icon-close"})})]}),e.map((r,i)=>l.jsx(Bh,{title:r.title,about:r.about,comment:r.comment,additionalComment:i===0},r.title))]})},x1=E.div`
  display: flex;
  flex-direction: column;
  gap: 24px;

  color: var(--typography-bluedark, #1b3641);
`,v1=E.h3`
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
`,w1=E.img`
  height: 279px;
  width: 100%;
  border-radius: 8px;
  object-fit: cover;
  @media screen and (min-width: 768px) {
    height: 300px;
  }
`,k1=E.span`
  font-size: 14px;
  font-weight: 600;
  line-height: calc(18 / 14);
  text-align: center;
`,S1=({dataList:e,onClick:t})=>{const n=Fs(),{category:r,title:i,about:o=[],image:s}=e;return l.jsxs(x1,{onClick:t,children:[l.jsx(w1,{src:s,alt:i}),l.jsx("div",{children:l.jsx(v1,{symbols:r.length,children:r})}),l.jsx(Bh,{title:i,about:o}),n==="mobile"&&l.jsx(k1,{children:"Детальніше"})]})},j1=({item:e})=>{const[t,n]=ue.useState(!1),r=Fs(),i=()=>{r==="mobile"&&n(o=>!o)};return l.jsxs(s1,{children:[l.jsx(S1,{dataList:e,onClick:i}),l.jsx(l1,{isVisible:t,onClick:i,image:e.image,className:!t&&r==="mobile"?"visually-hidden":"",children:l.jsx(y1,{dataList:e})})]})},E1=()=>{const e=Fs(),[t,n]=ue.useState(e==="mobile"?[...El.slice(0,3)]:[...El]),r=()=>{t.length>4?n(i=>i.slice(0,3)):n([...El])};return l.jsxs(t1,{id:"projects",className:"container",style:{paddingTop:"80px",paddingBottom:"80px"},children:[l.jsx(n1,{children:"Проєкти"}),l.jsx(r1,{children:t.map(i=>l.jsx(j1,{item:i},i.category))}),e==="mobile"&&l.jsxs(i1,{onClick:r,children:[t.length>3?"Менше проєктів":"Більше проєктів",l.jsx(o1,{children:l.jsx("use",{href:K+`${t.length>3?"#icon-arrowup":"#icon-arrowdown"}`})})]})]})},_1=E.section`
  padding-top: 80px;
  padding-bottom: 80px;
  display: flex;
  gap: 24px;
`,b1=E.div`
  padding: 80px;
  max-width: 828px;
  height: 664px;
  box-shadow: 0px 0px 8px 0px rgba(27, 54, 65, 0.08);
  border-radius: 16px;
  background: var(--background-white);
`,C1=E.div`
  display: flex;
  flex-direction: column;
  gap: 40px;
  margin-bottom: 40px;
`,T1=E.h2`
  color: var(--typography-black);
  font-size: 48px;
  font-weight: 600;
  line-height: 56px;
`,P1=E.h2`
  color: var(--typography-bluedark);
  font-family: Montserrat;
  font-size: 20px;
  font-style: normal;
  font-weight: 500;
  line-height: 28px;
`,O1=E.ul`
  display: flex;
  flex-direction: column;
  gap: 24px;
`,_l=E.li`
  display: flex;
  gap: 16px;
  border-radius: 16px;
  background: var(--background-whitegrey);
  padding: 16px;
`,bl=E.svg`
  width: 24px;
  height: 24px;
  fill: var(--background-white);
  stroke-width: 4px;
`,Cl=E.p`
  color: var(--typography-bluedark);
  font-size: 20px;
  font-weight: 500;
  line-height: 28px;
`,R1=E.img`
  width: 828px;
  height: 664px;
`,M1="/healthy-management-project/assets/olga_with_book1x-kIN8FAVO.webp",A1="/healthy-management-project/assets/olga_with_book1x-KTuULWu1.jpg",N1="/healthy-management-project/assets/olga_with_book2x-lES61yI6.jpg",z1=()=>l.jsxs(_1,{className:"container",children:[l.jsxs(b1,{children:[l.jsxs(C1,{children:[l.jsx(T1,{children:"Принципи роботи"}),l.jsx(P1,{children:"Наші принципи роботи полягають у співдії з ціннісними брендами та командами, які готові до чесної співпраці, щоб сприяти досягненню поставлених цілей. Готові ділитися власним досвідом та створювати стратегії здорового менеджменту та розвитку, маркетингу та сервісу"})]}),l.jsxs(O1,{children:[l.jsxs(_l,{children:[l.jsx(bl,{children:l.jsx("use",{href:`${K}#icon-done-yellow`})}),l.jsx(Cl,{children:"Більше 18 років досвіду в маркетингу та комунікаціях"})]}),l.jsxs(_l,{children:[l.jsx(bl,{children:l.jsx("use",{href:`${K}#icon-done-yellow`})}),l.jsx(Cl,{children:"Глибоке розуміння бізнес-процесів медичних закладів"})]}),l.jsxs(_l,{children:[l.jsx(bl,{children:l.jsx("use",{href:`${K}#icon-done-yellow`})}),l.jsx(Cl,{children:"Використання принципів доказової медицини"})]})]})]}),l.jsxs("picture",{children:[l.jsx("source",{srcSet:`${N1} 2x, ${A1} 1x`,media:"(min-width: 1920px)"}),l.jsx(R1,{src:M1,alt:"Ольга Поліщук"})]})]}),L1=E.button`
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
`,D1=()=>{const[e,t]=ue.useState(!1);ue.useEffect(()=>{const r=()=>{const i=window.scrollY,o=document.getElementById("footer"),s=window.innerHeight+window.scrollY-o.offsetTop,a=Math.max(80,s);t(i>480||s>80),document.documentElement.style.setProperty("--scroll-to-top-bottom",`${a}px`)};return window.addEventListener("scroll",r),()=>{window.removeEventListener("scroll",r)}},[]);const n=()=>{window.scrollTo({top:0,behavior:"smooth"})};return l.jsx(l.Fragment,{children:e&&l.jsx("section",{className:"container",children:l.jsx(L1,{onClick:n,children:l.jsx("svg",{width:"24",height:"24",children:l.jsx("use",{href:`${K}#icon-arrowup`})})})})})};function Vh(e,t){return function(){return e.apply(t,arguments)}}const{toString:F1}=Object.prototype,{getPrototypeOf:Lu}=Object,Is=(e=>t=>{const n=F1.call(t);return e[n]||(e[n]=n.slice(8,-1).toLowerCase())})(Object.create(null)),Ht=e=>(e=e.toLowerCase(),t=>Is(t)===e),$s=e=>t=>typeof t===e,{isArray:Ur}=Array,Di=$s("undefined");function I1(e){return e!==null&&!Di(e)&&e.constructor!==null&&!Di(e.constructor)&&vt(e.constructor.isBuffer)&&e.constructor.isBuffer(e)}const Wh=Ht("ArrayBuffer");function $1(e){let t;return typeof ArrayBuffer<"u"&&ArrayBuffer.isView?t=ArrayBuffer.isView(e):t=e&&e.buffer&&Wh(e.buffer),t}const U1=$s("string"),vt=$s("function"),Hh=$s("number"),Us=e=>e!==null&&typeof e=="object",B1=e=>e===!0||e===!1,Lo=e=>{if(Is(e)!=="object")return!1;const t=Lu(e);return(t===null||t===Object.prototype||Object.getPrototypeOf(t)===null)&&!(Symbol.toStringTag in e)&&!(Symbol.iterator in e)},V1=Ht("Date"),W1=Ht("File"),H1=Ht("Blob"),Q1=Ht("FileList"),Y1=e=>Us(e)&&vt(e.pipe),K1=e=>{let t;return e&&(typeof FormData=="function"&&e instanceof FormData||vt(e.append)&&((t=Is(e))==="formdata"||t==="object"&&vt(e.toString)&&e.toString()==="[object FormData]"))},X1=Ht("URLSearchParams"),G1=e=>e.trim?e.trim():e.replace(/^[\s\uFEFF\xA0]+|[\s\uFEFF\xA0]+$/g,"");function Wi(e,t,{allOwnKeys:n=!1}={}){if(e===null||typeof e>"u")return;let r,i;if(typeof e!="object"&&(e=[e]),Ur(e))for(r=0,i=e.length;r<i;r++)t.call(null,e[r],r,e);else{const o=n?Object.getOwnPropertyNames(e):Object.keys(e),s=o.length;let a;for(r=0;r<s;r++)a=o[r],t.call(null,e[a],a,e)}}function Qh(e,t){t=t.toLowerCase();const n=Object.keys(e);let r=n.length,i;for(;r-- >0;)if(i=n[r],t===i.toLowerCase())return i;return null}const Yh=typeof globalThis<"u"?globalThis:typeof self<"u"?self:typeof window<"u"?window:global,Kh=e=>!Di(e)&&e!==Yh;function Aa(){const{caseless:e}=Kh(this)&&this||{},t={},n=(r,i)=>{const o=e&&Qh(t,i)||i;Lo(t[o])&&Lo(r)?t[o]=Aa(t[o],r):Lo(r)?t[o]=Aa({},r):Ur(r)?t[o]=r.slice():t[o]=r};for(let r=0,i=arguments.length;r<i;r++)arguments[r]&&Wi(arguments[r],n);return t}const J1=(e,t,n,{allOwnKeys:r}={})=>(Wi(t,(i,o)=>{n&&vt(i)?e[o]=Vh(i,n):e[o]=i},{allOwnKeys:r}),e),q1=e=>(e.charCodeAt(0)===65279&&(e=e.slice(1)),e),Z1=(e,t,n,r)=>{e.prototype=Object.create(t.prototype,r),e.prototype.constructor=e,Object.defineProperty(e,"super",{value:t.prototype}),n&&Object.assign(e.prototype,n)},ew=(e,t,n,r)=>{let i,o,s;const a={};if(t=t||{},e==null)return t;do{for(i=Object.getOwnPropertyNames(e),o=i.length;o-- >0;)s=i[o],(!r||r(s,e,t))&&!a[s]&&(t[s]=e[s],a[s]=!0);e=n!==!1&&Lu(e)}while(e&&(!n||n(e,t))&&e!==Object.prototype);return t},tw=(e,t,n)=>{e=String(e),(n===void 0||n>e.length)&&(n=e.length),n-=t.length;const r=e.indexOf(t,n);return r!==-1&&r===n},nw=e=>{if(!e)return null;if(Ur(e))return e;let t=e.length;if(!Hh(t))return null;const n=new Array(t);for(;t-- >0;)n[t]=e[t];return n},rw=(e=>t=>e&&t instanceof e)(typeof Uint8Array<"u"&&Lu(Uint8Array)),iw=(e,t)=>{const r=(e&&e[Symbol.iterator]).call(e);let i;for(;(i=r.next())&&!i.done;){const o=i.value;t.call(e,o[0],o[1])}},ow=(e,t)=>{let n;const r=[];for(;(n=e.exec(t))!==null;)r.push(n);return r},sw=Ht("HTMLFormElement"),lw=e=>e.toLowerCase().replace(/[-_\s]([a-z\d])(\w*)/g,function(n,r,i){return r.toUpperCase()+i}),Pd=(({hasOwnProperty:e})=>(t,n)=>e.call(t,n))(Object.prototype),aw=Ht("RegExp"),Xh=(e,t)=>{const n=Object.getOwnPropertyDescriptors(e),r={};Wi(n,(i,o)=>{let s;(s=t(i,o,e))!==!1&&(r[o]=s||i)}),Object.defineProperties(e,r)},uw=e=>{Xh(e,(t,n)=>{if(vt(e)&&["arguments","caller","callee"].indexOf(n)!==-1)return!1;const r=e[n];if(vt(r)){if(t.enumerable=!1,"writable"in t){t.writable=!1;return}t.set||(t.set=()=>{throw Error("Can not rewrite read-only method '"+n+"'")})}})},cw=(e,t)=>{const n={},r=i=>{i.forEach(o=>{n[o]=!0})};return Ur(e)?r(e):r(String(e).split(t)),n},dw=()=>{},fw=(e,t)=>(e=+e,Number.isFinite(e)?e:t),Tl="abcdefghijklmnopqrstuvwxyz",Od="0123456789",Gh={DIGIT:Od,ALPHA:Tl,ALPHA_DIGIT:Tl+Tl.toUpperCase()+Od},pw=(e=16,t=Gh.ALPHA_DIGIT)=>{let n="";const{length:r}=t;for(;e--;)n+=t[Math.random()*r|0];return n};function hw(e){return!!(e&&vt(e.append)&&e[Symbol.toStringTag]==="FormData"&&e[Symbol.iterator])}const mw=e=>{const t=new Array(10),n=(r,i)=>{if(Us(r)){if(t.indexOf(r)>=0)return;if(!("toJSON"in r)){t[i]=r;const o=Ur(r)?[]:{};return Wi(r,(s,a)=>{const u=n(s,i+1);!Di(u)&&(o[a]=u)}),t[i]=void 0,o}}return r};return n(e,0)},gw=Ht("AsyncFunction"),yw=e=>e&&(Us(e)||vt(e))&&vt(e.then)&&vt(e.catch),T={isArray:Ur,isArrayBuffer:Wh,isBuffer:I1,isFormData:K1,isArrayBufferView:$1,isString:U1,isNumber:Hh,isBoolean:B1,isObject:Us,isPlainObject:Lo,isUndefined:Di,isDate:V1,isFile:W1,isBlob:H1,isRegExp:aw,isFunction:vt,isStream:Y1,isURLSearchParams:X1,isTypedArray:rw,isFileList:Q1,forEach:Wi,merge:Aa,extend:J1,trim:G1,stripBOM:q1,inherits:Z1,toFlatObject:ew,kindOf:Is,kindOfTest:Ht,endsWith:tw,toArray:nw,forEachEntry:iw,matchAll:ow,isHTMLForm:sw,hasOwnProperty:Pd,hasOwnProp:Pd,reduceDescriptors:Xh,freezeMethods:uw,toObjectSet:cw,toCamelCase:lw,noop:dw,toFiniteNumber:fw,findKey:Qh,global:Yh,isContextDefined:Kh,ALPHABET:Gh,generateString:pw,isSpecCompliantForm:hw,toJSONObject:mw,isAsyncFn:gw,isThenable:yw};function re(e,t,n,r,i){Error.call(this),Error.captureStackTrace?Error.captureStackTrace(this,this.constructor):this.stack=new Error().stack,this.message=e,this.name="AxiosError",t&&(this.code=t),n&&(this.config=n),r&&(this.request=r),i&&(this.response=i)}T.inherits(re,Error,{toJSON:function(){return{message:this.message,name:this.name,description:this.description,number:this.number,fileName:this.fileName,lineNumber:this.lineNumber,columnNumber:this.columnNumber,stack:this.stack,config:T.toJSONObject(this.config),code:this.code,status:this.response&&this.response.status?this.response.status:null}}});const Jh=re.prototype,qh={};["ERR_BAD_OPTION_VALUE","ERR_BAD_OPTION","ECONNABORTED","ETIMEDOUT","ERR_NETWORK","ERR_FR_TOO_MANY_REDIRECTS","ERR_DEPRECATED","ERR_BAD_RESPONSE","ERR_BAD_REQUEST","ERR_CANCELED","ERR_NOT_SUPPORT","ERR_INVALID_URL"].forEach(e=>{qh[e]={value:e}});Object.defineProperties(re,qh);Object.defineProperty(Jh,"isAxiosError",{value:!0});re.from=(e,t,n,r,i,o)=>{const s=Object.create(Jh);return T.toFlatObject(e,s,function(u){return u!==Error.prototype},a=>a!=="isAxiosError"),re.call(s,e.message,t,n,r,i),s.cause=e,s.name=e.name,o&&Object.assign(s,o),s};const xw=null;function Na(e){return T.isPlainObject(e)||T.isArray(e)}function Zh(e){return T.endsWith(e,"[]")?e.slice(0,-2):e}function Rd(e,t,n){return e?e.concat(t).map(function(i,o){return i=Zh(i),!n&&o?"["+i+"]":i}).join(n?".":""):t}function vw(e){return T.isArray(e)&&!e.some(Na)}const ww=T.toFlatObject(T,{},null,function(t){return/^is[A-Z]/.test(t)});function Bs(e,t,n){if(!T.isObject(e))throw new TypeError("target must be an object");t=t||new FormData,n=T.toFlatObject(n,{metaTokens:!0,dots:!1,indexes:!1},!1,function(x,C){return!T.isUndefined(C[x])});const r=n.metaTokens,i=n.visitor||m,o=n.dots,s=n.indexes,u=(n.Blob||typeof Blob<"u"&&Blob)&&T.isSpecCompliantForm(t);if(!T.isFunction(i))throw new TypeError("visitor must be a function");function c(y){if(y===null)return"";if(T.isDate(y))return y.toISOString();if(!u&&T.isBlob(y))throw new re("Blob is not supported. Use a Buffer instead.");return T.isArrayBuffer(y)||T.isTypedArray(y)?u&&typeof Blob=="function"?new Blob([y]):Buffer.from(y):y}function m(y,x,C){let p=y;if(y&&!C&&typeof y=="object"){if(T.endsWith(x,"{}"))x=r?x:x.slice(0,-2),y=JSON.stringify(y);else if(T.isArray(y)&&vw(y)||(T.isFileList(y)||T.endsWith(x,"[]"))&&(p=T.toArray(y)))return x=Zh(x),p.forEach(function(g,k){!(T.isUndefined(g)||g===null)&&t.append(s===!0?Rd([x],k,o):s===null?x:x+"[]",c(g))}),!1}return Na(y)?!0:(t.append(Rd(C,x,o),c(y)),!1)}const f=[],h=Object.assign(ww,{defaultVisitor:m,convertValue:c,isVisitable:Na});function w(y,x){if(!T.isUndefined(y)){if(f.indexOf(y)!==-1)throw Error("Circular reference detected in "+x.join("."));f.push(y),T.forEach(y,function(p,d){(!(T.isUndefined(p)||p===null)&&i.call(t,p,T.isString(d)?d.trim():d,x,h))===!0&&w(p,x?x.concat(d):[d])}),f.pop()}}if(!T.isObject(e))throw new TypeError("data must be an object");return w(e),t}function Md(e){const t={"!":"%21","'":"%27","(":"%28",")":"%29","~":"%7E","%20":"+","%00":"\0"};return encodeURIComponent(e).replace(/[!'()~]|%20|%00/g,function(r){return t[r]})}function Du(e,t){this._pairs=[],e&&Bs(e,this,t)}const em=Du.prototype;em.append=function(t,n){this._pairs.push([t,n])};em.toString=function(t){const n=t?function(r){return t.call(this,r,Md)}:Md;return this._pairs.map(function(i){return n(i[0])+"="+n(i[1])},"").join("&")};function kw(e){return encodeURIComponent(e).replace(/%3A/gi,":").replace(/%24/g,"$").replace(/%2C/gi,",").replace(/%20/g,"+").replace(/%5B/gi,"[").replace(/%5D/gi,"]")}function tm(e,t,n){if(!t)return e;const r=n&&n.encode||kw,i=n&&n.serialize;let o;if(i?o=i(t,n):o=T.isURLSearchParams(t)?t.toString():new Du(t,n).toString(r),o){const s=e.indexOf("#");s!==-1&&(e=e.slice(0,s)),e+=(e.indexOf("?")===-1?"?":"&")+o}return e}class Sw{constructor(){this.handlers=[]}use(t,n,r){return this.handlers.push({fulfilled:t,rejected:n,synchronous:r?r.synchronous:!1,runWhen:r?r.runWhen:null}),this.handlers.length-1}eject(t){this.handlers[t]&&(this.handlers[t]=null)}clear(){this.handlers&&(this.handlers=[])}forEach(t){T.forEach(this.handlers,function(r){r!==null&&t(r)})}}const Ad=Sw,nm={silentJSONParsing:!0,forcedJSONParsing:!0,clarifyTimeoutError:!1},jw=typeof URLSearchParams<"u"?URLSearchParams:Du,Ew=typeof FormData<"u"?FormData:null,_w=typeof Blob<"u"?Blob:null,bw={isBrowser:!0,classes:{URLSearchParams:jw,FormData:Ew,Blob:_w},protocols:["http","https","file","blob","url","data"]},rm=typeof window<"u"&&typeof document<"u",Cw=(e=>rm&&["ReactNative","NativeScript","NS"].indexOf(e)<0)(typeof navigator<"u"&&navigator.product),Tw=typeof WorkerGlobalScope<"u"&&self instanceof WorkerGlobalScope&&typeof self.importScripts=="function",Pw=Object.freeze(Object.defineProperty({__proto__:null,hasBrowserEnv:rm,hasStandardBrowserEnv:Cw,hasStandardBrowserWebWorkerEnv:Tw},Symbol.toStringTag,{value:"Module"})),$t={...Pw,...bw};function Ow(e,t){return Bs(e,new $t.classes.URLSearchParams,Object.assign({visitor:function(n,r,i,o){return $t.isNode&&T.isBuffer(n)?(this.append(r,n.toString("base64")),!1):o.defaultVisitor.apply(this,arguments)}},t))}function Rw(e){return T.matchAll(/\w+|\[(\w*)]/g,e).map(t=>t[0]==="[]"?"":t[1]||t[0])}function Mw(e){const t={},n=Object.keys(e);let r;const i=n.length;let o;for(r=0;r<i;r++)o=n[r],t[o]=e[o];return t}function im(e){function t(n,r,i,o){let s=n[o++];const a=Number.isFinite(+s),u=o>=n.length;return s=!s&&T.isArray(i)?i.length:s,u?(T.hasOwnProp(i,s)?i[s]=[i[s],r]:i[s]=r,!a):((!i[s]||!T.isObject(i[s]))&&(i[s]=[]),t(n,r,i[s],o)&&T.isArray(i[s])&&(i[s]=Mw(i[s])),!a)}if(T.isFormData(e)&&T.isFunction(e.entries)){const n={};return T.forEachEntry(e,(r,i)=>{t(Rw(r),i,n,0)}),n}return null}function Aw(e,t,n){if(T.isString(e))try{return(t||JSON.parse)(e),T.trim(e)}catch(r){if(r.name!=="SyntaxError")throw r}return(n||JSON.stringify)(e)}const Fu={transitional:nm,adapter:["xhr","http"],transformRequest:[function(t,n){const r=n.getContentType()||"",i=r.indexOf("application/json")>-1,o=T.isObject(t);if(o&&T.isHTMLForm(t)&&(t=new FormData(t)),T.isFormData(t))return i&&i?JSON.stringify(im(t)):t;if(T.isArrayBuffer(t)||T.isBuffer(t)||T.isStream(t)||T.isFile(t)||T.isBlob(t))return t;if(T.isArrayBufferView(t))return t.buffer;if(T.isURLSearchParams(t))return n.setContentType("application/x-www-form-urlencoded;charset=utf-8",!1),t.toString();let a;if(o){if(r.indexOf("application/x-www-form-urlencoded")>-1)return Ow(t,this.formSerializer).toString();if((a=T.isFileList(t))||r.indexOf("multipart/form-data")>-1){const u=this.env&&this.env.FormData;return Bs(a?{"files[]":t}:t,u&&new u,this.formSerializer)}}return o||i?(n.setContentType("application/json",!1),Aw(t)):t}],transformResponse:[function(t){const n=this.transitional||Fu.transitional,r=n&&n.forcedJSONParsing,i=this.responseType==="json";if(t&&T.isString(t)&&(r&&!this.responseType||i)){const s=!(n&&n.silentJSONParsing)&&i;try{return JSON.parse(t)}catch(a){if(s)throw a.name==="SyntaxError"?re.from(a,re.ERR_BAD_RESPONSE,this,null,this.response):a}}return t}],timeout:0,xsrfCookieName:"XSRF-TOKEN",xsrfHeaderName:"X-XSRF-TOKEN",maxContentLength:-1,maxBodyLength:-1,env:{FormData:$t.classes.FormData,Blob:$t.classes.Blob},validateStatus:function(t){return t>=200&&t<300},headers:{common:{Accept:"application/json, text/plain, */*","Content-Type":void 0}}};T.forEach(["delete","get","head","post","put","patch"],e=>{Fu.headers[e]={}});const Iu=Fu,Nw=T.toObjectSet(["age","authorization","content-length","content-type","etag","expires","from","host","if-modified-since","if-unmodified-since","last-modified","location","max-forwards","proxy-authorization","referer","retry-after","user-agent"]),zw=e=>{const t={};let n,r,i;return e&&e.split(`
`).forEach(function(s){i=s.indexOf(":"),n=s.substring(0,i).trim().toLowerCase(),r=s.substring(i+1).trim(),!(!n||t[n]&&Nw[n])&&(n==="set-cookie"?t[n]?t[n].push(r):t[n]=[r]:t[n]=t[n]?t[n]+", "+r:r)}),t},Nd=Symbol("internals");function ti(e){return e&&String(e).trim().toLowerCase()}function Do(e){return e===!1||e==null?e:T.isArray(e)?e.map(Do):String(e)}function Lw(e){const t=Object.create(null),n=/([^\s,;=]+)\s*(?:=\s*([^,;]+))?/g;let r;for(;r=n.exec(e);)t[r[1]]=r[2];return t}const Dw=e=>/^[-_a-zA-Z0-9^`|~,!#$%&'*+.]+$/.test(e.trim());function Pl(e,t,n,r,i){if(T.isFunction(r))return r.call(this,t,n);if(i&&(t=n),!!T.isString(t)){if(T.isString(r))return t.indexOf(r)!==-1;if(T.isRegExp(r))return r.test(t)}}function Fw(e){return e.trim().toLowerCase().replace(/([a-z\d])(\w*)/g,(t,n,r)=>n.toUpperCase()+r)}function Iw(e,t){const n=T.toCamelCase(" "+t);["get","set","has"].forEach(r=>{Object.defineProperty(e,r+n,{value:function(i,o,s){return this[r].call(this,t,i,o,s)},configurable:!0})})}class Vs{constructor(t){t&&this.set(t)}set(t,n,r){const i=this;function o(a,u,c){const m=ti(u);if(!m)throw new Error("header name must be a non-empty string");const f=T.findKey(i,m);(!f||i[f]===void 0||c===!0||c===void 0&&i[f]!==!1)&&(i[f||u]=Do(a))}const s=(a,u)=>T.forEach(a,(c,m)=>o(c,m,u));return T.isPlainObject(t)||t instanceof this.constructor?s(t,n):T.isString(t)&&(t=t.trim())&&!Dw(t)?s(zw(t),n):t!=null&&o(n,t,r),this}get(t,n){if(t=ti(t),t){const r=T.findKey(this,t);if(r){const i=this[r];if(!n)return i;if(n===!0)return Lw(i);if(T.isFunction(n))return n.call(this,i,r);if(T.isRegExp(n))return n.exec(i);throw new TypeError("parser must be boolean|regexp|function")}}}has(t,n){if(t=ti(t),t){const r=T.findKey(this,t);return!!(r&&this[r]!==void 0&&(!n||Pl(this,this[r],r,n)))}return!1}delete(t,n){const r=this;let i=!1;function o(s){if(s=ti(s),s){const a=T.findKey(r,s);a&&(!n||Pl(r,r[a],a,n))&&(delete r[a],i=!0)}}return T.isArray(t)?t.forEach(o):o(t),i}clear(t){const n=Object.keys(this);let r=n.length,i=!1;for(;r--;){const o=n[r];(!t||Pl(this,this[o],o,t,!0))&&(delete this[o],i=!0)}return i}normalize(t){const n=this,r={};return T.forEach(this,(i,o)=>{const s=T.findKey(r,o);if(s){n[s]=Do(i),delete n[o];return}const a=t?Fw(o):String(o).trim();a!==o&&delete n[o],n[a]=Do(i),r[a]=!0}),this}concat(...t){return this.constructor.concat(this,...t)}toJSON(t){const n=Object.create(null);return T.forEach(this,(r,i)=>{r!=null&&r!==!1&&(n[i]=t&&T.isArray(r)?r.join(", "):r)}),n}[Symbol.iterator](){return Object.entries(this.toJSON())[Symbol.iterator]()}toString(){return Object.entries(this.toJSON()).map(([t,n])=>t+": "+n).join(`
`)}get[Symbol.toStringTag](){return"AxiosHeaders"}static from(t){return t instanceof this?t:new this(t)}static concat(t,...n){const r=new this(t);return n.forEach(i=>r.set(i)),r}static accessor(t){const r=(this[Nd]=this[Nd]={accessors:{}}).accessors,i=this.prototype;function o(s){const a=ti(s);r[a]||(Iw(i,s),r[a]=!0)}return T.isArray(t)?t.forEach(o):o(t),this}}Vs.accessor(["Content-Type","Content-Length","Accept","Accept-Encoding","User-Agent","Authorization"]);T.reduceDescriptors(Vs.prototype,({value:e},t)=>{let n=t[0].toUpperCase()+t.slice(1);return{get:()=>e,set(r){this[n]=r}}});T.freezeMethods(Vs);const Zt=Vs;function Ol(e,t){const n=this||Iu,r=t||n,i=Zt.from(r.headers);let o=r.data;return T.forEach(e,function(a){o=a.call(n,o,i.normalize(),t?t.status:void 0)}),i.normalize(),o}function om(e){return!!(e&&e.__CANCEL__)}function Hi(e,t,n){re.call(this,e??"canceled",re.ERR_CANCELED,t,n),this.name="CanceledError"}T.inherits(Hi,re,{__CANCEL__:!0});function $w(e,t,n){const r=n.config.validateStatus;!n.status||!r||r(n.status)?e(n):t(new re("Request failed with status code "+n.status,[re.ERR_BAD_REQUEST,re.ERR_BAD_RESPONSE][Math.floor(n.status/100)-4],n.config,n.request,n))}const Uw=$t.hasStandardBrowserEnv?{write(e,t,n,r,i,o){const s=[e+"="+encodeURIComponent(t)];T.isNumber(n)&&s.push("expires="+new Date(n).toGMTString()),T.isString(r)&&s.push("path="+r),T.isString(i)&&s.push("domain="+i),o===!0&&s.push("secure"),document.cookie=s.join("; ")},read(e){const t=document.cookie.match(new RegExp("(^|;\\s*)("+e+")=([^;]*)"));return t?decodeURIComponent(t[3]):null},remove(e){this.write(e,"",Date.now()-864e5)}}:{write(){},read(){return null},remove(){}};function Bw(e){return/^([a-z][a-z\d+\-.]*:)?\/\//i.test(e)}function Vw(e,t){return t?e.replace(/\/+$/,"")+"/"+t.replace(/^\/+/,""):e}function sm(e,t){return e&&!Bw(t)?Vw(e,t):t}const Ww=$t.hasStandardBrowserEnv?function(){const t=/(msie|trident)/i.test(navigator.userAgent),n=document.createElement("a");let r;function i(o){let s=o;return t&&(n.setAttribute("href",s),s=n.href),n.setAttribute("href",s),{href:n.href,protocol:n.protocol?n.protocol.replace(/:$/,""):"",host:n.host,search:n.search?n.search.replace(/^\?/,""):"",hash:n.hash?n.hash.replace(/^#/,""):"",hostname:n.hostname,port:n.port,pathname:n.pathname.charAt(0)==="/"?n.pathname:"/"+n.pathname}}return r=i(window.location.href),function(s){const a=T.isString(s)?i(s):s;return a.protocol===r.protocol&&a.host===r.host}}():function(){return function(){return!0}}();function Hw(e){const t=/^([-+\w]{1,25})(:?\/\/|:)/.exec(e);return t&&t[1]||""}function Qw(e,t){e=e||10;const n=new Array(e),r=new Array(e);let i=0,o=0,s;return t=t!==void 0?t:1e3,function(u){const c=Date.now(),m=r[o];s||(s=c),n[i]=u,r[i]=c;let f=o,h=0;for(;f!==i;)h+=n[f++],f=f%e;if(i=(i+1)%e,i===o&&(o=(o+1)%e),c-s<t)return;const w=m&&c-m;return w?Math.round(h*1e3/w):void 0}}function zd(e,t){let n=0;const r=Qw(50,250);return i=>{const o=i.loaded,s=i.lengthComputable?i.total:void 0,a=o-n,u=r(a),c=o<=s;n=o;const m={loaded:o,total:s,progress:s?o/s:void 0,bytes:a,rate:u||void 0,estimated:u&&s&&c?(s-o)/u:void 0,event:i};m[t?"download":"upload"]=!0,e(m)}}const Yw=typeof XMLHttpRequest<"u",Kw=Yw&&function(e){return new Promise(function(n,r){let i=e.data;const o=Zt.from(e.headers).normalize();let{responseType:s,withXSRFToken:a}=e,u;function c(){e.cancelToken&&e.cancelToken.unsubscribe(u),e.signal&&e.signal.removeEventListener("abort",u)}let m;if(T.isFormData(i)){if($t.hasStandardBrowserEnv||$t.hasStandardBrowserWebWorkerEnv)o.setContentType(!1);else if((m=o.getContentType())!==!1){const[x,...C]=m?m.split(";").map(p=>p.trim()).filter(Boolean):[];o.setContentType([x||"multipart/form-data",...C].join("; "))}}let f=new XMLHttpRequest;if(e.auth){const x=e.auth.username||"",C=e.auth.password?unescape(encodeURIComponent(e.auth.password)):"";o.set("Authorization","Basic "+btoa(x+":"+C))}const h=sm(e.baseURL,e.url);f.open(e.method.toUpperCase(),tm(h,e.params,e.paramsSerializer),!0),f.timeout=e.timeout;function w(){if(!f)return;const x=Zt.from("getAllResponseHeaders"in f&&f.getAllResponseHeaders()),p={data:!s||s==="text"||s==="json"?f.responseText:f.response,status:f.status,statusText:f.statusText,headers:x,config:e,request:f};$w(function(g){n(g),c()},function(g){r(g),c()},p),f=null}if("onloadend"in f?f.onloadend=w:f.onreadystatechange=function(){!f||f.readyState!==4||f.status===0&&!(f.responseURL&&f.responseURL.indexOf("file:")===0)||setTimeout(w)},f.onabort=function(){f&&(r(new re("Request aborted",re.ECONNABORTED,e,f)),f=null)},f.onerror=function(){r(new re("Network Error",re.ERR_NETWORK,e,f)),f=null},f.ontimeout=function(){let C=e.timeout?"timeout of "+e.timeout+"ms exceeded":"timeout exceeded";const p=e.transitional||nm;e.timeoutErrorMessage&&(C=e.timeoutErrorMessage),r(new re(C,p.clarifyTimeoutError?re.ETIMEDOUT:re.ECONNABORTED,e,f)),f=null},$t.hasStandardBrowserEnv&&(a&&T.isFunction(a)&&(a=a(e)),a||a!==!1&&Ww(h))){const x=e.xsrfHeaderName&&e.xsrfCookieName&&Uw.read(e.xsrfCookieName);x&&o.set(e.xsrfHeaderName,x)}i===void 0&&o.setContentType(null),"setRequestHeader"in f&&T.forEach(o.toJSON(),function(C,p){f.setRequestHeader(p,C)}),T.isUndefined(e.withCredentials)||(f.withCredentials=!!e.withCredentials),s&&s!=="json"&&(f.responseType=e.responseType),typeof e.onDownloadProgress=="function"&&f.addEventListener("progress",zd(e.onDownloadProgress,!0)),typeof e.onUploadProgress=="function"&&f.upload&&f.upload.addEventListener("progress",zd(e.onUploadProgress)),(e.cancelToken||e.signal)&&(u=x=>{f&&(r(!x||x.type?new Hi(null,e,f):x),f.abort(),f=null)},e.cancelToken&&e.cancelToken.subscribe(u),e.signal&&(e.signal.aborted?u():e.signal.addEventListener("abort",u)));const y=Hw(h);if(y&&$t.protocols.indexOf(y)===-1){r(new re("Unsupported protocol "+y+":",re.ERR_BAD_REQUEST,e));return}f.send(i||null)})},za={http:xw,xhr:Kw};T.forEach(za,(e,t)=>{if(e){try{Object.defineProperty(e,"name",{value:t})}catch{}Object.defineProperty(e,"adapterName",{value:t})}});const Ld=e=>`- ${e}`,Xw=e=>T.isFunction(e)||e===null||e===!1,lm={getAdapter:e=>{e=T.isArray(e)?e:[e];const{length:t}=e;let n,r;const i={};for(let o=0;o<t;o++){n=e[o];let s;if(r=n,!Xw(n)&&(r=za[(s=String(n)).toLowerCase()],r===void 0))throw new re(`Unknown adapter '${s}'`);if(r)break;i[s||"#"+o]=r}if(!r){const o=Object.entries(i).map(([a,u])=>`adapter ${a} `+(u===!1?"is not supported by the environment":"is not available in the build"));let s=t?o.length>1?`since :
`+o.map(Ld).join(`
`):" "+Ld(o[0]):"as no adapter specified";throw new re("There is no suitable adapter to dispatch the request "+s,"ERR_NOT_SUPPORT")}return r},adapters:za};function Rl(e){if(e.cancelToken&&e.cancelToken.throwIfRequested(),e.signal&&e.signal.aborted)throw new Hi(null,e)}function Dd(e){return Rl(e),e.headers=Zt.from(e.headers),e.data=Ol.call(e,e.transformRequest),["post","put","patch"].indexOf(e.method)!==-1&&e.headers.setContentType("application/x-www-form-urlencoded",!1),lm.getAdapter(e.adapter||Iu.adapter)(e).then(function(r){return Rl(e),r.data=Ol.call(e,e.transformResponse,r),r.headers=Zt.from(r.headers),r},function(r){return om(r)||(Rl(e),r&&r.response&&(r.response.data=Ol.call(e,e.transformResponse,r.response),r.response.headers=Zt.from(r.response.headers))),Promise.reject(r)})}const Fd=e=>e instanceof Zt?e.toJSON():e;function Lr(e,t){t=t||{};const n={};function r(c,m,f){return T.isPlainObject(c)&&T.isPlainObject(m)?T.merge.call({caseless:f},c,m):T.isPlainObject(m)?T.merge({},m):T.isArray(m)?m.slice():m}function i(c,m,f){if(T.isUndefined(m)){if(!T.isUndefined(c))return r(void 0,c,f)}else return r(c,m,f)}function o(c,m){if(!T.isUndefined(m))return r(void 0,m)}function s(c,m){if(T.isUndefined(m)){if(!T.isUndefined(c))return r(void 0,c)}else return r(void 0,m)}function a(c,m,f){if(f in t)return r(c,m);if(f in e)return r(void 0,c)}const u={url:o,method:o,data:o,baseURL:s,transformRequest:s,transformResponse:s,paramsSerializer:s,timeout:s,timeoutMessage:s,withCredentials:s,withXSRFToken:s,adapter:s,responseType:s,xsrfCookieName:s,xsrfHeaderName:s,onUploadProgress:s,onDownloadProgress:s,decompress:s,maxContentLength:s,maxBodyLength:s,beforeRedirect:s,transport:s,httpAgent:s,httpsAgent:s,cancelToken:s,socketPath:s,responseEncoding:s,validateStatus:a,headers:(c,m)=>i(Fd(c),Fd(m),!0)};return T.forEach(Object.keys(Object.assign({},e,t)),function(m){const f=u[m]||i,h=f(e[m],t[m],m);T.isUndefined(h)&&f!==a||(n[m]=h)}),n}const am="1.6.2",$u={};["object","boolean","number","function","string","symbol"].forEach((e,t)=>{$u[e]=function(r){return typeof r===e||"a"+(t<1?"n ":" ")+e}});const Id={};$u.transitional=function(t,n,r){function i(o,s){return"[Axios v"+am+"] Transitional option '"+o+"'"+s+(r?". "+r:"")}return(o,s,a)=>{if(t===!1)throw new re(i(s," has been removed"+(n?" in "+n:"")),re.ERR_DEPRECATED);return n&&!Id[s]&&(Id[s]=!0,console.warn(i(s," has been deprecated since v"+n+" and will be removed in the near future"))),t?t(o,s,a):!0}};function Gw(e,t,n){if(typeof e!="object")throw new re("options must be an object",re.ERR_BAD_OPTION_VALUE);const r=Object.keys(e);let i=r.length;for(;i-- >0;){const o=r[i],s=t[o];if(s){const a=e[o],u=a===void 0||s(a,o,e);if(u!==!0)throw new re("option "+o+" must be "+u,re.ERR_BAD_OPTION_VALUE);continue}if(n!==!0)throw new re("Unknown option "+o,re.ERR_BAD_OPTION)}}const La={assertOptions:Gw,validators:$u},gn=La.validators;class ps{constructor(t){this.defaults=t,this.interceptors={request:new Ad,response:new Ad}}request(t,n){typeof t=="string"?(n=n||{},n.url=t):n=t||{},n=Lr(this.defaults,n);const{transitional:r,paramsSerializer:i,headers:o}=n;r!==void 0&&La.assertOptions(r,{silentJSONParsing:gn.transitional(gn.boolean),forcedJSONParsing:gn.transitional(gn.boolean),clarifyTimeoutError:gn.transitional(gn.boolean)},!1),i!=null&&(T.isFunction(i)?n.paramsSerializer={serialize:i}:La.assertOptions(i,{encode:gn.function,serialize:gn.function},!0)),n.method=(n.method||this.defaults.method||"get").toLowerCase();let s=o&&T.merge(o.common,o[n.method]);o&&T.forEach(["delete","get","head","post","put","patch","common"],y=>{delete o[y]}),n.headers=Zt.concat(s,o);const a=[];let u=!0;this.interceptors.request.forEach(function(x){typeof x.runWhen=="function"&&x.runWhen(n)===!1||(u=u&&x.synchronous,a.unshift(x.fulfilled,x.rejected))});const c=[];this.interceptors.response.forEach(function(x){c.push(x.fulfilled,x.rejected)});let m,f=0,h;if(!u){const y=[Dd.bind(this),void 0];for(y.unshift.apply(y,a),y.push.apply(y,c),h=y.length,m=Promise.resolve(n);f<h;)m=m.then(y[f++],y[f++]);return m}h=a.length;let w=n;for(f=0;f<h;){const y=a[f++],x=a[f++];try{w=y(w)}catch(C){x.call(this,C);break}}try{m=Dd.call(this,w)}catch(y){return Promise.reject(y)}for(f=0,h=c.length;f<h;)m=m.then(c[f++],c[f++]);return m}getUri(t){t=Lr(this.defaults,t);const n=sm(t.baseURL,t.url);return tm(n,t.params,t.paramsSerializer)}}T.forEach(["delete","get","head","options"],function(t){ps.prototype[t]=function(n,r){return this.request(Lr(r||{},{method:t,url:n,data:(r||{}).data}))}});T.forEach(["post","put","patch"],function(t){function n(r){return function(o,s,a){return this.request(Lr(a||{},{method:t,headers:r?{"Content-Type":"multipart/form-data"}:{},url:o,data:s}))}}ps.prototype[t]=n(),ps.prototype[t+"Form"]=n(!0)});const Fo=ps;class Uu{constructor(t){if(typeof t!="function")throw new TypeError("executor must be a function.");let n;this.promise=new Promise(function(o){n=o});const r=this;this.promise.then(i=>{if(!r._listeners)return;let o=r._listeners.length;for(;o-- >0;)r._listeners[o](i);r._listeners=null}),this.promise.then=i=>{let o;const s=new Promise(a=>{r.subscribe(a),o=a}).then(i);return s.cancel=function(){r.unsubscribe(o)},s},t(function(o,s,a){r.reason||(r.reason=new Hi(o,s,a),n(r.reason))})}throwIfRequested(){if(this.reason)throw this.reason}subscribe(t){if(this.reason){t(this.reason);return}this._listeners?this._listeners.push(t):this._listeners=[t]}unsubscribe(t){if(!this._listeners)return;const n=this._listeners.indexOf(t);n!==-1&&this._listeners.splice(n,1)}static source(){let t;return{token:new Uu(function(i){t=i}),cancel:t}}}const Jw=Uu;function qw(e){return function(n){return e.apply(null,n)}}function Zw(e){return T.isObject(e)&&e.isAxiosError===!0}const Da={Continue:100,SwitchingProtocols:101,Processing:102,EarlyHints:103,Ok:200,Created:201,Accepted:202,NonAuthoritativeInformation:203,NoContent:204,ResetContent:205,PartialContent:206,MultiStatus:207,AlreadyReported:208,ImUsed:226,MultipleChoices:300,MovedPermanently:301,Found:302,SeeOther:303,NotModified:304,UseProxy:305,Unused:306,TemporaryRedirect:307,PermanentRedirect:308,BadRequest:400,Unauthorized:401,PaymentRequired:402,Forbidden:403,NotFound:404,MethodNotAllowed:405,NotAcceptable:406,ProxyAuthenticationRequired:407,RequestTimeout:408,Conflict:409,Gone:410,LengthRequired:411,PreconditionFailed:412,PayloadTooLarge:413,UriTooLong:414,UnsupportedMediaType:415,RangeNotSatisfiable:416,ExpectationFailed:417,ImATeapot:418,MisdirectedRequest:421,UnprocessableEntity:422,Locked:423,FailedDependency:424,TooEarly:425,UpgradeRequired:426,PreconditionRequired:428,TooManyRequests:429,RequestHeaderFieldsTooLarge:431,UnavailableForLegalReasons:451,InternalServerError:500,NotImplemented:501,BadGateway:502,ServiceUnavailable:503,GatewayTimeout:504,HttpVersionNotSupported:505,VariantAlsoNegotiates:506,InsufficientStorage:507,LoopDetected:508,NotExtended:510,NetworkAuthenticationRequired:511};Object.entries(Da).forEach(([e,t])=>{Da[t]=e});const e2=Da;function um(e){const t=new Fo(e),n=Vh(Fo.prototype.request,t);return T.extend(n,Fo.prototype,t,{allOwnKeys:!0}),T.extend(n,t,null,{allOwnKeys:!0}),n.create=function(i){return um(Lr(e,i))},n}const Oe=um(Iu);Oe.Axios=Fo;Oe.CanceledError=Hi;Oe.CancelToken=Jw;Oe.isCancel=om;Oe.VERSION=am;Oe.toFormData=Bs;Oe.AxiosError=re;Oe.Cancel=Oe.CanceledError;Oe.all=function(t){return Promise.all(t)};Oe.spread=qw;Oe.isAxiosError=Zw;Oe.mergeConfig=Lr;Oe.AxiosHeaders=Zt;Oe.formToJSON=e=>im(T.isHTMLForm(e)?new FormData(e):e);Oe.getAdapter=lm.getAdapter;Oe.HttpStatusCode=e2;Oe.default=Oe;const t2=Oe,n2="/healthy-management-project/assets/computer1x-59AoGLTz.jpg",r2="/healthy-management-project/assets/computer1x-rNaa-S8Z.webp",i2="/healthy-management-project/assets/computer@2x-aIbrJSD2.jpg",o2=E.div`
  padding: 80px 0;
`,s2=E.h2`
  margin-bottom: 40px;
  font-size: 48px;
  font-weight: 600;
  line-height: 1.17;
  color: var(--typography-black);
`,l2=E.div`
  width: 100%;
  height: 738px;
  display: flex;
  gap: 24px;
`,a2=E.img`
  max-width: 828px;
`,u2=E.div`
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
`;const c2=E.form`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-self: stretch;
`,d2=E.button`
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
`;var Qi=e=>e.type==="checkbox",wr=e=>e instanceof Date,Ge=e=>e==null;const cm=e=>typeof e=="object";var Ae=e=>!Ge(e)&&!Array.isArray(e)&&cm(e)&&!wr(e),f2=e=>Ae(e)&&e.target?Qi(e.target)?e.target.checked:e.target.value:e,p2=e=>e.substring(0,e.search(/\.\d+(\.|$)/))||e,h2=(e,t)=>e.has(p2(t)),m2=e=>{const t=e.constructor&&e.constructor.prototype;return Ae(t)&&t.hasOwnProperty("isPrototypeOf")},Bu=typeof window<"u"&&typeof window.HTMLElement<"u"&&typeof document<"u";function Yt(e){let t;const n=Array.isArray(e);if(e instanceof Date)t=new Date(e);else if(e instanceof Set)t=new Set(e);else if(!(Bu&&(e instanceof Blob||e instanceof FileList))&&(n||Ae(e)))if(t=n?[]:{},!n&&!m2(e))t=e;else for(const r in e)e.hasOwnProperty(r)&&(t[r]=Yt(e[r]));else return e;return t}var Yi=e=>Array.isArray(e)?e.filter(Boolean):[],Ee=e=>e===void 0,V=(e,t,n)=>{if(!t||!Ae(e))return n;const r=Yi(t.split(/[,[\].]+?/)).reduce((i,o)=>Ge(i)?i:i[o],e);return Ee(r)||r===e?Ee(e[t])?n:e[t]:r},kn=e=>typeof e=="boolean";const $d={BLUR:"blur",FOCUS_OUT:"focusout",CHANGE:"change"},Pt={onBlur:"onBlur",onChange:"onChange",onSubmit:"onSubmit",onTouched:"onTouched",all:"all"},Qt={max:"max",min:"min",maxLength:"maxLength",minLength:"minLength",pattern:"pattern",required:"required",validate:"validate"};ht.createContext(null);var g2=(e,t,n,r=!0)=>{const i={defaultValues:t._defaultValues};for(const o in e)Object.defineProperty(i,o,{get:()=>{const s=o;return t._proxyFormState[s]!==Pt.all&&(t._proxyFormState[s]=!r||Pt.all),n&&(n[s]=!0),e[s]}});return i},pt=e=>Ae(e)&&!Object.keys(e).length,y2=(e,t,n,r)=>{n(e);const{name:i,...o}=e;return pt(o)||Object.keys(o).length>=Object.keys(t).length||Object.keys(o).find(s=>t[s]===(!r||Pt.all))},Ml=e=>Array.isArray(e)?e:[e];function x2(e){const t=ht.useRef(e);t.current=e,ht.useEffect(()=>{const n=!e.disabled&&t.current.subject&&t.current.subject.subscribe({next:t.current.next});return()=>{n&&n.unsubscribe()}},[e.disabled])}var Ut=e=>typeof e=="string",v2=(e,t,n,r,i)=>Ut(e)?(r&&t.watch.add(e),V(n,e,i)):Array.isArray(e)?e.map(o=>(r&&t.watch.add(o),V(n,o))):(r&&(t.watchAll=!0),n),Vu=e=>/^\w*$/.test(e),dm=e=>Yi(e.replace(/["|']|\]/g,"").split(/\.|\[/));function xe(e,t,n){let r=-1;const i=Vu(t)?[t]:dm(t),o=i.length,s=o-1;for(;++r<o;){const a=i[r];let u=n;if(r!==s){const c=e[a];u=Ae(c)||Array.isArray(c)?c:isNaN(+i[r+1])?{}:[]}e[a]=u,e=e[a]}return e}var w2=(e,t,n,r,i)=>t?{...n[e],types:{...n[e]&&n[e].types?n[e].types:{},[r]:i||!0}}:{},Ud=e=>({isOnSubmit:!e||e===Pt.onSubmit,isOnBlur:e===Pt.onBlur,isOnChange:e===Pt.onChange,isOnAll:e===Pt.all,isOnTouch:e===Pt.onTouched}),Bd=(e,t,n)=>!n&&(t.watchAll||t.watch.has(e)||[...t.watch].some(r=>e.startsWith(r)&&/^\.\w+/.test(e.slice(r.length))));const Io=(e,t,n,r)=>{for(const i of n||Object.keys(e)){const o=V(e,i);if(o){const{_f:s,...a}=o;if(s){if(s.refs&&s.refs[0]&&t(s.refs[0],i)&&!r)break;if(s.ref&&t(s.ref,s.name)&&!r)break}else Ae(a)&&Io(a,t)}}};var k2=(e,t,n)=>{const r=Yi(V(e,n));return xe(r,"root",t[n]),xe(e,n,r),e},Wu=e=>e.type==="file",En=e=>typeof e=="function",hs=e=>{if(!Bu)return!1;const t=e?e.ownerDocument:0;return e instanceof(t&&t.defaultView?t.defaultView.HTMLElement:HTMLElement)},$o=e=>Ut(e),Hu=e=>e.type==="radio",ms=e=>e instanceof RegExp;const Vd={value:!1,isValid:!1},Wd={value:!0,isValid:!0};var fm=e=>{if(Array.isArray(e)){if(e.length>1){const t=e.filter(n=>n&&n.checked&&!n.disabled).map(n=>n.value);return{value:t,isValid:!!t.length}}return e[0].checked&&!e[0].disabled?e[0].attributes&&!Ee(e[0].attributes.value)?Ee(e[0].value)||e[0].value===""?Wd:{value:e[0].value,isValid:!0}:Wd:Vd}return Vd};const Hd={isValid:!1,value:null};var pm=e=>Array.isArray(e)?e.reduce((t,n)=>n&&n.checked&&!n.disabled?{isValid:!0,value:n.value}:t,Hd):Hd;function Qd(e,t,n="validate"){if($o(e)||Array.isArray(e)&&e.every($o)||kn(e)&&!e)return{type:n,message:$o(e)?e:"",ref:t}}var lr=e=>Ae(e)&&!ms(e)?e:{value:e,message:""},Yd=async(e,t,n,r,i)=>{const{ref:o,refs:s,required:a,maxLength:u,minLength:c,min:m,max:f,pattern:h,validate:w,name:y,valueAsNumber:x,mount:C,disabled:p}=e._f,d=V(t,y);if(!C||p)return{};const g=s?s[0]:o,k=$=>{r&&g.reportValidity&&(g.setCustomValidity(kn($)?"":$||""),g.reportValidity())},_={},P=Hu(o),b=Qi(o),N=P||b,O=(x||Wu(o))&&Ee(o.value)&&Ee(d)||hs(o)&&o.value===""||d===""||Array.isArray(d)&&!d.length,z=w2.bind(null,y,n,_),W=($,D,G,ce=Qt.maxLength,fe=Qt.minLength)=>{const Ne=$?D:G;_[y]={type:$?ce:fe,message:Ne,ref:o,...z($?ce:fe,Ne)}};if(i?!Array.isArray(d)||!d.length:a&&(!N&&(O||Ge(d))||kn(d)&&!d||b&&!fm(s).isValid||P&&!pm(s).isValid)){const{value:$,message:D}=$o(a)?{value:!!a,message:a}:lr(a);if($&&(_[y]={type:Qt.required,message:D,ref:g,...z(Qt.required,D)},!n))return k(D),_}if(!O&&(!Ge(m)||!Ge(f))){let $,D;const G=lr(f),ce=lr(m);if(!Ge(d)&&!isNaN(d)){const fe=o.valueAsNumber||d&&+d;Ge(G.value)||($=fe>G.value),Ge(ce.value)||(D=fe<ce.value)}else{const fe=o.valueAsDate||new Date(d),Ne=Y=>new Date(new Date().toDateString()+" "+Y),I=o.type=="time",H=o.type=="week";Ut(G.value)&&d&&($=I?Ne(d)>Ne(G.value):H?d>G.value:fe>new Date(G.value)),Ut(ce.value)&&d&&(D=I?Ne(d)<Ne(ce.value):H?d<ce.value:fe<new Date(ce.value))}if(($||D)&&(W(!!$,G.message,ce.message,Qt.max,Qt.min),!n))return k(_[y].message),_}if((u||c)&&!O&&(Ut(d)||i&&Array.isArray(d))){const $=lr(u),D=lr(c),G=!Ge($.value)&&d.length>+$.value,ce=!Ge(D.value)&&d.length<+D.value;if((G||ce)&&(W(G,$.message,D.message),!n))return k(_[y].message),_}if(h&&!O&&Ut(d)){const{value:$,message:D}=lr(h);if(ms($)&&!d.match($)&&(_[y]={type:Qt.pattern,message:D,ref:o,...z(Qt.pattern,D)},!n))return k(D),_}if(w){if(En(w)){const $=await w(d,t),D=Qd($,g);if(D&&(_[y]={...D,...z(Qt.validate,D.message)},!n))return k(D.message),_}else if(Ae(w)){let $={};for(const D in w){if(!pt($)&&!n)break;const G=Qd(await w[D](d,t),g,D);G&&($={...G,...z(D,G.message)},k(G.message),n&&(_[y]=$))}if(!pt($)&&(_[y]={ref:g,...$},!n))return _}}return k(!0),_};function S2(e,t){const n=t.slice(0,-1).length;let r=0;for(;r<n;)e=Ee(e)?r++:e[t[r++]];return e}function j2(e){for(const t in e)if(e.hasOwnProperty(t)&&!Ee(e[t]))return!1;return!0}function Fe(e,t){const n=Array.isArray(t)?t:Vu(t)?[t]:dm(t),r=n.length===1?e:S2(e,n),i=n.length-1,o=n[i];return r&&delete r[o],i!==0&&(Ae(r)&&pt(r)||Array.isArray(r)&&j2(r))&&Fe(e,n.slice(0,-1)),e}function Al(){let e=[];return{get observers(){return e},next:i=>{for(const o of e)o.next&&o.next(i)},subscribe:i=>(e.push(i),{unsubscribe:()=>{e=e.filter(o=>o!==i)}}),unsubscribe:()=>{e=[]}}}var gs=e=>Ge(e)||!cm(e);function Qn(e,t){if(gs(e)||gs(t))return e===t;if(wr(e)&&wr(t))return e.getTime()===t.getTime();const n=Object.keys(e),r=Object.keys(t);if(n.length!==r.length)return!1;for(const i of n){const o=e[i];if(!r.includes(i))return!1;if(i!=="ref"){const s=t[i];if(wr(o)&&wr(s)||Ae(o)&&Ae(s)||Array.isArray(o)&&Array.isArray(s)?!Qn(o,s):o!==s)return!1}}return!0}var hm=e=>e.type==="select-multiple",E2=e=>Hu(e)||Qi(e),Nl=e=>hs(e)&&e.isConnected,mm=e=>{for(const t in e)if(En(e[t]))return!0;return!1};function ys(e,t={}){const n=Array.isArray(e);if(Ae(e)||n)for(const r in e)Array.isArray(e[r])||Ae(e[r])&&!mm(e[r])?(t[r]=Array.isArray(e[r])?[]:{},ys(e[r],t[r])):Ge(e[r])||(t[r]=!0);return t}function gm(e,t,n){const r=Array.isArray(e);if(Ae(e)||r)for(const i in e)Array.isArray(e[i])||Ae(e[i])&&!mm(e[i])?Ee(t)||gs(n[i])?n[i]=Array.isArray(e[i])?ys(e[i],[]):{...ys(e[i])}:gm(e[i],Ge(t)?{}:t[i],n[i]):n[i]=!Qn(e[i],t[i]);return n}var zl=(e,t)=>gm(e,t,ys(t)),ym=(e,{valueAsNumber:t,valueAsDate:n,setValueAs:r})=>Ee(e)?e:t?e===""?NaN:e&&+e:n&&Ut(e)?new Date(e):r?r(e):e;function Ll(e){const t=e.ref;if(!(e.refs?e.refs.every(n=>n.disabled):t.disabled))return Wu(t)?t.files:Hu(t)?pm(e.refs).value:hm(t)?[...t.selectedOptions].map(({value:n})=>n):Qi(t)?fm(e.refs).value:ym(Ee(t.value)?e.ref.value:t.value,e)}var _2=(e,t,n,r)=>{const i={};for(const o of e){const s=V(t,o);s&&xe(i,o,s._f)}return{criteriaMode:n,names:[...e],fields:i,shouldUseNativeValidation:r}},ni=e=>Ee(e)?e:ms(e)?e.source:Ae(e)?ms(e.value)?e.value.source:e.value:e,b2=e=>e.mount&&(e.required||e.min||e.max||e.maxLength||e.minLength||e.pattern||e.validate);function Kd(e,t,n){const r=V(e,n);if(r||Vu(n))return{error:r,name:n};const i=n.split(".");for(;i.length;){const o=i.join("."),s=V(t,o),a=V(e,o);if(s&&!Array.isArray(s)&&n!==o)return{name:n};if(a&&a.type)return{name:o,error:a};i.pop()}return{name:n}}var C2=(e,t,n,r,i)=>i.isOnAll?!1:!n&&i.isOnTouch?!(t||e):(n?r.isOnBlur:i.isOnBlur)?!e:(n?r.isOnChange:i.isOnChange)?e:!0,T2=(e,t)=>!Yi(V(e,t)).length&&Fe(e,t);const P2={mode:Pt.onSubmit,reValidateMode:Pt.onChange,shouldFocusError:!0};function O2(e={},t){let n={...P2,...e},r={submitCount:0,isDirty:!1,isLoading:En(n.defaultValues),isValidating:!1,isSubmitted:!1,isSubmitting:!1,isSubmitSuccessful:!1,isValid:!1,touchedFields:{},dirtyFields:{},errors:{},disabled:!1},i={},o=Ae(n.defaultValues)||Ae(n.values)?Yt(n.defaultValues||n.values)||{}:{},s=n.shouldUnregister?{}:Yt(o),a={action:!1,mount:!1,watch:!1},u={mount:new Set,unMount:new Set,array:new Set,watch:new Set},c,m=0;const f={isDirty:!1,dirtyFields:!1,touchedFields:!1,isValidating:!1,isValid:!1,errors:!1},h={values:Al(),array:Al(),state:Al()},w=e.resetOptions&&e.resetOptions.keepDirtyValues,y=Ud(n.mode),x=Ud(n.reValidateMode),C=n.criteriaMode===Pt.all,p=v=>j=>{clearTimeout(m),m=setTimeout(v,j)},d=async v=>{if(f.isValid||v){const j=n.resolver?pt((await O()).errors):await W(i,!0);j!==r.isValid&&h.state.next({isValid:j})}},g=v=>f.isValidating&&h.state.next({isValidating:v}),k=(v,j=[],S,F,L=!0,A=!0)=>{if(F&&S){if(a.action=!0,A&&Array.isArray(V(i,v))){const Q=S(V(i,v),F.argA,F.argB);L&&xe(i,v,Q)}if(A&&Array.isArray(V(r.errors,v))){const Q=S(V(r.errors,v),F.argA,F.argB);L&&xe(r.errors,v,Q),T2(r.errors,v)}if(f.touchedFields&&A&&Array.isArray(V(r.touchedFields,v))){const Q=S(V(r.touchedFields,v),F.argA,F.argB);L&&xe(r.touchedFields,v,Q)}f.dirtyFields&&(r.dirtyFields=zl(o,s)),h.state.next({name:v,isDirty:D(v,j),dirtyFields:r.dirtyFields,errors:r.errors,isValid:r.isValid})}else xe(s,v,j)},_=(v,j)=>{xe(r.errors,v,j),h.state.next({errors:r.errors})},P=(v,j,S,F)=>{const L=V(i,v);if(L){const A=V(s,v,Ee(S)?V(o,v):S);Ee(A)||F&&F.defaultChecked||j?xe(s,v,j?A:Ll(L._f)):fe(v,A),a.mount&&d()}},b=(v,j,S,F,L)=>{let A=!1,Q=!1;const pe={name:v};if(!S||F){f.isDirty&&(Q=r.isDirty,r.isDirty=pe.isDirty=D(),A=Q!==pe.isDirty);const Ce=Qn(V(o,v),j);Q=V(r.dirtyFields,v),Ce?Fe(r.dirtyFields,v):xe(r.dirtyFields,v,!0),pe.dirtyFields=r.dirtyFields,A=A||f.dirtyFields&&Q!==!Ce}if(S){const Ce=V(r.touchedFields,v);Ce||(xe(r.touchedFields,v,S),pe.touchedFields=r.touchedFields,A=A||f.touchedFields&&Ce!==S)}return A&&L&&h.state.next(pe),A?pe:{}},N=(v,j,S,F)=>{const L=V(r.errors,v),A=f.isValid&&kn(j)&&r.isValid!==j;if(e.delayError&&S?(c=p(()=>_(v,S)),c(e.delayError)):(clearTimeout(m),c=null,S?xe(r.errors,v,S):Fe(r.errors,v)),(S?!Qn(L,S):L)||!pt(F)||A){const Q={...F,...A&&kn(j)?{isValid:j}:{},errors:r.errors,name:v};r={...r,...Q},h.state.next(Q)}g(!1)},O=async v=>n.resolver(s,n.context,_2(v||u.mount,i,n.criteriaMode,n.shouldUseNativeValidation)),z=async v=>{const{errors:j}=await O(v);if(v)for(const S of v){const F=V(j,S);F?xe(r.errors,S,F):Fe(r.errors,S)}else r.errors=j;return j},W=async(v,j,S={valid:!0})=>{for(const F in v){const L=v[F];if(L){const{_f:A,...Q}=L;if(A){const pe=u.array.has(A.name),Ce=await Yd(L,s,C,n.shouldUseNativeValidation&&!j,pe);if(Ce[A.name]&&(S.valid=!1,j))break;!j&&(V(Ce,A.name)?pe?k2(r.errors,Ce,A.name):xe(r.errors,A.name,Ce[A.name]):Fe(r.errors,A.name))}Q&&await W(Q,j,S)}}return S.valid},$=()=>{for(const v of u.unMount){const j=V(i,v);j&&(j._f.refs?j._f.refs.every(S=>!Nl(S)):!Nl(j._f.ref))&&De(v)}u.unMount=new Set},D=(v,j)=>(v&&j&&xe(s,v,j),!Qn(me(),o)),G=(v,j,S)=>v2(v,u,{...a.mount?s:Ee(j)?o:Ut(v)?{[v]:j}:j},S,j),ce=v=>Yi(V(a.mount?s:o,v,e.shouldUnregister?V(o,v,[]):[])),fe=(v,j,S={})=>{const F=V(i,v);let L=j;if(F){const A=F._f;A&&(!A.disabled&&xe(s,v,ym(j,A)),L=hs(A.ref)&&Ge(j)?"":j,hm(A.ref)?[...A.ref.options].forEach(Q=>Q.selected=L.includes(Q.value)):A.refs?Qi(A.ref)?A.refs.length>1?A.refs.forEach(Q=>(!Q.defaultChecked||!Q.disabled)&&(Q.checked=Array.isArray(L)?!!L.find(pe=>pe===Q.value):L===Q.value)):A.refs[0]&&(A.refs[0].checked=!!L):A.refs.forEach(Q=>Q.checked=Q.value===L):Wu(A.ref)?A.ref.value="":(A.ref.value=L,A.ref.type||h.values.next({name:v,values:{...s}})))}(S.shouldDirty||S.shouldTouch)&&b(v,L,S.shouldTouch,S.shouldDirty,!0),S.shouldValidate&&ae(v)},Ne=(v,j,S)=>{for(const F in j){const L=j[F],A=`${v}.${F}`,Q=V(i,A);(u.array.has(v)||!gs(L)||Q&&!Q._f)&&!wr(L)?Ne(A,L,S):fe(A,L,S)}},I=(v,j,S={})=>{const F=V(i,v),L=u.array.has(v),A=Yt(j);xe(s,v,A),L?(h.array.next({name:v,values:{...s}}),(f.isDirty||f.dirtyFields)&&S.shouldDirty&&h.state.next({name:v,dirtyFields:zl(o,s),isDirty:D(v,A)})):F&&!F._f&&!Ge(A)?Ne(v,A,S):fe(v,A,S),Bd(v,u)&&h.state.next({...r}),h.values.next({name:v,values:{...s}}),!a.mount&&t()},H=async v=>{const j=v.target;let S=j.name,F=!0;const L=V(i,S),A=()=>j.type?Ll(L._f):f2(v),Q=pe=>{F=Number.isNaN(pe)||pe===V(s,S,pe)};if(L){let pe,Ce;const Ki=A(),rr=v.type===$d.BLUR||v.type===$d.FOCUS_OUT,xm=!b2(L._f)&&!n.resolver&&!V(r.errors,S)&&!L._f.deps||C2(rr,V(r.touchedFields,S),r.isSubmitted,x,y),Ws=Bd(S,u,rr);xe(s,S,Ki),rr?(L._f.onBlur&&L._f.onBlur(v),c&&c(0)):L._f.onChange&&L._f.onChange(v);const Hs=b(S,Ki,rr,!1),vm=!pt(Hs)||Ws;if(!rr&&h.values.next({name:S,type:v.type,values:{...s}}),xm)return f.isValid&&d(),vm&&h.state.next({name:S,...Ws?{}:Hs});if(!rr&&Ws&&h.state.next({...r}),g(!0),n.resolver){const{errors:Qu}=await O([S]);if(Q(Ki),F){const wm=Kd(r.errors,i,S),Yu=Kd(Qu,i,wm.name||S);pe=Yu.error,S=Yu.name,Ce=pt(Qu)}}else pe=(await Yd(L,s,C,n.shouldUseNativeValidation))[S],Q(Ki),F&&(pe?Ce=!1:f.isValid&&(Ce=await W(i,!0)));F&&(L._f.deps&&ae(L._f.deps),N(S,Ce,pe,Hs))}},Y=(v,j)=>{if(V(r.errors,j)&&v.focus)return v.focus(),1},ae=async(v,j={})=>{let S,F;const L=Ml(v);if(g(!0),n.resolver){const A=await z(Ee(v)?v:L);S=pt(A),F=v?!L.some(Q=>V(A,Q)):S}else v?(F=(await Promise.all(L.map(async A=>{const Q=V(i,A);return await W(Q&&Q._f?{[A]:Q}:Q)}))).every(Boolean),!(!F&&!r.isValid)&&d()):F=S=await W(i);return h.state.next({...!Ut(v)||f.isValid&&S!==r.isValid?{}:{name:v},...n.resolver||!v?{isValid:S}:{},errors:r.errors,isValidating:!1}),j.shouldFocus&&!F&&Io(i,Y,v?L:u.mount),F},me=v=>{const j={...o,...a.mount?s:{}};return Ee(v)?j:Ut(v)?V(j,v):v.map(S=>V(j,S))},St=(v,j)=>({invalid:!!V((j||r).errors,v),isDirty:!!V((j||r).dirtyFields,v),isTouched:!!V((j||r).touchedFields,v),error:V((j||r).errors,v)}),Ve=v=>{v&&Ml(v).forEach(j=>Fe(r.errors,j)),h.state.next({errors:v?r.errors:{}})},At=(v,j,S)=>{const F=(V(i,v,{_f:{}})._f||{}).ref;xe(r.errors,v,{...j,ref:F}),h.state.next({name:v,errors:r.errors,isValid:!1}),S&&S.shouldFocus&&F&&F.focus&&F.focus()},be=(v,j)=>En(v)?h.values.subscribe({next:S=>v(G(void 0,j),S)}):G(v,j,!0),De=(v,j={})=>{for(const S of v?Ml(v):u.mount)u.mount.delete(S),u.array.delete(S),j.keepValue||(Fe(i,S),Fe(s,S)),!j.keepError&&Fe(r.errors,S),!j.keepDirty&&Fe(r.dirtyFields,S),!j.keepTouched&&Fe(r.touchedFields,S),!n.shouldUnregister&&!j.keepDefaultValue&&Fe(o,S);h.values.next({values:{...s}}),h.state.next({...r,...j.keepDirty?{isDirty:D()}:{}}),!j.keepIsValid&&d()},nr=({disabled:v,name:j,field:S,fields:F,value:L})=>{if(kn(v)){const A=v?void 0:Ee(L)?Ll(S?S._f:V(F,j)._f):L;xe(s,j,A),b(j,A,!1,!1,!0)}},sn=(v,j={})=>{let S=V(i,v);const F=kn(j.disabled);return xe(i,v,{...S||{},_f:{...S&&S._f?S._f:{ref:{name:v}},name:v,mount:!0,...j}}),u.mount.add(v),S?nr({field:S,disabled:j.disabled,name:v}):P(v,!0,j.value),{...F?{disabled:j.disabled}:{},...n.progressive?{required:!!j.required,min:ni(j.min),max:ni(j.max),minLength:ni(j.minLength),maxLength:ni(j.maxLength),pattern:ni(j.pattern)}:{},name:v,onChange:H,onBlur:H,ref:L=>{if(L){sn(v,j),S=V(i,v);const A=Ee(L.value)&&L.querySelectorAll&&L.querySelectorAll("input,select,textarea")[0]||L,Q=E2(A),pe=S._f.refs||[];if(Q?pe.find(Ce=>Ce===A):A===S._f.ref)return;xe(i,v,{_f:{...S._f,...Q?{refs:[...pe.filter(Nl),A,...Array.isArray(V(o,v))?[{}]:[]],ref:{type:A.type,name:v}}:{ref:A}}}),P(v,!1,void 0,A)}else S=V(i,v,{}),S._f&&(S._f.mount=!1),(n.shouldUnregister||j.shouldUnregister)&&!(h2(u.array,v)&&a.action)&&u.unMount.add(v)}}},M=()=>n.shouldFocusError&&Io(i,Y,u.mount),B=v=>{kn(v)&&(h.state.next({disabled:v}),Io(i,j=>{j.disabled=v},0,!1))},J=(v,j)=>async S=>{S&&(S.preventDefault&&S.preventDefault(),S.persist&&S.persist());let F=Yt(s);if(h.state.next({isSubmitting:!0}),n.resolver){const{errors:L,values:A}=await O();r.errors=L,F=A}else await W(i);Fe(r.errors,"root"),pt(r.errors)?(h.state.next({errors:{}}),await v(F,S)):(j&&await j({...r.errors},S),M(),setTimeout(M)),h.state.next({isSubmitted:!0,isSubmitting:!1,isSubmitSuccessful:pt(r.errors),submitCount:r.submitCount+1,errors:r.errors})},q=(v,j={})=>{V(i,v)&&(Ee(j.defaultValue)?I(v,V(o,v)):(I(v,j.defaultValue),xe(o,v,j.defaultValue)),j.keepTouched||Fe(r.touchedFields,v),j.keepDirty||(Fe(r.dirtyFields,v),r.isDirty=j.defaultValue?D(v,V(o,v)):D()),j.keepError||(Fe(r.errors,v),f.isValid&&d()),h.state.next({...r}))},X=(v,j={})=>{const S=v?Yt(v):o,F=Yt(S),L=v&&!pt(v)?F:o;if(j.keepDefaultValues||(o=S),!j.keepValues){if(j.keepDirtyValues||w)for(const A of u.mount)V(r.dirtyFields,A)?xe(L,A,V(s,A)):I(A,V(L,A));else{if(Bu&&Ee(v))for(const A of u.mount){const Q=V(i,A);if(Q&&Q._f){const pe=Array.isArray(Q._f.refs)?Q._f.refs[0]:Q._f.ref;if(hs(pe)){const Ce=pe.closest("form");if(Ce){Ce.reset();break}}}}i={}}s=e.shouldUnregister?j.keepDefaultValues?Yt(o):{}:Yt(L),h.array.next({values:{...L}}),h.values.next({values:{...L}})}u={mount:new Set,unMount:new Set,array:new Set,watch:new Set,watchAll:!1,focus:""},!a.mount&&t(),a.mount=!f.isValid||!!j.keepIsValid,a.watch=!!e.shouldUnregister,h.state.next({submitCount:j.keepSubmitCount?r.submitCount:0,isDirty:j.keepDirty?r.isDirty:!!(j.keepDefaultValues&&!Qn(v,o)),isSubmitted:j.keepIsSubmitted?r.isSubmitted:!1,dirtyFields:j.keepDirtyValues?r.dirtyFields:j.keepDefaultValues&&v?zl(o,v):{},touchedFields:j.keepTouched?r.touchedFields:{},errors:j.keepErrors?r.errors:{},isSubmitSuccessful:j.keepIsSubmitSuccessful?r.isSubmitSuccessful:!1,isSubmitting:!1})},ne=(v,j)=>X(En(v)?v(s):v,j);return{control:{register:sn,unregister:De,getFieldState:St,handleSubmit:J,setError:At,_executeSchema:O,_getWatch:G,_getDirty:D,_updateValid:d,_removeUnmounted:$,_updateFieldArray:k,_updateDisabledField:nr,_getFieldArray:ce,_reset:X,_resetDefaultValues:()=>En(n.defaultValues)&&n.defaultValues().then(v=>{ne(v,n.resetOptions),h.state.next({isLoading:!1})}),_updateFormState:v=>{r={...r,...v}},_disableForm:B,_subjects:h,_proxyFormState:f,get _fields(){return i},get _formValues(){return s},get _state(){return a},set _state(v){a=v},get _defaultValues(){return o},get _names(){return u},set _names(v){u=v},get _formState(){return r},set _formState(v){r=v},get _options(){return n},set _options(v){n={...n,...v}}},trigger:ae,register:sn,handleSubmit:J,watch:be,setValue:I,getValues:me,reset:ne,resetField:q,clearErrors:Ve,unregister:De,setError:At,setFocus:(v,j={})=>{const S=V(i,v),F=S&&S._f;if(F){const L=F.refs?F.refs[0]:F.ref;L.focus&&(L.focus(),j.shouldSelect&&L.select())}},getFieldState:St}}function R2(e={}){const t=ht.useRef(),n=ht.useRef(),[r,i]=ht.useState({isDirty:!1,isValidating:!1,isLoading:En(e.defaultValues),isSubmitted:!1,isSubmitting:!1,isSubmitSuccessful:!1,isValid:!1,submitCount:0,dirtyFields:{},touchedFields:{},errors:{},disabled:!1,defaultValues:En(e.defaultValues)?void 0:e.defaultValues});t.current||(t.current={...O2(e,()=>i(s=>({...s}))),formState:r});const o=t.current.control;return o._options=e,x2({subject:o._subjects.state,next:s=>{y2(s,o._proxyFormState,o._updateFormState,!0)&&i({...o._formState})}}),ht.useEffect(()=>o._disableForm(e.disabled),[o,e.disabled]),ht.useEffect(()=>{if(o._proxyFormState.isDirty){const s=o._getDirty();s!==r.isDirty&&o._subjects.state.next({isDirty:s})}},[o,r.isDirty]),ht.useEffect(()=>{e.values&&!Qn(e.values,n.current)?(o._reset(e.values,o._options.resetOptions),n.current=e.values):o._resetDefaultValues()},[e.values,o]),ht.useEffect(()=>{o._state.mount||(o._updateValid(),o._state.mount=!0),o._state.watch&&(o._state.watch=!1,o._subjects.state.next({...o._formState})),o._removeUnmounted()}),t.current.formState=g2(r,o),t.current}const M2=()=>{const[e,t]=ue.useState(()=>{const h=localStorage.getItem("key");return JSON.parse(h)??[{name:"",email:"",phone:"",service:"",comment:""}]}),{name:n,email:r,phone:i,service:o,comment:s}=e,{register:a,handleSubmit:u,formState:{errors:c}}=R2({mode:"all"});ue.useEffect(()=>{const h=JSON.stringify(e);localStorage.setItem("key",h)},[e]);const m=h=>{t({...e,[h.target.name]:h.target.value})},f=async h=>{try{await t2.post("https://healthy-management.onrender.com/api/senddata",h),console.log(h),t({name:"",email:"",phone:"",service:"",comment:""}),alert("Заявка відправлена!")}catch{alert("Помилка при відправці заявки")}};return l.jsx("section",{className:"container",id:"contact",children:l.jsxs(o2,{children:[l.jsx(s2,{children:"Контакт"}),l.jsxs(l2,{children:[l.jsxs("picture",{children:[l.jsx("source",{media:"(min-width: 1920px)",srcSet:`${r2} 1x, ${i2} 2x`}),l.jsx(a2,{src:n2})]}),l.jsxs(u2,{children:[l.jsx("h3",{children:"Залишайте ваші контактні дані і ми з вами зв'яжемось"}),l.jsxs(c2,{onSubmit:u(f),children:[l.jsxs("label",{children:["Ім’я",l.jsx("svg",{width:"8",height:"8",children:l.jsx("use",{href:`${Wn}#star`})})]}),l.jsx("input",{type:"text",placeholder:"Введіть своє ім’я",...a("name",{required:"Це поле обов'язкове для заповнення",pattern:{value:/^(?:[a-zA-Zа-яА-ЯґҐєЄіІїЇ'-]{1,32}(?:\s+[a-zA-Zа-яА-ЯґҐєЄіІїЇ'-]{1,32})?|[a-zA-Zа-яА-ЯґҐєЄіІїЇ'-]{1,64})$/,message:"Поле повинно містити одне або два слова"}}),value:n,onChange:m}),c.name&&l.jsx("div",{style:{color:"red"},children:c.name.message}),l.jsxs("label",{children:["Емейл",l.jsx("svg",{width:"8",height:"8",children:l.jsx("use",{href:`${Wn}#star`})})]}),l.jsx("input",{type:"email",placeholder:"Введіть емейл",...a("email",{required:"Це поле обов'язкове для заповнення",pattern:{value:/[a-z0-9._%+-]+@[a-z0-9.-]+\.[a-z]{2,4}$/,message:"Введіть коректний емейл"}}),value:r,onChange:m}),c.email&&l.jsx("div",{style:{color:"red"},children:c.email.message}),l.jsxs("label",{children:["Номер телефону",l.jsx("svg",{width:"8",height:"8",children:l.jsx("use",{href:`${Wn}#star`})})]}),l.jsx("input",{type:"tel",placeholder:"Введіть номер телефону",...a("phone",{required:"Це поле обов'язкове для заповнення",pattern:{value:/^0\d{9}$/,message:"Введіть коректний номер телефона"}}),value:i,onChange:m}),c.phone&&l.jsx("div",{style:{color:"red"},children:c.phone.message}),l.jsxs("label",{children:["Послуга",l.jsx("svg",{width:"8",height:"8",children:l.jsx("use",{href:`${Wn}#star`})})]}),l.jsxs("select",{...a("service",{required:"Оберіть послугу"}),value:o,onChange:m,children:[l.jsx("option",{value:"",disabled:!0,hidden:!0,children:"Оберіть послугу"}),l.jsx("option",{value:"Менторство та консультації",children:"Менторство та консультації"}),l.jsx("option",{value:"Діагностика",children:"Діагностика"}),l.jsx("option",{value:"Стратегії",children:"Стратегії"}),l.jsx("option",{value:"Навчання",children:"Навчання"}),l.jsx("option",{value:"Інше",children:"Інше"})]}),c.service&&l.jsx("div",{style:{color:"red"},children:c.service.message}),l.jsx("label",{children:"Повідомлення"}),l.jsx("textarea",{name:"comment",placeholder:"Введіть ваше повідомлення",...a("comment",{pattern:{value:/^.{0,500}$/,message:"Максимальна довжина повідомлення 500 символів"}}),value:s,onChange:m}),c.comment&&l.jsx("div",{style:{color:"red"},children:c.comment.message}),l.jsx(d2,{type:"submit",children:"Надіслати"})]})]})]})]})})};function A2(){const e=(t,n)=>{n.preventDefault();const r=document.getElementById(t);if(r){const i=r.getBoundingClientRect(),o=window.pageYOffset||document.documentElement.scrollTop;let s;window.innerWidth<=375?s=i.top+o-80:s=i.top+o-60,window.scrollTo({top:s,behavior:"smooth"}),setTimeout(()=>{n.target.blur()},1e3)}};return l.jsxs(l.Fragment,{children:[l.jsx(Ch,{handleSetActiveLink:e}),l.jsxs("main",{children:[l.jsx(wv,{}),l.jsx(g0,{}),l.jsx(r0,{}),l.jsx(_v,{}),l.jsx(z1,{})," *",l.jsx(Iv,{}),l.jsx(Qv,{}),l.jsx(Kv,{}),l.jsx(E1,{}),l.jsx(j0,{}),l.jsx(M2,{})]}),l.jsx(Eh,{handleSetActiveLink:e}),l.jsx(D1,{})]})}Dl.createRoot(document.getElementById("root")).render(l.jsx(ht.StrictMode,{children:l.jsx(A2,{})}));
