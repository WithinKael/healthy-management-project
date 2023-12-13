function gv(e,t){for(var n=0;n<t.length;n++){const r=t[n];if(typeof r!="string"&&!Array.isArray(r)){for(const i in r)if(i!=="default"&&!(i in e)){const o=Object.getOwnPropertyDescriptor(r,i);o&&Object.defineProperty(e,i,o.get?o:{enumerable:!0,get:()=>r[i]})}}}return Object.freeze(Object.defineProperty(e,Symbol.toStringTag,{value:"Module"}))}(function(){const t=document.createElement("link").relList;if(t&&t.supports&&t.supports("modulepreload"))return;for(const i of document.querySelectorAll('link[rel="modulepreload"]'))r(i);new MutationObserver(i=>{for(const o of i)if(o.type==="childList")for(const a of o.addedNodes)a.tagName==="LINK"&&a.rel==="modulepreload"&&r(a)}).observe(document,{childList:!0,subtree:!0});function n(i){const o={};return i.integrity&&(o.integrity=i.integrity),i.referrerPolicy&&(o.referrerPolicy=i.referrerPolicy),i.crossOrigin==="use-credentials"?o.credentials="include":i.crossOrigin==="anonymous"?o.credentials="omit":o.credentials="same-origin",o}function r(i){if(i.ep)return;i.ep=!0;const o=n(i);fetch(i.href,o)}})();var xv=typeof globalThis<"u"?globalThis:typeof window<"u"?window:typeof global<"u"?global:typeof self<"u"?self:{};function ao(e){return e&&e.__esModule&&Object.prototype.hasOwnProperty.call(e,"default")?e.default:e}var th={exports:{}},rs={},nh={exports:{}},ce={};/**
 * @license React
 * react.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */var so=Symbol.for("react.element"),vv=Symbol.for("react.portal"),yv=Symbol.for("react.fragment"),wv=Symbol.for("react.strict_mode"),bv=Symbol.for("react.profiler"),Sv=Symbol.for("react.provider"),kv=Symbol.for("react.context"),jv=Symbol.for("react.forward_ref"),Cv=Symbol.for("react.suspense"),Ev=Symbol.for("react.memo"),Ov=Symbol.for("react.lazy"),bd=Symbol.iterator;function _v(e){return e===null||typeof e!="object"?null:(e=bd&&e[bd]||e["@@iterator"],typeof e=="function"?e:null)}var rh={isMounted:function(){return!1},enqueueForceUpdate:function(){},enqueueReplaceState:function(){},enqueueSetState:function(){}},ih=Object.assign,oh={};function ei(e,t,n){this.props=e,this.context=t,this.refs=oh,this.updater=n||rh}ei.prototype.isReactComponent={};ei.prototype.setState=function(e,t){if(typeof e!="object"&&typeof e!="function"&&e!=null)throw Error("setState(...): takes an object of state variables to update or a function which returns an object of state variables.");this.updater.enqueueSetState(this,e,t,"setState")};ei.prototype.forceUpdate=function(e){this.updater.enqueueForceUpdate(this,e,"forceUpdate")};function ah(){}ah.prototype=ei.prototype;function qu(e,t,n){this.props=e,this.context=t,this.refs=oh,this.updater=n||rh}var Xu=qu.prototype=new ah;Xu.constructor=qu;ih(Xu,ei.prototype);Xu.isPureReactComponent=!0;var Sd=Array.isArray,sh=Object.prototype.hasOwnProperty,Ju={current:null},lh={key:!0,ref:!0,__self:!0,__source:!0};function uh(e,t,n){var r,i={},o=null,a=null;if(t!=null)for(r in t.ref!==void 0&&(a=t.ref),t.key!==void 0&&(o=""+t.key),t)sh.call(t,r)&&!lh.hasOwnProperty(r)&&(i[r]=t[r]);var l=arguments.length-2;if(l===1)i.children=n;else if(1<l){for(var s=Array(l),c=0;c<l;c++)s[c]=arguments[c+2];i.children=s}if(e&&e.defaultProps)for(r in l=e.defaultProps,l)i[r]===void 0&&(i[r]=l[r]);return{$$typeof:so,type:e,key:o,ref:a,props:i,_owner:Ju.current}}function Pv(e,t){return{$$typeof:so,type:e.type,key:t,ref:e.ref,props:e.props,_owner:e._owner}}function Zu(e){return typeof e=="object"&&e!==null&&e.$$typeof===so}function Tv(e){var t={"=":"=0",":":"=2"};return"$"+e.replace(/[=:]/g,function(n){return t[n]})}var kd=/\/+/g;function Us(e,t){return typeof e=="object"&&e!==null&&e.key!=null?Tv(""+e.key):t.toString(36)}function qo(e,t,n,r,i){var o=typeof e;(o==="undefined"||o==="boolean")&&(e=null);var a=!1;if(e===null)a=!0;else switch(o){case"string":case"number":a=!0;break;case"object":switch(e.$$typeof){case so:case vv:a=!0}}if(a)return a=e,i=i(a),e=r===""?"."+Us(a,0):r,Sd(i)?(n="",e!=null&&(n=e.replace(kd,"$&/")+"/"),qo(i,t,n,"",function(c){return c})):i!=null&&(Zu(i)&&(i=Pv(i,n+(!i.key||a&&a.key===i.key?"":(""+i.key).replace(kd,"$&/")+"/")+e)),t.push(i)),1;if(a=0,r=r===""?".":r+":",Sd(e))for(var l=0;l<e.length;l++){o=e[l];var s=r+Us(o,l);a+=qo(o,t,n,s,i)}else if(s=_v(e),typeof s=="function")for(e=s.call(e),l=0;!(o=e.next()).done;)o=o.value,s=r+Us(o,l++),a+=qo(o,t,n,s,i);else if(o==="object")throw t=String(e),Error("Objects are not valid as a React child (found: "+(t==="[object Object]"?"object with keys {"+Object.keys(e).join(", ")+"}":t)+"). If you meant to render a collection of children, use an array instead.");return a}function wo(e,t,n){if(e==null)return e;var r=[],i=0;return qo(e,r,"","",function(o){return t.call(n,o,i++)}),r}function Mv(e){if(e._status===-1){var t=e._result;t=t(),t.then(function(n){(e._status===0||e._status===-1)&&(e._status=1,e._result=n)},function(n){(e._status===0||e._status===-1)&&(e._status=2,e._result=n)}),e._status===-1&&(e._status=0,e._result=t)}if(e._status===1)return e._result.default;throw e._result}var ct={current:null},Xo={transition:null},Rv={ReactCurrentDispatcher:ct,ReactCurrentBatchConfig:Xo,ReactCurrentOwner:Ju};ce.Children={map:wo,forEach:function(e,t,n){wo(e,function(){t.apply(this,arguments)},n)},count:function(e){var t=0;return wo(e,function(){t++}),t},toArray:function(e){return wo(e,function(t){return t})||[]},only:function(e){if(!Zu(e))throw Error("React.Children.only expected to receive a single React element child.");return e}};ce.Component=ei;ce.Fragment=yv;ce.Profiler=bv;ce.PureComponent=qu;ce.StrictMode=wv;ce.Suspense=Cv;ce.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED=Rv;ce.cloneElement=function(e,t,n){if(e==null)throw Error("React.cloneElement(...): The argument must be a React element, but you passed "+e+".");var r=ih({},e.props),i=e.key,o=e.ref,a=e._owner;if(t!=null){if(t.ref!==void 0&&(o=t.ref,a=Ju.current),t.key!==void 0&&(i=""+t.key),e.type&&e.type.defaultProps)var l=e.type.defaultProps;for(s in t)sh.call(t,s)&&!lh.hasOwnProperty(s)&&(r[s]=t[s]===void 0&&l!==void 0?l[s]:t[s])}var s=arguments.length-2;if(s===1)r.children=n;else if(1<s){l=Array(s);for(var c=0;c<s;c++)l[c]=arguments[c+2];r.children=l}return{$$typeof:so,type:e.type,key:i,ref:o,props:r,_owner:a}};ce.createContext=function(e){return e={$$typeof:kv,_currentValue:e,_currentValue2:e,_threadCount:0,Provider:null,Consumer:null,_defaultValue:null,_globalName:null},e.Provider={$$typeof:Sv,_context:e},e.Consumer=e};ce.createElement=uh;ce.createFactory=function(e){var t=uh.bind(null,e);return t.type=e,t};ce.createRef=function(){return{current:null}};ce.forwardRef=function(e){return{$$typeof:jv,render:e}};ce.isValidElement=Zu;ce.lazy=function(e){return{$$typeof:Ov,_payload:{_status:-1,_result:e},_init:Mv}};ce.memo=function(e,t){return{$$typeof:Ev,type:e,compare:t===void 0?null:t}};ce.startTransition=function(e){var t=Xo.transition;Xo.transition={};try{e()}finally{Xo.transition=t}};ce.unstable_act=function(){throw Error("act(...) is not supported in production builds of React.")};ce.useCallback=function(e,t){return ct.current.useCallback(e,t)};ce.useContext=function(e){return ct.current.useContext(e)};ce.useDebugValue=function(){};ce.useDeferredValue=function(e){return ct.current.useDeferredValue(e)};ce.useEffect=function(e,t){return ct.current.useEffect(e,t)};ce.useId=function(){return ct.current.useId()};ce.useImperativeHandle=function(e,t,n){return ct.current.useImperativeHandle(e,t,n)};ce.useInsertionEffect=function(e,t){return ct.current.useInsertionEffect(e,t)};ce.useLayoutEffect=function(e,t){return ct.current.useLayoutEffect(e,t)};ce.useMemo=function(e,t){return ct.current.useMemo(e,t)};ce.useReducer=function(e,t,n){return ct.current.useReducer(e,t,n)};ce.useRef=function(e){return ct.current.useRef(e)};ce.useState=function(e){return ct.current.useState(e)};ce.useSyncExternalStore=function(e,t,n){return ct.current.useSyncExternalStore(e,t,n)};ce.useTransition=function(){return ct.current.useTransition()};ce.version="18.2.0";nh.exports=ce;var M=nh.exports;const Ce=ao(M),jd=gv({__proto__:null,default:Ce},[M]);/**
 * @license React
 * react-jsx-runtime.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */var Iv=M,Dv=Symbol.for("react.element"),Lv=Symbol.for("react.fragment"),Av=Object.prototype.hasOwnProperty,zv=Iv.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED.ReactCurrentOwner,Fv={key:!0,ref:!0,__self:!0,__source:!0};function ch(e,t,n){var r,i={},o=null,a=null;n!==void 0&&(o=""+n),t.key!==void 0&&(o=""+t.key),t.ref!==void 0&&(a=t.ref);for(r in t)Av.call(t,r)&&!Fv.hasOwnProperty(r)&&(i[r]=t[r]);if(e&&e.defaultProps)for(r in t=e.defaultProps,t)i[r]===void 0&&(i[r]=t[r]);return{$$typeof:Dv,type:e,key:o,ref:a,props:i,_owner:zv.current}}rs.Fragment=Lv;rs.jsx=ch;rs.jsxs=ch;th.exports=rs;var u=th.exports,Vl={},dh={exports:{}},Et={},fh={exports:{}},ph={};/**
 * @license React
 * scheduler.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */(function(e){function t(F,Q){var Y=F.length;F.push(Q);e:for(;0<Y;){var de=Y-1>>>1,re=F[de];if(0<i(re,Q))F[de]=Q,F[Y]=re,Y=de;else break e}}function n(F){return F.length===0?null:F[0]}function r(F){if(F.length===0)return null;var Q=F[0],Y=F.pop();if(Y!==Q){F[0]=Y;e:for(var de=0,re=F.length,Oe=re>>>1;de<Oe;){var be=2*(de+1)-1,Ue=F[be],me=be+1,Se=F[me];if(0>i(Ue,Y))me<re&&0>i(Se,Ue)?(F[de]=Se,F[me]=Y,de=me):(F[de]=Ue,F[be]=Y,de=be);else if(me<re&&0>i(Se,Y))F[de]=Se,F[me]=Y,de=me;else break e}}return Q}function i(F,Q){var Y=F.sortIndex-Q.sortIndex;return Y!==0?Y:F.id-Q.id}if(typeof performance=="object"&&typeof performance.now=="function"){var o=performance;e.unstable_now=function(){return o.now()}}else{var a=Date,l=a.now();e.unstable_now=function(){return a.now()-l}}var s=[],c=[],d=1,f=null,m=3,y=!1,g=!1,x=!1,w=typeof setTimeout=="function"?setTimeout:null,p=typeof clearTimeout=="function"?clearTimeout:null,h=typeof setImmediate<"u"?setImmediate:null;typeof navigator<"u"&&navigator.scheduling!==void 0&&navigator.scheduling.isInputPending!==void 0&&navigator.scheduling.isInputPending.bind(navigator.scheduling);function v(F){for(var Q=n(c);Q!==null;){if(Q.callback===null)r(c);else if(Q.startTime<=F)r(c),Q.sortIndex=Q.expirationTime,t(s,Q);else break;Q=n(c)}}function b(F){if(x=!1,v(F),!g)if(n(s)!==null)g=!0,te(k);else{var Q=n(c);Q!==null&&ve(b,Q.startTime-F)}}function k(F,Q){g=!1,x&&(x=!1,p(P),P=-1),y=!0;var Y=m;try{for(v(Q),f=n(s);f!==null&&(!(f.expirationTime>Q)||F&&!W());){var de=f.callback;if(typeof de=="function"){f.callback=null,m=f.priorityLevel;var re=de(f.expirationTime<=Q);Q=e.unstable_now(),typeof re=="function"?f.callback=re:f===n(s)&&r(s),v(Q)}else r(s);f=n(s)}if(f!==null)var Oe=!0;else{var be=n(c);be!==null&&ve(b,be.startTime-Q),Oe=!1}return Oe}finally{f=null,m=Y,y=!1}}var _=!1,E=null,P=-1,T=5,I=-1;function W(){return!(e.unstable_now()-I<T)}function A(){if(E!==null){var F=e.unstable_now();I=F;var Q=!0;try{Q=E(!0,F)}finally{Q?D():(_=!1,E=null)}}else _=!1}var D;if(typeof h=="function")D=function(){h(A)};else if(typeof MessageChannel<"u"){var q=new MessageChannel,ee=q.port2;q.port1.onmessage=A,D=function(){ee.postMessage(null)}}else D=function(){w(A,0)};function te(F){E=F,_||(_=!0,D())}function ve(F,Q){P=w(function(){F(e.unstable_now())},Q)}e.unstable_IdlePriority=5,e.unstable_ImmediatePriority=1,e.unstable_LowPriority=4,e.unstable_NormalPriority=3,e.unstable_Profiling=null,e.unstable_UserBlockingPriority=2,e.unstable_cancelCallback=function(F){F.callback=null},e.unstable_continueExecution=function(){g||y||(g=!0,te(k))},e.unstable_forceFrameRate=function(F){0>F||125<F?console.error("forceFrameRate takes a positive int between 0 and 125, forcing frame rates higher than 125 fps is not supported"):T=0<F?Math.floor(1e3/F):5},e.unstable_getCurrentPriorityLevel=function(){return m},e.unstable_getFirstCallbackNode=function(){return n(s)},e.unstable_next=function(F){switch(m){case 1:case 2:case 3:var Q=3;break;default:Q=m}var Y=m;m=Q;try{return F()}finally{m=Y}},e.unstable_pauseExecution=function(){},e.unstable_requestPaint=function(){},e.unstable_runWithPriority=function(F,Q){switch(F){case 1:case 2:case 3:case 4:case 5:break;default:F=3}var Y=m;m=F;try{return Q()}finally{m=Y}},e.unstable_scheduleCallback=function(F,Q,Y){var de=e.unstable_now();switch(typeof Y=="object"&&Y!==null?(Y=Y.delay,Y=typeof Y=="number"&&0<Y?de+Y:de):Y=de,F){case 1:var re=-1;break;case 2:re=250;break;case 5:re=1073741823;break;case 4:re=1e4;break;default:re=5e3}return re=Y+re,F={id:d++,callback:Q,priorityLevel:F,startTime:Y,expirationTime:re,sortIndex:-1},Y>de?(F.sortIndex=Y,t(c,F),n(s)===null&&F===n(c)&&(x?(p(P),P=-1):x=!0,ve(b,Y-de))):(F.sortIndex=re,t(s,F),g||y||(g=!0,te(k))),F},e.unstable_shouldYield=W,e.unstable_wrapCallback=function(F){var Q=m;return function(){var Y=m;m=Q;try{return F.apply(this,arguments)}finally{m=Y}}}})(ph);fh.exports=ph;var Vv=fh.exports;/**
 * @license React
 * react-dom.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */var hh=M,jt=Vv;function L(e){for(var t="https://reactjs.org/docs/error-decoder.html?invariant="+e,n=1;n<arguments.length;n++)t+="&args[]="+encodeURIComponent(arguments[n]);return"Minified React error #"+e+"; visit "+t+" for the full message or use the non-minified dev environment for full errors and additional helpful warnings."}var mh=new Set,Vi={};function gr(e,t){Hr(e,t),Hr(e+"Capture",t)}function Hr(e,t){for(Vi[e]=t,e=0;e<t.length;e++)mh.add(t[e])}var bn=!(typeof window>"u"||typeof window.document>"u"||typeof window.document.createElement>"u"),Nl=Object.prototype.hasOwnProperty,Nv=/^[:A-Z_a-z\u00C0-\u00D6\u00D8-\u00F6\u00F8-\u02FF\u0370-\u037D\u037F-\u1FFF\u200C-\u200D\u2070-\u218F\u2C00-\u2FEF\u3001-\uD7FF\uF900-\uFDCF\uFDF0-\uFFFD][:A-Z_a-z\u00C0-\u00D6\u00D8-\u00F6\u00F8-\u02FF\u0370-\u037D\u037F-\u1FFF\u200C-\u200D\u2070-\u218F\u2C00-\u2FEF\u3001-\uD7FF\uF900-\uFDCF\uFDF0-\uFFFD\-.0-9\u00B7\u0300-\u036F\u203F-\u2040]*$/,Cd={},Ed={};function $v(e){return Nl.call(Ed,e)?!0:Nl.call(Cd,e)?!1:Nv.test(e)?Ed[e]=!0:(Cd[e]=!0,!1)}function Uv(e,t,n,r){if(n!==null&&n.type===0)return!1;switch(typeof t){case"function":case"symbol":return!0;case"boolean":return r?!1:n!==null?!n.acceptsBooleans:(e=e.toLowerCase().slice(0,5),e!=="data-"&&e!=="aria-");default:return!1}}function Wv(e,t,n,r){if(t===null||typeof t>"u"||Uv(e,t,n,r))return!0;if(r)return!1;if(n!==null)switch(n.type){case 3:return!t;case 4:return t===!1;case 5:return isNaN(t);case 6:return isNaN(t)||1>t}return!1}function dt(e,t,n,r,i,o,a){this.acceptsBooleans=t===2||t===3||t===4,this.attributeName=r,this.attributeNamespace=i,this.mustUseProperty=n,this.propertyName=e,this.type=t,this.sanitizeURL=o,this.removeEmptyString=a}var Ze={};"children dangerouslySetInnerHTML defaultValue defaultChecked innerHTML suppressContentEditableWarning suppressHydrationWarning style".split(" ").forEach(function(e){Ze[e]=new dt(e,0,!1,e,null,!1,!1)});[["acceptCharset","accept-charset"],["className","class"],["htmlFor","for"],["httpEquiv","http-equiv"]].forEach(function(e){var t=e[0];Ze[t]=new dt(t,1,!1,e[1],null,!1,!1)});["contentEditable","draggable","spellCheck","value"].forEach(function(e){Ze[e]=new dt(e,2,!1,e.toLowerCase(),null,!1,!1)});["autoReverse","externalResourcesRequired","focusable","preserveAlpha"].forEach(function(e){Ze[e]=new dt(e,2,!1,e,null,!1,!1)});"allowFullScreen async autoFocus autoPlay controls default defer disabled disablePictureInPicture disableRemotePlayback formNoValidate hidden loop noModule noValidate open playsInline readOnly required reversed scoped seamless itemScope".split(" ").forEach(function(e){Ze[e]=new dt(e,3,!1,e.toLowerCase(),null,!1,!1)});["checked","multiple","muted","selected"].forEach(function(e){Ze[e]=new dt(e,3,!0,e,null,!1,!1)});["capture","download"].forEach(function(e){Ze[e]=new dt(e,4,!1,e,null,!1,!1)});["cols","rows","size","span"].forEach(function(e){Ze[e]=new dt(e,6,!1,e,null,!1,!1)});["rowSpan","start"].forEach(function(e){Ze[e]=new dt(e,5,!1,e.toLowerCase(),null,!1,!1)});var ec=/[\-:]([a-z])/g;function tc(e){return e[1].toUpperCase()}"accent-height alignment-baseline arabic-form baseline-shift cap-height clip-path clip-rule color-interpolation color-interpolation-filters color-profile color-rendering dominant-baseline enable-background fill-opacity fill-rule flood-color flood-opacity font-family font-size font-size-adjust font-stretch font-style font-variant font-weight glyph-name glyph-orientation-horizontal glyph-orientation-vertical horiz-adv-x horiz-origin-x image-rendering letter-spacing lighting-color marker-end marker-mid marker-start overline-position overline-thickness paint-order panose-1 pointer-events rendering-intent shape-rendering stop-color stop-opacity strikethrough-position strikethrough-thickness stroke-dasharray stroke-dashoffset stroke-linecap stroke-linejoin stroke-miterlimit stroke-opacity stroke-width text-anchor text-decoration text-rendering underline-position underline-thickness unicode-bidi unicode-range units-per-em v-alphabetic v-hanging v-ideographic v-mathematical vector-effect vert-adv-y vert-origin-x vert-origin-y word-spacing writing-mode xmlns:xlink x-height".split(" ").forEach(function(e){var t=e.replace(ec,tc);Ze[t]=new dt(t,1,!1,e,null,!1,!1)});"xlink:actuate xlink:arcrole xlink:role xlink:show xlink:title xlink:type".split(" ").forEach(function(e){var t=e.replace(ec,tc);Ze[t]=new dt(t,1,!1,e,"http://www.w3.org/1999/xlink",!1,!1)});["xml:base","xml:lang","xml:space"].forEach(function(e){var t=e.replace(ec,tc);Ze[t]=new dt(t,1,!1,e,"http://www.w3.org/XML/1998/namespace",!1,!1)});["tabIndex","crossOrigin"].forEach(function(e){Ze[e]=new dt(e,1,!1,e.toLowerCase(),null,!1,!1)});Ze.xlinkHref=new dt("xlinkHref",1,!1,"xlink:href","http://www.w3.org/1999/xlink",!0,!1);["src","href","action","formAction"].forEach(function(e){Ze[e]=new dt(e,1,!1,e.toLowerCase(),null,!0,!0)});function nc(e,t,n,r){var i=Ze.hasOwnProperty(t)?Ze[t]:null;(i!==null?i.type!==0:r||!(2<t.length)||t[0]!=="o"&&t[0]!=="O"||t[1]!=="n"&&t[1]!=="N")&&(Wv(t,n,i,r)&&(n=null),r||i===null?$v(t)&&(n===null?e.removeAttribute(t):e.setAttribute(t,""+n)):i.mustUseProperty?e[i.propertyName]=n===null?i.type===3?!1:"":n:(t=i.attributeName,r=i.attributeNamespace,n===null?e.removeAttribute(t):(i=i.type,n=i===3||i===4&&n===!0?"":""+n,r?e.setAttributeNS(r,t,n):e.setAttribute(t,n))))}var Cn=hh.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED,bo=Symbol.for("react.element"),Cr=Symbol.for("react.portal"),Er=Symbol.for("react.fragment"),rc=Symbol.for("react.strict_mode"),$l=Symbol.for("react.profiler"),gh=Symbol.for("react.provider"),xh=Symbol.for("react.context"),ic=Symbol.for("react.forward_ref"),Ul=Symbol.for("react.suspense"),Wl=Symbol.for("react.suspense_list"),oc=Symbol.for("react.memo"),An=Symbol.for("react.lazy"),vh=Symbol.for("react.offscreen"),Od=Symbol.iterator;function oi(e){return e===null||typeof e!="object"?null:(e=Od&&e[Od]||e["@@iterator"],typeof e=="function"?e:null)}var Ie=Object.assign,Ws;function Si(e){if(Ws===void 0)try{throw Error()}catch(n){var t=n.stack.trim().match(/\n( *(at )?)/);Ws=t&&t[1]||""}return`
`+Ws+e}var Bs=!1;function Hs(e,t){if(!e||Bs)return"";Bs=!0;var n=Error.prepareStackTrace;Error.prepareStackTrace=void 0;try{if(t)if(t=function(){throw Error()},Object.defineProperty(t.prototype,"props",{set:function(){throw Error()}}),typeof Reflect=="object"&&Reflect.construct){try{Reflect.construct(t,[])}catch(c){var r=c}Reflect.construct(e,[],t)}else{try{t.call()}catch(c){r=c}e.call(t.prototype)}else{try{throw Error()}catch(c){r=c}e()}}catch(c){if(c&&r&&typeof c.stack=="string"){for(var i=c.stack.split(`
`),o=r.stack.split(`
`),a=i.length-1,l=o.length-1;1<=a&&0<=l&&i[a]!==o[l];)l--;for(;1<=a&&0<=l;a--,l--)if(i[a]!==o[l]){if(a!==1||l!==1)do if(a--,l--,0>l||i[a]!==o[l]){var s=`
`+i[a].replace(" at new "," at ");return e.displayName&&s.includes("<anonymous>")&&(s=s.replace("<anonymous>",e.displayName)),s}while(1<=a&&0<=l);break}}}finally{Bs=!1,Error.prepareStackTrace=n}return(e=e?e.displayName||e.name:"")?Si(e):""}function Bv(e){switch(e.tag){case 5:return Si(e.type);case 16:return Si("Lazy");case 13:return Si("Suspense");case 19:return Si("SuspenseList");case 0:case 2:case 15:return e=Hs(e.type,!1),e;case 11:return e=Hs(e.type.render,!1),e;case 1:return e=Hs(e.type,!0),e;default:return""}}function Bl(e){if(e==null)return null;if(typeof e=="function")return e.displayName||e.name||null;if(typeof e=="string")return e;switch(e){case Er:return"Fragment";case Cr:return"Portal";case $l:return"Profiler";case rc:return"StrictMode";case Ul:return"Suspense";case Wl:return"SuspenseList"}if(typeof e=="object")switch(e.$$typeof){case xh:return(e.displayName||"Context")+".Consumer";case gh:return(e._context.displayName||"Context")+".Provider";case ic:var t=e.render;return e=e.displayName,e||(e=t.displayName||t.name||"",e=e!==""?"ForwardRef("+e+")":"ForwardRef"),e;case oc:return t=e.displayName||null,t!==null?t:Bl(e.type)||"Memo";case An:t=e._payload,e=e._init;try{return Bl(e(t))}catch{}}return null}function Hv(e){var t=e.type;switch(e.tag){case 24:return"Cache";case 9:return(t.displayName||"Context")+".Consumer";case 10:return(t._context.displayName||"Context")+".Provider";case 18:return"DehydratedFragment";case 11:return e=t.render,e=e.displayName||e.name||"",t.displayName||(e!==""?"ForwardRef("+e+")":"ForwardRef");case 7:return"Fragment";case 5:return t;case 4:return"Portal";case 3:return"Root";case 6:return"Text";case 16:return Bl(t);case 8:return t===rc?"StrictMode":"Mode";case 22:return"Offscreen";case 12:return"Profiler";case 21:return"Scope";case 13:return"Suspense";case 19:return"SuspenseList";case 25:return"TracingMarker";case 1:case 0:case 17:case 2:case 14:case 15:if(typeof t=="function")return t.displayName||t.name||null;if(typeof t=="string")return t}return null}function Xn(e){switch(typeof e){case"boolean":case"number":case"string":case"undefined":return e;case"object":return e;default:return""}}function yh(e){var t=e.type;return(e=e.nodeName)&&e.toLowerCase()==="input"&&(t==="checkbox"||t==="radio")}function Qv(e){var t=yh(e)?"checked":"value",n=Object.getOwnPropertyDescriptor(e.constructor.prototype,t),r=""+e[t];if(!e.hasOwnProperty(t)&&typeof n<"u"&&typeof n.get=="function"&&typeof n.set=="function"){var i=n.get,o=n.set;return Object.defineProperty(e,t,{configurable:!0,get:function(){return i.call(this)},set:function(a){r=""+a,o.call(this,a)}}),Object.defineProperty(e,t,{enumerable:n.enumerable}),{getValue:function(){return r},setValue:function(a){r=""+a},stopTracking:function(){e._valueTracker=null,delete e[t]}}}}function So(e){e._valueTracker||(e._valueTracker=Qv(e))}function wh(e){if(!e)return!1;var t=e._valueTracker;if(!t)return!0;var n=t.getValue(),r="";return e&&(r=yh(e)?e.checked?"true":"false":e.value),e=r,e!==n?(t.setValue(e),!0):!1}function ya(e){if(e=e||(typeof document<"u"?document:void 0),typeof e>"u")return null;try{return e.activeElement||e.body}catch{return e.body}}function Hl(e,t){var n=t.checked;return Ie({},t,{defaultChecked:void 0,defaultValue:void 0,value:void 0,checked:n??e._wrapperState.initialChecked})}function _d(e,t){var n=t.defaultValue==null?"":t.defaultValue,r=t.checked!=null?t.checked:t.defaultChecked;n=Xn(t.value!=null?t.value:n),e._wrapperState={initialChecked:r,initialValue:n,controlled:t.type==="checkbox"||t.type==="radio"?t.checked!=null:t.value!=null}}function bh(e,t){t=t.checked,t!=null&&nc(e,"checked",t,!1)}function Ql(e,t){bh(e,t);var n=Xn(t.value),r=t.type;if(n!=null)r==="number"?(n===0&&e.value===""||e.value!=n)&&(e.value=""+n):e.value!==""+n&&(e.value=""+n);else if(r==="submit"||r==="reset"){e.removeAttribute("value");return}t.hasOwnProperty("value")?Yl(e,t.type,n):t.hasOwnProperty("defaultValue")&&Yl(e,t.type,Xn(t.defaultValue)),t.checked==null&&t.defaultChecked!=null&&(e.defaultChecked=!!t.defaultChecked)}function Pd(e,t,n){if(t.hasOwnProperty("value")||t.hasOwnProperty("defaultValue")){var r=t.type;if(!(r!=="submit"&&r!=="reset"||t.value!==void 0&&t.value!==null))return;t=""+e._wrapperState.initialValue,n||t===e.value||(e.value=t),e.defaultValue=t}n=e.name,n!==""&&(e.name=""),e.defaultChecked=!!e._wrapperState.initialChecked,n!==""&&(e.name=n)}function Yl(e,t,n){(t!=="number"||ya(e.ownerDocument)!==e)&&(n==null?e.defaultValue=""+e._wrapperState.initialValue:e.defaultValue!==""+n&&(e.defaultValue=""+n))}var ki=Array.isArray;function Fr(e,t,n,r){if(e=e.options,t){t={};for(var i=0;i<n.length;i++)t["$"+n[i]]=!0;for(n=0;n<e.length;n++)i=t.hasOwnProperty("$"+e[n].value),e[n].selected!==i&&(e[n].selected=i),i&&r&&(e[n].defaultSelected=!0)}else{for(n=""+Xn(n),t=null,i=0;i<e.length;i++){if(e[i].value===n){e[i].selected=!0,r&&(e[i].defaultSelected=!0);return}t!==null||e[i].disabled||(t=e[i])}t!==null&&(t.selected=!0)}}function Kl(e,t){if(t.dangerouslySetInnerHTML!=null)throw Error(L(91));return Ie({},t,{value:void 0,defaultValue:void 0,children:""+e._wrapperState.initialValue})}function Td(e,t){var n=t.value;if(n==null){if(n=t.children,t=t.defaultValue,n!=null){if(t!=null)throw Error(L(92));if(ki(n)){if(1<n.length)throw Error(L(93));n=n[0]}t=n}t==null&&(t=""),n=t}e._wrapperState={initialValue:Xn(n)}}function Sh(e,t){var n=Xn(t.value),r=Xn(t.defaultValue);n!=null&&(n=""+n,n!==e.value&&(e.value=n),t.defaultValue==null&&e.defaultValue!==n&&(e.defaultValue=n)),r!=null&&(e.defaultValue=""+r)}function Md(e){var t=e.textContent;t===e._wrapperState.initialValue&&t!==""&&t!==null&&(e.value=t)}function kh(e){switch(e){case"svg":return"http://www.w3.org/2000/svg";case"math":return"http://www.w3.org/1998/Math/MathML";default:return"http://www.w3.org/1999/xhtml"}}function Gl(e,t){return e==null||e==="http://www.w3.org/1999/xhtml"?kh(t):e==="http://www.w3.org/2000/svg"&&t==="foreignObject"?"http://www.w3.org/1999/xhtml":e}var ko,jh=function(e){return typeof MSApp<"u"&&MSApp.execUnsafeLocalFunction?function(t,n,r,i){MSApp.execUnsafeLocalFunction(function(){return e(t,n,r,i)})}:e}(function(e,t){if(e.namespaceURI!=="http://www.w3.org/2000/svg"||"innerHTML"in e)e.innerHTML=t;else{for(ko=ko||document.createElement("div"),ko.innerHTML="<svg>"+t.valueOf().toString()+"</svg>",t=ko.firstChild;e.firstChild;)e.removeChild(e.firstChild);for(;t.firstChild;)e.appendChild(t.firstChild)}});function Ni(e,t){if(t){var n=e.firstChild;if(n&&n===e.lastChild&&n.nodeType===3){n.nodeValue=t;return}}e.textContent=t}var _i={animationIterationCount:!0,aspectRatio:!0,borderImageOutset:!0,borderImageSlice:!0,borderImageWidth:!0,boxFlex:!0,boxFlexGroup:!0,boxOrdinalGroup:!0,columnCount:!0,columns:!0,flex:!0,flexGrow:!0,flexPositive:!0,flexShrink:!0,flexNegative:!0,flexOrder:!0,gridArea:!0,gridRow:!0,gridRowEnd:!0,gridRowSpan:!0,gridRowStart:!0,gridColumn:!0,gridColumnEnd:!0,gridColumnSpan:!0,gridColumnStart:!0,fontWeight:!0,lineClamp:!0,lineHeight:!0,opacity:!0,order:!0,orphans:!0,tabSize:!0,widows:!0,zIndex:!0,zoom:!0,fillOpacity:!0,floodOpacity:!0,stopOpacity:!0,strokeDasharray:!0,strokeDashoffset:!0,strokeMiterlimit:!0,strokeOpacity:!0,strokeWidth:!0},Yv=["Webkit","ms","Moz","O"];Object.keys(_i).forEach(function(e){Yv.forEach(function(t){t=t+e.charAt(0).toUpperCase()+e.substring(1),_i[t]=_i[e]})});function Ch(e,t,n){return t==null||typeof t=="boolean"||t===""?"":n||typeof t!="number"||t===0||_i.hasOwnProperty(e)&&_i[e]?(""+t).trim():t+"px"}function Eh(e,t){e=e.style;for(var n in t)if(t.hasOwnProperty(n)){var r=n.indexOf("--")===0,i=Ch(n,t[n],r);n==="float"&&(n="cssFloat"),r?e.setProperty(n,i):e[n]=i}}var Kv=Ie({menuitem:!0},{area:!0,base:!0,br:!0,col:!0,embed:!0,hr:!0,img:!0,input:!0,keygen:!0,link:!0,meta:!0,param:!0,source:!0,track:!0,wbr:!0});function ql(e,t){if(t){if(Kv[e]&&(t.children!=null||t.dangerouslySetInnerHTML!=null))throw Error(L(137,e));if(t.dangerouslySetInnerHTML!=null){if(t.children!=null)throw Error(L(60));if(typeof t.dangerouslySetInnerHTML!="object"||!("__html"in t.dangerouslySetInnerHTML))throw Error(L(61))}if(t.style!=null&&typeof t.style!="object")throw Error(L(62))}}function Xl(e,t){if(e.indexOf("-")===-1)return typeof t.is=="string";switch(e){case"annotation-xml":case"color-profile":case"font-face":case"font-face-src":case"font-face-uri":case"font-face-format":case"font-face-name":case"missing-glyph":return!1;default:return!0}}var Jl=null;function ac(e){return e=e.target||e.srcElement||window,e.correspondingUseElement&&(e=e.correspondingUseElement),e.nodeType===3?e.parentNode:e}var Zl=null,Vr=null,Nr=null;function Rd(e){if(e=co(e)){if(typeof Zl!="function")throw Error(L(280));var t=e.stateNode;t&&(t=ls(t),Zl(e.stateNode,e.type,t))}}function Oh(e){Vr?Nr?Nr.push(e):Nr=[e]:Vr=e}function _h(){if(Vr){var e=Vr,t=Nr;if(Nr=Vr=null,Rd(e),t)for(e=0;e<t.length;e++)Rd(t[e])}}function Ph(e,t){return e(t)}function Th(){}var Qs=!1;function Mh(e,t,n){if(Qs)return e(t,n);Qs=!0;try{return Ph(e,t,n)}finally{Qs=!1,(Vr!==null||Nr!==null)&&(Th(),_h())}}function $i(e,t){var n=e.stateNode;if(n===null)return null;var r=ls(n);if(r===null)return null;n=r[t];e:switch(t){case"onClick":case"onClickCapture":case"onDoubleClick":case"onDoubleClickCapture":case"onMouseDown":case"onMouseDownCapture":case"onMouseMove":case"onMouseMoveCapture":case"onMouseUp":case"onMouseUpCapture":case"onMouseEnter":(r=!r.disabled)||(e=e.type,r=!(e==="button"||e==="input"||e==="select"||e==="textarea")),e=!r;break e;default:e=!1}if(e)return null;if(n&&typeof n!="function")throw Error(L(231,t,typeof n));return n}var eu=!1;if(bn)try{var ai={};Object.defineProperty(ai,"passive",{get:function(){eu=!0}}),window.addEventListener("test",ai,ai),window.removeEventListener("test",ai,ai)}catch{eu=!1}function Gv(e,t,n,r,i,o,a,l,s){var c=Array.prototype.slice.call(arguments,3);try{t.apply(n,c)}catch(d){this.onError(d)}}var Pi=!1,wa=null,ba=!1,tu=null,qv={onError:function(e){Pi=!0,wa=e}};function Xv(e,t,n,r,i,o,a,l,s){Pi=!1,wa=null,Gv.apply(qv,arguments)}function Jv(e,t,n,r,i,o,a,l,s){if(Xv.apply(this,arguments),Pi){if(Pi){var c=wa;Pi=!1,wa=null}else throw Error(L(198));ba||(ba=!0,tu=c)}}function xr(e){var t=e,n=e;if(e.alternate)for(;t.return;)t=t.return;else{e=t;do t=e,t.flags&4098&&(n=t.return),e=t.return;while(e)}return t.tag===3?n:null}function Rh(e){if(e.tag===13){var t=e.memoizedState;if(t===null&&(e=e.alternate,e!==null&&(t=e.memoizedState)),t!==null)return t.dehydrated}return null}function Id(e){if(xr(e)!==e)throw Error(L(188))}function Zv(e){var t=e.alternate;if(!t){if(t=xr(e),t===null)throw Error(L(188));return t!==e?null:e}for(var n=e,r=t;;){var i=n.return;if(i===null)break;var o=i.alternate;if(o===null){if(r=i.return,r!==null){n=r;continue}break}if(i.child===o.child){for(o=i.child;o;){if(o===n)return Id(i),e;if(o===r)return Id(i),t;o=o.sibling}throw Error(L(188))}if(n.return!==r.return)n=i,r=o;else{for(var a=!1,l=i.child;l;){if(l===n){a=!0,n=i,r=o;break}if(l===r){a=!0,r=i,n=o;break}l=l.sibling}if(!a){for(l=o.child;l;){if(l===n){a=!0,n=o,r=i;break}if(l===r){a=!0,r=o,n=i;break}l=l.sibling}if(!a)throw Error(L(189))}}if(n.alternate!==r)throw Error(L(190))}if(n.tag!==3)throw Error(L(188));return n.stateNode.current===n?e:t}function Ih(e){return e=Zv(e),e!==null?Dh(e):null}function Dh(e){if(e.tag===5||e.tag===6)return e;for(e=e.child;e!==null;){var t=Dh(e);if(t!==null)return t;e=e.sibling}return null}var Lh=jt.unstable_scheduleCallback,Dd=jt.unstable_cancelCallback,e0=jt.unstable_shouldYield,t0=jt.unstable_requestPaint,ze=jt.unstable_now,n0=jt.unstable_getCurrentPriorityLevel,sc=jt.unstable_ImmediatePriority,Ah=jt.unstable_UserBlockingPriority,Sa=jt.unstable_NormalPriority,r0=jt.unstable_LowPriority,zh=jt.unstable_IdlePriority,is=null,on=null;function i0(e){if(on&&typeof on.onCommitFiberRoot=="function")try{on.onCommitFiberRoot(is,e,void 0,(e.current.flags&128)===128)}catch{}}var Ht=Math.clz32?Math.clz32:s0,o0=Math.log,a0=Math.LN2;function s0(e){return e>>>=0,e===0?32:31-(o0(e)/a0|0)|0}var jo=64,Co=4194304;function ji(e){switch(e&-e){case 1:return 1;case 2:return 2;case 4:return 4;case 8:return 8;case 16:return 16;case 32:return 32;case 64:case 128:case 256:case 512:case 1024:case 2048:case 4096:case 8192:case 16384:case 32768:case 65536:case 131072:case 262144:case 524288:case 1048576:case 2097152:return e&4194240;case 4194304:case 8388608:case 16777216:case 33554432:case 67108864:return e&130023424;case 134217728:return 134217728;case 268435456:return 268435456;case 536870912:return 536870912;case 1073741824:return 1073741824;default:return e}}function ka(e,t){var n=e.pendingLanes;if(n===0)return 0;var r=0,i=e.suspendedLanes,o=e.pingedLanes,a=n&268435455;if(a!==0){var l=a&~i;l!==0?r=ji(l):(o&=a,o!==0&&(r=ji(o)))}else a=n&~i,a!==0?r=ji(a):o!==0&&(r=ji(o));if(r===0)return 0;if(t!==0&&t!==r&&!(t&i)&&(i=r&-r,o=t&-t,i>=o||i===16&&(o&4194240)!==0))return t;if(r&4&&(r|=n&16),t=e.entangledLanes,t!==0)for(e=e.entanglements,t&=r;0<t;)n=31-Ht(t),i=1<<n,r|=e[n],t&=~i;return r}function l0(e,t){switch(e){case 1:case 2:case 4:return t+250;case 8:case 16:case 32:case 64:case 128:case 256:case 512:case 1024:case 2048:case 4096:case 8192:case 16384:case 32768:case 65536:case 131072:case 262144:case 524288:case 1048576:case 2097152:return t+5e3;case 4194304:case 8388608:case 16777216:case 33554432:case 67108864:return-1;case 134217728:case 268435456:case 536870912:case 1073741824:return-1;default:return-1}}function u0(e,t){for(var n=e.suspendedLanes,r=e.pingedLanes,i=e.expirationTimes,o=e.pendingLanes;0<o;){var a=31-Ht(o),l=1<<a,s=i[a];s===-1?(!(l&n)||l&r)&&(i[a]=l0(l,t)):s<=t&&(e.expiredLanes|=l),o&=~l}}function nu(e){return e=e.pendingLanes&-1073741825,e!==0?e:e&1073741824?1073741824:0}function Fh(){var e=jo;return jo<<=1,!(jo&4194240)&&(jo=64),e}function Ys(e){for(var t=[],n=0;31>n;n++)t.push(e);return t}function lo(e,t,n){e.pendingLanes|=t,t!==536870912&&(e.suspendedLanes=0,e.pingedLanes=0),e=e.eventTimes,t=31-Ht(t),e[t]=n}function c0(e,t){var n=e.pendingLanes&~t;e.pendingLanes=t,e.suspendedLanes=0,e.pingedLanes=0,e.expiredLanes&=t,e.mutableReadLanes&=t,e.entangledLanes&=t,t=e.entanglements;var r=e.eventTimes;for(e=e.expirationTimes;0<n;){var i=31-Ht(n),o=1<<i;t[i]=0,r[i]=-1,e[i]=-1,n&=~o}}function lc(e,t){var n=e.entangledLanes|=t;for(e=e.entanglements;n;){var r=31-Ht(n),i=1<<r;i&t|e[r]&t&&(e[r]|=t),n&=~i}}var ye=0;function Vh(e){return e&=-e,1<e?4<e?e&268435455?16:536870912:4:1}var Nh,uc,$h,Uh,Wh,ru=!1,Eo=[],Wn=null,Bn=null,Hn=null,Ui=new Map,Wi=new Map,Fn=[],d0="mousedown mouseup touchcancel touchend touchstart auxclick dblclick pointercancel pointerdown pointerup dragend dragstart drop compositionend compositionstart keydown keypress keyup input textInput copy cut paste click change contextmenu reset submit".split(" ");function Ld(e,t){switch(e){case"focusin":case"focusout":Wn=null;break;case"dragenter":case"dragleave":Bn=null;break;case"mouseover":case"mouseout":Hn=null;break;case"pointerover":case"pointerout":Ui.delete(t.pointerId);break;case"gotpointercapture":case"lostpointercapture":Wi.delete(t.pointerId)}}function si(e,t,n,r,i,o){return e===null||e.nativeEvent!==o?(e={blockedOn:t,domEventName:n,eventSystemFlags:r,nativeEvent:o,targetContainers:[i]},t!==null&&(t=co(t),t!==null&&uc(t)),e):(e.eventSystemFlags|=r,t=e.targetContainers,i!==null&&t.indexOf(i)===-1&&t.push(i),e)}function f0(e,t,n,r,i){switch(t){case"focusin":return Wn=si(Wn,e,t,n,r,i),!0;case"dragenter":return Bn=si(Bn,e,t,n,r,i),!0;case"mouseover":return Hn=si(Hn,e,t,n,r,i),!0;case"pointerover":var o=i.pointerId;return Ui.set(o,si(Ui.get(o)||null,e,t,n,r,i)),!0;case"gotpointercapture":return o=i.pointerId,Wi.set(o,si(Wi.get(o)||null,e,t,n,r,i)),!0}return!1}function Bh(e){var t=ir(e.target);if(t!==null){var n=xr(t);if(n!==null){if(t=n.tag,t===13){if(t=Rh(n),t!==null){e.blockedOn=t,Wh(e.priority,function(){$h(n)});return}}else if(t===3&&n.stateNode.current.memoizedState.isDehydrated){e.blockedOn=n.tag===3?n.stateNode.containerInfo:null;return}}}e.blockedOn=null}function Jo(e){if(e.blockedOn!==null)return!1;for(var t=e.targetContainers;0<t.length;){var n=iu(e.domEventName,e.eventSystemFlags,t[0],e.nativeEvent);if(n===null){n=e.nativeEvent;var r=new n.constructor(n.type,n);Jl=r,n.target.dispatchEvent(r),Jl=null}else return t=co(n),t!==null&&uc(t),e.blockedOn=n,!1;t.shift()}return!0}function Ad(e,t,n){Jo(e)&&n.delete(t)}function p0(){ru=!1,Wn!==null&&Jo(Wn)&&(Wn=null),Bn!==null&&Jo(Bn)&&(Bn=null),Hn!==null&&Jo(Hn)&&(Hn=null),Ui.forEach(Ad),Wi.forEach(Ad)}function li(e,t){e.blockedOn===t&&(e.blockedOn=null,ru||(ru=!0,jt.unstable_scheduleCallback(jt.unstable_NormalPriority,p0)))}function Bi(e){function t(i){return li(i,e)}if(0<Eo.length){li(Eo[0],e);for(var n=1;n<Eo.length;n++){var r=Eo[n];r.blockedOn===e&&(r.blockedOn=null)}}for(Wn!==null&&li(Wn,e),Bn!==null&&li(Bn,e),Hn!==null&&li(Hn,e),Ui.forEach(t),Wi.forEach(t),n=0;n<Fn.length;n++)r=Fn[n],r.blockedOn===e&&(r.blockedOn=null);for(;0<Fn.length&&(n=Fn[0],n.blockedOn===null);)Bh(n),n.blockedOn===null&&Fn.shift()}var $r=Cn.ReactCurrentBatchConfig,ja=!0;function h0(e,t,n,r){var i=ye,o=$r.transition;$r.transition=null;try{ye=1,cc(e,t,n,r)}finally{ye=i,$r.transition=o}}function m0(e,t,n,r){var i=ye,o=$r.transition;$r.transition=null;try{ye=4,cc(e,t,n,r)}finally{ye=i,$r.transition=o}}function cc(e,t,n,r){if(ja){var i=iu(e,t,n,r);if(i===null)rl(e,t,r,Ca,n),Ld(e,r);else if(f0(i,e,t,n,r))r.stopPropagation();else if(Ld(e,r),t&4&&-1<d0.indexOf(e)){for(;i!==null;){var o=co(i);if(o!==null&&Nh(o),o=iu(e,t,n,r),o===null&&rl(e,t,r,Ca,n),o===i)break;i=o}i!==null&&r.stopPropagation()}else rl(e,t,r,null,n)}}var Ca=null;function iu(e,t,n,r){if(Ca=null,e=ac(r),e=ir(e),e!==null)if(t=xr(e),t===null)e=null;else if(n=t.tag,n===13){if(e=Rh(t),e!==null)return e;e=null}else if(n===3){if(t.stateNode.current.memoizedState.isDehydrated)return t.tag===3?t.stateNode.containerInfo:null;e=null}else t!==e&&(e=null);return Ca=e,null}function Hh(e){switch(e){case"cancel":case"click":case"close":case"contextmenu":case"copy":case"cut":case"auxclick":case"dblclick":case"dragend":case"dragstart":case"drop":case"focusin":case"focusout":case"input":case"invalid":case"keydown":case"keypress":case"keyup":case"mousedown":case"mouseup":case"paste":case"pause":case"play":case"pointercancel":case"pointerdown":case"pointerup":case"ratechange":case"reset":case"resize":case"seeked":case"submit":case"touchcancel":case"touchend":case"touchstart":case"volumechange":case"change":case"selectionchange":case"textInput":case"compositionstart":case"compositionend":case"compositionupdate":case"beforeblur":case"afterblur":case"beforeinput":case"blur":case"fullscreenchange":case"focus":case"hashchange":case"popstate":case"select":case"selectstart":return 1;case"drag":case"dragenter":case"dragexit":case"dragleave":case"dragover":case"mousemove":case"mouseout":case"mouseover":case"pointermove":case"pointerout":case"pointerover":case"scroll":case"toggle":case"touchmove":case"wheel":case"mouseenter":case"mouseleave":case"pointerenter":case"pointerleave":return 4;case"message":switch(n0()){case sc:return 1;case Ah:return 4;case Sa:case r0:return 16;case zh:return 536870912;default:return 16}default:return 16}}var Nn=null,dc=null,Zo=null;function Qh(){if(Zo)return Zo;var e,t=dc,n=t.length,r,i="value"in Nn?Nn.value:Nn.textContent,o=i.length;for(e=0;e<n&&t[e]===i[e];e++);var a=n-e;for(r=1;r<=a&&t[n-r]===i[o-r];r++);return Zo=i.slice(e,1<r?1-r:void 0)}function ea(e){var t=e.keyCode;return"charCode"in e?(e=e.charCode,e===0&&t===13&&(e=13)):e=t,e===10&&(e=13),32<=e||e===13?e:0}function Oo(){return!0}function zd(){return!1}function Ot(e){function t(n,r,i,o,a){this._reactName=n,this._targetInst=i,this.type=r,this.nativeEvent=o,this.target=a,this.currentTarget=null;for(var l in e)e.hasOwnProperty(l)&&(n=e[l],this[l]=n?n(o):o[l]);return this.isDefaultPrevented=(o.defaultPrevented!=null?o.defaultPrevented:o.returnValue===!1)?Oo:zd,this.isPropagationStopped=zd,this}return Ie(t.prototype,{preventDefault:function(){this.defaultPrevented=!0;var n=this.nativeEvent;n&&(n.preventDefault?n.preventDefault():typeof n.returnValue!="unknown"&&(n.returnValue=!1),this.isDefaultPrevented=Oo)},stopPropagation:function(){var n=this.nativeEvent;n&&(n.stopPropagation?n.stopPropagation():typeof n.cancelBubble!="unknown"&&(n.cancelBubble=!0),this.isPropagationStopped=Oo)},persist:function(){},isPersistent:Oo}),t}var ti={eventPhase:0,bubbles:0,cancelable:0,timeStamp:function(e){return e.timeStamp||Date.now()},defaultPrevented:0,isTrusted:0},fc=Ot(ti),uo=Ie({},ti,{view:0,detail:0}),g0=Ot(uo),Ks,Gs,ui,os=Ie({},uo,{screenX:0,screenY:0,clientX:0,clientY:0,pageX:0,pageY:0,ctrlKey:0,shiftKey:0,altKey:0,metaKey:0,getModifierState:pc,button:0,buttons:0,relatedTarget:function(e){return e.relatedTarget===void 0?e.fromElement===e.srcElement?e.toElement:e.fromElement:e.relatedTarget},movementX:function(e){return"movementX"in e?e.movementX:(e!==ui&&(ui&&e.type==="mousemove"?(Ks=e.screenX-ui.screenX,Gs=e.screenY-ui.screenY):Gs=Ks=0,ui=e),Ks)},movementY:function(e){return"movementY"in e?e.movementY:Gs}}),Fd=Ot(os),x0=Ie({},os,{dataTransfer:0}),v0=Ot(x0),y0=Ie({},uo,{relatedTarget:0}),qs=Ot(y0),w0=Ie({},ti,{animationName:0,elapsedTime:0,pseudoElement:0}),b0=Ot(w0),S0=Ie({},ti,{clipboardData:function(e){return"clipboardData"in e?e.clipboardData:window.clipboardData}}),k0=Ot(S0),j0=Ie({},ti,{data:0}),Vd=Ot(j0),C0={Esc:"Escape",Spacebar:" ",Left:"ArrowLeft",Up:"ArrowUp",Right:"ArrowRight",Down:"ArrowDown",Del:"Delete",Win:"OS",Menu:"ContextMenu",Apps:"ContextMenu",Scroll:"ScrollLock",MozPrintableKey:"Unidentified"},E0={8:"Backspace",9:"Tab",12:"Clear",13:"Enter",16:"Shift",17:"Control",18:"Alt",19:"Pause",20:"CapsLock",27:"Escape",32:" ",33:"PageUp",34:"PageDown",35:"End",36:"Home",37:"ArrowLeft",38:"ArrowUp",39:"ArrowRight",40:"ArrowDown",45:"Insert",46:"Delete",112:"F1",113:"F2",114:"F3",115:"F4",116:"F5",117:"F6",118:"F7",119:"F8",120:"F9",121:"F10",122:"F11",123:"F12",144:"NumLock",145:"ScrollLock",224:"Meta"},O0={Alt:"altKey",Control:"ctrlKey",Meta:"metaKey",Shift:"shiftKey"};function _0(e){var t=this.nativeEvent;return t.getModifierState?t.getModifierState(e):(e=O0[e])?!!t[e]:!1}function pc(){return _0}var P0=Ie({},uo,{key:function(e){if(e.key){var t=C0[e.key]||e.key;if(t!=="Unidentified")return t}return e.type==="keypress"?(e=ea(e),e===13?"Enter":String.fromCharCode(e)):e.type==="keydown"||e.type==="keyup"?E0[e.keyCode]||"Unidentified":""},code:0,location:0,ctrlKey:0,shiftKey:0,altKey:0,metaKey:0,repeat:0,locale:0,getModifierState:pc,charCode:function(e){return e.type==="keypress"?ea(e):0},keyCode:function(e){return e.type==="keydown"||e.type==="keyup"?e.keyCode:0},which:function(e){return e.type==="keypress"?ea(e):e.type==="keydown"||e.type==="keyup"?e.keyCode:0}}),T0=Ot(P0),M0=Ie({},os,{pointerId:0,width:0,height:0,pressure:0,tangentialPressure:0,tiltX:0,tiltY:0,twist:0,pointerType:0,isPrimary:0}),Nd=Ot(M0),R0=Ie({},uo,{touches:0,targetTouches:0,changedTouches:0,altKey:0,metaKey:0,ctrlKey:0,shiftKey:0,getModifierState:pc}),I0=Ot(R0),D0=Ie({},ti,{propertyName:0,elapsedTime:0,pseudoElement:0}),L0=Ot(D0),A0=Ie({},os,{deltaX:function(e){return"deltaX"in e?e.deltaX:"wheelDeltaX"in e?-e.wheelDeltaX:0},deltaY:function(e){return"deltaY"in e?e.deltaY:"wheelDeltaY"in e?-e.wheelDeltaY:"wheelDelta"in e?-e.wheelDelta:0},deltaZ:0,deltaMode:0}),z0=Ot(A0),F0=[9,13,27,32],hc=bn&&"CompositionEvent"in window,Ti=null;bn&&"documentMode"in document&&(Ti=document.documentMode);var V0=bn&&"TextEvent"in window&&!Ti,Yh=bn&&(!hc||Ti&&8<Ti&&11>=Ti),$d=" ",Ud=!1;function Kh(e,t){switch(e){case"keyup":return F0.indexOf(t.keyCode)!==-1;case"keydown":return t.keyCode!==229;case"keypress":case"mousedown":case"focusout":return!0;default:return!1}}function Gh(e){return e=e.detail,typeof e=="object"&&"data"in e?e.data:null}var Or=!1;function N0(e,t){switch(e){case"compositionend":return Gh(t);case"keypress":return t.which!==32?null:(Ud=!0,$d);case"textInput":return e=t.data,e===$d&&Ud?null:e;default:return null}}function $0(e,t){if(Or)return e==="compositionend"||!hc&&Kh(e,t)?(e=Qh(),Zo=dc=Nn=null,Or=!1,e):null;switch(e){case"paste":return null;case"keypress":if(!(t.ctrlKey||t.altKey||t.metaKey)||t.ctrlKey&&t.altKey){if(t.char&&1<t.char.length)return t.char;if(t.which)return String.fromCharCode(t.which)}return null;case"compositionend":return Yh&&t.locale!=="ko"?null:t.data;default:return null}}var U0={color:!0,date:!0,datetime:!0,"datetime-local":!0,email:!0,month:!0,number:!0,password:!0,range:!0,search:!0,tel:!0,text:!0,time:!0,url:!0,week:!0};function Wd(e){var t=e&&e.nodeName&&e.nodeName.toLowerCase();return t==="input"?!!U0[e.type]:t==="textarea"}function qh(e,t,n,r){Oh(r),t=Ea(t,"onChange"),0<t.length&&(n=new fc("onChange","change",null,n,r),e.push({event:n,listeners:t}))}var Mi=null,Hi=null;function W0(e){sm(e,0)}function as(e){var t=Tr(e);if(wh(t))return e}function B0(e,t){if(e==="change")return t}var Xh=!1;if(bn){var Xs;if(bn){var Js="oninput"in document;if(!Js){var Bd=document.createElement("div");Bd.setAttribute("oninput","return;"),Js=typeof Bd.oninput=="function"}Xs=Js}else Xs=!1;Xh=Xs&&(!document.documentMode||9<document.documentMode)}function Hd(){Mi&&(Mi.detachEvent("onpropertychange",Jh),Hi=Mi=null)}function Jh(e){if(e.propertyName==="value"&&as(Hi)){var t=[];qh(t,Hi,e,ac(e)),Mh(W0,t)}}function H0(e,t,n){e==="focusin"?(Hd(),Mi=t,Hi=n,Mi.attachEvent("onpropertychange",Jh)):e==="focusout"&&Hd()}function Q0(e){if(e==="selectionchange"||e==="keyup"||e==="keydown")return as(Hi)}function Y0(e,t){if(e==="click")return as(t)}function K0(e,t){if(e==="input"||e==="change")return as(t)}function G0(e,t){return e===t&&(e!==0||1/e===1/t)||e!==e&&t!==t}var Kt=typeof Object.is=="function"?Object.is:G0;function Qi(e,t){if(Kt(e,t))return!0;if(typeof e!="object"||e===null||typeof t!="object"||t===null)return!1;var n=Object.keys(e),r=Object.keys(t);if(n.length!==r.length)return!1;for(r=0;r<n.length;r++){var i=n[r];if(!Nl.call(t,i)||!Kt(e[i],t[i]))return!1}return!0}function Qd(e){for(;e&&e.firstChild;)e=e.firstChild;return e}function Yd(e,t){var n=Qd(e);e=0;for(var r;n;){if(n.nodeType===3){if(r=e+n.textContent.length,e<=t&&r>=t)return{node:n,offset:t-e};e=r}e:{for(;n;){if(n.nextSibling){n=n.nextSibling;break e}n=n.parentNode}n=void 0}n=Qd(n)}}function Zh(e,t){return e&&t?e===t?!0:e&&e.nodeType===3?!1:t&&t.nodeType===3?Zh(e,t.parentNode):"contains"in e?e.contains(t):e.compareDocumentPosition?!!(e.compareDocumentPosition(t)&16):!1:!1}function em(){for(var e=window,t=ya();t instanceof e.HTMLIFrameElement;){try{var n=typeof t.contentWindow.location.href=="string"}catch{n=!1}if(n)e=t.contentWindow;else break;t=ya(e.document)}return t}function mc(e){var t=e&&e.nodeName&&e.nodeName.toLowerCase();return t&&(t==="input"&&(e.type==="text"||e.type==="search"||e.type==="tel"||e.type==="url"||e.type==="password")||t==="textarea"||e.contentEditable==="true")}function q0(e){var t=em(),n=e.focusedElem,r=e.selectionRange;if(t!==n&&n&&n.ownerDocument&&Zh(n.ownerDocument.documentElement,n)){if(r!==null&&mc(n)){if(t=r.start,e=r.end,e===void 0&&(e=t),"selectionStart"in n)n.selectionStart=t,n.selectionEnd=Math.min(e,n.value.length);else if(e=(t=n.ownerDocument||document)&&t.defaultView||window,e.getSelection){e=e.getSelection();var i=n.textContent.length,o=Math.min(r.start,i);r=r.end===void 0?o:Math.min(r.end,i),!e.extend&&o>r&&(i=r,r=o,o=i),i=Yd(n,o);var a=Yd(n,r);i&&a&&(e.rangeCount!==1||e.anchorNode!==i.node||e.anchorOffset!==i.offset||e.focusNode!==a.node||e.focusOffset!==a.offset)&&(t=t.createRange(),t.setStart(i.node,i.offset),e.removeAllRanges(),o>r?(e.addRange(t),e.extend(a.node,a.offset)):(t.setEnd(a.node,a.offset),e.addRange(t)))}}for(t=[],e=n;e=e.parentNode;)e.nodeType===1&&t.push({element:e,left:e.scrollLeft,top:e.scrollTop});for(typeof n.focus=="function"&&n.focus(),n=0;n<t.length;n++)e=t[n],e.element.scrollLeft=e.left,e.element.scrollTop=e.top}}var X0=bn&&"documentMode"in document&&11>=document.documentMode,_r=null,ou=null,Ri=null,au=!1;function Kd(e,t,n){var r=n.window===n?n.document:n.nodeType===9?n:n.ownerDocument;au||_r==null||_r!==ya(r)||(r=_r,"selectionStart"in r&&mc(r)?r={start:r.selectionStart,end:r.selectionEnd}:(r=(r.ownerDocument&&r.ownerDocument.defaultView||window).getSelection(),r={anchorNode:r.anchorNode,anchorOffset:r.anchorOffset,focusNode:r.focusNode,focusOffset:r.focusOffset}),Ri&&Qi(Ri,r)||(Ri=r,r=Ea(ou,"onSelect"),0<r.length&&(t=new fc("onSelect","select",null,t,n),e.push({event:t,listeners:r}),t.target=_r)))}function _o(e,t){var n={};return n[e.toLowerCase()]=t.toLowerCase(),n["Webkit"+e]="webkit"+t,n["Moz"+e]="moz"+t,n}var Pr={animationend:_o("Animation","AnimationEnd"),animationiteration:_o("Animation","AnimationIteration"),animationstart:_o("Animation","AnimationStart"),transitionend:_o("Transition","TransitionEnd")},Zs={},tm={};bn&&(tm=document.createElement("div").style,"AnimationEvent"in window||(delete Pr.animationend.animation,delete Pr.animationiteration.animation,delete Pr.animationstart.animation),"TransitionEvent"in window||delete Pr.transitionend.transition);function ss(e){if(Zs[e])return Zs[e];if(!Pr[e])return e;var t=Pr[e],n;for(n in t)if(t.hasOwnProperty(n)&&n in tm)return Zs[e]=t[n];return e}var nm=ss("animationend"),rm=ss("animationiteration"),im=ss("animationstart"),om=ss("transitionend"),am=new Map,Gd="abort auxClick cancel canPlay canPlayThrough click close contextMenu copy cut drag dragEnd dragEnter dragExit dragLeave dragOver dragStart drop durationChange emptied encrypted ended error gotPointerCapture input invalid keyDown keyPress keyUp load loadedData loadedMetadata loadStart lostPointerCapture mouseDown mouseMove mouseOut mouseOver mouseUp paste pause play playing pointerCancel pointerDown pointerMove pointerOut pointerOver pointerUp progress rateChange reset resize seeked seeking stalled submit suspend timeUpdate touchCancel touchEnd touchStart volumeChange scroll toggle touchMove waiting wheel".split(" ");function Zn(e,t){am.set(e,t),gr(t,[e])}for(var el=0;el<Gd.length;el++){var tl=Gd[el],J0=tl.toLowerCase(),Z0=tl[0].toUpperCase()+tl.slice(1);Zn(J0,"on"+Z0)}Zn(nm,"onAnimationEnd");Zn(rm,"onAnimationIteration");Zn(im,"onAnimationStart");Zn("dblclick","onDoubleClick");Zn("focusin","onFocus");Zn("focusout","onBlur");Zn(om,"onTransitionEnd");Hr("onMouseEnter",["mouseout","mouseover"]);Hr("onMouseLeave",["mouseout","mouseover"]);Hr("onPointerEnter",["pointerout","pointerover"]);Hr("onPointerLeave",["pointerout","pointerover"]);gr("onChange","change click focusin focusout input keydown keyup selectionchange".split(" "));gr("onSelect","focusout contextmenu dragend focusin keydown keyup mousedown mouseup selectionchange".split(" "));gr("onBeforeInput",["compositionend","keypress","textInput","paste"]);gr("onCompositionEnd","compositionend focusout keydown keypress keyup mousedown".split(" "));gr("onCompositionStart","compositionstart focusout keydown keypress keyup mousedown".split(" "));gr("onCompositionUpdate","compositionupdate focusout keydown keypress keyup mousedown".split(" "));var Ci="abort canplay canplaythrough durationchange emptied encrypted ended error loadeddata loadedmetadata loadstart pause play playing progress ratechange resize seeked seeking stalled suspend timeupdate volumechange waiting".split(" "),ey=new Set("cancel close invalid load scroll toggle".split(" ").concat(Ci));function qd(e,t,n){var r=e.type||"unknown-event";e.currentTarget=n,Jv(r,t,void 0,e),e.currentTarget=null}function sm(e,t){t=(t&4)!==0;for(var n=0;n<e.length;n++){var r=e[n],i=r.event;r=r.listeners;e:{var o=void 0;if(t)for(var a=r.length-1;0<=a;a--){var l=r[a],s=l.instance,c=l.currentTarget;if(l=l.listener,s!==o&&i.isPropagationStopped())break e;qd(i,l,c),o=s}else for(a=0;a<r.length;a++){if(l=r[a],s=l.instance,c=l.currentTarget,l=l.listener,s!==o&&i.isPropagationStopped())break e;qd(i,l,c),o=s}}}if(ba)throw e=tu,ba=!1,tu=null,e}function _e(e,t){var n=t[du];n===void 0&&(n=t[du]=new Set);var r=e+"__bubble";n.has(r)||(lm(t,e,2,!1),n.add(r))}function nl(e,t,n){var r=0;t&&(r|=4),lm(n,e,r,t)}var Po="_reactListening"+Math.random().toString(36).slice(2);function Yi(e){if(!e[Po]){e[Po]=!0,mh.forEach(function(n){n!=="selectionchange"&&(ey.has(n)||nl(n,!1,e),nl(n,!0,e))});var t=e.nodeType===9?e:e.ownerDocument;t===null||t[Po]||(t[Po]=!0,nl("selectionchange",!1,t))}}function lm(e,t,n,r){switch(Hh(t)){case 1:var i=h0;break;case 4:i=m0;break;default:i=cc}n=i.bind(null,t,n,e),i=void 0,!eu||t!=="touchstart"&&t!=="touchmove"&&t!=="wheel"||(i=!0),r?i!==void 0?e.addEventListener(t,n,{capture:!0,passive:i}):e.addEventListener(t,n,!0):i!==void 0?e.addEventListener(t,n,{passive:i}):e.addEventListener(t,n,!1)}function rl(e,t,n,r,i){var o=r;if(!(t&1)&&!(t&2)&&r!==null)e:for(;;){if(r===null)return;var a=r.tag;if(a===3||a===4){var l=r.stateNode.containerInfo;if(l===i||l.nodeType===8&&l.parentNode===i)break;if(a===4)for(a=r.return;a!==null;){var s=a.tag;if((s===3||s===4)&&(s=a.stateNode.containerInfo,s===i||s.nodeType===8&&s.parentNode===i))return;a=a.return}for(;l!==null;){if(a=ir(l),a===null)return;if(s=a.tag,s===5||s===6){r=o=a;continue e}l=l.parentNode}}r=r.return}Mh(function(){var c=o,d=ac(n),f=[];e:{var m=am.get(e);if(m!==void 0){var y=fc,g=e;switch(e){case"keypress":if(ea(n)===0)break e;case"keydown":case"keyup":y=T0;break;case"focusin":g="focus",y=qs;break;case"focusout":g="blur",y=qs;break;case"beforeblur":case"afterblur":y=qs;break;case"click":if(n.button===2)break e;case"auxclick":case"dblclick":case"mousedown":case"mousemove":case"mouseup":case"mouseout":case"mouseover":case"contextmenu":y=Fd;break;case"drag":case"dragend":case"dragenter":case"dragexit":case"dragleave":case"dragover":case"dragstart":case"drop":y=v0;break;case"touchcancel":case"touchend":case"touchmove":case"touchstart":y=I0;break;case nm:case rm:case im:y=b0;break;case om:y=L0;break;case"scroll":y=g0;break;case"wheel":y=z0;break;case"copy":case"cut":case"paste":y=k0;break;case"gotpointercapture":case"lostpointercapture":case"pointercancel":case"pointerdown":case"pointermove":case"pointerout":case"pointerover":case"pointerup":y=Nd}var x=(t&4)!==0,w=!x&&e==="scroll",p=x?m!==null?m+"Capture":null:m;x=[];for(var h=c,v;h!==null;){v=h;var b=v.stateNode;if(v.tag===5&&b!==null&&(v=b,p!==null&&(b=$i(h,p),b!=null&&x.push(Ki(h,b,v)))),w)break;h=h.return}0<x.length&&(m=new y(m,g,null,n,d),f.push({event:m,listeners:x}))}}if(!(t&7)){e:{if(m=e==="mouseover"||e==="pointerover",y=e==="mouseout"||e==="pointerout",m&&n!==Jl&&(g=n.relatedTarget||n.fromElement)&&(ir(g)||g[Sn]))break e;if((y||m)&&(m=d.window===d?d:(m=d.ownerDocument)?m.defaultView||m.parentWindow:window,y?(g=n.relatedTarget||n.toElement,y=c,g=g?ir(g):null,g!==null&&(w=xr(g),g!==w||g.tag!==5&&g.tag!==6)&&(g=null)):(y=null,g=c),y!==g)){if(x=Fd,b="onMouseLeave",p="onMouseEnter",h="mouse",(e==="pointerout"||e==="pointerover")&&(x=Nd,b="onPointerLeave",p="onPointerEnter",h="pointer"),w=y==null?m:Tr(y),v=g==null?m:Tr(g),m=new x(b,h+"leave",y,n,d),m.target=w,m.relatedTarget=v,b=null,ir(d)===c&&(x=new x(p,h+"enter",g,n,d),x.target=v,x.relatedTarget=w,b=x),w=b,y&&g)t:{for(x=y,p=g,h=0,v=x;v;v=yr(v))h++;for(v=0,b=p;b;b=yr(b))v++;for(;0<h-v;)x=yr(x),h--;for(;0<v-h;)p=yr(p),v--;for(;h--;){if(x===p||p!==null&&x===p.alternate)break t;x=yr(x),p=yr(p)}x=null}else x=null;y!==null&&Xd(f,m,y,x,!1),g!==null&&w!==null&&Xd(f,w,g,x,!0)}}e:{if(m=c?Tr(c):window,y=m.nodeName&&m.nodeName.toLowerCase(),y==="select"||y==="input"&&m.type==="file")var k=B0;else if(Wd(m))if(Xh)k=K0;else{k=Q0;var _=H0}else(y=m.nodeName)&&y.toLowerCase()==="input"&&(m.type==="checkbox"||m.type==="radio")&&(k=Y0);if(k&&(k=k(e,c))){qh(f,k,n,d);break e}_&&_(e,m,c),e==="focusout"&&(_=m._wrapperState)&&_.controlled&&m.type==="number"&&Yl(m,"number",m.value)}switch(_=c?Tr(c):window,e){case"focusin":(Wd(_)||_.contentEditable==="true")&&(_r=_,ou=c,Ri=null);break;case"focusout":Ri=ou=_r=null;break;case"mousedown":au=!0;break;case"contextmenu":case"mouseup":case"dragend":au=!1,Kd(f,n,d);break;case"selectionchange":if(X0)break;case"keydown":case"keyup":Kd(f,n,d)}var E;if(hc)e:{switch(e){case"compositionstart":var P="onCompositionStart";break e;case"compositionend":P="onCompositionEnd";break e;case"compositionupdate":P="onCompositionUpdate";break e}P=void 0}else Or?Kh(e,n)&&(P="onCompositionEnd"):e==="keydown"&&n.keyCode===229&&(P="onCompositionStart");P&&(Yh&&n.locale!=="ko"&&(Or||P!=="onCompositionStart"?P==="onCompositionEnd"&&Or&&(E=Qh()):(Nn=d,dc="value"in Nn?Nn.value:Nn.textContent,Or=!0)),_=Ea(c,P),0<_.length&&(P=new Vd(P,e,null,n,d),f.push({event:P,listeners:_}),E?P.data=E:(E=Gh(n),E!==null&&(P.data=E)))),(E=V0?N0(e,n):$0(e,n))&&(c=Ea(c,"onBeforeInput"),0<c.length&&(d=new Vd("onBeforeInput","beforeinput",null,n,d),f.push({event:d,listeners:c}),d.data=E))}sm(f,t)})}function Ki(e,t,n){return{instance:e,listener:t,currentTarget:n}}function Ea(e,t){for(var n=t+"Capture",r=[];e!==null;){var i=e,o=i.stateNode;i.tag===5&&o!==null&&(i=o,o=$i(e,n),o!=null&&r.unshift(Ki(e,o,i)),o=$i(e,t),o!=null&&r.push(Ki(e,o,i))),e=e.return}return r}function yr(e){if(e===null)return null;do e=e.return;while(e&&e.tag!==5);return e||null}function Xd(e,t,n,r,i){for(var o=t._reactName,a=[];n!==null&&n!==r;){var l=n,s=l.alternate,c=l.stateNode;if(s!==null&&s===r)break;l.tag===5&&c!==null&&(l=c,i?(s=$i(n,o),s!=null&&a.unshift(Ki(n,s,l))):i||(s=$i(n,o),s!=null&&a.push(Ki(n,s,l)))),n=n.return}a.length!==0&&e.push({event:t,listeners:a})}var ty=/\r\n?/g,ny=/\u0000|\uFFFD/g;function Jd(e){return(typeof e=="string"?e:""+e).replace(ty,`
`).replace(ny,"")}function To(e,t,n){if(t=Jd(t),Jd(e)!==t&&n)throw Error(L(425))}function Oa(){}var su=null,lu=null;function uu(e,t){return e==="textarea"||e==="noscript"||typeof t.children=="string"||typeof t.children=="number"||typeof t.dangerouslySetInnerHTML=="object"&&t.dangerouslySetInnerHTML!==null&&t.dangerouslySetInnerHTML.__html!=null}var cu=typeof setTimeout=="function"?setTimeout:void 0,ry=typeof clearTimeout=="function"?clearTimeout:void 0,Zd=typeof Promise=="function"?Promise:void 0,iy=typeof queueMicrotask=="function"?queueMicrotask:typeof Zd<"u"?function(e){return Zd.resolve(null).then(e).catch(oy)}:cu;function oy(e){setTimeout(function(){throw e})}function il(e,t){var n=t,r=0;do{var i=n.nextSibling;if(e.removeChild(n),i&&i.nodeType===8)if(n=i.data,n==="/$"){if(r===0){e.removeChild(i),Bi(t);return}r--}else n!=="$"&&n!=="$?"&&n!=="$!"||r++;n=i}while(n);Bi(t)}function Qn(e){for(;e!=null;e=e.nextSibling){var t=e.nodeType;if(t===1||t===3)break;if(t===8){if(t=e.data,t==="$"||t==="$!"||t==="$?")break;if(t==="/$")return null}}return e}function ef(e){e=e.previousSibling;for(var t=0;e;){if(e.nodeType===8){var n=e.data;if(n==="$"||n==="$!"||n==="$?"){if(t===0)return e;t--}else n==="/$"&&t++}e=e.previousSibling}return null}var ni=Math.random().toString(36).slice(2),en="__reactFiber$"+ni,Gi="__reactProps$"+ni,Sn="__reactContainer$"+ni,du="__reactEvents$"+ni,ay="__reactListeners$"+ni,sy="__reactHandles$"+ni;function ir(e){var t=e[en];if(t)return t;for(var n=e.parentNode;n;){if(t=n[Sn]||n[en]){if(n=t.alternate,t.child!==null||n!==null&&n.child!==null)for(e=ef(e);e!==null;){if(n=e[en])return n;e=ef(e)}return t}e=n,n=e.parentNode}return null}function co(e){return e=e[en]||e[Sn],!e||e.tag!==5&&e.tag!==6&&e.tag!==13&&e.tag!==3?null:e}function Tr(e){if(e.tag===5||e.tag===6)return e.stateNode;throw Error(L(33))}function ls(e){return e[Gi]||null}var fu=[],Mr=-1;function er(e){return{current:e}}function Pe(e){0>Mr||(e.current=fu[Mr],fu[Mr]=null,Mr--)}function Ee(e,t){Mr++,fu[Mr]=e.current,e.current=t}var Jn={},ot=er(Jn),mt=er(!1),cr=Jn;function Qr(e,t){var n=e.type.contextTypes;if(!n)return Jn;var r=e.stateNode;if(r&&r.__reactInternalMemoizedUnmaskedChildContext===t)return r.__reactInternalMemoizedMaskedChildContext;var i={},o;for(o in n)i[o]=t[o];return r&&(e=e.stateNode,e.__reactInternalMemoizedUnmaskedChildContext=t,e.__reactInternalMemoizedMaskedChildContext=i),i}function gt(e){return e=e.childContextTypes,e!=null}function _a(){Pe(mt),Pe(ot)}function tf(e,t,n){if(ot.current!==Jn)throw Error(L(168));Ee(ot,t),Ee(mt,n)}function um(e,t,n){var r=e.stateNode;if(t=t.childContextTypes,typeof r.getChildContext!="function")return n;r=r.getChildContext();for(var i in r)if(!(i in t))throw Error(L(108,Hv(e)||"Unknown",i));return Ie({},n,r)}function Pa(e){return e=(e=e.stateNode)&&e.__reactInternalMemoizedMergedChildContext||Jn,cr=ot.current,Ee(ot,e),Ee(mt,mt.current),!0}function nf(e,t,n){var r=e.stateNode;if(!r)throw Error(L(169));n?(e=um(e,t,cr),r.__reactInternalMemoizedMergedChildContext=e,Pe(mt),Pe(ot),Ee(ot,e)):Pe(mt),Ee(mt,n)}var pn=null,us=!1,ol=!1;function cm(e){pn===null?pn=[e]:pn.push(e)}function ly(e){us=!0,cm(e)}function tr(){if(!ol&&pn!==null){ol=!0;var e=0,t=ye;try{var n=pn;for(ye=1;e<n.length;e++){var r=n[e];do r=r(!0);while(r!==null)}pn=null,us=!1}catch(i){throw pn!==null&&(pn=pn.slice(e+1)),Lh(sc,tr),i}finally{ye=t,ol=!1}}return null}var Rr=[],Ir=0,Ta=null,Ma=0,Mt=[],Rt=0,dr=null,mn=1,gn="";function nr(e,t){Rr[Ir++]=Ma,Rr[Ir++]=Ta,Ta=e,Ma=t}function dm(e,t,n){Mt[Rt++]=mn,Mt[Rt++]=gn,Mt[Rt++]=dr,dr=e;var r=mn;e=gn;var i=32-Ht(r)-1;r&=~(1<<i),n+=1;var o=32-Ht(t)+i;if(30<o){var a=i-i%5;o=(r&(1<<a)-1).toString(32),r>>=a,i-=a,mn=1<<32-Ht(t)+i|n<<i|r,gn=o+e}else mn=1<<o|n<<i|r,gn=e}function gc(e){e.return!==null&&(nr(e,1),dm(e,1,0))}function xc(e){for(;e===Ta;)Ta=Rr[--Ir],Rr[Ir]=null,Ma=Rr[--Ir],Rr[Ir]=null;for(;e===dr;)dr=Mt[--Rt],Mt[Rt]=null,gn=Mt[--Rt],Mt[Rt]=null,mn=Mt[--Rt],Mt[Rt]=null}var St=null,bt=null,Te=!1,Wt=null;function fm(e,t){var n=It(5,null,null,0);n.elementType="DELETED",n.stateNode=t,n.return=e,t=e.deletions,t===null?(e.deletions=[n],e.flags|=16):t.push(n)}function rf(e,t){switch(e.tag){case 5:var n=e.type;return t=t.nodeType!==1||n.toLowerCase()!==t.nodeName.toLowerCase()?null:t,t!==null?(e.stateNode=t,St=e,bt=Qn(t.firstChild),!0):!1;case 6:return t=e.pendingProps===""||t.nodeType!==3?null:t,t!==null?(e.stateNode=t,St=e,bt=null,!0):!1;case 13:return t=t.nodeType!==8?null:t,t!==null?(n=dr!==null?{id:mn,overflow:gn}:null,e.memoizedState={dehydrated:t,treeContext:n,retryLane:1073741824},n=It(18,null,null,0),n.stateNode=t,n.return=e,e.child=n,St=e,bt=null,!0):!1;default:return!1}}function pu(e){return(e.mode&1)!==0&&(e.flags&128)===0}function hu(e){if(Te){var t=bt;if(t){var n=t;if(!rf(e,t)){if(pu(e))throw Error(L(418));t=Qn(n.nextSibling);var r=St;t&&rf(e,t)?fm(r,n):(e.flags=e.flags&-4097|2,Te=!1,St=e)}}else{if(pu(e))throw Error(L(418));e.flags=e.flags&-4097|2,Te=!1,St=e}}}function of(e){for(e=e.return;e!==null&&e.tag!==5&&e.tag!==3&&e.tag!==13;)e=e.return;St=e}function Mo(e){if(e!==St)return!1;if(!Te)return of(e),Te=!0,!1;var t;if((t=e.tag!==3)&&!(t=e.tag!==5)&&(t=e.type,t=t!=="head"&&t!=="body"&&!uu(e.type,e.memoizedProps)),t&&(t=bt)){if(pu(e))throw pm(),Error(L(418));for(;t;)fm(e,t),t=Qn(t.nextSibling)}if(of(e),e.tag===13){if(e=e.memoizedState,e=e!==null?e.dehydrated:null,!e)throw Error(L(317));e:{for(e=e.nextSibling,t=0;e;){if(e.nodeType===8){var n=e.data;if(n==="/$"){if(t===0){bt=Qn(e.nextSibling);break e}t--}else n!=="$"&&n!=="$!"&&n!=="$?"||t++}e=e.nextSibling}bt=null}}else bt=St?Qn(e.stateNode.nextSibling):null;return!0}function pm(){for(var e=bt;e;)e=Qn(e.nextSibling)}function Yr(){bt=St=null,Te=!1}function vc(e){Wt===null?Wt=[e]:Wt.push(e)}var uy=Cn.ReactCurrentBatchConfig;function Vt(e,t){if(e&&e.defaultProps){t=Ie({},t),e=e.defaultProps;for(var n in e)t[n]===void 0&&(t[n]=e[n]);return t}return t}var Ra=er(null),Ia=null,Dr=null,yc=null;function wc(){yc=Dr=Ia=null}function bc(e){var t=Ra.current;Pe(Ra),e._currentValue=t}function mu(e,t,n){for(;e!==null;){var r=e.alternate;if((e.childLanes&t)!==t?(e.childLanes|=t,r!==null&&(r.childLanes|=t)):r!==null&&(r.childLanes&t)!==t&&(r.childLanes|=t),e===n)break;e=e.return}}function Ur(e,t){Ia=e,yc=Dr=null,e=e.dependencies,e!==null&&e.firstContext!==null&&(e.lanes&t&&(ht=!0),e.firstContext=null)}function At(e){var t=e._currentValue;if(yc!==e)if(e={context:e,memoizedValue:t,next:null},Dr===null){if(Ia===null)throw Error(L(308));Dr=e,Ia.dependencies={lanes:0,firstContext:e}}else Dr=Dr.next=e;return t}var or=null;function Sc(e){or===null?or=[e]:or.push(e)}function hm(e,t,n,r){var i=t.interleaved;return i===null?(n.next=n,Sc(t)):(n.next=i.next,i.next=n),t.interleaved=n,kn(e,r)}function kn(e,t){e.lanes|=t;var n=e.alternate;for(n!==null&&(n.lanes|=t),n=e,e=e.return;e!==null;)e.childLanes|=t,n=e.alternate,n!==null&&(n.childLanes|=t),n=e,e=e.return;return n.tag===3?n.stateNode:null}var zn=!1;function kc(e){e.updateQueue={baseState:e.memoizedState,firstBaseUpdate:null,lastBaseUpdate:null,shared:{pending:null,interleaved:null,lanes:0},effects:null}}function mm(e,t){e=e.updateQueue,t.updateQueue===e&&(t.updateQueue={baseState:e.baseState,firstBaseUpdate:e.firstBaseUpdate,lastBaseUpdate:e.lastBaseUpdate,shared:e.shared,effects:e.effects})}function vn(e,t){return{eventTime:e,lane:t,tag:0,payload:null,callback:null,next:null}}function Yn(e,t,n){var r=e.updateQueue;if(r===null)return null;if(r=r.shared,he&2){var i=r.pending;return i===null?t.next=t:(t.next=i.next,i.next=t),r.pending=t,kn(e,n)}return i=r.interleaved,i===null?(t.next=t,Sc(r)):(t.next=i.next,i.next=t),r.interleaved=t,kn(e,n)}function ta(e,t,n){if(t=t.updateQueue,t!==null&&(t=t.shared,(n&4194240)!==0)){var r=t.lanes;r&=e.pendingLanes,n|=r,t.lanes=n,lc(e,n)}}function af(e,t){var n=e.updateQueue,r=e.alternate;if(r!==null&&(r=r.updateQueue,n===r)){var i=null,o=null;if(n=n.firstBaseUpdate,n!==null){do{var a={eventTime:n.eventTime,lane:n.lane,tag:n.tag,payload:n.payload,callback:n.callback,next:null};o===null?i=o=a:o=o.next=a,n=n.next}while(n!==null);o===null?i=o=t:o=o.next=t}else i=o=t;n={baseState:r.baseState,firstBaseUpdate:i,lastBaseUpdate:o,shared:r.shared,effects:r.effects},e.updateQueue=n;return}e=n.lastBaseUpdate,e===null?n.firstBaseUpdate=t:e.next=t,n.lastBaseUpdate=t}function Da(e,t,n,r){var i=e.updateQueue;zn=!1;var o=i.firstBaseUpdate,a=i.lastBaseUpdate,l=i.shared.pending;if(l!==null){i.shared.pending=null;var s=l,c=s.next;s.next=null,a===null?o=c:a.next=c,a=s;var d=e.alternate;d!==null&&(d=d.updateQueue,l=d.lastBaseUpdate,l!==a&&(l===null?d.firstBaseUpdate=c:l.next=c,d.lastBaseUpdate=s))}if(o!==null){var f=i.baseState;a=0,d=c=s=null,l=o;do{var m=l.lane,y=l.eventTime;if((r&m)===m){d!==null&&(d=d.next={eventTime:y,lane:0,tag:l.tag,payload:l.payload,callback:l.callback,next:null});e:{var g=e,x=l;switch(m=t,y=n,x.tag){case 1:if(g=x.payload,typeof g=="function"){f=g.call(y,f,m);break e}f=g;break e;case 3:g.flags=g.flags&-65537|128;case 0:if(g=x.payload,m=typeof g=="function"?g.call(y,f,m):g,m==null)break e;f=Ie({},f,m);break e;case 2:zn=!0}}l.callback!==null&&l.lane!==0&&(e.flags|=64,m=i.effects,m===null?i.effects=[l]:m.push(l))}else y={eventTime:y,lane:m,tag:l.tag,payload:l.payload,callback:l.callback,next:null},d===null?(c=d=y,s=f):d=d.next=y,a|=m;if(l=l.next,l===null){if(l=i.shared.pending,l===null)break;m=l,l=m.next,m.next=null,i.lastBaseUpdate=m,i.shared.pending=null}}while(!0);if(d===null&&(s=f),i.baseState=s,i.firstBaseUpdate=c,i.lastBaseUpdate=d,t=i.shared.interleaved,t!==null){i=t;do a|=i.lane,i=i.next;while(i!==t)}else o===null&&(i.shared.lanes=0);pr|=a,e.lanes=a,e.memoizedState=f}}function sf(e,t,n){if(e=t.effects,t.effects=null,e!==null)for(t=0;t<e.length;t++){var r=e[t],i=r.callback;if(i!==null){if(r.callback=null,r=n,typeof i!="function")throw Error(L(191,i));i.call(r)}}}var gm=new hh.Component().refs;function gu(e,t,n,r){t=e.memoizedState,n=n(r,t),n=n==null?t:Ie({},t,n),e.memoizedState=n,e.lanes===0&&(e.updateQueue.baseState=n)}var cs={isMounted:function(e){return(e=e._reactInternals)?xr(e)===e:!1},enqueueSetState:function(e,t,n){e=e._reactInternals;var r=ut(),i=Gn(e),o=vn(r,i);o.payload=t,n!=null&&(o.callback=n),t=Yn(e,o,i),t!==null&&(Qt(t,e,i,r),ta(t,e,i))},enqueueReplaceState:function(e,t,n){e=e._reactInternals;var r=ut(),i=Gn(e),o=vn(r,i);o.tag=1,o.payload=t,n!=null&&(o.callback=n),t=Yn(e,o,i),t!==null&&(Qt(t,e,i,r),ta(t,e,i))},enqueueForceUpdate:function(e,t){e=e._reactInternals;var n=ut(),r=Gn(e),i=vn(n,r);i.tag=2,t!=null&&(i.callback=t),t=Yn(e,i,r),t!==null&&(Qt(t,e,r,n),ta(t,e,r))}};function lf(e,t,n,r,i,o,a){return e=e.stateNode,typeof e.shouldComponentUpdate=="function"?e.shouldComponentUpdate(r,o,a):t.prototype&&t.prototype.isPureReactComponent?!Qi(n,r)||!Qi(i,o):!0}function xm(e,t,n){var r=!1,i=Jn,o=t.contextType;return typeof o=="object"&&o!==null?o=At(o):(i=gt(t)?cr:ot.current,r=t.contextTypes,o=(r=r!=null)?Qr(e,i):Jn),t=new t(n,o),e.memoizedState=t.state!==null&&t.state!==void 0?t.state:null,t.updater=cs,e.stateNode=t,t._reactInternals=e,r&&(e=e.stateNode,e.__reactInternalMemoizedUnmaskedChildContext=i,e.__reactInternalMemoizedMaskedChildContext=o),t}function uf(e,t,n,r){e=t.state,typeof t.componentWillReceiveProps=="function"&&t.componentWillReceiveProps(n,r),typeof t.UNSAFE_componentWillReceiveProps=="function"&&t.UNSAFE_componentWillReceiveProps(n,r),t.state!==e&&cs.enqueueReplaceState(t,t.state,null)}function xu(e,t,n,r){var i=e.stateNode;i.props=n,i.state=e.memoizedState,i.refs=gm,kc(e);var o=t.contextType;typeof o=="object"&&o!==null?i.context=At(o):(o=gt(t)?cr:ot.current,i.context=Qr(e,o)),i.state=e.memoizedState,o=t.getDerivedStateFromProps,typeof o=="function"&&(gu(e,t,o,n),i.state=e.memoizedState),typeof t.getDerivedStateFromProps=="function"||typeof i.getSnapshotBeforeUpdate=="function"||typeof i.UNSAFE_componentWillMount!="function"&&typeof i.componentWillMount!="function"||(t=i.state,typeof i.componentWillMount=="function"&&i.componentWillMount(),typeof i.UNSAFE_componentWillMount=="function"&&i.UNSAFE_componentWillMount(),t!==i.state&&cs.enqueueReplaceState(i,i.state,null),Da(e,n,i,r),i.state=e.memoizedState),typeof i.componentDidMount=="function"&&(e.flags|=4194308)}function ci(e,t,n){if(e=n.ref,e!==null&&typeof e!="function"&&typeof e!="object"){if(n._owner){if(n=n._owner,n){if(n.tag!==1)throw Error(L(309));var r=n.stateNode}if(!r)throw Error(L(147,e));var i=r,o=""+e;return t!==null&&t.ref!==null&&typeof t.ref=="function"&&t.ref._stringRef===o?t.ref:(t=function(a){var l=i.refs;l===gm&&(l=i.refs={}),a===null?delete l[o]:l[o]=a},t._stringRef=o,t)}if(typeof e!="string")throw Error(L(284));if(!n._owner)throw Error(L(290,e))}return e}function Ro(e,t){throw e=Object.prototype.toString.call(t),Error(L(31,e==="[object Object]"?"object with keys {"+Object.keys(t).join(", ")+"}":e))}function cf(e){var t=e._init;return t(e._payload)}function vm(e){function t(p,h){if(e){var v=p.deletions;v===null?(p.deletions=[h],p.flags|=16):v.push(h)}}function n(p,h){if(!e)return null;for(;h!==null;)t(p,h),h=h.sibling;return null}function r(p,h){for(p=new Map;h!==null;)h.key!==null?p.set(h.key,h):p.set(h.index,h),h=h.sibling;return p}function i(p,h){return p=qn(p,h),p.index=0,p.sibling=null,p}function o(p,h,v){return p.index=v,e?(v=p.alternate,v!==null?(v=v.index,v<h?(p.flags|=2,h):v):(p.flags|=2,h)):(p.flags|=1048576,h)}function a(p){return e&&p.alternate===null&&(p.flags|=2),p}function l(p,h,v,b){return h===null||h.tag!==6?(h=fl(v,p.mode,b),h.return=p,h):(h=i(h,v),h.return=p,h)}function s(p,h,v,b){var k=v.type;return k===Er?d(p,h,v.props.children,b,v.key):h!==null&&(h.elementType===k||typeof k=="object"&&k!==null&&k.$$typeof===An&&cf(k)===h.type)?(b=i(h,v.props),b.ref=ci(p,h,v),b.return=p,b):(b=sa(v.type,v.key,v.props,null,p.mode,b),b.ref=ci(p,h,v),b.return=p,b)}function c(p,h,v,b){return h===null||h.tag!==4||h.stateNode.containerInfo!==v.containerInfo||h.stateNode.implementation!==v.implementation?(h=pl(v,p.mode,b),h.return=p,h):(h=i(h,v.children||[]),h.return=p,h)}function d(p,h,v,b,k){return h===null||h.tag!==7?(h=ur(v,p.mode,b,k),h.return=p,h):(h=i(h,v),h.return=p,h)}function f(p,h,v){if(typeof h=="string"&&h!==""||typeof h=="number")return h=fl(""+h,p.mode,v),h.return=p,h;if(typeof h=="object"&&h!==null){switch(h.$$typeof){case bo:return v=sa(h.type,h.key,h.props,null,p.mode,v),v.ref=ci(p,null,h),v.return=p,v;case Cr:return h=pl(h,p.mode,v),h.return=p,h;case An:var b=h._init;return f(p,b(h._payload),v)}if(ki(h)||oi(h))return h=ur(h,p.mode,v,null),h.return=p,h;Ro(p,h)}return null}function m(p,h,v,b){var k=h!==null?h.key:null;if(typeof v=="string"&&v!==""||typeof v=="number")return k!==null?null:l(p,h,""+v,b);if(typeof v=="object"&&v!==null){switch(v.$$typeof){case bo:return v.key===k?s(p,h,v,b):null;case Cr:return v.key===k?c(p,h,v,b):null;case An:return k=v._init,m(p,h,k(v._payload),b)}if(ki(v)||oi(v))return k!==null?null:d(p,h,v,b,null);Ro(p,v)}return null}function y(p,h,v,b,k){if(typeof b=="string"&&b!==""||typeof b=="number")return p=p.get(v)||null,l(h,p,""+b,k);if(typeof b=="object"&&b!==null){switch(b.$$typeof){case bo:return p=p.get(b.key===null?v:b.key)||null,s(h,p,b,k);case Cr:return p=p.get(b.key===null?v:b.key)||null,c(h,p,b,k);case An:var _=b._init;return y(p,h,v,_(b._payload),k)}if(ki(b)||oi(b))return p=p.get(v)||null,d(h,p,b,k,null);Ro(h,b)}return null}function g(p,h,v,b){for(var k=null,_=null,E=h,P=h=0,T=null;E!==null&&P<v.length;P++){E.index>P?(T=E,E=null):T=E.sibling;var I=m(p,E,v[P],b);if(I===null){E===null&&(E=T);break}e&&E&&I.alternate===null&&t(p,E),h=o(I,h,P),_===null?k=I:_.sibling=I,_=I,E=T}if(P===v.length)return n(p,E),Te&&nr(p,P),k;if(E===null){for(;P<v.length;P++)E=f(p,v[P],b),E!==null&&(h=o(E,h,P),_===null?k=E:_.sibling=E,_=E);return Te&&nr(p,P),k}for(E=r(p,E);P<v.length;P++)T=y(E,p,P,v[P],b),T!==null&&(e&&T.alternate!==null&&E.delete(T.key===null?P:T.key),h=o(T,h,P),_===null?k=T:_.sibling=T,_=T);return e&&E.forEach(function(W){return t(p,W)}),Te&&nr(p,P),k}function x(p,h,v,b){var k=oi(v);if(typeof k!="function")throw Error(L(150));if(v=k.call(v),v==null)throw Error(L(151));for(var _=k=null,E=h,P=h=0,T=null,I=v.next();E!==null&&!I.done;P++,I=v.next()){E.index>P?(T=E,E=null):T=E.sibling;var W=m(p,E,I.value,b);if(W===null){E===null&&(E=T);break}e&&E&&W.alternate===null&&t(p,E),h=o(W,h,P),_===null?k=W:_.sibling=W,_=W,E=T}if(I.done)return n(p,E),Te&&nr(p,P),k;if(E===null){for(;!I.done;P++,I=v.next())I=f(p,I.value,b),I!==null&&(h=o(I,h,P),_===null?k=I:_.sibling=I,_=I);return Te&&nr(p,P),k}for(E=r(p,E);!I.done;P++,I=v.next())I=y(E,p,P,I.value,b),I!==null&&(e&&I.alternate!==null&&E.delete(I.key===null?P:I.key),h=o(I,h,P),_===null?k=I:_.sibling=I,_=I);return e&&E.forEach(function(A){return t(p,A)}),Te&&nr(p,P),k}function w(p,h,v,b){if(typeof v=="object"&&v!==null&&v.type===Er&&v.key===null&&(v=v.props.children),typeof v=="object"&&v!==null){switch(v.$$typeof){case bo:e:{for(var k=v.key,_=h;_!==null;){if(_.key===k){if(k=v.type,k===Er){if(_.tag===7){n(p,_.sibling),h=i(_,v.props.children),h.return=p,p=h;break e}}else if(_.elementType===k||typeof k=="object"&&k!==null&&k.$$typeof===An&&cf(k)===_.type){n(p,_.sibling),h=i(_,v.props),h.ref=ci(p,_,v),h.return=p,p=h;break e}n(p,_);break}else t(p,_);_=_.sibling}v.type===Er?(h=ur(v.props.children,p.mode,b,v.key),h.return=p,p=h):(b=sa(v.type,v.key,v.props,null,p.mode,b),b.ref=ci(p,h,v),b.return=p,p=b)}return a(p);case Cr:e:{for(_=v.key;h!==null;){if(h.key===_)if(h.tag===4&&h.stateNode.containerInfo===v.containerInfo&&h.stateNode.implementation===v.implementation){n(p,h.sibling),h=i(h,v.children||[]),h.return=p,p=h;break e}else{n(p,h);break}else t(p,h);h=h.sibling}h=pl(v,p.mode,b),h.return=p,p=h}return a(p);case An:return _=v._init,w(p,h,_(v._payload),b)}if(ki(v))return g(p,h,v,b);if(oi(v))return x(p,h,v,b);Ro(p,v)}return typeof v=="string"&&v!==""||typeof v=="number"?(v=""+v,h!==null&&h.tag===6?(n(p,h.sibling),h=i(h,v),h.return=p,p=h):(n(p,h),h=fl(v,p.mode,b),h.return=p,p=h),a(p)):n(p,h)}return w}var Kr=vm(!0),ym=vm(!1),fo={},an=er(fo),qi=er(fo),Xi=er(fo);function ar(e){if(e===fo)throw Error(L(174));return e}function jc(e,t){switch(Ee(Xi,t),Ee(qi,e),Ee(an,fo),e=t.nodeType,e){case 9:case 11:t=(t=t.documentElement)?t.namespaceURI:Gl(null,"");break;default:e=e===8?t.parentNode:t,t=e.namespaceURI||null,e=e.tagName,t=Gl(t,e)}Pe(an),Ee(an,t)}function Gr(){Pe(an),Pe(qi),Pe(Xi)}function wm(e){ar(Xi.current);var t=ar(an.current),n=Gl(t,e.type);t!==n&&(Ee(qi,e),Ee(an,n))}function Cc(e){qi.current===e&&(Pe(an),Pe(qi))}var Me=er(0);function La(e){for(var t=e;t!==null;){if(t.tag===13){var n=t.memoizedState;if(n!==null&&(n=n.dehydrated,n===null||n.data==="$?"||n.data==="$!"))return t}else if(t.tag===19&&t.memoizedProps.revealOrder!==void 0){if(t.flags&128)return t}else if(t.child!==null){t.child.return=t,t=t.child;continue}if(t===e)break;for(;t.sibling===null;){if(t.return===null||t.return===e)return null;t=t.return}t.sibling.return=t.return,t=t.sibling}return null}var al=[];function Ec(){for(var e=0;e<al.length;e++)al[e]._workInProgressVersionPrimary=null;al.length=0}var na=Cn.ReactCurrentDispatcher,sl=Cn.ReactCurrentBatchConfig,fr=0,Re=null,We=null,Qe=null,Aa=!1,Ii=!1,Ji=0,cy=0;function tt(){throw Error(L(321))}function Oc(e,t){if(t===null)return!1;for(var n=0;n<t.length&&n<e.length;n++)if(!Kt(e[n],t[n]))return!1;return!0}function _c(e,t,n,r,i,o){if(fr=o,Re=t,t.memoizedState=null,t.updateQueue=null,t.lanes=0,na.current=e===null||e.memoizedState===null?hy:my,e=n(r,i),Ii){o=0;do{if(Ii=!1,Ji=0,25<=o)throw Error(L(301));o+=1,Qe=We=null,t.updateQueue=null,na.current=gy,e=n(r,i)}while(Ii)}if(na.current=za,t=We!==null&&We.next!==null,fr=0,Qe=We=Re=null,Aa=!1,t)throw Error(L(300));return e}function Pc(){var e=Ji!==0;return Ji=0,e}function Xt(){var e={memoizedState:null,baseState:null,baseQueue:null,queue:null,next:null};return Qe===null?Re.memoizedState=Qe=e:Qe=Qe.next=e,Qe}function zt(){if(We===null){var e=Re.alternate;e=e!==null?e.memoizedState:null}else e=We.next;var t=Qe===null?Re.memoizedState:Qe.next;if(t!==null)Qe=t,We=e;else{if(e===null)throw Error(L(310));We=e,e={memoizedState:We.memoizedState,baseState:We.baseState,baseQueue:We.baseQueue,queue:We.queue,next:null},Qe===null?Re.memoizedState=Qe=e:Qe=Qe.next=e}return Qe}function Zi(e,t){return typeof t=="function"?t(e):t}function ll(e){var t=zt(),n=t.queue;if(n===null)throw Error(L(311));n.lastRenderedReducer=e;var r=We,i=r.baseQueue,o=n.pending;if(o!==null){if(i!==null){var a=i.next;i.next=o.next,o.next=a}r.baseQueue=i=o,n.pending=null}if(i!==null){o=i.next,r=r.baseState;var l=a=null,s=null,c=o;do{var d=c.lane;if((fr&d)===d)s!==null&&(s=s.next={lane:0,action:c.action,hasEagerState:c.hasEagerState,eagerState:c.eagerState,next:null}),r=c.hasEagerState?c.eagerState:e(r,c.action);else{var f={lane:d,action:c.action,hasEagerState:c.hasEagerState,eagerState:c.eagerState,next:null};s===null?(l=s=f,a=r):s=s.next=f,Re.lanes|=d,pr|=d}c=c.next}while(c!==null&&c!==o);s===null?a=r:s.next=l,Kt(r,t.memoizedState)||(ht=!0),t.memoizedState=r,t.baseState=a,t.baseQueue=s,n.lastRenderedState=r}if(e=n.interleaved,e!==null){i=e;do o=i.lane,Re.lanes|=o,pr|=o,i=i.next;while(i!==e)}else i===null&&(n.lanes=0);return[t.memoizedState,n.dispatch]}function ul(e){var t=zt(),n=t.queue;if(n===null)throw Error(L(311));n.lastRenderedReducer=e;var r=n.dispatch,i=n.pending,o=t.memoizedState;if(i!==null){n.pending=null;var a=i=i.next;do o=e(o,a.action),a=a.next;while(a!==i);Kt(o,t.memoizedState)||(ht=!0),t.memoizedState=o,t.baseQueue===null&&(t.baseState=o),n.lastRenderedState=o}return[o,r]}function bm(){}function Sm(e,t){var n=Re,r=zt(),i=t(),o=!Kt(r.memoizedState,i);if(o&&(r.memoizedState=i,ht=!0),r=r.queue,Tc(Cm.bind(null,n,r,e),[e]),r.getSnapshot!==t||o||Qe!==null&&Qe.memoizedState.tag&1){if(n.flags|=2048,eo(9,jm.bind(null,n,r,i,t),void 0,null),Ye===null)throw Error(L(349));fr&30||km(n,t,i)}return i}function km(e,t,n){e.flags|=16384,e={getSnapshot:t,value:n},t=Re.updateQueue,t===null?(t={lastEffect:null,stores:null},Re.updateQueue=t,t.stores=[e]):(n=t.stores,n===null?t.stores=[e]:n.push(e))}function jm(e,t,n,r){t.value=n,t.getSnapshot=r,Em(t)&&Om(e)}function Cm(e,t,n){return n(function(){Em(t)&&Om(e)})}function Em(e){var t=e.getSnapshot;e=e.value;try{var n=t();return!Kt(e,n)}catch{return!0}}function Om(e){var t=kn(e,1);t!==null&&Qt(t,e,1,-1)}function df(e){var t=Xt();return typeof e=="function"&&(e=e()),t.memoizedState=t.baseState=e,e={pending:null,interleaved:null,lanes:0,dispatch:null,lastRenderedReducer:Zi,lastRenderedState:e},t.queue=e,e=e.dispatch=py.bind(null,Re,e),[t.memoizedState,e]}function eo(e,t,n,r){return e={tag:e,create:t,destroy:n,deps:r,next:null},t=Re.updateQueue,t===null?(t={lastEffect:null,stores:null},Re.updateQueue=t,t.lastEffect=e.next=e):(n=t.lastEffect,n===null?t.lastEffect=e.next=e:(r=n.next,n.next=e,e.next=r,t.lastEffect=e)),e}function _m(){return zt().memoizedState}function ra(e,t,n,r){var i=Xt();Re.flags|=e,i.memoizedState=eo(1|t,n,void 0,r===void 0?null:r)}function ds(e,t,n,r){var i=zt();r=r===void 0?null:r;var o=void 0;if(We!==null){var a=We.memoizedState;if(o=a.destroy,r!==null&&Oc(r,a.deps)){i.memoizedState=eo(t,n,o,r);return}}Re.flags|=e,i.memoizedState=eo(1|t,n,o,r)}function ff(e,t){return ra(8390656,8,e,t)}function Tc(e,t){return ds(2048,8,e,t)}function Pm(e,t){return ds(4,2,e,t)}function Tm(e,t){return ds(4,4,e,t)}function Mm(e,t){if(typeof t=="function")return e=e(),t(e),function(){t(null)};if(t!=null)return e=e(),t.current=e,function(){t.current=null}}function Rm(e,t,n){return n=n!=null?n.concat([e]):null,ds(4,4,Mm.bind(null,t,e),n)}function Mc(){}function Im(e,t){var n=zt();t=t===void 0?null:t;var r=n.memoizedState;return r!==null&&t!==null&&Oc(t,r[1])?r[0]:(n.memoizedState=[e,t],e)}function Dm(e,t){var n=zt();t=t===void 0?null:t;var r=n.memoizedState;return r!==null&&t!==null&&Oc(t,r[1])?r[0]:(e=e(),n.memoizedState=[e,t],e)}function Lm(e,t,n){return fr&21?(Kt(n,t)||(n=Fh(),Re.lanes|=n,pr|=n,e.baseState=!0),t):(e.baseState&&(e.baseState=!1,ht=!0),e.memoizedState=n)}function dy(e,t){var n=ye;ye=n!==0&&4>n?n:4,e(!0);var r=sl.transition;sl.transition={};try{e(!1),t()}finally{ye=n,sl.transition=r}}function Am(){return zt().memoizedState}function fy(e,t,n){var r=Gn(e);if(n={lane:r,action:n,hasEagerState:!1,eagerState:null,next:null},zm(e))Fm(t,n);else if(n=hm(e,t,n,r),n!==null){var i=ut();Qt(n,e,r,i),Vm(n,t,r)}}function py(e,t,n){var r=Gn(e),i={lane:r,action:n,hasEagerState:!1,eagerState:null,next:null};if(zm(e))Fm(t,i);else{var o=e.alternate;if(e.lanes===0&&(o===null||o.lanes===0)&&(o=t.lastRenderedReducer,o!==null))try{var a=t.lastRenderedState,l=o(a,n);if(i.hasEagerState=!0,i.eagerState=l,Kt(l,a)){var s=t.interleaved;s===null?(i.next=i,Sc(t)):(i.next=s.next,s.next=i),t.interleaved=i;return}}catch{}finally{}n=hm(e,t,i,r),n!==null&&(i=ut(),Qt(n,e,r,i),Vm(n,t,r))}}function zm(e){var t=e.alternate;return e===Re||t!==null&&t===Re}function Fm(e,t){Ii=Aa=!0;var n=e.pending;n===null?t.next=t:(t.next=n.next,n.next=t),e.pending=t}function Vm(e,t,n){if(n&4194240){var r=t.lanes;r&=e.pendingLanes,n|=r,t.lanes=n,lc(e,n)}}var za={readContext:At,useCallback:tt,useContext:tt,useEffect:tt,useImperativeHandle:tt,useInsertionEffect:tt,useLayoutEffect:tt,useMemo:tt,useReducer:tt,useRef:tt,useState:tt,useDebugValue:tt,useDeferredValue:tt,useTransition:tt,useMutableSource:tt,useSyncExternalStore:tt,useId:tt,unstable_isNewReconciler:!1},hy={readContext:At,useCallback:function(e,t){return Xt().memoizedState=[e,t===void 0?null:t],e},useContext:At,useEffect:ff,useImperativeHandle:function(e,t,n){return n=n!=null?n.concat([e]):null,ra(4194308,4,Mm.bind(null,t,e),n)},useLayoutEffect:function(e,t){return ra(4194308,4,e,t)},useInsertionEffect:function(e,t){return ra(4,2,e,t)},useMemo:function(e,t){var n=Xt();return t=t===void 0?null:t,e=e(),n.memoizedState=[e,t],e},useReducer:function(e,t,n){var r=Xt();return t=n!==void 0?n(t):t,r.memoizedState=r.baseState=t,e={pending:null,interleaved:null,lanes:0,dispatch:null,lastRenderedReducer:e,lastRenderedState:t},r.queue=e,e=e.dispatch=fy.bind(null,Re,e),[r.memoizedState,e]},useRef:function(e){var t=Xt();return e={current:e},t.memoizedState=e},useState:df,useDebugValue:Mc,useDeferredValue:function(e){return Xt().memoizedState=e},useTransition:function(){var e=df(!1),t=e[0];return e=dy.bind(null,e[1]),Xt().memoizedState=e,[t,e]},useMutableSource:function(){},useSyncExternalStore:function(e,t,n){var r=Re,i=Xt();if(Te){if(n===void 0)throw Error(L(407));n=n()}else{if(n=t(),Ye===null)throw Error(L(349));fr&30||km(r,t,n)}i.memoizedState=n;var o={value:n,getSnapshot:t};return i.queue=o,ff(Cm.bind(null,r,o,e),[e]),r.flags|=2048,eo(9,jm.bind(null,r,o,n,t),void 0,null),n},useId:function(){var e=Xt(),t=Ye.identifierPrefix;if(Te){var n=gn,r=mn;n=(r&~(1<<32-Ht(r)-1)).toString(32)+n,t=":"+t+"R"+n,n=Ji++,0<n&&(t+="H"+n.toString(32)),t+=":"}else n=cy++,t=":"+t+"r"+n.toString(32)+":";return e.memoizedState=t},unstable_isNewReconciler:!1},my={readContext:At,useCallback:Im,useContext:At,useEffect:Tc,useImperativeHandle:Rm,useInsertionEffect:Pm,useLayoutEffect:Tm,useMemo:Dm,useReducer:ll,useRef:_m,useState:function(){return ll(Zi)},useDebugValue:Mc,useDeferredValue:function(e){var t=zt();return Lm(t,We.memoizedState,e)},useTransition:function(){var e=ll(Zi)[0],t=zt().memoizedState;return[e,t]},useMutableSource:bm,useSyncExternalStore:Sm,useId:Am,unstable_isNewReconciler:!1},gy={readContext:At,useCallback:Im,useContext:At,useEffect:Tc,useImperativeHandle:Rm,useInsertionEffect:Pm,useLayoutEffect:Tm,useMemo:Dm,useReducer:ul,useRef:_m,useState:function(){return ul(Zi)},useDebugValue:Mc,useDeferredValue:function(e){var t=zt();return We===null?t.memoizedState=e:Lm(t,We.memoizedState,e)},useTransition:function(){var e=ul(Zi)[0],t=zt().memoizedState;return[e,t]},useMutableSource:bm,useSyncExternalStore:Sm,useId:Am,unstable_isNewReconciler:!1};function qr(e,t){try{var n="",r=t;do n+=Bv(r),r=r.return;while(r);var i=n}catch(o){i=`
Error generating stack: `+o.message+`
`+o.stack}return{value:e,source:t,stack:i,digest:null}}function cl(e,t,n){return{value:e,source:null,stack:n??null,digest:t??null}}function vu(e,t){try{console.error(t.value)}catch(n){setTimeout(function(){throw n})}}var xy=typeof WeakMap=="function"?WeakMap:Map;function Nm(e,t,n){n=vn(-1,n),n.tag=3,n.payload={element:null};var r=t.value;return n.callback=function(){Va||(Va=!0,_u=r),vu(e,t)},n}function $m(e,t,n){n=vn(-1,n),n.tag=3;var r=e.type.getDerivedStateFromError;if(typeof r=="function"){var i=t.value;n.payload=function(){return r(i)},n.callback=function(){vu(e,t)}}var o=e.stateNode;return o!==null&&typeof o.componentDidCatch=="function"&&(n.callback=function(){vu(e,t),typeof r!="function"&&(Kn===null?Kn=new Set([this]):Kn.add(this));var a=t.stack;this.componentDidCatch(t.value,{componentStack:a!==null?a:""})}),n}function pf(e,t,n){var r=e.pingCache;if(r===null){r=e.pingCache=new xy;var i=new Set;r.set(t,i)}else i=r.get(t),i===void 0&&(i=new Set,r.set(t,i));i.has(n)||(i.add(n),e=My.bind(null,e,t,n),t.then(e,e))}function hf(e){do{var t;if((t=e.tag===13)&&(t=e.memoizedState,t=t!==null?t.dehydrated!==null:!0),t)return e;e=e.return}while(e!==null);return null}function mf(e,t,n,r,i){return e.mode&1?(e.flags|=65536,e.lanes=i,e):(e===t?e.flags|=65536:(e.flags|=128,n.flags|=131072,n.flags&=-52805,n.tag===1&&(n.alternate===null?n.tag=17:(t=vn(-1,1),t.tag=2,Yn(n,t,1))),n.lanes|=1),e)}var vy=Cn.ReactCurrentOwner,ht=!1;function st(e,t,n,r){t.child=e===null?ym(t,null,n,r):Kr(t,e.child,n,r)}function gf(e,t,n,r,i){n=n.render;var o=t.ref;return Ur(t,i),r=_c(e,t,n,r,o,i),n=Pc(),e!==null&&!ht?(t.updateQueue=e.updateQueue,t.flags&=-2053,e.lanes&=~i,jn(e,t,i)):(Te&&n&&gc(t),t.flags|=1,st(e,t,r,i),t.child)}function xf(e,t,n,r,i){if(e===null){var o=n.type;return typeof o=="function"&&!Vc(o)&&o.defaultProps===void 0&&n.compare===null&&n.defaultProps===void 0?(t.tag=15,t.type=o,Um(e,t,o,r,i)):(e=sa(n.type,null,r,t,t.mode,i),e.ref=t.ref,e.return=t,t.child=e)}if(o=e.child,!(e.lanes&i)){var a=o.memoizedProps;if(n=n.compare,n=n!==null?n:Qi,n(a,r)&&e.ref===t.ref)return jn(e,t,i)}return t.flags|=1,e=qn(o,r),e.ref=t.ref,e.return=t,t.child=e}function Um(e,t,n,r,i){if(e!==null){var o=e.memoizedProps;if(Qi(o,r)&&e.ref===t.ref)if(ht=!1,t.pendingProps=r=o,(e.lanes&i)!==0)e.flags&131072&&(ht=!0);else return t.lanes=e.lanes,jn(e,t,i)}return yu(e,t,n,r,i)}function Wm(e,t,n){var r=t.pendingProps,i=r.children,o=e!==null?e.memoizedState:null;if(r.mode==="hidden")if(!(t.mode&1))t.memoizedState={baseLanes:0,cachePool:null,transitions:null},Ee(Ar,wt),wt|=n;else{if(!(n&1073741824))return e=o!==null?o.baseLanes|n:n,t.lanes=t.childLanes=1073741824,t.memoizedState={baseLanes:e,cachePool:null,transitions:null},t.updateQueue=null,Ee(Ar,wt),wt|=e,null;t.memoizedState={baseLanes:0,cachePool:null,transitions:null},r=o!==null?o.baseLanes:n,Ee(Ar,wt),wt|=r}else o!==null?(r=o.baseLanes|n,t.memoizedState=null):r=n,Ee(Ar,wt),wt|=r;return st(e,t,i,n),t.child}function Bm(e,t){var n=t.ref;(e===null&&n!==null||e!==null&&e.ref!==n)&&(t.flags|=512,t.flags|=2097152)}function yu(e,t,n,r,i){var o=gt(n)?cr:ot.current;return o=Qr(t,o),Ur(t,i),n=_c(e,t,n,r,o,i),r=Pc(),e!==null&&!ht?(t.updateQueue=e.updateQueue,t.flags&=-2053,e.lanes&=~i,jn(e,t,i)):(Te&&r&&gc(t),t.flags|=1,st(e,t,n,i),t.child)}function vf(e,t,n,r,i){if(gt(n)){var o=!0;Pa(t)}else o=!1;if(Ur(t,i),t.stateNode===null)ia(e,t),xm(t,n,r),xu(t,n,r,i),r=!0;else if(e===null){var a=t.stateNode,l=t.memoizedProps;a.props=l;var s=a.context,c=n.contextType;typeof c=="object"&&c!==null?c=At(c):(c=gt(n)?cr:ot.current,c=Qr(t,c));var d=n.getDerivedStateFromProps,f=typeof d=="function"||typeof a.getSnapshotBeforeUpdate=="function";f||typeof a.UNSAFE_componentWillReceiveProps!="function"&&typeof a.componentWillReceiveProps!="function"||(l!==r||s!==c)&&uf(t,a,r,c),zn=!1;var m=t.memoizedState;a.state=m,Da(t,r,a,i),s=t.memoizedState,l!==r||m!==s||mt.current||zn?(typeof d=="function"&&(gu(t,n,d,r),s=t.memoizedState),(l=zn||lf(t,n,l,r,m,s,c))?(f||typeof a.UNSAFE_componentWillMount!="function"&&typeof a.componentWillMount!="function"||(typeof a.componentWillMount=="function"&&a.componentWillMount(),typeof a.UNSAFE_componentWillMount=="function"&&a.UNSAFE_componentWillMount()),typeof a.componentDidMount=="function"&&(t.flags|=4194308)):(typeof a.componentDidMount=="function"&&(t.flags|=4194308),t.memoizedProps=r,t.memoizedState=s),a.props=r,a.state=s,a.context=c,r=l):(typeof a.componentDidMount=="function"&&(t.flags|=4194308),r=!1)}else{a=t.stateNode,mm(e,t),l=t.memoizedProps,c=t.type===t.elementType?l:Vt(t.type,l),a.props=c,f=t.pendingProps,m=a.context,s=n.contextType,typeof s=="object"&&s!==null?s=At(s):(s=gt(n)?cr:ot.current,s=Qr(t,s));var y=n.getDerivedStateFromProps;(d=typeof y=="function"||typeof a.getSnapshotBeforeUpdate=="function")||typeof a.UNSAFE_componentWillReceiveProps!="function"&&typeof a.componentWillReceiveProps!="function"||(l!==f||m!==s)&&uf(t,a,r,s),zn=!1,m=t.memoizedState,a.state=m,Da(t,r,a,i);var g=t.memoizedState;l!==f||m!==g||mt.current||zn?(typeof y=="function"&&(gu(t,n,y,r),g=t.memoizedState),(c=zn||lf(t,n,c,r,m,g,s)||!1)?(d||typeof a.UNSAFE_componentWillUpdate!="function"&&typeof a.componentWillUpdate!="function"||(typeof a.componentWillUpdate=="function"&&a.componentWillUpdate(r,g,s),typeof a.UNSAFE_componentWillUpdate=="function"&&a.UNSAFE_componentWillUpdate(r,g,s)),typeof a.componentDidUpdate=="function"&&(t.flags|=4),typeof a.getSnapshotBeforeUpdate=="function"&&(t.flags|=1024)):(typeof a.componentDidUpdate!="function"||l===e.memoizedProps&&m===e.memoizedState||(t.flags|=4),typeof a.getSnapshotBeforeUpdate!="function"||l===e.memoizedProps&&m===e.memoizedState||(t.flags|=1024),t.memoizedProps=r,t.memoizedState=g),a.props=r,a.state=g,a.context=s,r=c):(typeof a.componentDidUpdate!="function"||l===e.memoizedProps&&m===e.memoizedState||(t.flags|=4),typeof a.getSnapshotBeforeUpdate!="function"||l===e.memoizedProps&&m===e.memoizedState||(t.flags|=1024),r=!1)}return wu(e,t,n,r,o,i)}function wu(e,t,n,r,i,o){Bm(e,t);var a=(t.flags&128)!==0;if(!r&&!a)return i&&nf(t,n,!1),jn(e,t,o);r=t.stateNode,vy.current=t;var l=a&&typeof n.getDerivedStateFromError!="function"?null:r.render();return t.flags|=1,e!==null&&a?(t.child=Kr(t,e.child,null,o),t.child=Kr(t,null,l,o)):st(e,t,l,o),t.memoizedState=r.state,i&&nf(t,n,!0),t.child}function Hm(e){var t=e.stateNode;t.pendingContext?tf(e,t.pendingContext,t.pendingContext!==t.context):t.context&&tf(e,t.context,!1),jc(e,t.containerInfo)}function yf(e,t,n,r,i){return Yr(),vc(i),t.flags|=256,st(e,t,n,r),t.child}var bu={dehydrated:null,treeContext:null,retryLane:0};function Su(e){return{baseLanes:e,cachePool:null,transitions:null}}function Qm(e,t,n){var r=t.pendingProps,i=Me.current,o=!1,a=(t.flags&128)!==0,l;if((l=a)||(l=e!==null&&e.memoizedState===null?!1:(i&2)!==0),l?(o=!0,t.flags&=-129):(e===null||e.memoizedState!==null)&&(i|=1),Ee(Me,i&1),e===null)return hu(t),e=t.memoizedState,e!==null&&(e=e.dehydrated,e!==null)?(t.mode&1?e.data==="$!"?t.lanes=8:t.lanes=1073741824:t.lanes=1,null):(a=r.children,e=r.fallback,o?(r=t.mode,o=t.child,a={mode:"hidden",children:a},!(r&1)&&o!==null?(o.childLanes=0,o.pendingProps=a):o=hs(a,r,0,null),e=ur(e,r,n,null),o.return=t,e.return=t,o.sibling=e,t.child=o,t.child.memoizedState=Su(n),t.memoizedState=bu,e):Rc(t,a));if(i=e.memoizedState,i!==null&&(l=i.dehydrated,l!==null))return yy(e,t,a,r,l,i,n);if(o){o=r.fallback,a=t.mode,i=e.child,l=i.sibling;var s={mode:"hidden",children:r.children};return!(a&1)&&t.child!==i?(r=t.child,r.childLanes=0,r.pendingProps=s,t.deletions=null):(r=qn(i,s),r.subtreeFlags=i.subtreeFlags&14680064),l!==null?o=qn(l,o):(o=ur(o,a,n,null),o.flags|=2),o.return=t,r.return=t,r.sibling=o,t.child=r,r=o,o=t.child,a=e.child.memoizedState,a=a===null?Su(n):{baseLanes:a.baseLanes|n,cachePool:null,transitions:a.transitions},o.memoizedState=a,o.childLanes=e.childLanes&~n,t.memoizedState=bu,r}return o=e.child,e=o.sibling,r=qn(o,{mode:"visible",children:r.children}),!(t.mode&1)&&(r.lanes=n),r.return=t,r.sibling=null,e!==null&&(n=t.deletions,n===null?(t.deletions=[e],t.flags|=16):n.push(e)),t.child=r,t.memoizedState=null,r}function Rc(e,t){return t=hs({mode:"visible",children:t},e.mode,0,null),t.return=e,e.child=t}function Io(e,t,n,r){return r!==null&&vc(r),Kr(t,e.child,null,n),e=Rc(t,t.pendingProps.children),e.flags|=2,t.memoizedState=null,e}function yy(e,t,n,r,i,o,a){if(n)return t.flags&256?(t.flags&=-257,r=cl(Error(L(422))),Io(e,t,a,r)):t.memoizedState!==null?(t.child=e.child,t.flags|=128,null):(o=r.fallback,i=t.mode,r=hs({mode:"visible",children:r.children},i,0,null),o=ur(o,i,a,null),o.flags|=2,r.return=t,o.return=t,r.sibling=o,t.child=r,t.mode&1&&Kr(t,e.child,null,a),t.child.memoizedState=Su(a),t.memoizedState=bu,o);if(!(t.mode&1))return Io(e,t,a,null);if(i.data==="$!"){if(r=i.nextSibling&&i.nextSibling.dataset,r)var l=r.dgst;return r=l,o=Error(L(419)),r=cl(o,r,void 0),Io(e,t,a,r)}if(l=(a&e.childLanes)!==0,ht||l){if(r=Ye,r!==null){switch(a&-a){case 4:i=2;break;case 16:i=8;break;case 64:case 128:case 256:case 512:case 1024:case 2048:case 4096:case 8192:case 16384:case 32768:case 65536:case 131072:case 262144:case 524288:case 1048576:case 2097152:case 4194304:case 8388608:case 16777216:case 33554432:case 67108864:i=32;break;case 536870912:i=268435456;break;default:i=0}i=i&(r.suspendedLanes|a)?0:i,i!==0&&i!==o.retryLane&&(o.retryLane=i,kn(e,i),Qt(r,e,i,-1))}return Fc(),r=cl(Error(L(421))),Io(e,t,a,r)}return i.data==="$?"?(t.flags|=128,t.child=e.child,t=Ry.bind(null,e),i._reactRetry=t,null):(e=o.treeContext,bt=Qn(i.nextSibling),St=t,Te=!0,Wt=null,e!==null&&(Mt[Rt++]=mn,Mt[Rt++]=gn,Mt[Rt++]=dr,mn=e.id,gn=e.overflow,dr=t),t=Rc(t,r.children),t.flags|=4096,t)}function wf(e,t,n){e.lanes|=t;var r=e.alternate;r!==null&&(r.lanes|=t),mu(e.return,t,n)}function dl(e,t,n,r,i){var o=e.memoizedState;o===null?e.memoizedState={isBackwards:t,rendering:null,renderingStartTime:0,last:r,tail:n,tailMode:i}:(o.isBackwards=t,o.rendering=null,o.renderingStartTime=0,o.last=r,o.tail=n,o.tailMode=i)}function Ym(e,t,n){var r=t.pendingProps,i=r.revealOrder,o=r.tail;if(st(e,t,r.children,n),r=Me.current,r&2)r=r&1|2,t.flags|=128;else{if(e!==null&&e.flags&128)e:for(e=t.child;e!==null;){if(e.tag===13)e.memoizedState!==null&&wf(e,n,t);else if(e.tag===19)wf(e,n,t);else if(e.child!==null){e.child.return=e,e=e.child;continue}if(e===t)break e;for(;e.sibling===null;){if(e.return===null||e.return===t)break e;e=e.return}e.sibling.return=e.return,e=e.sibling}r&=1}if(Ee(Me,r),!(t.mode&1))t.memoizedState=null;else switch(i){case"forwards":for(n=t.child,i=null;n!==null;)e=n.alternate,e!==null&&La(e)===null&&(i=n),n=n.sibling;n=i,n===null?(i=t.child,t.child=null):(i=n.sibling,n.sibling=null),dl(t,!1,i,n,o);break;case"backwards":for(n=null,i=t.child,t.child=null;i!==null;){if(e=i.alternate,e!==null&&La(e)===null){t.child=i;break}e=i.sibling,i.sibling=n,n=i,i=e}dl(t,!0,n,null,o);break;case"together":dl(t,!1,null,null,void 0);break;default:t.memoizedState=null}return t.child}function ia(e,t){!(t.mode&1)&&e!==null&&(e.alternate=null,t.alternate=null,t.flags|=2)}function jn(e,t,n){if(e!==null&&(t.dependencies=e.dependencies),pr|=t.lanes,!(n&t.childLanes))return null;if(e!==null&&t.child!==e.child)throw Error(L(153));if(t.child!==null){for(e=t.child,n=qn(e,e.pendingProps),t.child=n,n.return=t;e.sibling!==null;)e=e.sibling,n=n.sibling=qn(e,e.pendingProps),n.return=t;n.sibling=null}return t.child}function wy(e,t,n){switch(t.tag){case 3:Hm(t),Yr();break;case 5:wm(t);break;case 1:gt(t.type)&&Pa(t);break;case 4:jc(t,t.stateNode.containerInfo);break;case 10:var r=t.type._context,i=t.memoizedProps.value;Ee(Ra,r._currentValue),r._currentValue=i;break;case 13:if(r=t.memoizedState,r!==null)return r.dehydrated!==null?(Ee(Me,Me.current&1),t.flags|=128,null):n&t.child.childLanes?Qm(e,t,n):(Ee(Me,Me.current&1),e=jn(e,t,n),e!==null?e.sibling:null);Ee(Me,Me.current&1);break;case 19:if(r=(n&t.childLanes)!==0,e.flags&128){if(r)return Ym(e,t,n);t.flags|=128}if(i=t.memoizedState,i!==null&&(i.rendering=null,i.tail=null,i.lastEffect=null),Ee(Me,Me.current),r)break;return null;case 22:case 23:return t.lanes=0,Wm(e,t,n)}return jn(e,t,n)}var Km,ku,Gm,qm;Km=function(e,t){for(var n=t.child;n!==null;){if(n.tag===5||n.tag===6)e.appendChild(n.stateNode);else if(n.tag!==4&&n.child!==null){n.child.return=n,n=n.child;continue}if(n===t)break;for(;n.sibling===null;){if(n.return===null||n.return===t)return;n=n.return}n.sibling.return=n.return,n=n.sibling}};ku=function(){};Gm=function(e,t,n,r){var i=e.memoizedProps;if(i!==r){e=t.stateNode,ar(an.current);var o=null;switch(n){case"input":i=Hl(e,i),r=Hl(e,r),o=[];break;case"select":i=Ie({},i,{value:void 0}),r=Ie({},r,{value:void 0}),o=[];break;case"textarea":i=Kl(e,i),r=Kl(e,r),o=[];break;default:typeof i.onClick!="function"&&typeof r.onClick=="function"&&(e.onclick=Oa)}ql(n,r);var a;n=null;for(c in i)if(!r.hasOwnProperty(c)&&i.hasOwnProperty(c)&&i[c]!=null)if(c==="style"){var l=i[c];for(a in l)l.hasOwnProperty(a)&&(n||(n={}),n[a]="")}else c!=="dangerouslySetInnerHTML"&&c!=="children"&&c!=="suppressContentEditableWarning"&&c!=="suppressHydrationWarning"&&c!=="autoFocus"&&(Vi.hasOwnProperty(c)?o||(o=[]):(o=o||[]).push(c,null));for(c in r){var s=r[c];if(l=i!=null?i[c]:void 0,r.hasOwnProperty(c)&&s!==l&&(s!=null||l!=null))if(c==="style")if(l){for(a in l)!l.hasOwnProperty(a)||s&&s.hasOwnProperty(a)||(n||(n={}),n[a]="");for(a in s)s.hasOwnProperty(a)&&l[a]!==s[a]&&(n||(n={}),n[a]=s[a])}else n||(o||(o=[]),o.push(c,n)),n=s;else c==="dangerouslySetInnerHTML"?(s=s?s.__html:void 0,l=l?l.__html:void 0,s!=null&&l!==s&&(o=o||[]).push(c,s)):c==="children"?typeof s!="string"&&typeof s!="number"||(o=o||[]).push(c,""+s):c!=="suppressContentEditableWarning"&&c!=="suppressHydrationWarning"&&(Vi.hasOwnProperty(c)?(s!=null&&c==="onScroll"&&_e("scroll",e),o||l===s||(o=[])):(o=o||[]).push(c,s))}n&&(o=o||[]).push("style",n);var c=o;(t.updateQueue=c)&&(t.flags|=4)}};qm=function(e,t,n,r){n!==r&&(t.flags|=4)};function di(e,t){if(!Te)switch(e.tailMode){case"hidden":t=e.tail;for(var n=null;t!==null;)t.alternate!==null&&(n=t),t=t.sibling;n===null?e.tail=null:n.sibling=null;break;case"collapsed":n=e.tail;for(var r=null;n!==null;)n.alternate!==null&&(r=n),n=n.sibling;r===null?t||e.tail===null?e.tail=null:e.tail.sibling=null:r.sibling=null}}function nt(e){var t=e.alternate!==null&&e.alternate.child===e.child,n=0,r=0;if(t)for(var i=e.child;i!==null;)n|=i.lanes|i.childLanes,r|=i.subtreeFlags&14680064,r|=i.flags&14680064,i.return=e,i=i.sibling;else for(i=e.child;i!==null;)n|=i.lanes|i.childLanes,r|=i.subtreeFlags,r|=i.flags,i.return=e,i=i.sibling;return e.subtreeFlags|=r,e.childLanes=n,t}function by(e,t,n){var r=t.pendingProps;switch(xc(t),t.tag){case 2:case 16:case 15:case 0:case 11:case 7:case 8:case 12:case 9:case 14:return nt(t),null;case 1:return gt(t.type)&&_a(),nt(t),null;case 3:return r=t.stateNode,Gr(),Pe(mt),Pe(ot),Ec(),r.pendingContext&&(r.context=r.pendingContext,r.pendingContext=null),(e===null||e.child===null)&&(Mo(t)?t.flags|=4:e===null||e.memoizedState.isDehydrated&&!(t.flags&256)||(t.flags|=1024,Wt!==null&&(Mu(Wt),Wt=null))),ku(e,t),nt(t),null;case 5:Cc(t);var i=ar(Xi.current);if(n=t.type,e!==null&&t.stateNode!=null)Gm(e,t,n,r,i),e.ref!==t.ref&&(t.flags|=512,t.flags|=2097152);else{if(!r){if(t.stateNode===null)throw Error(L(166));return nt(t),null}if(e=ar(an.current),Mo(t)){r=t.stateNode,n=t.type;var o=t.memoizedProps;switch(r[en]=t,r[Gi]=o,e=(t.mode&1)!==0,n){case"dialog":_e("cancel",r),_e("close",r);break;case"iframe":case"object":case"embed":_e("load",r);break;case"video":case"audio":for(i=0;i<Ci.length;i++)_e(Ci[i],r);break;case"source":_e("error",r);break;case"img":case"image":case"link":_e("error",r),_e("load",r);break;case"details":_e("toggle",r);break;case"input":_d(r,o),_e("invalid",r);break;case"select":r._wrapperState={wasMultiple:!!o.multiple},_e("invalid",r);break;case"textarea":Td(r,o),_e("invalid",r)}ql(n,o),i=null;for(var a in o)if(o.hasOwnProperty(a)){var l=o[a];a==="children"?typeof l=="string"?r.textContent!==l&&(o.suppressHydrationWarning!==!0&&To(r.textContent,l,e),i=["children",l]):typeof l=="number"&&r.textContent!==""+l&&(o.suppressHydrationWarning!==!0&&To(r.textContent,l,e),i=["children",""+l]):Vi.hasOwnProperty(a)&&l!=null&&a==="onScroll"&&_e("scroll",r)}switch(n){case"input":So(r),Pd(r,o,!0);break;case"textarea":So(r),Md(r);break;case"select":case"option":break;default:typeof o.onClick=="function"&&(r.onclick=Oa)}r=i,t.updateQueue=r,r!==null&&(t.flags|=4)}else{a=i.nodeType===9?i:i.ownerDocument,e==="http://www.w3.org/1999/xhtml"&&(e=kh(n)),e==="http://www.w3.org/1999/xhtml"?n==="script"?(e=a.createElement("div"),e.innerHTML="<script><\/script>",e=e.removeChild(e.firstChild)):typeof r.is=="string"?e=a.createElement(n,{is:r.is}):(e=a.createElement(n),n==="select"&&(a=e,r.multiple?a.multiple=!0:r.size&&(a.size=r.size))):e=a.createElementNS(e,n),e[en]=t,e[Gi]=r,Km(e,t,!1,!1),t.stateNode=e;e:{switch(a=Xl(n,r),n){case"dialog":_e("cancel",e),_e("close",e),i=r;break;case"iframe":case"object":case"embed":_e("load",e),i=r;break;case"video":case"audio":for(i=0;i<Ci.length;i++)_e(Ci[i],e);i=r;break;case"source":_e("error",e),i=r;break;case"img":case"image":case"link":_e("error",e),_e("load",e),i=r;break;case"details":_e("toggle",e),i=r;break;case"input":_d(e,r),i=Hl(e,r),_e("invalid",e);break;case"option":i=r;break;case"select":e._wrapperState={wasMultiple:!!r.multiple},i=Ie({},r,{value:void 0}),_e("invalid",e);break;case"textarea":Td(e,r),i=Kl(e,r),_e("invalid",e);break;default:i=r}ql(n,i),l=i;for(o in l)if(l.hasOwnProperty(o)){var s=l[o];o==="style"?Eh(e,s):o==="dangerouslySetInnerHTML"?(s=s?s.__html:void 0,s!=null&&jh(e,s)):o==="children"?typeof s=="string"?(n!=="textarea"||s!=="")&&Ni(e,s):typeof s=="number"&&Ni(e,""+s):o!=="suppressContentEditableWarning"&&o!=="suppressHydrationWarning"&&o!=="autoFocus"&&(Vi.hasOwnProperty(o)?s!=null&&o==="onScroll"&&_e("scroll",e):s!=null&&nc(e,o,s,a))}switch(n){case"input":So(e),Pd(e,r,!1);break;case"textarea":So(e),Md(e);break;case"option":r.value!=null&&e.setAttribute("value",""+Xn(r.value));break;case"select":e.multiple=!!r.multiple,o=r.value,o!=null?Fr(e,!!r.multiple,o,!1):r.defaultValue!=null&&Fr(e,!!r.multiple,r.defaultValue,!0);break;default:typeof i.onClick=="function"&&(e.onclick=Oa)}switch(n){case"button":case"input":case"select":case"textarea":r=!!r.autoFocus;break e;case"img":r=!0;break e;default:r=!1}}r&&(t.flags|=4)}t.ref!==null&&(t.flags|=512,t.flags|=2097152)}return nt(t),null;case 6:if(e&&t.stateNode!=null)qm(e,t,e.memoizedProps,r);else{if(typeof r!="string"&&t.stateNode===null)throw Error(L(166));if(n=ar(Xi.current),ar(an.current),Mo(t)){if(r=t.stateNode,n=t.memoizedProps,r[en]=t,(o=r.nodeValue!==n)&&(e=St,e!==null))switch(e.tag){case 3:To(r.nodeValue,n,(e.mode&1)!==0);break;case 5:e.memoizedProps.suppressHydrationWarning!==!0&&To(r.nodeValue,n,(e.mode&1)!==0)}o&&(t.flags|=4)}else r=(n.nodeType===9?n:n.ownerDocument).createTextNode(r),r[en]=t,t.stateNode=r}return nt(t),null;case 13:if(Pe(Me),r=t.memoizedState,e===null||e.memoizedState!==null&&e.memoizedState.dehydrated!==null){if(Te&&bt!==null&&t.mode&1&&!(t.flags&128))pm(),Yr(),t.flags|=98560,o=!1;else if(o=Mo(t),r!==null&&r.dehydrated!==null){if(e===null){if(!o)throw Error(L(318));if(o=t.memoizedState,o=o!==null?o.dehydrated:null,!o)throw Error(L(317));o[en]=t}else Yr(),!(t.flags&128)&&(t.memoizedState=null),t.flags|=4;nt(t),o=!1}else Wt!==null&&(Mu(Wt),Wt=null),o=!0;if(!o)return t.flags&65536?t:null}return t.flags&128?(t.lanes=n,t):(r=r!==null,r!==(e!==null&&e.memoizedState!==null)&&r&&(t.child.flags|=8192,t.mode&1&&(e===null||Me.current&1?Be===0&&(Be=3):Fc())),t.updateQueue!==null&&(t.flags|=4),nt(t),null);case 4:return Gr(),ku(e,t),e===null&&Yi(t.stateNode.containerInfo),nt(t),null;case 10:return bc(t.type._context),nt(t),null;case 17:return gt(t.type)&&_a(),nt(t),null;case 19:if(Pe(Me),o=t.memoizedState,o===null)return nt(t),null;if(r=(t.flags&128)!==0,a=o.rendering,a===null)if(r)di(o,!1);else{if(Be!==0||e!==null&&e.flags&128)for(e=t.child;e!==null;){if(a=La(e),a!==null){for(t.flags|=128,di(o,!1),r=a.updateQueue,r!==null&&(t.updateQueue=r,t.flags|=4),t.subtreeFlags=0,r=n,n=t.child;n!==null;)o=n,e=r,o.flags&=14680066,a=o.alternate,a===null?(o.childLanes=0,o.lanes=e,o.child=null,o.subtreeFlags=0,o.memoizedProps=null,o.memoizedState=null,o.updateQueue=null,o.dependencies=null,o.stateNode=null):(o.childLanes=a.childLanes,o.lanes=a.lanes,o.child=a.child,o.subtreeFlags=0,o.deletions=null,o.memoizedProps=a.memoizedProps,o.memoizedState=a.memoizedState,o.updateQueue=a.updateQueue,o.type=a.type,e=a.dependencies,o.dependencies=e===null?null:{lanes:e.lanes,firstContext:e.firstContext}),n=n.sibling;return Ee(Me,Me.current&1|2),t.child}e=e.sibling}o.tail!==null&&ze()>Xr&&(t.flags|=128,r=!0,di(o,!1),t.lanes=4194304)}else{if(!r)if(e=La(a),e!==null){if(t.flags|=128,r=!0,n=e.updateQueue,n!==null&&(t.updateQueue=n,t.flags|=4),di(o,!0),o.tail===null&&o.tailMode==="hidden"&&!a.alternate&&!Te)return nt(t),null}else 2*ze()-o.renderingStartTime>Xr&&n!==1073741824&&(t.flags|=128,r=!0,di(o,!1),t.lanes=4194304);o.isBackwards?(a.sibling=t.child,t.child=a):(n=o.last,n!==null?n.sibling=a:t.child=a,o.last=a)}return o.tail!==null?(t=o.tail,o.rendering=t,o.tail=t.sibling,o.renderingStartTime=ze(),t.sibling=null,n=Me.current,Ee(Me,r?n&1|2:n&1),t):(nt(t),null);case 22:case 23:return zc(),r=t.memoizedState!==null,e!==null&&e.memoizedState!==null!==r&&(t.flags|=8192),r&&t.mode&1?wt&1073741824&&(nt(t),t.subtreeFlags&6&&(t.flags|=8192)):nt(t),null;case 24:return null;case 25:return null}throw Error(L(156,t.tag))}function Sy(e,t){switch(xc(t),t.tag){case 1:return gt(t.type)&&_a(),e=t.flags,e&65536?(t.flags=e&-65537|128,t):null;case 3:return Gr(),Pe(mt),Pe(ot),Ec(),e=t.flags,e&65536&&!(e&128)?(t.flags=e&-65537|128,t):null;case 5:return Cc(t),null;case 13:if(Pe(Me),e=t.memoizedState,e!==null&&e.dehydrated!==null){if(t.alternate===null)throw Error(L(340));Yr()}return e=t.flags,e&65536?(t.flags=e&-65537|128,t):null;case 19:return Pe(Me),null;case 4:return Gr(),null;case 10:return bc(t.type._context),null;case 22:case 23:return zc(),null;case 24:return null;default:return null}}var Do=!1,it=!1,ky=typeof WeakSet=="function"?WeakSet:Set,H=null;function Lr(e,t){var n=e.ref;if(n!==null)if(typeof n=="function")try{n(null)}catch(r){De(e,t,r)}else n.current=null}function ju(e,t,n){try{n()}catch(r){De(e,t,r)}}var bf=!1;function jy(e,t){if(su=ja,e=em(),mc(e)){if("selectionStart"in e)var n={start:e.selectionStart,end:e.selectionEnd};else e:{n=(n=e.ownerDocument)&&n.defaultView||window;var r=n.getSelection&&n.getSelection();if(r&&r.rangeCount!==0){n=r.anchorNode;var i=r.anchorOffset,o=r.focusNode;r=r.focusOffset;try{n.nodeType,o.nodeType}catch{n=null;break e}var a=0,l=-1,s=-1,c=0,d=0,f=e,m=null;t:for(;;){for(var y;f!==n||i!==0&&f.nodeType!==3||(l=a+i),f!==o||r!==0&&f.nodeType!==3||(s=a+r),f.nodeType===3&&(a+=f.nodeValue.length),(y=f.firstChild)!==null;)m=f,f=y;for(;;){if(f===e)break t;if(m===n&&++c===i&&(l=a),m===o&&++d===r&&(s=a),(y=f.nextSibling)!==null)break;f=m,m=f.parentNode}f=y}n=l===-1||s===-1?null:{start:l,end:s}}else n=null}n=n||{start:0,end:0}}else n=null;for(lu={focusedElem:e,selectionRange:n},ja=!1,H=t;H!==null;)if(t=H,e=t.child,(t.subtreeFlags&1028)!==0&&e!==null)e.return=t,H=e;else for(;H!==null;){t=H;try{var g=t.alternate;if(t.flags&1024)switch(t.tag){case 0:case 11:case 15:break;case 1:if(g!==null){var x=g.memoizedProps,w=g.memoizedState,p=t.stateNode,h=p.getSnapshotBeforeUpdate(t.elementType===t.type?x:Vt(t.type,x),w);p.__reactInternalSnapshotBeforeUpdate=h}break;case 3:var v=t.stateNode.containerInfo;v.nodeType===1?v.textContent="":v.nodeType===9&&v.documentElement&&v.removeChild(v.documentElement);break;case 5:case 6:case 4:case 17:break;default:throw Error(L(163))}}catch(b){De(t,t.return,b)}if(e=t.sibling,e!==null){e.return=t.return,H=e;break}H=t.return}return g=bf,bf=!1,g}function Di(e,t,n){var r=t.updateQueue;if(r=r!==null?r.lastEffect:null,r!==null){var i=r=r.next;do{if((i.tag&e)===e){var o=i.destroy;i.destroy=void 0,o!==void 0&&ju(t,n,o)}i=i.next}while(i!==r)}}function fs(e,t){if(t=t.updateQueue,t=t!==null?t.lastEffect:null,t!==null){var n=t=t.next;do{if((n.tag&e)===e){var r=n.create;n.destroy=r()}n=n.next}while(n!==t)}}function Cu(e){var t=e.ref;if(t!==null){var n=e.stateNode;switch(e.tag){case 5:e=n;break;default:e=n}typeof t=="function"?t(e):t.current=e}}function Xm(e){var t=e.alternate;t!==null&&(e.alternate=null,Xm(t)),e.child=null,e.deletions=null,e.sibling=null,e.tag===5&&(t=e.stateNode,t!==null&&(delete t[en],delete t[Gi],delete t[du],delete t[ay],delete t[sy])),e.stateNode=null,e.return=null,e.dependencies=null,e.memoizedProps=null,e.memoizedState=null,e.pendingProps=null,e.stateNode=null,e.updateQueue=null}function Jm(e){return e.tag===5||e.tag===3||e.tag===4}function Sf(e){e:for(;;){for(;e.sibling===null;){if(e.return===null||Jm(e.return))return null;e=e.return}for(e.sibling.return=e.return,e=e.sibling;e.tag!==5&&e.tag!==6&&e.tag!==18;){if(e.flags&2||e.child===null||e.tag===4)continue e;e.child.return=e,e=e.child}if(!(e.flags&2))return e.stateNode}}function Eu(e,t,n){var r=e.tag;if(r===5||r===6)e=e.stateNode,t?n.nodeType===8?n.parentNode.insertBefore(e,t):n.insertBefore(e,t):(n.nodeType===8?(t=n.parentNode,t.insertBefore(e,n)):(t=n,t.appendChild(e)),n=n._reactRootContainer,n!=null||t.onclick!==null||(t.onclick=Oa));else if(r!==4&&(e=e.child,e!==null))for(Eu(e,t,n),e=e.sibling;e!==null;)Eu(e,t,n),e=e.sibling}function Ou(e,t,n){var r=e.tag;if(r===5||r===6)e=e.stateNode,t?n.insertBefore(e,t):n.appendChild(e);else if(r!==4&&(e=e.child,e!==null))for(Ou(e,t,n),e=e.sibling;e!==null;)Ou(e,t,n),e=e.sibling}var qe=null,$t=!1;function On(e,t,n){for(n=n.child;n!==null;)Zm(e,t,n),n=n.sibling}function Zm(e,t,n){if(on&&typeof on.onCommitFiberUnmount=="function")try{on.onCommitFiberUnmount(is,n)}catch{}switch(n.tag){case 5:it||Lr(n,t);case 6:var r=qe,i=$t;qe=null,On(e,t,n),qe=r,$t=i,qe!==null&&($t?(e=qe,n=n.stateNode,e.nodeType===8?e.parentNode.removeChild(n):e.removeChild(n)):qe.removeChild(n.stateNode));break;case 18:qe!==null&&($t?(e=qe,n=n.stateNode,e.nodeType===8?il(e.parentNode,n):e.nodeType===1&&il(e,n),Bi(e)):il(qe,n.stateNode));break;case 4:r=qe,i=$t,qe=n.stateNode.containerInfo,$t=!0,On(e,t,n),qe=r,$t=i;break;case 0:case 11:case 14:case 15:if(!it&&(r=n.updateQueue,r!==null&&(r=r.lastEffect,r!==null))){i=r=r.next;do{var o=i,a=o.destroy;o=o.tag,a!==void 0&&(o&2||o&4)&&ju(n,t,a),i=i.next}while(i!==r)}On(e,t,n);break;case 1:if(!it&&(Lr(n,t),r=n.stateNode,typeof r.componentWillUnmount=="function"))try{r.props=n.memoizedProps,r.state=n.memoizedState,r.componentWillUnmount()}catch(l){De(n,t,l)}On(e,t,n);break;case 21:On(e,t,n);break;case 22:n.mode&1?(it=(r=it)||n.memoizedState!==null,On(e,t,n),it=r):On(e,t,n);break;default:On(e,t,n)}}function kf(e){var t=e.updateQueue;if(t!==null){e.updateQueue=null;var n=e.stateNode;n===null&&(n=e.stateNode=new ky),t.forEach(function(r){var i=Iy.bind(null,e,r);n.has(r)||(n.add(r),r.then(i,i))})}}function Ft(e,t){var n=t.deletions;if(n!==null)for(var r=0;r<n.length;r++){var i=n[r];try{var o=e,a=t,l=a;e:for(;l!==null;){switch(l.tag){case 5:qe=l.stateNode,$t=!1;break e;case 3:qe=l.stateNode.containerInfo,$t=!0;break e;case 4:qe=l.stateNode.containerInfo,$t=!0;break e}l=l.return}if(qe===null)throw Error(L(160));Zm(o,a,i),qe=null,$t=!1;var s=i.alternate;s!==null&&(s.return=null),i.return=null}catch(c){De(i,t,c)}}if(t.subtreeFlags&12854)for(t=t.child;t!==null;)eg(t,e),t=t.sibling}function eg(e,t){var n=e.alternate,r=e.flags;switch(e.tag){case 0:case 11:case 14:case 15:if(Ft(t,e),Gt(e),r&4){try{Di(3,e,e.return),fs(3,e)}catch(x){De(e,e.return,x)}try{Di(5,e,e.return)}catch(x){De(e,e.return,x)}}break;case 1:Ft(t,e),Gt(e),r&512&&n!==null&&Lr(n,n.return);break;case 5:if(Ft(t,e),Gt(e),r&512&&n!==null&&Lr(n,n.return),e.flags&32){var i=e.stateNode;try{Ni(i,"")}catch(x){De(e,e.return,x)}}if(r&4&&(i=e.stateNode,i!=null)){var o=e.memoizedProps,a=n!==null?n.memoizedProps:o,l=e.type,s=e.updateQueue;if(e.updateQueue=null,s!==null)try{l==="input"&&o.type==="radio"&&o.name!=null&&bh(i,o),Xl(l,a);var c=Xl(l,o);for(a=0;a<s.length;a+=2){var d=s[a],f=s[a+1];d==="style"?Eh(i,f):d==="dangerouslySetInnerHTML"?jh(i,f):d==="children"?Ni(i,f):nc(i,d,f,c)}switch(l){case"input":Ql(i,o);break;case"textarea":Sh(i,o);break;case"select":var m=i._wrapperState.wasMultiple;i._wrapperState.wasMultiple=!!o.multiple;var y=o.value;y!=null?Fr(i,!!o.multiple,y,!1):m!==!!o.multiple&&(o.defaultValue!=null?Fr(i,!!o.multiple,o.defaultValue,!0):Fr(i,!!o.multiple,o.multiple?[]:"",!1))}i[Gi]=o}catch(x){De(e,e.return,x)}}break;case 6:if(Ft(t,e),Gt(e),r&4){if(e.stateNode===null)throw Error(L(162));i=e.stateNode,o=e.memoizedProps;try{i.nodeValue=o}catch(x){De(e,e.return,x)}}break;case 3:if(Ft(t,e),Gt(e),r&4&&n!==null&&n.memoizedState.isDehydrated)try{Bi(t.containerInfo)}catch(x){De(e,e.return,x)}break;case 4:Ft(t,e),Gt(e);break;case 13:Ft(t,e),Gt(e),i=e.child,i.flags&8192&&(o=i.memoizedState!==null,i.stateNode.isHidden=o,!o||i.alternate!==null&&i.alternate.memoizedState!==null||(Lc=ze())),r&4&&kf(e);break;case 22:if(d=n!==null&&n.memoizedState!==null,e.mode&1?(it=(c=it)||d,Ft(t,e),it=c):Ft(t,e),Gt(e),r&8192){if(c=e.memoizedState!==null,(e.stateNode.isHidden=c)&&!d&&e.mode&1)for(H=e,d=e.child;d!==null;){for(f=H=d;H!==null;){switch(m=H,y=m.child,m.tag){case 0:case 11:case 14:case 15:Di(4,m,m.return);break;case 1:Lr(m,m.return);var g=m.stateNode;if(typeof g.componentWillUnmount=="function"){r=m,n=m.return;try{t=r,g.props=t.memoizedProps,g.state=t.memoizedState,g.componentWillUnmount()}catch(x){De(r,n,x)}}break;case 5:Lr(m,m.return);break;case 22:if(m.memoizedState!==null){Cf(f);continue}}y!==null?(y.return=m,H=y):Cf(f)}d=d.sibling}e:for(d=null,f=e;;){if(f.tag===5){if(d===null){d=f;try{i=f.stateNode,c?(o=i.style,typeof o.setProperty=="function"?o.setProperty("display","none","important"):o.display="none"):(l=f.stateNode,s=f.memoizedProps.style,a=s!=null&&s.hasOwnProperty("display")?s.display:null,l.style.display=Ch("display",a))}catch(x){De(e,e.return,x)}}}else if(f.tag===6){if(d===null)try{f.stateNode.nodeValue=c?"":f.memoizedProps}catch(x){De(e,e.return,x)}}else if((f.tag!==22&&f.tag!==23||f.memoizedState===null||f===e)&&f.child!==null){f.child.return=f,f=f.child;continue}if(f===e)break e;for(;f.sibling===null;){if(f.return===null||f.return===e)break e;d===f&&(d=null),f=f.return}d===f&&(d=null),f.sibling.return=f.return,f=f.sibling}}break;case 19:Ft(t,e),Gt(e),r&4&&kf(e);break;case 21:break;default:Ft(t,e),Gt(e)}}function Gt(e){var t=e.flags;if(t&2){try{e:{for(var n=e.return;n!==null;){if(Jm(n)){var r=n;break e}n=n.return}throw Error(L(160))}switch(r.tag){case 5:var i=r.stateNode;r.flags&32&&(Ni(i,""),r.flags&=-33);var o=Sf(e);Ou(e,o,i);break;case 3:case 4:var a=r.stateNode.containerInfo,l=Sf(e);Eu(e,l,a);break;default:throw Error(L(161))}}catch(s){De(e,e.return,s)}e.flags&=-3}t&4096&&(e.flags&=-4097)}function Cy(e,t,n){H=e,tg(e)}function tg(e,t,n){for(var r=(e.mode&1)!==0;H!==null;){var i=H,o=i.child;if(i.tag===22&&r){var a=i.memoizedState!==null||Do;if(!a){var l=i.alternate,s=l!==null&&l.memoizedState!==null||it;l=Do;var c=it;if(Do=a,(it=s)&&!c)for(H=i;H!==null;)a=H,s=a.child,a.tag===22&&a.memoizedState!==null?Ef(i):s!==null?(s.return=a,H=s):Ef(i);for(;o!==null;)H=o,tg(o),o=o.sibling;H=i,Do=l,it=c}jf(e)}else i.subtreeFlags&8772&&o!==null?(o.return=i,H=o):jf(e)}}function jf(e){for(;H!==null;){var t=H;if(t.flags&8772){var n=t.alternate;try{if(t.flags&8772)switch(t.tag){case 0:case 11:case 15:it||fs(5,t);break;case 1:var r=t.stateNode;if(t.flags&4&&!it)if(n===null)r.componentDidMount();else{var i=t.elementType===t.type?n.memoizedProps:Vt(t.type,n.memoizedProps);r.componentDidUpdate(i,n.memoizedState,r.__reactInternalSnapshotBeforeUpdate)}var o=t.updateQueue;o!==null&&sf(t,o,r);break;case 3:var a=t.updateQueue;if(a!==null){if(n=null,t.child!==null)switch(t.child.tag){case 5:n=t.child.stateNode;break;case 1:n=t.child.stateNode}sf(t,a,n)}break;case 5:var l=t.stateNode;if(n===null&&t.flags&4){n=l;var s=t.memoizedProps;switch(t.type){case"button":case"input":case"select":case"textarea":s.autoFocus&&n.focus();break;case"img":s.src&&(n.src=s.src)}}break;case 6:break;case 4:break;case 12:break;case 13:if(t.memoizedState===null){var c=t.alternate;if(c!==null){var d=c.memoizedState;if(d!==null){var f=d.dehydrated;f!==null&&Bi(f)}}}break;case 19:case 17:case 21:case 22:case 23:case 25:break;default:throw Error(L(163))}it||t.flags&512&&Cu(t)}catch(m){De(t,t.return,m)}}if(t===e){H=null;break}if(n=t.sibling,n!==null){n.return=t.return,H=n;break}H=t.return}}function Cf(e){for(;H!==null;){var t=H;if(t===e){H=null;break}var n=t.sibling;if(n!==null){n.return=t.return,H=n;break}H=t.return}}function Ef(e){for(;H!==null;){var t=H;try{switch(t.tag){case 0:case 11:case 15:var n=t.return;try{fs(4,t)}catch(s){De(t,n,s)}break;case 1:var r=t.stateNode;if(typeof r.componentDidMount=="function"){var i=t.return;try{r.componentDidMount()}catch(s){De(t,i,s)}}var o=t.return;try{Cu(t)}catch(s){De(t,o,s)}break;case 5:var a=t.return;try{Cu(t)}catch(s){De(t,a,s)}}}catch(s){De(t,t.return,s)}if(t===e){H=null;break}var l=t.sibling;if(l!==null){l.return=t.return,H=l;break}H=t.return}}var Ey=Math.ceil,Fa=Cn.ReactCurrentDispatcher,Ic=Cn.ReactCurrentOwner,Dt=Cn.ReactCurrentBatchConfig,he=0,Ye=null,Ne=null,Je=0,wt=0,Ar=er(0),Be=0,to=null,pr=0,ps=0,Dc=0,Li=null,pt=null,Lc=0,Xr=1/0,fn=null,Va=!1,_u=null,Kn=null,Lo=!1,$n=null,Na=0,Ai=0,Pu=null,oa=-1,aa=0;function ut(){return he&6?ze():oa!==-1?oa:oa=ze()}function Gn(e){return e.mode&1?he&2&&Je!==0?Je&-Je:uy.transition!==null?(aa===0&&(aa=Fh()),aa):(e=ye,e!==0||(e=window.event,e=e===void 0?16:Hh(e.type)),e):1}function Qt(e,t,n,r){if(50<Ai)throw Ai=0,Pu=null,Error(L(185));lo(e,n,r),(!(he&2)||e!==Ye)&&(e===Ye&&(!(he&2)&&(ps|=n),Be===4&&Vn(e,Je)),xt(e,r),n===1&&he===0&&!(t.mode&1)&&(Xr=ze()+500,us&&tr()))}function xt(e,t){var n=e.callbackNode;u0(e,t);var r=ka(e,e===Ye?Je:0);if(r===0)n!==null&&Dd(n),e.callbackNode=null,e.callbackPriority=0;else if(t=r&-r,e.callbackPriority!==t){if(n!=null&&Dd(n),t===1)e.tag===0?ly(Of.bind(null,e)):cm(Of.bind(null,e)),iy(function(){!(he&6)&&tr()}),n=null;else{switch(Vh(r)){case 1:n=sc;break;case 4:n=Ah;break;case 16:n=Sa;break;case 536870912:n=zh;break;default:n=Sa}n=ug(n,ng.bind(null,e))}e.callbackPriority=t,e.callbackNode=n}}function ng(e,t){if(oa=-1,aa=0,he&6)throw Error(L(327));var n=e.callbackNode;if(Wr()&&e.callbackNode!==n)return null;var r=ka(e,e===Ye?Je:0);if(r===0)return null;if(r&30||r&e.expiredLanes||t)t=$a(e,r);else{t=r;var i=he;he|=2;var o=ig();(Ye!==e||Je!==t)&&(fn=null,Xr=ze()+500,lr(e,t));do try{Py();break}catch(l){rg(e,l)}while(!0);wc(),Fa.current=o,he=i,Ne!==null?t=0:(Ye=null,Je=0,t=Be)}if(t!==0){if(t===2&&(i=nu(e),i!==0&&(r=i,t=Tu(e,i))),t===1)throw n=to,lr(e,0),Vn(e,r),xt(e,ze()),n;if(t===6)Vn(e,r);else{if(i=e.current.alternate,!(r&30)&&!Oy(i)&&(t=$a(e,r),t===2&&(o=nu(e),o!==0&&(r=o,t=Tu(e,o))),t===1))throw n=to,lr(e,0),Vn(e,r),xt(e,ze()),n;switch(e.finishedWork=i,e.finishedLanes=r,t){case 0:case 1:throw Error(L(345));case 2:rr(e,pt,fn);break;case 3:if(Vn(e,r),(r&130023424)===r&&(t=Lc+500-ze(),10<t)){if(ka(e,0)!==0)break;if(i=e.suspendedLanes,(i&r)!==r){ut(),e.pingedLanes|=e.suspendedLanes&i;break}e.timeoutHandle=cu(rr.bind(null,e,pt,fn),t);break}rr(e,pt,fn);break;case 4:if(Vn(e,r),(r&4194240)===r)break;for(t=e.eventTimes,i=-1;0<r;){var a=31-Ht(r);o=1<<a,a=t[a],a>i&&(i=a),r&=~o}if(r=i,r=ze()-r,r=(120>r?120:480>r?480:1080>r?1080:1920>r?1920:3e3>r?3e3:4320>r?4320:1960*Ey(r/1960))-r,10<r){e.timeoutHandle=cu(rr.bind(null,e,pt,fn),r);break}rr(e,pt,fn);break;case 5:rr(e,pt,fn);break;default:throw Error(L(329))}}}return xt(e,ze()),e.callbackNode===n?ng.bind(null,e):null}function Tu(e,t){var n=Li;return e.current.memoizedState.isDehydrated&&(lr(e,t).flags|=256),e=$a(e,t),e!==2&&(t=pt,pt=n,t!==null&&Mu(t)),e}function Mu(e){pt===null?pt=e:pt.push.apply(pt,e)}function Oy(e){for(var t=e;;){if(t.flags&16384){var n=t.updateQueue;if(n!==null&&(n=n.stores,n!==null))for(var r=0;r<n.length;r++){var i=n[r],o=i.getSnapshot;i=i.value;try{if(!Kt(o(),i))return!1}catch{return!1}}}if(n=t.child,t.subtreeFlags&16384&&n!==null)n.return=t,t=n;else{if(t===e)break;for(;t.sibling===null;){if(t.return===null||t.return===e)return!0;t=t.return}t.sibling.return=t.return,t=t.sibling}}return!0}function Vn(e,t){for(t&=~Dc,t&=~ps,e.suspendedLanes|=t,e.pingedLanes&=~t,e=e.expirationTimes;0<t;){var n=31-Ht(t),r=1<<n;e[n]=-1,t&=~r}}function Of(e){if(he&6)throw Error(L(327));Wr();var t=ka(e,0);if(!(t&1))return xt(e,ze()),null;var n=$a(e,t);if(e.tag!==0&&n===2){var r=nu(e);r!==0&&(t=r,n=Tu(e,r))}if(n===1)throw n=to,lr(e,0),Vn(e,t),xt(e,ze()),n;if(n===6)throw Error(L(345));return e.finishedWork=e.current.alternate,e.finishedLanes=t,rr(e,pt,fn),xt(e,ze()),null}function Ac(e,t){var n=he;he|=1;try{return e(t)}finally{he=n,he===0&&(Xr=ze()+500,us&&tr())}}function hr(e){$n!==null&&$n.tag===0&&!(he&6)&&Wr();var t=he;he|=1;var n=Dt.transition,r=ye;try{if(Dt.transition=null,ye=1,e)return e()}finally{ye=r,Dt.transition=n,he=t,!(he&6)&&tr()}}function zc(){wt=Ar.current,Pe(Ar)}function lr(e,t){e.finishedWork=null,e.finishedLanes=0;var n=e.timeoutHandle;if(n!==-1&&(e.timeoutHandle=-1,ry(n)),Ne!==null)for(n=Ne.return;n!==null;){var r=n;switch(xc(r),r.tag){case 1:r=r.type.childContextTypes,r!=null&&_a();break;case 3:Gr(),Pe(mt),Pe(ot),Ec();break;case 5:Cc(r);break;case 4:Gr();break;case 13:Pe(Me);break;case 19:Pe(Me);break;case 10:bc(r.type._context);break;case 22:case 23:zc()}n=n.return}if(Ye=e,Ne=e=qn(e.current,null),Je=wt=t,Be=0,to=null,Dc=ps=pr=0,pt=Li=null,or!==null){for(t=0;t<or.length;t++)if(n=or[t],r=n.interleaved,r!==null){n.interleaved=null;var i=r.next,o=n.pending;if(o!==null){var a=o.next;o.next=i,r.next=a}n.pending=r}or=null}return e}function rg(e,t){do{var n=Ne;try{if(wc(),na.current=za,Aa){for(var r=Re.memoizedState;r!==null;){var i=r.queue;i!==null&&(i.pending=null),r=r.next}Aa=!1}if(fr=0,Qe=We=Re=null,Ii=!1,Ji=0,Ic.current=null,n===null||n.return===null){Be=1,to=t,Ne=null;break}e:{var o=e,a=n.return,l=n,s=t;if(t=Je,l.flags|=32768,s!==null&&typeof s=="object"&&typeof s.then=="function"){var c=s,d=l,f=d.tag;if(!(d.mode&1)&&(f===0||f===11||f===15)){var m=d.alternate;m?(d.updateQueue=m.updateQueue,d.memoizedState=m.memoizedState,d.lanes=m.lanes):(d.updateQueue=null,d.memoizedState=null)}var y=hf(a);if(y!==null){y.flags&=-257,mf(y,a,l,o,t),y.mode&1&&pf(o,c,t),t=y,s=c;var g=t.updateQueue;if(g===null){var x=new Set;x.add(s),t.updateQueue=x}else g.add(s);break e}else{if(!(t&1)){pf(o,c,t),Fc();break e}s=Error(L(426))}}else if(Te&&l.mode&1){var w=hf(a);if(w!==null){!(w.flags&65536)&&(w.flags|=256),mf(w,a,l,o,t),vc(qr(s,l));break e}}o=s=qr(s,l),Be!==4&&(Be=2),Li===null?Li=[o]:Li.push(o),o=a;do{switch(o.tag){case 3:o.flags|=65536,t&=-t,o.lanes|=t;var p=Nm(o,s,t);af(o,p);break e;case 1:l=s;var h=o.type,v=o.stateNode;if(!(o.flags&128)&&(typeof h.getDerivedStateFromError=="function"||v!==null&&typeof v.componentDidCatch=="function"&&(Kn===null||!Kn.has(v)))){o.flags|=65536,t&=-t,o.lanes|=t;var b=$m(o,l,t);af(o,b);break e}}o=o.return}while(o!==null)}ag(n)}catch(k){t=k,Ne===n&&n!==null&&(Ne=n=n.return);continue}break}while(!0)}function ig(){var e=Fa.current;return Fa.current=za,e===null?za:e}function Fc(){(Be===0||Be===3||Be===2)&&(Be=4),Ye===null||!(pr&268435455)&&!(ps&268435455)||Vn(Ye,Je)}function $a(e,t){var n=he;he|=2;var r=ig();(Ye!==e||Je!==t)&&(fn=null,lr(e,t));do try{_y();break}catch(i){rg(e,i)}while(!0);if(wc(),he=n,Fa.current=r,Ne!==null)throw Error(L(261));return Ye=null,Je=0,Be}function _y(){for(;Ne!==null;)og(Ne)}function Py(){for(;Ne!==null&&!e0();)og(Ne)}function og(e){var t=lg(e.alternate,e,wt);e.memoizedProps=e.pendingProps,t===null?ag(e):Ne=t,Ic.current=null}function ag(e){var t=e;do{var n=t.alternate;if(e=t.return,t.flags&32768){if(n=Sy(n,t),n!==null){n.flags&=32767,Ne=n;return}if(e!==null)e.flags|=32768,e.subtreeFlags=0,e.deletions=null;else{Be=6,Ne=null;return}}else if(n=by(n,t,wt),n!==null){Ne=n;return}if(t=t.sibling,t!==null){Ne=t;return}Ne=t=e}while(t!==null);Be===0&&(Be=5)}function rr(e,t,n){var r=ye,i=Dt.transition;try{Dt.transition=null,ye=1,Ty(e,t,n,r)}finally{Dt.transition=i,ye=r}return null}function Ty(e,t,n,r){do Wr();while($n!==null);if(he&6)throw Error(L(327));n=e.finishedWork;var i=e.finishedLanes;if(n===null)return null;if(e.finishedWork=null,e.finishedLanes=0,n===e.current)throw Error(L(177));e.callbackNode=null,e.callbackPriority=0;var o=n.lanes|n.childLanes;if(c0(e,o),e===Ye&&(Ne=Ye=null,Je=0),!(n.subtreeFlags&2064)&&!(n.flags&2064)||Lo||(Lo=!0,ug(Sa,function(){return Wr(),null})),o=(n.flags&15990)!==0,n.subtreeFlags&15990||o){o=Dt.transition,Dt.transition=null;var a=ye;ye=1;var l=he;he|=4,Ic.current=null,jy(e,n),eg(n,e),q0(lu),ja=!!su,lu=su=null,e.current=n,Cy(n),t0(),he=l,ye=a,Dt.transition=o}else e.current=n;if(Lo&&(Lo=!1,$n=e,Na=i),o=e.pendingLanes,o===0&&(Kn=null),i0(n.stateNode),xt(e,ze()),t!==null)for(r=e.onRecoverableError,n=0;n<t.length;n++)i=t[n],r(i.value,{componentStack:i.stack,digest:i.digest});if(Va)throw Va=!1,e=_u,_u=null,e;return Na&1&&e.tag!==0&&Wr(),o=e.pendingLanes,o&1?e===Pu?Ai++:(Ai=0,Pu=e):Ai=0,tr(),null}function Wr(){if($n!==null){var e=Vh(Na),t=Dt.transition,n=ye;try{if(Dt.transition=null,ye=16>e?16:e,$n===null)var r=!1;else{if(e=$n,$n=null,Na=0,he&6)throw Error(L(331));var i=he;for(he|=4,H=e.current;H!==null;){var o=H,a=o.child;if(H.flags&16){var l=o.deletions;if(l!==null){for(var s=0;s<l.length;s++){var c=l[s];for(H=c;H!==null;){var d=H;switch(d.tag){case 0:case 11:case 15:Di(8,d,o)}var f=d.child;if(f!==null)f.return=d,H=f;else for(;H!==null;){d=H;var m=d.sibling,y=d.return;if(Xm(d),d===c){H=null;break}if(m!==null){m.return=y,H=m;break}H=y}}}var g=o.alternate;if(g!==null){var x=g.child;if(x!==null){g.child=null;do{var w=x.sibling;x.sibling=null,x=w}while(x!==null)}}H=o}}if(o.subtreeFlags&2064&&a!==null)a.return=o,H=a;else e:for(;H!==null;){if(o=H,o.flags&2048)switch(o.tag){case 0:case 11:case 15:Di(9,o,o.return)}var p=o.sibling;if(p!==null){p.return=o.return,H=p;break e}H=o.return}}var h=e.current;for(H=h;H!==null;){a=H;var v=a.child;if(a.subtreeFlags&2064&&v!==null)v.return=a,H=v;else e:for(a=h;H!==null;){if(l=H,l.flags&2048)try{switch(l.tag){case 0:case 11:case 15:fs(9,l)}}catch(k){De(l,l.return,k)}if(l===a){H=null;break e}var b=l.sibling;if(b!==null){b.return=l.return,H=b;break e}H=l.return}}if(he=i,tr(),on&&typeof on.onPostCommitFiberRoot=="function")try{on.onPostCommitFiberRoot(is,e)}catch{}r=!0}return r}finally{ye=n,Dt.transition=t}}return!1}function _f(e,t,n){t=qr(n,t),t=Nm(e,t,1),e=Yn(e,t,1),t=ut(),e!==null&&(lo(e,1,t),xt(e,t))}function De(e,t,n){if(e.tag===3)_f(e,e,n);else for(;t!==null;){if(t.tag===3){_f(t,e,n);break}else if(t.tag===1){var r=t.stateNode;if(typeof t.type.getDerivedStateFromError=="function"||typeof r.componentDidCatch=="function"&&(Kn===null||!Kn.has(r))){e=qr(n,e),e=$m(t,e,1),t=Yn(t,e,1),e=ut(),t!==null&&(lo(t,1,e),xt(t,e));break}}t=t.return}}function My(e,t,n){var r=e.pingCache;r!==null&&r.delete(t),t=ut(),e.pingedLanes|=e.suspendedLanes&n,Ye===e&&(Je&n)===n&&(Be===4||Be===3&&(Je&130023424)===Je&&500>ze()-Lc?lr(e,0):Dc|=n),xt(e,t)}function sg(e,t){t===0&&(e.mode&1?(t=Co,Co<<=1,!(Co&130023424)&&(Co=4194304)):t=1);var n=ut();e=kn(e,t),e!==null&&(lo(e,t,n),xt(e,n))}function Ry(e){var t=e.memoizedState,n=0;t!==null&&(n=t.retryLane),sg(e,n)}function Iy(e,t){var n=0;switch(e.tag){case 13:var r=e.stateNode,i=e.memoizedState;i!==null&&(n=i.retryLane);break;case 19:r=e.stateNode;break;default:throw Error(L(314))}r!==null&&r.delete(t),sg(e,n)}var lg;lg=function(e,t,n){if(e!==null)if(e.memoizedProps!==t.pendingProps||mt.current)ht=!0;else{if(!(e.lanes&n)&&!(t.flags&128))return ht=!1,wy(e,t,n);ht=!!(e.flags&131072)}else ht=!1,Te&&t.flags&1048576&&dm(t,Ma,t.index);switch(t.lanes=0,t.tag){case 2:var r=t.type;ia(e,t),e=t.pendingProps;var i=Qr(t,ot.current);Ur(t,n),i=_c(null,t,r,e,i,n);var o=Pc();return t.flags|=1,typeof i=="object"&&i!==null&&typeof i.render=="function"&&i.$$typeof===void 0?(t.tag=1,t.memoizedState=null,t.updateQueue=null,gt(r)?(o=!0,Pa(t)):o=!1,t.memoizedState=i.state!==null&&i.state!==void 0?i.state:null,kc(t),i.updater=cs,t.stateNode=i,i._reactInternals=t,xu(t,r,e,n),t=wu(null,t,r,!0,o,n)):(t.tag=0,Te&&o&&gc(t),st(null,t,i,n),t=t.child),t;case 16:r=t.elementType;e:{switch(ia(e,t),e=t.pendingProps,i=r._init,r=i(r._payload),t.type=r,i=t.tag=Ly(r),e=Vt(r,e),i){case 0:t=yu(null,t,r,e,n);break e;case 1:t=vf(null,t,r,e,n);break e;case 11:t=gf(null,t,r,e,n);break e;case 14:t=xf(null,t,r,Vt(r.type,e),n);break e}throw Error(L(306,r,""))}return t;case 0:return r=t.type,i=t.pendingProps,i=t.elementType===r?i:Vt(r,i),yu(e,t,r,i,n);case 1:return r=t.type,i=t.pendingProps,i=t.elementType===r?i:Vt(r,i),vf(e,t,r,i,n);case 3:e:{if(Hm(t),e===null)throw Error(L(387));r=t.pendingProps,o=t.memoizedState,i=o.element,mm(e,t),Da(t,r,null,n);var a=t.memoizedState;if(r=a.element,o.isDehydrated)if(o={element:r,isDehydrated:!1,cache:a.cache,pendingSuspenseBoundaries:a.pendingSuspenseBoundaries,transitions:a.transitions},t.updateQueue.baseState=o,t.memoizedState=o,t.flags&256){i=qr(Error(L(423)),t),t=yf(e,t,r,n,i);break e}else if(r!==i){i=qr(Error(L(424)),t),t=yf(e,t,r,n,i);break e}else for(bt=Qn(t.stateNode.containerInfo.firstChild),St=t,Te=!0,Wt=null,n=ym(t,null,r,n),t.child=n;n;)n.flags=n.flags&-3|4096,n=n.sibling;else{if(Yr(),r===i){t=jn(e,t,n);break e}st(e,t,r,n)}t=t.child}return t;case 5:return wm(t),e===null&&hu(t),r=t.type,i=t.pendingProps,o=e!==null?e.memoizedProps:null,a=i.children,uu(r,i)?a=null:o!==null&&uu(r,o)&&(t.flags|=32),Bm(e,t),st(e,t,a,n),t.child;case 6:return e===null&&hu(t),null;case 13:return Qm(e,t,n);case 4:return jc(t,t.stateNode.containerInfo),r=t.pendingProps,e===null?t.child=Kr(t,null,r,n):st(e,t,r,n),t.child;case 11:return r=t.type,i=t.pendingProps,i=t.elementType===r?i:Vt(r,i),gf(e,t,r,i,n);case 7:return st(e,t,t.pendingProps,n),t.child;case 8:return st(e,t,t.pendingProps.children,n),t.child;case 12:return st(e,t,t.pendingProps.children,n),t.child;case 10:e:{if(r=t.type._context,i=t.pendingProps,o=t.memoizedProps,a=i.value,Ee(Ra,r._currentValue),r._currentValue=a,o!==null)if(Kt(o.value,a)){if(o.children===i.children&&!mt.current){t=jn(e,t,n);break e}}else for(o=t.child,o!==null&&(o.return=t);o!==null;){var l=o.dependencies;if(l!==null){a=o.child;for(var s=l.firstContext;s!==null;){if(s.context===r){if(o.tag===1){s=vn(-1,n&-n),s.tag=2;var c=o.updateQueue;if(c!==null){c=c.shared;var d=c.pending;d===null?s.next=s:(s.next=d.next,d.next=s),c.pending=s}}o.lanes|=n,s=o.alternate,s!==null&&(s.lanes|=n),mu(o.return,n,t),l.lanes|=n;break}s=s.next}}else if(o.tag===10)a=o.type===t.type?null:o.child;else if(o.tag===18){if(a=o.return,a===null)throw Error(L(341));a.lanes|=n,l=a.alternate,l!==null&&(l.lanes|=n),mu(a,n,t),a=o.sibling}else a=o.child;if(a!==null)a.return=o;else for(a=o;a!==null;){if(a===t){a=null;break}if(o=a.sibling,o!==null){o.return=a.return,a=o;break}a=a.return}o=a}st(e,t,i.children,n),t=t.child}return t;case 9:return i=t.type,r=t.pendingProps.children,Ur(t,n),i=At(i),r=r(i),t.flags|=1,st(e,t,r,n),t.child;case 14:return r=t.type,i=Vt(r,t.pendingProps),i=Vt(r.type,i),xf(e,t,r,i,n);case 15:return Um(e,t,t.type,t.pendingProps,n);case 17:return r=t.type,i=t.pendingProps,i=t.elementType===r?i:Vt(r,i),ia(e,t),t.tag=1,gt(r)?(e=!0,Pa(t)):e=!1,Ur(t,n),xm(t,r,i),xu(t,r,i,n),wu(null,t,r,!0,e,n);case 19:return Ym(e,t,n);case 22:return Wm(e,t,n)}throw Error(L(156,t.tag))};function ug(e,t){return Lh(e,t)}function Dy(e,t,n,r){this.tag=e,this.key=n,this.sibling=this.child=this.return=this.stateNode=this.type=this.elementType=null,this.index=0,this.ref=null,this.pendingProps=t,this.dependencies=this.memoizedState=this.updateQueue=this.memoizedProps=null,this.mode=r,this.subtreeFlags=this.flags=0,this.deletions=null,this.childLanes=this.lanes=0,this.alternate=null}function It(e,t,n,r){return new Dy(e,t,n,r)}function Vc(e){return e=e.prototype,!(!e||!e.isReactComponent)}function Ly(e){if(typeof e=="function")return Vc(e)?1:0;if(e!=null){if(e=e.$$typeof,e===ic)return 11;if(e===oc)return 14}return 2}function qn(e,t){var n=e.alternate;return n===null?(n=It(e.tag,t,e.key,e.mode),n.elementType=e.elementType,n.type=e.type,n.stateNode=e.stateNode,n.alternate=e,e.alternate=n):(n.pendingProps=t,n.type=e.type,n.flags=0,n.subtreeFlags=0,n.deletions=null),n.flags=e.flags&14680064,n.childLanes=e.childLanes,n.lanes=e.lanes,n.child=e.child,n.memoizedProps=e.memoizedProps,n.memoizedState=e.memoizedState,n.updateQueue=e.updateQueue,t=e.dependencies,n.dependencies=t===null?null:{lanes:t.lanes,firstContext:t.firstContext},n.sibling=e.sibling,n.index=e.index,n.ref=e.ref,n}function sa(e,t,n,r,i,o){var a=2;if(r=e,typeof e=="function")Vc(e)&&(a=1);else if(typeof e=="string")a=5;else e:switch(e){case Er:return ur(n.children,i,o,t);case rc:a=8,i|=8;break;case $l:return e=It(12,n,t,i|2),e.elementType=$l,e.lanes=o,e;case Ul:return e=It(13,n,t,i),e.elementType=Ul,e.lanes=o,e;case Wl:return e=It(19,n,t,i),e.elementType=Wl,e.lanes=o,e;case vh:return hs(n,i,o,t);default:if(typeof e=="object"&&e!==null)switch(e.$$typeof){case gh:a=10;break e;case xh:a=9;break e;case ic:a=11;break e;case oc:a=14;break e;case An:a=16,r=null;break e}throw Error(L(130,e==null?e:typeof e,""))}return t=It(a,n,t,i),t.elementType=e,t.type=r,t.lanes=o,t}function ur(e,t,n,r){return e=It(7,e,r,t),e.lanes=n,e}function hs(e,t,n,r){return e=It(22,e,r,t),e.elementType=vh,e.lanes=n,e.stateNode={isHidden:!1},e}function fl(e,t,n){return e=It(6,e,null,t),e.lanes=n,e}function pl(e,t,n){return t=It(4,e.children!==null?e.children:[],e.key,t),t.lanes=n,t.stateNode={containerInfo:e.containerInfo,pendingChildren:null,implementation:e.implementation},t}function Ay(e,t,n,r,i){this.tag=t,this.containerInfo=e,this.finishedWork=this.pingCache=this.current=this.pendingChildren=null,this.timeoutHandle=-1,this.callbackNode=this.pendingContext=this.context=null,this.callbackPriority=0,this.eventTimes=Ys(0),this.expirationTimes=Ys(-1),this.entangledLanes=this.finishedLanes=this.mutableReadLanes=this.expiredLanes=this.pingedLanes=this.suspendedLanes=this.pendingLanes=0,this.entanglements=Ys(0),this.identifierPrefix=r,this.onRecoverableError=i,this.mutableSourceEagerHydrationData=null}function Nc(e,t,n,r,i,o,a,l,s){return e=new Ay(e,t,n,l,s),t===1?(t=1,o===!0&&(t|=8)):t=0,o=It(3,null,null,t),e.current=o,o.stateNode=e,o.memoizedState={element:r,isDehydrated:n,cache:null,transitions:null,pendingSuspenseBoundaries:null},kc(o),e}function zy(e,t,n){var r=3<arguments.length&&arguments[3]!==void 0?arguments[3]:null;return{$$typeof:Cr,key:r==null?null:""+r,children:e,containerInfo:t,implementation:n}}function cg(e){if(!e)return Jn;e=e._reactInternals;e:{if(xr(e)!==e||e.tag!==1)throw Error(L(170));var t=e;do{switch(t.tag){case 3:t=t.stateNode.context;break e;case 1:if(gt(t.type)){t=t.stateNode.__reactInternalMemoizedMergedChildContext;break e}}t=t.return}while(t!==null);throw Error(L(171))}if(e.tag===1){var n=e.type;if(gt(n))return um(e,n,t)}return t}function dg(e,t,n,r,i,o,a,l,s){return e=Nc(n,r,!0,e,i,o,a,l,s),e.context=cg(null),n=e.current,r=ut(),i=Gn(n),o=vn(r,i),o.callback=t??null,Yn(n,o,i),e.current.lanes=i,lo(e,i,r),xt(e,r),e}function ms(e,t,n,r){var i=t.current,o=ut(),a=Gn(i);return n=cg(n),t.context===null?t.context=n:t.pendingContext=n,t=vn(o,a),t.payload={element:e},r=r===void 0?null:r,r!==null&&(t.callback=r),e=Yn(i,t,a),e!==null&&(Qt(e,i,a,o),ta(e,i,a)),a}function Ua(e){if(e=e.current,!e.child)return null;switch(e.child.tag){case 5:return e.child.stateNode;default:return e.child.stateNode}}function Pf(e,t){if(e=e.memoizedState,e!==null&&e.dehydrated!==null){var n=e.retryLane;e.retryLane=n!==0&&n<t?n:t}}function $c(e,t){Pf(e,t),(e=e.alternate)&&Pf(e,t)}function Fy(){return null}var fg=typeof reportError=="function"?reportError:function(e){console.error(e)};function Uc(e){this._internalRoot=e}gs.prototype.render=Uc.prototype.render=function(e){var t=this._internalRoot;if(t===null)throw Error(L(409));ms(e,t,null,null)};gs.prototype.unmount=Uc.prototype.unmount=function(){var e=this._internalRoot;if(e!==null){this._internalRoot=null;var t=e.containerInfo;hr(function(){ms(null,e,null,null)}),t[Sn]=null}};function gs(e){this._internalRoot=e}gs.prototype.unstable_scheduleHydration=function(e){if(e){var t=Uh();e={blockedOn:null,target:e,priority:t};for(var n=0;n<Fn.length&&t!==0&&t<Fn[n].priority;n++);Fn.splice(n,0,e),n===0&&Bh(e)}};function Wc(e){return!(!e||e.nodeType!==1&&e.nodeType!==9&&e.nodeType!==11)}function xs(e){return!(!e||e.nodeType!==1&&e.nodeType!==9&&e.nodeType!==11&&(e.nodeType!==8||e.nodeValue!==" react-mount-point-unstable "))}function Tf(){}function Vy(e,t,n,r,i){if(i){if(typeof r=="function"){var o=r;r=function(){var c=Ua(a);o.call(c)}}var a=dg(t,r,e,0,null,!1,!1,"",Tf);return e._reactRootContainer=a,e[Sn]=a.current,Yi(e.nodeType===8?e.parentNode:e),hr(),a}for(;i=e.lastChild;)e.removeChild(i);if(typeof r=="function"){var l=r;r=function(){var c=Ua(s);l.call(c)}}var s=Nc(e,0,!1,null,null,!1,!1,"",Tf);return e._reactRootContainer=s,e[Sn]=s.current,Yi(e.nodeType===8?e.parentNode:e),hr(function(){ms(t,s,n,r)}),s}function vs(e,t,n,r,i){var o=n._reactRootContainer;if(o){var a=o;if(typeof i=="function"){var l=i;i=function(){var s=Ua(a);l.call(s)}}ms(t,a,e,i)}else a=Vy(n,t,e,i,r);return Ua(a)}Nh=function(e){switch(e.tag){case 3:var t=e.stateNode;if(t.current.memoizedState.isDehydrated){var n=ji(t.pendingLanes);n!==0&&(lc(t,n|1),xt(t,ze()),!(he&6)&&(Xr=ze()+500,tr()))}break;case 13:hr(function(){var r=kn(e,1);if(r!==null){var i=ut();Qt(r,e,1,i)}}),$c(e,1)}};uc=function(e){if(e.tag===13){var t=kn(e,134217728);if(t!==null){var n=ut();Qt(t,e,134217728,n)}$c(e,134217728)}};$h=function(e){if(e.tag===13){var t=Gn(e),n=kn(e,t);if(n!==null){var r=ut();Qt(n,e,t,r)}$c(e,t)}};Uh=function(){return ye};Wh=function(e,t){var n=ye;try{return ye=e,t()}finally{ye=n}};Zl=function(e,t,n){switch(t){case"input":if(Ql(e,n),t=n.name,n.type==="radio"&&t!=null){for(n=e;n.parentNode;)n=n.parentNode;for(n=n.querySelectorAll("input[name="+JSON.stringify(""+t)+'][type="radio"]'),t=0;t<n.length;t++){var r=n[t];if(r!==e&&r.form===e.form){var i=ls(r);if(!i)throw Error(L(90));wh(r),Ql(r,i)}}}break;case"textarea":Sh(e,n);break;case"select":t=n.value,t!=null&&Fr(e,!!n.multiple,t,!1)}};Ph=Ac;Th=hr;var Ny={usingClientEntryPoint:!1,Events:[co,Tr,ls,Oh,_h,Ac]},fi={findFiberByHostInstance:ir,bundleType:0,version:"18.2.0",rendererPackageName:"react-dom"},$y={bundleType:fi.bundleType,version:fi.version,rendererPackageName:fi.rendererPackageName,rendererConfig:fi.rendererConfig,overrideHookState:null,overrideHookStateDeletePath:null,overrideHookStateRenamePath:null,overrideProps:null,overridePropsDeletePath:null,overridePropsRenamePath:null,setErrorHandler:null,setSuspenseHandler:null,scheduleUpdate:null,currentDispatcherRef:Cn.ReactCurrentDispatcher,findHostInstanceByFiber:function(e){return e=Ih(e),e===null?null:e.stateNode},findFiberByHostInstance:fi.findFiberByHostInstance||Fy,findHostInstancesForRefresh:null,scheduleRefresh:null,scheduleRoot:null,setRefreshHandler:null,getCurrentFiber:null,reconcilerVersion:"18.2.0-next-9e3b772b8-20220608"};if(typeof __REACT_DEVTOOLS_GLOBAL_HOOK__<"u"){var Ao=__REACT_DEVTOOLS_GLOBAL_HOOK__;if(!Ao.isDisabled&&Ao.supportsFiber)try{is=Ao.inject($y),on=Ao}catch{}}Et.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED=Ny;Et.createPortal=function(e,t){var n=2<arguments.length&&arguments[2]!==void 0?arguments[2]:null;if(!Wc(t))throw Error(L(200));return zy(e,t,null,n)};Et.createRoot=function(e,t){if(!Wc(e))throw Error(L(299));var n=!1,r="",i=fg;return t!=null&&(t.unstable_strictMode===!0&&(n=!0),t.identifierPrefix!==void 0&&(r=t.identifierPrefix),t.onRecoverableError!==void 0&&(i=t.onRecoverableError)),t=Nc(e,1,!1,null,null,n,!1,r,i),e[Sn]=t.current,Yi(e.nodeType===8?e.parentNode:e),new Uc(t)};Et.findDOMNode=function(e){if(e==null)return null;if(e.nodeType===1)return e;var t=e._reactInternals;if(t===void 0)throw typeof e.render=="function"?Error(L(188)):(e=Object.keys(e).join(","),Error(L(268,e)));return e=Ih(t),e=e===null?null:e.stateNode,e};Et.flushSync=function(e){return hr(e)};Et.hydrate=function(e,t,n){if(!xs(t))throw Error(L(200));return vs(null,e,t,!0,n)};Et.hydrateRoot=function(e,t,n){if(!Wc(e))throw Error(L(405));var r=n!=null&&n.hydratedSources||null,i=!1,o="",a=fg;if(n!=null&&(n.unstable_strictMode===!0&&(i=!0),n.identifierPrefix!==void 0&&(o=n.identifierPrefix),n.onRecoverableError!==void 0&&(a=n.onRecoverableError)),t=dg(t,null,e,1,n??null,i,!1,o,a),e[Sn]=t.current,Yi(e),r)for(e=0;e<r.length;e++)n=r[e],i=n._getVersion,i=i(n._source),t.mutableSourceEagerHydrationData==null?t.mutableSourceEagerHydrationData=[n,i]:t.mutableSourceEagerHydrationData.push(n,i);return new gs(t)};Et.render=function(e,t,n){if(!xs(t))throw Error(L(200));return vs(null,e,t,!1,n)};Et.unmountComponentAtNode=function(e){if(!xs(e))throw Error(L(40));return e._reactRootContainer?(hr(function(){vs(null,null,e,!1,function(){e._reactRootContainer=null,e[Sn]=null})}),!0):!1};Et.unstable_batchedUpdates=Ac;Et.unstable_renderSubtreeIntoContainer=function(e,t,n,r){if(!xs(n))throw Error(L(200));if(e==null||e._reactInternals===void 0)throw Error(L(38));return vs(e,t,n,!1,r)};Et.version="18.2.0-next-9e3b772b8-20220608";function pg(){if(!(typeof __REACT_DEVTOOLS_GLOBAL_HOOK__>"u"||typeof __REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE!="function"))try{__REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE(pg)}catch(e){console.error(e)}}pg(),dh.exports=Et;var po=dh.exports;const Uy=ao(po);var Mf=po;Vl.createRoot=Mf.createRoot,Vl.hydrateRoot=Mf.hydrateRoot;var hg={exports:{}};(function(e,t){(function(r,i){e.exports=i(M)})(xv,n=>(()=>{var r={"./node_modules/css-mediaquery/index.js":(l,s)=>{s.match=g,s.parse=x;var c=/(?:(only|not)?\s*([^\s\(\)]+)(?:\s*and)?\s*)?(.+)?/i,d=/\(\s*([^\s\:\)]+)\s*(?:\:\s*([^\s\)]+))?\s*\)/,f=/^(?:(min|max)-)?(.+)/,m=/(em|rem|px|cm|mm|in|pt|pc)?$/,y=/(dpi|dpcm|dppx)?$/;function g(v,b){return x(v).some(function(k){var _=k.inverse,E=k.type==="all"||b.type===k.type;if(E&&_||!(E||_))return!1;var P=k.expressions.every(function(T){var I=T.feature,W=T.modifier,A=T.value,D=b[I];if(!D)return!1;switch(I){case"orientation":case"scan":return D.toLowerCase()===A.toLowerCase();case"width":case"height":case"device-width":case"device-height":A=h(A),D=h(D);break;case"resolution":A=p(A),D=p(D);break;case"aspect-ratio":case"device-aspect-ratio":case"device-pixel-ratio":A=w(A),D=w(D);break;case"grid":case"color":case"color-index":case"monochrome":A=parseInt(A,10)||1,D=parseInt(D,10)||0;break}switch(W){case"min":return D>=A;case"max":return D<=A;default:return D===A}});return P&&!_||!P&&_})}function x(v){return v.split(",").map(function(b){b=b.trim();var k=b.match(c),_=k[1],E=k[2],P=k[3]||"",T={};return T.inverse=!!_&&_.toLowerCase()==="not",T.type=E?E.toLowerCase():"all",P=P.match(/\([^\)]+\)/g)||[],T.expressions=P.map(function(I){var W=I.match(d),A=W[1].toLowerCase().match(f);return{modifier:A[1],feature:A[2],value:W[2]}}),T})}function w(v){var b=Number(v),k;return b||(k=v.match(/^(\d+)\s*\/\s*(\d+)$/),b=k[1]/k[2]),b}function p(v){var b=parseFloat(v),k=String(v).match(y)[1];switch(k){case"dpcm":return b/2.54;case"dppx":return b*96;default:return b}}function h(v){var b=parseFloat(v),k=String(v).match(m)[1];switch(k){case"em":return b*16;case"rem":return b*16;case"cm":return b*96/2.54;case"mm":return b*96/2.54/10;case"in":return b*96;case"pt":return b*72;case"pc":return b*72/12;default:return b}}},"./node_modules/hyphenate-style-name/index.js":(l,s,c)=>{c.r(s),c.d(s,{default:()=>x});var d=/[A-Z]/g,f=/^ms-/,m={};function y(w){return"-"+w.toLowerCase()}function g(w){if(m.hasOwnProperty(w))return m[w];var p=w.replace(d,y);return m[w]=f.test(p)?"-"+p:p}const x=g},"./node_modules/matchmediaquery/index.js":(l,s,c)=>{var d=c("./node_modules/css-mediaquery/index.js").match,f=typeof window<"u"?window.matchMedia:null;function m(g,x,w){var p=this;if(f&&!w){var h=f.call(window,g);this.matches=h.matches,this.media=h.media,h.addListener(k)}else this.matches=d(g,x),this.media=g;this.addListener=v,this.removeListener=b,this.dispose=_;function v(E){h&&h.addListener(E)}function b(E){h&&h.removeListener(E)}function k(E){p.matches=E.matches,p.media=E.media}function _(){h&&h.removeListener(k)}}function y(g,x,w){return new m(g,x,w)}l.exports=y},"./node_modules/object-assign/index.js":l=>{/*
object-assign
(c) Sindre Sorhus
@license MIT
*/var s=Object.getOwnPropertySymbols,c=Object.prototype.hasOwnProperty,d=Object.prototype.propertyIsEnumerable;function f(y){if(y==null)throw new TypeError("Object.assign cannot be called with null or undefined");return Object(y)}function m(){try{if(!Object.assign)return!1;var y=new String("abc");if(y[5]="de",Object.getOwnPropertyNames(y)[0]==="5")return!1;for(var g={},x=0;x<10;x++)g["_"+String.fromCharCode(x)]=x;var w=Object.getOwnPropertyNames(g).map(function(h){return g[h]});if(w.join("")!=="0123456789")return!1;var p={};return"abcdefghijklmnopqrst".split("").forEach(function(h){p[h]=h}),Object.keys(Object.assign({},p)).join("")==="abcdefghijklmnopqrst"}catch{return!1}}l.exports=m()?Object.assign:function(y,g){for(var x,w=f(y),p,h=1;h<arguments.length;h++){x=Object(arguments[h]);for(var v in x)c.call(x,v)&&(w[v]=x[v]);if(s){p=s(x);for(var b=0;b<p.length;b++)d.call(x,p[b])&&(w[p[b]]=x[p[b]])}}return w}},"./node_modules/prop-types/checkPropTypes.js":(l,s,c)=>{var d=function(){};{var f=c("./node_modules/prop-types/lib/ReactPropTypesSecret.js"),m={},y=c("./node_modules/prop-types/lib/has.js");d=function(x){var w="Warning: "+x;typeof console<"u"&&console.error(w);try{throw new Error(w)}catch{}}}function g(x,w,p,h,v){for(var b in x)if(y(x,b)){var k;try{if(typeof x[b]!="function"){var _=Error((h||"React class")+": "+p+" type `"+b+"` is invalid; it must be a function, usually from the `prop-types` package, but received `"+typeof x[b]+"`.This often happens because of typos such as `PropTypes.function` instead of `PropTypes.func`.");throw _.name="Invariant Violation",_}k=x[b](w,b,h,p,null,f)}catch(P){k=P}if(k&&!(k instanceof Error)&&d((h||"React class")+": type specification of "+p+" `"+b+"` is invalid; the type checker function must return `null` or an `Error` but returned a "+typeof k+". You may have forgotten to pass an argument to the type checker creator (arrayOf, instanceOf, objectOf, oneOf, oneOfType, and shape all require an argument)."),k instanceof Error&&!(k.message in m)){m[k.message]=!0;var E=v?v():"";d("Failed "+p+" type: "+k.message+(E??""))}}}g.resetWarningCache=function(){m={}},l.exports=g},"./node_modules/prop-types/factoryWithTypeCheckers.js":(l,s,c)=>{var d=c("./node_modules/react-is/index.js"),f=c("./node_modules/object-assign/index.js"),m=c("./node_modules/prop-types/lib/ReactPropTypesSecret.js"),y=c("./node_modules/prop-types/lib/has.js"),g=c("./node_modules/prop-types/checkPropTypes.js"),x=function(){};x=function(p){var h="Warning: "+p;typeof console<"u"&&console.error(h);try{throw new Error(h)}catch{}};function w(){return null}l.exports=function(p,h){var v=typeof Symbol=="function"&&Symbol.iterator,b="@@iterator";function k(z){var B=z&&(v&&z[v]||z[b]);if(typeof B=="function")return B}var _="<<anonymous>>",E={array:W("array"),bigint:W("bigint"),bool:W("boolean"),func:W("function"),number:W("number"),object:W("object"),string:W("string"),symbol:W("symbol"),any:A(),arrayOf:D,element:q(),elementType:ee(),instanceOf:te,node:Y(),objectOf:F,oneOf:ve,oneOfType:Q,shape:re,exact:Oe};function P(z,B){return z===B?z!==0||1/z===1/B:z!==z&&B!==B}function T(z,B){this.message=z,this.data=B&&typeof B=="object"?B:{},this.stack=""}T.prototype=Error.prototype;function I(z){var B={},ie=0;function oe(le,se,ue,pe,S,O,C){if(pe=pe||_,O=O||ue,C!==m){if(h){var $=new Error("Calling PropTypes validators directly is not supported by the `prop-types` package. Use `PropTypes.checkPropTypes()` to call them. Read more at http://fb.me/use-check-prop-types");throw $.name="Invariant Violation",$}else if(typeof console<"u"){var N=pe+":"+ue;!B[N]&&ie<3&&(x("You are manually calling a React.PropTypes validation function for the `"+O+"` prop on `"+pe+"`. This is deprecated and will throw in the standalone `prop-types` package. You may be seeing this warning due to a third-party PropTypes library. See https://fb.me/react-warning-dont-call-proptypes for details."),B[N]=!0,ie++)}}return se[ue]==null?le?se[ue]===null?new T("The "+S+" `"+O+"` is marked as required "+("in `"+pe+"`, but its value is `null`.")):new T("The "+S+" `"+O+"` is marked as required in "+("`"+pe+"`, but its value is `undefined`.")):null:z(se,ue,pe,S,O)}var ne=oe.bind(null,!1);return ne.isRequired=oe.bind(null,!0),ne}function W(z){function B(ie,oe,ne,le,se,ue){var pe=ie[oe],S=me(pe);if(S!==z){var O=Se(pe);return new T("Invalid "+le+" `"+se+"` of type "+("`"+O+"` supplied to `"+ne+"`, expected ")+("`"+z+"`."),{expectedType:z})}return null}return I(B)}function A(){return I(w)}function D(z){function B(ie,oe,ne,le,se){if(typeof z!="function")return new T("Property `"+se+"` of component `"+ne+"` has invalid PropType notation inside arrayOf.");var ue=ie[oe];if(!Array.isArray(ue)){var pe=me(ue);return new T("Invalid "+le+" `"+se+"` of type "+("`"+pe+"` supplied to `"+ne+"`, expected an array."))}for(var S=0;S<ue.length;S++){var O=z(ue,S,ne,le,se+"["+S+"]",m);if(O instanceof Error)return O}return null}return I(B)}function q(){function z(B,ie,oe,ne,le){var se=B[ie];if(!p(se)){var ue=me(se);return new T("Invalid "+ne+" `"+le+"` of type "+("`"+ue+"` supplied to `"+oe+"`, expected a single ReactElement."))}return null}return I(z)}function ee(){function z(B,ie,oe,ne,le){var se=B[ie];if(!d.isValidElementType(se)){var ue=me(se);return new T("Invalid "+ne+" `"+le+"` of type "+("`"+ue+"` supplied to `"+oe+"`, expected a single ReactElement type."))}return null}return I(z)}function te(z){function B(ie,oe,ne,le,se){if(!(ie[oe]instanceof z)){var ue=z.name||_,pe=yt(ie[oe]);return new T("Invalid "+le+" `"+se+"` of type "+("`"+pe+"` supplied to `"+ne+"`, expected ")+("instance of `"+ue+"`."))}return null}return I(B)}function ve(z){if(!Array.isArray(z))return arguments.length>1?x("Invalid arguments supplied to oneOf, expected an array, got "+arguments.length+" arguments. A common mistake is to write oneOf(x, y, z) instead of oneOf([x, y, z])."):x("Invalid argument supplied to oneOf, expected an array."),w;function B(ie,oe,ne,le,se){for(var ue=ie[oe],pe=0;pe<z.length;pe++)if(P(ue,z[pe]))return null;var S=JSON.stringify(z,function(C,$){var N=Se($);return N==="symbol"?String($):$});return new T("Invalid "+le+" `"+se+"` of value `"+String(ue)+"` "+("supplied to `"+ne+"`, expected one of "+S+"."))}return I(B)}function F(z){function B(ie,oe,ne,le,se){if(typeof z!="function")return new T("Property `"+se+"` of component `"+ne+"` has invalid PropType notation inside objectOf.");var ue=ie[oe],pe=me(ue);if(pe!=="object")return new T("Invalid "+le+" `"+se+"` of type "+("`"+pe+"` supplied to `"+ne+"`, expected an object."));for(var S in ue)if(y(ue,S)){var O=z(ue,S,ne,le,se+"."+S,m);if(O instanceof Error)return O}return null}return I(B)}function Q(z){if(!Array.isArray(z))return x("Invalid argument supplied to oneOfType, expected an instance of array."),w;for(var B=0;B<z.length;B++){var ie=z[B];if(typeof ie!="function")return x("Invalid argument supplied to oneOfType. Expected an array of check functions, but received "+et(ie)+" at index "+B+"."),w}function oe(ne,le,se,ue,pe){for(var S=[],O=0;O<z.length;O++){var C=z[O],$=C(ne,le,se,ue,pe,m);if($==null)return null;$.data&&y($.data,"expectedType")&&S.push($.data.expectedType)}var N=S.length>0?", expected one of type ["+S.join(", ")+"]":"";return new T("Invalid "+ue+" `"+pe+"` supplied to "+("`"+se+"`"+N+"."))}return I(oe)}function Y(){function z(B,ie,oe,ne,le){return be(B[ie])?null:new T("Invalid "+ne+" `"+le+"` supplied to "+("`"+oe+"`, expected a ReactNode."))}return I(z)}function de(z,B,ie,oe,ne){return new T((z||"React class")+": "+B+" type `"+ie+"."+oe+"` is invalid; it must be a function, usually from the `prop-types` package, but received `"+ne+"`.")}function re(z){function B(ie,oe,ne,le,se){var ue=ie[oe],pe=me(ue);if(pe!=="object")return new T("Invalid "+le+" `"+se+"` of type `"+pe+"` "+("supplied to `"+ne+"`, expected `object`."));for(var S in z){var O=z[S];if(typeof O!="function")return de(ne,le,se,S,Se(O));var C=O(ue,S,ne,le,se+"."+S,m);if(C)return C}return null}return I(B)}function Oe(z){function B(ie,oe,ne,le,se){var ue=ie[oe],pe=me(ue);if(pe!=="object")return new T("Invalid "+le+" `"+se+"` of type `"+pe+"` "+("supplied to `"+ne+"`, expected `object`."));var S=f({},ie[oe],z);for(var O in S){var C=z[O];if(y(z,O)&&typeof C!="function")return de(ne,le,se,O,Se(C));if(!C)return new T("Invalid "+le+" `"+se+"` key `"+O+"` supplied to `"+ne+"`.\nBad object: "+JSON.stringify(ie[oe],null,"  ")+`
Valid keys: `+JSON.stringify(Object.keys(z),null,"  "));var $=C(ue,O,ne,le,se+"."+O,m);if($)return $}return null}return I(B)}function be(z){switch(typeof z){case"number":case"string":case"undefined":return!0;case"boolean":return!z;case"object":if(Array.isArray(z))return z.every(be);if(z===null||p(z))return!0;var B=k(z);if(B){var ie=B.call(z),oe;if(B!==z.entries){for(;!(oe=ie.next()).done;)if(!be(oe.value))return!1}else for(;!(oe=ie.next()).done;){var ne=oe.value;if(ne&&!be(ne[1]))return!1}}else return!1;return!0;default:return!1}}function Ue(z,B){return z==="symbol"?!0:B?B["@@toStringTag"]==="Symbol"||typeof Symbol=="function"&&B instanceof Symbol:!1}function me(z){var B=typeof z;return Array.isArray(z)?"array":z instanceof RegExp?"object":Ue(B,z)?"symbol":B}function Se(z){if(typeof z>"u"||z===null)return""+z;var B=me(z);if(B==="object"){if(z instanceof Date)return"date";if(z instanceof RegExp)return"regexp"}return B}function et(z){var B=Se(z);switch(B){case"array":case"object":return"an "+B;case"boolean":case"date":case"regexp":return"a "+B;default:return B}}function yt(z){return!z.constructor||!z.constructor.name?_:z.constructor.name}return E.checkPropTypes=g,E.resetWarningCache=g.resetWarningCache,E.PropTypes=E,E}},"./node_modules/prop-types/index.js":(l,s,c)=>{{var d=c("./node_modules/react-is/index.js"),f=!0;l.exports=c("./node_modules/prop-types/factoryWithTypeCheckers.js")(d.isElement,f)}},"./node_modules/prop-types/lib/ReactPropTypesSecret.js":l=>{var s="SECRET_DO_NOT_PASS_THIS_OR_YOU_WILL_BE_FIRED";l.exports=s},"./node_modules/prop-types/lib/has.js":l=>{l.exports=Function.call.bind(Object.prototype.hasOwnProperty)},"./node_modules/react-is/cjs/react-is.development.js":(l,s)=>{/** @license React v16.13.1
 * react-is.development.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */(function(){var c=typeof Symbol=="function"&&Symbol.for,d=c?Symbol.for("react.element"):60103,f=c?Symbol.for("react.portal"):60106,m=c?Symbol.for("react.fragment"):60107,y=c?Symbol.for("react.strict_mode"):60108,g=c?Symbol.for("react.profiler"):60114,x=c?Symbol.for("react.provider"):60109,w=c?Symbol.for("react.context"):60110,p=c?Symbol.for("react.async_mode"):60111,h=c?Symbol.for("react.concurrent_mode"):60111,v=c?Symbol.for("react.forward_ref"):60112,b=c?Symbol.for("react.suspense"):60113,k=c?Symbol.for("react.suspense_list"):60120,_=c?Symbol.for("react.memo"):60115,E=c?Symbol.for("react.lazy"):60116,P=c?Symbol.for("react.block"):60121,T=c?Symbol.for("react.fundamental"):60117,I=c?Symbol.for("react.responder"):60118,W=c?Symbol.for("react.scope"):60119;function A(C){return typeof C=="string"||typeof C=="function"||C===m||C===h||C===g||C===y||C===b||C===k||typeof C=="object"&&C!==null&&(C.$$typeof===E||C.$$typeof===_||C.$$typeof===x||C.$$typeof===w||C.$$typeof===v||C.$$typeof===T||C.$$typeof===I||C.$$typeof===W||C.$$typeof===P)}function D(C){if(typeof C=="object"&&C!==null){var $=C.$$typeof;switch($){case d:var N=C.type;switch(N){case p:case h:case m:case g:case y:case b:return N;default:var V=N&&N.$$typeof;switch(V){case w:case v:case E:case _:case x:return V;default:return $}}case f:return $}}}var q=p,ee=h,te=w,ve=x,F=d,Q=v,Y=m,de=E,re=_,Oe=f,be=g,Ue=y,me=b,Se=!1;function et(C){return Se||(Se=!0,console.warn("The ReactIs.isAsyncMode() alias has been deprecated, and will be removed in React 17+. Update your code to use ReactIs.isConcurrentMode() instead. It has the exact same API.")),yt(C)||D(C)===p}function yt(C){return D(C)===h}function z(C){return D(C)===w}function B(C){return D(C)===x}function ie(C){return typeof C=="object"&&C!==null&&C.$$typeof===d}function oe(C){return D(C)===v}function ne(C){return D(C)===m}function le(C){return D(C)===E}function se(C){return D(C)===_}function ue(C){return D(C)===f}function pe(C){return D(C)===g}function S(C){return D(C)===y}function O(C){return D(C)===b}s.AsyncMode=q,s.ConcurrentMode=ee,s.ContextConsumer=te,s.ContextProvider=ve,s.Element=F,s.ForwardRef=Q,s.Fragment=Y,s.Lazy=de,s.Memo=re,s.Portal=Oe,s.Profiler=be,s.StrictMode=Ue,s.Suspense=me,s.isAsyncMode=et,s.isConcurrentMode=yt,s.isContextConsumer=z,s.isContextProvider=B,s.isElement=ie,s.isForwardRef=oe,s.isFragment=ne,s.isLazy=le,s.isMemo=se,s.isPortal=ue,s.isProfiler=pe,s.isStrictMode=S,s.isSuspense=O,s.isValidElementType=A,s.typeOf=D})()},"./node_modules/react-is/index.js":(l,s,c)=>{l.exports=c("./node_modules/react-is/cjs/react-is.development.js")},"./node_modules/shallow-equal/dist/index.esm.js":(l,s,c)=>{c.r(s),c.d(s,{shallowEqualArrays:()=>f,shallowEqualObjects:()=>d});function d(m,y){if(m===y)return!0;if(!m||!y)return!1;var g=Object.keys(m),x=Object.keys(y),w=g.length;if(x.length!==w)return!1;for(var p=0;p<w;p++){var h=g[p];if(m[h]!==y[h]||!Object.prototype.hasOwnProperty.call(y,h))return!1}return!0}function f(m,y){if(m===y)return!0;if(!m||!y)return!1;var g=m.length;if(y.length!==g)return!1;for(var x=0;x<g;x++)if(m[x]!==y[x])return!1;return!0}},"./src/Component.ts":function(l,s,c){var d=this&&this.__rest||function(g,x){var w={};for(var p in g)Object.prototype.hasOwnProperty.call(g,p)&&x.indexOf(p)<0&&(w[p]=g[p]);if(g!=null&&typeof Object.getOwnPropertySymbols=="function")for(var h=0,p=Object.getOwnPropertySymbols(g);h<p.length;h++)x.indexOf(p[h])<0&&Object.prototype.propertyIsEnumerable.call(g,p[h])&&(w[p[h]]=g[p[h]]);return w},f=this&&this.__importDefault||function(g){return g&&g.__esModule?g:{default:g}};Object.defineProperty(s,"__esModule",{value:!0});var m=f(c("./src/useMediaQuery.ts")),y=function(g){var x=g.children,w=g.device,p=g.onChange,h=d(g,["children","device","onChange"]),v=(0,m.default)(h,w,p);return typeof x=="function"?x(v):v?x:null};s.default=y},"./src/Context.ts":(l,s,c)=>{Object.defineProperty(s,"__esModule",{value:!0});var d=c("react"),f=(0,d.createContext)(void 0);s.default=f},"./src/index.ts":function(l,s,c){var d=this&&this.__importDefault||function(x){return x&&x.__esModule?x:{default:x}};Object.defineProperty(s,"__esModule",{value:!0}),s.Context=s.toQuery=s.useMediaQuery=s.default=void 0;var f=d(c("./src/useMediaQuery.ts"));s.useMediaQuery=f.default;var m=d(c("./src/Component.ts"));s.default=m.default;var y=d(c("./src/toQuery.ts"));s.toQuery=y.default;var g=d(c("./src/Context.ts"));s.Context=g.default},"./src/mediaQuery.ts":function(l,s,c){var d=this&&this.__assign||function(){return d=Object.assign||function(b){for(var k,_=1,E=arguments.length;_<E;_++){k=arguments[_];for(var P in k)Object.prototype.hasOwnProperty.call(k,P)&&(b[P]=k[P])}return b},d.apply(this,arguments)},f=this&&this.__rest||function(b,k){var _={};for(var E in b)Object.prototype.hasOwnProperty.call(b,E)&&k.indexOf(E)<0&&(_[E]=b[E]);if(b!=null&&typeof Object.getOwnPropertySymbols=="function")for(var P=0,E=Object.getOwnPropertySymbols(b);P<E.length;P++)k.indexOf(E[P])<0&&Object.prototype.propertyIsEnumerable.call(b,E[P])&&(_[E[P]]=b[E[P]]);return _},m=this&&this.__importDefault||function(b){return b&&b.__esModule?b:{default:b}};Object.defineProperty(s,"__esModule",{value:!0});var y=m(c("./node_modules/prop-types/index.js")),g=y.default.oneOfType([y.default.string,y.default.number]),x={all:y.default.bool,grid:y.default.bool,aural:y.default.bool,braille:y.default.bool,handheld:y.default.bool,print:y.default.bool,projection:y.default.bool,screen:y.default.bool,tty:y.default.bool,tv:y.default.bool,embossed:y.default.bool},w={orientation:y.default.oneOf(["portrait","landscape"]),scan:y.default.oneOf(["progressive","interlace"]),aspectRatio:y.default.string,deviceAspectRatio:y.default.string,height:g,deviceHeight:g,width:g,deviceWidth:g,color:y.default.bool,colorIndex:y.default.bool,monochrome:y.default.bool,resolution:g,type:Object.keys(x)};w.type;var p=f(w,["type"]),h=d({minAspectRatio:y.default.string,maxAspectRatio:y.default.string,minDeviceAspectRatio:y.default.string,maxDeviceAspectRatio:y.default.string,minHeight:g,maxHeight:g,minDeviceHeight:g,maxDeviceHeight:g,minWidth:g,maxWidth:g,minDeviceWidth:g,maxDeviceWidth:g,minColor:y.default.number,maxColor:y.default.number,minColorIndex:y.default.number,maxColorIndex:y.default.number,minMonochrome:y.default.number,maxMonochrome:y.default.number,minResolution:g,maxResolution:g},p),v=d(d({},x),h);s.default={all:v,types:x,matchers:w,features:h}},"./src/toQuery.ts":function(l,s,c){var d=this&&this.__importDefault||function(p){return p&&p.__esModule?p:{default:p}};Object.defineProperty(s,"__esModule",{value:!0});var f=d(c("./node_modules/hyphenate-style-name/index.js")),m=d(c("./src/mediaQuery.ts")),y=function(p){return"not ".concat(p)},g=function(p,h){var v=(0,f.default)(p);return typeof h=="number"&&(h="".concat(h,"px")),h===!0?v:h===!1?y(v):"(".concat(v,": ").concat(h,")")},x=function(p){return p.join(" and ")},w=function(p){var h=[];return Object.keys(m.default.all).forEach(function(v){var b=p[v];b!=null&&h.push(g(v,b))}),x(h)};s.default=w},"./src/useMediaQuery.ts":function(l,s,c){var d=this&&this.__importDefault||function(T){return T&&T.__esModule?T:{default:T}};Object.defineProperty(s,"__esModule",{value:!0});var f=c("react"),m=d(c("./node_modules/matchmediaquery/index.js")),y=d(c("./node_modules/hyphenate-style-name/index.js")),g=c("./node_modules/shallow-equal/dist/index.esm.js"),x=d(c("./src/toQuery.ts")),w=d(c("./src/Context.ts")),p=function(T){return T.query||(0,x.default)(T)},h=function(T){if(T){var I=Object.keys(T);return I.reduce(function(W,A){return W[(0,y.default)(A)]=T[A],W},{})}},v=function(){var T=(0,f.useRef)(!1);return(0,f.useEffect)(function(){T.current=!0},[]),T.current},b=function(T){var I=(0,f.useContext)(w.default),W=function(){return h(T)||h(I)},A=(0,f.useState)(W),D=A[0],q=A[1];return(0,f.useEffect)(function(){var ee=W();(0,g.shallowEqualObjects)(D,ee)||q(ee)},[T,I]),D},k=function(T){var I=function(){return p(T)},W=(0,f.useState)(I),A=W[0],D=W[1];return(0,f.useEffect)(function(){var q=I();A!==q&&D(q)},[T]),A},_=function(T,I){var W=function(){return(0,m.default)(T,I||{},!!I)},A=(0,f.useState)(W),D=A[0],q=A[1],ee=v();return(0,f.useEffect)(function(){if(ee){var te=W();return q(te),function(){te&&te.dispose()}}},[T,I]),D},E=function(T){var I=(0,f.useState)(T.matches),W=I[0],A=I[1];return(0,f.useEffect)(function(){var D=function(q){A(q.matches)};return T.addListener(D),A(T.matches),function(){T.removeListener(D)}},[T]),W},P=function(T,I,W){var A=b(I),D=k(T);if(!D)throw new Error("Invalid or missing MediaQuery!");var q=_(D,A),ee=E(q),te=v();return(0,f.useEffect)(function(){te&&W&&W(ee)},[ee]),(0,f.useEffect)(function(){return function(){q&&q.dispose()}},[]),ee};s.default=P},react:l=>{l.exports=n}},i={};function o(l){var s=i[l];if(s!==void 0)return s.exports;var c=i[l]={exports:{}};return r[l].call(c.exports,c,c.exports,o),c.exports}o.d=(l,s)=>{for(var c in s)o.o(s,c)&&!o.o(l,c)&&Object.defineProperty(l,c,{enumerable:!0,get:s[c]})},o.o=(l,s)=>Object.prototype.hasOwnProperty.call(l,s),o.r=l=>{typeof Symbol<"u"&&Symbol.toStringTag&&Object.defineProperty(l,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(l,"__esModule",{value:!0})};var a=o("./src/index.ts");return a})())})(hg);var xn=hg.exports;const ae=ao(xn);function X(){return X=Object.assign?Object.assign.bind():function(e){for(var t=1;t<arguments.length;t++){var n=arguments[t];for(var r in n)Object.prototype.hasOwnProperty.call(n,r)&&(e[r]=n[r])}return e},X.apply(this,arguments)}function mg(e){var t=Object.create(null);return function(n){return t[n]===void 0&&(t[n]=e(n)),t[n]}}var Wy=/^((children|dangerouslySetInnerHTML|key|ref|autoFocus|defaultValue|defaultChecked|innerHTML|suppressContentEditableWarning|suppressHydrationWarning|valueLink|abbr|accept|acceptCharset|accessKey|action|allow|allowUserMedia|allowPaymentRequest|allowFullScreen|allowTransparency|alt|async|autoComplete|autoPlay|capture|cellPadding|cellSpacing|challenge|charSet|checked|cite|classID|className|cols|colSpan|content|contentEditable|contextMenu|controls|controlsList|coords|crossOrigin|data|dateTime|decoding|default|defer|dir|disabled|disablePictureInPicture|download|draggable|encType|enterKeyHint|form|formAction|formEncType|formMethod|formNoValidate|formTarget|frameBorder|headers|height|hidden|high|href|hrefLang|htmlFor|httpEquiv|id|inputMode|integrity|is|keyParams|keyType|kind|label|lang|list|loading|loop|low|marginHeight|marginWidth|max|maxLength|media|mediaGroup|method|min|minLength|multiple|muted|name|nonce|noValidate|open|optimum|pattern|placeholder|playsInline|poster|preload|profile|radioGroup|readOnly|referrerPolicy|rel|required|reversed|role|rows|rowSpan|sandbox|scope|scoped|scrolling|seamless|selected|shape|size|sizes|slot|span|spellCheck|src|srcDoc|srcLang|srcSet|start|step|style|summary|tabIndex|target|title|translate|type|useMap|value|width|wmode|wrap|about|datatype|inlist|prefix|property|resource|typeof|vocab|autoCapitalize|autoCorrect|autoSave|color|incremental|fallback|inert|itemProp|itemScope|itemType|itemID|itemRef|on|option|results|security|unselectable|accentHeight|accumulate|additive|alignmentBaseline|allowReorder|alphabetic|amplitude|arabicForm|ascent|attributeName|attributeType|autoReverse|azimuth|baseFrequency|baselineShift|baseProfile|bbox|begin|bias|by|calcMode|capHeight|clip|clipPathUnits|clipPath|clipRule|colorInterpolation|colorInterpolationFilters|colorProfile|colorRendering|contentScriptType|contentStyleType|cursor|cx|cy|d|decelerate|descent|diffuseConstant|direction|display|divisor|dominantBaseline|dur|dx|dy|edgeMode|elevation|enableBackground|end|exponent|externalResourcesRequired|fill|fillOpacity|fillRule|filter|filterRes|filterUnits|floodColor|floodOpacity|focusable|fontFamily|fontSize|fontSizeAdjust|fontStretch|fontStyle|fontVariant|fontWeight|format|from|fr|fx|fy|g1|g2|glyphName|glyphOrientationHorizontal|glyphOrientationVertical|glyphRef|gradientTransform|gradientUnits|hanging|horizAdvX|horizOriginX|ideographic|imageRendering|in|in2|intercept|k|k1|k2|k3|k4|kernelMatrix|kernelUnitLength|kerning|keyPoints|keySplines|keyTimes|lengthAdjust|letterSpacing|lightingColor|limitingConeAngle|local|markerEnd|markerMid|markerStart|markerHeight|markerUnits|markerWidth|mask|maskContentUnits|maskUnits|mathematical|mode|numOctaves|offset|opacity|operator|order|orient|orientation|origin|overflow|overlinePosition|overlineThickness|panose1|paintOrder|pathLength|patternContentUnits|patternTransform|patternUnits|pointerEvents|points|pointsAtX|pointsAtY|pointsAtZ|preserveAlpha|preserveAspectRatio|primitiveUnits|r|radius|refX|refY|renderingIntent|repeatCount|repeatDur|requiredExtensions|requiredFeatures|restart|result|rotate|rx|ry|scale|seed|shapeRendering|slope|spacing|specularConstant|specularExponent|speed|spreadMethod|startOffset|stdDeviation|stemh|stemv|stitchTiles|stopColor|stopOpacity|strikethroughPosition|strikethroughThickness|string|stroke|strokeDasharray|strokeDashoffset|strokeLinecap|strokeLinejoin|strokeMiterlimit|strokeOpacity|strokeWidth|surfaceScale|systemLanguage|tableValues|targetX|targetY|textAnchor|textDecoration|textRendering|textLength|to|transform|u1|u2|underlinePosition|underlineThickness|unicode|unicodeBidi|unicodeRange|unitsPerEm|vAlphabetic|vHanging|vIdeographic|vMathematical|values|vectorEffect|version|vertAdvY|vertOriginX|vertOriginY|viewBox|viewTarget|visibility|widths|wordSpacing|writingMode|x|xHeight|x1|x2|xChannelSelector|xlinkActuate|xlinkArcrole|xlinkHref|xlinkRole|xlinkShow|xlinkTitle|xlinkType|xmlBase|xmlns|xmlnsXlink|xmlLang|xmlSpace|y|y1|y2|yChannelSelector|z|zoomAndPan|for|class|autofocus)|(([Dd][Aa][Tt][Aa]|[Aa][Rr][Ii][Aa]|x)-.*))$/,By=mg(function(e){return Wy.test(e)||e.charCodeAt(0)===111&&e.charCodeAt(1)===110&&e.charCodeAt(2)<91});function Hy(e){if(e.sheet)return e.sheet;for(var t=0;t<document.styleSheets.length;t++)if(document.styleSheets[t].ownerNode===e)return document.styleSheets[t]}function Qy(e){var t=document.createElement("style");return t.setAttribute("data-emotion",e.key),e.nonce!==void 0&&t.setAttribute("nonce",e.nonce),t.appendChild(document.createTextNode("")),t.setAttribute("data-s",""),t}var Yy=function(){function e(n){var r=this;this._insertTag=function(i){var o;r.tags.length===0?r.insertionPoint?o=r.insertionPoint.nextSibling:r.prepend?o=r.container.firstChild:o=r.before:o=r.tags[r.tags.length-1].nextSibling,r.container.insertBefore(i,o),r.tags.push(i)},this.isSpeedy=n.speedy===void 0?!0:n.speedy,this.tags=[],this.ctr=0,this.nonce=n.nonce,this.key=n.key,this.container=n.container,this.prepend=n.prepend,this.insertionPoint=n.insertionPoint,this.before=null}var t=e.prototype;return t.hydrate=function(r){r.forEach(this._insertTag)},t.insert=function(r){this.ctr%(this.isSpeedy?65e3:1)===0&&this._insertTag(Qy(this));var i=this.tags[this.tags.length-1];if(this.isSpeedy){var o=Hy(i);try{o.insertRule(r,o.cssRules.length)}catch{}}else i.appendChild(document.createTextNode(r));this.ctr++},t.flush=function(){this.tags.forEach(function(r){return r.parentNode&&r.parentNode.removeChild(r)}),this.tags=[],this.ctr=0},e}(),rt="-ms-",Wa="-moz-",ge="-webkit-",gg="comm",Bc="rule",Hc="decl",Ky="@import",xg="@keyframes",Gy="@layer",qy=Math.abs,ys=String.fromCharCode,Xy=Object.assign;function Jy(e,t){return Xe(e,0)^45?(((t<<2^Xe(e,0))<<2^Xe(e,1))<<2^Xe(e,2))<<2^Xe(e,3):0}function vg(e){return e.trim()}function Zy(e,t){return(e=t.exec(e))?e[0]:e}function xe(e,t,n){return e.replace(t,n)}function Ru(e,t){return e.indexOf(t)}function Xe(e,t){return e.charCodeAt(t)|0}function no(e,t,n){return e.slice(t,n)}function Jt(e){return e.length}function Qc(e){return e.length}function zo(e,t){return t.push(e),e}function e1(e,t){return e.map(t).join("")}var ws=1,Jr=1,yg=0,vt=0,Ve=0,ri="";function bs(e,t,n,r,i,o,a){return{value:e,root:t,parent:n,type:r,props:i,children:o,line:ws,column:Jr,length:a,return:""}}function pi(e,t){return Xy(bs("",null,null,"",null,null,0),e,{length:-e.length},t)}function t1(){return Ve}function n1(){return Ve=vt>0?Xe(ri,--vt):0,Jr--,Ve===10&&(Jr=1,ws--),Ve}function kt(){return Ve=vt<yg?Xe(ri,vt++):0,Jr++,Ve===10&&(Jr=1,ws++),Ve}function sn(){return Xe(ri,vt)}function la(){return vt}function ho(e,t){return no(ri,e,t)}function ro(e){switch(e){case 0:case 9:case 10:case 13:case 32:return 5;case 33:case 43:case 44:case 47:case 62:case 64:case 126:case 59:case 123:case 125:return 4;case 58:return 3;case 34:case 39:case 40:case 91:return 2;case 41:case 93:return 1}return 0}function wg(e){return ws=Jr=1,yg=Jt(ri=e),vt=0,[]}function bg(e){return ri="",e}function ua(e){return vg(ho(vt-1,Iu(e===91?e+2:e===40?e+1:e)))}function r1(e){for(;(Ve=sn())&&Ve<33;)kt();return ro(e)>2||ro(Ve)>3?"":" "}function i1(e,t){for(;--t&&kt()&&!(Ve<48||Ve>102||Ve>57&&Ve<65||Ve>70&&Ve<97););return ho(e,la()+(t<6&&sn()==32&&kt()==32))}function Iu(e){for(;kt();)switch(Ve){case e:return vt;case 34:case 39:e!==34&&e!==39&&Iu(Ve);break;case 40:e===41&&Iu(e);break;case 92:kt();break}return vt}function o1(e,t){for(;kt()&&e+Ve!==57;)if(e+Ve===84&&sn()===47)break;return"/*"+ho(t,vt-1)+"*"+ys(e===47?e:kt())}function a1(e){for(;!ro(sn());)kt();return ho(e,vt)}function s1(e){return bg(ca("",null,null,null,[""],e=wg(e),0,[0],e))}function ca(e,t,n,r,i,o,a,l,s){for(var c=0,d=0,f=a,m=0,y=0,g=0,x=1,w=1,p=1,h=0,v="",b=i,k=o,_=r,E=v;w;)switch(g=h,h=kt()){case 40:if(g!=108&&Xe(E,f-1)==58){Ru(E+=xe(ua(h),"&","&\f"),"&\f")!=-1&&(p=-1);break}case 34:case 39:case 91:E+=ua(h);break;case 9:case 10:case 13:case 32:E+=r1(g);break;case 92:E+=i1(la()-1,7);continue;case 47:switch(sn()){case 42:case 47:zo(l1(o1(kt(),la()),t,n),s);break;default:E+="/"}break;case 123*x:l[c++]=Jt(E)*p;case 125*x:case 59:case 0:switch(h){case 0:case 125:w=0;case 59+d:p==-1&&(E=xe(E,/\f/g,"")),y>0&&Jt(E)-f&&zo(y>32?If(E+";",r,n,f-1):If(xe(E," ","")+";",r,n,f-2),s);break;case 59:E+=";";default:if(zo(_=Rf(E,t,n,c,d,i,l,v,b=[],k=[],f),o),h===123)if(d===0)ca(E,t,_,_,b,o,f,l,k);else switch(m===99&&Xe(E,3)===110?100:m){case 100:case 108:case 109:case 115:ca(e,_,_,r&&zo(Rf(e,_,_,0,0,i,l,v,i,b=[],f),k),i,k,f,l,r?b:k);break;default:ca(E,_,_,_,[""],k,0,l,k)}}c=d=y=0,x=p=1,v=E="",f=a;break;case 58:f=1+Jt(E),y=g;default:if(x<1){if(h==123)--x;else if(h==125&&x++==0&&n1()==125)continue}switch(E+=ys(h),h*x){case 38:p=d>0?1:(E+="\f",-1);break;case 44:l[c++]=(Jt(E)-1)*p,p=1;break;case 64:sn()===45&&(E+=ua(kt())),m=sn(),d=f=Jt(v=E+=a1(la())),h++;break;case 45:g===45&&Jt(E)==2&&(x=0)}}return o}function Rf(e,t,n,r,i,o,a,l,s,c,d){for(var f=i-1,m=i===0?o:[""],y=Qc(m),g=0,x=0,w=0;g<r;++g)for(var p=0,h=no(e,f+1,f=qy(x=a[g])),v=e;p<y;++p)(v=vg(x>0?m[p]+" "+h:xe(h,/&\f/g,m[p])))&&(s[w++]=v);return bs(e,t,n,i===0?Bc:l,s,c,d)}function l1(e,t,n){return bs(e,t,n,gg,ys(t1()),no(e,2,-2),0)}function If(e,t,n,r){return bs(e,t,n,Hc,no(e,0,r),no(e,r+1,-1),r)}function Br(e,t){for(var n="",r=Qc(e),i=0;i<r;i++)n+=t(e[i],i,e,t)||"";return n}function u1(e,t,n,r){switch(e.type){case Gy:if(e.children.length)break;case Ky:case Hc:return e.return=e.return||e.value;case gg:return"";case xg:return e.return=e.value+"{"+Br(e.children,r)+"}";case Bc:e.value=e.props.join(",")}return Jt(n=Br(e.children,r))?e.return=e.value+"{"+n+"}":""}function c1(e){var t=Qc(e);return function(n,r,i,o){for(var a="",l=0;l<t;l++)a+=e[l](n,r,i,o)||"";return a}}function d1(e){return function(t){t.root||(t=t.return)&&e(t)}}var f1=function(t,n,r){for(var i=0,o=0;i=o,o=sn(),i===38&&o===12&&(n[r]=1),!ro(o);)kt();return ho(t,vt)},p1=function(t,n){var r=-1,i=44;do switch(ro(i)){case 0:i===38&&sn()===12&&(n[r]=1),t[r]+=f1(vt-1,n,r);break;case 2:t[r]+=ua(i);break;case 4:if(i===44){t[++r]=sn()===58?"&\f":"",n[r]=t[r].length;break}default:t[r]+=ys(i)}while(i=kt());return t},h1=function(t,n){return bg(p1(wg(t),n))},Df=new WeakMap,m1=function(t){if(!(t.type!=="rule"||!t.parent||t.length<1)){for(var n=t.value,r=t.parent,i=t.column===r.column&&t.line===r.line;r.type!=="rule";)if(r=r.parent,!r)return;if(!(t.props.length===1&&n.charCodeAt(0)!==58&&!Df.get(r))&&!i){Df.set(t,!0);for(var o=[],a=h1(n,o),l=r.props,s=0,c=0;s<a.length;s++)for(var d=0;d<l.length;d++,c++)t.props[c]=o[s]?a[s].replace(/&\f/g,l[d]):l[d]+" "+a[s]}}},g1=function(t){if(t.type==="decl"){var n=t.value;n.charCodeAt(0)===108&&n.charCodeAt(2)===98&&(t.return="",t.value="")}};function Sg(e,t){switch(Jy(e,t)){case 5103:return ge+"print-"+e+e;case 5737:case 4201:case 3177:case 3433:case 1641:case 4457:case 2921:case 5572:case 6356:case 5844:case 3191:case 6645:case 3005:case 6391:case 5879:case 5623:case 6135:case 4599:case 4855:case 4215:case 6389:case 5109:case 5365:case 5621:case 3829:return ge+e+e;case 5349:case 4246:case 4810:case 6968:case 2756:return ge+e+Wa+e+rt+e+e;case 6828:case 4268:return ge+e+rt+e+e;case 6165:return ge+e+rt+"flex-"+e+e;case 5187:return ge+e+xe(e,/(\w+).+(:[^]+)/,ge+"box-$1$2"+rt+"flex-$1$2")+e;case 5443:return ge+e+rt+"flex-item-"+xe(e,/flex-|-self/,"")+e;case 4675:return ge+e+rt+"flex-line-pack"+xe(e,/align-content|flex-|-self/,"")+e;case 5548:return ge+e+rt+xe(e,"shrink","negative")+e;case 5292:return ge+e+rt+xe(e,"basis","preferred-size")+e;case 6060:return ge+"box-"+xe(e,"-grow","")+ge+e+rt+xe(e,"grow","positive")+e;case 4554:return ge+xe(e,/([^-])(transform)/g,"$1"+ge+"$2")+e;case 6187:return xe(xe(xe(e,/(zoom-|grab)/,ge+"$1"),/(image-set)/,ge+"$1"),e,"")+e;case 5495:case 3959:return xe(e,/(image-set\([^]*)/,ge+"$1$`$1");case 4968:return xe(xe(e,/(.+:)(flex-)?(.*)/,ge+"box-pack:$3"+rt+"flex-pack:$3"),/s.+-b[^;]+/,"justify")+ge+e+e;case 4095:case 3583:case 4068:case 2532:return xe(e,/(.+)-inline(.+)/,ge+"$1$2")+e;case 8116:case 7059:case 5753:case 5535:case 5445:case 5701:case 4933:case 4677:case 5533:case 5789:case 5021:case 4765:if(Jt(e)-1-t>6)switch(Xe(e,t+1)){case 109:if(Xe(e,t+4)!==45)break;case 102:return xe(e,/(.+:)(.+)-([^]+)/,"$1"+ge+"$2-$3$1"+Wa+(Xe(e,t+3)==108?"$3":"$2-$3"))+e;case 115:return~Ru(e,"stretch")?Sg(xe(e,"stretch","fill-available"),t)+e:e}break;case 4949:if(Xe(e,t+1)!==115)break;case 6444:switch(Xe(e,Jt(e)-3-(~Ru(e,"!important")&&10))){case 107:return xe(e,":",":"+ge)+e;case 101:return xe(e,/(.+:)([^;!]+)(;|!.+)?/,"$1"+ge+(Xe(e,14)===45?"inline-":"")+"box$3$1"+ge+"$2$3$1"+rt+"$2box$3")+e}break;case 5936:switch(Xe(e,t+11)){case 114:return ge+e+rt+xe(e,/[svh]\w+-[tblr]{2}/,"tb")+e;case 108:return ge+e+rt+xe(e,/[svh]\w+-[tblr]{2}/,"tb-rl")+e;case 45:return ge+e+rt+xe(e,/[svh]\w+-[tblr]{2}/,"lr")+e}return ge+e+rt+e+e}return e}var x1=function(t,n,r,i){if(t.length>-1&&!t.return)switch(t.type){case Hc:t.return=Sg(t.value,t.length);break;case xg:return Br([pi(t,{value:xe(t.value,"@","@"+ge)})],i);case Bc:if(t.length)return e1(t.props,function(o){switch(Zy(o,/(::plac\w+|:read-\w+)/)){case":read-only":case":read-write":return Br([pi(t,{props:[xe(o,/:(read-\w+)/,":"+Wa+"$1")]})],i);case"::placeholder":return Br([pi(t,{props:[xe(o,/:(plac\w+)/,":"+ge+"input-$1")]}),pi(t,{props:[xe(o,/:(plac\w+)/,":"+Wa+"$1")]}),pi(t,{props:[xe(o,/:(plac\w+)/,rt+"input-$1")]})],i)}return""})}},v1=[x1],y1=function(t){var n=t.key;if(n==="css"){var r=document.querySelectorAll("style[data-emotion]:not([data-s])");Array.prototype.forEach.call(r,function(x){var w=x.getAttribute("data-emotion");w.indexOf(" ")!==-1&&(document.head.appendChild(x),x.setAttribute("data-s",""))})}var i=t.stylisPlugins||v1,o={},a,l=[];a=t.container||document.head,Array.prototype.forEach.call(document.querySelectorAll('style[data-emotion^="'+n+' "]'),function(x){for(var w=x.getAttribute("data-emotion").split(" "),p=1;p<w.length;p++)o[w[p]]=!0;l.push(x)});var s,c=[m1,g1];{var d,f=[u1,d1(function(x){d.insert(x)})],m=c1(c.concat(i,f)),y=function(w){return Br(s1(w),m)};s=function(w,p,h,v){d=h,y(w?w+"{"+p.styles+"}":p.styles),v&&(g.inserted[p.name]=!0)}}var g={key:n,sheet:new Yy({key:n,container:a,nonce:t.nonce,speedy:t.speedy,prepend:t.prepend,insertionPoint:t.insertionPoint}),nonce:t.nonce,inserted:o,registered:{},insert:s};return g.sheet.hydrate(l),g},kg={exports:{}},we={};/** @license React v16.13.1
 * react-is.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */var Ke=typeof Symbol=="function"&&Symbol.for,Yc=Ke?Symbol.for("react.element"):60103,Kc=Ke?Symbol.for("react.portal"):60106,Ss=Ke?Symbol.for("react.fragment"):60107,ks=Ke?Symbol.for("react.strict_mode"):60108,js=Ke?Symbol.for("react.profiler"):60114,Cs=Ke?Symbol.for("react.provider"):60109,Es=Ke?Symbol.for("react.context"):60110,Gc=Ke?Symbol.for("react.async_mode"):60111,Os=Ke?Symbol.for("react.concurrent_mode"):60111,_s=Ke?Symbol.for("react.forward_ref"):60112,Ps=Ke?Symbol.for("react.suspense"):60113,w1=Ke?Symbol.for("react.suspense_list"):60120,Ts=Ke?Symbol.for("react.memo"):60115,Ms=Ke?Symbol.for("react.lazy"):60116,b1=Ke?Symbol.for("react.block"):60121,S1=Ke?Symbol.for("react.fundamental"):60117,k1=Ke?Symbol.for("react.responder"):60118,j1=Ke?Symbol.for("react.scope"):60119;function _t(e){if(typeof e=="object"&&e!==null){var t=e.$$typeof;switch(t){case Yc:switch(e=e.type,e){case Gc:case Os:case Ss:case js:case ks:case Ps:return e;default:switch(e=e&&e.$$typeof,e){case Es:case _s:case Ms:case Ts:case Cs:return e;default:return t}}case Kc:return t}}}function jg(e){return _t(e)===Os}we.AsyncMode=Gc;we.ConcurrentMode=Os;we.ContextConsumer=Es;we.ContextProvider=Cs;we.Element=Yc;we.ForwardRef=_s;we.Fragment=Ss;we.Lazy=Ms;we.Memo=Ts;we.Portal=Kc;we.Profiler=js;we.StrictMode=ks;we.Suspense=Ps;we.isAsyncMode=function(e){return jg(e)||_t(e)===Gc};we.isConcurrentMode=jg;we.isContextConsumer=function(e){return _t(e)===Es};we.isContextProvider=function(e){return _t(e)===Cs};we.isElement=function(e){return typeof e=="object"&&e!==null&&e.$$typeof===Yc};we.isForwardRef=function(e){return _t(e)===_s};we.isFragment=function(e){return _t(e)===Ss};we.isLazy=function(e){return _t(e)===Ms};we.isMemo=function(e){return _t(e)===Ts};we.isPortal=function(e){return _t(e)===Kc};we.isProfiler=function(e){return _t(e)===js};we.isStrictMode=function(e){return _t(e)===ks};we.isSuspense=function(e){return _t(e)===Ps};we.isValidElementType=function(e){return typeof e=="string"||typeof e=="function"||e===Ss||e===Os||e===js||e===ks||e===Ps||e===w1||typeof e=="object"&&e!==null&&(e.$$typeof===Ms||e.$$typeof===Ts||e.$$typeof===Cs||e.$$typeof===Es||e.$$typeof===_s||e.$$typeof===S1||e.$$typeof===k1||e.$$typeof===j1||e.$$typeof===b1)};we.typeOf=_t;kg.exports=we;var C1=kg.exports,Cg=C1,E1={$$typeof:!0,render:!0,defaultProps:!0,displayName:!0,propTypes:!0},O1={$$typeof:!0,compare:!0,defaultProps:!0,displayName:!0,propTypes:!0,type:!0},Eg={};Eg[Cg.ForwardRef]=E1;Eg[Cg.Memo]=O1;var _1=!0;function Og(e,t,n){var r="";return n.split(" ").forEach(function(i){e[i]!==void 0?t.push(e[i]+";"):r+=i+" "}),r}var qc=function(t,n,r){var i=t.key+"-"+n.name;(r===!1||_1===!1)&&t.registered[i]===void 0&&(t.registered[i]=n.styles)},_g=function(t,n,r){qc(t,n,r);var i=t.key+"-"+n.name;if(t.inserted[n.name]===void 0){var o=n;do t.insert(n===o?"."+i:"",o,t.sheet,!0),o=o.next;while(o!==void 0)}};function P1(e){for(var t=0,n,r=0,i=e.length;i>=4;++r,i-=4)n=e.charCodeAt(r)&255|(e.charCodeAt(++r)&255)<<8|(e.charCodeAt(++r)&255)<<16|(e.charCodeAt(++r)&255)<<24,n=(n&65535)*1540483477+((n>>>16)*59797<<16),n^=n>>>24,t=(n&65535)*1540483477+((n>>>16)*59797<<16)^(t&65535)*1540483477+((t>>>16)*59797<<16);switch(i){case 3:t^=(e.charCodeAt(r+2)&255)<<16;case 2:t^=(e.charCodeAt(r+1)&255)<<8;case 1:t^=e.charCodeAt(r)&255,t=(t&65535)*1540483477+((t>>>16)*59797<<16)}return t^=t>>>13,t=(t&65535)*1540483477+((t>>>16)*59797<<16),((t^t>>>15)>>>0).toString(36)}var T1={animationIterationCount:1,aspectRatio:1,borderImageOutset:1,borderImageSlice:1,borderImageWidth:1,boxFlex:1,boxFlexGroup:1,boxOrdinalGroup:1,columnCount:1,columns:1,flex:1,flexGrow:1,flexPositive:1,flexShrink:1,flexNegative:1,flexOrder:1,gridRow:1,gridRowEnd:1,gridRowSpan:1,gridRowStart:1,gridColumn:1,gridColumnEnd:1,gridColumnSpan:1,gridColumnStart:1,msGridRow:1,msGridRowSpan:1,msGridColumn:1,msGridColumnSpan:1,fontWeight:1,lineHeight:1,opacity:1,order:1,orphans:1,tabSize:1,widows:1,zIndex:1,zoom:1,WebkitLineClamp:1,fillOpacity:1,floodOpacity:1,stopOpacity:1,strokeDasharray:1,strokeDashoffset:1,strokeMiterlimit:1,strokeOpacity:1,strokeWidth:1},M1=/[A-Z]|^ms/g,R1=/_EMO_([^_]+?)_([^]*?)_EMO_/g,Pg=function(t){return t.charCodeAt(1)===45},Lf=function(t){return t!=null&&typeof t!="boolean"},hl=mg(function(e){return Pg(e)?e:e.replace(M1,"-$&").toLowerCase()}),Af=function(t,n){switch(t){case"animation":case"animationName":if(typeof n=="string")return n.replace(R1,function(r,i,o){return Zt={name:i,styles:o,next:Zt},i})}return T1[t]!==1&&!Pg(t)&&typeof n=="number"&&n!==0?n+"px":n};function io(e,t,n){if(n==null)return"";if(n.__emotion_styles!==void 0)return n;switch(typeof n){case"boolean":return"";case"object":{if(n.anim===1)return Zt={name:n.name,styles:n.styles,next:Zt},n.name;if(n.styles!==void 0){var r=n.next;if(r!==void 0)for(;r!==void 0;)Zt={name:r.name,styles:r.styles,next:Zt},r=r.next;var i=n.styles+";";return i}return I1(e,t,n)}case"function":{if(e!==void 0){var o=Zt,a=n(e);return Zt=o,io(e,t,a)}break}}if(t==null)return n;var l=t[n];return l!==void 0?l:n}function I1(e,t,n){var r="";if(Array.isArray(n))for(var i=0;i<n.length;i++)r+=io(e,t,n[i])+";";else for(var o in n){var a=n[o];if(typeof a!="object")t!=null&&t[a]!==void 0?r+=o+"{"+t[a]+"}":Lf(a)&&(r+=hl(o)+":"+Af(o,a)+";");else if(Array.isArray(a)&&typeof a[0]=="string"&&(t==null||t[a[0]]===void 0))for(var l=0;l<a.length;l++)Lf(a[l])&&(r+=hl(o)+":"+Af(o,a[l])+";");else{var s=io(e,t,a);switch(o){case"animation":case"animationName":{r+=hl(o)+":"+s+";";break}default:r+=o+"{"+s+"}"}}}return r}var zf=/label:\s*([^\s;\n{]+)\s*(;|$)/g,Zt,Xc=function(t,n,r){if(t.length===1&&typeof t[0]=="object"&&t[0]!==null&&t[0].styles!==void 0)return t[0];var i=!0,o="";Zt=void 0;var a=t[0];a==null||a.raw===void 0?(i=!1,o+=io(r,n,a)):o+=a[0];for(var l=1;l<t.length;l++)o+=io(r,n,t[l]),i&&(o+=a[l]);zf.lastIndex=0;for(var s="",c;(c=zf.exec(o))!==null;)s+="-"+c[1];var d=P1(o)+s;return{name:d,styles:o,next:Zt}},D1=function(t){return t()},L1=jd.useInsertionEffect?jd.useInsertionEffect:!1,Tg=L1||D1,Jc={}.hasOwnProperty,Mg=M.createContext(typeof HTMLElement<"u"?y1({key:"css"}):null);Mg.Provider;var Rg=function(t){return M.forwardRef(function(n,r){var i=M.useContext(Mg);return t(n,i,r)})},Ig=M.createContext({}),Du="__EMOTION_TYPE_PLEASE_DO_NOT_USE__",A1=function(t,n){var r={};for(var i in n)Jc.call(n,i)&&(r[i]=n[i]);return r[Du]=t,r},z1=function(t){var n=t.cache,r=t.serialized,i=t.isStringTag;return qc(n,r,i),Tg(function(){return _g(n,r,i)}),null},F1=Rg(function(e,t,n){var r=e.css;typeof r=="string"&&t.registered[r]!==void 0&&(r=t.registered[r]);var i=e[Du],o=[r],a="";typeof e.className=="string"?a=Og(t.registered,o,e.className):e.className!=null&&(a=e.className+" ");var l=Xc(o,void 0,M.useContext(Ig));a+=t.key+"-"+l.name;var s={};for(var c in e)Jc.call(e,c)&&c!=="css"&&c!==Du&&(s[c]=e[c]);return s.ref=n,s.className=a,M.createElement(M.Fragment,null,M.createElement(z1,{cache:t,serialized:l,isStringTag:typeof i=="string"}),M.createElement(i,s))}),V1=F1,K=function(t,n){var r=arguments;if(n==null||!Jc.call(n,"css"))return M.createElement.apply(void 0,r);var i=r.length,o=new Array(i);o[0]=V1,o[1]=A1(t,n);for(var a=2;a<i;a++)o[a]=r[a];return M.createElement.apply(null,o)};function Zc(){for(var e=arguments.length,t=new Array(e),n=0;n<e;n++)t[n]=arguments[n];return Xc(t)}var N1=function(){var t=Zc.apply(void 0,arguments),n="animation-"+t.name;return{name:n,styles:"@keyframes "+n+"{"+t.styles+"}",anim:1,toString:function(){return"_EMO_"+this.name+"_"+this.styles+"_EMO_"}}},$1=By,U1=function(t){return t!=="theme"},Ff=function(t){return typeof t=="string"&&t.charCodeAt(0)>96?$1:U1},Vf=function(t,n,r){var i;if(n){var o=n.shouldForwardProp;i=t.__emotion_forwardProp&&o?function(a){return t.__emotion_forwardProp(a)&&o(a)}:o}return typeof i!="function"&&r&&(i=t.__emotion_forwardProp),i},W1=function(t){var n=t.cache,r=t.serialized,i=t.isStringTag;return qc(n,r,i),Tg(function(){return _g(n,r,i)}),null},B1=function e(t,n){var r=t.__emotion_real===t,i=r&&t.__emotion_base||t,o,a;n!==void 0&&(o=n.label,a=n.target);var l=Vf(t,n,r),s=l||Ff(i),c=!s("as");return function(){var d=arguments,f=r&&t.__emotion_styles!==void 0?t.__emotion_styles.slice(0):[];if(o!==void 0&&f.push("label:"+o+";"),d[0]==null||d[0].raw===void 0)f.push.apply(f,d);else{f.push(d[0][0]);for(var m=d.length,y=1;y<m;y++)f.push(d[y],d[0][y])}var g=Rg(function(x,w,p){var h=c&&x.as||i,v="",b=[],k=x;if(x.theme==null){k={};for(var _ in x)k[_]=x[_];k.theme=M.useContext(Ig)}typeof x.className=="string"?v=Og(w.registered,b,x.className):x.className!=null&&(v=x.className+" ");var E=Xc(f.concat(b),w.registered,k);v+=w.key+"-"+E.name,a!==void 0&&(v+=" "+a);var P=c&&l===void 0?Ff(h):s,T={};for(var I in x)c&&I==="as"||P(I)&&(T[I]=x[I]);return T.className=v,T.ref=p,M.createElement(M.Fragment,null,M.createElement(W1,{cache:w,serialized:E,isStringTag:typeof h=="string"}),M.createElement(h,T))});return g.displayName=o!==void 0?o:"Styled("+(typeof i=="string"?i:i.displayName||i.name||"Component")+")",g.defaultProps=t.defaultProps,g.__emotion_real=g,g.__emotion_base=i,g.__emotion_styles=f,g.__emotion_forwardProp=l,Object.defineProperty(g,"toString",{value:function(){return"."+a}}),g.withComponent=function(x,w){return e(x,X({},n,w,{shouldForwardProp:Vf(g,w,!0)})).apply(void 0,f)},g}},H1=["a","abbr","address","area","article","aside","audio","b","base","bdi","bdo","big","blockquote","body","br","button","canvas","caption","cite","code","col","colgroup","data","datalist","dd","del","details","dfn","dialog","div","dl","dt","em","embed","fieldset","figcaption","figure","footer","form","h1","h2","h3","h4","h5","h6","head","header","hgroup","hr","html","i","iframe","img","input","ins","kbd","keygen","label","legend","li","link","main","map","mark","marquee","menu","menuitem","meta","meter","nav","noscript","object","ol","optgroup","option","output","p","param","picture","pre","progress","q","rp","rt","ruby","s","samp","script","section","select","small","source","span","strong","style","sub","summary","sup","table","tbody","td","textarea","tfoot","th","thead","time","title","tr","track","u","ul","var","video","wbr","circle","clipPath","defs","ellipse","foreignObject","g","image","line","linearGradient","mask","path","pattern","polygon","polyline","radialGradient","rect","stop","svg","text","tspan"],j=B1.bind();H1.forEach(function(e){j[e]=j(e)});const Q1=j.section`
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
`,Y1=j.h2`
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
`,K1=j.div`
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
`,G1=j.img`
  border-radius: 18px;
`,q1=j.div`
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
`,X1=j.h3`
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
`,J1=j.p`
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
`,Z1=j.ul`
  padding-left: 23px;
`,ew=j.li`
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
`,tw=j.ul`
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
`,nw=j.a`
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
`,rw=j.svg`
  margin-left: 10px;
`,iw=j.div`
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
`,ow="/healthy-management-project/assets/olga_picture1x-6T0pnRyH.webp",aw="/healthy-management-project/assets/olga_picture2x-4JmA7wGC.webp",sw="/healthy-management-project/assets/olga_picture1x-ohcXIDw6.jpg",lw="/healthy-management-project/assets/mob_olga_picture1x-PQXysebb.jpg",uw="/healthy-management-project/assets/mob_olga_picture1x-1fPtYEvT.webp",cw="/healthy-management-project/assets/mob_olga_picture2x-VJcRD770.webp",dw="/healthy-management-project/assets/olga_picture@1x-V6xBvkB4.jpg",fw="/healthy-management-project/assets/olga_picture@1x-UUwfpH5W.webp",pw="/healthy-management-project/assets/olga_picture@2x-MWfGyCra.webp",hw="/healthy-management-project/assets/olga_picture@1x-rIS7rOGv.jpg",mw="/healthy-management-project/assets/olga_picture@1x-aIsvHdrL.webp",gw="/healthy-management-project/assets/olga_picture@2x-3sK8O0o2.webp",xw=[{query:"(max-width: 767px)",imgData:{srcSet:`${cw} 2x, ${uw} 1x`,sizes:"(max-width: 767px) 100vw",src:lw}},{query:"(min-width: 768px) and (max-width: 1439px)",imgData:{srcSet:`${pw} 2x, ${fw} 1x`,type:"image/webp",sizes:"(min-width: 768px) 100vw (max-width: 1439px) 100vw",src:dw}},{query:"(min-width: 1440px) and (max-width: 1919px)",imgData:{srcSet:`${gw} 2x, ${mw} 1x`,type:"image/webp",sizes:"(min-width: 1440px) 100vw (max-width: 1919px) 100vw",src:hw}},{query:"(min-width: 1920px)",imgData:{srcSet:`${aw} 2x, ${ow} 1x`,type:"image/webp",sizes:"(min-width: 1920px) 100vw",src:sw}}],vw=[{name:"Instagram",href:"https://www.instagram.com/olga_healthm/"},{name:"Facebook",href:"https://www.facebook.com/olga.polishchuk.14"},{name:"LinkedIn",href:"https://www.linkedin.com/in/olga-polishchuk-83362140/"}],yw=["MBA Healthcare management","Викладачка медичного маркетингу Бізнес-школа УКУ (LvBS)",`Експертка в "Центр Розвитку Громадського Здоров'я УКУ"`,"Бізнес-консультантка, стратег з медичного маркетингу",'Керівниця проєкту "Стетоскоп" - телеграм канал про медичний менеджмент та маркетингу',"Більше 18 років досвіду в маркетингу та комунікаціях, з них більше 10 років досвіду в медичному та фармацевтичному бізнесі на керівних посадах","Використання принципів доказової медицини"],Z="/healthy-management-project/assets/sprite-IHRcLKoZ.svg",ww=()=>u.jsx(rw,{width:"24",height:"24",children:u.jsx("use",{href:`${Z}#icon-arrow-up-right`})}),bw=()=>u.jsx(Q1,{className:"container",children:u.jsxs("div",{children:[u.jsx(Y1,{children:"Про мене"}),u.jsxs(K1,{children:[u.jsx(iw,{children:xw.map((e,t)=>u.jsx(ae,{query:e.query,children:u.jsx(G1,{alt:"Ольга Поліщук",...e.imgData})},t))}),u.jsxs(q1,{children:[u.jsx(X1,{children:"Ольга Поліщук"}),u.jsx(J1,{children:"CEO and Founder студії стратегічного розвитку"}),u.jsx(Z1,{children:yw.map((e,t)=>u.jsx(ew,{children:e},t))}),u.jsx(tw,{children:vw.map((e,t)=>u.jsx("li",{children:u.jsxs(nw,{href:e.href,target:"_blank",rel:"noopener noreferrer",children:[e.name,u.jsx(ww,{})]})},t))})]})]})]})}),Sw=j.section`
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
`,kw=j.h2`
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
`,jw=j.div`
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
`,Cw=j.p`
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
`,Ew=j.p`
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
`,Nf=j.div`
  display: flex;
  gap: 16px;
  align-items: center;
  margin-bottom: 16px;
`,Ow=j.div`
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
`,_w=j.h4`
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
`,Pw=j.div`
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
`,Tw=j.h4`
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
`,Mw=j.p`
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
`,Rw=j.svg`
  border-radius: 100px;
  width: 32px;
  height: 32px;
  padding: 3px;

  fill: ${e=>e.fill||"currentColor"};
  background: ${e=>e.background||"transparent"};
`;var Dg={exports:{}},Iw="SECRET_DO_NOT_PASS_THIS_OR_YOU_WILL_BE_FIRED",Dw=Iw,Lw=Dw;function Lg(){}function Ag(){}Ag.resetWarningCache=Lg;var Aw=function(){function e(r,i,o,a,l,s){if(s!==Lw){var c=new Error("Calling PropTypes validators directly is not supported by the `prop-types` package. Use PropTypes.checkPropTypes() to call them. Read more at http://fb.me/use-check-prop-types");throw c.name="Invariant Violation",c}}e.isRequired=e;function t(){return e}var n={array:e,bigint:e,bool:e,func:e,number:e,object:e,string:e,symbol:e,any:e,arrayOf:t,element:e,elementType:e,instanceOf:t,node:e,objectOf:t,oneOf:t,oneOfType:t,shape:t,exact:t,checkPropTypes:Ag,resetWarningCache:Lg};return n.PropTypes=n,n};Dg.exports=Aw();var zw=Dg.exports;const ln=ao(zw),Lu=({fill:e,background:t})=>u.jsx(Rw,{fill:e,background:t,children:u.jsx("use",{href:`${Z}#icon-star`})});Lu.propTypes={fill:ln.string,background:ln.string};const Fw=()=>u.jsx(Sw,{id:"aboutUs",className:"container",children:u.jsxs("div",{children:[u.jsx(kw,{children:"Про студію"}),u.jsxs(jw,{children:[u.jsx("div",{children:u.jsx(Cw,{children:"Студія стратегічного розвитку медичних брендів «Healthy management» надає послуги медичного менеджменту, медичного маркетингу, консалтингу бізнес-процесів та створення стратегій здоров’я для підприємств та бізнесу. Ми співпрацюємо з медичними закладами, лікарями, власниками, керівниками та створюємо спільні стратегії та дії для ефективного просування та розвитку проєктів, використовуючи комплексний підхід"})}),u.jsxs(Pw,{children:[u.jsxs(Nf,{children:[u.jsx(Lu,{fill:"var(--background-white)",background:"rgba(244, 244, 246, 0.2)"}),u.jsx(Tw,{children:"Наша місія"})]}),u.jsx(Mw,{children:"Будуємо ефективні стратегії по управлінню здоров’ям та створюємо продуктивні дії для популяризації здорового менеджменту"})]}),u.jsxs(Ow,{children:[u.jsxs(Nf,{children:[u.jsx(Lu,{fill:"var(--primary-bluedark)",background:"rgba(27, 54, 65, 0.2)"}),u.jsx(_w,{children:"Наші цінності"})]}),u.jsx(Ew,{children:"Повага, довіра, партнерство та експертність. Будуємо нову культуру управління здоровим менеджментом у медичній галузі"})]})]})]})}),Vw=j.section`
  padding-top: 40px;
  padding-bottom: 40px;

  @media screen and (min-width: 1920px) {
    padding-top: 80px;
    padding-bottom: 80px;
  }
`,Nw=j.div`
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
`,$w=j.h2`
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
`,Uw=j.ul`
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
`,Ww=j.li`
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
`,Bw=[{id:1,tool:"Матриця стейкхолдерів"},{id:2,tool:"SWOT аналіз"},{id:3,tool:"Bussines model canvas"},{id:4,tool:"Value proposition canvas"},{id:5,tool:"Customer journey map"}],Hw=()=>u.jsx(Vw,{className:"container",children:u.jsxs(Nw,{children:[u.jsxs($w,{children:["Бізнес ",u.jsx("span",{children:"інструменти"}),", які використувуємо в партнерстві"]}),u.jsx(Uw,{children:Bw.map(e=>u.jsx(Ww,{children:e.tool},e.id))})]})}),da="/healthy-management-project/assets/icon-footer-MBx-ujYN.svg",Qw=j.div`
  /* padding: 40px 0; */
  background-color: var(--background-bluedark);

  @media screen and (min-width: 768px) {
  }

  @media screen and (min-width: 1440px) {
  }

  @media screen and (min-width: 1920px) {
  }
`,Yw=j.div`
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
`,$f=j.a`
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
`,Uf=j.div`
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
`,qt=j.a`
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
`,Kw=j.div`
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
`,Gw=j.div`
  display: flex;
  align-items: flex-end;
  gap: 16px;

  /* @media screen and (min-width: 768px) {
  }

  @media screen and (min-width: 1440px) {
  } */

  /* @media screen and (min-width: 1920px) {
  } */
`,qw=j.a`
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
`,Xw=j.div`
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
`,Wf=j.a`
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
`,Jw=j.div`
  display: flex;
  padding: 16px 24px;

  justify-content: center;
  align-items: center;
  border-top: 1px solid var(--system-default-20);
  background: var(--background-bluedark);
`,Zw=j.p`
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
`,eb=j.div`
  position: fixed;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  background-color: rgba(0, 0, 0, 0.5);
  overflow: hidden;
  z-index: 1100;
`,tb=j.div`
  padding: 80px;
  position: fixed;
  width: 1360px;
  border-radius: 24px;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
  background-color: white;
  z-index: 10000;
`,nb=j.div`
  height: 32px;
  display: flex;
  justify-content: space-between;
  margin-bottom: 40px;
`,rb=j.svg`
  width: 24px;
  cursor: pointer;
`,ib=j.h2`
  font-size: 24px;
  font-weight: 600;
  line-height: 32px;
  color: var(--typography-bluedark);
`,ob=j.ul`
  display: flex;
  flex-wrap: wrap;
  gap: 24px;
`,_n=j.li`
  width: 282px;
  padding: 24px;
  gap: 16px;

  border-radius: 16px;
  background: var(--background-bluedark);
  box-shadow: 0px 0px 8px 0px rgba(27, 54, 65, 0.08);
`,Pn=j.h3`
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
`,Tn=j.p`
  display: flex;
  justify-content: center;

  font-size: 14px;
  font-weight: 500;
  line-height: 18px;
  color: var(--typography-white);
`,Mn=j.div`
  gap: 16px;
  display: flex;
  flex-direction: column;
  justify-content: center;
`,Rn=j.div`
  display: flex;
  flex-direction: column;
  gap: 8px;
`,In=j.div`
  border-radius: 8px;
  overflow: hidden;
`,Dn=j.img`
  border-radius: 8px;

  &:hover {
    transform: scale(1.1);
    border-radius: 8px;
  }
`,Bf="/healthy-management-project/assets/Jilia_Kopytko-mYhzlt_-.webp",ab="/healthy-management-project/assets/Jilia_Kopytko@2x-gruKrAtD.jpg",Hf="/healthy-management-project/assets/Yelyzaveta_Domanska-Ru7up7Pj.webp",sb="/healthy-management-project/assets/Yelyzaveta_Domanska@2x-BYkqrL88.jpg",Qf="/healthy-management-project/assets/Oleksandr_Natalukha-YKEBbXyu.webp",lb="/healthy-management-project/assets/Oleksandr_Natalukha@2x-5OsrctvL.jpg",Yf="/healthy-management-project/assets/Valentyn_Havrylenko-ouVcypag.webp",ub="/healthy-management-project/assets/Valentyn_Havrylenko@2x-xBjJM6nL.jpg",Kf="/healthy-management-project/assets/Olha_Abent-lPe8g7w1.webp",cb="/healthy-management-project/assets/Olha_Abent@2x-fGgXmj71.jpg",Gf="/healthy-management-project/assets/Viktoriia_Moryc-tWw5-4of.webp",db="/healthy-management-project/assets/Viktoriia_Moryc@2x-AxiRex6x.jpg",qf="/healthy-management-project/assets/Vyacheslav_Pavlyuk-py_hj3lz.webp",fb="/healthy-management-project/assets/Vyacheslav_Pavlyuk@2x-2qCtSSAb.jpg",Xf="/healthy-management-project/assets/Yaroslav_Li-nn0P6bIv.webp",pb="/healthy-management-project/assets/Yaroslav_Li@2x-xfuqLdiI.jpg",Au=({handleClose:e,isModalOpen:t})=>{const n=i=>{i.target===i.currentTarget&&e()};M.useEffect(()=>{const i=document.body,o=()=>{t?i.classList.add("body-no-scroll"):i.classList.remove("body-no-scroll")},a=l=>{l.code==="Escape"&&t&&e()};return o(),window.addEventListener("keydown",a),()=>{window.removeEventListener("keydown",a)}},[e,t]);const r=document.getElementById("modal");return t?Uy.createPortal(u.jsx(eb,{onClick:n,children:u.jsxs(tb,{isModalOpen:t,children:[u.jsxs(nb,{children:[u.jsx(ib,{children:"Команда, яка створила сторінку"}),u.jsx(rb,{onClick:e,children:u.jsx("use",{href:`${Z}#icon-close`})})]}),u.jsxs(ob,{children:[u.jsx(_n,{children:u.jsxs(Mn,{children:[u.jsx(In,{children:u.jsx(Dn,{src:Gf,srcSet:`${Gf} 1x, ${db} 2x`,alt:"Вікторія Мориц"})}),u.jsxs(Rn,{children:[u.jsx(Pn,{children:u.jsxs("a",{href:"https://www.linkedin.com/in/viktoriia-moryc-61610962/",target:"_blank",rel:"noopener noreferrer",children:["Вікторія Мориц",u.jsx("svg",{width:"24",height:"24",children:u.jsx("use",{href:`${Z}#icon-linkedin`})})]})}),u.jsx(Tn,{children:"Project Manager"})]})]})}),u.jsx(_n,{children:u.jsxs(Mn,{children:[u.jsx(In,{children:u.jsx(Dn,{src:Bf,srcSet:`${Bf} 1x, ${ab} 2x`,alt:"Юлія Копитко"})}),u.jsxs(Rn,{children:[u.jsx(Pn,{children:u.jsxs("a",{href:"https://www.linkedin.com/in/juliakopytko/",target:"_blank",rel:"noopener noreferrer",children:["Юлія Копитко",u.jsx("svg",{width:"24",height:"24",children:u.jsx("use",{href:`${Z}#icon-linkedin`})})]})}),u.jsx(Tn,{children:"UX/UI Designer"})]})]})}),u.jsx(_n,{children:u.jsxs(Mn,{children:[u.jsx(In,{children:u.jsx(Dn,{src:Xf,srcSet:`${Xf} 1x, ${pb} 2x`,alt:"Ярослав Лі"})}),u.jsxs(Rn,{children:[u.jsx(Pn,{children:u.jsxs("a",{href:"https://www.linkedin.com/in/yaroslav-lee-b7070b294",target:"_blank",rel:"noopener noreferrer",children:["Ярослав Лі",u.jsx("svg",{width:"24",height:"24",children:u.jsx("use",{href:`${Z}#icon-linkedin`})})]})}),u.jsx(Tn,{children:"Frontend Developer"})]})]})}),u.jsx(_n,{children:u.jsxs(Mn,{children:[u.jsx(In,{children:u.jsx(Dn,{src:Hf,srcSet:`${Hf} 1x, ${sb} 2x`,alt:"Єлизавета Доманська"})}),u.jsxs(Rn,{children:[u.jsx(Pn,{children:u.jsxs("a",{href:"https://www.linkedin.com/in/yelyzaveta-domanska-2185a5292/",target:"_blank",rel:"noopener noreferrer",children:["Єлизавета Доманська",u.jsx("svg",{width:"24",height:"24",children:u.jsx("use",{href:`${Z}#icon-linkedin`})})]})}),u.jsx(Tn,{children:"Frontend Developer"})]})]})}),u.jsx(_n,{children:u.jsxs(Mn,{children:[u.jsx(In,{children:u.jsx(Dn,{src:Qf,srcSet:`${Qf} 1x, ${lb} 2x`,alt:"Олександр Наталуха"})}),u.jsxs(Rn,{children:[u.jsx(Pn,{children:u.jsxs("a",{href:"https://www.linkedin.com/in/oleksandr-natalukha",target:"_blank",rel:"noopener noreferrer",children:["Олександр Наталуха",u.jsx("svg",{width:"24",height:"24",children:u.jsx("use",{href:`${Z}#icon-linkedin`})})]})}),u.jsx(Tn,{children:"Frontend Developer"})]})]})}),u.jsx(_n,{children:u.jsxs(Mn,{children:[u.jsx(In,{children:u.jsx(Dn,{src:Yf,srcSet:`${Yf} 1x, ${ub} 2x`,alt:"Валентин Гавриленко"})}),u.jsxs(Rn,{children:[u.jsx(Pn,{children:u.jsxs("a",{href:"https://www.linkedin.com/in/valentyn-havrylenko/",target:"_blank",rel:"noopener noreferrer",children:["Валентин Гавриленко",u.jsx("svg",{width:"24",height:"24",children:u.jsx("use",{href:`${Z}#icon-linkedin`})})]})}),u.jsx(Tn,{children:"Frontend Developer"})]})]})}),u.jsx(_n,{children:u.jsxs(Mn,{children:[u.jsx(In,{children:u.jsx(Dn,{src:qf,srcSet:`${qf} 1x, ${fb} 2x`,alt:"В´ячеслав Павлюк"})}),u.jsxs(Rn,{children:[u.jsx(Pn,{children:u.jsxs("a",{href:"https://www.linkedin.com/in/vyacheslav-pavlyuk/",target:"_blank",rel:"noopener noreferrer",children:["В'ячеслав Павлюк",u.jsx("svg",{width:"24",height:"24",children:u.jsx("use",{href:`${Z}#icon-linkedin`})})]})}),u.jsx(Tn,{children:"Fullstack Developer"})]})]})}),u.jsx(_n,{children:u.jsxs(Mn,{children:[u.jsx(In,{children:u.jsx(Dn,{src:Kf,srcSet:`${Kf} 1x, ${cb} 2x`,alt:"Ольга Абент"})}),u.jsxs(Rn,{children:[u.jsx(Pn,{children:u.jsxs("a",{href:"https://www.linkedin.com/in/abentolga/",target:"_blank",rel:"noopener noreferrer",children:["Ольга Абент",u.jsx("svg",{width:"24",height:"24",children:u.jsx("use",{href:`${Z}#icon-linkedin`})})]})}),u.jsx(Tn,{children:"QA Engineer"})]})]})})]})]})}),r):null};Au.propTypes={handleClose:ln.func.isRequired,isModalOpen:ln.bool.isRequired};function hb(e,t){if(t===e)return!1;const n=Object.values(t),r=Object.values(e);if(n.length!==r.length||n.some((o,a)=>o!==r[a]))return!0;const i=Object.keys(e);return Object.keys(t).some((o,a)=>o!==i[a])}function mb(e,t){return e.matches[t]=!1,e.mediaQueries[t]={},e}function zg(e){const t=Object.keys(e);return typeof window>"u"?t.reduce(mb,{mediaQueries:{},matches:{}}):t.reduce((n,r)=>{const i=window.matchMedia(e[r]);return n.mediaQueries[r]=i,n.matches[r]=i.matches,n},{mediaQueries:{},matches:{}})}function gb(e,t){function n(r,i){return r[i]=e.mediaQueries[i].matches,r}switch(t.type){case"updateMatches":return{matches:Object.keys(e.mediaQueries).reduce(n,{}),mediaQueries:e.mediaQueries};case"setQueries":return zg(t.queries)}}function xb(e){const t=M.useRef(e),[n,r]=M.useReducer(gb,e,zg);M.useEffect(()=>{hb(e,t.current)&&(r({type:"setQueries",queries:e}),t.current=e)},[e]);function i(){return r({type:"updateMatches"})}function o(s){const c=i;return typeof s.addListener<"u"?s.addListener(c):s.addEventListener("change",c),c}M.useEffect(()=>{const s=Object.values(n.mediaQueries),c=s.map(o);function d(f,m){typeof f.addListener<"u"?f.removeListener(c[m]):f.removeEventListener("change",c[m])}return()=>{s.forEach(d)}},[n.mediaQueries]);const{matches:a}=n,l=M.useMemo(()=>Object.values(a),[a]);return{matches:a,matchesAny:l.some(Boolean),matchesAll:l.length>0&&l.every(Boolean)}}function vb(e){return xb(yb(e)).matchesAll}const ml={};function yb(e){return ml[e]===void 0&&(ml[e]={default:e}),ml[e]}const Fg=({handleSetActiveLink:e})=>{const[t,n]=M.useState(!1),r=vb("(min-width: 1440px) and (max-width: 1919px)"),i=()=>{n(!0)},o=()=>{n(!1)};return u.jsxs(Qw,{id:"footer",children:[u.jsxs(Yw,{className:"container",children:[u.jsx("a",{href:"#home",children:u.jsx("svg",{width:"227",height:"40",children:u.jsx("use",{href:`${da}#logo-white`})})}),r?u.jsxs(u.Fragment,{children:[u.jsxs(Uf,{children:[u.jsx(qt,{href:"#home",onClick:a=>e("home",a),children:"Головна"}),u.jsx(qt,{href:"#aboutUs",onClick:a=>e("aboutUs",a),children:"Про нас"}),u.jsx(qt,{href:"#services",onClick:a=>e("services",a),children:"Послуги"}),u.jsx(qt,{href:"#mentoring",onClick:a=>e("mentoring",a),children:"Менторство"}),u.jsx(qt,{href:"#projects",onClick:a=>e("projects",a),children:"Проєкти"})]}),u.jsx($f,{onClick:i,children:"created by GoIT students"}),u.jsx(Au,{handleClose:o,isModalOpen:t})]}):u.jsxs(u.Fragment,{children:[u.jsx($f,{onClick:i,children:"created by GoIT students"}),u.jsx(Au,{handleClose:o,isModalOpen:t}),u.jsxs(Uf,{children:[u.jsx(qt,{href:"#home",onClick:a=>e("home",a),children:"Головна"}),u.jsx(qt,{href:"#aboutUs",onClick:a=>e("aboutUs",a),children:"Про нас"}),u.jsx(qt,{href:"#services",onClick:a=>e("services",a),children:"Послуги"}),u.jsx(qt,{href:"#mentoring",onClick:a=>e("mentoring",a),children:"Менторство"}),u.jsx(qt,{href:"#projects",onClick:a=>e("projects",a),children:"Проєкти"})]})]}),u.jsxs(Kw,{children:[u.jsxs(Gw,{children:[u.jsx(qw,{href:"https://www.facebook.com/profile.php?id=61551346490841",target:"_blank",rel:"noopener noreferrer",children:u.jsx("svg",{width:"32",height:"32",children:u.jsx("use",{href:`${da}#facebook`})})}),u.jsx("a",{href:"https://www.instagram.com/healthymanagement_ua/",target:"_blank",rel:"noopener noreferrer",children:u.jsx("svg",{width:"40",height:"40",children:u.jsx("use",{href:`${da}#instagram`})})})]}),u.jsxs(Xw,{children:[u.jsx(Wf,{href:"mailto:healthy.managements@gmail.com",children:"healthy.managements@gmail.com"}),u.jsx(Wf,{href:"tel:+380673160556",children:"+380 673 160 556"})]})]})]}),u.jsx(Jw,{children:u.jsx(Zw,{children:"© 2023 healthy management. All rights reserved"})})]})};Fg.propTypes={handleSetActiveLink:ln.func.isRequired};const zi="/healthy-management-project/assets/symbol-defs--0zN9DRa.svg",wb=j.header`
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
`,bb=j.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
`,Sb=j.nav`
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
`,kb=j.a`
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
`,Jf=j.svg`
  stroke: black;
  width: 40px;
  height: 40px;

  @media screen and (min-width: 768px) {
    width: 70px;
  }
`,Zf=j.button`
  border: none;
  padding: 0;
  margin: 0;
  text-decoration: none;
  font-family: inherit;
  font-size: 100%;
  cursor: pointer;
  background: none;
`,jb=j.div`
  position: fixed;
  z-index: 1200;
  top: 0;
  left: 0;
  width: 100%;
`,Cb=j.div`
  display: flex;
  width: 100%;
  padding-top: 32px;
  padding-bottom: 32px;
  justify-content: space-between;
  align-items: center;
  border-bottom: 1px solid var(--system-default-20, #dedede);
  background: var(--system-default-10, #f8f8f8);
`,Eb=j.a`
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
`,Ob=j.svg`
  stroke: var(--primary-black);
`,_b=j.nav`
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
`,Pb=j.button`
  border: none;
  padding: 0;
  margin: 0;
  text-decoration: none;
  font-family: inherit;
  font-size: 100%;
  cursor: pointer;
  background: none;
`,Tb=document.getElementById("modalMobail"),Vg=({onClose:e,handleSetActiveLink:t})=>po.createPortal(u.jsx(jb,{children:u.jsxs("div",{className:"container",children:[u.jsxs(Cb,{children:[u.jsx("a",{href:"#home",children:u.jsx("svg",{width:"40",height:"40",children:u.jsx("use",{href:`${zi}#icon-g10`})})}),u.jsx(Eb,{href:"#contact",children:"Контакт"}),u.jsx(Pb,{type:"button",onClick:()=>e(),children:u.jsx(Ob,{width:"40",height:"40",children:u.jsx("use",{href:`${zi}#icon-close`})})})]}),u.jsxs(_b,{children:[u.jsx(mi,{href:"#home",onClick:n=>{e(),t("home",n)},children:"Головна"}),u.jsx(mi,{href:"#aboutUs",onClick:n=>{e(),t("aboutUs",n)},children:"Про нас"}),u.jsx(mi,{href:"#services",onClick:n=>{e(),t("services",n)},children:"Послуги"}),u.jsx(mi,{href:"#mentoring",onClick:n=>{e(),t("mentoring",n)},children:"Менторство"}),u.jsx(mi,{href:"#projects",onClick:n=>{e(),t("projects",n)},children:"Проєкти"})]})]})}),Tb);Vg.propTypes={onClose:ln.func.isRequired};const Ng=({handleSetActiveLink:e})=>{const[t,n]=M.useState("home"),[r,i]=M.useState(!1),o=xn.useMediaQuery({query:"(max-width: 767px)"}),a=xn.useMediaQuery({query:"(min-width: 768px) and (max-width: 1439px)"}),l=xn.useMediaQuery({query:"(max-width: 1439px)"}),s=xn.useMediaQuery({query:"(min-width: 1440px)"}),c=()=>{i(!r)};return M.useEffect(()=>{const d=()=>{const m=["home","aboutUs","services","mentoring","projects","contact"].find(y=>{const g=document.getElementById(y);if(g){const x=g.getBoundingClientRect();return x.top<=120&&x.bottom>=120}return g});m&&n(m)};return window.addEventListener("scroll",d),()=>{window.removeEventListener("scroll",d)}},[]),u.jsxs(wb,{children:[u.jsx("div",{className:"container",children:u.jsxs(bb,{children:[l&&u.jsx("a",{href:"#home",children:u.jsx("svg",{width:"40",height:"40",children:u.jsx("use",{href:`${zi}#icon-g10`})})}),s&&u.jsx("a",{href:"#home",children:u.jsx("svg",{width:"227",height:"40",children:u.jsx("use",{href:`${Z}#logo-black`})})}),s&&u.jsxs(Sb,{children:[u.jsx(hi,{href:"#home",className:t==="home"?"active":"",onClick:d=>e("home",d),children:"Головна"}),u.jsx(hi,{href:"#aboutUs",className:t==="aboutUs"?"active":"",onClick:d=>e("aboutUs",d),children:"Про нас"}),u.jsx(hi,{href:"#services",className:t==="services"?"active":"",onClick:d=>e("services",d),children:"Послуги"}),u.jsx(hi,{href:"#mentoring",className:t==="mentoring"?"active":"",onClick:d=>e("mentoring",d),children:"Менторство"}),u.jsx(hi,{href:"#projects",className:t==="projects"?"active":"",onClick:d=>e("projects",d),children:"Проєкти"})]}),u.jsx(kb,{href:"#contact",className:t==="contact"?"active":"",onClick:d=>e("contact",d),children:"Контакт"}),o&&u.jsx(Zf,{type:"button",onClick:()=>c(),children:u.jsx(Jf,{children:u.jsx("use",{href:`${zi}#icon-menuburger`})})}),a&&u.jsx(Zf,{type:"button",onClick:()=>c(),children:u.jsx(Jf,{children:u.jsx("use",{href:`${zi}#icon-menuburgerhorizontaltablet`})})})]})}),l&&r&&u.jsx(Vg,{onClose:c,handleSetActiveLink:e})]})};Ng.propTypes={handleSetActiveLink:ln.func.isRequired};const Mb="/healthy-management-project/assets/hero1x-6AVSlzud.webp",Rb="/healthy-management-project/assets/hero@2x-N6Dvbfg6.jpg",Ib="/healthy-management-project/assets/hero1x-d4IOBsel.jpg",Db="/healthy-management-project/assets/hero@2x-qDoBpvI0.jpg",Lb="/healthy-management-project/assets/hero@1x-gjNVfS_G.jpg",Ab="/healthy-management-project/assets/hero@2x-xeAfw2Nx.jpg",zb="/healthy-management-project/assets/hero@1x-T7izVw7M.jpg",Fb="/healthy-management-project/assets/hero@2x-MzaNEgZc.jpg",Vb=j.section`
  background-repeat: no-repeat;
  background-position: center;
  background-image: url(${Ib});
  background-size: cover;
  margin-top: 120px;
  padding-top: 40px;
  padding-bottom: 40px;

  @media (min-device-pixel-ratio: 2),
    (min-resolution: 192dpi),
    (min-resolution: 2dppx) {
    background-image: url(${Db});
  }

  @media screen and (min-width: 768px) {
    background-image: url(${Lb});
    margin-top: 120px;
    padding-top: 234px;
    padding-bottom: 234px;

    @media (min-device-pixel-ratio: 2),
      (min-resolution: 192dpi),
      (min-resolution: 2dppx) {
      background-image: url(${Ab});
    }
  }

  @media screen and (min-width: 1440px) {
    background-image: url(${zb});
    margin-top: 120px;
    padding-top: 236px;
    padding-bottom: 236px;

    @media (min-device-pixel-ratio: 2),
      (min-resolution: 192dpi),
      (min-resolution: 2dppx) {
      background-image: url(${Fb});
    }
  }

  @media screen and (min-width: 1920px) {
    background-image: url(${Mb});

    margin-top: 120px;
    padding-top: 296px;
    padding-bottom: 296px;

    @media (min-device-pixel-ratio: 2),
      (min-resolution: 192dpi),
      (min-resolution: 2dppx) {
      background-image: url(${Rb});
    }
  }
`,Nb=j.h1`
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
`,$b=j.h3`
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
`,Ub=j.ul`
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
`,Wb=j.li`
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
`,Bb=j.div`
  display: flex;
  flex-direction: column;
  gap: 24px;

  @media screen and (min-width: 768px) {
    flex-direction: row;
  }
`,$g=j.a`
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
`,Hb=j($g)`
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
`,Qb=j($g)`
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
`,Yb=["медичний менеджмент і маркетинг,","програми управління здоров'ям для підприємств та бізнесу,","менторство"],zu=({type:e,children:t,href:n})=>e==="contact"?u.jsx(Hb,{href:n,children:t}):e==="services"?u.jsx(Qb,{href:n,children:t}):null;zu.propTypes={type:ln.oneOf(["contact","services"]).isRequired,children:ln.node.isRequired,href:ln.string.isRequired};const Kb=()=>u.jsx(Vb,{id:"home",children:u.jsxs("div",{className:"container",children:[u.jsx(Nb,{children:"Бізнес-партнер з розвитку та комунікацій здорового менеджменту"}),u.jsx($b,{children:"Будуємо ефективні стратегії здорового менеджменту для медичних брендів:"}),u.jsx(Ub,{children:Yb.map((e,t)=>u.jsx(Wb,{children:e},t))}),u.jsxs(Bb,{children:[u.jsx(zu,{type:"contact",href:"#contact",children:"Консультація"}),u.jsx(zu,{type:"services",href:"#services",children:"Послуги"})]})]})}),Gb=j.section`
  padding-top: 40px;
  padding-bottom: 40px;

  @media screen and (min-width: 1920px) {
    padding-top: 80px;
    padding-bottom: 80px;
  }
`,qb=j.div`
  border-radius: 16px;
  padding: 24px;
  background: var(--background-bluedark);

  @media screen and (min-width: 1920px) {
    max-width: 100%;
    padding: 80px;
  }
`,Xb=j.h2`
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
`,Jb=j.ul`
  display: flex;
  padding: 0;
  flex-wrap: wrap;
  gap: 24px;
`,Fo=j.li`
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
`,Vo=j.svg`
  width: 64px;
  height: 64px;
`,No=j.div`
  display: flex;
  flex-direction: column;
`,$o=j.h3`
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
`,Uo=j.p`
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
`,Zb=()=>u.jsx(Gb,{className:"container",children:u.jsxs(qb,{children:[u.jsx(Xb,{children:"Чому обирають нас"}),u.jsxs(Jb,{children:[u.jsxs(Fo,{children:[u.jsx(Vo,{children:u.jsx("use",{href:`${Z}#hands-shake`})}),u.jsxs(No,{children:[u.jsx($o,{children:"Надійне партнерство та менторство"}),u.jsx(Uo,{children:"Ми налаштовані на довгострокове партнерство і дбаємо про комфортні та чесні комунікації"})]})]}),u.jsxs(Fo,{children:[u.jsx(Vo,{children:u.jsx("use",{href:`${Z}#setting`})}),u.jsxs(No,{children:[u.jsx($o,{children:"Індивідуальний підхід"}),u.jsx(Uo,{children:"Кожен бізнес і послуга мають свої особливості. Ми занурюємося у ваш бізнес і пропонуємо індивідуальні стратегії, які допоможуть вам досягти успіху"})]})]}),u.jsxs(Fo,{children:[u.jsx(Vo,{children:u.jsx("use",{href:`${Z}#icon-lamp`})}),u.jsxs(No,{children:[u.jsx($o,{children:"Експертні послуги"}),u.jsx(Uo,{children:"Ми опираємося на передовий досвід і використовуємо як класичні, так і сучасні підходи для досягнення поставленого результату"})]})]}),u.jsxs(Fo,{children:[u.jsx(Vo,{children:u.jsx("use",{href:`${Z}#icon-puzzle`})}),u.jsxs(No,{children:[u.jsx($o,{children:"Комплексні рішення"}),u.jsx(Uo,{children:"Наша експертиза дозволяє пропонувати комплексні рішення для ефективної співпраці"})]})]})]})]})}),e2="/healthy-management-project/assets/pic_mentorstvo1x-R5bIGNq0.webp",t2="/healthy-management-project/assets/pic_mentorstvo2x-k6d-_Us1.jpg",n2="/healthy-management-project/assets/pic_mentorstvo1x-DCmM7Ygj.jpg",r2="/healthy-management-project/assets/mob_mentor1x-_de1iGBc.webp",i2="/healthy-management-project/assets/mob_mentor@2x-oAKhVwNJ.jpg",o2="/healthy-management-project/assets/mob_mentor1x-1WPWjsx0.jpg",a2="/healthy-management-project/assets/pic_mentorstvo_768_1x-Px4J1LUl.jpg",s2="/healthy-management-project/assets/pic_mentorstvo_768_1x-gkJzTmk_.webp",l2="/healthy-management-project/assets/pic_mentorstvo_768@2x-S5qjgsHl.webp",u2="/healthy-management-project/assets/pic_mentorstvo_1440_1x-WjllDGeR.webp",c2="/healthy-management-project/assets/pic_mentorstvo_1440@2x-O-l22q9a.webp",d2="/healthy-management-project/assets/pic_mentorstvo_1440_1x-7OpZfadC.jpg",f2=j.section`
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
`,p2=j.div`
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
`,h2=j.div`
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
`,m2=j.div`
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
`,g2=j.h2`
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
`,x2=j.h3`
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
`,ep=j.h3`
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
`,v2=j.div`
  display: flex;
  flex-direction: column;
  gap: 24px;
  min-width: 320px;

  @media screen and (min-width: 1920px) {
    gap: 20px;
    margin-bottom: 56px;
  }
`,tp=j.p`
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
`,y2=j.a`
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
`,w2=j.div`
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
`,b2=j.div`
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
`,S2=j.ul`
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
`,np=j.ul`
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
`,k2=()=>u.jsxs(f2,{id:"mentoring",className:"container",children:[u.jsxs(p2,{children:[u.jsxs("div",{children:[u.jsx(ae,{minWidth:1920,children:u.jsx("img",{srcSet:`${e2} 1x, ${t2} 2x`,sizes:"(min-width: 1920px) 1920px",src:n2,alt:"Ольга Поліщук - ваш ментор в медичній галузі"})}),u.jsx(ae,{minWidth:300,maxWidth:767,children:u.jsx("img",{srcSet:`${r2} 1x, ${i2} 2x`,sizes:"(min-width: 375px) 375px",src:o2,alt:"Ольга Поліщук - ваш ментор в медичній галузі"})}),u.jsx(ae,{minWidth:768,maxWidth:1439,children:u.jsx("img",{srcSet:`${s2} 1x, ${l2} 2x`,sizes:"(min-width: 768px) 768px",src:a2,alt:"Ольга Поліщук - ваш ментор в медичній галузі"})}),u.jsx(ae,{minWidth:1440,maxWidth:1919,children:u.jsx("img",{srcSet:`${u2} 1x, ${c2} 2x`,sizes:"(min-width: 1440px) 100vw (max-width: 1919px) 100vw",src:d2,alt:"Ольга Поліщук - ваш ментор в медичній галузі"})})]}),u.jsxs(h2,{children:[u.jsx(g2,{children:"Менторство"}),u.jsxs(v2,{children:[u.jsxs(tp,{children:[u.jsx("b",{children:"Менторство в медичній галузі"})," - почути іншу думку, підтвердити власні гіпотези, зрозуміти вектор розвитку, отримати підтримку та пораду з питань менеджменту і медичного маркетингу"]}),u.jsxs(tp,{children:[u.jsx("b",{children:"Менторство"})," - це про взаємодію та чесну комунікацію, про спільні цінності та готовність до росту, про надійне партнерство та довіру"]})]}),u.jsx(y2,{href:"#contact",children:"Дізнатися вартість"})]})]}),u.jsx("div",{children:u.jsxs(w2,{children:[u.jsxs(m2,{children:[u.jsx(x2,{children:"Про що це?"}),u.jsxs(S2,{children:[u.jsx(wr,{children:u.jsx("p",{children:"Про прагнення почути чесну іншу думку/та або підтвердити власні гіпотези для власника/керівника"})}),u.jsx(wr,{children:u.jsx("p",{children:"Про бізнес-процеси та їх ефективність"})}),u.jsx(wr,{children:u.jsx("p",{children:"Про вектори розвитку бізнесу або проєкту"})}),u.jsx(wr,{children:u.jsx("p",{children:"Про практичний інструментарій для впровадження змін"})}),u.jsx(wr,{children:u.jsx("p",{children:"Про маркетинг, сервіс та комунікації в медичних бізнесах"})}),u.jsx(wr,{children:u.jsx("p",{children:"Про здоров'я працівників та стратегії підвищенння ефективності бізнесу"})})]})]}),u.jsxs(b2,{children:[u.jsx(ep,{children:"Для кого"}),u.jsxs(np,{children:[u.jsx(br,{children:u.jsx("p",{children:"Лідерам, які прагнуть змін"})}),u.jsx(br,{children:u.jsx("p",{children:"Власникам, які хочуть отримати незалежку експертну думку"})}),u.jsx(br,{children:u.jsx("p",{children:"Керівникам та маркетологам, яким потрібна підтримка"})}),u.jsx(br,{children:u.jsx("p",{children:"Лікарям, яким важливо отримати пораду"})})]}),u.jsx(ep,{children:"Формат"}),u.jsxs(np,{children:[u.jsx(br,{children:u.jsx("p",{children:"Індивідуальна ментор-сесія (від 1 години)"})}),u.jsx(br,{children:u.jsx("p",{children:"Персональний супровід на декілька місяців"})})]})]})]})})]}),Ug=j.section`
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
`,Wg=j.div`
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
`,j2=j.div`
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
`,Wo=j.div`
  position: relative;

  @media screen and (min-width: 1920px) {
    min-width: 370px;
  }
`,Bg=j.div`
  display: flex;
  flex-direction: column;

  @media screen and (min-width: 1290px) {
    gap: 40px;
    margin-bottom: 40px;
    flex-direction: row;
  }
`,Hg=j.div`
  min-width: 280px;
  gap: 16px;
  display: flex;
  flex-direction: column;

  @media screen and (min-width: 1920px) {
    min-width: 740px;
  }
`,Qg=j.div`
  @media screen and (min-width: 768px) {
    padding: 24px;
  }
`,Bo=j.p`
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
`,Yg=j.h2`
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
`,Kg=j.h3`
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
`,Gg=j.p`
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
`,qg=j.p`
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
`,Xg=j.a`
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
`,Jg=j.p`
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
`,Zg=j.ul`
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
`,C2=()=>u.jsx(Ug,{className:"container",children:u.jsxs(Wg,{children:[u.jsxs(Bg,{children:[u.jsxs(Hg,{children:[u.jsx(Yg,{children:"Індивідуальна ментор сесія"}),u.jsx(Gg,{children:"Вирішення вашого індивідуального запиту"}),u.jsx(qg,{children:"від 1 години"}),u.jsx(Xg,{href:"#contact",children:"Замовити послугу"})]}),u.jsxs(Qg,{children:[u.jsx(Kg,{children:"Питання, з якими можете звернутися"}),u.jsxs(Zg,{children:[u.jsx(Ut,{children:"Незалежна думка щодо маркетингу та розвитку"}),u.jsx(Ut,{children:"Порада по створенню відділу маркетингу або оцінка існуючої структури"}),u.jsx(Ut,{children:"Питання по роботі з підрядниками"}),u.jsx(Ut,{children:"Порада щодо оптимізації бізнес-процесів"}),u.jsx(Ut,{children:"Як вірно оцінити ефективність маркетингових дій"}),u.jsx(Ut,{children:"Які інструменти комунікацій використовувати"}),u.jsxs(Ut,{children:["Особисте питання по менеджменту та розвитку з питань управління"," ","здоров'ям"]})]})]})]}),u.jsx(Jg,{children:"Шлях проведення менторської сесії"}),u.jsxs(j2,{children:[u.jsxs(Wo,{children:[u.jsx(ae,{minWidth:330,maxWidth:767,children:u.jsx(Pt,{children:u.jsx("use",{href:`${Z}#icon-rectangle-mob`})})}),u.jsx(ae,{minWidth:768,maxWidth:1439,children:u.jsx(Pt,{children:u.jsx("use",{href:`${Z}#icon-rectangle-tab`})})}),u.jsx(ae,{minWidth:1440,children:u.jsx(Pt,{children:u.jsx("use",{href:`${Z}#icon-rectangle`})})}),u.jsx(Bo,{children:"Заповнення брифу"})]}),u.jsxs(Wo,{children:[u.jsx(ae,{minWidth:330,maxWidth:767,children:u.jsx(Pt,{children:u.jsx("use",{href:`${Z}#icon-rectangle-mob`})})}),u.jsx(ae,{minWidth:768,maxWidth:1439,children:u.jsx(Pt,{children:u.jsx("use",{href:`${Z}#icon-rectangle-tab`})})}),u.jsx(ae,{minWidth:1440,children:u.jsx(Pt,{children:u.jsx("use",{href:`${Z}#icon-rectangle`})})}),u.jsx(Bo,{children:"Діагностика ситуації"})]}),u.jsxs(Wo,{children:[u.jsx(ae,{minWidth:330,maxWidth:767,children:u.jsx(Pt,{children:u.jsx("use",{href:`${Z}#icon-rectangle-mob`})})}),u.jsx(ae,{minWidth:768,maxWidth:1439,children:u.jsx(Pt,{children:u.jsx("use",{href:`${Z}#icon-rectangle-tab`})})}),u.jsx(ae,{minWidth:1440,children:u.jsx(Pt,{children:u.jsx("use",{href:`${Z}#icon-rectangle`})})}),u.jsx(Bo,{children:"Проведення сесії"})]}),u.jsxs(Wo,{children:[u.jsx(ae,{minWidth:330,maxWidth:767,children:u.jsx(Pt,{children:u.jsx("use",{href:`${Z}#icon-rectangle-mob`})})}),u.jsx(ae,{minWidth:768,maxWidth:1439,children:u.jsx(Pt,{children:u.jsx("use",{href:`${Z}#icon-rectangle-tab`})})}),u.jsx(ae,{minWidth:1440,children:u.jsx(Pt,{children:u.jsx("use",{href:`${Z}#icon-rectangle`})})}),u.jsx(Bo,{children:"Рекомендації"})]})]})]})}),E2=j.div`
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
`,at=j.svg`
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
`;const xi=j.p`
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
`,O2=()=>u.jsx(Ug,{className:"container",children:u.jsxs(Wg,{children:[u.jsxs(Bg,{children:[u.jsxs(Hg,{children:[u.jsx(Yg,{children:"Персональний супровід"}),u.jsx(Gg,{children:"Пропрацьовуємо ваші запити та досягаємо посавлених цілей"}),u.jsx(qg,{children:"від 2 місяців тісної взаємодії"}),u.jsx(Xg,{href:"#contact",children:"Замовити послугу"})]}),u.jsxs(Qg,{children:[u.jsx(Kg,{children:"Питання, з якими можете звернутися"}),u.jsxs(Zg,{children:[u.jsx(Ut,{children:"Зануритись в бізнес-процеси та зрозуміти, де є точки зростання"}),u.jsx(Ut,{children:"Зрозуміти що таке маркетинг та як він працює у вашому бізнесі"}),u.jsx(Ut,{children:"Супровід розробки та впровадження стратегій"}),u.jsx(Ut,{children:"Особисті питання по медичному менеджменту, маркетингу та розвитку, управління здоров'ям"})]})]})]}),u.jsx(Jg,{children:"Шлях проведення менторського супроводу"}),u.jsxs(E2,{children:[u.jsxs(gi,{children:[u.jsx(ae,{minWidth:330,maxWidth:767,children:u.jsx(at,{children:u.jsx("use",{href:`${Z}#icon-rectangle-mob`})})}),u.jsx(ae,{minWidth:768,maxWidth:1439,children:u.jsx(at,{children:u.jsx("use",{href:`${Z}#icon-rectangle-tab`})})}),u.jsx(ae,{minWidth:1440,children:u.jsx(at,{children:u.jsx("use",{href:`${Z}#icon-rectangle2`})})}),u.jsx(xi,{children:"Заповнення брифу"})]}),u.jsxs(gi,{children:[u.jsx(ae,{minWidth:330,maxWidth:767,children:u.jsx(at,{children:u.jsx("use",{href:`${Z}#icon-rectangle-mob`})})}),u.jsx(ae,{minWidth:768,maxWidth:1439,children:u.jsx(at,{children:u.jsx("use",{href:`${Z}#icon-rectangle-tab`})})}),u.jsx(ae,{minWidth:1440,children:u.jsx(at,{children:u.jsx("use",{href:`${Z}#icon-rectangle2`})})}),u.jsx(xi,{children:"Діагностика ситуації"})]}),u.jsxs(gi,{children:[u.jsx(ae,{minWidth:330,maxWidth:767,children:u.jsx(at,{children:u.jsx("use",{href:`${Z}#icon-rectangle-mob`})})}),u.jsx(ae,{minWidth:768,maxWidth:1439,children:u.jsx(at,{children:u.jsx("use",{href:`${Z}#icon-rectangle-tab`})})}),u.jsx(ae,{minWidth:1440,children:u.jsx(at,{children:u.jsx("use",{href:`${Z}#icon-rectangle2`})})}),u.jsx(xi,{children:"Визначення зон росту"})]}),u.jsxs(gi,{children:[u.jsx(ae,{minWidth:330,maxWidth:767,children:u.jsx(at,{children:u.jsx("use",{href:`${Z}#icon-rectangle-mob`})})}),u.jsx(ae,{minWidth:768,maxWidth:1439,children:u.jsx(at,{children:u.jsx("use",{href:`${Z}#icon-rectangle-tab`})})}),u.jsx(ae,{minWidth:1440,children:u.jsx(at,{children:u.jsx("use",{href:`${Z}#icon-rectangle2`})})}),u.jsx(xi,{children:"Менторинг"})]}),u.jsxs(gi,{children:[u.jsx(ae,{minWidth:330,maxWidth:767,children:u.jsx(at,{children:u.jsx("use",{href:`${Z}#icon-rectangle-mob`})})}),u.jsx(ae,{minWidth:768,maxWidth:1439,children:u.jsx(at,{children:u.jsx("use",{href:`${Z}#icon-rectangle-tab`})})}),u.jsx(ae,{minWidth:1440,children:u.jsx(at,{children:u.jsx("use",{href:`${Z}#icon-rectangle2`})})}),u.jsx(xi,{children:"Рекомендації"})]})]})]})}),Rs=()=>{const e=xn.useMediaQuery({maxWidth:767}),t=xn.useMediaQuery({minWidth:768,maxWidth:1439}),n=xn.useMediaQuery({minWidth:1440,maxWidth:1919}),r=xn.useMediaQuery({minWidth:1920});return e&&"mobile"||t&&"tablet"||n&&"desktop"||r&&"largeDesktop"},_2="/healthy-management-project/assets/denta_derm1x-JWCICTe_.webp",P2="/healthy-management-project/assets/medialt1x-5LMkh0v8.webp",T2="/healthy-management-project/assets/cures1x--AoJBOWJ.webp",M2="/healthy-management-project/assets/clinic1x-YgK5Wnno.webp",R2="/healthy-management-project/assets/kmklam1x-FlPeEOTs.webp",I2="/healthy-management-project/assets/symmetrica1x-hhcOddzB.webp",gl=[{image:_2,category:"DentaDerm",title:"Діагностика бізнес-процесів, маркетингу, сервісу, розробка стратегії розвитку, менторство",about:["Діагностика бізнес-процесів та маркетингу","Стратегія розвитку","Підбір команди маркетингу","Менторство"],details:[{title:"Завдання:",about:["Розробка стратегії розвитку","Розробка нового сайту клініки","Пошук команди маркетингу"],comment:"Дії в результаті розробки стратегії розвитку передбачали роботу над проєктом в новому позиціонуванні,  пошук зовнішньої та внутрішньої команди для реалізації нового сайту, ведення соцмереж"},{title:"В результаті роботи над проєктом:",about:["Розроблені вектори розвитку","Розроблений та впроваджений новий сайт","Підібрана команда маркетингового супроводу"],comment:"В результаті співпраці партнер отримав комплексне бачення просування, сформована команда маркетингу"}]},{image:P2,category:"Medialt",title:"Діагностика бізнес-процесів, маркетингу, сервісу, розробка стратегії розвитку, менторство",about:["Аудит ринку та конкурентів","Аудит маркетингу та сервісу","Розробка стратегії розвитку"],details:[{title:"Завдання:",about:["Розробка стратегії розвитку"]},{title:"Робота над задачою була розділена на два етапи:",about:["Аналіз конкурентів, ринку, виявлення зовнішніх можливостей та загроз","Аналіз сервісу медичного центру, аналіз роботи контакт центру, маркетингу, наявної бази пацієнтів та внутрішніх бізнес-процесів"]},{title:"В результаті комплексного аудиту підготували стратегію розвитку, яка передбачала рекомендації щодо:",about:["Управління маркетингом","Оптимізації роботи сервісу","Можливості МІС","Етапи розвитку напрямків та клініки вцілому"],comment:"В результаті співпраці - за 5 місяців ріст обороту в два рази"}]},{image:T2,category:"Cures",title:"Автоматизація комунікації з пацієнтами",about:["Створення та запуск 20 чат-ботів для клінік","Проведення консультацій та аудитів комунікацій клінік з пацієнтами","Розробка персональних протоколів спілкування з пацієнтами"],details:[{title:"Завдання:",about:["Автоматизація комунікації з пацієнтами"]},{title:"В результаті роботи над проєктом:",about:["Розвиток проєкту по створенню чат-ботів для медичних центрів","Розробка протоколів супроводу та опитувальників для клінік","Проведення зустрічей та комунікацій з клініками","Розробка алгоритмів та запуск чат-ботів"],comment:"В результаті співпраці над проєктом запуск 20 чат-ботів для медичних центрів"}]},{image:M2,category:"Клініка ім. ак. Юрія Спіженка",title:"Менторство, діагностика бізнес-процесів, маркетингу та сервісу, розробка стратегії розвитку",about:["Діагностика бізнес-процесів","Аудит маркетингу та сервісу","Розробка стратегії розвитку та маркетингу","Розробка та впровадження комунікаційної стратегії","Ведення маркетингових активностей "],details:[{title:"Завдання:",about:["Рестарт клініки у воєний час"]},{title:"Робота над задачею була розділена на три етапи:",about:["Діагностика конкурентів, ринку, виявлення зовнішніх можливостей та загроз","Діагностика сервісу медичного центру, аналіз роботи контакт центру, маркетингу, наявної бази пацієнтів та внутрішніх бізнес-процесів","Розробка та впровадження стратегії маркетингу, комунікації та сервісу, супровід рекламних кампаній, оптимізація бізнес-процесів"],comment:"В результаті співпраці над проєктом: збільшення доходу клініки, вихід на довоєний об’єм"}]},{image:R2,category:"KMKlab",title:"Діагностика маркетингу, сервісу, бізнес-процесів",about:["Аудит маркетингу та інструментів комунікацій","Аудит сервісу","Розробка рекомендацій щодо розвитку"],details:[{title:"Завдання:",about:["Аудит поточної маркетингової стратегії","Аудит сервісу","Формування рекомендацій по розвитку"]},{title:"Робота над задачою була розділена на два етапи:",about:["Відвідування всіх відділень лабораторій з метою формування рекомендацій по кожній локації","Аналіз поточної ситуації маркетингу та комунікацій, ведення соціальних мереж"],comment:"В результаті співпраці проаналізовано роботу відділу маркетингу та підрядників та надані рекомендації щодо структури відділу, сформовані подальші  кроки  маркетингової  та сервісної стратегії"}]},{image:I2,category:"Symmetrica",title:"Менторство, діагностика маркетингу, сервісу, бізнес-процесів",about:["Аудит маркетингу та сервісу","Розробка рекомендацій щодо розвитку","Оптимізація бізнес-процесів"],details:[{title:"Завдання:",about:["Діагностика поточної маркетингової діяльності та комунікацій","Аудит сервісу","Аудит роботи підрядників","Формування рекомендацій по розвитку"]},{title:"В результаті роботи над проєктом:",about:["Проведений поточний аудит шляху пацієнта, виявлені точки зростання сервісу","Проаналізовано роботу відділу маркетингу і підрядників та надані рекомендації щодо структури відділу","Надані рекомендації щодо формування подальших кроків маркетингової  та сервісної стратегії","Сформовані конверсійні показники та вектори руху","Надана менторська підтримка"]}]}],D2=j.section`
  padding-top: 40px;
  padding-bottom: 40px;
  @media screen and (min-width: 768px) {
    padding-top: 80px;
    padding-bottom: 80px;
  }
`,L2=j.h2`
  font-size: 48px;
  font-weight: 600;
  line-height: calc(56 / 48);

  margin-bottom: 40px;
`,A2=j.ul`
  display: flex;
  gap: 24px;
  flex-wrap: wrap;
  @media screen and (min-width: 768px) {
  }
`,z2=j.span`
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
`,F2=j.svg`
  fill: currentColor;
  stroke: currentColor;

  width: 24px;
  height: 24px;
`,V2=j.li`
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
`,N2=j.div`
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
`,$2=j.div`
  display: flex;
  flex-direction: column;
  gap: 16px;
`,U2=j.h4`
  font-size: ${e=>e.forDetail?"18px":"16px"};
  font-weight: 600;
  line-height: calc(${e=>e.forDetail?24/18:24/16});

  @media screen and (min-width: 768px) {
    font-size: ${e=>e.forDetail?"24px":"20px"};
    line-height: calc(${e=>e.forDetail?32/24:28/20});
  }
`,W2=j.ul`
  display: flex;
  flex-direction: column;
  gap: 8px;
`,B2=j.li`
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
`,H2=j.p`
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
`,Q2=j.svg`
  fill: currentColor;
  stroke: currentColor;
`,ed=({title:e,about:t,comment:n,additionalComment:r=!1})=>u.jsxs($2,{children:[u.jsx(U2,{forDetail:r,children:e}),u.jsx(W2,{children:t==null?void 0:t.map(i=>u.jsxs(B2,{children:[u.jsx(Q2,{children:u.jsx("use",{href:Z+"#icon-done"})}),i]},i))}),n&&u.jsx(H2,{additionalComment:r,children:n})]}),Y2=j.div`
  padding: 24px;
  display: flex;
  gap: 24px;
  flex-direction: column;

  color: var(--background-whitegrey, #f4f4f6);
  @media screen and (min-width: 768px) {
    padding: 40px;
  }
`,K2=j.h3`
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
`,G2=j.svg`
  fill: currentColor;
  stroke: currentColor;

  width: 24px;
  height: 24px;

  position: absolute;
  right: 28px;
  top: 28px;
`,q2=({dataList:{details:e,category:t}})=>{const n=Rs();return u.jsxs(Y2,{children:[u.jsxs("div",{children:[u.jsx(K2,{symbols:t.length,children:t}),n==="mobile"&&u.jsx(G2,{children:u.jsx("use",{href:Z+"#icon-close"})})]}),e.map((r,i)=>u.jsx(ed,{title:r.title,about:r.about,comment:r.comment,additionalComment:i===0},r.title))]})},X2=j.div`
  display: flex;
  flex-direction: column;
  gap: 24px;

  color: var(--typography-bluedark, #1b3641);
`,J2=j.h3`
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
`,Z2=j.img`
  height: 279px;
  width: 100%;
  border-radius: 8px;
  object-fit: cover;
  @media screen and (min-width: 768px) {
    height: 300px;
  }
`,eS=j.span`
  font-size: 14px;
  font-weight: 600;
  line-height: calc(18 / 14);
  text-align: center;
`,tS=({dataList:e,onClick:t})=>{const n=Rs(),{category:r,title:i,about:o=[],image:a}=e;return u.jsxs(X2,{onClick:t,children:[u.jsx(Z2,{src:a,alt:i}),u.jsx("div",{children:u.jsx(J2,{symbols:r.length,children:r})}),u.jsx(ed,{title:i,about:o}),n==="mobile"&&u.jsx(eS,{children:"Детальніше"})]})},nS=({item:e})=>{const[t,n]=M.useState(!1),r=Rs(),i=()=>{r==="mobile"&&n(o=>!o)};return u.jsxs(V2,{children:[u.jsx(tS,{dataList:e,onClick:i}),u.jsx(N2,{isVisible:t,onClick:i,image:e.image,className:!t&&r==="mobile"?"visually-hidden":"",children:u.jsx(q2,{dataList:e})})]})},rS=()=>{const e=Rs(),[t,n]=M.useState(e==="mobile"?[...gl.slice(0,3)]:[...gl]),r=()=>{t.length>4?n(i=>i.slice(0,3)):n([...gl])};return u.jsxs(D2,{id:"projects",className:"container",style:{paddingTop:"80px",paddingBottom:"80px"},children:[u.jsx(L2,{children:"Проєкти"}),u.jsx(A2,{children:t.map(i=>u.jsx(nS,{item:i},i.category))}),e==="mobile"&&u.jsxs(z2,{onClick:r,children:[t.length>3?"Менше проєктів":"Більше проєктів",u.jsx(F2,{children:u.jsx("use",{href:Z+`${t.length>3?"#icon-arrowup":"#icon-arrowdown"}`})})]})]})},iS=j.section`
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
`,oS=j.div`
  padding: 24px;
  border-radius: 16px;
  background: var(--background-white);

  @media screen and (min-width: 1920px) {
    padding: 80px;
    max-width: 828px;
    box-shadow: 0px 0px 8px 0px rgba(27, 54, 65, 0.08);
  }
`,aS=j.div`
  display: flex;
  flex-direction: column;
  gap: 16px;
  margin-bottom: 24px;

  @media screen and (min-width: 1920px) {
    gap: 40px;
    margin-bottom: 40px;
  }
`,sS=j.h2`
  color: var(--typography-bluedark);
  font-size: 24px;
  font-weight: 600;
  line-height: 32px;

  @media screen and (min-width: 1920px) {
    font-size: 48px;
    line-height: 56px;
  }
`,lS=j.h2`
  color: var(--typography-bluedark);
  font-weight: 500;
  font-size: 15px;
  line-height: 22px;

  @media screen and (min-width: 1920px) {
    font-size: 20px;
    line-height: 28px;
  }
`,uS=j.ul`
  display: flex;
  flex-direction: column;
  gap: 16px;

  @media screen and (min-width: 1920px) {
    gap: 24px;
  }
`,xl=j.li`
  display: flex;
  align-items: center;
  gap: 16px;
  border-radius: 16px;
  background: var(--background-whitegrey);
  padding: 16px;
`,vl=j.svg`
  width: 24px;
  height: 24px;
  fill: var(--background-white);
  stroke-width: 4px;
`,yl=j.p`
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
`,cS="/healthy-management-project/assets/mob_olga_with_book1x-el2yagUK.webp",dS="/healthy-management-project/assets/mob_olga_with_book@2x-VYbutQBw.jpg",fS="/healthy-management-project/assets/mob_olga_with_book1x-fAO0seCI.jpg",pS="/healthy-management-project/assets/olga_with_book1x-SrpRZlIL.webp",hS="/healthy-management-project/assets/olga_with_book2x-na-cAYtV.webp",mS="/healthy-management-project/assets/olga_with_book1x-o5i5B_Z7.jpg",gS="/healthy-management-project/assets/olga_with_book_768_1x-q5jz0R6v.webp",xS="/healthy-management-project/assets/olga_with_book_768@2x-aSleAY5U.webp",vS="/healthy-management-project/assets/olga_with_book_768_1x-xn58vLYQ.jpg",yS="/healthy-management-project/assets/olga_with_book_1440_1x-Z35ryV4g.webp",rp="/healthy-management-project/assets/olga_with_book_1440@2x-KX3o3AYH.webp",wS=()=>u.jsxs(iS,{className:"container",children:[u.jsxs(oS,{children:[u.jsxs(aS,{children:[u.jsx(sS,{children:"Принципи роботи"}),u.jsx(lS,{children:"Наші принципи роботи полягають у співдії з ціннісними брендами та командами, які готові до чесної співпраці, щоб сприяти досягненню поставлених цілей. Готові ділитися власним досвідом та створювати стратегії здорового менеджменту та розвитку, маркетингу та сервісу"})]}),u.jsxs(uS,{children:[u.jsxs(xl,{children:[u.jsx(vl,{children:u.jsx("use",{href:`${Z}#icon-done-yellow`})}),u.jsx(yl,{children:"Більше 18 років досвіду в маркетингу та комунікаціях"})]}),u.jsxs(xl,{children:[u.jsx(vl,{children:u.jsx("use",{href:`${Z}#icon-done-yellow`})}),u.jsx(yl,{children:"Глибоке розуміння бізнес-процесів медичних закладів"})]}),u.jsxs(xl,{children:[u.jsx(vl,{children:u.jsx("use",{href:`${Z}#icon-done-yellow`})}),u.jsx(yl,{children:"Використання принципів доказової медицини"})]})]})]}),u.jsx(ae,{minWidth:375,maxWidth:767,children:u.jsx("img",{srcSet:`${cS} 1x, ${dS} 2x`,src:fS,alt:"Ольга Поліщук - ваш ментор в медичній галузі",loading:"lazy"})}),u.jsx(ae,{minWidth:768,maxWidth:1439,children:u.jsx("img",{srcSet:`${gS} 1x, ${xS} 2x`,src:vS,alt:"Ольга Поліщук - ваш ментор в медичній галузі",loading:"lazy"})}),u.jsx(ae,{minWidth:1440,maxWidth:1919,children:u.jsx("img",{srcSet:`${yS} 1x, ${rp} 2x`,src:rp,alt:"Ольга Поліщук - ваш ментор в медичній галузі",loading:"lazy"})}),u.jsx(ae,{minWidth:1920,children:u.jsx("img",{srcSet:`${pS} 1x, ${hS} 2x`,src:mS,alt:"Ольга Поліщук - ваш ментор в медичній галузі",loading:"lazy"})})]}),bS=j.button`
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
`,SS=()=>{const[e,t]=M.useState(!1);M.useEffect(()=>{const r=()=>{const i=window.scrollY,o=document.getElementById("footer"),a=window.innerHeight+window.scrollY-o.offsetTop,l=Math.max(80,a);t(i>480||a>80),document.documentElement.style.setProperty("--scroll-to-top-bottom",`${l}px`)};return window.addEventListener("scroll",r),()=>{window.removeEventListener("scroll",r)}},[]);const n=()=>{window.scrollTo({top:0,behavior:"smooth"})};return u.jsx(u.Fragment,{children:e&&u.jsx(bS,{onClick:n,children:u.jsx("svg",{width:"24",height:"24",children:u.jsx("use",{href:`${Z}#icon-arrowup`})})})})};function ex(e,t){return function(){return e.apply(t,arguments)}}const{toString:kS}=Object.prototype,{getPrototypeOf:td}=Object,Is=(e=>t=>{const n=kS.call(t);return e[n]||(e[n]=n.slice(8,-1).toLowerCase())})(Object.create(null)),un=e=>(e=e.toLowerCase(),t=>Is(t)===e),Ds=e=>t=>typeof t===e,{isArray:ii}=Array,oo=Ds("undefined");function jS(e){return e!==null&&!oo(e)&&e.constructor!==null&&!oo(e.constructor)&&Lt(e.constructor.isBuffer)&&e.constructor.isBuffer(e)}const tx=un("ArrayBuffer");function CS(e){let t;return typeof ArrayBuffer<"u"&&ArrayBuffer.isView?t=ArrayBuffer.isView(e):t=e&&e.buffer&&tx(e.buffer),t}const ES=Ds("string"),Lt=Ds("function"),nx=Ds("number"),Ls=e=>e!==null&&typeof e=="object",OS=e=>e===!0||e===!1,fa=e=>{if(Is(e)!=="object")return!1;const t=td(e);return(t===null||t===Object.prototype||Object.getPrototypeOf(t)===null)&&!(Symbol.toStringTag in e)&&!(Symbol.iterator in e)},_S=un("Date"),PS=un("File"),TS=un("Blob"),MS=un("FileList"),RS=e=>Ls(e)&&Lt(e.pipe),IS=e=>{let t;return e&&(typeof FormData=="function"&&e instanceof FormData||Lt(e.append)&&((t=Is(e))==="formdata"||t==="object"&&Lt(e.toString)&&e.toString()==="[object FormData]"))},DS=un("URLSearchParams"),LS=e=>e.trim?e.trim():e.replace(/^[\s\uFEFF\xA0]+|[\s\uFEFF\xA0]+$/g,"");function mo(e,t,{allOwnKeys:n=!1}={}){if(e===null||typeof e>"u")return;let r,i;if(typeof e!="object"&&(e=[e]),ii(e))for(r=0,i=e.length;r<i;r++)t.call(null,e[r],r,e);else{const o=n?Object.getOwnPropertyNames(e):Object.keys(e),a=o.length;let l;for(r=0;r<a;r++)l=o[r],t.call(null,e[l],l,e)}}function rx(e,t){t=t.toLowerCase();const n=Object.keys(e);let r=n.length,i;for(;r-- >0;)if(i=n[r],t===i.toLowerCase())return i;return null}const ix=typeof globalThis<"u"?globalThis:typeof self<"u"?self:typeof window<"u"?window:global,ox=e=>!oo(e)&&e!==ix;function Fu(){const{caseless:e}=ox(this)&&this||{},t={},n=(r,i)=>{const o=e&&rx(t,i)||i;fa(t[o])&&fa(r)?t[o]=Fu(t[o],r):fa(r)?t[o]=Fu({},r):ii(r)?t[o]=r.slice():t[o]=r};for(let r=0,i=arguments.length;r<i;r++)arguments[r]&&mo(arguments[r],n);return t}const AS=(e,t,n,{allOwnKeys:r}={})=>(mo(t,(i,o)=>{n&&Lt(i)?e[o]=ex(i,n):e[o]=i},{allOwnKeys:r}),e),zS=e=>(e.charCodeAt(0)===65279&&(e=e.slice(1)),e),FS=(e,t,n,r)=>{e.prototype=Object.create(t.prototype,r),e.prototype.constructor=e,Object.defineProperty(e,"super",{value:t.prototype}),n&&Object.assign(e.prototype,n)},VS=(e,t,n,r)=>{let i,o,a;const l={};if(t=t||{},e==null)return t;do{for(i=Object.getOwnPropertyNames(e),o=i.length;o-- >0;)a=i[o],(!r||r(a,e,t))&&!l[a]&&(t[a]=e[a],l[a]=!0);e=n!==!1&&td(e)}while(e&&(!n||n(e,t))&&e!==Object.prototype);return t},NS=(e,t,n)=>{e=String(e),(n===void 0||n>e.length)&&(n=e.length),n-=t.length;const r=e.indexOf(t,n);return r!==-1&&r===n},$S=e=>{if(!e)return null;if(ii(e))return e;let t=e.length;if(!nx(t))return null;const n=new Array(t);for(;t-- >0;)n[t]=e[t];return n},US=(e=>t=>e&&t instanceof e)(typeof Uint8Array<"u"&&td(Uint8Array)),WS=(e,t)=>{const r=(e&&e[Symbol.iterator]).call(e);let i;for(;(i=r.next())&&!i.done;){const o=i.value;t.call(e,o[0],o[1])}},BS=(e,t)=>{let n;const r=[];for(;(n=e.exec(t))!==null;)r.push(n);return r},HS=un("HTMLFormElement"),QS=e=>e.toLowerCase().replace(/[-_\s]([a-z\d])(\w*)/g,function(n,r,i){return r.toUpperCase()+i}),ip=(({hasOwnProperty:e})=>(t,n)=>e.call(t,n))(Object.prototype),YS=un("RegExp"),ax=(e,t)=>{const n=Object.getOwnPropertyDescriptors(e),r={};mo(n,(i,o)=>{let a;(a=t(i,o,e))!==!1&&(r[o]=a||i)}),Object.defineProperties(e,r)},KS=e=>{ax(e,(t,n)=>{if(Lt(e)&&["arguments","caller","callee"].indexOf(n)!==-1)return!1;const r=e[n];if(Lt(r)){if(t.enumerable=!1,"writable"in t){t.writable=!1;return}t.set||(t.set=()=>{throw Error("Can not rewrite read-only method '"+n+"'")})}})},GS=(e,t)=>{const n={},r=i=>{i.forEach(o=>{n[o]=!0})};return ii(e)?r(e):r(String(e).split(t)),n},qS=()=>{},XS=(e,t)=>(e=+e,Number.isFinite(e)?e:t),wl="abcdefghijklmnopqrstuvwxyz",op="0123456789",sx={DIGIT:op,ALPHA:wl,ALPHA_DIGIT:wl+wl.toUpperCase()+op},JS=(e=16,t=sx.ALPHA_DIGIT)=>{let n="";const{length:r}=t;for(;e--;)n+=t[Math.random()*r|0];return n};function ZS(e){return!!(e&&Lt(e.append)&&e[Symbol.toStringTag]==="FormData"&&e[Symbol.iterator])}const e4=e=>{const t=new Array(10),n=(r,i)=>{if(Ls(r)){if(t.indexOf(r)>=0)return;if(!("toJSON"in r)){t[i]=r;const o=ii(r)?[]:{};return mo(r,(a,l)=>{const s=n(a,i+1);!oo(s)&&(o[l]=s)}),t[i]=void 0,o}}return r};return n(e,0)},t4=un("AsyncFunction"),n4=e=>e&&(Ls(e)||Lt(e))&&Lt(e.then)&&Lt(e.catch),R={isArray:ii,isArrayBuffer:tx,isBuffer:jS,isFormData:IS,isArrayBufferView:CS,isString:ES,isNumber:nx,isBoolean:OS,isObject:Ls,isPlainObject:fa,isUndefined:oo,isDate:_S,isFile:PS,isBlob:TS,isRegExp:YS,isFunction:Lt,isStream:RS,isURLSearchParams:DS,isTypedArray:US,isFileList:MS,forEach:mo,merge:Fu,extend:AS,trim:LS,stripBOM:zS,inherits:FS,toFlatObject:VS,kindOf:Is,kindOfTest:un,endsWith:NS,toArray:$S,forEachEntry:WS,matchAll:BS,isHTMLForm:HS,hasOwnProperty:ip,hasOwnProp:ip,reduceDescriptors:ax,freezeMethods:KS,toObjectSet:GS,toCamelCase:QS,noop:qS,toFiniteNumber:XS,findKey:rx,global:ix,isContextDefined:ox,ALPHABET:sx,generateString:JS,isSpecCompliantForm:ZS,toJSONObject:e4,isAsyncFn:t4,isThenable:n4};function fe(e,t,n,r,i){Error.call(this),Error.captureStackTrace?Error.captureStackTrace(this,this.constructor):this.stack=new Error().stack,this.message=e,this.name="AxiosError",t&&(this.code=t),n&&(this.config=n),r&&(this.request=r),i&&(this.response=i)}R.inherits(fe,Error,{toJSON:function(){return{message:this.message,name:this.name,description:this.description,number:this.number,fileName:this.fileName,lineNumber:this.lineNumber,columnNumber:this.columnNumber,stack:this.stack,config:R.toJSONObject(this.config),code:this.code,status:this.response&&this.response.status?this.response.status:null}}});const lx=fe.prototype,ux={};["ERR_BAD_OPTION_VALUE","ERR_BAD_OPTION","ECONNABORTED","ETIMEDOUT","ERR_NETWORK","ERR_FR_TOO_MANY_REDIRECTS","ERR_DEPRECATED","ERR_BAD_RESPONSE","ERR_BAD_REQUEST","ERR_CANCELED","ERR_NOT_SUPPORT","ERR_INVALID_URL"].forEach(e=>{ux[e]={value:e}});Object.defineProperties(fe,ux);Object.defineProperty(lx,"isAxiosError",{value:!0});fe.from=(e,t,n,r,i,o)=>{const a=Object.create(lx);return R.toFlatObject(e,a,function(s){return s!==Error.prototype},l=>l!=="isAxiosError"),fe.call(a,e.message,t,n,r,i),a.cause=e,a.name=e.name,o&&Object.assign(a,o),a};const r4=null;function Vu(e){return R.isPlainObject(e)||R.isArray(e)}function cx(e){return R.endsWith(e,"[]")?e.slice(0,-2):e}function ap(e,t,n){return e?e.concat(t).map(function(i,o){return i=cx(i),!n&&o?"["+i+"]":i}).join(n?".":""):t}function i4(e){return R.isArray(e)&&!e.some(Vu)}const o4=R.toFlatObject(R,{},null,function(t){return/^is[A-Z]/.test(t)});function As(e,t,n){if(!R.isObject(e))throw new TypeError("target must be an object");t=t||new FormData,n=R.toFlatObject(n,{metaTokens:!0,dots:!1,indexes:!1},!1,function(x,w){return!R.isUndefined(w[x])});const r=n.metaTokens,i=n.visitor||d,o=n.dots,a=n.indexes,s=(n.Blob||typeof Blob<"u"&&Blob)&&R.isSpecCompliantForm(t);if(!R.isFunction(i))throw new TypeError("visitor must be a function");function c(g){if(g===null)return"";if(R.isDate(g))return g.toISOString();if(!s&&R.isBlob(g))throw new fe("Blob is not supported. Use a Buffer instead.");return R.isArrayBuffer(g)||R.isTypedArray(g)?s&&typeof Blob=="function"?new Blob([g]):Buffer.from(g):g}function d(g,x,w){let p=g;if(g&&!w&&typeof g=="object"){if(R.endsWith(x,"{}"))x=r?x:x.slice(0,-2),g=JSON.stringify(g);else if(R.isArray(g)&&i4(g)||(R.isFileList(g)||R.endsWith(x,"[]"))&&(p=R.toArray(g)))return x=cx(x),p.forEach(function(v,b){!(R.isUndefined(v)||v===null)&&t.append(a===!0?ap([x],b,o):a===null?x:x+"[]",c(v))}),!1}return Vu(g)?!0:(t.append(ap(w,x,o),c(g)),!1)}const f=[],m=Object.assign(o4,{defaultVisitor:d,convertValue:c,isVisitable:Vu});function y(g,x){if(!R.isUndefined(g)){if(f.indexOf(g)!==-1)throw Error("Circular reference detected in "+x.join("."));f.push(g),R.forEach(g,function(p,h){(!(R.isUndefined(p)||p===null)&&i.call(t,p,R.isString(h)?h.trim():h,x,m))===!0&&y(p,x?x.concat(h):[h])}),f.pop()}}if(!R.isObject(e))throw new TypeError("data must be an object");return y(e),t}function sp(e){const t={"!":"%21","'":"%27","(":"%28",")":"%29","~":"%7E","%20":"+","%00":"\0"};return encodeURIComponent(e).replace(/[!'()~]|%20|%00/g,function(r){return t[r]})}function nd(e,t){this._pairs=[],e&&As(e,this,t)}const dx=nd.prototype;dx.append=function(t,n){this._pairs.push([t,n])};dx.toString=function(t){const n=t?function(r){return t.call(this,r,sp)}:sp;return this._pairs.map(function(i){return n(i[0])+"="+n(i[1])},"").join("&")};function a4(e){return encodeURIComponent(e).replace(/%3A/gi,":").replace(/%24/g,"$").replace(/%2C/gi,",").replace(/%20/g,"+").replace(/%5B/gi,"[").replace(/%5D/gi,"]")}function fx(e,t,n){if(!t)return e;const r=n&&n.encode||a4,i=n&&n.serialize;let o;if(i?o=i(t,n):o=R.isURLSearchParams(t)?t.toString():new nd(t,n).toString(r),o){const a=e.indexOf("#");a!==-1&&(e=e.slice(0,a)),e+=(e.indexOf("?")===-1?"?":"&")+o}return e}class s4{constructor(){this.handlers=[]}use(t,n,r){return this.handlers.push({fulfilled:t,rejected:n,synchronous:r?r.synchronous:!1,runWhen:r?r.runWhen:null}),this.handlers.length-1}eject(t){this.handlers[t]&&(this.handlers[t]=null)}clear(){this.handlers&&(this.handlers=[])}forEach(t){R.forEach(this.handlers,function(r){r!==null&&t(r)})}}const lp=s4,px={silentJSONParsing:!0,forcedJSONParsing:!0,clarifyTimeoutError:!1},l4=typeof URLSearchParams<"u"?URLSearchParams:nd,u4=typeof FormData<"u"?FormData:null,c4=typeof Blob<"u"?Blob:null,d4={isBrowser:!0,classes:{URLSearchParams:l4,FormData:u4,Blob:c4},protocols:["http","https","file","blob","url","data"]},hx=typeof window<"u"&&typeof document<"u",f4=(e=>hx&&["ReactNative","NativeScript","NS"].indexOf(e)<0)(typeof navigator<"u"&&navigator.product),p4=typeof WorkerGlobalScope<"u"&&self instanceof WorkerGlobalScope&&typeof self.importScripts=="function",h4=Object.freeze(Object.defineProperty({__proto__:null,hasBrowserEnv:hx,hasStandardBrowserEnv:f4,hasStandardBrowserWebWorkerEnv:p4},Symbol.toStringTag,{value:"Module"})),nn={...h4,...d4};function m4(e,t){return As(e,new nn.classes.URLSearchParams,Object.assign({visitor:function(n,r,i,o){return nn.isNode&&R.isBuffer(n)?(this.append(r,n.toString("base64")),!1):o.defaultVisitor.apply(this,arguments)}},t))}function g4(e){return R.matchAll(/\w+|\[(\w*)]/g,e).map(t=>t[0]==="[]"?"":t[1]||t[0])}function x4(e){const t={},n=Object.keys(e);let r;const i=n.length;let o;for(r=0;r<i;r++)o=n[r],t[o]=e[o];return t}function mx(e){function t(n,r,i,o){let a=n[o++];const l=Number.isFinite(+a),s=o>=n.length;return a=!a&&R.isArray(i)?i.length:a,s?(R.hasOwnProp(i,a)?i[a]=[i[a],r]:i[a]=r,!l):((!i[a]||!R.isObject(i[a]))&&(i[a]=[]),t(n,r,i[a],o)&&R.isArray(i[a])&&(i[a]=x4(i[a])),!l)}if(R.isFormData(e)&&R.isFunction(e.entries)){const n={};return R.forEachEntry(e,(r,i)=>{t(g4(r),i,n,0)}),n}return null}function v4(e,t,n){if(R.isString(e))try{return(t||JSON.parse)(e),R.trim(e)}catch(r){if(r.name!=="SyntaxError")throw r}return(n||JSON.stringify)(e)}const rd={transitional:px,adapter:["xhr","http"],transformRequest:[function(t,n){const r=n.getContentType()||"",i=r.indexOf("application/json")>-1,o=R.isObject(t);if(o&&R.isHTMLForm(t)&&(t=new FormData(t)),R.isFormData(t))return i&&i?JSON.stringify(mx(t)):t;if(R.isArrayBuffer(t)||R.isBuffer(t)||R.isStream(t)||R.isFile(t)||R.isBlob(t))return t;if(R.isArrayBufferView(t))return t.buffer;if(R.isURLSearchParams(t))return n.setContentType("application/x-www-form-urlencoded;charset=utf-8",!1),t.toString();let l;if(o){if(r.indexOf("application/x-www-form-urlencoded")>-1)return m4(t,this.formSerializer).toString();if((l=R.isFileList(t))||r.indexOf("multipart/form-data")>-1){const s=this.env&&this.env.FormData;return As(l?{"files[]":t}:t,s&&new s,this.formSerializer)}}return o||i?(n.setContentType("application/json",!1),v4(t)):t}],transformResponse:[function(t){const n=this.transitional||rd.transitional,r=n&&n.forcedJSONParsing,i=this.responseType==="json";if(t&&R.isString(t)&&(r&&!this.responseType||i)){const a=!(n&&n.silentJSONParsing)&&i;try{return JSON.parse(t)}catch(l){if(a)throw l.name==="SyntaxError"?fe.from(l,fe.ERR_BAD_RESPONSE,this,null,this.response):l}}return t}],timeout:0,xsrfCookieName:"XSRF-TOKEN",xsrfHeaderName:"X-XSRF-TOKEN",maxContentLength:-1,maxBodyLength:-1,env:{FormData:nn.classes.FormData,Blob:nn.classes.Blob},validateStatus:function(t){return t>=200&&t<300},headers:{common:{Accept:"application/json, text/plain, */*","Content-Type":void 0}}};R.forEach(["delete","get","head","post","put","patch"],e=>{rd.headers[e]={}});const id=rd,y4=R.toObjectSet(["age","authorization","content-length","content-type","etag","expires","from","host","if-modified-since","if-unmodified-since","last-modified","location","max-forwards","proxy-authorization","referer","retry-after","user-agent"]),w4=e=>{const t={};let n,r,i;return e&&e.split(`
`).forEach(function(a){i=a.indexOf(":"),n=a.substring(0,i).trim().toLowerCase(),r=a.substring(i+1).trim(),!(!n||t[n]&&y4[n])&&(n==="set-cookie"?t[n]?t[n].push(r):t[n]=[r]:t[n]=t[n]?t[n]+", "+r:r)}),t},up=Symbol("internals");function vi(e){return e&&String(e).trim().toLowerCase()}function pa(e){return e===!1||e==null?e:R.isArray(e)?e.map(pa):String(e)}function b4(e){const t=Object.create(null),n=/([^\s,;=]+)\s*(?:=\s*([^,;]+))?/g;let r;for(;r=n.exec(e);)t[r[1]]=r[2];return t}const S4=e=>/^[-_a-zA-Z0-9^`|~,!#$%&'*+.]+$/.test(e.trim());function bl(e,t,n,r,i){if(R.isFunction(r))return r.call(this,t,n);if(i&&(t=n),!!R.isString(t)){if(R.isString(r))return t.indexOf(r)!==-1;if(R.isRegExp(r))return r.test(t)}}function k4(e){return e.trim().toLowerCase().replace(/([a-z\d])(\w*)/g,(t,n,r)=>n.toUpperCase()+r)}function j4(e,t){const n=R.toCamelCase(" "+t);["get","set","has"].forEach(r=>{Object.defineProperty(e,r+n,{value:function(i,o,a){return this[r].call(this,t,i,o,a)},configurable:!0})})}class zs{constructor(t){t&&this.set(t)}set(t,n,r){const i=this;function o(l,s,c){const d=vi(s);if(!d)throw new Error("header name must be a non-empty string");const f=R.findKey(i,d);(!f||i[f]===void 0||c===!0||c===void 0&&i[f]!==!1)&&(i[f||s]=pa(l))}const a=(l,s)=>R.forEach(l,(c,d)=>o(c,d,s));return R.isPlainObject(t)||t instanceof this.constructor?a(t,n):R.isString(t)&&(t=t.trim())&&!S4(t)?a(w4(t),n):t!=null&&o(n,t,r),this}get(t,n){if(t=vi(t),t){const r=R.findKey(this,t);if(r){const i=this[r];if(!n)return i;if(n===!0)return b4(i);if(R.isFunction(n))return n.call(this,i,r);if(R.isRegExp(n))return n.exec(i);throw new TypeError("parser must be boolean|regexp|function")}}}has(t,n){if(t=vi(t),t){const r=R.findKey(this,t);return!!(r&&this[r]!==void 0&&(!n||bl(this,this[r],r,n)))}return!1}delete(t,n){const r=this;let i=!1;function o(a){if(a=vi(a),a){const l=R.findKey(r,a);l&&(!n||bl(r,r[l],l,n))&&(delete r[l],i=!0)}}return R.isArray(t)?t.forEach(o):o(t),i}clear(t){const n=Object.keys(this);let r=n.length,i=!1;for(;r--;){const o=n[r];(!t||bl(this,this[o],o,t,!0))&&(delete this[o],i=!0)}return i}normalize(t){const n=this,r={};return R.forEach(this,(i,o)=>{const a=R.findKey(r,o);if(a){n[a]=pa(i),delete n[o];return}const l=t?k4(o):String(o).trim();l!==o&&delete n[o],n[l]=pa(i),r[l]=!0}),this}concat(...t){return this.constructor.concat(this,...t)}toJSON(t){const n=Object.create(null);return R.forEach(this,(r,i)=>{r!=null&&r!==!1&&(n[i]=t&&R.isArray(r)?r.join(", "):r)}),n}[Symbol.iterator](){return Object.entries(this.toJSON())[Symbol.iterator]()}toString(){return Object.entries(this.toJSON()).map(([t,n])=>t+": "+n).join(`
`)}get[Symbol.toStringTag](){return"AxiosHeaders"}static from(t){return t instanceof this?t:new this(t)}static concat(t,...n){const r=new this(t);return n.forEach(i=>r.set(i)),r}static accessor(t){const r=(this[up]=this[up]={accessors:{}}).accessors,i=this.prototype;function o(a){const l=vi(a);r[l]||(j4(i,a),r[l]=!0)}return R.isArray(t)?t.forEach(o):o(t),this}}zs.accessor(["Content-Type","Content-Length","Accept","Accept-Encoding","User-Agent","Authorization"]);R.reduceDescriptors(zs.prototype,({value:e},t)=>{let n=t[0].toUpperCase()+t.slice(1);return{get:()=>e,set(r){this[n]=r}}});R.freezeMethods(zs);const yn=zs;function Sl(e,t){const n=this||id,r=t||n,i=yn.from(r.headers);let o=r.data;return R.forEach(e,function(l){o=l.call(n,o,i.normalize(),t?t.status:void 0)}),i.normalize(),o}function gx(e){return!!(e&&e.__CANCEL__)}function go(e,t,n){fe.call(this,e??"canceled",fe.ERR_CANCELED,t,n),this.name="CanceledError"}R.inherits(go,fe,{__CANCEL__:!0});function C4(e,t,n){const r=n.config.validateStatus;!n.status||!r||r(n.status)?e(n):t(new fe("Request failed with status code "+n.status,[fe.ERR_BAD_REQUEST,fe.ERR_BAD_RESPONSE][Math.floor(n.status/100)-4],n.config,n.request,n))}const E4=nn.hasStandardBrowserEnv?{write(e,t,n,r,i,o){const a=[e+"="+encodeURIComponent(t)];R.isNumber(n)&&a.push("expires="+new Date(n).toGMTString()),R.isString(r)&&a.push("path="+r),R.isString(i)&&a.push("domain="+i),o===!0&&a.push("secure"),document.cookie=a.join("; ")},read(e){const t=document.cookie.match(new RegExp("(^|;\\s*)("+e+")=([^;]*)"));return t?decodeURIComponent(t[3]):null},remove(e){this.write(e,"",Date.now()-864e5)}}:{write(){},read(){return null},remove(){}};function O4(e){return/^([a-z][a-z\d+\-.]*:)?\/\//i.test(e)}function _4(e,t){return t?e.replace(/\/+$/,"")+"/"+t.replace(/^\/+/,""):e}function xx(e,t){return e&&!O4(t)?_4(e,t):t}const P4=nn.hasStandardBrowserEnv?function(){const t=/(msie|trident)/i.test(navigator.userAgent),n=document.createElement("a");let r;function i(o){let a=o;return t&&(n.setAttribute("href",a),a=n.href),n.setAttribute("href",a),{href:n.href,protocol:n.protocol?n.protocol.replace(/:$/,""):"",host:n.host,search:n.search?n.search.replace(/^\?/,""):"",hash:n.hash?n.hash.replace(/^#/,""):"",hostname:n.hostname,port:n.port,pathname:n.pathname.charAt(0)==="/"?n.pathname:"/"+n.pathname}}return r=i(window.location.href),function(a){const l=R.isString(a)?i(a):a;return l.protocol===r.protocol&&l.host===r.host}}():function(){return function(){return!0}}();function T4(e){const t=/^([-+\w]{1,25})(:?\/\/|:)/.exec(e);return t&&t[1]||""}function M4(e,t){e=e||10;const n=new Array(e),r=new Array(e);let i=0,o=0,a;return t=t!==void 0?t:1e3,function(s){const c=Date.now(),d=r[o];a||(a=c),n[i]=s,r[i]=c;let f=o,m=0;for(;f!==i;)m+=n[f++],f=f%e;if(i=(i+1)%e,i===o&&(o=(o+1)%e),c-a<t)return;const y=d&&c-d;return y?Math.round(m*1e3/y):void 0}}function cp(e,t){let n=0;const r=M4(50,250);return i=>{const o=i.loaded,a=i.lengthComputable?i.total:void 0,l=o-n,s=r(l),c=o<=a;n=o;const d={loaded:o,total:a,progress:a?o/a:void 0,bytes:l,rate:s||void 0,estimated:s&&a&&c?(a-o)/s:void 0,event:i};d[t?"download":"upload"]=!0,e(d)}}const R4=typeof XMLHttpRequest<"u",I4=R4&&function(e){return new Promise(function(n,r){let i=e.data;const o=yn.from(e.headers).normalize();let{responseType:a,withXSRFToken:l}=e,s;function c(){e.cancelToken&&e.cancelToken.unsubscribe(s),e.signal&&e.signal.removeEventListener("abort",s)}let d;if(R.isFormData(i)){if(nn.hasStandardBrowserEnv||nn.hasStandardBrowserWebWorkerEnv)o.setContentType(!1);else if((d=o.getContentType())!==!1){const[x,...w]=d?d.split(";").map(p=>p.trim()).filter(Boolean):[];o.setContentType([x||"multipart/form-data",...w].join("; "))}}let f=new XMLHttpRequest;if(e.auth){const x=e.auth.username||"",w=e.auth.password?unescape(encodeURIComponent(e.auth.password)):"";o.set("Authorization","Basic "+btoa(x+":"+w))}const m=xx(e.baseURL,e.url);f.open(e.method.toUpperCase(),fx(m,e.params,e.paramsSerializer),!0),f.timeout=e.timeout;function y(){if(!f)return;const x=yn.from("getAllResponseHeaders"in f&&f.getAllResponseHeaders()),p={data:!a||a==="text"||a==="json"?f.responseText:f.response,status:f.status,statusText:f.statusText,headers:x,config:e,request:f};C4(function(v){n(v),c()},function(v){r(v),c()},p),f=null}if("onloadend"in f?f.onloadend=y:f.onreadystatechange=function(){!f||f.readyState!==4||f.status===0&&!(f.responseURL&&f.responseURL.indexOf("file:")===0)||setTimeout(y)},f.onabort=function(){f&&(r(new fe("Request aborted",fe.ECONNABORTED,e,f)),f=null)},f.onerror=function(){r(new fe("Network Error",fe.ERR_NETWORK,e,f)),f=null},f.ontimeout=function(){let w=e.timeout?"timeout of "+e.timeout+"ms exceeded":"timeout exceeded";const p=e.transitional||px;e.timeoutErrorMessage&&(w=e.timeoutErrorMessage),r(new fe(w,p.clarifyTimeoutError?fe.ETIMEDOUT:fe.ECONNABORTED,e,f)),f=null},nn.hasStandardBrowserEnv&&(l&&R.isFunction(l)&&(l=l(e)),l||l!==!1&&P4(m))){const x=e.xsrfHeaderName&&e.xsrfCookieName&&E4.read(e.xsrfCookieName);x&&o.set(e.xsrfHeaderName,x)}i===void 0&&o.setContentType(null),"setRequestHeader"in f&&R.forEach(o.toJSON(),function(w,p){f.setRequestHeader(p,w)}),R.isUndefined(e.withCredentials)||(f.withCredentials=!!e.withCredentials),a&&a!=="json"&&(f.responseType=e.responseType),typeof e.onDownloadProgress=="function"&&f.addEventListener("progress",cp(e.onDownloadProgress,!0)),typeof e.onUploadProgress=="function"&&f.upload&&f.upload.addEventListener("progress",cp(e.onUploadProgress)),(e.cancelToken||e.signal)&&(s=x=>{f&&(r(!x||x.type?new go(null,e,f):x),f.abort(),f=null)},e.cancelToken&&e.cancelToken.subscribe(s),e.signal&&(e.signal.aborted?s():e.signal.addEventListener("abort",s)));const g=T4(m);if(g&&nn.protocols.indexOf(g)===-1){r(new fe("Unsupported protocol "+g+":",fe.ERR_BAD_REQUEST,e));return}f.send(i||null)})},Nu={http:r4,xhr:I4};R.forEach(Nu,(e,t)=>{if(e){try{Object.defineProperty(e,"name",{value:t})}catch{}Object.defineProperty(e,"adapterName",{value:t})}});const dp=e=>`- ${e}`,D4=e=>R.isFunction(e)||e===null||e===!1,vx={getAdapter:e=>{e=R.isArray(e)?e:[e];const{length:t}=e;let n,r;const i={};for(let o=0;o<t;o++){n=e[o];let a;if(r=n,!D4(n)&&(r=Nu[(a=String(n)).toLowerCase()],r===void 0))throw new fe(`Unknown adapter '${a}'`);if(r)break;i[a||"#"+o]=r}if(!r){const o=Object.entries(i).map(([l,s])=>`adapter ${l} `+(s===!1?"is not supported by the environment":"is not available in the build"));let a=t?o.length>1?`since :
`+o.map(dp).join(`
`):" "+dp(o[0]):"as no adapter specified";throw new fe("There is no suitable adapter to dispatch the request "+a,"ERR_NOT_SUPPORT")}return r},adapters:Nu};function kl(e){if(e.cancelToken&&e.cancelToken.throwIfRequested(),e.signal&&e.signal.aborted)throw new go(null,e)}function fp(e){return kl(e),e.headers=yn.from(e.headers),e.data=Sl.call(e,e.transformRequest),["post","put","patch"].indexOf(e.method)!==-1&&e.headers.setContentType("application/x-www-form-urlencoded",!1),vx.getAdapter(e.adapter||id.adapter)(e).then(function(r){return kl(e),r.data=Sl.call(e,e.transformResponse,r),r.headers=yn.from(r.headers),r},function(r){return gx(r)||(kl(e),r&&r.response&&(r.response.data=Sl.call(e,e.transformResponse,r.response),r.response.headers=yn.from(r.response.headers))),Promise.reject(r)})}const pp=e=>e instanceof yn?e.toJSON():e;function Zr(e,t){t=t||{};const n={};function r(c,d,f){return R.isPlainObject(c)&&R.isPlainObject(d)?R.merge.call({caseless:f},c,d):R.isPlainObject(d)?R.merge({},d):R.isArray(d)?d.slice():d}function i(c,d,f){if(R.isUndefined(d)){if(!R.isUndefined(c))return r(void 0,c,f)}else return r(c,d,f)}function o(c,d){if(!R.isUndefined(d))return r(void 0,d)}function a(c,d){if(R.isUndefined(d)){if(!R.isUndefined(c))return r(void 0,c)}else return r(void 0,d)}function l(c,d,f){if(f in t)return r(c,d);if(f in e)return r(void 0,c)}const s={url:o,method:o,data:o,baseURL:a,transformRequest:a,transformResponse:a,paramsSerializer:a,timeout:a,timeoutMessage:a,withCredentials:a,withXSRFToken:a,adapter:a,responseType:a,xsrfCookieName:a,xsrfHeaderName:a,onUploadProgress:a,onDownloadProgress:a,decompress:a,maxContentLength:a,maxBodyLength:a,beforeRedirect:a,transport:a,httpAgent:a,httpsAgent:a,cancelToken:a,socketPath:a,responseEncoding:a,validateStatus:l,headers:(c,d)=>i(pp(c),pp(d),!0)};return R.forEach(Object.keys(Object.assign({},e,t)),function(d){const f=s[d]||i,m=f(e[d],t[d],d);R.isUndefined(m)&&f!==l||(n[d]=m)}),n}const yx="1.6.2",od={};["object","boolean","number","function","string","symbol"].forEach((e,t)=>{od[e]=function(r){return typeof r===e||"a"+(t<1?"n ":" ")+e}});const hp={};od.transitional=function(t,n,r){function i(o,a){return"[Axios v"+yx+"] Transitional option '"+o+"'"+a+(r?". "+r:"")}return(o,a,l)=>{if(t===!1)throw new fe(i(a," has been removed"+(n?" in "+n:"")),fe.ERR_DEPRECATED);return n&&!hp[a]&&(hp[a]=!0,console.warn(i(a," has been deprecated since v"+n+" and will be removed in the near future"))),t?t(o,a,l):!0}};function L4(e,t,n){if(typeof e!="object")throw new fe("options must be an object",fe.ERR_BAD_OPTION_VALUE);const r=Object.keys(e);let i=r.length;for(;i-- >0;){const o=r[i],a=t[o];if(a){const l=e[o],s=l===void 0||a(l,o,e);if(s!==!0)throw new fe("option "+o+" must be "+s,fe.ERR_BAD_OPTION_VALUE);continue}if(n!==!0)throw new fe("Unknown option "+o,fe.ERR_BAD_OPTION)}}const $u={assertOptions:L4,validators:od},Ln=$u.validators;class Ba{constructor(t){this.defaults=t,this.interceptors={request:new lp,response:new lp}}request(t,n){typeof t=="string"?(n=n||{},n.url=t):n=t||{},n=Zr(this.defaults,n);const{transitional:r,paramsSerializer:i,headers:o}=n;r!==void 0&&$u.assertOptions(r,{silentJSONParsing:Ln.transitional(Ln.boolean),forcedJSONParsing:Ln.transitional(Ln.boolean),clarifyTimeoutError:Ln.transitional(Ln.boolean)},!1),i!=null&&(R.isFunction(i)?n.paramsSerializer={serialize:i}:$u.assertOptions(i,{encode:Ln.function,serialize:Ln.function},!0)),n.method=(n.method||this.defaults.method||"get").toLowerCase();let a=o&&R.merge(o.common,o[n.method]);o&&R.forEach(["delete","get","head","post","put","patch","common"],g=>{delete o[g]}),n.headers=yn.concat(a,o);const l=[];let s=!0;this.interceptors.request.forEach(function(x){typeof x.runWhen=="function"&&x.runWhen(n)===!1||(s=s&&x.synchronous,l.unshift(x.fulfilled,x.rejected))});const c=[];this.interceptors.response.forEach(function(x){c.push(x.fulfilled,x.rejected)});let d,f=0,m;if(!s){const g=[fp.bind(this),void 0];for(g.unshift.apply(g,l),g.push.apply(g,c),m=g.length,d=Promise.resolve(n);f<m;)d=d.then(g[f++],g[f++]);return d}m=l.length;let y=n;for(f=0;f<m;){const g=l[f++],x=l[f++];try{y=g(y)}catch(w){x.call(this,w);break}}try{d=fp.call(this,y)}catch(g){return Promise.reject(g)}for(f=0,m=c.length;f<m;)d=d.then(c[f++],c[f++]);return d}getUri(t){t=Zr(this.defaults,t);const n=xx(t.baseURL,t.url);return fx(n,t.params,t.paramsSerializer)}}R.forEach(["delete","get","head","options"],function(t){Ba.prototype[t]=function(n,r){return this.request(Zr(r||{},{method:t,url:n,data:(r||{}).data}))}});R.forEach(["post","put","patch"],function(t){function n(r){return function(o,a,l){return this.request(Zr(l||{},{method:t,headers:r?{"Content-Type":"multipart/form-data"}:{},url:o,data:a}))}}Ba.prototype[t]=n(),Ba.prototype[t+"Form"]=n(!0)});const ha=Ba;class ad{constructor(t){if(typeof t!="function")throw new TypeError("executor must be a function.");let n;this.promise=new Promise(function(o){n=o});const r=this;this.promise.then(i=>{if(!r._listeners)return;let o=r._listeners.length;for(;o-- >0;)r._listeners[o](i);r._listeners=null}),this.promise.then=i=>{let o;const a=new Promise(l=>{r.subscribe(l),o=l}).then(i);return a.cancel=function(){r.unsubscribe(o)},a},t(function(o,a,l){r.reason||(r.reason=new go(o,a,l),n(r.reason))})}throwIfRequested(){if(this.reason)throw this.reason}subscribe(t){if(this.reason){t(this.reason);return}this._listeners?this._listeners.push(t):this._listeners=[t]}unsubscribe(t){if(!this._listeners)return;const n=this._listeners.indexOf(t);n!==-1&&this._listeners.splice(n,1)}static source(){let t;return{token:new ad(function(i){t=i}),cancel:t}}}const A4=ad;function z4(e){return function(n){return e.apply(null,n)}}function F4(e){return R.isObject(e)&&e.isAxiosError===!0}const Uu={Continue:100,SwitchingProtocols:101,Processing:102,EarlyHints:103,Ok:200,Created:201,Accepted:202,NonAuthoritativeInformation:203,NoContent:204,ResetContent:205,PartialContent:206,MultiStatus:207,AlreadyReported:208,ImUsed:226,MultipleChoices:300,MovedPermanently:301,Found:302,SeeOther:303,NotModified:304,UseProxy:305,Unused:306,TemporaryRedirect:307,PermanentRedirect:308,BadRequest:400,Unauthorized:401,PaymentRequired:402,Forbidden:403,NotFound:404,MethodNotAllowed:405,NotAcceptable:406,ProxyAuthenticationRequired:407,RequestTimeout:408,Conflict:409,Gone:410,LengthRequired:411,PreconditionFailed:412,PayloadTooLarge:413,UriTooLong:414,UnsupportedMediaType:415,RangeNotSatisfiable:416,ExpectationFailed:417,ImATeapot:418,MisdirectedRequest:421,UnprocessableEntity:422,Locked:423,FailedDependency:424,TooEarly:425,UpgradeRequired:426,PreconditionRequired:428,TooManyRequests:429,RequestHeaderFieldsTooLarge:431,UnavailableForLegalReasons:451,InternalServerError:500,NotImplemented:501,BadGateway:502,ServiceUnavailable:503,GatewayTimeout:504,HttpVersionNotSupported:505,VariantAlsoNegotiates:506,InsufficientStorage:507,LoopDetected:508,NotExtended:510,NetworkAuthenticationRequired:511};Object.entries(Uu).forEach(([e,t])=>{Uu[t]=e});const V4=Uu;function wx(e){const t=new ha(e),n=ex(ha.prototype.request,t);return R.extend(n,ha.prototype,t,{allOwnKeys:!0}),R.extend(n,t,null,{allOwnKeys:!0}),n.create=function(i){return wx(Zr(e,i))},n}const $e=wx(id);$e.Axios=ha;$e.CanceledError=go;$e.CancelToken=A4;$e.isCancel=gx;$e.VERSION=yx;$e.toFormData=As;$e.AxiosError=fe;$e.Cancel=$e.CanceledError;$e.all=function(t){return Promise.all(t)};$e.spread=z4;$e.isAxiosError=F4;$e.mergeConfig=Zr;$e.AxiosHeaders=yn;$e.formToJSON=e=>mx(R.isHTMLForm(e)?new FormData(e):e);$e.getAdapter=vx.getAdapter;$e.HttpStatusCode=V4;$e.default=$e;const N4=$e;function mr(e){"@babel/helpers - typeof";return mr=typeof Symbol=="function"&&typeof Symbol.iterator=="symbol"?function(t){return typeof t}:function(t){return t&&typeof Symbol=="function"&&t.constructor===Symbol&&t!==Symbol.prototype?"symbol":typeof t},mr(e)}function $4(e,t){if(mr(e)!=="object"||e===null)return e;var n=e[Symbol.toPrimitive];if(n!==void 0){var r=n.call(e,t||"default");if(mr(r)!=="object")return r;throw new TypeError("@@toPrimitive must return a primitive value.")}return(t==="string"?String:Number)(e)}function bx(e){var t=$4(e,"string");return mr(t)==="symbol"?t:String(t)}function Ei(e,t,n){return t=bx(t),t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function mp(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter(function(i){return Object.getOwnPropertyDescriptor(e,i).enumerable})),n.push.apply(n,r)}return n}function G(e){for(var t=1;t<arguments.length;t++){var n=arguments[t]!=null?arguments[t]:{};t%2?mp(Object(n),!0).forEach(function(r){Ei(e,r,n[r])}):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):mp(Object(n)).forEach(function(r){Object.defineProperty(e,r,Object.getOwnPropertyDescriptor(n,r))})}return e}function U4(e){if(Array.isArray(e))return e}function W4(e,t){var n=e==null?null:typeof Symbol<"u"&&e[Symbol.iterator]||e["@@iterator"];if(n!=null){var r,i,o,a,l=[],s=!0,c=!1;try{if(o=(n=n.call(e)).next,t===0){if(Object(n)!==n)return;s=!1}else for(;!(s=(r=o.call(n)).done)&&(l.push(r.value),l.length!==t);s=!0);}catch(d){c=!0,i=d}finally{try{if(!s&&n.return!=null&&(a=n.return(),Object(a)!==a))return}finally{if(c)throw i}}return l}}function Wu(e,t){(t==null||t>e.length)&&(t=e.length);for(var n=0,r=new Array(t);n<t;n++)r[n]=e[n];return r}function Sx(e,t){if(e){if(typeof e=="string")return Wu(e,t);var n=Object.prototype.toString.call(e).slice(8,-1);if(n==="Object"&&e.constructor&&(n=e.constructor.name),n==="Map"||n==="Set")return Array.from(e);if(n==="Arguments"||/^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n))return Wu(e,t)}}function B4(){throw new TypeError(`Invalid attempt to destructure non-iterable instance.
In order to be iterable, non-array objects must have a [Symbol.iterator]() method.`)}function wn(e,t){return U4(e)||W4(e,t)||Sx(e,t)||B4()}function H4(e,t){if(e==null)return{};var n={},r=Object.keys(e),i,o;for(o=0;o<r.length;o++)i=r[o],!(t.indexOf(i)>=0)&&(n[i]=e[i]);return n}function En(e,t){if(e==null)return{};var n=H4(e,t),r,i;if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(i=0;i<o.length;i++)r=o[i],!(t.indexOf(r)>=0)&&Object.prototype.propertyIsEnumerable.call(e,r)&&(n[r]=e[r])}return n}var Q4=["defaultInputValue","defaultMenuIsOpen","defaultValue","inputValue","menuIsOpen","onChange","onInputChange","onMenuClose","onMenuOpen","value"];function Y4(e){var t=e.defaultInputValue,n=t===void 0?"":t,r=e.defaultMenuIsOpen,i=r===void 0?!1:r,o=e.defaultValue,a=o===void 0?null:o,l=e.inputValue,s=e.menuIsOpen,c=e.onChange,d=e.onInputChange,f=e.onMenuClose,m=e.onMenuOpen,y=e.value,g=En(e,Q4),x=M.useState(l!==void 0?l:n),w=wn(x,2),p=w[0],h=w[1],v=M.useState(s!==void 0?s:i),b=wn(v,2),k=b[0],_=b[1],E=M.useState(y!==void 0?y:a),P=wn(E,2),T=P[0],I=P[1],W=M.useCallback(function(F,Q){typeof c=="function"&&c(F,Q),I(F)},[c]),A=M.useCallback(function(F,Q){var Y;typeof d=="function"&&(Y=d(F,Q)),h(Y!==void 0?Y:F)},[d]),D=M.useCallback(function(){typeof m=="function"&&m(),_(!0)},[m]),q=M.useCallback(function(){typeof f=="function"&&f(),_(!1)},[f]),ee=l!==void 0?l:p,te=s!==void 0?s:k,ve=y!==void 0?y:T;return G(G({},g),{},{inputValue:ee,menuIsOpen:te,onChange:W,onInputChange:A,onMenuClose:q,onMenuOpen:D,value:ve})}function K4(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}function gp(e,t){for(var n=0;n<t.length;n++){var r=t[n];r.enumerable=r.enumerable||!1,r.configurable=!0,"value"in r&&(r.writable=!0),Object.defineProperty(e,bx(r.key),r)}}function G4(e,t,n){return t&&gp(e.prototype,t),n&&gp(e,n),Object.defineProperty(e,"prototype",{writable:!1}),e}function Bu(e,t){return Bu=Object.setPrototypeOf?Object.setPrototypeOf.bind():function(r,i){return r.__proto__=i,r},Bu(e,t)}function q4(e,t){if(typeof t!="function"&&t!==null)throw new TypeError("Super expression must either be null or a function");e.prototype=Object.create(t&&t.prototype,{constructor:{value:e,writable:!0,configurable:!0}}),Object.defineProperty(e,"prototype",{writable:!1}),t&&Bu(e,t)}function Ha(e){return Ha=Object.setPrototypeOf?Object.getPrototypeOf.bind():function(n){return n.__proto__||Object.getPrototypeOf(n)},Ha(e)}function X4(){if(typeof Reflect>"u"||!Reflect.construct||Reflect.construct.sham)return!1;if(typeof Proxy=="function")return!0;try{return Boolean.prototype.valueOf.call(Reflect.construct(Boolean,[],function(){})),!0}catch{return!1}}function J4(e){if(e===void 0)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return e}function Z4(e,t){if(t&&(mr(t)==="object"||typeof t=="function"))return t;if(t!==void 0)throw new TypeError("Derived constructors may only return object or undefined");return J4(e)}function ek(e){var t=X4();return function(){var r=Ha(e),i;if(t){var o=Ha(this).constructor;i=Reflect.construct(r,arguments,o)}else i=r.apply(this,arguments);return Z4(this,i)}}function tk(e){if(Array.isArray(e))return Wu(e)}function nk(e){if(typeof Symbol<"u"&&e[Symbol.iterator]!=null||e["@@iterator"]!=null)return Array.from(e)}function rk(){throw new TypeError(`Invalid attempt to spread non-iterable instance.
In order to be iterable, non-array objects must have a [Symbol.iterator]() method.`)}function sd(e){return tk(e)||nk(e)||Sx(e)||rk()}function ik(e,t){return t||(t=e.slice(0)),Object.freeze(Object.defineProperties(e,{raw:{value:Object.freeze(t)}}))}const ok=Math.min,ak=Math.max,Qa=Math.round,Ho=Math.floor,Ya=e=>({x:e,y:e});function sk(e){return{...e,top:e.y,left:e.x,right:e.x+e.width,bottom:e.y+e.height}}function kx(e){return Cx(e)?(e.nodeName||"").toLowerCase():"#document"}function Yt(e){var t;return(e==null||(t=e.ownerDocument)==null?void 0:t.defaultView)||window}function jx(e){var t;return(t=(Cx(e)?e.ownerDocument:e.document)||window.document)==null?void 0:t.documentElement}function Cx(e){return e instanceof Node||e instanceof Yt(e).Node}function Hu(e){return e instanceof Element||e instanceof Yt(e).Element}function ld(e){return e instanceof HTMLElement||e instanceof Yt(e).HTMLElement}function xp(e){return typeof ShadowRoot>"u"?!1:e instanceof ShadowRoot||e instanceof Yt(e).ShadowRoot}function Ex(e){const{overflow:t,overflowX:n,overflowY:r,display:i}=ud(e);return/auto|scroll|overlay|hidden|clip/.test(t+r+n)&&!["inline","contents"].includes(i)}function lk(){return typeof CSS>"u"||!CSS.supports?!1:CSS.supports("-webkit-backdrop-filter","none")}function uk(e){return["html","body","#document"].includes(kx(e))}function ud(e){return Yt(e).getComputedStyle(e)}function ck(e){if(kx(e)==="html")return e;const t=e.assignedSlot||e.parentNode||xp(e)&&e.host||jx(e);return xp(t)?t.host:t}function Ox(e){const t=ck(e);return uk(t)?e.ownerDocument?e.ownerDocument.body:e.body:ld(t)&&Ex(t)?t:Ox(t)}function Ka(e,t,n){var r;t===void 0&&(t=[]),n===void 0&&(n=!0);const i=Ox(e),o=i===((r=e.ownerDocument)==null?void 0:r.body),a=Yt(i);return o?t.concat(a,a.visualViewport||[],Ex(i)?i:[],a.frameElement&&n?Ka(a.frameElement):[]):t.concat(i,Ka(i,[],n))}function dk(e){const t=ud(e);let n=parseFloat(t.width)||0,r=parseFloat(t.height)||0;const i=ld(e),o=i?e.offsetWidth:n,a=i?e.offsetHeight:r,l=Qa(n)!==o||Qa(r)!==a;return l&&(n=o,r=a),{width:n,height:r,$:l}}function cd(e){return Hu(e)?e:e.contextElement}function jl(e){const t=cd(e);if(!ld(t))return Ya(1);const n=t.getBoundingClientRect(),{width:r,height:i,$:o}=dk(t);let a=(o?Qa(n.width):n.width)/r,l=(o?Qa(n.height):n.height)/i;return(!a||!Number.isFinite(a))&&(a=1),(!l||!Number.isFinite(l))&&(l=1),{x:a,y:l}}const fk=Ya(0);function pk(e){const t=Yt(e);return!lk()||!t.visualViewport?fk:{x:t.visualViewport.offsetLeft,y:t.visualViewport.offsetTop}}function hk(e,t,n){return t===void 0&&(t=!1),!n||t&&n!==Yt(e)?!1:t}function vp(e,t,n,r){t===void 0&&(t=!1),n===void 0&&(n=!1);const i=e.getBoundingClientRect(),o=cd(e);let a=Ya(1);t&&(r?Hu(r)&&(a=jl(r)):a=jl(e));const l=hk(o,n,r)?pk(o):Ya(0);let s=(i.left+l.x)/a.x,c=(i.top+l.y)/a.y,d=i.width/a.x,f=i.height/a.y;if(o){const m=Yt(o),y=r&&Hu(r)?Yt(r):r;let g=m.frameElement;for(;g&&r&&y!==m;){const x=jl(g),w=g.getBoundingClientRect(),p=ud(g),h=w.left+(g.clientLeft+parseFloat(p.paddingLeft))*x.x,v=w.top+(g.clientTop+parseFloat(p.paddingTop))*x.y;s*=x.x,c*=x.y,d*=x.x,f*=x.y,s+=h,c+=v,g=Yt(g).frameElement}}return sk({width:d,height:f,x:s,y:c})}function mk(e,t){let n=null,r;const i=jx(e);function o(){clearTimeout(r),n&&n.disconnect(),n=null}function a(l,s){l===void 0&&(l=!1),s===void 0&&(s=1),o();const{left:c,top:d,width:f,height:m}=e.getBoundingClientRect();if(l||t(),!f||!m)return;const y=Ho(d),g=Ho(i.clientWidth-(c+f)),x=Ho(i.clientHeight-(d+m)),w=Ho(c),h={rootMargin:-y+"px "+-g+"px "+-x+"px "+-w+"px",threshold:ak(0,ok(1,s))||1};let v=!0;function b(k){const _=k[0].intersectionRatio;if(_!==s){if(!v)return a();_?a(!1,_):r=setTimeout(()=>{a(!1,1e-7)},100)}v=!1}try{n=new IntersectionObserver(b,{...h,root:i.ownerDocument})}catch{n=new IntersectionObserver(b,h)}n.observe(e)}return a(!0),o}function gk(e,t,n,r){r===void 0&&(r={});const{ancestorScroll:i=!0,ancestorResize:o=!0,elementResize:a=typeof ResizeObserver=="function",layoutShift:l=typeof IntersectionObserver=="function",animationFrame:s=!1}=r,c=cd(e),d=i||o?[...c?Ka(c):[],...Ka(t)]:[];d.forEach(p=>{i&&p.addEventListener("scroll",n,{passive:!0}),o&&p.addEventListener("resize",n)});const f=c&&l?mk(c,n):null;let m=-1,y=null;a&&(y=new ResizeObserver(p=>{let[h]=p;h&&h.target===c&&y&&(y.unobserve(t),cancelAnimationFrame(m),m=requestAnimationFrame(()=>{y&&y.observe(t)})),n()}),c&&!s&&y.observe(c),y.observe(t));let g,x=s?vp(e):null;s&&w();function w(){const p=vp(e);x&&(p.x!==x.x||p.y!==x.y||p.width!==x.width||p.height!==x.height)&&n(),x=p,g=requestAnimationFrame(w)}return n(),()=>{d.forEach(p=>{i&&p.removeEventListener("scroll",n),o&&p.removeEventListener("resize",n)}),f&&f(),y&&y.disconnect(),y=null,s&&cancelAnimationFrame(g)}}var Qu=M.useLayoutEffect,xk=["className","clearValue","cx","getStyles","getClassNames","getValue","hasValue","isMulti","isRtl","options","selectOption","selectProps","setValue","theme"],Ga=function(){};function vk(e,t){return t?t[0]==="-"?e+t:e+"__"+t:e}function yk(e,t){for(var n=arguments.length,r=new Array(n>2?n-2:0),i=2;i<n;i++)r[i-2]=arguments[i];var o=[].concat(r);if(t&&e)for(var a in t)t.hasOwnProperty(a)&&t[a]&&o.push("".concat(vk(e,a)));return o.filter(function(l){return l}).map(function(l){return String(l).trim()}).join(" ")}var yp=function(t){return _k(t)?t.filter(Boolean):mr(t)==="object"&&t!==null?[t]:[]},_x=function(t){t.className,t.clearValue,t.cx,t.getStyles,t.getClassNames,t.getValue,t.hasValue,t.isMulti,t.isRtl,t.options,t.selectOption,t.selectProps,t.setValue,t.theme;var n=En(t,xk);return G({},n)},Ae=function(t,n,r){var i=t.cx,o=t.getStyles,a=t.getClassNames,l=t.className;return{css:o(n,t),className:i(r??{},a(n,t),l)}};function Fs(e){return[document.documentElement,document.body,window].indexOf(e)>-1}function wk(e){return Fs(e)?window.innerHeight:e.clientHeight}function Px(e){return Fs(e)?window.pageYOffset:e.scrollTop}function qa(e,t){if(Fs(e)){window.scrollTo(0,t);return}e.scrollTop=t}function bk(e){var t=getComputedStyle(e),n=t.position==="absolute",r=/(auto|scroll)/;if(t.position==="fixed")return document.documentElement;for(var i=e;i=i.parentElement;)if(t=getComputedStyle(i),!(n&&t.position==="static")&&r.test(t.overflow+t.overflowY+t.overflowX))return i;return document.documentElement}function Sk(e,t,n,r){return n*((e=e/r-1)*e*e+1)+t}function Qo(e,t){var n=arguments.length>2&&arguments[2]!==void 0?arguments[2]:200,r=arguments.length>3&&arguments[3]!==void 0?arguments[3]:Ga,i=Px(e),o=t-i,a=10,l=0;function s(){l+=a;var c=Sk(l,i,o,n);qa(e,c),l<n?window.requestAnimationFrame(s):r(e)}s()}function wp(e,t){var n=e.getBoundingClientRect(),r=t.getBoundingClientRect(),i=t.offsetHeight/3;r.bottom+i>n.bottom?qa(e,Math.min(t.offsetTop+t.clientHeight-e.offsetHeight+i,e.scrollHeight)):r.top-i<n.top&&qa(e,Math.max(t.offsetTop-i,0))}function kk(e){var t=e.getBoundingClientRect();return{bottom:t.bottom,height:t.height,left:t.left,right:t.right,top:t.top,width:t.width}}function bp(){try{return document.createEvent("TouchEvent"),!0}catch{return!1}}function jk(){try{return/Android|webOS|iPhone|iPad|iPod|BlackBerry|IEMobile|Opera Mini/i.test(navigator.userAgent)}catch{return!1}}var Tx=!1,Ck={get passive(){return Tx=!0}},Yo=typeof window<"u"?window:{};Yo.addEventListener&&Yo.removeEventListener&&(Yo.addEventListener("p",Ga,Ck),Yo.removeEventListener("p",Ga,!1));var Ek=Tx;function Ok(e){return e!=null}function _k(e){return Array.isArray(e)}function Ko(e,t,n){return e?t:n}var Pk=function(t){for(var n=arguments.length,r=new Array(n>1?n-1:0),i=1;i<n;i++)r[i-1]=arguments[i];var o=Object.entries(t).filter(function(a){var l=wn(a,1),s=l[0];return!r.includes(s)});return o.reduce(function(a,l){var s=wn(l,2),c=s[0],d=s[1];return a[c]=d,a},{})},Tk=["children","innerProps"],Mk=["children","innerProps"];function Rk(e){var t=e.maxHeight,n=e.menuEl,r=e.minHeight,i=e.placement,o=e.shouldScroll,a=e.isFixedPosition,l=e.controlHeight,s=bk(n),c={placement:"bottom",maxHeight:t};if(!n||!n.offsetParent)return c;var d=s.getBoundingClientRect(),f=d.height,m=n.getBoundingClientRect(),y=m.bottom,g=m.height,x=m.top,w=n.offsetParent.getBoundingClientRect(),p=w.top,h=a?window.innerHeight:wk(s),v=Px(s),b=parseInt(getComputedStyle(n).marginBottom,10),k=parseInt(getComputedStyle(n).marginTop,10),_=p-k,E=h-x,P=_+v,T=f-v-x,I=y-h+v+b,W=v+x-k,A=160;switch(i){case"auto":case"bottom":if(E>=g)return{placement:"bottom",maxHeight:t};if(T>=g&&!a)return o&&Qo(s,I,A),{placement:"bottom",maxHeight:t};if(!a&&T>=r||a&&E>=r){o&&Qo(s,I,A);var D=a?E-b:T-b;return{placement:"bottom",maxHeight:D}}if(i==="auto"||a){var q=t,ee=a?_:P;return ee>=r&&(q=Math.min(ee-b-l,t)),{placement:"top",maxHeight:q}}if(i==="bottom")return o&&qa(s,I),{placement:"bottom",maxHeight:t};break;case"top":if(_>=g)return{placement:"top",maxHeight:t};if(P>=g&&!a)return o&&Qo(s,W,A),{placement:"top",maxHeight:t};if(!a&&P>=r||a&&_>=r){var te=t;return(!a&&P>=r||a&&_>=r)&&(te=a?_-k:P-k),o&&Qo(s,W,A),{placement:"top",maxHeight:te}}return{placement:"bottom",maxHeight:t};default:throw new Error('Invalid placement provided "'.concat(i,'".'))}return c}function Ik(e){var t={bottom:"top",top:"bottom"};return e?t[e]:"bottom"}var Mx=function(t){return t==="auto"?"bottom":t},Dk=function(t,n){var r,i=t.placement,o=t.theme,a=o.borderRadius,l=o.spacing,s=o.colors;return G((r={label:"menu"},Ei(r,Ik(i),"100%"),Ei(r,"position","absolute"),Ei(r,"width","100%"),Ei(r,"zIndex",1),r),n?{}:{backgroundColor:s.neutral0,borderRadius:a,boxShadow:"0 0 0 1px hsla(0, 0%, 0%, 0.1), 0 4px 11px hsla(0, 0%, 0%, 0.1)",marginBottom:l.menuGutter,marginTop:l.menuGutter})},Rx=M.createContext(null),Lk=function(t){var n=t.children,r=t.minMenuHeight,i=t.maxMenuHeight,o=t.menuPlacement,a=t.menuPosition,l=t.menuShouldScrollIntoView,s=t.theme,c=M.useContext(Rx)||{},d=c.setPortalPlacement,f=M.useRef(null),m=M.useState(i),y=wn(m,2),g=y[0],x=y[1],w=M.useState(null),p=wn(w,2),h=p[0],v=p[1],b=s.spacing.controlHeight;return Qu(function(){var k=f.current;if(k){var _=a==="fixed",E=l&&!_,P=Rk({maxHeight:i,menuEl:k,minHeight:r,placement:o,shouldScroll:E,isFixedPosition:_,controlHeight:b});x(P.maxHeight),v(P.placement),d==null||d(P.placement)}},[i,o,a,l,r,d,b]),n({ref:f,placerProps:G(G({},t),{},{placement:h||Mx(o),maxHeight:g})})},Ak=function(t){var n=t.children,r=t.innerRef,i=t.innerProps;return K("div",X({},Ae(t,"menu",{menu:!0}),{ref:r},i),n)},zk=Ak,Fk=function(t,n){var r=t.maxHeight,i=t.theme.spacing.baseUnit;return G({maxHeight:r,overflowY:"auto",position:"relative",WebkitOverflowScrolling:"touch"},n?{}:{paddingBottom:i,paddingTop:i})},Vk=function(t){var n=t.children,r=t.innerProps,i=t.innerRef,o=t.isMulti;return K("div",X({},Ae(t,"menuList",{"menu-list":!0,"menu-list--is-multi":o}),{ref:i},r),n)},Ix=function(t,n){var r=t.theme,i=r.spacing.baseUnit,o=r.colors;return G({textAlign:"center"},n?{}:{color:o.neutral40,padding:"".concat(i*2,"px ").concat(i*3,"px")})},Nk=Ix,$k=Ix,Uk=function(t){var n=t.children,r=n===void 0?"No options":n,i=t.innerProps,o=En(t,Tk);return K("div",X({},Ae(G(G({},o),{},{children:r,innerProps:i}),"noOptionsMessage",{"menu-notice":!0,"menu-notice--no-options":!0}),i),r)},Wk=function(t){var n=t.children,r=n===void 0?"Loading...":n,i=t.innerProps,o=En(t,Mk);return K("div",X({},Ae(G(G({},o),{},{children:r,innerProps:i}),"loadingMessage",{"menu-notice":!0,"menu-notice--loading":!0}),i),r)},Bk=function(t){var n=t.rect,r=t.offset,i=t.position;return{left:n.left,position:i,top:r,width:n.width,zIndex:1}},Hk=function(t){var n=t.appendTo,r=t.children,i=t.controlElement,o=t.innerProps,a=t.menuPlacement,l=t.menuPosition,s=M.useRef(null),c=M.useRef(null),d=M.useState(Mx(a)),f=wn(d,2),m=f[0],y=f[1],g=M.useMemo(function(){return{setPortalPlacement:y}},[]),x=M.useState(null),w=wn(x,2),p=w[0],h=w[1],v=M.useCallback(function(){if(i){var E=kk(i),P=l==="fixed"?0:window.pageYOffset,T=E[m]+P;(T!==(p==null?void 0:p.offset)||E.left!==(p==null?void 0:p.rect.left)||E.width!==(p==null?void 0:p.rect.width))&&h({offset:T,rect:E})}},[i,l,m,p==null?void 0:p.offset,p==null?void 0:p.rect.left,p==null?void 0:p.rect.width]);Qu(function(){v()},[v]);var b=M.useCallback(function(){typeof c.current=="function"&&(c.current(),c.current=null),i&&s.current&&(c.current=gk(i,s.current,v,{elementResize:"ResizeObserver"in window}))},[i,v]);Qu(function(){b()},[b]);var k=M.useCallback(function(E){s.current=E,b()},[b]);if(!n&&l!=="fixed"||!p)return null;var _=K("div",X({ref:k},Ae(G(G({},t),{},{offset:p.offset,position:l,rect:p.rect}),"menuPortal",{"menu-portal":!0}),o),r);return K(Rx.Provider,{value:g},n?po.createPortal(_,n):_)},Qk=function(t){var n=t.isDisabled,r=t.isRtl;return{label:"container",direction:r?"rtl":void 0,pointerEvents:n?"none":void 0,position:"relative"}},Yk=function(t){var n=t.children,r=t.innerProps,i=t.isDisabled,o=t.isRtl;return K("div",X({},Ae(t,"container",{"--is-disabled":i,"--is-rtl":o}),r),n)},Kk=function(t,n){var r=t.theme.spacing,i=t.isMulti,o=t.hasValue,a=t.selectProps.controlShouldRenderValue;return G({alignItems:"center",display:i&&o&&a?"flex":"grid",flex:1,flexWrap:"wrap",WebkitOverflowScrolling:"touch",position:"relative",overflow:"hidden"},n?{}:{padding:"".concat(r.baseUnit/2,"px ").concat(r.baseUnit*2,"px")})},Gk=function(t){var n=t.children,r=t.innerProps,i=t.isMulti,o=t.hasValue;return K("div",X({},Ae(t,"valueContainer",{"value-container":!0,"value-container--is-multi":i,"value-container--has-value":o}),r),n)},qk=function(){return{alignItems:"center",alignSelf:"stretch",display:"flex",flexShrink:0}},Xk=function(t){var n=t.children,r=t.innerProps;return K("div",X({},Ae(t,"indicatorsContainer",{indicators:!0}),r),n)},Sp,Jk=["size"],Zk=["innerProps","isRtl","size"],ej={name:"8mmkcg",styles:"display:inline-block;fill:currentColor;line-height:1;stroke:currentColor;stroke-width:0"},Dx=function(t){var n=t.size,r=En(t,Jk);return K("svg",X({height:n,width:n,viewBox:"0 0 20 20","aria-hidden":"true",focusable:"false",css:ej},r))},dd=function(t){return K(Dx,X({size:20},t),K("path",{d:"M14.348 14.849c-0.469 0.469-1.229 0.469-1.697 0l-2.651-3.030-2.651 3.029c-0.469 0.469-1.229 0.469-1.697 0-0.469-0.469-0.469-1.229 0-1.697l2.758-3.15-2.759-3.152c-0.469-0.469-0.469-1.228 0-1.697s1.228-0.469 1.697 0l2.652 3.031 2.651-3.031c0.469-0.469 1.228-0.469 1.697 0s0.469 1.229 0 1.697l-2.758 3.152 2.758 3.15c0.469 0.469 0.469 1.229 0 1.698z"}))},Lx=function(t){return K(Dx,X({size:20},t),K("path",{d:"M4.516 7.548c0.436-0.446 1.043-0.481 1.576 0l3.908 3.747 3.908-3.747c0.533-0.481 1.141-0.446 1.574 0 0.436 0.445 0.408 1.197 0 1.615-0.406 0.418-4.695 4.502-4.695 4.502-0.217 0.223-0.502 0.335-0.787 0.335s-0.57-0.112-0.789-0.335c0 0-4.287-4.084-4.695-4.502s-0.436-1.17 0-1.615z"}))},Ax=function(t,n){var r=t.isFocused,i=t.theme,o=i.spacing.baseUnit,a=i.colors;return G({label:"indicatorContainer",display:"flex",transition:"color 150ms"},n?{}:{color:r?a.neutral60:a.neutral20,padding:o*2,":hover":{color:r?a.neutral80:a.neutral40}})},tj=Ax,nj=function(t){var n=t.children,r=t.innerProps;return K("div",X({},Ae(t,"dropdownIndicator",{indicator:!0,"dropdown-indicator":!0}),r),n||K(Lx,null))},rj=Ax,ij=function(t){var n=t.children,r=t.innerProps;return K("div",X({},Ae(t,"clearIndicator",{indicator:!0,"clear-indicator":!0}),r),n||K(dd,null))},oj=function(t,n){var r=t.isDisabled,i=t.theme,o=i.spacing.baseUnit,a=i.colors;return G({label:"indicatorSeparator",alignSelf:"stretch",width:1},n?{}:{backgroundColor:r?a.neutral10:a.neutral20,marginBottom:o*2,marginTop:o*2})},aj=function(t){var n=t.innerProps;return K("span",X({},n,Ae(t,"indicatorSeparator",{"indicator-separator":!0})))},sj=N1(Sp||(Sp=ik([`
  0%, 80%, 100% { opacity: 0; }
  40% { opacity: 1; }
`]))),lj=function(t,n){var r=t.isFocused,i=t.size,o=t.theme,a=o.colors,l=o.spacing.baseUnit;return G({label:"loadingIndicator",display:"flex",transition:"color 150ms",alignSelf:"center",fontSize:i,lineHeight:1,marginRight:i,textAlign:"center",verticalAlign:"middle"},n?{}:{color:r?a.neutral60:a.neutral20,padding:l*2})},Cl=function(t){var n=t.delay,r=t.offset;return K("span",{css:Zc({animation:"".concat(sj," 1s ease-in-out ").concat(n,"ms infinite;"),backgroundColor:"currentColor",borderRadius:"1em",display:"inline-block",marginLeft:r?"1em":void 0,height:"1em",verticalAlign:"top",width:"1em"},"","")})},uj=function(t){var n=t.innerProps,r=t.isRtl,i=t.size,o=i===void 0?4:i,a=En(t,Zk);return K("div",X({},Ae(G(G({},a),{},{innerProps:n,isRtl:r,size:o}),"loadingIndicator",{indicator:!0,"loading-indicator":!0}),n),K(Cl,{delay:0,offset:r}),K(Cl,{delay:160,offset:!0}),K(Cl,{delay:320,offset:!r}))},cj=function(t,n){var r=t.isDisabled,i=t.isFocused,o=t.theme,a=o.colors,l=o.borderRadius,s=o.spacing;return G({label:"control",alignItems:"center",cursor:"default",display:"flex",flexWrap:"wrap",justifyContent:"space-between",minHeight:s.controlHeight,outline:"0 !important",position:"relative",transition:"all 100ms"},n?{}:{backgroundColor:r?a.neutral5:a.neutral0,borderColor:r?a.neutral10:i?a.primary:a.neutral20,borderRadius:l,borderStyle:"solid",borderWidth:1,boxShadow:i?"0 0 0 1px ".concat(a.primary):void 0,"&:hover":{borderColor:i?a.primary:a.neutral30}})},dj=function(t){var n=t.children,r=t.isDisabled,i=t.isFocused,o=t.innerRef,a=t.innerProps,l=t.menuIsOpen;return K("div",X({ref:o},Ae(t,"control",{control:!0,"control--is-disabled":r,"control--is-focused":i,"control--menu-is-open":l}),a,{"aria-disabled":r||void 0}),n)},fj=dj,pj=["data"],hj=function(t,n){var r=t.theme.spacing;return n?{}:{paddingBottom:r.baseUnit*2,paddingTop:r.baseUnit*2}},mj=function(t){var n=t.children,r=t.cx,i=t.getStyles,o=t.getClassNames,a=t.Heading,l=t.headingProps,s=t.innerProps,c=t.label,d=t.theme,f=t.selectProps;return K("div",X({},Ae(t,"group",{group:!0}),s),K(a,X({},l,{selectProps:f,theme:d,getStyles:i,getClassNames:o,cx:r}),c),K("div",null,n))},gj=function(t,n){var r=t.theme,i=r.colors,o=r.spacing;return G({label:"group",cursor:"default",display:"block"},n?{}:{color:i.neutral40,fontSize:"75%",fontWeight:500,marginBottom:"0.25em",paddingLeft:o.baseUnit*3,paddingRight:o.baseUnit*3,textTransform:"uppercase"})},xj=function(t){var n=_x(t);n.data;var r=En(n,pj);return K("div",X({},Ae(t,"groupHeading",{"group-heading":!0}),r))},vj=mj,yj=["innerRef","isDisabled","isHidden","inputClassName"],wj=function(t,n){var r=t.isDisabled,i=t.value,o=t.theme,a=o.spacing,l=o.colors;return G(G({visibility:r?"hidden":"visible",transform:i?"translateZ(0)":""},bj),n?{}:{margin:a.baseUnit/2,paddingBottom:a.baseUnit/2,paddingTop:a.baseUnit/2,color:l.neutral80})},zx={gridArea:"1 / 2",font:"inherit",minWidth:"2px",border:0,margin:0,outline:0,padding:0},bj={flex:"1 1 auto",display:"inline-grid",gridArea:"1 / 1 / 2 / 3",gridTemplateColumns:"0 min-content","&:after":G({content:'attr(data-value) " "',visibility:"hidden",whiteSpace:"pre"},zx)},Sj=function(t){return G({label:"input",color:"inherit",background:0,opacity:t?0:1,width:"100%"},zx)},kj=function(t){var n=t.cx,r=t.value,i=_x(t),o=i.innerRef,a=i.isDisabled,l=i.isHidden,s=i.inputClassName,c=En(i,yj);return K("div",X({},Ae(t,"input",{"input-container":!0}),{"data-value":r||""}),K("input",X({className:n({input:!0},s),ref:o,style:Sj(l),disabled:a},c)))},jj=kj,Cj=function(t,n){var r=t.theme,i=r.spacing,o=r.borderRadius,a=r.colors;return G({label:"multiValue",display:"flex",minWidth:0},n?{}:{backgroundColor:a.neutral10,borderRadius:o/2,margin:i.baseUnit/2})},Ej=function(t,n){var r=t.theme,i=r.borderRadius,o=r.colors,a=t.cropWithEllipsis;return G({overflow:"hidden",textOverflow:a||a===void 0?"ellipsis":void 0,whiteSpace:"nowrap"},n?{}:{borderRadius:i/2,color:o.neutral80,fontSize:"85%",padding:3,paddingLeft:6})},Oj=function(t,n){var r=t.theme,i=r.spacing,o=r.borderRadius,a=r.colors,l=t.isFocused;return G({alignItems:"center",display:"flex"},n?{}:{borderRadius:o/2,backgroundColor:l?a.dangerLight:void 0,paddingLeft:i.baseUnit,paddingRight:i.baseUnit,":hover":{backgroundColor:a.dangerLight,color:a.danger}})},Fx=function(t){var n=t.children,r=t.innerProps;return K("div",r,n)},_j=Fx,Pj=Fx;function Tj(e){var t=e.children,n=e.innerProps;return K("div",X({role:"button"},n),t||K(dd,{size:14}))}var Mj=function(t){var n=t.children,r=t.components,i=t.data,o=t.innerProps,a=t.isDisabled,l=t.removeProps,s=t.selectProps,c=r.Container,d=r.Label,f=r.Remove;return K(c,{data:i,innerProps:G(G({},Ae(t,"multiValue",{"multi-value":!0,"multi-value--is-disabled":a})),o),selectProps:s},K(d,{data:i,innerProps:G({},Ae(t,"multiValueLabel",{"multi-value__label":!0})),selectProps:s},n),K(f,{data:i,innerProps:G(G({},Ae(t,"multiValueRemove",{"multi-value__remove":!0})),{},{"aria-label":"Remove ".concat(n||"option")},l),selectProps:s}))},Rj=Mj,Ij=function(t,n){var r=t.isDisabled,i=t.isFocused,o=t.isSelected,a=t.theme,l=a.spacing,s=a.colors;return G({label:"option",cursor:"default",display:"block",fontSize:"inherit",width:"100%",userSelect:"none",WebkitTapHighlightColor:"rgba(0, 0, 0, 0)"},n?{}:{backgroundColor:o?s.primary:i?s.primary25:"transparent",color:r?s.neutral20:o?s.neutral0:"inherit",padding:"".concat(l.baseUnit*2,"px ").concat(l.baseUnit*3,"px"),":active":{backgroundColor:r?void 0:o?s.primary:s.primary50}})},Dj=function(t){var n=t.children,r=t.isDisabled,i=t.isFocused,o=t.isSelected,a=t.innerRef,l=t.innerProps;return K("div",X({},Ae(t,"option",{option:!0,"option--is-disabled":r,"option--is-focused":i,"option--is-selected":o}),{ref:a,"aria-disabled":r},l),n)},Lj=Dj,Aj=function(t,n){var r=t.theme,i=r.spacing,o=r.colors;return G({label:"placeholder",gridArea:"1 / 1 / 2 / 3"},n?{}:{color:o.neutral50,marginLeft:i.baseUnit/2,marginRight:i.baseUnit/2})},zj=function(t){var n=t.children,r=t.innerProps;return K("div",X({},Ae(t,"placeholder",{placeholder:!0}),r),n)},Fj=zj,Vj=function(t,n){var r=t.isDisabled,i=t.theme,o=i.spacing,a=i.colors;return G({label:"singleValue",gridArea:"1 / 1 / 2 / 3",maxWidth:"100%",overflow:"hidden",textOverflow:"ellipsis",whiteSpace:"nowrap"},n?{}:{color:r?a.neutral40:a.neutral80,marginLeft:o.baseUnit/2,marginRight:o.baseUnit/2})},Nj=function(t){var n=t.children,r=t.isDisabled,i=t.innerProps;return K("div",X({},Ae(t,"singleValue",{"single-value":!0,"single-value--is-disabled":r}),i),n)},$j=Nj,Uj={ClearIndicator:ij,Control:fj,DropdownIndicator:nj,DownChevron:Lx,CrossIcon:dd,Group:vj,GroupHeading:xj,IndicatorsContainer:Xk,IndicatorSeparator:aj,Input:jj,LoadingIndicator:uj,Menu:zk,MenuList:Vk,MenuPortal:Hk,LoadingMessage:Wk,NoOptionsMessage:Uk,MultiValue:Rj,MultiValueContainer:_j,MultiValueLabel:Pj,MultiValueRemove:Tj,Option:Lj,Placeholder:Fj,SelectContainer:Yk,SingleValue:$j,ValueContainer:Gk},Wj=function(t){return G(G({},Uj),t.components)},kp=Number.isNaN||function(t){return typeof t=="number"&&t!==t};function Bj(e,t){return!!(e===t||kp(e)&&kp(t))}function Hj(e,t){if(e.length!==t.length)return!1;for(var n=0;n<e.length;n++)if(!Bj(e[n],t[n]))return!1;return!0}function Qj(e,t){t===void 0&&(t=Hj);var n=null;function r(){for(var i=[],o=0;o<arguments.length;o++)i[o]=arguments[o];if(n&&n.lastThis===this&&t(i,n.lastArgs))return n.lastResult;var a=e.apply(this,i);return n={lastResult:a,lastArgs:i,lastThis:this},a}return r.clear=function(){n=null},r}var Yj={name:"7pg0cj-a11yText",styles:"label:a11yText;z-index:9999;border:0;clip:rect(1px, 1px, 1px, 1px);height:1px;width:1px;position:absolute;overflow:hidden;padding:0;white-space:nowrap"},Kj=function(t){return K("span",X({css:Yj},t))},jp=Kj,Gj={guidance:function(t){var n=t.isSearchable,r=t.isMulti,i=t.tabSelectsValue,o=t.context,a=t.isInitialFocus;switch(o){case"menu":return"Use Up and Down to choose options, press Enter to select the currently focused option, press Escape to exit the menu".concat(i?", press Tab to select the option and exit the menu":"",".");case"input":return a?"".concat(t["aria-label"]||"Select"," is focused ").concat(n?",type to refine list":"",", press Down to open the menu, ").concat(r?" press left to focus selected values":""):"";case"value":return"Use left and right to toggle between focused values, press Backspace to remove the currently focused value";default:return""}},onChange:function(t){var n=t.action,r=t.label,i=r===void 0?"":r,o=t.labels,a=t.isDisabled;switch(n){case"deselect-option":case"pop-value":case"remove-value":return"option ".concat(i,", deselected.");case"clear":return"All selected options have been cleared.";case"initial-input-focus":return"option".concat(o.length>1?"s":""," ").concat(o.join(","),", selected.");case"select-option":return a?"option ".concat(i," is disabled. Select another option."):"option ".concat(i,", selected.");default:return""}},onFocus:function(t){var n=t.context,r=t.focused,i=t.options,o=t.label,a=o===void 0?"":o,l=t.selectValue,s=t.isDisabled,c=t.isSelected,d=t.isAppleDevice,f=function(x,w){return x&&x.length?"".concat(x.indexOf(w)+1," of ").concat(x.length):""};if(n==="value"&&l)return"value ".concat(a," focused, ").concat(f(l,r),".");if(n==="menu"&&d){var m=s?" disabled":"",y="".concat(c?" selected":"").concat(m);return"".concat(a).concat(y,", ").concat(f(i,r),".")}return""},onFilter:function(t){var n=t.inputValue,r=t.resultsMessage;return"".concat(r).concat(n?" for search term "+n:"",".")}},qj=function(t){var n=t.ariaSelection,r=t.focusedOption,i=t.focusedValue,o=t.focusableOptions,a=t.isFocused,l=t.selectValue,s=t.selectProps,c=t.id,d=t.isAppleDevice,f=s.ariaLiveMessages,m=s.getOptionLabel,y=s.inputValue,g=s.isMulti,x=s.isOptionDisabled,w=s.isSearchable,p=s.menuIsOpen,h=s.options,v=s.screenReaderStatus,b=s.tabSelectsValue,k=s.isLoading,_=s["aria-label"],E=s["aria-live"],P=M.useMemo(function(){return G(G({},Gj),f||{})},[f]),T=M.useMemo(function(){var ee="";if(n&&P.onChange){var te=n.option,ve=n.options,F=n.removedValue,Q=n.removedValues,Y=n.value,de=function(et){return Array.isArray(et)?null:et},re=F||te||de(Y),Oe=re?m(re):"",be=ve||Q||void 0,Ue=be?be.map(m):[],me=G({isDisabled:re&&x(re,l),label:Oe,labels:Ue},n);ee=P.onChange(me)}return ee},[n,P,x,l,m]),I=M.useMemo(function(){var ee="",te=r||i,ve=!!(r&&l&&l.includes(r));if(te&&P.onFocus){var F={focused:te,label:m(te),isDisabled:x(te,l),isSelected:ve,options:o,context:te===r?"menu":"value",selectValue:l,isAppleDevice:d};ee=P.onFocus(F)}return ee},[r,i,m,x,P,o,l,d]),W=M.useMemo(function(){var ee="";if(p&&h.length&&!k&&P.onFilter){var te=v({count:o.length});ee=P.onFilter({inputValue:y,resultsMessage:te})}return ee},[o,y,p,P,h,v,k]),A=(n==null?void 0:n.action)==="initial-input-focus",D=M.useMemo(function(){var ee="";if(P.guidance){var te=i?"value":p?"menu":"input";ee=P.guidance({"aria-label":_,context:te,isDisabled:r&&x(r,l),isMulti:g,isSearchable:w,tabSelectsValue:b,isInitialFocus:A})}return ee},[_,r,i,g,x,w,p,P,l,b,A]),q=K(M.Fragment,null,K("span",{id:"aria-selection"},T),K("span",{id:"aria-focused"},I),K("span",{id:"aria-results"},W),K("span",{id:"aria-guidance"},D));return K(M.Fragment,null,K(jp,{id:c},A&&q),K(jp,{"aria-live":E,"aria-atomic":"false","aria-relevant":"additions text",role:"log"},a&&!A&&q))},Xj=qj,Yu=[{base:"A",letters:"AⒶＡÀÁÂẦẤẪẨÃĀĂẰẮẴẲȦǠÄǞẢÅǺǍȀȂẠẬẶḀĄȺⱯ"},{base:"AA",letters:"Ꜳ"},{base:"AE",letters:"ÆǼǢ"},{base:"AO",letters:"Ꜵ"},{base:"AU",letters:"Ꜷ"},{base:"AV",letters:"ꜸꜺ"},{base:"AY",letters:"Ꜽ"},{base:"B",letters:"BⒷＢḂḄḆɃƂƁ"},{base:"C",letters:"CⒸＣĆĈĊČÇḈƇȻꜾ"},{base:"D",letters:"DⒹＤḊĎḌḐḒḎĐƋƊƉꝹ"},{base:"DZ",letters:"ǱǄ"},{base:"Dz",letters:"ǲǅ"},{base:"E",letters:"EⒺＥÈÉÊỀẾỄỂẼĒḔḖĔĖËẺĚȄȆẸỆȨḜĘḘḚƐƎ"},{base:"F",letters:"FⒻＦḞƑꝻ"},{base:"G",letters:"GⒼＧǴĜḠĞĠǦĢǤƓꞠꝽꝾ"},{base:"H",letters:"HⒽＨĤḢḦȞḤḨḪĦⱧⱵꞍ"},{base:"I",letters:"IⒾＩÌÍÎĨĪĬİÏḮỈǏȈȊỊĮḬƗ"},{base:"J",letters:"JⒿＪĴɈ"},{base:"K",letters:"KⓀＫḰǨḲĶḴƘⱩꝀꝂꝄꞢ"},{base:"L",letters:"LⓁＬĿĹĽḶḸĻḼḺŁȽⱢⱠꝈꝆꞀ"},{base:"LJ",letters:"Ǉ"},{base:"Lj",letters:"ǈ"},{base:"M",letters:"MⓂＭḾṀṂⱮƜ"},{base:"N",letters:"NⓃＮǸŃÑṄŇṆŅṊṈȠƝꞐꞤ"},{base:"NJ",letters:"Ǌ"},{base:"Nj",letters:"ǋ"},{base:"O",letters:"OⓄＯÒÓÔỒỐỖỔÕṌȬṎŌṐṒŎȮȰÖȪỎŐǑȌȎƠỜỚỠỞỢỌỘǪǬØǾƆƟꝊꝌ"},{base:"OI",letters:"Ƣ"},{base:"OO",letters:"Ꝏ"},{base:"OU",letters:"Ȣ"},{base:"P",letters:"PⓅＰṔṖƤⱣꝐꝒꝔ"},{base:"Q",letters:"QⓆＱꝖꝘɊ"},{base:"R",letters:"RⓇＲŔṘŘȐȒṚṜŖṞɌⱤꝚꞦꞂ"},{base:"S",letters:"SⓈＳẞŚṤŜṠŠṦṢṨȘŞⱾꞨꞄ"},{base:"T",letters:"TⓉＴṪŤṬȚŢṰṮŦƬƮȾꞆ"},{base:"TZ",letters:"Ꜩ"},{base:"U",letters:"UⓊＵÙÚÛŨṸŪṺŬÜǛǗǕǙỦŮŰǓȔȖƯỪỨỮỬỰỤṲŲṶṴɄ"},{base:"V",letters:"VⓋＶṼṾƲꝞɅ"},{base:"VY",letters:"Ꝡ"},{base:"W",letters:"WⓌＷẀẂŴẆẄẈⱲ"},{base:"X",letters:"XⓍＸẊẌ"},{base:"Y",letters:"YⓎＹỲÝŶỸȲẎŸỶỴƳɎỾ"},{base:"Z",letters:"ZⓏＺŹẐŻŽẒẔƵȤⱿⱫꝢ"},{base:"a",letters:"aⓐａẚàáâầấẫẩãāăằắẵẳȧǡäǟảåǻǎȁȃạậặḁąⱥɐ"},{base:"aa",letters:"ꜳ"},{base:"ae",letters:"æǽǣ"},{base:"ao",letters:"ꜵ"},{base:"au",letters:"ꜷ"},{base:"av",letters:"ꜹꜻ"},{base:"ay",letters:"ꜽ"},{base:"b",letters:"bⓑｂḃḅḇƀƃɓ"},{base:"c",letters:"cⓒｃćĉċčçḉƈȼꜿↄ"},{base:"d",letters:"dⓓｄḋďḍḑḓḏđƌɖɗꝺ"},{base:"dz",letters:"ǳǆ"},{base:"e",letters:"eⓔｅèéêềếễểẽēḕḗĕėëẻěȅȇẹệȩḝęḙḛɇɛǝ"},{base:"f",letters:"fⓕｆḟƒꝼ"},{base:"g",letters:"gⓖｇǵĝḡğġǧģǥɠꞡᵹꝿ"},{base:"h",letters:"hⓗｈĥḣḧȟḥḩḫẖħⱨⱶɥ"},{base:"hv",letters:"ƕ"},{base:"i",letters:"iⓘｉìíîĩīĭïḯỉǐȉȋịįḭɨı"},{base:"j",letters:"jⓙｊĵǰɉ"},{base:"k",letters:"kⓚｋḱǩḳķḵƙⱪꝁꝃꝅꞣ"},{base:"l",letters:"lⓛｌŀĺľḷḹļḽḻſłƚɫⱡꝉꞁꝇ"},{base:"lj",letters:"ǉ"},{base:"m",letters:"mⓜｍḿṁṃɱɯ"},{base:"n",letters:"nⓝｎǹńñṅňṇņṋṉƞɲŉꞑꞥ"},{base:"nj",letters:"ǌ"},{base:"o",letters:"oⓞｏòóôồốỗổõṍȭṏōṑṓŏȯȱöȫỏőǒȍȏơờớỡởợọộǫǭøǿɔꝋꝍɵ"},{base:"oi",letters:"ƣ"},{base:"ou",letters:"ȣ"},{base:"oo",letters:"ꝏ"},{base:"p",letters:"pⓟｐṕṗƥᵽꝑꝓꝕ"},{base:"q",letters:"qⓠｑɋꝗꝙ"},{base:"r",letters:"rⓡｒŕṙřȑȓṛṝŗṟɍɽꝛꞧꞃ"},{base:"s",letters:"sⓢｓßśṥŝṡšṧṣṩșşȿꞩꞅẛ"},{base:"t",letters:"tⓣｔṫẗťṭțţṱṯŧƭʈⱦꞇ"},{base:"tz",letters:"ꜩ"},{base:"u",letters:"uⓤｕùúûũṹūṻŭüǜǘǖǚủůűǔȕȗưừứữửựụṳųṷṵʉ"},{base:"v",letters:"vⓥｖṽṿʋꝟʌ"},{base:"vy",letters:"ꝡ"},{base:"w",letters:"wⓦｗẁẃŵẇẅẘẉⱳ"},{base:"x",letters:"xⓧｘẋẍ"},{base:"y",letters:"yⓨｙỳýŷỹȳẏÿỷẙỵƴɏỿ"},{base:"z",letters:"zⓩｚźẑżžẓẕƶȥɀⱬꝣ"}],Jj=new RegExp("["+Yu.map(function(e){return e.letters}).join("")+"]","g"),Vx={};for(var El=0;El<Yu.length;El++)for(var Ol=Yu[El],_l=0;_l<Ol.letters.length;_l++)Vx[Ol.letters[_l]]=Ol.base;var Nx=function(t){return t.replace(Jj,function(n){return Vx[n]})},Zj=Qj(Nx),Cp=function(t){return t.replace(/^\s+|\s+$/g,"")},eC=function(t){return"".concat(t.label," ").concat(t.value)},tC=function(t){return function(n,r){if(n.data.__isNew__)return!0;var i=G({ignoreCase:!0,ignoreAccents:!0,stringify:eC,trim:!0,matchFrom:"any"},t),o=i.ignoreCase,a=i.ignoreAccents,l=i.stringify,s=i.trim,c=i.matchFrom,d=s?Cp(r):r,f=s?Cp(l(n)):l(n);return o&&(d=d.toLowerCase(),f=f.toLowerCase()),a&&(d=Zj(d),f=Nx(f)),c==="start"?f.substr(0,d.length)===d:f.indexOf(d)>-1}},nC=["innerRef"];function rC(e){var t=e.innerRef,n=En(e,nC),r=Pk(n,"onExited","in","enter","exit","appear");return K("input",X({ref:t},r,{css:Zc({label:"dummyInput",background:0,border:0,caretColor:"transparent",fontSize:"inherit",gridArea:"1 / 1 / 2 / 3",outline:0,padding:0,width:1,color:"transparent",left:-100,opacity:0,position:"relative",transform:"scale(.01)"},"","")}))}var iC=function(t){t.cancelable&&t.preventDefault(),t.stopPropagation()};function oC(e){var t=e.isEnabled,n=e.onBottomArrive,r=e.onBottomLeave,i=e.onTopArrive,o=e.onTopLeave,a=M.useRef(!1),l=M.useRef(!1),s=M.useRef(0),c=M.useRef(null),d=M.useCallback(function(w,p){if(c.current!==null){var h=c.current,v=h.scrollTop,b=h.scrollHeight,k=h.clientHeight,_=c.current,E=p>0,P=b-k-v,T=!1;P>p&&a.current&&(r&&r(w),a.current=!1),E&&l.current&&(o&&o(w),l.current=!1),E&&p>P?(n&&!a.current&&n(w),_.scrollTop=b,T=!0,a.current=!0):!E&&-p>v&&(i&&!l.current&&i(w),_.scrollTop=0,T=!0,l.current=!0),T&&iC(w)}},[n,r,i,o]),f=M.useCallback(function(w){d(w,w.deltaY)},[d]),m=M.useCallback(function(w){s.current=w.changedTouches[0].clientY},[]),y=M.useCallback(function(w){var p=s.current-w.changedTouches[0].clientY;d(w,p)},[d]),g=M.useCallback(function(w){if(w){var p=Ek?{passive:!1}:!1;w.addEventListener("wheel",f,p),w.addEventListener("touchstart",m,p),w.addEventListener("touchmove",y,p)}},[y,m,f]),x=M.useCallback(function(w){w&&(w.removeEventListener("wheel",f,!1),w.removeEventListener("touchstart",m,!1),w.removeEventListener("touchmove",y,!1))},[y,m,f]);return M.useEffect(function(){if(t){var w=c.current;return g(w),function(){x(w)}}},[t,g,x]),function(w){c.current=w}}var Ep=["boxSizing","height","overflow","paddingRight","position"],Op={boxSizing:"border-box",overflow:"hidden",position:"relative",height:"100%"};function _p(e){e.preventDefault()}function Pp(e){e.stopPropagation()}function Tp(){var e=this.scrollTop,t=this.scrollHeight,n=e+this.offsetHeight;e===0?this.scrollTop=1:n===t&&(this.scrollTop=e-1)}function Mp(){return"ontouchstart"in window||navigator.maxTouchPoints}var Rp=!!(typeof window<"u"&&window.document&&window.document.createElement),yi=0,Sr={capture:!1,passive:!1};function aC(e){var t=e.isEnabled,n=e.accountForScrollbars,r=n===void 0?!0:n,i=M.useRef({}),o=M.useRef(null),a=M.useCallback(function(s){if(Rp){var c=document.body,d=c&&c.style;if(r&&Ep.forEach(function(g){var x=d&&d[g];i.current[g]=x}),r&&yi<1){var f=parseInt(i.current.paddingRight,10)||0,m=document.body?document.body.clientWidth:0,y=window.innerWidth-m+f||0;Object.keys(Op).forEach(function(g){var x=Op[g];d&&(d[g]=x)}),d&&(d.paddingRight="".concat(y,"px"))}c&&Mp()&&(c.addEventListener("touchmove",_p,Sr),s&&(s.addEventListener("touchstart",Tp,Sr),s.addEventListener("touchmove",Pp,Sr))),yi+=1}},[r]),l=M.useCallback(function(s){if(Rp){var c=document.body,d=c&&c.style;yi=Math.max(yi-1,0),r&&yi<1&&Ep.forEach(function(f){var m=i.current[f];d&&(d[f]=m)}),c&&Mp()&&(c.removeEventListener("touchmove",_p,Sr),s&&(s.removeEventListener("touchstart",Tp,Sr),s.removeEventListener("touchmove",Pp,Sr)))}},[r]);return M.useEffect(function(){if(t){var s=o.current;return a(s),function(){l(s)}}},[t,a,l]),function(s){o.current=s}}var sC=function(t){var n=t.target;return n.ownerDocument.activeElement&&n.ownerDocument.activeElement.blur()},lC={name:"1kfdb0e",styles:"position:fixed;left:0;bottom:0;right:0;top:0"};function uC(e){var t=e.children,n=e.lockEnabled,r=e.captureEnabled,i=r===void 0?!0:r,o=e.onBottomArrive,a=e.onBottomLeave,l=e.onTopArrive,s=e.onTopLeave,c=oC({isEnabled:i,onBottomArrive:o,onBottomLeave:a,onTopArrive:l,onTopLeave:s}),d=aC({isEnabled:n}),f=function(y){c(y),d(y)};return K(M.Fragment,null,n&&K("div",{onClick:sC,css:lC}),t(f))}var cC={name:"1a0ro4n-requiredInput",styles:"label:requiredInput;opacity:0;pointer-events:none;position:absolute;bottom:0;left:0;right:0;width:100%"},dC=function(t){var n=t.name,r=t.onFocus;return K("input",{required:!0,name:n,tabIndex:-1,"aria-hidden":"true",onFocus:r,css:cC,value:"",onChange:function(){}})},fC=dC;function fd(e){var t;return typeof window<"u"&&window.navigator!=null?e.test(((t=window.navigator.userAgentData)===null||t===void 0?void 0:t.platform)||window.navigator.platform):!1}function pC(){return fd(/^iPhone/i)}function $x(){return fd(/^Mac/i)}function hC(){return fd(/^iPad/i)||$x()&&navigator.maxTouchPoints>1}function mC(){return pC()||hC()}function gC(){return $x()||mC()}var xC=function(t){return t.label},vC=function(t){return t.label},yC=function(t){return t.value},wC=function(t){return!!t.isDisabled},bC={clearIndicator:rj,container:Qk,control:cj,dropdownIndicator:tj,group:hj,groupHeading:gj,indicatorsContainer:qk,indicatorSeparator:oj,input:wj,loadingIndicator:lj,loadingMessage:$k,menu:Dk,menuList:Fk,menuPortal:Bk,multiValue:Cj,multiValueLabel:Ej,multiValueRemove:Oj,noOptionsMessage:Nk,option:Ij,placeholder:Aj,singleValue:Vj,valueContainer:Kk},SC={primary:"#2684FF",primary75:"#4C9AFF",primary50:"#B2D4FF",primary25:"#DEEBFF",danger:"#DE350B",dangerLight:"#FFBDAD",neutral0:"hsl(0, 0%, 100%)",neutral5:"hsl(0, 0%, 95%)",neutral10:"hsl(0, 0%, 90%)",neutral20:"hsl(0, 0%, 80%)",neutral30:"hsl(0, 0%, 70%)",neutral40:"hsl(0, 0%, 60%)",neutral50:"hsl(0, 0%, 50%)",neutral60:"hsl(0, 0%, 40%)",neutral70:"hsl(0, 0%, 30%)",neutral80:"hsl(0, 0%, 20%)",neutral90:"hsl(0, 0%, 10%)"},kC=4,Ux=4,jC=38,CC=Ux*2,EC={baseUnit:Ux,controlHeight:jC,menuGutter:CC},Pl={borderRadius:kC,colors:SC,spacing:EC},OC={"aria-live":"polite",backspaceRemovesValue:!0,blurInputOnSelect:bp(),captureMenuScroll:!bp(),classNames:{},closeMenuOnSelect:!0,closeMenuOnScroll:!1,components:{},controlShouldRenderValue:!0,escapeClearsValue:!1,filterOption:tC(),formatGroupLabel:xC,getOptionLabel:vC,getOptionValue:yC,isDisabled:!1,isLoading:!1,isMulti:!1,isRtl:!1,isSearchable:!0,isOptionDisabled:wC,loadingMessage:function(){return"Loading..."},maxMenuHeight:300,minMenuHeight:140,menuIsOpen:!1,menuPlacement:"bottom",menuPosition:"absolute",menuShouldBlockScroll:!1,menuShouldScrollIntoView:!jk(),noOptionsMessage:function(){return"No options"},openMenuOnFocus:!1,openMenuOnClick:!0,options:[],pageSize:5,placeholder:"Select...",screenReaderStatus:function(t){var n=t.count;return"".concat(n," result").concat(n!==1?"s":""," available")},styles:{},tabIndex:0,tabSelectsValue:!0,unstyled:!1};function Ip(e,t,n,r){var i=Hx(e,t,n),o=Qx(e,t,n),a=Bx(e,t),l=Xa(e,t);return{type:"option",data:t,isDisabled:i,isSelected:o,label:a,value:l,index:r}}function ma(e,t){return e.options.map(function(n,r){if("options"in n){var i=n.options.map(function(a,l){return Ip(e,a,t,l)}).filter(function(a){return Lp(e,a)});return i.length>0?{type:"group",data:n,options:i,index:r}:void 0}var o=Ip(e,n,t,r);return Lp(e,o)?o:void 0}).filter(Ok)}function Wx(e){return e.reduce(function(t,n){return n.type==="group"?t.push.apply(t,sd(n.options.map(function(r){return r.data}))):t.push(n.data),t},[])}function Dp(e,t){return e.reduce(function(n,r){return r.type==="group"?n.push.apply(n,sd(r.options.map(function(i){return{data:i.data,id:"".concat(t,"-").concat(r.index,"-").concat(i.index)}}))):n.push({data:r.data,id:"".concat(t,"-").concat(r.index)}),n},[])}function _C(e,t){return Wx(ma(e,t))}function Lp(e,t){var n=e.inputValue,r=n===void 0?"":n,i=t.data,o=t.isSelected,a=t.label,l=t.value;return(!Kx(e)||!o)&&Yx(e,{label:a,value:l,data:i},r)}function PC(e,t){var n=e.focusedValue,r=e.selectValue,i=r.indexOf(n);if(i>-1){var o=t.indexOf(n);if(o>-1)return n;if(i<t.length)return t[i]}return null}function TC(e,t){var n=e.focusedOption;return n&&t.indexOf(n)>-1?n:t[0]}var Tl=function(t,n){var r,i=(r=t.find(function(o){return o.data===n}))===null||r===void 0?void 0:r.id;return i||null},Bx=function(t,n){return t.getOptionLabel(n)},Xa=function(t,n){return t.getOptionValue(n)};function Hx(e,t,n){return typeof e.isOptionDisabled=="function"?e.isOptionDisabled(t,n):!1}function Qx(e,t,n){if(n.indexOf(t)>-1)return!0;if(typeof e.isOptionSelected=="function")return e.isOptionSelected(t,n);var r=Xa(e,t);return n.some(function(i){return Xa(e,i)===r})}function Yx(e,t,n){return e.filterOption?e.filterOption(t,n):!0}var Kx=function(t){var n=t.hideSelectedOptions,r=t.isMulti;return n===void 0?r:n},MC=1,Gx=function(e){q4(n,e);var t=ek(n);function n(r){var i;if(K4(this,n),i=t.call(this,r),i.state={ariaSelection:null,focusedOption:null,focusedOptionId:null,focusableOptionsWithIds:[],focusedValue:null,inputIsHidden:!1,isFocused:!1,selectValue:[],clearFocusValueOnUpdate:!1,prevWasFocused:!1,inputIsHiddenAfterUpdate:void 0,prevProps:void 0,instancePrefix:""},i.blockOptionHover=!1,i.isComposing=!1,i.commonProps=void 0,i.initialTouchX=0,i.initialTouchY=0,i.openAfterFocus=!1,i.scrollToFocusedOptionOnUpdate=!1,i.userIsDragging=void 0,i.isAppleDevice=gC(),i.controlRef=null,i.getControlRef=function(s){i.controlRef=s},i.focusedOptionRef=null,i.getFocusedOptionRef=function(s){i.focusedOptionRef=s},i.menuListRef=null,i.getMenuListRef=function(s){i.menuListRef=s},i.inputRef=null,i.getInputRef=function(s){i.inputRef=s},i.focus=i.focusInput,i.blur=i.blurInput,i.onChange=function(s,c){var d=i.props,f=d.onChange,m=d.name;c.name=m,i.ariaOnChange(s,c),f(s,c)},i.setValue=function(s,c,d){var f=i.props,m=f.closeMenuOnSelect,y=f.isMulti,g=f.inputValue;i.onInputChange("",{action:"set-value",prevInputValue:g}),m&&(i.setState({inputIsHiddenAfterUpdate:!y}),i.onMenuClose()),i.setState({clearFocusValueOnUpdate:!0}),i.onChange(s,{action:c,option:d})},i.selectOption=function(s){var c=i.props,d=c.blurInputOnSelect,f=c.isMulti,m=c.name,y=i.state.selectValue,g=f&&i.isOptionSelected(s,y),x=i.isOptionDisabled(s,y);if(g){var w=i.getOptionValue(s);i.setValue(y.filter(function(p){return i.getOptionValue(p)!==w}),"deselect-option",s)}else if(!x)f?i.setValue([].concat(sd(y),[s]),"select-option",s):i.setValue(s,"select-option");else{i.ariaOnChange(s,{action:"select-option",option:s,name:m});return}d&&i.blurInput()},i.removeValue=function(s){var c=i.props.isMulti,d=i.state.selectValue,f=i.getOptionValue(s),m=d.filter(function(g){return i.getOptionValue(g)!==f}),y=Ko(c,m,m[0]||null);i.onChange(y,{action:"remove-value",removedValue:s}),i.focusInput()},i.clearValue=function(){var s=i.state.selectValue;i.onChange(Ko(i.props.isMulti,[],null),{action:"clear",removedValues:s})},i.popValue=function(){var s=i.props.isMulti,c=i.state.selectValue,d=c[c.length-1],f=c.slice(0,c.length-1),m=Ko(s,f,f[0]||null);i.onChange(m,{action:"pop-value",removedValue:d})},i.getFocusedOptionId=function(s){return Tl(i.state.focusableOptionsWithIds,s)},i.getFocusableOptionsWithIds=function(){return Dp(ma(i.props,i.state.selectValue),i.getElementId("option"))},i.getValue=function(){return i.state.selectValue},i.cx=function(){for(var s=arguments.length,c=new Array(s),d=0;d<s;d++)c[d]=arguments[d];return yk.apply(void 0,[i.props.classNamePrefix].concat(c))},i.getOptionLabel=function(s){return Bx(i.props,s)},i.getOptionValue=function(s){return Xa(i.props,s)},i.getStyles=function(s,c){var d=i.props.unstyled,f=bC[s](c,d);f.boxSizing="border-box";var m=i.props.styles[s];return m?m(f,c):f},i.getClassNames=function(s,c){var d,f;return(d=(f=i.props.classNames)[s])===null||d===void 0?void 0:d.call(f,c)},i.getElementId=function(s){return"".concat(i.state.instancePrefix,"-").concat(s)},i.getComponents=function(){return Wj(i.props)},i.buildCategorizedOptions=function(){return ma(i.props,i.state.selectValue)},i.getCategorizedOptions=function(){return i.props.menuIsOpen?i.buildCategorizedOptions():[]},i.buildFocusableOptions=function(){return Wx(i.buildCategorizedOptions())},i.getFocusableOptions=function(){return i.props.menuIsOpen?i.buildFocusableOptions():[]},i.ariaOnChange=function(s,c){i.setState({ariaSelection:G({value:s},c)})},i.onMenuMouseDown=function(s){s.button===0&&(s.stopPropagation(),s.preventDefault(),i.focusInput())},i.onMenuMouseMove=function(s){i.blockOptionHover=!1},i.onControlMouseDown=function(s){if(!s.defaultPrevented){var c=i.props.openMenuOnClick;i.state.isFocused?i.props.menuIsOpen?s.target.tagName!=="INPUT"&&s.target.tagName!=="TEXTAREA"&&i.onMenuClose():c&&i.openMenu("first"):(c&&(i.openAfterFocus=!0),i.focusInput()),s.target.tagName!=="INPUT"&&s.target.tagName!=="TEXTAREA"&&s.preventDefault()}},i.onDropdownIndicatorMouseDown=function(s){if(!(s&&s.type==="mousedown"&&s.button!==0)&&!i.props.isDisabled){var c=i.props,d=c.isMulti,f=c.menuIsOpen;i.focusInput(),f?(i.setState({inputIsHiddenAfterUpdate:!d}),i.onMenuClose()):i.openMenu("first"),s.preventDefault()}},i.onClearIndicatorMouseDown=function(s){s&&s.type==="mousedown"&&s.button!==0||(i.clearValue(),s.preventDefault(),i.openAfterFocus=!1,s.type==="touchend"?i.focusInput():setTimeout(function(){return i.focusInput()}))},i.onScroll=function(s){typeof i.props.closeMenuOnScroll=="boolean"?s.target instanceof HTMLElement&&Fs(s.target)&&i.props.onMenuClose():typeof i.props.closeMenuOnScroll=="function"&&i.props.closeMenuOnScroll(s)&&i.props.onMenuClose()},i.onCompositionStart=function(){i.isComposing=!0},i.onCompositionEnd=function(){i.isComposing=!1},i.onTouchStart=function(s){var c=s.touches,d=c&&c.item(0);d&&(i.initialTouchX=d.clientX,i.initialTouchY=d.clientY,i.userIsDragging=!1)},i.onTouchMove=function(s){var c=s.touches,d=c&&c.item(0);if(d){var f=Math.abs(d.clientX-i.initialTouchX),m=Math.abs(d.clientY-i.initialTouchY),y=5;i.userIsDragging=f>y||m>y}},i.onTouchEnd=function(s){i.userIsDragging||(i.controlRef&&!i.controlRef.contains(s.target)&&i.menuListRef&&!i.menuListRef.contains(s.target)&&i.blurInput(),i.initialTouchX=0,i.initialTouchY=0)},i.onControlTouchEnd=function(s){i.userIsDragging||i.onControlMouseDown(s)},i.onClearIndicatorTouchEnd=function(s){i.userIsDragging||i.onClearIndicatorMouseDown(s)},i.onDropdownIndicatorTouchEnd=function(s){i.userIsDragging||i.onDropdownIndicatorMouseDown(s)},i.handleInputChange=function(s){var c=i.props.inputValue,d=s.currentTarget.value;i.setState({inputIsHiddenAfterUpdate:!1}),i.onInputChange(d,{action:"input-change",prevInputValue:c}),i.props.menuIsOpen||i.onMenuOpen()},i.onInputFocus=function(s){i.props.onFocus&&i.props.onFocus(s),i.setState({inputIsHiddenAfterUpdate:!1,isFocused:!0}),(i.openAfterFocus||i.props.openMenuOnFocus)&&i.openMenu("first"),i.openAfterFocus=!1},i.onInputBlur=function(s){var c=i.props.inputValue;if(i.menuListRef&&i.menuListRef.contains(document.activeElement)){i.inputRef.focus();return}i.props.onBlur&&i.props.onBlur(s),i.onInputChange("",{action:"input-blur",prevInputValue:c}),i.onMenuClose(),i.setState({focusedValue:null,isFocused:!1})},i.onOptionHover=function(s){if(!(i.blockOptionHover||i.state.focusedOption===s)){var c=i.getFocusableOptions(),d=c.indexOf(s);i.setState({focusedOption:s,focusedOptionId:d>-1?i.getFocusedOptionId(s):null})}},i.shouldHideSelectedOptions=function(){return Kx(i.props)},i.onValueInputFocus=function(s){s.preventDefault(),s.stopPropagation(),i.focus()},i.onKeyDown=function(s){var c=i.props,d=c.isMulti,f=c.backspaceRemovesValue,m=c.escapeClearsValue,y=c.inputValue,g=c.isClearable,x=c.isDisabled,w=c.menuIsOpen,p=c.onKeyDown,h=c.tabSelectsValue,v=c.openMenuOnFocus,b=i.state,k=b.focusedOption,_=b.focusedValue,E=b.selectValue;if(!x&&!(typeof p=="function"&&(p(s),s.defaultPrevented))){switch(i.blockOptionHover=!0,s.key){case"ArrowLeft":if(!d||y)return;i.focusValue("previous");break;case"ArrowRight":if(!d||y)return;i.focusValue("next");break;case"Delete":case"Backspace":if(y)return;if(_)i.removeValue(_);else{if(!f)return;d?i.popValue():g&&i.clearValue()}break;case"Tab":if(i.isComposing||s.shiftKey||!w||!h||!k||v&&i.isOptionSelected(k,E))return;i.selectOption(k);break;case"Enter":if(s.keyCode===229)break;if(w){if(!k||i.isComposing)return;i.selectOption(k);break}return;case"Escape":w?(i.setState({inputIsHiddenAfterUpdate:!1}),i.onInputChange("",{action:"menu-close",prevInputValue:y}),i.onMenuClose()):g&&m&&i.clearValue();break;case" ":if(y)return;if(!w){i.openMenu("first");break}if(!k)return;i.selectOption(k);break;case"ArrowUp":w?i.focusOption("up"):i.openMenu("last");break;case"ArrowDown":w?i.focusOption("down"):i.openMenu("first");break;case"PageUp":if(!w)return;i.focusOption("pageup");break;case"PageDown":if(!w)return;i.focusOption("pagedown");break;case"Home":if(!w)return;i.focusOption("first");break;case"End":if(!w)return;i.focusOption("last");break;default:return}s.preventDefault()}},i.state.instancePrefix="react-select-"+(i.props.instanceId||++MC),i.state.selectValue=yp(r.value),r.menuIsOpen&&i.state.selectValue.length){var o=i.getFocusableOptionsWithIds(),a=i.buildFocusableOptions(),l=a.indexOf(i.state.selectValue[0]);i.state.focusableOptionsWithIds=o,i.state.focusedOption=a[l],i.state.focusedOptionId=Tl(o,a[l])}return i}return G4(n,[{key:"componentDidMount",value:function(){this.startListeningComposition(),this.startListeningToTouch(),this.props.closeMenuOnScroll&&document&&document.addEventListener&&document.addEventListener("scroll",this.onScroll,!0),this.props.autoFocus&&this.focusInput(),this.props.menuIsOpen&&this.state.focusedOption&&this.menuListRef&&this.focusedOptionRef&&wp(this.menuListRef,this.focusedOptionRef)}},{key:"componentDidUpdate",value:function(i){var o=this.props,a=o.isDisabled,l=o.menuIsOpen,s=this.state.isFocused;(s&&!a&&i.isDisabled||s&&l&&!i.menuIsOpen)&&this.focusInput(),s&&a&&!i.isDisabled?this.setState({isFocused:!1},this.onMenuClose):!s&&!a&&i.isDisabled&&this.inputRef===document.activeElement&&this.setState({isFocused:!0}),this.menuListRef&&this.focusedOptionRef&&this.scrollToFocusedOptionOnUpdate&&(wp(this.menuListRef,this.focusedOptionRef),this.scrollToFocusedOptionOnUpdate=!1)}},{key:"componentWillUnmount",value:function(){this.stopListeningComposition(),this.stopListeningToTouch(),document.removeEventListener("scroll",this.onScroll,!0)}},{key:"onMenuOpen",value:function(){this.props.onMenuOpen()}},{key:"onMenuClose",value:function(){this.onInputChange("",{action:"menu-close",prevInputValue:this.props.inputValue}),this.props.onMenuClose()}},{key:"onInputChange",value:function(i,o){this.props.onInputChange(i,o)}},{key:"focusInput",value:function(){this.inputRef&&this.inputRef.focus()}},{key:"blurInput",value:function(){this.inputRef&&this.inputRef.blur()}},{key:"openMenu",value:function(i){var o=this,a=this.state,l=a.selectValue,s=a.isFocused,c=this.buildFocusableOptions(),d=i==="first"?0:c.length-1;if(!this.props.isMulti){var f=c.indexOf(l[0]);f>-1&&(d=f)}this.scrollToFocusedOptionOnUpdate=!(s&&this.menuListRef),this.setState({inputIsHiddenAfterUpdate:!1,focusedValue:null,focusedOption:c[d],focusedOptionId:this.getFocusedOptionId(c[d])},function(){return o.onMenuOpen()})}},{key:"focusValue",value:function(i){var o=this.state,a=o.selectValue,l=o.focusedValue;if(this.props.isMulti){this.setState({focusedOption:null});var s=a.indexOf(l);l||(s=-1);var c=a.length-1,d=-1;if(a.length){switch(i){case"previous":s===0?d=0:s===-1?d=c:d=s-1;break;case"next":s>-1&&s<c&&(d=s+1);break}this.setState({inputIsHidden:d!==-1,focusedValue:a[d]})}}}},{key:"focusOption",value:function(){var i=arguments.length>0&&arguments[0]!==void 0?arguments[0]:"first",o=this.props.pageSize,a=this.state.focusedOption,l=this.getFocusableOptions();if(l.length){var s=0,c=l.indexOf(a);a||(c=-1),i==="up"?s=c>0?c-1:l.length-1:i==="down"?s=(c+1)%l.length:i==="pageup"?(s=c-o,s<0&&(s=0)):i==="pagedown"?(s=c+o,s>l.length-1&&(s=l.length-1)):i==="last"&&(s=l.length-1),this.scrollToFocusedOptionOnUpdate=!0,this.setState({focusedOption:l[s],focusedValue:null,focusedOptionId:this.getFocusedOptionId(l[s])})}}},{key:"getTheme",value:function(){return this.props.theme?typeof this.props.theme=="function"?this.props.theme(Pl):G(G({},Pl),this.props.theme):Pl}},{key:"getCommonProps",value:function(){var i=this.clearValue,o=this.cx,a=this.getStyles,l=this.getClassNames,s=this.getValue,c=this.selectOption,d=this.setValue,f=this.props,m=f.isMulti,y=f.isRtl,g=f.options,x=this.hasValue();return{clearValue:i,cx:o,getStyles:a,getClassNames:l,getValue:s,hasValue:x,isMulti:m,isRtl:y,options:g,selectOption:c,selectProps:f,setValue:d,theme:this.getTheme()}}},{key:"hasValue",value:function(){var i=this.state.selectValue;return i.length>0}},{key:"hasOptions",value:function(){return!!this.getFocusableOptions().length}},{key:"isClearable",value:function(){var i=this.props,o=i.isClearable,a=i.isMulti;return o===void 0?a:o}},{key:"isOptionDisabled",value:function(i,o){return Hx(this.props,i,o)}},{key:"isOptionSelected",value:function(i,o){return Qx(this.props,i,o)}},{key:"filterOption",value:function(i,o){return Yx(this.props,i,o)}},{key:"formatOptionLabel",value:function(i,o){if(typeof this.props.formatOptionLabel=="function"){var a=this.props.inputValue,l=this.state.selectValue;return this.props.formatOptionLabel(i,{context:o,inputValue:a,selectValue:l})}else return this.getOptionLabel(i)}},{key:"formatGroupLabel",value:function(i){return this.props.formatGroupLabel(i)}},{key:"startListeningComposition",value:function(){document&&document.addEventListener&&(document.addEventListener("compositionstart",this.onCompositionStart,!1),document.addEventListener("compositionend",this.onCompositionEnd,!1))}},{key:"stopListeningComposition",value:function(){document&&document.removeEventListener&&(document.removeEventListener("compositionstart",this.onCompositionStart),document.removeEventListener("compositionend",this.onCompositionEnd))}},{key:"startListeningToTouch",value:function(){document&&document.addEventListener&&(document.addEventListener("touchstart",this.onTouchStart,!1),document.addEventListener("touchmove",this.onTouchMove,!1),document.addEventListener("touchend",this.onTouchEnd,!1))}},{key:"stopListeningToTouch",value:function(){document&&document.removeEventListener&&(document.removeEventListener("touchstart",this.onTouchStart),document.removeEventListener("touchmove",this.onTouchMove),document.removeEventListener("touchend",this.onTouchEnd))}},{key:"renderInput",value:function(){var i=this.props,o=i.isDisabled,a=i.isSearchable,l=i.inputId,s=i.inputValue,c=i.tabIndex,d=i.form,f=i.menuIsOpen,m=i.required,y=this.getComponents(),g=y.Input,x=this.state,w=x.inputIsHidden,p=x.ariaSelection,h=this.commonProps,v=l||this.getElementId("input"),b=G(G(G({"aria-autocomplete":"list","aria-expanded":f,"aria-haspopup":!0,"aria-errormessage":this.props["aria-errormessage"],"aria-invalid":this.props["aria-invalid"],"aria-label":this.props["aria-label"],"aria-labelledby":this.props["aria-labelledby"],"aria-required":m,role:"combobox","aria-activedescendant":this.isAppleDevice?void 0:this.state.focusedOptionId||""},f&&{"aria-controls":this.getElementId("listbox")}),!a&&{"aria-readonly":!0}),this.hasValue()?(p==null?void 0:p.action)==="initial-input-focus"&&{"aria-describedby":this.getElementId("live-region")}:{"aria-describedby":this.getElementId("placeholder")});return a?M.createElement(g,X({},h,{autoCapitalize:"none",autoComplete:"off",autoCorrect:"off",id:v,innerRef:this.getInputRef,isDisabled:o,isHidden:w,onBlur:this.onInputBlur,onChange:this.handleInputChange,onFocus:this.onInputFocus,spellCheck:"false",tabIndex:c,form:d,type:"text",value:s},b)):M.createElement(rC,X({id:v,innerRef:this.getInputRef,onBlur:this.onInputBlur,onChange:Ga,onFocus:this.onInputFocus,disabled:o,tabIndex:c,inputMode:"none",form:d,value:""},b))}},{key:"renderPlaceholderOrValue",value:function(){var i=this,o=this.getComponents(),a=o.MultiValue,l=o.MultiValueContainer,s=o.MultiValueLabel,c=o.MultiValueRemove,d=o.SingleValue,f=o.Placeholder,m=this.commonProps,y=this.props,g=y.controlShouldRenderValue,x=y.isDisabled,w=y.isMulti,p=y.inputValue,h=y.placeholder,v=this.state,b=v.selectValue,k=v.focusedValue,_=v.isFocused;if(!this.hasValue()||!g)return p?null:M.createElement(f,X({},m,{key:"placeholder",isDisabled:x,isFocused:_,innerProps:{id:this.getElementId("placeholder")}}),h);if(w)return b.map(function(P,T){var I=P===k,W="".concat(i.getOptionLabel(P),"-").concat(i.getOptionValue(P));return M.createElement(a,X({},m,{components:{Container:l,Label:s,Remove:c},isFocused:I,isDisabled:x,key:W,index:T,removeProps:{onClick:function(){return i.removeValue(P)},onTouchEnd:function(){return i.removeValue(P)},onMouseDown:function(D){D.preventDefault()}},data:P}),i.formatOptionLabel(P,"value"))});if(p)return null;var E=b[0];return M.createElement(d,X({},m,{data:E,isDisabled:x}),this.formatOptionLabel(E,"value"))}},{key:"renderClearIndicator",value:function(){var i=this.getComponents(),o=i.ClearIndicator,a=this.commonProps,l=this.props,s=l.isDisabled,c=l.isLoading,d=this.state.isFocused;if(!this.isClearable()||!o||s||!this.hasValue()||c)return null;var f={onMouseDown:this.onClearIndicatorMouseDown,onTouchEnd:this.onClearIndicatorTouchEnd,"aria-hidden":"true"};return M.createElement(o,X({},a,{innerProps:f,isFocused:d}))}},{key:"renderLoadingIndicator",value:function(){var i=this.getComponents(),o=i.LoadingIndicator,a=this.commonProps,l=this.props,s=l.isDisabled,c=l.isLoading,d=this.state.isFocused;if(!o||!c)return null;var f={"aria-hidden":"true"};return M.createElement(o,X({},a,{innerProps:f,isDisabled:s,isFocused:d}))}},{key:"renderIndicatorSeparator",value:function(){var i=this.getComponents(),o=i.DropdownIndicator,a=i.IndicatorSeparator;if(!o||!a)return null;var l=this.commonProps,s=this.props.isDisabled,c=this.state.isFocused;return M.createElement(a,X({},l,{isDisabled:s,isFocused:c}))}},{key:"renderDropdownIndicator",value:function(){var i=this.getComponents(),o=i.DropdownIndicator;if(!o)return null;var a=this.commonProps,l=this.props.isDisabled,s=this.state.isFocused,c={onMouseDown:this.onDropdownIndicatorMouseDown,onTouchEnd:this.onDropdownIndicatorTouchEnd,"aria-hidden":"true"};return M.createElement(o,X({},a,{innerProps:c,isDisabled:l,isFocused:s}))}},{key:"renderMenu",value:function(){var i=this,o=this.getComponents(),a=o.Group,l=o.GroupHeading,s=o.Menu,c=o.MenuList,d=o.MenuPortal,f=o.LoadingMessage,m=o.NoOptionsMessage,y=o.Option,g=this.commonProps,x=this.state.focusedOption,w=this.props,p=w.captureMenuScroll,h=w.inputValue,v=w.isLoading,b=w.loadingMessage,k=w.minMenuHeight,_=w.maxMenuHeight,E=w.menuIsOpen,P=w.menuPlacement,T=w.menuPosition,I=w.menuPortalTarget,W=w.menuShouldBlockScroll,A=w.menuShouldScrollIntoView,D=w.noOptionsMessage,q=w.onMenuScrollToTop,ee=w.onMenuScrollToBottom;if(!E)return null;var te=function(Oe,be){var Ue=Oe.type,me=Oe.data,Se=Oe.isDisabled,et=Oe.isSelected,yt=Oe.label,z=Oe.value,B=x===me,ie=Se?void 0:function(){return i.onOptionHover(me)},oe=Se?void 0:function(){return i.selectOption(me)},ne="".concat(i.getElementId("option"),"-").concat(be),le={id:ne,onClick:oe,onMouseMove:ie,onMouseOver:ie,tabIndex:-1,role:"option","aria-selected":i.isAppleDevice?void 0:et};return M.createElement(y,X({},g,{innerProps:le,data:me,isDisabled:Se,isSelected:et,key:ne,label:yt,type:Ue,value:z,isFocused:B,innerRef:B?i.getFocusedOptionRef:void 0}),i.formatOptionLabel(Oe.data,"menu"))},ve;if(this.hasOptions())ve=this.getCategorizedOptions().map(function(re){if(re.type==="group"){var Oe=re.data,be=re.options,Ue=re.index,me="".concat(i.getElementId("group"),"-").concat(Ue),Se="".concat(me,"-heading");return M.createElement(a,X({},g,{key:me,data:Oe,options:be,Heading:l,headingProps:{id:Se,data:re.data},label:i.formatGroupLabel(re.data)}),re.options.map(function(et){return te(et,"".concat(Ue,"-").concat(et.index))}))}else if(re.type==="option")return te(re,"".concat(re.index))});else if(v){var F=b({inputValue:h});if(F===null)return null;ve=M.createElement(f,g,F)}else{var Q=D({inputValue:h});if(Q===null)return null;ve=M.createElement(m,g,Q)}var Y={minMenuHeight:k,maxMenuHeight:_,menuPlacement:P,menuPosition:T,menuShouldScrollIntoView:A},de=M.createElement(Lk,X({},g,Y),function(re){var Oe=re.ref,be=re.placerProps,Ue=be.placement,me=be.maxHeight;return M.createElement(s,X({},g,Y,{innerRef:Oe,innerProps:{onMouseDown:i.onMenuMouseDown,onMouseMove:i.onMenuMouseMove},isLoading:v,placement:Ue}),M.createElement(uC,{captureEnabled:p,onTopArrive:q,onBottomArrive:ee,lockEnabled:W},function(Se){return M.createElement(c,X({},g,{innerRef:function(yt){i.getMenuListRef(yt),Se(yt)},innerProps:{role:"listbox","aria-multiselectable":g.isMulti,id:i.getElementId("listbox")},isLoading:v,maxHeight:me,focusedOption:x}),ve)}))});return I||T==="fixed"?M.createElement(d,X({},g,{appendTo:I,controlElement:this.controlRef,menuPlacement:P,menuPosition:T}),de):de}},{key:"renderFormField",value:function(){var i=this,o=this.props,a=o.delimiter,l=o.isDisabled,s=o.isMulti,c=o.name,d=o.required,f=this.state.selectValue;if(d&&!this.hasValue()&&!l)return M.createElement(fC,{name:c,onFocus:this.onValueInputFocus});if(!(!c||l))if(s)if(a){var m=f.map(function(x){return i.getOptionValue(x)}).join(a);return M.createElement("input",{name:c,type:"hidden",value:m})}else{var y=f.length>0?f.map(function(x,w){return M.createElement("input",{key:"i-".concat(w),name:c,type:"hidden",value:i.getOptionValue(x)})}):M.createElement("input",{name:c,type:"hidden",value:""});return M.createElement("div",null,y)}else{var g=f[0]?this.getOptionValue(f[0]):"";return M.createElement("input",{name:c,type:"hidden",value:g})}}},{key:"renderLiveRegion",value:function(){var i=this.commonProps,o=this.state,a=o.ariaSelection,l=o.focusedOption,s=o.focusedValue,c=o.isFocused,d=o.selectValue,f=this.getFocusableOptions();return M.createElement(Xj,X({},i,{id:this.getElementId("live-region"),ariaSelection:a,focusedOption:l,focusedValue:s,isFocused:c,selectValue:d,focusableOptions:f,isAppleDevice:this.isAppleDevice}))}},{key:"render",value:function(){var i=this.getComponents(),o=i.Control,a=i.IndicatorsContainer,l=i.SelectContainer,s=i.ValueContainer,c=this.props,d=c.className,f=c.id,m=c.isDisabled,y=c.menuIsOpen,g=this.state.isFocused,x=this.commonProps=this.getCommonProps();return M.createElement(l,X({},x,{className:d,innerProps:{id:f,onKeyDown:this.onKeyDown},isDisabled:m,isFocused:g}),this.renderLiveRegion(),M.createElement(o,X({},x,{innerRef:this.getControlRef,innerProps:{onMouseDown:this.onControlMouseDown,onTouchEnd:this.onControlTouchEnd},isDisabled:m,isFocused:g,menuIsOpen:y}),M.createElement(s,X({},x,{isDisabled:m}),this.renderPlaceholderOrValue(),this.renderInput()),M.createElement(a,X({},x,{isDisabled:m}),this.renderClearIndicator(),this.renderLoadingIndicator(),this.renderIndicatorSeparator(),this.renderDropdownIndicator())),this.renderMenu(),this.renderFormField())}}],[{key:"getDerivedStateFromProps",value:function(i,o){var a=o.prevProps,l=o.clearFocusValueOnUpdate,s=o.inputIsHiddenAfterUpdate,c=o.ariaSelection,d=o.isFocused,f=o.prevWasFocused,m=o.instancePrefix,y=i.options,g=i.value,x=i.menuIsOpen,w=i.inputValue,p=i.isMulti,h=yp(g),v={};if(a&&(g!==a.value||y!==a.options||x!==a.menuIsOpen||w!==a.inputValue)){var b=x?_C(i,h):[],k=x?Dp(ma(i,h),"".concat(m,"-option")):[],_=l?PC(o,h):null,E=TC(o,b),P=Tl(k,E);v={selectValue:h,focusedOption:E,focusedOptionId:P,focusableOptionsWithIds:k,focusedValue:_,clearFocusValueOnUpdate:!1}}var T=s!=null&&i!==a?{inputIsHidden:s,inputIsHiddenAfterUpdate:void 0}:{},I=c,W=d&&f;return d&&!W&&(I={value:Ko(p,h,h[0]||null),options:h,action:"initial-input-focus"},W=!f),(c==null?void 0:c.action)==="initial-input-focus"&&(I=null),G(G(G({},v),T),{},{prevProps:i,ariaSelection:I,prevWasFocused:W})}}]),n}(M.Component);Gx.defaultProps=OC;var RC=M.forwardRef(function(e,t){var n=Y4(e);return M.createElement(Gx,X({ref:t},n))}),IC=RC;const DC=(e,t)=>{const[n,r]=M.useState(()=>{try{const o=window.localStorage.getItem(e);return o?JSON.parse(o):t}catch(o){return console.error("Error loading data from localStorage:",o),t}});return[n,o=>{try{const a=o instanceof Function?o(n):o;r(a),window.localStorage.setItem(e,JSON.stringify(a))}catch(a){console.error("Error storing data to localStorage:",a)}}]},Ap=[{value:"",label:"Оберіть послугу"},{value:"Менторство та консультації",label:"Менторство та консультації"},{value:"Діагностика",label:"Діагностика"},{value:"Стратегії",label:"Стратегії"},{value:"Навчання",label:"Навчання"},{value:"Інше",label:"Інше"}],zp="/healthy-management-project/assets/computer1x-nLk1eyXX.webp",LC="/healthy-management-project/assets/computer@2x-oGWk-qXD.webp",AC="/healthy-management-project/assets/computer_1440_1x-l4N2dq6p.jpg",zC="/healthy-management-project/assets/computer_1440_1x-sUcWDD18.webp",FC="/healthy-management-project/assets/computer_1440@2x-vTT-4SwT.webp",VC="/healthy-management-project/assets/computer_768_1x-Oro_pkzQ.jpg",NC="/healthy-management-project/assets/computer_768_1x-brb-BlfY.webp",$C="/healthy-management-project/assets/computer_768@2x-fbWMIh0a.webp",Fp="/healthy-management-project/assets/mob_computer1x-gdjE7oao.webp",UC="/healthy-management-project/assets/mob_computer@2x-JptvcU_h.webp",dn=()=>u.jsx("svg",{width:"8",height:"8",children:u.jsx("use",{href:`${da}#star`})});var qx={exports:{}};function WC(e){return e&&typeof e=="object"&&"default"in e?e.default:e}var Ml=WC(M),BC=po;function HC(e,t){for(var n=Object.getOwnPropertyNames(t),r=0;r<n.length;r++){var i=n[r],o=Object.getOwnPropertyDescriptor(t,i);o&&o.configurable&&e[i]===void 0&&Object.defineProperty(e,i,o)}return e}function Ku(){return(Ku=Object.assign||function(e){for(var t=1;t<arguments.length;t++){var n=arguments[t];for(var r in n)Object.prototype.hasOwnProperty.call(n,r)&&(e[r]=n[r])}return e}).apply(this,arguments)}function QC(e,t){e.prototype=Object.create(t.prototype),HC(e.prototype.constructor=e,t)}function YC(e,t){if(e==null)return{};var n,r,i={},o=Object.keys(e);for(r=0;r<o.length;r++)n=o[r],0<=t.indexOf(n)||(i[n]=e[n]);return i}function kr(e){if(e===void 0)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return e}var KC=function(e,t,n,r,i,o,a,l){if(!e){var s;if(t===void 0)s=new Error("Minified exception occurred; use the non-minified dev environment for the full error message and additional helpful warnings.");else{var c=[n,r,i,o,a,l],d=0;(s=new Error(t.replace(/%s/g,function(){return c[d++]}))).name="Invariant Violation"}throw s.framesToPop=1,s}},Vp=KC;function Np(e,t,n){if("selectionStart"in e&&"selectionEnd"in e)e.selectionStart=t,e.selectionEnd=n;else{var r=e.createTextRange();r.collapse(!0),r.moveStart("character",t),r.moveEnd("character",n-t),r.select()}}function GC(e){var t=0,n=0;if("selectionStart"in e&&"selectionEnd"in e)t=e.selectionStart,n=e.selectionEnd;else{var r=document.selection.createRange();r.parentElement()===e&&(t=-r.moveStart("character",-e.value.length),n=-r.moveEnd("character",-e.value.length))}return{start:t,end:n,length:n-t}}var qC={9:"[0-9]",a:"[A-Za-z]","*":"[A-Za-z0-9]"},XC="_";function $p(e,t,n){var r="",i="",o=null,a=[];if(t===void 0&&(t=XC),n==null&&(n=qC),!e||typeof e!="string")return{maskChar:t,formatChars:n,mask:null,prefix:null,lastEditablePosition:null,permanents:[]};var l=!1;return e.split("").forEach(function(s){l=!l&&s==="\\"||(l||!n[s]?(a.push(r.length),r.length===a.length-1&&(i+=s)):o=r.length+1,r+=s,!1)}),{maskChar:t,formatChars:n,prefix:i,mask:r,lastEditablePosition:o,permanents:a}}function Ct(e,t){return e.permanents.indexOf(t)!==-1}function Vs(e,t,n){var r=e.mask,i=e.formatChars;if(!n)return!1;if(Ct(e,t))return r[t]===n;var o=i[r[t]];return new RegExp(o).test(n)}function Up(e,t){return t.split("").every(function(n,r){return Ct(e,r)||!Vs(e,r,n)})}function Oi(e,t){var n=e.maskChar,r=e.prefix;if(!n){for(;t.length>r.length&&Ct(e,t.length-1);)t=t.slice(0,t.length-1);return t.length}for(var i=r.length,o=t.length;o>=r.length;o--){var a=t[o];if(!Ct(e,o)&&Vs(e,o,a)){i=o+1;break}}return i}function Xx(e,t){return Oi(e,t)===e.mask.length}function hn(e,t){var n=e.maskChar,r=e.mask,i=e.prefix;if(!n){for((t=Gu(e,"",t,0)).length<i.length&&(t=i);t.length<r.length&&Ct(e,t.length);)t+=r[t.length];return t}if(t)return Gu(e,hn(e,""),t,0);for(var o=0;o<r.length;o++)Ct(e,o)?t+=r[o]:t+=n;return t}function JC(e,t,n,r){var i=n+r,o=e.maskChar,a=e.mask,l=e.prefix,s=t.split("");if(o)return s.map(function(d,f){return f<n||i<=f?d:Ct(e,f)?a[f]:o}).join("");for(var c=i;c<s.length;c++)Ct(e,c)&&(s[c]="");return n=Math.max(l.length,n),s.splice(n,i-n),t=s.join(""),hn(e,t)}function Gu(e,t,n,r){var i=e.mask,o=e.maskChar,a=e.prefix,l=n.split(""),s=Xx(e,t);return!o&&r>t.length&&(t+=i.slice(t.length,r)),l.every(function(c){for(;y=c,Ct(e,m=r)&&y!==i[m];){if(r>=t.length&&(t+=i[r]),d=c,f=r,o&&Ct(e,f)&&d===o)return!0;if(++r>=i.length)return!1}var d,f,m,y;return!Vs(e,r,c)&&c!==o||(r<t.length?t=o||s||r<a.length?t.slice(0,r)+c+t.slice(r+1):(t=t.slice(0,r)+c+t.slice(r),hn(e,t)):o||(t+=c),++r<i.length)}),t}function ZC(e,t,n,r){var i=e.mask,o=e.maskChar,a=n.split(""),l=r;return a.every(function(s){for(;d=s,Ct(e,c=r)&&d!==i[c];)if(++r>=i.length)return!1;var c,d;return(Vs(e,r,s)||s===o)&&r++,r<i.length}),r-l}function eE(e,t){for(var n=t;0<=n;--n)if(!Ct(e,n))return n;return null}function Fi(e,t){for(var n=e.mask,r=t;r<n.length;++r)if(!Ct(e,r))return r;return null}function Rl(e){return e||e===0?e+"":""}function tE(e,t,n,r,i){var o=e.mask,a=e.prefix,l=e.lastEditablePosition,s=t,c="",d=0,f=0,m=Math.min(i.start,n.start);return n.end>i.start?f=(d=ZC(e,r,c=s.slice(i.start,n.end),m))?i.length:0:s.length<r.length&&(f=r.length-s.length),s=r,f&&(f===1&&!i.length&&(m=i.start===n.start?Fi(e,n.start):eE(e,n.start)),s=JC(e,s,m,f)),s=Gu(e,s,c,m),(m+=d)>=o.length?m=o.length:m<a.length&&!d?m=a.length:m>=a.length&&m<l&&d&&(m=Fi(e,m)),c||(c=null),{value:s=hn(e,s),enteredString:c,selection:{start:m,end:m}}}function nE(){var e=new RegExp("windows","i"),t=new RegExp("phone","i"),n=navigator.userAgent;return e.test(n)&&t.test(n)}function ft(e){return typeof e=="function"}function rE(){return window.requestAnimationFrame||window.webkitRequestAnimationFrame||window.mozRequestAnimationFrame}function Jx(){return window.cancelAnimationFrame||window.webkitCancelRequestAnimationFrame||window.webkitCancelAnimationFrame||window.mozCancelAnimationFrame}function Wp(e){return(Jx()?rE():function(){return setTimeout(e,1e3/60)})(e)}function Il(e){(Jx()||clearTimeout)(e)}var iE=function(e){function t(r){var i=e.call(this,r)||this;i.focused=!1,i.mounted=!1,i.previousSelection=null,i.selectionDeferId=null,i.saveSelectionLoopDeferId=null,i.saveSelectionLoop=function(){i.previousSelection=i.getSelection(),i.saveSelectionLoopDeferId=Wp(i.saveSelectionLoop)},i.runSaveSelectionLoop=function(){i.saveSelectionLoopDeferId===null&&i.saveSelectionLoop()},i.stopSaveSelectionLoop=function(){i.saveSelectionLoopDeferId!==null&&(Il(i.saveSelectionLoopDeferId),i.saveSelectionLoopDeferId=null,i.previousSelection=null)},i.getInputDOMNode=function(){if(!i.mounted)return null;var g=BC.findDOMNode(kr(kr(i))),x=typeof window<"u"&&g instanceof window.Element;if(g&&!x)return null;if(g.nodeName!=="INPUT"&&(g=g.querySelector("input")),!g)throw new Error("react-input-mask: inputComponent doesn't contain input node");return g},i.getInputValue=function(){var g=i.getInputDOMNode();return g?g.value:null},i.setInputValue=function(g){var x=i.getInputDOMNode();x&&(i.value=g,x.value=g)},i.setCursorToEnd=function(){var g=Oi(i.maskOptions,i.value),x=Fi(i.maskOptions,g);x!==null&&i.setCursorPosition(x)},i.setSelection=function(g,x,w){w===void 0&&(w={});var p=i.getInputDOMNode(),h=i.isFocused();p&&h&&(w.deferred||Np(p,g,x),i.selectionDeferId!==null&&Il(i.selectionDeferId),i.selectionDeferId=Wp(function(){i.selectionDeferId=null,Np(p,g,x)}),i.previousSelection={start:g,end:x,length:Math.abs(x-g)})},i.getSelection=function(){return GC(i.getInputDOMNode())},i.getCursorPosition=function(){return i.getSelection().start},i.setCursorPosition=function(g){i.setSelection(g,g)},i.isFocused=function(){return i.focused},i.getBeforeMaskedValueChangeConfig=function(){var g=i.maskOptions,x=g.mask,w=g.maskChar,p=g.permanents,h=g.formatChars;return{mask:x,maskChar:w,permanents:p,alwaysShowMask:!!i.props.alwaysShowMask,formatChars:h}},i.isInputAutofilled=function(g,x,w,p){var h=i.getInputDOMNode();try{if(h.matches(":-webkit-autofill"))return!0}catch{}return!i.focused||p.end<w.length&&x.end===g.length},i.onChange=function(g){var x=kr(kr(i)).beforePasteState,w=kr(kr(i)).previousSelection,p=i.props.beforeMaskedValueChange,h=i.getInputValue(),v=i.value,b=i.getSelection();i.isInputAutofilled(h,b,v,w)&&(v=hn(i.maskOptions,""),w={start:0,end:0,length:0}),x&&(w=x.selection,v=x.value,b={start:w.start+h.length,end:w.start+h.length,length:0},h=v.slice(0,w.start)+h+v.slice(w.end),i.beforePasteState=null);var k=tE(i.maskOptions,h,b,v,w),_=k.enteredString,E=k.selection,P=k.value;if(ft(p)){var T=p({value:P,selection:E},{value:v,selection:w},_,i.getBeforeMaskedValueChangeConfig());P=T.value,E=T.selection}i.setInputValue(P),ft(i.props.onChange)&&i.props.onChange(g),i.isWindowsPhoneBrowser?i.setSelection(E.start,E.end,{deferred:!0}):i.setSelection(E.start,E.end)},i.onFocus=function(g){var x=i.props.beforeMaskedValueChange,w=i.maskOptions,p=w.mask,h=w.prefix;if(i.focused=!0,i.mounted=!0,p){if(i.value)Oi(i.maskOptions,i.value)<i.maskOptions.mask.length&&i.setCursorToEnd();else{var v=hn(i.maskOptions,h),b=hn(i.maskOptions,v),k=Oi(i.maskOptions,b),_=Fi(i.maskOptions,k),E={start:_,end:_};if(ft(x)){var P=x({value:b,selection:E},{value:i.value,selection:null},null,i.getBeforeMaskedValueChangeConfig());b=P.value,E=P.selection}var T=b!==i.getInputValue();T&&i.setInputValue(b),T&&ft(i.props.onChange)&&i.props.onChange(g),i.setSelection(E.start,E.end)}i.runSaveSelectionLoop()}ft(i.props.onFocus)&&i.props.onFocus(g)},i.onBlur=function(g){var x=i.props.beforeMaskedValueChange,w=i.maskOptions.mask;if(i.stopSaveSelectionLoop(),i.focused=!1,w&&!i.props.alwaysShowMask&&Up(i.maskOptions,i.value)){var p="";ft(x)&&(p=x({value:p,selection:null},{value:i.value,selection:i.previousSelection},null,i.getBeforeMaskedValueChangeConfig()).value);var h=p!==i.getInputValue();h&&i.setInputValue(p),h&&ft(i.props.onChange)&&i.props.onChange(g)}ft(i.props.onBlur)&&i.props.onBlur(g)},i.onMouseDown=function(g){if(!i.focused&&document.addEventListener){i.mouseDownX=g.clientX,i.mouseDownY=g.clientY,i.mouseDownTime=new Date().getTime();var x=function w(p){if(document.removeEventListener("mouseup",w),i.focused){var h=Math.abs(p.clientX-i.mouseDownX),v=Math.abs(p.clientY-i.mouseDownY),b=Math.max(h,v),k=new Date().getTime()-i.mouseDownTime;(b<=10&&k<=200||b<=5&&k<=300)&&i.setCursorToEnd()}};document.addEventListener("mouseup",x)}ft(i.props.onMouseDown)&&i.props.onMouseDown(g)},i.onPaste=function(g){ft(i.props.onPaste)&&i.props.onPaste(g),g.defaultPrevented||(i.beforePasteState={value:i.getInputValue(),selection:i.getSelection()},i.setInputValue(""))},i.handleRef=function(g){i.props.children==null&&ft(i.props.inputRef)&&i.props.inputRef(g)};var o=r.mask,a=r.maskChar,l=r.formatChars,s=r.alwaysShowMask,c=r.beforeMaskedValueChange,d=r.defaultValue,f=r.value;i.maskOptions=$p(o,a,l),d==null&&(d=""),f==null&&(f=d);var m=Rl(f);if(i.maskOptions.mask&&(s||m)&&(m=hn(i.maskOptions,m),ft(c))){var y=r.value;r.value==null&&(y=d),m=c({value:m,selection:null},{value:y=Rl(y),selection:null},null,i.getBeforeMaskedValueChangeConfig()).value}return i.value=m,i}QC(t,e);var n=t.prototype;return n.componentDidMount=function(){this.mounted=!0,this.getInputDOMNode()&&(this.isWindowsPhoneBrowser=nE(),this.maskOptions.mask&&this.getInputValue()!==this.value&&this.setInputValue(this.value))},n.componentDidUpdate=function(){var r=this.previousSelection,i=this.props,o=i.beforeMaskedValueChange,a=i.alwaysShowMask,l=i.mask,s=i.maskChar,c=i.formatChars,d=this.maskOptions,f=a||this.isFocused(),m=this.props.value!=null,y=m?Rl(this.props.value):this.value,g=r?r.start:null;if(this.maskOptions=$p(l,s,c),this.maskOptions.mask){!d.mask&&this.isFocused()&&this.runSaveSelectionLoop();var x=this.maskOptions.mask&&this.maskOptions.mask!==d.mask;if(d.mask||m||(y=this.getInputValue()),(x||this.maskOptions.mask&&(y||f))&&(y=hn(this.maskOptions,y)),x){var w=Oi(this.maskOptions,y);(g===null||w<g)&&(g=Xx(this.maskOptions,y)?w:Fi(this.maskOptions,w))}!this.maskOptions.mask||!Up(this.maskOptions,y)||f||m&&this.props.value||(y="");var p={start:g,end:g};if(ft(o)){var h=o({value:y,selection:p},{value:this.value,selection:this.previousSelection},null,this.getBeforeMaskedValueChangeConfig());y=h.value,p=h.selection}this.value=y;var v=this.getInputValue()!==this.value;v?(this.setInputValue(this.value),this.forceUpdate()):x&&this.forceUpdate();var b=!1;p.start!=null&&p.end!=null&&(b=!r||r.start!==p.start||r.end!==p.end),(b||v)&&this.setSelection(p.start,p.end)}else d.mask&&(this.stopSaveSelectionLoop(),this.forceUpdate())},n.componentWillUnmount=function(){this.mounted=!1,this.selectionDeferId!==null&&Il(this.selectionDeferId),this.stopSaveSelectionLoop()},n.render=function(){var r,i=this.props,o=(i.mask,i.alwaysShowMask,i.maskChar,i.formatChars,i.inputRef,i.beforeMaskedValueChange,i.children),a=YC(i,["mask","alwaysShowMask","maskChar","formatChars","inputRef","beforeMaskedValueChange","children"]);if(o){ft(o)||Vp(!1);var l=["onChange","onPaste","onMouseDown","onFocus","onBlur","value","disabled","readOnly"],s=Ku({},a);l.forEach(function(d){return delete s[d]}),r=o(s),l.filter(function(d){return r.props[d]!=null&&r.props[d]!==a[d]}).length&&Vp(!1)}else r=Ml.createElement("input",Ku({ref:this.handleRef},a));var c={onFocus:this.onFocus,onBlur:this.onBlur};return this.maskOptions.mask&&(a.disabled||a.readOnly||(c.onChange=this.onChange,c.onPaste=this.onPaste,c.onMouseDown=this.onMouseDown),a.value!=null&&(c.value=this.value)),r=Ml.cloneElement(r,c)},t}(Ml.Component),oE=iE;qx.exports=oE;var aE=qx.exports;const sE=ao(aE),lE=j.section`
  padding-top: 40px;
  padding-bottom: 40px;

  @media screen and (min-width: 1920px) {
    padding-top: 80px;
    padding-bottom: 80px;
  }
`,uE=j.div`
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
`,cE=j.h2`
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
`,dE=j.div`
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
`,Go=j.img`
  width: 100%;
  height: 100%;
`,fE=j.div`
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
`,pE=j.h3`
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
`,hE=j.form`
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  gap: 8px;
  align-self: stretch;
`,Bp=j.label`
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
`,mE=j(dn)`
  vertical-align: super;
`,Hp=j.input`
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
`,gE=j.div`
  display: flex;
  flex-direction: column;
  gap: 8px;
  width: 100%;

  @media screen and (min-width: 1440px) {
    flex-direction: row;
  }
`,Qp=j.label`
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
`,xE=j(sE)`
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
`,vE=j.label`
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
`,yE=j.textarea`
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
`,wi=j.p`
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
`,wE=j.button`
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
`;var xo=e=>e.type==="checkbox",zr=e=>e instanceof Date,lt=e=>e==null;const Zx=e=>typeof e=="object";var He=e=>!lt(e)&&!Array.isArray(e)&&Zx(e)&&!zr(e),ev=e=>He(e)&&e.target?xo(e.target)?e.target.checked:e.target.value:e,bE=e=>e.substring(0,e.search(/\.\d+(\.|$)/))||e,tv=(e,t)=>e.has(bE(t)),SE=e=>{const t=e.constructor&&e.constructor.prototype;return He(t)&&t.hasOwnProperty("isPrototypeOf")},pd=typeof window<"u"&&typeof window.HTMLElement<"u"&&typeof document<"u";function Nt(e){let t;const n=Array.isArray(e);if(e instanceof Date)t=new Date(e);else if(e instanceof Set)t=new Set(e);else if(!(pd&&(e instanceof Blob||e instanceof FileList))&&(n||He(e)))if(t=n?[]:{},!n&&!SE(e))t=e;else for(const r in e)e.hasOwnProperty(r)&&(t[r]=Nt(e[r]));else return e;return t}var vo=e=>Array.isArray(e)?e.filter(Boolean):[],Le=e=>e===void 0,U=(e,t,n)=>{if(!t||!He(e))return n;const r=vo(t.split(/[,[\].]+?/)).reduce((i,o)=>lt(i)?i:i[o],e);return Le(r)||r===e?Le(e[t])?n:e[t]:r},tn=e=>typeof e=="boolean";const Ja={BLUR:"blur",FOCUS_OUT:"focusout",CHANGE:"change"},Bt={onBlur:"onBlur",onChange:"onChange",onSubmit:"onSubmit",onTouched:"onTouched",all:"all"},cn={max:"max",min:"min",maxLength:"maxLength",minLength:"minLength",pattern:"pattern",required:"required",validate:"validate"},kE=Ce.createContext(null),hd=()=>Ce.useContext(kE);var nv=(e,t,n,r=!0)=>{const i={defaultValues:t._defaultValues};for(const o in e)Object.defineProperty(i,o,{get:()=>{const a=o;return t._proxyFormState[a]!==Bt.all&&(t._proxyFormState[a]=!r||Bt.all),n&&(n[a]=!0),e[a]}});return i},Tt=e=>He(e)&&!Object.keys(e).length,rv=(e,t,n,r)=>{n(e);const{name:i,...o}=e;return Tt(o)||Object.keys(o).length>=Object.keys(t).length||Object.keys(o).find(a=>t[a]===(!r||Bt.all))},ga=e=>Array.isArray(e)?e:[e],iv=(e,t,n)=>!e||!t||e===t||ga(e).some(r=>r&&(n?r===t:r.startsWith(t)||t.startsWith(r)));function md(e){const t=Ce.useRef(e);t.current=e,Ce.useEffect(()=>{const n=!e.disabled&&t.current.subject&&t.current.subject.subscribe({next:t.current.next});return()=>{n&&n.unsubscribe()}},[e.disabled])}function jE(e){const t=hd(),{control:n=t.control,disabled:r,name:i,exact:o}=e||{},[a,l]=Ce.useState(n._formState),s=Ce.useRef(!0),c=Ce.useRef({isDirty:!1,isLoading:!1,dirtyFields:!1,touchedFields:!1,isValidating:!1,isValid:!1,errors:!1}),d=Ce.useRef(i);return d.current=i,md({disabled:r,next:f=>s.current&&iv(d.current,f.name,o)&&rv(f,c.current,n._updateFormState)&&l({...n._formState,...f}),subject:n._subjects.state}),Ce.useEffect(()=>(s.current=!0,c.current.isValid&&n._updateValid(!0),()=>{s.current=!1}),[n]),nv(a,n,c.current,!1)}var rn=e=>typeof e=="string",ov=(e,t,n,r,i)=>rn(e)?(r&&t.watch.add(e),U(n,e,i)):Array.isArray(e)?e.map(o=>(r&&t.watch.add(o),U(n,o))):(r&&(t.watchAll=!0),n);function CE(e){const t=hd(),{control:n=t.control,name:r,defaultValue:i,disabled:o,exact:a}=e||{},l=Ce.useRef(r);l.current=r,md({disabled:o,subject:n._subjects.values,next:d=>{iv(l.current,d.name,a)&&c(Nt(ov(l.current,n._names,d.values||n._formValues,!1,i)))}});const[s,c]=Ce.useState(n._getWatch(r,i));return Ce.useEffect(()=>n._removeUnmounted()),s}var gd=e=>/^\w*$/.test(e),av=e=>vo(e.replace(/["|']|\]/g,"").split(/\.|\[/));function je(e,t,n){let r=-1;const i=gd(t)?[t]:av(t),o=i.length,a=o-1;for(;++r<o;){const l=i[r];let s=n;if(r!==a){const c=e[l];s=He(c)||Array.isArray(c)?c:isNaN(+i[r+1])?{}:[]}e[l]=s,e=e[l]}return e}function EE(e){const t=hd(),{name:n,disabled:r,control:i=t.control,shouldUnregister:o}=e,a=tv(i._names.array,n),l=CE({control:i,name:n,defaultValue:U(i._formValues,n,U(i._defaultValues,n,e.defaultValue)),exact:!0}),s=jE({control:i,name:n}),c=Ce.useRef(i.register(n,{...e.rules,value:l}));return c.current=i.register(n,e.rules),Ce.useEffect(()=>{const d=i._options.shouldUnregister||o,f=(m,y)=>{const g=U(i._fields,m);g&&(g._f.mount=y)};if(f(n,!0),d){const m=Nt(U(i._options.defaultValues,n));je(i._defaultValues,n,m),Le(U(i._formValues,n))&&je(i._formValues,n,m)}return()=>{(a?d&&!i._state.action:d)?i.unregister(n):f(n,!1)}},[n,i,a,o]),Ce.useEffect(()=>{U(i._fields,n)&&i._updateDisabledField({disabled:r,fields:i._fields,name:n,value:U(i._fields,n)._f.value})},[r,n,i]),{field:{name:n,value:l,...tn(r)||tn(s.disabled)?{disabled:s.disabled||r}:{},onChange:Ce.useCallback(d=>c.current.onChange({target:{value:ev(d),name:n},type:Ja.CHANGE}),[n]),onBlur:Ce.useCallback(()=>c.current.onBlur({target:{value:U(i._formValues,n),name:n},type:Ja.BLUR}),[n,i]),ref:d=>{const f=U(i._fields,n);f&&d&&(f._f.ref={focus:()=>d.focus(),select:()=>d.select(),setCustomValidity:m=>d.setCustomValidity(m),reportValidity:()=>d.reportValidity()})}},formState:s,fieldState:Object.defineProperties({},{invalid:{enumerable:!0,get:()=>!!U(s.errors,n)},isDirty:{enumerable:!0,get:()=>!!U(s.dirtyFields,n)},isTouched:{enumerable:!0,get:()=>!!U(s.touchedFields,n)},error:{enumerable:!0,get:()=>U(s.errors,n)}})}}const OE=e=>e.render(EE(e));var _E=(e,t,n,r,i)=>t?{...n[e],types:{...n[e]&&n[e].types?n[e].types:{},[r]:i||!0}}:{},Yp=e=>({isOnSubmit:!e||e===Bt.onSubmit,isOnBlur:e===Bt.onBlur,isOnChange:e===Bt.onChange,isOnAll:e===Bt.all,isOnTouch:e===Bt.onTouched}),Kp=(e,t,n)=>!n&&(t.watchAll||t.watch.has(e)||[...t.watch].some(r=>e.startsWith(r)&&/^\.\w+/.test(e.slice(r.length))));const xa=(e,t,n,r)=>{for(const i of n||Object.keys(e)){const o=U(e,i);if(o){const{_f:a,...l}=o;if(a){if(a.refs&&a.refs[0]&&t(a.refs[0],i)&&!r)break;if(a.ref&&t(a.ref,a.name)&&!r)break}else He(l)&&xa(l,t)}}};var PE=(e,t,n)=>{const r=vo(U(e,n));return je(r,"root",t[n]),je(e,n,r),e},xd=e=>e.type==="file",Un=e=>typeof e=="function",Za=e=>{if(!pd)return!1;const t=e?e.ownerDocument:0;return e instanceof(t&&t.defaultView?t.defaultView.HTMLElement:HTMLElement)},va=e=>rn(e),vd=e=>e.type==="radio",es=e=>e instanceof RegExp;const Gp={value:!1,isValid:!1},qp={value:!0,isValid:!0};var sv=e=>{if(Array.isArray(e)){if(e.length>1){const t=e.filter(n=>n&&n.checked&&!n.disabled).map(n=>n.value);return{value:t,isValid:!!t.length}}return e[0].checked&&!e[0].disabled?e[0].attributes&&!Le(e[0].attributes.value)?Le(e[0].value)||e[0].value===""?qp:{value:e[0].value,isValid:!0}:qp:Gp}return Gp};const Xp={isValid:!1,value:null};var lv=e=>Array.isArray(e)?e.reduce((t,n)=>n&&n.checked&&!n.disabled?{isValid:!0,value:n.value}:t,Xp):Xp;function Jp(e,t,n="validate"){if(va(e)||Array.isArray(e)&&e.every(va)||tn(e)&&!e)return{type:n,message:va(e)?e:"",ref:t}}var jr=e=>He(e)&&!es(e)?e:{value:e,message:""},Zp=async(e,t,n,r,i)=>{const{ref:o,refs:a,required:l,maxLength:s,minLength:c,min:d,max:f,pattern:m,validate:y,name:g,valueAsNumber:x,mount:w,disabled:p}=e._f,h=U(t,g);if(!w||p)return{};const v=a?a[0]:o,b=A=>{r&&v.reportValidity&&(v.setCustomValidity(tn(A)?"":A||""),v.reportValidity())},k={},_=vd(o),E=xo(o),P=_||E,T=(x||xd(o))&&Le(o.value)&&Le(h)||Za(o)&&o.value===""||h===""||Array.isArray(h)&&!h.length,I=_E.bind(null,g,n,k),W=(A,D,q,ee=cn.maxLength,te=cn.minLength)=>{const ve=A?D:q;k[g]={type:A?ee:te,message:ve,ref:o,...I(A?ee:te,ve)}};if(i?!Array.isArray(h)||!h.length:l&&(!P&&(T||lt(h))||tn(h)&&!h||E&&!sv(a).isValid||_&&!lv(a).isValid)){const{value:A,message:D}=va(l)?{value:!!l,message:l}:jr(l);if(A&&(k[g]={type:cn.required,message:D,ref:v,...I(cn.required,D)},!n))return b(D),k}if(!T&&(!lt(d)||!lt(f))){let A,D;const q=jr(f),ee=jr(d);if(!lt(h)&&!isNaN(h)){const te=o.valueAsNumber||h&&+h;lt(q.value)||(A=te>q.value),lt(ee.value)||(D=te<ee.value)}else{const te=o.valueAsDate||new Date(h),ve=Y=>new Date(new Date().toDateString()+" "+Y),F=o.type=="time",Q=o.type=="week";rn(q.value)&&h&&(A=F?ve(h)>ve(q.value):Q?h>q.value:te>new Date(q.value)),rn(ee.value)&&h&&(D=F?ve(h)<ve(ee.value):Q?h<ee.value:te<new Date(ee.value))}if((A||D)&&(W(!!A,q.message,ee.message,cn.max,cn.min),!n))return b(k[g].message),k}if((s||c)&&!T&&(rn(h)||i&&Array.isArray(h))){const A=jr(s),D=jr(c),q=!lt(A.value)&&h.length>+A.value,ee=!lt(D.value)&&h.length<+D.value;if((q||ee)&&(W(q,A.message,D.message),!n))return b(k[g].message),k}if(m&&!T&&rn(h)){const{value:A,message:D}=jr(m);if(es(A)&&!h.match(A)&&(k[g]={type:cn.pattern,message:D,ref:o,...I(cn.pattern,D)},!n))return b(D),k}if(y){if(Un(y)){const A=await y(h,t),D=Jp(A,v);if(D&&(k[g]={...D,...I(cn.validate,D.message)},!n))return b(D.message),k}else if(He(y)){let A={};for(const D in y){if(!Tt(A)&&!n)break;const q=Jp(await y[D](h,t),v,D);q&&(A={...q,...I(D,q.message)},b(q.message),n&&(k[g]=A))}if(!Tt(A)&&(k[g]={ref:v,...A},!n))return k}}return b(!0),k};function TE(e,t){const n=t.slice(0,-1).length;let r=0;for(;r<n;)e=Le(e)?r++:e[t[r++]];return e}function ME(e){for(const t in e)if(e.hasOwnProperty(t)&&!Le(e[t]))return!1;return!0}function Ge(e,t){const n=Array.isArray(t)?t:gd(t)?[t]:av(t),r=n.length===1?e:TE(e,n),i=n.length-1,o=n[i];return r&&delete r[o],i!==0&&(He(r)&&Tt(r)||Array.isArray(r)&&ME(r))&&Ge(e,n.slice(0,-1)),e}function Dl(){let e=[];return{get observers(){return e},next:i=>{for(const o of e)o.next&&o.next(i)},subscribe:i=>(e.push(i),{unsubscribe:()=>{e=e.filter(o=>o!==i)}}),unsubscribe:()=>{e=[]}}}var ts=e=>lt(e)||!Zx(e);function sr(e,t){if(ts(e)||ts(t))return e===t;if(zr(e)&&zr(t))return e.getTime()===t.getTime();const n=Object.keys(e),r=Object.keys(t);if(n.length!==r.length)return!1;for(const i of n){const o=e[i];if(!r.includes(i))return!1;if(i!=="ref"){const a=t[i];if(zr(o)&&zr(a)||He(o)&&He(a)||Array.isArray(o)&&Array.isArray(a)?!sr(o,a):o!==a)return!1}}return!0}var uv=e=>e.type==="select-multiple",RE=e=>vd(e)||xo(e),Ll=e=>Za(e)&&e.isConnected,cv=e=>{for(const t in e)if(Un(e[t]))return!0;return!1};function ns(e,t={}){const n=Array.isArray(e);if(He(e)||n)for(const r in e)Array.isArray(e[r])||He(e[r])&&!cv(e[r])?(t[r]=Array.isArray(e[r])?[]:{},ns(e[r],t[r])):lt(e[r])||(t[r]=!0);return t}function dv(e,t,n){const r=Array.isArray(e);if(He(e)||r)for(const i in e)Array.isArray(e[i])||He(e[i])&&!cv(e[i])?Le(t)||ts(n[i])?n[i]=Array.isArray(e[i])?ns(e[i],[]):{...ns(e[i])}:dv(e[i],lt(t)?{}:t[i],n[i]):n[i]=!sr(e[i],t[i]);return n}var Al=(e,t)=>dv(e,t,ns(t)),fv=(e,{valueAsNumber:t,valueAsDate:n,setValueAs:r})=>Le(e)?e:t?e===""?NaN:e&&+e:n&&rn(e)?new Date(e):r?r(e):e;function zl(e){const t=e.ref;if(!(e.refs?e.refs.every(n=>n.disabled):t.disabled))return xd(t)?t.files:vd(t)?lv(e.refs).value:uv(t)?[...t.selectedOptions].map(({value:n})=>n):xo(t)?sv(e.refs).value:fv(Le(t.value)?e.ref.value:t.value,e)}var IE=(e,t,n,r)=>{const i={};for(const o of e){const a=U(t,o);a&&je(i,o,a._f)}return{criteriaMode:n,names:[...e],fields:i,shouldUseNativeValidation:r}},bi=e=>Le(e)?e:es(e)?e.source:He(e)?es(e.value)?e.value.source:e.value:e,DE=e=>e.mount&&(e.required||e.min||e.max||e.maxLength||e.minLength||e.pattern||e.validate);function eh(e,t,n){const r=U(e,n);if(r||gd(n))return{error:r,name:n};const i=n.split(".");for(;i.length;){const o=i.join("."),a=U(t,o),l=U(e,o);if(a&&!Array.isArray(a)&&n!==o)return{name:n};if(l&&l.type)return{name:o,error:l};i.pop()}return{name:n}}var LE=(e,t,n,r,i)=>i.isOnAll?!1:!n&&i.isOnTouch?!(t||e):(n?r.isOnBlur:i.isOnBlur)?!e:(n?r.isOnChange:i.isOnChange)?e:!0,AE=(e,t)=>!vo(U(e,t)).length&&Ge(e,t);const zE={mode:Bt.onSubmit,reValidateMode:Bt.onChange,shouldFocusError:!0};function FE(e={},t){let n={...zE,...e},r={submitCount:0,isDirty:!1,isLoading:Un(n.defaultValues),isValidating:!1,isSubmitted:!1,isSubmitting:!1,isSubmitSuccessful:!1,isValid:!1,touchedFields:{},dirtyFields:{},errors:{},disabled:!1},i={},o=He(n.defaultValues)||He(n.values)?Nt(n.defaultValues||n.values)||{}:{},a=n.shouldUnregister?{}:Nt(o),l={action:!1,mount:!1,watch:!1},s={mount:new Set,unMount:new Set,array:new Set,watch:new Set},c,d=0;const f={isDirty:!1,dirtyFields:!1,touchedFields:!1,isValidating:!1,isValid:!1,errors:!1},m={values:Dl(),array:Dl(),state:Dl()},y=e.resetOptions&&e.resetOptions.keepDirtyValues,g=Yp(n.mode),x=Yp(n.reValidateMode),w=n.criteriaMode===Bt.all,p=S=>O=>{clearTimeout(d),d=setTimeout(S,O)},h=async S=>{if(f.isValid||S){const O=n.resolver?Tt((await T()).errors):await W(i,!0);O!==r.isValid&&m.state.next({isValid:O})}},v=S=>f.isValidating&&m.state.next({isValidating:S}),b=(S,O=[],C,$,N=!0,V=!0)=>{if($&&C){if(l.action=!0,V&&Array.isArray(U(i,S))){const J=C(U(i,S),$.argA,$.argB);N&&je(i,S,J)}if(V&&Array.isArray(U(r.errors,S))){const J=C(U(r.errors,S),$.argA,$.argB);N&&je(r.errors,S,J),AE(r.errors,S)}if(f.touchedFields&&V&&Array.isArray(U(r.touchedFields,S))){const J=C(U(r.touchedFields,S),$.argA,$.argB);N&&je(r.touchedFields,S,J)}f.dirtyFields&&(r.dirtyFields=Al(o,a)),m.state.next({name:S,isDirty:D(S,O),dirtyFields:r.dirtyFields,errors:r.errors,isValid:r.isValid})}else je(a,S,O)},k=(S,O)=>{je(r.errors,S,O),m.state.next({errors:r.errors})},_=(S,O,C,$)=>{const N=U(i,S);if(N){const V=U(a,S,Le(C)?U(o,S):C);Le(V)||$&&$.defaultChecked||O?je(a,S,O?V:zl(N._f)):te(S,V),l.mount&&h()}},E=(S,O,C,$,N)=>{let V=!1,J=!1;const ke={name:S};if(!C||$){f.isDirty&&(J=r.isDirty,r.isDirty=ke.isDirty=D(),V=J!==ke.isDirty);const Fe=sr(U(o,S),O);J=U(r.dirtyFields,S),Fe?Ge(r.dirtyFields,S):je(r.dirtyFields,S,!0),ke.dirtyFields=r.dirtyFields,V=V||f.dirtyFields&&J!==!Fe}if(C){const Fe=U(r.touchedFields,S);Fe||(je(r.touchedFields,S,C),ke.touchedFields=r.touchedFields,V=V||f.touchedFields&&Fe!==C)}return V&&N&&m.state.next(ke),V?ke:{}},P=(S,O,C,$)=>{const N=U(r.errors,S),V=f.isValid&&tn(O)&&r.isValid!==O;if(e.delayError&&C?(c=p(()=>k(S,C)),c(e.delayError)):(clearTimeout(d),c=null,C?je(r.errors,S,C):Ge(r.errors,S)),(C?!sr(N,C):N)||!Tt($)||V){const J={...$,...V&&tn(O)?{isValid:O}:{},errors:r.errors,name:S};r={...r,...J},m.state.next(J)}v(!1)},T=async S=>n.resolver(a,n.context,IE(S||s.mount,i,n.criteriaMode,n.shouldUseNativeValidation)),I=async S=>{const{errors:O}=await T(S);if(S)for(const C of S){const $=U(O,C);$?je(r.errors,C,$):Ge(r.errors,C)}else r.errors=O;return O},W=async(S,O,C={valid:!0})=>{for(const $ in S){const N=S[$];if(N){const{_f:V,...J}=N;if(V){const ke=s.array.has(V.name),Fe=await Zp(N,a,w,n.shouldUseNativeValidation&&!O,ke);if(Fe[V.name]&&(C.valid=!1,O))break;!O&&(U(Fe,V.name)?ke?PE(r.errors,Fe,V.name):je(r.errors,V.name,Fe[V.name]):Ge(r.errors,V.name))}J&&await W(J,O,C)}}return C.valid},A=()=>{for(const S of s.unMount){const O=U(i,S);O&&(O._f.refs?O._f.refs.every(C=>!Ll(C)):!Ll(O._f.ref))&&Se(S)}s.unMount=new Set},D=(S,O)=>(S&&O&&je(a,S,O),!sr(re(),o)),q=(S,O,C)=>ov(S,s,{...l.mount?a:Le(O)?o:rn(S)?{[S]:O}:O},C,O),ee=S=>vo(U(l.mount?a:o,S,e.shouldUnregister?U(o,S,[]):[])),te=(S,O,C={})=>{const $=U(i,S);let N=O;if($){const V=$._f;V&&(!V.disabled&&je(a,S,fv(O,V)),N=Za(V.ref)&&lt(O)?"":O,uv(V.ref)?[...V.ref.options].forEach(J=>J.selected=N.includes(J.value)):V.refs?xo(V.ref)?V.refs.length>1?V.refs.forEach(J=>(!J.defaultChecked||!J.disabled)&&(J.checked=Array.isArray(N)?!!N.find(ke=>ke===J.value):N===J.value)):V.refs[0]&&(V.refs[0].checked=!!N):V.refs.forEach(J=>J.checked=J.value===N):xd(V.ref)?V.ref.value="":(V.ref.value=N,V.ref.type||m.values.next({name:S,values:{...a}})))}(C.shouldDirty||C.shouldTouch)&&E(S,N,C.shouldTouch,C.shouldDirty,!0),C.shouldValidate&&de(S)},ve=(S,O,C)=>{for(const $ in O){const N=O[$],V=`${S}.${$}`,J=U(i,V);(s.array.has(S)||!ts(N)||J&&!J._f)&&!zr(N)?ve(V,N,C):te(V,N,C)}},F=(S,O,C={})=>{const $=U(i,S),N=s.array.has(S),V=Nt(O);je(a,S,V),N?(m.array.next({name:S,values:{...a}}),(f.isDirty||f.dirtyFields)&&C.shouldDirty&&m.state.next({name:S,dirtyFields:Al(o,a),isDirty:D(S,V)})):$&&!$._f&&!lt(V)?ve(S,V,C):te(S,V,C),Kp(S,s)&&m.state.next({...r}),m.values.next({name:S,values:{...a}}),!l.mount&&t()},Q=async S=>{const O=S.target;let C=O.name,$=!0;const N=U(i,C),V=()=>O.type?zl(N._f):ev(S),J=ke=>{$=Number.isNaN(ke)||ke===U(a,C,ke)};if(N){let ke,Fe;const yo=V(),vr=S.type===Ja.BLUR||S.type===Ja.FOCUS_OUT,pv=!DE(N._f)&&!n.resolver&&!U(r.errors,C)&&!N._f.deps||LE(vr,U(r.touchedFields,C),r.isSubmitted,x,g),Ns=Kp(C,s,vr);je(a,C,yo),vr?(N._f.onBlur&&N._f.onBlur(S),c&&c(0)):N._f.onChange&&N._f.onChange(S);const $s=E(C,yo,vr,!1),hv=!Tt($s)||Ns;if(!vr&&m.values.next({name:C,type:S.type,values:{...a}}),pv)return f.isValid&&h(),hv&&m.state.next({name:C,...Ns?{}:$s});if(!vr&&Ns&&m.state.next({...r}),v(!0),n.resolver){const{errors:yd}=await T([C]);if(J(yo),$){const mv=eh(r.errors,i,C),wd=eh(yd,i,mv.name||C);ke=wd.error,C=wd.name,Fe=Tt(yd)}}else ke=(await Zp(N,a,w,n.shouldUseNativeValidation))[C],J(yo),$&&(ke?Fe=!1:f.isValid&&(Fe=await W(i,!0)));$&&(N._f.deps&&de(N._f.deps),P(C,Fe,ke,$s))}},Y=(S,O)=>{if(U(r.errors,O)&&S.focus)return S.focus(),1},de=async(S,O={})=>{let C,$;const N=ga(S);if(v(!0),n.resolver){const V=await I(Le(S)?S:N);C=Tt(V),$=S?!N.some(J=>U(V,J)):C}else S?($=(await Promise.all(N.map(async V=>{const J=U(i,V);return await W(J&&J._f?{[V]:J}:J)}))).every(Boolean),!(!$&&!r.isValid)&&h()):$=C=await W(i);return m.state.next({...!rn(S)||f.isValid&&C!==r.isValid?{}:{name:S},...n.resolver||!S?{isValid:C}:{},errors:r.errors,isValidating:!1}),O.shouldFocus&&!$&&xa(i,Y,S?N:s.mount),$},re=S=>{const O={...o,...l.mount?a:{}};return Le(S)?O:rn(S)?U(O,S):S.map(C=>U(O,C))},Oe=(S,O)=>({invalid:!!U((O||r).errors,S),isDirty:!!U((O||r).dirtyFields,S),isTouched:!!U((O||r).touchedFields,S),error:U((O||r).errors,S)}),be=S=>{S&&ga(S).forEach(O=>Ge(r.errors,O)),m.state.next({errors:S?r.errors:{}})},Ue=(S,O,C)=>{const $=(U(i,S,{_f:{}})._f||{}).ref;je(r.errors,S,{...O,ref:$}),m.state.next({name:S,errors:r.errors,isValid:!1}),C&&C.shouldFocus&&$&&$.focus&&$.focus()},me=(S,O)=>Un(S)?m.values.subscribe({next:C=>S(q(void 0,O),C)}):q(S,O,!0),Se=(S,O={})=>{for(const C of S?ga(S):s.mount)s.mount.delete(C),s.array.delete(C),O.keepValue||(Ge(i,C),Ge(a,C)),!O.keepError&&Ge(r.errors,C),!O.keepDirty&&Ge(r.dirtyFields,C),!O.keepTouched&&Ge(r.touchedFields,C),!n.shouldUnregister&&!O.keepDefaultValue&&Ge(o,C);m.values.next({values:{...a}}),m.state.next({...r,...O.keepDirty?{isDirty:D()}:{}}),!O.keepIsValid&&h()},et=({disabled:S,name:O,field:C,fields:$,value:N})=>{if(tn(S)){const V=S?void 0:Le(N)?zl(C?C._f:U($,O)._f):N;je(a,O,V),E(O,V,!1,!1,!0)}},yt=(S,O={})=>{let C=U(i,S);const $=tn(O.disabled);return je(i,S,{...C||{},_f:{...C&&C._f?C._f:{ref:{name:S}},name:S,mount:!0,...O}}),s.mount.add(S),C?et({field:C,disabled:O.disabled,name:S}):_(S,!0,O.value),{...$?{disabled:O.disabled}:{},...n.progressive?{required:!!O.required,min:bi(O.min),max:bi(O.max),minLength:bi(O.minLength),maxLength:bi(O.maxLength),pattern:bi(O.pattern)}:{},name:S,onChange:Q,onBlur:Q,ref:N=>{if(N){yt(S,O),C=U(i,S);const V=Le(N.value)&&N.querySelectorAll&&N.querySelectorAll("input,select,textarea")[0]||N,J=RE(V),ke=C._f.refs||[];if(J?ke.find(Fe=>Fe===V):V===C._f.ref)return;je(i,S,{_f:{...C._f,...J?{refs:[...ke.filter(Ll),V,...Array.isArray(U(o,S))?[{}]:[]],ref:{type:V.type,name:S}}:{ref:V}}}),_(S,!1,void 0,V)}else C=U(i,S,{}),C._f&&(C._f.mount=!1),(n.shouldUnregister||O.shouldUnregister)&&!(tv(s.array,S)&&l.action)&&s.unMount.add(S)}}},z=()=>n.shouldFocusError&&xa(i,Y,s.mount),B=S=>{tn(S)&&(m.state.next({disabled:S}),xa(i,O=>{O.disabled=S},0,!1))},ie=(S,O)=>async C=>{C&&(C.preventDefault&&C.preventDefault(),C.persist&&C.persist());let $=Nt(a);if(m.state.next({isSubmitting:!0}),n.resolver){const{errors:N,values:V}=await T();r.errors=N,$=V}else await W(i);Ge(r.errors,"root"),Tt(r.errors)?(m.state.next({errors:{}}),await S($,C)):(O&&await O({...r.errors},C),z(),setTimeout(z)),m.state.next({isSubmitted:!0,isSubmitting:!1,isSubmitSuccessful:Tt(r.errors),submitCount:r.submitCount+1,errors:r.errors})},oe=(S,O={})=>{U(i,S)&&(Le(O.defaultValue)?F(S,U(o,S)):(F(S,O.defaultValue),je(o,S,O.defaultValue)),O.keepTouched||Ge(r.touchedFields,S),O.keepDirty||(Ge(r.dirtyFields,S),r.isDirty=O.defaultValue?D(S,U(o,S)):D()),O.keepError||(Ge(r.errors,S),f.isValid&&h()),m.state.next({...r}))},ne=(S,O={})=>{const C=S?Nt(S):o,$=Nt(C),N=S&&!Tt(S)?$:o;if(O.keepDefaultValues||(o=C),!O.keepValues){if(O.keepDirtyValues||y)for(const V of s.mount)U(r.dirtyFields,V)?je(N,V,U(a,V)):F(V,U(N,V));else{if(pd&&Le(S))for(const V of s.mount){const J=U(i,V);if(J&&J._f){const ke=Array.isArray(J._f.refs)?J._f.refs[0]:J._f.ref;if(Za(ke)){const Fe=ke.closest("form");if(Fe){Fe.reset();break}}}}i={}}a=e.shouldUnregister?O.keepDefaultValues?Nt(o):{}:Nt(N),m.array.next({values:{...N}}),m.values.next({values:{...N}})}s={mount:new Set,unMount:new Set,array:new Set,watch:new Set,watchAll:!1,focus:""},!l.mount&&t(),l.mount=!f.isValid||!!O.keepIsValid,l.watch=!!e.shouldUnregister,m.state.next({submitCount:O.keepSubmitCount?r.submitCount:0,isDirty:O.keepDirty?r.isDirty:!!(O.keepDefaultValues&&!sr(S,o)),isSubmitted:O.keepIsSubmitted?r.isSubmitted:!1,dirtyFields:O.keepDirtyValues?r.dirtyFields:O.keepDefaultValues&&S?Al(o,S):{},touchedFields:O.keepTouched?r.touchedFields:{},errors:O.keepErrors?r.errors:{},isSubmitSuccessful:O.keepIsSubmitSuccessful?r.isSubmitSuccessful:!1,isSubmitting:!1})},le=(S,O)=>ne(Un(S)?S(a):S,O);return{control:{register:yt,unregister:Se,getFieldState:Oe,handleSubmit:ie,setError:Ue,_executeSchema:T,_getWatch:q,_getDirty:D,_updateValid:h,_removeUnmounted:A,_updateFieldArray:b,_updateDisabledField:et,_getFieldArray:ee,_reset:ne,_resetDefaultValues:()=>Un(n.defaultValues)&&n.defaultValues().then(S=>{le(S,n.resetOptions),m.state.next({isLoading:!1})}),_updateFormState:S=>{r={...r,...S}},_disableForm:B,_subjects:m,_proxyFormState:f,get _fields(){return i},get _formValues(){return a},get _state(){return l},set _state(S){l=S},get _defaultValues(){return o},get _names(){return s},set _names(S){s=S},get _formState(){return r},set _formState(S){r=S},get _options(){return n},set _options(S){n={...n,...S}}},trigger:de,register:yt,handleSubmit:ie,watch:me,setValue:F,getValues:re,reset:le,resetField:oe,clearErrors:be,unregister:Se,setError:Ue,setFocus:(S,O={})=>{const C=U(i,S),$=C&&C._f;if($){const N=$.refs?$.refs[0]:$.ref;N.focus&&(N.focus(),O.shouldSelect&&N.select())}},getFieldState:Oe}}function VE(e={}){const t=Ce.useRef(),n=Ce.useRef(),[r,i]=Ce.useState({isDirty:!1,isValidating:!1,isLoading:Un(e.defaultValues),isSubmitted:!1,isSubmitting:!1,isSubmitSuccessful:!1,isValid:!1,submitCount:0,dirtyFields:{},touchedFields:{},errors:{},disabled:!1,defaultValues:Un(e.defaultValues)?void 0:e.defaultValues});t.current||(t.current={...FE(e,()=>i(a=>({...a}))),formState:r});const o=t.current.control;return o._options=e,md({subject:o._subjects.state,next:a=>{rv(a,o._proxyFormState,o._updateFormState,!0)&&i({...o._formState})}}),Ce.useEffect(()=>o._disableForm(e.disabled),[o,e.disabled]),Ce.useEffect(()=>{if(o._proxyFormState.isDirty){const a=o._getDirty();a!==r.isDirty&&o._subjects.state.next({isDirty:a})}},[o,r.isDirty]),Ce.useEffect(()=>{e.values&&!sr(e.values,n.current)?(o._reset(e.values,o._options.resetOptions),n.current=e.values):o._resetDefaultValues()},[e.values,o]),Ce.useEffect(()=>{o._state.mount||(o._updateValid(),o._state.mount=!0),o._state.watch&&(o._state.watch=!1,o._subjects.state.next({...o._formState})),o._removeUnmounted()}),t.current.formState=nv(r,o),t.current}const NE={container:e=>({...e,width:"100%"}),control:(e,t)=>{const n=t.selectProps.errors;return{...e,display:"flex",height:"48px",padding:"12px 16px",alignItems:"center",flexShrink:"0",gap:"8px",alignSelf:"stretch",alignContent:"flex-start",borderRadius:"16px",outline:"none",border:`1px solid ${n?"var(--secondary-red)":"transparent"}`,backgroundColor:"var(--background-white)",boxShadow:"0px 0px 8px 0px rgba(27, 54, 65, 0.08)","&:hover":{boxShadow:"0px 0px 16px 0px rgba(27, 54, 65, 0.16)"},"&:focus":{outline:"none",border:"1px solid var(--typography-grey)",background:"var(--background-white)",boxShadow:"0px 0px 8px 0px rgba(27, 54, 65, 0.08)"},"@media screen and (min-width: 768px)":{height:"56px"},"@media screen and (min-width: 1440px)":{padding:"14px 16px"},"@media screen and (min-width: 1920px)":{padding:"12px 16px"}}},dropdownIndicator:e=>({...e,color:"#161717",padding:"0"}),indicatorSeparator:()=>({display:"none"}),option:e=>({...e,display:"flex",alignItems:"flex-start",fontSize:"14px",lineHeight:"1.43",fontWeight:"400",backgroundColor:"var(--background-white)",color:"#1B3641","&:hover":{backgroundColor:"rgba(27, 54, 65, 0.2)",fontWeight:"600"},"@media screen and (min-width: 768px)":{fontSize:"15px",lineHeight:"1.47"},"@media screen and (min-width: 1920px)":{fontSize:"16px",lineHeight:"1.5"}}),menu:e=>({...e,height:"auto",marginTop:"0",border:"none",borderRadius:"16px",boxShadow:"0px 0px 8px 0px rgba(27, 54, 65, 0.08)",color:"var(--primary-bluedark)",backgroundColor:"var(--background-white)"}),singleValue:e=>({...e,fontSize:"14px",fontWeight:"500",lineHeight:"1.43",textAlign:"start",flex:"1 0 0",color:"var(--primary-bluedark)","@media screen and (min-width: 768px)":{fontSize:"15px",lineHeight:"1.47"},"@media screen and (min-width: 1920px)":{fontSize:"16px",lineHeight:"1.5"}}),valueContainer:e=>({...e,padding:"0"})},$E=()=>{const[e,t]=DC("key",{name:"",email:"",phone:"",service:"",comment:""}),{name:n,email:r,phone:i,service:o,comment:a}=e,l=Ap.find(p=>p.value===o),{register:s,handleSubmit:c,control:d,setValue:f,formState:{errors:m},reset:y}=VE({mode:"all",shouldFocusError:!1,defaultValues:{}});M.useEffect(()=>{const p=JSON.stringify(e);localStorage.setItem("key",p)},[e]);const g=p=>{f("service",(p==null?void 0:p.value)||""),t({...e,service:(p==null?void 0:p.value)||""})},x=p=>{t({...e,[p.target.name]:p.target.value})},w=async p=>{try{const h={...p,phone:p.phone.replace(/\D/g,"").slice(2)};await N4.post("https://healthy-management.onrender.com/api/senddata",h),console.log(h),t({name:"",email:"",phone:"",service:"",comment:""}),y(),alert("Заявка відправлена!")}catch{alert("Помилка при відправці заявки")}};return u.jsx(lE,{className:"container",id:"contact",children:u.jsxs(uE,{children:[u.jsx(cE,{children:"Контакт"}),u.jsxs(dE,{children:[u.jsxs("div",{children:[u.jsx(ae,{maxWidth:767,children:u.jsx(Go,{srcSet:`${UC} 2x, ${Fp} 1x`,sizes:"(max-width: 767px) 100vw",src:Fp,alt:"notebook",loading:"lazy"})}),u.jsx(ae,{minWidth:768,maxWidth:1439,children:u.jsx(Go,{srcSet:`${$C} 2x, ${NC} 1x`,type:"image/webp",sizes:"(min-width: 768px) 100vw (max-width: 1439px) 100vw",src:VC,alt:"notebook",loading:"lazy"})}),u.jsx(ae,{minWidth:1440,maxWidth:1919,children:u.jsx(Go,{srcSet:`${FC} 2x, ${zC} 1x`,type:"image/webp",sizes:"(min-width: 1440px) 100vw (max-width: 1919px) 100vw",src:`${AC}`,alt:"notebook",loading:"lazy"})}),u.jsx(ae,{minWidth:1920,children:u.jsx(Go,{srcSet:`${LC} 2x, ${zp} 1x`,type:"image/webp",sizes:"(min-width: 1920px) 100vw",src:zp,alt:"notebook",loading:"lazy"})})]}),u.jsxs(fE,{children:[u.jsx(pE,{children:"Залишайте контактні дані і ми з вами зв'яжемось"}),u.jsxs(hE,{onSubmit:c(w),children:[u.jsxs(Bp,{children:["Ім’я",u.jsx(mE,{}),u.jsx(Hp,{type:"text",placeholder:"Введіть своє ім’я",...s("name",{required:"Це поле обов'язкове для заповнення",pattern:{value:/^(?:[a-zA-Zа-яА-ЯґҐєЄіІїЇ'-]{1,32}(?:\s+[a-zA-Zа-яА-ЯґҐєЄіІїЇ'-]{1,32})?|[a-zA-Zа-яА-ЯґҐєЄіІїЇ'-]{1,64})$/,message:"Поле повинно містити одне або два слова"}}),value:n,onChange:x,errors:m.name}),m.name&&u.jsxs(wi,{children:[u.jsx(dn,{}),m.name.message]})]}),u.jsxs(gE,{children:[u.jsxs(Qp,{children:["Емейл",u.jsx(dn,{}),u.jsx(Hp,{type:"email",placeholder:"Введіть емейл",...s("email",{required:"Це поле обов'язкове для заповнення",pattern:{value:/[a-z0-9._%+-]+@[a-z0-9.-]+\.[a-z]{2,4}$/,message:"Введіть коректний емейл"}}),value:r,onChange:x,errors:m.email}),m.email&&u.jsxs(wi,{children:[u.jsx(dn,{}),m.email.message]})]}),u.jsxs(Qp,{children:["Номер телефону",u.jsx(dn,{}),u.jsx(xE,{type:"tel",mask:"+38(099)999-99-99",placeholder:"Введіть номер телефону",...s("phone",{required:"Це поле обов'язкове для заповнення",pattern:{value:/^\+\d{2}\(\d{3}\)\d{3}-\d{2}-\d{2}$/,message:"Введіть коректний номер телефона"}}),value:i,onChange:x,errors:m.phone}),m.phone&&u.jsxs(wi,{children:[u.jsx(dn,{}),m.phone.message]})]})]}),u.jsxs(Bp,{children:["Послуга",u.jsx(dn,{}),u.jsx(OE,{name:"service",control:d,shouldUnregister:!1,render:({field:p})=>u.jsx(IC,{...s("service",{required:"Оберіть послугу"}),placeholder:"Оберіть послугу",...p,options:Ap,styles:NE,errors:m.service,onChange:g,value:l})}),m.service&&u.jsxs(wi,{children:[u.jsx(dn,{}),m.service.message]})]}),u.jsxs(vE,{children:["Повідомлення",u.jsx(yE,{name:"comment",placeholder:"Введіть ваше повідомлення",...s("comment",{pattern:{value:/^.{0,500}$/,message:"Максимальна кількість 500 символів"}}),value:a,onChange:x,errors:m.comment}),m.comment&&u.jsxs(wi,{children:[u.jsx(dn,{}),m.comment.message]})]}),u.jsx(wE,{type:"submit",children:"Надіслати"})]})]})]})]})})},UE=j.section`
  padding-top: 40px;
  padding-bottom: 40px;

  @media screen and (min-width: 1920px) {
    padding-top: 80px;
    padding-bottom: 80px;
  }
`,WE=j.div`
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
`,BE=j.h2`
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
`,HE=j.p`
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
`,QE=j.span`
  color: var(--primary-yellow);
  font-size: 15px;
  line-height: 22px;

  @media screen and (min-width: 1920px) {
    font-size: 20px;
    font-weight: 500;
    line-height: 28px;
  }
`,YE=j.ul`
  display: flex;
  gap: 24px;
  flex-direction: column;
  margin-bottom: 24px;

  @media screen and (min-width: 1920px) {
    flex-direction: row;
    margin-bottom: 0;
  }
`,KE=j.li`
  position: relative;
  background: var(--background-white);
  padding: 24px;
  border-radius: 16px;

  @media screen and (min-width: 1920px) {
    width: calc((100% - (24px * 3)) / 4);
    padding: 40px;
  }
`,GE=j.div`
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
`,qE=j.a`
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
`,XE="/healthy-management-project/assets/icon-WQbGU7FW.svg",JE="/healthy-management-project/assets/icon-2-FNpGPcjZ.svg",ZE="/healthy-management-project/assets/icon-3-GZg06_37.svg",eO="/healthy-management-project/assets/icon-4-9BBn0thK.svg",Fl=[{title:"Менторство та консультації",about:["Для власників та менеджерів з питань менеджменту та розвитку, медичного маркетингу та комунікацій, з питань програм управління здоров'ям","Стейхолдерам та парнерам з питань медичного менеджменту та маркетингу"],path:XE},{title:"Діагностика",about:["Аудит бізнес-процесів","Аудит маркетингу та сервісу","Аудит системи комунікацій та Сustomer Journey Map"],path:JE},{title:"Стратегії",about:["Проведення стратегічних сесій","Розробка стратегії розвитку та маркетингу ","Розробка стратегій внутрішніх комунікацій","Розробка стратегій управління здоров'ям"],path:ZE},{title:"Навчання",about:["Медичний маркетинг","Комунікації та сервіс"],path:eO}],tO=()=>u.jsx(UE,{className:"container",id:"services",children:u.jsxs(WE,{children:[u.jsx(BE,{children:"Послуги"}),u.jsxs(HE,{children:["Будуємо ефективні ",u.jsx(QE,{children:"стратегії здорового менеджменту"})," для бізнесів. Розвивайте свій бізнес за допомогою ефективних стратегій здорового менеджменту."]}),u.jsx(YE,{children:Fl==null?void 0:Fl.map(e=>u.jsxs(KE,{children:[u.jsx(ed,{title:e.title,about:e.about,additionalComment:!0}),u.jsx(GE,{children:u.jsx("img",{src:e.path,alt:e.path})})]},e.title))}),u.jsx(qE,{href:"#contact",children:"Замовити консультацію"})]})});function nO(){const e=(t,n)=>{n.preventDefault();const r=document.getElementById(t);if(r){const i=r.getBoundingClientRect(),o=window.pageYOffset||document.documentElement.scrollTop;let a;const l=window.innerWidth;l<=768&&(a=i.top+o-80),(l>768||l<=1440)&&(a=i.top+o-80),l>1440||l<=1920?a=i.top+o-80:a=i.top+o-60,window.scrollTo({top:a,behavior:"smooth"}),setTimeout(()=>{n.target.blur()},1e3)}};return M.useEffect(()=>{fetch("https://healthy-management.onrender.com/api/wakeup")},[]),u.jsxs(u.Fragment,{children:[u.jsx(Ng,{handleSetActiveLink:e}),u.jsxs("main",{children:[u.jsx(Kb,{}),u.jsx(Fw,{}),u.jsx(bw,{}),u.jsx(Zb,{}),u.jsx(wS,{}),u.jsx(tO,{}),u.jsx(k2,{}),u.jsx(C2,{}),u.jsx(O2,{}),u.jsx(rS,{}),u.jsx(Hw,{}),u.jsx($E,{})]}),u.jsx(Fg,{handleSetActiveLink:e}),u.jsx(SS,{})]})}Vl.createRoot(document.getElementById("root")).render(u.jsx(Ce.StrictMode,{children:u.jsx(nO,{})}));
