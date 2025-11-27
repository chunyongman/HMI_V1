(function(){const n=document.createElement("link").relList;if(n&&n.supports&&n.supports("modulepreload"))return;for(const i of document.querySelectorAll('link[rel="modulepreload"]'))l(i);new MutationObserver(i=>{for(const a of i)if(a.type==="childList")for(const s of a.addedNodes)s.tagName==="LINK"&&s.rel==="modulepreload"&&l(s)}).observe(document,{childList:!0,subtree:!0});function t(i){const a={};return i.integrity&&(a.integrity=i.integrity),i.referrerPolicy&&(a.referrerPolicy=i.referrerPolicy),i.crossOrigin==="use-credentials"?a.credentials="include":i.crossOrigin==="anonymous"?a.credentials="omit":a.credentials="same-origin",a}function l(i){if(i.ep)return;i.ep=!0;const a=t(i);fetch(i.href,a)}})();function bd(e){return e&&e.__esModule&&Object.prototype.hasOwnProperty.call(e,"default")?e.default:e}var ts={exports:{}},ui={},ls={exports:{}},B={};/**
 * @license React
 * react.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */var sl=Symbol.for("react.element"),Ed=Symbol.for("react.portal"),Pd=Symbol.for("react.fragment"),Fd=Symbol.for("react.strict_mode"),Ad=Symbol.for("react.profiler"),Td=Symbol.for("react.provider"),Id=Symbol.for("react.context"),Ld=Symbol.for("react.forward_ref"),Dd=Symbol.for("react.suspense"),Od=Symbol.for("react.memo"),$d=Symbol.for("react.lazy"),Va=Symbol.iterator;function Wd(e){return e===null||typeof e!="object"?null:(e=Va&&e[Va]||e["@@iterator"],typeof e=="function"?e:null)}var is={isMounted:function(){return!1},enqueueForceUpdate:function(){},enqueueReplaceState:function(){},enqueueSetState:function(){}},rs=Object.assign,as={};function vt(e,n,t){this.props=e,this.context=n,this.refs=as,this.updater=t||is}vt.prototype.isReactComponent={};vt.prototype.setState=function(e,n){if(typeof e!="object"&&typeof e!="function"&&e!=null)throw Error("setState(...): takes an object of state variables to update or a function which returns an object of state variables.");this.updater.enqueueSetState(this,e,n,"setState")};vt.prototype.forceUpdate=function(e){this.updater.enqueueForceUpdate(this,e,"forceUpdate")};function ss(){}ss.prototype=vt.prototype;function Zr(e,n,t){this.props=e,this.context=n,this.refs=as,this.updater=t||is}var Kr=Zr.prototype=new ss;Kr.constructor=Zr;rs(Kr,vt.prototype);Kr.isPureReactComponent=!0;var Ga=Array.isArray,os=Object.prototype.hasOwnProperty,Yr={current:null},ds={key:!0,ref:!0,__self:!0,__source:!0};function cs(e,n,t){var l,i={},a=null,s=null;if(n!=null)for(l in n.ref!==void 0&&(s=n.ref),n.key!==void 0&&(a=""+n.key),n)os.call(n,l)&&!ds.hasOwnProperty(l)&&(i[l]=n[l]);var o=arguments.length-2;if(o===1)i.children=t;else if(1<o){for(var c=Array(o),p=0;p<o;p++)c[p]=arguments[p+2];i.children=c}if(e&&e.defaultProps)for(l in o=e.defaultProps,o)i[l]===void 0&&(i[l]=o[l]);return{$$typeof:sl,type:e,key:a,ref:s,props:i,_owner:Yr.current}}function Rd(e,n){return{$$typeof:sl,type:e.type,key:n,ref:e.ref,props:e.props,_owner:e._owner}}function qr(e){return typeof e=="object"&&e!==null&&e.$$typeof===sl}function Bd(e){var n={"=":"=0",":":"=2"};return"$"+e.replace(/[=:]/g,function(t){return n[t]})}var Xa=/\/+/g;function Mi(e,n){return typeof e=="object"&&e!==null&&e.key!=null?Bd(""+e.key):n.toString(36)}function bl(e,n,t,l,i){var a=typeof e;(a==="undefined"||a==="boolean")&&(e=null);var s=!1;if(e===null)s=!0;else switch(a){case"string":case"number":s=!0;break;case"object":switch(e.$$typeof){case sl:case Ed:s=!0}}if(s)return s=e,i=i(s),e=l===""?"."+Mi(s,0):l,Ga(i)?(t="",e!=null&&(t=e.replace(Xa,"$&/")+"/"),bl(i,n,t,"",function(p){return p})):i!=null&&(qr(i)&&(i=Rd(i,t+(!i.key||s&&s.key===i.key?"":(""+i.key).replace(Xa,"$&/")+"/")+e)),n.push(i)),1;if(s=0,l=l===""?".":l+":",Ga(e))for(var o=0;o<e.length;o++){a=e[o];var c=l+Mi(a,o);s+=bl(a,n,t,c,i)}else if(c=Wd(e),typeof c=="function")for(e=c.call(e),o=0;!(a=e.next()).done;)a=a.value,c=l+Mi(a,o++),s+=bl(a,n,t,c,i);else if(a==="object")throw n=String(e),Error("Objects are not valid as a React child (found: "+(n==="[object Object]"?"object with keys {"+Object.keys(e).join(", ")+"}":n)+"). If you meant to render a collection of children, use an array instead.");return s}function fl(e,n,t){if(e==null)return e;var l=[],i=0;return bl(e,l,"","",function(a){return n.call(t,a,i++)}),l}function Hd(e){if(e._status===-1){var n=e._result;n=n(),n.then(function(t){(e._status===0||e._status===-1)&&(e._status=1,e._result=t)},function(t){(e._status===0||e._status===-1)&&(e._status=2,e._result=t)}),e._status===-1&&(e._status=0,e._result=n)}if(e._status===1)return e._result.default;throw e._result}var ge={current:null},El={transition:null},Ud={ReactCurrentDispatcher:ge,ReactCurrentBatchConfig:El,ReactCurrentOwner:Yr};function us(){throw Error("act(...) is not supported in production builds of React.")}B.Children={map:fl,forEach:function(e,n,t){fl(e,function(){n.apply(this,arguments)},t)},count:function(e){var n=0;return fl(e,function(){n++}),n},toArray:function(e){return fl(e,function(n){return n})||[]},only:function(e){if(!qr(e))throw Error("React.Children.only expected to receive a single React element child.");return e}};B.Component=vt;B.Fragment=Pd;B.Profiler=Ad;B.PureComponent=Zr;B.StrictMode=Fd;B.Suspense=Dd;B.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED=Ud;B.act=us;B.cloneElement=function(e,n,t){if(e==null)throw Error("React.cloneElement(...): The argument must be a React element, but you passed "+e+".");var l=rs({},e.props),i=e.key,a=e.ref,s=e._owner;if(n!=null){if(n.ref!==void 0&&(a=n.ref,s=Yr.current),n.key!==void 0&&(i=""+n.key),e.type&&e.type.defaultProps)var o=e.type.defaultProps;for(c in n)os.call(n,c)&&!ds.hasOwnProperty(c)&&(l[c]=n[c]===void 0&&o!==void 0?o[c]:n[c])}var c=arguments.length-2;if(c===1)l.children=t;else if(1<c){o=Array(c);for(var p=0;p<c;p++)o[p]=arguments[p+2];l.children=o}return{$$typeof:sl,type:e.type,key:i,ref:a,props:l,_owner:s}};B.createContext=function(e){return e={$$typeof:Id,_currentValue:e,_currentValue2:e,_threadCount:0,Provider:null,Consumer:null,_defaultValue:null,_globalName:null},e.Provider={$$typeof:Td,_context:e},e.Consumer=e};B.createElement=cs;B.createFactory=function(e){var n=cs.bind(null,e);return n.type=e,n};B.createRef=function(){return{current:null}};B.forwardRef=function(e){return{$$typeof:Ld,render:e}};B.isValidElement=qr;B.lazy=function(e){return{$$typeof:$d,_payload:{_status:-1,_result:e},_init:Hd}};B.memo=function(e,n){return{$$typeof:Od,type:e,compare:n===void 0?null:n}};B.startTransition=function(e){var n=El.transition;El.transition={};try{e()}finally{El.transition=n}};B.unstable_act=us;B.useCallback=function(e,n){return ge.current.useCallback(e,n)};B.useContext=function(e){return ge.current.useContext(e)};B.useDebugValue=function(){};B.useDeferredValue=function(e){return ge.current.useDeferredValue(e)};B.useEffect=function(e,n){return ge.current.useEffect(e,n)};B.useId=function(){return ge.current.useId()};B.useImperativeHandle=function(e,n,t){return ge.current.useImperativeHandle(e,n,t)};B.useInsertionEffect=function(e,n){return ge.current.useInsertionEffect(e,n)};B.useLayoutEffect=function(e,n){return ge.current.useLayoutEffect(e,n)};B.useMemo=function(e,n){return ge.current.useMemo(e,n)};B.useReducer=function(e,n,t){return ge.current.useReducer(e,n,t)};B.useRef=function(e){return ge.current.useRef(e)};B.useState=function(e){return ge.current.useState(e)};B.useSyncExternalStore=function(e,n,t){return ge.current.useSyncExternalStore(e,n,t)};B.useTransition=function(){return ge.current.useTransition()};B.version="18.3.1";ls.exports=B;var F=ls.exports;const Vd=bd(F);/**
 * @license React
 * react-jsx-runtime.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */var Gd=F,Xd=Symbol.for("react.element"),Qd=Symbol.for("react.fragment"),Zd=Object.prototype.hasOwnProperty,Kd=Gd.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED.ReactCurrentOwner,Yd={key:!0,ref:!0,__self:!0,__source:!0};function fs(e,n,t){var l,i={},a=null,s=null;t!==void 0&&(a=""+t),n.key!==void 0&&(a=""+n.key),n.ref!==void 0&&(s=n.ref);for(l in n)Zd.call(n,l)&&!Yd.hasOwnProperty(l)&&(i[l]=n[l]);if(e&&e.defaultProps)for(l in n=e.defaultProps,n)i[l]===void 0&&(i[l]=n[l]);return{$$typeof:Xd,type:e,key:a,ref:s,props:i,_owner:Kd.current}}ui.Fragment=Qd;ui.jsx=fs;ui.jsxs=fs;ts.exports=ui;var r=ts.exports,tr={},ps={exports:{}},be={},ms={exports:{}},hs={};/**
 * @license React
 * scheduler.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */(function(e){function n(x,b){var A=x.length;x.push(b);e:for(;0<A;){var O=A-1>>>1,$=x[O];if(0<i($,b))x[O]=b,x[A]=$,A=O;else break e}}function t(x){return x.length===0?null:x[0]}function l(x){if(x.length===0)return null;var b=x[0],A=x.pop();if(A!==b){x[0]=A;e:for(var O=0,$=x.length,ve=$>>>1;O<ve;){var Ue=2*(O+1)-1,zt=x[Ue],Ye=Ue+1,Gn=x[Ye];if(0>i(zt,A))Ye<$&&0>i(Gn,zt)?(x[O]=Gn,x[Ye]=A,O=Ye):(x[O]=zt,x[Ue]=A,O=Ue);else if(Ye<$&&0>i(Gn,A))x[O]=Gn,x[Ye]=A,O=Ye;else break e}}return b}function i(x,b){var A=x.sortIndex-b.sortIndex;return A!==0?A:x.id-b.id}if(typeof performance=="object"&&typeof performance.now=="function"){var a=performance;e.unstable_now=function(){return a.now()}}else{var s=Date,o=s.now();e.unstable_now=function(){return s.now()-o}}var c=[],p=[],v=1,y=null,m=3,w=!1,k=!1,g=!1,C=typeof setTimeout=="function"?setTimeout:null,u=typeof clearTimeout=="function"?clearTimeout:null,d=typeof setImmediate<"u"?setImmediate:null;typeof navigator<"u"&&navigator.scheduling!==void 0&&navigator.scheduling.isInputPending!==void 0&&navigator.scheduling.isInputPending.bind(navigator.scheduling);function f(x){for(var b=t(p);b!==null;){if(b.callback===null)l(p);else if(b.startTime<=x)l(p),b.sortIndex=b.expirationTime,n(c,b);else break;b=t(p)}}function h(x){if(g=!1,f(x),!k)if(t(c)!==null)k=!0,L(_);else{var b=t(p);b!==null&&W(h,b.startTime-x)}}function _(x,b){k=!1,g&&(g=!1,u(j),j=-1),w=!0;var A=m;try{for(f(b),y=t(c);y!==null&&(!(y.expirationTime>b)||x&&!D());){var O=y.callback;if(typeof O=="function"){y.callback=null,m=y.priorityLevel;var $=O(y.expirationTime<=b);b=e.unstable_now(),typeof $=="function"?y.callback=$:y===t(c)&&l(c),f(b)}else l(c);y=t(c)}if(y!==null)var ve=!0;else{var Ue=t(p);Ue!==null&&W(h,Ue.startTime-b),ve=!1}return ve}finally{y=null,m=A,w=!1}}var z=!1,S=null,j=-1,P=5,E=-1;function D(){return!(e.unstable_now()-E<P)}function G(){if(S!==null){var x=e.unstable_now();E=x;var b=!0;try{b=S(!0,x)}finally{b?R():(z=!1,S=null)}}else z=!1}var R;if(typeof d=="function")R=function(){d(G)};else if(typeof MessageChannel<"u"){var N=new MessageChannel,I=N.port2;N.port1.onmessage=G,R=function(){I.postMessage(null)}}else R=function(){C(G,0)};function L(x){S=x,z||(z=!0,R())}function W(x,b){j=C(function(){x(e.unstable_now())},b)}e.unstable_IdlePriority=5,e.unstable_ImmediatePriority=1,e.unstable_LowPriority=4,e.unstable_NormalPriority=3,e.unstable_Profiling=null,e.unstable_UserBlockingPriority=2,e.unstable_cancelCallback=function(x){x.callback=null},e.unstable_continueExecution=function(){k||w||(k=!0,L(_))},e.unstable_forceFrameRate=function(x){0>x||125<x?console.error("forceFrameRate takes a positive int between 0 and 125, forcing frame rates higher than 125 fps is not supported"):P=0<x?Math.floor(1e3/x):5},e.unstable_getCurrentPriorityLevel=function(){return m},e.unstable_getFirstCallbackNode=function(){return t(c)},e.unstable_next=function(x){switch(m){case 1:case 2:case 3:var b=3;break;default:b=m}var A=m;m=b;try{return x()}finally{m=A}},e.unstable_pauseExecution=function(){},e.unstable_requestPaint=function(){},e.unstable_runWithPriority=function(x,b){switch(x){case 1:case 2:case 3:case 4:case 5:break;default:x=3}var A=m;m=x;try{return b()}finally{m=A}},e.unstable_scheduleCallback=function(x,b,A){var O=e.unstable_now();switch(typeof A=="object"&&A!==null?(A=A.delay,A=typeof A=="number"&&0<A?O+A:O):A=O,x){case 1:var $=-1;break;case 2:$=250;break;case 5:$=1073741823;break;case 4:$=1e4;break;default:$=5e3}return $=A+$,x={id:v++,callback:b,priorityLevel:x,startTime:A,expirationTime:$,sortIndex:-1},A>O?(x.sortIndex=A,n(p,x),t(c)===null&&x===t(p)&&(g?(u(j),j=-1):g=!0,W(h,A-O))):(x.sortIndex=$,n(c,x),k||w||(k=!0,L(_))),x},e.unstable_shouldYield=D,e.unstable_wrapCallback=function(x){var b=m;return function(){var A=m;m=b;try{return x.apply(this,arguments)}finally{m=A}}}})(hs);ms.exports=hs;var qd=ms.exports;/**
 * @license React
 * react-dom.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */var Jd=F,Ce=qd;function M(e){for(var n="https://reactjs.org/docs/error-decoder.html?invariant="+e,t=1;t<arguments.length;t++)n+="&args[]="+encodeURIComponent(arguments[t]);return"Minified React error #"+e+"; visit "+n+" for the full message or use the non-minified dev environment for full errors and additional helpful warnings."}var ys=new Set,Ut={};function Un(e,n){ft(e,n),ft(e+"Capture",n)}function ft(e,n){for(Ut[e]=n,e=0;e<n.length;e++)ys.add(n[e])}var ln=!(typeof window>"u"||typeof window.document>"u"||typeof window.document.createElement>"u"),lr=Object.prototype.hasOwnProperty,e7=/^[:A-Z_a-z\u00C0-\u00D6\u00D8-\u00F6\u00F8-\u02FF\u0370-\u037D\u037F-\u1FFF\u200C-\u200D\u2070-\u218F\u2C00-\u2FEF\u3001-\uD7FF\uF900-\uFDCF\uFDF0-\uFFFD][:A-Z_a-z\u00C0-\u00D6\u00D8-\u00F6\u00F8-\u02FF\u0370-\u037D\u037F-\u1FFF\u200C-\u200D\u2070-\u218F\u2C00-\u2FEF\u3001-\uD7FF\uF900-\uFDCF\uFDF0-\uFFFD\-.0-9\u00B7\u0300-\u036F\u203F-\u2040]*$/,Qa={},Za={};function n7(e){return lr.call(Za,e)?!0:lr.call(Qa,e)?!1:e7.test(e)?Za[e]=!0:(Qa[e]=!0,!1)}function t7(e,n,t,l){if(t!==null&&t.type===0)return!1;switch(typeof n){case"function":case"symbol":return!0;case"boolean":return l?!1:t!==null?!t.acceptsBooleans:(e=e.toLowerCase().slice(0,5),e!=="data-"&&e!=="aria-");default:return!1}}function l7(e,n,t,l){if(n===null||typeof n>"u"||t7(e,n,t,l))return!0;if(l)return!1;if(t!==null)switch(t.type){case 3:return!n;case 4:return n===!1;case 5:return isNaN(n);case 6:return isNaN(n)||1>n}return!1}function xe(e,n,t,l,i,a,s){this.acceptsBooleans=n===2||n===3||n===4,this.attributeName=l,this.attributeNamespace=i,this.mustUseProperty=t,this.propertyName=e,this.type=n,this.sanitizeURL=a,this.removeEmptyString=s}var ce={};"children dangerouslySetInnerHTML defaultValue defaultChecked innerHTML suppressContentEditableWarning suppressHydrationWarning style".split(" ").forEach(function(e){ce[e]=new xe(e,0,!1,e,null,!1,!1)});[["acceptCharset","accept-charset"],["className","class"],["htmlFor","for"],["httpEquiv","http-equiv"]].forEach(function(e){var n=e[0];ce[n]=new xe(n,1,!1,e[1],null,!1,!1)});["contentEditable","draggable","spellCheck","value"].forEach(function(e){ce[e]=new xe(e,2,!1,e.toLowerCase(),null,!1,!1)});["autoReverse","externalResourcesRequired","focusable","preserveAlpha"].forEach(function(e){ce[e]=new xe(e,2,!1,e,null,!1,!1)});"allowFullScreen async autoFocus autoPlay controls default defer disabled disablePictureInPicture disableRemotePlayback formNoValidate hidden loop noModule noValidate open playsInline readOnly required reversed scoped seamless itemScope".split(" ").forEach(function(e){ce[e]=new xe(e,3,!1,e.toLowerCase(),null,!1,!1)});["checked","multiple","muted","selected"].forEach(function(e){ce[e]=new xe(e,3,!0,e,null,!1,!1)});["capture","download"].forEach(function(e){ce[e]=new xe(e,4,!1,e,null,!1,!1)});["cols","rows","size","span"].forEach(function(e){ce[e]=new xe(e,6,!1,e,null,!1,!1)});["rowSpan","start"].forEach(function(e){ce[e]=new xe(e,5,!1,e.toLowerCase(),null,!1,!1)});var Jr=/[\-:]([a-z])/g;function ea(e){return e[1].toUpperCase()}"accent-height alignment-baseline arabic-form baseline-shift cap-height clip-path clip-rule color-interpolation color-interpolation-filters color-profile color-rendering dominant-baseline enable-background fill-opacity fill-rule flood-color flood-opacity font-family font-size font-size-adjust font-stretch font-style font-variant font-weight glyph-name glyph-orientation-horizontal glyph-orientation-vertical horiz-adv-x horiz-origin-x image-rendering letter-spacing lighting-color marker-end marker-mid marker-start overline-position overline-thickness paint-order panose-1 pointer-events rendering-intent shape-rendering stop-color stop-opacity strikethrough-position strikethrough-thickness stroke-dasharray stroke-dashoffset stroke-linecap stroke-linejoin stroke-miterlimit stroke-opacity stroke-width text-anchor text-decoration text-rendering underline-position underline-thickness unicode-bidi unicode-range units-per-em v-alphabetic v-hanging v-ideographic v-mathematical vector-effect vert-adv-y vert-origin-x vert-origin-y word-spacing writing-mode xmlns:xlink x-height".split(" ").forEach(function(e){var n=e.replace(Jr,ea);ce[n]=new xe(n,1,!1,e,null,!1,!1)});"xlink:actuate xlink:arcrole xlink:role xlink:show xlink:title xlink:type".split(" ").forEach(function(e){var n=e.replace(Jr,ea);ce[n]=new xe(n,1,!1,e,"http://www.w3.org/1999/xlink",!1,!1)});["xml:base","xml:lang","xml:space"].forEach(function(e){var n=e.replace(Jr,ea);ce[n]=new xe(n,1,!1,e,"http://www.w3.org/XML/1998/namespace",!1,!1)});["tabIndex","crossOrigin"].forEach(function(e){ce[e]=new xe(e,1,!1,e.toLowerCase(),null,!1,!1)});ce.xlinkHref=new xe("xlinkHref",1,!1,"xlink:href","http://www.w3.org/1999/xlink",!0,!1);["src","href","action","formAction"].forEach(function(e){ce[e]=new xe(e,1,!1,e.toLowerCase(),null,!0,!0)});function na(e,n,t,l){var i=ce.hasOwnProperty(n)?ce[n]:null;(i!==null?i.type!==0:l||!(2<n.length)||n[0]!=="o"&&n[0]!=="O"||n[1]!=="n"&&n[1]!=="N")&&(l7(n,t,i,l)&&(t=null),l||i===null?n7(n)&&(t===null?e.removeAttribute(n):e.setAttribute(n,""+t)):i.mustUseProperty?e[i.propertyName]=t===null?i.type===3?!1:"":t:(n=i.attributeName,l=i.attributeNamespace,t===null?e.removeAttribute(n):(i=i.type,t=i===3||i===4&&t===!0?"":""+t,l?e.setAttributeNS(l,n,t):e.setAttribute(n,t))))}var on=Jd.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED,pl=Symbol.for("react.element"),Qn=Symbol.for("react.portal"),Zn=Symbol.for("react.fragment"),ta=Symbol.for("react.strict_mode"),ir=Symbol.for("react.profiler"),gs=Symbol.for("react.provider"),xs=Symbol.for("react.context"),la=Symbol.for("react.forward_ref"),rr=Symbol.for("react.suspense"),ar=Symbol.for("react.suspense_list"),ia=Symbol.for("react.memo"),fn=Symbol.for("react.lazy"),vs=Symbol.for("react.offscreen"),Ka=Symbol.iterator;function jt(e){return e===null||typeof e!="object"?null:(e=Ka&&e[Ka]||e["@@iterator"],typeof e=="function"?e:null)}var J=Object.assign,Ci;function Pt(e){if(Ci===void 0)try{throw Error()}catch(t){var n=t.stack.trim().match(/\n( *(at )?)/);Ci=n&&n[1]||""}return`
`+Ci+e}var bi=!1;function Ei(e,n){if(!e||bi)return"";bi=!0;var t=Error.prepareStackTrace;Error.prepareStackTrace=void 0;try{if(n)if(n=function(){throw Error()},Object.defineProperty(n.prototype,"props",{set:function(){throw Error()}}),typeof Reflect=="object"&&Reflect.construct){try{Reflect.construct(n,[])}catch(p){var l=p}Reflect.construct(e,[],n)}else{try{n.call()}catch(p){l=p}e.call(n.prototype)}else{try{throw Error()}catch(p){l=p}e()}}catch(p){if(p&&l&&typeof p.stack=="string"){for(var i=p.stack.split(`
`),a=l.stack.split(`
`),s=i.length-1,o=a.length-1;1<=s&&0<=o&&i[s]!==a[o];)o--;for(;1<=s&&0<=o;s--,o--)if(i[s]!==a[o]){if(s!==1||o!==1)do if(s--,o--,0>o||i[s]!==a[o]){var c=`
`+i[s].replace(" at new "," at ");return e.displayName&&c.includes("<anonymous>")&&(c=c.replace("<anonymous>",e.displayName)),c}while(1<=s&&0<=o);break}}}finally{bi=!1,Error.prepareStackTrace=t}return(e=e?e.displayName||e.name:"")?Pt(e):""}function i7(e){switch(e.tag){case 5:return Pt(e.type);case 16:return Pt("Lazy");case 13:return Pt("Suspense");case 19:return Pt("SuspenseList");case 0:case 2:case 15:return e=Ei(e.type,!1),e;case 11:return e=Ei(e.type.render,!1),e;case 1:return e=Ei(e.type,!0),e;default:return""}}function sr(e){if(e==null)return null;if(typeof e=="function")return e.displayName||e.name||null;if(typeof e=="string")return e;switch(e){case Zn:return"Fragment";case Qn:return"Portal";case ir:return"Profiler";case ta:return"StrictMode";case rr:return"Suspense";case ar:return"SuspenseList"}if(typeof e=="object")switch(e.$$typeof){case xs:return(e.displayName||"Context")+".Consumer";case gs:return(e._context.displayName||"Context")+".Provider";case la:var n=e.render;return e=e.displayName,e||(e=n.displayName||n.name||"",e=e!==""?"ForwardRef("+e+")":"ForwardRef"),e;case ia:return n=e.displayName||null,n!==null?n:sr(e.type)||"Memo";case fn:n=e._payload,e=e._init;try{return sr(e(n))}catch{}}return null}function r7(e){var n=e.type;switch(e.tag){case 24:return"Cache";case 9:return(n.displayName||"Context")+".Consumer";case 10:return(n._context.displayName||"Context")+".Provider";case 18:return"DehydratedFragment";case 11:return e=n.render,e=e.displayName||e.name||"",n.displayName||(e!==""?"ForwardRef("+e+")":"ForwardRef");case 7:return"Fragment";case 5:return n;case 4:return"Portal";case 3:return"Root";case 6:return"Text";case 16:return sr(n);case 8:return n===ta?"StrictMode":"Mode";case 22:return"Offscreen";case 12:return"Profiler";case 21:return"Scope";case 13:return"Suspense";case 19:return"SuspenseList";case 25:return"TracingMarker";case 1:case 0:case 17:case 2:case 14:case 15:if(typeof n=="function")return n.displayName||n.name||null;if(typeof n=="string")return n}return null}function Sn(e){switch(typeof e){case"boolean":case"number":case"string":case"undefined":return e;case"object":return e;default:return""}}function ks(e){var n=e.type;return(e=e.nodeName)&&e.toLowerCase()==="input"&&(n==="checkbox"||n==="radio")}function a7(e){var n=ks(e)?"checked":"value",t=Object.getOwnPropertyDescriptor(e.constructor.prototype,n),l=""+e[n];if(!e.hasOwnProperty(n)&&typeof t<"u"&&typeof t.get=="function"&&typeof t.set=="function"){var i=t.get,a=t.set;return Object.defineProperty(e,n,{configurable:!0,get:function(){return i.call(this)},set:function(s){l=""+s,a.call(this,s)}}),Object.defineProperty(e,n,{enumerable:t.enumerable}),{getValue:function(){return l},setValue:function(s){l=""+s},stopTracking:function(){e._valueTracker=null,delete e[n]}}}}function ml(e){e._valueTracker||(e._valueTracker=a7(e))}function ws(e){if(!e)return!1;var n=e._valueTracker;if(!n)return!0;var t=n.getValue(),l="";return e&&(l=ks(e)?e.checked?"true":"false":e.value),e=l,e!==t?(n.setValue(e),!0):!1}function Rl(e){if(e=e||(typeof document<"u"?document:void 0),typeof e>"u")return null;try{return e.activeElement||e.body}catch{return e.body}}function or(e,n){var t=n.checked;return J({},n,{defaultChecked:void 0,defaultValue:void 0,value:void 0,checked:t??e._wrapperState.initialChecked})}function Ya(e,n){var t=n.defaultValue==null?"":n.defaultValue,l=n.checked!=null?n.checked:n.defaultChecked;t=Sn(n.value!=null?n.value:t),e._wrapperState={initialChecked:l,initialValue:t,controlled:n.type==="checkbox"||n.type==="radio"?n.checked!=null:n.value!=null}}function zs(e,n){n=n.checked,n!=null&&na(e,"checked",n,!1)}function dr(e,n){zs(e,n);var t=Sn(n.value),l=n.type;if(t!=null)l==="number"?(t===0&&e.value===""||e.value!=t)&&(e.value=""+t):e.value!==""+t&&(e.value=""+t);else if(l==="submit"||l==="reset"){e.removeAttribute("value");return}n.hasOwnProperty("value")?cr(e,n.type,t):n.hasOwnProperty("defaultValue")&&cr(e,n.type,Sn(n.defaultValue)),n.checked==null&&n.defaultChecked!=null&&(e.defaultChecked=!!n.defaultChecked)}function qa(e,n,t){if(n.hasOwnProperty("value")||n.hasOwnProperty("defaultValue")){var l=n.type;if(!(l!=="submit"&&l!=="reset"||n.value!==void 0&&n.value!==null))return;n=""+e._wrapperState.initialValue,t||n===e.value||(e.value=n),e.defaultValue=n}t=e.name,t!==""&&(e.name=""),e.defaultChecked=!!e._wrapperState.initialChecked,t!==""&&(e.name=t)}function cr(e,n,t){(n!=="number"||Rl(e.ownerDocument)!==e)&&(t==null?e.defaultValue=""+e._wrapperState.initialValue:e.defaultValue!==""+t&&(e.defaultValue=""+t))}var Ft=Array.isArray;function at(e,n,t,l){if(e=e.options,n){n={};for(var i=0;i<t.length;i++)n["$"+t[i]]=!0;for(t=0;t<e.length;t++)i=n.hasOwnProperty("$"+e[t].value),e[t].selected!==i&&(e[t].selected=i),i&&l&&(e[t].defaultSelected=!0)}else{for(t=""+Sn(t),n=null,i=0;i<e.length;i++){if(e[i].value===t){e[i].selected=!0,l&&(e[i].defaultSelected=!0);return}n!==null||e[i].disabled||(n=e[i])}n!==null&&(n.selected=!0)}}function ur(e,n){if(n.dangerouslySetInnerHTML!=null)throw Error(M(91));return J({},n,{value:void 0,defaultValue:void 0,children:""+e._wrapperState.initialValue})}function Ja(e,n){var t=n.value;if(t==null){if(t=n.children,n=n.defaultValue,t!=null){if(n!=null)throw Error(M(92));if(Ft(t)){if(1<t.length)throw Error(M(93));t=t[0]}n=t}n==null&&(n=""),t=n}e._wrapperState={initialValue:Sn(t)}}function js(e,n){var t=Sn(n.value),l=Sn(n.defaultValue);t!=null&&(t=""+t,t!==e.value&&(e.value=t),n.defaultValue==null&&e.defaultValue!==t&&(e.defaultValue=t)),l!=null&&(e.defaultValue=""+l)}function e1(e){var n=e.textContent;n===e._wrapperState.initialValue&&n!==""&&n!==null&&(e.value=n)}function Ns(e){switch(e){case"svg":return"http://www.w3.org/2000/svg";case"math":return"http://www.w3.org/1998/Math/MathML";default:return"http://www.w3.org/1999/xhtml"}}function fr(e,n){return e==null||e==="http://www.w3.org/1999/xhtml"?Ns(n):e==="http://www.w3.org/2000/svg"&&n==="foreignObject"?"http://www.w3.org/1999/xhtml":e}var hl,_s=function(e){return typeof MSApp<"u"&&MSApp.execUnsafeLocalFunction?function(n,t,l,i){MSApp.execUnsafeLocalFunction(function(){return e(n,t,l,i)})}:e}(function(e,n){if(e.namespaceURI!=="http://www.w3.org/2000/svg"||"innerHTML"in e)e.innerHTML=n;else{for(hl=hl||document.createElement("div"),hl.innerHTML="<svg>"+n.valueOf().toString()+"</svg>",n=hl.firstChild;e.firstChild;)e.removeChild(e.firstChild);for(;n.firstChild;)e.appendChild(n.firstChild)}});function Vt(e,n){if(n){var t=e.firstChild;if(t&&t===e.lastChild&&t.nodeType===3){t.nodeValue=n;return}}e.textContent=n}var It={animationIterationCount:!0,aspectRatio:!0,borderImageOutset:!0,borderImageSlice:!0,borderImageWidth:!0,boxFlex:!0,boxFlexGroup:!0,boxOrdinalGroup:!0,columnCount:!0,columns:!0,flex:!0,flexGrow:!0,flexPositive:!0,flexShrink:!0,flexNegative:!0,flexOrder:!0,gridArea:!0,gridRow:!0,gridRowEnd:!0,gridRowSpan:!0,gridRowStart:!0,gridColumn:!0,gridColumnEnd:!0,gridColumnSpan:!0,gridColumnStart:!0,fontWeight:!0,lineClamp:!0,lineHeight:!0,opacity:!0,order:!0,orphans:!0,tabSize:!0,widows:!0,zIndex:!0,zoom:!0,fillOpacity:!0,floodOpacity:!0,stopOpacity:!0,strokeDasharray:!0,strokeDashoffset:!0,strokeMiterlimit:!0,strokeOpacity:!0,strokeWidth:!0},s7=["Webkit","ms","Moz","O"];Object.keys(It).forEach(function(e){s7.forEach(function(n){n=n+e.charAt(0).toUpperCase()+e.substring(1),It[n]=It[e]})});function Ss(e,n,t){return n==null||typeof n=="boolean"||n===""?"":t||typeof n!="number"||n===0||It.hasOwnProperty(e)&&It[e]?(""+n).trim():n+"px"}function Ms(e,n){e=e.style;for(var t in n)if(n.hasOwnProperty(t)){var l=t.indexOf("--")===0,i=Ss(t,n[t],l);t==="float"&&(t="cssFloat"),l?e.setProperty(t,i):e[t]=i}}var o7=J({menuitem:!0},{area:!0,base:!0,br:!0,col:!0,embed:!0,hr:!0,img:!0,input:!0,keygen:!0,link:!0,meta:!0,param:!0,source:!0,track:!0,wbr:!0});function pr(e,n){if(n){if(o7[e]&&(n.children!=null||n.dangerouslySetInnerHTML!=null))throw Error(M(137,e));if(n.dangerouslySetInnerHTML!=null){if(n.children!=null)throw Error(M(60));if(typeof n.dangerouslySetInnerHTML!="object"||!("__html"in n.dangerouslySetInnerHTML))throw Error(M(61))}if(n.style!=null&&typeof n.style!="object")throw Error(M(62))}}function mr(e,n){if(e.indexOf("-")===-1)return typeof n.is=="string";switch(e){case"annotation-xml":case"color-profile":case"font-face":case"font-face-src":case"font-face-uri":case"font-face-format":case"font-face-name":case"missing-glyph":return!1;default:return!0}}var hr=null;function ra(e){return e=e.target||e.srcElement||window,e.correspondingUseElement&&(e=e.correspondingUseElement),e.nodeType===3?e.parentNode:e}var yr=null,st=null,ot=null;function n1(e){if(e=cl(e)){if(typeof yr!="function")throw Error(M(280));var n=e.stateNode;n&&(n=yi(n),yr(e.stateNode,e.type,n))}}function Cs(e){st?ot?ot.push(e):ot=[e]:st=e}function bs(){if(st){var e=st,n=ot;if(ot=st=null,n1(e),n)for(e=0;e<n.length;e++)n1(n[e])}}function Es(e,n){return e(n)}function Ps(){}var Pi=!1;function Fs(e,n,t){if(Pi)return e(n,t);Pi=!0;try{return Es(e,n,t)}finally{Pi=!1,(st!==null||ot!==null)&&(Ps(),bs())}}function Gt(e,n){var t=e.stateNode;if(t===null)return null;var l=yi(t);if(l===null)return null;t=l[n];e:switch(n){case"onClick":case"onClickCapture":case"onDoubleClick":case"onDoubleClickCapture":case"onMouseDown":case"onMouseDownCapture":case"onMouseMove":case"onMouseMoveCapture":case"onMouseUp":case"onMouseUpCapture":case"onMouseEnter":(l=!l.disabled)||(e=e.type,l=!(e==="button"||e==="input"||e==="select"||e==="textarea")),e=!l;break e;default:e=!1}if(e)return null;if(t&&typeof t!="function")throw Error(M(231,n,typeof t));return t}var gr=!1;if(ln)try{var Nt={};Object.defineProperty(Nt,"passive",{get:function(){gr=!0}}),window.addEventListener("test",Nt,Nt),window.removeEventListener("test",Nt,Nt)}catch{gr=!1}function d7(e,n,t,l,i,a,s,o,c){var p=Array.prototype.slice.call(arguments,3);try{n.apply(t,p)}catch(v){this.onError(v)}}var Lt=!1,Bl=null,Hl=!1,xr=null,c7={onError:function(e){Lt=!0,Bl=e}};function u7(e,n,t,l,i,a,s,o,c){Lt=!1,Bl=null,d7.apply(c7,arguments)}function f7(e,n,t,l,i,a,s,o,c){if(u7.apply(this,arguments),Lt){if(Lt){var p=Bl;Lt=!1,Bl=null}else throw Error(M(198));Hl||(Hl=!0,xr=p)}}function Vn(e){var n=e,t=e;if(e.alternate)for(;n.return;)n=n.return;else{e=n;do n=e,n.flags&4098&&(t=n.return),e=n.return;while(e)}return n.tag===3?t:null}function As(e){if(e.tag===13){var n=e.memoizedState;if(n===null&&(e=e.alternate,e!==null&&(n=e.memoizedState)),n!==null)return n.dehydrated}return null}function t1(e){if(Vn(e)!==e)throw Error(M(188))}function p7(e){var n=e.alternate;if(!n){if(n=Vn(e),n===null)throw Error(M(188));return n!==e?null:e}for(var t=e,l=n;;){var i=t.return;if(i===null)break;var a=i.alternate;if(a===null){if(l=i.return,l!==null){t=l;continue}break}if(i.child===a.child){for(a=i.child;a;){if(a===t)return t1(i),e;if(a===l)return t1(i),n;a=a.sibling}throw Error(M(188))}if(t.return!==l.return)t=i,l=a;else{for(var s=!1,o=i.child;o;){if(o===t){s=!0,t=i,l=a;break}if(o===l){s=!0,l=i,t=a;break}o=o.sibling}if(!s){for(o=a.child;o;){if(o===t){s=!0,t=a,l=i;break}if(o===l){s=!0,l=a,t=i;break}o=o.sibling}if(!s)throw Error(M(189))}}if(t.alternate!==l)throw Error(M(190))}if(t.tag!==3)throw Error(M(188));return t.stateNode.current===t?e:n}function Ts(e){return e=p7(e),e!==null?Is(e):null}function Is(e){if(e.tag===5||e.tag===6)return e;for(e=e.child;e!==null;){var n=Is(e);if(n!==null)return n;e=e.sibling}return null}var Ls=Ce.unstable_scheduleCallback,l1=Ce.unstable_cancelCallback,m7=Ce.unstable_shouldYield,h7=Ce.unstable_requestPaint,ne=Ce.unstable_now,y7=Ce.unstable_getCurrentPriorityLevel,aa=Ce.unstable_ImmediatePriority,Ds=Ce.unstable_UserBlockingPriority,Ul=Ce.unstable_NormalPriority,g7=Ce.unstable_LowPriority,Os=Ce.unstable_IdlePriority,fi=null,Ze=null;function x7(e){if(Ze&&typeof Ze.onCommitFiberRoot=="function")try{Ze.onCommitFiberRoot(fi,e,void 0,(e.current.flags&128)===128)}catch{}}var Re=Math.clz32?Math.clz32:w7,v7=Math.log,k7=Math.LN2;function w7(e){return e>>>=0,e===0?32:31-(v7(e)/k7|0)|0}var yl=64,gl=4194304;function At(e){switch(e&-e){case 1:return 1;case 2:return 2;case 4:return 4;case 8:return 8;case 16:return 16;case 32:return 32;case 64:case 128:case 256:case 512:case 1024:case 2048:case 4096:case 8192:case 16384:case 32768:case 65536:case 131072:case 262144:case 524288:case 1048576:case 2097152:return e&4194240;case 4194304:case 8388608:case 16777216:case 33554432:case 67108864:return e&130023424;case 134217728:return 134217728;case 268435456:return 268435456;case 536870912:return 536870912;case 1073741824:return 1073741824;default:return e}}function Vl(e,n){var t=e.pendingLanes;if(t===0)return 0;var l=0,i=e.suspendedLanes,a=e.pingedLanes,s=t&268435455;if(s!==0){var o=s&~i;o!==0?l=At(o):(a&=s,a!==0&&(l=At(a)))}else s=t&~i,s!==0?l=At(s):a!==0&&(l=At(a));if(l===0)return 0;if(n!==0&&n!==l&&!(n&i)&&(i=l&-l,a=n&-n,i>=a||i===16&&(a&4194240)!==0))return n;if(l&4&&(l|=t&16),n=e.entangledLanes,n!==0)for(e=e.entanglements,n&=l;0<n;)t=31-Re(n),i=1<<t,l|=e[t],n&=~i;return l}function z7(e,n){switch(e){case 1:case 2:case 4:return n+250;case 8:case 16:case 32:case 64:case 128:case 256:case 512:case 1024:case 2048:case 4096:case 8192:case 16384:case 32768:case 65536:case 131072:case 262144:case 524288:case 1048576:case 2097152:return n+5e3;case 4194304:case 8388608:case 16777216:case 33554432:case 67108864:return-1;case 134217728:case 268435456:case 536870912:case 1073741824:return-1;default:return-1}}function j7(e,n){for(var t=e.suspendedLanes,l=e.pingedLanes,i=e.expirationTimes,a=e.pendingLanes;0<a;){var s=31-Re(a),o=1<<s,c=i[s];c===-1?(!(o&t)||o&l)&&(i[s]=z7(o,n)):c<=n&&(e.expiredLanes|=o),a&=~o}}function vr(e){return e=e.pendingLanes&-1073741825,e!==0?e:e&1073741824?1073741824:0}function $s(){var e=yl;return yl<<=1,!(yl&4194240)&&(yl=64),e}function Fi(e){for(var n=[],t=0;31>t;t++)n.push(e);return n}function ol(e,n,t){e.pendingLanes|=n,n!==536870912&&(e.suspendedLanes=0,e.pingedLanes=0),e=e.eventTimes,n=31-Re(n),e[n]=t}function N7(e,n){var t=e.pendingLanes&~n;e.pendingLanes=n,e.suspendedLanes=0,e.pingedLanes=0,e.expiredLanes&=n,e.mutableReadLanes&=n,e.entangledLanes&=n,n=e.entanglements;var l=e.eventTimes;for(e=e.expirationTimes;0<t;){var i=31-Re(t),a=1<<i;n[i]=0,l[i]=-1,e[i]=-1,t&=~a}}function sa(e,n){var t=e.entangledLanes|=n;for(e=e.entanglements;t;){var l=31-Re(t),i=1<<l;i&n|e[l]&n&&(e[l]|=n),t&=~i}}var V=0;function Ws(e){return e&=-e,1<e?4<e?e&268435455?16:536870912:4:1}var Rs,oa,Bs,Hs,Us,kr=!1,xl=[],xn=null,vn=null,kn=null,Xt=new Map,Qt=new Map,mn=[],_7="mousedown mouseup touchcancel touchend touchstart auxclick dblclick pointercancel pointerdown pointerup dragend dragstart drop compositionend compositionstart keydown keypress keyup input textInput copy cut paste click change contextmenu reset submit".split(" ");function i1(e,n){switch(e){case"focusin":case"focusout":xn=null;break;case"dragenter":case"dragleave":vn=null;break;case"mouseover":case"mouseout":kn=null;break;case"pointerover":case"pointerout":Xt.delete(n.pointerId);break;case"gotpointercapture":case"lostpointercapture":Qt.delete(n.pointerId)}}function _t(e,n,t,l,i,a){return e===null||e.nativeEvent!==a?(e={blockedOn:n,domEventName:t,eventSystemFlags:l,nativeEvent:a,targetContainers:[i]},n!==null&&(n=cl(n),n!==null&&oa(n)),e):(e.eventSystemFlags|=l,n=e.targetContainers,i!==null&&n.indexOf(i)===-1&&n.push(i),e)}function S7(e,n,t,l,i){switch(n){case"focusin":return xn=_t(xn,e,n,t,l,i),!0;case"dragenter":return vn=_t(vn,e,n,t,l,i),!0;case"mouseover":return kn=_t(kn,e,n,t,l,i),!0;case"pointerover":var a=i.pointerId;return Xt.set(a,_t(Xt.get(a)||null,e,n,t,l,i)),!0;case"gotpointercapture":return a=i.pointerId,Qt.set(a,_t(Qt.get(a)||null,e,n,t,l,i)),!0}return!1}function Vs(e){var n=Tn(e.target);if(n!==null){var t=Vn(n);if(t!==null){if(n=t.tag,n===13){if(n=As(t),n!==null){e.blockedOn=n,Us(e.priority,function(){Bs(t)});return}}else if(n===3&&t.stateNode.current.memoizedState.isDehydrated){e.blockedOn=t.tag===3?t.stateNode.containerInfo:null;return}}}e.blockedOn=null}function Pl(e){if(e.blockedOn!==null)return!1;for(var n=e.targetContainers;0<n.length;){var t=wr(e.domEventName,e.eventSystemFlags,n[0],e.nativeEvent);if(t===null){t=e.nativeEvent;var l=new t.constructor(t.type,t);hr=l,t.target.dispatchEvent(l),hr=null}else return n=cl(t),n!==null&&oa(n),e.blockedOn=t,!1;n.shift()}return!0}function r1(e,n,t){Pl(e)&&t.delete(n)}function M7(){kr=!1,xn!==null&&Pl(xn)&&(xn=null),vn!==null&&Pl(vn)&&(vn=null),kn!==null&&Pl(kn)&&(kn=null),Xt.forEach(r1),Qt.forEach(r1)}function St(e,n){e.blockedOn===n&&(e.blockedOn=null,kr||(kr=!0,Ce.unstable_scheduleCallback(Ce.unstable_NormalPriority,M7)))}function Zt(e){function n(i){return St(i,e)}if(0<xl.length){St(xl[0],e);for(var t=1;t<xl.length;t++){var l=xl[t];l.blockedOn===e&&(l.blockedOn=null)}}for(xn!==null&&St(xn,e),vn!==null&&St(vn,e),kn!==null&&St(kn,e),Xt.forEach(n),Qt.forEach(n),t=0;t<mn.length;t++)l=mn[t],l.blockedOn===e&&(l.blockedOn=null);for(;0<mn.length&&(t=mn[0],t.blockedOn===null);)Vs(t),t.blockedOn===null&&mn.shift()}var dt=on.ReactCurrentBatchConfig,Gl=!0;function C7(e,n,t,l){var i=V,a=dt.transition;dt.transition=null;try{V=1,da(e,n,t,l)}finally{V=i,dt.transition=a}}function b7(e,n,t,l){var i=V,a=dt.transition;dt.transition=null;try{V=4,da(e,n,t,l)}finally{V=i,dt.transition=a}}function da(e,n,t,l){if(Gl){var i=wr(e,n,t,l);if(i===null)Bi(e,n,l,Xl,t),i1(e,l);else if(S7(i,e,n,t,l))l.stopPropagation();else if(i1(e,l),n&4&&-1<_7.indexOf(e)){for(;i!==null;){var a=cl(i);if(a!==null&&Rs(a),a=wr(e,n,t,l),a===null&&Bi(e,n,l,Xl,t),a===i)break;i=a}i!==null&&l.stopPropagation()}else Bi(e,n,l,null,t)}}var Xl=null;function wr(e,n,t,l){if(Xl=null,e=ra(l),e=Tn(e),e!==null)if(n=Vn(e),n===null)e=null;else if(t=n.tag,t===13){if(e=As(n),e!==null)return e;e=null}else if(t===3){if(n.stateNode.current.memoizedState.isDehydrated)return n.tag===3?n.stateNode.containerInfo:null;e=null}else n!==e&&(e=null);return Xl=e,null}function Gs(e){switch(e){case"cancel":case"click":case"close":case"contextmenu":case"copy":case"cut":case"auxclick":case"dblclick":case"dragend":case"dragstart":case"drop":case"focusin":case"focusout":case"input":case"invalid":case"keydown":case"keypress":case"keyup":case"mousedown":case"mouseup":case"paste":case"pause":case"play":case"pointercancel":case"pointerdown":case"pointerup":case"ratechange":case"reset":case"resize":case"seeked":case"submit":case"touchcancel":case"touchend":case"touchstart":case"volumechange":case"change":case"selectionchange":case"textInput":case"compositionstart":case"compositionend":case"compositionupdate":case"beforeblur":case"afterblur":case"beforeinput":case"blur":case"fullscreenchange":case"focus":case"hashchange":case"popstate":case"select":case"selectstart":return 1;case"drag":case"dragenter":case"dragexit":case"dragleave":case"dragover":case"mousemove":case"mouseout":case"mouseover":case"pointermove":case"pointerout":case"pointerover":case"scroll":case"toggle":case"touchmove":case"wheel":case"mouseenter":case"mouseleave":case"pointerenter":case"pointerleave":return 4;case"message":switch(y7()){case aa:return 1;case Ds:return 4;case Ul:case g7:return 16;case Os:return 536870912;default:return 16}default:return 16}}var yn=null,ca=null,Fl=null;function Xs(){if(Fl)return Fl;var e,n=ca,t=n.length,l,i="value"in yn?yn.value:yn.textContent,a=i.length;for(e=0;e<t&&n[e]===i[e];e++);var s=t-e;for(l=1;l<=s&&n[t-l]===i[a-l];l++);return Fl=i.slice(e,1<l?1-l:void 0)}function Al(e){var n=e.keyCode;return"charCode"in e?(e=e.charCode,e===0&&n===13&&(e=13)):e=n,e===10&&(e=13),32<=e||e===13?e:0}function vl(){return!0}function a1(){return!1}function Ee(e){function n(t,l,i,a,s){this._reactName=t,this._targetInst=i,this.type=l,this.nativeEvent=a,this.target=s,this.currentTarget=null;for(var o in e)e.hasOwnProperty(o)&&(t=e[o],this[o]=t?t(a):a[o]);return this.isDefaultPrevented=(a.defaultPrevented!=null?a.defaultPrevented:a.returnValue===!1)?vl:a1,this.isPropagationStopped=a1,this}return J(n.prototype,{preventDefault:function(){this.defaultPrevented=!0;var t=this.nativeEvent;t&&(t.preventDefault?t.preventDefault():typeof t.returnValue!="unknown"&&(t.returnValue=!1),this.isDefaultPrevented=vl)},stopPropagation:function(){var t=this.nativeEvent;t&&(t.stopPropagation?t.stopPropagation():typeof t.cancelBubble!="unknown"&&(t.cancelBubble=!0),this.isPropagationStopped=vl)},persist:function(){},isPersistent:vl}),n}var kt={eventPhase:0,bubbles:0,cancelable:0,timeStamp:function(e){return e.timeStamp||Date.now()},defaultPrevented:0,isTrusted:0},ua=Ee(kt),dl=J({},kt,{view:0,detail:0}),E7=Ee(dl),Ai,Ti,Mt,pi=J({},dl,{screenX:0,screenY:0,clientX:0,clientY:0,pageX:0,pageY:0,ctrlKey:0,shiftKey:0,altKey:0,metaKey:0,getModifierState:fa,button:0,buttons:0,relatedTarget:function(e){return e.relatedTarget===void 0?e.fromElement===e.srcElement?e.toElement:e.fromElement:e.relatedTarget},movementX:function(e){return"movementX"in e?e.movementX:(e!==Mt&&(Mt&&e.type==="mousemove"?(Ai=e.screenX-Mt.screenX,Ti=e.screenY-Mt.screenY):Ti=Ai=0,Mt=e),Ai)},movementY:function(e){return"movementY"in e?e.movementY:Ti}}),s1=Ee(pi),P7=J({},pi,{dataTransfer:0}),F7=Ee(P7),A7=J({},dl,{relatedTarget:0}),Ii=Ee(A7),T7=J({},kt,{animationName:0,elapsedTime:0,pseudoElement:0}),I7=Ee(T7),L7=J({},kt,{clipboardData:function(e){return"clipboardData"in e?e.clipboardData:window.clipboardData}}),D7=Ee(L7),O7=J({},kt,{data:0}),o1=Ee(O7),$7={Esc:"Escape",Spacebar:" ",Left:"ArrowLeft",Up:"ArrowUp",Right:"ArrowRight",Down:"ArrowDown",Del:"Delete",Win:"OS",Menu:"ContextMenu",Apps:"ContextMenu",Scroll:"ScrollLock",MozPrintableKey:"Unidentified"},W7={8:"Backspace",9:"Tab",12:"Clear",13:"Enter",16:"Shift",17:"Control",18:"Alt",19:"Pause",20:"CapsLock",27:"Escape",32:" ",33:"PageUp",34:"PageDown",35:"End",36:"Home",37:"ArrowLeft",38:"ArrowUp",39:"ArrowRight",40:"ArrowDown",45:"Insert",46:"Delete",112:"F1",113:"F2",114:"F3",115:"F4",116:"F5",117:"F6",118:"F7",119:"F8",120:"F9",121:"F10",122:"F11",123:"F12",144:"NumLock",145:"ScrollLock",224:"Meta"},R7={Alt:"altKey",Control:"ctrlKey",Meta:"metaKey",Shift:"shiftKey"};function B7(e){var n=this.nativeEvent;return n.getModifierState?n.getModifierState(e):(e=R7[e])?!!n[e]:!1}function fa(){return B7}var H7=J({},dl,{key:function(e){if(e.key){var n=$7[e.key]||e.key;if(n!=="Unidentified")return n}return e.type==="keypress"?(e=Al(e),e===13?"Enter":String.fromCharCode(e)):e.type==="keydown"||e.type==="keyup"?W7[e.keyCode]||"Unidentified":""},code:0,location:0,ctrlKey:0,shiftKey:0,altKey:0,metaKey:0,repeat:0,locale:0,getModifierState:fa,charCode:function(e){return e.type==="keypress"?Al(e):0},keyCode:function(e){return e.type==="keydown"||e.type==="keyup"?e.keyCode:0},which:function(e){return e.type==="keypress"?Al(e):e.type==="keydown"||e.type==="keyup"?e.keyCode:0}}),U7=Ee(H7),V7=J({},pi,{pointerId:0,width:0,height:0,pressure:0,tangentialPressure:0,tiltX:0,tiltY:0,twist:0,pointerType:0,isPrimary:0}),d1=Ee(V7),G7=J({},dl,{touches:0,targetTouches:0,changedTouches:0,altKey:0,metaKey:0,ctrlKey:0,shiftKey:0,getModifierState:fa}),X7=Ee(G7),Q7=J({},kt,{propertyName:0,elapsedTime:0,pseudoElement:0}),Z7=Ee(Q7),K7=J({},pi,{deltaX:function(e){return"deltaX"in e?e.deltaX:"wheelDeltaX"in e?-e.wheelDeltaX:0},deltaY:function(e){return"deltaY"in e?e.deltaY:"wheelDeltaY"in e?-e.wheelDeltaY:"wheelDelta"in e?-e.wheelDelta:0},deltaZ:0,deltaMode:0}),Y7=Ee(K7),q7=[9,13,27,32],pa=ln&&"CompositionEvent"in window,Dt=null;ln&&"documentMode"in document&&(Dt=document.documentMode);var J7=ln&&"TextEvent"in window&&!Dt,Qs=ln&&(!pa||Dt&&8<Dt&&11>=Dt),c1=" ",u1=!1;function Zs(e,n){switch(e){case"keyup":return q7.indexOf(n.keyCode)!==-1;case"keydown":return n.keyCode!==229;case"keypress":case"mousedown":case"focusout":return!0;default:return!1}}function Ks(e){return e=e.detail,typeof e=="object"&&"data"in e?e.data:null}var Kn=!1;function e0(e,n){switch(e){case"compositionend":return Ks(n);case"keypress":return n.which!==32?null:(u1=!0,c1);case"textInput":return e=n.data,e===c1&&u1?null:e;default:return null}}function n0(e,n){if(Kn)return e==="compositionend"||!pa&&Zs(e,n)?(e=Xs(),Fl=ca=yn=null,Kn=!1,e):null;switch(e){case"paste":return null;case"keypress":if(!(n.ctrlKey||n.altKey||n.metaKey)||n.ctrlKey&&n.altKey){if(n.char&&1<n.char.length)return n.char;if(n.which)return String.fromCharCode(n.which)}return null;case"compositionend":return Qs&&n.locale!=="ko"?null:n.data;default:return null}}var t0={color:!0,date:!0,datetime:!0,"datetime-local":!0,email:!0,month:!0,number:!0,password:!0,range:!0,search:!0,tel:!0,text:!0,time:!0,url:!0,week:!0};function f1(e){var n=e&&e.nodeName&&e.nodeName.toLowerCase();return n==="input"?!!t0[e.type]:n==="textarea"}function Ys(e,n,t,l){Cs(l),n=Ql(n,"onChange"),0<n.length&&(t=new ua("onChange","change",null,t,l),e.push({event:t,listeners:n}))}var Ot=null,Kt=null;function l0(e){oo(e,0)}function mi(e){var n=Jn(e);if(ws(n))return e}function i0(e,n){if(e==="change")return n}var qs=!1;if(ln){var Li;if(ln){var Di="oninput"in document;if(!Di){var p1=document.createElement("div");p1.setAttribute("oninput","return;"),Di=typeof p1.oninput=="function"}Li=Di}else Li=!1;qs=Li&&(!document.documentMode||9<document.documentMode)}function m1(){Ot&&(Ot.detachEvent("onpropertychange",Js),Kt=Ot=null)}function Js(e){if(e.propertyName==="value"&&mi(Kt)){var n=[];Ys(n,Kt,e,ra(e)),Fs(l0,n)}}function r0(e,n,t){e==="focusin"?(m1(),Ot=n,Kt=t,Ot.attachEvent("onpropertychange",Js)):e==="focusout"&&m1()}function a0(e){if(e==="selectionchange"||e==="keyup"||e==="keydown")return mi(Kt)}function s0(e,n){if(e==="click")return mi(n)}function o0(e,n){if(e==="input"||e==="change")return mi(n)}function d0(e,n){return e===n&&(e!==0||1/e===1/n)||e!==e&&n!==n}var He=typeof Object.is=="function"?Object.is:d0;function Yt(e,n){if(He(e,n))return!0;if(typeof e!="object"||e===null||typeof n!="object"||n===null)return!1;var t=Object.keys(e),l=Object.keys(n);if(t.length!==l.length)return!1;for(l=0;l<t.length;l++){var i=t[l];if(!lr.call(n,i)||!He(e[i],n[i]))return!1}return!0}function h1(e){for(;e&&e.firstChild;)e=e.firstChild;return e}function y1(e,n){var t=h1(e);e=0;for(var l;t;){if(t.nodeType===3){if(l=e+t.textContent.length,e<=n&&l>=n)return{node:t,offset:n-e};e=l}e:{for(;t;){if(t.nextSibling){t=t.nextSibling;break e}t=t.parentNode}t=void 0}t=h1(t)}}function eo(e,n){return e&&n?e===n?!0:e&&e.nodeType===3?!1:n&&n.nodeType===3?eo(e,n.parentNode):"contains"in e?e.contains(n):e.compareDocumentPosition?!!(e.compareDocumentPosition(n)&16):!1:!1}function no(){for(var e=window,n=Rl();n instanceof e.HTMLIFrameElement;){try{var t=typeof n.contentWindow.location.href=="string"}catch{t=!1}if(t)e=n.contentWindow;else break;n=Rl(e.document)}return n}function ma(e){var n=e&&e.nodeName&&e.nodeName.toLowerCase();return n&&(n==="input"&&(e.type==="text"||e.type==="search"||e.type==="tel"||e.type==="url"||e.type==="password")||n==="textarea"||e.contentEditable==="true")}function c0(e){var n=no(),t=e.focusedElem,l=e.selectionRange;if(n!==t&&t&&t.ownerDocument&&eo(t.ownerDocument.documentElement,t)){if(l!==null&&ma(t)){if(n=l.start,e=l.end,e===void 0&&(e=n),"selectionStart"in t)t.selectionStart=n,t.selectionEnd=Math.min(e,t.value.length);else if(e=(n=t.ownerDocument||document)&&n.defaultView||window,e.getSelection){e=e.getSelection();var i=t.textContent.length,a=Math.min(l.start,i);l=l.end===void 0?a:Math.min(l.end,i),!e.extend&&a>l&&(i=l,l=a,a=i),i=y1(t,a);var s=y1(t,l);i&&s&&(e.rangeCount!==1||e.anchorNode!==i.node||e.anchorOffset!==i.offset||e.focusNode!==s.node||e.focusOffset!==s.offset)&&(n=n.createRange(),n.setStart(i.node,i.offset),e.removeAllRanges(),a>l?(e.addRange(n),e.extend(s.node,s.offset)):(n.setEnd(s.node,s.offset),e.addRange(n)))}}for(n=[],e=t;e=e.parentNode;)e.nodeType===1&&n.push({element:e,left:e.scrollLeft,top:e.scrollTop});for(typeof t.focus=="function"&&t.focus(),t=0;t<n.length;t++)e=n[t],e.element.scrollLeft=e.left,e.element.scrollTop=e.top}}var u0=ln&&"documentMode"in document&&11>=document.documentMode,Yn=null,zr=null,$t=null,jr=!1;function g1(e,n,t){var l=t.window===t?t.document:t.nodeType===9?t:t.ownerDocument;jr||Yn==null||Yn!==Rl(l)||(l=Yn,"selectionStart"in l&&ma(l)?l={start:l.selectionStart,end:l.selectionEnd}:(l=(l.ownerDocument&&l.ownerDocument.defaultView||window).getSelection(),l={anchorNode:l.anchorNode,anchorOffset:l.anchorOffset,focusNode:l.focusNode,focusOffset:l.focusOffset}),$t&&Yt($t,l)||($t=l,l=Ql(zr,"onSelect"),0<l.length&&(n=new ua("onSelect","select",null,n,t),e.push({event:n,listeners:l}),n.target=Yn)))}function kl(e,n){var t={};return t[e.toLowerCase()]=n.toLowerCase(),t["Webkit"+e]="webkit"+n,t["Moz"+e]="moz"+n,t}var qn={animationend:kl("Animation","AnimationEnd"),animationiteration:kl("Animation","AnimationIteration"),animationstart:kl("Animation","AnimationStart"),transitionend:kl("Transition","TransitionEnd")},Oi={},to={};ln&&(to=document.createElement("div").style,"AnimationEvent"in window||(delete qn.animationend.animation,delete qn.animationiteration.animation,delete qn.animationstart.animation),"TransitionEvent"in window||delete qn.transitionend.transition);function hi(e){if(Oi[e])return Oi[e];if(!qn[e])return e;var n=qn[e],t;for(t in n)if(n.hasOwnProperty(t)&&t in to)return Oi[e]=n[t];return e}var lo=hi("animationend"),io=hi("animationiteration"),ro=hi("animationstart"),ao=hi("transitionend"),so=new Map,x1="abort auxClick cancel canPlay canPlayThrough click close contextMenu copy cut drag dragEnd dragEnter dragExit dragLeave dragOver dragStart drop durationChange emptied encrypted ended error gotPointerCapture input invalid keyDown keyPress keyUp load loadedData loadedMetadata loadStart lostPointerCapture mouseDown mouseMove mouseOut mouseOver mouseUp paste pause play playing pointerCancel pointerDown pointerMove pointerOut pointerOver pointerUp progress rateChange reset resize seeked seeking stalled submit suspend timeUpdate touchCancel touchEnd touchStart volumeChange scroll toggle touchMove waiting wheel".split(" ");function Cn(e,n){so.set(e,n),Un(n,[e])}for(var $i=0;$i<x1.length;$i++){var Wi=x1[$i],f0=Wi.toLowerCase(),p0=Wi[0].toUpperCase()+Wi.slice(1);Cn(f0,"on"+p0)}Cn(lo,"onAnimationEnd");Cn(io,"onAnimationIteration");Cn(ro,"onAnimationStart");Cn("dblclick","onDoubleClick");Cn("focusin","onFocus");Cn("focusout","onBlur");Cn(ao,"onTransitionEnd");ft("onMouseEnter",["mouseout","mouseover"]);ft("onMouseLeave",["mouseout","mouseover"]);ft("onPointerEnter",["pointerout","pointerover"]);ft("onPointerLeave",["pointerout","pointerover"]);Un("onChange","change click focusin focusout input keydown keyup selectionchange".split(" "));Un("onSelect","focusout contextmenu dragend focusin keydown keyup mousedown mouseup selectionchange".split(" "));Un("onBeforeInput",["compositionend","keypress","textInput","paste"]);Un("onCompositionEnd","compositionend focusout keydown keypress keyup mousedown".split(" "));Un("onCompositionStart","compositionstart focusout keydown keypress keyup mousedown".split(" "));Un("onCompositionUpdate","compositionupdate focusout keydown keypress keyup mousedown".split(" "));var Tt="abort canplay canplaythrough durationchange emptied encrypted ended error loadeddata loadedmetadata loadstart pause play playing progress ratechange resize seeked seeking stalled suspend timeupdate volumechange waiting".split(" "),m0=new Set("cancel close invalid load scroll toggle".split(" ").concat(Tt));function v1(e,n,t){var l=e.type||"unknown-event";e.currentTarget=t,f7(l,n,void 0,e),e.currentTarget=null}function oo(e,n){n=(n&4)!==0;for(var t=0;t<e.length;t++){var l=e[t],i=l.event;l=l.listeners;e:{var a=void 0;if(n)for(var s=l.length-1;0<=s;s--){var o=l[s],c=o.instance,p=o.currentTarget;if(o=o.listener,c!==a&&i.isPropagationStopped())break e;v1(i,o,p),a=c}else for(s=0;s<l.length;s++){if(o=l[s],c=o.instance,p=o.currentTarget,o=o.listener,c!==a&&i.isPropagationStopped())break e;v1(i,o,p),a=c}}}if(Hl)throw e=xr,Hl=!1,xr=null,e}function Q(e,n){var t=n[Cr];t===void 0&&(t=n[Cr]=new Set);var l=e+"__bubble";t.has(l)||(co(n,e,2,!1),t.add(l))}function Ri(e,n,t){var l=0;n&&(l|=4),co(t,e,l,n)}var wl="_reactListening"+Math.random().toString(36).slice(2);function qt(e){if(!e[wl]){e[wl]=!0,ys.forEach(function(t){t!=="selectionchange"&&(m0.has(t)||Ri(t,!1,e),Ri(t,!0,e))});var n=e.nodeType===9?e:e.ownerDocument;n===null||n[wl]||(n[wl]=!0,Ri("selectionchange",!1,n))}}function co(e,n,t,l){switch(Gs(n)){case 1:var i=C7;break;case 4:i=b7;break;default:i=da}t=i.bind(null,n,t,e),i=void 0,!gr||n!=="touchstart"&&n!=="touchmove"&&n!=="wheel"||(i=!0),l?i!==void 0?e.addEventListener(n,t,{capture:!0,passive:i}):e.addEventListener(n,t,!0):i!==void 0?e.addEventListener(n,t,{passive:i}):e.addEventListener(n,t,!1)}function Bi(e,n,t,l,i){var a=l;if(!(n&1)&&!(n&2)&&l!==null)e:for(;;){if(l===null)return;var s=l.tag;if(s===3||s===4){var o=l.stateNode.containerInfo;if(o===i||o.nodeType===8&&o.parentNode===i)break;if(s===4)for(s=l.return;s!==null;){var c=s.tag;if((c===3||c===4)&&(c=s.stateNode.containerInfo,c===i||c.nodeType===8&&c.parentNode===i))return;s=s.return}for(;o!==null;){if(s=Tn(o),s===null)return;if(c=s.tag,c===5||c===6){l=a=s;continue e}o=o.parentNode}}l=l.return}Fs(function(){var p=a,v=ra(t),y=[];e:{var m=so.get(e);if(m!==void 0){var w=ua,k=e;switch(e){case"keypress":if(Al(t)===0)break e;case"keydown":case"keyup":w=U7;break;case"focusin":k="focus",w=Ii;break;case"focusout":k="blur",w=Ii;break;case"beforeblur":case"afterblur":w=Ii;break;case"click":if(t.button===2)break e;case"auxclick":case"dblclick":case"mousedown":case"mousemove":case"mouseup":case"mouseout":case"mouseover":case"contextmenu":w=s1;break;case"drag":case"dragend":case"dragenter":case"dragexit":case"dragleave":case"dragover":case"dragstart":case"drop":w=F7;break;case"touchcancel":case"touchend":case"touchmove":case"touchstart":w=X7;break;case lo:case io:case ro:w=I7;break;case ao:w=Z7;break;case"scroll":w=E7;break;case"wheel":w=Y7;break;case"copy":case"cut":case"paste":w=D7;break;case"gotpointercapture":case"lostpointercapture":case"pointercancel":case"pointerdown":case"pointermove":case"pointerout":case"pointerover":case"pointerup":w=d1}var g=(n&4)!==0,C=!g&&e==="scroll",u=g?m!==null?m+"Capture":null:m;g=[];for(var d=p,f;d!==null;){f=d;var h=f.stateNode;if(f.tag===5&&h!==null&&(f=h,u!==null&&(h=Gt(d,u),h!=null&&g.push(Jt(d,h,f)))),C)break;d=d.return}0<g.length&&(m=new w(m,k,null,t,v),y.push({event:m,listeners:g}))}}if(!(n&7)){e:{if(m=e==="mouseover"||e==="pointerover",w=e==="mouseout"||e==="pointerout",m&&t!==hr&&(k=t.relatedTarget||t.fromElement)&&(Tn(k)||k[rn]))break e;if((w||m)&&(m=v.window===v?v:(m=v.ownerDocument)?m.defaultView||m.parentWindow:window,w?(k=t.relatedTarget||t.toElement,w=p,k=k?Tn(k):null,k!==null&&(C=Vn(k),k!==C||k.tag!==5&&k.tag!==6)&&(k=null)):(w=null,k=p),w!==k)){if(g=s1,h="onMouseLeave",u="onMouseEnter",d="mouse",(e==="pointerout"||e==="pointerover")&&(g=d1,h="onPointerLeave",u="onPointerEnter",d="pointer"),C=w==null?m:Jn(w),f=k==null?m:Jn(k),m=new g(h,d+"leave",w,t,v),m.target=C,m.relatedTarget=f,h=null,Tn(v)===p&&(g=new g(u,d+"enter",k,t,v),g.target=f,g.relatedTarget=C,h=g),C=h,w&&k)n:{for(g=w,u=k,d=0,f=g;f;f=Xn(f))d++;for(f=0,h=u;h;h=Xn(h))f++;for(;0<d-f;)g=Xn(g),d--;for(;0<f-d;)u=Xn(u),f--;for(;d--;){if(g===u||u!==null&&g===u.alternate)break n;g=Xn(g),u=Xn(u)}g=null}else g=null;w!==null&&k1(y,m,w,g,!1),k!==null&&C!==null&&k1(y,C,k,g,!0)}}e:{if(m=p?Jn(p):window,w=m.nodeName&&m.nodeName.toLowerCase(),w==="select"||w==="input"&&m.type==="file")var _=i0;else if(f1(m))if(qs)_=o0;else{_=a0;var z=r0}else(w=m.nodeName)&&w.toLowerCase()==="input"&&(m.type==="checkbox"||m.type==="radio")&&(_=s0);if(_&&(_=_(e,p))){Ys(y,_,t,v);break e}z&&z(e,m,p),e==="focusout"&&(z=m._wrapperState)&&z.controlled&&m.type==="number"&&cr(m,"number",m.value)}switch(z=p?Jn(p):window,e){case"focusin":(f1(z)||z.contentEditable==="true")&&(Yn=z,zr=p,$t=null);break;case"focusout":$t=zr=Yn=null;break;case"mousedown":jr=!0;break;case"contextmenu":case"mouseup":case"dragend":jr=!1,g1(y,t,v);break;case"selectionchange":if(u0)break;case"keydown":case"keyup":g1(y,t,v)}var S;if(pa)e:{switch(e){case"compositionstart":var j="onCompositionStart";break e;case"compositionend":j="onCompositionEnd";break e;case"compositionupdate":j="onCompositionUpdate";break e}j=void 0}else Kn?Zs(e,t)&&(j="onCompositionEnd"):e==="keydown"&&t.keyCode===229&&(j="onCompositionStart");j&&(Qs&&t.locale!=="ko"&&(Kn||j!=="onCompositionStart"?j==="onCompositionEnd"&&Kn&&(S=Xs()):(yn=v,ca="value"in yn?yn.value:yn.textContent,Kn=!0)),z=Ql(p,j),0<z.length&&(j=new o1(j,e,null,t,v),y.push({event:j,listeners:z}),S?j.data=S:(S=Ks(t),S!==null&&(j.data=S)))),(S=J7?e0(e,t):n0(e,t))&&(p=Ql(p,"onBeforeInput"),0<p.length&&(v=new o1("onBeforeInput","beforeinput",null,t,v),y.push({event:v,listeners:p}),v.data=S))}oo(y,n)})}function Jt(e,n,t){return{instance:e,listener:n,currentTarget:t}}function Ql(e,n){for(var t=n+"Capture",l=[];e!==null;){var i=e,a=i.stateNode;i.tag===5&&a!==null&&(i=a,a=Gt(e,t),a!=null&&l.unshift(Jt(e,a,i)),a=Gt(e,n),a!=null&&l.push(Jt(e,a,i))),e=e.return}return l}function Xn(e){if(e===null)return null;do e=e.return;while(e&&e.tag!==5);return e||null}function k1(e,n,t,l,i){for(var a=n._reactName,s=[];t!==null&&t!==l;){var o=t,c=o.alternate,p=o.stateNode;if(c!==null&&c===l)break;o.tag===5&&p!==null&&(o=p,i?(c=Gt(t,a),c!=null&&s.unshift(Jt(t,c,o))):i||(c=Gt(t,a),c!=null&&s.push(Jt(t,c,o)))),t=t.return}s.length!==0&&e.push({event:n,listeners:s})}var h0=/\r\n?/g,y0=/\u0000|\uFFFD/g;function w1(e){return(typeof e=="string"?e:""+e).replace(h0,`
`).replace(y0,"")}function zl(e,n,t){if(n=w1(n),w1(e)!==n&&t)throw Error(M(425))}function Zl(){}var Nr=null,_r=null;function Sr(e,n){return e==="textarea"||e==="noscript"||typeof n.children=="string"||typeof n.children=="number"||typeof n.dangerouslySetInnerHTML=="object"&&n.dangerouslySetInnerHTML!==null&&n.dangerouslySetInnerHTML.__html!=null}var Mr=typeof setTimeout=="function"?setTimeout:void 0,g0=typeof clearTimeout=="function"?clearTimeout:void 0,z1=typeof Promise=="function"?Promise:void 0,x0=typeof queueMicrotask=="function"?queueMicrotask:typeof z1<"u"?function(e){return z1.resolve(null).then(e).catch(v0)}:Mr;function v0(e){setTimeout(function(){throw e})}function Hi(e,n){var t=n,l=0;do{var i=t.nextSibling;if(e.removeChild(t),i&&i.nodeType===8)if(t=i.data,t==="/$"){if(l===0){e.removeChild(i),Zt(n);return}l--}else t!=="$"&&t!=="$?"&&t!=="$!"||l++;t=i}while(t);Zt(n)}function wn(e){for(;e!=null;e=e.nextSibling){var n=e.nodeType;if(n===1||n===3)break;if(n===8){if(n=e.data,n==="$"||n==="$!"||n==="$?")break;if(n==="/$")return null}}return e}function j1(e){e=e.previousSibling;for(var n=0;e;){if(e.nodeType===8){var t=e.data;if(t==="$"||t==="$!"||t==="$?"){if(n===0)return e;n--}else t==="/$"&&n++}e=e.previousSibling}return null}var wt=Math.random().toString(36).slice(2),Qe="__reactFiber$"+wt,el="__reactProps$"+wt,rn="__reactContainer$"+wt,Cr="__reactEvents$"+wt,k0="__reactListeners$"+wt,w0="__reactHandles$"+wt;function Tn(e){var n=e[Qe];if(n)return n;for(var t=e.parentNode;t;){if(n=t[rn]||t[Qe]){if(t=n.alternate,n.child!==null||t!==null&&t.child!==null)for(e=j1(e);e!==null;){if(t=e[Qe])return t;e=j1(e)}return n}e=t,t=e.parentNode}return null}function cl(e){return e=e[Qe]||e[rn],!e||e.tag!==5&&e.tag!==6&&e.tag!==13&&e.tag!==3?null:e}function Jn(e){if(e.tag===5||e.tag===6)return e.stateNode;throw Error(M(33))}function yi(e){return e[el]||null}var br=[],et=-1;function bn(e){return{current:e}}function Z(e){0>et||(e.current=br[et],br[et]=null,et--)}function X(e,n){et++,br[et]=e.current,e.current=n}var Mn={},me=bn(Mn),ze=bn(!1),$n=Mn;function pt(e,n){var t=e.type.contextTypes;if(!t)return Mn;var l=e.stateNode;if(l&&l.__reactInternalMemoizedUnmaskedChildContext===n)return l.__reactInternalMemoizedMaskedChildContext;var i={},a;for(a in t)i[a]=n[a];return l&&(e=e.stateNode,e.__reactInternalMemoizedUnmaskedChildContext=n,e.__reactInternalMemoizedMaskedChildContext=i),i}function je(e){return e=e.childContextTypes,e!=null}function Kl(){Z(ze),Z(me)}function N1(e,n,t){if(me.current!==Mn)throw Error(M(168));X(me,n),X(ze,t)}function uo(e,n,t){var l=e.stateNode;if(n=n.childContextTypes,typeof l.getChildContext!="function")return t;l=l.getChildContext();for(var i in l)if(!(i in n))throw Error(M(108,r7(e)||"Unknown",i));return J({},t,l)}function Yl(e){return e=(e=e.stateNode)&&e.__reactInternalMemoizedMergedChildContext||Mn,$n=me.current,X(me,e),X(ze,ze.current),!0}function _1(e,n,t){var l=e.stateNode;if(!l)throw Error(M(169));t?(e=uo(e,n,$n),l.__reactInternalMemoizedMergedChildContext=e,Z(ze),Z(me),X(me,e)):Z(ze),X(ze,t)}var Je=null,gi=!1,Ui=!1;function fo(e){Je===null?Je=[e]:Je.push(e)}function z0(e){gi=!0,fo(e)}function En(){if(!Ui&&Je!==null){Ui=!0;var e=0,n=V;try{var t=Je;for(V=1;e<t.length;e++){var l=t[e];do l=l(!0);while(l!==null)}Je=null,gi=!1}catch(i){throw Je!==null&&(Je=Je.slice(e+1)),Ls(aa,En),i}finally{V=n,Ui=!1}}return null}var nt=[],tt=0,ql=null,Jl=0,Pe=[],Fe=0,Wn=null,en=1,nn="";function Pn(e,n){nt[tt++]=Jl,nt[tt++]=ql,ql=e,Jl=n}function po(e,n,t){Pe[Fe++]=en,Pe[Fe++]=nn,Pe[Fe++]=Wn,Wn=e;var l=en;e=nn;var i=32-Re(l)-1;l&=~(1<<i),t+=1;var a=32-Re(n)+i;if(30<a){var s=i-i%5;a=(l&(1<<s)-1).toString(32),l>>=s,i-=s,en=1<<32-Re(n)+i|t<<i|l,nn=a+e}else en=1<<a|t<<i|l,nn=e}function ha(e){e.return!==null&&(Pn(e,1),po(e,1,0))}function ya(e){for(;e===ql;)ql=nt[--tt],nt[tt]=null,Jl=nt[--tt],nt[tt]=null;for(;e===Wn;)Wn=Pe[--Fe],Pe[Fe]=null,nn=Pe[--Fe],Pe[Fe]=null,en=Pe[--Fe],Pe[Fe]=null}var Me=null,Se=null,K=!1,We=null;function mo(e,n){var t=Ae(5,null,null,0);t.elementType="DELETED",t.stateNode=n,t.return=e,n=e.deletions,n===null?(e.deletions=[t],e.flags|=16):n.push(t)}function S1(e,n){switch(e.tag){case 5:var t=e.type;return n=n.nodeType!==1||t.toLowerCase()!==n.nodeName.toLowerCase()?null:n,n!==null?(e.stateNode=n,Me=e,Se=wn(n.firstChild),!0):!1;case 6:return n=e.pendingProps===""||n.nodeType!==3?null:n,n!==null?(e.stateNode=n,Me=e,Se=null,!0):!1;case 13:return n=n.nodeType!==8?null:n,n!==null?(t=Wn!==null?{id:en,overflow:nn}:null,e.memoizedState={dehydrated:n,treeContext:t,retryLane:1073741824},t=Ae(18,null,null,0),t.stateNode=n,t.return=e,e.child=t,Me=e,Se=null,!0):!1;default:return!1}}function Er(e){return(e.mode&1)!==0&&(e.flags&128)===0}function Pr(e){if(K){var n=Se;if(n){var t=n;if(!S1(e,n)){if(Er(e))throw Error(M(418));n=wn(t.nextSibling);var l=Me;n&&S1(e,n)?mo(l,t):(e.flags=e.flags&-4097|2,K=!1,Me=e)}}else{if(Er(e))throw Error(M(418));e.flags=e.flags&-4097|2,K=!1,Me=e}}}function M1(e){for(e=e.return;e!==null&&e.tag!==5&&e.tag!==3&&e.tag!==13;)e=e.return;Me=e}function jl(e){if(e!==Me)return!1;if(!K)return M1(e),K=!0,!1;var n;if((n=e.tag!==3)&&!(n=e.tag!==5)&&(n=e.type,n=n!=="head"&&n!=="body"&&!Sr(e.type,e.memoizedProps)),n&&(n=Se)){if(Er(e))throw ho(),Error(M(418));for(;n;)mo(e,n),n=wn(n.nextSibling)}if(M1(e),e.tag===13){if(e=e.memoizedState,e=e!==null?e.dehydrated:null,!e)throw Error(M(317));e:{for(e=e.nextSibling,n=0;e;){if(e.nodeType===8){var t=e.data;if(t==="/$"){if(n===0){Se=wn(e.nextSibling);break e}n--}else t!=="$"&&t!=="$!"&&t!=="$?"||n++}e=e.nextSibling}Se=null}}else Se=Me?wn(e.stateNode.nextSibling):null;return!0}function ho(){for(var e=Se;e;)e=wn(e.nextSibling)}function mt(){Se=Me=null,K=!1}function ga(e){We===null?We=[e]:We.push(e)}var j0=on.ReactCurrentBatchConfig;function Ct(e,n,t){if(e=t.ref,e!==null&&typeof e!="function"&&typeof e!="object"){if(t._owner){if(t=t._owner,t){if(t.tag!==1)throw Error(M(309));var l=t.stateNode}if(!l)throw Error(M(147,e));var i=l,a=""+e;return n!==null&&n.ref!==null&&typeof n.ref=="function"&&n.ref._stringRef===a?n.ref:(n=function(s){var o=i.refs;s===null?delete o[a]:o[a]=s},n._stringRef=a,n)}if(typeof e!="string")throw Error(M(284));if(!t._owner)throw Error(M(290,e))}return e}function Nl(e,n){throw e=Object.prototype.toString.call(n),Error(M(31,e==="[object Object]"?"object with keys {"+Object.keys(n).join(", ")+"}":e))}function C1(e){var n=e._init;return n(e._payload)}function yo(e){function n(u,d){if(e){var f=u.deletions;f===null?(u.deletions=[d],u.flags|=16):f.push(d)}}function t(u,d){if(!e)return null;for(;d!==null;)n(u,d),d=d.sibling;return null}function l(u,d){for(u=new Map;d!==null;)d.key!==null?u.set(d.key,d):u.set(d.index,d),d=d.sibling;return u}function i(u,d){return u=_n(u,d),u.index=0,u.sibling=null,u}function a(u,d,f){return u.index=f,e?(f=u.alternate,f!==null?(f=f.index,f<d?(u.flags|=2,d):f):(u.flags|=2,d)):(u.flags|=1048576,d)}function s(u){return e&&u.alternate===null&&(u.flags|=2),u}function o(u,d,f,h){return d===null||d.tag!==6?(d=Yi(f,u.mode,h),d.return=u,d):(d=i(d,f),d.return=u,d)}function c(u,d,f,h){var _=f.type;return _===Zn?v(u,d,f.props.children,h,f.key):d!==null&&(d.elementType===_||typeof _=="object"&&_!==null&&_.$$typeof===fn&&C1(_)===d.type)?(h=i(d,f.props),h.ref=Ct(u,d,f),h.return=u,h):(h=Wl(f.type,f.key,f.props,null,u.mode,h),h.ref=Ct(u,d,f),h.return=u,h)}function p(u,d,f,h){return d===null||d.tag!==4||d.stateNode.containerInfo!==f.containerInfo||d.stateNode.implementation!==f.implementation?(d=qi(f,u.mode,h),d.return=u,d):(d=i(d,f.children||[]),d.return=u,d)}function v(u,d,f,h,_){return d===null||d.tag!==7?(d=On(f,u.mode,h,_),d.return=u,d):(d=i(d,f),d.return=u,d)}function y(u,d,f){if(typeof d=="string"&&d!==""||typeof d=="number")return d=Yi(""+d,u.mode,f),d.return=u,d;if(typeof d=="object"&&d!==null){switch(d.$$typeof){case pl:return f=Wl(d.type,d.key,d.props,null,u.mode,f),f.ref=Ct(u,null,d),f.return=u,f;case Qn:return d=qi(d,u.mode,f),d.return=u,d;case fn:var h=d._init;return y(u,h(d._payload),f)}if(Ft(d)||jt(d))return d=On(d,u.mode,f,null),d.return=u,d;Nl(u,d)}return null}function m(u,d,f,h){var _=d!==null?d.key:null;if(typeof f=="string"&&f!==""||typeof f=="number")return _!==null?null:o(u,d,""+f,h);if(typeof f=="object"&&f!==null){switch(f.$$typeof){case pl:return f.key===_?c(u,d,f,h):null;case Qn:return f.key===_?p(u,d,f,h):null;case fn:return _=f._init,m(u,d,_(f._payload),h)}if(Ft(f)||jt(f))return _!==null?null:v(u,d,f,h,null);Nl(u,f)}return null}function w(u,d,f,h,_){if(typeof h=="string"&&h!==""||typeof h=="number")return u=u.get(f)||null,o(d,u,""+h,_);if(typeof h=="object"&&h!==null){switch(h.$$typeof){case pl:return u=u.get(h.key===null?f:h.key)||null,c(d,u,h,_);case Qn:return u=u.get(h.key===null?f:h.key)||null,p(d,u,h,_);case fn:var z=h._init;return w(u,d,f,z(h._payload),_)}if(Ft(h)||jt(h))return u=u.get(f)||null,v(d,u,h,_,null);Nl(d,h)}return null}function k(u,d,f,h){for(var _=null,z=null,S=d,j=d=0,P=null;S!==null&&j<f.length;j++){S.index>j?(P=S,S=null):P=S.sibling;var E=m(u,S,f[j],h);if(E===null){S===null&&(S=P);break}e&&S&&E.alternate===null&&n(u,S),d=a(E,d,j),z===null?_=E:z.sibling=E,z=E,S=P}if(j===f.length)return t(u,S),K&&Pn(u,j),_;if(S===null){for(;j<f.length;j++)S=y(u,f[j],h),S!==null&&(d=a(S,d,j),z===null?_=S:z.sibling=S,z=S);return K&&Pn(u,j),_}for(S=l(u,S);j<f.length;j++)P=w(S,u,j,f[j],h),P!==null&&(e&&P.alternate!==null&&S.delete(P.key===null?j:P.key),d=a(P,d,j),z===null?_=P:z.sibling=P,z=P);return e&&S.forEach(function(D){return n(u,D)}),K&&Pn(u,j),_}function g(u,d,f,h){var _=jt(f);if(typeof _!="function")throw Error(M(150));if(f=_.call(f),f==null)throw Error(M(151));for(var z=_=null,S=d,j=d=0,P=null,E=f.next();S!==null&&!E.done;j++,E=f.next()){S.index>j?(P=S,S=null):P=S.sibling;var D=m(u,S,E.value,h);if(D===null){S===null&&(S=P);break}e&&S&&D.alternate===null&&n(u,S),d=a(D,d,j),z===null?_=D:z.sibling=D,z=D,S=P}if(E.done)return t(u,S),K&&Pn(u,j),_;if(S===null){for(;!E.done;j++,E=f.next())E=y(u,E.value,h),E!==null&&(d=a(E,d,j),z===null?_=E:z.sibling=E,z=E);return K&&Pn(u,j),_}for(S=l(u,S);!E.done;j++,E=f.next())E=w(S,u,j,E.value,h),E!==null&&(e&&E.alternate!==null&&S.delete(E.key===null?j:E.key),d=a(E,d,j),z===null?_=E:z.sibling=E,z=E);return e&&S.forEach(function(G){return n(u,G)}),K&&Pn(u,j),_}function C(u,d,f,h){if(typeof f=="object"&&f!==null&&f.type===Zn&&f.key===null&&(f=f.props.children),typeof f=="object"&&f!==null){switch(f.$$typeof){case pl:e:{for(var _=f.key,z=d;z!==null;){if(z.key===_){if(_=f.type,_===Zn){if(z.tag===7){t(u,z.sibling),d=i(z,f.props.children),d.return=u,u=d;break e}}else if(z.elementType===_||typeof _=="object"&&_!==null&&_.$$typeof===fn&&C1(_)===z.type){t(u,z.sibling),d=i(z,f.props),d.ref=Ct(u,z,f),d.return=u,u=d;break e}t(u,z);break}else n(u,z);z=z.sibling}f.type===Zn?(d=On(f.props.children,u.mode,h,f.key),d.return=u,u=d):(h=Wl(f.type,f.key,f.props,null,u.mode,h),h.ref=Ct(u,d,f),h.return=u,u=h)}return s(u);case Qn:e:{for(z=f.key;d!==null;){if(d.key===z)if(d.tag===4&&d.stateNode.containerInfo===f.containerInfo&&d.stateNode.implementation===f.implementation){t(u,d.sibling),d=i(d,f.children||[]),d.return=u,u=d;break e}else{t(u,d);break}else n(u,d);d=d.sibling}d=qi(f,u.mode,h),d.return=u,u=d}return s(u);case fn:return z=f._init,C(u,d,z(f._payload),h)}if(Ft(f))return k(u,d,f,h);if(jt(f))return g(u,d,f,h);Nl(u,f)}return typeof f=="string"&&f!==""||typeof f=="number"?(f=""+f,d!==null&&d.tag===6?(t(u,d.sibling),d=i(d,f),d.return=u,u=d):(t(u,d),d=Yi(f,u.mode,h),d.return=u,u=d),s(u)):t(u,d)}return C}var ht=yo(!0),go=yo(!1),ei=bn(null),ni=null,lt=null,xa=null;function va(){xa=lt=ni=null}function ka(e){var n=ei.current;Z(ei),e._currentValue=n}function Fr(e,n,t){for(;e!==null;){var l=e.alternate;if((e.childLanes&n)!==n?(e.childLanes|=n,l!==null&&(l.childLanes|=n)):l!==null&&(l.childLanes&n)!==n&&(l.childLanes|=n),e===t)break;e=e.return}}function ct(e,n){ni=e,xa=lt=null,e=e.dependencies,e!==null&&e.firstContext!==null&&(e.lanes&n&&(we=!0),e.firstContext=null)}function Ie(e){var n=e._currentValue;if(xa!==e)if(e={context:e,memoizedValue:n,next:null},lt===null){if(ni===null)throw Error(M(308));lt=e,ni.dependencies={lanes:0,firstContext:e}}else lt=lt.next=e;return n}var In=null;function wa(e){In===null?In=[e]:In.push(e)}function xo(e,n,t,l){var i=n.interleaved;return i===null?(t.next=t,wa(n)):(t.next=i.next,i.next=t),n.interleaved=t,an(e,l)}function an(e,n){e.lanes|=n;var t=e.alternate;for(t!==null&&(t.lanes|=n),t=e,e=e.return;e!==null;)e.childLanes|=n,t=e.alternate,t!==null&&(t.childLanes|=n),t=e,e=e.return;return t.tag===3?t.stateNode:null}var pn=!1;function za(e){e.updateQueue={baseState:e.memoizedState,firstBaseUpdate:null,lastBaseUpdate:null,shared:{pending:null,interleaved:null,lanes:0},effects:null}}function vo(e,n){e=e.updateQueue,n.updateQueue===e&&(n.updateQueue={baseState:e.baseState,firstBaseUpdate:e.firstBaseUpdate,lastBaseUpdate:e.lastBaseUpdate,shared:e.shared,effects:e.effects})}function tn(e,n){return{eventTime:e,lane:n,tag:0,payload:null,callback:null,next:null}}function zn(e,n,t){var l=e.updateQueue;if(l===null)return null;if(l=l.shared,U&2){var i=l.pending;return i===null?n.next=n:(n.next=i.next,i.next=n),l.pending=n,an(e,t)}return i=l.interleaved,i===null?(n.next=n,wa(l)):(n.next=i.next,i.next=n),l.interleaved=n,an(e,t)}function Tl(e,n,t){if(n=n.updateQueue,n!==null&&(n=n.shared,(t&4194240)!==0)){var l=n.lanes;l&=e.pendingLanes,t|=l,n.lanes=t,sa(e,t)}}function b1(e,n){var t=e.updateQueue,l=e.alternate;if(l!==null&&(l=l.updateQueue,t===l)){var i=null,a=null;if(t=t.firstBaseUpdate,t!==null){do{var s={eventTime:t.eventTime,lane:t.lane,tag:t.tag,payload:t.payload,callback:t.callback,next:null};a===null?i=a=s:a=a.next=s,t=t.next}while(t!==null);a===null?i=a=n:a=a.next=n}else i=a=n;t={baseState:l.baseState,firstBaseUpdate:i,lastBaseUpdate:a,shared:l.shared,effects:l.effects},e.updateQueue=t;return}e=t.lastBaseUpdate,e===null?t.firstBaseUpdate=n:e.next=n,t.lastBaseUpdate=n}function ti(e,n,t,l){var i=e.updateQueue;pn=!1;var a=i.firstBaseUpdate,s=i.lastBaseUpdate,o=i.shared.pending;if(o!==null){i.shared.pending=null;var c=o,p=c.next;c.next=null,s===null?a=p:s.next=p,s=c;var v=e.alternate;v!==null&&(v=v.updateQueue,o=v.lastBaseUpdate,o!==s&&(o===null?v.firstBaseUpdate=p:o.next=p,v.lastBaseUpdate=c))}if(a!==null){var y=i.baseState;s=0,v=p=c=null,o=a;do{var m=o.lane,w=o.eventTime;if((l&m)===m){v!==null&&(v=v.next={eventTime:w,lane:0,tag:o.tag,payload:o.payload,callback:o.callback,next:null});e:{var k=e,g=o;switch(m=n,w=t,g.tag){case 1:if(k=g.payload,typeof k=="function"){y=k.call(w,y,m);break e}y=k;break e;case 3:k.flags=k.flags&-65537|128;case 0:if(k=g.payload,m=typeof k=="function"?k.call(w,y,m):k,m==null)break e;y=J({},y,m);break e;case 2:pn=!0}}o.callback!==null&&o.lane!==0&&(e.flags|=64,m=i.effects,m===null?i.effects=[o]:m.push(o))}else w={eventTime:w,lane:m,tag:o.tag,payload:o.payload,callback:o.callback,next:null},v===null?(p=v=w,c=y):v=v.next=w,s|=m;if(o=o.next,o===null){if(o=i.shared.pending,o===null)break;m=o,o=m.next,m.next=null,i.lastBaseUpdate=m,i.shared.pending=null}}while(!0);if(v===null&&(c=y),i.baseState=c,i.firstBaseUpdate=p,i.lastBaseUpdate=v,n=i.shared.interleaved,n!==null){i=n;do s|=i.lane,i=i.next;while(i!==n)}else a===null&&(i.shared.lanes=0);Bn|=s,e.lanes=s,e.memoizedState=y}}function E1(e,n,t){if(e=n.effects,n.effects=null,e!==null)for(n=0;n<e.length;n++){var l=e[n],i=l.callback;if(i!==null){if(l.callback=null,l=t,typeof i!="function")throw Error(M(191,i));i.call(l)}}}var ul={},Ke=bn(ul),nl=bn(ul),tl=bn(ul);function Ln(e){if(e===ul)throw Error(M(174));return e}function ja(e,n){switch(X(tl,n),X(nl,e),X(Ke,ul),e=n.nodeType,e){case 9:case 11:n=(n=n.documentElement)?n.namespaceURI:fr(null,"");break;default:e=e===8?n.parentNode:n,n=e.namespaceURI||null,e=e.tagName,n=fr(n,e)}Z(Ke),X(Ke,n)}function yt(){Z(Ke),Z(nl),Z(tl)}function ko(e){Ln(tl.current);var n=Ln(Ke.current),t=fr(n,e.type);n!==t&&(X(nl,e),X(Ke,t))}function Na(e){nl.current===e&&(Z(Ke),Z(nl))}var Y=bn(0);function li(e){for(var n=e;n!==null;){if(n.tag===13){var t=n.memoizedState;if(t!==null&&(t=t.dehydrated,t===null||t.data==="$?"||t.data==="$!"))return n}else if(n.tag===19&&n.memoizedProps.revealOrder!==void 0){if(n.flags&128)return n}else if(n.child!==null){n.child.return=n,n=n.child;continue}if(n===e)break;for(;n.sibling===null;){if(n.return===null||n.return===e)return null;n=n.return}n.sibling.return=n.return,n=n.sibling}return null}var Vi=[];function _a(){for(var e=0;e<Vi.length;e++)Vi[e]._workInProgressVersionPrimary=null;Vi.length=0}var Il=on.ReactCurrentDispatcher,Gi=on.ReactCurrentBatchConfig,Rn=0,q=null,ie=null,ae=null,ii=!1,Wt=!1,ll=0,N0=0;function ue(){throw Error(M(321))}function Sa(e,n){if(n===null)return!1;for(var t=0;t<n.length&&t<e.length;t++)if(!He(e[t],n[t]))return!1;return!0}function Ma(e,n,t,l,i,a){if(Rn=a,q=n,n.memoizedState=null,n.updateQueue=null,n.lanes=0,Il.current=e===null||e.memoizedState===null?C0:b0,e=t(l,i),Wt){a=0;do{if(Wt=!1,ll=0,25<=a)throw Error(M(301));a+=1,ae=ie=null,n.updateQueue=null,Il.current=E0,e=t(l,i)}while(Wt)}if(Il.current=ri,n=ie!==null&&ie.next!==null,Rn=0,ae=ie=q=null,ii=!1,n)throw Error(M(300));return e}function Ca(){var e=ll!==0;return ll=0,e}function Xe(){var e={memoizedState:null,baseState:null,baseQueue:null,queue:null,next:null};return ae===null?q.memoizedState=ae=e:ae=ae.next=e,ae}function Le(){if(ie===null){var e=q.alternate;e=e!==null?e.memoizedState:null}else e=ie.next;var n=ae===null?q.memoizedState:ae.next;if(n!==null)ae=n,ie=e;else{if(e===null)throw Error(M(310));ie=e,e={memoizedState:ie.memoizedState,baseState:ie.baseState,baseQueue:ie.baseQueue,queue:ie.queue,next:null},ae===null?q.memoizedState=ae=e:ae=ae.next=e}return ae}function il(e,n){return typeof n=="function"?n(e):n}function Xi(e){var n=Le(),t=n.queue;if(t===null)throw Error(M(311));t.lastRenderedReducer=e;var l=ie,i=l.baseQueue,a=t.pending;if(a!==null){if(i!==null){var s=i.next;i.next=a.next,a.next=s}l.baseQueue=i=a,t.pending=null}if(i!==null){a=i.next,l=l.baseState;var o=s=null,c=null,p=a;do{var v=p.lane;if((Rn&v)===v)c!==null&&(c=c.next={lane:0,action:p.action,hasEagerState:p.hasEagerState,eagerState:p.eagerState,next:null}),l=p.hasEagerState?p.eagerState:e(l,p.action);else{var y={lane:v,action:p.action,hasEagerState:p.hasEagerState,eagerState:p.eagerState,next:null};c===null?(o=c=y,s=l):c=c.next=y,q.lanes|=v,Bn|=v}p=p.next}while(p!==null&&p!==a);c===null?s=l:c.next=o,He(l,n.memoizedState)||(we=!0),n.memoizedState=l,n.baseState=s,n.baseQueue=c,t.lastRenderedState=l}if(e=t.interleaved,e!==null){i=e;do a=i.lane,q.lanes|=a,Bn|=a,i=i.next;while(i!==e)}else i===null&&(t.lanes=0);return[n.memoizedState,t.dispatch]}function Qi(e){var n=Le(),t=n.queue;if(t===null)throw Error(M(311));t.lastRenderedReducer=e;var l=t.dispatch,i=t.pending,a=n.memoizedState;if(i!==null){t.pending=null;var s=i=i.next;do a=e(a,s.action),s=s.next;while(s!==i);He(a,n.memoizedState)||(we=!0),n.memoizedState=a,n.baseQueue===null&&(n.baseState=a),t.lastRenderedState=a}return[a,l]}function wo(){}function zo(e,n){var t=q,l=Le(),i=n(),a=!He(l.memoizedState,i);if(a&&(l.memoizedState=i,we=!0),l=l.queue,ba(_o.bind(null,t,l,e),[e]),l.getSnapshot!==n||a||ae!==null&&ae.memoizedState.tag&1){if(t.flags|=2048,rl(9,No.bind(null,t,l,i,n),void 0,null),se===null)throw Error(M(349));Rn&30||jo(t,n,i)}return i}function jo(e,n,t){e.flags|=16384,e={getSnapshot:n,value:t},n=q.updateQueue,n===null?(n={lastEffect:null,stores:null},q.updateQueue=n,n.stores=[e]):(t=n.stores,t===null?n.stores=[e]:t.push(e))}function No(e,n,t,l){n.value=t,n.getSnapshot=l,So(n)&&Mo(e)}function _o(e,n,t){return t(function(){So(n)&&Mo(e)})}function So(e){var n=e.getSnapshot;e=e.value;try{var t=n();return!He(e,t)}catch{return!0}}function Mo(e){var n=an(e,1);n!==null&&Be(n,e,1,-1)}function P1(e){var n=Xe();return typeof e=="function"&&(e=e()),n.memoizedState=n.baseState=e,e={pending:null,interleaved:null,lanes:0,dispatch:null,lastRenderedReducer:il,lastRenderedState:e},n.queue=e,e=e.dispatch=M0.bind(null,q,e),[n.memoizedState,e]}function rl(e,n,t,l){return e={tag:e,create:n,destroy:t,deps:l,next:null},n=q.updateQueue,n===null?(n={lastEffect:null,stores:null},q.updateQueue=n,n.lastEffect=e.next=e):(t=n.lastEffect,t===null?n.lastEffect=e.next=e:(l=t.next,t.next=e,e.next=l,n.lastEffect=e)),e}function Co(){return Le().memoizedState}function Ll(e,n,t,l){var i=Xe();q.flags|=e,i.memoizedState=rl(1|n,t,void 0,l===void 0?null:l)}function xi(e,n,t,l){var i=Le();l=l===void 0?null:l;var a=void 0;if(ie!==null){var s=ie.memoizedState;if(a=s.destroy,l!==null&&Sa(l,s.deps)){i.memoizedState=rl(n,t,a,l);return}}q.flags|=e,i.memoizedState=rl(1|n,t,a,l)}function F1(e,n){return Ll(8390656,8,e,n)}function ba(e,n){return xi(2048,8,e,n)}function bo(e,n){return xi(4,2,e,n)}function Eo(e,n){return xi(4,4,e,n)}function Po(e,n){if(typeof n=="function")return e=e(),n(e),function(){n(null)};if(n!=null)return e=e(),n.current=e,function(){n.current=null}}function Fo(e,n,t){return t=t!=null?t.concat([e]):null,xi(4,4,Po.bind(null,n,e),t)}function Ea(){}function Ao(e,n){var t=Le();n=n===void 0?null:n;var l=t.memoizedState;return l!==null&&n!==null&&Sa(n,l[1])?l[0]:(t.memoizedState=[e,n],e)}function To(e,n){var t=Le();n=n===void 0?null:n;var l=t.memoizedState;return l!==null&&n!==null&&Sa(n,l[1])?l[0]:(e=e(),t.memoizedState=[e,n],e)}function Io(e,n,t){return Rn&21?(He(t,n)||(t=$s(),q.lanes|=t,Bn|=t,e.baseState=!0),n):(e.baseState&&(e.baseState=!1,we=!0),e.memoizedState=t)}function _0(e,n){var t=V;V=t!==0&&4>t?t:4,e(!0);var l=Gi.transition;Gi.transition={};try{e(!1),n()}finally{V=t,Gi.transition=l}}function Lo(){return Le().memoizedState}function S0(e,n,t){var l=Nn(e);if(t={lane:l,action:t,hasEagerState:!1,eagerState:null,next:null},Do(e))Oo(n,t);else if(t=xo(e,n,t,l),t!==null){var i=ye();Be(t,e,l,i),$o(t,n,l)}}function M0(e,n,t){var l=Nn(e),i={lane:l,action:t,hasEagerState:!1,eagerState:null,next:null};if(Do(e))Oo(n,i);else{var a=e.alternate;if(e.lanes===0&&(a===null||a.lanes===0)&&(a=n.lastRenderedReducer,a!==null))try{var s=n.lastRenderedState,o=a(s,t);if(i.hasEagerState=!0,i.eagerState=o,He(o,s)){var c=n.interleaved;c===null?(i.next=i,wa(n)):(i.next=c.next,c.next=i),n.interleaved=i;return}}catch{}finally{}t=xo(e,n,i,l),t!==null&&(i=ye(),Be(t,e,l,i),$o(t,n,l))}}function Do(e){var n=e.alternate;return e===q||n!==null&&n===q}function Oo(e,n){Wt=ii=!0;var t=e.pending;t===null?n.next=n:(n.next=t.next,t.next=n),e.pending=n}function $o(e,n,t){if(t&4194240){var l=n.lanes;l&=e.pendingLanes,t|=l,n.lanes=t,sa(e,t)}}var ri={readContext:Ie,useCallback:ue,useContext:ue,useEffect:ue,useImperativeHandle:ue,useInsertionEffect:ue,useLayoutEffect:ue,useMemo:ue,useReducer:ue,useRef:ue,useState:ue,useDebugValue:ue,useDeferredValue:ue,useTransition:ue,useMutableSource:ue,useSyncExternalStore:ue,useId:ue,unstable_isNewReconciler:!1},C0={readContext:Ie,useCallback:function(e,n){return Xe().memoizedState=[e,n===void 0?null:n],e},useContext:Ie,useEffect:F1,useImperativeHandle:function(e,n,t){return t=t!=null?t.concat([e]):null,Ll(4194308,4,Po.bind(null,n,e),t)},useLayoutEffect:function(e,n){return Ll(4194308,4,e,n)},useInsertionEffect:function(e,n){return Ll(4,2,e,n)},useMemo:function(e,n){var t=Xe();return n=n===void 0?null:n,e=e(),t.memoizedState=[e,n],e},useReducer:function(e,n,t){var l=Xe();return n=t!==void 0?t(n):n,l.memoizedState=l.baseState=n,e={pending:null,interleaved:null,lanes:0,dispatch:null,lastRenderedReducer:e,lastRenderedState:n},l.queue=e,e=e.dispatch=S0.bind(null,q,e),[l.memoizedState,e]},useRef:function(e){var n=Xe();return e={current:e},n.memoizedState=e},useState:P1,useDebugValue:Ea,useDeferredValue:function(e){return Xe().memoizedState=e},useTransition:function(){var e=P1(!1),n=e[0];return e=_0.bind(null,e[1]),Xe().memoizedState=e,[n,e]},useMutableSource:function(){},useSyncExternalStore:function(e,n,t){var l=q,i=Xe();if(K){if(t===void 0)throw Error(M(407));t=t()}else{if(t=n(),se===null)throw Error(M(349));Rn&30||jo(l,n,t)}i.memoizedState=t;var a={value:t,getSnapshot:n};return i.queue=a,F1(_o.bind(null,l,a,e),[e]),l.flags|=2048,rl(9,No.bind(null,l,a,t,n),void 0,null),t},useId:function(){var e=Xe(),n=se.identifierPrefix;if(K){var t=nn,l=en;t=(l&~(1<<32-Re(l)-1)).toString(32)+t,n=":"+n+"R"+t,t=ll++,0<t&&(n+="H"+t.toString(32)),n+=":"}else t=N0++,n=":"+n+"r"+t.toString(32)+":";return e.memoizedState=n},unstable_isNewReconciler:!1},b0={readContext:Ie,useCallback:Ao,useContext:Ie,useEffect:ba,useImperativeHandle:Fo,useInsertionEffect:bo,useLayoutEffect:Eo,useMemo:To,useReducer:Xi,useRef:Co,useState:function(){return Xi(il)},useDebugValue:Ea,useDeferredValue:function(e){var n=Le();return Io(n,ie.memoizedState,e)},useTransition:function(){var e=Xi(il)[0],n=Le().memoizedState;return[e,n]},useMutableSource:wo,useSyncExternalStore:zo,useId:Lo,unstable_isNewReconciler:!1},E0={readContext:Ie,useCallback:Ao,useContext:Ie,useEffect:ba,useImperativeHandle:Fo,useInsertionEffect:bo,useLayoutEffect:Eo,useMemo:To,useReducer:Qi,useRef:Co,useState:function(){return Qi(il)},useDebugValue:Ea,useDeferredValue:function(e){var n=Le();return ie===null?n.memoizedState=e:Io(n,ie.memoizedState,e)},useTransition:function(){var e=Qi(il)[0],n=Le().memoizedState;return[e,n]},useMutableSource:wo,useSyncExternalStore:zo,useId:Lo,unstable_isNewReconciler:!1};function Oe(e,n){if(e&&e.defaultProps){n=J({},n),e=e.defaultProps;for(var t in e)n[t]===void 0&&(n[t]=e[t]);return n}return n}function Ar(e,n,t,l){n=e.memoizedState,t=t(l,n),t=t==null?n:J({},n,t),e.memoizedState=t,e.lanes===0&&(e.updateQueue.baseState=t)}var vi={isMounted:function(e){return(e=e._reactInternals)?Vn(e)===e:!1},enqueueSetState:function(e,n,t){e=e._reactInternals;var l=ye(),i=Nn(e),a=tn(l,i);a.payload=n,t!=null&&(a.callback=t),n=zn(e,a,i),n!==null&&(Be(n,e,i,l),Tl(n,e,i))},enqueueReplaceState:function(e,n,t){e=e._reactInternals;var l=ye(),i=Nn(e),a=tn(l,i);a.tag=1,a.payload=n,t!=null&&(a.callback=t),n=zn(e,a,i),n!==null&&(Be(n,e,i,l),Tl(n,e,i))},enqueueForceUpdate:function(e,n){e=e._reactInternals;var t=ye(),l=Nn(e),i=tn(t,l);i.tag=2,n!=null&&(i.callback=n),n=zn(e,i,l),n!==null&&(Be(n,e,l,t),Tl(n,e,l))}};function A1(e,n,t,l,i,a,s){return e=e.stateNode,typeof e.shouldComponentUpdate=="function"?e.shouldComponentUpdate(l,a,s):n.prototype&&n.prototype.isPureReactComponent?!Yt(t,l)||!Yt(i,a):!0}function Wo(e,n,t){var l=!1,i=Mn,a=n.contextType;return typeof a=="object"&&a!==null?a=Ie(a):(i=je(n)?$n:me.current,l=n.contextTypes,a=(l=l!=null)?pt(e,i):Mn),n=new n(t,a),e.memoizedState=n.state!==null&&n.state!==void 0?n.state:null,n.updater=vi,e.stateNode=n,n._reactInternals=e,l&&(e=e.stateNode,e.__reactInternalMemoizedUnmaskedChildContext=i,e.__reactInternalMemoizedMaskedChildContext=a),n}function T1(e,n,t,l){e=n.state,typeof n.componentWillReceiveProps=="function"&&n.componentWillReceiveProps(t,l),typeof n.UNSAFE_componentWillReceiveProps=="function"&&n.UNSAFE_componentWillReceiveProps(t,l),n.state!==e&&vi.enqueueReplaceState(n,n.state,null)}function Tr(e,n,t,l){var i=e.stateNode;i.props=t,i.state=e.memoizedState,i.refs={},za(e);var a=n.contextType;typeof a=="object"&&a!==null?i.context=Ie(a):(a=je(n)?$n:me.current,i.context=pt(e,a)),i.state=e.memoizedState,a=n.getDerivedStateFromProps,typeof a=="function"&&(Ar(e,n,a,t),i.state=e.memoizedState),typeof n.getDerivedStateFromProps=="function"||typeof i.getSnapshotBeforeUpdate=="function"||typeof i.UNSAFE_componentWillMount!="function"&&typeof i.componentWillMount!="function"||(n=i.state,typeof i.componentWillMount=="function"&&i.componentWillMount(),typeof i.UNSAFE_componentWillMount=="function"&&i.UNSAFE_componentWillMount(),n!==i.state&&vi.enqueueReplaceState(i,i.state,null),ti(e,t,i,l),i.state=e.memoizedState),typeof i.componentDidMount=="function"&&(e.flags|=4194308)}function gt(e,n){try{var t="",l=n;do t+=i7(l),l=l.return;while(l);var i=t}catch(a){i=`
Error generating stack: `+a.message+`
`+a.stack}return{value:e,source:n,stack:i,digest:null}}function Zi(e,n,t){return{value:e,source:null,stack:t??null,digest:n??null}}function Ir(e,n){try{console.error(n.value)}catch(t){setTimeout(function(){throw t})}}var P0=typeof WeakMap=="function"?WeakMap:Map;function Ro(e,n,t){t=tn(-1,t),t.tag=3,t.payload={element:null};var l=n.value;return t.callback=function(){si||(si=!0,Vr=l),Ir(e,n)},t}function Bo(e,n,t){t=tn(-1,t),t.tag=3;var l=e.type.getDerivedStateFromError;if(typeof l=="function"){var i=n.value;t.payload=function(){return l(i)},t.callback=function(){Ir(e,n)}}var a=e.stateNode;return a!==null&&typeof a.componentDidCatch=="function"&&(t.callback=function(){Ir(e,n),typeof l!="function"&&(jn===null?jn=new Set([this]):jn.add(this));var s=n.stack;this.componentDidCatch(n.value,{componentStack:s!==null?s:""})}),t}function I1(e,n,t){var l=e.pingCache;if(l===null){l=e.pingCache=new P0;var i=new Set;l.set(n,i)}else i=l.get(n),i===void 0&&(i=new Set,l.set(n,i));i.has(t)||(i.add(t),e=V0.bind(null,e,n,t),n.then(e,e))}function L1(e){do{var n;if((n=e.tag===13)&&(n=e.memoizedState,n=n!==null?n.dehydrated!==null:!0),n)return e;e=e.return}while(e!==null);return null}function D1(e,n,t,l,i){return e.mode&1?(e.flags|=65536,e.lanes=i,e):(e===n?e.flags|=65536:(e.flags|=128,t.flags|=131072,t.flags&=-52805,t.tag===1&&(t.alternate===null?t.tag=17:(n=tn(-1,1),n.tag=2,zn(t,n,1))),t.lanes|=1),e)}var F0=on.ReactCurrentOwner,we=!1;function he(e,n,t,l){n.child=e===null?go(n,null,t,l):ht(n,e.child,t,l)}function O1(e,n,t,l,i){t=t.render;var a=n.ref;return ct(n,i),l=Ma(e,n,t,l,a,i),t=Ca(),e!==null&&!we?(n.updateQueue=e.updateQueue,n.flags&=-2053,e.lanes&=~i,sn(e,n,i)):(K&&t&&ha(n),n.flags|=1,he(e,n,l,i),n.child)}function $1(e,n,t,l,i){if(e===null){var a=t.type;return typeof a=="function"&&!Oa(a)&&a.defaultProps===void 0&&t.compare===null&&t.defaultProps===void 0?(n.tag=15,n.type=a,Ho(e,n,a,l,i)):(e=Wl(t.type,null,l,n,n.mode,i),e.ref=n.ref,e.return=n,n.child=e)}if(a=e.child,!(e.lanes&i)){var s=a.memoizedProps;if(t=t.compare,t=t!==null?t:Yt,t(s,l)&&e.ref===n.ref)return sn(e,n,i)}return n.flags|=1,e=_n(a,l),e.ref=n.ref,e.return=n,n.child=e}function Ho(e,n,t,l,i){if(e!==null){var a=e.memoizedProps;if(Yt(a,l)&&e.ref===n.ref)if(we=!1,n.pendingProps=l=a,(e.lanes&i)!==0)e.flags&131072&&(we=!0);else return n.lanes=e.lanes,sn(e,n,i)}return Lr(e,n,t,l,i)}function Uo(e,n,t){var l=n.pendingProps,i=l.children,a=e!==null?e.memoizedState:null;if(l.mode==="hidden")if(!(n.mode&1))n.memoizedState={baseLanes:0,cachePool:null,transitions:null},X(rt,_e),_e|=t;else{if(!(t&1073741824))return e=a!==null?a.baseLanes|t:t,n.lanes=n.childLanes=1073741824,n.memoizedState={baseLanes:e,cachePool:null,transitions:null},n.updateQueue=null,X(rt,_e),_e|=e,null;n.memoizedState={baseLanes:0,cachePool:null,transitions:null},l=a!==null?a.baseLanes:t,X(rt,_e),_e|=l}else a!==null?(l=a.baseLanes|t,n.memoizedState=null):l=t,X(rt,_e),_e|=l;return he(e,n,i,t),n.child}function Vo(e,n){var t=n.ref;(e===null&&t!==null||e!==null&&e.ref!==t)&&(n.flags|=512,n.flags|=2097152)}function Lr(e,n,t,l,i){var a=je(t)?$n:me.current;return a=pt(n,a),ct(n,i),t=Ma(e,n,t,l,a,i),l=Ca(),e!==null&&!we?(n.updateQueue=e.updateQueue,n.flags&=-2053,e.lanes&=~i,sn(e,n,i)):(K&&l&&ha(n),n.flags|=1,he(e,n,t,i),n.child)}function W1(e,n,t,l,i){if(je(t)){var a=!0;Yl(n)}else a=!1;if(ct(n,i),n.stateNode===null)Dl(e,n),Wo(n,t,l),Tr(n,t,l,i),l=!0;else if(e===null){var s=n.stateNode,o=n.memoizedProps;s.props=o;var c=s.context,p=t.contextType;typeof p=="object"&&p!==null?p=Ie(p):(p=je(t)?$n:me.current,p=pt(n,p));var v=t.getDerivedStateFromProps,y=typeof v=="function"||typeof s.getSnapshotBeforeUpdate=="function";y||typeof s.UNSAFE_componentWillReceiveProps!="function"&&typeof s.componentWillReceiveProps!="function"||(o!==l||c!==p)&&T1(n,s,l,p),pn=!1;var m=n.memoizedState;s.state=m,ti(n,l,s,i),c=n.memoizedState,o!==l||m!==c||ze.current||pn?(typeof v=="function"&&(Ar(n,t,v,l),c=n.memoizedState),(o=pn||A1(n,t,o,l,m,c,p))?(y||typeof s.UNSAFE_componentWillMount!="function"&&typeof s.componentWillMount!="function"||(typeof s.componentWillMount=="function"&&s.componentWillMount(),typeof s.UNSAFE_componentWillMount=="function"&&s.UNSAFE_componentWillMount()),typeof s.componentDidMount=="function"&&(n.flags|=4194308)):(typeof s.componentDidMount=="function"&&(n.flags|=4194308),n.memoizedProps=l,n.memoizedState=c),s.props=l,s.state=c,s.context=p,l=o):(typeof s.componentDidMount=="function"&&(n.flags|=4194308),l=!1)}else{s=n.stateNode,vo(e,n),o=n.memoizedProps,p=n.type===n.elementType?o:Oe(n.type,o),s.props=p,y=n.pendingProps,m=s.context,c=t.contextType,typeof c=="object"&&c!==null?c=Ie(c):(c=je(t)?$n:me.current,c=pt(n,c));var w=t.getDerivedStateFromProps;(v=typeof w=="function"||typeof s.getSnapshotBeforeUpdate=="function")||typeof s.UNSAFE_componentWillReceiveProps!="function"&&typeof s.componentWillReceiveProps!="function"||(o!==y||m!==c)&&T1(n,s,l,c),pn=!1,m=n.memoizedState,s.state=m,ti(n,l,s,i);var k=n.memoizedState;o!==y||m!==k||ze.current||pn?(typeof w=="function"&&(Ar(n,t,w,l),k=n.memoizedState),(p=pn||A1(n,t,p,l,m,k,c)||!1)?(v||typeof s.UNSAFE_componentWillUpdate!="function"&&typeof s.componentWillUpdate!="function"||(typeof s.componentWillUpdate=="function"&&s.componentWillUpdate(l,k,c),typeof s.UNSAFE_componentWillUpdate=="function"&&s.UNSAFE_componentWillUpdate(l,k,c)),typeof s.componentDidUpdate=="function"&&(n.flags|=4),typeof s.getSnapshotBeforeUpdate=="function"&&(n.flags|=1024)):(typeof s.componentDidUpdate!="function"||o===e.memoizedProps&&m===e.memoizedState||(n.flags|=4),typeof s.getSnapshotBeforeUpdate!="function"||o===e.memoizedProps&&m===e.memoizedState||(n.flags|=1024),n.memoizedProps=l,n.memoizedState=k),s.props=l,s.state=k,s.context=c,l=p):(typeof s.componentDidUpdate!="function"||o===e.memoizedProps&&m===e.memoizedState||(n.flags|=4),typeof s.getSnapshotBeforeUpdate!="function"||o===e.memoizedProps&&m===e.memoizedState||(n.flags|=1024),l=!1)}return Dr(e,n,t,l,a,i)}function Dr(e,n,t,l,i,a){Vo(e,n);var s=(n.flags&128)!==0;if(!l&&!s)return i&&_1(n,t,!1),sn(e,n,a);l=n.stateNode,F0.current=n;var o=s&&typeof t.getDerivedStateFromError!="function"?null:l.render();return n.flags|=1,e!==null&&s?(n.child=ht(n,e.child,null,a),n.child=ht(n,null,o,a)):he(e,n,o,a),n.memoizedState=l.state,i&&_1(n,t,!0),n.child}function Go(e){var n=e.stateNode;n.pendingContext?N1(e,n.pendingContext,n.pendingContext!==n.context):n.context&&N1(e,n.context,!1),ja(e,n.containerInfo)}function R1(e,n,t,l,i){return mt(),ga(i),n.flags|=256,he(e,n,t,l),n.child}var Or={dehydrated:null,treeContext:null,retryLane:0};function $r(e){return{baseLanes:e,cachePool:null,transitions:null}}function Xo(e,n,t){var l=n.pendingProps,i=Y.current,a=!1,s=(n.flags&128)!==0,o;if((o=s)||(o=e!==null&&e.memoizedState===null?!1:(i&2)!==0),o?(a=!0,n.flags&=-129):(e===null||e.memoizedState!==null)&&(i|=1),X(Y,i&1),e===null)return Pr(n),e=n.memoizedState,e!==null&&(e=e.dehydrated,e!==null)?(n.mode&1?e.data==="$!"?n.lanes=8:n.lanes=1073741824:n.lanes=1,null):(s=l.children,e=l.fallback,a?(l=n.mode,a=n.child,s={mode:"hidden",children:s},!(l&1)&&a!==null?(a.childLanes=0,a.pendingProps=s):a=zi(s,l,0,null),e=On(e,l,t,null),a.return=n,e.return=n,a.sibling=e,n.child=a,n.child.memoizedState=$r(t),n.memoizedState=Or,e):Pa(n,s));if(i=e.memoizedState,i!==null&&(o=i.dehydrated,o!==null))return A0(e,n,s,l,o,i,t);if(a){a=l.fallback,s=n.mode,i=e.child,o=i.sibling;var c={mode:"hidden",children:l.children};return!(s&1)&&n.child!==i?(l=n.child,l.childLanes=0,l.pendingProps=c,n.deletions=null):(l=_n(i,c),l.subtreeFlags=i.subtreeFlags&14680064),o!==null?a=_n(o,a):(a=On(a,s,t,null),a.flags|=2),a.return=n,l.return=n,l.sibling=a,n.child=l,l=a,a=n.child,s=e.child.memoizedState,s=s===null?$r(t):{baseLanes:s.baseLanes|t,cachePool:null,transitions:s.transitions},a.memoizedState=s,a.childLanes=e.childLanes&~t,n.memoizedState=Or,l}return a=e.child,e=a.sibling,l=_n(a,{mode:"visible",children:l.children}),!(n.mode&1)&&(l.lanes=t),l.return=n,l.sibling=null,e!==null&&(t=n.deletions,t===null?(n.deletions=[e],n.flags|=16):t.push(e)),n.child=l,n.memoizedState=null,l}function Pa(e,n){return n=zi({mode:"visible",children:n},e.mode,0,null),n.return=e,e.child=n}function _l(e,n,t,l){return l!==null&&ga(l),ht(n,e.child,null,t),e=Pa(n,n.pendingProps.children),e.flags|=2,n.memoizedState=null,e}function A0(e,n,t,l,i,a,s){if(t)return n.flags&256?(n.flags&=-257,l=Zi(Error(M(422))),_l(e,n,s,l)):n.memoizedState!==null?(n.child=e.child,n.flags|=128,null):(a=l.fallback,i=n.mode,l=zi({mode:"visible",children:l.children},i,0,null),a=On(a,i,s,null),a.flags|=2,l.return=n,a.return=n,l.sibling=a,n.child=l,n.mode&1&&ht(n,e.child,null,s),n.child.memoizedState=$r(s),n.memoizedState=Or,a);if(!(n.mode&1))return _l(e,n,s,null);if(i.data==="$!"){if(l=i.nextSibling&&i.nextSibling.dataset,l)var o=l.dgst;return l=o,a=Error(M(419)),l=Zi(a,l,void 0),_l(e,n,s,l)}if(o=(s&e.childLanes)!==0,we||o){if(l=se,l!==null){switch(s&-s){case 4:i=2;break;case 16:i=8;break;case 64:case 128:case 256:case 512:case 1024:case 2048:case 4096:case 8192:case 16384:case 32768:case 65536:case 131072:case 262144:case 524288:case 1048576:case 2097152:case 4194304:case 8388608:case 16777216:case 33554432:case 67108864:i=32;break;case 536870912:i=268435456;break;default:i=0}i=i&(l.suspendedLanes|s)?0:i,i!==0&&i!==a.retryLane&&(a.retryLane=i,an(e,i),Be(l,e,i,-1))}return Da(),l=Zi(Error(M(421))),_l(e,n,s,l)}return i.data==="$?"?(n.flags|=128,n.child=e.child,n=G0.bind(null,e),i._reactRetry=n,null):(e=a.treeContext,Se=wn(i.nextSibling),Me=n,K=!0,We=null,e!==null&&(Pe[Fe++]=en,Pe[Fe++]=nn,Pe[Fe++]=Wn,en=e.id,nn=e.overflow,Wn=n),n=Pa(n,l.children),n.flags|=4096,n)}function B1(e,n,t){e.lanes|=n;var l=e.alternate;l!==null&&(l.lanes|=n),Fr(e.return,n,t)}function Ki(e,n,t,l,i){var a=e.memoizedState;a===null?e.memoizedState={isBackwards:n,rendering:null,renderingStartTime:0,last:l,tail:t,tailMode:i}:(a.isBackwards=n,a.rendering=null,a.renderingStartTime=0,a.last=l,a.tail=t,a.tailMode=i)}function Qo(e,n,t){var l=n.pendingProps,i=l.revealOrder,a=l.tail;if(he(e,n,l.children,t),l=Y.current,l&2)l=l&1|2,n.flags|=128;else{if(e!==null&&e.flags&128)e:for(e=n.child;e!==null;){if(e.tag===13)e.memoizedState!==null&&B1(e,t,n);else if(e.tag===19)B1(e,t,n);else if(e.child!==null){e.child.return=e,e=e.child;continue}if(e===n)break e;for(;e.sibling===null;){if(e.return===null||e.return===n)break e;e=e.return}e.sibling.return=e.return,e=e.sibling}l&=1}if(X(Y,l),!(n.mode&1))n.memoizedState=null;else switch(i){case"forwards":for(t=n.child,i=null;t!==null;)e=t.alternate,e!==null&&li(e)===null&&(i=t),t=t.sibling;t=i,t===null?(i=n.child,n.child=null):(i=t.sibling,t.sibling=null),Ki(n,!1,i,t,a);break;case"backwards":for(t=null,i=n.child,n.child=null;i!==null;){if(e=i.alternate,e!==null&&li(e)===null){n.child=i;break}e=i.sibling,i.sibling=t,t=i,i=e}Ki(n,!0,t,null,a);break;case"together":Ki(n,!1,null,null,void 0);break;default:n.memoizedState=null}return n.child}function Dl(e,n){!(n.mode&1)&&e!==null&&(e.alternate=null,n.alternate=null,n.flags|=2)}function sn(e,n,t){if(e!==null&&(n.dependencies=e.dependencies),Bn|=n.lanes,!(t&n.childLanes))return null;if(e!==null&&n.child!==e.child)throw Error(M(153));if(n.child!==null){for(e=n.child,t=_n(e,e.pendingProps),n.child=t,t.return=n;e.sibling!==null;)e=e.sibling,t=t.sibling=_n(e,e.pendingProps),t.return=n;t.sibling=null}return n.child}function T0(e,n,t){switch(n.tag){case 3:Go(n),mt();break;case 5:ko(n);break;case 1:je(n.type)&&Yl(n);break;case 4:ja(n,n.stateNode.containerInfo);break;case 10:var l=n.type._context,i=n.memoizedProps.value;X(ei,l._currentValue),l._currentValue=i;break;case 13:if(l=n.memoizedState,l!==null)return l.dehydrated!==null?(X(Y,Y.current&1),n.flags|=128,null):t&n.child.childLanes?Xo(e,n,t):(X(Y,Y.current&1),e=sn(e,n,t),e!==null?e.sibling:null);X(Y,Y.current&1);break;case 19:if(l=(t&n.childLanes)!==0,e.flags&128){if(l)return Qo(e,n,t);n.flags|=128}if(i=n.memoizedState,i!==null&&(i.rendering=null,i.tail=null,i.lastEffect=null),X(Y,Y.current),l)break;return null;case 22:case 23:return n.lanes=0,Uo(e,n,t)}return sn(e,n,t)}var Zo,Wr,Ko,Yo;Zo=function(e,n){for(var t=n.child;t!==null;){if(t.tag===5||t.tag===6)e.appendChild(t.stateNode);else if(t.tag!==4&&t.child!==null){t.child.return=t,t=t.child;continue}if(t===n)break;for(;t.sibling===null;){if(t.return===null||t.return===n)return;t=t.return}t.sibling.return=t.return,t=t.sibling}};Wr=function(){};Ko=function(e,n,t,l){var i=e.memoizedProps;if(i!==l){e=n.stateNode,Ln(Ke.current);var a=null;switch(t){case"input":i=or(e,i),l=or(e,l),a=[];break;case"select":i=J({},i,{value:void 0}),l=J({},l,{value:void 0}),a=[];break;case"textarea":i=ur(e,i),l=ur(e,l),a=[];break;default:typeof i.onClick!="function"&&typeof l.onClick=="function"&&(e.onclick=Zl)}pr(t,l);var s;t=null;for(p in i)if(!l.hasOwnProperty(p)&&i.hasOwnProperty(p)&&i[p]!=null)if(p==="style"){var o=i[p];for(s in o)o.hasOwnProperty(s)&&(t||(t={}),t[s]="")}else p!=="dangerouslySetInnerHTML"&&p!=="children"&&p!=="suppressContentEditableWarning"&&p!=="suppressHydrationWarning"&&p!=="autoFocus"&&(Ut.hasOwnProperty(p)?a||(a=[]):(a=a||[]).push(p,null));for(p in l){var c=l[p];if(o=i!=null?i[p]:void 0,l.hasOwnProperty(p)&&c!==o&&(c!=null||o!=null))if(p==="style")if(o){for(s in o)!o.hasOwnProperty(s)||c&&c.hasOwnProperty(s)||(t||(t={}),t[s]="");for(s in c)c.hasOwnProperty(s)&&o[s]!==c[s]&&(t||(t={}),t[s]=c[s])}else t||(a||(a=[]),a.push(p,t)),t=c;else p==="dangerouslySetInnerHTML"?(c=c?c.__html:void 0,o=o?o.__html:void 0,c!=null&&o!==c&&(a=a||[]).push(p,c)):p==="children"?typeof c!="string"&&typeof c!="number"||(a=a||[]).push(p,""+c):p!=="suppressContentEditableWarning"&&p!=="suppressHydrationWarning"&&(Ut.hasOwnProperty(p)?(c!=null&&p==="onScroll"&&Q("scroll",e),a||o===c||(a=[])):(a=a||[]).push(p,c))}t&&(a=a||[]).push("style",t);var p=a;(n.updateQueue=p)&&(n.flags|=4)}};Yo=function(e,n,t,l){t!==l&&(n.flags|=4)};function bt(e,n){if(!K)switch(e.tailMode){case"hidden":n=e.tail;for(var t=null;n!==null;)n.alternate!==null&&(t=n),n=n.sibling;t===null?e.tail=null:t.sibling=null;break;case"collapsed":t=e.tail;for(var l=null;t!==null;)t.alternate!==null&&(l=t),t=t.sibling;l===null?n||e.tail===null?e.tail=null:e.tail.sibling=null:l.sibling=null}}function fe(e){var n=e.alternate!==null&&e.alternate.child===e.child,t=0,l=0;if(n)for(var i=e.child;i!==null;)t|=i.lanes|i.childLanes,l|=i.subtreeFlags&14680064,l|=i.flags&14680064,i.return=e,i=i.sibling;else for(i=e.child;i!==null;)t|=i.lanes|i.childLanes,l|=i.subtreeFlags,l|=i.flags,i.return=e,i=i.sibling;return e.subtreeFlags|=l,e.childLanes=t,n}function I0(e,n,t){var l=n.pendingProps;switch(ya(n),n.tag){case 2:case 16:case 15:case 0:case 11:case 7:case 8:case 12:case 9:case 14:return fe(n),null;case 1:return je(n.type)&&Kl(),fe(n),null;case 3:return l=n.stateNode,yt(),Z(ze),Z(me),_a(),l.pendingContext&&(l.context=l.pendingContext,l.pendingContext=null),(e===null||e.child===null)&&(jl(n)?n.flags|=4:e===null||e.memoizedState.isDehydrated&&!(n.flags&256)||(n.flags|=1024,We!==null&&(Qr(We),We=null))),Wr(e,n),fe(n),null;case 5:Na(n);var i=Ln(tl.current);if(t=n.type,e!==null&&n.stateNode!=null)Ko(e,n,t,l,i),e.ref!==n.ref&&(n.flags|=512,n.flags|=2097152);else{if(!l){if(n.stateNode===null)throw Error(M(166));return fe(n),null}if(e=Ln(Ke.current),jl(n)){l=n.stateNode,t=n.type;var a=n.memoizedProps;switch(l[Qe]=n,l[el]=a,e=(n.mode&1)!==0,t){case"dialog":Q("cancel",l),Q("close",l);break;case"iframe":case"object":case"embed":Q("load",l);break;case"video":case"audio":for(i=0;i<Tt.length;i++)Q(Tt[i],l);break;case"source":Q("error",l);break;case"img":case"image":case"link":Q("error",l),Q("load",l);break;case"details":Q("toggle",l);break;case"input":Ya(l,a),Q("invalid",l);break;case"select":l._wrapperState={wasMultiple:!!a.multiple},Q("invalid",l);break;case"textarea":Ja(l,a),Q("invalid",l)}pr(t,a),i=null;for(var s in a)if(a.hasOwnProperty(s)){var o=a[s];s==="children"?typeof o=="string"?l.textContent!==o&&(a.suppressHydrationWarning!==!0&&zl(l.textContent,o,e),i=["children",o]):typeof o=="number"&&l.textContent!==""+o&&(a.suppressHydrationWarning!==!0&&zl(l.textContent,o,e),i=["children",""+o]):Ut.hasOwnProperty(s)&&o!=null&&s==="onScroll"&&Q("scroll",l)}switch(t){case"input":ml(l),qa(l,a,!0);break;case"textarea":ml(l),e1(l);break;case"select":case"option":break;default:typeof a.onClick=="function"&&(l.onclick=Zl)}l=i,n.updateQueue=l,l!==null&&(n.flags|=4)}else{s=i.nodeType===9?i:i.ownerDocument,e==="http://www.w3.org/1999/xhtml"&&(e=Ns(t)),e==="http://www.w3.org/1999/xhtml"?t==="script"?(e=s.createElement("div"),e.innerHTML="<script><\/script>",e=e.removeChild(e.firstChild)):typeof l.is=="string"?e=s.createElement(t,{is:l.is}):(e=s.createElement(t),t==="select"&&(s=e,l.multiple?s.multiple=!0:l.size&&(s.size=l.size))):e=s.createElementNS(e,t),e[Qe]=n,e[el]=l,Zo(e,n,!1,!1),n.stateNode=e;e:{switch(s=mr(t,l),t){case"dialog":Q("cancel",e),Q("close",e),i=l;break;case"iframe":case"object":case"embed":Q("load",e),i=l;break;case"video":case"audio":for(i=0;i<Tt.length;i++)Q(Tt[i],e);i=l;break;case"source":Q("error",e),i=l;break;case"img":case"image":case"link":Q("error",e),Q("load",e),i=l;break;case"details":Q("toggle",e),i=l;break;case"input":Ya(e,l),i=or(e,l),Q("invalid",e);break;case"option":i=l;break;case"select":e._wrapperState={wasMultiple:!!l.multiple},i=J({},l,{value:void 0}),Q("invalid",e);break;case"textarea":Ja(e,l),i=ur(e,l),Q("invalid",e);break;default:i=l}pr(t,i),o=i;for(a in o)if(o.hasOwnProperty(a)){var c=o[a];a==="style"?Ms(e,c):a==="dangerouslySetInnerHTML"?(c=c?c.__html:void 0,c!=null&&_s(e,c)):a==="children"?typeof c=="string"?(t!=="textarea"||c!=="")&&Vt(e,c):typeof c=="number"&&Vt(e,""+c):a!=="suppressContentEditableWarning"&&a!=="suppressHydrationWarning"&&a!=="autoFocus"&&(Ut.hasOwnProperty(a)?c!=null&&a==="onScroll"&&Q("scroll",e):c!=null&&na(e,a,c,s))}switch(t){case"input":ml(e),qa(e,l,!1);break;case"textarea":ml(e),e1(e);break;case"option":l.value!=null&&e.setAttribute("value",""+Sn(l.value));break;case"select":e.multiple=!!l.multiple,a=l.value,a!=null?at(e,!!l.multiple,a,!1):l.defaultValue!=null&&at(e,!!l.multiple,l.defaultValue,!0);break;default:typeof i.onClick=="function"&&(e.onclick=Zl)}switch(t){case"button":case"input":case"select":case"textarea":l=!!l.autoFocus;break e;case"img":l=!0;break e;default:l=!1}}l&&(n.flags|=4)}n.ref!==null&&(n.flags|=512,n.flags|=2097152)}return fe(n),null;case 6:if(e&&n.stateNode!=null)Yo(e,n,e.memoizedProps,l);else{if(typeof l!="string"&&n.stateNode===null)throw Error(M(166));if(t=Ln(tl.current),Ln(Ke.current),jl(n)){if(l=n.stateNode,t=n.memoizedProps,l[Qe]=n,(a=l.nodeValue!==t)&&(e=Me,e!==null))switch(e.tag){case 3:zl(l.nodeValue,t,(e.mode&1)!==0);break;case 5:e.memoizedProps.suppressHydrationWarning!==!0&&zl(l.nodeValue,t,(e.mode&1)!==0)}a&&(n.flags|=4)}else l=(t.nodeType===9?t:t.ownerDocument).createTextNode(l),l[Qe]=n,n.stateNode=l}return fe(n),null;case 13:if(Z(Y),l=n.memoizedState,e===null||e.memoizedState!==null&&e.memoizedState.dehydrated!==null){if(K&&Se!==null&&n.mode&1&&!(n.flags&128))ho(),mt(),n.flags|=98560,a=!1;else if(a=jl(n),l!==null&&l.dehydrated!==null){if(e===null){if(!a)throw Error(M(318));if(a=n.memoizedState,a=a!==null?a.dehydrated:null,!a)throw Error(M(317));a[Qe]=n}else mt(),!(n.flags&128)&&(n.memoizedState=null),n.flags|=4;fe(n),a=!1}else We!==null&&(Qr(We),We=null),a=!0;if(!a)return n.flags&65536?n:null}return n.flags&128?(n.lanes=t,n):(l=l!==null,l!==(e!==null&&e.memoizedState!==null)&&l&&(n.child.flags|=8192,n.mode&1&&(e===null||Y.current&1?re===0&&(re=3):Da())),n.updateQueue!==null&&(n.flags|=4),fe(n),null);case 4:return yt(),Wr(e,n),e===null&&qt(n.stateNode.containerInfo),fe(n),null;case 10:return ka(n.type._context),fe(n),null;case 17:return je(n.type)&&Kl(),fe(n),null;case 19:if(Z(Y),a=n.memoizedState,a===null)return fe(n),null;if(l=(n.flags&128)!==0,s=a.rendering,s===null)if(l)bt(a,!1);else{if(re!==0||e!==null&&e.flags&128)for(e=n.child;e!==null;){if(s=li(e),s!==null){for(n.flags|=128,bt(a,!1),l=s.updateQueue,l!==null&&(n.updateQueue=l,n.flags|=4),n.subtreeFlags=0,l=t,t=n.child;t!==null;)a=t,e=l,a.flags&=14680066,s=a.alternate,s===null?(a.childLanes=0,a.lanes=e,a.child=null,a.subtreeFlags=0,a.memoizedProps=null,a.memoizedState=null,a.updateQueue=null,a.dependencies=null,a.stateNode=null):(a.childLanes=s.childLanes,a.lanes=s.lanes,a.child=s.child,a.subtreeFlags=0,a.deletions=null,a.memoizedProps=s.memoizedProps,a.memoizedState=s.memoizedState,a.updateQueue=s.updateQueue,a.type=s.type,e=s.dependencies,a.dependencies=e===null?null:{lanes:e.lanes,firstContext:e.firstContext}),t=t.sibling;return X(Y,Y.current&1|2),n.child}e=e.sibling}a.tail!==null&&ne()>xt&&(n.flags|=128,l=!0,bt(a,!1),n.lanes=4194304)}else{if(!l)if(e=li(s),e!==null){if(n.flags|=128,l=!0,t=e.updateQueue,t!==null&&(n.updateQueue=t,n.flags|=4),bt(a,!0),a.tail===null&&a.tailMode==="hidden"&&!s.alternate&&!K)return fe(n),null}else 2*ne()-a.renderingStartTime>xt&&t!==1073741824&&(n.flags|=128,l=!0,bt(a,!1),n.lanes=4194304);a.isBackwards?(s.sibling=n.child,n.child=s):(t=a.last,t!==null?t.sibling=s:n.child=s,a.last=s)}return a.tail!==null?(n=a.tail,a.rendering=n,a.tail=n.sibling,a.renderingStartTime=ne(),n.sibling=null,t=Y.current,X(Y,l?t&1|2:t&1),n):(fe(n),null);case 22:case 23:return La(),l=n.memoizedState!==null,e!==null&&e.memoizedState!==null!==l&&(n.flags|=8192),l&&n.mode&1?_e&1073741824&&(fe(n),n.subtreeFlags&6&&(n.flags|=8192)):fe(n),null;case 24:return null;case 25:return null}throw Error(M(156,n.tag))}function L0(e,n){switch(ya(n),n.tag){case 1:return je(n.type)&&Kl(),e=n.flags,e&65536?(n.flags=e&-65537|128,n):null;case 3:return yt(),Z(ze),Z(me),_a(),e=n.flags,e&65536&&!(e&128)?(n.flags=e&-65537|128,n):null;case 5:return Na(n),null;case 13:if(Z(Y),e=n.memoizedState,e!==null&&e.dehydrated!==null){if(n.alternate===null)throw Error(M(340));mt()}return e=n.flags,e&65536?(n.flags=e&-65537|128,n):null;case 19:return Z(Y),null;case 4:return yt(),null;case 10:return ka(n.type._context),null;case 22:case 23:return La(),null;case 24:return null;default:return null}}var Sl=!1,pe=!1,D0=typeof WeakSet=="function"?WeakSet:Set,T=null;function it(e,n){var t=e.ref;if(t!==null)if(typeof t=="function")try{t(null)}catch(l){ee(e,n,l)}else t.current=null}function Rr(e,n,t){try{t()}catch(l){ee(e,n,l)}}var H1=!1;function O0(e,n){if(Nr=Gl,e=no(),ma(e)){if("selectionStart"in e)var t={start:e.selectionStart,end:e.selectionEnd};else e:{t=(t=e.ownerDocument)&&t.defaultView||window;var l=t.getSelection&&t.getSelection();if(l&&l.rangeCount!==0){t=l.anchorNode;var i=l.anchorOffset,a=l.focusNode;l=l.focusOffset;try{t.nodeType,a.nodeType}catch{t=null;break e}var s=0,o=-1,c=-1,p=0,v=0,y=e,m=null;n:for(;;){for(var w;y!==t||i!==0&&y.nodeType!==3||(o=s+i),y!==a||l!==0&&y.nodeType!==3||(c=s+l),y.nodeType===3&&(s+=y.nodeValue.length),(w=y.firstChild)!==null;)m=y,y=w;for(;;){if(y===e)break n;if(m===t&&++p===i&&(o=s),m===a&&++v===l&&(c=s),(w=y.nextSibling)!==null)break;y=m,m=y.parentNode}y=w}t=o===-1||c===-1?null:{start:o,end:c}}else t=null}t=t||{start:0,end:0}}else t=null;for(_r={focusedElem:e,selectionRange:t},Gl=!1,T=n;T!==null;)if(n=T,e=n.child,(n.subtreeFlags&1028)!==0&&e!==null)e.return=n,T=e;else for(;T!==null;){n=T;try{var k=n.alternate;if(n.flags&1024)switch(n.tag){case 0:case 11:case 15:break;case 1:if(k!==null){var g=k.memoizedProps,C=k.memoizedState,u=n.stateNode,d=u.getSnapshotBeforeUpdate(n.elementType===n.type?g:Oe(n.type,g),C);u.__reactInternalSnapshotBeforeUpdate=d}break;case 3:var f=n.stateNode.containerInfo;f.nodeType===1?f.textContent="":f.nodeType===9&&f.documentElement&&f.removeChild(f.documentElement);break;case 5:case 6:case 4:case 17:break;default:throw Error(M(163))}}catch(h){ee(n,n.return,h)}if(e=n.sibling,e!==null){e.return=n.return,T=e;break}T=n.return}return k=H1,H1=!1,k}function Rt(e,n,t){var l=n.updateQueue;if(l=l!==null?l.lastEffect:null,l!==null){var i=l=l.next;do{if((i.tag&e)===e){var a=i.destroy;i.destroy=void 0,a!==void 0&&Rr(n,t,a)}i=i.next}while(i!==l)}}function ki(e,n){if(n=n.updateQueue,n=n!==null?n.lastEffect:null,n!==null){var t=n=n.next;do{if((t.tag&e)===e){var l=t.create;t.destroy=l()}t=t.next}while(t!==n)}}function Br(e){var n=e.ref;if(n!==null){var t=e.stateNode;switch(e.tag){case 5:e=t;break;default:e=t}typeof n=="function"?n(e):n.current=e}}function qo(e){var n=e.alternate;n!==null&&(e.alternate=null,qo(n)),e.child=null,e.deletions=null,e.sibling=null,e.tag===5&&(n=e.stateNode,n!==null&&(delete n[Qe],delete n[el],delete n[Cr],delete n[k0],delete n[w0])),e.stateNode=null,e.return=null,e.dependencies=null,e.memoizedProps=null,e.memoizedState=null,e.pendingProps=null,e.stateNode=null,e.updateQueue=null}function Jo(e){return e.tag===5||e.tag===3||e.tag===4}function U1(e){e:for(;;){for(;e.sibling===null;){if(e.return===null||Jo(e.return))return null;e=e.return}for(e.sibling.return=e.return,e=e.sibling;e.tag!==5&&e.tag!==6&&e.tag!==18;){if(e.flags&2||e.child===null||e.tag===4)continue e;e.child.return=e,e=e.child}if(!(e.flags&2))return e.stateNode}}function Hr(e,n,t){var l=e.tag;if(l===5||l===6)e=e.stateNode,n?t.nodeType===8?t.parentNode.insertBefore(e,n):t.insertBefore(e,n):(t.nodeType===8?(n=t.parentNode,n.insertBefore(e,t)):(n=t,n.appendChild(e)),t=t._reactRootContainer,t!=null||n.onclick!==null||(n.onclick=Zl));else if(l!==4&&(e=e.child,e!==null))for(Hr(e,n,t),e=e.sibling;e!==null;)Hr(e,n,t),e=e.sibling}function Ur(e,n,t){var l=e.tag;if(l===5||l===6)e=e.stateNode,n?t.insertBefore(e,n):t.appendChild(e);else if(l!==4&&(e=e.child,e!==null))for(Ur(e,n,t),e=e.sibling;e!==null;)Ur(e,n,t),e=e.sibling}var oe=null,$e=!1;function dn(e,n,t){for(t=t.child;t!==null;)ed(e,n,t),t=t.sibling}function ed(e,n,t){if(Ze&&typeof Ze.onCommitFiberUnmount=="function")try{Ze.onCommitFiberUnmount(fi,t)}catch{}switch(t.tag){case 5:pe||it(t,n);case 6:var l=oe,i=$e;oe=null,dn(e,n,t),oe=l,$e=i,oe!==null&&($e?(e=oe,t=t.stateNode,e.nodeType===8?e.parentNode.removeChild(t):e.removeChild(t)):oe.removeChild(t.stateNode));break;case 18:oe!==null&&($e?(e=oe,t=t.stateNode,e.nodeType===8?Hi(e.parentNode,t):e.nodeType===1&&Hi(e,t),Zt(e)):Hi(oe,t.stateNode));break;case 4:l=oe,i=$e,oe=t.stateNode.containerInfo,$e=!0,dn(e,n,t),oe=l,$e=i;break;case 0:case 11:case 14:case 15:if(!pe&&(l=t.updateQueue,l!==null&&(l=l.lastEffect,l!==null))){i=l=l.next;do{var a=i,s=a.destroy;a=a.tag,s!==void 0&&(a&2||a&4)&&Rr(t,n,s),i=i.next}while(i!==l)}dn(e,n,t);break;case 1:if(!pe&&(it(t,n),l=t.stateNode,typeof l.componentWillUnmount=="function"))try{l.props=t.memoizedProps,l.state=t.memoizedState,l.componentWillUnmount()}catch(o){ee(t,n,o)}dn(e,n,t);break;case 21:dn(e,n,t);break;case 22:t.mode&1?(pe=(l=pe)||t.memoizedState!==null,dn(e,n,t),pe=l):dn(e,n,t);break;default:dn(e,n,t)}}function V1(e){var n=e.updateQueue;if(n!==null){e.updateQueue=null;var t=e.stateNode;t===null&&(t=e.stateNode=new D0),n.forEach(function(l){var i=X0.bind(null,e,l);t.has(l)||(t.add(l),l.then(i,i))})}}function De(e,n){var t=n.deletions;if(t!==null)for(var l=0;l<t.length;l++){var i=t[l];try{var a=e,s=n,o=s;e:for(;o!==null;){switch(o.tag){case 5:oe=o.stateNode,$e=!1;break e;case 3:oe=o.stateNode.containerInfo,$e=!0;break e;case 4:oe=o.stateNode.containerInfo,$e=!0;break e}o=o.return}if(oe===null)throw Error(M(160));ed(a,s,i),oe=null,$e=!1;var c=i.alternate;c!==null&&(c.return=null),i.return=null}catch(p){ee(i,n,p)}}if(n.subtreeFlags&12854)for(n=n.child;n!==null;)nd(n,e),n=n.sibling}function nd(e,n){var t=e.alternate,l=e.flags;switch(e.tag){case 0:case 11:case 14:case 15:if(De(n,e),Ve(e),l&4){try{Rt(3,e,e.return),ki(3,e)}catch(g){ee(e,e.return,g)}try{Rt(5,e,e.return)}catch(g){ee(e,e.return,g)}}break;case 1:De(n,e),Ve(e),l&512&&t!==null&&it(t,t.return);break;case 5:if(De(n,e),Ve(e),l&512&&t!==null&&it(t,t.return),e.flags&32){var i=e.stateNode;try{Vt(i,"")}catch(g){ee(e,e.return,g)}}if(l&4&&(i=e.stateNode,i!=null)){var a=e.memoizedProps,s=t!==null?t.memoizedProps:a,o=e.type,c=e.updateQueue;if(e.updateQueue=null,c!==null)try{o==="input"&&a.type==="radio"&&a.name!=null&&zs(i,a),mr(o,s);var p=mr(o,a);for(s=0;s<c.length;s+=2){var v=c[s],y=c[s+1];v==="style"?Ms(i,y):v==="dangerouslySetInnerHTML"?_s(i,y):v==="children"?Vt(i,y):na(i,v,y,p)}switch(o){case"input":dr(i,a);break;case"textarea":js(i,a);break;case"select":var m=i._wrapperState.wasMultiple;i._wrapperState.wasMultiple=!!a.multiple;var w=a.value;w!=null?at(i,!!a.multiple,w,!1):m!==!!a.multiple&&(a.defaultValue!=null?at(i,!!a.multiple,a.defaultValue,!0):at(i,!!a.multiple,a.multiple?[]:"",!1))}i[el]=a}catch(g){ee(e,e.return,g)}}break;case 6:if(De(n,e),Ve(e),l&4){if(e.stateNode===null)throw Error(M(162));i=e.stateNode,a=e.memoizedProps;try{i.nodeValue=a}catch(g){ee(e,e.return,g)}}break;case 3:if(De(n,e),Ve(e),l&4&&t!==null&&t.memoizedState.isDehydrated)try{Zt(n.containerInfo)}catch(g){ee(e,e.return,g)}break;case 4:De(n,e),Ve(e);break;case 13:De(n,e),Ve(e),i=e.child,i.flags&8192&&(a=i.memoizedState!==null,i.stateNode.isHidden=a,!a||i.alternate!==null&&i.alternate.memoizedState!==null||(Ta=ne())),l&4&&V1(e);break;case 22:if(v=t!==null&&t.memoizedState!==null,e.mode&1?(pe=(p=pe)||v,De(n,e),pe=p):De(n,e),Ve(e),l&8192){if(p=e.memoizedState!==null,(e.stateNode.isHidden=p)&&!v&&e.mode&1)for(T=e,v=e.child;v!==null;){for(y=T=v;T!==null;){switch(m=T,w=m.child,m.tag){case 0:case 11:case 14:case 15:Rt(4,m,m.return);break;case 1:it(m,m.return);var k=m.stateNode;if(typeof k.componentWillUnmount=="function"){l=m,t=m.return;try{n=l,k.props=n.memoizedProps,k.state=n.memoizedState,k.componentWillUnmount()}catch(g){ee(l,t,g)}}break;case 5:it(m,m.return);break;case 22:if(m.memoizedState!==null){X1(y);continue}}w!==null?(w.return=m,T=w):X1(y)}v=v.sibling}e:for(v=null,y=e;;){if(y.tag===5){if(v===null){v=y;try{i=y.stateNode,p?(a=i.style,typeof a.setProperty=="function"?a.setProperty("display","none","important"):a.display="none"):(o=y.stateNode,c=y.memoizedProps.style,s=c!=null&&c.hasOwnProperty("display")?c.display:null,o.style.display=Ss("display",s))}catch(g){ee(e,e.return,g)}}}else if(y.tag===6){if(v===null)try{y.stateNode.nodeValue=p?"":y.memoizedProps}catch(g){ee(e,e.return,g)}}else if((y.tag!==22&&y.tag!==23||y.memoizedState===null||y===e)&&y.child!==null){y.child.return=y,y=y.child;continue}if(y===e)break e;for(;y.sibling===null;){if(y.return===null||y.return===e)break e;v===y&&(v=null),y=y.return}v===y&&(v=null),y.sibling.return=y.return,y=y.sibling}}break;case 19:De(n,e),Ve(e),l&4&&V1(e);break;case 21:break;default:De(n,e),Ve(e)}}function Ve(e){var n=e.flags;if(n&2){try{e:{for(var t=e.return;t!==null;){if(Jo(t)){var l=t;break e}t=t.return}throw Error(M(160))}switch(l.tag){case 5:var i=l.stateNode;l.flags&32&&(Vt(i,""),l.flags&=-33);var a=U1(e);Ur(e,a,i);break;case 3:case 4:var s=l.stateNode.containerInfo,o=U1(e);Hr(e,o,s);break;default:throw Error(M(161))}}catch(c){ee(e,e.return,c)}e.flags&=-3}n&4096&&(e.flags&=-4097)}function $0(e,n,t){T=e,td(e)}function td(e,n,t){for(var l=(e.mode&1)!==0;T!==null;){var i=T,a=i.child;if(i.tag===22&&l){var s=i.memoizedState!==null||Sl;if(!s){var o=i.alternate,c=o!==null&&o.memoizedState!==null||pe;o=Sl;var p=pe;if(Sl=s,(pe=c)&&!p)for(T=i;T!==null;)s=T,c=s.child,s.tag===22&&s.memoizedState!==null?Q1(i):c!==null?(c.return=s,T=c):Q1(i);for(;a!==null;)T=a,td(a),a=a.sibling;T=i,Sl=o,pe=p}G1(e)}else i.subtreeFlags&8772&&a!==null?(a.return=i,T=a):G1(e)}}function G1(e){for(;T!==null;){var n=T;if(n.flags&8772){var t=n.alternate;try{if(n.flags&8772)switch(n.tag){case 0:case 11:case 15:pe||ki(5,n);break;case 1:var l=n.stateNode;if(n.flags&4&&!pe)if(t===null)l.componentDidMount();else{var i=n.elementType===n.type?t.memoizedProps:Oe(n.type,t.memoizedProps);l.componentDidUpdate(i,t.memoizedState,l.__reactInternalSnapshotBeforeUpdate)}var a=n.updateQueue;a!==null&&E1(n,a,l);break;case 3:var s=n.updateQueue;if(s!==null){if(t=null,n.child!==null)switch(n.child.tag){case 5:t=n.child.stateNode;break;case 1:t=n.child.stateNode}E1(n,s,t)}break;case 5:var o=n.stateNode;if(t===null&&n.flags&4){t=o;var c=n.memoizedProps;switch(n.type){case"button":case"input":case"select":case"textarea":c.autoFocus&&t.focus();break;case"img":c.src&&(t.src=c.src)}}break;case 6:break;case 4:break;case 12:break;case 13:if(n.memoizedState===null){var p=n.alternate;if(p!==null){var v=p.memoizedState;if(v!==null){var y=v.dehydrated;y!==null&&Zt(y)}}}break;case 19:case 17:case 21:case 22:case 23:case 25:break;default:throw Error(M(163))}pe||n.flags&512&&Br(n)}catch(m){ee(n,n.return,m)}}if(n===e){T=null;break}if(t=n.sibling,t!==null){t.return=n.return,T=t;break}T=n.return}}function X1(e){for(;T!==null;){var n=T;if(n===e){T=null;break}var t=n.sibling;if(t!==null){t.return=n.return,T=t;break}T=n.return}}function Q1(e){for(;T!==null;){var n=T;try{switch(n.tag){case 0:case 11:case 15:var t=n.return;try{ki(4,n)}catch(c){ee(n,t,c)}break;case 1:var l=n.stateNode;if(typeof l.componentDidMount=="function"){var i=n.return;try{l.componentDidMount()}catch(c){ee(n,i,c)}}var a=n.return;try{Br(n)}catch(c){ee(n,a,c)}break;case 5:var s=n.return;try{Br(n)}catch(c){ee(n,s,c)}}}catch(c){ee(n,n.return,c)}if(n===e){T=null;break}var o=n.sibling;if(o!==null){o.return=n.return,T=o;break}T=n.return}}var W0=Math.ceil,ai=on.ReactCurrentDispatcher,Fa=on.ReactCurrentOwner,Te=on.ReactCurrentBatchConfig,U=0,se=null,te=null,de=0,_e=0,rt=bn(0),re=0,al=null,Bn=0,wi=0,Aa=0,Bt=null,ke=null,Ta=0,xt=1/0,qe=null,si=!1,Vr=null,jn=null,Ml=!1,gn=null,oi=0,Ht=0,Gr=null,Ol=-1,$l=0;function ye(){return U&6?ne():Ol!==-1?Ol:Ol=ne()}function Nn(e){return e.mode&1?U&2&&de!==0?de&-de:j0.transition!==null?($l===0&&($l=$s()),$l):(e=V,e!==0||(e=window.event,e=e===void 0?16:Gs(e.type)),e):1}function Be(e,n,t,l){if(50<Ht)throw Ht=0,Gr=null,Error(M(185));ol(e,t,l),(!(U&2)||e!==se)&&(e===se&&(!(U&2)&&(wi|=t),re===4&&hn(e,de)),Ne(e,l),t===1&&U===0&&!(n.mode&1)&&(xt=ne()+500,gi&&En()))}function Ne(e,n){var t=e.callbackNode;j7(e,n);var l=Vl(e,e===se?de:0);if(l===0)t!==null&&l1(t),e.callbackNode=null,e.callbackPriority=0;else if(n=l&-l,e.callbackPriority!==n){if(t!=null&&l1(t),n===1)e.tag===0?z0(Z1.bind(null,e)):fo(Z1.bind(null,e)),x0(function(){!(U&6)&&En()}),t=null;else{switch(Ws(l)){case 1:t=aa;break;case 4:t=Ds;break;case 16:t=Ul;break;case 536870912:t=Os;break;default:t=Ul}t=cd(t,ld.bind(null,e))}e.callbackPriority=n,e.callbackNode=t}}function ld(e,n){if(Ol=-1,$l=0,U&6)throw Error(M(327));var t=e.callbackNode;if(ut()&&e.callbackNode!==t)return null;var l=Vl(e,e===se?de:0);if(l===0)return null;if(l&30||l&e.expiredLanes||n)n=di(e,l);else{n=l;var i=U;U|=2;var a=rd();(se!==e||de!==n)&&(qe=null,xt=ne()+500,Dn(e,n));do try{H0();break}catch(o){id(e,o)}while(!0);va(),ai.current=a,U=i,te!==null?n=0:(se=null,de=0,n=re)}if(n!==0){if(n===2&&(i=vr(e),i!==0&&(l=i,n=Xr(e,i))),n===1)throw t=al,Dn(e,0),hn(e,l),Ne(e,ne()),t;if(n===6)hn(e,l);else{if(i=e.current.alternate,!(l&30)&&!R0(i)&&(n=di(e,l),n===2&&(a=vr(e),a!==0&&(l=a,n=Xr(e,a))),n===1))throw t=al,Dn(e,0),hn(e,l),Ne(e,ne()),t;switch(e.finishedWork=i,e.finishedLanes=l,n){case 0:case 1:throw Error(M(345));case 2:Fn(e,ke,qe);break;case 3:if(hn(e,l),(l&130023424)===l&&(n=Ta+500-ne(),10<n)){if(Vl(e,0)!==0)break;if(i=e.suspendedLanes,(i&l)!==l){ye(),e.pingedLanes|=e.suspendedLanes&i;break}e.timeoutHandle=Mr(Fn.bind(null,e,ke,qe),n);break}Fn(e,ke,qe);break;case 4:if(hn(e,l),(l&4194240)===l)break;for(n=e.eventTimes,i=-1;0<l;){var s=31-Re(l);a=1<<s,s=n[s],s>i&&(i=s),l&=~a}if(l=i,l=ne()-l,l=(120>l?120:480>l?480:1080>l?1080:1920>l?1920:3e3>l?3e3:4320>l?4320:1960*W0(l/1960))-l,10<l){e.timeoutHandle=Mr(Fn.bind(null,e,ke,qe),l);break}Fn(e,ke,qe);break;case 5:Fn(e,ke,qe);break;default:throw Error(M(329))}}}return Ne(e,ne()),e.callbackNode===t?ld.bind(null,e):null}function Xr(e,n){var t=Bt;return e.current.memoizedState.isDehydrated&&(Dn(e,n).flags|=256),e=di(e,n),e!==2&&(n=ke,ke=t,n!==null&&Qr(n)),e}function Qr(e){ke===null?ke=e:ke.push.apply(ke,e)}function R0(e){for(var n=e;;){if(n.flags&16384){var t=n.updateQueue;if(t!==null&&(t=t.stores,t!==null))for(var l=0;l<t.length;l++){var i=t[l],a=i.getSnapshot;i=i.value;try{if(!He(a(),i))return!1}catch{return!1}}}if(t=n.child,n.subtreeFlags&16384&&t!==null)t.return=n,n=t;else{if(n===e)break;for(;n.sibling===null;){if(n.return===null||n.return===e)return!0;n=n.return}n.sibling.return=n.return,n=n.sibling}}return!0}function hn(e,n){for(n&=~Aa,n&=~wi,e.suspendedLanes|=n,e.pingedLanes&=~n,e=e.expirationTimes;0<n;){var t=31-Re(n),l=1<<t;e[t]=-1,n&=~l}}function Z1(e){if(U&6)throw Error(M(327));ut();var n=Vl(e,0);if(!(n&1))return Ne(e,ne()),null;var t=di(e,n);if(e.tag!==0&&t===2){var l=vr(e);l!==0&&(n=l,t=Xr(e,l))}if(t===1)throw t=al,Dn(e,0),hn(e,n),Ne(e,ne()),t;if(t===6)throw Error(M(345));return e.finishedWork=e.current.alternate,e.finishedLanes=n,Fn(e,ke,qe),Ne(e,ne()),null}function Ia(e,n){var t=U;U|=1;try{return e(n)}finally{U=t,U===0&&(xt=ne()+500,gi&&En())}}function Hn(e){gn!==null&&gn.tag===0&&!(U&6)&&ut();var n=U;U|=1;var t=Te.transition,l=V;try{if(Te.transition=null,V=1,e)return e()}finally{V=l,Te.transition=t,U=n,!(U&6)&&En()}}function La(){_e=rt.current,Z(rt)}function Dn(e,n){e.finishedWork=null,e.finishedLanes=0;var t=e.timeoutHandle;if(t!==-1&&(e.timeoutHandle=-1,g0(t)),te!==null)for(t=te.return;t!==null;){var l=t;switch(ya(l),l.tag){case 1:l=l.type.childContextTypes,l!=null&&Kl();break;case 3:yt(),Z(ze),Z(me),_a();break;case 5:Na(l);break;case 4:yt();break;case 13:Z(Y);break;case 19:Z(Y);break;case 10:ka(l.type._context);break;case 22:case 23:La()}t=t.return}if(se=e,te=e=_n(e.current,null),de=_e=n,re=0,al=null,Aa=wi=Bn=0,ke=Bt=null,In!==null){for(n=0;n<In.length;n++)if(t=In[n],l=t.interleaved,l!==null){t.interleaved=null;var i=l.next,a=t.pending;if(a!==null){var s=a.next;a.next=i,l.next=s}t.pending=l}In=null}return e}function id(e,n){do{var t=te;try{if(va(),Il.current=ri,ii){for(var l=q.memoizedState;l!==null;){var i=l.queue;i!==null&&(i.pending=null),l=l.next}ii=!1}if(Rn=0,ae=ie=q=null,Wt=!1,ll=0,Fa.current=null,t===null||t.return===null){re=1,al=n,te=null;break}e:{var a=e,s=t.return,o=t,c=n;if(n=de,o.flags|=32768,c!==null&&typeof c=="object"&&typeof c.then=="function"){var p=c,v=o,y=v.tag;if(!(v.mode&1)&&(y===0||y===11||y===15)){var m=v.alternate;m?(v.updateQueue=m.updateQueue,v.memoizedState=m.memoizedState,v.lanes=m.lanes):(v.updateQueue=null,v.memoizedState=null)}var w=L1(s);if(w!==null){w.flags&=-257,D1(w,s,o,a,n),w.mode&1&&I1(a,p,n),n=w,c=p;var k=n.updateQueue;if(k===null){var g=new Set;g.add(c),n.updateQueue=g}else k.add(c);break e}else{if(!(n&1)){I1(a,p,n),Da();break e}c=Error(M(426))}}else if(K&&o.mode&1){var C=L1(s);if(C!==null){!(C.flags&65536)&&(C.flags|=256),D1(C,s,o,a,n),ga(gt(c,o));break e}}a=c=gt(c,o),re!==4&&(re=2),Bt===null?Bt=[a]:Bt.push(a),a=s;do{switch(a.tag){case 3:a.flags|=65536,n&=-n,a.lanes|=n;var u=Ro(a,c,n);b1(a,u);break e;case 1:o=c;var d=a.type,f=a.stateNode;if(!(a.flags&128)&&(typeof d.getDerivedStateFromError=="function"||f!==null&&typeof f.componentDidCatch=="function"&&(jn===null||!jn.has(f)))){a.flags|=65536,n&=-n,a.lanes|=n;var h=Bo(a,o,n);b1(a,h);break e}}a=a.return}while(a!==null)}sd(t)}catch(_){n=_,te===t&&t!==null&&(te=t=t.return);continue}break}while(!0)}function rd(){var e=ai.current;return ai.current=ri,e===null?ri:e}function Da(){(re===0||re===3||re===2)&&(re=4),se===null||!(Bn&268435455)&&!(wi&268435455)||hn(se,de)}function di(e,n){var t=U;U|=2;var l=rd();(se!==e||de!==n)&&(qe=null,Dn(e,n));do try{B0();break}catch(i){id(e,i)}while(!0);if(va(),U=t,ai.current=l,te!==null)throw Error(M(261));return se=null,de=0,re}function B0(){for(;te!==null;)ad(te)}function H0(){for(;te!==null&&!m7();)ad(te)}function ad(e){var n=dd(e.alternate,e,_e);e.memoizedProps=e.pendingProps,n===null?sd(e):te=n,Fa.current=null}function sd(e){var n=e;do{var t=n.alternate;if(e=n.return,n.flags&32768){if(t=L0(t,n),t!==null){t.flags&=32767,te=t;return}if(e!==null)e.flags|=32768,e.subtreeFlags=0,e.deletions=null;else{re=6,te=null;return}}else if(t=I0(t,n,_e),t!==null){te=t;return}if(n=n.sibling,n!==null){te=n;return}te=n=e}while(n!==null);re===0&&(re=5)}function Fn(e,n,t){var l=V,i=Te.transition;try{Te.transition=null,V=1,U0(e,n,t,l)}finally{Te.transition=i,V=l}return null}function U0(e,n,t,l){do ut();while(gn!==null);if(U&6)throw Error(M(327));t=e.finishedWork;var i=e.finishedLanes;if(t===null)return null;if(e.finishedWork=null,e.finishedLanes=0,t===e.current)throw Error(M(177));e.callbackNode=null,e.callbackPriority=0;var a=t.lanes|t.childLanes;if(N7(e,a),e===se&&(te=se=null,de=0),!(t.subtreeFlags&2064)&&!(t.flags&2064)||Ml||(Ml=!0,cd(Ul,function(){return ut(),null})),a=(t.flags&15990)!==0,t.subtreeFlags&15990||a){a=Te.transition,Te.transition=null;var s=V;V=1;var o=U;U|=4,Fa.current=null,O0(e,t),nd(t,e),c0(_r),Gl=!!Nr,_r=Nr=null,e.current=t,$0(t),h7(),U=o,V=s,Te.transition=a}else e.current=t;if(Ml&&(Ml=!1,gn=e,oi=i),a=e.pendingLanes,a===0&&(jn=null),x7(t.stateNode),Ne(e,ne()),n!==null)for(l=e.onRecoverableError,t=0;t<n.length;t++)i=n[t],l(i.value,{componentStack:i.stack,digest:i.digest});if(si)throw si=!1,e=Vr,Vr=null,e;return oi&1&&e.tag!==0&&ut(),a=e.pendingLanes,a&1?e===Gr?Ht++:(Ht=0,Gr=e):Ht=0,En(),null}function ut(){if(gn!==null){var e=Ws(oi),n=Te.transition,t=V;try{if(Te.transition=null,V=16>e?16:e,gn===null)var l=!1;else{if(e=gn,gn=null,oi=0,U&6)throw Error(M(331));var i=U;for(U|=4,T=e.current;T!==null;){var a=T,s=a.child;if(T.flags&16){var o=a.deletions;if(o!==null){for(var c=0;c<o.length;c++){var p=o[c];for(T=p;T!==null;){var v=T;switch(v.tag){case 0:case 11:case 15:Rt(8,v,a)}var y=v.child;if(y!==null)y.return=v,T=y;else for(;T!==null;){v=T;var m=v.sibling,w=v.return;if(qo(v),v===p){T=null;break}if(m!==null){m.return=w,T=m;break}T=w}}}var k=a.alternate;if(k!==null){var g=k.child;if(g!==null){k.child=null;do{var C=g.sibling;g.sibling=null,g=C}while(g!==null)}}T=a}}if(a.subtreeFlags&2064&&s!==null)s.return=a,T=s;else e:for(;T!==null;){if(a=T,a.flags&2048)switch(a.tag){case 0:case 11:case 15:Rt(9,a,a.return)}var u=a.sibling;if(u!==null){u.return=a.return,T=u;break e}T=a.return}}var d=e.current;for(T=d;T!==null;){s=T;var f=s.child;if(s.subtreeFlags&2064&&f!==null)f.return=s,T=f;else e:for(s=d;T!==null;){if(o=T,o.flags&2048)try{switch(o.tag){case 0:case 11:case 15:ki(9,o)}}catch(_){ee(o,o.return,_)}if(o===s){T=null;break e}var h=o.sibling;if(h!==null){h.return=o.return,T=h;break e}T=o.return}}if(U=i,En(),Ze&&typeof Ze.onPostCommitFiberRoot=="function")try{Ze.onPostCommitFiberRoot(fi,e)}catch{}l=!0}return l}finally{V=t,Te.transition=n}}return!1}function K1(e,n,t){n=gt(t,n),n=Ro(e,n,1),e=zn(e,n,1),n=ye(),e!==null&&(ol(e,1,n),Ne(e,n))}function ee(e,n,t){if(e.tag===3)K1(e,e,t);else for(;n!==null;){if(n.tag===3){K1(n,e,t);break}else if(n.tag===1){var l=n.stateNode;if(typeof n.type.getDerivedStateFromError=="function"||typeof l.componentDidCatch=="function"&&(jn===null||!jn.has(l))){e=gt(t,e),e=Bo(n,e,1),n=zn(n,e,1),e=ye(),n!==null&&(ol(n,1,e),Ne(n,e));break}}n=n.return}}function V0(e,n,t){var l=e.pingCache;l!==null&&l.delete(n),n=ye(),e.pingedLanes|=e.suspendedLanes&t,se===e&&(de&t)===t&&(re===4||re===3&&(de&130023424)===de&&500>ne()-Ta?Dn(e,0):Aa|=t),Ne(e,n)}function od(e,n){n===0&&(e.mode&1?(n=gl,gl<<=1,!(gl&130023424)&&(gl=4194304)):n=1);var t=ye();e=an(e,n),e!==null&&(ol(e,n,t),Ne(e,t))}function G0(e){var n=e.memoizedState,t=0;n!==null&&(t=n.retryLane),od(e,t)}function X0(e,n){var t=0;switch(e.tag){case 13:var l=e.stateNode,i=e.memoizedState;i!==null&&(t=i.retryLane);break;case 19:l=e.stateNode;break;default:throw Error(M(314))}l!==null&&l.delete(n),od(e,t)}var dd;dd=function(e,n,t){if(e!==null)if(e.memoizedProps!==n.pendingProps||ze.current)we=!0;else{if(!(e.lanes&t)&&!(n.flags&128))return we=!1,T0(e,n,t);we=!!(e.flags&131072)}else we=!1,K&&n.flags&1048576&&po(n,Jl,n.index);switch(n.lanes=0,n.tag){case 2:var l=n.type;Dl(e,n),e=n.pendingProps;var i=pt(n,me.current);ct(n,t),i=Ma(null,n,l,e,i,t);var a=Ca();return n.flags|=1,typeof i=="object"&&i!==null&&typeof i.render=="function"&&i.$$typeof===void 0?(n.tag=1,n.memoizedState=null,n.updateQueue=null,je(l)?(a=!0,Yl(n)):a=!1,n.memoizedState=i.state!==null&&i.state!==void 0?i.state:null,za(n),i.updater=vi,n.stateNode=i,i._reactInternals=n,Tr(n,l,e,t),n=Dr(null,n,l,!0,a,t)):(n.tag=0,K&&a&&ha(n),he(null,n,i,t),n=n.child),n;case 16:l=n.elementType;e:{switch(Dl(e,n),e=n.pendingProps,i=l._init,l=i(l._payload),n.type=l,i=n.tag=Z0(l),e=Oe(l,e),i){case 0:n=Lr(null,n,l,e,t);break e;case 1:n=W1(null,n,l,e,t);break e;case 11:n=O1(null,n,l,e,t);break e;case 14:n=$1(null,n,l,Oe(l.type,e),t);break e}throw Error(M(306,l,""))}return n;case 0:return l=n.type,i=n.pendingProps,i=n.elementType===l?i:Oe(l,i),Lr(e,n,l,i,t);case 1:return l=n.type,i=n.pendingProps,i=n.elementType===l?i:Oe(l,i),W1(e,n,l,i,t);case 3:e:{if(Go(n),e===null)throw Error(M(387));l=n.pendingProps,a=n.memoizedState,i=a.element,vo(e,n),ti(n,l,null,t);var s=n.memoizedState;if(l=s.element,a.isDehydrated)if(a={element:l,isDehydrated:!1,cache:s.cache,pendingSuspenseBoundaries:s.pendingSuspenseBoundaries,transitions:s.transitions},n.updateQueue.baseState=a,n.memoizedState=a,n.flags&256){i=gt(Error(M(423)),n),n=R1(e,n,l,t,i);break e}else if(l!==i){i=gt(Error(M(424)),n),n=R1(e,n,l,t,i);break e}else for(Se=wn(n.stateNode.containerInfo.firstChild),Me=n,K=!0,We=null,t=go(n,null,l,t),n.child=t;t;)t.flags=t.flags&-3|4096,t=t.sibling;else{if(mt(),l===i){n=sn(e,n,t);break e}he(e,n,l,t)}n=n.child}return n;case 5:return ko(n),e===null&&Pr(n),l=n.type,i=n.pendingProps,a=e!==null?e.memoizedProps:null,s=i.children,Sr(l,i)?s=null:a!==null&&Sr(l,a)&&(n.flags|=32),Vo(e,n),he(e,n,s,t),n.child;case 6:return e===null&&Pr(n),null;case 13:return Xo(e,n,t);case 4:return ja(n,n.stateNode.containerInfo),l=n.pendingProps,e===null?n.child=ht(n,null,l,t):he(e,n,l,t),n.child;case 11:return l=n.type,i=n.pendingProps,i=n.elementType===l?i:Oe(l,i),O1(e,n,l,i,t);case 7:return he(e,n,n.pendingProps,t),n.child;case 8:return he(e,n,n.pendingProps.children,t),n.child;case 12:return he(e,n,n.pendingProps.children,t),n.child;case 10:e:{if(l=n.type._context,i=n.pendingProps,a=n.memoizedProps,s=i.value,X(ei,l._currentValue),l._currentValue=s,a!==null)if(He(a.value,s)){if(a.children===i.children&&!ze.current){n=sn(e,n,t);break e}}else for(a=n.child,a!==null&&(a.return=n);a!==null;){var o=a.dependencies;if(o!==null){s=a.child;for(var c=o.firstContext;c!==null;){if(c.context===l){if(a.tag===1){c=tn(-1,t&-t),c.tag=2;var p=a.updateQueue;if(p!==null){p=p.shared;var v=p.pending;v===null?c.next=c:(c.next=v.next,v.next=c),p.pending=c}}a.lanes|=t,c=a.alternate,c!==null&&(c.lanes|=t),Fr(a.return,t,n),o.lanes|=t;break}c=c.next}}else if(a.tag===10)s=a.type===n.type?null:a.child;else if(a.tag===18){if(s=a.return,s===null)throw Error(M(341));s.lanes|=t,o=s.alternate,o!==null&&(o.lanes|=t),Fr(s,t,n),s=a.sibling}else s=a.child;if(s!==null)s.return=a;else for(s=a;s!==null;){if(s===n){s=null;break}if(a=s.sibling,a!==null){a.return=s.return,s=a;break}s=s.return}a=s}he(e,n,i.children,t),n=n.child}return n;case 9:return i=n.type,l=n.pendingProps.children,ct(n,t),i=Ie(i),l=l(i),n.flags|=1,he(e,n,l,t),n.child;case 14:return l=n.type,i=Oe(l,n.pendingProps),i=Oe(l.type,i),$1(e,n,l,i,t);case 15:return Ho(e,n,n.type,n.pendingProps,t);case 17:return l=n.type,i=n.pendingProps,i=n.elementType===l?i:Oe(l,i),Dl(e,n),n.tag=1,je(l)?(e=!0,Yl(n)):e=!1,ct(n,t),Wo(n,l,i),Tr(n,l,i,t),Dr(null,n,l,!0,e,t);case 19:return Qo(e,n,t);case 22:return Uo(e,n,t)}throw Error(M(156,n.tag))};function cd(e,n){return Ls(e,n)}function Q0(e,n,t,l){this.tag=e,this.key=t,this.sibling=this.child=this.return=this.stateNode=this.type=this.elementType=null,this.index=0,this.ref=null,this.pendingProps=n,this.dependencies=this.memoizedState=this.updateQueue=this.memoizedProps=null,this.mode=l,this.subtreeFlags=this.flags=0,this.deletions=null,this.childLanes=this.lanes=0,this.alternate=null}function Ae(e,n,t,l){return new Q0(e,n,t,l)}function Oa(e){return e=e.prototype,!(!e||!e.isReactComponent)}function Z0(e){if(typeof e=="function")return Oa(e)?1:0;if(e!=null){if(e=e.$$typeof,e===la)return 11;if(e===ia)return 14}return 2}function _n(e,n){var t=e.alternate;return t===null?(t=Ae(e.tag,n,e.key,e.mode),t.elementType=e.elementType,t.type=e.type,t.stateNode=e.stateNode,t.alternate=e,e.alternate=t):(t.pendingProps=n,t.type=e.type,t.flags=0,t.subtreeFlags=0,t.deletions=null),t.flags=e.flags&14680064,t.childLanes=e.childLanes,t.lanes=e.lanes,t.child=e.child,t.memoizedProps=e.memoizedProps,t.memoizedState=e.memoizedState,t.updateQueue=e.updateQueue,n=e.dependencies,t.dependencies=n===null?null:{lanes:n.lanes,firstContext:n.firstContext},t.sibling=e.sibling,t.index=e.index,t.ref=e.ref,t}function Wl(e,n,t,l,i,a){var s=2;if(l=e,typeof e=="function")Oa(e)&&(s=1);else if(typeof e=="string")s=5;else e:switch(e){case Zn:return On(t.children,i,a,n);case ta:s=8,i|=8;break;case ir:return e=Ae(12,t,n,i|2),e.elementType=ir,e.lanes=a,e;case rr:return e=Ae(13,t,n,i),e.elementType=rr,e.lanes=a,e;case ar:return e=Ae(19,t,n,i),e.elementType=ar,e.lanes=a,e;case vs:return zi(t,i,a,n);default:if(typeof e=="object"&&e!==null)switch(e.$$typeof){case gs:s=10;break e;case xs:s=9;break e;case la:s=11;break e;case ia:s=14;break e;case fn:s=16,l=null;break e}throw Error(M(130,e==null?e:typeof e,""))}return n=Ae(s,t,n,i),n.elementType=e,n.type=l,n.lanes=a,n}function On(e,n,t,l){return e=Ae(7,e,l,n),e.lanes=t,e}function zi(e,n,t,l){return e=Ae(22,e,l,n),e.elementType=vs,e.lanes=t,e.stateNode={isHidden:!1},e}function Yi(e,n,t){return e=Ae(6,e,null,n),e.lanes=t,e}function qi(e,n,t){return n=Ae(4,e.children!==null?e.children:[],e.key,n),n.lanes=t,n.stateNode={containerInfo:e.containerInfo,pendingChildren:null,implementation:e.implementation},n}function K0(e,n,t,l,i){this.tag=n,this.containerInfo=e,this.finishedWork=this.pingCache=this.current=this.pendingChildren=null,this.timeoutHandle=-1,this.callbackNode=this.pendingContext=this.context=null,this.callbackPriority=0,this.eventTimes=Fi(0),this.expirationTimes=Fi(-1),this.entangledLanes=this.finishedLanes=this.mutableReadLanes=this.expiredLanes=this.pingedLanes=this.suspendedLanes=this.pendingLanes=0,this.entanglements=Fi(0),this.identifierPrefix=l,this.onRecoverableError=i,this.mutableSourceEagerHydrationData=null}function $a(e,n,t,l,i,a,s,o,c){return e=new K0(e,n,t,o,c),n===1?(n=1,a===!0&&(n|=8)):n=0,a=Ae(3,null,null,n),e.current=a,a.stateNode=e,a.memoizedState={element:l,isDehydrated:t,cache:null,transitions:null,pendingSuspenseBoundaries:null},za(a),e}function Y0(e,n,t){var l=3<arguments.length&&arguments[3]!==void 0?arguments[3]:null;return{$$typeof:Qn,key:l==null?null:""+l,children:e,containerInfo:n,implementation:t}}function ud(e){if(!e)return Mn;e=e._reactInternals;e:{if(Vn(e)!==e||e.tag!==1)throw Error(M(170));var n=e;do{switch(n.tag){case 3:n=n.stateNode.context;break e;case 1:if(je(n.type)){n=n.stateNode.__reactInternalMemoizedMergedChildContext;break e}}n=n.return}while(n!==null);throw Error(M(171))}if(e.tag===1){var t=e.type;if(je(t))return uo(e,t,n)}return n}function fd(e,n,t,l,i,a,s,o,c){return e=$a(t,l,!0,e,i,a,s,o,c),e.context=ud(null),t=e.current,l=ye(),i=Nn(t),a=tn(l,i),a.callback=n??null,zn(t,a,i),e.current.lanes=i,ol(e,i,l),Ne(e,l),e}function ji(e,n,t,l){var i=n.current,a=ye(),s=Nn(i);return t=ud(t),n.context===null?n.context=t:n.pendingContext=t,n=tn(a,s),n.payload={element:e},l=l===void 0?null:l,l!==null&&(n.callback=l),e=zn(i,n,s),e!==null&&(Be(e,i,s,a),Tl(e,i,s)),s}function ci(e){if(e=e.current,!e.child)return null;switch(e.child.tag){case 5:return e.child.stateNode;default:return e.child.stateNode}}function Y1(e,n){if(e=e.memoizedState,e!==null&&e.dehydrated!==null){var t=e.retryLane;e.retryLane=t!==0&&t<n?t:n}}function Wa(e,n){Y1(e,n),(e=e.alternate)&&Y1(e,n)}function q0(){return null}var pd=typeof reportError=="function"?reportError:function(e){console.error(e)};function Ra(e){this._internalRoot=e}Ni.prototype.render=Ra.prototype.render=function(e){var n=this._internalRoot;if(n===null)throw Error(M(409));ji(e,n,null,null)};Ni.prototype.unmount=Ra.prototype.unmount=function(){var e=this._internalRoot;if(e!==null){this._internalRoot=null;var n=e.containerInfo;Hn(function(){ji(null,e,null,null)}),n[rn]=null}};function Ni(e){this._internalRoot=e}Ni.prototype.unstable_scheduleHydration=function(e){if(e){var n=Hs();e={blockedOn:null,target:e,priority:n};for(var t=0;t<mn.length&&n!==0&&n<mn[t].priority;t++);mn.splice(t,0,e),t===0&&Vs(e)}};function Ba(e){return!(!e||e.nodeType!==1&&e.nodeType!==9&&e.nodeType!==11)}function _i(e){return!(!e||e.nodeType!==1&&e.nodeType!==9&&e.nodeType!==11&&(e.nodeType!==8||e.nodeValue!==" react-mount-point-unstable "))}function q1(){}function J0(e,n,t,l,i){if(i){if(typeof l=="function"){var a=l;l=function(){var p=ci(s);a.call(p)}}var s=fd(n,l,e,0,null,!1,!1,"",q1);return e._reactRootContainer=s,e[rn]=s.current,qt(e.nodeType===8?e.parentNode:e),Hn(),s}for(;i=e.lastChild;)e.removeChild(i);if(typeof l=="function"){var o=l;l=function(){var p=ci(c);o.call(p)}}var c=$a(e,0,!1,null,null,!1,!1,"",q1);return e._reactRootContainer=c,e[rn]=c.current,qt(e.nodeType===8?e.parentNode:e),Hn(function(){ji(n,c,t,l)}),c}function Si(e,n,t,l,i){var a=t._reactRootContainer;if(a){var s=a;if(typeof i=="function"){var o=i;i=function(){var c=ci(s);o.call(c)}}ji(n,s,e,i)}else s=J0(t,n,e,i,l);return ci(s)}Rs=function(e){switch(e.tag){case 3:var n=e.stateNode;if(n.current.memoizedState.isDehydrated){var t=At(n.pendingLanes);t!==0&&(sa(n,t|1),Ne(n,ne()),!(U&6)&&(xt=ne()+500,En()))}break;case 13:Hn(function(){var l=an(e,1);if(l!==null){var i=ye();Be(l,e,1,i)}}),Wa(e,1)}};oa=function(e){if(e.tag===13){var n=an(e,134217728);if(n!==null){var t=ye();Be(n,e,134217728,t)}Wa(e,134217728)}};Bs=function(e){if(e.tag===13){var n=Nn(e),t=an(e,n);if(t!==null){var l=ye();Be(t,e,n,l)}Wa(e,n)}};Hs=function(){return V};Us=function(e,n){var t=V;try{return V=e,n()}finally{V=t}};yr=function(e,n,t){switch(n){case"input":if(dr(e,t),n=t.name,t.type==="radio"&&n!=null){for(t=e;t.parentNode;)t=t.parentNode;for(t=t.querySelectorAll("input[name="+JSON.stringify(""+n)+'][type="radio"]'),n=0;n<t.length;n++){var l=t[n];if(l!==e&&l.form===e.form){var i=yi(l);if(!i)throw Error(M(90));ws(l),dr(l,i)}}}break;case"textarea":js(e,t);break;case"select":n=t.value,n!=null&&at(e,!!t.multiple,n,!1)}};Es=Ia;Ps=Hn;var e5={usingClientEntryPoint:!1,Events:[cl,Jn,yi,Cs,bs,Ia]},Et={findFiberByHostInstance:Tn,bundleType:0,version:"18.3.1",rendererPackageName:"react-dom"},n5={bundleType:Et.bundleType,version:Et.version,rendererPackageName:Et.rendererPackageName,rendererConfig:Et.rendererConfig,overrideHookState:null,overrideHookStateDeletePath:null,overrideHookStateRenamePath:null,overrideProps:null,overridePropsDeletePath:null,overridePropsRenamePath:null,setErrorHandler:null,setSuspenseHandler:null,scheduleUpdate:null,currentDispatcherRef:on.ReactCurrentDispatcher,findHostInstanceByFiber:function(e){return e=Ts(e),e===null?null:e.stateNode},findFiberByHostInstance:Et.findFiberByHostInstance||q0,findHostInstancesForRefresh:null,scheduleRefresh:null,scheduleRoot:null,setRefreshHandler:null,getCurrentFiber:null,reconcilerVersion:"18.3.1-next-f1338f8080-20240426"};if(typeof __REACT_DEVTOOLS_GLOBAL_HOOK__<"u"){var Cl=__REACT_DEVTOOLS_GLOBAL_HOOK__;if(!Cl.isDisabled&&Cl.supportsFiber)try{fi=Cl.inject(n5),Ze=Cl}catch{}}be.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED=e5;be.createPortal=function(e,n){var t=2<arguments.length&&arguments[2]!==void 0?arguments[2]:null;if(!Ba(n))throw Error(M(200));return Y0(e,n,null,t)};be.createRoot=function(e,n){if(!Ba(e))throw Error(M(299));var t=!1,l="",i=pd;return n!=null&&(n.unstable_strictMode===!0&&(t=!0),n.identifierPrefix!==void 0&&(l=n.identifierPrefix),n.onRecoverableError!==void 0&&(i=n.onRecoverableError)),n=$a(e,1,!1,null,null,t,!1,l,i),e[rn]=n.current,qt(e.nodeType===8?e.parentNode:e),new Ra(n)};be.findDOMNode=function(e){if(e==null)return null;if(e.nodeType===1)return e;var n=e._reactInternals;if(n===void 0)throw typeof e.render=="function"?Error(M(188)):(e=Object.keys(e).join(","),Error(M(268,e)));return e=Ts(n),e=e===null?null:e.stateNode,e};be.flushSync=function(e){return Hn(e)};be.hydrate=function(e,n,t){if(!_i(n))throw Error(M(200));return Si(null,e,n,!0,t)};be.hydrateRoot=function(e,n,t){if(!Ba(e))throw Error(M(405));var l=t!=null&&t.hydratedSources||null,i=!1,a="",s=pd;if(t!=null&&(t.unstable_strictMode===!0&&(i=!0),t.identifierPrefix!==void 0&&(a=t.identifierPrefix),t.onRecoverableError!==void 0&&(s=t.onRecoverableError)),n=fd(n,null,e,1,t??null,i,!1,a,s),e[rn]=n.current,qt(e),l)for(e=0;e<l.length;e++)t=l[e],i=t._getVersion,i=i(t._source),n.mutableSourceEagerHydrationData==null?n.mutableSourceEagerHydrationData=[t,i]:n.mutableSourceEagerHydrationData.push(t,i);return new Ni(n)};be.render=function(e,n,t){if(!_i(n))throw Error(M(200));return Si(null,e,n,!1,t)};be.unmountComponentAtNode=function(e){if(!_i(e))throw Error(M(40));return e._reactRootContainer?(Hn(function(){Si(null,null,e,!1,function(){e._reactRootContainer=null,e[rn]=null})}),!0):!1};be.unstable_batchedUpdates=Ia;be.unstable_renderSubtreeIntoContainer=function(e,n,t,l){if(!_i(t))throw Error(M(200));if(e==null||e._reactInternals===void 0)throw Error(M(38));return Si(e,n,t,!1,l)};be.version="18.3.1-next-f1338f8080-20240426";function md(){if(!(typeof __REACT_DEVTOOLS_GLOBAL_HOOK__>"u"||typeof __REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE!="function"))try{__REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE(md)}catch(e){console.error(e)}}md(),ps.exports=be;var t5=ps.exports,J1=t5;tr.createRoot=J1.createRoot,tr.hydrateRoot=J1.hydrateRoot;function l5({sensors:e={},pumps:n=[],fans:t=[]}){var g;const l=n.slice(0,3),i=n.slice(3,6),a=n.reduce((C,u)=>C+(u.saved_kwh||0),0),s=n.reduce((C,u)=>C+(u.run_hours||0),0),o=n.filter(C=>C.running).length,c=t.filter(C=>C.running_fwd||C.running_bwd).length,[p,v]=F.useState(null),[y,m]=F.useState([]),[w,k]=F.useState([]);return F.useEffect(()=>{const C=async()=>{try{const f=await(await fetch("http://localhost:8001/api/energy-savings")).json();f.success&&v(f.data)}catch(d){console.error("에너지 절감률 데이터 로드 실패:",d)}};C();const u=setInterval(C,2e3);return()=>clearInterval(u)},[]),F.useEffect(()=>{const C=async()=>{try{const f=await(await fetch("http://localhost:8001/api/ai-frequency-control")).json();f.success&&m(f.data)}catch(d){console.error("AI 주파수 제어 데이터 로드 실패:",d)}};C();const u=setInterval(C,2e3);return()=>clearInterval(u)},[]),F.useEffect(()=>{const C=async()=>{try{const f=await(await fetch("http://localhost:8001/api/energy-savings-summary")).json();f.success&&k(f.data)}catch(d){console.error("에너지 절감 상세 요약 데이터 로드 실패:",d)}};C();const u=setInterval(C,2e3);return()=>clearInterval(u)},[]),r.jsxs("div",{className:"dashboard",children:[p&&r.jsxs("section",{className:"dashboard-section",children:[r.jsx("h2",{children:"💡 에너지 절감률 (60Hz 고정 대비 VFD 가변)"}),r.jsx("div",{className:"energy-savings-container",children:r.jsx(r5,{data:p})})]}),w.length>0&&r.jsxs("section",{className:"dashboard-section",children:[r.jsx("h2",{children:"📋 Energy Saving Summary Table"}),r.jsx("div",{className:"energy-summary-table-container",children:r.jsx(s5,{data:w})})]}),y.length>0&&r.jsxs("section",{className:"dashboard-section",children:[r.jsx("h2",{children:"📈 AI 목표 vs 실제 주파수 현황"}),r.jsx("div",{className:"ai-freq-control-container",children:r.jsx(a5,{data:y})})]}),r.jsxs("section",{className:"dashboard-section",children:[r.jsx("h2",{children:"📊 시스템 개요"}),r.jsxs("div",{className:"stats-grid",children:[r.jsxs("div",{className:"stat-card",children:[r.jsx("div",{className:"stat-icon",children:"⚡"}),r.jsxs("div",{className:"stat-content",children:[r.jsx("div",{className:"stat-label",children:"총 절감 전력"}),r.jsxs("div",{className:"stat-value",children:[a.toLocaleString()," kWh"]})]})]}),r.jsxs("div",{className:"stat-card",children:[r.jsx("div",{className:"stat-icon",children:"⏱️"}),r.jsxs("div",{className:"stat-content",children:[r.jsx("div",{className:"stat-label",children:"총 운전 시간"}),r.jsxs("div",{className:"stat-value",children:[s.toLocaleString()," h"]})]})]}),r.jsxs("div",{className:"stat-card",children:[r.jsx("div",{className:"stat-icon",children:"🔄"}),r.jsxs("div",{className:"stat-content",children:[r.jsx("div",{className:"stat-label",children:"운전 중인 펌프"}),r.jsxs("div",{className:"stat-value",children:[o," / ",n.length]})]})]}),r.jsxs("div",{className:"stat-card",children:[r.jsx("div",{className:"stat-icon",children:"🌀"}),r.jsxs("div",{className:"stat-content",children:[r.jsx("div",{className:"stat-label",children:"운전 중인 팬"}),r.jsxs("div",{className:"stat-value",children:[c," / ",t.length]})]})]}),r.jsxs("div",{className:"stat-card",children:[r.jsx("div",{className:"stat-icon",children:"🔥"}),r.jsxs("div",{className:"stat-content",children:[r.jsx("div",{className:"stat-label",children:"M/E 부하"}),r.jsxs("div",{className:"stat-value",children:[((g=e.PU1)==null?void 0:g.toFixed(1))||0,"%"]})]})]})]})]}),r.jsxs("section",{className:"dashboard-section",children:[r.jsx("h2",{children:"🌡️ 센서 데이터"}),r.jsxs("div",{className:"sensor-grid",children:[r.jsx(cn,{label:"CSW 펌프 토출 온도 (TX1)",value:e.TX1,unit:"°C",icon:"🌡️"}),r.jsx(cn,{label:"FW Cooler 1 SW Out (TX2)",value:e.TX2,unit:"°C",icon:"🌡️"}),r.jsx(cn,{label:"FW Cooler 2 SW Out (TX3)",value:e.TX3,unit:"°C",icon:"🌡️"}),r.jsx(cn,{label:"FW Cooler FW In (TX4)",value:e.TX4,unit:"°C",icon:"🌡️"}),r.jsx(cn,{label:"FW Cooler FW Out (TX5)",value:e.TX5,unit:"°C",icon:"🌡️"}),r.jsx(cn,{label:"CSW 펌프 토출 압력 (DPX1)",value:e.DPX1,unit:"kg/cm²",icon:"💨"})]}),r.jsxs("div",{className:"sensor-grid",style:{marginTop:"1rem"},children:[r.jsx(cn,{label:"E/R Inside Temp (TX6)",value:e.TX6,unit:"°C",icon:"🌡️"}),r.jsx(cn,{label:"E/R Outside Temp (TX7)",value:e.TX7,unit:"°C",icon:"🌡️"})]})]}),r.jsxs("section",{className:"dashboard-section",children:[r.jsx("h2",{children:"🌊 해수 펌프 (Sea Water Pump)"}),r.jsx("div",{className:"pump-grid",children:l.map((C,u)=>r.jsx(es,{pump:C},u))})]}),r.jsxs("section",{className:"dashboard-section",children:[r.jsx("h2",{children:"💧 청수 펌프 (Fresh Water Pump)"}),r.jsx("div",{className:"pump-grid",children:i.map((C,u)=>r.jsx(es,{pump:C},u))})]}),r.jsxs("section",{className:"dashboard-section",children:[r.jsx("h2",{children:"🌀 Engine Room 팬 (E/R Fan)"}),r.jsx("div",{className:"pump-grid",style:{gridTemplateColumns:"repeat(4, 1fr)"},children:t.map((C,u)=>r.jsx(i5,{fan:C},u))})]})]})}function cn({label:e,value:n,unit:t,icon:l}){return r.jsxs("div",{className:"sensor-card",children:[r.jsx("div",{className:"sensor-icon",children:l}),r.jsxs("div",{className:"sensor-info",children:[r.jsx("div",{className:"sensor-label",children:e}),r.jsxs("div",{className:"sensor-value",children:[n!==void 0?n.toFixed(1):"--"," ",t]})]})]})}function es({pump:e}){var a,s,o;const n=e.running,t=e.saved_ratio||0,i=e.auto_mode&&e.vfd_mode?{text:"⚡ ESS 모드",class:"ess-mode"}:e.auto_mode&&!e.vfd_mode?{text:"🔄 자동/Bypass",class:"auto-bypass-mode"}:!e.auto_mode&&e.vfd_mode?{text:"🔧 수동/VFD",class:"manual-vfd-mode"}:{text:"⚙️ 수동/Bypass",class:"manual-bypass-mode"};return r.jsxs("div",{className:`pump-card ${n?"running":"stopped"}`,children:[r.jsxs("div",{className:"pump-header",children:[r.jsx("h3",{children:e.name}),r.jsxs("div",{className:"pump-header-badges",children:[r.jsx("span",{className:`mode-badge ${i.class}`,children:i.text}),r.jsx("span",{className:`pump-status-badge ${n?"active":"inactive"}`,children:n?"🟢 운전중":"⚪ 정지"})]})]}),r.jsxs("div",{className:"pump-details",children:[r.jsxs("div",{className:"pump-detail-row",children:[r.jsx("span",{className:"detail-label",children:"주파수"}),r.jsxs("span",{className:"detail-value",children:[((a=e.frequency)==null?void 0:a.toFixed(1))||0," Hz"]})]}),r.jsxs("div",{className:"pump-detail-row",children:[r.jsx("span",{className:"detail-label",children:"소비 전력"}),r.jsxs("span",{className:"detail-value",children:[e.power_kw||0," kW"]})]}),r.jsxs("div",{className:"pump-detail-row",children:[r.jsx("span",{className:"detail-label",children:"절감률"}),r.jsxs("span",{className:"detail-value highlight",children:[t,"%"]})]}),r.jsxs("div",{className:"pump-detail-row",children:[r.jsx("span",{className:"detail-label",children:"운전 시간"}),r.jsxs("span",{className:"detail-value",children:[((s=e.run_hours)==null?void 0:s.toLocaleString())||0," h"]})]}),r.jsxs("div",{className:"pump-detail-row",children:[r.jsx("span",{className:"detail-label",children:"누적 절감 전력"}),r.jsxs("span",{className:"detail-value highlight",children:[((o=e.saved_kwh)==null?void 0:o.toLocaleString())||0," kWh"]})]})]})]})}function i5({fan:e}){var a,s,o;const n=e.running_fwd||e.running_bwd,t=e.saved_ratio||0,i=e.auto_mode&&e.vfd_mode?{text:"⚡ ESS 모드",class:"ess-mode"}:e.auto_mode&&!e.vfd_mode?{text:"🔄 자동/Bypass",class:"auto-bypass-mode"}:!e.auto_mode&&e.vfd_mode?{text:"🔧 수동/VFD",class:"manual-vfd-mode"}:{text:"⚙️ 수동/Bypass",class:"manual-bypass-mode"};return r.jsxs("div",{className:`pump-card ${n?"running":"stopped"}`,children:[r.jsxs("div",{className:"pump-header",children:[r.jsx("h3",{children:e.name}),r.jsxs("div",{className:"pump-header-badges",children:[r.jsx("span",{className:`mode-badge ${i.class}`,children:i.text}),r.jsx("span",{className:`pump-status-badge ${n?"active":"inactive"}`,children:e.running_fwd?"🟢 정방향":e.running_bwd?"🟡 역방향":"⚪ 정지"})]})]}),r.jsxs("div",{className:"pump-details",children:[r.jsxs("div",{className:"pump-detail-row",children:[r.jsx("span",{className:"detail-label",children:"주파수"}),r.jsxs("span",{className:"detail-value",children:[((a=e.frequency)==null?void 0:a.toFixed(1))||0," Hz"]})]}),r.jsxs("div",{className:"pump-detail-row",children:[r.jsx("span",{className:"detail-label",children:"소비 전력"}),r.jsxs("span",{className:"detail-value",children:[e.power_kw||0," kW"]})]}),r.jsxs("div",{className:"pump-detail-row",children:[r.jsx("span",{className:"detail-label",children:"절감률"}),r.jsxs("span",{className:"detail-value highlight",children:[t,"%"]})]}),r.jsxs("div",{className:"pump-detail-row",children:[r.jsx("span",{className:"detail-label",children:"운전 시간"}),r.jsxs("span",{className:"detail-value",children:[((s=e.run_hours)==null?void 0:s.toLocaleString())||0," h"]})]}),r.jsxs("div",{className:"pump-detail-row",children:[r.jsx("span",{className:"detail-label",children:"누적 절감 전력"}),r.jsxs("span",{className:"detail-value highlight",children:[((o=e.saved_kwh)==null?void 0:o.toLocaleString())||0," kWh"]})]})]})]})}function r5({data:e}){const n=(e==null?void 0:e.realtime)||{},t=(e==null?void 0:e.today)||{},l=(e==null?void 0:e.month)||{},i=(n==null?void 0:n.total)||{},a=(n==null?void 0:n.swp)||{},s=(n==null?void 0:n.fwp)||{},o=(n==null?void 0:n.fan)||{};return r.jsxs("div",{className:"energy-savings-card",children:[r.jsxs("div",{className:"energy-total-section",children:[r.jsx("div",{className:"energy-total-header",children:r.jsx("h3",{children:"💡 에너지 절감 현황"})}),r.jsxs("div",{className:"energy-total-info",children:[r.jsxs("div",{className:"realtime-section",children:[r.jsx("div",{className:"section-title",children:"🔴 실시간 순간 절감률"}),r.jsxs("div",{className:"energy-comparison",children:[r.jsx("span",{className:"energy-label",children:"60Hz 고정:"}),r.jsxs("span",{className:"energy-value",children:[(i.power_60hz||0).toLocaleString()," kW"]})]}),r.jsxs("div",{className:"energy-comparison",children:[r.jsx("span",{className:"energy-label",children:"VFD 가변:"}),r.jsxs("span",{className:"energy-value vfd-value",children:[(i.power_vfd||0).toLocaleString()," kW"]})]}),r.jsxs("div",{className:"energy-savings-highlight",children:[r.jsx("span",{className:"savings-label",children:"절감 전력:"}),r.jsxs("span",{className:"savings-value",children:[(i.savings_kw||0).toLocaleString()," kW",r.jsxs("span",{className:"savings-rate",children:[" (",i.savings_rate||0,"% ↓)"]})]})]})]}),r.jsxs("div",{className:"accumulated-section",children:[r.jsxs("div",{className:"accumulated-item",children:[r.jsx("div",{className:"section-title",children:"📅 오늘 누적 (00:00부터)"}),r.jsxs("div",{className:"accumulated-value",children:[r.jsxs("span",{className:"kwh-value",children:[(t.total_kwh_saved||0).toLocaleString()," kWh"]}),r.jsxs("span",{className:"rate-badge",children:["평균 ",t.avg_savings_rate||0,"% 절감"]})]})]}),r.jsxs("div",{className:"accumulated-item",children:[r.jsx("div",{className:"section-title",children:"📊 이번 달 누적 (1일부터)"}),r.jsxs("div",{className:"accumulated-value",children:[r.jsxs("span",{className:"kwh-value",children:[(l.total_kwh_saved||0).toLocaleString()," kWh"]}),r.jsxs("span",{className:"rate-badge",children:["평균 ",l.avg_savings_rate||0,"% 절감"]})]})]})]})]})]}),r.jsxs("div",{className:"energy-details-section",children:[r.jsx("h4",{children:"시스템별 절감률"}),r.jsxs("div",{className:"energy-systems-grid",children:[r.jsx(Ji,{label:"SWP",data:a,color:"#38bdf8"}),r.jsx(Ji,{label:"FWP",data:s,color:"#34d399"}),r.jsx(Ji,{label:"E/R FAN",data:o,color:"#fbbf24"})]})]})]})}function Ji({label:e,data:n,color:t}){const l=(n==null?void 0:n.savings_kw)||0,i=(n==null?void 0:n.savings_rate)||0;return r.jsxs("div",{className:"system-savings-row",children:[r.jsx("div",{className:"system-label",style:{borderLeft:`4px solid ${t}`},children:e}),r.jsxs("div",{className:"system-savings-data",children:[r.jsx("div",{className:"system-power",children:r.jsxs("span",{className:"power-value",children:[l," kW"]})}),r.jsxs("div",{className:"system-progress",children:[r.jsx("div",{className:"progress-bar-container",children:r.jsx("div",{className:"progress-bar-fill",style:{width:`${Math.min(i,100)}%`,backgroundColor:t}})}),r.jsxs("span",{className:"progress-rate",children:[i,"%"]})]})]})]})}function a5({data:e}){const n={"SW 펌프":e.filter(t=>t.group==="SW 펌프"),"FW 펌프":e.filter(t=>t.group==="FW 펌프"),"E/R 팬":e.filter(t=>t.group==="E/R 팬")};return r.jsx("div",{className:"ai-freq-table-wrapper",children:r.jsxs("table",{className:"ai-freq-table",children:[r.jsx("thead",{children:r.jsxs("tr",{children:[r.jsx("th",{children:"그룹"}),r.jsx("th",{children:"장비명"}),r.jsx("th",{children:"제어 모드"}),r.jsx("th",{children:"입력 조건"}),r.jsx("th",{children:"목표 주파수"}),r.jsx("th",{children:"실제 주파수"}),r.jsx("th",{children:"편차"}),r.jsx("th",{children:"판단"})]})}),r.jsx("tbody",{children:Object.entries(n).map(([t,l])=>l.map((i,a)=>r.jsxs("tr",{className:`status-${i.status}`,children:[a===0&&r.jsx("td",{rowSpan:l.length,className:"group-cell",children:t}),r.jsx("td",{children:i.name}),r.jsx("td",{className:i.mode==="AI 제어"?"mode-ai":"mode-stop",children:i.mode}),r.jsx("td",{className:"input-conditions",children:i.input_conditions}),r.jsxs("td",{className:"freq-value",children:[i.target_frequency.toFixed(1)," Hz"]}),r.jsxs("td",{className:"freq-value",children:[i.actual_frequency.toFixed(1)," Hz"]}),r.jsxs("td",{className:`deviation ${Math.abs(i.deviation)<.3?"good":Math.abs(i.deviation)<1?"warning":"alert"}`,children:[i.deviation>=0?"+":"",i.deviation.toFixed(2)," Hz"]}),r.jsxs("td",{className:"status-cell",children:[i.status==="정상"&&r.jsx("span",{className:"status-badge status-normal",children:"✓ 정상"}),i.status==="주의"&&r.jsx("span",{className:"status-badge status-warning",children:"⚠ 주의"}),i.status==="경고"&&r.jsx("span",{className:"status-badge status-alert",children:"⚠ 경고"}),i.status==="-"&&r.jsx("span",{className:"status-badge status-stopped",children:"-"})]})]},`${t}-${a}`)))})]})})}function s5({data:e}){const n=t=>t.startsWith("SWP")?"swp":t.startsWith("FWP")?"fwp":t.startsWith("FAN")?"fan":"";return r.jsx("div",{className:"energy-summary-table-wrapper",children:r.jsxs("table",{className:"energy-summary-table",children:[r.jsx("thead",{children:r.jsxs("tr",{children:[r.jsx("th",{children:"Name"}),r.jsx("th",{children:"Motor Capacity (kW)"}),r.jsx("th",{children:"Actual Freq. (Hz)"}),r.jsx("th",{children:"Actual Power (kW)"}),r.jsx("th",{children:"KW Average"}),r.jsx("th",{children:"Saved Power (kWh)"}),r.jsx("th",{children:"Saved Ratio (%)"}),r.jsx("th",{children:"Running Hours in ESS Mode"})]})}),r.jsx("tbody",{children:e.map((t,l)=>{const i=n(t.name);return r.jsxs("tr",{className:`equipment-row ${i}`,children:[r.jsx("td",{className:"name-cell",children:t.name}),r.jsx("td",{className:"numeric-cell",children:t.motor_capacity}),r.jsx("td",{className:"numeric-cell",children:t.actual_freq}),r.jsx("td",{className:"numeric-cell",children:t.actual_power}),r.jsx("td",{className:"numeric-cell",children:t.kw_average}),r.jsx("td",{className:"numeric-cell",children:t.saved_kwh}),r.jsx("td",{className:`numeric-cell ratio-cell ${t.saved_ratio>0?"positive":""}`,children:t.saved_ratio}),r.jsx("td",{className:"numeric-cell",children:t.run_hours_ess.toLocaleString()})]},l)})})]})})}const An=[{name:"TX1",symbolId:"TX1",x:825,y:320,unit:"°C",decimal:1},{name:"TX2",symbolId:"TX2",x:568,y:154,unit:"°C",decimal:1},{name:"TX3",symbolId:"TX3",x:568,y:298,unit:"°C",decimal:1},{name:"TX4",symbolId:"TX4",x:318,y:156,unit:"°C",decimal:1},{name:"TX5",symbolId:"TX5",x:495,y:440,unit:"°C",decimal:1},{name:"TX6",symbolId:"TX6",x:0,y:0,unit:"°C",decimal:1},{name:"DPX1",symbolId:"PX1",x:945,y:439,unit:" bar",decimal:2},{name:"PX2",symbolId:"PX2",x:0,y:0,unit:" bar",decimal:2},{name:"LT Pump No.1",symbolId:"g229",x:244.243,y:372.093,type:"pump"},{name:"LT Pump No.1 Auto/Man mode",symbolId:"LT_Pump1_Mode",x:300,y:365},{name:"LT Pump No.1 VFD/ BYPASS",symbolId:"LT_Pump1_VFD",x:300,y:382},{name:"LT Pump No.1 Hz(VFD)",symbolId:"LT_Pump1_Hz",x:300,y:399,unit:" Hz"},{name:"LT Pump No.1 running hour",symbolId:"LT_Pump1_hour",x:300,y:416,unit:" h"},{name:"LT Pump No.2",symbolId:"g245",x:244.243,y:459.033,type:"pump"},{name:"LT Pump No.2 Auto/Man mode",symbolId:"LT_Pump2_Mode",x:300,y:452},{name:"LT Pump No.2 VFD/ BYPASS",symbolId:"LT_Pump2_VFD",x:300,y:469},{name:"LT Pump No.2 Hz(VFD)",symbolId:"LT_Pump2_Hz",x:300,y:486,unit:" Hz"},{name:"LT Pump No.2 running hour",symbolId:"LT_Pump2_hour",x:300,y:503,unit:" h"},{name:"LT Pump No.3",symbolId:"g261",x:244.243,y:545.963,type:"pump"},{name:"LT Pump No.3 Auto/Man mode",symbolId:"LT_Pump3_Mode",x:300,y:539},{name:"LT Pump No.3 VFD/ BYPASS",symbolId:"LT_Pump3_VFD",x:300,y:556},{name:"LT Pump No.3 Hz(VFD)",symbolId:"LT_Pump3_Hz",x:300,y:573,unit:" Hz"},{name:"LT Pump No.3 running hour",symbolId:"LT_Pump3_hour",x:300,y:590,unit:" h"},{name:"SW Pump No.1",symbolId:"g103",x:599.923,y:476.633,type:"pump"},{name:"SW Pump No.1 Auto/Man mode",symbolId:"SW_Pump1_Mode",x:640,y:470},{name:"SW Pump No.1 VFD/ BYPASS",symbolId:"SW_Pump1_VFD",x:640,y:487},{name:"SW Pump No.1 Hz(VFD)",symbolId:"SW_Pump1_Hz",x:640,y:504,unit:" Hz"},{name:"SW Pump No.1 running hour",symbolId:"SW_Pump1_hour",x:640,y:521,unit:" h"},{name:"SW Pump No.2",symbolId:"g1046",x:695.023,y:476.633,type:"pump"},{name:"SW Pump No.2 Auto/Man mode",symbolId:"SW_Pump2_Mode",x:735,y:470},{name:"SW Pump No.2 VFD/ BYPASS",symbolId:"SW_Pump2_VFD",x:735,y:487},{name:"SW Pump No.2 Hz(VFD)",symbolId:"SW_Pump2_Hz",x:735,y:504,unit:" Hz"},{name:"SW Pump No.2 running hour",symbolId:"SW_Pump2_hour",x:735,y:521,unit:" h"},{name:"SW Pump No.3",symbolId:"g119",x:786.444,y:476.633,type:"pump"},{name:"SW Pump No.3 Auto/Man mode",symbolId:"SW_Pump3_Mode",x:827,y:470},{name:"SW Pump No.3 VFD/ BYPASS",symbolId:"SW_Pump3_VFD",x:827,y:487},{name:"SW Pump No.3 Hz(VFD)",symbolId:"SW_Pump3_Hz",x:827,y:504,unit:" Hz"},{name:"SW Pump No.3 running hour",symbolId:"SW_Pump3_hour",x:827,y:521,unit:" h"}],o5=An.filter(e=>e.name.startsWith("TX")||e.name.startsWith("PX")||e.name.startsWith("DPX")),d5={0:{name:"SW_Pump_1",data:An.filter(e=>e.name.includes("SW Pump No.3"))},1:{name:"SW_Pump_2",data:An.filter(e=>e.name.includes("SW Pump No.2"))},2:{name:"SW_Pump_3",data:An.filter(e=>e.name.includes("SW Pump No.1"))},3:{name:"LT_Pump_1",data:An.filter(e=>e.name.includes("LT Pump No.1"))},4:{name:"LT_Pump_2",data:An.filter(e=>e.name.includes("LT Pump No.2"))},5:{name:"LT_Pump_3",data:An.filter(e=>e.name.includes("LT Pump No.3"))}},c5=`<?xml version="1.0" encoding="UTF-8" standalone="no"?>
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
`;function u5({sensors:e={},pumps:n=[],onPumpCommand:t}){var m,w,k;const l=F.useRef(null),[i,a]=F.useState(!1),[s,o]=F.useState(null);F.useEffect(()=>{if(l.current&&!i){l.current.innerHTML=c5;const g=l.current.querySelector("svg");if(g){const C=g.querySelector("defs")||document.createElementNS("http://www.w3.org/2000/svg","defs");g.querySelector("defs")||g.insertBefore(C,g.firstChild);const u=document.createElementNS("http://www.w3.org/2000/svg","filter");u.setAttribute("id","sensorValueGlow"),u.setAttribute("x","-50%"),u.setAttribute("y","-50%"),u.setAttribute("width","200%"),u.setAttribute("height","200%");const d=document.createElementNS("http://www.w3.org/2000/svg","feGaussianBlur");d.setAttribute("in","SourceAlpha"),d.setAttribute("stdDeviation","2"),d.setAttribute("result","blur");const f=document.createElementNS("http://www.w3.org/2000/svg","feOffset");f.setAttribute("in","blur"),f.setAttribute("dx","0"),f.setAttribute("dy","1"),f.setAttribute("result","offsetBlur");const h=document.createElementNS("http://www.w3.org/2000/svg","feFlood");h.setAttribute("flood-color","#22d3ee"),h.setAttribute("flood-opacity","0.4"),h.setAttribute("result","color");const _=document.createElementNS("http://www.w3.org/2000/svg","feComposite");_.setAttribute("in","color"),_.setAttribute("in2","offsetBlur"),_.setAttribute("operator","in"),_.setAttribute("result","shadow");const z=document.createElementNS("http://www.w3.org/2000/svg","feMerge"),S=document.createElementNS("http://www.w3.org/2000/svg","feMergeNode");S.setAttribute("in","shadow");const j=document.createElementNS("http://www.w3.org/2000/svg","feMergeNode");j.setAttribute("in","SourceGraphic"),z.appendChild(S),z.appendChild(j),u.appendChild(d),u.appendChild(f),u.appendChild(h),u.appendChild(_),u.appendChild(z),C.appendChild(u);const P=document.createElementNS("http://www.w3.org/2000/svg","filter");P.setAttribute("id","textGlow"),P.setAttribute("x","-50%"),P.setAttribute("y","-50%"),P.setAttribute("width","200%"),P.setAttribute("height","200%");const E=document.createElementNS("http://www.w3.org/2000/svg","feGaussianBlur");E.setAttribute("in","SourceGraphic"),E.setAttribute("stdDeviation","1.5"),E.setAttribute("result","blur");const D=document.createElementNS("http://www.w3.org/2000/svg","feMerge"),G=document.createElementNS("http://www.w3.org/2000/svg","feMergeNode");G.setAttribute("in","blur");const R=document.createElementNS("http://www.w3.org/2000/svg","feMergeNode");R.setAttribute("in","SourceGraphic"),D.appendChild(G),D.appendChild(R),P.appendChild(E),P.appendChild(D),C.appendChild(P)}a(!0),c()}},[]);const c=()=>{if(!l.current)return;const g=l.current.querySelector("svg");if(!g)return;[{index:0,name:"LT Pump No.1",x:240,y:360,width:65,height:60},{index:1,name:"LT Pump No.2",x:240,y:447,width:65,height:60},{index:2,name:"LT Pump No.3",x:240,y:557,width:65,height:60},{index:3,name:"SW Pump No.1",x:585,y:478,width:65,height:60},{index:4,name:"SW Pump No.2",x:680,y:478,width:65,height:60},{index:5,name:"SW Pump No.3",x:770,y:478,width:65,height:60}].forEach(u=>{const d=document.createElementNS("http://www.w3.org/2000/svg","rect");d.setAttribute("x",u.x),d.setAttribute("y",u.y),d.setAttribute("width",u.width),d.setAttribute("height",u.height),d.setAttribute("fill","transparent"),d.setAttribute("cursor","pointer"),d.setAttribute("data-pump-index",u.index),d.addEventListener("click",()=>{p(u.index)}),g.appendChild(d)})},p=g=>{n[g]&&(o({...n[g],index:g}),console.log(`펌프 ${g} 클릭됨`))};F.useEffect(()=>{s&&n[s.index]&&o(g=>({...n[g.index],index:g.index}))},[n]),F.useEffect(()=>{i&&v()},[e,n,i]);const v=()=>{if(!l.current)return;const g=l.current.querySelector("svg");if(!g){console.warn("SVG 요소를 찾을 수 없습니다");return}console.log("📊 데이터 업데이트:",{sensors:e,pumps:n}),(()=>{const u=g.querySelector("defs")||document.createElementNS("http://www.w3.org/2000/svg","defs");if(!g.querySelector("#glassGlow")){const d=document.createElementNS("http://www.w3.org/2000/svg","filter");d.setAttribute("id","glassGlow"),d.setAttribute("x","-50%"),d.setAttribute("y","-50%"),d.setAttribute("width","200%"),d.setAttribute("height","200%");const f=document.createElementNS("http://www.w3.org/2000/svg","feGaussianBlur");f.setAttribute("stdDeviation","1"),f.setAttribute("result","coloredBlur");const h=document.createElementNS("http://www.w3.org/2000/svg","feMerge"),_=document.createElementNS("http://www.w3.org/2000/svg","feMergeNode");_.setAttribute("in","coloredBlur");const z=document.createElementNS("http://www.w3.org/2000/svg","feMergeNode");z.setAttribute("in","SourceGraphic"),h.appendChild(_),h.appendChild(z),d.appendChild(f),d.appendChild(h),u.appendChild(d)}if(!g.querySelector("#neonGlow")){const d=document.createElementNS("http://www.w3.org/2000/svg","filter");d.setAttribute("id","neonGlow"),d.setAttribute("x","-50%"),d.setAttribute("y","-50%"),d.setAttribute("width","200%"),d.setAttribute("height","200%");const f=document.createElementNS("http://www.w3.org/2000/svg","feGaussianBlur");f.setAttribute("stdDeviation","2.5"),f.setAttribute("result","coloredBlur");const h=document.createElementNS("http://www.w3.org/2000/svg","feMerge"),_=document.createElementNS("http://www.w3.org/2000/svg","feMergeNode");_.setAttribute("in","coloredBlur");const z=document.createElementNS("http://www.w3.org/2000/svg","feMergeNode");z.setAttribute("in","SourceGraphic"),h.appendChild(_),h.appendChild(z),d.appendChild(f),d.appendChild(h),u.appendChild(d)}if(!g.querySelector("#cardShadow")){const d=document.createElementNS("http://www.w3.org/2000/svg","filter");d.setAttribute("id","cardShadow"),d.setAttribute("x","-50%"),d.setAttribute("y","-50%"),d.setAttribute("width","200%"),d.setAttribute("height","200%");const f=document.createElementNS("http://www.w3.org/2000/svg","feGaussianBlur");f.setAttribute("stdDeviation","1.5"),f.setAttribute("result","coloredBlur");const h=document.createElementNS("http://www.w3.org/2000/svg","feMerge"),_=document.createElementNS("http://www.w3.org/2000/svg","feMergeNode");_.setAttribute("in","coloredBlur");const z=document.createElementNS("http://www.w3.org/2000/svg","feMergeNode");z.setAttribute("in","SourceGraphic"),h.appendChild(_),h.appendChild(z),d.appendChild(f),d.appendChild(h),u.appendChild(d)}if(!g.querySelector("#softGlow")){const d=document.createElementNS("http://www.w3.org/2000/svg","filter");d.setAttribute("id","softGlow"),d.setAttribute("x","-50%"),d.setAttribute("y","-50%"),d.setAttribute("width","200%"),d.setAttribute("height","200%");const f=document.createElementNS("http://www.w3.org/2000/svg","feGaussianBlur");f.setAttribute("stdDeviation","3"),f.setAttribute("result","coloredBlur");const h=document.createElementNS("http://www.w3.org/2000/svg","feMerge"),_=document.createElementNS("http://www.w3.org/2000/svg","feMergeNode");_.setAttribute("in","coloredBlur");const z=document.createElementNS("http://www.w3.org/2000/svg","feMergeNode");z.setAttribute("in","SourceGraphic"),h.appendChild(_),h.appendChild(z),d.appendChild(f),d.appendChild(h),u.appendChild(d)}if(!g.querySelector("#sharpShadow")){const d=document.createElementNS("http://www.w3.org/2000/svg","filter");d.setAttribute("id","sharpShadow"),d.setAttribute("x","-50%"),d.setAttribute("y","-50%"),d.setAttribute("width","200%"),d.setAttribute("height","200%");const f=document.createElementNS("http://www.w3.org/2000/svg","feGaussianBlur");f.setAttribute("stdDeviation","0.5"),f.setAttribute("result","coloredBlur");const h=document.createElementNS("http://www.w3.org/2000/svg","feMerge"),_=document.createElementNS("http://www.w3.org/2000/svg","feMergeNode");_.setAttribute("in","coloredBlur");const z=document.createElementNS("http://www.w3.org/2000/svg","feMergeNode");z.setAttribute("in","SourceGraphic"),h.appendChild(_),h.appendChild(z),d.appendChild(f),d.appendChild(h),u.appendChild(d)}g.querySelector("defs")||g.insertBefore(u,g.firstChild)})(),o5.forEach(u=>{const d=u.name,f=e[d];if(f!==void 0&&u.x>0&&u.y>0){const h=f.toFixed(u.decimal),_=`${d}_value`;g.querySelectorAll(`#${_}_group`).forEach(x=>x.remove());const S=document.createElementNS("http://www.w3.org/2000/svg","g");S.setAttribute("id",`${_}_group`);const j="rgba(0, 0, 0, 0.95)",P="#00ff00",E="rgba(0, 255, 0, 0.4)",D="1",G="url(#ledGlow)",R="10",N=document.createElementNS("http://www.w3.org/2000/svg","text");N.setAttribute("id",_),N.setAttribute("x",u.x+6),N.setAttribute("y",u.y+4),N.setAttribute("font-family","Arial, sans-serif"),N.setAttribute("font-size",R),N.setAttribute("fill",P),N.setAttribute("font-weight","bold"),N.setAttribute("filter",G),N.textContent=`${h}${u.unit}`,g.appendChild(N);const I=N.getBBox();g.removeChild(N);const L=document.createElementNS("http://www.w3.org/2000/svg","rect");L.setAttribute("x",u.x-2),L.setAttribute("y",u.y-8),L.setAttribute("width",I.width+14),L.setAttribute("height",18),L.setAttribute("rx","4"),L.setAttribute("ry","4"),L.setAttribute("fill",j),L.setAttribute("stroke",E),L.setAttribute("stroke-width",D);const W=g.querySelector("defs")||document.createElementNS("http://www.w3.org/2000/svg","defs");if(!g.querySelector("#ledGlow")){const x=document.createElementNS("http://www.w3.org/2000/svg","filter");x.setAttribute("id","ledGlow"),x.setAttribute("x","-50%"),x.setAttribute("y","-50%"),x.setAttribute("width","200%"),x.setAttribute("height","200%");const b=document.createElementNS("http://www.w3.org/2000/svg","feGaussianBlur");b.setAttribute("stdDeviation","2"),b.setAttribute("result","coloredBlur");const A=document.createElementNS("http://www.w3.org/2000/svg","feMerge"),O=document.createElementNS("http://www.w3.org/2000/svg","feMergeNode");O.setAttribute("in","coloredBlur");const $=document.createElementNS("http://www.w3.org/2000/svg","feMergeNode");$.setAttribute("in","SourceGraphic"),A.appendChild(O),A.appendChild($),x.appendChild(b),x.appendChild(A),W.appendChild(x),g.querySelector("defs")||g.insertBefore(W,g.firstChild)}S.appendChild(L),S.appendChild(N),g.appendChild(S),console.log(`✅ 센서 ${d} 표시 (스타일 ${d}): x=${u.x}, y=${u.y}, 값=${h}${u.unit}`)}}),n.forEach((u,d)=>{const f=d5[d];if(!f){console.warn(`펌프 ${d} 매핑 정보 없음`);return}console.log(`펌프 ${d} 업데이트:`,u),f.data.forEach(j=>{var $;if(j.x===0||j.y===0)return;const P=`${j.symbolId}_value`;g.querySelectorAll(`#${P}_group`).forEach(ve=>ve.remove());let D="";if(j.name.includes("Auto/Man mode"))D=u.auto_mode?"AUTO":"MANU";else if(j.name.includes("running hour"))D=`${u.run_hours||0}${j.unit||""}`;else if(j.name.includes("VFD")&&j.name.includes("BYPASS"))D=u.vfd_mode?"VFD":"BYPA";else if(j.name.includes("Hz(VFD)"))D=`${(($=u.frequency)==null?void 0:$.toFixed(1))||"0.0"}${j.unit||""}`;else if(j.type==="pump")return;if(console.log(`펌프 ${d} - ${j.name}: ${D}, 좌표: (${j.x}, ${j.y})`),!D)return;const G=g.querySelector(`#${P}_group`);G&&G.remove();let R="#ffffff";j.name.includes("Auto/Man mode")?R=u.auto_mode?"#00BFFF":"#FF0000":j.name.includes("VFD")&&j.name.includes("BYPASS")?R=u.vfd_mode?"#00BFFF":"#FFA500":(j.name.includes("Hz(VFD)")||j.name.includes("running hour"))&&(R="#FFFFFF");const N="rgba(0, 0, 0, 0.9)",I="9",L="Bahnschrift, sans-serif",W="bold",x=document.createElementNS("http://www.w3.org/2000/svg","text");x.setAttribute("id",P),x.setAttribute("x",j.x+6),x.setAttribute("y",j.y+4),x.setAttribute("font-family",L),x.setAttribute("font-size",I),x.setAttribute("fill",R),x.setAttribute("font-weight",W),x.setAttribute("text-anchor","start"),x.setAttribute("stroke",R),x.setAttribute("stroke-width","0.3"),x.textContent=D,g.appendChild(x);const b=x.getBBox();g.removeChild(x);const A=document.createElementNS("http://www.w3.org/2000/svg","rect");A.setAttribute("x",j.x-1),A.setAttribute("y",j.y-9),A.setAttribute("width",b.width+10),A.setAttribute("height",14),A.setAttribute("rx","3"),A.setAttribute("ry","3"),A.setAttribute("fill",N);const O=document.createElementNS("http://www.w3.org/2000/svg","g");O.setAttribute("id",`${P}_group`),O.appendChild(A),O.appendChild(x),g.appendChild(O)});const h=f.name,_=`impeller-${h}`,z=g.querySelector(`.${_}`),S=g.querySelector(`#${h}`);if(z&&S){const j=S.querySelectorAll("[fill]");u.running?(z.style.animationPlayState="running",j.forEach(P=>{if(!P.closest(".impeller-"+h)||P===z){const E=P.getAttribute("fill");P.hasAttribute("data-original-fill")||P.setAttribute("data-original-fill",E),E.includes("#06b6d4")?P.setAttribute("fill","#1E90FF"):E.includes("#0891b2")?P.setAttribute("fill","#0066CC"):E.includes("#0e7490")?P.setAttribute("fill","#0052A3"):E.includes("url")||P.setAttribute("fill","#1E90FF")}})):(z.style.animationPlayState="paused",j.forEach(P=>{if(!P.closest(".impeller-"+h)||P===z){const E=P.getAttribute("data-original-fill");P.getAttribute("fill").includes("url")||(E&&E.includes("#06b6d4")?P.setAttribute("fill","#94a3b8"):E&&E.includes("#0891b2")?P.setAttribute("fill","#64748b"):E&&E.includes("#0e7490")?P.setAttribute("fill","#475569"):P.setAttribute("fill","#94a3b8"))}})),console.log(`✅ 펌프 ${d} (${h}) 상태: ${u.running?"🔵 운전중 (파란색)":"⚪ 정지 (회색)"}`)}else console.warn(`❌ 펌프 ${d} 요소 없음 - impeller: ${!!z}, group: ${!!S}`)})},y=async(g,C)=>{t&&(await t(g,C)?(alert(`펌프 ${g+1} ${C==="start"?"시작":"정지"} 명령 전송 완료`),o(null)):alert("명령 전송 실패"))};return r.jsxs("div",{className:"dynamic-svg-diagram",children:[r.jsx("div",{ref:l,className:"svg-container"}),s&&r.jsx("div",{className:"pump-popup-overlay",onClick:()=>o(null),children:r.jsxs("div",{className:"pump-popup",onClick:g=>g.stopPropagation(),children:[r.jsxs("div",{className:"pump-popup-header",children:[r.jsxs("h3",{children:[s.index<3?"LT":"SW"," Pump No.",s.index%3+1]}),r.jsx("button",{className:"popup-close",onClick:()=>o(null),children:"×"})]}),r.jsxs("div",{className:"pump-popup-body",children:[r.jsxs("div",{className:"pump-info-row",children:[r.jsx("span",{className:"info-label",children:"상태:"}),r.jsx("span",{className:`info-value ${s.running?"status-running":"status-stopped"}`,children:s.running?"🟢 운전 중":"⚪ 정지"})]}),r.jsxs("div",{className:"pump-info-row",children:[r.jsx("span",{className:"info-label",children:"운전 모드:"}),r.jsx("span",{className:"info-value",style:{color:s.auto_mode?"#00FF00":"#FFA500",fontWeight:"bold"},children:s.auto_mode!==void 0&&s.auto_mode?"AUTO":"MANUAL"})]}),r.jsxs("div",{className:"pump-info-row",children:[r.jsx("span",{className:"info-label",children:"VFD 모드:"}),r.jsx("span",{className:"info-value",style:{color:s.vfd_mode?"#00BFFF":"#FF69B4",fontWeight:"bold"},children:s.vfd_mode!==void 0?s.vfd_mode?"VFD":"BYPASS":"VFD"})]}),r.jsxs("div",{className:"pump-info-row",children:[r.jsx("span",{className:"info-label",children:"주파수:"}),r.jsxs("span",{className:"info-value",children:[((m=s.frequency)==null?void 0:m.toFixed(1))||"0.0"," Hz"]})]}),r.jsxs("div",{className:"pump-info-row",children:[r.jsx("span",{className:"info-label",children:"전력:"}),r.jsxs("span",{className:"info-value",children:[s.power_kw||0," kW"]})]}),r.jsxs("div",{className:"pump-info-row",children:[r.jsx("span",{className:"info-label",children:"평균 전력:"}),r.jsxs("span",{className:"info-value",children:[s.avg_power||0," kW"]})]}),r.jsxs("div",{className:"pump-info-row",children:[r.jsx("span",{className:"info-label",children:"절감 전력:"}),r.jsxs("span",{className:"info-value",children:[((w=s.saved_kwh)==null?void 0:w.toLocaleString())||0," kWh"]})]}),r.jsxs("div",{className:"pump-info-row",children:[r.jsx("span",{className:"info-label",children:"운전 시간:"}),r.jsxs("span",{className:"info-value",children:[((k=s.run_hours)==null?void 0:k.toLocaleString())||0," h"]})]}),r.jsxs("div",{className:"pump-info-row",children:[r.jsx("span",{className:"info-label",children:"ESS 모드:"}),r.jsx("span",{className:"info-value",children:s.ess_mode?"🟢 활성":"⚪ 비활성"})]})]}),r.jsxs("div",{className:"pump-popup-controls",children:[r.jsx("button",{className:"btn-pump-start",onClick:()=>y(s.index,"start"),disabled:s.running,children:"▶️ START"}),r.jsx("button",{className:"btn-pump-stop",onClick:()=>y(s.index,"stop"),disabled:!s.running,children:"⏹️ STOP"})]})]})})]})}const ns={TX7:{labelId:"TX7",x:406,y:293,unit:"°C",decimal:1},TX6:{labelId:"TX6",x:490,y:311,unit:"°C",decimal:1},PX2:{labelId:"Px2",x:485.43,y:470,unit:" Pa",decimal:1},"M/E Load":{labelId:"M/E Load",x:505,y:408,unit:"%",decimal:1}},f5={0:{name:"FAN1",led:"fanLED207",fanId:"fan206",positions:{autoMan:{x:722,y:310},vfd:{x:722,y:321},hz:{x:722,y:334},hour:{x:722,y:345}}},1:{name:"FAN2",led:"fanLED207-9",fanId:"fan205",positions:{autoMan:{x:668,y:310},vfd:{x:668,y:321},hz:{x:668,y:334},hour:{x:668,y:345}}},2:{name:"FAN3",led:"fanLED207-4",fanId:"fan204",positions:{autoMan:{x:352,y:310},vfd:{x:352,y:321},hz:{x:352,y:334},hour:{x:352,y:345}}},3:{name:"FAN4",led:"fanLED207-6",fanId:"fan203",positions:{autoMan:{x:296,y:310},vfd:{x:296,y:321},hz:{x:296,y:334},hour:{x:296,y:345}}}};function p5({sensors:e={},fans:n=[],equipment:t=[],onCommand:l}){var g,C;const i=F.useRef(null),[a,s]=F.useState(!1),[o,c]=F.useState(null),p=n.length>0?n:t.length>=10?t.slice(6,10):[];F.useRef({}),F.useEffect(()=>{w()},[]);const v=()=>{if(!i.current)return;const u=i.current.querySelector("svg");if(!u)return;[{index:0,name:"FAN1",fanId:"fan206",x:722.323,y:291.019,width:36.4547,height:42.593498},{index:1,name:"FAN2",fanId:"fan205",x:666.649,y:291.019,width:36.360298,height:42.593498},{index:2,name:"FAN3",fanId:"fan204",x:352.676,y:291.68,width:36.4547,height:42.593498},{index:3,name:"FAN4",fanId:"fan203",x:297.002,y:291.68,width:36.3603,height:42.5935}].forEach(f=>{const h=document.createElementNS("http://www.w3.org/2000/svg","rect");h.setAttribute("x",f.x-15),h.setAttribute("y",f.y-47),h.setAttribute("width",f.width*.9),h.setAttribute("height",f.height*1.3),h.setAttribute("fill","transparent"),h.setAttribute("cursor","pointer"),h.setAttribute("data-fan-index",f.index),h.addEventListener("click",()=>{y(f.index)}),u.appendChild(h)})},y=u=>{p[u]&&(c({...p[u],index:u}),console.log(`팬 ${u} 클릭됨`))};F.useEffect(()=>{o&&p[o.index]&&c(u=>({...p[u.index],index:u.index}))},[p]);const m=async(u,d)=>{if(l&&p[u]){const f=p[u],h=await l(f.name,d);alert(h?`✅ ${f.name} ${d==="start_fwd"?"정방향 시작":d==="start_bwd"?"역방향 시작":d==="start"?"시작":"정지"} 명령 성공`:"❌ 명령 실패")}},w=async()=>{try{let d=await(await fetch(`/src/assets/fan_diagram3.svg?t=${Date.now()}`)).text();if(console.log("📄 SVG 파일 로드 완료, g28 제거 시작..."),d=d.replace("</defs>","</defs><style>#g28 { display: none !important; }</style>"),console.log("📝 g28 숨김 스타일 추가 완료"),i.current){i.current.innerHTML=d;const h=i.current.querySelector("svg");h&&(console.log("✅ SVG 로드 완료 (g28 CSS로 숨김 처리)"),v(),[{id:"fan203",index:3,x:297.002,y:291.68,width:36.3603,height:42.5935},{id:"fan204",index:2,x:352.676,y:291.68,width:36.4547,height:42.593498},{id:"fan205",index:1,x:666.649,y:291.019,width:36.360298,height:42.593498},{id:"fan206",index:0,x:722.323,y:291.019,width:36.4547,height:42.593498}].forEach(z=>{const S=z.width/100*.85*.85*.9,j=z.width*0,P=-z.height*.85,E=z.x+j,D=z.y+P;console.log(`${z.id}: use(${z.x}, ${z.y}), scale=${S.toFixed(3)}, offset(${j.toFixed(2)}, ${P.toFixed(2)}), final(${E.toFixed(2)}, ${D.toFixed(2)})`);const G=document.createElementNS("http://www.w3.org/2000/svg","g");G.setAttribute("transform",`translate(${E}, ${D})`);const R=document.createElementNS("http://www.w3.org/2000/svg","g");R.setAttribute("id",`impeller-${z.id}`),R.setAttribute("class","fan-impeller-blades"),[0,72,144,216,288].forEach(W=>{const x=document.createElementNS("http://www.w3.org/2000/svg","path"),b=W*Math.PI/180,A=Math.cos(b),O=Math.sin(b),$=(Ha,Ua)=>{const Md=Ha*A-Ua*O,Cd=Ha*O+Ua*A;return[Md*S,Cd*S]},[ve,Ue]=$(0,-12),[zt,Ye]=$(15,-25),[Gn,hd]=$(25,-45),[yd,gd]=$(28,-50),[xd,vd]=$(22,-52),[kd,wd]=$(10,-48),[zd,jd]=$(5,-45),[Nd,_d]=$(-2,-35),Sd=`M ${ve.toFixed(2)} ${Ue.toFixed(2)} Q ${zt.toFixed(2)} ${Ye.toFixed(2)}, ${Gn.toFixed(2)} ${hd.toFixed(2)} Q ${yd.toFixed(2)} ${gd.toFixed(2)}, ${xd.toFixed(2)} ${vd.toFixed(2)} Q ${kd.toFixed(2)} ${wd.toFixed(2)}, ${zd.toFixed(2)} ${jd.toFixed(2)} Q ${Nd.toFixed(2)} ${_d.toFixed(2)}, ${ve.toFixed(2)} ${Ue.toFixed(2)} Z`;x.setAttribute("d",Sd),x.setAttribute("fill","url(#fan1_realisticBlade)"),x.setAttribute("stroke","#263238"),x.setAttribute("stroke-width",(.8*S).toFixed(2)),x.setAttribute("opacity","0.95"),R.appendChild(x)});const I=document.createElementNS("http://www.w3.org/2000/svg","circle");I.setAttribute("cx","0"),I.setAttribute("cy","0"),I.setAttribute("r",(14*S).toFixed(2)),I.setAttribute("fill","url(#fan1_hubGrad)"),I.setAttribute("stroke","#263238"),I.setAttribute("stroke-width",(1*S).toFixed(2)),R.appendChild(I);const L=document.createElementNS("http://www.w3.org/2000/svg","circle");L.setAttribute("cx","0"),L.setAttribute("cy","0"),L.setAttribute("r",(10*S).toFixed(2)),L.setAttribute("fill","#546e7a"),R.appendChild(L),G.appendChild(R),h.appendChild(G),console.log(`✅ ${z.id} 임펠러 생성 완료 at (${E.toFixed(2)}, ${D.toFixed(2)}), scale: ${S.toFixed(3)}`)})),s(!0)}}catch(u){console.error("❌ SVG 로드 오류:",u)}};F.useEffect(()=>{a&&k()},[e,p,a]);const k=()=>{if(!i.current)return;const u=i.current.querySelector("svg");u&&(console.log("📊 Fan Data:",p),console.log("📡 Sensors:",e),Object.keys(ns).forEach(d=>{const f=ns[d];let h=e[d];if(d==="M/E Load"&&e.PU1!==void 0&&(h=e.PU1),h!==void 0){const _=h.toFixed(f.decimal),z=`${d.replace(/[^a-zA-Z0-9]/g,"_")}_box`,S=`${d.replace(/[^a-zA-Z0-9]/g,"_")}_text`;let j=u.querySelector(`#${z}`),P=u.querySelector(`#${S}`);j&&j.remove(),P&&P.remove();const E=f.x,D=f.y||470,G=38,R=16,N=document.createElementNS("http://www.w3.org/2000/svg","rect");N.setAttribute("id",z),N.setAttribute("x",E-G/2),N.setAttribute("y",D),N.setAttribute("width",G),N.setAttribute("height",R),N.setAttribute("fill","#1a1a1a"),N.setAttribute("stroke","#2a2a2a"),N.setAttribute("stroke-width","0.5"),N.setAttribute("rx","2"),u.appendChild(N);const I=document.createElementNS("http://www.w3.org/2000/svg","text");I.setAttribute("id",S),I.setAttribute("x",E),I.setAttribute("y",D+R/2+3.5),I.setAttribute("text-anchor","middle"),I.setAttribute("fill","#00ff00"),I.setAttribute("font-size","8.5"),I.setAttribute("font-family","Arial, sans-serif"),I.setAttribute("font-weight","bold"),I.textContent=`${_}${f.unit}`,u.appendChild(I)}}),p.forEach((d,f)=>{var x;const h=f5[f];if(!h)return;const _=d.running_fwd||d.running_bwd||d.running||!1,z=d.auto_mode!==void 0?d.auto_mode:!1,S=d.vfd_mode!==void 0?d.vfd_mode:!0,j=u.querySelector(`#impeller-${h.fanId}`);if(j){const b=j.querySelectorAll("path");_?d.running_bwd||!1?(j.style.animation="fanRotate 3s linear infinite reverse",b.forEach(O=>{O.setAttribute("fill","#9370DB"),O.setAttribute("opacity","0.85")}),console.log(`🔄 ${h.fanId} 임펠러 역방향 회전 (보라색)`)):(j.style.animation="fanRotate 3s linear infinite",b.forEach(O=>{O.setAttribute("fill","#1E90FF"),O.setAttribute("opacity","0.95")}),console.log(`✅ ${h.fanId} 임펠러 정방향 회전 (파란색)`)):(j.style.animation="none",b.forEach(A=>{A.setAttribute("fill","#808080"),A.setAttribute("opacity","0.7")}),console.log(`⏸️ ${h.fanId} 임펠러 회전 정지 (회색)`))}const P=u.querySelector(`#${CSS.escape(h.led)}`);P&&P.setAttribute("fill",_?"#00FF00":"#808080");const E=`fan${f}_autoMan`;let D=u.querySelector(`#${E}`);D&&D.remove(),D=document.createElementNS("http://www.w3.org/2000/svg","text"),D.setAttribute("id",E),D.setAttribute("x",h.positions.autoMan.x),D.setAttribute("y",h.positions.autoMan.y),D.setAttribute("text-anchor","middle"),D.setAttribute("fill",z?"#00BFFF":"#FF0000"),D.setAttribute("font-size","9"),D.setAttribute("font-family","Arial, sans-serif"),D.setAttribute("font-weight","bold"),D.textContent=z?"AUTO":"MANU",u.appendChild(D);const G=`fan${f}_vfd`;let R=u.querySelector(`#${G}`);R&&R.remove(),R=document.createElementNS("http://www.w3.org/2000/svg","text"),R.setAttribute("id",G),R.setAttribute("x",h.positions.vfd.x),R.setAttribute("y",h.positions.vfd.y),R.setAttribute("text-anchor","middle"),R.setAttribute("fill",S?"#00BFFF":"#FFA500"),R.setAttribute("font-size","9"),R.setAttribute("font-family","Arial, sans-serif"),R.setAttribute("font-weight","bold"),R.textContent=S?"VFD":"BYPA",u.appendChild(R);const N=`fan${f}_hz`;let I=u.querySelector(`#${N}`);I&&I.remove(),I=document.createElementNS("http://www.w3.org/2000/svg","text"),I.setAttribute("id",N),I.setAttribute("x",h.positions.hz.x),I.setAttribute("y",h.positions.hz.y),I.setAttribute("text-anchor","middle"),I.setAttribute("fill","#FFFFFF"),I.setAttribute("font-size","9"),I.setAttribute("font-family","Arial, sans-serif"),I.setAttribute("font-weight","bold"),I.textContent=`${((x=d.frequency)==null?void 0:x.toFixed(1))||0} Hz`,u.appendChild(I);const L=`fan${f}_hour`;let W=u.querySelector(`#${L}`);W&&W.remove(),W=document.createElementNS("http://www.w3.org/2000/svg","text"),W.setAttribute("id",L),W.setAttribute("x",h.positions.hour.x),W.setAttribute("y",h.positions.hour.y),W.setAttribute("text-anchor","middle"),W.setAttribute("fill","#FFFFFF"),W.setAttribute("font-size","9"),W.setAttribute("font-family","Arial, sans-serif"),W.setAttribute("font-weight","bold"),W.textContent=`${d.run_hours||0} h`,u.appendChild(W)}))};return r.jsxs("div",{className:"fan-diagram-wrapper",children:[r.jsx("div",{className:"fan-diagram-header",children:r.jsx("h2",{children:"🌀 E/R Ventilation System"})}),r.jsx("div",{className:"fan-diagram-content",ref:i}),o&&r.jsx("div",{className:"fan-popup-overlay",onClick:()=>c(null),children:r.jsxs("div",{className:"fan-popup",onClick:u=>u.stopPropagation(),children:[r.jsxs("div",{className:"fan-popup-header",children:[r.jsxs("h3",{children:["E/R Fan No.",o.index+1]}),r.jsx("button",{className:"popup-close",onClick:()=>c(null),children:"×"})]}),r.jsxs("div",{className:"fan-popup-body",children:[r.jsxs("div",{className:"fan-info-row",children:[r.jsx("span",{className:"info-label",children:"상태:"}),r.jsx("span",{className:`info-value ${o.running_fwd||o.running_bwd||o.running?"status-running":"status-stopped"}`,children:o.running_fwd||o.running_bwd||o.running?"🟢 운전 중":"⚪ 정지"})]}),r.jsxs("div",{className:"fan-info-row",children:[r.jsx("span",{className:"info-label",children:"운전 방향:"}),r.jsx("span",{className:"info-value",children:o.running_bwd?"역방향 (Reverse)":o.running_fwd?"정방향 (Forward)":"-"})]}),r.jsxs("div",{className:"fan-info-row",children:[r.jsx("span",{className:"info-label",children:"운전 모드:"}),r.jsx("span",{className:"info-value",children:o.auto_mode!==void 0&&o.auto_mode?"AUTO":"MANUAL"})]}),r.jsxs("div",{className:"fan-info-row",children:[r.jsx("span",{className:"info-label",children:"VFD 모드:"}),r.jsx("span",{className:"info-value",children:o.vfd_mode!==void 0?o.vfd_mode?"VFD":"BYPASS":"VFD"})]}),r.jsxs("div",{className:"fan-info-row",children:[r.jsx("span",{className:"info-label",children:"주파수:"}),r.jsxs("span",{className:"info-value",children:[((g=o.frequency)==null?void 0:g.toFixed(1))||"0.0"," Hz"]})]}),r.jsxs("div",{className:"fan-info-row",children:[r.jsx("span",{className:"info-label",children:"운전 시간:"}),r.jsxs("span",{className:"info-value",children:[((C=o.run_hours)==null?void 0:C.toLocaleString())||0," h"]})]})]}),r.jsxs("div",{className:"fan-popup-controls",children:[r.jsx("button",{className:"btn-fan-start-fwd",onClick:()=>m(o.index,"start_fwd"),disabled:o.running_fwd||o.running_bwd,children:"▶️ 정방향"}),r.jsx("button",{className:"btn-fan-start-bwd",onClick:()=>m(o.index,"start_bwd"),disabled:o.running_fwd||o.running_bwd,children:"◀️ 역방향"}),r.jsx("button",{className:"btn-fan-stop",onClick:()=>m(o.index,"stop"),disabled:!o.running_fwd&&!o.running_bwd&&!o.running,children:"⏹️ 정지"})]})]})})]})}function m5({pumps:e=[],fans:n=[],onCommand:t,onPumpCommand:l}){const[i,a]=F.useState(!1),s=async(o,c)=>{a(!0);try{let p=!1;if(t&&o.name)p=await t(o.name,c);else if(l){const y=e.findIndex(m=>m===o);p=await l(y,c)}const v=c==="start"?"시작":c==="start_fwd"?"정방향 시작":c==="start_bwd"?"역방향 시작":"정지";alert(p?`✅ ${o.name} ${v} 명령 성공`:"❌ 명령 실패")}catch(p){alert(`❌ 오류: ${p.message}`)}finally{a(!1)}};return r.jsxs("div",{className:"pump-control unified-mode",children:[r.jsxs("div",{className:"control-header",children:[r.jsx("h2",{children:"⚙️ 운전 제어"}),r.jsx("p",{children:"펌프와 팬을 선택하고 운전 명령을 내릴 수 있습니다."})]}),r.jsxs("div",{className:"control-grid",children:[r.jsxs("section",{className:"control-section",children:[r.jsx("h3",{children:"🌊 해수 펌프 (Sea Water Pump)"}),r.jsx("div",{className:"pump-control-list",children:e.slice(0,3).map((o,c)=>r.jsx(er,{pump:o,pumpIndex:c,isFan:!1,onStart:()=>s(o,"start"),onStop:()=>s(o,"stop"),disabled:i},c))})]}),r.jsxs("section",{className:"control-section",children:[r.jsx("h3",{children:"💧 청수 펌프 (Fresh Water Pump)"}),r.jsx("div",{className:"pump-control-list",children:e.slice(3,6).map((o,c)=>r.jsx(er,{pump:o,pumpIndex:c+3,isFan:!1,onStart:()=>s(o,"start"),onStop:()=>s(o,"stop"),disabled:i},c+3))})]}),r.jsxs("section",{className:"control-section",children:[r.jsx("h3",{children:"🌀 Engine Room 팬 (E/R Fan)"}),r.jsx("div",{className:"pump-control-list fan-grid",children:n.map((o,c)=>r.jsx(er,{pump:o,pumpIndex:c,isFan:!0,onStart:()=>s(o,"start_fwd"),onStartBwd:()=>s(o,"start_bwd"),onStop:()=>s(o,"stop"),disabled:i},c))})]})]})]})}function er({pump:e,pumpIndex:n,isFan:t,onStart:l,onStartBwd:i,onStop:a,disabled:s}){var c;const o=t?e.running_fwd||e.running_bwd:e.running;return r.jsxs("div",{className:`pump-control-card ${o?"running":"stopped"}`,children:[r.jsxs("div",{className:"control-card-header",children:[r.jsx("h4",{children:e.name}),r.jsx("span",{className:`status-indicator ${t&&e.running_bwd?"reverse":o?"active":"inactive"}`,children:t?e.running_fwd?r.jsxs(r.Fragment,{children:[r.jsx("span",{className:"rotating-icon",children:"⚙️"})," 정방향"]}):e.running_bwd?r.jsxs(r.Fragment,{children:[r.jsx("span",{className:"rotating-icon reverse",children:"⚙️"})," 역방향"]}):"⚪ 정지":e.running?r.jsxs(r.Fragment,{children:[r.jsx("span",{className:"rotating-icon",children:"⚙️"})," 운전중"]}):"⚪ 정지"})]}),r.jsxs("div",{className:"control-card-info",children:[r.jsxs("div",{className:"info-item",children:[r.jsx("span",{className:"info-label",children:"주파수"}),r.jsxs("span",{className:"info-value",children:[((c=e.frequency)==null?void 0:c.toFixed(1))||0," Hz"]})]}),r.jsxs("div",{className:"info-item",children:[r.jsx("span",{className:"info-label",children:"전력"}),r.jsxs("span",{className:"info-value",children:[e.power_kw||0," kW"]})]})]}),r.jsx("div",{className:"control-buttons",children:t?r.jsxs(r.Fragment,{children:[r.jsxs("div",{className:"direction-toggle",children:[r.jsx("button",{className:`toggle-btn ${e.running_fwd?"active":""}`,onClick:p=>{p.stopPropagation(),l()},disabled:s||e.running_fwd,children:"▶️ 정방향"}),r.jsx("button",{className:`toggle-btn ${e.running_bwd?"active":""}`,onClick:p=>{p.stopPropagation(),i()},disabled:s||e.running_bwd,children:"◀️ 역방향"})]}),r.jsx("button",{className:"btn-stop",onClick:p=>{p.stopPropagation(),a()},disabled:s||!o,children:"⏸️ 정지"})]}):r.jsxs(r.Fragment,{children:[r.jsx("button",{className:"btn-start",onClick:p=>{p.stopPropagation(),l()},disabled:s||e.running,children:"▶️ 시작"}),r.jsx("button",{className:"btn-stop",onClick:p=>{p.stopPropagation(),a()},disabled:s||!e.running,children:"⏸️ 정지"})]})})]})}function h5({sensors:e={},pumps:n=[]}){const[t,l]=F.useState([]),i=50;return F.useEffect(()=>{if(Object.keys(e).length>0){const s={time:new Date().toLocaleTimeString("ko-KR"),TX1:e.TX1||0,TX2:e.TX2||0,TX3:e.TX3||0,TX4:e.TX4||0,TX5:e.TX5||0,TX6:e.TX6||0,TX7:e.TX7||0,DPX1:e.DPX1||0,PU1:e.PU1||0,totalPower:n.reduce((o,c)=>o+(c.power_kw||0),0)};l(o=>{const c=[...o,s];return c.length>i?c.slice(-i):c})}},[e,n]),r.jsxs("div",{className:"trend-chart",children:[r.jsxs("div",{className:"chart-header",children:[r.jsx("h2",{children:"📈 실시간 트렌드"}),r.jsxs("p",{children:["최근 ",i,"개 데이터 포인트"]})]}),r.jsxs("div",{className:"charts-grid",children:[r.jsx(Ge,{title:"CSW 펌프 토출 온도 (TX1)",data:t,dataKey:"TX1",unit:"°C",color:"#ef4444"}),r.jsx(Ge,{title:"FW Cooler 1 SW Out (TX2)",data:t,dataKey:"TX2",unit:"°C",color:"#f97316"}),r.jsx(Ge,{title:"FW Cooler 2 SW Out (TX3)",data:t,dataKey:"TX3",unit:"°C",color:"#fb923c"}),r.jsx(Ge,{title:"FW Cooler FW In (TX4)",data:t,dataKey:"TX4",unit:"°C",color:"#dc2626"}),r.jsx(Ge,{title:"FW Cooler FW Out (TX5)",data:t,dataKey:"TX5",unit:"°C",color:"#06b6d4"}),r.jsx(Ge,{title:"CSW 펌프 토출 압력 (DPX1)",data:t,dataKey:"DPX1",unit:"kg/cm²",color:"#3b82f6"}),r.jsx(Ge,{title:"E/R Inside Temp (TX6)",data:t,dataKey:"TX6",unit:"°C",color:"#b91c1c"}),r.jsx(Ge,{title:"E/R Outside Temp (TX7)",data:t,dataKey:"TX7",unit:"°C",color:"#0891b2"}),r.jsx(Ge,{title:"M/E 부하 트렌드 (PU1)",data:t,dataKey:"PU1",unit:"%",color:"#10b981"}),r.jsx(Ge,{title:"총 소비 전력",data:t,dataKey:"totalPower",unit:"kW",color:"#f59e0b"})]})]})}function Ge({title:e,data:n,dataKey:t,unit:l,color:i}){const a=n.map(v=>v[t]),s=Math.max(...a,1),o=Math.min(...a,0),c=s-o||1,p=a[a.length-1]||0;return r.jsxs("div",{className:"chart-panel",children:[r.jsxs("div",{className:"chart-panel-header",children:[r.jsx("h3",{children:e}),r.jsxs("span",{className:"current-value",style:{color:i},children:[p.toFixed(2)," ",l]})]}),r.jsx("div",{className:"chart-container",children:r.jsxs("svg",{className:"chart-svg",viewBox:"0 0 500 200",children:[r.jsx("line",{x1:"0",y1:"0",x2:"500",y2:"0",stroke:"#334155",strokeWidth:"1"}),r.jsx("line",{x1:"0",y1:"50",x2:"500",y2:"50",stroke:"#334155",strokeWidth:"1",strokeDasharray:"5,5"}),r.jsx("line",{x1:"0",y1:"100",x2:"500",y2:"100",stroke:"#334155",strokeWidth:"1",strokeDasharray:"5,5"}),r.jsx("line",{x1:"0",y1:"150",x2:"500",y2:"150",stroke:"#334155",strokeWidth:"1",strokeDasharray:"5,5"}),r.jsx("line",{x1:"0",y1:"200",x2:"500",y2:"200",stroke:"#334155",strokeWidth:"1"}),a.length>1&&r.jsx("polyline",{fill:"none",stroke:i,strokeWidth:"3",points:a.map((v,y)=>{const m=y/(a.length-1)*500,w=200-(v-o)/c*200;return`${m},${w}`}).join(" ")}),a.map((v,y)=>{const m=y/Math.max(a.length-1,1)*500,w=200-(v-o)/c*200;return r.jsx("circle",{cx:m,cy:w,r:"3",fill:i},y)})]})}),r.jsxs("div",{className:"chart-footer",children:[r.jsxs("span",{children:["최소: ",o.toFixed(2)]}),r.jsxs("span",{children:["최대: ",s.toFixed(2)]})]})]})}function y5({alarms:e,alarmSummary:n,alarmSoundMuted:t,onToggleMute:l}){const[i,a]=F.useState([]),s=F.useRef(new Set);F.useEffect(()=>{e&&Array.isArray(e)&&a(e)},[e]);const o=i,c=m=>{switch(m){case"critical":return"🔴";case"warning":return"🟡";case"info":return"🟢";default:return"⚪"}},p=m=>{switch(m){case"critical":return"alarm-critical";case"warning":return"alarm-warning";case"info":return"alarm-info";default:return"alarm-normal"}},v=async m=>{if(s.current.has(m)){console.log("⏳ 이미 확인 요청 중:",m);return}try{console.log("✅ 알람 확인 버튼 클릭:",m),s.current.add(m),(await fetch("http://localhost:8001/api/alarms/acknowledge",{method:"POST",headers:{"Content-Type":"application/json"},body:JSON.stringify({alarm_id:m,user:"Operator"})})).ok?console.log("✅ 알람 확인 성공 - WebSocket 업데이트 대기 중"):console.error("❌ 알람 확인 실패")}catch(w){console.error("❌ 알람 확인 오류:",w)}finally{setTimeout(()=>{s.current.delete(m)},2e3)}},y=o.some(m=>!m.acknowledged);return r.jsxs("div",{className:"alarm-panel",children:[r.jsxs("div",{className:`alarm-header ${y?"has-alarms":""}`,children:[r.jsx("h2",{children:"🔔 알람 시스템"}),r.jsxs("div",{className:"alarm-summary-row",children:[r.jsxs("div",{className:"alarm-summary",children:[r.jsxs("span",{className:"summary-item critical",children:["위험: ",(n==null?void 0:n.critical)||0]}),r.jsxs("span",{className:"summary-item warning",children:["경고: ",(n==null?void 0:n.warning)||0]}),r.jsxs("span",{className:"summary-item info",children:["정보: ",(n==null?void 0:n.info)||0]})]}),y&&l&&r.jsx("button",{className:`btn-mute ${t?"muted":""}`,onClick:l,title:t?"경고음 켜기":"경고음 끄기",children:t?"🔇 소리 켜기":"🔊 음소거"})]})]}),r.jsx("div",{className:"alarm-list",children:o.length===0?r.jsx("div",{className:"no-alarms",children:r.jsx("span",{children:"✅ 활성 알람이 없습니다"})}):o.map(m=>r.jsxs("div",{className:`alarm-item ${p(m.level)} ${m.acknowledged?"acknowledged":""}`,children:[r.jsx("div",{className:"alarm-icon",children:c(m.level)}),r.jsxs("div",{className:"alarm-content",children:[r.jsx("div",{className:"alarm-message",children:m.message}),r.jsx("div",{className:"alarm-time",children:new Date(m.time).toLocaleString("ko-KR")})]}),r.jsx("div",{className:"alarm-actions",children:!m.acknowledged&&r.jsx("button",{className:"btn-acknowledge",onClick:()=>v(m.id),children:"확인"})})]},m.id))})]})}function g5(){const[e,n]=F.useState("temp"),[t,l]=F.useState({swp_op_temp:35,swp_lo_temp:32,swp_hi_temp:38,swp_temp_limit:40,swp_prs:3.5,fwp_1p_op_temp:45,fwp_1p_lo_temp:40,fwp_1p_hi_temp:50,fwp_2p_op_temp:45,fwp_2p_lo_temp:40,fwp_2p_hi_temp:50,swp_adj_cycle:60,swp_adj_hz:5,swp_min_hz:40,swp_max_hz:60,fwp_adj_cycle:60,fwp_adj_hz:5,fwp_min_hz:40,fwp_max_hz:60,fan_adj_cycle:60,fan_adj_hz:5,fan_min_hz:40,fan_max_hz:60,swp_1p_time:240,swp_2p_time:240,swp_op_time:1,swp_speed_limit:300,fwp_1p_chg_time:240,fwp_2p_chg_time:240,fwp_op_time:1,fwp_speed_limit:300,meg_load_lmt1:30,meg_load_lmt2:20}),[i,a]=F.useState(!1),s=(o,c)=>{l(p=>({...p,[o]:parseFloat(c)}))};return r.jsxs("div",{className:"settings",children:[r.jsxs("div",{className:"settings-header",children:[r.jsx("h2",{children:"⚙️ 시스템 설정"}),r.jsx("p",{children:"펌프 운전 파라미터 및 제어 설정"})]}),r.jsxs("div",{className:"settings-tabs",children:[r.jsx("button",{className:e==="temp"?"active":"",onClick:()=>n("temp"),children:"🌡️ 온도 설정"}),r.jsx("button",{className:e==="vfd"?"active":"",onClick:()=>n("vfd"),children:"⚡ VFD 설정"}),r.jsx("button",{className:e==="operation"?"active":"",onClick:()=>n("operation"),children:"🔧 운전 설정"}),r.jsx("button",{className:e==="departure"?"active":"",onClick:()=>n("departure"),children:"🚢 출항 모드"}),r.jsx("button",{className:e==="system"?"active":"",onClick:()=>n("system"),children:"💻 시스템"})]}),r.jsxs("div",{className:"settings-content",children:[e==="temp"&&r.jsx(x5,{settings:t,onChange:s}),e==="vfd"&&r.jsx(v5,{settings:t,onChange:s}),e==="operation"&&r.jsx(k5,{settings:t,onChange:s}),e==="departure"&&r.jsx(w5,{settings:t,onChange:s}),e==="system"&&r.jsx(z5,{})]})]})}function x5({settings:e,onChange:n}){return r.jsxs("div",{className:"settings-section",children:[r.jsx("h3",{children:"🌊 해수 펌프 온도(TX5) 설정"}),r.jsxs("div",{className:"settings-grid",children:[r.jsx(H,{label:"운전 온도",value:e.swp_op_temp,unit:"°C",onChange:t=>n("swp_op_temp",t),min:-30,max:100}),r.jsx(H,{label:"저온 온도",value:e.swp_lo_temp,unit:"°C",onChange:t=>n("swp_lo_temp",t),min:-30,max:100}),r.jsx(H,{label:"고온 온도",value:e.swp_hi_temp,unit:"°C",onChange:t=>n("swp_hi_temp",t),min:-30,max:100}),r.jsx(H,{label:"온도 제한",value:e.swp_temp_limit,unit:"°C",onChange:t=>n("swp_temp_limit",t),min:-30,max:100}),r.jsx(H,{label:"압력 설정",value:e.swp_prs,unit:"kg/cm²",onChange:t=>n("swp_prs",t),min:0,max:10,step:.1})]}),r.jsx("h3",{children:"💧 청수 펌프 온도(TX4) 설정"}),r.jsxs("div",{className:"settings-grid",children:[r.jsxs("div",{className:"settings-subsection",children:[r.jsx("h4",{children:"펌프 1대 운전시"}),r.jsx(H,{label:"운전 온도",value:e.fwp_1p_op_temp,unit:"°C",onChange:t=>n("fwp_1p_op_temp",t)}),r.jsx(H,{label:"저온 온도",value:e.fwp_1p_lo_temp,unit:"°C",onChange:t=>n("fwp_1p_lo_temp",t)}),r.jsx(H,{label:"고온 온도",value:e.fwp_1p_hi_temp,unit:"°C",onChange:t=>n("fwp_1p_hi_temp",t)})]}),r.jsxs("div",{className:"settings-subsection",children:[r.jsx("h4",{children:"펌프 2대 운전시"}),r.jsx(H,{label:"운전 온도",value:e.fwp_2p_op_temp,unit:"°C",onChange:t=>n("fwp_2p_op_temp",t)}),r.jsx(H,{label:"저온 온도",value:e.fwp_2p_lo_temp,unit:"°C",onChange:t=>n("fwp_2p_lo_temp",t)}),r.jsx(H,{label:"고온 온도",value:e.fwp_2p_hi_temp,unit:"°C",onChange:t=>n("fwp_2p_hi_temp",t)})]})]})]})}function v5({settings:e,onChange:n}){return r.jsxs("div",{className:"settings-section",children:[r.jsx("h3",{children:"🌊 해수 펌프 VFD 설정"}),r.jsxs("div",{className:"settings-grid",children:[r.jsx(H,{label:"조정 주기",value:e.swp_adj_cycle,unit:"초",onChange:t=>n("swp_adj_cycle",t),min:1,max:300}),r.jsx(H,{label:"조정 주파수",value:e.swp_adj_hz,unit:"Hz",onChange:t=>n("swp_adj_hz",t),min:1,max:10}),r.jsx(H,{label:"최소 주파수",value:e.swp_min_hz,unit:"Hz",onChange:t=>n("swp_min_hz",t),min:10,max:60}),r.jsx(H,{label:"최대 주파수",value:e.swp_max_hz,unit:"Hz",onChange:t=>n("swp_max_hz",t),min:30,max:60})]}),r.jsx("h3",{children:"💧 청수 펌프 VFD 설정"}),r.jsxs("div",{className:"settings-grid",children:[r.jsx(H,{label:"조정 주기",value:e.fwp_adj_cycle,unit:"초",onChange:t=>n("fwp_adj_cycle",t),min:1,max:300}),r.jsx(H,{label:"조정 주파수",value:e.fwp_adj_hz,unit:"Hz",onChange:t=>n("fwp_adj_hz",t),min:1,max:10}),r.jsx(H,{label:"최소 주파수",value:e.fwp_min_hz,unit:"Hz",onChange:t=>n("fwp_min_hz",t),min:10,max:60}),r.jsx(H,{label:"최대 주파수",value:e.fwp_max_hz,unit:"Hz",onChange:t=>n("fwp_max_hz",t),min:30,max:60})]}),r.jsx("h3",{children:"🌀 E/R Fan VFD 설정"}),r.jsxs("div",{className:"settings-grid",children:[r.jsx(H,{label:"조정 주기",value:e.fan_adj_cycle,unit:"초",onChange:t=>n("fan_adj_cycle",t),min:1,max:300}),r.jsx(H,{label:"조정 주파수",value:e.fan_adj_hz,unit:"Hz",onChange:t=>n("fan_adj_hz",t),min:1,max:10}),r.jsx(H,{label:"최소 주파수",value:e.fan_min_hz,unit:"Hz",onChange:t=>n("fan_min_hz",t),min:10,max:60}),r.jsx(H,{label:"최대 주파수",value:e.fan_max_hz,unit:"Hz",onChange:t=>n("fan_max_hz",t),min:30,max:60})]})]})}function k5({settings:e,onChange:n}){return r.jsxs("div",{className:"settings-section",children:[r.jsx("h3",{children:"🔧 펌프 운전 설정"}),r.jsxs("div",{className:"settings-grid",children:[r.jsx(H,{label:"SWP 1펌프 운전 시간",value:e.swp_1p_time,unit:"분",onChange:t=>n("swp_1p_time",t),min:1,max:1e3}),r.jsx(H,{label:"SWP 2펌프 운전 시간",value:e.swp_2p_time,unit:"분",onChange:t=>n("swp_2p_time",t),min:1,max:1e3}),r.jsx(H,{label:"SWP 운전 순서",value:e.swp_op_time,unit:"",onChange:t=>n("swp_op_time",t),min:1,max:6}),r.jsx(H,{label:"최적속도 운전 시간",value:e.swp_speed_limit,unit:"초",onChange:t=>n("swp_speed_limit",t),min:0,max:600}),r.jsx(H,{label:"FWP 1펌프 운전 시간",value:e.fwp_1p_chg_time,unit:"분",onChange:t=>n("fwp_1p_chg_time",t),min:1,max:1e3}),r.jsx(H,{label:"FWP 2펌프 운전 시간",value:e.fwp_2p_chg_time,unit:"분",onChange:t=>n("fwp_2p_chg_time",t),min:1,max:1e3}),r.jsx(H,{label:"FWP 운전 순서",value:e.fwp_op_time,unit:"",onChange:t=>n("fwp_op_time",t),min:1,max:6}),r.jsx(H,{label:"최적속도 운전 시간",value:e.fwp_speed_limit,unit:"초",onChange:t=>n("fwp_speed_limit",t),min:0,max:600})]}),r.jsx("h3",{children:"🔥 M/E 부하 설정"}),r.jsxs("div",{className:"settings-grid",children:[r.jsx(H,{label:"운항 부하 기준값",value:e.meg_load_lmt1,unit:"%",onChange:t=>n("meg_load_lmt1",t),min:0,max:100}),r.jsx(H,{label:"정박 부하 기준값",value:e.meg_load_lmt2,unit:"%",onChange:t=>n("meg_load_lmt2",t),min:0,max:100})]})]})}function w5({settings:e,onChange:n}){const[t,l]=F.useState(!1);return r.jsxs("div",{className:"settings-section",children:[r.jsx("h3",{children:"🚢 출항 모드 설정"}),r.jsxs("div",{className:"departure-mode-card",children:[r.jsxs("div",{className:"departure-status",children:[r.jsx("span",{className:"status-label",children:"현재 상태:"}),r.jsx("span",{className:`status-badge ${t?"active":"inactive"}`,children:t?"🟢 출항 모드 활성":"⚪ 정상 모드"})]}),r.jsxs("div",{className:"departure-description",children:[r.jsxs("p",{children:[r.jsx("strong",{children:"출항 모드란?"}),r.jsx("br",{}),"선박 출항 시 엔진 부하가 낮을 때 자동으로 ESS 모드로 전환되는 것을 방지합니다."]}),r.jsxs("p",{children:[r.jsx("strong",{children:"해제 조건:"}),r.jsx("br",{}),"M/E 부하가 ",e.meg_load_lmt2,"% 이상일 때 자동으로 정상 모드로 전환됩니다."]})]}),r.jsx("button",{className:`btn-departure ${t?"active":""}`,onClick:()=>l(!t),children:t?"🔓 정상 모드로 전환":"🔒 출항 모드 활성화"})]}),r.jsx("div",{className:"settings-grid",children:r.jsx(H,{label:"M/E 부하 해제 설정",value:e.meg_load_lmt2,unit:"%",onChange:i=>n("meg_load_lmt2",i),min:0,max:100})})]})}function z5(){return r.jsxs("div",{className:"settings-section",children:[r.jsx("h3",{children:"💻 시스템 설정"}),r.jsxs("div",{className:"system-info",children:[r.jsxs("div",{className:"info-card",children:[r.jsx("h4",{children:"🔌 PLC 연결 정보"}),r.jsxs("div",{className:"info-row",children:[r.jsx("span",{children:"IP 주소:"}),r.jsx("span",{children:"127.0.0.1"})]}),r.jsxs("div",{className:"info-row",children:[r.jsx("span",{children:"포트:"}),r.jsx("span",{children:"502"})]}),r.jsxs("div",{className:"info-row",children:[r.jsx("span",{children:"프로토콜:"}),r.jsx("span",{children:"Modbus TCP"})]}),r.jsxs("div",{className:"info-row",children:[r.jsx("span",{children:"Node ID:"}),r.jsx("span",{children:"3"})]})]}),r.jsxs("div",{className:"info-card",children:[r.jsx("h4",{children:"📊 시스템 정보"}),r.jsxs("div",{className:"info-row",children:[r.jsx("span",{children:"버전:"}),r.jsx("span",{children:"1.0.0"})]}),r.jsxs("div",{className:"info-row",children:[r.jsx("span",{children:"화면 해상도:"}),r.jsx("span",{children:"1280 x 1024"})]}),r.jsxs("div",{className:"info-row",children:[r.jsx("span",{children:"업데이트 주기:"}),r.jsx("span",{children:"1초"})]})]}),r.jsxs("div",{className:"info-card",children:[r.jsx("h4",{children:"💾 데이터 저장"}),r.jsxs("div",{className:"info-row",children:[r.jsx("span",{children:"데이터 폴더:"}),r.jsx("span",{children:"C:\\HMI_DATA"})]}),r.jsxs("div",{className:"info-row",children:[r.jsx("span",{children:"로그 보관 기간:"}),r.jsx("span",{children:"30일"})]})]})]})]})}function H({label:e,value:n,unit:t,onChange:l,min:i=0,max:a=100,step:s=1}){return r.jsxs("div",{className:"setting-item",children:[r.jsx("label",{children:e}),r.jsxs("div",{className:"setting-input-group",children:[r.jsx("input",{type:"number",value:n,onChange:o=>l(o.target.value),min:i,max:a,step:s}),r.jsx("span",{className:"unit",children:t})]})]})}function j5({equipment:e=[],pumps:n=[],fans:t=[],onCommand:l}){const[i,a]=F.useState("automan"),s=e.length>0?e:n;return r.jsxs("div",{className:"advanced-control",children:[r.jsxs("div",{className:"control-header",children:[r.jsx("h2",{children:"🎛️ 고급 제어"}),r.jsx("p",{children:"자동/수동 전환, PID 제어, VFD 상세 정보"})]}),r.jsxs("div",{className:"control-tabs",children:[r.jsx("button",{className:i==="automan"?"active":"",onClick:()=>a("automan"),children:"🔄 자동/수동"}),r.jsx("button",{className:i==="pid"?"active":"",onClick:()=>a("pid"),children:"📐 PID 제어"}),r.jsx("button",{className:i==="vfdinfo"?"active":"",onClick:()=>a("vfdinfo"),children:"⚡ VFD 정보"})]}),r.jsxs("div",{className:"control-content",children:[i==="automan"&&r.jsx(N5,{equipment:s,pumps:n,fans:t,onCommand:l}),i==="pid"&&r.jsx(_5,{}),i==="vfdinfo"&&r.jsx(S5,{equipment:s})]})]})}function N5({equipment:e=[],pumps:n=[],fans:t=[],onCommand:l}){const i=e.length>0?e:n,[a,s]=F.useState({SWP1:{auto:!0,vfd:!0},SWP2:{auto:!0,vfd:!0},SWP3:{auto:!0,vfd:!0},FWP1:{auto:!0,vfd:!0},FWP2:{auto:!0,vfd:!0},FWP3:{auto:!0,vfd:!0},FAN1:{auto:!0,vfd:!0},FAN2:{auto:!0,vfd:!0},FAN3:{auto:!0,vfd:!0},FAN4:{auto:!0,vfd:!0}});F.useEffect(()=>{if(i.length>0){const y={};i.forEach(m=>{y[m.name]={auto:m.auto_mode!==void 0?m.auto_mode:!0,vfd:m.vfd_mode!==void 0?m.vfd_mode:!0}}),s(y),console.log("🔄 모드 상태 동기화:",y)}},[i]);const o=async(y,m,w)=>{if(s(k=>({...k,[y]:{...k[y],[m]:w}})),l){let k="";m==="auto"?k=w?"auto":"manual":m==="vfd"&&(k=w?"vfd":"bypass"),console.log(`🔧 모드 변경: ${y} ${k}`),await l(y,k)?console.log(`✅ ${y} ${k} 모드 설정 완료`):(console.error(`❌ ${y} ${k} 모드 설정 실패`),s(C=>({...C,[y]:{...C[y],[m]:!w}})))}},c=i.slice(0,3),p=i.slice(3,6),v=i.slice(6,10);return r.jsxs("div",{className:"automan-section",children:[r.jsxs("div",{className:"automan-description",children:[r.jsx("h3",{children:"🔄 운전 모드 설정"}),r.jsx("p",{children:"각 장비의 운전 모드(자동/수동)와 VFD 모드를 설정할 수 있습니다."})]}),r.jsxs("div",{className:"mode-grid-3col",children:[r.jsxs("div",{className:"mode-column",children:[r.jsx("h4",{className:"column-title",children:"🌊 해수 펌프 (SWP)"}),c.map((y,m)=>r.jsx(nr,{equipment:y,modes:a[y.name],onSetMode:(w,k)=>o(y.name,w,k),isFan:!1},m))]}),r.jsxs("div",{className:"mode-column",children:[r.jsx("h4",{className:"column-title",children:"💧 청수 펌프 (FWP)"}),p.map((y,m)=>r.jsx(nr,{equipment:y,modes:a[y.name],onSetMode:(w,k)=>o(y.name,w,k),isFan:!1},m+3))]}),r.jsxs("div",{className:"mode-column fan-column",children:[r.jsx("h4",{className:"column-title",children:"🌀 E/R 팬 (FAN)"}),r.jsx("div",{className:"fan-cards-grid",children:v.map((y,m)=>r.jsx(nr,{equipment:y,modes:a[y.name],onSetMode:(w,k)=>o(y.name,w,k),isFan:!0},m+6))})]})]})]})}function nr({equipment:e,modes:n,onSetMode:t,isFan:l=!1}){var a;const i=l?e.running_fwd||e.running_bwd:e.running;return r.jsxs("div",{className:"pump-mode-card",children:[r.jsxs("div",{className:"mode-card-header",children:[r.jsx("h5",{children:e.name}),r.jsx("span",{className:`status-dot ${i?"running":"stopped"}`})]}),r.jsxs("div",{className:"mode-switches",children:[r.jsxs("div",{className:"mode-switch",children:[r.jsx("span",{className:"switch-label",children:"운전 모드"}),r.jsxs("div",{className:"switch-buttons",children:[r.jsx("button",{className:n!=null&&n.auto?"active":"",onClick:()=>t("auto",!0),children:"🤖 자동"}),r.jsx("button",{className:n!=null&&n.auto?"":"active",onClick:()=>t("auto",!1),children:"👤 수동"})]})]}),r.jsxs("div",{className:"mode-switch",children:[r.jsx("span",{className:"switch-label",children:"VFD 모드"}),r.jsxs("div",{className:"switch-buttons",children:[r.jsx("button",{className:n!=null&&n.vfd?"active":"",onClick:()=>t("vfd",!0),children:"⚡ VFD"}),r.jsx("button",{className:n!=null&&n.vfd?"":"active",onClick:()=>t("vfd",!1),children:"🔌 Bypass"})]})]})]}),r.jsxs("div",{className:"mode-info",children:[r.jsxs("div",{className:"info-row",children:[r.jsx("span",{children:"주파수:"}),r.jsxs("span",{children:[((a=e.frequency)==null?void 0:a.toFixed(1))||0," Hz"]})]}),r.jsxs("div",{className:"info-row",children:[r.jsx("span",{children:"전력:"}),r.jsxs("span",{children:[e.power_kw||0," kW"]})]}),l&&r.jsxs("div",{className:"info-row",children:[r.jsx("span",{children:"방향:"}),r.jsx("span",{children:e.running_fwd?"정방향":e.running_bwd?"역방향":"정지"})]})]})]})}function _5(){const[e,n]=F.useState({swp_kp:1,swp_ki:.1,swp_kd:.05,swp_setpoint:30,fwp_kp:1,fwp_ki:.1,fwp_kd:.05,fwp_setpoint:75}),t=(l,i)=>{n(a=>({...a,[l]:parseFloat(i)}))};return r.jsxs("div",{className:"pid-section",children:[r.jsxs("div",{className:"pid-description",children:[r.jsx("h3",{children:"📐 PID 제어 파라미터"}),r.jsx("p",{children:"온도 제어를 위한 PID 게인값을 설정합니다."}),r.jsxs("div",{className:"pid-formula",children:[r.jsx("strong",{children:"제어식:"})," Output = Kp × e(t) + Ki × ∫e(t)dt + Kd × de(t)/dt"]})]}),r.jsxs("div",{className:"pid-controller-section",children:[r.jsx("h4",{children:"🌊 해수 펌프 PID 파라미터"}),r.jsxs("div",{className:"pid-grid",children:[r.jsx(un,{label:"비례 게인 (Kp)",value:e.swp_kp,onChange:l=>t("swp_kp",l),min:0,max:10,step:.1}),r.jsx(un,{label:"적분 게인 (Ki)",value:e.swp_ki,onChange:l=>t("swp_ki",l),min:0,max:5,step:.01}),r.jsx(un,{label:"미분 게인 (Kd)",value:e.swp_kd,onChange:l=>t("swp_kd",l),min:0,max:1,step:.01}),r.jsx(un,{label:"목표값 (Setpoint)",value:e.swp_setpoint,onChange:l=>t("swp_setpoint",l),min:-30,max:100,step:.5,unit:"°C"})]})]}),r.jsxs("div",{className:"pid-controller-section",children:[r.jsx("h4",{children:"💧 청수 펌프 PID 파라미터"}),r.jsxs("div",{className:"pid-grid",children:[r.jsx(un,{label:"비례 게인 (Kp)",value:e.fwp_kp,onChange:l=>t("fwp_kp",l),min:0,max:10,step:.1}),r.jsx(un,{label:"적분 게인 (Ki)",value:e.fwp_ki,onChange:l=>t("fwp_ki",l),min:0,max:5,step:.01}),r.jsx(un,{label:"미분 게인 (Kd)",value:e.fwp_kd,onChange:l=>t("fwp_kd",l),min:0,max:1,step:.01}),r.jsx(un,{label:"목표값 (Setpoint)",value:e.fwp_setpoint,onChange:l=>t("fwp_setpoint",l),min:0,max:100,step:.5,unit:"°C"})]})]}),r.jsx("div",{className:"pid-footer",children:r.jsx("button",{className:"btn-apply",children:"💾 PID 파라미터 적용"})})]})}function un({label:e,value:n,onChange:t,min:l,max:i,step:a,unit:s=""}){return r.jsxs("div",{className:"pid-parameter",children:[r.jsx("label",{children:e}),r.jsxs("div",{className:"pid-input-group",children:[r.jsx("input",{type:"number",value:n,onChange:o=>t(o.target.value),min:l,max:i,step:a}),s&&r.jsx("span",{className:"unit",children:s})]}),r.jsx("input",{type:"range",value:n,onChange:o=>t(o.target.value),min:l,max:i,step:a,className:"pid-slider"})]})}function S5({equipment:e=[]}){const[n,t]=F.useState(0);return r.jsxs("div",{className:"vfdinfo-section",children:[r.jsxs("div",{className:"vfdinfo-description",children:[r.jsx("h3",{children:"⚡ VFD 상세 정보"}),r.jsx("p",{children:"각 장비의 VFD(인버터) 상세 운전 정보를 확인합니다."})]}),r.jsx("div",{className:"pump-selector",children:e.slice(0,6).map((l,i)=>r.jsx("button",{className:`pump-select-btn ${n===i?"active":""}`,onClick:()=>t(i),children:l.name},i))}),r.jsx("div",{className:"pump-selector",style:{marginTop:"0.5rem"},children:e.slice(6,10).map((l,i)=>r.jsx("button",{className:`pump-select-btn ${n===i+6?"active":""}`,onClick:()=>t(i+6),children:l.name},i+6))}),e[n]&&r.jsx(M5,{equipment:e[n],isFan:n>=6})]})}function M5({equipment:e,isFan:n=!1}){var l,i,a,s;const t=n?e.running_fwd||e.running_bwd:e.running;return r.jsxs("div",{className:"vfd-detail-card",children:[r.jsxs("div",{className:"vfd-header",children:[r.jsxs("h4",{children:[e.name," VFD 상세 정보"]}),r.jsx("span",{className:`vfd-status ${t?"running":"stopped"}`,children:n?e.running_fwd?"🟢 정방향 운전중":e.running_bwd?"🟡 역방향 운전중":"⚪ 정지":e.running?"🟢 운전중":"⚪ 정지"})]}),r.jsxs("div",{className:"vfd-info-grid",children:[r.jsxs("div",{className:"vfd-info-column",children:[r.jsxs("div",{className:"vfd-info-section",children:[r.jsx("h5",{children:"📊 운전 데이터"}),r.jsx(le,{label:"현재 주파수",value:`${((l=e.frequency)==null?void 0:l.toFixed(1))||0} Hz`}),r.jsx(le,{label:"출력 주파수",value:`${((i=e.frequency)==null?void 0:i.toFixed(1))||0} Hz`}),r.jsx(le,{label:"목표 주파수",value:"60.0 Hz"}),r.jsx(le,{label:"현재 전류",value:`${(e.power_kw*2.5).toFixed(1)} A`}),r.jsx(le,{label:"출력 전압",value:"440 V"}),n&&r.jsx(le,{label:"운전 방향",value:e.running_fwd?"정방향 (FWD)":e.running_bwd?"역방향 (BWD)":"정지"})]}),r.jsxs("div",{className:"vfd-info-section",children:[r.jsx("h5",{children:"⚡ 전력 데이터"}),r.jsx(le,{label:"순시 전력",value:`${e.power_kw||0} kW`}),r.jsx(le,{label:"평균 전력",value:`${e.avg_power||0} kW`}),r.jsx(le,{label:"역률",value:"0.95"}),r.jsx(le,{label:"효율",value:"94.5 %"}),r.jsx(le,{label:"절감률",value:`${e.saved_ratio||0} %`,highlight:!0})]})]}),r.jsxs("div",{className:"vfd-info-column",children:[r.jsxs("div",{className:"vfd-info-section",children:[r.jsx("h5",{children:"🕐 운전 시간"}),r.jsx(le,{label:"ESS 운전 시간",value:`${((a=e.run_hours)==null?void 0:a.toLocaleString())||0} h`}),r.jsx(le,{label:"총 운전 시간",value:`${(e.run_hours*1.5).toLocaleString()||0} h`}),r.jsx(le,{label:"절감 전력량",value:`${((s=e.saved_kwh)==null?void 0:s.toLocaleString())||0} kWh`,highlight:!0})]}),r.jsxs("div",{className:"vfd-info-section",children:[r.jsx("h5",{children:"🛡️ 상태 정보"}),r.jsx(le,{label:"운전 모드",value:e.ess_mode?"ESS 모드":"일반 모드"}),r.jsx(le,{label:"제어 모드",value:"자동"}),r.jsx(le,{label:"VFD 온도",value:"42 °C"}),r.jsx(le,{label:"모터 온도",value:"38 °C"}),r.jsx(le,{label:"알람 상태",value:"정상",success:!0})]})]})]})]})}function le({label:e,value:n,highlight:t,success:l}){return r.jsxs("div",{className:"vfd-info-row",children:[r.jsx("span",{className:"vfd-label",children:e}),r.jsx("span",{className:`vfd-value ${t?"highlight":""} ${l?"success":""}`,children:n})]})}function C5(){const[e,n]=F.useState("alarms"),[t,l]=F.useState([]),[i,a]=F.useState([]),[s,o]=F.useState([]),[c,p]=F.useState(!1);F.useEffect(()=>{e==="alarms"?v():e==="events"?y():e==="operation"&&m()},[e]);const v=async()=>{p(!0);try{const g=await(await fetch("http://localhost:8000/api/alarms/history?limit=100")).json();g.success&&l(g.data)}catch(k){console.error("알람 이력 조회 오류:",k)}finally{p(!1)}},y=async()=>{p(!0);try{const g=await(await fetch("http://localhost:8001/api/events?limit=100")).json();g.success&&a(g.data)}catch(k){console.error("이벤트 로그 조회 오류:",k)}finally{p(!1)}},m=async()=>{p(!0);try{const g=await(await fetch("http://localhost:8000/api/operations")).json();g.success&&o(g.data)}catch(k){console.error("운전 이력 조회 오류:",k)}finally{p(!1)}},w=(k,g)=>{if(!k||k.length===0){alert("내보낼 데이터가 없습니다.");return}const C=Object.keys(k[0]),u=[C.join(","),...k.map(z=>C.map(S=>{const j=z[S];return typeof j=="string"&&j.includes(",")?`"${j}"`:j}).join(","))].join(`
`),d="\uFEFF",f=new Blob([d+u],{type:"text/csv;charset=utf-8;"}),h=document.createElement("a"),_=URL.createObjectURL(f);h.setAttribute("href",_),h.setAttribute("download",`${g}_${new Date().toISOString().slice(0,10)}.csv`),h.style.visibility="hidden",document.body.appendChild(h),h.click(),document.body.removeChild(h)};return r.jsxs("div",{className:"history",children:[r.jsxs("div",{className:"history-header",children:[r.jsx("h2",{children:"📋 이력 관리"}),r.jsx("p",{children:"알람 이력, 이벤트 로그, 운전 이력 조회"})]}),r.jsxs("div",{className:"history-tabs",children:[r.jsx("button",{className:e==="alarms"?"active":"",onClick:()=>n("alarms"),children:"🔔 알람 이력"}),r.jsx("button",{className:e==="events"?"active":"",onClick:()=>n("events"),children:"📝 이벤트 로그"}),r.jsx("button",{className:e==="operation"?"active":"",onClick:()=>n("operation"),children:"⚙️ 운전 이력"})]}),r.jsxs("div",{className:"history-content",children:[c&&r.jsx("div",{className:"loading",children:"데이터 로딩 중..."}),!c&&e==="alarms"&&r.jsx(b5,{data:t,onExport:w}),!c&&e==="events"&&r.jsx(E5,{data:i,onExport:w}),!c&&e==="operation"&&r.jsx(P5,{data:s,onExport:w})]})]})}function b5({data:e,onExport:n}){const[t,l]=F.useState("all"),[i,a]=F.useState(""),s=e.filter(o=>!(t!=="all"&&o.level!==t||i&&!o.message.toLowerCase().includes(i.toLowerCase())));return r.jsxs("div",{className:"alarm-history",children:[r.jsxs("div",{className:"history-controls",children:[r.jsxs("div",{className:"filter-group",children:[r.jsx("label",{children:"필터:"}),r.jsxs("select",{value:t,onChange:o=>l(o.target.value),children:[r.jsx("option",{value:"all",children:"전체"}),r.jsx("option",{value:"critical",children:"위험"}),r.jsx("option",{value:"warning",children:"경고"}),r.jsx("option",{value:"info",children:"정보"})]})]}),r.jsx("div",{className:"search-group",children:r.jsx("input",{type:"text",placeholder:"🔍 알람 검색...",value:i,onChange:o=>a(o.target.value)})}),r.jsx("button",{className:"btn-export",onClick:()=>n(s,"alarm_history"),children:"📥 CSV 내보내기"})]}),r.jsx("div",{className:"history-table",children:r.jsxs("table",{children:[r.jsx("thead",{children:r.jsxs("tr",{children:[r.jsx("th",{children:"시간"}),r.jsx("th",{children:"등급"}),r.jsx("th",{children:"메시지"}),r.jsx("th",{children:"확인"})]})}),r.jsx("tbody",{children:s.map(o=>r.jsxs("tr",{children:[r.jsx("td",{children:o.time}),r.jsx("td",{children:r.jsxs("span",{className:`level-badge ${o.level}`,children:[o.level==="critical"&&"🔴 위험",o.level==="warning"&&"🟡 경고",o.level==="info"&&"🟢 정보"]})}),r.jsx("td",{children:o.message}),r.jsx("td",{children:r.jsx("span",{className:`ack-badge ${o.acknowledged?"ack":"unack"}`,children:o.acknowledged?"✅ 확인됨":"⏳ 대기중"})})]},o.id))})]})}),r.jsxs("div",{className:"history-summary",children:[r.jsxs("div",{className:"summary-item",children:[r.jsx("span",{className:"summary-label",children:"총 알람:"}),r.jsxs("span",{className:"summary-value",children:[e.length,"건"]})]}),r.jsxs("div",{className:"summary-item",children:[r.jsx("span",{className:"summary-label",children:"위험:"}),r.jsxs("span",{className:"summary-value critical",children:[e.filter(o=>o.level==="critical").length,"건"]})]}),r.jsxs("div",{className:"summary-item",children:[r.jsx("span",{className:"summary-label",children:"경고:"}),r.jsxs("span",{className:"summary-value warning",children:[e.filter(o=>o.level==="warning").length,"건"]})]})]})]})}function E5({data:e,onExport:n}){const[t,l]=F.useState("all"),i=e.filter(s=>!(t!=="all"&&s.type!==t)),a=s=>{switch(s){case"control":return"🎮";case"alarm":return"🔔";case"setting":return"⚙️";case"system":return"💻";default:return"📝"}};return r.jsxs("div",{className:"event-history",children:[r.jsxs("div",{className:"history-controls",children:[r.jsxs("div",{className:"filter-group",children:[r.jsx("label",{children:"이벤트 유형:"}),r.jsxs("select",{value:t,onChange:s=>l(s.target.value),children:[r.jsx("option",{value:"all",children:"전체"}),r.jsx("option",{value:"control",children:"제어"}),r.jsx("option",{value:"alarm",children:"알람"}),r.jsx("option",{value:"setting",children:"설정"}),r.jsx("option",{value:"system",children:"시스템"})]})]}),r.jsx("button",{className:"btn-export",onClick:()=>n(i,"event_history"),children:"📥 CSV 내보내기"})]}),r.jsx("div",{className:"event-list",children:i.map(s=>r.jsxs("div",{className:"event-item",children:[r.jsx("div",{className:"event-icon",children:a(s.type)}),r.jsxs("div",{className:"event-content",children:[r.jsxs("div",{className:"event-header",children:[r.jsx("span",{className:"event-time",children:s.time}),r.jsx("span",{className:"event-user",children:s.user})]}),r.jsx("div",{className:"event-message",children:s.message})]})]},s.id))})]})}function P5({data:e,onExport:n}){return r.jsxs("div",{className:"operation-history",children:[r.jsxs("div",{className:"history-controls",children:[r.jsxs("div",{className:"date-range",children:[r.jsx("label",{children:"조회 기간:"}),r.jsx("input",{type:"date",defaultValue:new Date().toISOString().slice(0,10)}),r.jsx("span",{children:"~"}),r.jsx("input",{type:"date",defaultValue:new Date().toISOString().slice(0,10)})]}),r.jsx("button",{className:"btn-search",children:"🔍 조회"}),r.jsx("button",{className:"btn-export",onClick:()=>n(e,"operation_history"),children:"📥 리포트 생성"})]}),r.jsx("div",{className:"operation-table",children:r.jsxs("table",{children:[r.jsx("thead",{children:r.jsxs("tr",{children:[r.jsx("th",{children:"펌프"}),r.jsx("th",{children:"날짜"}),r.jsx("th",{children:"운전 시간"}),r.jsx("th",{children:"소비 전력"}),r.jsx("th",{children:"절감 전력"}),r.jsx("th",{children:"절감률"})]})}),r.jsx("tbody",{children:e&&e.length>0?e.map((t,l)=>{var i,a,s;return r.jsxs("tr",{children:[r.jsx("td",{children:r.jsx("strong",{children:t.equipment_name})}),r.jsx("td",{children:t.date}),r.jsxs("td",{children:[(i=t.runtime_hours)==null?void 0:i.toFixed(1)," h"]}),r.jsxs("td",{children:[(a=t.energy_kwh)==null?void 0:a.toFixed(1)," kWh"]}),r.jsxs("td",{className:"highlight",children:[(s=t.saved_kwh)==null?void 0:s.toFixed(1)," kWh"]}),r.jsxs("td",{className:"highlight",children:[t.energy_kwh>0?(t.saved_kwh/t.energy_kwh*100).toFixed(1):0,"%"]})]},l)}):r.jsx("tr",{children:r.jsx("td",{colSpan:"6",style:{textAlign:"center",padding:"20px"},children:"운전 이력 데이터가 없습니다."})})}),e&&e.length>0&&r.jsx("tfoot",{children:r.jsxs("tr",{className:"total-row",children:[r.jsx("td",{colSpan:"2",children:r.jsx("strong",{children:"합계"})}),r.jsx("td",{children:r.jsxs("strong",{children:[e.reduce((t,l)=>t+(l.runtime_hours||0),0).toFixed(1)," h"]})}),r.jsx("td",{children:r.jsxs("strong",{children:[e.reduce((t,l)=>t+(l.energy_kwh||0),0).toFixed(1)," kWh"]})}),r.jsx("td",{className:"highlight",children:r.jsxs("strong",{children:[e.reduce((t,l)=>t+(l.saved_kwh||0),0).toFixed(1)," kWh"]})}),r.jsx("td",{className:"highlight",children:r.jsxs("strong",{children:[(e.reduce((t,l)=>t+(l.saved_kwh||0),0)/e.reduce((t,l)=>t+(l.energy_kwh||0),0)*100).toFixed(1),"%"]})})]})})]})}),r.jsxs("div",{className:"operation-chart",children:[r.jsx("h4",{children:"📊 일별 절감 전력 추이"}),r.jsx("div",{className:"chart-placeholder",children:r.jsx("p",{children:"차트는 실제 데이터가 누적되면 표시됩니다"})})]})]})}const F5=()=>{var f,h,_,z,S,j,P,E,D,G,R;const[e,n]=F.useState(null),[t,l]=F.useState(!0),[i,a]=F.useState(null),[s,o]=F.useState("SWP1"),c=async()=>{try{const I=await(await fetch("http://localhost:8001/api/vfd/diagnostics")).json();I.success&&I.data.vfd_diagnostics?(n(I.data),a(null)):a("VFD 진단 데이터를 사용할 수 없습니다.")}catch(N){a(`데이터 로드 실패: ${N.message}`)}finally{l(!1)}},p=async N=>{try{(await(await fetch(`http://localhost:8001/api/vfd/acknowledge/${N}`,{method:"POST"})).json()).success&&c()}catch(I){console.error("확인 처리 실패:",I)}},v=async N=>{try{(await(await fetch(`http://localhost:8001/api/vfd/clear/${N}`,{method:"POST"})).json()).success&&c()}catch(I){console.error("해제 처리 실패:",I)}};F.useEffect(()=>{c();const N=setInterval(c,2e3);return()=>clearInterval(N)},[]);const y=N=>({SW_PUMP_1:"SWP1",SW_PUMP_2:"SWP2",SW_PUMP_3:"SWP3",FW_PUMP_1:"FWP1",FW_PUMP_2:"FWP2",FW_PUMP_3:"FWP3",ER_FAN_1:"FAN1",ER_FAN_2:"FAN2",ER_FAN_3:"FAN3",ER_FAN_4:"FAN4"})[N]||N,m=N=>100-(N||0),w=N=>N>=80?"#10b981":N>=50?"#9e9e9e":N>=25?"#ff9800":"#f44336",k=N=>N>=80?"정상":N>=50?"주의":N>=25?"경고":"위험",g=N=>{switch(N){case"rising":return"↑ 상승";case"stable":return"→ 안정";case"falling":return"↓ 하강";default:return"→ 안정"}};if(t)return r.jsx("div",{className:"vfd-diagnostics-container",children:"로딩 중..."});if(i)return r.jsx("div",{className:"vfd-diagnostics-container",children:r.jsx("div",{className:"error-message",children:i})});if(!e||!e.vfd_diagnostics)return r.jsx("div",{className:"vfd-diagnostics-container",children:"데이터가 없습니다."});const C=Object.entries(e.vfd_diagnostics).map(([N,I])=>({id:N,name:y(N),healthScore:m(I.severity_score),...I})),u=C.find(N=>N.name===s),d=C.filter(N=>N.healthScore<80&&!N.is_cleared);return r.jsxs("div",{className:"vfd-diagnostics-container",children:[r.jsxs("div",{className:"diagnostics-header",children:[r.jsx("h2",{children:"📊 VFD 예방진단"}),r.jsxs("div",{className:"update-time",children:["마지막 업데이트: ",new Date().toLocaleTimeString()]})]}),r.jsxs("section",{className:"vfd-status-cards",children:[r.jsx("h3",{children:"📊 VFD 건강도 현황"}),r.jsx("div",{className:"vfd-grid",children:C.map(N=>{const I=w(N.healthScore),L=k(N.healthScore);return r.jsxs("div",{className:"vfd-card",style:{borderLeft:`4px solid ${I}`},children:[r.jsx("h4",{children:N.name}),r.jsx("div",{className:"health-score",style:{color:I},children:N.healthScore}),r.jsx("div",{className:"health-label",children:"건강도 점수"}),r.jsx("div",{className:"status-badge",style:{color:I},children:L})]},N.id)})})]}),r.jsxs("section",{className:"anomaly-warnings",children:[r.jsx("h3",{children:"⚠️ 이상 징후 탐지"}),d.length>0?r.jsx("div",{className:"warning-list",children:d.map(N=>{const I=N.healthScore>=50?"warning":N.healthScore>=25?"error":"critical",L=N.healthScore>=50?"⚠️":N.healthScore>=25?"🟠":"🔴",W=N.is_acknowledged||!1;return r.jsx("div",{className:`warning-item ${I}`,style:W?{backgroundColor:"rgba(255, 193, 7, 0.15)",borderLeftColor:"#ffc107"}:{},children:r.jsxs("div",{style:{display:"flex",justifyContent:"space-between",alignItems:"center"},children:[r.jsxs("div",{children:[L," ",r.jsx("strong",{children:N.name}),": 건강도 ",N.healthScore," (",k(N.healthScore),") - ",N.recommendation,W&&r.jsx("span",{style:{marginLeft:"10px",color:"#ffc107"},children:"✓ 확인됨"})]}),r.jsxs("div",{style:{display:"flex",gap:"10px"},children:[!W&&r.jsx("button",{onClick:()=>p(N.id),style:{padding:"6px 12px",backgroundColor:"#3b82f6",color:"white",border:"none",borderRadius:"4px",cursor:"pointer"},children:"확인"}),W&&r.jsx("button",{onClick:()=>v(N.id),style:{padding:"6px 12px",backgroundColor:"#6b7280",color:"white",border:"none",borderRadius:"4px",cursor:"pointer"},children:"해제"})]})]})},N.id)})}):r.jsx("div",{className:"success-message",children:"✅ 모든 VFD가 정상 상태입니다."})]}),r.jsxs("section",{className:"maintenance-section",children:[r.jsx("h3",{children:"🔮 예측 유지보수"}),d.length>0?r.jsx("div",{className:"maintenance-table",children:r.jsxs("table",{children:[r.jsx("thead",{children:r.jsxs("tr",{children:[r.jsx("th",{children:"장비명"}),r.jsx("th",{children:"건강도"}),r.jsx("th",{children:"예상 정비 시기"}),r.jsx("th",{children:"권장 조치"}),r.jsx("th",{children:"우선순위"})]})}),r.jsx("tbody",{children:d.map(N=>{const I=N.maintenance_priority===5?"즉시 점검":N.maintenance_priority===3?"1주일 내 점검":N.maintenance_priority===1?"정기 점검":"정상";return r.jsxs("tr",{children:[r.jsx("td",{children:N.name}),r.jsx("td",{style:{color:w(N.healthScore)},children:N.healthScore}),r.jsx("td",{children:N.estimated_days_to_maintenance?`${N.estimated_days_to_maintenance}일 후`:"-"}),r.jsx("td",{children:N.recommendation}),r.jsx("td",{children:I})]},N.id)})})]})}):r.jsx("div",{className:"info-message",children:"✅ 예정된 유지보수 항목이 없습니다."})]}),r.jsxs("section",{className:"detailed-diagnostics",children:[r.jsx("h3",{children:"📋 상세 진단 정보"}),r.jsx("div",{className:"vfd-selector",children:C.map(N=>r.jsx("button",{className:`vfd-select-btn ${s===N.name?"active":""}`,onClick:()=>o(N.name),children:N.name},N.id))}),u&&r.jsxs("div",{className:"vfd-details",children:[r.jsxs("div",{className:"detail-section",children:[r.jsx("h4",{children:"🔧 실시간 운전 데이터"}),r.jsxs("div",{className:"metrics-grid",children:[r.jsxs("div",{className:"metric-item",children:[r.jsx("div",{className:"metric-label",children:"주파수"}),r.jsxs("div",{className:"metric-value",children:[(f=u.current_frequency_hz)==null?void 0:f.toFixed(1)," Hz"]})]}),r.jsxs("div",{className:"metric-item",children:[r.jsx("div",{className:"metric-label",children:"출력 전류"}),r.jsxs("div",{className:"metric-value",children:[(h=u.output_current_a)==null?void 0:h.toFixed(1)," A"]})]}),r.jsxs("div",{className:"metric-item",children:[r.jsx("div",{className:"metric-label",children:"출력 전압"}),r.jsxs("div",{className:"metric-value",children:[(_=u.output_voltage_v)==null?void 0:_.toFixed(0)," V"]})]}),r.jsxs("div",{className:"metric-item",children:[r.jsx("div",{className:"metric-label",children:"운전 시간"}),r.jsxs("div",{className:"metric-value",children:[(z=u.cumulative_runtime_hours)==null?void 0:z.toFixed(1)," h"]})]}),r.jsxs("div",{className:"metric-item",children:[r.jsx("div",{className:"metric-label",children:"모터 온도"}),r.jsxs("div",{className:"metric-value",children:[(S=u.motor_temperature_c)==null?void 0:S.toFixed(1)," °C"]})]}),r.jsxs("div",{className:"metric-item",children:[r.jsx("div",{className:"metric-label",children:"히트싱크 온도"}),r.jsxs("div",{className:"metric-value",children:[(j=u.heatsink_temperature_c)==null?void 0:j.toFixed(1)," °C"]})]}),r.jsxs("div",{className:"metric-item",children:[r.jsx("div",{className:"metric-label",children:"DC 버스 전압"}),r.jsxs("div",{className:"metric-value",children:[(P=u.dc_bus_voltage_v)==null?void 0:P.toFixed(0)," V"]})]}),r.jsxs("div",{className:"metric-item",children:[r.jsx("div",{className:"metric-label",children:"트립 횟수"}),r.jsxs("div",{className:"metric-value",children:[u.trip_count," 회"]})]})]})]}),r.jsxs("div",{className:"detail-section",children:[r.jsx("h4",{children:"🔮 예측 분석"}),r.jsxs("div",{className:"metrics-grid",children:[r.jsxs("div",{className:"metric-item",children:[r.jsx("div",{className:"metric-label",children:"30분 후 예측 온도"}),r.jsxs("div",{className:"metric-value",children:[(E=u.predicted_temp_30min)==null?void 0:E.toFixed(1)," °C"]})]}),r.jsxs("div",{className:"metric-item",children:[r.jsx("div",{className:"metric-label",children:"온도 상승률"}),r.jsxs("div",{className:"metric-value",children:[(D=u.temp_rise_rate)==null?void 0:D.toFixed(3)," °C/min"]})]}),r.jsxs("div",{className:"metric-item",children:[r.jsx("div",{className:"metric-label",children:"온도 트렌드"}),r.jsx("div",{className:"metric-value",children:g(u.temp_trend)})]}),r.jsxs("div",{className:"metric-item",children:[r.jsx("div",{className:"metric-label",children:"이상 점수"}),r.jsx("div",{className:"metric-value",children:(G=u.anomaly_score)==null?void 0:G.toFixed(1)})]}),r.jsxs("div",{className:"metric-item",children:[r.jsx("div",{className:"metric-label",children:"수명 잔여율"}),r.jsxs("div",{className:"metric-value",children:[(R=u.remaining_life_percent)==null?void 0:R.toFixed(1)," %"]})]}),r.jsxs("div",{className:"metric-item",children:[r.jsx("div",{className:"metric-label",children:"정비 예상"}),r.jsx("div",{className:"metric-value",children:u.estimated_days_to_maintenance?`${u.estimated_days_to_maintenance}일 후`:"-"})]}),r.jsxs("div",{className:"metric-item",children:[r.jsx("div",{className:"metric-label",children:"상태 등급"}),r.jsx("div",{className:"metric-value",style:{color:w(u.healthScore)},children:u.status_grade})]}),r.jsxs("div",{className:"metric-item",children:[r.jsx("div",{className:"metric-label",children:"심각도 점수"}),r.jsxs("div",{className:"metric-value",children:[u.severity_score,"/100"]})]})]})]}),r.jsxs("div",{className:"detail-section",children:[r.jsx("h4",{children:"⚠️ 이상 패턴"}),u.anomaly_patterns&&u.anomaly_patterns.length>0?r.jsx("div",{className:"anomaly-patterns",children:u.anomaly_patterns.map((N,I)=>r.jsxs("div",{className:"anomaly-pattern-item",children:["🔴 ",N]},I))}):r.jsx("div",{className:"success-message",children:"✅ 이상 패턴 없음 - 정상 운전 중"})]}),r.jsxs("div",{className:"detail-section",children:[r.jsx("h4",{children:"💡 권고사항"}),r.jsx("div",{className:"recommendation-box",children:u.recommendation})]})]})]})]})};function A5(){const[e,n]=F.useState({}),[t,l]=F.useState([]),[i,a]=F.useState([]),[s,o]=F.useState([]),[c,p]=F.useState([]),[v,y]=F.useState({}),[m,w]=F.useState(!1),[k,g]=F.useState(null),[C,u]=F.useState("dashboard"),[d,f]=F.useState(null),[h,_]=F.useState(!1);F.useRef(new Set);const z=F.useRef(new Set);F.useRef(!0);const S=F.useRef(null),j=F.useRef([]);F.useEffect(()=>{const L=new(window.AudioContext||window.webkitAudioContext);console.log("🎵 [App] AudioContext 생성됨, 초기 상태:",L.state),(async()=>{try{await L.resume(),console.log("🔊 [App] AudioContext 즉시 활성화 시도:",L.state)}catch{console.log("⚠️ [App] AudioContext 즉시 활성화 실패, 사용자 인터랙션 필요")}})(),f(L);const x=async()=>{console.log("👆 [App] 사용자 인터랙션 감지, AudioContext 상태:",L.state),L.state==="suspended"&&(await L.resume(),console.log("🔊 [App] AudioContext 활성화됨"),c.some(b=>!b.acknowledged)&&!S.current&&(console.log("🔔 [App] AudioContext 활성화 후 경고음 시작"),E()))};return document.addEventListener("click",x,{once:!0}),document.addEventListener("keydown",x,{once:!0}),()=>{document.removeEventListener("click",x),document.removeEventListener("keydown",x),L&&L.close()}},[]),F.useEffect(()=>(R(),()=>{k&&k.close()}),[]);const P=async()=>{if(!(!d||h))try{d.state==="suspended"&&await d.resume();const W=j.current.filter(O=>!O.acknowledged),x=W.some(O=>O.level==="critical"),b=W.some(O=>O.level==="warning");let A=1;x?A=3:b&&(A=2),console.log(`🔊 [App] 경고음 재생: ${A}번 (Critical: ${x}, Warning: ${b}, 총 미확인: ${W.length})`);for(let O=0;O<A;O++)setTimeout(()=>{const $=d.createOscillator(),ve=d.createGain();$.connect(ve),ve.connect(d.destination),$.frequency.value=880,$.type="sine",ve.gain.setValueAtTime(.3,d.currentTime),ve.gain.exponentialRampToValueAtTime(.01,d.currentTime+.15),$.start(d.currentTime),$.stop(d.currentTime+.15)},O*200)}catch(L){console.error("❌ [App] 경고음 재생 오류:",L)}},E=()=>{console.log("🔊 [App] 연속 경고음 시작"),S.current&&clearInterval(S.current),P(),S.current=setInterval(()=>{P()},2e3)},D=()=>{console.log("🔇 [App] 연속 경고음 정지"),S.current&&(clearInterval(S.current),S.current=null)},G=()=>{_(!h),h?c.some(W=>!W.acknowledged)&&E():D()};F.useEffect(()=>{j.current=c},[c]),F.useEffect(()=>{const L=c.some(b=>!b.acknowledged),W=new Set(c.filter(b=>!b.acknowledged&&b.level==="critical").map(b=>b.id)),x=Array.from(W).filter(b=>!z.current.has(b));return console.log("🔍 [App] 알람 상태 체크:",{총알람:c.length,미확인알람:L,현재위험알람:W.size,새위험알람:x.length,muted:h,audioContext:!!d,intervalActive:!!S.current}),console.log("📋 [App] 알람 목록:",c.map(b=>({id:b.id,tag:b.tag,level:b.level,message:b.message,acknowledged:b.acknowledged}))),x.length>0&&h&&(console.log("🔴 [App] 새로운 위험 알람 발생 - 음소거 자동 해제",x),_(!1)),z.current=W,L&&d&&!h?S.current||(console.log("🔊 [App] 미확인 알람 감지 - 연속 경고음 시작"),E()):S.current&&(console.log("✅ [App] 모든 알람 확인됨 - 경고음 정지"),D()),()=>{S.current&&D()}},[c,d,h]);const R=()=>{const W=`${window.location.protocol==="https:"?"wss:":"ws:"}//${window.location.hostname}:8001/ws`;console.log("WebSocket 연결 시도:",W);const x=new WebSocket(W);x.onopen=()=>{console.log("✅ WebSocket 연결 성공"),w(!0)},x.onmessage=b=>{var A,O;try{const $=JSON.parse(b.data);$.type==="realtime_update"&&(n($.sensors),o($.equipment||[]),l($.pumps||((A=$.equipment)==null?void 0:A.slice(0,6))||[]),a(((O=$.equipment)==null?void 0:O.slice(6,10))||[]),p($.alarms||[]),y($.alarm_summary||{}))}catch($){console.error("WebSocket 메시지 파싱 오류:",$)}},x.onerror=b=>{console.error("❌ WebSocket 오류:",b),w(!1)},x.onclose=()=>{console.log("WebSocket 연결 종료, 5초 후 재연결..."),w(!1),setTimeout(R,5e3)},g(x)},N=async(L,W)=>{try{console.log(`🔧 장비 명령 전송 시도: equipment=${L}, command=${W}`);const x=await fetch("http://localhost:8001/api/equipment/command",{method:"POST",headers:{"Content-Type":"application/json"},body:JSON.stringify({equipment_name:L,command:W})});if(console.log(`📡 응답 상태: ${x.status}`),!x.ok){const A=await x.text();return console.error("❌ HTTP 오류:",x.status,A),alert(`명령 전송 실패: ${x.status}`),!1}const b=await x.json();return console.log("📦 응답 데이터:",b),b.success?(console.log(`✅ ${L} ${W} 명령 성공`),!0):(console.error("❌ 장비 명령 실패:",b),alert("명령 전송 실패"),!1)}catch(x){return console.error("❌ 장비 명령 오류:",x),alert(`오류 발생: ${x.message}`),!1}},I=async(L,W)=>{const x=["SWP1","SWP2","SWP3","FWP1","FWP2","FWP3"];return L>=0&&L<6?await N(x[L],W):!1};return r.jsxs("div",{className:"app",children:[r.jsxs("header",{className:"app-header",children:[r.jsx("h1",{children:"🚢 ESS HMI - Energy Saving System"}),r.jsxs("div",{className:"status-indicator",children:[r.jsx("span",{className:`status-dot ${m?"connected":"disconnected"}`}),r.jsx("span",{children:m?"PLC 연결됨":"PLC 연결 안됨"})]})]}),r.jsxs("nav",{className:"tab-nav",children:[r.jsx("button",{className:C==="dashboard"?"active":"",onClick:()=>u("dashboard"),children:"📊 대시보드"}),r.jsx("button",{className:C==="diagram"?"active":"",onClick:()=>u("diagram"),children:"🔧 배관 계통도"}),r.jsx("button",{className:C==="fan_diagram"?"active":"",onClick:()=>u("fan_diagram"),children:"🌀 E/R 환기"}),r.jsx("button",{className:C==="control"?"active":"",onClick:()=>u("control"),children:"⚙️ 운전 제어"}),r.jsx("button",{className:C==="advanced"?"active":"",onClick:()=>u("advanced"),children:"🎛️ 고급 제어"}),r.jsx("button",{className:C==="settings"?"active":"",onClick:()=>u("settings"),children:"⚙️ 설정"}),r.jsx("button",{className:C==="trend"?"active":"",onClick:()=>u("trend"),children:"📈 트렌드"}),r.jsx("button",{className:C==="history"?"active":"",onClick:()=>u("history"),children:"📋 이력"}),r.jsx("button",{className:`${C==="alarm"?"active":""} ${c.some(L=>!L.acknowledged)?"has-unack-alarms":""}`,onClick:()=>u("alarm"),children:"🔔 알람"}),r.jsx("button",{className:C==="vfd_diagnostics"?"active":"",onClick:()=>u("vfd_diagnostics"),children:"🔍 VFD 진단"})]}),r.jsxs("main",{className:"app-content",children:[C==="dashboard"&&r.jsx(l5,{sensors:e,equipment:s,pumps:t,fans:i}),C==="diagram"&&r.jsx(u5,{sensors:e,equipment:s,pumps:t,fans:i,onCommand:N,onPumpCommand:I}),C==="fan_diagram"&&r.jsx(p5,{sensors:e,fans:i,equipment:s,onCommand:N}),C==="control"&&r.jsx(m5,{pumps:t,fans:i,onCommand:N,onPumpCommand:I}),C==="advanced"&&r.jsx(j5,{equipment:s,pumps:t,fans:i,onCommand:N}),C==="settings"&&r.jsx(g5,{}),C==="trend"&&r.jsx(h5,{sensors:e,equipment:s,pumps:t,fans:i}),C==="history"&&r.jsx(C5,{}),C==="alarm"&&r.jsx(y5,{alarms:c,alarmSummary:v,alarmSoundMuted:h,onToggleMute:G}),C==="vfd_diagnostics"&&r.jsx(F5,{})]}),r.jsxs("footer",{className:"app-footer",children:[r.jsx("span",{children:"© 2025 ESS HMI System"}),r.jsxs("span",{children:["마지막 업데이트: ",new Date().toLocaleTimeString("ko-KR")]})]})]})}tr.createRoot(document.getElementById("root")).render(r.jsx(Vd.StrictMode,{children:r.jsx(A5,{})}));
