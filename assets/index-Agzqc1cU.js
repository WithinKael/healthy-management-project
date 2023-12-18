function wv(e,t){for(var n=0;n<t.length;n++){const r=t[n];if(typeof r!="string"&&!Array.isArray(r)){for(const i in r)if(i!=="default"&&!(i in e)){const o=Object.getOwnPropertyDescriptor(r,i);o&&Object.defineProperty(e,i,o.get?o:{enumerable:!0,get:()=>r[i]})}}}return Object.freeze(Object.defineProperty(e,Symbol.toStringTag,{value:"Module"}))}(function(){const t=document.createElement("link").relList;if(t&&t.supports&&t.supports("modulepreload"))return;for(const i of document.querySelectorAll('link[rel="modulepreload"]'))r(i);new MutationObserver(i=>{for(const o of i)if(o.type==="childList")for(const a of o.addedNodes)a.tagName==="LINK"&&a.rel==="modulepreload"&&r(a)}).observe(document,{childList:!0,subtree:!0});function n(i){const o={};return i.integrity&&(o.integrity=i.integrity),i.referrerPolicy&&(o.referrerPolicy=i.referrerPolicy),i.crossOrigin==="use-credentials"?o.credentials="include":i.crossOrigin==="anonymous"?o.credentials="omit":o.credentials="same-origin",o}function r(i){if(i.ep)return;i.ep=!0;const o=n(i);fetch(i.href,o)}})();var rh=typeof globalThis<"u"?globalThis:typeof window<"u"?window:typeof global<"u"?global:typeof self<"u"?self:{};function oi(e){return e&&e.__esModule&&Object.prototype.hasOwnProperty.call(e,"default")?e.default:e}var ih={exports:{}},as={},oh={exports:{}},ce={};/**
 * @license React
 * react.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */var co=Symbol.for("react.element"),bv=Symbol.for("react.portal"),Sv=Symbol.for("react.fragment"),kv=Symbol.for("react.strict_mode"),jv=Symbol.for("react.profiler"),Ov=Symbol.for("react.provider"),Ev=Symbol.for("react.context"),Cv=Symbol.for("react.forward_ref"),Pv=Symbol.for("react.suspense"),Tv=Symbol.for("react.memo"),_v=Symbol.for("react.lazy"),jd=Symbol.iterator;function Mv(e){return e===null||typeof e!="object"?null:(e=jd&&e[jd]||e["@@iterator"],typeof e=="function"?e:null)}var ah={isMounted:function(){return!1},enqueueForceUpdate:function(){},enqueueReplaceState:function(){},enqueueSetState:function(){}},sh=Object.assign,lh={};function ai(e,t,n){this.props=e,this.context=t,this.refs=lh,this.updater=n||ah}ai.prototype.isReactComponent={};ai.prototype.setState=function(e,t){if(typeof e!="object"&&typeof e!="function"&&e!=null)throw Error("setState(...): takes an object of state variables to update or a function which returns an object of state variables.");this.updater.enqueueSetState(this,e,t,"setState")};ai.prototype.forceUpdate=function(e){this.updater.enqueueForceUpdate(this,e,"forceUpdate")};function uh(){}uh.prototype=ai.prototype;function ec(e,t,n){this.props=e,this.context=t,this.refs=lh,this.updater=n||ah}var tc=ec.prototype=new uh;tc.constructor=ec;sh(tc,ai.prototype);tc.isPureReactComponent=!0;var Od=Array.isArray,ch=Object.prototype.hasOwnProperty,nc={current:null},dh={key:!0,ref:!0,__self:!0,__source:!0};function fh(e,t,n){var r,i={},o=null,a=null;if(t!=null)for(r in t.ref!==void 0&&(a=t.ref),t.key!==void 0&&(o=""+t.key),t)ch.call(t,r)&&!dh.hasOwnProperty(r)&&(i[r]=t[r]);var l=arguments.length-2;if(l===1)i.children=n;else if(1<l){for(var s=Array(l),u=0;u<l;u++)s[u]=arguments[u+2];i.children=s}if(e&&e.defaultProps)for(r in l=e.defaultProps,l)i[r]===void 0&&(i[r]=l[r]);return{$$typeof:co,type:e,key:o,ref:a,props:i,_owner:nc.current}}function Av(e,t){return{$$typeof:co,type:e.type,key:t,ref:e.ref,props:e.props,_owner:e._owner}}function rc(e){return typeof e=="object"&&e!==null&&e.$$typeof===co}function Rv(e){var t={"=":"=0",":":"=2"};return"$"+e.replace(/[=:]/g,function(n){return t[n]})}var Ed=/\/+/g;function $s(e,t){return typeof e=="object"&&e!==null&&e.key!=null?Rv(""+e.key):t.toString(36)}function Zo(e,t,n,r,i){var o=typeof e;(o==="undefined"||o==="boolean")&&(e=null);var a=!1;if(e===null)a=!0;else switch(o){case"string":case"number":a=!0;break;case"object":switch(e.$$typeof){case co:case bv:a=!0}}if(a)return a=e,i=i(a),e=r===""?"."+$s(a,0):r,Od(i)?(n="",e!=null&&(n=e.replace(Ed,"$&/")+"/"),Zo(i,t,n,"",function(u){return u})):i!=null&&(rc(i)&&(i=Av(i,n+(!i.key||a&&a.key===i.key?"":(""+i.key).replace(Ed,"$&/")+"/")+e)),t.push(i)),1;if(a=0,r=r===""?".":r+":",Od(e))for(var l=0;l<e.length;l++){o=e[l];var s=r+$s(o,l);a+=Zo(o,t,n,s,i)}else if(s=Mv(e),typeof s=="function")for(e=s.call(e),l=0;!(o=e.next()).done;)o=o.value,s=r+$s(o,l++),a+=Zo(o,t,n,s,i);else if(o==="object")throw t=String(e),Error("Objects are not valid as a React child (found: "+(t==="[object Object]"?"object with keys {"+Object.keys(e).join(", ")+"}":t)+"). If you meant to render a collection of children, use an array instead.");return a}function So(e,t,n){if(e==null)return e;var r=[],i=0;return Zo(e,r,"","",function(o){return t.call(n,o,i++)}),r}function Iv(e){if(e._status===-1){var t=e._result;t=t(),t.then(function(n){(e._status===0||e._status===-1)&&(e._status=1,e._result=n)},function(n){(e._status===0||e._status===-1)&&(e._status=2,e._result=n)}),e._status===-1&&(e._status=0,e._result=t)}if(e._status===1)return e._result.default;throw e._result}var ft={current:null},ea={transition:null},Lv={ReactCurrentDispatcher:ft,ReactCurrentBatchConfig:ea,ReactCurrentOwner:nc};ce.Children={map:So,forEach:function(e,t,n){So(e,function(){t.apply(this,arguments)},n)},count:function(e){var t=0;return So(e,function(){t++}),t},toArray:function(e){return So(e,function(t){return t})||[]},only:function(e){if(!rc(e))throw Error("React.Children.only expected to receive a single React element child.");return e}};ce.Component=ai;ce.Fragment=Sv;ce.Profiler=jv;ce.PureComponent=ec;ce.StrictMode=kv;ce.Suspense=Pv;ce.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED=Lv;ce.cloneElement=function(e,t,n){if(e==null)throw Error("React.cloneElement(...): The argument must be a React element, but you passed "+e+".");var r=sh({},e.props),i=e.key,o=e.ref,a=e._owner;if(t!=null){if(t.ref!==void 0&&(o=t.ref,a=nc.current),t.key!==void 0&&(i=""+t.key),e.type&&e.type.defaultProps)var l=e.type.defaultProps;for(s in t)ch.call(t,s)&&!dh.hasOwnProperty(s)&&(r[s]=t[s]===void 0&&l!==void 0?l[s]:t[s])}var s=arguments.length-2;if(s===1)r.children=n;else if(1<s){l=Array(s);for(var u=0;u<s;u++)l[u]=arguments[u+2];r.children=l}return{$$typeof:co,type:e.type,key:i,ref:o,props:r,_owner:a}};ce.createContext=function(e){return e={$$typeof:Ev,_currentValue:e,_currentValue2:e,_threadCount:0,Provider:null,Consumer:null,_defaultValue:null,_globalName:null},e.Provider={$$typeof:Ov,_context:e},e.Consumer=e};ce.createElement=fh;ce.createFactory=function(e){var t=fh.bind(null,e);return t.type=e,t};ce.createRef=function(){return{current:null}};ce.forwardRef=function(e){return{$$typeof:Cv,render:e}};ce.isValidElement=rc;ce.lazy=function(e){return{$$typeof:_v,_payload:{_status:-1,_result:e},_init:Iv}};ce.memo=function(e,t){return{$$typeof:Tv,type:e,compare:t===void 0?null:t}};ce.startTransition=function(e){var t=ea.transition;ea.transition={};try{e()}finally{ea.transition=t}};ce.unstable_act=function(){throw Error("act(...) is not supported in production builds of React.")};ce.useCallback=function(e,t){return ft.current.useCallback(e,t)};ce.useContext=function(e){return ft.current.useContext(e)};ce.useDebugValue=function(){};ce.useDeferredValue=function(e){return ft.current.useDeferredValue(e)};ce.useEffect=function(e,t){return ft.current.useEffect(e,t)};ce.useId=function(){return ft.current.useId()};ce.useImperativeHandle=function(e,t,n){return ft.current.useImperativeHandle(e,t,n)};ce.useInsertionEffect=function(e,t){return ft.current.useInsertionEffect(e,t)};ce.useLayoutEffect=function(e,t){return ft.current.useLayoutEffect(e,t)};ce.useMemo=function(e,t){return ft.current.useMemo(e,t)};ce.useReducer=function(e,t,n){return ft.current.useReducer(e,t,n)};ce.useRef=function(e){return ft.current.useRef(e)};ce.useState=function(e){return ft.current.useState(e)};ce.useSyncExternalStore=function(e,t,n){return ft.current.useSyncExternalStore(e,t,n)};ce.useTransition=function(){return ft.current.useTransition()};ce.version="18.2.0";oh.exports=ce;var L=oh.exports;const ke=oi(L),Cd=wv({__proto__:null,default:ke},[L]);/**
 * @license React
 * react-jsx-runtime.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */var Dv=L,zv=Symbol.for("react.element"),Fv=Symbol.for("react.fragment"),Nv=Object.prototype.hasOwnProperty,Vv=Dv.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED.ReactCurrentOwner,Uv={key:!0,ref:!0,__self:!0,__source:!0};function ph(e,t,n){var r,i={},o=null,a=null;n!==void 0&&(o=""+n),t.key!==void 0&&(o=""+t.key),t.ref!==void 0&&(a=t.ref);for(r in t)Nv.call(t,r)&&!Uv.hasOwnProperty(r)&&(i[r]=t[r]);if(e&&e.defaultProps)for(r in t=e.defaultProps,t)i[r]===void 0&&(i[r]=t[r]);return{$$typeof:zv,type:e,key:o,ref:a,props:i,_owner:Vv.current}}as.Fragment=Fv;as.jsx=ph;as.jsxs=ph;ih.exports=as;var c=ih.exports,Wl={},hh={exports:{}},Ct={},mh={exports:{}},gh={};/**
 * @license React
 * scheduler.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */(function(e){function t(N,Q){var K=N.length;N.push(Q);e:for(;0<K;){var de=K-1>>>1,re=N[de];if(0<i(re,Q))N[de]=Q,N[K]=re,K=de;else break e}}function n(N){return N.length===0?null:N[0]}function r(N){if(N.length===0)return null;var Q=N[0],K=N.pop();if(K!==Q){N[0]=K;e:for(var de=0,re=N.length,Ce=re>>>1;de<Ce;){var Se=2*(de+1)-1,$e=N[Se],pe=Se+1,_e=N[pe];if(0>i($e,K))pe<re&&0>i(_e,$e)?(N[de]=_e,N[pe]=K,de=pe):(N[de]=$e,N[Se]=K,de=Se);else if(pe<re&&0>i(_e,K))N[de]=_e,N[pe]=K,de=pe;else break e}}return Q}function i(N,Q){var K=N.sortIndex-Q.sortIndex;return K!==0?K:N.id-Q.id}if(typeof performance=="object"&&typeof performance.now=="function"){var o=performance;e.unstable_now=function(){return o.now()}}else{var a=Date,l=a.now();e.unstable_now=function(){return a.now()-l}}var s=[],u=[],p=1,h=null,x=3,y=!1,m=!1,v=!1,b=typeof setTimeout=="function"?setTimeout:null,d=typeof clearTimeout=="function"?clearTimeout:null,f=typeof setImmediate<"u"?setImmediate:null;typeof navigator<"u"&&navigator.scheduling!==void 0&&navigator.scheduling.isInputPending!==void 0&&navigator.scheduling.isInputPending.bind(navigator.scheduling);function g(N){for(var Q=n(u);Q!==null;){if(Q.callback===null)r(u);else if(Q.startTime<=N)r(u),Q.sortIndex=Q.expirationTime,t(s,Q);else break;Q=n(u)}}function w(N){if(v=!1,g(N),!m)if(n(s)!==null)m=!0,ee(S);else{var Q=n(u);Q!==null&&ge(w,Q.startTime-N)}}function S(N,Q){m=!1,v&&(v=!1,d(j),j=-1),y=!0;var K=x;try{for(g(Q),h=n(s);h!==null&&(!(h.expirationTime>Q)||N&&!M());){var de=h.callback;if(typeof de=="function"){h.callback=null,x=h.priorityLevel;var re=de(h.expirationTime<=Q);Q=e.unstable_now(),typeof re=="function"?h.callback=re:h===n(s)&&r(s),g(Q)}else r(s);h=n(s)}if(h!==null)var Ce=!0;else{var Se=n(u);Se!==null&&ge(w,Se.startTime-Q),Ce=!1}return Ce}finally{h=null,x=K,y=!1}}var T=!1,C=null,j=-1,O=5,_=-1;function M(){return!(e.unstable_now()-_<O)}function R(){if(C!==null){var N=e.unstable_now();_=N;var Q=!0;try{Q=C(!0,N)}finally{Q?I():(T=!1,C=null)}}else T=!1}var I;if(typeof f=="function")I=function(){f(R)};else if(typeof MessageChannel<"u"){var W=new MessageChannel,$=W.port2;W.port1.onmessage=R,I=function(){$.postMessage(null)}}else I=function(){b(R,0)};function ee(N){C=N,T||(T=!0,I())}function ge(N,Q){j=b(function(){N(e.unstable_now())},Q)}e.unstable_IdlePriority=5,e.unstable_ImmediatePriority=1,e.unstable_LowPriority=4,e.unstable_NormalPriority=3,e.unstable_Profiling=null,e.unstable_UserBlockingPriority=2,e.unstable_cancelCallback=function(N){N.callback=null},e.unstable_continueExecution=function(){m||y||(m=!0,ee(S))},e.unstable_forceFrameRate=function(N){0>N||125<N?console.error("forceFrameRate takes a positive int between 0 and 125, forcing frame rates higher than 125 fps is not supported"):O=0<N?Math.floor(1e3/N):5},e.unstable_getCurrentPriorityLevel=function(){return x},e.unstable_getFirstCallbackNode=function(){return n(s)},e.unstable_next=function(N){switch(x){case 1:case 2:case 3:var Q=3;break;default:Q=x}var K=x;x=Q;try{return N()}finally{x=K}},e.unstable_pauseExecution=function(){},e.unstable_requestPaint=function(){},e.unstable_runWithPriority=function(N,Q){switch(N){case 1:case 2:case 3:case 4:case 5:break;default:N=3}var K=x;x=N;try{return Q()}finally{x=K}},e.unstable_scheduleCallback=function(N,Q,K){var de=e.unstable_now();switch(typeof K=="object"&&K!==null?(K=K.delay,K=typeof K=="number"&&0<K?de+K:de):K=de,N){case 1:var re=-1;break;case 2:re=250;break;case 5:re=1073741823;break;case 4:re=1e4;break;default:re=5e3}return re=K+re,N={id:p++,callback:Q,priorityLevel:N,startTime:K,expirationTime:re,sortIndex:-1},K>de?(N.sortIndex=K,t(u,N),n(s)===null&&N===n(u)&&(v?(d(j),j=-1):v=!0,ge(w,K-de))):(N.sortIndex=re,t(s,N),m||y||(m=!0,ee(S))),N},e.unstable_shouldYield=M,e.unstable_wrapCallback=function(N){var Q=x;return function(){var K=x;x=Q;try{return N.apply(this,arguments)}finally{x=K}}}})(gh);mh.exports=gh;var Wv=mh.exports;/**
 * @license React
 * react-dom.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */var xh=L,Ot=Wv;function z(e){for(var t="https://reactjs.org/docs/error-decoder.html?invariant="+e,n=1;n<arguments.length;n++)t+="&args[]="+encodeURIComponent(arguments[n]);return"Minified React error #"+e+"; visit "+t+" for the full message or use the non-minified dev environment for full errors and additional helpful warnings."}var vh=new Set,Bi={};function br(e,t){Jr(e,t),Jr(e+"Capture",t)}function Jr(e,t){for(Bi[e]=t,e=0;e<t.length;e++)vh.add(t[e])}var kn=!(typeof window>"u"||typeof window.document>"u"||typeof window.document.createElement>"u"),Bl=Object.prototype.hasOwnProperty,Bv=/^[:A-Z_a-z\u00C0-\u00D6\u00D8-\u00F6\u00F8-\u02FF\u0370-\u037D\u037F-\u1FFF\u200C-\u200D\u2070-\u218F\u2C00-\u2FEF\u3001-\uD7FF\uF900-\uFDCF\uFDF0-\uFFFD][:A-Z_a-z\u00C0-\u00D6\u00D8-\u00F6\u00F8-\u02FF\u0370-\u037D\u037F-\u1FFF\u200C-\u200D\u2070-\u218F\u2C00-\u2FEF\u3001-\uD7FF\uF900-\uFDCF\uFDF0-\uFFFD\-.0-9\u00B7\u0300-\u036F\u203F-\u2040]*$/,Pd={},Td={};function Hv(e){return Bl.call(Td,e)?!0:Bl.call(Pd,e)?!1:Bv.test(e)?Td[e]=!0:(Pd[e]=!0,!1)}function $v(e,t,n,r){if(n!==null&&n.type===0)return!1;switch(typeof t){case"function":case"symbol":return!0;case"boolean":return r?!1:n!==null?!n.acceptsBooleans:(e=e.toLowerCase().slice(0,5),e!=="data-"&&e!=="aria-");default:return!1}}function Yv(e,t,n,r){if(t===null||typeof t>"u"||$v(e,t,n,r))return!0;if(r)return!1;if(n!==null)switch(n.type){case 3:return!t;case 4:return t===!1;case 5:return isNaN(t);case 6:return isNaN(t)||1>t}return!1}function pt(e,t,n,r,i,o,a){this.acceptsBooleans=t===2||t===3||t===4,this.attributeName=r,this.attributeNamespace=i,this.mustUseProperty=n,this.propertyName=e,this.type=t,this.sanitizeURL=o,this.removeEmptyString=a}var tt={};"children dangerouslySetInnerHTML defaultValue defaultChecked innerHTML suppressContentEditableWarning suppressHydrationWarning style".split(" ").forEach(function(e){tt[e]=new pt(e,0,!1,e,null,!1,!1)});[["acceptCharset","accept-charset"],["className","class"],["htmlFor","for"],["httpEquiv","http-equiv"]].forEach(function(e){var t=e[0];tt[t]=new pt(t,1,!1,e[1],null,!1,!1)});["contentEditable","draggable","spellCheck","value"].forEach(function(e){tt[e]=new pt(e,2,!1,e.toLowerCase(),null,!1,!1)});["autoReverse","externalResourcesRequired","focusable","preserveAlpha"].forEach(function(e){tt[e]=new pt(e,2,!1,e,null,!1,!1)});"allowFullScreen async autoFocus autoPlay controls default defer disabled disablePictureInPicture disableRemotePlayback formNoValidate hidden loop noModule noValidate open playsInline readOnly required reversed scoped seamless itemScope".split(" ").forEach(function(e){tt[e]=new pt(e,3,!1,e.toLowerCase(),null,!1,!1)});["checked","multiple","muted","selected"].forEach(function(e){tt[e]=new pt(e,3,!0,e,null,!1,!1)});["capture","download"].forEach(function(e){tt[e]=new pt(e,4,!1,e,null,!1,!1)});["cols","rows","size","span"].forEach(function(e){tt[e]=new pt(e,6,!1,e,null,!1,!1)});["rowSpan","start"].forEach(function(e){tt[e]=new pt(e,5,!1,e.toLowerCase(),null,!1,!1)});var ic=/[\-:]([a-z])/g;function oc(e){return e[1].toUpperCase()}"accent-height alignment-baseline arabic-form baseline-shift cap-height clip-path clip-rule color-interpolation color-interpolation-filters color-profile color-rendering dominant-baseline enable-background fill-opacity fill-rule flood-color flood-opacity font-family font-size font-size-adjust font-stretch font-style font-variant font-weight glyph-name glyph-orientation-horizontal glyph-orientation-vertical horiz-adv-x horiz-origin-x image-rendering letter-spacing lighting-color marker-end marker-mid marker-start overline-position overline-thickness paint-order panose-1 pointer-events rendering-intent shape-rendering stop-color stop-opacity strikethrough-position strikethrough-thickness stroke-dasharray stroke-dashoffset stroke-linecap stroke-linejoin stroke-miterlimit stroke-opacity stroke-width text-anchor text-decoration text-rendering underline-position underline-thickness unicode-bidi unicode-range units-per-em v-alphabetic v-hanging v-ideographic v-mathematical vector-effect vert-adv-y vert-origin-x vert-origin-y word-spacing writing-mode xmlns:xlink x-height".split(" ").forEach(function(e){var t=e.replace(ic,oc);tt[t]=new pt(t,1,!1,e,null,!1,!1)});"xlink:actuate xlink:arcrole xlink:role xlink:show xlink:title xlink:type".split(" ").forEach(function(e){var t=e.replace(ic,oc);tt[t]=new pt(t,1,!1,e,"http://www.w3.org/1999/xlink",!1,!1)});["xml:base","xml:lang","xml:space"].forEach(function(e){var t=e.replace(ic,oc);tt[t]=new pt(t,1,!1,e,"http://www.w3.org/XML/1998/namespace",!1,!1)});["tabIndex","crossOrigin"].forEach(function(e){tt[e]=new pt(e,1,!1,e.toLowerCase(),null,!1,!1)});tt.xlinkHref=new pt("xlinkHref",1,!1,"xlink:href","http://www.w3.org/1999/xlink",!0,!1);["src","href","action","formAction"].forEach(function(e){tt[e]=new pt(e,1,!1,e.toLowerCase(),null,!0,!0)});function ac(e,t,n,r){var i=tt.hasOwnProperty(t)?tt[t]:null;(i!==null?i.type!==0:r||!(2<t.length)||t[0]!=="o"&&t[0]!=="O"||t[1]!=="n"&&t[1]!=="N")&&(Yv(t,n,i,r)&&(n=null),r||i===null?Hv(t)&&(n===null?e.removeAttribute(t):e.setAttribute(t,""+n)):i.mustUseProperty?e[i.propertyName]=n===null?i.type===3?!1:"":n:(t=i.attributeName,r=i.attributeNamespace,n===null?e.removeAttribute(t):(i=i.type,n=i===3||i===4&&n===!0?"":""+n,r?e.setAttributeNS(r,t,n):e.setAttribute(t,n))))}var Cn=xh.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED,ko=Symbol.for("react.element"),_r=Symbol.for("react.portal"),Mr=Symbol.for("react.fragment"),sc=Symbol.for("react.strict_mode"),Hl=Symbol.for("react.profiler"),yh=Symbol.for("react.provider"),wh=Symbol.for("react.context"),lc=Symbol.for("react.forward_ref"),$l=Symbol.for("react.suspense"),Yl=Symbol.for("react.suspense_list"),uc=Symbol.for("react.memo"),Nn=Symbol.for("react.lazy"),bh=Symbol.for("react.offscreen"),_d=Symbol.iterator;function di(e){return e===null||typeof e!="object"?null:(e=_d&&e[_d]||e["@@iterator"],typeof e=="function"?e:null)}var Ie=Object.assign,Ys;function Ei(e){if(Ys===void 0)try{throw Error()}catch(n){var t=n.stack.trim().match(/\n( *(at )?)/);Ys=t&&t[1]||""}return`
`+Ys+e}var Xs=!1;function Qs(e,t){if(!e||Xs)return"";Xs=!0;var n=Error.prepareStackTrace;Error.prepareStackTrace=void 0;try{if(t)if(t=function(){throw Error()},Object.defineProperty(t.prototype,"props",{set:function(){throw Error()}}),typeof Reflect=="object"&&Reflect.construct){try{Reflect.construct(t,[])}catch(u){var r=u}Reflect.construct(e,[],t)}else{try{t.call()}catch(u){r=u}e.call(t.prototype)}else{try{throw Error()}catch(u){r=u}e()}}catch(u){if(u&&r&&typeof u.stack=="string"){for(var i=u.stack.split(`
`),o=r.stack.split(`
`),a=i.length-1,l=o.length-1;1<=a&&0<=l&&i[a]!==o[l];)l--;for(;1<=a&&0<=l;a--,l--)if(i[a]!==o[l]){if(a!==1||l!==1)do if(a--,l--,0>l||i[a]!==o[l]){var s=`
`+i[a].replace(" at new "," at ");return e.displayName&&s.includes("<anonymous>")&&(s=s.replace("<anonymous>",e.displayName)),s}while(1<=a&&0<=l);break}}}finally{Xs=!1,Error.prepareStackTrace=n}return(e=e?e.displayName||e.name:"")?Ei(e):""}function Xv(e){switch(e.tag){case 5:return Ei(e.type);case 16:return Ei("Lazy");case 13:return Ei("Suspense");case 19:return Ei("SuspenseList");case 0:case 2:case 15:return e=Qs(e.type,!1),e;case 11:return e=Qs(e.type.render,!1),e;case 1:return e=Qs(e.type,!0),e;default:return""}}function Xl(e){if(e==null)return null;if(typeof e=="function")return e.displayName||e.name||null;if(typeof e=="string")return e;switch(e){case Mr:return"Fragment";case _r:return"Portal";case Hl:return"Profiler";case sc:return"StrictMode";case $l:return"Suspense";case Yl:return"SuspenseList"}if(typeof e=="object")switch(e.$$typeof){case wh:return(e.displayName||"Context")+".Consumer";case yh:return(e._context.displayName||"Context")+".Provider";case lc:var t=e.render;return e=e.displayName,e||(e=t.displayName||t.name||"",e=e!==""?"ForwardRef("+e+")":"ForwardRef"),e;case uc:return t=e.displayName||null,t!==null?t:Xl(e.type)||"Memo";case Nn:t=e._payload,e=e._init;try{return Xl(e(t))}catch{}}return null}function Qv(e){var t=e.type;switch(e.tag){case 24:return"Cache";case 9:return(t.displayName||"Context")+".Consumer";case 10:return(t._context.displayName||"Context")+".Provider";case 18:return"DehydratedFragment";case 11:return e=t.render,e=e.displayName||e.name||"",t.displayName||(e!==""?"ForwardRef("+e+")":"ForwardRef");case 7:return"Fragment";case 5:return t;case 4:return"Portal";case 3:return"Root";case 6:return"Text";case 16:return Xl(t);case 8:return t===sc?"StrictMode":"Mode";case 22:return"Offscreen";case 12:return"Profiler";case 21:return"Scope";case 13:return"Suspense";case 19:return"SuspenseList";case 25:return"TracingMarker";case 1:case 0:case 17:case 2:case 14:case 15:if(typeof t=="function")return t.displayName||t.name||null;if(typeof t=="string")return t}return null}function tr(e){switch(typeof e){case"boolean":case"number":case"string":case"undefined":return e;case"object":return e;default:return""}}function Sh(e){var t=e.type;return(e=e.nodeName)&&e.toLowerCase()==="input"&&(t==="checkbox"||t==="radio")}function Kv(e){var t=Sh(e)?"checked":"value",n=Object.getOwnPropertyDescriptor(e.constructor.prototype,t),r=""+e[t];if(!e.hasOwnProperty(t)&&typeof n<"u"&&typeof n.get=="function"&&typeof n.set=="function"){var i=n.get,o=n.set;return Object.defineProperty(e,t,{configurable:!0,get:function(){return i.call(this)},set:function(a){r=""+a,o.call(this,a)}}),Object.defineProperty(e,t,{enumerable:n.enumerable}),{getValue:function(){return r},setValue:function(a){r=""+a},stopTracking:function(){e._valueTracker=null,delete e[t]}}}}function jo(e){e._valueTracker||(e._valueTracker=Kv(e))}function kh(e){if(!e)return!1;var t=e._valueTracker;if(!t)return!0;var n=t.getValue(),r="";return e&&(r=Sh(e)?e.checked?"true":"false":e.value),e=r,e!==n?(t.setValue(e),!0):!1}function Sa(e){if(e=e||(typeof document<"u"?document:void 0),typeof e>"u")return null;try{return e.activeElement||e.body}catch{return e.body}}function Ql(e,t){var n=t.checked;return Ie({},t,{defaultChecked:void 0,defaultValue:void 0,value:void 0,checked:n??e._wrapperState.initialChecked})}function Md(e,t){var n=t.defaultValue==null?"":t.defaultValue,r=t.checked!=null?t.checked:t.defaultChecked;n=tr(t.value!=null?t.value:n),e._wrapperState={initialChecked:r,initialValue:n,controlled:t.type==="checkbox"||t.type==="radio"?t.checked!=null:t.value!=null}}function jh(e,t){t=t.checked,t!=null&&ac(e,"checked",t,!1)}function Kl(e,t){jh(e,t);var n=tr(t.value),r=t.type;if(n!=null)r==="number"?(n===0&&e.value===""||e.value!=n)&&(e.value=""+n):e.value!==""+n&&(e.value=""+n);else if(r==="submit"||r==="reset"){e.removeAttribute("value");return}t.hasOwnProperty("value")?Jl(e,t.type,n):t.hasOwnProperty("defaultValue")&&Jl(e,t.type,tr(t.defaultValue)),t.checked==null&&t.defaultChecked!=null&&(e.defaultChecked=!!t.defaultChecked)}function Ad(e,t,n){if(t.hasOwnProperty("value")||t.hasOwnProperty("defaultValue")){var r=t.type;if(!(r!=="submit"&&r!=="reset"||t.value!==void 0&&t.value!==null))return;t=""+e._wrapperState.initialValue,n||t===e.value||(e.value=t),e.defaultValue=t}n=e.name,n!==""&&(e.name=""),e.defaultChecked=!!e._wrapperState.initialChecked,n!==""&&(e.name=n)}function Jl(e,t,n){(t!=="number"||Sa(e.ownerDocument)!==e)&&(n==null?e.defaultValue=""+e._wrapperState.initialValue:e.defaultValue!==""+n&&(e.defaultValue=""+n))}var Ci=Array.isArray;function Br(e,t,n,r){if(e=e.options,t){t={};for(var i=0;i<n.length;i++)t["$"+n[i]]=!0;for(n=0;n<e.length;n++)i=t.hasOwnProperty("$"+e[n].value),e[n].selected!==i&&(e[n].selected=i),i&&r&&(e[n].defaultSelected=!0)}else{for(n=""+tr(n),t=null,i=0;i<e.length;i++){if(e[i].value===n){e[i].selected=!0,r&&(e[i].defaultSelected=!0);return}t!==null||e[i].disabled||(t=e[i])}t!==null&&(t.selected=!0)}}function ql(e,t){if(t.dangerouslySetInnerHTML!=null)throw Error(z(91));return Ie({},t,{value:void 0,defaultValue:void 0,children:""+e._wrapperState.initialValue})}function Rd(e,t){var n=t.value;if(n==null){if(n=t.children,t=t.defaultValue,n!=null){if(t!=null)throw Error(z(92));if(Ci(n)){if(1<n.length)throw Error(z(93));n=n[0]}t=n}t==null&&(t=""),n=t}e._wrapperState={initialValue:tr(n)}}function Oh(e,t){var n=tr(t.value),r=tr(t.defaultValue);n!=null&&(n=""+n,n!==e.value&&(e.value=n),t.defaultValue==null&&e.defaultValue!==n&&(e.defaultValue=n)),r!=null&&(e.defaultValue=""+r)}function Id(e){var t=e.textContent;t===e._wrapperState.initialValue&&t!==""&&t!==null&&(e.value=t)}function Eh(e){switch(e){case"svg":return"http://www.w3.org/2000/svg";case"math":return"http://www.w3.org/1998/Math/MathML";default:return"http://www.w3.org/1999/xhtml"}}function Gl(e,t){return e==null||e==="http://www.w3.org/1999/xhtml"?Eh(t):e==="http://www.w3.org/2000/svg"&&t==="foreignObject"?"http://www.w3.org/1999/xhtml":e}var Oo,Ch=function(e){return typeof MSApp<"u"&&MSApp.execUnsafeLocalFunction?function(t,n,r,i){MSApp.execUnsafeLocalFunction(function(){return e(t,n,r,i)})}:e}(function(e,t){if(e.namespaceURI!=="http://www.w3.org/2000/svg"||"innerHTML"in e)e.innerHTML=t;else{for(Oo=Oo||document.createElement("div"),Oo.innerHTML="<svg>"+t.valueOf().toString()+"</svg>",t=Oo.firstChild;e.firstChild;)e.removeChild(e.firstChild);for(;t.firstChild;)e.appendChild(t.firstChild)}});function Hi(e,t){if(t){var n=e.firstChild;if(n&&n===e.lastChild&&n.nodeType===3){n.nodeValue=t;return}}e.textContent=t}var Ai={animationIterationCount:!0,aspectRatio:!0,borderImageOutset:!0,borderImageSlice:!0,borderImageWidth:!0,boxFlex:!0,boxFlexGroup:!0,boxOrdinalGroup:!0,columnCount:!0,columns:!0,flex:!0,flexGrow:!0,flexPositive:!0,flexShrink:!0,flexNegative:!0,flexOrder:!0,gridArea:!0,gridRow:!0,gridRowEnd:!0,gridRowSpan:!0,gridRowStart:!0,gridColumn:!0,gridColumnEnd:!0,gridColumnSpan:!0,gridColumnStart:!0,fontWeight:!0,lineClamp:!0,lineHeight:!0,opacity:!0,order:!0,orphans:!0,tabSize:!0,widows:!0,zIndex:!0,zoom:!0,fillOpacity:!0,floodOpacity:!0,stopOpacity:!0,strokeDasharray:!0,strokeDashoffset:!0,strokeMiterlimit:!0,strokeOpacity:!0,strokeWidth:!0},Jv=["Webkit","ms","Moz","O"];Object.keys(Ai).forEach(function(e){Jv.forEach(function(t){t=t+e.charAt(0).toUpperCase()+e.substring(1),Ai[t]=Ai[e]})});function Ph(e,t,n){return t==null||typeof t=="boolean"||t===""?"":n||typeof t!="number"||t===0||Ai.hasOwnProperty(e)&&Ai[e]?(""+t).trim():t+"px"}function Th(e,t){e=e.style;for(var n in t)if(t.hasOwnProperty(n)){var r=n.indexOf("--")===0,i=Ph(n,t[n],r);n==="float"&&(n="cssFloat"),r?e.setProperty(n,i):e[n]=i}}var qv=Ie({menuitem:!0},{area:!0,base:!0,br:!0,col:!0,embed:!0,hr:!0,img:!0,input:!0,keygen:!0,link:!0,meta:!0,param:!0,source:!0,track:!0,wbr:!0});function Zl(e,t){if(t){if(qv[e]&&(t.children!=null||t.dangerouslySetInnerHTML!=null))throw Error(z(137,e));if(t.dangerouslySetInnerHTML!=null){if(t.children!=null)throw Error(z(60));if(typeof t.dangerouslySetInnerHTML!="object"||!("__html"in t.dangerouslySetInnerHTML))throw Error(z(61))}if(t.style!=null&&typeof t.style!="object")throw Error(z(62))}}function eu(e,t){if(e.indexOf("-")===-1)return typeof t.is=="string";switch(e){case"annotation-xml":case"color-profile":case"font-face":case"font-face-src":case"font-face-uri":case"font-face-format":case"font-face-name":case"missing-glyph":return!1;default:return!0}}var tu=null;function cc(e){return e=e.target||e.srcElement||window,e.correspondingUseElement&&(e=e.correspondingUseElement),e.nodeType===3?e.parentNode:e}var nu=null,Hr=null,$r=null;function Ld(e){if(e=ho(e)){if(typeof nu!="function")throw Error(z(280));var t=e.stateNode;t&&(t=ds(t),nu(e.stateNode,e.type,t))}}function _h(e){Hr?$r?$r.push(e):$r=[e]:Hr=e}function Mh(){if(Hr){var e=Hr,t=$r;if($r=Hr=null,Ld(e),t)for(e=0;e<t.length;e++)Ld(t[e])}}function Ah(e,t){return e(t)}function Rh(){}var Ks=!1;function Ih(e,t,n){if(Ks)return e(t,n);Ks=!0;try{return Ah(e,t,n)}finally{Ks=!1,(Hr!==null||$r!==null)&&(Rh(),Mh())}}function $i(e,t){var n=e.stateNode;if(n===null)return null;var r=ds(n);if(r===null)return null;n=r[t];e:switch(t){case"onClick":case"onClickCapture":case"onDoubleClick":case"onDoubleClickCapture":case"onMouseDown":case"onMouseDownCapture":case"onMouseMove":case"onMouseMoveCapture":case"onMouseUp":case"onMouseUpCapture":case"onMouseEnter":(r=!r.disabled)||(e=e.type,r=!(e==="button"||e==="input"||e==="select"||e==="textarea")),e=!r;break e;default:e=!1}if(e)return null;if(n&&typeof n!="function")throw Error(z(231,t,typeof n));return n}var ru=!1;if(kn)try{var fi={};Object.defineProperty(fi,"passive",{get:function(){ru=!0}}),window.addEventListener("test",fi,fi),window.removeEventListener("test",fi,fi)}catch{ru=!1}function Gv(e,t,n,r,i,o,a,l,s){var u=Array.prototype.slice.call(arguments,3);try{t.apply(n,u)}catch(p){this.onError(p)}}var Ri=!1,ka=null,ja=!1,iu=null,Zv={onError:function(e){Ri=!0,ka=e}};function e0(e,t,n,r,i,o,a,l,s){Ri=!1,ka=null,Gv.apply(Zv,arguments)}function t0(e,t,n,r,i,o,a,l,s){if(e0.apply(this,arguments),Ri){if(Ri){var u=ka;Ri=!1,ka=null}else throw Error(z(198));ja||(ja=!0,iu=u)}}function Sr(e){var t=e,n=e;if(e.alternate)for(;t.return;)t=t.return;else{e=t;do t=e,t.flags&4098&&(n=t.return),e=t.return;while(e)}return t.tag===3?n:null}function Lh(e){if(e.tag===13){var t=e.memoizedState;if(t===null&&(e=e.alternate,e!==null&&(t=e.memoizedState)),t!==null)return t.dehydrated}return null}function Dd(e){if(Sr(e)!==e)throw Error(z(188))}function n0(e){var t=e.alternate;if(!t){if(t=Sr(e),t===null)throw Error(z(188));return t!==e?null:e}for(var n=e,r=t;;){var i=n.return;if(i===null)break;var o=i.alternate;if(o===null){if(r=i.return,r!==null){n=r;continue}break}if(i.child===o.child){for(o=i.child;o;){if(o===n)return Dd(i),e;if(o===r)return Dd(i),t;o=o.sibling}throw Error(z(188))}if(n.return!==r.return)n=i,r=o;else{for(var a=!1,l=i.child;l;){if(l===n){a=!0,n=i,r=o;break}if(l===r){a=!0,r=i,n=o;break}l=l.sibling}if(!a){for(l=o.child;l;){if(l===n){a=!0,n=o,r=i;break}if(l===r){a=!0,r=o,n=i;break}l=l.sibling}if(!a)throw Error(z(189))}}if(n.alternate!==r)throw Error(z(190))}if(n.tag!==3)throw Error(z(188));return n.stateNode.current===n?e:t}function Dh(e){return e=n0(e),e!==null?zh(e):null}function zh(e){if(e.tag===5||e.tag===6)return e;for(e=e.child;e!==null;){var t=zh(e);if(t!==null)return t;e=e.sibling}return null}var Fh=Ot.unstable_scheduleCallback,zd=Ot.unstable_cancelCallback,r0=Ot.unstable_shouldYield,i0=Ot.unstable_requestPaint,Fe=Ot.unstable_now,o0=Ot.unstable_getCurrentPriorityLevel,dc=Ot.unstable_ImmediatePriority,Nh=Ot.unstable_UserBlockingPriority,Oa=Ot.unstable_NormalPriority,a0=Ot.unstable_LowPriority,Vh=Ot.unstable_IdlePriority,ss=null,un=null;function s0(e){if(un&&typeof un.onCommitFiberRoot=="function")try{un.onCommitFiberRoot(ss,e,void 0,(e.current.flags&128)===128)}catch{}}var Kt=Math.clz32?Math.clz32:c0,l0=Math.log,u0=Math.LN2;function c0(e){return e>>>=0,e===0?32:31-(l0(e)/u0|0)|0}var Eo=64,Co=4194304;function Pi(e){switch(e&-e){case 1:return 1;case 2:return 2;case 4:return 4;case 8:return 8;case 16:return 16;case 32:return 32;case 64:case 128:case 256:case 512:case 1024:case 2048:case 4096:case 8192:case 16384:case 32768:case 65536:case 131072:case 262144:case 524288:case 1048576:case 2097152:return e&4194240;case 4194304:case 8388608:case 16777216:case 33554432:case 67108864:return e&130023424;case 134217728:return 134217728;case 268435456:return 268435456;case 536870912:return 536870912;case 1073741824:return 1073741824;default:return e}}function Ea(e,t){var n=e.pendingLanes;if(n===0)return 0;var r=0,i=e.suspendedLanes,o=e.pingedLanes,a=n&268435455;if(a!==0){var l=a&~i;l!==0?r=Pi(l):(o&=a,o!==0&&(r=Pi(o)))}else a=n&~i,a!==0?r=Pi(a):o!==0&&(r=Pi(o));if(r===0)return 0;if(t!==0&&t!==r&&!(t&i)&&(i=r&-r,o=t&-t,i>=o||i===16&&(o&4194240)!==0))return t;if(r&4&&(r|=n&16),t=e.entangledLanes,t!==0)for(e=e.entanglements,t&=r;0<t;)n=31-Kt(t),i=1<<n,r|=e[n],t&=~i;return r}function d0(e,t){switch(e){case 1:case 2:case 4:return t+250;case 8:case 16:case 32:case 64:case 128:case 256:case 512:case 1024:case 2048:case 4096:case 8192:case 16384:case 32768:case 65536:case 131072:case 262144:case 524288:case 1048576:case 2097152:return t+5e3;case 4194304:case 8388608:case 16777216:case 33554432:case 67108864:return-1;case 134217728:case 268435456:case 536870912:case 1073741824:return-1;default:return-1}}function f0(e,t){for(var n=e.suspendedLanes,r=e.pingedLanes,i=e.expirationTimes,o=e.pendingLanes;0<o;){var a=31-Kt(o),l=1<<a,s=i[a];s===-1?(!(l&n)||l&r)&&(i[a]=d0(l,t)):s<=t&&(e.expiredLanes|=l),o&=~l}}function ou(e){return e=e.pendingLanes&-1073741825,e!==0?e:e&1073741824?1073741824:0}function Uh(){var e=Eo;return Eo<<=1,!(Eo&4194240)&&(Eo=64),e}function Js(e){for(var t=[],n=0;31>n;n++)t.push(e);return t}function fo(e,t,n){e.pendingLanes|=t,t!==536870912&&(e.suspendedLanes=0,e.pingedLanes=0),e=e.eventTimes,t=31-Kt(t),e[t]=n}function p0(e,t){var n=e.pendingLanes&~t;e.pendingLanes=t,e.suspendedLanes=0,e.pingedLanes=0,e.expiredLanes&=t,e.mutableReadLanes&=t,e.entangledLanes&=t,t=e.entanglements;var r=e.eventTimes;for(e=e.expirationTimes;0<n;){var i=31-Kt(n),o=1<<i;t[i]=0,r[i]=-1,e[i]=-1,n&=~o}}function fc(e,t){var n=e.entangledLanes|=t;for(e=e.entanglements;n;){var r=31-Kt(n),i=1<<r;i&t|e[r]&t&&(e[r]|=t),n&=~i}}var we=0;function Wh(e){return e&=-e,1<e?4<e?e&268435455?16:536870912:4:1}var Bh,pc,Hh,$h,Yh,au=!1,Po=[],Xn=null,Qn=null,Kn=null,Yi=new Map,Xi=new Map,Un=[],h0="mousedown mouseup touchcancel touchend touchstart auxclick dblclick pointercancel pointerdown pointerup dragend dragstart drop compositionend compositionstart keydown keypress keyup input textInput copy cut paste click change contextmenu reset submit".split(" ");function Fd(e,t){switch(e){case"focusin":case"focusout":Xn=null;break;case"dragenter":case"dragleave":Qn=null;break;case"mouseover":case"mouseout":Kn=null;break;case"pointerover":case"pointerout":Yi.delete(t.pointerId);break;case"gotpointercapture":case"lostpointercapture":Xi.delete(t.pointerId)}}function pi(e,t,n,r,i,o){return e===null||e.nativeEvent!==o?(e={blockedOn:t,domEventName:n,eventSystemFlags:r,nativeEvent:o,targetContainers:[i]},t!==null&&(t=ho(t),t!==null&&pc(t)),e):(e.eventSystemFlags|=r,t=e.targetContainers,i!==null&&t.indexOf(i)===-1&&t.push(i),e)}function m0(e,t,n,r,i){switch(t){case"focusin":return Xn=pi(Xn,e,t,n,r,i),!0;case"dragenter":return Qn=pi(Qn,e,t,n,r,i),!0;case"mouseover":return Kn=pi(Kn,e,t,n,r,i),!0;case"pointerover":var o=i.pointerId;return Yi.set(o,pi(Yi.get(o)||null,e,t,n,r,i)),!0;case"gotpointercapture":return o=i.pointerId,Xi.set(o,pi(Xi.get(o)||null,e,t,n,r,i)),!0}return!1}function Xh(e){var t=lr(e.target);if(t!==null){var n=Sr(t);if(n!==null){if(t=n.tag,t===13){if(t=Lh(n),t!==null){e.blockedOn=t,Yh(e.priority,function(){Hh(n)});return}}else if(t===3&&n.stateNode.current.memoizedState.isDehydrated){e.blockedOn=n.tag===3?n.stateNode.containerInfo:null;return}}}e.blockedOn=null}function ta(e){if(e.blockedOn!==null)return!1;for(var t=e.targetContainers;0<t.length;){var n=su(e.domEventName,e.eventSystemFlags,t[0],e.nativeEvent);if(n===null){n=e.nativeEvent;var r=new n.constructor(n.type,n);tu=r,n.target.dispatchEvent(r),tu=null}else return t=ho(n),t!==null&&pc(t),e.blockedOn=n,!1;t.shift()}return!0}function Nd(e,t,n){ta(e)&&n.delete(t)}function g0(){au=!1,Xn!==null&&ta(Xn)&&(Xn=null),Qn!==null&&ta(Qn)&&(Qn=null),Kn!==null&&ta(Kn)&&(Kn=null),Yi.forEach(Nd),Xi.forEach(Nd)}function hi(e,t){e.blockedOn===t&&(e.blockedOn=null,au||(au=!0,Ot.unstable_scheduleCallback(Ot.unstable_NormalPriority,g0)))}function Qi(e){function t(i){return hi(i,e)}if(0<Po.length){hi(Po[0],e);for(var n=1;n<Po.length;n++){var r=Po[n];r.blockedOn===e&&(r.blockedOn=null)}}for(Xn!==null&&hi(Xn,e),Qn!==null&&hi(Qn,e),Kn!==null&&hi(Kn,e),Yi.forEach(t),Xi.forEach(t),n=0;n<Un.length;n++)r=Un[n],r.blockedOn===e&&(r.blockedOn=null);for(;0<Un.length&&(n=Un[0],n.blockedOn===null);)Xh(n),n.blockedOn===null&&Un.shift()}var Yr=Cn.ReactCurrentBatchConfig,Ca=!0;function x0(e,t,n,r){var i=we,o=Yr.transition;Yr.transition=null;try{we=1,hc(e,t,n,r)}finally{we=i,Yr.transition=o}}function v0(e,t,n,r){var i=we,o=Yr.transition;Yr.transition=null;try{we=4,hc(e,t,n,r)}finally{we=i,Yr.transition=o}}function hc(e,t,n,r){if(Ca){var i=su(e,t,n,r);if(i===null)al(e,t,r,Pa,n),Fd(e,r);else if(m0(i,e,t,n,r))r.stopPropagation();else if(Fd(e,r),t&4&&-1<h0.indexOf(e)){for(;i!==null;){var o=ho(i);if(o!==null&&Bh(o),o=su(e,t,n,r),o===null&&al(e,t,r,Pa,n),o===i)break;i=o}i!==null&&r.stopPropagation()}else al(e,t,r,null,n)}}var Pa=null;function su(e,t,n,r){if(Pa=null,e=cc(r),e=lr(e),e!==null)if(t=Sr(e),t===null)e=null;else if(n=t.tag,n===13){if(e=Lh(t),e!==null)return e;e=null}else if(n===3){if(t.stateNode.current.memoizedState.isDehydrated)return t.tag===3?t.stateNode.containerInfo:null;e=null}else t!==e&&(e=null);return Pa=e,null}function Qh(e){switch(e){case"cancel":case"click":case"close":case"contextmenu":case"copy":case"cut":case"auxclick":case"dblclick":case"dragend":case"dragstart":case"drop":case"focusin":case"focusout":case"input":case"invalid":case"keydown":case"keypress":case"keyup":case"mousedown":case"mouseup":case"paste":case"pause":case"play":case"pointercancel":case"pointerdown":case"pointerup":case"ratechange":case"reset":case"resize":case"seeked":case"submit":case"touchcancel":case"touchend":case"touchstart":case"volumechange":case"change":case"selectionchange":case"textInput":case"compositionstart":case"compositionend":case"compositionupdate":case"beforeblur":case"afterblur":case"beforeinput":case"blur":case"fullscreenchange":case"focus":case"hashchange":case"popstate":case"select":case"selectstart":return 1;case"drag":case"dragenter":case"dragexit":case"dragleave":case"dragover":case"mousemove":case"mouseout":case"mouseover":case"pointermove":case"pointerout":case"pointerover":case"scroll":case"toggle":case"touchmove":case"wheel":case"mouseenter":case"mouseleave":case"pointerenter":case"pointerleave":return 4;case"message":switch(o0()){case dc:return 1;case Nh:return 4;case Oa:case a0:return 16;case Vh:return 536870912;default:return 16}default:return 16}}var Bn=null,mc=null,na=null;function Kh(){if(na)return na;var e,t=mc,n=t.length,r,i="value"in Bn?Bn.value:Bn.textContent,o=i.length;for(e=0;e<n&&t[e]===i[e];e++);var a=n-e;for(r=1;r<=a&&t[n-r]===i[o-r];r++);return na=i.slice(e,1<r?1-r:void 0)}function ra(e){var t=e.keyCode;return"charCode"in e?(e=e.charCode,e===0&&t===13&&(e=13)):e=t,e===10&&(e=13),32<=e||e===13?e:0}function To(){return!0}function Vd(){return!1}function Pt(e){function t(n,r,i,o,a){this._reactName=n,this._targetInst=i,this.type=r,this.nativeEvent=o,this.target=a,this.currentTarget=null;for(var l in e)e.hasOwnProperty(l)&&(n=e[l],this[l]=n?n(o):o[l]);return this.isDefaultPrevented=(o.defaultPrevented!=null?o.defaultPrevented:o.returnValue===!1)?To:Vd,this.isPropagationStopped=Vd,this}return Ie(t.prototype,{preventDefault:function(){this.defaultPrevented=!0;var n=this.nativeEvent;n&&(n.preventDefault?n.preventDefault():typeof n.returnValue!="unknown"&&(n.returnValue=!1),this.isDefaultPrevented=To)},stopPropagation:function(){var n=this.nativeEvent;n&&(n.stopPropagation?n.stopPropagation():typeof n.cancelBubble!="unknown"&&(n.cancelBubble=!0),this.isPropagationStopped=To)},persist:function(){},isPersistent:To}),t}var si={eventPhase:0,bubbles:0,cancelable:0,timeStamp:function(e){return e.timeStamp||Date.now()},defaultPrevented:0,isTrusted:0},gc=Pt(si),po=Ie({},si,{view:0,detail:0}),y0=Pt(po),qs,Gs,mi,ls=Ie({},po,{screenX:0,screenY:0,clientX:0,clientY:0,pageX:0,pageY:0,ctrlKey:0,shiftKey:0,altKey:0,metaKey:0,getModifierState:xc,button:0,buttons:0,relatedTarget:function(e){return e.relatedTarget===void 0?e.fromElement===e.srcElement?e.toElement:e.fromElement:e.relatedTarget},movementX:function(e){return"movementX"in e?e.movementX:(e!==mi&&(mi&&e.type==="mousemove"?(qs=e.screenX-mi.screenX,Gs=e.screenY-mi.screenY):Gs=qs=0,mi=e),qs)},movementY:function(e){return"movementY"in e?e.movementY:Gs}}),Ud=Pt(ls),w0=Ie({},ls,{dataTransfer:0}),b0=Pt(w0),S0=Ie({},po,{relatedTarget:0}),Zs=Pt(S0),k0=Ie({},si,{animationName:0,elapsedTime:0,pseudoElement:0}),j0=Pt(k0),O0=Ie({},si,{clipboardData:function(e){return"clipboardData"in e?e.clipboardData:window.clipboardData}}),E0=Pt(O0),C0=Ie({},si,{data:0}),Wd=Pt(C0),P0={Esc:"Escape",Spacebar:" ",Left:"ArrowLeft",Up:"ArrowUp",Right:"ArrowRight",Down:"ArrowDown",Del:"Delete",Win:"OS",Menu:"ContextMenu",Apps:"ContextMenu",Scroll:"ScrollLock",MozPrintableKey:"Unidentified"},T0={8:"Backspace",9:"Tab",12:"Clear",13:"Enter",16:"Shift",17:"Control",18:"Alt",19:"Pause",20:"CapsLock",27:"Escape",32:" ",33:"PageUp",34:"PageDown",35:"End",36:"Home",37:"ArrowLeft",38:"ArrowUp",39:"ArrowRight",40:"ArrowDown",45:"Insert",46:"Delete",112:"F1",113:"F2",114:"F3",115:"F4",116:"F5",117:"F6",118:"F7",119:"F8",120:"F9",121:"F10",122:"F11",123:"F12",144:"NumLock",145:"ScrollLock",224:"Meta"},_0={Alt:"altKey",Control:"ctrlKey",Meta:"metaKey",Shift:"shiftKey"};function M0(e){var t=this.nativeEvent;return t.getModifierState?t.getModifierState(e):(e=_0[e])?!!t[e]:!1}function xc(){return M0}var A0=Ie({},po,{key:function(e){if(e.key){var t=P0[e.key]||e.key;if(t!=="Unidentified")return t}return e.type==="keypress"?(e=ra(e),e===13?"Enter":String.fromCharCode(e)):e.type==="keydown"||e.type==="keyup"?T0[e.keyCode]||"Unidentified":""},code:0,location:0,ctrlKey:0,shiftKey:0,altKey:0,metaKey:0,repeat:0,locale:0,getModifierState:xc,charCode:function(e){return e.type==="keypress"?ra(e):0},keyCode:function(e){return e.type==="keydown"||e.type==="keyup"?e.keyCode:0},which:function(e){return e.type==="keypress"?ra(e):e.type==="keydown"||e.type==="keyup"?e.keyCode:0}}),R0=Pt(A0),I0=Ie({},ls,{pointerId:0,width:0,height:0,pressure:0,tangentialPressure:0,tiltX:0,tiltY:0,twist:0,pointerType:0,isPrimary:0}),Bd=Pt(I0),L0=Ie({},po,{touches:0,targetTouches:0,changedTouches:0,altKey:0,metaKey:0,ctrlKey:0,shiftKey:0,getModifierState:xc}),D0=Pt(L0),z0=Ie({},si,{propertyName:0,elapsedTime:0,pseudoElement:0}),F0=Pt(z0),N0=Ie({},ls,{deltaX:function(e){return"deltaX"in e?e.deltaX:"wheelDeltaX"in e?-e.wheelDeltaX:0},deltaY:function(e){return"deltaY"in e?e.deltaY:"wheelDeltaY"in e?-e.wheelDeltaY:"wheelDelta"in e?-e.wheelDelta:0},deltaZ:0,deltaMode:0}),V0=Pt(N0),U0=[9,13,27,32],vc=kn&&"CompositionEvent"in window,Ii=null;kn&&"documentMode"in document&&(Ii=document.documentMode);var W0=kn&&"TextEvent"in window&&!Ii,Jh=kn&&(!vc||Ii&&8<Ii&&11>=Ii),Hd=" ",$d=!1;function qh(e,t){switch(e){case"keyup":return U0.indexOf(t.keyCode)!==-1;case"keydown":return t.keyCode!==229;case"keypress":case"mousedown":case"focusout":return!0;default:return!1}}function Gh(e){return e=e.detail,typeof e=="object"&&"data"in e?e.data:null}var Ar=!1;function B0(e,t){switch(e){case"compositionend":return Gh(t);case"keypress":return t.which!==32?null:($d=!0,Hd);case"textInput":return e=t.data,e===Hd&&$d?null:e;default:return null}}function H0(e,t){if(Ar)return e==="compositionend"||!vc&&qh(e,t)?(e=Kh(),na=mc=Bn=null,Ar=!1,e):null;switch(e){case"paste":return null;case"keypress":if(!(t.ctrlKey||t.altKey||t.metaKey)||t.ctrlKey&&t.altKey){if(t.char&&1<t.char.length)return t.char;if(t.which)return String.fromCharCode(t.which)}return null;case"compositionend":return Jh&&t.locale!=="ko"?null:t.data;default:return null}}var $0={color:!0,date:!0,datetime:!0,"datetime-local":!0,email:!0,month:!0,number:!0,password:!0,range:!0,search:!0,tel:!0,text:!0,time:!0,url:!0,week:!0};function Yd(e){var t=e&&e.nodeName&&e.nodeName.toLowerCase();return t==="input"?!!$0[e.type]:t==="textarea"}function Zh(e,t,n,r){_h(r),t=Ta(t,"onChange"),0<t.length&&(n=new gc("onChange","change",null,n,r),e.push({event:n,listeners:t}))}var Li=null,Ki=null;function Y0(e){cm(e,0)}function us(e){var t=Lr(e);if(kh(t))return e}function X0(e,t){if(e==="change")return t}var em=!1;if(kn){var el;if(kn){var tl="oninput"in document;if(!tl){var Xd=document.createElement("div");Xd.setAttribute("oninput","return;"),tl=typeof Xd.oninput=="function"}el=tl}else el=!1;em=el&&(!document.documentMode||9<document.documentMode)}function Qd(){Li&&(Li.detachEvent("onpropertychange",tm),Ki=Li=null)}function tm(e){if(e.propertyName==="value"&&us(Ki)){var t=[];Zh(t,Ki,e,cc(e)),Ih(Y0,t)}}function Q0(e,t,n){e==="focusin"?(Qd(),Li=t,Ki=n,Li.attachEvent("onpropertychange",tm)):e==="focusout"&&Qd()}function K0(e){if(e==="selectionchange"||e==="keyup"||e==="keydown")return us(Ki)}function J0(e,t){if(e==="click")return us(t)}function q0(e,t){if(e==="input"||e==="change")return us(t)}function G0(e,t){return e===t&&(e!==0||1/e===1/t)||e!==e&&t!==t}var Gt=typeof Object.is=="function"?Object.is:G0;function Ji(e,t){if(Gt(e,t))return!0;if(typeof e!="object"||e===null||typeof t!="object"||t===null)return!1;var n=Object.keys(e),r=Object.keys(t);if(n.length!==r.length)return!1;for(r=0;r<n.length;r++){var i=n[r];if(!Bl.call(t,i)||!Gt(e[i],t[i]))return!1}return!0}function Kd(e){for(;e&&e.firstChild;)e=e.firstChild;return e}function Jd(e,t){var n=Kd(e);e=0;for(var r;n;){if(n.nodeType===3){if(r=e+n.textContent.length,e<=t&&r>=t)return{node:n,offset:t-e};e=r}e:{for(;n;){if(n.nextSibling){n=n.nextSibling;break e}n=n.parentNode}n=void 0}n=Kd(n)}}function nm(e,t){return e&&t?e===t?!0:e&&e.nodeType===3?!1:t&&t.nodeType===3?nm(e,t.parentNode):"contains"in e?e.contains(t):e.compareDocumentPosition?!!(e.compareDocumentPosition(t)&16):!1:!1}function rm(){for(var e=window,t=Sa();t instanceof e.HTMLIFrameElement;){try{var n=typeof t.contentWindow.location.href=="string"}catch{n=!1}if(n)e=t.contentWindow;else break;t=Sa(e.document)}return t}function yc(e){var t=e&&e.nodeName&&e.nodeName.toLowerCase();return t&&(t==="input"&&(e.type==="text"||e.type==="search"||e.type==="tel"||e.type==="url"||e.type==="password")||t==="textarea"||e.contentEditable==="true")}function Z0(e){var t=rm(),n=e.focusedElem,r=e.selectionRange;if(t!==n&&n&&n.ownerDocument&&nm(n.ownerDocument.documentElement,n)){if(r!==null&&yc(n)){if(t=r.start,e=r.end,e===void 0&&(e=t),"selectionStart"in n)n.selectionStart=t,n.selectionEnd=Math.min(e,n.value.length);else if(e=(t=n.ownerDocument||document)&&t.defaultView||window,e.getSelection){e=e.getSelection();var i=n.textContent.length,o=Math.min(r.start,i);r=r.end===void 0?o:Math.min(r.end,i),!e.extend&&o>r&&(i=r,r=o,o=i),i=Jd(n,o);var a=Jd(n,r);i&&a&&(e.rangeCount!==1||e.anchorNode!==i.node||e.anchorOffset!==i.offset||e.focusNode!==a.node||e.focusOffset!==a.offset)&&(t=t.createRange(),t.setStart(i.node,i.offset),e.removeAllRanges(),o>r?(e.addRange(t),e.extend(a.node,a.offset)):(t.setEnd(a.node,a.offset),e.addRange(t)))}}for(t=[],e=n;e=e.parentNode;)e.nodeType===1&&t.push({element:e,left:e.scrollLeft,top:e.scrollTop});for(typeof n.focus=="function"&&n.focus(),n=0;n<t.length;n++)e=t[n],e.element.scrollLeft=e.left,e.element.scrollTop=e.top}}var ey=kn&&"documentMode"in document&&11>=document.documentMode,Rr=null,lu=null,Di=null,uu=!1;function qd(e,t,n){var r=n.window===n?n.document:n.nodeType===9?n:n.ownerDocument;uu||Rr==null||Rr!==Sa(r)||(r=Rr,"selectionStart"in r&&yc(r)?r={start:r.selectionStart,end:r.selectionEnd}:(r=(r.ownerDocument&&r.ownerDocument.defaultView||window).getSelection(),r={anchorNode:r.anchorNode,anchorOffset:r.anchorOffset,focusNode:r.focusNode,focusOffset:r.focusOffset}),Di&&Ji(Di,r)||(Di=r,r=Ta(lu,"onSelect"),0<r.length&&(t=new gc("onSelect","select",null,t,n),e.push({event:t,listeners:r}),t.target=Rr)))}function _o(e,t){var n={};return n[e.toLowerCase()]=t.toLowerCase(),n["Webkit"+e]="webkit"+t,n["Moz"+e]="moz"+t,n}var Ir={animationend:_o("Animation","AnimationEnd"),animationiteration:_o("Animation","AnimationIteration"),animationstart:_o("Animation","AnimationStart"),transitionend:_o("Transition","TransitionEnd")},nl={},im={};kn&&(im=document.createElement("div").style,"AnimationEvent"in window||(delete Ir.animationend.animation,delete Ir.animationiteration.animation,delete Ir.animationstart.animation),"TransitionEvent"in window||delete Ir.transitionend.transition);function cs(e){if(nl[e])return nl[e];if(!Ir[e])return e;var t=Ir[e],n;for(n in t)if(t.hasOwnProperty(n)&&n in im)return nl[e]=t[n];return e}var om=cs("animationend"),am=cs("animationiteration"),sm=cs("animationstart"),lm=cs("transitionend"),um=new Map,Gd="abort auxClick cancel canPlay canPlayThrough click close contextMenu copy cut drag dragEnd dragEnter dragExit dragLeave dragOver dragStart drop durationChange emptied encrypted ended error gotPointerCapture input invalid keyDown keyPress keyUp load loadedData loadedMetadata loadStart lostPointerCapture mouseDown mouseMove mouseOut mouseOver mouseUp paste pause play playing pointerCancel pointerDown pointerMove pointerOut pointerOver pointerUp progress rateChange reset resize seeked seeking stalled submit suspend timeUpdate touchCancel touchEnd touchStart volumeChange scroll toggle touchMove waiting wheel".split(" ");function rr(e,t){um.set(e,t),br(t,[e])}for(var rl=0;rl<Gd.length;rl++){var il=Gd[rl],ty=il.toLowerCase(),ny=il[0].toUpperCase()+il.slice(1);rr(ty,"on"+ny)}rr(om,"onAnimationEnd");rr(am,"onAnimationIteration");rr(sm,"onAnimationStart");rr("dblclick","onDoubleClick");rr("focusin","onFocus");rr("focusout","onBlur");rr(lm,"onTransitionEnd");Jr("onMouseEnter",["mouseout","mouseover"]);Jr("onMouseLeave",["mouseout","mouseover"]);Jr("onPointerEnter",["pointerout","pointerover"]);Jr("onPointerLeave",["pointerout","pointerover"]);br("onChange","change click focusin focusout input keydown keyup selectionchange".split(" "));br("onSelect","focusout contextmenu dragend focusin keydown keyup mousedown mouseup selectionchange".split(" "));br("onBeforeInput",["compositionend","keypress","textInput","paste"]);br("onCompositionEnd","compositionend focusout keydown keypress keyup mousedown".split(" "));br("onCompositionStart","compositionstart focusout keydown keypress keyup mousedown".split(" "));br("onCompositionUpdate","compositionupdate focusout keydown keypress keyup mousedown".split(" "));var Ti="abort canplay canplaythrough durationchange emptied encrypted ended error loadeddata loadedmetadata loadstart pause play playing progress ratechange resize seeked seeking stalled suspend timeupdate volumechange waiting".split(" "),ry=new Set("cancel close invalid load scroll toggle".split(" ").concat(Ti));function Zd(e,t,n){var r=e.type||"unknown-event";e.currentTarget=n,t0(r,t,void 0,e),e.currentTarget=null}function cm(e,t){t=(t&4)!==0;for(var n=0;n<e.length;n++){var r=e[n],i=r.event;r=r.listeners;e:{var o=void 0;if(t)for(var a=r.length-1;0<=a;a--){var l=r[a],s=l.instance,u=l.currentTarget;if(l=l.listener,s!==o&&i.isPropagationStopped())break e;Zd(i,l,u),o=s}else for(a=0;a<r.length;a++){if(l=r[a],s=l.instance,u=l.currentTarget,l=l.listener,s!==o&&i.isPropagationStopped())break e;Zd(i,l,u),o=s}}}if(ja)throw e=iu,ja=!1,iu=null,e}function Pe(e,t){var n=t[hu];n===void 0&&(n=t[hu]=new Set);var r=e+"__bubble";n.has(r)||(dm(t,e,2,!1),n.add(r))}function ol(e,t,n){var r=0;t&&(r|=4),dm(n,e,r,t)}var Mo="_reactListening"+Math.random().toString(36).slice(2);function qi(e){if(!e[Mo]){e[Mo]=!0,vh.forEach(function(n){n!=="selectionchange"&&(ry.has(n)||ol(n,!1,e),ol(n,!0,e))});var t=e.nodeType===9?e:e.ownerDocument;t===null||t[Mo]||(t[Mo]=!0,ol("selectionchange",!1,t))}}function dm(e,t,n,r){switch(Qh(t)){case 1:var i=x0;break;case 4:i=v0;break;default:i=hc}n=i.bind(null,t,n,e),i=void 0,!ru||t!=="touchstart"&&t!=="touchmove"&&t!=="wheel"||(i=!0),r?i!==void 0?e.addEventListener(t,n,{capture:!0,passive:i}):e.addEventListener(t,n,!0):i!==void 0?e.addEventListener(t,n,{passive:i}):e.addEventListener(t,n,!1)}function al(e,t,n,r,i){var o=r;if(!(t&1)&&!(t&2)&&r!==null)e:for(;;){if(r===null)return;var a=r.tag;if(a===3||a===4){var l=r.stateNode.containerInfo;if(l===i||l.nodeType===8&&l.parentNode===i)break;if(a===4)for(a=r.return;a!==null;){var s=a.tag;if((s===3||s===4)&&(s=a.stateNode.containerInfo,s===i||s.nodeType===8&&s.parentNode===i))return;a=a.return}for(;l!==null;){if(a=lr(l),a===null)return;if(s=a.tag,s===5||s===6){r=o=a;continue e}l=l.parentNode}}r=r.return}Ih(function(){var u=o,p=cc(n),h=[];e:{var x=um.get(e);if(x!==void 0){var y=gc,m=e;switch(e){case"keypress":if(ra(n)===0)break e;case"keydown":case"keyup":y=R0;break;case"focusin":m="focus",y=Zs;break;case"focusout":m="blur",y=Zs;break;case"beforeblur":case"afterblur":y=Zs;break;case"click":if(n.button===2)break e;case"auxclick":case"dblclick":case"mousedown":case"mousemove":case"mouseup":case"mouseout":case"mouseover":case"contextmenu":y=Ud;break;case"drag":case"dragend":case"dragenter":case"dragexit":case"dragleave":case"dragover":case"dragstart":case"drop":y=b0;break;case"touchcancel":case"touchend":case"touchmove":case"touchstart":y=D0;break;case om:case am:case sm:y=j0;break;case lm:y=F0;break;case"scroll":y=y0;break;case"wheel":y=V0;break;case"copy":case"cut":case"paste":y=E0;break;case"gotpointercapture":case"lostpointercapture":case"pointercancel":case"pointerdown":case"pointermove":case"pointerout":case"pointerover":case"pointerup":y=Bd}var v=(t&4)!==0,b=!v&&e==="scroll",d=v?x!==null?x+"Capture":null:x;v=[];for(var f=u,g;f!==null;){g=f;var w=g.stateNode;if(g.tag===5&&w!==null&&(g=w,d!==null&&(w=$i(f,d),w!=null&&v.push(Gi(f,w,g)))),b)break;f=f.return}0<v.length&&(x=new y(x,m,null,n,p),h.push({event:x,listeners:v}))}}if(!(t&7)){e:{if(x=e==="mouseover"||e==="pointerover",y=e==="mouseout"||e==="pointerout",x&&n!==tu&&(m=n.relatedTarget||n.fromElement)&&(lr(m)||m[jn]))break e;if((y||x)&&(x=p.window===p?p:(x=p.ownerDocument)?x.defaultView||x.parentWindow:window,y?(m=n.relatedTarget||n.toElement,y=u,m=m?lr(m):null,m!==null&&(b=Sr(m),m!==b||m.tag!==5&&m.tag!==6)&&(m=null)):(y=null,m=u),y!==m)){if(v=Ud,w="onMouseLeave",d="onMouseEnter",f="mouse",(e==="pointerout"||e==="pointerover")&&(v=Bd,w="onPointerLeave",d="onPointerEnter",f="pointer"),b=y==null?x:Lr(y),g=m==null?x:Lr(m),x=new v(w,f+"leave",y,n,p),x.target=b,x.relatedTarget=g,w=null,lr(p)===u&&(v=new v(d,f+"enter",m,n,p),v.target=g,v.relatedTarget=b,w=v),b=w,y&&m)t:{for(v=y,d=m,f=0,g=v;g;g=jr(g))f++;for(g=0,w=d;w;w=jr(w))g++;for(;0<f-g;)v=jr(v),f--;for(;0<g-f;)d=jr(d),g--;for(;f--;){if(v===d||d!==null&&v===d.alternate)break t;v=jr(v),d=jr(d)}v=null}else v=null;y!==null&&ef(h,x,y,v,!1),m!==null&&b!==null&&ef(h,b,m,v,!0)}}e:{if(x=u?Lr(u):window,y=x.nodeName&&x.nodeName.toLowerCase(),y==="select"||y==="input"&&x.type==="file")var S=X0;else if(Yd(x))if(em)S=q0;else{S=K0;var T=Q0}else(y=x.nodeName)&&y.toLowerCase()==="input"&&(x.type==="checkbox"||x.type==="radio")&&(S=J0);if(S&&(S=S(e,u))){Zh(h,S,n,p);break e}T&&T(e,x,u),e==="focusout"&&(T=x._wrapperState)&&T.controlled&&x.type==="number"&&Jl(x,"number",x.value)}switch(T=u?Lr(u):window,e){case"focusin":(Yd(T)||T.contentEditable==="true")&&(Rr=T,lu=u,Di=null);break;case"focusout":Di=lu=Rr=null;break;case"mousedown":uu=!0;break;case"contextmenu":case"mouseup":case"dragend":uu=!1,qd(h,n,p);break;case"selectionchange":if(ey)break;case"keydown":case"keyup":qd(h,n,p)}var C;if(vc)e:{switch(e){case"compositionstart":var j="onCompositionStart";break e;case"compositionend":j="onCompositionEnd";break e;case"compositionupdate":j="onCompositionUpdate";break e}j=void 0}else Ar?qh(e,n)&&(j="onCompositionEnd"):e==="keydown"&&n.keyCode===229&&(j="onCompositionStart");j&&(Jh&&n.locale!=="ko"&&(Ar||j!=="onCompositionStart"?j==="onCompositionEnd"&&Ar&&(C=Kh()):(Bn=p,mc="value"in Bn?Bn.value:Bn.textContent,Ar=!0)),T=Ta(u,j),0<T.length&&(j=new Wd(j,e,null,n,p),h.push({event:j,listeners:T}),C?j.data=C:(C=Gh(n),C!==null&&(j.data=C)))),(C=W0?B0(e,n):H0(e,n))&&(u=Ta(u,"onBeforeInput"),0<u.length&&(p=new Wd("onBeforeInput","beforeinput",null,n,p),h.push({event:p,listeners:u}),p.data=C))}cm(h,t)})}function Gi(e,t,n){return{instance:e,listener:t,currentTarget:n}}function Ta(e,t){for(var n=t+"Capture",r=[];e!==null;){var i=e,o=i.stateNode;i.tag===5&&o!==null&&(i=o,o=$i(e,n),o!=null&&r.unshift(Gi(e,o,i)),o=$i(e,t),o!=null&&r.push(Gi(e,o,i))),e=e.return}return r}function jr(e){if(e===null)return null;do e=e.return;while(e&&e.tag!==5);return e||null}function ef(e,t,n,r,i){for(var o=t._reactName,a=[];n!==null&&n!==r;){var l=n,s=l.alternate,u=l.stateNode;if(s!==null&&s===r)break;l.tag===5&&u!==null&&(l=u,i?(s=$i(n,o),s!=null&&a.unshift(Gi(n,s,l))):i||(s=$i(n,o),s!=null&&a.push(Gi(n,s,l)))),n=n.return}a.length!==0&&e.push({event:t,listeners:a})}var iy=/\r\n?/g,oy=/\u0000|\uFFFD/g;function tf(e){return(typeof e=="string"?e:""+e).replace(iy,`
`).replace(oy,"")}function Ao(e,t,n){if(t=tf(t),tf(e)!==t&&n)throw Error(z(425))}function _a(){}var cu=null,du=null;function fu(e,t){return e==="textarea"||e==="noscript"||typeof t.children=="string"||typeof t.children=="number"||typeof t.dangerouslySetInnerHTML=="object"&&t.dangerouslySetInnerHTML!==null&&t.dangerouslySetInnerHTML.__html!=null}var pu=typeof setTimeout=="function"?setTimeout:void 0,ay=typeof clearTimeout=="function"?clearTimeout:void 0,nf=typeof Promise=="function"?Promise:void 0,sy=typeof queueMicrotask=="function"?queueMicrotask:typeof nf<"u"?function(e){return nf.resolve(null).then(e).catch(ly)}:pu;function ly(e){setTimeout(function(){throw e})}function sl(e,t){var n=t,r=0;do{var i=n.nextSibling;if(e.removeChild(n),i&&i.nodeType===8)if(n=i.data,n==="/$"){if(r===0){e.removeChild(i),Qi(t);return}r--}else n!=="$"&&n!=="$?"&&n!=="$!"||r++;n=i}while(n);Qi(t)}function Jn(e){for(;e!=null;e=e.nextSibling){var t=e.nodeType;if(t===1||t===3)break;if(t===8){if(t=e.data,t==="$"||t==="$!"||t==="$?")break;if(t==="/$")return null}}return e}function rf(e){e=e.previousSibling;for(var t=0;e;){if(e.nodeType===8){var n=e.data;if(n==="$"||n==="$!"||n==="$?"){if(t===0)return e;t--}else n==="/$"&&t++}e=e.previousSibling}return null}var li=Math.random().toString(36).slice(2),an="__reactFiber$"+li,Zi="__reactProps$"+li,jn="__reactContainer$"+li,hu="__reactEvents$"+li,uy="__reactListeners$"+li,cy="__reactHandles$"+li;function lr(e){var t=e[an];if(t)return t;for(var n=e.parentNode;n;){if(t=n[jn]||n[an]){if(n=t.alternate,t.child!==null||n!==null&&n.child!==null)for(e=rf(e);e!==null;){if(n=e[an])return n;e=rf(e)}return t}e=n,n=e.parentNode}return null}function ho(e){return e=e[an]||e[jn],!e||e.tag!==5&&e.tag!==6&&e.tag!==13&&e.tag!==3?null:e}function Lr(e){if(e.tag===5||e.tag===6)return e.stateNode;throw Error(z(33))}function ds(e){return e[Zi]||null}var mu=[],Dr=-1;function ir(e){return{current:e}}function Te(e){0>Dr||(e.current=mu[Dr],mu[Dr]=null,Dr--)}function Ee(e,t){Dr++,mu[Dr]=e.current,e.current=t}var nr={},st=ir(nr),xt=ir(!1),mr=nr;function qr(e,t){var n=e.type.contextTypes;if(!n)return nr;var r=e.stateNode;if(r&&r.__reactInternalMemoizedUnmaskedChildContext===t)return r.__reactInternalMemoizedMaskedChildContext;var i={},o;for(o in n)i[o]=t[o];return r&&(e=e.stateNode,e.__reactInternalMemoizedUnmaskedChildContext=t,e.__reactInternalMemoizedMaskedChildContext=i),i}function vt(e){return e=e.childContextTypes,e!=null}function Ma(){Te(xt),Te(st)}function of(e,t,n){if(st.current!==nr)throw Error(z(168));Ee(st,t),Ee(xt,n)}function fm(e,t,n){var r=e.stateNode;if(t=t.childContextTypes,typeof r.getChildContext!="function")return n;r=r.getChildContext();for(var i in r)if(!(i in t))throw Error(z(108,Qv(e)||"Unknown",i));return Ie({},n,r)}function Aa(e){return e=(e=e.stateNode)&&e.__reactInternalMemoizedMergedChildContext||nr,mr=st.current,Ee(st,e),Ee(xt,xt.current),!0}function af(e,t,n){var r=e.stateNode;if(!r)throw Error(z(169));n?(e=fm(e,t,mr),r.__reactInternalMemoizedMergedChildContext=e,Te(xt),Te(st),Ee(st,e)):Te(xt),Ee(xt,n)}var gn=null,fs=!1,ll=!1;function pm(e){gn===null?gn=[e]:gn.push(e)}function dy(e){fs=!0,pm(e)}function or(){if(!ll&&gn!==null){ll=!0;var e=0,t=we;try{var n=gn;for(we=1;e<n.length;e++){var r=n[e];do r=r(!0);while(r!==null)}gn=null,fs=!1}catch(i){throw gn!==null&&(gn=gn.slice(e+1)),Fh(dc,or),i}finally{we=t,ll=!1}}return null}var zr=[],Fr=0,Ra=null,Ia=0,Rt=[],It=0,gr=null,vn=1,yn="";function ar(e,t){zr[Fr++]=Ia,zr[Fr++]=Ra,Ra=e,Ia=t}function hm(e,t,n){Rt[It++]=vn,Rt[It++]=yn,Rt[It++]=gr,gr=e;var r=vn;e=yn;var i=32-Kt(r)-1;r&=~(1<<i),n+=1;var o=32-Kt(t)+i;if(30<o){var a=i-i%5;o=(r&(1<<a)-1).toString(32),r>>=a,i-=a,vn=1<<32-Kt(t)+i|n<<i|r,yn=o+e}else vn=1<<o|n<<i|r,yn=e}function wc(e){e.return!==null&&(ar(e,1),hm(e,1,0))}function bc(e){for(;e===Ra;)Ra=zr[--Fr],zr[Fr]=null,Ia=zr[--Fr],zr[Fr]=null;for(;e===gr;)gr=Rt[--It],Rt[It]=null,yn=Rt[--It],Rt[It]=null,vn=Rt[--It],Rt[It]=null}var kt=null,St=null,Me=!1,Xt=null;function mm(e,t){var n=Dt(5,null,null,0);n.elementType="DELETED",n.stateNode=t,n.return=e,t=e.deletions,t===null?(e.deletions=[n],e.flags|=16):t.push(n)}function sf(e,t){switch(e.tag){case 5:var n=e.type;return t=t.nodeType!==1||n.toLowerCase()!==t.nodeName.toLowerCase()?null:t,t!==null?(e.stateNode=t,kt=e,St=Jn(t.firstChild),!0):!1;case 6:return t=e.pendingProps===""||t.nodeType!==3?null:t,t!==null?(e.stateNode=t,kt=e,St=null,!0):!1;case 13:return t=t.nodeType!==8?null:t,t!==null?(n=gr!==null?{id:vn,overflow:yn}:null,e.memoizedState={dehydrated:t,treeContext:n,retryLane:1073741824},n=Dt(18,null,null,0),n.stateNode=t,n.return=e,e.child=n,kt=e,St=null,!0):!1;default:return!1}}function gu(e){return(e.mode&1)!==0&&(e.flags&128)===0}function xu(e){if(Me){var t=St;if(t){var n=t;if(!sf(e,t)){if(gu(e))throw Error(z(418));t=Jn(n.nextSibling);var r=kt;t&&sf(e,t)?mm(r,n):(e.flags=e.flags&-4097|2,Me=!1,kt=e)}}else{if(gu(e))throw Error(z(418));e.flags=e.flags&-4097|2,Me=!1,kt=e}}}function lf(e){for(e=e.return;e!==null&&e.tag!==5&&e.tag!==3&&e.tag!==13;)e=e.return;kt=e}function Ro(e){if(e!==kt)return!1;if(!Me)return lf(e),Me=!0,!1;var t;if((t=e.tag!==3)&&!(t=e.tag!==5)&&(t=e.type,t=t!=="head"&&t!=="body"&&!fu(e.type,e.memoizedProps)),t&&(t=St)){if(gu(e))throw gm(),Error(z(418));for(;t;)mm(e,t),t=Jn(t.nextSibling)}if(lf(e),e.tag===13){if(e=e.memoizedState,e=e!==null?e.dehydrated:null,!e)throw Error(z(317));e:{for(e=e.nextSibling,t=0;e;){if(e.nodeType===8){var n=e.data;if(n==="/$"){if(t===0){St=Jn(e.nextSibling);break e}t--}else n!=="$"&&n!=="$!"&&n!=="$?"||t++}e=e.nextSibling}St=null}}else St=kt?Jn(e.stateNode.nextSibling):null;return!0}function gm(){for(var e=St;e;)e=Jn(e.nextSibling)}function Gr(){St=kt=null,Me=!1}function Sc(e){Xt===null?Xt=[e]:Xt.push(e)}var fy=Cn.ReactCurrentBatchConfig;function Bt(e,t){if(e&&e.defaultProps){t=Ie({},t),e=e.defaultProps;for(var n in e)t[n]===void 0&&(t[n]=e[n]);return t}return t}var La=ir(null),Da=null,Nr=null,kc=null;function jc(){kc=Nr=Da=null}function Oc(e){var t=La.current;Te(La),e._currentValue=t}function vu(e,t,n){for(;e!==null;){var r=e.alternate;if((e.childLanes&t)!==t?(e.childLanes|=t,r!==null&&(r.childLanes|=t)):r!==null&&(r.childLanes&t)!==t&&(r.childLanes|=t),e===n)break;e=e.return}}function Xr(e,t){Da=e,kc=Nr=null,e=e.dependencies,e!==null&&e.firstContext!==null&&(e.lanes&t&&(gt=!0),e.firstContext=null)}function Vt(e){var t=e._currentValue;if(kc!==e)if(e={context:e,memoizedValue:t,next:null},Nr===null){if(Da===null)throw Error(z(308));Nr=e,Da.dependencies={lanes:0,firstContext:e}}else Nr=Nr.next=e;return t}var ur=null;function Ec(e){ur===null?ur=[e]:ur.push(e)}function xm(e,t,n,r){var i=t.interleaved;return i===null?(n.next=n,Ec(t)):(n.next=i.next,i.next=n),t.interleaved=n,On(e,r)}function On(e,t){e.lanes|=t;var n=e.alternate;for(n!==null&&(n.lanes|=t),n=e,e=e.return;e!==null;)e.childLanes|=t,n=e.alternate,n!==null&&(n.childLanes|=t),n=e,e=e.return;return n.tag===3?n.stateNode:null}var Vn=!1;function Cc(e){e.updateQueue={baseState:e.memoizedState,firstBaseUpdate:null,lastBaseUpdate:null,shared:{pending:null,interleaved:null,lanes:0},effects:null}}function vm(e,t){e=e.updateQueue,t.updateQueue===e&&(t.updateQueue={baseState:e.baseState,firstBaseUpdate:e.firstBaseUpdate,lastBaseUpdate:e.lastBaseUpdate,shared:e.shared,effects:e.effects})}function wn(e,t){return{eventTime:e,lane:t,tag:0,payload:null,callback:null,next:null}}function qn(e,t,n){var r=e.updateQueue;if(r===null)return null;if(r=r.shared,me&2){var i=r.pending;return i===null?t.next=t:(t.next=i.next,i.next=t),r.pending=t,On(e,n)}return i=r.interleaved,i===null?(t.next=t,Ec(r)):(t.next=i.next,i.next=t),r.interleaved=t,On(e,n)}function ia(e,t,n){if(t=t.updateQueue,t!==null&&(t=t.shared,(n&4194240)!==0)){var r=t.lanes;r&=e.pendingLanes,n|=r,t.lanes=n,fc(e,n)}}function uf(e,t){var n=e.updateQueue,r=e.alternate;if(r!==null&&(r=r.updateQueue,n===r)){var i=null,o=null;if(n=n.firstBaseUpdate,n!==null){do{var a={eventTime:n.eventTime,lane:n.lane,tag:n.tag,payload:n.payload,callback:n.callback,next:null};o===null?i=o=a:o=o.next=a,n=n.next}while(n!==null);o===null?i=o=t:o=o.next=t}else i=o=t;n={baseState:r.baseState,firstBaseUpdate:i,lastBaseUpdate:o,shared:r.shared,effects:r.effects},e.updateQueue=n;return}e=n.lastBaseUpdate,e===null?n.firstBaseUpdate=t:e.next=t,n.lastBaseUpdate=t}function za(e,t,n,r){var i=e.updateQueue;Vn=!1;var o=i.firstBaseUpdate,a=i.lastBaseUpdate,l=i.shared.pending;if(l!==null){i.shared.pending=null;var s=l,u=s.next;s.next=null,a===null?o=u:a.next=u,a=s;var p=e.alternate;p!==null&&(p=p.updateQueue,l=p.lastBaseUpdate,l!==a&&(l===null?p.firstBaseUpdate=u:l.next=u,p.lastBaseUpdate=s))}if(o!==null){var h=i.baseState;a=0,p=u=s=null,l=o;do{var x=l.lane,y=l.eventTime;if((r&x)===x){p!==null&&(p=p.next={eventTime:y,lane:0,tag:l.tag,payload:l.payload,callback:l.callback,next:null});e:{var m=e,v=l;switch(x=t,y=n,v.tag){case 1:if(m=v.payload,typeof m=="function"){h=m.call(y,h,x);break e}h=m;break e;case 3:m.flags=m.flags&-65537|128;case 0:if(m=v.payload,x=typeof m=="function"?m.call(y,h,x):m,x==null)break e;h=Ie({},h,x);break e;case 2:Vn=!0}}l.callback!==null&&l.lane!==0&&(e.flags|=64,x=i.effects,x===null?i.effects=[l]:x.push(l))}else y={eventTime:y,lane:x,tag:l.tag,payload:l.payload,callback:l.callback,next:null},p===null?(u=p=y,s=h):p=p.next=y,a|=x;if(l=l.next,l===null){if(l=i.shared.pending,l===null)break;x=l,l=x.next,x.next=null,i.lastBaseUpdate=x,i.shared.pending=null}}while(!0);if(p===null&&(s=h),i.baseState=s,i.firstBaseUpdate=u,i.lastBaseUpdate=p,t=i.shared.interleaved,t!==null){i=t;do a|=i.lane,i=i.next;while(i!==t)}else o===null&&(i.shared.lanes=0);vr|=a,e.lanes=a,e.memoizedState=h}}function cf(e,t,n){if(e=t.effects,t.effects=null,e!==null)for(t=0;t<e.length;t++){var r=e[t],i=r.callback;if(i!==null){if(r.callback=null,r=n,typeof i!="function")throw Error(z(191,i));i.call(r)}}}var ym=new xh.Component().refs;function yu(e,t,n,r){t=e.memoizedState,n=n(r,t),n=n==null?t:Ie({},t,n),e.memoizedState=n,e.lanes===0&&(e.updateQueue.baseState=n)}var ps={isMounted:function(e){return(e=e._reactInternals)?Sr(e)===e:!1},enqueueSetState:function(e,t,n){e=e._reactInternals;var r=dt(),i=Zn(e),o=wn(r,i);o.payload=t,n!=null&&(o.callback=n),t=qn(e,o,i),t!==null&&(Jt(t,e,i,r),ia(t,e,i))},enqueueReplaceState:function(e,t,n){e=e._reactInternals;var r=dt(),i=Zn(e),o=wn(r,i);o.tag=1,o.payload=t,n!=null&&(o.callback=n),t=qn(e,o,i),t!==null&&(Jt(t,e,i,r),ia(t,e,i))},enqueueForceUpdate:function(e,t){e=e._reactInternals;var n=dt(),r=Zn(e),i=wn(n,r);i.tag=2,t!=null&&(i.callback=t),t=qn(e,i,r),t!==null&&(Jt(t,e,r,n),ia(t,e,r))}};function df(e,t,n,r,i,o,a){return e=e.stateNode,typeof e.shouldComponentUpdate=="function"?e.shouldComponentUpdate(r,o,a):t.prototype&&t.prototype.isPureReactComponent?!Ji(n,r)||!Ji(i,o):!0}function wm(e,t,n){var r=!1,i=nr,o=t.contextType;return typeof o=="object"&&o!==null?o=Vt(o):(i=vt(t)?mr:st.current,r=t.contextTypes,o=(r=r!=null)?qr(e,i):nr),t=new t(n,o),e.memoizedState=t.state!==null&&t.state!==void 0?t.state:null,t.updater=ps,e.stateNode=t,t._reactInternals=e,r&&(e=e.stateNode,e.__reactInternalMemoizedUnmaskedChildContext=i,e.__reactInternalMemoizedMaskedChildContext=o),t}function ff(e,t,n,r){e=t.state,typeof t.componentWillReceiveProps=="function"&&t.componentWillReceiveProps(n,r),typeof t.UNSAFE_componentWillReceiveProps=="function"&&t.UNSAFE_componentWillReceiveProps(n,r),t.state!==e&&ps.enqueueReplaceState(t,t.state,null)}function wu(e,t,n,r){var i=e.stateNode;i.props=n,i.state=e.memoizedState,i.refs=ym,Cc(e);var o=t.contextType;typeof o=="object"&&o!==null?i.context=Vt(o):(o=vt(t)?mr:st.current,i.context=qr(e,o)),i.state=e.memoizedState,o=t.getDerivedStateFromProps,typeof o=="function"&&(yu(e,t,o,n),i.state=e.memoizedState),typeof t.getDerivedStateFromProps=="function"||typeof i.getSnapshotBeforeUpdate=="function"||typeof i.UNSAFE_componentWillMount!="function"&&typeof i.componentWillMount!="function"||(t=i.state,typeof i.componentWillMount=="function"&&i.componentWillMount(),typeof i.UNSAFE_componentWillMount=="function"&&i.UNSAFE_componentWillMount(),t!==i.state&&ps.enqueueReplaceState(i,i.state,null),za(e,n,i,r),i.state=e.memoizedState),typeof i.componentDidMount=="function"&&(e.flags|=4194308)}function gi(e,t,n){if(e=n.ref,e!==null&&typeof e!="function"&&typeof e!="object"){if(n._owner){if(n=n._owner,n){if(n.tag!==1)throw Error(z(309));var r=n.stateNode}if(!r)throw Error(z(147,e));var i=r,o=""+e;return t!==null&&t.ref!==null&&typeof t.ref=="function"&&t.ref._stringRef===o?t.ref:(t=function(a){var l=i.refs;l===ym&&(l=i.refs={}),a===null?delete l[o]:l[o]=a},t._stringRef=o,t)}if(typeof e!="string")throw Error(z(284));if(!n._owner)throw Error(z(290,e))}return e}function Io(e,t){throw e=Object.prototype.toString.call(t),Error(z(31,e==="[object Object]"?"object with keys {"+Object.keys(t).join(", ")+"}":e))}function pf(e){var t=e._init;return t(e._payload)}function bm(e){function t(d,f){if(e){var g=d.deletions;g===null?(d.deletions=[f],d.flags|=16):g.push(f)}}function n(d,f){if(!e)return null;for(;f!==null;)t(d,f),f=f.sibling;return null}function r(d,f){for(d=new Map;f!==null;)f.key!==null?d.set(f.key,f):d.set(f.index,f),f=f.sibling;return d}function i(d,f){return d=er(d,f),d.index=0,d.sibling=null,d}function o(d,f,g){return d.index=g,e?(g=d.alternate,g!==null?(g=g.index,g<f?(d.flags|=2,f):g):(d.flags|=2,f)):(d.flags|=1048576,f)}function a(d){return e&&d.alternate===null&&(d.flags|=2),d}function l(d,f,g,w){return f===null||f.tag!==6?(f=ml(g,d.mode,w),f.return=d,f):(f=i(f,g),f.return=d,f)}function s(d,f,g,w){var S=g.type;return S===Mr?p(d,f,g.props.children,w,g.key):f!==null&&(f.elementType===S||typeof S=="object"&&S!==null&&S.$$typeof===Nn&&pf(S)===f.type)?(w=i(f,g.props),w.ref=gi(d,f,g),w.return=d,w):(w=ca(g.type,g.key,g.props,null,d.mode,w),w.ref=gi(d,f,g),w.return=d,w)}function u(d,f,g,w){return f===null||f.tag!==4||f.stateNode.containerInfo!==g.containerInfo||f.stateNode.implementation!==g.implementation?(f=gl(g,d.mode,w),f.return=d,f):(f=i(f,g.children||[]),f.return=d,f)}function p(d,f,g,w,S){return f===null||f.tag!==7?(f=pr(g,d.mode,w,S),f.return=d,f):(f=i(f,g),f.return=d,f)}function h(d,f,g){if(typeof f=="string"&&f!==""||typeof f=="number")return f=ml(""+f,d.mode,g),f.return=d,f;if(typeof f=="object"&&f!==null){switch(f.$$typeof){case ko:return g=ca(f.type,f.key,f.props,null,d.mode,g),g.ref=gi(d,null,f),g.return=d,g;case _r:return f=gl(f,d.mode,g),f.return=d,f;case Nn:var w=f._init;return h(d,w(f._payload),g)}if(Ci(f)||di(f))return f=pr(f,d.mode,g,null),f.return=d,f;Io(d,f)}return null}function x(d,f,g,w){var S=f!==null?f.key:null;if(typeof g=="string"&&g!==""||typeof g=="number")return S!==null?null:l(d,f,""+g,w);if(typeof g=="object"&&g!==null){switch(g.$$typeof){case ko:return g.key===S?s(d,f,g,w):null;case _r:return g.key===S?u(d,f,g,w):null;case Nn:return S=g._init,x(d,f,S(g._payload),w)}if(Ci(g)||di(g))return S!==null?null:p(d,f,g,w,null);Io(d,g)}return null}function y(d,f,g,w,S){if(typeof w=="string"&&w!==""||typeof w=="number")return d=d.get(g)||null,l(f,d,""+w,S);if(typeof w=="object"&&w!==null){switch(w.$$typeof){case ko:return d=d.get(w.key===null?g:w.key)||null,s(f,d,w,S);case _r:return d=d.get(w.key===null?g:w.key)||null,u(f,d,w,S);case Nn:var T=w._init;return y(d,f,g,T(w._payload),S)}if(Ci(w)||di(w))return d=d.get(g)||null,p(f,d,w,S,null);Io(f,w)}return null}function m(d,f,g,w){for(var S=null,T=null,C=f,j=f=0,O=null;C!==null&&j<g.length;j++){C.index>j?(O=C,C=null):O=C.sibling;var _=x(d,C,g[j],w);if(_===null){C===null&&(C=O);break}e&&C&&_.alternate===null&&t(d,C),f=o(_,f,j),T===null?S=_:T.sibling=_,T=_,C=O}if(j===g.length)return n(d,C),Me&&ar(d,j),S;if(C===null){for(;j<g.length;j++)C=h(d,g[j],w),C!==null&&(f=o(C,f,j),T===null?S=C:T.sibling=C,T=C);return Me&&ar(d,j),S}for(C=r(d,C);j<g.length;j++)O=y(C,d,j,g[j],w),O!==null&&(e&&O.alternate!==null&&C.delete(O.key===null?j:O.key),f=o(O,f,j),T===null?S=O:T.sibling=O,T=O);return e&&C.forEach(function(M){return t(d,M)}),Me&&ar(d,j),S}function v(d,f,g,w){var S=di(g);if(typeof S!="function")throw Error(z(150));if(g=S.call(g),g==null)throw Error(z(151));for(var T=S=null,C=f,j=f=0,O=null,_=g.next();C!==null&&!_.done;j++,_=g.next()){C.index>j?(O=C,C=null):O=C.sibling;var M=x(d,C,_.value,w);if(M===null){C===null&&(C=O);break}e&&C&&M.alternate===null&&t(d,C),f=o(M,f,j),T===null?S=M:T.sibling=M,T=M,C=O}if(_.done)return n(d,C),Me&&ar(d,j),S;if(C===null){for(;!_.done;j++,_=g.next())_=h(d,_.value,w),_!==null&&(f=o(_,f,j),T===null?S=_:T.sibling=_,T=_);return Me&&ar(d,j),S}for(C=r(d,C);!_.done;j++,_=g.next())_=y(C,d,j,_.value,w),_!==null&&(e&&_.alternate!==null&&C.delete(_.key===null?j:_.key),f=o(_,f,j),T===null?S=_:T.sibling=_,T=_);return e&&C.forEach(function(R){return t(d,R)}),Me&&ar(d,j),S}function b(d,f,g,w){if(typeof g=="object"&&g!==null&&g.type===Mr&&g.key===null&&(g=g.props.children),typeof g=="object"&&g!==null){switch(g.$$typeof){case ko:e:{for(var S=g.key,T=f;T!==null;){if(T.key===S){if(S=g.type,S===Mr){if(T.tag===7){n(d,T.sibling),f=i(T,g.props.children),f.return=d,d=f;break e}}else if(T.elementType===S||typeof S=="object"&&S!==null&&S.$$typeof===Nn&&pf(S)===T.type){n(d,T.sibling),f=i(T,g.props),f.ref=gi(d,T,g),f.return=d,d=f;break e}n(d,T);break}else t(d,T);T=T.sibling}g.type===Mr?(f=pr(g.props.children,d.mode,w,g.key),f.return=d,d=f):(w=ca(g.type,g.key,g.props,null,d.mode,w),w.ref=gi(d,f,g),w.return=d,d=w)}return a(d);case _r:e:{for(T=g.key;f!==null;){if(f.key===T)if(f.tag===4&&f.stateNode.containerInfo===g.containerInfo&&f.stateNode.implementation===g.implementation){n(d,f.sibling),f=i(f,g.children||[]),f.return=d,d=f;break e}else{n(d,f);break}else t(d,f);f=f.sibling}f=gl(g,d.mode,w),f.return=d,d=f}return a(d);case Nn:return T=g._init,b(d,f,T(g._payload),w)}if(Ci(g))return m(d,f,g,w);if(di(g))return v(d,f,g,w);Io(d,g)}return typeof g=="string"&&g!==""||typeof g=="number"?(g=""+g,f!==null&&f.tag===6?(n(d,f.sibling),f=i(f,g),f.return=d,d=f):(n(d,f),f=ml(g,d.mode,w),f.return=d,d=f),a(d)):n(d,f)}return b}var Zr=bm(!0),Sm=bm(!1),mo={},cn=ir(mo),eo=ir(mo),to=ir(mo);function cr(e){if(e===mo)throw Error(z(174));return e}function Pc(e,t){switch(Ee(to,t),Ee(eo,e),Ee(cn,mo),e=t.nodeType,e){case 9:case 11:t=(t=t.documentElement)?t.namespaceURI:Gl(null,"");break;default:e=e===8?t.parentNode:t,t=e.namespaceURI||null,e=e.tagName,t=Gl(t,e)}Te(cn),Ee(cn,t)}function ei(){Te(cn),Te(eo),Te(to)}function km(e){cr(to.current);var t=cr(cn.current),n=Gl(t,e.type);t!==n&&(Ee(eo,e),Ee(cn,n))}function Tc(e){eo.current===e&&(Te(cn),Te(eo))}var Ae=ir(0);function Fa(e){for(var t=e;t!==null;){if(t.tag===13){var n=t.memoizedState;if(n!==null&&(n=n.dehydrated,n===null||n.data==="$?"||n.data==="$!"))return t}else if(t.tag===19&&t.memoizedProps.revealOrder!==void 0){if(t.flags&128)return t}else if(t.child!==null){t.child.return=t,t=t.child;continue}if(t===e)break;for(;t.sibling===null;){if(t.return===null||t.return===e)return null;t=t.return}t.sibling.return=t.return,t=t.sibling}return null}var ul=[];function _c(){for(var e=0;e<ul.length;e++)ul[e]._workInProgressVersionPrimary=null;ul.length=0}var oa=Cn.ReactCurrentDispatcher,cl=Cn.ReactCurrentBatchConfig,xr=0,Re=null,We=null,Xe=null,Na=!1,zi=!1,no=0,py=0;function nt(){throw Error(z(321))}function Mc(e,t){if(t===null)return!1;for(var n=0;n<t.length&&n<e.length;n++)if(!Gt(e[n],t[n]))return!1;return!0}function Ac(e,t,n,r,i,o){if(xr=o,Re=t,t.memoizedState=null,t.updateQueue=null,t.lanes=0,oa.current=e===null||e.memoizedState===null?xy:vy,e=n(r,i),zi){o=0;do{if(zi=!1,no=0,25<=o)throw Error(z(301));o+=1,Xe=We=null,t.updateQueue=null,oa.current=yy,e=n(r,i)}while(zi)}if(oa.current=Va,t=We!==null&&We.next!==null,xr=0,Xe=We=Re=null,Na=!1,t)throw Error(z(300));return e}function Rc(){var e=no!==0;return no=0,e}function nn(){var e={memoizedState:null,baseState:null,baseQueue:null,queue:null,next:null};return Xe===null?Re.memoizedState=Xe=e:Xe=Xe.next=e,Xe}function Ut(){if(We===null){var e=Re.alternate;e=e!==null?e.memoizedState:null}else e=We.next;var t=Xe===null?Re.memoizedState:Xe.next;if(t!==null)Xe=t,We=e;else{if(e===null)throw Error(z(310));We=e,e={memoizedState:We.memoizedState,baseState:We.baseState,baseQueue:We.baseQueue,queue:We.queue,next:null},Xe===null?Re.memoizedState=Xe=e:Xe=Xe.next=e}return Xe}function ro(e,t){return typeof t=="function"?t(e):t}function dl(e){var t=Ut(),n=t.queue;if(n===null)throw Error(z(311));n.lastRenderedReducer=e;var r=We,i=r.baseQueue,o=n.pending;if(o!==null){if(i!==null){var a=i.next;i.next=o.next,o.next=a}r.baseQueue=i=o,n.pending=null}if(i!==null){o=i.next,r=r.baseState;var l=a=null,s=null,u=o;do{var p=u.lane;if((xr&p)===p)s!==null&&(s=s.next={lane:0,action:u.action,hasEagerState:u.hasEagerState,eagerState:u.eagerState,next:null}),r=u.hasEagerState?u.eagerState:e(r,u.action);else{var h={lane:p,action:u.action,hasEagerState:u.hasEagerState,eagerState:u.eagerState,next:null};s===null?(l=s=h,a=r):s=s.next=h,Re.lanes|=p,vr|=p}u=u.next}while(u!==null&&u!==o);s===null?a=r:s.next=l,Gt(r,t.memoizedState)||(gt=!0),t.memoizedState=r,t.baseState=a,t.baseQueue=s,n.lastRenderedState=r}if(e=n.interleaved,e!==null){i=e;do o=i.lane,Re.lanes|=o,vr|=o,i=i.next;while(i!==e)}else i===null&&(n.lanes=0);return[t.memoizedState,n.dispatch]}function fl(e){var t=Ut(),n=t.queue;if(n===null)throw Error(z(311));n.lastRenderedReducer=e;var r=n.dispatch,i=n.pending,o=t.memoizedState;if(i!==null){n.pending=null;var a=i=i.next;do o=e(o,a.action),a=a.next;while(a!==i);Gt(o,t.memoizedState)||(gt=!0),t.memoizedState=o,t.baseQueue===null&&(t.baseState=o),n.lastRenderedState=o}return[o,r]}function jm(){}function Om(e,t){var n=Re,r=Ut(),i=t(),o=!Gt(r.memoizedState,i);if(o&&(r.memoizedState=i,gt=!0),r=r.queue,Ic(Pm.bind(null,n,r,e),[e]),r.getSnapshot!==t||o||Xe!==null&&Xe.memoizedState.tag&1){if(n.flags|=2048,io(9,Cm.bind(null,n,r,i,t),void 0,null),Qe===null)throw Error(z(349));xr&30||Em(n,t,i)}return i}function Em(e,t,n){e.flags|=16384,e={getSnapshot:t,value:n},t=Re.updateQueue,t===null?(t={lastEffect:null,stores:null},Re.updateQueue=t,t.stores=[e]):(n=t.stores,n===null?t.stores=[e]:n.push(e))}function Cm(e,t,n,r){t.value=n,t.getSnapshot=r,Tm(t)&&_m(e)}function Pm(e,t,n){return n(function(){Tm(t)&&_m(e)})}function Tm(e){var t=e.getSnapshot;e=e.value;try{var n=t();return!Gt(e,n)}catch{return!0}}function _m(e){var t=On(e,1);t!==null&&Jt(t,e,1,-1)}function hf(e){var t=nn();return typeof e=="function"&&(e=e()),t.memoizedState=t.baseState=e,e={pending:null,interleaved:null,lanes:0,dispatch:null,lastRenderedReducer:ro,lastRenderedState:e},t.queue=e,e=e.dispatch=gy.bind(null,Re,e),[t.memoizedState,e]}function io(e,t,n,r){return e={tag:e,create:t,destroy:n,deps:r,next:null},t=Re.updateQueue,t===null?(t={lastEffect:null,stores:null},Re.updateQueue=t,t.lastEffect=e.next=e):(n=t.lastEffect,n===null?t.lastEffect=e.next=e:(r=n.next,n.next=e,e.next=r,t.lastEffect=e)),e}function Mm(){return Ut().memoizedState}function aa(e,t,n,r){var i=nn();Re.flags|=e,i.memoizedState=io(1|t,n,void 0,r===void 0?null:r)}function hs(e,t,n,r){var i=Ut();r=r===void 0?null:r;var o=void 0;if(We!==null){var a=We.memoizedState;if(o=a.destroy,r!==null&&Mc(r,a.deps)){i.memoizedState=io(t,n,o,r);return}}Re.flags|=e,i.memoizedState=io(1|t,n,o,r)}function mf(e,t){return aa(8390656,8,e,t)}function Ic(e,t){return hs(2048,8,e,t)}function Am(e,t){return hs(4,2,e,t)}function Rm(e,t){return hs(4,4,e,t)}function Im(e,t){if(typeof t=="function")return e=e(),t(e),function(){t(null)};if(t!=null)return e=e(),t.current=e,function(){t.current=null}}function Lm(e,t,n){return n=n!=null?n.concat([e]):null,hs(4,4,Im.bind(null,t,e),n)}function Lc(){}function Dm(e,t){var n=Ut();t=t===void 0?null:t;var r=n.memoizedState;return r!==null&&t!==null&&Mc(t,r[1])?r[0]:(n.memoizedState=[e,t],e)}function zm(e,t){var n=Ut();t=t===void 0?null:t;var r=n.memoizedState;return r!==null&&t!==null&&Mc(t,r[1])?r[0]:(e=e(),n.memoizedState=[e,t],e)}function Fm(e,t,n){return xr&21?(Gt(n,t)||(n=Uh(),Re.lanes|=n,vr|=n,e.baseState=!0),t):(e.baseState&&(e.baseState=!1,gt=!0),e.memoizedState=n)}function hy(e,t){var n=we;we=n!==0&&4>n?n:4,e(!0);var r=cl.transition;cl.transition={};try{e(!1),t()}finally{we=n,cl.transition=r}}function Nm(){return Ut().memoizedState}function my(e,t,n){var r=Zn(e);if(n={lane:r,action:n,hasEagerState:!1,eagerState:null,next:null},Vm(e))Um(t,n);else if(n=xm(e,t,n,r),n!==null){var i=dt();Jt(n,e,r,i),Wm(n,t,r)}}function gy(e,t,n){var r=Zn(e),i={lane:r,action:n,hasEagerState:!1,eagerState:null,next:null};if(Vm(e))Um(t,i);else{var o=e.alternate;if(e.lanes===0&&(o===null||o.lanes===0)&&(o=t.lastRenderedReducer,o!==null))try{var a=t.lastRenderedState,l=o(a,n);if(i.hasEagerState=!0,i.eagerState=l,Gt(l,a)){var s=t.interleaved;s===null?(i.next=i,Ec(t)):(i.next=s.next,s.next=i),t.interleaved=i;return}}catch{}finally{}n=xm(e,t,i,r),n!==null&&(i=dt(),Jt(n,e,r,i),Wm(n,t,r))}}function Vm(e){var t=e.alternate;return e===Re||t!==null&&t===Re}function Um(e,t){zi=Na=!0;var n=e.pending;n===null?t.next=t:(t.next=n.next,n.next=t),e.pending=t}function Wm(e,t,n){if(n&4194240){var r=t.lanes;r&=e.pendingLanes,n|=r,t.lanes=n,fc(e,n)}}var Va={readContext:Vt,useCallback:nt,useContext:nt,useEffect:nt,useImperativeHandle:nt,useInsertionEffect:nt,useLayoutEffect:nt,useMemo:nt,useReducer:nt,useRef:nt,useState:nt,useDebugValue:nt,useDeferredValue:nt,useTransition:nt,useMutableSource:nt,useSyncExternalStore:nt,useId:nt,unstable_isNewReconciler:!1},xy={readContext:Vt,useCallback:function(e,t){return nn().memoizedState=[e,t===void 0?null:t],e},useContext:Vt,useEffect:mf,useImperativeHandle:function(e,t,n){return n=n!=null?n.concat([e]):null,aa(4194308,4,Im.bind(null,t,e),n)},useLayoutEffect:function(e,t){return aa(4194308,4,e,t)},useInsertionEffect:function(e,t){return aa(4,2,e,t)},useMemo:function(e,t){var n=nn();return t=t===void 0?null:t,e=e(),n.memoizedState=[e,t],e},useReducer:function(e,t,n){var r=nn();return t=n!==void 0?n(t):t,r.memoizedState=r.baseState=t,e={pending:null,interleaved:null,lanes:0,dispatch:null,lastRenderedReducer:e,lastRenderedState:t},r.queue=e,e=e.dispatch=my.bind(null,Re,e),[r.memoizedState,e]},useRef:function(e){var t=nn();return e={current:e},t.memoizedState=e},useState:hf,useDebugValue:Lc,useDeferredValue:function(e){return nn().memoizedState=e},useTransition:function(){var e=hf(!1),t=e[0];return e=hy.bind(null,e[1]),nn().memoizedState=e,[t,e]},useMutableSource:function(){},useSyncExternalStore:function(e,t,n){var r=Re,i=nn();if(Me){if(n===void 0)throw Error(z(407));n=n()}else{if(n=t(),Qe===null)throw Error(z(349));xr&30||Em(r,t,n)}i.memoizedState=n;var o={value:n,getSnapshot:t};return i.queue=o,mf(Pm.bind(null,r,o,e),[e]),r.flags|=2048,io(9,Cm.bind(null,r,o,n,t),void 0,null),n},useId:function(){var e=nn(),t=Qe.identifierPrefix;if(Me){var n=yn,r=vn;n=(r&~(1<<32-Kt(r)-1)).toString(32)+n,t=":"+t+"R"+n,n=no++,0<n&&(t+="H"+n.toString(32)),t+=":"}else n=py++,t=":"+t+"r"+n.toString(32)+":";return e.memoizedState=t},unstable_isNewReconciler:!1},vy={readContext:Vt,useCallback:Dm,useContext:Vt,useEffect:Ic,useImperativeHandle:Lm,useInsertionEffect:Am,useLayoutEffect:Rm,useMemo:zm,useReducer:dl,useRef:Mm,useState:function(){return dl(ro)},useDebugValue:Lc,useDeferredValue:function(e){var t=Ut();return Fm(t,We.memoizedState,e)},useTransition:function(){var e=dl(ro)[0],t=Ut().memoizedState;return[e,t]},useMutableSource:jm,useSyncExternalStore:Om,useId:Nm,unstable_isNewReconciler:!1},yy={readContext:Vt,useCallback:Dm,useContext:Vt,useEffect:Ic,useImperativeHandle:Lm,useInsertionEffect:Am,useLayoutEffect:Rm,useMemo:zm,useReducer:fl,useRef:Mm,useState:function(){return fl(ro)},useDebugValue:Lc,useDeferredValue:function(e){var t=Ut();return We===null?t.memoizedState=e:Fm(t,We.memoizedState,e)},useTransition:function(){var e=fl(ro)[0],t=Ut().memoizedState;return[e,t]},useMutableSource:jm,useSyncExternalStore:Om,useId:Nm,unstable_isNewReconciler:!1};function ti(e,t){try{var n="",r=t;do n+=Xv(r),r=r.return;while(r);var i=n}catch(o){i=`
Error generating stack: `+o.message+`
`+o.stack}return{value:e,source:t,stack:i,digest:null}}function pl(e,t,n){return{value:e,source:null,stack:n??null,digest:t??null}}function bu(e,t){try{console.error(t.value)}catch(n){setTimeout(function(){throw n})}}var wy=typeof WeakMap=="function"?WeakMap:Map;function Bm(e,t,n){n=wn(-1,n),n.tag=3,n.payload={element:null};var r=t.value;return n.callback=function(){Wa||(Wa=!0,Mu=r),bu(e,t)},n}function Hm(e,t,n){n=wn(-1,n),n.tag=3;var r=e.type.getDerivedStateFromError;if(typeof r=="function"){var i=t.value;n.payload=function(){return r(i)},n.callback=function(){bu(e,t)}}var o=e.stateNode;return o!==null&&typeof o.componentDidCatch=="function"&&(n.callback=function(){bu(e,t),typeof r!="function"&&(Gn===null?Gn=new Set([this]):Gn.add(this));var a=t.stack;this.componentDidCatch(t.value,{componentStack:a!==null?a:""})}),n}function gf(e,t,n){var r=e.pingCache;if(r===null){r=e.pingCache=new wy;var i=new Set;r.set(t,i)}else i=r.get(t),i===void 0&&(i=new Set,r.set(t,i));i.has(n)||(i.add(n),e=Iy.bind(null,e,t,n),t.then(e,e))}function xf(e){do{var t;if((t=e.tag===13)&&(t=e.memoizedState,t=t!==null?t.dehydrated!==null:!0),t)return e;e=e.return}while(e!==null);return null}function vf(e,t,n,r,i){return e.mode&1?(e.flags|=65536,e.lanes=i,e):(e===t?e.flags|=65536:(e.flags|=128,n.flags|=131072,n.flags&=-52805,n.tag===1&&(n.alternate===null?n.tag=17:(t=wn(-1,1),t.tag=2,qn(n,t,1))),n.lanes|=1),e)}var by=Cn.ReactCurrentOwner,gt=!1;function ut(e,t,n,r){t.child=e===null?Sm(t,null,n,r):Zr(t,e.child,n,r)}function yf(e,t,n,r,i){n=n.render;var o=t.ref;return Xr(t,i),r=Ac(e,t,n,r,o,i),n=Rc(),e!==null&&!gt?(t.updateQueue=e.updateQueue,t.flags&=-2053,e.lanes&=~i,En(e,t,i)):(Me&&n&&wc(t),t.flags|=1,ut(e,t,r,i),t.child)}function wf(e,t,n,r,i){if(e===null){var o=n.type;return typeof o=="function"&&!Bc(o)&&o.defaultProps===void 0&&n.compare===null&&n.defaultProps===void 0?(t.tag=15,t.type=o,$m(e,t,o,r,i)):(e=ca(n.type,null,r,t,t.mode,i),e.ref=t.ref,e.return=t,t.child=e)}if(o=e.child,!(e.lanes&i)){var a=o.memoizedProps;if(n=n.compare,n=n!==null?n:Ji,n(a,r)&&e.ref===t.ref)return En(e,t,i)}return t.flags|=1,e=er(o,r),e.ref=t.ref,e.return=t,t.child=e}function $m(e,t,n,r,i){if(e!==null){var o=e.memoizedProps;if(Ji(o,r)&&e.ref===t.ref)if(gt=!1,t.pendingProps=r=o,(e.lanes&i)!==0)e.flags&131072&&(gt=!0);else return t.lanes=e.lanes,En(e,t,i)}return Su(e,t,n,r,i)}function Ym(e,t,n){var r=t.pendingProps,i=r.children,o=e!==null?e.memoizedState:null;if(r.mode==="hidden")if(!(t.mode&1))t.memoizedState={baseLanes:0,cachePool:null,transitions:null},Ee(Ur,bt),bt|=n;else{if(!(n&1073741824))return e=o!==null?o.baseLanes|n:n,t.lanes=t.childLanes=1073741824,t.memoizedState={baseLanes:e,cachePool:null,transitions:null},t.updateQueue=null,Ee(Ur,bt),bt|=e,null;t.memoizedState={baseLanes:0,cachePool:null,transitions:null},r=o!==null?o.baseLanes:n,Ee(Ur,bt),bt|=r}else o!==null?(r=o.baseLanes|n,t.memoizedState=null):r=n,Ee(Ur,bt),bt|=r;return ut(e,t,i,n),t.child}function Xm(e,t){var n=t.ref;(e===null&&n!==null||e!==null&&e.ref!==n)&&(t.flags|=512,t.flags|=2097152)}function Su(e,t,n,r,i){var o=vt(n)?mr:st.current;return o=qr(t,o),Xr(t,i),n=Ac(e,t,n,r,o,i),r=Rc(),e!==null&&!gt?(t.updateQueue=e.updateQueue,t.flags&=-2053,e.lanes&=~i,En(e,t,i)):(Me&&r&&wc(t),t.flags|=1,ut(e,t,n,i),t.child)}function bf(e,t,n,r,i){if(vt(n)){var o=!0;Aa(t)}else o=!1;if(Xr(t,i),t.stateNode===null)sa(e,t),wm(t,n,r),wu(t,n,r,i),r=!0;else if(e===null){var a=t.stateNode,l=t.memoizedProps;a.props=l;var s=a.context,u=n.contextType;typeof u=="object"&&u!==null?u=Vt(u):(u=vt(n)?mr:st.current,u=qr(t,u));var p=n.getDerivedStateFromProps,h=typeof p=="function"||typeof a.getSnapshotBeforeUpdate=="function";h||typeof a.UNSAFE_componentWillReceiveProps!="function"&&typeof a.componentWillReceiveProps!="function"||(l!==r||s!==u)&&ff(t,a,r,u),Vn=!1;var x=t.memoizedState;a.state=x,za(t,r,a,i),s=t.memoizedState,l!==r||x!==s||xt.current||Vn?(typeof p=="function"&&(yu(t,n,p,r),s=t.memoizedState),(l=Vn||df(t,n,l,r,x,s,u))?(h||typeof a.UNSAFE_componentWillMount!="function"&&typeof a.componentWillMount!="function"||(typeof a.componentWillMount=="function"&&a.componentWillMount(),typeof a.UNSAFE_componentWillMount=="function"&&a.UNSAFE_componentWillMount()),typeof a.componentDidMount=="function"&&(t.flags|=4194308)):(typeof a.componentDidMount=="function"&&(t.flags|=4194308),t.memoizedProps=r,t.memoizedState=s),a.props=r,a.state=s,a.context=u,r=l):(typeof a.componentDidMount=="function"&&(t.flags|=4194308),r=!1)}else{a=t.stateNode,vm(e,t),l=t.memoizedProps,u=t.type===t.elementType?l:Bt(t.type,l),a.props=u,h=t.pendingProps,x=a.context,s=n.contextType,typeof s=="object"&&s!==null?s=Vt(s):(s=vt(n)?mr:st.current,s=qr(t,s));var y=n.getDerivedStateFromProps;(p=typeof y=="function"||typeof a.getSnapshotBeforeUpdate=="function")||typeof a.UNSAFE_componentWillReceiveProps!="function"&&typeof a.componentWillReceiveProps!="function"||(l!==h||x!==s)&&ff(t,a,r,s),Vn=!1,x=t.memoizedState,a.state=x,za(t,r,a,i);var m=t.memoizedState;l!==h||x!==m||xt.current||Vn?(typeof y=="function"&&(yu(t,n,y,r),m=t.memoizedState),(u=Vn||df(t,n,u,r,x,m,s)||!1)?(p||typeof a.UNSAFE_componentWillUpdate!="function"&&typeof a.componentWillUpdate!="function"||(typeof a.componentWillUpdate=="function"&&a.componentWillUpdate(r,m,s),typeof a.UNSAFE_componentWillUpdate=="function"&&a.UNSAFE_componentWillUpdate(r,m,s)),typeof a.componentDidUpdate=="function"&&(t.flags|=4),typeof a.getSnapshotBeforeUpdate=="function"&&(t.flags|=1024)):(typeof a.componentDidUpdate!="function"||l===e.memoizedProps&&x===e.memoizedState||(t.flags|=4),typeof a.getSnapshotBeforeUpdate!="function"||l===e.memoizedProps&&x===e.memoizedState||(t.flags|=1024),t.memoizedProps=r,t.memoizedState=m),a.props=r,a.state=m,a.context=s,r=u):(typeof a.componentDidUpdate!="function"||l===e.memoizedProps&&x===e.memoizedState||(t.flags|=4),typeof a.getSnapshotBeforeUpdate!="function"||l===e.memoizedProps&&x===e.memoizedState||(t.flags|=1024),r=!1)}return ku(e,t,n,r,o,i)}function ku(e,t,n,r,i,o){Xm(e,t);var a=(t.flags&128)!==0;if(!r&&!a)return i&&af(t,n,!1),En(e,t,o);r=t.stateNode,by.current=t;var l=a&&typeof n.getDerivedStateFromError!="function"?null:r.render();return t.flags|=1,e!==null&&a?(t.child=Zr(t,e.child,null,o),t.child=Zr(t,null,l,o)):ut(e,t,l,o),t.memoizedState=r.state,i&&af(t,n,!0),t.child}function Qm(e){var t=e.stateNode;t.pendingContext?of(e,t.pendingContext,t.pendingContext!==t.context):t.context&&of(e,t.context,!1),Pc(e,t.containerInfo)}function Sf(e,t,n,r,i){return Gr(),Sc(i),t.flags|=256,ut(e,t,n,r),t.child}var ju={dehydrated:null,treeContext:null,retryLane:0};function Ou(e){return{baseLanes:e,cachePool:null,transitions:null}}function Km(e,t,n){var r=t.pendingProps,i=Ae.current,o=!1,a=(t.flags&128)!==0,l;if((l=a)||(l=e!==null&&e.memoizedState===null?!1:(i&2)!==0),l?(o=!0,t.flags&=-129):(e===null||e.memoizedState!==null)&&(i|=1),Ee(Ae,i&1),e===null)return xu(t),e=t.memoizedState,e!==null&&(e=e.dehydrated,e!==null)?(t.mode&1?e.data==="$!"?t.lanes=8:t.lanes=1073741824:t.lanes=1,null):(a=r.children,e=r.fallback,o?(r=t.mode,o=t.child,a={mode:"hidden",children:a},!(r&1)&&o!==null?(o.childLanes=0,o.pendingProps=a):o=xs(a,r,0,null),e=pr(e,r,n,null),o.return=t,e.return=t,o.sibling=e,t.child=o,t.child.memoizedState=Ou(n),t.memoizedState=ju,e):Dc(t,a));if(i=e.memoizedState,i!==null&&(l=i.dehydrated,l!==null))return Sy(e,t,a,r,l,i,n);if(o){o=r.fallback,a=t.mode,i=e.child,l=i.sibling;var s={mode:"hidden",children:r.children};return!(a&1)&&t.child!==i?(r=t.child,r.childLanes=0,r.pendingProps=s,t.deletions=null):(r=er(i,s),r.subtreeFlags=i.subtreeFlags&14680064),l!==null?o=er(l,o):(o=pr(o,a,n,null),o.flags|=2),o.return=t,r.return=t,r.sibling=o,t.child=r,r=o,o=t.child,a=e.child.memoizedState,a=a===null?Ou(n):{baseLanes:a.baseLanes|n,cachePool:null,transitions:a.transitions},o.memoizedState=a,o.childLanes=e.childLanes&~n,t.memoizedState=ju,r}return o=e.child,e=o.sibling,r=er(o,{mode:"visible",children:r.children}),!(t.mode&1)&&(r.lanes=n),r.return=t,r.sibling=null,e!==null&&(n=t.deletions,n===null?(t.deletions=[e],t.flags|=16):n.push(e)),t.child=r,t.memoizedState=null,r}function Dc(e,t){return t=xs({mode:"visible",children:t},e.mode,0,null),t.return=e,e.child=t}function Lo(e,t,n,r){return r!==null&&Sc(r),Zr(t,e.child,null,n),e=Dc(t,t.pendingProps.children),e.flags|=2,t.memoizedState=null,e}function Sy(e,t,n,r,i,o,a){if(n)return t.flags&256?(t.flags&=-257,r=pl(Error(z(422))),Lo(e,t,a,r)):t.memoizedState!==null?(t.child=e.child,t.flags|=128,null):(o=r.fallback,i=t.mode,r=xs({mode:"visible",children:r.children},i,0,null),o=pr(o,i,a,null),o.flags|=2,r.return=t,o.return=t,r.sibling=o,t.child=r,t.mode&1&&Zr(t,e.child,null,a),t.child.memoizedState=Ou(a),t.memoizedState=ju,o);if(!(t.mode&1))return Lo(e,t,a,null);if(i.data==="$!"){if(r=i.nextSibling&&i.nextSibling.dataset,r)var l=r.dgst;return r=l,o=Error(z(419)),r=pl(o,r,void 0),Lo(e,t,a,r)}if(l=(a&e.childLanes)!==0,gt||l){if(r=Qe,r!==null){switch(a&-a){case 4:i=2;break;case 16:i=8;break;case 64:case 128:case 256:case 512:case 1024:case 2048:case 4096:case 8192:case 16384:case 32768:case 65536:case 131072:case 262144:case 524288:case 1048576:case 2097152:case 4194304:case 8388608:case 16777216:case 33554432:case 67108864:i=32;break;case 536870912:i=268435456;break;default:i=0}i=i&(r.suspendedLanes|a)?0:i,i!==0&&i!==o.retryLane&&(o.retryLane=i,On(e,i),Jt(r,e,i,-1))}return Wc(),r=pl(Error(z(421))),Lo(e,t,a,r)}return i.data==="$?"?(t.flags|=128,t.child=e.child,t=Ly.bind(null,e),i._reactRetry=t,null):(e=o.treeContext,St=Jn(i.nextSibling),kt=t,Me=!0,Xt=null,e!==null&&(Rt[It++]=vn,Rt[It++]=yn,Rt[It++]=gr,vn=e.id,yn=e.overflow,gr=t),t=Dc(t,r.children),t.flags|=4096,t)}function kf(e,t,n){e.lanes|=t;var r=e.alternate;r!==null&&(r.lanes|=t),vu(e.return,t,n)}function hl(e,t,n,r,i){var o=e.memoizedState;o===null?e.memoizedState={isBackwards:t,rendering:null,renderingStartTime:0,last:r,tail:n,tailMode:i}:(o.isBackwards=t,o.rendering=null,o.renderingStartTime=0,o.last=r,o.tail=n,o.tailMode=i)}function Jm(e,t,n){var r=t.pendingProps,i=r.revealOrder,o=r.tail;if(ut(e,t,r.children,n),r=Ae.current,r&2)r=r&1|2,t.flags|=128;else{if(e!==null&&e.flags&128)e:for(e=t.child;e!==null;){if(e.tag===13)e.memoizedState!==null&&kf(e,n,t);else if(e.tag===19)kf(e,n,t);else if(e.child!==null){e.child.return=e,e=e.child;continue}if(e===t)break e;for(;e.sibling===null;){if(e.return===null||e.return===t)break e;e=e.return}e.sibling.return=e.return,e=e.sibling}r&=1}if(Ee(Ae,r),!(t.mode&1))t.memoizedState=null;else switch(i){case"forwards":for(n=t.child,i=null;n!==null;)e=n.alternate,e!==null&&Fa(e)===null&&(i=n),n=n.sibling;n=i,n===null?(i=t.child,t.child=null):(i=n.sibling,n.sibling=null),hl(t,!1,i,n,o);break;case"backwards":for(n=null,i=t.child,t.child=null;i!==null;){if(e=i.alternate,e!==null&&Fa(e)===null){t.child=i;break}e=i.sibling,i.sibling=n,n=i,i=e}hl(t,!0,n,null,o);break;case"together":hl(t,!1,null,null,void 0);break;default:t.memoizedState=null}return t.child}function sa(e,t){!(t.mode&1)&&e!==null&&(e.alternate=null,t.alternate=null,t.flags|=2)}function En(e,t,n){if(e!==null&&(t.dependencies=e.dependencies),vr|=t.lanes,!(n&t.childLanes))return null;if(e!==null&&t.child!==e.child)throw Error(z(153));if(t.child!==null){for(e=t.child,n=er(e,e.pendingProps),t.child=n,n.return=t;e.sibling!==null;)e=e.sibling,n=n.sibling=er(e,e.pendingProps),n.return=t;n.sibling=null}return t.child}function ky(e,t,n){switch(t.tag){case 3:Qm(t),Gr();break;case 5:km(t);break;case 1:vt(t.type)&&Aa(t);break;case 4:Pc(t,t.stateNode.containerInfo);break;case 10:var r=t.type._context,i=t.memoizedProps.value;Ee(La,r._currentValue),r._currentValue=i;break;case 13:if(r=t.memoizedState,r!==null)return r.dehydrated!==null?(Ee(Ae,Ae.current&1),t.flags|=128,null):n&t.child.childLanes?Km(e,t,n):(Ee(Ae,Ae.current&1),e=En(e,t,n),e!==null?e.sibling:null);Ee(Ae,Ae.current&1);break;case 19:if(r=(n&t.childLanes)!==0,e.flags&128){if(r)return Jm(e,t,n);t.flags|=128}if(i=t.memoizedState,i!==null&&(i.rendering=null,i.tail=null,i.lastEffect=null),Ee(Ae,Ae.current),r)break;return null;case 22:case 23:return t.lanes=0,Ym(e,t,n)}return En(e,t,n)}var qm,Eu,Gm,Zm;qm=function(e,t){for(var n=t.child;n!==null;){if(n.tag===5||n.tag===6)e.appendChild(n.stateNode);else if(n.tag!==4&&n.child!==null){n.child.return=n,n=n.child;continue}if(n===t)break;for(;n.sibling===null;){if(n.return===null||n.return===t)return;n=n.return}n.sibling.return=n.return,n=n.sibling}};Eu=function(){};Gm=function(e,t,n,r){var i=e.memoizedProps;if(i!==r){e=t.stateNode,cr(cn.current);var o=null;switch(n){case"input":i=Ql(e,i),r=Ql(e,r),o=[];break;case"select":i=Ie({},i,{value:void 0}),r=Ie({},r,{value:void 0}),o=[];break;case"textarea":i=ql(e,i),r=ql(e,r),o=[];break;default:typeof i.onClick!="function"&&typeof r.onClick=="function"&&(e.onclick=_a)}Zl(n,r);var a;n=null;for(u in i)if(!r.hasOwnProperty(u)&&i.hasOwnProperty(u)&&i[u]!=null)if(u==="style"){var l=i[u];for(a in l)l.hasOwnProperty(a)&&(n||(n={}),n[a]="")}else u!=="dangerouslySetInnerHTML"&&u!=="children"&&u!=="suppressContentEditableWarning"&&u!=="suppressHydrationWarning"&&u!=="autoFocus"&&(Bi.hasOwnProperty(u)?o||(o=[]):(o=o||[]).push(u,null));for(u in r){var s=r[u];if(l=i!=null?i[u]:void 0,r.hasOwnProperty(u)&&s!==l&&(s!=null||l!=null))if(u==="style")if(l){for(a in l)!l.hasOwnProperty(a)||s&&s.hasOwnProperty(a)||(n||(n={}),n[a]="");for(a in s)s.hasOwnProperty(a)&&l[a]!==s[a]&&(n||(n={}),n[a]=s[a])}else n||(o||(o=[]),o.push(u,n)),n=s;else u==="dangerouslySetInnerHTML"?(s=s?s.__html:void 0,l=l?l.__html:void 0,s!=null&&l!==s&&(o=o||[]).push(u,s)):u==="children"?typeof s!="string"&&typeof s!="number"||(o=o||[]).push(u,""+s):u!=="suppressContentEditableWarning"&&u!=="suppressHydrationWarning"&&(Bi.hasOwnProperty(u)?(s!=null&&u==="onScroll"&&Pe("scroll",e),o||l===s||(o=[])):(o=o||[]).push(u,s))}n&&(o=o||[]).push("style",n);var u=o;(t.updateQueue=u)&&(t.flags|=4)}};Zm=function(e,t,n,r){n!==r&&(t.flags|=4)};function xi(e,t){if(!Me)switch(e.tailMode){case"hidden":t=e.tail;for(var n=null;t!==null;)t.alternate!==null&&(n=t),t=t.sibling;n===null?e.tail=null:n.sibling=null;break;case"collapsed":n=e.tail;for(var r=null;n!==null;)n.alternate!==null&&(r=n),n=n.sibling;r===null?t||e.tail===null?e.tail=null:e.tail.sibling=null:r.sibling=null}}function rt(e){var t=e.alternate!==null&&e.alternate.child===e.child,n=0,r=0;if(t)for(var i=e.child;i!==null;)n|=i.lanes|i.childLanes,r|=i.subtreeFlags&14680064,r|=i.flags&14680064,i.return=e,i=i.sibling;else for(i=e.child;i!==null;)n|=i.lanes|i.childLanes,r|=i.subtreeFlags,r|=i.flags,i.return=e,i=i.sibling;return e.subtreeFlags|=r,e.childLanes=n,t}function jy(e,t,n){var r=t.pendingProps;switch(bc(t),t.tag){case 2:case 16:case 15:case 0:case 11:case 7:case 8:case 12:case 9:case 14:return rt(t),null;case 1:return vt(t.type)&&Ma(),rt(t),null;case 3:return r=t.stateNode,ei(),Te(xt),Te(st),_c(),r.pendingContext&&(r.context=r.pendingContext,r.pendingContext=null),(e===null||e.child===null)&&(Ro(t)?t.flags|=4:e===null||e.memoizedState.isDehydrated&&!(t.flags&256)||(t.flags|=1024,Xt!==null&&(Iu(Xt),Xt=null))),Eu(e,t),rt(t),null;case 5:Tc(t);var i=cr(to.current);if(n=t.type,e!==null&&t.stateNode!=null)Gm(e,t,n,r,i),e.ref!==t.ref&&(t.flags|=512,t.flags|=2097152);else{if(!r){if(t.stateNode===null)throw Error(z(166));return rt(t),null}if(e=cr(cn.current),Ro(t)){r=t.stateNode,n=t.type;var o=t.memoizedProps;switch(r[an]=t,r[Zi]=o,e=(t.mode&1)!==0,n){case"dialog":Pe("cancel",r),Pe("close",r);break;case"iframe":case"object":case"embed":Pe("load",r);break;case"video":case"audio":for(i=0;i<Ti.length;i++)Pe(Ti[i],r);break;case"source":Pe("error",r);break;case"img":case"image":case"link":Pe("error",r),Pe("load",r);break;case"details":Pe("toggle",r);break;case"input":Md(r,o),Pe("invalid",r);break;case"select":r._wrapperState={wasMultiple:!!o.multiple},Pe("invalid",r);break;case"textarea":Rd(r,o),Pe("invalid",r)}Zl(n,o),i=null;for(var a in o)if(o.hasOwnProperty(a)){var l=o[a];a==="children"?typeof l=="string"?r.textContent!==l&&(o.suppressHydrationWarning!==!0&&Ao(r.textContent,l,e),i=["children",l]):typeof l=="number"&&r.textContent!==""+l&&(o.suppressHydrationWarning!==!0&&Ao(r.textContent,l,e),i=["children",""+l]):Bi.hasOwnProperty(a)&&l!=null&&a==="onScroll"&&Pe("scroll",r)}switch(n){case"input":jo(r),Ad(r,o,!0);break;case"textarea":jo(r),Id(r);break;case"select":case"option":break;default:typeof o.onClick=="function"&&(r.onclick=_a)}r=i,t.updateQueue=r,r!==null&&(t.flags|=4)}else{a=i.nodeType===9?i:i.ownerDocument,e==="http://www.w3.org/1999/xhtml"&&(e=Eh(n)),e==="http://www.w3.org/1999/xhtml"?n==="script"?(e=a.createElement("div"),e.innerHTML="<script><\/script>",e=e.removeChild(e.firstChild)):typeof r.is=="string"?e=a.createElement(n,{is:r.is}):(e=a.createElement(n),n==="select"&&(a=e,r.multiple?a.multiple=!0:r.size&&(a.size=r.size))):e=a.createElementNS(e,n),e[an]=t,e[Zi]=r,qm(e,t,!1,!1),t.stateNode=e;e:{switch(a=eu(n,r),n){case"dialog":Pe("cancel",e),Pe("close",e),i=r;break;case"iframe":case"object":case"embed":Pe("load",e),i=r;break;case"video":case"audio":for(i=0;i<Ti.length;i++)Pe(Ti[i],e);i=r;break;case"source":Pe("error",e),i=r;break;case"img":case"image":case"link":Pe("error",e),Pe("load",e),i=r;break;case"details":Pe("toggle",e),i=r;break;case"input":Md(e,r),i=Ql(e,r),Pe("invalid",e);break;case"option":i=r;break;case"select":e._wrapperState={wasMultiple:!!r.multiple},i=Ie({},r,{value:void 0}),Pe("invalid",e);break;case"textarea":Rd(e,r),i=ql(e,r),Pe("invalid",e);break;default:i=r}Zl(n,i),l=i;for(o in l)if(l.hasOwnProperty(o)){var s=l[o];o==="style"?Th(e,s):o==="dangerouslySetInnerHTML"?(s=s?s.__html:void 0,s!=null&&Ch(e,s)):o==="children"?typeof s=="string"?(n!=="textarea"||s!=="")&&Hi(e,s):typeof s=="number"&&Hi(e,""+s):o!=="suppressContentEditableWarning"&&o!=="suppressHydrationWarning"&&o!=="autoFocus"&&(Bi.hasOwnProperty(o)?s!=null&&o==="onScroll"&&Pe("scroll",e):s!=null&&ac(e,o,s,a))}switch(n){case"input":jo(e),Ad(e,r,!1);break;case"textarea":jo(e),Id(e);break;case"option":r.value!=null&&e.setAttribute("value",""+tr(r.value));break;case"select":e.multiple=!!r.multiple,o=r.value,o!=null?Br(e,!!r.multiple,o,!1):r.defaultValue!=null&&Br(e,!!r.multiple,r.defaultValue,!0);break;default:typeof i.onClick=="function"&&(e.onclick=_a)}switch(n){case"button":case"input":case"select":case"textarea":r=!!r.autoFocus;break e;case"img":r=!0;break e;default:r=!1}}r&&(t.flags|=4)}t.ref!==null&&(t.flags|=512,t.flags|=2097152)}return rt(t),null;case 6:if(e&&t.stateNode!=null)Zm(e,t,e.memoizedProps,r);else{if(typeof r!="string"&&t.stateNode===null)throw Error(z(166));if(n=cr(to.current),cr(cn.current),Ro(t)){if(r=t.stateNode,n=t.memoizedProps,r[an]=t,(o=r.nodeValue!==n)&&(e=kt,e!==null))switch(e.tag){case 3:Ao(r.nodeValue,n,(e.mode&1)!==0);break;case 5:e.memoizedProps.suppressHydrationWarning!==!0&&Ao(r.nodeValue,n,(e.mode&1)!==0)}o&&(t.flags|=4)}else r=(n.nodeType===9?n:n.ownerDocument).createTextNode(r),r[an]=t,t.stateNode=r}return rt(t),null;case 13:if(Te(Ae),r=t.memoizedState,e===null||e.memoizedState!==null&&e.memoizedState.dehydrated!==null){if(Me&&St!==null&&t.mode&1&&!(t.flags&128))gm(),Gr(),t.flags|=98560,o=!1;else if(o=Ro(t),r!==null&&r.dehydrated!==null){if(e===null){if(!o)throw Error(z(318));if(o=t.memoizedState,o=o!==null?o.dehydrated:null,!o)throw Error(z(317));o[an]=t}else Gr(),!(t.flags&128)&&(t.memoizedState=null),t.flags|=4;rt(t),o=!1}else Xt!==null&&(Iu(Xt),Xt=null),o=!0;if(!o)return t.flags&65536?t:null}return t.flags&128?(t.lanes=n,t):(r=r!==null,r!==(e!==null&&e.memoizedState!==null)&&r&&(t.child.flags|=8192,t.mode&1&&(e===null||Ae.current&1?Be===0&&(Be=3):Wc())),t.updateQueue!==null&&(t.flags|=4),rt(t),null);case 4:return ei(),Eu(e,t),e===null&&qi(t.stateNode.containerInfo),rt(t),null;case 10:return Oc(t.type._context),rt(t),null;case 17:return vt(t.type)&&Ma(),rt(t),null;case 19:if(Te(Ae),o=t.memoizedState,o===null)return rt(t),null;if(r=(t.flags&128)!==0,a=o.rendering,a===null)if(r)xi(o,!1);else{if(Be!==0||e!==null&&e.flags&128)for(e=t.child;e!==null;){if(a=Fa(e),a!==null){for(t.flags|=128,xi(o,!1),r=a.updateQueue,r!==null&&(t.updateQueue=r,t.flags|=4),t.subtreeFlags=0,r=n,n=t.child;n!==null;)o=n,e=r,o.flags&=14680066,a=o.alternate,a===null?(o.childLanes=0,o.lanes=e,o.child=null,o.subtreeFlags=0,o.memoizedProps=null,o.memoizedState=null,o.updateQueue=null,o.dependencies=null,o.stateNode=null):(o.childLanes=a.childLanes,o.lanes=a.lanes,o.child=a.child,o.subtreeFlags=0,o.deletions=null,o.memoizedProps=a.memoizedProps,o.memoizedState=a.memoizedState,o.updateQueue=a.updateQueue,o.type=a.type,e=a.dependencies,o.dependencies=e===null?null:{lanes:e.lanes,firstContext:e.firstContext}),n=n.sibling;return Ee(Ae,Ae.current&1|2),t.child}e=e.sibling}o.tail!==null&&Fe()>ni&&(t.flags|=128,r=!0,xi(o,!1),t.lanes=4194304)}else{if(!r)if(e=Fa(a),e!==null){if(t.flags|=128,r=!0,n=e.updateQueue,n!==null&&(t.updateQueue=n,t.flags|=4),xi(o,!0),o.tail===null&&o.tailMode==="hidden"&&!a.alternate&&!Me)return rt(t),null}else 2*Fe()-o.renderingStartTime>ni&&n!==1073741824&&(t.flags|=128,r=!0,xi(o,!1),t.lanes=4194304);o.isBackwards?(a.sibling=t.child,t.child=a):(n=o.last,n!==null?n.sibling=a:t.child=a,o.last=a)}return o.tail!==null?(t=o.tail,o.rendering=t,o.tail=t.sibling,o.renderingStartTime=Fe(),t.sibling=null,n=Ae.current,Ee(Ae,r?n&1|2:n&1),t):(rt(t),null);case 22:case 23:return Uc(),r=t.memoizedState!==null,e!==null&&e.memoizedState!==null!==r&&(t.flags|=8192),r&&t.mode&1?bt&1073741824&&(rt(t),t.subtreeFlags&6&&(t.flags|=8192)):rt(t),null;case 24:return null;case 25:return null}throw Error(z(156,t.tag))}function Oy(e,t){switch(bc(t),t.tag){case 1:return vt(t.type)&&Ma(),e=t.flags,e&65536?(t.flags=e&-65537|128,t):null;case 3:return ei(),Te(xt),Te(st),_c(),e=t.flags,e&65536&&!(e&128)?(t.flags=e&-65537|128,t):null;case 5:return Tc(t),null;case 13:if(Te(Ae),e=t.memoizedState,e!==null&&e.dehydrated!==null){if(t.alternate===null)throw Error(z(340));Gr()}return e=t.flags,e&65536?(t.flags=e&-65537|128,t):null;case 19:return Te(Ae),null;case 4:return ei(),null;case 10:return Oc(t.type._context),null;case 22:case 23:return Uc(),null;case 24:return null;default:return null}}var Do=!1,at=!1,Ey=typeof WeakSet=="function"?WeakSet:Set,X=null;function Vr(e,t){var n=e.ref;if(n!==null)if(typeof n=="function")try{n(null)}catch(r){Le(e,t,r)}else n.current=null}function Cu(e,t,n){try{n()}catch(r){Le(e,t,r)}}var jf=!1;function Cy(e,t){if(cu=Ca,e=rm(),yc(e)){if("selectionStart"in e)var n={start:e.selectionStart,end:e.selectionEnd};else e:{n=(n=e.ownerDocument)&&n.defaultView||window;var r=n.getSelection&&n.getSelection();if(r&&r.rangeCount!==0){n=r.anchorNode;var i=r.anchorOffset,o=r.focusNode;r=r.focusOffset;try{n.nodeType,o.nodeType}catch{n=null;break e}var a=0,l=-1,s=-1,u=0,p=0,h=e,x=null;t:for(;;){for(var y;h!==n||i!==0&&h.nodeType!==3||(l=a+i),h!==o||r!==0&&h.nodeType!==3||(s=a+r),h.nodeType===3&&(a+=h.nodeValue.length),(y=h.firstChild)!==null;)x=h,h=y;for(;;){if(h===e)break t;if(x===n&&++u===i&&(l=a),x===o&&++p===r&&(s=a),(y=h.nextSibling)!==null)break;h=x,x=h.parentNode}h=y}n=l===-1||s===-1?null:{start:l,end:s}}else n=null}n=n||{start:0,end:0}}else n=null;for(du={focusedElem:e,selectionRange:n},Ca=!1,X=t;X!==null;)if(t=X,e=t.child,(t.subtreeFlags&1028)!==0&&e!==null)e.return=t,X=e;else for(;X!==null;){t=X;try{var m=t.alternate;if(t.flags&1024)switch(t.tag){case 0:case 11:case 15:break;case 1:if(m!==null){var v=m.memoizedProps,b=m.memoizedState,d=t.stateNode,f=d.getSnapshotBeforeUpdate(t.elementType===t.type?v:Bt(t.type,v),b);d.__reactInternalSnapshotBeforeUpdate=f}break;case 3:var g=t.stateNode.containerInfo;g.nodeType===1?g.textContent="":g.nodeType===9&&g.documentElement&&g.removeChild(g.documentElement);break;case 5:case 6:case 4:case 17:break;default:throw Error(z(163))}}catch(w){Le(t,t.return,w)}if(e=t.sibling,e!==null){e.return=t.return,X=e;break}X=t.return}return m=jf,jf=!1,m}function Fi(e,t,n){var r=t.updateQueue;if(r=r!==null?r.lastEffect:null,r!==null){var i=r=r.next;do{if((i.tag&e)===e){var o=i.destroy;i.destroy=void 0,o!==void 0&&Cu(t,n,o)}i=i.next}while(i!==r)}}function ms(e,t){if(t=t.updateQueue,t=t!==null?t.lastEffect:null,t!==null){var n=t=t.next;do{if((n.tag&e)===e){var r=n.create;n.destroy=r()}n=n.next}while(n!==t)}}function Pu(e){var t=e.ref;if(t!==null){var n=e.stateNode;switch(e.tag){case 5:e=n;break;default:e=n}typeof t=="function"?t(e):t.current=e}}function eg(e){var t=e.alternate;t!==null&&(e.alternate=null,eg(t)),e.child=null,e.deletions=null,e.sibling=null,e.tag===5&&(t=e.stateNode,t!==null&&(delete t[an],delete t[Zi],delete t[hu],delete t[uy],delete t[cy])),e.stateNode=null,e.return=null,e.dependencies=null,e.memoizedProps=null,e.memoizedState=null,e.pendingProps=null,e.stateNode=null,e.updateQueue=null}function tg(e){return e.tag===5||e.tag===3||e.tag===4}function Of(e){e:for(;;){for(;e.sibling===null;){if(e.return===null||tg(e.return))return null;e=e.return}for(e.sibling.return=e.return,e=e.sibling;e.tag!==5&&e.tag!==6&&e.tag!==18;){if(e.flags&2||e.child===null||e.tag===4)continue e;e.child.return=e,e=e.child}if(!(e.flags&2))return e.stateNode}}function Tu(e,t,n){var r=e.tag;if(r===5||r===6)e=e.stateNode,t?n.nodeType===8?n.parentNode.insertBefore(e,t):n.insertBefore(e,t):(n.nodeType===8?(t=n.parentNode,t.insertBefore(e,n)):(t=n,t.appendChild(e)),n=n._reactRootContainer,n!=null||t.onclick!==null||(t.onclick=_a));else if(r!==4&&(e=e.child,e!==null))for(Tu(e,t,n),e=e.sibling;e!==null;)Tu(e,t,n),e=e.sibling}function _u(e,t,n){var r=e.tag;if(r===5||r===6)e=e.stateNode,t?n.insertBefore(e,t):n.appendChild(e);else if(r!==4&&(e=e.child,e!==null))for(_u(e,t,n),e=e.sibling;e!==null;)_u(e,t,n),e=e.sibling}var Ge=null,$t=!1;function Tn(e,t,n){for(n=n.child;n!==null;)ng(e,t,n),n=n.sibling}function ng(e,t,n){if(un&&typeof un.onCommitFiberUnmount=="function")try{un.onCommitFiberUnmount(ss,n)}catch{}switch(n.tag){case 5:at||Vr(n,t);case 6:var r=Ge,i=$t;Ge=null,Tn(e,t,n),Ge=r,$t=i,Ge!==null&&($t?(e=Ge,n=n.stateNode,e.nodeType===8?e.parentNode.removeChild(n):e.removeChild(n)):Ge.removeChild(n.stateNode));break;case 18:Ge!==null&&($t?(e=Ge,n=n.stateNode,e.nodeType===8?sl(e.parentNode,n):e.nodeType===1&&sl(e,n),Qi(e)):sl(Ge,n.stateNode));break;case 4:r=Ge,i=$t,Ge=n.stateNode.containerInfo,$t=!0,Tn(e,t,n),Ge=r,$t=i;break;case 0:case 11:case 14:case 15:if(!at&&(r=n.updateQueue,r!==null&&(r=r.lastEffect,r!==null))){i=r=r.next;do{var o=i,a=o.destroy;o=o.tag,a!==void 0&&(o&2||o&4)&&Cu(n,t,a),i=i.next}while(i!==r)}Tn(e,t,n);break;case 1:if(!at&&(Vr(n,t),r=n.stateNode,typeof r.componentWillUnmount=="function"))try{r.props=n.memoizedProps,r.state=n.memoizedState,r.componentWillUnmount()}catch(l){Le(n,t,l)}Tn(e,t,n);break;case 21:Tn(e,t,n);break;case 22:n.mode&1?(at=(r=at)||n.memoizedState!==null,Tn(e,t,n),at=r):Tn(e,t,n);break;default:Tn(e,t,n)}}function Ef(e){var t=e.updateQueue;if(t!==null){e.updateQueue=null;var n=e.stateNode;n===null&&(n=e.stateNode=new Ey),t.forEach(function(r){var i=Dy.bind(null,e,r);n.has(r)||(n.add(r),r.then(i,i))})}}function Wt(e,t){var n=t.deletions;if(n!==null)for(var r=0;r<n.length;r++){var i=n[r];try{var o=e,a=t,l=a;e:for(;l!==null;){switch(l.tag){case 5:Ge=l.stateNode,$t=!1;break e;case 3:Ge=l.stateNode.containerInfo,$t=!0;break e;case 4:Ge=l.stateNode.containerInfo,$t=!0;break e}l=l.return}if(Ge===null)throw Error(z(160));ng(o,a,i),Ge=null,$t=!1;var s=i.alternate;s!==null&&(s.return=null),i.return=null}catch(u){Le(i,t,u)}}if(t.subtreeFlags&12854)for(t=t.child;t!==null;)rg(t,e),t=t.sibling}function rg(e,t){var n=e.alternate,r=e.flags;switch(e.tag){case 0:case 11:case 14:case 15:if(Wt(t,e),en(e),r&4){try{Fi(3,e,e.return),ms(3,e)}catch(v){Le(e,e.return,v)}try{Fi(5,e,e.return)}catch(v){Le(e,e.return,v)}}break;case 1:Wt(t,e),en(e),r&512&&n!==null&&Vr(n,n.return);break;case 5:if(Wt(t,e),en(e),r&512&&n!==null&&Vr(n,n.return),e.flags&32){var i=e.stateNode;try{Hi(i,"")}catch(v){Le(e,e.return,v)}}if(r&4&&(i=e.stateNode,i!=null)){var o=e.memoizedProps,a=n!==null?n.memoizedProps:o,l=e.type,s=e.updateQueue;if(e.updateQueue=null,s!==null)try{l==="input"&&o.type==="radio"&&o.name!=null&&jh(i,o),eu(l,a);var u=eu(l,o);for(a=0;a<s.length;a+=2){var p=s[a],h=s[a+1];p==="style"?Th(i,h):p==="dangerouslySetInnerHTML"?Ch(i,h):p==="children"?Hi(i,h):ac(i,p,h,u)}switch(l){case"input":Kl(i,o);break;case"textarea":Oh(i,o);break;case"select":var x=i._wrapperState.wasMultiple;i._wrapperState.wasMultiple=!!o.multiple;var y=o.value;y!=null?Br(i,!!o.multiple,y,!1):x!==!!o.multiple&&(o.defaultValue!=null?Br(i,!!o.multiple,o.defaultValue,!0):Br(i,!!o.multiple,o.multiple?[]:"",!1))}i[Zi]=o}catch(v){Le(e,e.return,v)}}break;case 6:if(Wt(t,e),en(e),r&4){if(e.stateNode===null)throw Error(z(162));i=e.stateNode,o=e.memoizedProps;try{i.nodeValue=o}catch(v){Le(e,e.return,v)}}break;case 3:if(Wt(t,e),en(e),r&4&&n!==null&&n.memoizedState.isDehydrated)try{Qi(t.containerInfo)}catch(v){Le(e,e.return,v)}break;case 4:Wt(t,e),en(e);break;case 13:Wt(t,e),en(e),i=e.child,i.flags&8192&&(o=i.memoizedState!==null,i.stateNode.isHidden=o,!o||i.alternate!==null&&i.alternate.memoizedState!==null||(Nc=Fe())),r&4&&Ef(e);break;case 22:if(p=n!==null&&n.memoizedState!==null,e.mode&1?(at=(u=at)||p,Wt(t,e),at=u):Wt(t,e),en(e),r&8192){if(u=e.memoizedState!==null,(e.stateNode.isHidden=u)&&!p&&e.mode&1)for(X=e,p=e.child;p!==null;){for(h=X=p;X!==null;){switch(x=X,y=x.child,x.tag){case 0:case 11:case 14:case 15:Fi(4,x,x.return);break;case 1:Vr(x,x.return);var m=x.stateNode;if(typeof m.componentWillUnmount=="function"){r=x,n=x.return;try{t=r,m.props=t.memoizedProps,m.state=t.memoizedState,m.componentWillUnmount()}catch(v){Le(r,n,v)}}break;case 5:Vr(x,x.return);break;case 22:if(x.memoizedState!==null){Pf(h);continue}}y!==null?(y.return=x,X=y):Pf(h)}p=p.sibling}e:for(p=null,h=e;;){if(h.tag===5){if(p===null){p=h;try{i=h.stateNode,u?(o=i.style,typeof o.setProperty=="function"?o.setProperty("display","none","important"):o.display="none"):(l=h.stateNode,s=h.memoizedProps.style,a=s!=null&&s.hasOwnProperty("display")?s.display:null,l.style.display=Ph("display",a))}catch(v){Le(e,e.return,v)}}}else if(h.tag===6){if(p===null)try{h.stateNode.nodeValue=u?"":h.memoizedProps}catch(v){Le(e,e.return,v)}}else if((h.tag!==22&&h.tag!==23||h.memoizedState===null||h===e)&&h.child!==null){h.child.return=h,h=h.child;continue}if(h===e)break e;for(;h.sibling===null;){if(h.return===null||h.return===e)break e;p===h&&(p=null),h=h.return}p===h&&(p=null),h.sibling.return=h.return,h=h.sibling}}break;case 19:Wt(t,e),en(e),r&4&&Ef(e);break;case 21:break;default:Wt(t,e),en(e)}}function en(e){var t=e.flags;if(t&2){try{e:{for(var n=e.return;n!==null;){if(tg(n)){var r=n;break e}n=n.return}throw Error(z(160))}switch(r.tag){case 5:var i=r.stateNode;r.flags&32&&(Hi(i,""),r.flags&=-33);var o=Of(e);_u(e,o,i);break;case 3:case 4:var a=r.stateNode.containerInfo,l=Of(e);Tu(e,l,a);break;default:throw Error(z(161))}}catch(s){Le(e,e.return,s)}e.flags&=-3}t&4096&&(e.flags&=-4097)}function Py(e,t,n){X=e,ig(e)}function ig(e,t,n){for(var r=(e.mode&1)!==0;X!==null;){var i=X,o=i.child;if(i.tag===22&&r){var a=i.memoizedState!==null||Do;if(!a){var l=i.alternate,s=l!==null&&l.memoizedState!==null||at;l=Do;var u=at;if(Do=a,(at=s)&&!u)for(X=i;X!==null;)a=X,s=a.child,a.tag===22&&a.memoizedState!==null?Tf(i):s!==null?(s.return=a,X=s):Tf(i);for(;o!==null;)X=o,ig(o),o=o.sibling;X=i,Do=l,at=u}Cf(e)}else i.subtreeFlags&8772&&o!==null?(o.return=i,X=o):Cf(e)}}function Cf(e){for(;X!==null;){var t=X;if(t.flags&8772){var n=t.alternate;try{if(t.flags&8772)switch(t.tag){case 0:case 11:case 15:at||ms(5,t);break;case 1:var r=t.stateNode;if(t.flags&4&&!at)if(n===null)r.componentDidMount();else{var i=t.elementType===t.type?n.memoizedProps:Bt(t.type,n.memoizedProps);r.componentDidUpdate(i,n.memoizedState,r.__reactInternalSnapshotBeforeUpdate)}var o=t.updateQueue;o!==null&&cf(t,o,r);break;case 3:var a=t.updateQueue;if(a!==null){if(n=null,t.child!==null)switch(t.child.tag){case 5:n=t.child.stateNode;break;case 1:n=t.child.stateNode}cf(t,a,n)}break;case 5:var l=t.stateNode;if(n===null&&t.flags&4){n=l;var s=t.memoizedProps;switch(t.type){case"button":case"input":case"select":case"textarea":s.autoFocus&&n.focus();break;case"img":s.src&&(n.src=s.src)}}break;case 6:break;case 4:break;case 12:break;case 13:if(t.memoizedState===null){var u=t.alternate;if(u!==null){var p=u.memoizedState;if(p!==null){var h=p.dehydrated;h!==null&&Qi(h)}}}break;case 19:case 17:case 21:case 22:case 23:case 25:break;default:throw Error(z(163))}at||t.flags&512&&Pu(t)}catch(x){Le(t,t.return,x)}}if(t===e){X=null;break}if(n=t.sibling,n!==null){n.return=t.return,X=n;break}X=t.return}}function Pf(e){for(;X!==null;){var t=X;if(t===e){X=null;break}var n=t.sibling;if(n!==null){n.return=t.return,X=n;break}X=t.return}}function Tf(e){for(;X!==null;){var t=X;try{switch(t.tag){case 0:case 11:case 15:var n=t.return;try{ms(4,t)}catch(s){Le(t,n,s)}break;case 1:var r=t.stateNode;if(typeof r.componentDidMount=="function"){var i=t.return;try{r.componentDidMount()}catch(s){Le(t,i,s)}}var o=t.return;try{Pu(t)}catch(s){Le(t,o,s)}break;case 5:var a=t.return;try{Pu(t)}catch(s){Le(t,a,s)}}}catch(s){Le(t,t.return,s)}if(t===e){X=null;break}var l=t.sibling;if(l!==null){l.return=t.return,X=l;break}X=t.return}}var Ty=Math.ceil,Ua=Cn.ReactCurrentDispatcher,zc=Cn.ReactCurrentOwner,zt=Cn.ReactCurrentBatchConfig,me=0,Qe=null,Ve=null,et=0,bt=0,Ur=ir(0),Be=0,oo=null,vr=0,gs=0,Fc=0,Ni=null,mt=null,Nc=0,ni=1/0,mn=null,Wa=!1,Mu=null,Gn=null,zo=!1,Hn=null,Ba=0,Vi=0,Au=null,la=-1,ua=0;function dt(){return me&6?Fe():la!==-1?la:la=Fe()}function Zn(e){return e.mode&1?me&2&&et!==0?et&-et:fy.transition!==null?(ua===0&&(ua=Uh()),ua):(e=we,e!==0||(e=window.event,e=e===void 0?16:Qh(e.type)),e):1}function Jt(e,t,n,r){if(50<Vi)throw Vi=0,Au=null,Error(z(185));fo(e,n,r),(!(me&2)||e!==Qe)&&(e===Qe&&(!(me&2)&&(gs|=n),Be===4&&Wn(e,et)),yt(e,r),n===1&&me===0&&!(t.mode&1)&&(ni=Fe()+500,fs&&or()))}function yt(e,t){var n=e.callbackNode;f0(e,t);var r=Ea(e,e===Qe?et:0);if(r===0)n!==null&&zd(n),e.callbackNode=null,e.callbackPriority=0;else if(t=r&-r,e.callbackPriority!==t){if(n!=null&&zd(n),t===1)e.tag===0?dy(_f.bind(null,e)):pm(_f.bind(null,e)),sy(function(){!(me&6)&&or()}),n=null;else{switch(Wh(r)){case 1:n=dc;break;case 4:n=Nh;break;case 16:n=Oa;break;case 536870912:n=Vh;break;default:n=Oa}n=fg(n,og.bind(null,e))}e.callbackPriority=t,e.callbackNode=n}}function og(e,t){if(la=-1,ua=0,me&6)throw Error(z(327));var n=e.callbackNode;if(Qr()&&e.callbackNode!==n)return null;var r=Ea(e,e===Qe?et:0);if(r===0)return null;if(r&30||r&e.expiredLanes||t)t=Ha(e,r);else{t=r;var i=me;me|=2;var o=sg();(Qe!==e||et!==t)&&(mn=null,ni=Fe()+500,fr(e,t));do try{Ay();break}catch(l){ag(e,l)}while(!0);jc(),Ua.current=o,me=i,Ve!==null?t=0:(Qe=null,et=0,t=Be)}if(t!==0){if(t===2&&(i=ou(e),i!==0&&(r=i,t=Ru(e,i))),t===1)throw n=oo,fr(e,0),Wn(e,r),yt(e,Fe()),n;if(t===6)Wn(e,r);else{if(i=e.current.alternate,!(r&30)&&!_y(i)&&(t=Ha(e,r),t===2&&(o=ou(e),o!==0&&(r=o,t=Ru(e,o))),t===1))throw n=oo,fr(e,0),Wn(e,r),yt(e,Fe()),n;switch(e.finishedWork=i,e.finishedLanes=r,t){case 0:case 1:throw Error(z(345));case 2:sr(e,mt,mn);break;case 3:if(Wn(e,r),(r&130023424)===r&&(t=Nc+500-Fe(),10<t)){if(Ea(e,0)!==0)break;if(i=e.suspendedLanes,(i&r)!==r){dt(),e.pingedLanes|=e.suspendedLanes&i;break}e.timeoutHandle=pu(sr.bind(null,e,mt,mn),t);break}sr(e,mt,mn);break;case 4:if(Wn(e,r),(r&4194240)===r)break;for(t=e.eventTimes,i=-1;0<r;){var a=31-Kt(r);o=1<<a,a=t[a],a>i&&(i=a),r&=~o}if(r=i,r=Fe()-r,r=(120>r?120:480>r?480:1080>r?1080:1920>r?1920:3e3>r?3e3:4320>r?4320:1960*Ty(r/1960))-r,10<r){e.timeoutHandle=pu(sr.bind(null,e,mt,mn),r);break}sr(e,mt,mn);break;case 5:sr(e,mt,mn);break;default:throw Error(z(329))}}}return yt(e,Fe()),e.callbackNode===n?og.bind(null,e):null}function Ru(e,t){var n=Ni;return e.current.memoizedState.isDehydrated&&(fr(e,t).flags|=256),e=Ha(e,t),e!==2&&(t=mt,mt=n,t!==null&&Iu(t)),e}function Iu(e){mt===null?mt=e:mt.push.apply(mt,e)}function _y(e){for(var t=e;;){if(t.flags&16384){var n=t.updateQueue;if(n!==null&&(n=n.stores,n!==null))for(var r=0;r<n.length;r++){var i=n[r],o=i.getSnapshot;i=i.value;try{if(!Gt(o(),i))return!1}catch{return!1}}}if(n=t.child,t.subtreeFlags&16384&&n!==null)n.return=t,t=n;else{if(t===e)break;for(;t.sibling===null;){if(t.return===null||t.return===e)return!0;t=t.return}t.sibling.return=t.return,t=t.sibling}}return!0}function Wn(e,t){for(t&=~Fc,t&=~gs,e.suspendedLanes|=t,e.pingedLanes&=~t,e=e.expirationTimes;0<t;){var n=31-Kt(t),r=1<<n;e[n]=-1,t&=~r}}function _f(e){if(me&6)throw Error(z(327));Qr();var t=Ea(e,0);if(!(t&1))return yt(e,Fe()),null;var n=Ha(e,t);if(e.tag!==0&&n===2){var r=ou(e);r!==0&&(t=r,n=Ru(e,r))}if(n===1)throw n=oo,fr(e,0),Wn(e,t),yt(e,Fe()),n;if(n===6)throw Error(z(345));return e.finishedWork=e.current.alternate,e.finishedLanes=t,sr(e,mt,mn),yt(e,Fe()),null}function Vc(e,t){var n=me;me|=1;try{return e(t)}finally{me=n,me===0&&(ni=Fe()+500,fs&&or())}}function yr(e){Hn!==null&&Hn.tag===0&&!(me&6)&&Qr();var t=me;me|=1;var n=zt.transition,r=we;try{if(zt.transition=null,we=1,e)return e()}finally{we=r,zt.transition=n,me=t,!(me&6)&&or()}}function Uc(){bt=Ur.current,Te(Ur)}function fr(e,t){e.finishedWork=null,e.finishedLanes=0;var n=e.timeoutHandle;if(n!==-1&&(e.timeoutHandle=-1,ay(n)),Ve!==null)for(n=Ve.return;n!==null;){var r=n;switch(bc(r),r.tag){case 1:r=r.type.childContextTypes,r!=null&&Ma();break;case 3:ei(),Te(xt),Te(st),_c();break;case 5:Tc(r);break;case 4:ei();break;case 13:Te(Ae);break;case 19:Te(Ae);break;case 10:Oc(r.type._context);break;case 22:case 23:Uc()}n=n.return}if(Qe=e,Ve=e=er(e.current,null),et=bt=t,Be=0,oo=null,Fc=gs=vr=0,mt=Ni=null,ur!==null){for(t=0;t<ur.length;t++)if(n=ur[t],r=n.interleaved,r!==null){n.interleaved=null;var i=r.next,o=n.pending;if(o!==null){var a=o.next;o.next=i,r.next=a}n.pending=r}ur=null}return e}function ag(e,t){do{var n=Ve;try{if(jc(),oa.current=Va,Na){for(var r=Re.memoizedState;r!==null;){var i=r.queue;i!==null&&(i.pending=null),r=r.next}Na=!1}if(xr=0,Xe=We=Re=null,zi=!1,no=0,zc.current=null,n===null||n.return===null){Be=1,oo=t,Ve=null;break}e:{var o=e,a=n.return,l=n,s=t;if(t=et,l.flags|=32768,s!==null&&typeof s=="object"&&typeof s.then=="function"){var u=s,p=l,h=p.tag;if(!(p.mode&1)&&(h===0||h===11||h===15)){var x=p.alternate;x?(p.updateQueue=x.updateQueue,p.memoizedState=x.memoizedState,p.lanes=x.lanes):(p.updateQueue=null,p.memoizedState=null)}var y=xf(a);if(y!==null){y.flags&=-257,vf(y,a,l,o,t),y.mode&1&&gf(o,u,t),t=y,s=u;var m=t.updateQueue;if(m===null){var v=new Set;v.add(s),t.updateQueue=v}else m.add(s);break e}else{if(!(t&1)){gf(o,u,t),Wc();break e}s=Error(z(426))}}else if(Me&&l.mode&1){var b=xf(a);if(b!==null){!(b.flags&65536)&&(b.flags|=256),vf(b,a,l,o,t),Sc(ti(s,l));break e}}o=s=ti(s,l),Be!==4&&(Be=2),Ni===null?Ni=[o]:Ni.push(o),o=a;do{switch(o.tag){case 3:o.flags|=65536,t&=-t,o.lanes|=t;var d=Bm(o,s,t);uf(o,d);break e;case 1:l=s;var f=o.type,g=o.stateNode;if(!(o.flags&128)&&(typeof f.getDerivedStateFromError=="function"||g!==null&&typeof g.componentDidCatch=="function"&&(Gn===null||!Gn.has(g)))){o.flags|=65536,t&=-t,o.lanes|=t;var w=Hm(o,l,t);uf(o,w);break e}}o=o.return}while(o!==null)}ug(n)}catch(S){t=S,Ve===n&&n!==null&&(Ve=n=n.return);continue}break}while(!0)}function sg(){var e=Ua.current;return Ua.current=Va,e===null?Va:e}function Wc(){(Be===0||Be===3||Be===2)&&(Be=4),Qe===null||!(vr&268435455)&&!(gs&268435455)||Wn(Qe,et)}function Ha(e,t){var n=me;me|=2;var r=sg();(Qe!==e||et!==t)&&(mn=null,fr(e,t));do try{My();break}catch(i){ag(e,i)}while(!0);if(jc(),me=n,Ua.current=r,Ve!==null)throw Error(z(261));return Qe=null,et=0,Be}function My(){for(;Ve!==null;)lg(Ve)}function Ay(){for(;Ve!==null&&!r0();)lg(Ve)}function lg(e){var t=dg(e.alternate,e,bt);e.memoizedProps=e.pendingProps,t===null?ug(e):Ve=t,zc.current=null}function ug(e){var t=e;do{var n=t.alternate;if(e=t.return,t.flags&32768){if(n=Oy(n,t),n!==null){n.flags&=32767,Ve=n;return}if(e!==null)e.flags|=32768,e.subtreeFlags=0,e.deletions=null;else{Be=6,Ve=null;return}}else if(n=jy(n,t,bt),n!==null){Ve=n;return}if(t=t.sibling,t!==null){Ve=t;return}Ve=t=e}while(t!==null);Be===0&&(Be=5)}function sr(e,t,n){var r=we,i=zt.transition;try{zt.transition=null,we=1,Ry(e,t,n,r)}finally{zt.transition=i,we=r}return null}function Ry(e,t,n,r){do Qr();while(Hn!==null);if(me&6)throw Error(z(327));n=e.finishedWork;var i=e.finishedLanes;if(n===null)return null;if(e.finishedWork=null,e.finishedLanes=0,n===e.current)throw Error(z(177));e.callbackNode=null,e.callbackPriority=0;var o=n.lanes|n.childLanes;if(p0(e,o),e===Qe&&(Ve=Qe=null,et=0),!(n.subtreeFlags&2064)&&!(n.flags&2064)||zo||(zo=!0,fg(Oa,function(){return Qr(),null})),o=(n.flags&15990)!==0,n.subtreeFlags&15990||o){o=zt.transition,zt.transition=null;var a=we;we=1;var l=me;me|=4,zc.current=null,Cy(e,n),rg(n,e),Z0(du),Ca=!!cu,du=cu=null,e.current=n,Py(n),i0(),me=l,we=a,zt.transition=o}else e.current=n;if(zo&&(zo=!1,Hn=e,Ba=i),o=e.pendingLanes,o===0&&(Gn=null),s0(n.stateNode),yt(e,Fe()),t!==null)for(r=e.onRecoverableError,n=0;n<t.length;n++)i=t[n],r(i.value,{componentStack:i.stack,digest:i.digest});if(Wa)throw Wa=!1,e=Mu,Mu=null,e;return Ba&1&&e.tag!==0&&Qr(),o=e.pendingLanes,o&1?e===Au?Vi++:(Vi=0,Au=e):Vi=0,or(),null}function Qr(){if(Hn!==null){var e=Wh(Ba),t=zt.transition,n=we;try{if(zt.transition=null,we=16>e?16:e,Hn===null)var r=!1;else{if(e=Hn,Hn=null,Ba=0,me&6)throw Error(z(331));var i=me;for(me|=4,X=e.current;X!==null;){var o=X,a=o.child;if(X.flags&16){var l=o.deletions;if(l!==null){for(var s=0;s<l.length;s++){var u=l[s];for(X=u;X!==null;){var p=X;switch(p.tag){case 0:case 11:case 15:Fi(8,p,o)}var h=p.child;if(h!==null)h.return=p,X=h;else for(;X!==null;){p=X;var x=p.sibling,y=p.return;if(eg(p),p===u){X=null;break}if(x!==null){x.return=y,X=x;break}X=y}}}var m=o.alternate;if(m!==null){var v=m.child;if(v!==null){m.child=null;do{var b=v.sibling;v.sibling=null,v=b}while(v!==null)}}X=o}}if(o.subtreeFlags&2064&&a!==null)a.return=o,X=a;else e:for(;X!==null;){if(o=X,o.flags&2048)switch(o.tag){case 0:case 11:case 15:Fi(9,o,o.return)}var d=o.sibling;if(d!==null){d.return=o.return,X=d;break e}X=o.return}}var f=e.current;for(X=f;X!==null;){a=X;var g=a.child;if(a.subtreeFlags&2064&&g!==null)g.return=a,X=g;else e:for(a=f;X!==null;){if(l=X,l.flags&2048)try{switch(l.tag){case 0:case 11:case 15:ms(9,l)}}catch(S){Le(l,l.return,S)}if(l===a){X=null;break e}var w=l.sibling;if(w!==null){w.return=l.return,X=w;break e}X=l.return}}if(me=i,or(),un&&typeof un.onPostCommitFiberRoot=="function")try{un.onPostCommitFiberRoot(ss,e)}catch{}r=!0}return r}finally{we=n,zt.transition=t}}return!1}function Mf(e,t,n){t=ti(n,t),t=Bm(e,t,1),e=qn(e,t,1),t=dt(),e!==null&&(fo(e,1,t),yt(e,t))}function Le(e,t,n){if(e.tag===3)Mf(e,e,n);else for(;t!==null;){if(t.tag===3){Mf(t,e,n);break}else if(t.tag===1){var r=t.stateNode;if(typeof t.type.getDerivedStateFromError=="function"||typeof r.componentDidCatch=="function"&&(Gn===null||!Gn.has(r))){e=ti(n,e),e=Hm(t,e,1),t=qn(t,e,1),e=dt(),t!==null&&(fo(t,1,e),yt(t,e));break}}t=t.return}}function Iy(e,t,n){var r=e.pingCache;r!==null&&r.delete(t),t=dt(),e.pingedLanes|=e.suspendedLanes&n,Qe===e&&(et&n)===n&&(Be===4||Be===3&&(et&130023424)===et&&500>Fe()-Nc?fr(e,0):Fc|=n),yt(e,t)}function cg(e,t){t===0&&(e.mode&1?(t=Co,Co<<=1,!(Co&130023424)&&(Co=4194304)):t=1);var n=dt();e=On(e,t),e!==null&&(fo(e,t,n),yt(e,n))}function Ly(e){var t=e.memoizedState,n=0;t!==null&&(n=t.retryLane),cg(e,n)}function Dy(e,t){var n=0;switch(e.tag){case 13:var r=e.stateNode,i=e.memoizedState;i!==null&&(n=i.retryLane);break;case 19:r=e.stateNode;break;default:throw Error(z(314))}r!==null&&r.delete(t),cg(e,n)}var dg;dg=function(e,t,n){if(e!==null)if(e.memoizedProps!==t.pendingProps||xt.current)gt=!0;else{if(!(e.lanes&n)&&!(t.flags&128))return gt=!1,ky(e,t,n);gt=!!(e.flags&131072)}else gt=!1,Me&&t.flags&1048576&&hm(t,Ia,t.index);switch(t.lanes=0,t.tag){case 2:var r=t.type;sa(e,t),e=t.pendingProps;var i=qr(t,st.current);Xr(t,n),i=Ac(null,t,r,e,i,n);var o=Rc();return t.flags|=1,typeof i=="object"&&i!==null&&typeof i.render=="function"&&i.$$typeof===void 0?(t.tag=1,t.memoizedState=null,t.updateQueue=null,vt(r)?(o=!0,Aa(t)):o=!1,t.memoizedState=i.state!==null&&i.state!==void 0?i.state:null,Cc(t),i.updater=ps,t.stateNode=i,i._reactInternals=t,wu(t,r,e,n),t=ku(null,t,r,!0,o,n)):(t.tag=0,Me&&o&&wc(t),ut(null,t,i,n),t=t.child),t;case 16:r=t.elementType;e:{switch(sa(e,t),e=t.pendingProps,i=r._init,r=i(r._payload),t.type=r,i=t.tag=Fy(r),e=Bt(r,e),i){case 0:t=Su(null,t,r,e,n);break e;case 1:t=bf(null,t,r,e,n);break e;case 11:t=yf(null,t,r,e,n);break e;case 14:t=wf(null,t,r,Bt(r.type,e),n);break e}throw Error(z(306,r,""))}return t;case 0:return r=t.type,i=t.pendingProps,i=t.elementType===r?i:Bt(r,i),Su(e,t,r,i,n);case 1:return r=t.type,i=t.pendingProps,i=t.elementType===r?i:Bt(r,i),bf(e,t,r,i,n);case 3:e:{if(Qm(t),e===null)throw Error(z(387));r=t.pendingProps,o=t.memoizedState,i=o.element,vm(e,t),za(t,r,null,n);var a=t.memoizedState;if(r=a.element,o.isDehydrated)if(o={element:r,isDehydrated:!1,cache:a.cache,pendingSuspenseBoundaries:a.pendingSuspenseBoundaries,transitions:a.transitions},t.updateQueue.baseState=o,t.memoizedState=o,t.flags&256){i=ti(Error(z(423)),t),t=Sf(e,t,r,n,i);break e}else if(r!==i){i=ti(Error(z(424)),t),t=Sf(e,t,r,n,i);break e}else for(St=Jn(t.stateNode.containerInfo.firstChild),kt=t,Me=!0,Xt=null,n=Sm(t,null,r,n),t.child=n;n;)n.flags=n.flags&-3|4096,n=n.sibling;else{if(Gr(),r===i){t=En(e,t,n);break e}ut(e,t,r,n)}t=t.child}return t;case 5:return km(t),e===null&&xu(t),r=t.type,i=t.pendingProps,o=e!==null?e.memoizedProps:null,a=i.children,fu(r,i)?a=null:o!==null&&fu(r,o)&&(t.flags|=32),Xm(e,t),ut(e,t,a,n),t.child;case 6:return e===null&&xu(t),null;case 13:return Km(e,t,n);case 4:return Pc(t,t.stateNode.containerInfo),r=t.pendingProps,e===null?t.child=Zr(t,null,r,n):ut(e,t,r,n),t.child;case 11:return r=t.type,i=t.pendingProps,i=t.elementType===r?i:Bt(r,i),yf(e,t,r,i,n);case 7:return ut(e,t,t.pendingProps,n),t.child;case 8:return ut(e,t,t.pendingProps.children,n),t.child;case 12:return ut(e,t,t.pendingProps.children,n),t.child;case 10:e:{if(r=t.type._context,i=t.pendingProps,o=t.memoizedProps,a=i.value,Ee(La,r._currentValue),r._currentValue=a,o!==null)if(Gt(o.value,a)){if(o.children===i.children&&!xt.current){t=En(e,t,n);break e}}else for(o=t.child,o!==null&&(o.return=t);o!==null;){var l=o.dependencies;if(l!==null){a=o.child;for(var s=l.firstContext;s!==null;){if(s.context===r){if(o.tag===1){s=wn(-1,n&-n),s.tag=2;var u=o.updateQueue;if(u!==null){u=u.shared;var p=u.pending;p===null?s.next=s:(s.next=p.next,p.next=s),u.pending=s}}o.lanes|=n,s=o.alternate,s!==null&&(s.lanes|=n),vu(o.return,n,t),l.lanes|=n;break}s=s.next}}else if(o.tag===10)a=o.type===t.type?null:o.child;else if(o.tag===18){if(a=o.return,a===null)throw Error(z(341));a.lanes|=n,l=a.alternate,l!==null&&(l.lanes|=n),vu(a,n,t),a=o.sibling}else a=o.child;if(a!==null)a.return=o;else for(a=o;a!==null;){if(a===t){a=null;break}if(o=a.sibling,o!==null){o.return=a.return,a=o;break}a=a.return}o=a}ut(e,t,i.children,n),t=t.child}return t;case 9:return i=t.type,r=t.pendingProps.children,Xr(t,n),i=Vt(i),r=r(i),t.flags|=1,ut(e,t,r,n),t.child;case 14:return r=t.type,i=Bt(r,t.pendingProps),i=Bt(r.type,i),wf(e,t,r,i,n);case 15:return $m(e,t,t.type,t.pendingProps,n);case 17:return r=t.type,i=t.pendingProps,i=t.elementType===r?i:Bt(r,i),sa(e,t),t.tag=1,vt(r)?(e=!0,Aa(t)):e=!1,Xr(t,n),wm(t,r,i),wu(t,r,i,n),ku(null,t,r,!0,e,n);case 19:return Jm(e,t,n);case 22:return Ym(e,t,n)}throw Error(z(156,t.tag))};function fg(e,t){return Fh(e,t)}function zy(e,t,n,r){this.tag=e,this.key=n,this.sibling=this.child=this.return=this.stateNode=this.type=this.elementType=null,this.index=0,this.ref=null,this.pendingProps=t,this.dependencies=this.memoizedState=this.updateQueue=this.memoizedProps=null,this.mode=r,this.subtreeFlags=this.flags=0,this.deletions=null,this.childLanes=this.lanes=0,this.alternate=null}function Dt(e,t,n,r){return new zy(e,t,n,r)}function Bc(e){return e=e.prototype,!(!e||!e.isReactComponent)}function Fy(e){if(typeof e=="function")return Bc(e)?1:0;if(e!=null){if(e=e.$$typeof,e===lc)return 11;if(e===uc)return 14}return 2}function er(e,t){var n=e.alternate;return n===null?(n=Dt(e.tag,t,e.key,e.mode),n.elementType=e.elementType,n.type=e.type,n.stateNode=e.stateNode,n.alternate=e,e.alternate=n):(n.pendingProps=t,n.type=e.type,n.flags=0,n.subtreeFlags=0,n.deletions=null),n.flags=e.flags&14680064,n.childLanes=e.childLanes,n.lanes=e.lanes,n.child=e.child,n.memoizedProps=e.memoizedProps,n.memoizedState=e.memoizedState,n.updateQueue=e.updateQueue,t=e.dependencies,n.dependencies=t===null?null:{lanes:t.lanes,firstContext:t.firstContext},n.sibling=e.sibling,n.index=e.index,n.ref=e.ref,n}function ca(e,t,n,r,i,o){var a=2;if(r=e,typeof e=="function")Bc(e)&&(a=1);else if(typeof e=="string")a=5;else e:switch(e){case Mr:return pr(n.children,i,o,t);case sc:a=8,i|=8;break;case Hl:return e=Dt(12,n,t,i|2),e.elementType=Hl,e.lanes=o,e;case $l:return e=Dt(13,n,t,i),e.elementType=$l,e.lanes=o,e;case Yl:return e=Dt(19,n,t,i),e.elementType=Yl,e.lanes=o,e;case bh:return xs(n,i,o,t);default:if(typeof e=="object"&&e!==null)switch(e.$$typeof){case yh:a=10;break e;case wh:a=9;break e;case lc:a=11;break e;case uc:a=14;break e;case Nn:a=16,r=null;break e}throw Error(z(130,e==null?e:typeof e,""))}return t=Dt(a,n,t,i),t.elementType=e,t.type=r,t.lanes=o,t}function pr(e,t,n,r){return e=Dt(7,e,r,t),e.lanes=n,e}function xs(e,t,n,r){return e=Dt(22,e,r,t),e.elementType=bh,e.lanes=n,e.stateNode={isHidden:!1},e}function ml(e,t,n){return e=Dt(6,e,null,t),e.lanes=n,e}function gl(e,t,n){return t=Dt(4,e.children!==null?e.children:[],e.key,t),t.lanes=n,t.stateNode={containerInfo:e.containerInfo,pendingChildren:null,implementation:e.implementation},t}function Ny(e,t,n,r,i){this.tag=t,this.containerInfo=e,this.finishedWork=this.pingCache=this.current=this.pendingChildren=null,this.timeoutHandle=-1,this.callbackNode=this.pendingContext=this.context=null,this.callbackPriority=0,this.eventTimes=Js(0),this.expirationTimes=Js(-1),this.entangledLanes=this.finishedLanes=this.mutableReadLanes=this.expiredLanes=this.pingedLanes=this.suspendedLanes=this.pendingLanes=0,this.entanglements=Js(0),this.identifierPrefix=r,this.onRecoverableError=i,this.mutableSourceEagerHydrationData=null}function Hc(e,t,n,r,i,o,a,l,s){return e=new Ny(e,t,n,l,s),t===1?(t=1,o===!0&&(t|=8)):t=0,o=Dt(3,null,null,t),e.current=o,o.stateNode=e,o.memoizedState={element:r,isDehydrated:n,cache:null,transitions:null,pendingSuspenseBoundaries:null},Cc(o),e}function Vy(e,t,n){var r=3<arguments.length&&arguments[3]!==void 0?arguments[3]:null;return{$$typeof:_r,key:r==null?null:""+r,children:e,containerInfo:t,implementation:n}}function pg(e){if(!e)return nr;e=e._reactInternals;e:{if(Sr(e)!==e||e.tag!==1)throw Error(z(170));var t=e;do{switch(t.tag){case 3:t=t.stateNode.context;break e;case 1:if(vt(t.type)){t=t.stateNode.__reactInternalMemoizedMergedChildContext;break e}}t=t.return}while(t!==null);throw Error(z(171))}if(e.tag===1){var n=e.type;if(vt(n))return fm(e,n,t)}return t}function hg(e,t,n,r,i,o,a,l,s){return e=Hc(n,r,!0,e,i,o,a,l,s),e.context=pg(null),n=e.current,r=dt(),i=Zn(n),o=wn(r,i),o.callback=t??null,qn(n,o,i),e.current.lanes=i,fo(e,i,r),yt(e,r),e}function vs(e,t,n,r){var i=t.current,o=dt(),a=Zn(i);return n=pg(n),t.context===null?t.context=n:t.pendingContext=n,t=wn(o,a),t.payload={element:e},r=r===void 0?null:r,r!==null&&(t.callback=r),e=qn(i,t,a),e!==null&&(Jt(e,i,a,o),ia(e,i,a)),a}function $a(e){if(e=e.current,!e.child)return null;switch(e.child.tag){case 5:return e.child.stateNode;default:return e.child.stateNode}}function Af(e,t){if(e=e.memoizedState,e!==null&&e.dehydrated!==null){var n=e.retryLane;e.retryLane=n!==0&&n<t?n:t}}function $c(e,t){Af(e,t),(e=e.alternate)&&Af(e,t)}function Uy(){return null}var mg=typeof reportError=="function"?reportError:function(e){console.error(e)};function Yc(e){this._internalRoot=e}ys.prototype.render=Yc.prototype.render=function(e){var t=this._internalRoot;if(t===null)throw Error(z(409));vs(e,t,null,null)};ys.prototype.unmount=Yc.prototype.unmount=function(){var e=this._internalRoot;if(e!==null){this._internalRoot=null;var t=e.containerInfo;yr(function(){vs(null,e,null,null)}),t[jn]=null}};function ys(e){this._internalRoot=e}ys.prototype.unstable_scheduleHydration=function(e){if(e){var t=$h();e={blockedOn:null,target:e,priority:t};for(var n=0;n<Un.length&&t!==0&&t<Un[n].priority;n++);Un.splice(n,0,e),n===0&&Xh(e)}};function Xc(e){return!(!e||e.nodeType!==1&&e.nodeType!==9&&e.nodeType!==11)}function ws(e){return!(!e||e.nodeType!==1&&e.nodeType!==9&&e.nodeType!==11&&(e.nodeType!==8||e.nodeValue!==" react-mount-point-unstable "))}function Rf(){}function Wy(e,t,n,r,i){if(i){if(typeof r=="function"){var o=r;r=function(){var u=$a(a);o.call(u)}}var a=hg(t,r,e,0,null,!1,!1,"",Rf);return e._reactRootContainer=a,e[jn]=a.current,qi(e.nodeType===8?e.parentNode:e),yr(),a}for(;i=e.lastChild;)e.removeChild(i);if(typeof r=="function"){var l=r;r=function(){var u=$a(s);l.call(u)}}var s=Hc(e,0,!1,null,null,!1,!1,"",Rf);return e._reactRootContainer=s,e[jn]=s.current,qi(e.nodeType===8?e.parentNode:e),yr(function(){vs(t,s,n,r)}),s}function bs(e,t,n,r,i){var o=n._reactRootContainer;if(o){var a=o;if(typeof i=="function"){var l=i;i=function(){var s=$a(a);l.call(s)}}vs(t,a,e,i)}else a=Wy(n,t,e,i,r);return $a(a)}Bh=function(e){switch(e.tag){case 3:var t=e.stateNode;if(t.current.memoizedState.isDehydrated){var n=Pi(t.pendingLanes);n!==0&&(fc(t,n|1),yt(t,Fe()),!(me&6)&&(ni=Fe()+500,or()))}break;case 13:yr(function(){var r=On(e,1);if(r!==null){var i=dt();Jt(r,e,1,i)}}),$c(e,1)}};pc=function(e){if(e.tag===13){var t=On(e,134217728);if(t!==null){var n=dt();Jt(t,e,134217728,n)}$c(e,134217728)}};Hh=function(e){if(e.tag===13){var t=Zn(e),n=On(e,t);if(n!==null){var r=dt();Jt(n,e,t,r)}$c(e,t)}};$h=function(){return we};Yh=function(e,t){var n=we;try{return we=e,t()}finally{we=n}};nu=function(e,t,n){switch(t){case"input":if(Kl(e,n),t=n.name,n.type==="radio"&&t!=null){for(n=e;n.parentNode;)n=n.parentNode;for(n=n.querySelectorAll("input[name="+JSON.stringify(""+t)+'][type="radio"]'),t=0;t<n.length;t++){var r=n[t];if(r!==e&&r.form===e.form){var i=ds(r);if(!i)throw Error(z(90));kh(r),Kl(r,i)}}}break;case"textarea":Oh(e,n);break;case"select":t=n.value,t!=null&&Br(e,!!n.multiple,t,!1)}};Ah=Vc;Rh=yr;var By={usingClientEntryPoint:!1,Events:[ho,Lr,ds,_h,Mh,Vc]},vi={findFiberByHostInstance:lr,bundleType:0,version:"18.2.0",rendererPackageName:"react-dom"},Hy={bundleType:vi.bundleType,version:vi.version,rendererPackageName:vi.rendererPackageName,rendererConfig:vi.rendererConfig,overrideHookState:null,overrideHookStateDeletePath:null,overrideHookStateRenamePath:null,overrideProps:null,overridePropsDeletePath:null,overridePropsRenamePath:null,setErrorHandler:null,setSuspenseHandler:null,scheduleUpdate:null,currentDispatcherRef:Cn.ReactCurrentDispatcher,findHostInstanceByFiber:function(e){return e=Dh(e),e===null?null:e.stateNode},findFiberByHostInstance:vi.findFiberByHostInstance||Uy,findHostInstancesForRefresh:null,scheduleRefresh:null,scheduleRoot:null,setRefreshHandler:null,getCurrentFiber:null,reconcilerVersion:"18.2.0-next-9e3b772b8-20220608"};if(typeof __REACT_DEVTOOLS_GLOBAL_HOOK__<"u"){var Fo=__REACT_DEVTOOLS_GLOBAL_HOOK__;if(!Fo.isDisabled&&Fo.supportsFiber)try{ss=Fo.inject(Hy),un=Fo}catch{}}Ct.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED=By;Ct.createPortal=function(e,t){var n=2<arguments.length&&arguments[2]!==void 0?arguments[2]:null;if(!Xc(t))throw Error(z(200));return Vy(e,t,null,n)};Ct.createRoot=function(e,t){if(!Xc(e))throw Error(z(299));var n=!1,r="",i=mg;return t!=null&&(t.unstable_strictMode===!0&&(n=!0),t.identifierPrefix!==void 0&&(r=t.identifierPrefix),t.onRecoverableError!==void 0&&(i=t.onRecoverableError)),t=Hc(e,1,!1,null,null,n,!1,r,i),e[jn]=t.current,qi(e.nodeType===8?e.parentNode:e),new Yc(t)};Ct.findDOMNode=function(e){if(e==null)return null;if(e.nodeType===1)return e;var t=e._reactInternals;if(t===void 0)throw typeof e.render=="function"?Error(z(188)):(e=Object.keys(e).join(","),Error(z(268,e)));return e=Dh(t),e=e===null?null:e.stateNode,e};Ct.flushSync=function(e){return yr(e)};Ct.hydrate=function(e,t,n){if(!ws(t))throw Error(z(200));return bs(null,e,t,!0,n)};Ct.hydrateRoot=function(e,t,n){if(!Xc(e))throw Error(z(405));var r=n!=null&&n.hydratedSources||null,i=!1,o="",a=mg;if(n!=null&&(n.unstable_strictMode===!0&&(i=!0),n.identifierPrefix!==void 0&&(o=n.identifierPrefix),n.onRecoverableError!==void 0&&(a=n.onRecoverableError)),t=hg(t,null,e,1,n??null,i,!1,o,a),e[jn]=t.current,qi(e),r)for(e=0;e<r.length;e++)n=r[e],i=n._getVersion,i=i(n._source),t.mutableSourceEagerHydrationData==null?t.mutableSourceEagerHydrationData=[n,i]:t.mutableSourceEagerHydrationData.push(n,i);return new ys(t)};Ct.render=function(e,t,n){if(!ws(t))throw Error(z(200));return bs(null,e,t,!1,n)};Ct.unmountComponentAtNode=function(e){if(!ws(e))throw Error(z(40));return e._reactRootContainer?(yr(function(){bs(null,null,e,!1,function(){e._reactRootContainer=null,e[jn]=null})}),!0):!1};Ct.unstable_batchedUpdates=Vc;Ct.unstable_renderSubtreeIntoContainer=function(e,t,n,r){if(!ws(n))throw Error(z(200));if(e==null||e._reactInternals===void 0)throw Error(z(38));return bs(e,t,n,!1,r)};Ct.version="18.2.0-next-9e3b772b8-20220608";function gg(){if(!(typeof __REACT_DEVTOOLS_GLOBAL_HOOK__>"u"||typeof __REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE!="function"))try{__REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE(gg)}catch(e){console.error(e)}}gg(),hh.exports=Ct;var go=hh.exports;const $y=oi(go);var If=go;Wl.createRoot=If.createRoot,Wl.hydrateRoot=If.hydrateRoot;var xg={exports:{}};(function(e,t){(function(r,i){e.exports=i(L)})(rh,n=>(()=>{var r={"./node_modules/css-mediaquery/index.js":(l,s)=>{s.match=m,s.parse=v;var u=/(?:(only|not)?\s*([^\s\(\)]+)(?:\s*and)?\s*)?(.+)?/i,p=/\(\s*([^\s\:\)]+)\s*(?:\:\s*([^\s\)]+))?\s*\)/,h=/^(?:(min|max)-)?(.+)/,x=/(em|rem|px|cm|mm|in|pt|pc)?$/,y=/(dpi|dpcm|dppx)?$/;function m(g,w){return v(g).some(function(S){var T=S.inverse,C=S.type==="all"||w.type===S.type;if(C&&T||!(C||T))return!1;var j=S.expressions.every(function(O){var _=O.feature,M=O.modifier,R=O.value,I=w[_];if(!I)return!1;switch(_){case"orientation":case"scan":return I.toLowerCase()===R.toLowerCase();case"width":case"height":case"device-width":case"device-height":R=f(R),I=f(I);break;case"resolution":R=d(R),I=d(I);break;case"aspect-ratio":case"device-aspect-ratio":case"device-pixel-ratio":R=b(R),I=b(I);break;case"grid":case"color":case"color-index":case"monochrome":R=parseInt(R,10)||1,I=parseInt(I,10)||0;break}switch(M){case"min":return I>=R;case"max":return I<=R;default:return I===R}});return j&&!T||!j&&T})}function v(g){return g.split(",").map(function(w){w=w.trim();var S=w.match(u),T=S[1],C=S[2],j=S[3]||"",O={};return O.inverse=!!T&&T.toLowerCase()==="not",O.type=C?C.toLowerCase():"all",j=j.match(/\([^\)]+\)/g)||[],O.expressions=j.map(function(_){var M=_.match(p),R=M[1].toLowerCase().match(h);return{modifier:R[1],feature:R[2],value:M[2]}}),O})}function b(g){var w=Number(g),S;return w||(S=g.match(/^(\d+)\s*\/\s*(\d+)$/),w=S[1]/S[2]),w}function d(g){var w=parseFloat(g),S=String(g).match(y)[1];switch(S){case"dpcm":return w/2.54;case"dppx":return w*96;default:return w}}function f(g){var w=parseFloat(g),S=String(g).match(x)[1];switch(S){case"em":return w*16;case"rem":return w*16;case"cm":return w*96/2.54;case"mm":return w*96/2.54/10;case"in":return w*96;case"pt":return w*72;case"pc":return w*72/12;default:return w}}},"./node_modules/hyphenate-style-name/index.js":(l,s,u)=>{u.r(s),u.d(s,{default:()=>v});var p=/[A-Z]/g,h=/^ms-/,x={};function y(b){return"-"+b.toLowerCase()}function m(b){if(x.hasOwnProperty(b))return x[b];var d=b.replace(p,y);return x[b]=h.test(d)?"-"+d:d}const v=m},"./node_modules/matchmediaquery/index.js":(l,s,u)=>{var p=u("./node_modules/css-mediaquery/index.js").match,h=typeof window<"u"?window.matchMedia:null;function x(m,v,b){var d=this;if(h&&!b){var f=h.call(window,m);this.matches=f.matches,this.media=f.media,f.addListener(S)}else this.matches=p(m,v),this.media=m;this.addListener=g,this.removeListener=w,this.dispose=T;function g(C){f&&f.addListener(C)}function w(C){f&&f.removeListener(C)}function S(C){d.matches=C.matches,d.media=C.media}function T(){f&&f.removeListener(S)}}function y(m,v,b){return new x(m,v,b)}l.exports=y},"./node_modules/object-assign/index.js":l=>{/*
object-assign
(c) Sindre Sorhus
@license MIT
*/var s=Object.getOwnPropertySymbols,u=Object.prototype.hasOwnProperty,p=Object.prototype.propertyIsEnumerable;function h(y){if(y==null)throw new TypeError("Object.assign cannot be called with null or undefined");return Object(y)}function x(){try{if(!Object.assign)return!1;var y=new String("abc");if(y[5]="de",Object.getOwnPropertyNames(y)[0]==="5")return!1;for(var m={},v=0;v<10;v++)m["_"+String.fromCharCode(v)]=v;var b=Object.getOwnPropertyNames(m).map(function(f){return m[f]});if(b.join("")!=="0123456789")return!1;var d={};return"abcdefghijklmnopqrst".split("").forEach(function(f){d[f]=f}),Object.keys(Object.assign({},d)).join("")==="abcdefghijklmnopqrst"}catch{return!1}}l.exports=x()?Object.assign:function(y,m){for(var v,b=h(y),d,f=1;f<arguments.length;f++){v=Object(arguments[f]);for(var g in v)u.call(v,g)&&(b[g]=v[g]);if(s){d=s(v);for(var w=0;w<d.length;w++)p.call(v,d[w])&&(b[d[w]]=v[d[w]])}}return b}},"./node_modules/prop-types/checkPropTypes.js":(l,s,u)=>{var p=function(){};{var h=u("./node_modules/prop-types/lib/ReactPropTypesSecret.js"),x={},y=u("./node_modules/prop-types/lib/has.js");p=function(v){var b="Warning: "+v;typeof console<"u"&&console.error(b);try{throw new Error(b)}catch{}}}function m(v,b,d,f,g){for(var w in v)if(y(v,w)){var S;try{if(typeof v[w]!="function"){var T=Error((f||"React class")+": "+d+" type `"+w+"` is invalid; it must be a function, usually from the `prop-types` package, but received `"+typeof v[w]+"`.This often happens because of typos such as `PropTypes.function` instead of `PropTypes.func`.");throw T.name="Invariant Violation",T}S=v[w](b,w,f,d,null,h)}catch(j){S=j}if(S&&!(S instanceof Error)&&p((f||"React class")+": type specification of "+d+" `"+w+"` is invalid; the type checker function must return `null` or an `Error` but returned a "+typeof S+". You may have forgotten to pass an argument to the type checker creator (arrayOf, instanceOf, objectOf, oneOf, oneOfType, and shape all require an argument)."),S instanceof Error&&!(S.message in x)){x[S.message]=!0;var C=g?g():"";p("Failed "+d+" type: "+S.message+(C??""))}}}m.resetWarningCache=function(){x={}},l.exports=m},"./node_modules/prop-types/factoryWithTypeCheckers.js":(l,s,u)=>{var p=u("./node_modules/react-is/index.js"),h=u("./node_modules/object-assign/index.js"),x=u("./node_modules/prop-types/lib/ReactPropTypesSecret.js"),y=u("./node_modules/prop-types/lib/has.js"),m=u("./node_modules/prop-types/checkPropTypes.js"),v=function(){};v=function(d){var f="Warning: "+d;typeof console<"u"&&console.error(f);try{throw new Error(f)}catch{}};function b(){return null}l.exports=function(d,f){var g=typeof Symbol=="function"&&Symbol.iterator,w="@@iterator";function S(F){var Y=F&&(g&&F[g]||F[w]);if(typeof Y=="function")return Y}var T="<<anonymous>>",C={array:M("array"),bigint:M("bigint"),bool:M("boolean"),func:M("function"),number:M("number"),object:M("object"),string:M("string"),symbol:M("symbol"),any:R(),arrayOf:I,element:W(),elementType:$(),instanceOf:ee,node:K(),objectOf:N,oneOf:ge,oneOfType:Q,shape:re,exact:Ce};function j(F,Y){return F===Y?F!==0||1/F===1/Y:F!==F&&Y!==Y}function O(F,Y){this.message=F,this.data=Y&&typeof Y=="object"?Y:{},this.stack=""}O.prototype=Error.prototype;function _(F){var Y={},ae=0;function oe(le,se,ue,he,ye,k,E){if(he=he||T,k=k||ue,E!==x){if(f){var A=new Error("Calling PropTypes validators directly is not supported by the `prop-types` package. Use `PropTypes.checkPropTypes()` to call them. Read more at http://fb.me/use-check-prop-types");throw A.name="Invariant Violation",A}else if(typeof console<"u"){var B=he+":"+ue;!Y[B]&&ae<3&&(v("You are manually calling a React.PropTypes validation function for the `"+k+"` prop on `"+he+"`. This is deprecated and will throw in the standalone `prop-types` package. You may be seeing this warning due to a third-party PropTypes library. See https://fb.me/react-warning-dont-call-proptypes for details."),Y[B]=!0,ae++)}}return se[ue]==null?le?se[ue]===null?new O("The "+ye+" `"+k+"` is marked as required "+("in `"+he+"`, but its value is `null`.")):new O("The "+ye+" `"+k+"` is marked as required in "+("`"+he+"`, but its value is `undefined`.")):null:F(se,ue,he,ye,k)}var ie=oe.bind(null,!1);return ie.isRequired=oe.bind(null,!0),ie}function M(F){function Y(ae,oe,ie,le,se,ue){var he=ae[oe],ye=pe(he);if(ye!==F){var k=_e(he);return new O("Invalid "+le+" `"+se+"` of type "+("`"+k+"` supplied to `"+ie+"`, expected ")+("`"+F+"`."),{expectedType:F})}return null}return _(Y)}function R(){return _(b)}function I(F){function Y(ae,oe,ie,le,se){if(typeof F!="function")return new O("Property `"+se+"` of component `"+ie+"` has invalid PropType notation inside arrayOf.");var ue=ae[oe];if(!Array.isArray(ue)){var he=pe(ue);return new O("Invalid "+le+" `"+se+"` of type "+("`"+he+"` supplied to `"+ie+"`, expected an array."))}for(var ye=0;ye<ue.length;ye++){var k=F(ue,ye,ie,le,se+"["+ye+"]",x);if(k instanceof Error)return k}return null}return _(Y)}function W(){function F(Y,ae,oe,ie,le){var se=Y[ae];if(!d(se)){var ue=pe(se);return new O("Invalid "+ie+" `"+le+"` of type "+("`"+ue+"` supplied to `"+oe+"`, expected a single ReactElement."))}return null}return _(F)}function $(){function F(Y,ae,oe,ie,le){var se=Y[ae];if(!p.isValidElementType(se)){var ue=pe(se);return new O("Invalid "+ie+" `"+le+"` of type "+("`"+ue+"` supplied to `"+oe+"`, expected a single ReactElement type."))}return null}return _(F)}function ee(F){function Y(ae,oe,ie,le,se){if(!(ae[oe]instanceof F)){var ue=F.name||T,he=_t(ae[oe]);return new O("Invalid "+le+" `"+se+"` of type "+("`"+he+"` supplied to `"+ie+"`, expected ")+("instance of `"+ue+"`."))}return null}return _(Y)}function ge(F){if(!Array.isArray(F))return arguments.length>1?v("Invalid arguments supplied to oneOf, expected an array, got "+arguments.length+" arguments. A common mistake is to write oneOf(x, y, z) instead of oneOf([x, y, z])."):v("Invalid argument supplied to oneOf, expected an array."),b;function Y(ae,oe,ie,le,se){for(var ue=ae[oe],he=0;he<F.length;he++)if(j(ue,F[he]))return null;var ye=JSON.stringify(F,function(E,A){var B=_e(A);return B==="symbol"?String(A):A});return new O("Invalid "+le+" `"+se+"` of value `"+String(ue)+"` "+("supplied to `"+ie+"`, expected one of "+ye+"."))}return _(Y)}function N(F){function Y(ae,oe,ie,le,se){if(typeof F!="function")return new O("Property `"+se+"` of component `"+ie+"` has invalid PropType notation inside objectOf.");var ue=ae[oe],he=pe(ue);if(he!=="object")return new O("Invalid "+le+" `"+se+"` of type "+("`"+he+"` supplied to `"+ie+"`, expected an object."));for(var ye in ue)if(y(ue,ye)){var k=F(ue,ye,ie,le,se+"."+ye,x);if(k instanceof Error)return k}return null}return _(Y)}function Q(F){if(!Array.isArray(F))return v("Invalid argument supplied to oneOfType, expected an instance of array."),b;for(var Y=0;Y<F.length;Y++){var ae=F[Y];if(typeof ae!="function")return v("Invalid argument supplied to oneOfType. Expected an array of check functions, but received "+Je(ae)+" at index "+Y+"."),b}function oe(ie,le,se,ue,he){for(var ye=[],k=0;k<F.length;k++){var E=F[k],A=E(ie,le,se,ue,he,x);if(A==null)return null;A.data&&y(A.data,"expectedType")&&ye.push(A.data.expectedType)}var B=ye.length>0?", expected one of type ["+ye.join(", ")+"]":"";return new O("Invalid "+ue+" `"+he+"` supplied to "+("`"+se+"`"+B+"."))}return _(oe)}function K(){function F(Y,ae,oe,ie,le){return Se(Y[ae])?null:new O("Invalid "+ie+" `"+le+"` supplied to "+("`"+oe+"`, expected a ReactNode."))}return _(F)}function de(F,Y,ae,oe,ie){return new O((F||"React class")+": "+Y+" type `"+ae+"."+oe+"` is invalid; it must be a function, usually from the `prop-types` package, but received `"+ie+"`.")}function re(F){function Y(ae,oe,ie,le,se){var ue=ae[oe],he=pe(ue);if(he!=="object")return new O("Invalid "+le+" `"+se+"` of type `"+he+"` "+("supplied to `"+ie+"`, expected `object`."));for(var ye in F){var k=F[ye];if(typeof k!="function")return de(ie,le,se,ye,_e(k));var E=k(ue,ye,ie,le,se+"."+ye,x);if(E)return E}return null}return _(Y)}function Ce(F){function Y(ae,oe,ie,le,se){var ue=ae[oe],he=pe(ue);if(he!=="object")return new O("Invalid "+le+" `"+se+"` of type `"+he+"` "+("supplied to `"+ie+"`, expected `object`."));var ye=h({},ae[oe],F);for(var k in ye){var E=F[k];if(y(F,k)&&typeof E!="function")return de(ie,le,se,k,_e(E));if(!E)return new O("Invalid "+le+" `"+se+"` key `"+k+"` supplied to `"+ie+"`.\nBad object: "+JSON.stringify(ae[oe],null,"  ")+`
Valid keys: `+JSON.stringify(Object.keys(F),null,"  "));var A=E(ue,k,ie,le,se+"."+k,x);if(A)return A}return null}return _(Y)}function Se(F){switch(typeof F){case"number":case"string":case"undefined":return!0;case"boolean":return!F;case"object":if(Array.isArray(F))return F.every(Se);if(F===null||d(F))return!0;var Y=S(F);if(Y){var ae=Y.call(F),oe;if(Y!==F.entries){for(;!(oe=ae.next()).done;)if(!Se(oe.value))return!1}else for(;!(oe=ae.next()).done;){var ie=oe.value;if(ie&&!Se(ie[1]))return!1}}else return!1;return!0;default:return!1}}function $e(F,Y){return F==="symbol"?!0:Y?Y["@@toStringTag"]==="Symbol"||typeof Symbol=="function"&&Y instanceof Symbol:!1}function pe(F){var Y=typeof F;return Array.isArray(F)?"array":F instanceof RegExp?"object":$e(Y,F)?"symbol":Y}function _e(F){if(typeof F>"u"||F===null)return""+F;var Y=pe(F);if(Y==="object"){if(F instanceof Date)return"date";if(F instanceof RegExp)return"regexp"}return Y}function Je(F){var Y=_e(F);switch(Y){case"array":case"object":return"an "+Y;case"boolean":case"date":case"regexp":return"a "+Y;default:return Y}}function _t(F){return!F.constructor||!F.constructor.name?T:F.constructor.name}return C.checkPropTypes=m,C.resetWarningCache=m.resetWarningCache,C.PropTypes=C,C}},"./node_modules/prop-types/index.js":(l,s,u)=>{{var p=u("./node_modules/react-is/index.js"),h=!0;l.exports=u("./node_modules/prop-types/factoryWithTypeCheckers.js")(p.isElement,h)}},"./node_modules/prop-types/lib/ReactPropTypesSecret.js":l=>{var s="SECRET_DO_NOT_PASS_THIS_OR_YOU_WILL_BE_FIRED";l.exports=s},"./node_modules/prop-types/lib/has.js":l=>{l.exports=Function.call.bind(Object.prototype.hasOwnProperty)},"./node_modules/react-is/cjs/react-is.development.js":(l,s)=>{/** @license React v16.13.1
 * react-is.development.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */(function(){var u=typeof Symbol=="function"&&Symbol.for,p=u?Symbol.for("react.element"):60103,h=u?Symbol.for("react.portal"):60106,x=u?Symbol.for("react.fragment"):60107,y=u?Symbol.for("react.strict_mode"):60108,m=u?Symbol.for("react.profiler"):60114,v=u?Symbol.for("react.provider"):60109,b=u?Symbol.for("react.context"):60110,d=u?Symbol.for("react.async_mode"):60111,f=u?Symbol.for("react.concurrent_mode"):60111,g=u?Symbol.for("react.forward_ref"):60112,w=u?Symbol.for("react.suspense"):60113,S=u?Symbol.for("react.suspense_list"):60120,T=u?Symbol.for("react.memo"):60115,C=u?Symbol.for("react.lazy"):60116,j=u?Symbol.for("react.block"):60121,O=u?Symbol.for("react.fundamental"):60117,_=u?Symbol.for("react.responder"):60118,M=u?Symbol.for("react.scope"):60119;function R(E){return typeof E=="string"||typeof E=="function"||E===x||E===f||E===m||E===y||E===w||E===S||typeof E=="object"&&E!==null&&(E.$$typeof===C||E.$$typeof===T||E.$$typeof===v||E.$$typeof===b||E.$$typeof===g||E.$$typeof===O||E.$$typeof===_||E.$$typeof===M||E.$$typeof===j)}function I(E){if(typeof E=="object"&&E!==null){var A=E.$$typeof;switch(A){case p:var B=E.type;switch(B){case d:case f:case x:case m:case y:case w:return B;default:var U=B&&B.$$typeof;switch(U){case b:case g:case C:case T:case v:return U;default:return A}}case h:return A}}}var W=d,$=f,ee=b,ge=v,N=p,Q=g,K=x,de=C,re=T,Ce=h,Se=m,$e=y,pe=w,_e=!1;function Je(E){return _e||(_e=!0,console.warn("The ReactIs.isAsyncMode() alias has been deprecated, and will be removed in React 17+. Update your code to use ReactIs.isConcurrentMode() instead. It has the exact same API.")),_t(E)||I(E)===d}function _t(E){return I(E)===f}function F(E){return I(E)===b}function Y(E){return I(E)===v}function ae(E){return typeof E=="object"&&E!==null&&E.$$typeof===p}function oe(E){return I(E)===g}function ie(E){return I(E)===x}function le(E){return I(E)===C}function se(E){return I(E)===T}function ue(E){return I(E)===h}function he(E){return I(E)===m}function ye(E){return I(E)===y}function k(E){return I(E)===w}s.AsyncMode=W,s.ConcurrentMode=$,s.ContextConsumer=ee,s.ContextProvider=ge,s.Element=N,s.ForwardRef=Q,s.Fragment=K,s.Lazy=de,s.Memo=re,s.Portal=Ce,s.Profiler=Se,s.StrictMode=$e,s.Suspense=pe,s.isAsyncMode=Je,s.isConcurrentMode=_t,s.isContextConsumer=F,s.isContextProvider=Y,s.isElement=ae,s.isForwardRef=oe,s.isFragment=ie,s.isLazy=le,s.isMemo=se,s.isPortal=ue,s.isProfiler=he,s.isStrictMode=ye,s.isSuspense=k,s.isValidElementType=R,s.typeOf=I})()},"./node_modules/react-is/index.js":(l,s,u)=>{l.exports=u("./node_modules/react-is/cjs/react-is.development.js")},"./node_modules/shallow-equal/dist/index.esm.js":(l,s,u)=>{u.r(s),u.d(s,{shallowEqualArrays:()=>h,shallowEqualObjects:()=>p});function p(x,y){if(x===y)return!0;if(!x||!y)return!1;var m=Object.keys(x),v=Object.keys(y),b=m.length;if(v.length!==b)return!1;for(var d=0;d<b;d++){var f=m[d];if(x[f]!==y[f]||!Object.prototype.hasOwnProperty.call(y,f))return!1}return!0}function h(x,y){if(x===y)return!0;if(!x||!y)return!1;var m=x.length;if(y.length!==m)return!1;for(var v=0;v<m;v++)if(x[v]!==y[v])return!1;return!0}},"./src/Component.ts":function(l,s,u){var p=this&&this.__rest||function(m,v){var b={};for(var d in m)Object.prototype.hasOwnProperty.call(m,d)&&v.indexOf(d)<0&&(b[d]=m[d]);if(m!=null&&typeof Object.getOwnPropertySymbols=="function")for(var f=0,d=Object.getOwnPropertySymbols(m);f<d.length;f++)v.indexOf(d[f])<0&&Object.prototype.propertyIsEnumerable.call(m,d[f])&&(b[d[f]]=m[d[f]]);return b},h=this&&this.__importDefault||function(m){return m&&m.__esModule?m:{default:m}};Object.defineProperty(s,"__esModule",{value:!0});var x=h(u("./src/useMediaQuery.ts")),y=function(m){var v=m.children,b=m.device,d=m.onChange,f=p(m,["children","device","onChange"]),g=(0,x.default)(f,b,d);return typeof v=="function"?v(g):g?v:null};s.default=y},"./src/Context.ts":(l,s,u)=>{Object.defineProperty(s,"__esModule",{value:!0});var p=u("react"),h=(0,p.createContext)(void 0);s.default=h},"./src/index.ts":function(l,s,u){var p=this&&this.__importDefault||function(v){return v&&v.__esModule?v:{default:v}};Object.defineProperty(s,"__esModule",{value:!0}),s.Context=s.toQuery=s.useMediaQuery=s.default=void 0;var h=p(u("./src/useMediaQuery.ts"));s.useMediaQuery=h.default;var x=p(u("./src/Component.ts"));s.default=x.default;var y=p(u("./src/toQuery.ts"));s.toQuery=y.default;var m=p(u("./src/Context.ts"));s.Context=m.default},"./src/mediaQuery.ts":function(l,s,u){var p=this&&this.__assign||function(){return p=Object.assign||function(w){for(var S,T=1,C=arguments.length;T<C;T++){S=arguments[T];for(var j in S)Object.prototype.hasOwnProperty.call(S,j)&&(w[j]=S[j])}return w},p.apply(this,arguments)},h=this&&this.__rest||function(w,S){var T={};for(var C in w)Object.prototype.hasOwnProperty.call(w,C)&&S.indexOf(C)<0&&(T[C]=w[C]);if(w!=null&&typeof Object.getOwnPropertySymbols=="function")for(var j=0,C=Object.getOwnPropertySymbols(w);j<C.length;j++)S.indexOf(C[j])<0&&Object.prototype.propertyIsEnumerable.call(w,C[j])&&(T[C[j]]=w[C[j]]);return T},x=this&&this.__importDefault||function(w){return w&&w.__esModule?w:{default:w}};Object.defineProperty(s,"__esModule",{value:!0});var y=x(u("./node_modules/prop-types/index.js")),m=y.default.oneOfType([y.default.string,y.default.number]),v={all:y.default.bool,grid:y.default.bool,aural:y.default.bool,braille:y.default.bool,handheld:y.default.bool,print:y.default.bool,projection:y.default.bool,screen:y.default.bool,tty:y.default.bool,tv:y.default.bool,embossed:y.default.bool},b={orientation:y.default.oneOf(["portrait","landscape"]),scan:y.default.oneOf(["progressive","interlace"]),aspectRatio:y.default.string,deviceAspectRatio:y.default.string,height:m,deviceHeight:m,width:m,deviceWidth:m,color:y.default.bool,colorIndex:y.default.bool,monochrome:y.default.bool,resolution:m,type:Object.keys(v)};b.type;var d=h(b,["type"]),f=p({minAspectRatio:y.default.string,maxAspectRatio:y.default.string,minDeviceAspectRatio:y.default.string,maxDeviceAspectRatio:y.default.string,minHeight:m,maxHeight:m,minDeviceHeight:m,maxDeviceHeight:m,minWidth:m,maxWidth:m,minDeviceWidth:m,maxDeviceWidth:m,minColor:y.default.number,maxColor:y.default.number,minColorIndex:y.default.number,maxColorIndex:y.default.number,minMonochrome:y.default.number,maxMonochrome:y.default.number,minResolution:m,maxResolution:m},d),g=p(p({},v),f);s.default={all:g,types:v,matchers:b,features:f}},"./src/toQuery.ts":function(l,s,u){var p=this&&this.__importDefault||function(d){return d&&d.__esModule?d:{default:d}};Object.defineProperty(s,"__esModule",{value:!0});var h=p(u("./node_modules/hyphenate-style-name/index.js")),x=p(u("./src/mediaQuery.ts")),y=function(d){return"not ".concat(d)},m=function(d,f){var g=(0,h.default)(d);return typeof f=="number"&&(f="".concat(f,"px")),f===!0?g:f===!1?y(g):"(".concat(g,": ").concat(f,")")},v=function(d){return d.join(" and ")},b=function(d){var f=[];return Object.keys(x.default.all).forEach(function(g){var w=d[g];w!=null&&f.push(m(g,w))}),v(f)};s.default=b},"./src/useMediaQuery.ts":function(l,s,u){var p=this&&this.__importDefault||function(O){return O&&O.__esModule?O:{default:O}};Object.defineProperty(s,"__esModule",{value:!0});var h=u("react"),x=p(u("./node_modules/matchmediaquery/index.js")),y=p(u("./node_modules/hyphenate-style-name/index.js")),m=u("./node_modules/shallow-equal/dist/index.esm.js"),v=p(u("./src/toQuery.ts")),b=p(u("./src/Context.ts")),d=function(O){return O.query||(0,v.default)(O)},f=function(O){if(O){var _=Object.keys(O);return _.reduce(function(M,R){return M[(0,y.default)(R)]=O[R],M},{})}},g=function(){var O=(0,h.useRef)(!1);return(0,h.useEffect)(function(){O.current=!0},[]),O.current},w=function(O){var _=(0,h.useContext)(b.default),M=function(){return f(O)||f(_)},R=(0,h.useState)(M),I=R[0],W=R[1];return(0,h.useEffect)(function(){var $=M();(0,m.shallowEqualObjects)(I,$)||W($)},[O,_]),I},S=function(O){var _=function(){return d(O)},M=(0,h.useState)(_),R=M[0],I=M[1];return(0,h.useEffect)(function(){var W=_();R!==W&&I(W)},[O]),R},T=function(O,_){var M=function(){return(0,x.default)(O,_||{},!!_)},R=(0,h.useState)(M),I=R[0],W=R[1],$=g();return(0,h.useEffect)(function(){if($){var ee=M();return W(ee),function(){ee&&ee.dispose()}}},[O,_]),I},C=function(O){var _=(0,h.useState)(O.matches),M=_[0],R=_[1];return(0,h.useEffect)(function(){var I=function(W){R(W.matches)};return O.addListener(I),R(O.matches),function(){O.removeListener(I)}},[O]),M},j=function(O,_,M){var R=w(_),I=S(O);if(!I)throw new Error("Invalid or missing MediaQuery!");var W=T(I,R),$=C(W),ee=g();return(0,h.useEffect)(function(){ee&&M&&M($)},[$]),(0,h.useEffect)(function(){return function(){W&&W.dispose()}},[]),$};s.default=j},react:l=>{l.exports=n}},i={};function o(l){var s=i[l];if(s!==void 0)return s.exports;var u=i[l]={exports:{}};return r[l].call(u.exports,u,u.exports,o),u.exports}o.d=(l,s)=>{for(var u in s)o.o(s,u)&&!o.o(l,u)&&Object.defineProperty(l,u,{enumerable:!0,get:s[u]})},o.o=(l,s)=>Object.prototype.hasOwnProperty.call(l,s),o.r=l=>{typeof Symbol<"u"&&Symbol.toStringTag&&Object.defineProperty(l,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(l,"__esModule",{value:!0})};var a=o("./src/index.ts");return a})())})(xg);var $n=xg.exports;const J=oi($n);function Z(){return Z=Object.assign?Object.assign.bind():function(e){for(var t=1;t<arguments.length;t++){var n=arguments[t];for(var r in n)Object.prototype.hasOwnProperty.call(n,r)&&(e[r]=n[r])}return e},Z.apply(this,arguments)}function vg(e){var t=Object.create(null);return function(n){return t[n]===void 0&&(t[n]=e(n)),t[n]}}var Yy=/^((children|dangerouslySetInnerHTML|key|ref|autoFocus|defaultValue|defaultChecked|innerHTML|suppressContentEditableWarning|suppressHydrationWarning|valueLink|abbr|accept|acceptCharset|accessKey|action|allow|allowUserMedia|allowPaymentRequest|allowFullScreen|allowTransparency|alt|async|autoComplete|autoPlay|capture|cellPadding|cellSpacing|challenge|charSet|checked|cite|classID|className|cols|colSpan|content|contentEditable|contextMenu|controls|controlsList|coords|crossOrigin|data|dateTime|decoding|default|defer|dir|disabled|disablePictureInPicture|download|draggable|encType|enterKeyHint|form|formAction|formEncType|formMethod|formNoValidate|formTarget|frameBorder|headers|height|hidden|high|href|hrefLang|htmlFor|httpEquiv|id|inputMode|integrity|is|keyParams|keyType|kind|label|lang|list|loading|loop|low|marginHeight|marginWidth|max|maxLength|media|mediaGroup|method|min|minLength|multiple|muted|name|nonce|noValidate|open|optimum|pattern|placeholder|playsInline|poster|preload|profile|radioGroup|readOnly|referrerPolicy|rel|required|reversed|role|rows|rowSpan|sandbox|scope|scoped|scrolling|seamless|selected|shape|size|sizes|slot|span|spellCheck|src|srcDoc|srcLang|srcSet|start|step|style|summary|tabIndex|target|title|translate|type|useMap|value|width|wmode|wrap|about|datatype|inlist|prefix|property|resource|typeof|vocab|autoCapitalize|autoCorrect|autoSave|color|incremental|fallback|inert|itemProp|itemScope|itemType|itemID|itemRef|on|option|results|security|unselectable|accentHeight|accumulate|additive|alignmentBaseline|allowReorder|alphabetic|amplitude|arabicForm|ascent|attributeName|attributeType|autoReverse|azimuth|baseFrequency|baselineShift|baseProfile|bbox|begin|bias|by|calcMode|capHeight|clip|clipPathUnits|clipPath|clipRule|colorInterpolation|colorInterpolationFilters|colorProfile|colorRendering|contentScriptType|contentStyleType|cursor|cx|cy|d|decelerate|descent|diffuseConstant|direction|display|divisor|dominantBaseline|dur|dx|dy|edgeMode|elevation|enableBackground|end|exponent|externalResourcesRequired|fill|fillOpacity|fillRule|filter|filterRes|filterUnits|floodColor|floodOpacity|focusable|fontFamily|fontSize|fontSizeAdjust|fontStretch|fontStyle|fontVariant|fontWeight|format|from|fr|fx|fy|g1|g2|glyphName|glyphOrientationHorizontal|glyphOrientationVertical|glyphRef|gradientTransform|gradientUnits|hanging|horizAdvX|horizOriginX|ideographic|imageRendering|in|in2|intercept|k|k1|k2|k3|k4|kernelMatrix|kernelUnitLength|kerning|keyPoints|keySplines|keyTimes|lengthAdjust|letterSpacing|lightingColor|limitingConeAngle|local|markerEnd|markerMid|markerStart|markerHeight|markerUnits|markerWidth|mask|maskContentUnits|maskUnits|mathematical|mode|numOctaves|offset|opacity|operator|order|orient|orientation|origin|overflow|overlinePosition|overlineThickness|panose1|paintOrder|pathLength|patternContentUnits|patternTransform|patternUnits|pointerEvents|points|pointsAtX|pointsAtY|pointsAtZ|preserveAlpha|preserveAspectRatio|primitiveUnits|r|radius|refX|refY|renderingIntent|repeatCount|repeatDur|requiredExtensions|requiredFeatures|restart|result|rotate|rx|ry|scale|seed|shapeRendering|slope|spacing|specularConstant|specularExponent|speed|spreadMethod|startOffset|stdDeviation|stemh|stemv|stitchTiles|stopColor|stopOpacity|strikethroughPosition|strikethroughThickness|string|stroke|strokeDasharray|strokeDashoffset|strokeLinecap|strokeLinejoin|strokeMiterlimit|strokeOpacity|strokeWidth|surfaceScale|systemLanguage|tableValues|targetX|targetY|textAnchor|textDecoration|textRendering|textLength|to|transform|u1|u2|underlinePosition|underlineThickness|unicode|unicodeBidi|unicodeRange|unitsPerEm|vAlphabetic|vHanging|vIdeographic|vMathematical|values|vectorEffect|version|vertAdvY|vertOriginX|vertOriginY|viewBox|viewTarget|visibility|widths|wordSpacing|writingMode|x|xHeight|x1|x2|xChannelSelector|xlinkActuate|xlinkArcrole|xlinkHref|xlinkRole|xlinkShow|xlinkTitle|xlinkType|xmlBase|xmlns|xmlnsXlink|xmlLang|xmlSpace|y|y1|y2|yChannelSelector|z|zoomAndPan|for|class|autofocus)|(([Dd][Aa][Tt][Aa]|[Aa][Rr][Ii][Aa]|x)-.*))$/,Xy=vg(function(e){return Yy.test(e)||e.charCodeAt(0)===111&&e.charCodeAt(1)===110&&e.charCodeAt(2)<91});function Qy(e){if(e.sheet)return e.sheet;for(var t=0;t<document.styleSheets.length;t++)if(document.styleSheets[t].ownerNode===e)return document.styleSheets[t]}function Ky(e){var t=document.createElement("style");return t.setAttribute("data-emotion",e.key),e.nonce!==void 0&&t.setAttribute("nonce",e.nonce),t.appendChild(document.createTextNode("")),t.setAttribute("data-s",""),t}var Jy=function(){function e(n){var r=this;this._insertTag=function(i){var o;r.tags.length===0?r.insertionPoint?o=r.insertionPoint.nextSibling:r.prepend?o=r.container.firstChild:o=r.before:o=r.tags[r.tags.length-1].nextSibling,r.container.insertBefore(i,o),r.tags.push(i)},this.isSpeedy=n.speedy===void 0?!0:n.speedy,this.tags=[],this.ctr=0,this.nonce=n.nonce,this.key=n.key,this.container=n.container,this.prepend=n.prepend,this.insertionPoint=n.insertionPoint,this.before=null}var t=e.prototype;return t.hydrate=function(r){r.forEach(this._insertTag)},t.insert=function(r){this.ctr%(this.isSpeedy?65e3:1)===0&&this._insertTag(Ky(this));var i=this.tags[this.tags.length-1];if(this.isSpeedy){var o=Qy(i);try{o.insertRule(r,o.cssRules.length)}catch{}}else i.appendChild(document.createTextNode(r));this.ctr++},t.flush=function(){this.tags.forEach(function(r){return r.parentNode&&r.parentNode.removeChild(r)}),this.tags=[],this.ctr=0},e}(),ot="-ms-",Ya="-moz-",xe="-webkit-",yg="comm",Qc="rule",Kc="decl",qy="@import",wg="@keyframes",Gy="@layer",Zy=Math.abs,Ss=String.fromCharCode,e1=Object.assign;function t1(e,t){return Ze(e,0)^45?(((t<<2^Ze(e,0))<<2^Ze(e,1))<<2^Ze(e,2))<<2^Ze(e,3):0}function bg(e){return e.trim()}function n1(e,t){return(e=t.exec(e))?e[0]:e}function ve(e,t,n){return e.replace(t,n)}function Lu(e,t){return e.indexOf(t)}function Ze(e,t){return e.charCodeAt(t)|0}function ao(e,t,n){return e.slice(t,n)}function rn(e){return e.length}function Jc(e){return e.length}function No(e,t){return t.push(e),e}function r1(e,t){return e.map(t).join("")}var ks=1,ri=1,Sg=0,wt=0,Ne=0,ui="";function js(e,t,n,r,i,o,a){return{value:e,root:t,parent:n,type:r,props:i,children:o,line:ks,column:ri,length:a,return:""}}function yi(e,t){return e1(js("",null,null,"",null,null,0),e,{length:-e.length},t)}function i1(){return Ne}function o1(){return Ne=wt>0?Ze(ui,--wt):0,ri--,Ne===10&&(ri=1,ks--),Ne}function jt(){return Ne=wt<Sg?Ze(ui,wt++):0,ri++,Ne===10&&(ri=1,ks++),Ne}function dn(){return Ze(ui,wt)}function da(){return wt}function xo(e,t){return ao(ui,e,t)}function so(e){switch(e){case 0:case 9:case 10:case 13:case 32:return 5;case 33:case 43:case 44:case 47:case 62:case 64:case 126:case 59:case 123:case 125:return 4;case 58:return 3;case 34:case 39:case 40:case 91:return 2;case 41:case 93:return 1}return 0}function kg(e){return ks=ri=1,Sg=rn(ui=e),wt=0,[]}function jg(e){return ui="",e}function fa(e){return bg(xo(wt-1,Du(e===91?e+2:e===40?e+1:e)))}function a1(e){for(;(Ne=dn())&&Ne<33;)jt();return so(e)>2||so(Ne)>3?"":" "}function s1(e,t){for(;--t&&jt()&&!(Ne<48||Ne>102||Ne>57&&Ne<65||Ne>70&&Ne<97););return xo(e,da()+(t<6&&dn()==32&&jt()==32))}function Du(e){for(;jt();)switch(Ne){case e:return wt;case 34:case 39:e!==34&&e!==39&&Du(Ne);break;case 40:e===41&&Du(e);break;case 92:jt();break}return wt}function l1(e,t){for(;jt()&&e+Ne!==57;)if(e+Ne===84&&dn()===47)break;return"/*"+xo(t,wt-1)+"*"+Ss(e===47?e:jt())}function u1(e){for(;!so(dn());)jt();return xo(e,wt)}function c1(e){return jg(pa("",null,null,null,[""],e=kg(e),0,[0],e))}function pa(e,t,n,r,i,o,a,l,s){for(var u=0,p=0,h=a,x=0,y=0,m=0,v=1,b=1,d=1,f=0,g="",w=i,S=o,T=r,C=g;b;)switch(m=f,f=jt()){case 40:if(m!=108&&Ze(C,h-1)==58){Lu(C+=ve(fa(f),"&","&\f"),"&\f")!=-1&&(d=-1);break}case 34:case 39:case 91:C+=fa(f);break;case 9:case 10:case 13:case 32:C+=a1(m);break;case 92:C+=s1(da()-1,7);continue;case 47:switch(dn()){case 42:case 47:No(d1(l1(jt(),da()),t,n),s);break;default:C+="/"}break;case 123*v:l[u++]=rn(C)*d;case 125*v:case 59:case 0:switch(f){case 0:case 125:b=0;case 59+p:d==-1&&(C=ve(C,/\f/g,"")),y>0&&rn(C)-h&&No(y>32?Df(C+";",r,n,h-1):Df(ve(C," ","")+";",r,n,h-2),s);break;case 59:C+=";";default:if(No(T=Lf(C,t,n,u,p,i,l,g,w=[],S=[],h),o),f===123)if(p===0)pa(C,t,T,T,w,o,h,l,S);else switch(x===99&&Ze(C,3)===110?100:x){case 100:case 108:case 109:case 115:pa(e,T,T,r&&No(Lf(e,T,T,0,0,i,l,g,i,w=[],h),S),i,S,h,l,r?w:S);break;default:pa(C,T,T,T,[""],S,0,l,S)}}u=p=y=0,v=d=1,g=C="",h=a;break;case 58:h=1+rn(C),y=m;default:if(v<1){if(f==123)--v;else if(f==125&&v++==0&&o1()==125)continue}switch(C+=Ss(f),f*v){case 38:d=p>0?1:(C+="\f",-1);break;case 44:l[u++]=(rn(C)-1)*d,d=1;break;case 64:dn()===45&&(C+=fa(jt())),x=dn(),p=h=rn(g=C+=u1(da())),f++;break;case 45:m===45&&rn(C)==2&&(v=0)}}return o}function Lf(e,t,n,r,i,o,a,l,s,u,p){for(var h=i-1,x=i===0?o:[""],y=Jc(x),m=0,v=0,b=0;m<r;++m)for(var d=0,f=ao(e,h+1,h=Zy(v=a[m])),g=e;d<y;++d)(g=bg(v>0?x[d]+" "+f:ve(f,/&\f/g,x[d])))&&(s[b++]=g);return js(e,t,n,i===0?Qc:l,s,u,p)}function d1(e,t,n){return js(e,t,n,yg,Ss(i1()),ao(e,2,-2),0)}function Df(e,t,n,r){return js(e,t,n,Kc,ao(e,0,r),ao(e,r+1,-1),r)}function Kr(e,t){for(var n="",r=Jc(e),i=0;i<r;i++)n+=t(e[i],i,e,t)||"";return n}function f1(e,t,n,r){switch(e.type){case Gy:if(e.children.length)break;case qy:case Kc:return e.return=e.return||e.value;case yg:return"";case wg:return e.return=e.value+"{"+Kr(e.children,r)+"}";case Qc:e.value=e.props.join(",")}return rn(n=Kr(e.children,r))?e.return=e.value+"{"+n+"}":""}function p1(e){var t=Jc(e);return function(n,r,i,o){for(var a="",l=0;l<t;l++)a+=e[l](n,r,i,o)||"";return a}}function h1(e){return function(t){t.root||(t=t.return)&&e(t)}}var m1=function(t,n,r){for(var i=0,o=0;i=o,o=dn(),i===38&&o===12&&(n[r]=1),!so(o);)jt();return xo(t,wt)},g1=function(t,n){var r=-1,i=44;do switch(so(i)){case 0:i===38&&dn()===12&&(n[r]=1),t[r]+=m1(wt-1,n,r);break;case 2:t[r]+=fa(i);break;case 4:if(i===44){t[++r]=dn()===58?"&\f":"",n[r]=t[r].length;break}default:t[r]+=Ss(i)}while(i=jt());return t},x1=function(t,n){return jg(g1(kg(t),n))},zf=new WeakMap,v1=function(t){if(!(t.type!=="rule"||!t.parent||t.length<1)){for(var n=t.value,r=t.parent,i=t.column===r.column&&t.line===r.line;r.type!=="rule";)if(r=r.parent,!r)return;if(!(t.props.length===1&&n.charCodeAt(0)!==58&&!zf.get(r))&&!i){zf.set(t,!0);for(var o=[],a=x1(n,o),l=r.props,s=0,u=0;s<a.length;s++)for(var p=0;p<l.length;p++,u++)t.props[u]=o[s]?a[s].replace(/&\f/g,l[p]):l[p]+" "+a[s]}}},y1=function(t){if(t.type==="decl"){var n=t.value;n.charCodeAt(0)===108&&n.charCodeAt(2)===98&&(t.return="",t.value="")}};function Og(e,t){switch(t1(e,t)){case 5103:return xe+"print-"+e+e;case 5737:case 4201:case 3177:case 3433:case 1641:case 4457:case 2921:case 5572:case 6356:case 5844:case 3191:case 6645:case 3005:case 6391:case 5879:case 5623:case 6135:case 4599:case 4855:case 4215:case 6389:case 5109:case 5365:case 5621:case 3829:return xe+e+e;case 5349:case 4246:case 4810:case 6968:case 2756:return xe+e+Ya+e+ot+e+e;case 6828:case 4268:return xe+e+ot+e+e;case 6165:return xe+e+ot+"flex-"+e+e;case 5187:return xe+e+ve(e,/(\w+).+(:[^]+)/,xe+"box-$1$2"+ot+"flex-$1$2")+e;case 5443:return xe+e+ot+"flex-item-"+ve(e,/flex-|-self/,"")+e;case 4675:return xe+e+ot+"flex-line-pack"+ve(e,/align-content|flex-|-self/,"")+e;case 5548:return xe+e+ot+ve(e,"shrink","negative")+e;case 5292:return xe+e+ot+ve(e,"basis","preferred-size")+e;case 6060:return xe+"box-"+ve(e,"-grow","")+xe+e+ot+ve(e,"grow","positive")+e;case 4554:return xe+ve(e,/([^-])(transform)/g,"$1"+xe+"$2")+e;case 6187:return ve(ve(ve(e,/(zoom-|grab)/,xe+"$1"),/(image-set)/,xe+"$1"),e,"")+e;case 5495:case 3959:return ve(e,/(image-set\([^]*)/,xe+"$1$`$1");case 4968:return ve(ve(e,/(.+:)(flex-)?(.*)/,xe+"box-pack:$3"+ot+"flex-pack:$3"),/s.+-b[^;]+/,"justify")+xe+e+e;case 4095:case 3583:case 4068:case 2532:return ve(e,/(.+)-inline(.+)/,xe+"$1$2")+e;case 8116:case 7059:case 5753:case 5535:case 5445:case 5701:case 4933:case 4677:case 5533:case 5789:case 5021:case 4765:if(rn(e)-1-t>6)switch(Ze(e,t+1)){case 109:if(Ze(e,t+4)!==45)break;case 102:return ve(e,/(.+:)(.+)-([^]+)/,"$1"+xe+"$2-$3$1"+Ya+(Ze(e,t+3)==108?"$3":"$2-$3"))+e;case 115:return~Lu(e,"stretch")?Og(ve(e,"stretch","fill-available"),t)+e:e}break;case 4949:if(Ze(e,t+1)!==115)break;case 6444:switch(Ze(e,rn(e)-3-(~Lu(e,"!important")&&10))){case 107:return ve(e,":",":"+xe)+e;case 101:return ve(e,/(.+:)([^;!]+)(;|!.+)?/,"$1"+xe+(Ze(e,14)===45?"inline-":"")+"box$3$1"+xe+"$2$3$1"+ot+"$2box$3")+e}break;case 5936:switch(Ze(e,t+11)){case 114:return xe+e+ot+ve(e,/[svh]\w+-[tblr]{2}/,"tb")+e;case 108:return xe+e+ot+ve(e,/[svh]\w+-[tblr]{2}/,"tb-rl")+e;case 45:return xe+e+ot+ve(e,/[svh]\w+-[tblr]{2}/,"lr")+e}return xe+e+ot+e+e}return e}var w1=function(t,n,r,i){if(t.length>-1&&!t.return)switch(t.type){case Kc:t.return=Og(t.value,t.length);break;case wg:return Kr([yi(t,{value:ve(t.value,"@","@"+xe)})],i);case Qc:if(t.length)return r1(t.props,function(o){switch(n1(o,/(::plac\w+|:read-\w+)/)){case":read-only":case":read-write":return Kr([yi(t,{props:[ve(o,/:(read-\w+)/,":"+Ya+"$1")]})],i);case"::placeholder":return Kr([yi(t,{props:[ve(o,/:(plac\w+)/,":"+xe+"input-$1")]}),yi(t,{props:[ve(o,/:(plac\w+)/,":"+Ya+"$1")]}),yi(t,{props:[ve(o,/:(plac\w+)/,ot+"input-$1")]})],i)}return""})}},b1=[w1],S1=function(t){var n=t.key;if(n==="css"){var r=document.querySelectorAll("style[data-emotion]:not([data-s])");Array.prototype.forEach.call(r,function(v){var b=v.getAttribute("data-emotion");b.indexOf(" ")!==-1&&(document.head.appendChild(v),v.setAttribute("data-s",""))})}var i=t.stylisPlugins||b1,o={},a,l=[];a=t.container||document.head,Array.prototype.forEach.call(document.querySelectorAll('style[data-emotion^="'+n+' "]'),function(v){for(var b=v.getAttribute("data-emotion").split(" "),d=1;d<b.length;d++)o[b[d]]=!0;l.push(v)});var s,u=[v1,y1];{var p,h=[f1,h1(function(v){p.insert(v)})],x=p1(u.concat(i,h)),y=function(b){return Kr(c1(b),x)};s=function(b,d,f,g){p=f,y(b?b+"{"+d.styles+"}":d.styles),g&&(m.inserted[d.name]=!0)}}var m={key:n,sheet:new Jy({key:n,container:a,nonce:t.nonce,speedy:t.speedy,prepend:t.prepend,insertionPoint:t.insertionPoint}),nonce:t.nonce,inserted:o,registered:{},insert:s};return m.sheet.hydrate(l),m},Eg={exports:{}},be={};/** @license React v16.13.1
 * react-is.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */var Ke=typeof Symbol=="function"&&Symbol.for,qc=Ke?Symbol.for("react.element"):60103,Gc=Ke?Symbol.for("react.portal"):60106,Os=Ke?Symbol.for("react.fragment"):60107,Es=Ke?Symbol.for("react.strict_mode"):60108,Cs=Ke?Symbol.for("react.profiler"):60114,Ps=Ke?Symbol.for("react.provider"):60109,Ts=Ke?Symbol.for("react.context"):60110,Zc=Ke?Symbol.for("react.async_mode"):60111,_s=Ke?Symbol.for("react.concurrent_mode"):60111,Ms=Ke?Symbol.for("react.forward_ref"):60112,As=Ke?Symbol.for("react.suspense"):60113,k1=Ke?Symbol.for("react.suspense_list"):60120,Rs=Ke?Symbol.for("react.memo"):60115,Is=Ke?Symbol.for("react.lazy"):60116,j1=Ke?Symbol.for("react.block"):60121,O1=Ke?Symbol.for("react.fundamental"):60117,E1=Ke?Symbol.for("react.responder"):60118,C1=Ke?Symbol.for("react.scope"):60119;function Tt(e){if(typeof e=="object"&&e!==null){var t=e.$$typeof;switch(t){case qc:switch(e=e.type,e){case Zc:case _s:case Os:case Cs:case Es:case As:return e;default:switch(e=e&&e.$$typeof,e){case Ts:case Ms:case Is:case Rs:case Ps:return e;default:return t}}case Gc:return t}}}function Cg(e){return Tt(e)===_s}be.AsyncMode=Zc;be.ConcurrentMode=_s;be.ContextConsumer=Ts;be.ContextProvider=Ps;be.Element=qc;be.ForwardRef=Ms;be.Fragment=Os;be.Lazy=Is;be.Memo=Rs;be.Portal=Gc;be.Profiler=Cs;be.StrictMode=Es;be.Suspense=As;be.isAsyncMode=function(e){return Cg(e)||Tt(e)===Zc};be.isConcurrentMode=Cg;be.isContextConsumer=function(e){return Tt(e)===Ts};be.isContextProvider=function(e){return Tt(e)===Ps};be.isElement=function(e){return typeof e=="object"&&e!==null&&e.$$typeof===qc};be.isForwardRef=function(e){return Tt(e)===Ms};be.isFragment=function(e){return Tt(e)===Os};be.isLazy=function(e){return Tt(e)===Is};be.isMemo=function(e){return Tt(e)===Rs};be.isPortal=function(e){return Tt(e)===Gc};be.isProfiler=function(e){return Tt(e)===Cs};be.isStrictMode=function(e){return Tt(e)===Es};be.isSuspense=function(e){return Tt(e)===As};be.isValidElementType=function(e){return typeof e=="string"||typeof e=="function"||e===Os||e===_s||e===Cs||e===Es||e===As||e===k1||typeof e=="object"&&e!==null&&(e.$$typeof===Is||e.$$typeof===Rs||e.$$typeof===Ps||e.$$typeof===Ts||e.$$typeof===Ms||e.$$typeof===O1||e.$$typeof===E1||e.$$typeof===C1||e.$$typeof===j1)};be.typeOf=Tt;Eg.exports=be;var P1=Eg.exports,Pg=P1,T1={$$typeof:!0,render:!0,defaultProps:!0,displayName:!0,propTypes:!0},_1={$$typeof:!0,compare:!0,defaultProps:!0,displayName:!0,propTypes:!0,type:!0},Tg={};Tg[Pg.ForwardRef]=T1;Tg[Pg.Memo]=_1;var M1=!0;function _g(e,t,n){var r="";return n.split(" ").forEach(function(i){e[i]!==void 0?t.push(e[i]+";"):r+=i+" "}),r}var ed=function(t,n,r){var i=t.key+"-"+n.name;(r===!1||M1===!1)&&t.registered[i]===void 0&&(t.registered[i]=n.styles)},Mg=function(t,n,r){ed(t,n,r);var i=t.key+"-"+n.name;if(t.inserted[n.name]===void 0){var o=n;do t.insert(n===o?"."+i:"",o,t.sheet,!0),o=o.next;while(o!==void 0)}};function A1(e){for(var t=0,n,r=0,i=e.length;i>=4;++r,i-=4)n=e.charCodeAt(r)&255|(e.charCodeAt(++r)&255)<<8|(e.charCodeAt(++r)&255)<<16|(e.charCodeAt(++r)&255)<<24,n=(n&65535)*1540483477+((n>>>16)*59797<<16),n^=n>>>24,t=(n&65535)*1540483477+((n>>>16)*59797<<16)^(t&65535)*1540483477+((t>>>16)*59797<<16);switch(i){case 3:t^=(e.charCodeAt(r+2)&255)<<16;case 2:t^=(e.charCodeAt(r+1)&255)<<8;case 1:t^=e.charCodeAt(r)&255,t=(t&65535)*1540483477+((t>>>16)*59797<<16)}return t^=t>>>13,t=(t&65535)*1540483477+((t>>>16)*59797<<16),((t^t>>>15)>>>0).toString(36)}var R1={animationIterationCount:1,aspectRatio:1,borderImageOutset:1,borderImageSlice:1,borderImageWidth:1,boxFlex:1,boxFlexGroup:1,boxOrdinalGroup:1,columnCount:1,columns:1,flex:1,flexGrow:1,flexPositive:1,flexShrink:1,flexNegative:1,flexOrder:1,gridRow:1,gridRowEnd:1,gridRowSpan:1,gridRowStart:1,gridColumn:1,gridColumnEnd:1,gridColumnSpan:1,gridColumnStart:1,msGridRow:1,msGridRowSpan:1,msGridColumn:1,msGridColumnSpan:1,fontWeight:1,lineHeight:1,opacity:1,order:1,orphans:1,tabSize:1,widows:1,zIndex:1,zoom:1,WebkitLineClamp:1,fillOpacity:1,floodOpacity:1,stopOpacity:1,strokeDasharray:1,strokeDashoffset:1,strokeMiterlimit:1,strokeOpacity:1,strokeWidth:1},I1=/[A-Z]|^ms/g,L1=/_EMO_([^_]+?)_([^]*?)_EMO_/g,Ag=function(t){return t.charCodeAt(1)===45},Ff=function(t){return t!=null&&typeof t!="boolean"},xl=vg(function(e){return Ag(e)?e:e.replace(I1,"-$&").toLowerCase()}),Nf=function(t,n){switch(t){case"animation":case"animationName":if(typeof n=="string")return n.replace(L1,function(r,i,o){return on={name:i,styles:o,next:on},i})}return R1[t]!==1&&!Ag(t)&&typeof n=="number"&&n!==0?n+"px":n};function lo(e,t,n){if(n==null)return"";if(n.__emotion_styles!==void 0)return n;switch(typeof n){case"boolean":return"";case"object":{if(n.anim===1)return on={name:n.name,styles:n.styles,next:on},n.name;if(n.styles!==void 0){var r=n.next;if(r!==void 0)for(;r!==void 0;)on={name:r.name,styles:r.styles,next:on},r=r.next;var i=n.styles+";";return i}return D1(e,t,n)}case"function":{if(e!==void 0){var o=on,a=n(e);return on=o,lo(e,t,a)}break}}if(t==null)return n;var l=t[n];return l!==void 0?l:n}function D1(e,t,n){var r="";if(Array.isArray(n))for(var i=0;i<n.length;i++)r+=lo(e,t,n[i])+";";else for(var o in n){var a=n[o];if(typeof a!="object")t!=null&&t[a]!==void 0?r+=o+"{"+t[a]+"}":Ff(a)&&(r+=xl(o)+":"+Nf(o,a)+";");else if(Array.isArray(a)&&typeof a[0]=="string"&&(t==null||t[a[0]]===void 0))for(var l=0;l<a.length;l++)Ff(a[l])&&(r+=xl(o)+":"+Nf(o,a[l])+";");else{var s=lo(e,t,a);switch(o){case"animation":case"animationName":{r+=xl(o)+":"+s+";";break}default:r+=o+"{"+s+"}"}}}return r}var Vf=/label:\s*([^\s;\n{]+)\s*(;|$)/g,on,td=function(t,n,r){if(t.length===1&&typeof t[0]=="object"&&t[0]!==null&&t[0].styles!==void 0)return t[0];var i=!0,o="";on=void 0;var a=t[0];a==null||a.raw===void 0?(i=!1,o+=lo(r,n,a)):o+=a[0];for(var l=1;l<t.length;l++)o+=lo(r,n,t[l]),i&&(o+=a[l]);Vf.lastIndex=0;for(var s="",u;(u=Vf.exec(o))!==null;)s+="-"+u[1];var p=A1(o)+s;return{name:p,styles:o,next:on}},z1=function(t){return t()},F1=Cd.useInsertionEffect?Cd.useInsertionEffect:!1,Rg=F1||z1,nd={}.hasOwnProperty,Ig=L.createContext(typeof HTMLElement<"u"?S1({key:"css"}):null);Ig.Provider;var Lg=function(t){return L.forwardRef(function(n,r){var i=L.useContext(Ig);return t(n,i,r)})},Dg=L.createContext({}),zu="__EMOTION_TYPE_PLEASE_DO_NOT_USE__",N1=function(t,n){var r={};for(var i in n)nd.call(n,i)&&(r[i]=n[i]);return r[zu]=t,r},V1=function(t){var n=t.cache,r=t.serialized,i=t.isStringTag;return ed(n,r,i),Rg(function(){return Mg(n,r,i)}),null},U1=Lg(function(e,t,n){var r=e.css;typeof r=="string"&&t.registered[r]!==void 0&&(r=t.registered[r]);var i=e[zu],o=[r],a="";typeof e.className=="string"?a=_g(t.registered,o,e.className):e.className!=null&&(a=e.className+" ");var l=td(o,void 0,L.useContext(Dg));a+=t.key+"-"+l.name;var s={};for(var u in e)nd.call(e,u)&&u!=="css"&&u!==zu&&(s[u]=e[u]);return s.ref=n,s.className=a,L.createElement(L.Fragment,null,L.createElement(V1,{cache:t,serialized:l,isStringTag:typeof i=="string"}),L.createElement(i,s))}),W1=U1,q=function(t,n){var r=arguments;if(n==null||!nd.call(n,"css"))return L.createElement.apply(void 0,r);var i=r.length,o=new Array(i);o[0]=W1,o[1]=N1(t,n);for(var a=2;a<i;a++)o[a]=r[a];return L.createElement.apply(null,o)};function hr(){for(var e=arguments.length,t=new Array(e),n=0;n<e;n++)t[n]=arguments[n];return td(t)}var B1=function(){var t=hr.apply(void 0,arguments),n="animation-"+t.name;return{name:n,styles:"@keyframes "+n+"{"+t.styles+"}",anim:1,toString:function(){return"_EMO_"+this.name+"_"+this.styles+"_EMO_"}}},H1=Xy,$1=function(t){return t!=="theme"},Uf=function(t){return typeof t=="string"&&t.charCodeAt(0)>96?H1:$1},Wf=function(t,n,r){var i;if(n){var o=n.shouldForwardProp;i=t.__emotion_forwardProp&&o?function(a){return t.__emotion_forwardProp(a)&&o(a)}:o}return typeof i!="function"&&r&&(i=t.__emotion_forwardProp),i},Y1=function(t){var n=t.cache,r=t.serialized,i=t.isStringTag;return ed(n,r,i),Rg(function(){return Mg(n,r,i)}),null},X1=function e(t,n){var r=t.__emotion_real===t,i=r&&t.__emotion_base||t,o,a;n!==void 0&&(o=n.label,a=n.target);var l=Wf(t,n,r),s=l||Uf(i),u=!s("as");return function(){var p=arguments,h=r&&t.__emotion_styles!==void 0?t.__emotion_styles.slice(0):[];if(o!==void 0&&h.push("label:"+o+";"),p[0]==null||p[0].raw===void 0)h.push.apply(h,p);else{h.push(p[0][0]);for(var x=p.length,y=1;y<x;y++)h.push(p[y],p[0][y])}var m=Lg(function(v,b,d){var f=u&&v.as||i,g="",w=[],S=v;if(v.theme==null){S={};for(var T in v)S[T]=v[T];S.theme=L.useContext(Dg)}typeof v.className=="string"?g=_g(b.registered,w,v.className):v.className!=null&&(g=v.className+" ");var C=td(h.concat(w),b.registered,S);g+=b.key+"-"+C.name,a!==void 0&&(g+=" "+a);var j=u&&l===void 0?Uf(f):s,O={};for(var _ in v)u&&_==="as"||j(_)&&(O[_]=v[_]);return O.className=g,O.ref=d,L.createElement(L.Fragment,null,L.createElement(Y1,{cache:b,serialized:C,isStringTag:typeof f=="string"}),L.createElement(f,O))});return m.displayName=o!==void 0?o:"Styled("+(typeof i=="string"?i:i.displayName||i.name||"Component")+")",m.defaultProps=t.defaultProps,m.__emotion_real=m,m.__emotion_base=i,m.__emotion_styles=h,m.__emotion_forwardProp=l,Object.defineProperty(m,"toString",{value:function(){return"."+a}}),m.withComponent=function(v,b){return e(v,Z({},n,b,{shouldForwardProp:Wf(m,b,!0)})).apply(void 0,h)},m}},Q1=["a","abbr","address","area","article","aside","audio","b","base","bdi","bdo","big","blockquote","body","br","button","canvas","caption","cite","code","col","colgroup","data","datalist","dd","del","details","dfn","dialog","div","dl","dt","em","embed","fieldset","figcaption","figure","footer","form","h1","h2","h3","h4","h5","h6","head","header","hgroup","hr","html","i","iframe","img","input","ins","kbd","keygen","label","legend","li","link","main","map","mark","marquee","menu","menuitem","meta","meter","nav","noscript","object","ol","optgroup","option","output","p","param","picture","pre","progress","q","rp","rt","ruby","s","samp","script","section","select","small","source","span","strong","style","sub","summary","sup","table","tbody","td","textarea","tfoot","th","thead","time","title","tr","track","u","ul","var","video","wbr","circle","clipPath","defs","ellipse","foreignObject","g","image","line","linearGradient","mask","path","pattern","polygon","polyline","radialGradient","rect","stop","svg","text","tspan"],P=X1.bind();Q1.forEach(function(e){P[e]=P(e)});const K1=P.section`
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
`,J1=P.h2`
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
`,q1=P.div`
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
`,G1=P.img`
  border-radius: 18px;
`,Z1=P.div`
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
`,ew=P.h3`
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
`,tw=P.p`
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
`,nw=P.ul`
  padding-left: 23px;
`,rw=P.li`
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
`,iw=P.ul`
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
`,ow=P.a`
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
`,aw=P.svg`
  margin-left: 10px;
`,sw=P.div`
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
`,lw="/healthy-management-project/assets/olga_picture1x-6T0pnRyH.webp",uw="/healthy-management-project/assets/olga_picture2x-4JmA7wGC.webp",cw="/healthy-management-project/assets/olga_picture1x-ohcXIDw6.jpg",dw="/healthy-management-project/assets/mob_olga_picture1x-PQXysebb.jpg",fw="/healthy-management-project/assets/mob_olga_picture1x-1fPtYEvT.webp",pw="/healthy-management-project/assets/mob_olga_picture2x-VJcRD770.webp",hw="/healthy-management-project/assets/olga_picture@1x-V6xBvkB4.jpg",mw="/healthy-management-project/assets/olga_picture@1x-UUwfpH5W.webp",gw="/healthy-management-project/assets/olga_picture@2x-MWfGyCra.webp",xw="/healthy-management-project/assets/olga_picture@1x-rIS7rOGv.jpg",vw="/healthy-management-project/assets/olga_picture@1x-aIsvHdrL.webp",yw="/healthy-management-project/assets/olga_picture@2x-3sK8O0o2.webp",ww=[{query:"(max-width: 767px)",imgData:{srcSet:`${pw} 2x, ${fw} 1x`,sizes:"(max-width: 767px) 100vw",src:dw}},{query:"(min-width: 768px) and (max-width: 1439px)",imgData:{srcSet:`${gw} 2x, ${mw} 1x`,type:"image/webp",sizes:"(min-width: 768px) 100vw (max-width: 1439px) 100vw",src:hw}},{query:"(min-width: 1440px) and (max-width: 1919px)",imgData:{srcSet:`${yw} 2x, ${vw} 1x`,type:"image/webp",sizes:"(min-width: 1440px) 100vw (max-width: 1919px) 100vw",src:xw}},{query:"(min-width: 1920px)",imgData:{srcSet:`${uw} 2x, ${lw} 1x`,type:"image/webp",sizes:"(min-width: 1920px) 100vw",src:cw}}],bw=[{name:"Instagram",href:"https://www.instagram.com/olga_healthm/"},{name:"Facebook",href:"https://www.facebook.com/olga.polishchuk.14"},{name:"LinkedIn",href:"https://www.linkedin.com/in/olga-polishchuk-83362140/"}],Sw=["MBA Healthcare management","Викладачка медичного маркетингу Бізнес-школа УКУ (LvBS)",`Експертка в "Центр Розвитку Громадського Здоров'я УКУ"`,"Бізнес-консультантка, стратег з медичного маркетингу",'Керівниця проєкту "Стетоскоп" - телеграм канал про медичний менеджмент та маркетингу',"Більше 18 років досвіду в маркетингу та комунікаціях, з них більше 10 років досвіду в медичному та фармацевтичному бізнесі на керівних посадах","Використання принципів доказової медицини"],ne="/healthy-management-project/assets/sprite-F2nHWZk-.svg",kw=()=>c.jsx(aw,{width:"24",height:"24",children:c.jsx("use",{href:`${ne}#icon-arrow-up-right`})}),jw=()=>c.jsx(K1,{className:"container",children:c.jsxs("div",{children:[c.jsx(J1,{children:"Про мене"}),c.jsxs(q1,{children:[c.jsx(sw,{children:ww.map((e,t)=>c.jsx(J,{query:e.query,children:c.jsx(G1,{alt:"Ольга Поліщук",...e.imgData})},t))}),c.jsxs(Z1,{children:[c.jsx(ew,{children:"Ольга Поліщук"}),c.jsx(tw,{children:"CEO and Founder студії стратегічного розвитку"}),c.jsx(nw,{children:Sw.map((e,t)=>c.jsx(rw,{children:e},t))}),c.jsx(iw,{children:bw.map((e,t)=>c.jsx("li",{children:c.jsxs(ow,{href:e.href,target:"_blank",rel:"noopener noreferrer",children:[e.name,c.jsx(kw,{})]})},t))})]})]})]})}),Ow=P.section`
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
`,Ew=P.h2`
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
`,Cw=P.div`
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
`,Pw=P.p`
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
`,Tw=P.p`
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
`,Bf=P.div`
  display: flex;
  gap: 16px;
  align-items: center;
  margin-bottom: 16px;
`,_w=P.div`
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
`,Mw=P.h4`
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
`,Aw=P.div`
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
`,Rw=P.h4`
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
`,Iw=P.p`
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
`,Lw=P.svg`
  border-radius: 100px;
  width: 32px;
  height: 32px;
  padding: 3px;

  fill: ${e=>e.fill||"currentColor"};
  background: ${e=>e.background||"transparent"};
`;var zg={exports:{}},Dw="SECRET_DO_NOT_PASS_THIS_OR_YOU_WILL_BE_FIRED",zw=Dw,Fw=zw;function Fg(){}function Ng(){}Ng.resetWarningCache=Fg;var Nw=function(){function e(r,i,o,a,l,s){if(s!==Fw){var u=new Error("Calling PropTypes validators directly is not supported by the `prop-types` package. Use PropTypes.checkPropTypes() to call them. Read more at http://fb.me/use-check-prop-types");throw u.name="Invariant Violation",u}}e.isRequired=e;function t(){return e}var n={array:e,bigint:e,bool:e,func:e,number:e,object:e,string:e,symbol:e,any:e,arrayOf:t,element:e,elementType:e,instanceOf:t,node:e,objectOf:t,oneOf:t,oneOfType:t,shape:t,exact:t,checkPropTypes:Ng,resetWarningCache:Fg};return n.PropTypes=n,n};zg.exports=Nw();var Vw=zg.exports;const Ft=oi(Vw),Fu=({fill:e,background:t})=>c.jsx(Lw,{fill:e,background:t,children:c.jsx("use",{href:`${ne}#icon-star`})});Fu.propTypes={fill:Ft.string,background:Ft.string};const Uw=()=>c.jsx(Ow,{id:"aboutUs",className:"container",children:c.jsxs("div",{children:[c.jsx(Ew,{children:"Про студію"}),c.jsxs(Cw,{children:[c.jsx("div",{children:c.jsx(Pw,{children:"Студія стратегічного розвитку медичних брендів «Healthy management» надає послуги медичного менеджменту, медичного маркетингу, консалтингу бізнес-процесів та створення стратегій здоров’я для підприємств та бізнесу. Ми співпрацюємо з медичними закладами, лікарями, власниками, керівниками та створюємо спільні стратегії та дії для ефективного просування та розвитку проєктів, використовуючи комплексний підхід"})}),c.jsxs(Aw,{children:[c.jsxs(Bf,{children:[c.jsx(Fu,{fill:"var(--background-white)",background:"rgba(244, 244, 246, 0.2)"}),c.jsx(Rw,{children:"Наша місія"})]}),c.jsx(Iw,{children:"Будуємо ефективні стратегії по управлінню здоров’ям та створюємо продуктивні дії для популяризації здорового менеджменту"})]}),c.jsxs(_w,{children:[c.jsxs(Bf,{children:[c.jsx(Fu,{fill:"var(--primary-bluedark)",background:"rgba(27, 54, 65, 0.2)"}),c.jsx(Mw,{children:"Наші цінності"})]}),c.jsx(Tw,{children:"Повага, довіра, партнерство та експертність. Будуємо нову культуру управління здоровим менеджментом у медичній галузі"})]})]})]})}),Ww=P.section`
  padding-top: 40px;
  padding-bottom: 40px;

  @media screen and (min-width: 1920px) {
    padding-top: 80px;
    padding-bottom: 80px;
  }
`,Bw=P.div`
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
`,Hw=P.h2`
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
`,$w=P.ul`
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
`,Yw=P.li`
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
`,Xw=[{id:1,tool:"Матриця стейкхолдерів"},{id:2,tool:"SWOT аналіз"},{id:3,tool:"Bussines model canvas"},{id:4,tool:"Value proposition canvas"},{id:5,tool:"Customer journey map"}],Qw=()=>c.jsx(Ww,{className:"container",children:c.jsxs(Bw,{children:[c.jsxs(Hw,{children:["Бізнес ",c.jsx("span",{children:"інструменти"}),", які використувуємо в партнерстві"]}),c.jsx($w,{children:Xw.map(e=>c.jsx(Yw,{children:e.tool},e.id))})]})}),ha="/healthy-management-project/assets/icon-footer-Xf4MF8io.svg",Kw=P.div`
  background-color: var(--background-bluedark);
`,Jw=P.div`
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
`,Hf=P.a`
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
`,$f=P.div`
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
`,tn=P.a`
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
`,qw=P.div`
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
`,Gw=P.div`
  display: flex;
  align-items: center;
  gap: 16px;
`,Zw=P.a`
  padding: 4px;

  & svg {
    display: flex;
    justify-content: center;
    align-items: center;
    border-radius: 10px;
    background-color: var(--background-white);
    opacity: 0.8;
  }
`,eb=P.a`
  padding: 4px;

  & svg {
    display: flex;
    justify-content: center;
    align-items: center;
    border-radius: 10px;
  }
`,tb=P.div`
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

  @media screen and (min-width: 1920px) {
    flex-direction: column;
    align-items: flex-start;
    gap: 0;
  }
`,Yf=P.a`
  font-size: 14px;
  font-weight: 500;
  line-height: 1.43;
  color: var(--typography-white);

  @media screen and (min-width: 768px) {
    font-size: 15px;
    line-height: 1.2;
  }

  @media screen and (min-width: 1920px) {
    font-size: 16px;
    line-height: 1.5;
  }
`,nb=P.div`
  display: flex;
  padding: 16px 24px;

  justify-content: center;
  align-items: center;
  border-top: 1px solid var(--system-default-20);
  background: var(--background-bluedark);
`,rb=P.p`
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
`,ib=P.div`
  position: fixed;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  background-color: rgba(6, 33, 54, 0.4);
  overflow: scroll;
  z-index: 1100;
`,ob=P.div`
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
`,ab=P.div`
  height: 32px;
  display: flex;
  align-items: center;
  justify-content: space-between;
  margin-bottom: 24px;

  @media screen and (min-width: 1920px) {
    margin-bottom: 40px;
  }
`,_n=P.span`
  display: flex;
  align-items: center;

  width: 16px;
  height: 16px;
  border-radius: 2px;
  background-color: currentColor;

  @media screen and (min-width: 1440px) {
    background-color: none;
  }
`,Mn=P.svg`
  width: 15px;
  height: 13px;
  fill: var(--typography-white);

  @media screen and (min-width: 1440px) {
    fill: var(--typography-bluedark);
  }
`,sb=P.svg`
  width: 24px;
  height: 24px;
  cursor: pointer;
  stroke: #062136;
`,lb=P.h2`
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
`,ub=P.ul`
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
`,An=P.li`
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
`,Rn=P.h3`
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
`,In=P.p`
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
`,Ln=P.div`
  display: flex;
  flex-direction: row;
  gap: 16px;

  @media screen and (min-width: 1440px) {
    flex-direction: column;
    justify-content: center;
  }
`,Dn=P.div`
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
`,zn=P.div`
  border-radius: 8px;
  overflow: hidden;
`,it=P.img`
  border-radius: 8px;

  &:hover {
    transform: scale(1.1);
    border-radius: 8px;
  }
`,Xf="/healthy-management-project/assets/Jilia_Kopytko-mYhzlt_-.webp",cb="/healthy-management-project/assets/Jilia_Kopytko@2x-gruKrAtD.jpg",db="data:image/webp;base64,UklGRloHAABXRUJQVlA4IE4HAAAwIgCdASpGAEYAPikQh0KhoQnsr3gMAUJYwDF/DmMNJor7+T3jyo/M65U/4PSj8wb9N+mP5jvKL/Zn3ef5z1AP106wn9u/Ye/bP00vZf/cz9t7Cl+M3nD4cvO3trul2oR8f+5f6H8ufXLvt2qv858pPJhAD/NuFr67/5f1TeZP+N8V3yT2APzz/u/Ubz1vR//b9wf+a/2n/o+tV7GfQY/cBA//SiCrMXA+0MgqUUaIcsx1zQ7pwil/DXeib88+9l6AaaFg0SmY0KsGqtPGtjDajGpL2huqzQQOJPZPuuql/JJKHYhIBm2YcG6vL5hP4+uOtenpzTZm5I86Cqdq/PQ5bsklys1SMQJQJv6vvtQ0nsCd+BN78GSKQUAA/v/+F922HBjT7A3h76S67YSOZQH+QXR+6XbPsWsGR7fBiurrYSvP8I2DSmakMOmBNDiaO2LWtWXACNyiGE5oWKBCB8l2Qdfy0aoc5KUcBuZoBTY67Eha1+p9sTKH7IOXxaEERHjIMs25D46gJKLRa224wt6UR3PIo7b8Npf+L7LmJOepdCCNPEZ7p+mOh+cvZNfCAJKhrAt4kk9i8ZRnWo2it7F7hvzll9kzff2cKxJSskaCmdSEL4H41El6YAAiFUR8Ix6sJcAlsIhRPSfnpLtp3qpJAlI6dLoUjbk+JTaky0xXR2iUH7Q7JRivqIgnpPVBCPPB69D23OMcfA6WRq6piunhbllT+pymW/Eg5WyK2gc0yTjFthyu0JH0cz22oJfInRDUyQSSRoKWpbLncIxy5fSGpJTyD1spZXccq3B5dvxc4y3kaTETtG39dPxF486zu6NvhIVMdljzDywEytP22xjGaGKXvyEyBbfD/9a96e3PlU4792OeV/VWBWE+X+WTxYFM8r4ECi2se+bLfvxdF9Iz2pVpo4+TVdhGm3YRBooH5Oty1s5pux2cfUFnqqkGkxOAvLV1ea8j/DyyCrIRCXQoJF8K3oz59FxmTNieTVVf5i9+VfAQIVsqJFOL5S0iRzPaKfw03LcSF5nq0TJFdJLyinEe3jjf8UgXg0Pl8HG5bmUzPlrUcavXsoAPGbQkxydk/jrzCeTa5c33oC9CUsJm/rzTJzebDMq80FtWwn+t+w8pdqyYxDD3NLPYVaJxsXkIRd9ISA84vmgIGU+o3FETJh1bZ/4LtQCXb4nr7iLJ/HSTQ01ovtIL0mP5XMc7N3Ni+Pt/5JGWasdFDcvzgJpK0O/P6BTDlbwX0DJnFZgIrFeVUWBV8g10u78uYyQzYyEfjdzfCWa+asNgavrEOBSl205DM6ONL9xSrtRoORqSC55taUnuRfbkMJ6wZOf3L9TuN8NaJhLDCVoqlNCxEZq89aSTNIckZutlD21KHIlQmGa1Ew5AENDZax9eDs/SMFfk71Vb+nlOdfcafxrmQhJMDfD3lgi7tyqY9ui+BhqnVAfNcT/wU1TQj9kB/eg9DGCAeCN5XrND5KipXWmY7txm8wNxUUNQiFEqjdIbcSIiGT71pGpuIMX8Y66ti87xEZKO2OgL8EZWtixxdSURnm34dkCYkWM25zMjP7nh2MHfth2O8SDRxr9ubhD08kRZa3WVZiQebrL08a12nL0IxYBe4+8jAEaBvhU5MfXJr9EKe/bhdORc2mr57PlP7fisjzP6tiVZEuWnkvaO72IkeAtJ5rqivHjgI95rA78m8611BF0KEUnIT0hrFdfTX+NQYdtctcGTMlw+jt36ebc8LleIz9FZrdWrAb2dq/sQQaymNeFA69a8R/+atDGrT2IGhrkOuYtfw15brgYFvAf9lgWE54+ahD+LIfNVrcf3cqmSuXDgvFu2vSeT6zmho6g6PcP0armMJyIyT40UIqnf+HH9b2fjHEpusfBs4JYKDl673rYhQTj8YW1eSiNF/dZJqr6+qUfZyakdpAimfCV/BIQP7C8FdmTn9cSytzJXzDePjXPHY1VcoqzgOR6rrspVXE4xNA5Z20LEC4Rd/cSAcg3pWqKFqZA+rRAO6ky7QyBoU5KPcOjG/D5nJ1EjwP92fkhv0pwpVhhK7g760jW/fx1gvbdCJMuczUrNlCzH6v32Ahh7/Md0UhFoh1lCkCpV3nT6H4+0pFWVZV2zIDeTmCA5kf/Uff62PDXp3sr0urMzthdWBvfU87CE/um36vx2J3ryiW1WEX4LEn8rO+gzI0Dr/pqaAIU94AdbrS19h/99qDtknhveFPNk+2F/MUEeuAMmJaUBtTh6jkRd/qK8W6obGdvV9JwGl0Fa+1NijyI3xwbV4f9z474RrnC94j4xmJNJiwtuTQA77TtBco5v0RgYUA//zGgB/uSA1OHY67++r/oPRil7RmfFmdWCT1t5ACQnjkTbySLy+6/H57pK4nvn0oG1PqzAXDEouxoZbychkhWCKs5QoJL+kw3sKkAAFTyUffpTm2XBFPdGu2D//aLf3d36aCRf+iG1O/X69nBvxivoAncFSiMBtJRrIAAA",fb="/healthy-management-project/assets/Jilia_Kopytko_mob@2-Prc8D07h.webp",pb="/healthy-management-project/assets/Jilia_Kopytko_mob-A3G-y9iz.jpg",Qf="/healthy-management-project/assets/Yelyzaveta_Domanska-Ru7up7Pj.webp",hb="/healthy-management-project/assets/Yelyzaveta_Domanska@2x-BYkqrL88.jpg",mb="data:image/webp;base64,UklGRqgLAABXRUJQVlA4TJsLAAAvRUARAM2ISdMU+Moi+h8zAU+SZKu2bduWeym1ttZh0OS5eG2mRYeZQ8yUgRM6J3aClJCTgJMC5jhvZt77TJ5jDujUWq2l+IFMRMQETEJ+/t8/eQ0TCXhPc0EmJDJalzMCmVBJZcisZiJSMli7evlDf/AKSWjzl/9yPZ8ehmoGogJUONGDIF0iYIDJ3ARlJUGABqP2j7/w5y/98gq5/bNtWYT15iWJNBMDgiTPpItIKwYBTqSMJqMKYMQ8B+Lv/vmPVviLb9615TzXwZMMUUYaALiS3mlspGdaBmB00kCEqpEYVTh984u/9/QvKwXmegCUcBACAcGSgANBOAxQCF4LBYNAImnWIqv+9p2/qg6Y2YIBiFIYBfbusGRKGQBhSpN5KTAwBHdkWFwN2TT6g/+usGJEOEBXRpqBEAzC5fOr86vNtq1OmDSzIQOGBMVAlfqiybHX5799WLvF4bA7EklamgTBF8rDl54y3a1NT7b310aZZZe5SxIJyPZbOTOebbeOfDYvV56SYJ5iCrTYfXKjJDILcvfo3rEnM5he3QAaIb3IY0VDzQNcs99cUUqR1oWQmXP+zBVdQSaNOf33awtHMDoc5jTKEO20bGe4kqXYeAwSJhgSpoQZ+hd2w9AbA4WRQvz3+0sKTFMBBImGUVdhHfD1Uamx5ykti8iWjLmKerApq34l0WhKwA77lzNlhJnDQzKZtTkbrHTJ1TYDQI90ZLC7GdqDcqpytC2rSiKU4POXHBJLhlcoBQNmmwMAwrBlwo3ytJ5iVXU9rfZkV0/OcGO1PPQOUTnfYcIIowvmAWWEkASSYePKSQJGkARBnJeLw/Lu+4e+HMcS2ZrA/d00Od1oKSPUJ3UXrLvoY7kJQCnCPZQgr71d2yfeeil2aEKxjgOxvTkIKMUs0xMweN03K7NKFHNf9uwmQqEA3LgZLvP2R189yssonLNnsgs8k4q7k0JGsILYixBsKDan0sKAlGA0YPYet09veF8Gk4fIQEAvXjKDmZsIBgCkFxwkGr1f1AoDCMDcUBi7o+Dx2TKHgT0io1uPxL7dVXqBCBhEgctlHa5SREy27CkA+n+kcZdKWwyW3RGJzIhQAIf7qUIDAImE6HLzbBxUT6wn3AMs2SVwpxk2z+Fu1Wp78bQXsy7EvTCSBCJFyLJkwpXhbnVu1QHCA0D24TKbdHngMFFt85n+fs4ymxOrhZsCpkxSkAV3kxO1klAiTRCiCwI23qxfffL06JUTPfrWCl+fcTZGoF+86oSQkARklzbzIca1AcgsxbqnpeBh6rvjLl4PNy6++Obx5ZMLu3MDp33nmOYbxQmhwyRMh95wHHQTE5IXMjPNHUzbdiHZv/p0feP9b83f/NA9+P3dRWK5x3qAQGVSRNtP6Tmu/RI0CWSKJoFytz0mF7dPbt1aHtXheTleH8XVIedtXSyMJoYoIRPRUhYygmStED0RNGHAprQjGO58dFi+fFhsntnx0Ke5z7OtFw5YhogUzRt6oLOaw1OVCZFwAOI150MMm3LjzMuyz9/VwrNFt9lXY6EgINMMmENBmSehTtFKJ10gmH0imosxjn27Poqnz3Y+5MGjjevBYAmljCB6QhIqilqlwVBSJAj4tlufDXWzvXow3snLZ6tyqRuTYl6tKthNGRSoPgctUwZkCqTMPCmA0A7J5lYuv3X28Psup8Pt6cWL6fuezxmrs05BTInAPIs9QZooJYwpSyVhALbsJqDsvnJnedVyPLfx8s14QeXNRc+UAJoiDNnFLMwAlFmJ8CSMsIhry4T7fr3L5af/+533PrL76nHd7EXc7WQiJdIOm+pNSUdMCUEkTSkTgcx5BggUdl4M76w+s/uOr9fLZw11XIagpASo71p1KP0glwFUOgGACUChZnITsx4evPfysKFuEg/IMo6QlARBInfNPNkSEoVUJpVKE0ReNlNjEf0wPvzW66dYr+nf2I4VS4q0hCBT0dzIyikEpABFMtIoChmtHKBW6iDPxXfKq8NJx/nDOixPFgcIdFRXRzrUhtK6LA1hDBNAymQpHIr3NE+Nrd/RxXQ/p82je6+erXidVmxcjPX47OTFBpE0TOkMAyAaU6QIybhnMoVpsnq0noejv1se+t2FQLvajszFUC1WyzvfnpXGlqJlVoGSQEhK0XWIcZ/e+sDxeMGrs/HRG2rmYOxHenUf6r6uTvKiq0Qm0GCWZEoUoM4wTa3UACfZePLWR/v8xTce2usnqwl7W6tzGJ3VD6dDvbg2n7N6C6v0RHVLU0qZ4A7B6DV4eu/7f/L+fLb/zluvt8v9oqwmTOYYSy2L85PquZkYXGSXFZD2/6UwBpAbFae5jl7+ge97LVVX89d2PdpM9dkHp5c6LjZalWcnT7xIFE0WgASShBtN1yxDWokPv/Pu+wuOpjpcPt5mJbK72+jtqA8V1zd08erXDxkawjjFvGSIpjSjObUv3poX/5nVRxfUvka/dbHPbh7FRmLsduOq3Pr2/ejLdpGiw4g+ZwXITppgOByW6Llc3V28fSy0YgGUcwkspZh5qdN4+8mNqzqgLx4HBy6Wk9cVZUYv4UiZtgUQh+0HXr6ZgHsU25X9wQC30Sgu2crdB6986V659HrOwdfF6UZAkgiPgG2TZVNs/O1XKxkZPjW7wOyQmY2LpjIAq+X03VvHD46PHprmXBREX1DInkL3ErGh53w0/eabRZ6KDHAbMS+HBqd8nLEomctn5fLOtByfH9iwMAZMRJpnQCFNJsTZ+369FGXPiIhdr9iebM+26Sav1ACz5aPd9Q88PL0672U0yAqMpJkTmWydgv3G8VCQUI85Me3vbqYbz25xH0UopYB95um3++vTrd2jXNWA6KABICAgJ4ntQ4u31gJCaD1btDsv+vpyXZDmQSEplILnbXH/+rpl8wJHSpYSPFPYwdXv563CFHtT69qWW8+4uljk8boyA+Y2dtTx/PHt4115Rh8IkVJkBEWDz63Uw/CDd5hSUxxS2qyOrvs418VytSyDtTlCC9ii/jfcbjzGsWUSJFJKwMEyB1Q/cStlmYrWokzX6/V3767qq2ux62yBq110jBrHw5Pp5rE/C6cRSgcDVgzUhBB9YYrMbEpraMPyq98z+dNpeXy3bJPcXNRMlrVeXK1WRw+vNxGmNCsZEAT0TnL+piMERE4e3E/L4cUHvllscby0stqgl+sLQ7Za+9aG5fCkzUmDguZdJLEHoehDlp490oOTesnb55fj6dmyN2XdL/axmboaxnaoZTi+7kiCpiRoEGzuxjneA1sIqUSyH+r+pU+e3jvJFlGnPvauaTfDwjHbONp4Xg2RSkqEJFyCZn4kUJoFb0Jr2N//14+9RMzUbMTBdpgYQGoq61pW55tMKWU0Ggk1ajoeXhNSYbBM9bZf9v3q3efbWMBRYm9bznN6KJC2HksZvoOZEimYk8gMQ7x6wiQlSyPnCeNw+P6vjMtVDFBrdRP9oIQiEX4cjx/krb5ZkVBSgmxTArF/P4UQLJVomX1YPTl6VTXrpARejIceBwgZiPjO416ZcXvj4QaApF0Tkf6J3U1kMlMQY7o6I1+emOzWehyWV3XeoSNC1r+7XjGzv/UuaeZmhNy7V1j5yCITCaT1GfsdVk9//DKYmnsbdpxb0yXUGUBGsUHK996dfRzopYi2dyjL7dtDSlIw0/Z9Wto71wlpqpNfLtq2zOfh1pEkWjW31B9/9Oec7k7BsF92mX94YMiQ0SO3+y3s4+2Q0RzTMNv+MLfdZmndskBdtTjxW4W/+Arc3WCKfc0ivJu0EDu99XaR+Tp2LVXlfc6y2U3z4oOXO7A45tngxT/0uxOXv/9jVsyKGcLn5OJtChaROWn7Yrfz1w7LdTXahD0O7br66vi1m+cbWO1PhpL+a79xaPTFz//hW3dApAYw/d49ExHZex4OFxePPmxn3oE+KcecbTg5W+12J2+03Yb1ur320z9/69ABAA==",gb="/healthy-management-project/assets/Yelyzaveta_Domanska_mob@2x-ZIU7pPaq.webp",xb="/healthy-management-project/assets/Yelyzaveta_Domanska_mob-KAXsGiGc.jpg",Kf="/healthy-management-project/assets/Oleksandr_Natalukha-YKEBbXyu.webp",vb="/healthy-management-project/assets/Oleksandr_Natalukha@2x-5OsrctvL.jpg",yb="data:image/webp;base64,UklGRsIIAABXRUJQVlA4ILYIAADwJgCdASpGAEYAPiUOhkIhhmaJswYAkSxAFYZXsFn5XzMbG/a/wd+M3IiGD5O+hv1V+Ip/YOqX5j/1d/WT3kfRL/hvUA/on8362j0AP2d9Nr9xvhe/bv9ovaH/+t1s+lX1f8UfrL2/9TTNPaH/J/uR+8+Wb5a75/hjqEfj/9A/U7hdMu8Tv1m13mgH+a/Rg0MPVv/c9wj+Zf3P/pcDWtfu1naMNVde+omB6pn9+zSJDp5yzaC23WYEsxrm1j/s50AEJ0SjbJ7nOZLT+XQ+yvKCWJcqEpNPddL+Am6pPj/XNpRtLzCa3zHtMuEOsHXALRybS2V96pUuv+g5LP/HHKMcpEYxtt79Mxr0Ohf6lLrIhHgcOqPovMyrkeNtpAdsjUKnX8PxmVvtlkiMDY0A55y3ZcNTNDQPDHNkxbAhe1xHQAD+/syfYX+85P/TIPKn2Puqu+XVty3+y76BcUtEJQqu4voHPSnnbL1ucWC0joJxk/cYI+VX8EzU8brkDKDl/3064YJUVeEiC3zte0WxGR15upzuZ0zbpjvZA4W5ChhNs3cqkHgEl5KTu6frht2gDP/f3TumxV/f1+GMW37vF+bU0AI2XMoQvcPOs0gaaK4qeQFiMIlsTCTGfkY3kegQF0of5eoRZ+W5hZuRcZmT4zDU2kAiL1uGtZ5yb4LTht8bjenYtn9o7IxNleHnLKj+vVT9uio+chd/4wpHfeA9RJRJYdgMsru6dcSIv9p/1rX0lt/I5iHHFw7J7V/JpTSN+Z5y9IEHXjhLVOcltsVWnuNq5f70usc38GJg53Va+N5Lu6bSdLD50OdlwyfyYeG0bRrdJNQWGrFBn59ABHBgD5TBh9bd2pQqSmmMU4YEsvY53195ra3WiGJEq/RHBU2B7mOEapF8lWk7zVXwLh/99XOdsu4fxfr3optkRoppr21h2aI3CVw4n+xkUfxA3TmHvIHXCu3oa38IZMmh09FhquGbb8IL8BwT9nL6/gJHEM+tsQrlMOOPekKj6EZL1KzMfshJAhblwSgsi5btF1uNfP35628NL2B8lLvGr0JMBytRX1DQtX1e37WOv62GOYgAnTydO4eEnqZe/TFc/LlvgKxxd4RTjkP2OX8s4viWm+7GS4MvkdK9lehmYCf8AdbMcvM+E3LOc/7gHcffbQUvyqGL2jYmj/ptvKZDhYdHaWKltEF59M3l+UtRr6HhvczY97Bl8d09UdPV5vDqDeJWwTP0RYlk4xyJ6l6ECyLeIqVDiOpFPunWUloCTA74pj3NshkVqR16ZRO8sYVLM7Ts5HUyk+m+9C6i7ncBUT7kdXXqLbHB8wEah7cbvMCAsyx++U6waf24nnakfJo/4ed99294d8rxUTIXMTzNqp5fcThfG0fSaZk0tL3dui6vdTCtzjvyOWEefWPeqDj26aLJeNLV1hVT1ZVijMgqafjMqXbEry9NJa8P+AYM88v82UoimJCFnAQJlxo87ZK5zAyMUO2BllaKyogTtEpFLwbO716SmGoXRAduJXxgtvBQW21WiNjJ2LvIM8JG1MNy8MDBcrRwbYSm30w1ddNvPsoxHWQD35NEFvJce3MqDR3FtzN3ZpAskvm9dfso6/6lOwGgDdtk3cEoUaaPFwCvEHDwjf+WXSZgwzX7of3yIjjVJRNLs32Rt9P2a14xM2KZmNZ8UKEaA0fxoQMhHAM45hua/eOT69CTyvdq4TJ6x9/wj9B/syWbKOpFol4KHV0lVdsroFrq7QALMLJPpaBKlIYoRIZuzJr8EfvFYsNJtLhdz5HYbnogkr7bQljhL4+r2XhuzgIy4ZERIwv6Ap6nOqdyF4ecAA9joAKaqH1Jcq61HZ8JfSw57KeE6u/jAahdIjXmoi5DnXapcs0PPsN9/yh2htoiswKHtg0h42y+UoZNQ0HSagflOImC+XAkSL67UIIwYd5RFCEgFu/vzdJ0Ip26P3gTfXxH12JdIJcSxtWBF0j0pQuE0GA5WtYojLrTIx8gvhRY3qUMrhiS/Q4B6FY8vEj5XmGDXRxY8vWe5xnHoPAfDHa/1VPwAwP+2R1Vudf+Y0G263op/qCUYr/y8WrZSDxH/SrXTV1/YBHh/eLkbtJrS6xuBm2QV28Lq0xYKRl0okp8yX3UObge4yUt8xPcFrn096ixgSrXZPt9Zib9bIynPBCiP+Fs+KCshiw6F4zjSeSl3iyuu/8Fi+GFzJZaoqt3xvGnZ26Gfewhs+/jsHmmSHtYn6OcmazWkj5jOmGKHFqsV56bOrlNkq8H+tQuxPuY0NtRiHOZqwEnd/RtDgRp1OMhtsaKC6OkyZxr4/xwHxHXZ6nnlZp749P6KCMObfmMiP+QHOMf6T0nbLDAkLj3snKb5V+2PrT+yT/TvyYfSiIB+DUNYb6L8H+g1G+xytvU/iD0dljTgGZllly8NtGkdBx5Jz9GnnWrpe1e/QRbqiYCbwpXvfQAz4htkdYIMO4ru2z2Q/qPUU+evXb9w+l+0j0qxA7YEKcge4cpu4wzBcNzqmwdK1AUtd0Z2aKy+4BklOt+U/0S1nFx1VWLCRoTkTS/QvnTjSXJGJb0fNwUwZ65a61cLxfz8xPTyT5qogLrWWsodM/9Ieh1b8UfUJarWnjyIn/6hMVtAxdu20/Sk0OD3eOSQrvU2DV2vayMhZfJXrJaYfrQTFjxQ0nzNuNcrc21tuvL23cv/PjBdvLaVAxwdiXxn8Bf6OG9RZvsbbKhrc7elMo/Fbo/x9Knept2ixbyj364kcONXZ0qAjc1FLxdgp0zVT9dP6+KTsf2hvXWX698pr+e/krROADneJkmhqXpIfW4o8RrBOAEICFSlN1kADI8h8/TWKP05p7ZrXnxPGVwg1qXIgHYgSFnG7ZMaAb5sP5cZe395Tei5yt9DouT7UZM67+er/8skmgfAmEqoX+w0QJs4QL7D8nO11ME/r8R3N3ZuijK4AcJurrlu3it/NrkAAAA",wb="/healthy-management-project/assets/Oleksandr_Natalukha_mob@2x-RIG0Ti6n.webp",bb="/healthy-management-project/assets/Oleksandr_Natalukha_mob-ke5BS3BJ.jpg",Jf="/healthy-management-project/assets/Valentyn_Havrylenko-ouVcypag.webp",Sb="/healthy-management-project/assets/Valentyn_Havrylenko@2x-xBjJM6nL.jpg",kb="data:image/webp;base64,UklGRhYIAABXRUJQVlA4IAoIAACQIQCdASpGAEYAPiEMhUIhh4LpVQYAgSgCdMug+p9R5mNffxG1olo7PciPqz40D3zeaL9u/WU9J/oAf1rqQvQA6WP+6f9z0kru//H/UB6r+NT19jO+FOIj2xv1/HzKT/juAZhjx0eNoZv0U/VvsDfzL+y+kB7EPRAGLSjX99J9ZzNLE8a4pa4UJH1G1bbZT7f8m+y2Vmw5BCkZTX096E04HNvPS8diyDb/FLNAyUuwBy7KmAYWypU+98a/f7Vtv2jpD6nK7qZomxNPPCb3ee7gWCv5bq9FEEC8P73MvL4I+gsG7E8WiCwqdfwH5u0es/bij1OknISkJCC49JVzUQksk0UVW/CTacCSJVrP7frTSPYwUf8AAP7/fA9udJf+4vb0yWKvm/3rZXBUdffGuQaaZsao1go9y9Aui8TCXRAtX/ygUgnAFQ7L/LBkDXMHmwb8r6jj+HAtCGguXKqIpRXjqrYQOdieRU5oldUpxrK6xMp5NWNUH7HKpuw4Uj79rtDftZ4NA7f/82V4/MxMoNSgXiE75n/nJ5CZcddkZS2Mm8mWW59qx9ZphX2SSTrfgmLqyMyknsrld2PvStR1xCnP+ye25y+IwCPBjOgB6pWz6iw9yHnNFP9wm/3XAkrQ7NDpv+aMojU4UavBwkCxuUAMPK6mYHUNDrOjpBXV6tSHKR+vfi2L1BVsJtQ0VBexYKf3zqIf/ziwn5/xhbU1x/hSEojr/n2vju6rPNIx+2c31wTi3udDWC/Jdmr13PbuH4kLZgg9R/b2RjGYqfe9y15LduNS7tWXnEks6PscddGtXVewo78N9opbRBRT98Tf9tOuh3ztWU+OE/t+iaLTjMxeslUaMwpxZjsZ3xSG7Tz3cfN/cpoI/5gaOIZyQA1crh2AsDwii/doeUGwXchDU2cQll6dogpmAo26NW/CB3XaiTm8eScLLHbb+KcDZ6RxpJGb1mza1mJcinPsU2PxNfzi7J6Vq/CdHD9kbGPn6WRGt/aMN4gya/Sl22Xm2mqFBJnpA481BPRmRuV6Yp9vlmt7WXAtOesbijLSVp5o6Lo/2gi/lsrl5fSAevupbSGUEX4YOw2i4GFFxOXe5evGQdLcjKPjhLorU8/LTkPAd9f3HiZrXm/Fw/Ir0ETPmsZSzNZsOsSAy3TGn2A/zxz/3eU8MhBFdmkzf7xLhiWErKdb4X0+ZQu/deoRW/Z8r5tPO7MoJUtuUNrcwR+Lft+YA18TqCpK31Ms52xwtKkdB9nEjN61kmP42ld1W9D+TtW9+RrvE3Q7ZSz0/UnmkNzt7+D7nJueh3mkLn6ERd0zIp9LqR4Ru28kZvttRmDtEy7HE0f2dq0FF2Iu8VAUTPP/VBOspawDCanE4+Ukuyg/9dngR8AbmxPe/4xWTWT9hA70B/TKfBWdEtttzAovte+VXw4aIV9jb6zGIGjDA+3Gz/wixWW7q1SuYltOVuh3fdGLeUUAPRyu2METLWhdXPVTv2UR4OmEKQDb2OV15Z82OreMZx8jJ920QptzLRm6IJzyja10klbnfgPByj1WslHJYbYDrtHC87vz5gubljHXr1pJWDMCP+UN8b/eGvHdwS52uWPaNVQb5/+/RW676ysViT9pYQvLjXLrrpkOeqgu9b1N5Z7EOsOUF1hnkKXe47tnjeF0pqvNu3nUjhg/AkbwgMHbTvEnii6/Ym3+C1fr/+XOIBKZ21aUXVYwnSTXOn36IgDIrpQmH+9Kmhmop8vaV0fIcf1RwHlWZSTk0zp8kv4hvya+zjsXo2/RidKfpzNY/PEHbww5dbawwXLhfFss1/LsyDyofDsH3OBSP8134CcVEE1jaMc+ERPdO/1VXW3AXa51kgjSdPL92fvb8MrV1Rq5La/0FygcGUkv6KgEWaEWKFwPEKio3L5LY5sou6yA+3Md9IU8B/GswvjAVk/WnfFIC1IdADmPOiXMGYYcxs93EmXOp7YEf5S07EA+hqTdzzuzYwHyEkam6vpDt5/I/aSf83HaB9MfSF69DZB/a1lEFxN2n6hm75U5FT4VP0xgdv/6UHPIAMUdj1ZA1ROatxUW8NmWb384WI6Nl2CL6OkENusmAfbzuzOTGPiNaEczlVVIsVnvkDc/nwmhs3R4hPxgg03IrEcB/cqXBjzoYGhgkANgX4cqKRp9F+HLUY20nKk86GLaUHkugpJaRJTJmC6SKpcGKJlwc4a6DPiEgs0dDh2JcZX5FHKB1XFd6NK3z9sfKFDULf1C+Ut/6SLezU2pPWX+fY8o40B4AXhCMsx0IEHlib7kTrbp3BdYySG5oKzfZqSdJg5CRp2znwy9SRrgoi6oSMgM6cVmtB1vZjH7UmcOYG6MZs/IgKppnXZYDP9hy5Ih4LjPVnwfcaywlPa7ji1j0hnRd/IhhIkB07T1tGEZ22nhwa1NzjeOQ40ZWF6tbvtKmfG5uCgPgXcxaU385ngez4T2p1v/P+uOqqQAIX/ytkvm/2g4Zx/p4hm3njYrQTLU2+YbGt+t4rahHMegWwABQdbp0gpJ+cXweZgiczr3+z+b/AHMUCfAdXp3L8OffS+P07/Oxj7MYchfPO0dElmkIUGWtf/A+tvmqiZbRUNTebQSZ5qJ+Llg2YVCroyUMjgEIaidBkc0tpQ0b5S+hanR+u1k0EYbxe7Xa/1Aw18vmcCa6XCL/xQDiZMbWPUNf6EWvcCR1S831Tnh7YZKButi8fOP4xq0H4PjgYP1MK9pDRQ8YFefAAA=",jb="/healthy-management-project/assets/Valentyn_Havrylenko_mob@2x-Er7ZIkUj.webp",Ob="/healthy-management-project/assets/Valentyn_Havrylenko_mob-KQjegZSK.jpg",qf="/healthy-management-project/assets/Olha_Abent-lPe8g7w1.webp",Eb="/healthy-management-project/assets/Olha_Abent@2x-fGgXmj71.jpg",Cb="data:image/webp;base64,UklGRpIFAABXRUJQVlA4IIYFAABQHACdASpGAEYAPikQh0IhoQo9twAMAUJZwDTGA2re8oGA5LdKXbAbgzeOPQA6WX9xMIY7C/6X9QHrb41PUHsPnGPt/99/Jvlb2vf7v+PnCvce/XD8utU2/zfJ0xzf9D1P/9Ty6fQ//E/vXwBfxv+mf6z83/7b84HsY9C79ZDl//DnMp08wDnXRfkXYa8eWiuC5cNCTRaKtASLBBeNULEHOQtzHU5PTdRMPHSUoWh1b5PgsmR7MXAxN/kn0O7eGpry5Ahw1WP8dITFR7CJcFbeGzSY9Maai3Q3wT0MdLmzNEU02GvAPaJZ5ooAAP7/9ApjNxC29/i10gSg30cBJsyHW1rl7iPHXPtnXvxYeKv/veaM6s0uZVlh8mn53+FKLnHfD2P40O/ZQYjUZ0zPbi1O0lSnmb/kGkfyBaj4jxXPT+2NbGswoaMXlKtrcy7aQn5hyTEsjOJYhqUa+PUkKL+2d+nXrvn9gqN36ENfKXN85/WiH2DKPVf7m56zZUmz27ztIhanmE0dTEoRlxM0ByxhAyAN3F1VLDivwMbxGR+HXBFNNkOGZyEwlLFxIGxA6AJw0kN9o9yx4OOXJSgPSq1hbEdfyg8kMe3VqAkNV9Nf7GMQ4/3qAH1AMMYorQkocnAvtbYL0+Ni36P1FsfE+sayN3VvVlx3ZPkuocFZ2dA6PufIHqFkR8iLeaedrzmDxCYZDn0ZanhLiueHBg/1rf+Tcz3b0JSCynsLOAlxE69zgZp6kWTrnpoo/vTyzN3KY806FGo1Q1nnNG1reusXz47IZvN43RHdarb1Fw4O+XgQs4GOWYXen2S/K5i1Kwy0bQi/nYdY+S7He+lt9WzSP+5/eN7yifzK4XcDDzQEDW+809GWDFvrfMaahNYA3+Upc//qoMlIoAaT9diUEwkyZqsdEY6+RE30BIZcaCFBxyhHMs8l/8m3RCxzdQss1A9NKCc7aJY6/8ECPPLZB3kqemBEnUR+xBJ18+NCOJ0wPakFq+ukJoyB/oHx63WEVV7VJorOp6NKjHSBjGooR//NehiPgB/+4h+3KIYMrS5fe4kjOWfXZZ9wftX/oRz8zUif9ml9tfC/V/jrq+ZZ9K5a+2Pzguvt6+ybrxE2Fqf3eIUL1/jz69xwNqf7/rFlecN3XWUqOPv4Lj3+y9WZnGe5oJ19mxv+BCf1VAvOxVqC7ijF7qjZi5O3LDgofbwdSZz/FAT/TXh6456rfOrZ9H/ydddM9D+bS1gb+RO8TvnBjfu1SAON4HW5tut2kxhSrQu/o4zYgvEVDI+vZaSsEBnaW2sABdmQw5/DOOgsIWAfemMSH9CrEFO3kmnbOp5C//1ZpMv8R++EikjLb8W2chF1lp6vQx0shbzOe5HplYEf4Cf/+e5fBoRv163Ip9NxsyCFls8ikcK8SoOkbkGvcMyu2YuPJdjORvQw5KRHfKlk1we0FX4xKhE5RmETMX8ykyqN5mU7a2U3TtSuqY94iD4Ki6GWKC0I+3JMbCp3c+KFDs8jLUOO1MQ/yXBJBtB4JeS9jYdJbZwnJi3RPdtoe2XhhWT1YiUYSIfK4M1UrsKDsWbFzAlaJQBIMSxeVlTUKqNmueolkcmrKqIizHh//ITodav6PEveAU5wDPP/+8ZONB4y8Jp1Tz5Dy9h1wYUwZ31P7YBchnfB+6YSGiGPX5/UgifuUMZ/7ZXG28bPp6JjyyUGHqZFmOO57toAT3mA05uNM4/+aVUfrbhTcOOLw1ccLU7Ucf+Dssa7DPj/3hF/7p6e4v/4/BFjzXjQcZt47ZIH4MpiHSuu8nnzOD6gFutSUbT6mOtClq58PneD9mXwiaQJkAFFh+Ojy3Wu+otQgRmKnLD7q8dDuvK/We0/HKvw9vkqGyO3MAAA",Pb="data:image/webp;base64,UklGRhwMAABXRUJQVlA4IBAMAADwOgCdASqMAIwAPikSh0KhoQrc1pwMAUJZwDWaQA1+30nnDWB/N8IaY/tMyRepfxQ+nX5jPKm9Yn+Q9HL+zdaf6GHS4X7v24/3L8kvPPyQ+xParlMxHflf4N/U/l17V+Efqy8nv+W/Kz8wPb73dYAPrN/rfyq/qvPj9lPNP/0XJqcgPcF/M//B+035af93zhfSf/N/zf48/YN/Mf6l/uf77+6/eP/ar2UP1rN9X8/dvWcpwm3gqyTvMoKlWkxmJy+YCbNXwI25mr0/QFzNTQdQn23pjh5ThxtlTzTfCHb1Z5wnOREK0UUXvG+RI9yNkuDnor1rwiBABpSlHLS+/2+ScGJQw2OVccj670v+tlN+QwKNZvq9FliNIurGLemNwAoYDBZwD8230f0SLONXLILu36iO6YxPLzeywf6z0lgXiNt6NgNRd8JtYV1lKgxo0M2eAfV2hB1QXKJB5Xy8TTfhfdj+AQXXFmaN/8LFU28P4eJaT8Gvady0JSJ4gfX+qb8kdtDX1vjNmoWulZHQBBQqdF1F5Z8syWJoeMXsnyV5iOB62Uy7dI3QvHUxAYYdCvIY5S/UwQTkcAN0YRWkupHWk/zwcUjwkPPIBJc8J+MzlJV0tUT9SY8kLMBejlsBowAA/v/zxZ6y1kBLAIqU3jAG/XYG7ASSH7Ne89/u78IYJLtHeLkyPPvlfNt1BJC6UXt2CalH1vZLKWWTaI0/MY55P4ztp9Z/8vT40hWmA4HxZf2RBp8z+XZAV1ao3k66WfMVx9AGjVHmb8vjDzf5Yj54tsMOfcBeJYcvUTZRCNQu0nK+yz/fm+TYnyZWfcfD16b51BbO7WUD9hm68L7+GQLbEb/nbgb+oZHTUtlNmMWzOJWDjRdByA6z+WoEfSAJ7CPEpyC38MsRCDMZreub53ZpLlojQ7vB6mb/S5an3XsbivKdCcSe5gUzFMNvRF9UKLN1YyGQh9xYgWuoY+5wt99zXD8+Jm2Zud/PZJ4c3NSTNQKle1ouByHJVQMfeyjtOOn2CsBaklRxHxRifxV3OuuhmPQ3V2qXESpJZMoCAhw171lxtMjHvZg4zqtHJ0Z7Dpv+QhTmnssish0edegVrE1jF+xs7TGLpnZg4OWCc0IE5jLHXmo2WKFkrXBMf5K93p5ULAkVOs6CHFEipx4tTIYzdlBwzvnC2Q/reK9QMN/J8UGwqNHIuDVF04ZAixyn08+yhr26zbsHuGnZKd9t3wnhltY1JMupnFmis53TbmgQPa7Vxc1j+4jZadXj0mywRWZssrtjMw86URH3mAmb4V+FQry1um0FGUfv+2+15YDKjjlEyUhemtOM9K/pAq8ZOB5SMfS2Kx2uWuTJ9u4JDZiWRkXDKdBV/8/+z2GwBtQPfax1x0zB5hjjt6qQ8tPOcfcoKl1hrHCkCOhsIDgiK/VxJIRkdkAuNo5PusOVfSIHvtO4s/cnNxKEPH3Yei9R9mmuVfnP47fxJrHJN2zWU0K69vglYpZojiY0ZiMafir7hkNcaerL0TOCwi0zi30V4Fqw/iN9WJnQ0yOHwPEyK5tte1oGRnDRDAh3w1lY88MBfYnMJtN3IAPRY2NC+9/M78F8XNz4EA8QSrjNfTEwLYSklIX3B5w3sLGao9t5KLFjbpr450ES4uK2ci8VG+3Cnlj1HYse7IAPBF8DCyq+YtWbL3fsDbjfTZTruixVIbcBrxJh7P3Vba4IAThwldO9HhAD8/da36uZwGz55yPiJopQ1ArwZA/qMie/lKSMUSQHXwME45MLOkyseDlUFOJXJZA7JFKPaGP4a1SMFpAv8RMQafFfbqrv6x1qR+fb2Qfjss4LEgRtrPhQPUL+zw5O0KLg0pkKMEaj2zP4LW4j30kKtmZWAPny6k8ZjATXVz5XHdrTX6+V8UpwoL9h+0Kz6FSDp1Ug0rSCSgt/eg/JneGTum43Pj/h9rKKXgJmL33iwrcb3jJ05RVhq5h1x4seaDPH69BEDoFuy6HXr7eYf01/Ohk7/XRXMLl4vFE0Lj4ALy6w4/Sl5Kea5B3r4Kdg97qU2rzUKOOJ0YV/Ztnn88NvxiyV4TeN8nPa/ABFpXwJffSshyFAr3jHfpf9kFoypV7BGLVj1EUuPEi6R8tlhG6NXZJ4K4q66zVSwq3V8jdpgnfIOExusWkwqSnidWX9cNNCcU7ia3sygIz3OZpa23xN3K3KbNJUfTxJoUTiqtbj1CVWw1g93OAkzGc4NYnT6vlMf8D0G5Z7WMRAbxN6A2fwz26xdy2dOTYb5z+PeWum4nm4DM0BEvs74v6SwvKEDt1YFagfAfofAcHSgpnIuESv93179JBeyq8OBO/TFfWNKBhVONTCsTQZoamIQi2pcZhEO+kSf+dXgPfGtmmJf3qLpqj8GT4cb91wKHgPYf5QEXg3kGSe+jdswFrhnbO19yZgr2sxnPSUBrszCpSMTXcTTDYiGskh8UKhJdlVHlVMRw7WdL6MOsrhK5/mJJrlS1SwnGfEHTqR8RVhTXxtG87FP+MRScX1c9rZk9afGOZ1YzL77XBd5wLGl2EKkF4QAtB9/Ps+pJ3LT2xQx67MZMJm1A7R+PMIuBPMxrxLyra+fgiC3+BOxOIPJvTgnn9I054VVG7nIV5GSkDhGw/Pe1Dd26zr6n4oE9cMnPu/39wYzWGsOgfokPr/eJ9VX39dgqNAcMiPCQXcQ558AtHYvP6FMKS680vcRKSkcN/ad+aBfzAL4yQP4YmIdTZIkhPywawihyZOx9Lyy0unjR6giU6tINM2qACAUYn2ebbvP/+ojL7METtrfu6Kq+6bcd5Deh/fjESvZpxYRZkxDRuOJeVSW80xo7zE2nJsuOED8RPKX2Z9f29MxufDlUIuZXZxzGRIyZt2jqFfODK9d7edbJ4zPhIyMqtk0hqdVf29Y7pCuUHsNqqdpeTMQeRMnfLDVDXEsRjaqRj4qFtzhSoi2Dwgtdgb7pWMoThIZmAN+R6fWa9pxjHQl6ltyFRAKVo+kRfkZeShY4CuhrWJtu7Av9XSoTB8+tlqfHChlPBVhlKrCD6br56Sb4ABxhuYn5LB2rloOTACFxHpCAGozr10AEl0eJ+BXIYXwAwqWmpmV87gUdlVG6xjxa/vw4aKSQpmeceJXb9eFbG6ObVLdWKF/IYem83n+m4y62Fi9jSYUB5C+FREMf5+nzXwLEFFST/5EJKFmqtCcXLbi2mU5GOaVjQh/xUtF4txzF4UCBP2R7adzXGDQSYDyGCv06J3mfkfvrSCX/75n/I5p8W093VgA0/WzqaePt8QduXtRSfhr83Tf0axr5Lv4s4rUANltj9r4EyUdjPWYCPDzjRQCjPEick2tbQLejZvrdTeemn8HtZuRx13aU2GtHenprj/UkHwa4PrHpQUvC3n+ZJCowsmLrYEE0LQiJNjxsAerhlQahSggetGJpaaSK0OFp1TqZVMZp9+RRWqsko+yQ0FJwlMcvAYWf/w6P3q/xIVjHn+X+7EvojFmQgFsKQ6HGrtw5rPauOEhd6gSROSSce8JrfBQG4pIjfrppx86mKhhl0o32Wf8gFWtpxT8Q4PpOVWH8qJvZj9RjlKFctwiYUqkCCPvZ+/71NTlogFkI/p6nUMhqaC68vrOV1XTRPjunmaaV4rBjnKkl2yF48eM9rtsXYFX3FRoaX3CIo5lMOulRI6AnPca/+nXGgSUCz0iJJVIQr7QZlVNV97YVHVKm4T+FV4ZzNPIr0vHANNEdsCO7itoeLl/rAgfQIPEZTV2rR/Fv8b9Hgj2VFXPtwnp1VWiLhbkHJdxpwlfxLqfS9okgu2cu8nnZXJwJTWWSum47RuRmqzrkX4j32Nrc50fhxYoKajWSBVAc54Pfjxp/tGdz5LRnwot8WbQOefLBoLwmRXJcXOgwnxb4WMPJuxUSXxTqE4C2DA1usb2h/nvgKdAb/RrrfgTUdgZOgBi//UzqVCKGeqCFf4ZYA9d2YOi0bT9DrQpZ8YHIM+4oO8P771uNBpn3vpf6VgVQKPLimE1/ZbJHpeU2pM61LPOPttmTly91gQwk/nylnz52dt+OeMxmGz/WAG4yTenebAGbxaT8nS2T8ARaeQtkxsRdR3Wfvuj1H/YAAA",Tb="/healthy-management-project/assets/Olha_Abent_mob-OELuHJGt.jpg",Gf="/healthy-management-project/assets/Viktoriia_Moryc-tWw5-4of.webp",_b="/healthy-management-project/assets/Viktoriia_Moryc@2x-AxiRex6x.jpg",Mb="/healthy-management-project/assets/Viktoriia_Moryc_mob1x-i9eVsNxq.webp",Ab="/healthy-management-project/assets/Viktoriia_Moryc_mob@2x-ZF_1f7DI.webp",Rb="/healthy-management-project/assets/Viktoriia_Moryc_mob-7w-XgnKm.jpg",Zf="/healthy-management-project/assets/Vyacheslav_Pavlyuk-py_hj3lz.webp",Ib="/healthy-management-project/assets/Vyacheslav_Pavlyuk@2x-2qCtSSAb.jpg",Lb="/healthy-management-project/assets/Vyacheslav_Pavlyuk_mob1x-ayDkVe2o.webp",Db="/healthy-management-project/assets/Vyacheslav_Pavlyuk_mob@2x-yWKoviF3.webp",zb="/healthy-management-project/assets/Vyacheslav_Pavlyuk_mob-7v_64oYD.jpg",ep="/healthy-management-project/assets/Yaroslav_Li-nn0P6bIv.webp",Fb="/healthy-management-project/assets/Yaroslav_Li@2x-xfuqLdiI.jpg",Nb="/healthy-management-project/assets/Yaroslav_Li_mob1x-WRXC_pfB.webp",Vb="/healthy-management-project/assets/Yaroslav_Li_mob@2x-hfyZuTJ6.webp",Ub="/healthy-management-project/assets/Yaroslav_Li_mob-XCPFEv8b.jpg",Nu=({handleClose:e,isModalOpen:t})=>{const n=i=>{i.target===i.currentTarget&&e()};L.useEffect(()=>{const i=a=>{a.code==="Escape"&&t&&e()};return(()=>{document.body.style.overflow=t?"hidden":"auto"})(),window.addEventListener("keydown",i),()=>{window.removeEventListener("keydown",i)}},[e,t]);const r=document.getElementById("modal");return t?$y.createPortal(c.jsx(ib,{onClick:n,children:c.jsxs(ob,{isModalOpen:t,children:[c.jsxs(ab,{children:[c.jsx(lb,{children:"Команда, яка створила сторінку"}),c.jsx(sb,{onClick:e,children:c.jsx("use",{href:`${ne}#icon-close`})})]}),c.jsxs(ub,{children:[c.jsx(An,{children:c.jsxs(Ln,{children:[c.jsxs(zn,{children:[c.jsx(J,{minWidth:320,maxWidth:1439,children:c.jsx(it,{srcSet:`${Mb} 1x, ${Ab} 2x`,src:Rb,alt:"Вікторія Мориц - Project Manager"})}),c.jsx(J,{minWidth:1440,children:c.jsx(it,{src:Gf,srcSet:`${Gf} 1x, ${_b} 2x`,alt:"Вікторія Мориц - Project Manager"})})]}),c.jsxs(Dn,{children:[c.jsx(Rn,{children:c.jsxs("a",{href:"https://www.linkedin.com/in/viktoriia-moryc-61610962/",target:"_blank",rel:"noopener noreferrer",children:["Вікторія Мориц",c.jsx(_n,{children:c.jsx(Mn,{children:c.jsx("use",{href:`${ne}#icon-linkedin`})})})]})}),c.jsx(In,{children:"Project Manager"})]})]})}),c.jsx(An,{children:c.jsxs(Ln,{children:[c.jsxs(zn,{children:[c.jsx(J,{minWidth:320,maxWidth:1439,children:c.jsx(it,{srcSet:`${db} 1x, ${fb} 2x`,src:pb,alt:"Юлія Копитко UX/UI Designer"})}),c.jsx(J,{minWidth:1440,children:c.jsx(it,{srcSet:`${Xf} 1x, ${cb} 2x`,src:Xf,alt:"Юлія Копитко UX/UI Designer"})})]}),c.jsxs(Dn,{children:[c.jsx(Rn,{children:c.jsxs("a",{href:"https://www.linkedin.com/in/juliakopytko/",target:"_blank",rel:"noopener noreferrer",children:["Юлія Копитко",c.jsx(_n,{children:c.jsx(Mn,{children:c.jsx("use",{href:`${ne}#icon-linkedin`})})})]})}),c.jsx(In,{children:"UX/UI Designer"})]})]})}),c.jsx(An,{children:c.jsxs(Ln,{children:[c.jsxs(zn,{children:[c.jsx(J,{minWidth:320,maxWidth:1439,children:c.jsx(it,{srcSet:`${Nb} 1x, ${Vb} 2x`,src:Ub,alt:"Ярослав Лі - Frontend Developer"})}),c.jsx(J,{minWidth:1440,children:c.jsx(it,{srcSet:`${ep} 1x, ${Fb} 2x`,src:ep,alt:"Ярослав Лі - Frontend Developer"})})]}),c.jsxs(Dn,{children:[c.jsx(Rn,{children:c.jsxs("a",{href:"https://www.linkedin.com/in/yaroslav-lee-b7070b294",target:"_blank",rel:"noopener noreferrer",children:["Ярослав Лі",c.jsx(_n,{children:c.jsx(Mn,{children:c.jsx("use",{href:`${ne}#icon-linkedin`})})})]})}),c.jsx(In,{children:"Frontend Developer"})]})]})}),c.jsx(An,{children:c.jsxs(Ln,{children:[c.jsxs(zn,{children:[c.jsx(J,{minWidth:320,maxWidth:1439,children:c.jsx(it,{srcSet:`${mb} 1x, ${gb} 2x`,src:xb,alt:"Єлизавета Доманська - Frontend Developer"})}),c.jsx(J,{minWidth:1440,children:c.jsx(it,{srcSet:`${Qf} 1x, ${hb} 2x`,src:Qf,alt:"Єлизавета Доманська - Frontend Developer"})})]}),c.jsxs(Dn,{children:[c.jsx(Rn,{children:c.jsxs("a",{href:"https://www.linkedin.com/in/yelyzaveta-domanska-2185a5292/",target:"_blank",rel:"noopener noreferrer",children:["Єлизавета Доманська",c.jsx(_n,{children:c.jsx(Mn,{children:c.jsx("use",{href:`${ne}#icon-linkedin`})})})]})}),c.jsx(In,{children:"Frontend Developer"})]})]})}),c.jsx(An,{children:c.jsxs(Ln,{children:[c.jsxs(zn,{children:[c.jsx(J,{minWidth:320,maxWidth:1439,children:c.jsx(it,{srcSet:`${yb} 1x, ${wb} 2x`,src:bb,alt:"Олександр Наталуха - Frontend Developer"})}),c.jsx(J,{minWidth:1440,children:c.jsx(it,{srcSet:`${Kf} 1x, ${vb} 2x`,src:Kf,alt:"Олександр Наталуха - Frontend Developer"})})]}),c.jsxs(Dn,{children:[c.jsx(Rn,{children:c.jsxs("a",{href:"https://www.linkedin.com/in/oleksandr-natalukha",target:"_blank",rel:"noopener noreferrer",children:["Олександр Наталуха",c.jsx(_n,{children:c.jsx(Mn,{children:c.jsx("use",{href:`${ne}#icon-linkedin`})})})]})}),c.jsx(In,{children:"Frontend Developer"})]})]})}),c.jsx(An,{children:c.jsxs(Ln,{children:[c.jsxs(zn,{children:[c.jsx(J,{minWidth:320,maxWidth:1439,children:c.jsx(it,{srcSet:`${kb} 1x, ${jb} 2x`,src:Ob,alt:"Валентин Гавриленко - Frontend Developer"})}),c.jsx(J,{minWidth:1440,children:c.jsx(it,{srcSet:`${Jf} 1x, ${Sb} 2x`,src:Jf,alt:"Валентин Гавриленко - Frontend Developer"})})]}),c.jsxs(Dn,{children:[c.jsx(Rn,{children:c.jsxs("a",{href:"https://www.linkedin.com/in/valentyn-havrylenko/",target:"_blank",rel:"noopener noreferrer",children:["Валентин Гавриленко",c.jsx(_n,{children:c.jsx(Mn,{children:c.jsx("use",{href:`${ne}#icon-linkedin`})})})]})}),c.jsx(In,{children:"Frontend Developer"})]})]})}),c.jsx(An,{children:c.jsxs(Ln,{children:[c.jsxs(zn,{children:[c.jsx(J,{minWidth:320,maxWidth:1439,children:c.jsx(it,{srcSet:`${Lb} 1x, ${Db} 2x`,src:zb,alt:"В´ячеслав Павлюк - Frontend Developer"})}),c.jsx(J,{minWidth:1440,children:c.jsx(it,{srcSet:`${Zf} 1x, ${Ib} 2x`,src:Zf,alt:"В´ячеслав Павлюк - Frontend Developer"})})]}),c.jsxs(Dn,{children:[c.jsx(Rn,{children:c.jsxs("a",{href:"https://www.linkedin.com/in/vyacheslav-pavlyuk/",target:"_blank",rel:"noopener noreferrer",children:["В'ячеслав Павлюк",c.jsx(_n,{children:c.jsx(Mn,{children:c.jsx("use",{href:`${ne}#icon-linkedin`})})})]})}),c.jsx(In,{children:"Fullstack Developer"})]})]})}),c.jsx(An,{children:c.jsxs(Ln,{children:[c.jsxs(zn,{children:[c.jsx(J,{minWidth:320,maxWidth:1439,children:c.jsx(it,{srcSet:`${Cb} 1x, ${Pb} 2x`,src:Tb,alt:"Ольга Абент - QA Engineer"})}),c.jsx(J,{minWidth:1440,children:c.jsx(it,{srcSet:`${qf} 1x, ${Eb} 2x`,src:qf,alt:"Ольга Абент - QA Engineer"})})]}),c.jsxs(Dn,{children:[c.jsx(Rn,{children:c.jsxs("a",{href:"https://www.linkedin.com/in/abentolga/",target:"_blank",rel:"noopener noreferrer",children:["Ольга Абент",c.jsx(_n,{children:c.jsx(Mn,{children:c.jsx("use",{href:`${ne}#icon-linkedin`})})})]})}),c.jsx(In,{children:"QA Engineer"})]})]})})]})]})}),r):null};Nu.propTypes={handleClose:Ft.func.isRequired,isModalOpen:Ft.bool.isRequired};function Wb(e,t){if(t===e)return!1;const n=Object.values(t),r=Object.values(e);if(n.length!==r.length||n.some((o,a)=>o!==r[a]))return!0;const i=Object.keys(e);return Object.keys(t).some((o,a)=>o!==i[a])}function Bb(e,t){return e.matches[t]=!1,e.mediaQueries[t]={},e}function Vg(e){const t=Object.keys(e);return typeof window>"u"?t.reduce(Bb,{mediaQueries:{},matches:{}}):t.reduce((n,r)=>{const i=window.matchMedia(e[r]);return n.mediaQueries[r]=i,n.matches[r]=i.matches,n},{mediaQueries:{},matches:{}})}function Hb(e,t){function n(r,i){return r[i]=e.mediaQueries[i].matches,r}switch(t.type){case"updateMatches":return{matches:Object.keys(e.mediaQueries).reduce(n,{}),mediaQueries:e.mediaQueries};case"setQueries":return Vg(t.queries)}}function $b(e){const t=L.useRef(e),[n,r]=L.useReducer(Hb,e,Vg);L.useEffect(()=>{Wb(e,t.current)&&(r({type:"setQueries",queries:e}),t.current=e)},[e]);function i(){return r({type:"updateMatches"})}function o(s){const u=i;return typeof s.addListener<"u"?s.addListener(u):s.addEventListener("change",u),u}L.useEffect(()=>{const s=Object.values(n.mediaQueries),u=s.map(o);function p(h,x){typeof h.addListener<"u"?h.removeListener(u[x]):h.removeEventListener("change",u[x])}return()=>{s.forEach(p)}},[n.mediaQueries]);const{matches:a}=n,l=L.useMemo(()=>Object.values(a),[a]);return{matches:a,matchesAny:l.some(Boolean),matchesAll:l.length>0&&l.every(Boolean)}}function Yb(e){return $b(Xb(e)).matchesAll}const vl={};function Xb(e){return vl[e]===void 0&&(vl[e]={default:e}),vl[e]}const Ug=({handleSetActiveLink:e})=>{const[t,n]=L.useState(!1),r=Yb("(min-width: 1440px) and (max-width: 1919px)"),i=()=>{n(!0)},o=()=>{n(!1)};return c.jsxs(Kw,{id:"footer",children:[c.jsxs(Jw,{className:"container",children:[c.jsx("a",{href:"#home",children:c.jsx("svg",{width:"227",height:"40",children:c.jsx("use",{href:`${ha}#logo-white`})})}),r?c.jsxs(c.Fragment,{children:[c.jsxs($f,{children:[c.jsx(tn,{href:"#home",onClick:a=>e("home",a),children:"Головна"}),c.jsx(tn,{href:"#aboutUs",onClick:a=>e("aboutUs",a),children:"Про нас"}),c.jsx(tn,{href:"#services",onClick:a=>e("services",a),children:"Послуги"}),c.jsx(tn,{href:"#mentoring",onClick:a=>e("mentoring",a),children:"Менторство"}),c.jsx(tn,{href:"#projects",onClick:a=>e("projects",a),children:"Проєкти"})]}),c.jsx(Hf,{onClick:i,children:"created by GoIT students"}),c.jsx(Nu,{handleClose:o,isModalOpen:t})]}):c.jsxs(c.Fragment,{children:[c.jsx(Hf,{onClick:i,children:"created by GoIT students"}),c.jsx(Nu,{handleClose:o,isModalOpen:t}),c.jsxs($f,{children:[c.jsx(tn,{href:"#home",onClick:a=>e("home",a),children:"Головна"}),c.jsx(tn,{href:"#aboutUs",onClick:a=>e("aboutUs",a),children:"Про нас"}),c.jsx(tn,{href:"#services",onClick:a=>e("services",a),children:"Послуги"}),c.jsx(tn,{href:"#mentoring",onClick:a=>e("mentoring",a),children:"Менторство"}),c.jsx(tn,{href:"#projects",onClick:a=>e("projects",a),children:"Проєкти"})]})]}),c.jsxs(qw,{children:[c.jsxs(Gw,{children:[c.jsx(Zw,{href:"https://www.facebook.com/profile.php?id=61551346490841",target:"_blank",rel:"noopener noreferrer",children:c.jsx("svg",{width:"32",height:"32",children:c.jsx("use",{href:`${ha}#facebook`})})}),c.jsx(eb,{href:"https://www.instagram.com/healthymanagement_ua/",target:"_blank",rel:"noopener noreferrer",children:c.jsx("svg",{width:"32",height:"32",children:c.jsx("use",{href:`${ha}#instagram`})})})]}),c.jsxs(tb,{children:[c.jsx(Yf,{href:"mailto:healthy.managements@gmail.com",children:"healthy.managements@gmail.com"}),c.jsx(Yf,{href:"tel:+380673160556",children:"+380 673 160 556"})]})]})]}),c.jsx(nb,{children:c.jsx(rb,{children:"© 2023 healthy management. All rights reserved"})})]})};Ug.propTypes={handleSetActiveLink:Ft.func.isRequired};const ma="/healthy-management-project/assets/symbol-defs--0zN9DRa.svg",Qb=P.header`
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
`,Kb=P.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
`,Jb=P.nav`
  @media screen and (min-width: 1440px) {
    display: flex;
    gap: 40px;
    align-items: center;
  }

  @media screen and (min-width: 1920px) {
  }
`,qb=P.a`
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
`,Gb=P.a`
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
`,Zb=P.svg`
  stroke: black;
  width: 40px;
  height: 40px;

  @media screen and (min-width: 768px) {
    width: 70px;
  }
`,e2=P.button`
  border: none;
  padding: 0;
  margin: 0;
  text-decoration: none;
  font-family: inherit;
  font-size: 100%;
  cursor: pointer;
  background: none;
`,t2=P.div`
  position: fixed;
  z-index: 1200;
  top: 0;
  left: 0;
  width: 100%;
`,n2=P.div`
  display: flex;
  width: 100%;
  padding-top: 32px;
  padding-bottom: 32px;
  justify-content: space-between;
  align-items: center;
  border-bottom: 1px solid var(--system-default-20, #dedede);
  background: var(--system-default-10, #f8f8f8);
`,r2=P.a`
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
`,i2=P.nav`
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
`,o2=P.a`
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
`,a2=P.button`
  border: none;
  padding: 0;
  margin: 0;
  text-decoration: none;
  font-family: inherit;
  font-size: 100%;
  cursor: pointer;
  background: none;
`,s2=[{id:"home",label:"Головна"},{id:"aboutUs",label:"Про нас"},{id:"services",label:"Послуги"},{id:"mentoring",label:"Менторство"},{id:"projects",label:"Проєкти"}],Vu=({name:e,stroke:t})=>c.jsx("svg",{width:40,height:40,stroke:t,children:c.jsx("use",{href:`${ma}#${e}`})});Vu.propTypes={name:Ft.string.isRequired,stroke:Ft.string.isRequired};const l2=document.getElementById("modalMobail"),Wg=({onClose:e,handleSetActiveLink:t})=>go.createPortal(c.jsx(t2,{children:c.jsxs("div",{className:"container",children:[c.jsxs(n2,{children:[c.jsx("a",{href:"#home",children:c.jsx(Vu,{name:"icon-g10"})}),c.jsx(r2,{href:"#contact",onClick:n=>{e(),t("contact",n)},children:"Контакт"}),c.jsx(a2,{type:"button",onClick:()=>e(),children:c.jsx(Vu,{name:"icon-close",stroke:"var(--primary-black)"})})]}),c.jsx(i2,{children:s2.map(({id:n,label:r})=>c.jsx(o2,{href:`#${n}`,onClick:i=>{e(),t(n,i)},children:r},n))})]})}),l2);Wg.propTypes={onClose:Ft.func.isRequired};const u2=[{id:"home",label:"Головна"},{id:"aboutUs",label:"Про нас"},{id:"services",label:"Послуги"},{id:"mentoring",label:"Менторство"},{id:"projects",label:"Проєкти"}],Bg=({handleSetActiveLink:e})=>{const[t,n]=L.useState("home"),[r,i]=L.useState(!1),o=$n.useMediaQuery({query:"(min-width: 768px) and (max-width: 1439px)"}),a=$n.useMediaQuery({query:"(max-width: 1439px)"}),l=$n.useMediaQuery({query:"(min-width: 1440px)"}),s=()=>i(!r),u=()=>{const h=["home","aboutUs","services","mentoring","projects","contact"].find(x=>{const y=document.getElementById(x);if(y){const m=y.getBoundingClientRect();return m.top<=120&&m.bottom>=120}return y});h&&n(h)};return L.useEffect(()=>(r?document.body.style.overflow="hidden":document.body.style.overflow="auto",window.addEventListener("scroll",u),()=>window.removeEventListener("scroll",u)),[r]),c.jsxs(Qb,{children:[c.jsx("div",{className:"container",children:c.jsxs(Kb,{children:[(a||l)&&c.jsx("a",{href:"#home",children:c.jsx("svg",{width:l?"227":"40",height:"40",children:c.jsx("use",{href:l?`${ne}#logo-black`:`${ma}#icon-g10`})})}),l&&c.jsx(Jb,{children:u2.map(p=>c.jsx(qb,{href:`#${p.id}`,className:t===p.id?"active":"",onClick:h=>e(p.id,h),children:p.label},p.id))}),c.jsx(Gb,{href:"#contact",className:t==="contact"?"active":"",onClick:p=>e("contact",p),children:"Контакт"}),(a||o)&&c.jsx(e2,{type:"button",onClick:s,children:c.jsx(Zb,{children:c.jsx("use",{href:o?`${ma}#icon-menuburgerhorizontaltablet`:`${ma}#icon-menuburger`})})})]})}),a&&r&&c.jsx(Wg,{onClose:s,handleSetActiveLink:e})]})};Bg.propTypes={handleSetActiveLink:Ft.func.isRequired};const c2="/healthy-management-project/assets/hero1x-6AVSlzud.webp",d2="/healthy-management-project/assets/hero@2x-N6Dvbfg6.jpg",f2="/healthy-management-project/assets/hero1x-d4IOBsel.jpg",p2="/healthy-management-project/assets/hero@2x-qDoBpvI0.jpg",h2="/healthy-management-project/assets/hero@1x-gjNVfS_G.jpg",m2="/healthy-management-project/assets/hero@2x-xeAfw2Nx.jpg",g2="/healthy-management-project/assets/hero@1x-T7izVw7M.jpg",x2="/healthy-management-project/assets/hero@2x-MzaNEgZc.jpg",v2=P.section`
  background-repeat: no-repeat;
  background-position: center;
  background-image: url(${f2});
  background-size: cover;
  margin-top: 120px;
  padding-top: 40px;
  padding-bottom: 40px;

  @media (min-device-pixel-ratio: 2),
    (min-resolution: 192dpi),
    (min-resolution: 2dppx) {
    background-image: url(${p2});
  }

  @media screen and (min-width: 768px) {
    background-image: url(${h2});
    margin-top: 120px;
    padding-top: 234px;
    padding-bottom: 234px;

    @media (min-device-pixel-ratio: 2),
      (min-resolution: 192dpi),
      (min-resolution: 2dppx) {
      background-image: url(${m2});
    }
  }

  @media screen and (min-width: 1440px) {
    background-image: url(${g2});
    margin-top: 120px;
    padding-top: 236px;
    padding-bottom: 236px;

    @media (min-device-pixel-ratio: 2),
      (min-resolution: 192dpi),
      (min-resolution: 2dppx) {
      background-image: url(${x2});
    }
  }

  @media screen and (min-width: 1920px) {
    background-image: url(${c2});

    margin-top: 120px;
    padding-top: 296px;
    padding-bottom: 296px;

    @media (min-device-pixel-ratio: 2),
      (min-resolution: 192dpi),
      (min-resolution: 2dppx) {
      background-image: url(${d2});
    }
  }
`,y2=P.h1`
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
`,w2=P.h3`
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
`,b2=P.ul`
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
`,S2=P.li`
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
`,k2=P.div`
  display: flex;
  flex-direction: column;
  gap: 24px;

  @media screen and (min-width: 768px) {
    flex-direction: row;
  }
`,Hg=P.a`
  display: flex;
  // width: 100%;

  min-width: 327px;
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
`,j2=P(Hg)`
  color: var(--typography-bluedark, #062136);
  background: var(--primary-yellow);

  @media screen and (min-width: 768px) {
    min-width: 260px;
    font-size: 15px;
    line-height: 24px;
  }

  @media screen and (min-width: 1440px) {
    min-width: 193px;
    line-height: 18px;
  }

  @media screen and (min-width: 1920px) {
    min-width: 260px;
    font-size: 16px;
    line-height: 24px;
  }
`,O2=P(Hg)`
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
    min-width: 193px;
    line-height: 18px;
  }

  @media screen and (min-width: 1920px) {
    min-width: 260px;
    font-size: 16px;
    line-height: 24px;
  }
`,E2=["медичний менеджмент і маркетинг,","програми управління здоров'ям для підприємств та бізнесу,","менторство"],Uu=({type:e,children:t,href:n})=>e==="contact"?c.jsx(j2,{href:n,children:t}):e==="services"?c.jsx(O2,{href:n,children:t}):null;Uu.propTypes={type:Ft.oneOf(["contact","services"]).isRequired,children:Ft.node.isRequired,href:Ft.string.isRequired};const C2=()=>c.jsx(v2,{id:"home",children:c.jsxs("div",{className:"container",children:[c.jsx(y2,{children:"Бізнес-партнер з розвитку та комунікацій здорового менеджменту"}),c.jsx(w2,{children:"Будуємо ефективні стратегії здорового менеджменту для медичних брендів:"}),c.jsx(b2,{children:E2.map((e,t)=>c.jsx(S2,{children:e},t))}),c.jsxs(k2,{children:[c.jsx(Uu,{type:"contact",href:"#contact",children:"Консультація"}),c.jsx(Uu,{type:"services",href:"#services",children:"Послуги"})]})]})}),P2=P.section`
  padding-top: 40px;
  padding-bottom: 40px;

  @media screen and (min-width: 1920px) {
    padding-top: 80px;
    padding-bottom: 80px;
  }
`,T2=P.div`
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
`,_2=P.h2`
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

  @media screen and (min-width: 1440px) {
    font-size: 36px;
    line-height: 48px;
    margin-bottom: 24px;
  }

  @media screen and (min-width: 1920px) {
    font-size: 48px;
    line-height: 56px;
    margin-bottom: 40px;
  }
`,M2=P.ul`
  display: flex;
  padding: 0;
  flex-wrap: wrap;
  gap: 24px;
`,Vo=P.li`
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

  @media screen and (min-width: 1440px) {
    flex-basis: calc((100% - 24px) / 2);
    height: 142px;
  }

  @media screen and (min-width: 1920px) {
    padding: 40px;
    gap: 24px;
    height: 200px;
  }
`,Uo=P.svg`
  width: 64px;
  height: 64px;

  @media screen and (min-width: 768px) {
    width: 80px;
    height: 80px;
  }
`,Wo=P.div`
  display: flex;
  justify-content: center;
  align-items: center;
  width: 64px;
  height: 64px;

  @media screen and (min-width: 768px) {
    width: 80px;
    height: 80px;
  }
`,Bo=P.div`
  display: flex;
  flex-direction: column;
`,Ho=P.h3`
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

  @media screen and (min-width: 1440px) {
    line-height: 24px;
    margin-bottom: 16px;
  }

  @media screen and (min-width: 1920px) {
    font-size: 24px;
    line-height: 32px;
  }
`,$o=P.p`
  color: var(--system-default-10);
  font-size: 14px;
  font-weight: 500;
  line-height: 20px;

  @media screen and (min-width: 768px) {
    font-size: 15px;
    line-height: 22px;
  }

  @media screen and (min-width: 1440px) {
    line-height: 18px;
  }

  @media screen and (min-width: 1920px) {
    max-width: 542px;
    font-size: 16px;
    line-height: 24px;
  }
`,A2=()=>c.jsx(P2,{className:"container",children:c.jsxs(T2,{children:[c.jsx(_2,{children:"Чому обирають нас"}),c.jsxs(M2,{children:[c.jsxs(Vo,{children:[c.jsx(Wo,{children:c.jsx(Uo,{children:c.jsx("use",{href:`${ne}#hands-shake`})})}),c.jsxs(Bo,{children:[c.jsx(Ho,{children:"Надійне партнерство та менторство"}),c.jsx($o,{children:"Ми налаштовані на довгострокове партнерство і дбаємо про комфортні та чесні комунікації"})]})]}),c.jsxs(Vo,{children:[c.jsx(Wo,{children:c.jsx(Uo,{children:c.jsx("use",{href:`${ne}#setting`})})}),c.jsxs(Bo,{children:[c.jsx(Ho,{children:"Індивідуальний підхід"}),c.jsx($o,{children:"Кожен бізнес і послуга мають свої особливості. Ми занурюємося у ваш бізнес і пропонуємо індивідуальні стратегії, які допоможуть вам досягти успіху"})]})]}),c.jsxs(Vo,{children:[c.jsx(Wo,{children:c.jsx(Uo,{children:c.jsx("use",{href:`${ne}#icon-lamp`})})}),c.jsxs(Bo,{children:[c.jsx(Ho,{children:"Експертні послуги"}),c.jsx($o,{children:"Ми опираємося на передовий досвід і використовуємо як класичні, так і сучасні підходи для досягнення поставленого результату"})]})]}),c.jsxs(Vo,{children:[c.jsx(Wo,{children:c.jsx(Uo,{children:c.jsx("use",{href:`${ne}#icon-puzzle`})})}),c.jsxs(Bo,{children:[c.jsx(Ho,{children:"Комплексні рішення"}),c.jsx($o,{children:"Наша експертиза дозволяє пропонувати комплексні рішення для ефективної співпраці"})]})]})]})]})}),R2="/healthy-management-project/assets/pic_mentorstvo1x-R5bIGNq0.webp",I2="/healthy-management-project/assets/pic_mentorstvo2x-k6d-_Us1.jpg",L2="/healthy-management-project/assets/pic_mentorstvo1x-DCmM7Ygj.jpg",D2="/healthy-management-project/assets/mob_mentor1x-_de1iGBc.webp",z2="/healthy-management-project/assets/mob_mentor@2x-oAKhVwNJ.jpg",F2="/healthy-management-project/assets/mob_mentor1x-1WPWjsx0.jpg",N2="/healthy-management-project/assets/pic_mentorstvo_768_1x-Px4J1LUl.jpg",V2="/healthy-management-project/assets/pic_mentorstvo_768_1x-gkJzTmk_.webp",U2="/healthy-management-project/assets/pic_mentorstvo_768@2x-S5qjgsHl.webp",W2="/healthy-management-project/assets/pic_mentorstvo_1440_1x-WjllDGeR.webp",B2="/healthy-management-project/assets/pic_mentorstvo_1440@2x-O-l22q9a.webp",H2="/healthy-management-project/assets/pic_mentorstvo_1440_1x-7OpZfadC.jpg",$2=P.section`
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
`,Y2=P.div`
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
    margin-bottom: 40px;
  }
`,X2=P.div`
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
`,Q2=P.div`
  display: flex;
  flex-direction: column;
  padding: 24px;
  gap: 16px;

  border-radius: 16px;
  background: var(--background-white);
  box-shadow: 0px 0px 8px 0px rgba(27, 54, 65, 0.08);

  @media screen and (min-width: 768px) {
    max-width: 332px;
    height: 462px;
  }

  @media screen and (min-width: 1440px) {
    max-width: 628px;
    height: 292px;
  }

  @media screen and (min-width: 1920px) {
    gap: 24px;
    max-width: 828px;
    height: 392px;
    padding: 40px;
  }
`,K2=P.h2`
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
`,J2=P.h3`
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
`,tp=P.h3`
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
`,q2=P.div`
  display: flex;
  flex-direction: column;
  gap: 24px;
  min-width: 320px;

  @media screen and (min-width: 1920px) {
    gap: 20px;
    margin-bottom: 56px;
  }
`,np=P.p`
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
`,G2=P.a`
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

  &:hover,
  &focus {
    font-weight: 600;
    background: var(--background-white);
  }

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
  }
`,Z2=P.div`
  display: flex;
  flex-direction: column;
  gap: 24px;

  @media screen and (min-width: 768px) {
    flex-direction: row;
    align-items: center;
    // justify-content: center;
  }

  @media screen and (min-width: 1920px) {
    gap: 24px;
  }
`,eS=P.div`
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  gap: 16px;

  padding: 24px;
  border-radius: 16px;
  box-shadow: 0px 0px 8px 0px rgba(27, 54, 65, 0.08);
  background-color: var(--background-bluedark);

  @media screen and (min-width: 768px) {
    max-width: 332px;
    height: 462px;
  }

  @media screen and (min-width: 1440px) {
    max-width: 628px;
    height: 292px;
  }

  @media screen and (min-width: 1920px) {
    max-width: 828px;
    height: auto;
    padding: 40px;
    gap: 24px;
    flex: 1 0 0;
  }
`,tS=P.ul`
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
`,rp=P.ul`
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
    width: 748px;
  }

  @media screen and (min-width: 1920px) {
    font-size: 16px;
    line-height: 24px;
  }
`,Or=P.li`
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
  }
`,Er=P.li`
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
  }
`,nS=()=>c.jsxs($2,{id:"mentoring",className:"container",children:[c.jsxs(Y2,{children:[c.jsxs("div",{children:[c.jsx(J,{minWidth:1920,children:c.jsx("img",{srcSet:`${R2} 1x, ${I2} 2x`,sizes:"(min-width: 1920px) 1920px",src:L2,alt:"Ольга Поліщук - ваш ментор в медичній галузі"})}),c.jsx(J,{minWidth:300,maxWidth:767,children:c.jsx("img",{srcSet:`${D2} 1x, ${z2} 2x`,sizes:"(min-width: 375px) 375px",src:F2,alt:"Ольга Поліщук - ваш ментор в медичній галузі"})}),c.jsx(J,{minWidth:768,maxWidth:1439,children:c.jsx("img",{srcSet:`${V2} 1x, ${U2} 2x`,sizes:"(min-width: 768px) 768px",src:N2,alt:"Ольга Поліщук - ваш ментор в медичній галузі"})}),c.jsx(J,{minWidth:1440,maxWidth:1919,children:c.jsx("img",{srcSet:`${W2} 1x, ${B2} 2x`,sizes:"(min-width: 1440px) 100vw (max-width: 1919px) 100vw",src:H2,alt:"Ольга Поліщук - ваш ментор в медичній галузі"})})]}),c.jsxs(X2,{children:[c.jsx(K2,{children:"Менторство"}),c.jsxs(q2,{children:[c.jsxs(np,{children:[c.jsx("b",{children:"Менторство в медичній галузі"})," - почути іншу думку, підтвердити власні гіпотези, зрозуміти вектор розвитку, отримати підтримку та пораду з питань менеджменту і медичного маркетингу"]}),c.jsxs(np,{children:[c.jsx("b",{children:"Менторство"})," - це про взаємодію та чесну комунікацію, про спільні цінності та готовність до росту, про надійне партнерство та довіру"]})]}),c.jsx(G2,{href:"#contact",children:"Дізнатися вартість"})]})]}),c.jsx("div",{children:c.jsxs(Z2,{children:[c.jsxs(Q2,{children:[c.jsx(J2,{children:"Про що це?"}),c.jsxs(tS,{children:[c.jsx(Or,{children:c.jsx("p",{children:"Про прагнення почути чесну іншу думку/та або підтвердити власні гіпотези для власника/керівника"})}),c.jsx(Or,{children:c.jsx("p",{children:"Про бізнес-процеси та їх ефективність"})}),c.jsx(Or,{children:c.jsx("p",{children:"Про вектори розвитку бізнесу або проєкту"})}),c.jsx(Or,{children:c.jsx("p",{children:"Про практичний інструментарій для впровадження змін"})}),c.jsx(Or,{children:c.jsx("p",{children:"Про маркетинг, сервіс та комунікації в медичних бізнесах"})}),c.jsx(Or,{children:c.jsx("p",{children:"Про здоров'я працівників та стратегії підвищенння ефективності бізнесу"})})]})]}),c.jsxs(eS,{children:[c.jsx(tp,{children:"Для кого"}),c.jsxs(rp,{children:[c.jsx(Er,{children:c.jsx("p",{children:"Лідерам, які прагнуть змін"})}),c.jsx(Er,{children:c.jsx("p",{children:"Власникам, які хочуть отримати незалежку експертну думку"})}),c.jsx(Er,{children:c.jsx("p",{children:"Керівникам та маркетологам, яким потрібна підтримка"})}),c.jsx(Er,{children:c.jsx("p",{children:"Лікарям, яким важливо отримати пораду"})})]}),c.jsx(tp,{children:"Формат"}),c.jsxs(rp,{children:[c.jsx(Er,{children:c.jsx("p",{children:"Індивідуальна ментор-сесія (від 1 години)"})}),c.jsx(Er,{children:c.jsx("p",{children:"Персональний супровід на декілька місяців"})})]})]})]})})]}),$g=P.section`
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
`,Yg=P.div`
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
`,rS=P.div`
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
`,Yo=P.div`
  position: relative;

  @media screen and (min-width: 1920px) {
    min-width: 370px;
  }
`,Xg=P.div`
  display: flex;
  flex-direction: column;

  @media screen and (min-width: 1290px) {
    gap: 40px;
    margin-bottom: 40px;
    flex-direction: row;
  }
`,Qg=P.div`
  min-width: 280px;
  gap: 16px;
  display: flex;
  flex-direction: column;

  @media screen and (min-width: 1920px) {
    min-width: 740px;
  }
`,Kg=P.div`
  @media screen and (min-width: 768px) {
    padding: 24px;
  }
`,Xo=P.p`
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

  @media screen and (min-width: 1440px) {
    top: 50%;
  }

  @media screen and (min-width: 1920px) {
    justify-content: flex-start;
    width: 100%;
    font-size: 16px;
    line-height: 1.4;
    top: 48%;
    left: 60%;
  }
`,Jg=P.h2`
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
`,qg=P.h3`
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
`,Gg=P.p`
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
`,Zg=P.p`
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
`,ex=P.a`
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
`,tx=P.p`
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
`,nx=P.ul`
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
`,Yt=P.li`
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
`,Mt=P.svg`
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
`,iS=()=>c.jsx($g,{className:"container",children:c.jsxs(Yg,{children:[c.jsxs(Xg,{children:[c.jsxs(Qg,{children:[c.jsx(Jg,{children:"Індивідуальна ментор сесія"}),c.jsx(Gg,{children:"Вирішення вашого індивідуального запиту"}),c.jsx(Zg,{children:"від 1 години"}),c.jsx(ex,{href:"#contact",children:"Замовити послугу"})]}),c.jsxs(Kg,{children:[c.jsx(qg,{children:"Питання, з якими можете звернутися"}),c.jsxs(nx,{children:[c.jsx(Yt,{children:"Незалежна думка щодо маркетингу та розвитку"}),c.jsx(Yt,{children:"Порада по створенню відділу маркетингу або оцінка існуючої структури"}),c.jsx(Yt,{children:"Питання по роботі з підрядниками"}),c.jsx(Yt,{children:"Порада щодо оптимізації бізнес-процесів"}),c.jsx(Yt,{children:"Як вірно оцінити ефективність маркетингових дій"}),c.jsx(Yt,{children:"Які інструменти комунікацій використовувати"}),c.jsxs(Yt,{children:["Особисте питання по менеджменту та розвитку з питань управління"," ","здоров'ям"]})]})]})]}),c.jsx(tx,{children:"Шлях проведення менторської сесії"}),c.jsxs(rS,{children:[c.jsxs(Yo,{children:[c.jsx(J,{minWidth:330,maxWidth:767,children:c.jsx(Mt,{children:c.jsx("use",{href:`${ne}#icon-rectangle-mob`})})}),c.jsx(J,{minWidth:768,maxWidth:1439,children:c.jsx(Mt,{children:c.jsx("use",{href:`${ne}#icon-rectangle-tab`})})}),c.jsx(J,{minWidth:1440,children:c.jsx(Mt,{children:c.jsx("use",{href:`${ne}#icon-rectangle`})})}),c.jsx(Xo,{children:"Заповнення брифу"})]}),c.jsxs(Yo,{children:[c.jsx(J,{minWidth:330,maxWidth:767,children:c.jsx(Mt,{children:c.jsx("use",{href:`${ne}#icon-rectangle-mob`})})}),c.jsx(J,{minWidth:768,maxWidth:1439,children:c.jsx(Mt,{children:c.jsx("use",{href:`${ne}#icon-rectangle-tab`})})}),c.jsx(J,{minWidth:1440,children:c.jsx(Mt,{children:c.jsx("use",{href:`${ne}#icon-rectangle`})})}),c.jsx(Xo,{children:"Діагностика ситуації"})]}),c.jsxs(Yo,{children:[c.jsx(J,{minWidth:330,maxWidth:767,children:c.jsx(Mt,{children:c.jsx("use",{href:`${ne}#icon-rectangle-mob`})})}),c.jsx(J,{minWidth:768,maxWidth:1439,children:c.jsx(Mt,{children:c.jsx("use",{href:`${ne}#icon-rectangle-tab`})})}),c.jsx(J,{minWidth:1440,children:c.jsx(Mt,{children:c.jsx("use",{href:`${ne}#icon-rectangle`})})}),c.jsx(Xo,{children:"Проведення сесії"})]}),c.jsxs(Yo,{children:[c.jsx(J,{minWidth:330,maxWidth:767,children:c.jsx(Mt,{children:c.jsx("use",{href:`${ne}#icon-rectangle-mob`})})}),c.jsx(J,{minWidth:768,maxWidth:1439,children:c.jsx(Mt,{children:c.jsx("use",{href:`${ne}#icon-rectangle-tab`})})}),c.jsx(J,{minWidth:1440,children:c.jsx(Mt,{children:c.jsx("use",{href:`${ne}#icon-rectangle`})})}),c.jsx(Xo,{children:"Рекомендації"})]})]})]})}),oS=P.div`
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
`,lt=P.svg`
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
`,wi=P.div`
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
`;const bi=P.p`
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
    width: fit-content;
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
`,aS=()=>c.jsx($g,{className:"container",children:c.jsxs(Yg,{children:[c.jsxs(Xg,{children:[c.jsxs(Qg,{children:[c.jsx(Jg,{children:"Персональний супровід"}),c.jsx(Gg,{children:"Пропрацьовуємо ваші запити та досягаємо посавлених цілей"}),c.jsx(Zg,{children:"від 2 місяців тісної взаємодії"}),c.jsx(ex,{href:"#contact",children:"Замовити послугу"})]}),c.jsxs(Kg,{children:[c.jsx(qg,{children:"Питання, з якими можете звернутися"}),c.jsxs(nx,{children:[c.jsx(Yt,{children:"Зануритись в бізнес-процеси та зрозуміти, де є точки зростання"}),c.jsx(Yt,{children:"Зрозуміти що таке маркетинг та як він працює у вашому бізнесі"}),c.jsx(Yt,{children:"Супровід розробки та впровадження стратегій"}),c.jsx(Yt,{children:"Особисті питання по медичному менеджменту, маркетингу та розвитку, управління здоров'ям"})]})]})]}),c.jsx(tx,{children:"Шлях проведення менторського супроводу"}),c.jsxs(oS,{children:[c.jsxs(wi,{children:[c.jsx(J,{minWidth:330,maxWidth:767,children:c.jsx(lt,{children:c.jsx("use",{href:`${ne}#icon-rectangle-mob`})})}),c.jsx(J,{minWidth:768,maxWidth:1439,children:c.jsx(lt,{children:c.jsx("use",{href:`${ne}#icon-rectangle-tab`})})}),c.jsx(J,{minWidth:1440,children:c.jsx(lt,{children:c.jsx("use",{href:`${ne}#icon-rectangle2`})})}),c.jsx(bi,{children:"Заповнення брифу"})]}),c.jsxs(wi,{children:[c.jsx(J,{minWidth:330,maxWidth:767,children:c.jsx(lt,{children:c.jsx("use",{href:`${ne}#icon-rectangle-mob`})})}),c.jsx(J,{minWidth:768,maxWidth:1439,children:c.jsx(lt,{children:c.jsx("use",{href:`${ne}#icon-rectangle-tab`})})}),c.jsx(J,{minWidth:1440,children:c.jsx(lt,{children:c.jsx("use",{href:`${ne}#icon-rectangle2`})})}),c.jsx(bi,{children:"Діагностика ситуації"})]}),c.jsxs(wi,{children:[c.jsx(J,{minWidth:330,maxWidth:767,children:c.jsx(lt,{children:c.jsx("use",{href:`${ne}#icon-rectangle-mob`})})}),c.jsx(J,{minWidth:768,maxWidth:1439,children:c.jsx(lt,{children:c.jsx("use",{href:`${ne}#icon-rectangle-tab`})})}),c.jsx(J,{minWidth:1440,children:c.jsx(lt,{children:c.jsx("use",{href:`${ne}#icon-rectangle2`})})}),c.jsx(bi,{children:"Визначення зон росту"})]}),c.jsxs(wi,{children:[c.jsx(J,{minWidth:330,maxWidth:767,children:c.jsx(lt,{children:c.jsx("use",{href:`${ne}#icon-rectangle-mob`})})}),c.jsx(J,{minWidth:768,maxWidth:1439,children:c.jsx(lt,{children:c.jsx("use",{href:`${ne}#icon-rectangle-tab`})})}),c.jsx(J,{minWidth:1440,children:c.jsx(lt,{children:c.jsx("use",{href:`${ne}#icon-rectangle2`})})}),c.jsx(bi,{children:"Менторинг"})]}),c.jsxs(wi,{children:[c.jsx(J,{minWidth:330,maxWidth:767,children:c.jsx(lt,{children:c.jsx("use",{href:`${ne}#icon-rectangle-mob`})})}),c.jsx(J,{minWidth:768,maxWidth:1439,children:c.jsx(lt,{children:c.jsx("use",{href:`${ne}#icon-rectangle-tab`})})}),c.jsx(J,{minWidth:1440,children:c.jsx(lt,{children:c.jsx("use",{href:`${ne}#icon-rectangle2`})})}),c.jsx(bi,{children:"Рекомендації"})]})]})]})}),Ls=()=>{const e=$n.useMediaQuery({maxWidth:767}),t=$n.useMediaQuery({minWidth:768,maxWidth:1439}),n=$n.useMediaQuery({minWidth:1440,maxWidth:1919}),r=$n.useMediaQuery({minWidth:1920});return e&&"mobile"||t&&"tablet"||n&&"desktop"||r&&"largeDesktop"},sS="/healthy-management-project/assets/denta_derm1x-JWCICTe_.webp",lS="/healthy-management-project/assets/medialt1x-5LMkh0v8.webp",uS="/healthy-management-project/assets/cures1x--AoJBOWJ.webp",cS="/healthy-management-project/assets/clinic1x-YgK5Wnno.webp",dS="/healthy-management-project/assets/kmklam1x-FlPeEOTs.webp",fS="/healthy-management-project/assets/symmetrica1x-hhcOddzB.webp",yl=[{image:sS,category:"DentaDerm",title:"Діагностика бізнес-процесів, маркетингу, сервісу, розробка стратегії розвитку, менторство",about:["Діагностика бізнес-процесів та маркетингу","Стратегія розвитку","Підбір команди маркетингу","Менторство"],details:[{title:"Завдання:",about:["Розробка стратегії розвитку","Розробка нового сайту клініки","Пошук команди маркетингу"],comment:"Дії в результаті розробки стратегії розвитку передбачали роботу над проєктом в новому позиціонуванні,  пошук зовнішньої та внутрішньої команди для реалізації нового сайту, ведення соцмереж"},{title:"В результаті роботи над проєктом:",about:["Розроблені вектори розвитку","Розроблений та впроваджений новий сайт","Підібрана команда маркетингового супроводу"],comment:"В результаті співпраці партнер отримав комплексне бачення просування, сформована команда маркетингу"}]},{image:lS,category:"Medialt",title:"Діагностика бізнес-процесів, маркетингу, сервісу, розробка стратегії розвитку, менторство",about:["Аудит ринку та конкурентів","Аудит маркетингу та сервісу","Розробка стратегії розвитку"],details:[{title:"Завдання:",about:["Розробка стратегії розвитку"]},{title:"Робота над задачою була розділена на два етапи:",about:["Аналіз конкурентів, ринку, виявлення зовнішніх можливостей та загроз","Аналіз сервісу медичного центру, аналіз роботи контакт центру, маркетингу, наявної бази пацієнтів та внутрішніх бізнес-процесів"]},{title:"В результаті комплексного аудиту підготували стратегію розвитку, яка передбачала рекомендації щодо:",about:["Управління маркетингом","Оптимізації роботи сервісу","Можливості МІС","Етапи розвитку напрямків та клініки вцілому"],comment:"В результаті співпраці - за 5 місяців ріст обороту в два рази"}]},{image:uS,category:"Cures",title:"Автоматизація комунікації з пацієнтами",about:["Створення та запуск 20 чат-ботів для клінік","Проведення консультацій та аудитів комунікацій клінік з пацієнтами","Розробка персональних протоколів спілкування з пацієнтами"],details:[{title:"Завдання:",about:["Автоматизація комунікації з пацієнтами"]},{title:"В результаті роботи над проєктом:",about:["Розвиток проєкту по створенню чат-ботів для медичних центрів","Розробка протоколів супроводу та опитувальників для клінік","Проведення зустрічей та комунікацій з клініками","Розробка алгоритмів та запуск чат-ботів"],comment:"В результаті співпраці над проєктом запуск 20 чат-ботів для медичних центрів"}]},{image:cS,category:"Клініка ім. ак. Юрія Спіженка",title:"Менторство, діагностика бізнес-процесів, маркетингу та сервісу, розробка стратегії розвитку",about:["Діагностика бізнес-процесів","Аудит маркетингу та сервісу","Розробка стратегії розвитку та маркетингу","Розробка та впровадження комунікаційної стратегії","Ведення маркетингових активностей "],details:[{title:"Завдання:",about:["Рестарт клініки у воєний час"]},{title:"Робота над задачею була розділена на три етапи:",about:["Діагностика конкурентів, ринку, виявлення зовнішніх можливостей та загроз","Діагностика сервісу медичного центру, аналіз роботи контакт центру, маркетингу, наявної бази пацієнтів та внутрішніх бізнес-процесів","Розробка та впровадження стратегії маркетингу, комунікації та сервісу, супровід рекламних кампаній, оптимізація бізнес-процесів"],comment:"В результаті співпраці над проєктом: збільшення доходу клініки, вихід на довоєний об’єм"}]},{image:dS,category:"KMKlab",title:"Діагностика маркетингу, сервісу, бізнес-процесів",about:["Аудит маркетингу та інструментів комунікацій","Аудит сервісу","Розробка рекомендацій щодо розвитку"],details:[{title:"Завдання:",about:["Аудит поточної маркетингової стратегії","Аудит сервісу","Формування рекомендацій по розвитку"]},{title:"Робота над задачою була розділена на два етапи:",about:["Відвідування всіх відділень лабораторій з метою формування рекомендацій по кожній локації","Аналіз поточної ситуації маркетингу та комунікацій, ведення соціальних мереж"],comment:"В результаті співпраці проаналізовано роботу відділу маркетингу та підрядників та надані рекомендації щодо структури відділу, сформовані подальші  кроки  маркетингової  та сервісної стратегії"}]},{image:fS,category:"Symmetrica",title:"Менторство, діагностика маркетингу, сервісу, бізнес-процесів",about:["Аудит маркетингу та сервісу","Розробка рекомендацій щодо розвитку","Оптимізація бізнес-процесів"],details:[{title:"Завдання:",about:["Діагностика поточної маркетингової діяльності та комунікацій","Аудит сервісу","Аудит роботи підрядників","Формування рекомендацій по розвитку"]},{title:"В результаті роботи над проєктом:",about:["Проведений поточний аудит шляху пацієнта, виявлені точки зростання сервісу","Проаналізовано роботу відділу маркетингу і підрядників та надані рекомендації щодо структури відділу","Надані рекомендації щодо формування подальших кроків маркетингової  та сервісної стратегії","Сформовані конверсійні показники та вектори руху","Надана менторська підтримка"]}]}],pS=P.section`
  padding-top: 40px;
  padding-bottom: 40px;
  @media screen and (min-width: 1920px) {
    padding-top: 80px;
    padding-bottom: 80px;
  }
`,hS=P.h2`
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
`,mS=P.ul`
  display: flex;
  gap: 24px;
  flex-wrap: wrap;
`,gS=P.span`
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
`,xS=P.svg`
  fill: currentColor;
  stroke: currentColor;

  width: 24px;
  height: 24px;
`,vS=P.li`
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
`,yS=P.div`
  display: flex;
  flex-direction: column;
  gap: 24px;

  color: var(--typography-bluedark, #1b3641);
`,wS=P.h3`
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
`,bS=P.span`
  display: block;
  font-size: 14px;
  font-weight: 600;
  line-height: calc(20 / 14);
  text-align: center;
`,SS=P.div`
  opacity: ${e=>e.isVisible?1:0};
  /* transform: translateY(${e=>e.isVisible?"0":"110%"}); */

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
`,kS=P.img`
  height: 279px;
  width: 100%;
  border-radius: 8px;
  object-fit: cover;

  @media screen and (min-width: 768px) {
    height: 300px;
  }
`,jS=P.div`
  display: flex;
  flex-direction: column;
  gap: 16px;
`,OS=P.h4`
  font-weight: 600;

  /* Вариант "project" */
  ${({variant:e})=>e==="project"&&hr`
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
  ${({variant:e})=>e==="projectDetail"&&hr`
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
  ${({variant:e})=>e==="services"&&hr`
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
`,ES=P.ul`
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
`,CS=P.li`
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

  ${({variant:e})=>e==="services"&&hr`
      @media screen and (min-width: 768px) {
        width: 408px;
      }

      @media screen and (min-width: 1440px) {
        width: 100%;
      }
    `}
`,PS=P.p`
  font-size: ${e=>e.additionalComment?"14px":"15px"};
  font-weight: ${e=>e.additionalComment?500:600};
  line-height: calc(
    ${e=>e.additionalComment?20/14:22/15}
  );
  @media screen and (min-width: 768px) {
    font-size: 18px;
    line-height: calc(24 / 18);
  }
  @media screen and (min-width: 1440px) {
    line-height: calc(22 / 18);
  }
  @media screen and (min-width: 1920px) {
    font-size: 20px;
    line-height: calc(28 / 20);
  }
`,TS=P.svg`
  fill: currentColor;
  stroke: currentColor;
  width: 24px;
  height: 24px;
`,_S=P.div`
  width: 24px;
  height: 24px;
`,rd=({title:e,about:t,comment:n,variant:r,additionalComment:i=!1})=>c.jsxs(jS,{children:[c.jsx(OS,{variant:r,children:e}),c.jsx(ES,{children:t==null?void 0:t.map(o=>c.jsxs(CS,{variant:r,children:[c.jsx(_S,{children:c.jsx(TS,{children:c.jsx("use",{href:ne+"#icon-done"})})}),o]},o))}),n&&c.jsx(PS,{additionalComment:i,children:n})]}),MS=P.div`
  padding: 24px;
  display: flex;
  gap: 24px;
  flex-direction: column;

  color: var(--background-whitegrey, #f4f4f6);
  @media screen and (min-width: 768px) {
    padding: 40px;
  }
`,AS=P.h3`
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
`,RS=P.svg`
  fill: currentColor;
  stroke: currentColor;

  width: 24px;
  height: 24px;

  position: absolute;
  right: 24px;
  top: 24px;
`,IS=({dataList:{details:e,category:t}})=>{const n=Ls();return c.jsxs(MS,{children:[c.jsxs("div",{children:[c.jsx(AS,{symbols:t.length,children:t}),n==="mobile"&&c.jsx(RS,{children:c.jsx("use",{href:ne+"#icon-close"})})]}),e.map((r,i)=>c.jsx(rd,{title:r.title,about:r.about,comment:r.comment,additionalComment:i===0,variant:"projectDetail"},r.title))]})},LS=({dataList:e,isDetailInfoVisible:t,setisDetailInfoVisible:n})=>{const r=Ls(),{category:i,title:o,about:a=[],image:l}=e,s=u=>{n(p=>!p),console.dir(u.target)};return c.jsxs(c.Fragment,{children:[c.jsxs(yS,{children:[c.jsx(kS,{src:l,alt:o,onMouseEnter:s}),c.jsx(SS,{isVisible:t,image:l,className:t?"":"visually-hidden",onMouseLeave:s,children:c.jsx(IS,{dataList:e})}),c.jsx("div",{children:c.jsx(wS,{symbols:i.length,children:i})}),c.jsx(rd,{title:o,about:a,variant:"project"})]}),r==="mobile"&&c.jsx(bS,{children:"Детальніше"})]})},DS=({item:e})=>{const[t,n]=L.useState(!1),r=Ls(),i=()=>{r==="mobile"&&n(o=>!o)};return c.jsx(vS,{onClick:i,children:c.jsx(LS,{dataList:e,isDetailInfoVisible:t,setisDetailInfoVisible:n})})},zS=()=>{const e=Ls(),[t,n]=L.useState(e==="mobile"||e==="tablet"?[...yl.slice(0,1)]:[...yl]),r=()=>{t.length>2?n(i=>i.slice(0,1)):n([...yl])};return c.jsxs(pS,{id:"projects",className:"container",children:[c.jsx(hS,{children:"Проєкти"}),c.jsx(mS,{children:t.map(i=>c.jsx(DS,{item:i},i.category))}),(e==="mobile"||e==="tablet")&&c.jsxs(gS,{onClick:r,children:[t.length>2?"Менше проєктів":"Більше проєктів",c.jsx(xS,{children:c.jsx("use",{href:ne+`${t.length>2?"#icon-arrowup":"#icon-arrowdown"}`})})]})]})},FS=P.section`
  display: flex;
  flex-direction: column;
  padding-top: 40px;
  padding-bottom: 40px;
  gap: 24px;

  @media screen and (min-width: 768px) {
    gap: 16px;
  }

  @media screen and (min-width: 1440px) {
    flex-direction: row;
    gap: 24px;
  }

  @media screen and (min-width: 1920px) {
    padding-top: 80px;
    padding-bottom: 80px;
  }
`,NS=P.div`
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
`,VS=P.div`
  display: flex;
  flex-direction: column;
  gap: 16px;
  margin-bottom: 24px;

  @media screen and (min-width: 768px) {
    margin-bottom: 16px;
  }

  @media screen and (min-width: 1440px) {
    gap: 24px;
    margin-bottom: 24px;
  }

  @media screen and (min-width: 1920px) {
    gap: 40px;
    margin-bottom: 40px;
  }
`,US=P.h2`
  color: var(--typography-bluedark);
  font-size: 24px;
  font-weight: 600;
  line-height: 32px;

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
  }
`,WS=P.p`
  color: var(--typography-bluedark);
  font-weight: 500;
  font-size: 15px;
  line-height: 22px;

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
`,BS=P.ul`
  display: flex;
  flex-direction: column;
  gap: 16px;

  @media screen and (min-width: 1920px) {
    gap: 24px;
  }
`,wl=P.li`
  display: flex;
  align-items: center;
  gap: 16px;
  border-radius: 16px;
  background: var(--background-whitegrey);
  padding: 16px;
`,bl=P.svg`
  width: 24px;
  height: 24px;
  fill: var(--background-white);
  stroke-width: 4px;
`,Sl=P.p`
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

  @media screen and (min-width: 1440px) {
    line-height: 22px;
  }

  @media screen and (min-width: 1920px) {
    font-size: 20px;
    line-height: 28px;
  }
`,HS="/healthy-management-project/assets/mob_olga_with_book1x-el2yagUK.webp",$S="/healthy-management-project/assets/mob_olga_with_book@2x-VYbutQBw.jpg",YS="/healthy-management-project/assets/mob_olga_with_book1x-fAO0seCI.jpg",XS="/healthy-management-project/assets/olga_with_book1x-SrpRZlIL.webp",QS="/healthy-management-project/assets/olga_with_book2x-na-cAYtV.webp",KS="/healthy-management-project/assets/olga_with_book1x-o5i5B_Z7.jpg",JS="/healthy-management-project/assets/olga_with_book_768_1x-q5jz0R6v.webp",qS="/healthy-management-project/assets/olga_with_book_768@2x-aSleAY5U.webp",GS="/healthy-management-project/assets/olga_with_book_768_1x-xn58vLYQ.jpg",ZS="/healthy-management-project/assets/olga_with_book_1440_1x-Z35ryV4g.webp",ip="/healthy-management-project/assets/olga_with_book_1440@2x-KX3o3AYH.webp",e4=()=>c.jsxs(FS,{className:"container",children:[c.jsxs(NS,{children:[c.jsxs(VS,{children:[c.jsx(US,{children:"Принципи роботи"}),c.jsx(WS,{children:"Наші принципи роботи полягають у співдії з ціннісними брендами та командами, які готові до чесної співпраці, щоб сприяти досягненню поставлених цілей. Готові ділитися власним досвідом та створювати стратегії здорового менеджменту та розвитку, маркетингу та сервісу"})]}),c.jsxs(BS,{children:[c.jsxs(wl,{children:[c.jsx(bl,{children:c.jsx("use",{href:`${ne}#icon-done-yellow`})}),c.jsx(Sl,{children:"Більше 18 років досвіду в маркетингу та комунікаціях"})]}),c.jsxs(wl,{children:[c.jsx(bl,{children:c.jsx("use",{href:`${ne}#icon-done-yellow`})}),c.jsx(Sl,{children:"Глибоке розуміння бізнес-процесів медичних закладів"})]}),c.jsxs(wl,{children:[c.jsx(bl,{children:c.jsx("use",{href:`${ne}#icon-done-yellow`})}),c.jsx(Sl,{children:"Використання принципів доказової медицини"})]})]})]}),c.jsx(J,{minWidth:375,maxWidth:767,children:c.jsx("img",{srcSet:`${HS} 1x, ${$S} 2x`,src:YS,alt:"Ольга Поліщук - ваш ментор в медичній галузі",loading:"lazy"})}),c.jsx(J,{minWidth:768,maxWidth:1439,children:c.jsx("img",{srcSet:`${JS} 1x, ${qS} 2x`,src:GS,alt:"Ольга Поліщук - ваш ментор в медичній галузі",loading:"lazy"})}),c.jsx(J,{minWidth:1440,maxWidth:1919,children:c.jsx("img",{srcSet:`${ZS} 1x, ${ip} 2x`,src:ip,alt:"Ольга Поліщук - ваш ментор в медичній галузі",loading:"lazy"})}),c.jsx(J,{minWidth:1920,children:c.jsx("img",{srcSet:`${XS} 1x, ${QS} 2x`,src:KS,alt:"Ольга Поліщук - ваш ментор в медичній галузі",loading:"lazy"})})]}),t4=P.button`
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
`,n4=()=>{const[e,t]=L.useState(!1);L.useEffect(()=>{const r=()=>{const i=window.scrollY,o=document.getElementById("footer"),a=window.innerHeight+window.scrollY-o.offsetTop,l=Math.max(80,a);t(i>480||a>80),document.documentElement.style.setProperty("--scroll-to-top-bottom",`${l}px`)};return window.addEventListener("scroll",r),()=>{window.removeEventListener("scroll",r)}},[]);const n=()=>{window.scrollTo({top:0,behavior:"smooth"})};return c.jsx(c.Fragment,{children:e&&c.jsx(t4,{onClick:n,children:c.jsx("svg",{width:"24",height:"24",children:c.jsx("use",{href:`${ne}#icon-arrowup`})})})})};function rx(e,t){return function(){return e.apply(t,arguments)}}const{toString:r4}=Object.prototype,{getPrototypeOf:id}=Object,Ds=(e=>t=>{const n=r4.call(t);return e[n]||(e[n]=n.slice(8,-1).toLowerCase())})(Object.create(null)),fn=e=>(e=e.toLowerCase(),t=>Ds(t)===e),zs=e=>t=>typeof t===e,{isArray:ci}=Array,uo=zs("undefined");function i4(e){return e!==null&&!uo(e)&&e.constructor!==null&&!uo(e.constructor)&&Nt(e.constructor.isBuffer)&&e.constructor.isBuffer(e)}const ix=fn("ArrayBuffer");function o4(e){let t;return typeof ArrayBuffer<"u"&&ArrayBuffer.isView?t=ArrayBuffer.isView(e):t=e&&e.buffer&&ix(e.buffer),t}const a4=zs("string"),Nt=zs("function"),ox=zs("number"),Fs=e=>e!==null&&typeof e=="object",s4=e=>e===!0||e===!1,ga=e=>{if(Ds(e)!=="object")return!1;const t=id(e);return(t===null||t===Object.prototype||Object.getPrototypeOf(t)===null)&&!(Symbol.toStringTag in e)&&!(Symbol.iterator in e)},l4=fn("Date"),u4=fn("File"),c4=fn("Blob"),d4=fn("FileList"),f4=e=>Fs(e)&&Nt(e.pipe),p4=e=>{let t;return e&&(typeof FormData=="function"&&e instanceof FormData||Nt(e.append)&&((t=Ds(e))==="formdata"||t==="object"&&Nt(e.toString)&&e.toString()==="[object FormData]"))},h4=fn("URLSearchParams"),m4=e=>e.trim?e.trim():e.replace(/^[\s\uFEFF\xA0]+|[\s\uFEFF\xA0]+$/g,"");function vo(e,t,{allOwnKeys:n=!1}={}){if(e===null||typeof e>"u")return;let r,i;if(typeof e!="object"&&(e=[e]),ci(e))for(r=0,i=e.length;r<i;r++)t.call(null,e[r],r,e);else{const o=n?Object.getOwnPropertyNames(e):Object.keys(e),a=o.length;let l;for(r=0;r<a;r++)l=o[r],t.call(null,e[l],l,e)}}function ax(e,t){t=t.toLowerCase();const n=Object.keys(e);let r=n.length,i;for(;r-- >0;)if(i=n[r],t===i.toLowerCase())return i;return null}const sx=typeof globalThis<"u"?globalThis:typeof self<"u"?self:typeof window<"u"?window:global,lx=e=>!uo(e)&&e!==sx;function Wu(){const{caseless:e}=lx(this)&&this||{},t={},n=(r,i)=>{const o=e&&ax(t,i)||i;ga(t[o])&&ga(r)?t[o]=Wu(t[o],r):ga(r)?t[o]=Wu({},r):ci(r)?t[o]=r.slice():t[o]=r};for(let r=0,i=arguments.length;r<i;r++)arguments[r]&&vo(arguments[r],n);return t}const g4=(e,t,n,{allOwnKeys:r}={})=>(vo(t,(i,o)=>{n&&Nt(i)?e[o]=rx(i,n):e[o]=i},{allOwnKeys:r}),e),x4=e=>(e.charCodeAt(0)===65279&&(e=e.slice(1)),e),v4=(e,t,n,r)=>{e.prototype=Object.create(t.prototype,r),e.prototype.constructor=e,Object.defineProperty(e,"super",{value:t.prototype}),n&&Object.assign(e.prototype,n)},y4=(e,t,n,r)=>{let i,o,a;const l={};if(t=t||{},e==null)return t;do{for(i=Object.getOwnPropertyNames(e),o=i.length;o-- >0;)a=i[o],(!r||r(a,e,t))&&!l[a]&&(t[a]=e[a],l[a]=!0);e=n!==!1&&id(e)}while(e&&(!n||n(e,t))&&e!==Object.prototype);return t},w4=(e,t,n)=>{e=String(e),(n===void 0||n>e.length)&&(n=e.length),n-=t.length;const r=e.indexOf(t,n);return r!==-1&&r===n},b4=e=>{if(!e)return null;if(ci(e))return e;let t=e.length;if(!ox(t))return null;const n=new Array(t);for(;t-- >0;)n[t]=e[t];return n},S4=(e=>t=>e&&t instanceof e)(typeof Uint8Array<"u"&&id(Uint8Array)),k4=(e,t)=>{const r=(e&&e[Symbol.iterator]).call(e);let i;for(;(i=r.next())&&!i.done;){const o=i.value;t.call(e,o[0],o[1])}},j4=(e,t)=>{let n;const r=[];for(;(n=e.exec(t))!==null;)r.push(n);return r},O4=fn("HTMLFormElement"),E4=e=>e.toLowerCase().replace(/[-_\s]([a-z\d])(\w*)/g,function(n,r,i){return r.toUpperCase()+i}),op=(({hasOwnProperty:e})=>(t,n)=>e.call(t,n))(Object.prototype),C4=fn("RegExp"),ux=(e,t)=>{const n=Object.getOwnPropertyDescriptors(e),r={};vo(n,(i,o)=>{let a;(a=t(i,o,e))!==!1&&(r[o]=a||i)}),Object.defineProperties(e,r)},P4=e=>{ux(e,(t,n)=>{if(Nt(e)&&["arguments","caller","callee"].indexOf(n)!==-1)return!1;const r=e[n];if(Nt(r)){if(t.enumerable=!1,"writable"in t){t.writable=!1;return}t.set||(t.set=()=>{throw Error("Can not rewrite read-only method '"+n+"'")})}})},T4=(e,t)=>{const n={},r=i=>{i.forEach(o=>{n[o]=!0})};return ci(e)?r(e):r(String(e).split(t)),n},_4=()=>{},M4=(e,t)=>(e=+e,Number.isFinite(e)?e:t),kl="abcdefghijklmnopqrstuvwxyz",ap="0123456789",cx={DIGIT:ap,ALPHA:kl,ALPHA_DIGIT:kl+kl.toUpperCase()+ap},A4=(e=16,t=cx.ALPHA_DIGIT)=>{let n="";const{length:r}=t;for(;e--;)n+=t[Math.random()*r|0];return n};function R4(e){return!!(e&&Nt(e.append)&&e[Symbol.toStringTag]==="FormData"&&e[Symbol.iterator])}const I4=e=>{const t=new Array(10),n=(r,i)=>{if(Fs(r)){if(t.indexOf(r)>=0)return;if(!("toJSON"in r)){t[i]=r;const o=ci(r)?[]:{};return vo(r,(a,l)=>{const s=n(a,i+1);!uo(s)&&(o[l]=s)}),t[i]=void 0,o}}return r};return n(e,0)},L4=fn("AsyncFunction"),D4=e=>e&&(Fs(e)||Nt(e))&&Nt(e.then)&&Nt(e.catch),D={isArray:ci,isArrayBuffer:ix,isBuffer:i4,isFormData:p4,isArrayBufferView:o4,isString:a4,isNumber:ox,isBoolean:s4,isObject:Fs,isPlainObject:ga,isUndefined:uo,isDate:l4,isFile:u4,isBlob:c4,isRegExp:C4,isFunction:Nt,isStream:f4,isURLSearchParams:h4,isTypedArray:S4,isFileList:d4,forEach:vo,merge:Wu,extend:g4,trim:m4,stripBOM:x4,inherits:v4,toFlatObject:y4,kindOf:Ds,kindOfTest:fn,endsWith:w4,toArray:b4,forEachEntry:k4,matchAll:j4,isHTMLForm:O4,hasOwnProperty:op,hasOwnProp:op,reduceDescriptors:ux,freezeMethods:P4,toObjectSet:T4,toCamelCase:E4,noop:_4,toFiniteNumber:M4,findKey:ax,global:sx,isContextDefined:lx,ALPHABET:cx,generateString:A4,isSpecCompliantForm:R4,toJSONObject:I4,isAsyncFn:L4,isThenable:D4};function fe(e,t,n,r,i){Error.call(this),Error.captureStackTrace?Error.captureStackTrace(this,this.constructor):this.stack=new Error().stack,this.message=e,this.name="AxiosError",t&&(this.code=t),n&&(this.config=n),r&&(this.request=r),i&&(this.response=i)}D.inherits(fe,Error,{toJSON:function(){return{message:this.message,name:this.name,description:this.description,number:this.number,fileName:this.fileName,lineNumber:this.lineNumber,columnNumber:this.columnNumber,stack:this.stack,config:D.toJSONObject(this.config),code:this.code,status:this.response&&this.response.status?this.response.status:null}}});const dx=fe.prototype,fx={};["ERR_BAD_OPTION_VALUE","ERR_BAD_OPTION","ECONNABORTED","ETIMEDOUT","ERR_NETWORK","ERR_FR_TOO_MANY_REDIRECTS","ERR_DEPRECATED","ERR_BAD_RESPONSE","ERR_BAD_REQUEST","ERR_CANCELED","ERR_NOT_SUPPORT","ERR_INVALID_URL"].forEach(e=>{fx[e]={value:e}});Object.defineProperties(fe,fx);Object.defineProperty(dx,"isAxiosError",{value:!0});fe.from=(e,t,n,r,i,o)=>{const a=Object.create(dx);return D.toFlatObject(e,a,function(s){return s!==Error.prototype},l=>l!=="isAxiosError"),fe.call(a,e.message,t,n,r,i),a.cause=e,a.name=e.name,o&&Object.assign(a,o),a};const z4=null;function Bu(e){return D.isPlainObject(e)||D.isArray(e)}function px(e){return D.endsWith(e,"[]")?e.slice(0,-2):e}function sp(e,t,n){return e?e.concat(t).map(function(i,o){return i=px(i),!n&&o?"["+i+"]":i}).join(n?".":""):t}function F4(e){return D.isArray(e)&&!e.some(Bu)}const N4=D.toFlatObject(D,{},null,function(t){return/^is[A-Z]/.test(t)});function Ns(e,t,n){if(!D.isObject(e))throw new TypeError("target must be an object");t=t||new FormData,n=D.toFlatObject(n,{metaTokens:!0,dots:!1,indexes:!1},!1,function(v,b){return!D.isUndefined(b[v])});const r=n.metaTokens,i=n.visitor||p,o=n.dots,a=n.indexes,s=(n.Blob||typeof Blob<"u"&&Blob)&&D.isSpecCompliantForm(t);if(!D.isFunction(i))throw new TypeError("visitor must be a function");function u(m){if(m===null)return"";if(D.isDate(m))return m.toISOString();if(!s&&D.isBlob(m))throw new fe("Blob is not supported. Use a Buffer instead.");return D.isArrayBuffer(m)||D.isTypedArray(m)?s&&typeof Blob=="function"?new Blob([m]):Buffer.from(m):m}function p(m,v,b){let d=m;if(m&&!b&&typeof m=="object"){if(D.endsWith(v,"{}"))v=r?v:v.slice(0,-2),m=JSON.stringify(m);else if(D.isArray(m)&&F4(m)||(D.isFileList(m)||D.endsWith(v,"[]"))&&(d=D.toArray(m)))return v=px(v),d.forEach(function(g,w){!(D.isUndefined(g)||g===null)&&t.append(a===!0?sp([v],w,o):a===null?v:v+"[]",u(g))}),!1}return Bu(m)?!0:(t.append(sp(b,v,o),u(m)),!1)}const h=[],x=Object.assign(N4,{defaultVisitor:p,convertValue:u,isVisitable:Bu});function y(m,v){if(!D.isUndefined(m)){if(h.indexOf(m)!==-1)throw Error("Circular reference detected in "+v.join("."));h.push(m),D.forEach(m,function(d,f){(!(D.isUndefined(d)||d===null)&&i.call(t,d,D.isString(f)?f.trim():f,v,x))===!0&&y(d,v?v.concat(f):[f])}),h.pop()}}if(!D.isObject(e))throw new TypeError("data must be an object");return y(e),t}function lp(e){const t={"!":"%21","'":"%27","(":"%28",")":"%29","~":"%7E","%20":"+","%00":"\0"};return encodeURIComponent(e).replace(/[!'()~]|%20|%00/g,function(r){return t[r]})}function od(e,t){this._pairs=[],e&&Ns(e,this,t)}const hx=od.prototype;hx.append=function(t,n){this._pairs.push([t,n])};hx.toString=function(t){const n=t?function(r){return t.call(this,r,lp)}:lp;return this._pairs.map(function(i){return n(i[0])+"="+n(i[1])},"").join("&")};function V4(e){return encodeURIComponent(e).replace(/%3A/gi,":").replace(/%24/g,"$").replace(/%2C/gi,",").replace(/%20/g,"+").replace(/%5B/gi,"[").replace(/%5D/gi,"]")}function mx(e,t,n){if(!t)return e;const r=n&&n.encode||V4,i=n&&n.serialize;let o;if(i?o=i(t,n):o=D.isURLSearchParams(t)?t.toString():new od(t,n).toString(r),o){const a=e.indexOf("#");a!==-1&&(e=e.slice(0,a)),e+=(e.indexOf("?")===-1?"?":"&")+o}return e}class U4{constructor(){this.handlers=[]}use(t,n,r){return this.handlers.push({fulfilled:t,rejected:n,synchronous:r?r.synchronous:!1,runWhen:r?r.runWhen:null}),this.handlers.length-1}eject(t){this.handlers[t]&&(this.handlers[t]=null)}clear(){this.handlers&&(this.handlers=[])}forEach(t){D.forEach(this.handlers,function(r){r!==null&&t(r)})}}const up=U4,gx={silentJSONParsing:!0,forcedJSONParsing:!0,clarifyTimeoutError:!1},W4=typeof URLSearchParams<"u"?URLSearchParams:od,B4=typeof FormData<"u"?FormData:null,H4=typeof Blob<"u"?Blob:null,$4={isBrowser:!0,classes:{URLSearchParams:W4,FormData:B4,Blob:H4},protocols:["http","https","file","blob","url","data"]},xx=typeof window<"u"&&typeof document<"u",Y4=(e=>xx&&["ReactNative","NativeScript","NS"].indexOf(e)<0)(typeof navigator<"u"&&navigator.product),X4=typeof WorkerGlobalScope<"u"&&self instanceof WorkerGlobalScope&&typeof self.importScripts=="function",Q4=Object.freeze(Object.defineProperty({__proto__:null,hasBrowserEnv:xx,hasStandardBrowserEnv:Y4,hasStandardBrowserWebWorkerEnv:X4},Symbol.toStringTag,{value:"Module"})),sn={...Q4,...$4};function K4(e,t){return Ns(e,new sn.classes.URLSearchParams,Object.assign({visitor:function(n,r,i,o){return sn.isNode&&D.isBuffer(n)?(this.append(r,n.toString("base64")),!1):o.defaultVisitor.apply(this,arguments)}},t))}function J4(e){return D.matchAll(/\w+|\[(\w*)]/g,e).map(t=>t[0]==="[]"?"":t[1]||t[0])}function q4(e){const t={},n=Object.keys(e);let r;const i=n.length;let o;for(r=0;r<i;r++)o=n[r],t[o]=e[o];return t}function vx(e){function t(n,r,i,o){let a=n[o++];const l=Number.isFinite(+a),s=o>=n.length;return a=!a&&D.isArray(i)?i.length:a,s?(D.hasOwnProp(i,a)?i[a]=[i[a],r]:i[a]=r,!l):((!i[a]||!D.isObject(i[a]))&&(i[a]=[]),t(n,r,i[a],o)&&D.isArray(i[a])&&(i[a]=q4(i[a])),!l)}if(D.isFormData(e)&&D.isFunction(e.entries)){const n={};return D.forEachEntry(e,(r,i)=>{t(J4(r),i,n,0)}),n}return null}function G4(e,t,n){if(D.isString(e))try{return(t||JSON.parse)(e),D.trim(e)}catch(r){if(r.name!=="SyntaxError")throw r}return(n||JSON.stringify)(e)}const ad={transitional:gx,adapter:["xhr","http"],transformRequest:[function(t,n){const r=n.getContentType()||"",i=r.indexOf("application/json")>-1,o=D.isObject(t);if(o&&D.isHTMLForm(t)&&(t=new FormData(t)),D.isFormData(t))return i&&i?JSON.stringify(vx(t)):t;if(D.isArrayBuffer(t)||D.isBuffer(t)||D.isStream(t)||D.isFile(t)||D.isBlob(t))return t;if(D.isArrayBufferView(t))return t.buffer;if(D.isURLSearchParams(t))return n.setContentType("application/x-www-form-urlencoded;charset=utf-8",!1),t.toString();let l;if(o){if(r.indexOf("application/x-www-form-urlencoded")>-1)return K4(t,this.formSerializer).toString();if((l=D.isFileList(t))||r.indexOf("multipart/form-data")>-1){const s=this.env&&this.env.FormData;return Ns(l?{"files[]":t}:t,s&&new s,this.formSerializer)}}return o||i?(n.setContentType("application/json",!1),G4(t)):t}],transformResponse:[function(t){const n=this.transitional||ad.transitional,r=n&&n.forcedJSONParsing,i=this.responseType==="json";if(t&&D.isString(t)&&(r&&!this.responseType||i)){const a=!(n&&n.silentJSONParsing)&&i;try{return JSON.parse(t)}catch(l){if(a)throw l.name==="SyntaxError"?fe.from(l,fe.ERR_BAD_RESPONSE,this,null,this.response):l}}return t}],timeout:0,xsrfCookieName:"XSRF-TOKEN",xsrfHeaderName:"X-XSRF-TOKEN",maxContentLength:-1,maxBodyLength:-1,env:{FormData:sn.classes.FormData,Blob:sn.classes.Blob},validateStatus:function(t){return t>=200&&t<300},headers:{common:{Accept:"application/json, text/plain, */*","Content-Type":void 0}}};D.forEach(["delete","get","head","post","put","patch"],e=>{ad.headers[e]={}});const sd=ad,Z4=D.toObjectSet(["age","authorization","content-length","content-type","etag","expires","from","host","if-modified-since","if-unmodified-since","last-modified","location","max-forwards","proxy-authorization","referer","retry-after","user-agent"]),ek=e=>{const t={};let n,r,i;return e&&e.split(`
`).forEach(function(a){i=a.indexOf(":"),n=a.substring(0,i).trim().toLowerCase(),r=a.substring(i+1).trim(),!(!n||t[n]&&Z4[n])&&(n==="set-cookie"?t[n]?t[n].push(r):t[n]=[r]:t[n]=t[n]?t[n]+", "+r:r)}),t},cp=Symbol("internals");function Si(e){return e&&String(e).trim().toLowerCase()}function xa(e){return e===!1||e==null?e:D.isArray(e)?e.map(xa):String(e)}function tk(e){const t=Object.create(null),n=/([^\s,;=]+)\s*(?:=\s*([^,;]+))?/g;let r;for(;r=n.exec(e);)t[r[1]]=r[2];return t}const nk=e=>/^[-_a-zA-Z0-9^`|~,!#$%&'*+.]+$/.test(e.trim());function jl(e,t,n,r,i){if(D.isFunction(r))return r.call(this,t,n);if(i&&(t=n),!!D.isString(t)){if(D.isString(r))return t.indexOf(r)!==-1;if(D.isRegExp(r))return r.test(t)}}function rk(e){return e.trim().toLowerCase().replace(/([a-z\d])(\w*)/g,(t,n,r)=>n.toUpperCase()+r)}function ik(e,t){const n=D.toCamelCase(" "+t);["get","set","has"].forEach(r=>{Object.defineProperty(e,r+n,{value:function(i,o,a){return this[r].call(this,t,i,o,a)},configurable:!0})})}class Vs{constructor(t){t&&this.set(t)}set(t,n,r){const i=this;function o(l,s,u){const p=Si(s);if(!p)throw new Error("header name must be a non-empty string");const h=D.findKey(i,p);(!h||i[h]===void 0||u===!0||u===void 0&&i[h]!==!1)&&(i[h||s]=xa(l))}const a=(l,s)=>D.forEach(l,(u,p)=>o(u,p,s));return D.isPlainObject(t)||t instanceof this.constructor?a(t,n):D.isString(t)&&(t=t.trim())&&!nk(t)?a(ek(t),n):t!=null&&o(n,t,r),this}get(t,n){if(t=Si(t),t){const r=D.findKey(this,t);if(r){const i=this[r];if(!n)return i;if(n===!0)return tk(i);if(D.isFunction(n))return n.call(this,i,r);if(D.isRegExp(n))return n.exec(i);throw new TypeError("parser must be boolean|regexp|function")}}}has(t,n){if(t=Si(t),t){const r=D.findKey(this,t);return!!(r&&this[r]!==void 0&&(!n||jl(this,this[r],r,n)))}return!1}delete(t,n){const r=this;let i=!1;function o(a){if(a=Si(a),a){const l=D.findKey(r,a);l&&(!n||jl(r,r[l],l,n))&&(delete r[l],i=!0)}}return D.isArray(t)?t.forEach(o):o(t),i}clear(t){const n=Object.keys(this);let r=n.length,i=!1;for(;r--;){const o=n[r];(!t||jl(this,this[o],o,t,!0))&&(delete this[o],i=!0)}return i}normalize(t){const n=this,r={};return D.forEach(this,(i,o)=>{const a=D.findKey(r,o);if(a){n[a]=xa(i),delete n[o];return}const l=t?rk(o):String(o).trim();l!==o&&delete n[o],n[l]=xa(i),r[l]=!0}),this}concat(...t){return this.constructor.concat(this,...t)}toJSON(t){const n=Object.create(null);return D.forEach(this,(r,i)=>{r!=null&&r!==!1&&(n[i]=t&&D.isArray(r)?r.join(", "):r)}),n}[Symbol.iterator](){return Object.entries(this.toJSON())[Symbol.iterator]()}toString(){return Object.entries(this.toJSON()).map(([t,n])=>t+": "+n).join(`
`)}get[Symbol.toStringTag](){return"AxiosHeaders"}static from(t){return t instanceof this?t:new this(t)}static concat(t,...n){const r=new this(t);return n.forEach(i=>r.set(i)),r}static accessor(t){const r=(this[cp]=this[cp]={accessors:{}}).accessors,i=this.prototype;function o(a){const l=Si(a);r[l]||(ik(i,a),r[l]=!0)}return D.isArray(t)?t.forEach(o):o(t),this}}Vs.accessor(["Content-Type","Content-Length","Accept","Accept-Encoding","User-Agent","Authorization"]);D.reduceDescriptors(Vs.prototype,({value:e},t)=>{let n=t[0].toUpperCase()+t.slice(1);return{get:()=>e,set(r){this[n]=r}}});D.freezeMethods(Vs);const bn=Vs;function Ol(e,t){const n=this||sd,r=t||n,i=bn.from(r.headers);let o=r.data;return D.forEach(e,function(l){o=l.call(n,o,i.normalize(),t?t.status:void 0)}),i.normalize(),o}function yx(e){return!!(e&&e.__CANCEL__)}function yo(e,t,n){fe.call(this,e??"canceled",fe.ERR_CANCELED,t,n),this.name="CanceledError"}D.inherits(yo,fe,{__CANCEL__:!0});function ok(e,t,n){const r=n.config.validateStatus;!n.status||!r||r(n.status)?e(n):t(new fe("Request failed with status code "+n.status,[fe.ERR_BAD_REQUEST,fe.ERR_BAD_RESPONSE][Math.floor(n.status/100)-4],n.config,n.request,n))}const ak=sn.hasStandardBrowserEnv?{write(e,t,n,r,i,o){const a=[e+"="+encodeURIComponent(t)];D.isNumber(n)&&a.push("expires="+new Date(n).toGMTString()),D.isString(r)&&a.push("path="+r),D.isString(i)&&a.push("domain="+i),o===!0&&a.push("secure"),document.cookie=a.join("; ")},read(e){const t=document.cookie.match(new RegExp("(^|;\\s*)("+e+")=([^;]*)"));return t?decodeURIComponent(t[3]):null},remove(e){this.write(e,"",Date.now()-864e5)}}:{write(){},read(){return null},remove(){}};function sk(e){return/^([a-z][a-z\d+\-.]*:)?\/\//i.test(e)}function lk(e,t){return t?e.replace(/\/+$/,"")+"/"+t.replace(/^\/+/,""):e}function wx(e,t){return e&&!sk(t)?lk(e,t):t}const uk=sn.hasStandardBrowserEnv?function(){const t=/(msie|trident)/i.test(navigator.userAgent),n=document.createElement("a");let r;function i(o){let a=o;return t&&(n.setAttribute("href",a),a=n.href),n.setAttribute("href",a),{href:n.href,protocol:n.protocol?n.protocol.replace(/:$/,""):"",host:n.host,search:n.search?n.search.replace(/^\?/,""):"",hash:n.hash?n.hash.replace(/^#/,""):"",hostname:n.hostname,port:n.port,pathname:n.pathname.charAt(0)==="/"?n.pathname:"/"+n.pathname}}return r=i(window.location.href),function(a){const l=D.isString(a)?i(a):a;return l.protocol===r.protocol&&l.host===r.host}}():function(){return function(){return!0}}();function ck(e){const t=/^([-+\w]{1,25})(:?\/\/|:)/.exec(e);return t&&t[1]||""}function dk(e,t){e=e||10;const n=new Array(e),r=new Array(e);let i=0,o=0,a;return t=t!==void 0?t:1e3,function(s){const u=Date.now(),p=r[o];a||(a=u),n[i]=s,r[i]=u;let h=o,x=0;for(;h!==i;)x+=n[h++],h=h%e;if(i=(i+1)%e,i===o&&(o=(o+1)%e),u-a<t)return;const y=p&&u-p;return y?Math.round(x*1e3/y):void 0}}function dp(e,t){let n=0;const r=dk(50,250);return i=>{const o=i.loaded,a=i.lengthComputable?i.total:void 0,l=o-n,s=r(l),u=o<=a;n=o;const p={loaded:o,total:a,progress:a?o/a:void 0,bytes:l,rate:s||void 0,estimated:s&&a&&u?(a-o)/s:void 0,event:i};p[t?"download":"upload"]=!0,e(p)}}const fk=typeof XMLHttpRequest<"u",pk=fk&&function(e){return new Promise(function(n,r){let i=e.data;const o=bn.from(e.headers).normalize();let{responseType:a,withXSRFToken:l}=e,s;function u(){e.cancelToken&&e.cancelToken.unsubscribe(s),e.signal&&e.signal.removeEventListener("abort",s)}let p;if(D.isFormData(i)){if(sn.hasStandardBrowserEnv||sn.hasStandardBrowserWebWorkerEnv)o.setContentType(!1);else if((p=o.getContentType())!==!1){const[v,...b]=p?p.split(";").map(d=>d.trim()).filter(Boolean):[];o.setContentType([v||"multipart/form-data",...b].join("; "))}}let h=new XMLHttpRequest;if(e.auth){const v=e.auth.username||"",b=e.auth.password?unescape(encodeURIComponent(e.auth.password)):"";o.set("Authorization","Basic "+btoa(v+":"+b))}const x=wx(e.baseURL,e.url);h.open(e.method.toUpperCase(),mx(x,e.params,e.paramsSerializer),!0),h.timeout=e.timeout;function y(){if(!h)return;const v=bn.from("getAllResponseHeaders"in h&&h.getAllResponseHeaders()),d={data:!a||a==="text"||a==="json"?h.responseText:h.response,status:h.status,statusText:h.statusText,headers:v,config:e,request:h};ok(function(g){n(g),u()},function(g){r(g),u()},d),h=null}if("onloadend"in h?h.onloadend=y:h.onreadystatechange=function(){!h||h.readyState!==4||h.status===0&&!(h.responseURL&&h.responseURL.indexOf("file:")===0)||setTimeout(y)},h.onabort=function(){h&&(r(new fe("Request aborted",fe.ECONNABORTED,e,h)),h=null)},h.onerror=function(){r(new fe("Network Error",fe.ERR_NETWORK,e,h)),h=null},h.ontimeout=function(){let b=e.timeout?"timeout of "+e.timeout+"ms exceeded":"timeout exceeded";const d=e.transitional||gx;e.timeoutErrorMessage&&(b=e.timeoutErrorMessage),r(new fe(b,d.clarifyTimeoutError?fe.ETIMEDOUT:fe.ECONNABORTED,e,h)),h=null},sn.hasStandardBrowserEnv&&(l&&D.isFunction(l)&&(l=l(e)),l||l!==!1&&uk(x))){const v=e.xsrfHeaderName&&e.xsrfCookieName&&ak.read(e.xsrfCookieName);v&&o.set(e.xsrfHeaderName,v)}i===void 0&&o.setContentType(null),"setRequestHeader"in h&&D.forEach(o.toJSON(),function(b,d){h.setRequestHeader(d,b)}),D.isUndefined(e.withCredentials)||(h.withCredentials=!!e.withCredentials),a&&a!=="json"&&(h.responseType=e.responseType),typeof e.onDownloadProgress=="function"&&h.addEventListener("progress",dp(e.onDownloadProgress,!0)),typeof e.onUploadProgress=="function"&&h.upload&&h.upload.addEventListener("progress",dp(e.onUploadProgress)),(e.cancelToken||e.signal)&&(s=v=>{h&&(r(!v||v.type?new yo(null,e,h):v),h.abort(),h=null)},e.cancelToken&&e.cancelToken.subscribe(s),e.signal&&(e.signal.aborted?s():e.signal.addEventListener("abort",s)));const m=ck(x);if(m&&sn.protocols.indexOf(m)===-1){r(new fe("Unsupported protocol "+m+":",fe.ERR_BAD_REQUEST,e));return}h.send(i||null)})},Hu={http:z4,xhr:pk};D.forEach(Hu,(e,t)=>{if(e){try{Object.defineProperty(e,"name",{value:t})}catch{}Object.defineProperty(e,"adapterName",{value:t})}});const fp=e=>`- ${e}`,hk=e=>D.isFunction(e)||e===null||e===!1,bx={getAdapter:e=>{e=D.isArray(e)?e:[e];const{length:t}=e;let n,r;const i={};for(let o=0;o<t;o++){n=e[o];let a;if(r=n,!hk(n)&&(r=Hu[(a=String(n)).toLowerCase()],r===void 0))throw new fe(`Unknown adapter '${a}'`);if(r)break;i[a||"#"+o]=r}if(!r){const o=Object.entries(i).map(([l,s])=>`adapter ${l} `+(s===!1?"is not supported by the environment":"is not available in the build"));let a=t?o.length>1?`since :
`+o.map(fp).join(`
`):" "+fp(o[0]):"as no adapter specified";throw new fe("There is no suitable adapter to dispatch the request "+a,"ERR_NOT_SUPPORT")}return r},adapters:Hu};function El(e){if(e.cancelToken&&e.cancelToken.throwIfRequested(),e.signal&&e.signal.aborted)throw new yo(null,e)}function pp(e){return El(e),e.headers=bn.from(e.headers),e.data=Ol.call(e,e.transformRequest),["post","put","patch"].indexOf(e.method)!==-1&&e.headers.setContentType("application/x-www-form-urlencoded",!1),bx.getAdapter(e.adapter||sd.adapter)(e).then(function(r){return El(e),r.data=Ol.call(e,e.transformResponse,r),r.headers=bn.from(r.headers),r},function(r){return yx(r)||(El(e),r&&r.response&&(r.response.data=Ol.call(e,e.transformResponse,r.response),r.response.headers=bn.from(r.response.headers))),Promise.reject(r)})}const hp=e=>e instanceof bn?e.toJSON():e;function ii(e,t){t=t||{};const n={};function r(u,p,h){return D.isPlainObject(u)&&D.isPlainObject(p)?D.merge.call({caseless:h},u,p):D.isPlainObject(p)?D.merge({},p):D.isArray(p)?p.slice():p}function i(u,p,h){if(D.isUndefined(p)){if(!D.isUndefined(u))return r(void 0,u,h)}else return r(u,p,h)}function o(u,p){if(!D.isUndefined(p))return r(void 0,p)}function a(u,p){if(D.isUndefined(p)){if(!D.isUndefined(u))return r(void 0,u)}else return r(void 0,p)}function l(u,p,h){if(h in t)return r(u,p);if(h in e)return r(void 0,u)}const s={url:o,method:o,data:o,baseURL:a,transformRequest:a,transformResponse:a,paramsSerializer:a,timeout:a,timeoutMessage:a,withCredentials:a,withXSRFToken:a,adapter:a,responseType:a,xsrfCookieName:a,xsrfHeaderName:a,onUploadProgress:a,onDownloadProgress:a,decompress:a,maxContentLength:a,maxBodyLength:a,beforeRedirect:a,transport:a,httpAgent:a,httpsAgent:a,cancelToken:a,socketPath:a,responseEncoding:a,validateStatus:l,headers:(u,p)=>i(hp(u),hp(p),!0)};return D.forEach(Object.keys(Object.assign({},e,t)),function(p){const h=s[p]||i,x=h(e[p],t[p],p);D.isUndefined(x)&&h!==l||(n[p]=x)}),n}const Sx="1.6.2",ld={};["object","boolean","number","function","string","symbol"].forEach((e,t)=>{ld[e]=function(r){return typeof r===e||"a"+(t<1?"n ":" ")+e}});const mp={};ld.transitional=function(t,n,r){function i(o,a){return"[Axios v"+Sx+"] Transitional option '"+o+"'"+a+(r?". "+r:"")}return(o,a,l)=>{if(t===!1)throw new fe(i(a," has been removed"+(n?" in "+n:"")),fe.ERR_DEPRECATED);return n&&!mp[a]&&(mp[a]=!0,console.warn(i(a," has been deprecated since v"+n+" and will be removed in the near future"))),t?t(o,a,l):!0}};function mk(e,t,n){if(typeof e!="object")throw new fe("options must be an object",fe.ERR_BAD_OPTION_VALUE);const r=Object.keys(e);let i=r.length;for(;i-- >0;){const o=r[i],a=t[o];if(a){const l=e[o],s=l===void 0||a(l,o,e);if(s!==!0)throw new fe("option "+o+" must be "+s,fe.ERR_BAD_OPTION_VALUE);continue}if(n!==!0)throw new fe("Unknown option "+o,fe.ERR_BAD_OPTION)}}const $u={assertOptions:mk,validators:ld},Fn=$u.validators;class Xa{constructor(t){this.defaults=t,this.interceptors={request:new up,response:new up}}request(t,n){typeof t=="string"?(n=n||{},n.url=t):n=t||{},n=ii(this.defaults,n);const{transitional:r,paramsSerializer:i,headers:o}=n;r!==void 0&&$u.assertOptions(r,{silentJSONParsing:Fn.transitional(Fn.boolean),forcedJSONParsing:Fn.transitional(Fn.boolean),clarifyTimeoutError:Fn.transitional(Fn.boolean)},!1),i!=null&&(D.isFunction(i)?n.paramsSerializer={serialize:i}:$u.assertOptions(i,{encode:Fn.function,serialize:Fn.function},!0)),n.method=(n.method||this.defaults.method||"get").toLowerCase();let a=o&&D.merge(o.common,o[n.method]);o&&D.forEach(["delete","get","head","post","put","patch","common"],m=>{delete o[m]}),n.headers=bn.concat(a,o);const l=[];let s=!0;this.interceptors.request.forEach(function(v){typeof v.runWhen=="function"&&v.runWhen(n)===!1||(s=s&&v.synchronous,l.unshift(v.fulfilled,v.rejected))});const u=[];this.interceptors.response.forEach(function(v){u.push(v.fulfilled,v.rejected)});let p,h=0,x;if(!s){const m=[pp.bind(this),void 0];for(m.unshift.apply(m,l),m.push.apply(m,u),x=m.length,p=Promise.resolve(n);h<x;)p=p.then(m[h++],m[h++]);return p}x=l.length;let y=n;for(h=0;h<x;){const m=l[h++],v=l[h++];try{y=m(y)}catch(b){v.call(this,b);break}}try{p=pp.call(this,y)}catch(m){return Promise.reject(m)}for(h=0,x=u.length;h<x;)p=p.then(u[h++],u[h++]);return p}getUri(t){t=ii(this.defaults,t);const n=wx(t.baseURL,t.url);return mx(n,t.params,t.paramsSerializer)}}D.forEach(["delete","get","head","options"],function(t){Xa.prototype[t]=function(n,r){return this.request(ii(r||{},{method:t,url:n,data:(r||{}).data}))}});D.forEach(["post","put","patch"],function(t){function n(r){return function(o,a,l){return this.request(ii(l||{},{method:t,headers:r?{"Content-Type":"multipart/form-data"}:{},url:o,data:a}))}}Xa.prototype[t]=n(),Xa.prototype[t+"Form"]=n(!0)});const va=Xa;class ud{constructor(t){if(typeof t!="function")throw new TypeError("executor must be a function.");let n;this.promise=new Promise(function(o){n=o});const r=this;this.promise.then(i=>{if(!r._listeners)return;let o=r._listeners.length;for(;o-- >0;)r._listeners[o](i);r._listeners=null}),this.promise.then=i=>{let o;const a=new Promise(l=>{r.subscribe(l),o=l}).then(i);return a.cancel=function(){r.unsubscribe(o)},a},t(function(o,a,l){r.reason||(r.reason=new yo(o,a,l),n(r.reason))})}throwIfRequested(){if(this.reason)throw this.reason}subscribe(t){if(this.reason){t(this.reason);return}this._listeners?this._listeners.push(t):this._listeners=[t]}unsubscribe(t){if(!this._listeners)return;const n=this._listeners.indexOf(t);n!==-1&&this._listeners.splice(n,1)}static source(){let t;return{token:new ud(function(i){t=i}),cancel:t}}}const gk=ud;function xk(e){return function(n){return e.apply(null,n)}}function vk(e){return D.isObject(e)&&e.isAxiosError===!0}const Yu={Continue:100,SwitchingProtocols:101,Processing:102,EarlyHints:103,Ok:200,Created:201,Accepted:202,NonAuthoritativeInformation:203,NoContent:204,ResetContent:205,PartialContent:206,MultiStatus:207,AlreadyReported:208,ImUsed:226,MultipleChoices:300,MovedPermanently:301,Found:302,SeeOther:303,NotModified:304,UseProxy:305,Unused:306,TemporaryRedirect:307,PermanentRedirect:308,BadRequest:400,Unauthorized:401,PaymentRequired:402,Forbidden:403,NotFound:404,MethodNotAllowed:405,NotAcceptable:406,ProxyAuthenticationRequired:407,RequestTimeout:408,Conflict:409,Gone:410,LengthRequired:411,PreconditionFailed:412,PayloadTooLarge:413,UriTooLong:414,UnsupportedMediaType:415,RangeNotSatisfiable:416,ExpectationFailed:417,ImATeapot:418,MisdirectedRequest:421,UnprocessableEntity:422,Locked:423,FailedDependency:424,TooEarly:425,UpgradeRequired:426,PreconditionRequired:428,TooManyRequests:429,RequestHeaderFieldsTooLarge:431,UnavailableForLegalReasons:451,InternalServerError:500,NotImplemented:501,BadGateway:502,ServiceUnavailable:503,GatewayTimeout:504,HttpVersionNotSupported:505,VariantAlsoNegotiates:506,InsufficientStorage:507,LoopDetected:508,NotExtended:510,NetworkAuthenticationRequired:511};Object.entries(Yu).forEach(([e,t])=>{Yu[t]=e});const yk=Yu;function kx(e){const t=new va(e),n=rx(va.prototype.request,t);return D.extend(n,va.prototype,t,{allOwnKeys:!0}),D.extend(n,t,null,{allOwnKeys:!0}),n.create=function(i){return kx(ii(e,i))},n}const Ue=kx(sd);Ue.Axios=va;Ue.CanceledError=yo;Ue.CancelToken=gk;Ue.isCancel=yx;Ue.VERSION=Sx;Ue.toFormData=Ns;Ue.AxiosError=fe;Ue.Cancel=Ue.CanceledError;Ue.all=function(t){return Promise.all(t)};Ue.spread=xk;Ue.isAxiosError=vk;Ue.mergeConfig=ii;Ue.AxiosHeaders=bn;Ue.formToJSON=e=>vx(D.isHTMLForm(e)?new FormData(e):e);Ue.getAdapter=bx.getAdapter;Ue.HttpStatusCode=yk;Ue.default=Ue;const wk=Ue;function wr(e){"@babel/helpers - typeof";return wr=typeof Symbol=="function"&&typeof Symbol.iterator=="symbol"?function(t){return typeof t}:function(t){return t&&typeof Symbol=="function"&&t.constructor===Symbol&&t!==Symbol.prototype?"symbol":typeof t},wr(e)}function bk(e,t){if(wr(e)!="object"||!e)return e;var n=e[Symbol.toPrimitive];if(n!==void 0){var r=n.call(e,t||"default");if(wr(r)!="object")return r;throw new TypeError("@@toPrimitive must return a primitive value.")}return(t==="string"?String:Number)(e)}function jx(e){var t=bk(e,"string");return wr(t)=="symbol"?t:String(t)}function _i(e,t,n){return t=jx(t),t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function gp(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter(function(i){return Object.getOwnPropertyDescriptor(e,i).enumerable})),n.push.apply(n,r)}return n}function G(e){for(var t=1;t<arguments.length;t++){var n=arguments[t]!=null?arguments[t]:{};t%2?gp(Object(n),!0).forEach(function(r){_i(e,r,n[r])}):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):gp(Object(n)).forEach(function(r){Object.defineProperty(e,r,Object.getOwnPropertyDescriptor(n,r))})}return e}function Sk(e){if(Array.isArray(e))return e}function kk(e,t){var n=e==null?null:typeof Symbol<"u"&&e[Symbol.iterator]||e["@@iterator"];if(n!=null){var r,i,o,a,l=[],s=!0,u=!1;try{if(o=(n=n.call(e)).next,t===0){if(Object(n)!==n)return;s=!1}else for(;!(s=(r=o.call(n)).done)&&(l.push(r.value),l.length!==t);s=!0);}catch(p){u=!0,i=p}finally{try{if(!s&&n.return!=null&&(a=n.return(),Object(a)!==a))return}finally{if(u)throw i}}return l}}function Xu(e,t){(t==null||t>e.length)&&(t=e.length);for(var n=0,r=new Array(t);n<t;n++)r[n]=e[n];return r}function Ox(e,t){if(e){if(typeof e=="string")return Xu(e,t);var n=Object.prototype.toString.call(e).slice(8,-1);if(n==="Object"&&e.constructor&&(n=e.constructor.name),n==="Map"||n==="Set")return Array.from(e);if(n==="Arguments"||/^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n))return Xu(e,t)}}function jk(){throw new TypeError(`Invalid attempt to destructure non-iterable instance.
In order to be iterable, non-array objects must have a [Symbol.iterator]() method.`)}function Sn(e,t){return Sk(e)||kk(e,t)||Ox(e,t)||jk()}function Ok(e,t){if(e==null)return{};var n={},r=Object.keys(e),i,o;for(o=0;o<r.length;o++)i=r[o],!(t.indexOf(i)>=0)&&(n[i]=e[i]);return n}function Pn(e,t){if(e==null)return{};var n=Ok(e,t),r,i;if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(i=0;i<o.length;i++)r=o[i],!(t.indexOf(r)>=0)&&Object.prototype.propertyIsEnumerable.call(e,r)&&(n[r]=e[r])}return n}var Ek=["defaultInputValue","defaultMenuIsOpen","defaultValue","inputValue","menuIsOpen","onChange","onInputChange","onMenuClose","onMenuOpen","value"];function Ck(e){var t=e.defaultInputValue,n=t===void 0?"":t,r=e.defaultMenuIsOpen,i=r===void 0?!1:r,o=e.defaultValue,a=o===void 0?null:o,l=e.inputValue,s=e.menuIsOpen,u=e.onChange,p=e.onInputChange,h=e.onMenuClose,x=e.onMenuOpen,y=e.value,m=Pn(e,Ek),v=L.useState(l!==void 0?l:n),b=Sn(v,2),d=b[0],f=b[1],g=L.useState(s!==void 0?s:i),w=Sn(g,2),S=w[0],T=w[1],C=L.useState(y!==void 0?y:a),j=Sn(C,2),O=j[0],_=j[1],M=L.useCallback(function(N,Q){typeof u=="function"&&u(N,Q),_(N)},[u]),R=L.useCallback(function(N,Q){var K;typeof p=="function"&&(K=p(N,Q)),f(K!==void 0?K:N)},[p]),I=L.useCallback(function(){typeof x=="function"&&x(),T(!0)},[x]),W=L.useCallback(function(){typeof h=="function"&&h(),T(!1)},[h]),$=l!==void 0?l:d,ee=s!==void 0?s:S,ge=y!==void 0?y:O;return G(G({},m),{},{inputValue:$,menuIsOpen:ee,onChange:M,onInputChange:R,onMenuClose:W,onMenuOpen:I,value:ge})}function Pk(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}function xp(e,t){for(var n=0;n<t.length;n++){var r=t[n];r.enumerable=r.enumerable||!1,r.configurable=!0,"value"in r&&(r.writable=!0),Object.defineProperty(e,jx(r.key),r)}}function Tk(e,t,n){return t&&xp(e.prototype,t),n&&xp(e,n),Object.defineProperty(e,"prototype",{writable:!1}),e}function Qu(e,t){return Qu=Object.setPrototypeOf?Object.setPrototypeOf.bind():function(r,i){return r.__proto__=i,r},Qu(e,t)}function _k(e,t){if(typeof t!="function"&&t!==null)throw new TypeError("Super expression must either be null or a function");e.prototype=Object.create(t&&t.prototype,{constructor:{value:e,writable:!0,configurable:!0}}),Object.defineProperty(e,"prototype",{writable:!1}),t&&Qu(e,t)}function Qa(e){return Qa=Object.setPrototypeOf?Object.getPrototypeOf.bind():function(n){return n.__proto__||Object.getPrototypeOf(n)},Qa(e)}function Mk(){if(typeof Reflect>"u"||!Reflect.construct||Reflect.construct.sham)return!1;if(typeof Proxy=="function")return!0;try{return Boolean.prototype.valueOf.call(Reflect.construct(Boolean,[],function(){})),!0}catch{return!1}}function Ak(e){if(e===void 0)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return e}function Rk(e,t){if(t&&(wr(t)==="object"||typeof t=="function"))return t;if(t!==void 0)throw new TypeError("Derived constructors may only return object or undefined");return Ak(e)}function Ik(e){var t=Mk();return function(){var r=Qa(e),i;if(t){var o=Qa(this).constructor;i=Reflect.construct(r,arguments,o)}else i=r.apply(this,arguments);return Rk(this,i)}}function Lk(e){if(Array.isArray(e))return Xu(e)}function Dk(e){if(typeof Symbol<"u"&&e[Symbol.iterator]!=null||e["@@iterator"]!=null)return Array.from(e)}function zk(){throw new TypeError(`Invalid attempt to spread non-iterable instance.
In order to be iterable, non-array objects must have a [Symbol.iterator]() method.`)}function cd(e){return Lk(e)||Dk(e)||Ox(e)||zk()}function Fk(e,t){return t||(t=e.slice(0)),Object.freeze(Object.defineProperties(e,{raw:{value:Object.freeze(t)}}))}const Nk=Math.min,Vk=Math.max,Ka=Math.round,Qo=Math.floor,Ja=e=>({x:e,y:e});function Uk(e){return{...e,top:e.y,left:e.x,right:e.x+e.width,bottom:e.y+e.height}}function Ex(e){return Px(e)?(e.nodeName||"").toLowerCase():"#document"}function qt(e){var t;return(e==null||(t=e.ownerDocument)==null?void 0:t.defaultView)||window}function Cx(e){var t;return(t=(Px(e)?e.ownerDocument:e.document)||window.document)==null?void 0:t.documentElement}function Px(e){return e instanceof Node||e instanceof qt(e).Node}function Ku(e){return e instanceof Element||e instanceof qt(e).Element}function dd(e){return e instanceof HTMLElement||e instanceof qt(e).HTMLElement}function vp(e){return typeof ShadowRoot>"u"?!1:e instanceof ShadowRoot||e instanceof qt(e).ShadowRoot}function Tx(e){const{overflow:t,overflowX:n,overflowY:r,display:i}=fd(e);return/auto|scroll|overlay|hidden|clip/.test(t+r+n)&&!["inline","contents"].includes(i)}function Wk(){return typeof CSS>"u"||!CSS.supports?!1:CSS.supports("-webkit-backdrop-filter","none")}function Bk(e){return["html","body","#document"].includes(Ex(e))}function fd(e){return qt(e).getComputedStyle(e)}function Hk(e){if(Ex(e)==="html")return e;const t=e.assignedSlot||e.parentNode||vp(e)&&e.host||Cx(e);return vp(t)?t.host:t}function _x(e){const t=Hk(e);return Bk(t)?e.ownerDocument?e.ownerDocument.body:e.body:dd(t)&&Tx(t)?t:_x(t)}function qa(e,t,n){var r;t===void 0&&(t=[]),n===void 0&&(n=!0);const i=_x(e),o=i===((r=e.ownerDocument)==null?void 0:r.body),a=qt(i);return o?t.concat(a,a.visualViewport||[],Tx(i)?i:[],a.frameElement&&n?qa(a.frameElement):[]):t.concat(i,qa(i,[],n))}function $k(e){const t=fd(e);let n=parseFloat(t.width)||0,r=parseFloat(t.height)||0;const i=dd(e),o=i?e.offsetWidth:n,a=i?e.offsetHeight:r,l=Ka(n)!==o||Ka(r)!==a;return l&&(n=o,r=a),{width:n,height:r,$:l}}function pd(e){return Ku(e)?e:e.contextElement}function Cl(e){const t=pd(e);if(!dd(t))return Ja(1);const n=t.getBoundingClientRect(),{width:r,height:i,$:o}=$k(t);let a=(o?Ka(n.width):n.width)/r,l=(o?Ka(n.height):n.height)/i;return(!a||!Number.isFinite(a))&&(a=1),(!l||!Number.isFinite(l))&&(l=1),{x:a,y:l}}const Yk=Ja(0);function Xk(e){const t=qt(e);return!Wk()||!t.visualViewport?Yk:{x:t.visualViewport.offsetLeft,y:t.visualViewport.offsetTop}}function Qk(e,t,n){return t===void 0&&(t=!1),!n||t&&n!==qt(e)?!1:t}function yp(e,t,n,r){t===void 0&&(t=!1),n===void 0&&(n=!1);const i=e.getBoundingClientRect(),o=pd(e);let a=Ja(1);t&&(r?Ku(r)&&(a=Cl(r)):a=Cl(e));const l=Qk(o,n,r)?Xk(o):Ja(0);let s=(i.left+l.x)/a.x,u=(i.top+l.y)/a.y,p=i.width/a.x,h=i.height/a.y;if(o){const x=qt(o),y=r&&Ku(r)?qt(r):r;let m=x.frameElement;for(;m&&r&&y!==x;){const v=Cl(m),b=m.getBoundingClientRect(),d=fd(m),f=b.left+(m.clientLeft+parseFloat(d.paddingLeft))*v.x,g=b.top+(m.clientTop+parseFloat(d.paddingTop))*v.y;s*=v.x,u*=v.y,p*=v.x,h*=v.y,s+=f,u+=g,m=qt(m).frameElement}}return Uk({width:p,height:h,x:s,y:u})}function Kk(e,t){let n=null,r;const i=Cx(e);function o(){clearTimeout(r),n&&n.disconnect(),n=null}function a(l,s){l===void 0&&(l=!1),s===void 0&&(s=1),o();const{left:u,top:p,width:h,height:x}=e.getBoundingClientRect();if(l||t(),!h||!x)return;const y=Qo(p),m=Qo(i.clientWidth-(u+h)),v=Qo(i.clientHeight-(p+x)),b=Qo(u),f={rootMargin:-y+"px "+-m+"px "+-v+"px "+-b+"px",threshold:Vk(0,Nk(1,s))||1};let g=!0;function w(S){const T=S[0].intersectionRatio;if(T!==s){if(!g)return a();T?a(!1,T):r=setTimeout(()=>{a(!1,1e-7)},100)}g=!1}try{n=new IntersectionObserver(w,{...f,root:i.ownerDocument})}catch{n=new IntersectionObserver(w,f)}n.observe(e)}return a(!0),o}function Jk(e,t,n,r){r===void 0&&(r={});const{ancestorScroll:i=!0,ancestorResize:o=!0,elementResize:a=typeof ResizeObserver=="function",layoutShift:l=typeof IntersectionObserver=="function",animationFrame:s=!1}=r,u=pd(e),p=i||o?[...u?qa(u):[],...qa(t)]:[];p.forEach(d=>{i&&d.addEventListener("scroll",n,{passive:!0}),o&&d.addEventListener("resize",n)});const h=u&&l?Kk(u,n):null;let x=-1,y=null;a&&(y=new ResizeObserver(d=>{let[f]=d;f&&f.target===u&&y&&(y.unobserve(t),cancelAnimationFrame(x),x=requestAnimationFrame(()=>{y&&y.observe(t)})),n()}),u&&!s&&y.observe(u),y.observe(t));let m,v=s?yp(e):null;s&&b();function b(){const d=yp(e);v&&(d.x!==v.x||d.y!==v.y||d.width!==v.width||d.height!==v.height)&&n(),v=d,m=requestAnimationFrame(b)}return n(),()=>{p.forEach(d=>{i&&d.removeEventListener("scroll",n),o&&d.removeEventListener("resize",n)}),h&&h(),y&&y.disconnect(),y=null,s&&cancelAnimationFrame(m)}}var Ju=L.useLayoutEffect,qk=["className","clearValue","cx","getStyles","getClassNames","getValue","hasValue","isMulti","isRtl","options","selectOption","selectProps","setValue","theme"],Ga=function(){};function Gk(e,t){return t?t[0]==="-"?e+t:e+"__"+t:e}function Zk(e,t){for(var n=arguments.length,r=new Array(n>2?n-2:0),i=2;i<n;i++)r[i-2]=arguments[i];var o=[].concat(r);if(t&&e)for(var a in t)t.hasOwnProperty(a)&&t[a]&&o.push("".concat(Gk(e,a)));return o.filter(function(l){return l}).map(function(l){return String(l).trim()}).join(" ")}var wp=function(t){return lj(t)?t.filter(Boolean):wr(t)==="object"&&t!==null?[t]:[]},Mx=function(t){t.className,t.clearValue,t.cx,t.getStyles,t.getClassNames,t.getValue,t.hasValue,t.isMulti,t.isRtl,t.options,t.selectOption,t.selectProps,t.setValue,t.theme;var n=Pn(t,qk);return G({},n)},ze=function(t,n,r){var i=t.cx,o=t.getStyles,a=t.getClassNames,l=t.className;return{css:o(n,t),className:i(r??{},a(n,t),l)}};function Us(e){return[document.documentElement,document.body,window].indexOf(e)>-1}function ej(e){return Us(e)?window.innerHeight:e.clientHeight}function Ax(e){return Us(e)?window.pageYOffset:e.scrollTop}function Za(e,t){if(Us(e)){window.scrollTo(0,t);return}e.scrollTop=t}function tj(e){var t=getComputedStyle(e),n=t.position==="absolute",r=/(auto|scroll)/;if(t.position==="fixed")return document.documentElement;for(var i=e;i=i.parentElement;)if(t=getComputedStyle(i),!(n&&t.position==="static")&&r.test(t.overflow+t.overflowY+t.overflowX))return i;return document.documentElement}function nj(e,t,n,r){return n*((e=e/r-1)*e*e+1)+t}function Ko(e,t){var n=arguments.length>2&&arguments[2]!==void 0?arguments[2]:200,r=arguments.length>3&&arguments[3]!==void 0?arguments[3]:Ga,i=Ax(e),o=t-i,a=10,l=0;function s(){l+=a;var u=nj(l,i,o,n);Za(e,u),l<n?window.requestAnimationFrame(s):r(e)}s()}function bp(e,t){var n=e.getBoundingClientRect(),r=t.getBoundingClientRect(),i=t.offsetHeight/3;r.bottom+i>n.bottom?Za(e,Math.min(t.offsetTop+t.clientHeight-e.offsetHeight+i,e.scrollHeight)):r.top-i<n.top&&Za(e,Math.max(t.offsetTop-i,0))}function rj(e){var t=e.getBoundingClientRect();return{bottom:t.bottom,height:t.height,left:t.left,right:t.right,top:t.top,width:t.width}}function Sp(){try{return document.createEvent("TouchEvent"),!0}catch{return!1}}function ij(){try{return/Android|webOS|iPhone|iPad|iPod|BlackBerry|IEMobile|Opera Mini/i.test(navigator.userAgent)}catch{return!1}}var Rx=!1,oj={get passive(){return Rx=!0}},Jo=typeof window<"u"?window:{};Jo.addEventListener&&Jo.removeEventListener&&(Jo.addEventListener("p",Ga,oj),Jo.removeEventListener("p",Ga,!1));var aj=Rx;function sj(e){return e!=null}function lj(e){return Array.isArray(e)}function qo(e,t,n){return e?t:n}var uj=function(t){for(var n=arguments.length,r=new Array(n>1?n-1:0),i=1;i<n;i++)r[i-1]=arguments[i];var o=Object.entries(t).filter(function(a){var l=Sn(a,1),s=l[0];return!r.includes(s)});return o.reduce(function(a,l){var s=Sn(l,2),u=s[0],p=s[1];return a[u]=p,a},{})},cj=["children","innerProps"],dj=["children","innerProps"];function fj(e){var t=e.maxHeight,n=e.menuEl,r=e.minHeight,i=e.placement,o=e.shouldScroll,a=e.isFixedPosition,l=e.controlHeight,s=tj(n),u={placement:"bottom",maxHeight:t};if(!n||!n.offsetParent)return u;var p=s.getBoundingClientRect(),h=p.height,x=n.getBoundingClientRect(),y=x.bottom,m=x.height,v=x.top,b=n.offsetParent.getBoundingClientRect(),d=b.top,f=a?window.innerHeight:ej(s),g=Ax(s),w=parseInt(getComputedStyle(n).marginBottom,10),S=parseInt(getComputedStyle(n).marginTop,10),T=d-S,C=f-v,j=T+g,O=h-g-v,_=y-f+g+w,M=g+v-S,R=160;switch(i){case"auto":case"bottom":if(C>=m)return{placement:"bottom",maxHeight:t};if(O>=m&&!a)return o&&Ko(s,_,R),{placement:"bottom",maxHeight:t};if(!a&&O>=r||a&&C>=r){o&&Ko(s,_,R);var I=a?C-w:O-w;return{placement:"bottom",maxHeight:I}}if(i==="auto"||a){var W=t,$=a?T:j;return $>=r&&(W=Math.min($-w-l,t)),{placement:"top",maxHeight:W}}if(i==="bottom")return o&&Za(s,_),{placement:"bottom",maxHeight:t};break;case"top":if(T>=m)return{placement:"top",maxHeight:t};if(j>=m&&!a)return o&&Ko(s,M,R),{placement:"top",maxHeight:t};if(!a&&j>=r||a&&T>=r){var ee=t;return(!a&&j>=r||a&&T>=r)&&(ee=a?T-S:j-S),o&&Ko(s,M,R),{placement:"top",maxHeight:ee}}return{placement:"bottom",maxHeight:t};default:throw new Error('Invalid placement provided "'.concat(i,'".'))}return u}function pj(e){var t={bottom:"top",top:"bottom"};return e?t[e]:"bottom"}var Ix=function(t){return t==="auto"?"bottom":t},hj=function(t,n){var r,i=t.placement,o=t.theme,a=o.borderRadius,l=o.spacing,s=o.colors;return G((r={label:"menu"},_i(r,pj(i),"100%"),_i(r,"position","absolute"),_i(r,"width","100%"),_i(r,"zIndex",1),r),n?{}:{backgroundColor:s.neutral0,borderRadius:a,boxShadow:"0 0 0 1px hsla(0, 0%, 0%, 0.1), 0 4px 11px hsla(0, 0%, 0%, 0.1)",marginBottom:l.menuGutter,marginTop:l.menuGutter})},Lx=L.createContext(null),mj=function(t){var n=t.children,r=t.minMenuHeight,i=t.maxMenuHeight,o=t.menuPlacement,a=t.menuPosition,l=t.menuShouldScrollIntoView,s=t.theme,u=L.useContext(Lx)||{},p=u.setPortalPlacement,h=L.useRef(null),x=L.useState(i),y=Sn(x,2),m=y[0],v=y[1],b=L.useState(null),d=Sn(b,2),f=d[0],g=d[1],w=s.spacing.controlHeight;return Ju(function(){var S=h.current;if(S){var T=a==="fixed",C=l&&!T,j=fj({maxHeight:i,menuEl:S,minHeight:r,placement:o,shouldScroll:C,isFixedPosition:T,controlHeight:w});v(j.maxHeight),g(j.placement),p==null||p(j.placement)}},[i,o,a,l,r,p,w]),n({ref:h,placerProps:G(G({},t),{},{placement:f||Ix(o),maxHeight:m})})},gj=function(t){var n=t.children,r=t.innerRef,i=t.innerProps;return q("div",Z({},ze(t,"menu",{menu:!0}),{ref:r},i),n)},xj=gj,vj=function(t,n){var r=t.maxHeight,i=t.theme.spacing.baseUnit;return G({maxHeight:r,overflowY:"auto",position:"relative",WebkitOverflowScrolling:"touch"},n?{}:{paddingBottom:i,paddingTop:i})},yj=function(t){var n=t.children,r=t.innerProps,i=t.innerRef,o=t.isMulti;return q("div",Z({},ze(t,"menuList",{"menu-list":!0,"menu-list--is-multi":o}),{ref:i},r),n)},Dx=function(t,n){var r=t.theme,i=r.spacing.baseUnit,o=r.colors;return G({textAlign:"center"},n?{}:{color:o.neutral40,padding:"".concat(i*2,"px ").concat(i*3,"px")})},wj=Dx,bj=Dx,Sj=function(t){var n=t.children,r=n===void 0?"No options":n,i=t.innerProps,o=Pn(t,cj);return q("div",Z({},ze(G(G({},o),{},{children:r,innerProps:i}),"noOptionsMessage",{"menu-notice":!0,"menu-notice--no-options":!0}),i),r)},kj=function(t){var n=t.children,r=n===void 0?"Loading...":n,i=t.innerProps,o=Pn(t,dj);return q("div",Z({},ze(G(G({},o),{},{children:r,innerProps:i}),"loadingMessage",{"menu-notice":!0,"menu-notice--loading":!0}),i),r)},jj=function(t){var n=t.rect,r=t.offset,i=t.position;return{left:n.left,position:i,top:r,width:n.width,zIndex:1}},Oj=function(t){var n=t.appendTo,r=t.children,i=t.controlElement,o=t.innerProps,a=t.menuPlacement,l=t.menuPosition,s=L.useRef(null),u=L.useRef(null),p=L.useState(Ix(a)),h=Sn(p,2),x=h[0],y=h[1],m=L.useMemo(function(){return{setPortalPlacement:y}},[]),v=L.useState(null),b=Sn(v,2),d=b[0],f=b[1],g=L.useCallback(function(){if(i){var C=rj(i),j=l==="fixed"?0:window.pageYOffset,O=C[x]+j;(O!==(d==null?void 0:d.offset)||C.left!==(d==null?void 0:d.rect.left)||C.width!==(d==null?void 0:d.rect.width))&&f({offset:O,rect:C})}},[i,l,x,d==null?void 0:d.offset,d==null?void 0:d.rect.left,d==null?void 0:d.rect.width]);Ju(function(){g()},[g]);var w=L.useCallback(function(){typeof u.current=="function"&&(u.current(),u.current=null),i&&s.current&&(u.current=Jk(i,s.current,g,{elementResize:"ResizeObserver"in window}))},[i,g]);Ju(function(){w()},[w]);var S=L.useCallback(function(C){s.current=C,w()},[w]);if(!n&&l!=="fixed"||!d)return null;var T=q("div",Z({ref:S},ze(G(G({},t),{},{offset:d.offset,position:l,rect:d.rect}),"menuPortal",{"menu-portal":!0}),o),r);return q(Lx.Provider,{value:m},n?go.createPortal(T,n):T)},Ej=function(t){var n=t.isDisabled,r=t.isRtl;return{label:"container",direction:r?"rtl":void 0,pointerEvents:n?"none":void 0,position:"relative"}},Cj=function(t){var n=t.children,r=t.innerProps,i=t.isDisabled,o=t.isRtl;return q("div",Z({},ze(t,"container",{"--is-disabled":i,"--is-rtl":o}),r),n)},Pj=function(t,n){var r=t.theme.spacing,i=t.isMulti,o=t.hasValue,a=t.selectProps.controlShouldRenderValue;return G({alignItems:"center",display:i&&o&&a?"flex":"grid",flex:1,flexWrap:"wrap",WebkitOverflowScrolling:"touch",position:"relative",overflow:"hidden"},n?{}:{padding:"".concat(r.baseUnit/2,"px ").concat(r.baseUnit*2,"px")})},Tj=function(t){var n=t.children,r=t.innerProps,i=t.isMulti,o=t.hasValue;return q("div",Z({},ze(t,"valueContainer",{"value-container":!0,"value-container--is-multi":i,"value-container--has-value":o}),r),n)},_j=function(){return{alignItems:"center",alignSelf:"stretch",display:"flex",flexShrink:0}},Mj=function(t){var n=t.children,r=t.innerProps;return q("div",Z({},ze(t,"indicatorsContainer",{indicators:!0}),r),n)},kp,Aj=["size"],Rj=["innerProps","isRtl","size"],Ij={name:"8mmkcg",styles:"display:inline-block;fill:currentColor;line-height:1;stroke:currentColor;stroke-width:0"},zx=function(t){var n=t.size,r=Pn(t,Aj);return q("svg",Z({height:n,width:n,viewBox:"0 0 20 20","aria-hidden":"true",focusable:"false",css:Ij},r))},hd=function(t){return q(zx,Z({size:20},t),q("path",{d:"M14.348 14.849c-0.469 0.469-1.229 0.469-1.697 0l-2.651-3.030-2.651 3.029c-0.469 0.469-1.229 0.469-1.697 0-0.469-0.469-0.469-1.229 0-1.697l2.758-3.15-2.759-3.152c-0.469-0.469-0.469-1.228 0-1.697s1.228-0.469 1.697 0l2.652 3.031 2.651-3.031c0.469-0.469 1.228-0.469 1.697 0s0.469 1.229 0 1.697l-2.758 3.152 2.758 3.15c0.469 0.469 0.469 1.229 0 1.698z"}))},Fx=function(t){return q(zx,Z({size:20},t),q("path",{d:"M4.516 7.548c0.436-0.446 1.043-0.481 1.576 0l3.908 3.747 3.908-3.747c0.533-0.481 1.141-0.446 1.574 0 0.436 0.445 0.408 1.197 0 1.615-0.406 0.418-4.695 4.502-4.695 4.502-0.217 0.223-0.502 0.335-0.787 0.335s-0.57-0.112-0.789-0.335c0 0-4.287-4.084-4.695-4.502s-0.436-1.17 0-1.615z"}))},Nx=function(t,n){var r=t.isFocused,i=t.theme,o=i.spacing.baseUnit,a=i.colors;return G({label:"indicatorContainer",display:"flex",transition:"color 150ms"},n?{}:{color:r?a.neutral60:a.neutral20,padding:o*2,":hover":{color:r?a.neutral80:a.neutral40}})},Lj=Nx,Dj=function(t){var n=t.children,r=t.innerProps;return q("div",Z({},ze(t,"dropdownIndicator",{indicator:!0,"dropdown-indicator":!0}),r),n||q(Fx,null))},zj=Nx,Fj=function(t){var n=t.children,r=t.innerProps;return q("div",Z({},ze(t,"clearIndicator",{indicator:!0,"clear-indicator":!0}),r),n||q(hd,null))},Nj=function(t,n){var r=t.isDisabled,i=t.theme,o=i.spacing.baseUnit,a=i.colors;return G({label:"indicatorSeparator",alignSelf:"stretch",width:1},n?{}:{backgroundColor:r?a.neutral10:a.neutral20,marginBottom:o*2,marginTop:o*2})},Vj=function(t){var n=t.innerProps;return q("span",Z({},n,ze(t,"indicatorSeparator",{"indicator-separator":!0})))},Uj=B1(kp||(kp=Fk([`
  0%, 80%, 100% { opacity: 0; }
  40% { opacity: 1; }
`]))),Wj=function(t,n){var r=t.isFocused,i=t.size,o=t.theme,a=o.colors,l=o.spacing.baseUnit;return G({label:"loadingIndicator",display:"flex",transition:"color 150ms",alignSelf:"center",fontSize:i,lineHeight:1,marginRight:i,textAlign:"center",verticalAlign:"middle"},n?{}:{color:r?a.neutral60:a.neutral20,padding:l*2})},Pl=function(t){var n=t.delay,r=t.offset;return q("span",{css:hr({animation:"".concat(Uj," 1s ease-in-out ").concat(n,"ms infinite;"),backgroundColor:"currentColor",borderRadius:"1em",display:"inline-block",marginLeft:r?"1em":void 0,height:"1em",verticalAlign:"top",width:"1em"},"","")})},Bj=function(t){var n=t.innerProps,r=t.isRtl,i=t.size,o=i===void 0?4:i,a=Pn(t,Rj);return q("div",Z({},ze(G(G({},a),{},{innerProps:n,isRtl:r,size:o}),"loadingIndicator",{indicator:!0,"loading-indicator":!0}),n),q(Pl,{delay:0,offset:r}),q(Pl,{delay:160,offset:!0}),q(Pl,{delay:320,offset:!r}))},Hj=function(t,n){var r=t.isDisabled,i=t.isFocused,o=t.theme,a=o.colors,l=o.borderRadius,s=o.spacing;return G({label:"control",alignItems:"center",cursor:"default",display:"flex",flexWrap:"wrap",justifyContent:"space-between",minHeight:s.controlHeight,outline:"0 !important",position:"relative",transition:"all 100ms"},n?{}:{backgroundColor:r?a.neutral5:a.neutral0,borderColor:r?a.neutral10:i?a.primary:a.neutral20,borderRadius:l,borderStyle:"solid",borderWidth:1,boxShadow:i?"0 0 0 1px ".concat(a.primary):void 0,"&:hover":{borderColor:i?a.primary:a.neutral30}})},$j=function(t){var n=t.children,r=t.isDisabled,i=t.isFocused,o=t.innerRef,a=t.innerProps,l=t.menuIsOpen;return q("div",Z({ref:o},ze(t,"control",{control:!0,"control--is-disabled":r,"control--is-focused":i,"control--menu-is-open":l}),a,{"aria-disabled":r||void 0}),n)},Yj=$j,Xj=["data"],Qj=function(t,n){var r=t.theme.spacing;return n?{}:{paddingBottom:r.baseUnit*2,paddingTop:r.baseUnit*2}},Kj=function(t){var n=t.children,r=t.cx,i=t.getStyles,o=t.getClassNames,a=t.Heading,l=t.headingProps,s=t.innerProps,u=t.label,p=t.theme,h=t.selectProps;return q("div",Z({},ze(t,"group",{group:!0}),s),q(a,Z({},l,{selectProps:h,theme:p,getStyles:i,getClassNames:o,cx:r}),u),q("div",null,n))},Jj=function(t,n){var r=t.theme,i=r.colors,o=r.spacing;return G({label:"group",cursor:"default",display:"block"},n?{}:{color:i.neutral40,fontSize:"75%",fontWeight:500,marginBottom:"0.25em",paddingLeft:o.baseUnit*3,paddingRight:o.baseUnit*3,textTransform:"uppercase"})},qj=function(t){var n=Mx(t);n.data;var r=Pn(n,Xj);return q("div",Z({},ze(t,"groupHeading",{"group-heading":!0}),r))},Gj=Kj,Zj=["innerRef","isDisabled","isHidden","inputClassName"],eO=function(t,n){var r=t.isDisabled,i=t.value,o=t.theme,a=o.spacing,l=o.colors;return G(G({visibility:r?"hidden":"visible",transform:i?"translateZ(0)":""},tO),n?{}:{margin:a.baseUnit/2,paddingBottom:a.baseUnit/2,paddingTop:a.baseUnit/2,color:l.neutral80})},Vx={gridArea:"1 / 2",font:"inherit",minWidth:"2px",border:0,margin:0,outline:0,padding:0},tO={flex:"1 1 auto",display:"inline-grid",gridArea:"1 / 1 / 2 / 3",gridTemplateColumns:"0 min-content","&:after":G({content:'attr(data-value) " "',visibility:"hidden",whiteSpace:"pre"},Vx)},nO=function(t){return G({label:"input",color:"inherit",background:0,opacity:t?0:1,width:"100%"},Vx)},rO=function(t){var n=t.cx,r=t.value,i=Mx(t),o=i.innerRef,a=i.isDisabled,l=i.isHidden,s=i.inputClassName,u=Pn(i,Zj);return q("div",Z({},ze(t,"input",{"input-container":!0}),{"data-value":r||""}),q("input",Z({className:n({input:!0},s),ref:o,style:nO(l),disabled:a},u)))},iO=rO,oO=function(t,n){var r=t.theme,i=r.spacing,o=r.borderRadius,a=r.colors;return G({label:"multiValue",display:"flex",minWidth:0},n?{}:{backgroundColor:a.neutral10,borderRadius:o/2,margin:i.baseUnit/2})},aO=function(t,n){var r=t.theme,i=r.borderRadius,o=r.colors,a=t.cropWithEllipsis;return G({overflow:"hidden",textOverflow:a||a===void 0?"ellipsis":void 0,whiteSpace:"nowrap"},n?{}:{borderRadius:i/2,color:o.neutral80,fontSize:"85%",padding:3,paddingLeft:6})},sO=function(t,n){var r=t.theme,i=r.spacing,o=r.borderRadius,a=r.colors,l=t.isFocused;return G({alignItems:"center",display:"flex"},n?{}:{borderRadius:o/2,backgroundColor:l?a.dangerLight:void 0,paddingLeft:i.baseUnit,paddingRight:i.baseUnit,":hover":{backgroundColor:a.dangerLight,color:a.danger}})},Ux=function(t){var n=t.children,r=t.innerProps;return q("div",r,n)},lO=Ux,uO=Ux;function cO(e){var t=e.children,n=e.innerProps;return q("div",Z({role:"button"},n),t||q(hd,{size:14}))}var dO=function(t){var n=t.children,r=t.components,i=t.data,o=t.innerProps,a=t.isDisabled,l=t.removeProps,s=t.selectProps,u=r.Container,p=r.Label,h=r.Remove;return q(u,{data:i,innerProps:G(G({},ze(t,"multiValue",{"multi-value":!0,"multi-value--is-disabled":a})),o),selectProps:s},q(p,{data:i,innerProps:G({},ze(t,"multiValueLabel",{"multi-value__label":!0})),selectProps:s},n),q(h,{data:i,innerProps:G(G({},ze(t,"multiValueRemove",{"multi-value__remove":!0})),{},{"aria-label":"Remove ".concat(n||"option")},l),selectProps:s}))},fO=dO,pO=function(t,n){var r=t.isDisabled,i=t.isFocused,o=t.isSelected,a=t.theme,l=a.spacing,s=a.colors;return G({label:"option",cursor:"default",display:"block",fontSize:"inherit",width:"100%",userSelect:"none",WebkitTapHighlightColor:"rgba(0, 0, 0, 0)"},n?{}:{backgroundColor:o?s.primary:i?s.primary25:"transparent",color:r?s.neutral20:o?s.neutral0:"inherit",padding:"".concat(l.baseUnit*2,"px ").concat(l.baseUnit*3,"px"),":active":{backgroundColor:r?void 0:o?s.primary:s.primary50}})},hO=function(t){var n=t.children,r=t.isDisabled,i=t.isFocused,o=t.isSelected,a=t.innerRef,l=t.innerProps;return q("div",Z({},ze(t,"option",{option:!0,"option--is-disabled":r,"option--is-focused":i,"option--is-selected":o}),{ref:a,"aria-disabled":r},l),n)},mO=hO,gO=function(t,n){var r=t.theme,i=r.spacing,o=r.colors;return G({label:"placeholder",gridArea:"1 / 1 / 2 / 3"},n?{}:{color:o.neutral50,marginLeft:i.baseUnit/2,marginRight:i.baseUnit/2})},xO=function(t){var n=t.children,r=t.innerProps;return q("div",Z({},ze(t,"placeholder",{placeholder:!0}),r),n)},vO=xO,yO=function(t,n){var r=t.isDisabled,i=t.theme,o=i.spacing,a=i.colors;return G({label:"singleValue",gridArea:"1 / 1 / 2 / 3",maxWidth:"100%",overflow:"hidden",textOverflow:"ellipsis",whiteSpace:"nowrap"},n?{}:{color:r?a.neutral40:a.neutral80,marginLeft:o.baseUnit/2,marginRight:o.baseUnit/2})},wO=function(t){var n=t.children,r=t.isDisabled,i=t.innerProps;return q("div",Z({},ze(t,"singleValue",{"single-value":!0,"single-value--is-disabled":r}),i),n)},bO=wO,SO={ClearIndicator:Fj,Control:Yj,DropdownIndicator:Dj,DownChevron:Fx,CrossIcon:hd,Group:Gj,GroupHeading:qj,IndicatorsContainer:Mj,IndicatorSeparator:Vj,Input:iO,LoadingIndicator:Bj,Menu:xj,MenuList:yj,MenuPortal:Oj,LoadingMessage:kj,NoOptionsMessage:Sj,MultiValue:fO,MultiValueContainer:lO,MultiValueLabel:uO,MultiValueRemove:cO,Option:mO,Placeholder:vO,SelectContainer:Cj,SingleValue:bO,ValueContainer:Tj},kO=function(t){return G(G({},SO),t.components)},jp=Number.isNaN||function(t){return typeof t=="number"&&t!==t};function jO(e,t){return!!(e===t||jp(e)&&jp(t))}function OO(e,t){if(e.length!==t.length)return!1;for(var n=0;n<e.length;n++)if(!jO(e[n],t[n]))return!1;return!0}function EO(e,t){t===void 0&&(t=OO);var n=null;function r(){for(var i=[],o=0;o<arguments.length;o++)i[o]=arguments[o];if(n&&n.lastThis===this&&t(i,n.lastArgs))return n.lastResult;var a=e.apply(this,i);return n={lastResult:a,lastArgs:i,lastThis:this},a}return r.clear=function(){n=null},r}var CO={name:"7pg0cj-a11yText",styles:"label:a11yText;z-index:9999;border:0;clip:rect(1px, 1px, 1px, 1px);height:1px;width:1px;position:absolute;overflow:hidden;padding:0;white-space:nowrap"},PO=function(t){return q("span",Z({css:CO},t))},Op=PO,TO={guidance:function(t){var n=t.isSearchable,r=t.isMulti,i=t.tabSelectsValue,o=t.context,a=t.isInitialFocus;switch(o){case"menu":return"Use Up and Down to choose options, press Enter to select the currently focused option, press Escape to exit the menu".concat(i?", press Tab to select the option and exit the menu":"",".");case"input":return a?"".concat(t["aria-label"]||"Select"," is focused ").concat(n?",type to refine list":"",", press Down to open the menu, ").concat(r?" press left to focus selected values":""):"";case"value":return"Use left and right to toggle between focused values, press Backspace to remove the currently focused value";default:return""}},onChange:function(t){var n=t.action,r=t.label,i=r===void 0?"":r,o=t.labels,a=t.isDisabled;switch(n){case"deselect-option":case"pop-value":case"remove-value":return"option ".concat(i,", deselected.");case"clear":return"All selected options have been cleared.";case"initial-input-focus":return"option".concat(o.length>1?"s":""," ").concat(o.join(","),", selected.");case"select-option":return a?"option ".concat(i," is disabled. Select another option."):"option ".concat(i,", selected.");default:return""}},onFocus:function(t){var n=t.context,r=t.focused,i=t.options,o=t.label,a=o===void 0?"":o,l=t.selectValue,s=t.isDisabled,u=t.isSelected,p=t.isAppleDevice,h=function(v,b){return v&&v.length?"".concat(v.indexOf(b)+1," of ").concat(v.length):""};if(n==="value"&&l)return"value ".concat(a," focused, ").concat(h(l,r),".");if(n==="menu"&&p){var x=s?" disabled":"",y="".concat(u?" selected":"").concat(x);return"".concat(a).concat(y,", ").concat(h(i,r),".")}return""},onFilter:function(t){var n=t.inputValue,r=t.resultsMessage;return"".concat(r).concat(n?" for search term "+n:"",".")}},_O=function(t){var n=t.ariaSelection,r=t.focusedOption,i=t.focusedValue,o=t.focusableOptions,a=t.isFocused,l=t.selectValue,s=t.selectProps,u=t.id,p=t.isAppleDevice,h=s.ariaLiveMessages,x=s.getOptionLabel,y=s.inputValue,m=s.isMulti,v=s.isOptionDisabled,b=s.isSearchable,d=s.menuIsOpen,f=s.options,g=s.screenReaderStatus,w=s.tabSelectsValue,S=s.isLoading,T=s["aria-label"],C=s["aria-live"],j=L.useMemo(function(){return G(G({},TO),h||{})},[h]),O=L.useMemo(function(){var $="";if(n&&j.onChange){var ee=n.option,ge=n.options,N=n.removedValue,Q=n.removedValues,K=n.value,de=function(Je){return Array.isArray(Je)?null:Je},re=N||ee||de(K),Ce=re?x(re):"",Se=ge||Q||void 0,$e=Se?Se.map(x):[],pe=G({isDisabled:re&&v(re,l),label:Ce,labels:$e},n);$=j.onChange(pe)}return $},[n,j,v,l,x]),_=L.useMemo(function(){var $="",ee=r||i,ge=!!(r&&l&&l.includes(r));if(ee&&j.onFocus){var N={focused:ee,label:x(ee),isDisabled:v(ee,l),isSelected:ge,options:o,context:ee===r?"menu":"value",selectValue:l,isAppleDevice:p};$=j.onFocus(N)}return $},[r,i,x,v,j,o,l,p]),M=L.useMemo(function(){var $="";if(d&&f.length&&!S&&j.onFilter){var ee=g({count:o.length});$=j.onFilter({inputValue:y,resultsMessage:ee})}return $},[o,y,d,j,f,g,S]),R=(n==null?void 0:n.action)==="initial-input-focus",I=L.useMemo(function(){var $="";if(j.guidance){var ee=i?"value":d?"menu":"input";$=j.guidance({"aria-label":T,context:ee,isDisabled:r&&v(r,l),isMulti:m,isSearchable:b,tabSelectsValue:w,isInitialFocus:R})}return $},[T,r,i,m,v,b,d,j,l,w,R]),W=q(L.Fragment,null,q("span",{id:"aria-selection"},O),q("span",{id:"aria-focused"},_),q("span",{id:"aria-results"},M),q("span",{id:"aria-guidance"},I));return q(L.Fragment,null,q(Op,{id:u},R&&W),q(Op,{"aria-live":C,"aria-atomic":"false","aria-relevant":"additions text",role:"log"},a&&!R&&W))},MO=_O,qu=[{base:"A",letters:"AⒶＡÀÁÂẦẤẪẨÃĀĂẰẮẴẲȦǠÄǞẢÅǺǍȀȂẠẬẶḀĄȺⱯ"},{base:"AA",letters:"Ꜳ"},{base:"AE",letters:"ÆǼǢ"},{base:"AO",letters:"Ꜵ"},{base:"AU",letters:"Ꜷ"},{base:"AV",letters:"ꜸꜺ"},{base:"AY",letters:"Ꜽ"},{base:"B",letters:"BⒷＢḂḄḆɃƂƁ"},{base:"C",letters:"CⒸＣĆĈĊČÇḈƇȻꜾ"},{base:"D",letters:"DⒹＤḊĎḌḐḒḎĐƋƊƉꝹ"},{base:"DZ",letters:"ǱǄ"},{base:"Dz",letters:"ǲǅ"},{base:"E",letters:"EⒺＥÈÉÊỀẾỄỂẼĒḔḖĔĖËẺĚȄȆẸỆȨḜĘḘḚƐƎ"},{base:"F",letters:"FⒻＦḞƑꝻ"},{base:"G",letters:"GⒼＧǴĜḠĞĠǦĢǤƓꞠꝽꝾ"},{base:"H",letters:"HⒽＨĤḢḦȞḤḨḪĦⱧⱵꞍ"},{base:"I",letters:"IⒾＩÌÍÎĨĪĬİÏḮỈǏȈȊỊĮḬƗ"},{base:"J",letters:"JⒿＪĴɈ"},{base:"K",letters:"KⓀＫḰǨḲĶḴƘⱩꝀꝂꝄꞢ"},{base:"L",letters:"LⓁＬĿĹĽḶḸĻḼḺŁȽⱢⱠꝈꝆꞀ"},{base:"LJ",letters:"Ǉ"},{base:"Lj",letters:"ǈ"},{base:"M",letters:"MⓂＭḾṀṂⱮƜ"},{base:"N",letters:"NⓃＮǸŃÑṄŇṆŅṊṈȠƝꞐꞤ"},{base:"NJ",letters:"Ǌ"},{base:"Nj",letters:"ǋ"},{base:"O",letters:"OⓄＯÒÓÔỒỐỖỔÕṌȬṎŌṐṒŎȮȰÖȪỎŐǑȌȎƠỜỚỠỞỢỌỘǪǬØǾƆƟꝊꝌ"},{base:"OI",letters:"Ƣ"},{base:"OO",letters:"Ꝏ"},{base:"OU",letters:"Ȣ"},{base:"P",letters:"PⓅＰṔṖƤⱣꝐꝒꝔ"},{base:"Q",letters:"QⓆＱꝖꝘɊ"},{base:"R",letters:"RⓇＲŔṘŘȐȒṚṜŖṞɌⱤꝚꞦꞂ"},{base:"S",letters:"SⓈＳẞŚṤŜṠŠṦṢṨȘŞⱾꞨꞄ"},{base:"T",letters:"TⓉＴṪŤṬȚŢṰṮŦƬƮȾꞆ"},{base:"TZ",letters:"Ꜩ"},{base:"U",letters:"UⓊＵÙÚÛŨṸŪṺŬÜǛǗǕǙỦŮŰǓȔȖƯỪỨỮỬỰỤṲŲṶṴɄ"},{base:"V",letters:"VⓋＶṼṾƲꝞɅ"},{base:"VY",letters:"Ꝡ"},{base:"W",letters:"WⓌＷẀẂŴẆẄẈⱲ"},{base:"X",letters:"XⓍＸẊẌ"},{base:"Y",letters:"YⓎＹỲÝŶỸȲẎŸỶỴƳɎỾ"},{base:"Z",letters:"ZⓏＺŹẐŻŽẒẔƵȤⱿⱫꝢ"},{base:"a",letters:"aⓐａẚàáâầấẫẩãāăằắẵẳȧǡäǟảåǻǎȁȃạậặḁąⱥɐ"},{base:"aa",letters:"ꜳ"},{base:"ae",letters:"æǽǣ"},{base:"ao",letters:"ꜵ"},{base:"au",letters:"ꜷ"},{base:"av",letters:"ꜹꜻ"},{base:"ay",letters:"ꜽ"},{base:"b",letters:"bⓑｂḃḅḇƀƃɓ"},{base:"c",letters:"cⓒｃćĉċčçḉƈȼꜿↄ"},{base:"d",letters:"dⓓｄḋďḍḑḓḏđƌɖɗꝺ"},{base:"dz",letters:"ǳǆ"},{base:"e",letters:"eⓔｅèéêềếễểẽēḕḗĕėëẻěȅȇẹệȩḝęḙḛɇɛǝ"},{base:"f",letters:"fⓕｆḟƒꝼ"},{base:"g",letters:"gⓖｇǵĝḡğġǧģǥɠꞡᵹꝿ"},{base:"h",letters:"hⓗｈĥḣḧȟḥḩḫẖħⱨⱶɥ"},{base:"hv",letters:"ƕ"},{base:"i",letters:"iⓘｉìíîĩīĭïḯỉǐȉȋịįḭɨı"},{base:"j",letters:"jⓙｊĵǰɉ"},{base:"k",letters:"kⓚｋḱǩḳķḵƙⱪꝁꝃꝅꞣ"},{base:"l",letters:"lⓛｌŀĺľḷḹļḽḻſłƚɫⱡꝉꞁꝇ"},{base:"lj",letters:"ǉ"},{base:"m",letters:"mⓜｍḿṁṃɱɯ"},{base:"n",letters:"nⓝｎǹńñṅňṇņṋṉƞɲŉꞑꞥ"},{base:"nj",letters:"ǌ"},{base:"o",letters:"oⓞｏòóôồốỗổõṍȭṏōṑṓŏȯȱöȫỏőǒȍȏơờớỡởợọộǫǭøǿɔꝋꝍɵ"},{base:"oi",letters:"ƣ"},{base:"ou",letters:"ȣ"},{base:"oo",letters:"ꝏ"},{base:"p",letters:"pⓟｐṕṗƥᵽꝑꝓꝕ"},{base:"q",letters:"qⓠｑɋꝗꝙ"},{base:"r",letters:"rⓡｒŕṙřȑȓṛṝŗṟɍɽꝛꞧꞃ"},{base:"s",letters:"sⓢｓßśṥŝṡšṧṣṩșşȿꞩꞅẛ"},{base:"t",letters:"tⓣｔṫẗťṭțţṱṯŧƭʈⱦꞇ"},{base:"tz",letters:"ꜩ"},{base:"u",letters:"uⓤｕùúûũṹūṻŭüǜǘǖǚủůűǔȕȗưừứữửựụṳųṷṵʉ"},{base:"v",letters:"vⓥｖṽṿʋꝟʌ"},{base:"vy",letters:"ꝡ"},{base:"w",letters:"wⓦｗẁẃŵẇẅẘẉⱳ"},{base:"x",letters:"xⓧｘẋẍ"},{base:"y",letters:"yⓨｙỳýŷỹȳẏÿỷẙỵƴɏỿ"},{base:"z",letters:"zⓩｚźẑżžẓẕƶȥɀⱬꝣ"}],AO=new RegExp("["+qu.map(function(e){return e.letters}).join("")+"]","g"),Wx={};for(var Tl=0;Tl<qu.length;Tl++)for(var _l=qu[Tl],Ml=0;Ml<_l.letters.length;Ml++)Wx[_l.letters[Ml]]=_l.base;var Bx=function(t){return t.replace(AO,function(n){return Wx[n]})},RO=EO(Bx),Ep=function(t){return t.replace(/^\s+|\s+$/g,"")},IO=function(t){return"".concat(t.label," ").concat(t.value)},LO=function(t){return function(n,r){if(n.data.__isNew__)return!0;var i=G({ignoreCase:!0,ignoreAccents:!0,stringify:IO,trim:!0,matchFrom:"any"},t),o=i.ignoreCase,a=i.ignoreAccents,l=i.stringify,s=i.trim,u=i.matchFrom,p=s?Ep(r):r,h=s?Ep(l(n)):l(n);return o&&(p=p.toLowerCase(),h=h.toLowerCase()),a&&(p=RO(p),h=Bx(h)),u==="start"?h.substr(0,p.length)===p:h.indexOf(p)>-1}},DO=["innerRef"];function zO(e){var t=e.innerRef,n=Pn(e,DO),r=uj(n,"onExited","in","enter","exit","appear");return q("input",Z({ref:t},r,{css:hr({label:"dummyInput",background:0,border:0,caretColor:"transparent",fontSize:"inherit",gridArea:"1 / 1 / 2 / 3",outline:0,padding:0,width:1,color:"transparent",left:-100,opacity:0,position:"relative",transform:"scale(.01)"},"","")}))}var FO=function(t){t.cancelable&&t.preventDefault(),t.stopPropagation()};function NO(e){var t=e.isEnabled,n=e.onBottomArrive,r=e.onBottomLeave,i=e.onTopArrive,o=e.onTopLeave,a=L.useRef(!1),l=L.useRef(!1),s=L.useRef(0),u=L.useRef(null),p=L.useCallback(function(b,d){if(u.current!==null){var f=u.current,g=f.scrollTop,w=f.scrollHeight,S=f.clientHeight,T=u.current,C=d>0,j=w-S-g,O=!1;j>d&&a.current&&(r&&r(b),a.current=!1),C&&l.current&&(o&&o(b),l.current=!1),C&&d>j?(n&&!a.current&&n(b),T.scrollTop=w,O=!0,a.current=!0):!C&&-d>g&&(i&&!l.current&&i(b),T.scrollTop=0,O=!0,l.current=!0),O&&FO(b)}},[n,r,i,o]),h=L.useCallback(function(b){p(b,b.deltaY)},[p]),x=L.useCallback(function(b){s.current=b.changedTouches[0].clientY},[]),y=L.useCallback(function(b){var d=s.current-b.changedTouches[0].clientY;p(b,d)},[p]),m=L.useCallback(function(b){if(b){var d=aj?{passive:!1}:!1;b.addEventListener("wheel",h,d),b.addEventListener("touchstart",x,d),b.addEventListener("touchmove",y,d)}},[y,x,h]),v=L.useCallback(function(b){b&&(b.removeEventListener("wheel",h,!1),b.removeEventListener("touchstart",x,!1),b.removeEventListener("touchmove",y,!1))},[y,x,h]);return L.useEffect(function(){if(t){var b=u.current;return m(b),function(){v(b)}}},[t,m,v]),function(b){u.current=b}}var Cp=["boxSizing","height","overflow","paddingRight","position"],Pp={boxSizing:"border-box",overflow:"hidden",position:"relative",height:"100%"};function Tp(e){e.preventDefault()}function _p(e){e.stopPropagation()}function Mp(){var e=this.scrollTop,t=this.scrollHeight,n=e+this.offsetHeight;e===0?this.scrollTop=1:n===t&&(this.scrollTop=e-1)}function Ap(){return"ontouchstart"in window||navigator.maxTouchPoints}var Rp=!!(typeof window<"u"&&window.document&&window.document.createElement),ki=0,Cr={capture:!1,passive:!1};function VO(e){var t=e.isEnabled,n=e.accountForScrollbars,r=n===void 0?!0:n,i=L.useRef({}),o=L.useRef(null),a=L.useCallback(function(s){if(Rp){var u=document.body,p=u&&u.style;if(r&&Cp.forEach(function(m){var v=p&&p[m];i.current[m]=v}),r&&ki<1){var h=parseInt(i.current.paddingRight,10)||0,x=document.body?document.body.clientWidth:0,y=window.innerWidth-x+h||0;Object.keys(Pp).forEach(function(m){var v=Pp[m];p&&(p[m]=v)}),p&&(p.paddingRight="".concat(y,"px"))}u&&Ap()&&(u.addEventListener("touchmove",Tp,Cr),s&&(s.addEventListener("touchstart",Mp,Cr),s.addEventListener("touchmove",_p,Cr))),ki+=1}},[r]),l=L.useCallback(function(s){if(Rp){var u=document.body,p=u&&u.style;ki=Math.max(ki-1,0),r&&ki<1&&Cp.forEach(function(h){var x=i.current[h];p&&(p[h]=x)}),u&&Ap()&&(u.removeEventListener("touchmove",Tp,Cr),s&&(s.removeEventListener("touchstart",Mp,Cr),s.removeEventListener("touchmove",_p,Cr)))}},[r]);return L.useEffect(function(){if(t){var s=o.current;return a(s),function(){l(s)}}},[t,a,l]),function(s){o.current=s}}var UO=function(t){var n=t.target;return n.ownerDocument.activeElement&&n.ownerDocument.activeElement.blur()},WO={name:"1kfdb0e",styles:"position:fixed;left:0;bottom:0;right:0;top:0"};function BO(e){var t=e.children,n=e.lockEnabled,r=e.captureEnabled,i=r===void 0?!0:r,o=e.onBottomArrive,a=e.onBottomLeave,l=e.onTopArrive,s=e.onTopLeave,u=NO({isEnabled:i,onBottomArrive:o,onBottomLeave:a,onTopArrive:l,onTopLeave:s}),p=VO({isEnabled:n}),h=function(y){u(y),p(y)};return q(L.Fragment,null,n&&q("div",{onClick:UO,css:WO}),t(h))}var HO={name:"1a0ro4n-requiredInput",styles:"label:requiredInput;opacity:0;pointer-events:none;position:absolute;bottom:0;left:0;right:0;width:100%"},$O=function(t){var n=t.name,r=t.onFocus;return q("input",{required:!0,name:n,tabIndex:-1,"aria-hidden":"true",onFocus:r,css:HO,value:"",onChange:function(){}})},YO=$O;function md(e){var t;return typeof window<"u"&&window.navigator!=null?e.test(((t=window.navigator.userAgentData)===null||t===void 0?void 0:t.platform)||window.navigator.platform):!1}function XO(){return md(/^iPhone/i)}function Hx(){return md(/^Mac/i)}function QO(){return md(/^iPad/i)||Hx()&&navigator.maxTouchPoints>1}function KO(){return XO()||QO()}function JO(){return Hx()||KO()}var qO=function(t){return t.label},GO=function(t){return t.label},ZO=function(t){return t.value},eE=function(t){return!!t.isDisabled},tE={clearIndicator:zj,container:Ej,control:Hj,dropdownIndicator:Lj,group:Qj,groupHeading:Jj,indicatorsContainer:_j,indicatorSeparator:Nj,input:eO,loadingIndicator:Wj,loadingMessage:bj,menu:hj,menuList:vj,menuPortal:jj,multiValue:oO,multiValueLabel:aO,multiValueRemove:sO,noOptionsMessage:wj,option:pO,placeholder:gO,singleValue:yO,valueContainer:Pj},nE={primary:"#2684FF",primary75:"#4C9AFF",primary50:"#B2D4FF",primary25:"#DEEBFF",danger:"#DE350B",dangerLight:"#FFBDAD",neutral0:"hsl(0, 0%, 100%)",neutral5:"hsl(0, 0%, 95%)",neutral10:"hsl(0, 0%, 90%)",neutral20:"hsl(0, 0%, 80%)",neutral30:"hsl(0, 0%, 70%)",neutral40:"hsl(0, 0%, 60%)",neutral50:"hsl(0, 0%, 50%)",neutral60:"hsl(0, 0%, 40%)",neutral70:"hsl(0, 0%, 30%)",neutral80:"hsl(0, 0%, 20%)",neutral90:"hsl(0, 0%, 10%)"},rE=4,$x=4,iE=38,oE=$x*2,aE={baseUnit:$x,controlHeight:iE,menuGutter:oE},Al={borderRadius:rE,colors:nE,spacing:aE},sE={"aria-live":"polite",backspaceRemovesValue:!0,blurInputOnSelect:Sp(),captureMenuScroll:!Sp(),classNames:{},closeMenuOnSelect:!0,closeMenuOnScroll:!1,components:{},controlShouldRenderValue:!0,escapeClearsValue:!1,filterOption:LO(),formatGroupLabel:qO,getOptionLabel:GO,getOptionValue:ZO,isDisabled:!1,isLoading:!1,isMulti:!1,isRtl:!1,isSearchable:!0,isOptionDisabled:eE,loadingMessage:function(){return"Loading..."},maxMenuHeight:300,minMenuHeight:140,menuIsOpen:!1,menuPlacement:"bottom",menuPosition:"absolute",menuShouldBlockScroll:!1,menuShouldScrollIntoView:!ij(),noOptionsMessage:function(){return"No options"},openMenuOnFocus:!1,openMenuOnClick:!0,options:[],pageSize:5,placeholder:"Select...",screenReaderStatus:function(t){var n=t.count;return"".concat(n," result").concat(n!==1?"s":""," available")},styles:{},tabIndex:0,tabSelectsValue:!0,unstyled:!1};function Ip(e,t,n,r){var i=Qx(e,t,n),o=Kx(e,t,n),a=Xx(e,t),l=es(e,t);return{type:"option",data:t,isDisabled:i,isSelected:o,label:a,value:l,index:r}}function ya(e,t){return e.options.map(function(n,r){if("options"in n){var i=n.options.map(function(a,l){return Ip(e,a,t,l)}).filter(function(a){return Dp(e,a)});return i.length>0?{type:"group",data:n,options:i,index:r}:void 0}var o=Ip(e,n,t,r);return Dp(e,o)?o:void 0}).filter(sj)}function Yx(e){return e.reduce(function(t,n){return n.type==="group"?t.push.apply(t,cd(n.options.map(function(r){return r.data}))):t.push(n.data),t},[])}function Lp(e,t){return e.reduce(function(n,r){return r.type==="group"?n.push.apply(n,cd(r.options.map(function(i){return{data:i.data,id:"".concat(t,"-").concat(r.index,"-").concat(i.index)}}))):n.push({data:r.data,id:"".concat(t,"-").concat(r.index)}),n},[])}function lE(e,t){return Yx(ya(e,t))}function Dp(e,t){var n=e.inputValue,r=n===void 0?"":n,i=t.data,o=t.isSelected,a=t.label,l=t.value;return(!qx(e)||!o)&&Jx(e,{label:a,value:l,data:i},r)}function uE(e,t){var n=e.focusedValue,r=e.selectValue,i=r.indexOf(n);if(i>-1){var o=t.indexOf(n);if(o>-1)return n;if(i<t.length)return t[i]}return null}function cE(e,t){var n=e.focusedOption;return n&&t.indexOf(n)>-1?n:t[0]}var Rl=function(t,n){var r,i=(r=t.find(function(o){return o.data===n}))===null||r===void 0?void 0:r.id;return i||null},Xx=function(t,n){return t.getOptionLabel(n)},es=function(t,n){return t.getOptionValue(n)};function Qx(e,t,n){return typeof e.isOptionDisabled=="function"?e.isOptionDisabled(t,n):!1}function Kx(e,t,n){if(n.indexOf(t)>-1)return!0;if(typeof e.isOptionSelected=="function")return e.isOptionSelected(t,n);var r=es(e,t);return n.some(function(i){return es(e,i)===r})}function Jx(e,t,n){return e.filterOption?e.filterOption(t,n):!0}var qx=function(t){var n=t.hideSelectedOptions,r=t.isMulti;return n===void 0?r:n},dE=1,Gx=function(e){_k(n,e);var t=Ik(n);function n(r){var i;if(Pk(this,n),i=t.call(this,r),i.state={ariaSelection:null,focusedOption:null,focusedOptionId:null,focusableOptionsWithIds:[],focusedValue:null,inputIsHidden:!1,isFocused:!1,selectValue:[],clearFocusValueOnUpdate:!1,prevWasFocused:!1,inputIsHiddenAfterUpdate:void 0,prevProps:void 0,instancePrefix:""},i.blockOptionHover=!1,i.isComposing=!1,i.commonProps=void 0,i.initialTouchX=0,i.initialTouchY=0,i.openAfterFocus=!1,i.scrollToFocusedOptionOnUpdate=!1,i.userIsDragging=void 0,i.isAppleDevice=JO(),i.controlRef=null,i.getControlRef=function(s){i.controlRef=s},i.focusedOptionRef=null,i.getFocusedOptionRef=function(s){i.focusedOptionRef=s},i.menuListRef=null,i.getMenuListRef=function(s){i.menuListRef=s},i.inputRef=null,i.getInputRef=function(s){i.inputRef=s},i.focus=i.focusInput,i.blur=i.blurInput,i.onChange=function(s,u){var p=i.props,h=p.onChange,x=p.name;u.name=x,i.ariaOnChange(s,u),h(s,u)},i.setValue=function(s,u,p){var h=i.props,x=h.closeMenuOnSelect,y=h.isMulti,m=h.inputValue;i.onInputChange("",{action:"set-value",prevInputValue:m}),x&&(i.setState({inputIsHiddenAfterUpdate:!y}),i.onMenuClose()),i.setState({clearFocusValueOnUpdate:!0}),i.onChange(s,{action:u,option:p})},i.selectOption=function(s){var u=i.props,p=u.blurInputOnSelect,h=u.isMulti,x=u.name,y=i.state.selectValue,m=h&&i.isOptionSelected(s,y),v=i.isOptionDisabled(s,y);if(m){var b=i.getOptionValue(s);i.setValue(y.filter(function(d){return i.getOptionValue(d)!==b}),"deselect-option",s)}else if(!v)h?i.setValue([].concat(cd(y),[s]),"select-option",s):i.setValue(s,"select-option");else{i.ariaOnChange(s,{action:"select-option",option:s,name:x});return}p&&i.blurInput()},i.removeValue=function(s){var u=i.props.isMulti,p=i.state.selectValue,h=i.getOptionValue(s),x=p.filter(function(m){return i.getOptionValue(m)!==h}),y=qo(u,x,x[0]||null);i.onChange(y,{action:"remove-value",removedValue:s}),i.focusInput()},i.clearValue=function(){var s=i.state.selectValue;i.onChange(qo(i.props.isMulti,[],null),{action:"clear",removedValues:s})},i.popValue=function(){var s=i.props.isMulti,u=i.state.selectValue,p=u[u.length-1],h=u.slice(0,u.length-1),x=qo(s,h,h[0]||null);i.onChange(x,{action:"pop-value",removedValue:p})},i.getFocusedOptionId=function(s){return Rl(i.state.focusableOptionsWithIds,s)},i.getFocusableOptionsWithIds=function(){return Lp(ya(i.props,i.state.selectValue),i.getElementId("option"))},i.getValue=function(){return i.state.selectValue},i.cx=function(){for(var s=arguments.length,u=new Array(s),p=0;p<s;p++)u[p]=arguments[p];return Zk.apply(void 0,[i.props.classNamePrefix].concat(u))},i.getOptionLabel=function(s){return Xx(i.props,s)},i.getOptionValue=function(s){return es(i.props,s)},i.getStyles=function(s,u){var p=i.props.unstyled,h=tE[s](u,p);h.boxSizing="border-box";var x=i.props.styles[s];return x?x(h,u):h},i.getClassNames=function(s,u){var p,h;return(p=(h=i.props.classNames)[s])===null||p===void 0?void 0:p.call(h,u)},i.getElementId=function(s){return"".concat(i.state.instancePrefix,"-").concat(s)},i.getComponents=function(){return kO(i.props)},i.buildCategorizedOptions=function(){return ya(i.props,i.state.selectValue)},i.getCategorizedOptions=function(){return i.props.menuIsOpen?i.buildCategorizedOptions():[]},i.buildFocusableOptions=function(){return Yx(i.buildCategorizedOptions())},i.getFocusableOptions=function(){return i.props.menuIsOpen?i.buildFocusableOptions():[]},i.ariaOnChange=function(s,u){i.setState({ariaSelection:G({value:s},u)})},i.onMenuMouseDown=function(s){s.button===0&&(s.stopPropagation(),s.preventDefault(),i.focusInput())},i.onMenuMouseMove=function(s){i.blockOptionHover=!1},i.onControlMouseDown=function(s){if(!s.defaultPrevented){var u=i.props.openMenuOnClick;i.state.isFocused?i.props.menuIsOpen?s.target.tagName!=="INPUT"&&s.target.tagName!=="TEXTAREA"&&i.onMenuClose():u&&i.openMenu("first"):(u&&(i.openAfterFocus=!0),i.focusInput()),s.target.tagName!=="INPUT"&&s.target.tagName!=="TEXTAREA"&&s.preventDefault()}},i.onDropdownIndicatorMouseDown=function(s){if(!(s&&s.type==="mousedown"&&s.button!==0)&&!i.props.isDisabled){var u=i.props,p=u.isMulti,h=u.menuIsOpen;i.focusInput(),h?(i.setState({inputIsHiddenAfterUpdate:!p}),i.onMenuClose()):i.openMenu("first"),s.preventDefault()}},i.onClearIndicatorMouseDown=function(s){s&&s.type==="mousedown"&&s.button!==0||(i.clearValue(),s.preventDefault(),i.openAfterFocus=!1,s.type==="touchend"?i.focusInput():setTimeout(function(){return i.focusInput()}))},i.onScroll=function(s){typeof i.props.closeMenuOnScroll=="boolean"?s.target instanceof HTMLElement&&Us(s.target)&&i.props.onMenuClose():typeof i.props.closeMenuOnScroll=="function"&&i.props.closeMenuOnScroll(s)&&i.props.onMenuClose()},i.onCompositionStart=function(){i.isComposing=!0},i.onCompositionEnd=function(){i.isComposing=!1},i.onTouchStart=function(s){var u=s.touches,p=u&&u.item(0);p&&(i.initialTouchX=p.clientX,i.initialTouchY=p.clientY,i.userIsDragging=!1)},i.onTouchMove=function(s){var u=s.touches,p=u&&u.item(0);if(p){var h=Math.abs(p.clientX-i.initialTouchX),x=Math.abs(p.clientY-i.initialTouchY),y=5;i.userIsDragging=h>y||x>y}},i.onTouchEnd=function(s){i.userIsDragging||(i.controlRef&&!i.controlRef.contains(s.target)&&i.menuListRef&&!i.menuListRef.contains(s.target)&&i.blurInput(),i.initialTouchX=0,i.initialTouchY=0)},i.onControlTouchEnd=function(s){i.userIsDragging||i.onControlMouseDown(s)},i.onClearIndicatorTouchEnd=function(s){i.userIsDragging||i.onClearIndicatorMouseDown(s)},i.onDropdownIndicatorTouchEnd=function(s){i.userIsDragging||i.onDropdownIndicatorMouseDown(s)},i.handleInputChange=function(s){var u=i.props.inputValue,p=s.currentTarget.value;i.setState({inputIsHiddenAfterUpdate:!1}),i.onInputChange(p,{action:"input-change",prevInputValue:u}),i.props.menuIsOpen||i.onMenuOpen()},i.onInputFocus=function(s){i.props.onFocus&&i.props.onFocus(s),i.setState({inputIsHiddenAfterUpdate:!1,isFocused:!0}),(i.openAfterFocus||i.props.openMenuOnFocus)&&i.openMenu("first"),i.openAfterFocus=!1},i.onInputBlur=function(s){var u=i.props.inputValue;if(i.menuListRef&&i.menuListRef.contains(document.activeElement)){i.inputRef.focus();return}i.props.onBlur&&i.props.onBlur(s),i.onInputChange("",{action:"input-blur",prevInputValue:u}),i.onMenuClose(),i.setState({focusedValue:null,isFocused:!1})},i.onOptionHover=function(s){if(!(i.blockOptionHover||i.state.focusedOption===s)){var u=i.getFocusableOptions(),p=u.indexOf(s);i.setState({focusedOption:s,focusedOptionId:p>-1?i.getFocusedOptionId(s):null})}},i.shouldHideSelectedOptions=function(){return qx(i.props)},i.onValueInputFocus=function(s){s.preventDefault(),s.stopPropagation(),i.focus()},i.onKeyDown=function(s){var u=i.props,p=u.isMulti,h=u.backspaceRemovesValue,x=u.escapeClearsValue,y=u.inputValue,m=u.isClearable,v=u.isDisabled,b=u.menuIsOpen,d=u.onKeyDown,f=u.tabSelectsValue,g=u.openMenuOnFocus,w=i.state,S=w.focusedOption,T=w.focusedValue,C=w.selectValue;if(!v&&!(typeof d=="function"&&(d(s),s.defaultPrevented))){switch(i.blockOptionHover=!0,s.key){case"ArrowLeft":if(!p||y)return;i.focusValue("previous");break;case"ArrowRight":if(!p||y)return;i.focusValue("next");break;case"Delete":case"Backspace":if(y)return;if(T)i.removeValue(T);else{if(!h)return;p?i.popValue():m&&i.clearValue()}break;case"Tab":if(i.isComposing||s.shiftKey||!b||!f||!S||g&&i.isOptionSelected(S,C))return;i.selectOption(S);break;case"Enter":if(s.keyCode===229)break;if(b){if(!S||i.isComposing)return;i.selectOption(S);break}return;case"Escape":b?(i.setState({inputIsHiddenAfterUpdate:!1}),i.onInputChange("",{action:"menu-close",prevInputValue:y}),i.onMenuClose()):m&&x&&i.clearValue();break;case" ":if(y)return;if(!b){i.openMenu("first");break}if(!S)return;i.selectOption(S);break;case"ArrowUp":b?i.focusOption("up"):i.openMenu("last");break;case"ArrowDown":b?i.focusOption("down"):i.openMenu("first");break;case"PageUp":if(!b)return;i.focusOption("pageup");break;case"PageDown":if(!b)return;i.focusOption("pagedown");break;case"Home":if(!b)return;i.focusOption("first");break;case"End":if(!b)return;i.focusOption("last");break;default:return}s.preventDefault()}},i.state.instancePrefix="react-select-"+(i.props.instanceId||++dE),i.state.selectValue=wp(r.value),r.menuIsOpen&&i.state.selectValue.length){var o=i.getFocusableOptionsWithIds(),a=i.buildFocusableOptions(),l=a.indexOf(i.state.selectValue[0]);i.state.focusableOptionsWithIds=o,i.state.focusedOption=a[l],i.state.focusedOptionId=Rl(o,a[l])}return i}return Tk(n,[{key:"componentDidMount",value:function(){this.startListeningComposition(),this.startListeningToTouch(),this.props.closeMenuOnScroll&&document&&document.addEventListener&&document.addEventListener("scroll",this.onScroll,!0),this.props.autoFocus&&this.focusInput(),this.props.menuIsOpen&&this.state.focusedOption&&this.menuListRef&&this.focusedOptionRef&&bp(this.menuListRef,this.focusedOptionRef)}},{key:"componentDidUpdate",value:function(i){var o=this.props,a=o.isDisabled,l=o.menuIsOpen,s=this.state.isFocused;(s&&!a&&i.isDisabled||s&&l&&!i.menuIsOpen)&&this.focusInput(),s&&a&&!i.isDisabled?this.setState({isFocused:!1},this.onMenuClose):!s&&!a&&i.isDisabled&&this.inputRef===document.activeElement&&this.setState({isFocused:!0}),this.menuListRef&&this.focusedOptionRef&&this.scrollToFocusedOptionOnUpdate&&(bp(this.menuListRef,this.focusedOptionRef),this.scrollToFocusedOptionOnUpdate=!1)}},{key:"componentWillUnmount",value:function(){this.stopListeningComposition(),this.stopListeningToTouch(),document.removeEventListener("scroll",this.onScroll,!0)}},{key:"onMenuOpen",value:function(){this.props.onMenuOpen()}},{key:"onMenuClose",value:function(){this.onInputChange("",{action:"menu-close",prevInputValue:this.props.inputValue}),this.props.onMenuClose()}},{key:"onInputChange",value:function(i,o){this.props.onInputChange(i,o)}},{key:"focusInput",value:function(){this.inputRef&&this.inputRef.focus()}},{key:"blurInput",value:function(){this.inputRef&&this.inputRef.blur()}},{key:"openMenu",value:function(i){var o=this,a=this.state,l=a.selectValue,s=a.isFocused,u=this.buildFocusableOptions(),p=i==="first"?0:u.length-1;if(!this.props.isMulti){var h=u.indexOf(l[0]);h>-1&&(p=h)}this.scrollToFocusedOptionOnUpdate=!(s&&this.menuListRef),this.setState({inputIsHiddenAfterUpdate:!1,focusedValue:null,focusedOption:u[p],focusedOptionId:this.getFocusedOptionId(u[p])},function(){return o.onMenuOpen()})}},{key:"focusValue",value:function(i){var o=this.state,a=o.selectValue,l=o.focusedValue;if(this.props.isMulti){this.setState({focusedOption:null});var s=a.indexOf(l);l||(s=-1);var u=a.length-1,p=-1;if(a.length){switch(i){case"previous":s===0?p=0:s===-1?p=u:p=s-1;break;case"next":s>-1&&s<u&&(p=s+1);break}this.setState({inputIsHidden:p!==-1,focusedValue:a[p]})}}}},{key:"focusOption",value:function(){var i=arguments.length>0&&arguments[0]!==void 0?arguments[0]:"first",o=this.props.pageSize,a=this.state.focusedOption,l=this.getFocusableOptions();if(l.length){var s=0,u=l.indexOf(a);a||(u=-1),i==="up"?s=u>0?u-1:l.length-1:i==="down"?s=(u+1)%l.length:i==="pageup"?(s=u-o,s<0&&(s=0)):i==="pagedown"?(s=u+o,s>l.length-1&&(s=l.length-1)):i==="last"&&(s=l.length-1),this.scrollToFocusedOptionOnUpdate=!0,this.setState({focusedOption:l[s],focusedValue:null,focusedOptionId:this.getFocusedOptionId(l[s])})}}},{key:"getTheme",value:function(){return this.props.theme?typeof this.props.theme=="function"?this.props.theme(Al):G(G({},Al),this.props.theme):Al}},{key:"getCommonProps",value:function(){var i=this.clearValue,o=this.cx,a=this.getStyles,l=this.getClassNames,s=this.getValue,u=this.selectOption,p=this.setValue,h=this.props,x=h.isMulti,y=h.isRtl,m=h.options,v=this.hasValue();return{clearValue:i,cx:o,getStyles:a,getClassNames:l,getValue:s,hasValue:v,isMulti:x,isRtl:y,options:m,selectOption:u,selectProps:h,setValue:p,theme:this.getTheme()}}},{key:"hasValue",value:function(){var i=this.state.selectValue;return i.length>0}},{key:"hasOptions",value:function(){return!!this.getFocusableOptions().length}},{key:"isClearable",value:function(){var i=this.props,o=i.isClearable,a=i.isMulti;return o===void 0?a:o}},{key:"isOptionDisabled",value:function(i,o){return Qx(this.props,i,o)}},{key:"isOptionSelected",value:function(i,o){return Kx(this.props,i,o)}},{key:"filterOption",value:function(i,o){return Jx(this.props,i,o)}},{key:"formatOptionLabel",value:function(i,o){if(typeof this.props.formatOptionLabel=="function"){var a=this.props.inputValue,l=this.state.selectValue;return this.props.formatOptionLabel(i,{context:o,inputValue:a,selectValue:l})}else return this.getOptionLabel(i)}},{key:"formatGroupLabel",value:function(i){return this.props.formatGroupLabel(i)}},{key:"startListeningComposition",value:function(){document&&document.addEventListener&&(document.addEventListener("compositionstart",this.onCompositionStart,!1),document.addEventListener("compositionend",this.onCompositionEnd,!1))}},{key:"stopListeningComposition",value:function(){document&&document.removeEventListener&&(document.removeEventListener("compositionstart",this.onCompositionStart),document.removeEventListener("compositionend",this.onCompositionEnd))}},{key:"startListeningToTouch",value:function(){document&&document.addEventListener&&(document.addEventListener("touchstart",this.onTouchStart,!1),document.addEventListener("touchmove",this.onTouchMove,!1),document.addEventListener("touchend",this.onTouchEnd,!1))}},{key:"stopListeningToTouch",value:function(){document&&document.removeEventListener&&(document.removeEventListener("touchstart",this.onTouchStart),document.removeEventListener("touchmove",this.onTouchMove),document.removeEventListener("touchend",this.onTouchEnd))}},{key:"renderInput",value:function(){var i=this.props,o=i.isDisabled,a=i.isSearchable,l=i.inputId,s=i.inputValue,u=i.tabIndex,p=i.form,h=i.menuIsOpen,x=i.required,y=this.getComponents(),m=y.Input,v=this.state,b=v.inputIsHidden,d=v.ariaSelection,f=this.commonProps,g=l||this.getElementId("input"),w=G(G(G({"aria-autocomplete":"list","aria-expanded":h,"aria-haspopup":!0,"aria-errormessage":this.props["aria-errormessage"],"aria-invalid":this.props["aria-invalid"],"aria-label":this.props["aria-label"],"aria-labelledby":this.props["aria-labelledby"],"aria-required":x,role:"combobox","aria-activedescendant":this.isAppleDevice?void 0:this.state.focusedOptionId||""},h&&{"aria-controls":this.getElementId("listbox")}),!a&&{"aria-readonly":!0}),this.hasValue()?(d==null?void 0:d.action)==="initial-input-focus"&&{"aria-describedby":this.getElementId("live-region")}:{"aria-describedby":this.getElementId("placeholder")});return a?L.createElement(m,Z({},f,{autoCapitalize:"none",autoComplete:"off",autoCorrect:"off",id:g,innerRef:this.getInputRef,isDisabled:o,isHidden:b,onBlur:this.onInputBlur,onChange:this.handleInputChange,onFocus:this.onInputFocus,spellCheck:"false",tabIndex:u,form:p,type:"text",value:s},w)):L.createElement(zO,Z({id:g,innerRef:this.getInputRef,onBlur:this.onInputBlur,onChange:Ga,onFocus:this.onInputFocus,disabled:o,tabIndex:u,inputMode:"none",form:p,value:""},w))}},{key:"renderPlaceholderOrValue",value:function(){var i=this,o=this.getComponents(),a=o.MultiValue,l=o.MultiValueContainer,s=o.MultiValueLabel,u=o.MultiValueRemove,p=o.SingleValue,h=o.Placeholder,x=this.commonProps,y=this.props,m=y.controlShouldRenderValue,v=y.isDisabled,b=y.isMulti,d=y.inputValue,f=y.placeholder,g=this.state,w=g.selectValue,S=g.focusedValue,T=g.isFocused;if(!this.hasValue()||!m)return d?null:L.createElement(h,Z({},x,{key:"placeholder",isDisabled:v,isFocused:T,innerProps:{id:this.getElementId("placeholder")}}),f);if(b)return w.map(function(j,O){var _=j===S,M="".concat(i.getOptionLabel(j),"-").concat(i.getOptionValue(j));return L.createElement(a,Z({},x,{components:{Container:l,Label:s,Remove:u},isFocused:_,isDisabled:v,key:M,index:O,removeProps:{onClick:function(){return i.removeValue(j)},onTouchEnd:function(){return i.removeValue(j)},onMouseDown:function(I){I.preventDefault()}},data:j}),i.formatOptionLabel(j,"value"))});if(d)return null;var C=w[0];return L.createElement(p,Z({},x,{data:C,isDisabled:v}),this.formatOptionLabel(C,"value"))}},{key:"renderClearIndicator",value:function(){var i=this.getComponents(),o=i.ClearIndicator,a=this.commonProps,l=this.props,s=l.isDisabled,u=l.isLoading,p=this.state.isFocused;if(!this.isClearable()||!o||s||!this.hasValue()||u)return null;var h={onMouseDown:this.onClearIndicatorMouseDown,onTouchEnd:this.onClearIndicatorTouchEnd,"aria-hidden":"true"};return L.createElement(o,Z({},a,{innerProps:h,isFocused:p}))}},{key:"renderLoadingIndicator",value:function(){var i=this.getComponents(),o=i.LoadingIndicator,a=this.commonProps,l=this.props,s=l.isDisabled,u=l.isLoading,p=this.state.isFocused;if(!o||!u)return null;var h={"aria-hidden":"true"};return L.createElement(o,Z({},a,{innerProps:h,isDisabled:s,isFocused:p}))}},{key:"renderIndicatorSeparator",value:function(){var i=this.getComponents(),o=i.DropdownIndicator,a=i.IndicatorSeparator;if(!o||!a)return null;var l=this.commonProps,s=this.props.isDisabled,u=this.state.isFocused;return L.createElement(a,Z({},l,{isDisabled:s,isFocused:u}))}},{key:"renderDropdownIndicator",value:function(){var i=this.getComponents(),o=i.DropdownIndicator;if(!o)return null;var a=this.commonProps,l=this.props.isDisabled,s=this.state.isFocused,u={onMouseDown:this.onDropdownIndicatorMouseDown,onTouchEnd:this.onDropdownIndicatorTouchEnd,"aria-hidden":"true"};return L.createElement(o,Z({},a,{innerProps:u,isDisabled:l,isFocused:s}))}},{key:"renderMenu",value:function(){var i=this,o=this.getComponents(),a=o.Group,l=o.GroupHeading,s=o.Menu,u=o.MenuList,p=o.MenuPortal,h=o.LoadingMessage,x=o.NoOptionsMessage,y=o.Option,m=this.commonProps,v=this.state.focusedOption,b=this.props,d=b.captureMenuScroll,f=b.inputValue,g=b.isLoading,w=b.loadingMessage,S=b.minMenuHeight,T=b.maxMenuHeight,C=b.menuIsOpen,j=b.menuPlacement,O=b.menuPosition,_=b.menuPortalTarget,M=b.menuShouldBlockScroll,R=b.menuShouldScrollIntoView,I=b.noOptionsMessage,W=b.onMenuScrollToTop,$=b.onMenuScrollToBottom;if(!C)return null;var ee=function(Ce,Se){var $e=Ce.type,pe=Ce.data,_e=Ce.isDisabled,Je=Ce.isSelected,_t=Ce.label,F=Ce.value,Y=v===pe,ae=_e?void 0:function(){return i.onOptionHover(pe)},oe=_e?void 0:function(){return i.selectOption(pe)},ie="".concat(i.getElementId("option"),"-").concat(Se),le={id:ie,onClick:oe,onMouseMove:ae,onMouseOver:ae,tabIndex:-1,role:"option","aria-selected":i.isAppleDevice?void 0:Je};return L.createElement(y,Z({},m,{innerProps:le,data:pe,isDisabled:_e,isSelected:Je,key:ie,label:_t,type:$e,value:F,isFocused:Y,innerRef:Y?i.getFocusedOptionRef:void 0}),i.formatOptionLabel(Ce.data,"menu"))},ge;if(this.hasOptions())ge=this.getCategorizedOptions().map(function(re){if(re.type==="group"){var Ce=re.data,Se=re.options,$e=re.index,pe="".concat(i.getElementId("group"),"-").concat($e),_e="".concat(pe,"-heading");return L.createElement(a,Z({},m,{key:pe,data:Ce,options:Se,Heading:l,headingProps:{id:_e,data:re.data},label:i.formatGroupLabel(re.data)}),re.options.map(function(Je){return ee(Je,"".concat($e,"-").concat(Je.index))}))}else if(re.type==="option")return ee(re,"".concat(re.index))});else if(g){var N=w({inputValue:f});if(N===null)return null;ge=L.createElement(h,m,N)}else{var Q=I({inputValue:f});if(Q===null)return null;ge=L.createElement(x,m,Q)}var K={minMenuHeight:S,maxMenuHeight:T,menuPlacement:j,menuPosition:O,menuShouldScrollIntoView:R},de=L.createElement(mj,Z({},m,K),function(re){var Ce=re.ref,Se=re.placerProps,$e=Se.placement,pe=Se.maxHeight;return L.createElement(s,Z({},m,K,{innerRef:Ce,innerProps:{onMouseDown:i.onMenuMouseDown,onMouseMove:i.onMenuMouseMove},isLoading:g,placement:$e}),L.createElement(BO,{captureEnabled:d,onTopArrive:W,onBottomArrive:$,lockEnabled:M},function(_e){return L.createElement(u,Z({},m,{innerRef:function(_t){i.getMenuListRef(_t),_e(_t)},innerProps:{role:"listbox","aria-multiselectable":m.isMulti,id:i.getElementId("listbox")},isLoading:g,maxHeight:pe,focusedOption:v}),ge)}))});return _||O==="fixed"?L.createElement(p,Z({},m,{appendTo:_,controlElement:this.controlRef,menuPlacement:j,menuPosition:O}),de):de}},{key:"renderFormField",value:function(){var i=this,o=this.props,a=o.delimiter,l=o.isDisabled,s=o.isMulti,u=o.name,p=o.required,h=this.state.selectValue;if(p&&!this.hasValue()&&!l)return L.createElement(YO,{name:u,onFocus:this.onValueInputFocus});if(!(!u||l))if(s)if(a){var x=h.map(function(v){return i.getOptionValue(v)}).join(a);return L.createElement("input",{name:u,type:"hidden",value:x})}else{var y=h.length>0?h.map(function(v,b){return L.createElement("input",{key:"i-".concat(b),name:u,type:"hidden",value:i.getOptionValue(v)})}):L.createElement("input",{name:u,type:"hidden",value:""});return L.createElement("div",null,y)}else{var m=h[0]?this.getOptionValue(h[0]):"";return L.createElement("input",{name:u,type:"hidden",value:m})}}},{key:"renderLiveRegion",value:function(){var i=this.commonProps,o=this.state,a=o.ariaSelection,l=o.focusedOption,s=o.focusedValue,u=o.isFocused,p=o.selectValue,h=this.getFocusableOptions();return L.createElement(MO,Z({},i,{id:this.getElementId("live-region"),ariaSelection:a,focusedOption:l,focusedValue:s,isFocused:u,selectValue:p,focusableOptions:h,isAppleDevice:this.isAppleDevice}))}},{key:"render",value:function(){var i=this.getComponents(),o=i.Control,a=i.IndicatorsContainer,l=i.SelectContainer,s=i.ValueContainer,u=this.props,p=u.className,h=u.id,x=u.isDisabled,y=u.menuIsOpen,m=this.state.isFocused,v=this.commonProps=this.getCommonProps();return L.createElement(l,Z({},v,{className:p,innerProps:{id:h,onKeyDown:this.onKeyDown},isDisabled:x,isFocused:m}),this.renderLiveRegion(),L.createElement(o,Z({},v,{innerRef:this.getControlRef,innerProps:{onMouseDown:this.onControlMouseDown,onTouchEnd:this.onControlTouchEnd},isDisabled:x,isFocused:m,menuIsOpen:y}),L.createElement(s,Z({},v,{isDisabled:x}),this.renderPlaceholderOrValue(),this.renderInput()),L.createElement(a,Z({},v,{isDisabled:x}),this.renderClearIndicator(),this.renderLoadingIndicator(),this.renderIndicatorSeparator(),this.renderDropdownIndicator())),this.renderMenu(),this.renderFormField())}}],[{key:"getDerivedStateFromProps",value:function(i,o){var a=o.prevProps,l=o.clearFocusValueOnUpdate,s=o.inputIsHiddenAfterUpdate,u=o.ariaSelection,p=o.isFocused,h=o.prevWasFocused,x=o.instancePrefix,y=i.options,m=i.value,v=i.menuIsOpen,b=i.inputValue,d=i.isMulti,f=wp(m),g={};if(a&&(m!==a.value||y!==a.options||v!==a.menuIsOpen||b!==a.inputValue)){var w=v?lE(i,f):[],S=v?Lp(ya(i,f),"".concat(x,"-option")):[],T=l?uE(o,f):null,C=cE(o,w),j=Rl(S,C);g={selectValue:f,focusedOption:C,focusedOptionId:j,focusableOptionsWithIds:S,focusedValue:T,clearFocusValueOnUpdate:!1}}var O=s!=null&&i!==a?{inputIsHidden:s,inputIsHiddenAfterUpdate:void 0}:{},_=u,M=p&&h;return p&&!M&&(_={value:qo(d,f,f[0]||null),options:f,action:"initial-input-focus"},M=!h),(u==null?void 0:u.action)==="initial-input-focus"&&(_=null),G(G(G({},g),O),{},{prevProps:i,ariaSelection:_,prevWasFocused:M})}}]),n}(L.Component);Gx.defaultProps=sE;var fE=L.forwardRef(function(e,t){var n=Ck(e);return L.createElement(Gx,Z({ref:t},n))}),pE=fE,Zx={exports:{}};(function(e,t){(function(n,r){e.exports=r()})(rh,function(){return function(n){function r(o){if(i[o])return i[o].exports;var a=i[o]={i:o,l:!1,exports:{}};return n[o].call(a.exports,a,a.exports,r),a.l=!0,a.exports}var i={};return r.m=n,r.c=i,r.d=function(o,a,l){r.o(o,a)||Object.defineProperty(o,a,{configurable:!1,enumerable:!0,get:l})},r.n=function(o){var a=o&&o.__esModule?function(){return o.default}:function(){return o};return r.d(a,"a",a),a},r.o=function(o,a){return Object.prototype.hasOwnProperty.call(o,a)},r.p="",r(r.s=8)}([function(n,r,i){Object.defineProperty(r,"__esModule",{value:!0});var o="swal-button";r.CLASS_NAMES={MODAL:"swal-modal",OVERLAY:"swal-overlay",SHOW_MODAL:"swal-overlay--show-modal",MODAL_TITLE:"swal-title",MODAL_TEXT:"swal-text",ICON:"swal-icon",ICON_CUSTOM:"swal-icon--custom",CONTENT:"swal-content",FOOTER:"swal-footer",BUTTON_CONTAINER:"swal-button-container",BUTTON:o,CONFIRM_BUTTON:o+"--confirm",CANCEL_BUTTON:o+"--cancel",DANGER_BUTTON:o+"--danger",BUTTON_LOADING:o+"--loading",BUTTON_LOADER:o+"__loader"},r.default=r.CLASS_NAMES},function(n,r,i){Object.defineProperty(r,"__esModule",{value:!0}),r.getNode=function(o){var a="."+o;return document.querySelector(a)},r.stringToNode=function(o){var a=document.createElement("div");return a.innerHTML=o.trim(),a.firstChild},r.insertAfter=function(o,a){var l=a.nextSibling;a.parentNode.insertBefore(o,l)},r.removeNode=function(o){o.parentElement.removeChild(o)},r.throwErr=function(o){throw o=o.replace(/ +(?= )/g,""),"SweetAlert: "+(o=o.trim())},r.isPlainObject=function(o){if(Object.prototype.toString.call(o)!=="[object Object]")return!1;var a=Object.getPrototypeOf(o);return a===null||a===Object.prototype},r.ordinalSuffixOf=function(o){var a=o%10,l=o%100;return a===1&&l!==11?o+"st":a===2&&l!==12?o+"nd":a===3&&l!==13?o+"rd":o+"th"}},function(n,r,i){function o(x){for(var y in x)r.hasOwnProperty(y)||(r[y]=x[y])}Object.defineProperty(r,"__esModule",{value:!0}),o(i(25));var a=i(26);r.overlayMarkup=a.default,o(i(27)),o(i(28)),o(i(29));var l=i(0),s=l.default.MODAL_TITLE,u=l.default.MODAL_TEXT,p=l.default.ICON,h=l.default.FOOTER;r.iconMarkup=`
  <div class="`+p+'"></div>',r.titleMarkup=`
  <div class="`+s+`"></div>
`,r.textMarkup=`
  <div class="`+u+'"></div>',r.footerMarkup=`
  <div class="`+h+`"></div>
`},function(n,r,i){Object.defineProperty(r,"__esModule",{value:!0});var o=i(1);r.CONFIRM_KEY="confirm",r.CANCEL_KEY="cancel";var a={visible:!0,text:null,value:null,className:"",closeModal:!0},l=Object.assign({},a,{visible:!1,text:"Cancel",value:null}),s=Object.assign({},a,{text:"OK",value:!0});r.defaultButtonList={cancel:l,confirm:s};var u=function(y){switch(y){case r.CONFIRM_KEY:return s;case r.CANCEL_KEY:return l;default:var m=y.charAt(0).toUpperCase()+y.slice(1);return Object.assign({},a,{text:m,value:y})}},p=function(y,m){var v=u(y);return m===!0?Object.assign({},v,{visible:!0}):typeof m=="string"?Object.assign({},v,{visible:!0,text:m}):o.isPlainObject(m)?Object.assign({visible:!0},v,m):Object.assign({},v,{visible:!1})},h=function(y){for(var m={},v=0,b=Object.keys(y);v<b.length;v++){var d=b[v],f=y[d],g=p(d,f);m[d]=g}return m.cancel||(m.cancel=l),m},x=function(y){var m={};switch(y.length){case 1:m[r.CANCEL_KEY]=Object.assign({},l,{visible:!1});break;case 2:m[r.CANCEL_KEY]=p(r.CANCEL_KEY,y[0]),m[r.CONFIRM_KEY]=p(r.CONFIRM_KEY,y[1]);break;default:o.throwErr("Invalid number of 'buttons' in array ("+y.length+`).
      If you want more than 2 buttons, you need to use an object!`)}return m};r.getButtonListOpts=function(y){var m=r.defaultButtonList;return typeof y=="string"?m[r.CONFIRM_KEY]=p(r.CONFIRM_KEY,y):Array.isArray(y)?m=x(y):o.isPlainObject(y)?m=h(y):y===!0?m=x([!0,!0]):y===!1?m=x([!1,!1]):y===void 0&&(m=r.defaultButtonList),m}},function(n,r,i){Object.defineProperty(r,"__esModule",{value:!0});var o=i(1),a=i(2),l=i(0),s=l.default.MODAL,u=l.default.OVERLAY,p=i(30),h=i(31),x=i(32),y=i(33);r.injectElIntoModal=function(d){var f=o.getNode(s),g=o.stringToNode(d);return f.appendChild(g),g};var m=function(d){d.className=s,d.textContent=""},v=function(d,f){m(d);var g=f.className;g&&d.classList.add(g)};r.initModalContent=function(d){var f=o.getNode(s);v(f,d),p.default(d.icon),h.initTitle(d.title),h.initText(d.text),y.default(d.content),x.default(d.buttons,d.dangerMode)};var b=function(){var d=o.getNode(u),f=o.stringToNode(a.modalMarkup);d.appendChild(f)};r.default=b},function(n,r,i){Object.defineProperty(r,"__esModule",{value:!0});var o=i(3),a={isOpen:!1,promise:null,actions:{},timer:null},l=Object.assign({},a);r.resetState=function(){l=Object.assign({},a)},r.setActionValue=function(u){if(typeof u=="string")return s(o.CONFIRM_KEY,u);for(var p in u)s(p,u[p])};var s=function(u,p){l.actions[u]||(l.actions[u]={}),Object.assign(l.actions[u],{value:p})};r.setActionOptionsFor=function(u,p){var h=(p===void 0?{}:p).closeModal,x=h===void 0||h;Object.assign(l.actions[u],{closeModal:x})},r.default=l},function(n,r,i){Object.defineProperty(r,"__esModule",{value:!0});var o=i(1),a=i(3),l=i(0),s=l.default.OVERLAY,u=l.default.SHOW_MODAL,p=l.default.BUTTON,h=l.default.BUTTON_LOADING,x=i(5);r.openModal=function(){o.getNode(s).classList.add(u),x.default.isOpen=!0};var y=function(){o.getNode(s).classList.remove(u),x.default.isOpen=!1};r.onAction=function(m){m===void 0&&(m=a.CANCEL_KEY);var v=x.default.actions[m],b=v.value;if(v.closeModal===!1){var d=p+"--"+m;o.getNode(d).classList.add(h)}else y();x.default.promise.resolve(b)},r.getState=function(){var m=Object.assign({},x.default);return delete m.promise,delete m.timer,m},r.stopLoading=function(){for(var m=document.querySelectorAll("."+p),v=0;v<m.length;v++)m[v].classList.remove(h)}},function(n,r){var i;i=function(){return this}();try{i=i||Function("return this")()||(0,eval)("this")}catch{typeof window=="object"&&(i=window)}n.exports=i},function(n,r,i){(function(o){n.exports=o.sweetAlert=i(9)}).call(r,i(7))},function(n,r,i){(function(o){n.exports=o.swal=i(10)}).call(r,i(7))},function(n,r,i){typeof window<"u"&&i(11),i(16);var o=i(23).default;n.exports=o},function(n,r,i){var o=i(12);typeof o=="string"&&(o=[[n.i,o,""]]);var a={insertAt:"top"};a.transform=void 0,i(14)(o,a),o.locals&&(n.exports=o.locals)},function(n,r,i){r=n.exports=i(13)(void 0),r.push([n.i,'.swal-icon--error{border-color:#f27474;-webkit-animation:animateErrorIcon .5s;animation:animateErrorIcon .5s}.swal-icon--error__x-mark{position:relative;display:block;-webkit-animation:animateXMark .5s;animation:animateXMark .5s}.swal-icon--error__line{position:absolute;height:5px;width:47px;background-color:#f27474;display:block;top:37px;border-radius:2px}.swal-icon--error__line--left{-webkit-transform:rotate(45deg);transform:rotate(45deg);left:17px}.swal-icon--error__line--right{-webkit-transform:rotate(-45deg);transform:rotate(-45deg);right:16px}@-webkit-keyframes animateErrorIcon{0%{-webkit-transform:rotateX(100deg);transform:rotateX(100deg);opacity:0}to{-webkit-transform:rotateX(0deg);transform:rotateX(0deg);opacity:1}}@keyframes animateErrorIcon{0%{-webkit-transform:rotateX(100deg);transform:rotateX(100deg);opacity:0}to{-webkit-transform:rotateX(0deg);transform:rotateX(0deg);opacity:1}}@-webkit-keyframes animateXMark{0%{-webkit-transform:scale(.4);transform:scale(.4);margin-top:26px;opacity:0}50%{-webkit-transform:scale(.4);transform:scale(.4);margin-top:26px;opacity:0}80%{-webkit-transform:scale(1.15);transform:scale(1.15);margin-top:-6px}to{-webkit-transform:scale(1);transform:scale(1);margin-top:0;opacity:1}}@keyframes animateXMark{0%{-webkit-transform:scale(.4);transform:scale(.4);margin-top:26px;opacity:0}50%{-webkit-transform:scale(.4);transform:scale(.4);margin-top:26px;opacity:0}80%{-webkit-transform:scale(1.15);transform:scale(1.15);margin-top:-6px}to{-webkit-transform:scale(1);transform:scale(1);margin-top:0;opacity:1}}.swal-icon--warning{border-color:#f8bb86;-webkit-animation:pulseWarning .75s infinite alternate;animation:pulseWarning .75s infinite alternate}.swal-icon--warning__body{width:5px;height:47px;top:10px;border-radius:2px;margin-left:-2px}.swal-icon--warning__body,.swal-icon--warning__dot{position:absolute;left:50%;background-color:#f8bb86}.swal-icon--warning__dot{width:7px;height:7px;border-radius:50%;margin-left:-4px;bottom:-11px}@-webkit-keyframes pulseWarning{0%{border-color:#f8d486}to{border-color:#f8bb86}}@keyframes pulseWarning{0%{border-color:#f8d486}to{border-color:#f8bb86}}.swal-icon--success{border-color:#a5dc86}.swal-icon--success:after,.swal-icon--success:before{content:"";border-radius:50%;position:absolute;width:60px;height:120px;background:#fff;-webkit-transform:rotate(45deg);transform:rotate(45deg)}.swal-icon--success:before{border-radius:120px 0 0 120px;top:-7px;left:-33px;-webkit-transform:rotate(-45deg);transform:rotate(-45deg);-webkit-transform-origin:60px 60px;transform-origin:60px 60px}.swal-icon--success:after{border-radius:0 120px 120px 0;top:-11px;left:30px;-webkit-transform:rotate(-45deg);transform:rotate(-45deg);-webkit-transform-origin:0 60px;transform-origin:0 60px;-webkit-animation:rotatePlaceholder 4.25s ease-in;animation:rotatePlaceholder 4.25s ease-in}.swal-icon--success__ring{width:80px;height:80px;border:4px solid hsla(98,55%,69%,.2);border-radius:50%;box-sizing:content-box;position:absolute;left:-4px;top:-4px;z-index:2}.swal-icon--success__hide-corners{width:5px;height:90px;background-color:#fff;padding:1px;position:absolute;left:28px;top:8px;z-index:1;-webkit-transform:rotate(-45deg);transform:rotate(-45deg)}.swal-icon--success__line{height:5px;background-color:#a5dc86;display:block;border-radius:2px;position:absolute;z-index:2}.swal-icon--success__line--tip{width:25px;left:14px;top:46px;-webkit-transform:rotate(45deg);transform:rotate(45deg);-webkit-animation:animateSuccessTip .75s;animation:animateSuccessTip .75s}.swal-icon--success__line--long{width:47px;right:8px;top:38px;-webkit-transform:rotate(-45deg);transform:rotate(-45deg);-webkit-animation:animateSuccessLong .75s;animation:animateSuccessLong .75s}@-webkit-keyframes rotatePlaceholder{0%{-webkit-transform:rotate(-45deg);transform:rotate(-45deg)}5%{-webkit-transform:rotate(-45deg);transform:rotate(-45deg)}12%{-webkit-transform:rotate(-405deg);transform:rotate(-405deg)}to{-webkit-transform:rotate(-405deg);transform:rotate(-405deg)}}@keyframes rotatePlaceholder{0%{-webkit-transform:rotate(-45deg);transform:rotate(-45deg)}5%{-webkit-transform:rotate(-45deg);transform:rotate(-45deg)}12%{-webkit-transform:rotate(-405deg);transform:rotate(-405deg)}to{-webkit-transform:rotate(-405deg);transform:rotate(-405deg)}}@-webkit-keyframes animateSuccessTip{0%{width:0;left:1px;top:19px}54%{width:0;left:1px;top:19px}70%{width:50px;left:-8px;top:37px}84%{width:17px;left:21px;top:48px}to{width:25px;left:14px;top:45px}}@keyframes animateSuccessTip{0%{width:0;left:1px;top:19px}54%{width:0;left:1px;top:19px}70%{width:50px;left:-8px;top:37px}84%{width:17px;left:21px;top:48px}to{width:25px;left:14px;top:45px}}@-webkit-keyframes animateSuccessLong{0%{width:0;right:46px;top:54px}65%{width:0;right:46px;top:54px}84%{width:55px;right:0;top:35px}to{width:47px;right:8px;top:38px}}@keyframes animateSuccessLong{0%{width:0;right:46px;top:54px}65%{width:0;right:46px;top:54px}84%{width:55px;right:0;top:35px}to{width:47px;right:8px;top:38px}}.swal-icon--info{border-color:#c9dae1}.swal-icon--info:before{width:5px;height:29px;bottom:17px;border-radius:2px;margin-left:-2px}.swal-icon--info:after,.swal-icon--info:before{content:"";position:absolute;left:50%;background-color:#c9dae1}.swal-icon--info:after{width:7px;height:7px;border-radius:50%;margin-left:-3px;top:19px}.swal-icon{width:80px;height:80px;border-width:4px;border-style:solid;border-radius:50%;padding:0;position:relative;box-sizing:content-box;margin:20px auto}.swal-icon:first-child{margin-top:32px}.swal-icon--custom{width:auto;height:auto;max-width:100%;border:none;border-radius:0}.swal-icon img{max-width:100%;max-height:100%}.swal-title{color:rgba(0,0,0,.65);font-weight:600;text-transform:none;position:relative;display:block;padding:13px 16px;font-size:27px;line-height:normal;text-align:center;margin-bottom:0}.swal-title:first-child{margin-top:26px}.swal-title:not(:first-child){padding-bottom:0}.swal-title:not(:last-child){margin-bottom:13px}.swal-text{font-size:16px;position:relative;float:none;line-height:normal;vertical-align:top;text-align:left;display:inline-block;margin:0;padding:0 10px;font-weight:400;color:rgba(0,0,0,.64);max-width:calc(100% - 20px);overflow-wrap:break-word;box-sizing:border-box}.swal-text:first-child{margin-top:45px}.swal-text:last-child{margin-bottom:45px}.swal-footer{text-align:right;padding-top:13px;margin-top:13px;padding:13px 16px;border-radius:inherit;border-top-left-radius:0;border-top-right-radius:0}.swal-button-container{margin:5px;display:inline-block;position:relative}.swal-button{background-color:#7cd1f9;color:#fff;border:none;box-shadow:none;border-radius:5px;font-weight:600;font-size:14px;padding:10px 24px;margin:0;cursor:pointer}.swal-button:not([disabled]):hover{background-color:#78cbf2}.swal-button:active{background-color:#70bce0}.swal-button:focus{outline:none;box-shadow:0 0 0 1px #fff,0 0 0 3px rgba(43,114,165,.29)}.swal-button[disabled]{opacity:.5;cursor:default}.swal-button::-moz-focus-inner{border:0}.swal-button--cancel{color:#555;background-color:#efefef}.swal-button--cancel:not([disabled]):hover{background-color:#e8e8e8}.swal-button--cancel:active{background-color:#d7d7d7}.swal-button--cancel:focus{box-shadow:0 0 0 1px #fff,0 0 0 3px rgba(116,136,150,.29)}.swal-button--danger{background-color:#e64942}.swal-button--danger:not([disabled]):hover{background-color:#df4740}.swal-button--danger:active{background-color:#cf423b}.swal-button--danger:focus{box-shadow:0 0 0 1px #fff,0 0 0 3px rgba(165,43,43,.29)}.swal-content{padding:0 20px;margin-top:20px;font-size:medium}.swal-content:last-child{margin-bottom:20px}.swal-content__input,.swal-content__textarea{-webkit-appearance:none;background-color:#fff;border:none;font-size:14px;display:block;box-sizing:border-box;width:100%;border:1px solid rgba(0,0,0,.14);padding:10px 13px;border-radius:2px;transition:border-color .2s}.swal-content__input:focus,.swal-content__textarea:focus{outline:none;border-color:#6db8ff}.swal-content__textarea{resize:vertical}.swal-button--loading{color:transparent}.swal-button--loading~.swal-button__loader{opacity:1}.swal-button__loader{position:absolute;height:auto;width:43px;z-index:2;left:50%;top:50%;-webkit-transform:translateX(-50%) translateY(-50%);transform:translateX(-50%) translateY(-50%);text-align:center;pointer-events:none;opacity:0}.swal-button__loader div{display:inline-block;float:none;vertical-align:baseline;width:9px;height:9px;padding:0;border:none;margin:2px;opacity:.4;border-radius:7px;background-color:hsla(0,0%,100%,.9);transition:background .2s;-webkit-animation:swal-loading-anim 1s infinite;animation:swal-loading-anim 1s infinite}.swal-button__loader div:nth-child(3n+2){-webkit-animation-delay:.15s;animation-delay:.15s}.swal-button__loader div:nth-child(3n+3){-webkit-animation-delay:.3s;animation-delay:.3s}@-webkit-keyframes swal-loading-anim{0%{opacity:.4}20%{opacity:.4}50%{opacity:1}to{opacity:.4}}@keyframes swal-loading-anim{0%{opacity:.4}20%{opacity:.4}50%{opacity:1}to{opacity:.4}}.swal-overlay{position:fixed;top:0;bottom:0;left:0;right:0;text-align:center;font-size:0;overflow-y:auto;background-color:rgba(0,0,0,.4);z-index:10000;pointer-events:none;opacity:0;transition:opacity .3s}.swal-overlay:before{content:" ";display:inline-block;vertical-align:middle;height:100%}.swal-overlay--show-modal{opacity:1;pointer-events:auto}.swal-overlay--show-modal .swal-modal{opacity:1;pointer-events:auto;box-sizing:border-box;-webkit-animation:showSweetAlert .3s;animation:showSweetAlert .3s;will-change:transform}.swal-modal{width:478px;opacity:0;pointer-events:none;background-color:#fff;text-align:center;border-radius:5px;position:static;margin:20px auto;display:inline-block;vertical-align:middle;-webkit-transform:scale(1);transform:scale(1);-webkit-transform-origin:50% 50%;transform-origin:50% 50%;z-index:10001;transition:opacity .2s,-webkit-transform .3s;transition:transform .3s,opacity .2s;transition:transform .3s,opacity .2s,-webkit-transform .3s}@media (max-width:500px){.swal-modal{width:calc(100% - 20px)}}@-webkit-keyframes showSweetAlert{0%{-webkit-transform:scale(1);transform:scale(1)}1%{-webkit-transform:scale(.5);transform:scale(.5)}45%{-webkit-transform:scale(1.05);transform:scale(1.05)}80%{-webkit-transform:scale(.95);transform:scale(.95)}to{-webkit-transform:scale(1);transform:scale(1)}}@keyframes showSweetAlert{0%{-webkit-transform:scale(1);transform:scale(1)}1%{-webkit-transform:scale(.5);transform:scale(.5)}45%{-webkit-transform:scale(1.05);transform:scale(1.05)}80%{-webkit-transform:scale(.95);transform:scale(.95)}to{-webkit-transform:scale(1);transform:scale(1)}}',""])},function(n,r){function i(a,l){var s=a[1]||"",u=a[3];if(!u)return s;if(l&&typeof btoa=="function"){var p=o(u);return[s].concat(u.sources.map(function(h){return"/*# sourceURL="+u.sourceRoot+h+" */"})).concat([p]).join(`
`)}return[s].join(`
`)}function o(a){return"/*# sourceMappingURL=data:application/json;charset=utf-8;base64,"+btoa(unescape(encodeURIComponent(JSON.stringify(a))))+" */"}n.exports=function(a){var l=[];return l.toString=function(){return this.map(function(s){var u=i(s,a);return s[2]?"@media "+s[2]+"{"+u+"}":u}).join("")},l.i=function(s,u){typeof s=="string"&&(s=[[null,s,""]]);for(var p={},h=0;h<this.length;h++){var x=this[h][0];typeof x=="number"&&(p[x]=!0)}for(h=0;h<s.length;h++){var y=s[h];typeof y[0]=="number"&&p[y[0]]||(u&&!y[2]?y[2]=u:u&&(y[2]="("+y[2]+") and ("+u+")"),l.push(y))}},l}},function(n,r,i){function o(j,O){for(var _=0;_<j.length;_++){var M=j[_],R=b[M.id];if(R){R.refs++;for(var I=0;I<R.parts.length;I++)R.parts[I](M.parts[I]);for(;I<M.parts.length;I++)R.parts.push(x(M.parts[I],O))}else{for(var W=[],I=0;I<M.parts.length;I++)W.push(x(M.parts[I],O));b[M.id]={id:M.id,refs:1,parts:W}}}}function a(j,O){for(var _=[],M={},R=0;R<j.length;R++){var I=j[R],W=O.base?I[0]+O.base:I[0],$=I[1],ee=I[2],ge=I[3],N={css:$,media:ee,sourceMap:ge};M[W]?M[W].parts.push(N):_.push(M[W]={id:W,parts:[N]})}return _}function l(j,O){var _=f(j.insertInto);if(!_)throw new Error("Couldn't find a style target. This probably means that the value for the 'insertInto' parameter is invalid.");var M=S[S.length-1];if(j.insertAt==="top")M?M.nextSibling?_.insertBefore(O,M.nextSibling):_.appendChild(O):_.insertBefore(O,_.firstChild),S.push(O);else{if(j.insertAt!=="bottom")throw new Error("Invalid value for parameter 'insertAt'. Must be 'top' or 'bottom'.");_.appendChild(O)}}function s(j){if(j.parentNode===null)return!1;j.parentNode.removeChild(j);var O=S.indexOf(j);O>=0&&S.splice(O,1)}function u(j){var O=document.createElement("style");return j.attrs.type="text/css",h(O,j.attrs),l(j,O),O}function p(j){var O=document.createElement("link");return j.attrs.type="text/css",j.attrs.rel="stylesheet",h(O,j.attrs),l(j,O),O}function h(j,O){Object.keys(O).forEach(function(_){j.setAttribute(_,O[_])})}function x(j,O){var _,M,R,I;if(O.transform&&j.css){if(!(I=O.transform(j.css)))return function(){};j.css=I}if(O.singleton){var W=w++;_=g||(g=u(O)),M=y.bind(null,_,W,!1),R=y.bind(null,_,W,!0)}else j.sourceMap&&typeof URL=="function"&&typeof URL.createObjectURL=="function"&&typeof URL.revokeObjectURL=="function"&&typeof Blob=="function"&&typeof btoa=="function"?(_=p(O),M=v.bind(null,_,O),R=function(){s(_),_.href&&URL.revokeObjectURL(_.href)}):(_=u(O),M=m.bind(null,_),R=function(){s(_)});return M(j),function($){if($){if($.css===j.css&&$.media===j.media&&$.sourceMap===j.sourceMap)return;M(j=$)}else R()}}function y(j,O,_,M){var R=_?"":M.css;if(j.styleSheet)j.styleSheet.cssText=C(O,R);else{var I=document.createTextNode(R),W=j.childNodes;W[O]&&j.removeChild(W[O]),W.length?j.insertBefore(I,W[O]):j.appendChild(I)}}function m(j,O){var _=O.css,M=O.media;if(M&&j.setAttribute("media",M),j.styleSheet)j.styleSheet.cssText=_;else{for(;j.firstChild;)j.removeChild(j.firstChild);j.appendChild(document.createTextNode(_))}}function v(j,O,_){var M=_.css,R=_.sourceMap,I=O.convertToAbsoluteUrls===void 0&&R;(O.convertToAbsoluteUrls||I)&&(M=T(M)),R&&(M+=`
/*# sourceMappingURL=data:application/json;base64,`+btoa(unescape(encodeURIComponent(JSON.stringify(R))))+" */");var W=new Blob([M],{type:"text/css"}),$=j.href;j.href=URL.createObjectURL(W),$&&URL.revokeObjectURL($)}var b={},d=function(j){var O;return function(){return O===void 0&&(O=j.apply(this,arguments)),O}}(function(){return window&&document&&document.all&&!window.atob}),f=function(j){var O={};return function(_){return O[_]===void 0&&(O[_]=j.call(this,_)),O[_]}}(function(j){return document.querySelector(j)}),g=null,w=0,S=[],T=i(15);n.exports=function(j,O){if(typeof DEBUG<"u"&&DEBUG&&typeof document!="object")throw new Error("The style-loader cannot be used in a non-browser environment");O=O||{},O.attrs=typeof O.attrs=="object"?O.attrs:{},O.singleton||(O.singleton=d()),O.insertInto||(O.insertInto="head"),O.insertAt||(O.insertAt="bottom");var _=a(j,O);return o(_,O),function(M){for(var R=[],I=0;I<_.length;I++){var W=_[I],$=b[W.id];$.refs--,R.push($)}M&&o(a(M,O),O);for(var I=0;I<R.length;I++){var $=R[I];if($.refs===0){for(var ee=0;ee<$.parts.length;ee++)$.parts[ee]();delete b[$.id]}}}};var C=function(){var j=[];return function(O,_){return j[O]=_,j.filter(Boolean).join(`
`)}}()},function(n,r){n.exports=function(i){var o=typeof window<"u"&&window.location;if(!o)throw new Error("fixUrls requires window.location");if(!i||typeof i!="string")return i;var a=o.protocol+"//"+o.host,l=a+o.pathname.replace(/\/[^\/]*$/,"/");return i.replace(/url\s*\(((?:[^)(]|\((?:[^)(]+|\([^)(]*\))*\))*)\)/gi,function(s,u){var p=u.trim().replace(/^"(.*)"$/,function(x,y){return y}).replace(/^'(.*)'$/,function(x,y){return y});if(/^(#|data:|http:\/\/|https:\/\/|file:\/\/\/)/i.test(p))return s;var h;return h=p.indexOf("//")===0?p:p.indexOf("/")===0?a+p:l+p.replace(/^\.\//,""),"url("+JSON.stringify(h)+")"})}},function(n,r,i){var o=i(17);typeof window>"u"||window.Promise||(window.Promise=o),i(21),String.prototype.includes||(String.prototype.includes=function(a,l){return typeof l!="number"&&(l=0),!(l+a.length>this.length)&&this.indexOf(a,l)!==-1}),Array.prototype.includes||Object.defineProperty(Array.prototype,"includes",{value:function(a,l){if(this==null)throw new TypeError('"this" is null or not defined');var s=Object(this),u=s.length>>>0;if(u===0)return!1;for(var p=0|l,h=Math.max(p>=0?p:u-Math.abs(p),0);h<u;){if(function(x,y){return x===y||typeof x=="number"&&typeof y=="number"&&isNaN(x)&&isNaN(y)}(s[h],a))return!0;h++}return!1}}),typeof window<"u"&&function(a){a.forEach(function(l){l.hasOwnProperty("remove")||Object.defineProperty(l,"remove",{configurable:!0,enumerable:!0,writable:!0,value:function(){this.parentNode.removeChild(this)}})})}([Element.prototype,CharacterData.prototype,DocumentType.prototype])},function(n,r,i){(function(o){(function(a){function l(){}function s(d,f){return function(){d.apply(f,arguments)}}function u(d){if(typeof this!="object")throw new TypeError("Promises must be constructed via new");if(typeof d!="function")throw new TypeError("not a function");this._state=0,this._handled=!1,this._value=void 0,this._deferreds=[],v(d,this)}function p(d,f){for(;d._state===3;)d=d._value;if(d._state===0)return void d._deferreds.push(f);d._handled=!0,u._immediateFn(function(){var g=d._state===1?f.onFulfilled:f.onRejected;if(g===null)return void(d._state===1?h:x)(f.promise,d._value);var w;try{w=g(d._value)}catch(S){return void x(f.promise,S)}h(f.promise,w)})}function h(d,f){try{if(f===d)throw new TypeError("A promise cannot be resolved with itself.");if(f&&(typeof f=="object"||typeof f=="function")){var g=f.then;if(f instanceof u)return d._state=3,d._value=f,void y(d);if(typeof g=="function")return void v(s(g,f),d)}d._state=1,d._value=f,y(d)}catch(w){x(d,w)}}function x(d,f){d._state=2,d._value=f,y(d)}function y(d){d._state===2&&d._deferreds.length===0&&u._immediateFn(function(){d._handled||u._unhandledRejectionFn(d._value)});for(var f=0,g=d._deferreds.length;f<g;f++)p(d,d._deferreds[f]);d._deferreds=null}function m(d,f,g){this.onFulfilled=typeof d=="function"?d:null,this.onRejected=typeof f=="function"?f:null,this.promise=g}function v(d,f){var g=!1;try{d(function(w){g||(g=!0,h(f,w))},function(w){g||(g=!0,x(f,w))})}catch(w){if(g)return;g=!0,x(f,w)}}var b=setTimeout;u.prototype.catch=function(d){return this.then(null,d)},u.prototype.then=function(d,f){var g=new this.constructor(l);return p(this,new m(d,f,g)),g},u.all=function(d){var f=Array.prototype.slice.call(d);return new u(function(g,w){function S(j,O){try{if(O&&(typeof O=="object"||typeof O=="function")){var _=O.then;if(typeof _=="function")return void _.call(O,function(M){S(j,M)},w)}f[j]=O,--T==0&&g(f)}catch(M){w(M)}}if(f.length===0)return g([]);for(var T=f.length,C=0;C<f.length;C++)S(C,f[C])})},u.resolve=function(d){return d&&typeof d=="object"&&d.constructor===u?d:new u(function(f){f(d)})},u.reject=function(d){return new u(function(f,g){g(d)})},u.race=function(d){return new u(function(f,g){for(var w=0,S=d.length;w<S;w++)d[w].then(f,g)})},u._immediateFn=typeof o=="function"&&function(d){o(d)}||function(d){b(d,0)},u._unhandledRejectionFn=function(d){typeof console<"u"&&console&&console.warn("Possible Unhandled Promise Rejection:",d)},u._setImmediateFn=function(d){u._immediateFn=d},u._setUnhandledRejectionFn=function(d){u._unhandledRejectionFn=d},n!==void 0&&n.exports?n.exports=u:a.Promise||(a.Promise=u)})(this)}).call(r,i(18).setImmediate)},function(n,r,i){function o(l,s){this._id=l,this._clearFn=s}var a=Function.prototype.apply;r.setTimeout=function(){return new o(a.call(setTimeout,window,arguments),clearTimeout)},r.setInterval=function(){return new o(a.call(setInterval,window,arguments),clearInterval)},r.clearTimeout=r.clearInterval=function(l){l&&l.close()},o.prototype.unref=o.prototype.ref=function(){},o.prototype.close=function(){this._clearFn.call(window,this._id)},r.enroll=function(l,s){clearTimeout(l._idleTimeoutId),l._idleTimeout=s},r.unenroll=function(l){clearTimeout(l._idleTimeoutId),l._idleTimeout=-1},r._unrefActive=r.active=function(l){clearTimeout(l._idleTimeoutId);var s=l._idleTimeout;s>=0&&(l._idleTimeoutId=setTimeout(function(){l._onTimeout&&l._onTimeout()},s))},i(19),r.setImmediate=setImmediate,r.clearImmediate=clearImmediate},function(n,r,i){(function(o,a){(function(l,s){function u(g){typeof g!="function"&&(g=new Function(""+g));for(var w=new Array(arguments.length-1),S=0;S<w.length;S++)w[S]=arguments[S+1];var T={callback:g,args:w};return v[m]=T,y(m),m++}function p(g){delete v[g]}function h(g){var w=g.callback,S=g.args;switch(S.length){case 0:w();break;case 1:w(S[0]);break;case 2:w(S[0],S[1]);break;case 3:w(S[0],S[1],S[2]);break;default:w.apply(s,S)}}function x(g){if(b)setTimeout(x,0,g);else{var w=v[g];if(w){b=!0;try{h(w)}finally{p(g),b=!1}}}}if(!l.setImmediate){var y,m=1,v={},b=!1,d=l.document,f=Object.getPrototypeOf&&Object.getPrototypeOf(l);f=f&&f.setTimeout?f:l,{}.toString.call(l.process)==="[object process]"?function(){y=function(g){a.nextTick(function(){x(g)})}}():function(){if(l.postMessage&&!l.importScripts){var g=!0,w=l.onmessage;return l.onmessage=function(){g=!1},l.postMessage("","*"),l.onmessage=w,g}}()?function(){var g="setImmediate$"+Math.random()+"$",w=function(S){S.source===l&&typeof S.data=="string"&&S.data.indexOf(g)===0&&x(+S.data.slice(g.length))};l.addEventListener?l.addEventListener("message",w,!1):l.attachEvent("onmessage",w),y=function(S){l.postMessage(g+S,"*")}}():l.MessageChannel?function(){var g=new MessageChannel;g.port1.onmessage=function(w){x(w.data)},y=function(w){g.port2.postMessage(w)}}():d&&"onreadystatechange"in d.createElement("script")?function(){var g=d.documentElement;y=function(w){var S=d.createElement("script");S.onreadystatechange=function(){x(w),S.onreadystatechange=null,g.removeChild(S),S=null},g.appendChild(S)}}():function(){y=function(g){setTimeout(x,0,g)}}(),f.setImmediate=u,f.clearImmediate=p}})(typeof self>"u"?o===void 0?this:o:self)}).call(r,i(7),i(20))},function(n,r){function i(){throw new Error("setTimeout has not been defined")}function o(){throw new Error("clearTimeout has not been defined")}function a(g){if(x===setTimeout)return setTimeout(g,0);if((x===i||!x)&&setTimeout)return x=setTimeout,setTimeout(g,0);try{return x(g,0)}catch{try{return x.call(null,g,0)}catch{return x.call(this,g,0)}}}function l(g){if(y===clearTimeout)return clearTimeout(g);if((y===o||!y)&&clearTimeout)return y=clearTimeout,clearTimeout(g);try{return y(g)}catch{try{return y.call(null,g)}catch{return y.call(this,g)}}}function s(){d&&v&&(d=!1,v.length?b=v.concat(b):f=-1,b.length&&u())}function u(){if(!d){var g=a(s);d=!0;for(var w=b.length;w;){for(v=b,b=[];++f<w;)v&&v[f].run();f=-1,w=b.length}v=null,d=!1,l(g)}}function p(g,w){this.fun=g,this.array=w}function h(){}var x,y,m=n.exports={};(function(){try{x=typeof setTimeout=="function"?setTimeout:i}catch{x=i}try{y=typeof clearTimeout=="function"?clearTimeout:o}catch{y=o}})();var v,b=[],d=!1,f=-1;m.nextTick=function(g){var w=new Array(arguments.length-1);if(arguments.length>1)for(var S=1;S<arguments.length;S++)w[S-1]=arguments[S];b.push(new p(g,w)),b.length!==1||d||a(u)},p.prototype.run=function(){this.fun.apply(null,this.array)},m.title="browser",m.browser=!0,m.env={},m.argv=[],m.version="",m.versions={},m.on=h,m.addListener=h,m.once=h,m.off=h,m.removeListener=h,m.removeAllListeners=h,m.emit=h,m.prependListener=h,m.prependOnceListener=h,m.listeners=function(g){return[]},m.binding=function(g){throw new Error("process.binding is not supported")},m.cwd=function(){return"/"},m.chdir=function(g){throw new Error("process.chdir is not supported")},m.umask=function(){return 0}},function(n,r,i){i(22).polyfill()},function(n,r,i){function o(l,s){if(l==null)throw new TypeError("Cannot convert first argument to object");for(var u=Object(l),p=1;p<arguments.length;p++){var h=arguments[p];if(h!=null)for(var x=Object.keys(Object(h)),y=0,m=x.length;y<m;y++){var v=x[y],b=Object.getOwnPropertyDescriptor(h,v);b!==void 0&&b.enumerable&&(u[v]=h[v])}}return u}function a(){Object.assign||Object.defineProperty(Object,"assign",{enumerable:!1,configurable:!0,writable:!0,value:o})}n.exports={assign:o,polyfill:a}},function(n,r,i){Object.defineProperty(r,"__esModule",{value:!0});var o=i(24),a=i(6),l=i(5),s=i(36),u=function(){for(var p=[],h=0;h<arguments.length;h++)p[h]=arguments[h];if(typeof window<"u"){var x=s.getOpts.apply(void 0,p);return new Promise(function(y,m){l.default.promise={resolve:y,reject:m},o.default(x),setTimeout(function(){a.openModal()})})}};u.close=a.onAction,u.getState=a.getState,u.setActionValue=l.setActionValue,u.stopLoading=a.stopLoading,u.setDefaults=s.setDefaults,r.default=u},function(n,r,i){Object.defineProperty(r,"__esModule",{value:!0});var o=i(1),a=i(0),l=a.default.MODAL,s=i(4),u=i(34),p=i(35),h=i(1);r.init=function(x){o.getNode(l)||(document.body||h.throwErr("You can only use SweetAlert AFTER the DOM has loaded!"),u.default(),s.default()),s.initModalContent(x),p.default(x)},r.default=r.init},function(n,r,i){Object.defineProperty(r,"__esModule",{value:!0});var o=i(0),a=o.default.MODAL;r.modalMarkup=`
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
`},function(n,r,i){Object.defineProperty(r,"__esModule",{value:!0});var o=i(4),a=i(2),l=i(0),s=l.default.ICON,u=l.default.ICON_CUSTOM,p=["error","warning","success","info"],h={error:a.errorIconMarkup(),warning:a.warningIconMarkup(),success:a.successIconMarkup()},x=function(v,b){var d=s+"--"+v;b.classList.add(d);var f=h[v];f&&(b.innerHTML=f)},y=function(v,b){b.classList.add(u);var d=document.createElement("img");d.src=v,b.appendChild(d)},m=function(v){if(v){var b=o.injectElIntoModal(a.iconMarkup);p.includes(v)?x(v,b):y(v,b)}};r.default=m},function(n,r,i){Object.defineProperty(r,"__esModule",{value:!0});var o=i(2),a=i(4),l=function(s){navigator.userAgent.includes("AppleWebKit")&&(s.style.display="none",s.offsetHeight,s.style.display="")};r.initTitle=function(s){if(s){var u=a.injectElIntoModal(o.titleMarkup);u.textContent=s,l(u)}},r.initText=function(s){if(s){var u=document.createDocumentFragment();s.split(`
`).forEach(function(h,x,y){u.appendChild(document.createTextNode(h)),x<y.length-1&&u.appendChild(document.createElement("br"))});var p=a.injectElIntoModal(o.textMarkup);p.appendChild(u),l(p)}}},function(n,r,i){Object.defineProperty(r,"__esModule",{value:!0});var o=i(1),a=i(4),l=i(0),s=l.default.BUTTON,u=l.default.DANGER_BUTTON,p=i(3),h=i(2),x=i(6),y=i(5),m=function(b,d,f){var g=d.text,w=d.value,S=d.className,T=d.closeModal,C=o.stringToNode(h.buttonMarkup),j=C.querySelector("."+s),O=s+"--"+b;j.classList.add(O),S&&(Array.isArray(S)?S:S.split(" ")).filter(function(M){return M.length>0}).forEach(function(M){j.classList.add(M)}),f&&b===p.CONFIRM_KEY&&j.classList.add(u),j.textContent=g;var _={};return _[b]=w,y.setActionValue(_),y.setActionOptionsFor(b,{closeModal:T}),j.addEventListener("click",function(){return x.onAction(b)}),C},v=function(b,d){var f=a.injectElIntoModal(h.footerMarkup);for(var g in b){var w=b[g],S=m(g,w,d);w.visible&&f.appendChild(S)}f.children.length===0&&f.remove()};r.default=v},function(n,r,i){Object.defineProperty(r,"__esModule",{value:!0});var o=i(3),a=i(4),l=i(2),s=i(5),u=i(6),p=i(0),h=p.default.CONTENT,x=function(v){v.addEventListener("input",function(b){var d=b.target,f=d.value;s.setActionValue(f)}),v.addEventListener("keyup",function(b){if(b.key==="Enter")return u.onAction(o.CONFIRM_KEY)}),setTimeout(function(){v.focus(),s.setActionValue("")},0)},y=function(v,b,d){var f=document.createElement(b),g=h+"__"+b;f.classList.add(g);for(var w in d){var S=d[w];f[w]=S}b==="input"&&x(f),v.appendChild(f)},m=function(v){if(v){var b=a.injectElIntoModal(l.contentMarkup),d=v.element,f=v.attributes;typeof d=="string"?y(b,d,f):b.appendChild(d)}};r.default=m},function(n,r,i){Object.defineProperty(r,"__esModule",{value:!0});var o=i(1),a=i(2),l=function(){var s=o.stringToNode(a.overlayMarkup);document.body.appendChild(s)};r.default=l},function(n,r,i){Object.defineProperty(r,"__esModule",{value:!0});var o=i(5),a=i(6),l=i(1),s=i(3),u=i(0),p=u.default.MODAL,h=u.default.BUTTON,x=u.default.OVERLAY,y=function(M){M.preventDefault(),f()},m=function(M){M.preventDefault(),g()},v=function(M){if(o.default.isOpen)switch(M.key){case"Escape":return a.onAction(s.CANCEL_KEY)}},b=function(M){if(o.default.isOpen)switch(M.key){case"Tab":return y(M)}},d=function(M){if(o.default.isOpen)return M.key==="Tab"&&M.shiftKey?m(M):void 0},f=function(){var M=l.getNode(h);M&&(M.tabIndex=0,M.focus())},g=function(){var M=l.getNode(p),R=M.querySelectorAll("."+h),I=R.length-1,W=R[I];W&&W.focus()},w=function(M){M[M.length-1].addEventListener("keydown",b)},S=function(M){M[0].addEventListener("keydown",d)},T=function(){var M=l.getNode(p),R=M.querySelectorAll("."+h);R.length&&(w(R),S(R))},C=function(M){if(l.getNode(x)===M.target)return a.onAction(s.CANCEL_KEY)},j=function(M){var R=l.getNode(x);R.removeEventListener("click",C),M&&R.addEventListener("click",C)},O=function(M){o.default.timer&&clearTimeout(o.default.timer),M&&(o.default.timer=window.setTimeout(function(){return a.onAction(s.CANCEL_KEY)},M))},_=function(M){M.closeOnEsc?document.addEventListener("keyup",v):document.removeEventListener("keyup",v),M.dangerMode?f():g(),T(),j(M.closeOnClickOutside),O(M.timer)};r.default=_},function(n,r,i){Object.defineProperty(r,"__esModule",{value:!0});var o=i(1),a=i(3),l=i(37),s=i(38),u={title:null,text:null,icon:null,buttons:a.defaultButtonList,content:null,className:null,closeOnClickOutside:!0,closeOnEsc:!0,dangerMode:!1,timer:null},p=Object.assign({},u);r.setDefaults=function(d){p=Object.assign({},u,d)};var h=function(d){var f=d&&d.button,g=d&&d.buttons;return f!==void 0&&g!==void 0&&o.throwErr("Cannot set both 'button' and 'buttons' options!"),f!==void 0?{confirm:f}:g},x=function(d){return o.ordinalSuffixOf(d+1)},y=function(d,f){o.throwErr(x(f)+" argument ('"+d+"') is invalid")},m=function(d,f){var g=d+1,w=f[g];o.isPlainObject(w)||w===void 0||o.throwErr("Expected "+x(g)+" argument ('"+w+"') to be a plain object")},v=function(d,f){var g=d+1,w=f[g];w!==void 0&&o.throwErr("Unexpected "+x(g)+" argument ("+w+")")},b=function(d,f,g,w){var S=typeof f,T=S==="string",C=f instanceof Element;if(T){if(g===0)return{text:f};if(g===1)return{text:f,title:w[0]};if(g===2)return m(g,w),{icon:f};y(f,g)}else{if(C&&g===0)return m(g,w),{content:f};if(o.isPlainObject(f))return v(g,w),f;y(f,g)}};r.getOpts=function(){for(var d=[],f=0;f<arguments.length;f++)d[f]=arguments[f];var g={};d.forEach(function(T,C){var j=b(0,T,C,d);Object.assign(g,j)});var w=h(g);g.buttons=a.getButtonListOpts(w),delete g.button,g.content=l.getContentOpts(g.content);var S=Object.assign({},u,p,g);return Object.keys(S).forEach(function(T){s.DEPRECATED_OPTS[T]&&s.logDeprecation(T)}),S}},function(n,r,i){Object.defineProperty(r,"__esModule",{value:!0});var o=i(1),a={element:"input",attributes:{placeholder:""}};r.getContentOpts=function(l){var s={};return o.isPlainObject(l)?Object.assign(s,l):l instanceof Element?{element:l}:l==="input"?a:null}},function(n,r,i){Object.defineProperty(r,"__esModule",{value:!0}),r.logDeprecation=function(o){var a=r.DEPRECATED_OPTS[o],l=a.onlyRename,s=a.replacement,u=a.subOption,p=a.link,h=l?"renamed":"deprecated",x='SweetAlert warning: "'+o+'" option has been '+h+".";s&&(x+=" Please use"+(u?' "'+u+'" in ':" ")+'"'+s+'" instead.');var y="https://sweetalert.js.org";x+=p?" More details: "+y+p:" More details: "+y+"/guides/#upgrading-from-1x",console.warn(x)},r.DEPRECATED_OPTS={type:{replacement:"icon",link:"/docs/#icon"},imageUrl:{replacement:"icon",link:"/docs/#icon"},customClass:{replacement:"className",onlyRename:!0,link:"/docs/#classname"},imageSize:{},showCancelButton:{replacement:"buttons",link:"/docs/#buttons"},showConfirmButton:{replacement:"button",link:"/docs/#button"},confirmButtonText:{replacement:"button",link:"/docs/#button"},confirmButtonColor:{},cancelButtonText:{replacement:"buttons",link:"/docs/#buttons"},closeOnConfirm:{replacement:"button",subOption:"closeModal",link:"/docs/#button"},closeOnCancel:{replacement:"buttons",subOption:"closeModal",link:"/docs/#buttons"},showLoaderOnConfirm:{replacement:"buttons"},animation:{},inputType:{replacement:"content",link:"/docs/#content"},inputValue:{replacement:"content",link:"/docs/#content"},inputPlaceholder:{replacement:"content",link:"/docs/#content"},html:{replacement:"content",link:"/docs/#content"},allowEscapeKey:{replacement:"closeOnEsc",onlyRename:!0,link:"/docs/#closeonesc"},allowClickOutside:{replacement:"closeOnClickOutside",onlyRename:!0,link:"/docs/#closeonclickoutside"}}}])})})(Zx);var hE=Zx.exports;const zp=oi(hE),mE=(e,t)=>{const[n,r]=L.useState(()=>{try{const o=window.localStorage.getItem(e);return o?JSON.parse(o):t}catch(o){return console.error("Error loading data from localStorage:",o),t}});return[n,o=>{try{const a=o instanceof Function?o(n):o;r(a),window.localStorage.setItem(e,JSON.stringify(a))}catch(a){console.error("Error storing data to localStorage:",a)}}]},Fp=[{value:"Менторство та консультації",label:"Менторство та консультації"},{value:"Діагностика",label:"Діагностика"},{value:"Стратегії",label:"Стратегії"},{value:"Навчання",label:"Навчання"},{value:"Інше",label:"Інше"}],Np="/healthy-management-project/assets/computer1x-nLk1eyXX.webp",gE="/healthy-management-project/assets/computer@2x-oGWk-qXD.webp",xE="/healthy-management-project/assets/computer_1440_1x-l4N2dq6p.jpg",vE="/healthy-management-project/assets/computer_1440_1x-sUcWDD18.webp",yE="/healthy-management-project/assets/computer_1440@2x-vTT-4SwT.webp",wE="/healthy-management-project/assets/computer_768_1x-Oro_pkzQ.jpg",bE="/healthy-management-project/assets/computer_768_1x-brb-BlfY.webp",SE="/healthy-management-project/assets/computer_768@2x-fbWMIh0a.webp",Vp="/healthy-management-project/assets/mob_computer1x-gdjE7oao.webp",kE="/healthy-management-project/assets/mob_computer@2x-JptvcU_h.webp",hn=()=>c.jsx("svg",{width:"8",height:"8",children:c.jsx("use",{href:`${ha}#star`})});var ev={exports:{}};function jE(e){return e&&typeof e=="object"&&"default"in e?e.default:e}var Il=jE(L),OE=go;function EE(e,t){for(var n=Object.getOwnPropertyNames(t),r=0;r<n.length;r++){var i=n[r],o=Object.getOwnPropertyDescriptor(t,i);o&&o.configurable&&e[i]===void 0&&Object.defineProperty(e,i,o)}return e}function Gu(){return(Gu=Object.assign||function(e){for(var t=1;t<arguments.length;t++){var n=arguments[t];for(var r in n)Object.prototype.hasOwnProperty.call(n,r)&&(e[r]=n[r])}return e}).apply(this,arguments)}function CE(e,t){e.prototype=Object.create(t.prototype),EE(e.prototype.constructor=e,t)}function PE(e,t){if(e==null)return{};var n,r,i={},o=Object.keys(e);for(r=0;r<o.length;r++)n=o[r],0<=t.indexOf(n)||(i[n]=e[n]);return i}function Pr(e){if(e===void 0)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return e}var TE=function(e,t,n,r,i,o,a,l){if(!e){var s;if(t===void 0)s=new Error("Minified exception occurred; use the non-minified dev environment for the full error message and additional helpful warnings.");else{var u=[n,r,i,o,a,l],p=0;(s=new Error(t.replace(/%s/g,function(){return u[p++]}))).name="Invariant Violation"}throw s.framesToPop=1,s}},Up=TE;function Wp(e,t,n){if("selectionStart"in e&&"selectionEnd"in e)e.selectionStart=t,e.selectionEnd=n;else{var r=e.createTextRange();r.collapse(!0),r.moveStart("character",t),r.moveEnd("character",n-t),r.select()}}function _E(e){var t=0,n=0;if("selectionStart"in e&&"selectionEnd"in e)t=e.selectionStart,n=e.selectionEnd;else{var r=document.selection.createRange();r.parentElement()===e&&(t=-r.moveStart("character",-e.value.length),n=-r.moveEnd("character",-e.value.length))}return{start:t,end:n,length:n-t}}var ME={9:"[0-9]",a:"[A-Za-z]","*":"[A-Za-z0-9]"},AE="_";function Bp(e,t,n){var r="",i="",o=null,a=[];if(t===void 0&&(t=AE),n==null&&(n=ME),!e||typeof e!="string")return{maskChar:t,formatChars:n,mask:null,prefix:null,lastEditablePosition:null,permanents:[]};var l=!1;return e.split("").forEach(function(s){l=!l&&s==="\\"||(l||!n[s]?(a.push(r.length),r.length===a.length-1&&(i+=s)):o=r.length+1,r+=s,!1)}),{maskChar:t,formatChars:n,prefix:i,mask:r,lastEditablePosition:o,permanents:a}}function Et(e,t){return e.permanents.indexOf(t)!==-1}function Ws(e,t,n){var r=e.mask,i=e.formatChars;if(!n)return!1;if(Et(e,t))return r[t]===n;var o=i[r[t]];return new RegExp(o).test(n)}function Hp(e,t){return t.split("").every(function(n,r){return Et(e,r)||!Ws(e,r,n)})}function Mi(e,t){var n=e.maskChar,r=e.prefix;if(!n){for(;t.length>r.length&&Et(e,t.length-1);)t=t.slice(0,t.length-1);return t.length}for(var i=r.length,o=t.length;o>=r.length;o--){var a=t[o];if(!Et(e,o)&&Ws(e,o,a)){i=o+1;break}}return i}function tv(e,t){return Mi(e,t)===e.mask.length}function xn(e,t){var n=e.maskChar,r=e.mask,i=e.prefix;if(!n){for((t=Zu(e,"",t,0)).length<i.length&&(t=i);t.length<r.length&&Et(e,t.length);)t+=r[t.length];return t}if(t)return Zu(e,xn(e,""),t,0);for(var o=0;o<r.length;o++)Et(e,o)?t+=r[o]:t+=n;return t}function RE(e,t,n,r){var i=n+r,o=e.maskChar,a=e.mask,l=e.prefix,s=t.split("");if(o)return s.map(function(p,h){return h<n||i<=h?p:Et(e,h)?a[h]:o}).join("");for(var u=i;u<s.length;u++)Et(e,u)&&(s[u]="");return n=Math.max(l.length,n),s.splice(n,i-n),t=s.join(""),xn(e,t)}function Zu(e,t,n,r){var i=e.mask,o=e.maskChar,a=e.prefix,l=n.split(""),s=tv(e,t);return!o&&r>t.length&&(t+=i.slice(t.length,r)),l.every(function(u){for(;y=u,Et(e,x=r)&&y!==i[x];){if(r>=t.length&&(t+=i[r]),p=u,h=r,o&&Et(e,h)&&p===o)return!0;if(++r>=i.length)return!1}var p,h,x,y;return!Ws(e,r,u)&&u!==o||(r<t.length?t=o||s||r<a.length?t.slice(0,r)+u+t.slice(r+1):(t=t.slice(0,r)+u+t.slice(r),xn(e,t)):o||(t+=u),++r<i.length)}),t}function IE(e,t,n,r){var i=e.mask,o=e.maskChar,a=n.split(""),l=r;return a.every(function(s){for(;p=s,Et(e,u=r)&&p!==i[u];)if(++r>=i.length)return!1;var u,p;return(Ws(e,r,s)||s===o)&&r++,r<i.length}),r-l}function LE(e,t){for(var n=t;0<=n;--n)if(!Et(e,n))return n;return null}function Ui(e,t){for(var n=e.mask,r=t;r<n.length;++r)if(!Et(e,r))return r;return null}function Ll(e){return e||e===0?e+"":""}function DE(e,t,n,r,i){var o=e.mask,a=e.prefix,l=e.lastEditablePosition,s=t,u="",p=0,h=0,x=Math.min(i.start,n.start);return n.end>i.start?h=(p=IE(e,r,u=s.slice(i.start,n.end),x))?i.length:0:s.length<r.length&&(h=r.length-s.length),s=r,h&&(h===1&&!i.length&&(x=i.start===n.start?Ui(e,n.start):LE(e,n.start)),s=RE(e,s,x,h)),s=Zu(e,s,u,x),(x+=p)>=o.length?x=o.length:x<a.length&&!p?x=a.length:x>=a.length&&x<l&&p&&(x=Ui(e,x)),u||(u=null),{value:s=xn(e,s),enteredString:u,selection:{start:x,end:x}}}function zE(){var e=new RegExp("windows","i"),t=new RegExp("phone","i"),n=navigator.userAgent;return e.test(n)&&t.test(n)}function ht(e){return typeof e=="function"}function FE(){return window.requestAnimationFrame||window.webkitRequestAnimationFrame||window.mozRequestAnimationFrame}function nv(){return window.cancelAnimationFrame||window.webkitCancelRequestAnimationFrame||window.webkitCancelAnimationFrame||window.mozCancelAnimationFrame}function $p(e){return(nv()?FE():function(){return setTimeout(e,1e3/60)})(e)}function Dl(e){(nv()||clearTimeout)(e)}var NE=function(e){function t(r){var i=e.call(this,r)||this;i.focused=!1,i.mounted=!1,i.previousSelection=null,i.selectionDeferId=null,i.saveSelectionLoopDeferId=null,i.saveSelectionLoop=function(){i.previousSelection=i.getSelection(),i.saveSelectionLoopDeferId=$p(i.saveSelectionLoop)},i.runSaveSelectionLoop=function(){i.saveSelectionLoopDeferId===null&&i.saveSelectionLoop()},i.stopSaveSelectionLoop=function(){i.saveSelectionLoopDeferId!==null&&(Dl(i.saveSelectionLoopDeferId),i.saveSelectionLoopDeferId=null,i.previousSelection=null)},i.getInputDOMNode=function(){if(!i.mounted)return null;var m=OE.findDOMNode(Pr(Pr(i))),v=typeof window<"u"&&m instanceof window.Element;if(m&&!v)return null;if(m.nodeName!=="INPUT"&&(m=m.querySelector("input")),!m)throw new Error("react-input-mask: inputComponent doesn't contain input node");return m},i.getInputValue=function(){var m=i.getInputDOMNode();return m?m.value:null},i.setInputValue=function(m){var v=i.getInputDOMNode();v&&(i.value=m,v.value=m)},i.setCursorToEnd=function(){var m=Mi(i.maskOptions,i.value),v=Ui(i.maskOptions,m);v!==null&&i.setCursorPosition(v)},i.setSelection=function(m,v,b){b===void 0&&(b={});var d=i.getInputDOMNode(),f=i.isFocused();d&&f&&(b.deferred||Wp(d,m,v),i.selectionDeferId!==null&&Dl(i.selectionDeferId),i.selectionDeferId=$p(function(){i.selectionDeferId=null,Wp(d,m,v)}),i.previousSelection={start:m,end:v,length:Math.abs(v-m)})},i.getSelection=function(){return _E(i.getInputDOMNode())},i.getCursorPosition=function(){return i.getSelection().start},i.setCursorPosition=function(m){i.setSelection(m,m)},i.isFocused=function(){return i.focused},i.getBeforeMaskedValueChangeConfig=function(){var m=i.maskOptions,v=m.mask,b=m.maskChar,d=m.permanents,f=m.formatChars;return{mask:v,maskChar:b,permanents:d,alwaysShowMask:!!i.props.alwaysShowMask,formatChars:f}},i.isInputAutofilled=function(m,v,b,d){var f=i.getInputDOMNode();try{if(f.matches(":-webkit-autofill"))return!0}catch{}return!i.focused||d.end<b.length&&v.end===m.length},i.onChange=function(m){var v=Pr(Pr(i)).beforePasteState,b=Pr(Pr(i)).previousSelection,d=i.props.beforeMaskedValueChange,f=i.getInputValue(),g=i.value,w=i.getSelection();i.isInputAutofilled(f,w,g,b)&&(g=xn(i.maskOptions,""),b={start:0,end:0,length:0}),v&&(b=v.selection,g=v.value,w={start:b.start+f.length,end:b.start+f.length,length:0},f=g.slice(0,b.start)+f+g.slice(b.end),i.beforePasteState=null);var S=DE(i.maskOptions,f,w,g,b),T=S.enteredString,C=S.selection,j=S.value;if(ht(d)){var O=d({value:j,selection:C},{value:g,selection:b},T,i.getBeforeMaskedValueChangeConfig());j=O.value,C=O.selection}i.setInputValue(j),ht(i.props.onChange)&&i.props.onChange(m),i.isWindowsPhoneBrowser?i.setSelection(C.start,C.end,{deferred:!0}):i.setSelection(C.start,C.end)},i.onFocus=function(m){var v=i.props.beforeMaskedValueChange,b=i.maskOptions,d=b.mask,f=b.prefix;if(i.focused=!0,i.mounted=!0,d){if(i.value)Mi(i.maskOptions,i.value)<i.maskOptions.mask.length&&i.setCursorToEnd();else{var g=xn(i.maskOptions,f),w=xn(i.maskOptions,g),S=Mi(i.maskOptions,w),T=Ui(i.maskOptions,S),C={start:T,end:T};if(ht(v)){var j=v({value:w,selection:C},{value:i.value,selection:null},null,i.getBeforeMaskedValueChangeConfig());w=j.value,C=j.selection}var O=w!==i.getInputValue();O&&i.setInputValue(w),O&&ht(i.props.onChange)&&i.props.onChange(m),i.setSelection(C.start,C.end)}i.runSaveSelectionLoop()}ht(i.props.onFocus)&&i.props.onFocus(m)},i.onBlur=function(m){var v=i.props.beforeMaskedValueChange,b=i.maskOptions.mask;if(i.stopSaveSelectionLoop(),i.focused=!1,b&&!i.props.alwaysShowMask&&Hp(i.maskOptions,i.value)){var d="";ht(v)&&(d=v({value:d,selection:null},{value:i.value,selection:i.previousSelection},null,i.getBeforeMaskedValueChangeConfig()).value);var f=d!==i.getInputValue();f&&i.setInputValue(d),f&&ht(i.props.onChange)&&i.props.onChange(m)}ht(i.props.onBlur)&&i.props.onBlur(m)},i.onMouseDown=function(m){if(!i.focused&&document.addEventListener){i.mouseDownX=m.clientX,i.mouseDownY=m.clientY,i.mouseDownTime=new Date().getTime();var v=function b(d){if(document.removeEventListener("mouseup",b),i.focused){var f=Math.abs(d.clientX-i.mouseDownX),g=Math.abs(d.clientY-i.mouseDownY),w=Math.max(f,g),S=new Date().getTime()-i.mouseDownTime;(w<=10&&S<=200||w<=5&&S<=300)&&i.setCursorToEnd()}};document.addEventListener("mouseup",v)}ht(i.props.onMouseDown)&&i.props.onMouseDown(m)},i.onPaste=function(m){ht(i.props.onPaste)&&i.props.onPaste(m),m.defaultPrevented||(i.beforePasteState={value:i.getInputValue(),selection:i.getSelection()},i.setInputValue(""))},i.handleRef=function(m){i.props.children==null&&ht(i.props.inputRef)&&i.props.inputRef(m)};var o=r.mask,a=r.maskChar,l=r.formatChars,s=r.alwaysShowMask,u=r.beforeMaskedValueChange,p=r.defaultValue,h=r.value;i.maskOptions=Bp(o,a,l),p==null&&(p=""),h==null&&(h=p);var x=Ll(h);if(i.maskOptions.mask&&(s||x)&&(x=xn(i.maskOptions,x),ht(u))){var y=r.value;r.value==null&&(y=p),x=u({value:x,selection:null},{value:y=Ll(y),selection:null},null,i.getBeforeMaskedValueChangeConfig()).value}return i.value=x,i}CE(t,e);var n=t.prototype;return n.componentDidMount=function(){this.mounted=!0,this.getInputDOMNode()&&(this.isWindowsPhoneBrowser=zE(),this.maskOptions.mask&&this.getInputValue()!==this.value&&this.setInputValue(this.value))},n.componentDidUpdate=function(){var r=this.previousSelection,i=this.props,o=i.beforeMaskedValueChange,a=i.alwaysShowMask,l=i.mask,s=i.maskChar,u=i.formatChars,p=this.maskOptions,h=a||this.isFocused(),x=this.props.value!=null,y=x?Ll(this.props.value):this.value,m=r?r.start:null;if(this.maskOptions=Bp(l,s,u),this.maskOptions.mask){!p.mask&&this.isFocused()&&this.runSaveSelectionLoop();var v=this.maskOptions.mask&&this.maskOptions.mask!==p.mask;if(p.mask||x||(y=this.getInputValue()),(v||this.maskOptions.mask&&(y||h))&&(y=xn(this.maskOptions,y)),v){var b=Mi(this.maskOptions,y);(m===null||b<m)&&(m=tv(this.maskOptions,y)?b:Ui(this.maskOptions,b))}!this.maskOptions.mask||!Hp(this.maskOptions,y)||h||x&&this.props.value||(y="");var d={start:m,end:m};if(ht(o)){var f=o({value:y,selection:d},{value:this.value,selection:this.previousSelection},null,this.getBeforeMaskedValueChangeConfig());y=f.value,d=f.selection}this.value=y;var g=this.getInputValue()!==this.value;g?(this.setInputValue(this.value),this.forceUpdate()):v&&this.forceUpdate();var w=!1;d.start!=null&&d.end!=null&&(w=!r||r.start!==d.start||r.end!==d.end),(w||g)&&this.setSelection(d.start,d.end)}else p.mask&&(this.stopSaveSelectionLoop(),this.forceUpdate())},n.componentWillUnmount=function(){this.mounted=!1,this.selectionDeferId!==null&&Dl(this.selectionDeferId),this.stopSaveSelectionLoop()},n.render=function(){var r,i=this.props,o=(i.mask,i.alwaysShowMask,i.maskChar,i.formatChars,i.inputRef,i.beforeMaskedValueChange,i.children),a=PE(i,["mask","alwaysShowMask","maskChar","formatChars","inputRef","beforeMaskedValueChange","children"]);if(o){ht(o)||Up(!1);var l=["onChange","onPaste","onMouseDown","onFocus","onBlur","value","disabled","readOnly"],s=Gu({},a);l.forEach(function(p){return delete s[p]}),r=o(s),l.filter(function(p){return r.props[p]!=null&&r.props[p]!==a[p]}).length&&Up(!1)}else r=Il.createElement("input",Gu({ref:this.handleRef},a));var u={onFocus:this.onFocus,onBlur:this.onBlur};return this.maskOptions.mask&&(a.disabled||a.readOnly||(u.onChange=this.onChange,u.onPaste=this.onPaste,u.onMouseDown=this.onMouseDown),a.value!=null&&(u.value=this.value)),r=Il.cloneElement(r,u)},t}(Il.Component),VE=NE;ev.exports=VE;var UE=ev.exports;const WE=oi(UE),BE=P.section`
  padding-top: 40px;
  padding-bottom: 40px;

  @media screen and (min-width: 1920px) {
    padding-top: 80px;
    padding-bottom: 80px;
  }
`,HE=P.div`
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
`,$E=P.h2`
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
`,YE=P.div`
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
`,Go=P.img`
  width: 100%;
  height: 100%;
`,XE=P.div`
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
`,QE=P.h3`
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
`,KE=P.form`
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  gap: 8px;
  align-self: stretch;
`,Yp=P.label`
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
`,JE=P(hn)`
  vertical-align: super;
`,Xp=P.input`
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
`,qE=P.div`
  display: flex;
  flex-direction: column;
  gap: 8px;
  width: 100%;

  @media screen and (min-width: 1440px) {
    flex-direction: row;
  }
`,Qp=P.label`
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
`,GE=P(WE)`
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
`,ZE=P.label`
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
    gap: 10px 4px;
    line-height: 1.2;
  }

  @media screen and (min-width: 1920px) {
    height: 196px;
    gap: 4px 4px;
    font-size: 16px;
    line-height: 1.5;
  }
`,eC=P.textarea`
  display: flex;
  padding: 16px;
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
`,ji=P.p`
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
`,tC=P.button`
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
`;var wo=e=>e.type==="checkbox",Wr=e=>e instanceof Date,ct=e=>e==null;const rv=e=>typeof e=="object";var He=e=>!ct(e)&&!Array.isArray(e)&&rv(e)&&!Wr(e),iv=e=>He(e)&&e.target?wo(e.target)?e.target.checked:e.target.value:e,nC=e=>e.substring(0,e.search(/\.\d+(\.|$)/))||e,ov=(e,t)=>e.has(nC(t)),rC=e=>{const t=e.constructor&&e.constructor.prototype;return He(t)&&t.hasOwnProperty("isPrototypeOf")},gd=typeof window<"u"&&typeof window.HTMLElement<"u"&&typeof document<"u";function Ht(e){let t;const n=Array.isArray(e);if(e instanceof Date)t=new Date(e);else if(e instanceof Set)t=new Set(e);else if(!(gd&&(e instanceof Blob||e instanceof FileList))&&(n||He(e)))if(t=n?[]:{},!n&&!rC(e))t=e;else for(const r in e)e.hasOwnProperty(r)&&(t[r]=Ht(e[r]));else return e;return t}var bo=e=>Array.isArray(e)?e.filter(Boolean):[],De=e=>e===void 0,H=(e,t,n)=>{if(!t||!He(e))return n;const r=bo(t.split(/[,[\].]+?/)).reduce((i,o)=>ct(i)?i:i[o],e);return De(r)||r===e?De(e[t])?n:e[t]:r},Lt=e=>typeof e=="boolean";const ts={BLUR:"blur",FOCUS_OUT:"focusout",CHANGE:"change"},Qt={onBlur:"onBlur",onChange:"onChange",onSubmit:"onSubmit",onTouched:"onTouched",all:"all"},pn={max:"max",min:"min",maxLength:"maxLength",minLength:"minLength",pattern:"pattern",required:"required",validate:"validate"},iC=ke.createContext(null),xd=()=>ke.useContext(iC);var av=(e,t,n,r=!0)=>{const i={defaultValues:t._defaultValues};for(const o in e)Object.defineProperty(i,o,{get:()=>{const a=o;return t._proxyFormState[a]!==Qt.all&&(t._proxyFormState[a]=!r||Qt.all),n&&(n[a]=!0),e[a]}});return i},At=e=>He(e)&&!Object.keys(e).length,sv=(e,t,n,r)=>{n(e);const{name:i,...o}=e;return At(o)||Object.keys(o).length>=Object.keys(t).length||Object.keys(o).find(a=>t[a]===(!r||Qt.all))},wa=e=>Array.isArray(e)?e:[e],lv=(e,t,n)=>!e||!t||e===t||wa(e).some(r=>r&&(n?r===t:r.startsWith(t)||t.startsWith(r)));function vd(e){const t=ke.useRef(e);t.current=e,ke.useEffect(()=>{const n=!e.disabled&&t.current.subject&&t.current.subject.subscribe({next:t.current.next});return()=>{n&&n.unsubscribe()}},[e.disabled])}function oC(e){const t=xd(),{control:n=t.control,disabled:r,name:i,exact:o}=e||{},[a,l]=ke.useState(n._formState),s=ke.useRef(!0),u=ke.useRef({isDirty:!1,isLoading:!1,dirtyFields:!1,touchedFields:!1,isValidating:!1,isValid:!1,errors:!1}),p=ke.useRef(i);return p.current=i,vd({disabled:r,next:h=>s.current&&lv(p.current,h.name,o)&&sv(h,u.current,n._updateFormState)&&l({...n._formState,...h}),subject:n._subjects.state}),ke.useEffect(()=>(s.current=!0,u.current.isValid&&n._updateValid(!0),()=>{s.current=!1}),[n]),av(a,n,u.current,!1)}var ln=e=>typeof e=="string",uv=(e,t,n,r,i)=>ln(e)?(r&&t.watch.add(e),H(n,e,i)):Array.isArray(e)?e.map(o=>(r&&t.watch.add(o),H(n,o))):(r&&(t.watchAll=!0),n);function aC(e){const t=xd(),{control:n=t.control,name:r,defaultValue:i,disabled:o,exact:a}=e||{},l=ke.useRef(r);l.current=r,vd({disabled:o,subject:n._subjects.values,next:p=>{lv(l.current,p.name,a)&&u(Ht(uv(l.current,n._names,p.values||n._formValues,!1,i)))}});const[s,u]=ke.useState(n._getWatch(r,i));return ke.useEffect(()=>n._removeUnmounted()),s}var yd=e=>/^\w*$/.test(e),cv=e=>bo(e.replace(/["|']|\]/g,"").split(/\.|\[/)),Oe=(e,t,n)=>{let r=-1;const i=yd(t)?[t]:cv(t),o=i.length,a=o-1;for(;++r<o;){const l=i[r];let s=n;if(r!==a){const u=e[l];s=He(u)||Array.isArray(u)?u:isNaN(+i[r+1])?{}:[]}e[l]=s,e=e[l]}return e};function sC(e){const t=xd(),{name:n,disabled:r,control:i=t.control,shouldUnregister:o}=e,a=ov(i._names.array,n),l=aC({control:i,name:n,defaultValue:H(i._formValues,n,H(i._defaultValues,n,e.defaultValue)),exact:!0}),s=oC({control:i,name:n}),u=ke.useRef(i.register(n,{...e.rules,value:l,...Lt(e.disabled)?{disabled:e.disabled}:{}}));return ke.useEffect(()=>{const p=i._options.shouldUnregister||o,h=(x,y)=>{const m=H(i._fields,x);m&&(m._f.mount=y)};if(h(n,!0),p){const x=Ht(H(i._options.defaultValues,n));Oe(i._defaultValues,n,x),De(H(i._formValues,n))&&Oe(i._formValues,n,x)}return()=>{(a?p&&!i._state.action:p)?i.unregister(n):h(n,!1)}},[n,i,a,o]),ke.useEffect(()=>{H(i._fields,n)&&i._updateDisabledField({disabled:r,fields:i._fields,name:n,value:H(i._fields,n)._f.value})},[r,n,i]),{field:{name:n,value:l,...Lt(r)||Lt(s.disabled)?{disabled:s.disabled||r}:{},onChange:ke.useCallback(p=>u.current.onChange({target:{value:iv(p),name:n},type:ts.CHANGE}),[n]),onBlur:ke.useCallback(()=>u.current.onBlur({target:{value:H(i._formValues,n),name:n},type:ts.BLUR}),[n,i]),ref:p=>{const h=H(i._fields,n);h&&p&&(h._f.ref={focus:()=>p.focus(),select:()=>p.select(),setCustomValidity:x=>p.setCustomValidity(x),reportValidity:()=>p.reportValidity()})}},formState:s,fieldState:Object.defineProperties({},{invalid:{enumerable:!0,get:()=>!!H(s.errors,n)},isDirty:{enumerable:!0,get:()=>!!H(s.dirtyFields,n)},isTouched:{enumerable:!0,get:()=>!!H(s.touchedFields,n)},error:{enumerable:!0,get:()=>H(s.errors,n)}})}}const lC=e=>e.render(sC(e));var uC=(e,t,n,r,i)=>t?{...n[e],types:{...n[e]&&n[e].types?n[e].types:{},[r]:i||!0}}:{},Kp=e=>({isOnSubmit:!e||e===Qt.onSubmit,isOnBlur:e===Qt.onBlur,isOnChange:e===Qt.onChange,isOnAll:e===Qt.all,isOnTouch:e===Qt.onTouched}),Jp=(e,t,n)=>!n&&(t.watchAll||t.watch.has(e)||[...t.watch].some(r=>e.startsWith(r)&&/^\.\w+/.test(e.slice(r.length))));const Wi=(e,t,n,r)=>{for(const i of n||Object.keys(e)){const o=H(e,i);if(o){const{_f:a,...l}=o;if(a){if(a.refs&&a.refs[0]&&t(a.refs[0],i)&&!r)break;if(a.ref&&t(a.ref,a.name)&&!r)break;Wi(l,t)}else He(l)&&Wi(l,t)}}};var cC=(e,t,n)=>{const r=bo(H(e,n));return Oe(r,"root",t[n]),Oe(e,n,r),e},wd=e=>e.type==="file",Yn=e=>typeof e=="function",ns=e=>{if(!gd)return!1;const t=e?e.ownerDocument:0;return e instanceof(t&&t.defaultView?t.defaultView.HTMLElement:HTMLElement)},ba=e=>ln(e),bd=e=>e.type==="radio",rs=e=>e instanceof RegExp;const qp={value:!1,isValid:!1},Gp={value:!0,isValid:!0};var dv=e=>{if(Array.isArray(e)){if(e.length>1){const t=e.filter(n=>n&&n.checked&&!n.disabled).map(n=>n.value);return{value:t,isValid:!!t.length}}return e[0].checked&&!e[0].disabled?e[0].attributes&&!De(e[0].attributes.value)?De(e[0].value)||e[0].value===""?Gp:{value:e[0].value,isValid:!0}:Gp:qp}return qp};const Zp={isValid:!1,value:null};var fv=e=>Array.isArray(e)?e.reduce((t,n)=>n&&n.checked&&!n.disabled?{isValid:!0,value:n.value}:t,Zp):Zp;function eh(e,t,n="validate"){if(ba(e)||Array.isArray(e)&&e.every(ba)||Lt(e)&&!e)return{type:n,message:ba(e)?e:"",ref:t}}var Tr=e=>He(e)&&!rs(e)?e:{value:e,message:""},th=async(e,t,n,r,i)=>{const{ref:o,refs:a,required:l,maxLength:s,minLength:u,min:p,max:h,pattern:x,validate:y,name:m,valueAsNumber:v,mount:b,disabled:d}=e._f,f=H(t,m);if(!b||d)return{};const g=a?a[0]:o,w=R=>{r&&g.reportValidity&&(g.setCustomValidity(Lt(R)?"":R||""),g.reportValidity())},S={},T=bd(o),C=wo(o),j=T||C,O=(v||wd(o))&&De(o.value)&&De(f)||ns(o)&&o.value===""||f===""||Array.isArray(f)&&!f.length,_=uC.bind(null,m,n,S),M=(R,I,W,$=pn.maxLength,ee=pn.minLength)=>{const ge=R?I:W;S[m]={type:R?$:ee,message:ge,ref:o,..._(R?$:ee,ge)}};if(i?!Array.isArray(f)||!f.length:l&&(!j&&(O||ct(f))||Lt(f)&&!f||C&&!dv(a).isValid||T&&!fv(a).isValid)){const{value:R,message:I}=ba(l)?{value:!!l,message:l}:Tr(l);if(R&&(S[m]={type:pn.required,message:I,ref:g,..._(pn.required,I)},!n))return w(I),S}if(!O&&(!ct(p)||!ct(h))){let R,I;const W=Tr(h),$=Tr(p);if(!ct(f)&&!isNaN(f)){const ee=o.valueAsNumber||f&&+f;ct(W.value)||(R=ee>W.value),ct($.value)||(I=ee<$.value)}else{const ee=o.valueAsDate||new Date(f),ge=K=>new Date(new Date().toDateString()+" "+K),N=o.type=="time",Q=o.type=="week";ln(W.value)&&f&&(R=N?ge(f)>ge(W.value):Q?f>W.value:ee>new Date(W.value)),ln($.value)&&f&&(I=N?ge(f)<ge($.value):Q?f<$.value:ee<new Date($.value))}if((R||I)&&(M(!!R,W.message,$.message,pn.max,pn.min),!n))return w(S[m].message),S}if((s||u)&&!O&&(ln(f)||i&&Array.isArray(f))){const R=Tr(s),I=Tr(u),W=!ct(R.value)&&f.length>+R.value,$=!ct(I.value)&&f.length<+I.value;if((W||$)&&(M(W,R.message,I.message),!n))return w(S[m].message),S}if(x&&!O&&ln(f)){const{value:R,message:I}=Tr(x);if(rs(R)&&!f.match(R)&&(S[m]={type:pn.pattern,message:I,ref:o,..._(pn.pattern,I)},!n))return w(I),S}if(y){if(Yn(y)){const R=await y(f,t),I=eh(R,g);if(I&&(S[m]={...I,..._(pn.validate,I.message)},!n))return w(I.message),S}else if(He(y)){let R={};for(const I in y){if(!At(R)&&!n)break;const W=eh(await y[I](f,t),g,I);W&&(R={...W,..._(I,W.message)},w(W.message),n&&(S[m]=R))}if(!At(R)&&(S[m]={ref:g,...R},!n))return S}}return w(!0),S};function dC(e,t){const n=t.slice(0,-1).length;let r=0;for(;r<n;)e=De(e)?r++:e[t[r++]];return e}function fC(e){for(const t in e)if(e.hasOwnProperty(t)&&!De(e[t]))return!1;return!0}function qe(e,t){const n=Array.isArray(t)?t:yd(t)?[t]:cv(t),r=n.length===1?e:dC(e,n),i=n.length-1,o=n[i];return r&&delete r[o],i!==0&&(He(r)&&At(r)||Array.isArray(r)&&fC(r))&&qe(e,n.slice(0,-1)),e}var zl=()=>{let e=[];return{get observers(){return e},next:i=>{for(const o of e)o.next&&o.next(i)},subscribe:i=>(e.push(i),{unsubscribe:()=>{e=e.filter(o=>o!==i)}}),unsubscribe:()=>{e=[]}}},is=e=>ct(e)||!rv(e);function dr(e,t){if(is(e)||is(t))return e===t;if(Wr(e)&&Wr(t))return e.getTime()===t.getTime();const n=Object.keys(e),r=Object.keys(t);if(n.length!==r.length)return!1;for(const i of n){const o=e[i];if(!r.includes(i))return!1;if(i!=="ref"){const a=t[i];if(Wr(o)&&Wr(a)||He(o)&&He(a)||Array.isArray(o)&&Array.isArray(a)?!dr(o,a):o!==a)return!1}}return!0}var pv=e=>e.type==="select-multiple",pC=e=>bd(e)||wo(e),Fl=e=>ns(e)&&e.isConnected,hv=e=>{for(const t in e)if(Yn(e[t]))return!0;return!1};function os(e,t={}){const n=Array.isArray(e);if(He(e)||n)for(const r in e)Array.isArray(e[r])||He(e[r])&&!hv(e[r])?(t[r]=Array.isArray(e[r])?[]:{},os(e[r],t[r])):ct(e[r])||(t[r]=!0);return t}function mv(e,t,n){const r=Array.isArray(e);if(He(e)||r)for(const i in e)Array.isArray(e[i])||He(e[i])&&!hv(e[i])?De(t)||is(n[i])?n[i]=Array.isArray(e[i])?os(e[i],[]):{...os(e[i])}:mv(e[i],ct(t)?{}:t[i],n[i]):n[i]=!dr(e[i],t[i]);return n}var Nl=(e,t)=>mv(e,t,os(t)),gv=(e,{valueAsNumber:t,valueAsDate:n,setValueAs:r})=>De(e)?e:t?e===""?NaN:e&&+e:n&&ln(e)?new Date(e):r?r(e):e;function Vl(e){const t=e.ref;if(!(e.refs?e.refs.every(n=>n.disabled):t.disabled))return wd(t)?t.files:bd(t)?fv(e.refs).value:pv(t)?[...t.selectedOptions].map(({value:n})=>n):wo(t)?dv(e.refs).value:gv(De(t.value)?e.ref.value:t.value,e)}var hC=(e,t,n,r)=>{const i={};for(const o of e){const a=H(t,o);a&&Oe(i,o,a._f)}return{criteriaMode:n,names:[...e],fields:i,shouldUseNativeValidation:r}},Oi=e=>De(e)?e:rs(e)?e.source:He(e)?rs(e.value)?e.value.source:e.value:e,mC=e=>e.mount&&(e.required||e.min||e.max||e.maxLength||e.minLength||e.pattern||e.validate);function nh(e,t,n){const r=H(e,n);if(r||yd(n))return{error:r,name:n};const i=n.split(".");for(;i.length;){const o=i.join("."),a=H(t,o),l=H(e,o);if(a&&!Array.isArray(a)&&n!==o)return{name:n};if(l&&l.type)return{name:o,error:l};i.pop()}return{name:n}}var gC=(e,t,n,r,i)=>i.isOnAll?!1:!n&&i.isOnTouch?!(t||e):(n?r.isOnBlur:i.isOnBlur)?!e:(n?r.isOnChange:i.isOnChange)?e:!0,xC=(e,t)=>!bo(H(e,t)).length&&qe(e,t);const vC={mode:Qt.onSubmit,reValidateMode:Qt.onChange,shouldFocusError:!0};function yC(e={},t){let n={...vC,...e},r={submitCount:0,isDirty:!1,isLoading:Yn(n.defaultValues),isValidating:!1,isSubmitted:!1,isSubmitting:!1,isSubmitSuccessful:!1,isValid:!1,touchedFields:{},dirtyFields:{},errors:n.errors||{},disabled:!1},i={},o=He(n.defaultValues)||He(n.values)?Ht(n.defaultValues||n.values)||{}:{},a=n.shouldUnregister?{}:Ht(o),l={action:!1,mount:!1,watch:!1},s={mount:new Set,unMount:new Set,array:new Set,watch:new Set},u,p=0;const h={isDirty:!1,dirtyFields:!1,touchedFields:!1,isValidating:!1,isValid:!1,errors:!1},x={values:zl(),array:zl(),state:zl()},y=e.resetOptions&&e.resetOptions.keepDirtyValues,m=Kp(n.mode),v=Kp(n.reValidateMode),b=n.criteriaMode===Qt.all,d=k=>E=>{clearTimeout(p),p=setTimeout(k,E)},f=async k=>{if(h.isValid||k){const E=n.resolver?At((await _()).errors):await R(i,!0);E!==r.isValid&&x.state.next({isValid:E})}},g=k=>h.isValidating&&x.state.next({isValidating:k}),w=(k,E=[],A,B,U=!0,V=!0)=>{if(B&&A){if(l.action=!0,V&&Array.isArray(H(i,k))){const te=A(H(i,k),B.argA,B.argB);U&&Oe(i,k,te)}if(V&&Array.isArray(H(r.errors,k))){const te=A(H(r.errors,k),B.argA,B.argB);U&&Oe(r.errors,k,te),xC(r.errors,k)}if(h.touchedFields&&V&&Array.isArray(H(r.touchedFields,k))){const te=A(H(r.touchedFields,k),B.argA,B.argB);U&&Oe(r.touchedFields,k,te)}h.dirtyFields&&(r.dirtyFields=Nl(o,a)),x.state.next({name:k,isDirty:W(k,E),dirtyFields:r.dirtyFields,errors:r.errors,isValid:r.isValid})}else Oe(a,k,E)},S=(k,E)=>{Oe(r.errors,k,E),x.state.next({errors:r.errors})},T=k=>{r.errors=k,x.state.next({errors:r.errors,isValid:!1})},C=(k,E,A,B)=>{const U=H(i,k);if(U){const V=H(a,k,De(A)?H(o,k):A);De(V)||B&&B.defaultChecked||E?Oe(a,k,E?V:Vl(U._f)):ge(k,V),l.mount&&f()}},j=(k,E,A,B,U)=>{let V=!1,te=!1;const je={name:k},Ye=!!(H(i,k)&&H(i,k)._f.disabled);if(!A||B){h.isDirty&&(te=r.isDirty,r.isDirty=je.isDirty=W(),V=te!==je.isDirty);const Zt=Ye||dr(H(o,k),E);te=!!(!Ye&&H(r.dirtyFields,k)),Zt||Ye?qe(r.dirtyFields,k):Oe(r.dirtyFields,k,!0),je.dirtyFields=r.dirtyFields,V=V||h.dirtyFields&&te!==!Zt}if(A){const Zt=H(r.touchedFields,k);Zt||(Oe(r.touchedFields,k,A),je.touchedFields=r.touchedFields,V=V||h.touchedFields&&Zt!==A)}return V&&U&&x.state.next(je),V?je:{}},O=(k,E,A,B)=>{const U=H(r.errors,k),V=h.isValid&&Lt(E)&&r.isValid!==E;if(e.delayError&&A?(u=d(()=>S(k,A)),u(e.delayError)):(clearTimeout(p),u=null,A?Oe(r.errors,k,A):qe(r.errors,k)),(A?!dr(U,A):U)||!At(B)||V){const te={...B,...V&&Lt(E)?{isValid:E}:{},errors:r.errors,name:k};r={...r,...te},x.state.next(te)}g(!1)},_=async k=>n.resolver(a,n.context,hC(k||s.mount,i,n.criteriaMode,n.shouldUseNativeValidation)),M=async k=>{const{errors:E}=await _(k);if(k)for(const A of k){const B=H(E,A);B?Oe(r.errors,A,B):qe(r.errors,A)}else r.errors=E;return E},R=async(k,E,A={valid:!0})=>{for(const B in k){const U=k[B];if(U){const{_f:V,...te}=U;if(V){const je=s.array.has(V.name),Ye=await th(U,a,b,n.shouldUseNativeValidation&&!E,je);if(Ye[V.name]&&(A.valid=!1,E))break;!E&&(H(Ye,V.name)?je?cC(r.errors,Ye,V.name):Oe(r.errors,V.name,Ye[V.name]):qe(r.errors,V.name))}te&&await R(te,E,A)}}return A.valid},I=()=>{for(const k of s.unMount){const E=H(i,k);E&&(E._f.refs?E._f.refs.every(A=>!Fl(A)):!Fl(E._f.ref))&&Je(k)}s.unMount=new Set},W=(k,E)=>(k&&E&&Oe(a,k,E),!dr(Ce(),o)),$=(k,E,A)=>uv(k,s,{...l.mount?a:De(E)?o:ln(k)?{[k]:E}:E},A,E),ee=k=>bo(H(l.mount?a:o,k,e.shouldUnregister?H(o,k,[]):[])),ge=(k,E,A={})=>{const B=H(i,k);let U=E;if(B){const V=B._f;V&&(!V.disabled&&Oe(a,k,gv(E,V)),U=ns(V.ref)&&ct(E)?"":E,pv(V.ref)?[...V.ref.options].forEach(te=>te.selected=U.includes(te.value)):V.refs?wo(V.ref)?V.refs.length>1?V.refs.forEach(te=>(!te.defaultChecked||!te.disabled)&&(te.checked=Array.isArray(U)?!!U.find(je=>je===te.value):U===te.value)):V.refs[0]&&(V.refs[0].checked=!!U):V.refs.forEach(te=>te.checked=te.value===U):wd(V.ref)?V.ref.value="":(V.ref.value=U,V.ref.type||x.values.next({name:k,values:{...a}})))}(A.shouldDirty||A.shouldTouch)&&j(k,U,A.shouldTouch,A.shouldDirty,!0),A.shouldValidate&&re(k)},N=(k,E,A)=>{for(const B in E){const U=E[B],V=`${k}.${B}`,te=H(i,V);(s.array.has(k)||!is(U)||te&&!te._f)&&!Wr(U)?N(V,U,A):ge(V,U,A)}},Q=(k,E,A={})=>{const B=H(i,k),U=s.array.has(k),V=Ht(E);Oe(a,k,V),U?(x.array.next({name:k,values:{...a}}),(h.isDirty||h.dirtyFields)&&A.shouldDirty&&x.state.next({name:k,dirtyFields:Nl(o,a),isDirty:W(k,V)})):B&&!B._f&&!ct(V)?N(k,V,A):ge(k,V,A),Jp(k,s)&&x.state.next({...r}),x.values.next({name:k,values:{...a}}),!l.mount&&t()},K=async k=>{const E=k.target;let A=E.name,B=!0;const U=H(i,A),V=()=>E.type?Vl(U._f):iv(k),te=je=>{B=Number.isNaN(je)||je===H(a,A,je)};if(U){let je,Ye;const Zt=V(),kr=k.type===ts.BLUR||k.type===ts.FOCUS_OUT,xv=!mC(U._f)&&!n.resolver&&!H(r.errors,A)&&!U._f.deps||gC(kr,H(r.touchedFields,A),r.isSubmitted,v,m),Bs=Jp(A,s,kr);Oe(a,A,Zt),kr?(U._f.onBlur&&U._f.onBlur(k),u&&u(0)):U._f.onChange&&U._f.onChange(k);const Hs=j(A,Zt,kr,!1),vv=!At(Hs)||Bs;if(!kr&&x.values.next({name:A,type:k.type,values:{...a}}),xv)return h.isValid&&f(),vv&&x.state.next({name:A,...Bs?{}:Hs});if(!kr&&Bs&&x.state.next({...r}),g(!0),n.resolver){const{errors:Sd}=await _([A]);if(te(Zt),B){const yv=nh(r.errors,i,A),kd=nh(Sd,i,yv.name||A);je=kd.error,A=kd.name,Ye=At(Sd)}}else je=(await th(U,a,b,n.shouldUseNativeValidation))[A],te(Zt),B&&(je?Ye=!1:h.isValid&&(Ye=await R(i,!0)));B&&(U._f.deps&&re(U._f.deps),O(A,Ye,je,Hs))}},de=(k,E)=>{if(H(r.errors,E)&&k.focus)return k.focus(),1},re=async(k,E={})=>{let A,B;const U=wa(k);if(g(!0),n.resolver){const V=await M(De(k)?k:U);A=At(V),B=k?!U.some(te=>H(V,te)):A}else k?(B=(await Promise.all(U.map(async V=>{const te=H(i,V);return await R(te&&te._f?{[V]:te}:te)}))).every(Boolean),!(!B&&!r.isValid)&&f()):B=A=await R(i);return x.state.next({...!ln(k)||h.isValid&&A!==r.isValid?{}:{name:k},...n.resolver||!k?{isValid:A}:{},errors:r.errors,isValidating:!1}),E.shouldFocus&&!B&&Wi(i,de,k?U:s.mount),B},Ce=k=>{const E={...o,...l.mount?a:{}};return De(k)?E:ln(k)?H(E,k):k.map(A=>H(E,A))},Se=(k,E)=>({invalid:!!H((E||r).errors,k),isDirty:!!H((E||r).dirtyFields,k),isTouched:!!H((E||r).touchedFields,k),error:H((E||r).errors,k)}),$e=k=>{k&&wa(k).forEach(E=>qe(r.errors,E)),x.state.next({errors:k?r.errors:{}})},pe=(k,E,A)=>{const B=(H(i,k,{_f:{}})._f||{}).ref;Oe(r.errors,k,{...E,ref:B}),x.state.next({name:k,errors:r.errors,isValid:!1}),A&&A.shouldFocus&&B&&B.focus&&B.focus()},_e=(k,E)=>Yn(k)?x.values.subscribe({next:A=>k($(void 0,E),A)}):$(k,E,!0),Je=(k,E={})=>{for(const A of k?wa(k):s.mount)s.mount.delete(A),s.array.delete(A),E.keepValue||(qe(i,A),qe(a,A)),!E.keepError&&qe(r.errors,A),!E.keepDirty&&qe(r.dirtyFields,A),!E.keepTouched&&qe(r.touchedFields,A),!n.shouldUnregister&&!E.keepDefaultValue&&qe(o,A);x.values.next({values:{...a}}),x.state.next({...r,...E.keepDirty?{isDirty:W()}:{}}),!E.keepIsValid&&f()},_t=({disabled:k,name:E,field:A,fields:B,value:U})=>{if(Lt(k)){const V=k?void 0:De(U)?Vl(A?A._f:H(B,E)._f):U;Oe(a,E,V),j(E,V,!1,!1,!0)}},F=(k,E={})=>{let A=H(i,k);const B=Lt(E.disabled);return Oe(i,k,{...A||{},_f:{...A&&A._f?A._f:{ref:{name:k}},name:k,mount:!0,...E}}),s.mount.add(k),A?_t({field:A,disabled:E.disabled,name:k,value:E.value}):C(k,!0,E.value),{...B?{disabled:E.disabled}:{},...n.progressive?{required:!!E.required,min:Oi(E.min),max:Oi(E.max),minLength:Oi(E.minLength),maxLength:Oi(E.maxLength),pattern:Oi(E.pattern)}:{},name:k,onChange:K,onBlur:K,ref:U=>{if(U){F(k,E),A=H(i,k);const V=De(U.value)&&U.querySelectorAll&&U.querySelectorAll("input,select,textarea")[0]||U,te=pC(V),je=A._f.refs||[];if(te?je.find(Ye=>Ye===V):V===A._f.ref)return;Oe(i,k,{_f:{...A._f,...te?{refs:[...je.filter(Fl),V,...Array.isArray(H(o,k))?[{}]:[]],ref:{type:V.type,name:k}}:{ref:V}}}),C(k,!1,void 0,V)}else A=H(i,k,{}),A._f&&(A._f.mount=!1),(n.shouldUnregister||E.shouldUnregister)&&!(ov(s.array,k)&&l.action)&&s.unMount.add(k)}}},Y=()=>n.shouldFocusError&&Wi(i,de,s.mount),ae=k=>{Lt(k)&&(x.state.next({disabled:k}),Wi(i,(E,A)=>{let B=k;const U=H(i,A);U&&Lt(U._f.disabled)&&(B||(B=U._f.disabled)),E.disabled=B},0,!1))},oe=(k,E)=>async A=>{A&&(A.preventDefault&&A.preventDefault(),A.persist&&A.persist());let B=Ht(a);if(x.state.next({isSubmitting:!0}),n.resolver){const{errors:U,values:V}=await _();r.errors=U,B=V}else await R(i);qe(r.errors,"root"),At(r.errors)?(x.state.next({errors:{}}),await k(B,A)):(E&&await E({...r.errors},A),Y(),setTimeout(Y)),x.state.next({isSubmitted:!0,isSubmitting:!1,isSubmitSuccessful:At(r.errors),submitCount:r.submitCount+1,errors:r.errors})},ie=(k,E={})=>{H(i,k)&&(De(E.defaultValue)?Q(k,H(o,k)):(Q(k,E.defaultValue),Oe(o,k,E.defaultValue)),E.keepTouched||qe(r.touchedFields,k),E.keepDirty||(qe(r.dirtyFields,k),r.isDirty=E.defaultValue?W(k,H(o,k)):W()),E.keepError||(qe(r.errors,k),h.isValid&&f()),x.state.next({...r}))},le=(k,E={})=>{const A=k?Ht(k):o,B=Ht(A),U=k&&!At(k)?B:o;if(E.keepDefaultValues||(o=A),!E.keepValues){if(E.keepDirtyValues||y)for(const V of s.mount)H(r.dirtyFields,V)?Oe(U,V,H(a,V)):Q(V,H(U,V));else{if(gd&&De(k))for(const V of s.mount){const te=H(i,V);if(te&&te._f){const je=Array.isArray(te._f.refs)?te._f.refs[0]:te._f.ref;if(ns(je)){const Ye=je.closest("form");if(Ye){Ye.reset();break}}}}i={}}a=e.shouldUnregister?E.keepDefaultValues?Ht(o):{}:Ht(U),x.array.next({values:{...U}}),x.values.next({values:{...U}})}s={mount:new Set,unMount:new Set,array:new Set,watch:new Set,watchAll:!1,focus:""},!l.mount&&t(),l.mount=!h.isValid||!!E.keepIsValid,l.watch=!!e.shouldUnregister,x.state.next({submitCount:E.keepSubmitCount?r.submitCount:0,isDirty:E.keepDirty?r.isDirty:!!(E.keepDefaultValues&&!dr(k,o)),isSubmitted:E.keepIsSubmitted?r.isSubmitted:!1,dirtyFields:E.keepDirtyValues?r.dirtyFields:E.keepDefaultValues&&k?Nl(o,k):{},touchedFields:E.keepTouched?r.touchedFields:{},errors:E.keepErrors?r.errors:{},isSubmitSuccessful:E.keepIsSubmitSuccessful?r.isSubmitSuccessful:!1,isSubmitting:!1})},se=(k,E)=>le(Yn(k)?k(a):k,E);return{control:{register:F,unregister:Je,getFieldState:Se,handleSubmit:oe,setError:pe,_executeSchema:_,_getWatch:$,_getDirty:W,_updateValid:f,_removeUnmounted:I,_updateFieldArray:w,_updateDisabledField:_t,_getFieldArray:ee,_reset:le,_resetDefaultValues:()=>Yn(n.defaultValues)&&n.defaultValues().then(k=>{se(k,n.resetOptions),x.state.next({isLoading:!1})}),_updateFormState:k=>{r={...r,...k}},_disableForm:ae,_subjects:x,_proxyFormState:h,_setErrors:T,get _fields(){return i},get _formValues(){return a},get _state(){return l},set _state(k){l=k},get _defaultValues(){return o},get _names(){return s},set _names(k){s=k},get _formState(){return r},set _formState(k){r=k},get _options(){return n},set _options(k){n={...n,...k}}},trigger:re,register:F,handleSubmit:oe,watch:_e,setValue:Q,getValues:Ce,reset:se,resetField:ie,clearErrors:$e,unregister:Je,setError:pe,setFocus:(k,E={})=>{const A=H(i,k),B=A&&A._f;if(B){const U=B.refs?B.refs[0]:B.ref;U.focus&&(U.focus(),E.shouldSelect&&U.select())}},getFieldState:Se}}function wC(e={}){const t=ke.useRef(),n=ke.useRef(),[r,i]=ke.useState({isDirty:!1,isValidating:!1,isLoading:Yn(e.defaultValues),isSubmitted:!1,isSubmitting:!1,isSubmitSuccessful:!1,isValid:!1,submitCount:0,dirtyFields:{},touchedFields:{},errors:e.errors||{},disabled:!1,defaultValues:Yn(e.defaultValues)?void 0:e.defaultValues});t.current||(t.current={...yC(e,()=>i(a=>({...a}))),formState:r});const o=t.current.control;return o._options=e,vd({subject:o._subjects.state,next:a=>{sv(a,o._proxyFormState,o._updateFormState,!0)&&i({...o._formState})}}),ke.useEffect(()=>o._disableForm(e.disabled),[o,e.disabled]),ke.useEffect(()=>{if(o._proxyFormState.isDirty){const a=o._getDirty();a!==r.isDirty&&o._subjects.state.next({isDirty:a})}},[o,r.isDirty]),ke.useEffect(()=>{e.values&&!dr(e.values,n.current)?(o._reset(e.values,o._options.resetOptions),n.current=e.values,i(a=>({...a}))):o._resetDefaultValues()},[e.values,o]),ke.useEffect(()=>{e.errors&&o._setErrors(e.errors)},[e.errors,o]),ke.useEffect(()=>{o._state.mount||(o._updateValid(),o._state.mount=!0),o._state.watch&&(o._state.watch=!1,o._subjects.state.next({...o._formState})),o._removeUnmounted()}),t.current.formState=av(r,o),t.current}const bC={container:e=>({...e,width:"100%"}),control:(e,t)=>{const n=t.selectProps.errors;return{...e,display:"flex",height:"48px",padding:"12px 16px",alignItems:"center",flexShrink:"0",gap:"8px",alignSelf:"stretch",alignContent:"flex-start",borderRadius:"16px",outline:"none",border:`1px solid ${n?"var(--secondary-red)":"transparent"}`,backgroundColor:"var(--background-white)",boxShadow:"0px 0px 8px 0px rgba(27, 54, 65, 0.08)","&:hover":{boxShadow:"0px 0px 16px 0px rgba(27, 54, 65, 0.16)"},"&:focus":{outline:"none",border:"1px solid var(--typography-grey)",background:"var(--background-white)",boxShadow:"0px 0px 8px 0px rgba(27, 54, 65, 0.08)"},"@media screen and (min-width: 768px)":{height:"56px"},"@media screen and (min-width: 1440px)":{padding:"14px 16px"},"@media screen and (min-width: 1920px)":{padding:"12px 16px"}}},dropdownIndicator:e=>({...e,color:"#161717",padding:"0"}),indicatorSeparator:()=>({display:"none"}),option:e=>({...e,display:"flex",alignItems:"flex-start",fontSize:"14px",lineHeight:"1.43",fontWeight:"400",backgroundColor:"var(--background-white)",color:"#1B3641","&:hover":{backgroundColor:"rgba(27, 54, 65, 0.2)",fontWeight:"600"},"@media screen and (min-width: 768px)":{fontSize:"15px",lineHeight:"1.47"},"@media screen and (min-width: 1920px)":{fontSize:"16px",lineHeight:"1.5"}}),menu:e=>({...e,height:"auto",marginTop:"0",border:"none",borderRadius:"16px",boxShadow:"0px 0px 8px 0px rgba(27, 54, 65, 0.08)",color:"var(--primary-bluedark)",backgroundColor:"var(--background-white)"}),singleValue:e=>({...e,fontSize:"14px",fontWeight:"500",lineHeight:"1.43",textAlign:"start",flex:"1 0 0",color:"var(--primary-bluedark)","@media screen and (min-width: 768px)":{fontSize:"15px",lineHeight:"1.47"},"@media screen and (min-width: 1920px)":{fontSize:"16px",lineHeight:"1.5"}}),valueContainer:e=>({...e,padding:"0"})},SC=()=>{const e=L.useRef(),[t,n]=mE("key",{name:"",email:"",phone:"",service:"",comment:""}),{name:r,email:i,phone:o,service:a,comment:l}=t,[s,u]=L.useState(null),{register:p,handleSubmit:h,control:x,setValue:y,formState:{errors:m}}=wC({mode:"all",shouldFocusError:!1,defaultValues:t});L.useEffect(()=>{const f=localStorage.getItem("key")?JSON.parse(localStorage.getItem("key")).service:"",g=Fp.find(w=>w.value===f);u(g)},[]);const v=f=>{y("service",f),n({...t,service:f.value}),u(f)},b=f=>{n({...t,[f.target.name]:f.target.value})},d=async f=>{try{const g={...f,name:r.replace(/\s+/g," ").trim(),email:i.trim(),phone:f.phone.replace(/\D/g,"").slice(2),service:s==null?void 0:s.value};await wk.post("https://healthy-management.onrender.com/api/senddata",g),n({name:"",email:"",phone:"",comment:""}),u(null),zp("Вітаємо!","Ваша заявка успішно відправлена!","success",{buttons:!1,timer:3e3})}catch{zp("Вибачте!","При відправці заявки сталася помилка, спробуйте ще раз!","error",{buttons:!1,timer:3e3})}};return c.jsx(BE,{className:"container",id:"contact",children:c.jsxs(HE,{children:[c.jsx($E,{children:"Контакт"}),c.jsxs(YE,{children:[c.jsxs("div",{children:[c.jsx(J,{maxWidth:767,children:c.jsx(Go,{srcSet:`${kE} 2x, ${Vp} 1x`,sizes:"(max-width: 767px) 100vw",src:Vp,alt:"notebook",loading:"lazy"})}),c.jsx(J,{minWidth:768,maxWidth:1439,children:c.jsx(Go,{srcSet:`${SE} 2x, ${bE} 1x`,type:"image/webp",sizes:"(min-width: 768px) 100vw (max-width: 1439px) 100vw",src:wE,alt:"notebook",loading:"lazy"})}),c.jsx(J,{minWidth:1440,maxWidth:1919,children:c.jsx(Go,{srcSet:`${yE} 2x, ${vE} 1x`,type:"image/webp",sizes:"(min-width: 1440px) 100vw (max-width: 1919px) 100vw",src:`${xE}`,alt:"notebook",loading:"lazy"})}),c.jsx(J,{minWidth:1920,children:c.jsx(Go,{srcSet:`${gE} 2x, ${Np} 1x`,type:"image/webp",sizes:"(min-width: 1920px) 100vw",src:Np,alt:"notebook",loading:"lazy"})})]}),c.jsxs(XE,{children:[c.jsx(QE,{children:"Залишайте контактні дані і ми з вами зв'яжемось"}),c.jsxs(KE,{onSubmit:h(d),children:[c.jsxs(Yp,{children:["Ім’я",c.jsx(JE,{}),c.jsx(Xp,{type:"text",placeholder:"Введіть своє ім’я",...p("name",{required:"Це поле обов'язкове для заповнення",pattern:{value:/^(?:\s*[a-zA-Zа-яА-ЯґҐєЄіІїЇ'-]{1,32}(?:\s+[a-zA-Zа-яА-ЯґҐєЄіІїЇ'-]{1,32})?|\s*[a-zA-Zа-яА-ЯґҐєЄіІїЇ'-]{1,64})\s*$/,message:"Поле повинно містити одне або два слова"}}),value:r,onChange:b,errors:m.name}),m.name&&c.jsxs(ji,{children:[c.jsx(hn,{}),m.name.message]})]}),c.jsxs(qE,{children:[c.jsxs(Qp,{children:["Емейл",c.jsx(hn,{}),c.jsx(Xp,{type:"email",placeholder:"Введіть емейл",...p("email",{required:"Це поле обов'язкове для заповнення",pattern:{value:/[a-z0-9._%+-]+@[a-z0-9.-]+\.[a-z]{2,4}$/,message:"Введіть коректний емейл"}}),value:i,onChange:b,errors:m.email}),m.email&&c.jsxs(ji,{children:[c.jsx(hn,{}),m.email.message]})]}),c.jsxs(Qp,{children:["Номер телефону",c.jsx(hn,{}),c.jsx(GE,{ref:e,type:"tel",mask:"+38(099)999-99-99",placeholder:"Введіть номер телефону",...p("phone",{required:"Це поле обов'язкове для заповнення",pattern:{value:/^\+\d{2}\(\d{3}\)\d{3}-\d{2}-\d{2}$/,message:"Введіть коректний номер телефона"}}),value:o,onChange:b,errors:m.phone}),m.phone&&c.jsxs(ji,{children:[c.jsx(hn,{}),m.phone.message]})]})]}),c.jsxs(Yp,{children:["Послуга",c.jsx(hn,{}),c.jsx(lC,{name:"service",control:x,shouldUnregister:!1,defaultValue:a,rules:{validate:f=>f?void 0:"Оберіть послугу"},render:({field:f})=>c.jsx(pE,{...p("service",{required:"Оберіть послугу"}),placeholder:"Оберіть послугу",...f,options:Fp,styles:bC,errors:m.service,onChange:v,value:s})}),m.service&&c.jsxs(ji,{children:[c.jsx(hn,{}),m.service.message]})]}),c.jsxs(ZE,{children:["Повідомлення",c.jsx(eC,{name:"comment",placeholder:"Введіть ваше повідомлення",...p("comment",{maxLength:{value:500,message:"Максимальна кількість 500 символів"}}),value:l,onChange:b,errors:m.comment}),m.comment&&c.jsxs(ji,{children:[c.jsx(hn,{}),m.comment.message]})]}),c.jsx(tC,{type:"submit",children:"Надіслати"})]})]})]})]})})},kC=P.section`
  padding-top: 40px;
  padding-bottom: 40px;

  @media screen and (min-width: 1920px) {
    padding-top: 80px;
    padding-bottom: 80px;
  }
`,jC=P.div`
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

  @media screen and (min-width: 1440px) {
    gap: 24px;
  }

  @media screen and (min-width: 1920px) {
    gap: 40px;
    padding: 80px;
  }
`,OC=P.h2`
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

  @media screen and (min-width: 1440px) {
    font-size: 36px;
    line-height: 48px;
  }

  @media screen and (min-width: 1920px) {
    font-size: 48px;
    line-height: 56px;
  }
`,EC=P.p`
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

  @media screen and (min-width: 1440px) {
    line-height: 22px;
  }

  @media screen and (min-width: 1920px) {
    font-size: 20px;
    line-height: 28px;
    width: 828px;
  }
`,CC=P.span`
  color: var(--primary-yellow);
  font-size: 15px;
  line-height: 22px;

  @media screen and (min-width: 768px) {
    font-size: 18px;
    line-height: 24px;
  }

  @media screen and (min-width: 1440px) {
    line-height: 22px;
  }

  @media screen and (min-width: 1920px) {
    font-size: 20px;
    font-weight: 500;
    line-height: 28px;
  }
`,PC=P.ul`
  display: flex;
  gap: 24px;
  flex-direction: column;
  margin-bottom: 24px;

  @media screen and (min-width: 768px) {
    gap: 16px;
    margin-bottom: 0;
  }

  @media screen and (min-width: 1440px) {
    flex-direction: row;
    flex-wrap: wrap;
    gap: 24px;
  }

  @media screen and (min-width: 1920px) {
    flex-wrap: nowrap;
  }
`,TC=P.li`
  position: relative;
  background: var(--background-white);
  padding: 24px;
  border-radius: 16px;

  @media screen and (min-width: 1440px) {
    padding: 40px;
    width: calc((100% - (24px)) / 2);
  }

  @media screen and (min-width: 1920px) {
    width: calc((100% - (24px * 3)) / 4);
  }
`,_C=P.div`
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

  @media screen and (min-width: 1440px) {
    width: 72px;
    height: 72px;
    right: 16px;
    top: -16px;
  }

  @media screen and (min-width: 1920px) {
    width: 80px;
    height: 80px;
    left: 258px;
    top: -24px;
  }
`,MC=P.a`
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

  @media screen and (min-width: 1440px) {
    line-height: 18px;
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
`,AC="/healthy-management-project/assets/icon-WQbGU7FW.svg",RC="/healthy-management-project/assets/icon-2-FNpGPcjZ.svg",IC="/healthy-management-project/assets/icon-3-GZg06_37.svg",LC="/healthy-management-project/assets/icon-4-9BBn0thK.svg",Ul=[{title:"Менторство та консультації",about:["Для власників та менеджерів з питань менеджменту та розвитку, медичного маркетингу та комунікацій, з питань програм управління здоров'ям","Стейхолдерам та парнерам з питань медичного менеджменту та маркетингу"],path:AC},{title:"Діагностика",about:["Аудит бізнес-процесів","Аудит маркетингу та сервісу","Аудит системи комунікацій та Сustomer Journey Map"],path:RC},{title:"Стратегії",about:["Проведення стратегічних сесій","Розробка стратегії розвитку та маркетингу ","Розробка стратегій внутрішніх комунікацій","Розробка стратегій управління здоров'ям"],path:IC},{title:"Навчання",about:["Медичний маркетинг","Комунікації та сервіс"],path:LC}],DC=()=>c.jsx(kC,{className:"container",id:"services",children:c.jsxs(jC,{children:[c.jsx(OC,{children:"Послуги"}),c.jsxs(EC,{children:["Будуємо ефективні ",c.jsx(CC,{children:"стратегії здорового менеджменту"})," для бізнесів. Розвивайте свій бізнес за допомогою ефективних стратегій здорового менеджменту."]}),c.jsx(PC,{children:Ul==null?void 0:Ul.map(e=>c.jsxs(TC,{children:[c.jsx(rd,{title:e.title,about:e.about,variant:"services"}),c.jsx(_C,{children:c.jsx("img",{src:e.path,alt:e.path})})]},e.title))}),c.jsx(MC,{href:"#contact",children:"Замовити консультацію"})]})});function zC(){const e=(t,n)=>{n.preventDefault();const r=document.getElementById(t);if(r){const i=r.getBoundingClientRect(),o=window.pageYOffset||document.documentElement.scrollTop;let a;const l=window.innerWidth;l<=768&&(a=i.top+o-80),(l>768||l<=1440)&&(a=i.top+o-80),l>1440||l<=1920?a=i.top+o-80:a=i.top+o-60,window.scrollTo({top:a,behavior:"smooth"}),setTimeout(()=>{n.target.blur()},1e3)}};return L.useEffect(()=>{fetch("https://healthy-management.onrender.com/api/wakeup")},[]),c.jsxs(c.Fragment,{children:[c.jsx(Bg,{handleSetActiveLink:e}),c.jsxs("main",{children:[c.jsx(C2,{}),c.jsx(Uw,{}),c.jsx(jw,{}),c.jsx(A2,{}),c.jsx(e4,{}),c.jsx(DC,{}),c.jsx(nS,{}),c.jsx(iS,{}),c.jsx(aS,{}),c.jsx(zS,{}),c.jsx(Qw,{}),c.jsx(SC,{}),c.jsx(n4,{})]}),c.jsx(Ug,{handleSetActiveLink:e})]})}Wl.createRoot(document.getElementById("root")).render(c.jsx(ke.StrictMode,{children:c.jsx(zC,{})}));
