(function(){const t=document.createElement("link").relList;if(t&&t.supports&&t.supports("modulepreload"))return;for(const i of document.querySelectorAll('link[rel="modulepreload"]'))r(i);new MutationObserver(i=>{for(const a of i)if(a.type==="childList")for(const l of a.addedNodes)l.tagName==="LINK"&&l.rel==="modulepreload"&&r(l)}).observe(document,{childList:!0,subtree:!0});function n(i){const a={};return i.integrity&&(a.integrity=i.integrity),i.referrerPolicy&&(a.referrerPolicy=i.referrerPolicy),i.crossOrigin==="use-credentials"?a.credentials="include":i.crossOrigin==="anonymous"?a.credentials="omit":a.credentials="same-origin",a}function r(i){if(i.ep)return;i.ep=!0;const a=n(i);fetch(i.href,a)}})();var _o=typeof globalThis<"u"?globalThis:typeof window<"u"?window:typeof global<"u"?global:typeof self<"u"?self:{};function ke(e){return e&&e.__esModule&&Object.prototype.hasOwnProperty.call(e,"default")?e.default:e}var py={exports:{}},Lc={},hy={exports:{}},ae={};/**
 * @license React
 * react.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */var uo=Symbol.for("react.element"),J3=Symbol.for("react.portal"),e4=Symbol.for("react.fragment"),t4=Symbol.for("react.strict_mode"),n4=Symbol.for("react.profiler"),r4=Symbol.for("react.provider"),i4=Symbol.for("react.context"),a4=Symbol.for("react.forward_ref"),l4=Symbol.for("react.suspense"),o4=Symbol.for("react.memo"),s4=Symbol.for("react.lazy"),fh=Symbol.iterator;function c4(e){return e===null||typeof e!="object"?null:(e=fh&&e[fh]||e["@@iterator"],typeof e=="function"?e:null)}var my={isMounted:function(){return!1},enqueueForceUpdate:function(){},enqueueReplaceState:function(){},enqueueSetState:function(){}},yy=Object.assign,vy={};function pa(e,t,n){this.props=e,this.context=t,this.refs=vy,this.updater=n||my}pa.prototype.isReactComponent={};pa.prototype.setState=function(e,t){if(typeof e!="object"&&typeof e!="function"&&e!=null)throw Error("setState(...): takes an object of state variables to update or a function which returns an object of state variables.");this.updater.enqueueSetState(this,e,t,"setState")};pa.prototype.forceUpdate=function(e){this.updater.enqueueForceUpdate(this,e,"forceUpdate")};function gy(){}gy.prototype=pa.prototype;function up(e,t,n){this.props=e,this.context=t,this.refs=vy,this.updater=n||my}var dp=up.prototype=new gy;dp.constructor=up;yy(dp,pa.prototype);dp.isPureReactComponent=!0;var ph=Array.isArray,xy=Object.prototype.hasOwnProperty,fp={current:null},by={key:!0,ref:!0,__self:!0,__source:!0};function wy(e,t,n){var r,i={},a=null,l=null;if(t!=null)for(r in t.ref!==void 0&&(l=t.ref),t.key!==void 0&&(a=""+t.key),t)xy.call(t,r)&&!by.hasOwnProperty(r)&&(i[r]=t[r]);var o=arguments.length-2;if(o===1)i.children=n;else if(1<o){for(var s=Array(o),u=0;u<o;u++)s[u]=arguments[u+2];i.children=s}if(e&&e.defaultProps)for(r in o=e.defaultProps,o)i[r]===void 0&&(i[r]=o[r]);return{$$typeof:uo,type:e,key:a,ref:l,props:i,_owner:fp.current}}function u4(e,t){return{$$typeof:uo,type:e.type,key:t,ref:e.ref,props:e.props,_owner:e._owner}}function pp(e){return typeof e=="object"&&e!==null&&e.$$typeof===uo}function d4(e){var t={"=":"=0",":":"=2"};return"$"+e.replace(/[=:]/g,function(n){return t[n]})}var hh=/\/+/g;function Uu(e,t){return typeof e=="object"&&e!==null&&e.key!=null?d4(""+e.key):t.toString(36)}function is(e,t,n,r,i){var a=typeof e;(a==="undefined"||a==="boolean")&&(e=null);var l=!1;if(e===null)l=!0;else switch(a){case"string":case"number":l=!0;break;case"object":switch(e.$$typeof){case uo:case J3:l=!0}}if(l)return l=e,i=i(l),e=r===""?"."+Uu(l,0):r,ph(i)?(n="",e!=null&&(n=e.replace(hh,"$&/")+"/"),is(i,t,n,"",function(u){return u})):i!=null&&(pp(i)&&(i=u4(i,n+(!i.key||l&&l.key===i.key?"":(""+i.key).replace(hh,"$&/")+"/")+e)),t.push(i)),1;if(l=0,r=r===""?".":r+":",ph(e))for(var o=0;o<e.length;o++){a=e[o];var s=r+Uu(a,o);l+=is(a,t,n,s,i)}else if(s=c4(e),typeof s=="function")for(e=s.call(e),o=0;!(a=e.next()).done;)a=a.value,s=r+Uu(a,o++),l+=is(a,t,n,s,i);else if(a==="object")throw t=String(e),Error("Objects are not valid as a React child (found: "+(t==="[object Object]"?"object with keys {"+Object.keys(e).join(", ")+"}":t)+"). If you meant to render a collection of children, use an array instead.");return l}function jo(e,t,n){if(e==null)return e;var r=[],i=0;return is(e,r,"","",function(a){return t.call(n,a,i++)}),r}function f4(e){if(e._status===-1){var t=e._result;t=t(),t.then(function(n){(e._status===0||e._status===-1)&&(e._status=1,e._result=n)},function(n){(e._status===0||e._status===-1)&&(e._status=2,e._result=n)}),e._status===-1&&(e._status=0,e._result=t)}if(e._status===1)return e._result.default;throw e._result}var xt={current:null},as={transition:null},p4={ReactCurrentDispatcher:xt,ReactCurrentBatchConfig:as,ReactCurrentOwner:fp};function ky(){throw Error("act(...) is not supported in production builds of React.")}ae.Children={map:jo,forEach:function(e,t,n){jo(e,function(){t.apply(this,arguments)},n)},count:function(e){var t=0;return jo(e,function(){t++}),t},toArray:function(e){return jo(e,function(t){return t})||[]},only:function(e){if(!pp(e))throw Error("React.Children.only expected to receive a single React element child.");return e}};ae.Component=pa;ae.Fragment=e4;ae.Profiler=n4;ae.PureComponent=up;ae.StrictMode=t4;ae.Suspense=l4;ae.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED=p4;ae.act=ky;ae.cloneElement=function(e,t,n){if(e==null)throw Error("React.cloneElement(...): The argument must be a React element, but you passed "+e+".");var r=yy({},e.props),i=e.key,a=e.ref,l=e._owner;if(t!=null){if(t.ref!==void 0&&(a=t.ref,l=fp.current),t.key!==void 0&&(i=""+t.key),e.type&&e.type.defaultProps)var o=e.type.defaultProps;for(s in t)xy.call(t,s)&&!by.hasOwnProperty(s)&&(r[s]=t[s]===void 0&&o!==void 0?o[s]:t[s])}var s=arguments.length-2;if(s===1)r.children=n;else if(1<s){o=Array(s);for(var u=0;u<s;u++)o[u]=arguments[u+2];r.children=o}return{$$typeof:uo,type:e.type,key:i,ref:a,props:r,_owner:l}};ae.createContext=function(e){return e={$$typeof:i4,_currentValue:e,_currentValue2:e,_threadCount:0,Provider:null,Consumer:null,_defaultValue:null,_globalName:null},e.Provider={$$typeof:r4,_context:e},e.Consumer=e};ae.createElement=wy;ae.createFactory=function(e){var t=wy.bind(null,e);return t.type=e,t};ae.createRef=function(){return{current:null}};ae.forwardRef=function(e){return{$$typeof:a4,render:e}};ae.isValidElement=pp;ae.lazy=function(e){return{$$typeof:s4,_payload:{_status:-1,_result:e},_init:f4}};ae.memo=function(e,t){return{$$typeof:o4,type:e,compare:t===void 0?null:t}};ae.startTransition=function(e){var t=as.transition;as.transition={};try{e()}finally{as.transition=t}};ae.unstable_act=ky;ae.useCallback=function(e,t){return xt.current.useCallback(e,t)};ae.useContext=function(e){return xt.current.useContext(e)};ae.useDebugValue=function(){};ae.useDeferredValue=function(e){return xt.current.useDeferredValue(e)};ae.useEffect=function(e,t){return xt.current.useEffect(e,t)};ae.useId=function(){return xt.current.useId()};ae.useImperativeHandle=function(e,t,n){return xt.current.useImperativeHandle(e,t,n)};ae.useInsertionEffect=function(e,t){return xt.current.useInsertionEffect(e,t)};ae.useLayoutEffect=function(e,t){return xt.current.useLayoutEffect(e,t)};ae.useMemo=function(e,t){return xt.current.useMemo(e,t)};ae.useReducer=function(e,t,n){return xt.current.useReducer(e,t,n)};ae.useRef=function(e){return xt.current.useRef(e)};ae.useState=function(e){return xt.current.useState(e)};ae.useSyncExternalStore=function(e,t,n){return xt.current.useSyncExternalStore(e,t,n)};ae.useTransition=function(){return xt.current.useTransition()};ae.version="18.3.1";hy.exports=ae;var N=hy.exports;const z=ke(N);/**
 * @license React
 * react-jsx-runtime.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */var h4=N,m4=Symbol.for("react.element"),y4=Symbol.for("react.fragment"),v4=Object.prototype.hasOwnProperty,g4=h4.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED.ReactCurrentOwner,x4={key:!0,ref:!0,__self:!0,__source:!0};function Sy(e,t,n){var r,i={},a=null,l=null;n!==void 0&&(a=""+n),t.key!==void 0&&(a=""+t.key),t.ref!==void 0&&(l=t.ref);for(r in t)v4.call(t,r)&&!x4.hasOwnProperty(r)&&(i[r]=t[r]);if(e&&e.defaultProps)for(r in t=e.defaultProps,t)i[r]===void 0&&(i[r]=t[r]);return{$$typeof:m4,type:e,key:a,ref:l,props:i,_owner:g4.current}}Lc.Fragment=y4;Lc.jsx=Sy;Lc.jsxs=Sy;py.exports=Lc;var c=py.exports,Vd={},_y={exports:{}},zt={},jy={exports:{}},Oy={};/**
 * @license React
 * scheduler.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */(function(e){function t(T,D){var R=T.length;T.push(D);e:for(;0<R;){var H=R-1>>>1,B=T[H];if(0<i(B,D))T[H]=D,T[R]=B,R=H;else break e}}function n(T){return T.length===0?null:T[0]}function r(T){if(T.length===0)return null;var D=T[0],R=T.pop();if(R!==D){T[0]=R;e:for(var H=0,B=T.length,K=B>>>1;H<K;){var te=2*(H+1)-1,pe=T[te],xe=te+1,st=T[xe];if(0>i(pe,R))xe<B&&0>i(st,pe)?(T[H]=st,T[xe]=R,H=xe):(T[H]=pe,T[te]=R,H=te);else if(xe<B&&0>i(st,R))T[H]=st,T[xe]=R,H=xe;else break e}}return D}function i(T,D){var R=T.sortIndex-D.sortIndex;return R!==0?R:T.id-D.id}if(typeof performance=="object"&&typeof performance.now=="function"){var a=performance;e.unstable_now=function(){return a.now()}}else{var l=Date,o=l.now();e.unstable_now=function(){return l.now()-o}}var s=[],u=[],f=1,d=null,p=3,h=!1,b=!1,v=!1,w=typeof setTimeout=="function"?setTimeout:null,y=typeof clearTimeout=="function"?clearTimeout:null,m=typeof setImmediate<"u"?setImmediate:null;typeof navigator<"u"&&navigator.scheduling!==void 0&&navigator.scheduling.isInputPending!==void 0&&navigator.scheduling.isInputPending.bind(navigator.scheduling);function g(T){for(var D=n(u);D!==null;){if(D.callback===null)r(u);else if(D.startTime<=T)r(u),D.sortIndex=D.expirationTime,t(s,D);else break;D=n(u)}}function S(T){if(v=!1,g(T),!b)if(n(s)!==null)b=!0,I(x);else{var D=n(u);D!==null&&L(S,D.startTime-T)}}function x(T,D){b=!1,v&&(v=!1,y(j),j=-1),h=!0;var R=p;try{for(g(D),d=n(s);d!==null&&(!(d.expirationTime>D)||T&&!E());){var H=d.callback;if(typeof H=="function"){d.callback=null,p=d.priorityLevel;var B=H(d.expirationTime<=D);D=e.unstable_now(),typeof B=="function"?d.callback=B:d===n(s)&&r(s),g(D)}else r(s);d=n(s)}if(d!==null)var K=!0;else{var te=n(u);te!==null&&L(S,te.startTime-D),K=!1}return K}finally{d=null,p=R,h=!1}}var k=!1,_=null,j=-1,O=5,M=-1;function E(){return!(e.unstable_now()-M<O)}function A(){if(_!==null){var T=e.unstable_now();M=T;var D=!0;try{D=_(!0,T)}finally{D?P():(k=!1,_=null)}}else k=!1}var P;if(typeof m=="function")P=function(){m(A)};else if(typeof MessageChannel<"u"){var $=new MessageChannel,C=$.port2;$.port1.onmessage=A,P=function(){C.postMessage(null)}}else P=function(){w(A,0)};function I(T){_=T,k||(k=!0,P())}function L(T,D){j=w(function(){T(e.unstable_now())},D)}e.unstable_IdlePriority=5,e.unstable_ImmediatePriority=1,e.unstable_LowPriority=4,e.unstable_NormalPriority=3,e.unstable_Profiling=null,e.unstable_UserBlockingPriority=2,e.unstable_cancelCallback=function(T){T.callback=null},e.unstable_continueExecution=function(){b||h||(b=!0,I(x))},e.unstable_forceFrameRate=function(T){0>T||125<T?console.error("forceFrameRate takes a positive int between 0 and 125, forcing frame rates higher than 125 fps is not supported"):O=0<T?Math.floor(1e3/T):5},e.unstable_getCurrentPriorityLevel=function(){return p},e.unstable_getFirstCallbackNode=function(){return n(s)},e.unstable_next=function(T){switch(p){case 1:case 2:case 3:var D=3;break;default:D=p}var R=p;p=D;try{return T()}finally{p=R}},e.unstable_pauseExecution=function(){},e.unstable_requestPaint=function(){},e.unstable_runWithPriority=function(T,D){switch(T){case 1:case 2:case 3:case 4:case 5:break;default:T=3}var R=p;p=T;try{return D()}finally{p=R}},e.unstable_scheduleCallback=function(T,D,R){var H=e.unstable_now();switch(typeof R=="object"&&R!==null?(R=R.delay,R=typeof R=="number"&&0<R?H+R:H):R=H,T){case 1:var B=-1;break;case 2:B=250;break;case 5:B=1073741823;break;case 4:B=1e4;break;default:B=5e3}return B=R+B,T={id:f++,callback:D,priorityLevel:T,startTime:R,expirationTime:B,sortIndex:-1},R>H?(T.sortIndex=R,t(u,T),n(s)===null&&T===n(u)&&(v?(y(j),j=-1):v=!0,L(S,R-H))):(T.sortIndex=B,t(s,T),b||h||(b=!0,I(x))),T},e.unstable_shouldYield=E,e.unstable_wrapCallback=function(T){var D=p;return function(){var R=p;p=D;try{return T.apply(this,arguments)}finally{p=R}}}})(Oy);jy.exports=Oy;var b4=jy.exports;/**
 * @license React
 * react-dom.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */var w4=N,$t=b4;function U(e){for(var t="https://reactjs.org/docs/error-decoder.html?invariant="+e,n=1;n<arguments.length;n++)t+="&args[]="+encodeURIComponent(arguments[n]);return"Minified React error #"+e+"; visit "+t+" for the full message or use the non-minified dev environment for full errors and additional helpful warnings."}var Py=new Set,ul={};function ri(e,t){Fi(e,t),Fi(e+"Capture",t)}function Fi(e,t){for(ul[e]=t,e=0;e<t.length;e++)Py.add(t[e])}var Dn=!(typeof window>"u"||typeof window.document>"u"||typeof window.document.createElement>"u"),Xd=Object.prototype.hasOwnProperty,k4=/^[:A-Z_a-z\u00C0-\u00D6\u00D8-\u00F6\u00F8-\u02FF\u0370-\u037D\u037F-\u1FFF\u200C-\u200D\u2070-\u218F\u2C00-\u2FEF\u3001-\uD7FF\uF900-\uFDCF\uFDF0-\uFFFD][:A-Z_a-z\u00C0-\u00D6\u00D8-\u00F6\u00F8-\u02FF\u0370-\u037D\u037F-\u1FFF\u200C-\u200D\u2070-\u218F\u2C00-\u2FEF\u3001-\uD7FF\uF900-\uFDCF\uFDF0-\uFFFD\-.0-9\u00B7\u0300-\u036F\u203F-\u2040]*$/,mh={},yh={};function S4(e){return Xd.call(yh,e)?!0:Xd.call(mh,e)?!1:k4.test(e)?yh[e]=!0:(mh[e]=!0,!1)}function _4(e,t,n,r){if(n!==null&&n.type===0)return!1;switch(typeof t){case"function":case"symbol":return!0;case"boolean":return r?!1:n!==null?!n.acceptsBooleans:(e=e.toLowerCase().slice(0,5),e!=="data-"&&e!=="aria-");default:return!1}}function j4(e,t,n,r){if(t===null||typeof t>"u"||_4(e,t,n,r))return!0;if(r)return!1;if(n!==null)switch(n.type){case 3:return!t;case 4:return t===!1;case 5:return isNaN(t);case 6:return isNaN(t)||1>t}return!1}function bt(e,t,n,r,i,a,l){this.acceptsBooleans=t===2||t===3||t===4,this.attributeName=r,this.attributeNamespace=i,this.mustUseProperty=n,this.propertyName=e,this.type=t,this.sanitizeURL=a,this.removeEmptyString=l}var ot={};"children dangerouslySetInnerHTML defaultValue defaultChecked innerHTML suppressContentEditableWarning suppressHydrationWarning style".split(" ").forEach(function(e){ot[e]=new bt(e,0,!1,e,null,!1,!1)});[["acceptCharset","accept-charset"],["className","class"],["htmlFor","for"],["httpEquiv","http-equiv"]].forEach(function(e){var t=e[0];ot[t]=new bt(t,1,!1,e[1],null,!1,!1)});["contentEditable","draggable","spellCheck","value"].forEach(function(e){ot[e]=new bt(e,2,!1,e.toLowerCase(),null,!1,!1)});["autoReverse","externalResourcesRequired","focusable","preserveAlpha"].forEach(function(e){ot[e]=new bt(e,2,!1,e,null,!1,!1)});"allowFullScreen async autoFocus autoPlay controls default defer disabled disablePictureInPicture disableRemotePlayback formNoValidate hidden loop noModule noValidate open playsInline readOnly required reversed scoped seamless itemScope".split(" ").forEach(function(e){ot[e]=new bt(e,3,!1,e.toLowerCase(),null,!1,!1)});["checked","multiple","muted","selected"].forEach(function(e){ot[e]=new bt(e,3,!0,e,null,!1,!1)});["capture","download"].forEach(function(e){ot[e]=new bt(e,4,!1,e,null,!1,!1)});["cols","rows","size","span"].forEach(function(e){ot[e]=new bt(e,6,!1,e,null,!1,!1)});["rowSpan","start"].forEach(function(e){ot[e]=new bt(e,5,!1,e.toLowerCase(),null,!1,!1)});var hp=/[\-:]([a-z])/g;function mp(e){return e[1].toUpperCase()}"accent-height alignment-baseline arabic-form baseline-shift cap-height clip-path clip-rule color-interpolation color-interpolation-filters color-profile color-rendering dominant-baseline enable-background fill-opacity fill-rule flood-color flood-opacity font-family font-size font-size-adjust font-stretch font-style font-variant font-weight glyph-name glyph-orientation-horizontal glyph-orientation-vertical horiz-adv-x horiz-origin-x image-rendering letter-spacing lighting-color marker-end marker-mid marker-start overline-position overline-thickness paint-order panose-1 pointer-events rendering-intent shape-rendering stop-color stop-opacity strikethrough-position strikethrough-thickness stroke-dasharray stroke-dashoffset stroke-linecap stroke-linejoin stroke-miterlimit stroke-opacity stroke-width text-anchor text-decoration text-rendering underline-position underline-thickness unicode-bidi unicode-range units-per-em v-alphabetic v-hanging v-ideographic v-mathematical vector-effect vert-adv-y vert-origin-x vert-origin-y word-spacing writing-mode xmlns:xlink x-height".split(" ").forEach(function(e){var t=e.replace(hp,mp);ot[t]=new bt(t,1,!1,e,null,!1,!1)});"xlink:actuate xlink:arcrole xlink:role xlink:show xlink:title xlink:type".split(" ").forEach(function(e){var t=e.replace(hp,mp);ot[t]=new bt(t,1,!1,e,"http://www.w3.org/1999/xlink",!1,!1)});["xml:base","xml:lang","xml:space"].forEach(function(e){var t=e.replace(hp,mp);ot[t]=new bt(t,1,!1,e,"http://www.w3.org/XML/1998/namespace",!1,!1)});["tabIndex","crossOrigin"].forEach(function(e){ot[e]=new bt(e,1,!1,e.toLowerCase(),null,!1,!1)});ot.xlinkHref=new bt("xlinkHref",1,!1,"xlink:href","http://www.w3.org/1999/xlink",!0,!1);["src","href","action","formAction"].forEach(function(e){ot[e]=new bt(e,1,!1,e.toLowerCase(),null,!0,!0)});function yp(e,t,n,r){var i=ot.hasOwnProperty(t)?ot[t]:null;(i!==null?i.type!==0:r||!(2<t.length)||t[0]!=="o"&&t[0]!=="O"||t[1]!=="n"&&t[1]!=="N")&&(j4(t,n,i,r)&&(n=null),r||i===null?S4(t)&&(n===null?e.removeAttribute(t):e.setAttribute(t,""+n)):i.mustUseProperty?e[i.propertyName]=n===null?i.type===3?!1:"":n:(t=i.attributeName,r=i.attributeNamespace,n===null?e.removeAttribute(t):(i=i.type,n=i===3||i===4&&n===!0?"":""+n,r?e.setAttributeNS(r,t,n):e.setAttribute(t,n))))}var Hn=w4.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED,Oo=Symbol.for("react.element"),mi=Symbol.for("react.portal"),yi=Symbol.for("react.fragment"),vp=Symbol.for("react.strict_mode"),qd=Symbol.for("react.profiler"),Ay=Symbol.for("react.provider"),Ny=Symbol.for("react.context"),gp=Symbol.for("react.forward_ref"),Kd=Symbol.for("react.suspense"),Yd=Symbol.for("react.suspense_list"),xp=Symbol.for("react.memo"),Zn=Symbol.for("react.lazy"),Cy=Symbol.for("react.offscreen"),vh=Symbol.iterator;function Aa(e){return e===null||typeof e!="object"?null:(e=vh&&e[vh]||e["@@iterator"],typeof e=="function"?e:null)}var ze=Object.assign,Hu;function Va(e){if(Hu===void 0)try{throw Error()}catch(n){var t=n.stack.trim().match(/\n( *(at )?)/);Hu=t&&t[1]||""}return`
`+Hu+e}var Gu=!1;function Vu(e,t){if(!e||Gu)return"";Gu=!0;var n=Error.prepareStackTrace;Error.prepareStackTrace=void 0;try{if(t)if(t=function(){throw Error()},Object.defineProperty(t.prototype,"props",{set:function(){throw Error()}}),typeof Reflect=="object"&&Reflect.construct){try{Reflect.construct(t,[])}catch(u){var r=u}Reflect.construct(e,[],t)}else{try{t.call()}catch(u){r=u}e.call(t.prototype)}else{try{throw Error()}catch(u){r=u}e()}}catch(u){if(u&&r&&typeof u.stack=="string"){for(var i=u.stack.split(`
`),a=r.stack.split(`
`),l=i.length-1,o=a.length-1;1<=l&&0<=o&&i[l]!==a[o];)o--;for(;1<=l&&0<=o;l--,o--)if(i[l]!==a[o]){if(l!==1||o!==1)do if(l--,o--,0>o||i[l]!==a[o]){var s=`
`+i[l].replace(" at new "," at ");return e.displayName&&s.includes("<anonymous>")&&(s=s.replace("<anonymous>",e.displayName)),s}while(1<=l&&0<=o);break}}}finally{Gu=!1,Error.prepareStackTrace=n}return(e=e?e.displayName||e.name:"")?Va(e):""}function O4(e){switch(e.tag){case 5:return Va(e.type);case 16:return Va("Lazy");case 13:return Va("Suspense");case 19:return Va("SuspenseList");case 0:case 2:case 15:return e=Vu(e.type,!1),e;case 11:return e=Vu(e.type.render,!1),e;case 1:return e=Vu(e.type,!0),e;default:return""}}function Zd(e){if(e==null)return null;if(typeof e=="function")return e.displayName||e.name||null;if(typeof e=="string")return e;switch(e){case yi:return"Fragment";case mi:return"Portal";case qd:return"Profiler";case vp:return"StrictMode";case Kd:return"Suspense";case Yd:return"SuspenseList"}if(typeof e=="object")switch(e.$$typeof){case Ny:return(e.displayName||"Context")+".Consumer";case Ay:return(e._context.displayName||"Context")+".Provider";case gp:var t=e.render;return e=e.displayName,e||(e=t.displayName||t.name||"",e=e!==""?"ForwardRef("+e+")":"ForwardRef"),e;case xp:return t=e.displayName||null,t!==null?t:Zd(e.type)||"Memo";case Zn:t=e._payload,e=e._init;try{return Zd(e(t))}catch{}}return null}function P4(e){var t=e.type;switch(e.tag){case 24:return"Cache";case 9:return(t.displayName||"Context")+".Consumer";case 10:return(t._context.displayName||"Context")+".Provider";case 18:return"DehydratedFragment";case 11:return e=t.render,e=e.displayName||e.name||"",t.displayName||(e!==""?"ForwardRef("+e+")":"ForwardRef");case 7:return"Fragment";case 5:return t;case 4:return"Portal";case 3:return"Root";case 6:return"Text";case 16:return Zd(t);case 8:return t===vp?"StrictMode":"Mode";case 22:return"Offscreen";case 12:return"Profiler";case 21:return"Scope";case 13:return"Suspense";case 19:return"SuspenseList";case 25:return"TracingMarker";case 1:case 0:case 17:case 2:case 14:case 15:if(typeof t=="function")return t.displayName||t.name||null;if(typeof t=="string")return t}return null}function yr(e){switch(typeof e){case"boolean":case"number":case"string":case"undefined":return e;case"object":return e;default:return""}}function Ey(e){var t=e.type;return(e=e.nodeName)&&e.toLowerCase()==="input"&&(t==="checkbox"||t==="radio")}function A4(e){var t=Ey(e)?"checked":"value",n=Object.getOwnPropertyDescriptor(e.constructor.prototype,t),r=""+e[t];if(!e.hasOwnProperty(t)&&typeof n<"u"&&typeof n.get=="function"&&typeof n.set=="function"){var i=n.get,a=n.set;return Object.defineProperty(e,t,{configurable:!0,get:function(){return i.call(this)},set:function(l){r=""+l,a.call(this,l)}}),Object.defineProperty(e,t,{enumerable:n.enumerable}),{getValue:function(){return r},setValue:function(l){r=""+l},stopTracking:function(){e._valueTracker=null,delete e[t]}}}}function Po(e){e._valueTracker||(e._valueTracker=A4(e))}function My(e){if(!e)return!1;var t=e._valueTracker;if(!t)return!0;var n=t.getValue(),r="";return e&&(r=Ey(e)?e.checked?"true":"false":e.value),e=r,e!==n?(t.setValue(e),!0):!1}function vs(e){if(e=e||(typeof document<"u"?document:void 0),typeof e>"u")return null;try{return e.activeElement||e.body}catch{return e.body}}function Qd(e,t){var n=t.checked;return ze({},t,{defaultChecked:void 0,defaultValue:void 0,value:void 0,checked:n??e._wrapperState.initialChecked})}function gh(e,t){var n=t.defaultValue==null?"":t.defaultValue,r=t.checked!=null?t.checked:t.defaultChecked;n=yr(t.value!=null?t.value:n),e._wrapperState={initialChecked:r,initialValue:n,controlled:t.type==="checkbox"||t.type==="radio"?t.checked!=null:t.value!=null}}function Ty(e,t){t=t.checked,t!=null&&yp(e,"checked",t,!1)}function Jd(e,t){Ty(e,t);var n=yr(t.value),r=t.type;if(n!=null)r==="number"?(n===0&&e.value===""||e.value!=n)&&(e.value=""+n):e.value!==""+n&&(e.value=""+n);else if(r==="submit"||r==="reset"){e.removeAttribute("value");return}t.hasOwnProperty("value")?ef(e,t.type,n):t.hasOwnProperty("defaultValue")&&ef(e,t.type,yr(t.defaultValue)),t.checked==null&&t.defaultChecked!=null&&(e.defaultChecked=!!t.defaultChecked)}function xh(e,t,n){if(t.hasOwnProperty("value")||t.hasOwnProperty("defaultValue")){var r=t.type;if(!(r!=="submit"&&r!=="reset"||t.value!==void 0&&t.value!==null))return;t=""+e._wrapperState.initialValue,n||t===e.value||(e.value=t),e.defaultValue=t}n=e.name,n!==""&&(e.name=""),e.defaultChecked=!!e._wrapperState.initialChecked,n!==""&&(e.name=n)}function ef(e,t,n){(t!=="number"||vs(e.ownerDocument)!==e)&&(n==null?e.defaultValue=""+e._wrapperState.initialValue:e.defaultValue!==""+n&&(e.defaultValue=""+n))}var Xa=Array.isArray;function Ci(e,t,n,r){if(e=e.options,t){t={};for(var i=0;i<n.length;i++)t["$"+n[i]]=!0;for(n=0;n<e.length;n++)i=t.hasOwnProperty("$"+e[n].value),e[n].selected!==i&&(e[n].selected=i),i&&r&&(e[n].defaultSelected=!0)}else{for(n=""+yr(n),t=null,i=0;i<e.length;i++){if(e[i].value===n){e[i].selected=!0,r&&(e[i].defaultSelected=!0);return}t!==null||e[i].disabled||(t=e[i])}t!==null&&(t.selected=!0)}}function tf(e,t){if(t.dangerouslySetInnerHTML!=null)throw Error(U(91));return ze({},t,{value:void 0,defaultValue:void 0,children:""+e._wrapperState.initialValue})}function bh(e,t){var n=t.value;if(n==null){if(n=t.children,t=t.defaultValue,n!=null){if(t!=null)throw Error(U(92));if(Xa(n)){if(1<n.length)throw Error(U(93));n=n[0]}t=n}t==null&&(t=""),n=t}e._wrapperState={initialValue:yr(n)}}function $y(e,t){var n=yr(t.value),r=yr(t.defaultValue);n!=null&&(n=""+n,n!==e.value&&(e.value=n),t.defaultValue==null&&e.defaultValue!==n&&(e.defaultValue=n)),r!=null&&(e.defaultValue=""+r)}function wh(e){var t=e.textContent;t===e._wrapperState.initialValue&&t!==""&&t!==null&&(e.value=t)}function zy(e){switch(e){case"svg":return"http://www.w3.org/2000/svg";case"math":return"http://www.w3.org/1998/Math/MathML";default:return"http://www.w3.org/1999/xhtml"}}function nf(e,t){return e==null||e==="http://www.w3.org/1999/xhtml"?zy(t):e==="http://www.w3.org/2000/svg"&&t==="foreignObject"?"http://www.w3.org/1999/xhtml":e}var Ao,Iy=function(e){return typeof MSApp<"u"&&MSApp.execUnsafeLocalFunction?function(t,n,r,i){MSApp.execUnsafeLocalFunction(function(){return e(t,n,r,i)})}:e}(function(e,t){if(e.namespaceURI!=="http://www.w3.org/2000/svg"||"innerHTML"in e)e.innerHTML=t;else{for(Ao=Ao||document.createElement("div"),Ao.innerHTML="<svg>"+t.valueOf().toString()+"</svg>",t=Ao.firstChild;e.firstChild;)e.removeChild(e.firstChild);for(;t.firstChild;)e.appendChild(t.firstChild)}});function dl(e,t){if(t){var n=e.firstChild;if(n&&n===e.lastChild&&n.nodeType===3){n.nodeValue=t;return}}e.textContent=t}var Za={animationIterationCount:!0,aspectRatio:!0,borderImageOutset:!0,borderImageSlice:!0,borderImageWidth:!0,boxFlex:!0,boxFlexGroup:!0,boxOrdinalGroup:!0,columnCount:!0,columns:!0,flex:!0,flexGrow:!0,flexPositive:!0,flexShrink:!0,flexNegative:!0,flexOrder:!0,gridArea:!0,gridRow:!0,gridRowEnd:!0,gridRowSpan:!0,gridRowStart:!0,gridColumn:!0,gridColumnEnd:!0,gridColumnSpan:!0,gridColumnStart:!0,fontWeight:!0,lineClamp:!0,lineHeight:!0,opacity:!0,order:!0,orphans:!0,tabSize:!0,widows:!0,zIndex:!0,zoom:!0,fillOpacity:!0,floodOpacity:!0,stopOpacity:!0,strokeDasharray:!0,strokeDashoffset:!0,strokeMiterlimit:!0,strokeOpacity:!0,strokeWidth:!0},N4=["Webkit","ms","Moz","O"];Object.keys(Za).forEach(function(e){N4.forEach(function(t){t=t+e.charAt(0).toUpperCase()+e.substring(1),Za[t]=Za[e]})});function Dy(e,t,n){return t==null||typeof t=="boolean"||t===""?"":n||typeof t!="number"||t===0||Za.hasOwnProperty(e)&&Za[e]?(""+t).trim():t+"px"}function Ly(e,t){e=e.style;for(var n in t)if(t.hasOwnProperty(n)){var r=n.indexOf("--")===0,i=Dy(n,t[n],r);n==="float"&&(n="cssFloat"),r?e.setProperty(n,i):e[n]=i}}var C4=ze({menuitem:!0},{area:!0,base:!0,br:!0,col:!0,embed:!0,hr:!0,img:!0,input:!0,keygen:!0,link:!0,meta:!0,param:!0,source:!0,track:!0,wbr:!0});function rf(e,t){if(t){if(C4[e]&&(t.children!=null||t.dangerouslySetInnerHTML!=null))throw Error(U(137,e));if(t.dangerouslySetInnerHTML!=null){if(t.children!=null)throw Error(U(60));if(typeof t.dangerouslySetInnerHTML!="object"||!("__html"in t.dangerouslySetInnerHTML))throw Error(U(61))}if(t.style!=null&&typeof t.style!="object")throw Error(U(62))}}function af(e,t){if(e.indexOf("-")===-1)return typeof t.is=="string";switch(e){case"annotation-xml":case"color-profile":case"font-face":case"font-face-src":case"font-face-uri":case"font-face-format":case"font-face-name":case"missing-glyph":return!1;default:return!0}}var lf=null;function bp(e){return e=e.target||e.srcElement||window,e.correspondingUseElement&&(e=e.correspondingUseElement),e.nodeType===3?e.parentNode:e}var of=null,Ei=null,Mi=null;function kh(e){if(e=ho(e)){if(typeof of!="function")throw Error(U(280));var t=e.stateNode;t&&(t=Uc(t),of(e.stateNode,e.type,t))}}function Fy(e){Ei?Mi?Mi.push(e):Mi=[e]:Ei=e}function Ry(){if(Ei){var e=Ei,t=Mi;if(Mi=Ei=null,kh(e),t)for(e=0;e<t.length;e++)kh(t[e])}}function By(e,t){return e(t)}function Wy(){}var Xu=!1;function Uy(e,t,n){if(Xu)return e(t,n);Xu=!0;try{return By(e,t,n)}finally{Xu=!1,(Ei!==null||Mi!==null)&&(Wy(),Ry())}}function fl(e,t){var n=e.stateNode;if(n===null)return null;var r=Uc(n);if(r===null)return null;n=r[t];e:switch(t){case"onClick":case"onClickCapture":case"onDoubleClick":case"onDoubleClickCapture":case"onMouseDown":case"onMouseDownCapture":case"onMouseMove":case"onMouseMoveCapture":case"onMouseUp":case"onMouseUpCapture":case"onMouseEnter":(r=!r.disabled)||(e=e.type,r=!(e==="button"||e==="input"||e==="select"||e==="textarea")),e=!r;break e;default:e=!1}if(e)return null;if(n&&typeof n!="function")throw Error(U(231,t,typeof n));return n}var sf=!1;if(Dn)try{var Na={};Object.defineProperty(Na,"passive",{get:function(){sf=!0}}),window.addEventListener("test",Na,Na),window.removeEventListener("test",Na,Na)}catch{sf=!1}function E4(e,t,n,r,i,a,l,o,s){var u=Array.prototype.slice.call(arguments,3);try{t.apply(n,u)}catch(f){this.onError(f)}}var Qa=!1,gs=null,xs=!1,cf=null,M4={onError:function(e){Qa=!0,gs=e}};function T4(e,t,n,r,i,a,l,o,s){Qa=!1,gs=null,E4.apply(M4,arguments)}function $4(e,t,n,r,i,a,l,o,s){if(T4.apply(this,arguments),Qa){if(Qa){var u=gs;Qa=!1,gs=null}else throw Error(U(198));xs||(xs=!0,cf=u)}}function ii(e){var t=e,n=e;if(e.alternate)for(;t.return;)t=t.return;else{e=t;do t=e,t.flags&4098&&(n=t.return),e=t.return;while(e)}return t.tag===3?n:null}function Hy(e){if(e.tag===13){var t=e.memoizedState;if(t===null&&(e=e.alternate,e!==null&&(t=e.memoizedState)),t!==null)return t.dehydrated}return null}function Sh(e){if(ii(e)!==e)throw Error(U(188))}function z4(e){var t=e.alternate;if(!t){if(t=ii(e),t===null)throw Error(U(188));return t!==e?null:e}for(var n=e,r=t;;){var i=n.return;if(i===null)break;var a=i.alternate;if(a===null){if(r=i.return,r!==null){n=r;continue}break}if(i.child===a.child){for(a=i.child;a;){if(a===n)return Sh(i),e;if(a===r)return Sh(i),t;a=a.sibling}throw Error(U(188))}if(n.return!==r.return)n=i,r=a;else{for(var l=!1,o=i.child;o;){if(o===n){l=!0,n=i,r=a;break}if(o===r){l=!0,r=i,n=a;break}o=o.sibling}if(!l){for(o=a.child;o;){if(o===n){l=!0,n=a,r=i;break}if(o===r){l=!0,r=a,n=i;break}o=o.sibling}if(!l)throw Error(U(189))}}if(n.alternate!==r)throw Error(U(190))}if(n.tag!==3)throw Error(U(188));return n.stateNode.current===n?e:t}function Gy(e){return e=z4(e),e!==null?Vy(e):null}function Vy(e){if(e.tag===5||e.tag===6)return e;for(e=e.child;e!==null;){var t=Vy(e);if(t!==null)return t;e=e.sibling}return null}var Xy=$t.unstable_scheduleCallback,_h=$t.unstable_cancelCallback,I4=$t.unstable_shouldYield,D4=$t.unstable_requestPaint,Fe=$t.unstable_now,L4=$t.unstable_getCurrentPriorityLevel,wp=$t.unstable_ImmediatePriority,qy=$t.unstable_UserBlockingPriority,bs=$t.unstable_NormalPriority,F4=$t.unstable_LowPriority,Ky=$t.unstable_IdlePriority,Fc=null,gn=null;function R4(e){if(gn&&typeof gn.onCommitFiberRoot=="function")try{gn.onCommitFiberRoot(Fc,e,void 0,(e.current.flags&128)===128)}catch{}}var on=Math.clz32?Math.clz32:U4,B4=Math.log,W4=Math.LN2;function U4(e){return e>>>=0,e===0?32:31-(B4(e)/W4|0)|0}var No=64,Co=4194304;function qa(e){switch(e&-e){case 1:return 1;case 2:return 2;case 4:return 4;case 8:return 8;case 16:return 16;case 32:return 32;case 64:case 128:case 256:case 512:case 1024:case 2048:case 4096:case 8192:case 16384:case 32768:case 65536:case 131072:case 262144:case 524288:case 1048576:case 2097152:return e&4194240;case 4194304:case 8388608:case 16777216:case 33554432:case 67108864:return e&130023424;case 134217728:return 134217728;case 268435456:return 268435456;case 536870912:return 536870912;case 1073741824:return 1073741824;default:return e}}function ws(e,t){var n=e.pendingLanes;if(n===0)return 0;var r=0,i=e.suspendedLanes,a=e.pingedLanes,l=n&268435455;if(l!==0){var o=l&~i;o!==0?r=qa(o):(a&=l,a!==0&&(r=qa(a)))}else l=n&~i,l!==0?r=qa(l):a!==0&&(r=qa(a));if(r===0)return 0;if(t!==0&&t!==r&&!(t&i)&&(i=r&-r,a=t&-t,i>=a||i===16&&(a&4194240)!==0))return t;if(r&4&&(r|=n&16),t=e.entangledLanes,t!==0)for(e=e.entanglements,t&=r;0<t;)n=31-on(t),i=1<<n,r|=e[n],t&=~i;return r}function H4(e,t){switch(e){case 1:case 2:case 4:return t+250;case 8:case 16:case 32:case 64:case 128:case 256:case 512:case 1024:case 2048:case 4096:case 8192:case 16384:case 32768:case 65536:case 131072:case 262144:case 524288:case 1048576:case 2097152:return t+5e3;case 4194304:case 8388608:case 16777216:case 33554432:case 67108864:return-1;case 134217728:case 268435456:case 536870912:case 1073741824:return-1;default:return-1}}function G4(e,t){for(var n=e.suspendedLanes,r=e.pingedLanes,i=e.expirationTimes,a=e.pendingLanes;0<a;){var l=31-on(a),o=1<<l,s=i[l];s===-1?(!(o&n)||o&r)&&(i[l]=H4(o,t)):s<=t&&(e.expiredLanes|=o),a&=~o}}function uf(e){return e=e.pendingLanes&-1073741825,e!==0?e:e&1073741824?1073741824:0}function Yy(){var e=No;return No<<=1,!(No&4194240)&&(No=64),e}function qu(e){for(var t=[],n=0;31>n;n++)t.push(e);return t}function fo(e,t,n){e.pendingLanes|=t,t!==536870912&&(e.suspendedLanes=0,e.pingedLanes=0),e=e.eventTimes,t=31-on(t),e[t]=n}function V4(e,t){var n=e.pendingLanes&~t;e.pendingLanes=t,e.suspendedLanes=0,e.pingedLanes=0,e.expiredLanes&=t,e.mutableReadLanes&=t,e.entangledLanes&=t,t=e.entanglements;var r=e.eventTimes;for(e=e.expirationTimes;0<n;){var i=31-on(n),a=1<<i;t[i]=0,r[i]=-1,e[i]=-1,n&=~a}}function kp(e,t){var n=e.entangledLanes|=t;for(e=e.entanglements;n;){var r=31-on(n),i=1<<r;i&t|e[r]&t&&(e[r]|=t),n&=~i}}var ye=0;function Zy(e){return e&=-e,1<e?4<e?e&268435455?16:536870912:4:1}var Qy,Sp,Jy,e8,t8,df=!1,Eo=[],lr=null,or=null,sr=null,pl=new Map,hl=new Map,er=[],X4="mousedown mouseup touchcancel touchend touchstart auxclick dblclick pointercancel pointerdown pointerup dragend dragstart drop compositionend compositionstart keydown keypress keyup input textInput copy cut paste click change contextmenu reset submit".split(" ");function jh(e,t){switch(e){case"focusin":case"focusout":lr=null;break;case"dragenter":case"dragleave":or=null;break;case"mouseover":case"mouseout":sr=null;break;case"pointerover":case"pointerout":pl.delete(t.pointerId);break;case"gotpointercapture":case"lostpointercapture":hl.delete(t.pointerId)}}function Ca(e,t,n,r,i,a){return e===null||e.nativeEvent!==a?(e={blockedOn:t,domEventName:n,eventSystemFlags:r,nativeEvent:a,targetContainers:[i]},t!==null&&(t=ho(t),t!==null&&Sp(t)),e):(e.eventSystemFlags|=r,t=e.targetContainers,i!==null&&t.indexOf(i)===-1&&t.push(i),e)}function q4(e,t,n,r,i){switch(t){case"focusin":return lr=Ca(lr,e,t,n,r,i),!0;case"dragenter":return or=Ca(or,e,t,n,r,i),!0;case"mouseover":return sr=Ca(sr,e,t,n,r,i),!0;case"pointerover":var a=i.pointerId;return pl.set(a,Ca(pl.get(a)||null,e,t,n,r,i)),!0;case"gotpointercapture":return a=i.pointerId,hl.set(a,Ca(hl.get(a)||null,e,t,n,r,i)),!0}return!1}function n8(e){var t=zr(e.target);if(t!==null){var n=ii(t);if(n!==null){if(t=n.tag,t===13){if(t=Hy(n),t!==null){e.blockedOn=t,t8(e.priority,function(){Jy(n)});return}}else if(t===3&&n.stateNode.current.memoizedState.isDehydrated){e.blockedOn=n.tag===3?n.stateNode.containerInfo:null;return}}}e.blockedOn=null}function ls(e){if(e.blockedOn!==null)return!1;for(var t=e.targetContainers;0<t.length;){var n=ff(e.domEventName,e.eventSystemFlags,t[0],e.nativeEvent);if(n===null){n=e.nativeEvent;var r=new n.constructor(n.type,n);lf=r,n.target.dispatchEvent(r),lf=null}else return t=ho(n),t!==null&&Sp(t),e.blockedOn=n,!1;t.shift()}return!0}function Oh(e,t,n){ls(e)&&n.delete(t)}function K4(){df=!1,lr!==null&&ls(lr)&&(lr=null),or!==null&&ls(or)&&(or=null),sr!==null&&ls(sr)&&(sr=null),pl.forEach(Oh),hl.forEach(Oh)}function Ea(e,t){e.blockedOn===t&&(e.blockedOn=null,df||(df=!0,$t.unstable_scheduleCallback($t.unstable_NormalPriority,K4)))}function ml(e){function t(i){return Ea(i,e)}if(0<Eo.length){Ea(Eo[0],e);for(var n=1;n<Eo.length;n++){var r=Eo[n];r.blockedOn===e&&(r.blockedOn=null)}}for(lr!==null&&Ea(lr,e),or!==null&&Ea(or,e),sr!==null&&Ea(sr,e),pl.forEach(t),hl.forEach(t),n=0;n<er.length;n++)r=er[n],r.blockedOn===e&&(r.blockedOn=null);for(;0<er.length&&(n=er[0],n.blockedOn===null);)n8(n),n.blockedOn===null&&er.shift()}var Ti=Hn.ReactCurrentBatchConfig,ks=!0;function Y4(e,t,n,r){var i=ye,a=Ti.transition;Ti.transition=null;try{ye=1,_p(e,t,n,r)}finally{ye=i,Ti.transition=a}}function Z4(e,t,n,r){var i=ye,a=Ti.transition;Ti.transition=null;try{ye=4,_p(e,t,n,r)}finally{ye=i,Ti.transition=a}}function _p(e,t,n,r){if(ks){var i=ff(e,t,n,r);if(i===null)id(e,t,r,Ss,n),jh(e,r);else if(q4(i,e,t,n,r))r.stopPropagation();else if(jh(e,r),t&4&&-1<X4.indexOf(e)){for(;i!==null;){var a=ho(i);if(a!==null&&Qy(a),a=ff(e,t,n,r),a===null&&id(e,t,r,Ss,n),a===i)break;i=a}i!==null&&r.stopPropagation()}else id(e,t,r,null,n)}}var Ss=null;function ff(e,t,n,r){if(Ss=null,e=bp(r),e=zr(e),e!==null)if(t=ii(e),t===null)e=null;else if(n=t.tag,n===13){if(e=Hy(t),e!==null)return e;e=null}else if(n===3){if(t.stateNode.current.memoizedState.isDehydrated)return t.tag===3?t.stateNode.containerInfo:null;e=null}else t!==e&&(e=null);return Ss=e,null}function r8(e){switch(e){case"cancel":case"click":case"close":case"contextmenu":case"copy":case"cut":case"auxclick":case"dblclick":case"dragend":case"dragstart":case"drop":case"focusin":case"focusout":case"input":case"invalid":case"keydown":case"keypress":case"keyup":case"mousedown":case"mouseup":case"paste":case"pause":case"play":case"pointercancel":case"pointerdown":case"pointerup":case"ratechange":case"reset":case"resize":case"seeked":case"submit":case"touchcancel":case"touchend":case"touchstart":case"volumechange":case"change":case"selectionchange":case"textInput":case"compositionstart":case"compositionend":case"compositionupdate":case"beforeblur":case"afterblur":case"beforeinput":case"blur":case"fullscreenchange":case"focus":case"hashchange":case"popstate":case"select":case"selectstart":return 1;case"drag":case"dragenter":case"dragexit":case"dragleave":case"dragover":case"mousemove":case"mouseout":case"mouseover":case"pointermove":case"pointerout":case"pointerover":case"scroll":case"toggle":case"touchmove":case"wheel":case"mouseenter":case"mouseleave":case"pointerenter":case"pointerleave":return 4;case"message":switch(L4()){case wp:return 1;case qy:return 4;case bs:case F4:return 16;case Ky:return 536870912;default:return 16}default:return 16}}var rr=null,jp=null,os=null;function i8(){if(os)return os;var e,t=jp,n=t.length,r,i="value"in rr?rr.value:rr.textContent,a=i.length;for(e=0;e<n&&t[e]===i[e];e++);var l=n-e;for(r=1;r<=l&&t[n-r]===i[a-r];r++);return os=i.slice(e,1<r?1-r:void 0)}function ss(e){var t=e.keyCode;return"charCode"in e?(e=e.charCode,e===0&&t===13&&(e=13)):e=t,e===10&&(e=13),32<=e||e===13?e:0}function Mo(){return!0}function Ph(){return!1}function It(e){function t(n,r,i,a,l){this._reactName=n,this._targetInst=i,this.type=r,this.nativeEvent=a,this.target=l,this.currentTarget=null;for(var o in e)e.hasOwnProperty(o)&&(n=e[o],this[o]=n?n(a):a[o]);return this.isDefaultPrevented=(a.defaultPrevented!=null?a.defaultPrevented:a.returnValue===!1)?Mo:Ph,this.isPropagationStopped=Ph,this}return ze(t.prototype,{preventDefault:function(){this.defaultPrevented=!0;var n=this.nativeEvent;n&&(n.preventDefault?n.preventDefault():typeof n.returnValue!="unknown"&&(n.returnValue=!1),this.isDefaultPrevented=Mo)},stopPropagation:function(){var n=this.nativeEvent;n&&(n.stopPropagation?n.stopPropagation():typeof n.cancelBubble!="unknown"&&(n.cancelBubble=!0),this.isPropagationStopped=Mo)},persist:function(){},isPersistent:Mo}),t}var ha={eventPhase:0,bubbles:0,cancelable:0,timeStamp:function(e){return e.timeStamp||Date.now()},defaultPrevented:0,isTrusted:0},Op=It(ha),po=ze({},ha,{view:0,detail:0}),Q4=It(po),Ku,Yu,Ma,Rc=ze({},po,{screenX:0,screenY:0,clientX:0,clientY:0,pageX:0,pageY:0,ctrlKey:0,shiftKey:0,altKey:0,metaKey:0,getModifierState:Pp,button:0,buttons:0,relatedTarget:function(e){return e.relatedTarget===void 0?e.fromElement===e.srcElement?e.toElement:e.fromElement:e.relatedTarget},movementX:function(e){return"movementX"in e?e.movementX:(e!==Ma&&(Ma&&e.type==="mousemove"?(Ku=e.screenX-Ma.screenX,Yu=e.screenY-Ma.screenY):Yu=Ku=0,Ma=e),Ku)},movementY:function(e){return"movementY"in e?e.movementY:Yu}}),Ah=It(Rc),J4=ze({},Rc,{dataTransfer:0}),e9=It(J4),t9=ze({},po,{relatedTarget:0}),Zu=It(t9),n9=ze({},ha,{animationName:0,elapsedTime:0,pseudoElement:0}),r9=It(n9),i9=ze({},ha,{clipboardData:function(e){return"clipboardData"in e?e.clipboardData:window.clipboardData}}),a9=It(i9),l9=ze({},ha,{data:0}),Nh=It(l9),o9={Esc:"Escape",Spacebar:" ",Left:"ArrowLeft",Up:"ArrowUp",Right:"ArrowRight",Down:"ArrowDown",Del:"Delete",Win:"OS",Menu:"ContextMenu",Apps:"ContextMenu",Scroll:"ScrollLock",MozPrintableKey:"Unidentified"},s9={8:"Backspace",9:"Tab",12:"Clear",13:"Enter",16:"Shift",17:"Control",18:"Alt",19:"Pause",20:"CapsLock",27:"Escape",32:" ",33:"PageUp",34:"PageDown",35:"End",36:"Home",37:"ArrowLeft",38:"ArrowUp",39:"ArrowRight",40:"ArrowDown",45:"Insert",46:"Delete",112:"F1",113:"F2",114:"F3",115:"F4",116:"F5",117:"F6",118:"F7",119:"F8",120:"F9",121:"F10",122:"F11",123:"F12",144:"NumLock",145:"ScrollLock",224:"Meta"},c9={Alt:"altKey",Control:"ctrlKey",Meta:"metaKey",Shift:"shiftKey"};function u9(e){var t=this.nativeEvent;return t.getModifierState?t.getModifierState(e):(e=c9[e])?!!t[e]:!1}function Pp(){return u9}var d9=ze({},po,{key:function(e){if(e.key){var t=o9[e.key]||e.key;if(t!=="Unidentified")return t}return e.type==="keypress"?(e=ss(e),e===13?"Enter":String.fromCharCode(e)):e.type==="keydown"||e.type==="keyup"?s9[e.keyCode]||"Unidentified":""},code:0,location:0,ctrlKey:0,shiftKey:0,altKey:0,metaKey:0,repeat:0,locale:0,getModifierState:Pp,charCode:function(e){return e.type==="keypress"?ss(e):0},keyCode:function(e){return e.type==="keydown"||e.type==="keyup"?e.keyCode:0},which:function(e){return e.type==="keypress"?ss(e):e.type==="keydown"||e.type==="keyup"?e.keyCode:0}}),f9=It(d9),p9=ze({},Rc,{pointerId:0,width:0,height:0,pressure:0,tangentialPressure:0,tiltX:0,tiltY:0,twist:0,pointerType:0,isPrimary:0}),Ch=It(p9),h9=ze({},po,{touches:0,targetTouches:0,changedTouches:0,altKey:0,metaKey:0,ctrlKey:0,shiftKey:0,getModifierState:Pp}),m9=It(h9),y9=ze({},ha,{propertyName:0,elapsedTime:0,pseudoElement:0}),v9=It(y9),g9=ze({},Rc,{deltaX:function(e){return"deltaX"in e?e.deltaX:"wheelDeltaX"in e?-e.wheelDeltaX:0},deltaY:function(e){return"deltaY"in e?e.deltaY:"wheelDeltaY"in e?-e.wheelDeltaY:"wheelDelta"in e?-e.wheelDelta:0},deltaZ:0,deltaMode:0}),x9=It(g9),b9=[9,13,27,32],Ap=Dn&&"CompositionEvent"in window,Ja=null;Dn&&"documentMode"in document&&(Ja=document.documentMode);var w9=Dn&&"TextEvent"in window&&!Ja,a8=Dn&&(!Ap||Ja&&8<Ja&&11>=Ja),Eh=" ",Mh=!1;function l8(e,t){switch(e){case"keyup":return b9.indexOf(t.keyCode)!==-1;case"keydown":return t.keyCode!==229;case"keypress":case"mousedown":case"focusout":return!0;default:return!1}}function o8(e){return e=e.detail,typeof e=="object"&&"data"in e?e.data:null}var vi=!1;function k9(e,t){switch(e){case"compositionend":return o8(t);case"keypress":return t.which!==32?null:(Mh=!0,Eh);case"textInput":return e=t.data,e===Eh&&Mh?null:e;default:return null}}function S9(e,t){if(vi)return e==="compositionend"||!Ap&&l8(e,t)?(e=i8(),os=jp=rr=null,vi=!1,e):null;switch(e){case"paste":return null;case"keypress":if(!(t.ctrlKey||t.altKey||t.metaKey)||t.ctrlKey&&t.altKey){if(t.char&&1<t.char.length)return t.char;if(t.which)return String.fromCharCode(t.which)}return null;case"compositionend":return a8&&t.locale!=="ko"?null:t.data;default:return null}}var _9={color:!0,date:!0,datetime:!0,"datetime-local":!0,email:!0,month:!0,number:!0,password:!0,range:!0,search:!0,tel:!0,text:!0,time:!0,url:!0,week:!0};function Th(e){var t=e&&e.nodeName&&e.nodeName.toLowerCase();return t==="input"?!!_9[e.type]:t==="textarea"}function s8(e,t,n,r){Fy(r),t=_s(t,"onChange"),0<t.length&&(n=new Op("onChange","change",null,n,r),e.push({event:n,listeners:t}))}var el=null,yl=null;function j9(e){x8(e,0)}function Bc(e){var t=bi(e);if(My(t))return e}function O9(e,t){if(e==="change")return t}var c8=!1;if(Dn){var Qu;if(Dn){var Ju="oninput"in document;if(!Ju){var $h=document.createElement("div");$h.setAttribute("oninput","return;"),Ju=typeof $h.oninput=="function"}Qu=Ju}else Qu=!1;c8=Qu&&(!document.documentMode||9<document.documentMode)}function zh(){el&&(el.detachEvent("onpropertychange",u8),yl=el=null)}function u8(e){if(e.propertyName==="value"&&Bc(yl)){var t=[];s8(t,yl,e,bp(e)),Uy(j9,t)}}function P9(e,t,n){e==="focusin"?(zh(),el=t,yl=n,el.attachEvent("onpropertychange",u8)):e==="focusout"&&zh()}function A9(e){if(e==="selectionchange"||e==="keyup"||e==="keydown")return Bc(yl)}function N9(e,t){if(e==="click")return Bc(t)}function C9(e,t){if(e==="input"||e==="change")return Bc(t)}function E9(e,t){return e===t&&(e!==0||1/e===1/t)||e!==e&&t!==t}var un=typeof Object.is=="function"?Object.is:E9;function vl(e,t){if(un(e,t))return!0;if(typeof e!="object"||e===null||typeof t!="object"||t===null)return!1;var n=Object.keys(e),r=Object.keys(t);if(n.length!==r.length)return!1;for(r=0;r<n.length;r++){var i=n[r];if(!Xd.call(t,i)||!un(e[i],t[i]))return!1}return!0}function Ih(e){for(;e&&e.firstChild;)e=e.firstChild;return e}function Dh(e,t){var n=Ih(e);e=0;for(var r;n;){if(n.nodeType===3){if(r=e+n.textContent.length,e<=t&&r>=t)return{node:n,offset:t-e};e=r}e:{for(;n;){if(n.nextSibling){n=n.nextSibling;break e}n=n.parentNode}n=void 0}n=Ih(n)}}function d8(e,t){return e&&t?e===t?!0:e&&e.nodeType===3?!1:t&&t.nodeType===3?d8(e,t.parentNode):"contains"in e?e.contains(t):e.compareDocumentPosition?!!(e.compareDocumentPosition(t)&16):!1:!1}function f8(){for(var e=window,t=vs();t instanceof e.HTMLIFrameElement;){try{var n=typeof t.contentWindow.location.href=="string"}catch{n=!1}if(n)e=t.contentWindow;else break;t=vs(e.document)}return t}function Np(e){var t=e&&e.nodeName&&e.nodeName.toLowerCase();return t&&(t==="input"&&(e.type==="text"||e.type==="search"||e.type==="tel"||e.type==="url"||e.type==="password")||t==="textarea"||e.contentEditable==="true")}function M9(e){var t=f8(),n=e.focusedElem,r=e.selectionRange;if(t!==n&&n&&n.ownerDocument&&d8(n.ownerDocument.documentElement,n)){if(r!==null&&Np(n)){if(t=r.start,e=r.end,e===void 0&&(e=t),"selectionStart"in n)n.selectionStart=t,n.selectionEnd=Math.min(e,n.value.length);else if(e=(t=n.ownerDocument||document)&&t.defaultView||window,e.getSelection){e=e.getSelection();var i=n.textContent.length,a=Math.min(r.start,i);r=r.end===void 0?a:Math.min(r.end,i),!e.extend&&a>r&&(i=r,r=a,a=i),i=Dh(n,a);var l=Dh(n,r);i&&l&&(e.rangeCount!==1||e.anchorNode!==i.node||e.anchorOffset!==i.offset||e.focusNode!==l.node||e.focusOffset!==l.offset)&&(t=t.createRange(),t.setStart(i.node,i.offset),e.removeAllRanges(),a>r?(e.addRange(t),e.extend(l.node,l.offset)):(t.setEnd(l.node,l.offset),e.addRange(t)))}}for(t=[],e=n;e=e.parentNode;)e.nodeType===1&&t.push({element:e,left:e.scrollLeft,top:e.scrollTop});for(typeof n.focus=="function"&&n.focus(),n=0;n<t.length;n++)e=t[n],e.element.scrollLeft=e.left,e.element.scrollTop=e.top}}var T9=Dn&&"documentMode"in document&&11>=document.documentMode,gi=null,pf=null,tl=null,hf=!1;function Lh(e,t,n){var r=n.window===n?n.document:n.nodeType===9?n:n.ownerDocument;hf||gi==null||gi!==vs(r)||(r=gi,"selectionStart"in r&&Np(r)?r={start:r.selectionStart,end:r.selectionEnd}:(r=(r.ownerDocument&&r.ownerDocument.defaultView||window).getSelection(),r={anchorNode:r.anchorNode,anchorOffset:r.anchorOffset,focusNode:r.focusNode,focusOffset:r.focusOffset}),tl&&vl(tl,r)||(tl=r,r=_s(pf,"onSelect"),0<r.length&&(t=new Op("onSelect","select",null,t,n),e.push({event:t,listeners:r}),t.target=gi)))}function To(e,t){var n={};return n[e.toLowerCase()]=t.toLowerCase(),n["Webkit"+e]="webkit"+t,n["Moz"+e]="moz"+t,n}var xi={animationend:To("Animation","AnimationEnd"),animationiteration:To("Animation","AnimationIteration"),animationstart:To("Animation","AnimationStart"),transitionend:To("Transition","TransitionEnd")},ed={},p8={};Dn&&(p8=document.createElement("div").style,"AnimationEvent"in window||(delete xi.animationend.animation,delete xi.animationiteration.animation,delete xi.animationstart.animation),"TransitionEvent"in window||delete xi.transitionend.transition);function Wc(e){if(ed[e])return ed[e];if(!xi[e])return e;var t=xi[e],n;for(n in t)if(t.hasOwnProperty(n)&&n in p8)return ed[e]=t[n];return e}var h8=Wc("animationend"),m8=Wc("animationiteration"),y8=Wc("animationstart"),v8=Wc("transitionend"),g8=new Map,Fh="abort auxClick cancel canPlay canPlayThrough click close contextMenu copy cut drag dragEnd dragEnter dragExit dragLeave dragOver dragStart drop durationChange emptied encrypted ended error gotPointerCapture input invalid keyDown keyPress keyUp load loadedData loadedMetadata loadStart lostPointerCapture mouseDown mouseMove mouseOut mouseOver mouseUp paste pause play playing pointerCancel pointerDown pointerMove pointerOut pointerOver pointerUp progress rateChange reset resize seeked seeking stalled submit suspend timeUpdate touchCancel touchEnd touchStart volumeChange scroll toggle touchMove waiting wheel".split(" ");function xr(e,t){g8.set(e,t),ri(t,[e])}for(var td=0;td<Fh.length;td++){var nd=Fh[td],$9=nd.toLowerCase(),z9=nd[0].toUpperCase()+nd.slice(1);xr($9,"on"+z9)}xr(h8,"onAnimationEnd");xr(m8,"onAnimationIteration");xr(y8,"onAnimationStart");xr("dblclick","onDoubleClick");xr("focusin","onFocus");xr("focusout","onBlur");xr(v8,"onTransitionEnd");Fi("onMouseEnter",["mouseout","mouseover"]);Fi("onMouseLeave",["mouseout","mouseover"]);Fi("onPointerEnter",["pointerout","pointerover"]);Fi("onPointerLeave",["pointerout","pointerover"]);ri("onChange","change click focusin focusout input keydown keyup selectionchange".split(" "));ri("onSelect","focusout contextmenu dragend focusin keydown keyup mousedown mouseup selectionchange".split(" "));ri("onBeforeInput",["compositionend","keypress","textInput","paste"]);ri("onCompositionEnd","compositionend focusout keydown keypress keyup mousedown".split(" "));ri("onCompositionStart","compositionstart focusout keydown keypress keyup mousedown".split(" "));ri("onCompositionUpdate","compositionupdate focusout keydown keypress keyup mousedown".split(" "));var Ka="abort canplay canplaythrough durationchange emptied encrypted ended error loadeddata loadedmetadata loadstart pause play playing progress ratechange resize seeked seeking stalled suspend timeupdate volumechange waiting".split(" "),I9=new Set("cancel close invalid load scroll toggle".split(" ").concat(Ka));function Rh(e,t,n){var r=e.type||"unknown-event";e.currentTarget=n,$4(r,t,void 0,e),e.currentTarget=null}function x8(e,t){t=(t&4)!==0;for(var n=0;n<e.length;n++){var r=e[n],i=r.event;r=r.listeners;e:{var a=void 0;if(t)for(var l=r.length-1;0<=l;l--){var o=r[l],s=o.instance,u=o.currentTarget;if(o=o.listener,s!==a&&i.isPropagationStopped())break e;Rh(i,o,u),a=s}else for(l=0;l<r.length;l++){if(o=r[l],s=o.instance,u=o.currentTarget,o=o.listener,s!==a&&i.isPropagationStopped())break e;Rh(i,o,u),a=s}}}if(xs)throw e=cf,xs=!1,cf=null,e}function Oe(e,t){var n=t[xf];n===void 0&&(n=t[xf]=new Set);var r=e+"__bubble";n.has(r)||(b8(t,e,2,!1),n.add(r))}function rd(e,t,n){var r=0;t&&(r|=4),b8(n,e,r,t)}var $o="_reactListening"+Math.random().toString(36).slice(2);function gl(e){if(!e[$o]){e[$o]=!0,Py.forEach(function(n){n!=="selectionchange"&&(I9.has(n)||rd(n,!1,e),rd(n,!0,e))});var t=e.nodeType===9?e:e.ownerDocument;t===null||t[$o]||(t[$o]=!0,rd("selectionchange",!1,t))}}function b8(e,t,n,r){switch(r8(t)){case 1:var i=Y4;break;case 4:i=Z4;break;default:i=_p}n=i.bind(null,t,n,e),i=void 0,!sf||t!=="touchstart"&&t!=="touchmove"&&t!=="wheel"||(i=!0),r?i!==void 0?e.addEventListener(t,n,{capture:!0,passive:i}):e.addEventListener(t,n,!0):i!==void 0?e.addEventListener(t,n,{passive:i}):e.addEventListener(t,n,!1)}function id(e,t,n,r,i){var a=r;if(!(t&1)&&!(t&2)&&r!==null)e:for(;;){if(r===null)return;var l=r.tag;if(l===3||l===4){var o=r.stateNode.containerInfo;if(o===i||o.nodeType===8&&o.parentNode===i)break;if(l===4)for(l=r.return;l!==null;){var s=l.tag;if((s===3||s===4)&&(s=l.stateNode.containerInfo,s===i||s.nodeType===8&&s.parentNode===i))return;l=l.return}for(;o!==null;){if(l=zr(o),l===null)return;if(s=l.tag,s===5||s===6){r=a=l;continue e}o=o.parentNode}}r=r.return}Uy(function(){var u=a,f=bp(n),d=[];e:{var p=g8.get(e);if(p!==void 0){var h=Op,b=e;switch(e){case"keypress":if(ss(n)===0)break e;case"keydown":case"keyup":h=f9;break;case"focusin":b="focus",h=Zu;break;case"focusout":b="blur",h=Zu;break;case"beforeblur":case"afterblur":h=Zu;break;case"click":if(n.button===2)break e;case"auxclick":case"dblclick":case"mousedown":case"mousemove":case"mouseup":case"mouseout":case"mouseover":case"contextmenu":h=Ah;break;case"drag":case"dragend":case"dragenter":case"dragexit":case"dragleave":case"dragover":case"dragstart":case"drop":h=e9;break;case"touchcancel":case"touchend":case"touchmove":case"touchstart":h=m9;break;case h8:case m8:case y8:h=r9;break;case v8:h=v9;break;case"scroll":h=Q4;break;case"wheel":h=x9;break;case"copy":case"cut":case"paste":h=a9;break;case"gotpointercapture":case"lostpointercapture":case"pointercancel":case"pointerdown":case"pointermove":case"pointerout":case"pointerover":case"pointerup":h=Ch}var v=(t&4)!==0,w=!v&&e==="scroll",y=v?p!==null?p+"Capture":null:p;v=[];for(var m=u,g;m!==null;){g=m;var S=g.stateNode;if(g.tag===5&&S!==null&&(g=S,y!==null&&(S=fl(m,y),S!=null&&v.push(xl(m,S,g)))),w)break;m=m.return}0<v.length&&(p=new h(p,b,null,n,f),d.push({event:p,listeners:v}))}}if(!(t&7)){e:{if(p=e==="mouseover"||e==="pointerover",h=e==="mouseout"||e==="pointerout",p&&n!==lf&&(b=n.relatedTarget||n.fromElement)&&(zr(b)||b[Ln]))break e;if((h||p)&&(p=f.window===f?f:(p=f.ownerDocument)?p.defaultView||p.parentWindow:window,h?(b=n.relatedTarget||n.toElement,h=u,b=b?zr(b):null,b!==null&&(w=ii(b),b!==w||b.tag!==5&&b.tag!==6)&&(b=null)):(h=null,b=u),h!==b)){if(v=Ah,S="onMouseLeave",y="onMouseEnter",m="mouse",(e==="pointerout"||e==="pointerover")&&(v=Ch,S="onPointerLeave",y="onPointerEnter",m="pointer"),w=h==null?p:bi(h),g=b==null?p:bi(b),p=new v(S,m+"leave",h,n,f),p.target=w,p.relatedTarget=g,S=null,zr(f)===u&&(v=new v(y,m+"enter",b,n,f),v.target=g,v.relatedTarget=w,S=v),w=S,h&&b)t:{for(v=h,y=b,m=0,g=v;g;g=ci(g))m++;for(g=0,S=y;S;S=ci(S))g++;for(;0<m-g;)v=ci(v),m--;for(;0<g-m;)y=ci(y),g--;for(;m--;){if(v===y||y!==null&&v===y.alternate)break t;v=ci(v),y=ci(y)}v=null}else v=null;h!==null&&Bh(d,p,h,v,!1),b!==null&&w!==null&&Bh(d,w,b,v,!0)}}e:{if(p=u?bi(u):window,h=p.nodeName&&p.nodeName.toLowerCase(),h==="select"||h==="input"&&p.type==="file")var x=O9;else if(Th(p))if(c8)x=C9;else{x=A9;var k=P9}else(h=p.nodeName)&&h.toLowerCase()==="input"&&(p.type==="checkbox"||p.type==="radio")&&(x=N9);if(x&&(x=x(e,u))){s8(d,x,n,f);break e}k&&k(e,p,u),e==="focusout"&&(k=p._wrapperState)&&k.controlled&&p.type==="number"&&ef(p,"number",p.value)}switch(k=u?bi(u):window,e){case"focusin":(Th(k)||k.contentEditable==="true")&&(gi=k,pf=u,tl=null);break;case"focusout":tl=pf=gi=null;break;case"mousedown":hf=!0;break;case"contextmenu":case"mouseup":case"dragend":hf=!1,Lh(d,n,f);break;case"selectionchange":if(T9)break;case"keydown":case"keyup":Lh(d,n,f)}var _;if(Ap)e:{switch(e){case"compositionstart":var j="onCompositionStart";break e;case"compositionend":j="onCompositionEnd";break e;case"compositionupdate":j="onCompositionUpdate";break e}j=void 0}else vi?l8(e,n)&&(j="onCompositionEnd"):e==="keydown"&&n.keyCode===229&&(j="onCompositionStart");j&&(a8&&n.locale!=="ko"&&(vi||j!=="onCompositionStart"?j==="onCompositionEnd"&&vi&&(_=i8()):(rr=f,jp="value"in rr?rr.value:rr.textContent,vi=!0)),k=_s(u,j),0<k.length&&(j=new Nh(j,e,null,n,f),d.push({event:j,listeners:k}),_?j.data=_:(_=o8(n),_!==null&&(j.data=_)))),(_=w9?k9(e,n):S9(e,n))&&(u=_s(u,"onBeforeInput"),0<u.length&&(f=new Nh("onBeforeInput","beforeinput",null,n,f),d.push({event:f,listeners:u}),f.data=_))}x8(d,t)})}function xl(e,t,n){return{instance:e,listener:t,currentTarget:n}}function _s(e,t){for(var n=t+"Capture",r=[];e!==null;){var i=e,a=i.stateNode;i.tag===5&&a!==null&&(i=a,a=fl(e,n),a!=null&&r.unshift(xl(e,a,i)),a=fl(e,t),a!=null&&r.push(xl(e,a,i))),e=e.return}return r}function ci(e){if(e===null)return null;do e=e.return;while(e&&e.tag!==5);return e||null}function Bh(e,t,n,r,i){for(var a=t._reactName,l=[];n!==null&&n!==r;){var o=n,s=o.alternate,u=o.stateNode;if(s!==null&&s===r)break;o.tag===5&&u!==null&&(o=u,i?(s=fl(n,a),s!=null&&l.unshift(xl(n,s,o))):i||(s=fl(n,a),s!=null&&l.push(xl(n,s,o)))),n=n.return}l.length!==0&&e.push({event:t,listeners:l})}var D9=/\r\n?/g,L9=/\u0000|\uFFFD/g;function Wh(e){return(typeof e=="string"?e:""+e).replace(D9,`
`).replace(L9,"")}function zo(e,t,n){if(t=Wh(t),Wh(e)!==t&&n)throw Error(U(425))}function js(){}var mf=null,yf=null;function vf(e,t){return e==="textarea"||e==="noscript"||typeof t.children=="string"||typeof t.children=="number"||typeof t.dangerouslySetInnerHTML=="object"&&t.dangerouslySetInnerHTML!==null&&t.dangerouslySetInnerHTML.__html!=null}var gf=typeof setTimeout=="function"?setTimeout:void 0,F9=typeof clearTimeout=="function"?clearTimeout:void 0,Uh=typeof Promise=="function"?Promise:void 0,R9=typeof queueMicrotask=="function"?queueMicrotask:typeof Uh<"u"?function(e){return Uh.resolve(null).then(e).catch(B9)}:gf;function B9(e){setTimeout(function(){throw e})}function ad(e,t){var n=t,r=0;do{var i=n.nextSibling;if(e.removeChild(n),i&&i.nodeType===8)if(n=i.data,n==="/$"){if(r===0){e.removeChild(i),ml(t);return}r--}else n!=="$"&&n!=="$?"&&n!=="$!"||r++;n=i}while(n);ml(t)}function cr(e){for(;e!=null;e=e.nextSibling){var t=e.nodeType;if(t===1||t===3)break;if(t===8){if(t=e.data,t==="$"||t==="$!"||t==="$?")break;if(t==="/$")return null}}return e}function Hh(e){e=e.previousSibling;for(var t=0;e;){if(e.nodeType===8){var n=e.data;if(n==="$"||n==="$!"||n==="$?"){if(t===0)return e;t--}else n==="/$"&&t++}e=e.previousSibling}return null}var ma=Math.random().toString(36).slice(2),mn="__reactFiber$"+ma,bl="__reactProps$"+ma,Ln="__reactContainer$"+ma,xf="__reactEvents$"+ma,W9="__reactListeners$"+ma,U9="__reactHandles$"+ma;function zr(e){var t=e[mn];if(t)return t;for(var n=e.parentNode;n;){if(t=n[Ln]||n[mn]){if(n=t.alternate,t.child!==null||n!==null&&n.child!==null)for(e=Hh(e);e!==null;){if(n=e[mn])return n;e=Hh(e)}return t}e=n,n=e.parentNode}return null}function ho(e){return e=e[mn]||e[Ln],!e||e.tag!==5&&e.tag!==6&&e.tag!==13&&e.tag!==3?null:e}function bi(e){if(e.tag===5||e.tag===6)return e.stateNode;throw Error(U(33))}function Uc(e){return e[bl]||null}var bf=[],wi=-1;function br(e){return{current:e}}function Ne(e){0>wi||(e.current=bf[wi],bf[wi]=null,wi--)}function je(e,t){wi++,bf[wi]=e.current,e.current=t}var vr={},mt=br(vr),_t=br(!1),Xr=vr;function Ri(e,t){var n=e.type.contextTypes;if(!n)return vr;var r=e.stateNode;if(r&&r.__reactInternalMemoizedUnmaskedChildContext===t)return r.__reactInternalMemoizedMaskedChildContext;var i={},a;for(a in n)i[a]=t[a];return r&&(e=e.stateNode,e.__reactInternalMemoizedUnmaskedChildContext=t,e.__reactInternalMemoizedMaskedChildContext=i),i}function jt(e){return e=e.childContextTypes,e!=null}function Os(){Ne(_t),Ne(mt)}function Gh(e,t,n){if(mt.current!==vr)throw Error(U(168));je(mt,t),je(_t,n)}function w8(e,t,n){var r=e.stateNode;if(t=t.childContextTypes,typeof r.getChildContext!="function")return n;r=r.getChildContext();for(var i in r)if(!(i in t))throw Error(U(108,P4(e)||"Unknown",i));return ze({},n,r)}function Ps(e){return e=(e=e.stateNode)&&e.__reactInternalMemoizedMergedChildContext||vr,Xr=mt.current,je(mt,e),je(_t,_t.current),!0}function Vh(e,t,n){var r=e.stateNode;if(!r)throw Error(U(169));n?(e=w8(e,t,Xr),r.__reactInternalMemoizedMergedChildContext=e,Ne(_t),Ne(mt),je(mt,e)):Ne(_t),je(_t,n)}var Pn=null,Hc=!1,ld=!1;function k8(e){Pn===null?Pn=[e]:Pn.push(e)}function H9(e){Hc=!0,k8(e)}function wr(){if(!ld&&Pn!==null){ld=!0;var e=0,t=ye;try{var n=Pn;for(ye=1;e<n.length;e++){var r=n[e];do r=r(!0);while(r!==null)}Pn=null,Hc=!1}catch(i){throw Pn!==null&&(Pn=Pn.slice(e+1)),Xy(wp,wr),i}finally{ye=t,ld=!1}}return null}var ki=[],Si=0,As=null,Ns=0,Rt=[],Bt=0,qr=null,An=1,Nn="";function Nr(e,t){ki[Si++]=Ns,ki[Si++]=As,As=e,Ns=t}function S8(e,t,n){Rt[Bt++]=An,Rt[Bt++]=Nn,Rt[Bt++]=qr,qr=e;var r=An;e=Nn;var i=32-on(r)-1;r&=~(1<<i),n+=1;var a=32-on(t)+i;if(30<a){var l=i-i%5;a=(r&(1<<l)-1).toString(32),r>>=l,i-=l,An=1<<32-on(t)+i|n<<i|r,Nn=a+e}else An=1<<a|n<<i|r,Nn=e}function Cp(e){e.return!==null&&(Nr(e,1),S8(e,1,0))}function Ep(e){for(;e===As;)As=ki[--Si],ki[Si]=null,Ns=ki[--Si],ki[Si]=null;for(;e===qr;)qr=Rt[--Bt],Rt[Bt]=null,Nn=Rt[--Bt],Rt[Bt]=null,An=Rt[--Bt],Rt[Bt]=null}var Tt=null,Mt=null,Ce=!1,rn=null;function _8(e,t){var n=Wt(5,null,null,0);n.elementType="DELETED",n.stateNode=t,n.return=e,t=e.deletions,t===null?(e.deletions=[n],e.flags|=16):t.push(n)}function Xh(e,t){switch(e.tag){case 5:var n=e.type;return t=t.nodeType!==1||n.toLowerCase()!==t.nodeName.toLowerCase()?null:t,t!==null?(e.stateNode=t,Tt=e,Mt=cr(t.firstChild),!0):!1;case 6:return t=e.pendingProps===""||t.nodeType!==3?null:t,t!==null?(e.stateNode=t,Tt=e,Mt=null,!0):!1;case 13:return t=t.nodeType!==8?null:t,t!==null?(n=qr!==null?{id:An,overflow:Nn}:null,e.memoizedState={dehydrated:t,treeContext:n,retryLane:1073741824},n=Wt(18,null,null,0),n.stateNode=t,n.return=e,e.child=n,Tt=e,Mt=null,!0):!1;default:return!1}}function wf(e){return(e.mode&1)!==0&&(e.flags&128)===0}function kf(e){if(Ce){var t=Mt;if(t){var n=t;if(!Xh(e,t)){if(wf(e))throw Error(U(418));t=cr(n.nextSibling);var r=Tt;t&&Xh(e,t)?_8(r,n):(e.flags=e.flags&-4097|2,Ce=!1,Tt=e)}}else{if(wf(e))throw Error(U(418));e.flags=e.flags&-4097|2,Ce=!1,Tt=e}}}function qh(e){for(e=e.return;e!==null&&e.tag!==5&&e.tag!==3&&e.tag!==13;)e=e.return;Tt=e}function Io(e){if(e!==Tt)return!1;if(!Ce)return qh(e),Ce=!0,!1;var t;if((t=e.tag!==3)&&!(t=e.tag!==5)&&(t=e.type,t=t!=="head"&&t!=="body"&&!vf(e.type,e.memoizedProps)),t&&(t=Mt)){if(wf(e))throw j8(),Error(U(418));for(;t;)_8(e,t),t=cr(t.nextSibling)}if(qh(e),e.tag===13){if(e=e.memoizedState,e=e!==null?e.dehydrated:null,!e)throw Error(U(317));e:{for(e=e.nextSibling,t=0;e;){if(e.nodeType===8){var n=e.data;if(n==="/$"){if(t===0){Mt=cr(e.nextSibling);break e}t--}else n!=="$"&&n!=="$!"&&n!=="$?"||t++}e=e.nextSibling}Mt=null}}else Mt=Tt?cr(e.stateNode.nextSibling):null;return!0}function j8(){for(var e=Mt;e;)e=cr(e.nextSibling)}function Bi(){Mt=Tt=null,Ce=!1}function Mp(e){rn===null?rn=[e]:rn.push(e)}var G9=Hn.ReactCurrentBatchConfig;function Ta(e,t,n){if(e=n.ref,e!==null&&typeof e!="function"&&typeof e!="object"){if(n._owner){if(n=n._owner,n){if(n.tag!==1)throw Error(U(309));var r=n.stateNode}if(!r)throw Error(U(147,e));var i=r,a=""+e;return t!==null&&t.ref!==null&&typeof t.ref=="function"&&t.ref._stringRef===a?t.ref:(t=function(l){var o=i.refs;l===null?delete o[a]:o[a]=l},t._stringRef=a,t)}if(typeof e!="string")throw Error(U(284));if(!n._owner)throw Error(U(290,e))}return e}function Do(e,t){throw e=Object.prototype.toString.call(t),Error(U(31,e==="[object Object]"?"object with keys {"+Object.keys(t).join(", ")+"}":e))}function Kh(e){var t=e._init;return t(e._payload)}function O8(e){function t(y,m){if(e){var g=y.deletions;g===null?(y.deletions=[m],y.flags|=16):g.push(m)}}function n(y,m){if(!e)return null;for(;m!==null;)t(y,m),m=m.sibling;return null}function r(y,m){for(y=new Map;m!==null;)m.key!==null?y.set(m.key,m):y.set(m.index,m),m=m.sibling;return y}function i(y,m){return y=pr(y,m),y.index=0,y.sibling=null,y}function a(y,m,g){return y.index=g,e?(g=y.alternate,g!==null?(g=g.index,g<m?(y.flags|=2,m):g):(y.flags|=2,m)):(y.flags|=1048576,m)}function l(y){return e&&y.alternate===null&&(y.flags|=2),y}function o(y,m,g,S){return m===null||m.tag!==6?(m=pd(g,y.mode,S),m.return=y,m):(m=i(m,g),m.return=y,m)}function s(y,m,g,S){var x=g.type;return x===yi?f(y,m,g.props.children,S,g.key):m!==null&&(m.elementType===x||typeof x=="object"&&x!==null&&x.$$typeof===Zn&&Kh(x)===m.type)?(S=i(m,g.props),S.ref=Ta(y,m,g),S.return=y,S):(S=ms(g.type,g.key,g.props,null,y.mode,S),S.ref=Ta(y,m,g),S.return=y,S)}function u(y,m,g,S){return m===null||m.tag!==4||m.stateNode.containerInfo!==g.containerInfo||m.stateNode.implementation!==g.implementation?(m=hd(g,y.mode,S),m.return=y,m):(m=i(m,g.children||[]),m.return=y,m)}function f(y,m,g,S,x){return m===null||m.tag!==7?(m=Ur(g,y.mode,S,x),m.return=y,m):(m=i(m,g),m.return=y,m)}function d(y,m,g){if(typeof m=="string"&&m!==""||typeof m=="number")return m=pd(""+m,y.mode,g),m.return=y,m;if(typeof m=="object"&&m!==null){switch(m.$$typeof){case Oo:return g=ms(m.type,m.key,m.props,null,y.mode,g),g.ref=Ta(y,null,m),g.return=y,g;case mi:return m=hd(m,y.mode,g),m.return=y,m;case Zn:var S=m._init;return d(y,S(m._payload),g)}if(Xa(m)||Aa(m))return m=Ur(m,y.mode,g,null),m.return=y,m;Do(y,m)}return null}function p(y,m,g,S){var x=m!==null?m.key:null;if(typeof g=="string"&&g!==""||typeof g=="number")return x!==null?null:o(y,m,""+g,S);if(typeof g=="object"&&g!==null){switch(g.$$typeof){case Oo:return g.key===x?s(y,m,g,S):null;case mi:return g.key===x?u(y,m,g,S):null;case Zn:return x=g._init,p(y,m,x(g._payload),S)}if(Xa(g)||Aa(g))return x!==null?null:f(y,m,g,S,null);Do(y,g)}return null}function h(y,m,g,S,x){if(typeof S=="string"&&S!==""||typeof S=="number")return y=y.get(g)||null,o(m,y,""+S,x);if(typeof S=="object"&&S!==null){switch(S.$$typeof){case Oo:return y=y.get(S.key===null?g:S.key)||null,s(m,y,S,x);case mi:return y=y.get(S.key===null?g:S.key)||null,u(m,y,S,x);case Zn:var k=S._init;return h(y,m,g,k(S._payload),x)}if(Xa(S)||Aa(S))return y=y.get(g)||null,f(m,y,S,x,null);Do(m,S)}return null}function b(y,m,g,S){for(var x=null,k=null,_=m,j=m=0,O=null;_!==null&&j<g.length;j++){_.index>j?(O=_,_=null):O=_.sibling;var M=p(y,_,g[j],S);if(M===null){_===null&&(_=O);break}e&&_&&M.alternate===null&&t(y,_),m=a(M,m,j),k===null?x=M:k.sibling=M,k=M,_=O}if(j===g.length)return n(y,_),Ce&&Nr(y,j),x;if(_===null){for(;j<g.length;j++)_=d(y,g[j],S),_!==null&&(m=a(_,m,j),k===null?x=_:k.sibling=_,k=_);return Ce&&Nr(y,j),x}for(_=r(y,_);j<g.length;j++)O=h(_,y,j,g[j],S),O!==null&&(e&&O.alternate!==null&&_.delete(O.key===null?j:O.key),m=a(O,m,j),k===null?x=O:k.sibling=O,k=O);return e&&_.forEach(function(E){return t(y,E)}),Ce&&Nr(y,j),x}function v(y,m,g,S){var x=Aa(g);if(typeof x!="function")throw Error(U(150));if(g=x.call(g),g==null)throw Error(U(151));for(var k=x=null,_=m,j=m=0,O=null,M=g.next();_!==null&&!M.done;j++,M=g.next()){_.index>j?(O=_,_=null):O=_.sibling;var E=p(y,_,M.value,S);if(E===null){_===null&&(_=O);break}e&&_&&E.alternate===null&&t(y,_),m=a(E,m,j),k===null?x=E:k.sibling=E,k=E,_=O}if(M.done)return n(y,_),Ce&&Nr(y,j),x;if(_===null){for(;!M.done;j++,M=g.next())M=d(y,M.value,S),M!==null&&(m=a(M,m,j),k===null?x=M:k.sibling=M,k=M);return Ce&&Nr(y,j),x}for(_=r(y,_);!M.done;j++,M=g.next())M=h(_,y,j,M.value,S),M!==null&&(e&&M.alternate!==null&&_.delete(M.key===null?j:M.key),m=a(M,m,j),k===null?x=M:k.sibling=M,k=M);return e&&_.forEach(function(A){return t(y,A)}),Ce&&Nr(y,j),x}function w(y,m,g,S){if(typeof g=="object"&&g!==null&&g.type===yi&&g.key===null&&(g=g.props.children),typeof g=="object"&&g!==null){switch(g.$$typeof){case Oo:e:{for(var x=g.key,k=m;k!==null;){if(k.key===x){if(x=g.type,x===yi){if(k.tag===7){n(y,k.sibling),m=i(k,g.props.children),m.return=y,y=m;break e}}else if(k.elementType===x||typeof x=="object"&&x!==null&&x.$$typeof===Zn&&Kh(x)===k.type){n(y,k.sibling),m=i(k,g.props),m.ref=Ta(y,k,g),m.return=y,y=m;break e}n(y,k);break}else t(y,k);k=k.sibling}g.type===yi?(m=Ur(g.props.children,y.mode,S,g.key),m.return=y,y=m):(S=ms(g.type,g.key,g.props,null,y.mode,S),S.ref=Ta(y,m,g),S.return=y,y=S)}return l(y);case mi:e:{for(k=g.key;m!==null;){if(m.key===k)if(m.tag===4&&m.stateNode.containerInfo===g.containerInfo&&m.stateNode.implementation===g.implementation){n(y,m.sibling),m=i(m,g.children||[]),m.return=y,y=m;break e}else{n(y,m);break}else t(y,m);m=m.sibling}m=hd(g,y.mode,S),m.return=y,y=m}return l(y);case Zn:return k=g._init,w(y,m,k(g._payload),S)}if(Xa(g))return b(y,m,g,S);if(Aa(g))return v(y,m,g,S);Do(y,g)}return typeof g=="string"&&g!==""||typeof g=="number"?(g=""+g,m!==null&&m.tag===6?(n(y,m.sibling),m=i(m,g),m.return=y,y=m):(n(y,m),m=pd(g,y.mode,S),m.return=y,y=m),l(y)):n(y,m)}return w}var Wi=O8(!0),P8=O8(!1),Cs=br(null),Es=null,_i=null,Tp=null;function $p(){Tp=_i=Es=null}function zp(e){var t=Cs.current;Ne(Cs),e._currentValue=t}function Sf(e,t,n){for(;e!==null;){var r=e.alternate;if((e.childLanes&t)!==t?(e.childLanes|=t,r!==null&&(r.childLanes|=t)):r!==null&&(r.childLanes&t)!==t&&(r.childLanes|=t),e===n)break;e=e.return}}function $i(e,t){Es=e,Tp=_i=null,e=e.dependencies,e!==null&&e.firstContext!==null&&(e.lanes&t&&(kt=!0),e.firstContext=null)}function Vt(e){var t=e._currentValue;if(Tp!==e)if(e={context:e,memoizedValue:t,next:null},_i===null){if(Es===null)throw Error(U(308));_i=e,Es.dependencies={lanes:0,firstContext:e}}else _i=_i.next=e;return t}var Ir=null;function Ip(e){Ir===null?Ir=[e]:Ir.push(e)}function A8(e,t,n,r){var i=t.interleaved;return i===null?(n.next=n,Ip(t)):(n.next=i.next,i.next=n),t.interleaved=n,Fn(e,r)}function Fn(e,t){e.lanes|=t;var n=e.alternate;for(n!==null&&(n.lanes|=t),n=e,e=e.return;e!==null;)e.childLanes|=t,n=e.alternate,n!==null&&(n.childLanes|=t),n=e,e=e.return;return n.tag===3?n.stateNode:null}var Qn=!1;function Dp(e){e.updateQueue={baseState:e.memoizedState,firstBaseUpdate:null,lastBaseUpdate:null,shared:{pending:null,interleaved:null,lanes:0},effects:null}}function N8(e,t){e=e.updateQueue,t.updateQueue===e&&(t.updateQueue={baseState:e.baseState,firstBaseUpdate:e.firstBaseUpdate,lastBaseUpdate:e.lastBaseUpdate,shared:e.shared,effects:e.effects})}function Tn(e,t){return{eventTime:e,lane:t,tag:0,payload:null,callback:null,next:null}}function ur(e,t,n){var r=e.updateQueue;if(r===null)return null;if(r=r.shared,se&2){var i=r.pending;return i===null?t.next=t:(t.next=i.next,i.next=t),r.pending=t,Fn(e,n)}return i=r.interleaved,i===null?(t.next=t,Ip(r)):(t.next=i.next,i.next=t),r.interleaved=t,Fn(e,n)}function cs(e,t,n){if(t=t.updateQueue,t!==null&&(t=t.shared,(n&4194240)!==0)){var r=t.lanes;r&=e.pendingLanes,n|=r,t.lanes=n,kp(e,n)}}function Yh(e,t){var n=e.updateQueue,r=e.alternate;if(r!==null&&(r=r.updateQueue,n===r)){var i=null,a=null;if(n=n.firstBaseUpdate,n!==null){do{var l={eventTime:n.eventTime,lane:n.lane,tag:n.tag,payload:n.payload,callback:n.callback,next:null};a===null?i=a=l:a=a.next=l,n=n.next}while(n!==null);a===null?i=a=t:a=a.next=t}else i=a=t;n={baseState:r.baseState,firstBaseUpdate:i,lastBaseUpdate:a,shared:r.shared,effects:r.effects},e.updateQueue=n;return}e=n.lastBaseUpdate,e===null?n.firstBaseUpdate=t:e.next=t,n.lastBaseUpdate=t}function Ms(e,t,n,r){var i=e.updateQueue;Qn=!1;var a=i.firstBaseUpdate,l=i.lastBaseUpdate,o=i.shared.pending;if(o!==null){i.shared.pending=null;var s=o,u=s.next;s.next=null,l===null?a=u:l.next=u,l=s;var f=e.alternate;f!==null&&(f=f.updateQueue,o=f.lastBaseUpdate,o!==l&&(o===null?f.firstBaseUpdate=u:o.next=u,f.lastBaseUpdate=s))}if(a!==null){var d=i.baseState;l=0,f=u=s=null,o=a;do{var p=o.lane,h=o.eventTime;if((r&p)===p){f!==null&&(f=f.next={eventTime:h,lane:0,tag:o.tag,payload:o.payload,callback:o.callback,next:null});e:{var b=e,v=o;switch(p=t,h=n,v.tag){case 1:if(b=v.payload,typeof b=="function"){d=b.call(h,d,p);break e}d=b;break e;case 3:b.flags=b.flags&-65537|128;case 0:if(b=v.payload,p=typeof b=="function"?b.call(h,d,p):b,p==null)break e;d=ze({},d,p);break e;case 2:Qn=!0}}o.callback!==null&&o.lane!==0&&(e.flags|=64,p=i.effects,p===null?i.effects=[o]:p.push(o))}else h={eventTime:h,lane:p,tag:o.tag,payload:o.payload,callback:o.callback,next:null},f===null?(u=f=h,s=d):f=f.next=h,l|=p;if(o=o.next,o===null){if(o=i.shared.pending,o===null)break;p=o,o=p.next,p.next=null,i.lastBaseUpdate=p,i.shared.pending=null}}while(!0);if(f===null&&(s=d),i.baseState=s,i.firstBaseUpdate=u,i.lastBaseUpdate=f,t=i.shared.interleaved,t!==null){i=t;do l|=i.lane,i=i.next;while(i!==t)}else a===null&&(i.shared.lanes=0);Yr|=l,e.lanes=l,e.memoizedState=d}}function Zh(e,t,n){if(e=t.effects,t.effects=null,e!==null)for(t=0;t<e.length;t++){var r=e[t],i=r.callback;if(i!==null){if(r.callback=null,r=n,typeof i!="function")throw Error(U(191,i));i.call(r)}}}var mo={},xn=br(mo),wl=br(mo),kl=br(mo);function Dr(e){if(e===mo)throw Error(U(174));return e}function Lp(e,t){switch(je(kl,t),je(wl,e),je(xn,mo),e=t.nodeType,e){case 9:case 11:t=(t=t.documentElement)?t.namespaceURI:nf(null,"");break;default:e=e===8?t.parentNode:t,t=e.namespaceURI||null,e=e.tagName,t=nf(t,e)}Ne(xn),je(xn,t)}function Ui(){Ne(xn),Ne(wl),Ne(kl)}function C8(e){Dr(kl.current);var t=Dr(xn.current),n=nf(t,e.type);t!==n&&(je(wl,e),je(xn,n))}function Fp(e){wl.current===e&&(Ne(xn),Ne(wl))}var Te=br(0);function Ts(e){for(var t=e;t!==null;){if(t.tag===13){var n=t.memoizedState;if(n!==null&&(n=n.dehydrated,n===null||n.data==="$?"||n.data==="$!"))return t}else if(t.tag===19&&t.memoizedProps.revealOrder!==void 0){if(t.flags&128)return t}else if(t.child!==null){t.child.return=t,t=t.child;continue}if(t===e)break;for(;t.sibling===null;){if(t.return===null||t.return===e)return null;t=t.return}t.sibling.return=t.return,t=t.sibling}return null}var od=[];function Rp(){for(var e=0;e<od.length;e++)od[e]._workInProgressVersionPrimary=null;od.length=0}var us=Hn.ReactCurrentDispatcher,sd=Hn.ReactCurrentBatchConfig,Kr=0,$e=null,qe=null,Je=null,$s=!1,nl=!1,Sl=0,V9=0;function ct(){throw Error(U(321))}function Bp(e,t){if(t===null)return!1;for(var n=0;n<t.length&&n<e.length;n++)if(!un(e[n],t[n]))return!1;return!0}function Wp(e,t,n,r,i,a){if(Kr=a,$e=t,t.memoizedState=null,t.updateQueue=null,t.lanes=0,us.current=e===null||e.memoizedState===null?Y9:Z9,e=n(r,i),nl){a=0;do{if(nl=!1,Sl=0,25<=a)throw Error(U(301));a+=1,Je=qe=null,t.updateQueue=null,us.current=Q9,e=n(r,i)}while(nl)}if(us.current=zs,t=qe!==null&&qe.next!==null,Kr=0,Je=qe=$e=null,$s=!1,t)throw Error(U(300));return e}function Up(){var e=Sl!==0;return Sl=0,e}function hn(){var e={memoizedState:null,baseState:null,baseQueue:null,queue:null,next:null};return Je===null?$e.memoizedState=Je=e:Je=Je.next=e,Je}function Xt(){if(qe===null){var e=$e.alternate;e=e!==null?e.memoizedState:null}else e=qe.next;var t=Je===null?$e.memoizedState:Je.next;if(t!==null)Je=t,qe=e;else{if(e===null)throw Error(U(310));qe=e,e={memoizedState:qe.memoizedState,baseState:qe.baseState,baseQueue:qe.baseQueue,queue:qe.queue,next:null},Je===null?$e.memoizedState=Je=e:Je=Je.next=e}return Je}function _l(e,t){return typeof t=="function"?t(e):t}function cd(e){var t=Xt(),n=t.queue;if(n===null)throw Error(U(311));n.lastRenderedReducer=e;var r=qe,i=r.baseQueue,a=n.pending;if(a!==null){if(i!==null){var l=i.next;i.next=a.next,a.next=l}r.baseQueue=i=a,n.pending=null}if(i!==null){a=i.next,r=r.baseState;var o=l=null,s=null,u=a;do{var f=u.lane;if((Kr&f)===f)s!==null&&(s=s.next={lane:0,action:u.action,hasEagerState:u.hasEagerState,eagerState:u.eagerState,next:null}),r=u.hasEagerState?u.eagerState:e(r,u.action);else{var d={lane:f,action:u.action,hasEagerState:u.hasEagerState,eagerState:u.eagerState,next:null};s===null?(o=s=d,l=r):s=s.next=d,$e.lanes|=f,Yr|=f}u=u.next}while(u!==null&&u!==a);s===null?l=r:s.next=o,un(r,t.memoizedState)||(kt=!0),t.memoizedState=r,t.baseState=l,t.baseQueue=s,n.lastRenderedState=r}if(e=n.interleaved,e!==null){i=e;do a=i.lane,$e.lanes|=a,Yr|=a,i=i.next;while(i!==e)}else i===null&&(n.lanes=0);return[t.memoizedState,n.dispatch]}function ud(e){var t=Xt(),n=t.queue;if(n===null)throw Error(U(311));n.lastRenderedReducer=e;var r=n.dispatch,i=n.pending,a=t.memoizedState;if(i!==null){n.pending=null;var l=i=i.next;do a=e(a,l.action),l=l.next;while(l!==i);un(a,t.memoizedState)||(kt=!0),t.memoizedState=a,t.baseQueue===null&&(t.baseState=a),n.lastRenderedState=a}return[a,r]}function E8(){}function M8(e,t){var n=$e,r=Xt(),i=t(),a=!un(r.memoizedState,i);if(a&&(r.memoizedState=i,kt=!0),r=r.queue,Hp(z8.bind(null,n,r,e),[e]),r.getSnapshot!==t||a||Je!==null&&Je.memoizedState.tag&1){if(n.flags|=2048,jl(9,$8.bind(null,n,r,i,t),void 0,null),tt===null)throw Error(U(349));Kr&30||T8(n,t,i)}return i}function T8(e,t,n){e.flags|=16384,e={getSnapshot:t,value:n},t=$e.updateQueue,t===null?(t={lastEffect:null,stores:null},$e.updateQueue=t,t.stores=[e]):(n=t.stores,n===null?t.stores=[e]:n.push(e))}function $8(e,t,n,r){t.value=n,t.getSnapshot=r,I8(t)&&D8(e)}function z8(e,t,n){return n(function(){I8(t)&&D8(e)})}function I8(e){var t=e.getSnapshot;e=e.value;try{var n=t();return!un(e,n)}catch{return!0}}function D8(e){var t=Fn(e,1);t!==null&&sn(t,e,1,-1)}function Qh(e){var t=hn();return typeof e=="function"&&(e=e()),t.memoizedState=t.baseState=e,e={pending:null,interleaved:null,lanes:0,dispatch:null,lastRenderedReducer:_l,lastRenderedState:e},t.queue=e,e=e.dispatch=K9.bind(null,$e,e),[t.memoizedState,e]}function jl(e,t,n,r){return e={tag:e,create:t,destroy:n,deps:r,next:null},t=$e.updateQueue,t===null?(t={lastEffect:null,stores:null},$e.updateQueue=t,t.lastEffect=e.next=e):(n=t.lastEffect,n===null?t.lastEffect=e.next=e:(r=n.next,n.next=e,e.next=r,t.lastEffect=e)),e}function L8(){return Xt().memoizedState}function ds(e,t,n,r){var i=hn();$e.flags|=e,i.memoizedState=jl(1|t,n,void 0,r===void 0?null:r)}function Gc(e,t,n,r){var i=Xt();r=r===void 0?null:r;var a=void 0;if(qe!==null){var l=qe.memoizedState;if(a=l.destroy,r!==null&&Bp(r,l.deps)){i.memoizedState=jl(t,n,a,r);return}}$e.flags|=e,i.memoizedState=jl(1|t,n,a,r)}function Jh(e,t){return ds(8390656,8,e,t)}function Hp(e,t){return Gc(2048,8,e,t)}function F8(e,t){return Gc(4,2,e,t)}function R8(e,t){return Gc(4,4,e,t)}function B8(e,t){if(typeof t=="function")return e=e(),t(e),function(){t(null)};if(t!=null)return e=e(),t.current=e,function(){t.current=null}}function W8(e,t,n){return n=n!=null?n.concat([e]):null,Gc(4,4,B8.bind(null,t,e),n)}function Gp(){}function U8(e,t){var n=Xt();t=t===void 0?null:t;var r=n.memoizedState;return r!==null&&t!==null&&Bp(t,r[1])?r[0]:(n.memoizedState=[e,t],e)}function H8(e,t){var n=Xt();t=t===void 0?null:t;var r=n.memoizedState;return r!==null&&t!==null&&Bp(t,r[1])?r[0]:(e=e(),n.memoizedState=[e,t],e)}function G8(e,t,n){return Kr&21?(un(n,t)||(n=Yy(),$e.lanes|=n,Yr|=n,e.baseState=!0),t):(e.baseState&&(e.baseState=!1,kt=!0),e.memoizedState=n)}function X9(e,t){var n=ye;ye=n!==0&&4>n?n:4,e(!0);var r=sd.transition;sd.transition={};try{e(!1),t()}finally{ye=n,sd.transition=r}}function V8(){return Xt().memoizedState}function q9(e,t,n){var r=fr(e);if(n={lane:r,action:n,hasEagerState:!1,eagerState:null,next:null},X8(e))q8(t,n);else if(n=A8(e,t,n,r),n!==null){var i=gt();sn(n,e,r,i),K8(n,t,r)}}function K9(e,t,n){var r=fr(e),i={lane:r,action:n,hasEagerState:!1,eagerState:null,next:null};if(X8(e))q8(t,i);else{var a=e.alternate;if(e.lanes===0&&(a===null||a.lanes===0)&&(a=t.lastRenderedReducer,a!==null))try{var l=t.lastRenderedState,o=a(l,n);if(i.hasEagerState=!0,i.eagerState=o,un(o,l)){var s=t.interleaved;s===null?(i.next=i,Ip(t)):(i.next=s.next,s.next=i),t.interleaved=i;return}}catch{}finally{}n=A8(e,t,i,r),n!==null&&(i=gt(),sn(n,e,r,i),K8(n,t,r))}}function X8(e){var t=e.alternate;return e===$e||t!==null&&t===$e}function q8(e,t){nl=$s=!0;var n=e.pending;n===null?t.next=t:(t.next=n.next,n.next=t),e.pending=t}function K8(e,t,n){if(n&4194240){var r=t.lanes;r&=e.pendingLanes,n|=r,t.lanes=n,kp(e,n)}}var zs={readContext:Vt,useCallback:ct,useContext:ct,useEffect:ct,useImperativeHandle:ct,useInsertionEffect:ct,useLayoutEffect:ct,useMemo:ct,useReducer:ct,useRef:ct,useState:ct,useDebugValue:ct,useDeferredValue:ct,useTransition:ct,useMutableSource:ct,useSyncExternalStore:ct,useId:ct,unstable_isNewReconciler:!1},Y9={readContext:Vt,useCallback:function(e,t){return hn().memoizedState=[e,t===void 0?null:t],e},useContext:Vt,useEffect:Jh,useImperativeHandle:function(e,t,n){return n=n!=null?n.concat([e]):null,ds(4194308,4,B8.bind(null,t,e),n)},useLayoutEffect:function(e,t){return ds(4194308,4,e,t)},useInsertionEffect:function(e,t){return ds(4,2,e,t)},useMemo:function(e,t){var n=hn();return t=t===void 0?null:t,e=e(),n.memoizedState=[e,t],e},useReducer:function(e,t,n){var r=hn();return t=n!==void 0?n(t):t,r.memoizedState=r.baseState=t,e={pending:null,interleaved:null,lanes:0,dispatch:null,lastRenderedReducer:e,lastRenderedState:t},r.queue=e,e=e.dispatch=q9.bind(null,$e,e),[r.memoizedState,e]},useRef:function(e){var t=hn();return e={current:e},t.memoizedState=e},useState:Qh,useDebugValue:Gp,useDeferredValue:function(e){return hn().memoizedState=e},useTransition:function(){var e=Qh(!1),t=e[0];return e=X9.bind(null,e[1]),hn().memoizedState=e,[t,e]},useMutableSource:function(){},useSyncExternalStore:function(e,t,n){var r=$e,i=hn();if(Ce){if(n===void 0)throw Error(U(407));n=n()}else{if(n=t(),tt===null)throw Error(U(349));Kr&30||T8(r,t,n)}i.memoizedState=n;var a={value:n,getSnapshot:t};return i.queue=a,Jh(z8.bind(null,r,a,e),[e]),r.flags|=2048,jl(9,$8.bind(null,r,a,n,t),void 0,null),n},useId:function(){var e=hn(),t=tt.identifierPrefix;if(Ce){var n=Nn,r=An;n=(r&~(1<<32-on(r)-1)).toString(32)+n,t=":"+t+"R"+n,n=Sl++,0<n&&(t+="H"+n.toString(32)),t+=":"}else n=V9++,t=":"+t+"r"+n.toString(32)+":";return e.memoizedState=t},unstable_isNewReconciler:!1},Z9={readContext:Vt,useCallback:U8,useContext:Vt,useEffect:Hp,useImperativeHandle:W8,useInsertionEffect:F8,useLayoutEffect:R8,useMemo:H8,useReducer:cd,useRef:L8,useState:function(){return cd(_l)},useDebugValue:Gp,useDeferredValue:function(e){var t=Xt();return G8(t,qe.memoizedState,e)},useTransition:function(){var e=cd(_l)[0],t=Xt().memoizedState;return[e,t]},useMutableSource:E8,useSyncExternalStore:M8,useId:V8,unstable_isNewReconciler:!1},Q9={readContext:Vt,useCallback:U8,useContext:Vt,useEffect:Hp,useImperativeHandle:W8,useInsertionEffect:F8,useLayoutEffect:R8,useMemo:H8,useReducer:ud,useRef:L8,useState:function(){return ud(_l)},useDebugValue:Gp,useDeferredValue:function(e){var t=Xt();return qe===null?t.memoizedState=e:G8(t,qe.memoizedState,e)},useTransition:function(){var e=ud(_l)[0],t=Xt().memoizedState;return[e,t]},useMutableSource:E8,useSyncExternalStore:M8,useId:V8,unstable_isNewReconciler:!1};function Jt(e,t){if(e&&e.defaultProps){t=ze({},t),e=e.defaultProps;for(var n in e)t[n]===void 0&&(t[n]=e[n]);return t}return t}function _f(e,t,n,r){t=e.memoizedState,n=n(r,t),n=n==null?t:ze({},t,n),e.memoizedState=n,e.lanes===0&&(e.updateQueue.baseState=n)}var Vc={isMounted:function(e){return(e=e._reactInternals)?ii(e)===e:!1},enqueueSetState:function(e,t,n){e=e._reactInternals;var r=gt(),i=fr(e),a=Tn(r,i);a.payload=t,n!=null&&(a.callback=n),t=ur(e,a,i),t!==null&&(sn(t,e,i,r),cs(t,e,i))},enqueueReplaceState:function(e,t,n){e=e._reactInternals;var r=gt(),i=fr(e),a=Tn(r,i);a.tag=1,a.payload=t,n!=null&&(a.callback=n),t=ur(e,a,i),t!==null&&(sn(t,e,i,r),cs(t,e,i))},enqueueForceUpdate:function(e,t){e=e._reactInternals;var n=gt(),r=fr(e),i=Tn(n,r);i.tag=2,t!=null&&(i.callback=t),t=ur(e,i,r),t!==null&&(sn(t,e,r,n),cs(t,e,r))}};function e7(e,t,n,r,i,a,l){return e=e.stateNode,typeof e.shouldComponentUpdate=="function"?e.shouldComponentUpdate(r,a,l):t.prototype&&t.prototype.isPureReactComponent?!vl(n,r)||!vl(i,a):!0}function Y8(e,t,n){var r=!1,i=vr,a=t.contextType;return typeof a=="object"&&a!==null?a=Vt(a):(i=jt(t)?Xr:mt.current,r=t.contextTypes,a=(r=r!=null)?Ri(e,i):vr),t=new t(n,a),e.memoizedState=t.state!==null&&t.state!==void 0?t.state:null,t.updater=Vc,e.stateNode=t,t._reactInternals=e,r&&(e=e.stateNode,e.__reactInternalMemoizedUnmaskedChildContext=i,e.__reactInternalMemoizedMaskedChildContext=a),t}function t7(e,t,n,r){e=t.state,typeof t.componentWillReceiveProps=="function"&&t.componentWillReceiveProps(n,r),typeof t.UNSAFE_componentWillReceiveProps=="function"&&t.UNSAFE_componentWillReceiveProps(n,r),t.state!==e&&Vc.enqueueReplaceState(t,t.state,null)}function jf(e,t,n,r){var i=e.stateNode;i.props=n,i.state=e.memoizedState,i.refs={},Dp(e);var a=t.contextType;typeof a=="object"&&a!==null?i.context=Vt(a):(a=jt(t)?Xr:mt.current,i.context=Ri(e,a)),i.state=e.memoizedState,a=t.getDerivedStateFromProps,typeof a=="function"&&(_f(e,t,a,n),i.state=e.memoizedState),typeof t.getDerivedStateFromProps=="function"||typeof i.getSnapshotBeforeUpdate=="function"||typeof i.UNSAFE_componentWillMount!="function"&&typeof i.componentWillMount!="function"||(t=i.state,typeof i.componentWillMount=="function"&&i.componentWillMount(),typeof i.UNSAFE_componentWillMount=="function"&&i.UNSAFE_componentWillMount(),t!==i.state&&Vc.enqueueReplaceState(i,i.state,null),Ms(e,n,i,r),i.state=e.memoizedState),typeof i.componentDidMount=="function"&&(e.flags|=4194308)}function Hi(e,t){try{var n="",r=t;do n+=O4(r),r=r.return;while(r);var i=n}catch(a){i=`
Error generating stack: `+a.message+`
`+a.stack}return{value:e,source:t,stack:i,digest:null}}function dd(e,t,n){return{value:e,source:null,stack:n??null,digest:t??null}}function Of(e,t){try{console.error(t.value)}catch(n){setTimeout(function(){throw n})}}var J9=typeof WeakMap=="function"?WeakMap:Map;function Z8(e,t,n){n=Tn(-1,n),n.tag=3,n.payload={element:null};var r=t.value;return n.callback=function(){Ds||(Ds=!0,If=r),Of(e,t)},n}function Q8(e,t,n){n=Tn(-1,n),n.tag=3;var r=e.type.getDerivedStateFromError;if(typeof r=="function"){var i=t.value;n.payload=function(){return r(i)},n.callback=function(){Of(e,t)}}var a=e.stateNode;return a!==null&&typeof a.componentDidCatch=="function"&&(n.callback=function(){Of(e,t),typeof r!="function"&&(dr===null?dr=new Set([this]):dr.add(this));var l=t.stack;this.componentDidCatch(t.value,{componentStack:l!==null?l:""})}),n}function n7(e,t,n){var r=e.pingCache;if(r===null){r=e.pingCache=new J9;var i=new Set;r.set(t,i)}else i=r.get(t),i===void 0&&(i=new Set,r.set(t,i));i.has(n)||(i.add(n),e=px.bind(null,e,t,n),t.then(e,e))}function r7(e){do{var t;if((t=e.tag===13)&&(t=e.memoizedState,t=t!==null?t.dehydrated!==null:!0),t)return e;e=e.return}while(e!==null);return null}function i7(e,t,n,r,i){return e.mode&1?(e.flags|=65536,e.lanes=i,e):(e===t?e.flags|=65536:(e.flags|=128,n.flags|=131072,n.flags&=-52805,n.tag===1&&(n.alternate===null?n.tag=17:(t=Tn(-1,1),t.tag=2,ur(n,t,1))),n.lanes|=1),e)}var ex=Hn.ReactCurrentOwner,kt=!1;function yt(e,t,n,r){t.child=e===null?P8(t,null,n,r):Wi(t,e.child,n,r)}function a7(e,t,n,r,i){n=n.render;var a=t.ref;return $i(t,i),r=Wp(e,t,n,r,a,i),n=Up(),e!==null&&!kt?(t.updateQueue=e.updateQueue,t.flags&=-2053,e.lanes&=~i,Rn(e,t,i)):(Ce&&n&&Cp(t),t.flags|=1,yt(e,t,r,i),t.child)}function l7(e,t,n,r,i){if(e===null){var a=n.type;return typeof a=="function"&&!Jp(a)&&a.defaultProps===void 0&&n.compare===null&&n.defaultProps===void 0?(t.tag=15,t.type=a,J8(e,t,a,r,i)):(e=ms(n.type,null,r,t,t.mode,i),e.ref=t.ref,e.return=t,t.child=e)}if(a=e.child,!(e.lanes&i)){var l=a.memoizedProps;if(n=n.compare,n=n!==null?n:vl,n(l,r)&&e.ref===t.ref)return Rn(e,t,i)}return t.flags|=1,e=pr(a,r),e.ref=t.ref,e.return=t,t.child=e}function J8(e,t,n,r,i){if(e!==null){var a=e.memoizedProps;if(vl(a,r)&&e.ref===t.ref)if(kt=!1,t.pendingProps=r=a,(e.lanes&i)!==0)e.flags&131072&&(kt=!0);else return t.lanes=e.lanes,Rn(e,t,i)}return Pf(e,t,n,r,i)}function ev(e,t,n){var r=t.pendingProps,i=r.children,a=e!==null?e.memoizedState:null;if(r.mode==="hidden")if(!(t.mode&1))t.memoizedState={baseLanes:0,cachePool:null,transitions:null},je(Oi,Nt),Nt|=n;else{if(!(n&1073741824))return e=a!==null?a.baseLanes|n:n,t.lanes=t.childLanes=1073741824,t.memoizedState={baseLanes:e,cachePool:null,transitions:null},t.updateQueue=null,je(Oi,Nt),Nt|=e,null;t.memoizedState={baseLanes:0,cachePool:null,transitions:null},r=a!==null?a.baseLanes:n,je(Oi,Nt),Nt|=r}else a!==null?(r=a.baseLanes|n,t.memoizedState=null):r=n,je(Oi,Nt),Nt|=r;return yt(e,t,i,n),t.child}function tv(e,t){var n=t.ref;(e===null&&n!==null||e!==null&&e.ref!==n)&&(t.flags|=512,t.flags|=2097152)}function Pf(e,t,n,r,i){var a=jt(n)?Xr:mt.current;return a=Ri(t,a),$i(t,i),n=Wp(e,t,n,r,a,i),r=Up(),e!==null&&!kt?(t.updateQueue=e.updateQueue,t.flags&=-2053,e.lanes&=~i,Rn(e,t,i)):(Ce&&r&&Cp(t),t.flags|=1,yt(e,t,n,i),t.child)}function o7(e,t,n,r,i){if(jt(n)){var a=!0;Ps(t)}else a=!1;if($i(t,i),t.stateNode===null)fs(e,t),Y8(t,n,r),jf(t,n,r,i),r=!0;else if(e===null){var l=t.stateNode,o=t.memoizedProps;l.props=o;var s=l.context,u=n.contextType;typeof u=="object"&&u!==null?u=Vt(u):(u=jt(n)?Xr:mt.current,u=Ri(t,u));var f=n.getDerivedStateFromProps,d=typeof f=="function"||typeof l.getSnapshotBeforeUpdate=="function";d||typeof l.UNSAFE_componentWillReceiveProps!="function"&&typeof l.componentWillReceiveProps!="function"||(o!==r||s!==u)&&t7(t,l,r,u),Qn=!1;var p=t.memoizedState;l.state=p,Ms(t,r,l,i),s=t.memoizedState,o!==r||p!==s||_t.current||Qn?(typeof f=="function"&&(_f(t,n,f,r),s=t.memoizedState),(o=Qn||e7(t,n,o,r,p,s,u))?(d||typeof l.UNSAFE_componentWillMount!="function"&&typeof l.componentWillMount!="function"||(typeof l.componentWillMount=="function"&&l.componentWillMount(),typeof l.UNSAFE_componentWillMount=="function"&&l.UNSAFE_componentWillMount()),typeof l.componentDidMount=="function"&&(t.flags|=4194308)):(typeof l.componentDidMount=="function"&&(t.flags|=4194308),t.memoizedProps=r,t.memoizedState=s),l.props=r,l.state=s,l.context=u,r=o):(typeof l.componentDidMount=="function"&&(t.flags|=4194308),r=!1)}else{l=t.stateNode,N8(e,t),o=t.memoizedProps,u=t.type===t.elementType?o:Jt(t.type,o),l.props=u,d=t.pendingProps,p=l.context,s=n.contextType,typeof s=="object"&&s!==null?s=Vt(s):(s=jt(n)?Xr:mt.current,s=Ri(t,s));var h=n.getDerivedStateFromProps;(f=typeof h=="function"||typeof l.getSnapshotBeforeUpdate=="function")||typeof l.UNSAFE_componentWillReceiveProps!="function"&&typeof l.componentWillReceiveProps!="function"||(o!==d||p!==s)&&t7(t,l,r,s),Qn=!1,p=t.memoizedState,l.state=p,Ms(t,r,l,i);var b=t.memoizedState;o!==d||p!==b||_t.current||Qn?(typeof h=="function"&&(_f(t,n,h,r),b=t.memoizedState),(u=Qn||e7(t,n,u,r,p,b,s)||!1)?(f||typeof l.UNSAFE_componentWillUpdate!="function"&&typeof l.componentWillUpdate!="function"||(typeof l.componentWillUpdate=="function"&&l.componentWillUpdate(r,b,s),typeof l.UNSAFE_componentWillUpdate=="function"&&l.UNSAFE_componentWillUpdate(r,b,s)),typeof l.componentDidUpdate=="function"&&(t.flags|=4),typeof l.getSnapshotBeforeUpdate=="function"&&(t.flags|=1024)):(typeof l.componentDidUpdate!="function"||o===e.memoizedProps&&p===e.memoizedState||(t.flags|=4),typeof l.getSnapshotBeforeUpdate!="function"||o===e.memoizedProps&&p===e.memoizedState||(t.flags|=1024),t.memoizedProps=r,t.memoizedState=b),l.props=r,l.state=b,l.context=s,r=u):(typeof l.componentDidUpdate!="function"||o===e.memoizedProps&&p===e.memoizedState||(t.flags|=4),typeof l.getSnapshotBeforeUpdate!="function"||o===e.memoizedProps&&p===e.memoizedState||(t.flags|=1024),r=!1)}return Af(e,t,n,r,a,i)}function Af(e,t,n,r,i,a){tv(e,t);var l=(t.flags&128)!==0;if(!r&&!l)return i&&Vh(t,n,!1),Rn(e,t,a);r=t.stateNode,ex.current=t;var o=l&&typeof n.getDerivedStateFromError!="function"?null:r.render();return t.flags|=1,e!==null&&l?(t.child=Wi(t,e.child,null,a),t.child=Wi(t,null,o,a)):yt(e,t,o,a),t.memoizedState=r.state,i&&Vh(t,n,!0),t.child}function nv(e){var t=e.stateNode;t.pendingContext?Gh(e,t.pendingContext,t.pendingContext!==t.context):t.context&&Gh(e,t.context,!1),Lp(e,t.containerInfo)}function s7(e,t,n,r,i){return Bi(),Mp(i),t.flags|=256,yt(e,t,n,r),t.child}var Nf={dehydrated:null,treeContext:null,retryLane:0};function Cf(e){return{baseLanes:e,cachePool:null,transitions:null}}function rv(e,t,n){var r=t.pendingProps,i=Te.current,a=!1,l=(t.flags&128)!==0,o;if((o=l)||(o=e!==null&&e.memoizedState===null?!1:(i&2)!==0),o?(a=!0,t.flags&=-129):(e===null||e.memoizedState!==null)&&(i|=1),je(Te,i&1),e===null)return kf(t),e=t.memoizedState,e!==null&&(e=e.dehydrated,e!==null)?(t.mode&1?e.data==="$!"?t.lanes=8:t.lanes=1073741824:t.lanes=1,null):(l=r.children,e=r.fallback,a?(r=t.mode,a=t.child,l={mode:"hidden",children:l},!(r&1)&&a!==null?(a.childLanes=0,a.pendingProps=l):a=Kc(l,r,0,null),e=Ur(e,r,n,null),a.return=t,e.return=t,a.sibling=e,t.child=a,t.child.memoizedState=Cf(n),t.memoizedState=Nf,e):Vp(t,l));if(i=e.memoizedState,i!==null&&(o=i.dehydrated,o!==null))return tx(e,t,l,r,o,i,n);if(a){a=r.fallback,l=t.mode,i=e.child,o=i.sibling;var s={mode:"hidden",children:r.children};return!(l&1)&&t.child!==i?(r=t.child,r.childLanes=0,r.pendingProps=s,t.deletions=null):(r=pr(i,s),r.subtreeFlags=i.subtreeFlags&14680064),o!==null?a=pr(o,a):(a=Ur(a,l,n,null),a.flags|=2),a.return=t,r.return=t,r.sibling=a,t.child=r,r=a,a=t.child,l=e.child.memoizedState,l=l===null?Cf(n):{baseLanes:l.baseLanes|n,cachePool:null,transitions:l.transitions},a.memoizedState=l,a.childLanes=e.childLanes&~n,t.memoizedState=Nf,r}return a=e.child,e=a.sibling,r=pr(a,{mode:"visible",children:r.children}),!(t.mode&1)&&(r.lanes=n),r.return=t,r.sibling=null,e!==null&&(n=t.deletions,n===null?(t.deletions=[e],t.flags|=16):n.push(e)),t.child=r,t.memoizedState=null,r}function Vp(e,t){return t=Kc({mode:"visible",children:t},e.mode,0,null),t.return=e,e.child=t}function Lo(e,t,n,r){return r!==null&&Mp(r),Wi(t,e.child,null,n),e=Vp(t,t.pendingProps.children),e.flags|=2,t.memoizedState=null,e}function tx(e,t,n,r,i,a,l){if(n)return t.flags&256?(t.flags&=-257,r=dd(Error(U(422))),Lo(e,t,l,r)):t.memoizedState!==null?(t.child=e.child,t.flags|=128,null):(a=r.fallback,i=t.mode,r=Kc({mode:"visible",children:r.children},i,0,null),a=Ur(a,i,l,null),a.flags|=2,r.return=t,a.return=t,r.sibling=a,t.child=r,t.mode&1&&Wi(t,e.child,null,l),t.child.memoizedState=Cf(l),t.memoizedState=Nf,a);if(!(t.mode&1))return Lo(e,t,l,null);if(i.data==="$!"){if(r=i.nextSibling&&i.nextSibling.dataset,r)var o=r.dgst;return r=o,a=Error(U(419)),r=dd(a,r,void 0),Lo(e,t,l,r)}if(o=(l&e.childLanes)!==0,kt||o){if(r=tt,r!==null){switch(l&-l){case 4:i=2;break;case 16:i=8;break;case 64:case 128:case 256:case 512:case 1024:case 2048:case 4096:case 8192:case 16384:case 32768:case 65536:case 131072:case 262144:case 524288:case 1048576:case 2097152:case 4194304:case 8388608:case 16777216:case 33554432:case 67108864:i=32;break;case 536870912:i=268435456;break;default:i=0}i=i&(r.suspendedLanes|l)?0:i,i!==0&&i!==a.retryLane&&(a.retryLane=i,Fn(e,i),sn(r,e,i,-1))}return Qp(),r=dd(Error(U(421))),Lo(e,t,l,r)}return i.data==="$?"?(t.flags|=128,t.child=e.child,t=hx.bind(null,e),i._reactRetry=t,null):(e=a.treeContext,Mt=cr(i.nextSibling),Tt=t,Ce=!0,rn=null,e!==null&&(Rt[Bt++]=An,Rt[Bt++]=Nn,Rt[Bt++]=qr,An=e.id,Nn=e.overflow,qr=t),t=Vp(t,r.children),t.flags|=4096,t)}function c7(e,t,n){e.lanes|=t;var r=e.alternate;r!==null&&(r.lanes|=t),Sf(e.return,t,n)}function fd(e,t,n,r,i){var a=e.memoizedState;a===null?e.memoizedState={isBackwards:t,rendering:null,renderingStartTime:0,last:r,tail:n,tailMode:i}:(a.isBackwards=t,a.rendering=null,a.renderingStartTime=0,a.last=r,a.tail=n,a.tailMode=i)}function iv(e,t,n){var r=t.pendingProps,i=r.revealOrder,a=r.tail;if(yt(e,t,r.children,n),r=Te.current,r&2)r=r&1|2,t.flags|=128;else{if(e!==null&&e.flags&128)e:for(e=t.child;e!==null;){if(e.tag===13)e.memoizedState!==null&&c7(e,n,t);else if(e.tag===19)c7(e,n,t);else if(e.child!==null){e.child.return=e,e=e.child;continue}if(e===t)break e;for(;e.sibling===null;){if(e.return===null||e.return===t)break e;e=e.return}e.sibling.return=e.return,e=e.sibling}r&=1}if(je(Te,r),!(t.mode&1))t.memoizedState=null;else switch(i){case"forwards":for(n=t.child,i=null;n!==null;)e=n.alternate,e!==null&&Ts(e)===null&&(i=n),n=n.sibling;n=i,n===null?(i=t.child,t.child=null):(i=n.sibling,n.sibling=null),fd(t,!1,i,n,a);break;case"backwards":for(n=null,i=t.child,t.child=null;i!==null;){if(e=i.alternate,e!==null&&Ts(e)===null){t.child=i;break}e=i.sibling,i.sibling=n,n=i,i=e}fd(t,!0,n,null,a);break;case"together":fd(t,!1,null,null,void 0);break;default:t.memoizedState=null}return t.child}function fs(e,t){!(t.mode&1)&&e!==null&&(e.alternate=null,t.alternate=null,t.flags|=2)}function Rn(e,t,n){if(e!==null&&(t.dependencies=e.dependencies),Yr|=t.lanes,!(n&t.childLanes))return null;if(e!==null&&t.child!==e.child)throw Error(U(153));if(t.child!==null){for(e=t.child,n=pr(e,e.pendingProps),t.child=n,n.return=t;e.sibling!==null;)e=e.sibling,n=n.sibling=pr(e,e.pendingProps),n.return=t;n.sibling=null}return t.child}function nx(e,t,n){switch(t.tag){case 3:nv(t),Bi();break;case 5:C8(t);break;case 1:jt(t.type)&&Ps(t);break;case 4:Lp(t,t.stateNode.containerInfo);break;case 10:var r=t.type._context,i=t.memoizedProps.value;je(Cs,r._currentValue),r._currentValue=i;break;case 13:if(r=t.memoizedState,r!==null)return r.dehydrated!==null?(je(Te,Te.current&1),t.flags|=128,null):n&t.child.childLanes?rv(e,t,n):(je(Te,Te.current&1),e=Rn(e,t,n),e!==null?e.sibling:null);je(Te,Te.current&1);break;case 19:if(r=(n&t.childLanes)!==0,e.flags&128){if(r)return iv(e,t,n);t.flags|=128}if(i=t.memoizedState,i!==null&&(i.rendering=null,i.tail=null,i.lastEffect=null),je(Te,Te.current),r)break;return null;case 22:case 23:return t.lanes=0,ev(e,t,n)}return Rn(e,t,n)}var av,Ef,lv,ov;av=function(e,t){for(var n=t.child;n!==null;){if(n.tag===5||n.tag===6)e.appendChild(n.stateNode);else if(n.tag!==4&&n.child!==null){n.child.return=n,n=n.child;continue}if(n===t)break;for(;n.sibling===null;){if(n.return===null||n.return===t)return;n=n.return}n.sibling.return=n.return,n=n.sibling}};Ef=function(){};lv=function(e,t,n,r){var i=e.memoizedProps;if(i!==r){e=t.stateNode,Dr(xn.current);var a=null;switch(n){case"input":i=Qd(e,i),r=Qd(e,r),a=[];break;case"select":i=ze({},i,{value:void 0}),r=ze({},r,{value:void 0}),a=[];break;case"textarea":i=tf(e,i),r=tf(e,r),a=[];break;default:typeof i.onClick!="function"&&typeof r.onClick=="function"&&(e.onclick=js)}rf(n,r);var l;n=null;for(u in i)if(!r.hasOwnProperty(u)&&i.hasOwnProperty(u)&&i[u]!=null)if(u==="style"){var o=i[u];for(l in o)o.hasOwnProperty(l)&&(n||(n={}),n[l]="")}else u!=="dangerouslySetInnerHTML"&&u!=="children"&&u!=="suppressContentEditableWarning"&&u!=="suppressHydrationWarning"&&u!=="autoFocus"&&(ul.hasOwnProperty(u)?a||(a=[]):(a=a||[]).push(u,null));for(u in r){var s=r[u];if(o=i!=null?i[u]:void 0,r.hasOwnProperty(u)&&s!==o&&(s!=null||o!=null))if(u==="style")if(o){for(l in o)!o.hasOwnProperty(l)||s&&s.hasOwnProperty(l)||(n||(n={}),n[l]="");for(l in s)s.hasOwnProperty(l)&&o[l]!==s[l]&&(n||(n={}),n[l]=s[l])}else n||(a||(a=[]),a.push(u,n)),n=s;else u==="dangerouslySetInnerHTML"?(s=s?s.__html:void 0,o=o?o.__html:void 0,s!=null&&o!==s&&(a=a||[]).push(u,s)):u==="children"?typeof s!="string"&&typeof s!="number"||(a=a||[]).push(u,""+s):u!=="suppressContentEditableWarning"&&u!=="suppressHydrationWarning"&&(ul.hasOwnProperty(u)?(s!=null&&u==="onScroll"&&Oe("scroll",e),a||o===s||(a=[])):(a=a||[]).push(u,s))}n&&(a=a||[]).push("style",n);var u=a;(t.updateQueue=u)&&(t.flags|=4)}};ov=function(e,t,n,r){n!==r&&(t.flags|=4)};function $a(e,t){if(!Ce)switch(e.tailMode){case"hidden":t=e.tail;for(var n=null;t!==null;)t.alternate!==null&&(n=t),t=t.sibling;n===null?e.tail=null:n.sibling=null;break;case"collapsed":n=e.tail;for(var r=null;n!==null;)n.alternate!==null&&(r=n),n=n.sibling;r===null?t||e.tail===null?e.tail=null:e.tail.sibling=null:r.sibling=null}}function ut(e){var t=e.alternate!==null&&e.alternate.child===e.child,n=0,r=0;if(t)for(var i=e.child;i!==null;)n|=i.lanes|i.childLanes,r|=i.subtreeFlags&14680064,r|=i.flags&14680064,i.return=e,i=i.sibling;else for(i=e.child;i!==null;)n|=i.lanes|i.childLanes,r|=i.subtreeFlags,r|=i.flags,i.return=e,i=i.sibling;return e.subtreeFlags|=r,e.childLanes=n,t}function rx(e,t,n){var r=t.pendingProps;switch(Ep(t),t.tag){case 2:case 16:case 15:case 0:case 11:case 7:case 8:case 12:case 9:case 14:return ut(t),null;case 1:return jt(t.type)&&Os(),ut(t),null;case 3:return r=t.stateNode,Ui(),Ne(_t),Ne(mt),Rp(),r.pendingContext&&(r.context=r.pendingContext,r.pendingContext=null),(e===null||e.child===null)&&(Io(t)?t.flags|=4:e===null||e.memoizedState.isDehydrated&&!(t.flags&256)||(t.flags|=1024,rn!==null&&(Ff(rn),rn=null))),Ef(e,t),ut(t),null;case 5:Fp(t);var i=Dr(kl.current);if(n=t.type,e!==null&&t.stateNode!=null)lv(e,t,n,r,i),e.ref!==t.ref&&(t.flags|=512,t.flags|=2097152);else{if(!r){if(t.stateNode===null)throw Error(U(166));return ut(t),null}if(e=Dr(xn.current),Io(t)){r=t.stateNode,n=t.type;var a=t.memoizedProps;switch(r[mn]=t,r[bl]=a,e=(t.mode&1)!==0,n){case"dialog":Oe("cancel",r),Oe("close",r);break;case"iframe":case"object":case"embed":Oe("load",r);break;case"video":case"audio":for(i=0;i<Ka.length;i++)Oe(Ka[i],r);break;case"source":Oe("error",r);break;case"img":case"image":case"link":Oe("error",r),Oe("load",r);break;case"details":Oe("toggle",r);break;case"input":gh(r,a),Oe("invalid",r);break;case"select":r._wrapperState={wasMultiple:!!a.multiple},Oe("invalid",r);break;case"textarea":bh(r,a),Oe("invalid",r)}rf(n,a),i=null;for(var l in a)if(a.hasOwnProperty(l)){var o=a[l];l==="children"?typeof o=="string"?r.textContent!==o&&(a.suppressHydrationWarning!==!0&&zo(r.textContent,o,e),i=["children",o]):typeof o=="number"&&r.textContent!==""+o&&(a.suppressHydrationWarning!==!0&&zo(r.textContent,o,e),i=["children",""+o]):ul.hasOwnProperty(l)&&o!=null&&l==="onScroll"&&Oe("scroll",r)}switch(n){case"input":Po(r),xh(r,a,!0);break;case"textarea":Po(r),wh(r);break;case"select":case"option":break;default:typeof a.onClick=="function"&&(r.onclick=js)}r=i,t.updateQueue=r,r!==null&&(t.flags|=4)}else{l=i.nodeType===9?i:i.ownerDocument,e==="http://www.w3.org/1999/xhtml"&&(e=zy(n)),e==="http://www.w3.org/1999/xhtml"?n==="script"?(e=l.createElement("div"),e.innerHTML="<script><\/script>",e=e.removeChild(e.firstChild)):typeof r.is=="string"?e=l.createElement(n,{is:r.is}):(e=l.createElement(n),n==="select"&&(l=e,r.multiple?l.multiple=!0:r.size&&(l.size=r.size))):e=l.createElementNS(e,n),e[mn]=t,e[bl]=r,av(e,t,!1,!1),t.stateNode=e;e:{switch(l=af(n,r),n){case"dialog":Oe("cancel",e),Oe("close",e),i=r;break;case"iframe":case"object":case"embed":Oe("load",e),i=r;break;case"video":case"audio":for(i=0;i<Ka.length;i++)Oe(Ka[i],e);i=r;break;case"source":Oe("error",e),i=r;break;case"img":case"image":case"link":Oe("error",e),Oe("load",e),i=r;break;case"details":Oe("toggle",e),i=r;break;case"input":gh(e,r),i=Qd(e,r),Oe("invalid",e);break;case"option":i=r;break;case"select":e._wrapperState={wasMultiple:!!r.multiple},i=ze({},r,{value:void 0}),Oe("invalid",e);break;case"textarea":bh(e,r),i=tf(e,r),Oe("invalid",e);break;default:i=r}rf(n,i),o=i;for(a in o)if(o.hasOwnProperty(a)){var s=o[a];a==="style"?Ly(e,s):a==="dangerouslySetInnerHTML"?(s=s?s.__html:void 0,s!=null&&Iy(e,s)):a==="children"?typeof s=="string"?(n!=="textarea"||s!=="")&&dl(e,s):typeof s=="number"&&dl(e,""+s):a!=="suppressContentEditableWarning"&&a!=="suppressHydrationWarning"&&a!=="autoFocus"&&(ul.hasOwnProperty(a)?s!=null&&a==="onScroll"&&Oe("scroll",e):s!=null&&yp(e,a,s,l))}switch(n){case"input":Po(e),xh(e,r,!1);break;case"textarea":Po(e),wh(e);break;case"option":r.value!=null&&e.setAttribute("value",""+yr(r.value));break;case"select":e.multiple=!!r.multiple,a=r.value,a!=null?Ci(e,!!r.multiple,a,!1):r.defaultValue!=null&&Ci(e,!!r.multiple,r.defaultValue,!0);break;default:typeof i.onClick=="function"&&(e.onclick=js)}switch(n){case"button":case"input":case"select":case"textarea":r=!!r.autoFocus;break e;case"img":r=!0;break e;default:r=!1}}r&&(t.flags|=4)}t.ref!==null&&(t.flags|=512,t.flags|=2097152)}return ut(t),null;case 6:if(e&&t.stateNode!=null)ov(e,t,e.memoizedProps,r);else{if(typeof r!="string"&&t.stateNode===null)throw Error(U(166));if(n=Dr(kl.current),Dr(xn.current),Io(t)){if(r=t.stateNode,n=t.memoizedProps,r[mn]=t,(a=r.nodeValue!==n)&&(e=Tt,e!==null))switch(e.tag){case 3:zo(r.nodeValue,n,(e.mode&1)!==0);break;case 5:e.memoizedProps.suppressHydrationWarning!==!0&&zo(r.nodeValue,n,(e.mode&1)!==0)}a&&(t.flags|=4)}else r=(n.nodeType===9?n:n.ownerDocument).createTextNode(r),r[mn]=t,t.stateNode=r}return ut(t),null;case 13:if(Ne(Te),r=t.memoizedState,e===null||e.memoizedState!==null&&e.memoizedState.dehydrated!==null){if(Ce&&Mt!==null&&t.mode&1&&!(t.flags&128))j8(),Bi(),t.flags|=98560,a=!1;else if(a=Io(t),r!==null&&r.dehydrated!==null){if(e===null){if(!a)throw Error(U(318));if(a=t.memoizedState,a=a!==null?a.dehydrated:null,!a)throw Error(U(317));a[mn]=t}else Bi(),!(t.flags&128)&&(t.memoizedState=null),t.flags|=4;ut(t),a=!1}else rn!==null&&(Ff(rn),rn=null),a=!0;if(!a)return t.flags&65536?t:null}return t.flags&128?(t.lanes=n,t):(r=r!==null,r!==(e!==null&&e.memoizedState!==null)&&r&&(t.child.flags|=8192,t.mode&1&&(e===null||Te.current&1?Ke===0&&(Ke=3):Qp())),t.updateQueue!==null&&(t.flags|=4),ut(t),null);case 4:return Ui(),Ef(e,t),e===null&&gl(t.stateNode.containerInfo),ut(t),null;case 10:return zp(t.type._context),ut(t),null;case 17:return jt(t.type)&&Os(),ut(t),null;case 19:if(Ne(Te),a=t.memoizedState,a===null)return ut(t),null;if(r=(t.flags&128)!==0,l=a.rendering,l===null)if(r)$a(a,!1);else{if(Ke!==0||e!==null&&e.flags&128)for(e=t.child;e!==null;){if(l=Ts(e),l!==null){for(t.flags|=128,$a(a,!1),r=l.updateQueue,r!==null&&(t.updateQueue=r,t.flags|=4),t.subtreeFlags=0,r=n,n=t.child;n!==null;)a=n,e=r,a.flags&=14680066,l=a.alternate,l===null?(a.childLanes=0,a.lanes=e,a.child=null,a.subtreeFlags=0,a.memoizedProps=null,a.memoizedState=null,a.updateQueue=null,a.dependencies=null,a.stateNode=null):(a.childLanes=l.childLanes,a.lanes=l.lanes,a.child=l.child,a.subtreeFlags=0,a.deletions=null,a.memoizedProps=l.memoizedProps,a.memoizedState=l.memoizedState,a.updateQueue=l.updateQueue,a.type=l.type,e=l.dependencies,a.dependencies=e===null?null:{lanes:e.lanes,firstContext:e.firstContext}),n=n.sibling;return je(Te,Te.current&1|2),t.child}e=e.sibling}a.tail!==null&&Fe()>Gi&&(t.flags|=128,r=!0,$a(a,!1),t.lanes=4194304)}else{if(!r)if(e=Ts(l),e!==null){if(t.flags|=128,r=!0,n=e.updateQueue,n!==null&&(t.updateQueue=n,t.flags|=4),$a(a,!0),a.tail===null&&a.tailMode==="hidden"&&!l.alternate&&!Ce)return ut(t),null}else 2*Fe()-a.renderingStartTime>Gi&&n!==1073741824&&(t.flags|=128,r=!0,$a(a,!1),t.lanes=4194304);a.isBackwards?(l.sibling=t.child,t.child=l):(n=a.last,n!==null?n.sibling=l:t.child=l,a.last=l)}return a.tail!==null?(t=a.tail,a.rendering=t,a.tail=t.sibling,a.renderingStartTime=Fe(),t.sibling=null,n=Te.current,je(Te,r?n&1|2:n&1),t):(ut(t),null);case 22:case 23:return Zp(),r=t.memoizedState!==null,e!==null&&e.memoizedState!==null!==r&&(t.flags|=8192),r&&t.mode&1?Nt&1073741824&&(ut(t),t.subtreeFlags&6&&(t.flags|=8192)):ut(t),null;case 24:return null;case 25:return null}throw Error(U(156,t.tag))}function ix(e,t){switch(Ep(t),t.tag){case 1:return jt(t.type)&&Os(),e=t.flags,e&65536?(t.flags=e&-65537|128,t):null;case 3:return Ui(),Ne(_t),Ne(mt),Rp(),e=t.flags,e&65536&&!(e&128)?(t.flags=e&-65537|128,t):null;case 5:return Fp(t),null;case 13:if(Ne(Te),e=t.memoizedState,e!==null&&e.dehydrated!==null){if(t.alternate===null)throw Error(U(340));Bi()}return e=t.flags,e&65536?(t.flags=e&-65537|128,t):null;case 19:return Ne(Te),null;case 4:return Ui(),null;case 10:return zp(t.type._context),null;case 22:case 23:return Zp(),null;case 24:return null;default:return null}}var Fo=!1,ft=!1,ax=typeof WeakSet=="function"?WeakSet:Set,X=null;function ji(e,t){var n=e.ref;if(n!==null)if(typeof n=="function")try{n(null)}catch(r){De(e,t,r)}else n.current=null}function Mf(e,t,n){try{n()}catch(r){De(e,t,r)}}var u7=!1;function lx(e,t){if(mf=ks,e=f8(),Np(e)){if("selectionStart"in e)var n={start:e.selectionStart,end:e.selectionEnd};else e:{n=(n=e.ownerDocument)&&n.defaultView||window;var r=n.getSelection&&n.getSelection();if(r&&r.rangeCount!==0){n=r.anchorNode;var i=r.anchorOffset,a=r.focusNode;r=r.focusOffset;try{n.nodeType,a.nodeType}catch{n=null;break e}var l=0,o=-1,s=-1,u=0,f=0,d=e,p=null;t:for(;;){for(var h;d!==n||i!==0&&d.nodeType!==3||(o=l+i),d!==a||r!==0&&d.nodeType!==3||(s=l+r),d.nodeType===3&&(l+=d.nodeValue.length),(h=d.firstChild)!==null;)p=d,d=h;for(;;){if(d===e)break t;if(p===n&&++u===i&&(o=l),p===a&&++f===r&&(s=l),(h=d.nextSibling)!==null)break;d=p,p=d.parentNode}d=h}n=o===-1||s===-1?null:{start:o,end:s}}else n=null}n=n||{start:0,end:0}}else n=null;for(yf={focusedElem:e,selectionRange:n},ks=!1,X=t;X!==null;)if(t=X,e=t.child,(t.subtreeFlags&1028)!==0&&e!==null)e.return=t,X=e;else for(;X!==null;){t=X;try{var b=t.alternate;if(t.flags&1024)switch(t.tag){case 0:case 11:case 15:break;case 1:if(b!==null){var v=b.memoizedProps,w=b.memoizedState,y=t.stateNode,m=y.getSnapshotBeforeUpdate(t.elementType===t.type?v:Jt(t.type,v),w);y.__reactInternalSnapshotBeforeUpdate=m}break;case 3:var g=t.stateNode.containerInfo;g.nodeType===1?g.textContent="":g.nodeType===9&&g.documentElement&&g.removeChild(g.documentElement);break;case 5:case 6:case 4:case 17:break;default:throw Error(U(163))}}catch(S){De(t,t.return,S)}if(e=t.sibling,e!==null){e.return=t.return,X=e;break}X=t.return}return b=u7,u7=!1,b}function rl(e,t,n){var r=t.updateQueue;if(r=r!==null?r.lastEffect:null,r!==null){var i=r=r.next;do{if((i.tag&e)===e){var a=i.destroy;i.destroy=void 0,a!==void 0&&Mf(t,n,a)}i=i.next}while(i!==r)}}function Xc(e,t){if(t=t.updateQueue,t=t!==null?t.lastEffect:null,t!==null){var n=t=t.next;do{if((n.tag&e)===e){var r=n.create;n.destroy=r()}n=n.next}while(n!==t)}}function Tf(e){var t=e.ref;if(t!==null){var n=e.stateNode;switch(e.tag){case 5:e=n;break;default:e=n}typeof t=="function"?t(e):t.current=e}}function sv(e){var t=e.alternate;t!==null&&(e.alternate=null,sv(t)),e.child=null,e.deletions=null,e.sibling=null,e.tag===5&&(t=e.stateNode,t!==null&&(delete t[mn],delete t[bl],delete t[xf],delete t[W9],delete t[U9])),e.stateNode=null,e.return=null,e.dependencies=null,e.memoizedProps=null,e.memoizedState=null,e.pendingProps=null,e.stateNode=null,e.updateQueue=null}function cv(e){return e.tag===5||e.tag===3||e.tag===4}function d7(e){e:for(;;){for(;e.sibling===null;){if(e.return===null||cv(e.return))return null;e=e.return}for(e.sibling.return=e.return,e=e.sibling;e.tag!==5&&e.tag!==6&&e.tag!==18;){if(e.flags&2||e.child===null||e.tag===4)continue e;e.child.return=e,e=e.child}if(!(e.flags&2))return e.stateNode}}function $f(e,t,n){var r=e.tag;if(r===5||r===6)e=e.stateNode,t?n.nodeType===8?n.parentNode.insertBefore(e,t):n.insertBefore(e,t):(n.nodeType===8?(t=n.parentNode,t.insertBefore(e,n)):(t=n,t.appendChild(e)),n=n._reactRootContainer,n!=null||t.onclick!==null||(t.onclick=js));else if(r!==4&&(e=e.child,e!==null))for($f(e,t,n),e=e.sibling;e!==null;)$f(e,t,n),e=e.sibling}function zf(e,t,n){var r=e.tag;if(r===5||r===6)e=e.stateNode,t?n.insertBefore(e,t):n.appendChild(e);else if(r!==4&&(e=e.child,e!==null))for(zf(e,t,n),e=e.sibling;e!==null;)zf(e,t,n),e=e.sibling}var it=null,en=!1;function qn(e,t,n){for(n=n.child;n!==null;)uv(e,t,n),n=n.sibling}function uv(e,t,n){if(gn&&typeof gn.onCommitFiberUnmount=="function")try{gn.onCommitFiberUnmount(Fc,n)}catch{}switch(n.tag){case 5:ft||ji(n,t);case 6:var r=it,i=en;it=null,qn(e,t,n),it=r,en=i,it!==null&&(en?(e=it,n=n.stateNode,e.nodeType===8?e.parentNode.removeChild(n):e.removeChild(n)):it.removeChild(n.stateNode));break;case 18:it!==null&&(en?(e=it,n=n.stateNode,e.nodeType===8?ad(e.parentNode,n):e.nodeType===1&&ad(e,n),ml(e)):ad(it,n.stateNode));break;case 4:r=it,i=en,it=n.stateNode.containerInfo,en=!0,qn(e,t,n),it=r,en=i;break;case 0:case 11:case 14:case 15:if(!ft&&(r=n.updateQueue,r!==null&&(r=r.lastEffect,r!==null))){i=r=r.next;do{var a=i,l=a.destroy;a=a.tag,l!==void 0&&(a&2||a&4)&&Mf(n,t,l),i=i.next}while(i!==r)}qn(e,t,n);break;case 1:if(!ft&&(ji(n,t),r=n.stateNode,typeof r.componentWillUnmount=="function"))try{r.props=n.memoizedProps,r.state=n.memoizedState,r.componentWillUnmount()}catch(o){De(n,t,o)}qn(e,t,n);break;case 21:qn(e,t,n);break;case 22:n.mode&1?(ft=(r=ft)||n.memoizedState!==null,qn(e,t,n),ft=r):qn(e,t,n);break;default:qn(e,t,n)}}function f7(e){var t=e.updateQueue;if(t!==null){e.updateQueue=null;var n=e.stateNode;n===null&&(n=e.stateNode=new ax),t.forEach(function(r){var i=mx.bind(null,e,r);n.has(r)||(n.add(r),r.then(i,i))})}}function Zt(e,t){var n=t.deletions;if(n!==null)for(var r=0;r<n.length;r++){var i=n[r];try{var a=e,l=t,o=l;e:for(;o!==null;){switch(o.tag){case 5:it=o.stateNode,en=!1;break e;case 3:it=o.stateNode.containerInfo,en=!0;break e;case 4:it=o.stateNode.containerInfo,en=!0;break e}o=o.return}if(it===null)throw Error(U(160));uv(a,l,i),it=null,en=!1;var s=i.alternate;s!==null&&(s.return=null),i.return=null}catch(u){De(i,t,u)}}if(t.subtreeFlags&12854)for(t=t.child;t!==null;)dv(t,e),t=t.sibling}function dv(e,t){var n=e.alternate,r=e.flags;switch(e.tag){case 0:case 11:case 14:case 15:if(Zt(t,e),fn(e),r&4){try{rl(3,e,e.return),Xc(3,e)}catch(v){De(e,e.return,v)}try{rl(5,e,e.return)}catch(v){De(e,e.return,v)}}break;case 1:Zt(t,e),fn(e),r&512&&n!==null&&ji(n,n.return);break;case 5:if(Zt(t,e),fn(e),r&512&&n!==null&&ji(n,n.return),e.flags&32){var i=e.stateNode;try{dl(i,"")}catch(v){De(e,e.return,v)}}if(r&4&&(i=e.stateNode,i!=null)){var a=e.memoizedProps,l=n!==null?n.memoizedProps:a,o=e.type,s=e.updateQueue;if(e.updateQueue=null,s!==null)try{o==="input"&&a.type==="radio"&&a.name!=null&&Ty(i,a),af(o,l);var u=af(o,a);for(l=0;l<s.length;l+=2){var f=s[l],d=s[l+1];f==="style"?Ly(i,d):f==="dangerouslySetInnerHTML"?Iy(i,d):f==="children"?dl(i,d):yp(i,f,d,u)}switch(o){case"input":Jd(i,a);break;case"textarea":$y(i,a);break;case"select":var p=i._wrapperState.wasMultiple;i._wrapperState.wasMultiple=!!a.multiple;var h=a.value;h!=null?Ci(i,!!a.multiple,h,!1):p!==!!a.multiple&&(a.defaultValue!=null?Ci(i,!!a.multiple,a.defaultValue,!0):Ci(i,!!a.multiple,a.multiple?[]:"",!1))}i[bl]=a}catch(v){De(e,e.return,v)}}break;case 6:if(Zt(t,e),fn(e),r&4){if(e.stateNode===null)throw Error(U(162));i=e.stateNode,a=e.memoizedProps;try{i.nodeValue=a}catch(v){De(e,e.return,v)}}break;case 3:if(Zt(t,e),fn(e),r&4&&n!==null&&n.memoizedState.isDehydrated)try{ml(t.containerInfo)}catch(v){De(e,e.return,v)}break;case 4:Zt(t,e),fn(e);break;case 13:Zt(t,e),fn(e),i=e.child,i.flags&8192&&(a=i.memoizedState!==null,i.stateNode.isHidden=a,!a||i.alternate!==null&&i.alternate.memoizedState!==null||(Kp=Fe())),r&4&&f7(e);break;case 22:if(f=n!==null&&n.memoizedState!==null,e.mode&1?(ft=(u=ft)||f,Zt(t,e),ft=u):Zt(t,e),fn(e),r&8192){if(u=e.memoizedState!==null,(e.stateNode.isHidden=u)&&!f&&e.mode&1)for(X=e,f=e.child;f!==null;){for(d=X=f;X!==null;){switch(p=X,h=p.child,p.tag){case 0:case 11:case 14:case 15:rl(4,p,p.return);break;case 1:ji(p,p.return);var b=p.stateNode;if(typeof b.componentWillUnmount=="function"){r=p,n=p.return;try{t=r,b.props=t.memoizedProps,b.state=t.memoizedState,b.componentWillUnmount()}catch(v){De(r,n,v)}}break;case 5:ji(p,p.return);break;case 22:if(p.memoizedState!==null){h7(d);continue}}h!==null?(h.return=p,X=h):h7(d)}f=f.sibling}e:for(f=null,d=e;;){if(d.tag===5){if(f===null){f=d;try{i=d.stateNode,u?(a=i.style,typeof a.setProperty=="function"?a.setProperty("display","none","important"):a.display="none"):(o=d.stateNode,s=d.memoizedProps.style,l=s!=null&&s.hasOwnProperty("display")?s.display:null,o.style.display=Dy("display",l))}catch(v){De(e,e.return,v)}}}else if(d.tag===6){if(f===null)try{d.stateNode.nodeValue=u?"":d.memoizedProps}catch(v){De(e,e.return,v)}}else if((d.tag!==22&&d.tag!==23||d.memoizedState===null||d===e)&&d.child!==null){d.child.return=d,d=d.child;continue}if(d===e)break e;for(;d.sibling===null;){if(d.return===null||d.return===e)break e;f===d&&(f=null),d=d.return}f===d&&(f=null),d.sibling.return=d.return,d=d.sibling}}break;case 19:Zt(t,e),fn(e),r&4&&f7(e);break;case 21:break;default:Zt(t,e),fn(e)}}function fn(e){var t=e.flags;if(t&2){try{e:{for(var n=e.return;n!==null;){if(cv(n)){var r=n;break e}n=n.return}throw Error(U(160))}switch(r.tag){case 5:var i=r.stateNode;r.flags&32&&(dl(i,""),r.flags&=-33);var a=d7(e);zf(e,a,i);break;case 3:case 4:var l=r.stateNode.containerInfo,o=d7(e);$f(e,o,l);break;default:throw Error(U(161))}}catch(s){De(e,e.return,s)}e.flags&=-3}t&4096&&(e.flags&=-4097)}function ox(e,t,n){X=e,fv(e)}function fv(e,t,n){for(var r=(e.mode&1)!==0;X!==null;){var i=X,a=i.child;if(i.tag===22&&r){var l=i.memoizedState!==null||Fo;if(!l){var o=i.alternate,s=o!==null&&o.memoizedState!==null||ft;o=Fo;var u=ft;if(Fo=l,(ft=s)&&!u)for(X=i;X!==null;)l=X,s=l.child,l.tag===22&&l.memoizedState!==null?m7(i):s!==null?(s.return=l,X=s):m7(i);for(;a!==null;)X=a,fv(a),a=a.sibling;X=i,Fo=o,ft=u}p7(e)}else i.subtreeFlags&8772&&a!==null?(a.return=i,X=a):p7(e)}}function p7(e){for(;X!==null;){var t=X;if(t.flags&8772){var n=t.alternate;try{if(t.flags&8772)switch(t.tag){case 0:case 11:case 15:ft||Xc(5,t);break;case 1:var r=t.stateNode;if(t.flags&4&&!ft)if(n===null)r.componentDidMount();else{var i=t.elementType===t.type?n.memoizedProps:Jt(t.type,n.memoizedProps);r.componentDidUpdate(i,n.memoizedState,r.__reactInternalSnapshotBeforeUpdate)}var a=t.updateQueue;a!==null&&Zh(t,a,r);break;case 3:var l=t.updateQueue;if(l!==null){if(n=null,t.child!==null)switch(t.child.tag){case 5:n=t.child.stateNode;break;case 1:n=t.child.stateNode}Zh(t,l,n)}break;case 5:var o=t.stateNode;if(n===null&&t.flags&4){n=o;var s=t.memoizedProps;switch(t.type){case"button":case"input":case"select":case"textarea":s.autoFocus&&n.focus();break;case"img":s.src&&(n.src=s.src)}}break;case 6:break;case 4:break;case 12:break;case 13:if(t.memoizedState===null){var u=t.alternate;if(u!==null){var f=u.memoizedState;if(f!==null){var d=f.dehydrated;d!==null&&ml(d)}}}break;case 19:case 17:case 21:case 22:case 23:case 25:break;default:throw Error(U(163))}ft||t.flags&512&&Tf(t)}catch(p){De(t,t.return,p)}}if(t===e){X=null;break}if(n=t.sibling,n!==null){n.return=t.return,X=n;break}X=t.return}}function h7(e){for(;X!==null;){var t=X;if(t===e){X=null;break}var n=t.sibling;if(n!==null){n.return=t.return,X=n;break}X=t.return}}function m7(e){for(;X!==null;){var t=X;try{switch(t.tag){case 0:case 11:case 15:var n=t.return;try{Xc(4,t)}catch(s){De(t,n,s)}break;case 1:var r=t.stateNode;if(typeof r.componentDidMount=="function"){var i=t.return;try{r.componentDidMount()}catch(s){De(t,i,s)}}var a=t.return;try{Tf(t)}catch(s){De(t,a,s)}break;case 5:var l=t.return;try{Tf(t)}catch(s){De(t,l,s)}}}catch(s){De(t,t.return,s)}if(t===e){X=null;break}var o=t.sibling;if(o!==null){o.return=t.return,X=o;break}X=t.return}}var sx=Math.ceil,Is=Hn.ReactCurrentDispatcher,Xp=Hn.ReactCurrentOwner,Ht=Hn.ReactCurrentBatchConfig,se=0,tt=null,We=null,lt=0,Nt=0,Oi=br(0),Ke=0,Ol=null,Yr=0,qc=0,qp=0,il=null,wt=null,Kp=0,Gi=1/0,On=null,Ds=!1,If=null,dr=null,Ro=!1,ir=null,Ls=0,al=0,Df=null,ps=-1,hs=0;function gt(){return se&6?Fe():ps!==-1?ps:ps=Fe()}function fr(e){return e.mode&1?se&2&&lt!==0?lt&-lt:G9.transition!==null?(hs===0&&(hs=Yy()),hs):(e=ye,e!==0||(e=window.event,e=e===void 0?16:r8(e.type)),e):1}function sn(e,t,n,r){if(50<al)throw al=0,Df=null,Error(U(185));fo(e,n,r),(!(se&2)||e!==tt)&&(e===tt&&(!(se&2)&&(qc|=n),Ke===4&&tr(e,lt)),Ot(e,r),n===1&&se===0&&!(t.mode&1)&&(Gi=Fe()+500,Hc&&wr()))}function Ot(e,t){var n=e.callbackNode;G4(e,t);var r=ws(e,e===tt?lt:0);if(r===0)n!==null&&_h(n),e.callbackNode=null,e.callbackPriority=0;else if(t=r&-r,e.callbackPriority!==t){if(n!=null&&_h(n),t===1)e.tag===0?H9(y7.bind(null,e)):k8(y7.bind(null,e)),R9(function(){!(se&6)&&wr()}),n=null;else{switch(Zy(r)){case 1:n=wp;break;case 4:n=qy;break;case 16:n=bs;break;case 536870912:n=Ky;break;default:n=bs}n=bv(n,pv.bind(null,e))}e.callbackPriority=t,e.callbackNode=n}}function pv(e,t){if(ps=-1,hs=0,se&6)throw Error(U(327));var n=e.callbackNode;if(zi()&&e.callbackNode!==n)return null;var r=ws(e,e===tt?lt:0);if(r===0)return null;if(r&30||r&e.expiredLanes||t)t=Fs(e,r);else{t=r;var i=se;se|=2;var a=mv();(tt!==e||lt!==t)&&(On=null,Gi=Fe()+500,Wr(e,t));do try{dx();break}catch(o){hv(e,o)}while(!0);$p(),Is.current=a,se=i,We!==null?t=0:(tt=null,lt=0,t=Ke)}if(t!==0){if(t===2&&(i=uf(e),i!==0&&(r=i,t=Lf(e,i))),t===1)throw n=Ol,Wr(e,0),tr(e,r),Ot(e,Fe()),n;if(t===6)tr(e,r);else{if(i=e.current.alternate,!(r&30)&&!cx(i)&&(t=Fs(e,r),t===2&&(a=uf(e),a!==0&&(r=a,t=Lf(e,a))),t===1))throw n=Ol,Wr(e,0),tr(e,r),Ot(e,Fe()),n;switch(e.finishedWork=i,e.finishedLanes=r,t){case 0:case 1:throw Error(U(345));case 2:Cr(e,wt,On);break;case 3:if(tr(e,r),(r&130023424)===r&&(t=Kp+500-Fe(),10<t)){if(ws(e,0)!==0)break;if(i=e.suspendedLanes,(i&r)!==r){gt(),e.pingedLanes|=e.suspendedLanes&i;break}e.timeoutHandle=gf(Cr.bind(null,e,wt,On),t);break}Cr(e,wt,On);break;case 4:if(tr(e,r),(r&4194240)===r)break;for(t=e.eventTimes,i=-1;0<r;){var l=31-on(r);a=1<<l,l=t[l],l>i&&(i=l),r&=~a}if(r=i,r=Fe()-r,r=(120>r?120:480>r?480:1080>r?1080:1920>r?1920:3e3>r?3e3:4320>r?4320:1960*sx(r/1960))-r,10<r){e.timeoutHandle=gf(Cr.bind(null,e,wt,On),r);break}Cr(e,wt,On);break;case 5:Cr(e,wt,On);break;default:throw Error(U(329))}}}return Ot(e,Fe()),e.callbackNode===n?pv.bind(null,e):null}function Lf(e,t){var n=il;return e.current.memoizedState.isDehydrated&&(Wr(e,t).flags|=256),e=Fs(e,t),e!==2&&(t=wt,wt=n,t!==null&&Ff(t)),e}function Ff(e){wt===null?wt=e:wt.push.apply(wt,e)}function cx(e){for(var t=e;;){if(t.flags&16384){var n=t.updateQueue;if(n!==null&&(n=n.stores,n!==null))for(var r=0;r<n.length;r++){var i=n[r],a=i.getSnapshot;i=i.value;try{if(!un(a(),i))return!1}catch{return!1}}}if(n=t.child,t.subtreeFlags&16384&&n!==null)n.return=t,t=n;else{if(t===e)break;for(;t.sibling===null;){if(t.return===null||t.return===e)return!0;t=t.return}t.sibling.return=t.return,t=t.sibling}}return!0}function tr(e,t){for(t&=~qp,t&=~qc,e.suspendedLanes|=t,e.pingedLanes&=~t,e=e.expirationTimes;0<t;){var n=31-on(t),r=1<<n;e[n]=-1,t&=~r}}function y7(e){if(se&6)throw Error(U(327));zi();var t=ws(e,0);if(!(t&1))return Ot(e,Fe()),null;var n=Fs(e,t);if(e.tag!==0&&n===2){var r=uf(e);r!==0&&(t=r,n=Lf(e,r))}if(n===1)throw n=Ol,Wr(e,0),tr(e,t),Ot(e,Fe()),n;if(n===6)throw Error(U(345));return e.finishedWork=e.current.alternate,e.finishedLanes=t,Cr(e,wt,On),Ot(e,Fe()),null}function Yp(e,t){var n=se;se|=1;try{return e(t)}finally{se=n,se===0&&(Gi=Fe()+500,Hc&&wr())}}function Zr(e){ir!==null&&ir.tag===0&&!(se&6)&&zi();var t=se;se|=1;var n=Ht.transition,r=ye;try{if(Ht.transition=null,ye=1,e)return e()}finally{ye=r,Ht.transition=n,se=t,!(se&6)&&wr()}}function Zp(){Nt=Oi.current,Ne(Oi)}function Wr(e,t){e.finishedWork=null,e.finishedLanes=0;var n=e.timeoutHandle;if(n!==-1&&(e.timeoutHandle=-1,F9(n)),We!==null)for(n=We.return;n!==null;){var r=n;switch(Ep(r),r.tag){case 1:r=r.type.childContextTypes,r!=null&&Os();break;case 3:Ui(),Ne(_t),Ne(mt),Rp();break;case 5:Fp(r);break;case 4:Ui();break;case 13:Ne(Te);break;case 19:Ne(Te);break;case 10:zp(r.type._context);break;case 22:case 23:Zp()}n=n.return}if(tt=e,We=e=pr(e.current,null),lt=Nt=t,Ke=0,Ol=null,qp=qc=Yr=0,wt=il=null,Ir!==null){for(t=0;t<Ir.length;t++)if(n=Ir[t],r=n.interleaved,r!==null){n.interleaved=null;var i=r.next,a=n.pending;if(a!==null){var l=a.next;a.next=i,r.next=l}n.pending=r}Ir=null}return e}function hv(e,t){do{var n=We;try{if($p(),us.current=zs,$s){for(var r=$e.memoizedState;r!==null;){var i=r.queue;i!==null&&(i.pending=null),r=r.next}$s=!1}if(Kr=0,Je=qe=$e=null,nl=!1,Sl=0,Xp.current=null,n===null||n.return===null){Ke=1,Ol=t,We=null;break}e:{var a=e,l=n.return,o=n,s=t;if(t=lt,o.flags|=32768,s!==null&&typeof s=="object"&&typeof s.then=="function"){var u=s,f=o,d=f.tag;if(!(f.mode&1)&&(d===0||d===11||d===15)){var p=f.alternate;p?(f.updateQueue=p.updateQueue,f.memoizedState=p.memoizedState,f.lanes=p.lanes):(f.updateQueue=null,f.memoizedState=null)}var h=r7(l);if(h!==null){h.flags&=-257,i7(h,l,o,a,t),h.mode&1&&n7(a,u,t),t=h,s=u;var b=t.updateQueue;if(b===null){var v=new Set;v.add(s),t.updateQueue=v}else b.add(s);break e}else{if(!(t&1)){n7(a,u,t),Qp();break e}s=Error(U(426))}}else if(Ce&&o.mode&1){var w=r7(l);if(w!==null){!(w.flags&65536)&&(w.flags|=256),i7(w,l,o,a,t),Mp(Hi(s,o));break e}}a=s=Hi(s,o),Ke!==4&&(Ke=2),il===null?il=[a]:il.push(a),a=l;do{switch(a.tag){case 3:a.flags|=65536,t&=-t,a.lanes|=t;var y=Z8(a,s,t);Yh(a,y);break e;case 1:o=s;var m=a.type,g=a.stateNode;if(!(a.flags&128)&&(typeof m.getDerivedStateFromError=="function"||g!==null&&typeof g.componentDidCatch=="function"&&(dr===null||!dr.has(g)))){a.flags|=65536,t&=-t,a.lanes|=t;var S=Q8(a,o,t);Yh(a,S);break e}}a=a.return}while(a!==null)}vv(n)}catch(x){t=x,We===n&&n!==null&&(We=n=n.return);continue}break}while(!0)}function mv(){var e=Is.current;return Is.current=zs,e===null?zs:e}function Qp(){(Ke===0||Ke===3||Ke===2)&&(Ke=4),tt===null||!(Yr&268435455)&&!(qc&268435455)||tr(tt,lt)}function Fs(e,t){var n=se;se|=2;var r=mv();(tt!==e||lt!==t)&&(On=null,Wr(e,t));do try{ux();break}catch(i){hv(e,i)}while(!0);if($p(),se=n,Is.current=r,We!==null)throw Error(U(261));return tt=null,lt=0,Ke}function ux(){for(;We!==null;)yv(We)}function dx(){for(;We!==null&&!I4();)yv(We)}function yv(e){var t=xv(e.alternate,e,Nt);e.memoizedProps=e.pendingProps,t===null?vv(e):We=t,Xp.current=null}function vv(e){var t=e;do{var n=t.alternate;if(e=t.return,t.flags&32768){if(n=ix(n,t),n!==null){n.flags&=32767,We=n;return}if(e!==null)e.flags|=32768,e.subtreeFlags=0,e.deletions=null;else{Ke=6,We=null;return}}else if(n=rx(n,t,Nt),n!==null){We=n;return}if(t=t.sibling,t!==null){We=t;return}We=t=e}while(t!==null);Ke===0&&(Ke=5)}function Cr(e,t,n){var r=ye,i=Ht.transition;try{Ht.transition=null,ye=1,fx(e,t,n,r)}finally{Ht.transition=i,ye=r}return null}function fx(e,t,n,r){do zi();while(ir!==null);if(se&6)throw Error(U(327));n=e.finishedWork;var i=e.finishedLanes;if(n===null)return null;if(e.finishedWork=null,e.finishedLanes=0,n===e.current)throw Error(U(177));e.callbackNode=null,e.callbackPriority=0;var a=n.lanes|n.childLanes;if(V4(e,a),e===tt&&(We=tt=null,lt=0),!(n.subtreeFlags&2064)&&!(n.flags&2064)||Ro||(Ro=!0,bv(bs,function(){return zi(),null})),a=(n.flags&15990)!==0,n.subtreeFlags&15990||a){a=Ht.transition,Ht.transition=null;var l=ye;ye=1;var o=se;se|=4,Xp.current=null,lx(e,n),dv(n,e),M9(yf),ks=!!mf,yf=mf=null,e.current=n,ox(n),D4(),se=o,ye=l,Ht.transition=a}else e.current=n;if(Ro&&(Ro=!1,ir=e,Ls=i),a=e.pendingLanes,a===0&&(dr=null),R4(n.stateNode),Ot(e,Fe()),t!==null)for(r=e.onRecoverableError,n=0;n<t.length;n++)i=t[n],r(i.value,{componentStack:i.stack,digest:i.digest});if(Ds)throw Ds=!1,e=If,If=null,e;return Ls&1&&e.tag!==0&&zi(),a=e.pendingLanes,a&1?e===Df?al++:(al=0,Df=e):al=0,wr(),null}function zi(){if(ir!==null){var e=Zy(Ls),t=Ht.transition,n=ye;try{if(Ht.transition=null,ye=16>e?16:e,ir===null)var r=!1;else{if(e=ir,ir=null,Ls=0,se&6)throw Error(U(331));var i=se;for(se|=4,X=e.current;X!==null;){var a=X,l=a.child;if(X.flags&16){var o=a.deletions;if(o!==null){for(var s=0;s<o.length;s++){var u=o[s];for(X=u;X!==null;){var f=X;switch(f.tag){case 0:case 11:case 15:rl(8,f,a)}var d=f.child;if(d!==null)d.return=f,X=d;else for(;X!==null;){f=X;var p=f.sibling,h=f.return;if(sv(f),f===u){X=null;break}if(p!==null){p.return=h,X=p;break}X=h}}}var b=a.alternate;if(b!==null){var v=b.child;if(v!==null){b.child=null;do{var w=v.sibling;v.sibling=null,v=w}while(v!==null)}}X=a}}if(a.subtreeFlags&2064&&l!==null)l.return=a,X=l;else e:for(;X!==null;){if(a=X,a.flags&2048)switch(a.tag){case 0:case 11:case 15:rl(9,a,a.return)}var y=a.sibling;if(y!==null){y.return=a.return,X=y;break e}X=a.return}}var m=e.current;for(X=m;X!==null;){l=X;var g=l.child;if(l.subtreeFlags&2064&&g!==null)g.return=l,X=g;else e:for(l=m;X!==null;){if(o=X,o.flags&2048)try{switch(o.tag){case 0:case 11:case 15:Xc(9,o)}}catch(x){De(o,o.return,x)}if(o===l){X=null;break e}var S=o.sibling;if(S!==null){S.return=o.return,X=S;break e}X=o.return}}if(se=i,wr(),gn&&typeof gn.onPostCommitFiberRoot=="function")try{gn.onPostCommitFiberRoot(Fc,e)}catch{}r=!0}return r}finally{ye=n,Ht.transition=t}}return!1}function v7(e,t,n){t=Hi(n,t),t=Z8(e,t,1),e=ur(e,t,1),t=gt(),e!==null&&(fo(e,1,t),Ot(e,t))}function De(e,t,n){if(e.tag===3)v7(e,e,n);else for(;t!==null;){if(t.tag===3){v7(t,e,n);break}else if(t.tag===1){var r=t.stateNode;if(typeof t.type.getDerivedStateFromError=="function"||typeof r.componentDidCatch=="function"&&(dr===null||!dr.has(r))){e=Hi(n,e),e=Q8(t,e,1),t=ur(t,e,1),e=gt(),t!==null&&(fo(t,1,e),Ot(t,e));break}}t=t.return}}function px(e,t,n){var r=e.pingCache;r!==null&&r.delete(t),t=gt(),e.pingedLanes|=e.suspendedLanes&n,tt===e&&(lt&n)===n&&(Ke===4||Ke===3&&(lt&130023424)===lt&&500>Fe()-Kp?Wr(e,0):qp|=n),Ot(e,t)}function gv(e,t){t===0&&(e.mode&1?(t=Co,Co<<=1,!(Co&130023424)&&(Co=4194304)):t=1);var n=gt();e=Fn(e,t),e!==null&&(fo(e,t,n),Ot(e,n))}function hx(e){var t=e.memoizedState,n=0;t!==null&&(n=t.retryLane),gv(e,n)}function mx(e,t){var n=0;switch(e.tag){case 13:var r=e.stateNode,i=e.memoizedState;i!==null&&(n=i.retryLane);break;case 19:r=e.stateNode;break;default:throw Error(U(314))}r!==null&&r.delete(t),gv(e,n)}var xv;xv=function(e,t,n){if(e!==null)if(e.memoizedProps!==t.pendingProps||_t.current)kt=!0;else{if(!(e.lanes&n)&&!(t.flags&128))return kt=!1,nx(e,t,n);kt=!!(e.flags&131072)}else kt=!1,Ce&&t.flags&1048576&&S8(t,Ns,t.index);switch(t.lanes=0,t.tag){case 2:var r=t.type;fs(e,t),e=t.pendingProps;var i=Ri(t,mt.current);$i(t,n),i=Wp(null,t,r,e,i,n);var a=Up();return t.flags|=1,typeof i=="object"&&i!==null&&typeof i.render=="function"&&i.$$typeof===void 0?(t.tag=1,t.memoizedState=null,t.updateQueue=null,jt(r)?(a=!0,Ps(t)):a=!1,t.memoizedState=i.state!==null&&i.state!==void 0?i.state:null,Dp(t),i.updater=Vc,t.stateNode=i,i._reactInternals=t,jf(t,r,e,n),t=Af(null,t,r,!0,a,n)):(t.tag=0,Ce&&a&&Cp(t),yt(null,t,i,n),t=t.child),t;case 16:r=t.elementType;e:{switch(fs(e,t),e=t.pendingProps,i=r._init,r=i(r._payload),t.type=r,i=t.tag=vx(r),e=Jt(r,e),i){case 0:t=Pf(null,t,r,e,n);break e;case 1:t=o7(null,t,r,e,n);break e;case 11:t=a7(null,t,r,e,n);break e;case 14:t=l7(null,t,r,Jt(r.type,e),n);break e}throw Error(U(306,r,""))}return t;case 0:return r=t.type,i=t.pendingProps,i=t.elementType===r?i:Jt(r,i),Pf(e,t,r,i,n);case 1:return r=t.type,i=t.pendingProps,i=t.elementType===r?i:Jt(r,i),o7(e,t,r,i,n);case 3:e:{if(nv(t),e===null)throw Error(U(387));r=t.pendingProps,a=t.memoizedState,i=a.element,N8(e,t),Ms(t,r,null,n);var l=t.memoizedState;if(r=l.element,a.isDehydrated)if(a={element:r,isDehydrated:!1,cache:l.cache,pendingSuspenseBoundaries:l.pendingSuspenseBoundaries,transitions:l.transitions},t.updateQueue.baseState=a,t.memoizedState=a,t.flags&256){i=Hi(Error(U(423)),t),t=s7(e,t,r,n,i);break e}else if(r!==i){i=Hi(Error(U(424)),t),t=s7(e,t,r,n,i);break e}else for(Mt=cr(t.stateNode.containerInfo.firstChild),Tt=t,Ce=!0,rn=null,n=P8(t,null,r,n),t.child=n;n;)n.flags=n.flags&-3|4096,n=n.sibling;else{if(Bi(),r===i){t=Rn(e,t,n);break e}yt(e,t,r,n)}t=t.child}return t;case 5:return C8(t),e===null&&kf(t),r=t.type,i=t.pendingProps,a=e!==null?e.memoizedProps:null,l=i.children,vf(r,i)?l=null:a!==null&&vf(r,a)&&(t.flags|=32),tv(e,t),yt(e,t,l,n),t.child;case 6:return e===null&&kf(t),null;case 13:return rv(e,t,n);case 4:return Lp(t,t.stateNode.containerInfo),r=t.pendingProps,e===null?t.child=Wi(t,null,r,n):yt(e,t,r,n),t.child;case 11:return r=t.type,i=t.pendingProps,i=t.elementType===r?i:Jt(r,i),a7(e,t,r,i,n);case 7:return yt(e,t,t.pendingProps,n),t.child;case 8:return yt(e,t,t.pendingProps.children,n),t.child;case 12:return yt(e,t,t.pendingProps.children,n),t.child;case 10:e:{if(r=t.type._context,i=t.pendingProps,a=t.memoizedProps,l=i.value,je(Cs,r._currentValue),r._currentValue=l,a!==null)if(un(a.value,l)){if(a.children===i.children&&!_t.current){t=Rn(e,t,n);break e}}else for(a=t.child,a!==null&&(a.return=t);a!==null;){var o=a.dependencies;if(o!==null){l=a.child;for(var s=o.firstContext;s!==null;){if(s.context===r){if(a.tag===1){s=Tn(-1,n&-n),s.tag=2;var u=a.updateQueue;if(u!==null){u=u.shared;var f=u.pending;f===null?s.next=s:(s.next=f.next,f.next=s),u.pending=s}}a.lanes|=n,s=a.alternate,s!==null&&(s.lanes|=n),Sf(a.return,n,t),o.lanes|=n;break}s=s.next}}else if(a.tag===10)l=a.type===t.type?null:a.child;else if(a.tag===18){if(l=a.return,l===null)throw Error(U(341));l.lanes|=n,o=l.alternate,o!==null&&(o.lanes|=n),Sf(l,n,t),l=a.sibling}else l=a.child;if(l!==null)l.return=a;else for(l=a;l!==null;){if(l===t){l=null;break}if(a=l.sibling,a!==null){a.return=l.return,l=a;break}l=l.return}a=l}yt(e,t,i.children,n),t=t.child}return t;case 9:return i=t.type,r=t.pendingProps.children,$i(t,n),i=Vt(i),r=r(i),t.flags|=1,yt(e,t,r,n),t.child;case 14:return r=t.type,i=Jt(r,t.pendingProps),i=Jt(r.type,i),l7(e,t,r,i,n);case 15:return J8(e,t,t.type,t.pendingProps,n);case 17:return r=t.type,i=t.pendingProps,i=t.elementType===r?i:Jt(r,i),fs(e,t),t.tag=1,jt(r)?(e=!0,Ps(t)):e=!1,$i(t,n),Y8(t,r,i),jf(t,r,i,n),Af(null,t,r,!0,e,n);case 19:return iv(e,t,n);case 22:return ev(e,t,n)}throw Error(U(156,t.tag))};function bv(e,t){return Xy(e,t)}function yx(e,t,n,r){this.tag=e,this.key=n,this.sibling=this.child=this.return=this.stateNode=this.type=this.elementType=null,this.index=0,this.ref=null,this.pendingProps=t,this.dependencies=this.memoizedState=this.updateQueue=this.memoizedProps=null,this.mode=r,this.subtreeFlags=this.flags=0,this.deletions=null,this.childLanes=this.lanes=0,this.alternate=null}function Wt(e,t,n,r){return new yx(e,t,n,r)}function Jp(e){return e=e.prototype,!(!e||!e.isReactComponent)}function vx(e){if(typeof e=="function")return Jp(e)?1:0;if(e!=null){if(e=e.$$typeof,e===gp)return 11;if(e===xp)return 14}return 2}function pr(e,t){var n=e.alternate;return n===null?(n=Wt(e.tag,t,e.key,e.mode),n.elementType=e.elementType,n.type=e.type,n.stateNode=e.stateNode,n.alternate=e,e.alternate=n):(n.pendingProps=t,n.type=e.type,n.flags=0,n.subtreeFlags=0,n.deletions=null),n.flags=e.flags&14680064,n.childLanes=e.childLanes,n.lanes=e.lanes,n.child=e.child,n.memoizedProps=e.memoizedProps,n.memoizedState=e.memoizedState,n.updateQueue=e.updateQueue,t=e.dependencies,n.dependencies=t===null?null:{lanes:t.lanes,firstContext:t.firstContext},n.sibling=e.sibling,n.index=e.index,n.ref=e.ref,n}function ms(e,t,n,r,i,a){var l=2;if(r=e,typeof e=="function")Jp(e)&&(l=1);else if(typeof e=="string")l=5;else e:switch(e){case yi:return Ur(n.children,i,a,t);case vp:l=8,i|=8;break;case qd:return e=Wt(12,n,t,i|2),e.elementType=qd,e.lanes=a,e;case Kd:return e=Wt(13,n,t,i),e.elementType=Kd,e.lanes=a,e;case Yd:return e=Wt(19,n,t,i),e.elementType=Yd,e.lanes=a,e;case Cy:return Kc(n,i,a,t);default:if(typeof e=="object"&&e!==null)switch(e.$$typeof){case Ay:l=10;break e;case Ny:l=9;break e;case gp:l=11;break e;case xp:l=14;break e;case Zn:l=16,r=null;break e}throw Error(U(130,e==null?e:typeof e,""))}return t=Wt(l,n,t,i),t.elementType=e,t.type=r,t.lanes=a,t}function Ur(e,t,n,r){return e=Wt(7,e,r,t),e.lanes=n,e}function Kc(e,t,n,r){return e=Wt(22,e,r,t),e.elementType=Cy,e.lanes=n,e.stateNode={isHidden:!1},e}function pd(e,t,n){return e=Wt(6,e,null,t),e.lanes=n,e}function hd(e,t,n){return t=Wt(4,e.children!==null?e.children:[],e.key,t),t.lanes=n,t.stateNode={containerInfo:e.containerInfo,pendingChildren:null,implementation:e.implementation},t}function gx(e,t,n,r,i){this.tag=t,this.containerInfo=e,this.finishedWork=this.pingCache=this.current=this.pendingChildren=null,this.timeoutHandle=-1,this.callbackNode=this.pendingContext=this.context=null,this.callbackPriority=0,this.eventTimes=qu(0),this.expirationTimes=qu(-1),this.entangledLanes=this.finishedLanes=this.mutableReadLanes=this.expiredLanes=this.pingedLanes=this.suspendedLanes=this.pendingLanes=0,this.entanglements=qu(0),this.identifierPrefix=r,this.onRecoverableError=i,this.mutableSourceEagerHydrationData=null}function e0(e,t,n,r,i,a,l,o,s){return e=new gx(e,t,n,o,s),t===1?(t=1,a===!0&&(t|=8)):t=0,a=Wt(3,null,null,t),e.current=a,a.stateNode=e,a.memoizedState={element:r,isDehydrated:n,cache:null,transitions:null,pendingSuspenseBoundaries:null},Dp(a),e}function xx(e,t,n){var r=3<arguments.length&&arguments[3]!==void 0?arguments[3]:null;return{$$typeof:mi,key:r==null?null:""+r,children:e,containerInfo:t,implementation:n}}function wv(e){if(!e)return vr;e=e._reactInternals;e:{if(ii(e)!==e||e.tag!==1)throw Error(U(170));var t=e;do{switch(t.tag){case 3:t=t.stateNode.context;break e;case 1:if(jt(t.type)){t=t.stateNode.__reactInternalMemoizedMergedChildContext;break e}}t=t.return}while(t!==null);throw Error(U(171))}if(e.tag===1){var n=e.type;if(jt(n))return w8(e,n,t)}return t}function kv(e,t,n,r,i,a,l,o,s){return e=e0(n,r,!0,e,i,a,l,o,s),e.context=wv(null),n=e.current,r=gt(),i=fr(n),a=Tn(r,i),a.callback=t??null,ur(n,a,i),e.current.lanes=i,fo(e,i,r),Ot(e,r),e}function Yc(e,t,n,r){var i=t.current,a=gt(),l=fr(i);return n=wv(n),t.context===null?t.context=n:t.pendingContext=n,t=Tn(a,l),t.payload={element:e},r=r===void 0?null:r,r!==null&&(t.callback=r),e=ur(i,t,l),e!==null&&(sn(e,i,l,a),cs(e,i,l)),l}function Rs(e){if(e=e.current,!e.child)return null;switch(e.child.tag){case 5:return e.child.stateNode;default:return e.child.stateNode}}function g7(e,t){if(e=e.memoizedState,e!==null&&e.dehydrated!==null){var n=e.retryLane;e.retryLane=n!==0&&n<t?n:t}}function t0(e,t){g7(e,t),(e=e.alternate)&&g7(e,t)}function bx(){return null}var Sv=typeof reportError=="function"?reportError:function(e){console.error(e)};function n0(e){this._internalRoot=e}Zc.prototype.render=n0.prototype.render=function(e){var t=this._internalRoot;if(t===null)throw Error(U(409));Yc(e,t,null,null)};Zc.prototype.unmount=n0.prototype.unmount=function(){var e=this._internalRoot;if(e!==null){this._internalRoot=null;var t=e.containerInfo;Zr(function(){Yc(null,e,null,null)}),t[Ln]=null}};function Zc(e){this._internalRoot=e}Zc.prototype.unstable_scheduleHydration=function(e){if(e){var t=e8();e={blockedOn:null,target:e,priority:t};for(var n=0;n<er.length&&t!==0&&t<er[n].priority;n++);er.splice(n,0,e),n===0&&n8(e)}};function r0(e){return!(!e||e.nodeType!==1&&e.nodeType!==9&&e.nodeType!==11)}function Qc(e){return!(!e||e.nodeType!==1&&e.nodeType!==9&&e.nodeType!==11&&(e.nodeType!==8||e.nodeValue!==" react-mount-point-unstable "))}function x7(){}function wx(e,t,n,r,i){if(i){if(typeof r=="function"){var a=r;r=function(){var u=Rs(l);a.call(u)}}var l=kv(t,r,e,0,null,!1,!1,"",x7);return e._reactRootContainer=l,e[Ln]=l.current,gl(e.nodeType===8?e.parentNode:e),Zr(),l}for(;i=e.lastChild;)e.removeChild(i);if(typeof r=="function"){var o=r;r=function(){var u=Rs(s);o.call(u)}}var s=e0(e,0,!1,null,null,!1,!1,"",x7);return e._reactRootContainer=s,e[Ln]=s.current,gl(e.nodeType===8?e.parentNode:e),Zr(function(){Yc(t,s,n,r)}),s}function Jc(e,t,n,r,i){var a=n._reactRootContainer;if(a){var l=a;if(typeof i=="function"){var o=i;i=function(){var s=Rs(l);o.call(s)}}Yc(t,l,e,i)}else l=wx(n,t,e,i,r);return Rs(l)}Qy=function(e){switch(e.tag){case 3:var t=e.stateNode;if(t.current.memoizedState.isDehydrated){var n=qa(t.pendingLanes);n!==0&&(kp(t,n|1),Ot(t,Fe()),!(se&6)&&(Gi=Fe()+500,wr()))}break;case 13:Zr(function(){var r=Fn(e,1);if(r!==null){var i=gt();sn(r,e,1,i)}}),t0(e,1)}};Sp=function(e){if(e.tag===13){var t=Fn(e,134217728);if(t!==null){var n=gt();sn(t,e,134217728,n)}t0(e,134217728)}};Jy=function(e){if(e.tag===13){var t=fr(e),n=Fn(e,t);if(n!==null){var r=gt();sn(n,e,t,r)}t0(e,t)}};e8=function(){return ye};t8=function(e,t){var n=ye;try{return ye=e,t()}finally{ye=n}};of=function(e,t,n){switch(t){case"input":if(Jd(e,n),t=n.name,n.type==="radio"&&t!=null){for(n=e;n.parentNode;)n=n.parentNode;for(n=n.querySelectorAll("input[name="+JSON.stringify(""+t)+'][type="radio"]'),t=0;t<n.length;t++){var r=n[t];if(r!==e&&r.form===e.form){var i=Uc(r);if(!i)throw Error(U(90));My(r),Jd(r,i)}}}break;case"textarea":$y(e,n);break;case"select":t=n.value,t!=null&&Ci(e,!!n.multiple,t,!1)}};By=Yp;Wy=Zr;var kx={usingClientEntryPoint:!1,Events:[ho,bi,Uc,Fy,Ry,Yp]},za={findFiberByHostInstance:zr,bundleType:0,version:"18.3.1",rendererPackageName:"react-dom"},Sx={bundleType:za.bundleType,version:za.version,rendererPackageName:za.rendererPackageName,rendererConfig:za.rendererConfig,overrideHookState:null,overrideHookStateDeletePath:null,overrideHookStateRenamePath:null,overrideProps:null,overridePropsDeletePath:null,overridePropsRenamePath:null,setErrorHandler:null,setSuspenseHandler:null,scheduleUpdate:null,currentDispatcherRef:Hn.ReactCurrentDispatcher,findHostInstanceByFiber:function(e){return e=Gy(e),e===null?null:e.stateNode},findFiberByHostInstance:za.findFiberByHostInstance||bx,findHostInstancesForRefresh:null,scheduleRefresh:null,scheduleRoot:null,setRefreshHandler:null,getCurrentFiber:null,reconcilerVersion:"18.3.1-next-f1338f8080-20240426"};if(typeof __REACT_DEVTOOLS_GLOBAL_HOOK__<"u"){var Bo=__REACT_DEVTOOLS_GLOBAL_HOOK__;if(!Bo.isDisabled&&Bo.supportsFiber)try{Fc=Bo.inject(Sx),gn=Bo}catch{}}zt.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED=kx;zt.createPortal=function(e,t){var n=2<arguments.length&&arguments[2]!==void 0?arguments[2]:null;if(!r0(t))throw Error(U(200));return xx(e,t,null,n)};zt.createRoot=function(e,t){if(!r0(e))throw Error(U(299));var n=!1,r="",i=Sv;return t!=null&&(t.unstable_strictMode===!0&&(n=!0),t.identifierPrefix!==void 0&&(r=t.identifierPrefix),t.onRecoverableError!==void 0&&(i=t.onRecoverableError)),t=e0(e,1,!1,null,null,n,!1,r,i),e[Ln]=t.current,gl(e.nodeType===8?e.parentNode:e),new n0(t)};zt.findDOMNode=function(e){if(e==null)return null;if(e.nodeType===1)return e;var t=e._reactInternals;if(t===void 0)throw typeof e.render=="function"?Error(U(188)):(e=Object.keys(e).join(","),Error(U(268,e)));return e=Gy(t),e=e===null?null:e.stateNode,e};zt.flushSync=function(e){return Zr(e)};zt.hydrate=function(e,t,n){if(!Qc(t))throw Error(U(200));return Jc(null,e,t,!0,n)};zt.hydrateRoot=function(e,t,n){if(!r0(e))throw Error(U(405));var r=n!=null&&n.hydratedSources||null,i=!1,a="",l=Sv;if(n!=null&&(n.unstable_strictMode===!0&&(i=!0),n.identifierPrefix!==void 0&&(a=n.identifierPrefix),n.onRecoverableError!==void 0&&(l=n.onRecoverableError)),t=kv(t,null,e,1,n??null,i,!1,a,l),e[Ln]=t.current,gl(e),r)for(e=0;e<r.length;e++)n=r[e],i=n._getVersion,i=i(n._source),t.mutableSourceEagerHydrationData==null?t.mutableSourceEagerHydrationData=[n,i]:t.mutableSourceEagerHydrationData.push(n,i);return new Zc(t)};zt.render=function(e,t,n){if(!Qc(t))throw Error(U(200));return Jc(null,e,t,!1,n)};zt.unmountComponentAtNode=function(e){if(!Qc(e))throw Error(U(40));return e._reactRootContainer?(Zr(function(){Jc(null,null,e,!1,function(){e._reactRootContainer=null,e[Ln]=null})}),!0):!1};zt.unstable_batchedUpdates=Yp;zt.unstable_renderSubtreeIntoContainer=function(e,t,n,r){if(!Qc(n))throw Error(U(200));if(e==null||e._reactInternals===void 0)throw Error(U(38));return Jc(e,t,n,!1,r)};zt.version="18.3.1-next-f1338f8080-20240426";function _v(){if(!(typeof __REACT_DEVTOOLS_GLOBAL_HOOK__>"u"||typeof __REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE!="function"))try{__REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE(_v)}catch(e){console.error(e)}}_v(),_y.exports=zt;var _x=_y.exports,b7=_x;Vd.createRoot=b7.createRoot,Vd.hydrateRoot=b7.hydrateRoot;const Wo="http://localhost:8000";function jx(){const[e,t]=N.useState("realtime"),[n,r]=N.useState(null),[i,a]=N.useState([]),[l,o]=N.useState([]),[s,u]=N.useState(null),[f,d]=N.useState(!0);return N.useEffect(()=>{const p=async()=>{try{const[b,v,w,y]=await Promise.all([fetch("http://localhost:8001/api/energy-savings"),fetch("http://localhost:8001/api/ai-frequency-control"),fetch("http://localhost:8001/api/energy-savings-summary"),fetch("http://localhost:8001/api/ess-data")]),[m,g,S,x]=await Promise.all([b.json(),v.json(),w.json(),y.json()]);m.success&&r(m.data),g.success&&a(g.data),S.success&&o(S.data),x.success&&u(x.data)}catch(b){console.error("데이터 로드 실패:",b)}finally{d(!1)}};p();const h=setInterval(p,2e3);return()=>clearInterval(h)},[]),f?c.jsx("div",{className:"dashboard-compact",style:{display:"flex",justifyContent:"center",alignItems:"center"},children:c.jsxs("div",{style:{textAlign:"center",color:"#94a3b8"},children:[c.jsx("div",{style:{fontSize:"2rem",marginBottom:"1rem"},children:"⏳"}),c.jsx("div",{children:"데이터 로딩 중..."})]})}):c.jsxs("div",{className:"dashboard-compact",children:[c.jsxs("div",{className:"sub-tab-nav",children:[c.jsx("button",{className:`sub-tab-btn ${e==="realtime"?"active":""}`,onClick:()=>t("realtime"),children:"실시간 현황"}),c.jsx("button",{className:`sub-tab-btn ${e==="accumulated"?"active":""}`,onClick:()=>t("accumulated"),children:"누적 현황"})]}),e==="realtime"&&c.jsxs(c.Fragment,{children:[n&&c.jsx("div",{className:"top-section",children:c.jsx(Ox,{data:n})}),c.jsx("div",{className:"bottom-section",children:i.length>0&&c.jsxs("div",{className:"table-panel full-width",children:[c.jsx("h3",{children:"AI 목표 vs 실제 주파수"}),c.jsx("div",{className:"table-scroll",children:c.jsx(Ax,{data:i})})]})})]}),e==="accumulated"&&c.jsxs(c.Fragment,{children:[s&&c.jsx("div",{className:"top-section",children:c.jsx(Px,{essData:s})}),c.jsx("div",{className:"bottom-section",children:s&&c.jsxs("div",{className:"table-panel full-width",children:[c.jsxs("div",{className:"table-header-with-export",children:[c.jsx("h3",{children:"ESS 운전 및 에너지 현황"}),c.jsx(Nx,{})]}),c.jsx(Cx,{data:s})]})})]})]})}function Ox({data:e}){const t=(e==null?void 0:e.realtime)||{},n=(t==null?void 0:t.total)||{},r=(t==null?void 0:t.swp)||{},i=(t==null?void 0:t.fwp)||{},a=(t==null?void 0:t.fan)||{};return c.jsxs("div",{className:"compact-energy-card realtime-only",children:[c.jsxs("div",{className:"realtime-panel",children:[c.jsx("div",{className:"panel-title",children:"실시간 전력 비교"}),c.jsxs("div",{className:"realtime-grid",children:[c.jsxs("div",{className:"realtime-item",children:[c.jsx("span",{className:"label",children:"60Hz 고정"}),c.jsxs("span",{className:"value",children:[(n.power_60hz||0).toLocaleString()," kW"]})]}),c.jsxs("div",{className:"realtime-item",children:[c.jsx("span",{className:"label",children:"VFD 가변"}),c.jsxs("span",{className:"value vfd",children:[(n.power_vfd||0).toLocaleString()," kW"]})]}),c.jsxs("div",{className:"realtime-item highlight",children:[c.jsx("span",{className:"label",children:"절감 전력"}),c.jsxs("span",{className:"value saving",children:[(n.savings_kw||0).toLocaleString()," kW (",n.savings_rate||0,"%↓)"]})]})]})]}),c.jsxs("div",{className:"system-panel",children:[c.jsx("div",{className:"panel-title",children:"시스템별 순간 절감 전력"}),c.jsx(md,{label:"SWP",kw:r.savings_kw||0,rate:r.savings_rate||0,color:"#38bdf8"}),c.jsx(md,{label:"FWP",kw:i.savings_kw||0,rate:i.savings_rate||0,color:"#34d399"}),c.jsx(md,{label:"FAN",kw:a.savings_kw||0,rate:a.savings_rate||0,color:"#fbbf24"})]})]})}function Px({essData:e}){var r,i,a;const t=((i=(r=e==null?void 0:e.today)==null?void 0:r.groups)==null?void 0:i.TOTAL)||{},n=((a=e==null?void 0:e.groups)==null?void 0:a.TOTAL)||{};return c.jsxs("div",{className:"compact-energy-card accumulated-only",children:[c.jsxs("div",{className:"accumulated-card",children:[c.jsxs("div",{className:"acc-header",children:[c.jsx("span",{className:"acc-icon",children:"📅"}),c.jsx("span",{className:"acc-title",children:"오늘 누적 절감"})]}),c.jsxs("div",{className:"acc-main-value",children:[(t.saved_kwh||0).toFixed(1)," kWh"]}),c.jsxs("div",{className:"acc-sub-info",children:["ESS 운전: ",(t.ess_hours||0).toFixed(1),"h | 절감률: ",(t.savings_rate||0).toFixed(1),"%"]})]}),c.jsxs("div",{className:"accumulated-card",children:[c.jsxs("div",{className:"acc-header",children:[c.jsx("span",{className:"acc-icon",children:"📊"}),c.jsx("span",{className:"acc-title",children:"전체 누적 절감"})]}),c.jsxs("div",{className:"acc-main-value",children:[(n.saved_kwh||0).toFixed(1)," kWh"]}),c.jsxs("div",{className:"acc-sub-info",children:["ESS 운전: ",(n.ess_hours||0).toFixed(1),"h | 절감률: ",(n.savings_rate||0).toFixed(1),"%"]})]})]})}function md({label:e,kw:t,rate:n,color:r}){return c.jsxs("div",{className:"system-row",children:[c.jsx("span",{className:"sys-label",style:{borderLeft:`3px solid ${r}`},children:e}),c.jsxs("span",{className:"sys-kw",children:[t," kW"]}),c.jsx("div",{className:"sys-bar",children:c.jsx("div",{className:"sys-bar-fill",style:{width:`${Math.min(n,100)}%`,background:r}})}),c.jsxs("span",{className:"sys-rate",children:[n,"%"]})]})}function Ax({data:e}){const t={"SW 펌프":e.filter(n=>n.group==="SW 펌프"),"FW 펌프":e.filter(n=>n.group==="FW 펌프"),"E/R 팬":e.filter(n=>n.group==="E/R 팬")};return c.jsxs("table",{className:"compact-table ai-table",children:[c.jsx("thead",{children:c.jsxs("tr",{children:[c.jsx("th",{children:"그룹"}),c.jsx("th",{children:"장비"}),c.jsx("th",{children:"모드"}),c.jsx("th",{children:"목표"}),c.jsx("th",{children:"실제"}),c.jsx("th",{children:"편차"}),c.jsx("th",{children:"상태"})]})}),c.jsx("tbody",{children:Object.entries(t).map(([n,r])=>r.map((i,a)=>c.jsxs("tr",{children:[a===0&&c.jsx("td",{rowSpan:r.length,className:"group",children:n}),c.jsx("td",{children:i.name}),c.jsx("td",{className:i.mode==="AI 제어"?"ai":"stop",children:i.mode==="AI 제어"?"AI":"-"}),c.jsx("td",{children:i.mode==="AI 제어"?i.target_frequency.toFixed(1):"-"}),c.jsx("td",{children:i.mode==="AI 제어"?i.actual_frequency.toFixed(1):"-"}),c.jsx("td",{className:i.mode==="AI 제어"?Math.abs(i.deviation)<.3?"good":Math.abs(i.deviation)<1?"warn":"bad":"",children:i.mode==="AI 제어"?(i.deviation>=0?"+":"")+i.deviation.toFixed(1):"-"}),c.jsx("td",{className:i.mode==="AI 제어"?`status-${i.status}`:"",children:i.mode==="AI 제어"?i.status==="정상"?"✓":(i.status==="주의","⚠"):"-"})]},`${n}-${a}`)))})]})}function Nx(){const[e,t]=N.useState(!1),[n,r]=N.useState("daily"),[i,a]=N.useState(!1),l=new Date().toISOString().split("T")[0],[o,s]=N.useState(l),[u,f]=N.useState(l),[d,p]=N.useState(l),[h,b]=N.useState("SWP1"),[v,w]=N.useState(new Date().getFullYear()),[y,m]=N.useState(new Date().getMonth()+1),g=["SWP1","SWP2","SWP3","FWP1","FWP2","FWP3","FAN1","FAN2","FAN3","FAN4"],S=async()=>{a(!0);try{let x="",k="";switch(n){case"daily":x=`${Wo}/api/reports/ess/csv/daily?date=${o}`,k=`ESS_Daily_Report_${o}.csv`;break;case"period":x=`${Wo}/api/reports/ess/csv/period?start_date=${u}&end_date=${d}`,k=`ESS_Period_Report_${u}_to_${d}.csv`;break;case"equipment":x=`${Wo}/api/reports/ess/csv/equipment/${h}?start_date=${u}&end_date=${d}`,k=`ESS_Equipment_Report_${h}_${u}_to_${d}.csv`;break;case"monthly":x=`${Wo}/api/reports/ess/csv/monthly?year=${v}&month=${y}`,k=`ESS_Monthly_Report_${v}_${String(y).padStart(2,"0")}.csv`;break;default:return}const _=await fetch(x);if(!_.ok)throw new Error("다운로드 실패");const j=await _.blob(),O=window.URL.createObjectURL(j),M=document.createElement("a");M.href=O,M.download=k,document.body.appendChild(M),M.click(),document.body.removeChild(M),window.URL.revokeObjectURL(O),t(!1)}catch(x){console.error("보고서 다운로드 실패:",x),alert("보고서 다운로드에 실패했습니다.")}finally{a(!1)}};return c.jsxs("div",{className:"report-download-container",children:[c.jsx("button",{className:"report-download-btn",onClick:()=>t(!e),children:"CSV 보고서 다운로드"}),e&&c.jsxs("div",{className:"report-menu",children:[c.jsxs("div",{className:"report-menu-header",children:[c.jsx("span",{children:"보고서 유형 선택"}),c.jsx("button",{className:"close-btn",onClick:()=>t(!1),children:"X"})]}),c.jsxs("div",{className:"report-type-selector",children:[c.jsxs("label",{children:[c.jsx("input",{type:"radio",name:"reportType",value:"daily",checked:n==="daily",onChange:x=>r(x.target.value)}),"일별 보고서"]}),c.jsxs("label",{children:[c.jsx("input",{type:"radio",name:"reportType",value:"period",checked:n==="period",onChange:x=>r(x.target.value)}),"기간별 보고서"]}),c.jsxs("label",{children:[c.jsx("input",{type:"radio",name:"reportType",value:"equipment",checked:n==="equipment",onChange:x=>r(x.target.value)}),"장비별 보고서"]}),c.jsxs("label",{children:[c.jsx("input",{type:"radio",name:"reportType",value:"monthly",checked:n==="monthly",onChange:x=>r(x.target.value)}),"월별 보고서"]})]}),c.jsxs("div",{className:"report-options",children:[n==="daily"&&c.jsxs("div",{className:"option-group",children:[c.jsx("label",{children:"날짜:"}),c.jsx("input",{type:"date",value:o,onChange:x=>s(x.target.value)})]}),(n==="period"||n==="equipment")&&c.jsxs(c.Fragment,{children:[c.jsxs("div",{className:"option-group",children:[c.jsx("label",{children:"시작일:"}),c.jsx("input",{type:"date",value:u,onChange:x=>f(x.target.value)})]}),c.jsxs("div",{className:"option-group",children:[c.jsx("label",{children:"종료일:"}),c.jsx("input",{type:"date",value:d,onChange:x=>p(x.target.value)})]})]}),n==="equipment"&&c.jsxs("div",{className:"option-group",children:[c.jsx("label",{children:"장비:"}),c.jsx("select",{value:h,onChange:x=>b(x.target.value),children:g.map(x=>c.jsx("option",{value:x,children:x},x))})]}),n==="monthly"&&c.jsxs(c.Fragment,{children:[c.jsxs("div",{className:"option-group",children:[c.jsx("label",{children:"연도:"}),c.jsx("select",{value:v,onChange:x=>w(Number(x.target.value)),children:[2024,2025,2026].map(x=>c.jsxs("option",{value:x,children:[x,"년"]},x))})]}),c.jsxs("div",{className:"option-group",children:[c.jsx("label",{children:"월:"}),c.jsx("select",{value:y,onChange:x=>m(Number(x.target.value)),children:Array.from({length:12},(x,k)=>k+1).map(x=>c.jsxs("option",{value:x,children:[x,"월"]},x))})]})]})]}),c.jsx("button",{className:"download-execute-btn",onClick:S,disabled:i,children:i?"다운로드 중...":"CSV 다운로드"})]})]})}function Cx({data:e}){const t=(e==null?void 0:e.equipment)||[],n=(e==null?void 0:e.groups)||{},r=(e==null?void 0:e.today)||{},i=a=>a.startsWith("SWP")?"swp":a.startsWith("FWP")?"fwp":a.startsWith("FAN")?"fan":"";return c.jsxs("div",{className:"ess-data-container",children:[c.jsx("div",{className:"ess-group-summary",children:c.jsx("div",{className:"ess-group-cards",children:["SWP","FWP","FAN","TOTAL"].map(a=>{var f;const l=n[a]||{},o=((f=r==null?void 0:r.groups)==null?void 0:f[a])||{},s=a==="TOTAL"?"전체":a==="SWP"?"해수펌프":a==="FWP"?"청수펌프":"E/R 팬",u=a==="TOTAL"?"#f59e0b":a==="SWP"?"#3b82f6":a==="FWP"?"#10b981":"#a855f7";return c.jsxs("div",{className:"ess-group-card",style:{borderTop:`3px solid ${u}`},children:[c.jsxs("div",{className:"ess-group-header",children:[c.jsx("span",{className:"ess-group-label",children:s}),c.jsxs("span",{className:"ess-group-rate",style:{color:u},children:[(l.savings_rate||0).toFixed(1),"%"]})]}),c.jsxs("div",{className:"ess-group-stats",children:[c.jsxs("div",{className:"ess-stat",children:[c.jsx("span",{className:"ess-stat-label",children:"ESS 운전"}),c.jsxs("span",{className:"ess-stat-value",children:[(l.ess_hours||0).toFixed(1),"h"]})]}),c.jsxs("div",{className:"ess-stat",children:[c.jsx("span",{className:"ess-stat-label",children:"누적 절감"}),c.jsxs("span",{className:"ess-stat-value",children:[(l.saved_kwh||0).toFixed(1)," kWh"]})]}),c.jsxs("div",{className:"ess-stat today",children:[c.jsx("span",{className:"ess-stat-label",children:"오늘 절감"}),c.jsxs("span",{className:"ess-stat-value",children:[(o.saved_kwh||0).toFixed(1)," kWh"]})]})]})]},a)})})}),c.jsx("div",{className:"ess-equipment-table-wrapper",children:c.jsxs("table",{className:"compact-table ess-table",children:[c.jsx("thead",{children:c.jsxs("tr",{children:[c.jsx("th",{children:"장비"}),c.jsx("th",{children:"ESS 운전 (h)"}),c.jsx("th",{children:"총 운전 (h)"}),c.jsx("th",{children:"ESS 소비 (kWh)"}),c.jsx("th",{children:"기준 전력 (kWh)"}),c.jsx("th",{children:"절감량 (kWh)"}),c.jsx("th",{children:"절감률 (%)"}),c.jsx("th",{children:"오늘 절감 (kWh)"})]})}),c.jsx("tbody",{children:t.map((a,l)=>{var s;const o=((s=r==null?void 0:r.equipment)==null?void 0:s[l])||{};return c.jsxs("tr",{className:i(a.name),children:[c.jsx("td",{className:"name",children:a.name}),c.jsx("td",{children:(a.ess_hours||0).toFixed(1)}),c.jsx("td",{children:(a.total_hours||0).toFixed(1)}),c.jsx("td",{children:(a.ess_kwh||0).toFixed(1)}),c.jsx("td",{children:(a.baseline_kwh||0).toFixed(1)}),c.jsx("td",{className:"saved",children:(a.saved_kwh||0).toFixed(1)}),c.jsx("td",{className:a.savings_rate>0?"positive":"",children:(a.savings_rate||0).toFixed(1)}),c.jsx("td",{className:"today",children:(o.saved_kwh||0).toFixed(1)})]},l)})})]})})]})}const Er=[{name:"TX1",symbolId:"TX1",x:825,y:320,unit:"°C",decimal:1},{name:"TX2",symbolId:"TX2",x:568,y:154,unit:"°C",decimal:1},{name:"TX3",symbolId:"TX3",x:568,y:298,unit:"°C",decimal:1},{name:"TX4",symbolId:"TX4",x:318,y:156,unit:"°C",decimal:1},{name:"TX5",symbolId:"TX5",x:495,y:440,unit:"°C",decimal:1},{name:"TX6",symbolId:"TX6",x:0,y:0,unit:"°C",decimal:1},{name:"DPX1",symbolId:"PX1",x:945,y:439,unit:" bar",decimal:2},{name:"PX2",symbolId:"PX2",x:0,y:0,unit:" bar",decimal:2},{name:"LT Pump No.1",symbolId:"g229",x:244.243,y:372.093,type:"pump"},{name:"LT Pump No.1 Auto/Man mode",symbolId:"LT_Pump1_Mode",x:300,y:365},{name:"LT Pump No.1 VFD/ BYPASS",symbolId:"LT_Pump1_VFD",x:300,y:382},{name:"LT Pump No.1 Hz(VFD)",symbolId:"LT_Pump1_Hz",x:300,y:399,unit:" Hz"},{name:"LT Pump No.1 running hour",symbolId:"LT_Pump1_hour",x:300,y:416,unit:" h"},{name:"LT Pump No.2",symbolId:"g245",x:244.243,y:459.033,type:"pump"},{name:"LT Pump No.2 Auto/Man mode",symbolId:"LT_Pump2_Mode",x:300,y:452},{name:"LT Pump No.2 VFD/ BYPASS",symbolId:"LT_Pump2_VFD",x:300,y:469},{name:"LT Pump No.2 Hz(VFD)",symbolId:"LT_Pump2_Hz",x:300,y:486,unit:" Hz"},{name:"LT Pump No.2 running hour",symbolId:"LT_Pump2_hour",x:300,y:503,unit:" h"},{name:"LT Pump No.3",symbolId:"g261",x:244.243,y:545.963,type:"pump"},{name:"LT Pump No.3 Auto/Man mode",symbolId:"LT_Pump3_Mode",x:300,y:539},{name:"LT Pump No.3 VFD/ BYPASS",symbolId:"LT_Pump3_VFD",x:300,y:556},{name:"LT Pump No.3 Hz(VFD)",symbolId:"LT_Pump3_Hz",x:300,y:573,unit:" Hz"},{name:"LT Pump No.3 running hour",symbolId:"LT_Pump3_hour",x:300,y:590,unit:" h"},{name:"SW Pump No.1",symbolId:"g119",x:786.444,y:476.633,type:"pump"},{name:"SW Pump No.1 Auto/Man mode",symbolId:"SW_Pump1_Mode",x:827,y:470},{name:"SW Pump No.1 VFD/ BYPASS",symbolId:"SW_Pump1_VFD",x:827,y:487},{name:"SW Pump No.1 Hz(VFD)",symbolId:"SW_Pump1_Hz",x:827,y:504,unit:" Hz"},{name:"SW Pump No.1 running hour",symbolId:"SW_Pump1_hour",x:827,y:521,unit:" h"},{name:"SW Pump No.2",symbolId:"g1046",x:695.023,y:476.633,type:"pump"},{name:"SW Pump No.2 Auto/Man mode",symbolId:"SW_Pump2_Mode",x:735,y:470},{name:"SW Pump No.2 VFD/ BYPASS",symbolId:"SW_Pump2_VFD",x:735,y:487},{name:"SW Pump No.2 Hz(VFD)",symbolId:"SW_Pump2_Hz",x:735,y:504,unit:" Hz"},{name:"SW Pump No.2 running hour",symbolId:"SW_Pump2_hour",x:735,y:521,unit:" h"},{name:"SW Pump No.3",symbolId:"g103",x:599.923,y:476.633,type:"pump"},{name:"SW Pump No.3 Auto/Man mode",symbolId:"SW_Pump3_Mode",x:640,y:470},{name:"SW Pump No.3 VFD/ BYPASS",symbolId:"SW_Pump3_VFD",x:640,y:487},{name:"SW Pump No.3 Hz(VFD)",symbolId:"SW_Pump3_Hz",x:640,y:504,unit:" Hz"},{name:"SW Pump No.3 running hour",symbolId:"SW_Pump3_hour",x:640,y:521,unit:" h"}],Ex=Er.filter(e=>e.name.startsWith("TX")||e.name.startsWith("PX")||e.name.startsWith("DPX")),Mx={0:{name:"SW_Pump_1",data:Er.filter(e=>e.name.includes("SW Pump No.1"))},1:{name:"SW_Pump_2",data:Er.filter(e=>e.name.includes("SW Pump No.2"))},2:{name:"SW_Pump_3",data:Er.filter(e=>e.name.includes("SW Pump No.3"))},3:{name:"LT_Pump_1",data:Er.filter(e=>e.name.includes("LT Pump No.1"))},4:{name:"LT_Pump_2",data:Er.filter(e=>e.name.includes("LT Pump No.2"))},5:{name:"LT_Pump_3",data:Er.filter(e=>e.name.includes("LT Pump No.3"))}},Tx=`<?xml version="1.0" encoding="UTF-8" standalone="no"?>
<svg
   viewBox="0 0 1024 768"
   version="1.1"
   stroke-linecap="round"
   stroke-linejoin="round"
   fill-rule="evenodd"
   xml:space="preserve"
   id="svg1465"
   sodipodi:docname="도면PUMP_Final_Rev3_251120.svg"
   inkscape:version="1.4.2 (f4327f4, 2025-05-13)"
   xmlns:inkscape="http://www.inkscape.org/namespaces/inkscape"
   xmlns:sodipodi="http://sodipodi.sourceforge.net/DTD/sodipodi-0.dtd"
   xmlns:xlink="http://www.w3.org/1999/xlink"
   xmlns="http://www.w3.org/2000/svg"
   xmlns:svg="http://www.w3.org/2000/svg"><sodipodi:namedview
   id="namedview1465"
   pagecolor="#ffffff"
   bordercolor="#000000"
   borderopacity="0.25"
   inkscape:showpageshadow="2"
   inkscape:pageopacity="0.0"
   inkscape:pagecheckerboard="0"
   inkscape:deskcolor="#d1d1d1"
   inkscape:zoom="1.0507814"
   inkscape:cx="519.13747"
   inkscape:cy="391.61333"
   inkscape:window-width="1920"
   inkscape:window-height="1009"
   inkscape:window-x="1912"
   inkscape:window-y="-8"
   inkscape:window-maximized="1"
   inkscape:current-layer="svg1465" />
<defs
   id="defs1"><linearGradient
   id="linearGradient66"
   inkscape:collect="always"><stop
     style="stop-color:#ffffff;stop-opacity:1;"
     offset="0"
     id="stop75" /><stop
     style="stop-color:#ffffff;stop-opacity:0;"
     offset="1"
     id="stop76" /></linearGradient><rect
   x="478.45629"
   y="327.04607"
   width="17.496292"
   height="56.526481"
   id="rect11" /><style
   type="text/css"
   id="style1">
    @keyframes rotate { from { transform: rotate(0deg); } to { transform: rotate(360deg); } }
    [class^=&quot;impeller-&quot;] { animation: rotate 3s linear infinite; transform-origin: center; transform-box: fill-box; }
    .impeller-SW_Pump_1 { animation-duration: 2.5s; }
    .impeller-SW_Pump_2 { animation-duration: 2.7s; }
    .impeller-SW_Pump_3 { animation-duration: 2.3s; }
    .impeller-LT_Pump_1 { animation-duration: 3.0s; }
    .impeller-LT_Pump_2 { animation-duration: 2.8s; }
    .impeller-LT_Pump_3 { animation-duration: 3.2s; }
</style>
<linearGradient
   id="metalGrad1"
   x1="0%"
   y1="0%"
   x2="100%"
   y2="100%">
  <stop
   offset="0%"
   style="stop-color:#c0c0c0;stop-opacity:1"
   id="stop1" />
  <stop
   offset="50%"
   style="stop-color:#e8e8e8;stop-opacity:1"
   id="stop2" />
  <stop
   offset="100%"
   style="stop-color:#a8a8a8;stop-opacity:1"
   id="stop3" />
</linearGradient>
<linearGradient
   id="blueFlow1"
   x1="0%"
   y1="0%"
   x2="100%"
   y2="0%">
  <stop
   offset="0%"
   style="stop-color:#00b0f0;stop-opacity:1"
   id="stop4" />
  <stop
   offset="100%"
   style="stop-color:#0077b6;stop-opacity:1"
   id="stop5" />
</linearGradient>
<linearGradient
   id="redFlow1"
   x1="0%"
   y1="0%"
   x2="100%"
   y2="0%">
  <stop
   offset="0%"
   style="stop-color:#ff4444;stop-opacity:1"
   id="stop6" />
  <stop
   offset="100%"
   style="stop-color:#cc0000;stop-opacity:1"
   id="stop7" />
</linearGradient>
<clipPath
   id="clipId0">
<path
   d="M0,768 1024,768 1024,0 0,0 z"
   id="path1"
   data-element-id="element-0-1761788125775"
   style="cursor: pointer;" />
</clipPath>
<clipPath
   id="clipId0-9">
<path
   d="M 0,768 H 1024 V 0 H 0 Z"
   id="path1-4"
   data-element-id="element-0-1761788125775" />
</clipPath><clipPath
   id="clipPath2">
<path
   d="M 0,768 H 1024 V 0 H 0 Z"
   id="path2-8"
   data-element-id="element-0-1761788125775" />
</clipPath><clipPath
   id="clipPath3">
<path
   d="M 0,768 H 1024 V 0 H 0 Z"
   id="path3-8"
   data-element-id="element-0-1761788125775" />
</clipPath><clipPath
   id="clipId0-9-1">
<path
   d="M 0,768 H 1024 V 0 H 0 Z"
   id="path1-4-8"
   data-element-id="element-0-1761788125775" />
</clipPath><clipPath
   id="clipPath1">
<path
   d="M 0,768 H 1024 V 0 H 0 Z"
   id="path1-9"
   data-element-id="element-0-1761788125775" />
</clipPath><clipPath
   id="clipPath2-2">
<path
   d="M 0,768 H 1024 V 0 H 0 Z"
   id="path2-7"
   data-element-id="element-0-1761788125775" />
</clipPath><linearGradient
   inkscape:collect="always"
   xlink:href="#redFlow_valve"
   id="linearGradient77"
   x1="-11.17868"
   y1="-3.5842538"
   x2="-3.8296048"
   y2="-3.5842538"
   gradientTransform="scale(1.8056694,0.55381122)"
   gradientUnits="userSpaceOnUse" /><linearGradient
   inkscape:collect="always"
   xlink:href="#redFlow_valve"
   id="linearGradient78"
   x1="-8.8888192"
   y1="-1.1365991"
   x2="-6.615621"
   y2="-1.1365991"
   gradientTransform="scale(0.85781819,1.1657482)"
   gradientUnits="userSpaceOnUse" /><linearGradient
   inkscape:collect="always"
   xlink:href="#blueFlow_valve"
   id="linearGradient79"
   x1="4.0511291"
   y1="-3.5842538"
   x2="11.400204"
   y2="-3.5842538"
   gradientTransform="scale(1.8056694,0.55381122)"
   gradientUnits="userSpaceOnUse" /><linearGradient
   inkscape:collect="always"
   xlink:href="#blueFlow_valve"
   id="linearGradient80"
   x1="6.615621"
   y1="-1.1365991"
   x2="8.8888192"
   y2="-1.1365991"
   gradientTransform="scale(0.85781819,1.1657482)"
   gradientUnits="userSpaceOnUse" /><linearGradient
   inkscape:collect="always"
   xlink:href="#blueFlow_valve"
   id="linearGradient81"
   x1="-3.4183531"
   y1="4.5380843"
   x2="3.5905626"
   y2="4.5380843"
   gradientTransform="scale(0.58068897,1.7220923)"
   gradientUnits="userSpaceOnUse" /><linearGradient
   inkscape:collect="always"
   xlink:href="#blueFlow_valve"
   id="linearGradient82"
   x1="-1.1365991"
   y1="7.4316447"
   x2="1.1365991"
   y2="7.4316447"
   gradientTransform="scale(1.1657482,0.85781819)"
   gradientUnits="userSpaceOnUse" />

















<linearGradient
   inkscape:collect="always"
   xlink:href="#metalGrad1"
   id="linearGradient48"
   x1="9"
   y1="9"
   x2="191"
   y2="191"
   gradientUnits="userSpaceOnUse" /><linearGradient
   inkscape:collect="always"
   xlink:href="#redFlow1"
   id="linearGradient49"
   x1="-16.158884"
   y1="71.350068"
   x2="4.8589652"
   y2="71.350068"
   gradientTransform="scale(2.2124052,0.45199676)"
   gradientUnits="userSpaceOnUse" /><linearGradient
   inkscape:collect="always"
   xlink:href="#redFlow1"
   id="linearGradient50"
   x1="4.0704845"
   y1="35.930085"
   x2="14.020294"
   y2="35.930085"
   gradientTransform="scale(1.1055403,0.90453512)"
   gradientUnits="userSpaceOnUse" /><linearGradient
   inkscape:collect="always"
   xlink:href="#blueFlow1"
   id="linearGradient51"
   x1="-16.158884"
   y1="358.96275"
   x2="4.8589652"
   y2="358.96275"
   gradientTransform="matrix(2.2124052,0,0,0.45199676,0,-1.7752663)"
   gradientUnits="userSpaceOnUse" /><linearGradient
   inkscape:collect="always"
   xlink:href="#blueFlow1"
   id="linearGradient52"
   x1="4.0704845"
   y1="179.65032"
   x2="14.020294"
   y2="179.65032"
   gradientTransform="scale(1.1055403,0.90453512)"
   gradientUnits="userSpaceOnUse" /><linearGradient
   inkscape:collect="always"
   xlink:href="#redFlow1"
   id="linearGradient53"
   x1="83.280404"
   y1="71.350068"
   x2="104.29825"
   y2="71.350068"
   gradientTransform="scale(2.2124052,0.45199676)"
   gradientUnits="userSpaceOnUse" /><linearGradient
   inkscape:collect="always"
   xlink:href="#redFlow1"
   id="linearGradient54"
   x1="166.88673"
   y1="35.930085"
   x2="176.83654"
   y2="35.930085"
   gradientTransform="scale(1.1055403,0.90453512)"
   gradientUnits="userSpaceOnUse" /><linearGradient
   inkscape:collect="always"
   xlink:href="#blueFlow1"
   id="linearGradient55"
   x1="83.280404"
   y1="358.96275"
   x2="104.29825"
   y2="358.96275"
   gradientTransform="matrix(2.2124052,0,0,0.45199676,0,-1.7752663)"
   gradientUnits="userSpaceOnUse" /><linearGradient
   inkscape:collect="always"
   xlink:href="#blueFlow1"
   id="linearGradient56"
   x1="166.88673"
   y1="179.65032"
   x2="176.83654"
   y2="179.65032"
   gradientTransform="scale(1.1055403,0.90453512)"
   gradientUnits="userSpaceOnUse" /><linearGradient
   inkscape:collect="always"
   xlink:href="#metalGrad1"
   id="linearGradient57"
   x1="9"
   y1="9"
   x2="191"
   y2="191"
   gradientUnits="userSpaceOnUse" /><linearGradient
   inkscape:collect="always"
   xlink:href="#redFlow1"
   id="linearGradient58"
   x1="-16.158884"
   y1="73.562473"
   x2="4.8589652"
   y2="73.562473"
   gradientTransform="scale(2.2124052,0.45199676)"
   gradientUnits="userSpaceOnUse" /><linearGradient
   inkscape:collect="always"
   xlink:href="#redFlow1"
   id="linearGradient59"
   x1="4.0704845"
   y1="37.035626"
   x2="14.020294"
   y2="37.035626"
   gradientTransform="scale(1.1055403,0.90453512)"
   gradientUnits="userSpaceOnUse" /><linearGradient
   inkscape:collect="always"
   xlink:href="#blueFlow1"
   id="linearGradient60"
   x1="-16.158884"
   y1="361.17515"
   x2="4.8589652"
   y2="361.17515"
   gradientTransform="matrix(2.2124052,0,0,0.45199676,0,-3.5842294)"
   gradientUnits="userSpaceOnUse" /><linearGradient
   inkscape:collect="always"
   xlink:href="#blueFlow1"
   id="linearGradient61"
   x1="4.0704845"
   y1="180.75586"
   x2="14.020294"
   y2="180.75586"
   gradientTransform="scale(1.1055403,0.90453512)"
   gradientUnits="userSpaceOnUse" /><linearGradient
   inkscape:collect="always"
   xlink:href="#redFlow1"
   id="linearGradient62"
   x1="83.280404"
   y1="73.562473"
   x2="104.29825"
   y2="73.562473"
   gradientTransform="scale(2.2124052,0.45199676)"
   gradientUnits="userSpaceOnUse" /><linearGradient
   inkscape:collect="always"
   xlink:href="#redFlow1"
   id="linearGradient63"
   x1="166.88673"
   y1="37.035626"
   x2="176.83654"
   y2="37.035626"
   gradientTransform="scale(1.1055403,0.90453512)"
   gradientUnits="userSpaceOnUse" /><linearGradient
   inkscape:collect="always"
   xlink:href="#blueFlow1"
   id="linearGradient64"
   x1="83.280404"
   y1="361.17515"
   x2="104.29825"
   y2="361.17515"
   gradientTransform="matrix(2.2124052,0,0,0.45199676,0,-3.5842294)"
   gradientUnits="userSpaceOnUse" /><linearGradient
   inkscape:collect="always"
   xlink:href="#blueFlow1"
   id="linearGradient65"
   x1="166.88673"
   y1="180.75586"
   x2="176.83654"
   y2="180.75586"
   gradientTransform="scale(1.1055403,0.90453512)"
   gradientUnits="userSpaceOnUse" /><clipPath
   id="clipId0-94">
<path
   d="M 0,768 H 1024 V 0 H 0 Z"
   id="path1-8"
   data-element-id="element-0-1761788125775" />
</clipPath><clipPath
   id="clipId0-94-9">
<path
   d="M 0,768 H 1024 V 0 H 0 Z"
   id="path1-8-2"
   data-element-id="element-0-1761788125775" />
</clipPath><clipPath
   id="clipId0-79">
<path
   d="M 0,768 H 1024 V 0 H 0 Z"
   id="path1-5"
   data-element-id="element-0-1761788125775" />
</clipPath><clipPath
   id="clipId0-94-5">
<path
   d="M 0,768 H 1024 V 0 H 0 Z"
   id="path1-8-0"
   data-element-id="element-0-1761788125775" />
</clipPath><clipPath
   id="clipId0-2">
<path
   d="M 0,768 H 1024 V 0 H 0 Z"
   id="path1-86"
   data-element-id="element-0-1761788125775" />
</clipPath>



































































<clipPath
   clipPathUnits="userSpaceOnUse"
   id="clipPath268"><path
     d="M 0,768 H 1024 V 0 H 0 Z"
     id="path268"
     data-element-id="element-0-1761788125775" /></clipPath><clipPath
   clipPathUnits="userSpaceOnUse"
   id="clipPath269"><path
     d="M 0,768 H 1024 V 0 H 0 Z"
     id="path269"
     data-element-id="element-0-1761788125775" /></clipPath>



<clipPath
   id="clipId0-948">
<path
   d="M 0,768 H 1024 V 0 H 0 Z"
   id="path1-82"
   data-element-id="element-0-1761788125775" />
</clipPath>



<linearGradient
   inkscape:collect="always"
   xlink:href="#linearGradient66"
   id="linearGradient76"
   x1="914.295"
   y1="622.231"
   x2="925.875"
   y2="622.231"
   gradientUnits="userSpaceOnUse" /><clipPath
   id="clipId0-98">
<path
   d="M 0,768 H 1024 V 0 H 0 Z"
   id="path1-80"
   data-element-id="element-0-1761788125775" />
</clipPath><clipPath
   id="clipId0-98-3">
<path
   d="M 0,768 H 1024 V 0 H 0 Z"
   id="path1-80-8"
   data-element-id="element-0-1761788125775" />
</clipPath><clipPath
   id="clipId0-98-7">
<path
   d="M 0,768 H 1024 V 0 H 0 Z"
   id="path1-80-3"
   data-element-id="element-0-1761788125775" />
</clipPath><clipPath
   id="clipId0-98-1">
<path
   d="M 0,768 H 1024 V 0 H 0 Z"
   id="path1-80-0"
   data-element-id="element-0-1761788125775" />
</clipPath><clipPath
   id="clipId0-98-1-4">
<path
   d="M 0,768 H 1024 V 0 H 0 Z"
   id="path1-80-0-8"
   data-element-id="element-0-1761788125775" />
</clipPath><clipPath
   id="clipId0-98-1-5">
<path
   d="M 0,768 H 1024 V 0 H 0 Z"
   id="path1-80-0-5"
   data-element-id="element-0-1761788125775" />
</clipPath><clipPath
   id="clipId0-98-4">
<path
   d="M 0,768 H 1024 V 0 H 0 Z"
   id="path1-80-38"
   data-element-id="element-0-1761788125775" />
</clipPath><clipPath
   id="clipId0-98-1-0">
<path
   d="M 0,768 H 1024 V 0 H 0 Z"
   id="path1-80-0-88"
   data-element-id="element-0-1761788125775" />
</clipPath><clipPath
   id="clipId0-98-7-0">
<path
   d="M 0,768 H 1024 V 0 H 0 Z"
   id="path1-80-3-6"
   data-element-id="element-0-1761788125775" />
</clipPath><clipPath
   id="clipId0-98-1-4-8">
<path
   d="M 0,768 H 1024 V 0 H 0 Z"
   id="path1-80-0-8-1"
   data-element-id="element-0-1761788125775" />
</clipPath><clipPath
   id="clipId0-98-78">
<path
   d="M 0,768 H 1024 V 0 H 0 Z"
   id="path1-80-1"
   data-element-id="element-0-1761788125775" />
</clipPath><clipPath
   id="clipId0-98-1-58">
<path
   d="M 0,768 H 1024 V 0 H 0 Z"
   id="path1-80-0-6"
   data-element-id="element-0-1761788125775" />
</clipPath><clipPath
   id="clipId0-98-7-1">
<path
   d="M 0,768 H 1024 V 0 H 0 Z"
   id="path1-80-3-2"
   data-element-id="element-0-1761788125775" />
</clipPath><clipPath
   id="clipId0-98-1-4-4">
<path
   d="M 0,768 H 1024 V 0 H 0 Z"
   id="path1-80-0-8-2"
   data-element-id="element-0-1761788125775" />
</clipPath><clipPath
   id="clipId0-9488">
<path
   d="M 0,768 H 1024 V 0 H 0 Z"
   id="path1-2"
   data-element-id="element-0-1761788125775" />
</clipPath>

<linearGradient
   id="purpleGrad"
   x1="-21"
   y1="-21"
   x2="21"
   y2="21"
   gradientUnits="userSpaceOnUse">
  <stop
   offset="0%"
   style="stop-color:#9b59b6;stop-opacity:1"
   id="stop8" />
  <stop
   offset="100%"
   style="stop-color:#8e44ad;stop-opacity:1"
   id="stop9" />
</linearGradient>

<clipPath
   id="clipId0-94882">
<path
   d="M 0,768 H 1024 V 0 H 0 Z"
   id="path1-45"
   data-element-id="element-0-1761788125775" />
</clipPath></defs>
<g
   clip-path="url(#clipId0)"
   fill="none"
   stroke="rgb(0,0,0)"
   stroke-width="0.1"
   id="g1"
   data-element-id="element-1-1761788125775"
   style="cursor: pointer;" />
<g
   id="g221"
   transform="translate(7.182251,8.8871244)"
   style="fill:#000000;fill-opacity:1"><path
     d="M 3.3602943,709.43517 H 1007.2811 V 40.217066 H 3.3602943 Z"
     id="path2"
     data-element-id="element-3-1761788125775"
     style="fill:#000000;fill-opacity:1;stroke:#e7e6e6;stroke-width:0.25;stroke-opacity:0.498039" /></g>


<g
   clip-path="url(#clipId0)"
   fill="rgb(204,236,255)"
   stroke="rgb(204,236,255)"
   stroke-width="0.25"
   fill-opacity="0.498039"
   stroke-opacity="0.498039"
   id="g3"
   data-element-id="element-4-1761788125775"
   style="cursor:pointer;stroke:#ffffff;stroke-opacity:0.49803904;fill:#000000;fill-opacity:0.49803904;stroke-width:0.7;stroke-dasharray:none">
<path
   d="M579.337,548.613 867.481,548.613 867.481,461.159 579.337,461.159 z"
   id="path3"
   data-element-id="element-5-1761788125775"
   style="cursor:pointer;stroke:#ffffff;stroke-opacity:0.49803904;fill:#000000;fill-opacity:0.49803904;stroke-width:0.7;stroke-dasharray:none" />
</g>
<g
   clip-path="url(#clipId0)"
   fill="none"
   stroke="rgb(23,44,81)"
   stroke-width="0.09"
   id="g4"
   data-element-id="element-6-1761788125775"
   style="cursor:pointer;stroke-width:0.7;stroke-dasharray:none;stroke:#ffffff;stroke-opacity:1">
<polyline
   points="579.337,548.613 867.481,548.613 867.481,461.159 579.337,461.159 579.337,548.613 "
   id="polyline3"
   data-element-id="element-7-1761788125775"
   style="cursor:pointer;stroke-width:0.7;stroke-dasharray:none;stroke:#ffffff;stroke-opacity:1" />
</g>
<g
   clip-path="url(#clipId0)"
   fill="#ccecff"
   stroke="#ccecff"
   stroke-width="0.25"
   fill-opacity="0.498039"
   stroke-opacity="0.498039"
   id="g5"
   data-element-id="element-8-1761788125775"
   transform="translate(2)"
   style="stroke:#ffffff;stroke-opacity:0.49803904">
<path
   d="M 234.623,606.128 H 336.621 V 355.479 H 234.623 Z"
   id="path4"
   data-element-id="element-9-1761788125775"
   class=""
   style="stroke:#ffffff;stroke-opacity:0.49803904;fill:#000000;fill-opacity:0.49803904" />
</g>
<g
   clip-path="url(#clipId0)"
   fill="none"
   stroke="#172c51"
   stroke-width="0.09"
   id="g6"
   data-element-id="element-10-1761788125775"
   transform="translate(2)"
   style="stroke-width:0.7;stroke-dasharray:none;stroke:#eff3fa;stroke-opacity:1">
<polyline
   points="234.623,606.128 336.621,606.128 336.621,355.479 234.623,355.479 234.623,606.128 "
   id="polyline5"
   data-element-id="element-11-1761788125775"
   style="stroke-width:0.7;stroke-dasharray:none;stroke:#eff3fa;stroke-opacity:1" />
</g>
<g
   clip-path="url(#clipId0)"
   fill="rgb(255,255,255)"
   stroke="rgb(255,255,255)"
   stroke-width="0"
   id="g8"
   data-element-id="element-12-1761788125775"
   style="cursor:pointer">
<text
   transform="scale(0.99970896,1.0002911)"
   font-family="Bahnschrift, sans-serif"
   font-size="1.4081"
   id="text6"
   data-element-id="element-13-1761788125775"
   style="font-size:24.0001px;stroke-width:0"
   x="363.57785"
   y="92.379707">COOLING WATER SYSTEM</text>
<text
   transform="matrix(15.6175,0,0,15.6361,480.868,92.4016)"
   font-family="Bahnschrift, sans-serif"
   font-size="1.4081px"
   id="text7"
   data-element-id="element-14-1761788125775" />
<text
   transform="matrix(15.605,0,0,15.6361,557.939,92.4066)"
   font-family="Bahnschrift, sans-serif"
   font-size="1.4081px"
   id="text8"
   data-element-id="element-15-1761788125775" />
</g>
<g
   clip-path="url(#clipId0)"
   fill="rgb(192,0,0)"
   stroke="rgb(192,0,0)"
   stroke-width="0"
   id="g10"
   data-element-id="element-16-1761788125775"
   style="cursor:pointer;fill:#ffffff;fill-opacity:1">
<text
   transform="matrix(7.85715 0 -0 7.84489 58.3613 195.696)"
   font-family="Bahnschrift,'sans-serif'"
   font-size="1.4081"
   id="text9"
   data-element-id="element-17-1761788125775"
   style="cursor:pointer;fill:#ffffff;fill-opacity:1">To/From Aux</text>
<text
   transform="matrix(7.84277 0 -0 7.84489 58.4707 207.658)"
   font-family="Bahnschrift,'sans-serif'"
   font-size="1.4081"
   id="text10"
   data-element-id="element-18-1761788125775"
   style="cursor:pointer;fill:#ffffff;fill-opacity:1">C.F.W. System</text>
</g>
<g
   clip-path="url(#clipId0)"
   fill="rgb(0,176,80)"
   stroke="rgb(0,176,80)"
   stroke-width="1"
   id="g48"
   data-element-id="element-19-1761788125775"
   style="cursor: pointer;">
<path
   d="M106.418,178.376 106.418,177.195 107.858,178.376 z"
   id="path10"
   data-element-id="element-20-1761788125775"
   style="cursor: pointer;" />
<path
   d="M107.858,178.376 106.418,177.195 107.858,177.195 z"
   id="path11"
   data-element-id="element-21-1761788125775"
   style="cursor: pointer;" />
<path
   d="M108.07,180.895 107.858,180.839 108.07,180.028 z"
   id="path12"
   data-element-id="element-22-1761788125775"
   style="cursor: pointer;" />
<path
   d="M107.858,178.376 107.858,177.195 108.07,178.376 z"
   id="path13"
   data-element-id="element-23-1761788125775"
   style="cursor: pointer;" />
<path
   d="M108.07,178.376 107.858,177.195 108.07,177.195 z"
   id="path14"
   data-element-id="element-24-1761788125775"
   style="cursor: pointer;" />
<path
   d="M108.07,175.542 107.858,174.732 108.07,174.675 z"
   id="path15"
   data-element-id="element-25-1761788125775"
   style="cursor: pointer;" />
<path
   d="M108.07,180.895 108.07,180.028 108.661,181.051 z"
   id="path16"
   data-element-id="element-26-1761788125775"
   style="cursor: pointer;" />
<path
   d="M108.661,181.051 108.07,180.028 108.661,179.684 z"
   id="path17"
   data-element-id="element-27-1761788125775"
   style="cursor: pointer;" />
<path
   d="M108.07,178.376 108.07,177.195 108.661,178.376 z"
   id="path18"
   data-element-id="element-28-1761788125775"
   style="cursor: pointer;" />
<path
   d="M108.661,178.376 108.07,177.195 108.661,177.195 z"
   id="path19"
   data-element-id="element-29-1761788125775"
   style="cursor: pointer;" />
<path
   d="M108.07,175.542 108.07,174.675 108.661,175.887 z"
   id="path20"
   data-element-id="element-30-1761788125775"
   style="cursor: pointer;" />
<path
   d="M108.661,175.887 108.07,174.675 108.661,174.519 z"
   id="path21"
   data-element-id="element-31-1761788125775"
   style="cursor: pointer;" />
<path
   d="M108.661,181.051 108.661,179.684 110.904,179.742 z"
   id="path22"
   data-element-id="element-32-1761788125775"
   style="cursor: pointer;" />
<path
   d="M110.904,179.742 108.661,179.684 110.904,178.376 z"
   id="path23"
   data-element-id="element-33-1761788125775"
   style="cursor: pointer;" />
<path
   d="M108.661,178.376 108.661,177.195 110.904,178.376 z"
   id="path24"
   data-element-id="element-34-1761788125775"
   style="cursor: pointer;" />
<path
   d="M110.904,178.376 108.661,177.195 110.904,177.195 z"
   id="path25"
   data-element-id="element-35-1761788125775"
   style="cursor: pointer;" />
<path
   d="M108.661,175.887 108.661,174.519 110.904,177.195 z"
   id="path26"
   data-element-id="element-36-1761788125775"
   style="cursor: pointer;" />
<path
   d="M110.904,177.195 108.661,174.519 110.904,175.828 z"
   id="path27"
   data-element-id="element-37-1761788125775"
   style="cursor: pointer;" />
<path
   d="M110.904,179.742 110.904,178.376 110.904,179.742 z"
   id="path28"
   data-element-id="element-38-1761788125775"
   style="cursor: pointer;" />
<path
   d="M110.904,179.742 110.904,178.376 110.904,178.376 z"
   id="path29"
   data-element-id="element-39-1761788125775"
   style="cursor: pointer;" />
<path
   d="M110.904,178.376 110.904,177.195 110.904,178.376 z"
   id="path30"
   data-element-id="element-40-1761788125775"
   style="cursor: pointer;" />
<path
   d="M110.904,178.376 110.904,177.195 110.904,177.195 z"
   id="path31"
   data-element-id="element-41-1761788125775"
   style="cursor: pointer;" />
<path
   d="M110.904,177.195 110.904,175.828 110.904,177.195 z"
   id="path32"
   data-element-id="element-42-1761788125775"
   style="cursor: pointer;" />
<path
   d="M110.904,177.195 110.904,175.828 110.904,175.828 z"
   id="path33"
   data-element-id="element-43-1761788125775"
   style="cursor: pointer;" />
<path
   d="M110.904,179.742 110.904,178.376 111.915,179.152 z"
   id="path34"
   data-element-id="element-44-1761788125775"
   style="cursor: pointer;" />
<path
   d="M111.915,179.152 110.904,178.376 111.915,178.376 z"
   id="path35"
   data-element-id="element-45-1761788125775"
   style="cursor: pointer;" />
<path
   d="M110.904,178.376 110.904,177.195 111.915,177.785 z"
   id="path36"
   data-element-id="element-46-1761788125775"
   style="cursor: pointer;" />
<path
   d="M110.904,177.195 110.904,175.828 111.915,177.195 z"
   id="path37"
   data-element-id="element-47-1761788125775"
   style="cursor: pointer;" />
<path
   d="M111.915,177.195 110.904,175.828 111.915,176.419 z"
   id="path38"
   data-element-id="element-48-1761788125775"
   style="cursor: pointer;" />
<path
   d="M111.915,179.152 111.915,178.376 112.792,178.64 z"
   id="path39"
   data-element-id="element-49-1761788125775"
   style="cursor: pointer;" />
<path
   d="M112.792,178.64 111.915,178.376 112.792,178.376 z"
   id="path40"
   data-element-id="element-50-1761788125775"
   style="cursor: pointer;" />
<path
   d="M112.792,178.297 111.915,177.785 112.792,177.274 z"
   id="path41"
   data-element-id="element-51-1761788125775"
   style="cursor: pointer;" />
<path
   d="M111.915,177.195 111.915,176.419 112.792,177.195 z"
   id="path42"
   data-element-id="element-52-1761788125775"
   style="cursor: pointer;" />
<path
   d="M112.792,177.195 111.915,176.419 112.792,176.931 z"
   id="path43"
   data-element-id="element-53-1761788125775"
   style="cursor: pointer;" />
<path
   d="M112.792,178.64 112.792,178.376 113.091,178.465 z"
   id="path44"
   data-element-id="element-54-1761788125775"
   style="cursor: pointer;" />
<path
   d="M113.091,178.465 112.792,178.376 113.091,178.376 z"
   id="path45"
   data-element-id="element-55-1761788125775"
   style="cursor: pointer;" />
<path
   d="M112.792,177.195 112.792,176.931 113.091,177.195 z"
   id="path46"
   data-element-id="element-56-1761788125775"
   style="cursor: pointer;" />
<path
   d="M113.091,177.195 112.792,176.931 113.091,177.105 z"
   id="path47"
   data-element-id="element-57-1761788125775"
   style="cursor: pointer;" />
<path
   d="M113.091,178.465 113.091,177.105 114.256,177.785 z"
   id="path48"
   data-element-id="element-58-1761788125775"
   style="cursor: pointer;" />
</g>
<g
   clip-path="url(#clipId0)"
   fill="none"
   stroke="rgb(255,255,255)"
   stroke-width="0.53"
   id="g49"
   data-element-id="element-59-1761788125775"
   style="cursor:pointer;stroke-width:0.7;stroke-dasharray:none">
<polyline
   points="757.975,347.12 712.265,347.12 "
   id="polyline48"
   data-element-id="element-60-1761788125775"
   style="cursor:pointer;stroke-width:0.7;stroke-dasharray:none" />
</g>
<g
   clip-path="url(#clipId0)"
   fill="none"
   stroke="rgb(255,255,255)"
   stroke-width="0.7"
   id="g50"
   data-element-id="element-61-1761788125775"
   style="cursor: pointer;">
<polyline
   points="757.692,355.053 711.982,355.053 "
   id="polyline49"
   data-element-id="element-62-1761788125775"
   style="cursor: pointer;" />
</g>
<g
   clip-path="url(#clipId0)"
   fill="rgb(64,64,64)"
   stroke="rgb(64,64,64)"
   stroke-width="0"
   id="g51"
   data-element-id="element-63-1761788125775"
   style="cursor: pointer;">
<text
   transform="matrix(5.8724 0 -0 5.90043 756.984 335.903)"
   font-family="Bahnschrift,'sans-serif'"
   font-size="1.4081"
   id="text50"
   data-element-id="element-64-1761788125775"
   style="cursor:pointer;stroke:#ffffff;stroke-opacity:1;fill:#ffffff;fill-opacity:1">10K 125A</text>
<text
   transform="matrix(5.89892,0,0,5.90043,756.943,373.562)"
   font-family="Bahnschrift, sans-serif"
   font-size="1.4081px"
   id="text51"
   data-element-id="element-65-1761788125775"
   style="fill:#ffffff;fill-opacity:1">10K 8A</text>
</g>
<!-- EP CON Controller Group -->
<g
   id="g52_epcon_wrapper">
  <!-- EP CON Symbol -->
  <g
   transform="translate(261.87, 249.656) scale(0.2335, 0.2483)"
   id="g59">
    <defs
   id="defs19">
      <linearGradient
   id="epConGrad_new"
   x1="0%"
   y1="0%"
   x2="100%"
   y2="100%">
        <stop
   offset="0%"
   stop-color="#2C5282"
   id="stop10" />
        <stop
   offset="50%"
   stop-color="#2B6CB0"
   id="stop11" />
        <stop
   offset="100%"
   stop-color="#1A365D"
   id="stop12" />
      </linearGradient>
      <linearGradient
   id="metalEP_new"
   x1="0%"
   y1="0%"
   x2="100%"
   y2="100%">
        <stop
   offset="0%"
   stop-color="#e8e8e8"
   id="stop13" />
        <stop
   offset="50%"
   stop-color="#c0c0c0"
   id="stop14" />
        <stop
   offset="100%"
   stop-color="#a0a0a0"
   id="stop15" />
      </linearGradient>
      <linearGradient
   id="signalGradIn_new"
   x1="0%"
   y1="0%"
   x2="100%"
   y2="100%">
        <stop
   offset="0%"
   stop-color="#DAA520"
   id="stop16" />
        <stop
   offset="50%"
   stop-color="#FFD700"
   id="stop17" />
        <stop
   offset="100%"
   stop-color="#B8860B"
   id="stop18" />
      </linearGradient>
      <linearGradient
   id="signalGradOut_new"
   x1="0%"
   y1="0%"
   x2="100%"
   y2="100%">
        <stop
   offset="0%"
   stop-color="#2B6CB0"
   id="stop19" />
        <stop
   offset="50%"
   stop-color="#3B82F6"
   id="stop20" />
        <stop
   offset="100%"
   stop-color="#1E40AF"
   id="stop21" />
      </linearGradient>
    </defs>
    
    <!-- Input Terminal -->
    <rect
   x="5"
   y="47"
   width="20"
   height="26"
   rx="2"
   fill="url(#metalEP_new)"
   stroke="#909090"
   stroke-width="1.5"
   id="rect19" />
    <circle
   cx="15"
   cy="55"
   r="3"
   fill="url(#signalGradIn_new)"
   id="circle19" />
    <circle
   cx="15"
   cy="65"
   r="3"
   fill="#606060"
   id="circle20" />
    <path
   d="M 5 55 L -5 55 M 5 65 L -5 65"
   stroke="#DAA520"
   stroke-width="2.5"
   stroke-linecap="round"
   stroke-dasharray="4,3"
   id="path49">
      <animate
   attributeName="stroke-dashoffset"
   values="0;-7;0"
   dur="0.8s"
   repeatCount="indefinite" />
    </path>
    <text
   x="15"
   y="45"
   text-anchor="middle"
   fill="#B8860B"
   font-size="8"
   font-weight="bold"
   id="text49">IN</text>
    
    <!-- Main Controller Box -->
    <rect
   x="30"
   y="25"
   width="140"
   height="70"
   rx="8"
   fill="url(#epConGrad_new)"
   stroke="#1A365D"
   stroke-width="3"
   id="rect49" />
    <rect
   x="35"
   y="30"
   width="130"
   height="15"
   fill="rgba(255,255,255,0.2)"
   rx="4"
   id="rect50" />
    <rect
   x="35"
   y="30"
   width="130"
   height="5"
   fill="rgba(255,255,255,0.3)"
   rx="2"
   id="rect51" />
    
    <!-- LEDs -->
    <circle
   cx="50"
   cy="60"
   r="5"
   fill="#00ff00"
   stroke="#006600"
   stroke-width="1.5"
   id="circle51">
      <animate
   attributeName="opacity"
   values="0.5;1;0.5"
   dur="1s"
   repeatCount="indefinite" />
    </circle>
    <text
   x="50"
   y="82"
   text-anchor="middle"
   fill="rgba(255,255,255,0.8)"
   font-size="7"
   id="text52">PWR</text>
    
    <circle
   cx="70"
   cy="60"
   r="5"
   fill="#ffff00"
   stroke="#666600"
   stroke-width="1.5"
   id="circle52">
      <animate
   attributeName="opacity"
   values="0.3;0.8;0.3"
   dur="1.5s"
   repeatCount="indefinite" />
    </circle>
    <text
   x="70"
   y="82"
   text-anchor="middle"
   fill="rgba(255,255,255,0.8)"
   font-size="7"
   id="text53">SIG</text>
    
    <circle
   cx="90"
   cy="60"
   r="5"
   fill="#ff6600"
   stroke="#663300"
   stroke-width="1.5"
   id="circle53">
      <animate
   attributeName="opacity"
   values="0.4;0.9;0.4"
   dur="1.2s"
   repeatCount="indefinite" />
    </circle>
    <text
   x="90"
   y="82"
   text-anchor="middle"
   fill="rgba(255,255,255,0.8)"
   font-size="7"
   id="text54">OUT</text>
    
    <!-- Display -->
    <rect
   x="115"
   y="50"
   width="45"
   height="25"
   rx="3"
   fill="#1a1a1a"
   stroke="#0f1e36"
   stroke-width="2"
   id="rect54" />
    <rect
   x="117"
   y="52"
   width="41"
   height="4"
   fill="rgba(0,255,136,0.3)"
   id="rect55" />
    <text
   x="137.5"
   y="67"
   text-anchor="middle"
   fill="#00ff88"
   font-size="11"
   font-family="monospace"
   font-weight="bold"
   id="text55">
      AUTO
      <animate
   attributeName="opacity"
   values="0.7;1;0.7"
   dur="2s"
   repeatCount="indefinite" />
    </text>
    <text
   x="137.5"
   y="73"
   text-anchor="middle"
   fill="#00ccff"
   font-size="7"
   font-family="monospace"
   id="text56">75°C</text>
    <text
   x="100"
   y="90"
   text-anchor="middle"
   fill="rgba(255,255,255,0.6)"
   font-size="7"
   id="text57">MODEL: TC-3000</text>
    
    <!-- Output Terminal -->
    <rect
   x="175"
   y="47"
   width="20"
   height="26"
   rx="2"
   fill="url(#metalEP_new)"
   stroke="#909090"
   stroke-width="1.5"
   id="rect57" />
    <circle
   cx="185"
   cy="55"
   r="3"
   fill="url(#signalGradOut_new)"
   id="circle57" />
    <circle
   cx="185"
   cy="65"
   r="3"
   fill="#606060"
   id="circle58" />
    <path
   d="M 195 55 L 205 55 M 195 65 L 205 65"
   stroke="#2B6CB0"
   stroke-width="2.5"
   stroke-linecap="round"
   stroke-dasharray="4,3"
   id="path58">
      <animate
   attributeName="stroke-dashoffset"
   values="0;-7;0"
   dur="0.8s"
   repeatCount="indefinite" />
    </path>
    <text
   x="185"
   y="45"
   text-anchor="middle"
   fill="#2B6CB0"
   font-size="8"
   font-weight="bold"
   id="text58">OUT</text>
    <path
   d="M 200 58 L 205 58 L 202 55 M 205 58 L 202 61"
   stroke="#2B6CB0"
   stroke-width="2"
   fill="none"
   stroke-linecap="round"
   id="path59">
      <animateTransform
   attributeName="transform"
   type="translate"
   values="0,0; 3,0; 0,0"
   dur="1s"
   repeatCount="indefinite" />
    </path>
    
    <!-- Internal Flow -->
    <line
   x1="25"
   y1="60"
   x2="175"
   y2="60"
   stroke="rgba(59,130,246,0.3)"
   stroke-width="2"
   stroke-dasharray="5,5"
   id="line59">
      <animate
   attributeName="stroke-dashoffset"
   values="0;-10;0"
   dur="1.5s"
   repeatCount="indefinite" />
    </line>
    <text
   x="100"
   y="63"
   text-anchor="middle"
   fill="rgba(255,255,255,0.3)"
   font-size="20"
   id="text59">⚡</text>
  </g>
  
  <!-- EP CON Label (above symbol) -->
  <text
   transform="scale(1.0004792,0.99952103)"
   font-family="Bahnschrift, sans-serif"
   font-size="11.0517px"
   fill="#ffffff"
   id="text60"
   x="272.21854"
   y="252.12076"
   style="font-size:8px;stroke-width:7.84865">EP CON</text>
</g>
<g
   clip-path="url(#clipId0)"
   fill="#262626"
   stroke="#262626"
   stroke-width="0"
   id="g65"
   data-element-id="element-73-1761788125775"
   transform="translate(8.729343,-3.3646715)"
   style="fill:#ffffff;fill-opacity:1">
<text
   transform="matrix(6.17555,0,0,6.16863,396.834,475.449)"
   font-family="Bahnschrift, sans-serif"
   font-size="1.4081px"
   id="text61"
   data-element-id="element-74-1761788125775"
   style="fill:#ffffff;fill-opacity:1">3</text>
<text
   transform="matrix(6.17094,0,0,6.16863,401.463,475.46)"
   font-family="Bahnschrift, sans-serif"
   font-size="1.4081px"
   id="text62"
   data-element-id="element-75-1761788125775"
   style="fill:#ffffff;fill-opacity:1">-</text>
<text
   transform="matrix(6.17935,0,0,6.16863,405.616,475.507)"
   font-family="Bahnschrift, sans-serif"
   font-size="1.4081px"
   id="text63"
   data-element-id="element-76-1761788125775"
   style="fill:#ffffff;fill-opacity:1">Way</text>
<text
   transform="scale(0.99931566,1.0006848)"
   font-family="Bahnschrift, sans-serif"
   font-size="8.6801px"
   id="text64"
   data-element-id="element-77-1761788125775"
   style="fill:#ffffff;fill-opacity:1;stroke-width:0"
   x="390.5683"
   y="485.51651">T/C Valve</text>

</g>
<g
   clip-path="url(#clipId0)"
   fill="none"
   stroke="rgb(0,0,0)"
   stroke-width="0.7"
   id="g61"
   data-element-id="element-79-1761788125775"
   style="cursor:pointer;stroke:#ffffff;stroke-opacity:1">
<polyline
   points="957.5,264.113 960.609,265.066 "
   id="polyline59"
   data-element-id="element-80-1761788125775"
   style="cursor:pointer;stroke:#ffffff;stroke-opacity:1" />
<polyline
   points="958.917,259.494 962.025,260.446 "
   id="polyline60"
   data-element-id="element-81-1761788125775"
   style="cursor:pointer;stroke:#ffffff;stroke-opacity:1" />
<polyline
   points="960.333,254.866 963.442,255.826 "
   id="polyline61"
   data-element-id="element-82-1761788125775"
   style="cursor:pointer;stroke:#ffffff;stroke-opacity:1" />
</g>
<polyline
   points="58.3465,217.168 152.694,217.168 152.694,476.884 "
   id="polyline62"
   data-element-id="element-84-1761788125775"
   style="fill:none;stroke:#00b050;stroke-width:1.5;stroke-dasharray:none" /><polyline
   points="391.067,452.612 375.484,452.612 375.484,178.163 "
   id="polyline63"
   data-element-id="element-85-1761788125775"
   style="fill:none;stroke:#00b050;stroke-width:1.5;stroke-dasharray:none"
   transform="translate(-4)" /><polyline
   points="58.3465,177.88 452.596,177.88 "
   id="polyline64"
   data-element-id="element-86-1761788125775"
   style="fill:none;stroke:#00b050;stroke-width:1.5;stroke-dasharray:none" /><polyline
   points="58.8187,437.407 135.222,437.407 135.222,220.945 "
   id="polyline65"
   data-element-id="element-87-1761788125775"
   style="fill:none;stroke:#00b050;stroke-width:1.5;stroke-dasharray:none" /><polyline
   points="202.654,563.015 365.567,563.015 365.567,388.864 202.654,388.864 202.654,563.015 "
   id="polyline66"
   data-element-id="element-88-1761788125775"
   style="fill:none;stroke:#00b050;stroke-width:1.5;stroke-dasharray:none" /><polyline
   points="393.333,459.884 393.333,476.317 58.8187,476.317 "
   id="polyline67"
   data-element-id="element-89-1761788125775"
   style="fill:none;stroke:#00b050;stroke-width:1.50948285;stroke-dasharray:none"
   transform="matrix(0.98721092,0,0,1.0002676,2.7688412,-0.12526531)" />



<g
   clip-path="url(#clipId0)"
   fill="rgb(255,255,255)"
   stroke="rgb(255,255,255)"
   stroke-width="0.25"
   fill-opacity="0.498039"
   stroke-opacity="0.498039"
   id="g70"
   data-element-id="element-93-1761788125775"
   style="cursor: pointer;">
<path
   d="M343.09,384.992 348.568,388.817 343.09,392.642 343.09,392.642 z"
   id="path69"
   data-element-id="element-94-1761788125775"
   style="cursor: pointer;" />
</g>

<g
   clip-path="url(#clipId0)"
   fill="rgb(255,255,255)"
   stroke="rgb(255,255,255)"
   stroke-width="0.25"
   fill-opacity="0.498039"
   stroke-opacity="0.498039"
   id="g72"
   data-element-id="element-97-1761788125775"
   style="cursor: pointer;">
<path
   d="M354.14,392.642 348.568,388.817 354.14,384.992 354.14,384.992 z"
   id="path71"
   data-element-id="element-98-1761788125775"
   style="cursor: pointer;" />
</g>
<g
   id="g152"
   transform="translate(0,4)"><g
     transform="matrix(0.32,0,0,0.26,330.66,367.5)"
     id="g7"><rect
       x="40"
       y="50"
       width="40"
       height="40"
       rx="4"
       fill="#d0d0d0"
       stroke="#707070"
       stroke-width="2.5"
       id="rect1" /><rect
       x="42"
       y="52"
       width="36"
       height="8"
       fill="rgba(255,255,255,0.4)"
       id="rect2"
       style="fill:#ffffff;fill-opacity:0.49803904" /><rect
       x="42"
       y="80"
       width="36"
       height="8"
       fill="rgba(0,0,0,0.15)"
       id="rect3"
       style="fill:#ffffff;fill-opacity:0.49803904" /><rect
       x="52"
       y="30"
       width="16"
       height="22"
       rx="2"
       fill="#d0d0d0"
       stroke="#707070"
       stroke-width="2"
       id="rect4" /><rect
       x="53"
       y="31"
       width="14"
       height="5"
       fill="rgba(255,255,255,0.4)"
       id="rect5"
       style="fill:#ffffff;fill-opacity:0.49803904" /><ellipse
       cx="60"
       cy="20"
       rx="20"
       ry="9"
       fill="#ff8c00"
       stroke="#cc5500"
       stroke-width="2.5"
       id="ellipse5" /><ellipse
       cx="60"
       cy="17"
       rx="18"
       ry="7"
       fill="#ff7f00"
       id="ellipse6" /><line
       x1="42"
       y1="17"
       x2="78"
       y2="17"
       stroke="#994400"
       stroke-width="3"
       id="line6" /><line
       x1="60"
       y1="9"
       x2="60"
       y2="25"
       stroke="#994400"
       stroke-width="3"
       id="line7" /><circle
       cx="60"
       cy="17"
       r="4"
       fill="#ff7f00"
       id="circle7" /><ellipse
       cx="60"
       cy="14"
       rx="10"
       ry="3"
       fill="rgba(255,255,255,0.5)"
       id="ellipse7"
       style="fill:#ffffff;fill-opacity:0.49803904" /><rect
       x="57"
       y="24"
       width="6"
       height="8"
       fill="#a8a8a8"
       stroke="#707070"
       stroke-width="1"
       id="rect7" /></g></g>
<g
   clip-path="url(#clipId0)"
   fill="none"
   stroke="rgb(0,0,0)"
   stroke-width="0.7"
   id="g75"
   data-element-id="element-101-1761788125775"
   style="cursor:pointer;stroke:#ffffff;stroke-opacity:1">
<polyline
   points="204.732,650.752 249.403,650.752 249.403,682.957 "
   id="polyline73"
   data-element-id="element-102-1761788125775"
   style="cursor:pointer;stroke:#ffffff;stroke-opacity:1" />
<polyline
   points="970.1,595.653 967.725,612.102 962.767,627.607 955.441,641.923 945.96,654.802 934.54,665.997 921.395,675.26 906.738,682.345 890.784,687.006 "
   id="polyline74"
   data-element-id="element-103-1761788125775"
   style="cursor:pointer;stroke:#ffffff;stroke-opacity:1" />
<polyline
   points="183.876,596.054 186.306,612.441 191.299,627.883 198.643,642.136 208.125,654.954 219.531,666.095 232.649,675.313 247.266,682.365 263.168,687.006 "
   id="polyline75"
   data-element-id="element-104-1761788125775"
   style="cursor:pointer;stroke:#ffffff;stroke-opacity:1" />
</g>
<g
   clip-path="url(#clipId0)"
   fill="none"
   stroke="rgb(0,176,240)"
   stroke-width="0.7"
   id="g76"
   data-element-id="element-105-1761788125775"
   style="cursor:pointer;stroke-width:1.5;stroke-dasharray:none">
<polyline
   points="227.304,650.563 227.304,623.836 935.243,623.836 "
   id="polyline76"
   data-element-id="element-106-1761788125775"
   style="cursor:pointer;stroke-width:1.5;stroke-dasharray:none" />
</g>

<path
   d="m 262.247,619.87 5.572,3.825 -5.572,3.825 v 0 z"
   id="path78"
   data-element-id="element-111-1761788125775"
   style="fill:#ffffff;fill-opacity:0.498039;stroke:#ffffff;stroke-width:0.25;stroke-opacity:0.498039" />



<path
   d="m 273.297,627.52 -5.572,-3.825 5.572,-3.825 v 0 z"
   id="path80"
   data-element-id="element-115-1761788125775"
   style="fill:#ffffff;fill-opacity:0.498039;stroke:#ffffff;stroke-width:0.25;stroke-opacity:0.498039" />



<g
   clip-path="url(#clipId0)"
   fill="none"
   stroke="rgb(0,176,240)"
   stroke-width="0.7"
   id="g85"
   data-element-id="element-118-1761788125775"
   style="cursor:pointer;stroke-width:1.5;stroke-dasharray:none">
<polyline
   points="519.886,249.939 627.267,249.939 627.267,394.719 "
   id="polyline82"
   data-element-id="element-119-1761788125775"
   style="cursor:pointer;stroke-width:1.5;stroke-dasharray:none" />
<polyline
   points="520.453,393.964 627.267,393.964 "
   id="polyline83"
   data-element-id="element-120-1761788125775"
   style="cursor:pointer;stroke-width:1.5;stroke-dasharray:none" />
<polyline
   points="519.792,322.943 622.922,322.943 "
   id="polyline84"
   data-element-id="element-121-1761788125775"
   style="cursor:pointer;stroke-width:1.5;stroke-dasharray:none" />
<polyline
   points="804.441,623.647 804.441,433.063 "
   id="polyline85"
   data-element-id="element-122-1761788125775"
   style="cursor:pointer;stroke-width:1.5;stroke-dasharray:none" />
</g><g
   id="g152-4-8"
   transform="translate(213.94,-136.23288)"><g
     transform="matrix(0.32,0,0,0.26,330.66,367.5)"
     id="g7-8-8"><rect
       x="40"
       y="50"
       width="40"
       height="40"
       rx="4"
       fill="#d0d0d0"
       stroke="#707070"
       stroke-width="2.5"
       id="rect1-8-2" /><rect
       x="42"
       y="52"
       width="36"
       height="8"
       fill="rgba(255,255,255,0.4)"
       id="rect2-2-91"
       style="fill:#ffffff;fill-opacity:0.498039" /><rect
       x="42"
       y="80"
       width="36"
       height="8"
       fill="rgba(0,0,0,0.15)"
       id="rect3-4-3"
       style="fill:#ffffff;fill-opacity:0.498039" /><rect
       x="52"
       y="30"
       width="16"
       height="22"
       rx="2"
       fill="#d0d0d0"
       stroke="#707070"
       stroke-width="2"
       id="rect4-5-5" /><rect
       x="53"
       y="31"
       width="14"
       height="5"
       fill="rgba(255,255,255,0.4)"
       id="rect5-5-98"
       style="fill:#ffffff;fill-opacity:0.498039" /><ellipse
       cx="60"
       cy="20"
       rx="20"
       ry="9"
       fill="#ff8c00"
       stroke="#cc5500"
       stroke-width="2.5"
       id="ellipse5-1-4" /><ellipse
       cx="60"
       cy="17"
       rx="18"
       ry="7"
       fill="#ff7f00"
       id="ellipse6-7-0" /><line
       x1="42"
       y1="17"
       x2="78"
       y2="17"
       stroke="#994400"
       stroke-width="3"
       id="line6-1-76" /><line
       x1="60"
       y1="9"
       x2="60"
       y2="25"
       stroke="#994400"
       stroke-width="3"
       id="line7-1-3" /><circle
       cx="60"
       cy="17"
       r="4"
       fill="#ff7f00"
       id="circle7-5-6" /><ellipse
       cx="60"
       cy="14"
       rx="10"
       ry="3"
       fill="rgba(255,255,255,0.5)"
       id="ellipse7-2-1"
       style="fill:#ffffff;fill-opacity:0.498039" /><rect
       x="57"
       y="24"
       width="6"
       height="8"
       fill="#a8a8a8"
       stroke="#707070"
       stroke-width="1"
       id="rect7-7-5" /></g></g><g
   id="g152-4-77"
   transform="translate(213.80838,-63.153697)"><g
     transform="matrix(0.32,0,0,0.26,330.66,367.5)"
     id="g7-8-7"><rect
       x="40"
       y="50"
       width="40"
       height="40"
       rx="4"
       fill="#d0d0d0"
       stroke="#707070"
       stroke-width="2.5"
       id="rect1-8-7" /><rect
       x="42"
       y="52"
       width="36"
       height="8"
       fill="rgba(255,255,255,0.4)"
       id="rect2-2-33"
       style="fill:#ffffff;fill-opacity:0.498039" /><rect
       x="42"
       y="80"
       width="36"
       height="8"
       fill="rgba(0,0,0,0.15)"
       id="rect3-4-5"
       style="fill:#ffffff;fill-opacity:0.498039" /><rect
       x="52"
       y="30"
       width="16"
       height="22"
       rx="2"
       fill="#d0d0d0"
       stroke="#707070"
       stroke-width="2"
       id="rect4-5-9" /><rect
       x="53"
       y="31"
       width="14"
       height="5"
       fill="rgba(255,255,255,0.4)"
       id="rect5-5-981"
       style="fill:#ffffff;fill-opacity:0.498039" /><ellipse
       cx="60"
       cy="20"
       rx="20"
       ry="9"
       fill="#ff8c00"
       stroke="#cc5500"
       stroke-width="2.5"
       id="ellipse5-1-82" /><ellipse
       cx="60"
       cy="17"
       rx="18"
       ry="7"
       fill="#ff7f00"
       id="ellipse6-7-6" /><line
       x1="42"
       y1="17"
       x2="78"
       y2="17"
       stroke="#994400"
       stroke-width="3"
       id="line6-1-6" /><line
       x1="60"
       y1="9"
       x2="60"
       y2="25"
       stroke="#994400"
       stroke-width="3"
       id="line7-1-0" /><circle
       cx="60"
       cy="17"
       r="4"
       fill="#ff7f00"
       id="circle7-5-38" /><ellipse
       cx="60"
       cy="14"
       rx="10"
       ry="3"
       fill="rgba(255,255,255,0.5)"
       id="ellipse7-2-0"
       style="fill:#ffffff;fill-opacity:0.498039" /><rect
       x="57"
       y="24"
       width="6"
       height="8"
       fill="#a8a8a8"
       stroke="#707070"
       stroke-width="1"
       id="rect7-7-1" /></g></g>
<text
   transform="scale(1.0019347,0.99806903)"
   font-family="Bahnschrift, sans-serif"
   font-size="9.45962px"
   id="text85"
   data-element-id="element-124-1761788125775"
   style="fill:#ffffff;stroke:#0000ff;stroke-width:0;fill-opacity:1"
   x="587.45532"
   y="476.07431">NO.3</text><text
   transform="scale(1.0016139,0.9983887)"
   font-family="Bahnschrift, sans-serif"
   font-size="9.45659px"
   id="text86"
   data-element-id="element-125-1761788125775"
   style="fill:#ffffff;stroke:#0000ff;stroke-width:0;fill-opacity:1"
   x="681.49719"
   y="475.92184">NO.2</text><text
   transform="scale(1.0017181,0.99828484)"
   font-family="Bahnschrift, sans-serif"
   font-size="9.45757px"
   id="text87"
   data-element-id="element-126-1761788125775"
   style="fill:#ffffff;stroke:#0000ff;stroke-width:0;fill-opacity:1"
   x="772.70532"
   y="475.95737">NO.1</text>


<g
   clip-path="url(#clipId0)"
   fill="none"
   stroke="#00b0f0"
   stroke-width="0.7"
   id="g89"
   data-element-id="element-127-1761788125775"
   transform="matrix(1.0297149,0,0,1.0057001,-17.845084,-0.83055197)"
   style="stroke-width:1.4740035;stroke-dasharray:none">
<polyline
   points="740.786,178.163 740.786,321.715 632.083,321.715 "
   id="polyline87"
   data-element-id="element-128-1761788125775"
   style="stroke-width:1.4740035;stroke-dasharray:none" />
<polyline
   points="521.491,177.785 855.912,177.785 855.912,232.845 "
   id="polyline88"
   data-element-id="element-129-1761788125775"
   style="stroke-width:1.4740035;stroke-dasharray:none" />
</g><g
   id="g152-4-0"
   transform="translate(214.62234,-207.55054)"><g
     transform="matrix(0.32,0,0,0.26,330.66,367.5)"
     id="g7-8-90"><rect
       x="40"
       y="50"
       width="40"
       height="40"
       rx="4"
       fill="#d0d0d0"
       stroke="#707070"
       stroke-width="2.5"
       id="rect1-8-0" /><rect
       x="42"
       y="52"
       width="36"
       height="8"
       fill="rgba(255,255,255,0.4)"
       id="rect2-2-6"
       style="fill:#ffffff;fill-opacity:0.498039" /><rect
       x="42"
       y="80"
       width="36"
       height="8"
       fill="rgba(0,0,0,0.15)"
       id="rect3-4-13"
       style="fill:#ffffff;fill-opacity:0.498039" /><rect
       x="52"
       y="30"
       width="16"
       height="22"
       rx="2"
       fill="#d0d0d0"
       stroke="#707070"
       stroke-width="2"
       id="rect4-5-8" /><rect
       x="53"
       y="31"
       width="14"
       height="5"
       fill="rgba(255,255,255,0.4)"
       id="rect5-5-9"
       style="fill:#ffffff;fill-opacity:0.498039" /><ellipse
       cx="60"
       cy="20"
       rx="20"
       ry="9"
       fill="#ff8c00"
       stroke="#cc5500"
       stroke-width="2.5"
       id="ellipse5-1-34" /><ellipse
       cx="60"
       cy="17"
       rx="18"
       ry="7"
       fill="#ff7f00"
       id="ellipse6-7-46" /><line
       x1="42"
       y1="17"
       x2="78"
       y2="17"
       stroke="#994400"
       stroke-width="3"
       id="line6-1-0" /><line
       x1="60"
       y1="9"
       x2="60"
       y2="25"
       stroke="#994400"
       stroke-width="3"
       id="line7-1-66" /><circle
       cx="60"
       cy="17"
       r="4"
       fill="#ff7f00"
       id="circle7-5-18" /><ellipse
       cx="60"
       cy="14"
       rx="10"
       ry="3"
       fill="rgba(255,255,255,0.5)"
       id="ellipse7-2-49"
       style="fill:#ffffff;fill-opacity:0.498039" /><rect
       x="57"
       y="24"
       width="6"
       height="8"
       fill="#a8a8a8"
       stroke="#707070"
       stroke-width="1"
       id="rect7-7-6" /></g></g>
<g
   clip-path="url(#clipId0)"
   fill="none"
   stroke="#00b0f0"
   stroke-width="0.7"
   id="g89_outlet"
   data-element-id="element-127-1761788125775"
   transform="matrix(1.0001562,0,0,1.0014022,-0.09612976,-0.87504031)"
   style="stroke-width:1.4988324;stroke-dasharray:none">
<polyline
   points="617.162,623.836 617.162,433.346 804.063,433.346 "
   id="polyline89"
   data-element-id="element-130-1761788125775"
   style="stroke-width:1.4988324;stroke-dasharray:none" />
</g>
<g
   clip-path="url(#clipId0)"
   fill="rgb(255,255,255)"
   stroke="rgb(255,255,255)"
   stroke-width="1"
   id="g102"
   data-element-id="element-131-1761788125775"
   style="cursor: pointer;">
<path
   d="M598.865,513.204 597.329,505.595 598.865,497.985 z"
   id="path89"
   data-element-id="element-132-1761788125775"
   style="cursor: pointer;" />
<path
   d="M598.865,513.204 598.865,497.985 603.054,519.418 z"
   id="path90"
   data-element-id="element-133-1761788125775"
   style="cursor: pointer;" />
<path
   d="M603.054,519.418 598.865,497.985 603.054,491.771 z"
   id="path91"
   data-element-id="element-134-1761788125775"
   style="cursor: pointer;" />
<path
   d="M603.054,519.418 603.054,491.771 609.268,523.608 z"
   id="path92"
   data-element-id="element-135-1761788125775"
   style="cursor: pointer;" />
<path
   d="M609.268,523.608 603.054,491.771 609.268,487.581 z"
   id="path93"
   data-element-id="element-136-1761788125775"
   style="cursor: pointer;" />
<path
   d="M609.268,523.608 609.268,487.581 616.878,525.144 z"
   id="path94"
   data-element-id="element-137-1761788125775"
   style="cursor: pointer;" />
<path
   d="M616.878,525.144 609.268,487.581 616.878,486.045 z"
   id="path95"
   data-element-id="element-138-1761788125775"
   style="cursor: pointer;" />
<path
   d="M616.878,525.144 616.878,486.045 624.488,523.608 z"
   id="path96"
   data-element-id="element-139-1761788125775"
   style="cursor: pointer;" />
<path
   d="M624.488,523.608 616.878,486.045 624.488,487.581 z"
   id="path97"
   data-element-id="element-140-1761788125775"
   style="cursor: pointer;" />
<path
   d="M624.488,523.608 624.488,487.581 630.702,519.418 z"
   id="path98"
   data-element-id="element-141-1761788125775"
   style="cursor: pointer;" />
<path
   d="M630.702,519.418 624.488,487.581 630.702,491.771 z"
   id="path99"
   data-element-id="element-142-1761788125775"
   style="cursor: pointer;" />
<path
   d="M630.702,519.418 630.702,491.771 634.892,513.204 z"
   id="path100"
   data-element-id="element-143-1761788125775"
   style="cursor: pointer;" />
<path
   d="M634.892,513.204 630.702,491.771 634.892,497.985 z"
   id="path101"
   data-element-id="element-144-1761788125775"
   style="cursor: pointer;" />
<path
   d="M634.892,513.204 634.892,497.985 636.428,505.595 z"
   id="path102"
   data-element-id="element-145-1761788125775"
   style="cursor: pointer;" />
</g>
<g
   id="SW_Pump_3"
   clip-path="url(#clipId0)"
   data-element-id="element-146-1761788125775"
   style="cursor: pointer;">
    <circle
   cx="616.88"
   cy="505.59"
   r="16.956521739130437"
   fill="#06b6d4"
   stroke="none"
   opacity="0.9"
   data-element-id="element-147-1761788125775"
   style="cursor: pointer;"
   id="circle1">
        <animate
   attributeName="opacity"
   values="0.8;1;0.8"
   dur="2s"
   repeatCount="indefinite" />
    </circle>
    <circle
   cx="616.88"
   cy="505.59"
   r="13.565217391304351"
   fill="#0891b2"
   stroke="none"
   data-element-id="element-148-1761788125775"
   style="cursor: pointer;"
   id="circle2" />
    <g
   class="impeller-SW_Pump_3"
   data-element-id="element-149-1761788125775"
   style="cursor: pointer;"
   id="g9">
        <circle
   cx="616.88"
   cy="505.59"
   r="10.682608695652176"
   fill="#0e7490"
   stroke="none"
   data-element-id="element-150-1761788125775"
   style="cursor: pointer;"
   class=""
   id="circle3" />
        <path
   d="M 616.88,494.9073913043478 L 619.2539130434783,499.8247826086956 L 616.88,505.59 Z"
   fill="#06b6d4"
   data-element-id="element-151-1761788125775"
   style="cursor: pointer;"
   id="path5" />
        <path
   d="M 627.5626086956522,505.59 L 621.6278260869565,507.9639130434782 L 616.88,505.59 Z"
   fill="#06b6d4"
   data-element-id="element-152-1761788125775"
   style="cursor: pointer;"
   id="path6" />
        <path
   d="M 616.88,516.2726086956521 L 614.5060869565217,510.3378260869565 L 616.88,505.59 Z"
   fill="#06b6d4"
   data-element-id="element-153-1761788125775"
   style="cursor: pointer;"
   id="path7" />
        <path
   d="M 606.1973913043478,505.59 L 612.1321739130435,503.21608695652174 L 616.88,505.59 Z"
   fill="#06b6d4"
   data-element-id="element-154-1761788125775"
   style="cursor: pointer;"
   id="path8" />
    </g>
    <circle
   cx="616.88"
   cy="505.59"
   r="3.900000000000001"
   fill="#fbbf24"
   data-element-id="element-155-1761788125775"
   style="cursor: pointer;"
   id="circle9">
        <animate
   attributeName="r"
   values="3.900000000000001;4.917391304347826;3.900000000000001"
   dur="1s"
   repeatCount="indefinite" />
    </circle>
    <circle
   cx="616.88"
   cy="505.59"
   r="1.8652173913043482"
   fill="#f59e0b"
   stroke="none"
   data-element-id="element-156-1761788125775"
   style="cursor: pointer;"
   id="circle10" />
    <rect
   x="612.88"
   y="522.55"
   width="8"
   height="12"
   fill="#00b0f0"
   stroke="none"
   rx="1"
   data-element-id="element-157-1761788125775"
   style="cursor: pointer;"
   id="rect10" />
    <path
   d="M 616.88,525.55 L 616.88,531.55"
   stroke="#ffffff"
   stroke-width="1"
   stroke-dasharray="2,2"
   data-element-id="element-158-1761788125775"
   style="cursor: pointer;"
   id="path75">
        <animate
   attributeName="stroke-dashoffset"
   values="0;4"
   dur="0.8s"
   repeatCount="indefinite" />
    </path>
    <rect
   x="612.88"
   y="476.63347826086954"
   width="8"
   height="12"
   fill="#00b0f0"
   stroke="none"
   rx="1"
   data-element-id="element-159-1761788125775"
   style="cursor: pointer;"
   id="rect75" />
    <path
   d="M 616.88,479.63347826086954 L 616.88,485.63347826086954"
   stroke="#ffffff"
   stroke-width="1"
   stroke-dasharray="2,2"
   data-element-id="element-160-1761788125775"
   style="cursor: pointer;"
   id="path50">
        <animate
   attributeName="stroke-dashoffset"
   values="0;4"
   dur="0.8s"
   repeatCount="indefinite" />
    </path>
</g>
<g
   clip-path="url(#clipId0)"
   fill="rgb(255,255,255)"
   stroke="rgb(255,255,255)"
   stroke-width="0.25"
   fill-opacity="0.498039"
   stroke-opacity="0.498039"
   id="g104"
   data-element-id="element-161-1761788125775"
   style="cursor: pointer;">

</g>
<g
   clip-path="url(#clipId0)"
   fill="none"
   stroke="rgb(0,0,0)"
   stroke-width="0.53"
   id="g105"
   data-element-id="element-163-1761788125775"
   style="cursor: pointer;">

</g>
<g
   clip-path="url(#clipId0)"
   fill="rgb(255,255,255)"
   stroke="rgb(255,255,255)"
   stroke-width="1"
   id="g118"
   data-element-id="element-165-1761788125775"
   style="cursor: pointer;">
<path
   d="M785.388,513.204 783.852,505.595 785.388,497.985 z"
   id="path105"
   data-element-id="element-166-1761788125775"
   style="cursor: pointer;" />
<path
   d="M785.388,513.204 785.388,497.985 789.578,519.418 z"
   id="path106"
   data-element-id="element-167-1761788125775"
   style="cursor: pointer;" />
<path
   d="M789.578,519.418 785.388,497.985 789.578,491.771 z"
   id="path107"
   data-element-id="element-168-1761788125775"
   style="cursor: pointer;" />
<path
   d="M789.578,519.418 789.578,491.771 795.792,523.608 z"
   id="path108"
   data-element-id="element-169-1761788125775"
   style="cursor: pointer;" />
<path
   d="M795.792,523.608 789.578,491.771 795.792,487.581 z"
   id="path109"
   data-element-id="element-170-1761788125775"
   style="cursor: pointer;" />
<path
   d="M795.792,523.608 795.792,487.581 803.402,525.144 z"
   id="path110"
   data-element-id="element-171-1761788125775"
   style="cursor: pointer;" />
<path
   d="M803.402,525.144 795.792,487.581 803.402,486.045 z"
   id="path111"
   data-element-id="element-172-1761788125775"
   style="cursor: pointer;" />
<path
   d="M803.402,525.144 803.402,486.045 811.012,523.608 z"
   id="path112"
   data-element-id="element-173-1761788125775"
   style="cursor: pointer;" />
<path
   d="M811.012,523.608 803.402,486.045 811.012,487.581 z"
   id="path113"
   data-element-id="element-174-1761788125775"
   style="cursor: pointer;" />
<path
   d="M811.012,523.608 811.012,487.581 817.226,519.418 z"
   id="path114"
   data-element-id="element-175-1761788125775"
   style="cursor: pointer;" />
<path
   d="M817.226,519.418 811.012,487.581 817.226,491.771 z"
   id="path115"
   data-element-id="element-176-1761788125775"
   style="cursor: pointer;" />
<path
   d="M817.226,519.418 817.226,491.771 821.415,513.204 z"
   id="path116"
   data-element-id="element-177-1761788125775"
   style="cursor: pointer;" />
<path
   d="M821.415,513.204 817.226,491.771 821.415,497.985 z"
   id="path117"
   data-element-id="element-178-1761788125775"
   style="cursor: pointer;" />
<path
   d="M821.415,513.204 821.415,497.985 822.951,505.595 z"
   id="path118"
   data-element-id="element-179-1761788125775"
   style="cursor: pointer;" />
</g>
<g
   id="SW_Pump_1"
   clip-path="url(#clipId0)"
   data-element-id="element-180-1761788125775"
   style="cursor: pointer;">
    <circle
   cx="803.4"
   cy="505.59"
   r="16.956521739130437"
   fill="#06b6d4"
   stroke="none"
   opacity="0.9"
   data-element-id="element-181-1761788125775"
   style="cursor: pointer;"
   id="circle50">
        <animate
   attributeName="opacity"
   values="0.8;1;0.8"
   dur="2s"
   repeatCount="indefinite" />
    </circle>
    <circle
   cx="803.4"
   cy="505.59"
   r="13.565217391304351"
   fill="#0891b2"
   stroke="none"
   data-element-id="element-182-1761788125775"
   style="cursor: pointer;"
   id="circle76" />
    <g
   class="impeller-SW_Pump_1"
   data-element-id="element-183-1761788125775"
   style="cursor: pointer;"
   id="g55">
        <circle
   cx="803.4"
   cy="505.59"
   r="10.682608695652176"
   fill="#0e7490"
   stroke="none"
   data-element-id="element-184-1761788125775"
   style="cursor: pointer;"
   id="circle77" />
        <path
   d="M 803.4,494.9073913043478 L 805.7739130434783,499.8247826086956 L 803.4,505.59 Z"
   fill="#06b6d4"
   data-element-id="element-185-1761788125775"
   style="cursor: pointer;"
   id="path52" />
        <path
   d="M 814.0826086956522,505.59 L 808.1478260869565,507.9639130434782 L 803.4,505.59 Z"
   fill="#06b6d4"
   data-element-id="element-186-1761788125775"
   style="cursor: pointer;"
   id="path53" />
        <path
   d="M 803.4,516.2726086956521 L 801.0260869565217,510.3378260869565 L 803.4,505.59 Z"
   fill="#06b6d4"
   data-element-id="element-187-1761788125775"
   style="cursor: pointer;"
   id="path54" />
        <path
   d="M 792.7173913043478,505.59 L 798.6521739130435,503.21608695652174 L 803.4,505.59 Z"
   fill="#06b6d4"
   data-element-id="element-188-1761788125775"
   style="cursor: pointer;"
   id="path55" />
    </g>
    <circle
   cx="803.4"
   cy="505.59"
   r="3.900000000000001"
   fill="#fbbf24"
   data-element-id="element-189-1761788125775"
   style="cursor: pointer;"
   id="circle55">
        <animate
   attributeName="r"
   values="3.900000000000001;4.917391304347826;3.900000000000001"
   dur="1s"
   repeatCount="indefinite" />
    </circle>
    <circle
   cx="803.4"
   cy="505.59"
   r="1.8652173913043482"
   fill="#f59e0b"
   stroke="none"
   data-element-id="element-190-1761788125775"
   style="cursor: pointer;"
   id="circle56" />
    <rect
   x="799.4"
   y="522.55"
   width="8"
   height="12"
   fill="#00b0f0"
   stroke="none"
   rx="1"
   data-element-id="element-191-1761788125775"
   style="cursor: pointer;"
   id="rect56" />
    <path
   d="M 803.4,525.55 L 803.4,531.55"
   stroke="#ffffff"
   stroke-width="1"
   stroke-dasharray="2,2"
   data-element-id="element-192-1761788125775"
   style="cursor: pointer;"
   id="path56">
        <animate
   attributeName="stroke-dashoffset"
   values="0;4"
   dur="0.8s"
   repeatCount="indefinite" />
    </path>
    <rect
   x="799.4"
   y="476.63347826086954"
   width="8"
   height="12"
   fill="#00b0f0"
   stroke="none"
   rx="1"
   data-element-id="element-193-1761788125775"
   style="cursor: pointer;"
   id="rect77" />
    <path
   d="M 803.4,479.63347826086954 L 803.4,485.63347826086954"
   stroke="#ffffff"
   stroke-width="1"
   stroke-dasharray="2,2"
   data-element-id="element-194-1761788125775"
   style="cursor: pointer;"
   id="path57">
        <animate
   attributeName="stroke-dashoffset"
   values="0;4"
   dur="0.8s"
   repeatCount="indefinite" />
    </path>
</g>
<g
   clip-path="url(#clipId0)"
   fill="rgb(255,255,255)"
   stroke="rgb(255,255,255)"
   stroke-width="0.25"
   fill-opacity="0.498039"
   stroke-opacity="0.498039"
   id="g120"
   data-element-id="element-195-1761788125775"
   style="cursor: pointer;">

</g>


<g
   clip-path="url(#clipId0)"
   fill="none"
   stroke="rgb(0,0,0)"
   stroke-width="0.53"
   id="g124"
   data-element-id="element-203-1761788125775"
   style="cursor: pointer;">
<polyline
   points="620.939,445.073 617.162,450.551 613.384,445.073 620.939,445.073 "
   id="polyline123"
   data-element-id="element-204-1761788125775"
   style="cursor: pointer;" />
</g>
<g
   clip-path="url(#clipId0)"
   fill="rgb(255,255,255)"
   stroke="rgb(255,255,255)"
   stroke-width="0.25"
   fill-opacity="0.498039"
   stroke-opacity="0.498039"
   id="g125"
   data-element-id="element-205-1761788125775"
   style="cursor: pointer;">
<path
   d="M613.384,456.123 617.162,450.551 620.939,456.123 620.939,456.123 z"
   id="path124"
   data-element-id="element-206-1761788125775"
   style="cursor: pointer;" />
</g>
<g
   id="g168"><g
     transform="translate(617.173,450.598) rotate(90) scale(0.3,0.27) translate(-60,-70)"
     id="g52">











<rect
   x="40"
   y="50"
   width="40"
   height="40"
   rx="4"
   fill="#d0d0d0"
   stroke="#707070"
   stroke-width="2.5"
   id="rect15" />
<rect
   x="42"
   y="52"
   width="36"
   height="8"
   fill="rgba(255,255,255,0.4)"
   id="rect16"
   style="fill:#ffffff;fill-opacity:0.49803904" />
<rect
   x="42"
   y="80"
   width="36"
   height="8"
   fill="rgba(0,0,0,0.15)"
   id="rect17"
   style="fill:#ffffff;fill-opacity:0.49803904" />
<rect
   x="52"
   y="30"
   width="16"
   height="22"
   rx="2"
   fill="#d0d0d0"
   stroke="#707070"
   stroke-width="2"
   id="rect18" />
<ellipse
   cx="60"
   cy="20"
   rx="20"
   ry="9"
   fill="#20B2AA"
   stroke="#006666"
   stroke-width="2.5"
   id="ellipse18" />
<ellipse
   cx="60"
   cy="17"
   rx="18"
   ry="7"
   fill="#008B8B"
   id="ellipse19" />
<line
   x1="42"
   y1="17"
   x2="78"
   y2="17"
   stroke="#004d4d"
   stroke-width="3"
   id="line19" />
<line
   x1="60"
   y1="9"
   x2="60"
   y2="25"
   stroke="#004d4d"
   stroke-width="3"
   id="line20" />
<circle
   cx="60"
   cy="17"
   r="4"
   fill="#008B8B"
   id="circle21" />
<ellipse
   cx="60"
   cy="14"
   rx="10"
   ry="3"
   fill="rgba(255,255,255,0.5)"
   id="ellipse21"
   style="fill:#ffffff;fill-opacity:0.49803904" />
<rect
   x="57"
   y="24"
   width="6"
   height="8"
   fill="#a8a8a8"
   stroke="#707070"
   stroke-width="1"
   id="rect21" />
<path
   d="M 70 70 L 50 70 M 55 64 L 50 70 L 55 76"
   stroke="#008B8B"
   stroke-width="3"
   stroke-linecap="round"
   stroke-linejoin="round"
   fill="none"
   id="path51">
<animate
   attributeName="opacity"
   values="0.5;1;0.5"
   dur="2s"
   repeatCount="indefinite" />
<animate
   attributeName="stroke-width"
   values="2.5;3.5;2.5"
   dur="2s"
   repeatCount="indefinite" />
</path></g></g>


<g
   clip-path="url(#clipId0)"
   fill="rgb(0,0,0)"
   stroke="rgb(0,0,0)"
   stroke-width="0.25"
   fill-opacity="0.498039"
   stroke-opacity="0.498039"
   id="g128"
   data-element-id="element-211-1761788125775"
   style="cursor: pointer;">
<path
   d="M808.266,445.057 804.441,450.535 800.616,445.057 800.616,445.057 z"
   id="path127"
   data-element-id="element-212-1761788125775"
   style="cursor: pointer;" />
</g>

<g
   clip-path="url(#clipId0)"
   fill="rgb(255,255,255)"
   stroke="rgb(255,255,255)"
   stroke-width="0.25"
   fill-opacity="0.498039"
   stroke-opacity="0.498039"
   id="g130"
   data-element-id="element-215-1761788125775"
   style="cursor: pointer;">
<path
   d="M800.616,456.107 804.441,450.535 808.266,456.107 808.266,456.107 z"
   id="path129"
   data-element-id="element-216-1761788125775"
   style="cursor: pointer;" />
</g>
<g
   id="g208"><g
     transform="translate(804.405,450.582) rotate(90) scale(0.3,0.27) translate(-60,-70)"
     id="g74">











<rect
   x="40"
   y="50"
   width="40"
   height="40"
   rx="4"
   fill="#d0d0d0"
   stroke="#707070"
   stroke-width="2.5"
   id="rect67" />
<rect
   x="42"
   y="52"
   width="36"
   height="8"
   fill="rgba(255,255,255,0.4)"
   id="rect68"
   style="fill:#ffffff;fill-opacity:0.49803904" />
<rect
   x="42"
   y="80"
   width="36"
   height="8"
   fill="rgba(0,0,0,0.15)"
   id="rect69"
   style="fill:#ffffff;fill-opacity:0.49803904" />
<rect
   x="52"
   y="30"
   width="16"
   height="22"
   rx="2"
   fill="#d0d0d0"
   stroke="#707070"
   stroke-width="2"
   id="rect70" />
<ellipse
   cx="60"
   cy="20"
   rx="20"
   ry="9"
   fill="#20B2AA"
   stroke="#006666"
   stroke-width="2.5"
   id="ellipse70" />
<ellipse
   cx="60"
   cy="17"
   rx="18"
   ry="7"
   fill="#008B8B"
   id="ellipse71" />
<line
   x1="42"
   y1="17"
   x2="78"
   y2="17"
   stroke="#004d4d"
   stroke-width="3"
   id="line71" />
<line
   x1="60"
   y1="9"
   x2="60"
   y2="25"
   stroke="#004d4d"
   stroke-width="3"
   id="line72" />
<circle
   cx="60"
   cy="17"
   r="4"
   fill="#008B8B"
   id="circle72" />
<ellipse
   cx="60"
   cy="14"
   rx="10"
   ry="3"
   fill="rgba(255,255,255,0.5)"
   id="ellipse72"
   style="fill:#ffffff;fill-opacity:0.49803904" />
<rect
   x="57"
   y="24"
   width="6"
   height="8"
   fill="#a8a8a8"
   stroke="#707070"
   stroke-width="1"
   id="rect72" />
<path
   d="M 70 70 L 50 70 M 55 64 L 50 70 L 55 76"
   stroke="#008B8B"
   stroke-width="3"
   stroke-linecap="round"
   stroke-linejoin="round"
   fill="none"
   id="path72">
<animate
   attributeName="opacity"
   values="0.5;1;0.5"
   dur="2s"
   repeatCount="indefinite" />
<animate
   attributeName="stroke-width"
   values="2.5;3.5;2.5"
   dur="2s"
   repeatCount="indefinite" />
</path></g></g>
   points=&quot;804.441,611.748 811.335,611.748 &quot;
   id=&quot;polyline131&quot;
   data-element-id=&quot;element-219-1761788125775&quot;
   style=&quot;fill:none;stroke:#000000;stroke-width:0.53&quot; /&gt;




<g
   clip-path="url(#clipId0)"
   fill="#ffffff"
   stroke="#ffffff"
   stroke-width="0.25"
   fill-opacity="0.498039"
   stroke-opacity="0.498039"
   id="g135"
   data-element-id="element-225-1761788125775"
   transform="translate(0,-4)">
<path
   d="m 800.946,617.225 3.778,-5.572 3.778,5.572 v 0 z"
   id="path134"
   data-element-id="element-226-1761788125775" />
</g>

<g
   clip-path="url(#clipId0)"
   fill="rgb(255,255,255)"
   stroke="rgb(255,255,255)"
   stroke-width="0.25"
   fill-opacity="0.498039"
   stroke-opacity="0.498039"
   id="g137"
   data-element-id="element-229-1761788125775"
   style="cursor:pointer;fill:#000000;fill-opacity:0.49803904">
<path
   d="M765.153,339.659 765.153,363.553 758.258,358.776 758.258,344.437 z"
   id="path136"
   data-element-id="element-230-1761788125775"
   style="cursor:pointer;fill:#000000;fill-opacity:0.49803904" />
</g>
<g
   clip-path="url(#clipId0)"
   fill="none"
   stroke="rgb(0,0,0)"
   stroke-width="0.53"
   id="g138"
   data-element-id="element-231-1761788125775"
   style="cursor:pointer;stroke:#ffffff;stroke-opacity:1">
<polyline
   points="765.153,339.659 765.153,363.553 758.258,358.776 758.258,344.437 765.153,339.659 "
   id="polyline137"
   data-element-id="element-232-1761788125775"
   style="cursor:pointer;stroke:#ffffff;stroke-opacity:1" />
</g>
<g
   clip-path="url(#clipId0)"
   fill="none"
   stroke="rgb(0,0,0)"
   stroke-width="0.7"
   id="g139"
   data-element-id="element-233-1761788125775"
   style="fill:none;fill-opacity:1;stroke:#ffffff;stroke-opacity:1"
   transform="matrix(0.99262426,0,0,1.0000766,5.6422872,-0.02881015)">
<polyline
   points="913.994,393.019 801.607,393.019 "
   id="polyline138"
   data-element-id="element-234-1761788125775"
   style="fill:none;fill-opacity:1;stroke:#ffffff;stroke-opacity:1" />
<polyline
   points="802.363,392.83 802.363,359.587 765.153,359.587 "
   id="polyline139"
   data-element-id="element-235-1761788125775"
   style="fill:none;fill-opacity:1;stroke:#ffffff;stroke-opacity:1" />
</g>

<g
   clip-path="url(#clipId0)"
   fill="rgb(255,255,255)"
   stroke="rgb(255,255,255)"
   stroke-width="0.25"
   fill-opacity="0.498039"
   stroke-opacity="0.498039"
   id="g142"
   data-element-id="element-239-1761788125775"
   style="cursor: pointer;">
<path
   d="M772.897,355.715 778.375,359.492 772.897,363.27 772.897,363.27 z"
   id="path141"
   data-element-id="element-240-1761788125775"
   style="cursor: pointer;" />
</g>

<g
   clip-path="url(#clipId0)"
   fill="rgb(255,255,255)"
   stroke="rgb(255,255,255)"
   stroke-width="0.25"
   fill-opacity="0.498039"
   stroke-opacity="0.498039"
   id="g144"
   data-element-id="element-243-1761788125775"
   style="cursor: pointer;">
<path
   d="M783.947,363.27 778.375,359.492 783.947,355.715 783.947,355.715 z"
   id="path143"
   data-element-id="element-244-1761788125775"
   style="cursor: pointer;" />
</g>

<g
   clip-path="url(#clipId0)"
   fill="none"
   stroke="rgb(255,0,0)"
   stroke-width="0.35"
   id="g147"
   data-element-id="element-247-1761788125775"
   style="cursor:pointer;stroke-width:0.7;stroke-dasharray:none">
<polyline
   points="802.316,329.318 802.316,345.373 "
   id="polyline145"
   data-element-id="element-248-1761788125775"
   style="cursor:pointer;stroke:#ffffff;stroke-opacity:1;stroke-width:0.7;stroke-dasharray:none" />
<polyline
   points="802.41,307.502 802.41,285.591 852.842,285.591 "
   id="polyline146"
   data-element-id="element-249-1761788125775"
   style="stroke:#ffffff;stroke-width:0.7;stroke-dasharray:none;stroke-opacity:1"
   transform="matrix(1.0020232,0,0,0.72824727,-1.6744554,83.615524)" />
<g
   transform="translate(802, 318)"
   id="g11"
   style="stroke-width:0.7;stroke-dasharray:none">
<circle
   cx="0"
   cy="0"
   r="12"
   fill="#ecf0f1"
   stroke="#95a5a6"
   stroke-width="1.5"
   id="circle74"
   style="stroke-width:0.7;stroke-dasharray:none" />
<rect
   x="-3"
   y="-8"
   width="6"
   height="10"
   fill="#e74c3c"
   stroke="#c0392b"
   stroke-width="0.8"
   rx="1"
   id="rect8"
   style="stroke-width:0.7;stroke-dasharray:none" />
<circle
   cx="0"
   cy="4"
   r="3.5"
   fill="#e74c3c"
   stroke="#c0392b"
   stroke-width="0.8"
   id="circle75"
   style="stroke-width:0.7;stroke-dasharray:none">
<animate
   attributeName="r"
   values="3.5;4.2;3.5"
   dur="2s"
   repeatCount="indefinite" />
</circle>
</g>
</g>
<text
   transform="scale(1.0018644,0.99813906)"
   font-family="Bahnschrift, sans-serif"
   font-size="11.067px"
   id="text147"
   data-element-id="element-252-1761788125775"
   style="fill:#ffffff;fill-opacity:1;stroke:#ff0000;stroke-width:0"
   x="825.03577"
   y="306.57053">TX1</text><text
   transform="scale(1.0012395,0.99876203)"
   font-family="Bahnschrift, sans-serif"
   font-size="11.0601px"
   id="text148"
   data-element-id="element-253-1761788125775"
   style="fill:#ffffff;fill-opacity:1;stroke:#ff0000;stroke-width:0"
   x="819.67999"
   y="287.7713">To ESS</text>


<g
   clip-path="url(#clipId0)"
   fill="none"
   stroke="rgb(0,0,0)"
   stroke-width="0.7"
   id="g149"
   data-element-id="element-254-1761788125775"
   style="cursor:pointer;stroke:#ffffff;stroke-opacity:1">
<polyline
   points="817.096,345.515 770.536,345.515 "
   id="polyline148"
   data-element-id="element-255-1761788125775"
   style="cursor:pointer;stroke:#ffffff;stroke-opacity:1" />
</g>
<g
   clip-path="url(#clipId0)"
   fill="rgb(255,255,255)"
   stroke="rgb(255,255,255)"
   stroke-width="0.25"
   fill-opacity="0.498039"
   stroke-opacity="0.498039"
   id="g150"
   data-element-id="element-256-1761788125775"
   style="cursor:pointer;fill:#000000;fill-opacity:0.49803904">
<path
   d="M765.341,348.726 770.064,348.726 770.064,342.304 765.341,342.304 z"
   id="path149"
   data-element-id="element-257-1761788125775"
   style="cursor:pointer;fill:#000000;fill-opacity:0.49803904" />
</g>
<g
   clip-path="url(#clipId0)"
   fill="none"
   stroke="rgb(0,0,0)"
   stroke-width="0.53"
   id="g151"
   data-element-id="element-258-1761788125775"
   style="cursor:pointer;stroke:#ffffff;stroke-opacity:1">
<polyline
   points="765.341,348.726 770.064,348.726 770.064,342.304 765.341,342.304 765.341,348.726 "
   id="polyline150"
   data-element-id="element-259-1761788125775"
   style="cursor:pointer;stroke:#ffffff;stroke-opacity:1" />
</g>

<g
   clip-path="url(#clipId0)"
   fill="none"
   stroke="rgb(255,0,0)"
   stroke-width="0.35"
   id="g165"
   data-element-id="element-275-1761788125775"
   style="cursor: pointer;">
<polyline
   points="817.143,345.137 818.026,340.782 820.434,337.225 824.006,334.825 828.382,333.946 832.757,334.825 836.33,337.225 838.737,340.782 839.62,345.137 838.737,349.492 836.33,353.05 832.757,355.449 828.382,356.328 824.006,355.449 820.434,353.05 818.026,349.492 817.143,345.137 "
   id="polyline164"
   data-element-id="element-276-1761788125775"
   style="cursor:pointer;stroke:#ffffff;stroke-opacity:1" />
</g>
<g
   clip-path="url(#clipId0)"
   fill="rgb(255,0,0)"
   stroke="rgb(255,0,0)"
   stroke-width="0"
   id="g166"
   data-element-id="element-277-1761788125775"
   style="cursor:pointer;fill:#ffffff;fill-opacity:1">
<text
   transform="matrix(7.90037 0 -0 7.84489 822.623 349.513)"
   font-family="Bahnschrift,'sans-serif'"
   font-size="1.4081"
   id="text165"
   data-element-id="element-278-1761788125775"
   style="cursor:pointer;fill:#ffffff;fill-opacity:1">TX</text>
</g>
<g
   clip-path="url(#clipId0)"
   fill="none"
   stroke="rgb(0,0,0)"
   stroke-width="0.7"
   id="g167"
   data-element-id="element-279-1761788125775"
   style="stroke:#ffffff;stroke-opacity:1"
   transform="matrix(0.9813836,0,0,1,15.633864,0)">
<polyline
   points="913.994,345.515 840.14,345.515 "
   id="polyline166"
   data-element-id="element-280-1761788125775"
   style="stroke:#ffffff;stroke-opacity:1" />
</g>

<g
   clip-path="url(#clipId0)"
   fill="none"
   stroke="rgb(0,0,0)"
   stroke-width="0.53"
   id="g181"
   data-element-id="element-296-1761788125775"
   style="cursor: pointer;">
<polyline
   points="912.955,345.184 914.227,338.878 917.698,333.73 922.846,330.26 929.152,328.987 935.458,330.26 940.606,333.73 944.076,338.878 945.349,345.184 944.076,351.49 940.606,356.638 935.458,360.109 929.152,361.381 922.846,360.109 917.698,356.638 914.227,351.49 912.955,345.184 "
   id="polyline180"
   data-element-id="element-297-1761788125775"
   style="cursor:pointer;stroke:#ffffff;stroke-opacity:1" />
</g>
<g
   clip-path="url(#clipId0)"
   fill="rgb(0,0,0)"
   stroke="rgb(0,0,0)"
   stroke-width="0"
   id="g182"
   data-element-id="element-298-1761788125775"
   style="cursor: pointer;">
<text
   transform="matrix(7.92838 0 -0 7.84489 924.928 342.902)"
   font-family="Bahnschrift,'sans-serif'"
   font-size="1.4081"
   id="text181"
   data-element-id="element-299-1761788125775"
   style="cursor:pointer;fill:#ffffff;fill-opacity:1">TI</text>
<text
   transform="matrix(7.84248 0 -0 7.84489 921.54 356.126)"
   font-family="Bahnschrift,'sans-serif'"
   font-size="1.4081"
   id="text182"
   data-element-id="element-300-1761788125775"
   style="cursor:pointer;fill:#ffffff;fill-opacity:1">MC</text>
</g>
<g
   clip-path="url(#clipId0)"
   fill="none"
   stroke="#000000"
   stroke-width="0.53"
   id="g183"
   data-element-id="element-301-1761788125775"
   transform="translate(0,0.4205839)">
<polyline
   points="912.955,345.137 945.388,345.137 "
   id="polyline182"
   data-element-id="element-302-1761788125775"
   style="fill:#ffffff;fill-opacity:1;stroke:#ffffff;stroke-opacity:1" />
</g>

<g
   clip-path="url(#clipId0)"
   fill="none"
   stroke="rgb(0,0,0)"
   stroke-width="0.53"
   id="g197"
   data-element-id="element-318-1761788125775"
   style="cursor: pointer;">
<polyline
   points="912.955,392.972 914.227,386.666 917.698,381.518 922.846,378.048 929.152,376.775 935.458,378.048 940.606,381.518 944.076,386.666 945.349,392.972 944.076,399.278 940.606,404.426 935.458,407.897 929.152,409.169 922.846,407.897 917.698,404.426 914.227,399.278 912.955,392.972 "
   id="polyline196"
   data-element-id="element-319-1761788125775"
   style="cursor:pointer;stroke:#ffffff;stroke-opacity:1" />
</g>
<g
   clip-path="url(#clipId0)"
   fill="rgb(0,0,0)"
   stroke="rgb(0,0,0)"
   stroke-width="0"
   id="g198"
   data-element-id="element-320-1761788125775"
   style="cursor: pointer;">
<text
   transform="matrix(7.86132 0 -0 7.84489 924.184 390.69)"
   font-family="Bahnschrift,'sans-serif'"
   font-size="1.4081"
   id="text197"
   data-element-id="element-321-1761788125775"
   style="cursor:pointer;fill:#ffffff;fill-opacity:1">PI</text>
<text
   transform="matrix(7.84248 0 -0 7.84489 921.54 403.93)"
   font-family="Bahnschrift,'sans-serif'"
   font-size="1.4081"
   id="text198"
   data-element-id="element-322-1761788125775"
   style="cursor:pointer;fill:#ffffff;fill-opacity:1">MC</text>
</g>
<g
   clip-path="url(#clipId0)"
   fill="none"
   stroke="rgb(0,0,0)"
   stroke-width="0.53"
   id="g199"
   data-element-id="element-323-1761788125775"
   style="cursor:pointer;fill:#ffffff;fill-opacity:1;stroke:#ffffff;stroke-opacity:1">
<polyline
   points="912.955,392.925 945.388,392.925 "
   id="polyline198"
   data-element-id="element-324-1761788125775"
   style="cursor:pointer;fill:#ffffff;fill-opacity:1;stroke:#ffffff;stroke-opacity:1" />
</g>
<g
   clip-path="url(#clipId0)"
   fill="none"
   stroke="rgb(0,0,0)"
   stroke-width="0.7"
   id="g200"
   data-element-id="element-325-1761788125775"
   style="stroke:#ffffff;stroke-opacity:1"
   transform="matrix(0.99923482,0,0,1.0709396,0.68701094,-27.881943)">
<polyline
   points="913.602,435.555 882.072,435.424 882.072,393.208 "
   id="polyline199"
   data-element-id="element-326-1761788125775"
   style="stroke:#ffffff;stroke-opacity:1" />
</g>
<g
   clip-path="url(#clipId0)"
   fill="none"
   stroke="rgb(255,0,0)"
   stroke-width="0.35"
   id="g201"
   data-element-id="element-327-1761788125775"
   style="cursor:pointer;stroke:#ffffff;stroke-opacity:1;stroke-width:0.7;stroke-dasharray:none">
<polyline
   points="926.602,448.599 926.602,463.804 967.023,463.804 "
   id="polyline200"
   data-element-id="element-328-1761788125775"
   style="cursor:pointer;stroke:#ffffff;stroke-opacity:1;stroke-width:0.7;stroke-dasharray:none" />
</g>
<g
   clip-path="url(#clipId0)"
   fill="rgb(255,0,0)"
   stroke="rgb(255,0,0)"
   stroke-width="0"
   id="g202"
   data-element-id="element-329-1761788125775"
   style="fill:#ffffff;fill-opacity:1;stroke:#ffffff;stroke-opacity:1"
   transform="translate(-10)">
<text
   transform="matrix(7.85705,0,0,7.8583,941.4,474.872)"
   font-family="Bahnschrift, sans-serif"
   font-size="1.4081px"
   id="text201"
   data-element-id="element-330-1761788125775"
   style="fill:#ffffff;fill-opacity:1;stroke:#ffffff;stroke-opacity:1">To ESS for</text>
<text
   transform="matrix(7.84192,0,0,7.84489,941.507,486.795)"
   font-family="Bahnschrift, sans-serif"
   font-size="1.4081px"
   id="text202"
   data-element-id="element-331-1761788125775"
   style="fill:#ffffff;fill-opacity:1;stroke:#ffffff;stroke-opacity:1">Interlock</text>
</g>
<g
   clip-path="url(#clipId0)"
   fill="none"
   stroke="#00b0f0"
   stroke-width="0.7"
   id="g203"
   data-element-id="element-332-1761788125775"
   transform="matrix(0.92293059,0,0,0.98187383,74.997985,5.7117205)"
   style="stroke-width:1.57896;stroke-dasharray:none">
<polyline
   points="955.454,258.549 855.581,231.791 "
   id="polyline202"
   data-element-id="element-333-1761788125775"
   style="stroke-width:1.57896;stroke-dasharray:none" />
</g>
<g
   clip-path="url(#clipId0)"
   fill="none"
   stroke="rgb(0,0,0)"
   stroke-width="0.53"
   id="g204"
   data-element-id="element-334-1761788125775"
   style="cursor:pointer;stroke:#ffffff;stroke-opacity:1">
<polyline
   points="934.291,252.749 936.636,245.91 "
   id="polyline203"
   data-element-id="element-335-1761788125775"
   style="cursor:pointer;stroke:#ffffff;stroke-opacity:1" />
<polyline
   points="932.237,244.438 940.988,247.444 "
   id="polyline204"
   data-element-id="element-336-1761788125775"
   style="cursor:pointer;stroke:#ffffff;stroke-opacity:1" />
</g>
<g
   clip-path="url(#clipId0)"
   fill="rgb(255,255,255)"
   stroke="rgb(255,255,255)"
   stroke-width="0.25"
   fill-opacity="0.498039"
   stroke-opacity="0.498039"
   id="g205"
   data-element-id="element-337-1761788125775"
   style="cursor: pointer;">
<path
   d="M929.238,246.689 934.346,252.662 926.649,254.236 926.649,254.236 z"
   id="path204"
   data-element-id="element-338-1761788125775"
   style="cursor: pointer;" />
</g>

<g
   clip-path="url(#clipId0)"
   fill="rgb(255,255,255)"
   stroke="rgb(255,255,255)"
   stroke-width="0.25"
   fill-opacity="0.498039"
   stroke-opacity="0.498039"
   id="g207"
   data-element-id="element-341-1761788125775"
   style="cursor: pointer;">
<path
   d="M939.462,258.636 934.346,252.662 942.051,251.088 942.051,251.088 z"
   id="path206"
   data-element-id="element-342-1761788125775"
   style="cursor: pointer;" />
</g>

<g
   clip-path="url(#clipId0)"
   fill="none"
   stroke="rgb(0,0,0)"
   stroke-width="0.7"
   id="g213"
   data-element-id="element-349-1761788125775"
   style="cursor:pointer;stroke:#ffffff;stroke-opacity:1">
<polyline
   points="944.333,259.966 946.962,252.253 "
   id="polyline212"
   data-element-id="element-350-1761788125775"
   style="cursor:pointer;stroke:#ffffff;stroke-opacity:1" />
<polyline
   points="946.875,260.832 949.504,253.119 "
   id="polyline213"
   data-element-id="element-351-1761788125775"
   style="cursor:pointer;stroke:#ffffff;stroke-opacity:1" />
</g>
<g
   clip-path="url(#clipId0)"
   fill="rgb(255,255,255)"
   stroke="rgb(255,255,255)"
   stroke-width="0.25"
   fill-opacity="0.498039"
   stroke-opacity="0.498039"
   id="g214"
   data-element-id="element-352-1761788125775"
   style="cursor:pointer;stroke:#ffffff;stroke-opacity:0.49803904">
<path
   d="M945.152,260.123 947.741,252.513 948.804,252.875 946.206,260.485 z"
   id="path213"
   data-element-id="element-353-1761788125775"
   style="cursor:pointer;stroke:#ffffff;stroke-opacity:0.49803904;fill:#000000;fill-opacity:1" />
</g>
<g
   clip-path="url(#clipId0)"
   fill="#0000ff"
   stroke="#0000ff"
   stroke-width="0"
   id="g215"
   data-element-id="element-354-1761788125775"
   transform="translate(-44,-34)"
   style="fill:#ffffff;fill-opacity:1">
<text
   transform="scale(1.0030892,0.99692032)"
   font-family="Bahnschrift, sans-serif"
   font-size="9.47052px"
   id="text214"
   data-element-id="element-355-1761788125775"
   x="285.66058"
   y="401.49847"
   style="stroke-width:0;fill:#ffffff;fill-opacity:1">NO.1</text>
</g>
<g
   clip-path="url(#clipId0)"
   fill="rgb(255,255,255)"
   stroke="rgb(255,255,255)"
   stroke-width="1"
   id="g228"
   data-element-id="element-356-1761788125775"
   style="cursor: pointer;">
<path
   d="M255.189,396.663 253.653,389.053 255.189,381.443 z"
   id="path215"
   data-element-id="element-357-1761788125775"
   style="cursor: pointer;" />
<path
   d="M255.189,396.663 255.189,381.443 259.379,402.877 z"
   id="path216"
   data-element-id="element-358-1761788125775"
   style="cursor: pointer;" />
<path
   d="M259.379,402.877 255.189,381.443 259.379,375.229 z"
   id="path217"
   data-element-id="element-359-1761788125775"
   style="cursor: pointer;" />
<path
   d="M259.379,402.877 259.379,375.229 265.593,407.066 z"
   id="path218"
   data-element-id="element-360-1761788125775"
   style="cursor: pointer;" />
<path
   d="M265.593,407.066 259.379,375.229 265.593,371.039 z"
   id="path219"
   data-element-id="element-361-1761788125775"
   style="cursor: pointer;" />
<path
   d="M265.593,407.066 265.593,371.039 273.203,408.602 z"
   id="path220"
   data-element-id="element-362-1761788125775"
   style="cursor: pointer;" />
<path
   d="M273.203,408.602 265.593,371.039 273.203,369.503 z"
   id="path221"
   data-element-id="element-363-1761788125775"
   style="cursor: pointer;" />
<path
   d="M273.203,408.602 273.203,369.503 280.813,407.066 z"
   id="path222"
   data-element-id="element-364-1761788125775"
   style="cursor: pointer;" />
<path
   d="M280.813,407.066 273.203,369.503 280.813,371.039 z"
   id="path223"
   data-element-id="element-365-1761788125775"
   style="cursor: pointer;" />
<path
   d="M280.813,407.066 280.813,371.039 287.027,402.877 z"
   id="path224"
   data-element-id="element-366-1761788125775"
   style="cursor: pointer;" />
<path
   d="M287.027,402.877 280.813,371.039 287.027,375.229 z"
   id="path225"
   data-element-id="element-367-1761788125775"
   style="cursor: pointer;" />
<path
   d="M287.027,402.877 287.027,375.229 291.216,396.663 z"
   id="path226"
   data-element-id="element-368-1761788125775"
   style="cursor: pointer;" />
<path
   d="M291.216,396.663 287.027,375.229 291.216,381.443 z"
   id="path227"
   data-element-id="element-369-1761788125775"
   style="cursor: pointer;" />
<path
   d="M291.216,396.663 291.216,381.443 292.752,389.053 z"
   id="path228"
   data-element-id="element-370-1761788125775"
   style="cursor: pointer;" />
</g>
<g
   id="LT_Pump_1"
   clip-path="url(#clipId0)"
   data-element-id="element-371-1761788125775"
   style="cursor: pointer;">
    <circle
   cx="273.2"
   cy="389.05"
   r="16.956521739130437"
   fill="#06b6d4"
   stroke="none"
   opacity="0.9"
   data-element-id="element-372-1761788125775"
   style="cursor: pointer;"
   id="circle78">
        <animate
   attributeName="opacity"
   values="0.8;1;0.8"
   dur="2s"
   repeatCount="indefinite" />
    </circle>
    <circle
   cx="273.2"
   cy="389.05"
   r="13.565217391304351"
   fill="#0891b2"
   stroke="none"
   data-element-id="element-373-1761788125775"
   style="cursor: pointer;"
   id="circle79" />
    <g
   class="impeller-LT_Pump_1"
   data-element-id="element-374-1761788125775"
   style="cursor: pointer;"
   id="g62">
        <circle
   cx="273.2"
   cy="389.05"
   r="10.682608695652176"
   fill="#0e7490"
   stroke="none"
   data-element-id="element-375-1761788125775"
   style="cursor: pointer;"
   id="circle80" />
        <path
   d="M 273.2,378.36739130434785 L 275.5739130434782,383.28478260869565 L 273.2,389.05 Z"
   fill="#06b6d4"
   data-element-id="element-376-1761788125775"
   style="cursor: pointer;"
   id="path79" />
        <path
   d="M 283.88260869565215,389.05 L 277.9478260869565,391.42391304347825 L 273.2,389.05 Z"
   fill="#06b6d4"
   data-element-id="element-377-1761788125775"
   style="cursor: pointer;"
   id="path60" />
        <path
   d="M 273.2,399.7326086956522 L 270.82608695652175,393.79782608695655 L 273.2,389.05 Z"
   fill="#06b6d4"
   data-element-id="element-378-1761788125775"
   style="cursor: pointer;"
   id="path61" />
        <path
   d="M 262.5173913043478,389.05 L 268.45217391304345,386.6760869565218 L 273.2,389.05 Z"
   fill="#06b6d4"
   data-element-id="element-379-1761788125775"
   style="cursor: pointer;"
   id="path62" />
    </g>
    <circle
   cx="273.2"
   cy="389.05"
   r="3.900000000000001"
   fill="#fbbf24"
   data-element-id="element-380-1761788125775"
   style="cursor: pointer;"
   id="circle81">
        <animate
   attributeName="r"
   values="3.900000000000001;4.917391304347826;3.900000000000001"
   dur="1s"
   repeatCount="indefinite" />
    </circle>
    <circle
   cx="273.2"
   cy="389.05"
   r="1.8652173913043482"
   fill="#f59e0b"
   stroke="none"
   data-element-id="element-381-1761788125775"
   style="cursor: pointer;"
   id="circle82" />
    <rect
   x="244.24347826086955"
   y="385.05"
   width="12"
   height="8"
   fill="#00b0f0"
   stroke="none"
   rx="1"
   data-element-id="element-382-1761788125775"
   style="cursor: pointer;"
   id="rect63" />
    <path
   d="M 247.24347826086955,389.05 L 253.24347826086955,389.05"
   stroke="#ffffff"
   stroke-width="1"
   stroke-dasharray="2,2"
   data-element-id="element-383-1761788125775"
   style="cursor: pointer;"
   id="path63">
        <animate
   attributeName="stroke-dashoffset"
   values="0;4"
   dur="0.8s"
   repeatCount="indefinite" />
    </path>
    <rect
   x="290.1565217391304"
   y="385.05"
   width="12"
   height="8"
   fill="#00b0f0"
   stroke="none"
   rx="1"
   data-element-id="element-384-1761788125775"
   style="cursor: pointer;"
   id="rect64" />
    <path
   d="M 293.1565217391304,389.05 L 299.1565217391304,389.05"
   stroke="#ffffff"
   stroke-width="1"
   stroke-dasharray="2,2"
   data-element-id="element-385-1761788125775"
   style="cursor: pointer;"
   id="path64">
        <animate
   attributeName="stroke-dashoffset"
   values="0;4"
   dur="0.8s"
   repeatCount="indefinite" />
    </path>
</g>
<g
   id="g1465"
   data-element-id="element-386-1761788125775"
   style="cursor: pointer;"><g
     clip-path="url(#clipId0)"
     fill="rgb(255,255,255)"
     stroke="rgb(255,255,255)"
     stroke-width="0.25"
     fill-opacity="0.498039"
     stroke-opacity="0.498039"
     id="g230"
     data-element-id="element-387-1761788125775"
     style="cursor: pointer;">

</g></g>
<g
   clip-path="url(#clipId0)"
   fill="none"
   stroke="rgb(0,0,0)"
   stroke-width="0.53"
   id="g231"
   data-element-id="element-389-1761788125775"
   style="cursor: pointer;">

</g>
<g
   clip-path="url(#clipId0)"
   fill="rgb(255,255,255)"
   stroke="rgb(255,255,255)"
   stroke-width="1"
   id="g244"
   data-element-id="element-391-1761788125775"
   style="cursor: pointer;">
<path
   d="M255.189,483.579 253.653,475.987 255.189,468.394 z"
   id="path231"
   data-element-id="element-392-1761788125775"
   style="cursor: pointer;" />
<path
   d="M255.189,483.579 255.189,468.394 259.379,489.778 z"
   id="path232"
   data-element-id="element-393-1761788125775"
   style="cursor: pointer;" />
<path
   d="M259.379,489.778 255.189,468.394 259.379,462.195 z"
   id="path233"
   data-element-id="element-394-1761788125775"
   style="cursor: pointer;" />
<path
   d="M259.379,489.778 259.379,462.195 265.593,493.957 z"
   id="path234"
   data-element-id="element-395-1761788125775"
   style="cursor: pointer;" />
<path
   d="M265.593,493.957 259.379,462.195 265.593,458.017 z"
   id="path235"
   data-element-id="element-396-1761788125775"
   style="cursor: pointer;" />
<path
   d="M265.593,493.957 265.593,458.017 273.203,495.489 z"
   id="path236"
   data-element-id="element-397-1761788125775"
   style="cursor: pointer;" />
<path
   d="M273.203,495.489 265.593,458.017 273.203,456.485 z"
   id="path237"
   data-element-id="element-398-1761788125775"
   style="cursor: pointer;" />
<path
   d="M273.203,495.489 273.203,456.485 280.813,493.957 z"
   id="path238"
   data-element-id="element-399-1761788125775"
   style="cursor: pointer;" />
<path
   d="M280.813,493.957 273.203,456.485 280.813,458.017 z"
   id="path239"
   data-element-id="element-400-1761788125775"
   style="cursor: pointer;"
   class="" />
<path
   d="M280.813,493.957 280.813,458.017 287.027,489.778 z"
   id="path240"
   data-element-id="element-401-1761788125775"
   style="cursor: pointer;"
   class="" />
<path
   d="M287.027,489.778 280.813,458.017 287.027,462.195 z"
   id="path241"
   data-element-id="element-402-1761788125775"
   style="cursor: pointer;"
   class="" />
<path
   d="M287.027,489.778 287.027,462.195 291.216,483.579 z"
   id="path242"
   data-element-id="element-403-1761788125775"
   style="cursor: pointer;" />
<path
   d="M291.216,483.579 287.027,462.195 291.216,468.394 z"
   id="path243"
   data-element-id="element-404-1761788125775"
   style="cursor: pointer;" />
<path
   d="M291.216,483.579 291.216,468.394 292.752,475.987 z"
   id="path244"
   data-element-id="element-405-1761788125775"
   style="cursor: pointer;" />
</g>
<g
   id="LT_Pump_2"
   clip-path="url(#clipId0)"
   data-element-id="element-406-1761788125775"
   style="cursor: pointer;">
    <circle
   cx="273.2"
   cy="475.99"
   r="16.956521739130437"
   fill="#06b6d4"
   stroke="none"
   opacity="0.9"
   data-element-id="element-407-1761788125775"
   style="cursor: pointer;"
   class=""
   id="circle83">
        <animate
   attributeName="opacity"
   values="0.8;1;0.8"
   dur="2s"
   repeatCount="indefinite" />
    </circle>
    <circle
   cx="273.2"
   cy="475.99"
   r="13.565217391304351"
   fill="#0891b2"
   stroke="none"
   data-element-id="element-408-1761788125775"
   style="cursor: pointer;"
   class=""
   id="circle84" />
    <g
   class="impeller-LT_Pump_2"
   data-element-id="element-409-1761788125775"
   style="cursor: pointer;"
   id="g86">
        <circle
   cx="273.2"
   cy="475.99"
   r="10.682608695652176"
   fill="#0e7490"
   stroke="none"
   data-element-id="element-410-1761788125775"
   style="cursor: pointer;"
   class=""
   id="circle85" />
        <path
   d="M 273.2,465.30739130434785 L 275.5739130434782,470.22478260869565 L 273.2,475.99 Z"
   fill="#06b6d4"
   data-element-id="element-411-1761788125775"
   style="cursor: pointer;"
   id="path66" />
        <path
   d="M 283.88260869565215,475.99 L 277.9478260869565,478.36391304347825 L 273.2,475.99 Z"
   fill="#06b6d4"
   data-element-id="element-412-1761788125775"
   style="cursor: pointer;"
   id="path67" />
        <path
   d="M 273.2,486.6726086956522 L 270.82608695652175,480.73782608695655 L 273.2,475.99 Z"
   fill="#06b6d4"
   data-element-id="element-413-1761788125775"
   style="cursor: pointer;"
   id="path68" />
        <path
   d="M 262.5173913043478,475.99 L 268.45217391304345,473.61608695652177 L 273.2,475.99 Z"
   fill="#06b6d4"
   data-element-id="element-414-1761788125775"
   style="cursor: pointer;"
   id="path70" />
    </g>
    <circle
   cx="273.2"
   cy="475.99"
   r="3.900000000000001"
   fill="#fbbf24"
   data-element-id="element-415-1761788125775"
   style="cursor: pointer;"
   id="circle86">
        <animate
   attributeName="r"
   values="3.900000000000001;4.917391304347826;3.900000000000001"
   dur="1s"
   repeatCount="indefinite" />
    </circle>
    <circle
   cx="273.2"
   cy="475.99"
   r="1.8652173913043482"
   fill="#f59e0b"
   stroke="none"
   data-element-id="element-416-1761788125775"
   style="cursor: pointer;"
   id="circle87" />
    <rect
   x="244.24347826086955"
   y="471.99"
   width="12"
   height="8"
   fill="#00b0f0"
   stroke="none"
   rx="1"
   data-element-id="element-417-1761788125775"
   style="cursor: pointer;"
   id="rect81" />
    <path
   d="M 247.24347826086955,475.99 L 253.24347826086955,475.99"
   stroke="#ffffff"
   stroke-width="1"
   stroke-dasharray="2,2"
   data-element-id="element-418-1761788125775"
   style="cursor: pointer;"
   id="path81">
        <animate
   attributeName="stroke-dashoffset"
   values="0;4"
   dur="0.8s"
   repeatCount="indefinite" />
    </path>
    <rect
   x="290.1565217391304"
   y="471.99"
   width="12"
   height="8"
   fill="#00b0f0"
   stroke="none"
   rx="1"
   data-element-id="element-419-1761788125775"
   style="cursor: pointer;"
   id="rect76" />
    <path
   d="M 293.1565217391304,475.99 L 299.1565217391304,475.99"
   stroke="#ffffff"
   stroke-width="1"
   stroke-dasharray="2,2"
   data-element-id="element-420-1761788125775"
   style="cursor: pointer;"
   id="path76">
        <animate
   attributeName="stroke-dashoffset"
   values="0;4"
   dur="0.8s"
   repeatCount="indefinite" />
    </path>
</g>
<g
   clip-path="url(#clipId0)"
   fill="rgb(255,255,255)"
   stroke="rgb(255,255,255)"
   stroke-width="0.25"
   fill-opacity="0.498039"
   stroke-opacity="0.498039"
   id="g246"
   data-element-id="element-421-1761788125775"
   style="cursor: pointer;">

</g>
<g
   clip-path="url(#clipId0)"
   fill="none"
   stroke="rgb(0,0,0)"
   stroke-width="0.53"
   id="g247"
   data-element-id="element-423-1761788125775"
   style="cursor: pointer;">

</g>
<g
   clip-path="url(#clipId0)"
   fill="rgb(255,255,255)"
   stroke="rgb(255,255,255)"
   stroke-width="1"
   id="g260"
   data-element-id="element-425-1761788125775"
   style="cursor: pointer;">
<path
   d="M255.189,570.531 253.653,562.921 255.189,555.311 z"
   id="path247"
   data-element-id="element-426-1761788125775"
   style="cursor: pointer;" />
<path
   d="M255.189,570.531 255.189,555.311 259.379,576.745 z"
   id="path248"
   data-element-id="element-427-1761788125775"
   style="cursor: pointer;" />
<path
   d="M259.379,576.745 255.189,555.311 259.379,549.097 z"
   id="path249"
   data-element-id="element-428-1761788125775"
   style="cursor: pointer;" />
<path
   d="M259.379,576.745 259.379,549.097 265.593,580.934 z"
   id="path250"
   data-element-id="element-429-1761788125775"
   style="cursor: pointer;" />
<path
   d="M265.593,580.934 259.379,549.097 265.593,544.908 z"
   id="path251"
   data-element-id="element-430-1761788125775"
   style="cursor: pointer;" />
<path
   d="M265.593,580.934 265.593,544.908 273.203,582.471 z"
   id="path252"
   data-element-id="element-431-1761788125775"
   style="cursor: pointer;" />
<path
   d="M273.203,582.471 265.593,544.908 273.203,543.371 z"
   id="path253"
   data-element-id="element-432-1761788125775"
   style="cursor: pointer;" />
<path
   d="M273.203,582.471 273.203,543.371 280.813,580.934 z"
   id="path254"
   data-element-id="element-433-1761788125775"
   style="cursor: pointer;" />
<path
   d="M280.813,580.934 273.203,543.371 280.813,544.908 z"
   id="path255"
   data-element-id="element-434-1761788125775"
   style="cursor: pointer;"
   class="" />
<path
   d="M280.813,580.934 280.813,544.908 287.027,576.745 z"
   id="path256"
   data-element-id="element-435-1761788125775"
   style="cursor: pointer;" />
<path
   d="M287.027,576.745 280.813,544.908 287.027,549.097 z"
   id="path257"
   data-element-id="element-436-1761788125775"
   style="cursor: pointer;" />
<path
   d="M287.027,576.745 287.027,549.097 291.216,570.531 z"
   id="path258"
   data-element-id="element-437-1761788125775"
   style="cursor: pointer;" />
<path
   d="M291.216,570.531 287.027,549.097 291.216,555.311 z"
   id="path259"
   data-element-id="element-438-1761788125775"
   style="cursor: pointer;" />
<path
   d="M291.216,570.531 291.216,555.311 292.752,562.921 z"
   id="path260"
   data-element-id="element-439-1761788125775"
   style="cursor: pointer;" />
</g>
<g
   id="LT_Pump_3"
   clip-path="url(#clipId0)"
   data-element-id="element-440-1761788125775"
   style="cursor: pointer;">
    <circle
   cx="273.2"
   cy="562.92"
   r="16.956521739130437"
   fill="#06b6d4"
   stroke="none"
   opacity="0.9"
   data-element-id="element-441-1761788125775"
   style="cursor: pointer;"
   id="circle88">
        <animate
   attributeName="opacity"
   values="0.8;1;0.8"
   dur="2s"
   repeatCount="indefinite" />
    </circle>
    <circle
   cx="273.2"
   cy="562.92"
   r="13.565217391304351"
   fill="#0891b2"
   stroke="none"
   data-element-id="element-442-1761788125775"
   style="cursor: pointer;"
   id="circle89" />
    <g
   class="impeller-LT_Pump_3"
   data-element-id="element-443-1761788125775"
   style="cursor: pointer;"
   id="g83">
        <circle
   cx="273.2"
   cy="562.92"
   r="10.682608695652176"
   fill="#0e7490"
   stroke="none"
   data-element-id="element-444-1761788125775"
   style="cursor: pointer;"
   id="circle90" />
        <path
   d="M 273.2,552.2373913043477 L 275.5739130434782,557.1547826086957 L 273.2,562.92 Z"
   fill="#06b6d4"
   data-element-id="element-445-1761788125775"
   style="cursor: pointer;"
   id="path84" />
        <path
   d="M 283.88260869565215,562.92 L 277.9478260869565,565.2939130434783 L 273.2,562.92 Z"
   fill="#06b6d4"
   data-element-id="element-446-1761788125775"
   style="cursor: pointer;"
   id="path85" />
        <path
   d="M 273.2,573.6026086956522 L 270.82608695652175,567.6678260869564 L 273.2,562.92 Z"
   fill="#06b6d4"
   data-element-id="element-447-1761788125775"
   style="cursor: pointer;"
   id="path82" />
        <path
   d="M 262.5173913043478,562.92 L 268.45217391304345,560.5460869565217 L 273.2,562.92 Z"
   fill="#06b6d4"
   data-element-id="element-448-1761788125775"
   style="cursor: pointer;"
   id="path83" />
    </g>
    <circle
   cx="273.2"
   cy="562.92"
   r="3.900000000000001"
   fill="#fbbf24"
   data-element-id="element-449-1761788125775"
   style="cursor: pointer;"
   id="circle91">
        <animate
   attributeName="r"
   values="3.900000000000001;4.917391304347826;3.900000000000001"
   dur="1s"
   repeatCount="indefinite" />
    </circle>
    <circle
   cx="273.2"
   cy="562.92"
   r="1.8652173913043482"
   fill="#f59e0b"
   stroke="none"
   data-element-id="element-450-1761788125775"
   style="cursor: pointer;"
   id="circle92" />
    <rect
   x="244.24347826086955"
   y="558.92"
   width="12"
   height="8"
   fill="#00b0f0"
   stroke="none"
   rx="1"
   data-element-id="element-451-1761788125775"
   style="cursor: pointer;"
   id="rect84" />
    <path
   d="M 247.24347826086955,562.92 L 253.24347826086955,562.92"
   stroke="#ffffff"
   stroke-width="1"
   stroke-dasharray="2,2"
   data-element-id="element-452-1761788125775"
   style="cursor: pointer;"
   id="path86">
        <animate
   attributeName="stroke-dashoffset"
   values="0;4"
   dur="0.8s"
   repeatCount="indefinite" />
    </path>
    <rect
   x="290.1565217391304"
   y="558.92"
   width="12"
   height="8"
   fill="#00b0f0"
   stroke="none"
   rx="1"
   data-element-id="element-453-1761788125775"
   style="cursor: pointer;"
   id="rect85" />
    <path
   d="M 293.1565217391304,562.92 L 299.1565217391304,562.92"
   stroke="#ffffff"
   stroke-width="1"
   stroke-dasharray="2,2"
   data-element-id="element-454-1761788125775"
   style="cursor: pointer;"
   id="path87">
        <animate
   attributeName="stroke-dashoffset"
   values="0;4"
   dur="0.8s"
   repeatCount="indefinite" />
    </path>
</g>
<g
   clip-path="url(#clipId0)"
   fill="rgb(255,255,255)"
   stroke="rgb(255,255,255)"
   stroke-width="0.25"
   fill-opacity="0.498039"
   stroke-opacity="0.498039"
   id="g262"
   data-element-id="element-455-1761788125775"
   style="cursor: pointer;">

</g>
<g
   clip-path="url(#clipId0)"
   fill="none"
   stroke="rgb(0,0,0)"
   stroke-width="0.53"
   id="g263"
   data-element-id="element-457-1761788125775"
   style="cursor: pointer;">

</g>
<g
   clip-path="url(#clipId0)"
   fill="none"
   stroke="rgb(255,0,0)"
   stroke-width="0.7"
   id="g264"
   data-element-id="element-459-1761788125775"
   style="cursor:pointer;stroke:#ffffff;stroke-opacity:1">
<polyline
   points="297.569,161.163 297.569,177.219 "
   id="polyline263"
   data-element-id="element-460-1761788125775"
   style="cursor:pointer;stroke:#ffffff;stroke-opacity:1" />
<polyline
   points="297.663,145.014 297.663,131.036 348.095,131.036 "
   id="polyline264"
   data-element-id="element-461-1761788125775"
   style="cursor:pointer;stroke:#ffffff;stroke-opacity:1" />
</g>

<g
   clip-path="url(#clipId0)"
   fill="none"
   stroke="#ff0000"
   stroke-width="0.53"
   id="g278"
   data-element-id="element-477-1761788125775"
   transform="translate(8,-6)">
<g
   transform="translate(288.347,159.06)"
   id="g12">
<circle
   cx="0"
   cy="0"
   r="12"
   fill="#ecf0f1"
   stroke="#95a5a6"
   stroke-width="1.5"
   id="circle93" />
<rect
   x="-3"
   y="-8"
   width="6"
   height="10"
   fill="#e74c3c"
   stroke="#c0392b"
   stroke-width="0.8"
   rx="1"
   id="rect12" />
<circle
   cx="0"
   cy="4"
   r="3.5"
   fill="#e74c3c"
   stroke="#c0392b"
   stroke-width="0.8"
   id="circle94">
<animate
   attributeName="r"
   values="3.5;4.2;3.5"
   dur="2s"
   repeatCount="indefinite" />
</circle>
</g>
</g>
<text
   transform="scale(1.0015139,0.99848839)"
   font-family="Bahnschrift, sans-serif"
   font-size="11.0631px"
   id="text278"
   data-element-id="element-480-1761788125775"
   style="fill:#ffffff;stroke:#ff0000;stroke-width:0;fill-opacity:1"
   x="317.86581"
   y="144.218">TX4</text><text
   transform="scale(1.0004556,0.9995446)"
   font-family="Bahnschrift, sans-serif"
   font-size="11.0514px"
   id="text279"
   data-element-id="element-481-1761788125775"
   style="fill:#ffffff;stroke:#ff0000;stroke-width:0;fill-opacity:1"
   x="349.81961"
   y="129.80711">To ESS for</text><text
   transform="scale(0.99914111,1.0008596)"
   font-family="Bahnschrift, sans-serif"
   font-size="11.0369px"
   id="text280"
   data-element-id="element-482-1761788125775"
   style="fill:#ffffff;stroke:#ff0000;stroke-width:0;fill-opacity:1"
   x="350.38995"
   y="142.8452">F.W Pump Control</text><text
   transform="scale(0.99914113,1.0008596)"
   font-family="Bahnschrift, sans-serif"
   font-size="11.0369px"
   id="text280-4"
   data-element-id="element-482-1761788125775"
   style="fill:#ffffff;fill-opacity:1;stroke:#ff0000;stroke-width:0"
   x="467.84015"
   y="475.98264">S.W Pump Control</text>


<g
   clip-path="url(#clipId0)"
   fill="none"
   stroke="rgb(0,176,80)"
   stroke-width="0.7"
   id="g281"
   data-element-id="element-483-1761788125775"
   style="cursor: pointer;">
<polyline
   points="408.822,250.128 452.596,250.128 "
   id="polyline280"
   data-element-id="element-484-1761788125775"
   style="cursor: pointer;" />
</g>

<g
   clip-path="url(#clipId0)"
   fill="rgb(255,255,255)"
   stroke="rgb(255,255,255)"
   stroke-width="0.25"
   fill-opacity="0.498039"
   stroke-opacity="0.498039"
   id="g283"
   data-element-id="element-488-1761788125775"
   style="cursor: pointer;">
<path
   d="M343.09,472.351 348.568,476.128 343.09,479.906 343.09,479.906 z"
   id="path282"
   data-element-id="element-489-1761788125775"
   style="cursor: pointer;" />
</g>

<g
   clip-path="url(#clipId0)"
   fill="rgb(255,255,255)"
   stroke="rgb(255,255,255)"
   stroke-width="0.25"
   fill-opacity="0.498039"
   stroke-opacity="0.498039"
   id="g285"
   data-element-id="element-492-1761788125775"
   style="cursor: pointer;">
<path
   d="M354.14,479.906 348.568,476.128 354.14,472.351 354.14,472.351 z"
   id="path284"
   data-element-id="element-493-1761788125775"
   style="cursor: pointer;" />
</g>



<g
   clip-path="url(#clipId0)"
   fill="rgb(255,255,255)"
   stroke="rgb(255,255,255)"
   stroke-width="0.25"
   fill-opacity="0.498039"
   stroke-opacity="0.498039"
   id="g288"
   data-element-id="element-498-1761788125775"
   style="cursor: pointer;">
<path
   d="M343.09,559.049 348.568,562.827 343.09,566.604 343.09,566.604 z"
   id="path287"
   data-element-id="element-499-1761788125775"
   style="cursor: pointer;" />
</g>



<g
   clip-path="url(#clipId0)"
   fill="rgb(255,255,255)"
   stroke="rgb(255,255,255)"
   stroke-width="0.25"
   fill-opacity="0.498039"
   stroke-opacity="0.498039"
   id="g290"
   data-element-id="element-502-1761788125775"
   style="cursor: pointer;">
<path
   d="M354.14,566.604 348.568,562.827 354.14,559.049 354.14,559.049 z"
   id="path289"
   data-element-id="element-503-1761788125775"
   style="cursor: pointer;" />
</g>
<g
   id="g153"
   transform="translate(0,4)"><g
     transform="matrix(0.32,0,0,0.26,330.66,454.81)"
     id="g25"><rect
       x="40"
       y="50"
       width="40"
       height="40"
       rx="4"
       fill="#d0d0d0"
       stroke="#707070"
       stroke-width="2.5"
       id="rect13" /><rect
       x="42"
       y="52"
       width="36"
       height="8"
       fill="rgba(255,255,255,0.4)"
       id="rect14"
       style="fill:#ffffff;fill-opacity:0.49803904" /><rect
       x="42"
       y="80"
       width="36"
       height="8"
       fill="rgba(0,0,0,0.15)"
       id="rect20"
       style="fill:#ffffff;fill-opacity:0.49803904" /><rect
       x="52"
       y="30"
       width="16"
       height="22"
       rx="2"
       fill="#d0d0d0"
       stroke="#707070"
       stroke-width="2"
       id="rect22" /><rect
       x="53"
       y="31"
       width="14"
       height="5"
       fill="rgba(255,255,255,0.4)"
       id="rect23"
       style="fill:#ffffff;fill-opacity:0.49803904" /><ellipse
       cx="60"
       cy="20"
       rx="20"
       ry="9"
       fill="#ff8c00"
       stroke="#cc5500"
       stroke-width="2.5"
       id="ellipse23" /><ellipse
       cx="60"
       cy="17"
       rx="18"
       ry="7"
       fill="#ff7f00"
       id="ellipse24" /><line
       x1="42"
       y1="17"
       x2="78"
       y2="17"
       stroke="#994400"
       stroke-width="3"
       id="line24" /><line
       x1="60"
       y1="9"
       x2="60"
       y2="25"
       stroke="#994400"
       stroke-width="3"
       id="line25" /><circle
       cx="60"
       cy="17"
       r="4"
       fill="#ff7f00"
       id="circle25" /><ellipse
       cx="60"
       cy="14"
       rx="10"
       ry="3"
       fill="rgba(255,255,255,0.5)"
       id="ellipse25"
       style="fill:#ffffff;fill-opacity:0.49803904" /><rect
       x="57"
       y="24"
       width="6"
       height="8"
       fill="#a8a8a8"
       stroke="#707070"
       stroke-width="1"
       id="rect25" /></g></g><g
   id="g155"
   transform="translate(0,4)"><g
     transform="matrix(0.32,0,0,0.26,330.66,541.56)"
     id="g32"><rect
       x="40"
       y="50"
       width="40"
       height="40"
       rx="4"
       fill="#d0d0d0"
       stroke="#707070"
       stroke-width="2.5"
       id="rect26" /><rect
       x="42"
       y="52"
       width="36"
       height="8"
       fill="rgba(255,255,255,0.4)"
       id="rect27"
       style="fill:#ffffff;fill-opacity:0.49803904" /><rect
       x="42"
       y="80"
       width="36"
       height="8"
       fill="rgba(0,0,0,0.15)"
       id="rect28"
       style="fill:#ffffff;fill-opacity:0.49803904" /><rect
       x="52"
       y="30"
       width="16"
       height="22"
       rx="2"
       fill="#d0d0d0"
       stroke="#707070"
       stroke-width="2"
       id="rect29" /><rect
       x="53"
       y="31"
       width="14"
       height="5"
       fill="rgba(255,255,255,0.4)"
       id="rect30"
       style="fill:#ffffff;fill-opacity:0.49803904" /><ellipse
       cx="60"
       cy="20"
       rx="20"
       ry="9"
       fill="#ff8c00"
       stroke="#cc5500"
       stroke-width="2.5"
       id="ellipse30" /><ellipse
       cx="60"
       cy="17"
       rx="18"
       ry="7"
       fill="#ff7f00"
       id="ellipse31" /><line
       x1="42"
       y1="17"
       x2="78"
       y2="17"
       stroke="#994400"
       stroke-width="3"
       id="line31" /><line
       x1="60"
       y1="9"
       x2="60"
       y2="25"
       stroke="#994400"
       stroke-width="3"
       id="line32" /><circle
       cx="60"
       cy="17"
       r="4"
       fill="#ff7f00"
       id="circle32" /><ellipse
       cx="60"
       cy="14"
       rx="10"
       ry="3"
       fill="rgba(255,255,255,0.5)"
       id="ellipse32"
       style="fill:#ffffff;fill-opacity:0.49803904" /><rect
       x="57"
       y="24"
       width="6"
       height="8"
       fill="#a8a8a8"
       stroke="#707070"
       stroke-width="1"
       id="rect32" /></g></g>


<g
   clip-path="url(#clipId0)"
   fill="rgb(0,0,0)"
   stroke="rgb(0,0,0)"
   stroke-width="0.25"
   fill-opacity="0.498039"
   stroke-opacity="0.498039"
   id="g293"
   data-element-id="element-508-1761788125775"
   style="cursor: pointer;">
<path
   d="M218.237,384.992 223.809,388.817 218.237,392.642 218.237,392.642 z"
   id="path292"
   data-element-id="element-509-1761788125775"
   style="cursor: pointer;" />
</g>



<g
   clip-path="url(#clipId0)"
   fill="rgb(255,255,255)"
   stroke="rgb(255,255,255)"
   stroke-width="0.25"
   fill-opacity="0.498039"
   stroke-opacity="0.498039"
   id="g295"
   data-element-id="element-512-1761788125775"
   style="cursor: pointer;">
<path
   d="M229.287,392.642 223.809,388.817 229.287,384.992 229.287,384.992 z"
   id="path294"
   data-element-id="element-513-1761788125775"
   style="cursor: pointer;" />
</g>
<g
   id="g146"
   transform="translate(0,2)"><g
     transform="matrix(0.32,0,0,0.26,204.562,369.153)"
     id="g119">











<rect
   x="40"
   y="50"
   width="40"
   height="40"
   rx="4"
   fill="#d0d0d0"
   stroke="#707070"
   stroke-width="2.5"
   id="rect104" />
<rect
   x="42"
   y="52"
   width="36"
   height="8"
   fill="rgba(255,255,255,0.4)"
   id="rect105"
   style="fill:#ffffff;fill-opacity:0.49803904" />
<rect
   x="42"
   y="80"
   width="36"
   height="8"
   fill="rgba(0,0,0,0.15)"
   id="rect106"
   style="fill:#ffffff;fill-opacity:0.49803904" />
<rect
   x="52"
   y="30"
   width="16"
   height="22"
   rx="2"
   fill="#d0d0d0"
   stroke="#707070"
   stroke-width="2"
   id="rect107" />
<ellipse
   cx="60"
   cy="20"
   rx="20"
   ry="9"
   fill="#20b2aa"
   stroke="#006666"
   stroke-width="2.5"
   id="ellipse107" />
<ellipse
   cx="60"
   cy="17"
   rx="18"
   ry="7"
   fill="#008b8b"
   id="ellipse108" />
<line
   x1="42"
   y1="17"
   x2="78"
   y2="17"
   stroke="#004d4d"
   stroke-width="3"
   id="line108" />
<line
   x1="60"
   y1="9"
   x2="60"
   y2="25"
   stroke="#004d4d"
   stroke-width="3"
   id="line109" />
<circle
   cx="60"
   cy="17"
   r="4"
   fill="#008b8b"
   id="circle109" />
<ellipse
   cx="60"
   cy="14"
   rx="10"
   ry="3"
   fill="rgba(255,255,255,0.5)"
   id="ellipse109"
   style="fill:#ffffff;fill-opacity:0.49803904" />
<rect
   x="57"
   y="24"
   width="6"
   height="8"
   fill="#a8a8a8"
   stroke="#707070"
   stroke-width="1"
   id="rect109" />
<path
   d="M 70,70 H 50 m 5,-6 -5,6 5,6"
   stroke="#008b8b"
   stroke-width="3"
   stroke-linecap="round"
   stroke-linejoin="round"
   fill="none"
   id="path119">
<animate
   attributeName="opacity"
   values="0.5;1;0.5"
   dur="2s"
   repeatCount="indefinite" />
<animate
   attributeName="stroke-width"
   values="2.5;3.5;2.5"
   dur="2s"
   repeatCount="indefinite" />
</path></g></g>


<g
   clip-path="url(#clipId0)"
   fill="rgb(0,0,0)"
   stroke="rgb(0,0,0)"
   stroke-width="0.25"
   fill-opacity="0.498039"
   stroke-opacity="0.498039"
   id="g298"
   data-element-id="element-518-1761788125775"
   style="cursor: pointer;">
<path
   d="M218.237,472.351 223.809,476.128 218.237,479.906 218.237,479.906 z"
   id="path297"
   data-element-id="element-519-1761788125775"
   style="cursor: pointer;" />
</g>

<g
   clip-path="url(#clipId0)"
   fill="rgb(255,255,255)"
   stroke="rgb(255,255,255)"
   stroke-width="0.25"
   fill-opacity="0.498039"
   stroke-opacity="0.498039"
   id="g300"
   data-element-id="element-522-1761788125775"
   style="cursor: pointer;">
<path
   d="M229.287,479.906 223.809,476.128 229.287,472.351 229.287,472.351 z"
   id="path299"
   data-element-id="element-523-1761788125775"
   style="cursor: pointer;" />
</g>
<g
   id="g148"
   transform="translate(0,2)"><g
     transform="matrix(0.32,0,0,0.26,204.562,456.418)"
     id="g140">











<rect
   x="40"
   y="50"
   width="40"
   height="40"
   rx="4"
   fill="#d0d0d0"
   stroke="#707070"
   stroke-width="2.5"
   id="rect128" />
<rect
   x="42"
   y="52"
   width="36"
   height="8"
   fill="rgba(255,255,255,0.4)"
   id="rect129"
   style="fill:#ffffff;fill-opacity:0.49803904" />
<rect
   x="42"
   y="80"
   width="36"
   height="8"
   fill="rgba(0,0,0,0.15)"
   id="rect130"
   style="fill:#ffffff;fill-opacity:0.49803904" />
<rect
   x="52"
   y="30"
   width="16"
   height="22"
   rx="2"
   fill="#d0d0d0"
   stroke="#707070"
   stroke-width="2"
   id="rect131" />
<ellipse
   cx="60"
   cy="20"
   rx="20"
   ry="9"
   fill="#20b2aa"
   stroke="#006666"
   stroke-width="2.5"
   id="ellipse131" />
<ellipse
   cx="60"
   cy="17"
   rx="18"
   ry="7"
   fill="#008b8b"
   id="ellipse132" />
<line
   x1="42"
   y1="17"
   x2="78"
   y2="17"
   stroke="#004d4d"
   stroke-width="3"
   id="line132" />
<line
   x1="60"
   y1="9"
   x2="60"
   y2="25"
   stroke="#004d4d"
   stroke-width="3"
   id="line133" />
<circle
   cx="60"
   cy="17"
   r="4"
   fill="#008b8b"
   id="circle133" />
<ellipse
   cx="60"
   cy="14"
   rx="10"
   ry="3"
   fill="rgba(255,255,255,0.5)"
   id="ellipse133"
   style="fill:#ffffff;fill-opacity:0.49803904" />
<rect
   x="57"
   y="24"
   width="6"
   height="8"
   fill="#a8a8a8"
   stroke="#707070"
   stroke-width="1"
   id="rect133" />
<path
   d="M 70,70 H 50 m 5,-6 -5,6 5,6"
   stroke="#008b8b"
   stroke-width="3"
   stroke-linecap="round"
   stroke-linejoin="round"
   fill="none"
   id="path133">
<animate
   attributeName="opacity"
   values="0.5;1;0.5"
   dur="2s"
   repeatCount="indefinite" />
<animate
   attributeName="stroke-width"
   values="2.5;3.5;2.5"
   dur="2s"
   repeatCount="indefinite" />
</path></g></g>


<g
   clip-path="url(#clipId0)"
   fill="rgb(0,0,0)"
   stroke="rgb(0,0,0)"
   stroke-width="0.25"
   fill-opacity="0.498039"
   stroke-opacity="0.498039"
   id="g303"
   data-element-id="element-528-1761788125775"
   style="cursor: pointer;">
<path
   d="M218.237,559.049 223.809,562.827 218.237,566.604 218.237,566.604 z"
   id="path302"
   data-element-id="element-529-1761788125775"
   style="cursor: pointer;" />
</g>

<g
   clip-path="url(#clipId0)"
   fill="rgb(255,255,255)"
   stroke="rgb(255,255,255)"
   stroke-width="0.25"
   fill-opacity="0.498039"
   stroke-opacity="0.498039"
   id="g305"
   data-element-id="element-532-1761788125775"
   style="cursor: pointer;">
<path
   d="M229.287,566.604 223.809,562.827 229.287,559.049 229.287,559.049 z"
   id="path304"
   data-element-id="element-533-1761788125775"
   style="cursor: pointer;" />
</g>
<g
   id="g170"
   transform="translate(0,2)"><g
     transform="matrix(0.32,0,0,0.26,204.562,543.163)"
     id="g169">











<rect
   x="40"
   y="50"
   width="40"
   height="40"
   rx="4"
   fill="#d0d0d0"
   stroke="#707070"
   stroke-width="2.5"
   id="rect149" />
<rect
   x="42"
   y="52"
   width="36"
   height="8"
   fill="rgba(255,255,255,0.4)"
   id="rect150"
   style="fill:#ffffff;fill-opacity:0.49803904" />
<rect
   x="42"
   y="80"
   width="36"
   height="8"
   fill="rgba(0,0,0,0.15)"
   id="rect151"
   style="fill:#ffffff;fill-opacity:0.49803904" />
<rect
   x="52"
   y="30"
   width="16"
   height="22"
   rx="2"
   fill="#d0d0d0"
   stroke="#707070"
   stroke-width="2"
   id="rect152" />
<ellipse
   cx="60"
   cy="20"
   rx="20"
   ry="9"
   fill="#20b2aa"
   stroke="#006666"
   stroke-width="2.5"
   id="ellipse152" />
<ellipse
   cx="60"
   cy="17"
   rx="18"
   ry="7"
   fill="#008b8b"
   id="ellipse153" />
<line
   x1="42"
   y1="17"
   x2="78"
   y2="17"
   stroke="#004d4d"
   stroke-width="3"
   id="line153" />
<line
   x1="60"
   y1="9"
   x2="60"
   y2="25"
   stroke="#004d4d"
   stroke-width="3"
   id="line154" />
<circle
   cx="60"
   cy="17"
   r="4"
   fill="#008b8b"
   id="circle154" />
<ellipse
   cx="60"
   cy="14"
   rx="10"
   ry="3"
   fill="rgba(255,255,255,0.5)"
   id="ellipse154"
   style="fill:#ffffff;fill-opacity:0.49803904" />
<rect
   x="57"
   y="24"
   width="6"
   height="8"
   fill="#a8a8a8"
   stroke="#707070"
   stroke-width="1"
   id="rect154" />
<path
   d="M 70,70 H 50 m 5,-6 -5,6 5,6"
   stroke="#008b8b"
   stroke-width="3"
   stroke-linecap="round"
   stroke-linejoin="round"
   fill="none"
   id="path165">
<animate
   attributeName="opacity"
   values="0.5;1;0.5"
   dur="2s"
   repeatCount="indefinite" />
<animate
   attributeName="stroke-width"
   values="2.5;3.5;2.5"
   dur="2s"
   repeatCount="indefinite" />
</path></g></g>
<g
   clip-path="url(#clipId0)"
   fill="none"
   stroke="rgb(255,255,255)"
   stroke-width="0.7"
   id="g307"
   data-element-id="element-536-1761788125775"
   style="cursor: pointer;">
<polyline
   points="261.492,264.483 183.105,264.483 183.105,432.591 "
   id="polyline306"
   data-element-id="element-537-1761788125775"
   style="cursor: pointer;" />
<polyline
   points="183.199,475.751 183.199,455.54 "
   id="polyline307"
   data-element-id="element-538-1761788125775"
   style="cursor: pointer;" />
</g>
<g
   clip-path="url(#clipId0)"
   fill="none"
   stroke="rgb(255,255,255)"
   stroke-width="0.53"
   id="g308"
   data-element-id="element-539-1761788125775"
   style="cursor: pointer;">
<polyline
   points="171.583,444.065 172.463,439.71 174.862,436.153 178.419,433.754 182.774,432.874 187.129,433.754 190.687,436.153 193.086,439.71 193.966,444.065 193.086,448.42 190.687,451.978 187.129,454.377 182.774,455.257 178.419,454.377 174.862,451.978 172.463,448.42 171.583,444.065 "
   id="polyline308"
   data-element-id="element-540-1761788125775"
   style="cursor: pointer;" />
</g>
<g
   clip-path="url(#clipId0)"
   fill="rgb(255,255,255)"
   stroke="rgb(255,255,255)"
   stroke-width="0"
   id="g309"
   data-element-id="element-541-1761788125775"
   style="cursor: pointer;">
<text
   transform="matrix(7.90168 0 -0 7.84489 176.622 448.452)"
   font-family="Bahnschrift,'sans-serif'"
   font-size="1.4081"
   id="text308"
   data-element-id="element-542-1761788125775"
   style="cursor: pointer;">TC</text>
</g>
<g
   clip-path="url(#clipId0)"
   fill="none"
   stroke="#ffffff"
   stroke-width="0.7"
   id="g310"
   data-element-id="element-543-1761788125775"
   transform="matrix(0.98363197,0,0,1.0000326,4.3444586,-0.01149266)"
   style="stroke-width:0.70578861;stroke-dasharray:none">
<polyline
   points="309.563,264.483 393.333,264.483 393.333,440.618 "
   id="polyline309"
   data-element-id="element-544-1761788125775"
   style="stroke-width:0.70578861;stroke-dasharray:none" />
</g>
<g
   clip-path="url(#clipId0)"
   fill="none"
   stroke="#00b050"
   stroke-width="0.7"
   id="g311"
   data-element-id="element-545-1761788125775"
   transform="matrix(0.86393664,0,0,1.0002426,55.727348,-0.08520935)"
   style="stroke-width:1.61360652;stroke-dasharray:none">
<polyline
   points="400.133,452.801 409.388,452.801 409.388,249.656 "
   id="polyline310"
   data-element-id="element-546-1761788125775"
   style="stroke-width:1.61360652;stroke-dasharray:none" />
</g>









<polyline
   points="412.694,323.038 452.596,323.038 "
   id="polyline330"
   data-element-id="element-577-1761788125775"
   style="fill:none;stroke:#00b050;stroke-width:1.5;stroke-dasharray:none" /><polyline
   points="410.05,394.625 452.596,394.625 "
   id="polyline331"
   data-element-id="element-578-1761788125776"
   style="fill:none;stroke:#00b050;stroke-width:1.5;stroke-dasharray:none" /><polyline
   points="404.572,323.274 405.859,320.434 408.963,319.26 412.068,320.434 413.355,323.274 "
   id="polyline332"
   data-element-id="element-579-1761788125776"
   style="fill:none;stroke:#00b050;stroke-width:1.5;stroke-dasharray:none" /><polyline
   points="375.389,323.038 405.233,323.038 "
   id="polyline333"
   data-element-id="element-580-1761788125776"
   style="fill:none;stroke:#00b050;stroke-width:1.424346;stroke-dasharray:none"
   transform="matrix(1.109051,0,0,1,-44.229247,0)" />



















<g
   clip-path="url(#clipId0)"
   fill="none"
   stroke="rgb(0,176,80)"
   stroke-width="0.7"
   id="g351"
   data-element-id="element-612-1761788125776"
   style="cursor:pointer;stroke-width:1.5;stroke-dasharray:none">
<polyline
   points="134.467,178.635 134.467,213.862 "
   id="polyline349"
   data-element-id="element-613-1761788125776"
   style="cursor:pointer;stroke-width:1.5;stroke-dasharray:none" />
<polyline
   points="134.797,212.918 137.637,214.205 138.811,217.309 137.637,220.414 134.797,221.701 "
   id="polyline350"
   data-element-id="element-614-1761788125776"
   style="cursor:pointer;stroke-width:1.5;stroke-dasharray:none" />
<polyline
   points="58.3465,342.682 131.445,342.682 "
   id="polyline351"
   data-element-id="element-615-1761788125776"
   style="cursor:pointer;stroke-width:1.5;stroke-dasharray:none" />
</g>
<g
   clip-path="url(#clipId0)"
   fill="rgb(0,176,80)"
   stroke="rgb(0,176,80)"
   stroke-width="1"
   id="g461"
   data-element-id="element-616-1761788125776"
   style="cursor: pointer;">
<path
   d="M106.418,305.023 106.418,303.842 107.858,305.023 z"
   id="path351"
   data-element-id="element-617-1761788125776"
   style="cursor: pointer;" />
<path
   d="M107.858,305.023 106.418,303.842 107.858,303.842 z"
   id="path352"
   data-element-id="element-618-1761788125776"
   style="cursor: pointer;" />
<path
   d="M108.07,307.542 107.858,307.486 108.07,306.675 z"
   id="path353"
   data-element-id="element-619-1761788125776"
   style="cursor: pointer;" />
<path
   d="M107.858,305.023 107.858,303.842 108.07,305.023 z"
   id="path354"
   data-element-id="element-620-1761788125776"
   style="cursor: pointer;" />
<path
   d="M108.07,305.023 107.858,303.842 108.07,303.842 z"
   id="path355"
   data-element-id="element-621-1761788125776"
   style="cursor: pointer;" />
<path
   d="M108.07,302.189 107.858,301.379 108.07,301.323 z"
   id="path356"
   data-element-id="element-622-1761788125776"
   style="cursor: pointer;" />
<path
   d="M108.07,307.542 108.07,306.675 108.661,307.699 z"
   id="path357"
   data-element-id="element-623-1761788125776"
   style="cursor: pointer;" />
<path
   d="M108.661,307.699 108.07,306.675 108.661,306.331 z"
   id="path358"
   data-element-id="element-624-1761788125776"
   style="cursor: pointer;" />
<path
   d="M108.07,305.023 108.07,303.842 108.661,305.023 z"
   id="path359"
   data-element-id="element-625-1761788125776"
   style="cursor: pointer;" />
<path
   d="M108.661,305.023 108.07,303.842 108.661,303.842 z"
   id="path360"
   data-element-id="element-626-1761788125776"
   style="cursor: pointer;" />
<path
   d="M108.07,302.189 108.07,301.323 108.661,302.534 z"
   id="path361"
   data-element-id="element-627-1761788125776"
   style="cursor: pointer;" />
<path
   d="M108.661,302.534 108.07,301.323 108.661,301.166 z"
   id="path362"
   data-element-id="element-628-1761788125776"
   style="cursor: pointer;" />
<path
   d="M108.661,307.699 108.661,306.331 110.904,306.389 z"
   id="path363"
   data-element-id="element-629-1761788125776"
   style="cursor: pointer;" />
<path
   d="M110.904,306.389 108.661,306.331 110.904,305.023 z"
   id="path364"
   data-element-id="element-630-1761788125776"
   style="cursor: pointer;" />
<path
   d="M108.661,305.023 108.661,303.842 110.904,305.023 z"
   id="path365"
   data-element-id="element-631-1761788125776"
   style="cursor: pointer;" />
<path
   d="M110.904,305.023 108.661,303.842 110.904,303.842 z"
   id="path366"
   data-element-id="element-632-1761788125776"
   style="cursor: pointer;" />
<path
   d="M108.661,302.534 108.661,301.166 110.904,303.842 z"
   id="path367"
   data-element-id="element-633-1761788125776"
   style="cursor: pointer;" />
<path
   d="M110.904,303.842 108.661,301.166 110.904,302.475 z"
   id="path368"
   data-element-id="element-634-1761788125776"
   style="cursor: pointer;" />
<path
   d="M110.904,306.389 110.904,305.023 111.915,305.799 z"
   id="path369"
   data-element-id="element-635-1761788125776"
   style="cursor: pointer;" />
<path
   d="M111.915,305.799 110.904,305.023 111.915,305.023 z"
   id="path370"
   data-element-id="element-636-1761788125776"
   style="cursor: pointer;" />
<path
   d="M110.904,305.023 110.904,303.842 111.915,304.432 z"
   id="path371"
   data-element-id="element-637-1761788125776"
   style="cursor: pointer;" />
<path
   d="M110.904,303.842 110.904,302.475 111.915,303.842 z"
   id="path372"
   data-element-id="element-638-1761788125776"
   style="cursor: pointer;" />
<path
   d="M111.915,303.842 110.904,302.475 111.915,303.066 z"
   id="path373"
   data-element-id="element-639-1761788125776"
   style="cursor: pointer;" />
<path
   d="M111.915,305.799 111.915,305.023 112.792,305.287 z"
   id="path374"
   data-element-id="element-640-1761788125776"
   style="cursor: pointer;" />
<path
   d="M112.792,305.287 111.915,305.023 112.792,305.023 z"
   id="path375"
   data-element-id="element-641-1761788125776"
   style="cursor: pointer;" />
<path
   d="M112.792,304.944 111.915,304.432 112.792,303.921 z"
   id="path376"
   data-element-id="element-642-1761788125776"
   style="cursor: pointer;" />
<path
   d="M111.915,303.842 111.915,303.066 112.792,303.842 z"
   id="path377"
   data-element-id="element-643-1761788125776"
   style="cursor: pointer;" />
<path
   d="M112.792,303.842 111.915,303.066 112.792,303.578 z"
   id="path378"
   data-element-id="element-644-1761788125776"
   style="cursor: pointer;" />
<path
   d="M112.792,305.287 112.792,305.023 113.091,305.112 z"
   id="path379"
   data-element-id="element-645-1761788125776"
   style="cursor: pointer;" />
<path
   d="M113.091,305.112 112.792,305.023 113.091,305.023 z"
   id="path380"
   data-element-id="element-646-1761788125776"
   style="cursor: pointer;" />
<path
   d="M112.792,303.842 112.792,303.578 113.091,303.842 z"
   id="path381"
   data-element-id="element-647-1761788125776"
   style="cursor: pointer;" />
<path
   d="M113.091,303.842 112.792,303.578 113.091,303.753 z"
   id="path382"
   data-element-id="element-648-1761788125776"
   style="cursor: pointer;" />
<path
   d="M113.091,305.112 113.091,303.753 114.256,304.432 z"
   id="path383"
   data-element-id="element-649-1761788125776"
   style="cursor: pointer;" />
<path
   d="M108.527,217.848 107.362,217.168 108.527,216.488 z"
   id="path384"
   data-element-id="element-650-1761788125776"
   style="cursor: pointer;" />
<path
   d="M108.527,217.848 108.527,217.758 108.826,218.022 z"
   id="path385"
   data-element-id="element-651-1761788125776"
   style="cursor: pointer;" />
<path
   d="M108.826,218.022 108.527,217.758 108.826,217.758 z"
   id="path386"
   data-element-id="element-652-1761788125776"
   style="cursor: pointer;" />
<path
   d="M108.527,216.577 108.527,216.488 108.826,216.577 z"
   id="path387"
   data-element-id="element-653-1761788125776"
   style="cursor: pointer;" />
<path
   d="M108.826,216.577 108.527,216.488 108.826,216.313 z"
   id="path388"
   data-element-id="element-654-1761788125776"
   style="cursor: pointer;" />
<path
   d="M108.826,218.022 108.826,217.758 109.703,218.534 z"
   id="path389"
   data-element-id="element-655-1761788125776"
   style="cursor: pointer;" />
<path
   d="M109.703,218.534 108.826,217.758 109.703,217.758 z"
   id="path390"
   data-element-id="element-656-1761788125776"
   style="cursor: pointer;" />
<path
   d="M108.826,217.679 108.826,216.656 109.703,217.168 z"
   id="path391"
   data-element-id="element-657-1761788125776"
   style="cursor: pointer;" />
<path
   d="M108.826,216.577 108.826,216.313 109.703,216.577 z"
   id="path392"
   data-element-id="element-658-1761788125776"
   style="cursor: pointer;" />
<path
   d="M109.703,216.577 108.826,216.313 109.703,215.801 z"
   id="path393"
   data-element-id="element-659-1761788125776"
   style="cursor: pointer;" />
<path
   d="M109.703,218.534 109.703,217.758 110.715,219.125 z"
   id="path394"
   data-element-id="element-660-1761788125776"
   style="cursor: pointer;" />
<path
   d="M110.715,219.125 109.703,217.758 110.715,217.758 z"
   id="path395"
   data-element-id="element-661-1761788125776"
   style="cursor: pointer;" />
<path
   d="M110.715,217.758 109.703,217.168 110.715,216.577 z"
   id="path396"
   data-element-id="element-662-1761788125776"
   style="cursor: pointer;" />
<path
   d="M109.703,216.577 109.703,215.801 110.715,216.577 z"
   id="path397"
   data-element-id="element-663-1761788125776"
   style="cursor: pointer;" />
<path
   d="M110.715,216.577 109.703,215.801 110.715,215.211 z"
   id="path398"
   data-element-id="element-664-1761788125776"
   style="cursor: pointer;" />
<path
   d="M110.715,219.125 110.715,217.758 110.715,219.125 z"
   id="path399"
   data-element-id="element-665-1761788125776"
   style="cursor: pointer;" />
<path
   d="M110.715,219.125 110.715,217.758 110.715,217.758 z"
   id="path400"
   data-element-id="element-666-1761788125776"
   style="cursor: pointer;" />
<path
   d="M110.715,217.758 110.715,216.577 110.715,217.758 z"
   id="path401"
   data-element-id="element-667-1761788125776"
   style="cursor: pointer;" />
<path
   d="M110.715,217.758 110.715,216.577 110.715,216.577 z"
   id="path402"
   data-element-id="element-668-1761788125776"
   style="cursor: pointer;" />
<path
   d="M110.715,216.577 110.715,215.211 110.715,216.577 z"
   id="path403"
   data-element-id="element-669-1761788125776"
   style="cursor: pointer;" />
<path
   d="M110.715,216.577 110.715,215.211 110.715,215.211 z"
   id="path404"
   data-element-id="element-670-1761788125776"
   style="cursor: pointer;" />
<path
   d="M110.715,219.125 110.715,217.758 112.958,220.434 z"
   id="path405"
   data-element-id="element-671-1761788125776"
   style="cursor: pointer;" />
<path
   d="M112.958,220.434 110.715,217.758 112.958,219.066 z"
   id="path406"
   data-element-id="element-672-1761788125776"
   style="cursor: pointer;" />
<path
   d="M110.715,217.758 110.715,216.577 112.958,217.758 z"
   id="path407"
   data-element-id="element-673-1761788125776"
   style="cursor: pointer;" />
<path
   d="M112.958,217.758 110.715,216.577 112.958,216.577 z"
   id="path408"
   data-element-id="element-674-1761788125776"
   style="cursor: pointer;" />
<path
   d="M110.715,216.577 110.715,215.211 112.958,215.269 z"
   id="path409"
   data-element-id="element-675-1761788125776"
   style="cursor: pointer;" />
<path
   d="M112.958,215.269 110.715,215.211 112.958,213.902 z"
   id="path410"
   data-element-id="element-676-1761788125776"
   style="cursor: pointer;" />
<path
   d="M112.958,220.434 112.958,219.066 113.548,220.278 z"
   id="path411"
   data-element-id="element-677-1761788125776"
   style="cursor: pointer;" />
<path
   d="M113.548,220.278 112.958,219.066 113.548,219.411 z"
   id="path412"
   data-element-id="element-678-1761788125776"
   style="cursor: pointer;" />
<path
   d="M112.958,217.758 112.958,216.577 113.548,217.758 z"
   id="path413"
   data-element-id="element-679-1761788125776"
   style="cursor: pointer;" />
<path
   d="M113.548,217.758 112.958,216.577 113.548,216.577 z"
   id="path414"
   data-element-id="element-680-1761788125776"
   style="cursor: pointer;" />
<path
   d="M112.958,215.269 112.958,213.902 113.548,214.925 z"
   id="path415"
   data-element-id="element-681-1761788125776"
   style="cursor: pointer;" />
<path
   d="M113.548,214.925 112.958,213.902 113.548,214.058 z"
   id="path416"
   data-element-id="element-682-1761788125776"
   style="cursor: pointer;" />
<path
   d="M113.548,220.278 113.548,219.411 113.76,220.221 z"
   id="path417"
   data-element-id="element-683-1761788125776"
   style="cursor: pointer;" />
<path
   d="M113.548,217.758 113.548,216.577 113.76,217.758 z"
   id="path418"
   data-element-id="element-684-1761788125776"
   style="cursor: pointer;" />
<path
   d="M113.76,217.758 113.548,216.577 113.76,216.577 z"
   id="path419"
   data-element-id="element-685-1761788125776"
   style="cursor: pointer;" />
<path
   d="M113.548,214.925 113.548,214.058 113.76,214.114 z"
   id="path420"
   data-element-id="element-686-1761788125776"
   style="cursor: pointer;" />
<path
   d="M113.76,217.758 113.76,216.577 114.917,217.758 z"
   id="path421"
   data-element-id="element-687-1761788125776"
   style="cursor: pointer;" />
<path
   d="M114.917,217.758 113.76,216.577 114.917,216.577 z"
   id="path422"
   data-element-id="element-688-1761788125776"
   style="cursor: pointer;" />
<path
   d="M107.362,437.809 107.362,436.628 108.519,437.809 z"
   id="path423"
   data-element-id="element-689-1761788125776"
   style="cursor: pointer;" />
<path
   d="M108.519,437.809 107.362,436.628 108.519,436.628 z"
   id="path424"
   data-element-id="element-690-1761788125776"
   style="cursor: pointer;" />
<path
   d="M108.731,440.328 108.519,440.272 108.731,439.461 z"
   id="path425"
   data-element-id="element-691-1761788125776"
   style="cursor: pointer;" />
<path
   d="M108.519,437.809 108.519,436.628 108.731,437.809 z"
   id="path426"
   data-element-id="element-692-1761788125776"
   style="cursor: pointer;" />
<path
   d="M108.731,437.809 108.519,436.628 108.731,436.628 z"
   id="path427"
   data-element-id="element-693-1761788125776"
   style="cursor: pointer;" />
<path
   d="M108.731,434.975 108.519,434.165 108.731,434.108 z"
   id="path428"
   data-element-id="element-694-1761788125776"
   style="cursor: pointer;" />
<path
   d="M108.731,440.328 108.731,439.461 109.322,440.484 z"
   id="path429"
   data-element-id="element-695-1761788125776"
   style="cursor: pointer;" />
<path
   d="M109.322,440.484 108.731,439.461 109.322,439.117 z"
   id="path430"
   data-element-id="element-696-1761788125776"
   style="cursor: pointer;" />
<path
   d="M108.731,437.809 108.731,436.628 109.322,437.809 z"
   id="path431"
   data-element-id="element-697-1761788125776"
   style="cursor: pointer;" />
<path
   d="M109.322,437.809 108.731,436.628 109.322,436.628 z"
   id="path432"
   data-element-id="element-698-1761788125776"
   style="cursor: pointer;" />
<path
   d="M108.731,434.975 108.731,434.108 109.322,435.32 z"
   id="path433"
   data-element-id="element-699-1761788125776"
   style="cursor: pointer;" />
<path
   d="M109.322,435.32 108.731,434.108 109.322,433.952 z"
   id="path434"
   data-element-id="element-700-1761788125776"
   style="cursor: pointer;" />
<path
   d="M109.322,440.484 109.322,439.117 111.565,439.175 z"
   id="path435"
   data-element-id="element-701-1761788125776"
   style="cursor: pointer;" />
<path
   d="M111.565,439.175 109.322,439.117 111.565,437.809 z"
   id="path436"
   data-element-id="element-702-1761788125776"
   style="cursor: pointer;" />
<path
   d="M109.322,437.809 109.322,436.628 111.565,437.809 z"
   id="path437"
   data-element-id="element-703-1761788125776"
   style="cursor: pointer;" />
<path
   d="M111.565,437.809 109.322,436.628 111.565,436.628 z"
   id="path438"
   data-element-id="element-704-1761788125776"
   style="cursor: pointer;" />
<path
   d="M109.322,435.32 109.322,433.952 111.565,436.628 z"
   id="path439"
   data-element-id="element-705-1761788125776"
   style="cursor: pointer;" />
<path
   d="M111.565,436.628 109.322,433.952 111.565,435.261 z"
   id="path440"
   data-element-id="element-706-1761788125776"
   style="cursor: pointer;" />
<path
   d="M111.565,439.175 111.565,437.809 111.565,439.175 z"
   id="path441"
   data-element-id="element-707-1761788125776"
   style="cursor: pointer;" />
<path
   d="M111.565,439.175 111.565,437.809 111.565,437.809 z"
   id="path442"
   data-element-id="element-708-1761788125776"
   style="cursor: pointer;" />
<path
   d="M111.565,437.809 111.565,436.628 111.565,437.809 z"
   id="path443"
   data-element-id="element-709-1761788125776"
   style="cursor: pointer;" />
<path
   d="M111.565,437.809 111.565,436.628 111.565,436.628 z"
   id="path444"
   data-element-id="element-710-1761788125776"
   style="cursor: pointer;" />
<path
   d="M111.565,436.628 111.565,435.261 111.565,436.628 z"
   id="path445"
   data-element-id="element-711-1761788125776"
   style="cursor: pointer;" />
<path
   d="M111.565,436.628 111.565,435.261 111.565,435.261 z"
   id="path446"
   data-element-id="element-712-1761788125776"
   style="cursor: pointer;" />
<path
   d="M111.565,439.175 111.565,437.809 112.577,438.585 z"
   id="path447"
   data-element-id="element-713-1761788125776"
   style="cursor: pointer;" />
<path
   d="M112.577,438.585 111.565,437.809 112.577,437.809 z"
   id="path448"
   data-element-id="element-714-1761788125776"
   style="cursor: pointer;" />
<path
   d="M111.565,437.809 111.565,436.628 112.577,437.218 z"
   id="path449"
   data-element-id="element-715-1761788125776"
   style="cursor: pointer;" />
<path
   d="M111.565,436.628 111.565,435.261 112.577,436.628 z"
   id="path450"
   data-element-id="element-716-1761788125776"
   style="cursor: pointer;" />
<path
   d="M112.577,436.628 111.565,435.261 112.577,435.852 z"
   id="path451"
   data-element-id="element-717-1761788125776"
   style="cursor: pointer;" />
<path
   d="M112.577,438.585 112.577,437.809 113.454,438.073 z"
   id="path452"
   data-element-id="element-718-1761788125776"
   style="cursor: pointer;" />
<path
   d="M113.454,438.073 112.577,437.809 113.454,437.809 z"
   id="path453"
   data-element-id="element-719-1761788125776"
   style="cursor: pointer;" />
<path
   d="M113.454,437.73 112.577,437.218 113.454,436.707 z"
   id="path454"
   data-element-id="element-720-1761788125776"
   style="cursor: pointer;" />
<path
   d="M112.577,436.628 112.577,435.852 113.454,436.628 z"
   id="path455"
   data-element-id="element-721-1761788125776"
   style="cursor: pointer;" />
<path
   d="M113.454,436.628 112.577,435.852 113.454,436.364 z"
   id="path456"
   data-element-id="element-722-1761788125776"
   style="cursor: pointer;" />
<path
   d="M113.454,438.073 113.454,437.809 113.753,437.898 z"
   id="path457"
   data-element-id="element-723-1761788125776"
   style="cursor: pointer;" />
<path
   d="M113.753,437.898 113.454,437.809 113.753,437.809 z"
   id="path458"
   data-element-id="element-724-1761788125776"
   style="cursor: pointer;" />
<path
   d="M113.454,436.628 113.454,436.364 113.753,436.628 z"
   id="path459"
   data-element-id="element-725-1761788125776"
   style="cursor: pointer;" />
<path
   d="M113.753,436.628 113.454,436.364 113.753,436.538 z"
   id="path460"
   data-element-id="element-726-1761788125776"
   style="cursor: pointer;" />
<path
   d="M113.753,437.898 113.753,436.538 114.917,437.218 z"
   id="path461"
   data-element-id="element-727-1761788125776"
   style="cursor: pointer;" />
</g>
<g
   clip-path="url(#clipId0)"
   fill="rgb(192,0,0)"
   stroke="rgb(192,0,0)"
   stroke-width="0"
   id="g464"
   data-element-id="element-728-1761788125776"
   style="cursor:pointer;fill:#ffffff;fill-opacity:1">
<text
   transform="matrix(7.85822 0 -0 7.84489 58.3613 321.745)"
   font-family="Bahnschrift,'sans-serif'"
   font-size="1.4081"
   id="text461"
   data-element-id="element-729-1761788125776"
   style="cursor:pointer;fill:#ffffff;fill-opacity:1">To/From G/E</text>
<text
   transform="matrix(7.84277 0 -0 7.84489 58.4707 333.707)"
   font-family="Bahnschrift,'sans-serif'"
   font-size="1.4081"
   id="text462"
   data-element-id="element-730-1761788125776"
   style="cursor:pointer;fill:#ffffff;fill-opacity:1">C.F.W. System</text>
<text
   transform="matrix(7.85415 0 -0 7.84489 58.3613 454.453)"
   font-family="Bahnschrift,'sans-serif'"
   font-size="1.4081"
   id="text463"
   data-element-id="element-731-1761788125776"
   style="cursor:pointer;fill:#ffffff;fill-opacity:1">To/From M/E</text>
<text
   transform="matrix(7.84342 0 -0 7.8583 58.472 466.414)"
   font-family="Bahnschrift,'sans-serif'"
   font-size="1.4081"
   id="text464"
   data-element-id="element-732-1761788125776"
   style="cursor:pointer;fill:#ffffff;fill-opacity:1">C.F.W. System</text>
</g>
<g
   clip-path="url(#clipId0)"
   fill="none"
   stroke="#ffffff"
   stroke-width="0.7"
   id="g465"
   data-element-id="element-733-1761788125776"
   transform="matrix(1,0,0,0.91928317,0,38.479571)">
<polyline
   points="167.805,519.1 167.805,477.073 "
   id="polyline464"
   data-element-id="element-734-1761788125776" />
</g>

<g
   clip-path="url(#clipId0)"
   fill="none"
   stroke="rgb(255,255,255)"
   stroke-width="0.53"
   id="g479"
   data-element-id="element-750-1761788125776"
   style="cursor: pointer;">
<polyline
   points="156.566,527.363 157.449,523.008 159.857,519.451 163.429,517.052 167.805,516.172 172.181,517.052 175.753,519.451 178.161,523.008 179.044,527.363 178.161,531.718 175.753,535.276 172.181,537.675 167.805,538.555 163.429,537.675 159.857,535.276 157.449,531.718 156.566,527.363 "
   id="polyline478"
   data-element-id="element-751-1761788125776"
   style="cursor: pointer;" />
</g>
<g
   clip-path="url(#clipId0)"
   fill="rgb(255,255,255)"
   stroke="rgb(255,255,255)"
   stroke-width="0"
   id="g480"
   data-element-id="element-752-1761788125776"
   style="cursor: pointer;">
<text
   transform="matrix(7.86315 0 -0 7.8583 161.202 531.724)"
   font-family="Bahnschrift,'sans-serif'"
   font-size="1.4081"
   id="text479"
   data-element-id="element-753-1761788125776"
   style="cursor: pointer;">PX</text>
</g>



<g
   clip-path="url(#clipId0)"
   fill="rgb(255,255,255)"
   stroke="rgb(255,255,255)"
   stroke-width="0.25"
   fill-opacity="0.498039"
   stroke-opacity="0.498039"
   id="g484"
   data-element-id="element-761-1761788125776"
   style="cursor: pointer;">
<path
   d="M164.122,508.333 167.9,502.761 171.677,508.333 171.677,508.333 z"
   id="path483"
   data-element-id="element-762-1761788125776"
   style="cursor: pointer;" />
</g>
<g
   id="g267"
   style="stroke:#ffffff;stroke-opacity:1;fill:#000000;fill-opacity:1"><g
     clip-path="url(#clipId0)"
     fill="none"
     stroke="rgb(255,255,255)"
     stroke-width="0.53"
     id="g481"
     data-element-id="element-754-1761788125776"
     style="cursor:pointer;stroke:#ffffff;stroke-opacity:1;fill:#000000;fill-opacity:1">
<polyline
   points="167.522,502.856 174.416,502.856 "
   id="polyline480"
   data-element-id="element-755-1761788125776"
   style="cursor:pointer;stroke:#ffffff;stroke-opacity:1;fill:#000000;fill-opacity:1" />
<polyline
   points="174.605,499.078 174.605,506.633 "
   id="polyline481"
   data-element-id="element-756-1761788125776"
   style="cursor:pointer;stroke:#ffffff;stroke-opacity:1;fill:#000000;fill-opacity:1" />
</g><g
     clip-path="url(#clipId0)"
     fill="none"
     stroke="rgb(0,0,0)"
     stroke-width="0.53"
     id="g483"
     data-element-id="element-759-1761788125776"
     style="cursor:pointer;stroke:#ffffff;stroke-opacity:1;fill:#000000;fill-opacity:1">
<polyline
   points="171.677,497.284 167.9,502.761 164.122,497.284 171.677,497.284 "
   id="polyline482"
   data-element-id="element-760-1761788125776"
   style="cursor:pointer;stroke:#ffffff;stroke-opacity:1;fill:#000000;fill-opacity:1" />
</g><g
     clip-path="url(#clipId0)"
     fill="none"
     stroke="rgb(0,0,0)"
     stroke-width="0.53"
     id="g485"
     data-element-id="element-763-1761788125776"
     style="cursor:pointer;stroke:#ffffff;stroke-opacity:1;fill:#000000;fill-opacity:1">
<polyline
   points="164.122,508.333 167.9,502.761 171.677,508.333 164.122,508.333 "
   id="polyline484"
   data-element-id="element-764-1761788125776"
   style="cursor:pointer;stroke:#ffffff;stroke-opacity:1;fill:#000000;fill-opacity:1" />
</g></g>

<g
   clip-path="url(#clipId0)"
   fill="none"
   stroke="rgb(255,255,255)"
   stroke-width="0.53"
   id="g499"
   data-element-id="element-780-1761788125776"
   style="cursor: pointer;">
<polyline
   points="151.844,572.224 153.117,565.918 156.587,560.769 161.735,557.299 168.041,556.027 174.347,557.299 179.495,560.769 182.966,565.918 184.238,572.224 182.966,578.529 179.495,583.678 174.347,587.148 168.041,588.42 161.735,587.148 156.587,583.678 153.117,578.529 151.844,572.224 "
   id="polyline498"
   data-element-id="element-781-1761788125776"
   style="cursor: pointer;" />
</g>
<g
   clip-path="url(#clipId0)"
   fill="rgb(255,255,255)"
   stroke="rgb(255,255,255)"
   stroke-width="0"
   id="g500"
   data-element-id="element-782-1761788125776"
   style="cursor: pointer;">
<text
   transform="matrix(7.86132 0 -0 7.84489 163.034 569.973)"
   font-family="Bahnschrift,'sans-serif'"
   font-size="1.4081"
   id="text499"
   data-element-id="element-783-1761788125776"
   style="cursor: pointer;">PI</text>
<text
   transform="matrix(7.84248 0 -0 7.84489 160.39 583.197)"
   font-family="Bahnschrift,'sans-serif'"
   font-size="1.4081"
   id="text500"
   data-element-id="element-784-1761788125776"
   style="cursor: pointer;">MC</text>
</g>
<g
   clip-path="url(#clipId0)"
   fill="none"
   stroke="rgb(0,0,0)"
   stroke-width="0.53"
   id="g501"
   data-element-id="element-785-1761788125776"
   style="cursor:pointer;stroke:#ffffff;stroke-opacity:1">
<polyline
   points="151.844,572.271 184.277,572.271 "
   id="polyline500"
   data-element-id="element-786-1761788125776"
   style="cursor:pointer;stroke:#ffffff;stroke-opacity:1" />
</g>
<g
   clip-path="url(#clipId0)"
   fill="none"
   stroke="rgb(255,255,255)"
   stroke-width="0.7"
   id="g502"
   data-element-id="element-787-1761788125776"
   style="cursor: pointer;">
<polyline
   points="167.805,556.688 167.805,538.555 "
   id="polyline501"
   data-element-id="element-788-1761788125776"
   style="cursor: pointer;" />
</g>





<g
   clip-path="url(#clipId0)"
   fill="none"
   stroke="rgb(0,176,240)"
   stroke-width="0.7"
   id="g508"
   data-element-id="element-800-1761788125776"
   style="cursor:pointer;stroke-width:1.5;stroke-dasharray:none">
<polyline
   points="622.922,322.707 624.209,319.868 627.314,318.693 630.419,319.868 631.706,322.707 "
   id="polyline507"
   data-element-id="element-801-1761788125776"
   style="cursor:pointer;stroke-width:1.5;stroke-dasharray:none" />
</g>
<g
   clip-path="url(#clipId0)"
   fill="rgb(0,176,80)"
   stroke="rgb(0,176,80)"
   stroke-width="1"
   id="g585"
   data-element-id="element-802-1761788125776"
   style="cursor: pointer;">
<path
   d="M253.936,178.376 253.936,177.195 255.471,178.376 z"
   id="path508"
   data-element-id="element-803-1761788125776"
   style="cursor: pointer;" />
<path
   d="M255.471,178.376 253.936,177.195 255.471,177.195 z"
   id="path509"
   data-element-id="element-804-1761788125776"
   style="cursor: pointer;" />
<path
   d="M255.684,180.895 255.471,180.839 255.684,180.028 z"
   id="path510"
   data-element-id="element-805-1761788125776"
   style="cursor: pointer;" />
<path
   d="M255.471,178.376 255.471,177.195 255.684,178.376 z"
   id="path511"
   data-element-id="element-806-1761788125776"
   style="cursor: pointer;" />
<path
   d="M255.684,178.376 255.471,177.195 255.684,177.195 z"
   id="path512"
   data-element-id="element-807-1761788125776"
   style="cursor: pointer;" />
<path
   d="M255.684,175.542 255.471,174.732 255.684,174.675 z"
   id="path513"
   data-element-id="element-808-1761788125776"
   style="cursor: pointer;" />
<path
   d="M255.684,180.895 255.684,180.028 256.274,181.051 z"
   id="path514"
   data-element-id="element-809-1761788125776"
   style="cursor: pointer;" />
<path
   d="M256.274,181.051 255.684,180.028 256.274,179.684 z"
   id="path515"
   data-element-id="element-810-1761788125776"
   style="cursor: pointer;" />
<path
   d="M255.684,178.376 255.684,177.195 256.274,178.376 z"
   id="path516"
   data-element-id="element-811-1761788125776"
   style="cursor: pointer;" />
<path
   d="M256.274,178.376 255.684,177.195 256.274,177.195 z"
   id="path517"
   data-element-id="element-812-1761788125776"
   style="cursor: pointer;" />
<path
   d="M255.684,175.542 255.684,174.675 256.274,175.887 z"
   id="path518"
   data-element-id="element-813-1761788125776"
   style="cursor: pointer;" />
<path
   d="M256.274,175.887 255.684,174.675 256.274,174.519 z"
   id="path519"
   data-element-id="element-814-1761788125776"
   style="cursor: pointer;" />
<path
   d="M256.274,181.051 256.274,179.684 258.517,179.742 z"
   id="path520"
   data-element-id="element-815-1761788125776"
   style="cursor: pointer;" />
<path
   d="M258.517,179.742 256.274,179.684 258.517,178.376 z"
   id="path521"
   data-element-id="element-816-1761788125776"
   style="cursor: pointer;" />
<path
   d="M256.274,178.376 256.274,177.195 258.517,178.376 z"
   id="path522"
   data-element-id="element-817-1761788125776"
   style="cursor: pointer;" />
<path
   d="M258.517,178.376 256.274,177.195 258.517,177.195 z"
   id="path523"
   data-element-id="element-818-1761788125776"
   style="cursor: pointer;" />
<path
   d="M256.274,175.887 256.274,174.519 258.517,177.195 z"
   id="path524"
   data-element-id="element-819-1761788125776"
   style="cursor: pointer;" />
<path
   d="M258.517,177.195 256.274,174.519 258.517,175.828 z"
   id="path525"
   data-element-id="element-820-1761788125776"
   style="cursor: pointer;" />
<path
   d="M258.517,179.742 258.517,178.376 258.517,179.742 z"
   id="path526"
   data-element-id="element-821-1761788125776"
   style="cursor: pointer;" />
<path
   d="M258.517,179.742 258.517,178.376 258.517,178.376 z"
   id="path527"
   data-element-id="element-822-1761788125776"
   style="cursor: pointer;" />
<path
   d="M258.517,178.376 258.517,177.195 258.517,178.376 z"
   id="path528"
   data-element-id="element-823-1761788125776"
   style="cursor: pointer;" />
<path
   d="M258.517,178.376 258.517,177.195 258.517,177.195 z"
   id="path529"
   data-element-id="element-824-1761788125776"
   style="cursor: pointer;" />
<path
   d="M258.517,177.195 258.517,175.828 258.517,177.195 z"
   id="path530"
   data-element-id="element-825-1761788125776"
   style="cursor: pointer;" />
<path
   d="M258.517,177.195 258.517,175.828 258.517,175.828 z"
   id="path531"
   data-element-id="element-826-1761788125776"
   style="cursor: pointer;" />
<path
   d="M258.517,179.742 258.517,178.376 259.529,179.152 z"
   id="path532"
   data-element-id="element-827-1761788125776"
   style="cursor: pointer;" />
<path
   d="M259.529,179.152 258.517,178.376 259.529,178.376 z"
   id="path533"
   data-element-id="element-828-1761788125776"
   style="cursor: pointer;" />
<path
   d="M258.517,178.376 258.517,177.195 259.529,177.785 z"
   id="path534"
   data-element-id="element-829-1761788125776"
   style="cursor: pointer;" />
<path
   d="M258.517,177.195 258.517,175.828 259.529,177.195 z"
   id="path535"
   data-element-id="element-830-1761788125776"
   style="cursor: pointer;" />
<path
   d="M259.529,177.195 258.517,175.828 259.529,176.419 z"
   id="path536"
   data-element-id="element-831-1761788125776"
   style="cursor: pointer;" />
<path
   d="M259.529,179.152 259.529,178.376 260.406,178.64 z"
   id="path537"
   data-element-id="element-832-1761788125776"
   style="cursor: pointer;" />
<path
   d="M260.406,178.64 259.529,178.376 260.406,178.376 z"
   id="path538"
   data-element-id="element-833-1761788125776"
   style="cursor: pointer;" />
<path
   d="M260.406,178.297 259.529,177.785 260.406,177.274 z"
   id="path539"
   data-element-id="element-834-1761788125776"
   style="cursor: pointer;" />
<path
   d="M259.529,177.195 259.529,176.419 260.406,177.195 z"
   id="path540"
   data-element-id="element-835-1761788125776"
   style="cursor: pointer;" />
<path
   d="M260.406,177.195 259.529,176.419 260.406,176.931 z"
   id="path541"
   data-element-id="element-836-1761788125776"
   style="cursor: pointer;" />
<path
   d="M260.406,178.64 260.406,178.376 260.705,178.465 z"
   id="path542"
   data-element-id="element-837-1761788125776"
   style="cursor: pointer;" />
<path
   d="M260.705,178.465 260.406,178.376 260.705,178.376 z"
   id="path543"
   data-element-id="element-838-1761788125776"
   style="cursor: pointer;" />
<path
   d="M260.406,177.195 260.406,176.931 260.705,177.195 z"
   id="path544"
   data-element-id="element-839-1761788125776"
   style="cursor: pointer;" />
<path
   d="M260.705,177.195 260.406,176.931 260.705,177.105 z"
   id="path545"
   data-element-id="element-840-1761788125776"
   style="cursor: pointer;" />
<path
   d="M260.705,178.465 260.705,177.105 261.87,177.785 z"
   id="path546"
   data-element-id="element-841-1761788125776"
   style="cursor: pointer;" />
<path
   d="M393.05,178.376 393.05,177.195 394.585,178.376 z"
   id="path547"
   data-element-id="element-842-1761788125776"
   style="cursor: pointer;" />
<path
   d="M394.585,178.376 393.05,177.195 394.585,177.195 z"
   id="path548"
   data-element-id="element-843-1761788125776"
   style="cursor: pointer;" />
<path
   d="M394.797,180.895 394.585,180.839 394.797,180.028 z"
   id="path549"
   data-element-id="element-844-1761788125776"
   style="cursor: pointer;" />
<path
   d="M394.585,178.376 394.585,177.195 394.797,178.376 z"
   id="path550"
   data-element-id="element-845-1761788125776"
   style="cursor: pointer;" />
<path
   d="M394.797,178.376 394.585,177.195 394.797,177.195 z"
   id="path551"
   data-element-id="element-846-1761788125776"
   style="cursor: pointer;" />
<path
   d="M394.797,175.542 394.585,174.732 394.797,174.675 z"
   id="path552"
   data-element-id="element-847-1761788125776"
   style="cursor: pointer;" />
<path
   d="M394.797,180.895 394.797,180.028 395.387,181.051 z"
   id="path553"
   data-element-id="element-848-1761788125776"
   style="cursor: pointer;" />
<path
   d="M395.387,181.051 394.797,180.028 395.387,179.684 z"
   id="path554"
   data-element-id="element-849-1761788125776"
   style="cursor: pointer;" />
<path
   d="M394.797,178.376 394.797,177.195 395.387,178.376 z"
   id="path555"
   data-element-id="element-850-1761788125776"
   style="cursor: pointer;" />
<path
   d="M395.387,178.376 394.797,177.195 395.387,177.195 z"
   id="path556"
   data-element-id="element-851-1761788125776"
   style="cursor: pointer;" />
<path
   d="M394.797,175.542 394.797,174.675 395.387,175.887 z"
   id="path557"
   data-element-id="element-852-1761788125776"
   style="cursor: pointer;" />
<path
   d="M395.387,175.887 394.797,174.675 395.387,174.519 z"
   id="path558"
   data-element-id="element-853-1761788125776"
   style="cursor: pointer;" />
<path
   d="M395.387,181.051 395.387,179.684 397.63,179.742 z"
   id="path559"
   data-element-id="element-854-1761788125776"
   style="cursor: pointer;" />
<path
   d="M397.63,179.742 395.387,179.684 397.63,178.376 z"
   id="path560"
   data-element-id="element-855-1761788125776"
   style="cursor: pointer;" />
<path
   d="M395.387,178.376 395.387,177.195 397.63,178.376 z"
   id="path561"
   data-element-id="element-856-1761788125776"
   style="cursor: pointer;" />
<path
   d="M397.63,178.376 395.387,177.195 397.63,177.195 z"
   id="path562"
   data-element-id="element-857-1761788125776"
   style="cursor: pointer;" />
<path
   d="M395.387,175.887 395.387,174.519 397.63,177.195 z"
   id="path563"
   data-element-id="element-858-1761788125776"
   style="cursor: pointer;" />
<path
   d="M397.63,177.195 395.387,174.519 397.63,175.828 z"
   id="path564"
   data-element-id="element-859-1761788125776"
   style="cursor: pointer;" />
<path
   d="M397.63,179.742 397.63,178.376 397.63,179.742 z"
   id="path565"
   data-element-id="element-860-1761788125776"
   style="cursor: pointer;" />
<path
   d="M397.63,179.742 397.63,178.376 397.63,178.376 z"
   id="path566"
   data-element-id="element-861-1761788125776"
   style="cursor: pointer;" />
<path
   d="M397.63,178.376 397.63,177.195 397.63,178.376 z"
   id="path567"
   data-element-id="element-862-1761788125776"
   style="cursor: pointer;" />
<path
   d="M397.63,178.376 397.63,177.195 397.63,177.195 z"
   id="path568"
   data-element-id="element-863-1761788125776"
   style="cursor: pointer;" />
<path
   d="M397.63,177.195 397.63,175.828 397.63,177.195 z"
   id="path569"
   data-element-id="element-864-1761788125776"
   style="cursor: pointer;" />
<path
   d="M397.63,177.195 397.63,175.828 397.63,175.828 z"
   id="path570"
   data-element-id="element-865-1761788125776"
   style="cursor: pointer;" />
<path
   d="M397.63,179.742 397.63,178.376 398.642,179.152 z"
   id="path571"
   data-element-id="element-866-1761788125776"
   style="cursor: pointer;" />
<path
   d="M398.642,179.152 397.63,178.376 398.642,178.376 z"
   id="path572"
   data-element-id="element-867-1761788125776"
   style="cursor: pointer;" />
<path
   d="M397.63,178.376 397.63,177.195 398.642,177.785 z"
   id="path573"
   data-element-id="element-868-1761788125776"
   style="cursor: pointer;" />
<path
   d="M397.63,177.195 397.63,175.828 398.642,177.195 z"
   id="path574"
   data-element-id="element-869-1761788125776"
   style="cursor: pointer;" />
<path
   d="M398.642,177.195 397.63,175.828 398.642,176.419 z"
   id="path575"
   data-element-id="element-870-1761788125776"
   style="cursor: pointer;" />
<path
   d="M398.642,179.152 398.642,178.376 399.519,178.64 z"
   id="path576"
   data-element-id="element-871-1761788125776"
   style="cursor: pointer;" />
<path
   d="M399.519,178.64 398.642,178.376 399.519,178.376 z"
   id="path577"
   data-element-id="element-872-1761788125776"
   style="cursor: pointer;" />
<path
   d="M399.519,178.297 398.642,177.785 399.519,177.274 z"
   id="path578"
   data-element-id="element-873-1761788125776"
   style="cursor: pointer;" />
<path
   d="M398.642,177.195 398.642,176.419 399.519,177.195 z"
   id="path579"
   data-element-id="element-874-1761788125776"
   style="cursor: pointer;" />
<path
   d="M399.519,177.195 398.642,176.419 399.519,176.931 z"
   id="path580"
   data-element-id="element-875-1761788125776"
   style="cursor: pointer;" />
<path
   d="M399.519,178.64 399.519,178.376 399.81,178.47 z"
   id="path581"
   data-element-id="element-876-1761788125776"
   style="cursor: pointer;" />
<path
   d="M399.81,178.47 399.519,178.376 399.81,178.376 z"
   id="path582"
   data-element-id="element-877-1761788125776"
   style="cursor: pointer;" />
<path
   d="M399.519,177.195 399.519,176.931 399.81,177.195 z"
   id="path583"
   data-element-id="element-878-1761788125776"
   style="cursor: pointer;" />
<path
   d="M399.81,177.195 399.519,176.931 399.81,177.101 z"
   id="path584"
   data-element-id="element-879-1761788125776"
   style="cursor: pointer;" />
<path
   d="M399.81,178.47 399.81,177.101 400.983,177.785 z"
   id="path585"
   data-element-id="element-880-1761788125776"
   style="cursor: pointer;" />
</g>
<g
   clip-path="url(#clipId0)"
   fill="#00b0f0"
   stroke="#00b0f0"
   stroke-width="1"
   id="g847"
   data-element-id="element-881-1761788125776"
   transform="matrix(0.98374974,0,0,1.0005545,16.365737,-0.10076363)">
<path
   d="m 577.53996,178.376 v -1.181 l 1.441,1.181 z"
   id="path586"
   data-element-id="element-882-1761788125776" />
<path
   d="m 578.98096,178.376 -1.441,-1.181 h 1.441 z"
   id="path587"
   data-element-id="element-883-1761788125776" />
<path
   d="m 579.19296,180.895 -0.212,-0.056 0.212,-0.811 z"
   id="path588"
   data-element-id="element-884-1761788125776" />
<path
   d="m 581.014,178.376 v -1.181 l 0.212,1.181 z"
   id="path589"
   data-element-id="element-885-1761788125776" />
<path
   d="m 579.19296,178.376 -0.212,-1.181 h 0.212 z"
   id="path590"
   data-element-id="element-886-1761788125776" />
<path
   d="m 579.19296,175.542 -0.212,-0.81 0.212,-0.057 z"
   id="path591"
   data-element-id="element-887-1761788125776" />
<path
   d="m 579.19296,180.895 v -0.867 l 0.59,1.023 z"
   id="path592"
   data-element-id="element-888-1761788125776" />
<path
   d="m 579.78296,181.051 -0.59,-1.023 0.59,-0.344 z"
   id="path593"
   data-element-id="element-889-1761788125776" />
<path
   d="m 581.226,178.376 v -1.181 l 0.59,1.181 z"
   id="path594"
   data-element-id="element-890-1761788125776" />
<path
   d="m 579.78296,178.376 -0.59,-1.181 h 0.59 z"
   id="path595"
   data-element-id="element-891-1761788125776" />
<path
   d="m 579.19296,175.542 v -0.867 l 0.59,1.212 z"
   id="path596"
   data-element-id="element-892-1761788125776" />
<path
   d="m 579.78296,175.887 -0.59,-1.212 0.59,-0.156 z"
   id="path597"
   data-element-id="element-893-1761788125776" />
<path
   d="m 579.78296,181.051 v -1.367 l 2.243,0.058 z"
   id="path598"
   data-element-id="element-894-1761788125776" />
<path
   d="m 582.02596,179.742 -2.243,-0.058 2.243,-1.308 z"
   id="path599"
   data-element-id="element-895-1761788125776" />
<path
   d="m 579.78296,178.376 v -1.181 l 2.243,1.181 z"
   id="path600"
   data-element-id="element-896-1761788125776" />
<path
   d="m 582.02596,178.376 -2.243,-1.181 h 2.243 z"
   id="path601"
   data-element-id="element-897-1761788125776" />
<path
   d="m 579.78296,175.887 v -1.368 l 2.243,2.676 z"
   id="path602"
   data-element-id="element-898-1761788125776" />
<path
   d="m 582.02596,177.195 -2.243,-2.676 2.243,1.309 z"
   id="path603"
   data-element-id="element-899-1761788125776" />
<path
   d="m 579.99292,179.742 v -1.366 l 10e-4,1.366 z"
   id="path604"
   data-element-id="element-900-1761788125776" />
<path
   d="m 582.02696,179.742 -10e-4,-1.366 h 10e-4 z"
   id="path605"
   data-element-id="element-901-1761788125776" />
<path
   d="m 579.99292,178.376 v -1.181 l 10e-4,1.181 z"
   id="path606"
   data-element-id="element-902-1761788125776" />
<path
   d="m 579.99392,178.376 -10e-4,-1.181 h 10e-4 z"
   id="path607"
   data-element-id="element-903-1761788125776" />
<path
   d="m 579.99292,177.195 v -1.367 l 10e-4,1.367 z"
   id="path608"
   data-element-id="element-904-1761788125776" />
<path
   d="m 579.99392,177.195 -10e-4,-1.367 h 10e-4 z"
   id="path609"
   data-element-id="element-905-1761788125776" />
<path
   d="m 582.02696,179.742 v -1.366 l 1.011,0.776 z"
   id="path610"
   data-element-id="element-906-1761788125776" />
<path
   d="m 583.03796,179.152 -1.011,-0.776 h 1.011 z"
   id="path611"
   data-element-id="element-907-1761788125776" />
<path
   d="m 579.99392,178.376 v -1.181 l 1.011,0.59 z"
   id="path612"
   data-element-id="element-908-1761788125776" />
<path
   d="m 582.02696,177.195 v -1.367 l 1.011,1.367 z"
   id="path613"
   data-element-id="element-909-1761788125776" />
<path
   d="m 583.03796,177.195 -1.011,-1.367 1.011,0.591 z"
   id="path614"
   data-element-id="element-910-1761788125776" />
<path
   d="m 583.03796,179.152 v -0.776 l 0.877,0.264 z"
   id="path615"
   data-element-id="element-911-1761788125776" />
<path
   d="m 583.91496,178.64 -0.877,-0.264 h 0.877 z"
   id="path616"
   data-element-id="element-912-1761788125776" />
<path
   d="m 583.91496,178.297 -0.877,-0.512 0.877,-0.511 z"
   id="path617"
   data-element-id="element-913-1761788125776" />
<path
   d="m 583.03796,177.195 v -0.776 l 0.877,0.776 z"
   id="path618"
   data-element-id="element-914-1761788125776" />
<path
   d="m 583.91496,177.195 -0.877,-0.776 0.877,0.512 z"
   id="path619"
   data-element-id="element-915-1761788125776" />
<path
   d="m 583.91496,178.64 v -0.264 l 0.292,0.094 z"
   id="path620"
   data-element-id="element-916-1761788125776" />
<path
   d="m 584.20696,178.47 -0.292,-0.094 h 0.292 z"
   id="path621"
   data-element-id="element-917-1761788125776" />
<path
   d="m 581.88192,177.195 v -0.264 l 0.292,0.264 z"
   id="path622"
   data-element-id="element-918-1761788125776" />
<path
   d="m 584.20696,177.195 -0.292,-0.264 0.292,0.17 z"
   id="path623"
   data-element-id="element-919-1761788125776" />
<path
   d="m 584.20696,178.47 v -1.369 l 1.172,0.684 z"
   id="path624"
   data-element-id="element-920-1761788125776" />
<path
   d="m 752.875,178.376 v -1.181 l 1.44,1.181 z"
   id="path625"
   data-element-id="element-921-1761788125776" />
<path
   d="m 754.315,178.376 -1.44,-1.181 h 1.44 z"
   id="path626"
   data-element-id="element-922-1761788125776" />
<path
   d="m 754.528,180.895 -0.213,-0.056 0.213,-0.811 z"
   id="path627"
   data-element-id="element-923-1761788125776" />
<path
   d="m 754.315,178.376 v -1.181 l 0.213,1.181 z"
   id="path628"
   data-element-id="element-924-1761788125776" />
<path
   d="m 754.528,178.376 -0.213,-1.181 h 0.213 z"
   id="path629"
   data-element-id="element-925-1761788125776" />
<path
   d="m 754.528,175.542 -0.213,-0.81 0.213,-0.057 z"
   id="path630"
   data-element-id="element-926-1761788125776" />
<path
   d="m 754.528,180.895 v -0.867 l 0.59,1.023 z"
   id="path631"
   data-element-id="element-927-1761788125776" />
<path
   d="m 755.118,181.051 -0.59,-1.023 0.59,-0.344 z"
   id="path632"
   data-element-id="element-928-1761788125776" />
<path
   d="m 754.528,178.376 v -1.181 l 0.59,1.181 z"
   id="path633"
   data-element-id="element-929-1761788125776" />
<path
   d="m 755.118,178.376 -0.59,-1.181 h 0.59 z"
   id="path634"
   data-element-id="element-930-1761788125776" />
<path
   d="m 754.528,175.542 v -0.867 l 0.59,1.212 z"
   id="path635"
   data-element-id="element-931-1761788125776" />
<path
   d="m 755.118,175.887 -0.59,-1.212 0.59,-0.156 z"
   id="path636"
   data-element-id="element-932-1761788125776" />
<path
   d="m 755.118,181.051 v -1.367 l 2.243,0.058 z"
   id="path637"
   data-element-id="element-933-1761788125776" />
<path
   d="m 757.361,179.742 -2.243,-0.058 2.243,-1.308 z"
   id="path638"
   data-element-id="element-934-1761788125776" />
<path
   d="m 755.118,178.376 v -1.181 l 2.243,1.181 z"
   id="path639"
   data-element-id="element-935-1761788125776" />
<path
   d="m 757.361,178.376 -2.243,-1.181 h 2.243 z"
   id="path640"
   data-element-id="element-936-1761788125776" />
<path
   d="m 755.118,175.887 v -1.368 l 2.243,2.676 z"
   id="path641"
   data-element-id="element-937-1761788125776" />
<path
   d="m 757.361,177.195 -2.243,-2.676 2.243,1.309 z"
   id="path642"
   data-element-id="element-938-1761788125776" />
<path
   d="m 757.361,179.742 v -1.366 z"
   id="path643"
   data-element-id="element-939-1761788125776" />
<path
   d="m 757.361,179.742 v -1.366 0 z"
   id="path644"
   data-element-id="element-940-1761788125776" />
<path
   d="m 757.361,178.376 v -1.181 z"
   id="path645"
   data-element-id="element-941-1761788125776" />
<path
   d="m 757.361,178.376 v -1.181 0 z"
   id="path646"
   data-element-id="element-942-1761788125776" />
<path
   d="m 757.361,177.195 v -1.367 z"
   id="path647"
   data-element-id="element-943-1761788125776" />
<path
   d="m 757.361,177.195 v -1.367 0 z"
   id="path648"
   data-element-id="element-944-1761788125776" />
<path
   d="m 757.361,179.742 v -1.366 l 1.012,0.776 z"
   id="path649"
   data-element-id="element-945-1761788125776" />
<path
   d="m 758.373,179.152 -1.012,-0.776 h 1.012 z"
   id="path650"
   data-element-id="element-946-1761788125776" />
<path
   d="m 757.361,178.376 v -1.181 l 1.012,0.59 z"
   id="path651"
   data-element-id="element-947-1761788125776" />
<path
   d="m 757.361,177.195 v -1.367 l 1.012,1.367 z"
   id="path652"
   data-element-id="element-948-1761788125776" />
<path
   d="m 758.373,177.195 -1.012,-1.367 1.012,0.591 z"
   id="path653"
   data-element-id="element-949-1761788125776" />
<path
   d="m 758.373,179.152 v -0.776 l 0.877,0.264 z"
   id="path654"
   data-element-id="element-950-1761788125776" />
<path
   d="m 759.25,178.64 -0.877,-0.264 h 0.877 z"
   id="path655"
   data-element-id="element-951-1761788125776" />
<path
   d="m 759.25,178.297 -0.877,-0.512 0.877,-0.511 z"
   id="path656"
   data-element-id="element-952-1761788125776" />
<path
   d="m 758.373,177.195 v -0.776 l 0.877,0.776 z"
   id="path657"
   data-element-id="element-953-1761788125776" />
<path
   d="m 759.25,177.195 -0.877,-0.776 0.877,0.512 z"
   id="path658"
   data-element-id="element-954-1761788125776" />
<path
   d="m 759.25,178.64 v -0.264 l 0.291,0.094 z"
   id="path659"
   data-element-id="element-955-1761788125776" />
<path
   d="m 759.541,178.47 -0.291,-0.094 h 0.291 z"
   id="path660"
   data-element-id="element-956-1761788125776" />
<path
   d="m 759.25,177.195 v -0.264 l 0.291,0.264 z"
   id="path661"
   data-element-id="element-957-1761788125776" />
<path
   d="m 759.541,177.195 -0.291,-0.264 0.291,0.17 z"
   id="path662"
   data-element-id="element-958-1761788125776" />
<path
   d="m 759.541,178.47 v -1.369 l 1.173,0.684 z"
   id="path663"
   data-element-id="element-959-1761788125776" />
<path
   d="m 576.016,250.336 -1.165,-0.68 1.165,-0.68 z"
   id="path664"
   data-element-id="element-960-1761788125776" />
<path
   d="m 576.016,250.336 v -0.09 l 0.299,0.264 z"
   id="path665"
   data-element-id="element-961-1761788125776" />
<path
   d="m 576.315,250.51 -0.299,-0.264 h 0.299 z"
   id="path666"
   data-element-id="element-962-1761788125776" />
<path
   d="m 576.016,249.066 v -0.09 l 0.299,0.09 z"
   id="path667"
   data-element-id="element-963-1761788125776" />
<path
   d="m 576.315,249.066 -0.299,-0.09 0.299,-0.175 z"
   id="path668"
   data-element-id="element-964-1761788125776" />
<path
   d="m 576.315,250.51 v -0.264 l 0.877,0.776 z"
   id="path669"
   data-element-id="element-965-1761788125776" />
<path
   d="m 577.192,251.022 -0.877,-0.776 h 0.877 z"
   id="path670"
   data-element-id="element-966-1761788125776" />
<path
   d="m 576.315,250.167 v -1.023 l 0.877,0.512 z"
   id="path671"
   data-element-id="element-967-1761788125776" />
<path
   d="m 576.315,249.066 v -0.265 l 0.877,0.265 z"
   id="path672"
   data-element-id="element-968-1761788125776" />
<path
   d="m 577.192,249.066 -0.877,-0.265 0.877,-0.511 z"
   id="path673"
   data-element-id="element-969-1761788125776" />
<path
   d="m 577.192,251.022 v -0.776 l 1.012,1.367 z"
   id="path674"
   data-element-id="element-970-1761788125776" />
<path
   d="m 578.204,251.613 -1.012,-1.367 h 1.012 z"
   id="path675"
   data-element-id="element-971-1761788125776" />
<path
   d="m 578.204,250.246 -1.012,-0.59 1.012,-0.59 z"
   id="path676"
   data-element-id="element-972-1761788125776" />
<path
   d="m 577.192,249.066 v -0.776 l 1.012,0.776 z"
   id="path677"
   data-element-id="element-973-1761788125776" />
<path
   d="m 578.204,249.066 -1.012,-0.776 1.012,-0.591 z"
   id="path678"
   data-element-id="element-974-1761788125776" />
<path
   d="m 578.204,251.613 v -1.367 z"
   id="path679"
   data-element-id="element-975-1761788125776" />
<path
   d="m 578.204,251.613 v -1.367 0 z"
   id="path680"
   data-element-id="element-976-1761788125776" />
<path
   d="m 578.204,250.246 v -1.18 z"
   id="path681"
   data-element-id="element-977-1761788125776" />
<path
   d="m 578.204,250.246 v -1.18 0 z"
   id="path682"
   data-element-id="element-978-1761788125776" />
<path
   d="m 578.204,249.066 v -1.367 z"
   id="path683"
   data-element-id="element-979-1761788125776" />
<path
   d="m 578.204,249.066 v -1.367 0 z"
   id="path684"
   data-element-id="element-980-1761788125776" />
<path
   d="m 578.204,251.613 v -1.367 l 2.243,2.676 z"
   id="path685"
   data-element-id="element-981-1761788125776" />
<path
   d="m 580.447,252.922 -2.243,-2.676 2.243,1.309 z"
   id="path686"
   data-element-id="element-982-1761788125776" />
<path
   d="m 578.204,250.246 v -1.18 l 2.243,1.18 z"
   id="path687"
   data-element-id="element-983-1761788125776" />
<path
   d="m 580.447,250.246 -2.243,-1.18 h 2.243 z"
   id="path688"
   data-element-id="element-984-1761788125776" />
<path
   d="m 578.204,249.066 v -1.367 l 2.243,0.058 z"
   id="path689"
   data-element-id="element-985-1761788125776" />
<path
   d="m 580.447,247.757 -2.243,-0.058 2.243,-1.309 z"
   id="path690"
   data-element-id="element-986-1761788125776" />
<path
   d="m 580.447,252.922 v -1.367 l 0.59,1.211 z"
   id="path691"
   data-element-id="element-987-1761788125776" />
<path
   d="m 581.037,252.766 -0.59,-1.211 0.59,0.344 z"
   id="path692"
   data-element-id="element-988-1761788125776" />
<path
   d="m 580.447,250.246 v -1.18 l 0.59,1.18 z"
   id="path693"
   data-element-id="element-989-1761788125776" />
<path
   d="m 581.037,250.246 -0.59,-1.18 h 0.59 z"
   id="path694"
   data-element-id="element-990-1761788125776" />
<path
   d="m 580.447,247.757 v -1.367 l 0.59,1.023 z"
   id="path695"
   data-element-id="element-991-1761788125776" />
<path
   d="m 581.037,247.413 -0.59,-1.023 0.59,0.156 z"
   id="path696"
   data-element-id="element-992-1761788125776" />
<path
   d="m 581.037,252.766 v -0.867 l 0.213,0.81 z"
   id="path697"
   data-element-id="element-993-1761788125776" />
<path
   d="m 581.037,250.246 v -1.18 l 0.213,1.18 z"
   id="path698"
   data-element-id="element-994-1761788125776" />
<path
   d="m 581.25,250.246 -0.213,-1.18 h 0.213 z"
   id="path699"
   data-element-id="element-995-1761788125776" />
<path
   d="m 581.037,247.413 v -0.867 l 0.213,0.056 z"
   id="path700"
   data-element-id="element-996-1761788125776" />
<path
   d="m 581.25,250.246 v -1.18 l 1.535,1.18 z"
   id="path701"
   data-element-id="element-997-1761788125776" />
<path
   d="m 582.785,250.246 -1.535,-1.18 h 1.535 z"
   id="path702"
   data-element-id="element-998-1761788125776" />
<path
   d="m 574.851,323.628 v -1.181 l 1.535,1.181 z"
   id="path703"
   data-element-id="element-999-1761788125776" />
<path
   d="m 576.386,323.628 -1.535,-1.181 h 1.535 z"
   id="path704"
   data-element-id="element-1000-1761788125776" />
<path
   d="m 576.599,326.147 -0.213,-0.056 0.213,-0.81 z"
   id="path705"
   data-element-id="element-1001-1761788125776" />
<path
   d="m 576.386,323.628 v -1.181 l 0.213,1.181 z"
   id="path706"
   data-element-id="element-1002-1761788125776" />
<path
   d="m 576.599,323.628 -0.213,-1.181 h 0.213 z"
   id="path707"
   data-element-id="element-1003-1761788125776" />
<path
   d="m 576.599,320.795 -0.213,-0.811 0.213,-0.056 z"
   id="path708"
   data-element-id="element-1004-1761788125776" />
<path
   d="m 576.599,326.147 v -0.866 l 0.59,1.023 z"
   id="path709"
   data-element-id="element-1005-1761788125776" />
<path
   d="m 577.189,326.304 -0.59,-1.023 0.59,-0.345 z"
   id="path710"
   data-element-id="element-1006-1761788125776" />
<path
   d="m 576.599,323.628 v -1.181 l 0.59,1.181 z"
   id="path711"
   data-element-id="element-1007-1761788125776" />
<path
   d="m 577.189,323.628 -0.59,-1.181 h 0.59 z"
   id="path712"
   data-element-id="element-1008-1761788125776" />
<path
   d="m 576.599,320.795 v -0.867 l 0.59,1.211 z"
   id="path713"
   data-element-id="element-1009-1761788125776" />
<path
   d="m 577.189,321.139 -0.59,-1.211 0.59,-0.157 z"
   id="path714"
   data-element-id="element-1010-1761788125776" />
<path
   d="m 577.189,326.304 v -1.368 l 2.243,0.058 z"
   id="path715"
   data-element-id="element-1011-1761788125776" />
<path
   d="m 579.432,324.994 -2.243,-0.058 2.243,-1.308 z"
   id="path716"
   data-element-id="element-1012-1761788125776" />
<path
   d="m 577.189,323.628 v -1.181 l 2.243,1.181 z"
   id="path717"
   data-element-id="element-1013-1761788125776" />
<path
   d="m 579.432,323.628 -2.243,-1.181 h 2.243 z"
   id="path718"
   data-element-id="element-1014-1761788125776" />
<path
   d="m 577.189,321.139 v -1.368 l 2.243,2.676 z"
   id="path719"
   data-element-id="element-1015-1761788125776" />
<path
   d="m 579.432,322.447 -2.243,-2.676 2.243,1.31 z"
   id="path720"
   data-element-id="element-1016-1761788125776" />
<path
   d="m 579.432,324.994 v -1.366 z"
   id="path721"
   data-element-id="element-1017-1761788125776" />
<path
   d="m 579.432,324.994 v -1.366 0 z"
   id="path722"
   data-element-id="element-1018-1761788125776" />
<path
   d="m 579.432,323.628 v -1.181 z"
   id="path723"
   data-element-id="element-1019-1761788125776" />
<path
   d="m 579.432,323.628 v -1.181 0 z"
   id="path724"
   data-element-id="element-1020-1761788125776" />
<path
   d="m 579.432,322.447 v -1.366 z"
   id="path725"
   data-element-id="element-1021-1761788125776" />
<path
   d="m 579.432,322.447 v -1.366 0 z"
   id="path726"
   data-element-id="element-1022-1761788125776" />
<path
   d="m 579.432,324.994 v -1.366 l 1.012,0.776 z"
   id="path727"
   data-element-id="element-1023-1761788125776" />
<path
   d="m 580.444,324.404 -1.012,-0.776 h 1.012 z"
   id="path728"
   data-element-id="element-1024-1761788125776" />
<path
   d="m 579.432,323.628 v -1.181 l 1.012,0.591 z"
   id="path729"
   data-element-id="element-1025-1761788125776" />
<path
   d="m 579.432,322.447 v -1.366 l 1.012,1.366 z"
   id="path730"
   data-element-id="element-1026-1761788125776" />
<path
   d="m 580.444,322.447 -1.012,-1.366 1.012,0.59 z"
   id="path731"
   data-element-id="element-1027-1761788125776" />
<path
   d="m 580.444,324.404 v -0.776 l 0.877,0.264 z"
   id="path732"
   data-element-id="element-1028-1761788125776" />
<path
   d="m 581.321,323.892 -0.877,-0.264 h 0.877 z"
   id="path733"
   data-element-id="element-1029-1761788125776" />
<path
   d="m 581.321,323.549 -0.877,-0.511 0.877,-0.512 z"
   id="path734"
   data-element-id="element-1030-1761788125776" />
<path
   d="m 580.444,322.447 v -0.776 l 0.877,0.776 z"
   id="path735"
   data-element-id="element-1031-1761788125776" />
<path
   d="m 581.321,322.447 -0.877,-0.776 0.877,0.512 z"
   id="path736"
   data-element-id="element-1032-1761788125776" />
<path
   d="m 581.321,323.892 v -0.264 l 0.299,0.089 z"
   id="path737"
   data-element-id="element-1033-1761788125776" />
<path
   d="m 581.62,323.717 -0.299,-0.089 h 0.299 z"
   id="path738"
   data-element-id="element-1034-1761788125776" />
<path
   d="m 581.321,322.447 v -0.264 l 0.299,0.264 z"
   id="path739"
   data-element-id="element-1035-1761788125776" />
<path
   d="m 581.62,322.447 -0.299,-0.264 0.299,0.175 z"
   id="path740"
   data-element-id="element-1036-1761788125776" />
<path
   d="m 581.62,323.717 v -1.359 l 1.165,0.68 z"
   id="path741"
   data-element-id="element-1037-1761788125776" />
<path
   d="m 576.106,394.569 -1.164,-0.68 1.164,-0.68 z"
   id="path742"
   data-element-id="element-1038-1761788125776" />
<path
   d="m 576.106,394.569 v -0.09 l 0.299,0.265 z"
   id="path743"
   data-element-id="element-1039-1761788125776" />
<path
   d="m 576.405,394.744 -0.299,-0.265 h 0.299 z"
   id="path744"
   data-element-id="element-1040-1761788125776" />
<path
   d="m 576.106,393.299 v -0.09 l 0.299,0.09 z"
   id="path745"
   data-element-id="element-1041-1761788125776" />
<path
   d="m 576.405,393.299 -0.299,-0.09 0.299,-0.174 z"
   id="path746"
   data-element-id="element-1042-1761788125776" />
<path
   d="m 576.405,394.744 v -0.265 l 0.877,0.776 z"
   id="path747"
   data-element-id="element-1043-1761788125776" />
<path
   d="m 577.282,395.255 -0.877,-0.776 h 0.877 z"
   id="path748"
   data-element-id="element-1044-1761788125776" />
<path
   d="m 576.405,394.401 v -1.023 l 0.877,0.511 z"
   id="path749"
   data-element-id="element-1045-1761788125776" />
<path
   d="m 576.405,393.299 v -0.264 l 0.877,0.264 z"
   id="path750"
   data-element-id="element-1046-1761788125776" />
<path
   d="m 577.282,393.299 -0.877,-0.264 0.877,-0.512 z"
   id="path751"
   data-element-id="element-1047-1761788125776" />
<path
   d="m 577.282,395.255 v -0.776 l 1.012,1.367 z"
   id="path752"
   data-element-id="element-1048-1761788125776" />
<path
   d="m 578.294,395.846 -1.012,-1.367 h 1.012 z"
   id="path753"
   data-element-id="element-1049-1761788125776" />
<path
   d="m 578.294,394.479 -1.012,-0.59 1.012,-0.59 z"
   id="path754"
   data-element-id="element-1050-1761788125776" />
<path
   d="m 577.282,393.299 v -0.776 l 1.012,0.776 z"
   id="path755"
   data-element-id="element-1051-1761788125776" />
<path
   d="m 578.294,393.299 -1.012,-0.776 1.012,-0.591 z"
   id="path756"
   data-element-id="element-1052-1761788125776" />
<path
   d="m 578.294,395.846 v -1.367 l 2.243,2.676 z"
   id="path757"
   data-element-id="element-1053-1761788125776" />
<path
   d="m 580.537,397.155 -2.243,-2.676 2.243,1.309 z"
   id="path758"
   data-element-id="element-1054-1761788125776" />
<path
   d="m 578.294,394.479 v -1.18 l 2.243,1.18 z"
   id="path759"
   data-element-id="element-1055-1761788125776" />
<path
   d="m 580.537,394.479 -2.243,-1.18 h 2.243 z"
   id="path760"
   data-element-id="element-1056-1761788125776" />
<path
   d="m 578.294,393.299 v -1.367 l 2.243,0.058 z"
   id="path761"
   data-element-id="element-1057-1761788125776" />
<path
   d="m 580.537,391.99 -2.243,-0.058 2.243,-1.309 z"
   id="path762"
   data-element-id="element-1058-1761788125776" />
<path
   d="m 580.537,397.155 v -1.367 l 0.591,1.211 z"
   id="path763"
   data-element-id="element-1059-1761788125776" />
<path
   d="m 581.128,396.999 -0.591,-1.211 0.591,0.344 z"
   id="path764"
   data-element-id="element-1060-1761788125776" />
<path
   d="m 580.537,394.479 v -1.18 l 0.591,1.18 z"
   id="path765"
   data-element-id="element-1061-1761788125776" />
<path
   d="m 581.128,394.479 -0.591,-1.18 h 0.591 z"
   id="path766"
   data-element-id="element-1062-1761788125776" />
<path
   d="m 580.537,391.99 v -1.367 l 0.591,1.023 z"
   id="path767"
   data-element-id="element-1063-1761788125776" />
<path
   d="m 581.128,391.646 -0.591,-1.023 0.591,0.156 z"
   id="path768"
   data-element-id="element-1064-1761788125776" />
<path
   d="m 581.128,396.999 v -0.867 l 0.212,0.811 z"
   id="path769"
   data-element-id="element-1065-1761788125776" />
<path
   d="m 581.128,394.479 v -1.18 l 0.212,1.18 z"
   id="path770"
   data-element-id="element-1066-1761788125776" />
<path
   d="m 581.34,394.479 -0.212,-1.18 h 0.212 z"
   id="path771"
   data-element-id="element-1067-1761788125776" />
<path
   d="m 581.128,391.646 v -0.867 l 0.212,0.057 z"
   id="path772"
   data-element-id="element-1068-1761788125776" />
<path
   d="m 581.34,394.479 v -1.18 l 1.535,1.18 z"
   id="path773"
   data-element-id="element-1069-1761788125776" />
<path
   d="m 582.875,394.479 -1.535,-1.18 h 1.535 z"
   id="path774"
   data-element-id="element-1070-1761788125776" />
<path
   d="m 695.391,339.489 -1.165,-0.68 1.165,-0.679 z"
   id="path775"
   data-element-id="element-1071-1761788125776" />
<path
   d="M 695.391,339.489 V 339.4 l 0.299,0.264 z"
   id="path776"
   data-element-id="element-1072-1761788125776" />
<path
   d="m 695.69,339.664 -0.299,-0.264 h 0.299 z"
   id="path777"
   data-element-id="element-1073-1761788125776" />
<path
   d="m 695.391,338.219 v -0.089 l 0.299,0.089 z"
   id="path778"
   data-element-id="element-1074-1761788125776" />
<path
   d="m 695.69,338.219 -0.299,-0.089 0.299,-0.175 z"
   id="path779"
   data-element-id="element-1075-1761788125776" />
<path
   d="M 695.69,339.664 V 339.4 l 0.877,0.776 z"
   id="path780"
   data-element-id="element-1076-1761788125776" />
<path
   d="M 696.567,340.176 695.69,339.4 h 0.877 z"
   id="path781"
   data-element-id="element-1077-1761788125776" />
<path
   d="m 695.69,339.321 v -1.023 l 0.877,0.511 z"
   id="path782"
   data-element-id="element-1078-1761788125776" />
<path
   d="m 695.69,338.219 v -0.264 l 0.877,0.264 z"
   id="path783"
   data-element-id="element-1079-1761788125776" />
<path
   d="m 696.567,338.219 -0.877,-0.264 0.877,-0.512 z"
   id="path784"
   data-element-id="element-1080-1761788125776" />
<path
   d="M 696.567,340.176 V 339.4 l 1.012,1.366 z"
   id="path785"
   data-element-id="element-1081-1761788125776" />
<path
   d="m 697.579,340.766 -1.012,-1.366 h 1.012 z"
   id="path786"
   data-element-id="element-1082-1761788125776" />
<path
   d="m 697.579,339.4 -1.012,-0.591 1.012,-0.59 z"
   id="path787"
   data-element-id="element-1083-1761788125776" />
<path
   d="m 696.567,338.219 v -0.776 l 1.012,0.776 z"
   id="path788"
   data-element-id="element-1084-1761788125776" />
<path
   d="m 697.579,338.219 -1.012,-0.776 1.012,-0.591 z"
   id="path789"
   data-element-id="element-1085-1761788125776" />
<path
   d="M 697.579,340.766 V 339.4 Z"
   id="path790"
   data-element-id="element-1086-1761788125776" />
<path
   d="m 697.579,340.766 v -1.366 0 z"
   id="path791"
   data-element-id="element-1087-1761788125776" />
<path
   d="m 697.579,339.4 v -1.181 z"
   id="path792"
   data-element-id="element-1088-1761788125776" />
<path
   d="m 697.579,339.4 v -1.181 0 z"
   id="path793"
   data-element-id="element-1089-1761788125776" />
<path
   d="m 697.579,338.219 v -1.367 z"
   id="path794"
   data-element-id="element-1090-1761788125776" />
<path
   d="m 697.579,338.219 v -1.367 0 z"
   id="path795"
   data-element-id="element-1091-1761788125776" />
<path
   d="M 697.579,340.766 V 339.4 l 2.243,2.676 z"
   id="path796"
   data-element-id="element-1092-1761788125776" />
<path
   d="m 699.822,342.076 -2.243,-2.676 2.243,1.308 z"
   id="path797"
   data-element-id="element-1093-1761788125776" />
<path
   d="m 697.579,339.4 v -1.181 l 2.243,1.181 z"
   id="path798"
   data-element-id="element-1094-1761788125776" />
<path
   d="m 699.822,339.4 -2.243,-1.181 h 2.243 z"
   id="path799"
   data-element-id="element-1095-1761788125776" />
<path
   d="m 697.579,338.219 v -1.367 l 2.243,0.059 z"
   id="path800"
   data-element-id="element-1096-1761788125776" />
<path
   d="m 699.822,336.911 -2.243,-0.059 2.243,-1.309 z"
   id="path801"
   data-element-id="element-1097-1761788125776" />
<path
   d="m 699.822,342.076 v -1.368 l 0.59,1.211 z"
   id="path802"
   data-element-id="element-1098-1761788125776" />
<path
   d="m 700.412,341.919 -0.59,-1.211 0.59,0.344 z"
   id="path803"
   data-element-id="element-1099-1761788125776" />
<path
   d="m 699.822,339.4 v -1.181 l 0.59,1.181 z"
   id="path804"
   data-element-id="element-1100-1761788125776" />
<path
   d="m 700.412,339.4 -0.59,-1.181 h 0.59 z"
   id="path805"
   data-element-id="element-1101-1761788125776" />
<path
   d="m 699.822,336.911 v -1.368 l 0.59,1.023 z"
   id="path806"
   data-element-id="element-1102-1761788125776" />
<path
   d="m 700.412,336.566 -0.59,-1.023 0.59,0.157 z"
   id="path807"
   data-element-id="element-1103-1761788125776" />
<path
   d="m 700.412,341.919 v -0.867 l 0.213,0.811 z"
   id="path808"
   data-element-id="element-1104-1761788125776" />
<path
   d="m 700.412,339.4 v -1.181 l 0.213,1.181 z"
   id="path809"
   data-element-id="element-1105-1761788125776" />
<path
   d="m 700.625,339.4 -0.213,-1.181 h 0.213 z"
   id="path810"
   data-element-id="element-1106-1761788125776" />
<path
   d="M 700.412,336.566 V 335.7 l 0.213,0.056 z"
   id="path811"
   data-element-id="element-1107-1761788125776" />
<path
   d="m 700.625,339.4 v -1.181 l 1.44,1.181 z"
   id="path812"
   data-element-id="element-1108-1761788125776" />
<path
   d="m 702.065,339.4 -1.44,-1.181 h 1.44 z"
   id="path813"
   data-element-id="element-1109-1761788125776" />
<path
   d="m 737.638,251.143 -0.212,-0.802 0.212,-0.364 z"
   id="path814"
   data-element-id="element-1110-1761788125776" />
<path
   d="m 737.638,251.143 v -1.166 l 0.811,0.954 z"
   id="path815"
   data-element-id="element-1111-1761788125776" />
<path
   d="m 738.449,250.931 -0.811,-0.954 0.811,-1.389 z"
   id="path816"
   data-element-id="element-1112-1761788125776" />
<path
   d="m 738.449,250.931 v -2.343 l 1.653,-0.49 z"
   id="path817"
   data-element-id="element-1113-1761788125776" />
<path
   d="m 740.102,248.098 -1.653,0.49 1.653,-2.832 z"
   id="path818"
   data-element-id="element-1114-1761788125776" />
<path
   d="m 740.102,252.584 v -4.486 l 0.078,4.486 z"
   id="path819"
   data-element-id="element-1115-1761788125776" />
<path
   d="m 740.18,252.584 -0.078,-4.486 0.078,-0.135 z"
   id="path820"
   data-element-id="element-1116-1761788125776" />
<path
   d="m 740.102,245.91 v -0.154 l 0.078,0.154 z"
   id="path821"
   data-element-id="element-1117-1761788125776" />
<path
   d="m 740.18,245.91 -0.078,-0.154 0.078,-0.135 z"
   id="path822"
   data-element-id="element-1118-1761788125776" />
<path
   d="m 740.18,252.584 v -4.621 l 0.512,4.621 z"
   id="path823"
   data-element-id="element-1119-1761788125776" />
<path
   d="m 740.692,252.584 -0.512,-4.621 0.512,-0.877 z"
   id="path824"
   data-element-id="element-1120-1761788125776" />
<path
   d="m 740.692,247.086 -0.512,-0.877 h 0.512 z"
   id="path825"
   data-element-id="element-1121-1761788125776" />
<path
   d="m 740.18,245.91 v -0.289 l 0.512,0.289 z"
   id="path826"
   data-element-id="element-1122-1761788125776" />
<path
   d="m 740.692,245.91 -0.512,-0.289 0.512,-0.876 z"
   id="path827"
   data-element-id="element-1123-1761788125776" />
<path
   d="m 740.692,252.584 v -5.498 z"
   id="path828"
   data-element-id="element-1124-1761788125776" />
<path
   d="m 740.692,252.584 v -5.498 0 z"
   id="path829"
   data-element-id="element-1125-1761788125776" />
<path
   d="m 740.692,247.086 v -0.877 z"
   id="path830"
   data-element-id="element-1126-1761788125776" />
<path
   d="m 740.692,247.086 v -0.877 0 z"
   id="path831"
   data-element-id="element-1127-1761788125776" />
<path
   d="m 740.692,245.91 v -1.165 z"
   id="path832"
   data-element-id="element-1128-1761788125776" />
<path
   d="m 740.692,245.91 v -1.165 0 z"
   id="path833"
   data-element-id="element-1129-1761788125776" />
<path
   d="m 740.692,252.584 v -5.498 l 0.512,5.498 z"
   id="path834"
   data-element-id="element-1130-1761788125776" />
<path
   d="m 741.204,252.584 -0.512,-5.498 0.512,0.877 z"
   id="path835"
   data-element-id="element-1131-1761788125776" />
<path
   d="m 740.692,247.086 v -0.877 h 0.512 z"
   id="path836"
   data-element-id="element-1132-1761788125776" />
<path
   d="m 740.692,245.91 v -1.165 l 0.512,1.165 z"
   id="path837"
   data-element-id="element-1133-1761788125776" />
<path
   d="m 741.204,245.91 -0.512,-1.165 0.512,0.876 z"
   id="path838"
   data-element-id="element-1134-1761788125776" />
<path
   d="m 741.204,252.584 v -4.621 l 0.078,4.621 z"
   id="path839"
   data-element-id="element-1135-1761788125776" />
<path
   d="m 741.282,252.584 -0.078,-4.621 0.078,0.135 z"
   id="path840"
   data-element-id="element-1136-1761788125776" />
<path
   d="m 741.204,245.91 v -0.289 l 0.078,0.289 z"
   id="path841"
   data-element-id="element-1137-1761788125776" />
<path
   d="m 741.282,245.91 -0.078,-0.289 0.078,0.135 z"
   id="path842"
   data-element-id="element-1138-1761788125776" />
<path
   d="m 741.282,248.098 v -2.342 l 1.653,5.175 z"
   id="path843"
   data-element-id="element-1139-1761788125776" />
<path
   d="m 742.935,250.931 -1.653,-5.175 1.653,2.832 z"
   id="path844"
   data-element-id="element-1140-1761788125776" />
<path
   d="m 742.935,250.931 v -2.343 l 0.811,2.555 z"
   id="path845"
   data-element-id="element-1141-1761788125776" />
<path
   d="m 743.746,251.143 -0.811,-2.555 0.811,1.388 z"
   id="path846"
   data-element-id="element-1142-1761788125776" />
<path
   d="m 743.746,251.143 v -1.167 l 0.212,0.365 z"
   id="path847"
   data-element-id="element-1143-1761788125776" />
</g>
<g
   clip-path="url(#clipId0)"
   fill="#00b050"
   stroke="#00b050"
   stroke-width="1"
   id="g946"
   data-element-id="element-1144-1761788125776"
   transform="matrix(1.0347291,0,0,0.99988639,-18.688759,0.03662478)">
<path
   d="m 382.095,323.533 v -1.18 l 1.44,1.18 z"
   id="path848"
   data-element-id="element-1145-1761788125776" />
<path
   d="m 383.535,323.533 -1.44,-1.18 h 1.44 z"
   id="path849"
   data-element-id="element-1146-1761788125776" />
<path
   d="m 383.747,326.053 -0.212,-0.056 0.212,-0.811 z"
   id="path850"
   data-element-id="element-1147-1761788125776" />
<path
   d="m 383.535,323.533 v -1.18 l 0.212,1.18 z"
   id="path851"
   data-element-id="element-1148-1761788125776" />
<path
   d="m 383.747,323.533 -0.212,-1.18 h 0.212 z"
   id="path852"
   data-element-id="element-1149-1761788125776" />
<path
   d="m 383.747,320.7 -0.212,-0.811 0.212,-0.056 z"
   id="path853"
   data-element-id="element-1150-1761788125776" />
<path
   d="m 383.747,326.053 v -0.867 l 0.591,1.023 z"
   id="path854"
   data-element-id="element-1151-1761788125776" />
<path
   d="m 384.338,326.209 -0.591,-1.023 0.591,-0.344 z"
   id="path855"
   data-element-id="element-1152-1761788125776" />
<path
   d="m 383.747,323.533 v -1.18 l 0.591,1.18 z"
   id="path856"
   data-element-id="element-1153-1761788125776" />
<path
   d="m 384.338,323.533 -0.591,-1.18 h 0.591 z"
   id="path857"
   data-element-id="element-1154-1761788125776" />
<path
   d="m 383.747,320.7 v -0.867 l 0.591,1.211 z"
   id="path858"
   data-element-id="element-1155-1761788125776" />
<path
   d="m 384.338,321.044 -0.591,-1.211 0.591,-0.156 z"
   id="path859"
   data-element-id="element-1156-1761788125776" />
<path
   d="m 384.338,326.209 v -1.367 l 2.243,0.058 z"
   id="path860"
   data-element-id="element-1157-1761788125776" />
<path
   d="m 386.581,324.9 -2.243,-0.058 2.243,-1.309 z"
   id="path861"
   data-element-id="element-1158-1761788125776" />
<path
   d="m 384.338,323.533 v -1.18 l 2.243,1.18 z"
   id="path862"
   data-element-id="element-1159-1761788125776" />
<path
   d="m 386.581,323.533 -2.243,-1.18 h 2.243 z"
   id="path863"
   data-element-id="element-1160-1761788125776" />
<path
   d="m 384.338,321.044 v -1.367 l 2.243,2.676 z"
   id="path864"
   data-element-id="element-1161-1761788125776" />
<path
   d="m 386.581,322.353 -2.243,-2.676 2.243,1.309 z"
   id="path865"
   data-element-id="element-1162-1761788125776" />
<path
   d="m 386.581,324.9 v -1.367 l 1.012,0.776 z"
   id="path866"
   data-element-id="element-1163-1761788125776" />
<path
   d="m 387.593,324.309 -1.012,-0.776 h 1.012 z"
   id="path867"
   data-element-id="element-1164-1761788125776" />
<path
   d="m 386.581,323.533 v -1.18 l 1.012,0.59 z"
   id="path868"
   data-element-id="element-1165-1761788125776" />
<path
   d="m 386.581,322.353 v -1.367 l 1.012,1.367 z"
   id="path869"
   data-element-id="element-1166-1761788125776" />
<path
   d="m 387.593,322.353 -1.012,-1.367 1.012,0.591 z"
   id="path870"
   data-element-id="element-1167-1761788125776" />
<path
   d="m 387.593,324.309 v -0.776 l 0.876,0.265 z"
   id="path871"
   data-element-id="element-1168-1761788125776" />
<path
   d="m 388.469,323.798 -0.876,-0.265 h 0.876 z"
   id="path872"
   data-element-id="element-1169-1761788125776" />
<path
   d="m 388.469,323.455 -0.876,-0.512 0.876,-0.511 z"
   id="path873"
   data-element-id="element-1170-1761788125776" />
<path
   d="m 387.593,322.353 v -0.776 l 0.876,0.776 z"
   id="path874"
   data-element-id="element-1171-1761788125776" />
<path
   d="m 388.469,322.353 -0.876,-0.776 0.876,0.512 z"
   id="path875"
   data-element-id="element-1172-1761788125776" />
<path
   d="m 388.469,323.798 v -0.265 l 0.3,0.09 z"
   id="path876"
   data-element-id="element-1173-1761788125776" />
<path
   d="m 388.769,323.623 -0.3,-0.09 h 0.3 z"
   id="path877"
   data-element-id="element-1174-1761788125776" />
<path
   d="m 388.469,322.353 v -0.264 l 0.3,0.264 z"
   id="path878"
   data-element-id="element-1175-1761788125776" />
<path
   d="m 388.769,322.353 -0.3,-0.264 0.3,0.174 z"
   id="path879"
   data-element-id="element-1176-1761788125776" />
<path
   d="m 388.769,323.623 v -1.36 l 1.164,0.68 z"
   id="path880"
   data-element-id="element-1177-1761788125776" />
<path
   d="m 414.898,250.808 -1.165,-0.68 1.165,-0.68 z"
   id="path881"
   data-element-id="element-1178-1761788125776" />
<path
   d="m 414.898,250.808 v -0.09 l 0.299,0.265 z"
   id="path882"
   data-element-id="element-1179-1761788125776" />
<path
   d="m 415.197,250.983 -0.299,-0.265 h 0.299 z"
   id="path883"
   data-element-id="element-1180-1761788125776" />
<path
   d="m 414.898,249.538 v -0.09 l 0.299,0.09 z"
   id="path884"
   data-element-id="element-1181-1761788125776" />
<path
   d="m 415.197,249.538 -0.299,-0.09 0.299,-0.174 z"
   id="path885"
   data-element-id="element-1182-1761788125776" />
<path
   d="m 415.197,250.983 v -0.265 l 0.877,0.776 z"
   id="path886"
   data-element-id="element-1183-1761788125776" />
<path
   d="m 416.074,251.494 -0.877,-0.776 h 0.877 z"
   id="path887"
   data-element-id="element-1184-1761788125776" />
<path
   d="m 415.197,250.64 v -1.023 l 0.877,0.511 z"
   id="path888"
   data-element-id="element-1185-1761788125776" />
<path
   d="m 415.197,249.538 v -0.264 l 0.877,0.264 z"
   id="path889"
   data-element-id="element-1186-1761788125776" />
<path
   d="m 416.074,249.538 -0.877,-0.264 0.877,-0.512 z"
   id="path890"
   data-element-id="element-1187-1761788125776" />
<path
   d="m 416.074,251.494 v -0.776 l 1.012,1.367 z"
   id="path891"
   data-element-id="element-1188-1761788125776" />
<path
   d="m 417.086,252.085 -1.012,-1.367 h 1.012 z"
   id="path892"
   data-element-id="element-1189-1761788125776" />
<path
   d="m 417.086,250.718 -1.012,-0.59 1.012,-0.59 z"
   id="path893"
   data-element-id="element-1190-1761788125776" />
<path
   d="m 416.074,249.538 v -0.776 l 1.012,0.776 z"
   id="path894"
   data-element-id="element-1191-1761788125776" />
<path
   d="m 417.086,249.538 -1.012,-0.776 1.012,-0.591 z"
   id="path895"
   data-element-id="element-1192-1761788125776" />
<path
   d="m 417.086,252.085 v -1.367 l 2.242,2.676 z"
   id="path896"
   data-element-id="element-1193-1761788125776" />
<path
   d="m 419.328,253.394 -2.242,-2.676 2.242,1.309 z"
   id="path897"
   data-element-id="element-1194-1761788125776" />
<path
   d="m 417.086,250.718 v -1.18 l 2.242,1.18 z"
   id="path898"
   data-element-id="element-1195-1761788125776" />
<path
   d="m 419.328,250.718 -2.242,-1.18 h 2.242 z"
   id="path899"
   data-element-id="element-1196-1761788125776" />
<path
   d="m 417.086,249.538 v -1.367 l 2.242,0.058 z"
   id="path900"
   data-element-id="element-1197-1761788125776" />
<path
   d="m 419.328,248.229 -2.242,-0.058 2.242,-1.309 z"
   id="path901"
   data-element-id="element-1198-1761788125776" />
<path
   d="m 419.328,253.394 v -1.367 l 0.591,1.211 z"
   id="path902"
   data-element-id="element-1199-1761788125776" />
<path
   d="m 419.919,253.238 -0.591,-1.211 0.591,0.344 z"
   id="path903"
   data-element-id="element-1200-1761788125776" />
<path
   d="m 419.328,250.718 v -1.18 l 0.591,1.18 z"
   id="path904"
   data-element-id="element-1201-1761788125776" />
<path
   d="m 419.919,250.718 -0.591,-1.18 h 0.591 z"
   id="path905"
   data-element-id="element-1202-1761788125776" />
<path
   d="m 419.328,248.229 v -1.367 l 0.591,1.023 z"
   id="path906"
   data-element-id="element-1203-1761788125776" />
<path
   d="m 419.919,247.885 -0.591,-1.023 0.591,0.156 z"
   id="path907"
   data-element-id="element-1204-1761788125776" />
<path
   d="m 419.919,253.238 v -0.867 l 0.212,0.811 z"
   id="path908"
   data-element-id="element-1205-1761788125776" />
<path
   d="m 419.919,250.718 v -1.18 l 0.212,1.18 z"
   id="path909"
   data-element-id="element-1206-1761788125776" />
<path
   d="m 420.131,250.718 -0.212,-1.18 h 0.212 z"
   id="path910"
   data-element-id="element-1207-1761788125776" />
<path
   d="m 419.919,247.885 v -0.867 l 0.212,0.057 z"
   id="path911"
   data-element-id="element-1208-1761788125776" />
<path
   d="m 420.131,250.718 v -1.18 l 1.441,1.18 z"
   id="path912"
   data-element-id="element-1209-1761788125776" />
<path
   d="m 421.572,250.718 -1.441,-1.18 h 1.441 z"
   id="path913"
   data-element-id="element-1210-1761788125776" />
<path
   d="m 416.031,395.305 -1.165,-0.68 1.165,-0.68 z"
   id="path914"
   data-element-id="element-1211-1761788125776" />
<path
   d="m 416.031,395.305 v -0.09 l 0.299,0.264 z"
   id="path915"
   data-element-id="element-1212-1761788125776" />
<path
   d="m 416.33,395.479 -0.299,-0.264 h 0.299 z"
   id="path916"
   data-element-id="element-1213-1761788125776" />
<path
   d="m 416.031,394.035 v -0.09 l 0.299,0.09 z"
   id="path917"
   data-element-id="element-1214-1761788125776" />
<path
   d="m 416.33,394.035 -0.299,-0.09 0.299,-0.175 z"
   id="path918"
   data-element-id="element-1215-1761788125776" />
<path
   d="m 416.33,395.479 v -0.264 l 0.877,0.776 z"
   id="path919"
   data-element-id="element-1216-1761788125776" />
<path
   d="m 417.207,395.991 -0.877,-0.776 h 0.877 z"
   id="path920"
   data-element-id="element-1217-1761788125776" />
<path
   d="m 416.33,395.136 v -1.023 l 0.877,0.512 z"
   id="path921"
   data-element-id="element-1218-1761788125776" />
<path
   d="m 416.33,394.035 v -0.265 l 0.877,0.265 z"
   id="path922"
   data-element-id="element-1219-1761788125776" />
<path
   d="m 417.207,394.035 -0.877,-0.265 0.877,-0.511 z"
   id="path923"
   data-element-id="element-1220-1761788125776" />
<path
   d="m 417.207,395.991 v -0.776 l 1.012,1.367 z"
   id="path924"
   data-element-id="element-1221-1761788125776" />
<path
   d="m 418.219,396.582 -1.012,-1.367 h 1.012 z"
   id="path925"
   data-element-id="element-1222-1761788125776" />
<path
   d="m 418.219,395.215 -1.012,-0.59 1.012,-0.59 z"
   id="path926"
   data-element-id="element-1223-1761788125776" />
<path
   d="m 417.207,394.035 v -0.776 l 1.012,0.776 z"
   id="path927"
   data-element-id="element-1224-1761788125776" />
<path
   d="m 418.219,394.035 -1.012,-0.776 1.012,-0.591 z"
   id="path928"
   data-element-id="element-1225-1761788125776" />
<path
   d="m 418.219,396.582 v -1.367 l 2.243,2.676 z"
   id="path929"
   data-element-id="element-1226-1761788125776" />
<path
   d="m 420.462,397.891 -2.243,-2.676 2.243,1.309 z"
   id="path930"
   data-element-id="element-1227-1761788125776" />
<path
   d="m 418.219,395.215 v -1.18 l 2.243,1.18 z"
   id="path931"
   data-element-id="element-1228-1761788125776" />
<path
   d="m 420.462,395.215 -2.243,-1.18 h 2.243 z"
   id="path932"
   data-element-id="element-1229-1761788125776" />
<path
   d="m 418.219,394.035 v -1.367 l 2.243,0.058 z"
   id="path933"
   data-element-id="element-1230-1761788125776" />
<path
   d="m 420.462,392.726 -2.243,-0.058 2.243,-1.309 z"
   id="path934"
   data-element-id="element-1231-1761788125776" />
<path
   d="m 420.462,397.891 v -1.367 l 0.59,1.211 z"
   id="path935"
   data-element-id="element-1232-1761788125776" />
<path
   d="m 421.052,397.735 -0.59,-1.211 0.59,0.344 z"
   id="path936"
   data-element-id="element-1233-1761788125776" />
<path
   d="m 420.462,395.215 v -1.18 l 0.59,1.18 z"
   id="path937"
   data-element-id="element-1234-1761788125776" />
<path
   d="m 421.052,395.215 -0.59,-1.18 h 0.59 z"
   id="path938"
   data-element-id="element-1235-1761788125776" />
<path
   d="m 420.462,392.726 v -1.367 l 0.59,1.023 z"
   id="path939"
   data-element-id="element-1236-1761788125776" />
<path
   d="m 421.052,392.382 -0.59,-1.023 0.59,0.156 z"
   id="path940"
   data-element-id="element-1237-1761788125776" />
<path
   d="m 421.052,397.735 v -0.867 l 0.213,0.81 z"
   id="path941"
   data-element-id="element-1238-1761788125776" />
<path
   d="m 421.052,395.215 v -1.18 l 0.213,1.18 z"
   id="path942"
   data-element-id="element-1239-1761788125776" />
<path
   d="m 421.265,395.215 -0.213,-1.18 h 0.213 z"
   id="path943"
   data-element-id="element-1240-1761788125776" />
<path
   d="m 421.052,392.382 v -0.867 l 0.213,0.056 z"
   id="path944"
   data-element-id="element-1241-1761788125776" />
<path
   d="m 421.265,395.215 v -1.18 l 1.44,1.18 z"
   id="path945"
   data-element-id="element-1242-1761788125776" />
<path
   d="m 422.705,395.215 -1.44,-1.18 h 1.44 z"
   id="path946"
   data-element-id="element-1243-1761788125776" />
</g>
<g
   clip-path="url(#clipId0)"
   fill="none"
   stroke="rgb(0,0,0)"
   stroke-width="0.7"
   id="g947"
   data-element-id="element-1244-1761788125776"
   style="stroke:#ffffff;stroke-opacity:1"
   transform="matrix(2.5008271,0,0,1,-1454.1527,0)">
<polyline
   points="956.304,615.998 967.542,615.998 "
   id="polyline946"
   data-element-id="element-1245-1761788125776"
   style="stroke:#ffffff;stroke-opacity:1" />
</g>
<g
   clip-path="url(#clipId0)"
   fill="rgb(0,176,80)"
   stroke="rgb(0,176,80)"
   stroke-width="1"
   id="g985"
   data-element-id="element-1246-1761788125776"
   style="cursor: pointer;">
<path
   d="M108.527,476.997 107.362,476.317 108.527,475.638 z"
   id="path947"
   data-element-id="element-1247-1761788125776"
   style="cursor: pointer;" />
<path
   d="M108.527,476.997 108.527,476.908 108.826,477.172 z"
   id="path948"
   data-element-id="element-1248-1761788125776"
   style="cursor: pointer;" />
<path
   d="M108.826,477.172 108.527,476.908 108.826,476.908 z"
   id="path949"
   data-element-id="element-1249-1761788125776"
   style="cursor: pointer;" />
<path
   d="M108.527,475.727 108.527,475.638 108.826,475.727 z"
   id="path950"
   data-element-id="element-1250-1761788125776"
   style="cursor: pointer;" />
<path
   d="M108.826,475.727 108.527,475.638 108.826,475.463 z"
   id="path951"
   data-element-id="element-1251-1761788125776"
   style="cursor: pointer;" />
<path
   d="M108.826,477.172 108.826,476.908 109.703,477.684 z"
   id="path952"
   data-element-id="element-1252-1761788125776"
   style="cursor: pointer;" />
<path
   d="M109.703,477.684 108.826,476.908 109.703,476.908 z"
   id="path953"
   data-element-id="element-1253-1761788125776"
   style="cursor: pointer;" />
<path
   d="M108.826,476.829 108.826,475.806 109.703,476.317 z"
   id="path954"
   data-element-id="element-1254-1761788125776"
   style="cursor: pointer;" />
<path
   d="M108.826,475.727 108.826,475.463 109.703,475.727 z"
   id="path955"
   data-element-id="element-1255-1761788125776"
   style="cursor: pointer;" />
<path
   d="M109.703,475.727 108.826,475.463 109.703,474.951 z"
   id="path956"
   data-element-id="element-1256-1761788125776"
   style="cursor: pointer;" />
<path
   d="M109.703,477.684 109.703,476.908 110.715,478.274 z"
   id="path957"
   data-element-id="element-1257-1761788125776"
   style="cursor: pointer;" />
<path
   d="M110.715,478.274 109.703,476.908 110.715,476.908 z"
   id="path958"
   data-element-id="element-1258-1761788125776"
   style="cursor: pointer;" />
<path
   d="M110.715,476.908 109.703,476.317 110.715,475.727 z"
   id="path959"
   data-element-id="element-1259-1761788125776"
   style="cursor: pointer;" />
<path
   d="M109.703,475.727 109.703,474.951 110.715,475.727 z"
   id="path960"
   data-element-id="element-1260-1761788125776"
   style="cursor: pointer;" />
<path
   d="M110.715,475.727 109.703,474.951 110.715,474.361 z"
   id="path961"
   data-element-id="element-1261-1761788125776"
   style="cursor: pointer;" />
<path
   d="M110.715,478.274 110.715,476.908 110.715,478.274 z"
   id="path962"
   data-element-id="element-1262-1761788125776"
   style="cursor: pointer;" />
<path
   d="M110.715,478.274 110.715,476.908 110.715,476.908 z"
   id="path963"
   data-element-id="element-1263-1761788125776"
   style="cursor: pointer;" />
<path
   d="M110.715,476.908 110.715,475.727 110.715,476.908 z"
   id="path964"
   data-element-id="element-1264-1761788125776"
   style="cursor: pointer;" />
<path
   d="M110.715,476.908 110.715,475.727 110.715,475.727 z"
   id="path965"
   data-element-id="element-1265-1761788125776"
   style="cursor: pointer;" />
<path
   d="M110.715,475.727 110.715,474.361 110.715,475.727 z"
   id="path966"
   data-element-id="element-1266-1761788125776"
   style="cursor: pointer;" />
<path
   d="M110.715,475.727 110.715,474.361 110.715,474.36 z"
   id="path967"
   data-element-id="element-1267-1761788125776"
   style="cursor: pointer;" />
<path
   d="M110.715,478.274 110.715,476.908 112.958,479.584 z"
   id="path968"
   data-element-id="element-1268-1761788125776"
   style="cursor: pointer;" />
<path
   d="M112.958,479.584 110.715,476.908 112.958,478.216 z"
   id="path969"
   data-element-id="element-1269-1761788125776"
   style="cursor: pointer;" />
<path
   d="M110.715,476.908 110.715,475.727 112.958,476.908 z"
   id="path970"
   data-element-id="element-1270-1761788125776"
   style="cursor: pointer;" />
<path
   d="M112.958,476.908 110.715,475.727 112.958,475.727 z"
   id="path971"
   data-element-id="element-1271-1761788125776"
   style="cursor: pointer;" />
<path
   d="M110.715,475.727 110.715,474.36 112.958,474.419 z"
   id="path972"
   data-element-id="element-1272-1761788125776"
   style="cursor: pointer;" />
<path
   d="M112.958,474.419 110.715,474.36 112.958,473.051 z"
   id="path973"
   data-element-id="element-1273-1761788125776"
   style="cursor: pointer;" />
<path
   d="M112.958,479.584 112.958,478.216 113.548,479.427 z"
   id="path974"
   data-element-id="element-1274-1761788125776"
   style="cursor: pointer;" />
<path
   d="M113.548,479.427 112.958,478.216 113.548,478.56 z"
   id="path975"
   data-element-id="element-1275-1761788125776"
   style="cursor: pointer;" />
<path
   d="M112.958,476.908 112.958,475.727 113.548,476.908 z"
   id="path976"
   data-element-id="element-1276-1761788125776"
   style="cursor: pointer;" />
<path
   d="M113.548,476.908 112.958,475.727 113.548,475.727 z"
   id="path977"
   data-element-id="element-1277-1761788125776"
   style="cursor: pointer;" />
<path
   d="M112.958,474.419 112.958,473.051 113.548,474.074 z"
   id="path978"
   data-element-id="element-1278-1761788125776"
   style="cursor: pointer;" />
<path
   d="M113.548,474.074 112.958,473.051 113.548,473.207 z"
   id="path979"
   data-element-id="element-1279-1761788125776"
   style="cursor: pointer;" />
<path
   d="M113.548,479.427 113.548,478.56 113.76,479.371 z"
   id="path980"
   data-element-id="element-1280-1761788125776"
   style="cursor: pointer;" />
<path
   d="M113.548,476.908 113.548,475.727 113.76,476.908 z"
   id="path981"
   data-element-id="element-1281-1761788125776"
   style="cursor: pointer;" />
<path
   d="M113.76,476.908 113.548,475.727 113.76,475.727 z"
   id="path982"
   data-element-id="element-1282-1761788125776"
   style="cursor: pointer;" />
<path
   d="M113.548,474.074 113.548,473.207 113.76,473.264 z"
   id="path983"
   data-element-id="element-1283-1761788125776"
   style="cursor: pointer;" />
<path
   d="M113.76,476.908 113.76,475.727 114.917,476.908 z"
   id="path984"
   data-element-id="element-1284-1761788125776"
   style="cursor: pointer;" />
<path
   d="M114.917,476.908 113.76,475.727 114.917,475.727 z"
   id="path985"
   data-element-id="element-1285-1761788125776"
   style="cursor: pointer;" />
</g>
<g
   clip-path="url(#clipId0)"
   fill="none"
   stroke="rgb(0,176,80)"
   stroke-width="0.7"
   id="g986"
   data-element-id="element-1286-1761788125776"
   style="cursor:pointer;stroke-width:1.5;stroke-dasharray:none">
<polyline
   points="139.756,342.682 151.844,342.682 "
   id="polyline985"
   data-element-id="element-1287-1761788125776"
   style="cursor:pointer;stroke-width:1.5;stroke-dasharray:none" />
<polyline
   points="58.4409,304.244 134.845,304.244 "
   id="polyline986"
   data-element-id="element-1288-1761788125776"
   style="cursor:pointer;stroke-width:1.5;stroke-dasharray:none" />
</g>
<g
   clip-path="url(#clipId0)"
   fill="rgb(0,176,80)"
   stroke="rgb(0,176,80)"
   stroke-width="1"
   id="g1018"
   data-element-id="element-1289-1761788125776"
   style="cursor: pointer;">
<path
   d="M107.582,343.361 106.418,342.682 107.582,342.002 z"
   id="path986"
   data-element-id="element-1290-1761788125776"
   style="cursor: pointer;" />
<path
   d="M107.582,343.361 107.582,343.272 107.881,343.536 z"
   id="path987"
   data-element-id="element-1291-1761788125776"
   style="cursor: pointer;" />
<path
   d="M107.881,343.536 107.582,343.272 107.881,343.272 z"
   id="path988"
   data-element-id="element-1292-1761788125776"
   style="cursor: pointer;" />
<path
   d="M107.582,342.091 107.582,342.002 107.881,342.091 z"
   id="path989"
   data-element-id="element-1293-1761788125776"
   style="cursor: pointer;" />
<path
   d="M107.881,342.091 107.582,342.002 107.881,341.827 z"
   id="path990"
   data-element-id="element-1294-1761788125776"
   style="cursor: pointer;" />
<path
   d="M107.881,343.536 107.881,343.272 108.758,344.048 z"
   id="path991"
   data-element-id="element-1295-1761788125776"
   style="cursor: pointer;" />
<path
   d="M108.758,344.048 107.881,343.272 108.758,343.272 z"
   id="path992"
   data-element-id="element-1296-1761788125776"
   style="cursor: pointer;" />
<path
   d="M107.881,343.193 107.881,342.17 108.758,342.682 z"
   id="path993"
   data-element-id="element-1297-1761788125776"
   style="cursor: pointer;" />
<path
   d="M107.881,342.091 107.881,341.827 108.758,342.091 z"
   id="path994"
   data-element-id="element-1298-1761788125776"
   style="cursor: pointer;" />
<path
   d="M108.758,342.091 107.881,341.827 108.758,341.315 z"
   id="path995"
   data-element-id="element-1299-1761788125776"
   style="cursor: pointer;" />
<path
   d="M108.758,344.048 108.758,343.272 109.77,344.638 z"
   id="path996"
   data-element-id="element-1300-1761788125776"
   style="cursor: pointer;" />
<path
   d="M109.77,344.638 108.758,343.272 109.77,343.272 z"
   id="path997"
   data-element-id="element-1301-1761788125776"
   style="cursor: pointer;" />
<path
   d="M109.77,343.272 108.758,342.682 109.77,342.091 z"
   id="path998"
   data-element-id="element-1302-1761788125776"
   style="cursor: pointer;" />
<path
   d="M108.758,342.091 108.758,341.315 109.77,342.091 z"
   id="path999"
   data-element-id="element-1303-1761788125776"
   style="cursor: pointer;" />
<path
   d="M109.77,342.091 108.758,341.315 109.77,340.725 z"
   id="path1000"
   data-element-id="element-1304-1761788125776"
   style="cursor: pointer;" />
<path
   d="M109.77,344.638 109.77,343.272 112.013,345.948 z"
   id="path1001"
   data-element-id="element-1305-1761788125776"
   style="cursor: pointer;" />
<path
   d="M112.013,345.948 109.77,343.272 112.013,344.58 z"
   id="path1002"
   data-element-id="element-1306-1761788125776"
   style="cursor: pointer;" />
<path
   d="M109.77,343.272 109.77,342.091 112.013,343.272 z"
   id="path1003"
   data-element-id="element-1307-1761788125776"
   style="cursor: pointer;" />
<path
   d="M112.013,343.272 109.77,342.091 112.013,342.091 z"
   id="path1004"
   data-element-id="element-1308-1761788125776"
   style="cursor: pointer;" />
<path
   d="M109.77,342.091 109.77,340.725 112.013,340.783 z"
   id="path1005"
   data-element-id="element-1309-1761788125776"
   style="cursor: pointer;" />
<path
   d="M112.013,340.783 109.77,340.725 112.013,339.415 z"
   id="path1006"
   data-element-id="element-1310-1761788125776"
   style="cursor: pointer;" />
<path
   d="M112.013,345.948 112.013,344.58 112.604,345.791 z"
   id="path1007"
   data-element-id="element-1311-1761788125776"
   style="cursor: pointer;" />
<path
   d="M112.604,345.791 112.013,344.58 112.604,344.925 z"
   id="path1008"
   data-element-id="element-1312-1761788125776"
   style="cursor: pointer;" />
<path
   d="M112.013,343.272 112.013,342.091 112.604,343.272 z"
   id="path1009"
   data-element-id="element-1313-1761788125776"
   style="cursor: pointer;" />
<path
   d="M112.604,343.272 112.013,342.091 112.604,342.091 z"
   id="path1010"
   data-element-id="element-1314-1761788125776"
   style="cursor: pointer;" />
<path
   d="M112.013,340.783 112.013,339.415 112.604,340.439 z"
   id="path1011"
   data-element-id="element-1315-1761788125776"
   style="cursor: pointer;" />
<path
   d="M112.604,340.439 112.013,339.415 112.604,339.572 z"
   id="path1012"
   data-element-id="element-1316-1761788125776"
   style="cursor: pointer;" />
<path
   d="M112.604,345.791 112.604,344.925 112.816,345.735 z"
   id="path1013"
   data-element-id="element-1317-1761788125776"
   style="cursor: pointer;" />
<path
   d="M112.604,343.272 112.604,342.091 112.816,343.272 z"
   id="path1014"
   data-element-id="element-1318-1761788125776"
   style="cursor: pointer;" />
<path
   d="M112.816,343.272 112.604,342.091 112.816,342.091 z"
   id="path1015"
   data-element-id="element-1319-1761788125776"
   style="cursor: pointer;" />
<path
   d="M112.604,340.439 112.604,339.572 112.816,339.628 z"
   id="path1016"
   data-element-id="element-1320-1761788125776"
   style="cursor: pointer;" />
<path
   d="M112.816,343.272 112.816,342.091 114.256,343.272 z"
   id="path1017"
   data-element-id="element-1321-1761788125776"
   style="cursor: pointer;" />
<path
   d="M114.256,343.272 112.816,342.091 114.256,342.091 z"
   id="path1018"
   data-element-id="element-1322-1761788125776"
   style="cursor: pointer;" />
</g>
<g
   clip-path="url(#clipId0)"
   fill="none"
   stroke="rgb(0,176,80)"
   stroke-width="0.7"
   id="g1019"
   data-element-id="element-1323-1761788125776"
   style="cursor:pointer;stroke-width:1.5;stroke-dasharray:none">
<polyline
   points="130.689,343.295 131.976,340.456 135.081,339.282 138.186,340.456 139.472,343.295 "
   id="polyline1018"
   data-element-id="element-1324-1761788125776"
   style="cursor:pointer;stroke-width:1.5;stroke-dasharray:none" />
</g>
<g
   clip-path="url(#clipId0)"
   fill="none"
   stroke="rgb(0,0,0)"
   stroke-width="0.7"
   id="g1020"
   data-element-id="element-1325-1761788125776"
   style="cursor:pointer;stroke:#ffffff;stroke-opacity:1">
<polyline
   points="959.208,242.242 958.209,250.952 955.745,259.3 951.888,267.103 946.71,274.179 "
   id="polyline1019"
   data-element-id="element-1326-1761788125776"
   style="cursor:pointer;stroke:#ffffff;stroke-opacity:1" />
</g>
<g
   id="g271"
   style="stroke:#ffffff;stroke-opacity:1;fill:#000000;fill-opacity:1"><g
     clip-path="url(#clipId0)"
     fill="none"
     stroke="rgb(0,0,0)"
     stroke-width="0.53"
     id="g80"
     data-element-id="element-112-1761788125775"
     style="cursor:pointer;stroke:#ffffff;stroke-opacity:1;fill:#000000;fill-opacity:1">
<polyline
   points="262.247,619.87 267.819,623.695 262.247,627.52 262.247,619.87 "
   id="polyline79"
   data-element-id="element-113-1761788125775"
   style="cursor:pointer;stroke:#ffffff;stroke-opacity:1;fill:#000000;fill-opacity:1" />
</g><g
     clip-path="url(#clipId0)"
     fill="none"
     stroke="rgb(0,0,0)"
     stroke-width="0.53"
     id="g82"
     data-element-id="element-116-1761788125775"
     style="cursor:pointer;stroke:#ffffff;stroke-opacity:1;fill:#000000;fill-opacity:1">
<polyline
   points="273.297,627.52 267.725,623.695 273.297,619.87 273.297,627.52 "
   id="polyline81"
   data-element-id="element-117-1761788125775"
   style="cursor:pointer;stroke:#ffffff;stroke-opacity:1;fill:#000000;fill-opacity:1" />
</g><g
     id="g270"
     style="stroke:#ffffff;stroke-opacity:1;fill:#000000;fill-opacity:1"><polyline
       points="920.227,624.025 920.227,617.131 "
       id="polyline1020-2"
       data-element-id="element-1328-1761788125776"
       transform="translate(-652.501,-0.8145457)"
       style="fill:#000000;stroke:#ffffff;stroke-width:0.53;stroke-opacity:1;fill-opacity:1"
       clip-path="url(#clipPath269)" /><polyline
       points="916.449,616.942 924.005,616.942 "
       id="polyline1021-3"
       data-element-id="element-1329-1761788125776"
       transform="translate(-652.501,-0.8145457)"
       style="fill:#000000;stroke:#ffffff;stroke-width:0.53;stroke-opacity:1;fill-opacity:1"
       clip-path="url(#clipPath268)" /></g></g>


<g
   clip-path="url(#clipId0)"
   fill="rgb(255,255,255)"
   stroke="rgb(255,255,255)"
   stroke-width="0.25"
   fill-opacity="0.498039"
   stroke-opacity="0.498039"
   id="g1022"
   data-element-id="element-1330-1761788125776"
   style="cursor: pointer;">
<path
   d="M914.56,619.87 920.132,623.695 914.56,627.52 914.56,627.52 z"
   id="path1021"
   data-element-id="element-1331-1761788125776"
   style="cursor: pointer;" />
</g>

<g
   clip-path="url(#clipId0)"
   fill="rgb(255,255,255)"
   stroke="rgb(255,255,255)"
   stroke-width="0.25"
   fill-opacity="0.498039"
   stroke-opacity="0.498039"
   id="g1024"
   data-element-id="element-1334-1761788125776"
   style="cursor: pointer;">
<path
   d="M925.61,627.52 920.132,623.695 925.61,619.87 925.61,619.87 z"
   id="path1023"
   data-element-id="element-1335-1761788125776"
   style="cursor: pointer;" />
</g>
<g
   id="g219"
   style="stroke:#ffffff;fill:#000000;fill-opacity:1;stroke-opacity:1"><g
     clip-path="url(#clipId0)"
     fill="none"
     stroke="rgb(0,0,0)"
     stroke-width="0.53"
     id="g1021"
     data-element-id="element-1327-1761788125776"
     style="cursor:pointer;stroke:#ffffff;fill:#000000;fill-opacity:1;stroke-opacity:1">
<polyline
   points="920.227,624.025 920.227,617.131 "
   id="polyline1020"
   data-element-id="element-1328-1761788125776"
   style="cursor:pointer;stroke:#ffffff;fill:#000000;fill-opacity:1;stroke-opacity:1" />
<polyline
   points="916.449,616.942 924.005,616.942 "
   id="polyline1021"
   data-element-id="element-1329-1761788125776"
   style="cursor:pointer;stroke:#ffffff;fill:#000000;fill-opacity:1;stroke-opacity:1" />
</g><g
     clip-path="url(#clipId0)"
     fill="none"
     stroke="rgb(0,0,0)"
     stroke-width="0.53"
     id="g1023"
     data-element-id="element-1332-1761788125776"
     style="cursor:pointer;stroke:#ffffff;fill:#000000;fill-opacity:1;stroke-opacity:1">
<polyline
   points="914.56,619.87 920.132,623.695 914.56,627.52 914.56,619.87 "
   id="polyline1022"
   data-element-id="element-1333-1761788125776"
   style="cursor:pointer;stroke:#ffffff;fill:#000000;fill-opacity:1;stroke-opacity:1" />
</g><g
     clip-path="url(#clipId0)"
     fill="none"
     stroke="rgb(0,0,0)"
     stroke-width="0.53"
     id="g1025"
     data-element-id="element-1336-1761788125776"
     style="cursor:pointer;stroke:#ffffff;fill:#000000;fill-opacity:1;stroke-opacity:1">
<polyline
   points="925.61,627.52 920.132,623.695 925.61,619.87 925.61,627.52 "
   id="polyline1024"
   data-element-id="element-1337-1761788125776"
   style="cursor:pointer;stroke:#ffffff;fill:#000000;fill-opacity:1;stroke-opacity:1" />
</g></g>
<g
   clip-path="url(#clipId0)"
   fill="none"
   stroke="rgb(0,0,0)"
   stroke-width="0.7"
   id="g1026"
   data-element-id="element-1338-1761788125776"
   style="cursor:pointer;stroke:#ffffff;stroke-opacity:1">
<polyline
   points="958.854,615.998 935.621,615.998 935.621,646.408 952.156,646.408 "
   id="polyline1025"
   data-element-id="element-1339-1761788125776"
   style="cursor:pointer;stroke:#ffffff;stroke-opacity:1" />
</g>




<g
   id="g216"
   transform="translate(-2.7137546,-2)"><g
     transform="matrix(0,0.3,-0.27,0,638.38,593.75)"
     id="g95"><rect
       x="40"
       y="50"
       width="40"
       height="40"
       rx="4"
       fill="#d0d0d0"
       stroke="#707070"
       stroke-width="2.5"
       id="rect65" /><rect
       x="42"
       y="52"
       width="36"
       height="8"
       fill="rgba(255,255,255,0.4)"
       id="rect66"
       style="fill:#ffffff;fill-opacity:0.49803904" /><rect
       x="42"
       y="80"
       width="36"
       height="8"
       fill="rgba(0,0,0,0.15)"
       id="rect71"
       style="fill:#ffffff;fill-opacity:0.49803904" /><rect
       x="52"
       y="30"
       width="16"
       height="22"
       rx="2"
       fill="#d0d0d0"
       stroke="#707070"
       stroke-width="2"
       id="rect73" /><rect
       x="53"
       y="31"
       width="14"
       height="5"
       fill="rgba(255,255,255,0.4)"
       id="rect74"
       style="fill:#ffffff;fill-opacity:0.49803904" /><ellipse
       cx="60"
       cy="20"
       rx="20"
       ry="9"
       fill="#ff8c00"
       stroke="#cc5500"
       stroke-width="2.5"
       id="ellipse74" /><ellipse
       cx="60"
       cy="17"
       rx="18"
       ry="7"
       fill="#ff7f00"
       id="ellipse75" /><line
       x1="42"
       y1="17"
       x2="78"
       y2="17"
       stroke="#994400"
       stroke-width="3"
       id="line75" /><line
       x1="60"
       y1="9"
       x2="60"
       y2="25"
       stroke="#994400"
       stroke-width="3"
       id="line76" /><circle
       cx="60"
       cy="17"
       r="4"
       fill="#ff7f00"
       id="circle95" /><ellipse
       cx="60"
       cy="14"
       rx="10"
       ry="3"
       fill="rgba(255,255,255,0.5)"
       id="ellipse95"
       style="fill:#ffffff;fill-opacity:0.49803904" /><rect
       x="57"
       y="24"
       width="6"
       height="8"
       fill="#a8a8a8"
       stroke="#707070"
       stroke-width="1"
       id="rect95" /></g></g>
<g
   clip-path="url(#clipId0)"
   fill="none"
   stroke="rgb(0,176,240)"
   stroke-width="0.7"
   id="g1032"
   data-element-id="element-1351-1761788125776"
   style="cursor:pointer;stroke-width:1.5;stroke-dasharray:none">
<polyline
   points="712.076,623.647 712.076,338.809 627.456,338.809 "
   id="polyline1031"
   data-element-id="element-1352-1761788125776"
   style="cursor:pointer;stroke-width:1.5;stroke-dasharray:none" />
</g>
<g
   clip-path="url(#clipId0)"
   fill="rgb(255,255,255)"
   stroke="rgb(255,255,255)"
   stroke-width="1"
   id="g1045"
   data-element-id="element-1353-1761788125776"
   style="cursor: pointer;">
<path
   d="M693.968,513.204 692.432,505.595 693.968,497.985 z"
   id="path1032"
   data-element-id="element-1354-1761788125776"
   style="cursor: pointer;" />
<path
   d="M693.968,513.204 693.968,497.985 698.158,519.418 z"
   id="path1033"
   data-element-id="element-1355-1761788125776"
   style="cursor: pointer;" />
<path
   d="M698.158,519.418 693.968,497.985 698.158,491.771 z"
   id="path1034"
   data-element-id="element-1356-1761788125776"
   style="cursor: pointer;" />
<path
   d="M698.158,519.418 698.158,491.771 704.372,523.608 z"
   id="path1035"
   data-element-id="element-1357-1761788125776"
   style="cursor: pointer;" />
<path
   d="M704.372,523.608 698.158,491.771 704.372,487.581 z"
   id="path1036"
   data-element-id="element-1358-1761788125776"
   style="cursor: pointer;" />
<path
   d="M704.372,523.608 704.372,487.581 711.982,525.144 z"
   id="path1037"
   data-element-id="element-1359-1761788125776"
   style="cursor: pointer;" />
<path
   d="M711.982,525.144 704.372,487.581 711.982,486.045 z"
   id="path1038"
   data-element-id="element-1360-1761788125776"
   style="cursor: pointer;" />
<path
   d="M711.982,525.144 711.982,486.045 719.592,523.608 z"
   id="path1039"
   data-element-id="element-1361-1761788125776"
   style="cursor: pointer;" />
<path
   d="M719.592,523.608 711.982,486.045 719.592,487.581 z"
   id="path1040"
   data-element-id="element-1362-1761788125776"
   style="cursor: pointer;" />
<path
   d="M719.592,523.608 719.592,487.581 725.806,519.418 z"
   id="path1041"
   data-element-id="element-1363-1761788125776"
   style="cursor: pointer;" />
<path
   d="M725.806,519.418 719.592,487.581 725.806,491.771 z"
   id="path1042"
   data-element-id="element-1364-1761788125776"
   style="cursor: pointer;" />
<path
   d="M725.806,519.418 725.806,491.771 729.995,513.204 z"
   id="path1043"
   data-element-id="element-1365-1761788125776"
   style="cursor: pointer;" />
<path
   d="M729.995,513.204 725.806,491.771 729.995,497.985 z"
   id="path1044"
   data-element-id="element-1366-1761788125776"
   style="cursor: pointer;" />
<path
   d="M729.995,513.204 729.995,497.985 731.531,505.595 z"
   id="path1045"
   data-element-id="element-1367-1761788125776"
   style="cursor: pointer;" />
</g>
<g
   id="SW_Pump_2"
   clip-path="url(#clipId0)"
   data-element-id="element-1368-1761788125776"
   style="cursor: pointer;">
    <circle
   cx="711.98"
   cy="505.59"
   r="16.956521739130437"
   fill="#06b6d4"
   stroke="none"
   opacity="0.9"
   data-element-id="element-1369-1761788125776"
   style="cursor: pointer;"
   id="circle170">
        <animate
   attributeName="opacity"
   values="0.8;1;0.8"
   dur="2s"
   repeatCount="indefinite" />
    </circle>
    <circle
   cx="711.98"
   cy="505.59"
   r="13.565217391304351"
   fill="#0891b2"
   stroke="none"
   data-element-id="element-1370-1761788125776"
   style="cursor: pointer;"
   id="circle171" />
    <g
   class="impeller-SW_Pump_2"
   data-element-id="element-1371-1761788125776"
   style="cursor: pointer;"
   id="g106">
        <circle
   cx="711.98"
   cy="505.59"
   r="10.682608695652176"
   fill="#0e7490"
   stroke="none"
   data-element-id="element-1372-1761788125776"
   style="cursor: pointer;"
   id="circle172" />
        <path
   d="M 711.98,494.9073913043478 L 714.3539130434783,499.8247826086956 L 711.98,505.59 Z"
   fill="#06b6d4"
   data-element-id="element-1373-1761788125776"
   style="cursor: pointer;"
   id="path103" />
        <path
   d="M 722.6626086956522,505.59 L 716.7278260869565,507.9639130434782 L 711.98,505.59 Z"
   fill="#06b6d4"
   data-element-id="element-1374-1761788125776"
   style="cursor: pointer;"
   id="path88" />
        <path
   d="M 711.98,516.2726086956521 L 709.6060869565217,510.3378260869565 L 711.98,505.59 Z"
   fill="#06b6d4"
   data-element-id="element-1375-1761788125776"
   style="cursor: pointer;"
   id="path104" />
        <path
   d="M 701.2973913043478,505.59 L 707.2321739130435,503.21608695652174 L 711.98,505.59 Z"
   fill="#06b6d4"
   data-element-id="element-1376-1761788125776"
   style="cursor: pointer;"
   id="path181" />
    </g>
    <circle
   cx="711.98"
   cy="505.59"
   r="3.900000000000001"
   fill="#fbbf24"
   data-element-id="element-1377-1761788125776"
   style="cursor: pointer;"
   id="circle106">
        <animate
   attributeName="r"
   values="3.900000000000001;4.917391304347826;3.900000000000001"
   dur="1s"
   repeatCount="indefinite" />
    </circle>
    <circle
   cx="711.98"
   cy="505.59"
   r="1.8652173913043482"
   fill="#f59e0b"
   stroke="none"
   data-element-id="element-1378-1761788125776"
   style="cursor: pointer;"
   id="circle107" />
    <rect
   x="707.98"
   y="522.55"
   width="8"
   height="12"
   fill="#00b0f0"
   stroke="none"
   rx="1"
   data-element-id="element-1379-1761788125776"
   style="cursor: pointer;"
   id="rect181" />
    <path
   d="M 711.98,525.55 L 711.98,531.55"
   stroke="#ffffff"
   stroke-width="1"
   stroke-dasharray="2,2"
   data-element-id="element-1380-1761788125776"
   style="cursor: pointer;"
   id="path120">
        <animate
   attributeName="stroke-dashoffset"
   values="0;4"
   dur="0.8s"
   repeatCount="indefinite" />
    </path>
    <rect
   x="707.98"
   y="476.63347826086954"
   width="8"
   height="12"
   fill="#00b0f0"
   stroke="none"
   rx="1"
   data-element-id="element-1381-1761788125776"
   style="cursor: pointer;"
   id="rect119" />
    <path
   d="M 711.98,479.63347826086954 L 711.98,485.63347826086954"
   stroke="#ffffff"
   stroke-width="1"
   stroke-dasharray="2,2"
   data-element-id="element-1382-1761788125776"
   style="cursor: pointer;"
   id="path121">
        <animate
   attributeName="stroke-dashoffset"
   values="0;4"
   dur="0.8s"
   repeatCount="indefinite" />
    </path>
</g>
<g
   clip-path="url(#clipId0)"
   fill="rgb(255,255,255)"
   stroke="rgb(255,255,255)"
   stroke-width="0.25"
   fill-opacity="0.498039"
   stroke-opacity="0.498039"
   id="g1047"
   data-element-id="element-1383-1761788125776"
   style="cursor: pointer;">

</g>




<g
   id="g2"
   transform="translate(-2.0966544)"><g
     transform="matrix(0,0.3,-0.27,0,824.81,590.91)"
     id="g103"><rect
       x="40"
       y="50"
       width="40"
       height="40"
       rx="4"
       fill="#d0d0d0"
       stroke="#707070"
       stroke-width="2.5"
       id="rect96" /><rect
       x="42"
       y="52"
       width="36"
       height="8"
       fill="rgba(255,255,255,0.4)"
       id="rect97"
       style="fill:#ffffff;fill-opacity:0.49803904" /><rect
       x="42"
       y="80"
       width="36"
       height="8"
       fill="rgba(0,0,0,0.15)"
       id="rect98"
       style="fill:#ffffff;fill-opacity:0.49803904" /><rect
       x="52"
       y="30"
       width="16"
       height="22"
       rx="2"
       fill="#d0d0d0"
       stroke="#707070"
       stroke-width="2"
       id="rect99" /><rect
       x="53"
       y="31"
       width="14"
       height="5"
       fill="rgba(255,255,255,0.4)"
       id="rect100"
       style="fill:#ffffff;fill-opacity:0.49803904" /><ellipse
       cx="60"
       cy="20"
       rx="20"
       ry="9"
       fill="#ff8c00"
       stroke="#cc5500"
       stroke-width="2.5"
       id="ellipse100" /><ellipse
       cx="60"
       cy="17"
       rx="18"
       ry="7"
       fill="#ff7f00"
       id="ellipse101" /><line
       x1="42"
       y1="17"
       x2="78"
       y2="17"
       stroke="#994400"
       stroke-width="3"
       id="line101" /><line
       x1="60"
       y1="9"
       x2="60"
       y2="25"
       stroke="#994400"
       stroke-width="3"
       id="line102" /><circle
       cx="60"
       cy="17"
       r="4"
       fill="#ff7f00"
       id="circle102" /><ellipse
       cx="60"
       cy="14"
       rx="10"
       ry="3"
       fill="rgba(255,255,255,0.5)"
       id="ellipse102"
       style="fill:#ffffff;fill-opacity:0.49803904" /><rect
       x="57"
       y="24"
       width="6"
       height="8"
       fill="#a8a8a8"
       stroke="#707070"
       stroke-width="1"
       id="rect102" /></g></g><g
   id="g115"
   transform="translate(-3.0483272,-2)"><g
     transform="matrix(0,0.3,-0.27,0,733.63,593.75)"
     id="g114"><rect
       x="40"
       y="50"
       width="40"
       height="40"
       rx="4"
       fill="#d0d0d0"
       stroke="#707070"
       stroke-width="2.5"
       id="rect103" /><rect
       x="42"
       y="52"
       width="36"
       height="8"
       fill="rgba(255,255,255,0.4)"
       id="rect108"
       style="fill:#ffffff;fill-opacity:0.49803904" /><rect
       x="42"
       y="80"
       width="36"
       height="8"
       fill="rgba(0,0,0,0.15)"
       id="rect110"
       style="fill:#ffffff;fill-opacity:0.49803904" /><rect
       x="52"
       y="30"
       width="16"
       height="22"
       rx="2"
       fill="#d0d0d0"
       stroke="#707070"
       stroke-width="2"
       id="rect111" /><rect
       x="53"
       y="31"
       width="14"
       height="5"
       fill="rgba(255,255,255,0.4)"
       id="rect112"
       style="fill:#ffffff;fill-opacity:0.49803904" /><ellipse
       cx="60"
       cy="20"
       rx="20"
       ry="9"
       fill="#ff8c00"
       stroke="#cc5500"
       stroke-width="2.5"
       id="ellipse112" /><ellipse
       cx="60"
       cy="17"
       rx="18"
       ry="7"
       fill="#ff7f00"
       id="ellipse113" /><line
       x1="42"
       y1="17"
       x2="78"
       y2="17"
       stroke="#994400"
       stroke-width="3"
       id="line113" /><line
       x1="60"
       y1="9"
       x2="60"
       y2="25"
       stroke="#994400"
       stroke-width="3"
       id="line114" /><circle
       cx="60"
       cy="17"
       r="4"
       fill="#ff7f00"
       id="circle114" /><ellipse
       cx="60"
       cy="14"
       rx="10"
       ry="3"
       fill="rgba(255,255,255,0.5)"
       id="ellipse114"
       style="fill:#ffffff;fill-opacity:0.49803904" /><rect
       x="57"
       y="24"
       width="6"
       height="8"
       fill="#a8a8a8"
       stroke="#707070"
       stroke-width="1"
       id="rect114" /></g></g>


<g
   clip-path="url(#clipId0)"
   fill="rgb(0,0,0)"
   stroke="rgb(0,0,0)"
   stroke-width="0.25"
   fill-opacity="0.498039"
   stroke-opacity="0.498039"
   id="g1055"
   data-element-id="element-1399-1761788125776"
   style="cursor: pointer;">
<path
   d="M715.854,445.057 712.076,450.535 708.298,445.057 708.298,445.057 z"
   id="path1054"
   data-element-id="element-1400-1761788125776"
   style="cursor: pointer;" />
</g>

<g
   clip-path="url(#clipId0)"
   fill="rgb(255,255,255)"
   stroke="rgb(255,255,255)"
   stroke-width="0.25"
   fill-opacity="0.498039"
   stroke-opacity="0.498039"
   id="g1057"
   data-element-id="element-1403-1761788125776"
   style="cursor: pointer;">
<path
   d="M708.298,456.107 712.076,450.535 715.854,456.107 715.854,456.107 z"
   id="path1056"
   data-element-id="element-1404-1761788125776"
   style="cursor: pointer;" />
</g>
<g
   id="g185"><g
     transform="translate(712.087,450.582) rotate(90) scale(0.3,0.27) translate(-60,-70)"
     id="g209">











<rect
   x="40"
   y="50"
   width="40"
   height="40"
   rx="4"
   fill="#d0d0d0"
   stroke="#707070"
   stroke-width="2.5"
   id="rect190" />
<rect
   x="42"
   y="52"
   width="36"
   height="8"
   fill="rgba(255,255,255,0.4)"
   id="rect191"
   style="fill:#ffffff;fill-opacity:0.49803904" />
<rect
   x="42"
   y="80"
   width="36"
   height="8"
   fill="rgba(0,0,0,0.15)"
   id="rect192"
   style="fill:#ffffff;fill-opacity:0.49803904" />
<rect
   x="52"
   y="30"
   width="16"
   height="22"
   rx="2"
   fill="#d0d0d0"
   stroke="#707070"
   stroke-width="2"
   id="rect193" />
<ellipse
   cx="60"
   cy="20"
   rx="20"
   ry="9"
   fill="#20B2AA"
   stroke="#006666"
   stroke-width="2.5"
   id="ellipse193" />
<ellipse
   cx="60"
   cy="17"
   rx="18"
   ry="7"
   fill="#008B8B"
   id="ellipse194" />
<line
   x1="42"
   y1="17"
   x2="78"
   y2="17"
   stroke="#004d4d"
   stroke-width="3"
   id="line194" />
<line
   x1="60"
   y1="9"
   x2="60"
   y2="25"
   stroke="#004d4d"
   stroke-width="3"
   id="line195" />
<circle
   cx="60"
   cy="17"
   r="4"
   fill="#008B8B"
   id="circle195" />
<ellipse
   cx="60"
   cy="14"
   rx="10"
   ry="3"
   fill="rgba(255,255,255,0.5)"
   id="ellipse195"
   style="fill:#ffffff;fill-opacity:0.49803904" />
<rect
   x="57"
   y="24"
   width="6"
   height="8"
   fill="#a8a8a8"
   stroke="#707070"
   stroke-width="1"
   id="rect195" />
<path
   d="M 70 70 L 50 70 M 55 64 L 50 70 L 55 76"
   stroke="#008B8B"
   stroke-width="3"
   stroke-linecap="round"
   stroke-linejoin="round"
   fill="none"
   id="path197">
<animate
   attributeName="opacity"
   values="0.5;1;0.5"
   dur="2s"
   repeatCount="indefinite" />
<animate
   attributeName="stroke-width"
   values="2.5;3.5;2.5"
   dur="2s"
   repeatCount="indefinite" />
</path></g></g>
<g
   clip-path="url(#clipId0)"
   fill="none"
   stroke="rgb(0,0,0)"
   stroke-width="0.7"
   id="g1059"
   data-element-id="element-1407-1761788125776"
   style="stroke:#ffffff;stroke-opacity:1"
   transform="matrix(1.0048123,0,0,1.0307561,-4.4077318,-18.202479)">
<polyline
   points="914.657,442.979 882.261,442.979 882.261,591.631 "
   id="polyline1058"
   data-element-id="element-1408-1761788125776"
   style="stroke:#ffffff;stroke-opacity:1" />
</g>

<g
   clip-path="url(#clipId0)"
   fill="none"
   stroke="#ff0000"
   stroke-width="0.35"
   id="g1073"
   data-element-id="element-1424-1761788125776"
   transform="translate(12.084241,-2.79173)">
<g
   transform="matrix(0,0.65,-0.65,0,914.812,441.366)"
   id="g14">
<!-- PX Symbol Style 6 -->
<circle
   cx="0"
   cy="0"
   r="20"
   fill="url(#purpleGrad)"
   stroke="#8e44ad"
   stroke-width="2"
   id="circle209"
   style="fill:url(#purpleGrad)" />
<circle
   cx="0"
   cy="0"
   r="15"
   fill="none"
   stroke="rgba(255,255,255,0.3)"
   stroke-width="1"
   id="circle210" />
<text
   x="0"
   y="5"
   text-anchor="middle"
   fill="#ffffff"
   font-size="14px"
   font-weight="bold"
   id="text12">PX</text>
<line
   x1="0"
   y1="20"
   x2="0"
   y2="30"
   stroke="#8e44ad"
   stroke-width="2"
   id="line12" />
<circle
   cx="0"
   cy="25"
   r="2.5"
   fill="#8e44ad"
   id="circle211" />
</g>
</g>
<g
   clip-path="url(#clipId0)"
   fill="#ff0000"
   stroke="#ff0000"
   stroke-width="0"
   id="g1074"
   data-element-id="element-1426-1761788125776"
   transform="translate(34)"
   style="fill:#ffffff;fill-opacity:1">
<text
   transform="scale(1.0001623,0.99983769)"
   font-family="Bahnschrift, sans-serif"
   font-size="9.06517px"
   id="text1073"
   data-element-id="element-1427-1761788125776"
   x="916.66321"
   y="428.06949"
   style="font-size:11.0667px;fill:#ffffff;fill-opacity:1;stroke-width:0">PX1</text>
</g>
<g
   clip-path="url(#clipId0)"
   fill="#8faadc"
   stroke="#8faadc"
   stroke-width="0.25"
   fill-opacity="0.498039"
   stroke-opacity="0.498039"
   id="g1075"
   data-element-id="element-1428-1761788125776"
   transform="translate(4)">
<path
   d="m 452.596,413.844 h 67.809 V 302.307 h -67.809 z"
   id="path1074"
   data-element-id="element-1429-1761788125776" />
</g>
<g
   clip-path="url(#clipId0)"
   fill="none"
   stroke="#2f528f"
   stroke-width="0.35"
   id="g1076"
   data-element-id="element-1430-1761788125776"
   transform="translate(4)">
<polyline
   points="452.596,413.844 520.405,413.844 520.405,302.307 452.596,302.307 452.596,413.844 "
   id="polyline1075"
   data-element-id="element-1431-1761788125776" />
</g>
<g
   clip-path="url(#clipId0)"
   fill="#0000ff"
   stroke="#0000ff"
   stroke-width="0"
   id="g1079"
   data-element-id="element-1432-1761788125776"
   transform="translate(4)">
<!-- Cooler Design 1 - NO.2 -->
<g
   transform="matrix(0.339,0,0,0.558,452.596,302.307)"
   id="g43">
  <!-- Main Body -->
  <rect
   x="10"
   y="10"
   width="180"
   height="180"
   fill="url(#metalGrad1)"
   stroke="#666666"
   stroke-width="2"
   rx="5"
   id="rect115"
   style="fill:url(#linearGradient57)" />
  
  <!-- Plates -->
  <g
   opacity="0.7"
   id="g37">
    <line
   x1="25"
   y1="20"
   x2="25"
   y2="180"
   stroke="#888888"
   stroke-width="1.5"
   id="line27" />
    <line
   x1="40"
   y1="20"
   x2="40"
   y2="180"
   stroke="#888888"
   stroke-width="1.5"
   id="line28" />
    <line
   x1="55"
   y1="20"
   x2="55"
   y2="180"
   stroke="#888888"
   stroke-width="1.5"
   id="line29" />
    <line
   x1="70"
   y1="20"
   x2="70"
   y2="180"
   stroke="#888888"
   stroke-width="1.5"
   id="line30" />
    <line
   x1="85"
   y1="20"
   x2="85"
   y2="180"
   stroke="#888888"
   stroke-width="1.5"
   id="line115" />
    <line
   x1="100"
   y1="20"
   x2="100"
   y2="180"
   stroke="#888888"
   stroke-width="1.5"
   id="line116" />
    <line
   x1="115"
   y1="20"
   x2="115"
   y2="180"
   stroke="#888888"
   stroke-width="1.5"
   id="line33" />
    <line
   x1="130"
   y1="20"
   x2="130"
   y2="180"
   stroke="#888888"
   stroke-width="1.5"
   id="line34" />
    <line
   x1="145"
   y1="20"
   x2="145"
   y2="180"
   stroke="#888888"
   stroke-width="1.5"
   id="line35" />
    <line
   x1="160"
   y1="20"
   x2="160"
   y2="180"
   stroke="#888888"
   stroke-width="1.5"
   id="line36" />
    <line
   x1="175"
   y1="20"
   x2="175"
   y2="180"
   stroke="#888888"
   stroke-width="1.5"
   id="line37" />
  </g>
  
  <!-- HOT IN Left (Top) - y=36 matches 322.754 -->
  <rect
   x="-35"
   y="34"
   width="45"
   height="8"
   fill="url(#redFlow1)"
   stroke="#cc0000"
   stroke-width="1.5"
   rx="1"
   id="rect116"
   style="fill:url(#linearGradient58)" />
  <polygon
   points="15,42 5,38 15,34 "
   fill="url(#redFlow1)"
   stroke="#cc0000"
   stroke-width="1"
   id="polygon37"
   style="fill:url(#linearGradient59)" />
  <!-- Flow animation -->
  <circle
   cx="-15"
   cy="38"
   r="2.5"
   fill="#ffffff"
   id="circle37">
    <animate
   attributeName="cx"
   from="-25"
   to="10"
   dur="1.5s"
   repeatCount="indefinite" />
    <animate
   attributeName="opacity"
   values="1;1;0"
   dur="1.5s"
   repeatCount="indefinite" />
  </circle>
  
  <!-- COLD OUT Left (Bottom) - y=166 matches ~395 -->
  <rect
   x="-35"
   y="160.41577"
   width="45"
   height="8"
   fill="url(#blueFlow1)"
   stroke="#0066cc"
   stroke-width="1.5"
   rx="1"
   id="rect59"
   style="fill:url(#linearGradient60)" />
  <polygon
   points="5,168 15,164 15,172 "
   fill="url(#blueFlow1)"
   stroke="#0066cc"
   stroke-width="1"
   id="polygon38"
   style="fill:url(#linearGradient61)"
   transform="translate(0,-3.5842294)" />
  <!-- Flow animation (reverse) -->
  <circle
   cx="5"
   cy="164.41577"
   r="2.5"
   fill="#ffffff"
   id="circle38">
    <animate
   attributeName="cx"
   from="10"
   to="-25"
   dur="1.5s"
   repeatCount="indefinite" />
    <animate
   attributeName="opacity"
   values="1;1;0"
   dur="1.5s"
   repeatCount="indefinite" />
  </circle>
  
  <!-- HOT IN Right (Top) -->
  <rect
   x="185"
   y="34"
   width="45"
   height="8"
   fill="url(#redFlow1)"
   stroke="#cc0000"
   stroke-width="1.5"
   rx="1"
   id="rect117"
   style="fill:url(#linearGradient62)" />
  <polygon
   points="185,42 195,38 185,34 "
   fill="url(#redFlow1)"
   stroke="#cc0000"
   stroke-width="1"
   id="polygon39"
   style="fill:url(#linearGradient63)" />
  <circle
   cx="215"
   cy="38"
   r="2.5"
   fill="#ffffff"
   id="circle117">
    <animate
   attributeName="cx"
   from="190"
   to="225"
   dur="1.5s"
   repeatCount="indefinite" />
    <animate
   attributeName="opacity"
   values="1;1;0"
   dur="1.5s"
   repeatCount="indefinite" />
  </circle>
  
  <!-- COLD OUT Right (Bottom) -->
  <rect
   x="185"
   y="160.41577"
   width="45"
   height="8"
   fill="url(#blueFlow1)"
   stroke="#0066cc"
   stroke-width="1.5"
   rx="1"
   id="rect118"
   style="fill:url(#linearGradient64)" />
  <polygon
   points="195,168 185,164 185,172 "
   fill="url(#blueFlow1)"
   stroke="#0066cc"
   stroke-width="1"
   id="polygon40"
   style="fill:url(#linearGradient65)"
   transform="translate(0,-3.5842294)" />
  <circle
   cx="185"
   cy="164.41577"
   r="2.5"
   fill="#ffffff"
   id="circle40">
    <animate
   attributeName="cx"
   from="225"
   to="190"
   dur="1.5s"
   repeatCount="indefinite" />
    <animate
   attributeName="opacity"
   values="1;1;0"
   dur="1.5s"
   repeatCount="indefinite" />
  </circle>
  
  <!-- Internal flow indicators -->
  <circle
   cx="40"
   cy="60"
   r="2"
   fill="rgba(255,68,68,0.6)"
   id="circle41">
    <animate
   attributeName="cy"
   from="60"
   to="140"
   dur="2s"
   repeatCount="indefinite" />
    <animate
   attributeName="opacity"
   values="0.6;0.6;0"
   dur="2s"
   repeatCount="indefinite" />
  </circle>
  <circle
   cx="100"
   cy="70"
   r="2"
   fill="rgba(255,68,68,0.6)"
   id="circle59">
    <animate
   attributeName="cy"
   from="70"
   to="150"
   dur="2.2s"
   repeatCount="indefinite" />
    <animate
   attributeName="opacity"
   values="0.6;0.6;0"
   dur="2.2s"
   repeatCount="indefinite" />
  </circle>
  <circle
   cx="150"
   cy="65"
   r="2"
   fill="rgba(255,68,68,0.6)"
   id="circle43">
    <animate
   attributeName="cy"
   from="65"
   to="145"
   dur="1.8s"
   repeatCount="indefinite" />
    <animate
   attributeName="opacity"
   values="0.6;0.6;0"
   dur="1.8s"
   repeatCount="indefinite" />
  </circle>
</g>

</g><text
   transform="scale(1.0010633,0.99893782)"
   font-family="Bahnschrift, sans-serif"
   font-size="11px"
   id="text1081-4"
   data-element-id="element-1442-1761788125776"
   x="490.00989"
   y="339.5191"
   style="fill:#000000;stroke-width:0;fill-opacity:1;stroke:#ff0000;stroke-opacity:1"><tspan
     sodipodi:role="line"
     id="tspan1-8"
     x="490.00989"
     y="339.5191"
     style="text-align:center;text-anchor:middle;fill:#000000;stroke-width:0;fill-opacity:1;stroke:#ff0000;stroke-opacity:1">NO.2</tspan><tspan
     sodipodi:role="line"
     id="tspan2-8"
     x="490.00989"
     y="353.2691"
     style="text-align:center;text-anchor:middle;fill:#000000;stroke-width:0;fill-opacity:1;stroke:#ff0000;stroke-opacity:1">Central</tspan><tspan
     sodipodi:role="line"
     x="490.00989"
     y="367.0191"
     id="tspan3-2"
     style="text-align:center;text-anchor:middle;fill:#000000;stroke-width:0;fill-opacity:1;stroke:#ff0000;stroke-opacity:1">F.W.</tspan><tspan
     sodipodi:role="line"
     x="490.00989"
     y="380.7691"
     id="tspan4-4"
     style="text-align:center;text-anchor:middle;fill:#000000;stroke-width:0;fill-opacity:1;stroke:#ff0000;stroke-opacity:1">CLR</tspan></text>
<g
   clip-path="url(#clipId0)"
   fill="#8faadc"
   stroke="#8faadc"
   stroke-width="0.25"
   fill-opacity="0.498039"
   stroke-opacity="0.498039"
   id="g1080"
   data-element-id="element-1437-1761788125776"
   transform="translate(4)">
<path
   d="m 452.596,269.63 h 67.809 V 158.094 h -67.809 z"
   id="path1079"
   data-element-id="element-1438-1761788125776" />
</g>
<g
   clip-path="url(#clipId0)"
   fill="none"
   stroke="#2f528f"
   stroke-width="0.35"
   id="g1081"
   data-element-id="element-1439-1761788125776"
   transform="translate(4)">
<polyline
   points="452.596,269.63 520.405,269.63 520.405,158.094 452.596,158.094 452.596,269.63 "
   id="polyline1080"
   data-element-id="element-1440-1761788125776" />
</g>
<g
   clip-path="url(#clipId0)"
   fill="#0000ff"
   stroke="#0000ff"
   stroke-width="0"
   id="g1084"
   data-element-id="element-1441-1761788125776"
   transform="translate(4)">
<!-- Cooler Design 1 - NO.1 -->
<g
   transform="matrix(0.339,0,0,0.558,452.596,158.094)"
   id="g77">
  <!-- Main Body -->
  <rect
   x="10"
   y="10"
   width="180"
   height="180"
   fill="url(#metalGrad1)"
   stroke="#666666"
   stroke-width="2"
   rx="5"
   id="rect120"
   style="fill:url(#linearGradient48)" />
  
  <!-- Plates -->
  <g
   opacity="0.7"
   id="g56">
    <line
   x1="25"
   y1="20"
   x2="25"
   y2="180"
   stroke="#888888"
   stroke-width="1.5"
   id="line43" />
    <line
   x1="40"
   y1="20"
   x2="40"
   y2="180"
   stroke="#888888"
   stroke-width="1.5"
   id="line44" />
    <line
   x1="55"
   y1="20"
   x2="55"
   y2="180"
   stroke="#888888"
   stroke-width="1.5"
   id="line120" />
    <line
   x1="70"
   y1="20"
   x2="70"
   y2="180"
   stroke="#888888"
   stroke-width="1.5"
   id="line121" />
    <line
   x1="85"
   y1="20"
   x2="85"
   y2="180"
   stroke="#888888"
   stroke-width="1.5"
   id="line47" />
    <line
   x1="100"
   y1="20"
   x2="100"
   y2="180"
   stroke="#888888"
   stroke-width="1.5"
   id="line48" />
    <line
   x1="115"
   y1="20"
   x2="115"
   y2="180"
   stroke="#888888"
   stroke-width="1.5"
   id="line49" />
    <line
   x1="130"
   y1="20"
   x2="130"
   y2="180"
   stroke="#888888"
   stroke-width="1.5"
   id="line50" />
    <line
   x1="145"
   y1="20"
   x2="145"
   y2="180"
   stroke="#888888"
   stroke-width="1.5"
   id="line51" />
    <line
   x1="160"
   y1="20"
   x2="160"
   y2="180"
   stroke="#888888"
   stroke-width="1.5"
   id="line52" />
    <line
   x1="175"
   y1="20"
   x2="175"
   y2="180"
   stroke="#888888"
   stroke-width="1.5"
   id="line53" />
  </g>
  
  <!-- HOT IN Left (Top) - y=35 matches 177.88 -->
  <rect
   x="-35"
   y="33"
   width="45"
   height="8"
   fill="url(#redFlow1)"
   stroke="#cc0000"
   stroke-width="1.5"
   rx="1"
   id="rect121"
   style="fill:url(#linearGradient49)" />
  <polygon
   points="15,33 15,41 5,37 "
   fill="url(#redFlow1)"
   stroke="#cc0000"
   stroke-width="1"
   id="polygon58"
   style="fill:url(#linearGradient50)" />
  <!-- Flow animation -->
  <circle
   cx="-15"
   cy="37"
   r="2.5"
   fill="#ffffff"
   id="circle213">
    <animate
   attributeName="cx"
   from="-25"
   to="10"
   dur="1.5s"
   repeatCount="indefinite" />
    <animate
   attributeName="opacity"
   values="1;1;0"
   dur="1.5s"
   repeatCount="indefinite" />
  </circle>
  
  <!-- COLD OUT Left (Bottom) - y=165 matches ~254 -->
  <rect
   x="-35"
   y="161.22473"
   width="45"
   height="8"
   fill="url(#blueFlow1)"
   stroke="#0066cc"
   stroke-width="1.5"
   rx="1"
   id="rect60"
   style="fill:url(#linearGradient51)" />
  <polygon
   points="5,167 15,163 15,171 "
   fill="url(#blueFlow1)"
   stroke="#0066cc"
   stroke-width="1"
   id="polygon60"
   style="fill:url(#linearGradient52)"
   transform="translate(0,-1.7752663)" />
  <!-- Flow animation (reverse) -->
  <circle
   cx="5"
   cy="165.22473"
   r="2.5"
   fill="#ffffff"
   id="circle214">
    <animate
   attributeName="cx"
   from="10"
   to="-25"
   dur="1.5s"
   repeatCount="indefinite" />
    <animate
   attributeName="opacity"
   values="1;1;0"
   dur="1.5s"
   repeatCount="indefinite" />
  </circle>
  
  <!-- HOT IN Right (Top) -->
  <rect
   x="185"
   y="33"
   width="45"
   height="8"
   fill="url(#redFlow1)"
   stroke="#cc0000"
   stroke-width="1.5"
   rx="1"
   id="rect122"
   style="fill:url(#linearGradient53)" />
  <polygon
   points="185,33 185,41 195,37 "
   fill="url(#redFlow1)"
   stroke="#cc0000"
   stroke-width="1"
   id="polygon61"
   style="fill:url(#linearGradient54)" />
  <circle
   cx="215"
   cy="37"
   r="2.5"
   fill="#ffffff"
   id="circle215">
    <animate
   attributeName="cx"
   from="190"
   to="225"
   dur="1.5s"
   repeatCount="indefinite" />
    <animate
   attributeName="opacity"
   values="1;1;0"
   dur="1.5s"
   repeatCount="indefinite" />
  </circle>
  
  <!-- COLD OUT Right (Bottom) -->
  <rect
   x="185"
   y="161.22473"
   width="45"
   height="8"
   fill="url(#blueFlow1)"
   stroke="#0066cc"
   stroke-width="1.5"
   rx="1"
   id="rect215"
   style="fill:url(#linearGradient55)" />
  <polygon
   points="185,171 195,167 185,163 "
   fill="url(#blueFlow1)"
   stroke="#0066cc"
   stroke-width="1"
   id="polygon67"
   style="fill:url(#linearGradient56)"
   transform="translate(0.49626421,-1.6582162)" />
  <circle
   cx="185"
   cy="165.22473"
   r="2.5"
   fill="#ffffff"
   id="circle68">
    <animate
   attributeName="cx"
   from="225"
   to="190"
   dur="1.5s"
   repeatCount="indefinite" />
    <animate
   attributeName="opacity"
   values="1;1;0"
   dur="1.5s"
   repeatCount="indefinite" />
  </circle>
  
  <!-- Internal flow indicators -->
  <circle
   cx="40"
   cy="60"
   r="2"
   fill="rgba(255,68,68,0.6)"
   id="circle69">
    <animate
   attributeName="cy"
   from="60"
   to="140"
   dur="2s"
   repeatCount="indefinite" />
    <animate
   attributeName="opacity"
   values="0.6;0.6;0"
   dur="2s"
   repeatCount="indefinite" />
  </circle>
  <circle
   cx="100"
   cy="70"
   r="2"
   fill="rgba(255,68,68,0.6)"
   id="circle70">
    <animate
   attributeName="cy"
   from="70"
   to="150"
   dur="2.2s"
   repeatCount="indefinite" />
    <animate
   attributeName="opacity"
   values="0.6;0.6;0"
   dur="2.2s"
   repeatCount="indefinite" />
  </circle>
  <circle
   cx="150"
   cy="65"
   r="2"
   fill="rgba(255,68,68,0.6)"
   id="circle71">
    <animate
   attributeName="cy"
   from="65"
   to="145"
   dur="1.8s"
   repeatCount="indefinite" />
    <animate
   attributeName="opacity"
   values="0.6;0.6;0"
   dur="1.8s"
   repeatCount="indefinite" />
  </circle>
</g>
<text
   transform="scale(1.0010633,0.99893782)"
   font-family="Bahnschrift, sans-serif"
   font-size="11px"
   id="text1081"
   data-element-id="element-1442-1761788125776"
   x="486.0144"
   y="193.87593"
   style="fill:#ffffff;stroke-width:0"><tspan
     sodipodi:role="line"
     id="tspan1"
     x="486.0144"
     y="193.87593"
     style="text-align:center;text-anchor:middle;fill:#000000;fill-opacity:1;stroke-width:0">NO.1</tspan><tspan
     sodipodi:role="line"
     id="tspan2"
     x="486.0144"
     y="207.62593"
     style="text-align:center;text-anchor:middle;fill:#000000;fill-opacity:1;stroke-width:0">Central</tspan><tspan
     sodipodi:role="line"
     x="486.0144"
     y="221.37593"
     id="tspan3"
     style="text-align:center;text-anchor:middle;fill:#000000;fill-opacity:1;stroke-width:0">F.W.</tspan><tspan
     sodipodi:role="line"
     x="486.0144"
     y="235.12593"
     id="tspan4"
     style="text-align:center;text-anchor:middle;fill:#000000;fill-opacity:1;stroke-width:0">CLR</tspan></text>
</g>





<g
   clip-path="url(#clipId0)"
   fill="#00b050"
   stroke="#00b050"
   stroke-width="1"
   id="g1122"
   data-element-id="element-1457-1761788125776"
   transform="translate(-4)">
<path
   d="m 372.619,235.736 -0.213,-0.365 0.213,-0.802 z"
   id="path1089"
   data-element-id="element-1458-1761788125776" />
<path
   d="m 372.619,235.736 v -1.167 l 0.811,2.555 z"
   id="path1090"
   data-element-id="element-1459-1761788125776" />
<path
   d="m 373.43,237.124 -0.811,-2.555 0.811,0.212 z"
   id="path1091"
   data-element-id="element-1460-1761788125776" />
<path
   d="m 373.43,237.124 v -2.343 l 1.652,5.175 z"
   id="path1092"
   data-element-id="element-1461-1761788125776" />
<path
   d="m 375.082,239.956 -1.652,-5.175 1.652,2.833 z"
   id="path1093"
   data-element-id="element-1462-1761788125776" />
<path
   d="m 375.082,239.956 v -0.154 l 0.079,0.289 z"
   id="path1094"
   data-element-id="element-1463-1761788125776" />
<path
   d="m 375.161,240.091 -0.079,-0.289 h 0.079 z"
   id="path1095"
   data-element-id="element-1464-1761788125776" />
<path
   d="m 375.082,237.614 v -4.486 l 0.079,4.621 z"
   id="path1096"
   data-element-id="element-1465-1761788125776" />
<path
   d="m 375.161,237.749 -0.079,-4.621 h 0.079 z"
   id="path1097"
   data-element-id="element-1466-1761788125776" />
<path
   d="m 375.161,240.091 v -0.289 l 0.512,1.165 z"
   id="path1098"
   data-element-id="element-1467-1761788125776" />
<path
   d="m 375.673,240.967 -0.512,-1.165 0.512,-0.004 z"
   id="path1099"
   data-element-id="element-1468-1761788125776" />
<path
   d="m 375.673,239.503 h -0.512 l 0.512,-0.877 z"
   id="path1100"
   data-element-id="element-1469-1761788125776" />
<path
   d="m 375.161,237.749 v -4.621 l 0.512,5.498 z"
   id="path1101"
   data-element-id="element-1470-1761788125776" />
<path
   d="m 375.673,238.626 -0.512,-5.498 h 0.512 z"
   id="path1102"
   data-element-id="element-1471-1761788125776" />
<path
   d="m 375.673,240.967 v -1.169 z"
   id="path1103"
   data-element-id="element-1472-1761788125776" />
<path
   d="m 375.673,240.967 v -1.169 0 z"
   id="path1104"
   data-element-id="element-1473-1761788125776" />
<path
   d="m 375.673,239.503 v -0.877 z"
   id="path1105"
   data-element-id="element-1474-1761788125776" />
<path
   d="m 375.673,239.503 v -0.877 0 z"
   id="path1106"
   data-element-id="element-1475-1761788125776" />
<path
   d="m 375.673,238.626 v -5.498 z"
   id="path1107"
   data-element-id="element-1476-1761788125776" />
<path
   d="m 375.673,238.626 v -5.498 0 z"
   id="path1108"
   data-element-id="element-1477-1761788125776" />
<path
   d="m 375.673,240.967 v -1.169 l 0.511,0.293 z"
   id="path1109"
   data-element-id="element-1478-1761788125776" />
<path
   d="m 376.184,240.091 -0.511,-0.293 0.511,-0.003 z"
   id="path1110"
   data-element-id="element-1479-1761788125776" />
<path
   d="m 375.673,239.503 v -0.877 l 0.511,0.877 z"
   id="path1111"
   data-element-id="element-1480-1761788125776" />
<path
   d="m 375.673,238.626 v -5.498 l 0.511,4.621 z"
   id="path1112"
   data-element-id="element-1481-1761788125776" />
<path
   d="m 376.184,237.749 -0.511,-4.621 h 0.511 z"
   id="path1113"
   data-element-id="element-1482-1761788125776" />
<path
   d="m 376.184,240.091 v -0.296 l 0.079,0.161 z"
   id="path1114"
   data-element-id="element-1483-1761788125776" />
<path
   d="m 376.263,239.956 -0.079,-0.161 h 0.079 z"
   id="path1115"
   data-element-id="element-1484-1761788125776" />
<path
   d="m 376.184,237.749 v -4.621 l 0.079,4.486 z"
   id="path1116"
   data-element-id="element-1485-1761788125776" />
<path
   d="m 376.263,237.614 -0.079,-4.486 h 0.079 z"
   id="path1117"
   data-element-id="element-1486-1761788125776" />
<path
   d="m 376.263,239.956 v -2.342 l 1.653,-0.49 z"
   id="path1118"
   data-element-id="element-1487-1761788125776" />
<path
   d="m 377.916,237.124 -1.653,0.49 1.653,-2.833 z"
   id="path1119"
   data-element-id="element-1488-1761788125776" />
<path
   d="m 377.916,237.124 v -2.343 l 0.81,0.955 z"
   id="path1120"
   data-element-id="element-1489-1761788125776" />
<path
   d="m 378.726,235.736 -0.81,-0.955 0.81,-0.212 z"
   id="path1121"
   data-element-id="element-1490-1761788125776" />
<path
   d="m 378.726,235.736 v -1.167 l 0.213,0.802 z"
   id="path1122"
   data-element-id="element-1491-1761788125776" />
</g>
<g
   clip-path="url(#clipId0)"
   fill="none"
   stroke="rgb(255,255,255)"
   stroke-width="0.7"
   id="g1123"
   data-element-id="element-1492-1761788125776"
   style="cursor: pointer;">
<polyline
   points="543.685,162.58 543.685,177.313 "
   id="polyline1122"
   data-element-id="element-1493-1761788125776"
   style="cursor: pointer;" />
</g>
<g
   clip-path="url(#clipId0)"
   fill="none"
   stroke="rgb(255,0,0)"
   stroke-width="0.7"
   id="g1124"
   data-element-id="element-1494-1761788125776"
   style="cursor:pointer;stroke:#ffffff;stroke-opacity:1">
<polyline
   points="543.78,140.764 543.78,129.147 594.212,129.147 "
   id="polyline1123"
   data-element-id="element-1495-1761788125776"
   style="cursor:pointer;stroke:#ffffff;stroke-opacity:1" />
</g>
<g
   clip-path="url(#clipId0)"
   fill="none"
   stroke="#ff0000"
   stroke-width="0.53"
   id="g1125"
   data-element-id="element-1496-1761788125776"
   transform="translate(8,-4)">
<g
   transform="translate(534.92,156.221)"
   id="g16">
<circle
   cx="0"
   cy="0"
   r="12"
   fill="#ecf0f1"
   stroke="#95a5a6"
   stroke-width="1.5"
   id="circle216" />
<rect
   x="-3"
   y="-8"
   width="6"
   height="10"
   fill="#e74c3c"
   stroke="#c0392b"
   stroke-width="0.8"
   rx="1"
   id="rect216" />
<circle
   cx="0"
   cy="4"
   r="3.5"
   fill="#e74c3c"
   stroke="#c0392b"
   stroke-width="0.8"
   id="circle16">
<animate
   attributeName="r"
   values="3.5;4.2;3.5"
   dur="2s"
   repeatCount="indefinite" />
</circle>
</g>
</g>
<text
   transform="scale(1.001461,0.99854113)"
   font-family="Bahnschrift, sans-serif"
   font-size="11.0625px"
   id="text1125"
   data-element-id="element-1499-1761788125776"
   style="fill:#ffffff;stroke:#ff0000;stroke-width:0;fill-opacity:1"
   x="568.08978"
   y="141.20599">TX2</text><text
   transform="scale(1.0012395,0.998762)"
   font-family="Bahnschrift, sans-serif"
   font-size="11.0601px"
   id="text1126"
   data-element-id="element-1500-1761788125776"
   style="fill:#ffffff;stroke:#ff0000;stroke-width:0;fill-opacity:1"
   x="595.47491"
   y="132.96661">To ESS</text>


<g
   clip-path="url(#clipId0)"
   fill="none"
   stroke="rgb(0,0,0)"
   stroke-width="0.53"
   id="g1127"
   data-element-id="element-1501-1761788125776"
   style="cursor:pointer;fill:#ffffff;fill-opacity:0.49803904;stroke:#ffffff;stroke-opacity:1">
<polyline
   points="540.569,168.247 547.085,168.247 "
   id="polyline1126"
   data-element-id="element-1502-1761788125776"
   style="cursor:pointer;fill:#ffffff;fill-opacity:0.49803904;stroke:#ffffff;stroke-opacity:1" />
<polyline
   points="540.569,170.608 547.085,170.608 "
   id="polyline1127"
   data-element-id="element-1503-1761788125776"
   style="cursor:pointer;fill:#ffffff;fill-opacity:0.49803904;stroke:#ffffff;stroke-opacity:1" />
</g>
<g
   clip-path="url(#clipId0)"
   fill="none"
   stroke="rgb(255,255,255)"
   stroke-width="0.53"
   id="g1128"
   data-element-id="element-1504-1761788125776"
   style="cursor:pointer;stroke:#000000;stroke-opacity:1">
<polyline
   points="540.569,169.38 547.085,169.38 "
   id="polyline1128"
   data-element-id="element-1505-1761788125776"
   style="cursor:pointer;stroke:#000000;stroke-opacity:1" />
</g>

















<g
   clip-path="url(#clipId0)"
   fill="none"
   stroke="rgb(0,0,0)"
   stroke-width="0.7"
   id="g1145"
   data-element-id="element-1537-1761788125776"
   style="cursor:pointer;stroke:#ffffff;stroke-opacity:1">
<polyline
   points="543.685,307.36 543.685,322.093 "
   id="polyline1144"
   data-element-id="element-1538-1761788125776"
   style="cursor:pointer;stroke:#ffffff;stroke-opacity:1" />
</g>
<g
   clip-path="url(#clipId0)"
   fill="none"
   stroke="#ff0000"
   stroke-width="0.7"
   id="g1146"
   data-element-id="element-1539-1761788125776"
   transform="translate(0,-4)"
   style="stroke:#ffffff;stroke-opacity:1">
<polyline
   points="543.78,285.638 543.78,277.989 587.412,277.989 "
   id="polyline1145"
   data-element-id="element-1540-1761788125776"
   style="stroke:#ffffff;stroke-opacity:1" />
</g>
<g
   clip-path="url(#clipId0)"
   fill="none"
   stroke="#ff0000"
   stroke-width="0.53"
   id="g1147"
   data-element-id="element-1541-1761788125776"
   transform="translate(8,-6)">
<g
   transform="translate(534.826,301.027)"
   id="g28">
<circle
   cx="0"
   cy="0"
   r="12"
   fill="#ecf0f1"
   stroke="#95a5a6"
   stroke-width="1.5"
   id="circle162" />
<rect
   x="-3"
   y="-8"
   width="6"
   height="10"
   fill="#e74c3c"
   stroke="#c0392b"
   stroke-width="0.8"
   rx="1"
   id="rect162" />
<circle
   cx="0"
   cy="4"
   r="3.5"
   fill="#e74c3c"
   stroke="#c0392b"
   stroke-width="0.8"
   id="circle28">
<animate
   attributeName="r"
   values="3.5;4.2;3.5"
   dur="2s"
   repeatCount="indefinite" />
</circle>
</g>
</g>
<text
   transform="scale(1.0018371,0.99816627)"
   font-family="Bahnschrift, sans-serif"
   font-size="11.0667px"
   id="text1147"
   data-element-id="element-1544-1761788125776"
   style="fill:#ffffff;stroke:#ff0000;stroke-width:0;fill-opacity:1"
   x="567.78302"
   y="288.52908">TX3</text><text
   transform="scale(1.0012395,0.99876203)"
   font-family="Bahnschrift, sans-serif"
   font-size="11.0601px"
   id="text1148"
   data-element-id="element-1545-1761788125776"
   style="fill:#ffffff;fill-opacity:1;stroke:#ff0000;stroke-width:0"
   x="551.83398"
   y="271.87961">To ESS</text>


<g
   clip-path="url(#clipId0)"
   fill="none"
   stroke="rgb(0,0,0)"
   stroke-width="0.53"
   id="g1149"
   data-element-id="element-1546-1761788125776"
   style="cursor:pointer;stroke:#ffffff;stroke-opacity:1">
<polyline
   points="540.569,313.121 547.085,313.121 "
   id="polyline1148"
   data-element-id="element-1547-1761788125776"
   style="cursor:pointer;stroke:#ffffff;stroke-opacity:1" />
<polyline
   points="540.569,315.482 547.085,315.482 "
   id="polyline1149"
   data-element-id="element-1548-1761788125776"
   style="cursor:pointer;stroke:#ffffff;stroke-opacity:1" />
</g>
<g
   clip-path="url(#clipId0)"
   fill="none"
   stroke="rgb(255,255,255)"
   stroke-width="0.53"
   id="g1150"
   data-element-id="element-1549-1761788125776"
   style="cursor:pointer;stroke:#000000;stroke-opacity:1">
<polyline
   points="540.569,314.349 547.085,314.349 "
   id="polyline1150"
   data-element-id="element-1550-1761788125776"
   style="cursor:pointer;stroke:#000000;stroke-opacity:1" />
</g>
<g
   clip-path="url(#clipId0)"
   fill="none"
   stroke="#ff0000"
   stroke-width="0.53"
   id="g1151"
   data-element-id="element-1551-1761788125776"
   transform="translate(12,-4)">
<g
   transform="translate(435.96,456.534)"
   id="g30">
<circle
   cx="0"
   cy="0"
   r="12"
   fill="#ecf0f1"
   stroke="#95a5a6"
   stroke-width="1.5"
   id="circle29" />
<rect
   x="-3"
   y="-8"
   width="6"
   height="10"
   fill="#e74c3c"
   stroke="#c0392b"
   stroke-width="0.8"
   rx="1"
   id="rect163" />
<circle
   cx="0"
   cy="4"
   r="3.5"
   fill="#e74c3c"
   stroke="#c0392b"
   stroke-width="0.8"
   id="circle30">
<animate
   attributeName="r"
   values="3.5;4.2;3.5"
   dur="2s"
   repeatCount="indefinite" />
</circle>
</g>
</g>
<g
   clip-path="url(#clipId0)"
   fill="#ff0000"
   stroke="#ff0000"
   stroke-width="0"
   id="g1152"
   data-element-id="element-1553-1761788125776"
   transform="translate(34,4)"
   style="fill:#ffffff;fill-opacity:1">
<text
   transform="matrix(7.87402,0,0,7.84489,435.96,443)"
   font-family="Bahnschrift, sans-serif"
   font-size="1.4081px"
   id="text1151"
   data-element-id="element-1554-1761788125776"
   style="fill:#ffffff;fill-opacity:1">TX5</text>
</g><g
   clip-path="url(#clipId0-98-7-1)"
   fill="#ff0000"
   stroke="#ff0000"
   stroke-width="0"
   id="g1152-7-9-6"
   data-element-id="element-1553-1761788125776"
   transform="translate(391.178,68.087481)"
   style="fill:#ffffff;fill-opacity:1"
   inkscape:transform-center-x="-13.799255"
   inkscape:transform-center-y="-64.713748">

</g>
<polyline
   points="410.144,452.707 433.188,452.707 "
   id="polyline1152"
   data-element-id="element-1556-1761788125776"
   style="fill:none;stroke:#ffffff;stroke-width:0.7;stroke-opacity:1"
   transform="matrix(1.0851712,0,0,1,-34.90264,0)" /><polyline
   points="456.421,452.707 505.247,452.707 "
   id="polyline1153"
   data-element-id="element-1557-1761788125776"
   style="fill:none;stroke:#ffffff;stroke-width:0.7;stroke-opacity:1"
   transform="translate(4)" />


<g
   clip-path="url(#clipId0)"
   fill="rgb(255,0,0)"
   stroke="rgb(255,0,0)"
   stroke-width="0"
   id="g1154"
   data-element-id="element-1558-1761788125776"
   style="cursor:pointer;fill:#ffffff;fill-opacity:1">
<text
   transform="matrix(7.86435,0,0,7.84489,468.354,464.279)"
   font-family="Bahnschrift, sans-serif"
   font-size="1.4081px"
   id="text1153"
   data-element-id="element-1559-1761788125776"
   style="fill:#ffffff;fill-opacity:1">To ESS for</text>
</g>

<text
   transform="scale(1.0002457,0.99975436)"
   font-family="Calibri, sans-serif"
   font-weight="bold"
   font-size="14.1692px"
   id="text1157"
   data-element-id="element-1566-1761788125776"
   style="fill:#ffffff;stroke:#ffffff;stroke-width:0"
   x="492.09509"
   y="513.03802">Main Cooling</text><text
   transform="scale(0.98491222,1.0153189)"
   font-family="Calibri, sans-serif"
   font-weight="bold"
   font-size="13.9706px"
   id="text1158"
   data-element-id="element-1567-1761788125776"
   style="fill:#ffffff;stroke:#ffffff;stroke-width:0"
   x="503.03064"
   y="521.91974">S.W. Pump</text><text
   transform="scale(0.9910849,1.0089953)"
   font-family="Calibri, sans-serif"
   font-weight="bold"
   font-size="14.0395px"
   id="text1159"
   data-element-id="element-1568-1761788125776"
   style="fill:#ffffff;stroke:#ffffff;stroke-width:0"
   x="257.66409"
   y="327.03424">LT Cooling</text><text
   transform="scale(0.9768332,1.0237162)"
   font-family="Calibri, sans-serif"
   font-weight="bold"
   font-size="13.8376px"
   id="text1160"
   data-element-id="element-1569-1761788125776"
   style="fill:#ffffff;stroke:#ffffff;stroke-width:0"
   x="261.45099"
   y="338.93768">F.W. Pump</text>


<g
   id="g217"
   transform="translate(0,4)"
   style="stroke:#ffffff;stroke-opacity:1"><g
     clip-path="url(#clipId0)"
     fill="none"
     stroke="#000000"
     stroke-width="0.7"
     id="g1157"
     data-element-id="element-1560-1761788125776"
     style="stroke:#ffffff;stroke-opacity:1">
<polyline
   points="881.694,561.41 808.124,561.41 "
   id="polyline1154"
   data-element-id="element-1561-1761788125776"
   style="stroke:#ffffff;stroke-opacity:1" />
<polyline
   points="707.732,562.26 709.018,559.456 712.123,558.293 715.228,559.456 716.515,562.26 "
   id="polyline1155"
   data-element-id="element-1562-1761788125776"
   style="stroke:#ffffff;stroke-opacity:1" />
<polyline
   points="799.341,562.449 716.231,562.449 "
   id="polyline1156"
   data-element-id="element-1563-1761788125776"
   style="stroke:#ffffff;stroke-opacity:1" />
<polyline
   points="707.921,562.165 617.162,562.165 "
   id="polyline1157"
   data-element-id="element-1564-1761788125776"
   style="stroke:#ffffff;stroke-opacity:1" />
</g><g
     clip-path="url(#clipId0)"
     fill="none"
     stroke="#000000"
     stroke-width="0.7"
     id="g1161"
     data-element-id="element-1570-1761788125776"
     style="stroke:#ffffff;stroke-opacity:1">
<polyline
   points="799.057,562.26 800.344,559.456 803.449,558.293 806.554,559.456 807.841,562.26 "
   id="polyline1160"
   data-element-id="element-1571-1761788125776"
   style="stroke:#ffffff;stroke-opacity:1" />
</g></g>




<g
   id="g222"
   transform="translate(0,8)"><g
     transform="matrix(0.32,0,0,0.26,610.5,540.61)"
     id="g173"><rect
       x="40"
       y="50"
       width="40"
       height="40"
       rx="4"
       fill="#d0d0d0"
       stroke="#707070"
       stroke-width="2.5"
       id="rect164" /><rect
       x="42"
       y="52"
       width="36"
       height="8"
       fill="rgba(255,255,255,0.4)"
       id="rect165"
       style="fill:#ffffff;fill-opacity:0.49803904" /><rect
       x="42"
       y="80"
       width="36"
       height="8"
       fill="rgba(0,0,0,0.15)"
       id="rect166"
       style="fill:#ffffff;fill-opacity:0.49803904" /><rect
       x="52"
       y="30"
       width="16"
       height="22"
       rx="2"
       fill="#d0d0d0"
       stroke="#707070"
       stroke-width="2"
       id="rect167" /><rect
       x="53"
       y="31"
       width="14"
       height="5"
       fill="rgba(255,255,255,0.4)"
       id="rect168"
       style="fill:#ffffff;fill-opacity:0.49803904" /><ellipse
       cx="60"
       cy="20"
       rx="20"
       ry="9"
       fill="#ff8c00"
       stroke="#cc5500"
       stroke-width="2.5"
       id="ellipse168" /><ellipse
       cx="60"
       cy="17"
       rx="18"
       ry="7"
       fill="#ff7f00"
       id="ellipse169" /><line
       x1="42"
       y1="17"
       x2="78"
       y2="17"
       stroke="#994400"
       stroke-width="3"
       id="line169" /><line
       x1="60"
       y1="9"
       x2="60"
       y2="25"
       stroke="#994400"
       stroke-width="3"
       id="line170" /><circle
       cx="60"
       cy="17"
       r="4"
       fill="#ff7f00"
       id="circle173" /><ellipse
       cx="60"
       cy="14"
       rx="10"
       ry="3"
       fill="rgba(255,255,255,0.5)"
       id="ellipse173"
       style="fill:#ffffff;fill-opacity:0.49803904" /><rect
       x="57"
       y="24"
       width="6"
       height="8"
       fill="#a8a8a8"
       stroke="#707070"
       stroke-width="1"
       id="rect173" /></g></g>
<g
   clip-path="url(#clipId0)"
   fill="none"
   stroke="rgb(0,0,0)"
   stroke-width="0.7"
   id="g1167"
   data-element-id="element-1583-1761788125776"
   style="cursor:pointer;stroke:#ffffff;stroke-opacity:1">
<polyline
   points="799.907,577.985 801.194,575.145 804.299,573.971 807.404,575.145 808.691,577.985 "
   id="polyline1166"
   data-element-id="element-1584-1761788125776"
   style="cursor:pointer;stroke:#ffffff;stroke-opacity:1" />
<polyline
   points="799.53,578.315 711.982,578.315 "
   id="polyline1167"
   data-element-id="element-1585-1761788125776"
   style="cursor:pointer;stroke:#ffffff;stroke-opacity:1" />
</g>

<g
   clip-path="url(#clipId0)"
   fill="rgb(255,255,255)"
   stroke="rgb(255,255,255)"
   stroke-width="0.25"
   fill-opacity="0.498039"
   stroke-opacity="0.498039"
   id="g1170"
   data-element-id="element-1589-1761788125776"
   style="cursor: pointer;">
<path
   d="M717.459,573.971 722.937,577.748 717.459,581.526 717.459,581.526 z"
   id="path1169"
   data-element-id="element-1590-1761788125776"
   style="cursor: pointer;" />
</g>

<g
   clip-path="url(#clipId0)"
   fill="rgb(255,255,255)"
   stroke="rgb(255,255,255)"
   stroke-width="0.25"
   fill-opacity="0.498039"
   stroke-opacity="0.498039"
   id="g1172"
   data-element-id="element-1593-1761788125776"
   style="cursor: pointer;">
<path
   d="M728.509,581.526 722.937,577.748 728.509,573.971 728.509,573.971 z"
   id="path1171"
   data-element-id="element-1594-1761788125776"
   style="cursor: pointer;" />
</g>
<g
   id="g210"
   transform="translate(0,4)"><g
     transform="matrix(0.32,0,0,0.26,705.03,556.38)"
     id="g184"><rect
       x="40"
       y="50"
       width="40"
       height="40"
       rx="4"
       fill="#d0d0d0"
       stroke="#707070"
       stroke-width="2.5"
       id="rect174" /><rect
       x="42"
       y="52"
       width="36"
       height="8"
       fill="rgba(255,255,255,0.4)"
       id="rect175"
       style="fill:#ffffff;fill-opacity:0.49803904" /><rect
       x="42"
       y="80"
       width="36"
       height="8"
       fill="rgba(0,0,0,0.15)"
       id="rect176"
       style="fill:#ffffff;fill-opacity:0.49803904" /><rect
       x="52"
       y="30"
       width="16"
       height="22"
       rx="2"
       fill="#d0d0d0"
       stroke="#707070"
       stroke-width="2"
       id="rect177" /><rect
       x="53"
       y="31"
       width="14"
       height="5"
       fill="rgba(255,255,255,0.4)"
       id="rect178"
       style="fill:#ffffff;fill-opacity:0.49803904" /><ellipse
       cx="60"
       cy="20"
       rx="20"
       ry="9"
       fill="#ff8c00"
       stroke="#cc5500"
       stroke-width="2.5"
       id="ellipse178" /><ellipse
       cx="60"
       cy="17"
       rx="18"
       ry="7"
       fill="#ff7f00"
       id="ellipse179" /><line
       x1="42"
       y1="17"
       x2="78"
       y2="17"
       stroke="#994400"
       stroke-width="3"
       id="line179" /><line
       x1="60"
       y1="9"
       x2="60"
       y2="25"
       stroke="#994400"
       stroke-width="3"
       id="line180" /><circle
       cx="60"
       cy="17"
       r="4"
       fill="#ff7f00"
       id="circle180" /><ellipse
       cx="60"
       cy="14"
       rx="10"
       ry="3"
       fill="rgba(255,255,255,0.5)"
       id="ellipse180"
       style="fill:#ffffff;fill-opacity:0.49803904" /><rect
       x="57"
       y="24"
       width="6"
       height="8"
       fill="#a8a8a8"
       stroke="#707070"
       stroke-width="1"
       id="rect180" /></g></g>
<g
   clip-path="url(#clipId0)"
   fill="none"
   stroke="rgb(0,0,0)"
   stroke-width="0.7"
   id="g1174"
   data-element-id="element-1597-1761788125776"
   style="stroke:#ffffff;stroke-opacity:1"
   transform="matrix(0.98498802,0,0,1.0003887,12.08077,-0.22734624)">
<polyline
   points="883.017,578.315 809.446,578.315 "
   id="polyline1173"
   data-element-id="element-1598-1761788125776"
   style="stroke:#ffffff;stroke-opacity:1" />
<polyline
   points="882.922,591.537 804.913,591.537 "
   id="polyline1174"
   data-element-id="element-1599-1761788125776"
   style="stroke:#ffffff;stroke-opacity:1" />
</g>

<g
   clip-path="url(#clipId0)"
   fill="rgb(255,255,255)"
   stroke="rgb(255,255,255)"
   stroke-width="0.25"
   fill-opacity="0.498039"
   stroke-opacity="0.498039"
   id="g1177"
   data-element-id="element-1603-1761788125777"
   style="cursor: pointer;">
<path
   d="M812.94,588.137 818.418,591.915 812.94,595.692 812.94,595.692 z"
   id="path1176"
   data-element-id="element-1604-1761788125777"
   style="cursor: pointer;" />
</g>

<g
   clip-path="url(#clipId0)"
   fill="rgb(255,255,255)"
   stroke="rgb(255,255,255)"
   stroke-width="0.25"
   fill-opacity="0.498039"
   stroke-opacity="0.498039"
   id="g1179"
   data-element-id="element-1607-1761788125777"
   style="cursor: pointer;">
<path
   d="M823.99,595.692 818.418,591.915 823.99,588.137 823.99,588.137 z"
   id="path1178"
   data-element-id="element-1608-1761788125777"
   style="cursor: pointer;" />
</g>
<g
   id="g212"
   transform="translate(0,4)"><g
     transform="matrix(0.32,0,0,0.26,800.51,570.55)"
     id="g194"><rect
       x="40"
       y="50"
       width="40"
       height="40"
       rx="4"
       fill="#d0d0d0"
       stroke="#707070"
       stroke-width="2.5"
       id="rect184" /><rect
       x="42"
       y="52"
       width="36"
       height="8"
       fill="rgba(255,255,255,0.4)"
       id="rect185"
       style="fill:#ffffff;fill-opacity:0.49803904" /><rect
       x="42"
       y="80"
       width="36"
       height="8"
       fill="rgba(0,0,0,0.15)"
       id="rect186"
       style="fill:#ffffff;fill-opacity:0.49803904" /><rect
       x="52"
       y="30"
       width="16"
       height="22"
       rx="2"
       fill="#d0d0d0"
       stroke="#707070"
       stroke-width="2"
       id="rect187" /><rect
       x="53"
       y="31"
       width="14"
       height="5"
       fill="rgba(255,255,255,0.4)"
       id="rect188"
       style="fill:#ffffff;fill-opacity:0.49803904" /><ellipse
       cx="60"
       cy="20"
       rx="20"
       ry="9"
       fill="#ff8c00"
       stroke="#cc5500"
       stroke-width="2.5"
       id="ellipse188" /><ellipse
       cx="60"
       cy="17"
       rx="18"
       ry="7"
       fill="#ff7f00"
       id="ellipse189" /><line
       x1="42"
       y1="17"
       x2="78"
       y2="17"
       stroke="#994400"
       stroke-width="3"
       id="line189" /><line
       x1="60"
       y1="9"
       x2="60"
       y2="25"
       stroke="#994400"
       stroke-width="3"
       id="line190" /><circle
       cx="60"
       cy="17"
       r="4"
       fill="#ff7f00"
       id="circle190" /><ellipse
       cx="60"
       cy="14"
       rx="10"
       ry="3"
       fill="rgba(255,255,255,0.5)"
       id="ellipse190"
       style="fill:#ffffff;fill-opacity:0.49803904" /><rect
       x="57"
       y="24"
       width="6"
       height="8"
       fill="#a8a8a8"
       stroke="#707070"
       stroke-width="1"
       id="rect194" /></g></g>
<g
   clip-path="url(#clipId0)"
   fill="rgb(0,0,0)"
   stroke="rgb(0,0,0)"
   stroke-width="0"
   id="g1185"
   data-element-id="element-1611-1761788125777"
   style="cursor: pointer;">
<text
   transform="matrix(9.00314,0,0,8.99231,131.062,650.571)"
   font-family="Calibri, sans-serif"
   font-weight="bold"
   font-size="1.57532px"
   id="text1180"
   data-element-id="element-1612-1761788125777"><tspan
     style="fill:#ffffff;fill-opacity:1"
     id="tspan76">High</tspan></text>
<text
   transform="matrix(9.01045,0,0,8.99231,108.302,667.57)"
   font-family="Calibri, sans-serif"
   font-weight="bold"
   font-size="1.57532px"
   id="text1181"
   data-element-id="element-1613-1761788125777"><tspan
     style="fill:#ffffff;fill-opacity:1"
     id="tspan78">Sea</tspan></text>
<text
   transform="matrix(8.971,0,0,8.99231,132.286,667.577)"
   font-family="Calibri, sans-serif"
   font-weight="bold"
   font-size="1.57532px"
   id="text1182"
   data-element-id="element-1614-1761788125777"><tspan
     style="fill:#ffffff;fill-opacity:1"
     id="tspan77">Chest(P)</tspan></text>
<text
   transform="matrix(8.9835 0 -0 9.0043 953.674 673.274)"
   font-family="Calibri,'sans-serif'"
   font-weight="bold"
   font-size="1.57532"
   id="text1183"
   data-element-id="element-1615-1761788125777"
   style="cursor:pointer;fill:#ffffff;fill-opacity:1">Low</text>
<text
   transform="matrix(9.01045 0 -0 8.99231 930.91 690.293)"
   font-family="Calibri,'sans-serif'"
   font-weight="bold"
   font-size="1.57532"
   id="text1184"
   data-element-id="element-1616-1761788125777"
   style="cursor:pointer;fill:#ffffff;fill-opacity:1">Sea</text>
<text
   transform="matrix(8.97242 0 -0 8.99231 954.894 690.3)"
   font-family="Calibri,'sans-serif'"
   font-weight="bold"
   font-size="1.57532"
   id="text1185"
   data-element-id="element-1617-1761788125777"
   style="cursor:pointer;fill:#ffffff;fill-opacity:1">Chest(S)</text>
</g>














<g
   clip-path="url(#clipId0)"
   fill="#0000ff"
   stroke="#0000ff"
   stroke-width="0"
   id="g1264"
   data-element-id="element-1717-1761788125777"
   transform="translate(-62,-36)"
   style="fill:#ffffff;fill-opacity:1">
<text
   transform="matrix(6.71726,0,0,6.70503,304.547,488.51)"
   font-family="Bahnschrift, sans-serif"
   font-size="1.4081px"
   id="text1263"
   data-element-id="element-1718-1761788125777"
   style="fill:#ffffff;fill-opacity:1">NO</text>
<text
   transform="matrix(6.74281,0,0,6.70503,317.312,488.508)"
   font-family="Bahnschrift, sans-serif"
   font-size="1.4081px"
   id="text1264"
   data-element-id="element-1719-1761788125777"
   style="fill:#ffffff;fill-opacity:1">.2</text>
</g>





<g
   clip-path="url(#clipId0)"
   fill="#0000ff"
   stroke="#0000ff"
   stroke-width="0"
   id="g1292"
   data-element-id="element-1753-1761788125777"
   transform="translate(-62,-36)">
<text
   transform="matrix(6.71726,0,0,6.70503,304.547,575.342)"
   font-family="Bahnschrift, sans-serif"
   font-size="1.4081px"
   id="text1291"
   data-element-id="element-1754-1761788125777"
   style="fill:#ffffff;fill-opacity:1;stroke:#0000ff;stroke-opacity:1">NO.3</text>

</g>











































<text
   xml:space="preserve"
   id="text11"
   style="text-align:start;writing-mode:lr-tb;direction:ltr;white-space:pre;shape-inside:url(#rect11);display:inline;fill:#ffffff" /><g
   clip-path="url(#clipId0)"
   fill="none"
   stroke="#000000"
   stroke-width="0.53"
   id="g78"
   data-element-id="element-107-1761788125775"
   transform="matrix(0.78530909,0,0,0.81148132,203.11445,11.073799)">
<!-- 3-Way Valve -->
<g
   id="valve_3way"
   transform="translate(239.54118,543.45621)">
    <defs
   id="defs17">
        <linearGradient
   id="bodyGrad_valve"
   x1="-8.1999998"
   y1="-8.1999998"
   x2="8.1999998"
   y2="8.1999998"
   gradientUnits="userSpaceOnUse">
            <stop
   offset="0%"
   style="stop-color:#d0d0d0;stop-opacity:1"
   id="stop65" />
            <stop
   offset="50%"
   style="stop-color:#f0f0f0;stop-opacity:1"
   id="stop66" />
            <stop
   offset="100%"
   style="stop-color:#b0b0b0;stop-opacity:1"
   id="stop67" />
        </linearGradient>
        <linearGradient
   id="blueFlow_valve"
   x1="0"
   y1="0"
   x2="1"
   y2="0">
            <stop
   offset="0%"
   style="stop-color:#00b0f0;stop-opacity:1"
   id="stop68" />
            <stop
   offset="100%"
   style="stop-color:#0077b6;stop-opacity:1"
   id="stop69" />
        </linearGradient>
        <linearGradient
   id="redFlow_valve"
   x1="0"
   y1="0"
   x2="1"
   y2="0">
            <stop
   offset="0%"
   style="stop-color:#ff4444;stop-opacity:1"
   id="stop70" />
            <stop
   offset="100%"
   style="stop-color:#cc0000;stop-opacity:1"
   id="stop71" />
        </linearGradient>
        <radialGradient
   id="mixingGrad_valve"
   cx="0"
   cy="0"
   fx="0"
   fy="0"
   r="5.625"
   gradientUnits="userSpaceOnUse">
            <stop
   offset="0%"
   style="stop-color:#ff6b6b;stop-opacity:0.5"
   id="stop72" />
            <stop
   offset="50%"
   style="stop-color:#a855f7;stop-opacity:0.5"
   id="stop73" />
            <stop
   offset="100%"
   style="stop-color:#3b82f6;stop-opacity:0.7"
   id="stop74" />
        </radialGradient>
    </defs>
    
    <!-- Central Body -->
    <circle
   cx="0"
   cy="0"
   r="8"
   fill="url(#bodyGrad_valve)"
   stroke="#555555"
   stroke-width="0.4"
   id="circle17"
   style="fill:url(#bodyGrad_valve)" />
    
    <!-- Mixing chamber -->
    <circle
   cx="0"
   cy="0"
   r="5.5"
   fill="url(#mixingGrad_valve)"
   stroke="#666666"
   stroke-width="0.25"
   id="circle18"
   style="fill:url(#mixingGrad_valve)" />
    
    <!-- Valve element -->
    <circle
   cx="0"
   cy="0"
   r="3.4000001"
   fill="#ffd700"
   stroke="#cc8800"
   stroke-width="0.25"
   id="circle222" />
    
    <!-- TOP: Controller -->
    <rect
   x="-3.7"
   y="-15.6"
   width="7.4000001"
   height="8.6000004"
   fill="#34495e"
   stroke="#2c3e50"
   stroke-width="0.37"
   rx="0.60000002"
   id="rect196"
   style="fill:#adbfd2;fill-opacity:1;stroke:#6b8dad;stroke-opacity:1" />
    <circle
   cx="0"
   y="-11.3"
   r="2.5"
   fill="#3498db"
   stroke="#2980b9"
   stroke-width="0.25"
   id="circle223"
   cy="0" />
    <rect
   x="-2.5"
   y="-8.8000002"
   width="2.5"
   height="6.8000002"
   fill="#95a5a6"
   stroke="#7f8c8d"
   stroke-width="0.25"
   id="rect197" />
    
    <!-- LEFT: HOT IN -->
    <rect
   x="-20"
   y="-2.5"
   width="12.9"
   height="5"
   fill="url(#redFlow_valve)"
   stroke="#cc0000"
   stroke-width="0.37"
   rx="0.37"
   id="rect223"
   style="fill:url(#linearGradient77)" />
    <polygon
   points="-5.8,1.2 -7.5,0 -5.8,-1.2 "
   fill="url(#redFlow_valve)"
   stroke="#cc0000"
   stroke-width="0.25"
   id="polygon21"
   style="fill:url(#linearGradient78)" />
    <circle
   cx="-12"
   cy="0"
   r="1.5"
   fill="#ffffff"
   id="circle224">
        <animate
   attributeName="cx"
   from="-18"
   to="-6"
   dur="2s"
   repeatCount="indefinite" />
    </circle>
    
    <!-- RIGHT: COLD IN -->
    <rect
   x="7.5"
   y="-2.5"
   width="12.9"
   height="5"
   fill="url(#blueFlow_valve)"
   stroke="#0066cc"
   stroke-width="0.37"
   rx="0.37"
   id="rect198"
   style="fill:url(#linearGradient79)" />
    <polygon
   points="5.8,1.2 7.5,0 5.8,-1.2 "
   fill="url(#blueFlow_valve)"
   stroke="#0066cc"
   stroke-width="0.25"
   id="polygon22"
   style="fill:url(#linearGradient80)" />
    <circle
   cx="14"
   cy="0"
   r="1.5"
   fill="#ffffff"
   id="circle22">
        <animate
   attributeName="cx"
   from="19"
   to="8"
   dur="2s"
   repeatCount="indefinite" />
    </circle>
    
    <!-- BOTTOM: COLD OUT -->
    <rect
   x="-2.5"
   y="8"
   width="5"
   height="11.7"
   fill="url(#blueFlow_valve)"
   stroke="#0066cc"
   stroke-width="0.37"
   rx="0.37"
   id="rect199"
   style="fill:url(#linearGradient81)" />
    <polygon
   points="1.2,6.5 0,8.2 -1.2,6.5 "
   fill="url(#blueFlow_valve)"
   stroke="#0066cc"
   stroke-width="0.25"
   id="polygon23"
   style="fill:url(#linearGradient82)" />
    <circle
   cx="0"
   cy="11"
   r="1.5"
   fill="#ffffff"
   id="circle23">
        <animate
   attributeName="cy"
   from="7"
   to="18.5"
   dur="2s"
   repeatCount="indefinite" />
    </circle>
    
    <!-- Control panel -->
    <rect
   x="9"
   y="-10.3"
   width="8.6000004"
   height="5.5"
   fill="#ecf0f1"
   stroke="#bdc3c7"
   stroke-width="0.25"
   rx="0.5"
   id="rect113" />
    <circle
   cx="11"
   cy="-7.8000002"
   r="0.69999999"
   fill="#27ae60"
   id="circle24"
   style="stroke:#ffffff;stroke-opacity:1" />
    <rect
   x="9.8000002"
   y="-5.6999998"
   width="3.0999999"
   height="1.2"
   fill="#ff4444"
   id="rect200"
   style="stroke:#ffffff;stroke-opacity:0.49803904" />
    <rect
   x="12.9"
   y="-5.6999998"
   width="3.7"
   height="1.2"
   fill="#00b0f0"
   id="rect201"
   style="stroke:#ffffff;stroke-opacity:0.49803904" />
</g>

</g><g
   id="g152-4"
   transform="translate(82.029219,9.2566545)"><g
     transform="matrix(0.32,0,0,0.26,330.66,367.5)"
     id="g7-8"><rect
       x="40"
       y="50"
       width="40"
       height="40"
       rx="4"
       fill="#d0d0d0"
       stroke="#707070"
       stroke-width="2.5"
       id="rect1-8" /><rect
       x="42"
       y="52"
       width="36"
       height="8"
       fill="rgba(255,255,255,0.4)"
       id="rect2-2"
       style="fill:#ffffff;fill-opacity:0.498039" /><rect
       x="42"
       y="80"
       width="36"
       height="8"
       fill="rgba(0,0,0,0.15)"
       id="rect3-4"
       style="fill:#ffffff;fill-opacity:0.498039" /><rect
       x="52"
       y="30"
       width="16"
       height="22"
       rx="2"
       fill="#d0d0d0"
       stroke="#707070"
       stroke-width="2"
       id="rect4-5" /><rect
       x="53"
       y="31"
       width="14"
       height="5"
       fill="rgba(255,255,255,0.4)"
       id="rect5-5"
       style="fill:#ffffff;fill-opacity:0.498039" /><ellipse
       cx="60"
       cy="20"
       rx="20"
       ry="9"
       fill="#ff8c00"
       stroke="#cc5500"
       stroke-width="2.5"
       id="ellipse5-1" /><ellipse
       cx="60"
       cy="17"
       rx="18"
       ry="7"
       fill="#ff7f00"
       id="ellipse6-7" /><line
       x1="42"
       y1="17"
       x2="78"
       y2="17"
       stroke="#994400"
       stroke-width="3"
       id="line6-1" /><line
       x1="60"
       y1="9"
       x2="60"
       y2="25"
       stroke="#994400"
       stroke-width="3"
       id="line7-1" /><circle
       cx="60"
       cy="17"
       r="4"
       fill="#ff7f00"
       id="circle7-5" /><ellipse
       cx="60"
       cy="14"
       rx="10"
       ry="3"
       fill="rgba(255,255,255,0.5)"
       id="ellipse7-2"
       style="fill:#ffffff;fill-opacity:0.498039" /><rect
       x="57"
       y="24"
       width="6"
       height="8"
       fill="#a8a8a8"
       stroke="#707070"
       stroke-width="1"
       id="rect7-7" /></g></g><g
   id="g152-4-4"
   transform="translate(79.653754,-63.445941)"><g
     transform="matrix(0.32,0,0,0.26,330.66,367.5)"
     id="g7-8-2"><rect
       x="40"
       y="50"
       width="40"
       height="40"
       rx="4"
       fill="#d0d0d0"
       stroke="#707070"
       stroke-width="2.5"
       id="rect1-8-3" /><rect
       x="42"
       y="52"
       width="36"
       height="8"
       fill="rgba(255,255,255,0.4)"
       id="rect2-2-2"
       style="fill:#ffffff;fill-opacity:0.498039" /><rect
       x="42"
       y="80"
       width="36"
       height="8"
       fill="rgba(0,0,0,0.15)"
       id="rect3-4-2"
       style="fill:#ffffff;fill-opacity:0.498039" /><rect
       x="52"
       y="30"
       width="16"
       height="22"
       rx="2"
       fill="#d0d0d0"
       stroke="#707070"
       stroke-width="2"
       id="rect4-5-1" /><rect
       x="53"
       y="31"
       width="14"
       height="5"
       fill="rgba(255,255,255,0.4)"
       id="rect5-5-6"
       style="fill:#ffffff;fill-opacity:0.498039" /><ellipse
       cx="60"
       cy="20"
       rx="20"
       ry="9"
       fill="#ff8c00"
       stroke="#cc5500"
       stroke-width="2.5"
       id="ellipse5-1-8" /><ellipse
       cx="60"
       cy="17"
       rx="18"
       ry="7"
       fill="#ff7f00"
       id="ellipse6-7-5" /><line
       x1="42"
       y1="17"
       x2="78"
       y2="17"
       stroke="#994400"
       stroke-width="3"
       id="line6-1-7" /><line
       x1="60"
       y1="9"
       x2="60"
       y2="25"
       stroke="#994400"
       stroke-width="3"
       id="line7-1-6" /><circle
       cx="60"
       cy="17"
       r="4"
       fill="#ff7f00"
       id="circle7-5-1" /><ellipse
       cx="60"
       cy="14"
       rx="10"
       ry="3"
       fill="rgba(255,255,255,0.5)"
       id="ellipse7-2-8"
       style="fill:#ffffff;fill-opacity:0.498039" /><rect
       x="57"
       y="24"
       width="6"
       height="8"
       fill="#a8a8a8"
       stroke="#707070"
       stroke-width="1"
       id="rect7-7-9" /></g></g><g
   id="g152-4-9"
   transform="translate(79.220058,-136.28928)"><g
     transform="matrix(0.32,0,0,0.26,330.66,367.5)"
     id="g7-8-5"><rect
       x="40"
       y="50"
       width="40"
       height="40"
       rx="4"
       fill="#d0d0d0"
       stroke="#707070"
       stroke-width="2.5"
       id="rect1-8-4" /><rect
       x="42"
       y="52"
       width="36"
       height="8"
       fill="rgba(255,255,255,0.4)"
       id="rect2-2-3"
       style="fill:#ffffff;fill-opacity:0.498039" /><rect
       x="42"
       y="80"
       width="36"
       height="8"
       fill="rgba(0,0,0,0.15)"
       id="rect3-4-1"
       style="fill:#ffffff;fill-opacity:0.498039" /><rect
       x="52"
       y="30"
       width="16"
       height="22"
       rx="2"
       fill="#d0d0d0"
       stroke="#707070"
       stroke-width="2"
       id="rect4-5-2" /><rect
       x="53"
       y="31"
       width="14"
       height="5"
       fill="rgba(255,255,255,0.4)"
       id="rect5-5-3"
       style="fill:#ffffff;fill-opacity:0.498039" /><ellipse
       cx="60"
       cy="20"
       rx="20"
       ry="9"
       fill="#ff8c00"
       stroke="#cc5500"
       stroke-width="2.5"
       id="ellipse5-1-3" /><ellipse
       cx="60"
       cy="17"
       rx="18"
       ry="7"
       fill="#ff7f00"
       id="ellipse6-7-4" /><line
       x1="42"
       y1="17"
       x2="78"
       y2="17"
       stroke="#994400"
       stroke-width="3"
       id="line6-1-1" /><line
       x1="60"
       y1="9"
       x2="60"
       y2="25"
       stroke="#994400"
       stroke-width="3"
       id="line7-1-1" /><circle
       cx="60"
       cy="17"
       r="4"
       fill="#ff7f00"
       id="circle7-5-3" /><ellipse
       cx="60"
       cy="14"
       rx="10"
       ry="3"
       fill="rgba(255,255,255,0.5)"
       id="ellipse7-2-87"
       style="fill:#ffffff;fill-opacity:0.498039" /><rect
       x="57"
       y="24"
       width="6"
       height="8"
       fill="#a8a8a8"
       stroke="#707070"
       stroke-width="1"
       id="rect7-7-4" /></g></g><g
   id="g152-4-7"
   transform="translate(77.285868,-208.28928)"><g
     transform="matrix(0.32,0,0,0.26,330.66,367.5)"
     id="g7-8-9"><rect
       x="40"
       y="50"
       width="40"
       height="40"
       rx="4"
       fill="#d0d0d0"
       stroke="#707070"
       stroke-width="2.5"
       id="rect1-8-31" /><rect
       x="42"
       y="52"
       width="36"
       height="8"
       fill="rgba(255,255,255,0.4)"
       id="rect2-2-9"
       style="fill:#ffffff;fill-opacity:0.498039" /><rect
       x="42"
       y="80"
       width="36"
       height="8"
       fill="rgba(0,0,0,0.15)"
       id="rect3-4-8"
       style="fill:#ffffff;fill-opacity:0.498039" /><rect
       x="52"
       y="30"
       width="16"
       height="22"
       rx="2"
       fill="#d0d0d0"
       stroke="#707070"
       stroke-width="2"
       id="rect4-5-6" /><rect
       x="53"
       y="31"
       width="14"
       height="5"
       fill="rgba(255,255,255,0.4)"
       id="rect5-5-5"
       style="fill:#ffffff;fill-opacity:0.498039" /><ellipse
       cx="60"
       cy="20"
       rx="20"
       ry="9"
       fill="#ff8c00"
       stroke="#cc5500"
       stroke-width="2.5"
       id="ellipse5-1-0" /><ellipse
       cx="60"
       cy="17"
       rx="18"
       ry="7"
       fill="#ff7f00"
       id="ellipse6-7-2" /><line
       x1="42"
       y1="17"
       x2="78"
       y2="17"
       stroke="#994400"
       stroke-width="3"
       id="line6-1-8" /><line
       x1="60"
       y1="9"
       x2="60"
       y2="25"
       stroke="#994400"
       stroke-width="3"
       id="line7-1-60" /><circle
       cx="60"
       cy="17"
       r="4"
       fill="#ff7f00"
       id="circle7-5-2" /><ellipse
       cx="60"
       cy="14"
       rx="10"
       ry="3"
       fill="rgba(255,255,255,0.5)"
       id="ellipse7-2-4"
       style="fill:#ffffff;fill-opacity:0.498039" /><rect
       x="57"
       y="24"
       width="6"
       height="8"
       fill="#a8a8a8"
       stroke="#707070"
       stroke-width="1"
       id="rect7-7-8" /></g></g><g
   id="g152-4-09"
   transform="translate(215.02461,8.0471871)"><g
     transform="matrix(0.32,0,0,0.26,330.66,367.5)"
     id="g7-8-4"><rect
       x="40"
       y="50"
       width="40"
       height="40"
       rx="4"
       fill="#d0d0d0"
       stroke="#707070"
       stroke-width="2.5"
       id="rect1-8-78" /><rect
       x="42"
       y="52"
       width="36"
       height="8"
       fill="rgba(255,255,255,0.4)"
       id="rect2-2-35"
       style="fill:#ffffff;fill-opacity:0.498039" /><rect
       x="42"
       y="80"
       width="36"
       height="8"
       fill="rgba(0,0,0,0.15)"
       id="rect3-4-12"
       style="fill:#ffffff;fill-opacity:0.498039" /><rect
       x="52"
       y="30"
       width="16"
       height="22"
       rx="2"
       fill="#d0d0d0"
       stroke="#707070"
       stroke-width="2"
       id="rect4-5-0" /><rect
       x="53"
       y="31"
       width="14"
       height="5"
       fill="rgba(255,255,255,0.4)"
       id="rect5-5-1"
       style="fill:#ffffff;fill-opacity:0.498039" /><ellipse
       cx="60"
       cy="20"
       rx="20"
       ry="9"
       fill="#ff8c00"
       stroke="#cc5500"
       stroke-width="2.5"
       id="ellipse5-1-6" /><ellipse
       cx="60"
       cy="17"
       rx="18"
       ry="7"
       fill="#ff7f00"
       id="ellipse6-7-40" /><line
       x1="42"
       y1="17"
       x2="78"
       y2="17"
       stroke="#994400"
       stroke-width="3"
       id="line6-1-61" /><line
       x1="60"
       y1="9"
       x2="60"
       y2="25"
       stroke="#994400"
       stroke-width="3"
       id="line7-1-8" /><circle
       cx="60"
       cy="17"
       r="4"
       fill="#ff7f00"
       id="circle7-5-9" /><ellipse
       cx="60"
       cy="14"
       rx="10"
       ry="3"
       fill="rgba(255,255,255,0.5)"
       id="ellipse7-2-84"
       style="fill:#ffffff;fill-opacity:0.498039" /><rect
       x="57"
       y="24"
       width="6"
       height="8"
       fill="#a8a8a8"
       stroke="#707070"
       stroke-width="1"
       id="rect7-7-14" /></g></g><g
   clip-path="url(#clipId0)"
   fill="rgb(255,255,255)"
   stroke="rgb(255,255,255)"
   stroke-width="0.25"
   fill-opacity="0.498039"
   stroke-opacity="0.498039"
   id="g482"
   data-element-id="element-757-1761788125776"
   style="cursor:pointer;fill:#000000;fill-opacity:1;stroke:#ffffff;stroke-opacity:0.49803904">
<path
   d="M171.677,497.284 167.9,502.761 164.122,497.284 164.122,497.284 z"
   id="path481"
   data-element-id="element-758-1761788125776"
   style="cursor:pointer;fill:#000000;fill-opacity:1;stroke:#ffffff;stroke-opacity:0.49803904" />
</g><g
   id="g220"
   style="stroke:#ffffff;stroke-opacity:1;fill:#000000;fill-opacity:1"><g
     clip-path="url(#clipId0)"
     fill="none"
     stroke="rgb(0,0,0)"
     stroke-width="0.53"
     id="g141"
     data-element-id="element-236-1761788125775"
     style="cursor:pointer;stroke:#ffffff;stroke-opacity:1;fill:#000000;fill-opacity:1">
<polyline
   points="778.469,359.87 778.469,352.976 "
   id="polyline140"
   data-element-id="element-237-1761788125775"
   style="cursor:pointer;stroke:#ffffff;stroke-opacity:1;fill:#000000;fill-opacity:1" />
<polyline
   points="774.691,352.787 782.247,352.787 "
   id="polyline141"
   data-element-id="element-238-1761788125775"
   style="cursor:pointer;stroke:#ffffff;stroke-opacity:1;fill:#000000;fill-opacity:1" />
</g><g
     clip-path="url(#clipId0)"
     fill="none"
     stroke="rgb(0,0,0)"
     stroke-width="0.53"
     id="g143"
     data-element-id="element-241-1761788125775"
     style="cursor:pointer;stroke:#ffffff;stroke-opacity:1;fill:#000000;fill-opacity:1">
<polyline
   points="772.897,355.715 778.375,359.492 772.897,363.27 772.897,355.715 "
   id="polyline142"
   data-element-id="element-242-1761788125775"
   style="cursor:pointer;stroke:#ffffff;stroke-opacity:1;fill:#000000;fill-opacity:1" />
</g><g
     clip-path="url(#clipId0)"
     fill="none"
     stroke="rgb(0,0,0)"
     stroke-width="0.53"
     id="g145"
     data-element-id="element-245-1761788125775"
     style="cursor:pointer;stroke:#ffffff;stroke-opacity:1;fill:#000000;fill-opacity:1">
<polyline
   points="783.947,363.27 778.375,359.492 783.947,355.715 783.947,363.27 "
   id="polyline144"
   data-element-id="element-246-1761788125775"
   style="cursor:pointer;stroke:#ffffff;stroke-opacity:1;fill:#000000;fill-opacity:1" />
</g></g><g
   clip-path="url(#clipId0)"
   fill="none"
   stroke="rgb(0,0,0)"
   stroke-width="0.53"
   id="g206"
   data-element-id="element-339-1761788125775"
   style="cursor:pointer;stroke:#ffffff;stroke-opacity:1;fill:#000000;fill-opacity:1">
<polyline
   points="929.238,246.689 934.346,252.662 926.649,254.236 929.238,246.689 "
   id="polyline205"
   data-element-id="element-340-1761788125775"
   style="cursor:pointer;stroke:#ffffff;stroke-opacity:1;fill:#000000;fill-opacity:1" />
</g><g
   clip-path="url(#clipId0)"
   fill="none"
   stroke="rgb(0,0,0)"
   stroke-width="0.53"
   id="g211"
   data-element-id="element-343-1761788125775"
   style="cursor:pointer;stroke:#ffffff;stroke-opacity:1;fill:#000000;fill-opacity:1">
<polyline
   points="939.462,258.636 934.346,252.662 942.051,251.088 939.462,258.636 "
   id="polyline207"
   data-element-id="element-344-1761788125775"
   style="cursor:pointer;stroke:#ffffff;stroke-opacity:1;fill:#000000;fill-opacity:1" />
<polyline
   points="932.898,242.612 941.429,245.54 "
   id="polyline208"
   data-element-id="element-345-1761788125775"
   style="cursor:pointer;stroke:#ffffff;stroke-opacity:1;fill:#000000;fill-opacity:1" />
<polyline
   points="933.378,240.629 942.279,243.682 "
   id="polyline209"
   data-element-id="element-346-1761788125775"
   style="cursor:pointer;stroke:#ffffff;stroke-opacity:1;fill:#000000;fill-opacity:1" />
<polyline
   points="942.09,243.619 940.76,247.499 "
   id="polyline210"
   data-element-id="element-347-1761788125775"
   style="cursor:pointer;stroke:#ffffff;stroke-opacity:1;fill:#000000;fill-opacity:1" />
<polyline
   points="933.764,240.77 932.434,244.65 "
   id="polyline211"
   data-element-id="element-348-1761788125775"
   style="cursor:pointer;stroke:#ffffff;stroke-opacity:1;fill:#000000;fill-opacity:1" />
</g></svg>
`;function $x({sensors:e={},pumps:t=[],onPumpCommand:n}){var p,h,b;const r=N.useRef(null),[i,a]=N.useState(!1),[l,o]=N.useState(null);N.useEffect(()=>{if(r.current&&!i){r.current.innerHTML=Tx;const v=r.current.querySelector("svg");if(v){const w=v.querySelector("defs")||document.createElementNS("http://www.w3.org/2000/svg","defs");v.querySelector("defs")||v.insertBefore(w,v.firstChild);const y=document.createElementNS("http://www.w3.org/2000/svg","filter");y.setAttribute("id","sensorValueGlow"),y.setAttribute("x","-50%"),y.setAttribute("y","-50%"),y.setAttribute("width","200%"),y.setAttribute("height","200%");const m=document.createElementNS("http://www.w3.org/2000/svg","feGaussianBlur");m.setAttribute("in","SourceAlpha"),m.setAttribute("stdDeviation","2"),m.setAttribute("result","blur");const g=document.createElementNS("http://www.w3.org/2000/svg","feOffset");g.setAttribute("in","blur"),g.setAttribute("dx","0"),g.setAttribute("dy","1"),g.setAttribute("result","offsetBlur");const S=document.createElementNS("http://www.w3.org/2000/svg","feFlood");S.setAttribute("flood-color","#22d3ee"),S.setAttribute("flood-opacity","0.4"),S.setAttribute("result","color");const x=document.createElementNS("http://www.w3.org/2000/svg","feComposite");x.setAttribute("in","color"),x.setAttribute("in2","offsetBlur"),x.setAttribute("operator","in"),x.setAttribute("result","shadow");const k=document.createElementNS("http://www.w3.org/2000/svg","feMerge"),_=document.createElementNS("http://www.w3.org/2000/svg","feMergeNode");_.setAttribute("in","shadow");const j=document.createElementNS("http://www.w3.org/2000/svg","feMergeNode");j.setAttribute("in","SourceGraphic"),k.appendChild(_),k.appendChild(j),y.appendChild(m),y.appendChild(g),y.appendChild(S),y.appendChild(x),y.appendChild(k),w.appendChild(y);const O=document.createElementNS("http://www.w3.org/2000/svg","filter");O.setAttribute("id","textGlow"),O.setAttribute("x","-50%"),O.setAttribute("y","-50%"),O.setAttribute("width","200%"),O.setAttribute("height","200%");const M=document.createElementNS("http://www.w3.org/2000/svg","feGaussianBlur");M.setAttribute("in","SourceGraphic"),M.setAttribute("stdDeviation","1.5"),M.setAttribute("result","blur");const E=document.createElementNS("http://www.w3.org/2000/svg","feMerge"),A=document.createElementNS("http://www.w3.org/2000/svg","feMergeNode");A.setAttribute("in","blur");const P=document.createElementNS("http://www.w3.org/2000/svg","feMergeNode");P.setAttribute("in","SourceGraphic"),E.appendChild(A),E.appendChild(P),O.appendChild(M),O.appendChild(E),w.appendChild(O)}a(!0),s()}},[]);const s=()=>{if(!r.current)return;const v=r.current.querySelector("svg");if(!v)return;[{index:0,name:"SW Pump No.1",x:770,y:478,width:65,height:60},{index:1,name:"SW Pump No.2",x:680,y:478,width:65,height:60},{index:2,name:"SW Pump No.3",x:585,y:478,width:65,height:60},{index:3,name:"LT Pump No.1",x:240,y:360,width:65,height:60},{index:4,name:"LT Pump No.2",x:240,y:447,width:65,height:60},{index:5,name:"LT Pump No.3",x:240,y:557,width:65,height:60}].forEach(y=>{const m=document.createElementNS("http://www.w3.org/2000/svg","rect");m.setAttribute("x",y.x),m.setAttribute("y",y.y),m.setAttribute("width",y.width),m.setAttribute("height",y.height),m.setAttribute("fill","transparent"),m.setAttribute("cursor","pointer"),m.setAttribute("data-pump-index",y.index),m.addEventListener("click",()=>{u(y.index)}),v.appendChild(m)})},u=v=>{t[v]&&(o({...t[v],index:v}),console.log(`펌프 ${v} 클릭됨`))};N.useEffect(()=>{l&&t[l.index]&&o(v=>({...t[v.index],index:v.index}))},[t]),N.useEffect(()=>{i&&f()},[e,t,i]);const f=()=>{if(!r.current)return;const v=r.current.querySelector("svg");if(!v){console.warn("SVG 요소를 찾을 수 없습니다");return}console.log("📊 데이터 업데이트:",{sensors:e,pumps:t}),(()=>{const y=v.querySelector("defs")||document.createElementNS("http://www.w3.org/2000/svg","defs");if(!v.querySelector("#glassGlow")){const m=document.createElementNS("http://www.w3.org/2000/svg","filter");m.setAttribute("id","glassGlow"),m.setAttribute("x","-50%"),m.setAttribute("y","-50%"),m.setAttribute("width","200%"),m.setAttribute("height","200%");const g=document.createElementNS("http://www.w3.org/2000/svg","feGaussianBlur");g.setAttribute("stdDeviation","1"),g.setAttribute("result","coloredBlur");const S=document.createElementNS("http://www.w3.org/2000/svg","feMerge"),x=document.createElementNS("http://www.w3.org/2000/svg","feMergeNode");x.setAttribute("in","coloredBlur");const k=document.createElementNS("http://www.w3.org/2000/svg","feMergeNode");k.setAttribute("in","SourceGraphic"),S.appendChild(x),S.appendChild(k),m.appendChild(g),m.appendChild(S),y.appendChild(m)}if(!v.querySelector("#neonGlow")){const m=document.createElementNS("http://www.w3.org/2000/svg","filter");m.setAttribute("id","neonGlow"),m.setAttribute("x","-50%"),m.setAttribute("y","-50%"),m.setAttribute("width","200%"),m.setAttribute("height","200%");const g=document.createElementNS("http://www.w3.org/2000/svg","feGaussianBlur");g.setAttribute("stdDeviation","2.5"),g.setAttribute("result","coloredBlur");const S=document.createElementNS("http://www.w3.org/2000/svg","feMerge"),x=document.createElementNS("http://www.w3.org/2000/svg","feMergeNode");x.setAttribute("in","coloredBlur");const k=document.createElementNS("http://www.w3.org/2000/svg","feMergeNode");k.setAttribute("in","SourceGraphic"),S.appendChild(x),S.appendChild(k),m.appendChild(g),m.appendChild(S),y.appendChild(m)}if(!v.querySelector("#cardShadow")){const m=document.createElementNS("http://www.w3.org/2000/svg","filter");m.setAttribute("id","cardShadow"),m.setAttribute("x","-50%"),m.setAttribute("y","-50%"),m.setAttribute("width","200%"),m.setAttribute("height","200%");const g=document.createElementNS("http://www.w3.org/2000/svg","feGaussianBlur");g.setAttribute("stdDeviation","1.5"),g.setAttribute("result","coloredBlur");const S=document.createElementNS("http://www.w3.org/2000/svg","feMerge"),x=document.createElementNS("http://www.w3.org/2000/svg","feMergeNode");x.setAttribute("in","coloredBlur");const k=document.createElementNS("http://www.w3.org/2000/svg","feMergeNode");k.setAttribute("in","SourceGraphic"),S.appendChild(x),S.appendChild(k),m.appendChild(g),m.appendChild(S),y.appendChild(m)}if(!v.querySelector("#softGlow")){const m=document.createElementNS("http://www.w3.org/2000/svg","filter");m.setAttribute("id","softGlow"),m.setAttribute("x","-50%"),m.setAttribute("y","-50%"),m.setAttribute("width","200%"),m.setAttribute("height","200%");const g=document.createElementNS("http://www.w3.org/2000/svg","feGaussianBlur");g.setAttribute("stdDeviation","3"),g.setAttribute("result","coloredBlur");const S=document.createElementNS("http://www.w3.org/2000/svg","feMerge"),x=document.createElementNS("http://www.w3.org/2000/svg","feMergeNode");x.setAttribute("in","coloredBlur");const k=document.createElementNS("http://www.w3.org/2000/svg","feMergeNode");k.setAttribute("in","SourceGraphic"),S.appendChild(x),S.appendChild(k),m.appendChild(g),m.appendChild(S),y.appendChild(m)}if(!v.querySelector("#sharpShadow")){const m=document.createElementNS("http://www.w3.org/2000/svg","filter");m.setAttribute("id","sharpShadow"),m.setAttribute("x","-50%"),m.setAttribute("y","-50%"),m.setAttribute("width","200%"),m.setAttribute("height","200%");const g=document.createElementNS("http://www.w3.org/2000/svg","feGaussianBlur");g.setAttribute("stdDeviation","0.5"),g.setAttribute("result","coloredBlur");const S=document.createElementNS("http://www.w3.org/2000/svg","feMerge"),x=document.createElementNS("http://www.w3.org/2000/svg","feMergeNode");x.setAttribute("in","coloredBlur");const k=document.createElementNS("http://www.w3.org/2000/svg","feMergeNode");k.setAttribute("in","SourceGraphic"),S.appendChild(x),S.appendChild(k),m.appendChild(g),m.appendChild(S),y.appendChild(m)}v.querySelector("defs")||v.insertBefore(y,v.firstChild)})(),Ex.forEach(y=>{const m=y.name,g=e[m];if(g!==void 0&&y.x>0&&y.y>0){const S=g.toFixed(y.decimal),x=`${m}_value`;v.querySelectorAll(`#${x}_group`).forEach(T=>T.remove());const _=document.createElementNS("http://www.w3.org/2000/svg","g");_.setAttribute("id",`${x}_group`);const j="rgba(0, 0, 0, 0.95)",O="#00ff00",M="rgba(0, 255, 0, 0.4)",E="1",A="url(#ledGlow)",P="10",$=document.createElementNS("http://www.w3.org/2000/svg","text");$.setAttribute("id",x),$.setAttribute("x",y.x+6),$.setAttribute("y",y.y+4),$.setAttribute("font-family","Arial, sans-serif"),$.setAttribute("font-size",P),$.setAttribute("fill",O),$.setAttribute("font-weight","bold"),$.setAttribute("filter",A),$.textContent=`${S}${y.unit}`,v.appendChild($);const C=$.getBBox();v.removeChild($);const I=document.createElementNS("http://www.w3.org/2000/svg","rect");I.setAttribute("x",y.x-2),I.setAttribute("y",y.y-8),I.setAttribute("width",C.width+14),I.setAttribute("height",18),I.setAttribute("rx","4"),I.setAttribute("ry","4"),I.setAttribute("fill",j),I.setAttribute("stroke",M),I.setAttribute("stroke-width",E);const L=v.querySelector("defs")||document.createElementNS("http://www.w3.org/2000/svg","defs");if(!v.querySelector("#ledGlow")){const T=document.createElementNS("http://www.w3.org/2000/svg","filter");T.setAttribute("id","ledGlow"),T.setAttribute("x","-50%"),T.setAttribute("y","-50%"),T.setAttribute("width","200%"),T.setAttribute("height","200%");const D=document.createElementNS("http://www.w3.org/2000/svg","feGaussianBlur");D.setAttribute("stdDeviation","2"),D.setAttribute("result","coloredBlur");const R=document.createElementNS("http://www.w3.org/2000/svg","feMerge"),H=document.createElementNS("http://www.w3.org/2000/svg","feMergeNode");H.setAttribute("in","coloredBlur");const B=document.createElementNS("http://www.w3.org/2000/svg","feMergeNode");B.setAttribute("in","SourceGraphic"),R.appendChild(H),R.appendChild(B),T.appendChild(D),T.appendChild(R),L.appendChild(T),v.querySelector("defs")||v.insertBefore(L,v.firstChild)}_.appendChild(I),_.appendChild($),v.appendChild(_),console.log(`✅ 센서 ${m} 표시 (스타일 ${m}): x=${y.x}, y=${y.y}, 값=${S}${y.unit}`)}}),t.forEach((y,m)=>{const g=Mx[m];if(!g){console.warn(`펌프 ${m} 매핑 정보 없음`);return}console.log(`펌프 ${m} 업데이트:`,y),g.data.forEach(j=>{var B;if(j.x===0||j.y===0)return;const O=`${j.symbolId}_value`;v.querySelectorAll(`#${O}_group`).forEach(K=>K.remove());let E="";if(j.name.includes("Auto/Man mode"))E=y.auto_mode?"AUTO":"MANU";else if(j.name.includes("running hour"))E=`${y.run_hours||0}${j.unit||""}`;else if(j.name.includes("VFD")&&j.name.includes("BYPASS"))E=y.vfd_mode?"VFD":"BYPA";else if(j.name.includes("Hz(VFD)"))E=`${((B=y.frequency)==null?void 0:B.toFixed(1))||"0.0"}${j.unit||""}`;else if(j.type==="pump")return;if(console.log(`펌프 ${m} - ${j.name}: ${E}, 좌표: (${j.x}, ${j.y})`),!E)return;const A=v.querySelector(`#${O}_group`);A&&A.remove();let P="#ffffff";j.name.includes("Auto/Man mode")?P=y.auto_mode?"#00BFFF":"#FF0000":j.name.includes("VFD")&&j.name.includes("BYPASS")?P=y.vfd_mode?"#00BFFF":"#FFA500":(j.name.includes("Hz(VFD)")||j.name.includes("running hour"))&&(P="#FFFFFF");const $="rgba(0, 0, 0, 0.9)",C="9",I="Bahnschrift, sans-serif",L="bold",T=document.createElementNS("http://www.w3.org/2000/svg","text");T.setAttribute("id",O),T.setAttribute("x",j.x+6),T.setAttribute("y",j.y+4),T.setAttribute("font-family",I),T.setAttribute("font-size",C),T.setAttribute("fill",P),T.setAttribute("font-weight",L),T.setAttribute("text-anchor","start"),T.setAttribute("stroke",P),T.setAttribute("stroke-width","0.3"),T.textContent=E,v.appendChild(T);const D=T.getBBox();v.removeChild(T);const R=document.createElementNS("http://www.w3.org/2000/svg","rect");R.setAttribute("x",j.x-1),R.setAttribute("y",j.y-9),R.setAttribute("width",D.width+10),R.setAttribute("height",14),R.setAttribute("rx","3"),R.setAttribute("ry","3"),R.setAttribute("fill",$);const H=document.createElementNS("http://www.w3.org/2000/svg","g");H.setAttribute("id",`${O}_group`),H.appendChild(R),H.appendChild(T),v.appendChild(H)});const S=g.name,x=`impeller-${S}`,k=v.querySelector(`.${x}`),_=v.querySelector(`#${S}`);if(k&&_){const j=_.querySelectorAll("[fill]");y.running?(k.style.animationPlayState="running",j.forEach(O=>{if(!O.closest(".impeller-"+S)||O===k){const M=O.getAttribute("fill");O.hasAttribute("data-original-fill")||O.setAttribute("data-original-fill",M),M.includes("#06b6d4")?O.setAttribute("fill","#1E90FF"):M.includes("#0891b2")?O.setAttribute("fill","#0066CC"):M.includes("#0e7490")?O.setAttribute("fill","#0052A3"):M.includes("url")||O.setAttribute("fill","#1E90FF")}})):(k.style.animationPlayState="paused",j.forEach(O=>{if(!O.closest(".impeller-"+S)||O===k){const M=O.getAttribute("data-original-fill");O.getAttribute("fill").includes("url")||(M&&M.includes("#06b6d4")?O.setAttribute("fill","#94a3b8"):M&&M.includes("#0891b2")?O.setAttribute("fill","#64748b"):M&&M.includes("#0e7490")?O.setAttribute("fill","#475569"):O.setAttribute("fill","#94a3b8"))}})),console.log(`✅ 펌프 ${m} (${S}) 상태: ${y.running?"🔵 운전중 (파란색)":"⚪ 정지 (회색)"}`)}else console.warn(`❌ 펌프 ${m} 요소 없음 - impeller: ${!!k}, group: ${!!_}`)})},d=async(v,w)=>{n&&(await n(v,w)?(alert(`펌프 ${v+1} ${w==="start"?"시작":"정지"} 명령 전송 완료`),o(null)):alert("명령 전송 실패"))};return c.jsxs("div",{className:"dynamic-svg-diagram",children:[c.jsx("div",{ref:r,className:"svg-container"}),l&&c.jsx("div",{className:"pump-popup-overlay",onClick:()=>o(null),children:c.jsxs("div",{className:"pump-popup",onClick:v=>v.stopPropagation(),children:[c.jsxs("div",{className:"pump-popup-header",children:[c.jsxs("h3",{children:[l.index<3?"SW":"LT"," Pump No.",l.index%3+1]}),c.jsx("button",{className:"popup-close",onClick:()=>o(null),children:"×"})]}),c.jsxs("div",{className:"pump-popup-body",children:[c.jsxs("div",{className:"pump-info-row",children:[c.jsx("span",{className:"info-label",children:"상태:"}),c.jsx("span",{className:`info-value ${l.running?"status-running":"status-stopped"}`,children:l.running?"🟢 운전 중":"⚪ 정지"})]}),c.jsxs("div",{className:"pump-info-row",children:[c.jsx("span",{className:"info-label",children:"운전 모드:"}),c.jsx("span",{className:"info-value",style:{color:l.auto_mode?"#00FF00":"#FFA500",fontWeight:"bold"},children:l.auto_mode!==void 0&&l.auto_mode?"AUTO":"MANUAL"})]}),c.jsxs("div",{className:"pump-info-row",children:[c.jsx("span",{className:"info-label",children:"VFD 모드:"}),c.jsx("span",{className:"info-value",style:{color:l.vfd_mode?"#00BFFF":"#FF69B4",fontWeight:"bold"},children:l.vfd_mode!==void 0?l.vfd_mode?"VFD":"BYPASS":"VFD"})]}),c.jsxs("div",{className:"pump-info-row",children:[c.jsx("span",{className:"info-label",children:"주파수:"}),c.jsxs("span",{className:"info-value",children:[((p=l.frequency)==null?void 0:p.toFixed(1))||"0.0"," Hz"]})]}),c.jsxs("div",{className:"pump-info-row",children:[c.jsx("span",{className:"info-label",children:"전력:"}),c.jsxs("span",{className:"info-value",children:[l.power_kw||0," kW"]})]}),c.jsxs("div",{className:"pump-info-row",children:[c.jsx("span",{className:"info-label",children:"평균 전력:"}),c.jsxs("span",{className:"info-value",children:[l.avg_power||0," kW"]})]}),c.jsxs("div",{className:"pump-info-row",children:[c.jsx("span",{className:"info-label",children:"절감 전력:"}),c.jsxs("span",{className:"info-value",children:[((h=l.saved_kwh)==null?void 0:h.toLocaleString())||0," kWh"]})]}),c.jsxs("div",{className:"pump-info-row",children:[c.jsx("span",{className:"info-label",children:"운전 시간:"}),c.jsxs("span",{className:"info-value",children:[((b=l.run_hours)==null?void 0:b.toLocaleString())||0," h"]})]}),c.jsxs("div",{className:"pump-info-row",children:[c.jsx("span",{className:"info-label",children:"ESS 모드:"}),c.jsx("span",{className:"info-value",children:l.ess_mode?"🟢 활성":"⚪ 비활성"})]})]}),c.jsxs("div",{className:"pump-popup-controls",children:[c.jsx("button",{className:"btn-pump-start",onClick:()=>d(l.index,"start"),disabled:l.running,children:"▶️ START"}),c.jsx("button",{className:"btn-pump-stop",onClick:()=>d(l.index,"stop"),disabled:!l.running,children:"⏹️ STOP"})]})]})})]})}const w7={TX7:{labelId:"TX7",x:406,y:293,unit:"°C",decimal:1},TX6:{labelId:"TX6",x:490,y:311,unit:"°C",decimal:1},PX2:{labelId:"Px2",x:485.43,y:470,unit:" Pa",decimal:1},"M/E Load":{labelId:"M/E Load",x:505,y:408,unit:"%",decimal:1}},zx={0:{name:"FAN1",led:"fanLED207",fanId:"fan206",positions:{autoMan:{x:722,y:310},vfd:{x:722,y:321},hz:{x:722,y:334},hour:{x:722,y:345}}},1:{name:"FAN2",led:"fanLED207-9",fanId:"fan205",positions:{autoMan:{x:668,y:310},vfd:{x:668,y:321},hz:{x:668,y:334},hour:{x:668,y:345}}},2:{name:"FAN3",led:"fanLED207-4",fanId:"fan204",positions:{autoMan:{x:352,y:310},vfd:{x:352,y:321},hz:{x:352,y:334},hour:{x:352,y:345}}},3:{name:"FAN4",led:"fanLED207-6",fanId:"fan203",positions:{autoMan:{x:296,y:310},vfd:{x:296,y:321},hz:{x:296,y:334},hour:{x:296,y:345}}}};function Ix({sensors:e={},fans:t=[],equipment:n=[],onCommand:r}){var v,w;const i=N.useRef(null),[a,l]=N.useState(!1),[o,s]=N.useState(null),u=t.length>0?t:n.length>=10?n.slice(6,10):[];N.useRef({}),N.useEffect(()=>{h()},[]);const f=()=>{if(!i.current)return;const y=i.current.querySelector("svg");if(!y)return;[{index:0,name:"FAN1",fanId:"fan206",x:722.323,y:291.019,width:36.4547,height:42.593498},{index:1,name:"FAN2",fanId:"fan205",x:666.649,y:291.019,width:36.360298,height:42.593498},{index:2,name:"FAN3",fanId:"fan204",x:352.676,y:291.68,width:36.4547,height:42.593498},{index:3,name:"FAN4",fanId:"fan203",x:297.002,y:291.68,width:36.3603,height:42.5935}].forEach(g=>{const S=document.createElementNS("http://www.w3.org/2000/svg","rect");S.setAttribute("x",g.x-15),S.setAttribute("y",g.y-47),S.setAttribute("width",g.width*.9),S.setAttribute("height",g.height*1.3),S.setAttribute("fill","transparent"),S.setAttribute("cursor","pointer"),S.setAttribute("data-fan-index",g.index),S.addEventListener("click",()=>{d(g.index)}),y.appendChild(S)})},d=y=>{u[y]&&(s({...u[y],index:y}),console.log(`팬 ${y} 클릭됨`))};N.useEffect(()=>{o&&u[o.index]&&s(y=>({...u[y.index],index:y.index}))},[u]);const p=async(y,m)=>{if(r&&u[y]){const g=u[y],S=await r(g.name,m);alert(S?`✅ ${g.name} ${m==="start_fwd"?"정방향 시작":m==="start_bwd"?"역방향 시작":m==="start"?"시작":"정지"} 명령 성공`:"❌ 명령 실패")}},h=async()=>{try{let m=await(await fetch(`/src/assets/fan_diagram3.svg?t=${Date.now()}`)).text();if(console.log("📄 SVG 파일 로드 완료, g28 제거 시작..."),m=m.replace("</defs>","</defs><style>#g28 { display: none !important; }</style>"),console.log("📝 g28 숨김 스타일 추가 완료"),i.current){i.current.innerHTML=m;const S=i.current.querySelector("svg");S&&(console.log("✅ SVG 로드 완료 (g28 CSS로 숨김 처리)"),f(),[{id:"fan203",index:3,x:297.002,y:291.68,width:36.3603,height:42.5935},{id:"fan204",index:2,x:352.676,y:291.68,width:36.4547,height:42.593498},{id:"fan205",index:1,x:666.649,y:291.019,width:36.360298,height:42.593498},{id:"fan206",index:0,x:722.323,y:291.019,width:36.4547,height:42.593498}].forEach(k=>{const _=k.width/100*.85*.85*.9,j=k.width*0,O=-k.height*.85,M=k.x+j,E=k.y+O;console.log(`${k.id}: use(${k.x}, ${k.y}), scale=${_.toFixed(3)}, offset(${j.toFixed(2)}, ${O.toFixed(2)}), final(${M.toFixed(2)}, ${E.toFixed(2)})`);const A=document.createElementNS("http://www.w3.org/2000/svg","g");A.setAttribute("transform",`translate(${M}, ${E})`);const P=document.createElementNS("http://www.w3.org/2000/svg","g");P.setAttribute("id",`impeller-${k.id}`),P.setAttribute("class","fan-impeller-blades"),[0,72,144,216,288].forEach(L=>{const T=document.createElementNS("http://www.w3.org/2000/svg","path"),D=L*Math.PI/180,R=Math.cos(D),H=Math.sin(D),B=(le,Re)=>{const Ie=le*R-Re*H,be=le*H+Re*R;return[Ie*_,be*_]},[K,te]=B(0,-12),[pe,xe]=B(15,-25),[st,He]=B(25,-45),[V,Q]=B(28,-50),[ee,W]=B(22,-52),[Se,ie]=B(10,-48),[oe,Me]=B(5,-45),[Z,he]=B(-2,-35),ne=`M ${K.toFixed(2)} ${te.toFixed(2)} Q ${pe.toFixed(2)} ${xe.toFixed(2)}, ${st.toFixed(2)} ${He.toFixed(2)} Q ${V.toFixed(2)} ${Q.toFixed(2)}, ${ee.toFixed(2)} ${W.toFixed(2)} Q ${Se.toFixed(2)} ${ie.toFixed(2)}, ${oe.toFixed(2)} ${Me.toFixed(2)} Q ${Z.toFixed(2)} ${he.toFixed(2)}, ${K.toFixed(2)} ${te.toFixed(2)} Z`;T.setAttribute("d",ne),T.setAttribute("fill","url(#fan1_realisticBlade)"),T.setAttribute("stroke","#263238"),T.setAttribute("stroke-width",(.8*_).toFixed(2)),T.setAttribute("opacity","0.95"),P.appendChild(T)});const C=document.createElementNS("http://www.w3.org/2000/svg","circle");C.setAttribute("cx","0"),C.setAttribute("cy","0"),C.setAttribute("r",(14*_).toFixed(2)),C.setAttribute("fill","url(#fan1_hubGrad)"),C.setAttribute("stroke","#263238"),C.setAttribute("stroke-width",(1*_).toFixed(2)),P.appendChild(C);const I=document.createElementNS("http://www.w3.org/2000/svg","circle");I.setAttribute("cx","0"),I.setAttribute("cy","0"),I.setAttribute("r",(10*_).toFixed(2)),I.setAttribute("fill","#546e7a"),P.appendChild(I),A.appendChild(P),S.appendChild(A),console.log(`✅ ${k.id} 임펠러 생성 완료 at (${M.toFixed(2)}, ${E.toFixed(2)}), scale: ${_.toFixed(3)}`)})),l(!0)}}catch(y){console.error("❌ SVG 로드 오류:",y)}};N.useEffect(()=>{a&&b()},[e,u,a]);const b=()=>{if(!i.current)return;const y=i.current.querySelector("svg");y&&(console.log("📊 Fan Data:",u),console.log("📡 Sensors:",e),Object.keys(w7).forEach(m=>{const g=w7[m];let S=e[m];if(m==="M/E Load"&&e.PU1!==void 0&&(S=e.PU1),S!==void 0){const x=S.toFixed(g.decimal),k=`${m.replace(/[^a-zA-Z0-9]/g,"_")}_box`,_=`${m.replace(/[^a-zA-Z0-9]/g,"_")}_text`;let j=y.querySelector(`#${k}`),O=y.querySelector(`#${_}`);j&&j.remove(),O&&O.remove();const M=g.x,E=g.y||470,A=38,P=16,$=document.createElementNS("http://www.w3.org/2000/svg","rect");$.setAttribute("id",k),$.setAttribute("x",M-A/2),$.setAttribute("y",E),$.setAttribute("width",A),$.setAttribute("height",P),$.setAttribute("fill","#1a1a1a"),$.setAttribute("stroke","#2a2a2a"),$.setAttribute("stroke-width","0.5"),$.setAttribute("rx","2"),y.appendChild($);const C=document.createElementNS("http://www.w3.org/2000/svg","text");C.setAttribute("id",_),C.setAttribute("x",M),C.setAttribute("y",E+P/2+3.5),C.setAttribute("text-anchor","middle"),C.setAttribute("fill","#00ff00"),C.setAttribute("font-size","8.5"),C.setAttribute("font-family","Arial, sans-serif"),C.setAttribute("font-weight","bold"),C.textContent=`${x}${g.unit}`,y.appendChild(C)}}),u.forEach((m,g)=>{var T;const S=zx[g];if(!S)return;const x=m.running_fwd||m.running_bwd||m.running||!1,k=m.auto_mode!==void 0?m.auto_mode:!1,_=m.vfd_mode!==void 0?m.vfd_mode:!0,j=y.querySelector(`#impeller-${S.fanId}`);if(j){const D=j.querySelectorAll("path");x?m.running_bwd||!1?(j.style.animation="fanRotate 3s linear infinite reverse",D.forEach(H=>{H.setAttribute("fill","#9370DB"),H.setAttribute("opacity","0.85")}),console.log(`🔄 ${S.fanId} 임펠러 역방향 회전 (보라색)`)):(j.style.animation="fanRotate 3s linear infinite",D.forEach(H=>{H.setAttribute("fill","#1E90FF"),H.setAttribute("opacity","0.95")}),console.log(`✅ ${S.fanId} 임펠러 정방향 회전 (파란색)`)):(j.style.animation="none",D.forEach(R=>{R.setAttribute("fill","#808080"),R.setAttribute("opacity","0.7")}),console.log(`⏸️ ${S.fanId} 임펠러 회전 정지 (회색)`))}const O=y.querySelector(`#${CSS.escape(S.led)}`);O&&O.setAttribute("fill",x?"#00FF00":"#808080");const M=`fan${g}_autoMan`;let E=y.querySelector(`#${M}`);E&&E.remove(),E=document.createElementNS("http://www.w3.org/2000/svg","text"),E.setAttribute("id",M),E.setAttribute("x",S.positions.autoMan.x),E.setAttribute("y",S.positions.autoMan.y),E.setAttribute("text-anchor","middle"),E.setAttribute("fill",k?"#00BFFF":"#FF0000"),E.setAttribute("font-size","9"),E.setAttribute("font-family","Arial, sans-serif"),E.setAttribute("font-weight","bold"),E.textContent=k?"AUTO":"MANU",y.appendChild(E);const A=`fan${g}_vfd`;let P=y.querySelector(`#${A}`);P&&P.remove(),P=document.createElementNS("http://www.w3.org/2000/svg","text"),P.setAttribute("id",A),P.setAttribute("x",S.positions.vfd.x),P.setAttribute("y",S.positions.vfd.y),P.setAttribute("text-anchor","middle"),P.setAttribute("fill",_?"#00BFFF":"#FFA500"),P.setAttribute("font-size","9"),P.setAttribute("font-family","Arial, sans-serif"),P.setAttribute("font-weight","bold"),P.textContent=_?"VFD":"BYPA",y.appendChild(P);const $=`fan${g}_hz`;let C=y.querySelector(`#${$}`);C&&C.remove(),C=document.createElementNS("http://www.w3.org/2000/svg","text"),C.setAttribute("id",$),C.setAttribute("x",S.positions.hz.x),C.setAttribute("y",S.positions.hz.y),C.setAttribute("text-anchor","middle"),C.setAttribute("fill","#FFFFFF"),C.setAttribute("font-size","9"),C.setAttribute("font-family","Arial, sans-serif"),C.setAttribute("font-weight","bold"),C.textContent=`${((T=m.frequency)==null?void 0:T.toFixed(1))||0} Hz`,y.appendChild(C);const I=`fan${g}_hour`;let L=y.querySelector(`#${I}`);L&&L.remove(),L=document.createElementNS("http://www.w3.org/2000/svg","text"),L.setAttribute("id",I),L.setAttribute("x",S.positions.hour.x),L.setAttribute("y",S.positions.hour.y),L.setAttribute("text-anchor","middle"),L.setAttribute("fill","#FFFFFF"),L.setAttribute("font-size","9"),L.setAttribute("font-family","Arial, sans-serif"),L.setAttribute("font-weight","bold"),L.textContent=`${m.run_hours||0} h`,y.appendChild(L)}))};return c.jsxs("div",{className:"fan-diagram-wrapper",children:[c.jsx("div",{className:"fan-diagram-header",children:c.jsx("h2",{children:"🌀 E/R Ventilation System"})}),c.jsx("div",{className:"fan-diagram-content",ref:i}),o&&c.jsx("div",{className:"fan-popup-overlay",onClick:()=>s(null),children:c.jsxs("div",{className:"fan-popup",onClick:y=>y.stopPropagation(),children:[c.jsxs("div",{className:"fan-popup-header",children:[c.jsxs("h3",{children:["E/R Fan No.",o.index+1]}),c.jsx("button",{className:"popup-close",onClick:()=>s(null),children:"×"})]}),c.jsxs("div",{className:"fan-popup-body",children:[c.jsxs("div",{className:"fan-info-row",children:[c.jsx("span",{className:"info-label",children:"상태:"}),c.jsx("span",{className:`info-value ${o.running_fwd||o.running_bwd||o.running?"status-running":"status-stopped"}`,children:o.running_fwd||o.running_bwd||o.running?"🟢 운전 중":"⚪ 정지"})]}),c.jsxs("div",{className:"fan-info-row",children:[c.jsx("span",{className:"info-label",children:"운전 방향:"}),c.jsx("span",{className:"info-value",children:o.running_bwd?"역방향 (Reverse)":o.running_fwd?"정방향 (Forward)":"-"})]}),c.jsxs("div",{className:"fan-info-row",children:[c.jsx("span",{className:"info-label",children:"운전 모드:"}),c.jsx("span",{className:"info-value",children:o.auto_mode!==void 0&&o.auto_mode?"AUTO":"MANUAL"})]}),c.jsxs("div",{className:"fan-info-row",children:[c.jsx("span",{className:"info-label",children:"VFD 모드:"}),c.jsx("span",{className:"info-value",children:o.vfd_mode!==void 0?o.vfd_mode?"VFD":"BYPASS":"VFD"})]}),c.jsxs("div",{className:"fan-info-row",children:[c.jsx("span",{className:"info-label",children:"주파수:"}),c.jsxs("span",{className:"info-value",children:[((v=o.frequency)==null?void 0:v.toFixed(1))||"0.0"," Hz"]})]}),c.jsxs("div",{className:"fan-info-row",children:[c.jsx("span",{className:"info-label",children:"운전 시간:"}),c.jsxs("span",{className:"info-value",children:[((w=o.run_hours)==null?void 0:w.toLocaleString())||0," h"]})]})]}),c.jsxs("div",{className:"fan-popup-controls",children:[c.jsx("button",{className:"btn-fan-start-fwd",onClick:()=>p(o.index,"start_fwd"),disabled:o.running_fwd||o.running_bwd,children:"▶️ 정방향"}),c.jsx("button",{className:"btn-fan-start-bwd",onClick:()=>p(o.index,"start_bwd"),disabled:o.running_fwd||o.running_bwd,children:"◀️ 역방향"}),c.jsx("button",{className:"btn-fan-stop",onClick:()=>p(o.index,"stop"),disabled:!o.running_fwd&&!o.running_bwd&&!o.running,children:"⏹️ 정지"})]})]})})]})}function Dx({sensors:e={},pumps:t=[]}){const[n,r]=N.useState([]),i=50;return N.useEffect(()=>{if(Object.keys(e).length>0){const l={time:new Date().toLocaleTimeString("ko-KR"),TX1:e.TX1||0,TX2:e.TX2||0,TX3:e.TX3||0,TX4:e.TX4||0,TX5:e.TX5||0,TX6:e.TX6||0,TX7:e.TX7||0,DPX1:e.DPX1||0,PU1:e.PU1||0,totalPower:t.reduce((o,s)=>o+(s.power_kw||0),0)};r(o=>{const s=[...o,l];return s.length>i?s.slice(-i):s})}},[e,t]),c.jsxs("div",{className:"trend-chart",children:[c.jsxs("section",{className:"sensor-data-section",children:[c.jsx("h2",{children:"🌡️ 센서 데이터"}),c.jsxs("div",{className:"sensor-grid",children:[c.jsx(Kn,{label:"CSW 펌프 토출 온도 (TX1)",value:e.TX1,unit:"°C",icon:"🌡️"}),c.jsx(Kn,{label:"FW Cooler 1 SW Out (TX2)",value:e.TX2,unit:"°C",icon:"🌡️"}),c.jsx(Kn,{label:"FW Cooler 2 SW Out (TX3)",value:e.TX3,unit:"°C",icon:"🌡️"}),c.jsx(Kn,{label:"FW Cooler FW In (TX4)",value:e.TX4,unit:"°C",icon:"🌡️"}),c.jsx(Kn,{label:"FW Cooler FW Out (TX5)",value:e.TX5,unit:"°C",icon:"🌡️"}),c.jsx(Kn,{label:"CSW 펌프 토출 압력 (DPX1)",value:e.DPX1,unit:"kg/cm²",icon:"💨"})]}),c.jsxs("div",{className:"sensor-grid",style:{marginTop:"1rem"},children:[c.jsx(Kn,{label:"E/R Inside Temp (TX6)",value:e.TX6,unit:"°C",icon:"🌡️"}),c.jsx(Kn,{label:"E/R Outside Temp (TX7)",value:e.TX7,unit:"°C",icon:"🌡️"})]})]}),c.jsxs("div",{className:"chart-header",children:[c.jsx("h2",{children:"📈 실시간 트렌드"}),c.jsxs("p",{children:["최근 ",i,"개 데이터 포인트"]})]}),c.jsxs("div",{className:"charts-grid",children:[c.jsx(pn,{title:"CSW 펌프 토출 온도 (TX1)",data:n,dataKey:"TX1",unit:"°C",color:"#ef4444"}),c.jsx(pn,{title:"FW Cooler 1 SW Out (TX2)",data:n,dataKey:"TX2",unit:"°C",color:"#f97316"}),c.jsx(pn,{title:"FW Cooler 2 SW Out (TX3)",data:n,dataKey:"TX3",unit:"°C",color:"#fb923c"}),c.jsx(pn,{title:"FW Cooler FW In (TX4)",data:n,dataKey:"TX4",unit:"°C",color:"#dc2626"}),c.jsx(pn,{title:"FW Cooler FW Out (TX5)",data:n,dataKey:"TX5",unit:"°C",color:"#06b6d4"}),c.jsx(pn,{title:"CSW 펌프 토출 압력 (DPX1)",data:n,dataKey:"DPX1",unit:"kg/cm²",color:"#3b82f6"}),c.jsx(pn,{title:"E/R Inside Temp (TX6)",data:n,dataKey:"TX6",unit:"°C",color:"#b91c1c"}),c.jsx(pn,{title:"E/R Outside Temp (TX7)",data:n,dataKey:"TX7",unit:"°C",color:"#0891b2"}),c.jsx(pn,{title:"M/E 부하 트렌드 (PU1)",data:n,dataKey:"PU1",unit:"%",color:"#10b981"}),c.jsx(pn,{title:"총 소비 전력",data:n,dataKey:"totalPower",unit:"kW",color:"#f59e0b"})]})]})}function pn({title:e,data:t,dataKey:n,unit:r,color:i}){const a=t.map(f=>f[n]),l=Math.max(...a,1),o=Math.min(...a,0),s=l-o||1,u=a[a.length-1]||0;return c.jsxs("div",{className:"chart-panel",children:[c.jsxs("div",{className:"chart-panel-header",children:[c.jsx("h3",{children:e}),c.jsxs("span",{className:"current-value",style:{color:i},children:[u.toFixed(2)," ",r]})]}),c.jsx("div",{className:"chart-container",children:c.jsxs("svg",{className:"chart-svg",viewBox:"0 0 500 200",children:[c.jsx("line",{x1:"0",y1:"0",x2:"500",y2:"0",stroke:"#334155",strokeWidth:"1"}),c.jsx("line",{x1:"0",y1:"50",x2:"500",y2:"50",stroke:"#334155",strokeWidth:"1",strokeDasharray:"5,5"}),c.jsx("line",{x1:"0",y1:"100",x2:"500",y2:"100",stroke:"#334155",strokeWidth:"1",strokeDasharray:"5,5"}),c.jsx("line",{x1:"0",y1:"150",x2:"500",y2:"150",stroke:"#334155",strokeWidth:"1",strokeDasharray:"5,5"}),c.jsx("line",{x1:"0",y1:"200",x2:"500",y2:"200",stroke:"#334155",strokeWidth:"1"}),a.length>1&&c.jsx("polyline",{fill:"none",stroke:i,strokeWidth:"3",points:a.map((f,d)=>{const p=d/(a.length-1)*500,h=200-(f-o)/s*200;return`${p},${h}`}).join(" ")}),a.map((f,d)=>{const p=d/Math.max(a.length-1,1)*500,h=200-(f-o)/s*200;return c.jsx("circle",{cx:p,cy:h,r:"3",fill:i},d)})]})}),c.jsxs("div",{className:"chart-footer",children:[c.jsxs("span",{children:["최소: ",o.toFixed(2)]}),c.jsxs("span",{children:["최대: ",l.toFixed(2)]})]})]})}function Kn({label:e,value:t,unit:n,icon:r}){return c.jsxs("div",{className:"sensor-card",children:[c.jsx("div",{className:"sensor-icon",children:r}),c.jsxs("div",{className:"sensor-info",children:[c.jsx("div",{className:"sensor-label",children:e}),c.jsxs("div",{className:"sensor-value",children:[t!==void 0?t.toFixed(1):"--"," ",n]})]})]})}function Lx({alarms:e,alarmSummary:t,alarmSoundMuted:n,onToggleMute:r}){const[i,a]=N.useState([]),l=N.useRef(new Set);N.useEffect(()=>{e&&Array.isArray(e)&&a(e)},[e]);const o=i,s=p=>{switch(p){case"critical":return"🔴";case"warning":return"🟡";case"info":return"🟢";default:return"⚪"}},u=p=>{switch(p){case"critical":return"alarm-critical";case"warning":return"alarm-warning";case"info":return"alarm-info";default:return"alarm-normal"}},f=async p=>{if(l.current.has(p)){console.log("⏳ 이미 확인 요청 중:",p);return}try{console.log("✅ 알람 확인 버튼 클릭:",p),l.current.add(p),(await fetch("http://localhost:8001/api/alarms/acknowledge",{method:"POST",headers:{"Content-Type":"application/json"},body:JSON.stringify({alarm_id:p,user:"Operator"})})).ok?console.log("✅ 알람 확인 성공 - WebSocket 업데이트 대기 중"):console.error("❌ 알람 확인 실패")}catch(h){console.error("❌ 알람 확인 오류:",h)}finally{setTimeout(()=>{l.current.delete(p)},2e3)}},d=o.some(p=>!p.acknowledged);return c.jsxs("div",{className:"alarm-panel",children:[c.jsxs("div",{className:`alarm-header ${d?"has-alarms":""}`,children:[c.jsx("h2",{children:"🔔 알람 시스템"}),c.jsxs("div",{className:"alarm-summary-row",children:[c.jsxs("div",{className:"alarm-summary",children:[c.jsxs("span",{className:"summary-item critical",children:["위험: ",(t==null?void 0:t.critical)||0]}),c.jsxs("span",{className:"summary-item warning",children:["경고: ",(t==null?void 0:t.warning)||0]})]}),d&&r&&c.jsx("button",{className:`btn-mute ${n?"muted":""}`,onClick:r,title:n?"경고음 켜기":"경고음 끄기",children:n?"🔇 소리 켜기":"🔊 음소거"})]})]}),c.jsx("div",{className:"alarm-list",children:o.length===0?c.jsx("div",{className:"no-alarms",children:c.jsx("span",{children:"✅ 활성 알람이 없습니다"})}):o.map(p=>c.jsxs("div",{className:`alarm-item ${u(p.level)} ${p.acknowledged?"acknowledged":""}`,children:[c.jsx("div",{className:"alarm-icon",children:s(p.level)}),c.jsxs("div",{className:"alarm-content",children:[c.jsx("div",{className:"alarm-message",children:p.message}),c.jsx("div",{className:"alarm-time",children:new Date(p.time).toLocaleString("ko-KR")})]}),c.jsx("div",{className:"alarm-actions",children:!p.acknowledged&&c.jsx("button",{className:"btn-acknowledge",onClick:()=>f(p.id),children:"확인"})})]},p.id))})]})}const jv=N.createContext(null),Uo="http://localhost:8001";function Fx({children:e}){const[t,n]=N.useState(null),[r,i]=N.useState(null),[a,l]=N.useState(!0),[o,s]=N.useState(()=>localStorage.getItem("authToken"));N.useEffect(()=>{(async()=>{const y=localStorage.getItem("authToken");if(y)try{const m=await fetch(`${Uo}/api/auth/me`,{headers:{Authorization:`Bearer ${y}`}});if(m.ok){const g=await m.json();g.success?(n(g.data.user),i(g.data.permissions),s(y)):(localStorage.removeItem("authToken"),s(null))}else localStorage.removeItem("authToken"),s(null)}catch(m){console.error("세션 복원 실패:",m),localStorage.removeItem("authToken"),s(null)}l(!1)})()},[]);const v={user:t,permissions:r,token:o,loading:a,isAuthenticated:!!t,login:async(w,y)=>{try{const m=await fetch(`${Uo}/api/auth/login`,{method:"POST",headers:{"Content-Type":"application/json"},body:JSON.stringify({username:w,password:y})}),g=await m.json();return m.ok&&g.success?(n(g.data.user),i(g.data.permissions),s(g.data.token),localStorage.setItem("authToken",g.data.token),{success:!0}):{success:!1,message:g.detail||"로그인 실패"}}catch(m){return console.error("로그인 오류:",m),{success:!1,message:"서버 연결 실패"}}},logout:async()=>{try{o&&await fetch(`${Uo}/api/auth/logout`,{method:"POST",headers:{Authorization:`Bearer ${o}`}})}catch(w){console.error("로그아웃 오류:",w)}finally{n(null),i(null),s(null),localStorage.removeItem("authToken")}},changePassword:async(w,y)=>{try{const m=await fetch(`${Uo}/api/auth/change-password`,{method:"POST",headers:{"Content-Type":"application/json",Authorization:`Bearer ${o}`},body:JSON.stringify({current_password:w,new_password:y})}),g=await m.json();return m.ok&&g.success?{success:!0}:{success:!1,message:g.detail||"비밀번호 변경 실패"}}catch(m){return console.error("비밀번호 변경 오류:",m),{success:!1,message:"서버 연결 실패"}}},canAccessTab:w=>r?r.tabs.includes(w):!1,canControl:()=>(r==null?void 0:r.can_control)??!1,canManageUsers:()=>(r==null?void 0:r.can_manage_users)??!1};return c.jsx(jv.Provider,{value:v,children:e})}function eu(){const e=N.useContext(jv);if(!e)throw new Error("useAuth must be used within an AuthProvider");return e}function Ov({onKeyPress:e,onClose:t,isPassword:n=!1,inputLabel:r=""}){const[i,a]=N.useState(!1),[l,o]=N.useState(!1),s={row1:["1","2","3","4","5","6","7","8","9","0","-","="],row2:["q","w","e","r","t","y","u","i","o","p","[","]"],row3:["a","s","d","f","g","h","j","k","l",";","'"],row4:["z","x","c","v","b","n","m",",",".","/"]},u={row1:["!","@","#","$","%","^","&","*","(",")","_","+"],row2:["Q","W","E","R","T","Y","U","I","O","P","{","}"],row3:["A","S","D","F","G","H","J","K","L",":",'"'],row4:["Z","X","C","V","B","N","M","<",">","?"]},f={row1:["1","2","3","4","5","6","7","8","9","0","-","="],row2:["Q","W","E","R","T","Y","U","I","O","P","[","]"],row3:["A","S","D","F","G","H","J","K","L",";","'"],row4:["Z","X","C","V","B","N","M",",",".","/"]},d=()=>i?u:l?f:s,p=S=>{e(S),i&&!l&&a(!1)},h=()=>{a(!i)},b=()=>{o(!l),a(!1)},v=()=>{e("BACKSPACE")},w=()=>{e(" ")},y=()=>{e("ENTER")},m=()=>{e("CLEAR")},g=d();return c.jsx("div",{className:"virtual-keyboard-overlay",children:c.jsxs("div",{className:"virtual-keyboard",children:[c.jsxs("div",{className:"keyboard-header",children:[c.jsx("span",{children:r||(n?"비밀번호 입력":"사용자 ID 입력")}),c.jsx("button",{className:"keyboard-close",onClick:t,children:"×"})]}),c.jsxs("div",{className:"keyboard-body",children:[c.jsxs("div",{className:"keyboard-row",children:[g.row1.map((S,x)=>c.jsx("button",{className:"keyboard-key",onClick:()=>p(S),children:S},x)),c.jsx("button",{className:"keyboard-key key-backspace",onClick:v,children:"⌫"})]}),c.jsxs("div",{className:"keyboard-row",children:[c.jsx("div",{className:"key-spacer-half"}),g.row2.map((S,x)=>c.jsx("button",{className:"keyboard-key",onClick:()=>p(S),children:S},x))]}),c.jsxs("div",{className:"keyboard-row",children:[c.jsx("button",{className:`keyboard-key key-caps ${l?"active":""}`,onClick:b,children:"Caps"}),g.row3.map((S,x)=>c.jsx("button",{className:"keyboard-key",onClick:()=>p(S),children:S},x)),c.jsx("button",{className:"keyboard-key key-enter",onClick:y,children:"Enter"})]}),c.jsxs("div",{className:"keyboard-row",children:[c.jsx("button",{className:`keyboard-key key-shift ${i?"active":""}`,onClick:h,children:"Shift"}),g.row4.map((S,x)=>c.jsx("button",{className:"keyboard-key",onClick:()=>p(S),children:S},x)),c.jsx("button",{className:`keyboard-key key-shift ${i?"active":""}`,onClick:h,children:"Shift"})]}),c.jsxs("div",{className:"keyboard-row",children:[c.jsx("button",{className:"keyboard-key key-clear",onClick:m,children:"Clear"}),c.jsx("button",{className:"keyboard-key key-space",onClick:w,children:"Space"}),c.jsx("button",{className:"keyboard-key key-done",onClick:t,children:"Done"})]})]})]})})}const ui="http://localhost:8001";function Rx(){const{canManageUsers:e,token:t}=eu(),[n,r]=N.useState("temp"),[i,a]=N.useState({swp_op_temp:35,swp_lo_temp:32,swp_hi_temp:38,swp_temp_limit:40,swp_prs:3.5,fwp_1p_op_temp:45,fwp_1p_lo_temp:40,fwp_1p_hi_temp:50,fwp_2p_op_temp:45,fwp_2p_lo_temp:40,fwp_2p_hi_temp:50,swp_adj_cycle:60,swp_adj_hz:5,swp_min_hz:40,swp_max_hz:60,fwp_adj_cycle:60,fwp_adj_hz:5,fwp_min_hz:40,fwp_max_hz:60,fan_adj_cycle:60,fan_adj_hz:5,fan_min_hz:40,fan_max_hz:60,swp_1p_time:240,swp_2p_time:240,swp_op_time:1,swp_speed_limit:300,fwp_1p_chg_time:240,fwp_2p_chg_time:240,fwp_op_time:1,fwp_speed_limit:300,meg_load_lmt1:30,meg_load_lmt2:20,alarm_tx1:30,alarm_tx2:50,alarm_tx3:50,alarm_tx4:50,alarm_tx5:40,alarm_tx6:50,alarm_tx7:40,alarm_px1_low:1.2,alarm_px1_high:4,alarm_pu1:85}),[l,o]=N.useState(!1),s=(u,f)=>{a(d=>({...d,[u]:parseFloat(f)}))};return c.jsxs("div",{className:"settings",children:[c.jsxs("div",{className:"settings-header",children:[c.jsx("h2",{children:"⚙️ 시스템 설정"}),c.jsx("p",{children:"펌프 운전 파라미터 및 제어 설정"})]}),c.jsxs("div",{className:"settings-tabs",children:[c.jsx("button",{className:n==="temp"?"active":"",onClick:()=>r("temp"),children:"🌡️ 온도 설정"}),c.jsx("button",{className:n==="vfd"?"active":"",onClick:()=>r("vfd"),children:"⚡ 주파수 설정"}),c.jsx("button",{className:n==="operation"?"active":"",onClick:()=>r("operation"),children:"🔧 운전 설정"}),c.jsx("button",{className:n==="alarm"?"active":"",onClick:()=>r("alarm"),children:"🔔 알람 설정"}),c.jsx("button",{className:n==="departure"?"active":"",onClick:()=>r("departure"),children:"🚢 출항 모드"}),c.jsx("button",{className:n==="system"?"active":"",onClick:()=>r("system"),children:"💻 시스템"}),e()&&c.jsx("button",{className:n==="users"?"active":"",onClick:()=>r("users"),children:"👤 사용자 관리"})]}),c.jsxs("div",{className:"settings-content",children:[n==="temp"&&c.jsx(Bx,{settings:i,onChange:s}),n==="vfd"&&c.jsx(Wx,{settings:i,onChange:s}),n==="operation"&&c.jsx(Ux,{settings:i,onChange:s}),n==="departure"&&c.jsx(Hx,{settings:i,onChange:s}),n==="system"&&c.jsx(Gx,{}),n==="alarm"&&c.jsx(Vx,{settings:i,onChange:s}),n==="users"&&e()&&c.jsx(Xx,{token:t})]})]})}function Bx({settings:e,onChange:t}){return c.jsxs("div",{className:"settings-section",children:[c.jsx("h3",{children:"🌊 해수 펌프 온도(TX5) 설정"}),c.jsxs("div",{className:"settings-grid",children:[c.jsx(J,{label:"운전 온도",value:e.swp_op_temp,unit:"°C",onChange:n=>t("swp_op_temp",n),min:-30,max:100}),c.jsx(J,{label:"저온 온도",value:e.swp_lo_temp,unit:"°C",onChange:n=>t("swp_lo_temp",n),min:-30,max:100}),c.jsx(J,{label:"고온 온도",value:e.swp_hi_temp,unit:"°C",onChange:n=>t("swp_hi_temp",n),min:-30,max:100}),c.jsx(J,{label:"온도 제한",value:e.swp_temp_limit,unit:"°C",onChange:n=>t("swp_temp_limit",n),min:-30,max:100}),c.jsx(J,{label:"압력 설정",value:e.swp_prs,unit:"kg/cm²",onChange:n=>t("swp_prs",n),min:0,max:10,step:.1})]}),c.jsx("h3",{children:"💧 청수 펌프 온도(TX4) 설정"}),c.jsxs("div",{className:"settings-grid",children:[c.jsxs("div",{className:"settings-subsection",children:[c.jsx("h4",{children:"펌프 1대 운전시"}),c.jsx(J,{label:"운전 온도",value:e.fwp_1p_op_temp,unit:"°C",onChange:n=>t("fwp_1p_op_temp",n)}),c.jsx(J,{label:"저온 온도",value:e.fwp_1p_lo_temp,unit:"°C",onChange:n=>t("fwp_1p_lo_temp",n)}),c.jsx(J,{label:"고온 온도",value:e.fwp_1p_hi_temp,unit:"°C",onChange:n=>t("fwp_1p_hi_temp",n)})]}),c.jsxs("div",{className:"settings-subsection",children:[c.jsx("h4",{children:"펌프 2대 운전시"}),c.jsx(J,{label:"운전 온도",value:e.fwp_2p_op_temp,unit:"°C",onChange:n=>t("fwp_2p_op_temp",n)}),c.jsx(J,{label:"저온 온도",value:e.fwp_2p_lo_temp,unit:"°C",onChange:n=>t("fwp_2p_lo_temp",n)}),c.jsx(J,{label:"고온 온도",value:e.fwp_2p_hi_temp,unit:"°C",onChange:n=>t("fwp_2p_hi_temp",n)})]})]})]})}function Wx({settings:e,onChange:t}){return c.jsxs("div",{className:"settings-section",children:[c.jsx("h3",{children:"🌊 해수 펌프 주파수 설정"}),c.jsxs("div",{className:"settings-grid",children:[c.jsx(J,{label:"조정 주기",value:e.swp_adj_cycle,unit:"초",onChange:n=>t("swp_adj_cycle",n),min:1,max:300}),c.jsx(J,{label:"조정 주파수",value:e.swp_adj_hz,unit:"Hz",onChange:n=>t("swp_adj_hz",n),min:1,max:10}),c.jsx(J,{label:"최소 주파수",value:e.swp_min_hz,unit:"Hz",onChange:n=>t("swp_min_hz",n),min:10,max:60}),c.jsx(J,{label:"최대 주파수",value:e.swp_max_hz,unit:"Hz",onChange:n=>t("swp_max_hz",n),min:30,max:60})]}),c.jsx("h3",{children:"💧 청수 펌프 주파수 설정"}),c.jsxs("div",{className:"settings-grid",children:[c.jsx(J,{label:"조정 주기",value:e.fwp_adj_cycle,unit:"초",onChange:n=>t("fwp_adj_cycle",n),min:1,max:300}),c.jsx(J,{label:"조정 주파수",value:e.fwp_adj_hz,unit:"Hz",onChange:n=>t("fwp_adj_hz",n),min:1,max:10}),c.jsx(J,{label:"최소 주파수",value:e.fwp_min_hz,unit:"Hz",onChange:n=>t("fwp_min_hz",n),min:10,max:60}),c.jsx(J,{label:"최대 주파수",value:e.fwp_max_hz,unit:"Hz",onChange:n=>t("fwp_max_hz",n),min:30,max:60})]}),c.jsx("h3",{children:"🌀 E/R Fan 주파수 설정"}),c.jsxs("div",{className:"settings-grid",children:[c.jsx(J,{label:"조정 주기",value:e.fan_adj_cycle,unit:"초",onChange:n=>t("fan_adj_cycle",n),min:1,max:300}),c.jsx(J,{label:"조정 주파수",value:e.fan_adj_hz,unit:"Hz",onChange:n=>t("fan_adj_hz",n),min:1,max:10}),c.jsx(J,{label:"최소 주파수",value:e.fan_min_hz,unit:"Hz",onChange:n=>t("fan_min_hz",n),min:10,max:60}),c.jsx(J,{label:"최대 주파수",value:e.fan_max_hz,unit:"Hz",onChange:n=>t("fan_max_hz",n),min:30,max:60})]})]})}function Ux({settings:e,onChange:t}){return c.jsxs("div",{className:"settings-section",children:[c.jsx("h3",{children:"🔧 펌프 운전 설정"}),c.jsxs("div",{className:"settings-grid",children:[c.jsx(J,{label:"SWP 1펌프 운전 시간",value:e.swp_1p_time,unit:"분",onChange:n=>t("swp_1p_time",n),min:1,max:1e3}),c.jsx(J,{label:"SWP 2펌프 운전 시간",value:e.swp_2p_time,unit:"분",onChange:n=>t("swp_2p_time",n),min:1,max:1e3}),c.jsx(J,{label:"SWP 운전 순서",value:e.swp_op_time,unit:"",onChange:n=>t("swp_op_time",n),min:1,max:6}),c.jsx(J,{label:"최적속도 운전 시간",value:e.swp_speed_limit,unit:"초",onChange:n=>t("swp_speed_limit",n),min:0,max:600}),c.jsx(J,{label:"FWP 1펌프 운전 시간",value:e.fwp_1p_chg_time,unit:"분",onChange:n=>t("fwp_1p_chg_time",n),min:1,max:1e3}),c.jsx(J,{label:"FWP 2펌프 운전 시간",value:e.fwp_2p_chg_time,unit:"분",onChange:n=>t("fwp_2p_chg_time",n),min:1,max:1e3}),c.jsx(J,{label:"FWP 운전 순서",value:e.fwp_op_time,unit:"",onChange:n=>t("fwp_op_time",n),min:1,max:6}),c.jsx(J,{label:"최적속도 운전 시간",value:e.fwp_speed_limit,unit:"초",onChange:n=>t("fwp_speed_limit",n),min:0,max:600})]}),c.jsx("h3",{children:"🔥 M/E 부하 설정"}),c.jsxs("div",{className:"settings-grid",children:[c.jsx(J,{label:"운항 부하 기준값",value:e.meg_load_lmt1,unit:"%",onChange:n=>t("meg_load_lmt1",n),min:0,max:100}),c.jsx(J,{label:"정박 부하 기준값",value:e.meg_load_lmt2,unit:"%",onChange:n=>t("meg_load_lmt2",n),min:0,max:100})]})]})}function Hx({settings:e,onChange:t}){const[n,r]=N.useState(!1);return c.jsxs("div",{className:"settings-section",children:[c.jsx("h3",{children:"🚢 출항 모드 설정"}),c.jsxs("div",{className:"departure-mode-card",children:[c.jsxs("div",{className:"departure-status",children:[c.jsx("span",{className:"status-label",children:"현재 상태:"}),c.jsx("span",{className:`status-badge ${n?"active":"inactive"}`,children:n?"🟢 출항 모드 활성":"⚪ 정상 모드"})]}),c.jsxs("div",{className:"departure-description",children:[c.jsxs("p",{children:[c.jsx("strong",{children:"출항 모드란?"}),c.jsx("br",{}),"선박 출항 시 엔진 부하가 낮을 때 자동으로 ESS 모드로 전환되는 것을 방지합니다."]}),c.jsxs("p",{children:[c.jsx("strong",{children:"해제 조건:"}),c.jsx("br",{}),"M/E 부하가 ",e.meg_load_lmt2,"% 이상일 때 자동으로 정상 모드로 전환됩니다."]})]}),c.jsx("button",{className:`btn-departure ${n?"active":""}`,onClick:()=>r(!n),children:n?"🔓 정상 모드로 전환":"🔒 출항 모드 활성화"})]}),c.jsx("div",{className:"settings-grid",children:c.jsx(J,{label:"M/E 부하 해제 설정",value:e.meg_load_lmt2,unit:"%",onChange:i=>t("meg_load_lmt2",i),min:0,max:100})})]})}function Gx(){const{canManageUsers:e,user:t}=eu(),[n,r]=N.useState({connected:!1,blocked:!1,blocked_by:null,blocked_at:null,fallback_mode:!0}),[i,a]=N.useState(!1),[l,o]=N.useState(!1),[s,u]=N.useState(null);N.useEffect(()=>{const p=async()=>{try{const v=await(await fetch("http://localhost:8001/api/edge/status")).json();v.success&&r({connected:v.connected,blocked:v.blocked,blocked_by:v.blocked_by,blocked_at:v.blocked_at,fallback_mode:v.fallback_mode})}catch(b){console.error("Edge 상태 조회 실패:",b)}};p();const h=setInterval(p,3e3);return()=>clearInterval(h)},[]);const f=async p=>{a(!0);try{const v=await(await fetch(p==="block"?"http://localhost:8001/api/edge/block":"http://localhost:8001/api/edge/unblock",{method:"POST",headers:{"Content-Type":"application/json"},body:JSON.stringify({username:(t==null?void 0:t.username)||"admin"})})).json();v.success?r(w=>({...w,blocked:p==="block",blocked_by:p==="block"?(t==null?void 0:t.username)||"admin":null,blocked_at:p==="block"?new Date().toISOString():null,connected:p==="unblock"?w.connected:!1,fallback_mode:p==="block"?!0:w.fallback_mode})):alert(v.error||"작업 실패")}catch(h){console.error("Edge 작업 실패:",h),alert("Edge 작업 실패: "+h.message)}finally{a(!1),o(!1),u(null)}},d=p=>{u(p),o(!0)};return c.jsxs("div",{className:"settings-section",children:[c.jsx("h3",{children:"💻 시스템 설정"}),c.jsxs("div",{className:"system-info",children:[e&&c.jsxs("div",{className:"info-card edge-control-card",children:[c.jsx("h4",{children:"🤖 Edge Computer 연결 관리"}),c.jsxs("div",{className:"edge-status-display",children:[c.jsxs("div",{className:"info-row",children:[c.jsx("span",{children:"상태:"}),c.jsx("span",{className:`edge-status-badge ${n.blocked?"blocked":n.connected?"connected":"disconnected"}`,children:n.blocked?"● 수동 차단됨":n.connected?"● 연결됨":"● 연결 안됨"})]}),c.jsxs("div",{className:"info-row",children:[c.jsx("span",{children:"제어 모드:"}),c.jsx("span",{className:`control-mode ${n.fallback_mode?"fallback":"ai"}`,children:n.fallback_mode?"Fallback PID":"AI 최적화"})]}),n.blocked&&c.jsxs(c.Fragment,{children:[c.jsxs("div",{className:"info-row",children:[c.jsx("span",{children:"차단자:"}),c.jsx("span",{children:n.blocked_by||"-"})]}),c.jsxs("div",{className:"info-row",children:[c.jsx("span",{children:"차단 시간:"}),c.jsx("span",{children:n.blocked_at?new Date(n.blocked_at).toLocaleString("ko-KR"):"-"})]})]})]}),c.jsx("div",{className:"edge-control-buttons",children:n.blocked?c.jsx("button",{className:"edge-btn unblock-btn",onClick:()=>d("unblock"),disabled:i,children:i?"처리 중...":"▶️ 연결 재개"}):c.jsx("button",{className:"edge-btn block-btn",onClick:()=>d("block"),disabled:i,children:i?"처리 중...":"⏸️ 연결 차단"})}),c.jsx("div",{className:"edge-warning",children:n.blocked?"💡 재개 시 AI 최적화 제어 모드로 복귀합니다":"⚠️ 차단 시 PLC가 자체 PID 제어로 전환됩니다"})]}),c.jsxs("div",{className:"info-card",children:[c.jsx("h4",{children:"🔌 PLC 연결 정보"}),c.jsxs("div",{className:"info-row",children:[c.jsx("span",{children:"IP 주소:"}),c.jsx("span",{children:"127.0.0.1"})]}),c.jsxs("div",{className:"info-row",children:[c.jsx("span",{children:"포트:"}),c.jsx("span",{children:"502"})]}),c.jsxs("div",{className:"info-row",children:[c.jsx("span",{children:"프로토콜:"}),c.jsx("span",{children:"Modbus TCP"})]}),c.jsxs("div",{className:"info-row",children:[c.jsx("span",{children:"Node ID:"}),c.jsx("span",{children:"3"})]})]}),c.jsxs("div",{className:"info-card",children:[c.jsx("h4",{children:"📊 시스템 정보"}),c.jsxs("div",{className:"info-row",children:[c.jsx("span",{children:"버전:"}),c.jsx("span",{children:"1.0.0"})]}),c.jsxs("div",{className:"info-row",children:[c.jsx("span",{children:"화면 해상도:"}),c.jsx("span",{children:"1280 x 1024"})]}),c.jsxs("div",{className:"info-row",children:[c.jsx("span",{children:"업데이트 주기:"}),c.jsx("span",{children:"1초"})]})]}),c.jsxs("div",{className:"info-card",children:[c.jsx("h4",{children:"💾 데이터 저장"}),c.jsxs("div",{className:"info-row",children:[c.jsx("span",{children:"데이터 폴더:"}),c.jsx("span",{children:"C:\\HMI_DATA"})]}),c.jsxs("div",{className:"info-row",children:[c.jsx("span",{children:"로그 보관 기간:"}),c.jsx("span",{children:"30일"})]})]})]}),l&&c.jsx("div",{className:"edge-confirm-overlay",children:c.jsxs("div",{className:"edge-confirm-dialog",children:[c.jsx("h4",{children:s==="block"?"⏸️ Edge Computer 연결 차단":"▶️ Edge Computer 연결 재개"}),c.jsx("p",{children:s==="block"?`Edge Computer 연결을 차단하시겠습니까?
PLC가 자체 PID 제어 모드로 전환됩니다.`:`Edge Computer 연결을 재개하시겠습니까?
AI 최적화 제어 모드로 복귀합니다.`}),c.jsxs("div",{className:"edge-confirm-buttons",children:[c.jsx("button",{className:"confirm-btn cancel",onClick:()=>{o(!1),u(null)},children:"취소"}),c.jsx("button",{className:`confirm-btn ${s==="block"?"block":"unblock"}`,onClick:()=>f(s),disabled:i,children:i?"처리 중...":s==="block"?"차단":"재개"})]})]})})]})}function Vx({settings:e,onChange:t}){return c.jsxs("div",{className:"settings-section alarm-settings",children:[c.jsxs("div",{className:"alarm-grid-container",children:[c.jsxs("div",{className:"alarm-column",children:[c.jsx("h4",{children:"🌡️ 온도 센서 (TX1~TX4)"}),c.jsx(J,{label:"TX1 냉각수 토출",value:e.alarm_tx1,unit:"°C",onChange:n=>t("alarm_tx1",n),min:0,max:100,step:.5}),c.jsx(J,{label:"TX2 NO.1 쿨러 출구",value:e.alarm_tx2,unit:"°C",onChange:n=>t("alarm_tx2",n),min:0,max:100,step:.5}),c.jsx(J,{label:"TX3 NO.2 쿨러 출구",value:e.alarm_tx3,unit:"°C",onChange:n=>t("alarm_tx3",n),min:0,max:100,step:.5}),c.jsx(J,{label:"TX4 청수 입구",value:e.alarm_tx4,unit:"°C",onChange:n=>t("alarm_tx4",n),min:0,max:100,step:.5})]}),c.jsxs("div",{className:"alarm-column",children:[c.jsx("h4",{children:"🌡️ 온도 센서 (TX5~TX7)"}),c.jsx(J,{label:"TX5 청수 출구",value:e.alarm_tx5,unit:"°C",onChange:n=>t("alarm_tx5",n),min:0,max:100,step:.5}),c.jsx(J,{label:"TX6 E/R 내부",value:e.alarm_tx6,unit:"°C",onChange:n=>t("alarm_tx6",n),min:0,max:100,step:.5}),c.jsx(J,{label:"TX7 E/R 외부",value:e.alarm_tx7,unit:"°C",onChange:n=>t("alarm_tx7",n),min:0,max:100,step:.5})]}),c.jsxs("div",{className:"alarm-column",children:[c.jsx("h4",{children:"📊 압력 / ⚡ 부하"}),c.jsx(J,{label:"PX1 압력 하한",value:e.alarm_px1_low,unit:"bar",onChange:n=>t("alarm_px1_low",n),min:0,max:5,step:.1}),c.jsx(J,{label:"PX1 압력 상한",value:e.alarm_px1_high,unit:"bar",onChange:n=>t("alarm_px1_high",n),min:0,max:10,step:.1}),c.jsx(J,{label:"PU1 M/E 부하",value:e.alarm_pu1,unit:"%",onChange:n=>t("alarm_pu1",n),min:0,max:100,step:1})]})]}),c.jsx("div",{className:"alarm-info-compact",children:c.jsx("span",{children:"ℹ️ 온도/압력상한/부하: 초과 시 알람 | 압력하한: 미만 시 알람"})})]})}function J({label:e,value:t,unit:n,onChange:r,min:i=0,max:a=100,step:l=1}){return c.jsxs("div",{className:"setting-item",children:[c.jsx("label",{children:e}),c.jsxs("div",{className:"setting-input-group",children:[c.jsx("input",{type:"number",value:t,onChange:o=>r(o.target.value),min:i,max:a,step:l}),c.jsx("span",{className:"unit",children:n})]})]})}function Xx({token:e}){const[t,n]=N.useState([]),[r,i]=N.useState(!0),[a,l]=N.useState(""),[o,s]=N.useState(!1),[u,f]=N.useState(null),[d,p]=N.useState(""),[h,b]=N.useState({username:"",password:"",role:"operator",display_name:""}),[v,w]=N.useState(""),[y,m]=N.useState(!1),[g,S]=N.useState(null),x=async()=>{try{i(!0);const $=await(await fetch(`${ui}/api/users`,{headers:{Authorization:`Bearer ${e}`}})).json();$.success?n($.data):l("사용자 목록을 불러올 수 없습니다")}catch{l("서버 연결 실패")}finally{i(!1)}};N.useEffect(()=>{x()},[e]);const k=async()=>{if(!h.username||!h.password){l("사용자명과 비밀번호를 입력하세요");return}if(h.username.length<3){l("사용자명은 3자 이상이어야 합니다");return}if(h.password.length<6){l("비밀번호는 6자 이상이어야 합니다");return}try{const $=await(await fetch(`${ui}/api/users`,{method:"POST",headers:{"Content-Type":"application/json",Authorization:`Bearer ${e}`},body:JSON.stringify(h)})).json();$.success?(p("사용자가 생성되었습니다"),s(!1),b({username:"",password:"",role:"operator",display_name:""}),x(),setTimeout(()=>p(""),3e3)):l($.detail||"사용자 생성 실패")}catch{l("서버 연결 실패")}},_=async(P,$)=>{try{const I=await(await fetch(`${ui}/api/users/${P}`,{method:"PUT",headers:{"Content-Type":"application/json",Authorization:`Bearer ${e}`},body:JSON.stringify({role:$})})).json();I.success?(p("역할이 변경되었습니다"),x(),setTimeout(()=>p(""),3e3)):l(I.detail||"역할 변경 실패")}catch{l("서버 연결 실패")}},j=async P=>{if(!v||v.length<6){l("비밀번호는 6자 이상이어야 합니다");return}try{const C=await(await fetch(`${ui}/api/users/${P}/reset-password`,{method:"POST",headers:{"Content-Type":"application/json",Authorization:`Bearer ${e}`},body:JSON.stringify({new_password:v})})).json();C.success?(p("비밀번호가 초기화되었습니다"),f(null),w(""),setTimeout(()=>p(""),3e3)):l(C.detail||"비밀번호 초기화 실패")}catch{l("서버 연결 실패")}},O=async(P,$)=>{if(window.confirm(`정말 "${$}" 사용자를 삭제하시겠습니까?`))try{const I=await(await fetch(`${ui}/api/users/${P}`,{method:"DELETE",headers:{Authorization:`Bearer ${e}`}})).json();I.success?(p("사용자가 삭제되었습니다"),x(),setTimeout(()=>p(""),3e3)):l(I.detail||"사용자 삭제 실패")}catch{l("서버 연결 실패")}},M=async(P,$)=>{try{const I=await(await fetch(`${ui}/api/users/${P}`,{method:"PUT",headers:{"Content-Type":"application/json",Authorization:`Bearer ${e}`},body:JSON.stringify({is_active:!$})})).json();I.success?(p($?"계정이 비활성화되었습니다":"계정이 활성화되었습니다"),x(),setTimeout(()=>p(""),3e3)):l(I.detail||"상태 변경 실패")}catch{l("서버 연결 실패")}},E=P=>{if(!g)return;const $={newUsername:T=>b(D=>({...D,username:T})),newPassword:T=>b(D=>({...D,password:T})),newDisplayName:T=>b(D=>({...D,display_name:T})),resetPassword:w},C={newUsername:h.username,newPassword:h.password,newDisplayName:h.display_name,resetPassword:v},I=$[g],L=C[g];P==="BACKSPACE"?I(L.slice(0,-1)):P==="CLEAR"?I(""):P==="ENTER"?(m(!1),S(null)):I(L+P)},A=P=>{S(P),m(!0)};return r?c.jsx("div",{className:"settings-section",children:c.jsx("div",{className:"loading-message",children:"사용자 목록 로딩 중..."})}):c.jsxs("div",{className:"settings-section user-management",children:[c.jsxs("div",{className:"user-management-header",children:[c.jsx("h3",{children:"사용자 관리"}),c.jsx("button",{className:"btn-add-user",onClick:()=>s(!0),children:"+ 새 사용자 추가"})]}),a&&c.jsx("div",{className:"error-message",onClick:()=>l(""),children:a}),d&&c.jsx("div",{className:"success-message",children:d}),c.jsx("div",{className:"user-table-container",children:c.jsxs("table",{className:"user-table",children:[c.jsx("thead",{children:c.jsxs("tr",{children:[c.jsx("th",{children:"사용자명"}),c.jsx("th",{children:"표시명"}),c.jsx("th",{children:"역할"}),c.jsx("th",{children:"상태"}),c.jsx("th",{children:"마지막 로그인"}),c.jsx("th",{children:"관리"})]})}),c.jsx("tbody",{children:t.map(P=>c.jsxs("tr",{className:P.is_active?"":"inactive",children:[c.jsx("td",{children:P.username}),c.jsx("td",{children:P.display_name||"-"}),c.jsx("td",{children:c.jsxs("select",{value:P.role,onChange:$=>_(P.id,$.target.value),disabled:P.username==="admin",children:[c.jsx("option",{value:"admin",children:"관리자"}),c.jsx("option",{value:"operator",children:"운전자"})]})}),c.jsx("td",{children:c.jsx("span",{className:`status-badge ${P.is_active?"active":"inactive"}`,children:P.is_active?"활성":"비활성"})}),c.jsx("td",{children:P.last_login?new Date(P.last_login).toLocaleString("ko-KR"):"-"}),c.jsxs("td",{className:"action-buttons",children:[c.jsx("button",{className:"btn-reset-pw",onClick:()=>f(P.id),title:"비밀번호 초기화",children:"비번초기화"}),P.username!=="admin"&&c.jsxs(c.Fragment,{children:[c.jsx("button",{className:`btn-toggle-active ${P.is_active?"deactivate":"activate"}`,onClick:()=>M(P.id,P.is_active),title:P.is_active?"비활성화":"활성화",children:P.is_active?"비활성화":"활성화"}),c.jsx("button",{className:"btn-delete",onClick:()=>O(P.id,P.username),title:"삭제",children:"삭제"})]})]})]},P.id))})]})}),o&&c.jsx("div",{className:"modal-overlay",onClick:()=>{s(!1),m(!1)},children:c.jsxs("div",{className:"modal-content",onClick:P=>P.stopPropagation(),children:[c.jsxs("div",{className:"modal-header",children:[c.jsx("h4",{children:"새 사용자 추가"}),c.jsx("button",{className:"modal-close",onClick:()=>{s(!1),m(!1)},children:"×"})]}),c.jsxs("div",{className:"modal-body",children:[c.jsxs("div",{className:"form-group",children:[c.jsx("label",{children:"사용자명 (3자 이상)"}),c.jsx("input",{type:"text",value:h.username,onFocus:()=>A("newUsername"),placeholder:"터치하여 입력",readOnly:!0})]}),c.jsxs("div",{className:"form-group",children:[c.jsx("label",{children:"비밀번호 (6자 이상)"}),c.jsx("input",{type:"password",value:h.password,onFocus:()=>A("newPassword"),placeholder:"터치하여 입력",readOnly:!0})]}),c.jsxs("div",{className:"form-group",children:[c.jsx("label",{children:"표시명"}),c.jsx("input",{type:"text",value:h.display_name,onFocus:()=>A("newDisplayName"),placeholder:"터치하여 입력 (선택)",readOnly:!0})]}),c.jsxs("div",{className:"form-group",children:[c.jsx("label",{children:"역할"}),c.jsxs("select",{value:h.role,onChange:P=>b($=>({...$,role:P.target.value})),children:[c.jsx("option",{value:"admin",children:"관리자"}),c.jsx("option",{value:"operator",children:"운전자"})]})]})]}),c.jsxs("div",{className:"modal-footer",children:[c.jsx("button",{className:"btn-cancel",onClick:()=>{s(!1),m(!1)},children:"취소"}),c.jsx("button",{className:"btn-confirm",onClick:k,children:"생성"})]})]})}),u&&c.jsx("div",{className:"modal-overlay",onClick:()=>{f(null),m(!1)},children:c.jsxs("div",{className:"modal-content",onClick:P=>P.stopPropagation(),children:[c.jsxs("div",{className:"modal-header",children:[c.jsx("h4",{children:"비밀번호 초기화"}),c.jsx("button",{className:"modal-close",onClick:()=>{f(null),m(!1)},children:"×"})]}),c.jsx("div",{className:"modal-body",children:c.jsxs("div",{className:"form-group",children:[c.jsx("label",{children:"새 비밀번호 (6자 이상)"}),c.jsx("input",{type:"password",value:v,onFocus:()=>A("resetPassword"),placeholder:"터치하여 입력",readOnly:!0})]})}),c.jsxs("div",{className:"modal-footer",children:[c.jsx("button",{className:"btn-cancel",onClick:()=>{f(null),m(!1)},children:"취소"}),c.jsx("button",{className:"btn-confirm",onClick:()=>j(u),children:"초기화"})]})]})}),y&&c.jsx(Ov,{onKeyPress:E,onClose:()=>{m(!1),S(null)},isPassword:g==="newPassword"||g==="resetPassword"})]})}function qx({pumps:e=[],fans:t=[],onCommand:n,onPumpCommand:r}){const[i,a]=N.useState(!1),l=async(o,s)=>{a(!0);try{let u=!1;if(n&&o.name)u=await n(o.name,s);else if(r){const d=e.findIndex(p=>p===o);u=await r(d,s)}const f=s==="start"?"시작":s==="start_fwd"?"정방향 시작":s==="start_bwd"?"역방향 시작":"정지";alert(u?`✅ ${o.name} ${f} 명령 성공`:"❌ 명령 실패")}catch(u){alert(`❌ 오류: ${u.message}`)}finally{a(!1)}};return c.jsxs("div",{className:"pump-control unified-mode",children:[c.jsxs("div",{className:"control-header",children:[c.jsx("h2",{children:"⚙️ 운전 제어"}),c.jsx("p",{children:"펌프와 팬을 선택하고 운전 명령을 내릴 수 있습니다."})]}),c.jsxs("div",{className:"control-grid",children:[c.jsxs("section",{className:"control-section",children:[c.jsx("h3",{children:"🌊 해수 펌프 (Sea Water Pump)"}),c.jsx("div",{className:"pump-control-list",children:e.slice(0,3).map((o,s)=>c.jsx(yd,{pump:o,pumpIndex:s,isFan:!1,onStart:()=>l(o,"start"),onStop:()=>l(o,"stop"),disabled:i},s))})]}),c.jsxs("section",{className:"control-section",children:[c.jsx("h3",{children:"💧 청수 펌프 (Fresh Water Pump)"}),c.jsx("div",{className:"pump-control-list",children:e.slice(3,6).map((o,s)=>c.jsx(yd,{pump:o,pumpIndex:s+3,isFan:!1,onStart:()=>l(o,"start"),onStop:()=>l(o,"stop"),disabled:i},s+3))})]}),c.jsxs("section",{className:"control-section",children:[c.jsx("h3",{children:"🌀 Engine Room 팬 (E/R Fan)"}),c.jsx("div",{className:"pump-control-list fan-grid",children:t.map((o,s)=>c.jsx(yd,{pump:o,pumpIndex:s,isFan:!0,onStart:()=>l(o,"start_fwd"),onStartBwd:()=>l(o,"start_bwd"),onStop:()=>l(o,"stop"),disabled:i},s))})]})]})]})}function yd({pump:e,pumpIndex:t,isFan:n,onStart:r,onStartBwd:i,onStop:a,disabled:l}){var u;const o=n?e.running_fwd||e.running_bwd:e.running,s=f=>f&&f.startsWith("SWP")?"#3b82f6":f&&f.startsWith("FWP")?"#10b981":f&&f.startsWith("FAN")?"#a855f7":"#334155";return c.jsxs("div",{className:`pump-control-card ${o?"running":"stopped"}`,style:{border:`2px solid ${s(e.name)}`},children:[c.jsxs("div",{className:"control-card-header",children:[c.jsx("h4",{children:e.name}),c.jsx("span",{className:`status-indicator ${n&&e.running_bwd?"reverse":o?"active":"inactive"}`,children:n?e.running_fwd?c.jsxs(c.Fragment,{children:[c.jsx("span",{className:"rotating-icon",children:"⚙️"})," 정방향"]}):e.running_bwd?c.jsxs(c.Fragment,{children:[c.jsx("span",{className:"rotating-icon reverse",children:"⚙️"})," 역방향"]}):"⚪ 정지":e.running?c.jsxs(c.Fragment,{children:[c.jsx("span",{className:"rotating-icon",children:"⚙️"})," 운전중"]}):"⚪ 정지"})]}),c.jsxs("div",{className:"control-card-info",children:[c.jsxs("div",{className:"info-item",children:[c.jsx("span",{className:"info-label",children:"주파수"}),c.jsxs("span",{className:"info-value",children:[((u=e.frequency)==null?void 0:u.toFixed(1))||0," Hz"]})]}),c.jsxs("div",{className:"info-item",children:[c.jsx("span",{className:"info-label",children:"전력"}),c.jsxs("span",{className:"info-value",children:[e.power_kw||0," kW"]})]})]}),c.jsx("div",{className:"control-buttons",children:n?c.jsxs(c.Fragment,{children:[c.jsxs("div",{className:"direction-toggle",children:[c.jsx("button",{className:`toggle-btn ${e.running_fwd?"active":""}`,onClick:f=>{f.stopPropagation(),r()},disabled:l||e.running_fwd,children:"▶️ 정방향"}),c.jsx("button",{className:`toggle-btn ${e.running_bwd?"active":""}`,onClick:f=>{f.stopPropagation(),i()},disabled:l||e.running_bwd,children:"◀️ 역방향"})]}),c.jsx("button",{className:"btn-stop",onClick:f=>{f.stopPropagation(),a()},disabled:l||!o,children:"⏸️ 정지"})]}):c.jsxs(c.Fragment,{children:[c.jsx("button",{className:"btn-start",onClick:f=>{f.stopPropagation(),r()},disabled:l||e.running,children:"▶️ 시작"}),c.jsx("button",{className:"btn-stop",onClick:f=>{f.stopPropagation(),a()},disabled:l||!e.running,children:"⏸️ 정지"})]})})]})}function Kx({equipment:e=[],pumps:t=[],fans:n=[],onCommand:r,onPumpCommand:i}){const[a,l]=N.useState("control"),o=e.length>0?e:t;return c.jsxs("div",{className:"advanced-control",children:[c.jsxs("div",{className:"control-header",children:[c.jsx("h2",{children:"🎛️ 운전 제어"}),c.jsx("p",{children:"ON/OFF 제어, 운전 모드 전환, PID 제어, VFD 상세 정보"})]}),c.jsxs("div",{className:"control-tabs",children:[c.jsx("button",{className:a==="control"?"active":"",onClick:()=>l("control"),children:"▶️ ON/OFF 제어"}),c.jsx("button",{className:a==="automan"?"active":"",onClick:()=>l("automan"),children:"🔄 운전 모드"}),c.jsx("button",{className:a==="pid"?"active":"",onClick:()=>l("pid"),children:"📐 PID 제어"}),c.jsx("button",{className:a==="vfdinfo"?"active":"",onClick:()=>l("vfdinfo"),children:"⚡ VFD 정보"})]}),c.jsxs("div",{className:"control-content",children:[a==="control"&&c.jsx(qx,{pumps:t,fans:n,onCommand:r,onPumpCommand:i}),a==="automan"&&c.jsx(Yx,{equipment:o,pumps:t,fans:n,onCommand:r}),a==="pid"&&c.jsx(Zx,{}),a==="vfdinfo"&&c.jsx(Qx,{equipment:o})]})]})}function Yx({equipment:e=[],pumps:t=[],fans:n=[],onCommand:r}){const i=e.length>0?e:t,[a,l]=N.useState({SWP1:{auto:!0,vfd:!0},SWP2:{auto:!0,vfd:!0},SWP3:{auto:!0,vfd:!0},FWP1:{auto:!0,vfd:!0},FWP2:{auto:!0,vfd:!0},FWP3:{auto:!0,vfd:!0},FAN1:{auto:!0,vfd:!0},FAN2:{auto:!0,vfd:!0},FAN3:{auto:!0,vfd:!0},FAN4:{auto:!0,vfd:!0}});N.useEffect(()=>{if(i.length>0){const d={};i.forEach(p=>{d[p.name]={auto:p.auto_mode!==void 0?p.auto_mode:!0,vfd:p.vfd_mode!==void 0?p.vfd_mode:!0}}),l(d),console.log("🔄 모드 상태 동기화:",d)}},[i]);const o=async(d,p,h)=>{if(l(b=>({...b,[d]:{...b[d],[p]:h}})),r){let b="";p==="auto"?b=h?"auto":"manual":p==="vfd"&&(b=h?"vfd":"bypass"),console.log(`🔧 모드 변경: ${d} ${b}`),await r(d,b)?console.log(`✅ ${d} ${b} 모드 설정 완료`):(console.error(`❌ ${d} ${b} 모드 설정 실패`),l(w=>({...w,[d]:{...w[d],[p]:!h}})))}},s=i.slice(0,3),u=i.slice(3,6),f=i.slice(6,10);return c.jsxs("div",{className:"automan-section",children:[c.jsxs("div",{className:"automan-description",children:[c.jsx("h3",{children:"🔄 운전 모드 설정"}),c.jsx("p",{children:"각 장비의 운전 모드(자동/수동)와 VFD 모드를 설정할 수 있습니다."})]}),c.jsxs("div",{className:"mode-grid-3col",children:[c.jsxs("div",{className:"mode-column",children:[c.jsx("h4",{className:"column-title",children:"🌊 해수 펌프 (SWP)"}),s.map((d,p)=>c.jsx(vd,{equipment:d,modes:a[d.name],onSetMode:(h,b)=>o(d.name,h,b),isFan:!1},p))]}),c.jsxs("div",{className:"mode-column",children:[c.jsx("h4",{className:"column-title",children:"💧 청수 펌프 (FWP)"}),u.map((d,p)=>c.jsx(vd,{equipment:d,modes:a[d.name],onSetMode:(h,b)=>o(d.name,h,b),isFan:!1},p+3))]}),c.jsxs("div",{className:"mode-column fan-column",children:[c.jsx("h4",{className:"column-title",children:"🌀 E/R 팬 (FAN)"}),c.jsx("div",{className:"fan-cards-grid",children:f.map((d,p)=>c.jsx(vd,{equipment:d,modes:a[d.name],onSetMode:(h,b)=>o(d.name,h,b),isFan:!0},p+6))})]})]})]})}function vd({equipment:e,modes:t,onSetMode:n,isFan:r=!1}){var l;const i=r?e.running_fwd||e.running_bwd:e.running,a=o=>o&&o.startsWith("SWP")?"#3b82f6":o&&o.startsWith("FWP")?"#10b981":o&&o.startsWith("FAN")?"#a855f7":"#334155";return c.jsxs("div",{className:"pump-mode-card",style:{border:`2px solid ${a(e.name)}`},children:[c.jsxs("div",{className:"mode-card-header",children:[c.jsx("h5",{children:e.name}),c.jsx("span",{className:`status-dot ${i?"running":"stopped"}`})]}),c.jsxs("div",{className:"mode-switches",children:[c.jsxs("div",{className:"mode-switch",children:[c.jsx("span",{className:"switch-label",children:"운전 모드"}),c.jsxs("div",{className:"switch-buttons",children:[c.jsx("button",{className:t!=null&&t.auto?"active":"",onClick:()=>n("auto",!0),children:"🤖 자동"}),c.jsx("button",{className:t!=null&&t.auto?"":"active",onClick:()=>n("auto",!1),children:"👤 수동"})]})]}),c.jsxs("div",{className:"mode-switch",children:[c.jsx("span",{className:"switch-label",children:"VFD 모드"}),c.jsxs("div",{className:"switch-buttons",children:[c.jsx("button",{className:t!=null&&t.vfd?"active":"",onClick:()=>n("vfd",!0),children:"⚡ VFD"}),c.jsx("button",{className:t!=null&&t.vfd?"":"active",onClick:()=>n("vfd",!1),children:"🔌 Bypass"})]})]})]}),c.jsxs("div",{className:"mode-info",children:[c.jsxs("div",{className:"info-row",children:[c.jsx("span",{children:"주파수:"}),c.jsxs("span",{children:[((l=e.frequency)==null?void 0:l.toFixed(1))||0," Hz"]})]}),c.jsxs("div",{className:"info-row",children:[c.jsx("span",{children:"전력:"}),c.jsxs("span",{children:[e.power_kw||0," kW"]})]}),r&&c.jsxs("div",{className:"info-row",children:[c.jsx("span",{children:"방향:"}),c.jsx("span",{children:e.running_fwd?"정방향":e.running_bwd?"역방향":"정지"})]})]})]})}function Zx(){const[e,t]=N.useState({swp_kp:1,swp_ki:.1,swp_kd:.05,swp_setpoint:30,fwp_kp:1,fwp_ki:.1,fwp_kd:.05,fwp_setpoint:75}),n=(r,i)=>{t(a=>({...a,[r]:parseFloat(i)}))};return c.jsxs("div",{className:"pid-section",children:[c.jsxs("div",{className:"pid-description",children:[c.jsx("h3",{children:"📐 PID 제어 파라미터"}),c.jsx("p",{children:"온도 제어를 위한 PID 게인값을 설정합니다."}),c.jsxs("div",{className:"pid-formula",children:[c.jsx("strong",{children:"제어식:"})," Output = Kp × e(t) + Ki × ∫e(t)dt + Kd × de(t)/dt"]})]}),c.jsxs("div",{className:"pid-controller-section",children:[c.jsx("h4",{children:"🌊 해수 펌프 PID 파라미터"}),c.jsxs("div",{className:"pid-grid",children:[c.jsx(Yn,{label:"비례 게인 (Kp)",value:e.swp_kp,onChange:r=>n("swp_kp",r),min:0,max:10,step:.1}),c.jsx(Yn,{label:"적분 게인 (Ki)",value:e.swp_ki,onChange:r=>n("swp_ki",r),min:0,max:5,step:.01}),c.jsx(Yn,{label:"미분 게인 (Kd)",value:e.swp_kd,onChange:r=>n("swp_kd",r),min:0,max:1,step:.01}),c.jsx(Yn,{label:"목표값 (Setpoint)",value:e.swp_setpoint,onChange:r=>n("swp_setpoint",r),min:-30,max:100,step:.5,unit:"°C"})]})]}),c.jsxs("div",{className:"pid-controller-section",children:[c.jsx("h4",{children:"💧 청수 펌프 PID 파라미터"}),c.jsxs("div",{className:"pid-grid",children:[c.jsx(Yn,{label:"비례 게인 (Kp)",value:e.fwp_kp,onChange:r=>n("fwp_kp",r),min:0,max:10,step:.1}),c.jsx(Yn,{label:"적분 게인 (Ki)",value:e.fwp_ki,onChange:r=>n("fwp_ki",r),min:0,max:5,step:.01}),c.jsx(Yn,{label:"미분 게인 (Kd)",value:e.fwp_kd,onChange:r=>n("fwp_kd",r),min:0,max:1,step:.01}),c.jsx(Yn,{label:"목표값 (Setpoint)",value:e.fwp_setpoint,onChange:r=>n("fwp_setpoint",r),min:0,max:100,step:.5,unit:"°C"})]})]}),c.jsx("div",{className:"pid-footer",children:c.jsx("button",{className:"btn-apply",children:"💾 PID 파라미터 적용"})})]})}function Yn({label:e,value:t,onChange:n,min:r,max:i,step:a,unit:l=""}){return c.jsxs("div",{className:"pid-parameter",children:[c.jsx("label",{children:e}),c.jsxs("div",{className:"pid-input-group",children:[c.jsx("input",{type:"number",value:t,onChange:o=>n(o.target.value),min:r,max:i,step:a}),l&&c.jsx("span",{className:"unit",children:l})]}),c.jsx("input",{type:"range",value:t,onChange:o=>n(o.target.value),min:r,max:i,step:a,className:"pid-slider"})]})}function Qx({equipment:e=[]}){const[t,n]=N.useState(0);return c.jsxs("div",{className:"vfdinfo-section",children:[c.jsxs("div",{className:"vfdinfo-description",children:[c.jsx("h3",{children:"⚡ VFD 상세 정보"}),c.jsx("p",{children:"각 장비의 VFD(인버터) 상세 운전 정보를 확인합니다."})]}),c.jsx("div",{className:"pump-selector",children:e.slice(0,6).map((r,i)=>c.jsx("button",{className:`pump-select-btn ${t===i?"active":""}`,onClick:()=>n(i),children:r.name},i))}),c.jsx("div",{className:"pump-selector",style:{marginTop:"0.5rem"},children:e.slice(6,10).map((r,i)=>c.jsx("button",{className:`pump-select-btn ${t===i+6?"active":""}`,onClick:()=>n(i+6),children:r.name},i+6))}),e[t]&&c.jsx(Jx,{equipment:e[t],isFan:t>=6})]})}function Jx({equipment:e,isFan:t=!1}){var r,i,a,l;const n=t?e.running_fwd||e.running_bwd:e.running;return c.jsxs("div",{className:"vfd-detail-card",children:[c.jsxs("div",{className:"vfd-header",children:[c.jsxs("h4",{children:[e.name," VFD 상세 정보"]}),c.jsx("span",{className:`vfd-status ${n?"running":"stopped"}`,children:t?e.running_fwd?"🟢 정방향 운전중":e.running_bwd?"🟡 역방향 운전중":"⚪ 정지":e.running?"🟢 운전중":"⚪ 정지"})]}),c.jsxs("div",{className:"vfd-info-grid",children:[c.jsxs("div",{className:"vfd-info-column",children:[c.jsxs("div",{className:"vfd-info-section",children:[c.jsx("h5",{children:"📊 운전 데이터"}),c.jsx(Ge,{label:"현재 주파수",value:`${((r=e.frequency)==null?void 0:r.toFixed(1))||0} Hz`}),c.jsx(Ge,{label:"출력 주파수",value:`${((i=e.frequency)==null?void 0:i.toFixed(1))||0} Hz`}),c.jsx(Ge,{label:"목표 주파수",value:"60.0 Hz"}),c.jsx(Ge,{label:"현재 전류",value:`${(e.power_kw*2.5).toFixed(1)} A`}),c.jsx(Ge,{label:"출력 전압",value:"440 V"}),t&&c.jsx(Ge,{label:"운전 방향",value:e.running_fwd?"정방향 (FWD)":e.running_bwd?"역방향 (BWD)":"정지"})]}),c.jsxs("div",{className:"vfd-info-section",children:[c.jsx("h5",{children:"⚡ 전력 데이터"}),c.jsx(Ge,{label:"순시 전력",value:`${e.power_kw||0} kW`}),c.jsx(Ge,{label:"평균 전력",value:`${e.avg_power||0} kW`}),c.jsx(Ge,{label:"역률",value:"0.95"}),c.jsx(Ge,{label:"효율",value:"94.5 %"}),c.jsx(Ge,{label:"절감률",value:`${e.saved_ratio||0} %`,highlight:!0})]})]}),c.jsxs("div",{className:"vfd-info-column",children:[c.jsxs("div",{className:"vfd-info-section",children:[c.jsx("h5",{children:"🕐 운전 시간"}),c.jsx(Ge,{label:"ESS 운전 시간",value:`${((a=e.run_hours)==null?void 0:a.toLocaleString())||0} h`}),c.jsx(Ge,{label:"총 운전 시간",value:`${(e.run_hours*1.5).toLocaleString()||0} h`}),c.jsx(Ge,{label:"절감 전력량",value:`${((l=e.saved_kwh)==null?void 0:l.toLocaleString())||0} kWh`,highlight:!0})]}),c.jsxs("div",{className:"vfd-info-section",children:[c.jsx("h5",{children:"🛡️ 상태 정보"}),c.jsx(Ge,{label:"운전 모드",value:e.ess_mode?"ESS 모드":"일반 모드"}),c.jsx(Ge,{label:"제어 모드",value:"자동"}),c.jsx(Ge,{label:"VFD 온도",value:"42 °C"}),c.jsx(Ge,{label:"모터 온도",value:"38 °C"}),c.jsx(Ge,{label:"알람 상태",value:"정상",success:!0})]})]})]})]})}function Ge({label:e,value:t,highlight:n,success:r}){return c.jsxs("div",{className:"vfd-info-row",children:[c.jsx("span",{className:"vfd-label",children:e}),c.jsx("span",{className:`vfd-value ${n?"highlight":""} ${r?"success":""}`,children:t})]})}function Pv(e){var t,n,r="";if(typeof e=="string"||typeof e=="number")r+=e;else if(typeof e=="object")if(Array.isArray(e)){var i=e.length;for(t=0;t<i;t++)e[t]&&(n=Pv(e[t]))&&(r&&(r+=" "),r+=n)}else for(n in e)e[n]&&(r&&(r+=" "),r+=n);return r}function de(){for(var e,t,n=0,r="",i=arguments.length;n<i;n++)(e=arguments[n])&&(t=Pv(e))&&(r&&(r+=" "),r+=t);return r}var eb=Array.isArray,Pt=eb,tb=typeof _o=="object"&&_o&&_o.Object===Object&&_o,Av=tb,nb=Av,rb=typeof self=="object"&&self&&self.Object===Object&&self,ib=nb||rb||Function("return this")(),_n=ib,ab=_n,lb=ab.Symbol,yo=lb,k7=yo,Nv=Object.prototype,ob=Nv.hasOwnProperty,sb=Nv.toString,Ia=k7?k7.toStringTag:void 0;function cb(e){var t=ob.call(e,Ia),n=e[Ia];try{e[Ia]=void 0;var r=!0}catch{}var i=sb.call(e);return r&&(t?e[Ia]=n:delete e[Ia]),i}var ub=cb,db=Object.prototype,fb=db.toString;function pb(e){return fb.call(e)}var hb=pb,S7=yo,mb=ub,yb=hb,vb="[object Null]",gb="[object Undefined]",_7=S7?S7.toStringTag:void 0;function xb(e){return e==null?e===void 0?gb:vb:_7&&_7 in Object(e)?mb(e):yb(e)}var Gn=xb;function bb(e){return e!=null&&typeof e=="object"}var Vn=bb,wb=Gn,kb=Vn,Sb="[object Symbol]";function _b(e){return typeof e=="symbol"||kb(e)&&wb(e)==Sb}var ya=_b,jb=Pt,Ob=ya,Pb=/\.|\[(?:[^[\]]*|(["'])(?:(?!\1)[^\\]|\\.)*?\1)\]/,Ab=/^\w*$/;function Nb(e,t){if(jb(e))return!1;var n=typeof e;return n=="number"||n=="symbol"||n=="boolean"||e==null||Ob(e)?!0:Ab.test(e)||!Pb.test(e)||t!=null&&e in Object(t)}var i0=Nb;function Cb(e){var t=typeof e;return e!=null&&(t=="object"||t=="function")}var kr=Cb;const va=ke(kr);var Eb=Gn,Mb=kr,Tb="[object AsyncFunction]",$b="[object Function]",zb="[object GeneratorFunction]",Ib="[object Proxy]";function Db(e){if(!Mb(e))return!1;var t=Eb(e);return t==$b||t==zb||t==Tb||t==Ib}var a0=Db;const re=ke(a0);var Lb=_n,Fb=Lb["__core-js_shared__"],Rb=Fb,gd=Rb,j7=function(){var e=/[^.]+$/.exec(gd&&gd.keys&&gd.keys.IE_PROTO||"");return e?"Symbol(src)_1."+e:""}();function Bb(e){return!!j7&&j7 in e}var Wb=Bb,Ub=Function.prototype,Hb=Ub.toString;function Gb(e){if(e!=null){try{return Hb.call(e)}catch{}try{return e+""}catch{}}return""}var Cv=Gb,Vb=a0,Xb=Wb,qb=kr,Kb=Cv,Yb=/[\\^$.*+?()[\]{}|]/g,Zb=/^\[object .+?Constructor\]$/,Qb=Function.prototype,Jb=Object.prototype,ew=Qb.toString,tw=Jb.hasOwnProperty,nw=RegExp("^"+ew.call(tw).replace(Yb,"\\$&").replace(/hasOwnProperty|(function).*?(?=\\\()| for .+?(?=\\\])/g,"$1.*?")+"$");function rw(e){if(!qb(e)||Xb(e))return!1;var t=Vb(e)?nw:Zb;return t.test(Kb(e))}var iw=rw;function aw(e,t){return e==null?void 0:e[t]}var lw=aw,ow=iw,sw=lw;function cw(e,t){var n=sw(e,t);return ow(n)?n:void 0}var ai=cw,uw=ai,dw=uw(Object,"create"),tu=dw,O7=tu;function fw(){this.__data__=O7?O7(null):{},this.size=0}var pw=fw;function hw(e){var t=this.has(e)&&delete this.__data__[e];return this.size-=t?1:0,t}var mw=hw,yw=tu,vw="__lodash_hash_undefined__",gw=Object.prototype,xw=gw.hasOwnProperty;function bw(e){var t=this.__data__;if(yw){var n=t[e];return n===vw?void 0:n}return xw.call(t,e)?t[e]:void 0}var ww=bw,kw=tu,Sw=Object.prototype,_w=Sw.hasOwnProperty;function jw(e){var t=this.__data__;return kw?t[e]!==void 0:_w.call(t,e)}var Ow=jw,Pw=tu,Aw="__lodash_hash_undefined__";function Nw(e,t){var n=this.__data__;return this.size+=this.has(e)?0:1,n[e]=Pw&&t===void 0?Aw:t,this}var Cw=Nw,Ew=pw,Mw=mw,Tw=ww,$w=Ow,zw=Cw;function ga(e){var t=-1,n=e==null?0:e.length;for(this.clear();++t<n;){var r=e[t];this.set(r[0],r[1])}}ga.prototype.clear=Ew;ga.prototype.delete=Mw;ga.prototype.get=Tw;ga.prototype.has=$w;ga.prototype.set=zw;var Iw=ga;function Dw(){this.__data__=[],this.size=0}var Lw=Dw;function Fw(e,t){return e===t||e!==e&&t!==t}var l0=Fw,Rw=l0;function Bw(e,t){for(var n=e.length;n--;)if(Rw(e[n][0],t))return n;return-1}var nu=Bw,Ww=nu,Uw=Array.prototype,Hw=Uw.splice;function Gw(e){var t=this.__data__,n=Ww(t,e);if(n<0)return!1;var r=t.length-1;return n==r?t.pop():Hw.call(t,n,1),--this.size,!0}var Vw=Gw,Xw=nu;function qw(e){var t=this.__data__,n=Xw(t,e);return n<0?void 0:t[n][1]}var Kw=qw,Yw=nu;function Zw(e){return Yw(this.__data__,e)>-1}var Qw=Zw,Jw=nu;function ek(e,t){var n=this.__data__,r=Jw(n,e);return r<0?(++this.size,n.push([e,t])):n[r][1]=t,this}var tk=ek,nk=Lw,rk=Vw,ik=Kw,ak=Qw,lk=tk;function xa(e){var t=-1,n=e==null?0:e.length;for(this.clear();++t<n;){var r=e[t];this.set(r[0],r[1])}}xa.prototype.clear=nk;xa.prototype.delete=rk;xa.prototype.get=ik;xa.prototype.has=ak;xa.prototype.set=lk;var ru=xa,ok=ai,sk=_n,ck=ok(sk,"Map"),o0=ck,P7=Iw,uk=ru,dk=o0;function fk(){this.size=0,this.__data__={hash:new P7,map:new(dk||uk),string:new P7}}var pk=fk;function hk(e){var t=typeof e;return t=="string"||t=="number"||t=="symbol"||t=="boolean"?e!=="__proto__":e===null}var mk=hk,yk=mk;function vk(e,t){var n=e.__data__;return yk(t)?n[typeof t=="string"?"string":"hash"]:n.map}var iu=vk,gk=iu;function xk(e){var t=gk(this,e).delete(e);return this.size-=t?1:0,t}var bk=xk,wk=iu;function kk(e){return wk(this,e).get(e)}var Sk=kk,_k=iu;function jk(e){return _k(this,e).has(e)}var Ok=jk,Pk=iu;function Ak(e,t){var n=Pk(this,e),r=n.size;return n.set(e,t),this.size+=n.size==r?0:1,this}var Nk=Ak,Ck=pk,Ek=bk,Mk=Sk,Tk=Ok,$k=Nk;function ba(e){var t=-1,n=e==null?0:e.length;for(this.clear();++t<n;){var r=e[t];this.set(r[0],r[1])}}ba.prototype.clear=Ck;ba.prototype.delete=Ek;ba.prototype.get=Mk;ba.prototype.has=Tk;ba.prototype.set=$k;var s0=ba,Ev=s0,zk="Expected a function";function c0(e,t){if(typeof e!="function"||t!=null&&typeof t!="function")throw new TypeError(zk);var n=function(){var r=arguments,i=t?t.apply(this,r):r[0],a=n.cache;if(a.has(i))return a.get(i);var l=e.apply(this,r);return n.cache=a.set(i,l)||a,l};return n.cache=new(c0.Cache||Ev),n}c0.Cache=Ev;var Mv=c0;const Ik=ke(Mv);var Dk=Mv,Lk=500;function Fk(e){var t=Dk(e,function(r){return n.size===Lk&&n.clear(),r}),n=t.cache;return t}var Rk=Fk,Bk=Rk,Wk=/[^.[\]]+|\[(?:(-?\d+(?:\.\d+)?)|(["'])((?:(?!\2)[^\\]|\\.)*?)\2)\]|(?=(?:\.|\[\])(?:\.|\[\]|$))/g,Uk=/\\(\\)?/g,Hk=Bk(function(e){var t=[];return e.charCodeAt(0)===46&&t.push(""),e.replace(Wk,function(n,r,i,a){t.push(i?a.replace(Uk,"$1"):r||n)}),t}),Gk=Hk;function Vk(e,t){for(var n=-1,r=e==null?0:e.length,i=Array(r);++n<r;)i[n]=t(e[n],n,e);return i}var u0=Vk,A7=yo,Xk=u0,qk=Pt,Kk=ya,N7=A7?A7.prototype:void 0,C7=N7?N7.toString:void 0;function Tv(e){if(typeof e=="string")return e;if(qk(e))return Xk(e,Tv)+"";if(Kk(e))return C7?C7.call(e):"";var t=e+"";return t=="0"&&1/e==-1/0?"-0":t}var Yk=Tv,Zk=Yk;function Qk(e){return e==null?"":Zk(e)}var $v=Qk,Jk=Pt,eS=i0,tS=Gk,nS=$v;function rS(e,t){return Jk(e)?e:eS(e,t)?[e]:tS(nS(e))}var zv=rS,iS=ya;function aS(e){if(typeof e=="string"||iS(e))return e;var t=e+"";return t=="0"&&1/e==-1/0?"-0":t}var au=aS,lS=zv,oS=au;function sS(e,t){t=lS(t,e);for(var n=0,r=t.length;e!=null&&n<r;)e=e[oS(t[n++])];return n&&n==r?e:void 0}var d0=sS,cS=d0;function uS(e,t,n){var r=e==null?void 0:cS(e,t);return r===void 0?n:r}var Iv=uS;const Gt=ke(Iv);function dS(e){return e==null}var fS=dS;const fe=ke(fS);var pS=Gn,hS=Pt,mS=Vn,yS="[object String]";function vS(e){return typeof e=="string"||!hS(e)&&mS(e)&&pS(e)==yS}var gS=vS;const Qr=ke(gS);var Dv={exports:{}},ve={};/**
 * @license React
 * react-is.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */var f0=Symbol.for("react.element"),p0=Symbol.for("react.portal"),lu=Symbol.for("react.fragment"),ou=Symbol.for("react.strict_mode"),su=Symbol.for("react.profiler"),cu=Symbol.for("react.provider"),uu=Symbol.for("react.context"),xS=Symbol.for("react.server_context"),du=Symbol.for("react.forward_ref"),fu=Symbol.for("react.suspense"),pu=Symbol.for("react.suspense_list"),hu=Symbol.for("react.memo"),mu=Symbol.for("react.lazy"),bS=Symbol.for("react.offscreen"),Lv;Lv=Symbol.for("react.module.reference");function Kt(e){if(typeof e=="object"&&e!==null){var t=e.$$typeof;switch(t){case f0:switch(e=e.type,e){case lu:case su:case ou:case fu:case pu:return e;default:switch(e=e&&e.$$typeof,e){case xS:case uu:case du:case mu:case hu:case cu:return e;default:return t}}case p0:return t}}}ve.ContextConsumer=uu;ve.ContextProvider=cu;ve.Element=f0;ve.ForwardRef=du;ve.Fragment=lu;ve.Lazy=mu;ve.Memo=hu;ve.Portal=p0;ve.Profiler=su;ve.StrictMode=ou;ve.Suspense=fu;ve.SuspenseList=pu;ve.isAsyncMode=function(){return!1};ve.isConcurrentMode=function(){return!1};ve.isContextConsumer=function(e){return Kt(e)===uu};ve.isContextProvider=function(e){return Kt(e)===cu};ve.isElement=function(e){return typeof e=="object"&&e!==null&&e.$$typeof===f0};ve.isForwardRef=function(e){return Kt(e)===du};ve.isFragment=function(e){return Kt(e)===lu};ve.isLazy=function(e){return Kt(e)===mu};ve.isMemo=function(e){return Kt(e)===hu};ve.isPortal=function(e){return Kt(e)===p0};ve.isProfiler=function(e){return Kt(e)===su};ve.isStrictMode=function(e){return Kt(e)===ou};ve.isSuspense=function(e){return Kt(e)===fu};ve.isSuspenseList=function(e){return Kt(e)===pu};ve.isValidElementType=function(e){return typeof e=="string"||typeof e=="function"||e===lu||e===su||e===ou||e===fu||e===pu||e===bS||typeof e=="object"&&e!==null&&(e.$$typeof===mu||e.$$typeof===hu||e.$$typeof===cu||e.$$typeof===uu||e.$$typeof===du||e.$$typeof===Lv||e.getModuleId!==void 0)};ve.typeOf=Kt;Dv.exports=ve;var wS=Dv.exports,kS=Gn,SS=Vn,_S="[object Number]";function jS(e){return typeof e=="number"||SS(e)&&kS(e)==_S}var Fv=jS;const OS=ke(Fv);var PS=Fv;function AS(e){return PS(e)&&e!=+e}var NS=AS;const vo=ke(NS);var ln=function(t){return t===0?0:t>0?1:-1},Lr=function(t){return Qr(t)&&t.indexOf("%")===t.length-1},G=function(t){return OS(t)&&!vo(t)},CS=function(t){return fe(t)},Ye=function(t){return G(t)||Qr(t)},ES=0,yu=function(t){var n=++ES;return"".concat(t||"").concat(n)},Jr=function(t,n){var r=arguments.length>2&&arguments[2]!==void 0?arguments[2]:0,i=arguments.length>3&&arguments[3]!==void 0?arguments[3]:!1;if(!G(t)&&!Qr(t))return r;var a;if(Lr(t)){var l=t.indexOf("%");a=n*parseFloat(t.slice(0,l))/100}else a=+t;return vo(a)&&(a=r),i&&a>n&&(a=n),a},nr=function(t){if(!t)return null;var n=Object.keys(t);return n&&n.length?t[n[0]]:null},MS=function(t){if(!Array.isArray(t))return!1;for(var n=t.length,r={},i=0;i<n;i++)if(!r[t[i]])r[t[i]]=!0;else return!0;return!1},di=function(t,n){return G(t)&&G(n)?function(r){return t+r*(n-t)}:function(){return n}};function Rf(e,t,n){return!e||!e.length?null:e.find(function(r){return r&&(typeof t=="function"?t(r):Gt(r,t))===n})}var TS=function(t,n){return G(t)&&G(n)?t-n:Qr(t)&&Qr(n)?t.localeCompare(n):t instanceof Date&&n instanceof Date?t.getTime()-n.getTime():String(t).localeCompare(String(n))};function Ii(e,t){for(var n in e)if({}.hasOwnProperty.call(e,n)&&(!{}.hasOwnProperty.call(t,n)||e[n]!==t[n]))return!1;for(var r in t)if({}.hasOwnProperty.call(t,r)&&!{}.hasOwnProperty.call(e,r))return!1;return!0}function Bf(e){"@babel/helpers - typeof";return Bf=typeof Symbol=="function"&&typeof Symbol.iterator=="symbol"?function(t){return typeof t}:function(t){return t&&typeof Symbol=="function"&&t.constructor===Symbol&&t!==Symbol.prototype?"symbol":typeof t},Bf(e)}var $S=["viewBox","children"],zS=["aria-activedescendant","aria-atomic","aria-autocomplete","aria-busy","aria-checked","aria-colcount","aria-colindex","aria-colspan","aria-controls","aria-current","aria-describedby","aria-details","aria-disabled","aria-errormessage","aria-expanded","aria-flowto","aria-haspopup","aria-hidden","aria-invalid","aria-keyshortcuts","aria-label","aria-labelledby","aria-level","aria-live","aria-modal","aria-multiline","aria-multiselectable","aria-orientation","aria-owns","aria-placeholder","aria-posinset","aria-pressed","aria-readonly","aria-relevant","aria-required","aria-roledescription","aria-rowcount","aria-rowindex","aria-rowspan","aria-selected","aria-setsize","aria-sort","aria-valuemax","aria-valuemin","aria-valuenow","aria-valuetext","className","color","height","id","lang","max","media","method","min","name","style","target","width","role","tabIndex","accentHeight","accumulate","additive","alignmentBaseline","allowReorder","alphabetic","amplitude","arabicForm","ascent","attributeName","attributeType","autoReverse","azimuth","baseFrequency","baselineShift","baseProfile","bbox","begin","bias","by","calcMode","capHeight","clip","clipPath","clipPathUnits","clipRule","colorInterpolation","colorInterpolationFilters","colorProfile","colorRendering","contentScriptType","contentStyleType","cursor","cx","cy","d","decelerate","descent","diffuseConstant","direction","display","divisor","dominantBaseline","dur","dx","dy","edgeMode","elevation","enableBackground","end","exponent","externalResourcesRequired","fill","fillOpacity","fillRule","filter","filterRes","filterUnits","floodColor","floodOpacity","focusable","fontFamily","fontSize","fontSizeAdjust","fontStretch","fontStyle","fontVariant","fontWeight","format","from","fx","fy","g1","g2","glyphName","glyphOrientationHorizontal","glyphOrientationVertical","glyphRef","gradientTransform","gradientUnits","hanging","horizAdvX","horizOriginX","href","ideographic","imageRendering","in2","in","intercept","k1","k2","k3","k4","k","kernelMatrix","kernelUnitLength","kerning","keyPoints","keySplines","keyTimes","lengthAdjust","letterSpacing","lightingColor","limitingConeAngle","local","markerEnd","markerHeight","markerMid","markerStart","markerUnits","markerWidth","mask","maskContentUnits","maskUnits","mathematical","mode","numOctaves","offset","opacity","operator","order","orient","orientation","origin","overflow","overlinePosition","overlineThickness","paintOrder","panose1","pathLength","patternContentUnits","patternTransform","patternUnits","pointerEvents","pointsAtX","pointsAtY","pointsAtZ","preserveAlpha","preserveAspectRatio","primitiveUnits","r","radius","refX","refY","renderingIntent","repeatCount","repeatDur","requiredExtensions","requiredFeatures","restart","result","rotate","rx","ry","seed","shapeRendering","slope","spacing","specularConstant","specularExponent","speed","spreadMethod","startOffset","stdDeviation","stemh","stemv","stitchTiles","stopColor","stopOpacity","strikethroughPosition","strikethroughThickness","string","stroke","strokeDasharray","strokeDashoffset","strokeLinecap","strokeLinejoin","strokeMiterlimit","strokeOpacity","strokeWidth","surfaceScale","systemLanguage","tableValues","targetX","targetY","textAnchor","textDecoration","textLength","textRendering","to","transform","u1","u2","underlinePosition","underlineThickness","unicode","unicodeBidi","unicodeRange","unitsPerEm","vAlphabetic","values","vectorEffect","version","vertAdvY","vertOriginX","vertOriginY","vHanging","vIdeographic","viewTarget","visibility","vMathematical","widths","wordSpacing","writingMode","x1","x2","x","xChannelSelector","xHeight","xlinkActuate","xlinkArcrole","xlinkHref","xlinkRole","xlinkShow","xlinkTitle","xlinkType","xmlBase","xmlLang","xmlns","xmlnsXlink","xmlSpace","y1","y2","y","yChannelSelector","z","zoomAndPan","ref","key","angle"],E7=["points","pathLength"],xd={svg:$S,polygon:E7,polyline:E7},h0=["dangerouslySetInnerHTML","onCopy","onCopyCapture","onCut","onCutCapture","onPaste","onPasteCapture","onCompositionEnd","onCompositionEndCapture","onCompositionStart","onCompositionStartCapture","onCompositionUpdate","onCompositionUpdateCapture","onFocus","onFocusCapture","onBlur","onBlurCapture","onChange","onChangeCapture","onBeforeInput","onBeforeInputCapture","onInput","onInputCapture","onReset","onResetCapture","onSubmit","onSubmitCapture","onInvalid","onInvalidCapture","onLoad","onLoadCapture","onError","onErrorCapture","onKeyDown","onKeyDownCapture","onKeyPress","onKeyPressCapture","onKeyUp","onKeyUpCapture","onAbort","onAbortCapture","onCanPlay","onCanPlayCapture","onCanPlayThrough","onCanPlayThroughCapture","onDurationChange","onDurationChangeCapture","onEmptied","onEmptiedCapture","onEncrypted","onEncryptedCapture","onEnded","onEndedCapture","onLoadedData","onLoadedDataCapture","onLoadedMetadata","onLoadedMetadataCapture","onLoadStart","onLoadStartCapture","onPause","onPauseCapture","onPlay","onPlayCapture","onPlaying","onPlayingCapture","onProgress","onProgressCapture","onRateChange","onRateChangeCapture","onSeeked","onSeekedCapture","onSeeking","onSeekingCapture","onStalled","onStalledCapture","onSuspend","onSuspendCapture","onTimeUpdate","onTimeUpdateCapture","onVolumeChange","onVolumeChangeCapture","onWaiting","onWaitingCapture","onAuxClick","onAuxClickCapture","onClick","onClickCapture","onContextMenu","onContextMenuCapture","onDoubleClick","onDoubleClickCapture","onDrag","onDragCapture","onDragEnd","onDragEndCapture","onDragEnter","onDragEnterCapture","onDragExit","onDragExitCapture","onDragLeave","onDragLeaveCapture","onDragOver","onDragOverCapture","onDragStart","onDragStartCapture","onDrop","onDropCapture","onMouseDown","onMouseDownCapture","onMouseEnter","onMouseLeave","onMouseMove","onMouseMoveCapture","onMouseOut","onMouseOutCapture","onMouseOver","onMouseOverCapture","onMouseUp","onMouseUpCapture","onSelect","onSelectCapture","onTouchCancel","onTouchCancelCapture","onTouchEnd","onTouchEndCapture","onTouchMove","onTouchMoveCapture","onTouchStart","onTouchStartCapture","onPointerDown","onPointerDownCapture","onPointerMove","onPointerMoveCapture","onPointerUp","onPointerUpCapture","onPointerCancel","onPointerCancelCapture","onPointerEnter","onPointerEnterCapture","onPointerLeave","onPointerLeaveCapture","onPointerOver","onPointerOverCapture","onPointerOut","onPointerOutCapture","onGotPointerCapture","onGotPointerCaptureCapture","onLostPointerCapture","onLostPointerCaptureCapture","onScroll","onScrollCapture","onWheel","onWheelCapture","onAnimationStart","onAnimationStartCapture","onAnimationEnd","onAnimationEndCapture","onAnimationIteration","onAnimationIterationCapture","onTransitionEnd","onTransitionEndCapture"],Bs=function(t,n){if(!t||typeof t=="function"||typeof t=="boolean")return null;var r=t;if(N.isValidElement(t)&&(r=t.props),!va(r))return null;var i={};return Object.keys(r).forEach(function(a){h0.includes(a)&&(i[a]=n||function(l){return r[a](r,l)})}),i},IS=function(t,n,r){return function(i){return t(n,r,i),null}},Ws=function(t,n,r){if(!va(t)||Bf(t)!=="object")return null;var i=null;return Object.keys(t).forEach(function(a){var l=t[a];h0.includes(a)&&typeof l=="function"&&(i||(i={}),i[a]=IS(l,n,r))}),i},DS=["children"],LS=["children"];function M7(e,t){if(e==null)return{};var n=FS(e,t),r,i;if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);for(i=0;i<a.length;i++)r=a[i],!(t.indexOf(r)>=0)&&Object.prototype.propertyIsEnumerable.call(e,r)&&(n[r]=e[r])}return n}function FS(e,t){if(e==null)return{};var n={};for(var r in e)if(Object.prototype.hasOwnProperty.call(e,r)){if(t.indexOf(r)>=0)continue;n[r]=e[r]}return n}var T7={click:"onClick",mousedown:"onMouseDown",mouseup:"onMouseUp",mouseover:"onMouseOver",mousemove:"onMouseMove",mouseout:"onMouseOut",mouseenter:"onMouseEnter",mouseleave:"onMouseLeave",touchcancel:"onTouchCancel",touchend:"onTouchEnd",touchmove:"onTouchMove",touchstart:"onTouchStart",contextmenu:"onContextMenu",dblclick:"onDoubleClick"},$n=function(t){return typeof t=="string"?t:t?t.displayName||t.name||"Component":""},$7=null,bd=null,m0=function e(t){if(t===$7&&Array.isArray(bd))return bd;var n=[];return N.Children.forEach(t,function(r){fe(r)||(wS.isFragment(r)?n=n.concat(e(r.props.children)):n.push(r))}),bd=n,$7=t,n};function cn(e,t){var n=[],r=[];return Array.isArray(t)?r=t.map(function(i){return $n(i)}):r=[$n(t)],m0(e).forEach(function(i){var a=Gt(i,"type.displayName")||Gt(i,"type.name");r.indexOf(a)!==-1&&n.push(i)}),n}function Ct(e,t){var n=cn(e,t);return n&&n[0]}var z7=function(t){if(!t||!t.props)return!1;var n=t.props,r=n.width,i=n.height;return!(!G(r)||r<=0||!G(i)||i<=0)},RS=["a","altGlyph","altGlyphDef","altGlyphItem","animate","animateColor","animateMotion","animateTransform","circle","clipPath","color-profile","cursor","defs","desc","ellipse","feBlend","feColormatrix","feComponentTransfer","feComposite","feConvolveMatrix","feDiffuseLighting","feDisplacementMap","feDistantLight","feFlood","feFuncA","feFuncB","feFuncG","feFuncR","feGaussianBlur","feImage","feMerge","feMergeNode","feMorphology","feOffset","fePointLight","feSpecularLighting","feSpotLight","feTile","feTurbulence","filter","font","font-face","font-face-format","font-face-name","font-face-url","foreignObject","g","glyph","glyphRef","hkern","image","line","lineGradient","marker","mask","metadata","missing-glyph","mpath","path","pattern","polygon","polyline","radialGradient","rect","script","set","stop","style","svg","switch","symbol","text","textPath","title","tref","tspan","use","view","vkern"],BS=function(t){return t&&t.type&&Qr(t.type)&&RS.indexOf(t.type)>=0},WS=function(t,n,r,i){var a,l=(a=xd==null?void 0:xd[i])!==null&&a!==void 0?a:[];return n.startsWith("data-")||!re(t)&&(i&&l.includes(n)||zS.includes(n))||r&&h0.includes(n)},ue=function(t,n,r){if(!t||typeof t=="function"||typeof t=="boolean")return null;var i=t;if(N.isValidElement(t)&&(i=t.props),!va(i))return null;var a={};return Object.keys(i).forEach(function(l){var o;WS((o=i)===null||o===void 0?void 0:o[l],l,n,r)&&(a[l]=i[l])}),a},Wf=function e(t,n){if(t===n)return!0;var r=N.Children.count(t);if(r!==N.Children.count(n))return!1;if(r===0)return!0;if(r===1)return I7(Array.isArray(t)?t[0]:t,Array.isArray(n)?n[0]:n);for(var i=0;i<r;i++){var a=t[i],l=n[i];if(Array.isArray(a)||Array.isArray(l)){if(!e(a,l))return!1}else if(!I7(a,l))return!1}return!0},I7=function(t,n){if(fe(t)&&fe(n))return!0;if(!fe(t)&&!fe(n)){var r=t.props||{},i=r.children,a=M7(r,DS),l=n.props||{},o=l.children,s=M7(l,LS);return i&&o?Ii(a,s)&&Wf(i,o):!i&&!o?Ii(a,s):!1}return!1},D7=function(t,n){var r=[],i={};return m0(t).forEach(function(a,l){if(BS(a))r.push(a);else if(a){var o=$n(a.type),s=n[o]||{},u=s.handler,f=s.once;if(u&&(!f||!i[o])){var d=u(a,o,l);r.push(d),i[o]=!0}}}),r},US=function(t){var n=t&&t.type;return n&&T7[n]?T7[n]:null},HS=function(t,n){return m0(n).indexOf(t)},GS=["children","width","height","viewBox","className","style","title","desc"];function Uf(){return Uf=Object.assign?Object.assign.bind():function(e){for(var t=1;t<arguments.length;t++){var n=arguments[t];for(var r in n)Object.prototype.hasOwnProperty.call(n,r)&&(e[r]=n[r])}return e},Uf.apply(this,arguments)}function VS(e,t){if(e==null)return{};var n=XS(e,t),r,i;if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);for(i=0;i<a.length;i++)r=a[i],!(t.indexOf(r)>=0)&&Object.prototype.propertyIsEnumerable.call(e,r)&&(n[r]=e[r])}return n}function XS(e,t){if(e==null)return{};var n={};for(var r in e)if(Object.prototype.hasOwnProperty.call(e,r)){if(t.indexOf(r)>=0)continue;n[r]=e[r]}return n}function Hf(e){var t=e.children,n=e.width,r=e.height,i=e.viewBox,a=e.className,l=e.style,o=e.title,s=e.desc,u=VS(e,GS),f=i||{width:n,height:r,x:0,y:0},d=de("recharts-surface",a);return z.createElement("svg",Uf({},ue(u,!0,"svg"),{className:d,width:n,height:r,style:l,viewBox:"".concat(f.x," ").concat(f.y," ").concat(f.width," ").concat(f.height)}),z.createElement("title",null,o),z.createElement("desc",null,s),t)}var qS=["children","className"];function Gf(){return Gf=Object.assign?Object.assign.bind():function(e){for(var t=1;t<arguments.length;t++){var n=arguments[t];for(var r in n)Object.prototype.hasOwnProperty.call(n,r)&&(e[r]=n[r])}return e},Gf.apply(this,arguments)}function KS(e,t){if(e==null)return{};var n=YS(e,t),r,i;if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);for(i=0;i<a.length;i++)r=a[i],!(t.indexOf(r)>=0)&&Object.prototype.propertyIsEnumerable.call(e,r)&&(n[r]=e[r])}return n}function YS(e,t){if(e==null)return{};var n={};for(var r in e)if(Object.prototype.hasOwnProperty.call(e,r)){if(t.indexOf(r)>=0)continue;n[r]=e[r]}return n}var et=z.forwardRef(function(e,t){var n=e.children,r=e.className,i=KS(e,qS),a=de("recharts-layer",r);return z.createElement("g",Gf({className:a},ue(i,!0),{ref:t}),n)}),zn=function(t,n){for(var r=arguments.length,i=new Array(r>2?r-2:0),a=2;a<r;a++)i[a-2]=arguments[a]};function ZS(e,t,n){var r=-1,i=e.length;t<0&&(t=-t>i?0:i+t),n=n>i?i:n,n<0&&(n+=i),i=t>n?0:n-t>>>0,t>>>=0;for(var a=Array(i);++r<i;)a[r]=e[r+t];return a}var QS=ZS,JS=QS;function e_(e,t,n){var r=e.length;return n=n===void 0?r:n,!t&&n>=r?e:JS(e,t,n)}var t_=e_,n_="\\ud800-\\udfff",r_="\\u0300-\\u036f",i_="\\ufe20-\\ufe2f",a_="\\u20d0-\\u20ff",l_=r_+i_+a_,o_="\\ufe0e\\ufe0f",s_="\\u200d",c_=RegExp("["+s_+n_+l_+o_+"]");function u_(e){return c_.test(e)}var Rv=u_;function d_(e){return e.split("")}var f_=d_,Bv="\\ud800-\\udfff",p_="\\u0300-\\u036f",h_="\\ufe20-\\ufe2f",m_="\\u20d0-\\u20ff",y_=p_+h_+m_,v_="\\ufe0e\\ufe0f",g_="["+Bv+"]",Vf="["+y_+"]",Xf="\\ud83c[\\udffb-\\udfff]",x_="(?:"+Vf+"|"+Xf+")",Wv="[^"+Bv+"]",Uv="(?:\\ud83c[\\udde6-\\uddff]){2}",Hv="[\\ud800-\\udbff][\\udc00-\\udfff]",b_="\\u200d",Gv=x_+"?",Vv="["+v_+"]?",w_="(?:"+b_+"(?:"+[Wv,Uv,Hv].join("|")+")"+Vv+Gv+")*",k_=Vv+Gv+w_,S_="(?:"+[Wv+Vf+"?",Vf,Uv,Hv,g_].join("|")+")",__=RegExp(Xf+"(?="+Xf+")|"+S_+k_,"g");function j_(e){return e.match(__)||[]}var O_=j_,P_=f_,A_=Rv,N_=O_;function C_(e){return A_(e)?N_(e):P_(e)}var E_=C_,M_=t_,T_=Rv,$_=E_,z_=$v;function I_(e){return function(t){t=z_(t);var n=T_(t)?$_(t):void 0,r=n?n[0]:t.charAt(0),i=n?M_(n,1).join(""):t.slice(1);return r[e]()+i}}var D_=I_,L_=D_,F_=L_("toUpperCase"),R_=F_;const vu=ke(R_);function _e(e){return function(){return e}}const Xv=Math.cos,Us=Math.sin,dn=Math.sqrt,Hs=Math.PI,gu=2*Hs,qf=Math.PI,Kf=2*qf,Mr=1e-6,B_=Kf-Mr;function qv(e){this._+=e[0];for(let t=1,n=e.length;t<n;++t)this._+=arguments[t]+e[t]}function W_(e){let t=Math.floor(e);if(!(t>=0))throw new Error(`invalid digits: ${e}`);if(t>15)return qv;const n=10**t;return function(r){this._+=r[0];for(let i=1,a=r.length;i<a;++i)this._+=Math.round(arguments[i]*n)/n+r[i]}}class U_{constructor(t){this._x0=this._y0=this._x1=this._y1=null,this._="",this._append=t==null?qv:W_(t)}moveTo(t,n){this._append`M${this._x0=this._x1=+t},${this._y0=this._y1=+n}`}closePath(){this._x1!==null&&(this._x1=this._x0,this._y1=this._y0,this._append`Z`)}lineTo(t,n){this._append`L${this._x1=+t},${this._y1=+n}`}quadraticCurveTo(t,n,r,i){this._append`Q${+t},${+n},${this._x1=+r},${this._y1=+i}`}bezierCurveTo(t,n,r,i,a,l){this._append`C${+t},${+n},${+r},${+i},${this._x1=+a},${this._y1=+l}`}arcTo(t,n,r,i,a){if(t=+t,n=+n,r=+r,i=+i,a=+a,a<0)throw new Error(`negative radius: ${a}`);let l=this._x1,o=this._y1,s=r-t,u=i-n,f=l-t,d=o-n,p=f*f+d*d;if(this._x1===null)this._append`M${this._x1=t},${this._y1=n}`;else if(p>Mr)if(!(Math.abs(d*s-u*f)>Mr)||!a)this._append`L${this._x1=t},${this._y1=n}`;else{let h=r-l,b=i-o,v=s*s+u*u,w=h*h+b*b,y=Math.sqrt(v),m=Math.sqrt(p),g=a*Math.tan((qf-Math.acos((v+p-w)/(2*y*m)))/2),S=g/m,x=g/y;Math.abs(S-1)>Mr&&this._append`L${t+S*f},${n+S*d}`,this._append`A${a},${a},0,0,${+(d*h>f*b)},${this._x1=t+x*s},${this._y1=n+x*u}`}}arc(t,n,r,i,a,l){if(t=+t,n=+n,r=+r,l=!!l,r<0)throw new Error(`negative radius: ${r}`);let o=r*Math.cos(i),s=r*Math.sin(i),u=t+o,f=n+s,d=1^l,p=l?i-a:a-i;this._x1===null?this._append`M${u},${f}`:(Math.abs(this._x1-u)>Mr||Math.abs(this._y1-f)>Mr)&&this._append`L${u},${f}`,r&&(p<0&&(p=p%Kf+Kf),p>B_?this._append`A${r},${r},0,1,${d},${t-o},${n-s}A${r},${r},0,1,${d},${this._x1=u},${this._y1=f}`:p>Mr&&this._append`A${r},${r},0,${+(p>=qf)},${d},${this._x1=t+r*Math.cos(a)},${this._y1=n+r*Math.sin(a)}`)}rect(t,n,r,i){this._append`M${this._x0=this._x1=+t},${this._y0=this._y1=+n}h${r=+r}v${+i}h${-r}Z`}toString(){return this._}}function y0(e){let t=3;return e.digits=function(n){if(!arguments.length)return t;if(n==null)t=null;else{const r=Math.floor(n);if(!(r>=0))throw new RangeError(`invalid digits: ${n}`);t=r}return e},()=>new U_(t)}function v0(e){return typeof e=="object"&&"length"in e?e:Array.from(e)}function Kv(e){this._context=e}Kv.prototype={areaStart:function(){this._line=0},areaEnd:function(){this._line=NaN},lineStart:function(){this._point=0},lineEnd:function(){(this._line||this._line!==0&&this._point===1)&&this._context.closePath(),this._line=1-this._line},point:function(e,t){switch(e=+e,t=+t,this._point){case 0:this._point=1,this._line?this._context.lineTo(e,t):this._context.moveTo(e,t);break;case 1:this._point=2;default:this._context.lineTo(e,t);break}}};function xu(e){return new Kv(e)}function Yv(e){return e[0]}function Zv(e){return e[1]}function Qv(e,t){var n=_e(!0),r=null,i=xu,a=null,l=y0(o);e=typeof e=="function"?e:e===void 0?Yv:_e(e),t=typeof t=="function"?t:t===void 0?Zv:_e(t);function o(s){var u,f=(s=v0(s)).length,d,p=!1,h;for(r==null&&(a=i(h=l())),u=0;u<=f;++u)!(u<f&&n(d=s[u],u,s))===p&&((p=!p)?a.lineStart():a.lineEnd()),p&&a.point(+e(d,u,s),+t(d,u,s));if(h)return a=null,h+""||null}return o.x=function(s){return arguments.length?(e=typeof s=="function"?s:_e(+s),o):e},o.y=function(s){return arguments.length?(t=typeof s=="function"?s:_e(+s),o):t},o.defined=function(s){return arguments.length?(n=typeof s=="function"?s:_e(!!s),o):n},o.curve=function(s){return arguments.length?(i=s,r!=null&&(a=i(r)),o):i},o.context=function(s){return arguments.length?(s==null?r=a=null:a=i(r=s),o):r},o}function Ho(e,t,n){var r=null,i=_e(!0),a=null,l=xu,o=null,s=y0(u);e=typeof e=="function"?e:e===void 0?Yv:_e(+e),t=typeof t=="function"?t:_e(t===void 0?0:+t),n=typeof n=="function"?n:n===void 0?Zv:_e(+n);function u(d){var p,h,b,v=(d=v0(d)).length,w,y=!1,m,g=new Array(v),S=new Array(v);for(a==null&&(o=l(m=s())),p=0;p<=v;++p){if(!(p<v&&i(w=d[p],p,d))===y)if(y=!y)h=p,o.areaStart(),o.lineStart();else{for(o.lineEnd(),o.lineStart(),b=p-1;b>=h;--b)o.point(g[b],S[b]);o.lineEnd(),o.areaEnd()}y&&(g[p]=+e(w,p,d),S[p]=+t(w,p,d),o.point(r?+r(w,p,d):g[p],n?+n(w,p,d):S[p]))}if(m)return o=null,m+""||null}function f(){return Qv().defined(i).curve(l).context(a)}return u.x=function(d){return arguments.length?(e=typeof d=="function"?d:_e(+d),r=null,u):e},u.x0=function(d){return arguments.length?(e=typeof d=="function"?d:_e(+d),u):e},u.x1=function(d){return arguments.length?(r=d==null?null:typeof d=="function"?d:_e(+d),u):r},u.y=function(d){return arguments.length?(t=typeof d=="function"?d:_e(+d),n=null,u):t},u.y0=function(d){return arguments.length?(t=typeof d=="function"?d:_e(+d),u):t},u.y1=function(d){return arguments.length?(n=d==null?null:typeof d=="function"?d:_e(+d),u):n},u.lineX0=u.lineY0=function(){return f().x(e).y(t)},u.lineY1=function(){return f().x(e).y(n)},u.lineX1=function(){return f().x(r).y(t)},u.defined=function(d){return arguments.length?(i=typeof d=="function"?d:_e(!!d),u):i},u.curve=function(d){return arguments.length?(l=d,a!=null&&(o=l(a)),u):l},u.context=function(d){return arguments.length?(d==null?a=o=null:o=l(a=d),u):a},u}class Jv{constructor(t,n){this._context=t,this._x=n}areaStart(){this._line=0}areaEnd(){this._line=NaN}lineStart(){this._point=0}lineEnd(){(this._line||this._line!==0&&this._point===1)&&this._context.closePath(),this._line=1-this._line}point(t,n){switch(t=+t,n=+n,this._point){case 0:{this._point=1,this._line?this._context.lineTo(t,n):this._context.moveTo(t,n);break}case 1:this._point=2;default:{this._x?this._context.bezierCurveTo(this._x0=(this._x0+t)/2,this._y0,this._x0,n,t,n):this._context.bezierCurveTo(this._x0,this._y0=(this._y0+n)/2,t,this._y0,t,n);break}}this._x0=t,this._y0=n}}function H_(e){return new Jv(e,!0)}function G_(e){return new Jv(e,!1)}const g0={draw(e,t){const n=dn(t/Hs);e.moveTo(n,0),e.arc(0,0,n,0,gu)}},V_={draw(e,t){const n=dn(t/5)/2;e.moveTo(-3*n,-n),e.lineTo(-n,-n),e.lineTo(-n,-3*n),e.lineTo(n,-3*n),e.lineTo(n,-n),e.lineTo(3*n,-n),e.lineTo(3*n,n),e.lineTo(n,n),e.lineTo(n,3*n),e.lineTo(-n,3*n),e.lineTo(-n,n),e.lineTo(-3*n,n),e.closePath()}},e6=dn(1/3),X_=e6*2,q_={draw(e,t){const n=dn(t/X_),r=n*e6;e.moveTo(0,-n),e.lineTo(r,0),e.lineTo(0,n),e.lineTo(-r,0),e.closePath()}},K_={draw(e,t){const n=dn(t),r=-n/2;e.rect(r,r,n,n)}},Y_=.8908130915292852,t6=Us(Hs/10)/Us(7*Hs/10),Z_=Us(gu/10)*t6,Q_=-Xv(gu/10)*t6,J_={draw(e,t){const n=dn(t*Y_),r=Z_*n,i=Q_*n;e.moveTo(0,-n),e.lineTo(r,i);for(let a=1;a<5;++a){const l=gu*a/5,o=Xv(l),s=Us(l);e.lineTo(s*n,-o*n),e.lineTo(o*r-s*i,s*r+o*i)}e.closePath()}},wd=dn(3),ej={draw(e,t){const n=-dn(t/(wd*3));e.moveTo(0,n*2),e.lineTo(-wd*n,-n),e.lineTo(wd*n,-n),e.closePath()}},Dt=-.5,Lt=dn(3)/2,Yf=1/dn(12),tj=(Yf/2+1)*3,nj={draw(e,t){const n=dn(t/tj),r=n/2,i=n*Yf,a=r,l=n*Yf+n,o=-a,s=l;e.moveTo(r,i),e.lineTo(a,l),e.lineTo(o,s),e.lineTo(Dt*r-Lt*i,Lt*r+Dt*i),e.lineTo(Dt*a-Lt*l,Lt*a+Dt*l),e.lineTo(Dt*o-Lt*s,Lt*o+Dt*s),e.lineTo(Dt*r+Lt*i,Dt*i-Lt*r),e.lineTo(Dt*a+Lt*l,Dt*l-Lt*a),e.lineTo(Dt*o+Lt*s,Dt*s-Lt*o),e.closePath()}};function rj(e,t){let n=null,r=y0(i);e=typeof e=="function"?e:_e(e||g0),t=typeof t=="function"?t:_e(t===void 0?64:+t);function i(){let a;if(n||(n=a=r()),e.apply(this,arguments).draw(n,+t.apply(this,arguments)),a)return n=null,a+""||null}return i.type=function(a){return arguments.length?(e=typeof a=="function"?a:_e(a),i):e},i.size=function(a){return arguments.length?(t=typeof a=="function"?a:_e(+a),i):t},i.context=function(a){return arguments.length?(n=a??null,i):n},i}function Gs(){}function Vs(e,t,n){e._context.bezierCurveTo((2*e._x0+e._x1)/3,(2*e._y0+e._y1)/3,(e._x0+2*e._x1)/3,(e._y0+2*e._y1)/3,(e._x0+4*e._x1+t)/6,(e._y0+4*e._y1+n)/6)}function n6(e){this._context=e}n6.prototype={areaStart:function(){this._line=0},areaEnd:function(){this._line=NaN},lineStart:function(){this._x0=this._x1=this._y0=this._y1=NaN,this._point=0},lineEnd:function(){switch(this._point){case 3:Vs(this,this._x1,this._y1);case 2:this._context.lineTo(this._x1,this._y1);break}(this._line||this._line!==0&&this._point===1)&&this._context.closePath(),this._line=1-this._line},point:function(e,t){switch(e=+e,t=+t,this._point){case 0:this._point=1,this._line?this._context.lineTo(e,t):this._context.moveTo(e,t);break;case 1:this._point=2;break;case 2:this._point=3,this._context.lineTo((5*this._x0+this._x1)/6,(5*this._y0+this._y1)/6);default:Vs(this,e,t);break}this._x0=this._x1,this._x1=e,this._y0=this._y1,this._y1=t}};function ij(e){return new n6(e)}function r6(e){this._context=e}r6.prototype={areaStart:Gs,areaEnd:Gs,lineStart:function(){this._x0=this._x1=this._x2=this._x3=this._x4=this._y0=this._y1=this._y2=this._y3=this._y4=NaN,this._point=0},lineEnd:function(){switch(this._point){case 1:{this._context.moveTo(this._x2,this._y2),this._context.closePath();break}case 2:{this._context.moveTo((this._x2+2*this._x3)/3,(this._y2+2*this._y3)/3),this._context.lineTo((this._x3+2*this._x2)/3,(this._y3+2*this._y2)/3),this._context.closePath();break}case 3:{this.point(this._x2,this._y2),this.point(this._x3,this._y3),this.point(this._x4,this._y4);break}}},point:function(e,t){switch(e=+e,t=+t,this._point){case 0:this._point=1,this._x2=e,this._y2=t;break;case 1:this._point=2,this._x3=e,this._y3=t;break;case 2:this._point=3,this._x4=e,this._y4=t,this._context.moveTo((this._x0+4*this._x1+e)/6,(this._y0+4*this._y1+t)/6);break;default:Vs(this,e,t);break}this._x0=this._x1,this._x1=e,this._y0=this._y1,this._y1=t}};function aj(e){return new r6(e)}function i6(e){this._context=e}i6.prototype={areaStart:function(){this._line=0},areaEnd:function(){this._line=NaN},lineStart:function(){this._x0=this._x1=this._y0=this._y1=NaN,this._point=0},lineEnd:function(){(this._line||this._line!==0&&this._point===3)&&this._context.closePath(),this._line=1-this._line},point:function(e,t){switch(e=+e,t=+t,this._point){case 0:this._point=1;break;case 1:this._point=2;break;case 2:this._point=3;var n=(this._x0+4*this._x1+e)/6,r=(this._y0+4*this._y1+t)/6;this._line?this._context.lineTo(n,r):this._context.moveTo(n,r);break;case 3:this._point=4;default:Vs(this,e,t);break}this._x0=this._x1,this._x1=e,this._y0=this._y1,this._y1=t}};function lj(e){return new i6(e)}function a6(e){this._context=e}a6.prototype={areaStart:Gs,areaEnd:Gs,lineStart:function(){this._point=0},lineEnd:function(){this._point&&this._context.closePath()},point:function(e,t){e=+e,t=+t,this._point?this._context.lineTo(e,t):(this._point=1,this._context.moveTo(e,t))}};function oj(e){return new a6(e)}function L7(e){return e<0?-1:1}function F7(e,t,n){var r=e._x1-e._x0,i=t-e._x1,a=(e._y1-e._y0)/(r||i<0&&-0),l=(n-e._y1)/(i||r<0&&-0),o=(a*i+l*r)/(r+i);return(L7(a)+L7(l))*Math.min(Math.abs(a),Math.abs(l),.5*Math.abs(o))||0}function R7(e,t){var n=e._x1-e._x0;return n?(3*(e._y1-e._y0)/n-t)/2:t}function kd(e,t,n){var r=e._x0,i=e._y0,a=e._x1,l=e._y1,o=(a-r)/3;e._context.bezierCurveTo(r+o,i+o*t,a-o,l-o*n,a,l)}function Xs(e){this._context=e}Xs.prototype={areaStart:function(){this._line=0},areaEnd:function(){this._line=NaN},lineStart:function(){this._x0=this._x1=this._y0=this._y1=this._t0=NaN,this._point=0},lineEnd:function(){switch(this._point){case 2:this._context.lineTo(this._x1,this._y1);break;case 3:kd(this,this._t0,R7(this,this._t0));break}(this._line||this._line!==0&&this._point===1)&&this._context.closePath(),this._line=1-this._line},point:function(e,t){var n=NaN;if(e=+e,t=+t,!(e===this._x1&&t===this._y1)){switch(this._point){case 0:this._point=1,this._line?this._context.lineTo(e,t):this._context.moveTo(e,t);break;case 1:this._point=2;break;case 2:this._point=3,kd(this,R7(this,n=F7(this,e,t)),n);break;default:kd(this,this._t0,n=F7(this,e,t));break}this._x0=this._x1,this._x1=e,this._y0=this._y1,this._y1=t,this._t0=n}}};function l6(e){this._context=new o6(e)}(l6.prototype=Object.create(Xs.prototype)).point=function(e,t){Xs.prototype.point.call(this,t,e)};function o6(e){this._context=e}o6.prototype={moveTo:function(e,t){this._context.moveTo(t,e)},closePath:function(){this._context.closePath()},lineTo:function(e,t){this._context.lineTo(t,e)},bezierCurveTo:function(e,t,n,r,i,a){this._context.bezierCurveTo(t,e,r,n,a,i)}};function sj(e){return new Xs(e)}function cj(e){return new l6(e)}function s6(e){this._context=e}s6.prototype={areaStart:function(){this._line=0},areaEnd:function(){this._line=NaN},lineStart:function(){this._x=[],this._y=[]},lineEnd:function(){var e=this._x,t=this._y,n=e.length;if(n)if(this._line?this._context.lineTo(e[0],t[0]):this._context.moveTo(e[0],t[0]),n===2)this._context.lineTo(e[1],t[1]);else for(var r=B7(e),i=B7(t),a=0,l=1;l<n;++a,++l)this._context.bezierCurveTo(r[0][a],i[0][a],r[1][a],i[1][a],e[l],t[l]);(this._line||this._line!==0&&n===1)&&this._context.closePath(),this._line=1-this._line,this._x=this._y=null},point:function(e,t){this._x.push(+e),this._y.push(+t)}};function B7(e){var t,n=e.length-1,r,i=new Array(n),a=new Array(n),l=new Array(n);for(i[0]=0,a[0]=2,l[0]=e[0]+2*e[1],t=1;t<n-1;++t)i[t]=1,a[t]=4,l[t]=4*e[t]+2*e[t+1];for(i[n-1]=2,a[n-1]=7,l[n-1]=8*e[n-1]+e[n],t=1;t<n;++t)r=i[t]/a[t-1],a[t]-=r,l[t]-=r*l[t-1];for(i[n-1]=l[n-1]/a[n-1],t=n-2;t>=0;--t)i[t]=(l[t]-i[t+1])/a[t];for(a[n-1]=(e[n]+i[n-1])/2,t=0;t<n-1;++t)a[t]=2*e[t+1]-i[t+1];return[i,a]}function uj(e){return new s6(e)}function bu(e,t){this._context=e,this._t=t}bu.prototype={areaStart:function(){this._line=0},areaEnd:function(){this._line=NaN},lineStart:function(){this._x=this._y=NaN,this._point=0},lineEnd:function(){0<this._t&&this._t<1&&this._point===2&&this._context.lineTo(this._x,this._y),(this._line||this._line!==0&&this._point===1)&&this._context.closePath(),this._line>=0&&(this._t=1-this._t,this._line=1-this._line)},point:function(e,t){switch(e=+e,t=+t,this._point){case 0:this._point=1,this._line?this._context.lineTo(e,t):this._context.moveTo(e,t);break;case 1:this._point=2;default:{if(this._t<=0)this._context.lineTo(this._x,t),this._context.lineTo(e,t);else{var n=this._x*(1-this._t)+e*this._t;this._context.lineTo(n,this._y),this._context.lineTo(n,t)}break}}this._x=e,this._y=t}};function dj(e){return new bu(e,.5)}function fj(e){return new bu(e,0)}function pj(e){return new bu(e,1)}function Vi(e,t){if((l=e.length)>1)for(var n=1,r,i,a=e[t[0]],l,o=a.length;n<l;++n)for(i=a,a=e[t[n]],r=0;r<o;++r)a[r][1]+=a[r][0]=isNaN(i[r][1])?i[r][0]:i[r][1]}function Zf(e){for(var t=e.length,n=new Array(t);--t>=0;)n[t]=t;return n}function hj(e,t){return e[t]}function mj(e){const t=[];return t.key=e,t}function yj(){var e=_e([]),t=Zf,n=Vi,r=hj;function i(a){var l=Array.from(e.apply(this,arguments),mj),o,s=l.length,u=-1,f;for(const d of a)for(o=0,++u;o<s;++o)(l[o][u]=[0,+r(d,l[o].key,u,a)]).data=d;for(o=0,f=v0(t(l));o<s;++o)l[f[o]].index=o;return n(l,f),l}return i.keys=function(a){return arguments.length?(e=typeof a=="function"?a:_e(Array.from(a)),i):e},i.value=function(a){return arguments.length?(r=typeof a=="function"?a:_e(+a),i):r},i.order=function(a){return arguments.length?(t=a==null?Zf:typeof a=="function"?a:_e(Array.from(a)),i):t},i.offset=function(a){return arguments.length?(n=a??Vi,i):n},i}function vj(e,t){if((r=e.length)>0){for(var n,r,i=0,a=e[0].length,l;i<a;++i){for(l=n=0;n<r;++n)l+=e[n][i][1]||0;if(l)for(n=0;n<r;++n)e[n][i][1]/=l}Vi(e,t)}}function gj(e,t){if((i=e.length)>0){for(var n=0,r=e[t[0]],i,a=r.length;n<a;++n){for(var l=0,o=0;l<i;++l)o+=e[l][n][1]||0;r[n][1]+=r[n][0]=-o/2}Vi(e,t)}}function xj(e,t){if(!(!((l=e.length)>0)||!((a=(i=e[t[0]]).length)>0))){for(var n=0,r=1,i,a,l;r<a;++r){for(var o=0,s=0,u=0;o<l;++o){for(var f=e[t[o]],d=f[r][1]||0,p=f[r-1][1]||0,h=(d-p)/2,b=0;b<o;++b){var v=e[t[b]],w=v[r][1]||0,y=v[r-1][1]||0;h+=w-y}s+=d,u+=h*d}i[r-1][1]+=i[r-1][0]=n,s&&(n-=u/s)}i[r-1][1]+=i[r-1][0]=n,Vi(e,t)}}function Pl(e){"@babel/helpers - typeof";return Pl=typeof Symbol=="function"&&typeof Symbol.iterator=="symbol"?function(t){return typeof t}:function(t){return t&&typeof Symbol=="function"&&t.constructor===Symbol&&t!==Symbol.prototype?"symbol":typeof t},Pl(e)}var bj=["type","size","sizeType"];function Qf(){return Qf=Object.assign?Object.assign.bind():function(e){for(var t=1;t<arguments.length;t++){var n=arguments[t];for(var r in n)Object.prototype.hasOwnProperty.call(n,r)&&(e[r]=n[r])}return e},Qf.apply(this,arguments)}function W7(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter(function(i){return Object.getOwnPropertyDescriptor(e,i).enumerable})),n.push.apply(n,r)}return n}function U7(e){for(var t=1;t<arguments.length;t++){var n=arguments[t]!=null?arguments[t]:{};t%2?W7(Object(n),!0).forEach(function(r){wj(e,r,n[r])}):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):W7(Object(n)).forEach(function(r){Object.defineProperty(e,r,Object.getOwnPropertyDescriptor(n,r))})}return e}function wj(e,t,n){return t=kj(t),t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function kj(e){var t=Sj(e,"string");return Pl(t)=="symbol"?t:t+""}function Sj(e,t){if(Pl(e)!="object"||!e)return e;var n=e[Symbol.toPrimitive];if(n!==void 0){var r=n.call(e,t);if(Pl(r)!="object")return r;throw new TypeError("@@toPrimitive must return a primitive value.")}return(t==="string"?String:Number)(e)}function _j(e,t){if(e==null)return{};var n=jj(e,t),r,i;if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);for(i=0;i<a.length;i++)r=a[i],!(t.indexOf(r)>=0)&&Object.prototype.propertyIsEnumerable.call(e,r)&&(n[r]=e[r])}return n}function jj(e,t){if(e==null)return{};var n={};for(var r in e)if(Object.prototype.hasOwnProperty.call(e,r)){if(t.indexOf(r)>=0)continue;n[r]=e[r]}return n}var c6={symbolCircle:g0,symbolCross:V_,symbolDiamond:q_,symbolSquare:K_,symbolStar:J_,symbolTriangle:ej,symbolWye:nj},Oj=Math.PI/180,Pj=function(t){var n="symbol".concat(vu(t));return c6[n]||g0},Aj=function(t,n,r){if(n==="area")return t;switch(r){case"cross":return 5*t*t/9;case"diamond":return .5*t*t/Math.sqrt(3);case"square":return t*t;case"star":{var i=18*Oj;return 1.25*t*t*(Math.tan(i)-Math.tan(i*2)*Math.pow(Math.tan(i),2))}case"triangle":return Math.sqrt(3)*t*t/4;case"wye":return(21-10*Math.sqrt(3))*t*t/8;default:return Math.PI*t*t/4}},Nj=function(t,n){c6["symbol".concat(vu(t))]=n},x0=function(t){var n=t.type,r=n===void 0?"circle":n,i=t.size,a=i===void 0?64:i,l=t.sizeType,o=l===void 0?"area":l,s=_j(t,bj),u=U7(U7({},s),{},{type:r,size:a,sizeType:o}),f=function(){var w=Pj(r),y=rj().type(w).size(Aj(a,o,r));return y()},d=u.className,p=u.cx,h=u.cy,b=ue(u,!0);return p===+p&&h===+h&&a===+a?z.createElement("path",Qf({},b,{className:de("recharts-symbols",d),transform:"translate(".concat(p,", ").concat(h,")"),d:f()})):null};x0.registerSymbol=Nj;function Xi(e){"@babel/helpers - typeof";return Xi=typeof Symbol=="function"&&typeof Symbol.iterator=="symbol"?function(t){return typeof t}:function(t){return t&&typeof Symbol=="function"&&t.constructor===Symbol&&t!==Symbol.prototype?"symbol":typeof t},Xi(e)}function Jf(){return Jf=Object.assign?Object.assign.bind():function(e){for(var t=1;t<arguments.length;t++){var n=arguments[t];for(var r in n)Object.prototype.hasOwnProperty.call(n,r)&&(e[r]=n[r])}return e},Jf.apply(this,arguments)}function H7(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter(function(i){return Object.getOwnPropertyDescriptor(e,i).enumerable})),n.push.apply(n,r)}return n}function Cj(e){for(var t=1;t<arguments.length;t++){var n=arguments[t]!=null?arguments[t]:{};t%2?H7(Object(n),!0).forEach(function(r){Al(e,r,n[r])}):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):H7(Object(n)).forEach(function(r){Object.defineProperty(e,r,Object.getOwnPropertyDescriptor(n,r))})}return e}function Ej(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}function Mj(e,t){for(var n=0;n<t.length;n++){var r=t[n];r.enumerable=r.enumerable||!1,r.configurable=!0,"value"in r&&(r.writable=!0),Object.defineProperty(e,d6(r.key),r)}}function Tj(e,t,n){return t&&Mj(e.prototype,t),Object.defineProperty(e,"prototype",{writable:!1}),e}function $j(e,t,n){return t=qs(t),zj(e,u6()?Reflect.construct(t,n||[],qs(e).constructor):t.apply(e,n))}function zj(e,t){if(t&&(Xi(t)==="object"||typeof t=="function"))return t;if(t!==void 0)throw new TypeError("Derived constructors may only return object or undefined");return Ij(e)}function Ij(e){if(e===void 0)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return e}function u6(){try{var e=!Boolean.prototype.valueOf.call(Reflect.construct(Boolean,[],function(){}))}catch{}return(u6=function(){return!!e})()}function qs(e){return qs=Object.setPrototypeOf?Object.getPrototypeOf.bind():function(n){return n.__proto__||Object.getPrototypeOf(n)},qs(e)}function Dj(e,t){if(typeof t!="function"&&t!==null)throw new TypeError("Super expression must either be null or a function");e.prototype=Object.create(t&&t.prototype,{constructor:{value:e,writable:!0,configurable:!0}}),Object.defineProperty(e,"prototype",{writable:!1}),t&&e1(e,t)}function e1(e,t){return e1=Object.setPrototypeOf?Object.setPrototypeOf.bind():function(r,i){return r.__proto__=i,r},e1(e,t)}function Al(e,t,n){return t=d6(t),t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function d6(e){var t=Lj(e,"string");return Xi(t)=="symbol"?t:t+""}function Lj(e,t){if(Xi(e)!="object"||!e)return e;var n=e[Symbol.toPrimitive];if(n!==void 0){var r=n.call(e,t);if(Xi(r)!="object")return r;throw new TypeError("@@toPrimitive must return a primitive value.")}return String(e)}var Ft=32,b0=function(e){function t(){return Ej(this,t),$j(this,t,arguments)}return Dj(t,e),Tj(t,[{key:"renderIcon",value:function(r){var i=this.props.inactiveColor,a=Ft/2,l=Ft/6,o=Ft/3,s=r.inactive?i:r.color;if(r.type==="plainline")return z.createElement("line",{strokeWidth:4,fill:"none",stroke:s,strokeDasharray:r.payload.strokeDasharray,x1:0,y1:a,x2:Ft,y2:a,className:"recharts-legend-icon"});if(r.type==="line")return z.createElement("path",{strokeWidth:4,fill:"none",stroke:s,d:"M0,".concat(a,"h").concat(o,`
            A`).concat(l,",").concat(l,",0,1,1,").concat(2*o,",").concat(a,`
            H`).concat(Ft,"M").concat(2*o,",").concat(a,`
            A`).concat(l,",").concat(l,",0,1,1,").concat(o,",").concat(a),className:"recharts-legend-icon"});if(r.type==="rect")return z.createElement("path",{stroke:"none",fill:s,d:"M0,".concat(Ft/8,"h").concat(Ft,"v").concat(Ft*3/4,"h").concat(-Ft,"z"),className:"recharts-legend-icon"});if(z.isValidElement(r.legendIcon)){var u=Cj({},r);return delete u.legendIcon,z.cloneElement(r.legendIcon,u)}return z.createElement(x0,{fill:s,cx:a,cy:a,size:Ft,sizeType:"diameter",type:r.type})}},{key:"renderItems",value:function(){var r=this,i=this.props,a=i.payload,l=i.iconSize,o=i.layout,s=i.formatter,u=i.inactiveColor,f={x:0,y:0,width:Ft,height:Ft},d={display:o==="horizontal"?"inline-block":"block",marginRight:10},p={display:"inline-block",verticalAlign:"middle",marginRight:4};return a.map(function(h,b){var v=h.formatter||s,w=de(Al(Al({"recharts-legend-item":!0},"legend-item-".concat(b),!0),"inactive",h.inactive));if(h.type==="none")return null;var y=re(h.value)?null:h.value;zn(!re(h.value),`The name property is also required when using a function for the dataKey of a chart's cartesian components. Ex: <Bar name="Name of my Data"/>`);var m=h.inactive?u:h.color;return z.createElement("li",Jf({className:w,style:d,key:"legend-item-".concat(b)},Ws(r.props,h,b)),z.createElement(Hf,{width:l,height:l,viewBox:f,style:p},r.renderIcon(h)),z.createElement("span",{className:"recharts-legend-item-text",style:{color:m}},v?v(y,h,b):y))})}},{key:"render",value:function(){var r=this.props,i=r.payload,a=r.layout,l=r.align;if(!i||!i.length)return null;var o={padding:0,margin:0,textAlign:a==="horizontal"?l:"left"};return z.createElement("ul",{className:"recharts-default-legend",style:o},this.renderItems())}}])}(N.PureComponent);Al(b0,"displayName","Legend");Al(b0,"defaultProps",{iconSize:14,layout:"horizontal",align:"center",verticalAlign:"middle",inactiveColor:"#ccc"});var Fj=ru;function Rj(){this.__data__=new Fj,this.size=0}var Bj=Rj;function Wj(e){var t=this.__data__,n=t.delete(e);return this.size=t.size,n}var Uj=Wj;function Hj(e){return this.__data__.get(e)}var Gj=Hj;function Vj(e){return this.__data__.has(e)}var Xj=Vj,qj=ru,Kj=o0,Yj=s0,Zj=200;function Qj(e,t){var n=this.__data__;if(n instanceof qj){var r=n.__data__;if(!Kj||r.length<Zj-1)return r.push([e,t]),this.size=++n.size,this;n=this.__data__=new Yj(r)}return n.set(e,t),this.size=n.size,this}var Jj=Qj,eO=ru,tO=Bj,nO=Uj,rO=Gj,iO=Xj,aO=Jj;function wa(e){var t=this.__data__=new eO(e);this.size=t.size}wa.prototype.clear=tO;wa.prototype.delete=nO;wa.prototype.get=rO;wa.prototype.has=iO;wa.prototype.set=aO;var f6=wa,lO="__lodash_hash_undefined__";function oO(e){return this.__data__.set(e,lO),this}var sO=oO;function cO(e){return this.__data__.has(e)}var uO=cO,dO=s0,fO=sO,pO=uO;function Ks(e){var t=-1,n=e==null?0:e.length;for(this.__data__=new dO;++t<n;)this.add(e[t])}Ks.prototype.add=Ks.prototype.push=fO;Ks.prototype.has=pO;var p6=Ks;function hO(e,t){for(var n=-1,r=e==null?0:e.length;++n<r;)if(t(e[n],n,e))return!0;return!1}var h6=hO;function mO(e,t){return e.has(t)}var m6=mO,yO=p6,vO=h6,gO=m6,xO=1,bO=2;function wO(e,t,n,r,i,a){var l=n&xO,o=e.length,s=t.length;if(o!=s&&!(l&&s>o))return!1;var u=a.get(e),f=a.get(t);if(u&&f)return u==t&&f==e;var d=-1,p=!0,h=n&bO?new yO:void 0;for(a.set(e,t),a.set(t,e);++d<o;){var b=e[d],v=t[d];if(r)var w=l?r(v,b,d,t,e,a):r(b,v,d,e,t,a);if(w!==void 0){if(w)continue;p=!1;break}if(h){if(!vO(t,function(y,m){if(!gO(h,m)&&(b===y||i(b,y,n,r,a)))return h.push(m)})){p=!1;break}}else if(!(b===v||i(b,v,n,r,a))){p=!1;break}}return a.delete(e),a.delete(t),p}var y6=wO,kO=_n,SO=kO.Uint8Array,_O=SO;function jO(e){var t=-1,n=Array(e.size);return e.forEach(function(r,i){n[++t]=[i,r]}),n}var OO=jO;function PO(e){var t=-1,n=Array(e.size);return e.forEach(function(r){n[++t]=r}),n}var w0=PO,G7=yo,V7=_O,AO=l0,NO=y6,CO=OO,EO=w0,MO=1,TO=2,$O="[object Boolean]",zO="[object Date]",IO="[object Error]",DO="[object Map]",LO="[object Number]",FO="[object RegExp]",RO="[object Set]",BO="[object String]",WO="[object Symbol]",UO="[object ArrayBuffer]",HO="[object DataView]",X7=G7?G7.prototype:void 0,Sd=X7?X7.valueOf:void 0;function GO(e,t,n,r,i,a,l){switch(n){case HO:if(e.byteLength!=t.byteLength||e.byteOffset!=t.byteOffset)return!1;e=e.buffer,t=t.buffer;case UO:return!(e.byteLength!=t.byteLength||!a(new V7(e),new V7(t)));case $O:case zO:case LO:return AO(+e,+t);case IO:return e.name==t.name&&e.message==t.message;case FO:case BO:return e==t+"";case DO:var o=CO;case RO:var s=r&MO;if(o||(o=EO),e.size!=t.size&&!s)return!1;var u=l.get(e);if(u)return u==t;r|=TO,l.set(e,t);var f=NO(o(e),o(t),r,i,a,l);return l.delete(e),f;case WO:if(Sd)return Sd.call(e)==Sd.call(t)}return!1}var VO=GO;function XO(e,t){for(var n=-1,r=t.length,i=e.length;++n<r;)e[i+n]=t[n];return e}var v6=XO,qO=v6,KO=Pt;function YO(e,t,n){var r=t(e);return KO(e)?r:qO(r,n(e))}var ZO=YO;function QO(e,t){for(var n=-1,r=e==null?0:e.length,i=0,a=[];++n<r;){var l=e[n];t(l,n,e)&&(a[i++]=l)}return a}var JO=QO;function eP(){return[]}var tP=eP,nP=JO,rP=tP,iP=Object.prototype,aP=iP.propertyIsEnumerable,q7=Object.getOwnPropertySymbols,lP=q7?function(e){return e==null?[]:(e=Object(e),nP(q7(e),function(t){return aP.call(e,t)}))}:rP,oP=lP;function sP(e,t){for(var n=-1,r=Array(e);++n<e;)r[n]=t(n);return r}var cP=sP,uP=Gn,dP=Vn,fP="[object Arguments]";function pP(e){return dP(e)&&uP(e)==fP}var hP=pP,K7=hP,mP=Vn,g6=Object.prototype,yP=g6.hasOwnProperty,vP=g6.propertyIsEnumerable,gP=K7(function(){return arguments}())?K7:function(e){return mP(e)&&yP.call(e,"callee")&&!vP.call(e,"callee")},k0=gP,Ys={exports:{}};function xP(){return!1}var bP=xP;Ys.exports;(function(e,t){var n=_n,r=bP,i=t&&!t.nodeType&&t,a=i&&!0&&e&&!e.nodeType&&e,l=a&&a.exports===i,o=l?n.Buffer:void 0,s=o?o.isBuffer:void 0,u=s||r;e.exports=u})(Ys,Ys.exports);var x6=Ys.exports,wP=9007199254740991,kP=/^(?:0|[1-9]\d*)$/;function SP(e,t){var n=typeof e;return t=t??wP,!!t&&(n=="number"||n!="symbol"&&kP.test(e))&&e>-1&&e%1==0&&e<t}var S0=SP,_P=9007199254740991;function jP(e){return typeof e=="number"&&e>-1&&e%1==0&&e<=_P}var _0=jP,OP=Gn,PP=_0,AP=Vn,NP="[object Arguments]",CP="[object Array]",EP="[object Boolean]",MP="[object Date]",TP="[object Error]",$P="[object Function]",zP="[object Map]",IP="[object Number]",DP="[object Object]",LP="[object RegExp]",FP="[object Set]",RP="[object String]",BP="[object WeakMap]",WP="[object ArrayBuffer]",UP="[object DataView]",HP="[object Float32Array]",GP="[object Float64Array]",VP="[object Int8Array]",XP="[object Int16Array]",qP="[object Int32Array]",KP="[object Uint8Array]",YP="[object Uint8ClampedArray]",ZP="[object Uint16Array]",QP="[object Uint32Array]",Pe={};Pe[HP]=Pe[GP]=Pe[VP]=Pe[XP]=Pe[qP]=Pe[KP]=Pe[YP]=Pe[ZP]=Pe[QP]=!0;Pe[NP]=Pe[CP]=Pe[WP]=Pe[EP]=Pe[UP]=Pe[MP]=Pe[TP]=Pe[$P]=Pe[zP]=Pe[IP]=Pe[DP]=Pe[LP]=Pe[FP]=Pe[RP]=Pe[BP]=!1;function JP(e){return AP(e)&&PP(e.length)&&!!Pe[OP(e)]}var eA=JP;function tA(e){return function(t){return e(t)}}var b6=tA,Zs={exports:{}};Zs.exports;(function(e,t){var n=Av,r=t&&!t.nodeType&&t,i=r&&!0&&e&&!e.nodeType&&e,a=i&&i.exports===r,l=a&&n.process,o=function(){try{var s=i&&i.require&&i.require("util").types;return s||l&&l.binding&&l.binding("util")}catch{}}();e.exports=o})(Zs,Zs.exports);var nA=Zs.exports,rA=eA,iA=b6,Y7=nA,Z7=Y7&&Y7.isTypedArray,aA=Z7?iA(Z7):rA,w6=aA,lA=cP,oA=k0,sA=Pt,cA=x6,uA=S0,dA=w6,fA=Object.prototype,pA=fA.hasOwnProperty;function hA(e,t){var n=sA(e),r=!n&&oA(e),i=!n&&!r&&cA(e),a=!n&&!r&&!i&&dA(e),l=n||r||i||a,o=l?lA(e.length,String):[],s=o.length;for(var u in e)(t||pA.call(e,u))&&!(l&&(u=="length"||i&&(u=="offset"||u=="parent")||a&&(u=="buffer"||u=="byteLength"||u=="byteOffset")||uA(u,s)))&&o.push(u);return o}var mA=hA,yA=Object.prototype;function vA(e){var t=e&&e.constructor,n=typeof t=="function"&&t.prototype||yA;return e===n}var gA=vA;function xA(e,t){return function(n){return e(t(n))}}var k6=xA,bA=k6,wA=bA(Object.keys,Object),kA=wA,SA=gA,_A=kA,jA=Object.prototype,OA=jA.hasOwnProperty;function PA(e){if(!SA(e))return _A(e);var t=[];for(var n in Object(e))OA.call(e,n)&&n!="constructor"&&t.push(n);return t}var AA=PA,NA=a0,CA=_0;function EA(e){return e!=null&&CA(e.length)&&!NA(e)}var go=EA,MA=mA,TA=AA,$A=go;function zA(e){return $A(e)?MA(e):TA(e)}var wu=zA,IA=ZO,DA=oP,LA=wu;function FA(e){return IA(e,LA,DA)}var RA=FA,Q7=RA,BA=1,WA=Object.prototype,UA=WA.hasOwnProperty;function HA(e,t,n,r,i,a){var l=n&BA,o=Q7(e),s=o.length,u=Q7(t),f=u.length;if(s!=f&&!l)return!1;for(var d=s;d--;){var p=o[d];if(!(l?p in t:UA.call(t,p)))return!1}var h=a.get(e),b=a.get(t);if(h&&b)return h==t&&b==e;var v=!0;a.set(e,t),a.set(t,e);for(var w=l;++d<s;){p=o[d];var y=e[p],m=t[p];if(r)var g=l?r(m,y,p,t,e,a):r(y,m,p,e,t,a);if(!(g===void 0?y===m||i(y,m,n,r,a):g)){v=!1;break}w||(w=p=="constructor")}if(v&&!w){var S=e.constructor,x=t.constructor;S!=x&&"constructor"in e&&"constructor"in t&&!(typeof S=="function"&&S instanceof S&&typeof x=="function"&&x instanceof x)&&(v=!1)}return a.delete(e),a.delete(t),v}var GA=HA,VA=ai,XA=_n,qA=VA(XA,"DataView"),KA=qA,YA=ai,ZA=_n,QA=YA(ZA,"Promise"),JA=QA,eN=ai,tN=_n,nN=eN(tN,"Set"),S6=nN,rN=ai,iN=_n,aN=rN(iN,"WeakMap"),lN=aN,t1=KA,n1=o0,r1=JA,i1=S6,a1=lN,_6=Gn,ka=Cv,J7="[object Map]",oN="[object Object]",em="[object Promise]",tm="[object Set]",nm="[object WeakMap]",rm="[object DataView]",sN=ka(t1),cN=ka(n1),uN=ka(r1),dN=ka(i1),fN=ka(a1),Tr=_6;(t1&&Tr(new t1(new ArrayBuffer(1)))!=rm||n1&&Tr(new n1)!=J7||r1&&Tr(r1.resolve())!=em||i1&&Tr(new i1)!=tm||a1&&Tr(new a1)!=nm)&&(Tr=function(e){var t=_6(e),n=t==oN?e.constructor:void 0,r=n?ka(n):"";if(r)switch(r){case sN:return rm;case cN:return J7;case uN:return em;case dN:return tm;case fN:return nm}return t});var pN=Tr,_d=f6,hN=y6,mN=VO,yN=GA,im=pN,am=Pt,lm=x6,vN=w6,gN=1,om="[object Arguments]",sm="[object Array]",Go="[object Object]",xN=Object.prototype,cm=xN.hasOwnProperty;function bN(e,t,n,r,i,a){var l=am(e),o=am(t),s=l?sm:im(e),u=o?sm:im(t);s=s==om?Go:s,u=u==om?Go:u;var f=s==Go,d=u==Go,p=s==u;if(p&&lm(e)){if(!lm(t))return!1;l=!0,f=!1}if(p&&!f)return a||(a=new _d),l||vN(e)?hN(e,t,n,r,i,a):mN(e,t,s,n,r,i,a);if(!(n&gN)){var h=f&&cm.call(e,"__wrapped__"),b=d&&cm.call(t,"__wrapped__");if(h||b){var v=h?e.value():e,w=b?t.value():t;return a||(a=new _d),i(v,w,n,r,a)}}return p?(a||(a=new _d),yN(e,t,n,r,i,a)):!1}var wN=bN,kN=wN,um=Vn;function j6(e,t,n,r,i){return e===t?!0:e==null||t==null||!um(e)&&!um(t)?e!==e&&t!==t:kN(e,t,n,r,j6,i)}var j0=j6,SN=f6,_N=j0,jN=1,ON=2;function PN(e,t,n,r){var i=n.length,a=i,l=!r;if(e==null)return!a;for(e=Object(e);i--;){var o=n[i];if(l&&o[2]?o[1]!==e[o[0]]:!(o[0]in e))return!1}for(;++i<a;){o=n[i];var s=o[0],u=e[s],f=o[1];if(l&&o[2]){if(u===void 0&&!(s in e))return!1}else{var d=new SN;if(r)var p=r(u,f,s,e,t,d);if(!(p===void 0?_N(f,u,jN|ON,r,d):p))return!1}}return!0}var AN=PN,NN=kr;function CN(e){return e===e&&!NN(e)}var O6=CN,EN=O6,MN=wu;function TN(e){for(var t=MN(e),n=t.length;n--;){var r=t[n],i=e[r];t[n]=[r,i,EN(i)]}return t}var $N=TN;function zN(e,t){return function(n){return n==null?!1:n[e]===t&&(t!==void 0||e in Object(n))}}var P6=zN,IN=AN,DN=$N,LN=P6;function FN(e){var t=DN(e);return t.length==1&&t[0][2]?LN(t[0][0],t[0][1]):function(n){return n===e||IN(n,e,t)}}var RN=FN;function BN(e,t){return e!=null&&t in Object(e)}var WN=BN,UN=zv,HN=k0,GN=Pt,VN=S0,XN=_0,qN=au;function KN(e,t,n){t=UN(t,e);for(var r=-1,i=t.length,a=!1;++r<i;){var l=qN(t[r]);if(!(a=e!=null&&n(e,l)))break;e=e[l]}return a||++r!=i?a:(i=e==null?0:e.length,!!i&&XN(i)&&VN(l,i)&&(GN(e)||HN(e)))}var YN=KN,ZN=WN,QN=YN;function JN(e,t){return e!=null&&QN(e,t,ZN)}var eC=JN,tC=j0,nC=Iv,rC=eC,iC=i0,aC=O6,lC=P6,oC=au,sC=1,cC=2;function uC(e,t){return iC(e)&&aC(t)?lC(oC(e),t):function(n){var r=nC(n,e);return r===void 0&&r===t?rC(n,e):tC(t,r,sC|cC)}}var dC=uC;function fC(e){return e}var Sa=fC;function pC(e){return function(t){return t==null?void 0:t[e]}}var hC=pC,mC=d0;function yC(e){return function(t){return mC(t,e)}}var vC=yC,gC=hC,xC=vC,bC=i0,wC=au;function kC(e){return bC(e)?gC(wC(e)):xC(e)}var SC=kC,_C=RN,jC=dC,OC=Sa,PC=Pt,AC=SC;function NC(e){return typeof e=="function"?e:e==null?OC:typeof e=="object"?PC(e)?jC(e[0],e[1]):_C(e):AC(e)}var Sr=NC;function CC(e,t,n,r){for(var i=e.length,a=n+(r?1:-1);r?a--:++a<i;)if(t(e[a],a,e))return a;return-1}var A6=CC;function EC(e){return e!==e}var MC=EC;function TC(e,t,n){for(var r=n-1,i=e.length;++r<i;)if(e[r]===t)return r;return-1}var $C=TC,zC=A6,IC=MC,DC=$C;function LC(e,t,n){return t===t?DC(e,t,n):zC(e,IC,n)}var FC=LC,RC=FC;function BC(e,t){var n=e==null?0:e.length;return!!n&&RC(e,t,0)>-1}var WC=BC;function UC(e,t,n){for(var r=-1,i=e==null?0:e.length;++r<i;)if(n(t,e[r]))return!0;return!1}var HC=UC;function GC(){}var VC=GC,jd=S6,XC=VC,qC=w0,KC=1/0,YC=jd&&1/qC(new jd([,-0]))[1]==KC?function(e){return new jd(e)}:XC,ZC=YC,QC=p6,JC=WC,eE=HC,tE=m6,nE=ZC,rE=w0,iE=200;function aE(e,t,n){var r=-1,i=JC,a=e.length,l=!0,o=[],s=o;if(n)l=!1,i=eE;else if(a>=iE){var u=t?null:nE(e);if(u)return rE(u);l=!1,i=tE,s=new QC}else s=t?[]:o;e:for(;++r<a;){var f=e[r],d=t?t(f):f;if(f=n||f!==0?f:0,l&&d===d){for(var p=s.length;p--;)if(s[p]===d)continue e;t&&s.push(d),o.push(f)}else i(s,d,n)||(s!==o&&s.push(d),o.push(f))}return o}var lE=aE,oE=Sr,sE=lE;function cE(e,t){return e&&e.length?sE(e,oE(t)):[]}var uE=cE;const dm=ke(uE);function N6(e,t,n){return t===!0?dm(e,n):re(t)?dm(e,t):e}function qi(e){"@babel/helpers - typeof";return qi=typeof Symbol=="function"&&typeof Symbol.iterator=="symbol"?function(t){return typeof t}:function(t){return t&&typeof Symbol=="function"&&t.constructor===Symbol&&t!==Symbol.prototype?"symbol":typeof t},qi(e)}var dE=["ref"];function fm(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter(function(i){return Object.getOwnPropertyDescriptor(e,i).enumerable})),n.push.apply(n,r)}return n}function jn(e){for(var t=1;t<arguments.length;t++){var n=arguments[t]!=null?arguments[t]:{};t%2?fm(Object(n),!0).forEach(function(r){ku(e,r,n[r])}):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):fm(Object(n)).forEach(function(r){Object.defineProperty(e,r,Object.getOwnPropertyDescriptor(n,r))})}return e}function fE(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}function pm(e,t){for(var n=0;n<t.length;n++){var r=t[n];r.enumerable=r.enumerable||!1,r.configurable=!0,"value"in r&&(r.writable=!0),Object.defineProperty(e,E6(r.key),r)}}function pE(e,t,n){return t&&pm(e.prototype,t),n&&pm(e,n),Object.defineProperty(e,"prototype",{writable:!1}),e}function hE(e,t,n){return t=Qs(t),mE(e,C6()?Reflect.construct(t,n||[],Qs(e).constructor):t.apply(e,n))}function mE(e,t){if(t&&(qi(t)==="object"||typeof t=="function"))return t;if(t!==void 0)throw new TypeError("Derived constructors may only return object or undefined");return yE(e)}function yE(e){if(e===void 0)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return e}function C6(){try{var e=!Boolean.prototype.valueOf.call(Reflect.construct(Boolean,[],function(){}))}catch{}return(C6=function(){return!!e})()}function Qs(e){return Qs=Object.setPrototypeOf?Object.getPrototypeOf.bind():function(n){return n.__proto__||Object.getPrototypeOf(n)},Qs(e)}function vE(e,t){if(typeof t!="function"&&t!==null)throw new TypeError("Super expression must either be null or a function");e.prototype=Object.create(t&&t.prototype,{constructor:{value:e,writable:!0,configurable:!0}}),Object.defineProperty(e,"prototype",{writable:!1}),t&&l1(e,t)}function l1(e,t){return l1=Object.setPrototypeOf?Object.setPrototypeOf.bind():function(r,i){return r.__proto__=i,r},l1(e,t)}function ku(e,t,n){return t=E6(t),t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function E6(e){var t=gE(e,"string");return qi(t)=="symbol"?t:t+""}function gE(e,t){if(qi(e)!="object"||!e)return e;var n=e[Symbol.toPrimitive];if(n!==void 0){var r=n.call(e,t);if(qi(r)!="object")return r;throw new TypeError("@@toPrimitive must return a primitive value.")}return String(e)}function xE(e,t){if(e==null)return{};var n=bE(e,t),r,i;if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);for(i=0;i<a.length;i++)r=a[i],!(t.indexOf(r)>=0)&&Object.prototype.propertyIsEnumerable.call(e,r)&&(n[r]=e[r])}return n}function bE(e,t){if(e==null)return{};var n={};for(var r in e)if(Object.prototype.hasOwnProperty.call(e,r)){if(t.indexOf(r)>=0)continue;n[r]=e[r]}return n}function wE(e){return e.value}function kE(e,t){if(z.isValidElement(e))return z.cloneElement(e,t);if(typeof e=="function")return z.createElement(e,t);t.ref;var n=xE(t,dE);return z.createElement(b0,n)}var hm=1,hr=function(e){function t(){var n;fE(this,t);for(var r=arguments.length,i=new Array(r),a=0;a<r;a++)i[a]=arguments[a];return n=hE(this,t,[].concat(i)),ku(n,"lastBoundingBox",{width:-1,height:-1}),n}return vE(t,e),pE(t,[{key:"componentDidMount",value:function(){this.updateBBox()}},{key:"componentDidUpdate",value:function(){this.updateBBox()}},{key:"getBBox",value:function(){if(this.wrapperNode&&this.wrapperNode.getBoundingClientRect){var r=this.wrapperNode.getBoundingClientRect();return r.height=this.wrapperNode.offsetHeight,r.width=this.wrapperNode.offsetWidth,r}return null}},{key:"updateBBox",value:function(){var r=this.props.onBBoxUpdate,i=this.getBBox();i?(Math.abs(i.width-this.lastBoundingBox.width)>hm||Math.abs(i.height-this.lastBoundingBox.height)>hm)&&(this.lastBoundingBox.width=i.width,this.lastBoundingBox.height=i.height,r&&r(i)):(this.lastBoundingBox.width!==-1||this.lastBoundingBox.height!==-1)&&(this.lastBoundingBox.width=-1,this.lastBoundingBox.height=-1,r&&r(null))}},{key:"getBBoxSnapshot",value:function(){return this.lastBoundingBox.width>=0&&this.lastBoundingBox.height>=0?jn({},this.lastBoundingBox):{width:0,height:0}}},{key:"getDefaultPosition",value:function(r){var i=this.props,a=i.layout,l=i.align,o=i.verticalAlign,s=i.margin,u=i.chartWidth,f=i.chartHeight,d,p;if(!r||(r.left===void 0||r.left===null)&&(r.right===void 0||r.right===null))if(l==="center"&&a==="vertical"){var h=this.getBBoxSnapshot();d={left:((u||0)-h.width)/2}}else d=l==="right"?{right:s&&s.right||0}:{left:s&&s.left||0};if(!r||(r.top===void 0||r.top===null)&&(r.bottom===void 0||r.bottom===null))if(o==="middle"){var b=this.getBBoxSnapshot();p={top:((f||0)-b.height)/2}}else p=o==="bottom"?{bottom:s&&s.bottom||0}:{top:s&&s.top||0};return jn(jn({},d),p)}},{key:"render",value:function(){var r=this,i=this.props,a=i.content,l=i.width,o=i.height,s=i.wrapperStyle,u=i.payloadUniqBy,f=i.payload,d=jn(jn({position:"absolute",width:l||"auto",height:o||"auto"},this.getDefaultPosition(s)),s);return z.createElement("div",{className:"recharts-legend-wrapper",style:d,ref:function(h){r.wrapperNode=h}},kE(a,jn(jn({},this.props),{},{payload:N6(f,u,wE)})))}}],[{key:"getWithHeight",value:function(r,i){var a=jn(jn({},this.defaultProps),r.props),l=a.layout;return l==="vertical"&&G(r.props.height)?{height:r.props.height}:l==="horizontal"?{width:r.props.width||i}:null}}])}(N.PureComponent);ku(hr,"displayName","Legend");ku(hr,"defaultProps",{iconSize:14,layout:"horizontal",align:"center",verticalAlign:"bottom"});var mm=yo,SE=k0,_E=Pt,ym=mm?mm.isConcatSpreadable:void 0;function jE(e){return _E(e)||SE(e)||!!(ym&&e&&e[ym])}var OE=jE,PE=v6,AE=OE;function M6(e,t,n,r,i){var a=-1,l=e.length;for(n||(n=AE),i||(i=[]);++a<l;){var o=e[a];t>0&&n(o)?t>1?M6(o,t-1,n,r,i):PE(i,o):r||(i[i.length]=o)}return i}var T6=M6;function NE(e){return function(t,n,r){for(var i=-1,a=Object(t),l=r(t),o=l.length;o--;){var s=l[e?o:++i];if(n(a[s],s,a)===!1)break}return t}}var CE=NE,EE=CE,ME=EE(),TE=ME,$E=TE,zE=wu;function IE(e,t){return e&&$E(e,t,zE)}var $6=IE,DE=go;function LE(e,t){return function(n,r){if(n==null)return n;if(!DE(n))return e(n,r);for(var i=n.length,a=t?i:-1,l=Object(n);(t?a--:++a<i)&&r(l[a],a,l)!==!1;);return n}}var FE=LE,RE=$6,BE=FE,WE=BE(RE),O0=WE,UE=O0,HE=go;function GE(e,t){var n=-1,r=HE(e)?Array(e.length):[];return UE(e,function(i,a,l){r[++n]=t(i,a,l)}),r}var z6=GE;function VE(e,t){var n=e.length;for(e.sort(t);n--;)e[n]=e[n].value;return e}var XE=VE,vm=ya;function qE(e,t){if(e!==t){var n=e!==void 0,r=e===null,i=e===e,a=vm(e),l=t!==void 0,o=t===null,s=t===t,u=vm(t);if(!o&&!u&&!a&&e>t||a&&l&&s&&!o&&!u||r&&l&&s||!n&&s||!i)return 1;if(!r&&!a&&!u&&e<t||u&&n&&i&&!r&&!a||o&&n&&i||!l&&i||!s)return-1}return 0}var KE=qE,YE=KE;function ZE(e,t,n){for(var r=-1,i=e.criteria,a=t.criteria,l=i.length,o=n.length;++r<l;){var s=YE(i[r],a[r]);if(s){if(r>=o)return s;var u=n[r];return s*(u=="desc"?-1:1)}}return e.index-t.index}var QE=ZE,Od=u0,JE=d0,eM=Sr,tM=z6,nM=XE,rM=b6,iM=QE,aM=Sa,lM=Pt;function oM(e,t,n){t.length?t=Od(t,function(a){return lM(a)?function(l){return JE(l,a.length===1?a[0]:a)}:a}):t=[aM];var r=-1;t=Od(t,rM(eM));var i=tM(e,function(a,l,o){var s=Od(t,function(u){return u(a)});return{criteria:s,index:++r,value:a}});return nM(i,function(a,l){return iM(a,l,n)})}var sM=oM;function cM(e,t,n){switch(n.length){case 0:return e.call(t);case 1:return e.call(t,n[0]);case 2:return e.call(t,n[0],n[1]);case 3:return e.call(t,n[0],n[1],n[2])}return e.apply(t,n)}var uM=cM,dM=uM,gm=Math.max;function fM(e,t,n){return t=gm(t===void 0?e.length-1:t,0),function(){for(var r=arguments,i=-1,a=gm(r.length-t,0),l=Array(a);++i<a;)l[i]=r[t+i];i=-1;for(var o=Array(t+1);++i<t;)o[i]=r[i];return o[t]=n(l),dM(e,this,o)}}var pM=fM;function hM(e){return function(){return e}}var mM=hM,yM=ai,vM=function(){try{var e=yM(Object,"defineProperty");return e({},"",{}),e}catch{}}(),I6=vM,gM=mM,xm=I6,xM=Sa,bM=xm?function(e,t){return xm(e,"toString",{configurable:!0,enumerable:!1,value:gM(t),writable:!0})}:xM,wM=bM,kM=800,SM=16,_M=Date.now;function jM(e){var t=0,n=0;return function(){var r=_M(),i=SM-(r-n);if(n=r,i>0){if(++t>=kM)return arguments[0]}else t=0;return e.apply(void 0,arguments)}}var OM=jM,PM=wM,AM=OM,NM=AM(PM),CM=NM,EM=Sa,MM=pM,TM=CM;function $M(e,t){return TM(MM(e,t,EM),e+"")}var zM=$M,IM=l0,DM=go,LM=S0,FM=kr;function RM(e,t,n){if(!FM(n))return!1;var r=typeof t;return(r=="number"?DM(n)&&LM(t,n.length):r=="string"&&t in n)?IM(n[t],e):!1}var Su=RM,BM=T6,WM=sM,UM=zM,bm=Su,HM=UM(function(e,t){if(e==null)return[];var n=t.length;return n>1&&bm(e,t[0],t[1])?t=[]:n>2&&bm(t[0],t[1],t[2])&&(t=[t[0]]),WM(e,BM(t,1),[])}),GM=HM;const P0=ke(GM);function Nl(e){"@babel/helpers - typeof";return Nl=typeof Symbol=="function"&&typeof Symbol.iterator=="symbol"?function(t){return typeof t}:function(t){return t&&typeof Symbol=="function"&&t.constructor===Symbol&&t!==Symbol.prototype?"symbol":typeof t},Nl(e)}function o1(){return o1=Object.assign?Object.assign.bind():function(e){for(var t=1;t<arguments.length;t++){var n=arguments[t];for(var r in n)Object.prototype.hasOwnProperty.call(n,r)&&(e[r]=n[r])}return e},o1.apply(this,arguments)}function VM(e,t){return YM(e)||KM(e,t)||qM(e,t)||XM()}function XM(){throw new TypeError(`Invalid attempt to destructure non-iterable instance.
In order to be iterable, non-array objects must have a [Symbol.iterator]() method.`)}function qM(e,t){if(e){if(typeof e=="string")return wm(e,t);var n=Object.prototype.toString.call(e).slice(8,-1);if(n==="Object"&&e.constructor&&(n=e.constructor.name),n==="Map"||n==="Set")return Array.from(e);if(n==="Arguments"||/^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n))return wm(e,t)}}function wm(e,t){(t==null||t>e.length)&&(t=e.length);for(var n=0,r=new Array(t);n<t;n++)r[n]=e[n];return r}function KM(e,t){var n=e==null?null:typeof Symbol<"u"&&e[Symbol.iterator]||e["@@iterator"];if(n!=null){var r,i,a,l,o=[],s=!0,u=!1;try{if(a=(n=n.call(e)).next,t!==0)for(;!(s=(r=a.call(n)).done)&&(o.push(r.value),o.length!==t);s=!0);}catch(f){u=!0,i=f}finally{try{if(!s&&n.return!=null&&(l=n.return(),Object(l)!==l))return}finally{if(u)throw i}}return o}}function YM(e){if(Array.isArray(e))return e}function km(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter(function(i){return Object.getOwnPropertyDescriptor(e,i).enumerable})),n.push.apply(n,r)}return n}function Pd(e){for(var t=1;t<arguments.length;t++){var n=arguments[t]!=null?arguments[t]:{};t%2?km(Object(n),!0).forEach(function(r){ZM(e,r,n[r])}):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):km(Object(n)).forEach(function(r){Object.defineProperty(e,r,Object.getOwnPropertyDescriptor(n,r))})}return e}function ZM(e,t,n){return t=QM(t),t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function QM(e){var t=JM(e,"string");return Nl(t)=="symbol"?t:t+""}function JM(e,t){if(Nl(e)!="object"||!e)return e;var n=e[Symbol.toPrimitive];if(n!==void 0){var r=n.call(e,t);if(Nl(r)!="object")return r;throw new TypeError("@@toPrimitive must return a primitive value.")}return(t==="string"?String:Number)(e)}function eT(e){return Array.isArray(e)&&Ye(e[0])&&Ye(e[1])?e.join(" ~ "):e}var tT=function(t){var n=t.separator,r=n===void 0?" : ":n,i=t.contentStyle,a=i===void 0?{}:i,l=t.itemStyle,o=l===void 0?{}:l,s=t.labelStyle,u=s===void 0?{}:s,f=t.payload,d=t.formatter,p=t.itemSorter,h=t.wrapperClassName,b=t.labelClassName,v=t.label,w=t.labelFormatter,y=t.accessibilityLayer,m=y===void 0?!1:y,g=function(){if(f&&f.length){var A={padding:0,margin:0},P=(p?P0(f,p):f).map(function($,C){if($.type==="none")return null;var I=Pd({display:"block",paddingTop:4,paddingBottom:4,color:$.color||"#000"},o),L=$.formatter||d||eT,T=$.value,D=$.name,R=T,H=D;if(L&&R!=null&&H!=null){var B=L(T,D,$,C,f);if(Array.isArray(B)){var K=VM(B,2);R=K[0],H=K[1]}else R=B}return z.createElement("li",{className:"recharts-tooltip-item",key:"tooltip-item-".concat(C),style:I},Ye(H)?z.createElement("span",{className:"recharts-tooltip-item-name"},H):null,Ye(H)?z.createElement("span",{className:"recharts-tooltip-item-separator"},r):null,z.createElement("span",{className:"recharts-tooltip-item-value"},R),z.createElement("span",{className:"recharts-tooltip-item-unit"},$.unit||""))});return z.createElement("ul",{className:"recharts-tooltip-item-list",style:A},P)}return null},S=Pd({margin:0,padding:10,backgroundColor:"#fff",border:"1px solid #ccc",whiteSpace:"nowrap"},a),x=Pd({margin:0},u),k=!fe(v),_=k?v:"",j=de("recharts-default-tooltip",h),O=de("recharts-tooltip-label",b);k&&w&&f!==void 0&&f!==null&&(_=w(v,f));var M=m?{role:"status","aria-live":"assertive"}:{};return z.createElement("div",o1({className:j,style:S},M),z.createElement("p",{className:O,style:x},z.isValidElement(_)?_:"".concat(_)),g())};function Cl(e){"@babel/helpers - typeof";return Cl=typeof Symbol=="function"&&typeof Symbol.iterator=="symbol"?function(t){return typeof t}:function(t){return t&&typeof Symbol=="function"&&t.constructor===Symbol&&t!==Symbol.prototype?"symbol":typeof t},Cl(e)}function Vo(e,t,n){return t=nT(t),t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function nT(e){var t=rT(e,"string");return Cl(t)=="symbol"?t:t+""}function rT(e,t){if(Cl(e)!="object"||!e)return e;var n=e[Symbol.toPrimitive];if(n!==void 0){var r=n.call(e,t);if(Cl(r)!="object")return r;throw new TypeError("@@toPrimitive must return a primitive value.")}return(t==="string"?String:Number)(e)}var Da="recharts-tooltip-wrapper",iT={visibility:"hidden"};function aT(e){var t=e.coordinate,n=e.translateX,r=e.translateY;return de(Da,Vo(Vo(Vo(Vo({},"".concat(Da,"-right"),G(n)&&t&&G(t.x)&&n>=t.x),"".concat(Da,"-left"),G(n)&&t&&G(t.x)&&n<t.x),"".concat(Da,"-bottom"),G(r)&&t&&G(t.y)&&r>=t.y),"".concat(Da,"-top"),G(r)&&t&&G(t.y)&&r<t.y))}function Sm(e){var t=e.allowEscapeViewBox,n=e.coordinate,r=e.key,i=e.offsetTopLeft,a=e.position,l=e.reverseDirection,o=e.tooltipDimension,s=e.viewBox,u=e.viewBoxDimension;if(a&&G(a[r]))return a[r];var f=n[r]-o-i,d=n[r]+i;if(t[r])return l[r]?f:d;if(l[r]){var p=f,h=s[r];return p<h?Math.max(d,s[r]):Math.max(f,s[r])}var b=d+o,v=s[r]+u;return b>v?Math.max(f,s[r]):Math.max(d,s[r])}function lT(e){var t=e.translateX,n=e.translateY,r=e.useTranslate3d;return{transform:r?"translate3d(".concat(t,"px, ").concat(n,"px, 0)"):"translate(".concat(t,"px, ").concat(n,"px)")}}function oT(e){var t=e.allowEscapeViewBox,n=e.coordinate,r=e.offsetTopLeft,i=e.position,a=e.reverseDirection,l=e.tooltipBox,o=e.useTranslate3d,s=e.viewBox,u,f,d;return l.height>0&&l.width>0&&n?(f=Sm({allowEscapeViewBox:t,coordinate:n,key:"x",offsetTopLeft:r,position:i,reverseDirection:a,tooltipDimension:l.width,viewBox:s,viewBoxDimension:s.width}),d=Sm({allowEscapeViewBox:t,coordinate:n,key:"y",offsetTopLeft:r,position:i,reverseDirection:a,tooltipDimension:l.height,viewBox:s,viewBoxDimension:s.height}),u=lT({translateX:f,translateY:d,useTranslate3d:o})):u=iT,{cssProperties:u,cssClasses:aT({translateX:f,translateY:d,coordinate:n})}}function Ki(e){"@babel/helpers - typeof";return Ki=typeof Symbol=="function"&&typeof Symbol.iterator=="symbol"?function(t){return typeof t}:function(t){return t&&typeof Symbol=="function"&&t.constructor===Symbol&&t!==Symbol.prototype?"symbol":typeof t},Ki(e)}function _m(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter(function(i){return Object.getOwnPropertyDescriptor(e,i).enumerable})),n.push.apply(n,r)}return n}function jm(e){for(var t=1;t<arguments.length;t++){var n=arguments[t]!=null?arguments[t]:{};t%2?_m(Object(n),!0).forEach(function(r){c1(e,r,n[r])}):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):_m(Object(n)).forEach(function(r){Object.defineProperty(e,r,Object.getOwnPropertyDescriptor(n,r))})}return e}function sT(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}function cT(e,t){for(var n=0;n<t.length;n++){var r=t[n];r.enumerable=r.enumerable||!1,r.configurable=!0,"value"in r&&(r.writable=!0),Object.defineProperty(e,L6(r.key),r)}}function uT(e,t,n){return t&&cT(e.prototype,t),Object.defineProperty(e,"prototype",{writable:!1}),e}function dT(e,t,n){return t=Js(t),fT(e,D6()?Reflect.construct(t,n||[],Js(e).constructor):t.apply(e,n))}function fT(e,t){if(t&&(Ki(t)==="object"||typeof t=="function"))return t;if(t!==void 0)throw new TypeError("Derived constructors may only return object or undefined");return pT(e)}function pT(e){if(e===void 0)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return e}function D6(){try{var e=!Boolean.prototype.valueOf.call(Reflect.construct(Boolean,[],function(){}))}catch{}return(D6=function(){return!!e})()}function Js(e){return Js=Object.setPrototypeOf?Object.getPrototypeOf.bind():function(n){return n.__proto__||Object.getPrototypeOf(n)},Js(e)}function hT(e,t){if(typeof t!="function"&&t!==null)throw new TypeError("Super expression must either be null or a function");e.prototype=Object.create(t&&t.prototype,{constructor:{value:e,writable:!0,configurable:!0}}),Object.defineProperty(e,"prototype",{writable:!1}),t&&s1(e,t)}function s1(e,t){return s1=Object.setPrototypeOf?Object.setPrototypeOf.bind():function(r,i){return r.__proto__=i,r},s1(e,t)}function c1(e,t,n){return t=L6(t),t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function L6(e){var t=mT(e,"string");return Ki(t)=="symbol"?t:t+""}function mT(e,t){if(Ki(e)!="object"||!e)return e;var n=e[Symbol.toPrimitive];if(n!==void 0){var r=n.call(e,t);if(Ki(r)!="object")return r;throw new TypeError("@@toPrimitive must return a primitive value.")}return String(e)}var Om=1,yT=function(e){function t(){var n;sT(this,t);for(var r=arguments.length,i=new Array(r),a=0;a<r;a++)i[a]=arguments[a];return n=dT(this,t,[].concat(i)),c1(n,"state",{dismissed:!1,dismissedAtCoordinate:{x:0,y:0},lastBoundingBox:{width:-1,height:-1}}),c1(n,"handleKeyDown",function(l){if(l.key==="Escape"){var o,s,u,f;n.setState({dismissed:!0,dismissedAtCoordinate:{x:(o=(s=n.props.coordinate)===null||s===void 0?void 0:s.x)!==null&&o!==void 0?o:0,y:(u=(f=n.props.coordinate)===null||f===void 0?void 0:f.y)!==null&&u!==void 0?u:0}})}}),n}return hT(t,e),uT(t,[{key:"updateBBox",value:function(){if(this.wrapperNode&&this.wrapperNode.getBoundingClientRect){var r=this.wrapperNode.getBoundingClientRect();(Math.abs(r.width-this.state.lastBoundingBox.width)>Om||Math.abs(r.height-this.state.lastBoundingBox.height)>Om)&&this.setState({lastBoundingBox:{width:r.width,height:r.height}})}else(this.state.lastBoundingBox.width!==-1||this.state.lastBoundingBox.height!==-1)&&this.setState({lastBoundingBox:{width:-1,height:-1}})}},{key:"componentDidMount",value:function(){document.addEventListener("keydown",this.handleKeyDown),this.updateBBox()}},{key:"componentWillUnmount",value:function(){document.removeEventListener("keydown",this.handleKeyDown)}},{key:"componentDidUpdate",value:function(){var r,i;this.props.active&&this.updateBBox(),this.state.dismissed&&(((r=this.props.coordinate)===null||r===void 0?void 0:r.x)!==this.state.dismissedAtCoordinate.x||((i=this.props.coordinate)===null||i===void 0?void 0:i.y)!==this.state.dismissedAtCoordinate.y)&&(this.state.dismissed=!1)}},{key:"render",value:function(){var r=this,i=this.props,a=i.active,l=i.allowEscapeViewBox,o=i.animationDuration,s=i.animationEasing,u=i.children,f=i.coordinate,d=i.hasPayload,p=i.isAnimationActive,h=i.offset,b=i.position,v=i.reverseDirection,w=i.useTranslate3d,y=i.viewBox,m=i.wrapperStyle,g=oT({allowEscapeViewBox:l,coordinate:f,offsetTopLeft:h,position:b,reverseDirection:v,tooltipBox:this.state.lastBoundingBox,useTranslate3d:w,viewBox:y}),S=g.cssClasses,x=g.cssProperties,k=jm(jm({transition:p&&a?"transform ".concat(o,"ms ").concat(s):void 0},x),{},{pointerEvents:"none",visibility:!this.state.dismissed&&a&&d?"visible":"hidden",position:"absolute",top:0,left:0},m);return z.createElement("div",{tabIndex:-1,className:S,style:k,ref:function(j){r.wrapperNode=j}},u)}}])}(N.PureComponent),vT=function(){return!(typeof window<"u"&&window.document&&window.document.createElement&&window.setTimeout)},xo={isSsr:vT()};function Yi(e){"@babel/helpers - typeof";return Yi=typeof Symbol=="function"&&typeof Symbol.iterator=="symbol"?function(t){return typeof t}:function(t){return t&&typeof Symbol=="function"&&t.constructor===Symbol&&t!==Symbol.prototype?"symbol":typeof t},Yi(e)}function Pm(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter(function(i){return Object.getOwnPropertyDescriptor(e,i).enumerable})),n.push.apply(n,r)}return n}function Am(e){for(var t=1;t<arguments.length;t++){var n=arguments[t]!=null?arguments[t]:{};t%2?Pm(Object(n),!0).forEach(function(r){A0(e,r,n[r])}):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):Pm(Object(n)).forEach(function(r){Object.defineProperty(e,r,Object.getOwnPropertyDescriptor(n,r))})}return e}function gT(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}function xT(e,t){for(var n=0;n<t.length;n++){var r=t[n];r.enumerable=r.enumerable||!1,r.configurable=!0,"value"in r&&(r.writable=!0),Object.defineProperty(e,R6(r.key),r)}}function bT(e,t,n){return t&&xT(e.prototype,t),Object.defineProperty(e,"prototype",{writable:!1}),e}function wT(e,t,n){return t=ec(t),kT(e,F6()?Reflect.construct(t,n||[],ec(e).constructor):t.apply(e,n))}function kT(e,t){if(t&&(Yi(t)==="object"||typeof t=="function"))return t;if(t!==void 0)throw new TypeError("Derived constructors may only return object or undefined");return ST(e)}function ST(e){if(e===void 0)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return e}function F6(){try{var e=!Boolean.prototype.valueOf.call(Reflect.construct(Boolean,[],function(){}))}catch{}return(F6=function(){return!!e})()}function ec(e){return ec=Object.setPrototypeOf?Object.getPrototypeOf.bind():function(n){return n.__proto__||Object.getPrototypeOf(n)},ec(e)}function _T(e,t){if(typeof t!="function"&&t!==null)throw new TypeError("Super expression must either be null or a function");e.prototype=Object.create(t&&t.prototype,{constructor:{value:e,writable:!0,configurable:!0}}),Object.defineProperty(e,"prototype",{writable:!1}),t&&u1(e,t)}function u1(e,t){return u1=Object.setPrototypeOf?Object.setPrototypeOf.bind():function(r,i){return r.__proto__=i,r},u1(e,t)}function A0(e,t,n){return t=R6(t),t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function R6(e){var t=jT(e,"string");return Yi(t)=="symbol"?t:t+""}function jT(e,t){if(Yi(e)!="object"||!e)return e;var n=e[Symbol.toPrimitive];if(n!==void 0){var r=n.call(e,t);if(Yi(r)!="object")return r;throw new TypeError("@@toPrimitive must return a primitive value.")}return String(e)}function OT(e){return e.dataKey}function PT(e,t){return z.isValidElement(e)?z.cloneElement(e,t):typeof e=="function"?z.createElement(e,t):z.createElement(tT,t)}var tn=function(e){function t(){return gT(this,t),wT(this,t,arguments)}return _T(t,e),bT(t,[{key:"render",value:function(){var r=this,i=this.props,a=i.active,l=i.allowEscapeViewBox,o=i.animationDuration,s=i.animationEasing,u=i.content,f=i.coordinate,d=i.filterNull,p=i.isAnimationActive,h=i.offset,b=i.payload,v=i.payloadUniqBy,w=i.position,y=i.reverseDirection,m=i.useTranslate3d,g=i.viewBox,S=i.wrapperStyle,x=b??[];d&&x.length&&(x=N6(b.filter(function(_){return _.value!=null&&(_.hide!==!0||r.props.includeHidden)}),v,OT));var k=x.length>0;return z.createElement(yT,{allowEscapeViewBox:l,animationDuration:o,animationEasing:s,isAnimationActive:p,active:a,coordinate:f,hasPayload:k,offset:h,position:w,reverseDirection:y,useTranslate3d:m,viewBox:g,wrapperStyle:S},PT(u,Am(Am({},this.props),{},{payload:x})))}}])}(N.PureComponent);A0(tn,"displayName","Tooltip");A0(tn,"defaultProps",{accessibilityLayer:!1,allowEscapeViewBox:{x:!1,y:!1},animationDuration:400,animationEasing:"ease",contentStyle:{},coordinate:{x:0,y:0},cursor:!0,cursorStyle:{},filterNull:!0,isAnimationActive:!xo.isSsr,itemStyle:{},labelStyle:{},offset:10,reverseDirection:{x:!1,y:!1},separator:" : ",trigger:"hover",useTranslate3d:!1,viewBox:{x:0,y:0,height:0,width:0},wrapperStyle:{}});var AT=_n,NT=function(){return AT.Date.now()},CT=NT,ET=/\s/;function MT(e){for(var t=e.length;t--&&ET.test(e.charAt(t)););return t}var TT=MT,$T=TT,zT=/^\s+/;function IT(e){return e&&e.slice(0,$T(e)+1).replace(zT,"")}var DT=IT,LT=DT,Nm=kr,FT=ya,Cm=NaN,RT=/^[-+]0x[0-9a-f]+$/i,BT=/^0b[01]+$/i,WT=/^0o[0-7]+$/i,UT=parseInt;function HT(e){if(typeof e=="number")return e;if(FT(e))return Cm;if(Nm(e)){var t=typeof e.valueOf=="function"?e.valueOf():e;e=Nm(t)?t+"":t}if(typeof e!="string")return e===0?e:+e;e=LT(e);var n=BT.test(e);return n||WT.test(e)?UT(e.slice(2),n?2:8):RT.test(e)?Cm:+e}var B6=HT,GT=kr,Ad=CT,Em=B6,VT="Expected a function",XT=Math.max,qT=Math.min;function KT(e,t,n){var r,i,a,l,o,s,u=0,f=!1,d=!1,p=!0;if(typeof e!="function")throw new TypeError(VT);t=Em(t)||0,GT(n)&&(f=!!n.leading,d="maxWait"in n,a=d?XT(Em(n.maxWait)||0,t):a,p="trailing"in n?!!n.trailing:p);function h(k){var _=r,j=i;return r=i=void 0,u=k,l=e.apply(j,_),l}function b(k){return u=k,o=setTimeout(y,t),f?h(k):l}function v(k){var _=k-s,j=k-u,O=t-_;return d?qT(O,a-j):O}function w(k){var _=k-s,j=k-u;return s===void 0||_>=t||_<0||d&&j>=a}function y(){var k=Ad();if(w(k))return m(k);o=setTimeout(y,v(k))}function m(k){return o=void 0,p&&r?h(k):(r=i=void 0,l)}function g(){o!==void 0&&clearTimeout(o),u=0,r=s=i=o=void 0}function S(){return o===void 0?l:m(Ad())}function x(){var k=Ad(),_=w(k);if(r=arguments,i=this,s=k,_){if(o===void 0)return b(s);if(d)return clearTimeout(o),o=setTimeout(y,t),h(s)}return o===void 0&&(o=setTimeout(y,t)),l}return x.cancel=g,x.flush=S,x}var YT=KT,ZT=YT,QT=kr,JT="Expected a function";function e$(e,t,n){var r=!0,i=!0;if(typeof e!="function")throw new TypeError(JT);return QT(n)&&(r="leading"in n?!!n.leading:r,i="trailing"in n?!!n.trailing:i),ZT(e,t,{leading:r,maxWait:t,trailing:i})}var t$=e$;const W6=ke(t$);function El(e){"@babel/helpers - typeof";return El=typeof Symbol=="function"&&typeof Symbol.iterator=="symbol"?function(t){return typeof t}:function(t){return t&&typeof Symbol=="function"&&t.constructor===Symbol&&t!==Symbol.prototype?"symbol":typeof t},El(e)}function Mm(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter(function(i){return Object.getOwnPropertyDescriptor(e,i).enumerable})),n.push.apply(n,r)}return n}function Xo(e){for(var t=1;t<arguments.length;t++){var n=arguments[t]!=null?arguments[t]:{};t%2?Mm(Object(n),!0).forEach(function(r){n$(e,r,n[r])}):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):Mm(Object(n)).forEach(function(r){Object.defineProperty(e,r,Object.getOwnPropertyDescriptor(n,r))})}return e}function n$(e,t,n){return t=r$(t),t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function r$(e){var t=i$(e,"string");return El(t)=="symbol"?t:t+""}function i$(e,t){if(El(e)!="object"||!e)return e;var n=e[Symbol.toPrimitive];if(n!==void 0){var r=n.call(e,t);if(El(r)!="object")return r;throw new TypeError("@@toPrimitive must return a primitive value.")}return(t==="string"?String:Number)(e)}function a$(e,t){return c$(e)||s$(e,t)||o$(e,t)||l$()}function l$(){throw new TypeError(`Invalid attempt to destructure non-iterable instance.
In order to be iterable, non-array objects must have a [Symbol.iterator]() method.`)}function o$(e,t){if(e){if(typeof e=="string")return Tm(e,t);var n=Object.prototype.toString.call(e).slice(8,-1);if(n==="Object"&&e.constructor&&(n=e.constructor.name),n==="Map"||n==="Set")return Array.from(e);if(n==="Arguments"||/^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n))return Tm(e,t)}}function Tm(e,t){(t==null||t>e.length)&&(t=e.length);for(var n=0,r=new Array(t);n<t;n++)r[n]=e[n];return r}function s$(e,t){var n=e==null?null:typeof Symbol<"u"&&e[Symbol.iterator]||e["@@iterator"];if(n!=null){var r,i,a,l,o=[],s=!0,u=!1;try{if(a=(n=n.call(e)).next,t!==0)for(;!(s=(r=a.call(n)).done)&&(o.push(r.value),o.length!==t);s=!0);}catch(f){u=!0,i=f}finally{try{if(!s&&n.return!=null&&(l=n.return(),Object(l)!==l))return}finally{if(u)throw i}}return o}}function c$(e){if(Array.isArray(e))return e}var $m=N.forwardRef(function(e,t){var n=e.aspect,r=e.initialDimension,i=r===void 0?{width:-1,height:-1}:r,a=e.width,l=a===void 0?"100%":a,o=e.height,s=o===void 0?"100%":o,u=e.minWidth,f=u===void 0?0:u,d=e.minHeight,p=e.maxHeight,h=e.children,b=e.debounce,v=b===void 0?0:b,w=e.id,y=e.className,m=e.onResize,g=e.style,S=g===void 0?{}:g,x=N.useRef(null),k=N.useRef();k.current=m,N.useImperativeHandle(t,function(){return Object.defineProperty(x.current,"current",{get:function(){return console.warn("The usage of ref.current.current is deprecated and will no longer be supported."),x.current},configurable:!0})});var _=N.useState({containerWidth:i.width,containerHeight:i.height}),j=a$(_,2),O=j[0],M=j[1],E=N.useCallback(function(P,$){M(function(C){var I=Math.round(P),L=Math.round($);return C.containerWidth===I&&C.containerHeight===L?C:{containerWidth:I,containerHeight:L}})},[]);N.useEffect(function(){var P=function(D){var R,H=D[0].contentRect,B=H.width,K=H.height;E(B,K),(R=k.current)===null||R===void 0||R.call(k,B,K)};v>0&&(P=W6(P,v,{trailing:!0,leading:!1}));var $=new ResizeObserver(P),C=x.current.getBoundingClientRect(),I=C.width,L=C.height;return E(I,L),$.observe(x.current),function(){$.disconnect()}},[E,v]);var A=N.useMemo(function(){var P=O.containerWidth,$=O.containerHeight;if(P<0||$<0)return null;zn(Lr(l)||Lr(s),`The width(%s) and height(%s) are both fixed numbers,
       maybe you don't need to use a ResponsiveContainer.`,l,s),zn(!n||n>0,"The aspect(%s) must be greater than zero.",n);var C=Lr(l)?P:l,I=Lr(s)?$:s;n&&n>0&&(C?I=C/n:I&&(C=I*n),p&&I>p&&(I=p)),zn(C>0||I>0,`The width(%s) and height(%s) of chart should be greater than 0,
       please check the style of container, or the props width(%s) and height(%s),
       or add a minWidth(%s) or minHeight(%s) or use aspect(%s) to control the
       height and width.`,C,I,l,s,f,d,n);var L=!Array.isArray(h)&&$n(h.type).endsWith("Chart");return z.Children.map(h,function(T){return z.isValidElement(T)?N.cloneElement(T,Xo({width:C,height:I},L?{style:Xo({height:"100%",width:"100%",maxHeight:I,maxWidth:C},T.props.style)}:{})):T})},[n,h,s,p,d,f,O,l]);return z.createElement("div",{id:w?"".concat(w):void 0,className:de("recharts-responsive-container",y),style:Xo(Xo({},S),{},{width:l,height:s,minWidth:f,minHeight:d,maxHeight:p}),ref:x},A)}),U6=function(t){return null};U6.displayName="Cell";function Ml(e){"@babel/helpers - typeof";return Ml=typeof Symbol=="function"&&typeof Symbol.iterator=="symbol"?function(t){return typeof t}:function(t){return t&&typeof Symbol=="function"&&t.constructor===Symbol&&t!==Symbol.prototype?"symbol":typeof t},Ml(e)}function zm(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter(function(i){return Object.getOwnPropertyDescriptor(e,i).enumerable})),n.push.apply(n,r)}return n}function d1(e){for(var t=1;t<arguments.length;t++){var n=arguments[t]!=null?arguments[t]:{};t%2?zm(Object(n),!0).forEach(function(r){u$(e,r,n[r])}):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):zm(Object(n)).forEach(function(r){Object.defineProperty(e,r,Object.getOwnPropertyDescriptor(n,r))})}return e}function u$(e,t,n){return t=d$(t),t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function d$(e){var t=f$(e,"string");return Ml(t)=="symbol"?t:t+""}function f$(e,t){if(Ml(e)!="object"||!e)return e;var n=e[Symbol.toPrimitive];if(n!==void 0){var r=n.call(e,t);if(Ml(r)!="object")return r;throw new TypeError("@@toPrimitive must return a primitive value.")}return(t==="string"?String:Number)(e)}var fi={widthCache:{},cacheCount:0},p$=2e3,h$={position:"absolute",top:"-20000px",left:0,padding:0,margin:0,border:"none",whiteSpace:"pre"},Im="recharts_measurement_span";function m$(e){var t=d1({},e);return Object.keys(t).forEach(function(n){t[n]||delete t[n]}),t}var ll=function(t){var n=arguments.length>1&&arguments[1]!==void 0?arguments[1]:{};if(t==null||xo.isSsr)return{width:0,height:0};var r=m$(n),i=JSON.stringify({text:t,copyStyle:r});if(fi.widthCache[i])return fi.widthCache[i];try{var a=document.getElementById(Im);a||(a=document.createElement("span"),a.setAttribute("id",Im),a.setAttribute("aria-hidden","true"),document.body.appendChild(a));var l=d1(d1({},h$),r);Object.assign(a.style,l),a.textContent="".concat(t);var o=a.getBoundingClientRect(),s={width:o.width,height:o.height};return fi.widthCache[i]=s,++fi.cacheCount>p$&&(fi.cacheCount=0,fi.widthCache={}),s}catch{return{width:0,height:0}}},y$=function(t){return{top:t.top+window.scrollY-document.documentElement.clientTop,left:t.left+window.scrollX-document.documentElement.clientLeft}};function Tl(e){"@babel/helpers - typeof";return Tl=typeof Symbol=="function"&&typeof Symbol.iterator=="symbol"?function(t){return typeof t}:function(t){return t&&typeof Symbol=="function"&&t.constructor===Symbol&&t!==Symbol.prototype?"symbol":typeof t},Tl(e)}function tc(e,t){return b$(e)||x$(e,t)||g$(e,t)||v$()}function v$(){throw new TypeError(`Invalid attempt to destructure non-iterable instance.
In order to be iterable, non-array objects must have a [Symbol.iterator]() method.`)}function g$(e,t){if(e){if(typeof e=="string")return Dm(e,t);var n=Object.prototype.toString.call(e).slice(8,-1);if(n==="Object"&&e.constructor&&(n=e.constructor.name),n==="Map"||n==="Set")return Array.from(e);if(n==="Arguments"||/^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n))return Dm(e,t)}}function Dm(e,t){(t==null||t>e.length)&&(t=e.length);for(var n=0,r=new Array(t);n<t;n++)r[n]=e[n];return r}function x$(e,t){var n=e==null?null:typeof Symbol<"u"&&e[Symbol.iterator]||e["@@iterator"];if(n!=null){var r,i,a,l,o=[],s=!0,u=!1;try{if(a=(n=n.call(e)).next,t===0){if(Object(n)!==n)return;s=!1}else for(;!(s=(r=a.call(n)).done)&&(o.push(r.value),o.length!==t);s=!0);}catch(f){u=!0,i=f}finally{try{if(!s&&n.return!=null&&(l=n.return(),Object(l)!==l))return}finally{if(u)throw i}}return o}}function b$(e){if(Array.isArray(e))return e}function w$(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}function Lm(e,t){for(var n=0;n<t.length;n++){var r=t[n];r.enumerable=r.enumerable||!1,r.configurable=!0,"value"in r&&(r.writable=!0),Object.defineProperty(e,S$(r.key),r)}}function k$(e,t,n){return t&&Lm(e.prototype,t),n&&Lm(e,n),Object.defineProperty(e,"prototype",{writable:!1}),e}function S$(e){var t=_$(e,"string");return Tl(t)=="symbol"?t:t+""}function _$(e,t){if(Tl(e)!="object"||!e)return e;var n=e[Symbol.toPrimitive];if(n!==void 0){var r=n.call(e,t);if(Tl(r)!="object")return r;throw new TypeError("@@toPrimitive must return a primitive value.")}return String(e)}var Fm=/(-?\d+(?:\.\d+)?[a-zA-Z%]*)([*/])(-?\d+(?:\.\d+)?[a-zA-Z%]*)/,Rm=/(-?\d+(?:\.\d+)?[a-zA-Z%]*)([+-])(-?\d+(?:\.\d+)?[a-zA-Z%]*)/,j$=/^px|cm|vh|vw|em|rem|%|mm|in|pt|pc|ex|ch|vmin|vmax|Q$/,O$=/(-?\d+(?:\.\d+)?)([a-zA-Z%]+)?/,H6={cm:96/2.54,mm:96/25.4,pt:96/72,pc:96/6,in:96,Q:96/(2.54*40),px:1},P$=Object.keys(H6),Pi="NaN";function A$(e,t){return e*H6[t]}var qo=function(){function e(t,n){w$(this,e),this.num=t,this.unit=n,this.num=t,this.unit=n,Number.isNaN(t)&&(this.unit=""),n!==""&&!j$.test(n)&&(this.num=NaN,this.unit=""),P$.includes(n)&&(this.num=A$(t,n),this.unit="px")}return k$(e,[{key:"add",value:function(n){return this.unit!==n.unit?new e(NaN,""):new e(this.num+n.num,this.unit)}},{key:"subtract",value:function(n){return this.unit!==n.unit?new e(NaN,""):new e(this.num-n.num,this.unit)}},{key:"multiply",value:function(n){return this.unit!==""&&n.unit!==""&&this.unit!==n.unit?new e(NaN,""):new e(this.num*n.num,this.unit||n.unit)}},{key:"divide",value:function(n){return this.unit!==""&&n.unit!==""&&this.unit!==n.unit?new e(NaN,""):new e(this.num/n.num,this.unit||n.unit)}},{key:"toString",value:function(){return"".concat(this.num).concat(this.unit)}},{key:"isNaN",value:function(){return Number.isNaN(this.num)}}],[{key:"parse",value:function(n){var r,i=(r=O$.exec(n))!==null&&r!==void 0?r:[],a=tc(i,3),l=a[1],o=a[2];return new e(parseFloat(l),o??"")}}])}();function G6(e){if(e.includes(Pi))return Pi;for(var t=e;t.includes("*")||t.includes("/");){var n,r=(n=Fm.exec(t))!==null&&n!==void 0?n:[],i=tc(r,4),a=i[1],l=i[2],o=i[3],s=qo.parse(a??""),u=qo.parse(o??""),f=l==="*"?s.multiply(u):s.divide(u);if(f.isNaN())return Pi;t=t.replace(Fm,f.toString())}for(;t.includes("+")||/.-\d+(?:\.\d+)?/.test(t);){var d,p=(d=Rm.exec(t))!==null&&d!==void 0?d:[],h=tc(p,4),b=h[1],v=h[2],w=h[3],y=qo.parse(b??""),m=qo.parse(w??""),g=v==="+"?y.add(m):y.subtract(m);if(g.isNaN())return Pi;t=t.replace(Rm,g.toString())}return t}var Bm=/\(([^()]*)\)/;function N$(e){for(var t=e;t.includes("(");){var n=Bm.exec(t),r=tc(n,2),i=r[1];t=t.replace(Bm,G6(i))}return t}function C$(e){var t=e.replace(/\s+/g,"");return t=N$(t),t=G6(t),t}function E$(e){try{return C$(e)}catch{return Pi}}function Nd(e){var t=E$(e.slice(5,-1));return t===Pi?"":t}var M$=["x","y","lineHeight","capHeight","scaleToFit","textAnchor","verticalAnchor","fill"],T$=["dx","dy","angle","className","breakAll"];function f1(){return f1=Object.assign?Object.assign.bind():function(e){for(var t=1;t<arguments.length;t++){var n=arguments[t];for(var r in n)Object.prototype.hasOwnProperty.call(n,r)&&(e[r]=n[r])}return e},f1.apply(this,arguments)}function Wm(e,t){if(e==null)return{};var n=$$(e,t),r,i;if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);for(i=0;i<a.length;i++)r=a[i],!(t.indexOf(r)>=0)&&Object.prototype.propertyIsEnumerable.call(e,r)&&(n[r]=e[r])}return n}function $$(e,t){if(e==null)return{};var n={};for(var r in e)if(Object.prototype.hasOwnProperty.call(e,r)){if(t.indexOf(r)>=0)continue;n[r]=e[r]}return n}function Um(e,t){return L$(e)||D$(e,t)||I$(e,t)||z$()}function z$(){throw new TypeError(`Invalid attempt to destructure non-iterable instance.
In order to be iterable, non-array objects must have a [Symbol.iterator]() method.`)}function I$(e,t){if(e){if(typeof e=="string")return Hm(e,t);var n=Object.prototype.toString.call(e).slice(8,-1);if(n==="Object"&&e.constructor&&(n=e.constructor.name),n==="Map"||n==="Set")return Array.from(e);if(n==="Arguments"||/^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n))return Hm(e,t)}}function Hm(e,t){(t==null||t>e.length)&&(t=e.length);for(var n=0,r=new Array(t);n<t;n++)r[n]=e[n];return r}function D$(e,t){var n=e==null?null:typeof Symbol<"u"&&e[Symbol.iterator]||e["@@iterator"];if(n!=null){var r,i,a,l,o=[],s=!0,u=!1;try{if(a=(n=n.call(e)).next,t===0){if(Object(n)!==n)return;s=!1}else for(;!(s=(r=a.call(n)).done)&&(o.push(r.value),o.length!==t);s=!0);}catch(f){u=!0,i=f}finally{try{if(!s&&n.return!=null&&(l=n.return(),Object(l)!==l))return}finally{if(u)throw i}}return o}}function L$(e){if(Array.isArray(e))return e}var V6=/[ \f\n\r\t\v\u2028\u2029]+/,X6=function(t){var n=t.children,r=t.breakAll,i=t.style;try{var a=[];fe(n)||(r?a=n.toString().split(""):a=n.toString().split(V6));var l=a.map(function(s){return{word:s,width:ll(s,i).width}}),o=r?0:ll(" ",i).width;return{wordsWithComputedWidth:l,spaceWidth:o}}catch{return null}},F$=function(t,n,r,i,a){var l=t.maxLines,o=t.children,s=t.style,u=t.breakAll,f=G(l),d=o,p=function(){var C=arguments.length>0&&arguments[0]!==void 0?arguments[0]:[];return C.reduce(function(I,L){var T=L.word,D=L.width,R=I[I.length-1];if(R&&(i==null||a||R.width+D+r<Number(i)))R.words.push(T),R.width+=D+r;else{var H={words:[T],width:D};I.push(H)}return I},[])},h=p(n),b=function(C){return C.reduce(function(I,L){return I.width>L.width?I:L})};if(!f)return h;for(var v="…",w=function(C){var I=d.slice(0,C),L=X6({breakAll:u,style:s,children:I+v}).wordsWithComputedWidth,T=p(L),D=T.length>l||b(T).width>Number(i);return[D,T]},y=0,m=d.length-1,g=0,S;y<=m&&g<=d.length-1;){var x=Math.floor((y+m)/2),k=x-1,_=w(k),j=Um(_,2),O=j[0],M=j[1],E=w(x),A=Um(E,1),P=A[0];if(!O&&!P&&(y=x+1),O&&P&&(m=x-1),!O&&P){S=M;break}g++}return S||h},Gm=function(t){var n=fe(t)?[]:t.toString().split(V6);return[{words:n}]},R$=function(t){var n=t.width,r=t.scaleToFit,i=t.children,a=t.style,l=t.breakAll,o=t.maxLines;if((n||r)&&!xo.isSsr){var s,u,f=X6({breakAll:l,children:i,style:a});if(f){var d=f.wordsWithComputedWidth,p=f.spaceWidth;s=d,u=p}else return Gm(i);return F$({breakAll:l,children:i,maxLines:o,style:a},s,u,n,r)}return Gm(i)},Vm="#808080",nc=function(t){var n=t.x,r=n===void 0?0:n,i=t.y,a=i===void 0?0:i,l=t.lineHeight,o=l===void 0?"1em":l,s=t.capHeight,u=s===void 0?"0.71em":s,f=t.scaleToFit,d=f===void 0?!1:f,p=t.textAnchor,h=p===void 0?"start":p,b=t.verticalAnchor,v=b===void 0?"end":b,w=t.fill,y=w===void 0?Vm:w,m=Wm(t,M$),g=N.useMemo(function(){return R$({breakAll:m.breakAll,children:m.children,maxLines:m.maxLines,scaleToFit:d,style:m.style,width:m.width})},[m.breakAll,m.children,m.maxLines,d,m.style,m.width]),S=m.dx,x=m.dy,k=m.angle,_=m.className,j=m.breakAll,O=Wm(m,T$);if(!Ye(r)||!Ye(a))return null;var M=r+(G(S)?S:0),E=a+(G(x)?x:0),A;switch(v){case"start":A=Nd("calc(".concat(u,")"));break;case"middle":A=Nd("calc(".concat((g.length-1)/2," * -").concat(o," + (").concat(u," / 2))"));break;default:A=Nd("calc(".concat(g.length-1," * -").concat(o,")"));break}var P=[];if(d){var $=g[0].width,C=m.width;P.push("scale(".concat((G(C)?C/$:1)/$,")"))}return k&&P.push("rotate(".concat(k,", ").concat(M,", ").concat(E,")")),P.length&&(O.transform=P.join(" ")),z.createElement("text",f1({},ue(O,!0),{x:M,y:E,className:de("recharts-text",_),textAnchor:h,fill:y.includes("url")?Vm:y}),g.map(function(I,L){var T=I.words.join(j?"":" ");return z.createElement("tspan",{x:M,dy:L===0?A:o,key:"".concat(T,"-").concat(L)},T)}))};function mr(e,t){return e==null||t==null?NaN:e<t?-1:e>t?1:e>=t?0:NaN}function B$(e,t){return e==null||t==null?NaN:t<e?-1:t>e?1:t>=e?0:NaN}function N0(e){let t,n,r;e.length!==2?(t=mr,n=(o,s)=>mr(e(o),s),r=(o,s)=>e(o)-s):(t=e===mr||e===B$?e:W$,n=e,r=e);function i(o,s,u=0,f=o.length){if(u<f){if(t(s,s)!==0)return f;do{const d=u+f>>>1;n(o[d],s)<0?u=d+1:f=d}while(u<f)}return u}function a(o,s,u=0,f=o.length){if(u<f){if(t(s,s)!==0)return f;do{const d=u+f>>>1;n(o[d],s)<=0?u=d+1:f=d}while(u<f)}return u}function l(o,s,u=0,f=o.length){const d=i(o,s,u,f-1);return d>u&&r(o[d-1],s)>-r(o[d],s)?d-1:d}return{left:i,center:l,right:a}}function W$(){return 0}function q6(e){return e===null?NaN:+e}function*U$(e,t){for(let n of e)n!=null&&(n=+n)>=n&&(yield n)}const H$=N0(mr),bo=H$.right;N0(q6).center;class Xm extends Map{constructor(t,n=X$){if(super(),Object.defineProperties(this,{_intern:{value:new Map},_key:{value:n}}),t!=null)for(const[r,i]of t)this.set(r,i)}get(t){return super.get(qm(this,t))}has(t){return super.has(qm(this,t))}set(t,n){return super.set(G$(this,t),n)}delete(t){return super.delete(V$(this,t))}}function qm({_intern:e,_key:t},n){const r=t(n);return e.has(r)?e.get(r):n}function G$({_intern:e,_key:t},n){const r=t(n);return e.has(r)?e.get(r):(e.set(r,n),n)}function V$({_intern:e,_key:t},n){const r=t(n);return e.has(r)&&(n=e.get(r),e.delete(r)),n}function X$(e){return e!==null&&typeof e=="object"?e.valueOf():e}function q$(e=mr){if(e===mr)return K6;if(typeof e!="function")throw new TypeError("compare is not a function");return(t,n)=>{const r=e(t,n);return r||r===0?r:(e(n,n)===0)-(e(t,t)===0)}}function K6(e,t){return(e==null||!(e>=e))-(t==null||!(t>=t))||(e<t?-1:e>t?1:0)}const K$=Math.sqrt(50),Y$=Math.sqrt(10),Z$=Math.sqrt(2);function rc(e,t,n){const r=(t-e)/Math.max(0,n),i=Math.floor(Math.log10(r)),a=r/Math.pow(10,i),l=a>=K$?10:a>=Y$?5:a>=Z$?2:1;let o,s,u;return i<0?(u=Math.pow(10,-i)/l,o=Math.round(e*u),s=Math.round(t*u),o/u<e&&++o,s/u>t&&--s,u=-u):(u=Math.pow(10,i)*l,o=Math.round(e/u),s=Math.round(t/u),o*u<e&&++o,s*u>t&&--s),s<o&&.5<=n&&n<2?rc(e,t,n*2):[o,s,u]}function p1(e,t,n){if(t=+t,e=+e,n=+n,!(n>0))return[];if(e===t)return[e];const r=t<e,[i,a,l]=r?rc(t,e,n):rc(e,t,n);if(!(a>=i))return[];const o=a-i+1,s=new Array(o);if(r)if(l<0)for(let u=0;u<o;++u)s[u]=(a-u)/-l;else for(let u=0;u<o;++u)s[u]=(a-u)*l;else if(l<0)for(let u=0;u<o;++u)s[u]=(i+u)/-l;else for(let u=0;u<o;++u)s[u]=(i+u)*l;return s}function h1(e,t,n){return t=+t,e=+e,n=+n,rc(e,t,n)[2]}function m1(e,t,n){t=+t,e=+e,n=+n;const r=t<e,i=r?h1(t,e,n):h1(e,t,n);return(r?-1:1)*(i<0?1/-i:i)}function Km(e,t){let n;for(const r of e)r!=null&&(n<r||n===void 0&&r>=r)&&(n=r);return n}function Ym(e,t){let n;for(const r of e)r!=null&&(n>r||n===void 0&&r>=r)&&(n=r);return n}function Y6(e,t,n=0,r=1/0,i){if(t=Math.floor(t),n=Math.floor(Math.max(0,n)),r=Math.floor(Math.min(e.length-1,r)),!(n<=t&&t<=r))return e;for(i=i===void 0?K6:q$(i);r>n;){if(r-n>600){const s=r-n+1,u=t-n+1,f=Math.log(s),d=.5*Math.exp(2*f/3),p=.5*Math.sqrt(f*d*(s-d)/s)*(u-s/2<0?-1:1),h=Math.max(n,Math.floor(t-u*d/s+p)),b=Math.min(r,Math.floor(t+(s-u)*d/s+p));Y6(e,t,h,b,i)}const a=e[t];let l=n,o=r;for(La(e,n,t),i(e[r],a)>0&&La(e,n,r);l<o;){for(La(e,l,o),++l,--o;i(e[l],a)<0;)++l;for(;i(e[o],a)>0;)--o}i(e[n],a)===0?La(e,n,o):(++o,La(e,o,r)),o<=t&&(n=o+1),t<=o&&(r=o-1)}return e}function La(e,t,n){const r=e[t];e[t]=e[n],e[n]=r}function Q$(e,t,n){if(e=Float64Array.from(U$(e)),!(!(r=e.length)||isNaN(t=+t))){if(t<=0||r<2)return Ym(e);if(t>=1)return Km(e);var r,i=(r-1)*t,a=Math.floor(i),l=Km(Y6(e,a).subarray(0,a+1)),o=Ym(e.subarray(a+1));return l+(o-l)*(i-a)}}function J$(e,t,n=q6){if(!(!(r=e.length)||isNaN(t=+t))){if(t<=0||r<2)return+n(e[0],0,e);if(t>=1)return+n(e[r-1],r-1,e);var r,i=(r-1)*t,a=Math.floor(i),l=+n(e[a],a,e),o=+n(e[a+1],a+1,e);return l+(o-l)*(i-a)}}function ez(e,t,n){e=+e,t=+t,n=(i=arguments.length)<2?(t=e,e=0,1):i<3?1:+n;for(var r=-1,i=Math.max(0,Math.ceil((t-e)/n))|0,a=new Array(i);++r<i;)a[r]=e+r*n;return a}function Yt(e,t){switch(arguments.length){case 0:break;case 1:this.range(e);break;default:this.range(t).domain(e);break}return this}function Xn(e,t){switch(arguments.length){case 0:break;case 1:{typeof e=="function"?this.interpolator(e):this.range(e);break}default:{this.domain(e),typeof t=="function"?this.interpolator(t):this.range(t);break}}return this}const y1=Symbol("implicit");function C0(){var e=new Xm,t=[],n=[],r=y1;function i(a){let l=e.get(a);if(l===void 0){if(r!==y1)return r;e.set(a,l=t.push(a)-1)}return n[l%n.length]}return i.domain=function(a){if(!arguments.length)return t.slice();t=[],e=new Xm;for(const l of a)e.has(l)||e.set(l,t.push(l)-1);return i},i.range=function(a){return arguments.length?(n=Array.from(a),i):n.slice()},i.unknown=function(a){return arguments.length?(r=a,i):r},i.copy=function(){return C0(t,n).unknown(r)},Yt.apply(i,arguments),i}function $l(){var e=C0().unknown(void 0),t=e.domain,n=e.range,r=0,i=1,a,l,o=!1,s=0,u=0,f=.5;delete e.unknown;function d(){var p=t().length,h=i<r,b=h?i:r,v=h?r:i;a=(v-b)/Math.max(1,p-s+u*2),o&&(a=Math.floor(a)),b+=(v-b-a*(p-s))*f,l=a*(1-s),o&&(b=Math.round(b),l=Math.round(l));var w=ez(p).map(function(y){return b+a*y});return n(h?w.reverse():w)}return e.domain=function(p){return arguments.length?(t(p),d()):t()},e.range=function(p){return arguments.length?([r,i]=p,r=+r,i=+i,d()):[r,i]},e.rangeRound=function(p){return[r,i]=p,r=+r,i=+i,o=!0,d()},e.bandwidth=function(){return l},e.step=function(){return a},e.round=function(p){return arguments.length?(o=!!p,d()):o},e.padding=function(p){return arguments.length?(s=Math.min(1,u=+p),d()):s},e.paddingInner=function(p){return arguments.length?(s=Math.min(1,p),d()):s},e.paddingOuter=function(p){return arguments.length?(u=+p,d()):u},e.align=function(p){return arguments.length?(f=Math.max(0,Math.min(1,p)),d()):f},e.copy=function(){return $l(t(),[r,i]).round(o).paddingInner(s).paddingOuter(u).align(f)},Yt.apply(d(),arguments)}function Z6(e){var t=e.copy;return e.padding=e.paddingOuter,delete e.paddingInner,delete e.paddingOuter,e.copy=function(){return Z6(t())},e}function ol(){return Z6($l.apply(null,arguments).paddingInner(1))}function E0(e,t,n){e.prototype=t.prototype=n,n.constructor=e}function Q6(e,t){var n=Object.create(e.prototype);for(var r in t)n[r]=t[r];return n}function wo(){}var zl=.7,ic=1/zl,Di="\\s*([+-]?\\d+)\\s*",Il="\\s*([+-]?(?:\\d*\\.)?\\d+(?:[eE][+-]?\\d+)?)\\s*",bn="\\s*([+-]?(?:\\d*\\.)?\\d+(?:[eE][+-]?\\d+)?)%\\s*",tz=/^#([0-9a-f]{3,8})$/,nz=new RegExp(`^rgb\\(${Di},${Di},${Di}\\)$`),rz=new RegExp(`^rgb\\(${bn},${bn},${bn}\\)$`),iz=new RegExp(`^rgba\\(${Di},${Di},${Di},${Il}\\)$`),az=new RegExp(`^rgba\\(${bn},${bn},${bn},${Il}\\)$`),lz=new RegExp(`^hsl\\(${Il},${bn},${bn}\\)$`),oz=new RegExp(`^hsla\\(${Il},${bn},${bn},${Il}\\)$`),Zm={aliceblue:15792383,antiquewhite:16444375,aqua:65535,aquamarine:8388564,azure:15794175,beige:16119260,bisque:16770244,black:0,blanchedalmond:16772045,blue:255,blueviolet:9055202,brown:10824234,burlywood:14596231,cadetblue:6266528,chartreuse:8388352,chocolate:13789470,coral:16744272,cornflowerblue:6591981,cornsilk:16775388,crimson:14423100,cyan:65535,darkblue:139,darkcyan:35723,darkgoldenrod:12092939,darkgray:11119017,darkgreen:25600,darkgrey:11119017,darkkhaki:12433259,darkmagenta:9109643,darkolivegreen:5597999,darkorange:16747520,darkorchid:10040012,darkred:9109504,darksalmon:15308410,darkseagreen:9419919,darkslateblue:4734347,darkslategray:3100495,darkslategrey:3100495,darkturquoise:52945,darkviolet:9699539,deeppink:16716947,deepskyblue:49151,dimgray:6908265,dimgrey:6908265,dodgerblue:2003199,firebrick:11674146,floralwhite:16775920,forestgreen:2263842,fuchsia:16711935,gainsboro:14474460,ghostwhite:16316671,gold:16766720,goldenrod:14329120,gray:8421504,green:32768,greenyellow:11403055,grey:8421504,honeydew:15794160,hotpink:16738740,indianred:13458524,indigo:4915330,ivory:16777200,khaki:15787660,lavender:15132410,lavenderblush:16773365,lawngreen:8190976,lemonchiffon:16775885,lightblue:11393254,lightcoral:15761536,lightcyan:14745599,lightgoldenrodyellow:16448210,lightgray:13882323,lightgreen:9498256,lightgrey:13882323,lightpink:16758465,lightsalmon:16752762,lightseagreen:2142890,lightskyblue:8900346,lightslategray:7833753,lightslategrey:7833753,lightsteelblue:11584734,lightyellow:16777184,lime:65280,limegreen:3329330,linen:16445670,magenta:16711935,maroon:8388608,mediumaquamarine:6737322,mediumblue:205,mediumorchid:12211667,mediumpurple:9662683,mediumseagreen:3978097,mediumslateblue:8087790,mediumspringgreen:64154,mediumturquoise:4772300,mediumvioletred:13047173,midnightblue:1644912,mintcream:16121850,mistyrose:16770273,moccasin:16770229,navajowhite:16768685,navy:128,oldlace:16643558,olive:8421376,olivedrab:7048739,orange:16753920,orangered:16729344,orchid:14315734,palegoldenrod:15657130,palegreen:10025880,paleturquoise:11529966,palevioletred:14381203,papayawhip:16773077,peachpuff:16767673,peru:13468991,pink:16761035,plum:14524637,powderblue:11591910,purple:8388736,rebeccapurple:6697881,red:16711680,rosybrown:12357519,royalblue:4286945,saddlebrown:9127187,salmon:16416882,sandybrown:16032864,seagreen:3050327,seashell:16774638,sienna:10506797,silver:12632256,skyblue:8900331,slateblue:6970061,slategray:7372944,slategrey:7372944,snow:16775930,springgreen:65407,steelblue:4620980,tan:13808780,teal:32896,thistle:14204888,tomato:16737095,turquoise:4251856,violet:15631086,wheat:16113331,white:16777215,whitesmoke:16119285,yellow:16776960,yellowgreen:10145074};E0(wo,Dl,{copy(e){return Object.assign(new this.constructor,this,e)},displayable(){return this.rgb().displayable()},hex:Qm,formatHex:Qm,formatHex8:sz,formatHsl:cz,formatRgb:Jm,toString:Jm});function Qm(){return this.rgb().formatHex()}function sz(){return this.rgb().formatHex8()}function cz(){return J6(this).formatHsl()}function Jm(){return this.rgb().formatRgb()}function Dl(e){var t,n;return e=(e+"").trim().toLowerCase(),(t=tz.exec(e))?(n=t[1].length,t=parseInt(t[1],16),n===6?e2(t):n===3?new St(t>>8&15|t>>4&240,t>>4&15|t&240,(t&15)<<4|t&15,1):n===8?Ko(t>>24&255,t>>16&255,t>>8&255,(t&255)/255):n===4?Ko(t>>12&15|t>>8&240,t>>8&15|t>>4&240,t>>4&15|t&240,((t&15)<<4|t&15)/255):null):(t=nz.exec(e))?new St(t[1],t[2],t[3],1):(t=rz.exec(e))?new St(t[1]*255/100,t[2]*255/100,t[3]*255/100,1):(t=iz.exec(e))?Ko(t[1],t[2],t[3],t[4]):(t=az.exec(e))?Ko(t[1]*255/100,t[2]*255/100,t[3]*255/100,t[4]):(t=lz.exec(e))?r2(t[1],t[2]/100,t[3]/100,1):(t=oz.exec(e))?r2(t[1],t[2]/100,t[3]/100,t[4]):Zm.hasOwnProperty(e)?e2(Zm[e]):e==="transparent"?new St(NaN,NaN,NaN,0):null}function e2(e){return new St(e>>16&255,e>>8&255,e&255,1)}function Ko(e,t,n,r){return r<=0&&(e=t=n=NaN),new St(e,t,n,r)}function uz(e){return e instanceof wo||(e=Dl(e)),e?(e=e.rgb(),new St(e.r,e.g,e.b,e.opacity)):new St}function v1(e,t,n,r){return arguments.length===1?uz(e):new St(e,t,n,r??1)}function St(e,t,n,r){this.r=+e,this.g=+t,this.b=+n,this.opacity=+r}E0(St,v1,Q6(wo,{brighter(e){return e=e==null?ic:Math.pow(ic,e),new St(this.r*e,this.g*e,this.b*e,this.opacity)},darker(e){return e=e==null?zl:Math.pow(zl,e),new St(this.r*e,this.g*e,this.b*e,this.opacity)},rgb(){return this},clamp(){return new St(Hr(this.r),Hr(this.g),Hr(this.b),ac(this.opacity))},displayable(){return-.5<=this.r&&this.r<255.5&&-.5<=this.g&&this.g<255.5&&-.5<=this.b&&this.b<255.5&&0<=this.opacity&&this.opacity<=1},hex:t2,formatHex:t2,formatHex8:dz,formatRgb:n2,toString:n2}));function t2(){return`#${Fr(this.r)}${Fr(this.g)}${Fr(this.b)}`}function dz(){return`#${Fr(this.r)}${Fr(this.g)}${Fr(this.b)}${Fr((isNaN(this.opacity)?1:this.opacity)*255)}`}function n2(){const e=ac(this.opacity);return`${e===1?"rgb(":"rgba("}${Hr(this.r)}, ${Hr(this.g)}, ${Hr(this.b)}${e===1?")":`, ${e})`}`}function ac(e){return isNaN(e)?1:Math.max(0,Math.min(1,e))}function Hr(e){return Math.max(0,Math.min(255,Math.round(e)||0))}function Fr(e){return e=Hr(e),(e<16?"0":"")+e.toString(16)}function r2(e,t,n,r){return r<=0?e=t=n=NaN:n<=0||n>=1?e=t=NaN:t<=0&&(e=NaN),new an(e,t,n,r)}function J6(e){if(e instanceof an)return new an(e.h,e.s,e.l,e.opacity);if(e instanceof wo||(e=Dl(e)),!e)return new an;if(e instanceof an)return e;e=e.rgb();var t=e.r/255,n=e.g/255,r=e.b/255,i=Math.min(t,n,r),a=Math.max(t,n,r),l=NaN,o=a-i,s=(a+i)/2;return o?(t===a?l=(n-r)/o+(n<r)*6:n===a?l=(r-t)/o+2:l=(t-n)/o+4,o/=s<.5?a+i:2-a-i,l*=60):o=s>0&&s<1?0:l,new an(l,o,s,e.opacity)}function fz(e,t,n,r){return arguments.length===1?J6(e):new an(e,t,n,r??1)}function an(e,t,n,r){this.h=+e,this.s=+t,this.l=+n,this.opacity=+r}E0(an,fz,Q6(wo,{brighter(e){return e=e==null?ic:Math.pow(ic,e),new an(this.h,this.s,this.l*e,this.opacity)},darker(e){return e=e==null?zl:Math.pow(zl,e),new an(this.h,this.s,this.l*e,this.opacity)},rgb(){var e=this.h%360+(this.h<0)*360,t=isNaN(e)||isNaN(this.s)?0:this.s,n=this.l,r=n+(n<.5?n:1-n)*t,i=2*n-r;return new St(Cd(e>=240?e-240:e+120,i,r),Cd(e,i,r),Cd(e<120?e+240:e-120,i,r),this.opacity)},clamp(){return new an(i2(this.h),Yo(this.s),Yo(this.l),ac(this.opacity))},displayable(){return(0<=this.s&&this.s<=1||isNaN(this.s))&&0<=this.l&&this.l<=1&&0<=this.opacity&&this.opacity<=1},formatHsl(){const e=ac(this.opacity);return`${e===1?"hsl(":"hsla("}${i2(this.h)}, ${Yo(this.s)*100}%, ${Yo(this.l)*100}%${e===1?")":`, ${e})`}`}}));function i2(e){return e=(e||0)%360,e<0?e+360:e}function Yo(e){return Math.max(0,Math.min(1,e||0))}function Cd(e,t,n){return(e<60?t+(n-t)*e/60:e<180?n:e<240?t+(n-t)*(240-e)/60:t)*255}const M0=e=>()=>e;function pz(e,t){return function(n){return e+n*t}}function hz(e,t,n){return e=Math.pow(e,n),t=Math.pow(t,n)-e,n=1/n,function(r){return Math.pow(e+r*t,n)}}function mz(e){return(e=+e)==1?eg:function(t,n){return n-t?hz(t,n,e):M0(isNaN(t)?n:t)}}function eg(e,t){var n=t-e;return n?pz(e,n):M0(isNaN(e)?t:e)}const a2=function e(t){var n=mz(t);function r(i,a){var l=n((i=v1(i)).r,(a=v1(a)).r),o=n(i.g,a.g),s=n(i.b,a.b),u=eg(i.opacity,a.opacity);return function(f){return i.r=l(f),i.g=o(f),i.b=s(f),i.opacity=u(f),i+""}}return r.gamma=e,r}(1);function yz(e,t){t||(t=[]);var n=e?Math.min(t.length,e.length):0,r=t.slice(),i;return function(a){for(i=0;i<n;++i)r[i]=e[i]*(1-a)+t[i]*a;return r}}function vz(e){return ArrayBuffer.isView(e)&&!(e instanceof DataView)}function gz(e,t){var n=t?t.length:0,r=e?Math.min(n,e.length):0,i=new Array(r),a=new Array(n),l;for(l=0;l<r;++l)i[l]=_a(e[l],t[l]);for(;l<n;++l)a[l]=t[l];return function(o){for(l=0;l<r;++l)a[l]=i[l](o);return a}}function xz(e,t){var n=new Date;return e=+e,t=+t,function(r){return n.setTime(e*(1-r)+t*r),n}}function lc(e,t){return e=+e,t=+t,function(n){return e*(1-n)+t*n}}function bz(e,t){var n={},r={},i;(e===null||typeof e!="object")&&(e={}),(t===null||typeof t!="object")&&(t={});for(i in t)i in e?n[i]=_a(e[i],t[i]):r[i]=t[i];return function(a){for(i in n)r[i]=n[i](a);return r}}var g1=/[-+]?(?:\d+\.?\d*|\.?\d+)(?:[eE][-+]?\d+)?/g,Ed=new RegExp(g1.source,"g");function wz(e){return function(){return e}}function kz(e){return function(t){return e(t)+""}}function Sz(e,t){var n=g1.lastIndex=Ed.lastIndex=0,r,i,a,l=-1,o=[],s=[];for(e=e+"",t=t+"";(r=g1.exec(e))&&(i=Ed.exec(t));)(a=i.index)>n&&(a=t.slice(n,a),o[l]?o[l]+=a:o[++l]=a),(r=r[0])===(i=i[0])?o[l]?o[l]+=i:o[++l]=i:(o[++l]=null,s.push({i:l,x:lc(r,i)})),n=Ed.lastIndex;return n<t.length&&(a=t.slice(n),o[l]?o[l]+=a:o[++l]=a),o.length<2?s[0]?kz(s[0].x):wz(t):(t=s.length,function(u){for(var f=0,d;f<t;++f)o[(d=s[f]).i]=d.x(u);return o.join("")})}function _a(e,t){var n=typeof t,r;return t==null||n==="boolean"?M0(t):(n==="number"?lc:n==="string"?(r=Dl(t))?(t=r,a2):Sz:t instanceof Dl?a2:t instanceof Date?xz:vz(t)?yz:Array.isArray(t)?gz:typeof t.valueOf!="function"&&typeof t.toString!="function"||isNaN(t)?bz:lc)(e,t)}function T0(e,t){return e=+e,t=+t,function(n){return Math.round(e*(1-n)+t*n)}}function _z(e,t){t===void 0&&(t=e,e=_a);for(var n=0,r=t.length-1,i=t[0],a=new Array(r<0?0:r);n<r;)a[n]=e(i,i=t[++n]);return function(l){var o=Math.max(0,Math.min(r-1,Math.floor(l*=r)));return a[o](l-o)}}function jz(e){return function(){return e}}function oc(e){return+e}var l2=[0,1];function vt(e){return e}function x1(e,t){return(t-=e=+e)?function(n){return(n-e)/t}:jz(isNaN(t)?NaN:.5)}function Oz(e,t){var n;return e>t&&(n=e,e=t,t=n),function(r){return Math.max(e,Math.min(t,r))}}function Pz(e,t,n){var r=e[0],i=e[1],a=t[0],l=t[1];return i<r?(r=x1(i,r),a=n(l,a)):(r=x1(r,i),a=n(a,l)),function(o){return a(r(o))}}function Az(e,t,n){var r=Math.min(e.length,t.length)-1,i=new Array(r),a=new Array(r),l=-1;for(e[r]<e[0]&&(e=e.slice().reverse(),t=t.slice().reverse());++l<r;)i[l]=x1(e[l],e[l+1]),a[l]=n(t[l],t[l+1]);return function(o){var s=bo(e,o,1,r)-1;return a[s](i[s](o))}}function ko(e,t){return t.domain(e.domain()).range(e.range()).interpolate(e.interpolate()).clamp(e.clamp()).unknown(e.unknown())}function _u(){var e=l2,t=l2,n=_a,r,i,a,l=vt,o,s,u;function f(){var p=Math.min(e.length,t.length);return l!==vt&&(l=Oz(e[0],e[p-1])),o=p>2?Az:Pz,s=u=null,d}function d(p){return p==null||isNaN(p=+p)?a:(s||(s=o(e.map(r),t,n)))(r(l(p)))}return d.invert=function(p){return l(i((u||(u=o(t,e.map(r),lc)))(p)))},d.domain=function(p){return arguments.length?(e=Array.from(p,oc),f()):e.slice()},d.range=function(p){return arguments.length?(t=Array.from(p),f()):t.slice()},d.rangeRound=function(p){return t=Array.from(p),n=T0,f()},d.clamp=function(p){return arguments.length?(l=p?!0:vt,f()):l!==vt},d.interpolate=function(p){return arguments.length?(n=p,f()):n},d.unknown=function(p){return arguments.length?(a=p,d):a},function(p,h){return r=p,i=h,f()}}function $0(){return _u()(vt,vt)}function Nz(e){return Math.abs(e=Math.round(e))>=1e21?e.toLocaleString("en").replace(/,/g,""):e.toString(10)}function sc(e,t){if((n=(e=t?e.toExponential(t-1):e.toExponential()).indexOf("e"))<0)return null;var n,r=e.slice(0,n);return[r.length>1?r[0]+r.slice(2):r,+e.slice(n+1)]}function Zi(e){return e=sc(Math.abs(e)),e?e[1]:NaN}function Cz(e,t){return function(n,r){for(var i=n.length,a=[],l=0,o=e[0],s=0;i>0&&o>0&&(s+o+1>r&&(o=Math.max(1,r-s)),a.push(n.substring(i-=o,i+o)),!((s+=o+1)>r));)o=e[l=(l+1)%e.length];return a.reverse().join(t)}}function Ez(e){return function(t){return t.replace(/[0-9]/g,function(n){return e[+n]})}}var Mz=/^(?:(.)?([<>=^]))?([+\-( ])?([$#])?(0)?(\d+)?(,)?(\.\d+)?(~)?([a-z%])?$/i;function Ll(e){if(!(t=Mz.exec(e)))throw new Error("invalid format: "+e);var t;return new z0({fill:t[1],align:t[2],sign:t[3],symbol:t[4],zero:t[5],width:t[6],comma:t[7],precision:t[8]&&t[8].slice(1),trim:t[9],type:t[10]})}Ll.prototype=z0.prototype;function z0(e){this.fill=e.fill===void 0?" ":e.fill+"",this.align=e.align===void 0?">":e.align+"",this.sign=e.sign===void 0?"-":e.sign+"",this.symbol=e.symbol===void 0?"":e.symbol+"",this.zero=!!e.zero,this.width=e.width===void 0?void 0:+e.width,this.comma=!!e.comma,this.precision=e.precision===void 0?void 0:+e.precision,this.trim=!!e.trim,this.type=e.type===void 0?"":e.type+""}z0.prototype.toString=function(){return this.fill+this.align+this.sign+this.symbol+(this.zero?"0":"")+(this.width===void 0?"":Math.max(1,this.width|0))+(this.comma?",":"")+(this.precision===void 0?"":"."+Math.max(0,this.precision|0))+(this.trim?"~":"")+this.type};function Tz(e){e:for(var t=e.length,n=1,r=-1,i;n<t;++n)switch(e[n]){case".":r=i=n;break;case"0":r===0&&(r=n),i=n;break;default:if(!+e[n])break e;r>0&&(r=0);break}return r>0?e.slice(0,r)+e.slice(i+1):e}var tg;function $z(e,t){var n=sc(e,t);if(!n)return e+"";var r=n[0],i=n[1],a=i-(tg=Math.max(-8,Math.min(8,Math.floor(i/3)))*3)+1,l=r.length;return a===l?r:a>l?r+new Array(a-l+1).join("0"):a>0?r.slice(0,a)+"."+r.slice(a):"0."+new Array(1-a).join("0")+sc(e,Math.max(0,t+a-1))[0]}function o2(e,t){var n=sc(e,t);if(!n)return e+"";var r=n[0],i=n[1];return i<0?"0."+new Array(-i).join("0")+r:r.length>i+1?r.slice(0,i+1)+"."+r.slice(i+1):r+new Array(i-r.length+2).join("0")}const s2={"%":(e,t)=>(e*100).toFixed(t),b:e=>Math.round(e).toString(2),c:e=>e+"",d:Nz,e:(e,t)=>e.toExponential(t),f:(e,t)=>e.toFixed(t),g:(e,t)=>e.toPrecision(t),o:e=>Math.round(e).toString(8),p:(e,t)=>o2(e*100,t),r:o2,s:$z,X:e=>Math.round(e).toString(16).toUpperCase(),x:e=>Math.round(e).toString(16)};function c2(e){return e}var u2=Array.prototype.map,d2=["y","z","a","f","p","n","µ","m","","k","M","G","T","P","E","Z","Y"];function zz(e){var t=e.grouping===void 0||e.thousands===void 0?c2:Cz(u2.call(e.grouping,Number),e.thousands+""),n=e.currency===void 0?"":e.currency[0]+"",r=e.currency===void 0?"":e.currency[1]+"",i=e.decimal===void 0?".":e.decimal+"",a=e.numerals===void 0?c2:Ez(u2.call(e.numerals,String)),l=e.percent===void 0?"%":e.percent+"",o=e.minus===void 0?"−":e.minus+"",s=e.nan===void 0?"NaN":e.nan+"";function u(d){d=Ll(d);var p=d.fill,h=d.align,b=d.sign,v=d.symbol,w=d.zero,y=d.width,m=d.comma,g=d.precision,S=d.trim,x=d.type;x==="n"?(m=!0,x="g"):s2[x]||(g===void 0&&(g=12),S=!0,x="g"),(w||p==="0"&&h==="=")&&(w=!0,p="0",h="=");var k=v==="$"?n:v==="#"&&/[boxX]/.test(x)?"0"+x.toLowerCase():"",_=v==="$"?r:/[%p]/.test(x)?l:"",j=s2[x],O=/[defgprs%]/.test(x);g=g===void 0?6:/[gprs]/.test(x)?Math.max(1,Math.min(21,g)):Math.max(0,Math.min(20,g));function M(E){var A=k,P=_,$,C,I;if(x==="c")P=j(E)+P,E="";else{E=+E;var L=E<0||1/E<0;if(E=isNaN(E)?s:j(Math.abs(E),g),S&&(E=Tz(E)),L&&+E==0&&b!=="+"&&(L=!1),A=(L?b==="("?b:o:b==="-"||b==="("?"":b)+A,P=(x==="s"?d2[8+tg/3]:"")+P+(L&&b==="("?")":""),O){for($=-1,C=E.length;++$<C;)if(I=E.charCodeAt($),48>I||I>57){P=(I===46?i+E.slice($+1):E.slice($))+P,E=E.slice(0,$);break}}}m&&!w&&(E=t(E,1/0));var T=A.length+E.length+P.length,D=T<y?new Array(y-T+1).join(p):"";switch(m&&w&&(E=t(D+E,D.length?y-P.length:1/0),D=""),h){case"<":E=A+E+P+D;break;case"=":E=A+D+E+P;break;case"^":E=D.slice(0,T=D.length>>1)+A+E+P+D.slice(T);break;default:E=D+A+E+P;break}return a(E)}return M.toString=function(){return d+""},M}function f(d,p){var h=u((d=Ll(d),d.type="f",d)),b=Math.max(-8,Math.min(8,Math.floor(Zi(p)/3)))*3,v=Math.pow(10,-b),w=d2[8+b/3];return function(y){return h(v*y)+w}}return{format:u,formatPrefix:f}}var Zo,I0,ng;Iz({thousands:",",grouping:[3],currency:["$",""]});function Iz(e){return Zo=zz(e),I0=Zo.format,ng=Zo.formatPrefix,Zo}function Dz(e){return Math.max(0,-Zi(Math.abs(e)))}function Lz(e,t){return Math.max(0,Math.max(-8,Math.min(8,Math.floor(Zi(t)/3)))*3-Zi(Math.abs(e)))}function Fz(e,t){return e=Math.abs(e),t=Math.abs(t)-e,Math.max(0,Zi(t)-Zi(e))+1}function rg(e,t,n,r){var i=m1(e,t,n),a;switch(r=Ll(r??",f"),r.type){case"s":{var l=Math.max(Math.abs(e),Math.abs(t));return r.precision==null&&!isNaN(a=Lz(i,l))&&(r.precision=a),ng(r,l)}case"":case"e":case"g":case"p":case"r":{r.precision==null&&!isNaN(a=Fz(i,Math.max(Math.abs(e),Math.abs(t))))&&(r.precision=a-(r.type==="e"));break}case"f":case"%":{r.precision==null&&!isNaN(a=Dz(i))&&(r.precision=a-(r.type==="%")*2);break}}return I0(r)}function _r(e){var t=e.domain;return e.ticks=function(n){var r=t();return p1(r[0],r[r.length-1],n??10)},e.tickFormat=function(n,r){var i=t();return rg(i[0],i[i.length-1],n??10,r)},e.nice=function(n){n==null&&(n=10);var r=t(),i=0,a=r.length-1,l=r[i],o=r[a],s,u,f=10;for(o<l&&(u=l,l=o,o=u,u=i,i=a,a=u);f-- >0;){if(u=h1(l,o,n),u===s)return r[i]=l,r[a]=o,t(r);if(u>0)l=Math.floor(l/u)*u,o=Math.ceil(o/u)*u;else if(u<0)l=Math.ceil(l*u)/u,o=Math.floor(o*u)/u;else break;s=u}return e},e}function cc(){var e=$0();return e.copy=function(){return ko(e,cc())},Yt.apply(e,arguments),_r(e)}function ig(e){var t;function n(r){return r==null||isNaN(r=+r)?t:r}return n.invert=n,n.domain=n.range=function(r){return arguments.length?(e=Array.from(r,oc),n):e.slice()},n.unknown=function(r){return arguments.length?(t=r,n):t},n.copy=function(){return ig(e).unknown(t)},e=arguments.length?Array.from(e,oc):[0,1],_r(n)}function ag(e,t){e=e.slice();var n=0,r=e.length-1,i=e[n],a=e[r],l;return a<i&&(l=n,n=r,r=l,l=i,i=a,a=l),e[n]=t.floor(i),e[r]=t.ceil(a),e}function f2(e){return Math.log(e)}function p2(e){return Math.exp(e)}function Rz(e){return-Math.log(-e)}function Bz(e){return-Math.exp(-e)}function Wz(e){return isFinite(e)?+("1e"+e):e<0?0:e}function Uz(e){return e===10?Wz:e===Math.E?Math.exp:t=>Math.pow(e,t)}function Hz(e){return e===Math.E?Math.log:e===10&&Math.log10||e===2&&Math.log2||(e=Math.log(e),t=>Math.log(t)/e)}function h2(e){return(t,n)=>-e(-t,n)}function D0(e){const t=e(f2,p2),n=t.domain;let r=10,i,a;function l(){return i=Hz(r),a=Uz(r),n()[0]<0?(i=h2(i),a=h2(a),e(Rz,Bz)):e(f2,p2),t}return t.base=function(o){return arguments.length?(r=+o,l()):r},t.domain=function(o){return arguments.length?(n(o),l()):n()},t.ticks=o=>{const s=n();let u=s[0],f=s[s.length-1];const d=f<u;d&&([u,f]=[f,u]);let p=i(u),h=i(f),b,v;const w=o==null?10:+o;let y=[];if(!(r%1)&&h-p<w){if(p=Math.floor(p),h=Math.ceil(h),u>0){for(;p<=h;++p)for(b=1;b<r;++b)if(v=p<0?b/a(-p):b*a(p),!(v<u)){if(v>f)break;y.push(v)}}else for(;p<=h;++p)for(b=r-1;b>=1;--b)if(v=p>0?b/a(-p):b*a(p),!(v<u)){if(v>f)break;y.push(v)}y.length*2<w&&(y=p1(u,f,w))}else y=p1(p,h,Math.min(h-p,w)).map(a);return d?y.reverse():y},t.tickFormat=(o,s)=>{if(o==null&&(o=10),s==null&&(s=r===10?"s":","),typeof s!="function"&&(!(r%1)&&(s=Ll(s)).precision==null&&(s.trim=!0),s=I0(s)),o===1/0)return s;const u=Math.max(1,r*o/t.ticks().length);return f=>{let d=f/a(Math.round(i(f)));return d*r<r-.5&&(d*=r),d<=u?s(f):""}},t.nice=()=>n(ag(n(),{floor:o=>a(Math.floor(i(o))),ceil:o=>a(Math.ceil(i(o)))})),t}function lg(){const e=D0(_u()).domain([1,10]);return e.copy=()=>ko(e,lg()).base(e.base()),Yt.apply(e,arguments),e}function m2(e){return function(t){return Math.sign(t)*Math.log1p(Math.abs(t/e))}}function y2(e){return function(t){return Math.sign(t)*Math.expm1(Math.abs(t))*e}}function L0(e){var t=1,n=e(m2(t),y2(t));return n.constant=function(r){return arguments.length?e(m2(t=+r),y2(t)):t},_r(n)}function og(){var e=L0(_u());return e.copy=function(){return ko(e,og()).constant(e.constant())},Yt.apply(e,arguments)}function v2(e){return function(t){return t<0?-Math.pow(-t,e):Math.pow(t,e)}}function Gz(e){return e<0?-Math.sqrt(-e):Math.sqrt(e)}function Vz(e){return e<0?-e*e:e*e}function F0(e){var t=e(vt,vt),n=1;function r(){return n===1?e(vt,vt):n===.5?e(Gz,Vz):e(v2(n),v2(1/n))}return t.exponent=function(i){return arguments.length?(n=+i,r()):n},_r(t)}function R0(){var e=F0(_u());return e.copy=function(){return ko(e,R0()).exponent(e.exponent())},Yt.apply(e,arguments),e}function Xz(){return R0.apply(null,arguments).exponent(.5)}function g2(e){return Math.sign(e)*e*e}function qz(e){return Math.sign(e)*Math.sqrt(Math.abs(e))}function sg(){var e=$0(),t=[0,1],n=!1,r;function i(a){var l=qz(e(a));return isNaN(l)?r:n?Math.round(l):l}return i.invert=function(a){return e.invert(g2(a))},i.domain=function(a){return arguments.length?(e.domain(a),i):e.domain()},i.range=function(a){return arguments.length?(e.range((t=Array.from(a,oc)).map(g2)),i):t.slice()},i.rangeRound=function(a){return i.range(a).round(!0)},i.round=function(a){return arguments.length?(n=!!a,i):n},i.clamp=function(a){return arguments.length?(e.clamp(a),i):e.clamp()},i.unknown=function(a){return arguments.length?(r=a,i):r},i.copy=function(){return sg(e.domain(),t).round(n).clamp(e.clamp()).unknown(r)},Yt.apply(i,arguments),_r(i)}function cg(){var e=[],t=[],n=[],r;function i(){var l=0,o=Math.max(1,t.length);for(n=new Array(o-1);++l<o;)n[l-1]=J$(e,l/o);return a}function a(l){return l==null||isNaN(l=+l)?r:t[bo(n,l)]}return a.invertExtent=function(l){var o=t.indexOf(l);return o<0?[NaN,NaN]:[o>0?n[o-1]:e[0],o<n.length?n[o]:e[e.length-1]]},a.domain=function(l){if(!arguments.length)return e.slice();e=[];for(let o of l)o!=null&&!isNaN(o=+o)&&e.push(o);return e.sort(mr),i()},a.range=function(l){return arguments.length?(t=Array.from(l),i()):t.slice()},a.unknown=function(l){return arguments.length?(r=l,a):r},a.quantiles=function(){return n.slice()},a.copy=function(){return cg().domain(e).range(t).unknown(r)},Yt.apply(a,arguments)}function ug(){var e=0,t=1,n=1,r=[.5],i=[0,1],a;function l(s){return s!=null&&s<=s?i[bo(r,s,0,n)]:a}function o(){var s=-1;for(r=new Array(n);++s<n;)r[s]=((s+1)*t-(s-n)*e)/(n+1);return l}return l.domain=function(s){return arguments.length?([e,t]=s,e=+e,t=+t,o()):[e,t]},l.range=function(s){return arguments.length?(n=(i=Array.from(s)).length-1,o()):i.slice()},l.invertExtent=function(s){var u=i.indexOf(s);return u<0?[NaN,NaN]:u<1?[e,r[0]]:u>=n?[r[n-1],t]:[r[u-1],r[u]]},l.unknown=function(s){return arguments.length&&(a=s),l},l.thresholds=function(){return r.slice()},l.copy=function(){return ug().domain([e,t]).range(i).unknown(a)},Yt.apply(_r(l),arguments)}function dg(){var e=[.5],t=[0,1],n,r=1;function i(a){return a!=null&&a<=a?t[bo(e,a,0,r)]:n}return i.domain=function(a){return arguments.length?(e=Array.from(a),r=Math.min(e.length,t.length-1),i):e.slice()},i.range=function(a){return arguments.length?(t=Array.from(a),r=Math.min(e.length,t.length-1),i):t.slice()},i.invertExtent=function(a){var l=t.indexOf(a);return[e[l-1],e[l]]},i.unknown=function(a){return arguments.length?(n=a,i):n},i.copy=function(){return dg().domain(e).range(t).unknown(n)},Yt.apply(i,arguments)}const Md=new Date,Td=new Date;function Ze(e,t,n,r){function i(a){return e(a=arguments.length===0?new Date:new Date(+a)),a}return i.floor=a=>(e(a=new Date(+a)),a),i.ceil=a=>(e(a=new Date(a-1)),t(a,1),e(a),a),i.round=a=>{const l=i(a),o=i.ceil(a);return a-l<o-a?l:o},i.offset=(a,l)=>(t(a=new Date(+a),l==null?1:Math.floor(l)),a),i.range=(a,l,o)=>{const s=[];if(a=i.ceil(a),o=o==null?1:Math.floor(o),!(a<l)||!(o>0))return s;let u;do s.push(u=new Date(+a)),t(a,o),e(a);while(u<a&&a<l);return s},i.filter=a=>Ze(l=>{if(l>=l)for(;e(l),!a(l);)l.setTime(l-1)},(l,o)=>{if(l>=l)if(o<0)for(;++o<=0;)for(;t(l,-1),!a(l););else for(;--o>=0;)for(;t(l,1),!a(l););}),n&&(i.count=(a,l)=>(Md.setTime(+a),Td.setTime(+l),e(Md),e(Td),Math.floor(n(Md,Td))),i.every=a=>(a=Math.floor(a),!isFinite(a)||!(a>0)?null:a>1?i.filter(r?l=>r(l)%a===0:l=>i.count(0,l)%a===0):i)),i}const uc=Ze(()=>{},(e,t)=>{e.setTime(+e+t)},(e,t)=>t-e);uc.every=e=>(e=Math.floor(e),!isFinite(e)||!(e>0)?null:e>1?Ze(t=>{t.setTime(Math.floor(t/e)*e)},(t,n)=>{t.setTime(+t+n*e)},(t,n)=>(n-t)/e):uc);uc.range;const Cn=1e3,Ut=Cn*60,En=Ut*60,Bn=En*24,B0=Bn*7,x2=Bn*30,$d=Bn*365,Rr=Ze(e=>{e.setTime(e-e.getMilliseconds())},(e,t)=>{e.setTime(+e+t*Cn)},(e,t)=>(t-e)/Cn,e=>e.getUTCSeconds());Rr.range;const W0=Ze(e=>{e.setTime(e-e.getMilliseconds()-e.getSeconds()*Cn)},(e,t)=>{e.setTime(+e+t*Ut)},(e,t)=>(t-e)/Ut,e=>e.getMinutes());W0.range;const U0=Ze(e=>{e.setUTCSeconds(0,0)},(e,t)=>{e.setTime(+e+t*Ut)},(e,t)=>(t-e)/Ut,e=>e.getUTCMinutes());U0.range;const H0=Ze(e=>{e.setTime(e-e.getMilliseconds()-e.getSeconds()*Cn-e.getMinutes()*Ut)},(e,t)=>{e.setTime(+e+t*En)},(e,t)=>(t-e)/En,e=>e.getHours());H0.range;const G0=Ze(e=>{e.setUTCMinutes(0,0,0)},(e,t)=>{e.setTime(+e+t*En)},(e,t)=>(t-e)/En,e=>e.getUTCHours());G0.range;const So=Ze(e=>e.setHours(0,0,0,0),(e,t)=>e.setDate(e.getDate()+t),(e,t)=>(t-e-(t.getTimezoneOffset()-e.getTimezoneOffset())*Ut)/Bn,e=>e.getDate()-1);So.range;const ju=Ze(e=>{e.setUTCHours(0,0,0,0)},(e,t)=>{e.setUTCDate(e.getUTCDate()+t)},(e,t)=>(t-e)/Bn,e=>e.getUTCDate()-1);ju.range;const fg=Ze(e=>{e.setUTCHours(0,0,0,0)},(e,t)=>{e.setUTCDate(e.getUTCDate()+t)},(e,t)=>(t-e)/Bn,e=>Math.floor(e/Bn));fg.range;function li(e){return Ze(t=>{t.setDate(t.getDate()-(t.getDay()+7-e)%7),t.setHours(0,0,0,0)},(t,n)=>{t.setDate(t.getDate()+n*7)},(t,n)=>(n-t-(n.getTimezoneOffset()-t.getTimezoneOffset())*Ut)/B0)}const Ou=li(0),dc=li(1),Kz=li(2),Yz=li(3),Qi=li(4),Zz=li(5),Qz=li(6);Ou.range;dc.range;Kz.range;Yz.range;Qi.range;Zz.range;Qz.range;function oi(e){return Ze(t=>{t.setUTCDate(t.getUTCDate()-(t.getUTCDay()+7-e)%7),t.setUTCHours(0,0,0,0)},(t,n)=>{t.setUTCDate(t.getUTCDate()+n*7)},(t,n)=>(n-t)/B0)}const Pu=oi(0),fc=oi(1),Jz=oi(2),eI=oi(3),Ji=oi(4),tI=oi(5),nI=oi(6);Pu.range;fc.range;Jz.range;eI.range;Ji.range;tI.range;nI.range;const V0=Ze(e=>{e.setDate(1),e.setHours(0,0,0,0)},(e,t)=>{e.setMonth(e.getMonth()+t)},(e,t)=>t.getMonth()-e.getMonth()+(t.getFullYear()-e.getFullYear())*12,e=>e.getMonth());V0.range;const X0=Ze(e=>{e.setUTCDate(1),e.setUTCHours(0,0,0,0)},(e,t)=>{e.setUTCMonth(e.getUTCMonth()+t)},(e,t)=>t.getUTCMonth()-e.getUTCMonth()+(t.getUTCFullYear()-e.getUTCFullYear())*12,e=>e.getUTCMonth());X0.range;const Wn=Ze(e=>{e.setMonth(0,1),e.setHours(0,0,0,0)},(e,t)=>{e.setFullYear(e.getFullYear()+t)},(e,t)=>t.getFullYear()-e.getFullYear(),e=>e.getFullYear());Wn.every=e=>!isFinite(e=Math.floor(e))||!(e>0)?null:Ze(t=>{t.setFullYear(Math.floor(t.getFullYear()/e)*e),t.setMonth(0,1),t.setHours(0,0,0,0)},(t,n)=>{t.setFullYear(t.getFullYear()+n*e)});Wn.range;const Un=Ze(e=>{e.setUTCMonth(0,1),e.setUTCHours(0,0,0,0)},(e,t)=>{e.setUTCFullYear(e.getUTCFullYear()+t)},(e,t)=>t.getUTCFullYear()-e.getUTCFullYear(),e=>e.getUTCFullYear());Un.every=e=>!isFinite(e=Math.floor(e))||!(e>0)?null:Ze(t=>{t.setUTCFullYear(Math.floor(t.getUTCFullYear()/e)*e),t.setUTCMonth(0,1),t.setUTCHours(0,0,0,0)},(t,n)=>{t.setUTCFullYear(t.getUTCFullYear()+n*e)});Un.range;function pg(e,t,n,r,i,a){const l=[[Rr,1,Cn],[Rr,5,5*Cn],[Rr,15,15*Cn],[Rr,30,30*Cn],[a,1,Ut],[a,5,5*Ut],[a,15,15*Ut],[a,30,30*Ut],[i,1,En],[i,3,3*En],[i,6,6*En],[i,12,12*En],[r,1,Bn],[r,2,2*Bn],[n,1,B0],[t,1,x2],[t,3,3*x2],[e,1,$d]];function o(u,f,d){const p=f<u;p&&([u,f]=[f,u]);const h=d&&typeof d.range=="function"?d:s(u,f,d),b=h?h.range(u,+f+1):[];return p?b.reverse():b}function s(u,f,d){const p=Math.abs(f-u)/d,h=N0(([,,w])=>w).right(l,p);if(h===l.length)return e.every(m1(u/$d,f/$d,d));if(h===0)return uc.every(Math.max(m1(u,f,d),1));const[b,v]=l[p/l[h-1][2]<l[h][2]/p?h-1:h];return b.every(v)}return[o,s]}const[rI,iI]=pg(Un,X0,Pu,fg,G0,U0),[aI,lI]=pg(Wn,V0,Ou,So,H0,W0);function zd(e){if(0<=e.y&&e.y<100){var t=new Date(-1,e.m,e.d,e.H,e.M,e.S,e.L);return t.setFullYear(e.y),t}return new Date(e.y,e.m,e.d,e.H,e.M,e.S,e.L)}function Id(e){if(0<=e.y&&e.y<100){var t=new Date(Date.UTC(-1,e.m,e.d,e.H,e.M,e.S,e.L));return t.setUTCFullYear(e.y),t}return new Date(Date.UTC(e.y,e.m,e.d,e.H,e.M,e.S,e.L))}function Fa(e,t,n){return{y:e,m:t,d:n,H:0,M:0,S:0,L:0}}function oI(e){var t=e.dateTime,n=e.date,r=e.time,i=e.periods,a=e.days,l=e.shortDays,o=e.months,s=e.shortMonths,u=Ra(i),f=Ba(i),d=Ra(a),p=Ba(a),h=Ra(l),b=Ba(l),v=Ra(o),w=Ba(o),y=Ra(s),m=Ba(s),g={a:L,A:T,b:D,B:R,c:null,d:j2,e:j2,f:CI,g:RI,G:WI,H:PI,I:AI,j:NI,L:hg,m:EI,M:MI,p:H,q:B,Q:A2,s:N2,S:TI,u:$I,U:zI,V:II,w:DI,W:LI,x:null,X:null,y:FI,Y:BI,Z:UI,"%":P2},S={a:K,A:te,b:pe,B:xe,c:null,d:O2,e:O2,f:XI,g:rD,G:aD,H:HI,I:GI,j:VI,L:yg,m:qI,M:KI,p:st,q:He,Q:A2,s:N2,S:YI,u:ZI,U:QI,V:JI,w:eD,W:tD,x:null,X:null,y:nD,Y:iD,Z:lD,"%":P2},x={a:M,A:E,b:A,B:P,c:$,d:S2,e:S2,f:SI,g:k2,G:w2,H:_2,I:_2,j:xI,L:kI,m:gI,M:bI,p:O,q:vI,Q:jI,s:OI,S:wI,u:fI,U:pI,V:hI,w:dI,W:mI,x:C,X:I,y:k2,Y:w2,Z:yI,"%":_I};g.x=k(n,g),g.X=k(r,g),g.c=k(t,g),S.x=k(n,S),S.X=k(r,S),S.c=k(t,S);function k(V,Q){return function(ee){var W=[],Se=-1,ie=0,oe=V.length,Me,Z,he;for(ee instanceof Date||(ee=new Date(+ee));++Se<oe;)V.charCodeAt(Se)===37&&(W.push(V.slice(ie,Se)),(Z=b2[Me=V.charAt(++Se)])!=null?Me=V.charAt(++Se):Z=Me==="e"?" ":"0",(he=Q[Me])&&(Me=he(ee,Z)),W.push(Me),ie=Se+1);return W.push(V.slice(ie,Se)),W.join("")}}function _(V,Q){return function(ee){var W=Fa(1900,void 0,1),Se=j(W,V,ee+="",0),ie,oe;if(Se!=ee.length)return null;if("Q"in W)return new Date(W.Q);if("s"in W)return new Date(W.s*1e3+("L"in W?W.L:0));if(Q&&!("Z"in W)&&(W.Z=0),"p"in W&&(W.H=W.H%12+W.p*12),W.m===void 0&&(W.m="q"in W?W.q:0),"V"in W){if(W.V<1||W.V>53)return null;"w"in W||(W.w=1),"Z"in W?(ie=Id(Fa(W.y,0,1)),oe=ie.getUTCDay(),ie=oe>4||oe===0?fc.ceil(ie):fc(ie),ie=ju.offset(ie,(W.V-1)*7),W.y=ie.getUTCFullYear(),W.m=ie.getUTCMonth(),W.d=ie.getUTCDate()+(W.w+6)%7):(ie=zd(Fa(W.y,0,1)),oe=ie.getDay(),ie=oe>4||oe===0?dc.ceil(ie):dc(ie),ie=So.offset(ie,(W.V-1)*7),W.y=ie.getFullYear(),W.m=ie.getMonth(),W.d=ie.getDate()+(W.w+6)%7)}else("W"in W||"U"in W)&&("w"in W||(W.w="u"in W?W.u%7:"W"in W?1:0),oe="Z"in W?Id(Fa(W.y,0,1)).getUTCDay():zd(Fa(W.y,0,1)).getDay(),W.m=0,W.d="W"in W?(W.w+6)%7+W.W*7-(oe+5)%7:W.w+W.U*7-(oe+6)%7);return"Z"in W?(W.H+=W.Z/100|0,W.M+=W.Z%100,Id(W)):zd(W)}}function j(V,Q,ee,W){for(var Se=0,ie=Q.length,oe=ee.length,Me,Z;Se<ie;){if(W>=oe)return-1;if(Me=Q.charCodeAt(Se++),Me===37){if(Me=Q.charAt(Se++),Z=x[Me in b2?Q.charAt(Se++):Me],!Z||(W=Z(V,ee,W))<0)return-1}else if(Me!=ee.charCodeAt(W++))return-1}return W}function O(V,Q,ee){var W=u.exec(Q.slice(ee));return W?(V.p=f.get(W[0].toLowerCase()),ee+W[0].length):-1}function M(V,Q,ee){var W=h.exec(Q.slice(ee));return W?(V.w=b.get(W[0].toLowerCase()),ee+W[0].length):-1}function E(V,Q,ee){var W=d.exec(Q.slice(ee));return W?(V.w=p.get(W[0].toLowerCase()),ee+W[0].length):-1}function A(V,Q,ee){var W=y.exec(Q.slice(ee));return W?(V.m=m.get(W[0].toLowerCase()),ee+W[0].length):-1}function P(V,Q,ee){var W=v.exec(Q.slice(ee));return W?(V.m=w.get(W[0].toLowerCase()),ee+W[0].length):-1}function $(V,Q,ee){return j(V,t,Q,ee)}function C(V,Q,ee){return j(V,n,Q,ee)}function I(V,Q,ee){return j(V,r,Q,ee)}function L(V){return l[V.getDay()]}function T(V){return a[V.getDay()]}function D(V){return s[V.getMonth()]}function R(V){return o[V.getMonth()]}function H(V){return i[+(V.getHours()>=12)]}function B(V){return 1+~~(V.getMonth()/3)}function K(V){return l[V.getUTCDay()]}function te(V){return a[V.getUTCDay()]}function pe(V){return s[V.getUTCMonth()]}function xe(V){return o[V.getUTCMonth()]}function st(V){return i[+(V.getUTCHours()>=12)]}function He(V){return 1+~~(V.getUTCMonth()/3)}return{format:function(V){var Q=k(V+="",g);return Q.toString=function(){return V},Q},parse:function(V){var Q=_(V+="",!1);return Q.toString=function(){return V},Q},utcFormat:function(V){var Q=k(V+="",S);return Q.toString=function(){return V},Q},utcParse:function(V){var Q=_(V+="",!0);return Q.toString=function(){return V},Q}}}var b2={"-":"",_:" ",0:"0"},nt=/^\s*\d+/,sI=/^%/,cI=/[\\^$*+?|[\]().{}]/g;function ce(e,t,n){var r=e<0?"-":"",i=(r?-e:e)+"",a=i.length;return r+(a<n?new Array(n-a+1).join(t)+i:i)}function uI(e){return e.replace(cI,"\\$&")}function Ra(e){return new RegExp("^(?:"+e.map(uI).join("|")+")","i")}function Ba(e){return new Map(e.map((t,n)=>[t.toLowerCase(),n]))}function dI(e,t,n){var r=nt.exec(t.slice(n,n+1));return r?(e.w=+r[0],n+r[0].length):-1}function fI(e,t,n){var r=nt.exec(t.slice(n,n+1));return r?(e.u=+r[0],n+r[0].length):-1}function pI(e,t,n){var r=nt.exec(t.slice(n,n+2));return r?(e.U=+r[0],n+r[0].length):-1}function hI(e,t,n){var r=nt.exec(t.slice(n,n+2));return r?(e.V=+r[0],n+r[0].length):-1}function mI(e,t,n){var r=nt.exec(t.slice(n,n+2));return r?(e.W=+r[0],n+r[0].length):-1}function w2(e,t,n){var r=nt.exec(t.slice(n,n+4));return r?(e.y=+r[0],n+r[0].length):-1}function k2(e,t,n){var r=nt.exec(t.slice(n,n+2));return r?(e.y=+r[0]+(+r[0]>68?1900:2e3),n+r[0].length):-1}function yI(e,t,n){var r=/^(Z)|([+-]\d\d)(?::?(\d\d))?/.exec(t.slice(n,n+6));return r?(e.Z=r[1]?0:-(r[2]+(r[3]||"00")),n+r[0].length):-1}function vI(e,t,n){var r=nt.exec(t.slice(n,n+1));return r?(e.q=r[0]*3-3,n+r[0].length):-1}function gI(e,t,n){var r=nt.exec(t.slice(n,n+2));return r?(e.m=r[0]-1,n+r[0].length):-1}function S2(e,t,n){var r=nt.exec(t.slice(n,n+2));return r?(e.d=+r[0],n+r[0].length):-1}function xI(e,t,n){var r=nt.exec(t.slice(n,n+3));return r?(e.m=0,e.d=+r[0],n+r[0].length):-1}function _2(e,t,n){var r=nt.exec(t.slice(n,n+2));return r?(e.H=+r[0],n+r[0].length):-1}function bI(e,t,n){var r=nt.exec(t.slice(n,n+2));return r?(e.M=+r[0],n+r[0].length):-1}function wI(e,t,n){var r=nt.exec(t.slice(n,n+2));return r?(e.S=+r[0],n+r[0].length):-1}function kI(e,t,n){var r=nt.exec(t.slice(n,n+3));return r?(e.L=+r[0],n+r[0].length):-1}function SI(e,t,n){var r=nt.exec(t.slice(n,n+6));return r?(e.L=Math.floor(r[0]/1e3),n+r[0].length):-1}function _I(e,t,n){var r=sI.exec(t.slice(n,n+1));return r?n+r[0].length:-1}function jI(e,t,n){var r=nt.exec(t.slice(n));return r?(e.Q=+r[0],n+r[0].length):-1}function OI(e,t,n){var r=nt.exec(t.slice(n));return r?(e.s=+r[0],n+r[0].length):-1}function j2(e,t){return ce(e.getDate(),t,2)}function PI(e,t){return ce(e.getHours(),t,2)}function AI(e,t){return ce(e.getHours()%12||12,t,2)}function NI(e,t){return ce(1+So.count(Wn(e),e),t,3)}function hg(e,t){return ce(e.getMilliseconds(),t,3)}function CI(e,t){return hg(e,t)+"000"}function EI(e,t){return ce(e.getMonth()+1,t,2)}function MI(e,t){return ce(e.getMinutes(),t,2)}function TI(e,t){return ce(e.getSeconds(),t,2)}function $I(e){var t=e.getDay();return t===0?7:t}function zI(e,t){return ce(Ou.count(Wn(e)-1,e),t,2)}function mg(e){var t=e.getDay();return t>=4||t===0?Qi(e):Qi.ceil(e)}function II(e,t){return e=mg(e),ce(Qi.count(Wn(e),e)+(Wn(e).getDay()===4),t,2)}function DI(e){return e.getDay()}function LI(e,t){return ce(dc.count(Wn(e)-1,e),t,2)}function FI(e,t){return ce(e.getFullYear()%100,t,2)}function RI(e,t){return e=mg(e),ce(e.getFullYear()%100,t,2)}function BI(e,t){return ce(e.getFullYear()%1e4,t,4)}function WI(e,t){var n=e.getDay();return e=n>=4||n===0?Qi(e):Qi.ceil(e),ce(e.getFullYear()%1e4,t,4)}function UI(e){var t=e.getTimezoneOffset();return(t>0?"-":(t*=-1,"+"))+ce(t/60|0,"0",2)+ce(t%60,"0",2)}function O2(e,t){return ce(e.getUTCDate(),t,2)}function HI(e,t){return ce(e.getUTCHours(),t,2)}function GI(e,t){return ce(e.getUTCHours()%12||12,t,2)}function VI(e,t){return ce(1+ju.count(Un(e),e),t,3)}function yg(e,t){return ce(e.getUTCMilliseconds(),t,3)}function XI(e,t){return yg(e,t)+"000"}function qI(e,t){return ce(e.getUTCMonth()+1,t,2)}function KI(e,t){return ce(e.getUTCMinutes(),t,2)}function YI(e,t){return ce(e.getUTCSeconds(),t,2)}function ZI(e){var t=e.getUTCDay();return t===0?7:t}function QI(e,t){return ce(Pu.count(Un(e)-1,e),t,2)}function vg(e){var t=e.getUTCDay();return t>=4||t===0?Ji(e):Ji.ceil(e)}function JI(e,t){return e=vg(e),ce(Ji.count(Un(e),e)+(Un(e).getUTCDay()===4),t,2)}function eD(e){return e.getUTCDay()}function tD(e,t){return ce(fc.count(Un(e)-1,e),t,2)}function nD(e,t){return ce(e.getUTCFullYear()%100,t,2)}function rD(e,t){return e=vg(e),ce(e.getUTCFullYear()%100,t,2)}function iD(e,t){return ce(e.getUTCFullYear()%1e4,t,4)}function aD(e,t){var n=e.getUTCDay();return e=n>=4||n===0?Ji(e):Ji.ceil(e),ce(e.getUTCFullYear()%1e4,t,4)}function lD(){return"+0000"}function P2(){return"%"}function A2(e){return+e}function N2(e){return Math.floor(+e/1e3)}var pi,gg,xg;oD({dateTime:"%x, %X",date:"%-m/%-d/%Y",time:"%-I:%M:%S %p",periods:["AM","PM"],days:["Sunday","Monday","Tuesday","Wednesday","Thursday","Friday","Saturday"],shortDays:["Sun","Mon","Tue","Wed","Thu","Fri","Sat"],months:["January","February","March","April","May","June","July","August","September","October","November","December"],shortMonths:["Jan","Feb","Mar","Apr","May","Jun","Jul","Aug","Sep","Oct","Nov","Dec"]});function oD(e){return pi=oI(e),gg=pi.format,pi.parse,xg=pi.utcFormat,pi.utcParse,pi}function sD(e){return new Date(e)}function cD(e){return e instanceof Date?+e:+new Date(+e)}function q0(e,t,n,r,i,a,l,o,s,u){var f=$0(),d=f.invert,p=f.domain,h=u(".%L"),b=u(":%S"),v=u("%I:%M"),w=u("%I %p"),y=u("%a %d"),m=u("%b %d"),g=u("%B"),S=u("%Y");function x(k){return(s(k)<k?h:o(k)<k?b:l(k)<k?v:a(k)<k?w:r(k)<k?i(k)<k?y:m:n(k)<k?g:S)(k)}return f.invert=function(k){return new Date(d(k))},f.domain=function(k){return arguments.length?p(Array.from(k,cD)):p().map(sD)},f.ticks=function(k){var _=p();return e(_[0],_[_.length-1],k??10)},f.tickFormat=function(k,_){return _==null?x:u(_)},f.nice=function(k){var _=p();return(!k||typeof k.range!="function")&&(k=t(_[0],_[_.length-1],k??10)),k?p(ag(_,k)):f},f.copy=function(){return ko(f,q0(e,t,n,r,i,a,l,o,s,u))},f}function uD(){return Yt.apply(q0(aI,lI,Wn,V0,Ou,So,H0,W0,Rr,gg).domain([new Date(2e3,0,1),new Date(2e3,0,2)]),arguments)}function dD(){return Yt.apply(q0(rI,iI,Un,X0,Pu,ju,G0,U0,Rr,xg).domain([Date.UTC(2e3,0,1),Date.UTC(2e3,0,2)]),arguments)}function Au(){var e=0,t=1,n,r,i,a,l=vt,o=!1,s;function u(d){return d==null||isNaN(d=+d)?s:l(i===0?.5:(d=(a(d)-n)*i,o?Math.max(0,Math.min(1,d)):d))}u.domain=function(d){return arguments.length?([e,t]=d,n=a(e=+e),r=a(t=+t),i=n===r?0:1/(r-n),u):[e,t]},u.clamp=function(d){return arguments.length?(o=!!d,u):o},u.interpolator=function(d){return arguments.length?(l=d,u):l};function f(d){return function(p){var h,b;return arguments.length?([h,b]=p,l=d(h,b),u):[l(0),l(1)]}}return u.range=f(_a),u.rangeRound=f(T0),u.unknown=function(d){return arguments.length?(s=d,u):s},function(d){return a=d,n=d(e),r=d(t),i=n===r?0:1/(r-n),u}}function jr(e,t){return t.domain(e.domain()).interpolator(e.interpolator()).clamp(e.clamp()).unknown(e.unknown())}function bg(){var e=_r(Au()(vt));return e.copy=function(){return jr(e,bg())},Xn.apply(e,arguments)}function wg(){var e=D0(Au()).domain([1,10]);return e.copy=function(){return jr(e,wg()).base(e.base())},Xn.apply(e,arguments)}function kg(){var e=L0(Au());return e.copy=function(){return jr(e,kg()).constant(e.constant())},Xn.apply(e,arguments)}function K0(){var e=F0(Au());return e.copy=function(){return jr(e,K0()).exponent(e.exponent())},Xn.apply(e,arguments)}function fD(){return K0.apply(null,arguments).exponent(.5)}function Sg(){var e=[],t=vt;function n(r){if(r!=null&&!isNaN(r=+r))return t((bo(e,r,1)-1)/(e.length-1))}return n.domain=function(r){if(!arguments.length)return e.slice();e=[];for(let i of r)i!=null&&!isNaN(i=+i)&&e.push(i);return e.sort(mr),n},n.interpolator=function(r){return arguments.length?(t=r,n):t},n.range=function(){return e.map((r,i)=>t(i/(e.length-1)))},n.quantiles=function(r){return Array.from({length:r+1},(i,a)=>Q$(e,a/r))},n.copy=function(){return Sg(t).domain(e)},Xn.apply(n,arguments)}function Nu(){var e=0,t=.5,n=1,r=1,i,a,l,o,s,u=vt,f,d=!1,p;function h(v){return isNaN(v=+v)?p:(v=.5+((v=+f(v))-a)*(r*v<r*a?o:s),u(d?Math.max(0,Math.min(1,v)):v))}h.domain=function(v){return arguments.length?([e,t,n]=v,i=f(e=+e),a=f(t=+t),l=f(n=+n),o=i===a?0:.5/(a-i),s=a===l?0:.5/(l-a),r=a<i?-1:1,h):[e,t,n]},h.clamp=function(v){return arguments.length?(d=!!v,h):d},h.interpolator=function(v){return arguments.length?(u=v,h):u};function b(v){return function(w){var y,m,g;return arguments.length?([y,m,g]=w,u=_z(v,[y,m,g]),h):[u(0),u(.5),u(1)]}}return h.range=b(_a),h.rangeRound=b(T0),h.unknown=function(v){return arguments.length?(p=v,h):p},function(v){return f=v,i=v(e),a=v(t),l=v(n),o=i===a?0:.5/(a-i),s=a===l?0:.5/(l-a),r=a<i?-1:1,h}}function _g(){var e=_r(Nu()(vt));return e.copy=function(){return jr(e,_g())},Xn.apply(e,arguments)}function jg(){var e=D0(Nu()).domain([.1,1,10]);return e.copy=function(){return jr(e,jg()).base(e.base())},Xn.apply(e,arguments)}function Og(){var e=L0(Nu());return e.copy=function(){return jr(e,Og()).constant(e.constant())},Xn.apply(e,arguments)}function Y0(){var e=F0(Nu());return e.copy=function(){return jr(e,Y0()).exponent(e.exponent())},Xn.apply(e,arguments)}function pD(){return Y0.apply(null,arguments).exponent(.5)}const C2=Object.freeze(Object.defineProperty({__proto__:null,scaleBand:$l,scaleDiverging:_g,scaleDivergingLog:jg,scaleDivergingPow:Y0,scaleDivergingSqrt:pD,scaleDivergingSymlog:Og,scaleIdentity:ig,scaleImplicit:y1,scaleLinear:cc,scaleLog:lg,scaleOrdinal:C0,scalePoint:ol,scalePow:R0,scaleQuantile:cg,scaleQuantize:ug,scaleRadial:sg,scaleSequential:bg,scaleSequentialLog:wg,scaleSequentialPow:K0,scaleSequentialQuantile:Sg,scaleSequentialSqrt:fD,scaleSequentialSymlog:kg,scaleSqrt:Xz,scaleSymlog:og,scaleThreshold:dg,scaleTime:uD,scaleUtc:dD,tickFormat:rg},Symbol.toStringTag,{value:"Module"}));var hD=ya;function mD(e,t,n){for(var r=-1,i=e.length;++r<i;){var a=e[r],l=t(a);if(l!=null&&(o===void 0?l===l&&!hD(l):n(l,o)))var o=l,s=a}return s}var Pg=mD;function yD(e,t){return e>t}var vD=yD,gD=Pg,xD=vD,bD=Sa;function wD(e){return e&&e.length?gD(e,bD,xD):void 0}var kD=wD;const Cu=ke(kD);function SD(e,t){return e<t}var _D=SD,jD=Pg,OD=_D,PD=Sa;function AD(e){return e&&e.length?jD(e,PD,OD):void 0}var ND=AD;const Eu=ke(ND);var CD=u0,ED=Sr,MD=z6,TD=Pt;function $D(e,t){var n=TD(e)?CD:MD;return n(e,ED(t))}var zD=$D,ID=T6,DD=zD;function LD(e,t){return ID(DD(e,t),1)}var FD=LD;const RD=ke(FD);var BD=j0;function WD(e,t){return BD(e,t)}var UD=WD;const Z0=ke(UD);var ja=1e9,HD={precision:20,rounding:4,toExpNeg:-7,toExpPos:21,LN10:"2.302585092994045684017991454684364207601101488628772976033327900967572609677352480235997205089598298341967784042286"},J0,Ee=!0,qt="[DecimalError] ",Gr=qt+"Invalid argument: ",Q0=qt+"Exponent out of range: ",Oa=Math.floor,$r=Math.pow,GD=/^(\d+(\.\d*)?|\.\d+)(e[+-]?\d+)?$/i,Et,Qe=1e7,Ae=7,Ag=9007199254740991,pc=Oa(Ag/Ae),q={};q.absoluteValue=q.abs=function(){var e=new this.constructor(this);return e.s&&(e.s=1),e};q.comparedTo=q.cmp=function(e){var t,n,r,i,a=this;if(e=new a.constructor(e),a.s!==e.s)return a.s||-e.s;if(a.e!==e.e)return a.e>e.e^a.s<0?1:-1;for(r=a.d.length,i=e.d.length,t=0,n=r<i?r:i;t<n;++t)if(a.d[t]!==e.d[t])return a.d[t]>e.d[t]^a.s<0?1:-1;return r===i?0:r>i^a.s<0?1:-1};q.decimalPlaces=q.dp=function(){var e=this,t=e.d.length-1,n=(t-e.e)*Ae;if(t=e.d[t],t)for(;t%10==0;t/=10)n--;return n<0?0:n};q.dividedBy=q.div=function(e){return In(this,new this.constructor(e))};q.dividedToIntegerBy=q.idiv=function(e){var t=this,n=t.constructor;return we(In(t,new n(e),0,1),n.precision)};q.equals=q.eq=function(e){return!this.cmp(e)};q.exponent=function(){return Ue(this)};q.greaterThan=q.gt=function(e){return this.cmp(e)>0};q.greaterThanOrEqualTo=q.gte=function(e){return this.cmp(e)>=0};q.isInteger=q.isint=function(){return this.e>this.d.length-2};q.isNegative=q.isneg=function(){return this.s<0};q.isPositive=q.ispos=function(){return this.s>0};q.isZero=function(){return this.s===0};q.lessThan=q.lt=function(e){return this.cmp(e)<0};q.lessThanOrEqualTo=q.lte=function(e){return this.cmp(e)<1};q.logarithm=q.log=function(e){var t,n=this,r=n.constructor,i=r.precision,a=i+5;if(e===void 0)e=new r(10);else if(e=new r(e),e.s<1||e.eq(Et))throw Error(qt+"NaN");if(n.s<1)throw Error(qt+(n.s?"NaN":"-Infinity"));return n.eq(Et)?new r(0):(Ee=!1,t=In(Fl(n,a),Fl(e,a),a),Ee=!0,we(t,i))};q.minus=q.sub=function(e){var t=this;return e=new t.constructor(e),t.s==e.s?Eg(t,e):Ng(t,(e.s=-e.s,e))};q.modulo=q.mod=function(e){var t,n=this,r=n.constructor,i=r.precision;if(e=new r(e),!e.s)throw Error(qt+"NaN");return n.s?(Ee=!1,t=In(n,e,0,1).times(e),Ee=!0,n.minus(t)):we(new r(n),i)};q.naturalExponential=q.exp=function(){return Cg(this)};q.naturalLogarithm=q.ln=function(){return Fl(this)};q.negated=q.neg=function(){var e=new this.constructor(this);return e.s=-e.s||0,e};q.plus=q.add=function(e){var t=this;return e=new t.constructor(e),t.s==e.s?Ng(t,e):Eg(t,(e.s=-e.s,e))};q.precision=q.sd=function(e){var t,n,r,i=this;if(e!==void 0&&e!==!!e&&e!==1&&e!==0)throw Error(Gr+e);if(t=Ue(i)+1,r=i.d.length-1,n=r*Ae+1,r=i.d[r],r){for(;r%10==0;r/=10)n--;for(r=i.d[0];r>=10;r/=10)n++}return e&&t>n?t:n};q.squareRoot=q.sqrt=function(){var e,t,n,r,i,a,l,o=this,s=o.constructor;if(o.s<1){if(!o.s)return new s(0);throw Error(qt+"NaN")}for(e=Ue(o),Ee=!1,i=Math.sqrt(+o),i==0||i==1/0?(t=yn(o.d),(t.length+e)%2==0&&(t+="0"),i=Math.sqrt(t),e=Oa((e+1)/2)-(e<0||e%2),i==1/0?t="5e"+e:(t=i.toExponential(),t=t.slice(0,t.indexOf("e")+1)+e),r=new s(t)):r=new s(i.toString()),n=s.precision,i=l=n+3;;)if(a=r,r=a.plus(In(o,a,l+2)).times(.5),yn(a.d).slice(0,l)===(t=yn(r.d)).slice(0,l)){if(t=t.slice(l-3,l+1),i==l&&t=="4999"){if(we(a,n+1,0),a.times(a).eq(o)){r=a;break}}else if(t!="9999")break;l+=4}return Ee=!0,we(r,n)};q.times=q.mul=function(e){var t,n,r,i,a,l,o,s,u,f=this,d=f.constructor,p=f.d,h=(e=new d(e)).d;if(!f.s||!e.s)return new d(0);for(e.s*=f.s,n=f.e+e.e,s=p.length,u=h.length,s<u&&(a=p,p=h,h=a,l=s,s=u,u=l),a=[],l=s+u,r=l;r--;)a.push(0);for(r=u;--r>=0;){for(t=0,i=s+r;i>r;)o=a[i]+h[r]*p[i-r-1]+t,a[i--]=o%Qe|0,t=o/Qe|0;a[i]=(a[i]+t)%Qe|0}for(;!a[--l];)a.pop();return t?++n:a.shift(),e.d=a,e.e=n,Ee?we(e,d.precision):e};q.toDecimalPlaces=q.todp=function(e,t){var n=this,r=n.constructor;return n=new r(n),e===void 0?n:(kn(e,0,ja),t===void 0?t=r.rounding:kn(t,0,8),we(n,e+Ue(n)+1,t))};q.toExponential=function(e,t){var n,r=this,i=r.constructor;return e===void 0?n=ei(r,!0):(kn(e,0,ja),t===void 0?t=i.rounding:kn(t,0,8),r=we(new i(r),e+1,t),n=ei(r,!0,e+1)),n};q.toFixed=function(e,t){var n,r,i=this,a=i.constructor;return e===void 0?ei(i):(kn(e,0,ja),t===void 0?t=a.rounding:kn(t,0,8),r=we(new a(i),e+Ue(i)+1,t),n=ei(r.abs(),!1,e+Ue(r)+1),i.isneg()&&!i.isZero()?"-"+n:n)};q.toInteger=q.toint=function(){var e=this,t=e.constructor;return we(new t(e),Ue(e)+1,t.rounding)};q.toNumber=function(){return+this};q.toPower=q.pow=function(e){var t,n,r,i,a,l,o=this,s=o.constructor,u=12,f=+(e=new s(e));if(!e.s)return new s(Et);if(o=new s(o),!o.s){if(e.s<1)throw Error(qt+"Infinity");return o}if(o.eq(Et))return o;if(r=s.precision,e.eq(Et))return we(o,r);if(t=e.e,n=e.d.length-1,l=t>=n,a=o.s,l){if((n=f<0?-f:f)<=Ag){for(i=new s(Et),t=Math.ceil(r/Ae+4),Ee=!1;n%2&&(i=i.times(o),M2(i.d,t)),n=Oa(n/2),n!==0;)o=o.times(o),M2(o.d,t);return Ee=!0,e.s<0?new s(Et).div(i):we(i,r)}}else if(a<0)throw Error(qt+"NaN");return a=a<0&&e.d[Math.max(t,n)]&1?-1:1,o.s=1,Ee=!1,i=e.times(Fl(o,r+u)),Ee=!0,i=Cg(i),i.s=a,i};q.toPrecision=function(e,t){var n,r,i=this,a=i.constructor;return e===void 0?(n=Ue(i),r=ei(i,n<=a.toExpNeg||n>=a.toExpPos)):(kn(e,1,ja),t===void 0?t=a.rounding:kn(t,0,8),i=we(new a(i),e,t),n=Ue(i),r=ei(i,e<=n||n<=a.toExpNeg,e)),r};q.toSignificantDigits=q.tosd=function(e,t){var n=this,r=n.constructor;return e===void 0?(e=r.precision,t=r.rounding):(kn(e,1,ja),t===void 0?t=r.rounding:kn(t,0,8)),we(new r(n),e,t)};q.toString=q.valueOf=q.val=q.toJSON=q[Symbol.for("nodejs.util.inspect.custom")]=function(){var e=this,t=Ue(e),n=e.constructor;return ei(e,t<=n.toExpNeg||t>=n.toExpPos)};function Ng(e,t){var n,r,i,a,l,o,s,u,f=e.constructor,d=f.precision;if(!e.s||!t.s)return t.s||(t=new f(e)),Ee?we(t,d):t;if(s=e.d,u=t.d,l=e.e,i=t.e,s=s.slice(),a=l-i,a){for(a<0?(r=s,a=-a,o=u.length):(r=u,i=l,o=s.length),l=Math.ceil(d/Ae),o=l>o?l+1:o+1,a>o&&(a=o,r.length=1),r.reverse();a--;)r.push(0);r.reverse()}for(o=s.length,a=u.length,o-a<0&&(a=o,r=u,u=s,s=r),n=0;a;)n=(s[--a]=s[a]+u[a]+n)/Qe|0,s[a]%=Qe;for(n&&(s.unshift(n),++i),o=s.length;s[--o]==0;)s.pop();return t.d=s,t.e=i,Ee?we(t,d):t}function kn(e,t,n){if(e!==~~e||e<t||e>n)throw Error(Gr+e)}function yn(e){var t,n,r,i=e.length-1,a="",l=e[0];if(i>0){for(a+=l,t=1;t<i;t++)r=e[t]+"",n=Ae-r.length,n&&(a+=Jn(n)),a+=r;l=e[t],r=l+"",n=Ae-r.length,n&&(a+=Jn(n))}else if(l===0)return"0";for(;l%10===0;)l/=10;return a+l}var In=function(){function e(r,i){var a,l=0,o=r.length;for(r=r.slice();o--;)a=r[o]*i+l,r[o]=a%Qe|0,l=a/Qe|0;return l&&r.unshift(l),r}function t(r,i,a,l){var o,s;if(a!=l)s=a>l?1:-1;else for(o=s=0;o<a;o++)if(r[o]!=i[o]){s=r[o]>i[o]?1:-1;break}return s}function n(r,i,a){for(var l=0;a--;)r[a]-=l,l=r[a]<i[a]?1:0,r[a]=l*Qe+r[a]-i[a];for(;!r[0]&&r.length>1;)r.shift()}return function(r,i,a,l){var o,s,u,f,d,p,h,b,v,w,y,m,g,S,x,k,_,j,O=r.constructor,M=r.s==i.s?1:-1,E=r.d,A=i.d;if(!r.s)return new O(r);if(!i.s)throw Error(qt+"Division by zero");for(s=r.e-i.e,_=A.length,x=E.length,h=new O(M),b=h.d=[],u=0;A[u]==(E[u]||0);)++u;if(A[u]>(E[u]||0)&&--s,a==null?m=a=O.precision:l?m=a+(Ue(r)-Ue(i))+1:m=a,m<0)return new O(0);if(m=m/Ae+2|0,u=0,_==1)for(f=0,A=A[0],m++;(u<x||f)&&m--;u++)g=f*Qe+(E[u]||0),b[u]=g/A|0,f=g%A|0;else{for(f=Qe/(A[0]+1)|0,f>1&&(A=e(A,f),E=e(E,f),_=A.length,x=E.length),S=_,v=E.slice(0,_),w=v.length;w<_;)v[w++]=0;j=A.slice(),j.unshift(0),k=A[0],A[1]>=Qe/2&&++k;do f=0,o=t(A,v,_,w),o<0?(y=v[0],_!=w&&(y=y*Qe+(v[1]||0)),f=y/k|0,f>1?(f>=Qe&&(f=Qe-1),d=e(A,f),p=d.length,w=v.length,o=t(d,v,p,w),o==1&&(f--,n(d,_<p?j:A,p))):(f==0&&(o=f=1),d=A.slice()),p=d.length,p<w&&d.unshift(0),n(v,d,w),o==-1&&(w=v.length,o=t(A,v,_,w),o<1&&(f++,n(v,_<w?j:A,w))),w=v.length):o===0&&(f++,v=[0]),b[u++]=f,o&&v[0]?v[w++]=E[S]||0:(v=[E[S]],w=1);while((S++<x||v[0]!==void 0)&&m--)}return b[0]||b.shift(),h.e=s,we(h,l?a+Ue(h)+1:a)}}();function Cg(e,t){var n,r,i,a,l,o,s=0,u=0,f=e.constructor,d=f.precision;if(Ue(e)>16)throw Error(Q0+Ue(e));if(!e.s)return new f(Et);for(Ee=!1,o=d,l=new f(.03125);e.abs().gte(.1);)e=e.times(l),u+=5;for(r=Math.log($r(2,u))/Math.LN10*2+5|0,o+=r,n=i=a=new f(Et),f.precision=o;;){if(i=we(i.times(e),o),n=n.times(++s),l=a.plus(In(i,n,o)),yn(l.d).slice(0,o)===yn(a.d).slice(0,o)){for(;u--;)a=we(a.times(a),o);return f.precision=d,t==null?(Ee=!0,we(a,d)):a}a=l}}function Ue(e){for(var t=e.e*Ae,n=e.d[0];n>=10;n/=10)t++;return t}function Dd(e,t,n){if(t>e.LN10.sd())throw Ee=!0,n&&(e.precision=n),Error(qt+"LN10 precision limit exceeded");return we(new e(e.LN10),t)}function Jn(e){for(var t="";e--;)t+="0";return t}function Fl(e,t){var n,r,i,a,l,o,s,u,f,d=1,p=10,h=e,b=h.d,v=h.constructor,w=v.precision;if(h.s<1)throw Error(qt+(h.s?"NaN":"-Infinity"));if(h.eq(Et))return new v(0);if(t==null?(Ee=!1,u=w):u=t,h.eq(10))return t==null&&(Ee=!0),Dd(v,u);if(u+=p,v.precision=u,n=yn(b),r=n.charAt(0),a=Ue(h),Math.abs(a)<15e14){for(;r<7&&r!=1||r==1&&n.charAt(1)>3;)h=h.times(e),n=yn(h.d),r=n.charAt(0),d++;a=Ue(h),r>1?(h=new v("0."+n),a++):h=new v(r+"."+n.slice(1))}else return s=Dd(v,u+2,w).times(a+""),h=Fl(new v(r+"."+n.slice(1)),u-p).plus(s),v.precision=w,t==null?(Ee=!0,we(h,w)):h;for(o=l=h=In(h.minus(Et),h.plus(Et),u),f=we(h.times(h),u),i=3;;){if(l=we(l.times(f),u),s=o.plus(In(l,new v(i),u)),yn(s.d).slice(0,u)===yn(o.d).slice(0,u))return o=o.times(2),a!==0&&(o=o.plus(Dd(v,u+2,w).times(a+""))),o=In(o,new v(d),u),v.precision=w,t==null?(Ee=!0,we(o,w)):o;o=s,i+=2}}function E2(e,t){var n,r,i;for((n=t.indexOf("."))>-1&&(t=t.replace(".","")),(r=t.search(/e/i))>0?(n<0&&(n=r),n+=+t.slice(r+1),t=t.substring(0,r)):n<0&&(n=t.length),r=0;t.charCodeAt(r)===48;)++r;for(i=t.length;t.charCodeAt(i-1)===48;)--i;if(t=t.slice(r,i),t){if(i-=r,n=n-r-1,e.e=Oa(n/Ae),e.d=[],r=(n+1)%Ae,n<0&&(r+=Ae),r<i){for(r&&e.d.push(+t.slice(0,r)),i-=Ae;r<i;)e.d.push(+t.slice(r,r+=Ae));t=t.slice(r),r=Ae-t.length}else r-=i;for(;r--;)t+="0";if(e.d.push(+t),Ee&&(e.e>pc||e.e<-pc))throw Error(Q0+n)}else e.s=0,e.e=0,e.d=[0];return e}function we(e,t,n){var r,i,a,l,o,s,u,f,d=e.d;for(l=1,a=d[0];a>=10;a/=10)l++;if(r=t-l,r<0)r+=Ae,i=t,u=d[f=0];else{if(f=Math.ceil((r+1)/Ae),a=d.length,f>=a)return e;for(u=a=d[f],l=1;a>=10;a/=10)l++;r%=Ae,i=r-Ae+l}if(n!==void 0&&(a=$r(10,l-i-1),o=u/a%10|0,s=t<0||d[f+1]!==void 0||u%a,s=n<4?(o||s)&&(n==0||n==(e.s<0?3:2)):o>5||o==5&&(n==4||s||n==6&&(r>0?i>0?u/$r(10,l-i):0:d[f-1])%10&1||n==(e.s<0?8:7))),t<1||!d[0])return s?(a=Ue(e),d.length=1,t=t-a-1,d[0]=$r(10,(Ae-t%Ae)%Ae),e.e=Oa(-t/Ae)||0):(d.length=1,d[0]=e.e=e.s=0),e;if(r==0?(d.length=f,a=1,f--):(d.length=f+1,a=$r(10,Ae-r),d[f]=i>0?(u/$r(10,l-i)%$r(10,i)|0)*a:0),s)for(;;)if(f==0){(d[0]+=a)==Qe&&(d[0]=1,++e.e);break}else{if(d[f]+=a,d[f]!=Qe)break;d[f--]=0,a=1}for(r=d.length;d[--r]===0;)d.pop();if(Ee&&(e.e>pc||e.e<-pc))throw Error(Q0+Ue(e));return e}function Eg(e,t){var n,r,i,a,l,o,s,u,f,d,p=e.constructor,h=p.precision;if(!e.s||!t.s)return t.s?t.s=-t.s:t=new p(e),Ee?we(t,h):t;if(s=e.d,d=t.d,r=t.e,u=e.e,s=s.slice(),l=u-r,l){for(f=l<0,f?(n=s,l=-l,o=d.length):(n=d,r=u,o=s.length),i=Math.max(Math.ceil(h/Ae),o)+2,l>i&&(l=i,n.length=1),n.reverse(),i=l;i--;)n.push(0);n.reverse()}else{for(i=s.length,o=d.length,f=i<o,f&&(o=i),i=0;i<o;i++)if(s[i]!=d[i]){f=s[i]<d[i];break}l=0}for(f&&(n=s,s=d,d=n,t.s=-t.s),o=s.length,i=d.length-o;i>0;--i)s[o++]=0;for(i=d.length;i>l;){if(s[--i]<d[i]){for(a=i;a&&s[--a]===0;)s[a]=Qe-1;--s[a],s[i]+=Qe}s[i]-=d[i]}for(;s[--o]===0;)s.pop();for(;s[0]===0;s.shift())--r;return s[0]?(t.d=s,t.e=r,Ee?we(t,h):t):new p(0)}function ei(e,t,n){var r,i=Ue(e),a=yn(e.d),l=a.length;return t?(n&&(r=n-l)>0?a=a.charAt(0)+"."+a.slice(1)+Jn(r):l>1&&(a=a.charAt(0)+"."+a.slice(1)),a=a+(i<0?"e":"e+")+i):i<0?(a="0."+Jn(-i-1)+a,n&&(r=n-l)>0&&(a+=Jn(r))):i>=l?(a+=Jn(i+1-l),n&&(r=n-i-1)>0&&(a=a+"."+Jn(r))):((r=i+1)<l&&(a=a.slice(0,r)+"."+a.slice(r)),n&&(r=n-l)>0&&(i+1===l&&(a+="."),a+=Jn(r))),e.s<0?"-"+a:a}function M2(e,t){if(e.length>t)return e.length=t,!0}function Mg(e){var t,n,r;function i(a){var l=this;if(!(l instanceof i))return new i(a);if(l.constructor=i,a instanceof i){l.s=a.s,l.e=a.e,l.d=(a=a.d)?a.slice():a;return}if(typeof a=="number"){if(a*0!==0)throw Error(Gr+a);if(a>0)l.s=1;else if(a<0)a=-a,l.s=-1;else{l.s=0,l.e=0,l.d=[0];return}if(a===~~a&&a<1e7){l.e=0,l.d=[a];return}return E2(l,a.toString())}else if(typeof a!="string")throw Error(Gr+a);if(a.charCodeAt(0)===45?(a=a.slice(1),l.s=-1):l.s=1,GD.test(a))E2(l,a);else throw Error(Gr+a)}if(i.prototype=q,i.ROUND_UP=0,i.ROUND_DOWN=1,i.ROUND_CEIL=2,i.ROUND_FLOOR=3,i.ROUND_HALF_UP=4,i.ROUND_HALF_DOWN=5,i.ROUND_HALF_EVEN=6,i.ROUND_HALF_CEIL=7,i.ROUND_HALF_FLOOR=8,i.clone=Mg,i.config=i.set=VD,e===void 0&&(e={}),e)for(r=["precision","rounding","toExpNeg","toExpPos","LN10"],t=0;t<r.length;)e.hasOwnProperty(n=r[t++])||(e[n]=this[n]);return i.config(e),i}function VD(e){if(!e||typeof e!="object")throw Error(qt+"Object expected");var t,n,r,i=["precision",1,ja,"rounding",0,8,"toExpNeg",-1/0,0,"toExpPos",0,1/0];for(t=0;t<i.length;t+=3)if((r=e[n=i[t]])!==void 0)if(Oa(r)===r&&r>=i[t+1]&&r<=i[t+2])this[n]=r;else throw Error(Gr+n+": "+r);if((r=e[n="LN10"])!==void 0)if(r==Math.LN10)this[n]=new this(r);else throw Error(Gr+n+": "+r);return this}var J0=Mg(HD);Et=new J0(1);const ge=J0;function XD(e){return ZD(e)||YD(e)||KD(e)||qD()}function qD(){throw new TypeError(`Invalid attempt to spread non-iterable instance.
In order to be iterable, non-array objects must have a [Symbol.iterator]() method.`)}function KD(e,t){if(e){if(typeof e=="string")return b1(e,t);var n=Object.prototype.toString.call(e).slice(8,-1);if(n==="Object"&&e.constructor&&(n=e.constructor.name),n==="Map"||n==="Set")return Array.from(e);if(n==="Arguments"||/^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n))return b1(e,t)}}function YD(e){if(typeof Symbol<"u"&&Symbol.iterator in Object(e))return Array.from(e)}function ZD(e){if(Array.isArray(e))return b1(e)}function b1(e,t){(t==null||t>e.length)&&(t=e.length);for(var n=0,r=new Array(t);n<t;n++)r[n]=e[n];return r}var QD=function(t){return t},Tg={},$g=function(t){return t===Tg},T2=function(t){return function n(){return arguments.length===0||arguments.length===1&&$g(arguments.length<=0?void 0:arguments[0])?n:t.apply(void 0,arguments)}},JD=function e(t,n){return t===1?n:T2(function(){for(var r=arguments.length,i=new Array(r),a=0;a<r;a++)i[a]=arguments[a];var l=i.filter(function(o){return o!==Tg}).length;return l>=t?n.apply(void 0,i):e(t-l,T2(function(){for(var o=arguments.length,s=new Array(o),u=0;u<o;u++)s[u]=arguments[u];var f=i.map(function(d){return $g(d)?s.shift():d});return n.apply(void 0,XD(f).concat(s))}))})},Mu=function(t){return JD(t.length,t)},w1=function(t,n){for(var r=[],i=t;i<n;++i)r[i-t]=i;return r},eL=Mu(function(e,t){return Array.isArray(t)?t.map(e):Object.keys(t).map(function(n){return t[n]}).map(e)}),tL=function(){for(var t=arguments.length,n=new Array(t),r=0;r<t;r++)n[r]=arguments[r];if(!n.length)return QD;var i=n.reverse(),a=i[0],l=i.slice(1);return function(){return l.reduce(function(o,s){return s(o)},a.apply(void 0,arguments))}},k1=function(t){return Array.isArray(t)?t.reverse():t.split("").reverse.join("")},zg=function(t){var n=null,r=null;return function(){for(var i=arguments.length,a=new Array(i),l=0;l<i;l++)a[l]=arguments[l];return n&&a.every(function(o,s){return o===n[s]})||(n=a,r=t.apply(void 0,a)),r}};function nL(e){var t;return e===0?t=1:t=Math.floor(new ge(e).abs().log(10).toNumber())+1,t}function rL(e,t,n){for(var r=new ge(e),i=0,a=[];r.lt(t)&&i<1e5;)a.push(r.toNumber()),r=r.add(n),i++;return a}var iL=Mu(function(e,t,n){var r=+e,i=+t;return r+n*(i-r)}),aL=Mu(function(e,t,n){var r=t-+e;return r=r||1/0,(n-e)/r}),lL=Mu(function(e,t,n){var r=t-+e;return r=r||1/0,Math.max(0,Math.min(1,(n-e)/r))});const Tu={rangeStep:rL,getDigitCount:nL,interpolateNumber:iL,uninterpolateNumber:aL,uninterpolateTruncation:lL};function S1(e){return cL(e)||sL(e)||Ig(e)||oL()}function oL(){throw new TypeError(`Invalid attempt to spread non-iterable instance.
In order to be iterable, non-array objects must have a [Symbol.iterator]() method.`)}function sL(e){if(typeof Symbol<"u"&&Symbol.iterator in Object(e))return Array.from(e)}function cL(e){if(Array.isArray(e))return _1(e)}function Rl(e,t){return fL(e)||dL(e,t)||Ig(e,t)||uL()}function uL(){throw new TypeError(`Invalid attempt to destructure non-iterable instance.
In order to be iterable, non-array objects must have a [Symbol.iterator]() method.`)}function Ig(e,t){if(e){if(typeof e=="string")return _1(e,t);var n=Object.prototype.toString.call(e).slice(8,-1);if(n==="Object"&&e.constructor&&(n=e.constructor.name),n==="Map"||n==="Set")return Array.from(e);if(n==="Arguments"||/^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n))return _1(e,t)}}function _1(e,t){(t==null||t>e.length)&&(t=e.length);for(var n=0,r=new Array(t);n<t;n++)r[n]=e[n];return r}function dL(e,t){if(!(typeof Symbol>"u"||!(Symbol.iterator in Object(e)))){var n=[],r=!0,i=!1,a=void 0;try{for(var l=e[Symbol.iterator](),o;!(r=(o=l.next()).done)&&(n.push(o.value),!(t&&n.length===t));r=!0);}catch(s){i=!0,a=s}finally{try{!r&&l.return!=null&&l.return()}finally{if(i)throw a}}return n}}function fL(e){if(Array.isArray(e))return e}function Dg(e){var t=Rl(e,2),n=t[0],r=t[1],i=n,a=r;return n>r&&(i=r,a=n),[i,a]}function Lg(e,t,n){if(e.lte(0))return new ge(0);var r=Tu.getDigitCount(e.toNumber()),i=new ge(10).pow(r),a=e.div(i),l=r!==1?.05:.1,o=new ge(Math.ceil(a.div(l).toNumber())).add(n).mul(l),s=o.mul(i);return t?s:new ge(Math.ceil(s))}function pL(e,t,n){var r=1,i=new ge(e);if(!i.isint()&&n){var a=Math.abs(e);a<1?(r=new ge(10).pow(Tu.getDigitCount(e)-1),i=new ge(Math.floor(i.div(r).toNumber())).mul(r)):a>1&&(i=new ge(Math.floor(e)))}else e===0?i=new ge(Math.floor((t-1)/2)):n||(i=new ge(Math.floor(e)));var l=Math.floor((t-1)/2),o=tL(eL(function(s){return i.add(new ge(s-l).mul(r)).toNumber()}),w1);return o(0,t)}function Fg(e,t,n,r){var i=arguments.length>4&&arguments[4]!==void 0?arguments[4]:0;if(!Number.isFinite((t-e)/(n-1)))return{step:new ge(0),tickMin:new ge(0),tickMax:new ge(0)};var a=Lg(new ge(t).sub(e).div(n-1),r,i),l;e<=0&&t>=0?l=new ge(0):(l=new ge(e).add(t).div(2),l=l.sub(new ge(l).mod(a)));var o=Math.ceil(l.sub(e).div(a).toNumber()),s=Math.ceil(new ge(t).sub(l).div(a).toNumber()),u=o+s+1;return u>n?Fg(e,t,n,r,i+1):(u<n&&(s=t>0?s+(n-u):s,o=t>0?o:o+(n-u)),{step:a,tickMin:l.sub(new ge(o).mul(a)),tickMax:l.add(new ge(s).mul(a))})}function hL(e){var t=Rl(e,2),n=t[0],r=t[1],i=arguments.length>1&&arguments[1]!==void 0?arguments[1]:6,a=arguments.length>2&&arguments[2]!==void 0?arguments[2]:!0,l=Math.max(i,2),o=Dg([n,r]),s=Rl(o,2),u=s[0],f=s[1];if(u===-1/0||f===1/0){var d=f===1/0?[u].concat(S1(w1(0,i-1).map(function(){return 1/0}))):[].concat(S1(w1(0,i-1).map(function(){return-1/0})),[f]);return n>r?k1(d):d}if(u===f)return pL(u,i,a);var p=Fg(u,f,l,a),h=p.step,b=p.tickMin,v=p.tickMax,w=Tu.rangeStep(b,v.add(new ge(.1).mul(h)),h);return n>r?k1(w):w}function mL(e,t){var n=Rl(e,2),r=n[0],i=n[1],a=arguments.length>2&&arguments[2]!==void 0?arguments[2]:!0,l=Dg([r,i]),o=Rl(l,2),s=o[0],u=o[1];if(s===-1/0||u===1/0)return[r,i];if(s===u)return[s];var f=Math.max(t,2),d=Lg(new ge(u).sub(s).div(f-1),a,0),p=[].concat(S1(Tu.rangeStep(new ge(s),new ge(u).sub(new ge(.99).mul(d)),d)),[u]);return r>i?k1(p):p}var yL=zg(hL),vL=zg(mL),gL="Invariant failed";function ti(e,t){throw new Error(gL)}var xL=["offset","layout","width","dataKey","data","dataPointFormatter","xAxis","yAxis"];function ea(e){"@babel/helpers - typeof";return ea=typeof Symbol=="function"&&typeof Symbol.iterator=="symbol"?function(t){return typeof t}:function(t){return t&&typeof Symbol=="function"&&t.constructor===Symbol&&t!==Symbol.prototype?"symbol":typeof t},ea(e)}function hc(){return hc=Object.assign?Object.assign.bind():function(e){for(var t=1;t<arguments.length;t++){var n=arguments[t];for(var r in n)Object.prototype.hasOwnProperty.call(n,r)&&(e[r]=n[r])}return e},hc.apply(this,arguments)}function bL(e,t){return _L(e)||SL(e,t)||kL(e,t)||wL()}function wL(){throw new TypeError(`Invalid attempt to destructure non-iterable instance.
In order to be iterable, non-array objects must have a [Symbol.iterator]() method.`)}function kL(e,t){if(e){if(typeof e=="string")return $2(e,t);var n=Object.prototype.toString.call(e).slice(8,-1);if(n==="Object"&&e.constructor&&(n=e.constructor.name),n==="Map"||n==="Set")return Array.from(e);if(n==="Arguments"||/^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n))return $2(e,t)}}function $2(e,t){(t==null||t>e.length)&&(t=e.length);for(var n=0,r=new Array(t);n<t;n++)r[n]=e[n];return r}function SL(e,t){var n=e==null?null:typeof Symbol<"u"&&e[Symbol.iterator]||e["@@iterator"];if(n!=null){var r,i,a,l,o=[],s=!0,u=!1;try{if(a=(n=n.call(e)).next,t!==0)for(;!(s=(r=a.call(n)).done)&&(o.push(r.value),o.length!==t);s=!0);}catch(f){u=!0,i=f}finally{try{if(!s&&n.return!=null&&(l=n.return(),Object(l)!==l))return}finally{if(u)throw i}}return o}}function _L(e){if(Array.isArray(e))return e}function jL(e,t){if(e==null)return{};var n=OL(e,t),r,i;if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);for(i=0;i<a.length;i++)r=a[i],!(t.indexOf(r)>=0)&&Object.prototype.propertyIsEnumerable.call(e,r)&&(n[r]=e[r])}return n}function OL(e,t){if(e==null)return{};var n={};for(var r in e)if(Object.prototype.hasOwnProperty.call(e,r)){if(t.indexOf(r)>=0)continue;n[r]=e[r]}return n}function PL(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}function AL(e,t){for(var n=0;n<t.length;n++){var r=t[n];r.enumerable=r.enumerable||!1,r.configurable=!0,"value"in r&&(r.writable=!0),Object.defineProperty(e,Wg(r.key),r)}}function NL(e,t,n){return t&&AL(e.prototype,t),Object.defineProperty(e,"prototype",{writable:!1}),e}function CL(e,t,n){return t=mc(t),EL(e,Rg()?Reflect.construct(t,n||[],mc(e).constructor):t.apply(e,n))}function EL(e,t){if(t&&(ea(t)==="object"||typeof t=="function"))return t;if(t!==void 0)throw new TypeError("Derived constructors may only return object or undefined");return ML(e)}function ML(e){if(e===void 0)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return e}function Rg(){try{var e=!Boolean.prototype.valueOf.call(Reflect.construct(Boolean,[],function(){}))}catch{}return(Rg=function(){return!!e})()}function mc(e){return mc=Object.setPrototypeOf?Object.getPrototypeOf.bind():function(n){return n.__proto__||Object.getPrototypeOf(n)},mc(e)}function TL(e,t){if(typeof t!="function"&&t!==null)throw new TypeError("Super expression must either be null or a function");e.prototype=Object.create(t&&t.prototype,{constructor:{value:e,writable:!0,configurable:!0}}),Object.defineProperty(e,"prototype",{writable:!1}),t&&j1(e,t)}function j1(e,t){return j1=Object.setPrototypeOf?Object.setPrototypeOf.bind():function(r,i){return r.__proto__=i,r},j1(e,t)}function Bg(e,t,n){return t=Wg(t),t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function Wg(e){var t=$L(e,"string");return ea(t)=="symbol"?t:t+""}function $L(e,t){if(ea(e)!="object"||!e)return e;var n=e[Symbol.toPrimitive];if(n!==void 0){var r=n.call(e,t);if(ea(r)!="object")return r;throw new TypeError("@@toPrimitive must return a primitive value.")}return String(e)}var $u=function(e){function t(){return PL(this,t),CL(this,t,arguments)}return TL(t,e),NL(t,[{key:"render",value:function(){var r=this.props,i=r.offset,a=r.layout,l=r.width,o=r.dataKey,s=r.data,u=r.dataPointFormatter,f=r.xAxis,d=r.yAxis,p=jL(r,xL),h=ue(p,!1);this.props.direction==="x"&&f.type!=="number"&&ti();var b=s.map(function(v){var w=u(v,o),y=w.x,m=w.y,g=w.value,S=w.errorVal;if(!S)return null;var x=[],k,_;if(Array.isArray(S)){var j=bL(S,2);k=j[0],_=j[1]}else k=_=S;if(a==="vertical"){var O=f.scale,M=m+i,E=M+l,A=M-l,P=O(g-k),$=O(g+_);x.push({x1:$,y1:E,x2:$,y2:A}),x.push({x1:P,y1:M,x2:$,y2:M}),x.push({x1:P,y1:E,x2:P,y2:A})}else if(a==="horizontal"){var C=d.scale,I=y+i,L=I-l,T=I+l,D=C(g-k),R=C(g+_);x.push({x1:L,y1:R,x2:T,y2:R}),x.push({x1:I,y1:D,x2:I,y2:R}),x.push({x1:L,y1:D,x2:T,y2:D})}return z.createElement(et,hc({className:"recharts-errorBar",key:"bar-".concat(x.map(function(H){return"".concat(H.x1,"-").concat(H.x2,"-").concat(H.y1,"-").concat(H.y2)}))},h),x.map(function(H){return z.createElement("line",hc({},H,{key:"line-".concat(H.x1,"-").concat(H.x2,"-").concat(H.y1,"-").concat(H.y2)}))}))});return z.createElement(et,{className:"recharts-errorBars"},b)}}])}(z.Component);Bg($u,"defaultProps",{stroke:"black",strokeWidth:1.5,width:5,offset:0,layout:"horizontal"});Bg($u,"displayName","ErrorBar");function Bl(e){"@babel/helpers - typeof";return Bl=typeof Symbol=="function"&&typeof Symbol.iterator=="symbol"?function(t){return typeof t}:function(t){return t&&typeof Symbol=="function"&&t.constructor===Symbol&&t!==Symbol.prototype?"symbol":typeof t},Bl(e)}function z2(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter(function(i){return Object.getOwnPropertyDescriptor(e,i).enumerable})),n.push.apply(n,r)}return n}function Ar(e){for(var t=1;t<arguments.length;t++){var n=arguments[t]!=null?arguments[t]:{};t%2?z2(Object(n),!0).forEach(function(r){zL(e,r,n[r])}):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):z2(Object(n)).forEach(function(r){Object.defineProperty(e,r,Object.getOwnPropertyDescriptor(n,r))})}return e}function zL(e,t,n){return t=IL(t),t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function IL(e){var t=DL(e,"string");return Bl(t)=="symbol"?t:t+""}function DL(e,t){if(Bl(e)!="object"||!e)return e;var n=e[Symbol.toPrimitive];if(n!==void 0){var r=n.call(e,t);if(Bl(r)!="object")return r;throw new TypeError("@@toPrimitive must return a primitive value.")}return(t==="string"?String:Number)(e)}var Ug=function(t){var n=t.children,r=t.formattedGraphicalItems,i=t.legendWidth,a=t.legendContent,l=Ct(n,hr);if(!l)return null;var o=hr.defaultProps,s=o!==void 0?Ar(Ar({},o),l.props):{},u;return l.props&&l.props.payload?u=l.props&&l.props.payload:a==="children"?u=(r||[]).reduce(function(f,d){var p=d.item,h=d.props,b=h.sectors||h.data||[];return f.concat(b.map(function(v){return{type:l.props.iconType||p.props.legendType,value:v.name,color:v.fill,payload:v}}))},[]):u=(r||[]).map(function(f){var d=f.item,p=d.type.defaultProps,h=p!==void 0?Ar(Ar({},p),d.props):{},b=h.dataKey,v=h.name,w=h.legendType,y=h.hide;return{inactive:y,dataKey:b,type:s.iconType||w||"square",color:eh(d),value:v||b,payload:h}}),Ar(Ar(Ar({},s),hr.getWithHeight(l,i)),{},{payload:u,item:l})};function Wl(e){"@babel/helpers - typeof";return Wl=typeof Symbol=="function"&&typeof Symbol.iterator=="symbol"?function(t){return typeof t}:function(t){return t&&typeof Symbol=="function"&&t.constructor===Symbol&&t!==Symbol.prototype?"symbol":typeof t},Wl(e)}function I2(e){return BL(e)||RL(e)||FL(e)||LL()}function LL(){throw new TypeError(`Invalid attempt to spread non-iterable instance.
In order to be iterable, non-array objects must have a [Symbol.iterator]() method.`)}function FL(e,t){if(e){if(typeof e=="string")return O1(e,t);var n=Object.prototype.toString.call(e).slice(8,-1);if(n==="Object"&&e.constructor&&(n=e.constructor.name),n==="Map"||n==="Set")return Array.from(e);if(n==="Arguments"||/^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n))return O1(e,t)}}function RL(e){if(typeof Symbol<"u"&&e[Symbol.iterator]!=null||e["@@iterator"]!=null)return Array.from(e)}function BL(e){if(Array.isArray(e))return O1(e)}function O1(e,t){(t==null||t>e.length)&&(t=e.length);for(var n=0,r=new Array(t);n<t;n++)r[n]=e[n];return r}function D2(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter(function(i){return Object.getOwnPropertyDescriptor(e,i).enumerable})),n.push.apply(n,r)}return n}function Le(e){for(var t=1;t<arguments.length;t++){var n=arguments[t]!=null?arguments[t]:{};t%2?D2(Object(n),!0).forEach(function(r){Li(e,r,n[r])}):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):D2(Object(n)).forEach(function(r){Object.defineProperty(e,r,Object.getOwnPropertyDescriptor(n,r))})}return e}function Li(e,t,n){return t=WL(t),t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function WL(e){var t=UL(e,"string");return Wl(t)=="symbol"?t:t+""}function UL(e,t){if(Wl(e)!="object"||!e)return e;var n=e[Symbol.toPrimitive];if(n!==void 0){var r=n.call(e,t);if(Wl(r)!="object")return r;throw new TypeError("@@toPrimitive must return a primitive value.")}return(t==="string"?String:Number)(e)}function Sn(e,t,n){return fe(e)||fe(t)?n:Ye(t)?Gt(e,t,n):re(t)?t(e):n}function sl(e,t,n,r){var i=RD(e,function(o){return Sn(o,t)});if(n==="number"){var a=i.filter(function(o){return G(o)||parseFloat(o)});return a.length?[Eu(a),Cu(a)]:[1/0,-1/0]}var l=r?i.filter(function(o){return!fe(o)}):i;return l.map(function(o){return Ye(o)||o instanceof Date?o:""})}var HL=function(t){var n,r=arguments.length>1&&arguments[1]!==void 0?arguments[1]:[],i=arguments.length>2?arguments[2]:void 0,a=arguments.length>3?arguments[3]:void 0,l=-1,o=(n=r==null?void 0:r.length)!==null&&n!==void 0?n:0;if(o<=1)return 0;if(a&&a.axisType==="angleAxis"&&Math.abs(Math.abs(a.range[1]-a.range[0])-360)<=1e-6)for(var s=a.range,u=0;u<o;u++){var f=u>0?i[u-1].coordinate:i[o-1].coordinate,d=i[u].coordinate,p=u>=o-1?i[0].coordinate:i[u+1].coordinate,h=void 0;if(ln(d-f)!==ln(p-d)){var b=[];if(ln(p-d)===ln(s[1]-s[0])){h=p;var v=d+s[1]-s[0];b[0]=Math.min(v,(v+f)/2),b[1]=Math.max(v,(v+f)/2)}else{h=f;var w=p+s[1]-s[0];b[0]=Math.min(d,(w+d)/2),b[1]=Math.max(d,(w+d)/2)}var y=[Math.min(d,(h+d)/2),Math.max(d,(h+d)/2)];if(t>y[0]&&t<=y[1]||t>=b[0]&&t<=b[1]){l=i[u].index;break}}else{var m=Math.min(f,p),g=Math.max(f,p);if(t>(m+d)/2&&t<=(g+d)/2){l=i[u].index;break}}}else for(var S=0;S<o;S++)if(S===0&&t<=(r[S].coordinate+r[S+1].coordinate)/2||S>0&&S<o-1&&t>(r[S].coordinate+r[S-1].coordinate)/2&&t<=(r[S].coordinate+r[S+1].coordinate)/2||S===o-1&&t>(r[S].coordinate+r[S-1].coordinate)/2){l=r[S].index;break}return l},eh=function(t){var n,r=t,i=r.type.displayName,a=(n=t.type)!==null&&n!==void 0&&n.defaultProps?Le(Le({},t.type.defaultProps),t.props):t.props,l=a.stroke,o=a.fill,s;switch(i){case"Line":s=l;break;case"Area":case"Radar":s=l&&l!=="none"?l:o;break;default:s=o;break}return s},GL=function(t){var n=t.barSize,r=t.totalSize,i=t.stackGroups,a=i===void 0?{}:i;if(!a)return{};for(var l={},o=Object.keys(a),s=0,u=o.length;s<u;s++)for(var f=a[o[s]].stackGroups,d=Object.keys(f),p=0,h=d.length;p<h;p++){var b=f[d[p]],v=b.items,w=b.cateAxisId,y=v.filter(function(_){return $n(_.type).indexOf("Bar")>=0});if(y&&y.length){var m=y[0].type.defaultProps,g=m!==void 0?Le(Le({},m),y[0].props):y[0].props,S=g.barSize,x=g[w];l[x]||(l[x]=[]);var k=fe(S)?n:S;l[x].push({item:y[0],stackList:y.slice(1),barSize:fe(k)?void 0:Jr(k,r,0)})}}return l},VL=function(t){var n=t.barGap,r=t.barCategoryGap,i=t.bandSize,a=t.sizeList,l=a===void 0?[]:a,o=t.maxBarSize,s=l.length;if(s<1)return null;var u=Jr(n,i,0,!0),f,d=[];if(l[0].barSize===+l[0].barSize){var p=!1,h=i/s,b=l.reduce(function(S,x){return S+x.barSize||0},0);b+=(s-1)*u,b>=i&&(b-=(s-1)*u,u=0),b>=i&&h>0&&(p=!0,h*=.9,b=s*h);var v=(i-b)/2>>0,w={offset:v-u,size:0};f=l.reduce(function(S,x){var k={item:x.item,position:{offset:w.offset+w.size+u,size:p?h:x.barSize}},_=[].concat(I2(S),[k]);return w=_[_.length-1].position,x.stackList&&x.stackList.length&&x.stackList.forEach(function(j){_.push({item:j,position:w})}),_},d)}else{var y=Jr(r,i,0,!0);i-2*y-(s-1)*u<=0&&(u=0);var m=(i-2*y-(s-1)*u)/s;m>1&&(m>>=0);var g=o===+o?Math.min(m,o):m;f=l.reduce(function(S,x,k){var _=[].concat(I2(S),[{item:x.item,position:{offset:y+(m+u)*k+(m-g)/2,size:g}}]);return x.stackList&&x.stackList.length&&x.stackList.forEach(function(j){_.push({item:j,position:_[_.length-1].position})}),_},d)}return f},XL=function(t,n,r,i){var a=r.children,l=r.width,o=r.margin,s=l-(o.left||0)-(o.right||0),u=Ug({children:a,legendWidth:s});if(u){var f=i||{},d=f.width,p=f.height,h=u.align,b=u.verticalAlign,v=u.layout;if((v==="vertical"||v==="horizontal"&&b==="middle")&&h!=="center"&&G(t[h]))return Le(Le({},t),{},Li({},h,t[h]+(d||0)));if((v==="horizontal"||v==="vertical"&&h==="center")&&b!=="middle"&&G(t[b]))return Le(Le({},t),{},Li({},b,t[b]+(p||0)))}return t},qL=function(t,n,r){return fe(n)?!0:t==="horizontal"?n==="yAxis":t==="vertical"||r==="x"?n==="xAxis":r==="y"?n==="yAxis":!0},Hg=function(t,n,r,i,a){var l=n.props.children,o=cn(l,$u).filter(function(u){return qL(i,a,u.props.direction)});if(o&&o.length){var s=o.map(function(u){return u.props.dataKey});return t.reduce(function(u,f){var d=Sn(f,r);if(fe(d))return u;var p=Array.isArray(d)?[Eu(d),Cu(d)]:[d,d],h=s.reduce(function(b,v){var w=Sn(f,v,0),y=p[0]-Math.abs(Array.isArray(w)?w[0]:w),m=p[1]+Math.abs(Array.isArray(w)?w[1]:w);return[Math.min(y,b[0]),Math.max(m,b[1])]},[1/0,-1/0]);return[Math.min(h[0],u[0]),Math.max(h[1],u[1])]},[1/0,-1/0])}return null},KL=function(t,n,r,i,a){var l=n.map(function(o){return Hg(t,o,r,a,i)}).filter(function(o){return!fe(o)});return l&&l.length?l.reduce(function(o,s){return[Math.min(o[0],s[0]),Math.max(o[1],s[1])]},[1/0,-1/0]):null},Gg=function(t,n,r,i,a){var l=n.map(function(s){var u=s.props.dataKey;return r==="number"&&u&&Hg(t,s,u,i)||sl(t,u,r,a)});if(r==="number")return l.reduce(function(s,u){return[Math.min(s[0],u[0]),Math.max(s[1],u[1])]},[1/0,-1/0]);var o={};return l.reduce(function(s,u){for(var f=0,d=u.length;f<d;f++)o[u[f]]||(o[u[f]]=!0,s.push(u[f]));return s},[])},Vg=function(t,n){return t==="horizontal"&&n==="xAxis"||t==="vertical"&&n==="yAxis"||t==="centric"&&n==="angleAxis"||t==="radial"&&n==="radiusAxis"},Xg=function(t,n,r,i){if(i)return t.map(function(s){return s.coordinate});var a,l,o=t.map(function(s){return s.coordinate===n&&(a=!0),s.coordinate===r&&(l=!0),s.coordinate});return a||o.push(n),l||o.push(r),o},Mn=function(t,n,r){if(!t)return null;var i=t.scale,a=t.duplicateDomain,l=t.type,o=t.range,s=t.realScaleType==="scaleBand"?i.bandwidth()/2:2,u=(n||r)&&l==="category"&&i.bandwidth?i.bandwidth()/s:0;if(u=t.axisType==="angleAxis"&&(o==null?void 0:o.length)>=2?ln(o[0]-o[1])*2*u:u,n&&(t.ticks||t.niceTicks)){var f=(t.ticks||t.niceTicks).map(function(d){var p=a?a.indexOf(d):d;return{coordinate:i(p)+u,value:d,offset:u}});return f.filter(function(d){return!vo(d.coordinate)})}return t.isCategorical&&t.categoricalDomain?t.categoricalDomain.map(function(d,p){return{coordinate:i(d)+u,value:d,index:p,offset:u}}):i.ticks&&!r?i.ticks(t.tickCount).map(function(d){return{coordinate:i(d)+u,value:d,offset:u}}):i.domain().map(function(d,p){return{coordinate:i(d)+u,value:a?a[d]:d,index:p,offset:u}})},Ld=new WeakMap,Qo=function(t,n){if(typeof n!="function")return t;Ld.has(t)||Ld.set(t,new WeakMap);var r=Ld.get(t);if(r.has(n))return r.get(n);var i=function(){t.apply(void 0,arguments),n.apply(void 0,arguments)};return r.set(n,i),i},YL=function(t,n,r){var i=t.scale,a=t.type,l=t.layout,o=t.axisType;if(i==="auto")return l==="radial"&&o==="radiusAxis"?{scale:$l(),realScaleType:"band"}:l==="radial"&&o==="angleAxis"?{scale:cc(),realScaleType:"linear"}:a==="category"&&n&&(n.indexOf("LineChart")>=0||n.indexOf("AreaChart")>=0||n.indexOf("ComposedChart")>=0&&!r)?{scale:ol(),realScaleType:"point"}:a==="category"?{scale:$l(),realScaleType:"band"}:{scale:cc(),realScaleType:"linear"};if(Qr(i)){var s="scale".concat(vu(i));return{scale:(C2[s]||ol)(),realScaleType:C2[s]?s:"point"}}return re(i)?{scale:i}:{scale:ol(),realScaleType:"point"}},L2=1e-4,ZL=function(t){var n=t.domain();if(!(!n||n.length<=2)){var r=n.length,i=t.range(),a=Math.min(i[0],i[1])-L2,l=Math.max(i[0],i[1])+L2,o=t(n[0]),s=t(n[r-1]);(o<a||o>l||s<a||s>l)&&t.domain([n[0],n[r-1]])}},QL=function(t,n){if(!t)return null;for(var r=0,i=t.length;r<i;r++)if(t[r].item===n)return t[r].position;return null},JL=function(t,n){if(!n||n.length!==2||!G(n[0])||!G(n[1]))return t;var r=Math.min(n[0],n[1]),i=Math.max(n[0],n[1]),a=[t[0],t[1]];return(!G(t[0])||t[0]<r)&&(a[0]=r),(!G(t[1])||t[1]>i)&&(a[1]=i),a[0]>i&&(a[0]=i),a[1]<r&&(a[1]=r),a},eF=function(t){var n=t.length;if(!(n<=0))for(var r=0,i=t[0].length;r<i;++r)for(var a=0,l=0,o=0;o<n;++o){var s=vo(t[o][r][1])?t[o][r][0]:t[o][r][1];s>=0?(t[o][r][0]=a,t[o][r][1]=a+s,a=t[o][r][1]):(t[o][r][0]=l,t[o][r][1]=l+s,l=t[o][r][1])}},tF=function(t){var n=t.length;if(!(n<=0))for(var r=0,i=t[0].length;r<i;++r)for(var a=0,l=0;l<n;++l){var o=vo(t[l][r][1])?t[l][r][0]:t[l][r][1];o>=0?(t[l][r][0]=a,t[l][r][1]=a+o,a=t[l][r][1]):(t[l][r][0]=0,t[l][r][1]=0)}},nF={sign:eF,expand:vj,none:Vi,silhouette:gj,wiggle:xj,positive:tF},rF=function(t,n,r){var i=n.map(function(o){return o.props.dataKey}),a=nF[r],l=yj().keys(i).value(function(o,s){return+Sn(o,s,0)}).order(Zf).offset(a);return l(t)},iF=function(t,n,r,i,a,l){if(!t)return null;var o=l?n.reverse():n,s={},u=o.reduce(function(d,p){var h,b=(h=p.type)!==null&&h!==void 0&&h.defaultProps?Le(Le({},p.type.defaultProps),p.props):p.props,v=b.stackId,w=b.hide;if(w)return d;var y=b[r],m=d[y]||{hasStack:!1,stackGroups:{}};if(Ye(v)){var g=m.stackGroups[v]||{numericAxisId:r,cateAxisId:i,items:[]};g.items.push(p),m.hasStack=!0,m.stackGroups[v]=g}else m.stackGroups[yu("_stackId_")]={numericAxisId:r,cateAxisId:i,items:[p]};return Le(Le({},d),{},Li({},y,m))},s),f={};return Object.keys(u).reduce(function(d,p){var h=u[p];if(h.hasStack){var b={};h.stackGroups=Object.keys(h.stackGroups).reduce(function(v,w){var y=h.stackGroups[w];return Le(Le({},v),{},Li({},w,{numericAxisId:r,cateAxisId:i,items:y.items,stackedData:rF(t,y.items,a)}))},b)}return Le(Le({},d),{},Li({},p,h))},f)},aF=function(t,n){var r=n.realScaleType,i=n.type,a=n.tickCount,l=n.originalDomain,o=n.allowDecimals,s=r||n.scale;if(s!=="auto"&&s!=="linear")return null;if(a&&i==="number"&&l&&(l[0]==="auto"||l[1]==="auto")){var u=t.domain();if(!u.length)return null;var f=yL(u,a,o);return t.domain([Eu(f),Cu(f)]),{niceTicks:f}}if(a&&i==="number"){var d=t.domain(),p=vL(d,a,o);return{niceTicks:p}}return null},F2=function(t){var n=t.axis,r=t.ticks,i=t.offset,a=t.bandSize,l=t.entry,o=t.index;if(n.type==="category")return r[o]?r[o].coordinate+i:null;var s=Sn(l,n.dataKey,n.domain[o]);return fe(s)?null:n.scale(s)-a/2+i},lF=function(t){var n=t.numericAxis,r=n.scale.domain();if(n.type==="number"){var i=Math.min(r[0],r[1]),a=Math.max(r[0],r[1]);return i<=0&&a>=0?0:a<0?a:i}return r[0]},oF=function(t,n){var r,i=(r=t.type)!==null&&r!==void 0&&r.defaultProps?Le(Le({},t.type.defaultProps),t.props):t.props,a=i.stackId;if(Ye(a)){var l=n[a];if(l){var o=l.items.indexOf(t);return o>=0?l.stackedData[o]:null}}return null},sF=function(t){return t.reduce(function(n,r){return[Eu(r.concat([n[0]]).filter(G)),Cu(r.concat([n[1]]).filter(G))]},[1/0,-1/0])},qg=function(t,n,r){return Object.keys(t).reduce(function(i,a){var l=t[a],o=l.stackedData,s=o.reduce(function(u,f){var d=sF(f.slice(n,r+1));return[Math.min(u[0],d[0]),Math.max(u[1],d[1])]},[1/0,-1/0]);return[Math.min(s[0],i[0]),Math.max(s[1],i[1])]},[1/0,-1/0]).map(function(i){return i===1/0||i===-1/0?0:i})},R2=/^dataMin[\s]*-[\s]*([0-9]+([.]{1}[0-9]+){0,1})$/,B2=/^dataMax[\s]*\+[\s]*([0-9]+([.]{1}[0-9]+){0,1})$/,P1=function(t,n,r){if(re(t))return t(n,r);if(!Array.isArray(t))return n;var i=[];if(G(t[0]))i[0]=r?t[0]:Math.min(t[0],n[0]);else if(R2.test(t[0])){var a=+R2.exec(t[0])[1];i[0]=n[0]-a}else re(t[0])?i[0]=t[0](n[0]):i[0]=n[0];if(G(t[1]))i[1]=r?t[1]:Math.max(t[1],n[1]);else if(B2.test(t[1])){var l=+B2.exec(t[1])[1];i[1]=n[1]+l}else re(t[1])?i[1]=t[1](n[1]):i[1]=n[1];return i},yc=function(t,n,r){if(t&&t.scale&&t.scale.bandwidth){var i=t.scale.bandwidth();if(!r||i>0)return i}if(t&&n&&n.length>=2){for(var a=P0(n,function(d){return d.coordinate}),l=1/0,o=1,s=a.length;o<s;o++){var u=a[o],f=a[o-1];l=Math.min((u.coordinate||0)-(f.coordinate||0),l)}return l===1/0?0:l}return r?void 0:0},W2=function(t,n,r){return!t||!t.length||Z0(t,Gt(r,"type.defaultProps.domain"))?n:t},Kg=function(t,n){var r=t.type.defaultProps?Le(Le({},t.type.defaultProps),t.props):t.props,i=r.dataKey,a=r.name,l=r.unit,o=r.formatter,s=r.tooltipType,u=r.chartType,f=r.hide;return Le(Le({},ue(t,!1)),{},{dataKey:i,unit:l,formatter:o,name:a||i,color:eh(t),value:Sn(n,i),type:s,payload:n,chartType:u,hide:f})};function Ul(e){"@babel/helpers - typeof";return Ul=typeof Symbol=="function"&&typeof Symbol.iterator=="symbol"?function(t){return typeof t}:function(t){return t&&typeof Symbol=="function"&&t.constructor===Symbol&&t!==Symbol.prototype?"symbol":typeof t},Ul(e)}function U2(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter(function(i){return Object.getOwnPropertyDescriptor(e,i).enumerable})),n.push.apply(n,r)}return n}function H2(e){for(var t=1;t<arguments.length;t++){var n=arguments[t]!=null?arguments[t]:{};t%2?U2(Object(n),!0).forEach(function(r){cF(e,r,n[r])}):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):U2(Object(n)).forEach(function(r){Object.defineProperty(e,r,Object.getOwnPropertyDescriptor(n,r))})}return e}function cF(e,t,n){return t=uF(t),t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function uF(e){var t=dF(e,"string");return Ul(t)=="symbol"?t:t+""}function dF(e,t){if(Ul(e)!="object"||!e)return e;var n=e[Symbol.toPrimitive];if(n!==void 0){var r=n.call(e,t);if(Ul(r)!="object")return r;throw new TypeError("@@toPrimitive must return a primitive value.")}return(t==="string"?String:Number)(e)}var vc=Math.PI/180,fF=function(t){return t*180/Math.PI},at=function(t,n,r,i){return{x:t+Math.cos(-vc*i)*r,y:n+Math.sin(-vc*i)*r}},pF=function(t,n){var r=t.x,i=t.y,a=n.x,l=n.y;return Math.sqrt(Math.pow(r-a,2)+Math.pow(i-l,2))},hF=function(t,n){var r=t.x,i=t.y,a=n.cx,l=n.cy,o=pF({x:r,y:i},{x:a,y:l});if(o<=0)return{radius:o};var s=(r-a)/o,u=Math.acos(s);return i>l&&(u=2*Math.PI-u),{radius:o,angle:fF(u),angleInRadian:u}},mF=function(t){var n=t.startAngle,r=t.endAngle,i=Math.floor(n/360),a=Math.floor(r/360),l=Math.min(i,a);return{startAngle:n-l*360,endAngle:r-l*360}},yF=function(t,n){var r=n.startAngle,i=n.endAngle,a=Math.floor(r/360),l=Math.floor(i/360),o=Math.min(a,l);return t+o*360},G2=function(t,n){var r=t.x,i=t.y,a=hF({x:r,y:i},n),l=a.radius,o=a.angle,s=n.innerRadius,u=n.outerRadius;if(l<s||l>u)return!1;if(l===0)return!0;var f=mF(n),d=f.startAngle,p=f.endAngle,h=o,b;if(d<=p){for(;h>p;)h-=360;for(;h<d;)h+=360;b=h>=d&&h<=p}else{for(;h>d;)h-=360;for(;h<p;)h+=360;b=h>=p&&h<=d}return b?H2(H2({},n),{},{radius:l,angle:yF(h,n)}):null};function Hl(e){"@babel/helpers - typeof";return Hl=typeof Symbol=="function"&&typeof Symbol.iterator=="symbol"?function(t){return typeof t}:function(t){return t&&typeof Symbol=="function"&&t.constructor===Symbol&&t!==Symbol.prototype?"symbol":typeof t},Hl(e)}var vF=["offset"];function gF(e){return kF(e)||wF(e)||bF(e)||xF()}function xF(){throw new TypeError(`Invalid attempt to spread non-iterable instance.
In order to be iterable, non-array objects must have a [Symbol.iterator]() method.`)}function bF(e,t){if(e){if(typeof e=="string")return A1(e,t);var n=Object.prototype.toString.call(e).slice(8,-1);if(n==="Object"&&e.constructor&&(n=e.constructor.name),n==="Map"||n==="Set")return Array.from(e);if(n==="Arguments"||/^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n))return A1(e,t)}}function wF(e){if(typeof Symbol<"u"&&e[Symbol.iterator]!=null||e["@@iterator"]!=null)return Array.from(e)}function kF(e){if(Array.isArray(e))return A1(e)}function A1(e,t){(t==null||t>e.length)&&(t=e.length);for(var n=0,r=new Array(t);n<t;n++)r[n]=e[n];return r}function SF(e,t){if(e==null)return{};var n=_F(e,t),r,i;if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);for(i=0;i<a.length;i++)r=a[i],!(t.indexOf(r)>=0)&&Object.prototype.propertyIsEnumerable.call(e,r)&&(n[r]=e[r])}return n}function _F(e,t){if(e==null)return{};var n={};for(var r in e)if(Object.prototype.hasOwnProperty.call(e,r)){if(t.indexOf(r)>=0)continue;n[r]=e[r]}return n}function V2(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter(function(i){return Object.getOwnPropertyDescriptor(e,i).enumerable})),n.push.apply(n,r)}return n}function Xe(e){for(var t=1;t<arguments.length;t++){var n=arguments[t]!=null?arguments[t]:{};t%2?V2(Object(n),!0).forEach(function(r){jF(e,r,n[r])}):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):V2(Object(n)).forEach(function(r){Object.defineProperty(e,r,Object.getOwnPropertyDescriptor(n,r))})}return e}function jF(e,t,n){return t=OF(t),t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function OF(e){var t=PF(e,"string");return Hl(t)=="symbol"?t:t+""}function PF(e,t){if(Hl(e)!="object"||!e)return e;var n=e[Symbol.toPrimitive];if(n!==void 0){var r=n.call(e,t);if(Hl(r)!="object")return r;throw new TypeError("@@toPrimitive must return a primitive value.")}return(t==="string"?String:Number)(e)}function Gl(){return Gl=Object.assign?Object.assign.bind():function(e){for(var t=1;t<arguments.length;t++){var n=arguments[t];for(var r in n)Object.prototype.hasOwnProperty.call(n,r)&&(e[r]=n[r])}return e},Gl.apply(this,arguments)}var AF=function(t){var n=t.value,r=t.formatter,i=fe(t.children)?n:t.children;return re(r)?r(i):i},NF=function(t,n){var r=ln(n-t),i=Math.min(Math.abs(n-t),360);return r*i},CF=function(t,n,r){var i=t.position,a=t.viewBox,l=t.offset,o=t.className,s=a,u=s.cx,f=s.cy,d=s.innerRadius,p=s.outerRadius,h=s.startAngle,b=s.endAngle,v=s.clockWise,w=(d+p)/2,y=NF(h,b),m=y>=0?1:-1,g,S;i==="insideStart"?(g=h+m*l,S=v):i==="insideEnd"?(g=b-m*l,S=!v):i==="end"&&(g=b+m*l,S=v),S=y<=0?S:!S;var x=at(u,f,w,g),k=at(u,f,w,g+(S?1:-1)*359),_="M".concat(x.x,",").concat(x.y,`
    A`).concat(w,",").concat(w,",0,1,").concat(S?0:1,`,
    `).concat(k.x,",").concat(k.y),j=fe(t.id)?yu("recharts-radial-line-"):t.id;return z.createElement("text",Gl({},r,{dominantBaseline:"central",className:de("recharts-radial-bar-label",o)}),z.createElement("defs",null,z.createElement("path",{id:j,d:_})),z.createElement("textPath",{xlinkHref:"#".concat(j)},n))},EF=function(t){var n=t.viewBox,r=t.offset,i=t.position,a=n,l=a.cx,o=a.cy,s=a.innerRadius,u=a.outerRadius,f=a.startAngle,d=a.endAngle,p=(f+d)/2;if(i==="outside"){var h=at(l,o,u+r,p),b=h.x,v=h.y;return{x:b,y:v,textAnchor:b>=l?"start":"end",verticalAnchor:"middle"}}if(i==="center")return{x:l,y:o,textAnchor:"middle",verticalAnchor:"middle"};if(i==="centerTop")return{x:l,y:o,textAnchor:"middle",verticalAnchor:"start"};if(i==="centerBottom")return{x:l,y:o,textAnchor:"middle",verticalAnchor:"end"};var w=(s+u)/2,y=at(l,o,w,p),m=y.x,g=y.y;return{x:m,y:g,textAnchor:"middle",verticalAnchor:"middle"}},MF=function(t){var n=t.viewBox,r=t.parentViewBox,i=t.offset,a=t.position,l=n,o=l.x,s=l.y,u=l.width,f=l.height,d=f>=0?1:-1,p=d*i,h=d>0?"end":"start",b=d>0?"start":"end",v=u>=0?1:-1,w=v*i,y=v>0?"end":"start",m=v>0?"start":"end";if(a==="top"){var g={x:o+u/2,y:s-d*i,textAnchor:"middle",verticalAnchor:h};return Xe(Xe({},g),r?{height:Math.max(s-r.y,0),width:u}:{})}if(a==="bottom"){var S={x:o+u/2,y:s+f+p,textAnchor:"middle",verticalAnchor:b};return Xe(Xe({},S),r?{height:Math.max(r.y+r.height-(s+f),0),width:u}:{})}if(a==="left"){var x={x:o-w,y:s+f/2,textAnchor:y,verticalAnchor:"middle"};return Xe(Xe({},x),r?{width:Math.max(x.x-r.x,0),height:f}:{})}if(a==="right"){var k={x:o+u+w,y:s+f/2,textAnchor:m,verticalAnchor:"middle"};return Xe(Xe({},k),r?{width:Math.max(r.x+r.width-k.x,0),height:f}:{})}var _=r?{width:u,height:f}:{};return a==="insideLeft"?Xe({x:o+w,y:s+f/2,textAnchor:m,verticalAnchor:"middle"},_):a==="insideRight"?Xe({x:o+u-w,y:s+f/2,textAnchor:y,verticalAnchor:"middle"},_):a==="insideTop"?Xe({x:o+u/2,y:s+p,textAnchor:"middle",verticalAnchor:b},_):a==="insideBottom"?Xe({x:o+u/2,y:s+f-p,textAnchor:"middle",verticalAnchor:h},_):a==="insideTopLeft"?Xe({x:o+w,y:s+p,textAnchor:m,verticalAnchor:b},_):a==="insideTopRight"?Xe({x:o+u-w,y:s+p,textAnchor:y,verticalAnchor:b},_):a==="insideBottomLeft"?Xe({x:o+w,y:s+f-p,textAnchor:m,verticalAnchor:h},_):a==="insideBottomRight"?Xe({x:o+u-w,y:s+f-p,textAnchor:y,verticalAnchor:h},_):va(a)&&(G(a.x)||Lr(a.x))&&(G(a.y)||Lr(a.y))?Xe({x:o+Jr(a.x,u),y:s+Jr(a.y,f),textAnchor:"end",verticalAnchor:"end"},_):Xe({x:o+u/2,y:s+f/2,textAnchor:"middle",verticalAnchor:"middle"},_)},TF=function(t){return"cx"in t&&G(t.cx)};function pt(e){var t=e.offset,n=t===void 0?5:t,r=SF(e,vF),i=Xe({offset:n},r),a=i.viewBox,l=i.position,o=i.value,s=i.children,u=i.content,f=i.className,d=f===void 0?"":f,p=i.textBreakAll;if(!a||fe(o)&&fe(s)&&!N.isValidElement(u)&&!re(u))return null;if(N.isValidElement(u))return N.cloneElement(u,i);var h;if(re(u)){if(h=N.createElement(u,i),N.isValidElement(h))return h}else h=AF(i);var b=TF(a),v=ue(i,!0);if(b&&(l==="insideStart"||l==="insideEnd"||l==="end"))return CF(i,h,v);var w=b?EF(i):MF(i);return z.createElement(nc,Gl({className:de("recharts-label",d)},v,w,{breakAll:p}),h)}pt.displayName="Label";var Yg=function(t){var n=t.cx,r=t.cy,i=t.angle,a=t.startAngle,l=t.endAngle,o=t.r,s=t.radius,u=t.innerRadius,f=t.outerRadius,d=t.x,p=t.y,h=t.top,b=t.left,v=t.width,w=t.height,y=t.clockWise,m=t.labelViewBox;if(m)return m;if(G(v)&&G(w)){if(G(d)&&G(p))return{x:d,y:p,width:v,height:w};if(G(h)&&G(b))return{x:h,y:b,width:v,height:w}}return G(d)&&G(p)?{x:d,y:p,width:0,height:0}:G(n)&&G(r)?{cx:n,cy:r,startAngle:a||i||0,endAngle:l||i||0,innerRadius:u||0,outerRadius:f||s||o||0,clockWise:y}:t.viewBox?t.viewBox:{}},$F=function(t,n){return t?t===!0?z.createElement(pt,{key:"label-implicit",viewBox:n}):Ye(t)?z.createElement(pt,{key:"label-implicit",viewBox:n,value:t}):N.isValidElement(t)?t.type===pt?N.cloneElement(t,{key:"label-implicit",viewBox:n}):z.createElement(pt,{key:"label-implicit",content:t,viewBox:n}):re(t)?z.createElement(pt,{key:"label-implicit",content:t,viewBox:n}):va(t)?z.createElement(pt,Gl({viewBox:n},t,{key:"label-implicit"})):null:null},zF=function(t,n){var r=arguments.length>2&&arguments[2]!==void 0?arguments[2]:!0;if(!t||!t.children&&r&&!t.label)return null;var i=t.children,a=Yg(t),l=cn(i,pt).map(function(s,u){return N.cloneElement(s,{viewBox:n||a,key:"label-".concat(u)})});if(!r)return l;var o=$F(t.label,n||a);return[o].concat(gF(l))};pt.parseViewBox=Yg;pt.renderCallByParent=zF;function IF(e){var t=e==null?0:e.length;return t?e[t-1]:void 0}var DF=IF;const LF=ke(DF);function Vl(e){"@babel/helpers - typeof";return Vl=typeof Symbol=="function"&&typeof Symbol.iterator=="symbol"?function(t){return typeof t}:function(t){return t&&typeof Symbol=="function"&&t.constructor===Symbol&&t!==Symbol.prototype?"symbol":typeof t},Vl(e)}var FF=["valueAccessor"],RF=["data","dataKey","clockWise","id","textBreakAll"];function BF(e){return GF(e)||HF(e)||UF(e)||WF()}function WF(){throw new TypeError(`Invalid attempt to spread non-iterable instance.
In order to be iterable, non-array objects must have a [Symbol.iterator]() method.`)}function UF(e,t){if(e){if(typeof e=="string")return N1(e,t);var n=Object.prototype.toString.call(e).slice(8,-1);if(n==="Object"&&e.constructor&&(n=e.constructor.name),n==="Map"||n==="Set")return Array.from(e);if(n==="Arguments"||/^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n))return N1(e,t)}}function HF(e){if(typeof Symbol<"u"&&e[Symbol.iterator]!=null||e["@@iterator"]!=null)return Array.from(e)}function GF(e){if(Array.isArray(e))return N1(e)}function N1(e,t){(t==null||t>e.length)&&(t=e.length);for(var n=0,r=new Array(t);n<t;n++)r[n]=e[n];return r}function gc(){return gc=Object.assign?Object.assign.bind():function(e){for(var t=1;t<arguments.length;t++){var n=arguments[t];for(var r in n)Object.prototype.hasOwnProperty.call(n,r)&&(e[r]=n[r])}return e},gc.apply(this,arguments)}function X2(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter(function(i){return Object.getOwnPropertyDescriptor(e,i).enumerable})),n.push.apply(n,r)}return n}function q2(e){for(var t=1;t<arguments.length;t++){var n=arguments[t]!=null?arguments[t]:{};t%2?X2(Object(n),!0).forEach(function(r){VF(e,r,n[r])}):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):X2(Object(n)).forEach(function(r){Object.defineProperty(e,r,Object.getOwnPropertyDescriptor(n,r))})}return e}function VF(e,t,n){return t=XF(t),t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function XF(e){var t=qF(e,"string");return Vl(t)=="symbol"?t:t+""}function qF(e,t){if(Vl(e)!="object"||!e)return e;var n=e[Symbol.toPrimitive];if(n!==void 0){var r=n.call(e,t);if(Vl(r)!="object")return r;throw new TypeError("@@toPrimitive must return a primitive value.")}return(t==="string"?String:Number)(e)}function K2(e,t){if(e==null)return{};var n=KF(e,t),r,i;if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);for(i=0;i<a.length;i++)r=a[i],!(t.indexOf(r)>=0)&&Object.prototype.propertyIsEnumerable.call(e,r)&&(n[r]=e[r])}return n}function KF(e,t){if(e==null)return{};var n={};for(var r in e)if(Object.prototype.hasOwnProperty.call(e,r)){if(t.indexOf(r)>=0)continue;n[r]=e[r]}return n}var YF=function(t){return Array.isArray(t.value)?LF(t.value):t.value};function Vr(e){var t=e.valueAccessor,n=t===void 0?YF:t,r=K2(e,FF),i=r.data,a=r.dataKey,l=r.clockWise,o=r.id,s=r.textBreakAll,u=K2(r,RF);return!i||!i.length?null:z.createElement(et,{className:"recharts-label-list"},i.map(function(f,d){var p=fe(a)?n(f,d):Sn(f&&f.payload,a),h=fe(o)?{}:{id:"".concat(o,"-").concat(d)};return z.createElement(pt,gc({},ue(f,!0),u,h,{parentViewBox:f.parentViewBox,value:p,textBreakAll:s,viewBox:pt.parseViewBox(fe(l)?f:q2(q2({},f),{},{clockWise:l})),key:"label-".concat(d),index:d}))}))}Vr.displayName="LabelList";function ZF(e,t){return e?e===!0?z.createElement(Vr,{key:"labelList-implicit",data:t}):z.isValidElement(e)||re(e)?z.createElement(Vr,{key:"labelList-implicit",data:t,content:e}):va(e)?z.createElement(Vr,gc({data:t},e,{key:"labelList-implicit"})):null:null}function QF(e,t){var n=arguments.length>2&&arguments[2]!==void 0?arguments[2]:!0;if(!e||!e.children&&n&&!e.label)return null;var r=e.children,i=cn(r,Vr).map(function(l,o){return N.cloneElement(l,{data:t,key:"labelList-".concat(o)})});if(!n)return i;var a=ZF(e.label,t);return[a].concat(BF(i))}Vr.renderCallByParent=QF;function Xl(e){"@babel/helpers - typeof";return Xl=typeof Symbol=="function"&&typeof Symbol.iterator=="symbol"?function(t){return typeof t}:function(t){return t&&typeof Symbol=="function"&&t.constructor===Symbol&&t!==Symbol.prototype?"symbol":typeof t},Xl(e)}function C1(){return C1=Object.assign?Object.assign.bind():function(e){for(var t=1;t<arguments.length;t++){var n=arguments[t];for(var r in n)Object.prototype.hasOwnProperty.call(n,r)&&(e[r]=n[r])}return e},C1.apply(this,arguments)}function Y2(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter(function(i){return Object.getOwnPropertyDescriptor(e,i).enumerable})),n.push.apply(n,r)}return n}function Z2(e){for(var t=1;t<arguments.length;t++){var n=arguments[t]!=null?arguments[t]:{};t%2?Y2(Object(n),!0).forEach(function(r){JF(e,r,n[r])}):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):Y2(Object(n)).forEach(function(r){Object.defineProperty(e,r,Object.getOwnPropertyDescriptor(n,r))})}return e}function JF(e,t,n){return t=eR(t),t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function eR(e){var t=tR(e,"string");return Xl(t)=="symbol"?t:t+""}function tR(e,t){if(Xl(e)!="object"||!e)return e;var n=e[Symbol.toPrimitive];if(n!==void 0){var r=n.call(e,t);if(Xl(r)!="object")return r;throw new TypeError("@@toPrimitive must return a primitive value.")}return(t==="string"?String:Number)(e)}var nR=function(t,n){var r=ln(n-t),i=Math.min(Math.abs(n-t),359.999);return r*i},Jo=function(t){var n=t.cx,r=t.cy,i=t.radius,a=t.angle,l=t.sign,o=t.isExternal,s=t.cornerRadius,u=t.cornerIsExternal,f=s*(o?1:-1)+i,d=Math.asin(s/f)/vc,p=u?a:a+l*d,h=at(n,r,f,p),b=at(n,r,i,p),v=u?a-l*d:a,w=at(n,r,f*Math.cos(d*vc),v);return{center:h,circleTangency:b,lineTangency:w,theta:d}},Zg=function(t){var n=t.cx,r=t.cy,i=t.innerRadius,a=t.outerRadius,l=t.startAngle,o=t.endAngle,s=nR(l,o),u=l+s,f=at(n,r,a,l),d=at(n,r,a,u),p="M ".concat(f.x,",").concat(f.y,`
    A `).concat(a,",").concat(a,`,0,
    `).concat(+(Math.abs(s)>180),",").concat(+(l>u),`,
    `).concat(d.x,",").concat(d.y,`
  `);if(i>0){var h=at(n,r,i,l),b=at(n,r,i,u);p+="L ".concat(b.x,",").concat(b.y,`
            A `).concat(i,",").concat(i,`,0,
            `).concat(+(Math.abs(s)>180),",").concat(+(l<=u),`,
            `).concat(h.x,",").concat(h.y," Z")}else p+="L ".concat(n,",").concat(r," Z");return p},rR=function(t){var n=t.cx,r=t.cy,i=t.innerRadius,a=t.outerRadius,l=t.cornerRadius,o=t.forceCornerRadius,s=t.cornerIsExternal,u=t.startAngle,f=t.endAngle,d=ln(f-u),p=Jo({cx:n,cy:r,radius:a,angle:u,sign:d,cornerRadius:l,cornerIsExternal:s}),h=p.circleTangency,b=p.lineTangency,v=p.theta,w=Jo({cx:n,cy:r,radius:a,angle:f,sign:-d,cornerRadius:l,cornerIsExternal:s}),y=w.circleTangency,m=w.lineTangency,g=w.theta,S=s?Math.abs(u-f):Math.abs(u-f)-v-g;if(S<0)return o?"M ".concat(b.x,",").concat(b.y,`
        a`).concat(l,",").concat(l,",0,0,1,").concat(l*2,`,0
        a`).concat(l,",").concat(l,",0,0,1,").concat(-l*2,`,0
      `):Zg({cx:n,cy:r,innerRadius:i,outerRadius:a,startAngle:u,endAngle:f});var x="M ".concat(b.x,",").concat(b.y,`
    A`).concat(l,",").concat(l,",0,0,").concat(+(d<0),",").concat(h.x,",").concat(h.y,`
    A`).concat(a,",").concat(a,",0,").concat(+(S>180),",").concat(+(d<0),",").concat(y.x,",").concat(y.y,`
    A`).concat(l,",").concat(l,",0,0,").concat(+(d<0),",").concat(m.x,",").concat(m.y,`
  `);if(i>0){var k=Jo({cx:n,cy:r,radius:i,angle:u,sign:d,isExternal:!0,cornerRadius:l,cornerIsExternal:s}),_=k.circleTangency,j=k.lineTangency,O=k.theta,M=Jo({cx:n,cy:r,radius:i,angle:f,sign:-d,isExternal:!0,cornerRadius:l,cornerIsExternal:s}),E=M.circleTangency,A=M.lineTangency,P=M.theta,$=s?Math.abs(u-f):Math.abs(u-f)-O-P;if($<0&&l===0)return"".concat(x,"L").concat(n,",").concat(r,"Z");x+="L".concat(A.x,",").concat(A.y,`
      A`).concat(l,",").concat(l,",0,0,").concat(+(d<0),",").concat(E.x,",").concat(E.y,`
      A`).concat(i,",").concat(i,",0,").concat(+($>180),",").concat(+(d>0),",").concat(_.x,",").concat(_.y,`
      A`).concat(l,",").concat(l,",0,0,").concat(+(d<0),",").concat(j.x,",").concat(j.y,"Z")}else x+="L".concat(n,",").concat(r,"Z");return x},iR={cx:0,cy:0,innerRadius:0,outerRadius:0,startAngle:0,endAngle:0,cornerRadius:0,forceCornerRadius:!1,cornerIsExternal:!1},Qg=function(t){var n=Z2(Z2({},iR),t),r=n.cx,i=n.cy,a=n.innerRadius,l=n.outerRadius,o=n.cornerRadius,s=n.forceCornerRadius,u=n.cornerIsExternal,f=n.startAngle,d=n.endAngle,p=n.className;if(l<a||f===d)return null;var h=de("recharts-sector",p),b=l-a,v=Jr(o,b,0,!0),w;return v>0&&Math.abs(f-d)<360?w=rR({cx:r,cy:i,innerRadius:a,outerRadius:l,cornerRadius:Math.min(v,b/2),forceCornerRadius:s,cornerIsExternal:u,startAngle:f,endAngle:d}):w=Zg({cx:r,cy:i,innerRadius:a,outerRadius:l,startAngle:f,endAngle:d}),z.createElement("path",C1({},ue(n,!0),{className:h,d:w,role:"img"}))};function ql(e){"@babel/helpers - typeof";return ql=typeof Symbol=="function"&&typeof Symbol.iterator=="symbol"?function(t){return typeof t}:function(t){return t&&typeof Symbol=="function"&&t.constructor===Symbol&&t!==Symbol.prototype?"symbol":typeof t},ql(e)}function E1(){return E1=Object.assign?Object.assign.bind():function(e){for(var t=1;t<arguments.length;t++){var n=arguments[t];for(var r in n)Object.prototype.hasOwnProperty.call(n,r)&&(e[r]=n[r])}return e},E1.apply(this,arguments)}function Q2(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter(function(i){return Object.getOwnPropertyDescriptor(e,i).enumerable})),n.push.apply(n,r)}return n}function J2(e){for(var t=1;t<arguments.length;t++){var n=arguments[t]!=null?arguments[t]:{};t%2?Q2(Object(n),!0).forEach(function(r){aR(e,r,n[r])}):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):Q2(Object(n)).forEach(function(r){Object.defineProperty(e,r,Object.getOwnPropertyDescriptor(n,r))})}return e}function aR(e,t,n){return t=lR(t),t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function lR(e){var t=oR(e,"string");return ql(t)=="symbol"?t:t+""}function oR(e,t){if(ql(e)!="object"||!e)return e;var n=e[Symbol.toPrimitive];if(n!==void 0){var r=n.call(e,t);if(ql(r)!="object")return r;throw new TypeError("@@toPrimitive must return a primitive value.")}return(t==="string"?String:Number)(e)}var e5={curveBasisClosed:aj,curveBasisOpen:lj,curveBasis:ij,curveBumpX:H_,curveBumpY:G_,curveLinearClosed:oj,curveLinear:xu,curveMonotoneX:sj,curveMonotoneY:cj,curveNatural:uj,curveStep:dj,curveStepAfter:pj,curveStepBefore:fj},es=function(t){return t.x===+t.x&&t.y===+t.y},Wa=function(t){return t.x},Ua=function(t){return t.y},sR=function(t,n){if(re(t))return t;var r="curve".concat(vu(t));return(r==="curveMonotone"||r==="curveBump")&&n?e5["".concat(r).concat(n==="vertical"?"Y":"X")]:e5[r]||xu},cR=function(t){var n=t.type,r=n===void 0?"linear":n,i=t.points,a=i===void 0?[]:i,l=t.baseLine,o=t.layout,s=t.connectNulls,u=s===void 0?!1:s,f=sR(r,o),d=u?a.filter(function(v){return es(v)}):a,p;if(Array.isArray(l)){var h=u?l.filter(function(v){return es(v)}):l,b=d.map(function(v,w){return J2(J2({},v),{},{base:h[w]})});return o==="vertical"?p=Ho().y(Ua).x1(Wa).x0(function(v){return v.base.x}):p=Ho().x(Wa).y1(Ua).y0(function(v){return v.base.y}),p.defined(es).curve(f),p(b)}return o==="vertical"&&G(l)?p=Ho().y(Ua).x1(Wa).x0(l):G(l)?p=Ho().x(Wa).y1(Ua).y0(l):p=Qv().x(Wa).y(Ua),p.defined(es).curve(f),p(d)},t5=function(t){var n=t.className,r=t.points,i=t.path,a=t.pathRef;if((!r||!r.length)&&!i)return null;var l=r&&r.length?cR(t):i;return N.createElement("path",E1({},ue(t,!1),Bs(t),{className:de("recharts-curve",n),d:l,ref:a}))},Jg={exports:{}},uR="SECRET_DO_NOT_PASS_THIS_OR_YOU_WILL_BE_FIRED",dR=uR,fR=dR;function e3(){}function t3(){}t3.resetWarningCache=e3;var pR=function(){function e(r,i,a,l,o,s){if(s!==fR){var u=new Error("Calling PropTypes validators directly is not supported by the `prop-types` package. Use PropTypes.checkPropTypes() to call them. Read more at http://fb.me/use-check-prop-types");throw u.name="Invariant Violation",u}}e.isRequired=e;function t(){return e}var n={array:e,bigint:e,bool:e,func:e,number:e,object:e,string:e,symbol:e,any:e,arrayOf:t,element:e,elementType:e,instanceOf:t,node:e,objectOf:t,oneOf:t,oneOfType:t,shape:t,exact:t,checkPropTypes:t3,resetWarningCache:e3};return n.PropTypes=n,n};Jg.exports=pR();var hR=Jg.exports;const me=ke(hR);var mR=Object.getOwnPropertyNames,yR=Object.getOwnPropertySymbols,vR=Object.prototype.hasOwnProperty;function n5(e,t){return function(r,i,a){return e(r,i,a)&&t(r,i,a)}}function ts(e){return function(n,r,i){if(!n||!r||typeof n!="object"||typeof r!="object")return e(n,r,i);var a=i.cache,l=a.get(n),o=a.get(r);if(l&&o)return l===r&&o===n;a.set(n,r),a.set(r,n);var s=e(n,r,i);return a.delete(n),a.delete(r),s}}function gR(e){return e!=null?e[Symbol.toStringTag]:void 0}function r5(e){return mR(e).concat(yR(e))}var xR=Object.hasOwn||function(e,t){return vR.call(e,t)};function si(e,t){return e===t||!e&&!t&&e!==e&&t!==t}var bR="__v",wR="__o",kR="_owner",i5=Object.getOwnPropertyDescriptor,a5=Object.keys;function SR(e,t,n){var r=e.length;if(t.length!==r)return!1;for(;r-- >0;)if(!n.equals(e[r],t[r],r,r,e,t,n))return!1;return!0}function _R(e,t){return si(e.getTime(),t.getTime())}function jR(e,t){return e.name===t.name&&e.message===t.message&&e.cause===t.cause&&e.stack===t.stack}function OR(e,t){return e===t}function l5(e,t,n){var r=e.size;if(r!==t.size)return!1;if(!r)return!0;for(var i=new Array(r),a=e.entries(),l,o,s=0;(l=a.next())&&!l.done;){for(var u=t.entries(),f=!1,d=0;(o=u.next())&&!o.done;){if(i[d]){d++;continue}var p=l.value,h=o.value;if(n.equals(p[0],h[0],s,d,e,t,n)&&n.equals(p[1],h[1],p[0],h[0],e,t,n)){f=i[d]=!0;break}d++}if(!f)return!1;s++}return!0}var PR=si;function AR(e,t,n){var r=a5(e),i=r.length;if(a5(t).length!==i)return!1;for(;i-- >0;)if(!n3(e,t,n,r[i]))return!1;return!0}function Ha(e,t,n){var r=r5(e),i=r.length;if(r5(t).length!==i)return!1;for(var a,l,o;i-- >0;)if(a=r[i],!n3(e,t,n,a)||(l=i5(e,a),o=i5(t,a),(l||o)&&(!l||!o||l.configurable!==o.configurable||l.enumerable!==o.enumerable||l.writable!==o.writable)))return!1;return!0}function NR(e,t){return si(e.valueOf(),t.valueOf())}function CR(e,t){return e.source===t.source&&e.flags===t.flags}function o5(e,t,n){var r=e.size;if(r!==t.size)return!1;if(!r)return!0;for(var i=new Array(r),a=e.values(),l,o;(l=a.next())&&!l.done;){for(var s=t.values(),u=!1,f=0;(o=s.next())&&!o.done;){if(!i[f]&&n.equals(l.value,o.value,l.value,o.value,e,t,n)){u=i[f]=!0;break}f++}if(!u)return!1}return!0}function ER(e,t){var n=e.length;if(t.length!==n)return!1;for(;n-- >0;)if(e[n]!==t[n])return!1;return!0}function MR(e,t){return e.hostname===t.hostname&&e.pathname===t.pathname&&e.protocol===t.protocol&&e.port===t.port&&e.hash===t.hash&&e.username===t.username&&e.password===t.password}function n3(e,t,n,r){return(r===kR||r===wR||r===bR)&&(e.$$typeof||t.$$typeof)?!0:xR(t,r)&&n.equals(e[r],t[r],r,r,e,t,n)}var TR="[object Arguments]",$R="[object Boolean]",zR="[object Date]",IR="[object Error]",DR="[object Map]",LR="[object Number]",FR="[object Object]",RR="[object RegExp]",BR="[object Set]",WR="[object String]",UR="[object URL]",HR=Array.isArray,s5=typeof ArrayBuffer=="function"&&ArrayBuffer.isView?ArrayBuffer.isView:null,c5=Object.assign,GR=Object.prototype.toString.call.bind(Object.prototype.toString);function VR(e){var t=e.areArraysEqual,n=e.areDatesEqual,r=e.areErrorsEqual,i=e.areFunctionsEqual,a=e.areMapsEqual,l=e.areNumbersEqual,o=e.areObjectsEqual,s=e.arePrimitiveWrappersEqual,u=e.areRegExpsEqual,f=e.areSetsEqual,d=e.areTypedArraysEqual,p=e.areUrlsEqual,h=e.unknownTagComparators;return function(v,w,y){if(v===w)return!0;if(v==null||w==null)return!1;var m=typeof v;if(m!==typeof w)return!1;if(m!=="object")return m==="number"?l(v,w,y):m==="function"?i(v,w,y):!1;var g=v.constructor;if(g!==w.constructor)return!1;if(g===Object)return o(v,w,y);if(HR(v))return t(v,w,y);if(s5!=null&&s5(v))return d(v,w,y);if(g===Date)return n(v,w,y);if(g===RegExp)return u(v,w,y);if(g===Map)return a(v,w,y);if(g===Set)return f(v,w,y);var S=GR(v);if(S===zR)return n(v,w,y);if(S===RR)return u(v,w,y);if(S===DR)return a(v,w,y);if(S===BR)return f(v,w,y);if(S===FR)return typeof v.then!="function"&&typeof w.then!="function"&&o(v,w,y);if(S===UR)return p(v,w,y);if(S===IR)return r(v,w,y);if(S===TR)return o(v,w,y);if(S===$R||S===LR||S===WR)return s(v,w,y);if(h){var x=h[S];if(!x){var k=gR(v);k&&(x=h[k])}if(x)return x(v,w,y)}return!1}}function XR(e){var t=e.circular,n=e.createCustomConfig,r=e.strict,i={areArraysEqual:r?Ha:SR,areDatesEqual:_R,areErrorsEqual:jR,areFunctionsEqual:OR,areMapsEqual:r?n5(l5,Ha):l5,areNumbersEqual:PR,areObjectsEqual:r?Ha:AR,arePrimitiveWrappersEqual:NR,areRegExpsEqual:CR,areSetsEqual:r?n5(o5,Ha):o5,areTypedArraysEqual:r?Ha:ER,areUrlsEqual:MR,unknownTagComparators:void 0};if(n&&(i=c5({},i,n(i))),t){var a=ts(i.areArraysEqual),l=ts(i.areMapsEqual),o=ts(i.areObjectsEqual),s=ts(i.areSetsEqual);i=c5({},i,{areArraysEqual:a,areMapsEqual:l,areObjectsEqual:o,areSetsEqual:s})}return i}function qR(e){return function(t,n,r,i,a,l,o){return e(t,n,o)}}function KR(e){var t=e.circular,n=e.comparator,r=e.createState,i=e.equals,a=e.strict;if(r)return function(s,u){var f=r(),d=f.cache,p=d===void 0?t?new WeakMap:void 0:d,h=f.meta;return n(s,u,{cache:p,equals:i,meta:h,strict:a})};if(t)return function(s,u){return n(s,u,{cache:new WeakMap,equals:i,meta:void 0,strict:a})};var l={cache:void 0,equals:i,meta:void 0,strict:a};return function(s,u){return n(s,u,l)}}var YR=Or();Or({strict:!0});Or({circular:!0});Or({circular:!0,strict:!0});Or({createInternalComparator:function(){return si}});Or({strict:!0,createInternalComparator:function(){return si}});Or({circular:!0,createInternalComparator:function(){return si}});Or({circular:!0,createInternalComparator:function(){return si},strict:!0});function Or(e){e===void 0&&(e={});var t=e.circular,n=t===void 0?!1:t,r=e.createInternalComparator,i=e.createState,a=e.strict,l=a===void 0?!1:a,o=XR(e),s=VR(o),u=r?r(s):qR(s);return KR({circular:n,comparator:s,createState:i,equals:u,strict:l})}function ZR(e){typeof requestAnimationFrame<"u"&&requestAnimationFrame(e)}function u5(e){var t=arguments.length>1&&arguments[1]!==void 0?arguments[1]:0,n=-1,r=function i(a){n<0&&(n=a),a-n>t?(e(a),n=-1):ZR(i)};requestAnimationFrame(r)}function M1(e){"@babel/helpers - typeof";return M1=typeof Symbol=="function"&&typeof Symbol.iterator=="symbol"?function(t){return typeof t}:function(t){return t&&typeof Symbol=="function"&&t.constructor===Symbol&&t!==Symbol.prototype?"symbol":typeof t},M1(e)}function QR(e){return nB(e)||tB(e)||eB(e)||JR()}function JR(){throw new TypeError(`Invalid attempt to destructure non-iterable instance.
In order to be iterable, non-array objects must have a [Symbol.iterator]() method.`)}function eB(e,t){if(e){if(typeof e=="string")return d5(e,t);var n=Object.prototype.toString.call(e).slice(8,-1);if(n==="Object"&&e.constructor&&(n=e.constructor.name),n==="Map"||n==="Set")return Array.from(e);if(n==="Arguments"||/^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n))return d5(e,t)}}function d5(e,t){(t==null||t>e.length)&&(t=e.length);for(var n=0,r=new Array(t);n<t;n++)r[n]=e[n];return r}function tB(e){if(typeof Symbol<"u"&&e[Symbol.iterator]!=null||e["@@iterator"]!=null)return Array.from(e)}function nB(e){if(Array.isArray(e))return e}function rB(){var e={},t=function(){return null},n=!1,r=function i(a){if(!n){if(Array.isArray(a)){if(!a.length)return;var l=a,o=QR(l),s=o[0],u=o.slice(1);if(typeof s=="number"){u5(i.bind(null,u),s);return}i(s),u5(i.bind(null,u));return}M1(a)==="object"&&(e=a,t(e)),typeof a=="function"&&a()}};return{stop:function(){n=!0},start:function(a){n=!1,r(a)},subscribe:function(a){return t=a,function(){t=function(){return null}}}}}function Kl(e){"@babel/helpers - typeof";return Kl=typeof Symbol=="function"&&typeof Symbol.iterator=="symbol"?function(t){return typeof t}:function(t){return t&&typeof Symbol=="function"&&t.constructor===Symbol&&t!==Symbol.prototype?"symbol":typeof t},Kl(e)}function f5(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter(function(i){return Object.getOwnPropertyDescriptor(e,i).enumerable})),n.push.apply(n,r)}return n}function p5(e){for(var t=1;t<arguments.length;t++){var n=arguments[t]!=null?arguments[t]:{};t%2?f5(Object(n),!0).forEach(function(r){r3(e,r,n[r])}):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):f5(Object(n)).forEach(function(r){Object.defineProperty(e,r,Object.getOwnPropertyDescriptor(n,r))})}return e}function r3(e,t,n){return t=iB(t),t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function iB(e){var t=aB(e,"string");return Kl(t)==="symbol"?t:String(t)}function aB(e,t){if(Kl(e)!=="object"||e===null)return e;var n=e[Symbol.toPrimitive];if(n!==void 0){var r=n.call(e,t);if(Kl(r)!=="object")return r;throw new TypeError("@@toPrimitive must return a primitive value.")}return(t==="string"?String:Number)(e)}var lB=function(t,n){return[Object.keys(t),Object.keys(n)].reduce(function(r,i){return r.filter(function(a){return i.includes(a)})})},oB=function(t){return t},sB=function(t){return t.replace(/([A-Z])/g,function(n){return"-".concat(n.toLowerCase())})},cl=function(t,n){return Object.keys(n).reduce(function(r,i){return p5(p5({},r),{},r3({},i,t(i,n[i])))},{})},h5=function(t,n,r){return t.map(function(i){return"".concat(sB(i)," ").concat(n,"ms ").concat(r)}).join(",")};function cB(e,t){return fB(e)||dB(e,t)||i3(e,t)||uB()}function uB(){throw new TypeError(`Invalid attempt to destructure non-iterable instance.
In order to be iterable, non-array objects must have a [Symbol.iterator]() method.`)}function dB(e,t){var n=e==null?null:typeof Symbol<"u"&&e[Symbol.iterator]||e["@@iterator"];if(n!=null){var r,i,a,l,o=[],s=!0,u=!1;try{if(a=(n=n.call(e)).next,t!==0)for(;!(s=(r=a.call(n)).done)&&(o.push(r.value),o.length!==t);s=!0);}catch(f){u=!0,i=f}finally{try{if(!s&&n.return!=null&&(l=n.return(),Object(l)!==l))return}finally{if(u)throw i}}return o}}function fB(e){if(Array.isArray(e))return e}function pB(e){return yB(e)||mB(e)||i3(e)||hB()}function hB(){throw new TypeError(`Invalid attempt to spread non-iterable instance.
In order to be iterable, non-array objects must have a [Symbol.iterator]() method.`)}function i3(e,t){if(e){if(typeof e=="string")return T1(e,t);var n=Object.prototype.toString.call(e).slice(8,-1);if(n==="Object"&&e.constructor&&(n=e.constructor.name),n==="Map"||n==="Set")return Array.from(e);if(n==="Arguments"||/^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n))return T1(e,t)}}function mB(e){if(typeof Symbol<"u"&&e[Symbol.iterator]!=null||e["@@iterator"]!=null)return Array.from(e)}function yB(e){if(Array.isArray(e))return T1(e)}function T1(e,t){(t==null||t>e.length)&&(t=e.length);for(var n=0,r=new Array(t);n<t;n++)r[n]=e[n];return r}var xc=1e-4,a3=function(t,n){return[0,3*t,3*n-6*t,3*t-3*n+1]},l3=function(t,n){return t.map(function(r,i){return r*Math.pow(n,i)}).reduce(function(r,i){return r+i})},m5=function(t,n){return function(r){var i=a3(t,n);return l3(i,r)}},vB=function(t,n){return function(r){var i=a3(t,n),a=[].concat(pB(i.map(function(l,o){return l*o}).slice(1)),[0]);return l3(a,r)}},y5=function(){for(var t=arguments.length,n=new Array(t),r=0;r<t;r++)n[r]=arguments[r];var i=n[0],a=n[1],l=n[2],o=n[3];if(n.length===1)switch(n[0]){case"linear":i=0,a=0,l=1,o=1;break;case"ease":i=.25,a=.1,l=.25,o=1;break;case"ease-in":i=.42,a=0,l=1,o=1;break;case"ease-out":i=.42,a=0,l=.58,o=1;break;case"ease-in-out":i=0,a=0,l=.58,o=1;break;default:{var s=n[0].split("(");if(s[0]==="cubic-bezier"&&s[1].split(")")[0].split(",").length===4){var u=s[1].split(")")[0].split(",").map(function(w){return parseFloat(w)}),f=cB(u,4);i=f[0],a=f[1],l=f[2],o=f[3]}}}var d=m5(i,l),p=m5(a,o),h=vB(i,l),b=function(y){return y>1?1:y<0?0:y},v=function(y){for(var m=y>1?1:y,g=m,S=0;S<8;++S){var x=d(g)-m,k=h(g);if(Math.abs(x-m)<xc||k<xc)return p(g);g=b(g-x/k)}return p(g)};return v.isStepper=!1,v},gB=function(){var t=arguments.length>0&&arguments[0]!==void 0?arguments[0]:{},n=t.stiff,r=n===void 0?100:n,i=t.damping,a=i===void 0?8:i,l=t.dt,o=l===void 0?17:l,s=function(f,d,p){var h=-(f-d)*r,b=p*a,v=p+(h-b)*o/1e3,w=p*o/1e3+f;return Math.abs(w-d)<xc&&Math.abs(v)<xc?[d,0]:[w,v]};return s.isStepper=!0,s.dt=o,s},xB=function(){for(var t=arguments.length,n=new Array(t),r=0;r<t;r++)n[r]=arguments[r];var i=n[0];if(typeof i=="string")switch(i){case"ease":case"ease-in-out":case"ease-out":case"ease-in":case"linear":return y5(i);case"spring":return gB();default:if(i.split("(")[0]==="cubic-bezier")return y5(i)}return typeof i=="function"?i:null};function Yl(e){"@babel/helpers - typeof";return Yl=typeof Symbol=="function"&&typeof Symbol.iterator=="symbol"?function(t){return typeof t}:function(t){return t&&typeof Symbol=="function"&&t.constructor===Symbol&&t!==Symbol.prototype?"symbol":typeof t},Yl(e)}function v5(e){return kB(e)||wB(e)||o3(e)||bB()}function bB(){throw new TypeError(`Invalid attempt to spread non-iterable instance.
In order to be iterable, non-array objects must have a [Symbol.iterator]() method.`)}function wB(e){if(typeof Symbol<"u"&&e[Symbol.iterator]!=null||e["@@iterator"]!=null)return Array.from(e)}function kB(e){if(Array.isArray(e))return z1(e)}function g5(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter(function(i){return Object.getOwnPropertyDescriptor(e,i).enumerable})),n.push.apply(n,r)}return n}function rt(e){for(var t=1;t<arguments.length;t++){var n=arguments[t]!=null?arguments[t]:{};t%2?g5(Object(n),!0).forEach(function(r){$1(e,r,n[r])}):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):g5(Object(n)).forEach(function(r){Object.defineProperty(e,r,Object.getOwnPropertyDescriptor(n,r))})}return e}function $1(e,t,n){return t=SB(t),t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function SB(e){var t=_B(e,"string");return Yl(t)==="symbol"?t:String(t)}function _B(e,t){if(Yl(e)!=="object"||e===null)return e;var n=e[Symbol.toPrimitive];if(n!==void 0){var r=n.call(e,t);if(Yl(r)!=="object")return r;throw new TypeError("@@toPrimitive must return a primitive value.")}return(t==="string"?String:Number)(e)}function jB(e,t){return AB(e)||PB(e,t)||o3(e,t)||OB()}function OB(){throw new TypeError(`Invalid attempt to destructure non-iterable instance.
In order to be iterable, non-array objects must have a [Symbol.iterator]() method.`)}function o3(e,t){if(e){if(typeof e=="string")return z1(e,t);var n=Object.prototype.toString.call(e).slice(8,-1);if(n==="Object"&&e.constructor&&(n=e.constructor.name),n==="Map"||n==="Set")return Array.from(e);if(n==="Arguments"||/^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n))return z1(e,t)}}function z1(e,t){(t==null||t>e.length)&&(t=e.length);for(var n=0,r=new Array(t);n<t;n++)r[n]=e[n];return r}function PB(e,t){var n=e==null?null:typeof Symbol<"u"&&e[Symbol.iterator]||e["@@iterator"];if(n!=null){var r,i,a,l,o=[],s=!0,u=!1;try{if(a=(n=n.call(e)).next,t!==0)for(;!(s=(r=a.call(n)).done)&&(o.push(r.value),o.length!==t);s=!0);}catch(f){u=!0,i=f}finally{try{if(!s&&n.return!=null&&(l=n.return(),Object(l)!==l))return}finally{if(u)throw i}}return o}}function AB(e){if(Array.isArray(e))return e}var bc=function(t,n,r){return t+(n-t)*r},I1=function(t){var n=t.from,r=t.to;return n!==r},NB=function e(t,n,r){var i=cl(function(a,l){if(I1(l)){var o=t(l.from,l.to,l.velocity),s=jB(o,2),u=s[0],f=s[1];return rt(rt({},l),{},{from:u,velocity:f})}return l},n);return r<1?cl(function(a,l){return I1(l)?rt(rt({},l),{},{velocity:bc(l.velocity,i[a].velocity,r),from:bc(l.from,i[a].from,r)}):l},n):e(t,i,r-1)};const CB=function(e,t,n,r,i){var a=lB(e,t),l=a.reduce(function(w,y){return rt(rt({},w),{},$1({},y,[e[y],t[y]]))},{}),o=a.reduce(function(w,y){return rt(rt({},w),{},$1({},y,{from:e[y],velocity:0,to:t[y]}))},{}),s=-1,u,f,d=function(){return null},p=function(){return cl(function(y,m){return m.from},o)},h=function(){return!Object.values(o).filter(I1).length},b=function(y){u||(u=y);var m=y-u,g=m/n.dt;o=NB(n,o,g),i(rt(rt(rt({},e),t),p())),u=y,h()||(s=requestAnimationFrame(d))},v=function(y){f||(f=y);var m=(y-f)/r,g=cl(function(x,k){return bc.apply(void 0,v5(k).concat([n(m)]))},l);if(i(rt(rt(rt({},e),t),g)),m<1)s=requestAnimationFrame(d);else{var S=cl(function(x,k){return bc.apply(void 0,v5(k).concat([n(1)]))},l);i(rt(rt(rt({},e),t),S))}};return d=n.isStepper?b:v,function(){return requestAnimationFrame(d),function(){cancelAnimationFrame(s)}}};function ta(e){"@babel/helpers - typeof";return ta=typeof Symbol=="function"&&typeof Symbol.iterator=="symbol"?function(t){return typeof t}:function(t){return t&&typeof Symbol=="function"&&t.constructor===Symbol&&t!==Symbol.prototype?"symbol":typeof t},ta(e)}var EB=["children","begin","duration","attributeName","easing","isActive","steps","from","to","canBegin","onAnimationEnd","shouldReAnimate","onAnimationReStart"];function MB(e,t){if(e==null)return{};var n=TB(e,t),r,i;if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);for(i=0;i<a.length;i++)r=a[i],!(t.indexOf(r)>=0)&&Object.prototype.propertyIsEnumerable.call(e,r)&&(n[r]=e[r])}return n}function TB(e,t){if(e==null)return{};var n={},r=Object.keys(e),i,a;for(a=0;a<r.length;a++)i=r[a],!(t.indexOf(i)>=0)&&(n[i]=e[i]);return n}function Fd(e){return DB(e)||IB(e)||zB(e)||$B()}function $B(){throw new TypeError(`Invalid attempt to spread non-iterable instance.
In order to be iterable, non-array objects must have a [Symbol.iterator]() method.`)}function zB(e,t){if(e){if(typeof e=="string")return D1(e,t);var n=Object.prototype.toString.call(e).slice(8,-1);if(n==="Object"&&e.constructor&&(n=e.constructor.name),n==="Map"||n==="Set")return Array.from(e);if(n==="Arguments"||/^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n))return D1(e,t)}}function IB(e){if(typeof Symbol<"u"&&e[Symbol.iterator]!=null||e["@@iterator"]!=null)return Array.from(e)}function DB(e){if(Array.isArray(e))return D1(e)}function D1(e,t){(t==null||t>e.length)&&(t=e.length);for(var n=0,r=new Array(t);n<t;n++)r[n]=e[n];return r}function x5(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter(function(i){return Object.getOwnPropertyDescriptor(e,i).enumerable})),n.push.apply(n,r)}return n}function Qt(e){for(var t=1;t<arguments.length;t++){var n=arguments[t]!=null?arguments[t]:{};t%2?x5(Object(n),!0).forEach(function(r){Ya(e,r,n[r])}):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):x5(Object(n)).forEach(function(r){Object.defineProperty(e,r,Object.getOwnPropertyDescriptor(n,r))})}return e}function Ya(e,t,n){return t=s3(t),t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function LB(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}function FB(e,t){for(var n=0;n<t.length;n++){var r=t[n];r.enumerable=r.enumerable||!1,r.configurable=!0,"value"in r&&(r.writable=!0),Object.defineProperty(e,s3(r.key),r)}}function RB(e,t,n){return t&&FB(e.prototype,t),Object.defineProperty(e,"prototype",{writable:!1}),e}function s3(e){var t=BB(e,"string");return ta(t)==="symbol"?t:String(t)}function BB(e,t){if(ta(e)!=="object"||e===null)return e;var n=e[Symbol.toPrimitive];if(n!==void 0){var r=n.call(e,t);if(ta(r)!=="object")return r;throw new TypeError("@@toPrimitive must return a primitive value.")}return(t==="string"?String:Number)(e)}function WB(e,t){if(typeof t!="function"&&t!==null)throw new TypeError("Super expression must either be null or a function");e.prototype=Object.create(t&&t.prototype,{constructor:{value:e,writable:!0,configurable:!0}}),Object.defineProperty(e,"prototype",{writable:!1}),t&&L1(e,t)}function L1(e,t){return L1=Object.setPrototypeOf?Object.setPrototypeOf.bind():function(r,i){return r.__proto__=i,r},L1(e,t)}function UB(e){var t=HB();return function(){var r=wc(e),i;if(t){var a=wc(this).constructor;i=Reflect.construct(r,arguments,a)}else i=r.apply(this,arguments);return F1(this,i)}}function F1(e,t){if(t&&(ta(t)==="object"||typeof t=="function"))return t;if(t!==void 0)throw new TypeError("Derived constructors may only return object or undefined");return R1(e)}function R1(e){if(e===void 0)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return e}function HB(){if(typeof Reflect>"u"||!Reflect.construct||Reflect.construct.sham)return!1;if(typeof Proxy=="function")return!0;try{return Boolean.prototype.valueOf.call(Reflect.construct(Boolean,[],function(){})),!0}catch{return!1}}function wc(e){return wc=Object.setPrototypeOf?Object.getPrototypeOf.bind():function(n){return n.__proto__||Object.getPrototypeOf(n)},wc(e)}var gr=function(e){WB(n,e);var t=UB(n);function n(r,i){var a;LB(this,n),a=t.call(this,r,i);var l=a.props,o=l.isActive,s=l.attributeName,u=l.from,f=l.to,d=l.steps,p=l.children,h=l.duration;if(a.handleStyleChange=a.handleStyleChange.bind(R1(a)),a.changeStyle=a.changeStyle.bind(R1(a)),!o||h<=0)return a.state={style:{}},typeof p=="function"&&(a.state={style:f}),F1(a);if(d&&d.length)a.state={style:d[0].style};else if(u){if(typeof p=="function")return a.state={style:u},F1(a);a.state={style:s?Ya({},s,u):u}}else a.state={style:{}};return a}return RB(n,[{key:"componentDidMount",value:function(){var i=this.props,a=i.isActive,l=i.canBegin;this.mounted=!0,!(!a||!l)&&this.runAnimation(this.props)}},{key:"componentDidUpdate",value:function(i){var a=this.props,l=a.isActive,o=a.canBegin,s=a.attributeName,u=a.shouldReAnimate,f=a.to,d=a.from,p=this.state.style;if(o){if(!l){var h={style:s?Ya({},s,f):f};this.state&&p&&(s&&p[s]!==f||!s&&p!==f)&&this.setState(h);return}if(!(YR(i.to,f)&&i.canBegin&&i.isActive)){var b=!i.canBegin||!i.isActive;this.manager&&this.manager.stop(),this.stopJSAnimation&&this.stopJSAnimation();var v=b||u?d:i.to;if(this.state&&p){var w={style:s?Ya({},s,v):v};(s&&p[s]!==v||!s&&p!==v)&&this.setState(w)}this.runAnimation(Qt(Qt({},this.props),{},{from:v,begin:0}))}}}},{key:"componentWillUnmount",value:function(){this.mounted=!1;var i=this.props.onAnimationEnd;this.unSubscribe&&this.unSubscribe(),this.manager&&(this.manager.stop(),this.manager=null),this.stopJSAnimation&&this.stopJSAnimation(),i&&i()}},{key:"handleStyleChange",value:function(i){this.changeStyle(i)}},{key:"changeStyle",value:function(i){this.mounted&&this.setState({style:i})}},{key:"runJSAnimation",value:function(i){var a=this,l=i.from,o=i.to,s=i.duration,u=i.easing,f=i.begin,d=i.onAnimationEnd,p=i.onAnimationStart,h=CB(l,o,xB(u),s,this.changeStyle),b=function(){a.stopJSAnimation=h()};this.manager.start([p,f,b,s,d])}},{key:"runStepAnimation",value:function(i){var a=this,l=i.steps,o=i.begin,s=i.onAnimationStart,u=l[0],f=u.style,d=u.duration,p=d===void 0?0:d,h=function(v,w,y){if(y===0)return v;var m=w.duration,g=w.easing,S=g===void 0?"ease":g,x=w.style,k=w.properties,_=w.onAnimationEnd,j=y>0?l[y-1]:w,O=k||Object.keys(x);if(typeof S=="function"||S==="spring")return[].concat(Fd(v),[a.runJSAnimation.bind(a,{from:j.style,to:x,duration:m,easing:S}),m]);var M=h5(O,m,S),E=Qt(Qt(Qt({},j.style),x),{},{transition:M});return[].concat(Fd(v),[E,m,_]).filter(oB)};return this.manager.start([s].concat(Fd(l.reduce(h,[f,Math.max(p,o)])),[i.onAnimationEnd]))}},{key:"runAnimation",value:function(i){this.manager||(this.manager=rB());var a=i.begin,l=i.duration,o=i.attributeName,s=i.to,u=i.easing,f=i.onAnimationStart,d=i.onAnimationEnd,p=i.steps,h=i.children,b=this.manager;if(this.unSubscribe=b.subscribe(this.handleStyleChange),typeof u=="function"||typeof h=="function"||u==="spring"){this.runJSAnimation(i);return}if(p.length>1){this.runStepAnimation(i);return}var v=o?Ya({},o,s):s,w=h5(Object.keys(v),l,u);b.start([f,a,Qt(Qt({},v),{},{transition:w}),l,d])}},{key:"render",value:function(){var i=this.props,a=i.children;i.begin;var l=i.duration;i.attributeName,i.easing;var o=i.isActive;i.steps,i.from,i.to,i.canBegin,i.onAnimationEnd,i.shouldReAnimate,i.onAnimationReStart;var s=MB(i,EB),u=N.Children.count(a),f=this.state.style;if(typeof a=="function")return a(f);if(!o||u===0||l<=0)return a;var d=function(h){var b=h.props,v=b.style,w=v===void 0?{}:v,y=b.className,m=N.cloneElement(h,Qt(Qt({},s),{},{style:Qt(Qt({},w),f),className:y}));return m};return u===1?d(N.Children.only(a)):z.createElement("div",null,N.Children.map(a,function(p){return d(p)}))}}]),n}(N.PureComponent);gr.displayName="Animate";gr.defaultProps={begin:0,duration:1e3,from:"",to:"",attributeName:"",easing:"ease",isActive:!0,canBegin:!0,steps:[],onAnimationEnd:function(){},onAnimationStart:function(){}};gr.propTypes={from:me.oneOfType([me.object,me.string]),to:me.oneOfType([me.object,me.string]),attributeName:me.string,duration:me.number,begin:me.number,easing:me.oneOfType([me.string,me.func]),steps:me.arrayOf(me.shape({duration:me.number.isRequired,style:me.object.isRequired,easing:me.oneOfType([me.oneOf(["ease","ease-in","ease-out","ease-in-out","linear"]),me.func]),properties:me.arrayOf("string"),onAnimationEnd:me.func})),children:me.oneOfType([me.node,me.func]),isActive:me.bool,canBegin:me.bool,onAnimationEnd:me.func,shouldReAnimate:me.bool,onAnimationStart:me.func,onAnimationReStart:me.func};function Zl(e){"@babel/helpers - typeof";return Zl=typeof Symbol=="function"&&typeof Symbol.iterator=="symbol"?function(t){return typeof t}:function(t){return t&&typeof Symbol=="function"&&t.constructor===Symbol&&t!==Symbol.prototype?"symbol":typeof t},Zl(e)}function kc(){return kc=Object.assign?Object.assign.bind():function(e){for(var t=1;t<arguments.length;t++){var n=arguments[t];for(var r in n)Object.prototype.hasOwnProperty.call(n,r)&&(e[r]=n[r])}return e},kc.apply(this,arguments)}function GB(e,t){return KB(e)||qB(e,t)||XB(e,t)||VB()}function VB(){throw new TypeError(`Invalid attempt to destructure non-iterable instance.
In order to be iterable, non-array objects must have a [Symbol.iterator]() method.`)}function XB(e,t){if(e){if(typeof e=="string")return b5(e,t);var n=Object.prototype.toString.call(e).slice(8,-1);if(n==="Object"&&e.constructor&&(n=e.constructor.name),n==="Map"||n==="Set")return Array.from(e);if(n==="Arguments"||/^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n))return b5(e,t)}}function b5(e,t){(t==null||t>e.length)&&(t=e.length);for(var n=0,r=new Array(t);n<t;n++)r[n]=e[n];return r}function qB(e,t){var n=e==null?null:typeof Symbol<"u"&&e[Symbol.iterator]||e["@@iterator"];if(n!=null){var r,i,a,l,o=[],s=!0,u=!1;try{if(a=(n=n.call(e)).next,t!==0)for(;!(s=(r=a.call(n)).done)&&(o.push(r.value),o.length!==t);s=!0);}catch(f){u=!0,i=f}finally{try{if(!s&&n.return!=null&&(l=n.return(),Object(l)!==l))return}finally{if(u)throw i}}return o}}function KB(e){if(Array.isArray(e))return e}function w5(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter(function(i){return Object.getOwnPropertyDescriptor(e,i).enumerable})),n.push.apply(n,r)}return n}function k5(e){for(var t=1;t<arguments.length;t++){var n=arguments[t]!=null?arguments[t]:{};t%2?w5(Object(n),!0).forEach(function(r){YB(e,r,n[r])}):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):w5(Object(n)).forEach(function(r){Object.defineProperty(e,r,Object.getOwnPropertyDescriptor(n,r))})}return e}function YB(e,t,n){return t=ZB(t),t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function ZB(e){var t=QB(e,"string");return Zl(t)=="symbol"?t:t+""}function QB(e,t){if(Zl(e)!="object"||!e)return e;var n=e[Symbol.toPrimitive];if(n!==void 0){var r=n.call(e,t);if(Zl(r)!="object")return r;throw new TypeError("@@toPrimitive must return a primitive value.")}return(t==="string"?String:Number)(e)}var S5=function(t,n,r,i,a){var l=Math.min(Math.abs(r)/2,Math.abs(i)/2),o=i>=0?1:-1,s=r>=0?1:-1,u=i>=0&&r>=0||i<0&&r<0?1:0,f;if(l>0&&a instanceof Array){for(var d=[0,0,0,0],p=0,h=4;p<h;p++)d[p]=a[p]>l?l:a[p];f="M".concat(t,",").concat(n+o*d[0]),d[0]>0&&(f+="A ".concat(d[0],",").concat(d[0],",0,0,").concat(u,",").concat(t+s*d[0],",").concat(n)),f+="L ".concat(t+r-s*d[1],",").concat(n),d[1]>0&&(f+="A ".concat(d[1],",").concat(d[1],",0,0,").concat(u,`,
        `).concat(t+r,",").concat(n+o*d[1])),f+="L ".concat(t+r,",").concat(n+i-o*d[2]),d[2]>0&&(f+="A ".concat(d[2],",").concat(d[2],",0,0,").concat(u,`,
        `).concat(t+r-s*d[2],",").concat(n+i)),f+="L ".concat(t+s*d[3],",").concat(n+i),d[3]>0&&(f+="A ".concat(d[3],",").concat(d[3],",0,0,").concat(u,`,
        `).concat(t,",").concat(n+i-o*d[3])),f+="Z"}else if(l>0&&a===+a&&a>0){var b=Math.min(l,a);f="M ".concat(t,",").concat(n+o*b,`
            A `).concat(b,",").concat(b,",0,0,").concat(u,",").concat(t+s*b,",").concat(n,`
            L `).concat(t+r-s*b,",").concat(n,`
            A `).concat(b,",").concat(b,",0,0,").concat(u,",").concat(t+r,",").concat(n+o*b,`
            L `).concat(t+r,",").concat(n+i-o*b,`
            A `).concat(b,",").concat(b,",0,0,").concat(u,",").concat(t+r-s*b,",").concat(n+i,`
            L `).concat(t+s*b,",").concat(n+i,`
            A `).concat(b,",").concat(b,",0,0,").concat(u,",").concat(t,",").concat(n+i-o*b," Z")}else f="M ".concat(t,",").concat(n," h ").concat(r," v ").concat(i," h ").concat(-r," Z");return f},JB=function(t,n){if(!t||!n)return!1;var r=t.x,i=t.y,a=n.x,l=n.y,o=n.width,s=n.height;if(Math.abs(o)>0&&Math.abs(s)>0){var u=Math.min(a,a+o),f=Math.max(a,a+o),d=Math.min(l,l+s),p=Math.max(l,l+s);return r>=u&&r<=f&&i>=d&&i<=p}return!1},eW={x:0,y:0,width:0,height:0,radius:0,isAnimationActive:!1,isUpdateAnimationActive:!1,animationBegin:0,animationDuration:1500,animationEasing:"ease"},th=function(t){var n=k5(k5({},eW),t),r=N.useRef(),i=N.useState(-1),a=GB(i,2),l=a[0],o=a[1];N.useEffect(function(){if(r.current&&r.current.getTotalLength)try{var S=r.current.getTotalLength();S&&o(S)}catch{}},[]);var s=n.x,u=n.y,f=n.width,d=n.height,p=n.radius,h=n.className,b=n.animationEasing,v=n.animationDuration,w=n.animationBegin,y=n.isAnimationActive,m=n.isUpdateAnimationActive;if(s!==+s||u!==+u||f!==+f||d!==+d||f===0||d===0)return null;var g=de("recharts-rectangle",h);return m?z.createElement(gr,{canBegin:l>0,from:{width:f,height:d,x:s,y:u},to:{width:f,height:d,x:s,y:u},duration:v,animationEasing:b,isActive:m},function(S){var x=S.width,k=S.height,_=S.x,j=S.y;return z.createElement(gr,{canBegin:l>0,from:"0px ".concat(l===-1?1:l,"px"),to:"".concat(l,"px 0px"),attributeName:"strokeDasharray",begin:w,duration:v,isActive:y,easing:b},z.createElement("path",kc({},ue(n,!0),{className:g,d:S5(_,j,x,k,p),ref:r})))}):z.createElement("path",kc({},ue(n,!0),{className:g,d:S5(s,u,f,d,p)}))};function B1(){return B1=Object.assign?Object.assign.bind():function(e){for(var t=1;t<arguments.length;t++){var n=arguments[t];for(var r in n)Object.prototype.hasOwnProperty.call(n,r)&&(e[r]=n[r])}return e},B1.apply(this,arguments)}var c3=function(t){var n=t.cx,r=t.cy,i=t.r,a=t.className,l=de("recharts-dot",a);return n===+n&&r===+r&&i===+i?N.createElement("circle",B1({},ue(t,!1),Bs(t),{className:l,cx:n,cy:r,r:i})):null};function Ql(e){"@babel/helpers - typeof";return Ql=typeof Symbol=="function"&&typeof Symbol.iterator=="symbol"?function(t){return typeof t}:function(t){return t&&typeof Symbol=="function"&&t.constructor===Symbol&&t!==Symbol.prototype?"symbol":typeof t},Ql(e)}var tW=["x","y","top","left","width","height","className"];function W1(){return W1=Object.assign?Object.assign.bind():function(e){for(var t=1;t<arguments.length;t++){var n=arguments[t];for(var r in n)Object.prototype.hasOwnProperty.call(n,r)&&(e[r]=n[r])}return e},W1.apply(this,arguments)}function _5(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter(function(i){return Object.getOwnPropertyDescriptor(e,i).enumerable})),n.push.apply(n,r)}return n}function nW(e){for(var t=1;t<arguments.length;t++){var n=arguments[t]!=null?arguments[t]:{};t%2?_5(Object(n),!0).forEach(function(r){rW(e,r,n[r])}):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):_5(Object(n)).forEach(function(r){Object.defineProperty(e,r,Object.getOwnPropertyDescriptor(n,r))})}return e}function rW(e,t,n){return t=iW(t),t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function iW(e){var t=aW(e,"string");return Ql(t)=="symbol"?t:t+""}function aW(e,t){if(Ql(e)!="object"||!e)return e;var n=e[Symbol.toPrimitive];if(n!==void 0){var r=n.call(e,t);if(Ql(r)!="object")return r;throw new TypeError("@@toPrimitive must return a primitive value.")}return(t==="string"?String:Number)(e)}function lW(e,t){if(e==null)return{};var n=oW(e,t),r,i;if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);for(i=0;i<a.length;i++)r=a[i],!(t.indexOf(r)>=0)&&Object.prototype.propertyIsEnumerable.call(e,r)&&(n[r]=e[r])}return n}function oW(e,t){if(e==null)return{};var n={};for(var r in e)if(Object.prototype.hasOwnProperty.call(e,r)){if(t.indexOf(r)>=0)continue;n[r]=e[r]}return n}var sW=function(t,n,r,i,a,l){return"M".concat(t,",").concat(a,"v").concat(i,"M").concat(l,",").concat(n,"h").concat(r)},cW=function(t){var n=t.x,r=n===void 0?0:n,i=t.y,a=i===void 0?0:i,l=t.top,o=l===void 0?0:l,s=t.left,u=s===void 0?0:s,f=t.width,d=f===void 0?0:f,p=t.height,h=p===void 0?0:p,b=t.className,v=lW(t,tW),w=nW({x:r,y:a,top:o,left:u,width:d,height:h},v);return!G(r)||!G(a)||!G(d)||!G(h)||!G(o)||!G(u)?null:z.createElement("path",W1({},ue(w,!0),{className:de("recharts-cross",b),d:sW(r,a,d,h,o,u)}))},uW=k6,dW=uW(Object.getPrototypeOf,Object),fW=dW,pW=Gn,hW=fW,mW=Vn,yW="[object Object]",vW=Function.prototype,gW=Object.prototype,u3=vW.toString,xW=gW.hasOwnProperty,bW=u3.call(Object);function wW(e){if(!mW(e)||pW(e)!=yW)return!1;var t=hW(e);if(t===null)return!0;var n=xW.call(t,"constructor")&&t.constructor;return typeof n=="function"&&n instanceof n&&u3.call(n)==bW}var kW=wW;const SW=ke(kW);var _W=Gn,jW=Vn,OW="[object Boolean]";function PW(e){return e===!0||e===!1||jW(e)&&_W(e)==OW}var AW=PW;const NW=ke(AW);function Jl(e){"@babel/helpers - typeof";return Jl=typeof Symbol=="function"&&typeof Symbol.iterator=="symbol"?function(t){return typeof t}:function(t){return t&&typeof Symbol=="function"&&t.constructor===Symbol&&t!==Symbol.prototype?"symbol":typeof t},Jl(e)}function Sc(){return Sc=Object.assign?Object.assign.bind():function(e){for(var t=1;t<arguments.length;t++){var n=arguments[t];for(var r in n)Object.prototype.hasOwnProperty.call(n,r)&&(e[r]=n[r])}return e},Sc.apply(this,arguments)}function CW(e,t){return $W(e)||TW(e,t)||MW(e,t)||EW()}function EW(){throw new TypeError(`Invalid attempt to destructure non-iterable instance.
In order to be iterable, non-array objects must have a [Symbol.iterator]() method.`)}function MW(e,t){if(e){if(typeof e=="string")return j5(e,t);var n=Object.prototype.toString.call(e).slice(8,-1);if(n==="Object"&&e.constructor&&(n=e.constructor.name),n==="Map"||n==="Set")return Array.from(e);if(n==="Arguments"||/^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n))return j5(e,t)}}function j5(e,t){(t==null||t>e.length)&&(t=e.length);for(var n=0,r=new Array(t);n<t;n++)r[n]=e[n];return r}function TW(e,t){var n=e==null?null:typeof Symbol<"u"&&e[Symbol.iterator]||e["@@iterator"];if(n!=null){var r,i,a,l,o=[],s=!0,u=!1;try{if(a=(n=n.call(e)).next,t!==0)for(;!(s=(r=a.call(n)).done)&&(o.push(r.value),o.length!==t);s=!0);}catch(f){u=!0,i=f}finally{try{if(!s&&n.return!=null&&(l=n.return(),Object(l)!==l))return}finally{if(u)throw i}}return o}}function $W(e){if(Array.isArray(e))return e}function O5(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter(function(i){return Object.getOwnPropertyDescriptor(e,i).enumerable})),n.push.apply(n,r)}return n}function P5(e){for(var t=1;t<arguments.length;t++){var n=arguments[t]!=null?arguments[t]:{};t%2?O5(Object(n),!0).forEach(function(r){zW(e,r,n[r])}):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):O5(Object(n)).forEach(function(r){Object.defineProperty(e,r,Object.getOwnPropertyDescriptor(n,r))})}return e}function zW(e,t,n){return t=IW(t),t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function IW(e){var t=DW(e,"string");return Jl(t)=="symbol"?t:t+""}function DW(e,t){if(Jl(e)!="object"||!e)return e;var n=e[Symbol.toPrimitive];if(n!==void 0){var r=n.call(e,t);if(Jl(r)!="object")return r;throw new TypeError("@@toPrimitive must return a primitive value.")}return(t==="string"?String:Number)(e)}var A5=function(t,n,r,i,a){var l=r-i,o;return o="M ".concat(t,",").concat(n),o+="L ".concat(t+r,",").concat(n),o+="L ".concat(t+r-l/2,",").concat(n+a),o+="L ".concat(t+r-l/2-i,",").concat(n+a),o+="L ".concat(t,",").concat(n," Z"),o},LW={x:0,y:0,upperWidth:0,lowerWidth:0,height:0,isUpdateAnimationActive:!1,animationBegin:0,animationDuration:1500,animationEasing:"ease"},FW=function(t){var n=P5(P5({},LW),t),r=N.useRef(),i=N.useState(-1),a=CW(i,2),l=a[0],o=a[1];N.useEffect(function(){if(r.current&&r.current.getTotalLength)try{var g=r.current.getTotalLength();g&&o(g)}catch{}},[]);var s=n.x,u=n.y,f=n.upperWidth,d=n.lowerWidth,p=n.height,h=n.className,b=n.animationEasing,v=n.animationDuration,w=n.animationBegin,y=n.isUpdateAnimationActive;if(s!==+s||u!==+u||f!==+f||d!==+d||p!==+p||f===0&&d===0||p===0)return null;var m=de("recharts-trapezoid",h);return y?z.createElement(gr,{canBegin:l>0,from:{upperWidth:0,lowerWidth:0,height:p,x:s,y:u},to:{upperWidth:f,lowerWidth:d,height:p,x:s,y:u},duration:v,animationEasing:b,isActive:y},function(g){var S=g.upperWidth,x=g.lowerWidth,k=g.height,_=g.x,j=g.y;return z.createElement(gr,{canBegin:l>0,from:"0px ".concat(l===-1?1:l,"px"),to:"".concat(l,"px 0px"),attributeName:"strokeDasharray",begin:w,duration:v,easing:b},z.createElement("path",Sc({},ue(n,!0),{className:m,d:A5(_,j,S,x,k),ref:r})))}):z.createElement("g",null,z.createElement("path",Sc({},ue(n,!0),{className:m,d:A5(s,u,f,d,p)})))},RW=["option","shapeType","propTransformer","activeClassName","isActive"];function eo(e){"@babel/helpers - typeof";return eo=typeof Symbol=="function"&&typeof Symbol.iterator=="symbol"?function(t){return typeof t}:function(t){return t&&typeof Symbol=="function"&&t.constructor===Symbol&&t!==Symbol.prototype?"symbol":typeof t},eo(e)}function BW(e,t){if(e==null)return{};var n=WW(e,t),r,i;if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);for(i=0;i<a.length;i++)r=a[i],!(t.indexOf(r)>=0)&&Object.prototype.propertyIsEnumerable.call(e,r)&&(n[r]=e[r])}return n}function WW(e,t){if(e==null)return{};var n={};for(var r in e)if(Object.prototype.hasOwnProperty.call(e,r)){if(t.indexOf(r)>=0)continue;n[r]=e[r]}return n}function N5(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter(function(i){return Object.getOwnPropertyDescriptor(e,i).enumerable})),n.push.apply(n,r)}return n}function _c(e){for(var t=1;t<arguments.length;t++){var n=arguments[t]!=null?arguments[t]:{};t%2?N5(Object(n),!0).forEach(function(r){UW(e,r,n[r])}):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):N5(Object(n)).forEach(function(r){Object.defineProperty(e,r,Object.getOwnPropertyDescriptor(n,r))})}return e}function UW(e,t,n){return t=HW(t),t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function HW(e){var t=GW(e,"string");return eo(t)=="symbol"?t:t+""}function GW(e,t){if(eo(e)!="object"||!e)return e;var n=e[Symbol.toPrimitive];if(n!==void 0){var r=n.call(e,t);if(eo(r)!="object")return r;throw new TypeError("@@toPrimitive must return a primitive value.")}return(t==="string"?String:Number)(e)}function VW(e,t){return _c(_c({},t),e)}function XW(e,t){return e==="symbols"}function C5(e){var t=e.shapeType,n=e.elementProps;switch(t){case"rectangle":return z.createElement(th,n);case"trapezoid":return z.createElement(FW,n);case"sector":return z.createElement(Qg,n);case"symbols":if(XW(t))return z.createElement(x0,n);break;default:return null}}function qW(e){return N.isValidElement(e)?e.props:e}function KW(e){var t=e.option,n=e.shapeType,r=e.propTransformer,i=r===void 0?VW:r,a=e.activeClassName,l=a===void 0?"recharts-active-shape":a,o=e.isActive,s=BW(e,RW),u;if(N.isValidElement(t))u=N.cloneElement(t,_c(_c({},s),qW(t)));else if(re(t))u=t(s);else if(SW(t)&&!NW(t)){var f=i(t,s);u=z.createElement(C5,{shapeType:n,elementProps:f})}else{var d=s;u=z.createElement(C5,{shapeType:n,elementProps:d})}return o?z.createElement(et,{className:l},u):u}function zu(e,t){return t!=null&&"trapezoids"in e.props}function Iu(e,t){return t!=null&&"sectors"in e.props}function to(e,t){return t!=null&&"points"in e.props}function YW(e,t){var n,r,i=e.x===(t==null||(n=t.labelViewBox)===null||n===void 0?void 0:n.x)||e.x===t.x,a=e.y===(t==null||(r=t.labelViewBox)===null||r===void 0?void 0:r.y)||e.y===t.y;return i&&a}function ZW(e,t){var n=e.endAngle===t.endAngle,r=e.startAngle===t.startAngle;return n&&r}function QW(e,t){var n=e.x===t.x,r=e.y===t.y,i=e.z===t.z;return n&&r&&i}function JW(e,t){var n;return zu(e,t)?n=YW:Iu(e,t)?n=ZW:to(e,t)&&(n=QW),n}function eU(e,t){var n;return zu(e,t)?n="trapezoids":Iu(e,t)?n="sectors":to(e,t)&&(n="points"),n}function tU(e,t){if(zu(e,t)){var n;return(n=t.tooltipPayload)===null||n===void 0||(n=n[0])===null||n===void 0||(n=n.payload)===null||n===void 0?void 0:n.payload}if(Iu(e,t)){var r;return(r=t.tooltipPayload)===null||r===void 0||(r=r[0])===null||r===void 0||(r=r.payload)===null||r===void 0?void 0:r.payload}return to(e,t)?t.payload:{}}function nU(e){var t=e.activeTooltipItem,n=e.graphicalItem,r=e.itemData,i=eU(n,t),a=tU(n,t),l=r.filter(function(s,u){var f=Z0(a,s),d=n.props[i].filter(function(b){var v=JW(n,t);return v(b,t)}),p=n.props[i].indexOf(d[d.length-1]),h=u===p;return f&&h}),o=r.indexOf(l[l.length-1]);return o}var rU=Math.ceil,iU=Math.max;function aU(e,t,n,r){for(var i=-1,a=iU(rU((t-e)/(n||1)),0),l=Array(a);a--;)l[r?a:++i]=e,e+=n;return l}var lU=aU,oU=B6,E5=1/0,sU=17976931348623157e292;function cU(e){if(!e)return e===0?e:0;if(e=oU(e),e===E5||e===-E5){var t=e<0?-1:1;return t*sU}return e===e?e:0}var d3=cU,uU=lU,dU=Su,Rd=d3;function fU(e){return function(t,n,r){return r&&typeof r!="number"&&dU(t,n,r)&&(n=r=void 0),t=Rd(t),n===void 0?(n=t,t=0):n=Rd(n),r=r===void 0?t<n?1:-1:Rd(r),uU(t,n,r,e)}}var pU=fU,hU=pU,mU=hU(),yU=mU;const jc=ke(yU);function no(e){"@babel/helpers - typeof";return no=typeof Symbol=="function"&&typeof Symbol.iterator=="symbol"?function(t){return typeof t}:function(t){return t&&typeof Symbol=="function"&&t.constructor===Symbol&&t!==Symbol.prototype?"symbol":typeof t},no(e)}function M5(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter(function(i){return Object.getOwnPropertyDescriptor(e,i).enumerable})),n.push.apply(n,r)}return n}function T5(e){for(var t=1;t<arguments.length;t++){var n=arguments[t]!=null?arguments[t]:{};t%2?M5(Object(n),!0).forEach(function(r){f3(e,r,n[r])}):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):M5(Object(n)).forEach(function(r){Object.defineProperty(e,r,Object.getOwnPropertyDescriptor(n,r))})}return e}function f3(e,t,n){return t=vU(t),t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function vU(e){var t=gU(e,"string");return no(t)=="symbol"?t:t+""}function gU(e,t){if(no(e)!="object"||!e)return e;var n=e[Symbol.toPrimitive];if(n!==void 0){var r=n.call(e,t);if(no(r)!="object")return r;throw new TypeError("@@toPrimitive must return a primitive value.")}return(t==="string"?String:Number)(e)}var xU=["Webkit","Moz","O","ms"],bU=function(t,n){var r=t.replace(/(\w)/,function(a){return a.toUpperCase()}),i=xU.reduce(function(a,l){return T5(T5({},a),{},f3({},l+r,n))},{});return i[t]=n,i};function na(e){"@babel/helpers - typeof";return na=typeof Symbol=="function"&&typeof Symbol.iterator=="symbol"?function(t){return typeof t}:function(t){return t&&typeof Symbol=="function"&&t.constructor===Symbol&&t!==Symbol.prototype?"symbol":typeof t},na(e)}function Oc(){return Oc=Object.assign?Object.assign.bind():function(e){for(var t=1;t<arguments.length;t++){var n=arguments[t];for(var r in n)Object.prototype.hasOwnProperty.call(n,r)&&(e[r]=n[r])}return e},Oc.apply(this,arguments)}function $5(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter(function(i){return Object.getOwnPropertyDescriptor(e,i).enumerable})),n.push.apply(n,r)}return n}function Bd(e){for(var t=1;t<arguments.length;t++){var n=arguments[t]!=null?arguments[t]:{};t%2?$5(Object(n),!0).forEach(function(r){At(e,r,n[r])}):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):$5(Object(n)).forEach(function(r){Object.defineProperty(e,r,Object.getOwnPropertyDescriptor(n,r))})}return e}function wU(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}function z5(e,t){for(var n=0;n<t.length;n++){var r=t[n];r.enumerable=r.enumerable||!1,r.configurable=!0,"value"in r&&(r.writable=!0),Object.defineProperty(e,h3(r.key),r)}}function kU(e,t,n){return t&&z5(e.prototype,t),n&&z5(e,n),Object.defineProperty(e,"prototype",{writable:!1}),e}function SU(e,t,n){return t=Pc(t),_U(e,p3()?Reflect.construct(t,n||[],Pc(e).constructor):t.apply(e,n))}function _U(e,t){if(t&&(na(t)==="object"||typeof t=="function"))return t;if(t!==void 0)throw new TypeError("Derived constructors may only return object or undefined");return jU(e)}function jU(e){if(e===void 0)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return e}function p3(){try{var e=!Boolean.prototype.valueOf.call(Reflect.construct(Boolean,[],function(){}))}catch{}return(p3=function(){return!!e})()}function Pc(e){return Pc=Object.setPrototypeOf?Object.getPrototypeOf.bind():function(n){return n.__proto__||Object.getPrototypeOf(n)},Pc(e)}function OU(e,t){if(typeof t!="function"&&t!==null)throw new TypeError("Super expression must either be null or a function");e.prototype=Object.create(t&&t.prototype,{constructor:{value:e,writable:!0,configurable:!0}}),Object.defineProperty(e,"prototype",{writable:!1}),t&&U1(e,t)}function U1(e,t){return U1=Object.setPrototypeOf?Object.setPrototypeOf.bind():function(r,i){return r.__proto__=i,r},U1(e,t)}function At(e,t,n){return t=h3(t),t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function h3(e){var t=PU(e,"string");return na(t)=="symbol"?t:t+""}function PU(e,t){if(na(e)!="object"||!e)return e;var n=e[Symbol.toPrimitive];if(n!==void 0){var r=n.call(e,t);if(na(r)!="object")return r;throw new TypeError("@@toPrimitive must return a primitive value.")}return String(e)}var AU=function(t){var n=t.data,r=t.startIndex,i=t.endIndex,a=t.x,l=t.width,o=t.travellerWidth;if(!n||!n.length)return{};var s=n.length,u=ol().domain(jc(0,s)).range([a,a+l-o]),f=u.domain().map(function(d){return u(d)});return{isTextActive:!1,isSlideMoving:!1,isTravellerMoving:!1,isTravellerFocused:!1,startX:u(r),endX:u(i),scale:u,scaleValues:f}},I5=function(t){return t.changedTouches&&!!t.changedTouches.length},ra=function(e){function t(n){var r;return wU(this,t),r=SU(this,t,[n]),At(r,"handleDrag",function(i){r.leaveTimer&&(clearTimeout(r.leaveTimer),r.leaveTimer=null),r.state.isTravellerMoving?r.handleTravellerMove(i):r.state.isSlideMoving&&r.handleSlideDrag(i)}),At(r,"handleTouchMove",function(i){i.changedTouches!=null&&i.changedTouches.length>0&&r.handleDrag(i.changedTouches[0])}),At(r,"handleDragEnd",function(){r.setState({isTravellerMoving:!1,isSlideMoving:!1},function(){var i=r.props,a=i.endIndex,l=i.onDragEnd,o=i.startIndex;l==null||l({endIndex:a,startIndex:o})}),r.detachDragEndListener()}),At(r,"handleLeaveWrapper",function(){(r.state.isTravellerMoving||r.state.isSlideMoving)&&(r.leaveTimer=window.setTimeout(r.handleDragEnd,r.props.leaveTimeOut))}),At(r,"handleEnterSlideOrTraveller",function(){r.setState({isTextActive:!0})}),At(r,"handleLeaveSlideOrTraveller",function(){r.setState({isTextActive:!1})}),At(r,"handleSlideDragStart",function(i){var a=I5(i)?i.changedTouches[0]:i;r.setState({isTravellerMoving:!1,isSlideMoving:!0,slideMoveStartX:a.pageX}),r.attachDragEndListener()}),r.travellerDragStartHandlers={startX:r.handleTravellerDragStart.bind(r,"startX"),endX:r.handleTravellerDragStart.bind(r,"endX")},r.state={},r}return OU(t,e),kU(t,[{key:"componentWillUnmount",value:function(){this.leaveTimer&&(clearTimeout(this.leaveTimer),this.leaveTimer=null),this.detachDragEndListener()}},{key:"getIndex",value:function(r){var i=r.startX,a=r.endX,l=this.state.scaleValues,o=this.props,s=o.gap,u=o.data,f=u.length-1,d=Math.min(i,a),p=Math.max(i,a),h=t.getIndexInRange(l,d),b=t.getIndexInRange(l,p);return{startIndex:h-h%s,endIndex:b===f?f:b-b%s}}},{key:"getTextOfTick",value:function(r){var i=this.props,a=i.data,l=i.tickFormatter,o=i.dataKey,s=Sn(a[r],o,r);return re(l)?l(s,r):s}},{key:"attachDragEndListener",value:function(){window.addEventListener("mouseup",this.handleDragEnd,!0),window.addEventListener("touchend",this.handleDragEnd,!0),window.addEventListener("mousemove",this.handleDrag,!0)}},{key:"detachDragEndListener",value:function(){window.removeEventListener("mouseup",this.handleDragEnd,!0),window.removeEventListener("touchend",this.handleDragEnd,!0),window.removeEventListener("mousemove",this.handleDrag,!0)}},{key:"handleSlideDrag",value:function(r){var i=this.state,a=i.slideMoveStartX,l=i.startX,o=i.endX,s=this.props,u=s.x,f=s.width,d=s.travellerWidth,p=s.startIndex,h=s.endIndex,b=s.onChange,v=r.pageX-a;v>0?v=Math.min(v,u+f-d-o,u+f-d-l):v<0&&(v=Math.max(v,u-l,u-o));var w=this.getIndex({startX:l+v,endX:o+v});(w.startIndex!==p||w.endIndex!==h)&&b&&b(w),this.setState({startX:l+v,endX:o+v,slideMoveStartX:r.pageX})}},{key:"handleTravellerDragStart",value:function(r,i){var a=I5(i)?i.changedTouches[0]:i;this.setState({isSlideMoving:!1,isTravellerMoving:!0,movingTravellerId:r,brushMoveStartX:a.pageX}),this.attachDragEndListener()}},{key:"handleTravellerMove",value:function(r){var i=this.state,a=i.brushMoveStartX,l=i.movingTravellerId,o=i.endX,s=i.startX,u=this.state[l],f=this.props,d=f.x,p=f.width,h=f.travellerWidth,b=f.onChange,v=f.gap,w=f.data,y={startX:this.state.startX,endX:this.state.endX},m=r.pageX-a;m>0?m=Math.min(m,d+p-h-u):m<0&&(m=Math.max(m,d-u)),y[l]=u+m;var g=this.getIndex(y),S=g.startIndex,x=g.endIndex,k=function(){var j=w.length-1;return l==="startX"&&(o>s?S%v===0:x%v===0)||o<s&&x===j||l==="endX"&&(o>s?x%v===0:S%v===0)||o>s&&x===j};this.setState(At(At({},l,u+m),"brushMoveStartX",r.pageX),function(){b&&k()&&b(g)})}},{key:"handleTravellerMoveKeyboard",value:function(r,i){var a=this,l=this.state,o=l.scaleValues,s=l.startX,u=l.endX,f=this.state[i],d=o.indexOf(f);if(d!==-1){var p=d+r;if(!(p===-1||p>=o.length)){var h=o[p];i==="startX"&&h>=u||i==="endX"&&h<=s||this.setState(At({},i,h),function(){a.props.onChange(a.getIndex({startX:a.state.startX,endX:a.state.endX}))})}}}},{key:"renderBackground",value:function(){var r=this.props,i=r.x,a=r.y,l=r.width,o=r.height,s=r.fill,u=r.stroke;return z.createElement("rect",{stroke:u,fill:s,x:i,y:a,width:l,height:o})}},{key:"renderPanorama",value:function(){var r=this.props,i=r.x,a=r.y,l=r.width,o=r.height,s=r.data,u=r.children,f=r.padding,d=N.Children.only(u);return d?z.cloneElement(d,{x:i,y:a,width:l,height:o,margin:f,compact:!0,data:s}):null}},{key:"renderTravellerLayer",value:function(r,i){var a,l,o=this,s=this.props,u=s.y,f=s.travellerWidth,d=s.height,p=s.traveller,h=s.ariaLabel,b=s.data,v=s.startIndex,w=s.endIndex,y=Math.max(r,this.props.x),m=Bd(Bd({},ue(this.props,!1)),{},{x:y,y:u,width:f,height:d}),g=h||"Min value: ".concat((a=b[v])===null||a===void 0?void 0:a.name,", Max value: ").concat((l=b[w])===null||l===void 0?void 0:l.name);return z.createElement(et,{tabIndex:0,role:"slider","aria-label":g,"aria-valuenow":r,className:"recharts-brush-traveller",onMouseEnter:this.handleEnterSlideOrTraveller,onMouseLeave:this.handleLeaveSlideOrTraveller,onMouseDown:this.travellerDragStartHandlers[i],onTouchStart:this.travellerDragStartHandlers[i],onKeyDown:function(x){["ArrowLeft","ArrowRight"].includes(x.key)&&(x.preventDefault(),x.stopPropagation(),o.handleTravellerMoveKeyboard(x.key==="ArrowRight"?1:-1,i))},onFocus:function(){o.setState({isTravellerFocused:!0})},onBlur:function(){o.setState({isTravellerFocused:!1})},style:{cursor:"col-resize"}},t.renderTraveller(p,m))}},{key:"renderSlide",value:function(r,i){var a=this.props,l=a.y,o=a.height,s=a.stroke,u=a.travellerWidth,f=Math.min(r,i)+u,d=Math.max(Math.abs(i-r)-u,0);return z.createElement("rect",{className:"recharts-brush-slide",onMouseEnter:this.handleEnterSlideOrTraveller,onMouseLeave:this.handleLeaveSlideOrTraveller,onMouseDown:this.handleSlideDragStart,onTouchStart:this.handleSlideDragStart,style:{cursor:"move"},stroke:"none",fill:s,fillOpacity:.2,x:f,y:l,width:d,height:o})}},{key:"renderText",value:function(){var r=this.props,i=r.startIndex,a=r.endIndex,l=r.y,o=r.height,s=r.travellerWidth,u=r.stroke,f=this.state,d=f.startX,p=f.endX,h=5,b={pointerEvents:"none",fill:u};return z.createElement(et,{className:"recharts-brush-texts"},z.createElement(nc,Oc({textAnchor:"end",verticalAnchor:"middle",x:Math.min(d,p)-h,y:l+o/2},b),this.getTextOfTick(i)),z.createElement(nc,Oc({textAnchor:"start",verticalAnchor:"middle",x:Math.max(d,p)+s+h,y:l+o/2},b),this.getTextOfTick(a)))}},{key:"render",value:function(){var r=this.props,i=r.data,a=r.className,l=r.children,o=r.x,s=r.y,u=r.width,f=r.height,d=r.alwaysShowText,p=this.state,h=p.startX,b=p.endX,v=p.isTextActive,w=p.isSlideMoving,y=p.isTravellerMoving,m=p.isTravellerFocused;if(!i||!i.length||!G(o)||!G(s)||!G(u)||!G(f)||u<=0||f<=0)return null;var g=de("recharts-brush",a),S=z.Children.count(l)===1,x=bU("userSelect","none");return z.createElement(et,{className:g,onMouseLeave:this.handleLeaveWrapper,onTouchMove:this.handleTouchMove,style:x},this.renderBackground(),S&&this.renderPanorama(),this.renderSlide(h,b),this.renderTravellerLayer(h,"startX"),this.renderTravellerLayer(b,"endX"),(v||w||y||m||d)&&this.renderText())}}],[{key:"renderDefaultTraveller",value:function(r){var i=r.x,a=r.y,l=r.width,o=r.height,s=r.stroke,u=Math.floor(a+o/2)-1;return z.createElement(z.Fragment,null,z.createElement("rect",{x:i,y:a,width:l,height:o,fill:s,stroke:"none"}),z.createElement("line",{x1:i+1,y1:u,x2:i+l-1,y2:u,fill:"none",stroke:"#fff"}),z.createElement("line",{x1:i+1,y1:u+2,x2:i+l-1,y2:u+2,fill:"none",stroke:"#fff"}))}},{key:"renderTraveller",value:function(r,i){var a;return z.isValidElement(r)?a=z.cloneElement(r,i):re(r)?a=r(i):a=t.renderDefaultTraveller(i),a}},{key:"getDerivedStateFromProps",value:function(r,i){var a=r.data,l=r.width,o=r.x,s=r.travellerWidth,u=r.updateId,f=r.startIndex,d=r.endIndex;if(a!==i.prevData||u!==i.prevUpdateId)return Bd({prevData:a,prevTravellerWidth:s,prevUpdateId:u,prevX:o,prevWidth:l},a&&a.length?AU({data:a,width:l,x:o,travellerWidth:s,startIndex:f,endIndex:d}):{scale:null,scaleValues:null});if(i.scale&&(l!==i.prevWidth||o!==i.prevX||s!==i.prevTravellerWidth)){i.scale.range([o,o+l-s]);var p=i.scale.domain().map(function(h){return i.scale(h)});return{prevData:a,prevTravellerWidth:s,prevUpdateId:u,prevX:o,prevWidth:l,startX:i.scale(r.startIndex),endX:i.scale(r.endIndex),scaleValues:p}}return null}},{key:"getIndexInRange",value:function(r,i){for(var a=r.length,l=0,o=a-1;o-l>1;){var s=Math.floor((l+o)/2);r[s]>i?o=s:l=s}return i>=r[o]?o:l}}])}(N.PureComponent);At(ra,"displayName","Brush");At(ra,"defaultProps",{height:40,travellerWidth:5,gap:1,fill:"#fff",stroke:"#666",padding:{top:1,right:1,bottom:1,left:1},leaveTimeOut:1e3,alwaysShowText:!1});var NU=O0;function CU(e,t){var n;return NU(e,function(r,i,a){return n=t(r,i,a),!n}),!!n}var EU=CU,MU=h6,TU=Sr,$U=EU,zU=Pt,IU=Su;function DU(e,t,n){var r=zU(e)?MU:$U;return n&&IU(e,t,n)&&(t=void 0),r(e,TU(t))}var LU=DU;const FU=ke(LU);var wn=function(t,n){var r=t.alwaysShow,i=t.ifOverflow;return r&&(i="extendDomain"),i===n},D5=I6;function RU(e,t,n){t=="__proto__"&&D5?D5(e,t,{configurable:!0,enumerable:!0,value:n,writable:!0}):e[t]=n}var BU=RU,WU=BU,UU=$6,HU=Sr;function GU(e,t){var n={};return t=HU(t),UU(e,function(r,i,a){WU(n,i,t(r,i,a))}),n}var VU=GU;const XU=ke(VU);function qU(e,t){for(var n=-1,r=e==null?0:e.length;++n<r;)if(!t(e[n],n,e))return!1;return!0}var KU=qU,YU=O0;function ZU(e,t){var n=!0;return YU(e,function(r,i,a){return n=!!t(r,i,a),n}),n}var QU=ZU,JU=KU,eH=QU,tH=Sr,nH=Pt,rH=Su;function iH(e,t,n){var r=nH(e)?JU:eH;return n&&rH(e,t,n)&&(t=void 0),r(e,tH(t))}var aH=iH;const m3=ke(aH);var lH=["x","y"];function ro(e){"@babel/helpers - typeof";return ro=typeof Symbol=="function"&&typeof Symbol.iterator=="symbol"?function(t){return typeof t}:function(t){return t&&typeof Symbol=="function"&&t.constructor===Symbol&&t!==Symbol.prototype?"symbol":typeof t},ro(e)}function H1(){return H1=Object.assign?Object.assign.bind():function(e){for(var t=1;t<arguments.length;t++){var n=arguments[t];for(var r in n)Object.prototype.hasOwnProperty.call(n,r)&&(e[r]=n[r])}return e},H1.apply(this,arguments)}function L5(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter(function(i){return Object.getOwnPropertyDescriptor(e,i).enumerable})),n.push.apply(n,r)}return n}function Ga(e){for(var t=1;t<arguments.length;t++){var n=arguments[t]!=null?arguments[t]:{};t%2?L5(Object(n),!0).forEach(function(r){oH(e,r,n[r])}):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):L5(Object(n)).forEach(function(r){Object.defineProperty(e,r,Object.getOwnPropertyDescriptor(n,r))})}return e}function oH(e,t,n){return t=sH(t),t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function sH(e){var t=cH(e,"string");return ro(t)=="symbol"?t:t+""}function cH(e,t){if(ro(e)!="object"||!e)return e;var n=e[Symbol.toPrimitive];if(n!==void 0){var r=n.call(e,t);if(ro(r)!="object")return r;throw new TypeError("@@toPrimitive must return a primitive value.")}return(t==="string"?String:Number)(e)}function uH(e,t){if(e==null)return{};var n=dH(e,t),r,i;if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);for(i=0;i<a.length;i++)r=a[i],!(t.indexOf(r)>=0)&&Object.prototype.propertyIsEnumerable.call(e,r)&&(n[r]=e[r])}return n}function dH(e,t){if(e==null)return{};var n={};for(var r in e)if(Object.prototype.hasOwnProperty.call(e,r)){if(t.indexOf(r)>=0)continue;n[r]=e[r]}return n}function fH(e,t){var n=e.x,r=e.y,i=uH(e,lH),a="".concat(n),l=parseInt(a,10),o="".concat(r),s=parseInt(o,10),u="".concat(t.height||i.height),f=parseInt(u,10),d="".concat(t.width||i.width),p=parseInt(d,10);return Ga(Ga(Ga(Ga(Ga({},t),i),l?{x:l}:{}),s?{y:s}:{}),{},{height:f,width:p,name:t.name,radius:t.radius})}function F5(e){return z.createElement(KW,H1({shapeType:"rectangle",propTransformer:fH,activeClassName:"recharts-active-bar"},e))}var pH=function(t){var n=arguments.length>1&&arguments[1]!==void 0?arguments[1]:0;return function(r,i){if(typeof t=="number")return t;var a=G(r)||CS(r);return a?t(r,i):(a||ti(),n)}},hH=["value","background"],y3;function ia(e){"@babel/helpers - typeof";return ia=typeof Symbol=="function"&&typeof Symbol.iterator=="symbol"?function(t){return typeof t}:function(t){return t&&typeof Symbol=="function"&&t.constructor===Symbol&&t!==Symbol.prototype?"symbol":typeof t},ia(e)}function mH(e,t){if(e==null)return{};var n=yH(e,t),r,i;if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);for(i=0;i<a.length;i++)r=a[i],!(t.indexOf(r)>=0)&&Object.prototype.propertyIsEnumerable.call(e,r)&&(n[r]=e[r])}return n}function yH(e,t){if(e==null)return{};var n={};for(var r in e)if(Object.prototype.hasOwnProperty.call(e,r)){if(t.indexOf(r)>=0)continue;n[r]=e[r]}return n}function Ac(){return Ac=Object.assign?Object.assign.bind():function(e){for(var t=1;t<arguments.length;t++){var n=arguments[t];for(var r in n)Object.prototype.hasOwnProperty.call(n,r)&&(e[r]=n[r])}return e},Ac.apply(this,arguments)}function R5(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter(function(i){return Object.getOwnPropertyDescriptor(e,i).enumerable})),n.push.apply(n,r)}return n}function Be(e){for(var t=1;t<arguments.length;t++){var n=arguments[t]!=null?arguments[t]:{};t%2?R5(Object(n),!0).forEach(function(r){ar(e,r,n[r])}):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):R5(Object(n)).forEach(function(r){Object.defineProperty(e,r,Object.getOwnPropertyDescriptor(n,r))})}return e}function vH(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}function B5(e,t){for(var n=0;n<t.length;n++){var r=t[n];r.enumerable=r.enumerable||!1,r.configurable=!0,"value"in r&&(r.writable=!0),Object.defineProperty(e,g3(r.key),r)}}function gH(e,t,n){return t&&B5(e.prototype,t),n&&B5(e,n),Object.defineProperty(e,"prototype",{writable:!1}),e}function xH(e,t,n){return t=Nc(t),bH(e,v3()?Reflect.construct(t,n||[],Nc(e).constructor):t.apply(e,n))}function bH(e,t){if(t&&(ia(t)==="object"||typeof t=="function"))return t;if(t!==void 0)throw new TypeError("Derived constructors may only return object or undefined");return wH(e)}function wH(e){if(e===void 0)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return e}function v3(){try{var e=!Boolean.prototype.valueOf.call(Reflect.construct(Boolean,[],function(){}))}catch{}return(v3=function(){return!!e})()}function Nc(e){return Nc=Object.setPrototypeOf?Object.getPrototypeOf.bind():function(n){return n.__proto__||Object.getPrototypeOf(n)},Nc(e)}function kH(e,t){if(typeof t!="function"&&t!==null)throw new TypeError("Super expression must either be null or a function");e.prototype=Object.create(t&&t.prototype,{constructor:{value:e,writable:!0,configurable:!0}}),Object.defineProperty(e,"prototype",{writable:!1}),t&&G1(e,t)}function G1(e,t){return G1=Object.setPrototypeOf?Object.setPrototypeOf.bind():function(r,i){return r.__proto__=i,r},G1(e,t)}function ar(e,t,n){return t=g3(t),t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function g3(e){var t=SH(e,"string");return ia(t)=="symbol"?t:t+""}function SH(e,t){if(ia(e)!="object"||!e)return e;var n=e[Symbol.toPrimitive];if(n!==void 0){var r=n.call(e,t);if(ia(r)!="object")return r;throw new TypeError("@@toPrimitive must return a primitive value.")}return String(e)}var vn=function(e){function t(){var n;vH(this,t);for(var r=arguments.length,i=new Array(r),a=0;a<r;a++)i[a]=arguments[a];return n=xH(this,t,[].concat(i)),ar(n,"state",{isAnimationFinished:!1}),ar(n,"id",yu("recharts-bar-")),ar(n,"handleAnimationEnd",function(){var l=n.props.onAnimationEnd;n.setState({isAnimationFinished:!0}),l&&l()}),ar(n,"handleAnimationStart",function(){var l=n.props.onAnimationStart;n.setState({isAnimationFinished:!1}),l&&l()}),n}return kH(t,e),gH(t,[{key:"renderRectanglesStatically",value:function(r){var i=this,a=this.props,l=a.shape,o=a.dataKey,s=a.activeIndex,u=a.activeBar,f=ue(this.props,!1);return r&&r.map(function(d,p){var h=p===s,b=h?u:l,v=Be(Be(Be({},f),d),{},{isActive:h,option:b,index:p,dataKey:o,onAnimationStart:i.handleAnimationStart,onAnimationEnd:i.handleAnimationEnd});return z.createElement(et,Ac({className:"recharts-bar-rectangle"},Ws(i.props,d,p),{key:"rectangle-".concat(d==null?void 0:d.x,"-").concat(d==null?void 0:d.y,"-").concat(d==null?void 0:d.value,"-").concat(p)}),z.createElement(F5,v))})}},{key:"renderRectanglesWithAnimation",value:function(){var r=this,i=this.props,a=i.data,l=i.layout,o=i.isAnimationActive,s=i.animationBegin,u=i.animationDuration,f=i.animationEasing,d=i.animationId,p=this.state.prevData;return z.createElement(gr,{begin:s,duration:u,isActive:o,easing:f,from:{t:0},to:{t:1},key:"bar-".concat(d),onAnimationEnd:this.handleAnimationEnd,onAnimationStart:this.handleAnimationStart},function(h){var b=h.t,v=a.map(function(w,y){var m=p&&p[y];if(m){var g=di(m.x,w.x),S=di(m.y,w.y),x=di(m.width,w.width),k=di(m.height,w.height);return Be(Be({},w),{},{x:g(b),y:S(b),width:x(b),height:k(b)})}if(l==="horizontal"){var _=di(0,w.height),j=_(b);return Be(Be({},w),{},{y:w.y+w.height-j,height:j})}var O=di(0,w.width),M=O(b);return Be(Be({},w),{},{width:M})});return z.createElement(et,null,r.renderRectanglesStatically(v))})}},{key:"renderRectangles",value:function(){var r=this.props,i=r.data,a=r.isAnimationActive,l=this.state.prevData;return a&&i&&i.length&&(!l||!Z0(l,i))?this.renderRectanglesWithAnimation():this.renderRectanglesStatically(i)}},{key:"renderBackground",value:function(){var r=this,i=this.props,a=i.data,l=i.dataKey,o=i.activeIndex,s=ue(this.props.background,!1);return a.map(function(u,f){u.value;var d=u.background,p=mH(u,hH);if(!d)return null;var h=Be(Be(Be(Be(Be({},p),{},{fill:"#eee"},d),s),Ws(r.props,u,f)),{},{onAnimationStart:r.handleAnimationStart,onAnimationEnd:r.handleAnimationEnd,dataKey:l,index:f,className:"recharts-bar-background-rectangle"});return z.createElement(F5,Ac({key:"background-bar-".concat(f),option:r.props.background,isActive:f===o},h))})}},{key:"renderErrorBar",value:function(r,i){if(this.props.isAnimationActive&&!this.state.isAnimationFinished)return null;var a=this.props,l=a.data,o=a.xAxis,s=a.yAxis,u=a.layout,f=a.children,d=cn(f,$u);if(!d)return null;var p=u==="vertical"?l[0].height/2:l[0].width/2,h=function(w,y){var m=Array.isArray(w.value)?w.value[1]:w.value;return{x:w.x,y:w.y,value:m,errorVal:Sn(w,y)}},b={clipPath:r?"url(#clipPath-".concat(i,")"):null};return z.createElement(et,b,d.map(function(v){return z.cloneElement(v,{key:"error-bar-".concat(i,"-").concat(v.props.dataKey),data:l,xAxis:o,yAxis:s,layout:u,offset:p,dataPointFormatter:h})}))}},{key:"render",value:function(){var r=this.props,i=r.hide,a=r.data,l=r.className,o=r.xAxis,s=r.yAxis,u=r.left,f=r.top,d=r.width,p=r.height,h=r.isAnimationActive,b=r.background,v=r.id;if(i||!a||!a.length)return null;var w=this.state.isAnimationFinished,y=de("recharts-bar",l),m=o&&o.allowDataOverflow,g=s&&s.allowDataOverflow,S=m||g,x=fe(v)?this.id:v;return z.createElement(et,{className:y},m||g?z.createElement("defs",null,z.createElement("clipPath",{id:"clipPath-".concat(x)},z.createElement("rect",{x:m?u:u-d/2,y:g?f:f-p/2,width:m?d:d*2,height:g?p:p*2}))):null,z.createElement(et,{className:"recharts-bar-rectangles",clipPath:S?"url(#clipPath-".concat(x,")"):null},b?this.renderBackground():null,this.renderRectangles()),this.renderErrorBar(S,x),(!h||w)&&Vr.renderCallByParent(this.props,a))}}],[{key:"getDerivedStateFromProps",value:function(r,i){return r.animationId!==i.prevAnimationId?{prevAnimationId:r.animationId,curData:r.data,prevData:i.curData}:r.data!==i.curData?{curData:r.data}:null}}])}(N.PureComponent);y3=vn;ar(vn,"displayName","Bar");ar(vn,"defaultProps",{xAxisId:0,yAxisId:0,legendType:"rect",minPointSize:0,hide:!1,data:[],layout:"vertical",activeBar:!1,isAnimationActive:!xo.isSsr,animationBegin:0,animationDuration:400,animationEasing:"ease"});ar(vn,"getComposedData",function(e){var t=e.props,n=e.item,r=e.barPosition,i=e.bandSize,a=e.xAxis,l=e.yAxis,o=e.xAxisTicks,s=e.yAxisTicks,u=e.stackedData,f=e.dataStartIndex,d=e.displayedData,p=e.offset,h=QL(r,n);if(!h)return null;var b=t.layout,v=n.type.defaultProps,w=v!==void 0?Be(Be({},v),n.props):n.props,y=w.dataKey,m=w.children,g=w.minPointSize,S=b==="horizontal"?l:a,x=u?S.scale.domain():null,k=lF({numericAxis:S}),_=cn(m,U6),j=d.map(function(O,M){var E,A,P,$,C,I;u?E=JL(u[f+M],x):(E=Sn(O,y),Array.isArray(E)||(E=[k,E]));var L=pH(g,y3.defaultProps.minPointSize)(E[1],M);if(b==="horizontal"){var T,D=[l.scale(E[0]),l.scale(E[1])],R=D[0],H=D[1];A=F2({axis:a,ticks:o,bandSize:i,offset:h.offset,entry:O,index:M}),P=(T=H??R)!==null&&T!==void 0?T:void 0,$=h.size;var B=R-H;if(C=Number.isNaN(B)?0:B,I={x:A,y:l.y,width:$,height:l.height},Math.abs(L)>0&&Math.abs(C)<Math.abs(L)){var K=ln(C||L)*(Math.abs(L)-Math.abs(C));P-=K,C+=K}}else{var te=[a.scale(E[0]),a.scale(E[1])],pe=te[0],xe=te[1];if(A=pe,P=F2({axis:l,ticks:s,bandSize:i,offset:h.offset,entry:O,index:M}),$=xe-pe,C=h.size,I={x:a.x,y:P,width:a.width,height:C},Math.abs(L)>0&&Math.abs($)<Math.abs(L)){var st=ln($||L)*(Math.abs(L)-Math.abs($));$+=st}}return Be(Be(Be({},O),{},{x:A,y:P,width:$,height:C,value:u?E:E[1],payload:O,background:I},_&&_[M]&&_[M].props),{},{tooltipPayload:[Kg(n,O)],tooltipPosition:{x:A+$/2,y:P+C/2}})});return Be({data:j,layout:b},p)});function io(e){"@babel/helpers - typeof";return io=typeof Symbol=="function"&&typeof Symbol.iterator=="symbol"?function(t){return typeof t}:function(t){return t&&typeof Symbol=="function"&&t.constructor===Symbol&&t!==Symbol.prototype?"symbol":typeof t},io(e)}function _H(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}function W5(e,t){for(var n=0;n<t.length;n++){var r=t[n];r.enumerable=r.enumerable||!1,r.configurable=!0,"value"in r&&(r.writable=!0),Object.defineProperty(e,x3(r.key),r)}}function jH(e,t,n){return t&&W5(e.prototype,t),n&&W5(e,n),Object.defineProperty(e,"prototype",{writable:!1}),e}function U5(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter(function(i){return Object.getOwnPropertyDescriptor(e,i).enumerable})),n.push.apply(n,r)}return n}function nn(e){for(var t=1;t<arguments.length;t++){var n=arguments[t]!=null?arguments[t]:{};t%2?U5(Object(n),!0).forEach(function(r){Du(e,r,n[r])}):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):U5(Object(n)).forEach(function(r){Object.defineProperty(e,r,Object.getOwnPropertyDescriptor(n,r))})}return e}function Du(e,t,n){return t=x3(t),t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function x3(e){var t=OH(e,"string");return io(t)=="symbol"?t:t+""}function OH(e,t){if(io(e)!="object"||!e)return e;var n=e[Symbol.toPrimitive];if(n!==void 0){var r=n.call(e,t);if(io(r)!="object")return r;throw new TypeError("@@toPrimitive must return a primitive value.")}return(t==="string"?String:Number)(e)}var PH=function(t,n,r,i,a){var l=t.width,o=t.height,s=t.layout,u=t.children,f=Object.keys(n),d={left:r.left,leftMirror:r.left,right:l-r.right,rightMirror:l-r.right,top:r.top,topMirror:r.top,bottom:o-r.bottom,bottomMirror:o-r.bottom},p=!!Ct(u,vn);return f.reduce(function(h,b){var v=n[b],w=v.orientation,y=v.domain,m=v.padding,g=m===void 0?{}:m,S=v.mirror,x=v.reversed,k="".concat(w).concat(S?"Mirror":""),_,j,O,M,E;if(v.type==="number"&&(v.padding==="gap"||v.padding==="no-gap")){var A=y[1]-y[0],P=1/0,$=v.categoricalDomain.sort(TS);if($.forEach(function(te,pe){pe>0&&(P=Math.min((te||0)-($[pe-1]||0),P))}),Number.isFinite(P)){var C=P/A,I=v.layout==="vertical"?r.height:r.width;if(v.padding==="gap"&&(_=C*I/2),v.padding==="no-gap"){var L=Jr(t.barCategoryGap,C*I),T=C*I/2;_=T-L-(T-L)/I*L}}}i==="xAxis"?j=[r.left+(g.left||0)+(_||0),r.left+r.width-(g.right||0)-(_||0)]:i==="yAxis"?j=s==="horizontal"?[r.top+r.height-(g.bottom||0),r.top+(g.top||0)]:[r.top+(g.top||0)+(_||0),r.top+r.height-(g.bottom||0)-(_||0)]:j=v.range,x&&(j=[j[1],j[0]]);var D=YL(v,a,p),R=D.scale,H=D.realScaleType;R.domain(y).range(j),ZL(R);var B=aF(R,nn(nn({},v),{},{realScaleType:H}));i==="xAxis"?(E=w==="top"&&!S||w==="bottom"&&S,O=r.left,M=d[k]-E*v.height):i==="yAxis"&&(E=w==="left"&&!S||w==="right"&&S,O=d[k]-E*v.width,M=r.top);var K=nn(nn(nn({},v),B),{},{realScaleType:H,x:O,y:M,scale:R,width:i==="xAxis"?r.width:v.width,height:i==="yAxis"?r.height:v.height});return K.bandSize=yc(K,B),!v.hide&&i==="xAxis"?d[k]+=(E?-1:1)*K.height:v.hide||(d[k]+=(E?-1:1)*K.width),nn(nn({},h),{},Du({},b,K))},{})},b3=function(t,n){var r=t.x,i=t.y,a=n.x,l=n.y;return{x:Math.min(r,a),y:Math.min(i,l),width:Math.abs(a-r),height:Math.abs(l-i)}},AH=function(t){var n=t.x1,r=t.y1,i=t.x2,a=t.y2;return b3({x:n,y:r},{x:i,y:a})},w3=function(){function e(t){_H(this,e),this.scale=t}return jH(e,[{key:"domain",get:function(){return this.scale.domain}},{key:"range",get:function(){return this.scale.range}},{key:"rangeMin",get:function(){return this.range()[0]}},{key:"rangeMax",get:function(){return this.range()[1]}},{key:"bandwidth",get:function(){return this.scale.bandwidth}},{key:"apply",value:function(n){var r=arguments.length>1&&arguments[1]!==void 0?arguments[1]:{},i=r.bandAware,a=r.position;if(n!==void 0){if(a)switch(a){case"start":return this.scale(n);case"middle":{var l=this.bandwidth?this.bandwidth()/2:0;return this.scale(n)+l}case"end":{var o=this.bandwidth?this.bandwidth():0;return this.scale(n)+o}default:return this.scale(n)}if(i){var s=this.bandwidth?this.bandwidth()/2:0;return this.scale(n)+s}return this.scale(n)}}},{key:"isInRange",value:function(n){var r=this.range(),i=r[0],a=r[r.length-1];return i<=a?n>=i&&n<=a:n>=a&&n<=i}}],[{key:"create",value:function(n){return new e(n)}}])}();Du(w3,"EPS",1e-4);var nh=function(t){var n=Object.keys(t).reduce(function(r,i){return nn(nn({},r),{},Du({},i,w3.create(t[i])))},{});return nn(nn({},n),{},{apply:function(i){var a=arguments.length>1&&arguments[1]!==void 0?arguments[1]:{},l=a.bandAware,o=a.position;return XU(i,function(s,u){return n[u].apply(s,{bandAware:l,position:o})})},isInRange:function(i){return m3(i,function(a,l){return n[l].isInRange(a)})}})};function NH(e){return(e%180+180)%180}var CH=function(t){var n=t.width,r=t.height,i=arguments.length>1&&arguments[1]!==void 0?arguments[1]:0,a=NH(i),l=a*Math.PI/180,o=Math.atan(r/n),s=l>o&&l<Math.PI-o?r/Math.sin(l):n/Math.cos(l);return Math.abs(s)},EH=Sr,MH=go,TH=wu;function $H(e){return function(t,n,r){var i=Object(t);if(!MH(t)){var a=EH(n);t=TH(t),n=function(o){return a(i[o],o,i)}}var l=e(t,n,r);return l>-1?i[a?t[l]:l]:void 0}}var zH=$H,IH=d3;function DH(e){var t=IH(e),n=t%1;return t===t?n?t-n:t:0}var LH=DH,FH=A6,RH=Sr,BH=LH,WH=Math.max;function UH(e,t,n){var r=e==null?0:e.length;if(!r)return-1;var i=n==null?0:BH(n);return i<0&&(i=WH(r+i,0)),FH(e,RH(t),i)}var HH=UH,GH=zH,VH=HH,XH=GH(VH),qH=XH;const KH=ke(qH);var YH=Ik(function(e){return{x:e.left,y:e.top,width:e.width,height:e.height}},function(e){return["l",e.left,"t",e.top,"w",e.width,"h",e.height].join("")}),rh=N.createContext(void 0),ih=N.createContext(void 0),k3=N.createContext(void 0),S3=N.createContext({}),_3=N.createContext(void 0),j3=N.createContext(0),O3=N.createContext(0),H5=function(t){var n=t.state,r=n.xAxisMap,i=n.yAxisMap,a=n.offset,l=t.clipPathId,o=t.children,s=t.width,u=t.height,f=YH(a);return z.createElement(rh.Provider,{value:r},z.createElement(ih.Provider,{value:i},z.createElement(S3.Provider,{value:a},z.createElement(k3.Provider,{value:f},z.createElement(_3.Provider,{value:l},z.createElement(j3.Provider,{value:u},z.createElement(O3.Provider,{value:s},o)))))))},ZH=function(){return N.useContext(_3)},P3=function(t){var n=N.useContext(rh);n==null&&ti();var r=n[t];return r==null&&ti(),r},QH=function(){var t=N.useContext(rh);return nr(t)},JH=function(){var t=N.useContext(ih),n=KH(t,function(r){return m3(r.domain,Number.isFinite)});return n||nr(t)},A3=function(t){var n=N.useContext(ih);n==null&&ti();var r=n[t];return r==null&&ti(),r},eG=function(){var t=N.useContext(k3);return t},tG=function(){return N.useContext(S3)},ah=function(){return N.useContext(O3)},lh=function(){return N.useContext(j3)};function aa(e){"@babel/helpers - typeof";return aa=typeof Symbol=="function"&&typeof Symbol.iterator=="symbol"?function(t){return typeof t}:function(t){return t&&typeof Symbol=="function"&&t.constructor===Symbol&&t!==Symbol.prototype?"symbol":typeof t},aa(e)}function nG(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}function rG(e,t){for(var n=0;n<t.length;n++){var r=t[n];r.enumerable=r.enumerable||!1,r.configurable=!0,"value"in r&&(r.writable=!0),Object.defineProperty(e,C3(r.key),r)}}function iG(e,t,n){return t&&rG(e.prototype,t),Object.defineProperty(e,"prototype",{writable:!1}),e}function aG(e,t,n){return t=Cc(t),lG(e,N3()?Reflect.construct(t,n||[],Cc(e).constructor):t.apply(e,n))}function lG(e,t){if(t&&(aa(t)==="object"||typeof t=="function"))return t;if(t!==void 0)throw new TypeError("Derived constructors may only return object or undefined");return oG(e)}function oG(e){if(e===void 0)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return e}function N3(){try{var e=!Boolean.prototype.valueOf.call(Reflect.construct(Boolean,[],function(){}))}catch{}return(N3=function(){return!!e})()}function Cc(e){return Cc=Object.setPrototypeOf?Object.getPrototypeOf.bind():function(n){return n.__proto__||Object.getPrototypeOf(n)},Cc(e)}function sG(e,t){if(typeof t!="function"&&t!==null)throw new TypeError("Super expression must either be null or a function");e.prototype=Object.create(t&&t.prototype,{constructor:{value:e,writable:!0,configurable:!0}}),Object.defineProperty(e,"prototype",{writable:!1}),t&&V1(e,t)}function V1(e,t){return V1=Object.setPrototypeOf?Object.setPrototypeOf.bind():function(r,i){return r.__proto__=i,r},V1(e,t)}function G5(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter(function(i){return Object.getOwnPropertyDescriptor(e,i).enumerable})),n.push.apply(n,r)}return n}function V5(e){for(var t=1;t<arguments.length;t++){var n=arguments[t]!=null?arguments[t]:{};t%2?G5(Object(n),!0).forEach(function(r){oh(e,r,n[r])}):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):G5(Object(n)).forEach(function(r){Object.defineProperty(e,r,Object.getOwnPropertyDescriptor(n,r))})}return e}function oh(e,t,n){return t=C3(t),t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function C3(e){var t=cG(e,"string");return aa(t)=="symbol"?t:t+""}function cG(e,t){if(aa(e)!="object"||!e)return e;var n=e[Symbol.toPrimitive];if(n!==void 0){var r=n.call(e,t);if(aa(r)!="object")return r;throw new TypeError("@@toPrimitive must return a primitive value.")}return String(e)}function uG(e,t){return hG(e)||pG(e,t)||fG(e,t)||dG()}function dG(){throw new TypeError(`Invalid attempt to destructure non-iterable instance.
In order to be iterable, non-array objects must have a [Symbol.iterator]() method.`)}function fG(e,t){if(e){if(typeof e=="string")return X5(e,t);var n=Object.prototype.toString.call(e).slice(8,-1);if(n==="Object"&&e.constructor&&(n=e.constructor.name),n==="Map"||n==="Set")return Array.from(e);if(n==="Arguments"||/^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n))return X5(e,t)}}function X5(e,t){(t==null||t>e.length)&&(t=e.length);for(var n=0,r=new Array(t);n<t;n++)r[n]=e[n];return r}function pG(e,t){var n=e==null?null:typeof Symbol<"u"&&e[Symbol.iterator]||e["@@iterator"];if(n!=null){var r,i,a,l,o=[],s=!0,u=!1;try{if(a=(n=n.call(e)).next,t!==0)for(;!(s=(r=a.call(n)).done)&&(o.push(r.value),o.length!==t);s=!0);}catch(f){u=!0,i=f}finally{try{if(!s&&n.return!=null&&(l=n.return(),Object(l)!==l))return}finally{if(u)throw i}}return o}}function hG(e){if(Array.isArray(e))return e}function X1(){return X1=Object.assign?Object.assign.bind():function(e){for(var t=1;t<arguments.length;t++){var n=arguments[t];for(var r in n)Object.prototype.hasOwnProperty.call(n,r)&&(e[r]=n[r])}return e},X1.apply(this,arguments)}var mG=function(t,n){var r;return z.isValidElement(t)?r=z.cloneElement(t,n):re(t)?r=t(n):r=z.createElement("line",X1({},n,{className:"recharts-reference-line-line"})),r},yG=function(t,n,r,i,a,l,o,s,u){var f=a.x,d=a.y,p=a.width,h=a.height;if(r){var b=u.y,v=t.y.apply(b,{position:l});if(wn(u,"discard")&&!t.y.isInRange(v))return null;var w=[{x:f+p,y:v},{x:f,y:v}];return s==="left"?w.reverse():w}if(n){var y=u.x,m=t.x.apply(y,{position:l});if(wn(u,"discard")&&!t.x.isInRange(m))return null;var g=[{x:m,y:d+h},{x:m,y:d}];return o==="top"?g.reverse():g}if(i){var S=u.segment,x=S.map(function(k){return t.apply(k,{position:l})});return wn(u,"discard")&&FU(x,function(k){return!t.isInRange(k)})?null:x}return null};function vG(e){var t=e.x,n=e.y,r=e.segment,i=e.xAxisId,a=e.yAxisId,l=e.shape,o=e.className,s=e.alwaysShow,u=ZH(),f=P3(i),d=A3(a),p=eG();if(!u||!p)return null;zn(s===void 0,'The alwaysShow prop is deprecated. Please use ifOverflow="extendDomain" instead.');var h=nh({x:f.scale,y:d.scale}),b=Ye(t),v=Ye(n),w=r&&r.length===2,y=yG(h,b,v,w,p,e.position,f.orientation,d.orientation,e);if(!y)return null;var m=uG(y,2),g=m[0],S=g.x,x=g.y,k=m[1],_=k.x,j=k.y,O=wn(e,"hidden")?"url(#".concat(u,")"):void 0,M=V5(V5({clipPath:O},ue(e,!0)),{},{x1:S,y1:x,x2:_,y2:j});return z.createElement(et,{className:de("recharts-reference-line",o)},mG(l,M),pt.renderCallByParent(e,AH({x1:S,y1:x,x2:_,y2:j})))}var sh=function(e){function t(){return nG(this,t),aG(this,t,arguments)}return sG(t,e),iG(t,[{key:"render",value:function(){return z.createElement(vG,this.props)}}])}(z.Component);oh(sh,"displayName","ReferenceLine");oh(sh,"defaultProps",{isFront:!1,ifOverflow:"discard",xAxisId:0,yAxisId:0,fill:"none",stroke:"#ccc",fillOpacity:1,strokeWidth:1,position:"middle"});function q1(){return q1=Object.assign?Object.assign.bind():function(e){for(var t=1;t<arguments.length;t++){var n=arguments[t];for(var r in n)Object.prototype.hasOwnProperty.call(n,r)&&(e[r]=n[r])}return e},q1.apply(this,arguments)}function la(e){"@babel/helpers - typeof";return la=typeof Symbol=="function"&&typeof Symbol.iterator=="symbol"?function(t){return typeof t}:function(t){return t&&typeof Symbol=="function"&&t.constructor===Symbol&&t!==Symbol.prototype?"symbol":typeof t},la(e)}function q5(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter(function(i){return Object.getOwnPropertyDescriptor(e,i).enumerable})),n.push.apply(n,r)}return n}function K5(e){for(var t=1;t<arguments.length;t++){var n=arguments[t]!=null?arguments[t]:{};t%2?q5(Object(n),!0).forEach(function(r){Lu(e,r,n[r])}):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):q5(Object(n)).forEach(function(r){Object.defineProperty(e,r,Object.getOwnPropertyDescriptor(n,r))})}return e}function gG(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}function xG(e,t){for(var n=0;n<t.length;n++){var r=t[n];r.enumerable=r.enumerable||!1,r.configurable=!0,"value"in r&&(r.writable=!0),Object.defineProperty(e,M3(r.key),r)}}function bG(e,t,n){return t&&xG(e.prototype,t),Object.defineProperty(e,"prototype",{writable:!1}),e}function wG(e,t,n){return t=Ec(t),kG(e,E3()?Reflect.construct(t,n||[],Ec(e).constructor):t.apply(e,n))}function kG(e,t){if(t&&(la(t)==="object"||typeof t=="function"))return t;if(t!==void 0)throw new TypeError("Derived constructors may only return object or undefined");return SG(e)}function SG(e){if(e===void 0)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return e}function E3(){try{var e=!Boolean.prototype.valueOf.call(Reflect.construct(Boolean,[],function(){}))}catch{}return(E3=function(){return!!e})()}function Ec(e){return Ec=Object.setPrototypeOf?Object.getPrototypeOf.bind():function(n){return n.__proto__||Object.getPrototypeOf(n)},Ec(e)}function _G(e,t){if(typeof t!="function"&&t!==null)throw new TypeError("Super expression must either be null or a function");e.prototype=Object.create(t&&t.prototype,{constructor:{value:e,writable:!0,configurable:!0}}),Object.defineProperty(e,"prototype",{writable:!1}),t&&K1(e,t)}function K1(e,t){return K1=Object.setPrototypeOf?Object.setPrototypeOf.bind():function(r,i){return r.__proto__=i,r},K1(e,t)}function Lu(e,t,n){return t=M3(t),t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function M3(e){var t=jG(e,"string");return la(t)=="symbol"?t:t+""}function jG(e,t){if(la(e)!="object"||!e)return e;var n=e[Symbol.toPrimitive];if(n!==void 0){var r=n.call(e,t);if(la(r)!="object")return r;throw new TypeError("@@toPrimitive must return a primitive value.")}return String(e)}var OG=function(t){var n=t.x,r=t.y,i=t.xAxis,a=t.yAxis,l=nh({x:i.scale,y:a.scale}),o=l.apply({x:n,y:r},{bandAware:!0});return wn(t,"discard")&&!l.isInRange(o)?null:o},Fu=function(e){function t(){return gG(this,t),wG(this,t,arguments)}return _G(t,e),bG(t,[{key:"render",value:function(){var r=this.props,i=r.x,a=r.y,l=r.r,o=r.alwaysShow,s=r.clipPathId,u=Ye(i),f=Ye(a);if(zn(o===void 0,'The alwaysShow prop is deprecated. Please use ifOverflow="extendDomain" instead.'),!u||!f)return null;var d=OG(this.props);if(!d)return null;var p=d.x,h=d.y,b=this.props,v=b.shape,w=b.className,y=wn(this.props,"hidden")?"url(#".concat(s,")"):void 0,m=K5(K5({clipPath:y},ue(this.props,!0)),{},{cx:p,cy:h});return z.createElement(et,{className:de("recharts-reference-dot",w)},t.renderDot(v,m),pt.renderCallByParent(this.props,{x:p-l,y:h-l,width:2*l,height:2*l}))}}])}(z.Component);Lu(Fu,"displayName","ReferenceDot");Lu(Fu,"defaultProps",{isFront:!1,ifOverflow:"discard",xAxisId:0,yAxisId:0,r:10,fill:"#fff",stroke:"#ccc",fillOpacity:1,strokeWidth:1});Lu(Fu,"renderDot",function(e,t){var n;return z.isValidElement(e)?n=z.cloneElement(e,t):re(e)?n=e(t):n=z.createElement(c3,q1({},t,{cx:t.cx,cy:t.cy,className:"recharts-reference-dot-dot"})),n});function Y1(){return Y1=Object.assign?Object.assign.bind():function(e){for(var t=1;t<arguments.length;t++){var n=arguments[t];for(var r in n)Object.prototype.hasOwnProperty.call(n,r)&&(e[r]=n[r])}return e},Y1.apply(this,arguments)}function oa(e){"@babel/helpers - typeof";return oa=typeof Symbol=="function"&&typeof Symbol.iterator=="symbol"?function(t){return typeof t}:function(t){return t&&typeof Symbol=="function"&&t.constructor===Symbol&&t!==Symbol.prototype?"symbol":typeof t},oa(e)}function Y5(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter(function(i){return Object.getOwnPropertyDescriptor(e,i).enumerable})),n.push.apply(n,r)}return n}function Z5(e){for(var t=1;t<arguments.length;t++){var n=arguments[t]!=null?arguments[t]:{};t%2?Y5(Object(n),!0).forEach(function(r){Ru(e,r,n[r])}):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):Y5(Object(n)).forEach(function(r){Object.defineProperty(e,r,Object.getOwnPropertyDescriptor(n,r))})}return e}function PG(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}function AG(e,t){for(var n=0;n<t.length;n++){var r=t[n];r.enumerable=r.enumerable||!1,r.configurable=!0,"value"in r&&(r.writable=!0),Object.defineProperty(e,$3(r.key),r)}}function NG(e,t,n){return t&&AG(e.prototype,t),Object.defineProperty(e,"prototype",{writable:!1}),e}function CG(e,t,n){return t=Mc(t),EG(e,T3()?Reflect.construct(t,n||[],Mc(e).constructor):t.apply(e,n))}function EG(e,t){if(t&&(oa(t)==="object"||typeof t=="function"))return t;if(t!==void 0)throw new TypeError("Derived constructors may only return object or undefined");return MG(e)}function MG(e){if(e===void 0)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return e}function T3(){try{var e=!Boolean.prototype.valueOf.call(Reflect.construct(Boolean,[],function(){}))}catch{}return(T3=function(){return!!e})()}function Mc(e){return Mc=Object.setPrototypeOf?Object.getPrototypeOf.bind():function(n){return n.__proto__||Object.getPrototypeOf(n)},Mc(e)}function TG(e,t){if(typeof t!="function"&&t!==null)throw new TypeError("Super expression must either be null or a function");e.prototype=Object.create(t&&t.prototype,{constructor:{value:e,writable:!0,configurable:!0}}),Object.defineProperty(e,"prototype",{writable:!1}),t&&Z1(e,t)}function Z1(e,t){return Z1=Object.setPrototypeOf?Object.setPrototypeOf.bind():function(r,i){return r.__proto__=i,r},Z1(e,t)}function Ru(e,t,n){return t=$3(t),t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function $3(e){var t=$G(e,"string");return oa(t)=="symbol"?t:t+""}function $G(e,t){if(oa(e)!="object"||!e)return e;var n=e[Symbol.toPrimitive];if(n!==void 0){var r=n.call(e,t);if(oa(r)!="object")return r;throw new TypeError("@@toPrimitive must return a primitive value.")}return String(e)}var zG=function(t,n,r,i,a){var l=a.x1,o=a.x2,s=a.y1,u=a.y2,f=a.xAxis,d=a.yAxis;if(!f||!d)return null;var p=nh({x:f.scale,y:d.scale}),h={x:t?p.x.apply(l,{position:"start"}):p.x.rangeMin,y:r?p.y.apply(s,{position:"start"}):p.y.rangeMin},b={x:n?p.x.apply(o,{position:"end"}):p.x.rangeMax,y:i?p.y.apply(u,{position:"end"}):p.y.rangeMax};return wn(a,"discard")&&(!p.isInRange(h)||!p.isInRange(b))?null:b3(h,b)},Bu=function(e){function t(){return PG(this,t),CG(this,t,arguments)}return TG(t,e),NG(t,[{key:"render",value:function(){var r=this.props,i=r.x1,a=r.x2,l=r.y1,o=r.y2,s=r.className,u=r.alwaysShow,f=r.clipPathId;zn(u===void 0,'The alwaysShow prop is deprecated. Please use ifOverflow="extendDomain" instead.');var d=Ye(i),p=Ye(a),h=Ye(l),b=Ye(o),v=this.props.shape;if(!d&&!p&&!h&&!b&&!v)return null;var w=zG(d,p,h,b,this.props);if(!w&&!v)return null;var y=wn(this.props,"hidden")?"url(#".concat(f,")"):void 0;return z.createElement(et,{className:de("recharts-reference-area",s)},t.renderRect(v,Z5(Z5({clipPath:y},ue(this.props,!0)),w)),pt.renderCallByParent(this.props,w))}}])}(z.Component);Ru(Bu,"displayName","ReferenceArea");Ru(Bu,"defaultProps",{isFront:!1,ifOverflow:"discard",xAxisId:0,yAxisId:0,r:10,fill:"#ccc",fillOpacity:.5,stroke:"none",strokeWidth:1});Ru(Bu,"renderRect",function(e,t){var n;return z.isValidElement(e)?n=z.cloneElement(e,t):re(e)?n=e(t):n=z.createElement(th,Y1({},t,{className:"recharts-reference-area-rect"})),n});function z3(e,t,n){if(t<1)return[];if(t===1&&n===void 0)return e;for(var r=[],i=0;i<e.length;i+=t)r.push(e[i]);return r}function IG(e,t,n){var r={width:e.width+t.width,height:e.height+t.height};return CH(r,n)}function DG(e,t,n){var r=n==="width",i=e.x,a=e.y,l=e.width,o=e.height;return t===1?{start:r?i:a,end:r?i+l:a+o}:{start:r?i+l:a+o,end:r?i:a}}function Tc(e,t,n,r,i){if(e*t<e*r||e*t>e*i)return!1;var a=n();return e*(t-e*a/2-r)>=0&&e*(t+e*a/2-i)<=0}function LG(e,t){return z3(e,t+1)}function FG(e,t,n,r,i){for(var a=(r||[]).slice(),l=t.start,o=t.end,s=0,u=1,f=l,d=function(){var b=r==null?void 0:r[s];if(b===void 0)return{v:z3(r,u)};var v=s,w,y=function(){return w===void 0&&(w=n(b,v)),w},m=b.coordinate,g=s===0||Tc(e,m,y,f,o);g||(s=0,f=l,u+=1),g&&(f=m+e*(y()/2+i),s+=u)},p;u<=a.length;)if(p=d(),p)return p.v;return[]}function ao(e){"@babel/helpers - typeof";return ao=typeof Symbol=="function"&&typeof Symbol.iterator=="symbol"?function(t){return typeof t}:function(t){return t&&typeof Symbol=="function"&&t.constructor===Symbol&&t!==Symbol.prototype?"symbol":typeof t},ao(e)}function Q5(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter(function(i){return Object.getOwnPropertyDescriptor(e,i).enumerable})),n.push.apply(n,r)}return n}function dt(e){for(var t=1;t<arguments.length;t++){var n=arguments[t]!=null?arguments[t]:{};t%2?Q5(Object(n),!0).forEach(function(r){RG(e,r,n[r])}):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):Q5(Object(n)).forEach(function(r){Object.defineProperty(e,r,Object.getOwnPropertyDescriptor(n,r))})}return e}function RG(e,t,n){return t=BG(t),t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function BG(e){var t=WG(e,"string");return ao(t)=="symbol"?t:t+""}function WG(e,t){if(ao(e)!="object"||!e)return e;var n=e[Symbol.toPrimitive];if(n!==void 0){var r=n.call(e,t);if(ao(r)!="object")return r;throw new TypeError("@@toPrimitive must return a primitive value.")}return(t==="string"?String:Number)(e)}function UG(e,t,n,r,i){for(var a=(r||[]).slice(),l=a.length,o=t.start,s=t.end,u=function(p){var h=a[p],b,v=function(){return b===void 0&&(b=n(h,p)),b};if(p===l-1){var w=e*(h.coordinate+e*v()/2-s);a[p]=h=dt(dt({},h),{},{tickCoord:w>0?h.coordinate-w*e:h.coordinate})}else a[p]=h=dt(dt({},h),{},{tickCoord:h.coordinate});var y=Tc(e,h.tickCoord,v,o,s);y&&(s=h.tickCoord-e*(v()/2+i),a[p]=dt(dt({},h),{},{isShow:!0}))},f=l-1;f>=0;f--)u(f);return a}function HG(e,t,n,r,i,a){var l=(r||[]).slice(),o=l.length,s=t.start,u=t.end;if(a){var f=r[o-1],d=n(f,o-1),p=e*(f.coordinate+e*d/2-u);l[o-1]=f=dt(dt({},f),{},{tickCoord:p>0?f.coordinate-p*e:f.coordinate});var h=Tc(e,f.tickCoord,function(){return d},s,u);h&&(u=f.tickCoord-e*(d/2+i),l[o-1]=dt(dt({},f),{},{isShow:!0}))}for(var b=a?o-1:o,v=function(m){var g=l[m],S,x=function(){return S===void 0&&(S=n(g,m)),S};if(m===0){var k=e*(g.coordinate-e*x()/2-s);l[m]=g=dt(dt({},g),{},{tickCoord:k<0?g.coordinate-k*e:g.coordinate})}else l[m]=g=dt(dt({},g),{},{tickCoord:g.coordinate});var _=Tc(e,g.tickCoord,x,s,u);_&&(s=g.tickCoord+e*(x()/2+i),l[m]=dt(dt({},g),{},{isShow:!0}))},w=0;w<b;w++)v(w);return l}function ch(e,t,n){var r=e.tick,i=e.ticks,a=e.viewBox,l=e.minTickGap,o=e.orientation,s=e.interval,u=e.tickFormatter,f=e.unit,d=e.angle;if(!i||!i.length||!r)return[];if(G(s)||xo.isSsr)return LG(i,typeof s=="number"&&G(s)?s:0);var p=[],h=o==="top"||o==="bottom"?"width":"height",b=f&&h==="width"?ll(f,{fontSize:t,letterSpacing:n}):{width:0,height:0},v=function(g,S){var x=re(u)?u(g.value,S):g.value;return h==="width"?IG(ll(x,{fontSize:t,letterSpacing:n}),b,d):ll(x,{fontSize:t,letterSpacing:n})[h]},w=i.length>=2?ln(i[1].coordinate-i[0].coordinate):1,y=DG(a,w,h);return s==="equidistantPreserveStart"?FG(w,y,v,i,l):(s==="preserveStart"||s==="preserveStartEnd"?p=HG(w,y,v,i,l,s==="preserveStartEnd"):p=UG(w,y,v,i,l),p.filter(function(m){return m.isShow}))}var GG=["viewBox"],VG=["viewBox"],XG=["ticks"];function sa(e){"@babel/helpers - typeof";return sa=typeof Symbol=="function"&&typeof Symbol.iterator=="symbol"?function(t){return typeof t}:function(t){return t&&typeof Symbol=="function"&&t.constructor===Symbol&&t!==Symbol.prototype?"symbol":typeof t},sa(e)}function Ai(){return Ai=Object.assign?Object.assign.bind():function(e){for(var t=1;t<arguments.length;t++){var n=arguments[t];for(var r in n)Object.prototype.hasOwnProperty.call(n,r)&&(e[r]=n[r])}return e},Ai.apply(this,arguments)}function J5(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter(function(i){return Object.getOwnPropertyDescriptor(e,i).enumerable})),n.push.apply(n,r)}return n}function Ve(e){for(var t=1;t<arguments.length;t++){var n=arguments[t]!=null?arguments[t]:{};t%2?J5(Object(n),!0).forEach(function(r){uh(e,r,n[r])}):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):J5(Object(n)).forEach(function(r){Object.defineProperty(e,r,Object.getOwnPropertyDescriptor(n,r))})}return e}function Wd(e,t){if(e==null)return{};var n=qG(e,t),r,i;if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);for(i=0;i<a.length;i++)r=a[i],!(t.indexOf(r)>=0)&&Object.prototype.propertyIsEnumerable.call(e,r)&&(n[r]=e[r])}return n}function qG(e,t){if(e==null)return{};var n={};for(var r in e)if(Object.prototype.hasOwnProperty.call(e,r)){if(t.indexOf(r)>=0)continue;n[r]=e[r]}return n}function KG(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}function ey(e,t){for(var n=0;n<t.length;n++){var r=t[n];r.enumerable=r.enumerable||!1,r.configurable=!0,"value"in r&&(r.writable=!0),Object.defineProperty(e,D3(r.key),r)}}function YG(e,t,n){return t&&ey(e.prototype,t),n&&ey(e,n),Object.defineProperty(e,"prototype",{writable:!1}),e}function ZG(e,t,n){return t=$c(t),QG(e,I3()?Reflect.construct(t,n||[],$c(e).constructor):t.apply(e,n))}function QG(e,t){if(t&&(sa(t)==="object"||typeof t=="function"))return t;if(t!==void 0)throw new TypeError("Derived constructors may only return object or undefined");return JG(e)}function JG(e){if(e===void 0)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return e}function I3(){try{var e=!Boolean.prototype.valueOf.call(Reflect.construct(Boolean,[],function(){}))}catch{}return(I3=function(){return!!e})()}function $c(e){return $c=Object.setPrototypeOf?Object.getPrototypeOf.bind():function(n){return n.__proto__||Object.getPrototypeOf(n)},$c(e)}function eV(e,t){if(typeof t!="function"&&t!==null)throw new TypeError("Super expression must either be null or a function");e.prototype=Object.create(t&&t.prototype,{constructor:{value:e,writable:!0,configurable:!0}}),Object.defineProperty(e,"prototype",{writable:!1}),t&&Q1(e,t)}function Q1(e,t){return Q1=Object.setPrototypeOf?Object.setPrototypeOf.bind():function(r,i){return r.__proto__=i,r},Q1(e,t)}function uh(e,t,n){return t=D3(t),t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function D3(e){var t=tV(e,"string");return sa(t)=="symbol"?t:t+""}function tV(e,t){if(sa(e)!="object"||!e)return e;var n=e[Symbol.toPrimitive];if(n!==void 0){var r=n.call(e,t);if(sa(r)!="object")return r;throw new TypeError("@@toPrimitive must return a primitive value.")}return String(e)}var Pa=function(e){function t(n){var r;return KG(this,t),r=ZG(this,t,[n]),r.state={fontSize:"",letterSpacing:""},r}return eV(t,e),YG(t,[{key:"shouldComponentUpdate",value:function(r,i){var a=r.viewBox,l=Wd(r,GG),o=this.props,s=o.viewBox,u=Wd(o,VG);return!Ii(a,s)||!Ii(l,u)||!Ii(i,this.state)}},{key:"componentDidMount",value:function(){var r=this.layerReference;if(r){var i=r.getElementsByClassName("recharts-cartesian-axis-tick-value")[0];i&&this.setState({fontSize:window.getComputedStyle(i).fontSize,letterSpacing:window.getComputedStyle(i).letterSpacing})}}},{key:"getTickLineCoord",value:function(r){var i=this.props,a=i.x,l=i.y,o=i.width,s=i.height,u=i.orientation,f=i.tickSize,d=i.mirror,p=i.tickMargin,h,b,v,w,y,m,g=d?-1:1,S=r.tickSize||f,x=G(r.tickCoord)?r.tickCoord:r.coordinate;switch(u){case"top":h=b=r.coordinate,w=l+ +!d*s,v=w-g*S,m=v-g*p,y=x;break;case"left":v=w=r.coordinate,b=a+ +!d*o,h=b-g*S,y=h-g*p,m=x;break;case"right":v=w=r.coordinate,b=a+ +d*o,h=b+g*S,y=h+g*p,m=x;break;default:h=b=r.coordinate,w=l+ +d*s,v=w+g*S,m=v+g*p,y=x;break}return{line:{x1:h,y1:v,x2:b,y2:w},tick:{x:y,y:m}}}},{key:"getTickTextAnchor",value:function(){var r=this.props,i=r.orientation,a=r.mirror,l;switch(i){case"left":l=a?"start":"end";break;case"right":l=a?"end":"start";break;default:l="middle";break}return l}},{key:"getTickVerticalAnchor",value:function(){var r=this.props,i=r.orientation,a=r.mirror,l="end";switch(i){case"left":case"right":l="middle";break;case"top":l=a?"start":"end";break;default:l=a?"end":"start";break}return l}},{key:"renderAxisLine",value:function(){var r=this.props,i=r.x,a=r.y,l=r.width,o=r.height,s=r.orientation,u=r.mirror,f=r.axisLine,d=Ve(Ve(Ve({},ue(this.props,!1)),ue(f,!1)),{},{fill:"none"});if(s==="top"||s==="bottom"){var p=+(s==="top"&&!u||s==="bottom"&&u);d=Ve(Ve({},d),{},{x1:i,y1:a+p*o,x2:i+l,y2:a+p*o})}else{var h=+(s==="left"&&!u||s==="right"&&u);d=Ve(Ve({},d),{},{x1:i+h*l,y1:a,x2:i+h*l,y2:a+o})}return z.createElement("line",Ai({},d,{className:de("recharts-cartesian-axis-line",Gt(f,"className"))}))}},{key:"renderTicks",value:function(r,i,a){var l=this,o=this.props,s=o.tickLine,u=o.stroke,f=o.tick,d=o.tickFormatter,p=o.unit,h=ch(Ve(Ve({},this.props),{},{ticks:r}),i,a),b=this.getTickTextAnchor(),v=this.getTickVerticalAnchor(),w=ue(this.props,!1),y=ue(f,!1),m=Ve(Ve({},w),{},{fill:"none"},ue(s,!1)),g=h.map(function(S,x){var k=l.getTickLineCoord(S),_=k.line,j=k.tick,O=Ve(Ve(Ve(Ve({textAnchor:b,verticalAnchor:v},w),{},{stroke:"none",fill:u},y),j),{},{index:x,payload:S,visibleTicksCount:h.length,tickFormatter:d});return z.createElement(et,Ai({className:"recharts-cartesian-axis-tick",key:"tick-".concat(S.value,"-").concat(S.coordinate,"-").concat(S.tickCoord)},Ws(l.props,S,x)),s&&z.createElement("line",Ai({},m,_,{className:de("recharts-cartesian-axis-tick-line",Gt(s,"className"))})),f&&t.renderTickItem(f,O,"".concat(re(d)?d(S.value,x):S.value).concat(p||"")))});return z.createElement("g",{className:"recharts-cartesian-axis-ticks"},g)}},{key:"render",value:function(){var r=this,i=this.props,a=i.axisLine,l=i.width,o=i.height,s=i.ticksGenerator,u=i.className,f=i.hide;if(f)return null;var d=this.props,p=d.ticks,h=Wd(d,XG),b=p;return re(s)&&(b=p&&p.length>0?s(this.props):s(h)),l<=0||o<=0||!b||!b.length?null:z.createElement(et,{className:de("recharts-cartesian-axis",u),ref:function(w){r.layerReference=w}},a&&this.renderAxisLine(),this.renderTicks(b,this.state.fontSize,this.state.letterSpacing),pt.renderCallByParent(this.props))}}],[{key:"renderTickItem",value:function(r,i,a){var l,o=de(i.className,"recharts-cartesian-axis-tick-value");return z.isValidElement(r)?l=z.cloneElement(r,Ve(Ve({},i),{},{className:o})):re(r)?l=r(Ve(Ve({},i),{},{className:o})):l=z.createElement(nc,Ai({},i,{className:"recharts-cartesian-axis-tick-value"}),a),l}}])}(N.Component);uh(Pa,"displayName","CartesianAxis");uh(Pa,"defaultProps",{x:0,y:0,width:0,height:0,viewBox:{x:0,y:0,width:0,height:0},orientation:"bottom",ticks:[],stroke:"#666",tickLine:!0,axisLine:!0,tick:!0,mirror:!1,minTickGap:5,tickSize:6,tickMargin:2,interval:"preserveEnd"});var nV=["x1","y1","x2","y2","key"],rV=["offset"];function ni(e){"@babel/helpers - typeof";return ni=typeof Symbol=="function"&&typeof Symbol.iterator=="symbol"?function(t){return typeof t}:function(t){return t&&typeof Symbol=="function"&&t.constructor===Symbol&&t!==Symbol.prototype?"symbol":typeof t},ni(e)}function ty(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter(function(i){return Object.getOwnPropertyDescriptor(e,i).enumerable})),n.push.apply(n,r)}return n}function ht(e){for(var t=1;t<arguments.length;t++){var n=arguments[t]!=null?arguments[t]:{};t%2?ty(Object(n),!0).forEach(function(r){iV(e,r,n[r])}):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):ty(Object(n)).forEach(function(r){Object.defineProperty(e,r,Object.getOwnPropertyDescriptor(n,r))})}return e}function iV(e,t,n){return t=aV(t),t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function aV(e){var t=lV(e,"string");return ni(t)=="symbol"?t:t+""}function lV(e,t){if(ni(e)!="object"||!e)return e;var n=e[Symbol.toPrimitive];if(n!==void 0){var r=n.call(e,t);if(ni(r)!="object")return r;throw new TypeError("@@toPrimitive must return a primitive value.")}return(t==="string"?String:Number)(e)}function Br(){return Br=Object.assign?Object.assign.bind():function(e){for(var t=1;t<arguments.length;t++){var n=arguments[t];for(var r in n)Object.prototype.hasOwnProperty.call(n,r)&&(e[r]=n[r])}return e},Br.apply(this,arguments)}function ny(e,t){if(e==null)return{};var n=oV(e,t),r,i;if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);for(i=0;i<a.length;i++)r=a[i],!(t.indexOf(r)>=0)&&Object.prototype.propertyIsEnumerable.call(e,r)&&(n[r]=e[r])}return n}function oV(e,t){if(e==null)return{};var n={};for(var r in e)if(Object.prototype.hasOwnProperty.call(e,r)){if(t.indexOf(r)>=0)continue;n[r]=e[r]}return n}var sV=function(t){var n=t.fill;if(!n||n==="none")return null;var r=t.fillOpacity,i=t.x,a=t.y,l=t.width,o=t.height,s=t.ry;return z.createElement("rect",{x:i,y:a,ry:s,width:l,height:o,stroke:"none",fill:n,fillOpacity:r,className:"recharts-cartesian-grid-bg"})};function L3(e,t){var n;if(z.isValidElement(e))n=z.cloneElement(e,t);else if(re(e))n=e(t);else{var r=t.x1,i=t.y1,a=t.x2,l=t.y2,o=t.key,s=ny(t,nV),u=ue(s,!1);u.offset;var f=ny(u,rV);n=z.createElement("line",Br({},f,{x1:r,y1:i,x2:a,y2:l,fill:"none",key:o}))}return n}function cV(e){var t=e.x,n=e.width,r=e.horizontal,i=r===void 0?!0:r,a=e.horizontalPoints;if(!i||!a||!a.length)return null;var l=a.map(function(o,s){var u=ht(ht({},e),{},{x1:t,y1:o,x2:t+n,y2:o,key:"line-".concat(s),index:s});return L3(i,u)});return z.createElement("g",{className:"recharts-cartesian-grid-horizontal"},l)}function uV(e){var t=e.y,n=e.height,r=e.vertical,i=r===void 0?!0:r,a=e.verticalPoints;if(!i||!a||!a.length)return null;var l=a.map(function(o,s){var u=ht(ht({},e),{},{x1:o,y1:t,x2:o,y2:t+n,key:"line-".concat(s),index:s});return L3(i,u)});return z.createElement("g",{className:"recharts-cartesian-grid-vertical"},l)}function dV(e){var t=e.horizontalFill,n=e.fillOpacity,r=e.x,i=e.y,a=e.width,l=e.height,o=e.horizontalPoints,s=e.horizontal,u=s===void 0?!0:s;if(!u||!t||!t.length)return null;var f=o.map(function(p){return Math.round(p+i-i)}).sort(function(p,h){return p-h});i!==f[0]&&f.unshift(0);var d=f.map(function(p,h){var b=!f[h+1],v=b?i+l-p:f[h+1]-p;if(v<=0)return null;var w=h%t.length;return z.createElement("rect",{key:"react-".concat(h),y:p,x:r,height:v,width:a,stroke:"none",fill:t[w],fillOpacity:n,className:"recharts-cartesian-grid-bg"})});return z.createElement("g",{className:"recharts-cartesian-gridstripes-horizontal"},d)}function fV(e){var t=e.vertical,n=t===void 0?!0:t,r=e.verticalFill,i=e.fillOpacity,a=e.x,l=e.y,o=e.width,s=e.height,u=e.verticalPoints;if(!n||!r||!r.length)return null;var f=u.map(function(p){return Math.round(p+a-a)}).sort(function(p,h){return p-h});a!==f[0]&&f.unshift(0);var d=f.map(function(p,h){var b=!f[h+1],v=b?a+o-p:f[h+1]-p;if(v<=0)return null;var w=h%r.length;return z.createElement("rect",{key:"react-".concat(h),x:p,y:l,width:v,height:s,stroke:"none",fill:r[w],fillOpacity:i,className:"recharts-cartesian-grid-bg"})});return z.createElement("g",{className:"recharts-cartesian-gridstripes-vertical"},d)}var pV=function(t,n){var r=t.xAxis,i=t.width,a=t.height,l=t.offset;return Xg(ch(ht(ht(ht({},Pa.defaultProps),r),{},{ticks:Mn(r,!0),viewBox:{x:0,y:0,width:i,height:a}})),l.left,l.left+l.width,n)},hV=function(t,n){var r=t.yAxis,i=t.width,a=t.height,l=t.offset;return Xg(ch(ht(ht(ht({},Pa.defaultProps),r),{},{ticks:Mn(r,!0),viewBox:{x:0,y:0,width:i,height:a}})),l.top,l.top+l.height,n)},hi={horizontal:!0,vertical:!0,stroke:"#ccc",fill:"none",verticalFill:[],horizontalFill:[]};function J1(e){var t,n,r,i,a,l,o=ah(),s=lh(),u=tG(),f=ht(ht({},e),{},{stroke:(t=e.stroke)!==null&&t!==void 0?t:hi.stroke,fill:(n=e.fill)!==null&&n!==void 0?n:hi.fill,horizontal:(r=e.horizontal)!==null&&r!==void 0?r:hi.horizontal,horizontalFill:(i=e.horizontalFill)!==null&&i!==void 0?i:hi.horizontalFill,vertical:(a=e.vertical)!==null&&a!==void 0?a:hi.vertical,verticalFill:(l=e.verticalFill)!==null&&l!==void 0?l:hi.verticalFill,x:G(e.x)?e.x:u.left,y:G(e.y)?e.y:u.top,width:G(e.width)?e.width:u.width,height:G(e.height)?e.height:u.height}),d=f.x,p=f.y,h=f.width,b=f.height,v=f.syncWithTicks,w=f.horizontalValues,y=f.verticalValues,m=QH(),g=JH();if(!G(h)||h<=0||!G(b)||b<=0||!G(d)||d!==+d||!G(p)||p!==+p)return null;var S=f.verticalCoordinatesGenerator||pV,x=f.horizontalCoordinatesGenerator||hV,k=f.horizontalPoints,_=f.verticalPoints;if((!k||!k.length)&&re(x)){var j=w&&w.length,O=x({yAxis:g?ht(ht({},g),{},{ticks:j?w:g.ticks}):void 0,width:o,height:s,offset:u},j?!0:v);zn(Array.isArray(O),"horizontalCoordinatesGenerator should return Array but instead it returned [".concat(ni(O),"]")),Array.isArray(O)&&(k=O)}if((!_||!_.length)&&re(S)){var M=y&&y.length,E=S({xAxis:m?ht(ht({},m),{},{ticks:M?y:m.ticks}):void 0,width:o,height:s,offset:u},M?!0:v);zn(Array.isArray(E),"verticalCoordinatesGenerator should return Array but instead it returned [".concat(ni(E),"]")),Array.isArray(E)&&(_=E)}return z.createElement("g",{className:"recharts-cartesian-grid"},z.createElement(sV,{fill:f.fill,fillOpacity:f.fillOpacity,x:f.x,y:f.y,width:f.width,height:f.height,ry:f.ry}),z.createElement(cV,Br({},f,{offset:u,horizontalPoints:k,xAxis:m,yAxis:g})),z.createElement(uV,Br({},f,{offset:u,verticalPoints:_,xAxis:m,yAxis:g})),z.createElement(dV,Br({},f,{horizontalPoints:k})),z.createElement(fV,Br({},f,{verticalPoints:_})))}J1.displayName="CartesianGrid";function ca(e){"@babel/helpers - typeof";return ca=typeof Symbol=="function"&&typeof Symbol.iterator=="symbol"?function(t){return typeof t}:function(t){return t&&typeof Symbol=="function"&&t.constructor===Symbol&&t!==Symbol.prototype?"symbol":typeof t},ca(e)}function mV(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}function yV(e,t){for(var n=0;n<t.length;n++){var r=t[n];r.enumerable=r.enumerable||!1,r.configurable=!0,"value"in r&&(r.writable=!0),Object.defineProperty(e,B3(r.key),r)}}function vV(e,t,n){return t&&yV(e.prototype,t),Object.defineProperty(e,"prototype",{writable:!1}),e}function gV(e,t,n){return t=zc(t),xV(e,F3()?Reflect.construct(t,n||[],zc(e).constructor):t.apply(e,n))}function xV(e,t){if(t&&(ca(t)==="object"||typeof t=="function"))return t;if(t!==void 0)throw new TypeError("Derived constructors may only return object or undefined");return bV(e)}function bV(e){if(e===void 0)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return e}function F3(){try{var e=!Boolean.prototype.valueOf.call(Reflect.construct(Boolean,[],function(){}))}catch{}return(F3=function(){return!!e})()}function zc(e){return zc=Object.setPrototypeOf?Object.getPrototypeOf.bind():function(n){return n.__proto__||Object.getPrototypeOf(n)},zc(e)}function wV(e,t){if(typeof t!="function"&&t!==null)throw new TypeError("Super expression must either be null or a function");e.prototype=Object.create(t&&t.prototype,{constructor:{value:e,writable:!0,configurable:!0}}),Object.defineProperty(e,"prototype",{writable:!1}),t&&ep(e,t)}function ep(e,t){return ep=Object.setPrototypeOf?Object.setPrototypeOf.bind():function(r,i){return r.__proto__=i,r},ep(e,t)}function R3(e,t,n){return t=B3(t),t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function B3(e){var t=kV(e,"string");return ca(t)=="symbol"?t:t+""}function kV(e,t){if(ca(e)!="object"||!e)return e;var n=e[Symbol.toPrimitive];if(n!==void 0){var r=n.call(e,t);if(ca(r)!="object")return r;throw new TypeError("@@toPrimitive must return a primitive value.")}return String(e)}function tp(){return tp=Object.assign?Object.assign.bind():function(e){for(var t=1;t<arguments.length;t++){var n=arguments[t];for(var r in n)Object.prototype.hasOwnProperty.call(n,r)&&(e[r]=n[r])}return e},tp.apply(this,arguments)}function SV(e){var t=e.xAxisId,n=ah(),r=lh(),i=P3(t);return i==null?null:N.createElement(Pa,tp({},i,{className:de("recharts-".concat(i.axisType," ").concat(i.axisType),i.className),viewBox:{x:0,y:0,width:n,height:r},ticksGenerator:function(l){return Mn(l,!0)}}))}var lo=function(e){function t(){return mV(this,t),gV(this,t,arguments)}return wV(t,e),vV(t,[{key:"render",value:function(){return N.createElement(SV,this.props)}}])}(N.Component);R3(lo,"displayName","XAxis");R3(lo,"defaultProps",{allowDecimals:!0,hide:!1,orientation:"bottom",width:0,height:30,mirror:!1,xAxisId:0,tickCount:5,type:"category",padding:{left:0,right:0},allowDataOverflow:!1,scale:"auto",reversed:!1,allowDuplicatedCategory:!0});function ua(e){"@babel/helpers - typeof";return ua=typeof Symbol=="function"&&typeof Symbol.iterator=="symbol"?function(t){return typeof t}:function(t){return t&&typeof Symbol=="function"&&t.constructor===Symbol&&t!==Symbol.prototype?"symbol":typeof t},ua(e)}function _V(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}function jV(e,t){for(var n=0;n<t.length;n++){var r=t[n];r.enumerable=r.enumerable||!1,r.configurable=!0,"value"in r&&(r.writable=!0),Object.defineProperty(e,H3(r.key),r)}}function OV(e,t,n){return t&&jV(e.prototype,t),Object.defineProperty(e,"prototype",{writable:!1}),e}function PV(e,t,n){return t=Ic(t),AV(e,W3()?Reflect.construct(t,n||[],Ic(e).constructor):t.apply(e,n))}function AV(e,t){if(t&&(ua(t)==="object"||typeof t=="function"))return t;if(t!==void 0)throw new TypeError("Derived constructors may only return object or undefined");return NV(e)}function NV(e){if(e===void 0)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return e}function W3(){try{var e=!Boolean.prototype.valueOf.call(Reflect.construct(Boolean,[],function(){}))}catch{}return(W3=function(){return!!e})()}function Ic(e){return Ic=Object.setPrototypeOf?Object.getPrototypeOf.bind():function(n){return n.__proto__||Object.getPrototypeOf(n)},Ic(e)}function CV(e,t){if(typeof t!="function"&&t!==null)throw new TypeError("Super expression must either be null or a function");e.prototype=Object.create(t&&t.prototype,{constructor:{value:e,writable:!0,configurable:!0}}),Object.defineProperty(e,"prototype",{writable:!1}),t&&np(e,t)}function np(e,t){return np=Object.setPrototypeOf?Object.setPrototypeOf.bind():function(r,i){return r.__proto__=i,r},np(e,t)}function U3(e,t,n){return t=H3(t),t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function H3(e){var t=EV(e,"string");return ua(t)=="symbol"?t:t+""}function EV(e,t){if(ua(e)!="object"||!e)return e;var n=e[Symbol.toPrimitive];if(n!==void 0){var r=n.call(e,t);if(ua(r)!="object")return r;throw new TypeError("@@toPrimitive must return a primitive value.")}return String(e)}function rp(){return rp=Object.assign?Object.assign.bind():function(e){for(var t=1;t<arguments.length;t++){var n=arguments[t];for(var r in n)Object.prototype.hasOwnProperty.call(n,r)&&(e[r]=n[r])}return e},rp.apply(this,arguments)}var MV=function(t){var n=t.yAxisId,r=ah(),i=lh(),a=A3(n);return a==null?null:N.createElement(Pa,rp({},a,{className:de("recharts-".concat(a.axisType," ").concat(a.axisType),a.className),viewBox:{x:0,y:0,width:r,height:i},ticksGenerator:function(o){return Mn(o,!0)}}))},oo=function(e){function t(){return _V(this,t),PV(this,t,arguments)}return CV(t,e),OV(t,[{key:"render",value:function(){return N.createElement(MV,this.props)}}])}(N.Component);U3(oo,"displayName","YAxis");U3(oo,"defaultProps",{allowDuplicatedCategory:!0,allowDecimals:!0,hide:!1,orientation:"left",width:60,height:0,mirror:!1,yAxisId:0,tickCount:5,type:"number",padding:{top:0,bottom:0},allowDataOverflow:!1,scale:"auto",reversed:!1});function ry(e){return IV(e)||zV(e)||$V(e)||TV()}function TV(){throw new TypeError(`Invalid attempt to spread non-iterable instance.
In order to be iterable, non-array objects must have a [Symbol.iterator]() method.`)}function $V(e,t){if(e){if(typeof e=="string")return ip(e,t);var n=Object.prototype.toString.call(e).slice(8,-1);if(n==="Object"&&e.constructor&&(n=e.constructor.name),n==="Map"||n==="Set")return Array.from(e);if(n==="Arguments"||/^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n))return ip(e,t)}}function zV(e){if(typeof Symbol<"u"&&e[Symbol.iterator]!=null||e["@@iterator"]!=null)return Array.from(e)}function IV(e){if(Array.isArray(e))return ip(e)}function ip(e,t){(t==null||t>e.length)&&(t=e.length);for(var n=0,r=new Array(t);n<t;n++)r[n]=e[n];return r}var ap=function(t,n,r,i,a){var l=cn(t,sh),o=cn(t,Fu),s=[].concat(ry(l),ry(o)),u=cn(t,Bu),f="".concat(i,"Id"),d=i[0],p=n;if(s.length&&(p=s.reduce(function(v,w){if(w.props[f]===r&&wn(w.props,"extendDomain")&&G(w.props[d])){var y=w.props[d];return[Math.min(v[0],y),Math.max(v[1],y)]}return v},p)),u.length){var h="".concat(d,"1"),b="".concat(d,"2");p=u.reduce(function(v,w){if(w.props[f]===r&&wn(w.props,"extendDomain")&&G(w.props[h])&&G(w.props[b])){var y=w.props[h],m=w.props[b];return[Math.min(v[0],y,m),Math.max(v[1],y,m)]}return v},p)}return a&&a.length&&(p=a.reduce(function(v,w){return G(w)?[Math.min(v[0],w),Math.max(v[1],w)]:v},p)),p},G3={exports:{}};(function(e){var t=Object.prototype.hasOwnProperty,n="~";function r(){}Object.create&&(r.prototype=Object.create(null),new r().__proto__||(n=!1));function i(s,u,f){this.fn=s,this.context=u,this.once=f||!1}function a(s,u,f,d,p){if(typeof f!="function")throw new TypeError("The listener must be a function");var h=new i(f,d||s,p),b=n?n+u:u;return s._events[b]?s._events[b].fn?s._events[b]=[s._events[b],h]:s._events[b].push(h):(s._events[b]=h,s._eventsCount++),s}function l(s,u){--s._eventsCount===0?s._events=new r:delete s._events[u]}function o(){this._events=new r,this._eventsCount=0}o.prototype.eventNames=function(){var u=[],f,d;if(this._eventsCount===0)return u;for(d in f=this._events)t.call(f,d)&&u.push(n?d.slice(1):d);return Object.getOwnPropertySymbols?u.concat(Object.getOwnPropertySymbols(f)):u},o.prototype.listeners=function(u){var f=n?n+u:u,d=this._events[f];if(!d)return[];if(d.fn)return[d.fn];for(var p=0,h=d.length,b=new Array(h);p<h;p++)b[p]=d[p].fn;return b},o.prototype.listenerCount=function(u){var f=n?n+u:u,d=this._events[f];return d?d.fn?1:d.length:0},o.prototype.emit=function(u,f,d,p,h,b){var v=n?n+u:u;if(!this._events[v])return!1;var w=this._events[v],y=arguments.length,m,g;if(w.fn){switch(w.once&&this.removeListener(u,w.fn,void 0,!0),y){case 1:return w.fn.call(w.context),!0;case 2:return w.fn.call(w.context,f),!0;case 3:return w.fn.call(w.context,f,d),!0;case 4:return w.fn.call(w.context,f,d,p),!0;case 5:return w.fn.call(w.context,f,d,p,h),!0;case 6:return w.fn.call(w.context,f,d,p,h,b),!0}for(g=1,m=new Array(y-1);g<y;g++)m[g-1]=arguments[g];w.fn.apply(w.context,m)}else{var S=w.length,x;for(g=0;g<S;g++)switch(w[g].once&&this.removeListener(u,w[g].fn,void 0,!0),y){case 1:w[g].fn.call(w[g].context);break;case 2:w[g].fn.call(w[g].context,f);break;case 3:w[g].fn.call(w[g].context,f,d);break;case 4:w[g].fn.call(w[g].context,f,d,p);break;default:if(!m)for(x=1,m=new Array(y-1);x<y;x++)m[x-1]=arguments[x];w[g].fn.apply(w[g].context,m)}}return!0},o.prototype.on=function(u,f,d){return a(this,u,f,d,!1)},o.prototype.once=function(u,f,d){return a(this,u,f,d,!0)},o.prototype.removeListener=function(u,f,d,p){var h=n?n+u:u;if(!this._events[h])return this;if(!f)return l(this,h),this;var b=this._events[h];if(b.fn)b.fn===f&&(!p||b.once)&&(!d||b.context===d)&&l(this,h);else{for(var v=0,w=[],y=b.length;v<y;v++)(b[v].fn!==f||p&&!b[v].once||d&&b[v].context!==d)&&w.push(b[v]);w.length?this._events[h]=w.length===1?w[0]:w:l(this,h)}return this},o.prototype.removeAllListeners=function(u){var f;return u?(f=n?n+u:u,this._events[f]&&l(this,f)):(this._events=new r,this._eventsCount=0),this},o.prototype.off=o.prototype.removeListener,o.prototype.addListener=o.prototype.on,o.prefixed=n,o.EventEmitter=o,e.exports=o})(G3);var DV=G3.exports;const LV=ke(DV);var Ud=new LV,Hd="recharts.syncMouseEvents";function so(e){"@babel/helpers - typeof";return so=typeof Symbol=="function"&&typeof Symbol.iterator=="symbol"?function(t){return typeof t}:function(t){return t&&typeof Symbol=="function"&&t.constructor===Symbol&&t!==Symbol.prototype?"symbol":typeof t},so(e)}function FV(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}function RV(e,t){for(var n=0;n<t.length;n++){var r=t[n];r.enumerable=r.enumerable||!1,r.configurable=!0,"value"in r&&(r.writable=!0),Object.defineProperty(e,V3(r.key),r)}}function BV(e,t,n){return t&&RV(e.prototype,t),Object.defineProperty(e,"prototype",{writable:!1}),e}function Gd(e,t,n){return t=V3(t),t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function V3(e){var t=WV(e,"string");return so(t)=="symbol"?t:t+""}function WV(e,t){if(so(e)!="object"||!e)return e;var n=e[Symbol.toPrimitive];if(n!==void 0){var r=n.call(e,t);if(so(r)!="object")return r;throw new TypeError("@@toPrimitive must return a primitive value.")}return String(e)}var UV=function(){function e(){FV(this,e),Gd(this,"activeIndex",0),Gd(this,"coordinateList",[]),Gd(this,"layout","horizontal")}return BV(e,[{key:"setDetails",value:function(n){var r,i=n.coordinateList,a=i===void 0?null:i,l=n.container,o=l===void 0?null:l,s=n.layout,u=s===void 0?null:s,f=n.offset,d=f===void 0?null:f,p=n.mouseHandlerCallback,h=p===void 0?null:p;this.coordinateList=(r=a??this.coordinateList)!==null&&r!==void 0?r:[],this.container=o??this.container,this.layout=u??this.layout,this.offset=d??this.offset,this.mouseHandlerCallback=h??this.mouseHandlerCallback,this.activeIndex=Math.min(Math.max(this.activeIndex,0),this.coordinateList.length-1)}},{key:"focus",value:function(){this.spoofMouse()}},{key:"keyboardEvent",value:function(n){if(this.coordinateList.length!==0)switch(n.key){case"ArrowRight":{if(this.layout!=="horizontal")return;this.activeIndex=Math.min(this.activeIndex+1,this.coordinateList.length-1),this.spoofMouse();break}case"ArrowLeft":{if(this.layout!=="horizontal")return;this.activeIndex=Math.max(this.activeIndex-1,0),this.spoofMouse();break}}}},{key:"setIndex",value:function(n){this.activeIndex=n}},{key:"spoofMouse",value:function(){var n,r;if(this.layout==="horizontal"&&this.coordinateList.length!==0){var i=this.container.getBoundingClientRect(),a=i.x,l=i.y,o=i.height,s=this.coordinateList[this.activeIndex].coordinate,u=((n=window)===null||n===void 0?void 0:n.scrollX)||0,f=((r=window)===null||r===void 0?void 0:r.scrollY)||0,d=a+s+u,p=l+this.offset.top+o/2+f;this.mouseHandlerCallback({pageX:d,pageY:p})}}}])}();function HV(e,t,n){if(n==="number"&&t===!0&&Array.isArray(e)){var r=e==null?void 0:e[0],i=e==null?void 0:e[1];if(r&&i&&G(r)&&G(i))return!0}return!1}function GV(e,t,n,r){var i=r/2;return{stroke:"none",fill:"#ccc",x:e==="horizontal"?t.x-i:n.left+.5,y:e==="horizontal"?n.top+.5:t.y-i,width:e==="horizontal"?r:n.width-1,height:e==="horizontal"?n.height-1:r}}function X3(e){var t=e.cx,n=e.cy,r=e.radius,i=e.startAngle,a=e.endAngle,l=at(t,n,r,i),o=at(t,n,r,a);return{points:[l,o],cx:t,cy:n,radius:r,startAngle:i,endAngle:a}}function VV(e,t,n){var r,i,a,l;if(e==="horizontal")r=t.x,a=r,i=n.top,l=n.top+n.height;else if(e==="vertical")i=t.y,l=i,r=n.left,a=n.left+n.width;else if(t.cx!=null&&t.cy!=null)if(e==="centric"){var o=t.cx,s=t.cy,u=t.innerRadius,f=t.outerRadius,d=t.angle,p=at(o,s,u,d),h=at(o,s,f,d);r=p.x,i=p.y,a=h.x,l=h.y}else return X3(t);return[{x:r,y:i},{x:a,y:l}]}function co(e){"@babel/helpers - typeof";return co=typeof Symbol=="function"&&typeof Symbol.iterator=="symbol"?function(t){return typeof t}:function(t){return t&&typeof Symbol=="function"&&t.constructor===Symbol&&t!==Symbol.prototype?"symbol":typeof t},co(e)}function iy(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter(function(i){return Object.getOwnPropertyDescriptor(e,i).enumerable})),n.push.apply(n,r)}return n}function ns(e){for(var t=1;t<arguments.length;t++){var n=arguments[t]!=null?arguments[t]:{};t%2?iy(Object(n),!0).forEach(function(r){XV(e,r,n[r])}):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):iy(Object(n)).forEach(function(r){Object.defineProperty(e,r,Object.getOwnPropertyDescriptor(n,r))})}return e}function XV(e,t,n){return t=qV(t),t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function qV(e){var t=KV(e,"string");return co(t)=="symbol"?t:t+""}function KV(e,t){if(co(e)!="object"||!e)return e;var n=e[Symbol.toPrimitive];if(n!==void 0){var r=n.call(e,t);if(co(r)!="object")return r;throw new TypeError("@@toPrimitive must return a primitive value.")}return(t==="string"?String:Number)(e)}function YV(e){var t,n,r=e.element,i=e.tooltipEventType,a=e.isActive,l=e.activeCoordinate,o=e.activePayload,s=e.offset,u=e.activeTooltipIndex,f=e.tooltipAxisBandSize,d=e.layout,p=e.chartName,h=(t=r.props.cursor)!==null&&t!==void 0?t:(n=r.type.defaultProps)===null||n===void 0?void 0:n.cursor;if(!r||!h||!a||!l||p!=="ScatterChart"&&i!=="axis")return null;var b,v=t5;if(p==="ScatterChart")b=l,v=cW;else if(p==="BarChart")b=GV(d,l,s,f),v=th;else if(d==="radial"){var w=X3(l),y=w.cx,m=w.cy,g=w.radius,S=w.startAngle,x=w.endAngle;b={cx:y,cy:m,startAngle:S,endAngle:x,innerRadius:g,outerRadius:g},v=Qg}else b={points:VV(d,l,s)},v=t5;var k=ns(ns(ns(ns({stroke:"#ccc",pointerEvents:"none"},s),b),ue(h,!1)),{},{payload:o,payloadIndex:u,className:de("recharts-tooltip-cursor",h.className)});return N.isValidElement(h)?N.cloneElement(h,k):N.createElement(v,k)}var ZV=["item"],QV=["children","className","width","height","style","compact","title","desc"];function da(e){"@babel/helpers - typeof";return da=typeof Symbol=="function"&&typeof Symbol.iterator=="symbol"?function(t){return typeof t}:function(t){return t&&typeof Symbol=="function"&&t.constructor===Symbol&&t!==Symbol.prototype?"symbol":typeof t},da(e)}function Ni(){return Ni=Object.assign?Object.assign.bind():function(e){for(var t=1;t<arguments.length;t++){var n=arguments[t];for(var r in n)Object.prototype.hasOwnProperty.call(n,r)&&(e[r]=n[r])}return e},Ni.apply(this,arguments)}function ay(e,t){return tX(e)||eX(e,t)||K3(e,t)||JV()}function JV(){throw new TypeError(`Invalid attempt to destructure non-iterable instance.
In order to be iterable, non-array objects must have a [Symbol.iterator]() method.`)}function eX(e,t){var n=e==null?null:typeof Symbol<"u"&&e[Symbol.iterator]||e["@@iterator"];if(n!=null){var r,i,a,l,o=[],s=!0,u=!1;try{if(a=(n=n.call(e)).next,t!==0)for(;!(s=(r=a.call(n)).done)&&(o.push(r.value),o.length!==t);s=!0);}catch(f){u=!0,i=f}finally{try{if(!s&&n.return!=null&&(l=n.return(),Object(l)!==l))return}finally{if(u)throw i}}return o}}function tX(e){if(Array.isArray(e))return e}function ly(e,t){if(e==null)return{};var n=nX(e,t),r,i;if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);for(i=0;i<a.length;i++)r=a[i],!(t.indexOf(r)>=0)&&Object.prototype.propertyIsEnumerable.call(e,r)&&(n[r]=e[r])}return n}function nX(e,t){if(e==null)return{};var n={};for(var r in e)if(Object.prototype.hasOwnProperty.call(e,r)){if(t.indexOf(r)>=0)continue;n[r]=e[r]}return n}function rX(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}function iX(e,t){for(var n=0;n<t.length;n++){var r=t[n];r.enumerable=r.enumerable||!1,r.configurable=!0,"value"in r&&(r.writable=!0),Object.defineProperty(e,Y3(r.key),r)}}function aX(e,t,n){return t&&iX(e.prototype,t),Object.defineProperty(e,"prototype",{writable:!1}),e}function lX(e,t,n){return t=Dc(t),oX(e,q3()?Reflect.construct(t,n||[],Dc(e).constructor):t.apply(e,n))}function oX(e,t){if(t&&(da(t)==="object"||typeof t=="function"))return t;if(t!==void 0)throw new TypeError("Derived constructors may only return object or undefined");return sX(e)}function sX(e){if(e===void 0)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return e}function q3(){try{var e=!Boolean.prototype.valueOf.call(Reflect.construct(Boolean,[],function(){}))}catch{}return(q3=function(){return!!e})()}function Dc(e){return Dc=Object.setPrototypeOf?Object.getPrototypeOf.bind():function(n){return n.__proto__||Object.getPrototypeOf(n)},Dc(e)}function cX(e,t){if(typeof t!="function"&&t!==null)throw new TypeError("Super expression must either be null or a function");e.prototype=Object.create(t&&t.prototype,{constructor:{value:e,writable:!0,configurable:!0}}),Object.defineProperty(e,"prototype",{writable:!1}),t&&lp(e,t)}function lp(e,t){return lp=Object.setPrototypeOf?Object.setPrototypeOf.bind():function(r,i){return r.__proto__=i,r},lp(e,t)}function fa(e){return fX(e)||dX(e)||K3(e)||uX()}function uX(){throw new TypeError(`Invalid attempt to spread non-iterable instance.
In order to be iterable, non-array objects must have a [Symbol.iterator]() method.`)}function K3(e,t){if(e){if(typeof e=="string")return op(e,t);var n=Object.prototype.toString.call(e).slice(8,-1);if(n==="Object"&&e.constructor&&(n=e.constructor.name),n==="Map"||n==="Set")return Array.from(e);if(n==="Arguments"||/^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n))return op(e,t)}}function dX(e){if(typeof Symbol<"u"&&e[Symbol.iterator]!=null||e["@@iterator"]!=null)return Array.from(e)}function fX(e){if(Array.isArray(e))return op(e)}function op(e,t){(t==null||t>e.length)&&(t=e.length);for(var n=0,r=new Array(t);n<t;n++)r[n]=e[n];return r}function oy(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter(function(i){return Object.getOwnPropertyDescriptor(e,i).enumerable})),n.push.apply(n,r)}return n}function F(e){for(var t=1;t<arguments.length;t++){var n=arguments[t]!=null?arguments[t]:{};t%2?oy(Object(n),!0).forEach(function(r){Y(e,r,n[r])}):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):oy(Object(n)).forEach(function(r){Object.defineProperty(e,r,Object.getOwnPropertyDescriptor(n,r))})}return e}function Y(e,t,n){return t=Y3(t),t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function Y3(e){var t=pX(e,"string");return da(t)=="symbol"?t:t+""}function pX(e,t){if(da(e)!="object"||!e)return e;var n=e[Symbol.toPrimitive];if(n!==void 0){var r=n.call(e,t);if(da(r)!="object")return r;throw new TypeError("@@toPrimitive must return a primitive value.")}return(t==="string"?String:Number)(e)}var hX={xAxis:["bottom","top"],yAxis:["left","right"]},mX={width:"100%",height:"100%"},Z3={x:0,y:0};function rs(e){return e}var yX=function(t,n){return n==="horizontal"?t.x:n==="vertical"?t.y:n==="centric"?t.angle:t.radius},vX=function(t,n,r,i){var a=n.find(function(f){return f&&f.index===r});if(a){if(t==="horizontal")return{x:a.coordinate,y:i.y};if(t==="vertical")return{x:i.x,y:a.coordinate};if(t==="centric"){var l=a.coordinate,o=i.radius;return F(F(F({},i),at(i.cx,i.cy,o,l)),{},{angle:l,radius:o})}var s=a.coordinate,u=i.angle;return F(F(F({},i),at(i.cx,i.cy,s,u)),{},{angle:u,radius:s})}return Z3},Wu=function(t,n){var r=n.graphicalItems,i=n.dataStartIndex,a=n.dataEndIndex,l=(r??[]).reduce(function(o,s){var u=s.props.data;return u&&u.length?[].concat(fa(o),fa(u)):o},[]);return l.length>0?l:t&&t.length&&G(i)&&G(a)?t.slice(i,a+1):[]};function Q3(e){return e==="number"?[0,"auto"]:void 0}var sp=function(t,n,r,i){var a=t.graphicalItems,l=t.tooltipAxis,o=Wu(n,t);return r<0||!a||!a.length||r>=o.length?null:a.reduce(function(s,u){var f,d=(f=u.props.data)!==null&&f!==void 0?f:n;d&&t.dataStartIndex+t.dataEndIndex!==0&&t.dataEndIndex-t.dataStartIndex>=r&&(d=d.slice(t.dataStartIndex,t.dataEndIndex+1));var p;if(l.dataKey&&!l.allowDuplicatedCategory){var h=d===void 0?o:d;p=Rf(h,l.dataKey,i)}else p=d&&d[r]||o[r];return p?[].concat(fa(s),[Kg(u,p)]):s},[])},sy=function(t,n,r,i){var a=i||{x:t.chartX,y:t.chartY},l=yX(a,r),o=t.orderedTooltipTicks,s=t.tooltipAxis,u=t.tooltipTicks,f=HL(l,o,u,s);if(f>=0&&u){var d=u[f]&&u[f].value,p=sp(t,n,f,d),h=vX(r,o,f,a);return{activeTooltipIndex:f,activeLabel:d,activePayload:p,activeCoordinate:h}}return null},gX=function(t,n){var r=n.axes,i=n.graphicalItems,a=n.axisType,l=n.axisIdKey,o=n.stackGroups,s=n.dataStartIndex,u=n.dataEndIndex,f=t.layout,d=t.children,p=t.stackOffset,h=Vg(f,a);return r.reduce(function(b,v){var w,y=v.type.defaultProps!==void 0?F(F({},v.type.defaultProps),v.props):v.props,m=y.type,g=y.dataKey,S=y.allowDataOverflow,x=y.allowDuplicatedCategory,k=y.scale,_=y.ticks,j=y.includeHidden,O=y[l];if(b[O])return b;var M=Wu(t.data,{graphicalItems:i.filter(function(B){var K,te=l in B.props?B.props[l]:(K=B.type.defaultProps)===null||K===void 0?void 0:K[l];return te===O}),dataStartIndex:s,dataEndIndex:u}),E=M.length,A,P,$;HV(y.domain,S,m)&&(A=P1(y.domain,null,S),h&&(m==="number"||k!=="auto")&&($=sl(M,g,"category")));var C=Q3(m);if(!A||A.length===0){var I,L=(I=y.domain)!==null&&I!==void 0?I:C;if(g){if(A=sl(M,g,m),m==="category"&&h){var T=MS(A);x&&T?(P=A,A=jc(0,E)):x||(A=W2(L,A,v).reduce(function(B,K){return B.indexOf(K)>=0?B:[].concat(fa(B),[K])},[]))}else if(m==="category")x?A=A.filter(function(B){return B!==""&&!fe(B)}):A=W2(L,A,v).reduce(function(B,K){return B.indexOf(K)>=0||K===""||fe(K)?B:[].concat(fa(B),[K])},[]);else if(m==="number"){var D=KL(M,i.filter(function(B){var K,te,pe=l in B.props?B.props[l]:(K=B.type.defaultProps)===null||K===void 0?void 0:K[l],xe="hide"in B.props?B.props.hide:(te=B.type.defaultProps)===null||te===void 0?void 0:te.hide;return pe===O&&(j||!xe)}),g,a,f);D&&(A=D)}h&&(m==="number"||k!=="auto")&&($=sl(M,g,"category"))}else h?A=jc(0,E):o&&o[O]&&o[O].hasStack&&m==="number"?A=p==="expand"?[0,1]:qg(o[O].stackGroups,s,u):A=Gg(M,i.filter(function(B){var K=l in B.props?B.props[l]:B.type.defaultProps[l],te="hide"in B.props?B.props.hide:B.type.defaultProps.hide;return K===O&&(j||!te)}),m,f,!0);if(m==="number")A=ap(d,A,O,a,_),L&&(A=P1(L,A,S));else if(m==="category"&&L){var R=L,H=A.every(function(B){return R.indexOf(B)>=0});H&&(A=R)}}return F(F({},b),{},Y({},O,F(F({},y),{},{axisType:a,domain:A,categoricalDomain:$,duplicateDomain:P,originalDomain:(w=y.domain)!==null&&w!==void 0?w:C,isCategorical:h,layout:f})))},{})},xX=function(t,n){var r=n.graphicalItems,i=n.Axis,a=n.axisType,l=n.axisIdKey,o=n.stackGroups,s=n.dataStartIndex,u=n.dataEndIndex,f=t.layout,d=t.children,p=Wu(t.data,{graphicalItems:r,dataStartIndex:s,dataEndIndex:u}),h=p.length,b=Vg(f,a),v=-1;return r.reduce(function(w,y){var m=y.type.defaultProps!==void 0?F(F({},y.type.defaultProps),y.props):y.props,g=m[l],S=Q3("number");if(!w[g]){v++;var x;return b?x=jc(0,h):o&&o[g]&&o[g].hasStack?(x=qg(o[g].stackGroups,s,u),x=ap(d,x,g,a)):(x=P1(S,Gg(p,r.filter(function(k){var _,j,O=l in k.props?k.props[l]:(_=k.type.defaultProps)===null||_===void 0?void 0:_[l],M="hide"in k.props?k.props.hide:(j=k.type.defaultProps)===null||j===void 0?void 0:j.hide;return O===g&&!M}),"number",f),i.defaultProps.allowDataOverflow),x=ap(d,x,g,a)),F(F({},w),{},Y({},g,F(F({axisType:a},i.defaultProps),{},{hide:!0,orientation:Gt(hX,"".concat(a,".").concat(v%2),null),domain:x,originalDomain:S,isCategorical:b,layout:f})))}return w},{})},bX=function(t,n){var r=n.axisType,i=r===void 0?"xAxis":r,a=n.AxisComp,l=n.graphicalItems,o=n.stackGroups,s=n.dataStartIndex,u=n.dataEndIndex,f=t.children,d="".concat(i,"Id"),p=cn(f,a),h={};return p&&p.length?h=gX(t,{axes:p,graphicalItems:l,axisType:i,axisIdKey:d,stackGroups:o,dataStartIndex:s,dataEndIndex:u}):l&&l.length&&(h=xX(t,{Axis:a,graphicalItems:l,axisType:i,axisIdKey:d,stackGroups:o,dataStartIndex:s,dataEndIndex:u})),h},wX=function(t){var n=nr(t),r=Mn(n,!1,!0);return{tooltipTicks:r,orderedTooltipTicks:P0(r,function(i){return i.coordinate}),tooltipAxis:n,tooltipAxisBandSize:yc(n,r)}},cy=function(t){var n=t.children,r=t.defaultShowTooltip,i=Ct(n,ra),a=0,l=0;return t.data&&t.data.length!==0&&(l=t.data.length-1),i&&i.props&&(i.props.startIndex>=0&&(a=i.props.startIndex),i.props.endIndex>=0&&(l=i.props.endIndex)),{chartX:0,chartY:0,dataStartIndex:a,dataEndIndex:l,activeTooltipIndex:-1,isTooltipActive:!!r}},kX=function(t){return!t||!t.length?!1:t.some(function(n){var r=$n(n&&n.type);return r&&r.indexOf("Bar")>=0})},uy=function(t){return t==="horizontal"?{numericAxisName:"yAxis",cateAxisName:"xAxis"}:t==="vertical"?{numericAxisName:"xAxis",cateAxisName:"yAxis"}:t==="centric"?{numericAxisName:"radiusAxis",cateAxisName:"angleAxis"}:{numericAxisName:"angleAxis",cateAxisName:"radiusAxis"}},SX=function(t,n){var r=t.props,i=t.graphicalItems,a=t.xAxisMap,l=a===void 0?{}:a,o=t.yAxisMap,s=o===void 0?{}:o,u=r.width,f=r.height,d=r.children,p=r.margin||{},h=Ct(d,ra),b=Ct(d,hr),v=Object.keys(s).reduce(function(x,k){var _=s[k],j=_.orientation;return!_.mirror&&!_.hide?F(F({},x),{},Y({},j,x[j]+_.width)):x},{left:p.left||0,right:p.right||0}),w=Object.keys(l).reduce(function(x,k){var _=l[k],j=_.orientation;return!_.mirror&&!_.hide?F(F({},x),{},Y({},j,Gt(x,"".concat(j))+_.height)):x},{top:p.top||0,bottom:p.bottom||0}),y=F(F({},w),v),m=y.bottom;h&&(y.bottom+=h.props.height||ra.defaultProps.height),b&&n&&(y=XL(y,i,r,n));var g=u-y.left-y.right,S=f-y.top-y.bottom;return F(F({brushBottom:m},y),{},{width:Math.max(g,0),height:Math.max(S,0)})},_X=function(t,n){if(n==="xAxis")return t[n].width;if(n==="yAxis")return t[n].height},jX=function(t){var n=t.chartName,r=t.GraphicalChild,i=t.defaultTooltipEventType,a=i===void 0?"axis":i,l=t.validateTooltipEventTypes,o=l===void 0?["axis"]:l,s=t.axisComponents,u=t.legendContent,f=t.formatAxisMap,d=t.defaultProps,p=function(y,m){var g=m.graphicalItems,S=m.stackGroups,x=m.offset,k=m.updateId,_=m.dataStartIndex,j=m.dataEndIndex,O=y.barSize,M=y.layout,E=y.barGap,A=y.barCategoryGap,P=y.maxBarSize,$=uy(M),C=$.numericAxisName,I=$.cateAxisName,L=kX(g),T=[];return g.forEach(function(D,R){var H=Wu(y.data,{graphicalItems:[D],dataStartIndex:_,dataEndIndex:j}),B=D.type.defaultProps!==void 0?F(F({},D.type.defaultProps),D.props):D.props,K=B.dataKey,te=B.maxBarSize,pe=B["".concat(C,"Id")],xe=B["".concat(I,"Id")],st={},He=s.reduce(function(Re,Ie){var be=m["".concat(Ie.axisType,"Map")],Pr=B["".concat(Ie.axisType,"Id")];be&&be[Pr]||Ie.axisType==="zAxis"||ti();var dh=be[Pr];return F(F({},Re),{},Y(Y({},Ie.axisType,dh),"".concat(Ie.axisType,"Ticks"),Mn(dh)))},st),V=He[I],Q=He["".concat(I,"Ticks")],ee=S&&S[pe]&&S[pe].hasStack&&oF(D,S[pe].stackGroups),W=$n(D.type).indexOf("Bar")>=0,Se=yc(V,Q),ie=[],oe=L&&GL({barSize:O,stackGroups:S,totalSize:_X(He,I)});if(W){var Me,Z,he=fe(te)?P:te,ne=(Me=(Z=yc(V,Q,!0))!==null&&Z!==void 0?Z:he)!==null&&Me!==void 0?Me:0;ie=VL({barGap:E,barCategoryGap:A,bandSize:ne!==Se?ne:Se,sizeList:oe[xe],maxBarSize:he}),ne!==Se&&(ie=ie.map(function(Re){return F(F({},Re),{},{position:F(F({},Re.position),{},{offset:Re.position.offset-ne/2})})}))}var le=D&&D.type&&D.type.getComposedData;le&&T.push({props:F(F({},le(F(F({},He),{},{displayedData:H,props:y,dataKey:K,item:D,bandSize:Se,barPosition:ie,offset:x,stackedData:ee,layout:M,dataStartIndex:_,dataEndIndex:j}))),{},Y(Y(Y({key:D.key||"item-".concat(R)},C,He[C]),I,He[I]),"animationId",k)),childIndex:HS(D,y.children),item:D})}),T},h=function(y,m){var g=y.props,S=y.dataStartIndex,x=y.dataEndIndex,k=y.updateId;if(!z7({props:g}))return null;var _=g.children,j=g.layout,O=g.stackOffset,M=g.data,E=g.reverseStackOrder,A=uy(j),P=A.numericAxisName,$=A.cateAxisName,C=cn(_,r),I=iF(M,C,"".concat(P,"Id"),"".concat($,"Id"),O,E),L=s.reduce(function(B,K){var te="".concat(K.axisType,"Map");return F(F({},B),{},Y({},te,bX(g,F(F({},K),{},{graphicalItems:C,stackGroups:K.axisType===P&&I,dataStartIndex:S,dataEndIndex:x}))))},{}),T=SX(F(F({},L),{},{props:g,graphicalItems:C}),m==null?void 0:m.legendBBox);Object.keys(L).forEach(function(B){L[B]=f(g,L[B],T,B.replace("Map",""),n)});var D=L["".concat($,"Map")],R=wX(D),H=p(g,F(F({},L),{},{dataStartIndex:S,dataEndIndex:x,updateId:k,graphicalItems:C,stackGroups:I,offset:T}));return F(F({formattedGraphicalItems:H,graphicalItems:C,offset:T,stackGroups:I},R),L)},b=function(w){function y(m){var g,S,x;return rX(this,y),x=lX(this,y,[m]),Y(x,"eventEmitterSymbol",Symbol("rechartsEventEmitter")),Y(x,"accessibilityManager",new UV),Y(x,"handleLegendBBoxUpdate",function(k){if(k){var _=x.state,j=_.dataStartIndex,O=_.dataEndIndex,M=_.updateId;x.setState(F({legendBBox:k},h({props:x.props,dataStartIndex:j,dataEndIndex:O,updateId:M},F(F({},x.state),{},{legendBBox:k}))))}}),Y(x,"handleReceiveSyncEvent",function(k,_,j){if(x.props.syncId===k){if(j===x.eventEmitterSymbol&&typeof x.props.syncMethod!="function")return;x.applySyncEvent(_)}}),Y(x,"handleBrushChange",function(k){var _=k.startIndex,j=k.endIndex;if(_!==x.state.dataStartIndex||j!==x.state.dataEndIndex){var O=x.state.updateId;x.setState(function(){return F({dataStartIndex:_,dataEndIndex:j},h({props:x.props,dataStartIndex:_,dataEndIndex:j,updateId:O},x.state))}),x.triggerSyncEvent({dataStartIndex:_,dataEndIndex:j})}}),Y(x,"handleMouseEnter",function(k){var _=x.getMouseInfo(k);if(_){var j=F(F({},_),{},{isTooltipActive:!0});x.setState(j),x.triggerSyncEvent(j);var O=x.props.onMouseEnter;re(O)&&O(j,k)}}),Y(x,"triggeredAfterMouseMove",function(k){var _=x.getMouseInfo(k),j=_?F(F({},_),{},{isTooltipActive:!0}):{isTooltipActive:!1};x.setState(j),x.triggerSyncEvent(j);var O=x.props.onMouseMove;re(O)&&O(j,k)}),Y(x,"handleItemMouseEnter",function(k){x.setState(function(){return{isTooltipActive:!0,activeItem:k,activePayload:k.tooltipPayload,activeCoordinate:k.tooltipPosition||{x:k.cx,y:k.cy}}})}),Y(x,"handleItemMouseLeave",function(){x.setState(function(){return{isTooltipActive:!1}})}),Y(x,"handleMouseMove",function(k){k.persist(),x.throttleTriggeredAfterMouseMove(k)}),Y(x,"handleMouseLeave",function(k){x.throttleTriggeredAfterMouseMove.cancel();var _={isTooltipActive:!1};x.setState(_),x.triggerSyncEvent(_);var j=x.props.onMouseLeave;re(j)&&j(_,k)}),Y(x,"handleOuterEvent",function(k){var _=US(k),j=Gt(x.props,"".concat(_));if(_&&re(j)){var O,M;/.*touch.*/i.test(_)?M=x.getMouseInfo(k.changedTouches[0]):M=x.getMouseInfo(k),j((O=M)!==null&&O!==void 0?O:{},k)}}),Y(x,"handleClick",function(k){var _=x.getMouseInfo(k);if(_){var j=F(F({},_),{},{isTooltipActive:!0});x.setState(j),x.triggerSyncEvent(j);var O=x.props.onClick;re(O)&&O(j,k)}}),Y(x,"handleMouseDown",function(k){var _=x.props.onMouseDown;if(re(_)){var j=x.getMouseInfo(k);_(j,k)}}),Y(x,"handleMouseUp",function(k){var _=x.props.onMouseUp;if(re(_)){var j=x.getMouseInfo(k);_(j,k)}}),Y(x,"handleTouchMove",function(k){k.changedTouches!=null&&k.changedTouches.length>0&&x.throttleTriggeredAfterMouseMove(k.changedTouches[0])}),Y(x,"handleTouchStart",function(k){k.changedTouches!=null&&k.changedTouches.length>0&&x.handleMouseDown(k.changedTouches[0])}),Y(x,"handleTouchEnd",function(k){k.changedTouches!=null&&k.changedTouches.length>0&&x.handleMouseUp(k.changedTouches[0])}),Y(x,"handleDoubleClick",function(k){var _=x.props.onDoubleClick;if(re(_)){var j=x.getMouseInfo(k);_(j,k)}}),Y(x,"handleContextMenu",function(k){var _=x.props.onContextMenu;if(re(_)){var j=x.getMouseInfo(k);_(j,k)}}),Y(x,"triggerSyncEvent",function(k){x.props.syncId!==void 0&&Ud.emit(Hd,x.props.syncId,k,x.eventEmitterSymbol)}),Y(x,"applySyncEvent",function(k){var _=x.props,j=_.layout,O=_.syncMethod,M=x.state.updateId,E=k.dataStartIndex,A=k.dataEndIndex;if(k.dataStartIndex!==void 0||k.dataEndIndex!==void 0)x.setState(F({dataStartIndex:E,dataEndIndex:A},h({props:x.props,dataStartIndex:E,dataEndIndex:A,updateId:M},x.state)));else if(k.activeTooltipIndex!==void 0){var P=k.chartX,$=k.chartY,C=k.activeTooltipIndex,I=x.state,L=I.offset,T=I.tooltipTicks;if(!L)return;if(typeof O=="function")C=O(T,k);else if(O==="value"){C=-1;for(var D=0;D<T.length;D++)if(T[D].value===k.activeLabel){C=D;break}}var R=F(F({},L),{},{x:L.left,y:L.top}),H=Math.min(P,R.x+R.width),B=Math.min($,R.y+R.height),K=T[C]&&T[C].value,te=sp(x.state,x.props.data,C),pe=T[C]?{x:j==="horizontal"?T[C].coordinate:H,y:j==="horizontal"?B:T[C].coordinate}:Z3;x.setState(F(F({},k),{},{activeLabel:K,activeCoordinate:pe,activePayload:te,activeTooltipIndex:C}))}else x.setState(k)}),Y(x,"renderCursor",function(k){var _,j=x.state,O=j.isTooltipActive,M=j.activeCoordinate,E=j.activePayload,A=j.offset,P=j.activeTooltipIndex,$=j.tooltipAxisBandSize,C=x.getTooltipEventType(),I=(_=k.props.active)!==null&&_!==void 0?_:O,L=x.props.layout,T=k.key||"_recharts-cursor";return z.createElement(YV,{key:T,activeCoordinate:M,activePayload:E,activeTooltipIndex:P,chartName:n,element:k,isActive:I,layout:L,offset:A,tooltipAxisBandSize:$,tooltipEventType:C})}),Y(x,"renderPolarAxis",function(k,_,j){var O=Gt(k,"type.axisType"),M=Gt(x.state,"".concat(O,"Map")),E=k.type.defaultProps,A=E!==void 0?F(F({},E),k.props):k.props,P=M&&M[A["".concat(O,"Id")]];return N.cloneElement(k,F(F({},P),{},{className:de(O,P.className),key:k.key||"".concat(_,"-").concat(j),ticks:Mn(P,!0)}))}),Y(x,"renderPolarGrid",function(k){var _=k.props,j=_.radialLines,O=_.polarAngles,M=_.polarRadius,E=x.state,A=E.radiusAxisMap,P=E.angleAxisMap,$=nr(A),C=nr(P),I=C.cx,L=C.cy,T=C.innerRadius,D=C.outerRadius;return N.cloneElement(k,{polarAngles:Array.isArray(O)?O:Mn(C,!0).map(function(R){return R.coordinate}),polarRadius:Array.isArray(M)?M:Mn($,!0).map(function(R){return R.coordinate}),cx:I,cy:L,innerRadius:T,outerRadius:D,key:k.key||"polar-grid",radialLines:j})}),Y(x,"renderLegend",function(){var k=x.state.formattedGraphicalItems,_=x.props,j=_.children,O=_.width,M=_.height,E=x.props.margin||{},A=O-(E.left||0)-(E.right||0),P=Ug({children:j,formattedGraphicalItems:k,legendWidth:A,legendContent:u});if(!P)return null;var $=P.item,C=ly(P,ZV);return N.cloneElement($,F(F({},C),{},{chartWidth:O,chartHeight:M,margin:E,onBBoxUpdate:x.handleLegendBBoxUpdate}))}),Y(x,"renderTooltip",function(){var k,_=x.props,j=_.children,O=_.accessibilityLayer,M=Ct(j,tn);if(!M)return null;var E=x.state,A=E.isTooltipActive,P=E.activeCoordinate,$=E.activePayload,C=E.activeLabel,I=E.offset,L=(k=M.props.active)!==null&&k!==void 0?k:A;return N.cloneElement(M,{viewBox:F(F({},I),{},{x:I.left,y:I.top}),active:L,label:C,payload:L?$:[],coordinate:P,accessibilityLayer:O})}),Y(x,"renderBrush",function(k){var _=x.props,j=_.margin,O=_.data,M=x.state,E=M.offset,A=M.dataStartIndex,P=M.dataEndIndex,$=M.updateId;return N.cloneElement(k,{key:k.key||"_recharts-brush",onChange:Qo(x.handleBrushChange,k.props.onChange),data:O,x:G(k.props.x)?k.props.x:E.left,y:G(k.props.y)?k.props.y:E.top+E.height+E.brushBottom-(j.bottom||0),width:G(k.props.width)?k.props.width:E.width,startIndex:A,endIndex:P,updateId:"brush-".concat($)})}),Y(x,"renderReferenceElement",function(k,_,j){if(!k)return null;var O=x,M=O.clipPathId,E=x.state,A=E.xAxisMap,P=E.yAxisMap,$=E.offset,C=k.type.defaultProps||{},I=k.props,L=I.xAxisId,T=L===void 0?C.xAxisId:L,D=I.yAxisId,R=D===void 0?C.yAxisId:D;return N.cloneElement(k,{key:k.key||"".concat(_,"-").concat(j),xAxis:A[T],yAxis:P[R],viewBox:{x:$.left,y:$.top,width:$.width,height:$.height},clipPathId:M})}),Y(x,"renderActivePoints",function(k){var _=k.item,j=k.activePoint,O=k.basePoint,M=k.childIndex,E=k.isRange,A=[],P=_.props.key,$=_.item.type.defaultProps!==void 0?F(F({},_.item.type.defaultProps),_.item.props):_.item.props,C=$.activeDot,I=$.dataKey,L=F(F({index:M,dataKey:I,cx:j.x,cy:j.y,r:4,fill:eh(_.item),strokeWidth:2,stroke:"#fff",payload:j.payload,value:j.value},ue(C,!1)),Bs(C));return A.push(y.renderActiveDot(C,L,"".concat(P,"-activePoint-").concat(M))),O?A.push(y.renderActiveDot(C,F(F({},L),{},{cx:O.x,cy:O.y}),"".concat(P,"-basePoint-").concat(M))):E&&A.push(null),A}),Y(x,"renderGraphicChild",function(k,_,j){var O=x.filterFormatItem(k,_,j);if(!O)return null;var M=x.getTooltipEventType(),E=x.state,A=E.isTooltipActive,P=E.tooltipAxis,$=E.activeTooltipIndex,C=E.activeLabel,I=x.props.children,L=Ct(I,tn),T=O.props,D=T.points,R=T.isRange,H=T.baseLine,B=O.item.type.defaultProps!==void 0?F(F({},O.item.type.defaultProps),O.item.props):O.item.props,K=B.activeDot,te=B.hide,pe=B.activeBar,xe=B.activeShape,st=!!(!te&&A&&L&&(K||pe||xe)),He={};M!=="axis"&&L&&L.props.trigger==="click"?He={onClick:Qo(x.handleItemMouseEnter,k.props.onClick)}:M!=="axis"&&(He={onMouseLeave:Qo(x.handleItemMouseLeave,k.props.onMouseLeave),onMouseEnter:Qo(x.handleItemMouseEnter,k.props.onMouseEnter)});var V=N.cloneElement(k,F(F({},O.props),He));function Q(Ie){return typeof P.dataKey=="function"?P.dataKey(Ie.payload):null}if(st)if($>=0){var ee,W;if(P.dataKey&&!P.allowDuplicatedCategory){var Se=typeof P.dataKey=="function"?Q:"payload.".concat(P.dataKey.toString());ee=Rf(D,Se,C),W=R&&H&&Rf(H,Se,C)}else ee=D==null?void 0:D[$],W=R&&H&&H[$];if(xe||pe){var ie=k.props.activeIndex!==void 0?k.props.activeIndex:$;return[N.cloneElement(k,F(F(F({},O.props),He),{},{activeIndex:ie})),null,null]}if(!fe(ee))return[V].concat(fa(x.renderActivePoints({item:O,activePoint:ee,basePoint:W,childIndex:$,isRange:R})))}else{var oe,Me=(oe=x.getItemByXY(x.state.activeCoordinate))!==null&&oe!==void 0?oe:{graphicalItem:V},Z=Me.graphicalItem,he=Z.item,ne=he===void 0?k:he,le=Z.childIndex,Re=F(F(F({},O.props),He),{},{activeIndex:le});return[N.cloneElement(ne,Re),null,null]}return R?[V,null,null]:[V,null]}),Y(x,"renderCustomized",function(k,_,j){return N.cloneElement(k,F(F({key:"recharts-customized-".concat(j)},x.props),x.state))}),Y(x,"renderMap",{CartesianGrid:{handler:rs,once:!0},ReferenceArea:{handler:x.renderReferenceElement},ReferenceLine:{handler:rs},ReferenceDot:{handler:x.renderReferenceElement},XAxis:{handler:rs},YAxis:{handler:rs},Brush:{handler:x.renderBrush,once:!0},Bar:{handler:x.renderGraphicChild},Line:{handler:x.renderGraphicChild},Area:{handler:x.renderGraphicChild},Radar:{handler:x.renderGraphicChild},RadialBar:{handler:x.renderGraphicChild},Scatter:{handler:x.renderGraphicChild},Pie:{handler:x.renderGraphicChild},Funnel:{handler:x.renderGraphicChild},Tooltip:{handler:x.renderCursor,once:!0},PolarGrid:{handler:x.renderPolarGrid,once:!0},PolarAngleAxis:{handler:x.renderPolarAxis},PolarRadiusAxis:{handler:x.renderPolarAxis},Customized:{handler:x.renderCustomized}}),x.clipPathId="".concat((g=m.id)!==null&&g!==void 0?g:yu("recharts"),"-clip"),x.throttleTriggeredAfterMouseMove=W6(x.triggeredAfterMouseMove,(S=m.throttleDelay)!==null&&S!==void 0?S:1e3/60),x.state={},x}return cX(y,w),aX(y,[{key:"componentDidMount",value:function(){var g,S;this.addListener(),this.accessibilityManager.setDetails({container:this.container,offset:{left:(g=this.props.margin.left)!==null&&g!==void 0?g:0,top:(S=this.props.margin.top)!==null&&S!==void 0?S:0},coordinateList:this.state.tooltipTicks,mouseHandlerCallback:this.triggeredAfterMouseMove,layout:this.props.layout}),this.displayDefaultTooltip()}},{key:"displayDefaultTooltip",value:function(){var g=this.props,S=g.children,x=g.data,k=g.height,_=g.layout,j=Ct(S,tn);if(j){var O=j.props.defaultIndex;if(!(typeof O!="number"||O<0||O>this.state.tooltipTicks.length-1)){var M=this.state.tooltipTicks[O]&&this.state.tooltipTicks[O].value,E=sp(this.state,x,O,M),A=this.state.tooltipTicks[O].coordinate,P=(this.state.offset.top+k)/2,$=_==="horizontal",C=$?{x:A,y:P}:{y:A,x:P},I=this.state.formattedGraphicalItems.find(function(T){var D=T.item;return D.type.name==="Scatter"});I&&(C=F(F({},C),I.props.points[O].tooltipPosition),E=I.props.points[O].tooltipPayload);var L={activeTooltipIndex:O,isTooltipActive:!0,activeLabel:M,activePayload:E,activeCoordinate:C};this.setState(L),this.renderCursor(j),this.accessibilityManager.setIndex(O)}}}},{key:"getSnapshotBeforeUpdate",value:function(g,S){if(!this.props.accessibilityLayer)return null;if(this.state.tooltipTicks!==S.tooltipTicks&&this.accessibilityManager.setDetails({coordinateList:this.state.tooltipTicks}),this.props.layout!==g.layout&&this.accessibilityManager.setDetails({layout:this.props.layout}),this.props.margin!==g.margin){var x,k;this.accessibilityManager.setDetails({offset:{left:(x=this.props.margin.left)!==null&&x!==void 0?x:0,top:(k=this.props.margin.top)!==null&&k!==void 0?k:0}})}return null}},{key:"componentDidUpdate",value:function(g){Wf([Ct(g.children,tn)],[Ct(this.props.children,tn)])||this.displayDefaultTooltip()}},{key:"componentWillUnmount",value:function(){this.removeListener(),this.throttleTriggeredAfterMouseMove.cancel()}},{key:"getTooltipEventType",value:function(){var g=Ct(this.props.children,tn);if(g&&typeof g.props.shared=="boolean"){var S=g.props.shared?"axis":"item";return o.indexOf(S)>=0?S:a}return a}},{key:"getMouseInfo",value:function(g){if(!this.container)return null;var S=this.container,x=S.getBoundingClientRect(),k=y$(x),_={chartX:Math.round(g.pageX-k.left),chartY:Math.round(g.pageY-k.top)},j=x.width/S.offsetWidth||1,O=this.inRange(_.chartX,_.chartY,j);if(!O)return null;var M=this.state,E=M.xAxisMap,A=M.yAxisMap,P=this.getTooltipEventType(),$=sy(this.state,this.props.data,this.props.layout,O);if(P!=="axis"&&E&&A){var C=nr(E).scale,I=nr(A).scale,L=C&&C.invert?C.invert(_.chartX):null,T=I&&I.invert?I.invert(_.chartY):null;return F(F({},_),{},{xValue:L,yValue:T},$)}return $?F(F({},_),$):null}},{key:"inRange",value:function(g,S){var x=arguments.length>2&&arguments[2]!==void 0?arguments[2]:1,k=this.props.layout,_=g/x,j=S/x;if(k==="horizontal"||k==="vertical"){var O=this.state.offset,M=_>=O.left&&_<=O.left+O.width&&j>=O.top&&j<=O.top+O.height;return M?{x:_,y:j}:null}var E=this.state,A=E.angleAxisMap,P=E.radiusAxisMap;if(A&&P){var $=nr(A);return G2({x:_,y:j},$)}return null}},{key:"parseEventsOfWrapper",value:function(){var g=this.props.children,S=this.getTooltipEventType(),x=Ct(g,tn),k={};x&&S==="axis"&&(x.props.trigger==="click"?k={onClick:this.handleClick}:k={onMouseEnter:this.handleMouseEnter,onDoubleClick:this.handleDoubleClick,onMouseMove:this.handleMouseMove,onMouseLeave:this.handleMouseLeave,onTouchMove:this.handleTouchMove,onTouchStart:this.handleTouchStart,onTouchEnd:this.handleTouchEnd,onContextMenu:this.handleContextMenu});var _=Bs(this.props,this.handleOuterEvent);return F(F({},_),k)}},{key:"addListener",value:function(){Ud.on(Hd,this.handleReceiveSyncEvent)}},{key:"removeListener",value:function(){Ud.removeListener(Hd,this.handleReceiveSyncEvent)}},{key:"filterFormatItem",value:function(g,S,x){for(var k=this.state.formattedGraphicalItems,_=0,j=k.length;_<j;_++){var O=k[_];if(O.item===g||O.props.key===g.key||S===$n(O.item.type)&&x===O.childIndex)return O}return null}},{key:"renderClipPath",value:function(){var g=this.clipPathId,S=this.state.offset,x=S.left,k=S.top,_=S.height,j=S.width;return z.createElement("defs",null,z.createElement("clipPath",{id:g},z.createElement("rect",{x,y:k,height:_,width:j})))}},{key:"getXScales",value:function(){var g=this.state.xAxisMap;return g?Object.entries(g).reduce(function(S,x){var k=ay(x,2),_=k[0],j=k[1];return F(F({},S),{},Y({},_,j.scale))},{}):null}},{key:"getYScales",value:function(){var g=this.state.yAxisMap;return g?Object.entries(g).reduce(function(S,x){var k=ay(x,2),_=k[0],j=k[1];return F(F({},S),{},Y({},_,j.scale))},{}):null}},{key:"getXScaleByAxisId",value:function(g){var S;return(S=this.state.xAxisMap)===null||S===void 0||(S=S[g])===null||S===void 0?void 0:S.scale}},{key:"getYScaleByAxisId",value:function(g){var S;return(S=this.state.yAxisMap)===null||S===void 0||(S=S[g])===null||S===void 0?void 0:S.scale}},{key:"getItemByXY",value:function(g){var S=this.state,x=S.formattedGraphicalItems,k=S.activeItem;if(x&&x.length)for(var _=0,j=x.length;_<j;_++){var O=x[_],M=O.props,E=O.item,A=E.type.defaultProps!==void 0?F(F({},E.type.defaultProps),E.props):E.props,P=$n(E.type);if(P==="Bar"){var $=(M.data||[]).find(function(T){return JB(g,T)});if($)return{graphicalItem:O,payload:$}}else if(P==="RadialBar"){var C=(M.data||[]).find(function(T){return G2(g,T)});if(C)return{graphicalItem:O,payload:C}}else if(zu(O,k)||Iu(O,k)||to(O,k)){var I=nU({graphicalItem:O,activeTooltipItem:k,itemData:A.data}),L=A.activeIndex===void 0?I:A.activeIndex;return{graphicalItem:F(F({},O),{},{childIndex:L}),payload:to(O,k)?A.data[I]:O.props.data[I]}}}return null}},{key:"render",value:function(){var g=this;if(!z7(this))return null;var S=this.props,x=S.children,k=S.className,_=S.width,j=S.height,O=S.style,M=S.compact,E=S.title,A=S.desc,P=ly(S,QV),$=ue(P,!1);if(M)return z.createElement(H5,{state:this.state,width:this.props.width,height:this.props.height,clipPathId:this.clipPathId},z.createElement(Hf,Ni({},$,{width:_,height:j,title:E,desc:A}),this.renderClipPath(),D7(x,this.renderMap)));if(this.props.accessibilityLayer){var C,I;$.tabIndex=(C=this.props.tabIndex)!==null&&C!==void 0?C:0,$.role=(I=this.props.role)!==null&&I!==void 0?I:"application",$.onKeyDown=function(T){g.accessibilityManager.keyboardEvent(T)},$.onFocus=function(){g.accessibilityManager.focus()}}var L=this.parseEventsOfWrapper();return z.createElement(H5,{state:this.state,width:this.props.width,height:this.props.height,clipPathId:this.clipPathId},z.createElement("div",Ni({className:de("recharts-wrapper",k),style:F({position:"relative",cursor:"default",width:_,height:j},O)},L,{ref:function(D){g.container=D}}),z.createElement(Hf,Ni({},$,{width:_,height:j,title:E,desc:A,style:mX}),this.renderClipPath(),D7(x,this.renderMap)),this.renderLegend(),this.renderTooltip()))}}])}(N.Component);Y(b,"displayName",n),Y(b,"defaultProps",F({layout:"horizontal",stackOffset:"none",barCategoryGap:"10%",barGap:4,margin:{top:5,right:5,bottom:5,left:5},reverseStackOrder:!1,syncMethod:"index"},d)),Y(b,"getDerivedStateFromProps",function(w,y){var m=w.dataKey,g=w.data,S=w.children,x=w.width,k=w.height,_=w.layout,j=w.stackOffset,O=w.margin,M=y.dataStartIndex,E=y.dataEndIndex;if(y.updateId===void 0){var A=cy(w);return F(F(F({},A),{},{updateId:0},h(F(F({props:w},A),{},{updateId:0}),y)),{},{prevDataKey:m,prevData:g,prevWidth:x,prevHeight:k,prevLayout:_,prevStackOffset:j,prevMargin:O,prevChildren:S})}if(m!==y.prevDataKey||g!==y.prevData||x!==y.prevWidth||k!==y.prevHeight||_!==y.prevLayout||j!==y.prevStackOffset||!Ii(O,y.prevMargin)){var P=cy(w),$={chartX:y.chartX,chartY:y.chartY,isTooltipActive:y.isTooltipActive},C=F(F({},sy(y,g,_)),{},{updateId:y.updateId+1}),I=F(F(F({},P),$),C);return F(F(F({},I),h(F({props:w},I),y)),{},{prevDataKey:m,prevData:g,prevWidth:x,prevHeight:k,prevLayout:_,prevStackOffset:j,prevMargin:O,prevChildren:S})}if(!Wf(S,y.prevChildren)){var L,T,D,R,H=Ct(S,ra),B=H&&(L=(T=H.props)===null||T===void 0?void 0:T.startIndex)!==null&&L!==void 0?L:M,K=H&&(D=(R=H.props)===null||R===void 0?void 0:R.endIndex)!==null&&D!==void 0?D:E,te=B!==M||K!==E,pe=!fe(g),xe=pe&&!te?y.updateId:y.updateId+1;return F(F({updateId:xe},h(F(F({props:w},y),{},{updateId:xe,dataStartIndex:B,dataEndIndex:K}),y)),{},{prevChildren:S,dataStartIndex:B,dataEndIndex:K})}return null}),Y(b,"renderActiveDot",function(w,y,m){var g;return N.isValidElement(w)?g=N.cloneElement(w,y):re(w)?g=w(y):g=z.createElement(c3,y),z.createElement(et,{className:"recharts-active-dot",key:m},g)});var v=N.forwardRef(function(y,m){return z.createElement(b,Ni({},y,{ref:m}))});return v.displayName=b.displayName,v},dy=jX({chartName:"BarChart",GraphicalChild:vn,defaultTooltipEventType:"axis",validateTooltipEventTypes:["axis","item"],axisComponents:[{axisType:"xAxis",AxisComp:lo},{axisType:"yAxis",AxisComp:oo}],formatAxisMap:PH});function OX(){const[e,t]=N.useState("alarms"),[n,r]=N.useState([]),[i,a]=N.useState([]),[l,o]=N.useState([]),[s,u]=N.useState(!1);N.useEffect(()=>{e==="alarms"?f():e==="events"?d():e==="operation"&&p()},[e]);const f=async()=>{u(!0);try{const v=await(await fetch("http://localhost:8001/api/alarms/history?limit=100")).json();v.success&&r(v.data)}catch(b){console.error("알람 이력 조회 오류:",b)}finally{u(!1)}},d=async()=>{u(!0);try{const v=await(await fetch("http://localhost:8001/api/events?limit=100")).json();v.success&&a(v.data)}catch(b){console.error("이벤트 로그 조회 오류:",b)}finally{u(!1)}},p=async()=>{u(!0);try{const v=await(await fetch("http://localhost:8001/api/operations")).json();v.success&&o(v.data)}catch(b){console.error("운전 이력 조회 오류:",b)}finally{u(!1)}},h=(b,v)=>{if(!b||b.length===0){alert("내보낼 데이터가 없습니다.");return}const w=Object.keys(b[0]),y=[w.join(","),...b.map(k=>w.map(_=>{const j=k[_];return typeof j=="string"&&j.includes(",")?`"${j}"`:j}).join(","))].join(`
`),m="\uFEFF",g=new Blob([m+y],{type:"text/csv;charset=utf-8;"}),S=document.createElement("a"),x=URL.createObjectURL(g);S.setAttribute("href",x),S.setAttribute("download",`${v}_${new Date().toISOString().slice(0,10)}.csv`),S.style.visibility="hidden",document.body.appendChild(S),S.click(),document.body.removeChild(S)};return c.jsxs("div",{className:"history",children:[c.jsxs("div",{className:"history-header",children:[c.jsx("h2",{children:"📋 이력 관리"}),c.jsx("p",{children:"알람 이력, 이벤트 로그, 운전 이력 조회"})]}),c.jsxs("div",{className:"history-tabs",children:[c.jsx("button",{className:e==="alarms"?"active":"",onClick:()=>t("alarms"),children:"🔔 알람 이력"}),c.jsx("button",{className:e==="events"?"active":"",onClick:()=>t("events"),children:"📝 이벤트 로그"}),c.jsx("button",{className:e==="operation"?"active":"",onClick:()=>t("operation"),children:"⚙️ 운전 이력"})]}),c.jsxs("div",{className:"history-content",children:[s&&c.jsx("div",{className:"loading",children:"데이터 로딩 중..."}),!s&&e==="alarms"&&c.jsx(PX,{data:n,onExport:h}),!s&&e==="events"&&c.jsx(AX,{data:i,onExport:h}),!s&&e==="operation"&&c.jsx(NX,{data:l,onExport:h})]})]})}function PX({data:e,onExport:t}){const[n,r]=N.useState("all"),[i,a]=N.useState(""),[l,o]=N.useState(()=>{const d=new Date;return d.setDate(d.getDate()-30),d.toISOString().slice(0,10)}),[s,u]=N.useState(()=>new Date().toISOString().slice(0,10)),f=N.useMemo(()=>e.filter(d=>{var h;const p=(h=d.time)==null?void 0:h.slice(0,10);return!(p&&(p<l||p>s)||n!=="all"&&d.level!==n||i&&!d.message.toLowerCase().includes(i.toLowerCase()))}),[e,l,s,n,i]);return c.jsxs("div",{className:"alarm-history",children:[c.jsxs("div",{className:"history-controls",children:[c.jsxs("div",{className:"date-range",children:[c.jsx("label",{children:"조회 기간:"}),c.jsx("input",{type:"date",value:l,onChange:d=>o(d.target.value)}),c.jsx("span",{children:"~"}),c.jsx("input",{type:"date",value:s,onChange:d=>u(d.target.value)})]}),c.jsxs("div",{className:"filter-group",children:[c.jsx("label",{children:"등급:"}),c.jsxs("select",{value:n,onChange:d=>r(d.target.value),children:[c.jsx("option",{value:"all",children:"전체"}),c.jsx("option",{value:"critical",children:"위험"}),c.jsx("option",{value:"warning",children:"경고"})]})]}),c.jsx("div",{className:"search-group",children:c.jsx("input",{type:"text",placeholder:"🔍 알람 검색...",value:i,onChange:d=>a(d.target.value)})}),c.jsx("button",{className:"btn-export",onClick:()=>t(f,"alarm_history"),children:"📥 CSV 내보내기"})]}),c.jsx("div",{className:"history-table",children:c.jsxs("table",{children:[c.jsx("thead",{children:c.jsxs("tr",{children:[c.jsx("th",{children:"시간"}),c.jsx("th",{children:"등급"}),c.jsx("th",{children:"메시지"}),c.jsx("th",{children:"확인"})]})}),c.jsx("tbody",{children:f.map(d=>c.jsxs("tr",{children:[c.jsx("td",{children:d.time}),c.jsx("td",{children:c.jsxs("span",{className:`level-badge ${d.level}`,children:[d.level==="critical"&&"🔴 위험",d.level==="warning"&&"🟡 경고"]})}),c.jsx("td",{children:d.message}),c.jsx("td",{children:c.jsx("span",{className:`ack-badge ${d.acknowledged?"ack":"unack"}`,children:d.acknowledged?"✅ 확인됨":"⏳ 대기중"})})]},d.id))})]})}),c.jsxs("div",{className:"history-summary",children:[c.jsxs("div",{className:"summary-item",children:[c.jsx("span",{className:"summary-label",children:"총 알람:"}),c.jsxs("span",{className:"summary-value",children:[f.length,"건"]})]}),c.jsxs("div",{className:"summary-item",children:[c.jsx("span",{className:"summary-label",children:"위험:"}),c.jsxs("span",{className:"summary-value critical",children:[f.filter(d=>d.level==="critical").length,"건"]})]}),c.jsxs("div",{className:"summary-item",children:[c.jsx("span",{className:"summary-label",children:"경고:"}),c.jsxs("span",{className:"summary-value warning",children:[f.filter(d=>d.level==="warning").length,"건"]})]})]})]})}function AX({data:e,onExport:t}){const[n,r]=N.useState("all"),[i,a]=N.useState(()=>{const f=new Date;return f.setDate(f.getDate()-30),f.toISOString().slice(0,10)}),[l,o]=N.useState(()=>new Date().toISOString().slice(0,10)),s=N.useMemo(()=>e.filter(f=>{var p;const d=(p=f.time)==null?void 0:p.slice(0,10);return!(d&&(d<i||d>l)||n!=="all"&&f.type!==n)}),[e,i,l,n]),u=f=>{switch(f){case"control":return"🎮";case"alarm":return"🔔";case"setting":return"⚙️";case"system":return"💻";default:return"📝"}};return c.jsxs("div",{className:"event-history",children:[c.jsxs("div",{className:"history-controls",children:[c.jsxs("div",{className:"date-range",children:[c.jsx("label",{children:"조회 기간:"}),c.jsx("input",{type:"date",value:i,onChange:f=>a(f.target.value)}),c.jsx("span",{children:"~"}),c.jsx("input",{type:"date",value:l,onChange:f=>o(f.target.value)})]}),c.jsxs("div",{className:"filter-group",children:[c.jsx("label",{children:"유형:"}),c.jsxs("select",{value:n,onChange:f=>r(f.target.value),children:[c.jsx("option",{value:"all",children:"전체"}),c.jsx("option",{value:"control",children:"제어"}),c.jsx("option",{value:"alarm",children:"알람"}),c.jsx("option",{value:"setting",children:"설정"}),c.jsx("option",{value:"system",children:"시스템"})]})]}),c.jsx("button",{className:"btn-export",onClick:()=>t(s,"event_history"),children:"📥 CSV 내보내기"})]}),c.jsx("div",{className:"event-list",children:s.length>0?s.map(f=>c.jsxs("div",{className:"event-item",children:[c.jsx("div",{className:"event-icon",children:u(f.type)}),c.jsxs("div",{className:"event-content",children:[c.jsxs("div",{className:"event-header",children:[c.jsx("span",{className:"event-time",children:f.time}),c.jsx("span",{className:"event-user",children:f.user})]}),c.jsx("div",{className:"event-message",children:f.message})]})]},f.id)):c.jsx("div",{className:"no-data-message",children:"해당 기간의 이벤트가 없습니다."})})]})}function NX({data:e,onExport:t}){const[n,r]=N.useState(()=>{const h=new Date;return h.setDate(h.getDate()-30),h.toISOString().slice(0,10)}),[i,a]=N.useState(()=>new Date().toISOString().slice(0,10)),l=N.useMemo(()=>!e||e.length===0?[]:e.filter(h=>{const b=h.date;return b>=n&&b<=i}),[e,n,i]),o=N.useMemo(()=>{if(!l||l.length===0)return[];const h=l.reduce((b,v)=>{const w=v.date;return b[w]||(b[w]={date:w,energy_kwh:0,saved_kwh:0,runtime_hours:0}),b[w].energy_kwh+=v.energy_kwh||0,b[w].saved_kwh+=v.saved_kwh||0,b[w].runtime_hours+=v.runtime_hours||0,b},{});return Object.values(h).sort((b,v)=>new Date(b.date)-new Date(v.date)).map(b=>({...b,date:b.date.slice(5),savings_rate:b.energy_kwh>0?(b.saved_kwh/(b.energy_kwh+b.saved_kwh)*100).toFixed(1):0}))},[l]),s=N.useMemo(()=>{if(!l||l.length===0)return[];const h=l.reduce((b,v)=>{const w=v.equipment_name;return b[w]||(b[w]={name:w,energy_kwh:0,saved_kwh:0}),b[w].energy_kwh+=v.energy_kwh||0,b[w].saved_kwh+=v.saved_kwh||0,b},{});return Object.values(h).sort((b,v)=>b.name.localeCompare(v.name))},[l]),u=(l==null?void 0:l.reduce((h,b)=>h+(b.energy_kwh||0),0))||0,f=(l==null?void 0:l.reduce((h,b)=>h+(b.saved_kwh||0),0))||0,d=(l==null?void 0:l.reduce((h,b)=>h+(b.runtime_hours||0),0))||0,p=u>0?(f/(u+f)*100).toFixed(1):0;return c.jsxs("div",{className:"operation-history",children:[c.jsxs("div",{className:"history-controls",children:[c.jsxs("div",{className:"date-range",children:[c.jsx("label",{children:"조회 기간:"}),c.jsx("input",{type:"date",value:n,onChange:h=>r(h.target.value)}),c.jsx("span",{children:"~"}),c.jsx("input",{type:"date",value:i,onChange:h=>a(h.target.value)})]}),c.jsx("button",{className:"btn-export",onClick:()=>t(l,"operation_history"),children:"📥 CSV 내보내기"})]}),c.jsxs("div",{className:"operation-charts",children:[c.jsxs("div",{className:"chart-section",children:[c.jsx("h4",{children:"📊 일별 절감 전력 추이"}),o.length>0?c.jsx($m,{width:"100%",height:250,children:c.jsxs(dy,{data:o,margin:{top:20,right:30,left:20,bottom:5},children:[c.jsx(J1,{strokeDasharray:"3 3",stroke:"#444"}),c.jsx(lo,{dataKey:"date",stroke:"#aaa"}),c.jsx(oo,{stroke:"#aaa"}),c.jsx(tn,{contentStyle:{backgroundColor:"#1a1a2e",border:"1px solid #444"},labelStyle:{color:"#fff"}}),c.jsx(hr,{}),c.jsx(vn,{dataKey:"energy_kwh",name:"소비 전력 (kWh)",fill:"#ff6b6b"}),c.jsx(vn,{dataKey:"saved_kwh",name:"절감 전력 (kWh)",fill:"#4ecdc4"})]})}):c.jsx("div",{className:"chart-placeholder",children:c.jsx("p",{children:"차트는 실제 데이터가 누적되면 표시됩니다"})})]}),c.jsxs("div",{className:"chart-section",children:[c.jsx("h4",{children:"📈 장비별 에너지 현황"}),s.length>0?c.jsx($m,{width:"100%",height:Math.max(250,s.length*35),children:c.jsxs(dy,{data:s,layout:"vertical",margin:{top:20,right:30,left:60,bottom:5},children:[c.jsx(J1,{strokeDasharray:"3 3",stroke:"#444"}),c.jsx(lo,{type:"number",stroke:"#aaa"}),c.jsx(oo,{dataKey:"name",type:"category",stroke:"#aaa"}),c.jsx(tn,{contentStyle:{backgroundColor:"#1a1a2e",border:"1px solid #444"},labelStyle:{color:"#fff"}}),c.jsx(hr,{}),c.jsx(vn,{dataKey:"energy_kwh",name:"소비 전력 (kWh)",fill:"#ff6b6b"}),c.jsx(vn,{dataKey:"saved_kwh",name:"절감 전력 (kWh)",fill:"#4ecdc4"})]})}):c.jsx("div",{className:"chart-placeholder",children:c.jsx("p",{children:"장비별 데이터가 없습니다"})})]})]}),c.jsx("div",{className:"operation-table-scroll",children:c.jsxs("table",{children:[c.jsx("thead",{children:c.jsxs("tr",{children:[c.jsx("th",{children:"펌프"}),c.jsx("th",{children:"날짜"}),c.jsx("th",{children:"운전 시간"}),c.jsx("th",{children:"소비 전력"}),c.jsx("th",{children:"절감 전력"}),c.jsx("th",{children:"절감률"})]})}),c.jsx("tbody",{children:l&&l.length>0?l.map((h,b)=>{var v,w,y;return c.jsxs("tr",{children:[c.jsx("td",{children:c.jsx("strong",{children:h.equipment_name})}),c.jsx("td",{children:h.date}),c.jsxs("td",{children:[(v=h.runtime_hours)==null?void 0:v.toFixed(1)," h"]}),c.jsxs("td",{children:[(w=h.energy_kwh)==null?void 0:w.toFixed(1)," kWh"]}),c.jsxs("td",{className:"highlight",children:[(y=h.saved_kwh)==null?void 0:y.toFixed(1)," kWh"]}),c.jsxs("td",{className:"highlight",children:[h.energy_kwh>0?(h.saved_kwh/h.energy_kwh*100).toFixed(1):0,"%"]})]},b)}):c.jsx("tr",{children:c.jsx("td",{colSpan:"6",style:{textAlign:"center",padding:"20px"},children:"해당 기간의 운전 이력이 없습니다."})})}),l&&l.length>0&&c.jsx("tfoot",{children:c.jsxs("tr",{className:"total-row",children:[c.jsx("td",{colSpan:"2",children:c.jsx("strong",{children:"합계"})}),c.jsx("td",{children:c.jsxs("strong",{children:[d.toFixed(1)," h"]})}),c.jsx("td",{children:c.jsxs("strong",{children:[u.toFixed(1)," kWh"]})}),c.jsx("td",{className:"highlight",children:c.jsxs("strong",{children:[f.toFixed(1)," kWh"]})}),c.jsx("td",{className:"highlight",children:c.jsxs("strong",{children:[p,"%"]})})]})})]})})]})}const ys=e=>{switch(e){case 0:return"#10b981";case 1:return"#9e9e9e";case 2:return"#ff9800";case 3:return"#f44336";default:return"#10b981"}},cp=e=>{switch(e){case 0:return"정상";case 1:return"주의";case 2:return"경고";case 3:return"위험";default:return"정상"}},CX=e=>{switch(e){case"rising":return"↑ 상승";case"stable":return"→ 안정";case"falling":return"↓ 하강";default:return"→ 안정"}},EX=z.memo(({vfd:e,onClose:t})=>{var n,r,i,a,l,o,s,u,f,d;return e?c.jsx("div",{className:"popup-overlay",onClick:t,children:c.jsxs("div",{className:"popup-content",onClick:p=>p.stopPropagation(),children:[c.jsxs("div",{className:"popup-header",children:[c.jsxs("h3",{children:[e.name," 상세 진단 정보"]}),c.jsx("button",{className:"popup-close",onClick:t,children:"×"})]}),c.jsxs("div",{className:"popup-body",children:[c.jsxs("div",{className:"popup-summary",style:{borderLeftColor:ys(e.severityLevel)},children:[c.jsx("div",{className:"popup-health-score",style:{color:ys(e.severityLevel)},children:e.healthScore}),c.jsxs("div",{className:"popup-health-info",children:[c.jsxs("div",{className:"popup-status",style:{color:ys(e.severityLevel)},children:[cp(e.severityLevel)," (Lv.",e.severityLevel,")"]}),c.jsx("div",{className:"popup-recommendation",children:e.recommendation})]})]}),c.jsxs("div",{className:"popup-section",children:[c.jsx("h4",{children:"🔧 실시간 운전 데이터"}),c.jsxs("div",{className:"popup-metrics-grid",children:[c.jsxs("div",{className:"popup-metric",children:[c.jsx("span",{className:"popup-metric-label",children:"주파수"}),c.jsxs("span",{className:"popup-metric-value",children:[((n=e.current_frequency_hz)==null?void 0:n.toFixed(1))||0," Hz"]})]}),c.jsxs("div",{className:"popup-metric",children:[c.jsx("span",{className:"popup-metric-label",children:"모터 열부하"}),c.jsxs("span",{className:"popup-metric-value",children:[e.motor_thermal_pct||0," %"]})]}),c.jsxs("div",{className:"popup-metric",children:[c.jsx("span",{className:"popup-metric-label",children:"인버터 열부하"}),c.jsxs("span",{className:"popup-metric-value",children:[e.inverter_thermal_pct||0," %"]})]}),c.jsxs("div",{className:"popup-metric",children:[c.jsx("span",{className:"popup-metric-label",children:"방열판 온도"}),c.jsxs("span",{className:"popup-metric-value",children:[e.heatsink_temperature_c||0," °C"]})]}),c.jsxs("div",{className:"popup-metric",children:[c.jsx("span",{className:"popup-metric-label",children:"모터 전류"}),c.jsxs("span",{className:"popup-metric-value",children:[((r=e.output_current_a)==null?void 0:r.toFixed(1))||0," A"]})]}),c.jsxs("div",{className:"popup-metric",children:[c.jsx("span",{className:"popup-metric-label",children:"DC 링크 전압"}),c.jsxs("span",{className:"popup-metric-value",children:[e.dc_bus_voltage_v||0," V"]})]}),c.jsxs("div",{className:"popup-metric",children:[c.jsx("span",{className:"popup-metric-label",children:"운전 시간"}),c.jsxs("span",{className:"popup-metric-value",children:[e.cumulative_runtime_hours||0," h"]})]}),c.jsxs("div",{className:"popup-metric",children:[c.jsx("span",{className:"popup-metric-label",children:"기동 횟수"}),c.jsxs("span",{className:"popup-metric-value",children:[e.num_starts||0," 회"]})]})]})]}),c.jsxs("div",{className:"popup-section",children:[c.jsx("h4",{children:"⚡ 3상 전류 상태"}),c.jsxs("div",{className:"popup-metrics-grid",children:[c.jsxs("div",{className:"popup-metric",children:[c.jsx("span",{className:"popup-metric-label",children:"U상 전류"}),c.jsxs("span",{className:"popup-metric-value",children:[((i=e.phase_u_current)==null?void 0:i.toFixed(1))||0," A"]})]}),c.jsxs("div",{className:"popup-metric",children:[c.jsx("span",{className:"popup-metric-label",children:"V상 전류"}),c.jsxs("span",{className:"popup-metric-value",children:[((a=e.phase_v_current)==null?void 0:a.toFixed(1))||0," A"]})]}),c.jsxs("div",{className:"popup-metric",children:[c.jsx("span",{className:"popup-metric-label",children:"W상 전류"}),c.jsxs("span",{className:"popup-metric-value",children:[((l=e.phase_w_current)==null?void 0:l.toFixed(1))||0," A"]})]}),c.jsxs("div",{className:"popup-metric",children:[c.jsx("span",{className:"popup-metric-label",children:"불평형률"}),c.jsxs("span",{className:"popup-metric-value",children:[((o=e.current_imbalance_pct)==null?void 0:o.toFixed(1))||0," %"]})]})]})]}),c.jsxs("div",{className:"popup-section",children:[c.jsx("h4",{children:"🔮 예측 분석"}),c.jsxs("div",{className:"popup-metrics-grid",children:[c.jsxs("div",{className:"popup-metric",children:[c.jsx("span",{className:"popup-metric-label",children:"30분 후 예측 온도"}),c.jsxs("span",{className:"popup-metric-value",children:[((s=e.predicted_temp_30min)==null?void 0:s.toFixed(1))||"-"," °C"]})]}),c.jsxs("div",{className:"popup-metric",children:[c.jsx("span",{className:"popup-metric-label",children:"온도 상승률"}),c.jsxs("span",{className:"popup-metric-value",children:[((u=e.temp_rise_rate)==null?void 0:u.toFixed(3))||"-"," °C/min"]})]}),c.jsxs("div",{className:"popup-metric",children:[c.jsx("span",{className:"popup-metric-label",children:"온도 트렌드"}),c.jsx("span",{className:"popup-metric-value",children:CX(e.temp_trend)})]}),c.jsxs("div",{className:"popup-metric",children:[c.jsx("span",{className:"popup-metric-label",children:"이상 점수"}),c.jsx("span",{className:"popup-metric-value",children:((f=e.anomaly_score)==null?void 0:f.toFixed(1))||"-"})]}),c.jsxs("div",{className:"popup-metric",children:[c.jsx("span",{className:"popup-metric-label",children:"수명 잔여율"}),c.jsxs("span",{className:"popup-metric-value",children:[((d=e.remaining_life_percent)==null?void 0:d.toFixed(1))||"-"," %"]})]}),c.jsxs("div",{className:"popup-metric",children:[c.jsx("span",{className:"popup-metric-label",children:"정비 예상"}),c.jsx("span",{className:"popup-metric-value",children:e.estimated_days_to_maintenance?`${e.estimated_days_to_maintenance}일 후`:"-"})]})]})]}),e.anomaly_patterns&&e.anomaly_patterns.length>0&&c.jsxs("div",{className:"popup-section",children:[c.jsx("h4",{children:"⚠️ 이상 패턴"}),c.jsx("div",{className:"popup-anomaly-patterns",children:e.anomaly_patterns.map((p,h)=>c.jsxs("div",{className:"popup-anomaly-item",children:["🔴 ",p]},h))})]})]})]})}):null}),MX=()=>{const[e,t]=N.useState("health"),[n,r]=N.useState(null),[i,a]=N.useState(!0),[l,o]=N.useState(null),[s,u]=N.useState([]),[f,d]=N.useState(null),[p,h]=N.useState("all"),[b,v]=N.useState(null),w=async()=>{try{const P=await(await fetch("http://localhost:8001/api/vfd/diagnostics")).json();P.success&&P.data&&P.data.vfd_diagnostics?(r(P.data),o(null)):P.error==="PLC 연결 안됨"?(r(null),o("PLC 연결 안됨 - VFD 진단 데이터를 표시할 수 없습니다.")):o("VFD 진단 데이터를 사용할 수 없습니다.")}catch(A){o(`데이터 로드 실패: ${A.message}`)}finally{a(!1)}},y=async()=>{try{const A=p!=="all"?`?status=${p}&limit=100`:"?limit=100",$=await(await fetch(`http://localhost:8001/api/vfd/anomalies/history${A}`)).json();$.success&&$.data&&u($.data)}catch(A){console.error("이상 징후 히스토리 로드 실패:",A)}},m=async()=>{try{const P=await(await fetch("http://localhost:8001/api/vfd/anomalies/statistics?days=30")).json();P.success&&P.data&&d(P.data)}catch(A){console.error("이상 징후 통계 로드 실패:",A)}},g=async A=>{try{(await(await fetch(`http://localhost:8001/api/vfd/acknowledge/${A}`,{method:"POST"})).json()).success&&w()}catch(P){console.error("확인 처리 실패:",P)}},S=async A=>{try{(await(await fetch(`http://localhost:8001/api/vfd/clear/${A}`,{method:"POST"})).json()).success&&w()}catch(P){console.error("해제 처리 실패:",P)}};N.useEffect(()=>{w(),y(),m();const A=setInterval(w,2e3),P=setInterval(y,1e4);return()=>{clearInterval(A),clearInterval(P)}},[]),N.useEffect(()=>{y()},[p]);const x=A=>({SW_PUMP_1:"SWP1",SW_PUMP_2:"SWP2",SW_PUMP_3:"SWP3",FW_PUMP_1:"FWP1",FW_PUMP_2:"FWP2",FW_PUMP_3:"FWP3",ER_FAN_1:"FAN1",ER_FAN_2:"FAN2",ER_FAN_3:"FAN3",ER_FAN_4:"FAN4"})[A]||A,k=A=>A>=98?"#10b981":A>=95?"#9e9e9e":A>=92?"#ff9800":"#f44336",_=N.useCallback(()=>{v(null)},[]);if(i)return c.jsx("div",{className:"vfd-diagnostics-container",children:"로딩 중..."});if(l)return c.jsx("div",{className:"vfd-diagnostics-container",children:c.jsx("div",{className:"error-message",children:l})});if(!n||!n.vfd_diagnostics)return c.jsx("div",{className:"vfd-diagnostics-container",children:"데이터가 없습니다."});const j=Object.entries(n.vfd_diagnostics).map(([A,P])=>({id:A,name:x(A),healthScore:P.health_score||100,severityLevel:P.severity_level||0,...P})),O=j.filter(A=>A.severityLevel>0&&!A.is_cleared),M=()=>c.jsxs("div",{className:"health-status-tab",children:[c.jsxs("section",{className:"vfd-status-cards",children:[c.jsx("h3",{children:"📊 VFD 건강도 현황 (4단계 중증도)"}),c.jsxs("div",{className:"severity-legend",style:{display:"flex",gap:"25px",marginBottom:"20px",padding:"12px 20px",background:"#0f172a",borderRadius:"6px",fontSize:"18px",fontWeight:"500"},children:[c.jsx("span",{style:{color:"#10b981"},children:"● Level 0: 정상 (0-2점)"}),c.jsx("span",{style:{color:"#9e9e9e"},children:"● Level 1: 주의 (3-5점)"}),c.jsx("span",{style:{color:"#ff9800"},children:"● Level 2: 경고 (6-8점)"}),c.jsx("span",{style:{color:"#f44336"},children:"● Level 3: 위험 (9점+)"})]}),c.jsx("div",{className:"vfd-grid",children:j.map(A=>{const P=ys(A.severityLevel),$=cp(A.severityLevel),C=I=>I.startsWith("SWP")?"#3b82f6":I.startsWith("FWP")?"#10b981":I.startsWith("FAN")?"#a855f7":"#334155";return c.jsxs("div",{className:"vfd-card clickable",style:{borderLeft:`4px solid ${P}`,border:`2px solid ${C(A.name)}`,borderLeftWidth:"4px",borderLeftColor:P},onClick:()=>v(A),children:[c.jsx("h4",{children:A.name}),c.jsx("div",{className:"health-score",style:{color:P},children:A.healthScore}),c.jsx("div",{className:"health-label",children:"건강도 점수"}),c.jsxs("div",{className:"status-badge",style:{color:P},children:[$," (Lv.",A.severityLevel,")"]}),c.jsxs("div",{style:{marginTop:"10px",fontSize:"15px",color:"#94a3b8",display:"flex",flexDirection:"column",gap:"5px"},children:[c.jsxs("span",{children:["모터열: ",A.motor_thermal_pct||0,"%"]}),c.jsxs("span",{children:["히트싱크: ",A.heatsink_temperature_c||0,"°C"]})]}),c.jsx("div",{className:"click-hint",children:"클릭하여 상세보기"})]},A.id)})})]}),c.jsxs("div",{className:"bottom-sections",children:[c.jsxs("section",{className:"anomaly-warnings",children:[c.jsx("h3",{children:"⚠️ 이상 징후 탐지"}),O.length>0?c.jsx("div",{className:"warning-list",children:O.map(A=>{const P=A.severityLevel===1?"warning":A.severityLevel===2?"error":"critical",$=A.severityLevel===1?"⚠️":A.severityLevel===2?"🟠":"🔴",C=A.is_acknowledged||!1;return c.jsx("div",{className:`warning-item ${P}`,style:C?{backgroundColor:"rgba(255, 193, 7, 0.15)",borderLeftColor:"#ffc107"}:{},children:c.jsxs("div",{style:{display:"flex",justifyContent:"space-between",alignItems:"center"},children:[c.jsxs("div",{children:[$," ",c.jsx("strong",{children:A.name}),": 건강도 ",A.healthScore," (",cp(A.severityLevel)," Lv.",A.severityLevel,") - ",A.recommendation,C&&c.jsx("span",{style:{marginLeft:"10px",color:"#ffc107"},children:"✓ 확인됨"})]}),c.jsxs("div",{style:{display:"flex",gap:"10px"},children:[!C&&c.jsx("button",{onClick:()=>g(A.id),style:{padding:"6px 12px",backgroundColor:"#3b82f6",color:"white",border:"none",borderRadius:"4px",cursor:"pointer"},children:"확인"}),C&&c.jsx("button",{onClick:()=>S(A.id),style:{padding:"6px 12px",backgroundColor:"#6b7280",color:"white",border:"none",borderRadius:"4px",cursor:"pointer"},children:"해제"})]})]})},A.id)})}):c.jsx("div",{className:"success-message",children:"✅ 모든 VFD가 정상 상태입니다."})]}),c.jsxs("section",{className:"maintenance-section",children:[c.jsx("h3",{children:"🔮 예측 유지보수"}),O.length>0?c.jsx("div",{className:"maintenance-table",children:c.jsxs("table",{children:[c.jsx("thead",{children:c.jsxs("tr",{children:[c.jsx("th",{children:"장비명"}),c.jsx("th",{children:"건강도"}),c.jsx("th",{children:"예상 정비"}),c.jsx("th",{children:"권장 조치"}),c.jsx("th",{children:"우선순위"})]})}),c.jsx("tbody",{children:O.map(A=>{const P=A.maintenance_priority===5?"즉시 점검":A.maintenance_priority===3?"1주일 내 점검":A.maintenance_priority===1?"정기 점검":"정상";return c.jsxs("tr",{children:[c.jsx("td",{children:A.name}),c.jsx("td",{style:{color:k(A.healthScore)},children:A.healthScore}),c.jsx("td",{children:A.estimated_days_to_maintenance?`${A.estimated_days_to_maintenance}일 후`:"-"}),c.jsx("td",{children:A.recommendation}),c.jsx("td",{children:P})]},A.id)})})]})}):c.jsx("div",{className:"info-message",children:"✅ 예정된 유지보수 항목이 없습니다."})]})]})]}),E=()=>{var A,P,$;return c.jsxs("div",{className:"history-tab",children:[f&&c.jsxs("div",{className:"history-stats",children:[c.jsxs("div",{className:"stat-card",children:[c.jsx("div",{className:"stat-value",children:f.total_anomalies||0}),c.jsx("div",{className:"stat-label",children:"최근 30일 발생"})]}),c.jsxs("div",{className:"stat-card",children:[c.jsx("div",{className:"stat-value",style:{color:"#f44336"},children:f.active_anomalies||0}),c.jsx("div",{className:"stat-label",children:"활성 이상 징후"})]}),c.jsxs("div",{className:"stat-card",children:[c.jsx("div",{className:"stat-value",style:{color:"#9e9e9e"},children:((A=f.by_severity)==null?void 0:A[1])||0}),c.jsx("div",{className:"stat-label",children:"주의 (Lv.1)"})]}),c.jsxs("div",{className:"stat-card",children:[c.jsx("div",{className:"stat-value",style:{color:"#ff9800"},children:((P=f.by_severity)==null?void 0:P[2])||0}),c.jsx("div",{className:"stat-label",children:"경고 (Lv.2)"})]}),c.jsxs("div",{className:"stat-card",children:[c.jsx("div",{className:"stat-value",style:{color:"#f44336"},children:(($=f.by_severity)==null?void 0:$[3])||0}),c.jsx("div",{className:"stat-label",children:"위험 (Lv.3)"})]})]}),c.jsx("div",{className:"history-filters",children:["all","ACTIVE","ACKNOWLEDGED","CLEARED","AUTO_CLEARED"].map(C=>c.jsx("button",{onClick:()=>h(C),className:`filter-btn ${p===C?"active":""}`,children:C==="all"?"전체":C==="ACTIVE"?"활성":C==="ACKNOWLEDGED"?"확인됨":C==="CLEARED"?"해제됨":"자동해제"},C))}),c.jsx("div",{className:"history-table-container",children:c.jsxs("table",{className:"history-table",children:[c.jsx("thead",{children:c.jsxs("tr",{children:[c.jsx("th",{style:{width:"180px"},children:"발생 시간"}),c.jsx("th",{style:{width:"100px"},children:"장비"}),c.jsx("th",{style:{width:"100px"},children:"중증도"}),c.jsx("th",{style:{width:"80px"},children:"건강도"}),c.jsx("th",{style:{width:"100px"},children:"상태"}),c.jsx("th",{children:"권고사항"}),c.jsx("th",{style:{width:"100px"},children:"지속시간"})]})}),c.jsx("tbody",{children:s.length>0?s.map((C,I)=>{const L=C.severity_level===1?"#9e9e9e":C.severity_level===2?"#ff9800":"#f44336",T=C.status==="ACTIVE"?"#f44336":C.status==="ACKNOWLEDGED"?"#ffc107":C.status==="CLEARED"?"#10b981":"#60a5fa",D=C.status==="ACTIVE"?"활성":C.status==="ACKNOWLEDGED"?"확인됨":C.status==="CLEARED"?"해제됨":"자동해제";return c.jsxs("tr",{children:[c.jsx("td",{children:new Date(C.occurred_at).toLocaleString("ko-KR")}),c.jsx("td",{children:x(C.equipment_id)}),c.jsxs("td",{style:{color:L},children:["Lv.",C.severity_level," (",C.severity_name,")"]}),c.jsx("td",{style:{color:L},children:C.health_score}),c.jsx("td",{children:c.jsx("span",{className:"status-tag",style:{background:`${T}20`,color:T},children:D})}),c.jsx("td",{className:"recommendation-cell",children:C.recommendations||"-"}),c.jsx("td",{children:C.duration_minutes?`${C.duration_minutes}분`:"-"})]},C.anomaly_id||I)}):c.jsx("tr",{children:c.jsx("td",{colSpan:"7",className:"empty-message",children:"이상 징후 히스토리가 없습니다."})})})]})})]})};return c.jsxs("div",{className:"vfd-diagnostics-container",children:[c.jsxs("div",{className:"sub-tabs",children:[c.jsx("button",{className:`sub-tab ${e==="health"?"active":""}`,onClick:()=>t("health"),children:"📊 VFD 건강도 현황"}),c.jsx("button",{className:`sub-tab ${e==="history"?"active":""}`,onClick:()=>t("history"),children:"📜 이상징후 히스토리"})]}),c.jsx("div",{className:"tab-content",children:e==="health"?c.jsx(M,{}):c.jsx(E,{})}),b&&c.jsx(EX,{vfd:b,onClose:_})]})};function TX({sensors:e={},pumps:t=[],fans:n=[],essData:r=null}){var d,p,h,b,v,w,y;const i=t.slice(0,3),a=t.slice(3,6),l=((p=(d=r==null?void 0:r.groups)==null?void 0:d.TOTAL)==null?void 0:p.saved_kwh)||0,o=((b=(h=r==null?void 0:r.groups)==null?void 0:h.TOTAL)==null?void 0:b.ess_hours)||0,s=((w=(v=r==null?void 0:r.groups)==null?void 0:v.TOTAL)==null?void 0:w.savings_rate)||0,u=t.filter(m=>m.running).length,f=n.filter(m=>m.running_fwd||m.running_bwd).length;return c.jsxs("div",{className:"system-overview-compact",children:[c.jsxs("div",{className:"stats-row",children:[c.jsxs("div",{className:"stat-item",children:[c.jsx("span",{className:"stat-icon",children:"⚡"}),c.jsxs("div",{className:"stat-info",children:[c.jsx("span",{className:"stat-label",children:"총 절감 전력"}),c.jsxs("span",{className:"stat-value",children:[l.toLocaleString()," kWh"]})]})]}),c.jsxs("div",{className:"stat-item",children:[c.jsx("span",{className:"stat-icon",children:"⏱️"}),c.jsxs("div",{className:"stat-info",children:[c.jsx("span",{className:"stat-label",children:"ESS 운전 시간"}),c.jsxs("span",{className:"stat-value",children:[o.toLocaleString()," h"]})]})]}),c.jsxs("div",{className:"stat-item",children:[c.jsx("span",{className:"stat-icon",children:"📊"}),c.jsxs("div",{className:"stat-info",children:[c.jsx("span",{className:"stat-label",children:"평균 절감률"}),c.jsxs("span",{className:"stat-value",children:[s.toFixed(1),"%"]})]})]}),c.jsxs("div",{className:"stat-item",children:[c.jsx("span",{className:"stat-icon",children:"🔄"}),c.jsxs("div",{className:"stat-info",children:[c.jsx("span",{className:"stat-label",children:"운전 중인 펌프"}),c.jsxs("span",{className:"stat-value",children:[u," / ",t.length]})]})]}),c.jsxs("div",{className:"stat-item",children:[c.jsx("span",{className:"stat-icon",children:"🌀"}),c.jsxs("div",{className:"stat-info",children:[c.jsx("span",{className:"stat-label",children:"운전 중인 팬"}),c.jsxs("span",{className:"stat-value",children:[f," / ",n.length]})]})]}),c.jsxs("div",{className:"stat-item",children:[c.jsx("span",{className:"stat-icon",children:"🔥"}),c.jsxs("div",{className:"stat-info",children:[c.jsx("span",{className:"stat-label",children:"M/E 부하"}),c.jsxs("span",{className:"stat-value",children:[((y=e.PU1)==null?void 0:y.toFixed(1))||0,"%"]})]})]})]}),c.jsxs("div",{className:"equipment-row",children:[c.jsxs("div",{className:"equipment-group",children:[c.jsxs("h3",{children:["🌊 해수 펌프 (SWP) ",c.jsx("span",{className:"rated-power",children:"모터 정격 132 kW"})]}),c.jsx("div",{className:"equipment-cards",children:i.map((m,g)=>c.jsx(fy,{pump:m},g))})]}),c.jsxs("div",{className:"equipment-group",children:[c.jsxs("h3",{children:["💧 청수 펌프 (FWP) ",c.jsx("span",{className:"rated-power",children:"모터 정격 75 kW"})]}),c.jsx("div",{className:"equipment-cards",children:a.map((m,g)=>c.jsx(fy,{pump:m},g))})]})]}),c.jsxs("div",{className:"fan-row",children:[c.jsxs("h3",{children:["🌀 Engine Room 팬 (E/R Fan) ",c.jsx("span",{className:"rated-power",children:"모터 정격 54.3 kW"})]}),c.jsx("div",{className:"fan-cards",children:n.map((m,g)=>c.jsx($X,{fan:m},g))})]})]})}function fy({pump:e}){var a;const t=e.running,n=()=>e.auto_mode&&e.vfd_mode?{text:"ESS",class:"ess-mode"}:e.auto_mode&&!e.vfd_mode?{text:"A/B",class:"auto-bypass-mode"}:!e.auto_mode&&e.vfd_mode?{text:"M/V",class:"manual-vfd-mode"}:{text:"M/B",class:"manual-bypass-mode"},r=l=>l&&l.startsWith("SWP")?"#3b82f6":l&&l.startsWith("FWP")?"#10b981":"#334155",i=n();return c.jsxs("div",{className:`compact-card ${t?"running":"stopped"}`,style:{border:`2px solid ${r(e.name)}`},children:[c.jsxs("div",{className:"compact-header",children:[c.jsxs("span",{className:"compact-name",children:[e.name,c.jsx("span",{className:`impeller-icon ${t?"running":"stopped"}`,children:c.jsxs("svg",{viewBox:"0 0 24 24",width:"40",height:"40",children:[c.jsx("circle",{cx:"12",cy:"12",r:"3",fill:"currentColor"}),c.jsx("path",{d:"M12 2 C14 6 16 8 12 12 C8 8 10 6 12 2",fill:"currentColor"}),c.jsx("path",{d:"M22 12 C18 14 16 16 12 12 C16 8 18 10 22 12",fill:"currentColor"}),c.jsx("path",{d:"M12 22 C10 18 8 16 12 12 C16 16 14 18 12 22",fill:"currentColor"}),c.jsx("path",{d:"M2 12 C6 10 8 8 12 12 C8 16 6 14 2 12",fill:"currentColor"})]})})]}),c.jsx("span",{className:`compact-mode ${i.class}`,children:i.text}),c.jsx("span",{className:`compact-status ${t?"on":"off"}`,children:t?"●":"○"})]}),c.jsxs("div",{className:"compact-body",children:[c.jsxs("div",{className:"compact-row",children:[c.jsx("span",{children:"주파수"}),c.jsxs("span",{className:"value",children:[((a=e.frequency)==null?void 0:a.toFixed(1))||0," Hz"]})]}),c.jsxs("div",{className:"compact-row",children:[c.jsx("span",{children:"전력"}),c.jsxs("span",{className:"value",children:[e.power_kw||0," kW"]})]}),c.jsxs("div",{className:"compact-row highlight",children:[c.jsx("span",{children:"절감률"}),c.jsxs("span",{className:"value",children:[e.saved_ratio||0,"%"]})]})]})]})}function $X({fan:e}){var a;const t=e.running_fwd||e.running_bwd,r=e.auto_mode&&e.vfd_mode?{text:"ESS",class:"ess-mode"}:e.auto_mode&&!e.vfd_mode?{text:"A/B",class:"auto-bypass-mode"}:!e.auto_mode&&e.vfd_mode?{text:"M/V",class:"manual-vfd-mode"}:{text:"M/B",class:"manual-bypass-mode"};return c.jsxs("div",{className:`compact-card ${t?"running":"stopped"}`,style:{border:"2px solid #a855f7"},children:[c.jsxs("div",{className:"compact-header",children:[c.jsxs("span",{className:"compact-name",children:[e.name,c.jsx("span",{className:`fan-icon ${e.running_fwd?"running-fwd":e.running_bwd?"running-bwd":"stopped"}`,children:c.jsxs("svg",{viewBox:"0 0 24 24",width:"40",height:"40",children:[c.jsx("circle",{cx:"12",cy:"12",r:"2.5",fill:"currentColor"}),c.jsx("path",{d:"M12 3 C12 3 15 7 15 9 C15 11 13 12 12 12 C11 12 9 11 9 9 C9 7 12 3 12 3",fill:"currentColor"}),c.jsx("path",{d:"M21 12 C21 12 17 15 15 15 C13 15 12 13 12 12 C12 11 13 9 15 9 C17 9 21 12 21 12",fill:"currentColor"}),c.jsx("path",{d:"M12 21 C12 21 9 17 9 15 C9 13 11 12 12 12 C13 12 15 13 15 15 C15 17 12 21 12 21",fill:"currentColor"}),c.jsx("path",{d:"M3 12 C3 12 7 9 9 9 C11 9 12 11 12 12 C12 13 11 15 9 15 C7 15 3 12 3 12",fill:"currentColor"})]})})]}),c.jsx("span",{className:`compact-mode ${r.class}`,children:r.text}),c.jsx("span",{className:`compact-status ${t?"on":"off"}`,children:t?"●":"○"})]}),c.jsxs("div",{className:"compact-body",children:[c.jsxs("div",{className:"compact-row",children:[c.jsx("span",{children:"주파수"}),c.jsxs("span",{className:"value",children:[((a=e.frequency)==null?void 0:a.toFixed(1))||0," Hz"]})]}),c.jsxs("div",{className:"compact-row",children:[c.jsx("span",{children:"전력"}),c.jsxs("span",{className:"value",children:[e.power_kw||0," kW"]})]}),c.jsxs("div",{className:"compact-row highlight",children:[c.jsx("span",{children:"절감률"}),c.jsxs("span",{className:"value",children:[e.saved_ratio||0,"%"]})]})]})]})}function zX(){return c.jsx("div",{className:"home-container",children:c.jsx("img",{src:"/home_page.png",alt:"ESS HMI Home",className:"home-image"})})}function IX({onLoginSuccess:e,isPopup:t=!1}){const{login:n}=eu(),[r,i]=N.useState(""),[a,l]=N.useState(""),[o,s]=N.useState(""),[u,f]=N.useState(!1),[d,p]=N.useState(!1),[h,b]=N.useState(null),v=N.useRef(null),w=N.useRef(null),y=async x=>{x.preventDefault(),s(""),f(!0),p(!1);const k=await n(r,a);k.success?e&&e():s(k.message),f(!1)},m=x=>{b(x),p(!0)},g=x=>{var j;if(!h)return;const k=h==="username"?i:l,_=h==="username"?r:a;x==="BACKSPACE"?k(_.slice(0,-1)):x==="CLEAR"?k(""):x==="ENTER"?h==="username"?(b("password"),(j=w.current)==null||j.focus()):(p(!1),r&&a&&y(new Event("submit"))):k(_+x)},S=()=>{p(!1),b(null)};return c.jsxs("div",{className:`login-container ${t?"login-popup-mode":""}`,children:[c.jsxs("div",{className:`login-box ${d?"keyboard-active":""}`,children:[t&&c.jsx("button",{className:"login-close-btn",onClick:e,"aria-label":"닫기",children:"✕"}),c.jsxs("div",{className:"login-header",children:[c.jsx("h1",{children:t?"로그인":"ESS 냉각시스템 HMI"}),!t&&c.jsx("p",{children:"Energy Saving System"})]}),c.jsxs("form",{onSubmit:y,className:"login-form",children:[c.jsxs("div",{className:"form-group",children:[c.jsx("label",{htmlFor:"username",children:"사용자 ID"}),c.jsx("input",{ref:v,type:"text",id:"username",value:r,onChange:x=>i(x.target.value),onFocus:()=>m("username"),placeholder:"터치하여 입력",autoComplete:"off",disabled:u,required:!0,className:h==="username"?"input-active":"",readOnly:!0})]}),c.jsxs("div",{className:"form-group",children:[c.jsx("label",{htmlFor:"password",children:"비밀번호"}),c.jsx("input",{ref:w,type:"password",id:"password",value:a,onChange:x=>l(x.target.value),onFocus:()=>m("password"),placeholder:"터치하여 입력",autoComplete:"off",disabled:u,required:!0,className:h==="password"?"input-active":"",readOnly:!0})]}),o&&c.jsx("div",{className:"error-message",children:o}),c.jsx("button",{type:"submit",className:"login-button",disabled:u,children:u?"로그인 중...":"로그인"})]}),c.jsxs("div",{className:"login-footer",children:[c.jsx("p",{children:"기본 계정 안내"}),c.jsxs("ul",{children:[c.jsxs("li",{children:[c.jsx("strong",{children:"관리자:"})," admin / admin123"]}),c.jsxs("li",{children:[c.jsx("strong",{children:"운전자:"})," operator / operator123"]})]})]})]}),d&&c.jsx(Ov,{onKeyPress:g,onClose:S,isPassword:h==="password"})]})}function DX(){const{isAuthenticated:e,user:t,canAccessTab:n,logout:r,loading:i}=eu(),[a,l]=N.useState({}),[o,s]=N.useState([]),[u,f]=N.useState([]),[d,p]=N.useState([]),[h,b]=N.useState([]),[v,w]=N.useState({}),[y,m]=N.useState(null),[g,S]=N.useState(!1),[x,k]=N.useState(!1),[_,j]=N.useState(!1),[O,M]=N.useState(!1),[E,A]=N.useState(!0),[P,$]=N.useState(null),[C,I]=N.useState("home"),[L,T]=N.useState(null),[D,R]=N.useState(!1);N.useRef(new Set);const H=N.useRef(new Set);N.useRef(!0);const B=N.useRef(null),K=N.useRef([]);N.useEffect(()=>{const Z=new(window.AudioContext||window.webkitAudioContext);console.log("🎵 [App] AudioContext 생성됨, 초기 상태:",Z.state),(async()=>{try{await Z.resume(),console.log("🔊 [App] AudioContext 즉시 활성화 시도:",Z.state)}catch{console.log("⚠️ [App] AudioContext 즉시 활성화 실패, 사용자 인터랙션 필요")}})(),T(Z);const ne=async()=>{console.log("👆 [App] 사용자 인터랙션 감지, AudioContext 상태:",Z.state),Z.state==="suspended"&&(await Z.resume(),console.log("🔊 [App] AudioContext 활성화됨"),h.some(le=>!le.acknowledged)&&!B.current&&(console.log("🔔 [App] AudioContext 활성화 후 경고음 시작"),pe()))};return document.addEventListener("click",ne,{once:!0}),document.addEventListener("keydown",ne,{once:!0}),()=>{document.removeEventListener("click",ne),document.removeEventListener("keydown",ne),Z&&Z.close()}},[]),N.useEffect(()=>(He(),()=>{P&&P.close()}),[]);const te=async()=>{if(!(!L||D))try{L.state==="suspended"&&await L.resume();const he=K.current.filter(Ie=>!Ie.acknowledged),ne=he.some(Ie=>Ie.level==="critical"),le=he.some(Ie=>Ie.level==="warning");let Re=1;ne?Re=3:le&&(Re=2),console.log(`🔊 [App] 경고음 재생: ${Re}번 (Critical: ${ne}, Warning: ${le}, 총 미확인: ${he.length})`);for(let Ie=0;Ie<Re;Ie++)setTimeout(()=>{const be=L.createOscillator(),Pr=L.createGain();be.connect(Pr),Pr.connect(L.destination),be.frequency.value=880,be.type="sine",Pr.gain.setValueAtTime(.3,L.currentTime),Pr.gain.exponentialRampToValueAtTime(.01,L.currentTime+.15),be.start(L.currentTime),be.stop(L.currentTime+.15)},Ie*200)}catch(Z){console.error("❌ [App] 경고음 재생 오류:",Z)}},pe=()=>{console.log("🔊 [App] 연속 경고음 시작"),B.current&&clearInterval(B.current),te(),B.current=setInterval(()=>{te()},2e3)},xe=()=>{console.log("🔇 [App] 연속 경고음 정지"),B.current&&(clearInterval(B.current),B.current=null)},st=()=>{R(!D),D?h.some(he=>!he.acknowledged)&&pe():xe()};N.useEffect(()=>{K.current=h},[h]),N.useEffect(()=>{const Z=h.some(le=>!le.acknowledged),he=new Set(h.filter(le=>!le.acknowledged&&le.level==="critical").map(le=>le.id)),ne=Array.from(he).filter(le=>!H.current.has(le));return console.log("🔍 [App] 알람 상태 체크:",{총알람:h.length,미확인알람:Z,현재위험알람:he.size,새위험알람:ne.length,muted:D,audioContext:!!L,intervalActive:!!B.current}),console.log("📋 [App] 알람 목록:",h.map(le=>({id:le.id,tag:le.tag,level:le.level,message:le.message,acknowledged:le.acknowledged}))),ne.length>0&&D&&(console.log("🔴 [App] 새로운 위험 알람 발생 - 음소거 자동 해제",ne),R(!1)),H.current=he,Z&&L&&!D?B.current||(console.log("🔊 [App] 미확인 알람 감지 - 연속 경고음 시작"),pe()):B.current&&(console.log("✅ [App] 모든 알람 확인됨 - 경고음 정지"),xe()),()=>{B.current&&xe()}},[h,L,D]);const He=()=>{const he=`${window.location.protocol==="https:"?"wss:":"ws:"}//${window.location.hostname}:8001/ws`;console.log("WebSocket 연결 시도:",he);const ne=new WebSocket(he);ne.onopen=()=>{console.log("✅ WebSocket 연결 성공"),S(!0)},ne.onmessage=le=>{var Re,Ie;try{const be=JSON.parse(le.data);be.type==="realtime_update"&&(l(be.sensors),p(be.equipment||[]),s(be.pumps||((Re=be.equipment)==null?void 0:Re.slice(0,6))||[]),f(((Ie=be.equipment)==null?void 0:Ie.slice(6,10))||[]),b(be.alarms||[]),w(be.alarm_summary||{}),k(be.plc_connected||!1),j(be.edge_connected!==!1),M(be.edge_blocked||!1),A(be.fallback_mode!==!1),m(be.ess_data||null))}catch(be){console.error("WebSocket 메시지 파싱 오류:",be)}},ne.onerror=le=>{console.error("❌ WebSocket 오류:",le),S(!1),k(!1),j(!1),A(!0)},ne.onclose=()=>{console.log("WebSocket 연결 종료, 5초 후 재연결..."),S(!1),k(!1),j(!1),A(!0),setTimeout(He,5e3)},$(ne)},V=async(Z,he)=>{try{console.log(`🔧 장비 명령 전송 시도: equipment=${Z}, command=${he}`);const ne=await fetch("http://localhost:8001/api/equipment/command",{method:"POST",headers:{"Content-Type":"application/json"},body:JSON.stringify({equipment_name:Z,command:he})});if(console.log(`📡 응답 상태: ${ne.status}`),!ne.ok){const Re=await ne.text();return console.error("❌ HTTP 오류:",ne.status,Re),alert(`명령 전송 실패: ${ne.status}`),!1}const le=await ne.json();return console.log("📦 응답 데이터:",le),le.success?(console.log(`✅ ${Z} ${he} 명령 성공`),!0):(console.error("❌ 장비 명령 실패:",le),alert("명령 전송 실패"),!1)}catch(ne){return console.error("❌ 장비 명령 오류:",ne),alert(`오류 발생: ${ne.message}`),!1}},Q=async(Z,he)=>{const ne=["SWP1","SWP2","SWP3","FWP1","FWP2","FWP3"];return Z>=0&&Z<6?await V(ne[Z],he):!1},[ee,W]=N.useState(!1);if(i)return c.jsxs("div",{className:"app-loading",children:[c.jsx("div",{className:"loading-spinner"}),c.jsx("p",{children:"로딩 중..."})]});const Se=()=>{W(!1)},ie=["home","system_overview","dashboard","vfd_diagnostics","trend","history","alarm"],oe=Z=>e?n(Z):ie.includes(Z),Me={admin:"관리자",operator:"운전자"};return c.jsxs("div",{className:"app",children:[c.jsxs("header",{className:"app-header",children:[c.jsx("h1",{children:"🚢 ESS HMI - Energy Saving System"}),c.jsx("div",{className:"header-right",children:c.jsxs("div",{className:"status-indicators",children:[c.jsxs("div",{className:`status-indicator ${x?"connected":"disconnected"}`,children:[c.jsx("span",{className:"status-dot"}),c.jsx("span",{children:x?"PLC 연결됨":"PLC 연결 안됨"})]}),c.jsxs("div",{className:`status-indicator ${_?"connected":"disconnected"}`,children:[c.jsx("span",{className:"status-dot"}),c.jsx("span",{children:_?"Edge AI 연결됨":"Edge AI 연결 안됨"})]})]})})]}),c.jsxs("nav",{className:"tab-nav",children:[oe("home")&&c.jsx("button",{className:C==="home"?"active":"",onClick:()=>I("home"),children:"홈"}),oe("system_overview")&&c.jsx("button",{className:C==="system_overview"?"active":"",onClick:()=>I("system_overview"),children:"운전 현황"}),oe("dashboard")&&c.jsx("button",{className:C==="dashboard"?"active":"",onClick:()=>I("dashboard"),children:"에너지 절감 현황"}),oe("diagram")&&c.jsx("button",{className:C==="diagram"?"active":"",onClick:()=>I("diagram"),children:"냉각수 계통도"}),oe("fan_diagram")&&c.jsx("button",{className:C==="fan_diagram"?"active":"",onClick:()=>I("fan_diagram"),children:"E/R 환기 계통도"}),oe("advanced")&&c.jsx("button",{className:C==="advanced"?"active":"",onClick:()=>I("advanced"),children:"운전 제어"}),oe("vfd_diagnostics")&&c.jsx("button",{className:C==="vfd_diagnostics"?"active":"",onClick:()=>I("vfd_diagnostics"),children:"VFD 진단"}),oe("trend")&&c.jsx("button",{className:C==="trend"?"active":"",onClick:()=>I("trend"),children:"센서 트렌드"}),oe("settings")&&c.jsx("button",{className:C==="settings"?"active":"",onClick:()=>I("settings"),children:"설정"}),oe("history")&&c.jsx("button",{className:C==="history"?"active":"",onClick:()=>I("history"),children:"이력"}),oe("alarm")&&c.jsx("button",{className:`${C==="alarm"?"active":""} ${h.some(Z=>!Z.acknowledged)?"has-unack-alarms":""}`,onClick:()=>I("alarm"),children:"알람"}),c.jsx("div",{className:"nav-user-section",children:e?c.jsxs("div",{className:"nav-user-info",children:[c.jsx("span",{className:"nav-user-name",children:(t==null?void 0:t.display_name)||(t==null?void 0:t.username)}),c.jsxs("span",{className:"nav-user-role",children:["(",Me[t==null?void 0:t.role]||(t==null?void 0:t.role),")"]}),c.jsx("button",{className:"nav-logout-btn",onClick:r,children:"로그아웃"})]}):c.jsx("button",{className:"nav-login-btn",onClick:()=>W(!0),children:"로그인"})})]}),c.jsxs("main",{className:"app-content",children:[C==="home"&&c.jsx(zX,{}),C==="dashboard"&&c.jsx(jx,{sensors:a,equipment:d,pumps:o,fans:u}),C==="diagram"&&c.jsx($x,{sensors:a,equipment:d,pumps:o,fans:u,onCommand:V,onPumpCommand:Q}),C==="fan_diagram"&&c.jsx(Ix,{sensors:a,fans:u,equipment:d,onCommand:V}),C==="advanced"&&c.jsx(Kx,{equipment:d,pumps:o,fans:u,onCommand:V,onPumpCommand:Q}),C==="settings"&&c.jsx(Rx,{}),C==="trend"&&c.jsx(Dx,{sensors:a,equipment:d,pumps:o,fans:u}),C==="history"&&c.jsx(OX,{}),C==="alarm"&&c.jsx(Lx,{alarms:h,alarmSummary:v,alarmSoundMuted:D,onToggleMute:st}),C==="vfd_diagnostics"&&c.jsx(MX,{}),C==="system_overview"&&c.jsx(TX,{sensors:a,pumps:o,fans:u,essData:y})]}),c.jsxs("footer",{className:"app-footer",children:[c.jsx("span",{children:"© 2025 ESS HMI System"}),c.jsxs("span",{children:["마지막 업데이트: ",new Date().toLocaleTimeString("ko-KR")]})]}),ee&&c.jsx("div",{className:"login-popup-overlay",onClick:()=>W(!1),children:c.jsx("div",{className:"login-popup-content",onClick:Z=>Z.stopPropagation(),children:c.jsx(IX,{onLoginSuccess:Se,isPopup:!0})})})]})}function LX(){return c.jsx(Fx,{children:c.jsx(DX,{})})}Vd.createRoot(document.getElementById("root")).render(c.jsx(z.StrictMode,{children:c.jsx(LX,{})}));
