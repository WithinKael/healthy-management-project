function cm(e,t){for(var n=0;n<t.length;n++){const r=t[n];if(typeof r!="string"&&!Array.isArray(r)){for(const i in r)if(i!=="default"&&!(i in e)){const o=Object.getOwnPropertyDescriptor(r,i);o&&Object.defineProperty(e,i,o.get?o:{enumerable:!0,get:()=>r[i]})}}}return Object.freeze(Object.defineProperty(e,Symbol.toStringTag,{value:"Module"}))}(function(){const t=document.createElement("link").relList;if(t&&t.supports&&t.supports("modulepreload"))return;for(const i of document.querySelectorAll('link[rel="modulepreload"]'))r(i);new MutationObserver(i=>{for(const o of i)if(o.type==="childList")for(const s of o.addedNodes)s.tagName==="LINK"&&s.rel==="modulepreload"&&r(s)}).observe(document,{childList:!0,subtree:!0});function n(i){const o={};return i.integrity&&(o.integrity=i.integrity),i.referrerPolicy&&(o.referrerPolicy=i.referrerPolicy),i.crossOrigin==="use-credentials"?o.credentials="include":i.crossOrigin==="anonymous"?o.credentials="omit":o.credentials="same-origin",o}function r(i){if(i.ep)return;i.ep=!0;const o=n(i);fetch(i.href,o)}})();var dm=typeof globalThis<"u"?globalThis:typeof window<"u"?window:typeof global<"u"?global:typeof self<"u"?self:{};function Oa(e){return e&&e.__esModule&&Object.prototype.hasOwnProperty.call(e,"default")?e.default:e}var $d={exports:{}},ps={},Ud={exports:{}},ee={};/**
 * @license React
 * react.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */var Mi=Symbol.for("react.element"),fm=Symbol.for("react.portal"),pm=Symbol.for("react.fragment"),hm=Symbol.for("react.strict_mode"),mm=Symbol.for("react.profiler"),ym=Symbol.for("react.provider"),gm=Symbol.for("react.context"),vm=Symbol.for("react.forward_ref"),xm=Symbol.for("react.suspense"),wm=Symbol.for("react.memo"),km=Symbol.for("react.lazy"),Uu=Symbol.iterator;function Sm(e){return e===null||typeof e!="object"?null:(e=Uu&&e[Uu]||e["@@iterator"],typeof e=="function"?e:null)}var Bd={isMounted:function(){return!1},enqueueForceUpdate:function(){},enqueueReplaceState:function(){},enqueueSetState:function(){}},Vd=Object.assign,Wd={};function Or(e,t,n){this.props=e,this.context=t,this.refs=Wd,this.updater=n||Bd}Or.prototype.isReactComponent={};Or.prototype.setState=function(e,t){if(typeof e!="object"&&typeof e!="function"&&e!=null)throw Error("setState(...): takes an object of state variables to update or a function which returns an object of state variables.");this.updater.enqueueSetState(this,e,t,"setState")};Or.prototype.forceUpdate=function(e){this.updater.enqueueForceUpdate(this,e,"forceUpdate")};function Hd(){}Hd.prototype=Or.prototype;function Ra(e,t,n){this.props=e,this.context=t,this.refs=Wd,this.updater=n||Bd}var Ma=Ra.prototype=new Hd;Ma.constructor=Ra;Vd(Ma,Or.prototype);Ma.isPureReactComponent=!0;var Bu=Array.isArray,Qd=Object.prototype.hasOwnProperty,Aa={current:null},Yd={key:!0,ref:!0,__self:!0,__source:!0};function Kd(e,t,n){var r,i={},o=null,s=null;if(t!=null)for(r in t.ref!==void 0&&(s=t.ref),t.key!==void 0&&(o=""+t.key),t)Qd.call(t,r)&&!Yd.hasOwnProperty(r)&&(i[r]=t[r]);var l=arguments.length-2;if(l===1)i.children=n;else if(1<l){for(var u=Array(l),c=0;c<l;c++)u[c]=arguments[c+2];i.children=u}if(e&&e.defaultProps)for(r in l=e.defaultProps,l)i[r]===void 0&&(i[r]=l[r]);return{$$typeof:Mi,type:e,key:o,ref:s,props:i,_owner:Aa.current}}function jm(e,t){return{$$typeof:Mi,type:e.type,key:t,ref:e.ref,props:e.props,_owner:e._owner}}function Na(e){return typeof e=="object"&&e!==null&&e.$$typeof===Mi}function Em(e){var t={"=":"=0",":":"=2"};return"$"+e.replace(/[=:]/g,function(n){return t[n]})}var Vu=/\/+/g;function Is(e,t){return typeof e=="object"&&e!==null&&e.key!=null?Em(""+e.key):t.toString(36)}function yo(e,t,n,r,i){var o=typeof e;(o==="undefined"||o==="boolean")&&(e=null);var s=!1;if(e===null)s=!0;else switch(o){case"string":case"number":s=!0;break;case"object":switch(e.$$typeof){case Mi:case fm:s=!0}}if(s)return s=e,i=i(s),e=r===""?"."+Is(s,0):r,Bu(i)?(n="",e!=null&&(n=e.replace(Vu,"$&/")+"/"),yo(i,t,n,"",function(c){return c})):i!=null&&(Na(i)&&(i=jm(i,n+(!i.key||s&&s.key===i.key?"":(""+i.key).replace(Vu,"$&/")+"/")+e)),t.push(i)),1;if(s=0,r=r===""?".":r+":",Bu(e))for(var l=0;l<e.length;l++){o=e[l];var u=r+Is(o,l);s+=yo(o,t,n,u,i)}else if(u=Sm(e),typeof u=="function")for(e=u.call(e),l=0;!(o=e.next()).done;)o=o.value,u=r+Is(o,l++),s+=yo(o,t,n,u,i);else if(o==="object")throw t=String(e),Error("Objects are not valid as a React child (found: "+(t==="[object Object]"?"object with keys {"+Object.keys(e).join(", ")+"}":t)+"). If you meant to render a collection of children, use an array instead.");return s}function Vi(e,t,n){if(e==null)return e;var r=[],i=0;return yo(e,r,"","",function(o){return t.call(n,o,i++)}),r}function _m(e){if(e._status===-1){var t=e._result;t=t(),t.then(function(n){(e._status===0||e._status===-1)&&(e._status=1,e._result=n)},function(n){(e._status===0||e._status===-1)&&(e._status=2,e._result=n)}),e._status===-1&&(e._status=0,e._result=t)}if(e._status===1)return e._result.default;throw e._result}var Je={current:null},go={transition:null},Cm={ReactCurrentDispatcher:Je,ReactCurrentBatchConfig:go,ReactCurrentOwner:Aa};ee.Children={map:Vi,forEach:function(e,t,n){Vi(e,function(){t.apply(this,arguments)},n)},count:function(e){var t=0;return Vi(e,function(){t++}),t},toArray:function(e){return Vi(e,function(t){return t})||[]},only:function(e){if(!Na(e))throw Error("React.Children.only expected to receive a single React element child.");return e}};ee.Component=Or;ee.Fragment=pm;ee.Profiler=mm;ee.PureComponent=Ra;ee.StrictMode=hm;ee.Suspense=xm;ee.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED=Cm;ee.cloneElement=function(e,t,n){if(e==null)throw Error("React.cloneElement(...): The argument must be a React element, but you passed "+e+".");var r=Vd({},e.props),i=e.key,o=e.ref,s=e._owner;if(t!=null){if(t.ref!==void 0&&(o=t.ref,s=Aa.current),t.key!==void 0&&(i=""+t.key),e.type&&e.type.defaultProps)var l=e.type.defaultProps;for(u in t)Qd.call(t,u)&&!Yd.hasOwnProperty(u)&&(r[u]=t[u]===void 0&&l!==void 0?l[u]:t[u])}var u=arguments.length-2;if(u===1)r.children=n;else if(1<u){l=Array(u);for(var c=0;c<u;c++)l[c]=arguments[c+2];r.children=l}return{$$typeof:Mi,type:e.type,key:i,ref:o,props:r,_owner:s}};ee.createContext=function(e){return e={$$typeof:gm,_currentValue:e,_currentValue2:e,_threadCount:0,Provider:null,Consumer:null,_defaultValue:null,_globalName:null},e.Provider={$$typeof:ym,_context:e},e.Consumer=e};ee.createElement=Kd;ee.createFactory=function(e){var t=Kd.bind(null,e);return t.type=e,t};ee.createRef=function(){return{current:null}};ee.forwardRef=function(e){return{$$typeof:vm,render:e}};ee.isValidElement=Na;ee.lazy=function(e){return{$$typeof:km,_payload:{_status:-1,_result:e},_init:_m}};ee.memo=function(e,t){return{$$typeof:wm,type:e,compare:t===void 0?null:t}};ee.startTransition=function(e){var t=go.transition;go.transition={};try{e()}finally{go.transition=t}};ee.unstable_act=function(){throw Error("act(...) is not supported in production builds of React.")};ee.useCallback=function(e,t){return Je.current.useCallback(e,t)};ee.useContext=function(e){return Je.current.useContext(e)};ee.useDebugValue=function(){};ee.useDeferredValue=function(e){return Je.current.useDeferredValue(e)};ee.useEffect=function(e,t){return Je.current.useEffect(e,t)};ee.useId=function(){return Je.current.useId()};ee.useImperativeHandle=function(e,t,n){return Je.current.useImperativeHandle(e,t,n)};ee.useInsertionEffect=function(e,t){return Je.current.useInsertionEffect(e,t)};ee.useLayoutEffect=function(e,t){return Je.current.useLayoutEffect(e,t)};ee.useMemo=function(e,t){return Je.current.useMemo(e,t)};ee.useReducer=function(e,t,n){return Je.current.useReducer(e,t,n)};ee.useRef=function(e){return Je.current.useRef(e)};ee.useState=function(e){return Je.current.useState(e)};ee.useSyncExternalStore=function(e,t,n){return Je.current.useSyncExternalStore(e,t,n)};ee.useTransition=function(){return Je.current.useTransition()};ee.version="18.2.0";Ud.exports=ee;var we=Ud.exports;const ht=Oa(we),Wu=cm({__proto__:null,default:ht},[we]);/**
 * @license React
 * react-jsx-runtime.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */var bm=we,Tm=Symbol.for("react.element"),Pm=Symbol.for("react.fragment"),Om=Object.prototype.hasOwnProperty,Rm=bm.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED.ReactCurrentOwner,Mm={key:!0,ref:!0,__self:!0,__source:!0};function Xd(e,t,n){var r,i={},o=null,s=null;n!==void 0&&(o=""+n),t.key!==void 0&&(o=""+t.key),t.ref!==void 0&&(s=t.ref);for(r in t)Om.call(t,r)&&!Mm.hasOwnProperty(r)&&(i[r]=t[r]);if(e&&e.defaultProps)for(r in t=e.defaultProps,t)i[r]===void 0&&(i[r]=t[r]);return{$$typeof:Tm,type:e,key:o,ref:s,props:i,_owner:Rm.current}}ps.Fragment=Pm;ps.jsx=Xd;ps.jsxs=Xd;$d.exports=ps;var a=$d.exports,Pl={},Gd={exports:{}},dt={},qd={exports:{}},Jd={};/**
 * @license React
 * scheduler.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */(function(e){function t(I,H){var Y=I.length;I.push(H);e:for(;0<Y;){var ae=Y-1>>>1,he=I[ae];if(0<i(he,H))I[ae]=H,I[Y]=he,Y=ae;else break e}}function n(I){return I.length===0?null:I[0]}function r(I){if(I.length===0)return null;var H=I[0],Y=I.pop();if(Y!==H){I[0]=Y;e:for(var ae=0,he=I.length,St=he>>>1;ae<St;){var Ve=2*(ae+1)-1,At=I[Ve],Ce=Ve+1,De=I[Ce];if(0>i(At,Y))Ce<he&&0>i(De,At)?(I[ae]=De,I[Ce]=Y,ae=Ce):(I[ae]=At,I[Ve]=Y,ae=Ve);else if(Ce<he&&0>i(De,Y))I[ae]=De,I[Ce]=Y,ae=Ce;else break e}}return H}function i(I,H){var Y=I.sortIndex-H.sortIndex;return Y!==0?Y:I.id-H.id}if(typeof performance=="object"&&typeof performance.now=="function"){var o=performance;e.unstable_now=function(){return o.now()}}else{var s=Date,l=s.now();e.unstable_now=function(){return s.now()-l}}var u=[],c=[],h=1,f=null,m=3,w=!1,g=!1,v=!1,b=typeof setTimeout=="function"?setTimeout:null,p=typeof clearTimeout=="function"?clearTimeout:null,d=typeof setImmediate<"u"?setImmediate:null;typeof navigator<"u"&&navigator.scheduling!==void 0&&navigator.scheduling.isInputPending!==void 0&&navigator.scheduling.isInputPending.bind(navigator.scheduling);function y(I){for(var H=n(c);H!==null;){if(H.callback===null)r(c);else if(H.startTime<=I)r(c),H.sortIndex=H.expirationTime,t(u,H);else break;H=n(c)}}function k(I){if(v=!1,y(I),!g)if(n(u)!==null)g=!0,de(_);else{var H=n(c);H!==null&&Ne(k,H.startTime-I)}}function _(I,H){g=!1,v&&(v=!1,p(N),N=-1),w=!0;var Y=m;try{for(y(H),f=n(u);f!==null&&(!(f.expirationTime>H)||I&&!W());){var ae=f.callback;if(typeof ae=="function"){f.callback=null,m=f.priorityLevel;var he=ae(f.expirationTime<=H);H=e.unstable_now(),typeof he=="function"?f.callback=he:f===n(u)&&r(u),y(H)}else r(u);f=n(u)}if(f!==null)var St=!0;else{var Ve=n(c);Ve!==null&&Ne(k,Ve.startTime-H),St=!1}return St}finally{f=null,m=Y,w=!1}}var P=!1,C=null,N=-1,O=5,L=-1;function W(){return!(e.unstable_now()-L<O)}function $(){if(C!==null){var I=e.unstable_now();L=I;var H=!0;try{H=C(!0,I)}finally{H?D():(P=!1,C=null)}}else P=!1}var D;if(typeof d=="function")D=function(){d($)};else if(typeof MessageChannel<"u"){var X=new MessageChannel,ue=X.port2;X.port1.onmessage=$,D=function(){ue.postMessage(null)}}else D=function(){b($,0)};function de(I){C=I,P||(P=!0,D())}function Ne(I,H){N=b(function(){I(e.unstable_now())},H)}e.unstable_IdlePriority=5,e.unstable_ImmediatePriority=1,e.unstable_LowPriority=4,e.unstable_NormalPriority=3,e.unstable_Profiling=null,e.unstable_UserBlockingPriority=2,e.unstable_cancelCallback=function(I){I.callback=null},e.unstable_continueExecution=function(){g||w||(g=!0,de(_))},e.unstable_forceFrameRate=function(I){0>I||125<I?console.error("forceFrameRate takes a positive int between 0 and 125, forcing frame rates higher than 125 fps is not supported"):O=0<I?Math.floor(1e3/I):5},e.unstable_getCurrentPriorityLevel=function(){return m},e.unstable_getFirstCallbackNode=function(){return n(u)},e.unstable_next=function(I){switch(m){case 1:case 2:case 3:var H=3;break;default:H=m}var Y=m;m=H;try{return I()}finally{m=Y}},e.unstable_pauseExecution=function(){},e.unstable_requestPaint=function(){},e.unstable_runWithPriority=function(I,H){switch(I){case 1:case 2:case 3:case 4:case 5:break;default:I=3}var Y=m;m=I;try{return H()}finally{m=Y}},e.unstable_scheduleCallback=function(I,H,Y){var ae=e.unstable_now();switch(typeof Y=="object"&&Y!==null?(Y=Y.delay,Y=typeof Y=="number"&&0<Y?ae+Y:ae):Y=ae,I){case 1:var he=-1;break;case 2:he=250;break;case 5:he=1073741823;break;case 4:he=1e4;break;default:he=5e3}return he=Y+he,I={id:h++,callback:H,priorityLevel:I,startTime:Y,expirationTime:he,sortIndex:-1},Y>ae?(I.sortIndex=Y,t(c,I),n(u)===null&&I===n(c)&&(v?(p(N),N=-1):v=!0,Ne(k,Y-ae))):(I.sortIndex=he,t(u,I),g||w||(g=!0,de(_))),I},e.unstable_shouldYield=W,e.unstable_wrapCallback=function(I){var H=m;return function(){var Y=m;m=H;try{return I.apply(this,arguments)}finally{m=Y}}}})(Jd);qd.exports=Jd;var Am=qd.exports;/**
 * @license React
 * react-dom.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */var Zd=we,ct=Am;function R(e){for(var t="https://reactjs.org/docs/error-decoder.html?invariant="+e,n=1;n<arguments.length;n++)t+="&args[]="+encodeURIComponent(arguments[n]);return"Minified React error #"+e+"; visit "+t+" for the full message or use the non-minified dev environment for full errors and additional helpful warnings."}var ef=new Set,ci={};function Yn(e,t){kr(e,t),kr(e+"Capture",t)}function kr(e,t){for(ci[e]=t,e=0;e<t.length;e++)ef.add(t[e])}var Zt=!(typeof window>"u"||typeof window.document>"u"||typeof window.document.createElement>"u"),Ol=Object.prototype.hasOwnProperty,Nm=/^[:A-Z_a-z\u00C0-\u00D6\u00D8-\u00F6\u00F8-\u02FF\u0370-\u037D\u037F-\u1FFF\u200C-\u200D\u2070-\u218F\u2C00-\u2FEF\u3001-\uD7FF\uF900-\uFDCF\uFDF0-\uFFFD][:A-Z_a-z\u00C0-\u00D6\u00D8-\u00F6\u00F8-\u02FF\u0370-\u037D\u037F-\u1FFF\u200C-\u200D\u2070-\u218F\u2C00-\u2FEF\u3001-\uD7FF\uF900-\uFDCF\uFDF0-\uFFFD\-.0-9\u00B7\u0300-\u036F\u203F-\u2040]*$/,Hu={},Qu={};function Lm(e){return Ol.call(Qu,e)?!0:Ol.call(Hu,e)?!1:Nm.test(e)?Qu[e]=!0:(Hu[e]=!0,!1)}function zm(e,t,n,r){if(n!==null&&n.type===0)return!1;switch(typeof t){case"function":case"symbol":return!0;case"boolean":return r?!1:n!==null?!n.acceptsBooleans:(e=e.toLowerCase().slice(0,5),e!=="data-"&&e!=="aria-");default:return!1}}function Dm(e,t,n,r){if(t===null||typeof t>"u"||zm(e,t,n,r))return!0;if(r)return!1;if(n!==null)switch(n.type){case 3:return!t;case 4:return t===!1;case 5:return isNaN(t);case 6:return isNaN(t)||1>t}return!1}function Ze(e,t,n,r,i,o,s){this.acceptsBooleans=t===2||t===3||t===4,this.attributeName=r,this.attributeNamespace=i,this.mustUseProperty=n,this.propertyName=e,this.type=t,this.sanitizeURL=o,this.removeEmptyString=s}var Be={};"children dangerouslySetInnerHTML defaultValue defaultChecked innerHTML suppressContentEditableWarning suppressHydrationWarning style".split(" ").forEach(function(e){Be[e]=new Ze(e,0,!1,e,null,!1,!1)});[["acceptCharset","accept-charset"],["className","class"],["htmlFor","for"],["httpEquiv","http-equiv"]].forEach(function(e){var t=e[0];Be[t]=new Ze(t,1,!1,e[1],null,!1,!1)});["contentEditable","draggable","spellCheck","value"].forEach(function(e){Be[e]=new Ze(e,2,!1,e.toLowerCase(),null,!1,!1)});["autoReverse","externalResourcesRequired","focusable","preserveAlpha"].forEach(function(e){Be[e]=new Ze(e,2,!1,e,null,!1,!1)});"allowFullScreen async autoFocus autoPlay controls default defer disabled disablePictureInPicture disableRemotePlayback formNoValidate hidden loop noModule noValidate open playsInline readOnly required reversed scoped seamless itemScope".split(" ").forEach(function(e){Be[e]=new Ze(e,3,!1,e.toLowerCase(),null,!1,!1)});["checked","multiple","muted","selected"].forEach(function(e){Be[e]=new Ze(e,3,!0,e,null,!1,!1)});["capture","download"].forEach(function(e){Be[e]=new Ze(e,4,!1,e,null,!1,!1)});["cols","rows","size","span"].forEach(function(e){Be[e]=new Ze(e,6,!1,e,null,!1,!1)});["rowSpan","start"].forEach(function(e){Be[e]=new Ze(e,5,!1,e.toLowerCase(),null,!1,!1)});var La=/[\-:]([a-z])/g;function za(e){return e[1].toUpperCase()}"accent-height alignment-baseline arabic-form baseline-shift cap-height clip-path clip-rule color-interpolation color-interpolation-filters color-profile color-rendering dominant-baseline enable-background fill-opacity fill-rule flood-color flood-opacity font-family font-size font-size-adjust font-stretch font-style font-variant font-weight glyph-name glyph-orientation-horizontal glyph-orientation-vertical horiz-adv-x horiz-origin-x image-rendering letter-spacing lighting-color marker-end marker-mid marker-start overline-position overline-thickness paint-order panose-1 pointer-events rendering-intent shape-rendering stop-color stop-opacity strikethrough-position strikethrough-thickness stroke-dasharray stroke-dashoffset stroke-linecap stroke-linejoin stroke-miterlimit stroke-opacity stroke-width text-anchor text-decoration text-rendering underline-position underline-thickness unicode-bidi unicode-range units-per-em v-alphabetic v-hanging v-ideographic v-mathematical vector-effect vert-adv-y vert-origin-x vert-origin-y word-spacing writing-mode xmlns:xlink x-height".split(" ").forEach(function(e){var t=e.replace(La,za);Be[t]=new Ze(t,1,!1,e,null,!1,!1)});"xlink:actuate xlink:arcrole xlink:role xlink:show xlink:title xlink:type".split(" ").forEach(function(e){var t=e.replace(La,za);Be[t]=new Ze(t,1,!1,e,"http://www.w3.org/1999/xlink",!1,!1)});["xml:base","xml:lang","xml:space"].forEach(function(e){var t=e.replace(La,za);Be[t]=new Ze(t,1,!1,e,"http://www.w3.org/XML/1998/namespace",!1,!1)});["tabIndex","crossOrigin"].forEach(function(e){Be[e]=new Ze(e,1,!1,e.toLowerCase(),null,!1,!1)});Be.xlinkHref=new Ze("xlinkHref",1,!1,"xlink:href","http://www.w3.org/1999/xlink",!0,!1);["src","href","action","formAction"].forEach(function(e){Be[e]=new Ze(e,1,!1,e.toLowerCase(),null,!0,!0)});function Da(e,t,n,r){var i=Be.hasOwnProperty(t)?Be[t]:null;(i!==null?i.type!==0:r||!(2<t.length)||t[0]!=="o"&&t[0]!=="O"||t[1]!=="n"&&t[1]!=="N")&&(Dm(t,n,i,r)&&(n=null),r||i===null?Lm(t)&&(n===null?e.removeAttribute(t):e.setAttribute(t,""+n)):i.mustUseProperty?e[i.propertyName]=n===null?i.type===3?!1:"":n:(t=i.attributeName,r=i.attributeNamespace,n===null?e.removeAttribute(t):(i=i.type,n=i===3||i===4&&n===!0?"":""+n,r?e.setAttributeNS(r,t,n):e.setAttribute(t,n))))}var rn=Zd.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED,Wi=Symbol.for("react.element"),tr=Symbol.for("react.portal"),nr=Symbol.for("react.fragment"),Fa=Symbol.for("react.strict_mode"),Rl=Symbol.for("react.profiler"),tf=Symbol.for("react.provider"),nf=Symbol.for("react.context"),Ia=Symbol.for("react.forward_ref"),Ml=Symbol.for("react.suspense"),Al=Symbol.for("react.suspense_list"),$a=Symbol.for("react.memo"),fn=Symbol.for("react.lazy"),rf=Symbol.for("react.offscreen"),Yu=Symbol.iterator;function Lr(e){return e===null||typeof e!="object"?null:(e=Yu&&e[Yu]||e["@@iterator"],typeof e=="function"?e:null)}var Se=Object.assign,$s;function qr(e){if($s===void 0)try{throw Error()}catch(n){var t=n.stack.trim().match(/\n( *(at )?)/);$s=t&&t[1]||""}return`
`+$s+e}var Us=!1;function Bs(e,t){if(!e||Us)return"";Us=!0;var n=Error.prepareStackTrace;Error.prepareStackTrace=void 0;try{if(t)if(t=function(){throw Error()},Object.defineProperty(t.prototype,"props",{set:function(){throw Error()}}),typeof Reflect=="object"&&Reflect.construct){try{Reflect.construct(t,[])}catch(c){var r=c}Reflect.construct(e,[],t)}else{try{t.call()}catch(c){r=c}e.call(t.prototype)}else{try{throw Error()}catch(c){r=c}e()}}catch(c){if(c&&r&&typeof c.stack=="string"){for(var i=c.stack.split(`
`),o=r.stack.split(`
`),s=i.length-1,l=o.length-1;1<=s&&0<=l&&i[s]!==o[l];)l--;for(;1<=s&&0<=l;s--,l--)if(i[s]!==o[l]){if(s!==1||l!==1)do if(s--,l--,0>l||i[s]!==o[l]){var u=`
`+i[s].replace(" at new "," at ");return e.displayName&&u.includes("<anonymous>")&&(u=u.replace("<anonymous>",e.displayName)),u}while(1<=s&&0<=l);break}}}finally{Us=!1,Error.prepareStackTrace=n}return(e=e?e.displayName||e.name:"")?qr(e):""}function Fm(e){switch(e.tag){case 5:return qr(e.type);case 16:return qr("Lazy");case 13:return qr("Suspense");case 19:return qr("SuspenseList");case 0:case 2:case 15:return e=Bs(e.type,!1),e;case 11:return e=Bs(e.type.render,!1),e;case 1:return e=Bs(e.type,!0),e;default:return""}}function Nl(e){if(e==null)return null;if(typeof e=="function")return e.displayName||e.name||null;if(typeof e=="string")return e;switch(e){case nr:return"Fragment";case tr:return"Portal";case Rl:return"Profiler";case Fa:return"StrictMode";case Ml:return"Suspense";case Al:return"SuspenseList"}if(typeof e=="object")switch(e.$$typeof){case nf:return(e.displayName||"Context")+".Consumer";case tf:return(e._context.displayName||"Context")+".Provider";case Ia:var t=e.render;return e=e.displayName,e||(e=t.displayName||t.name||"",e=e!==""?"ForwardRef("+e+")":"ForwardRef"),e;case $a:return t=e.displayName||null,t!==null?t:Nl(e.type)||"Memo";case fn:t=e._payload,e=e._init;try{return Nl(e(t))}catch{}}return null}function Im(e){var t=e.type;switch(e.tag){case 24:return"Cache";case 9:return(t.displayName||"Context")+".Consumer";case 10:return(t._context.displayName||"Context")+".Provider";case 18:return"DehydratedFragment";case 11:return e=t.render,e=e.displayName||e.name||"",t.displayName||(e!==""?"ForwardRef("+e+")":"ForwardRef");case 7:return"Fragment";case 5:return t;case 4:return"Portal";case 3:return"Root";case 6:return"Text";case 16:return Nl(t);case 8:return t===Fa?"StrictMode":"Mode";case 22:return"Offscreen";case 12:return"Profiler";case 21:return"Scope";case 13:return"Suspense";case 19:return"SuspenseList";case 25:return"TracingMarker";case 1:case 0:case 17:case 2:case 14:case 15:if(typeof t=="function")return t.displayName||t.name||null;if(typeof t=="string")return t}return null}function Tn(e){switch(typeof e){case"boolean":case"number":case"string":case"undefined":return e;case"object":return e;default:return""}}function of(e){var t=e.type;return(e=e.nodeName)&&e.toLowerCase()==="input"&&(t==="checkbox"||t==="radio")}function $m(e){var t=of(e)?"checked":"value",n=Object.getOwnPropertyDescriptor(e.constructor.prototype,t),r=""+e[t];if(!e.hasOwnProperty(t)&&typeof n<"u"&&typeof n.get=="function"&&typeof n.set=="function"){var i=n.get,o=n.set;return Object.defineProperty(e,t,{configurable:!0,get:function(){return i.call(this)},set:function(s){r=""+s,o.call(this,s)}}),Object.defineProperty(e,t,{enumerable:n.enumerable}),{getValue:function(){return r},setValue:function(s){r=""+s},stopTracking:function(){e._valueTracker=null,delete e[t]}}}}function Hi(e){e._valueTracker||(e._valueTracker=$m(e))}function sf(e){if(!e)return!1;var t=e._valueTracker;if(!t)return!0;var n=t.getValue(),r="";return e&&(r=of(e)?e.checked?"true":"false":e.value),e=r,e!==n?(t.setValue(e),!0):!1}function zo(e){if(e=e||(typeof document<"u"?document:void 0),typeof e>"u")return null;try{return e.activeElement||e.body}catch{return e.body}}function Ll(e,t){var n=t.checked;return Se({},t,{defaultChecked:void 0,defaultValue:void 0,value:void 0,checked:n??e._wrapperState.initialChecked})}function Ku(e,t){var n=t.defaultValue==null?"":t.defaultValue,r=t.checked!=null?t.checked:t.defaultChecked;n=Tn(t.value!=null?t.value:n),e._wrapperState={initialChecked:r,initialValue:n,controlled:t.type==="checkbox"||t.type==="radio"?t.checked!=null:t.value!=null}}function lf(e,t){t=t.checked,t!=null&&Da(e,"checked",t,!1)}function zl(e,t){lf(e,t);var n=Tn(t.value),r=t.type;if(n!=null)r==="number"?(n===0&&e.value===""||e.value!=n)&&(e.value=""+n):e.value!==""+n&&(e.value=""+n);else if(r==="submit"||r==="reset"){e.removeAttribute("value");return}t.hasOwnProperty("value")?Dl(e,t.type,n):t.hasOwnProperty("defaultValue")&&Dl(e,t.type,Tn(t.defaultValue)),t.checked==null&&t.defaultChecked!=null&&(e.defaultChecked=!!t.defaultChecked)}function Xu(e,t,n){if(t.hasOwnProperty("value")||t.hasOwnProperty("defaultValue")){var r=t.type;if(!(r!=="submit"&&r!=="reset"||t.value!==void 0&&t.value!==null))return;t=""+e._wrapperState.initialValue,n||t===e.value||(e.value=t),e.defaultValue=t}n=e.name,n!==""&&(e.name=""),e.defaultChecked=!!e._wrapperState.initialChecked,n!==""&&(e.name=n)}function Dl(e,t,n){(t!=="number"||zo(e.ownerDocument)!==e)&&(n==null?e.defaultValue=""+e._wrapperState.initialValue:e.defaultValue!==""+n&&(e.defaultValue=""+n))}var Jr=Array.isArray;function hr(e,t,n,r){if(e=e.options,t){t={};for(var i=0;i<n.length;i++)t["$"+n[i]]=!0;for(n=0;n<e.length;n++)i=t.hasOwnProperty("$"+e[n].value),e[n].selected!==i&&(e[n].selected=i),i&&r&&(e[n].defaultSelected=!0)}else{for(n=""+Tn(n),t=null,i=0;i<e.length;i++){if(e[i].value===n){e[i].selected=!0,r&&(e[i].defaultSelected=!0);return}t!==null||e[i].disabled||(t=e[i])}t!==null&&(t.selected=!0)}}function Fl(e,t){if(t.dangerouslySetInnerHTML!=null)throw Error(R(91));return Se({},t,{value:void 0,defaultValue:void 0,children:""+e._wrapperState.initialValue})}function Gu(e,t){var n=t.value;if(n==null){if(n=t.children,t=t.defaultValue,n!=null){if(t!=null)throw Error(R(92));if(Jr(n)){if(1<n.length)throw Error(R(93));n=n[0]}t=n}t==null&&(t=""),n=t}e._wrapperState={initialValue:Tn(n)}}function af(e,t){var n=Tn(t.value),r=Tn(t.defaultValue);n!=null&&(n=""+n,n!==e.value&&(e.value=n),t.defaultValue==null&&e.defaultValue!==n&&(e.defaultValue=n)),r!=null&&(e.defaultValue=""+r)}function qu(e){var t=e.textContent;t===e._wrapperState.initialValue&&t!==""&&t!==null&&(e.value=t)}function uf(e){switch(e){case"svg":return"http://www.w3.org/2000/svg";case"math":return"http://www.w3.org/1998/Math/MathML";default:return"http://www.w3.org/1999/xhtml"}}function Il(e,t){return e==null||e==="http://www.w3.org/1999/xhtml"?uf(t):e==="http://www.w3.org/2000/svg"&&t==="foreignObject"?"http://www.w3.org/1999/xhtml":e}var Qi,cf=function(e){return typeof MSApp<"u"&&MSApp.execUnsafeLocalFunction?function(t,n,r,i){MSApp.execUnsafeLocalFunction(function(){return e(t,n,r,i)})}:e}(function(e,t){if(e.namespaceURI!=="http://www.w3.org/2000/svg"||"innerHTML"in e)e.innerHTML=t;else{for(Qi=Qi||document.createElement("div"),Qi.innerHTML="<svg>"+t.valueOf().toString()+"</svg>",t=Qi.firstChild;e.firstChild;)e.removeChild(e.firstChild);for(;t.firstChild;)e.appendChild(t.firstChild)}});function di(e,t){if(t){var n=e.firstChild;if(n&&n===e.lastChild&&n.nodeType===3){n.nodeValue=t;return}}e.textContent=t}var ti={animationIterationCount:!0,aspectRatio:!0,borderImageOutset:!0,borderImageSlice:!0,borderImageWidth:!0,boxFlex:!0,boxFlexGroup:!0,boxOrdinalGroup:!0,columnCount:!0,columns:!0,flex:!0,flexGrow:!0,flexPositive:!0,flexShrink:!0,flexNegative:!0,flexOrder:!0,gridArea:!0,gridRow:!0,gridRowEnd:!0,gridRowSpan:!0,gridRowStart:!0,gridColumn:!0,gridColumnEnd:!0,gridColumnSpan:!0,gridColumnStart:!0,fontWeight:!0,lineClamp:!0,lineHeight:!0,opacity:!0,order:!0,orphans:!0,tabSize:!0,widows:!0,zIndex:!0,zoom:!0,fillOpacity:!0,floodOpacity:!0,stopOpacity:!0,strokeDasharray:!0,strokeDashoffset:!0,strokeMiterlimit:!0,strokeOpacity:!0,strokeWidth:!0},Um=["Webkit","ms","Moz","O"];Object.keys(ti).forEach(function(e){Um.forEach(function(t){t=t+e.charAt(0).toUpperCase()+e.substring(1),ti[t]=ti[e]})});function df(e,t,n){return t==null||typeof t=="boolean"||t===""?"":n||typeof t!="number"||t===0||ti.hasOwnProperty(e)&&ti[e]?(""+t).trim():t+"px"}function ff(e,t){e=e.style;for(var n in t)if(t.hasOwnProperty(n)){var r=n.indexOf("--")===0,i=df(n,t[n],r);n==="float"&&(n="cssFloat"),r?e.setProperty(n,i):e[n]=i}}var Bm=Se({menuitem:!0},{area:!0,base:!0,br:!0,col:!0,embed:!0,hr:!0,img:!0,input:!0,keygen:!0,link:!0,meta:!0,param:!0,source:!0,track:!0,wbr:!0});function $l(e,t){if(t){if(Bm[e]&&(t.children!=null||t.dangerouslySetInnerHTML!=null))throw Error(R(137,e));if(t.dangerouslySetInnerHTML!=null){if(t.children!=null)throw Error(R(60));if(typeof t.dangerouslySetInnerHTML!="object"||!("__html"in t.dangerouslySetInnerHTML))throw Error(R(61))}if(t.style!=null&&typeof t.style!="object")throw Error(R(62))}}function Ul(e,t){if(e.indexOf("-")===-1)return typeof t.is=="string";switch(e){case"annotation-xml":case"color-profile":case"font-face":case"font-face-src":case"font-face-uri":case"font-face-format":case"font-face-name":case"missing-glyph":return!1;default:return!0}}var Bl=null;function Ua(e){return e=e.target||e.srcElement||window,e.correspondingUseElement&&(e=e.correspondingUseElement),e.nodeType===3?e.parentNode:e}var Vl=null,mr=null,yr=null;function Ju(e){if(e=Li(e)){if(typeof Vl!="function")throw Error(R(280));var t=e.stateNode;t&&(t=vs(t),Vl(e.stateNode,e.type,t))}}function pf(e){mr?yr?yr.push(e):yr=[e]:mr=e}function hf(){if(mr){var e=mr,t=yr;if(yr=mr=null,Ju(e),t)for(e=0;e<t.length;e++)Ju(t[e])}}function mf(e,t){return e(t)}function yf(){}var Vs=!1;function gf(e,t,n){if(Vs)return e(t,n);Vs=!0;try{return mf(e,t,n)}finally{Vs=!1,(mr!==null||yr!==null)&&(yf(),hf())}}function fi(e,t){var n=e.stateNode;if(n===null)return null;var r=vs(n);if(r===null)return null;n=r[t];e:switch(t){case"onClick":case"onClickCapture":case"onDoubleClick":case"onDoubleClickCapture":case"onMouseDown":case"onMouseDownCapture":case"onMouseMove":case"onMouseMoveCapture":case"onMouseUp":case"onMouseUpCapture":case"onMouseEnter":(r=!r.disabled)||(e=e.type,r=!(e==="button"||e==="input"||e==="select"||e==="textarea")),e=!r;break e;default:e=!1}if(e)return null;if(n&&typeof n!="function")throw Error(R(231,t,typeof n));return n}var Wl=!1;if(Zt)try{var zr={};Object.defineProperty(zr,"passive",{get:function(){Wl=!0}}),window.addEventListener("test",zr,zr),window.removeEventListener("test",zr,zr)}catch{Wl=!1}function Vm(e,t,n,r,i,o,s,l,u){var c=Array.prototype.slice.call(arguments,3);try{t.apply(n,c)}catch(h){this.onError(h)}}var ni=!1,Do=null,Fo=!1,Hl=null,Wm={onError:function(e){ni=!0,Do=e}};function Hm(e,t,n,r,i,o,s,l,u){ni=!1,Do=null,Vm.apply(Wm,arguments)}function Qm(e,t,n,r,i,o,s,l,u){if(Hm.apply(this,arguments),ni){if(ni){var c=Do;ni=!1,Do=null}else throw Error(R(198));Fo||(Fo=!0,Hl=c)}}function Kn(e){var t=e,n=e;if(e.alternate)for(;t.return;)t=t.return;else{e=t;do t=e,t.flags&4098&&(n=t.return),e=t.return;while(e)}return t.tag===3?n:null}function vf(e){if(e.tag===13){var t=e.memoizedState;if(t===null&&(e=e.alternate,e!==null&&(t=e.memoizedState)),t!==null)return t.dehydrated}return null}function Zu(e){if(Kn(e)!==e)throw Error(R(188))}function Ym(e){var t=e.alternate;if(!t){if(t=Kn(e),t===null)throw Error(R(188));return t!==e?null:e}for(var n=e,r=t;;){var i=n.return;if(i===null)break;var o=i.alternate;if(o===null){if(r=i.return,r!==null){n=r;continue}break}if(i.child===o.child){for(o=i.child;o;){if(o===n)return Zu(i),e;if(o===r)return Zu(i),t;o=o.sibling}throw Error(R(188))}if(n.return!==r.return)n=i,r=o;else{for(var s=!1,l=i.child;l;){if(l===n){s=!0,n=i,r=o;break}if(l===r){s=!0,r=i,n=o;break}l=l.sibling}if(!s){for(l=o.child;l;){if(l===n){s=!0,n=o,r=i;break}if(l===r){s=!0,r=o,n=i;break}l=l.sibling}if(!s)throw Error(R(189))}}if(n.alternate!==r)throw Error(R(190))}if(n.tag!==3)throw Error(R(188));return n.stateNode.current===n?e:t}function xf(e){return e=Ym(e),e!==null?wf(e):null}function wf(e){if(e.tag===5||e.tag===6)return e;for(e=e.child;e!==null;){var t=wf(e);if(t!==null)return t;e=e.sibling}return null}var kf=ct.unstable_scheduleCallback,ec=ct.unstable_cancelCallback,Km=ct.unstable_shouldYield,Xm=ct.unstable_requestPaint,_e=ct.unstable_now,Gm=ct.unstable_getCurrentPriorityLevel,Ba=ct.unstable_ImmediatePriority,Sf=ct.unstable_UserBlockingPriority,Io=ct.unstable_NormalPriority,qm=ct.unstable_LowPriority,jf=ct.unstable_IdlePriority,hs=null,Ut=null;function Jm(e){if(Ut&&typeof Ut.onCommitFiberRoot=="function")try{Ut.onCommitFiberRoot(hs,e,void 0,(e.current.flags&128)===128)}catch{}}var Ot=Math.clz32?Math.clz32:ty,Zm=Math.log,ey=Math.LN2;function ty(e){return e>>>=0,e===0?32:31-(Zm(e)/ey|0)|0}var Yi=64,Ki=4194304;function Zr(e){switch(e&-e){case 1:return 1;case 2:return 2;case 4:return 4;case 8:return 8;case 16:return 16;case 32:return 32;case 64:case 128:case 256:case 512:case 1024:case 2048:case 4096:case 8192:case 16384:case 32768:case 65536:case 131072:case 262144:case 524288:case 1048576:case 2097152:return e&4194240;case 4194304:case 8388608:case 16777216:case 33554432:case 67108864:return e&130023424;case 134217728:return 134217728;case 268435456:return 268435456;case 536870912:return 536870912;case 1073741824:return 1073741824;default:return e}}function $o(e,t){var n=e.pendingLanes;if(n===0)return 0;var r=0,i=e.suspendedLanes,o=e.pingedLanes,s=n&268435455;if(s!==0){var l=s&~i;l!==0?r=Zr(l):(o&=s,o!==0&&(r=Zr(o)))}else s=n&~i,s!==0?r=Zr(s):o!==0&&(r=Zr(o));if(r===0)return 0;if(t!==0&&t!==r&&!(t&i)&&(i=r&-r,o=t&-t,i>=o||i===16&&(o&4194240)!==0))return t;if(r&4&&(r|=n&16),t=e.entangledLanes,t!==0)for(e=e.entanglements,t&=r;0<t;)n=31-Ot(t),i=1<<n,r|=e[n],t&=~i;return r}function ny(e,t){switch(e){case 1:case 2:case 4:return t+250;case 8:case 16:case 32:case 64:case 128:case 256:case 512:case 1024:case 2048:case 4096:case 8192:case 16384:case 32768:case 65536:case 131072:case 262144:case 524288:case 1048576:case 2097152:return t+5e3;case 4194304:case 8388608:case 16777216:case 33554432:case 67108864:return-1;case 134217728:case 268435456:case 536870912:case 1073741824:return-1;default:return-1}}function ry(e,t){for(var n=e.suspendedLanes,r=e.pingedLanes,i=e.expirationTimes,o=e.pendingLanes;0<o;){var s=31-Ot(o),l=1<<s,u=i[s];u===-1?(!(l&n)||l&r)&&(i[s]=ny(l,t)):u<=t&&(e.expiredLanes|=l),o&=~l}}function Ql(e){return e=e.pendingLanes&-1073741825,e!==0?e:e&1073741824?1073741824:0}function Ef(){var e=Yi;return Yi<<=1,!(Yi&4194240)&&(Yi=64),e}function Ws(e){for(var t=[],n=0;31>n;n++)t.push(e);return t}function Ai(e,t,n){e.pendingLanes|=t,t!==536870912&&(e.suspendedLanes=0,e.pingedLanes=0),e=e.eventTimes,t=31-Ot(t),e[t]=n}function iy(e,t){var n=e.pendingLanes&~t;e.pendingLanes=t,e.suspendedLanes=0,e.pingedLanes=0,e.expiredLanes&=t,e.mutableReadLanes&=t,e.entangledLanes&=t,t=e.entanglements;var r=e.eventTimes;for(e=e.expirationTimes;0<n;){var i=31-Ot(n),o=1<<i;t[i]=0,r[i]=-1,e[i]=-1,n&=~o}}function Va(e,t){var n=e.entangledLanes|=t;for(e=e.entanglements;n;){var r=31-Ot(n),i=1<<r;i&t|e[r]&t&&(e[r]|=t),n&=~i}}var ce=0;function _f(e){return e&=-e,1<e?4<e?e&268435455?16:536870912:4:1}var Cf,Wa,bf,Tf,Pf,Yl=!1,Xi=[],wn=null,kn=null,Sn=null,pi=new Map,hi=new Map,hn=[],oy="mousedown mouseup touchcancel touchend touchstart auxclick dblclick pointercancel pointerdown pointerup dragend dragstart drop compositionend compositionstart keydown keypress keyup input textInput copy cut paste click change contextmenu reset submit".split(" ");function tc(e,t){switch(e){case"focusin":case"focusout":wn=null;break;case"dragenter":case"dragleave":kn=null;break;case"mouseover":case"mouseout":Sn=null;break;case"pointerover":case"pointerout":pi.delete(t.pointerId);break;case"gotpointercapture":case"lostpointercapture":hi.delete(t.pointerId)}}function Dr(e,t,n,r,i,o){return e===null||e.nativeEvent!==o?(e={blockedOn:t,domEventName:n,eventSystemFlags:r,nativeEvent:o,targetContainers:[i]},t!==null&&(t=Li(t),t!==null&&Wa(t)),e):(e.eventSystemFlags|=r,t=e.targetContainers,i!==null&&t.indexOf(i)===-1&&t.push(i),e)}function sy(e,t,n,r,i){switch(t){case"focusin":return wn=Dr(wn,e,t,n,r,i),!0;case"dragenter":return kn=Dr(kn,e,t,n,r,i),!0;case"mouseover":return Sn=Dr(Sn,e,t,n,r,i),!0;case"pointerover":var o=i.pointerId;return pi.set(o,Dr(pi.get(o)||null,e,t,n,r,i)),!0;case"gotpointercapture":return o=i.pointerId,hi.set(o,Dr(hi.get(o)||null,e,t,n,r,i)),!0}return!1}function Of(e){var t=zn(e.target);if(t!==null){var n=Kn(t);if(n!==null){if(t=n.tag,t===13){if(t=vf(n),t!==null){e.blockedOn=t,Pf(e.priority,function(){bf(n)});return}}else if(t===3&&n.stateNode.current.memoizedState.isDehydrated){e.blockedOn=n.tag===3?n.stateNode.containerInfo:null;return}}}e.blockedOn=null}function vo(e){if(e.blockedOn!==null)return!1;for(var t=e.targetContainers;0<t.length;){var n=Kl(e.domEventName,e.eventSystemFlags,t[0],e.nativeEvent);if(n===null){n=e.nativeEvent;var r=new n.constructor(n.type,n);Bl=r,n.target.dispatchEvent(r),Bl=null}else return t=Li(n),t!==null&&Wa(t),e.blockedOn=n,!1;t.shift()}return!0}function nc(e,t,n){vo(e)&&n.delete(t)}function ly(){Yl=!1,wn!==null&&vo(wn)&&(wn=null),kn!==null&&vo(kn)&&(kn=null),Sn!==null&&vo(Sn)&&(Sn=null),pi.forEach(nc),hi.forEach(nc)}function Fr(e,t){e.blockedOn===t&&(e.blockedOn=null,Yl||(Yl=!0,ct.unstable_scheduleCallback(ct.unstable_NormalPriority,ly)))}function mi(e){function t(i){return Fr(i,e)}if(0<Xi.length){Fr(Xi[0],e);for(var n=1;n<Xi.length;n++){var r=Xi[n];r.blockedOn===e&&(r.blockedOn=null)}}for(wn!==null&&Fr(wn,e),kn!==null&&Fr(kn,e),Sn!==null&&Fr(Sn,e),pi.forEach(t),hi.forEach(t),n=0;n<hn.length;n++)r=hn[n],r.blockedOn===e&&(r.blockedOn=null);for(;0<hn.length&&(n=hn[0],n.blockedOn===null);)Of(n),n.blockedOn===null&&hn.shift()}var gr=rn.ReactCurrentBatchConfig,Uo=!0;function ay(e,t,n,r){var i=ce,o=gr.transition;gr.transition=null;try{ce=1,Ha(e,t,n,r)}finally{ce=i,gr.transition=o}}function uy(e,t,n,r){var i=ce,o=gr.transition;gr.transition=null;try{ce=4,Ha(e,t,n,r)}finally{ce=i,gr.transition=o}}function Ha(e,t,n,r){if(Uo){var i=Kl(e,t,n,r);if(i===null)el(e,t,r,Bo,n),tc(e,r);else if(sy(i,e,t,n,r))r.stopPropagation();else if(tc(e,r),t&4&&-1<oy.indexOf(e)){for(;i!==null;){var o=Li(i);if(o!==null&&Cf(o),o=Kl(e,t,n,r),o===null&&el(e,t,r,Bo,n),o===i)break;i=o}i!==null&&r.stopPropagation()}else el(e,t,r,null,n)}}var Bo=null;function Kl(e,t,n,r){if(Bo=null,e=Ua(r),e=zn(e),e!==null)if(t=Kn(e),t===null)e=null;else if(n=t.tag,n===13){if(e=vf(t),e!==null)return e;e=null}else if(n===3){if(t.stateNode.current.memoizedState.isDehydrated)return t.tag===3?t.stateNode.containerInfo:null;e=null}else t!==e&&(e=null);return Bo=e,null}function Rf(e){switch(e){case"cancel":case"click":case"close":case"contextmenu":case"copy":case"cut":case"auxclick":case"dblclick":case"dragend":case"dragstart":case"drop":case"focusin":case"focusout":case"input":case"invalid":case"keydown":case"keypress":case"keyup":case"mousedown":case"mouseup":case"paste":case"pause":case"play":case"pointercancel":case"pointerdown":case"pointerup":case"ratechange":case"reset":case"resize":case"seeked":case"submit":case"touchcancel":case"touchend":case"touchstart":case"volumechange":case"change":case"selectionchange":case"textInput":case"compositionstart":case"compositionend":case"compositionupdate":case"beforeblur":case"afterblur":case"beforeinput":case"blur":case"fullscreenchange":case"focus":case"hashchange":case"popstate":case"select":case"selectstart":return 1;case"drag":case"dragenter":case"dragexit":case"dragleave":case"dragover":case"mousemove":case"mouseout":case"mouseover":case"pointermove":case"pointerout":case"pointerover":case"scroll":case"toggle":case"touchmove":case"wheel":case"mouseenter":case"mouseleave":case"pointerenter":case"pointerleave":return 4;case"message":switch(Gm()){case Ba:return 1;case Sf:return 4;case Io:case qm:return 16;case jf:return 536870912;default:return 16}default:return 16}}var gn=null,Qa=null,xo=null;function Mf(){if(xo)return xo;var e,t=Qa,n=t.length,r,i="value"in gn?gn.value:gn.textContent,o=i.length;for(e=0;e<n&&t[e]===i[e];e++);var s=n-e;for(r=1;r<=s&&t[n-r]===i[o-r];r++);return xo=i.slice(e,1<r?1-r:void 0)}function wo(e){var t=e.keyCode;return"charCode"in e?(e=e.charCode,e===0&&t===13&&(e=13)):e=t,e===10&&(e=13),32<=e||e===13?e:0}function Gi(){return!0}function rc(){return!1}function ft(e){function t(n,r,i,o,s){this._reactName=n,this._targetInst=i,this.type=r,this.nativeEvent=o,this.target=s,this.currentTarget=null;for(var l in e)e.hasOwnProperty(l)&&(n=e[l],this[l]=n?n(o):o[l]);return this.isDefaultPrevented=(o.defaultPrevented!=null?o.defaultPrevented:o.returnValue===!1)?Gi:rc,this.isPropagationStopped=rc,this}return Se(t.prototype,{preventDefault:function(){this.defaultPrevented=!0;var n=this.nativeEvent;n&&(n.preventDefault?n.preventDefault():typeof n.returnValue!="unknown"&&(n.returnValue=!1),this.isDefaultPrevented=Gi)},stopPropagation:function(){var n=this.nativeEvent;n&&(n.stopPropagation?n.stopPropagation():typeof n.cancelBubble!="unknown"&&(n.cancelBubble=!0),this.isPropagationStopped=Gi)},persist:function(){},isPersistent:Gi}),t}var Rr={eventPhase:0,bubbles:0,cancelable:0,timeStamp:function(e){return e.timeStamp||Date.now()},defaultPrevented:0,isTrusted:0},Ya=ft(Rr),Ni=Se({},Rr,{view:0,detail:0}),cy=ft(Ni),Hs,Qs,Ir,ms=Se({},Ni,{screenX:0,screenY:0,clientX:0,clientY:0,pageX:0,pageY:0,ctrlKey:0,shiftKey:0,altKey:0,metaKey:0,getModifierState:Ka,button:0,buttons:0,relatedTarget:function(e){return e.relatedTarget===void 0?e.fromElement===e.srcElement?e.toElement:e.fromElement:e.relatedTarget},movementX:function(e){return"movementX"in e?e.movementX:(e!==Ir&&(Ir&&e.type==="mousemove"?(Hs=e.screenX-Ir.screenX,Qs=e.screenY-Ir.screenY):Qs=Hs=0,Ir=e),Hs)},movementY:function(e){return"movementY"in e?e.movementY:Qs}}),ic=ft(ms),dy=Se({},ms,{dataTransfer:0}),fy=ft(dy),py=Se({},Ni,{relatedTarget:0}),Ys=ft(py),hy=Se({},Rr,{animationName:0,elapsedTime:0,pseudoElement:0}),my=ft(hy),yy=Se({},Rr,{clipboardData:function(e){return"clipboardData"in e?e.clipboardData:window.clipboardData}}),gy=ft(yy),vy=Se({},Rr,{data:0}),oc=ft(vy),xy={Esc:"Escape",Spacebar:" ",Left:"ArrowLeft",Up:"ArrowUp",Right:"ArrowRight",Down:"ArrowDown",Del:"Delete",Win:"OS",Menu:"ContextMenu",Apps:"ContextMenu",Scroll:"ScrollLock",MozPrintableKey:"Unidentified"},wy={8:"Backspace",9:"Tab",12:"Clear",13:"Enter",16:"Shift",17:"Control",18:"Alt",19:"Pause",20:"CapsLock",27:"Escape",32:" ",33:"PageUp",34:"PageDown",35:"End",36:"Home",37:"ArrowLeft",38:"ArrowUp",39:"ArrowRight",40:"ArrowDown",45:"Insert",46:"Delete",112:"F1",113:"F2",114:"F3",115:"F4",116:"F5",117:"F6",118:"F7",119:"F8",120:"F9",121:"F10",122:"F11",123:"F12",144:"NumLock",145:"ScrollLock",224:"Meta"},ky={Alt:"altKey",Control:"ctrlKey",Meta:"metaKey",Shift:"shiftKey"};function Sy(e){var t=this.nativeEvent;return t.getModifierState?t.getModifierState(e):(e=ky[e])?!!t[e]:!1}function Ka(){return Sy}var jy=Se({},Ni,{key:function(e){if(e.key){var t=xy[e.key]||e.key;if(t!=="Unidentified")return t}return e.type==="keypress"?(e=wo(e),e===13?"Enter":String.fromCharCode(e)):e.type==="keydown"||e.type==="keyup"?wy[e.keyCode]||"Unidentified":""},code:0,location:0,ctrlKey:0,shiftKey:0,altKey:0,metaKey:0,repeat:0,locale:0,getModifierState:Ka,charCode:function(e){return e.type==="keypress"?wo(e):0},keyCode:function(e){return e.type==="keydown"||e.type==="keyup"?e.keyCode:0},which:function(e){return e.type==="keypress"?wo(e):e.type==="keydown"||e.type==="keyup"?e.keyCode:0}}),Ey=ft(jy),_y=Se({},ms,{pointerId:0,width:0,height:0,pressure:0,tangentialPressure:0,tiltX:0,tiltY:0,twist:0,pointerType:0,isPrimary:0}),sc=ft(_y),Cy=Se({},Ni,{touches:0,targetTouches:0,changedTouches:0,altKey:0,metaKey:0,ctrlKey:0,shiftKey:0,getModifierState:Ka}),by=ft(Cy),Ty=Se({},Rr,{propertyName:0,elapsedTime:0,pseudoElement:0}),Py=ft(Ty),Oy=Se({},ms,{deltaX:function(e){return"deltaX"in e?e.deltaX:"wheelDeltaX"in e?-e.wheelDeltaX:0},deltaY:function(e){return"deltaY"in e?e.deltaY:"wheelDeltaY"in e?-e.wheelDeltaY:"wheelDelta"in e?-e.wheelDelta:0},deltaZ:0,deltaMode:0}),Ry=ft(Oy),My=[9,13,27,32],Xa=Zt&&"CompositionEvent"in window,ri=null;Zt&&"documentMode"in document&&(ri=document.documentMode);var Ay=Zt&&"TextEvent"in window&&!ri,Af=Zt&&(!Xa||ri&&8<ri&&11>=ri),lc=" ",ac=!1;function Nf(e,t){switch(e){case"keyup":return My.indexOf(t.keyCode)!==-1;case"keydown":return t.keyCode!==229;case"keypress":case"mousedown":case"focusout":return!0;default:return!1}}function Lf(e){return e=e.detail,typeof e=="object"&&"data"in e?e.data:null}var rr=!1;function Ny(e,t){switch(e){case"compositionend":return Lf(t);case"keypress":return t.which!==32?null:(ac=!0,lc);case"textInput":return e=t.data,e===lc&&ac?null:e;default:return null}}function Ly(e,t){if(rr)return e==="compositionend"||!Xa&&Nf(e,t)?(e=Mf(),xo=Qa=gn=null,rr=!1,e):null;switch(e){case"paste":return null;case"keypress":if(!(t.ctrlKey||t.altKey||t.metaKey)||t.ctrlKey&&t.altKey){if(t.char&&1<t.char.length)return t.char;if(t.which)return String.fromCharCode(t.which)}return null;case"compositionend":return Af&&t.locale!=="ko"?null:t.data;default:return null}}var zy={color:!0,date:!0,datetime:!0,"datetime-local":!0,email:!0,month:!0,number:!0,password:!0,range:!0,search:!0,tel:!0,text:!0,time:!0,url:!0,week:!0};function uc(e){var t=e&&e.nodeName&&e.nodeName.toLowerCase();return t==="input"?!!zy[e.type]:t==="textarea"}function zf(e,t,n,r){pf(r),t=Vo(t,"onChange"),0<t.length&&(n=new Ya("onChange","change",null,n,r),e.push({event:n,listeners:t}))}var ii=null,yi=null;function Dy(e){Yf(e,0)}function ys(e){var t=sr(e);if(sf(t))return e}function Fy(e,t){if(e==="change")return t}var Df=!1;if(Zt){var Ks;if(Zt){var Xs="oninput"in document;if(!Xs){var cc=document.createElement("div");cc.setAttribute("oninput","return;"),Xs=typeof cc.oninput=="function"}Ks=Xs}else Ks=!1;Df=Ks&&(!document.documentMode||9<document.documentMode)}function dc(){ii&&(ii.detachEvent("onpropertychange",Ff),yi=ii=null)}function Ff(e){if(e.propertyName==="value"&&ys(yi)){var t=[];zf(t,yi,e,Ua(e)),gf(Dy,t)}}function Iy(e,t,n){e==="focusin"?(dc(),ii=t,yi=n,ii.attachEvent("onpropertychange",Ff)):e==="focusout"&&dc()}function $y(e){if(e==="selectionchange"||e==="keyup"||e==="keydown")return ys(yi)}function Uy(e,t){if(e==="click")return ys(t)}function By(e,t){if(e==="input"||e==="change")return ys(t)}function Vy(e,t){return e===t&&(e!==0||1/e===1/t)||e!==e&&t!==t}var Mt=typeof Object.is=="function"?Object.is:Vy;function gi(e,t){if(Mt(e,t))return!0;if(typeof e!="object"||e===null||typeof t!="object"||t===null)return!1;var n=Object.keys(e),r=Object.keys(t);if(n.length!==r.length)return!1;for(r=0;r<n.length;r++){var i=n[r];if(!Ol.call(t,i)||!Mt(e[i],t[i]))return!1}return!0}function fc(e){for(;e&&e.firstChild;)e=e.firstChild;return e}function pc(e,t){var n=fc(e);e=0;for(var r;n;){if(n.nodeType===3){if(r=e+n.textContent.length,e<=t&&r>=t)return{node:n,offset:t-e};e=r}e:{for(;n;){if(n.nextSibling){n=n.nextSibling;break e}n=n.parentNode}n=void 0}n=fc(n)}}function If(e,t){return e&&t?e===t?!0:e&&e.nodeType===3?!1:t&&t.nodeType===3?If(e,t.parentNode):"contains"in e?e.contains(t):e.compareDocumentPosition?!!(e.compareDocumentPosition(t)&16):!1:!1}function $f(){for(var e=window,t=zo();t instanceof e.HTMLIFrameElement;){try{var n=typeof t.contentWindow.location.href=="string"}catch{n=!1}if(n)e=t.contentWindow;else break;t=zo(e.document)}return t}function Ga(e){var t=e&&e.nodeName&&e.nodeName.toLowerCase();return t&&(t==="input"&&(e.type==="text"||e.type==="search"||e.type==="tel"||e.type==="url"||e.type==="password")||t==="textarea"||e.contentEditable==="true")}function Wy(e){var t=$f(),n=e.focusedElem,r=e.selectionRange;if(t!==n&&n&&n.ownerDocument&&If(n.ownerDocument.documentElement,n)){if(r!==null&&Ga(n)){if(t=r.start,e=r.end,e===void 0&&(e=t),"selectionStart"in n)n.selectionStart=t,n.selectionEnd=Math.min(e,n.value.length);else if(e=(t=n.ownerDocument||document)&&t.defaultView||window,e.getSelection){e=e.getSelection();var i=n.textContent.length,o=Math.min(r.start,i);r=r.end===void 0?o:Math.min(r.end,i),!e.extend&&o>r&&(i=r,r=o,o=i),i=pc(n,o);var s=pc(n,r);i&&s&&(e.rangeCount!==1||e.anchorNode!==i.node||e.anchorOffset!==i.offset||e.focusNode!==s.node||e.focusOffset!==s.offset)&&(t=t.createRange(),t.setStart(i.node,i.offset),e.removeAllRanges(),o>r?(e.addRange(t),e.extend(s.node,s.offset)):(t.setEnd(s.node,s.offset),e.addRange(t)))}}for(t=[],e=n;e=e.parentNode;)e.nodeType===1&&t.push({element:e,left:e.scrollLeft,top:e.scrollTop});for(typeof n.focus=="function"&&n.focus(),n=0;n<t.length;n++)e=t[n],e.element.scrollLeft=e.left,e.element.scrollTop=e.top}}var Hy=Zt&&"documentMode"in document&&11>=document.documentMode,ir=null,Xl=null,oi=null,Gl=!1;function hc(e,t,n){var r=n.window===n?n.document:n.nodeType===9?n:n.ownerDocument;Gl||ir==null||ir!==zo(r)||(r=ir,"selectionStart"in r&&Ga(r)?r={start:r.selectionStart,end:r.selectionEnd}:(r=(r.ownerDocument&&r.ownerDocument.defaultView||window).getSelection(),r={anchorNode:r.anchorNode,anchorOffset:r.anchorOffset,focusNode:r.focusNode,focusOffset:r.focusOffset}),oi&&gi(oi,r)||(oi=r,r=Vo(Xl,"onSelect"),0<r.length&&(t=new Ya("onSelect","select",null,t,n),e.push({event:t,listeners:r}),t.target=ir)))}function qi(e,t){var n={};return n[e.toLowerCase()]=t.toLowerCase(),n["Webkit"+e]="webkit"+t,n["Moz"+e]="moz"+t,n}var or={animationend:qi("Animation","AnimationEnd"),animationiteration:qi("Animation","AnimationIteration"),animationstart:qi("Animation","AnimationStart"),transitionend:qi("Transition","TransitionEnd")},Gs={},Uf={};Zt&&(Uf=document.createElement("div").style,"AnimationEvent"in window||(delete or.animationend.animation,delete or.animationiteration.animation,delete or.animationstart.animation),"TransitionEvent"in window||delete or.transitionend.transition);function gs(e){if(Gs[e])return Gs[e];if(!or[e])return e;var t=or[e],n;for(n in t)if(t.hasOwnProperty(n)&&n in Uf)return Gs[e]=t[n];return e}var Bf=gs("animationend"),Vf=gs("animationiteration"),Wf=gs("animationstart"),Hf=gs("transitionend"),Qf=new Map,mc="abort auxClick cancel canPlay canPlayThrough click close contextMenu copy cut drag dragEnd dragEnter dragExit dragLeave dragOver dragStart drop durationChange emptied encrypted ended error gotPointerCapture input invalid keyDown keyPress keyUp load loadedData loadedMetadata loadStart lostPointerCapture mouseDown mouseMove mouseOut mouseOver mouseUp paste pause play playing pointerCancel pointerDown pointerMove pointerOut pointerOver pointerUp progress rateChange reset resize seeked seeking stalled submit suspend timeUpdate touchCancel touchEnd touchStart volumeChange scroll toggle touchMove waiting wheel".split(" ");function On(e,t){Qf.set(e,t),Yn(t,[e])}for(var qs=0;qs<mc.length;qs++){var Js=mc[qs],Qy=Js.toLowerCase(),Yy=Js[0].toUpperCase()+Js.slice(1);On(Qy,"on"+Yy)}On(Bf,"onAnimationEnd");On(Vf,"onAnimationIteration");On(Wf,"onAnimationStart");On("dblclick","onDoubleClick");On("focusin","onFocus");On("focusout","onBlur");On(Hf,"onTransitionEnd");kr("onMouseEnter",["mouseout","mouseover"]);kr("onMouseLeave",["mouseout","mouseover"]);kr("onPointerEnter",["pointerout","pointerover"]);kr("onPointerLeave",["pointerout","pointerover"]);Yn("onChange","change click focusin focusout input keydown keyup selectionchange".split(" "));Yn("onSelect","focusout contextmenu dragend focusin keydown keyup mousedown mouseup selectionchange".split(" "));Yn("onBeforeInput",["compositionend","keypress","textInput","paste"]);Yn("onCompositionEnd","compositionend focusout keydown keypress keyup mousedown".split(" "));Yn("onCompositionStart","compositionstart focusout keydown keypress keyup mousedown".split(" "));Yn("onCompositionUpdate","compositionupdate focusout keydown keypress keyup mousedown".split(" "));var ei="abort canplay canplaythrough durationchange emptied encrypted ended error loadeddata loadedmetadata loadstart pause play playing progress ratechange resize seeked seeking stalled suspend timeupdate volumechange waiting".split(" "),Ky=new Set("cancel close invalid load scroll toggle".split(" ").concat(ei));function yc(e,t,n){var r=e.type||"unknown-event";e.currentTarget=n,Qm(r,t,void 0,e),e.currentTarget=null}function Yf(e,t){t=(t&4)!==0;for(var n=0;n<e.length;n++){var r=e[n],i=r.event;r=r.listeners;e:{var o=void 0;if(t)for(var s=r.length-1;0<=s;s--){var l=r[s],u=l.instance,c=l.currentTarget;if(l=l.listener,u!==o&&i.isPropagationStopped())break e;yc(i,l,c),o=u}else for(s=0;s<r.length;s++){if(l=r[s],u=l.instance,c=l.currentTarget,l=l.listener,u!==o&&i.isPropagationStopped())break e;yc(i,l,c),o=u}}}if(Fo)throw e=Hl,Fo=!1,Hl=null,e}function me(e,t){var n=t[ta];n===void 0&&(n=t[ta]=new Set);var r=e+"__bubble";n.has(r)||(Kf(t,e,2,!1),n.add(r))}function Zs(e,t,n){var r=0;t&&(r|=4),Kf(n,e,r,t)}var Ji="_reactListening"+Math.random().toString(36).slice(2);function vi(e){if(!e[Ji]){e[Ji]=!0,ef.forEach(function(n){n!=="selectionchange"&&(Ky.has(n)||Zs(n,!1,e),Zs(n,!0,e))});var t=e.nodeType===9?e:e.ownerDocument;t===null||t[Ji]||(t[Ji]=!0,Zs("selectionchange",!1,t))}}function Kf(e,t,n,r){switch(Rf(t)){case 1:var i=ay;break;case 4:i=uy;break;default:i=Ha}n=i.bind(null,t,n,e),i=void 0,!Wl||t!=="touchstart"&&t!=="touchmove"&&t!=="wheel"||(i=!0),r?i!==void 0?e.addEventListener(t,n,{capture:!0,passive:i}):e.addEventListener(t,n,!0):i!==void 0?e.addEventListener(t,n,{passive:i}):e.addEventListener(t,n,!1)}function el(e,t,n,r,i){var o=r;if(!(t&1)&&!(t&2)&&r!==null)e:for(;;){if(r===null)return;var s=r.tag;if(s===3||s===4){var l=r.stateNode.containerInfo;if(l===i||l.nodeType===8&&l.parentNode===i)break;if(s===4)for(s=r.return;s!==null;){var u=s.tag;if((u===3||u===4)&&(u=s.stateNode.containerInfo,u===i||u.nodeType===8&&u.parentNode===i))return;s=s.return}for(;l!==null;){if(s=zn(l),s===null)return;if(u=s.tag,u===5||u===6){r=o=s;continue e}l=l.parentNode}}r=r.return}gf(function(){var c=o,h=Ua(n),f=[];e:{var m=Qf.get(e);if(m!==void 0){var w=Ya,g=e;switch(e){case"keypress":if(wo(n)===0)break e;case"keydown":case"keyup":w=Ey;break;case"focusin":g="focus",w=Ys;break;case"focusout":g="blur",w=Ys;break;case"beforeblur":case"afterblur":w=Ys;break;case"click":if(n.button===2)break e;case"auxclick":case"dblclick":case"mousedown":case"mousemove":case"mouseup":case"mouseout":case"mouseover":case"contextmenu":w=ic;break;case"drag":case"dragend":case"dragenter":case"dragexit":case"dragleave":case"dragover":case"dragstart":case"drop":w=fy;break;case"touchcancel":case"touchend":case"touchmove":case"touchstart":w=by;break;case Bf:case Vf:case Wf:w=my;break;case Hf:w=Py;break;case"scroll":w=cy;break;case"wheel":w=Ry;break;case"copy":case"cut":case"paste":w=gy;break;case"gotpointercapture":case"lostpointercapture":case"pointercancel":case"pointerdown":case"pointermove":case"pointerout":case"pointerover":case"pointerup":w=sc}var v=(t&4)!==0,b=!v&&e==="scroll",p=v?m!==null?m+"Capture":null:m;v=[];for(var d=c,y;d!==null;){y=d;var k=y.stateNode;if(y.tag===5&&k!==null&&(y=k,p!==null&&(k=fi(d,p),k!=null&&v.push(xi(d,k,y)))),b)break;d=d.return}0<v.length&&(m=new w(m,g,null,n,h),f.push({event:m,listeners:v}))}}if(!(t&7)){e:{if(m=e==="mouseover"||e==="pointerover",w=e==="mouseout"||e==="pointerout",m&&n!==Bl&&(g=n.relatedTarget||n.fromElement)&&(zn(g)||g[en]))break e;if((w||m)&&(m=h.window===h?h:(m=h.ownerDocument)?m.defaultView||m.parentWindow:window,w?(g=n.relatedTarget||n.toElement,w=c,g=g?zn(g):null,g!==null&&(b=Kn(g),g!==b||g.tag!==5&&g.tag!==6)&&(g=null)):(w=null,g=c),w!==g)){if(v=ic,k="onMouseLeave",p="onMouseEnter",d="mouse",(e==="pointerout"||e==="pointerover")&&(v=sc,k="onPointerLeave",p="onPointerEnter",d="pointer"),b=w==null?m:sr(w),y=g==null?m:sr(g),m=new v(k,d+"leave",w,n,h),m.target=b,m.relatedTarget=y,k=null,zn(h)===c&&(v=new v(p,d+"enter",g,n,h),v.target=y,v.relatedTarget=b,k=v),b=k,w&&g)t:{for(v=w,p=g,d=0,y=v;y;y=qn(y))d++;for(y=0,k=p;k;k=qn(k))y++;for(;0<d-y;)v=qn(v),d--;for(;0<y-d;)p=qn(p),y--;for(;d--;){if(v===p||p!==null&&v===p.alternate)break t;v=qn(v),p=qn(p)}v=null}else v=null;w!==null&&gc(f,m,w,v,!1),g!==null&&b!==null&&gc(f,b,g,v,!0)}}e:{if(m=c?sr(c):window,w=m.nodeName&&m.nodeName.toLowerCase(),w==="select"||w==="input"&&m.type==="file")var _=Fy;else if(uc(m))if(Df)_=By;else{_=$y;var P=Iy}else(w=m.nodeName)&&w.toLowerCase()==="input"&&(m.type==="checkbox"||m.type==="radio")&&(_=Uy);if(_&&(_=_(e,c))){zf(f,_,n,h);break e}P&&P(e,m,c),e==="focusout"&&(P=m._wrapperState)&&P.controlled&&m.type==="number"&&Dl(m,"number",m.value)}switch(P=c?sr(c):window,e){case"focusin":(uc(P)||P.contentEditable==="true")&&(ir=P,Xl=c,oi=null);break;case"focusout":oi=Xl=ir=null;break;case"mousedown":Gl=!0;break;case"contextmenu":case"mouseup":case"dragend":Gl=!1,hc(f,n,h);break;case"selectionchange":if(Hy)break;case"keydown":case"keyup":hc(f,n,h)}var C;if(Xa)e:{switch(e){case"compositionstart":var N="onCompositionStart";break e;case"compositionend":N="onCompositionEnd";break e;case"compositionupdate":N="onCompositionUpdate";break e}N=void 0}else rr?Nf(e,n)&&(N="onCompositionEnd"):e==="keydown"&&n.keyCode===229&&(N="onCompositionStart");N&&(Af&&n.locale!=="ko"&&(rr||N!=="onCompositionStart"?N==="onCompositionEnd"&&rr&&(C=Mf()):(gn=h,Qa="value"in gn?gn.value:gn.textContent,rr=!0)),P=Vo(c,N),0<P.length&&(N=new oc(N,e,null,n,h),f.push({event:N,listeners:P}),C?N.data=C:(C=Lf(n),C!==null&&(N.data=C)))),(C=Ay?Ny(e,n):Ly(e,n))&&(c=Vo(c,"onBeforeInput"),0<c.length&&(h=new oc("onBeforeInput","beforeinput",null,n,h),f.push({event:h,listeners:c}),h.data=C))}Yf(f,t)})}function xi(e,t,n){return{instance:e,listener:t,currentTarget:n}}function Vo(e,t){for(var n=t+"Capture",r=[];e!==null;){var i=e,o=i.stateNode;i.tag===5&&o!==null&&(i=o,o=fi(e,n),o!=null&&r.unshift(xi(e,o,i)),o=fi(e,t),o!=null&&r.push(xi(e,o,i))),e=e.return}return r}function qn(e){if(e===null)return null;do e=e.return;while(e&&e.tag!==5);return e||null}function gc(e,t,n,r,i){for(var o=t._reactName,s=[];n!==null&&n!==r;){var l=n,u=l.alternate,c=l.stateNode;if(u!==null&&u===r)break;l.tag===5&&c!==null&&(l=c,i?(u=fi(n,o),u!=null&&s.unshift(xi(n,u,l))):i||(u=fi(n,o),u!=null&&s.push(xi(n,u,l)))),n=n.return}s.length!==0&&e.push({event:t,listeners:s})}var Xy=/\r\n?/g,Gy=/\u0000|\uFFFD/g;function vc(e){return(typeof e=="string"?e:""+e).replace(Xy,`
`).replace(Gy,"")}function Zi(e,t,n){if(t=vc(t),vc(e)!==t&&n)throw Error(R(425))}function Wo(){}var ql=null,Jl=null;function Zl(e,t){return e==="textarea"||e==="noscript"||typeof t.children=="string"||typeof t.children=="number"||typeof t.dangerouslySetInnerHTML=="object"&&t.dangerouslySetInnerHTML!==null&&t.dangerouslySetInnerHTML.__html!=null}var ea=typeof setTimeout=="function"?setTimeout:void 0,qy=typeof clearTimeout=="function"?clearTimeout:void 0,xc=typeof Promise=="function"?Promise:void 0,Jy=typeof queueMicrotask=="function"?queueMicrotask:typeof xc<"u"?function(e){return xc.resolve(null).then(e).catch(Zy)}:ea;function Zy(e){setTimeout(function(){throw e})}function tl(e,t){var n=t,r=0;do{var i=n.nextSibling;if(e.removeChild(n),i&&i.nodeType===8)if(n=i.data,n==="/$"){if(r===0){e.removeChild(i),mi(t);return}r--}else n!=="$"&&n!=="$?"&&n!=="$!"||r++;n=i}while(n);mi(t)}function jn(e){for(;e!=null;e=e.nextSibling){var t=e.nodeType;if(t===1||t===3)break;if(t===8){if(t=e.data,t==="$"||t==="$!"||t==="$?")break;if(t==="/$")return null}}return e}function wc(e){e=e.previousSibling;for(var t=0;e;){if(e.nodeType===8){var n=e.data;if(n==="$"||n==="$!"||n==="$?"){if(t===0)return e;t--}else n==="/$"&&t++}e=e.previousSibling}return null}var Mr=Math.random().toString(36).slice(2),Ft="__reactFiber$"+Mr,wi="__reactProps$"+Mr,en="__reactContainer$"+Mr,ta="__reactEvents$"+Mr,eg="__reactListeners$"+Mr,tg="__reactHandles$"+Mr;function zn(e){var t=e[Ft];if(t)return t;for(var n=e.parentNode;n;){if(t=n[en]||n[Ft]){if(n=t.alternate,t.child!==null||n!==null&&n.child!==null)for(e=wc(e);e!==null;){if(n=e[Ft])return n;e=wc(e)}return t}e=n,n=e.parentNode}return null}function Li(e){return e=e[Ft]||e[en],!e||e.tag!==5&&e.tag!==6&&e.tag!==13&&e.tag!==3?null:e}function sr(e){if(e.tag===5||e.tag===6)return e.stateNode;throw Error(R(33))}function vs(e){return e[wi]||null}var na=[],lr=-1;function Rn(e){return{current:e}}function ye(e){0>lr||(e.current=na[lr],na[lr]=null,lr--)}function pe(e,t){lr++,na[lr]=e.current,e.current=t}var Pn={},Ke=Rn(Pn),nt=Rn(!1),Bn=Pn;function Sr(e,t){var n=e.type.contextTypes;if(!n)return Pn;var r=e.stateNode;if(r&&r.__reactInternalMemoizedUnmaskedChildContext===t)return r.__reactInternalMemoizedMaskedChildContext;var i={},o;for(o in n)i[o]=t[o];return r&&(e=e.stateNode,e.__reactInternalMemoizedUnmaskedChildContext=t,e.__reactInternalMemoizedMaskedChildContext=i),i}function rt(e){return e=e.childContextTypes,e!=null}function Ho(){ye(nt),ye(Ke)}function kc(e,t,n){if(Ke.current!==Pn)throw Error(R(168));pe(Ke,t),pe(nt,n)}function Xf(e,t,n){var r=e.stateNode;if(t=t.childContextTypes,typeof r.getChildContext!="function")return n;r=r.getChildContext();for(var i in r)if(!(i in t))throw Error(R(108,Im(e)||"Unknown",i));return Se({},n,r)}function Qo(e){return e=(e=e.stateNode)&&e.__reactInternalMemoizedMergedChildContext||Pn,Bn=Ke.current,pe(Ke,e),pe(nt,nt.current),!0}function Sc(e,t,n){var r=e.stateNode;if(!r)throw Error(R(169));n?(e=Xf(e,t,Bn),r.__reactInternalMemoizedMergedChildContext=e,ye(nt),ye(Ke),pe(Ke,e)):ye(nt),pe(nt,n)}var Kt=null,xs=!1,nl=!1;function Gf(e){Kt===null?Kt=[e]:Kt.push(e)}function ng(e){xs=!0,Gf(e)}function Mn(){if(!nl&&Kt!==null){nl=!0;var e=0,t=ce;try{var n=Kt;for(ce=1;e<n.length;e++){var r=n[e];do r=r(!0);while(r!==null)}Kt=null,xs=!1}catch(i){throw Kt!==null&&(Kt=Kt.slice(e+1)),kf(Ba,Mn),i}finally{ce=t,nl=!1}}return null}var ar=[],ur=0,Yo=null,Ko=0,mt=[],yt=0,Vn=null,Xt=1,Gt="";function Nn(e,t){ar[ur++]=Ko,ar[ur++]=Yo,Yo=e,Ko=t}function qf(e,t,n){mt[yt++]=Xt,mt[yt++]=Gt,mt[yt++]=Vn,Vn=e;var r=Xt;e=Gt;var i=32-Ot(r)-1;r&=~(1<<i),n+=1;var o=32-Ot(t)+i;if(30<o){var s=i-i%5;o=(r&(1<<s)-1).toString(32),r>>=s,i-=s,Xt=1<<32-Ot(t)+i|n<<i|r,Gt=o+e}else Xt=1<<o|n<<i|r,Gt=e}function qa(e){e.return!==null&&(Nn(e,1),qf(e,1,0))}function Ja(e){for(;e===Yo;)Yo=ar[--ur],ar[ur]=null,Ko=ar[--ur],ar[ur]=null;for(;e===Vn;)Vn=mt[--yt],mt[yt]=null,Gt=mt[--yt],mt[yt]=null,Xt=mt[--yt],mt[yt]=null}var at=null,lt=null,ve=!1,Tt=null;function Jf(e,t){var n=gt(5,null,null,0);n.elementType="DELETED",n.stateNode=t,n.return=e,t=e.deletions,t===null?(e.deletions=[n],e.flags|=16):t.push(n)}function jc(e,t){switch(e.tag){case 5:var n=e.type;return t=t.nodeType!==1||n.toLowerCase()!==t.nodeName.toLowerCase()?null:t,t!==null?(e.stateNode=t,at=e,lt=jn(t.firstChild),!0):!1;case 6:return t=e.pendingProps===""||t.nodeType!==3?null:t,t!==null?(e.stateNode=t,at=e,lt=null,!0):!1;case 13:return t=t.nodeType!==8?null:t,t!==null?(n=Vn!==null?{id:Xt,overflow:Gt}:null,e.memoizedState={dehydrated:t,treeContext:n,retryLane:1073741824},n=gt(18,null,null,0),n.stateNode=t,n.return=e,e.child=n,at=e,lt=null,!0):!1;default:return!1}}function ra(e){return(e.mode&1)!==0&&(e.flags&128)===0}function ia(e){if(ve){var t=lt;if(t){var n=t;if(!jc(e,t)){if(ra(e))throw Error(R(418));t=jn(n.nextSibling);var r=at;t&&jc(e,t)?Jf(r,n):(e.flags=e.flags&-4097|2,ve=!1,at=e)}}else{if(ra(e))throw Error(R(418));e.flags=e.flags&-4097|2,ve=!1,at=e}}}function Ec(e){for(e=e.return;e!==null&&e.tag!==5&&e.tag!==3&&e.tag!==13;)e=e.return;at=e}function eo(e){if(e!==at)return!1;if(!ve)return Ec(e),ve=!0,!1;var t;if((t=e.tag!==3)&&!(t=e.tag!==5)&&(t=e.type,t=t!=="head"&&t!=="body"&&!Zl(e.type,e.memoizedProps)),t&&(t=lt)){if(ra(e))throw Zf(),Error(R(418));for(;t;)Jf(e,t),t=jn(t.nextSibling)}if(Ec(e),e.tag===13){if(e=e.memoizedState,e=e!==null?e.dehydrated:null,!e)throw Error(R(317));e:{for(e=e.nextSibling,t=0;e;){if(e.nodeType===8){var n=e.data;if(n==="/$"){if(t===0){lt=jn(e.nextSibling);break e}t--}else n!=="$"&&n!=="$!"&&n!=="$?"||t++}e=e.nextSibling}lt=null}}else lt=at?jn(e.stateNode.nextSibling):null;return!0}function Zf(){for(var e=lt;e;)e=jn(e.nextSibling)}function jr(){lt=at=null,ve=!1}function Za(e){Tt===null?Tt=[e]:Tt.push(e)}var rg=rn.ReactCurrentBatchConfig;function _t(e,t){if(e&&e.defaultProps){t=Se({},t),e=e.defaultProps;for(var n in e)t[n]===void 0&&(t[n]=e[n]);return t}return t}var Xo=Rn(null),Go=null,cr=null,eu=null;function tu(){eu=cr=Go=null}function nu(e){var t=Xo.current;ye(Xo),e._currentValue=t}function oa(e,t,n){for(;e!==null;){var r=e.alternate;if((e.childLanes&t)!==t?(e.childLanes|=t,r!==null&&(r.childLanes|=t)):r!==null&&(r.childLanes&t)!==t&&(r.childLanes|=t),e===n)break;e=e.return}}function vr(e,t){Go=e,eu=cr=null,e=e.dependencies,e!==null&&e.firstContext!==null&&(e.lanes&t&&(tt=!0),e.firstContext=null)}function wt(e){var t=e._currentValue;if(eu!==e)if(e={context:e,memoizedValue:t,next:null},cr===null){if(Go===null)throw Error(R(308));cr=e,Go.dependencies={lanes:0,firstContext:e}}else cr=cr.next=e;return t}var Dn=null;function ru(e){Dn===null?Dn=[e]:Dn.push(e)}function ep(e,t,n,r){var i=t.interleaved;return i===null?(n.next=n,ru(t)):(n.next=i.next,i.next=n),t.interleaved=n,tn(e,r)}function tn(e,t){e.lanes|=t;var n=e.alternate;for(n!==null&&(n.lanes|=t),n=e,e=e.return;e!==null;)e.childLanes|=t,n=e.alternate,n!==null&&(n.childLanes|=t),n=e,e=e.return;return n.tag===3?n.stateNode:null}var pn=!1;function iu(e){e.updateQueue={baseState:e.memoizedState,firstBaseUpdate:null,lastBaseUpdate:null,shared:{pending:null,interleaved:null,lanes:0},effects:null}}function tp(e,t){e=e.updateQueue,t.updateQueue===e&&(t.updateQueue={baseState:e.baseState,firstBaseUpdate:e.firstBaseUpdate,lastBaseUpdate:e.lastBaseUpdate,shared:e.shared,effects:e.effects})}function qt(e,t){return{eventTime:e,lane:t,tag:0,payload:null,callback:null,next:null}}function En(e,t,n){var r=e.updateQueue;if(r===null)return null;if(r=r.shared,oe&2){var i=r.pending;return i===null?t.next=t:(t.next=i.next,i.next=t),r.pending=t,tn(e,n)}return i=r.interleaved,i===null?(t.next=t,ru(r)):(t.next=i.next,i.next=t),r.interleaved=t,tn(e,n)}function ko(e,t,n){if(t=t.updateQueue,t!==null&&(t=t.shared,(n&4194240)!==0)){var r=t.lanes;r&=e.pendingLanes,n|=r,t.lanes=n,Va(e,n)}}function _c(e,t){var n=e.updateQueue,r=e.alternate;if(r!==null&&(r=r.updateQueue,n===r)){var i=null,o=null;if(n=n.firstBaseUpdate,n!==null){do{var s={eventTime:n.eventTime,lane:n.lane,tag:n.tag,payload:n.payload,callback:n.callback,next:null};o===null?i=o=s:o=o.next=s,n=n.next}while(n!==null);o===null?i=o=t:o=o.next=t}else i=o=t;n={baseState:r.baseState,firstBaseUpdate:i,lastBaseUpdate:o,shared:r.shared,effects:r.effects},e.updateQueue=n;return}e=n.lastBaseUpdate,e===null?n.firstBaseUpdate=t:e.next=t,n.lastBaseUpdate=t}function qo(e,t,n,r){var i=e.updateQueue;pn=!1;var o=i.firstBaseUpdate,s=i.lastBaseUpdate,l=i.shared.pending;if(l!==null){i.shared.pending=null;var u=l,c=u.next;u.next=null,s===null?o=c:s.next=c,s=u;var h=e.alternate;h!==null&&(h=h.updateQueue,l=h.lastBaseUpdate,l!==s&&(l===null?h.firstBaseUpdate=c:l.next=c,h.lastBaseUpdate=u))}if(o!==null){var f=i.baseState;s=0,h=c=u=null,l=o;do{var m=l.lane,w=l.eventTime;if((r&m)===m){h!==null&&(h=h.next={eventTime:w,lane:0,tag:l.tag,payload:l.payload,callback:l.callback,next:null});e:{var g=e,v=l;switch(m=t,w=n,v.tag){case 1:if(g=v.payload,typeof g=="function"){f=g.call(w,f,m);break e}f=g;break e;case 3:g.flags=g.flags&-65537|128;case 0:if(g=v.payload,m=typeof g=="function"?g.call(w,f,m):g,m==null)break e;f=Se({},f,m);break e;case 2:pn=!0}}l.callback!==null&&l.lane!==0&&(e.flags|=64,m=i.effects,m===null?i.effects=[l]:m.push(l))}else w={eventTime:w,lane:m,tag:l.tag,payload:l.payload,callback:l.callback,next:null},h===null?(c=h=w,u=f):h=h.next=w,s|=m;if(l=l.next,l===null){if(l=i.shared.pending,l===null)break;m=l,l=m.next,m.next=null,i.lastBaseUpdate=m,i.shared.pending=null}}while(!0);if(h===null&&(u=f),i.baseState=u,i.firstBaseUpdate=c,i.lastBaseUpdate=h,t=i.shared.interleaved,t!==null){i=t;do s|=i.lane,i=i.next;while(i!==t)}else o===null&&(i.shared.lanes=0);Hn|=s,e.lanes=s,e.memoizedState=f}}function Cc(e,t,n){if(e=t.effects,t.effects=null,e!==null)for(t=0;t<e.length;t++){var r=e[t],i=r.callback;if(i!==null){if(r.callback=null,r=n,typeof i!="function")throw Error(R(191,i));i.call(r)}}}var np=new Zd.Component().refs;function sa(e,t,n,r){t=e.memoizedState,n=n(r,t),n=n==null?t:Se({},t,n),e.memoizedState=n,e.lanes===0&&(e.updateQueue.baseState=n)}var ws={isMounted:function(e){return(e=e._reactInternals)?Kn(e)===e:!1},enqueueSetState:function(e,t,n){e=e._reactInternals;var r=qe(),i=Cn(e),o=qt(r,i);o.payload=t,n!=null&&(o.callback=n),t=En(e,o,i),t!==null&&(Rt(t,e,i,r),ko(t,e,i))},enqueueReplaceState:function(e,t,n){e=e._reactInternals;var r=qe(),i=Cn(e),o=qt(r,i);o.tag=1,o.payload=t,n!=null&&(o.callback=n),t=En(e,o,i),t!==null&&(Rt(t,e,i,r),ko(t,e,i))},enqueueForceUpdate:function(e,t){e=e._reactInternals;var n=qe(),r=Cn(e),i=qt(n,r);i.tag=2,t!=null&&(i.callback=t),t=En(e,i,r),t!==null&&(Rt(t,e,r,n),ko(t,e,r))}};function bc(e,t,n,r,i,o,s){return e=e.stateNode,typeof e.shouldComponentUpdate=="function"?e.shouldComponentUpdate(r,o,s):t.prototype&&t.prototype.isPureReactComponent?!gi(n,r)||!gi(i,o):!0}function rp(e,t,n){var r=!1,i=Pn,o=t.contextType;return typeof o=="object"&&o!==null?o=wt(o):(i=rt(t)?Bn:Ke.current,r=t.contextTypes,o=(r=r!=null)?Sr(e,i):Pn),t=new t(n,o),e.memoizedState=t.state!==null&&t.state!==void 0?t.state:null,t.updater=ws,e.stateNode=t,t._reactInternals=e,r&&(e=e.stateNode,e.__reactInternalMemoizedUnmaskedChildContext=i,e.__reactInternalMemoizedMaskedChildContext=o),t}function Tc(e,t,n,r){e=t.state,typeof t.componentWillReceiveProps=="function"&&t.componentWillReceiveProps(n,r),typeof t.UNSAFE_componentWillReceiveProps=="function"&&t.UNSAFE_componentWillReceiveProps(n,r),t.state!==e&&ws.enqueueReplaceState(t,t.state,null)}function la(e,t,n,r){var i=e.stateNode;i.props=n,i.state=e.memoizedState,i.refs=np,iu(e);var o=t.contextType;typeof o=="object"&&o!==null?i.context=wt(o):(o=rt(t)?Bn:Ke.current,i.context=Sr(e,o)),i.state=e.memoizedState,o=t.getDerivedStateFromProps,typeof o=="function"&&(sa(e,t,o,n),i.state=e.memoizedState),typeof t.getDerivedStateFromProps=="function"||typeof i.getSnapshotBeforeUpdate=="function"||typeof i.UNSAFE_componentWillMount!="function"&&typeof i.componentWillMount!="function"||(t=i.state,typeof i.componentWillMount=="function"&&i.componentWillMount(),typeof i.UNSAFE_componentWillMount=="function"&&i.UNSAFE_componentWillMount(),t!==i.state&&ws.enqueueReplaceState(i,i.state,null),qo(e,n,i,r),i.state=e.memoizedState),typeof i.componentDidMount=="function"&&(e.flags|=4194308)}function $r(e,t,n){if(e=n.ref,e!==null&&typeof e!="function"&&typeof e!="object"){if(n._owner){if(n=n._owner,n){if(n.tag!==1)throw Error(R(309));var r=n.stateNode}if(!r)throw Error(R(147,e));var i=r,o=""+e;return t!==null&&t.ref!==null&&typeof t.ref=="function"&&t.ref._stringRef===o?t.ref:(t=function(s){var l=i.refs;l===np&&(l=i.refs={}),s===null?delete l[o]:l[o]=s},t._stringRef=o,t)}if(typeof e!="string")throw Error(R(284));if(!n._owner)throw Error(R(290,e))}return e}function to(e,t){throw e=Object.prototype.toString.call(t),Error(R(31,e==="[object Object]"?"object with keys {"+Object.keys(t).join(", ")+"}":e))}function Pc(e){var t=e._init;return t(e._payload)}function ip(e){function t(p,d){if(e){var y=p.deletions;y===null?(p.deletions=[d],p.flags|=16):y.push(d)}}function n(p,d){if(!e)return null;for(;d!==null;)t(p,d),d=d.sibling;return null}function r(p,d){for(p=new Map;d!==null;)d.key!==null?p.set(d.key,d):p.set(d.index,d),d=d.sibling;return p}function i(p,d){return p=bn(p,d),p.index=0,p.sibling=null,p}function o(p,d,y){return p.index=y,e?(y=p.alternate,y!==null?(y=y.index,y<d?(p.flags|=2,d):y):(p.flags|=2,d)):(p.flags|=1048576,d)}function s(p){return e&&p.alternate===null&&(p.flags|=2),p}function l(p,d,y,k){return d===null||d.tag!==6?(d=ul(y,p.mode,k),d.return=p,d):(d=i(d,y),d.return=p,d)}function u(p,d,y,k){var _=y.type;return _===nr?h(p,d,y.props.children,k,y.key):d!==null&&(d.elementType===_||typeof _=="object"&&_!==null&&_.$$typeof===fn&&Pc(_)===d.type)?(k=i(d,y.props),k.ref=$r(p,d,y),k.return=p,k):(k=bo(y.type,y.key,y.props,null,p.mode,k),k.ref=$r(p,d,y),k.return=p,k)}function c(p,d,y,k){return d===null||d.tag!==4||d.stateNode.containerInfo!==y.containerInfo||d.stateNode.implementation!==y.implementation?(d=cl(y,p.mode,k),d.return=p,d):(d=i(d,y.children||[]),d.return=p,d)}function h(p,d,y,k,_){return d===null||d.tag!==7?(d=Un(y,p.mode,k,_),d.return=p,d):(d=i(d,y),d.return=p,d)}function f(p,d,y){if(typeof d=="string"&&d!==""||typeof d=="number")return d=ul(""+d,p.mode,y),d.return=p,d;if(typeof d=="object"&&d!==null){switch(d.$$typeof){case Wi:return y=bo(d.type,d.key,d.props,null,p.mode,y),y.ref=$r(p,null,d),y.return=p,y;case tr:return d=cl(d,p.mode,y),d.return=p,d;case fn:var k=d._init;return f(p,k(d._payload),y)}if(Jr(d)||Lr(d))return d=Un(d,p.mode,y,null),d.return=p,d;to(p,d)}return null}function m(p,d,y,k){var _=d!==null?d.key:null;if(typeof y=="string"&&y!==""||typeof y=="number")return _!==null?null:l(p,d,""+y,k);if(typeof y=="object"&&y!==null){switch(y.$$typeof){case Wi:return y.key===_?u(p,d,y,k):null;case tr:return y.key===_?c(p,d,y,k):null;case fn:return _=y._init,m(p,d,_(y._payload),k)}if(Jr(y)||Lr(y))return _!==null?null:h(p,d,y,k,null);to(p,y)}return null}function w(p,d,y,k,_){if(typeof k=="string"&&k!==""||typeof k=="number")return p=p.get(y)||null,l(d,p,""+k,_);if(typeof k=="object"&&k!==null){switch(k.$$typeof){case Wi:return p=p.get(k.key===null?y:k.key)||null,u(d,p,k,_);case tr:return p=p.get(k.key===null?y:k.key)||null,c(d,p,k,_);case fn:var P=k._init;return w(p,d,y,P(k._payload),_)}if(Jr(k)||Lr(k))return p=p.get(y)||null,h(d,p,k,_,null);to(d,k)}return null}function g(p,d,y,k){for(var _=null,P=null,C=d,N=d=0,O=null;C!==null&&N<y.length;N++){C.index>N?(O=C,C=null):O=C.sibling;var L=m(p,C,y[N],k);if(L===null){C===null&&(C=O);break}e&&C&&L.alternate===null&&t(p,C),d=o(L,d,N),P===null?_=L:P.sibling=L,P=L,C=O}if(N===y.length)return n(p,C),ve&&Nn(p,N),_;if(C===null){for(;N<y.length;N++)C=f(p,y[N],k),C!==null&&(d=o(C,d,N),P===null?_=C:P.sibling=C,P=C);return ve&&Nn(p,N),_}for(C=r(p,C);N<y.length;N++)O=w(C,p,N,y[N],k),O!==null&&(e&&O.alternate!==null&&C.delete(O.key===null?N:O.key),d=o(O,d,N),P===null?_=O:P.sibling=O,P=O);return e&&C.forEach(function(W){return t(p,W)}),ve&&Nn(p,N),_}function v(p,d,y,k){var _=Lr(y);if(typeof _!="function")throw Error(R(150));if(y=_.call(y),y==null)throw Error(R(151));for(var P=_=null,C=d,N=d=0,O=null,L=y.next();C!==null&&!L.done;N++,L=y.next()){C.index>N?(O=C,C=null):O=C.sibling;var W=m(p,C,L.value,k);if(W===null){C===null&&(C=O);break}e&&C&&W.alternate===null&&t(p,C),d=o(W,d,N),P===null?_=W:P.sibling=W,P=W,C=O}if(L.done)return n(p,C),ve&&Nn(p,N),_;if(C===null){for(;!L.done;N++,L=y.next())L=f(p,L.value,k),L!==null&&(d=o(L,d,N),P===null?_=L:P.sibling=L,P=L);return ve&&Nn(p,N),_}for(C=r(p,C);!L.done;N++,L=y.next())L=w(C,p,N,L.value,k),L!==null&&(e&&L.alternate!==null&&C.delete(L.key===null?N:L.key),d=o(L,d,N),P===null?_=L:P.sibling=L,P=L);return e&&C.forEach(function($){return t(p,$)}),ve&&Nn(p,N),_}function b(p,d,y,k){if(typeof y=="object"&&y!==null&&y.type===nr&&y.key===null&&(y=y.props.children),typeof y=="object"&&y!==null){switch(y.$$typeof){case Wi:e:{for(var _=y.key,P=d;P!==null;){if(P.key===_){if(_=y.type,_===nr){if(P.tag===7){n(p,P.sibling),d=i(P,y.props.children),d.return=p,p=d;break e}}else if(P.elementType===_||typeof _=="object"&&_!==null&&_.$$typeof===fn&&Pc(_)===P.type){n(p,P.sibling),d=i(P,y.props),d.ref=$r(p,P,y),d.return=p,p=d;break e}n(p,P);break}else t(p,P);P=P.sibling}y.type===nr?(d=Un(y.props.children,p.mode,k,y.key),d.return=p,p=d):(k=bo(y.type,y.key,y.props,null,p.mode,k),k.ref=$r(p,d,y),k.return=p,p=k)}return s(p);case tr:e:{for(P=y.key;d!==null;){if(d.key===P)if(d.tag===4&&d.stateNode.containerInfo===y.containerInfo&&d.stateNode.implementation===y.implementation){n(p,d.sibling),d=i(d,y.children||[]),d.return=p,p=d;break e}else{n(p,d);break}else t(p,d);d=d.sibling}d=cl(y,p.mode,k),d.return=p,p=d}return s(p);case fn:return P=y._init,b(p,d,P(y._payload),k)}if(Jr(y))return g(p,d,y,k);if(Lr(y))return v(p,d,y,k);to(p,y)}return typeof y=="string"&&y!==""||typeof y=="number"?(y=""+y,d!==null&&d.tag===6?(n(p,d.sibling),d=i(d,y),d.return=p,p=d):(n(p,d),d=ul(y,p.mode,k),d.return=p,p=d),s(p)):n(p,d)}return b}var Er=ip(!0),op=ip(!1),zi={},Bt=Rn(zi),ki=Rn(zi),Si=Rn(zi);function Fn(e){if(e===zi)throw Error(R(174));return e}function ou(e,t){switch(pe(Si,t),pe(ki,e),pe(Bt,zi),e=t.nodeType,e){case 9:case 11:t=(t=t.documentElement)?t.namespaceURI:Il(null,"");break;default:e=e===8?t.parentNode:t,t=e.namespaceURI||null,e=e.tagName,t=Il(t,e)}ye(Bt),pe(Bt,t)}function _r(){ye(Bt),ye(ki),ye(Si)}function sp(e){Fn(Si.current);var t=Fn(Bt.current),n=Il(t,e.type);t!==n&&(pe(ki,e),pe(Bt,n))}function su(e){ki.current===e&&(ye(Bt),ye(ki))}var xe=Rn(0);function Jo(e){for(var t=e;t!==null;){if(t.tag===13){var n=t.memoizedState;if(n!==null&&(n=n.dehydrated,n===null||n.data==="$?"||n.data==="$!"))return t}else if(t.tag===19&&t.memoizedProps.revealOrder!==void 0){if(t.flags&128)return t}else if(t.child!==null){t.child.return=t,t=t.child;continue}if(t===e)break;for(;t.sibling===null;){if(t.return===null||t.return===e)return null;t=t.return}t.sibling.return=t.return,t=t.sibling}return null}var rl=[];function lu(){for(var e=0;e<rl.length;e++)rl[e]._workInProgressVersionPrimary=null;rl.length=0}var So=rn.ReactCurrentDispatcher,il=rn.ReactCurrentBatchConfig,Wn=0,ke=null,Re=null,Le=null,Zo=!1,si=!1,ji=0,ig=0;function We(){throw Error(R(321))}function au(e,t){if(t===null)return!1;for(var n=0;n<t.length&&n<e.length;n++)if(!Mt(e[n],t[n]))return!1;return!0}function uu(e,t,n,r,i,o){if(Wn=o,ke=t,t.memoizedState=null,t.updateQueue=null,t.lanes=0,So.current=e===null||e.memoizedState===null?ag:ug,e=n(r,i),si){o=0;do{if(si=!1,ji=0,25<=o)throw Error(R(301));o+=1,Le=Re=null,t.updateQueue=null,So.current=cg,e=n(r,i)}while(si)}if(So.current=es,t=Re!==null&&Re.next!==null,Wn=0,Le=Re=ke=null,Zo=!1,t)throw Error(R(300));return e}function cu(){var e=ji!==0;return ji=0,e}function Lt(){var e={memoizedState:null,baseState:null,baseQueue:null,queue:null,next:null};return Le===null?ke.memoizedState=Le=e:Le=Le.next=e,Le}function kt(){if(Re===null){var e=ke.alternate;e=e!==null?e.memoizedState:null}else e=Re.next;var t=Le===null?ke.memoizedState:Le.next;if(t!==null)Le=t,Re=e;else{if(e===null)throw Error(R(310));Re=e,e={memoizedState:Re.memoizedState,baseState:Re.baseState,baseQueue:Re.baseQueue,queue:Re.queue,next:null},Le===null?ke.memoizedState=Le=e:Le=Le.next=e}return Le}function Ei(e,t){return typeof t=="function"?t(e):t}function ol(e){var t=kt(),n=t.queue;if(n===null)throw Error(R(311));n.lastRenderedReducer=e;var r=Re,i=r.baseQueue,o=n.pending;if(o!==null){if(i!==null){var s=i.next;i.next=o.next,o.next=s}r.baseQueue=i=o,n.pending=null}if(i!==null){o=i.next,r=r.baseState;var l=s=null,u=null,c=o;do{var h=c.lane;if((Wn&h)===h)u!==null&&(u=u.next={lane:0,action:c.action,hasEagerState:c.hasEagerState,eagerState:c.eagerState,next:null}),r=c.hasEagerState?c.eagerState:e(r,c.action);else{var f={lane:h,action:c.action,hasEagerState:c.hasEagerState,eagerState:c.eagerState,next:null};u===null?(l=u=f,s=r):u=u.next=f,ke.lanes|=h,Hn|=h}c=c.next}while(c!==null&&c!==o);u===null?s=r:u.next=l,Mt(r,t.memoizedState)||(tt=!0),t.memoizedState=r,t.baseState=s,t.baseQueue=u,n.lastRenderedState=r}if(e=n.interleaved,e!==null){i=e;do o=i.lane,ke.lanes|=o,Hn|=o,i=i.next;while(i!==e)}else i===null&&(n.lanes=0);return[t.memoizedState,n.dispatch]}function sl(e){var t=kt(),n=t.queue;if(n===null)throw Error(R(311));n.lastRenderedReducer=e;var r=n.dispatch,i=n.pending,o=t.memoizedState;if(i!==null){n.pending=null;var s=i=i.next;do o=e(o,s.action),s=s.next;while(s!==i);Mt(o,t.memoizedState)||(tt=!0),t.memoizedState=o,t.baseQueue===null&&(t.baseState=o),n.lastRenderedState=o}return[o,r]}function lp(){}function ap(e,t){var n=ke,r=kt(),i=t(),o=!Mt(r.memoizedState,i);if(o&&(r.memoizedState=i,tt=!0),r=r.queue,du(dp.bind(null,n,r,e),[e]),r.getSnapshot!==t||o||Le!==null&&Le.memoizedState.tag&1){if(n.flags|=2048,_i(9,cp.bind(null,n,r,i,t),void 0,null),ze===null)throw Error(R(349));Wn&30||up(n,t,i)}return i}function up(e,t,n){e.flags|=16384,e={getSnapshot:t,value:n},t=ke.updateQueue,t===null?(t={lastEffect:null,stores:null},ke.updateQueue=t,t.stores=[e]):(n=t.stores,n===null?t.stores=[e]:n.push(e))}function cp(e,t,n,r){t.value=n,t.getSnapshot=r,fp(t)&&pp(e)}function dp(e,t,n){return n(function(){fp(t)&&pp(e)})}function fp(e){var t=e.getSnapshot;e=e.value;try{var n=t();return!Mt(e,n)}catch{return!0}}function pp(e){var t=tn(e,1);t!==null&&Rt(t,e,1,-1)}function Oc(e){var t=Lt();return typeof e=="function"&&(e=e()),t.memoizedState=t.baseState=e,e={pending:null,interleaved:null,lanes:0,dispatch:null,lastRenderedReducer:Ei,lastRenderedState:e},t.queue=e,e=e.dispatch=lg.bind(null,ke,e),[t.memoizedState,e]}function _i(e,t,n,r){return e={tag:e,create:t,destroy:n,deps:r,next:null},t=ke.updateQueue,t===null?(t={lastEffect:null,stores:null},ke.updateQueue=t,t.lastEffect=e.next=e):(n=t.lastEffect,n===null?t.lastEffect=e.next=e:(r=n.next,n.next=e,e.next=r,t.lastEffect=e)),e}function hp(){return kt().memoizedState}function jo(e,t,n,r){var i=Lt();ke.flags|=e,i.memoizedState=_i(1|t,n,void 0,r===void 0?null:r)}function ks(e,t,n,r){var i=kt();r=r===void 0?null:r;var o=void 0;if(Re!==null){var s=Re.memoizedState;if(o=s.destroy,r!==null&&au(r,s.deps)){i.memoizedState=_i(t,n,o,r);return}}ke.flags|=e,i.memoizedState=_i(1|t,n,o,r)}function Rc(e,t){return jo(8390656,8,e,t)}function du(e,t){return ks(2048,8,e,t)}function mp(e,t){return ks(4,2,e,t)}function yp(e,t){return ks(4,4,e,t)}function gp(e,t){if(typeof t=="function")return e=e(),t(e),function(){t(null)};if(t!=null)return e=e(),t.current=e,function(){t.current=null}}function vp(e,t,n){return n=n!=null?n.concat([e]):null,ks(4,4,gp.bind(null,t,e),n)}function fu(){}function xp(e,t){var n=kt();t=t===void 0?null:t;var r=n.memoizedState;return r!==null&&t!==null&&au(t,r[1])?r[0]:(n.memoizedState=[e,t],e)}function wp(e,t){var n=kt();t=t===void 0?null:t;var r=n.memoizedState;return r!==null&&t!==null&&au(t,r[1])?r[0]:(e=e(),n.memoizedState=[e,t],e)}function kp(e,t,n){return Wn&21?(Mt(n,t)||(n=Ef(),ke.lanes|=n,Hn|=n,e.baseState=!0),t):(e.baseState&&(e.baseState=!1,tt=!0),e.memoizedState=n)}function og(e,t){var n=ce;ce=n!==0&&4>n?n:4,e(!0);var r=il.transition;il.transition={};try{e(!1),t()}finally{ce=n,il.transition=r}}function Sp(){return kt().memoizedState}function sg(e,t,n){var r=Cn(e);if(n={lane:r,action:n,hasEagerState:!1,eagerState:null,next:null},jp(e))Ep(t,n);else if(n=ep(e,t,n,r),n!==null){var i=qe();Rt(n,e,r,i),_p(n,t,r)}}function lg(e,t,n){var r=Cn(e),i={lane:r,action:n,hasEagerState:!1,eagerState:null,next:null};if(jp(e))Ep(t,i);else{var o=e.alternate;if(e.lanes===0&&(o===null||o.lanes===0)&&(o=t.lastRenderedReducer,o!==null))try{var s=t.lastRenderedState,l=o(s,n);if(i.hasEagerState=!0,i.eagerState=l,Mt(l,s)){var u=t.interleaved;u===null?(i.next=i,ru(t)):(i.next=u.next,u.next=i),t.interleaved=i;return}}catch{}finally{}n=ep(e,t,i,r),n!==null&&(i=qe(),Rt(n,e,r,i),_p(n,t,r))}}function jp(e){var t=e.alternate;return e===ke||t!==null&&t===ke}function Ep(e,t){si=Zo=!0;var n=e.pending;n===null?t.next=t:(t.next=n.next,n.next=t),e.pending=t}function _p(e,t,n){if(n&4194240){var r=t.lanes;r&=e.pendingLanes,n|=r,t.lanes=n,Va(e,n)}}var es={readContext:wt,useCallback:We,useContext:We,useEffect:We,useImperativeHandle:We,useInsertionEffect:We,useLayoutEffect:We,useMemo:We,useReducer:We,useRef:We,useState:We,useDebugValue:We,useDeferredValue:We,useTransition:We,useMutableSource:We,useSyncExternalStore:We,useId:We,unstable_isNewReconciler:!1},ag={readContext:wt,useCallback:function(e,t){return Lt().memoizedState=[e,t===void 0?null:t],e},useContext:wt,useEffect:Rc,useImperativeHandle:function(e,t,n){return n=n!=null?n.concat([e]):null,jo(4194308,4,gp.bind(null,t,e),n)},useLayoutEffect:function(e,t){return jo(4194308,4,e,t)},useInsertionEffect:function(e,t){return jo(4,2,e,t)},useMemo:function(e,t){var n=Lt();return t=t===void 0?null:t,e=e(),n.memoizedState=[e,t],e},useReducer:function(e,t,n){var r=Lt();return t=n!==void 0?n(t):t,r.memoizedState=r.baseState=t,e={pending:null,interleaved:null,lanes:0,dispatch:null,lastRenderedReducer:e,lastRenderedState:t},r.queue=e,e=e.dispatch=sg.bind(null,ke,e),[r.memoizedState,e]},useRef:function(e){var t=Lt();return e={current:e},t.memoizedState=e},useState:Oc,useDebugValue:fu,useDeferredValue:function(e){return Lt().memoizedState=e},useTransition:function(){var e=Oc(!1),t=e[0];return e=og.bind(null,e[1]),Lt().memoizedState=e,[t,e]},useMutableSource:function(){},useSyncExternalStore:function(e,t,n){var r=ke,i=Lt();if(ve){if(n===void 0)throw Error(R(407));n=n()}else{if(n=t(),ze===null)throw Error(R(349));Wn&30||up(r,t,n)}i.memoizedState=n;var o={value:n,getSnapshot:t};return i.queue=o,Rc(dp.bind(null,r,o,e),[e]),r.flags|=2048,_i(9,cp.bind(null,r,o,n,t),void 0,null),n},useId:function(){var e=Lt(),t=ze.identifierPrefix;if(ve){var n=Gt,r=Xt;n=(r&~(1<<32-Ot(r)-1)).toString(32)+n,t=":"+t+"R"+n,n=ji++,0<n&&(t+="H"+n.toString(32)),t+=":"}else n=ig++,t=":"+t+"r"+n.toString(32)+":";return e.memoizedState=t},unstable_isNewReconciler:!1},ug={readContext:wt,useCallback:xp,useContext:wt,useEffect:du,useImperativeHandle:vp,useInsertionEffect:mp,useLayoutEffect:yp,useMemo:wp,useReducer:ol,useRef:hp,useState:function(){return ol(Ei)},useDebugValue:fu,useDeferredValue:function(e){var t=kt();return kp(t,Re.memoizedState,e)},useTransition:function(){var e=ol(Ei)[0],t=kt().memoizedState;return[e,t]},useMutableSource:lp,useSyncExternalStore:ap,useId:Sp,unstable_isNewReconciler:!1},cg={readContext:wt,useCallback:xp,useContext:wt,useEffect:du,useImperativeHandle:vp,useInsertionEffect:mp,useLayoutEffect:yp,useMemo:wp,useReducer:sl,useRef:hp,useState:function(){return sl(Ei)},useDebugValue:fu,useDeferredValue:function(e){var t=kt();return Re===null?t.memoizedState=e:kp(t,Re.memoizedState,e)},useTransition:function(){var e=sl(Ei)[0],t=kt().memoizedState;return[e,t]},useMutableSource:lp,useSyncExternalStore:ap,useId:Sp,unstable_isNewReconciler:!1};function Cr(e,t){try{var n="",r=t;do n+=Fm(r),r=r.return;while(r);var i=n}catch(o){i=`
Error generating stack: `+o.message+`
`+o.stack}return{value:e,source:t,stack:i,digest:null}}function ll(e,t,n){return{value:e,source:null,stack:n??null,digest:t??null}}function aa(e,t){try{console.error(t.value)}catch(n){setTimeout(function(){throw n})}}var dg=typeof WeakMap=="function"?WeakMap:Map;function Cp(e,t,n){n=qt(-1,n),n.tag=3,n.payload={element:null};var r=t.value;return n.callback=function(){ns||(ns=!0,va=r),aa(e,t)},n}function bp(e,t,n){n=qt(-1,n),n.tag=3;var r=e.type.getDerivedStateFromError;if(typeof r=="function"){var i=t.value;n.payload=function(){return r(i)},n.callback=function(){aa(e,t)}}var o=e.stateNode;return o!==null&&typeof o.componentDidCatch=="function"&&(n.callback=function(){aa(e,t),typeof r!="function"&&(_n===null?_n=new Set([this]):_n.add(this));var s=t.stack;this.componentDidCatch(t.value,{componentStack:s!==null?s:""})}),n}function Mc(e,t,n){var r=e.pingCache;if(r===null){r=e.pingCache=new dg;var i=new Set;r.set(t,i)}else i=r.get(t),i===void 0&&(i=new Set,r.set(t,i));i.has(n)||(i.add(n),e=_g.bind(null,e,t,n),t.then(e,e))}function Ac(e){do{var t;if((t=e.tag===13)&&(t=e.memoizedState,t=t!==null?t.dehydrated!==null:!0),t)return e;e=e.return}while(e!==null);return null}function Nc(e,t,n,r,i){return e.mode&1?(e.flags|=65536,e.lanes=i,e):(e===t?e.flags|=65536:(e.flags|=128,n.flags|=131072,n.flags&=-52805,n.tag===1&&(n.alternate===null?n.tag=17:(t=qt(-1,1),t.tag=2,En(n,t,1))),n.lanes|=1),e)}var fg=rn.ReactCurrentOwner,tt=!1;function Xe(e,t,n,r){t.child=e===null?op(t,null,n,r):Er(t,e.child,n,r)}function Lc(e,t,n,r,i){n=n.render;var o=t.ref;return vr(t,i),r=uu(e,t,n,r,o,i),n=cu(),e!==null&&!tt?(t.updateQueue=e.updateQueue,t.flags&=-2053,e.lanes&=~i,nn(e,t,i)):(ve&&n&&qa(t),t.flags|=1,Xe(e,t,r,i),t.child)}function zc(e,t,n,r,i){if(e===null){var o=n.type;return typeof o=="function"&&!wu(o)&&o.defaultProps===void 0&&n.compare===null&&n.defaultProps===void 0?(t.tag=15,t.type=o,Tp(e,t,o,r,i)):(e=bo(n.type,null,r,t,t.mode,i),e.ref=t.ref,e.return=t,t.child=e)}if(o=e.child,!(e.lanes&i)){var s=o.memoizedProps;if(n=n.compare,n=n!==null?n:gi,n(s,r)&&e.ref===t.ref)return nn(e,t,i)}return t.flags|=1,e=bn(o,r),e.ref=t.ref,e.return=t,t.child=e}function Tp(e,t,n,r,i){if(e!==null){var o=e.memoizedProps;if(gi(o,r)&&e.ref===t.ref)if(tt=!1,t.pendingProps=r=o,(e.lanes&i)!==0)e.flags&131072&&(tt=!0);else return t.lanes=e.lanes,nn(e,t,i)}return ua(e,t,n,r,i)}function Pp(e,t,n){var r=t.pendingProps,i=r.children,o=e!==null?e.memoizedState:null;if(r.mode==="hidden")if(!(t.mode&1))t.memoizedState={baseLanes:0,cachePool:null,transitions:null},pe(fr,st),st|=n;else{if(!(n&1073741824))return e=o!==null?o.baseLanes|n:n,t.lanes=t.childLanes=1073741824,t.memoizedState={baseLanes:e,cachePool:null,transitions:null},t.updateQueue=null,pe(fr,st),st|=e,null;t.memoizedState={baseLanes:0,cachePool:null,transitions:null},r=o!==null?o.baseLanes:n,pe(fr,st),st|=r}else o!==null?(r=o.baseLanes|n,t.memoizedState=null):r=n,pe(fr,st),st|=r;return Xe(e,t,i,n),t.child}function Op(e,t){var n=t.ref;(e===null&&n!==null||e!==null&&e.ref!==n)&&(t.flags|=512,t.flags|=2097152)}function ua(e,t,n,r,i){var o=rt(n)?Bn:Ke.current;return o=Sr(t,o),vr(t,i),n=uu(e,t,n,r,o,i),r=cu(),e!==null&&!tt?(t.updateQueue=e.updateQueue,t.flags&=-2053,e.lanes&=~i,nn(e,t,i)):(ve&&r&&qa(t),t.flags|=1,Xe(e,t,n,i),t.child)}function Dc(e,t,n,r,i){if(rt(n)){var o=!0;Qo(t)}else o=!1;if(vr(t,i),t.stateNode===null)Eo(e,t),rp(t,n,r),la(t,n,r,i),r=!0;else if(e===null){var s=t.stateNode,l=t.memoizedProps;s.props=l;var u=s.context,c=n.contextType;typeof c=="object"&&c!==null?c=wt(c):(c=rt(n)?Bn:Ke.current,c=Sr(t,c));var h=n.getDerivedStateFromProps,f=typeof h=="function"||typeof s.getSnapshotBeforeUpdate=="function";f||typeof s.UNSAFE_componentWillReceiveProps!="function"&&typeof s.componentWillReceiveProps!="function"||(l!==r||u!==c)&&Tc(t,s,r,c),pn=!1;var m=t.memoizedState;s.state=m,qo(t,r,s,i),u=t.memoizedState,l!==r||m!==u||nt.current||pn?(typeof h=="function"&&(sa(t,n,h,r),u=t.memoizedState),(l=pn||bc(t,n,l,r,m,u,c))?(f||typeof s.UNSAFE_componentWillMount!="function"&&typeof s.componentWillMount!="function"||(typeof s.componentWillMount=="function"&&s.componentWillMount(),typeof s.UNSAFE_componentWillMount=="function"&&s.UNSAFE_componentWillMount()),typeof s.componentDidMount=="function"&&(t.flags|=4194308)):(typeof s.componentDidMount=="function"&&(t.flags|=4194308),t.memoizedProps=r,t.memoizedState=u),s.props=r,s.state=u,s.context=c,r=l):(typeof s.componentDidMount=="function"&&(t.flags|=4194308),r=!1)}else{s=t.stateNode,tp(e,t),l=t.memoizedProps,c=t.type===t.elementType?l:_t(t.type,l),s.props=c,f=t.pendingProps,m=s.context,u=n.contextType,typeof u=="object"&&u!==null?u=wt(u):(u=rt(n)?Bn:Ke.current,u=Sr(t,u));var w=n.getDerivedStateFromProps;(h=typeof w=="function"||typeof s.getSnapshotBeforeUpdate=="function")||typeof s.UNSAFE_componentWillReceiveProps!="function"&&typeof s.componentWillReceiveProps!="function"||(l!==f||m!==u)&&Tc(t,s,r,u),pn=!1,m=t.memoizedState,s.state=m,qo(t,r,s,i);var g=t.memoizedState;l!==f||m!==g||nt.current||pn?(typeof w=="function"&&(sa(t,n,w,r),g=t.memoizedState),(c=pn||bc(t,n,c,r,m,g,u)||!1)?(h||typeof s.UNSAFE_componentWillUpdate!="function"&&typeof s.componentWillUpdate!="function"||(typeof s.componentWillUpdate=="function"&&s.componentWillUpdate(r,g,u),typeof s.UNSAFE_componentWillUpdate=="function"&&s.UNSAFE_componentWillUpdate(r,g,u)),typeof s.componentDidUpdate=="function"&&(t.flags|=4),typeof s.getSnapshotBeforeUpdate=="function"&&(t.flags|=1024)):(typeof s.componentDidUpdate!="function"||l===e.memoizedProps&&m===e.memoizedState||(t.flags|=4),typeof s.getSnapshotBeforeUpdate!="function"||l===e.memoizedProps&&m===e.memoizedState||(t.flags|=1024),t.memoizedProps=r,t.memoizedState=g),s.props=r,s.state=g,s.context=u,r=c):(typeof s.componentDidUpdate!="function"||l===e.memoizedProps&&m===e.memoizedState||(t.flags|=4),typeof s.getSnapshotBeforeUpdate!="function"||l===e.memoizedProps&&m===e.memoizedState||(t.flags|=1024),r=!1)}return ca(e,t,n,r,o,i)}function ca(e,t,n,r,i,o){Op(e,t);var s=(t.flags&128)!==0;if(!r&&!s)return i&&Sc(t,n,!1),nn(e,t,o);r=t.stateNode,fg.current=t;var l=s&&typeof n.getDerivedStateFromError!="function"?null:r.render();return t.flags|=1,e!==null&&s?(t.child=Er(t,e.child,null,o),t.child=Er(t,null,l,o)):Xe(e,t,l,o),t.memoizedState=r.state,i&&Sc(t,n,!0),t.child}function Rp(e){var t=e.stateNode;t.pendingContext?kc(e,t.pendingContext,t.pendingContext!==t.context):t.context&&kc(e,t.context,!1),ou(e,t.containerInfo)}function Fc(e,t,n,r,i){return jr(),Za(i),t.flags|=256,Xe(e,t,n,r),t.child}var da={dehydrated:null,treeContext:null,retryLane:0};function fa(e){return{baseLanes:e,cachePool:null,transitions:null}}function Mp(e,t,n){var r=t.pendingProps,i=xe.current,o=!1,s=(t.flags&128)!==0,l;if((l=s)||(l=e!==null&&e.memoizedState===null?!1:(i&2)!==0),l?(o=!0,t.flags&=-129):(e===null||e.memoizedState!==null)&&(i|=1),pe(xe,i&1),e===null)return ia(t),e=t.memoizedState,e!==null&&(e=e.dehydrated,e!==null)?(t.mode&1?e.data==="$!"?t.lanes=8:t.lanes=1073741824:t.lanes=1,null):(s=r.children,e=r.fallback,o?(r=t.mode,o=t.child,s={mode:"hidden",children:s},!(r&1)&&o!==null?(o.childLanes=0,o.pendingProps=s):o=Es(s,r,0,null),e=Un(e,r,n,null),o.return=t,e.return=t,o.sibling=e,t.child=o,t.child.memoizedState=fa(n),t.memoizedState=da,e):pu(t,s));if(i=e.memoizedState,i!==null&&(l=i.dehydrated,l!==null))return pg(e,t,s,r,l,i,n);if(o){o=r.fallback,s=t.mode,i=e.child,l=i.sibling;var u={mode:"hidden",children:r.children};return!(s&1)&&t.child!==i?(r=t.child,r.childLanes=0,r.pendingProps=u,t.deletions=null):(r=bn(i,u),r.subtreeFlags=i.subtreeFlags&14680064),l!==null?o=bn(l,o):(o=Un(o,s,n,null),o.flags|=2),o.return=t,r.return=t,r.sibling=o,t.child=r,r=o,o=t.child,s=e.child.memoizedState,s=s===null?fa(n):{baseLanes:s.baseLanes|n,cachePool:null,transitions:s.transitions},o.memoizedState=s,o.childLanes=e.childLanes&~n,t.memoizedState=da,r}return o=e.child,e=o.sibling,r=bn(o,{mode:"visible",children:r.children}),!(t.mode&1)&&(r.lanes=n),r.return=t,r.sibling=null,e!==null&&(n=t.deletions,n===null?(t.deletions=[e],t.flags|=16):n.push(e)),t.child=r,t.memoizedState=null,r}function pu(e,t){return t=Es({mode:"visible",children:t},e.mode,0,null),t.return=e,e.child=t}function no(e,t,n,r){return r!==null&&Za(r),Er(t,e.child,null,n),e=pu(t,t.pendingProps.children),e.flags|=2,t.memoizedState=null,e}function pg(e,t,n,r,i,o,s){if(n)return t.flags&256?(t.flags&=-257,r=ll(Error(R(422))),no(e,t,s,r)):t.memoizedState!==null?(t.child=e.child,t.flags|=128,null):(o=r.fallback,i=t.mode,r=Es({mode:"visible",children:r.children},i,0,null),o=Un(o,i,s,null),o.flags|=2,r.return=t,o.return=t,r.sibling=o,t.child=r,t.mode&1&&Er(t,e.child,null,s),t.child.memoizedState=fa(s),t.memoizedState=da,o);if(!(t.mode&1))return no(e,t,s,null);if(i.data==="$!"){if(r=i.nextSibling&&i.nextSibling.dataset,r)var l=r.dgst;return r=l,o=Error(R(419)),r=ll(o,r,void 0),no(e,t,s,r)}if(l=(s&e.childLanes)!==0,tt||l){if(r=ze,r!==null){switch(s&-s){case 4:i=2;break;case 16:i=8;break;case 64:case 128:case 256:case 512:case 1024:case 2048:case 4096:case 8192:case 16384:case 32768:case 65536:case 131072:case 262144:case 524288:case 1048576:case 2097152:case 4194304:case 8388608:case 16777216:case 33554432:case 67108864:i=32;break;case 536870912:i=268435456;break;default:i=0}i=i&(r.suspendedLanes|s)?0:i,i!==0&&i!==o.retryLane&&(o.retryLane=i,tn(e,i),Rt(r,e,i,-1))}return xu(),r=ll(Error(R(421))),no(e,t,s,r)}return i.data==="$?"?(t.flags|=128,t.child=e.child,t=Cg.bind(null,e),i._reactRetry=t,null):(e=o.treeContext,lt=jn(i.nextSibling),at=t,ve=!0,Tt=null,e!==null&&(mt[yt++]=Xt,mt[yt++]=Gt,mt[yt++]=Vn,Xt=e.id,Gt=e.overflow,Vn=t),t=pu(t,r.children),t.flags|=4096,t)}function Ic(e,t,n){e.lanes|=t;var r=e.alternate;r!==null&&(r.lanes|=t),oa(e.return,t,n)}function al(e,t,n,r,i){var o=e.memoizedState;o===null?e.memoizedState={isBackwards:t,rendering:null,renderingStartTime:0,last:r,tail:n,tailMode:i}:(o.isBackwards=t,o.rendering=null,o.renderingStartTime=0,o.last=r,o.tail=n,o.tailMode=i)}function Ap(e,t,n){var r=t.pendingProps,i=r.revealOrder,o=r.tail;if(Xe(e,t,r.children,n),r=xe.current,r&2)r=r&1|2,t.flags|=128;else{if(e!==null&&e.flags&128)e:for(e=t.child;e!==null;){if(e.tag===13)e.memoizedState!==null&&Ic(e,n,t);else if(e.tag===19)Ic(e,n,t);else if(e.child!==null){e.child.return=e,e=e.child;continue}if(e===t)break e;for(;e.sibling===null;){if(e.return===null||e.return===t)break e;e=e.return}e.sibling.return=e.return,e=e.sibling}r&=1}if(pe(xe,r),!(t.mode&1))t.memoizedState=null;else switch(i){case"forwards":for(n=t.child,i=null;n!==null;)e=n.alternate,e!==null&&Jo(e)===null&&(i=n),n=n.sibling;n=i,n===null?(i=t.child,t.child=null):(i=n.sibling,n.sibling=null),al(t,!1,i,n,o);break;case"backwards":for(n=null,i=t.child,t.child=null;i!==null;){if(e=i.alternate,e!==null&&Jo(e)===null){t.child=i;break}e=i.sibling,i.sibling=n,n=i,i=e}al(t,!0,n,null,o);break;case"together":al(t,!1,null,null,void 0);break;default:t.memoizedState=null}return t.child}function Eo(e,t){!(t.mode&1)&&e!==null&&(e.alternate=null,t.alternate=null,t.flags|=2)}function nn(e,t,n){if(e!==null&&(t.dependencies=e.dependencies),Hn|=t.lanes,!(n&t.childLanes))return null;if(e!==null&&t.child!==e.child)throw Error(R(153));if(t.child!==null){for(e=t.child,n=bn(e,e.pendingProps),t.child=n,n.return=t;e.sibling!==null;)e=e.sibling,n=n.sibling=bn(e,e.pendingProps),n.return=t;n.sibling=null}return t.child}function hg(e,t,n){switch(t.tag){case 3:Rp(t),jr();break;case 5:sp(t);break;case 1:rt(t.type)&&Qo(t);break;case 4:ou(t,t.stateNode.containerInfo);break;case 10:var r=t.type._context,i=t.memoizedProps.value;pe(Xo,r._currentValue),r._currentValue=i;break;case 13:if(r=t.memoizedState,r!==null)return r.dehydrated!==null?(pe(xe,xe.current&1),t.flags|=128,null):n&t.child.childLanes?Mp(e,t,n):(pe(xe,xe.current&1),e=nn(e,t,n),e!==null?e.sibling:null);pe(xe,xe.current&1);break;case 19:if(r=(n&t.childLanes)!==0,e.flags&128){if(r)return Ap(e,t,n);t.flags|=128}if(i=t.memoizedState,i!==null&&(i.rendering=null,i.tail=null,i.lastEffect=null),pe(xe,xe.current),r)break;return null;case 22:case 23:return t.lanes=0,Pp(e,t,n)}return nn(e,t,n)}var Np,pa,Lp,zp;Np=function(e,t){for(var n=t.child;n!==null;){if(n.tag===5||n.tag===6)e.appendChild(n.stateNode);else if(n.tag!==4&&n.child!==null){n.child.return=n,n=n.child;continue}if(n===t)break;for(;n.sibling===null;){if(n.return===null||n.return===t)return;n=n.return}n.sibling.return=n.return,n=n.sibling}};pa=function(){};Lp=function(e,t,n,r){var i=e.memoizedProps;if(i!==r){e=t.stateNode,Fn(Bt.current);var o=null;switch(n){case"input":i=Ll(e,i),r=Ll(e,r),o=[];break;case"select":i=Se({},i,{value:void 0}),r=Se({},r,{value:void 0}),o=[];break;case"textarea":i=Fl(e,i),r=Fl(e,r),o=[];break;default:typeof i.onClick!="function"&&typeof r.onClick=="function"&&(e.onclick=Wo)}$l(n,r);var s;n=null;for(c in i)if(!r.hasOwnProperty(c)&&i.hasOwnProperty(c)&&i[c]!=null)if(c==="style"){var l=i[c];for(s in l)l.hasOwnProperty(s)&&(n||(n={}),n[s]="")}else c!=="dangerouslySetInnerHTML"&&c!=="children"&&c!=="suppressContentEditableWarning"&&c!=="suppressHydrationWarning"&&c!=="autoFocus"&&(ci.hasOwnProperty(c)?o||(o=[]):(o=o||[]).push(c,null));for(c in r){var u=r[c];if(l=i!=null?i[c]:void 0,r.hasOwnProperty(c)&&u!==l&&(u!=null||l!=null))if(c==="style")if(l){for(s in l)!l.hasOwnProperty(s)||u&&u.hasOwnProperty(s)||(n||(n={}),n[s]="");for(s in u)u.hasOwnProperty(s)&&l[s]!==u[s]&&(n||(n={}),n[s]=u[s])}else n||(o||(o=[]),o.push(c,n)),n=u;else c==="dangerouslySetInnerHTML"?(u=u?u.__html:void 0,l=l?l.__html:void 0,u!=null&&l!==u&&(o=o||[]).push(c,u)):c==="children"?typeof u!="string"&&typeof u!="number"||(o=o||[]).push(c,""+u):c!=="suppressContentEditableWarning"&&c!=="suppressHydrationWarning"&&(ci.hasOwnProperty(c)?(u!=null&&c==="onScroll"&&me("scroll",e),o||l===u||(o=[])):(o=o||[]).push(c,u))}n&&(o=o||[]).push("style",n);var c=o;(t.updateQueue=c)&&(t.flags|=4)}};zp=function(e,t,n,r){n!==r&&(t.flags|=4)};function Ur(e,t){if(!ve)switch(e.tailMode){case"hidden":t=e.tail;for(var n=null;t!==null;)t.alternate!==null&&(n=t),t=t.sibling;n===null?e.tail=null:n.sibling=null;break;case"collapsed":n=e.tail;for(var r=null;n!==null;)n.alternate!==null&&(r=n),n=n.sibling;r===null?t||e.tail===null?e.tail=null:e.tail.sibling=null:r.sibling=null}}function He(e){var t=e.alternate!==null&&e.alternate.child===e.child,n=0,r=0;if(t)for(var i=e.child;i!==null;)n|=i.lanes|i.childLanes,r|=i.subtreeFlags&14680064,r|=i.flags&14680064,i.return=e,i=i.sibling;else for(i=e.child;i!==null;)n|=i.lanes|i.childLanes,r|=i.subtreeFlags,r|=i.flags,i.return=e,i=i.sibling;return e.subtreeFlags|=r,e.childLanes=n,t}function mg(e,t,n){var r=t.pendingProps;switch(Ja(t),t.tag){case 2:case 16:case 15:case 0:case 11:case 7:case 8:case 12:case 9:case 14:return He(t),null;case 1:return rt(t.type)&&Ho(),He(t),null;case 3:return r=t.stateNode,_r(),ye(nt),ye(Ke),lu(),r.pendingContext&&(r.context=r.pendingContext,r.pendingContext=null),(e===null||e.child===null)&&(eo(t)?t.flags|=4:e===null||e.memoizedState.isDehydrated&&!(t.flags&256)||(t.flags|=1024,Tt!==null&&(ka(Tt),Tt=null))),pa(e,t),He(t),null;case 5:su(t);var i=Fn(Si.current);if(n=t.type,e!==null&&t.stateNode!=null)Lp(e,t,n,r,i),e.ref!==t.ref&&(t.flags|=512,t.flags|=2097152);else{if(!r){if(t.stateNode===null)throw Error(R(166));return He(t),null}if(e=Fn(Bt.current),eo(t)){r=t.stateNode,n=t.type;var o=t.memoizedProps;switch(r[Ft]=t,r[wi]=o,e=(t.mode&1)!==0,n){case"dialog":me("cancel",r),me("close",r);break;case"iframe":case"object":case"embed":me("load",r);break;case"video":case"audio":for(i=0;i<ei.length;i++)me(ei[i],r);break;case"source":me("error",r);break;case"img":case"image":case"link":me("error",r),me("load",r);break;case"details":me("toggle",r);break;case"input":Ku(r,o),me("invalid",r);break;case"select":r._wrapperState={wasMultiple:!!o.multiple},me("invalid",r);break;case"textarea":Gu(r,o),me("invalid",r)}$l(n,o),i=null;for(var s in o)if(o.hasOwnProperty(s)){var l=o[s];s==="children"?typeof l=="string"?r.textContent!==l&&(o.suppressHydrationWarning!==!0&&Zi(r.textContent,l,e),i=["children",l]):typeof l=="number"&&r.textContent!==""+l&&(o.suppressHydrationWarning!==!0&&Zi(r.textContent,l,e),i=["children",""+l]):ci.hasOwnProperty(s)&&l!=null&&s==="onScroll"&&me("scroll",r)}switch(n){case"input":Hi(r),Xu(r,o,!0);break;case"textarea":Hi(r),qu(r);break;case"select":case"option":break;default:typeof o.onClick=="function"&&(r.onclick=Wo)}r=i,t.updateQueue=r,r!==null&&(t.flags|=4)}else{s=i.nodeType===9?i:i.ownerDocument,e==="http://www.w3.org/1999/xhtml"&&(e=uf(n)),e==="http://www.w3.org/1999/xhtml"?n==="script"?(e=s.createElement("div"),e.innerHTML="<script><\/script>",e=e.removeChild(e.firstChild)):typeof r.is=="string"?e=s.createElement(n,{is:r.is}):(e=s.createElement(n),n==="select"&&(s=e,r.multiple?s.multiple=!0:r.size&&(s.size=r.size))):e=s.createElementNS(e,n),e[Ft]=t,e[wi]=r,Np(e,t,!1,!1),t.stateNode=e;e:{switch(s=Ul(n,r),n){case"dialog":me("cancel",e),me("close",e),i=r;break;case"iframe":case"object":case"embed":me("load",e),i=r;break;case"video":case"audio":for(i=0;i<ei.length;i++)me(ei[i],e);i=r;break;case"source":me("error",e),i=r;break;case"img":case"image":case"link":me("error",e),me("load",e),i=r;break;case"details":me("toggle",e),i=r;break;case"input":Ku(e,r),i=Ll(e,r),me("invalid",e);break;case"option":i=r;break;case"select":e._wrapperState={wasMultiple:!!r.multiple},i=Se({},r,{value:void 0}),me("invalid",e);break;case"textarea":Gu(e,r),i=Fl(e,r),me("invalid",e);break;default:i=r}$l(n,i),l=i;for(o in l)if(l.hasOwnProperty(o)){var u=l[o];o==="style"?ff(e,u):o==="dangerouslySetInnerHTML"?(u=u?u.__html:void 0,u!=null&&cf(e,u)):o==="children"?typeof u=="string"?(n!=="textarea"||u!=="")&&di(e,u):typeof u=="number"&&di(e,""+u):o!=="suppressContentEditableWarning"&&o!=="suppressHydrationWarning"&&o!=="autoFocus"&&(ci.hasOwnProperty(o)?u!=null&&o==="onScroll"&&me("scroll",e):u!=null&&Da(e,o,u,s))}switch(n){case"input":Hi(e),Xu(e,r,!1);break;case"textarea":Hi(e),qu(e);break;case"option":r.value!=null&&e.setAttribute("value",""+Tn(r.value));break;case"select":e.multiple=!!r.multiple,o=r.value,o!=null?hr(e,!!r.multiple,o,!1):r.defaultValue!=null&&hr(e,!!r.multiple,r.defaultValue,!0);break;default:typeof i.onClick=="function"&&(e.onclick=Wo)}switch(n){case"button":case"input":case"select":case"textarea":r=!!r.autoFocus;break e;case"img":r=!0;break e;default:r=!1}}r&&(t.flags|=4)}t.ref!==null&&(t.flags|=512,t.flags|=2097152)}return He(t),null;case 6:if(e&&t.stateNode!=null)zp(e,t,e.memoizedProps,r);else{if(typeof r!="string"&&t.stateNode===null)throw Error(R(166));if(n=Fn(Si.current),Fn(Bt.current),eo(t)){if(r=t.stateNode,n=t.memoizedProps,r[Ft]=t,(o=r.nodeValue!==n)&&(e=at,e!==null))switch(e.tag){case 3:Zi(r.nodeValue,n,(e.mode&1)!==0);break;case 5:e.memoizedProps.suppressHydrationWarning!==!0&&Zi(r.nodeValue,n,(e.mode&1)!==0)}o&&(t.flags|=4)}else r=(n.nodeType===9?n:n.ownerDocument).createTextNode(r),r[Ft]=t,t.stateNode=r}return He(t),null;case 13:if(ye(xe),r=t.memoizedState,e===null||e.memoizedState!==null&&e.memoizedState.dehydrated!==null){if(ve&&lt!==null&&t.mode&1&&!(t.flags&128))Zf(),jr(),t.flags|=98560,o=!1;else if(o=eo(t),r!==null&&r.dehydrated!==null){if(e===null){if(!o)throw Error(R(318));if(o=t.memoizedState,o=o!==null?o.dehydrated:null,!o)throw Error(R(317));o[Ft]=t}else jr(),!(t.flags&128)&&(t.memoizedState=null),t.flags|=4;He(t),o=!1}else Tt!==null&&(ka(Tt),Tt=null),o=!0;if(!o)return t.flags&65536?t:null}return t.flags&128?(t.lanes=n,t):(r=r!==null,r!==(e!==null&&e.memoizedState!==null)&&r&&(t.child.flags|=8192,t.mode&1&&(e===null||xe.current&1?Me===0&&(Me=3):xu())),t.updateQueue!==null&&(t.flags|=4),He(t),null);case 4:return _r(),pa(e,t),e===null&&vi(t.stateNode.containerInfo),He(t),null;case 10:return nu(t.type._context),He(t),null;case 17:return rt(t.type)&&Ho(),He(t),null;case 19:if(ye(xe),o=t.memoizedState,o===null)return He(t),null;if(r=(t.flags&128)!==0,s=o.rendering,s===null)if(r)Ur(o,!1);else{if(Me!==0||e!==null&&e.flags&128)for(e=t.child;e!==null;){if(s=Jo(e),s!==null){for(t.flags|=128,Ur(o,!1),r=s.updateQueue,r!==null&&(t.updateQueue=r,t.flags|=4),t.subtreeFlags=0,r=n,n=t.child;n!==null;)o=n,e=r,o.flags&=14680066,s=o.alternate,s===null?(o.childLanes=0,o.lanes=e,o.child=null,o.subtreeFlags=0,o.memoizedProps=null,o.memoizedState=null,o.updateQueue=null,o.dependencies=null,o.stateNode=null):(o.childLanes=s.childLanes,o.lanes=s.lanes,o.child=s.child,o.subtreeFlags=0,o.deletions=null,o.memoizedProps=s.memoizedProps,o.memoizedState=s.memoizedState,o.updateQueue=s.updateQueue,o.type=s.type,e=s.dependencies,o.dependencies=e===null?null:{lanes:e.lanes,firstContext:e.firstContext}),n=n.sibling;return pe(xe,xe.current&1|2),t.child}e=e.sibling}o.tail!==null&&_e()>br&&(t.flags|=128,r=!0,Ur(o,!1),t.lanes=4194304)}else{if(!r)if(e=Jo(s),e!==null){if(t.flags|=128,r=!0,n=e.updateQueue,n!==null&&(t.updateQueue=n,t.flags|=4),Ur(o,!0),o.tail===null&&o.tailMode==="hidden"&&!s.alternate&&!ve)return He(t),null}else 2*_e()-o.renderingStartTime>br&&n!==1073741824&&(t.flags|=128,r=!0,Ur(o,!1),t.lanes=4194304);o.isBackwards?(s.sibling=t.child,t.child=s):(n=o.last,n!==null?n.sibling=s:t.child=s,o.last=s)}return o.tail!==null?(t=o.tail,o.rendering=t,o.tail=t.sibling,o.renderingStartTime=_e(),t.sibling=null,n=xe.current,pe(xe,r?n&1|2:n&1),t):(He(t),null);case 22:case 23:return vu(),r=t.memoizedState!==null,e!==null&&e.memoizedState!==null!==r&&(t.flags|=8192),r&&t.mode&1?st&1073741824&&(He(t),t.subtreeFlags&6&&(t.flags|=8192)):He(t),null;case 24:return null;case 25:return null}throw Error(R(156,t.tag))}function yg(e,t){switch(Ja(t),t.tag){case 1:return rt(t.type)&&Ho(),e=t.flags,e&65536?(t.flags=e&-65537|128,t):null;case 3:return _r(),ye(nt),ye(Ke),lu(),e=t.flags,e&65536&&!(e&128)?(t.flags=e&-65537|128,t):null;case 5:return su(t),null;case 13:if(ye(xe),e=t.memoizedState,e!==null&&e.dehydrated!==null){if(t.alternate===null)throw Error(R(340));jr()}return e=t.flags,e&65536?(t.flags=e&-65537|128,t):null;case 19:return ye(xe),null;case 4:return _r(),null;case 10:return nu(t.type._context),null;case 22:case 23:return vu(),null;case 24:return null;default:return null}}var ro=!1,Ye=!1,gg=typeof WeakSet=="function"?WeakSet:Set,U=null;function dr(e,t){var n=e.ref;if(n!==null)if(typeof n=="function")try{n(null)}catch(r){je(e,t,r)}else n.current=null}function ha(e,t,n){try{n()}catch(r){je(e,t,r)}}var $c=!1;function vg(e,t){if(ql=Uo,e=$f(),Ga(e)){if("selectionStart"in e)var n={start:e.selectionStart,end:e.selectionEnd};else e:{n=(n=e.ownerDocument)&&n.defaultView||window;var r=n.getSelection&&n.getSelection();if(r&&r.rangeCount!==0){n=r.anchorNode;var i=r.anchorOffset,o=r.focusNode;r=r.focusOffset;try{n.nodeType,o.nodeType}catch{n=null;break e}var s=0,l=-1,u=-1,c=0,h=0,f=e,m=null;t:for(;;){for(var w;f!==n||i!==0&&f.nodeType!==3||(l=s+i),f!==o||r!==0&&f.nodeType!==3||(u=s+r),f.nodeType===3&&(s+=f.nodeValue.length),(w=f.firstChild)!==null;)m=f,f=w;for(;;){if(f===e)break t;if(m===n&&++c===i&&(l=s),m===o&&++h===r&&(u=s),(w=f.nextSibling)!==null)break;f=m,m=f.parentNode}f=w}n=l===-1||u===-1?null:{start:l,end:u}}else n=null}n=n||{start:0,end:0}}else n=null;for(Jl={focusedElem:e,selectionRange:n},Uo=!1,U=t;U!==null;)if(t=U,e=t.child,(t.subtreeFlags&1028)!==0&&e!==null)e.return=t,U=e;else for(;U!==null;){t=U;try{var g=t.alternate;if(t.flags&1024)switch(t.tag){case 0:case 11:case 15:break;case 1:if(g!==null){var v=g.memoizedProps,b=g.memoizedState,p=t.stateNode,d=p.getSnapshotBeforeUpdate(t.elementType===t.type?v:_t(t.type,v),b);p.__reactInternalSnapshotBeforeUpdate=d}break;case 3:var y=t.stateNode.containerInfo;y.nodeType===1?y.textContent="":y.nodeType===9&&y.documentElement&&y.removeChild(y.documentElement);break;case 5:case 6:case 4:case 17:break;default:throw Error(R(163))}}catch(k){je(t,t.return,k)}if(e=t.sibling,e!==null){e.return=t.return,U=e;break}U=t.return}return g=$c,$c=!1,g}function li(e,t,n){var r=t.updateQueue;if(r=r!==null?r.lastEffect:null,r!==null){var i=r=r.next;do{if((i.tag&e)===e){var o=i.destroy;i.destroy=void 0,o!==void 0&&ha(t,n,o)}i=i.next}while(i!==r)}}function Ss(e,t){if(t=t.updateQueue,t=t!==null?t.lastEffect:null,t!==null){var n=t=t.next;do{if((n.tag&e)===e){var r=n.create;n.destroy=r()}n=n.next}while(n!==t)}}function ma(e){var t=e.ref;if(t!==null){var n=e.stateNode;switch(e.tag){case 5:e=n;break;default:e=n}typeof t=="function"?t(e):t.current=e}}function Dp(e){var t=e.alternate;t!==null&&(e.alternate=null,Dp(t)),e.child=null,e.deletions=null,e.sibling=null,e.tag===5&&(t=e.stateNode,t!==null&&(delete t[Ft],delete t[wi],delete t[ta],delete t[eg],delete t[tg])),e.stateNode=null,e.return=null,e.dependencies=null,e.memoizedProps=null,e.memoizedState=null,e.pendingProps=null,e.stateNode=null,e.updateQueue=null}function Fp(e){return e.tag===5||e.tag===3||e.tag===4}function Uc(e){e:for(;;){for(;e.sibling===null;){if(e.return===null||Fp(e.return))return null;e=e.return}for(e.sibling.return=e.return,e=e.sibling;e.tag!==5&&e.tag!==6&&e.tag!==18;){if(e.flags&2||e.child===null||e.tag===4)continue e;e.child.return=e,e=e.child}if(!(e.flags&2))return e.stateNode}}function ya(e,t,n){var r=e.tag;if(r===5||r===6)e=e.stateNode,t?n.nodeType===8?n.parentNode.insertBefore(e,t):n.insertBefore(e,t):(n.nodeType===8?(t=n.parentNode,t.insertBefore(e,n)):(t=n,t.appendChild(e)),n=n._reactRootContainer,n!=null||t.onclick!==null||(t.onclick=Wo));else if(r!==4&&(e=e.child,e!==null))for(ya(e,t,n),e=e.sibling;e!==null;)ya(e,t,n),e=e.sibling}function ga(e,t,n){var r=e.tag;if(r===5||r===6)e=e.stateNode,t?n.insertBefore(e,t):n.appendChild(e);else if(r!==4&&(e=e.child,e!==null))for(ga(e,t,n),e=e.sibling;e!==null;)ga(e,t,n),e=e.sibling}var Ie=null,Ct=!1;function sn(e,t,n){for(n=n.child;n!==null;)Ip(e,t,n),n=n.sibling}function Ip(e,t,n){if(Ut&&typeof Ut.onCommitFiberUnmount=="function")try{Ut.onCommitFiberUnmount(hs,n)}catch{}switch(n.tag){case 5:Ye||dr(n,t);case 6:var r=Ie,i=Ct;Ie=null,sn(e,t,n),Ie=r,Ct=i,Ie!==null&&(Ct?(e=Ie,n=n.stateNode,e.nodeType===8?e.parentNode.removeChild(n):e.removeChild(n)):Ie.removeChild(n.stateNode));break;case 18:Ie!==null&&(Ct?(e=Ie,n=n.stateNode,e.nodeType===8?tl(e.parentNode,n):e.nodeType===1&&tl(e,n),mi(e)):tl(Ie,n.stateNode));break;case 4:r=Ie,i=Ct,Ie=n.stateNode.containerInfo,Ct=!0,sn(e,t,n),Ie=r,Ct=i;break;case 0:case 11:case 14:case 15:if(!Ye&&(r=n.updateQueue,r!==null&&(r=r.lastEffect,r!==null))){i=r=r.next;do{var o=i,s=o.destroy;o=o.tag,s!==void 0&&(o&2||o&4)&&ha(n,t,s),i=i.next}while(i!==r)}sn(e,t,n);break;case 1:if(!Ye&&(dr(n,t),r=n.stateNode,typeof r.componentWillUnmount=="function"))try{r.props=n.memoizedProps,r.state=n.memoizedState,r.componentWillUnmount()}catch(l){je(n,t,l)}sn(e,t,n);break;case 21:sn(e,t,n);break;case 22:n.mode&1?(Ye=(r=Ye)||n.memoizedState!==null,sn(e,t,n),Ye=r):sn(e,t,n);break;default:sn(e,t,n)}}function Bc(e){var t=e.updateQueue;if(t!==null){e.updateQueue=null;var n=e.stateNode;n===null&&(n=e.stateNode=new gg),t.forEach(function(r){var i=bg.bind(null,e,r);n.has(r)||(n.add(r),r.then(i,i))})}}function jt(e,t){var n=t.deletions;if(n!==null)for(var r=0;r<n.length;r++){var i=n[r];try{var o=e,s=t,l=s;e:for(;l!==null;){switch(l.tag){case 5:Ie=l.stateNode,Ct=!1;break e;case 3:Ie=l.stateNode.containerInfo,Ct=!0;break e;case 4:Ie=l.stateNode.containerInfo,Ct=!0;break e}l=l.return}if(Ie===null)throw Error(R(160));Ip(o,s,i),Ie=null,Ct=!1;var u=i.alternate;u!==null&&(u.return=null),i.return=null}catch(c){je(i,t,c)}}if(t.subtreeFlags&12854)for(t=t.child;t!==null;)$p(t,e),t=t.sibling}function $p(e,t){var n=e.alternate,r=e.flags;switch(e.tag){case 0:case 11:case 14:case 15:if(jt(t,e),Nt(e),r&4){try{li(3,e,e.return),Ss(3,e)}catch(v){je(e,e.return,v)}try{li(5,e,e.return)}catch(v){je(e,e.return,v)}}break;case 1:jt(t,e),Nt(e),r&512&&n!==null&&dr(n,n.return);break;case 5:if(jt(t,e),Nt(e),r&512&&n!==null&&dr(n,n.return),e.flags&32){var i=e.stateNode;try{di(i,"")}catch(v){je(e,e.return,v)}}if(r&4&&(i=e.stateNode,i!=null)){var o=e.memoizedProps,s=n!==null?n.memoizedProps:o,l=e.type,u=e.updateQueue;if(e.updateQueue=null,u!==null)try{l==="input"&&o.type==="radio"&&o.name!=null&&lf(i,o),Ul(l,s);var c=Ul(l,o);for(s=0;s<u.length;s+=2){var h=u[s],f=u[s+1];h==="style"?ff(i,f):h==="dangerouslySetInnerHTML"?cf(i,f):h==="children"?di(i,f):Da(i,h,f,c)}switch(l){case"input":zl(i,o);break;case"textarea":af(i,o);break;case"select":var m=i._wrapperState.wasMultiple;i._wrapperState.wasMultiple=!!o.multiple;var w=o.value;w!=null?hr(i,!!o.multiple,w,!1):m!==!!o.multiple&&(o.defaultValue!=null?hr(i,!!o.multiple,o.defaultValue,!0):hr(i,!!o.multiple,o.multiple?[]:"",!1))}i[wi]=o}catch(v){je(e,e.return,v)}}break;case 6:if(jt(t,e),Nt(e),r&4){if(e.stateNode===null)throw Error(R(162));i=e.stateNode,o=e.memoizedProps;try{i.nodeValue=o}catch(v){je(e,e.return,v)}}break;case 3:if(jt(t,e),Nt(e),r&4&&n!==null&&n.memoizedState.isDehydrated)try{mi(t.containerInfo)}catch(v){je(e,e.return,v)}break;case 4:jt(t,e),Nt(e);break;case 13:jt(t,e),Nt(e),i=e.child,i.flags&8192&&(o=i.memoizedState!==null,i.stateNode.isHidden=o,!o||i.alternate!==null&&i.alternate.memoizedState!==null||(yu=_e())),r&4&&Bc(e);break;case 22:if(h=n!==null&&n.memoizedState!==null,e.mode&1?(Ye=(c=Ye)||h,jt(t,e),Ye=c):jt(t,e),Nt(e),r&8192){if(c=e.memoizedState!==null,(e.stateNode.isHidden=c)&&!h&&e.mode&1)for(U=e,h=e.child;h!==null;){for(f=U=h;U!==null;){switch(m=U,w=m.child,m.tag){case 0:case 11:case 14:case 15:li(4,m,m.return);break;case 1:dr(m,m.return);var g=m.stateNode;if(typeof g.componentWillUnmount=="function"){r=m,n=m.return;try{t=r,g.props=t.memoizedProps,g.state=t.memoizedState,g.componentWillUnmount()}catch(v){je(r,n,v)}}break;case 5:dr(m,m.return);break;case 22:if(m.memoizedState!==null){Wc(f);continue}}w!==null?(w.return=m,U=w):Wc(f)}h=h.sibling}e:for(h=null,f=e;;){if(f.tag===5){if(h===null){h=f;try{i=f.stateNode,c?(o=i.style,typeof o.setProperty=="function"?o.setProperty("display","none","important"):o.display="none"):(l=f.stateNode,u=f.memoizedProps.style,s=u!=null&&u.hasOwnProperty("display")?u.display:null,l.style.display=df("display",s))}catch(v){je(e,e.return,v)}}}else if(f.tag===6){if(h===null)try{f.stateNode.nodeValue=c?"":f.memoizedProps}catch(v){je(e,e.return,v)}}else if((f.tag!==22&&f.tag!==23||f.memoizedState===null||f===e)&&f.child!==null){f.child.return=f,f=f.child;continue}if(f===e)break e;for(;f.sibling===null;){if(f.return===null||f.return===e)break e;h===f&&(h=null),f=f.return}h===f&&(h=null),f.sibling.return=f.return,f=f.sibling}}break;case 19:jt(t,e),Nt(e),r&4&&Bc(e);break;case 21:break;default:jt(t,e),Nt(e)}}function Nt(e){var t=e.flags;if(t&2){try{e:{for(var n=e.return;n!==null;){if(Fp(n)){var r=n;break e}n=n.return}throw Error(R(160))}switch(r.tag){case 5:var i=r.stateNode;r.flags&32&&(di(i,""),r.flags&=-33);var o=Uc(e);ga(e,o,i);break;case 3:case 4:var s=r.stateNode.containerInfo,l=Uc(e);ya(e,l,s);break;default:throw Error(R(161))}}catch(u){je(e,e.return,u)}e.flags&=-3}t&4096&&(e.flags&=-4097)}function xg(e,t,n){U=e,Up(e)}function Up(e,t,n){for(var r=(e.mode&1)!==0;U!==null;){var i=U,o=i.child;if(i.tag===22&&r){var s=i.memoizedState!==null||ro;if(!s){var l=i.alternate,u=l!==null&&l.memoizedState!==null||Ye;l=ro;var c=Ye;if(ro=s,(Ye=u)&&!c)for(U=i;U!==null;)s=U,u=s.child,s.tag===22&&s.memoizedState!==null?Hc(i):u!==null?(u.return=s,U=u):Hc(i);for(;o!==null;)U=o,Up(o),o=o.sibling;U=i,ro=l,Ye=c}Vc(e)}else i.subtreeFlags&8772&&o!==null?(o.return=i,U=o):Vc(e)}}function Vc(e){for(;U!==null;){var t=U;if(t.flags&8772){var n=t.alternate;try{if(t.flags&8772)switch(t.tag){case 0:case 11:case 15:Ye||Ss(5,t);break;case 1:var r=t.stateNode;if(t.flags&4&&!Ye)if(n===null)r.componentDidMount();else{var i=t.elementType===t.type?n.memoizedProps:_t(t.type,n.memoizedProps);r.componentDidUpdate(i,n.memoizedState,r.__reactInternalSnapshotBeforeUpdate)}var o=t.updateQueue;o!==null&&Cc(t,o,r);break;case 3:var s=t.updateQueue;if(s!==null){if(n=null,t.child!==null)switch(t.child.tag){case 5:n=t.child.stateNode;break;case 1:n=t.child.stateNode}Cc(t,s,n)}break;case 5:var l=t.stateNode;if(n===null&&t.flags&4){n=l;var u=t.memoizedProps;switch(t.type){case"button":case"input":case"select":case"textarea":u.autoFocus&&n.focus();break;case"img":u.src&&(n.src=u.src)}}break;case 6:break;case 4:break;case 12:break;case 13:if(t.memoizedState===null){var c=t.alternate;if(c!==null){var h=c.memoizedState;if(h!==null){var f=h.dehydrated;f!==null&&mi(f)}}}break;case 19:case 17:case 21:case 22:case 23:case 25:break;default:throw Error(R(163))}Ye||t.flags&512&&ma(t)}catch(m){je(t,t.return,m)}}if(t===e){U=null;break}if(n=t.sibling,n!==null){n.return=t.return,U=n;break}U=t.return}}function Wc(e){for(;U!==null;){var t=U;if(t===e){U=null;break}var n=t.sibling;if(n!==null){n.return=t.return,U=n;break}U=t.return}}function Hc(e){for(;U!==null;){var t=U;try{switch(t.tag){case 0:case 11:case 15:var n=t.return;try{Ss(4,t)}catch(u){je(t,n,u)}break;case 1:var r=t.stateNode;if(typeof r.componentDidMount=="function"){var i=t.return;try{r.componentDidMount()}catch(u){je(t,i,u)}}var o=t.return;try{ma(t)}catch(u){je(t,o,u)}break;case 5:var s=t.return;try{ma(t)}catch(u){je(t,s,u)}}}catch(u){je(t,t.return,u)}if(t===e){U=null;break}var l=t.sibling;if(l!==null){l.return=t.return,U=l;break}U=t.return}}var wg=Math.ceil,ts=rn.ReactCurrentDispatcher,hu=rn.ReactCurrentOwner,vt=rn.ReactCurrentBatchConfig,oe=0,ze=null,Pe=null,Ue=0,st=0,fr=Rn(0),Me=0,Ci=null,Hn=0,js=0,mu=0,ai=null,et=null,yu=0,br=1/0,Yt=null,ns=!1,va=null,_n=null,io=!1,vn=null,rs=0,ui=0,xa=null,_o=-1,Co=0;function qe(){return oe&6?_e():_o!==-1?_o:_o=_e()}function Cn(e){return e.mode&1?oe&2&&Ue!==0?Ue&-Ue:rg.transition!==null?(Co===0&&(Co=Ef()),Co):(e=ce,e!==0||(e=window.event,e=e===void 0?16:Rf(e.type)),e):1}function Rt(e,t,n,r){if(50<ui)throw ui=0,xa=null,Error(R(185));Ai(e,n,r),(!(oe&2)||e!==ze)&&(e===ze&&(!(oe&2)&&(js|=n),Me===4&&mn(e,Ue)),it(e,r),n===1&&oe===0&&!(t.mode&1)&&(br=_e()+500,xs&&Mn()))}function it(e,t){var n=e.callbackNode;ry(e,t);var r=$o(e,e===ze?Ue:0);if(r===0)n!==null&&ec(n),e.callbackNode=null,e.callbackPriority=0;else if(t=r&-r,e.callbackPriority!==t){if(n!=null&&ec(n),t===1)e.tag===0?ng(Qc.bind(null,e)):Gf(Qc.bind(null,e)),Jy(function(){!(oe&6)&&Mn()}),n=null;else{switch(_f(r)){case 1:n=Ba;break;case 4:n=Sf;break;case 16:n=Io;break;case 536870912:n=jf;break;default:n=Io}n=Xp(n,Bp.bind(null,e))}e.callbackPriority=t,e.callbackNode=n}}function Bp(e,t){if(_o=-1,Co=0,oe&6)throw Error(R(327));var n=e.callbackNode;if(xr()&&e.callbackNode!==n)return null;var r=$o(e,e===ze?Ue:0);if(r===0)return null;if(r&30||r&e.expiredLanes||t)t=is(e,r);else{t=r;var i=oe;oe|=2;var o=Wp();(ze!==e||Ue!==t)&&(Yt=null,br=_e()+500,$n(e,t));do try{jg();break}catch(l){Vp(e,l)}while(!0);tu(),ts.current=o,oe=i,Pe!==null?t=0:(ze=null,Ue=0,t=Me)}if(t!==0){if(t===2&&(i=Ql(e),i!==0&&(r=i,t=wa(e,i))),t===1)throw n=Ci,$n(e,0),mn(e,r),it(e,_e()),n;if(t===6)mn(e,r);else{if(i=e.current.alternate,!(r&30)&&!kg(i)&&(t=is(e,r),t===2&&(o=Ql(e),o!==0&&(r=o,t=wa(e,o))),t===1))throw n=Ci,$n(e,0),mn(e,r),it(e,_e()),n;switch(e.finishedWork=i,e.finishedLanes=r,t){case 0:case 1:throw Error(R(345));case 2:Ln(e,et,Yt);break;case 3:if(mn(e,r),(r&130023424)===r&&(t=yu+500-_e(),10<t)){if($o(e,0)!==0)break;if(i=e.suspendedLanes,(i&r)!==r){qe(),e.pingedLanes|=e.suspendedLanes&i;break}e.timeoutHandle=ea(Ln.bind(null,e,et,Yt),t);break}Ln(e,et,Yt);break;case 4:if(mn(e,r),(r&4194240)===r)break;for(t=e.eventTimes,i=-1;0<r;){var s=31-Ot(r);o=1<<s,s=t[s],s>i&&(i=s),r&=~o}if(r=i,r=_e()-r,r=(120>r?120:480>r?480:1080>r?1080:1920>r?1920:3e3>r?3e3:4320>r?4320:1960*wg(r/1960))-r,10<r){e.timeoutHandle=ea(Ln.bind(null,e,et,Yt),r);break}Ln(e,et,Yt);break;case 5:Ln(e,et,Yt);break;default:throw Error(R(329))}}}return it(e,_e()),e.callbackNode===n?Bp.bind(null,e):null}function wa(e,t){var n=ai;return e.current.memoizedState.isDehydrated&&($n(e,t).flags|=256),e=is(e,t),e!==2&&(t=et,et=n,t!==null&&ka(t)),e}function ka(e){et===null?et=e:et.push.apply(et,e)}function kg(e){for(var t=e;;){if(t.flags&16384){var n=t.updateQueue;if(n!==null&&(n=n.stores,n!==null))for(var r=0;r<n.length;r++){var i=n[r],o=i.getSnapshot;i=i.value;try{if(!Mt(o(),i))return!1}catch{return!1}}}if(n=t.child,t.subtreeFlags&16384&&n!==null)n.return=t,t=n;else{if(t===e)break;for(;t.sibling===null;){if(t.return===null||t.return===e)return!0;t=t.return}t.sibling.return=t.return,t=t.sibling}}return!0}function mn(e,t){for(t&=~mu,t&=~js,e.suspendedLanes|=t,e.pingedLanes&=~t,e=e.expirationTimes;0<t;){var n=31-Ot(t),r=1<<n;e[n]=-1,t&=~r}}function Qc(e){if(oe&6)throw Error(R(327));xr();var t=$o(e,0);if(!(t&1))return it(e,_e()),null;var n=is(e,t);if(e.tag!==0&&n===2){var r=Ql(e);r!==0&&(t=r,n=wa(e,r))}if(n===1)throw n=Ci,$n(e,0),mn(e,t),it(e,_e()),n;if(n===6)throw Error(R(345));return e.finishedWork=e.current.alternate,e.finishedLanes=t,Ln(e,et,Yt),it(e,_e()),null}function gu(e,t){var n=oe;oe|=1;try{return e(t)}finally{oe=n,oe===0&&(br=_e()+500,xs&&Mn())}}function Qn(e){vn!==null&&vn.tag===0&&!(oe&6)&&xr();var t=oe;oe|=1;var n=vt.transition,r=ce;try{if(vt.transition=null,ce=1,e)return e()}finally{ce=r,vt.transition=n,oe=t,!(oe&6)&&Mn()}}function vu(){st=fr.current,ye(fr)}function $n(e,t){e.finishedWork=null,e.finishedLanes=0;var n=e.timeoutHandle;if(n!==-1&&(e.timeoutHandle=-1,qy(n)),Pe!==null)for(n=Pe.return;n!==null;){var r=n;switch(Ja(r),r.tag){case 1:r=r.type.childContextTypes,r!=null&&Ho();break;case 3:_r(),ye(nt),ye(Ke),lu();break;case 5:su(r);break;case 4:_r();break;case 13:ye(xe);break;case 19:ye(xe);break;case 10:nu(r.type._context);break;case 22:case 23:vu()}n=n.return}if(ze=e,Pe=e=bn(e.current,null),Ue=st=t,Me=0,Ci=null,mu=js=Hn=0,et=ai=null,Dn!==null){for(t=0;t<Dn.length;t++)if(n=Dn[t],r=n.interleaved,r!==null){n.interleaved=null;var i=r.next,o=n.pending;if(o!==null){var s=o.next;o.next=i,r.next=s}n.pending=r}Dn=null}return e}function Vp(e,t){do{var n=Pe;try{if(tu(),So.current=es,Zo){for(var r=ke.memoizedState;r!==null;){var i=r.queue;i!==null&&(i.pending=null),r=r.next}Zo=!1}if(Wn=0,Le=Re=ke=null,si=!1,ji=0,hu.current=null,n===null||n.return===null){Me=1,Ci=t,Pe=null;break}e:{var o=e,s=n.return,l=n,u=t;if(t=Ue,l.flags|=32768,u!==null&&typeof u=="object"&&typeof u.then=="function"){var c=u,h=l,f=h.tag;if(!(h.mode&1)&&(f===0||f===11||f===15)){var m=h.alternate;m?(h.updateQueue=m.updateQueue,h.memoizedState=m.memoizedState,h.lanes=m.lanes):(h.updateQueue=null,h.memoizedState=null)}var w=Ac(s);if(w!==null){w.flags&=-257,Nc(w,s,l,o,t),w.mode&1&&Mc(o,c,t),t=w,u=c;var g=t.updateQueue;if(g===null){var v=new Set;v.add(u),t.updateQueue=v}else g.add(u);break e}else{if(!(t&1)){Mc(o,c,t),xu();break e}u=Error(R(426))}}else if(ve&&l.mode&1){var b=Ac(s);if(b!==null){!(b.flags&65536)&&(b.flags|=256),Nc(b,s,l,o,t),Za(Cr(u,l));break e}}o=u=Cr(u,l),Me!==4&&(Me=2),ai===null?ai=[o]:ai.push(o),o=s;do{switch(o.tag){case 3:o.flags|=65536,t&=-t,o.lanes|=t;var p=Cp(o,u,t);_c(o,p);break e;case 1:l=u;var d=o.type,y=o.stateNode;if(!(o.flags&128)&&(typeof d.getDerivedStateFromError=="function"||y!==null&&typeof y.componentDidCatch=="function"&&(_n===null||!_n.has(y)))){o.flags|=65536,t&=-t,o.lanes|=t;var k=bp(o,l,t);_c(o,k);break e}}o=o.return}while(o!==null)}Qp(n)}catch(_){t=_,Pe===n&&n!==null&&(Pe=n=n.return);continue}break}while(!0)}function Wp(){var e=ts.current;return ts.current=es,e===null?es:e}function xu(){(Me===0||Me===3||Me===2)&&(Me=4),ze===null||!(Hn&268435455)&&!(js&268435455)||mn(ze,Ue)}function is(e,t){var n=oe;oe|=2;var r=Wp();(ze!==e||Ue!==t)&&(Yt=null,$n(e,t));do try{Sg();break}catch(i){Vp(e,i)}while(!0);if(tu(),oe=n,ts.current=r,Pe!==null)throw Error(R(261));return ze=null,Ue=0,Me}function Sg(){for(;Pe!==null;)Hp(Pe)}function jg(){for(;Pe!==null&&!Km();)Hp(Pe)}function Hp(e){var t=Kp(e.alternate,e,st);e.memoizedProps=e.pendingProps,t===null?Qp(e):Pe=t,hu.current=null}function Qp(e){var t=e;do{var n=t.alternate;if(e=t.return,t.flags&32768){if(n=yg(n,t),n!==null){n.flags&=32767,Pe=n;return}if(e!==null)e.flags|=32768,e.subtreeFlags=0,e.deletions=null;else{Me=6,Pe=null;return}}else if(n=mg(n,t,st),n!==null){Pe=n;return}if(t=t.sibling,t!==null){Pe=t;return}Pe=t=e}while(t!==null);Me===0&&(Me=5)}function Ln(e,t,n){var r=ce,i=vt.transition;try{vt.transition=null,ce=1,Eg(e,t,n,r)}finally{vt.transition=i,ce=r}return null}function Eg(e,t,n,r){do xr();while(vn!==null);if(oe&6)throw Error(R(327));n=e.finishedWork;var i=e.finishedLanes;if(n===null)return null;if(e.finishedWork=null,e.finishedLanes=0,n===e.current)throw Error(R(177));e.callbackNode=null,e.callbackPriority=0;var o=n.lanes|n.childLanes;if(iy(e,o),e===ze&&(Pe=ze=null,Ue=0),!(n.subtreeFlags&2064)&&!(n.flags&2064)||io||(io=!0,Xp(Io,function(){return xr(),null})),o=(n.flags&15990)!==0,n.subtreeFlags&15990||o){o=vt.transition,vt.transition=null;var s=ce;ce=1;var l=oe;oe|=4,hu.current=null,vg(e,n),$p(n,e),Wy(Jl),Uo=!!ql,Jl=ql=null,e.current=n,xg(n),Xm(),oe=l,ce=s,vt.transition=o}else e.current=n;if(io&&(io=!1,vn=e,rs=i),o=e.pendingLanes,o===0&&(_n=null),Jm(n.stateNode),it(e,_e()),t!==null)for(r=e.onRecoverableError,n=0;n<t.length;n++)i=t[n],r(i.value,{componentStack:i.stack,digest:i.digest});if(ns)throw ns=!1,e=va,va=null,e;return rs&1&&e.tag!==0&&xr(),o=e.pendingLanes,o&1?e===xa?ui++:(ui=0,xa=e):ui=0,Mn(),null}function xr(){if(vn!==null){var e=_f(rs),t=vt.transition,n=ce;try{if(vt.transition=null,ce=16>e?16:e,vn===null)var r=!1;else{if(e=vn,vn=null,rs=0,oe&6)throw Error(R(331));var i=oe;for(oe|=4,U=e.current;U!==null;){var o=U,s=o.child;if(U.flags&16){var l=o.deletions;if(l!==null){for(var u=0;u<l.length;u++){var c=l[u];for(U=c;U!==null;){var h=U;switch(h.tag){case 0:case 11:case 15:li(8,h,o)}var f=h.child;if(f!==null)f.return=h,U=f;else for(;U!==null;){h=U;var m=h.sibling,w=h.return;if(Dp(h),h===c){U=null;break}if(m!==null){m.return=w,U=m;break}U=w}}}var g=o.alternate;if(g!==null){var v=g.child;if(v!==null){g.child=null;do{var b=v.sibling;v.sibling=null,v=b}while(v!==null)}}U=o}}if(o.subtreeFlags&2064&&s!==null)s.return=o,U=s;else e:for(;U!==null;){if(o=U,o.flags&2048)switch(o.tag){case 0:case 11:case 15:li(9,o,o.return)}var p=o.sibling;if(p!==null){p.return=o.return,U=p;break e}U=o.return}}var d=e.current;for(U=d;U!==null;){s=U;var y=s.child;if(s.subtreeFlags&2064&&y!==null)y.return=s,U=y;else e:for(s=d;U!==null;){if(l=U,l.flags&2048)try{switch(l.tag){case 0:case 11:case 15:Ss(9,l)}}catch(_){je(l,l.return,_)}if(l===s){U=null;break e}var k=l.sibling;if(k!==null){k.return=l.return,U=k;break e}U=l.return}}if(oe=i,Mn(),Ut&&typeof Ut.onPostCommitFiberRoot=="function")try{Ut.onPostCommitFiberRoot(hs,e)}catch{}r=!0}return r}finally{ce=n,vt.transition=t}}return!1}function Yc(e,t,n){t=Cr(n,t),t=Cp(e,t,1),e=En(e,t,1),t=qe(),e!==null&&(Ai(e,1,t),it(e,t))}function je(e,t,n){if(e.tag===3)Yc(e,e,n);else for(;t!==null;){if(t.tag===3){Yc(t,e,n);break}else if(t.tag===1){var r=t.stateNode;if(typeof t.type.getDerivedStateFromError=="function"||typeof r.componentDidCatch=="function"&&(_n===null||!_n.has(r))){e=Cr(n,e),e=bp(t,e,1),t=En(t,e,1),e=qe(),t!==null&&(Ai(t,1,e),it(t,e));break}}t=t.return}}function _g(e,t,n){var r=e.pingCache;r!==null&&r.delete(t),t=qe(),e.pingedLanes|=e.suspendedLanes&n,ze===e&&(Ue&n)===n&&(Me===4||Me===3&&(Ue&130023424)===Ue&&500>_e()-yu?$n(e,0):mu|=n),it(e,t)}function Yp(e,t){t===0&&(e.mode&1?(t=Ki,Ki<<=1,!(Ki&130023424)&&(Ki=4194304)):t=1);var n=qe();e=tn(e,t),e!==null&&(Ai(e,t,n),it(e,n))}function Cg(e){var t=e.memoizedState,n=0;t!==null&&(n=t.retryLane),Yp(e,n)}function bg(e,t){var n=0;switch(e.tag){case 13:var r=e.stateNode,i=e.memoizedState;i!==null&&(n=i.retryLane);break;case 19:r=e.stateNode;break;default:throw Error(R(314))}r!==null&&r.delete(t),Yp(e,n)}var Kp;Kp=function(e,t,n){if(e!==null)if(e.memoizedProps!==t.pendingProps||nt.current)tt=!0;else{if(!(e.lanes&n)&&!(t.flags&128))return tt=!1,hg(e,t,n);tt=!!(e.flags&131072)}else tt=!1,ve&&t.flags&1048576&&qf(t,Ko,t.index);switch(t.lanes=0,t.tag){case 2:var r=t.type;Eo(e,t),e=t.pendingProps;var i=Sr(t,Ke.current);vr(t,n),i=uu(null,t,r,e,i,n);var o=cu();return t.flags|=1,typeof i=="object"&&i!==null&&typeof i.render=="function"&&i.$$typeof===void 0?(t.tag=1,t.memoizedState=null,t.updateQueue=null,rt(r)?(o=!0,Qo(t)):o=!1,t.memoizedState=i.state!==null&&i.state!==void 0?i.state:null,iu(t),i.updater=ws,t.stateNode=i,i._reactInternals=t,la(t,r,e,n),t=ca(null,t,r,!0,o,n)):(t.tag=0,ve&&o&&qa(t),Xe(null,t,i,n),t=t.child),t;case 16:r=t.elementType;e:{switch(Eo(e,t),e=t.pendingProps,i=r._init,r=i(r._payload),t.type=r,i=t.tag=Pg(r),e=_t(r,e),i){case 0:t=ua(null,t,r,e,n);break e;case 1:t=Dc(null,t,r,e,n);break e;case 11:t=Lc(null,t,r,e,n);break e;case 14:t=zc(null,t,r,_t(r.type,e),n);break e}throw Error(R(306,r,""))}return t;case 0:return r=t.type,i=t.pendingProps,i=t.elementType===r?i:_t(r,i),ua(e,t,r,i,n);case 1:return r=t.type,i=t.pendingProps,i=t.elementType===r?i:_t(r,i),Dc(e,t,r,i,n);case 3:e:{if(Rp(t),e===null)throw Error(R(387));r=t.pendingProps,o=t.memoizedState,i=o.element,tp(e,t),qo(t,r,null,n);var s=t.memoizedState;if(r=s.element,o.isDehydrated)if(o={element:r,isDehydrated:!1,cache:s.cache,pendingSuspenseBoundaries:s.pendingSuspenseBoundaries,transitions:s.transitions},t.updateQueue.baseState=o,t.memoizedState=o,t.flags&256){i=Cr(Error(R(423)),t),t=Fc(e,t,r,n,i);break e}else if(r!==i){i=Cr(Error(R(424)),t),t=Fc(e,t,r,n,i);break e}else for(lt=jn(t.stateNode.containerInfo.firstChild),at=t,ve=!0,Tt=null,n=op(t,null,r,n),t.child=n;n;)n.flags=n.flags&-3|4096,n=n.sibling;else{if(jr(),r===i){t=nn(e,t,n);break e}Xe(e,t,r,n)}t=t.child}return t;case 5:return sp(t),e===null&&ia(t),r=t.type,i=t.pendingProps,o=e!==null?e.memoizedProps:null,s=i.children,Zl(r,i)?s=null:o!==null&&Zl(r,o)&&(t.flags|=32),Op(e,t),Xe(e,t,s,n),t.child;case 6:return e===null&&ia(t),null;case 13:return Mp(e,t,n);case 4:return ou(t,t.stateNode.containerInfo),r=t.pendingProps,e===null?t.child=Er(t,null,r,n):Xe(e,t,r,n),t.child;case 11:return r=t.type,i=t.pendingProps,i=t.elementType===r?i:_t(r,i),Lc(e,t,r,i,n);case 7:return Xe(e,t,t.pendingProps,n),t.child;case 8:return Xe(e,t,t.pendingProps.children,n),t.child;case 12:return Xe(e,t,t.pendingProps.children,n),t.child;case 10:e:{if(r=t.type._context,i=t.pendingProps,o=t.memoizedProps,s=i.value,pe(Xo,r._currentValue),r._currentValue=s,o!==null)if(Mt(o.value,s)){if(o.children===i.children&&!nt.current){t=nn(e,t,n);break e}}else for(o=t.child,o!==null&&(o.return=t);o!==null;){var l=o.dependencies;if(l!==null){s=o.child;for(var u=l.firstContext;u!==null;){if(u.context===r){if(o.tag===1){u=qt(-1,n&-n),u.tag=2;var c=o.updateQueue;if(c!==null){c=c.shared;var h=c.pending;h===null?u.next=u:(u.next=h.next,h.next=u),c.pending=u}}o.lanes|=n,u=o.alternate,u!==null&&(u.lanes|=n),oa(o.return,n,t),l.lanes|=n;break}u=u.next}}else if(o.tag===10)s=o.type===t.type?null:o.child;else if(o.tag===18){if(s=o.return,s===null)throw Error(R(341));s.lanes|=n,l=s.alternate,l!==null&&(l.lanes|=n),oa(s,n,t),s=o.sibling}else s=o.child;if(s!==null)s.return=o;else for(s=o;s!==null;){if(s===t){s=null;break}if(o=s.sibling,o!==null){o.return=s.return,s=o;break}s=s.return}o=s}Xe(e,t,i.children,n),t=t.child}return t;case 9:return i=t.type,r=t.pendingProps.children,vr(t,n),i=wt(i),r=r(i),t.flags|=1,Xe(e,t,r,n),t.child;case 14:return r=t.type,i=_t(r,t.pendingProps),i=_t(r.type,i),zc(e,t,r,i,n);case 15:return Tp(e,t,t.type,t.pendingProps,n);case 17:return r=t.type,i=t.pendingProps,i=t.elementType===r?i:_t(r,i),Eo(e,t),t.tag=1,rt(r)?(e=!0,Qo(t)):e=!1,vr(t,n),rp(t,r,i),la(t,r,i,n),ca(null,t,r,!0,e,n);case 19:return Ap(e,t,n);case 22:return Pp(e,t,n)}throw Error(R(156,t.tag))};function Xp(e,t){return kf(e,t)}function Tg(e,t,n,r){this.tag=e,this.key=n,this.sibling=this.child=this.return=this.stateNode=this.type=this.elementType=null,this.index=0,this.ref=null,this.pendingProps=t,this.dependencies=this.memoizedState=this.updateQueue=this.memoizedProps=null,this.mode=r,this.subtreeFlags=this.flags=0,this.deletions=null,this.childLanes=this.lanes=0,this.alternate=null}function gt(e,t,n,r){return new Tg(e,t,n,r)}function wu(e){return e=e.prototype,!(!e||!e.isReactComponent)}function Pg(e){if(typeof e=="function")return wu(e)?1:0;if(e!=null){if(e=e.$$typeof,e===Ia)return 11;if(e===$a)return 14}return 2}function bn(e,t){var n=e.alternate;return n===null?(n=gt(e.tag,t,e.key,e.mode),n.elementType=e.elementType,n.type=e.type,n.stateNode=e.stateNode,n.alternate=e,e.alternate=n):(n.pendingProps=t,n.type=e.type,n.flags=0,n.subtreeFlags=0,n.deletions=null),n.flags=e.flags&14680064,n.childLanes=e.childLanes,n.lanes=e.lanes,n.child=e.child,n.memoizedProps=e.memoizedProps,n.memoizedState=e.memoizedState,n.updateQueue=e.updateQueue,t=e.dependencies,n.dependencies=t===null?null:{lanes:t.lanes,firstContext:t.firstContext},n.sibling=e.sibling,n.index=e.index,n.ref=e.ref,n}function bo(e,t,n,r,i,o){var s=2;if(r=e,typeof e=="function")wu(e)&&(s=1);else if(typeof e=="string")s=5;else e:switch(e){case nr:return Un(n.children,i,o,t);case Fa:s=8,i|=8;break;case Rl:return e=gt(12,n,t,i|2),e.elementType=Rl,e.lanes=o,e;case Ml:return e=gt(13,n,t,i),e.elementType=Ml,e.lanes=o,e;case Al:return e=gt(19,n,t,i),e.elementType=Al,e.lanes=o,e;case rf:return Es(n,i,o,t);default:if(typeof e=="object"&&e!==null)switch(e.$$typeof){case tf:s=10;break e;case nf:s=9;break e;case Ia:s=11;break e;case $a:s=14;break e;case fn:s=16,r=null;break e}throw Error(R(130,e==null?e:typeof e,""))}return t=gt(s,n,t,i),t.elementType=e,t.type=r,t.lanes=o,t}function Un(e,t,n,r){return e=gt(7,e,r,t),e.lanes=n,e}function Es(e,t,n,r){return e=gt(22,e,r,t),e.elementType=rf,e.lanes=n,e.stateNode={isHidden:!1},e}function ul(e,t,n){return e=gt(6,e,null,t),e.lanes=n,e}function cl(e,t,n){return t=gt(4,e.children!==null?e.children:[],e.key,t),t.lanes=n,t.stateNode={containerInfo:e.containerInfo,pendingChildren:null,implementation:e.implementation},t}function Og(e,t,n,r,i){this.tag=t,this.containerInfo=e,this.finishedWork=this.pingCache=this.current=this.pendingChildren=null,this.timeoutHandle=-1,this.callbackNode=this.pendingContext=this.context=null,this.callbackPriority=0,this.eventTimes=Ws(0),this.expirationTimes=Ws(-1),this.entangledLanes=this.finishedLanes=this.mutableReadLanes=this.expiredLanes=this.pingedLanes=this.suspendedLanes=this.pendingLanes=0,this.entanglements=Ws(0),this.identifierPrefix=r,this.onRecoverableError=i,this.mutableSourceEagerHydrationData=null}function ku(e,t,n,r,i,o,s,l,u){return e=new Og(e,t,n,l,u),t===1?(t=1,o===!0&&(t|=8)):t=0,o=gt(3,null,null,t),e.current=o,o.stateNode=e,o.memoizedState={element:r,isDehydrated:n,cache:null,transitions:null,pendingSuspenseBoundaries:null},iu(o),e}function Rg(e,t,n){var r=3<arguments.length&&arguments[3]!==void 0?arguments[3]:null;return{$$typeof:tr,key:r==null?null:""+r,children:e,containerInfo:t,implementation:n}}function Gp(e){if(!e)return Pn;e=e._reactInternals;e:{if(Kn(e)!==e||e.tag!==1)throw Error(R(170));var t=e;do{switch(t.tag){case 3:t=t.stateNode.context;break e;case 1:if(rt(t.type)){t=t.stateNode.__reactInternalMemoizedMergedChildContext;break e}}t=t.return}while(t!==null);throw Error(R(171))}if(e.tag===1){var n=e.type;if(rt(n))return Xf(e,n,t)}return t}function qp(e,t,n,r,i,o,s,l,u){return e=ku(n,r,!0,e,i,o,s,l,u),e.context=Gp(null),n=e.current,r=qe(),i=Cn(n),o=qt(r,i),o.callback=t??null,En(n,o,i),e.current.lanes=i,Ai(e,i,r),it(e,r),e}function _s(e,t,n,r){var i=t.current,o=qe(),s=Cn(i);return n=Gp(n),t.context===null?t.context=n:t.pendingContext=n,t=qt(o,s),t.payload={element:e},r=r===void 0?null:r,r!==null&&(t.callback=r),e=En(i,t,s),e!==null&&(Rt(e,i,s,o),ko(e,i,s)),s}function os(e){if(e=e.current,!e.child)return null;switch(e.child.tag){case 5:return e.child.stateNode;default:return e.child.stateNode}}function Kc(e,t){if(e=e.memoizedState,e!==null&&e.dehydrated!==null){var n=e.retryLane;e.retryLane=n!==0&&n<t?n:t}}function Su(e,t){Kc(e,t),(e=e.alternate)&&Kc(e,t)}function Mg(){return null}var Jp=typeof reportError=="function"?reportError:function(e){console.error(e)};function ju(e){this._internalRoot=e}Cs.prototype.render=ju.prototype.render=function(e){var t=this._internalRoot;if(t===null)throw Error(R(409));_s(e,t,null,null)};Cs.prototype.unmount=ju.prototype.unmount=function(){var e=this._internalRoot;if(e!==null){this._internalRoot=null;var t=e.containerInfo;Qn(function(){_s(null,e,null,null)}),t[en]=null}};function Cs(e){this._internalRoot=e}Cs.prototype.unstable_scheduleHydration=function(e){if(e){var t=Tf();e={blockedOn:null,target:e,priority:t};for(var n=0;n<hn.length&&t!==0&&t<hn[n].priority;n++);hn.splice(n,0,e),n===0&&Of(e)}};function Eu(e){return!(!e||e.nodeType!==1&&e.nodeType!==9&&e.nodeType!==11)}function bs(e){return!(!e||e.nodeType!==1&&e.nodeType!==9&&e.nodeType!==11&&(e.nodeType!==8||e.nodeValue!==" react-mount-point-unstable "))}function Xc(){}function Ag(e,t,n,r,i){if(i){if(typeof r=="function"){var o=r;r=function(){var c=os(s);o.call(c)}}var s=qp(t,r,e,0,null,!1,!1,"",Xc);return e._reactRootContainer=s,e[en]=s.current,vi(e.nodeType===8?e.parentNode:e),Qn(),s}for(;i=e.lastChild;)e.removeChild(i);if(typeof r=="function"){var l=r;r=function(){var c=os(u);l.call(c)}}var u=ku(e,0,!1,null,null,!1,!1,"",Xc);return e._reactRootContainer=u,e[en]=u.current,vi(e.nodeType===8?e.parentNode:e),Qn(function(){_s(t,u,n,r)}),u}function Ts(e,t,n,r,i){var o=n._reactRootContainer;if(o){var s=o;if(typeof i=="function"){var l=i;i=function(){var u=os(s);l.call(u)}}_s(t,s,e,i)}else s=Ag(n,t,e,i,r);return os(s)}Cf=function(e){switch(e.tag){case 3:var t=e.stateNode;if(t.current.memoizedState.isDehydrated){var n=Zr(t.pendingLanes);n!==0&&(Va(t,n|1),it(t,_e()),!(oe&6)&&(br=_e()+500,Mn()))}break;case 13:Qn(function(){var r=tn(e,1);if(r!==null){var i=qe();Rt(r,e,1,i)}}),Su(e,1)}};Wa=function(e){if(e.tag===13){var t=tn(e,134217728);if(t!==null){var n=qe();Rt(t,e,134217728,n)}Su(e,134217728)}};bf=function(e){if(e.tag===13){var t=Cn(e),n=tn(e,t);if(n!==null){var r=qe();Rt(n,e,t,r)}Su(e,t)}};Tf=function(){return ce};Pf=function(e,t){var n=ce;try{return ce=e,t()}finally{ce=n}};Vl=function(e,t,n){switch(t){case"input":if(zl(e,n),t=n.name,n.type==="radio"&&t!=null){for(n=e;n.parentNode;)n=n.parentNode;for(n=n.querySelectorAll("input[name="+JSON.stringify(""+t)+'][type="radio"]'),t=0;t<n.length;t++){var r=n[t];if(r!==e&&r.form===e.form){var i=vs(r);if(!i)throw Error(R(90));sf(r),zl(r,i)}}}break;case"textarea":af(e,n);break;case"select":t=n.value,t!=null&&hr(e,!!n.multiple,t,!1)}};mf=gu;yf=Qn;var Ng={usingClientEntryPoint:!1,Events:[Li,sr,vs,pf,hf,gu]},Br={findFiberByHostInstance:zn,bundleType:0,version:"18.2.0",rendererPackageName:"react-dom"},Lg={bundleType:Br.bundleType,version:Br.version,rendererPackageName:Br.rendererPackageName,rendererConfig:Br.rendererConfig,overrideHookState:null,overrideHookStateDeletePath:null,overrideHookStateRenamePath:null,overrideProps:null,overridePropsDeletePath:null,overridePropsRenamePath:null,setErrorHandler:null,setSuspenseHandler:null,scheduleUpdate:null,currentDispatcherRef:rn.ReactCurrentDispatcher,findHostInstanceByFiber:function(e){return e=xf(e),e===null?null:e.stateNode},findFiberByHostInstance:Br.findFiberByHostInstance||Mg,findHostInstancesForRefresh:null,scheduleRefresh:null,scheduleRoot:null,setRefreshHandler:null,getCurrentFiber:null,reconcilerVersion:"18.2.0-next-9e3b772b8-20220608"};if(typeof __REACT_DEVTOOLS_GLOBAL_HOOK__<"u"){var oo=__REACT_DEVTOOLS_GLOBAL_HOOK__;if(!oo.isDisabled&&oo.supportsFiber)try{hs=oo.inject(Lg),Ut=oo}catch{}}dt.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED=Ng;dt.createPortal=function(e,t){var n=2<arguments.length&&arguments[2]!==void 0?arguments[2]:null;if(!Eu(t))throw Error(R(200));return Rg(e,t,null,n)};dt.createRoot=function(e,t){if(!Eu(e))throw Error(R(299));var n=!1,r="",i=Jp;return t!=null&&(t.unstable_strictMode===!0&&(n=!0),t.identifierPrefix!==void 0&&(r=t.identifierPrefix),t.onRecoverableError!==void 0&&(i=t.onRecoverableError)),t=ku(e,1,!1,null,null,n,!1,r,i),e[en]=t.current,vi(e.nodeType===8?e.parentNode:e),new ju(t)};dt.findDOMNode=function(e){if(e==null)return null;if(e.nodeType===1)return e;var t=e._reactInternals;if(t===void 0)throw typeof e.render=="function"?Error(R(188)):(e=Object.keys(e).join(","),Error(R(268,e)));return e=xf(t),e=e===null?null:e.stateNode,e};dt.flushSync=function(e){return Qn(e)};dt.hydrate=function(e,t,n){if(!bs(t))throw Error(R(200));return Ts(null,e,t,!0,n)};dt.hydrateRoot=function(e,t,n){if(!Eu(e))throw Error(R(405));var r=n!=null&&n.hydratedSources||null,i=!1,o="",s=Jp;if(n!=null&&(n.unstable_strictMode===!0&&(i=!0),n.identifierPrefix!==void 0&&(o=n.identifierPrefix),n.onRecoverableError!==void 0&&(s=n.onRecoverableError)),t=qp(t,null,e,1,n??null,i,!1,o,s),e[en]=t.current,vi(e),r)for(e=0;e<r.length;e++)n=r[e],i=n._getVersion,i=i(n._source),t.mutableSourceEagerHydrationData==null?t.mutableSourceEagerHydrationData=[n,i]:t.mutableSourceEagerHydrationData.push(n,i);return new Cs(t)};dt.render=function(e,t,n){if(!bs(t))throw Error(R(200));return Ts(null,e,t,!1,n)};dt.unmountComponentAtNode=function(e){if(!bs(e))throw Error(R(40));return e._reactRootContainer?(Qn(function(){Ts(null,null,e,!1,function(){e._reactRootContainer=null,e[en]=null})}),!0):!1};dt.unstable_batchedUpdates=gu;dt.unstable_renderSubtreeIntoContainer=function(e,t,n,r){if(!bs(n))throw Error(R(200));if(e==null||e._reactInternals===void 0)throw Error(R(38));return Ts(e,t,n,!1,r)};dt.version="18.2.0-next-9e3b772b8-20220608";function Zp(){if(!(typeof __REACT_DEVTOOLS_GLOBAL_HOOK__>"u"||typeof __REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE!="function"))try{__REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE(Zp)}catch(e){console.error(e)}}Zp(),Gd.exports=dt;var _u=Gd.exports;const zg=Oa(_u);var Gc=_u;Pl.createRoot=Gc.createRoot,Pl.hydrateRoot=Gc.hydrateRoot;const dl="/healthy-management-project/assets/olga_picture1x-48yp0Cvc.webp",Dg="/healthy-management-project/assets/olga_picture@2x-dFelWgxd.jpg",Fg="/healthy-management-project/assets/olga_picture1x-ohcXIDw6.jpg",Ig="/healthy-management-project/assets/mob_olga_picture@2x-jz3O2U-O.jpg",$g="/healthy-management-project/assets/mob_olga_picture1x-PQXysebb.jpg",Ug="/healthy-management-project/assets/mob_olga_picture1x-YL2VUwPK.webp",ie="/healthy-management-project/assets/sprite-UALdgeVf.svg";function Sa(){return Sa=Object.assign?Object.assign.bind():function(e){for(var t=1;t<arguments.length;t++){var n=arguments[t];for(var r in n)Object.prototype.hasOwnProperty.call(n,r)&&(e[r]=n[r])}return e},Sa.apply(this,arguments)}function eh(e){var t=Object.create(null);return function(n){return t[n]===void 0&&(t[n]=e(n)),t[n]}}var Bg=/^((children|dangerouslySetInnerHTML|key|ref|autoFocus|defaultValue|defaultChecked|innerHTML|suppressContentEditableWarning|suppressHydrationWarning|valueLink|abbr|accept|acceptCharset|accessKey|action|allow|allowUserMedia|allowPaymentRequest|allowFullScreen|allowTransparency|alt|async|autoComplete|autoPlay|capture|cellPadding|cellSpacing|challenge|charSet|checked|cite|classID|className|cols|colSpan|content|contentEditable|contextMenu|controls|controlsList|coords|crossOrigin|data|dateTime|decoding|default|defer|dir|disabled|disablePictureInPicture|download|draggable|encType|enterKeyHint|form|formAction|formEncType|formMethod|formNoValidate|formTarget|frameBorder|headers|height|hidden|high|href|hrefLang|htmlFor|httpEquiv|id|inputMode|integrity|is|keyParams|keyType|kind|label|lang|list|loading|loop|low|marginHeight|marginWidth|max|maxLength|media|mediaGroup|method|min|minLength|multiple|muted|name|nonce|noValidate|open|optimum|pattern|placeholder|playsInline|poster|preload|profile|radioGroup|readOnly|referrerPolicy|rel|required|reversed|role|rows|rowSpan|sandbox|scope|scoped|scrolling|seamless|selected|shape|size|sizes|slot|span|spellCheck|src|srcDoc|srcLang|srcSet|start|step|style|summary|tabIndex|target|title|translate|type|useMap|value|width|wmode|wrap|about|datatype|inlist|prefix|property|resource|typeof|vocab|autoCapitalize|autoCorrect|autoSave|color|incremental|fallback|inert|itemProp|itemScope|itemType|itemID|itemRef|on|option|results|security|unselectable|accentHeight|accumulate|additive|alignmentBaseline|allowReorder|alphabetic|amplitude|arabicForm|ascent|attributeName|attributeType|autoReverse|azimuth|baseFrequency|baselineShift|baseProfile|bbox|begin|bias|by|calcMode|capHeight|clip|clipPathUnits|clipPath|clipRule|colorInterpolation|colorInterpolationFilters|colorProfile|colorRendering|contentScriptType|contentStyleType|cursor|cx|cy|d|decelerate|descent|diffuseConstant|direction|display|divisor|dominantBaseline|dur|dx|dy|edgeMode|elevation|enableBackground|end|exponent|externalResourcesRequired|fill|fillOpacity|fillRule|filter|filterRes|filterUnits|floodColor|floodOpacity|focusable|fontFamily|fontSize|fontSizeAdjust|fontStretch|fontStyle|fontVariant|fontWeight|format|from|fr|fx|fy|g1|g2|glyphName|glyphOrientationHorizontal|glyphOrientationVertical|glyphRef|gradientTransform|gradientUnits|hanging|horizAdvX|horizOriginX|ideographic|imageRendering|in|in2|intercept|k|k1|k2|k3|k4|kernelMatrix|kernelUnitLength|kerning|keyPoints|keySplines|keyTimes|lengthAdjust|letterSpacing|lightingColor|limitingConeAngle|local|markerEnd|markerMid|markerStart|markerHeight|markerUnits|markerWidth|mask|maskContentUnits|maskUnits|mathematical|mode|numOctaves|offset|opacity|operator|order|orient|orientation|origin|overflow|overlinePosition|overlineThickness|panose1|paintOrder|pathLength|patternContentUnits|patternTransform|patternUnits|pointerEvents|points|pointsAtX|pointsAtY|pointsAtZ|preserveAlpha|preserveAspectRatio|primitiveUnits|r|radius|refX|refY|renderingIntent|repeatCount|repeatDur|requiredExtensions|requiredFeatures|restart|result|rotate|rx|ry|scale|seed|shapeRendering|slope|spacing|specularConstant|specularExponent|speed|spreadMethod|startOffset|stdDeviation|stemh|stemv|stitchTiles|stopColor|stopOpacity|strikethroughPosition|strikethroughThickness|string|stroke|strokeDasharray|strokeDashoffset|strokeLinecap|strokeLinejoin|strokeMiterlimit|strokeOpacity|strokeWidth|surfaceScale|systemLanguage|tableValues|targetX|targetY|textAnchor|textDecoration|textRendering|textLength|to|transform|u1|u2|underlinePosition|underlineThickness|unicode|unicodeBidi|unicodeRange|unitsPerEm|vAlphabetic|vHanging|vIdeographic|vMathematical|values|vectorEffect|version|vertAdvY|vertOriginX|vertOriginY|viewBox|viewTarget|visibility|widths|wordSpacing|writingMode|x|xHeight|x1|x2|xChannelSelector|xlinkActuate|xlinkArcrole|xlinkHref|xlinkRole|xlinkShow|xlinkTitle|xlinkType|xmlBase|xmlns|xmlnsXlink|xmlLang|xmlSpace|y|y1|y2|yChannelSelector|z|zoomAndPan|for|class|autofocus)|(([Dd][Aa][Tt][Aa]|[Aa][Rr][Ii][Aa]|x)-.*))$/,Vg=eh(function(e){return Bg.test(e)||e.charCodeAt(0)===111&&e.charCodeAt(1)===110&&e.charCodeAt(2)<91});function Wg(e){if(e.sheet)return e.sheet;for(var t=0;t<document.styleSheets.length;t++)if(document.styleSheets[t].ownerNode===e)return document.styleSheets[t]}function Hg(e){var t=document.createElement("style");return t.setAttribute("data-emotion",e.key),e.nonce!==void 0&&t.setAttribute("nonce",e.nonce),t.appendChild(document.createTextNode("")),t.setAttribute("data-s",""),t}var Qg=function(){function e(n){var r=this;this._insertTag=function(i){var o;r.tags.length===0?r.insertionPoint?o=r.insertionPoint.nextSibling:r.prepend?o=r.container.firstChild:o=r.before:o=r.tags[r.tags.length-1].nextSibling,r.container.insertBefore(i,o),r.tags.push(i)},this.isSpeedy=n.speedy===void 0?!0:n.speedy,this.tags=[],this.ctr=0,this.nonce=n.nonce,this.key=n.key,this.container=n.container,this.prepend=n.prepend,this.insertionPoint=n.insertionPoint,this.before=null}var t=e.prototype;return t.hydrate=function(r){r.forEach(this._insertTag)},t.insert=function(r){this.ctr%(this.isSpeedy?65e3:1)===0&&this._insertTag(Hg(this));var i=this.tags[this.tags.length-1];if(this.isSpeedy){var o=Wg(i);try{o.insertRule(r,o.cssRules.length)}catch{}}else i.appendChild(document.createTextNode(r));this.ctr++},t.flush=function(){this.tags.forEach(function(r){return r.parentNode&&r.parentNode.removeChild(r)}),this.tags=[],this.ctr=0},e}(),Qe="-ms-",ss="-moz-",se="-webkit-",th="comm",Cu="rule",bu="decl",Yg="@import",nh="@keyframes",Kg="@layer",Xg=Math.abs,Ps=String.fromCharCode,Gg=Object.assign;function qg(e,t){return $e(e,0)^45?(((t<<2^$e(e,0))<<2^$e(e,1))<<2^$e(e,2))<<2^$e(e,3):0}function rh(e){return e.trim()}function Jg(e,t){return(e=t.exec(e))?e[0]:e}function le(e,t,n){return e.replace(t,n)}function ja(e,t){return e.indexOf(t)}function $e(e,t){return e.charCodeAt(t)|0}function bi(e,t,n){return e.slice(t,n)}function zt(e){return e.length}function Tu(e){return e.length}function so(e,t){return t.push(e),e}function Zg(e,t){return e.map(t).join("")}var Os=1,Tr=1,ih=0,ot=0,Te=0,Ar="";function Rs(e,t,n,r,i,o,s){return{value:e,root:t,parent:n,type:r,props:i,children:o,line:Os,column:Tr,length:s,return:""}}function Vr(e,t){return Gg(Rs("",null,null,"",null,null,0),e,{length:-e.length},t)}function e0(){return Te}function t0(){return Te=ot>0?$e(Ar,--ot):0,Tr--,Te===10&&(Tr=1,Os--),Te}function ut(){return Te=ot<ih?$e(Ar,ot++):0,Tr++,Te===10&&(Tr=1,Os++),Te}function Vt(){return $e(Ar,ot)}function To(){return ot}function Di(e,t){return bi(Ar,e,t)}function Ti(e){switch(e){case 0:case 9:case 10:case 13:case 32:return 5;case 33:case 43:case 44:case 47:case 62:case 64:case 126:case 59:case 123:case 125:return 4;case 58:return 3;case 34:case 39:case 40:case 91:return 2;case 41:case 93:return 1}return 0}function oh(e){return Os=Tr=1,ih=zt(Ar=e),ot=0,[]}function sh(e){return Ar="",e}function Po(e){return rh(Di(ot-1,Ea(e===91?e+2:e===40?e+1:e)))}function n0(e){for(;(Te=Vt())&&Te<33;)ut();return Ti(e)>2||Ti(Te)>3?"":" "}function r0(e,t){for(;--t&&ut()&&!(Te<48||Te>102||Te>57&&Te<65||Te>70&&Te<97););return Di(e,To()+(t<6&&Vt()==32&&ut()==32))}function Ea(e){for(;ut();)switch(Te){case e:return ot;case 34:case 39:e!==34&&e!==39&&Ea(Te);break;case 40:e===41&&Ea(e);break;case 92:ut();break}return ot}function i0(e,t){for(;ut()&&e+Te!==57;)if(e+Te===84&&Vt()===47)break;return"/*"+Di(t,ot-1)+"*"+Ps(e===47?e:ut())}function o0(e){for(;!Ti(Vt());)ut();return Di(e,ot)}function s0(e){return sh(Oo("",null,null,null,[""],e=oh(e),0,[0],e))}function Oo(e,t,n,r,i,o,s,l,u){for(var c=0,h=0,f=s,m=0,w=0,g=0,v=1,b=1,p=1,d=0,y="",k=i,_=o,P=r,C=y;b;)switch(g=d,d=ut()){case 40:if(g!=108&&$e(C,f-1)==58){ja(C+=le(Po(d),"&","&\f"),"&\f")!=-1&&(p=-1);break}case 34:case 39:case 91:C+=Po(d);break;case 9:case 10:case 13:case 32:C+=n0(g);break;case 92:C+=r0(To()-1,7);continue;case 47:switch(Vt()){case 42:case 47:so(l0(i0(ut(),To()),t,n),u);break;default:C+="/"}break;case 123*v:l[c++]=zt(C)*p;case 125*v:case 59:case 0:switch(d){case 0:case 125:b=0;case 59+h:p==-1&&(C=le(C,/\f/g,"")),w>0&&zt(C)-f&&so(w>32?Jc(C+";",r,n,f-1):Jc(le(C," ","")+";",r,n,f-2),u);break;case 59:C+=";";default:if(so(P=qc(C,t,n,c,h,i,l,y,k=[],_=[],f),o),d===123)if(h===0)Oo(C,t,P,P,k,o,f,l,_);else switch(m===99&&$e(C,3)===110?100:m){case 100:case 108:case 109:case 115:Oo(e,P,P,r&&so(qc(e,P,P,0,0,i,l,y,i,k=[],f),_),i,_,f,l,r?k:_);break;default:Oo(C,P,P,P,[""],_,0,l,_)}}c=h=w=0,v=p=1,y=C="",f=s;break;case 58:f=1+zt(C),w=g;default:if(v<1){if(d==123)--v;else if(d==125&&v++==0&&t0()==125)continue}switch(C+=Ps(d),d*v){case 38:p=h>0?1:(C+="\f",-1);break;case 44:l[c++]=(zt(C)-1)*p,p=1;break;case 64:Vt()===45&&(C+=Po(ut())),m=Vt(),h=f=zt(y=C+=o0(To())),d++;break;case 45:g===45&&zt(C)==2&&(v=0)}}return o}function qc(e,t,n,r,i,o,s,l,u,c,h){for(var f=i-1,m=i===0?o:[""],w=Tu(m),g=0,v=0,b=0;g<r;++g)for(var p=0,d=bi(e,f+1,f=Xg(v=s[g])),y=e;p<w;++p)(y=rh(v>0?m[p]+" "+d:le(d,/&\f/g,m[p])))&&(u[b++]=y);return Rs(e,t,n,i===0?Cu:l,u,c,h)}function l0(e,t,n){return Rs(e,t,n,th,Ps(e0()),bi(e,2,-2),0)}function Jc(e,t,n,r){return Rs(e,t,n,bu,bi(e,0,r),bi(e,r+1,-1),r)}function wr(e,t){for(var n="",r=Tu(e),i=0;i<r;i++)n+=t(e[i],i,e,t)||"";return n}function a0(e,t,n,r){switch(e.type){case Kg:if(e.children.length)break;case Yg:case bu:return e.return=e.return||e.value;case th:return"";case nh:return e.return=e.value+"{"+wr(e.children,r)+"}";case Cu:e.value=e.props.join(",")}return zt(n=wr(e.children,r))?e.return=e.value+"{"+n+"}":""}function u0(e){var t=Tu(e);return function(n,r,i,o){for(var s="",l=0;l<t;l++)s+=e[l](n,r,i,o)||"";return s}}function c0(e){return function(t){t.root||(t=t.return)&&e(t)}}var d0=function(t,n,r){for(var i=0,o=0;i=o,o=Vt(),i===38&&o===12&&(n[r]=1),!Ti(o);)ut();return Di(t,ot)},f0=function(t,n){var r=-1,i=44;do switch(Ti(i)){case 0:i===38&&Vt()===12&&(n[r]=1),t[r]+=d0(ot-1,n,r);break;case 2:t[r]+=Po(i);break;case 4:if(i===44){t[++r]=Vt()===58?"&\f":"",n[r]=t[r].length;break}default:t[r]+=Ps(i)}while(i=ut());return t},p0=function(t,n){return sh(f0(oh(t),n))},Zc=new WeakMap,h0=function(t){if(!(t.type!=="rule"||!t.parent||t.length<1)){for(var n=t.value,r=t.parent,i=t.column===r.column&&t.line===r.line;r.type!=="rule";)if(r=r.parent,!r)return;if(!(t.props.length===1&&n.charCodeAt(0)!==58&&!Zc.get(r))&&!i){Zc.set(t,!0);for(var o=[],s=p0(n,o),l=r.props,u=0,c=0;u<s.length;u++)for(var h=0;h<l.length;h++,c++)t.props[c]=o[u]?s[u].replace(/&\f/g,l[h]):l[h]+" "+s[u]}}},m0=function(t){if(t.type==="decl"){var n=t.value;n.charCodeAt(0)===108&&n.charCodeAt(2)===98&&(t.return="",t.value="")}};function lh(e,t){switch(qg(e,t)){case 5103:return se+"print-"+e+e;case 5737:case 4201:case 3177:case 3433:case 1641:case 4457:case 2921:case 5572:case 6356:case 5844:case 3191:case 6645:case 3005:case 6391:case 5879:case 5623:case 6135:case 4599:case 4855:case 4215:case 6389:case 5109:case 5365:case 5621:case 3829:return se+e+e;case 5349:case 4246:case 4810:case 6968:case 2756:return se+e+ss+e+Qe+e+e;case 6828:case 4268:return se+e+Qe+e+e;case 6165:return se+e+Qe+"flex-"+e+e;case 5187:return se+e+le(e,/(\w+).+(:[^]+)/,se+"box-$1$2"+Qe+"flex-$1$2")+e;case 5443:return se+e+Qe+"flex-item-"+le(e,/flex-|-self/,"")+e;case 4675:return se+e+Qe+"flex-line-pack"+le(e,/align-content|flex-|-self/,"")+e;case 5548:return se+e+Qe+le(e,"shrink","negative")+e;case 5292:return se+e+Qe+le(e,"basis","preferred-size")+e;case 6060:return se+"box-"+le(e,"-grow","")+se+e+Qe+le(e,"grow","positive")+e;case 4554:return se+le(e,/([^-])(transform)/g,"$1"+se+"$2")+e;case 6187:return le(le(le(e,/(zoom-|grab)/,se+"$1"),/(image-set)/,se+"$1"),e,"")+e;case 5495:case 3959:return le(e,/(image-set\([^]*)/,se+"$1$`$1");case 4968:return le(le(e,/(.+:)(flex-)?(.*)/,se+"box-pack:$3"+Qe+"flex-pack:$3"),/s.+-b[^;]+/,"justify")+se+e+e;case 4095:case 3583:case 4068:case 2532:return le(e,/(.+)-inline(.+)/,se+"$1$2")+e;case 8116:case 7059:case 5753:case 5535:case 5445:case 5701:case 4933:case 4677:case 5533:case 5789:case 5021:case 4765:if(zt(e)-1-t>6)switch($e(e,t+1)){case 109:if($e(e,t+4)!==45)break;case 102:return le(e,/(.+:)(.+)-([^]+)/,"$1"+se+"$2-$3$1"+ss+($e(e,t+3)==108?"$3":"$2-$3"))+e;case 115:return~ja(e,"stretch")?lh(le(e,"stretch","fill-available"),t)+e:e}break;case 4949:if($e(e,t+1)!==115)break;case 6444:switch($e(e,zt(e)-3-(~ja(e,"!important")&&10))){case 107:return le(e,":",":"+se)+e;case 101:return le(e,/(.+:)([^;!]+)(;|!.+)?/,"$1"+se+($e(e,14)===45?"inline-":"")+"box$3$1"+se+"$2$3$1"+Qe+"$2box$3")+e}break;case 5936:switch($e(e,t+11)){case 114:return se+e+Qe+le(e,/[svh]\w+-[tblr]{2}/,"tb")+e;case 108:return se+e+Qe+le(e,/[svh]\w+-[tblr]{2}/,"tb-rl")+e;case 45:return se+e+Qe+le(e,/[svh]\w+-[tblr]{2}/,"lr")+e}return se+e+Qe+e+e}return e}var y0=function(t,n,r,i){if(t.length>-1&&!t.return)switch(t.type){case bu:t.return=lh(t.value,t.length);break;case nh:return wr([Vr(t,{value:le(t.value,"@","@"+se)})],i);case Cu:if(t.length)return Zg(t.props,function(o){switch(Jg(o,/(::plac\w+|:read-\w+)/)){case":read-only":case":read-write":return wr([Vr(t,{props:[le(o,/:(read-\w+)/,":"+ss+"$1")]})],i);case"::placeholder":return wr([Vr(t,{props:[le(o,/:(plac\w+)/,":"+se+"input-$1")]}),Vr(t,{props:[le(o,/:(plac\w+)/,":"+ss+"$1")]}),Vr(t,{props:[le(o,/:(plac\w+)/,Qe+"input-$1")]})],i)}return""})}},g0=[y0],v0=function(t){var n=t.key;if(n==="css"){var r=document.querySelectorAll("style[data-emotion]:not([data-s])");Array.prototype.forEach.call(r,function(v){var b=v.getAttribute("data-emotion");b.indexOf(" ")!==-1&&(document.head.appendChild(v),v.setAttribute("data-s",""))})}var i=t.stylisPlugins||g0,o={},s,l=[];s=t.container||document.head,Array.prototype.forEach.call(document.querySelectorAll('style[data-emotion^="'+n+' "]'),function(v){for(var b=v.getAttribute("data-emotion").split(" "),p=1;p<b.length;p++)o[b[p]]=!0;l.push(v)});var u,c=[h0,m0];{var h,f=[a0,c0(function(v){h.insert(v)})],m=u0(c.concat(i,f)),w=function(b){return wr(s0(b),m)};u=function(b,p,d,y){h=d,w(b?b+"{"+p.styles+"}":p.styles),y&&(g.inserted[p.name]=!0)}}var g={key:n,sheet:new Qg({key:n,container:s,nonce:t.nonce,speedy:t.speedy,prepend:t.prepend,insertionPoint:t.insertionPoint}),nonce:t.nonce,inserted:o,registered:{},insert:u};return g.sheet.hydrate(l),g},x0=!0;function w0(e,t,n){var r="";return n.split(" ").forEach(function(i){e[i]!==void 0?t.push(e[i]+";"):r+=i+" "}),r}var ah=function(t,n,r){var i=t.key+"-"+n.name;(r===!1||x0===!1)&&t.registered[i]===void 0&&(t.registered[i]=n.styles)},k0=function(t,n,r){ah(t,n,r);var i=t.key+"-"+n.name;if(t.inserted[n.name]===void 0){var o=n;do t.insert(n===o?"."+i:"",o,t.sheet,!0),o=o.next;while(o!==void 0)}};function S0(e){for(var t=0,n,r=0,i=e.length;i>=4;++r,i-=4)n=e.charCodeAt(r)&255|(e.charCodeAt(++r)&255)<<8|(e.charCodeAt(++r)&255)<<16|(e.charCodeAt(++r)&255)<<24,n=(n&65535)*1540483477+((n>>>16)*59797<<16),n^=n>>>24,t=(n&65535)*1540483477+((n>>>16)*59797<<16)^(t&65535)*1540483477+((t>>>16)*59797<<16);switch(i){case 3:t^=(e.charCodeAt(r+2)&255)<<16;case 2:t^=(e.charCodeAt(r+1)&255)<<8;case 1:t^=e.charCodeAt(r)&255,t=(t&65535)*1540483477+((t>>>16)*59797<<16)}return t^=t>>>13,t=(t&65535)*1540483477+((t>>>16)*59797<<16),((t^t>>>15)>>>0).toString(36)}var j0={animationIterationCount:1,aspectRatio:1,borderImageOutset:1,borderImageSlice:1,borderImageWidth:1,boxFlex:1,boxFlexGroup:1,boxOrdinalGroup:1,columnCount:1,columns:1,flex:1,flexGrow:1,flexPositive:1,flexShrink:1,flexNegative:1,flexOrder:1,gridRow:1,gridRowEnd:1,gridRowSpan:1,gridRowStart:1,gridColumn:1,gridColumnEnd:1,gridColumnSpan:1,gridColumnStart:1,msGridRow:1,msGridRowSpan:1,msGridColumn:1,msGridColumnSpan:1,fontWeight:1,lineHeight:1,opacity:1,order:1,orphans:1,tabSize:1,widows:1,zIndex:1,zoom:1,WebkitLineClamp:1,fillOpacity:1,floodOpacity:1,stopOpacity:1,strokeDasharray:1,strokeDashoffset:1,strokeMiterlimit:1,strokeOpacity:1,strokeWidth:1},E0=/[A-Z]|^ms/g,_0=/_EMO_([^_]+?)_([^]*?)_EMO_/g,uh=function(t){return t.charCodeAt(1)===45},ed=function(t){return t!=null&&typeof t!="boolean"},fl=eh(function(e){return uh(e)?e:e.replace(E0,"-$&").toLowerCase()}),td=function(t,n){switch(t){case"animation":case"animationName":if(typeof n=="string")return n.replace(_0,function(r,i,o){return Dt={name:i,styles:o,next:Dt},i})}return j0[t]!==1&&!uh(t)&&typeof n=="number"&&n!==0?n+"px":n};function Pi(e,t,n){if(n==null)return"";if(n.__emotion_styles!==void 0)return n;switch(typeof n){case"boolean":return"";case"object":{if(n.anim===1)return Dt={name:n.name,styles:n.styles,next:Dt},n.name;if(n.styles!==void 0){var r=n.next;if(r!==void 0)for(;r!==void 0;)Dt={name:r.name,styles:r.styles,next:Dt},r=r.next;var i=n.styles+";";return i}return C0(e,t,n)}case"function":{if(e!==void 0){var o=Dt,s=n(e);return Dt=o,Pi(e,t,s)}break}}if(t==null)return n;var l=t[n];return l!==void 0?l:n}function C0(e,t,n){var r="";if(Array.isArray(n))for(var i=0;i<n.length;i++)r+=Pi(e,t,n[i])+";";else for(var o in n){var s=n[o];if(typeof s!="object")t!=null&&t[s]!==void 0?r+=o+"{"+t[s]+"}":ed(s)&&(r+=fl(o)+":"+td(o,s)+";");else if(Array.isArray(s)&&typeof s[0]=="string"&&(t==null||t[s[0]]===void 0))for(var l=0;l<s.length;l++)ed(s[l])&&(r+=fl(o)+":"+td(o,s[l])+";");else{var u=Pi(e,t,s);switch(o){case"animation":case"animationName":{r+=fl(o)+":"+u+";";break}default:r+=o+"{"+u+"}"}}}return r}var nd=/label:\s*([^\s;\n{]+)\s*(;|$)/g,Dt,b0=function(t,n,r){if(t.length===1&&typeof t[0]=="object"&&t[0]!==null&&t[0].styles!==void 0)return t[0];var i=!0,o="";Dt=void 0;var s=t[0];s==null||s.raw===void 0?(i=!1,o+=Pi(r,n,s)):o+=s[0];for(var l=1;l<t.length;l++)o+=Pi(r,n,t[l]),i&&(o+=s[l]);nd.lastIndex=0;for(var u="",c;(c=nd.exec(o))!==null;)u+="-"+c[1];var h=S0(o)+u;return{name:h,styles:o,next:Dt}},T0=function(t){return t()},P0=Wu.useInsertionEffect?Wu.useInsertionEffect:!1,O0=P0||T0,ch=we.createContext(typeof HTMLElement<"u"?v0({key:"css"}):null);ch.Provider;var R0=function(t){return we.forwardRef(function(n,r){var i=we.useContext(ch);return t(n,i,r)})},M0=we.createContext({}),A0=Vg,N0=function(t){return t!=="theme"},rd=function(t){return typeof t=="string"&&t.charCodeAt(0)>96?A0:N0},id=function(t,n,r){var i;if(n){var o=n.shouldForwardProp;i=t.__emotion_forwardProp&&o?function(s){return t.__emotion_forwardProp(s)&&o(s)}:o}return typeof i!="function"&&r&&(i=t.__emotion_forwardProp),i},L0=function(t){var n=t.cache,r=t.serialized,i=t.isStringTag;return ah(n,r,i),O0(function(){return k0(n,r,i)}),null},z0=function e(t,n){var r=t.__emotion_real===t,i=r&&t.__emotion_base||t,o,s;n!==void 0&&(o=n.label,s=n.target);var l=id(t,n,r),u=l||rd(i),c=!u("as");return function(){var h=arguments,f=r&&t.__emotion_styles!==void 0?t.__emotion_styles.slice(0):[];if(o!==void 0&&f.push("label:"+o+";"),h[0]==null||h[0].raw===void 0)f.push.apply(f,h);else{f.push(h[0][0]);for(var m=h.length,w=1;w<m;w++)f.push(h[w],h[0][w])}var g=R0(function(v,b,p){var d=c&&v.as||i,y="",k=[],_=v;if(v.theme==null){_={};for(var P in v)_[P]=v[P];_.theme=we.useContext(M0)}typeof v.className=="string"?y=w0(b.registered,k,v.className):v.className!=null&&(y=v.className+" ");var C=b0(f.concat(k),b.registered,_);y+=b.key+"-"+C.name,s!==void 0&&(y+=" "+s);var N=c&&l===void 0?rd(d):u,O={};for(var L in v)c&&L==="as"||N(L)&&(O[L]=v[L]);return O.className=y,O.ref=p,we.createElement(we.Fragment,null,we.createElement(L0,{cache:b,serialized:C,isStringTag:typeof d=="string"}),we.createElement(d,O))});return g.displayName=o!==void 0?o:"Styled("+(typeof i=="string"?i:i.displayName||i.name||"Component")+")",g.defaultProps=t.defaultProps,g.__emotion_real=g,g.__emotion_base=i,g.__emotion_styles=f,g.__emotion_forwardProp=l,Object.defineProperty(g,"toString",{value:function(){return"."+s}}),g.withComponent=function(v,b){return e(v,Sa({},n,b,{shouldForwardProp:id(g,b,!0)})).apply(void 0,f)},g}},D0=["a","abbr","address","area","article","aside","audio","b","base","bdi","bdo","big","blockquote","body","br","button","canvas","caption","cite","code","col","colgroup","data","datalist","dd","del","details","dfn","dialog","div","dl","dt","em","embed","fieldset","figcaption","figure","footer","form","h1","h2","h3","h4","h5","h6","head","header","hgroup","hr","html","i","iframe","img","input","ins","kbd","keygen","label","legend","li","link","main","map","mark","marquee","menu","menuitem","meta","meter","nav","noscript","object","ol","optgroup","option","output","p","param","picture","pre","progress","q","rp","rt","ruby","s","samp","script","section","select","small","source","span","strong","style","sub","summary","sup","table","tbody","td","textarea","tfoot","th","thead","time","title","tr","track","u","ul","var","video","wbr","circle","clipPath","defs","ellipse","foreignObject","g","image","line","linearGradient","mask","path","pattern","polygon","polyline","radialGradient","rect","stop","svg","text","tspan"],E=z0.bind();D0.forEach(function(e){E[e]=E(e)});const F0=E.section`
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
`,I0=E.h2`
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
`,$0=E.div`
  display: flex;
  flex-direction: column;
  gap: 24px;

  @media screen and (min-width: 768px) {
    display: flex;
    flex-direction: row;
    gap: 24px;
  }
`,U0=E.div`
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
`,B0=E.h3`
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
`,V0=E.p`
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
`,An=E.li`
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
`,W0=E.ul`
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
`,pl=E.a`
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
`,hl=E.svg`
  margin-left: 10px;
`,H0=E.div`
  // width: calc((100% - 24px) / 2);
  max-width: 327px;
  border-radius: 16px;

  @media screen and (min-width: 768px) {
    // width: calc((100% - 24px) / 2);
    max-width: 828px;
    border-radius: 16px;
  }
`,Q0=()=>a.jsx(F0,{children:a.jsxs("div",{children:[a.jsx(I0,{children:"Про мене"}),a.jsxs($0,{children:[a.jsx(H0,{children:a.jsxs("picture",{children:[a.jsx("source",{srcSet:`${dl} 2x, ${dl} 1x`,media:"(min-width: 768px)",type:"image/webp"}),a.jsx("source",{srcSet:`${Dg} 2x, ${Fg} 1x`,media:"(min-width: 768px)",type:"image/png"}),a.jsx("source",{srcSet:`${Ug}`,media:"(max-width: 375px)",type:"image/webp"}),a.jsx("source",{srcSet:`${Ig} 2x, ${$g} 1x`,media:"(max-width: 375px)",type:"image/png"}),a.jsx("img",{src:dl,alt:"Ольга Поліщук"})]})}),a.jsxs(U0,{children:[a.jsx(B0,{children:"Ольга Поліщук"}),a.jsx(V0,{children:"CEO and Founder студії стратегічного розвитку"}),a.jsxs("ul",{children:[a.jsx(An,{children:"MBA Healthcare management"}),a.jsx(An,{children:"Викладачка медичного маркетингу Бізнес-школа УКУ (LvBS)"}),a.jsx(An,{children:`Експертка в "Центр Розвитку Громадського Здоров'я УКУ"`}),a.jsx(An,{children:"Бізнес-консультантка, стратег з медичного маркетингу"}),a.jsx(An,{children:'Керівниця проєкту "Стетоскоп" - телеграм канал про медичний менеджмент та маркетингу'}),a.jsx(An,{children:"Більше 18 років досвіду в маркетингу та комунікаціях, з них більше 10 років досвіду в медичному та фармацевтичному бізнесі на керівних посадах"}),a.jsx(An,{children:"Використання принципів доказової медицини"})]}),a.jsxs(W0,{children:[a.jsx("li",{children:a.jsxs(pl,{href:"https://www.linkedin.com/in/olga-polishchuk-83362140/",target:"_blank",rel:"noopener noreferrer",children:["LinkedIn",a.jsx(hl,{width:"24",height:"24",children:a.jsx("use",{href:`${ie}#icon-arrow-up-right`})})]})}),a.jsx("li",{children:a.jsxs(pl,{href:"https://www.facebook.com/olga.polishchuk.14",target:"_blank",rel:"noopener noreferrer",children:["Facebook",a.jsx(hl,{width:"24",height:"24",children:a.jsx("use",{href:`${ie}#icon-arrow-up-right`})})]})}),a.jsx("li",{children:a.jsxs(pl,{href:"https://www.instagram.com/olga_healthm/",target:"_blank",rel:"noopener noreferrer",children:["Instagram",a.jsx(hl,{width:"24",height:"24",children:a.jsx("use",{href:`${ie}#icon-arrow-up-right`})})]})})]})]})]})]})}),Y0=E.section`
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
`,K0=E.h2`
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
`,X0=E.div`
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
`,G0=E.p`
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
`,q0=E.p`
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
`,od=E.div`
  display: flex;
  gap: 16px;
  align-items: center;
  margin-bottom: 16px;
`,J0=E.div`
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
`,Z0=E.h4`
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
`,ev=E.div`
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
`,tv=E.h4`
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
`,nv=E.p`
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
`,rv=E.svg`
  fill: var(--primary-bluedark, #1b3641);
  border-radius: 100px;
  background: rgba(27, 54, 65, 0.2);
  width: 32px;
  height: 32px;
`,iv=E.svg`
  fill: var(--background-white, #fcfcfc);
  border-radius: 100px;
  background: rgba(244, 244, 246, 0.2);
  width: 32px;
  height: 32px;
`,ov=()=>a.jsxs(Y0,{id:"aboutUs",children:[a.jsx(K0,{children:"Про студію"}),a.jsxs(X0,{children:[a.jsx("div",{children:a.jsx(G0,{children:"Студія стратегічного розвитку медичних брендів «Healthy management» надає послуги медичного менеджменту, медичного маркетингу, консалтингу бізнес-процесів та створення стратегій здоров’я для підприємств та бізнесу. Ми співпрацюємо з медичними закладами, лікарями, власниками, керівниками та створюємо спільні стратегії та дії для ефективного просування та розвитку проєктів, використовуючи комплексний підхід"})}),a.jsxs(ev,{children:[a.jsxs(od,{children:[a.jsx(iv,{children:a.jsx("use",{href:`${ie}#icon-star`})}),a.jsx(tv,{children:"Наша місія"})]}),a.jsx(nv,{children:"Будуємо ефективні стратегії по управлінню здоров’ям та створюємо продуктивні дії для популяризації здорового менеджменту"})]}),a.jsxs(J0,{children:[a.jsxs(od,{children:[a.jsx(rv,{children:a.jsx("use",{href:`${ie}#icon-star`})}),a.jsx(Z0,{children:"Наші цінності"})]}),a.jsx(q0,{children:"Повага, довіра, партнерство та експертність. Будуємо нову культуру управління здоровим менеджментом у медичній галузі"})]})]})]}),sv=E.section`
  padding-top: 80px;
  padding-bottom: 80px;
`,lv=E.div`
  width: 100%;
  border-radius: 16px;
  padding: 80px;
  background-color: var(--background-bluedark);
`,av=E.h2`
  margin-bottom: 40px;
  font-size: 48px;
  font-weight: 600;
  line-height: 1.17;
  color: var(--system-default-10);

  & span {
    color: var(--primary-yellow);
  }
`,uv=E.ul`
  display: flex;
  justify-content: space-between;
  gap: 24px;
  padding: 24px 0;
`,cv=E.li`
  display: flex;
  align-items: center;
  width: 284px;
  padding: 24px;
  font-size: 20px;
  font-weight: 600;
  line-height: 1.4;
  border-radius: 16px;
  border: 1px solid var(--background-whitegrey);
  color: var(--system-default-10);
`,dv=[{id:1,tool:"Матриця стейкхолдерів"},{id:2,tool:"SWOT аналіз"},{id:3,tool:"Bussines model canvas"},{id:4,tool:"Value proposition canvas"},{id:5,tool:"Customer journey map"}],fv=()=>a.jsx(sv,{className:"container",children:a.jsxs(lv,{children:[a.jsxs(av,{children:["Бізнес ",a.jsx("span",{children:"інструменти"}),", які використувуємо в партнерстві"]}),a.jsx(uv,{children:dv.map(e=>a.jsx(cv,{children:e.tool},e.id))})]})});var dh={exports:{}},pv="SECRET_DO_NOT_PASS_THIS_OR_YOU_WILL_BE_FIRED",hv=pv,mv=hv;function fh(){}function ph(){}ph.resetWarningCache=fh;var yv=function(){function e(r,i,o,s,l,u){if(u!==mv){var c=new Error("Calling PropTypes validators directly is not supported by the `prop-types` package. Use PropTypes.checkPropTypes() to call them. Read more at http://fb.me/use-check-prop-types");throw c.name="Invariant Violation",c}}e.isRequired=e;function t(){return e}var n={array:e,bigint:e,bool:e,func:e,number:e,object:e,string:e,symbol:e,any:e,arrayOf:t,element:e,elementType:e,instanceOf:t,node:e,objectOf:t,oneOf:t,oneOfType:t,shape:t,exact:t,checkPropTypes:ph,resetWarningCache:fh};return n.PropTypes=n,n};dh.exports=yv();var gv=dh.exports;const Oi=Oa(gv),ml="/healthy-management-project/assets/icon-footer-171yZHoS.svg",vv=E.div`
  padding: 40px 0 0 0;
  background-color: var(--background-bluedark);
`,xv=E.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
  margin-bottom: 40px;
`,wv=E.a`
  font-size: 16px;
  font-weight: 500;
  line-height: 1.5;
  cursor: pointer;
  border-bottom: 1px solid rgba(244, 244, 246, 0.4);
  color: var(--system-default-10);
`,kv=E.div`
  display: flex;
  align-items: center;
  gap: 40px;
`,Wr=E.a`
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
`,Sv=E.div`
  display: flex;
  gap: 40px;
`,jv=E.div`
  display: flex;
  gap: 16px;
  align-items: center;
`,Ev=E.a`
  padding: 8px;

  & svg {
    border-radius: 10px;
    background-color: var(--background-white);
    opacity: 0.8;
  }
`,_v=E.div`
  display: flex;
  flex-direction: column;
`,sd=E.a`
  font-size: 16px;
  font-weight: 500;
  line-height: 1.5;
  color: var(--system-default-10);
`,Cv=E.p`
  padding: 16px 0;
  text-align: center;
  font-size: 12px;
  font-weight: 600;
  line-height: 1.67;
  text-transform: uppercase;
  border-top: 1px solid var(--system-default-20);
  color: var(--system-default-10);
`,bv=E.div`
  position: fixed;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  background-color: rgba(0, 0, 0, 0.5);
  overflow: hidden;
  z-index: 1100;
`,Tv=E.div`
  padding: 80px;
  position: fixed;
  width: 1360px;
  border-radius: 24px;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
  background-color: white;
  z-index: 10000;
`,Pv=E.div`
  height: 32px;
  display: flex;
  justify-content: space-between;
  margin-bottom: 40px;
`,Ov=E.svg`
  width: 24px;
  cursor: pointer;
`,Rv=E.h2`
  font-size: 24px;
  font-weight: 600;
  line-height: 32px;
  color: var(--typography-bluedark);
`,Mv=E.ul`
  display: flex;
  flex-wrap: wrap;
  gap: 24px;
`,ln=E.li`
  width: 282px;
  padding: 24px;
  gap: 16px;

  border-radius: 16px;
  background: var(--background-bluedark);
  box-shadow: 0px 0px 8px 0px rgba(27, 54, 65, 0.08);
`,an=E.h3`
  display: flex;
  justify-content: center;
  gap: 8px;

  font-size: 16px;
  font-weight: 600;
  line-height: 24px;
  text-align: center;
  color: var(--typography-white);
`,un=E.p`
  display: flex;
  justify-content: center;

  font-size: 14px;
  font-weight: 500;
  line-height: 18px;
  color: var(--typography-white);
`,cn=E.div`
  gap: 16px;
  display: flex;
  flex-direction: column;
  justify-content: center;
`,ld="/healthy-management-project/assets/Jilia_Kopytko-mYhzlt_-.webp",Av="/healthy-management-project/assets/Jilia_Kopytko@2x-gruKrAtD.jpg",ad="/healthy-management-project/assets/Yelyzaveta_Domanska-Ru7up7Pj.webp",Nv="/healthy-management-project/assets/Yelyzaveta_Domanska@2x-BYkqrL88.jpg",ud="/healthy-management-project/assets/Oleksandr_Natalukha-YKEBbXyu.webp",Lv="/healthy-management-project/assets/Oleksandr_Natalukha@2x-5OsrctvL.jpg",cd="/healthy-management-project/assets/Valentyn_Havrylenko-ouVcypag.webp",zv="/healthy-management-project/assets/Valentyn_Havrylenko@2x-xBjJM6nL.jpg",dd="/healthy-management-project/assets/Olha_Abent-lPe8g7w1.webp",Dv="/healthy-management-project/assets/Olha_Abent@2x-fGgXmj71.jpg",fd="/healthy-management-project/assets/Viktoriia_Moryc-tWw5-4of.webp",Fv="/healthy-management-project/assets/Viktoriia_Moryc@2x-AxiRex6x.jpg",pd="/healthy-management-project/assets/Vyacheslav_Pavlyuk-py_hj3lz.webp",Iv="/healthy-management-project/assets/Vyacheslav_Pavlyuk@2x-2qCtSSAb.jpg",hd="/healthy-management-project/assets/Yaroslav_Li-nn0P6bIv.webp",$v="/healthy-management-project/assets/Yaroslav_Li@2x-xfuqLdiI.jpg",hh=({handleClose:e,isModalOpen:t})=>{const n=i=>{i.target===i.currentTarget&&e()};we.useEffect(()=>{const i=document.body,o=()=>{t?i.classList.add("body-no-scroll"):i.classList.remove("body-no-scroll")},s=l=>{l.code==="Escape"&&t&&e()};return o(),window.addEventListener("keydown",s),()=>{window.removeEventListener("keydown",s)}},[e,t]);const r=document.getElementById("modal");return t?zg.createPortal(a.jsx(bv,{onClick:n,children:a.jsxs(Tv,{isModalOpen:t,children:[a.jsxs(Pv,{children:[a.jsx(Rv,{children:"Команда, яка створила сторінку"}),a.jsx(Ov,{onClick:e,children:a.jsx("use",{href:`${ie}#icon-close`})})]}),a.jsxs(Mv,{children:[a.jsxs(ln,{children:[a.jsxs(cn,{children:[a.jsx("img",{src:fd,srcSet:`${fd} 1x, ${Fv} 2x`,alt:"Вікторія Мориц"}),a.jsxs(an,{children:["Вікторія Мориц",a.jsx("a",{href:"https://www.linkedin.com/in/viktoriia-moryc-61610962/",target:"_blank",rel:"noopener noreferrer",children:a.jsx("svg",{width:"24",height:"24",children:a.jsx("use",{href:`${ie}#icon-linkedin`})})})]})]}),a.jsx(un,{children:"Project Manager"})]}),a.jsxs(ln,{children:[a.jsxs(cn,{children:[a.jsx("img",{src:ld,srcSet:`${ld} 1x, ${Av} 2x`,alt:"Юлія Копитко"}),a.jsxs(an,{children:["Юлія Копитко",a.jsx("a",{href:"https://www.linkedin.com/in/juliakopytko/",target:"_blank",rel:"noopener noreferrer",children:a.jsx("svg",{width:"24",height:"24",children:a.jsx("use",{href:`${ie}#icon-linkedin`})})})]})]}),a.jsx(un,{children:"UX/UI Designer"})]}),a.jsxs(ln,{children:[a.jsxs(cn,{children:[a.jsx("img",{src:hd,srcSet:`${hd} 1x, ${$v} 2x`,alt:"Ярослав Лі"}),a.jsxs(an,{children:["Ярослав Лі",a.jsx("a",{href:"https://www.linkedin.com/in/yaroslav-lee-b7070b294",target:"_blank",rel:"noopener noreferrer",children:a.jsx("svg",{width:"24",height:"24",children:a.jsx("use",{href:`${ie}#icon-linkedin`})})})]})]}),a.jsx(un,{children:"Frontend Developer"})]}),a.jsxs(ln,{children:[a.jsxs(cn,{children:[a.jsx("img",{src:ad,srcSet:`${ad} 1x, ${Nv} 2x`,alt:"Єлизавета Доманська"}),a.jsxs(an,{children:["Єлизавета Доманська",a.jsx("a",{href:"https://www.linkedin.com/in/yelyzaveta-domanska-2185a5292/",target:"_blank",rel:"noopener noreferrer",children:a.jsx("svg",{width:"24",height:"24",children:a.jsx("use",{href:`${ie}#icon-linkedin`})})})]})]}),a.jsx(un,{children:"Frontend Developer"})]}),a.jsxs(ln,{children:[a.jsxs(cn,{children:[a.jsx("img",{src:ud,srcSet:`${ud} 1x, ${Lv} 2x`,alt:"Олександр Наталуха"}),a.jsxs(an,{children:["Олександр Наталуха",a.jsx("a",{href:"https://www.linkedin.com/in/oleksandr-natalukha",target:"_blank",rel:"noopener noreferrer",children:a.jsx("svg",{width:"24",height:"24",children:a.jsx("use",{href:`${ie}#icon-linkedin`})})})]})]}),a.jsx(un,{children:"Frontend Developer"})]}),a.jsxs(ln,{children:[a.jsxs(cn,{children:[a.jsx("img",{src:cd,srcSet:`${cd} 1x, ${zv} 2x`,alt:"Валентин Гавриленко"}),a.jsxs(an,{children:["Валентин Гавриленко",a.jsx("a",{href:"https://www.linkedin.com/in/valentyn-havrylenko/",target:"_blank",rel:"noopener noreferrer",children:a.jsx("svg",{width:"24",height:"24",children:a.jsx("use",{href:`${ie}#icon-linkedin`})})})]})]}),a.jsx(un,{children:"Frontend Developer"})]}),a.jsxs(ln,{children:[a.jsxs(cn,{children:[a.jsx("img",{src:pd,srcSet:`${pd} 1x, ${Iv} 2x`,alt:"В´ячеслав Павлюк"}),a.jsxs(an,{children:["В'ячеслав Павлюк",a.jsx("a",{href:"https://www.linkedin.com/in/vyacheslav-pavlyuk/",target:"_blank",rel:"noopener noreferrer",children:a.jsx("svg",{width:"24",height:"24",children:a.jsx("use",{href:`${ie}#icon-linkedin`})})})]})]}),a.jsx(un,{children:"Fullstack Developer"})]}),a.jsxs(ln,{children:[a.jsxs(cn,{children:[a.jsx("img",{src:dd,srcSet:`${dd} 1x, ${Dv} 2x`,alt:"Ольга Абент"}),a.jsxs(an,{children:["Ольга Абент",a.jsx("a",{href:"https://www.linkedin.com/in/abentolga/",target:"_blank",rel:"noopener noreferrer",children:a.jsx("svg",{width:"24",height:"24",children:a.jsx("use",{href:`${ie}#icon-linkedin`})})})]})]}),a.jsx(un,{children:"QA Engineer"})]})]})]})}),r):null};hh.propTypes={handleClose:Oi.func.isRequired,isModalOpen:Oi.bool.isRequired};const mh=({handleSetActiveLink:e})=>{const[t,n]=we.useState(!1),r=()=>{n(!0)},i=()=>{n(!1)};return a.jsxs(vv,{id:"footer",children:[a.jsxs(xv,{className:"container",children:[a.jsx("svg",{width:"227",height:"40",children:a.jsx("use",{href:`${ml}#logo-white`})}),a.jsx(wv,{onClick:r,children:"created by GoIT students"}),a.jsx(hh,{handleClose:i,isModalOpen:t}),a.jsxs(kv,{children:[a.jsx(Wr,{href:"#home",onClick:o=>e("home",o),children:"Головна"}),a.jsx(Wr,{href:"#aboutUs",onClick:o=>e("aboutUs",o),children:"Про нас"}),a.jsx(Wr,{href:"#services",onClick:o=>e("services",o),children:"Послуги"}),a.jsx(Wr,{href:"#mentoring",onClick:o=>e("mentoring",o),children:"Менторство"}),a.jsx(Wr,{href:"#projects",onClick:o=>e("projects",o),children:"Проєкти"})]}),a.jsxs(Sv,{children:[a.jsxs(jv,{children:[a.jsx(Ev,{href:"https://www.facebook.com/profile.php?id=61551346490841",target:"_blank",rel:"noopener noreferrer",children:a.jsx("svg",{width:"32",height:"32",children:a.jsx("use",{href:`${ml}#facebook`})})}),a.jsx("a",{href:"https://www.instagram.com/healthymanagement_ua/",target:"_blank",rel:"noopener noreferrer",children:a.jsx("svg",{width:"40",height:"40",children:a.jsx("use",{href:`${ml}#instagram`})})})]}),a.jsxs(_v,{children:[a.jsx(sd,{href:"mailto:managementhealthy@gmail.com",children:"managementhealthy@gmail.com"}),a.jsx(sd,{href:"tel:+380673160556",children:"+380 673 160 556"})]})]})]}),a.jsx(Cv,{children:"© 2023 healthy managment. All rights reserved"})]})};mh.propTypes={handleSetActiveLink:Oi.func.isRequired};const ls="/healthy-management-project/assets/symbol-defs-t7xx9-KA.svg",Uv=E.header`
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
`,Bv=E.div`
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
`,Vv=E.nav`
  display: flex;
  gap: 40px;
  align-items: center;
`,Hr=E.a`
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
`,Wv=E.a`
  display: flex;
  max-width: 156px;
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
    max-width: 260px;
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
`,Hv=E.svg`
  stroke: black;
  width: 40px;
  height: 40px;
`,Qv=E.button`
  border: none;
  padding: 0;
  margin: 0;
  text-decoration: none;
  font-family: inherit;
  font-size: 100%;
  cursor: pointer;
  background: none;
`;var yh={exports:{}};(function(e,t){(function(r,i){e.exports=i(we)})(dm,n=>(()=>{var r={"./node_modules/css-mediaquery/index.js":(l,u)=>{u.match=g,u.parse=v;var c=/(?:(only|not)?\s*([^\s\(\)]+)(?:\s*and)?\s*)?(.+)?/i,h=/\(\s*([^\s\:\)]+)\s*(?:\:\s*([^\s\)]+))?\s*\)/,f=/^(?:(min|max)-)?(.+)/,m=/(em|rem|px|cm|mm|in|pt|pc)?$/,w=/(dpi|dpcm|dppx)?$/;function g(y,k){return v(y).some(function(_){var P=_.inverse,C=_.type==="all"||k.type===_.type;if(C&&P||!(C||P))return!1;var N=_.expressions.every(function(O){var L=O.feature,W=O.modifier,$=O.value,D=k[L];if(!D)return!1;switch(L){case"orientation":case"scan":return D.toLowerCase()===$.toLowerCase();case"width":case"height":case"device-width":case"device-height":$=d($),D=d(D);break;case"resolution":$=p($),D=p(D);break;case"aspect-ratio":case"device-aspect-ratio":case"device-pixel-ratio":$=b($),D=b(D);break;case"grid":case"color":case"color-index":case"monochrome":$=parseInt($,10)||1,D=parseInt(D,10)||0;break}switch(W){case"min":return D>=$;case"max":return D<=$;default:return D===$}});return N&&!P||!N&&P})}function v(y){return y.split(",").map(function(k){k=k.trim();var _=k.match(c),P=_[1],C=_[2],N=_[3]||"",O={};return O.inverse=!!P&&P.toLowerCase()==="not",O.type=C?C.toLowerCase():"all",N=N.match(/\([^\)]+\)/g)||[],O.expressions=N.map(function(L){var W=L.match(h),$=W[1].toLowerCase().match(f);return{modifier:$[1],feature:$[2],value:W[2]}}),O})}function b(y){var k=Number(y),_;return k||(_=y.match(/^(\d+)\s*\/\s*(\d+)$/),k=_[1]/_[2]),k}function p(y){var k=parseFloat(y),_=String(y).match(w)[1];switch(_){case"dpcm":return k/2.54;case"dppx":return k*96;default:return k}}function d(y){var k=parseFloat(y),_=String(y).match(m)[1];switch(_){case"em":return k*16;case"rem":return k*16;case"cm":return k*96/2.54;case"mm":return k*96/2.54/10;case"in":return k*96;case"pt":return k*72;case"pc":return k*72/12;default:return k}}},"./node_modules/hyphenate-style-name/index.js":(l,u,c)=>{c.r(u),c.d(u,{default:()=>v});var h=/[A-Z]/g,f=/^ms-/,m={};function w(b){return"-"+b.toLowerCase()}function g(b){if(m.hasOwnProperty(b))return m[b];var p=b.replace(h,w);return m[b]=f.test(p)?"-"+p:p}const v=g},"./node_modules/matchmediaquery/index.js":(l,u,c)=>{var h=c("./node_modules/css-mediaquery/index.js").match,f=typeof window<"u"?window.matchMedia:null;function m(g,v,b){var p=this;if(f&&!b){var d=f.call(window,g);this.matches=d.matches,this.media=d.media,d.addListener(_)}else this.matches=h(g,v),this.media=g;this.addListener=y,this.removeListener=k,this.dispose=P;function y(C){d&&d.addListener(C)}function k(C){d&&d.removeListener(C)}function _(C){p.matches=C.matches,p.media=C.media}function P(){d&&d.removeListener(_)}}function w(g,v,b){return new m(g,v,b)}l.exports=w},"./node_modules/object-assign/index.js":l=>{/*
object-assign
(c) Sindre Sorhus
@license MIT
*/var u=Object.getOwnPropertySymbols,c=Object.prototype.hasOwnProperty,h=Object.prototype.propertyIsEnumerable;function f(w){if(w==null)throw new TypeError("Object.assign cannot be called with null or undefined");return Object(w)}function m(){try{if(!Object.assign)return!1;var w=new String("abc");if(w[5]="de",Object.getOwnPropertyNames(w)[0]==="5")return!1;for(var g={},v=0;v<10;v++)g["_"+String.fromCharCode(v)]=v;var b=Object.getOwnPropertyNames(g).map(function(d){return g[d]});if(b.join("")!=="0123456789")return!1;var p={};return"abcdefghijklmnopqrst".split("").forEach(function(d){p[d]=d}),Object.keys(Object.assign({},p)).join("")==="abcdefghijklmnopqrst"}catch{return!1}}l.exports=m()?Object.assign:function(w,g){for(var v,b=f(w),p,d=1;d<arguments.length;d++){v=Object(arguments[d]);for(var y in v)c.call(v,y)&&(b[y]=v[y]);if(u){p=u(v);for(var k=0;k<p.length;k++)h.call(v,p[k])&&(b[p[k]]=v[p[k]])}}return b}},"./node_modules/prop-types/checkPropTypes.js":(l,u,c)=>{var h=function(){};{var f=c("./node_modules/prop-types/lib/ReactPropTypesSecret.js"),m={},w=c("./node_modules/prop-types/lib/has.js");h=function(v){var b="Warning: "+v;typeof console<"u"&&console.error(b);try{throw new Error(b)}catch{}}}function g(v,b,p,d,y){for(var k in v)if(w(v,k)){var _;try{if(typeof v[k]!="function"){var P=Error((d||"React class")+": "+p+" type `"+k+"` is invalid; it must be a function, usually from the `prop-types` package, but received `"+typeof v[k]+"`.This often happens because of typos such as `PropTypes.function` instead of `PropTypes.func`.");throw P.name="Invariant Violation",P}_=v[k](b,k,d,p,null,f)}catch(N){_=N}if(_&&!(_ instanceof Error)&&h((d||"React class")+": type specification of "+p+" `"+k+"` is invalid; the type checker function must return `null` or an `Error` but returned a "+typeof _+". You may have forgotten to pass an argument to the type checker creator (arrayOf, instanceOf, objectOf, oneOf, oneOfType, and shape all require an argument)."),_ instanceof Error&&!(_.message in m)){m[_.message]=!0;var C=y?y():"";h("Failed "+p+" type: "+_.message+(C??""))}}}g.resetWarningCache=function(){m={}},l.exports=g},"./node_modules/prop-types/factoryWithTypeCheckers.js":(l,u,c)=>{var h=c("./node_modules/react-is/index.js"),f=c("./node_modules/object-assign/index.js"),m=c("./node_modules/prop-types/lib/ReactPropTypesSecret.js"),w=c("./node_modules/prop-types/lib/has.js"),g=c("./node_modules/prop-types/checkPropTypes.js"),v=function(){};v=function(p){var d="Warning: "+p;typeof console<"u"&&console.error(d);try{throw new Error(d)}catch{}};function b(){return null}l.exports=function(p,d){var y=typeof Symbol=="function"&&Symbol.iterator,k="@@iterator";function _(M){var B=M&&(y&&M[y]||M[k]);if(typeof B=="function")return B}var P="<<anonymous>>",C={array:W("array"),bigint:W("bigint"),bool:W("boolean"),func:W("function"),number:W("number"),object:W("object"),string:W("string"),symbol:W("symbol"),any:$(),arrayOf:D,element:X(),elementType:ue(),instanceOf:de,node:Y(),objectOf:I,oneOf:Ne,oneOfType:H,shape:he,exact:St};function N(M,B){return M===B?M!==0||1/M===1/B:M!==M&&B!==B}function O(M,B){this.message=M,this.data=B&&typeof B=="object"?B:{},this.stack=""}O.prototype=Error.prototype;function L(M){var B={},G=0;function q(te,J,Z,re,x,j,S){if(re=re||P,j=j||Z,S!==m){if(d){var F=new Error("Calling PropTypes validators directly is not supported by the `prop-types` package. Use `PropTypes.checkPropTypes()` to call them. Read more at http://fb.me/use-check-prop-types");throw F.name="Invariant Violation",F}else if(typeof console<"u"){var z=re+":"+Z;!B[z]&&G<3&&(v("You are manually calling a React.PropTypes validation function for the `"+j+"` prop on `"+re+"`. This is deprecated and will throw in the standalone `prop-types` package. You may be seeing this warning due to a third-party PropTypes library. See https://fb.me/react-warning-dont-call-proptypes for details."),B[z]=!0,G++)}}return J[Z]==null?te?J[Z]===null?new O("The "+x+" `"+j+"` is marked as required "+("in `"+re+"`, but its value is `null`.")):new O("The "+x+" `"+j+"` is marked as required in "+("`"+re+"`, but its value is `undefined`.")):null:M(J,Z,re,x,j)}var K=q.bind(null,!1);return K.isRequired=q.bind(null,!0),K}function W(M){function B(G,q,K,te,J,Z){var re=G[q],x=Ce(re);if(x!==M){var j=De(re);return new O("Invalid "+te+" `"+J+"` of type "+("`"+j+"` supplied to `"+K+"`, expected ")+("`"+M+"`."),{expectedType:M})}return null}return L(B)}function $(){return L(b)}function D(M){function B(G,q,K,te,J){if(typeof M!="function")return new O("Property `"+J+"` of component `"+K+"` has invalid PropType notation inside arrayOf.");var Z=G[q];if(!Array.isArray(Z)){var re=Ce(Z);return new O("Invalid "+te+" `"+J+"` of type "+("`"+re+"` supplied to `"+K+"`, expected an array."))}for(var x=0;x<Z.length;x++){var j=M(Z,x,K,te,J+"["+x+"]",m);if(j instanceof Error)return j}return null}return L(B)}function X(){function M(B,G,q,K,te){var J=B[G];if(!p(J)){var Z=Ce(J);return new O("Invalid "+K+" `"+te+"` of type "+("`"+Z+"` supplied to `"+q+"`, expected a single ReactElement."))}return null}return L(M)}function ue(){function M(B,G,q,K,te){var J=B[G];if(!h.isValidElementType(J)){var Z=Ce(J);return new O("Invalid "+K+" `"+te+"` of type "+("`"+Z+"` supplied to `"+q+"`, expected a single ReactElement type."))}return null}return L(M)}function de(M){function B(G,q,K,te,J){if(!(G[q]instanceof M)){var Z=M.name||P,re=on(G[q]);return new O("Invalid "+te+" `"+J+"` of type "+("`"+re+"` supplied to `"+K+"`, expected ")+("instance of `"+Z+"`."))}return null}return L(B)}function Ne(M){if(!Array.isArray(M))return arguments.length>1?v("Invalid arguments supplied to oneOf, expected an array, got "+arguments.length+" arguments. A common mistake is to write oneOf(x, y, z) instead of oneOf([x, y, z])."):v("Invalid argument supplied to oneOf, expected an array."),b;function B(G,q,K,te,J){for(var Z=G[q],re=0;re<M.length;re++)if(N(Z,M[re]))return null;var x=JSON.stringify(M,function(S,F){var z=De(F);return z==="symbol"?String(F):F});return new O("Invalid "+te+" `"+J+"` of value `"+String(Z)+"` "+("supplied to `"+K+"`, expected one of "+x+"."))}return L(B)}function I(M){function B(G,q,K,te,J){if(typeof M!="function")return new O("Property `"+J+"` of component `"+K+"` has invalid PropType notation inside objectOf.");var Z=G[q],re=Ce(Z);if(re!=="object")return new O("Invalid "+te+" `"+J+"` of type "+("`"+re+"` supplied to `"+K+"`, expected an object."));for(var x in Z)if(w(Z,x)){var j=M(Z,x,K,te,J+"."+x,m);if(j instanceof Error)return j}return null}return L(B)}function H(M){if(!Array.isArray(M))return v("Invalid argument supplied to oneOfType, expected an instance of array."),b;for(var B=0;B<M.length;B++){var G=M[B];if(typeof G!="function")return v("Invalid argument supplied to oneOfType. Expected an array of check functions, but received "+Xn(G)+" at index "+B+"."),b}function q(K,te,J,Z,re){for(var x=[],j=0;j<M.length;j++){var S=M[j],F=S(K,te,J,Z,re,m);if(F==null)return null;F.data&&w(F.data,"expectedType")&&x.push(F.data.expectedType)}var z=x.length>0?", expected one of type ["+x.join(", ")+"]":"";return new O("Invalid "+Z+" `"+re+"` supplied to "+("`"+J+"`"+z+"."))}return L(q)}function Y(){function M(B,G,q,K,te){return Ve(B[G])?null:new O("Invalid "+K+" `"+te+"` supplied to "+("`"+q+"`, expected a ReactNode."))}return L(M)}function ae(M,B,G,q,K){return new O((M||"React class")+": "+B+" type `"+G+"."+q+"` is invalid; it must be a function, usually from the `prop-types` package, but received `"+K+"`.")}function he(M){function B(G,q,K,te,J){var Z=G[q],re=Ce(Z);if(re!=="object")return new O("Invalid "+te+" `"+J+"` of type `"+re+"` "+("supplied to `"+K+"`, expected `object`."));for(var x in M){var j=M[x];if(typeof j!="function")return ae(K,te,J,x,De(j));var S=j(Z,x,K,te,J+"."+x,m);if(S)return S}return null}return L(B)}function St(M){function B(G,q,K,te,J){var Z=G[q],re=Ce(Z);if(re!=="object")return new O("Invalid "+te+" `"+J+"` of type `"+re+"` "+("supplied to `"+K+"`, expected `object`."));var x=f({},G[q],M);for(var j in x){var S=M[j];if(w(M,j)&&typeof S!="function")return ae(K,te,J,j,De(S));if(!S)return new O("Invalid "+te+" `"+J+"` key `"+j+"` supplied to `"+K+"`.\nBad object: "+JSON.stringify(G[q],null,"  ")+`
Valid keys: `+JSON.stringify(Object.keys(M),null,"  "));var F=S(Z,j,K,te,J+"."+j,m);if(F)return F}return null}return L(B)}function Ve(M){switch(typeof M){case"number":case"string":case"undefined":return!0;case"boolean":return!M;case"object":if(Array.isArray(M))return M.every(Ve);if(M===null||p(M))return!0;var B=_(M);if(B){var G=B.call(M),q;if(B!==M.entries){for(;!(q=G.next()).done;)if(!Ve(q.value))return!1}else for(;!(q=G.next()).done;){var K=q.value;if(K&&!Ve(K[1]))return!1}}else return!1;return!0;default:return!1}}function At(M,B){return M==="symbol"?!0:B?B["@@toStringTag"]==="Symbol"||typeof Symbol=="function"&&B instanceof Symbol:!1}function Ce(M){var B=typeof M;return Array.isArray(M)?"array":M instanceof RegExp?"object":At(B,M)?"symbol":B}function De(M){if(typeof M>"u"||M===null)return""+M;var B=Ce(M);if(B==="object"){if(M instanceof Date)return"date";if(M instanceof RegExp)return"regexp"}return B}function Xn(M){var B=De(M);switch(B){case"array":case"object":return"an "+B;case"boolean":case"date":case"regexp":return"a "+B;default:return B}}function on(M){return!M.constructor||!M.constructor.name?P:M.constructor.name}return C.checkPropTypes=g,C.resetWarningCache=g.resetWarningCache,C.PropTypes=C,C}},"./node_modules/prop-types/index.js":(l,u,c)=>{{var h=c("./node_modules/react-is/index.js"),f=!0;l.exports=c("./node_modules/prop-types/factoryWithTypeCheckers.js")(h.isElement,f)}},"./node_modules/prop-types/lib/ReactPropTypesSecret.js":l=>{var u="SECRET_DO_NOT_PASS_THIS_OR_YOU_WILL_BE_FIRED";l.exports=u},"./node_modules/prop-types/lib/has.js":l=>{l.exports=Function.call.bind(Object.prototype.hasOwnProperty)},"./node_modules/react-is/cjs/react-is.development.js":(l,u)=>{/** @license React v16.13.1
 * react-is.development.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */(function(){var c=typeof Symbol=="function"&&Symbol.for,h=c?Symbol.for("react.element"):60103,f=c?Symbol.for("react.portal"):60106,m=c?Symbol.for("react.fragment"):60107,w=c?Symbol.for("react.strict_mode"):60108,g=c?Symbol.for("react.profiler"):60114,v=c?Symbol.for("react.provider"):60109,b=c?Symbol.for("react.context"):60110,p=c?Symbol.for("react.async_mode"):60111,d=c?Symbol.for("react.concurrent_mode"):60111,y=c?Symbol.for("react.forward_ref"):60112,k=c?Symbol.for("react.suspense"):60113,_=c?Symbol.for("react.suspense_list"):60120,P=c?Symbol.for("react.memo"):60115,C=c?Symbol.for("react.lazy"):60116,N=c?Symbol.for("react.block"):60121,O=c?Symbol.for("react.fundamental"):60117,L=c?Symbol.for("react.responder"):60118,W=c?Symbol.for("react.scope"):60119;function $(S){return typeof S=="string"||typeof S=="function"||S===m||S===d||S===g||S===w||S===k||S===_||typeof S=="object"&&S!==null&&(S.$$typeof===C||S.$$typeof===P||S.$$typeof===v||S.$$typeof===b||S.$$typeof===y||S.$$typeof===O||S.$$typeof===L||S.$$typeof===W||S.$$typeof===N)}function D(S){if(typeof S=="object"&&S!==null){var F=S.$$typeof;switch(F){case h:var z=S.type;switch(z){case p:case d:case m:case g:case w:case k:return z;default:var A=z&&z.$$typeof;switch(A){case b:case y:case C:case P:case v:return A;default:return F}}case f:return F}}}var X=p,ue=d,de=b,Ne=v,I=h,H=y,Y=m,ae=C,he=P,St=f,Ve=g,At=w,Ce=k,De=!1;function Xn(S){return De||(De=!0,console.warn("The ReactIs.isAsyncMode() alias has been deprecated, and will be removed in React 17+. Update your code to use ReactIs.isConcurrentMode() instead. It has the exact same API.")),on(S)||D(S)===p}function on(S){return D(S)===d}function M(S){return D(S)===b}function B(S){return D(S)===v}function G(S){return typeof S=="object"&&S!==null&&S.$$typeof===h}function q(S){return D(S)===y}function K(S){return D(S)===m}function te(S){return D(S)===C}function J(S){return D(S)===P}function Z(S){return D(S)===f}function re(S){return D(S)===g}function x(S){return D(S)===w}function j(S){return D(S)===k}u.AsyncMode=X,u.ConcurrentMode=ue,u.ContextConsumer=de,u.ContextProvider=Ne,u.Element=I,u.ForwardRef=H,u.Fragment=Y,u.Lazy=ae,u.Memo=he,u.Portal=St,u.Profiler=Ve,u.StrictMode=At,u.Suspense=Ce,u.isAsyncMode=Xn,u.isConcurrentMode=on,u.isContextConsumer=M,u.isContextProvider=B,u.isElement=G,u.isForwardRef=q,u.isFragment=K,u.isLazy=te,u.isMemo=J,u.isPortal=Z,u.isProfiler=re,u.isStrictMode=x,u.isSuspense=j,u.isValidElementType=$,u.typeOf=D})()},"./node_modules/react-is/index.js":(l,u,c)=>{l.exports=c("./node_modules/react-is/cjs/react-is.development.js")},"./node_modules/shallow-equal/dist/index.esm.js":(l,u,c)=>{c.r(u),c.d(u,{shallowEqualArrays:()=>f,shallowEqualObjects:()=>h});function h(m,w){if(m===w)return!0;if(!m||!w)return!1;var g=Object.keys(m),v=Object.keys(w),b=g.length;if(v.length!==b)return!1;for(var p=0;p<b;p++){var d=g[p];if(m[d]!==w[d]||!Object.prototype.hasOwnProperty.call(w,d))return!1}return!0}function f(m,w){if(m===w)return!0;if(!m||!w)return!1;var g=m.length;if(w.length!==g)return!1;for(var v=0;v<g;v++)if(m[v]!==w[v])return!1;return!0}},"./src/Component.ts":function(l,u,c){var h=this&&this.__rest||function(g,v){var b={};for(var p in g)Object.prototype.hasOwnProperty.call(g,p)&&v.indexOf(p)<0&&(b[p]=g[p]);if(g!=null&&typeof Object.getOwnPropertySymbols=="function")for(var d=0,p=Object.getOwnPropertySymbols(g);d<p.length;d++)v.indexOf(p[d])<0&&Object.prototype.propertyIsEnumerable.call(g,p[d])&&(b[p[d]]=g[p[d]]);return b},f=this&&this.__importDefault||function(g){return g&&g.__esModule?g:{default:g}};Object.defineProperty(u,"__esModule",{value:!0});var m=f(c("./src/useMediaQuery.ts")),w=function(g){var v=g.children,b=g.device,p=g.onChange,d=h(g,["children","device","onChange"]),y=(0,m.default)(d,b,p);return typeof v=="function"?v(y):y?v:null};u.default=w},"./src/Context.ts":(l,u,c)=>{Object.defineProperty(u,"__esModule",{value:!0});var h=c("react"),f=(0,h.createContext)(void 0);u.default=f},"./src/index.ts":function(l,u,c){var h=this&&this.__importDefault||function(v){return v&&v.__esModule?v:{default:v}};Object.defineProperty(u,"__esModule",{value:!0}),u.Context=u.toQuery=u.useMediaQuery=u.default=void 0;var f=h(c("./src/useMediaQuery.ts"));u.useMediaQuery=f.default;var m=h(c("./src/Component.ts"));u.default=m.default;var w=h(c("./src/toQuery.ts"));u.toQuery=w.default;var g=h(c("./src/Context.ts"));u.Context=g.default},"./src/mediaQuery.ts":function(l,u,c){var h=this&&this.__assign||function(){return h=Object.assign||function(k){for(var _,P=1,C=arguments.length;P<C;P++){_=arguments[P];for(var N in _)Object.prototype.hasOwnProperty.call(_,N)&&(k[N]=_[N])}return k},h.apply(this,arguments)},f=this&&this.__rest||function(k,_){var P={};for(var C in k)Object.prototype.hasOwnProperty.call(k,C)&&_.indexOf(C)<0&&(P[C]=k[C]);if(k!=null&&typeof Object.getOwnPropertySymbols=="function")for(var N=0,C=Object.getOwnPropertySymbols(k);N<C.length;N++)_.indexOf(C[N])<0&&Object.prototype.propertyIsEnumerable.call(k,C[N])&&(P[C[N]]=k[C[N]]);return P},m=this&&this.__importDefault||function(k){return k&&k.__esModule?k:{default:k}};Object.defineProperty(u,"__esModule",{value:!0});var w=m(c("./node_modules/prop-types/index.js")),g=w.default.oneOfType([w.default.string,w.default.number]),v={all:w.default.bool,grid:w.default.bool,aural:w.default.bool,braille:w.default.bool,handheld:w.default.bool,print:w.default.bool,projection:w.default.bool,screen:w.default.bool,tty:w.default.bool,tv:w.default.bool,embossed:w.default.bool},b={orientation:w.default.oneOf(["portrait","landscape"]),scan:w.default.oneOf(["progressive","interlace"]),aspectRatio:w.default.string,deviceAspectRatio:w.default.string,height:g,deviceHeight:g,width:g,deviceWidth:g,color:w.default.bool,colorIndex:w.default.bool,monochrome:w.default.bool,resolution:g,type:Object.keys(v)};b.type;var p=f(b,["type"]),d=h({minAspectRatio:w.default.string,maxAspectRatio:w.default.string,minDeviceAspectRatio:w.default.string,maxDeviceAspectRatio:w.default.string,minHeight:g,maxHeight:g,minDeviceHeight:g,maxDeviceHeight:g,minWidth:g,maxWidth:g,minDeviceWidth:g,maxDeviceWidth:g,minColor:w.default.number,maxColor:w.default.number,minColorIndex:w.default.number,maxColorIndex:w.default.number,minMonochrome:w.default.number,maxMonochrome:w.default.number,minResolution:g,maxResolution:g},p),y=h(h({},v),d);u.default={all:y,types:v,matchers:b,features:d}},"./src/toQuery.ts":function(l,u,c){var h=this&&this.__importDefault||function(p){return p&&p.__esModule?p:{default:p}};Object.defineProperty(u,"__esModule",{value:!0});var f=h(c("./node_modules/hyphenate-style-name/index.js")),m=h(c("./src/mediaQuery.ts")),w=function(p){return"not ".concat(p)},g=function(p,d){var y=(0,f.default)(p);return typeof d=="number"&&(d="".concat(d,"px")),d===!0?y:d===!1?w(y):"(".concat(y,": ").concat(d,")")},v=function(p){return p.join(" and ")},b=function(p){var d=[];return Object.keys(m.default.all).forEach(function(y){var k=p[y];k!=null&&d.push(g(y,k))}),v(d)};u.default=b},"./src/useMediaQuery.ts":function(l,u,c){var h=this&&this.__importDefault||function(O){return O&&O.__esModule?O:{default:O}};Object.defineProperty(u,"__esModule",{value:!0});var f=c("react"),m=h(c("./node_modules/matchmediaquery/index.js")),w=h(c("./node_modules/hyphenate-style-name/index.js")),g=c("./node_modules/shallow-equal/dist/index.esm.js"),v=h(c("./src/toQuery.ts")),b=h(c("./src/Context.ts")),p=function(O){return O.query||(0,v.default)(O)},d=function(O){if(O){var L=Object.keys(O);return L.reduce(function(W,$){return W[(0,w.default)($)]=O[$],W},{})}},y=function(){var O=(0,f.useRef)(!1);return(0,f.useEffect)(function(){O.current=!0},[]),O.current},k=function(O){var L=(0,f.useContext)(b.default),W=function(){return d(O)||d(L)},$=(0,f.useState)(W),D=$[0],X=$[1];return(0,f.useEffect)(function(){var ue=W();(0,g.shallowEqualObjects)(D,ue)||X(ue)},[O,L]),D},_=function(O){var L=function(){return p(O)},W=(0,f.useState)(L),$=W[0],D=W[1];return(0,f.useEffect)(function(){var X=L();$!==X&&D(X)},[O]),$},P=function(O,L){var W=function(){return(0,m.default)(O,L||{},!!L)},$=(0,f.useState)(W),D=$[0],X=$[1],ue=y();return(0,f.useEffect)(function(){if(ue){var de=W();return X(de),function(){de&&de.dispose()}}},[O,L]),D},C=function(O){var L=(0,f.useState)(O.matches),W=L[0],$=L[1];return(0,f.useEffect)(function(){var D=function(X){$(X.matches)};return O.addListener(D),$(O.matches),function(){O.removeListener(D)}},[O]),W},N=function(O,L,W){var $=k(L),D=_(O);if(!D)throw new Error("Invalid or missing MediaQuery!");var X=P(D,$),ue=C(X),de=y();return(0,f.useEffect)(function(){de&&W&&W(ue)},[ue]),(0,f.useEffect)(function(){return function(){X&&X.dispose()}},[]),ue};u.default=N},react:l=>{l.exports=n}},i={};function o(l){var u=i[l];if(u!==void 0)return u.exports;var c=i[l]={exports:{}};return r[l].call(c.exports,c,c.exports,o),c.exports}o.d=(l,u)=>{for(var c in u)o.o(u,c)&&!o.o(l,c)&&Object.defineProperty(l,c,{enumerable:!0,get:u[c]})},o.o=(l,u)=>Object.prototype.hasOwnProperty.call(l,u),o.r=l=>{typeof Symbol<"u"&&Symbol.toStringTag&&Object.defineProperty(l,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(l,"__esModule",{value:!0})};var s=o("./src/index.ts");return s})())})(yh);var md=yh.exports;const Yv="_mabileMenuContainer_1kj9j_1",Kv="_divMobileMenu_1kj9j_13",Xv="_logoMenu_1kj9j_24",Gv="_contactMenu_1kj9j_28",qv="_svgMenu_1kj9j_51",Jv="_nav_1kj9j_55",Zv="_navMenuMobile_1kj9j_66",ex="_buttonMenuMobile_1kj9j_75",Et={mabileMenuContainer:Yv,divMobileMenu:Kv,logoMenu:Xv,contactMenu:Gv,svgMenu:qv,nav:Jv,navMenuMobile:Zv,buttonMenuMobile:ex},tx=document.getElementById("modalMobail"),gh=({onClose:e})=>_u.createPortal(a.jsxs("div",{className:Et.mabileMenuContainer,children:[a.jsxs("div",{className:Et.divMobileMenu,children:[a.jsx("a",{href:"#home",children:a.jsx("svg",{width:"40",height:"40",children:a.jsx("use",{href:`${ls}#icon-g10`})})}),a.jsx("a",{className:Et.contactMenu,href:"#contact",children:"Контакт"}),a.jsx("button",{className:Et.buttonMenuMobile,type:"button",onClick:()=>e(),children:a.jsx("svg",{className:Et.svgMenu,width:"40",height:"40",children:a.jsx("use",{href:`${ls}#icon-close`})})})]}),a.jsxs("nav",{className:Et.nav,children:[a.jsx("a",{className:Et.navMenuMobile,href:"#home",children:"Головна"}),a.jsx("a",{className:Et.navMenuMobile,href:"#aboutUs",children:"Про нас"}),a.jsx("a",{className:Et.navMenuMobile,href:"#services",children:"Послуги"}),a.jsx("a",{className:Et.navMenuMobile,href:"#mentoring",children:"Менторство"}),a.jsx("a",{className:Et.navMenuMobile,href:"#projects",children:"Проєкти"})]})]}),tx);gh.propTypes={onClose:Oi.func.isRequired};const vh=({handleSetActiveLink:e})=>{const[t,n]=we.useState("home"),[r,i]=we.useState(!1),o=md.useMediaQuery({query:"(max-width: 767px)"}),s=md.useMediaQuery({query:"(min-width: 768px)"}),l=()=>{i(!r)};return we.useEffect(()=>{const u=()=>{const h=["home","aboutUs","services","mentoring","projects","contact"].find(f=>{const m=document.getElementById(f);if(m){const w=m.getBoundingClientRect();return w.top<=120&&w.bottom>=120}return m});h&&n(h)};return window.addEventListener("scroll",u),()=>{window.removeEventListener("scroll",u)}},[]),a.jsxs(Uv,{children:[a.jsx("div",{className:"container",children:a.jsxs(Bv,{children:[o&&a.jsx("a",{href:"#home",children:a.jsx("svg",{width:"40",height:"40",children:a.jsx("use",{href:`${ls}#icon-g10`})})}),s&&a.jsx("a",{href:"#home",children:a.jsx("svg",{width:"227",height:"40",children:a.jsx("use",{href:`${ie}#logo-black`})})}),s&&a.jsxs(Vv,{children:[a.jsx(Hr,{href:"#home",className:t==="home"?"active":"",onClick:u=>e("home",u),children:"Головна"}),a.jsx(Hr,{href:"#aboutUs",className:t==="aboutUs"?"active":"",onClick:u=>e("aboutUs",u),children:"Про нас"}),a.jsx(Hr,{href:"#services",className:t==="services"?"active":"",onClick:u=>e("services",u),children:"Послуги"}),a.jsx(Hr,{href:"#mentoring",className:t==="mentoring"?"active":"",onClick:u=>e("mentoring",u),children:"Менторство"}),a.jsx(Hr,{href:"#projects",className:t==="projects"?"active":"",onClick:u=>e("projects",u),children:"Проєкти"})]}),a.jsx(Wv,{href:"#contact",className:t==="contact"?"active":"",onClick:u=>e("contact",u),children:"Контакт"}),o&&a.jsx(Qv,{type:"button",onClick:()=>l(),children:a.jsx(Hv,{children:a.jsx("use",{href:`${ls}#icon-menuburger`})})})]})}),o&&r&&a.jsx(gh,{onClose:l})]})};vh.propTypes={handleSetActiveLink:Oi.func.isRequired};const nx="/healthy-management-project/assets/hero1x-6AVSlzud.webp",rx="/healthy-management-project/assets/hero1x-d4IOBsel.jpg",ix=E.section`
  background-repeat: no-repeat;
  background-position: center;
  background-image: url(${rx});
  background-size: cover;
  margin-top: 110px;
  padding-top: 40px;
  padding-bottom: 40px;

  @media screen and (min-width: 768px) {
    background-repeat: no-repeat;
    background-position: center;
    background-image: url(${nx});
    background-size: cover;
    margin-top: 120px;
    padding-top: 296px;
    padding-bottom: 296px;
  }
`,ox=E.h1`
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
`,sx=E.h3`
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
`,lx=E.ul`
  margin-left: 20px;
  margin-top: 24px;
  margin-bottom: 48px;

  @media screen and (min-width: 768px) {
    margin-left: 38px;
    margin-top: 24px;
    margin-bottom: 40px;
  }
`,yl=E.li`
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
`,ax=E.div`
  display: flex;
  flex-direction: column;
  gap: 24px;

  @media screen and (min-width: 768px) {
    display: flex;
    flex-direction: row;
    gap: 24px;
  }
`,yd=E.a`
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
    max-width: 260px;
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
`,ux=()=>a.jsx(ix,{id:"home",children:a.jsxs("div",{className:"container",children:[a.jsx(ox,{children:"Бізнес-партнер з розвитку та комунікацій здорового менеджменту"}),a.jsx(sx,{children:"Будуємо ефективні стратегії здорового менеджменту для медичних брендів:"}),a.jsxs(lx,{children:[a.jsx(yl,{children:"медичний менеджмент і маркетинг,"}),a.jsx(yl,{children:"програми управління здоров'ям для підприємств та бізнесу,"}),a.jsx(yl,{children:"менторство"})]}),a.jsxs(ax,{children:[a.jsx(yd,{href:"#contact",children:"Консультація"}),a.jsx(yd,{href:"services",children:"Послуги"})]})]})}),cx=E.section`
  padding-top: 80px;
  padding-bottom: 80px;
`,dx=E.div`
  max-width: 100%;
  height: 680px;
  border-radius: 16px;
  padding: 80px;
  background: var(--background-bluedark);
`,fx=E.h2`
  font-size: 48px;
  font-style: normal;
  font-weight: 600;
  line-height: 56px;
  color: var(--system-default-10);
  margin-bottom: 40px;
`,px=E.ul`
  display: flex;
  padding: 0;
  flex-wrap: wrap;
  gap: 24px;
`,lo=E.li`
  display: flex;
  justify-content: center;
  align-items: center;
  column-gap: 24px;
  flex-basis: calc((100% - 24px) / 2);
  padding: 40px;
`,ao=E.svg`
  width: 80px;
  height: 80px;
`,uo=E.div`
  display: flex;
  flex-direction: column;
`,co=E.h3`
  color: var(--system-default-10);
  font-size: 24px;
  font-weight: 600;
  line-height: 32px;
  margin-bottom: 16px;
`,fo=E.p`
  max-width: 542px;
  color: var(--system-default-10);
  font-size: 16px;
  font-weight: 500;
  line-height: 24px;
`,hx=()=>a.jsx(cx,{className:"container",children:a.jsxs(dx,{children:[a.jsx(fx,{children:"Чому обирають нас"}),a.jsxs(px,{children:[a.jsxs(lo,{children:[a.jsx(ao,{children:a.jsx("use",{href:`${ie}#hands-shake`})}),a.jsxs(uo,{children:[a.jsx(co,{children:"Надійне партнерство та менторство"}),a.jsx(fo,{children:"Ми налаштовані на довгострокове партнерство і дбаємо про комфорті та чесні комунікації"})]})]}),a.jsxs(lo,{children:[a.jsx(ao,{children:a.jsx("use",{href:`${ie}#setting`})}),a.jsxs(uo,{children:[a.jsx(co,{children:"Індивідуальний підхід"}),a.jsx(fo,{children:"Кожен бізнес і послуга мають свої особливості. Ми занурюємося у ваш бізнес і пропонуємо індивідуальні стратегії, які допоможуть вам досягти успіху"})]})]}),a.jsxs(lo,{children:[a.jsx(ao,{children:a.jsx("use",{href:`${ie}#icon-lamp`})}),a.jsxs(uo,{children:[a.jsx(co,{children:"Експертні послуги"}),a.jsx(fo,{children:"Ми опираємося на передовий досвід і використовуємо як класичні, так і сучасні підходи для досягнення поставленого результату"})]})]}),a.jsxs(lo,{children:[a.jsx(ao,{children:a.jsx("use",{href:`${ie}#icon-puzzle`})}),a.jsxs(uo,{children:[a.jsx(co,{children:"Комплексні рішення"}),a.jsx(fo,{children:"Наша експертиза дозволяє пропонувати комплексні рішення для ефективної співпраці"})]})]})]})]})}),mx="/healthy-management-project/assets/pic_mentorstvo1x-DCmM7Ygj.jpg",yx="/healthy-management-project/assets/pic_mentorstvo1x-R5bIGNq0.webp",gx="/healthy-management-project/assets/pic_mentorstvo2x-k6d-_Us1.jpg",vx="/healthy-management-project/assets/mob_mentor1x-_de1iGBc.webp",xx="/healthy-management-project/assets/mob_mentor@2x-oAKhVwNJ.jpg",wx=E.section`
  padding-top: 80px;
  padding-bottom: 80px;
`,kx=E.div`
  display: flex;
  gap: 24px;
  margin-bottom: 40px;
`,Sx=E.div`
  max-width: 828px;
  display: flex;
  flex-direction: column;
  align-items: flex-start;
`,jx=E.div`
  display: flex;
  flex-direction: column;
  gap: 24px;
  max-width: 820px;
  height: 392px;
  padding: 40px;
  border-radius: 16px;
  background: var(--background-white);
  box-shadow: 0px 0px 8px 0px rgba(27, 54, 65, 0.08);
`,Ex=E.img`
  width: 828px;
  height: 468px;
`,_x=E.h2`
  font-size: 48px;
  font-weight: 600;
  line-height: 56px;
  margin-bottom: 40px;
  color: var(--typography-black);
`,Cx=E.h3`
  font-size: 24px;
  font-weight: 600;
  line-height: 32px;
  color: var(--typography-bluedark);
`,gd=E.h3`
  font-size: 24px;
  font-weight: 600;
  line-height: 32px;
  color: var(--typography-white);
`,bx=E.div`
  margin-bottom: 80px;
`,vd=E.p`
  font-size: 20px;
  font-weight: 500;
  max-width: 720px;
  line-height: 28px;
  color: var(--typography-bluedark);

  &:not(:last-child) {
    margin-bottom: 16px;
  }
`,Tx=E.a`
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
`,Px=E.div`
  display: flex;
  gap: 40px;
`,Ox=E.div`
  display: flex;
  flex-direction: column;
  align-items: flex-start;

  padding: 40px;
  gap: 24px;
  flex: 1 0 0;
  border-radius: 16px;
  box-shadow: 0px 0px 8px 0px rgba(27, 54, 65, 0.08);
  background-color: var(--background-bluedark);
`,Rx=E.ul`
  display: flex;
  flex-direction: column;
  gap: 8px;

  font-size: 16px;
  font-weight: 500;
  line-height: 24px;
  color: var(--typography-bluedark);
`,xd=E.ul`
  display: flex;
  flex-direction: column;
  gap: 8px;

  font-size: 16px;
  font-weight: 500;
  line-height: 24px;
  color: #f8f8f8;
`,Jn=E.li`
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
`,Zn=E.li`
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
`,Mx=()=>a.jsxs(wx,{id:"mentoring",className:"container",children:[a.jsxs(kx,{children:[a.jsxs("div",{children:[a.jsxs("picture",{children:[a.jsx("source",{media:"(min-width: 1920px)",srcSet:`${yx} 1x, ${gx} 2x`}),a.jsx("source",{media:"(min-width: 375px)",srcSet:`${vx} 1x, ${xx} 2x`})]}),a.jsx(Ex,{src:mx,alt:"Ольга Поліщук"})]}),a.jsxs(Sx,{children:[a.jsx(_x,{children:"Менторство"}),a.jsxs(bx,{children:[a.jsxs(vd,{children:[a.jsx("b",{children:"Менторство в медичній галузі"}),"- почути іншу думку, підтвердити власні гіпотези, зрозуміти вектор розвитку, отримати підтримку та пораду з питань менеджменту і медичного маркетингу"]}),a.jsxs(vd,{children:[a.jsx("b",{children:"Менторство"})," - це про взаємодію та чесну комунікацію, про спільні цінності та готовність до росту, про надійне партнерство та довіру"]})]}),a.jsx(Tx,{href:"#contact",children:"Дізнатися вартість"})]})]}),a.jsx("div",{children:a.jsxs(Px,{children:[a.jsxs(jx,{children:[a.jsx(Cx,{children:"Про що це?"}),a.jsxs(Rx,{children:[a.jsx(Jn,{children:a.jsx("p",{children:"Про прагнення почути чесну іншу думку/та або підтвердити власні гіпотези для власника/керівника"})}),a.jsx(Jn,{children:a.jsx("p",{children:"Про бізнес-процеси та їх ефективність"})}),a.jsx(Jn,{children:a.jsx("p",{children:"Про вектори розвитку бізнесу або проєкту"})}),a.jsx(Jn,{children:a.jsx("p",{children:"Про практичний інструментарій для впровадження змін"})}),a.jsx(Jn,{children:a.jsx("p",{children:"Про маркетинг, сервіс та комунікації в медичних бізнесах"})}),a.jsx(Jn,{children:a.jsx("p",{children:"Про здоров'я працівників та стратегії підвищенння ефективності бізнесу"})})]})]}),a.jsxs(Ox,{children:[a.jsx(gd,{children:"Для кого"}),a.jsxs(xd,{children:[a.jsx(Zn,{children:a.jsx("p",{children:"Лідерам, які прагнуть змін"})}),a.jsx(Zn,{children:a.jsx("p",{children:"Власникам, які хочуть отримати незалежку експертну думку"})}),a.jsx(Zn,{children:a.jsx("p",{children:"Керівникам та маркетологам, яким потрібна підтримка"})}),a.jsx(Zn,{children:a.jsx("p",{children:"Лікарям, яким важливо отримати пораду"})})]}),a.jsx(gd,{children:"Формат"}),a.jsxs(xd,{children:[a.jsx(Zn,{children:a.jsx("p",{children:"Індивідуальна ментор-сесія (від 1 години)"})}),a.jsx(Zn,{children:a.jsx("p",{children:"Персональний супровід на декілька місяців"})})]})]})]})})]}),xh=E.section`
  padding-top: 24px;
  padding-bottom: 24px;

  @media screen and (min-width: 1920px) {
    padding-top: 80px;
    padding-bottom: 80px;
  }
`,wh=E.div`
  padding: 24px;
  border-radius: 16px;
  box-shadow: 0px 0px 8px 0px rgba(27, 54, 65, 0.08);
  background: var(--background-white);

  @media screen and (min-width: 1920px) {
    padding: 80px;
  }
`,Ax=E.div`
  display: flex;
  flex-direction: column;
  gap: 6px;

  @media screen and (min-width: 1290px) {
    justify-content: space-between;
  }
`,po=E.div`
  position: relative;
  min-width: 370px;
`,kh=E.div`
  display: flex;
  flex-direction: column;

  @media screen and (min-width: 1290px) {
    gap: 40px;
    margin-bottom: 40px;
    flex-direction: row;
  }
`,Sh=E.div`
  min-width: 280px;
  gap: 16px;
  display: flex;
  flex-direction: column;

  @media screen and (min-width: 1920px) {
    min-width: 740px;
  }
`,jh=E.div`
  @media screen and (min-width: 1920px) {
    padding: 24px;
  }
`,ho=E.p`
  font-size: 16px;
  font-weight: 600;
  line-height: 1.5;

  display: flex;
  position: absolute;
  width: 270px;
  text-align: center;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
  z-index: 2;
  color: var(--typography-white);

  @media screen and (min-width: 1920px) {
    font-size: 20px;
    line-height: 1.4;
    top: 50%;
    left: 50%;
  }
`,Eh=E.h2`
  color: var(--typography-black);
  font-size: 24px;
  font-weight: 600;
  line-height: 32px;

  @media screen and (min-width: 1920px) {
    font-size: 48px;
    line-height: 56px;
  }
`,_h=E.h3`
  font-size: 18px;
  font-weight: 600;
  line-height: 1.3;
  margin-bottom: 24px;
  color: var(--typography-bluedark);

  @media screen and (min-width: 1920px) {
    font-size: 24px;
    margin-bottom: 16px;
  }
`,Ch=E.p`
  font-size: 16px;
  line-height: 24px;
  color: var(--typography-bluedark);

  @media screen and (min-width: 1920px) {
    font-size: 20px;
    font-weight: 500;
    line-height: 1.4;
  }
`,bh=E.p`
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
`,Th=E.a`
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
`,Ph=E.p`
  font-size: 18px;
  line-height: 1.3;
  font-weight: 600;
  margin-bottom: 16px;

  color: var(--typography-bluedark);

  @media screen and (min-width: 1920px) {
    font-size: 24px;
    margin-bottom: 24px;
  }
`,Oh=E.ul`
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
`,mo=E.svg`
  width: 266px;
  height: 56px;

  @media screen and (min-width: 1920px) {
    width: 370px;
    height: 80px;
  }
`,Nx=()=>a.jsx(xh,{className:"container",children:a.jsxs(wh,{children:[a.jsxs(kh,{children:[a.jsxs(Sh,{children:[a.jsx(Eh,{children:"Індивідуальна ментор сесія"}),a.jsx(Ch,{children:"Вирішення вашого індивідуального запиту"}),a.jsx(bh,{children:"від 1 години"}),a.jsx(Th,{href:"#contact",children:"Замовити послугу"})]}),a.jsxs(jh,{children:[a.jsx(_h,{children:"Питання, з якими можете звернутися"}),a.jsxs(Oh,{children:[a.jsx(bt,{children:"Незалежна думка щодо маркетингу та розвитку"}),a.jsx(bt,{children:"Порада по створенню відділу маркетингу або оцінка існуючої структури"}),a.jsx(bt,{children:"Питання по роботі з підрядниками"}),a.jsx(bt,{children:"Порада щодо оптимізації бізнес-процесів"}),a.jsx(bt,{children:"Як вірно оцінити ефективність маркетингових дій"}),a.jsx(bt,{children:"Які інструменти комунікацій використовувати"}),a.jsxs(bt,{children:["Особисте питання по менеджменту та розвитку з питань управління"," ","здоров'ям"]})]})]})]}),a.jsx(Ph,{children:"Шлях проведення менторської сесії"}),a.jsxs(Ax,{children:[a.jsxs(po,{children:[a.jsx(mo,{children:a.jsx("use",{href:`${ie}#icon-rectangle`})}),a.jsx(ho,{children:"Заповнення брифу"})]}),a.jsxs(po,{children:[a.jsx(mo,{children:a.jsx("use",{href:`${ie}#icon-rectangle`})}),a.jsx(ho,{children:"Діагностика ситуації"})]}),a.jsxs(po,{children:[a.jsx(mo,{children:a.jsx("use",{href:`${ie}#icon-rectangle`})}),a.jsx(ho,{children:"Проведення сесії"})]}),a.jsxs(po,{children:[a.jsx(mo,{children:a.jsx("use",{href:`${ie}#icon-rectangle`})}),a.jsx(ho,{children:"Рекомендації"})]})]})]})}),Lx=E.div`
  display: flex;
  flex-direction: column;

  @media screen and (min-width: 1920px) {
    justify-content: space-between;
    gap: 24px;
  }
`,Qr=E.svg`
  width: 260px;
  height: 60px;

  @media screen and (min-width: 1920px) {
    width: 285px;
    height: 80px;
  }
`,Yr=E.div`
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
`;const Kr=E.p`
  font-size: 20px;
  font-weight: 600;
  line-height: 1.4;

  position: absolute;
  width: 100%;
  text-align: center;
  top: 50%;
  left: 48%;
  transform: translate(-50%, -50%);
  z-index: 2;
  color: var(--typography-white);
`,zx=()=>a.jsx(xh,{className:"container",children:a.jsxs(wh,{children:[a.jsxs(kh,{children:[a.jsxs(Sh,{children:[a.jsx(Eh,{children:"Персональний супровід"}),a.jsx(Ch,{children:"Пропрацьовуємо ваші запити та досягаємо посавлених цілей"}),a.jsx(bh,{children:"від 2 місяців тісної взаємодії"}),a.jsx(Th,{href:"#contact",children:"Замовити послугу"})]}),a.jsxs(jh,{children:[a.jsx(_h,{children:"Питання, з якими можете звернутися"}),a.jsxs(Oh,{children:[a.jsx(bt,{children:"Зануритись в бізнес-процеси та зрозуміти, де є точки зростання"}),a.jsx(bt,{children:"Зрозуміти що таке маркетинг та як він працює у вашому бізнесі"}),a.jsx(bt,{children:"Супровід розробки та впровадження стратегій"}),a.jsx(bt,{children:"Особисті питання по медичному менеджменту, маркетингу та розвитку, управління здоров'ям"})]})]})]}),a.jsx(Ph,{children:"Шлях проведення менторськогог супроводу"}),a.jsxs(Lx,{children:[a.jsxs(Yr,{children:[a.jsx(Qr,{children:a.jsx("use",{href:`${ie}#icon-rectangle2`})}),a.jsx(Kr,{children:"Заповнення брифу"})]}),a.jsxs(Yr,{children:[a.jsx(Qr,{children:a.jsx("use",{href:`${ie}#icon-rectangle2`})}),a.jsx(Kr,{children:"Діагностика ситуації"})]}),a.jsxs(Yr,{children:[a.jsx(Qr,{children:a.jsx("use",{href:`${ie}#icon-rectangle2`})}),a.jsx(Kr,{children:"Визначення зон росту"})]}),a.jsxs(Yr,{children:[a.jsx(Qr,{children:a.jsx("use",{href:`${ie}#icon-rectangle2`})}),a.jsx(Kr,{children:"Менторинг"})]}),a.jsxs(Yr,{children:[a.jsx(Qr,{children:a.jsx("use",{href:`${ie}#icon-rectangle2`})}),a.jsx(Kr,{children:"Рекомендації"})]})]})]})}),Dx="/healthy-management-project/assets/denta_derm1x-JWCICTe_.webp",Fx="/healthy-management-project/assets/medialt1x-5LMkh0v8.webp",Ix="/healthy-management-project/assets/cures1x--AoJBOWJ.webp",$x="/healthy-management-project/assets/clinic1x-YgK5Wnno.webp",Ux="/healthy-management-project/assets/kmklam1x-FlPeEOTs.webp",Bx="/healthy-management-project/assets/symmetrica1x-hhcOddzB.webp",Vx=[{image:Dx,category:"DentaDerm",title:"Діагностика бізнес-процесів, маркетингу, сервісу, розробка стратегії розвитку, менторство",about:["Діагностика бізнес-процесів та маркетингу","Стратегія розвитку","Підбір команди маркетингу","Менторство"],details:[{title:"Завдання:",about:["Розробка стратегії розвитку","Розробка нового сайту клініки","Пошук команди маркетингу"],comment:"Дії в результаті розробки стратегії розвитку передбачали роботу над проєктом в новому позиціонуванні,  пошук зовнішньої та внутрішньої команди для реалізації нового сайту, ведення соцмереж"},{title:"В результаті роботи над проєктом:",about:["Розроблені вектори розвитку","Розроблений та впроваджений новий сайт","Підібрана команда маркетингового супроводу"],comment:"В результаті співпраці партнер отримав комплексне бачення просування, сформована команда маркетингу"}]},{image:Fx,category:"Medialt",title:"Діагностика бізнес-процесів, маркетингу, сервісу, розробка стратегії розвитку, менторство",about:["Аудит ринку та конкурентів","Аудит маркетингу та сервісу","Розробка стратегії розвитку"],details:[{title:"Завдання:",about:["Розробка стратегії розвитку"]},{title:"Робота над задачою була розділена на два етапи:",about:["Аналіз конкурентів, ринку, виявлення зовнішніх можливостей та загроз","Аналіз сервісу медичного центру, аналіз роботи контакт центру, маркетингу, наявної бази пацієнтів та внутрішніх бізнес-процесів"]},{title:"В результаті комплексного аудиту підготували стратегію розвитку, яка передбачала рекомендації щодо:",about:["Управління маркетингом","Оптимізації роботи сервісу","Можливості МІС","Етапи розвитку напрямків та клініки вцілому"],comment:"В результаті співпраці - за 5 місяців ріст обороту в два рази"}]},{image:Ix,category:"Cures",title:"Автоматизація комунікації з пацієнтами",about:["Створення та запуск 20 чат-ботів для клінік","Проведення консультацій та аудитів комунікацій клінік з пацієнтами","Розробка персональних протоколів спілкування з пацієнтами"],details:[{title:"Завдання:",about:["Автоматизація комунікації з пацієнтами"]},{title:"В результаті роботи над проєктом:",about:["Розвиток проєкту по створенню чат-ботів для медичних центрів","Розробка протоколів супроводу та опитувальників для клінік","Проведення зустрічей та комунікацій з клініками","Розробка алгоритмів та запуск чат-ботів"],comment:"В результаті співпраці над проєктом запуск 20 чат-ботів для медичних центрів"}]},{image:$x,category:"Клініка ім. ак. Юрія Спіженка",title:"Менторство, діагностика бізнес-процесів, маркетингу та сервісу, розробка стратегії розвитку",about:["Діагностика бізнес-процесів","Аудит маркетингу та сервісу","Розробка стратегії розвитку та маркетингу","Розробка та впровадження комунікаційної стратегії","Ведення маркетингових активностей "],details:[{title:"Завдання:",about:["Рестарт клініки у воєний час"]},{title:"Робота над задачею була розділена на три етапи:",about:["Діагностика конкурентів, ринку, виявлення зовнішніх можливостей та загроз","Діагностика сервісу медичного центру, аналіз роботи контакт центру, маркетингу, наявної бази пацієнтів та внутрішніх бізнес-процесів","Розробка та впровадження стратегії маркетингу, комунікації та сервісу, супровід рекламних кампаній, оптимізація бізнес-процесів"],comment:"В результаті співпраці над проєктом: збільшення доходу клініки, вихід на довоєний об’єм"}]},{image:Ux,category:"KMKlab",title:"Діагностика маркетингу, сервісу, бізнес-процесів",about:["Аудит маркетингу та інструментів комунікацій","Аудит сервісу","Розробка рекомендацій щодо розвитку"],details:[{title:"Завдання:",about:["Аудит поточної маркетингової стратегії","Аудит сервісу","Формування рекомендацій по розвитку"]},{title:"Робота над задачою була розділена на два етапи:",about:["Відвідування всіх відділень лабораторій з метою формування рекомендацій по кожній локації","Аналіз поточної ситуації маркетингу та комунікацій, ведення соціальних мереж"],comment:"В результаті співпраці проаналізовано роботу відділу маркетингу та підрядників та надані рекомендації щодо структури відділу, сформовані подальші  кроки  маркетингової  та сервісної стратегії"}]},{image:Bx,category:"Symmetrica",title:"Менторство, діагностика маркетингу, сервісу, бізнес-процесів",about:["Аудит маркетингу та сервісу","Розробка рекомендацій щодо розвитку","Оптимізація бізнес-процесів"],details:[{title:"Завдання:",about:["Діагностика поточної маркетингової діяльності та комунікацій","Аудит сервісу","Аудит роботи підрядників","Формування рекомендацій по розвитку"]},{title:"В результаті роботи над проєктом:",about:["Проведений поточний аудит шляху пацієнта, виявлені точки зростання сервісу","Проаналізовано роботу відділу маркетингу і підрядників та надані рекомендації щодо структури відділу","Надані рекомендації щодо формування подальших кроків маркетингової  та сервісної стратегії","Сформовані конверсійні показники та вектори руху","Надана менторська підтримка"]}]}],Wx=E.h2`
  font-size: 48px;
  font-weight: 600;
  line-height: calc(56 / 48);

  margin-bottom: 40px;
`,Hx=E.ul`
  display: flex;
  gap: 24px;
  flex-wrap: wrap;
`,Qx=E.li`
  width: calc((100% - (2 * 24px)) / 3);
  padding: 40px;
  border-radius: 16px;
  height: 808px;

  box-shadow: 0px 0px 8px 0px rgba(27, 54, 65, 0.08);
  background-color: var(--background-white);
  overflow: hidden;
  position: relative;

  &:hover > div {
    opacity: 1;
  }
`,Yx=E.div`
  opacity: 0;
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
`,Kx=E.h3`
  font-size: 20px;
  font-weight: 600;
  line-height: calc(28 / 20);
`,Xx=E.ul`
  display: flex;
  flex-direction: column;
  gap: 8px;
`,Gx=E.li`
  font-size: 16px;
  font-weight: 500;
  line-height: calc(24 / 16);

  display: flex;
  gap: 8px;

  & > svg {
    max-width: 24px;
    height: 24px;
  }
`,qx=E.p`
  font-size: 20px;
  font-weight: 600;
  line-height: calc(28 / 20);
`,Jx=E.svg`
  fill: currentColor;
  stroke: currentColor;
`,Rh=({title:e,about:t,comment:n})=>a.jsxs(a.Fragment,{children:[a.jsx(Kx,{children:e}),a.jsx(Xx,{children:t==null?void 0:t.map(r=>a.jsxs(Gx,{children:[a.jsx(Jx,{children:a.jsx("use",{href:ie+"#icon-done"})}),r]},r))}),n&&a.jsx(qx,{children:n})]}),Zx=E.div`
  padding: 40px;

  display: flex;
  gap: 24px;
  flex-direction: column;

  color: var(--background-whitegrey, #f4f4f6);
`,e1=E.h3`
  font-size: 24px;
  font-weight: 600;
  line-height: calc(38 / 24);
  display: inline;

  padding: 4px 16px;
  border-radius: 16px;
  background: rgba(244, 244, 246, 0.1);
`,t1=({dataList:{details:e,category:t}})=>a.jsxs(Zx,{children:[a.jsx("div",{children:a.jsx(e1,{children:t})}),e.map(n=>a.jsx(Rh,{title:n.title,about:n.about,comment:n.comment},n.title))]}),n1=E.div`
  display: flex;
  flex-direction: column;
  gap: 24px;

  color: var(--typography-bluedark, #1b3641);
`,r1=E.h3`
  font-size: 24px;
  font-weight: 600;
  line-height: calc(38 / 24);
  display: inline;

  padding: 4px 16px;
  border-radius: 16px;
  background: rgba(27, 54, 65, 0.2);
`;E.img`
  height: 300px;
  width: 100%;
  border-radius: 8px;
`;const i1=({dataList:e})=>{const{category:t,title:n,about:r=[],image:i}=e;return a.jsxs(n1,{children:[a.jsx("img",{src:i,alt:n}),a.jsx("div",{children:a.jsx(r1,{children:t})}),a.jsx(Rh,{title:n,about:r})]})},o1=()=>a.jsxs("section",{id:"projects",className:"container",style:{paddingTop:"80px",paddingBottom:"80px"},children:[a.jsx(Wx,{children:"Проєкти"}),a.jsx(Hx,{children:Vx.map(e=>a.jsxs(Qx,{children:[a.jsx(i1,{dataList:e}),a.jsx(Yx,{image:e.image,children:a.jsx(t1,{dataList:e})})]},e.category))})]}),s1=E.section`
  padding-top: 80px;
  padding-bottom: 80px;
  display: flex;
  gap: 24px;
`,l1=E.div`
  padding: 80px;
  max-width: 828px;
  height: 664px;
  box-shadow: 0px 0px 8px 0px rgba(27, 54, 65, 0.08);
  border-radius: 16px;
  background: var(--background-white);
`,a1=E.div`
  display: flex;
  flex-direction: column;
  gap: 40px;
  margin-bottom: 40px;
`,u1=E.h2`
  color: var(--typography-black);
  font-size: 48px;
  font-weight: 600;
  line-height: 56px;
`,c1=E.h2`
  color: var(--typography-bluedark);
  font-family: Montserrat;
  font-size: 20px;
  font-style: normal;
  font-weight: 500;
  line-height: 28px;
`,d1=E.ul`
  display: flex;
  flex-direction: column;
  gap: 24px;
`,gl=E.li`
  display: flex;
  gap: 16px;
  border-radius: 16px;
  background: var(--background-whitegrey);
  padding: 16px;
`,vl=E.svg`
  width: 24px;
  height: 24px;
  fill: var(--background-white);
  stroke-width: 4px;
`,xl=E.p`
  color: var(--typography-bluedark);
  font-size: 20px;
  font-weight: 500;
  line-height: 28px;
`,f1=E.img`
  width: 828px;
  height: 664px;
`,p1="/healthy-management-project/assets/olga_with_book1x-kIN8FAVO.webp",h1="/healthy-management-project/assets/olga_with_book1x-KTuULWu1.jpg",m1="/healthy-management-project/assets/olga_with_book2x-lES61yI6.jpg",y1=()=>a.jsxs(s1,{className:"container",children:[a.jsxs(l1,{children:[a.jsxs(a1,{children:[a.jsx(u1,{children:"Принципи роботи"}),a.jsx(c1,{children:"Наші принципи роботи полягають у співдії з ціннісними брендами та командами, які готові до чесної співпраці, щоб сприяти досягненню поставлених цілей. Готові ділитися власним досвідом та створювати стратегії здорового менеджменту та розвитку, маркетингу та сервісу"})]}),a.jsxs(d1,{children:[a.jsxs(gl,{children:[a.jsx(vl,{children:a.jsx("use",{href:`${ie}#icon-done-yellow`})}),a.jsx(xl,{children:"Більше 18 років досвіду в маркетингу та комунікаціях"})]}),a.jsxs(gl,{children:[a.jsx(vl,{children:a.jsx("use",{href:`${ie}#icon-done-yellow`})}),a.jsx(xl,{children:"Глибоке розуміння бізнес-процесів медичних закладів"})]}),a.jsxs(gl,{children:[a.jsx(vl,{children:a.jsx("use",{href:`${ie}#icon-done-yellow`})}),a.jsx(xl,{children:"Використання принципів доказової медицини"})]})]})]}),a.jsxs("picture",{children:[a.jsx("source",{srcSet:`${m1} 2x, ${h1} 1x`,media:"(min-width: 1920px)"}),a.jsx(f1,{src:p1,alt:"Ольга Поліщук"})]})]}),g1=E.button`
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
`,v1=()=>{const[e,t]=we.useState(!1);we.useEffect(()=>{const r=()=>{const i=window.scrollY,o=document.getElementById("footer"),s=window.innerHeight+window.scrollY-o.offsetTop,l=Math.max(80,s);t(i>480||s>80),document.documentElement.style.setProperty("--scroll-to-top-bottom",`${l}px`)};return window.addEventListener("scroll",r),()=>{window.removeEventListener("scroll",r)}},[]);const n=()=>{window.scrollTo({top:0,behavior:"smooth"})};return a.jsx(a.Fragment,{children:e&&a.jsx("section",{className:"container",children:a.jsx(g1,{onClick:n,children:a.jsx("svg",{width:"24",height:"24",children:a.jsx("use",{href:`${ie}#icon-arrowup`})})})})})};function Mh(e,t){return function(){return e.apply(t,arguments)}}const{toString:x1}=Object.prototype,{getPrototypeOf:Pu}=Object,Ms=(e=>t=>{const n=x1.call(t);return e[n]||(e[n]=n.slice(8,-1).toLowerCase())})(Object.create(null)),Wt=e=>(e=e.toLowerCase(),t=>Ms(t)===e),As=e=>t=>typeof t===e,{isArray:Nr}=Array,Ri=As("undefined");function w1(e){return e!==null&&!Ri(e)&&e.constructor!==null&&!Ri(e.constructor)&&xt(e.constructor.isBuffer)&&e.constructor.isBuffer(e)}const Ah=Wt("ArrayBuffer");function k1(e){let t;return typeof ArrayBuffer<"u"&&ArrayBuffer.isView?t=ArrayBuffer.isView(e):t=e&&e.buffer&&Ah(e.buffer),t}const S1=As("string"),xt=As("function"),Nh=As("number"),Ns=e=>e!==null&&typeof e=="object",j1=e=>e===!0||e===!1,Ro=e=>{if(Ms(e)!=="object")return!1;const t=Pu(e);return(t===null||t===Object.prototype||Object.getPrototypeOf(t)===null)&&!(Symbol.toStringTag in e)&&!(Symbol.iterator in e)},E1=Wt("Date"),_1=Wt("File"),C1=Wt("Blob"),b1=Wt("FileList"),T1=e=>Ns(e)&&xt(e.pipe),P1=e=>{let t;return e&&(typeof FormData=="function"&&e instanceof FormData||xt(e.append)&&((t=Ms(e))==="formdata"||t==="object"&&xt(e.toString)&&e.toString()==="[object FormData]"))},O1=Wt("URLSearchParams"),R1=e=>e.trim?e.trim():e.replace(/^[\s\uFEFF\xA0]+|[\s\uFEFF\xA0]+$/g,"");function Fi(e,t,{allOwnKeys:n=!1}={}){if(e===null||typeof e>"u")return;let r,i;if(typeof e!="object"&&(e=[e]),Nr(e))for(r=0,i=e.length;r<i;r++)t.call(null,e[r],r,e);else{const o=n?Object.getOwnPropertyNames(e):Object.keys(e),s=o.length;let l;for(r=0;r<s;r++)l=o[r],t.call(null,e[l],l,e)}}function Lh(e,t){t=t.toLowerCase();const n=Object.keys(e);let r=n.length,i;for(;r-- >0;)if(i=n[r],t===i.toLowerCase())return i;return null}const zh=typeof globalThis<"u"?globalThis:typeof self<"u"?self:typeof window<"u"?window:global,Dh=e=>!Ri(e)&&e!==zh;function _a(){const{caseless:e}=Dh(this)&&this||{},t={},n=(r,i)=>{const o=e&&Lh(t,i)||i;Ro(t[o])&&Ro(r)?t[o]=_a(t[o],r):Ro(r)?t[o]=_a({},r):Nr(r)?t[o]=r.slice():t[o]=r};for(let r=0,i=arguments.length;r<i;r++)arguments[r]&&Fi(arguments[r],n);return t}const M1=(e,t,n,{allOwnKeys:r}={})=>(Fi(t,(i,o)=>{n&&xt(i)?e[o]=Mh(i,n):e[o]=i},{allOwnKeys:r}),e),A1=e=>(e.charCodeAt(0)===65279&&(e=e.slice(1)),e),N1=(e,t,n,r)=>{e.prototype=Object.create(t.prototype,r),e.prototype.constructor=e,Object.defineProperty(e,"super",{value:t.prototype}),n&&Object.assign(e.prototype,n)},L1=(e,t,n,r)=>{let i,o,s;const l={};if(t=t||{},e==null)return t;do{for(i=Object.getOwnPropertyNames(e),o=i.length;o-- >0;)s=i[o],(!r||r(s,e,t))&&!l[s]&&(t[s]=e[s],l[s]=!0);e=n!==!1&&Pu(e)}while(e&&(!n||n(e,t))&&e!==Object.prototype);return t},z1=(e,t,n)=>{e=String(e),(n===void 0||n>e.length)&&(n=e.length),n-=t.length;const r=e.indexOf(t,n);return r!==-1&&r===n},D1=e=>{if(!e)return null;if(Nr(e))return e;let t=e.length;if(!Nh(t))return null;const n=new Array(t);for(;t-- >0;)n[t]=e[t];return n},F1=(e=>t=>e&&t instanceof e)(typeof Uint8Array<"u"&&Pu(Uint8Array)),I1=(e,t)=>{const r=(e&&e[Symbol.iterator]).call(e);let i;for(;(i=r.next())&&!i.done;){const o=i.value;t.call(e,o[0],o[1])}},$1=(e,t)=>{let n;const r=[];for(;(n=e.exec(t))!==null;)r.push(n);return r},U1=Wt("HTMLFormElement"),B1=e=>e.toLowerCase().replace(/[-_\s]([a-z\d])(\w*)/g,function(n,r,i){return r.toUpperCase()+i}),wd=(({hasOwnProperty:e})=>(t,n)=>e.call(t,n))(Object.prototype),V1=Wt("RegExp"),Fh=(e,t)=>{const n=Object.getOwnPropertyDescriptors(e),r={};Fi(n,(i,o)=>{let s;(s=t(i,o,e))!==!1&&(r[o]=s||i)}),Object.defineProperties(e,r)},W1=e=>{Fh(e,(t,n)=>{if(xt(e)&&["arguments","caller","callee"].indexOf(n)!==-1)return!1;const r=e[n];if(xt(r)){if(t.enumerable=!1,"writable"in t){t.writable=!1;return}t.set||(t.set=()=>{throw Error("Can not rewrite read-only method '"+n+"'")})}})},H1=(e,t)=>{const n={},r=i=>{i.forEach(o=>{n[o]=!0})};return Nr(e)?r(e):r(String(e).split(t)),n},Q1=()=>{},Y1=(e,t)=>(e=+e,Number.isFinite(e)?e:t),wl="abcdefghijklmnopqrstuvwxyz",kd="0123456789",Ih={DIGIT:kd,ALPHA:wl,ALPHA_DIGIT:wl+wl.toUpperCase()+kd},K1=(e=16,t=Ih.ALPHA_DIGIT)=>{let n="";const{length:r}=t;for(;e--;)n+=t[Math.random()*r|0];return n};function X1(e){return!!(e&&xt(e.append)&&e[Symbol.toStringTag]==="FormData"&&e[Symbol.iterator])}const G1=e=>{const t=new Array(10),n=(r,i)=>{if(Ns(r)){if(t.indexOf(r)>=0)return;if(!("toJSON"in r)){t[i]=r;const o=Nr(r)?[]:{};return Fi(r,(s,l)=>{const u=n(s,i+1);!Ri(u)&&(o[l]=u)}),t[i]=void 0,o}}return r};return n(e,0)},q1=Wt("AsyncFunction"),J1=e=>e&&(Ns(e)||xt(e))&&xt(e.then)&&xt(e.catch),T={isArray:Nr,isArrayBuffer:Ah,isBuffer:w1,isFormData:P1,isArrayBufferView:k1,isString:S1,isNumber:Nh,isBoolean:j1,isObject:Ns,isPlainObject:Ro,isUndefined:Ri,isDate:E1,isFile:_1,isBlob:C1,isRegExp:V1,isFunction:xt,isStream:T1,isURLSearchParams:O1,isTypedArray:F1,isFileList:b1,forEach:Fi,merge:_a,extend:M1,trim:R1,stripBOM:A1,inherits:N1,toFlatObject:L1,kindOf:Ms,kindOfTest:Wt,endsWith:z1,toArray:D1,forEachEntry:I1,matchAll:$1,isHTMLForm:U1,hasOwnProperty:wd,hasOwnProp:wd,reduceDescriptors:Fh,freezeMethods:W1,toObjectSet:H1,toCamelCase:B1,noop:Q1,toFiniteNumber:Y1,findKey:Lh,global:zh,isContextDefined:Dh,ALPHABET:Ih,generateString:K1,isSpecCompliantForm:X1,toJSONObject:G1,isAsyncFn:q1,isThenable:J1};function ne(e,t,n,r,i){Error.call(this),Error.captureStackTrace?Error.captureStackTrace(this,this.constructor):this.stack=new Error().stack,this.message=e,this.name="AxiosError",t&&(this.code=t),n&&(this.config=n),r&&(this.request=r),i&&(this.response=i)}T.inherits(ne,Error,{toJSON:function(){return{message:this.message,name:this.name,description:this.description,number:this.number,fileName:this.fileName,lineNumber:this.lineNumber,columnNumber:this.columnNumber,stack:this.stack,config:T.toJSONObject(this.config),code:this.code,status:this.response&&this.response.status?this.response.status:null}}});const $h=ne.prototype,Uh={};["ERR_BAD_OPTION_VALUE","ERR_BAD_OPTION","ECONNABORTED","ETIMEDOUT","ERR_NETWORK","ERR_FR_TOO_MANY_REDIRECTS","ERR_DEPRECATED","ERR_BAD_RESPONSE","ERR_BAD_REQUEST","ERR_CANCELED","ERR_NOT_SUPPORT","ERR_INVALID_URL"].forEach(e=>{Uh[e]={value:e}});Object.defineProperties(ne,Uh);Object.defineProperty($h,"isAxiosError",{value:!0});ne.from=(e,t,n,r,i,o)=>{const s=Object.create($h);return T.toFlatObject(e,s,function(u){return u!==Error.prototype},l=>l!=="isAxiosError"),ne.call(s,e.message,t,n,r,i),s.cause=e,s.name=e.name,o&&Object.assign(s,o),s};const Z1=null;function Ca(e){return T.isPlainObject(e)||T.isArray(e)}function Bh(e){return T.endsWith(e,"[]")?e.slice(0,-2):e}function Sd(e,t,n){return e?e.concat(t).map(function(i,o){return i=Bh(i),!n&&o?"["+i+"]":i}).join(n?".":""):t}function ew(e){return T.isArray(e)&&!e.some(Ca)}const tw=T.toFlatObject(T,{},null,function(t){return/^is[A-Z]/.test(t)});function Ls(e,t,n){if(!T.isObject(e))throw new TypeError("target must be an object");t=t||new FormData,n=T.toFlatObject(n,{metaTokens:!0,dots:!1,indexes:!1},!1,function(v,b){return!T.isUndefined(b[v])});const r=n.metaTokens,i=n.visitor||h,o=n.dots,s=n.indexes,u=(n.Blob||typeof Blob<"u"&&Blob)&&T.isSpecCompliantForm(t);if(!T.isFunction(i))throw new TypeError("visitor must be a function");function c(g){if(g===null)return"";if(T.isDate(g))return g.toISOString();if(!u&&T.isBlob(g))throw new ne("Blob is not supported. Use a Buffer instead.");return T.isArrayBuffer(g)||T.isTypedArray(g)?u&&typeof Blob=="function"?new Blob([g]):Buffer.from(g):g}function h(g,v,b){let p=g;if(g&&!b&&typeof g=="object"){if(T.endsWith(v,"{}"))v=r?v:v.slice(0,-2),g=JSON.stringify(g);else if(T.isArray(g)&&ew(g)||(T.isFileList(g)||T.endsWith(v,"[]"))&&(p=T.toArray(g)))return v=Bh(v),p.forEach(function(y,k){!(T.isUndefined(y)||y===null)&&t.append(s===!0?Sd([v],k,o):s===null?v:v+"[]",c(y))}),!1}return Ca(g)?!0:(t.append(Sd(b,v,o),c(g)),!1)}const f=[],m=Object.assign(tw,{defaultVisitor:h,convertValue:c,isVisitable:Ca});function w(g,v){if(!T.isUndefined(g)){if(f.indexOf(g)!==-1)throw Error("Circular reference detected in "+v.join("."));f.push(g),T.forEach(g,function(p,d){(!(T.isUndefined(p)||p===null)&&i.call(t,p,T.isString(d)?d.trim():d,v,m))===!0&&w(p,v?v.concat(d):[d])}),f.pop()}}if(!T.isObject(e))throw new TypeError("data must be an object");return w(e),t}function jd(e){const t={"!":"%21","'":"%27","(":"%28",")":"%29","~":"%7E","%20":"+","%00":"\0"};return encodeURIComponent(e).replace(/[!'()~]|%20|%00/g,function(r){return t[r]})}function Ou(e,t){this._pairs=[],e&&Ls(e,this,t)}const Vh=Ou.prototype;Vh.append=function(t,n){this._pairs.push([t,n])};Vh.toString=function(t){const n=t?function(r){return t.call(this,r,jd)}:jd;return this._pairs.map(function(i){return n(i[0])+"="+n(i[1])},"").join("&")};function nw(e){return encodeURIComponent(e).replace(/%3A/gi,":").replace(/%24/g,"$").replace(/%2C/gi,",").replace(/%20/g,"+").replace(/%5B/gi,"[").replace(/%5D/gi,"]")}function Wh(e,t,n){if(!t)return e;const r=n&&n.encode||nw,i=n&&n.serialize;let o;if(i?o=i(t,n):o=T.isURLSearchParams(t)?t.toString():new Ou(t,n).toString(r),o){const s=e.indexOf("#");s!==-1&&(e=e.slice(0,s)),e+=(e.indexOf("?")===-1?"?":"&")+o}return e}class rw{constructor(){this.handlers=[]}use(t,n,r){return this.handlers.push({fulfilled:t,rejected:n,synchronous:r?r.synchronous:!1,runWhen:r?r.runWhen:null}),this.handlers.length-1}eject(t){this.handlers[t]&&(this.handlers[t]=null)}clear(){this.handlers&&(this.handlers=[])}forEach(t){T.forEach(this.handlers,function(r){r!==null&&t(r)})}}const Ed=rw,Hh={silentJSONParsing:!0,forcedJSONParsing:!0,clarifyTimeoutError:!1},iw=typeof URLSearchParams<"u"?URLSearchParams:Ou,ow=typeof FormData<"u"?FormData:null,sw=typeof Blob<"u"?Blob:null,lw={isBrowser:!0,classes:{URLSearchParams:iw,FormData:ow,Blob:sw},protocols:["http","https","file","blob","url","data"]},Qh=typeof window<"u"&&typeof document<"u",aw=(e=>Qh&&["ReactNative","NativeScript","NS"].indexOf(e)<0)(typeof navigator<"u"&&navigator.product),uw=typeof WorkerGlobalScope<"u"&&self instanceof WorkerGlobalScope&&typeof self.importScripts=="function",cw=Object.freeze(Object.defineProperty({__proto__:null,hasBrowserEnv:Qh,hasStandardBrowserEnv:aw,hasStandardBrowserWebWorkerEnv:uw},Symbol.toStringTag,{value:"Module"})),It={...cw,...lw};function dw(e,t){return Ls(e,new It.classes.URLSearchParams,Object.assign({visitor:function(n,r,i,o){return It.isNode&&T.isBuffer(n)?(this.append(r,n.toString("base64")),!1):o.defaultVisitor.apply(this,arguments)}},t))}function fw(e){return T.matchAll(/\w+|\[(\w*)]/g,e).map(t=>t[0]==="[]"?"":t[1]||t[0])}function pw(e){const t={},n=Object.keys(e);let r;const i=n.length;let o;for(r=0;r<i;r++)o=n[r],t[o]=e[o];return t}function Yh(e){function t(n,r,i,o){let s=n[o++];const l=Number.isFinite(+s),u=o>=n.length;return s=!s&&T.isArray(i)?i.length:s,u?(T.hasOwnProp(i,s)?i[s]=[i[s],r]:i[s]=r,!l):((!i[s]||!T.isObject(i[s]))&&(i[s]=[]),t(n,r,i[s],o)&&T.isArray(i[s])&&(i[s]=pw(i[s])),!l)}if(T.isFormData(e)&&T.isFunction(e.entries)){const n={};return T.forEachEntry(e,(r,i)=>{t(fw(r),i,n,0)}),n}return null}function hw(e,t,n){if(T.isString(e))try{return(t||JSON.parse)(e),T.trim(e)}catch(r){if(r.name!=="SyntaxError")throw r}return(n||JSON.stringify)(e)}const Ru={transitional:Hh,adapter:["xhr","http"],transformRequest:[function(t,n){const r=n.getContentType()||"",i=r.indexOf("application/json")>-1,o=T.isObject(t);if(o&&T.isHTMLForm(t)&&(t=new FormData(t)),T.isFormData(t))return i&&i?JSON.stringify(Yh(t)):t;if(T.isArrayBuffer(t)||T.isBuffer(t)||T.isStream(t)||T.isFile(t)||T.isBlob(t))return t;if(T.isArrayBufferView(t))return t.buffer;if(T.isURLSearchParams(t))return n.setContentType("application/x-www-form-urlencoded;charset=utf-8",!1),t.toString();let l;if(o){if(r.indexOf("application/x-www-form-urlencoded")>-1)return dw(t,this.formSerializer).toString();if((l=T.isFileList(t))||r.indexOf("multipart/form-data")>-1){const u=this.env&&this.env.FormData;return Ls(l?{"files[]":t}:t,u&&new u,this.formSerializer)}}return o||i?(n.setContentType("application/json",!1),hw(t)):t}],transformResponse:[function(t){const n=this.transitional||Ru.transitional,r=n&&n.forcedJSONParsing,i=this.responseType==="json";if(t&&T.isString(t)&&(r&&!this.responseType||i)){const s=!(n&&n.silentJSONParsing)&&i;try{return JSON.parse(t)}catch(l){if(s)throw l.name==="SyntaxError"?ne.from(l,ne.ERR_BAD_RESPONSE,this,null,this.response):l}}return t}],timeout:0,xsrfCookieName:"XSRF-TOKEN",xsrfHeaderName:"X-XSRF-TOKEN",maxContentLength:-1,maxBodyLength:-1,env:{FormData:It.classes.FormData,Blob:It.classes.Blob},validateStatus:function(t){return t>=200&&t<300},headers:{common:{Accept:"application/json, text/plain, */*","Content-Type":void 0}}};T.forEach(["delete","get","head","post","put","patch"],e=>{Ru.headers[e]={}});const Mu=Ru,mw=T.toObjectSet(["age","authorization","content-length","content-type","etag","expires","from","host","if-modified-since","if-unmodified-since","last-modified","location","max-forwards","proxy-authorization","referer","retry-after","user-agent"]),yw=e=>{const t={};let n,r,i;return e&&e.split(`
`).forEach(function(s){i=s.indexOf(":"),n=s.substring(0,i).trim().toLowerCase(),r=s.substring(i+1).trim(),!(!n||t[n]&&mw[n])&&(n==="set-cookie"?t[n]?t[n].push(r):t[n]=[r]:t[n]=t[n]?t[n]+", "+r:r)}),t},_d=Symbol("internals");function Xr(e){return e&&String(e).trim().toLowerCase()}function Mo(e){return e===!1||e==null?e:T.isArray(e)?e.map(Mo):String(e)}function gw(e){const t=Object.create(null),n=/([^\s,;=]+)\s*(?:=\s*([^,;]+))?/g;let r;for(;r=n.exec(e);)t[r[1]]=r[2];return t}const vw=e=>/^[-_a-zA-Z0-9^`|~,!#$%&'*+.]+$/.test(e.trim());function kl(e,t,n,r,i){if(T.isFunction(r))return r.call(this,t,n);if(i&&(t=n),!!T.isString(t)){if(T.isString(r))return t.indexOf(r)!==-1;if(T.isRegExp(r))return r.test(t)}}function xw(e){return e.trim().toLowerCase().replace(/([a-z\d])(\w*)/g,(t,n,r)=>n.toUpperCase()+r)}function ww(e,t){const n=T.toCamelCase(" "+t);["get","set","has"].forEach(r=>{Object.defineProperty(e,r+n,{value:function(i,o,s){return this[r].call(this,t,i,o,s)},configurable:!0})})}class zs{constructor(t){t&&this.set(t)}set(t,n,r){const i=this;function o(l,u,c){const h=Xr(u);if(!h)throw new Error("header name must be a non-empty string");const f=T.findKey(i,h);(!f||i[f]===void 0||c===!0||c===void 0&&i[f]!==!1)&&(i[f||u]=Mo(l))}const s=(l,u)=>T.forEach(l,(c,h)=>o(c,h,u));return T.isPlainObject(t)||t instanceof this.constructor?s(t,n):T.isString(t)&&(t=t.trim())&&!vw(t)?s(yw(t),n):t!=null&&o(n,t,r),this}get(t,n){if(t=Xr(t),t){const r=T.findKey(this,t);if(r){const i=this[r];if(!n)return i;if(n===!0)return gw(i);if(T.isFunction(n))return n.call(this,i,r);if(T.isRegExp(n))return n.exec(i);throw new TypeError("parser must be boolean|regexp|function")}}}has(t,n){if(t=Xr(t),t){const r=T.findKey(this,t);return!!(r&&this[r]!==void 0&&(!n||kl(this,this[r],r,n)))}return!1}delete(t,n){const r=this;let i=!1;function o(s){if(s=Xr(s),s){const l=T.findKey(r,s);l&&(!n||kl(r,r[l],l,n))&&(delete r[l],i=!0)}}return T.isArray(t)?t.forEach(o):o(t),i}clear(t){const n=Object.keys(this);let r=n.length,i=!1;for(;r--;){const o=n[r];(!t||kl(this,this[o],o,t,!0))&&(delete this[o],i=!0)}return i}normalize(t){const n=this,r={};return T.forEach(this,(i,o)=>{const s=T.findKey(r,o);if(s){n[s]=Mo(i),delete n[o];return}const l=t?xw(o):String(o).trim();l!==o&&delete n[o],n[l]=Mo(i),r[l]=!0}),this}concat(...t){return this.constructor.concat(this,...t)}toJSON(t){const n=Object.create(null);return T.forEach(this,(r,i)=>{r!=null&&r!==!1&&(n[i]=t&&T.isArray(r)?r.join(", "):r)}),n}[Symbol.iterator](){return Object.entries(this.toJSON())[Symbol.iterator]()}toString(){return Object.entries(this.toJSON()).map(([t,n])=>t+": "+n).join(`
`)}get[Symbol.toStringTag](){return"AxiosHeaders"}static from(t){return t instanceof this?t:new this(t)}static concat(t,...n){const r=new this(t);return n.forEach(i=>r.set(i)),r}static accessor(t){const r=(this[_d]=this[_d]={accessors:{}}).accessors,i=this.prototype;function o(s){const l=Xr(s);r[l]||(ww(i,s),r[l]=!0)}return T.isArray(t)?t.forEach(o):o(t),this}}zs.accessor(["Content-Type","Content-Length","Accept","Accept-Encoding","User-Agent","Authorization"]);T.reduceDescriptors(zs.prototype,({value:e},t)=>{let n=t[0].toUpperCase()+t.slice(1);return{get:()=>e,set(r){this[n]=r}}});T.freezeMethods(zs);const Jt=zs;function Sl(e,t){const n=this||Mu,r=t||n,i=Jt.from(r.headers);let o=r.data;return T.forEach(e,function(l){o=l.call(n,o,i.normalize(),t?t.status:void 0)}),i.normalize(),o}function Kh(e){return!!(e&&e.__CANCEL__)}function Ii(e,t,n){ne.call(this,e??"canceled",ne.ERR_CANCELED,t,n),this.name="CanceledError"}T.inherits(Ii,ne,{__CANCEL__:!0});function kw(e,t,n){const r=n.config.validateStatus;!n.status||!r||r(n.status)?e(n):t(new ne("Request failed with status code "+n.status,[ne.ERR_BAD_REQUEST,ne.ERR_BAD_RESPONSE][Math.floor(n.status/100)-4],n.config,n.request,n))}const Sw=It.hasStandardBrowserEnv?{write(e,t,n,r,i,o){const s=[e+"="+encodeURIComponent(t)];T.isNumber(n)&&s.push("expires="+new Date(n).toGMTString()),T.isString(r)&&s.push("path="+r),T.isString(i)&&s.push("domain="+i),o===!0&&s.push("secure"),document.cookie=s.join("; ")},read(e){const t=document.cookie.match(new RegExp("(^|;\\s*)("+e+")=([^;]*)"));return t?decodeURIComponent(t[3]):null},remove(e){this.write(e,"",Date.now()-864e5)}}:{write(){},read(){return null},remove(){}};function jw(e){return/^([a-z][a-z\d+\-.]*:)?\/\//i.test(e)}function Ew(e,t){return t?e.replace(/\/+$/,"")+"/"+t.replace(/^\/+/,""):e}function Xh(e,t){return e&&!jw(t)?Ew(e,t):t}const _w=It.hasStandardBrowserEnv?function(){const t=/(msie|trident)/i.test(navigator.userAgent),n=document.createElement("a");let r;function i(o){let s=o;return t&&(n.setAttribute("href",s),s=n.href),n.setAttribute("href",s),{href:n.href,protocol:n.protocol?n.protocol.replace(/:$/,""):"",host:n.host,search:n.search?n.search.replace(/^\?/,""):"",hash:n.hash?n.hash.replace(/^#/,""):"",hostname:n.hostname,port:n.port,pathname:n.pathname.charAt(0)==="/"?n.pathname:"/"+n.pathname}}return r=i(window.location.href),function(s){const l=T.isString(s)?i(s):s;return l.protocol===r.protocol&&l.host===r.host}}():function(){return function(){return!0}}();function Cw(e){const t=/^([-+\w]{1,25})(:?\/\/|:)/.exec(e);return t&&t[1]||""}function bw(e,t){e=e||10;const n=new Array(e),r=new Array(e);let i=0,o=0,s;return t=t!==void 0?t:1e3,function(u){const c=Date.now(),h=r[o];s||(s=c),n[i]=u,r[i]=c;let f=o,m=0;for(;f!==i;)m+=n[f++],f=f%e;if(i=(i+1)%e,i===o&&(o=(o+1)%e),c-s<t)return;const w=h&&c-h;return w?Math.round(m*1e3/w):void 0}}function Cd(e,t){let n=0;const r=bw(50,250);return i=>{const o=i.loaded,s=i.lengthComputable?i.total:void 0,l=o-n,u=r(l),c=o<=s;n=o;const h={loaded:o,total:s,progress:s?o/s:void 0,bytes:l,rate:u||void 0,estimated:u&&s&&c?(s-o)/u:void 0,event:i};h[t?"download":"upload"]=!0,e(h)}}const Tw=typeof XMLHttpRequest<"u",Pw=Tw&&function(e){return new Promise(function(n,r){let i=e.data;const o=Jt.from(e.headers).normalize();let{responseType:s,withXSRFToken:l}=e,u;function c(){e.cancelToken&&e.cancelToken.unsubscribe(u),e.signal&&e.signal.removeEventListener("abort",u)}let h;if(T.isFormData(i)){if(It.hasStandardBrowserEnv||It.hasStandardBrowserWebWorkerEnv)o.setContentType(!1);else if((h=o.getContentType())!==!1){const[v,...b]=h?h.split(";").map(p=>p.trim()).filter(Boolean):[];o.setContentType([v||"multipart/form-data",...b].join("; "))}}let f=new XMLHttpRequest;if(e.auth){const v=e.auth.username||"",b=e.auth.password?unescape(encodeURIComponent(e.auth.password)):"";o.set("Authorization","Basic "+btoa(v+":"+b))}const m=Xh(e.baseURL,e.url);f.open(e.method.toUpperCase(),Wh(m,e.params,e.paramsSerializer),!0),f.timeout=e.timeout;function w(){if(!f)return;const v=Jt.from("getAllResponseHeaders"in f&&f.getAllResponseHeaders()),p={data:!s||s==="text"||s==="json"?f.responseText:f.response,status:f.status,statusText:f.statusText,headers:v,config:e,request:f};kw(function(y){n(y),c()},function(y){r(y),c()},p),f=null}if("onloadend"in f?f.onloadend=w:f.onreadystatechange=function(){!f||f.readyState!==4||f.status===0&&!(f.responseURL&&f.responseURL.indexOf("file:")===0)||setTimeout(w)},f.onabort=function(){f&&(r(new ne("Request aborted",ne.ECONNABORTED,e,f)),f=null)},f.onerror=function(){r(new ne("Network Error",ne.ERR_NETWORK,e,f)),f=null},f.ontimeout=function(){let b=e.timeout?"timeout of "+e.timeout+"ms exceeded":"timeout exceeded";const p=e.transitional||Hh;e.timeoutErrorMessage&&(b=e.timeoutErrorMessage),r(new ne(b,p.clarifyTimeoutError?ne.ETIMEDOUT:ne.ECONNABORTED,e,f)),f=null},It.hasStandardBrowserEnv&&(l&&T.isFunction(l)&&(l=l(e)),l||l!==!1&&_w(m))){const v=e.xsrfHeaderName&&e.xsrfCookieName&&Sw.read(e.xsrfCookieName);v&&o.set(e.xsrfHeaderName,v)}i===void 0&&o.setContentType(null),"setRequestHeader"in f&&T.forEach(o.toJSON(),function(b,p){f.setRequestHeader(p,b)}),T.isUndefined(e.withCredentials)||(f.withCredentials=!!e.withCredentials),s&&s!=="json"&&(f.responseType=e.responseType),typeof e.onDownloadProgress=="function"&&f.addEventListener("progress",Cd(e.onDownloadProgress,!0)),typeof e.onUploadProgress=="function"&&f.upload&&f.upload.addEventListener("progress",Cd(e.onUploadProgress)),(e.cancelToken||e.signal)&&(u=v=>{f&&(r(!v||v.type?new Ii(null,e,f):v),f.abort(),f=null)},e.cancelToken&&e.cancelToken.subscribe(u),e.signal&&(e.signal.aborted?u():e.signal.addEventListener("abort",u)));const g=Cw(m);if(g&&It.protocols.indexOf(g)===-1){r(new ne("Unsupported protocol "+g+":",ne.ERR_BAD_REQUEST,e));return}f.send(i||null)})},ba={http:Z1,xhr:Pw};T.forEach(ba,(e,t)=>{if(e){try{Object.defineProperty(e,"name",{value:t})}catch{}Object.defineProperty(e,"adapterName",{value:t})}});const bd=e=>`- ${e}`,Ow=e=>T.isFunction(e)||e===null||e===!1,Gh={getAdapter:e=>{e=T.isArray(e)?e:[e];const{length:t}=e;let n,r;const i={};for(let o=0;o<t;o++){n=e[o];let s;if(r=n,!Ow(n)&&(r=ba[(s=String(n)).toLowerCase()],r===void 0))throw new ne(`Unknown adapter '${s}'`);if(r)break;i[s||"#"+o]=r}if(!r){const o=Object.entries(i).map(([l,u])=>`adapter ${l} `+(u===!1?"is not supported by the environment":"is not available in the build"));let s=t?o.length>1?`since :
`+o.map(bd).join(`
`):" "+bd(o[0]):"as no adapter specified";throw new ne("There is no suitable adapter to dispatch the request "+s,"ERR_NOT_SUPPORT")}return r},adapters:ba};function jl(e){if(e.cancelToken&&e.cancelToken.throwIfRequested(),e.signal&&e.signal.aborted)throw new Ii(null,e)}function Td(e){return jl(e),e.headers=Jt.from(e.headers),e.data=Sl.call(e,e.transformRequest),["post","put","patch"].indexOf(e.method)!==-1&&e.headers.setContentType("application/x-www-form-urlencoded",!1),Gh.getAdapter(e.adapter||Mu.adapter)(e).then(function(r){return jl(e),r.data=Sl.call(e,e.transformResponse,r),r.headers=Jt.from(r.headers),r},function(r){return Kh(r)||(jl(e),r&&r.response&&(r.response.data=Sl.call(e,e.transformResponse,r.response),r.response.headers=Jt.from(r.response.headers))),Promise.reject(r)})}const Pd=e=>e instanceof Jt?e.toJSON():e;function Pr(e,t){t=t||{};const n={};function r(c,h,f){return T.isPlainObject(c)&&T.isPlainObject(h)?T.merge.call({caseless:f},c,h):T.isPlainObject(h)?T.merge({},h):T.isArray(h)?h.slice():h}function i(c,h,f){if(T.isUndefined(h)){if(!T.isUndefined(c))return r(void 0,c,f)}else return r(c,h,f)}function o(c,h){if(!T.isUndefined(h))return r(void 0,h)}function s(c,h){if(T.isUndefined(h)){if(!T.isUndefined(c))return r(void 0,c)}else return r(void 0,h)}function l(c,h,f){if(f in t)return r(c,h);if(f in e)return r(void 0,c)}const u={url:o,method:o,data:o,baseURL:s,transformRequest:s,transformResponse:s,paramsSerializer:s,timeout:s,timeoutMessage:s,withCredentials:s,withXSRFToken:s,adapter:s,responseType:s,xsrfCookieName:s,xsrfHeaderName:s,onUploadProgress:s,onDownloadProgress:s,decompress:s,maxContentLength:s,maxBodyLength:s,beforeRedirect:s,transport:s,httpAgent:s,httpsAgent:s,cancelToken:s,socketPath:s,responseEncoding:s,validateStatus:l,headers:(c,h)=>i(Pd(c),Pd(h),!0)};return T.forEach(Object.keys(Object.assign({},e,t)),function(h){const f=u[h]||i,m=f(e[h],t[h],h);T.isUndefined(m)&&f!==l||(n[h]=m)}),n}const qh="1.6.2",Au={};["object","boolean","number","function","string","symbol"].forEach((e,t)=>{Au[e]=function(r){return typeof r===e||"a"+(t<1?"n ":" ")+e}});const Od={};Au.transitional=function(t,n,r){function i(o,s){return"[Axios v"+qh+"] Transitional option '"+o+"'"+s+(r?". "+r:"")}return(o,s,l)=>{if(t===!1)throw new ne(i(s," has been removed"+(n?" in "+n:"")),ne.ERR_DEPRECATED);return n&&!Od[s]&&(Od[s]=!0,console.warn(i(s," has been deprecated since v"+n+" and will be removed in the near future"))),t?t(o,s,l):!0}};function Rw(e,t,n){if(typeof e!="object")throw new ne("options must be an object",ne.ERR_BAD_OPTION_VALUE);const r=Object.keys(e);let i=r.length;for(;i-- >0;){const o=r[i],s=t[o];if(s){const l=e[o],u=l===void 0||s(l,o,e);if(u!==!0)throw new ne("option "+o+" must be "+u,ne.ERR_BAD_OPTION_VALUE);continue}if(n!==!0)throw new ne("Unknown option "+o,ne.ERR_BAD_OPTION)}}const Ta={assertOptions:Rw,validators:Au},dn=Ta.validators;class as{constructor(t){this.defaults=t,this.interceptors={request:new Ed,response:new Ed}}request(t,n){typeof t=="string"?(n=n||{},n.url=t):n=t||{},n=Pr(this.defaults,n);const{transitional:r,paramsSerializer:i,headers:o}=n;r!==void 0&&Ta.assertOptions(r,{silentJSONParsing:dn.transitional(dn.boolean),forcedJSONParsing:dn.transitional(dn.boolean),clarifyTimeoutError:dn.transitional(dn.boolean)},!1),i!=null&&(T.isFunction(i)?n.paramsSerializer={serialize:i}:Ta.assertOptions(i,{encode:dn.function,serialize:dn.function},!0)),n.method=(n.method||this.defaults.method||"get").toLowerCase();let s=o&&T.merge(o.common,o[n.method]);o&&T.forEach(["delete","get","head","post","put","patch","common"],g=>{delete o[g]}),n.headers=Jt.concat(s,o);const l=[];let u=!0;this.interceptors.request.forEach(function(v){typeof v.runWhen=="function"&&v.runWhen(n)===!1||(u=u&&v.synchronous,l.unshift(v.fulfilled,v.rejected))});const c=[];this.interceptors.response.forEach(function(v){c.push(v.fulfilled,v.rejected)});let h,f=0,m;if(!u){const g=[Td.bind(this),void 0];for(g.unshift.apply(g,l),g.push.apply(g,c),m=g.length,h=Promise.resolve(n);f<m;)h=h.then(g[f++],g[f++]);return h}m=l.length;let w=n;for(f=0;f<m;){const g=l[f++],v=l[f++];try{w=g(w)}catch(b){v.call(this,b);break}}try{h=Td.call(this,w)}catch(g){return Promise.reject(g)}for(f=0,m=c.length;f<m;)h=h.then(c[f++],c[f++]);return h}getUri(t){t=Pr(this.defaults,t);const n=Xh(t.baseURL,t.url);return Wh(n,t.params,t.paramsSerializer)}}T.forEach(["delete","get","head","options"],function(t){as.prototype[t]=function(n,r){return this.request(Pr(r||{},{method:t,url:n,data:(r||{}).data}))}});T.forEach(["post","put","patch"],function(t){function n(r){return function(o,s,l){return this.request(Pr(l||{},{method:t,headers:r?{"Content-Type":"multipart/form-data"}:{},url:o,data:s}))}}as.prototype[t]=n(),as.prototype[t+"Form"]=n(!0)});const Ao=as;class Nu{constructor(t){if(typeof t!="function")throw new TypeError("executor must be a function.");let n;this.promise=new Promise(function(o){n=o});const r=this;this.promise.then(i=>{if(!r._listeners)return;let o=r._listeners.length;for(;o-- >0;)r._listeners[o](i);r._listeners=null}),this.promise.then=i=>{let o;const s=new Promise(l=>{r.subscribe(l),o=l}).then(i);return s.cancel=function(){r.unsubscribe(o)},s},t(function(o,s,l){r.reason||(r.reason=new Ii(o,s,l),n(r.reason))})}throwIfRequested(){if(this.reason)throw this.reason}subscribe(t){if(this.reason){t(this.reason);return}this._listeners?this._listeners.push(t):this._listeners=[t]}unsubscribe(t){if(!this._listeners)return;const n=this._listeners.indexOf(t);n!==-1&&this._listeners.splice(n,1)}static source(){let t;return{token:new Nu(function(i){t=i}),cancel:t}}}const Mw=Nu;function Aw(e){return function(n){return e.apply(null,n)}}function Nw(e){return T.isObject(e)&&e.isAxiosError===!0}const Pa={Continue:100,SwitchingProtocols:101,Processing:102,EarlyHints:103,Ok:200,Created:201,Accepted:202,NonAuthoritativeInformation:203,NoContent:204,ResetContent:205,PartialContent:206,MultiStatus:207,AlreadyReported:208,ImUsed:226,MultipleChoices:300,MovedPermanently:301,Found:302,SeeOther:303,NotModified:304,UseProxy:305,Unused:306,TemporaryRedirect:307,PermanentRedirect:308,BadRequest:400,Unauthorized:401,PaymentRequired:402,Forbidden:403,NotFound:404,MethodNotAllowed:405,NotAcceptable:406,ProxyAuthenticationRequired:407,RequestTimeout:408,Conflict:409,Gone:410,LengthRequired:411,PreconditionFailed:412,PayloadTooLarge:413,UriTooLong:414,UnsupportedMediaType:415,RangeNotSatisfiable:416,ExpectationFailed:417,ImATeapot:418,MisdirectedRequest:421,UnprocessableEntity:422,Locked:423,FailedDependency:424,TooEarly:425,UpgradeRequired:426,PreconditionRequired:428,TooManyRequests:429,RequestHeaderFieldsTooLarge:431,UnavailableForLegalReasons:451,InternalServerError:500,NotImplemented:501,BadGateway:502,ServiceUnavailable:503,GatewayTimeout:504,HttpVersionNotSupported:505,VariantAlsoNegotiates:506,InsufficientStorage:507,LoopDetected:508,NotExtended:510,NetworkAuthenticationRequired:511};Object.entries(Pa).forEach(([e,t])=>{Pa[t]=e});const Lw=Pa;function Jh(e){const t=new Ao(e),n=Mh(Ao.prototype.request,t);return T.extend(n,Ao.prototype,t,{allOwnKeys:!0}),T.extend(n,t,null,{allOwnKeys:!0}),n.create=function(i){return Jh(Pr(e,i))},n}const Oe=Jh(Mu);Oe.Axios=Ao;Oe.CanceledError=Ii;Oe.CancelToken=Mw;Oe.isCancel=Kh;Oe.VERSION=qh;Oe.toFormData=Ls;Oe.AxiosError=ne;Oe.Cancel=Oe.CanceledError;Oe.all=function(t){return Promise.all(t)};Oe.spread=Aw;Oe.isAxiosError=Nw;Oe.mergeConfig=Pr;Oe.AxiosHeaders=Jt;Oe.formToJSON=e=>Yh(T.isHTMLForm(e)?new FormData(e):e);Oe.getAdapter=Gh.getAdapter;Oe.HttpStatusCode=Lw;Oe.default=Oe;const zw=Oe,Dw="/healthy-management-project/assets/computer1x-59AoGLTz.jpg",Fw="/healthy-management-project/assets/computer1x-rNaa-S8Z.webp",Iw="/healthy-management-project/assets/computer@2x-aIbrJSD2.jpg",$w=E.div`
  padding: 80px 0;
`,Uw=E.h2`
  margin-bottom: 40px;
  font-size: 48px;
  font-weight: 600;
  line-height: 1.17;
  color: var(--typography-black);
`,Bw=E.div`
  width: 100%;
  height: 738px;
  display: flex;
  gap: 24px;
`,Vw=E.img`
  max-width: 828px;
`,Ww=E.div`
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
`;const Hw=E.form`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-self: stretch;
`,Qw=E.button`
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
`;var $i=e=>e.type==="checkbox",pr=e=>e instanceof Date,Ge=e=>e==null;const Zh=e=>typeof e=="object";var Ae=e=>!Ge(e)&&!Array.isArray(e)&&Zh(e)&&!pr(e),Yw=e=>Ae(e)&&e.target?$i(e.target)?e.target.checked:e.target.value:e,Kw=e=>e.substring(0,e.search(/\.\d+(\.|$)/))||e,Xw=(e,t)=>e.has(Kw(t)),Gw=e=>{const t=e.constructor&&e.constructor.prototype;return Ae(t)&&t.hasOwnProperty("isPrototypeOf")},Lu=typeof window<"u"&&typeof window.HTMLElement<"u"&&typeof document<"u";function Qt(e){let t;const n=Array.isArray(e);if(e instanceof Date)t=new Date(e);else if(e instanceof Set)t=new Set(e);else if(!(Lu&&(e instanceof Blob||e instanceof FileList))&&(n||Ae(e)))if(t=n?[]:{},!n&&!Gw(e))t=e;else for(const r in e)e.hasOwnProperty(r)&&(t[r]=Qt(e[r]));else return e;return t}var Ui=e=>Array.isArray(e)?e.filter(Boolean):[],Ee=e=>e===void 0,V=(e,t,n)=>{if(!t||!Ae(e))return n;const r=Ui(t.split(/[,[\].]+?/)).reduce((i,o)=>Ge(i)?i:i[o],e);return Ee(r)||r===e?Ee(e[t])?n:e[t]:r},yn=e=>typeof e=="boolean";const Rd={BLUR:"blur",FOCUS_OUT:"focusout",CHANGE:"change"},Pt={onBlur:"onBlur",onChange:"onChange",onSubmit:"onSubmit",onTouched:"onTouched",all:"all"},Ht={max:"max",min:"min",maxLength:"maxLength",minLength:"minLength",pattern:"pattern",required:"required",validate:"validate"};ht.createContext(null);var qw=(e,t,n,r=!0)=>{const i={defaultValues:t._defaultValues};for(const o in e)Object.defineProperty(i,o,{get:()=>{const s=o;return t._proxyFormState[s]!==Pt.all&&(t._proxyFormState[s]=!r||Pt.all),n&&(n[s]=!0),e[s]}});return i},pt=e=>Ae(e)&&!Object.keys(e).length,Jw=(e,t,n,r)=>{n(e);const{name:i,...o}=e;return pt(o)||Object.keys(o).length>=Object.keys(t).length||Object.keys(o).find(s=>t[s]===(!r||Pt.all))},El=e=>Array.isArray(e)?e:[e];function Zw(e){const t=ht.useRef(e);t.current=e,ht.useEffect(()=>{const n=!e.disabled&&t.current.subject&&t.current.subject.subscribe({next:t.current.next});return()=>{n&&n.unsubscribe()}},[e.disabled])}var $t=e=>typeof e=="string",e2=(e,t,n,r,i)=>$t(e)?(r&&t.watch.add(e),V(n,e,i)):Array.isArray(e)?e.map(o=>(r&&t.watch.add(o),V(n,o))):(r&&(t.watchAll=!0),n),zu=e=>/^\w*$/.test(e),em=e=>Ui(e.replace(/["|']|\]/g,"").split(/\.|\[/));function ge(e,t,n){let r=-1;const i=zu(t)?[t]:em(t),o=i.length,s=o-1;for(;++r<o;){const l=i[r];let u=n;if(r!==s){const c=e[l];u=Ae(c)||Array.isArray(c)?c:isNaN(+i[r+1])?{}:[]}e[l]=u,e=e[l]}return e}var t2=(e,t,n,r,i)=>t?{...n[e],types:{...n[e]&&n[e].types?n[e].types:{},[r]:i||!0}}:{},Md=e=>({isOnSubmit:!e||e===Pt.onSubmit,isOnBlur:e===Pt.onBlur,isOnChange:e===Pt.onChange,isOnAll:e===Pt.all,isOnTouch:e===Pt.onTouched}),Ad=(e,t,n)=>!n&&(t.watchAll||t.watch.has(e)||[...t.watch].some(r=>e.startsWith(r)&&/^\.\w+/.test(e.slice(r.length))));const No=(e,t,n,r)=>{for(const i of n||Object.keys(e)){const o=V(e,i);if(o){const{_f:s,...l}=o;if(s){if(s.refs&&s.refs[0]&&t(s.refs[0],i)&&!r)break;if(s.ref&&t(s.ref,s.name)&&!r)break}else Ae(l)&&No(l,t)}}};var n2=(e,t,n)=>{const r=Ui(V(e,n));return ge(r,"root",t[n]),ge(e,n,r),e},Du=e=>e.type==="file",xn=e=>typeof e=="function",us=e=>{if(!Lu)return!1;const t=e?e.ownerDocument:0;return e instanceof(t&&t.defaultView?t.defaultView.HTMLElement:HTMLElement)},Lo=e=>$t(e),Fu=e=>e.type==="radio",cs=e=>e instanceof RegExp;const Nd={value:!1,isValid:!1},Ld={value:!0,isValid:!0};var tm=e=>{if(Array.isArray(e)){if(e.length>1){const t=e.filter(n=>n&&n.checked&&!n.disabled).map(n=>n.value);return{value:t,isValid:!!t.length}}return e[0].checked&&!e[0].disabled?e[0].attributes&&!Ee(e[0].attributes.value)?Ee(e[0].value)||e[0].value===""?Ld:{value:e[0].value,isValid:!0}:Ld:Nd}return Nd};const zd={isValid:!1,value:null};var nm=e=>Array.isArray(e)?e.reduce((t,n)=>n&&n.checked&&!n.disabled?{isValid:!0,value:n.value}:t,zd):zd;function Dd(e,t,n="validate"){if(Lo(e)||Array.isArray(e)&&e.every(Lo)||yn(e)&&!e)return{type:n,message:Lo(e)?e:"",ref:t}}var er=e=>Ae(e)&&!cs(e)?e:{value:e,message:""},Fd=async(e,t,n,r,i)=>{const{ref:o,refs:s,required:l,maxLength:u,minLength:c,min:h,max:f,pattern:m,validate:w,name:g,valueAsNumber:v,mount:b,disabled:p}=e._f,d=V(t,g);if(!b||p)return{};const y=s?s[0]:o,k=$=>{r&&y.reportValidity&&(y.setCustomValidity(yn($)?"":$||""),y.reportValidity())},_={},P=Fu(o),C=$i(o),N=P||C,O=(v||Du(o))&&Ee(o.value)&&Ee(d)||us(o)&&o.value===""||d===""||Array.isArray(d)&&!d.length,L=t2.bind(null,g,n,_),W=($,D,X,ue=Ht.maxLength,de=Ht.minLength)=>{const Ne=$?D:X;_[g]={type:$?ue:de,message:Ne,ref:o,...L($?ue:de,Ne)}};if(i?!Array.isArray(d)||!d.length:l&&(!N&&(O||Ge(d))||yn(d)&&!d||C&&!tm(s).isValid||P&&!nm(s).isValid)){const{value:$,message:D}=Lo(l)?{value:!!l,message:l}:er(l);if($&&(_[g]={type:Ht.required,message:D,ref:y,...L(Ht.required,D)},!n))return k(D),_}if(!O&&(!Ge(h)||!Ge(f))){let $,D;const X=er(f),ue=er(h);if(!Ge(d)&&!isNaN(d)){const de=o.valueAsNumber||d&&+d;Ge(X.value)||($=de>X.value),Ge(ue.value)||(D=de<ue.value)}else{const de=o.valueAsDate||new Date(d),Ne=Y=>new Date(new Date().toDateString()+" "+Y),I=o.type=="time",H=o.type=="week";$t(X.value)&&d&&($=I?Ne(d)>Ne(X.value):H?d>X.value:de>new Date(X.value)),$t(ue.value)&&d&&(D=I?Ne(d)<Ne(ue.value):H?d<ue.value:de<new Date(ue.value))}if(($||D)&&(W(!!$,X.message,ue.message,Ht.max,Ht.min),!n))return k(_[g].message),_}if((u||c)&&!O&&($t(d)||i&&Array.isArray(d))){const $=er(u),D=er(c),X=!Ge($.value)&&d.length>+$.value,ue=!Ge(D.value)&&d.length<+D.value;if((X||ue)&&(W(X,$.message,D.message),!n))return k(_[g].message),_}if(m&&!O&&$t(d)){const{value:$,message:D}=er(m);if(cs($)&&!d.match($)&&(_[g]={type:Ht.pattern,message:D,ref:o,...L(Ht.pattern,D)},!n))return k(D),_}if(w){if(xn(w)){const $=await w(d,t),D=Dd($,y);if(D&&(_[g]={...D,...L(Ht.validate,D.message)},!n))return k(D.message),_}else if(Ae(w)){let $={};for(const D in w){if(!pt($)&&!n)break;const X=Dd(await w[D](d,t),y,D);X&&($={...X,...L(D,X.message)},k(X.message),n&&(_[g]=$))}if(!pt($)&&(_[g]={ref:y,...$},!n))return _}}return k(!0),_};function r2(e,t){const n=t.slice(0,-1).length;let r=0;for(;r<n;)e=Ee(e)?r++:e[t[r++]];return e}function i2(e){for(const t in e)if(e.hasOwnProperty(t)&&!Ee(e[t]))return!1;return!0}function Fe(e,t){const n=Array.isArray(t)?t:zu(t)?[t]:em(t),r=n.length===1?e:r2(e,n),i=n.length-1,o=n[i];return r&&delete r[o],i!==0&&(Ae(r)&&pt(r)||Array.isArray(r)&&i2(r))&&Fe(e,n.slice(0,-1)),e}function _l(){let e=[];return{get observers(){return e},next:i=>{for(const o of e)o.next&&o.next(i)},subscribe:i=>(e.push(i),{unsubscribe:()=>{e=e.filter(o=>o!==i)}}),unsubscribe:()=>{e=[]}}}var ds=e=>Ge(e)||!Zh(e);function In(e,t){if(ds(e)||ds(t))return e===t;if(pr(e)&&pr(t))return e.getTime()===t.getTime();const n=Object.keys(e),r=Object.keys(t);if(n.length!==r.length)return!1;for(const i of n){const o=e[i];if(!r.includes(i))return!1;if(i!=="ref"){const s=t[i];if(pr(o)&&pr(s)||Ae(o)&&Ae(s)||Array.isArray(o)&&Array.isArray(s)?!In(o,s):o!==s)return!1}}return!0}var rm=e=>e.type==="select-multiple",o2=e=>Fu(e)||$i(e),Cl=e=>us(e)&&e.isConnected,im=e=>{for(const t in e)if(xn(e[t]))return!0;return!1};function fs(e,t={}){const n=Array.isArray(e);if(Ae(e)||n)for(const r in e)Array.isArray(e[r])||Ae(e[r])&&!im(e[r])?(t[r]=Array.isArray(e[r])?[]:{},fs(e[r],t[r])):Ge(e[r])||(t[r]=!0);return t}function om(e,t,n){const r=Array.isArray(e);if(Ae(e)||r)for(const i in e)Array.isArray(e[i])||Ae(e[i])&&!im(e[i])?Ee(t)||ds(n[i])?n[i]=Array.isArray(e[i])?fs(e[i],[]):{...fs(e[i])}:om(e[i],Ge(t)?{}:t[i],n[i]):n[i]=!In(e[i],t[i]);return n}var bl=(e,t)=>om(e,t,fs(t)),sm=(e,{valueAsNumber:t,valueAsDate:n,setValueAs:r})=>Ee(e)?e:t?e===""?NaN:e&&+e:n&&$t(e)?new Date(e):r?r(e):e;function Tl(e){const t=e.ref;if(!(e.refs?e.refs.every(n=>n.disabled):t.disabled))return Du(t)?t.files:Fu(t)?nm(e.refs).value:rm(t)?[...t.selectedOptions].map(({value:n})=>n):$i(t)?tm(e.refs).value:sm(Ee(t.value)?e.ref.value:t.value,e)}var s2=(e,t,n,r)=>{const i={};for(const o of e){const s=V(t,o);s&&ge(i,o,s._f)}return{criteriaMode:n,names:[...e],fields:i,shouldUseNativeValidation:r}},Gr=e=>Ee(e)?e:cs(e)?e.source:Ae(e)?cs(e.value)?e.value.source:e.value:e,l2=e=>e.mount&&(e.required||e.min||e.max||e.maxLength||e.minLength||e.pattern||e.validate);function Id(e,t,n){const r=V(e,n);if(r||zu(n))return{error:r,name:n};const i=n.split(".");for(;i.length;){const o=i.join("."),s=V(t,o),l=V(e,o);if(s&&!Array.isArray(s)&&n!==o)return{name:n};if(l&&l.type)return{name:o,error:l};i.pop()}return{name:n}}var a2=(e,t,n,r,i)=>i.isOnAll?!1:!n&&i.isOnTouch?!(t||e):(n?r.isOnBlur:i.isOnBlur)?!e:(n?r.isOnChange:i.isOnChange)?e:!0,u2=(e,t)=>!Ui(V(e,t)).length&&Fe(e,t);const c2={mode:Pt.onSubmit,reValidateMode:Pt.onChange,shouldFocusError:!0};function d2(e={},t){let n={...c2,...e},r={submitCount:0,isDirty:!1,isLoading:xn(n.defaultValues),isValidating:!1,isSubmitted:!1,isSubmitting:!1,isSubmitSuccessful:!1,isValid:!1,touchedFields:{},dirtyFields:{},errors:{},disabled:!1},i={},o=Ae(n.defaultValues)||Ae(n.values)?Qt(n.defaultValues||n.values)||{}:{},s=n.shouldUnregister?{}:Qt(o),l={action:!1,mount:!1,watch:!1},u={mount:new Set,unMount:new Set,array:new Set,watch:new Set},c,h=0;const f={isDirty:!1,dirtyFields:!1,touchedFields:!1,isValidating:!1,isValid:!1,errors:!1},m={values:_l(),array:_l(),state:_l()},w=e.resetOptions&&e.resetOptions.keepDirtyValues,g=Md(n.mode),v=Md(n.reValidateMode),b=n.criteriaMode===Pt.all,p=x=>j=>{clearTimeout(h),h=setTimeout(x,j)},d=async x=>{if(f.isValid||x){const j=n.resolver?pt((await O()).errors):await W(i,!0);j!==r.isValid&&m.state.next({isValid:j})}},y=x=>f.isValidating&&m.state.next({isValidating:x}),k=(x,j=[],S,F,z=!0,A=!0)=>{if(F&&S){if(l.action=!0,A&&Array.isArray(V(i,x))){const Q=S(V(i,x),F.argA,F.argB);z&&ge(i,x,Q)}if(A&&Array.isArray(V(r.errors,x))){const Q=S(V(r.errors,x),F.argA,F.argB);z&&ge(r.errors,x,Q),u2(r.errors,x)}if(f.touchedFields&&A&&Array.isArray(V(r.touchedFields,x))){const Q=S(V(r.touchedFields,x),F.argA,F.argB);z&&ge(r.touchedFields,x,Q)}f.dirtyFields&&(r.dirtyFields=bl(o,s)),m.state.next({name:x,isDirty:D(x,j),dirtyFields:r.dirtyFields,errors:r.errors,isValid:r.isValid})}else ge(s,x,j)},_=(x,j)=>{ge(r.errors,x,j),m.state.next({errors:r.errors})},P=(x,j,S,F)=>{const z=V(i,x);if(z){const A=V(s,x,Ee(S)?V(o,x):S);Ee(A)||F&&F.defaultChecked||j?ge(s,x,j?A:Tl(z._f)):de(x,A),l.mount&&d()}},C=(x,j,S,F,z)=>{let A=!1,Q=!1;const fe={name:x};if(!S||F){f.isDirty&&(Q=r.isDirty,r.isDirty=fe.isDirty=D(),A=Q!==fe.isDirty);const be=In(V(o,x),j);Q=V(r.dirtyFields,x),be?Fe(r.dirtyFields,x):ge(r.dirtyFields,x,!0),fe.dirtyFields=r.dirtyFields,A=A||f.dirtyFields&&Q!==!be}if(S){const be=V(r.touchedFields,x);be||(ge(r.touchedFields,x,S),fe.touchedFields=r.touchedFields,A=A||f.touchedFields&&be!==S)}return A&&z&&m.state.next(fe),A?fe:{}},N=(x,j,S,F)=>{const z=V(r.errors,x),A=f.isValid&&yn(j)&&r.isValid!==j;if(e.delayError&&S?(c=p(()=>_(x,S)),c(e.delayError)):(clearTimeout(h),c=null,S?ge(r.errors,x,S):Fe(r.errors,x)),(S?!In(z,S):z)||!pt(F)||A){const Q={...F,...A&&yn(j)?{isValid:j}:{},errors:r.errors,name:x};r={...r,...Q},m.state.next(Q)}y(!1)},O=async x=>n.resolver(s,n.context,s2(x||u.mount,i,n.criteriaMode,n.shouldUseNativeValidation)),L=async x=>{const{errors:j}=await O(x);if(x)for(const S of x){const F=V(j,S);F?ge(r.errors,S,F):Fe(r.errors,S)}else r.errors=j;return j},W=async(x,j,S={valid:!0})=>{for(const F in x){const z=x[F];if(z){const{_f:A,...Q}=z;if(A){const fe=u.array.has(A.name),be=await Fd(z,s,b,n.shouldUseNativeValidation&&!j,fe);if(be[A.name]&&(S.valid=!1,j))break;!j&&(V(be,A.name)?fe?n2(r.errors,be,A.name):ge(r.errors,A.name,be[A.name]):Fe(r.errors,A.name))}Q&&await W(Q,j,S)}}return S.valid},$=()=>{for(const x of u.unMount){const j=V(i,x);j&&(j._f.refs?j._f.refs.every(S=>!Cl(S)):!Cl(j._f.ref))&&De(x)}u.unMount=new Set},D=(x,j)=>(x&&j&&ge(s,x,j),!In(he(),o)),X=(x,j,S)=>e2(x,u,{...l.mount?s:Ee(j)?o:$t(x)?{[x]:j}:j},S,j),ue=x=>Ui(V(l.mount?s:o,x,e.shouldUnregister?V(o,x,[]):[])),de=(x,j,S={})=>{const F=V(i,x);let z=j;if(F){const A=F._f;A&&(!A.disabled&&ge(s,x,sm(j,A)),z=us(A.ref)&&Ge(j)?"":j,rm(A.ref)?[...A.ref.options].forEach(Q=>Q.selected=z.includes(Q.value)):A.refs?$i(A.ref)?A.refs.length>1?A.refs.forEach(Q=>(!Q.defaultChecked||!Q.disabled)&&(Q.checked=Array.isArray(z)?!!z.find(fe=>fe===Q.value):z===Q.value)):A.refs[0]&&(A.refs[0].checked=!!z):A.refs.forEach(Q=>Q.checked=Q.value===z):Du(A.ref)?A.ref.value="":(A.ref.value=z,A.ref.type||m.values.next({name:x,values:{...s}})))}(S.shouldDirty||S.shouldTouch)&&C(x,z,S.shouldTouch,S.shouldDirty,!0),S.shouldValidate&&ae(x)},Ne=(x,j,S)=>{for(const F in j){const z=j[F],A=`${x}.${F}`,Q=V(i,A);(u.array.has(x)||!ds(z)||Q&&!Q._f)&&!pr(z)?Ne(A,z,S):de(A,z,S)}},I=(x,j,S={})=>{const F=V(i,x),z=u.array.has(x),A=Qt(j);ge(s,x,A),z?(m.array.next({name:x,values:{...s}}),(f.isDirty||f.dirtyFields)&&S.shouldDirty&&m.state.next({name:x,dirtyFields:bl(o,s),isDirty:D(x,A)})):F&&!F._f&&!Ge(A)?Ne(x,A,S):de(x,A,S),Ad(x,u)&&m.state.next({...r}),m.values.next({name:x,values:{...s}}),!l.mount&&t()},H=async x=>{const j=x.target;let S=j.name,F=!0;const z=V(i,S),A=()=>j.type?Tl(z._f):Yw(x),Q=fe=>{F=Number.isNaN(fe)||fe===V(s,S,fe)};if(z){let fe,be;const Bi=A(),Gn=x.type===Rd.BLUR||x.type===Rd.FOCUS_OUT,lm=!l2(z._f)&&!n.resolver&&!V(r.errors,S)&&!z._f.deps||a2(Gn,V(r.touchedFields,S),r.isSubmitted,v,g),Ds=Ad(S,u,Gn);ge(s,S,Bi),Gn?(z._f.onBlur&&z._f.onBlur(x),c&&c(0)):z._f.onChange&&z._f.onChange(x);const Fs=C(S,Bi,Gn,!1),am=!pt(Fs)||Ds;if(!Gn&&m.values.next({name:S,type:x.type,values:{...s}}),lm)return f.isValid&&d(),am&&m.state.next({name:S,...Ds?{}:Fs});if(!Gn&&Ds&&m.state.next({...r}),y(!0),n.resolver){const{errors:Iu}=await O([S]);if(Q(Bi),F){const um=Id(r.errors,i,S),$u=Id(Iu,i,um.name||S);fe=$u.error,S=$u.name,be=pt(Iu)}}else fe=(await Fd(z,s,b,n.shouldUseNativeValidation))[S],Q(Bi),F&&(fe?be=!1:f.isValid&&(be=await W(i,!0)));F&&(z._f.deps&&ae(z._f.deps),N(S,be,fe,Fs))}},Y=(x,j)=>{if(V(r.errors,j)&&x.focus)return x.focus(),1},ae=async(x,j={})=>{let S,F;const z=El(x);if(y(!0),n.resolver){const A=await L(Ee(x)?x:z);S=pt(A),F=x?!z.some(Q=>V(A,Q)):S}else x?(F=(await Promise.all(z.map(async A=>{const Q=V(i,A);return await W(Q&&Q._f?{[A]:Q}:Q)}))).every(Boolean),!(!F&&!r.isValid)&&d()):F=S=await W(i);return m.state.next({...!$t(x)||f.isValid&&S!==r.isValid?{}:{name:x},...n.resolver||!x?{isValid:S}:{},errors:r.errors,isValidating:!1}),j.shouldFocus&&!F&&No(i,Y,x?z:u.mount),F},he=x=>{const j={...o,...l.mount?s:{}};return Ee(x)?j:$t(x)?V(j,x):x.map(S=>V(j,S))},St=(x,j)=>({invalid:!!V((j||r).errors,x),isDirty:!!V((j||r).dirtyFields,x),isTouched:!!V((j||r).touchedFields,x),error:V((j||r).errors,x)}),Ve=x=>{x&&El(x).forEach(j=>Fe(r.errors,j)),m.state.next({errors:x?r.errors:{}})},At=(x,j,S)=>{const F=(V(i,x,{_f:{}})._f||{}).ref;ge(r.errors,x,{...j,ref:F}),m.state.next({name:x,errors:r.errors,isValid:!1}),S&&S.shouldFocus&&F&&F.focus&&F.focus()},Ce=(x,j)=>xn(x)?m.values.subscribe({next:S=>x(X(void 0,j),S)}):X(x,j,!0),De=(x,j={})=>{for(const S of x?El(x):u.mount)u.mount.delete(S),u.array.delete(S),j.keepValue||(Fe(i,S),Fe(s,S)),!j.keepError&&Fe(r.errors,S),!j.keepDirty&&Fe(r.dirtyFields,S),!j.keepTouched&&Fe(r.touchedFields,S),!n.shouldUnregister&&!j.keepDefaultValue&&Fe(o,S);m.values.next({values:{...s}}),m.state.next({...r,...j.keepDirty?{isDirty:D()}:{}}),!j.keepIsValid&&d()},Xn=({disabled:x,name:j,field:S,fields:F,value:z})=>{if(yn(x)){const A=x?void 0:Ee(z)?Tl(S?S._f:V(F,j)._f):z;ge(s,j,A),C(j,A,!1,!1,!0)}},on=(x,j={})=>{let S=V(i,x);const F=yn(j.disabled);return ge(i,x,{...S||{},_f:{...S&&S._f?S._f:{ref:{name:x}},name:x,mount:!0,...j}}),u.mount.add(x),S?Xn({field:S,disabled:j.disabled,name:x}):P(x,!0,j.value),{...F?{disabled:j.disabled}:{},...n.progressive?{required:!!j.required,min:Gr(j.min),max:Gr(j.max),minLength:Gr(j.minLength),maxLength:Gr(j.maxLength),pattern:Gr(j.pattern)}:{},name:x,onChange:H,onBlur:H,ref:z=>{if(z){on(x,j),S=V(i,x);const A=Ee(z.value)&&z.querySelectorAll&&z.querySelectorAll("input,select,textarea")[0]||z,Q=o2(A),fe=S._f.refs||[];if(Q?fe.find(be=>be===A):A===S._f.ref)return;ge(i,x,{_f:{...S._f,...Q?{refs:[...fe.filter(Cl),A,...Array.isArray(V(o,x))?[{}]:[]],ref:{type:A.type,name:x}}:{ref:A}}}),P(x,!1,void 0,A)}else S=V(i,x,{}),S._f&&(S._f.mount=!1),(n.shouldUnregister||j.shouldUnregister)&&!(Xw(u.array,x)&&l.action)&&u.unMount.add(x)}}},M=()=>n.shouldFocusError&&No(i,Y,u.mount),B=x=>{yn(x)&&(m.state.next({disabled:x}),No(i,j=>{j.disabled=x},0,!1))},G=(x,j)=>async S=>{S&&(S.preventDefault&&S.preventDefault(),S.persist&&S.persist());let F=Qt(s);if(m.state.next({isSubmitting:!0}),n.resolver){const{errors:z,values:A}=await O();r.errors=z,F=A}else await W(i);Fe(r.errors,"root"),pt(r.errors)?(m.state.next({errors:{}}),await x(F,S)):(j&&await j({...r.errors},S),M(),setTimeout(M)),m.state.next({isSubmitted:!0,isSubmitting:!1,isSubmitSuccessful:pt(r.errors),submitCount:r.submitCount+1,errors:r.errors})},q=(x,j={})=>{V(i,x)&&(Ee(j.defaultValue)?I(x,V(o,x)):(I(x,j.defaultValue),ge(o,x,j.defaultValue)),j.keepTouched||Fe(r.touchedFields,x),j.keepDirty||(Fe(r.dirtyFields,x),r.isDirty=j.defaultValue?D(x,V(o,x)):D()),j.keepError||(Fe(r.errors,x),f.isValid&&d()),m.state.next({...r}))},K=(x,j={})=>{const S=x?Qt(x):o,F=Qt(S),z=x&&!pt(x)?F:o;if(j.keepDefaultValues||(o=S),!j.keepValues){if(j.keepDirtyValues||w)for(const A of u.mount)V(r.dirtyFields,A)?ge(z,A,V(s,A)):I(A,V(z,A));else{if(Lu&&Ee(x))for(const A of u.mount){const Q=V(i,A);if(Q&&Q._f){const fe=Array.isArray(Q._f.refs)?Q._f.refs[0]:Q._f.ref;if(us(fe)){const be=fe.closest("form");if(be){be.reset();break}}}}i={}}s=e.shouldUnregister?j.keepDefaultValues?Qt(o):{}:Qt(z),m.array.next({values:{...z}}),m.values.next({values:{...z}})}u={mount:new Set,unMount:new Set,array:new Set,watch:new Set,watchAll:!1,focus:""},!l.mount&&t(),l.mount=!f.isValid||!!j.keepIsValid,l.watch=!!e.shouldUnregister,m.state.next({submitCount:j.keepSubmitCount?r.submitCount:0,isDirty:j.keepDirty?r.isDirty:!!(j.keepDefaultValues&&!In(x,o)),isSubmitted:j.keepIsSubmitted?r.isSubmitted:!1,dirtyFields:j.keepDirtyValues?r.dirtyFields:j.keepDefaultValues&&x?bl(o,x):{},touchedFields:j.keepTouched?r.touchedFields:{},errors:j.keepErrors?r.errors:{},isSubmitSuccessful:j.keepIsSubmitSuccessful?r.isSubmitSuccessful:!1,isSubmitting:!1})},te=(x,j)=>K(xn(x)?x(s):x,j);return{control:{register:on,unregister:De,getFieldState:St,handleSubmit:G,setError:At,_executeSchema:O,_getWatch:X,_getDirty:D,_updateValid:d,_removeUnmounted:$,_updateFieldArray:k,_updateDisabledField:Xn,_getFieldArray:ue,_reset:K,_resetDefaultValues:()=>xn(n.defaultValues)&&n.defaultValues().then(x=>{te(x,n.resetOptions),m.state.next({isLoading:!1})}),_updateFormState:x=>{r={...r,...x}},_disableForm:B,_subjects:m,_proxyFormState:f,get _fields(){return i},get _formValues(){return s},get _state(){return l},set _state(x){l=x},get _defaultValues(){return o},get _names(){return u},set _names(x){u=x},get _formState(){return r},set _formState(x){r=x},get _options(){return n},set _options(x){n={...n,...x}}},trigger:ae,register:on,handleSubmit:G,watch:Ce,setValue:I,getValues:he,reset:te,resetField:q,clearErrors:Ve,unregister:De,setError:At,setFocus:(x,j={})=>{const S=V(i,x),F=S&&S._f;if(F){const z=F.refs?F.refs[0]:F.ref;z.focus&&(z.focus(),j.shouldSelect&&z.select())}},getFieldState:St}}function f2(e={}){const t=ht.useRef(),n=ht.useRef(),[r,i]=ht.useState({isDirty:!1,isValidating:!1,isLoading:xn(e.defaultValues),isSubmitted:!1,isSubmitting:!1,isSubmitSuccessful:!1,isValid:!1,submitCount:0,dirtyFields:{},touchedFields:{},errors:{},disabled:!1,defaultValues:xn(e.defaultValues)?void 0:e.defaultValues});t.current||(t.current={...d2(e,()=>i(s=>({...s}))),formState:r});const o=t.current.control;return o._options=e,Zw({subject:o._subjects.state,next:s=>{Jw(s,o._proxyFormState,o._updateFormState,!0)&&i({...o._formState})}}),ht.useEffect(()=>o._disableForm(e.disabled),[o,e.disabled]),ht.useEffect(()=>{if(o._proxyFormState.isDirty){const s=o._getDirty();s!==r.isDirty&&o._subjects.state.next({isDirty:s})}},[o,r.isDirty]),ht.useEffect(()=>{e.values&&!In(e.values,n.current)?(o._reset(e.values,o._options.resetOptions),n.current=e.values):o._resetDefaultValues()},[e.values,o]),ht.useEffect(()=>{o._state.mount||(o._updateValid(),o._state.mount=!0),o._state.watch&&(o._state.watch=!1,o._subjects.state.next({...o._formState})),o._removeUnmounted()}),t.current.formState=qw(r,o),t.current}const p2=()=>{const[e,t]=we.useState(()=>{const m=localStorage.getItem("key");return JSON.parse(m)??[{name:"",email:"",phone:"",service:"",comment:""}]}),{name:n,email:r,phone:i,service:o,comment:s}=e,{register:l,handleSubmit:u,formState:{errors:c}}=f2({mode:"all"});we.useEffect(()=>{const m=JSON.stringify(e);localStorage.setItem("key",m)},[e]);const h=m=>{t({...e,[m.target.name]:m.target.value})},f=async m=>{try{await zw.post("https://healthy-management.onrender.com/api/senddata",m),console.log(m),t({name:"",email:"",phone:"",service:"",comment:""}),alert("Заявка відправлена!")}catch{alert("Помилка при відправці заявки")}};return a.jsx("section",{className:"container",id:"contact",children:a.jsxs($w,{children:[a.jsx(Uw,{children:"Контакт"}),a.jsxs(Bw,{children:[a.jsxs("picture",{children:[a.jsx("source",{media:"(min-width: 1920px)",srcSet:`${Fw} 1x, ${Iw} 2x`}),a.jsx(Vw,{src:Dw})]}),a.jsxs(Ww,{children:[a.jsx("h3",{children:"Залишайте ваші контактні дані і ми з вами зв'яжемось"}),a.jsxs(Hw,{onSubmit:u(f),children:[a.jsx("input",{type:"text",placeholder:"Ім'я",...l("name",{required:"Це поле обов'язкове для заповнення",pattern:{value:/^(?:[a-zA-Zа-яА-ЯґҐєЄіІїЇ'-]{1,32}(?:\s+[a-zA-Zа-яА-ЯґҐєЄіІїЇ'-]{1,32})?|[a-zA-Zа-яА-ЯґҐєЄіІїЇ'-]{1,64})$/,message:"Поле повинно містити одне або два слова"}}),value:n,onChange:h}),c.name&&a.jsx("div",{style:{color:"red"},children:c.name.message}),a.jsx("input",{type:"email",placeholder:"Емейл",...l("email",{required:"Це поле обов'язкове для заповнення",pattern:{value:/[a-z0-9._%+-]+@[a-z0-9.-]+\.[a-z]{2,4}$/,message:"Введіть коректний емейл"}}),value:r,onChange:h}),c.email&&a.jsx("div",{style:{color:"red"},children:c.email.message}),a.jsx("input",{type:"tel",placeholder:"Номер телефону",...l("phone",{required:"Це поле обов'язкове для заповнення",pattern:{value:/^0\d{9}$/,message:"Введіть коректний номер телефона"}}),value:i,onChange:h}),c.phone&&a.jsx("div",{style:{color:"red"},children:c.phone.message}),a.jsxs("select",{...l("service",{required:"Оберіть послугу"}),value:o,onChange:h,children:[a.jsx("option",{value:"",disabled:!0,hidden:!0,children:"Оберіть послугу"}),a.jsx("option",{value:"Менторство та консультації",children:"Менторство та консультації"}),a.jsx("option",{value:"Діагностика",children:"Діагностика"}),a.jsx("option",{value:"Стратегії",children:"Стратегії"}),a.jsx("option",{value:"Навчання",children:"Навчання"}),a.jsx("option",{value:"Інше",children:"Інше"})]}),c.service&&a.jsx("div",{style:{color:"red"},children:c.service.message}),a.jsx("textarea",{name:"comment",placeholder:"Ваше повідомлення",...l("comment",{pattern:{value:/^.{0,500}$/,message:"Максимальна довжина повідомлення 500 символів"}}),value:s,onChange:h}),c.message&&a.jsx("div",{style:{color:"red"},children:c.message.message}),a.jsx(Qw,{type:"submit",children:"Надіслати"})]})]})]})]})})};function h2(){const e=(t,n)=>{n.preventDefault();const r=document.getElementById(t);if(r){const i=r.getBoundingClientRect(),o=window.pageYOffset||document.documentElement.scrollTop,s=i.top+o-60;window.scrollTo({top:s,behavior:"smooth"}),setTimeout(()=>{n.target.blur()},1e3)}};return a.jsxs(a.Fragment,{children:[a.jsx(vh,{handleSetActiveLink:e}),a.jsxs("main",{children:[a.jsx(ux,{}),a.jsx(ov,{}),a.jsx(Q0,{}),a.jsx(hx,{}),a.jsx(y1,{}),a.jsx(Mx,{}),a.jsx(Nx,{}),a.jsx(zx,{}),a.jsx(o1,{}),a.jsx(fv,{}),a.jsx(p2,{})]}),a.jsx(mh,{handleSetActiveLink:e}),a.jsx(v1,{})]})}Pl.createRoot(document.getElementById("root")).render(a.jsx(ht.StrictMode,{children:a.jsx(h2,{})}));
