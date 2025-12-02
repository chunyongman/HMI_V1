(function(){const t=document.createElement("link").relList;if(t&&t.supports&&t.supports("modulepreload"))return;for(const i of document.querySelectorAll('link[rel="modulepreload"]'))r(i);new MutationObserver(i=>{for(const a of i)if(a.type==="childList")for(const l of a.addedNodes)l.tagName==="LINK"&&l.rel==="modulepreload"&&r(l)}).observe(document,{childList:!0,subtree:!0});function n(i){const a={};return i.integrity&&(a.integrity=i.integrity),i.referrerPolicy&&(a.referrerPolicy=i.referrerPolicy),i.crossOrigin==="use-credentials"?a.credentials="include":i.crossOrigin==="anonymous"?a.credentials="omit":a.credentials="same-origin",a}function r(i){if(i.ep)return;i.ep=!0;const a=n(i);fetch(i.href,a)}})();var ko=typeof globalThis<"u"?globalThis:typeof window<"u"?window:typeof global<"u"?global:typeof self<"u"?self:{};function me(e){return e&&e.__esModule&&Object.prototype.hasOwnProperty.call(e,"default")?e.default:e}var cy={exports:{}},Tc={},uy={exports:{}},ne={};/**
 * @license React
 * react.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */var so=Symbol.for("react.element"),X3=Symbol.for("react.portal"),q3=Symbol.for("react.fragment"),K3=Symbol.for("react.strict_mode"),Y3=Symbol.for("react.profiler"),Z3=Symbol.for("react.provider"),Q3=Symbol.for("react.context"),J3=Symbol.for("react.forward_ref"),e4=Symbol.for("react.suspense"),t4=Symbol.for("react.memo"),n4=Symbol.for("react.lazy"),sh=Symbol.iterator;function r4(e){return e===null||typeof e!="object"?null:(e=sh&&e[sh]||e["@@iterator"],typeof e=="function"?e:null)}var dy={isMounted:function(){return!1},enqueueForceUpdate:function(){},enqueueReplaceState:function(){},enqueueSetState:function(){}},fy=Object.assign,py={};function ua(e,t,n){this.props=e,this.context=t,this.refs=py,this.updater=n||dy}ua.prototype.isReactComponent={};ua.prototype.setState=function(e,t){if(typeof e!="object"&&typeof e!="function"&&e!=null)throw Error("setState(...): takes an object of state variables to update or a function which returns an object of state variables.");this.updater.enqueueSetState(this,e,t,"setState")};ua.prototype.forceUpdate=function(e){this.updater.enqueueForceUpdate(this,e,"forceUpdate")};function hy(){}hy.prototype=ua.prototype;function a0(e,t,n){this.props=e,this.context=t,this.refs=py,this.updater=n||dy}var l0=a0.prototype=new hy;l0.constructor=a0;fy(l0,ua.prototype);l0.isPureReactComponent=!0;var ch=Array.isArray,my=Object.prototype.hasOwnProperty,o0={current:null},yy={key:!0,ref:!0,__self:!0,__source:!0};function vy(e,t,n){var r,i={},a=null,l=null;if(t!=null)for(r in t.ref!==void 0&&(l=t.ref),t.key!==void 0&&(a=""+t.key),t)my.call(t,r)&&!yy.hasOwnProperty(r)&&(i[r]=t[r]);var o=arguments.length-2;if(o===1)i.children=n;else if(1<o){for(var s=Array(o),c=0;c<o;c++)s[c]=arguments[c+2];i.children=s}if(e&&e.defaultProps)for(r in o=e.defaultProps,o)i[r]===void 0&&(i[r]=o[r]);return{$$typeof:so,type:e,key:a,ref:l,props:i,_owner:o0.current}}function i4(e,t){return{$$typeof:so,type:e.type,key:t,ref:e.ref,props:e.props,_owner:e._owner}}function s0(e){return typeof e=="object"&&e!==null&&e.$$typeof===so}function a4(e){var t={"=":"=0",":":"=2"};return"$"+e.replace(/[=:]/g,function(n){return t[n]})}var uh=/\/+/g;function Lu(e,t){return typeof e=="object"&&e!==null&&e.key!=null?a4(""+e.key):t.toString(36)}function es(e,t,n,r,i){var a=typeof e;(a==="undefined"||a==="boolean")&&(e=null);var l=!1;if(e===null)l=!0;else switch(a){case"string":case"number":l=!0;break;case"object":switch(e.$$typeof){case so:case X3:l=!0}}if(l)return l=e,i=i(l),e=r===""?"."+Lu(l,0):r,ch(i)?(n="",e!=null&&(n=e.replace(uh,"$&/")+"/"),es(i,t,n,"",function(c){return c})):i!=null&&(s0(i)&&(i=i4(i,n+(!i.key||l&&l.key===i.key?"":(""+i.key).replace(uh,"$&/")+"/")+e)),t.push(i)),1;if(l=0,r=r===""?".":r+":",ch(e))for(var o=0;o<e.length;o++){a=e[o];var s=r+Lu(a,o);l+=es(a,t,n,s,i)}else if(s=r4(e),typeof s=="function")for(e=s.call(e),o=0;!(a=e.next()).done;)a=a.value,s=r+Lu(a,o++),l+=es(a,t,n,s,i);else if(a==="object")throw t=String(e),Error("Objects are not valid as a React child (found: "+(t==="[object Object]"?"object with keys {"+Object.keys(e).join(", ")+"}":t)+"). If you meant to render a collection of children, use an array instead.");return l}function _o(e,t,n){if(e==null)return e;var r=[],i=0;return es(e,r,"","",function(a){return t.call(n,a,i++)}),r}function l4(e){if(e._status===-1){var t=e._result;t=t(),t.then(function(n){(e._status===0||e._status===-1)&&(e._status=1,e._result=n)},function(n){(e._status===0||e._status===-1)&&(e._status=2,e._result=n)}),e._status===-1&&(e._status=0,e._result=t)}if(e._status===1)return e._result.default;throw e._result}var ft={current:null},ts={transition:null},o4={ReactCurrentDispatcher:ft,ReactCurrentBatchConfig:ts,ReactCurrentOwner:o0};function gy(){throw Error("act(...) is not supported in production builds of React.")}ne.Children={map:_o,forEach:function(e,t,n){_o(e,function(){t.apply(this,arguments)},n)},count:function(e){var t=0;return _o(e,function(){t++}),t},toArray:function(e){return _o(e,function(t){return t})||[]},only:function(e){if(!s0(e))throw Error("React.Children.only expected to receive a single React element child.");return e}};ne.Component=ua;ne.Fragment=q3;ne.Profiler=Y3;ne.PureComponent=a0;ne.StrictMode=K3;ne.Suspense=e4;ne.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED=o4;ne.act=gy;ne.cloneElement=function(e,t,n){if(e==null)throw Error("React.cloneElement(...): The argument must be a React element, but you passed "+e+".");var r=fy({},e.props),i=e.key,a=e.ref,l=e._owner;if(t!=null){if(t.ref!==void 0&&(a=t.ref,l=o0.current),t.key!==void 0&&(i=""+t.key),e.type&&e.type.defaultProps)var o=e.type.defaultProps;for(s in t)my.call(t,s)&&!yy.hasOwnProperty(s)&&(r[s]=t[s]===void 0&&o!==void 0?o[s]:t[s])}var s=arguments.length-2;if(s===1)r.children=n;else if(1<s){o=Array(s);for(var c=0;c<s;c++)o[c]=arguments[c+2];r.children=o}return{$$typeof:so,type:e.type,key:i,ref:a,props:r,_owner:l}};ne.createContext=function(e){return e={$$typeof:Q3,_currentValue:e,_currentValue2:e,_threadCount:0,Provider:null,Consumer:null,_defaultValue:null,_globalName:null},e.Provider={$$typeof:Z3,_context:e},e.Consumer=e};ne.createElement=vy;ne.createFactory=function(e){var t=vy.bind(null,e);return t.type=e,t};ne.createRef=function(){return{current:null}};ne.forwardRef=function(e){return{$$typeof:J3,render:e}};ne.isValidElement=s0;ne.lazy=function(e){return{$$typeof:n4,_payload:{_status:-1,_result:e},_init:l4}};ne.memo=function(e,t){return{$$typeof:t4,type:e,compare:t===void 0?null:t}};ne.startTransition=function(e){var t=ts.transition;ts.transition={};try{e()}finally{ts.transition=t}};ne.unstable_act=gy;ne.useCallback=function(e,t){return ft.current.useCallback(e,t)};ne.useContext=function(e){return ft.current.useContext(e)};ne.useDebugValue=function(){};ne.useDeferredValue=function(e){return ft.current.useDeferredValue(e)};ne.useEffect=function(e,t){return ft.current.useEffect(e,t)};ne.useId=function(){return ft.current.useId()};ne.useImperativeHandle=function(e,t,n){return ft.current.useImperativeHandle(e,t,n)};ne.useInsertionEffect=function(e,t){return ft.current.useInsertionEffect(e,t)};ne.useLayoutEffect=function(e,t){return ft.current.useLayoutEffect(e,t)};ne.useMemo=function(e,t){return ft.current.useMemo(e,t)};ne.useReducer=function(e,t,n){return ft.current.useReducer(e,t,n)};ne.useRef=function(e){return ft.current.useRef(e)};ne.useState=function(e){return ft.current.useState(e)};ne.useSyncExternalStore=function(e,t,n){return ft.current.useSyncExternalStore(e,t,n)};ne.useTransition=function(){return ft.current.useTransition()};ne.version="18.3.1";uy.exports=ne;var $=uy.exports;const T=me($);/**
 * @license React
 * react-jsx-runtime.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */var s4=$,c4=Symbol.for("react.element"),u4=Symbol.for("react.fragment"),d4=Object.prototype.hasOwnProperty,f4=s4.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED.ReactCurrentOwner,p4={key:!0,ref:!0,__self:!0,__source:!0};function xy(e,t,n){var r,i={},a=null,l=null;n!==void 0&&(a=""+n),t.key!==void 0&&(a=""+t.key),t.ref!==void 0&&(l=t.ref);for(r in t)d4.call(t,r)&&!p4.hasOwnProperty(r)&&(i[r]=t[r]);if(e&&e.defaultProps)for(r in t=e.defaultProps,t)i[r]===void 0&&(i[r]=t[r]);return{$$typeof:c4,type:e,key:a,ref:l,props:i,_owner:f4.current}}Tc.Fragment=u4;Tc.jsx=xy;Tc.jsxs=xy;cy.exports=Tc;var u=cy.exports,Bd={},by={exports:{}},Mt={},wy={exports:{}},ky={};/**
 * @license React
 * scheduler.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */(function(e){function t(A,I){var D=A.length;A.push(I);e:for(;0<D;){var B=D-1>>>1,W=A[B];if(0<i(W,I))A[B]=I,A[D]=W,D=B;else break e}}function n(A){return A.length===0?null:A[0]}function r(A){if(A.length===0)return null;var I=A[0],D=A.pop();if(D!==I){A[0]=D;e:for(var B=0,W=A.length,X=W>>>1;B<X;){var Y=2*(B+1)-1,le=A[Y],je=Y+1,ht=A[je];if(0>i(le,D))je<W&&0>i(ht,le)?(A[B]=ht,A[je]=D,B=je):(A[B]=le,A[Y]=D,B=Y);else if(je<W&&0>i(ht,D))A[B]=ht,A[je]=D,B=je;else break e}}return I}function i(A,I){var D=A.sortIndex-I.sortIndex;return D!==0?D:A.id-I.id}if(typeof performance=="object"&&typeof performance.now=="function"){var a=performance;e.unstable_now=function(){return a.now()}}else{var l=Date,o=l.now();e.unstable_now=function(){return l.now()-o}}var s=[],c=[],f=1,d=null,p=3,h=!1,x=!1,v=!1,w=typeof setTimeout=="function"?setTimeout:null,y=typeof clearTimeout=="function"?clearTimeout:null,m=typeof setImmediate<"u"?setImmediate:null;typeof navigator<"u"&&navigator.scheduling!==void 0&&navigator.scheduling.isInputPending!==void 0&&navigator.scheduling.isInputPending.bind(navigator.scheduling);function g(A){for(var I=n(c);I!==null;){if(I.callback===null)r(c);else if(I.startTime<=A)r(c),I.sortIndex=I.expirationTime,t(s,I);else break;I=n(c)}}function _(A){if(v=!1,g(A),!x)if(n(s)!==null)x=!0,L(b);else{var I=n(c);I!==null&&F(_,I.startTime-A)}}function b(A,I){x=!1,v&&(v=!1,y(j),j=-1),h=!0;var D=p;try{for(g(I),d=n(s);d!==null&&(!(d.expirationTime>I)||A&&!M());){var B=d.callback;if(typeof B=="function"){d.callback=null,p=d.priorityLevel;var W=B(d.expirationTime<=I);I=e.unstable_now(),typeof W=="function"?d.callback=W:d===n(s)&&r(s),g(I)}else r(s);d=n(s)}if(d!==null)var X=!0;else{var Y=n(c);Y!==null&&F(_,Y.startTime-I),X=!1}return X}finally{d=null,p=D,h=!1}}var k=!1,S=null,j=-1,O=5,C=-1;function M(){return!(e.unstable_now()-C<O)}function P(){if(S!==null){var A=e.unstable_now();C=A;var I=!0;try{I=S(!0,A)}finally{I?N():(k=!1,S=null)}}else k=!1}var N;if(typeof m=="function")N=function(){m(P)};else if(typeof MessageChannel<"u"){var z=new MessageChannel,E=z.port2;z.port1.onmessage=P,N=function(){E.postMessage(null)}}else N=function(){w(P,0)};function L(A){S=A,k||(k=!0,N())}function F(A,I){j=w(function(){A(e.unstable_now())},I)}e.unstable_IdlePriority=5,e.unstable_ImmediatePriority=1,e.unstable_LowPriority=4,e.unstable_NormalPriority=3,e.unstable_Profiling=null,e.unstable_UserBlockingPriority=2,e.unstable_cancelCallback=function(A){A.callback=null},e.unstable_continueExecution=function(){x||h||(x=!0,L(b))},e.unstable_forceFrameRate=function(A){0>A||125<A?console.error("forceFrameRate takes a positive int between 0 and 125, forcing frame rates higher than 125 fps is not supported"):O=0<A?Math.floor(1e3/A):5},e.unstable_getCurrentPriorityLevel=function(){return p},e.unstable_getFirstCallbackNode=function(){return n(s)},e.unstable_next=function(A){switch(p){case 1:case 2:case 3:var I=3;break;default:I=p}var D=p;p=I;try{return A()}finally{p=D}},e.unstable_pauseExecution=function(){},e.unstable_requestPaint=function(){},e.unstable_runWithPriority=function(A,I){switch(A){case 1:case 2:case 3:case 4:case 5:break;default:A=3}var D=p;p=A;try{return I()}finally{p=D}},e.unstable_scheduleCallback=function(A,I,D){var B=e.unstable_now();switch(typeof D=="object"&&D!==null?(D=D.delay,D=typeof D=="number"&&0<D?B+D:B):D=B,A){case 1:var W=-1;break;case 2:W=250;break;case 5:W=1073741823;break;case 4:W=1e4;break;default:W=5e3}return W=D+W,A={id:f++,callback:I,priorityLevel:A,startTime:D,expirationTime:W,sortIndex:-1},D>B?(A.sortIndex=D,t(c,A),n(s)===null&&A===n(c)&&(v?(y(j),j=-1):v=!0,F(_,D-B))):(A.sortIndex=W,t(s,A),x||h||(x=!0,L(b))),A},e.unstable_shouldYield=M,e.unstable_wrapCallback=function(A){var I=p;return function(){var D=p;p=I;try{return A.apply(this,arguments)}finally{p=D}}}})(ky);wy.exports=ky;var h4=wy.exports;/**
 * @license React
 * react-dom.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */var m4=$,At=h4;function H(e){for(var t="https://reactjs.org/docs/error-decoder.html?invariant="+e,n=1;n<arguments.length;n++)t+="&args[]="+encodeURIComponent(arguments[n]);return"Minified React error #"+e+"; visit "+t+" for the full message or use the non-minified dev environment for full errors and additional helpful warnings."}var _y=new Set,sl={};function ti(e,t){Ii(e,t),Ii(e+"Capture",t)}function Ii(e,t){for(sl[e]=t,e=0;e<t.length;e++)_y.add(t[e])}var Tn=!(typeof window>"u"||typeof window.document>"u"||typeof window.document.createElement>"u"),Wd=Object.prototype.hasOwnProperty,y4=/^[:A-Z_a-z\u00C0-\u00D6\u00D8-\u00F6\u00F8-\u02FF\u0370-\u037D\u037F-\u1FFF\u200C-\u200D\u2070-\u218F\u2C00-\u2FEF\u3001-\uD7FF\uF900-\uFDCF\uFDF0-\uFFFD][:A-Z_a-z\u00C0-\u00D6\u00D8-\u00F6\u00F8-\u02FF\u0370-\u037D\u037F-\u1FFF\u200C-\u200D\u2070-\u218F\u2C00-\u2FEF\u3001-\uD7FF\uF900-\uFDCF\uFDF0-\uFFFD\-.0-9\u00B7\u0300-\u036F\u203F-\u2040]*$/,dh={},fh={};function v4(e){return Wd.call(fh,e)?!0:Wd.call(dh,e)?!1:y4.test(e)?fh[e]=!0:(dh[e]=!0,!1)}function g4(e,t,n,r){if(n!==null&&n.type===0)return!1;switch(typeof t){case"function":case"symbol":return!0;case"boolean":return r?!1:n!==null?!n.acceptsBooleans:(e=e.toLowerCase().slice(0,5),e!=="data-"&&e!=="aria-");default:return!1}}function x4(e,t,n,r){if(t===null||typeof t>"u"||g4(e,t,n,r))return!0;if(r)return!1;if(n!==null)switch(n.type){case 3:return!t;case 4:return t===!1;case 5:return isNaN(t);case 6:return isNaN(t)||1>t}return!1}function pt(e,t,n,r,i,a,l){this.acceptsBooleans=t===2||t===3||t===4,this.attributeName=r,this.attributeNamespace=i,this.mustUseProperty=n,this.propertyName=e,this.type=t,this.sanitizeURL=a,this.removeEmptyString=l}var Je={};"children dangerouslySetInnerHTML defaultValue defaultChecked innerHTML suppressContentEditableWarning suppressHydrationWarning style".split(" ").forEach(function(e){Je[e]=new pt(e,0,!1,e,null,!1,!1)});[["acceptCharset","accept-charset"],["className","class"],["htmlFor","for"],["httpEquiv","http-equiv"]].forEach(function(e){var t=e[0];Je[t]=new pt(t,1,!1,e[1],null,!1,!1)});["contentEditable","draggable","spellCheck","value"].forEach(function(e){Je[e]=new pt(e,2,!1,e.toLowerCase(),null,!1,!1)});["autoReverse","externalResourcesRequired","focusable","preserveAlpha"].forEach(function(e){Je[e]=new pt(e,2,!1,e,null,!1,!1)});"allowFullScreen async autoFocus autoPlay controls default defer disabled disablePictureInPicture disableRemotePlayback formNoValidate hidden loop noModule noValidate open playsInline readOnly required reversed scoped seamless itemScope".split(" ").forEach(function(e){Je[e]=new pt(e,3,!1,e.toLowerCase(),null,!1,!1)});["checked","multiple","muted","selected"].forEach(function(e){Je[e]=new pt(e,3,!0,e,null,!1,!1)});["capture","download"].forEach(function(e){Je[e]=new pt(e,4,!1,e,null,!1,!1)});["cols","rows","size","span"].forEach(function(e){Je[e]=new pt(e,6,!1,e,null,!1,!1)});["rowSpan","start"].forEach(function(e){Je[e]=new pt(e,5,!1,e.toLowerCase(),null,!1,!1)});var c0=/[\-:]([a-z])/g;function u0(e){return e[1].toUpperCase()}"accent-height alignment-baseline arabic-form baseline-shift cap-height clip-path clip-rule color-interpolation color-interpolation-filters color-profile color-rendering dominant-baseline enable-background fill-opacity fill-rule flood-color flood-opacity font-family font-size font-size-adjust font-stretch font-style font-variant font-weight glyph-name glyph-orientation-horizontal glyph-orientation-vertical horiz-adv-x horiz-origin-x image-rendering letter-spacing lighting-color marker-end marker-mid marker-start overline-position overline-thickness paint-order panose-1 pointer-events rendering-intent shape-rendering stop-color stop-opacity strikethrough-position strikethrough-thickness stroke-dasharray stroke-dashoffset stroke-linecap stroke-linejoin stroke-miterlimit stroke-opacity stroke-width text-anchor text-decoration text-rendering underline-position underline-thickness unicode-bidi unicode-range units-per-em v-alphabetic v-hanging v-ideographic v-mathematical vector-effect vert-adv-y vert-origin-x vert-origin-y word-spacing writing-mode xmlns:xlink x-height".split(" ").forEach(function(e){var t=e.replace(c0,u0);Je[t]=new pt(t,1,!1,e,null,!1,!1)});"xlink:actuate xlink:arcrole xlink:role xlink:show xlink:title xlink:type".split(" ").forEach(function(e){var t=e.replace(c0,u0);Je[t]=new pt(t,1,!1,e,"http://www.w3.org/1999/xlink",!1,!1)});["xml:base","xml:lang","xml:space"].forEach(function(e){var t=e.replace(c0,u0);Je[t]=new pt(t,1,!1,e,"http://www.w3.org/XML/1998/namespace",!1,!1)});["tabIndex","crossOrigin"].forEach(function(e){Je[e]=new pt(e,1,!1,e.toLowerCase(),null,!1,!1)});Je.xlinkHref=new pt("xlinkHref",1,!1,"xlink:href","http://www.w3.org/1999/xlink",!0,!1);["src","href","action","formAction"].forEach(function(e){Je[e]=new pt(e,1,!1,e.toLowerCase(),null,!0,!0)});function d0(e,t,n,r){var i=Je.hasOwnProperty(t)?Je[t]:null;(i!==null?i.type!==0:r||!(2<t.length)||t[0]!=="o"&&t[0]!=="O"||t[1]!=="n"&&t[1]!=="N")&&(x4(t,n,i,r)&&(n=null),r||i===null?v4(t)&&(n===null?e.removeAttribute(t):e.setAttribute(t,""+n)):i.mustUseProperty?e[i.propertyName]=n===null?i.type===3?!1:"":n:(t=i.attributeName,r=i.attributeNamespace,n===null?e.removeAttribute(t):(i=i.type,n=i===3||i===4&&n===!0?"":""+n,r?e.setAttributeNS(r,t,n):e.setAttribute(t,n))))}var Bn=m4.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED,So=Symbol.for("react.element"),fi=Symbol.for("react.portal"),pi=Symbol.for("react.fragment"),f0=Symbol.for("react.strict_mode"),Ud=Symbol.for("react.profiler"),Sy=Symbol.for("react.provider"),jy=Symbol.for("react.context"),p0=Symbol.for("react.forward_ref"),Hd=Symbol.for("react.suspense"),Gd=Symbol.for("react.suspense_list"),h0=Symbol.for("react.memo"),Kn=Symbol.for("react.lazy"),Oy=Symbol.for("react.offscreen"),ph=Symbol.iterator;function Oa(e){return e===null||typeof e!="object"?null:(e=ph&&e[ph]||e["@@iterator"],typeof e=="function"?e:null)}var Ae=Object.assign,Fu;function Ha(e){if(Fu===void 0)try{throw Error()}catch(n){var t=n.stack.trim().match(/\n( *(at )?)/);Fu=t&&t[1]||""}return`
`+Fu+e}var Ru=!1;function Bu(e,t){if(!e||Ru)return"";Ru=!0;var n=Error.prepareStackTrace;Error.prepareStackTrace=void 0;try{if(t)if(t=function(){throw Error()},Object.defineProperty(t.prototype,"props",{set:function(){throw Error()}}),typeof Reflect=="object"&&Reflect.construct){try{Reflect.construct(t,[])}catch(c){var r=c}Reflect.construct(e,[],t)}else{try{t.call()}catch(c){r=c}e.call(t.prototype)}else{try{throw Error()}catch(c){r=c}e()}}catch(c){if(c&&r&&typeof c.stack=="string"){for(var i=c.stack.split(`
`),a=r.stack.split(`
`),l=i.length-1,o=a.length-1;1<=l&&0<=o&&i[l]!==a[o];)o--;for(;1<=l&&0<=o;l--,o--)if(i[l]!==a[o]){if(l!==1||o!==1)do if(l--,o--,0>o||i[l]!==a[o]){var s=`
`+i[l].replace(" at new "," at ");return e.displayName&&s.includes("<anonymous>")&&(s=s.replace("<anonymous>",e.displayName)),s}while(1<=l&&0<=o);break}}}finally{Ru=!1,Error.prepareStackTrace=n}return(e=e?e.displayName||e.name:"")?Ha(e):""}function b4(e){switch(e.tag){case 5:return Ha(e.type);case 16:return Ha("Lazy");case 13:return Ha("Suspense");case 19:return Ha("SuspenseList");case 0:case 2:case 15:return e=Bu(e.type,!1),e;case 11:return e=Bu(e.type.render,!1),e;case 1:return e=Bu(e.type,!0),e;default:return""}}function Vd(e){if(e==null)return null;if(typeof e=="function")return e.displayName||e.name||null;if(typeof e=="string")return e;switch(e){case pi:return"Fragment";case fi:return"Portal";case Ud:return"Profiler";case f0:return"StrictMode";case Hd:return"Suspense";case Gd:return"SuspenseList"}if(typeof e=="object")switch(e.$$typeof){case jy:return(e.displayName||"Context")+".Consumer";case Sy:return(e._context.displayName||"Context")+".Provider";case p0:var t=e.render;return e=e.displayName,e||(e=t.displayName||t.name||"",e=e!==""?"ForwardRef("+e+")":"ForwardRef"),e;case h0:return t=e.displayName||null,t!==null?t:Vd(e.type)||"Memo";case Kn:t=e._payload,e=e._init;try{return Vd(e(t))}catch{}}return null}function w4(e){var t=e.type;switch(e.tag){case 24:return"Cache";case 9:return(t.displayName||"Context")+".Consumer";case 10:return(t._context.displayName||"Context")+".Provider";case 18:return"DehydratedFragment";case 11:return e=t.render,e=e.displayName||e.name||"",t.displayName||(e!==""?"ForwardRef("+e+")":"ForwardRef");case 7:return"Fragment";case 5:return t;case 4:return"Portal";case 3:return"Root";case 6:return"Text";case 16:return Vd(t);case 8:return t===f0?"StrictMode":"Mode";case 22:return"Offscreen";case 12:return"Profiler";case 21:return"Scope";case 13:return"Suspense";case 19:return"SuspenseList";case 25:return"TracingMarker";case 1:case 0:case 17:case 2:case 14:case 15:if(typeof t=="function")return t.displayName||t.name||null;if(typeof t=="string")return t}return null}function hr(e){switch(typeof e){case"boolean":case"number":case"string":case"undefined":return e;case"object":return e;default:return""}}function Py(e){var t=e.type;return(e=e.nodeName)&&e.toLowerCase()==="input"&&(t==="checkbox"||t==="radio")}function k4(e){var t=Py(e)?"checked":"value",n=Object.getOwnPropertyDescriptor(e.constructor.prototype,t),r=""+e[t];if(!e.hasOwnProperty(t)&&typeof n<"u"&&typeof n.get=="function"&&typeof n.set=="function"){var i=n.get,a=n.set;return Object.defineProperty(e,t,{configurable:!0,get:function(){return i.call(this)},set:function(l){r=""+l,a.call(this,l)}}),Object.defineProperty(e,t,{enumerable:n.enumerable}),{getValue:function(){return r},setValue:function(l){r=""+l},stopTracking:function(){e._valueTracker=null,delete e[t]}}}}function jo(e){e._valueTracker||(e._valueTracker=k4(e))}function Ay(e){if(!e)return!1;var t=e._valueTracker;if(!t)return!0;var n=t.getValue(),r="";return e&&(r=Py(e)?e.checked?"true":"false":e.value),e=r,e!==n?(t.setValue(e),!0):!1}function ps(e){if(e=e||(typeof document<"u"?document:void 0),typeof e>"u")return null;try{return e.activeElement||e.body}catch{return e.body}}function Xd(e,t){var n=t.checked;return Ae({},t,{defaultChecked:void 0,defaultValue:void 0,value:void 0,checked:n??e._wrapperState.initialChecked})}function hh(e,t){var n=t.defaultValue==null?"":t.defaultValue,r=t.checked!=null?t.checked:t.defaultChecked;n=hr(t.value!=null?t.value:n),e._wrapperState={initialChecked:r,initialValue:n,controlled:t.type==="checkbox"||t.type==="radio"?t.checked!=null:t.value!=null}}function My(e,t){t=t.checked,t!=null&&d0(e,"checked",t,!1)}function qd(e,t){My(e,t);var n=hr(t.value),r=t.type;if(n!=null)r==="number"?(n===0&&e.value===""||e.value!=n)&&(e.value=""+n):e.value!==""+n&&(e.value=""+n);else if(r==="submit"||r==="reset"){e.removeAttribute("value");return}t.hasOwnProperty("value")?Kd(e,t.type,n):t.hasOwnProperty("defaultValue")&&Kd(e,t.type,hr(t.defaultValue)),t.checked==null&&t.defaultChecked!=null&&(e.defaultChecked=!!t.defaultChecked)}function mh(e,t,n){if(t.hasOwnProperty("value")||t.hasOwnProperty("defaultValue")){var r=t.type;if(!(r!=="submit"&&r!=="reset"||t.value!==void 0&&t.value!==null))return;t=""+e._wrapperState.initialValue,n||t===e.value||(e.value=t),e.defaultValue=t}n=e.name,n!==""&&(e.name=""),e.defaultChecked=!!e._wrapperState.initialChecked,n!==""&&(e.name=n)}function Kd(e,t,n){(t!=="number"||ps(e.ownerDocument)!==e)&&(n==null?e.defaultValue=""+e._wrapperState.initialValue:e.defaultValue!==""+n&&(e.defaultValue=""+n))}var Ga=Array.isArray;function Pi(e,t,n,r){if(e=e.options,t){t={};for(var i=0;i<n.length;i++)t["$"+n[i]]=!0;for(n=0;n<e.length;n++)i=t.hasOwnProperty("$"+e[n].value),e[n].selected!==i&&(e[n].selected=i),i&&r&&(e[n].defaultSelected=!0)}else{for(n=""+hr(n),t=null,i=0;i<e.length;i++){if(e[i].value===n){e[i].selected=!0,r&&(e[i].defaultSelected=!0);return}t!==null||e[i].disabled||(t=e[i])}t!==null&&(t.selected=!0)}}function Yd(e,t){if(t.dangerouslySetInnerHTML!=null)throw Error(H(91));return Ae({},t,{value:void 0,defaultValue:void 0,children:""+e._wrapperState.initialValue})}function yh(e,t){var n=t.value;if(n==null){if(n=t.children,t=t.defaultValue,n!=null){if(t!=null)throw Error(H(92));if(Ga(n)){if(1<n.length)throw Error(H(93));n=n[0]}t=n}t==null&&(t=""),n=t}e._wrapperState={initialValue:hr(n)}}function Ny(e,t){var n=hr(t.value),r=hr(t.defaultValue);n!=null&&(n=""+n,n!==e.value&&(e.value=n),t.defaultValue==null&&e.defaultValue!==n&&(e.defaultValue=n)),r!=null&&(e.defaultValue=""+r)}function vh(e){var t=e.textContent;t===e._wrapperState.initialValue&&t!==""&&t!==null&&(e.value=t)}function Ey(e){switch(e){case"svg":return"http://www.w3.org/2000/svg";case"math":return"http://www.w3.org/1998/Math/MathML";default:return"http://www.w3.org/1999/xhtml"}}function Zd(e,t){return e==null||e==="http://www.w3.org/1999/xhtml"?Ey(t):e==="http://www.w3.org/2000/svg"&&t==="foreignObject"?"http://www.w3.org/1999/xhtml":e}var Oo,Cy=function(e){return typeof MSApp<"u"&&MSApp.execUnsafeLocalFunction?function(t,n,r,i){MSApp.execUnsafeLocalFunction(function(){return e(t,n,r,i)})}:e}(function(e,t){if(e.namespaceURI!=="http://www.w3.org/2000/svg"||"innerHTML"in e)e.innerHTML=t;else{for(Oo=Oo||document.createElement("div"),Oo.innerHTML="<svg>"+t.valueOf().toString()+"</svg>",t=Oo.firstChild;e.firstChild;)e.removeChild(e.firstChild);for(;t.firstChild;)e.appendChild(t.firstChild)}});function cl(e,t){if(t){var n=e.firstChild;if(n&&n===e.lastChild&&n.nodeType===3){n.nodeValue=t;return}}e.textContent=t}var Ka={animationIterationCount:!0,aspectRatio:!0,borderImageOutset:!0,borderImageSlice:!0,borderImageWidth:!0,boxFlex:!0,boxFlexGroup:!0,boxOrdinalGroup:!0,columnCount:!0,columns:!0,flex:!0,flexGrow:!0,flexPositive:!0,flexShrink:!0,flexNegative:!0,flexOrder:!0,gridArea:!0,gridRow:!0,gridRowEnd:!0,gridRowSpan:!0,gridRowStart:!0,gridColumn:!0,gridColumnEnd:!0,gridColumnSpan:!0,gridColumnStart:!0,fontWeight:!0,lineClamp:!0,lineHeight:!0,opacity:!0,order:!0,orphans:!0,tabSize:!0,widows:!0,zIndex:!0,zoom:!0,fillOpacity:!0,floodOpacity:!0,stopOpacity:!0,strokeDasharray:!0,strokeDashoffset:!0,strokeMiterlimit:!0,strokeOpacity:!0,strokeWidth:!0},_4=["Webkit","ms","Moz","O"];Object.keys(Ka).forEach(function(e){_4.forEach(function(t){t=t+e.charAt(0).toUpperCase()+e.substring(1),Ka[t]=Ka[e]})});function $y(e,t,n){return t==null||typeof t=="boolean"||t===""?"":n||typeof t!="number"||t===0||Ka.hasOwnProperty(e)&&Ka[e]?(""+t).trim():t+"px"}function Ty(e,t){e=e.style;for(var n in t)if(t.hasOwnProperty(n)){var r=n.indexOf("--")===0,i=$y(n,t[n],r);n==="float"&&(n="cssFloat"),r?e.setProperty(n,i):e[n]=i}}var S4=Ae({menuitem:!0},{area:!0,base:!0,br:!0,col:!0,embed:!0,hr:!0,img:!0,input:!0,keygen:!0,link:!0,meta:!0,param:!0,source:!0,track:!0,wbr:!0});function Qd(e,t){if(t){if(S4[e]&&(t.children!=null||t.dangerouslySetInnerHTML!=null))throw Error(H(137,e));if(t.dangerouslySetInnerHTML!=null){if(t.children!=null)throw Error(H(60));if(typeof t.dangerouslySetInnerHTML!="object"||!("__html"in t.dangerouslySetInnerHTML))throw Error(H(61))}if(t.style!=null&&typeof t.style!="object")throw Error(H(62))}}function Jd(e,t){if(e.indexOf("-")===-1)return typeof t.is=="string";switch(e){case"annotation-xml":case"color-profile":case"font-face":case"font-face-src":case"font-face-uri":case"font-face-format":case"font-face-name":case"missing-glyph":return!1;default:return!0}}var e1=null;function m0(e){return e=e.target||e.srcElement||window,e.correspondingUseElement&&(e=e.correspondingUseElement),e.nodeType===3?e.parentNode:e}var t1=null,Ai=null,Mi=null;function gh(e){if(e=fo(e)){if(typeof t1!="function")throw Error(H(280));var t=e.stateNode;t&&(t=Fc(t),t1(e.stateNode,e.type,t))}}function zy(e){Ai?Mi?Mi.push(e):Mi=[e]:Ai=e}function Iy(){if(Ai){var e=Ai,t=Mi;if(Mi=Ai=null,gh(e),t)for(e=0;e<t.length;e++)gh(t[e])}}function Dy(e,t){return e(t)}function Ly(){}var Wu=!1;function Fy(e,t,n){if(Wu)return e(t,n);Wu=!0;try{return Dy(e,t,n)}finally{Wu=!1,(Ai!==null||Mi!==null)&&(Ly(),Iy())}}function ul(e,t){var n=e.stateNode;if(n===null)return null;var r=Fc(n);if(r===null)return null;n=r[t];e:switch(t){case"onClick":case"onClickCapture":case"onDoubleClick":case"onDoubleClickCapture":case"onMouseDown":case"onMouseDownCapture":case"onMouseMove":case"onMouseMoveCapture":case"onMouseUp":case"onMouseUpCapture":case"onMouseEnter":(r=!r.disabled)||(e=e.type,r=!(e==="button"||e==="input"||e==="select"||e==="textarea")),e=!r;break e;default:e=!1}if(e)return null;if(n&&typeof n!="function")throw Error(H(231,t,typeof n));return n}var n1=!1;if(Tn)try{var Pa={};Object.defineProperty(Pa,"passive",{get:function(){n1=!0}}),window.addEventListener("test",Pa,Pa),window.removeEventListener("test",Pa,Pa)}catch{n1=!1}function j4(e,t,n,r,i,a,l,o,s){var c=Array.prototype.slice.call(arguments,3);try{t.apply(n,c)}catch(f){this.onError(f)}}var Ya=!1,hs=null,ms=!1,r1=null,O4={onError:function(e){Ya=!0,hs=e}};function P4(e,t,n,r,i,a,l,o,s){Ya=!1,hs=null,j4.apply(O4,arguments)}function A4(e,t,n,r,i,a,l,o,s){if(P4.apply(this,arguments),Ya){if(Ya){var c=hs;Ya=!1,hs=null}else throw Error(H(198));ms||(ms=!0,r1=c)}}function ni(e){var t=e,n=e;if(e.alternate)for(;t.return;)t=t.return;else{e=t;do t=e,t.flags&4098&&(n=t.return),e=t.return;while(e)}return t.tag===3?n:null}function Ry(e){if(e.tag===13){var t=e.memoizedState;if(t===null&&(e=e.alternate,e!==null&&(t=e.memoizedState)),t!==null)return t.dehydrated}return null}function xh(e){if(ni(e)!==e)throw Error(H(188))}function M4(e){var t=e.alternate;if(!t){if(t=ni(e),t===null)throw Error(H(188));return t!==e?null:e}for(var n=e,r=t;;){var i=n.return;if(i===null)break;var a=i.alternate;if(a===null){if(r=i.return,r!==null){n=r;continue}break}if(i.child===a.child){for(a=i.child;a;){if(a===n)return xh(i),e;if(a===r)return xh(i),t;a=a.sibling}throw Error(H(188))}if(n.return!==r.return)n=i,r=a;else{for(var l=!1,o=i.child;o;){if(o===n){l=!0,n=i,r=a;break}if(o===r){l=!0,r=i,n=a;break}o=o.sibling}if(!l){for(o=a.child;o;){if(o===n){l=!0,n=a,r=i;break}if(o===r){l=!0,r=a,n=i;break}o=o.sibling}if(!l)throw Error(H(189))}}if(n.alternate!==r)throw Error(H(190))}if(n.tag!==3)throw Error(H(188));return n.stateNode.current===n?e:t}function By(e){return e=M4(e),e!==null?Wy(e):null}function Wy(e){if(e.tag===5||e.tag===6)return e;for(e=e.child;e!==null;){var t=Wy(e);if(t!==null)return t;e=e.sibling}return null}var Uy=At.unstable_scheduleCallback,bh=At.unstable_cancelCallback,N4=At.unstable_shouldYield,E4=At.unstable_requestPaint,$e=At.unstable_now,C4=At.unstable_getCurrentPriorityLevel,y0=At.unstable_ImmediatePriority,Hy=At.unstable_UserBlockingPriority,ys=At.unstable_NormalPriority,$4=At.unstable_LowPriority,Gy=At.unstable_IdlePriority,zc=null,hn=null;function T4(e){if(hn&&typeof hn.onCommitFiberRoot=="function")try{hn.onCommitFiberRoot(zc,e,void 0,(e.current.flags&128)===128)}catch{}}var en=Math.clz32?Math.clz32:D4,z4=Math.log,I4=Math.LN2;function D4(e){return e>>>=0,e===0?32:31-(z4(e)/I4|0)|0}var Po=64,Ao=4194304;function Va(e){switch(e&-e){case 1:return 1;case 2:return 2;case 4:return 4;case 8:return 8;case 16:return 16;case 32:return 32;case 64:case 128:case 256:case 512:case 1024:case 2048:case 4096:case 8192:case 16384:case 32768:case 65536:case 131072:case 262144:case 524288:case 1048576:case 2097152:return e&4194240;case 4194304:case 8388608:case 16777216:case 33554432:case 67108864:return e&130023424;case 134217728:return 134217728;case 268435456:return 268435456;case 536870912:return 536870912;case 1073741824:return 1073741824;default:return e}}function vs(e,t){var n=e.pendingLanes;if(n===0)return 0;var r=0,i=e.suspendedLanes,a=e.pingedLanes,l=n&268435455;if(l!==0){var o=l&~i;o!==0?r=Va(o):(a&=l,a!==0&&(r=Va(a)))}else l=n&~i,l!==0?r=Va(l):a!==0&&(r=Va(a));if(r===0)return 0;if(t!==0&&t!==r&&!(t&i)&&(i=r&-r,a=t&-t,i>=a||i===16&&(a&4194240)!==0))return t;if(r&4&&(r|=n&16),t=e.entangledLanes,t!==0)for(e=e.entanglements,t&=r;0<t;)n=31-en(t),i=1<<n,r|=e[n],t&=~i;return r}function L4(e,t){switch(e){case 1:case 2:case 4:return t+250;case 8:case 16:case 32:case 64:case 128:case 256:case 512:case 1024:case 2048:case 4096:case 8192:case 16384:case 32768:case 65536:case 131072:case 262144:case 524288:case 1048576:case 2097152:return t+5e3;case 4194304:case 8388608:case 16777216:case 33554432:case 67108864:return-1;case 134217728:case 268435456:case 536870912:case 1073741824:return-1;default:return-1}}function F4(e,t){for(var n=e.suspendedLanes,r=e.pingedLanes,i=e.expirationTimes,a=e.pendingLanes;0<a;){var l=31-en(a),o=1<<l,s=i[l];s===-1?(!(o&n)||o&r)&&(i[l]=L4(o,t)):s<=t&&(e.expiredLanes|=o),a&=~o}}function i1(e){return e=e.pendingLanes&-1073741825,e!==0?e:e&1073741824?1073741824:0}function Vy(){var e=Po;return Po<<=1,!(Po&4194240)&&(Po=64),e}function Uu(e){for(var t=[],n=0;31>n;n++)t.push(e);return t}function co(e,t,n){e.pendingLanes|=t,t!==536870912&&(e.suspendedLanes=0,e.pingedLanes=0),e=e.eventTimes,t=31-en(t),e[t]=n}function R4(e,t){var n=e.pendingLanes&~t;e.pendingLanes=t,e.suspendedLanes=0,e.pingedLanes=0,e.expiredLanes&=t,e.mutableReadLanes&=t,e.entangledLanes&=t,t=e.entanglements;var r=e.eventTimes;for(e=e.expirationTimes;0<n;){var i=31-en(n),a=1<<i;t[i]=0,r[i]=-1,e[i]=-1,n&=~a}}function v0(e,t){var n=e.entangledLanes|=t;for(e=e.entanglements;n;){var r=31-en(n),i=1<<r;i&t|e[r]&t&&(e[r]|=t),n&=~i}}var de=0;function Xy(e){return e&=-e,1<e?4<e?e&268435455?16:536870912:4:1}var qy,g0,Ky,Yy,Zy,a1=!1,Mo=[],ir=null,ar=null,lr=null,dl=new Map,fl=new Map,Qn=[],B4="mousedown mouseup touchcancel touchend touchstart auxclick dblclick pointercancel pointerdown pointerup dragend dragstart drop compositionend compositionstart keydown keypress keyup input textInput copy cut paste click change contextmenu reset submit".split(" ");function wh(e,t){switch(e){case"focusin":case"focusout":ir=null;break;case"dragenter":case"dragleave":ar=null;break;case"mouseover":case"mouseout":lr=null;break;case"pointerover":case"pointerout":dl.delete(t.pointerId);break;case"gotpointercapture":case"lostpointercapture":fl.delete(t.pointerId)}}function Aa(e,t,n,r,i,a){return e===null||e.nativeEvent!==a?(e={blockedOn:t,domEventName:n,eventSystemFlags:r,nativeEvent:a,targetContainers:[i]},t!==null&&(t=fo(t),t!==null&&g0(t)),e):(e.eventSystemFlags|=r,t=e.targetContainers,i!==null&&t.indexOf(i)===-1&&t.push(i),e)}function W4(e,t,n,r,i){switch(t){case"focusin":return ir=Aa(ir,e,t,n,r,i),!0;case"dragenter":return ar=Aa(ar,e,t,n,r,i),!0;case"mouseover":return lr=Aa(lr,e,t,n,r,i),!0;case"pointerover":var a=i.pointerId;return dl.set(a,Aa(dl.get(a)||null,e,t,n,r,i)),!0;case"gotpointercapture":return a=i.pointerId,fl.set(a,Aa(fl.get(a)||null,e,t,n,r,i)),!0}return!1}function Qy(e){var t=$r(e.target);if(t!==null){var n=ni(t);if(n!==null){if(t=n.tag,t===13){if(t=Ry(n),t!==null){e.blockedOn=t,Zy(e.priority,function(){Ky(n)});return}}else if(t===3&&n.stateNode.current.memoizedState.isDehydrated){e.blockedOn=n.tag===3?n.stateNode.containerInfo:null;return}}}e.blockedOn=null}function ns(e){if(e.blockedOn!==null)return!1;for(var t=e.targetContainers;0<t.length;){var n=l1(e.domEventName,e.eventSystemFlags,t[0],e.nativeEvent);if(n===null){n=e.nativeEvent;var r=new n.constructor(n.type,n);e1=r,n.target.dispatchEvent(r),e1=null}else return t=fo(n),t!==null&&g0(t),e.blockedOn=n,!1;t.shift()}return!0}function kh(e,t,n){ns(e)&&n.delete(t)}function U4(){a1=!1,ir!==null&&ns(ir)&&(ir=null),ar!==null&&ns(ar)&&(ar=null),lr!==null&&ns(lr)&&(lr=null),dl.forEach(kh),fl.forEach(kh)}function Ma(e,t){e.blockedOn===t&&(e.blockedOn=null,a1||(a1=!0,At.unstable_scheduleCallback(At.unstable_NormalPriority,U4)))}function pl(e){function t(i){return Ma(i,e)}if(0<Mo.length){Ma(Mo[0],e);for(var n=1;n<Mo.length;n++){var r=Mo[n];r.blockedOn===e&&(r.blockedOn=null)}}for(ir!==null&&Ma(ir,e),ar!==null&&Ma(ar,e),lr!==null&&Ma(lr,e),dl.forEach(t),fl.forEach(t),n=0;n<Qn.length;n++)r=Qn[n],r.blockedOn===e&&(r.blockedOn=null);for(;0<Qn.length&&(n=Qn[0],n.blockedOn===null);)Qy(n),n.blockedOn===null&&Qn.shift()}var Ni=Bn.ReactCurrentBatchConfig,gs=!0;function H4(e,t,n,r){var i=de,a=Ni.transition;Ni.transition=null;try{de=1,x0(e,t,n,r)}finally{de=i,Ni.transition=a}}function G4(e,t,n,r){var i=de,a=Ni.transition;Ni.transition=null;try{de=4,x0(e,t,n,r)}finally{de=i,Ni.transition=a}}function x0(e,t,n,r){if(gs){var i=l1(e,t,n,r);if(i===null)Ju(e,t,r,xs,n),wh(e,r);else if(W4(i,e,t,n,r))r.stopPropagation();else if(wh(e,r),t&4&&-1<B4.indexOf(e)){for(;i!==null;){var a=fo(i);if(a!==null&&qy(a),a=l1(e,t,n,r),a===null&&Ju(e,t,r,xs,n),a===i)break;i=a}i!==null&&r.stopPropagation()}else Ju(e,t,r,null,n)}}var xs=null;function l1(e,t,n,r){if(xs=null,e=m0(r),e=$r(e),e!==null)if(t=ni(e),t===null)e=null;else if(n=t.tag,n===13){if(e=Ry(t),e!==null)return e;e=null}else if(n===3){if(t.stateNode.current.memoizedState.isDehydrated)return t.tag===3?t.stateNode.containerInfo:null;e=null}else t!==e&&(e=null);return xs=e,null}function Jy(e){switch(e){case"cancel":case"click":case"close":case"contextmenu":case"copy":case"cut":case"auxclick":case"dblclick":case"dragend":case"dragstart":case"drop":case"focusin":case"focusout":case"input":case"invalid":case"keydown":case"keypress":case"keyup":case"mousedown":case"mouseup":case"paste":case"pause":case"play":case"pointercancel":case"pointerdown":case"pointerup":case"ratechange":case"reset":case"resize":case"seeked":case"submit":case"touchcancel":case"touchend":case"touchstart":case"volumechange":case"change":case"selectionchange":case"textInput":case"compositionstart":case"compositionend":case"compositionupdate":case"beforeblur":case"afterblur":case"beforeinput":case"blur":case"fullscreenchange":case"focus":case"hashchange":case"popstate":case"select":case"selectstart":return 1;case"drag":case"dragenter":case"dragexit":case"dragleave":case"dragover":case"mousemove":case"mouseout":case"mouseover":case"pointermove":case"pointerout":case"pointerover":case"scroll":case"toggle":case"touchmove":case"wheel":case"mouseenter":case"mouseleave":case"pointerenter":case"pointerleave":return 4;case"message":switch(C4()){case y0:return 1;case Hy:return 4;case ys:case $4:return 16;case Gy:return 536870912;default:return 16}default:return 16}}var tr=null,b0=null,rs=null;function e8(){if(rs)return rs;var e,t=b0,n=t.length,r,i="value"in tr?tr.value:tr.textContent,a=i.length;for(e=0;e<n&&t[e]===i[e];e++);var l=n-e;for(r=1;r<=l&&t[n-r]===i[a-r];r++);return rs=i.slice(e,1<r?1-r:void 0)}function is(e){var t=e.keyCode;return"charCode"in e?(e=e.charCode,e===0&&t===13&&(e=13)):e=t,e===10&&(e=13),32<=e||e===13?e:0}function No(){return!0}function _h(){return!1}function Nt(e){function t(n,r,i,a,l){this._reactName=n,this._targetInst=i,this.type=r,this.nativeEvent=a,this.target=l,this.currentTarget=null;for(var o in e)e.hasOwnProperty(o)&&(n=e[o],this[o]=n?n(a):a[o]);return this.isDefaultPrevented=(a.defaultPrevented!=null?a.defaultPrevented:a.returnValue===!1)?No:_h,this.isPropagationStopped=_h,this}return Ae(t.prototype,{preventDefault:function(){this.defaultPrevented=!0;var n=this.nativeEvent;n&&(n.preventDefault?n.preventDefault():typeof n.returnValue!="unknown"&&(n.returnValue=!1),this.isDefaultPrevented=No)},stopPropagation:function(){var n=this.nativeEvent;n&&(n.stopPropagation?n.stopPropagation():typeof n.cancelBubble!="unknown"&&(n.cancelBubble=!0),this.isPropagationStopped=No)},persist:function(){},isPersistent:No}),t}var da={eventPhase:0,bubbles:0,cancelable:0,timeStamp:function(e){return e.timeStamp||Date.now()},defaultPrevented:0,isTrusted:0},w0=Nt(da),uo=Ae({},da,{view:0,detail:0}),V4=Nt(uo),Hu,Gu,Na,Ic=Ae({},uo,{screenX:0,screenY:0,clientX:0,clientY:0,pageX:0,pageY:0,ctrlKey:0,shiftKey:0,altKey:0,metaKey:0,getModifierState:k0,button:0,buttons:0,relatedTarget:function(e){return e.relatedTarget===void 0?e.fromElement===e.srcElement?e.toElement:e.fromElement:e.relatedTarget},movementX:function(e){return"movementX"in e?e.movementX:(e!==Na&&(Na&&e.type==="mousemove"?(Hu=e.screenX-Na.screenX,Gu=e.screenY-Na.screenY):Gu=Hu=0,Na=e),Hu)},movementY:function(e){return"movementY"in e?e.movementY:Gu}}),Sh=Nt(Ic),X4=Ae({},Ic,{dataTransfer:0}),q4=Nt(X4),K4=Ae({},uo,{relatedTarget:0}),Vu=Nt(K4),Y4=Ae({},da,{animationName:0,elapsedTime:0,pseudoElement:0}),Z4=Nt(Y4),Q4=Ae({},da,{clipboardData:function(e){return"clipboardData"in e?e.clipboardData:window.clipboardData}}),J4=Nt(Q4),e9=Ae({},da,{data:0}),jh=Nt(e9),t9={Esc:"Escape",Spacebar:" ",Left:"ArrowLeft",Up:"ArrowUp",Right:"ArrowRight",Down:"ArrowDown",Del:"Delete",Win:"OS",Menu:"ContextMenu",Apps:"ContextMenu",Scroll:"ScrollLock",MozPrintableKey:"Unidentified"},n9={8:"Backspace",9:"Tab",12:"Clear",13:"Enter",16:"Shift",17:"Control",18:"Alt",19:"Pause",20:"CapsLock",27:"Escape",32:" ",33:"PageUp",34:"PageDown",35:"End",36:"Home",37:"ArrowLeft",38:"ArrowUp",39:"ArrowRight",40:"ArrowDown",45:"Insert",46:"Delete",112:"F1",113:"F2",114:"F3",115:"F4",116:"F5",117:"F6",118:"F7",119:"F8",120:"F9",121:"F10",122:"F11",123:"F12",144:"NumLock",145:"ScrollLock",224:"Meta"},r9={Alt:"altKey",Control:"ctrlKey",Meta:"metaKey",Shift:"shiftKey"};function i9(e){var t=this.nativeEvent;return t.getModifierState?t.getModifierState(e):(e=r9[e])?!!t[e]:!1}function k0(){return i9}var a9=Ae({},uo,{key:function(e){if(e.key){var t=t9[e.key]||e.key;if(t!=="Unidentified")return t}return e.type==="keypress"?(e=is(e),e===13?"Enter":String.fromCharCode(e)):e.type==="keydown"||e.type==="keyup"?n9[e.keyCode]||"Unidentified":""},code:0,location:0,ctrlKey:0,shiftKey:0,altKey:0,metaKey:0,repeat:0,locale:0,getModifierState:k0,charCode:function(e){return e.type==="keypress"?is(e):0},keyCode:function(e){return e.type==="keydown"||e.type==="keyup"?e.keyCode:0},which:function(e){return e.type==="keypress"?is(e):e.type==="keydown"||e.type==="keyup"?e.keyCode:0}}),l9=Nt(a9),o9=Ae({},Ic,{pointerId:0,width:0,height:0,pressure:0,tangentialPressure:0,tiltX:0,tiltY:0,twist:0,pointerType:0,isPrimary:0}),Oh=Nt(o9),s9=Ae({},uo,{touches:0,targetTouches:0,changedTouches:0,altKey:0,metaKey:0,ctrlKey:0,shiftKey:0,getModifierState:k0}),c9=Nt(s9),u9=Ae({},da,{propertyName:0,elapsedTime:0,pseudoElement:0}),d9=Nt(u9),f9=Ae({},Ic,{deltaX:function(e){return"deltaX"in e?e.deltaX:"wheelDeltaX"in e?-e.wheelDeltaX:0},deltaY:function(e){return"deltaY"in e?e.deltaY:"wheelDeltaY"in e?-e.wheelDeltaY:"wheelDelta"in e?-e.wheelDelta:0},deltaZ:0,deltaMode:0}),p9=Nt(f9),h9=[9,13,27,32],_0=Tn&&"CompositionEvent"in window,Za=null;Tn&&"documentMode"in document&&(Za=document.documentMode);var m9=Tn&&"TextEvent"in window&&!Za,t8=Tn&&(!_0||Za&&8<Za&&11>=Za),Ph=" ",Ah=!1;function n8(e,t){switch(e){case"keyup":return h9.indexOf(t.keyCode)!==-1;case"keydown":return t.keyCode!==229;case"keypress":case"mousedown":case"focusout":return!0;default:return!1}}function r8(e){return e=e.detail,typeof e=="object"&&"data"in e?e.data:null}var hi=!1;function y9(e,t){switch(e){case"compositionend":return r8(t);case"keypress":return t.which!==32?null:(Ah=!0,Ph);case"textInput":return e=t.data,e===Ph&&Ah?null:e;default:return null}}function v9(e,t){if(hi)return e==="compositionend"||!_0&&n8(e,t)?(e=e8(),rs=b0=tr=null,hi=!1,e):null;switch(e){case"paste":return null;case"keypress":if(!(t.ctrlKey||t.altKey||t.metaKey)||t.ctrlKey&&t.altKey){if(t.char&&1<t.char.length)return t.char;if(t.which)return String.fromCharCode(t.which)}return null;case"compositionend":return t8&&t.locale!=="ko"?null:t.data;default:return null}}var g9={color:!0,date:!0,datetime:!0,"datetime-local":!0,email:!0,month:!0,number:!0,password:!0,range:!0,search:!0,tel:!0,text:!0,time:!0,url:!0,week:!0};function Mh(e){var t=e&&e.nodeName&&e.nodeName.toLowerCase();return t==="input"?!!g9[e.type]:t==="textarea"}function i8(e,t,n,r){zy(r),t=bs(t,"onChange"),0<t.length&&(n=new w0("onChange","change",null,n,r),e.push({event:n,listeners:t}))}var Qa=null,hl=null;function x9(e){m8(e,0)}function Dc(e){var t=vi(e);if(Ay(t))return e}function b9(e,t){if(e==="change")return t}var a8=!1;if(Tn){var Xu;if(Tn){var qu="oninput"in document;if(!qu){var Nh=document.createElement("div");Nh.setAttribute("oninput","return;"),qu=typeof Nh.oninput=="function"}Xu=qu}else Xu=!1;a8=Xu&&(!document.documentMode||9<document.documentMode)}function Eh(){Qa&&(Qa.detachEvent("onpropertychange",l8),hl=Qa=null)}function l8(e){if(e.propertyName==="value"&&Dc(hl)){var t=[];i8(t,hl,e,m0(e)),Fy(x9,t)}}function w9(e,t,n){e==="focusin"?(Eh(),Qa=t,hl=n,Qa.attachEvent("onpropertychange",l8)):e==="focusout"&&Eh()}function k9(e){if(e==="selectionchange"||e==="keyup"||e==="keydown")return Dc(hl)}function _9(e,t){if(e==="click")return Dc(t)}function S9(e,t){if(e==="input"||e==="change")return Dc(t)}function j9(e,t){return e===t&&(e!==0||1/e===1/t)||e!==e&&t!==t}var rn=typeof Object.is=="function"?Object.is:j9;function ml(e,t){if(rn(e,t))return!0;if(typeof e!="object"||e===null||typeof t!="object"||t===null)return!1;var n=Object.keys(e),r=Object.keys(t);if(n.length!==r.length)return!1;for(r=0;r<n.length;r++){var i=n[r];if(!Wd.call(t,i)||!rn(e[i],t[i]))return!1}return!0}function Ch(e){for(;e&&e.firstChild;)e=e.firstChild;return e}function $h(e,t){var n=Ch(e);e=0;for(var r;n;){if(n.nodeType===3){if(r=e+n.textContent.length,e<=t&&r>=t)return{node:n,offset:t-e};e=r}e:{for(;n;){if(n.nextSibling){n=n.nextSibling;break e}n=n.parentNode}n=void 0}n=Ch(n)}}function o8(e,t){return e&&t?e===t?!0:e&&e.nodeType===3?!1:t&&t.nodeType===3?o8(e,t.parentNode):"contains"in e?e.contains(t):e.compareDocumentPosition?!!(e.compareDocumentPosition(t)&16):!1:!1}function s8(){for(var e=window,t=ps();t instanceof e.HTMLIFrameElement;){try{var n=typeof t.contentWindow.location.href=="string"}catch{n=!1}if(n)e=t.contentWindow;else break;t=ps(e.document)}return t}function S0(e){var t=e&&e.nodeName&&e.nodeName.toLowerCase();return t&&(t==="input"&&(e.type==="text"||e.type==="search"||e.type==="tel"||e.type==="url"||e.type==="password")||t==="textarea"||e.contentEditable==="true")}function O9(e){var t=s8(),n=e.focusedElem,r=e.selectionRange;if(t!==n&&n&&n.ownerDocument&&o8(n.ownerDocument.documentElement,n)){if(r!==null&&S0(n)){if(t=r.start,e=r.end,e===void 0&&(e=t),"selectionStart"in n)n.selectionStart=t,n.selectionEnd=Math.min(e,n.value.length);else if(e=(t=n.ownerDocument||document)&&t.defaultView||window,e.getSelection){e=e.getSelection();var i=n.textContent.length,a=Math.min(r.start,i);r=r.end===void 0?a:Math.min(r.end,i),!e.extend&&a>r&&(i=r,r=a,a=i),i=$h(n,a);var l=$h(n,r);i&&l&&(e.rangeCount!==1||e.anchorNode!==i.node||e.anchorOffset!==i.offset||e.focusNode!==l.node||e.focusOffset!==l.offset)&&(t=t.createRange(),t.setStart(i.node,i.offset),e.removeAllRanges(),a>r?(e.addRange(t),e.extend(l.node,l.offset)):(t.setEnd(l.node,l.offset),e.addRange(t)))}}for(t=[],e=n;e=e.parentNode;)e.nodeType===1&&t.push({element:e,left:e.scrollLeft,top:e.scrollTop});for(typeof n.focus=="function"&&n.focus(),n=0;n<t.length;n++)e=t[n],e.element.scrollLeft=e.left,e.element.scrollTop=e.top}}var P9=Tn&&"documentMode"in document&&11>=document.documentMode,mi=null,o1=null,Ja=null,s1=!1;function Th(e,t,n){var r=n.window===n?n.document:n.nodeType===9?n:n.ownerDocument;s1||mi==null||mi!==ps(r)||(r=mi,"selectionStart"in r&&S0(r)?r={start:r.selectionStart,end:r.selectionEnd}:(r=(r.ownerDocument&&r.ownerDocument.defaultView||window).getSelection(),r={anchorNode:r.anchorNode,anchorOffset:r.anchorOffset,focusNode:r.focusNode,focusOffset:r.focusOffset}),Ja&&ml(Ja,r)||(Ja=r,r=bs(o1,"onSelect"),0<r.length&&(t=new w0("onSelect","select",null,t,n),e.push({event:t,listeners:r}),t.target=mi)))}function Eo(e,t){var n={};return n[e.toLowerCase()]=t.toLowerCase(),n["Webkit"+e]="webkit"+t,n["Moz"+e]="moz"+t,n}var yi={animationend:Eo("Animation","AnimationEnd"),animationiteration:Eo("Animation","AnimationIteration"),animationstart:Eo("Animation","AnimationStart"),transitionend:Eo("Transition","TransitionEnd")},Ku={},c8={};Tn&&(c8=document.createElement("div").style,"AnimationEvent"in window||(delete yi.animationend.animation,delete yi.animationiteration.animation,delete yi.animationstart.animation),"TransitionEvent"in window||delete yi.transitionend.transition);function Lc(e){if(Ku[e])return Ku[e];if(!yi[e])return e;var t=yi[e],n;for(n in t)if(t.hasOwnProperty(n)&&n in c8)return Ku[e]=t[n];return e}var u8=Lc("animationend"),d8=Lc("animationiteration"),f8=Lc("animationstart"),p8=Lc("transitionend"),h8=new Map,zh="abort auxClick cancel canPlay canPlayThrough click close contextMenu copy cut drag dragEnd dragEnter dragExit dragLeave dragOver dragStart drop durationChange emptied encrypted ended error gotPointerCapture input invalid keyDown keyPress keyUp load loadedData loadedMetadata loadStart lostPointerCapture mouseDown mouseMove mouseOut mouseOver mouseUp paste pause play playing pointerCancel pointerDown pointerMove pointerOut pointerOver pointerUp progress rateChange reset resize seeked seeking stalled submit suspend timeUpdate touchCancel touchEnd touchStart volumeChange scroll toggle touchMove waiting wheel".split(" ");function vr(e,t){h8.set(e,t),ti(t,[e])}for(var Yu=0;Yu<zh.length;Yu++){var Zu=zh[Yu],A9=Zu.toLowerCase(),M9=Zu[0].toUpperCase()+Zu.slice(1);vr(A9,"on"+M9)}vr(u8,"onAnimationEnd");vr(d8,"onAnimationIteration");vr(f8,"onAnimationStart");vr("dblclick","onDoubleClick");vr("focusin","onFocus");vr("focusout","onBlur");vr(p8,"onTransitionEnd");Ii("onMouseEnter",["mouseout","mouseover"]);Ii("onMouseLeave",["mouseout","mouseover"]);Ii("onPointerEnter",["pointerout","pointerover"]);Ii("onPointerLeave",["pointerout","pointerover"]);ti("onChange","change click focusin focusout input keydown keyup selectionchange".split(" "));ti("onSelect","focusout contextmenu dragend focusin keydown keyup mousedown mouseup selectionchange".split(" "));ti("onBeforeInput",["compositionend","keypress","textInput","paste"]);ti("onCompositionEnd","compositionend focusout keydown keypress keyup mousedown".split(" "));ti("onCompositionStart","compositionstart focusout keydown keypress keyup mousedown".split(" "));ti("onCompositionUpdate","compositionupdate focusout keydown keypress keyup mousedown".split(" "));var Xa="abort canplay canplaythrough durationchange emptied encrypted ended error loadeddata loadedmetadata loadstart pause play playing progress ratechange resize seeked seeking stalled suspend timeupdate volumechange waiting".split(" "),N9=new Set("cancel close invalid load scroll toggle".split(" ").concat(Xa));function Ih(e,t,n){var r=e.type||"unknown-event";e.currentTarget=n,A4(r,t,void 0,e),e.currentTarget=null}function m8(e,t){t=(t&4)!==0;for(var n=0;n<e.length;n++){var r=e[n],i=r.event;r=r.listeners;e:{var a=void 0;if(t)for(var l=r.length-1;0<=l;l--){var o=r[l],s=o.instance,c=o.currentTarget;if(o=o.listener,s!==a&&i.isPropagationStopped())break e;Ih(i,o,c),a=s}else for(l=0;l<r.length;l++){if(o=r[l],s=o.instance,c=o.currentTarget,o=o.listener,s!==a&&i.isPropagationStopped())break e;Ih(i,o,c),a=s}}}if(ms)throw e=r1,ms=!1,r1=null,e}function ge(e,t){var n=t[p1];n===void 0&&(n=t[p1]=new Set);var r=e+"__bubble";n.has(r)||(y8(t,e,2,!1),n.add(r))}function Qu(e,t,n){var r=0;t&&(r|=4),y8(n,e,r,t)}var Co="_reactListening"+Math.random().toString(36).slice(2);function yl(e){if(!e[Co]){e[Co]=!0,_y.forEach(function(n){n!=="selectionchange"&&(N9.has(n)||Qu(n,!1,e),Qu(n,!0,e))});var t=e.nodeType===9?e:e.ownerDocument;t===null||t[Co]||(t[Co]=!0,Qu("selectionchange",!1,t))}}function y8(e,t,n,r){switch(Jy(t)){case 1:var i=H4;break;case 4:i=G4;break;default:i=x0}n=i.bind(null,t,n,e),i=void 0,!n1||t!=="touchstart"&&t!=="touchmove"&&t!=="wheel"||(i=!0),r?i!==void 0?e.addEventListener(t,n,{capture:!0,passive:i}):e.addEventListener(t,n,!0):i!==void 0?e.addEventListener(t,n,{passive:i}):e.addEventListener(t,n,!1)}function Ju(e,t,n,r,i){var a=r;if(!(t&1)&&!(t&2)&&r!==null)e:for(;;){if(r===null)return;var l=r.tag;if(l===3||l===4){var o=r.stateNode.containerInfo;if(o===i||o.nodeType===8&&o.parentNode===i)break;if(l===4)for(l=r.return;l!==null;){var s=l.tag;if((s===3||s===4)&&(s=l.stateNode.containerInfo,s===i||s.nodeType===8&&s.parentNode===i))return;l=l.return}for(;o!==null;){if(l=$r(o),l===null)return;if(s=l.tag,s===5||s===6){r=a=l;continue e}o=o.parentNode}}r=r.return}Fy(function(){var c=a,f=m0(n),d=[];e:{var p=h8.get(e);if(p!==void 0){var h=w0,x=e;switch(e){case"keypress":if(is(n)===0)break e;case"keydown":case"keyup":h=l9;break;case"focusin":x="focus",h=Vu;break;case"focusout":x="blur",h=Vu;break;case"beforeblur":case"afterblur":h=Vu;break;case"click":if(n.button===2)break e;case"auxclick":case"dblclick":case"mousedown":case"mousemove":case"mouseup":case"mouseout":case"mouseover":case"contextmenu":h=Sh;break;case"drag":case"dragend":case"dragenter":case"dragexit":case"dragleave":case"dragover":case"dragstart":case"drop":h=q4;break;case"touchcancel":case"touchend":case"touchmove":case"touchstart":h=c9;break;case u8:case d8:case f8:h=Z4;break;case p8:h=d9;break;case"scroll":h=V4;break;case"wheel":h=p9;break;case"copy":case"cut":case"paste":h=J4;break;case"gotpointercapture":case"lostpointercapture":case"pointercancel":case"pointerdown":case"pointermove":case"pointerout":case"pointerover":case"pointerup":h=Oh}var v=(t&4)!==0,w=!v&&e==="scroll",y=v?p!==null?p+"Capture":null:p;v=[];for(var m=c,g;m!==null;){g=m;var _=g.stateNode;if(g.tag===5&&_!==null&&(g=_,y!==null&&(_=ul(m,y),_!=null&&v.push(vl(m,_,g)))),w)break;m=m.return}0<v.length&&(p=new h(p,x,null,n,f),d.push({event:p,listeners:v}))}}if(!(t&7)){e:{if(p=e==="mouseover"||e==="pointerover",h=e==="mouseout"||e==="pointerout",p&&n!==e1&&(x=n.relatedTarget||n.fromElement)&&($r(x)||x[zn]))break e;if((h||p)&&(p=f.window===f?f:(p=f.ownerDocument)?p.defaultView||p.parentWindow:window,h?(x=n.relatedTarget||n.toElement,h=c,x=x?$r(x):null,x!==null&&(w=ni(x),x!==w||x.tag!==5&&x.tag!==6)&&(x=null)):(h=null,x=c),h!==x)){if(v=Sh,_="onMouseLeave",y="onMouseEnter",m="mouse",(e==="pointerout"||e==="pointerover")&&(v=Oh,_="onPointerLeave",y="onPointerEnter",m="pointer"),w=h==null?p:vi(h),g=x==null?p:vi(x),p=new v(_,m+"leave",h,n,f),p.target=w,p.relatedTarget=g,_=null,$r(f)===c&&(v=new v(y,m+"enter",x,n,f),v.target=g,v.relatedTarget=w,_=v),w=_,h&&x)t:{for(v=h,y=x,m=0,g=v;g;g=oi(g))m++;for(g=0,_=y;_;_=oi(_))g++;for(;0<m-g;)v=oi(v),m--;for(;0<g-m;)y=oi(y),g--;for(;m--;){if(v===y||y!==null&&v===y.alternate)break t;v=oi(v),y=oi(y)}v=null}else v=null;h!==null&&Dh(d,p,h,v,!1),x!==null&&w!==null&&Dh(d,w,x,v,!0)}}e:{if(p=c?vi(c):window,h=p.nodeName&&p.nodeName.toLowerCase(),h==="select"||h==="input"&&p.type==="file")var b=b9;else if(Mh(p))if(a8)b=S9;else{b=k9;var k=w9}else(h=p.nodeName)&&h.toLowerCase()==="input"&&(p.type==="checkbox"||p.type==="radio")&&(b=_9);if(b&&(b=b(e,c))){i8(d,b,n,f);break e}k&&k(e,p,c),e==="focusout"&&(k=p._wrapperState)&&k.controlled&&p.type==="number"&&Kd(p,"number",p.value)}switch(k=c?vi(c):window,e){case"focusin":(Mh(k)||k.contentEditable==="true")&&(mi=k,o1=c,Ja=null);break;case"focusout":Ja=o1=mi=null;break;case"mousedown":s1=!0;break;case"contextmenu":case"mouseup":case"dragend":s1=!1,Th(d,n,f);break;case"selectionchange":if(P9)break;case"keydown":case"keyup":Th(d,n,f)}var S;if(_0)e:{switch(e){case"compositionstart":var j="onCompositionStart";break e;case"compositionend":j="onCompositionEnd";break e;case"compositionupdate":j="onCompositionUpdate";break e}j=void 0}else hi?n8(e,n)&&(j="onCompositionEnd"):e==="keydown"&&n.keyCode===229&&(j="onCompositionStart");j&&(t8&&n.locale!=="ko"&&(hi||j!=="onCompositionStart"?j==="onCompositionEnd"&&hi&&(S=e8()):(tr=f,b0="value"in tr?tr.value:tr.textContent,hi=!0)),k=bs(c,j),0<k.length&&(j=new jh(j,e,null,n,f),d.push({event:j,listeners:k}),S?j.data=S:(S=r8(n),S!==null&&(j.data=S)))),(S=m9?y9(e,n):v9(e,n))&&(c=bs(c,"onBeforeInput"),0<c.length&&(f=new jh("onBeforeInput","beforeinput",null,n,f),d.push({event:f,listeners:c}),f.data=S))}m8(d,t)})}function vl(e,t,n){return{instance:e,listener:t,currentTarget:n}}function bs(e,t){for(var n=t+"Capture",r=[];e!==null;){var i=e,a=i.stateNode;i.tag===5&&a!==null&&(i=a,a=ul(e,n),a!=null&&r.unshift(vl(e,a,i)),a=ul(e,t),a!=null&&r.push(vl(e,a,i))),e=e.return}return r}function oi(e){if(e===null)return null;do e=e.return;while(e&&e.tag!==5);return e||null}function Dh(e,t,n,r,i){for(var a=t._reactName,l=[];n!==null&&n!==r;){var o=n,s=o.alternate,c=o.stateNode;if(s!==null&&s===r)break;o.tag===5&&c!==null&&(o=c,i?(s=ul(n,a),s!=null&&l.unshift(vl(n,s,o))):i||(s=ul(n,a),s!=null&&l.push(vl(n,s,o)))),n=n.return}l.length!==0&&e.push({event:t,listeners:l})}var E9=/\r\n?/g,C9=/\u0000|\uFFFD/g;function Lh(e){return(typeof e=="string"?e:""+e).replace(E9,`
`).replace(C9,"")}function $o(e,t,n){if(t=Lh(t),Lh(e)!==t&&n)throw Error(H(425))}function ws(){}var c1=null,u1=null;function d1(e,t){return e==="textarea"||e==="noscript"||typeof t.children=="string"||typeof t.children=="number"||typeof t.dangerouslySetInnerHTML=="object"&&t.dangerouslySetInnerHTML!==null&&t.dangerouslySetInnerHTML.__html!=null}var f1=typeof setTimeout=="function"?setTimeout:void 0,$9=typeof clearTimeout=="function"?clearTimeout:void 0,Fh=typeof Promise=="function"?Promise:void 0,T9=typeof queueMicrotask=="function"?queueMicrotask:typeof Fh<"u"?function(e){return Fh.resolve(null).then(e).catch(z9)}:f1;function z9(e){setTimeout(function(){throw e})}function ed(e,t){var n=t,r=0;do{var i=n.nextSibling;if(e.removeChild(n),i&&i.nodeType===8)if(n=i.data,n==="/$"){if(r===0){e.removeChild(i),pl(t);return}r--}else n!=="$"&&n!=="$?"&&n!=="$!"||r++;n=i}while(n);pl(t)}function or(e){for(;e!=null;e=e.nextSibling){var t=e.nodeType;if(t===1||t===3)break;if(t===8){if(t=e.data,t==="$"||t==="$!"||t==="$?")break;if(t==="/$")return null}}return e}function Rh(e){e=e.previousSibling;for(var t=0;e;){if(e.nodeType===8){var n=e.data;if(n==="$"||n==="$!"||n==="$?"){if(t===0)return e;t--}else n==="/$"&&t++}e=e.previousSibling}return null}var fa=Math.random().toString(36).slice(2),dn="__reactFiber$"+fa,gl="__reactProps$"+fa,zn="__reactContainer$"+fa,p1="__reactEvents$"+fa,I9="__reactListeners$"+fa,D9="__reactHandles$"+fa;function $r(e){var t=e[dn];if(t)return t;for(var n=e.parentNode;n;){if(t=n[zn]||n[dn]){if(n=t.alternate,t.child!==null||n!==null&&n.child!==null)for(e=Rh(e);e!==null;){if(n=e[dn])return n;e=Rh(e)}return t}e=n,n=e.parentNode}return null}function fo(e){return e=e[dn]||e[zn],!e||e.tag!==5&&e.tag!==6&&e.tag!==13&&e.tag!==3?null:e}function vi(e){if(e.tag===5||e.tag===6)return e.stateNode;throw Error(H(33))}function Fc(e){return e[gl]||null}var h1=[],gi=-1;function gr(e){return{current:e}}function we(e){0>gi||(e.current=h1[gi],h1[gi]=null,gi--)}function ve(e,t){gi++,h1[gi]=e.current,e.current=t}var mr={},st=gr(mr),gt=gr(!1),Gr=mr;function Di(e,t){var n=e.type.contextTypes;if(!n)return mr;var r=e.stateNode;if(r&&r.__reactInternalMemoizedUnmaskedChildContext===t)return r.__reactInternalMemoizedMaskedChildContext;var i={},a;for(a in n)i[a]=t[a];return r&&(e=e.stateNode,e.__reactInternalMemoizedUnmaskedChildContext=t,e.__reactInternalMemoizedMaskedChildContext=i),i}function xt(e){return e=e.childContextTypes,e!=null}function ks(){we(gt),we(st)}function Bh(e,t,n){if(st.current!==mr)throw Error(H(168));ve(st,t),ve(gt,n)}function v8(e,t,n){var r=e.stateNode;if(t=t.childContextTypes,typeof r.getChildContext!="function")return n;r=r.getChildContext();for(var i in r)if(!(i in t))throw Error(H(108,w4(e)||"Unknown",i));return Ae({},n,r)}function _s(e){return e=(e=e.stateNode)&&e.__reactInternalMemoizedMergedChildContext||mr,Gr=st.current,ve(st,e),ve(gt,gt.current),!0}function Wh(e,t,n){var r=e.stateNode;if(!r)throw Error(H(169));n?(e=v8(e,t,Gr),r.__reactInternalMemoizedMergedChildContext=e,we(gt),we(st),ve(st,e)):we(gt),ve(gt,n)}var Sn=null,Rc=!1,td=!1;function g8(e){Sn===null?Sn=[e]:Sn.push(e)}function L9(e){Rc=!0,g8(e)}function xr(){if(!td&&Sn!==null){td=!0;var e=0,t=de;try{var n=Sn;for(de=1;e<n.length;e++){var r=n[e];do r=r(!0);while(r!==null)}Sn=null,Rc=!1}catch(i){throw Sn!==null&&(Sn=Sn.slice(e+1)),Uy(y0,xr),i}finally{de=t,td=!1}}return null}var xi=[],bi=0,Ss=null,js=0,Tt=[],zt=0,Vr=null,jn=1,On="";function Pr(e,t){xi[bi++]=js,xi[bi++]=Ss,Ss=e,js=t}function x8(e,t,n){Tt[zt++]=jn,Tt[zt++]=On,Tt[zt++]=Vr,Vr=e;var r=jn;e=On;var i=32-en(r)-1;r&=~(1<<i),n+=1;var a=32-en(t)+i;if(30<a){var l=i-i%5;a=(r&(1<<l)-1).toString(32),r>>=l,i-=l,jn=1<<32-en(t)+i|n<<i|r,On=a+e}else jn=1<<a|n<<i|r,On=e}function j0(e){e.return!==null&&(Pr(e,1),x8(e,1,0))}function O0(e){for(;e===Ss;)Ss=xi[--bi],xi[bi]=null,js=xi[--bi],xi[bi]=null;for(;e===Vr;)Vr=Tt[--zt],Tt[zt]=null,On=Tt[--zt],Tt[zt]=null,jn=Tt[--zt],Tt[zt]=null}var Pt=null,Ot=null,_e=!1,Zt=null;function b8(e,t){var n=It(5,null,null,0);n.elementType="DELETED",n.stateNode=t,n.return=e,t=e.deletions,t===null?(e.deletions=[n],e.flags|=16):t.push(n)}function Uh(e,t){switch(e.tag){case 5:var n=e.type;return t=t.nodeType!==1||n.toLowerCase()!==t.nodeName.toLowerCase()?null:t,t!==null?(e.stateNode=t,Pt=e,Ot=or(t.firstChild),!0):!1;case 6:return t=e.pendingProps===""||t.nodeType!==3?null:t,t!==null?(e.stateNode=t,Pt=e,Ot=null,!0):!1;case 13:return t=t.nodeType!==8?null:t,t!==null?(n=Vr!==null?{id:jn,overflow:On}:null,e.memoizedState={dehydrated:t,treeContext:n,retryLane:1073741824},n=It(18,null,null,0),n.stateNode=t,n.return=e,e.child=n,Pt=e,Ot=null,!0):!1;default:return!1}}function m1(e){return(e.mode&1)!==0&&(e.flags&128)===0}function y1(e){if(_e){var t=Ot;if(t){var n=t;if(!Uh(e,t)){if(m1(e))throw Error(H(418));t=or(n.nextSibling);var r=Pt;t&&Uh(e,t)?b8(r,n):(e.flags=e.flags&-4097|2,_e=!1,Pt=e)}}else{if(m1(e))throw Error(H(418));e.flags=e.flags&-4097|2,_e=!1,Pt=e}}}function Hh(e){for(e=e.return;e!==null&&e.tag!==5&&e.tag!==3&&e.tag!==13;)e=e.return;Pt=e}function To(e){if(e!==Pt)return!1;if(!_e)return Hh(e),_e=!0,!1;var t;if((t=e.tag!==3)&&!(t=e.tag!==5)&&(t=e.type,t=t!=="head"&&t!=="body"&&!d1(e.type,e.memoizedProps)),t&&(t=Ot)){if(m1(e))throw w8(),Error(H(418));for(;t;)b8(e,t),t=or(t.nextSibling)}if(Hh(e),e.tag===13){if(e=e.memoizedState,e=e!==null?e.dehydrated:null,!e)throw Error(H(317));e:{for(e=e.nextSibling,t=0;e;){if(e.nodeType===8){var n=e.data;if(n==="/$"){if(t===0){Ot=or(e.nextSibling);break e}t--}else n!=="$"&&n!=="$!"&&n!=="$?"||t++}e=e.nextSibling}Ot=null}}else Ot=Pt?or(e.stateNode.nextSibling):null;return!0}function w8(){for(var e=Ot;e;)e=or(e.nextSibling)}function Li(){Ot=Pt=null,_e=!1}function P0(e){Zt===null?Zt=[e]:Zt.push(e)}var F9=Bn.ReactCurrentBatchConfig;function Ea(e,t,n){if(e=n.ref,e!==null&&typeof e!="function"&&typeof e!="object"){if(n._owner){if(n=n._owner,n){if(n.tag!==1)throw Error(H(309));var r=n.stateNode}if(!r)throw Error(H(147,e));var i=r,a=""+e;return t!==null&&t.ref!==null&&typeof t.ref=="function"&&t.ref._stringRef===a?t.ref:(t=function(l){var o=i.refs;l===null?delete o[a]:o[a]=l},t._stringRef=a,t)}if(typeof e!="string")throw Error(H(284));if(!n._owner)throw Error(H(290,e))}return e}function zo(e,t){throw e=Object.prototype.toString.call(t),Error(H(31,e==="[object Object]"?"object with keys {"+Object.keys(t).join(", ")+"}":e))}function Gh(e){var t=e._init;return t(e._payload)}function k8(e){function t(y,m){if(e){var g=y.deletions;g===null?(y.deletions=[m],y.flags|=16):g.push(m)}}function n(y,m){if(!e)return null;for(;m!==null;)t(y,m),m=m.sibling;return null}function r(y,m){for(y=new Map;m!==null;)m.key!==null?y.set(m.key,m):y.set(m.index,m),m=m.sibling;return y}function i(y,m){return y=dr(y,m),y.index=0,y.sibling=null,y}function a(y,m,g){return y.index=g,e?(g=y.alternate,g!==null?(g=g.index,g<m?(y.flags|=2,m):g):(y.flags|=2,m)):(y.flags|=1048576,m)}function l(y){return e&&y.alternate===null&&(y.flags|=2),y}function o(y,m,g,_){return m===null||m.tag!==6?(m=sd(g,y.mode,_),m.return=y,m):(m=i(m,g),m.return=y,m)}function s(y,m,g,_){var b=g.type;return b===pi?f(y,m,g.props.children,_,g.key):m!==null&&(m.elementType===b||typeof b=="object"&&b!==null&&b.$$typeof===Kn&&Gh(b)===m.type)?(_=i(m,g.props),_.ref=Ea(y,m,g),_.return=y,_):(_=ds(g.type,g.key,g.props,null,y.mode,_),_.ref=Ea(y,m,g),_.return=y,_)}function c(y,m,g,_){return m===null||m.tag!==4||m.stateNode.containerInfo!==g.containerInfo||m.stateNode.implementation!==g.implementation?(m=cd(g,y.mode,_),m.return=y,m):(m=i(m,g.children||[]),m.return=y,m)}function f(y,m,g,_,b){return m===null||m.tag!==7?(m=Br(g,y.mode,_,b),m.return=y,m):(m=i(m,g),m.return=y,m)}function d(y,m,g){if(typeof m=="string"&&m!==""||typeof m=="number")return m=sd(""+m,y.mode,g),m.return=y,m;if(typeof m=="object"&&m!==null){switch(m.$$typeof){case So:return g=ds(m.type,m.key,m.props,null,y.mode,g),g.ref=Ea(y,null,m),g.return=y,g;case fi:return m=cd(m,y.mode,g),m.return=y,m;case Kn:var _=m._init;return d(y,_(m._payload),g)}if(Ga(m)||Oa(m))return m=Br(m,y.mode,g,null),m.return=y,m;zo(y,m)}return null}function p(y,m,g,_){var b=m!==null?m.key:null;if(typeof g=="string"&&g!==""||typeof g=="number")return b!==null?null:o(y,m,""+g,_);if(typeof g=="object"&&g!==null){switch(g.$$typeof){case So:return g.key===b?s(y,m,g,_):null;case fi:return g.key===b?c(y,m,g,_):null;case Kn:return b=g._init,p(y,m,b(g._payload),_)}if(Ga(g)||Oa(g))return b!==null?null:f(y,m,g,_,null);zo(y,g)}return null}function h(y,m,g,_,b){if(typeof _=="string"&&_!==""||typeof _=="number")return y=y.get(g)||null,o(m,y,""+_,b);if(typeof _=="object"&&_!==null){switch(_.$$typeof){case So:return y=y.get(_.key===null?g:_.key)||null,s(m,y,_,b);case fi:return y=y.get(_.key===null?g:_.key)||null,c(m,y,_,b);case Kn:var k=_._init;return h(y,m,g,k(_._payload),b)}if(Ga(_)||Oa(_))return y=y.get(g)||null,f(m,y,_,b,null);zo(m,_)}return null}function x(y,m,g,_){for(var b=null,k=null,S=m,j=m=0,O=null;S!==null&&j<g.length;j++){S.index>j?(O=S,S=null):O=S.sibling;var C=p(y,S,g[j],_);if(C===null){S===null&&(S=O);break}e&&S&&C.alternate===null&&t(y,S),m=a(C,m,j),k===null?b=C:k.sibling=C,k=C,S=O}if(j===g.length)return n(y,S),_e&&Pr(y,j),b;if(S===null){for(;j<g.length;j++)S=d(y,g[j],_),S!==null&&(m=a(S,m,j),k===null?b=S:k.sibling=S,k=S);return _e&&Pr(y,j),b}for(S=r(y,S);j<g.length;j++)O=h(S,y,j,g[j],_),O!==null&&(e&&O.alternate!==null&&S.delete(O.key===null?j:O.key),m=a(O,m,j),k===null?b=O:k.sibling=O,k=O);return e&&S.forEach(function(M){return t(y,M)}),_e&&Pr(y,j),b}function v(y,m,g,_){var b=Oa(g);if(typeof b!="function")throw Error(H(150));if(g=b.call(g),g==null)throw Error(H(151));for(var k=b=null,S=m,j=m=0,O=null,C=g.next();S!==null&&!C.done;j++,C=g.next()){S.index>j?(O=S,S=null):O=S.sibling;var M=p(y,S,C.value,_);if(M===null){S===null&&(S=O);break}e&&S&&M.alternate===null&&t(y,S),m=a(M,m,j),k===null?b=M:k.sibling=M,k=M,S=O}if(C.done)return n(y,S),_e&&Pr(y,j),b;if(S===null){for(;!C.done;j++,C=g.next())C=d(y,C.value,_),C!==null&&(m=a(C,m,j),k===null?b=C:k.sibling=C,k=C);return _e&&Pr(y,j),b}for(S=r(y,S);!C.done;j++,C=g.next())C=h(S,y,j,C.value,_),C!==null&&(e&&C.alternate!==null&&S.delete(C.key===null?j:C.key),m=a(C,m,j),k===null?b=C:k.sibling=C,k=C);return e&&S.forEach(function(P){return t(y,P)}),_e&&Pr(y,j),b}function w(y,m,g,_){if(typeof g=="object"&&g!==null&&g.type===pi&&g.key===null&&(g=g.props.children),typeof g=="object"&&g!==null){switch(g.$$typeof){case So:e:{for(var b=g.key,k=m;k!==null;){if(k.key===b){if(b=g.type,b===pi){if(k.tag===7){n(y,k.sibling),m=i(k,g.props.children),m.return=y,y=m;break e}}else if(k.elementType===b||typeof b=="object"&&b!==null&&b.$$typeof===Kn&&Gh(b)===k.type){n(y,k.sibling),m=i(k,g.props),m.ref=Ea(y,k,g),m.return=y,y=m;break e}n(y,k);break}else t(y,k);k=k.sibling}g.type===pi?(m=Br(g.props.children,y.mode,_,g.key),m.return=y,y=m):(_=ds(g.type,g.key,g.props,null,y.mode,_),_.ref=Ea(y,m,g),_.return=y,y=_)}return l(y);case fi:e:{for(k=g.key;m!==null;){if(m.key===k)if(m.tag===4&&m.stateNode.containerInfo===g.containerInfo&&m.stateNode.implementation===g.implementation){n(y,m.sibling),m=i(m,g.children||[]),m.return=y,y=m;break e}else{n(y,m);break}else t(y,m);m=m.sibling}m=cd(g,y.mode,_),m.return=y,y=m}return l(y);case Kn:return k=g._init,w(y,m,k(g._payload),_)}if(Ga(g))return x(y,m,g,_);if(Oa(g))return v(y,m,g,_);zo(y,g)}return typeof g=="string"&&g!==""||typeof g=="number"?(g=""+g,m!==null&&m.tag===6?(n(y,m.sibling),m=i(m,g),m.return=y,y=m):(n(y,m),m=sd(g,y.mode,_),m.return=y,y=m),l(y)):n(y,m)}return w}var Fi=k8(!0),_8=k8(!1),Os=gr(null),Ps=null,wi=null,A0=null;function M0(){A0=wi=Ps=null}function N0(e){var t=Os.current;we(Os),e._currentValue=t}function v1(e,t,n){for(;e!==null;){var r=e.alternate;if((e.childLanes&t)!==t?(e.childLanes|=t,r!==null&&(r.childLanes|=t)):r!==null&&(r.childLanes&t)!==t&&(r.childLanes|=t),e===n)break;e=e.return}}function Ei(e,t){Ps=e,A0=wi=null,e=e.dependencies,e!==null&&e.firstContext!==null&&(e.lanes&t&&(yt=!0),e.firstContext=null)}function Rt(e){var t=e._currentValue;if(A0!==e)if(e={context:e,memoizedValue:t,next:null},wi===null){if(Ps===null)throw Error(H(308));wi=e,Ps.dependencies={lanes:0,firstContext:e}}else wi=wi.next=e;return t}var Tr=null;function E0(e){Tr===null?Tr=[e]:Tr.push(e)}function S8(e,t,n,r){var i=t.interleaved;return i===null?(n.next=n,E0(t)):(n.next=i.next,i.next=n),t.interleaved=n,In(e,r)}function In(e,t){e.lanes|=t;var n=e.alternate;for(n!==null&&(n.lanes|=t),n=e,e=e.return;e!==null;)e.childLanes|=t,n=e.alternate,n!==null&&(n.childLanes|=t),n=e,e=e.return;return n.tag===3?n.stateNode:null}var Yn=!1;function C0(e){e.updateQueue={baseState:e.memoizedState,firstBaseUpdate:null,lastBaseUpdate:null,shared:{pending:null,interleaved:null,lanes:0},effects:null}}function j8(e,t){e=e.updateQueue,t.updateQueue===e&&(t.updateQueue={baseState:e.baseState,firstBaseUpdate:e.firstBaseUpdate,lastBaseUpdate:e.lastBaseUpdate,shared:e.shared,effects:e.effects})}function Nn(e,t){return{eventTime:e,lane:t,tag:0,payload:null,callback:null,next:null}}function sr(e,t,n){var r=e.updateQueue;if(r===null)return null;if(r=r.shared,ie&2){var i=r.pending;return i===null?t.next=t:(t.next=i.next,i.next=t),r.pending=t,In(e,n)}return i=r.interleaved,i===null?(t.next=t,E0(r)):(t.next=i.next,i.next=t),r.interleaved=t,In(e,n)}function as(e,t,n){if(t=t.updateQueue,t!==null&&(t=t.shared,(n&4194240)!==0)){var r=t.lanes;r&=e.pendingLanes,n|=r,t.lanes=n,v0(e,n)}}function Vh(e,t){var n=e.updateQueue,r=e.alternate;if(r!==null&&(r=r.updateQueue,n===r)){var i=null,a=null;if(n=n.firstBaseUpdate,n!==null){do{var l={eventTime:n.eventTime,lane:n.lane,tag:n.tag,payload:n.payload,callback:n.callback,next:null};a===null?i=a=l:a=a.next=l,n=n.next}while(n!==null);a===null?i=a=t:a=a.next=t}else i=a=t;n={baseState:r.baseState,firstBaseUpdate:i,lastBaseUpdate:a,shared:r.shared,effects:r.effects},e.updateQueue=n;return}e=n.lastBaseUpdate,e===null?n.firstBaseUpdate=t:e.next=t,n.lastBaseUpdate=t}function As(e,t,n,r){var i=e.updateQueue;Yn=!1;var a=i.firstBaseUpdate,l=i.lastBaseUpdate,o=i.shared.pending;if(o!==null){i.shared.pending=null;var s=o,c=s.next;s.next=null,l===null?a=c:l.next=c,l=s;var f=e.alternate;f!==null&&(f=f.updateQueue,o=f.lastBaseUpdate,o!==l&&(o===null?f.firstBaseUpdate=c:o.next=c,f.lastBaseUpdate=s))}if(a!==null){var d=i.baseState;l=0,f=c=s=null,o=a;do{var p=o.lane,h=o.eventTime;if((r&p)===p){f!==null&&(f=f.next={eventTime:h,lane:0,tag:o.tag,payload:o.payload,callback:o.callback,next:null});e:{var x=e,v=o;switch(p=t,h=n,v.tag){case 1:if(x=v.payload,typeof x=="function"){d=x.call(h,d,p);break e}d=x;break e;case 3:x.flags=x.flags&-65537|128;case 0:if(x=v.payload,p=typeof x=="function"?x.call(h,d,p):x,p==null)break e;d=Ae({},d,p);break e;case 2:Yn=!0}}o.callback!==null&&o.lane!==0&&(e.flags|=64,p=i.effects,p===null?i.effects=[o]:p.push(o))}else h={eventTime:h,lane:p,tag:o.tag,payload:o.payload,callback:o.callback,next:null},f===null?(c=f=h,s=d):f=f.next=h,l|=p;if(o=o.next,o===null){if(o=i.shared.pending,o===null)break;p=o,o=p.next,p.next=null,i.lastBaseUpdate=p,i.shared.pending=null}}while(!0);if(f===null&&(s=d),i.baseState=s,i.firstBaseUpdate=c,i.lastBaseUpdate=f,t=i.shared.interleaved,t!==null){i=t;do l|=i.lane,i=i.next;while(i!==t)}else a===null&&(i.shared.lanes=0);qr|=l,e.lanes=l,e.memoizedState=d}}function Xh(e,t,n){if(e=t.effects,t.effects=null,e!==null)for(t=0;t<e.length;t++){var r=e[t],i=r.callback;if(i!==null){if(r.callback=null,r=n,typeof i!="function")throw Error(H(191,i));i.call(r)}}}var po={},mn=gr(po),xl=gr(po),bl=gr(po);function zr(e){if(e===po)throw Error(H(174));return e}function $0(e,t){switch(ve(bl,t),ve(xl,e),ve(mn,po),e=t.nodeType,e){case 9:case 11:t=(t=t.documentElement)?t.namespaceURI:Zd(null,"");break;default:e=e===8?t.parentNode:t,t=e.namespaceURI||null,e=e.tagName,t=Zd(t,e)}we(mn),ve(mn,t)}function Ri(){we(mn),we(xl),we(bl)}function O8(e){zr(bl.current);var t=zr(mn.current),n=Zd(t,e.type);t!==n&&(ve(xl,e),ve(mn,n))}function T0(e){xl.current===e&&(we(mn),we(xl))}var Oe=gr(0);function Ms(e){for(var t=e;t!==null;){if(t.tag===13){var n=t.memoizedState;if(n!==null&&(n=n.dehydrated,n===null||n.data==="$?"||n.data==="$!"))return t}else if(t.tag===19&&t.memoizedProps.revealOrder!==void 0){if(t.flags&128)return t}else if(t.child!==null){t.child.return=t,t=t.child;continue}if(t===e)break;for(;t.sibling===null;){if(t.return===null||t.return===e)return null;t=t.return}t.sibling.return=t.return,t=t.sibling}return null}var nd=[];function z0(){for(var e=0;e<nd.length;e++)nd[e]._workInProgressVersionPrimary=null;nd.length=0}var ls=Bn.ReactCurrentDispatcher,rd=Bn.ReactCurrentBatchConfig,Xr=0,Pe=null,Re=null,Ge=null,Ns=!1,el=!1,wl=0,R9=0;function nt(){throw Error(H(321))}function I0(e,t){if(t===null)return!1;for(var n=0;n<t.length&&n<e.length;n++)if(!rn(e[n],t[n]))return!1;return!0}function D0(e,t,n,r,i,a){if(Xr=a,Pe=t,t.memoizedState=null,t.updateQueue=null,t.lanes=0,ls.current=e===null||e.memoizedState===null?H9:G9,e=n(r,i),el){a=0;do{if(el=!1,wl=0,25<=a)throw Error(H(301));a+=1,Ge=Re=null,t.updateQueue=null,ls.current=V9,e=n(r,i)}while(el)}if(ls.current=Es,t=Re!==null&&Re.next!==null,Xr=0,Ge=Re=Pe=null,Ns=!1,t)throw Error(H(300));return e}function L0(){var e=wl!==0;return wl=0,e}function un(){var e={memoizedState:null,baseState:null,baseQueue:null,queue:null,next:null};return Ge===null?Pe.memoizedState=Ge=e:Ge=Ge.next=e,Ge}function Bt(){if(Re===null){var e=Pe.alternate;e=e!==null?e.memoizedState:null}else e=Re.next;var t=Ge===null?Pe.memoizedState:Ge.next;if(t!==null)Ge=t,Re=e;else{if(e===null)throw Error(H(310));Re=e,e={memoizedState:Re.memoizedState,baseState:Re.baseState,baseQueue:Re.baseQueue,queue:Re.queue,next:null},Ge===null?Pe.memoizedState=Ge=e:Ge=Ge.next=e}return Ge}function kl(e,t){return typeof t=="function"?t(e):t}function id(e){var t=Bt(),n=t.queue;if(n===null)throw Error(H(311));n.lastRenderedReducer=e;var r=Re,i=r.baseQueue,a=n.pending;if(a!==null){if(i!==null){var l=i.next;i.next=a.next,a.next=l}r.baseQueue=i=a,n.pending=null}if(i!==null){a=i.next,r=r.baseState;var o=l=null,s=null,c=a;do{var f=c.lane;if((Xr&f)===f)s!==null&&(s=s.next={lane:0,action:c.action,hasEagerState:c.hasEagerState,eagerState:c.eagerState,next:null}),r=c.hasEagerState?c.eagerState:e(r,c.action);else{var d={lane:f,action:c.action,hasEagerState:c.hasEagerState,eagerState:c.eagerState,next:null};s===null?(o=s=d,l=r):s=s.next=d,Pe.lanes|=f,qr|=f}c=c.next}while(c!==null&&c!==a);s===null?l=r:s.next=o,rn(r,t.memoizedState)||(yt=!0),t.memoizedState=r,t.baseState=l,t.baseQueue=s,n.lastRenderedState=r}if(e=n.interleaved,e!==null){i=e;do a=i.lane,Pe.lanes|=a,qr|=a,i=i.next;while(i!==e)}else i===null&&(n.lanes=0);return[t.memoizedState,n.dispatch]}function ad(e){var t=Bt(),n=t.queue;if(n===null)throw Error(H(311));n.lastRenderedReducer=e;var r=n.dispatch,i=n.pending,a=t.memoizedState;if(i!==null){n.pending=null;var l=i=i.next;do a=e(a,l.action),l=l.next;while(l!==i);rn(a,t.memoizedState)||(yt=!0),t.memoizedState=a,t.baseQueue===null&&(t.baseState=a),n.lastRenderedState=a}return[a,r]}function P8(){}function A8(e,t){var n=Pe,r=Bt(),i=t(),a=!rn(r.memoizedState,i);if(a&&(r.memoizedState=i,yt=!0),r=r.queue,F0(E8.bind(null,n,r,e),[e]),r.getSnapshot!==t||a||Ge!==null&&Ge.memoizedState.tag&1){if(n.flags|=2048,_l(9,N8.bind(null,n,r,i,t),void 0,null),Xe===null)throw Error(H(349));Xr&30||M8(n,t,i)}return i}function M8(e,t,n){e.flags|=16384,e={getSnapshot:t,value:n},t=Pe.updateQueue,t===null?(t={lastEffect:null,stores:null},Pe.updateQueue=t,t.stores=[e]):(n=t.stores,n===null?t.stores=[e]:n.push(e))}function N8(e,t,n,r){t.value=n,t.getSnapshot=r,C8(t)&&$8(e)}function E8(e,t,n){return n(function(){C8(t)&&$8(e)})}function C8(e){var t=e.getSnapshot;e=e.value;try{var n=t();return!rn(e,n)}catch{return!0}}function $8(e){var t=In(e,1);t!==null&&tn(t,e,1,-1)}function qh(e){var t=un();return typeof e=="function"&&(e=e()),t.memoizedState=t.baseState=e,e={pending:null,interleaved:null,lanes:0,dispatch:null,lastRenderedReducer:kl,lastRenderedState:e},t.queue=e,e=e.dispatch=U9.bind(null,Pe,e),[t.memoizedState,e]}function _l(e,t,n,r){return e={tag:e,create:t,destroy:n,deps:r,next:null},t=Pe.updateQueue,t===null?(t={lastEffect:null,stores:null},Pe.updateQueue=t,t.lastEffect=e.next=e):(n=t.lastEffect,n===null?t.lastEffect=e.next=e:(r=n.next,n.next=e,e.next=r,t.lastEffect=e)),e}function T8(){return Bt().memoizedState}function os(e,t,n,r){var i=un();Pe.flags|=e,i.memoizedState=_l(1|t,n,void 0,r===void 0?null:r)}function Bc(e,t,n,r){var i=Bt();r=r===void 0?null:r;var a=void 0;if(Re!==null){var l=Re.memoizedState;if(a=l.destroy,r!==null&&I0(r,l.deps)){i.memoizedState=_l(t,n,a,r);return}}Pe.flags|=e,i.memoizedState=_l(1|t,n,a,r)}function Kh(e,t){return os(8390656,8,e,t)}function F0(e,t){return Bc(2048,8,e,t)}function z8(e,t){return Bc(4,2,e,t)}function I8(e,t){return Bc(4,4,e,t)}function D8(e,t){if(typeof t=="function")return e=e(),t(e),function(){t(null)};if(t!=null)return e=e(),t.current=e,function(){t.current=null}}function L8(e,t,n){return n=n!=null?n.concat([e]):null,Bc(4,4,D8.bind(null,t,e),n)}function R0(){}function F8(e,t){var n=Bt();t=t===void 0?null:t;var r=n.memoizedState;return r!==null&&t!==null&&I0(t,r[1])?r[0]:(n.memoizedState=[e,t],e)}function R8(e,t){var n=Bt();t=t===void 0?null:t;var r=n.memoizedState;return r!==null&&t!==null&&I0(t,r[1])?r[0]:(e=e(),n.memoizedState=[e,t],e)}function B8(e,t,n){return Xr&21?(rn(n,t)||(n=Vy(),Pe.lanes|=n,qr|=n,e.baseState=!0),t):(e.baseState&&(e.baseState=!1,yt=!0),e.memoizedState=n)}function B9(e,t){var n=de;de=n!==0&&4>n?n:4,e(!0);var r=rd.transition;rd.transition={};try{e(!1),t()}finally{de=n,rd.transition=r}}function W8(){return Bt().memoizedState}function W9(e,t,n){var r=ur(e);if(n={lane:r,action:n,hasEagerState:!1,eagerState:null,next:null},U8(e))H8(t,n);else if(n=S8(e,t,n,r),n!==null){var i=dt();tn(n,e,r,i),G8(n,t,r)}}function U9(e,t,n){var r=ur(e),i={lane:r,action:n,hasEagerState:!1,eagerState:null,next:null};if(U8(e))H8(t,i);else{var a=e.alternate;if(e.lanes===0&&(a===null||a.lanes===0)&&(a=t.lastRenderedReducer,a!==null))try{var l=t.lastRenderedState,o=a(l,n);if(i.hasEagerState=!0,i.eagerState=o,rn(o,l)){var s=t.interleaved;s===null?(i.next=i,E0(t)):(i.next=s.next,s.next=i),t.interleaved=i;return}}catch{}finally{}n=S8(e,t,i,r),n!==null&&(i=dt(),tn(n,e,r,i),G8(n,t,r))}}function U8(e){var t=e.alternate;return e===Pe||t!==null&&t===Pe}function H8(e,t){el=Ns=!0;var n=e.pending;n===null?t.next=t:(t.next=n.next,n.next=t),e.pending=t}function G8(e,t,n){if(n&4194240){var r=t.lanes;r&=e.pendingLanes,n|=r,t.lanes=n,v0(e,n)}}var Es={readContext:Rt,useCallback:nt,useContext:nt,useEffect:nt,useImperativeHandle:nt,useInsertionEffect:nt,useLayoutEffect:nt,useMemo:nt,useReducer:nt,useRef:nt,useState:nt,useDebugValue:nt,useDeferredValue:nt,useTransition:nt,useMutableSource:nt,useSyncExternalStore:nt,useId:nt,unstable_isNewReconciler:!1},H9={readContext:Rt,useCallback:function(e,t){return un().memoizedState=[e,t===void 0?null:t],e},useContext:Rt,useEffect:Kh,useImperativeHandle:function(e,t,n){return n=n!=null?n.concat([e]):null,os(4194308,4,D8.bind(null,t,e),n)},useLayoutEffect:function(e,t){return os(4194308,4,e,t)},useInsertionEffect:function(e,t){return os(4,2,e,t)},useMemo:function(e,t){var n=un();return t=t===void 0?null:t,e=e(),n.memoizedState=[e,t],e},useReducer:function(e,t,n){var r=un();return t=n!==void 0?n(t):t,r.memoizedState=r.baseState=t,e={pending:null,interleaved:null,lanes:0,dispatch:null,lastRenderedReducer:e,lastRenderedState:t},r.queue=e,e=e.dispatch=W9.bind(null,Pe,e),[r.memoizedState,e]},useRef:function(e){var t=un();return e={current:e},t.memoizedState=e},useState:qh,useDebugValue:R0,useDeferredValue:function(e){return un().memoizedState=e},useTransition:function(){var e=qh(!1),t=e[0];return e=B9.bind(null,e[1]),un().memoizedState=e,[t,e]},useMutableSource:function(){},useSyncExternalStore:function(e,t,n){var r=Pe,i=un();if(_e){if(n===void 0)throw Error(H(407));n=n()}else{if(n=t(),Xe===null)throw Error(H(349));Xr&30||M8(r,t,n)}i.memoizedState=n;var a={value:n,getSnapshot:t};return i.queue=a,Kh(E8.bind(null,r,a,e),[e]),r.flags|=2048,_l(9,N8.bind(null,r,a,n,t),void 0,null),n},useId:function(){var e=un(),t=Xe.identifierPrefix;if(_e){var n=On,r=jn;n=(r&~(1<<32-en(r)-1)).toString(32)+n,t=":"+t+"R"+n,n=wl++,0<n&&(t+="H"+n.toString(32)),t+=":"}else n=R9++,t=":"+t+"r"+n.toString(32)+":";return e.memoizedState=t},unstable_isNewReconciler:!1},G9={readContext:Rt,useCallback:F8,useContext:Rt,useEffect:F0,useImperativeHandle:L8,useInsertionEffect:z8,useLayoutEffect:I8,useMemo:R8,useReducer:id,useRef:T8,useState:function(){return id(kl)},useDebugValue:R0,useDeferredValue:function(e){var t=Bt();return B8(t,Re.memoizedState,e)},useTransition:function(){var e=id(kl)[0],t=Bt().memoizedState;return[e,t]},useMutableSource:P8,useSyncExternalStore:A8,useId:W8,unstable_isNewReconciler:!1},V9={readContext:Rt,useCallback:F8,useContext:Rt,useEffect:F0,useImperativeHandle:L8,useInsertionEffect:z8,useLayoutEffect:I8,useMemo:R8,useReducer:ad,useRef:T8,useState:function(){return ad(kl)},useDebugValue:R0,useDeferredValue:function(e){var t=Bt();return Re===null?t.memoizedState=e:B8(t,Re.memoizedState,e)},useTransition:function(){var e=ad(kl)[0],t=Bt().memoizedState;return[e,t]},useMutableSource:P8,useSyncExternalStore:A8,useId:W8,unstable_isNewReconciler:!1};function Xt(e,t){if(e&&e.defaultProps){t=Ae({},t),e=e.defaultProps;for(var n in e)t[n]===void 0&&(t[n]=e[n]);return t}return t}function g1(e,t,n,r){t=e.memoizedState,n=n(r,t),n=n==null?t:Ae({},t,n),e.memoizedState=n,e.lanes===0&&(e.updateQueue.baseState=n)}var Wc={isMounted:function(e){return(e=e._reactInternals)?ni(e)===e:!1},enqueueSetState:function(e,t,n){e=e._reactInternals;var r=dt(),i=ur(e),a=Nn(r,i);a.payload=t,n!=null&&(a.callback=n),t=sr(e,a,i),t!==null&&(tn(t,e,i,r),as(t,e,i))},enqueueReplaceState:function(e,t,n){e=e._reactInternals;var r=dt(),i=ur(e),a=Nn(r,i);a.tag=1,a.payload=t,n!=null&&(a.callback=n),t=sr(e,a,i),t!==null&&(tn(t,e,i,r),as(t,e,i))},enqueueForceUpdate:function(e,t){e=e._reactInternals;var n=dt(),r=ur(e),i=Nn(n,r);i.tag=2,t!=null&&(i.callback=t),t=sr(e,i,r),t!==null&&(tn(t,e,r,n),as(t,e,r))}};function Yh(e,t,n,r,i,a,l){return e=e.stateNode,typeof e.shouldComponentUpdate=="function"?e.shouldComponentUpdate(r,a,l):t.prototype&&t.prototype.isPureReactComponent?!ml(n,r)||!ml(i,a):!0}function V8(e,t,n){var r=!1,i=mr,a=t.contextType;return typeof a=="object"&&a!==null?a=Rt(a):(i=xt(t)?Gr:st.current,r=t.contextTypes,a=(r=r!=null)?Di(e,i):mr),t=new t(n,a),e.memoizedState=t.state!==null&&t.state!==void 0?t.state:null,t.updater=Wc,e.stateNode=t,t._reactInternals=e,r&&(e=e.stateNode,e.__reactInternalMemoizedUnmaskedChildContext=i,e.__reactInternalMemoizedMaskedChildContext=a),t}function Zh(e,t,n,r){e=t.state,typeof t.componentWillReceiveProps=="function"&&t.componentWillReceiveProps(n,r),typeof t.UNSAFE_componentWillReceiveProps=="function"&&t.UNSAFE_componentWillReceiveProps(n,r),t.state!==e&&Wc.enqueueReplaceState(t,t.state,null)}function x1(e,t,n,r){var i=e.stateNode;i.props=n,i.state=e.memoizedState,i.refs={},C0(e);var a=t.contextType;typeof a=="object"&&a!==null?i.context=Rt(a):(a=xt(t)?Gr:st.current,i.context=Di(e,a)),i.state=e.memoizedState,a=t.getDerivedStateFromProps,typeof a=="function"&&(g1(e,t,a,n),i.state=e.memoizedState),typeof t.getDerivedStateFromProps=="function"||typeof i.getSnapshotBeforeUpdate=="function"||typeof i.UNSAFE_componentWillMount!="function"&&typeof i.componentWillMount!="function"||(t=i.state,typeof i.componentWillMount=="function"&&i.componentWillMount(),typeof i.UNSAFE_componentWillMount=="function"&&i.UNSAFE_componentWillMount(),t!==i.state&&Wc.enqueueReplaceState(i,i.state,null),As(e,n,i,r),i.state=e.memoizedState),typeof i.componentDidMount=="function"&&(e.flags|=4194308)}function Bi(e,t){try{var n="",r=t;do n+=b4(r),r=r.return;while(r);var i=n}catch(a){i=`
Error generating stack: `+a.message+`
`+a.stack}return{value:e,source:t,stack:i,digest:null}}function ld(e,t,n){return{value:e,source:null,stack:n??null,digest:t??null}}function b1(e,t){try{console.error(t.value)}catch(n){setTimeout(function(){throw n})}}var X9=typeof WeakMap=="function"?WeakMap:Map;function X8(e,t,n){n=Nn(-1,n),n.tag=3,n.payload={element:null};var r=t.value;return n.callback=function(){$s||($s=!0,N1=r),b1(e,t)},n}function q8(e,t,n){n=Nn(-1,n),n.tag=3;var r=e.type.getDerivedStateFromError;if(typeof r=="function"){var i=t.value;n.payload=function(){return r(i)},n.callback=function(){b1(e,t)}}var a=e.stateNode;return a!==null&&typeof a.componentDidCatch=="function"&&(n.callback=function(){b1(e,t),typeof r!="function"&&(cr===null?cr=new Set([this]):cr.add(this));var l=t.stack;this.componentDidCatch(t.value,{componentStack:l!==null?l:""})}),n}function Qh(e,t,n){var r=e.pingCache;if(r===null){r=e.pingCache=new X9;var i=new Set;r.set(t,i)}else i=r.get(t),i===void 0&&(i=new Set,r.set(t,i));i.has(n)||(i.add(n),e=ox.bind(null,e,t,n),t.then(e,e))}function Jh(e){do{var t;if((t=e.tag===13)&&(t=e.memoizedState,t=t!==null?t.dehydrated!==null:!0),t)return e;e=e.return}while(e!==null);return null}function e7(e,t,n,r,i){return e.mode&1?(e.flags|=65536,e.lanes=i,e):(e===t?e.flags|=65536:(e.flags|=128,n.flags|=131072,n.flags&=-52805,n.tag===1&&(n.alternate===null?n.tag=17:(t=Nn(-1,1),t.tag=2,sr(n,t,1))),n.lanes|=1),e)}var q9=Bn.ReactCurrentOwner,yt=!1;function ct(e,t,n,r){t.child=e===null?_8(t,null,n,r):Fi(t,e.child,n,r)}function t7(e,t,n,r,i){n=n.render;var a=t.ref;return Ei(t,i),r=D0(e,t,n,r,a,i),n=L0(),e!==null&&!yt?(t.updateQueue=e.updateQueue,t.flags&=-2053,e.lanes&=~i,Dn(e,t,i)):(_e&&n&&j0(t),t.flags|=1,ct(e,t,r,i),t.child)}function n7(e,t,n,r,i){if(e===null){var a=n.type;return typeof a=="function"&&!q0(a)&&a.defaultProps===void 0&&n.compare===null&&n.defaultProps===void 0?(t.tag=15,t.type=a,K8(e,t,a,r,i)):(e=ds(n.type,null,r,t,t.mode,i),e.ref=t.ref,e.return=t,t.child=e)}if(a=e.child,!(e.lanes&i)){var l=a.memoizedProps;if(n=n.compare,n=n!==null?n:ml,n(l,r)&&e.ref===t.ref)return Dn(e,t,i)}return t.flags|=1,e=dr(a,r),e.ref=t.ref,e.return=t,t.child=e}function K8(e,t,n,r,i){if(e!==null){var a=e.memoizedProps;if(ml(a,r)&&e.ref===t.ref)if(yt=!1,t.pendingProps=r=a,(e.lanes&i)!==0)e.flags&131072&&(yt=!0);else return t.lanes=e.lanes,Dn(e,t,i)}return w1(e,t,n,r,i)}function Y8(e,t,n){var r=t.pendingProps,i=r.children,a=e!==null?e.memoizedState:null;if(r.mode==="hidden")if(!(t.mode&1))t.memoizedState={baseLanes:0,cachePool:null,transitions:null},ve(_i,_t),_t|=n;else{if(!(n&1073741824))return e=a!==null?a.baseLanes|n:n,t.lanes=t.childLanes=1073741824,t.memoizedState={baseLanes:e,cachePool:null,transitions:null},t.updateQueue=null,ve(_i,_t),_t|=e,null;t.memoizedState={baseLanes:0,cachePool:null,transitions:null},r=a!==null?a.baseLanes:n,ve(_i,_t),_t|=r}else a!==null?(r=a.baseLanes|n,t.memoizedState=null):r=n,ve(_i,_t),_t|=r;return ct(e,t,i,n),t.child}function Z8(e,t){var n=t.ref;(e===null&&n!==null||e!==null&&e.ref!==n)&&(t.flags|=512,t.flags|=2097152)}function w1(e,t,n,r,i){var a=xt(n)?Gr:st.current;return a=Di(t,a),Ei(t,i),n=D0(e,t,n,r,a,i),r=L0(),e!==null&&!yt?(t.updateQueue=e.updateQueue,t.flags&=-2053,e.lanes&=~i,Dn(e,t,i)):(_e&&r&&j0(t),t.flags|=1,ct(e,t,n,i),t.child)}function r7(e,t,n,r,i){if(xt(n)){var a=!0;_s(t)}else a=!1;if(Ei(t,i),t.stateNode===null)ss(e,t),V8(t,n,r),x1(t,n,r,i),r=!0;else if(e===null){var l=t.stateNode,o=t.memoizedProps;l.props=o;var s=l.context,c=n.contextType;typeof c=="object"&&c!==null?c=Rt(c):(c=xt(n)?Gr:st.current,c=Di(t,c));var f=n.getDerivedStateFromProps,d=typeof f=="function"||typeof l.getSnapshotBeforeUpdate=="function";d||typeof l.UNSAFE_componentWillReceiveProps!="function"&&typeof l.componentWillReceiveProps!="function"||(o!==r||s!==c)&&Zh(t,l,r,c),Yn=!1;var p=t.memoizedState;l.state=p,As(t,r,l,i),s=t.memoizedState,o!==r||p!==s||gt.current||Yn?(typeof f=="function"&&(g1(t,n,f,r),s=t.memoizedState),(o=Yn||Yh(t,n,o,r,p,s,c))?(d||typeof l.UNSAFE_componentWillMount!="function"&&typeof l.componentWillMount!="function"||(typeof l.componentWillMount=="function"&&l.componentWillMount(),typeof l.UNSAFE_componentWillMount=="function"&&l.UNSAFE_componentWillMount()),typeof l.componentDidMount=="function"&&(t.flags|=4194308)):(typeof l.componentDidMount=="function"&&(t.flags|=4194308),t.memoizedProps=r,t.memoizedState=s),l.props=r,l.state=s,l.context=c,r=o):(typeof l.componentDidMount=="function"&&(t.flags|=4194308),r=!1)}else{l=t.stateNode,j8(e,t),o=t.memoizedProps,c=t.type===t.elementType?o:Xt(t.type,o),l.props=c,d=t.pendingProps,p=l.context,s=n.contextType,typeof s=="object"&&s!==null?s=Rt(s):(s=xt(n)?Gr:st.current,s=Di(t,s));var h=n.getDerivedStateFromProps;(f=typeof h=="function"||typeof l.getSnapshotBeforeUpdate=="function")||typeof l.UNSAFE_componentWillReceiveProps!="function"&&typeof l.componentWillReceiveProps!="function"||(o!==d||p!==s)&&Zh(t,l,r,s),Yn=!1,p=t.memoizedState,l.state=p,As(t,r,l,i);var x=t.memoizedState;o!==d||p!==x||gt.current||Yn?(typeof h=="function"&&(g1(t,n,h,r),x=t.memoizedState),(c=Yn||Yh(t,n,c,r,p,x,s)||!1)?(f||typeof l.UNSAFE_componentWillUpdate!="function"&&typeof l.componentWillUpdate!="function"||(typeof l.componentWillUpdate=="function"&&l.componentWillUpdate(r,x,s),typeof l.UNSAFE_componentWillUpdate=="function"&&l.UNSAFE_componentWillUpdate(r,x,s)),typeof l.componentDidUpdate=="function"&&(t.flags|=4),typeof l.getSnapshotBeforeUpdate=="function"&&(t.flags|=1024)):(typeof l.componentDidUpdate!="function"||o===e.memoizedProps&&p===e.memoizedState||(t.flags|=4),typeof l.getSnapshotBeforeUpdate!="function"||o===e.memoizedProps&&p===e.memoizedState||(t.flags|=1024),t.memoizedProps=r,t.memoizedState=x),l.props=r,l.state=x,l.context=s,r=c):(typeof l.componentDidUpdate!="function"||o===e.memoizedProps&&p===e.memoizedState||(t.flags|=4),typeof l.getSnapshotBeforeUpdate!="function"||o===e.memoizedProps&&p===e.memoizedState||(t.flags|=1024),r=!1)}return k1(e,t,n,r,a,i)}function k1(e,t,n,r,i,a){Z8(e,t);var l=(t.flags&128)!==0;if(!r&&!l)return i&&Wh(t,n,!1),Dn(e,t,a);r=t.stateNode,q9.current=t;var o=l&&typeof n.getDerivedStateFromError!="function"?null:r.render();return t.flags|=1,e!==null&&l?(t.child=Fi(t,e.child,null,a),t.child=Fi(t,null,o,a)):ct(e,t,o,a),t.memoizedState=r.state,i&&Wh(t,n,!0),t.child}function Q8(e){var t=e.stateNode;t.pendingContext?Bh(e,t.pendingContext,t.pendingContext!==t.context):t.context&&Bh(e,t.context,!1),$0(e,t.containerInfo)}function i7(e,t,n,r,i){return Li(),P0(i),t.flags|=256,ct(e,t,n,r),t.child}var _1={dehydrated:null,treeContext:null,retryLane:0};function S1(e){return{baseLanes:e,cachePool:null,transitions:null}}function J8(e,t,n){var r=t.pendingProps,i=Oe.current,a=!1,l=(t.flags&128)!==0,o;if((o=l)||(o=e!==null&&e.memoizedState===null?!1:(i&2)!==0),o?(a=!0,t.flags&=-129):(e===null||e.memoizedState!==null)&&(i|=1),ve(Oe,i&1),e===null)return y1(t),e=t.memoizedState,e!==null&&(e=e.dehydrated,e!==null)?(t.mode&1?e.data==="$!"?t.lanes=8:t.lanes=1073741824:t.lanes=1,null):(l=r.children,e=r.fallback,a?(r=t.mode,a=t.child,l={mode:"hidden",children:l},!(r&1)&&a!==null?(a.childLanes=0,a.pendingProps=l):a=Gc(l,r,0,null),e=Br(e,r,n,null),a.return=t,e.return=t,a.sibling=e,t.child=a,t.child.memoizedState=S1(n),t.memoizedState=_1,e):B0(t,l));if(i=e.memoizedState,i!==null&&(o=i.dehydrated,o!==null))return K9(e,t,l,r,o,i,n);if(a){a=r.fallback,l=t.mode,i=e.child,o=i.sibling;var s={mode:"hidden",children:r.children};return!(l&1)&&t.child!==i?(r=t.child,r.childLanes=0,r.pendingProps=s,t.deletions=null):(r=dr(i,s),r.subtreeFlags=i.subtreeFlags&14680064),o!==null?a=dr(o,a):(a=Br(a,l,n,null),a.flags|=2),a.return=t,r.return=t,r.sibling=a,t.child=r,r=a,a=t.child,l=e.child.memoizedState,l=l===null?S1(n):{baseLanes:l.baseLanes|n,cachePool:null,transitions:l.transitions},a.memoizedState=l,a.childLanes=e.childLanes&~n,t.memoizedState=_1,r}return a=e.child,e=a.sibling,r=dr(a,{mode:"visible",children:r.children}),!(t.mode&1)&&(r.lanes=n),r.return=t,r.sibling=null,e!==null&&(n=t.deletions,n===null?(t.deletions=[e],t.flags|=16):n.push(e)),t.child=r,t.memoizedState=null,r}function B0(e,t){return t=Gc({mode:"visible",children:t},e.mode,0,null),t.return=e,e.child=t}function Io(e,t,n,r){return r!==null&&P0(r),Fi(t,e.child,null,n),e=B0(t,t.pendingProps.children),e.flags|=2,t.memoizedState=null,e}function K9(e,t,n,r,i,a,l){if(n)return t.flags&256?(t.flags&=-257,r=ld(Error(H(422))),Io(e,t,l,r)):t.memoizedState!==null?(t.child=e.child,t.flags|=128,null):(a=r.fallback,i=t.mode,r=Gc({mode:"visible",children:r.children},i,0,null),a=Br(a,i,l,null),a.flags|=2,r.return=t,a.return=t,r.sibling=a,t.child=r,t.mode&1&&Fi(t,e.child,null,l),t.child.memoizedState=S1(l),t.memoizedState=_1,a);if(!(t.mode&1))return Io(e,t,l,null);if(i.data==="$!"){if(r=i.nextSibling&&i.nextSibling.dataset,r)var o=r.dgst;return r=o,a=Error(H(419)),r=ld(a,r,void 0),Io(e,t,l,r)}if(o=(l&e.childLanes)!==0,yt||o){if(r=Xe,r!==null){switch(l&-l){case 4:i=2;break;case 16:i=8;break;case 64:case 128:case 256:case 512:case 1024:case 2048:case 4096:case 8192:case 16384:case 32768:case 65536:case 131072:case 262144:case 524288:case 1048576:case 2097152:case 4194304:case 8388608:case 16777216:case 33554432:case 67108864:i=32;break;case 536870912:i=268435456;break;default:i=0}i=i&(r.suspendedLanes|l)?0:i,i!==0&&i!==a.retryLane&&(a.retryLane=i,In(e,i),tn(r,e,i,-1))}return X0(),r=ld(Error(H(421))),Io(e,t,l,r)}return i.data==="$?"?(t.flags|=128,t.child=e.child,t=sx.bind(null,e),i._reactRetry=t,null):(e=a.treeContext,Ot=or(i.nextSibling),Pt=t,_e=!0,Zt=null,e!==null&&(Tt[zt++]=jn,Tt[zt++]=On,Tt[zt++]=Vr,jn=e.id,On=e.overflow,Vr=t),t=B0(t,r.children),t.flags|=4096,t)}function a7(e,t,n){e.lanes|=t;var r=e.alternate;r!==null&&(r.lanes|=t),v1(e.return,t,n)}function od(e,t,n,r,i){var a=e.memoizedState;a===null?e.memoizedState={isBackwards:t,rendering:null,renderingStartTime:0,last:r,tail:n,tailMode:i}:(a.isBackwards=t,a.rendering=null,a.renderingStartTime=0,a.last=r,a.tail=n,a.tailMode=i)}function e6(e,t,n){var r=t.pendingProps,i=r.revealOrder,a=r.tail;if(ct(e,t,r.children,n),r=Oe.current,r&2)r=r&1|2,t.flags|=128;else{if(e!==null&&e.flags&128)e:for(e=t.child;e!==null;){if(e.tag===13)e.memoizedState!==null&&a7(e,n,t);else if(e.tag===19)a7(e,n,t);else if(e.child!==null){e.child.return=e,e=e.child;continue}if(e===t)break e;for(;e.sibling===null;){if(e.return===null||e.return===t)break e;e=e.return}e.sibling.return=e.return,e=e.sibling}r&=1}if(ve(Oe,r),!(t.mode&1))t.memoizedState=null;else switch(i){case"forwards":for(n=t.child,i=null;n!==null;)e=n.alternate,e!==null&&Ms(e)===null&&(i=n),n=n.sibling;n=i,n===null?(i=t.child,t.child=null):(i=n.sibling,n.sibling=null),od(t,!1,i,n,a);break;case"backwards":for(n=null,i=t.child,t.child=null;i!==null;){if(e=i.alternate,e!==null&&Ms(e)===null){t.child=i;break}e=i.sibling,i.sibling=n,n=i,i=e}od(t,!0,n,null,a);break;case"together":od(t,!1,null,null,void 0);break;default:t.memoizedState=null}return t.child}function ss(e,t){!(t.mode&1)&&e!==null&&(e.alternate=null,t.alternate=null,t.flags|=2)}function Dn(e,t,n){if(e!==null&&(t.dependencies=e.dependencies),qr|=t.lanes,!(n&t.childLanes))return null;if(e!==null&&t.child!==e.child)throw Error(H(153));if(t.child!==null){for(e=t.child,n=dr(e,e.pendingProps),t.child=n,n.return=t;e.sibling!==null;)e=e.sibling,n=n.sibling=dr(e,e.pendingProps),n.return=t;n.sibling=null}return t.child}function Y9(e,t,n){switch(t.tag){case 3:Q8(t),Li();break;case 5:O8(t);break;case 1:xt(t.type)&&_s(t);break;case 4:$0(t,t.stateNode.containerInfo);break;case 10:var r=t.type._context,i=t.memoizedProps.value;ve(Os,r._currentValue),r._currentValue=i;break;case 13:if(r=t.memoizedState,r!==null)return r.dehydrated!==null?(ve(Oe,Oe.current&1),t.flags|=128,null):n&t.child.childLanes?J8(e,t,n):(ve(Oe,Oe.current&1),e=Dn(e,t,n),e!==null?e.sibling:null);ve(Oe,Oe.current&1);break;case 19:if(r=(n&t.childLanes)!==0,e.flags&128){if(r)return e6(e,t,n);t.flags|=128}if(i=t.memoizedState,i!==null&&(i.rendering=null,i.tail=null,i.lastEffect=null),ve(Oe,Oe.current),r)break;return null;case 22:case 23:return t.lanes=0,Y8(e,t,n)}return Dn(e,t,n)}var t6,j1,n6,r6;t6=function(e,t){for(var n=t.child;n!==null;){if(n.tag===5||n.tag===6)e.appendChild(n.stateNode);else if(n.tag!==4&&n.child!==null){n.child.return=n,n=n.child;continue}if(n===t)break;for(;n.sibling===null;){if(n.return===null||n.return===t)return;n=n.return}n.sibling.return=n.return,n=n.sibling}};j1=function(){};n6=function(e,t,n,r){var i=e.memoizedProps;if(i!==r){e=t.stateNode,zr(mn.current);var a=null;switch(n){case"input":i=Xd(e,i),r=Xd(e,r),a=[];break;case"select":i=Ae({},i,{value:void 0}),r=Ae({},r,{value:void 0}),a=[];break;case"textarea":i=Yd(e,i),r=Yd(e,r),a=[];break;default:typeof i.onClick!="function"&&typeof r.onClick=="function"&&(e.onclick=ws)}Qd(n,r);var l;n=null;for(c in i)if(!r.hasOwnProperty(c)&&i.hasOwnProperty(c)&&i[c]!=null)if(c==="style"){var o=i[c];for(l in o)o.hasOwnProperty(l)&&(n||(n={}),n[l]="")}else c!=="dangerouslySetInnerHTML"&&c!=="children"&&c!=="suppressContentEditableWarning"&&c!=="suppressHydrationWarning"&&c!=="autoFocus"&&(sl.hasOwnProperty(c)?a||(a=[]):(a=a||[]).push(c,null));for(c in r){var s=r[c];if(o=i!=null?i[c]:void 0,r.hasOwnProperty(c)&&s!==o&&(s!=null||o!=null))if(c==="style")if(o){for(l in o)!o.hasOwnProperty(l)||s&&s.hasOwnProperty(l)||(n||(n={}),n[l]="");for(l in s)s.hasOwnProperty(l)&&o[l]!==s[l]&&(n||(n={}),n[l]=s[l])}else n||(a||(a=[]),a.push(c,n)),n=s;else c==="dangerouslySetInnerHTML"?(s=s?s.__html:void 0,o=o?o.__html:void 0,s!=null&&o!==s&&(a=a||[]).push(c,s)):c==="children"?typeof s!="string"&&typeof s!="number"||(a=a||[]).push(c,""+s):c!=="suppressContentEditableWarning"&&c!=="suppressHydrationWarning"&&(sl.hasOwnProperty(c)?(s!=null&&c==="onScroll"&&ge("scroll",e),a||o===s||(a=[])):(a=a||[]).push(c,s))}n&&(a=a||[]).push("style",n);var c=a;(t.updateQueue=c)&&(t.flags|=4)}};r6=function(e,t,n,r){n!==r&&(t.flags|=4)};function Ca(e,t){if(!_e)switch(e.tailMode){case"hidden":t=e.tail;for(var n=null;t!==null;)t.alternate!==null&&(n=t),t=t.sibling;n===null?e.tail=null:n.sibling=null;break;case"collapsed":n=e.tail;for(var r=null;n!==null;)n.alternate!==null&&(r=n),n=n.sibling;r===null?t||e.tail===null?e.tail=null:e.tail.sibling=null:r.sibling=null}}function rt(e){var t=e.alternate!==null&&e.alternate.child===e.child,n=0,r=0;if(t)for(var i=e.child;i!==null;)n|=i.lanes|i.childLanes,r|=i.subtreeFlags&14680064,r|=i.flags&14680064,i.return=e,i=i.sibling;else for(i=e.child;i!==null;)n|=i.lanes|i.childLanes,r|=i.subtreeFlags,r|=i.flags,i.return=e,i=i.sibling;return e.subtreeFlags|=r,e.childLanes=n,t}function Z9(e,t,n){var r=t.pendingProps;switch(O0(t),t.tag){case 2:case 16:case 15:case 0:case 11:case 7:case 8:case 12:case 9:case 14:return rt(t),null;case 1:return xt(t.type)&&ks(),rt(t),null;case 3:return r=t.stateNode,Ri(),we(gt),we(st),z0(),r.pendingContext&&(r.context=r.pendingContext,r.pendingContext=null),(e===null||e.child===null)&&(To(t)?t.flags|=4:e===null||e.memoizedState.isDehydrated&&!(t.flags&256)||(t.flags|=1024,Zt!==null&&($1(Zt),Zt=null))),j1(e,t),rt(t),null;case 5:T0(t);var i=zr(bl.current);if(n=t.type,e!==null&&t.stateNode!=null)n6(e,t,n,r,i),e.ref!==t.ref&&(t.flags|=512,t.flags|=2097152);else{if(!r){if(t.stateNode===null)throw Error(H(166));return rt(t),null}if(e=zr(mn.current),To(t)){r=t.stateNode,n=t.type;var a=t.memoizedProps;switch(r[dn]=t,r[gl]=a,e=(t.mode&1)!==0,n){case"dialog":ge("cancel",r),ge("close",r);break;case"iframe":case"object":case"embed":ge("load",r);break;case"video":case"audio":for(i=0;i<Xa.length;i++)ge(Xa[i],r);break;case"source":ge("error",r);break;case"img":case"image":case"link":ge("error",r),ge("load",r);break;case"details":ge("toggle",r);break;case"input":hh(r,a),ge("invalid",r);break;case"select":r._wrapperState={wasMultiple:!!a.multiple},ge("invalid",r);break;case"textarea":yh(r,a),ge("invalid",r)}Qd(n,a),i=null;for(var l in a)if(a.hasOwnProperty(l)){var o=a[l];l==="children"?typeof o=="string"?r.textContent!==o&&(a.suppressHydrationWarning!==!0&&$o(r.textContent,o,e),i=["children",o]):typeof o=="number"&&r.textContent!==""+o&&(a.suppressHydrationWarning!==!0&&$o(r.textContent,o,e),i=["children",""+o]):sl.hasOwnProperty(l)&&o!=null&&l==="onScroll"&&ge("scroll",r)}switch(n){case"input":jo(r),mh(r,a,!0);break;case"textarea":jo(r),vh(r);break;case"select":case"option":break;default:typeof a.onClick=="function"&&(r.onclick=ws)}r=i,t.updateQueue=r,r!==null&&(t.flags|=4)}else{l=i.nodeType===9?i:i.ownerDocument,e==="http://www.w3.org/1999/xhtml"&&(e=Ey(n)),e==="http://www.w3.org/1999/xhtml"?n==="script"?(e=l.createElement("div"),e.innerHTML="<script><\/script>",e=e.removeChild(e.firstChild)):typeof r.is=="string"?e=l.createElement(n,{is:r.is}):(e=l.createElement(n),n==="select"&&(l=e,r.multiple?l.multiple=!0:r.size&&(l.size=r.size))):e=l.createElementNS(e,n),e[dn]=t,e[gl]=r,t6(e,t,!1,!1),t.stateNode=e;e:{switch(l=Jd(n,r),n){case"dialog":ge("cancel",e),ge("close",e),i=r;break;case"iframe":case"object":case"embed":ge("load",e),i=r;break;case"video":case"audio":for(i=0;i<Xa.length;i++)ge(Xa[i],e);i=r;break;case"source":ge("error",e),i=r;break;case"img":case"image":case"link":ge("error",e),ge("load",e),i=r;break;case"details":ge("toggle",e),i=r;break;case"input":hh(e,r),i=Xd(e,r),ge("invalid",e);break;case"option":i=r;break;case"select":e._wrapperState={wasMultiple:!!r.multiple},i=Ae({},r,{value:void 0}),ge("invalid",e);break;case"textarea":yh(e,r),i=Yd(e,r),ge("invalid",e);break;default:i=r}Qd(n,i),o=i;for(a in o)if(o.hasOwnProperty(a)){var s=o[a];a==="style"?Ty(e,s):a==="dangerouslySetInnerHTML"?(s=s?s.__html:void 0,s!=null&&Cy(e,s)):a==="children"?typeof s=="string"?(n!=="textarea"||s!=="")&&cl(e,s):typeof s=="number"&&cl(e,""+s):a!=="suppressContentEditableWarning"&&a!=="suppressHydrationWarning"&&a!=="autoFocus"&&(sl.hasOwnProperty(a)?s!=null&&a==="onScroll"&&ge("scroll",e):s!=null&&d0(e,a,s,l))}switch(n){case"input":jo(e),mh(e,r,!1);break;case"textarea":jo(e),vh(e);break;case"option":r.value!=null&&e.setAttribute("value",""+hr(r.value));break;case"select":e.multiple=!!r.multiple,a=r.value,a!=null?Pi(e,!!r.multiple,a,!1):r.defaultValue!=null&&Pi(e,!!r.multiple,r.defaultValue,!0);break;default:typeof i.onClick=="function"&&(e.onclick=ws)}switch(n){case"button":case"input":case"select":case"textarea":r=!!r.autoFocus;break e;case"img":r=!0;break e;default:r=!1}}r&&(t.flags|=4)}t.ref!==null&&(t.flags|=512,t.flags|=2097152)}return rt(t),null;case 6:if(e&&t.stateNode!=null)r6(e,t,e.memoizedProps,r);else{if(typeof r!="string"&&t.stateNode===null)throw Error(H(166));if(n=zr(bl.current),zr(mn.current),To(t)){if(r=t.stateNode,n=t.memoizedProps,r[dn]=t,(a=r.nodeValue!==n)&&(e=Pt,e!==null))switch(e.tag){case 3:$o(r.nodeValue,n,(e.mode&1)!==0);break;case 5:e.memoizedProps.suppressHydrationWarning!==!0&&$o(r.nodeValue,n,(e.mode&1)!==0)}a&&(t.flags|=4)}else r=(n.nodeType===9?n:n.ownerDocument).createTextNode(r),r[dn]=t,t.stateNode=r}return rt(t),null;case 13:if(we(Oe),r=t.memoizedState,e===null||e.memoizedState!==null&&e.memoizedState.dehydrated!==null){if(_e&&Ot!==null&&t.mode&1&&!(t.flags&128))w8(),Li(),t.flags|=98560,a=!1;else if(a=To(t),r!==null&&r.dehydrated!==null){if(e===null){if(!a)throw Error(H(318));if(a=t.memoizedState,a=a!==null?a.dehydrated:null,!a)throw Error(H(317));a[dn]=t}else Li(),!(t.flags&128)&&(t.memoizedState=null),t.flags|=4;rt(t),a=!1}else Zt!==null&&($1(Zt),Zt=null),a=!0;if(!a)return t.flags&65536?t:null}return t.flags&128?(t.lanes=n,t):(r=r!==null,r!==(e!==null&&e.memoizedState!==null)&&r&&(t.child.flags|=8192,t.mode&1&&(e===null||Oe.current&1?Be===0&&(Be=3):X0())),t.updateQueue!==null&&(t.flags|=4),rt(t),null);case 4:return Ri(),j1(e,t),e===null&&yl(t.stateNode.containerInfo),rt(t),null;case 10:return N0(t.type._context),rt(t),null;case 17:return xt(t.type)&&ks(),rt(t),null;case 19:if(we(Oe),a=t.memoizedState,a===null)return rt(t),null;if(r=(t.flags&128)!==0,l=a.rendering,l===null)if(r)Ca(a,!1);else{if(Be!==0||e!==null&&e.flags&128)for(e=t.child;e!==null;){if(l=Ms(e),l!==null){for(t.flags|=128,Ca(a,!1),r=l.updateQueue,r!==null&&(t.updateQueue=r,t.flags|=4),t.subtreeFlags=0,r=n,n=t.child;n!==null;)a=n,e=r,a.flags&=14680066,l=a.alternate,l===null?(a.childLanes=0,a.lanes=e,a.child=null,a.subtreeFlags=0,a.memoizedProps=null,a.memoizedState=null,a.updateQueue=null,a.dependencies=null,a.stateNode=null):(a.childLanes=l.childLanes,a.lanes=l.lanes,a.child=l.child,a.subtreeFlags=0,a.deletions=null,a.memoizedProps=l.memoizedProps,a.memoizedState=l.memoizedState,a.updateQueue=l.updateQueue,a.type=l.type,e=l.dependencies,a.dependencies=e===null?null:{lanes:e.lanes,firstContext:e.firstContext}),n=n.sibling;return ve(Oe,Oe.current&1|2),t.child}e=e.sibling}a.tail!==null&&$e()>Wi&&(t.flags|=128,r=!0,Ca(a,!1),t.lanes=4194304)}else{if(!r)if(e=Ms(l),e!==null){if(t.flags|=128,r=!0,n=e.updateQueue,n!==null&&(t.updateQueue=n,t.flags|=4),Ca(a,!0),a.tail===null&&a.tailMode==="hidden"&&!l.alternate&&!_e)return rt(t),null}else 2*$e()-a.renderingStartTime>Wi&&n!==1073741824&&(t.flags|=128,r=!0,Ca(a,!1),t.lanes=4194304);a.isBackwards?(l.sibling=t.child,t.child=l):(n=a.last,n!==null?n.sibling=l:t.child=l,a.last=l)}return a.tail!==null?(t=a.tail,a.rendering=t,a.tail=t.sibling,a.renderingStartTime=$e(),t.sibling=null,n=Oe.current,ve(Oe,r?n&1|2:n&1),t):(rt(t),null);case 22:case 23:return V0(),r=t.memoizedState!==null,e!==null&&e.memoizedState!==null!==r&&(t.flags|=8192),r&&t.mode&1?_t&1073741824&&(rt(t),t.subtreeFlags&6&&(t.flags|=8192)):rt(t),null;case 24:return null;case 25:return null}throw Error(H(156,t.tag))}function Q9(e,t){switch(O0(t),t.tag){case 1:return xt(t.type)&&ks(),e=t.flags,e&65536?(t.flags=e&-65537|128,t):null;case 3:return Ri(),we(gt),we(st),z0(),e=t.flags,e&65536&&!(e&128)?(t.flags=e&-65537|128,t):null;case 5:return T0(t),null;case 13:if(we(Oe),e=t.memoizedState,e!==null&&e.dehydrated!==null){if(t.alternate===null)throw Error(H(340));Li()}return e=t.flags,e&65536?(t.flags=e&-65537|128,t):null;case 19:return we(Oe),null;case 4:return Ri(),null;case 10:return N0(t.type._context),null;case 22:case 23:return V0(),null;case 24:return null;default:return null}}var Do=!1,at=!1,J9=typeof WeakSet=="function"?WeakSet:Set,q=null;function ki(e,t){var n=e.ref;if(n!==null)if(typeof n=="function")try{n(null)}catch(r){Me(e,t,r)}else n.current=null}function O1(e,t,n){try{n()}catch(r){Me(e,t,r)}}var l7=!1;function ex(e,t){if(c1=gs,e=s8(),S0(e)){if("selectionStart"in e)var n={start:e.selectionStart,end:e.selectionEnd};else e:{n=(n=e.ownerDocument)&&n.defaultView||window;var r=n.getSelection&&n.getSelection();if(r&&r.rangeCount!==0){n=r.anchorNode;var i=r.anchorOffset,a=r.focusNode;r=r.focusOffset;try{n.nodeType,a.nodeType}catch{n=null;break e}var l=0,o=-1,s=-1,c=0,f=0,d=e,p=null;t:for(;;){for(var h;d!==n||i!==0&&d.nodeType!==3||(o=l+i),d!==a||r!==0&&d.nodeType!==3||(s=l+r),d.nodeType===3&&(l+=d.nodeValue.length),(h=d.firstChild)!==null;)p=d,d=h;for(;;){if(d===e)break t;if(p===n&&++c===i&&(o=l),p===a&&++f===r&&(s=l),(h=d.nextSibling)!==null)break;d=p,p=d.parentNode}d=h}n=o===-1||s===-1?null:{start:o,end:s}}else n=null}n=n||{start:0,end:0}}else n=null;for(u1={focusedElem:e,selectionRange:n},gs=!1,q=t;q!==null;)if(t=q,e=t.child,(t.subtreeFlags&1028)!==0&&e!==null)e.return=t,q=e;else for(;q!==null;){t=q;try{var x=t.alternate;if(t.flags&1024)switch(t.tag){case 0:case 11:case 15:break;case 1:if(x!==null){var v=x.memoizedProps,w=x.memoizedState,y=t.stateNode,m=y.getSnapshotBeforeUpdate(t.elementType===t.type?v:Xt(t.type,v),w);y.__reactInternalSnapshotBeforeUpdate=m}break;case 3:var g=t.stateNode.containerInfo;g.nodeType===1?g.textContent="":g.nodeType===9&&g.documentElement&&g.removeChild(g.documentElement);break;case 5:case 6:case 4:case 17:break;default:throw Error(H(163))}}catch(_){Me(t,t.return,_)}if(e=t.sibling,e!==null){e.return=t.return,q=e;break}q=t.return}return x=l7,l7=!1,x}function tl(e,t,n){var r=t.updateQueue;if(r=r!==null?r.lastEffect:null,r!==null){var i=r=r.next;do{if((i.tag&e)===e){var a=i.destroy;i.destroy=void 0,a!==void 0&&O1(t,n,a)}i=i.next}while(i!==r)}}function Uc(e,t){if(t=t.updateQueue,t=t!==null?t.lastEffect:null,t!==null){var n=t=t.next;do{if((n.tag&e)===e){var r=n.create;n.destroy=r()}n=n.next}while(n!==t)}}function P1(e){var t=e.ref;if(t!==null){var n=e.stateNode;switch(e.tag){case 5:e=n;break;default:e=n}typeof t=="function"?t(e):t.current=e}}function i6(e){var t=e.alternate;t!==null&&(e.alternate=null,i6(t)),e.child=null,e.deletions=null,e.sibling=null,e.tag===5&&(t=e.stateNode,t!==null&&(delete t[dn],delete t[gl],delete t[p1],delete t[I9],delete t[D9])),e.stateNode=null,e.return=null,e.dependencies=null,e.memoizedProps=null,e.memoizedState=null,e.pendingProps=null,e.stateNode=null,e.updateQueue=null}function a6(e){return e.tag===5||e.tag===3||e.tag===4}function o7(e){e:for(;;){for(;e.sibling===null;){if(e.return===null||a6(e.return))return null;e=e.return}for(e.sibling.return=e.return,e=e.sibling;e.tag!==5&&e.tag!==6&&e.tag!==18;){if(e.flags&2||e.child===null||e.tag===4)continue e;e.child.return=e,e=e.child}if(!(e.flags&2))return e.stateNode}}function A1(e,t,n){var r=e.tag;if(r===5||r===6)e=e.stateNode,t?n.nodeType===8?n.parentNode.insertBefore(e,t):n.insertBefore(e,t):(n.nodeType===8?(t=n.parentNode,t.insertBefore(e,n)):(t=n,t.appendChild(e)),n=n._reactRootContainer,n!=null||t.onclick!==null||(t.onclick=ws));else if(r!==4&&(e=e.child,e!==null))for(A1(e,t,n),e=e.sibling;e!==null;)A1(e,t,n),e=e.sibling}function M1(e,t,n){var r=e.tag;if(r===5||r===6)e=e.stateNode,t?n.insertBefore(e,t):n.appendChild(e);else if(r!==4&&(e=e.child,e!==null))for(M1(e,t,n),e=e.sibling;e!==null;)M1(e,t,n),e=e.sibling}var Ye=null,qt=!1;function Vn(e,t,n){for(n=n.child;n!==null;)l6(e,t,n),n=n.sibling}function l6(e,t,n){if(hn&&typeof hn.onCommitFiberUnmount=="function")try{hn.onCommitFiberUnmount(zc,n)}catch{}switch(n.tag){case 5:at||ki(n,t);case 6:var r=Ye,i=qt;Ye=null,Vn(e,t,n),Ye=r,qt=i,Ye!==null&&(qt?(e=Ye,n=n.stateNode,e.nodeType===8?e.parentNode.removeChild(n):e.removeChild(n)):Ye.removeChild(n.stateNode));break;case 18:Ye!==null&&(qt?(e=Ye,n=n.stateNode,e.nodeType===8?ed(e.parentNode,n):e.nodeType===1&&ed(e,n),pl(e)):ed(Ye,n.stateNode));break;case 4:r=Ye,i=qt,Ye=n.stateNode.containerInfo,qt=!0,Vn(e,t,n),Ye=r,qt=i;break;case 0:case 11:case 14:case 15:if(!at&&(r=n.updateQueue,r!==null&&(r=r.lastEffect,r!==null))){i=r=r.next;do{var a=i,l=a.destroy;a=a.tag,l!==void 0&&(a&2||a&4)&&O1(n,t,l),i=i.next}while(i!==r)}Vn(e,t,n);break;case 1:if(!at&&(ki(n,t),r=n.stateNode,typeof r.componentWillUnmount=="function"))try{r.props=n.memoizedProps,r.state=n.memoizedState,r.componentWillUnmount()}catch(o){Me(n,t,o)}Vn(e,t,n);break;case 21:Vn(e,t,n);break;case 22:n.mode&1?(at=(r=at)||n.memoizedState!==null,Vn(e,t,n),at=r):Vn(e,t,n);break;default:Vn(e,t,n)}}function s7(e){var t=e.updateQueue;if(t!==null){e.updateQueue=null;var n=e.stateNode;n===null&&(n=e.stateNode=new J9),t.forEach(function(r){var i=cx.bind(null,e,r);n.has(r)||(n.add(r),r.then(i,i))})}}function Gt(e,t){var n=t.deletions;if(n!==null)for(var r=0;r<n.length;r++){var i=n[r];try{var a=e,l=t,o=l;e:for(;o!==null;){switch(o.tag){case 5:Ye=o.stateNode,qt=!1;break e;case 3:Ye=o.stateNode.containerInfo,qt=!0;break e;case 4:Ye=o.stateNode.containerInfo,qt=!0;break e}o=o.return}if(Ye===null)throw Error(H(160));l6(a,l,i),Ye=null,qt=!1;var s=i.alternate;s!==null&&(s.return=null),i.return=null}catch(c){Me(i,t,c)}}if(t.subtreeFlags&12854)for(t=t.child;t!==null;)o6(t,e),t=t.sibling}function o6(e,t){var n=e.alternate,r=e.flags;switch(e.tag){case 0:case 11:case 14:case 15:if(Gt(t,e),sn(e),r&4){try{tl(3,e,e.return),Uc(3,e)}catch(v){Me(e,e.return,v)}try{tl(5,e,e.return)}catch(v){Me(e,e.return,v)}}break;case 1:Gt(t,e),sn(e),r&512&&n!==null&&ki(n,n.return);break;case 5:if(Gt(t,e),sn(e),r&512&&n!==null&&ki(n,n.return),e.flags&32){var i=e.stateNode;try{cl(i,"")}catch(v){Me(e,e.return,v)}}if(r&4&&(i=e.stateNode,i!=null)){var a=e.memoizedProps,l=n!==null?n.memoizedProps:a,o=e.type,s=e.updateQueue;if(e.updateQueue=null,s!==null)try{o==="input"&&a.type==="radio"&&a.name!=null&&My(i,a),Jd(o,l);var c=Jd(o,a);for(l=0;l<s.length;l+=2){var f=s[l],d=s[l+1];f==="style"?Ty(i,d):f==="dangerouslySetInnerHTML"?Cy(i,d):f==="children"?cl(i,d):d0(i,f,d,c)}switch(o){case"input":qd(i,a);break;case"textarea":Ny(i,a);break;case"select":var p=i._wrapperState.wasMultiple;i._wrapperState.wasMultiple=!!a.multiple;var h=a.value;h!=null?Pi(i,!!a.multiple,h,!1):p!==!!a.multiple&&(a.defaultValue!=null?Pi(i,!!a.multiple,a.defaultValue,!0):Pi(i,!!a.multiple,a.multiple?[]:"",!1))}i[gl]=a}catch(v){Me(e,e.return,v)}}break;case 6:if(Gt(t,e),sn(e),r&4){if(e.stateNode===null)throw Error(H(162));i=e.stateNode,a=e.memoizedProps;try{i.nodeValue=a}catch(v){Me(e,e.return,v)}}break;case 3:if(Gt(t,e),sn(e),r&4&&n!==null&&n.memoizedState.isDehydrated)try{pl(t.containerInfo)}catch(v){Me(e,e.return,v)}break;case 4:Gt(t,e),sn(e);break;case 13:Gt(t,e),sn(e),i=e.child,i.flags&8192&&(a=i.memoizedState!==null,i.stateNode.isHidden=a,!a||i.alternate!==null&&i.alternate.memoizedState!==null||(H0=$e())),r&4&&s7(e);break;case 22:if(f=n!==null&&n.memoizedState!==null,e.mode&1?(at=(c=at)||f,Gt(t,e),at=c):Gt(t,e),sn(e),r&8192){if(c=e.memoizedState!==null,(e.stateNode.isHidden=c)&&!f&&e.mode&1)for(q=e,f=e.child;f!==null;){for(d=q=f;q!==null;){switch(p=q,h=p.child,p.tag){case 0:case 11:case 14:case 15:tl(4,p,p.return);break;case 1:ki(p,p.return);var x=p.stateNode;if(typeof x.componentWillUnmount=="function"){r=p,n=p.return;try{t=r,x.props=t.memoizedProps,x.state=t.memoizedState,x.componentWillUnmount()}catch(v){Me(r,n,v)}}break;case 5:ki(p,p.return);break;case 22:if(p.memoizedState!==null){u7(d);continue}}h!==null?(h.return=p,q=h):u7(d)}f=f.sibling}e:for(f=null,d=e;;){if(d.tag===5){if(f===null){f=d;try{i=d.stateNode,c?(a=i.style,typeof a.setProperty=="function"?a.setProperty("display","none","important"):a.display="none"):(o=d.stateNode,s=d.memoizedProps.style,l=s!=null&&s.hasOwnProperty("display")?s.display:null,o.style.display=$y("display",l))}catch(v){Me(e,e.return,v)}}}else if(d.tag===6){if(f===null)try{d.stateNode.nodeValue=c?"":d.memoizedProps}catch(v){Me(e,e.return,v)}}else if((d.tag!==22&&d.tag!==23||d.memoizedState===null||d===e)&&d.child!==null){d.child.return=d,d=d.child;continue}if(d===e)break e;for(;d.sibling===null;){if(d.return===null||d.return===e)break e;f===d&&(f=null),d=d.return}f===d&&(f=null),d.sibling.return=d.return,d=d.sibling}}break;case 19:Gt(t,e),sn(e),r&4&&s7(e);break;case 21:break;default:Gt(t,e),sn(e)}}function sn(e){var t=e.flags;if(t&2){try{e:{for(var n=e.return;n!==null;){if(a6(n)){var r=n;break e}n=n.return}throw Error(H(160))}switch(r.tag){case 5:var i=r.stateNode;r.flags&32&&(cl(i,""),r.flags&=-33);var a=o7(e);M1(e,a,i);break;case 3:case 4:var l=r.stateNode.containerInfo,o=o7(e);A1(e,o,l);break;default:throw Error(H(161))}}catch(s){Me(e,e.return,s)}e.flags&=-3}t&4096&&(e.flags&=-4097)}function tx(e,t,n){q=e,s6(e)}function s6(e,t,n){for(var r=(e.mode&1)!==0;q!==null;){var i=q,a=i.child;if(i.tag===22&&r){var l=i.memoizedState!==null||Do;if(!l){var o=i.alternate,s=o!==null&&o.memoizedState!==null||at;o=Do;var c=at;if(Do=l,(at=s)&&!c)for(q=i;q!==null;)l=q,s=l.child,l.tag===22&&l.memoizedState!==null?d7(i):s!==null?(s.return=l,q=s):d7(i);for(;a!==null;)q=a,s6(a),a=a.sibling;q=i,Do=o,at=c}c7(e)}else i.subtreeFlags&8772&&a!==null?(a.return=i,q=a):c7(e)}}function c7(e){for(;q!==null;){var t=q;if(t.flags&8772){var n=t.alternate;try{if(t.flags&8772)switch(t.tag){case 0:case 11:case 15:at||Uc(5,t);break;case 1:var r=t.stateNode;if(t.flags&4&&!at)if(n===null)r.componentDidMount();else{var i=t.elementType===t.type?n.memoizedProps:Xt(t.type,n.memoizedProps);r.componentDidUpdate(i,n.memoizedState,r.__reactInternalSnapshotBeforeUpdate)}var a=t.updateQueue;a!==null&&Xh(t,a,r);break;case 3:var l=t.updateQueue;if(l!==null){if(n=null,t.child!==null)switch(t.child.tag){case 5:n=t.child.stateNode;break;case 1:n=t.child.stateNode}Xh(t,l,n)}break;case 5:var o=t.stateNode;if(n===null&&t.flags&4){n=o;var s=t.memoizedProps;switch(t.type){case"button":case"input":case"select":case"textarea":s.autoFocus&&n.focus();break;case"img":s.src&&(n.src=s.src)}}break;case 6:break;case 4:break;case 12:break;case 13:if(t.memoizedState===null){var c=t.alternate;if(c!==null){var f=c.memoizedState;if(f!==null){var d=f.dehydrated;d!==null&&pl(d)}}}break;case 19:case 17:case 21:case 22:case 23:case 25:break;default:throw Error(H(163))}at||t.flags&512&&P1(t)}catch(p){Me(t,t.return,p)}}if(t===e){q=null;break}if(n=t.sibling,n!==null){n.return=t.return,q=n;break}q=t.return}}function u7(e){for(;q!==null;){var t=q;if(t===e){q=null;break}var n=t.sibling;if(n!==null){n.return=t.return,q=n;break}q=t.return}}function d7(e){for(;q!==null;){var t=q;try{switch(t.tag){case 0:case 11:case 15:var n=t.return;try{Uc(4,t)}catch(s){Me(t,n,s)}break;case 1:var r=t.stateNode;if(typeof r.componentDidMount=="function"){var i=t.return;try{r.componentDidMount()}catch(s){Me(t,i,s)}}var a=t.return;try{P1(t)}catch(s){Me(t,a,s)}break;case 5:var l=t.return;try{P1(t)}catch(s){Me(t,l,s)}}}catch(s){Me(t,t.return,s)}if(t===e){q=null;break}var o=t.sibling;if(o!==null){o.return=t.return,q=o;break}q=t.return}}var nx=Math.ceil,Cs=Bn.ReactCurrentDispatcher,W0=Bn.ReactCurrentOwner,Lt=Bn.ReactCurrentBatchConfig,ie=0,Xe=null,ze=null,Qe=0,_t=0,_i=gr(0),Be=0,Sl=null,qr=0,Hc=0,U0=0,nl=null,mt=null,H0=0,Wi=1/0,_n=null,$s=!1,N1=null,cr=null,Lo=!1,nr=null,Ts=0,rl=0,E1=null,cs=-1,us=0;function dt(){return ie&6?$e():cs!==-1?cs:cs=$e()}function ur(e){return e.mode&1?ie&2&&Qe!==0?Qe&-Qe:F9.transition!==null?(us===0&&(us=Vy()),us):(e=de,e!==0||(e=window.event,e=e===void 0?16:Jy(e.type)),e):1}function tn(e,t,n,r){if(50<rl)throw rl=0,E1=null,Error(H(185));co(e,n,r),(!(ie&2)||e!==Xe)&&(e===Xe&&(!(ie&2)&&(Hc|=n),Be===4&&Jn(e,Qe)),bt(e,r),n===1&&ie===0&&!(t.mode&1)&&(Wi=$e()+500,Rc&&xr()))}function bt(e,t){var n=e.callbackNode;F4(e,t);var r=vs(e,e===Xe?Qe:0);if(r===0)n!==null&&bh(n),e.callbackNode=null,e.callbackPriority=0;else if(t=r&-r,e.callbackPriority!==t){if(n!=null&&bh(n),t===1)e.tag===0?L9(f7.bind(null,e)):g8(f7.bind(null,e)),T9(function(){!(ie&6)&&xr()}),n=null;else{switch(Xy(r)){case 1:n=y0;break;case 4:n=Hy;break;case 16:n=ys;break;case 536870912:n=Gy;break;default:n=ys}n=y6(n,c6.bind(null,e))}e.callbackPriority=t,e.callbackNode=n}}function c6(e,t){if(cs=-1,us=0,ie&6)throw Error(H(327));var n=e.callbackNode;if(Ci()&&e.callbackNode!==n)return null;var r=vs(e,e===Xe?Qe:0);if(r===0)return null;if(r&30||r&e.expiredLanes||t)t=zs(e,r);else{t=r;var i=ie;ie|=2;var a=d6();(Xe!==e||Qe!==t)&&(_n=null,Wi=$e()+500,Rr(e,t));do try{ax();break}catch(o){u6(e,o)}while(!0);M0(),Cs.current=a,ie=i,ze!==null?t=0:(Xe=null,Qe=0,t=Be)}if(t!==0){if(t===2&&(i=i1(e),i!==0&&(r=i,t=C1(e,i))),t===1)throw n=Sl,Rr(e,0),Jn(e,r),bt(e,$e()),n;if(t===6)Jn(e,r);else{if(i=e.current.alternate,!(r&30)&&!rx(i)&&(t=zs(e,r),t===2&&(a=i1(e),a!==0&&(r=a,t=C1(e,a))),t===1))throw n=Sl,Rr(e,0),Jn(e,r),bt(e,$e()),n;switch(e.finishedWork=i,e.finishedLanes=r,t){case 0:case 1:throw Error(H(345));case 2:Ar(e,mt,_n);break;case 3:if(Jn(e,r),(r&130023424)===r&&(t=H0+500-$e(),10<t)){if(vs(e,0)!==0)break;if(i=e.suspendedLanes,(i&r)!==r){dt(),e.pingedLanes|=e.suspendedLanes&i;break}e.timeoutHandle=f1(Ar.bind(null,e,mt,_n),t);break}Ar(e,mt,_n);break;case 4:if(Jn(e,r),(r&4194240)===r)break;for(t=e.eventTimes,i=-1;0<r;){var l=31-en(r);a=1<<l,l=t[l],l>i&&(i=l),r&=~a}if(r=i,r=$e()-r,r=(120>r?120:480>r?480:1080>r?1080:1920>r?1920:3e3>r?3e3:4320>r?4320:1960*nx(r/1960))-r,10<r){e.timeoutHandle=f1(Ar.bind(null,e,mt,_n),r);break}Ar(e,mt,_n);break;case 5:Ar(e,mt,_n);break;default:throw Error(H(329))}}}return bt(e,$e()),e.callbackNode===n?c6.bind(null,e):null}function C1(e,t){var n=nl;return e.current.memoizedState.isDehydrated&&(Rr(e,t).flags|=256),e=zs(e,t),e!==2&&(t=mt,mt=n,t!==null&&$1(t)),e}function $1(e){mt===null?mt=e:mt.push.apply(mt,e)}function rx(e){for(var t=e;;){if(t.flags&16384){var n=t.updateQueue;if(n!==null&&(n=n.stores,n!==null))for(var r=0;r<n.length;r++){var i=n[r],a=i.getSnapshot;i=i.value;try{if(!rn(a(),i))return!1}catch{return!1}}}if(n=t.child,t.subtreeFlags&16384&&n!==null)n.return=t,t=n;else{if(t===e)break;for(;t.sibling===null;){if(t.return===null||t.return===e)return!0;t=t.return}t.sibling.return=t.return,t=t.sibling}}return!0}function Jn(e,t){for(t&=~U0,t&=~Hc,e.suspendedLanes|=t,e.pingedLanes&=~t,e=e.expirationTimes;0<t;){var n=31-en(t),r=1<<n;e[n]=-1,t&=~r}}function f7(e){if(ie&6)throw Error(H(327));Ci();var t=vs(e,0);if(!(t&1))return bt(e,$e()),null;var n=zs(e,t);if(e.tag!==0&&n===2){var r=i1(e);r!==0&&(t=r,n=C1(e,r))}if(n===1)throw n=Sl,Rr(e,0),Jn(e,t),bt(e,$e()),n;if(n===6)throw Error(H(345));return e.finishedWork=e.current.alternate,e.finishedLanes=t,Ar(e,mt,_n),bt(e,$e()),null}function G0(e,t){var n=ie;ie|=1;try{return e(t)}finally{ie=n,ie===0&&(Wi=$e()+500,Rc&&xr())}}function Kr(e){nr!==null&&nr.tag===0&&!(ie&6)&&Ci();var t=ie;ie|=1;var n=Lt.transition,r=de;try{if(Lt.transition=null,de=1,e)return e()}finally{de=r,Lt.transition=n,ie=t,!(ie&6)&&xr()}}function V0(){_t=_i.current,we(_i)}function Rr(e,t){e.finishedWork=null,e.finishedLanes=0;var n=e.timeoutHandle;if(n!==-1&&(e.timeoutHandle=-1,$9(n)),ze!==null)for(n=ze.return;n!==null;){var r=n;switch(O0(r),r.tag){case 1:r=r.type.childContextTypes,r!=null&&ks();break;case 3:Ri(),we(gt),we(st),z0();break;case 5:T0(r);break;case 4:Ri();break;case 13:we(Oe);break;case 19:we(Oe);break;case 10:N0(r.type._context);break;case 22:case 23:V0()}n=n.return}if(Xe=e,ze=e=dr(e.current,null),Qe=_t=t,Be=0,Sl=null,U0=Hc=qr=0,mt=nl=null,Tr!==null){for(t=0;t<Tr.length;t++)if(n=Tr[t],r=n.interleaved,r!==null){n.interleaved=null;var i=r.next,a=n.pending;if(a!==null){var l=a.next;a.next=i,r.next=l}n.pending=r}Tr=null}return e}function u6(e,t){do{var n=ze;try{if(M0(),ls.current=Es,Ns){for(var r=Pe.memoizedState;r!==null;){var i=r.queue;i!==null&&(i.pending=null),r=r.next}Ns=!1}if(Xr=0,Ge=Re=Pe=null,el=!1,wl=0,W0.current=null,n===null||n.return===null){Be=1,Sl=t,ze=null;break}e:{var a=e,l=n.return,o=n,s=t;if(t=Qe,o.flags|=32768,s!==null&&typeof s=="object"&&typeof s.then=="function"){var c=s,f=o,d=f.tag;if(!(f.mode&1)&&(d===0||d===11||d===15)){var p=f.alternate;p?(f.updateQueue=p.updateQueue,f.memoizedState=p.memoizedState,f.lanes=p.lanes):(f.updateQueue=null,f.memoizedState=null)}var h=Jh(l);if(h!==null){h.flags&=-257,e7(h,l,o,a,t),h.mode&1&&Qh(a,c,t),t=h,s=c;var x=t.updateQueue;if(x===null){var v=new Set;v.add(s),t.updateQueue=v}else x.add(s);break e}else{if(!(t&1)){Qh(a,c,t),X0();break e}s=Error(H(426))}}else if(_e&&o.mode&1){var w=Jh(l);if(w!==null){!(w.flags&65536)&&(w.flags|=256),e7(w,l,o,a,t),P0(Bi(s,o));break e}}a=s=Bi(s,o),Be!==4&&(Be=2),nl===null?nl=[a]:nl.push(a),a=l;do{switch(a.tag){case 3:a.flags|=65536,t&=-t,a.lanes|=t;var y=X8(a,s,t);Vh(a,y);break e;case 1:o=s;var m=a.type,g=a.stateNode;if(!(a.flags&128)&&(typeof m.getDerivedStateFromError=="function"||g!==null&&typeof g.componentDidCatch=="function"&&(cr===null||!cr.has(g)))){a.flags|=65536,t&=-t,a.lanes|=t;var _=q8(a,o,t);Vh(a,_);break e}}a=a.return}while(a!==null)}p6(n)}catch(b){t=b,ze===n&&n!==null&&(ze=n=n.return);continue}break}while(!0)}function d6(){var e=Cs.current;return Cs.current=Es,e===null?Es:e}function X0(){(Be===0||Be===3||Be===2)&&(Be=4),Xe===null||!(qr&268435455)&&!(Hc&268435455)||Jn(Xe,Qe)}function zs(e,t){var n=ie;ie|=2;var r=d6();(Xe!==e||Qe!==t)&&(_n=null,Rr(e,t));do try{ix();break}catch(i){u6(e,i)}while(!0);if(M0(),ie=n,Cs.current=r,ze!==null)throw Error(H(261));return Xe=null,Qe=0,Be}function ix(){for(;ze!==null;)f6(ze)}function ax(){for(;ze!==null&&!N4();)f6(ze)}function f6(e){var t=m6(e.alternate,e,_t);e.memoizedProps=e.pendingProps,t===null?p6(e):ze=t,W0.current=null}function p6(e){var t=e;do{var n=t.alternate;if(e=t.return,t.flags&32768){if(n=Q9(n,t),n!==null){n.flags&=32767,ze=n;return}if(e!==null)e.flags|=32768,e.subtreeFlags=0,e.deletions=null;else{Be=6,ze=null;return}}else if(n=Z9(n,t,_t),n!==null){ze=n;return}if(t=t.sibling,t!==null){ze=t;return}ze=t=e}while(t!==null);Be===0&&(Be=5)}function Ar(e,t,n){var r=de,i=Lt.transition;try{Lt.transition=null,de=1,lx(e,t,n,r)}finally{Lt.transition=i,de=r}return null}function lx(e,t,n,r){do Ci();while(nr!==null);if(ie&6)throw Error(H(327));n=e.finishedWork;var i=e.finishedLanes;if(n===null)return null;if(e.finishedWork=null,e.finishedLanes=0,n===e.current)throw Error(H(177));e.callbackNode=null,e.callbackPriority=0;var a=n.lanes|n.childLanes;if(R4(e,a),e===Xe&&(ze=Xe=null,Qe=0),!(n.subtreeFlags&2064)&&!(n.flags&2064)||Lo||(Lo=!0,y6(ys,function(){return Ci(),null})),a=(n.flags&15990)!==0,n.subtreeFlags&15990||a){a=Lt.transition,Lt.transition=null;var l=de;de=1;var o=ie;ie|=4,W0.current=null,ex(e,n),o6(n,e),O9(u1),gs=!!c1,u1=c1=null,e.current=n,tx(n),E4(),ie=o,de=l,Lt.transition=a}else e.current=n;if(Lo&&(Lo=!1,nr=e,Ts=i),a=e.pendingLanes,a===0&&(cr=null),T4(n.stateNode),bt(e,$e()),t!==null)for(r=e.onRecoverableError,n=0;n<t.length;n++)i=t[n],r(i.value,{componentStack:i.stack,digest:i.digest});if($s)throw $s=!1,e=N1,N1=null,e;return Ts&1&&e.tag!==0&&Ci(),a=e.pendingLanes,a&1?e===E1?rl++:(rl=0,E1=e):rl=0,xr(),null}function Ci(){if(nr!==null){var e=Xy(Ts),t=Lt.transition,n=de;try{if(Lt.transition=null,de=16>e?16:e,nr===null)var r=!1;else{if(e=nr,nr=null,Ts=0,ie&6)throw Error(H(331));var i=ie;for(ie|=4,q=e.current;q!==null;){var a=q,l=a.child;if(q.flags&16){var o=a.deletions;if(o!==null){for(var s=0;s<o.length;s++){var c=o[s];for(q=c;q!==null;){var f=q;switch(f.tag){case 0:case 11:case 15:tl(8,f,a)}var d=f.child;if(d!==null)d.return=f,q=d;else for(;q!==null;){f=q;var p=f.sibling,h=f.return;if(i6(f),f===c){q=null;break}if(p!==null){p.return=h,q=p;break}q=h}}}var x=a.alternate;if(x!==null){var v=x.child;if(v!==null){x.child=null;do{var w=v.sibling;v.sibling=null,v=w}while(v!==null)}}q=a}}if(a.subtreeFlags&2064&&l!==null)l.return=a,q=l;else e:for(;q!==null;){if(a=q,a.flags&2048)switch(a.tag){case 0:case 11:case 15:tl(9,a,a.return)}var y=a.sibling;if(y!==null){y.return=a.return,q=y;break e}q=a.return}}var m=e.current;for(q=m;q!==null;){l=q;var g=l.child;if(l.subtreeFlags&2064&&g!==null)g.return=l,q=g;else e:for(l=m;q!==null;){if(o=q,o.flags&2048)try{switch(o.tag){case 0:case 11:case 15:Uc(9,o)}}catch(b){Me(o,o.return,b)}if(o===l){q=null;break e}var _=o.sibling;if(_!==null){_.return=o.return,q=_;break e}q=o.return}}if(ie=i,xr(),hn&&typeof hn.onPostCommitFiberRoot=="function")try{hn.onPostCommitFiberRoot(zc,e)}catch{}r=!0}return r}finally{de=n,Lt.transition=t}}return!1}function p7(e,t,n){t=Bi(n,t),t=X8(e,t,1),e=sr(e,t,1),t=dt(),e!==null&&(co(e,1,t),bt(e,t))}function Me(e,t,n){if(e.tag===3)p7(e,e,n);else for(;t!==null;){if(t.tag===3){p7(t,e,n);break}else if(t.tag===1){var r=t.stateNode;if(typeof t.type.getDerivedStateFromError=="function"||typeof r.componentDidCatch=="function"&&(cr===null||!cr.has(r))){e=Bi(n,e),e=q8(t,e,1),t=sr(t,e,1),e=dt(),t!==null&&(co(t,1,e),bt(t,e));break}}t=t.return}}function ox(e,t,n){var r=e.pingCache;r!==null&&r.delete(t),t=dt(),e.pingedLanes|=e.suspendedLanes&n,Xe===e&&(Qe&n)===n&&(Be===4||Be===3&&(Qe&130023424)===Qe&&500>$e()-H0?Rr(e,0):U0|=n),bt(e,t)}function h6(e,t){t===0&&(e.mode&1?(t=Ao,Ao<<=1,!(Ao&130023424)&&(Ao=4194304)):t=1);var n=dt();e=In(e,t),e!==null&&(co(e,t,n),bt(e,n))}function sx(e){var t=e.memoizedState,n=0;t!==null&&(n=t.retryLane),h6(e,n)}function cx(e,t){var n=0;switch(e.tag){case 13:var r=e.stateNode,i=e.memoizedState;i!==null&&(n=i.retryLane);break;case 19:r=e.stateNode;break;default:throw Error(H(314))}r!==null&&r.delete(t),h6(e,n)}var m6;m6=function(e,t,n){if(e!==null)if(e.memoizedProps!==t.pendingProps||gt.current)yt=!0;else{if(!(e.lanes&n)&&!(t.flags&128))return yt=!1,Y9(e,t,n);yt=!!(e.flags&131072)}else yt=!1,_e&&t.flags&1048576&&x8(t,js,t.index);switch(t.lanes=0,t.tag){case 2:var r=t.type;ss(e,t),e=t.pendingProps;var i=Di(t,st.current);Ei(t,n),i=D0(null,t,r,e,i,n);var a=L0();return t.flags|=1,typeof i=="object"&&i!==null&&typeof i.render=="function"&&i.$$typeof===void 0?(t.tag=1,t.memoizedState=null,t.updateQueue=null,xt(r)?(a=!0,_s(t)):a=!1,t.memoizedState=i.state!==null&&i.state!==void 0?i.state:null,C0(t),i.updater=Wc,t.stateNode=i,i._reactInternals=t,x1(t,r,e,n),t=k1(null,t,r,!0,a,n)):(t.tag=0,_e&&a&&j0(t),ct(null,t,i,n),t=t.child),t;case 16:r=t.elementType;e:{switch(ss(e,t),e=t.pendingProps,i=r._init,r=i(r._payload),t.type=r,i=t.tag=dx(r),e=Xt(r,e),i){case 0:t=w1(null,t,r,e,n);break e;case 1:t=r7(null,t,r,e,n);break e;case 11:t=t7(null,t,r,e,n);break e;case 14:t=n7(null,t,r,Xt(r.type,e),n);break e}throw Error(H(306,r,""))}return t;case 0:return r=t.type,i=t.pendingProps,i=t.elementType===r?i:Xt(r,i),w1(e,t,r,i,n);case 1:return r=t.type,i=t.pendingProps,i=t.elementType===r?i:Xt(r,i),r7(e,t,r,i,n);case 3:e:{if(Q8(t),e===null)throw Error(H(387));r=t.pendingProps,a=t.memoizedState,i=a.element,j8(e,t),As(t,r,null,n);var l=t.memoizedState;if(r=l.element,a.isDehydrated)if(a={element:r,isDehydrated:!1,cache:l.cache,pendingSuspenseBoundaries:l.pendingSuspenseBoundaries,transitions:l.transitions},t.updateQueue.baseState=a,t.memoizedState=a,t.flags&256){i=Bi(Error(H(423)),t),t=i7(e,t,r,n,i);break e}else if(r!==i){i=Bi(Error(H(424)),t),t=i7(e,t,r,n,i);break e}else for(Ot=or(t.stateNode.containerInfo.firstChild),Pt=t,_e=!0,Zt=null,n=_8(t,null,r,n),t.child=n;n;)n.flags=n.flags&-3|4096,n=n.sibling;else{if(Li(),r===i){t=Dn(e,t,n);break e}ct(e,t,r,n)}t=t.child}return t;case 5:return O8(t),e===null&&y1(t),r=t.type,i=t.pendingProps,a=e!==null?e.memoizedProps:null,l=i.children,d1(r,i)?l=null:a!==null&&d1(r,a)&&(t.flags|=32),Z8(e,t),ct(e,t,l,n),t.child;case 6:return e===null&&y1(t),null;case 13:return J8(e,t,n);case 4:return $0(t,t.stateNode.containerInfo),r=t.pendingProps,e===null?t.child=Fi(t,null,r,n):ct(e,t,r,n),t.child;case 11:return r=t.type,i=t.pendingProps,i=t.elementType===r?i:Xt(r,i),t7(e,t,r,i,n);case 7:return ct(e,t,t.pendingProps,n),t.child;case 8:return ct(e,t,t.pendingProps.children,n),t.child;case 12:return ct(e,t,t.pendingProps.children,n),t.child;case 10:e:{if(r=t.type._context,i=t.pendingProps,a=t.memoizedProps,l=i.value,ve(Os,r._currentValue),r._currentValue=l,a!==null)if(rn(a.value,l)){if(a.children===i.children&&!gt.current){t=Dn(e,t,n);break e}}else for(a=t.child,a!==null&&(a.return=t);a!==null;){var o=a.dependencies;if(o!==null){l=a.child;for(var s=o.firstContext;s!==null;){if(s.context===r){if(a.tag===1){s=Nn(-1,n&-n),s.tag=2;var c=a.updateQueue;if(c!==null){c=c.shared;var f=c.pending;f===null?s.next=s:(s.next=f.next,f.next=s),c.pending=s}}a.lanes|=n,s=a.alternate,s!==null&&(s.lanes|=n),v1(a.return,n,t),o.lanes|=n;break}s=s.next}}else if(a.tag===10)l=a.type===t.type?null:a.child;else if(a.tag===18){if(l=a.return,l===null)throw Error(H(341));l.lanes|=n,o=l.alternate,o!==null&&(o.lanes|=n),v1(l,n,t),l=a.sibling}else l=a.child;if(l!==null)l.return=a;else for(l=a;l!==null;){if(l===t){l=null;break}if(a=l.sibling,a!==null){a.return=l.return,l=a;break}l=l.return}a=l}ct(e,t,i.children,n),t=t.child}return t;case 9:return i=t.type,r=t.pendingProps.children,Ei(t,n),i=Rt(i),r=r(i),t.flags|=1,ct(e,t,r,n),t.child;case 14:return r=t.type,i=Xt(r,t.pendingProps),i=Xt(r.type,i),n7(e,t,r,i,n);case 15:return K8(e,t,t.type,t.pendingProps,n);case 17:return r=t.type,i=t.pendingProps,i=t.elementType===r?i:Xt(r,i),ss(e,t),t.tag=1,xt(r)?(e=!0,_s(t)):e=!1,Ei(t,n),V8(t,r,i),x1(t,r,i,n),k1(null,t,r,!0,e,n);case 19:return e6(e,t,n);case 22:return Y8(e,t,n)}throw Error(H(156,t.tag))};function y6(e,t){return Uy(e,t)}function ux(e,t,n,r){this.tag=e,this.key=n,this.sibling=this.child=this.return=this.stateNode=this.type=this.elementType=null,this.index=0,this.ref=null,this.pendingProps=t,this.dependencies=this.memoizedState=this.updateQueue=this.memoizedProps=null,this.mode=r,this.subtreeFlags=this.flags=0,this.deletions=null,this.childLanes=this.lanes=0,this.alternate=null}function It(e,t,n,r){return new ux(e,t,n,r)}function q0(e){return e=e.prototype,!(!e||!e.isReactComponent)}function dx(e){if(typeof e=="function")return q0(e)?1:0;if(e!=null){if(e=e.$$typeof,e===p0)return 11;if(e===h0)return 14}return 2}function dr(e,t){var n=e.alternate;return n===null?(n=It(e.tag,t,e.key,e.mode),n.elementType=e.elementType,n.type=e.type,n.stateNode=e.stateNode,n.alternate=e,e.alternate=n):(n.pendingProps=t,n.type=e.type,n.flags=0,n.subtreeFlags=0,n.deletions=null),n.flags=e.flags&14680064,n.childLanes=e.childLanes,n.lanes=e.lanes,n.child=e.child,n.memoizedProps=e.memoizedProps,n.memoizedState=e.memoizedState,n.updateQueue=e.updateQueue,t=e.dependencies,n.dependencies=t===null?null:{lanes:t.lanes,firstContext:t.firstContext},n.sibling=e.sibling,n.index=e.index,n.ref=e.ref,n}function ds(e,t,n,r,i,a){var l=2;if(r=e,typeof e=="function")q0(e)&&(l=1);else if(typeof e=="string")l=5;else e:switch(e){case pi:return Br(n.children,i,a,t);case f0:l=8,i|=8;break;case Ud:return e=It(12,n,t,i|2),e.elementType=Ud,e.lanes=a,e;case Hd:return e=It(13,n,t,i),e.elementType=Hd,e.lanes=a,e;case Gd:return e=It(19,n,t,i),e.elementType=Gd,e.lanes=a,e;case Oy:return Gc(n,i,a,t);default:if(typeof e=="object"&&e!==null)switch(e.$$typeof){case Sy:l=10;break e;case jy:l=9;break e;case p0:l=11;break e;case h0:l=14;break e;case Kn:l=16,r=null;break e}throw Error(H(130,e==null?e:typeof e,""))}return t=It(l,n,t,i),t.elementType=e,t.type=r,t.lanes=a,t}function Br(e,t,n,r){return e=It(7,e,r,t),e.lanes=n,e}function Gc(e,t,n,r){return e=It(22,e,r,t),e.elementType=Oy,e.lanes=n,e.stateNode={isHidden:!1},e}function sd(e,t,n){return e=It(6,e,null,t),e.lanes=n,e}function cd(e,t,n){return t=It(4,e.children!==null?e.children:[],e.key,t),t.lanes=n,t.stateNode={containerInfo:e.containerInfo,pendingChildren:null,implementation:e.implementation},t}function fx(e,t,n,r,i){this.tag=t,this.containerInfo=e,this.finishedWork=this.pingCache=this.current=this.pendingChildren=null,this.timeoutHandle=-1,this.callbackNode=this.pendingContext=this.context=null,this.callbackPriority=0,this.eventTimes=Uu(0),this.expirationTimes=Uu(-1),this.entangledLanes=this.finishedLanes=this.mutableReadLanes=this.expiredLanes=this.pingedLanes=this.suspendedLanes=this.pendingLanes=0,this.entanglements=Uu(0),this.identifierPrefix=r,this.onRecoverableError=i,this.mutableSourceEagerHydrationData=null}function K0(e,t,n,r,i,a,l,o,s){return e=new fx(e,t,n,o,s),t===1?(t=1,a===!0&&(t|=8)):t=0,a=It(3,null,null,t),e.current=a,a.stateNode=e,a.memoizedState={element:r,isDehydrated:n,cache:null,transitions:null,pendingSuspenseBoundaries:null},C0(a),e}function px(e,t,n){var r=3<arguments.length&&arguments[3]!==void 0?arguments[3]:null;return{$$typeof:fi,key:r==null?null:""+r,children:e,containerInfo:t,implementation:n}}function v6(e){if(!e)return mr;e=e._reactInternals;e:{if(ni(e)!==e||e.tag!==1)throw Error(H(170));var t=e;do{switch(t.tag){case 3:t=t.stateNode.context;break e;case 1:if(xt(t.type)){t=t.stateNode.__reactInternalMemoizedMergedChildContext;break e}}t=t.return}while(t!==null);throw Error(H(171))}if(e.tag===1){var n=e.type;if(xt(n))return v8(e,n,t)}return t}function g6(e,t,n,r,i,a,l,o,s){return e=K0(n,r,!0,e,i,a,l,o,s),e.context=v6(null),n=e.current,r=dt(),i=ur(n),a=Nn(r,i),a.callback=t??null,sr(n,a,i),e.current.lanes=i,co(e,i,r),bt(e,r),e}function Vc(e,t,n,r){var i=t.current,a=dt(),l=ur(i);return n=v6(n),t.context===null?t.context=n:t.pendingContext=n,t=Nn(a,l),t.payload={element:e},r=r===void 0?null:r,r!==null&&(t.callback=r),e=sr(i,t,l),e!==null&&(tn(e,i,l,a),as(e,i,l)),l}function Is(e){if(e=e.current,!e.child)return null;switch(e.child.tag){case 5:return e.child.stateNode;default:return e.child.stateNode}}function h7(e,t){if(e=e.memoizedState,e!==null&&e.dehydrated!==null){var n=e.retryLane;e.retryLane=n!==0&&n<t?n:t}}function Y0(e,t){h7(e,t),(e=e.alternate)&&h7(e,t)}function hx(){return null}var x6=typeof reportError=="function"?reportError:function(e){console.error(e)};function Z0(e){this._internalRoot=e}Xc.prototype.render=Z0.prototype.render=function(e){var t=this._internalRoot;if(t===null)throw Error(H(409));Vc(e,t,null,null)};Xc.prototype.unmount=Z0.prototype.unmount=function(){var e=this._internalRoot;if(e!==null){this._internalRoot=null;var t=e.containerInfo;Kr(function(){Vc(null,e,null,null)}),t[zn]=null}};function Xc(e){this._internalRoot=e}Xc.prototype.unstable_scheduleHydration=function(e){if(e){var t=Yy();e={blockedOn:null,target:e,priority:t};for(var n=0;n<Qn.length&&t!==0&&t<Qn[n].priority;n++);Qn.splice(n,0,e),n===0&&Qy(e)}};function Q0(e){return!(!e||e.nodeType!==1&&e.nodeType!==9&&e.nodeType!==11)}function qc(e){return!(!e||e.nodeType!==1&&e.nodeType!==9&&e.nodeType!==11&&(e.nodeType!==8||e.nodeValue!==" react-mount-point-unstable "))}function m7(){}function mx(e,t,n,r,i){if(i){if(typeof r=="function"){var a=r;r=function(){var c=Is(l);a.call(c)}}var l=g6(t,r,e,0,null,!1,!1,"",m7);return e._reactRootContainer=l,e[zn]=l.current,yl(e.nodeType===8?e.parentNode:e),Kr(),l}for(;i=e.lastChild;)e.removeChild(i);if(typeof r=="function"){var o=r;r=function(){var c=Is(s);o.call(c)}}var s=K0(e,0,!1,null,null,!1,!1,"",m7);return e._reactRootContainer=s,e[zn]=s.current,yl(e.nodeType===8?e.parentNode:e),Kr(function(){Vc(t,s,n,r)}),s}function Kc(e,t,n,r,i){var a=n._reactRootContainer;if(a){var l=a;if(typeof i=="function"){var o=i;i=function(){var s=Is(l);o.call(s)}}Vc(t,l,e,i)}else l=mx(n,t,e,i,r);return Is(l)}qy=function(e){switch(e.tag){case 3:var t=e.stateNode;if(t.current.memoizedState.isDehydrated){var n=Va(t.pendingLanes);n!==0&&(v0(t,n|1),bt(t,$e()),!(ie&6)&&(Wi=$e()+500,xr()))}break;case 13:Kr(function(){var r=In(e,1);if(r!==null){var i=dt();tn(r,e,1,i)}}),Y0(e,1)}};g0=function(e){if(e.tag===13){var t=In(e,134217728);if(t!==null){var n=dt();tn(t,e,134217728,n)}Y0(e,134217728)}};Ky=function(e){if(e.tag===13){var t=ur(e),n=In(e,t);if(n!==null){var r=dt();tn(n,e,t,r)}Y0(e,t)}};Yy=function(){return de};Zy=function(e,t){var n=de;try{return de=e,t()}finally{de=n}};t1=function(e,t,n){switch(t){case"input":if(qd(e,n),t=n.name,n.type==="radio"&&t!=null){for(n=e;n.parentNode;)n=n.parentNode;for(n=n.querySelectorAll("input[name="+JSON.stringify(""+t)+'][type="radio"]'),t=0;t<n.length;t++){var r=n[t];if(r!==e&&r.form===e.form){var i=Fc(r);if(!i)throw Error(H(90));Ay(r),qd(r,i)}}}break;case"textarea":Ny(e,n);break;case"select":t=n.value,t!=null&&Pi(e,!!n.multiple,t,!1)}};Dy=G0;Ly=Kr;var yx={usingClientEntryPoint:!1,Events:[fo,vi,Fc,zy,Iy,G0]},$a={findFiberByHostInstance:$r,bundleType:0,version:"18.3.1",rendererPackageName:"react-dom"},vx={bundleType:$a.bundleType,version:$a.version,rendererPackageName:$a.rendererPackageName,rendererConfig:$a.rendererConfig,overrideHookState:null,overrideHookStateDeletePath:null,overrideHookStateRenamePath:null,overrideProps:null,overridePropsDeletePath:null,overridePropsRenamePath:null,setErrorHandler:null,setSuspenseHandler:null,scheduleUpdate:null,currentDispatcherRef:Bn.ReactCurrentDispatcher,findHostInstanceByFiber:function(e){return e=By(e),e===null?null:e.stateNode},findFiberByHostInstance:$a.findFiberByHostInstance||hx,findHostInstancesForRefresh:null,scheduleRefresh:null,scheduleRoot:null,setRefreshHandler:null,getCurrentFiber:null,reconcilerVersion:"18.3.1-next-f1338f8080-20240426"};if(typeof __REACT_DEVTOOLS_GLOBAL_HOOK__<"u"){var Fo=__REACT_DEVTOOLS_GLOBAL_HOOK__;if(!Fo.isDisabled&&Fo.supportsFiber)try{zc=Fo.inject(vx),hn=Fo}catch{}}Mt.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED=yx;Mt.createPortal=function(e,t){var n=2<arguments.length&&arguments[2]!==void 0?arguments[2]:null;if(!Q0(t))throw Error(H(200));return px(e,t,null,n)};Mt.createRoot=function(e,t){if(!Q0(e))throw Error(H(299));var n=!1,r="",i=x6;return t!=null&&(t.unstable_strictMode===!0&&(n=!0),t.identifierPrefix!==void 0&&(r=t.identifierPrefix),t.onRecoverableError!==void 0&&(i=t.onRecoverableError)),t=K0(e,1,!1,null,null,n,!1,r,i),e[zn]=t.current,yl(e.nodeType===8?e.parentNode:e),new Z0(t)};Mt.findDOMNode=function(e){if(e==null)return null;if(e.nodeType===1)return e;var t=e._reactInternals;if(t===void 0)throw typeof e.render=="function"?Error(H(188)):(e=Object.keys(e).join(","),Error(H(268,e)));return e=By(t),e=e===null?null:e.stateNode,e};Mt.flushSync=function(e){return Kr(e)};Mt.hydrate=function(e,t,n){if(!qc(t))throw Error(H(200));return Kc(null,e,t,!0,n)};Mt.hydrateRoot=function(e,t,n){if(!Q0(e))throw Error(H(405));var r=n!=null&&n.hydratedSources||null,i=!1,a="",l=x6;if(n!=null&&(n.unstable_strictMode===!0&&(i=!0),n.identifierPrefix!==void 0&&(a=n.identifierPrefix),n.onRecoverableError!==void 0&&(l=n.onRecoverableError)),t=g6(t,null,e,1,n??null,i,!1,a,l),e[zn]=t.current,yl(e),r)for(e=0;e<r.length;e++)n=r[e],i=n._getVersion,i=i(n._source),t.mutableSourceEagerHydrationData==null?t.mutableSourceEagerHydrationData=[n,i]:t.mutableSourceEagerHydrationData.push(n,i);return new Xc(t)};Mt.render=function(e,t,n){if(!qc(t))throw Error(H(200));return Kc(null,e,t,!1,n)};Mt.unmountComponentAtNode=function(e){if(!qc(e))throw Error(H(40));return e._reactRootContainer?(Kr(function(){Kc(null,null,e,!1,function(){e._reactRootContainer=null,e[zn]=null})}),!0):!1};Mt.unstable_batchedUpdates=G0;Mt.unstable_renderSubtreeIntoContainer=function(e,t,n,r){if(!qc(n))throw Error(H(200));if(e==null||e._reactInternals===void 0)throw Error(H(38));return Kc(e,t,n,!1,r)};Mt.version="18.3.1-next-f1338f8080-20240426";function b6(){if(!(typeof __REACT_DEVTOOLS_GLOBAL_HOOK__>"u"||typeof __REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE!="function"))try{__REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE(b6)}catch(e){console.error(e)}}b6(),by.exports=Mt;var gx=by.exports,y7=gx;Bd.createRoot=y7.createRoot,Bd.hydrateRoot=y7.hydrateRoot;function xx(){const[e,t]=$.useState(null),[n,r]=$.useState([]),[i,a]=$.useState([]),[l,o]=$.useState(!0);return $.useEffect(()=>{const s=async()=>{try{const[f,d,p]=await Promise.all([fetch("http://localhost:8001/api/energy-savings"),fetch("http://localhost:8001/api/ai-frequency-control"),fetch("http://localhost:8001/api/energy-savings-summary")]),[h,x,v]=await Promise.all([f.json(),d.json(),p.json()]);h.success&&t(h.data),x.success&&r(x.data),v.success&&a(v.data)}catch(f){console.error("데이터 로드 실패:",f)}finally{o(!1)}};s();const c=setInterval(s,2e3);return()=>clearInterval(c)},[]),l?u.jsx("div",{className:"dashboard-compact",style:{display:"flex",justifyContent:"center",alignItems:"center"},children:u.jsxs("div",{style:{textAlign:"center",color:"#94a3b8"},children:[u.jsx("div",{style:{fontSize:"2rem",marginBottom:"1rem"},children:"⏳"}),u.jsx("div",{children:"데이터 로딩 중..."})]})}):u.jsxs("div",{className:"dashboard-compact",children:[e&&u.jsx("div",{className:"top-section",children:u.jsx(bx,{data:e})}),u.jsxs("div",{className:"bottom-section",children:[i.length>0&&u.jsxs("div",{className:"table-panel",children:[u.jsx("h3",{children:"📋 Energy Saving Summary"}),u.jsx("div",{className:"table-scroll",children:u.jsx(wx,{data:i})})]}),n.length>0&&u.jsxs("div",{className:"table-panel",children:[u.jsx("h3",{children:"📈 AI 목표 vs 실제 주파수"}),u.jsx("div",{className:"table-scroll",children:u.jsx(kx,{data:n})})]})]})]})}function bx({data:e}){const t=(e==null?void 0:e.realtime)||{},n=(e==null?void 0:e.today)||{},r=(e==null?void 0:e.month)||{},i=(t==null?void 0:t.total)||{},a=(t==null?void 0:t.swp)||{},l=(t==null?void 0:t.fwp)||{},o=(t==null?void 0:t.fan)||{};return u.jsxs("div",{className:"compact-energy-card",children:[u.jsxs("div",{className:"realtime-panel",children:[u.jsx("div",{className:"panel-title",children:"🔴 실시간 순간 절감률"}),u.jsxs("div",{className:"realtime-grid",children:[u.jsxs("div",{className:"realtime-item",children:[u.jsx("span",{className:"label",children:"60Hz 고정"}),u.jsxs("span",{className:"value",children:[(i.power_60hz||0).toLocaleString()," kW"]})]}),u.jsxs("div",{className:"realtime-item",children:[u.jsx("span",{className:"label",children:"VFD 가변"}),u.jsxs("span",{className:"value vfd",children:[(i.power_vfd||0).toLocaleString()," kW"]})]}),u.jsxs("div",{className:"realtime-item highlight",children:[u.jsx("span",{className:"label",children:"절감 전력"}),u.jsxs("span",{className:"value saving",children:[(i.savings_kw||0).toLocaleString()," kW (",i.savings_rate||0,"%↓)"]})]})]})]}),u.jsxs("div",{className:"accumulated-panel",children:[u.jsxs("div",{className:"acc-item",children:[u.jsx("div",{className:"panel-title",children:"📅 오늘 누적"}),u.jsxs("div",{className:"acc-value",children:[(n.total_kwh_saved||0).toLocaleString()," kWh"]}),u.jsxs("div",{className:"acc-rate",children:["평균 ",n.avg_savings_rate||0,"% 절감"]})]}),u.jsxs("div",{className:"acc-item",children:[u.jsx("div",{className:"panel-title",children:"📊 이번 달 누적"}),u.jsxs("div",{className:"acc-value",children:[(r.total_kwh_saved||0).toLocaleString()," kWh"]}),u.jsxs("div",{className:"acc-rate",children:["평균 ",r.avg_savings_rate||0,"% 절감"]})]})]}),u.jsxs("div",{className:"system-panel",children:[u.jsx("div",{className:"panel-title",children:"시스템별 절감률"}),u.jsx(ud,{label:"SWP",kw:a.savings_kw||0,rate:a.savings_rate||0,color:"#38bdf8"}),u.jsx(ud,{label:"FWP",kw:l.savings_kw||0,rate:l.savings_rate||0,color:"#34d399"}),u.jsx(ud,{label:"FAN",kw:o.savings_kw||0,rate:o.savings_rate||0,color:"#fbbf24"})]})]})}function ud({label:e,kw:t,rate:n,color:r}){return u.jsxs("div",{className:"system-row",children:[u.jsx("span",{className:"sys-label",style:{borderLeft:`3px solid ${r}`},children:e}),u.jsxs("span",{className:"sys-kw",children:[t," kW"]}),u.jsx("div",{className:"sys-bar",children:u.jsx("div",{className:"sys-bar-fill",style:{width:`${Math.min(n,100)}%`,background:r}})}),u.jsxs("span",{className:"sys-rate",children:[n,"%"]})]})}function wx({data:e}){const t=n=>n.startsWith("SWP")?"swp":n.startsWith("FWP")?"fwp":n.startsWith("FAN")?"fan":"";return u.jsxs("table",{className:"compact-table summary-table",children:[u.jsx("thead",{children:u.jsxs("tr",{children:[u.jsx("th",{children:"Name"}),u.jsx("th",{children:"Freq (Hz)"}),u.jsx("th",{children:"Power (kW)"}),u.jsx("th",{children:"Saved (kWh)"}),u.jsx("th",{children:"Ratio (%)"}),u.jsx("th",{children:"ESS Hours"})]})}),u.jsx("tbody",{children:e.map((n,r)=>u.jsxs("tr",{className:t(n.name),children:[u.jsx("td",{className:"name",children:n.name}),u.jsx("td",{children:n.actual_freq}),u.jsx("td",{children:n.actual_power}),u.jsx("td",{children:n.saved_kwh}),u.jsx("td",{className:n.saved_ratio>0?"positive":"",children:n.saved_ratio}),u.jsx("td",{children:n.run_hours_ess.toLocaleString()})]},r))})]})}function kx({data:e}){const t={"SW 펌프":e.filter(n=>n.group==="SW 펌프"),"FW 펌프":e.filter(n=>n.group==="FW 펌프"),"E/R 팬":e.filter(n=>n.group==="E/R 팬")};return u.jsxs("table",{className:"compact-table ai-table",children:[u.jsx("thead",{children:u.jsxs("tr",{children:[u.jsx("th",{children:"그룹"}),u.jsx("th",{children:"장비"}),u.jsx("th",{children:"모드"}),u.jsx("th",{children:"목표"}),u.jsx("th",{children:"실제"}),u.jsx("th",{children:"편차"}),u.jsx("th",{children:"상태"})]})}),u.jsx("tbody",{children:Object.entries(t).map(([n,r])=>r.map((i,a)=>u.jsxs("tr",{children:[a===0&&u.jsx("td",{rowSpan:r.length,className:"group",children:n}),u.jsx("td",{children:i.name}),u.jsx("td",{className:i.mode==="AI 제어"?"ai":"stop",children:i.mode==="AI 제어"?"AI":"-"}),u.jsx("td",{children:i.mode==="AI 제어"?i.target_frequency.toFixed(1):"-"}),u.jsx("td",{children:i.mode==="AI 제어"?i.actual_frequency.toFixed(1):"-"}),u.jsx("td",{className:i.mode==="AI 제어"?Math.abs(i.deviation)<.3?"good":Math.abs(i.deviation)<1?"warn":"bad":"",children:i.mode==="AI 제어"?(i.deviation>=0?"+":"")+i.deviation.toFixed(1):"-"}),u.jsx("td",{className:i.mode==="AI 제어"?`status-${i.status}`:"",children:i.mode==="AI 제어"?i.status==="정상"?"✓":(i.status==="주의","⚠"):"-"})]},`${n}-${a}`)))})]})}const Mr=[{name:"TX1",symbolId:"TX1",x:825,y:320,unit:"°C",decimal:1},{name:"TX2",symbolId:"TX2",x:568,y:154,unit:"°C",decimal:1},{name:"TX3",symbolId:"TX3",x:568,y:298,unit:"°C",decimal:1},{name:"TX4",symbolId:"TX4",x:318,y:156,unit:"°C",decimal:1},{name:"TX5",symbolId:"TX5",x:495,y:440,unit:"°C",decimal:1},{name:"TX6",symbolId:"TX6",x:0,y:0,unit:"°C",decimal:1},{name:"DPX1",symbolId:"PX1",x:945,y:439,unit:" bar",decimal:2},{name:"PX2",symbolId:"PX2",x:0,y:0,unit:" bar",decimal:2},{name:"LT Pump No.1",symbolId:"g229",x:244.243,y:372.093,type:"pump"},{name:"LT Pump No.1 Auto/Man mode",symbolId:"LT_Pump1_Mode",x:300,y:365},{name:"LT Pump No.1 VFD/ BYPASS",symbolId:"LT_Pump1_VFD",x:300,y:382},{name:"LT Pump No.1 Hz(VFD)",symbolId:"LT_Pump1_Hz",x:300,y:399,unit:" Hz"},{name:"LT Pump No.1 running hour",symbolId:"LT_Pump1_hour",x:300,y:416,unit:" h"},{name:"LT Pump No.2",symbolId:"g245",x:244.243,y:459.033,type:"pump"},{name:"LT Pump No.2 Auto/Man mode",symbolId:"LT_Pump2_Mode",x:300,y:452},{name:"LT Pump No.2 VFD/ BYPASS",symbolId:"LT_Pump2_VFD",x:300,y:469},{name:"LT Pump No.2 Hz(VFD)",symbolId:"LT_Pump2_Hz",x:300,y:486,unit:" Hz"},{name:"LT Pump No.2 running hour",symbolId:"LT_Pump2_hour",x:300,y:503,unit:" h"},{name:"LT Pump No.3",symbolId:"g261",x:244.243,y:545.963,type:"pump"},{name:"LT Pump No.3 Auto/Man mode",symbolId:"LT_Pump3_Mode",x:300,y:539},{name:"LT Pump No.3 VFD/ BYPASS",symbolId:"LT_Pump3_VFD",x:300,y:556},{name:"LT Pump No.3 Hz(VFD)",symbolId:"LT_Pump3_Hz",x:300,y:573,unit:" Hz"},{name:"LT Pump No.3 running hour",symbolId:"LT_Pump3_hour",x:300,y:590,unit:" h"},{name:"SW Pump No.1",symbolId:"g103",x:599.923,y:476.633,type:"pump"},{name:"SW Pump No.1 Auto/Man mode",symbolId:"SW_Pump1_Mode",x:640,y:470},{name:"SW Pump No.1 VFD/ BYPASS",symbolId:"SW_Pump1_VFD",x:640,y:487},{name:"SW Pump No.1 Hz(VFD)",symbolId:"SW_Pump1_Hz",x:640,y:504,unit:" Hz"},{name:"SW Pump No.1 running hour",symbolId:"SW_Pump1_hour",x:640,y:521,unit:" h"},{name:"SW Pump No.2",symbolId:"g1046",x:695.023,y:476.633,type:"pump"},{name:"SW Pump No.2 Auto/Man mode",symbolId:"SW_Pump2_Mode",x:735,y:470},{name:"SW Pump No.2 VFD/ BYPASS",symbolId:"SW_Pump2_VFD",x:735,y:487},{name:"SW Pump No.2 Hz(VFD)",symbolId:"SW_Pump2_Hz",x:735,y:504,unit:" Hz"},{name:"SW Pump No.2 running hour",symbolId:"SW_Pump2_hour",x:735,y:521,unit:" h"},{name:"SW Pump No.3",symbolId:"g119",x:786.444,y:476.633,type:"pump"},{name:"SW Pump No.3 Auto/Man mode",symbolId:"SW_Pump3_Mode",x:827,y:470},{name:"SW Pump No.3 VFD/ BYPASS",symbolId:"SW_Pump3_VFD",x:827,y:487},{name:"SW Pump No.3 Hz(VFD)",symbolId:"SW_Pump3_Hz",x:827,y:504,unit:" Hz"},{name:"SW Pump No.3 running hour",symbolId:"SW_Pump3_hour",x:827,y:521,unit:" h"}],_x=Mr.filter(e=>e.name.startsWith("TX")||e.name.startsWith("PX")||e.name.startsWith("DPX")),Sx={0:{name:"SW_Pump_1",data:Mr.filter(e=>e.name.includes("SW Pump No.3"))},1:{name:"SW_Pump_2",data:Mr.filter(e=>e.name.includes("SW Pump No.2"))},2:{name:"SW_Pump_3",data:Mr.filter(e=>e.name.includes("SW Pump No.1"))},3:{name:"LT_Pump_1",data:Mr.filter(e=>e.name.includes("LT Pump No.1"))},4:{name:"LT_Pump_2",data:Mr.filter(e=>e.name.includes("LT Pump No.2"))},5:{name:"LT_Pump_3",data:Mr.filter(e=>e.name.includes("LT Pump No.3"))}},jx=`<?xml version="1.0" encoding="UTF-8" standalone="no"?>
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
`;function Ox({sensors:e={},pumps:t=[],onPumpCommand:n}){var p,h,x;const r=$.useRef(null),[i,a]=$.useState(!1),[l,o]=$.useState(null);$.useEffect(()=>{if(r.current&&!i){r.current.innerHTML=jx;const v=r.current.querySelector("svg");if(v){const w=v.querySelector("defs")||document.createElementNS("http://www.w3.org/2000/svg","defs");v.querySelector("defs")||v.insertBefore(w,v.firstChild);const y=document.createElementNS("http://www.w3.org/2000/svg","filter");y.setAttribute("id","sensorValueGlow"),y.setAttribute("x","-50%"),y.setAttribute("y","-50%"),y.setAttribute("width","200%"),y.setAttribute("height","200%");const m=document.createElementNS("http://www.w3.org/2000/svg","feGaussianBlur");m.setAttribute("in","SourceAlpha"),m.setAttribute("stdDeviation","2"),m.setAttribute("result","blur");const g=document.createElementNS("http://www.w3.org/2000/svg","feOffset");g.setAttribute("in","blur"),g.setAttribute("dx","0"),g.setAttribute("dy","1"),g.setAttribute("result","offsetBlur");const _=document.createElementNS("http://www.w3.org/2000/svg","feFlood");_.setAttribute("flood-color","#22d3ee"),_.setAttribute("flood-opacity","0.4"),_.setAttribute("result","color");const b=document.createElementNS("http://www.w3.org/2000/svg","feComposite");b.setAttribute("in","color"),b.setAttribute("in2","offsetBlur"),b.setAttribute("operator","in"),b.setAttribute("result","shadow");const k=document.createElementNS("http://www.w3.org/2000/svg","feMerge"),S=document.createElementNS("http://www.w3.org/2000/svg","feMergeNode");S.setAttribute("in","shadow");const j=document.createElementNS("http://www.w3.org/2000/svg","feMergeNode");j.setAttribute("in","SourceGraphic"),k.appendChild(S),k.appendChild(j),y.appendChild(m),y.appendChild(g),y.appendChild(_),y.appendChild(b),y.appendChild(k),w.appendChild(y);const O=document.createElementNS("http://www.w3.org/2000/svg","filter");O.setAttribute("id","textGlow"),O.setAttribute("x","-50%"),O.setAttribute("y","-50%"),O.setAttribute("width","200%"),O.setAttribute("height","200%");const C=document.createElementNS("http://www.w3.org/2000/svg","feGaussianBlur");C.setAttribute("in","SourceGraphic"),C.setAttribute("stdDeviation","1.5"),C.setAttribute("result","blur");const M=document.createElementNS("http://www.w3.org/2000/svg","feMerge"),P=document.createElementNS("http://www.w3.org/2000/svg","feMergeNode");P.setAttribute("in","blur");const N=document.createElementNS("http://www.w3.org/2000/svg","feMergeNode");N.setAttribute("in","SourceGraphic"),M.appendChild(P),M.appendChild(N),O.appendChild(C),O.appendChild(M),w.appendChild(O)}a(!0),s()}},[]);const s=()=>{if(!r.current)return;const v=r.current.querySelector("svg");if(!v)return;[{index:0,name:"LT Pump No.1",x:240,y:360,width:65,height:60},{index:1,name:"LT Pump No.2",x:240,y:447,width:65,height:60},{index:2,name:"LT Pump No.3",x:240,y:557,width:65,height:60},{index:3,name:"SW Pump No.1",x:585,y:478,width:65,height:60},{index:4,name:"SW Pump No.2",x:680,y:478,width:65,height:60},{index:5,name:"SW Pump No.3",x:770,y:478,width:65,height:60}].forEach(y=>{const m=document.createElementNS("http://www.w3.org/2000/svg","rect");m.setAttribute("x",y.x),m.setAttribute("y",y.y),m.setAttribute("width",y.width),m.setAttribute("height",y.height),m.setAttribute("fill","transparent"),m.setAttribute("cursor","pointer"),m.setAttribute("data-pump-index",y.index),m.addEventListener("click",()=>{c(y.index)}),v.appendChild(m)})},c=v=>{t[v]&&(o({...t[v],index:v}),console.log(`펌프 ${v} 클릭됨`))};$.useEffect(()=>{l&&t[l.index]&&o(v=>({...t[v.index],index:v.index}))},[t]),$.useEffect(()=>{i&&f()},[e,t,i]);const f=()=>{if(!r.current)return;const v=r.current.querySelector("svg");if(!v){console.warn("SVG 요소를 찾을 수 없습니다");return}console.log("📊 데이터 업데이트:",{sensors:e,pumps:t}),(()=>{const y=v.querySelector("defs")||document.createElementNS("http://www.w3.org/2000/svg","defs");if(!v.querySelector("#glassGlow")){const m=document.createElementNS("http://www.w3.org/2000/svg","filter");m.setAttribute("id","glassGlow"),m.setAttribute("x","-50%"),m.setAttribute("y","-50%"),m.setAttribute("width","200%"),m.setAttribute("height","200%");const g=document.createElementNS("http://www.w3.org/2000/svg","feGaussianBlur");g.setAttribute("stdDeviation","1"),g.setAttribute("result","coloredBlur");const _=document.createElementNS("http://www.w3.org/2000/svg","feMerge"),b=document.createElementNS("http://www.w3.org/2000/svg","feMergeNode");b.setAttribute("in","coloredBlur");const k=document.createElementNS("http://www.w3.org/2000/svg","feMergeNode");k.setAttribute("in","SourceGraphic"),_.appendChild(b),_.appendChild(k),m.appendChild(g),m.appendChild(_),y.appendChild(m)}if(!v.querySelector("#neonGlow")){const m=document.createElementNS("http://www.w3.org/2000/svg","filter");m.setAttribute("id","neonGlow"),m.setAttribute("x","-50%"),m.setAttribute("y","-50%"),m.setAttribute("width","200%"),m.setAttribute("height","200%");const g=document.createElementNS("http://www.w3.org/2000/svg","feGaussianBlur");g.setAttribute("stdDeviation","2.5"),g.setAttribute("result","coloredBlur");const _=document.createElementNS("http://www.w3.org/2000/svg","feMerge"),b=document.createElementNS("http://www.w3.org/2000/svg","feMergeNode");b.setAttribute("in","coloredBlur");const k=document.createElementNS("http://www.w3.org/2000/svg","feMergeNode");k.setAttribute("in","SourceGraphic"),_.appendChild(b),_.appendChild(k),m.appendChild(g),m.appendChild(_),y.appendChild(m)}if(!v.querySelector("#cardShadow")){const m=document.createElementNS("http://www.w3.org/2000/svg","filter");m.setAttribute("id","cardShadow"),m.setAttribute("x","-50%"),m.setAttribute("y","-50%"),m.setAttribute("width","200%"),m.setAttribute("height","200%");const g=document.createElementNS("http://www.w3.org/2000/svg","feGaussianBlur");g.setAttribute("stdDeviation","1.5"),g.setAttribute("result","coloredBlur");const _=document.createElementNS("http://www.w3.org/2000/svg","feMerge"),b=document.createElementNS("http://www.w3.org/2000/svg","feMergeNode");b.setAttribute("in","coloredBlur");const k=document.createElementNS("http://www.w3.org/2000/svg","feMergeNode");k.setAttribute("in","SourceGraphic"),_.appendChild(b),_.appendChild(k),m.appendChild(g),m.appendChild(_),y.appendChild(m)}if(!v.querySelector("#softGlow")){const m=document.createElementNS("http://www.w3.org/2000/svg","filter");m.setAttribute("id","softGlow"),m.setAttribute("x","-50%"),m.setAttribute("y","-50%"),m.setAttribute("width","200%"),m.setAttribute("height","200%");const g=document.createElementNS("http://www.w3.org/2000/svg","feGaussianBlur");g.setAttribute("stdDeviation","3"),g.setAttribute("result","coloredBlur");const _=document.createElementNS("http://www.w3.org/2000/svg","feMerge"),b=document.createElementNS("http://www.w3.org/2000/svg","feMergeNode");b.setAttribute("in","coloredBlur");const k=document.createElementNS("http://www.w3.org/2000/svg","feMergeNode");k.setAttribute("in","SourceGraphic"),_.appendChild(b),_.appendChild(k),m.appendChild(g),m.appendChild(_),y.appendChild(m)}if(!v.querySelector("#sharpShadow")){const m=document.createElementNS("http://www.w3.org/2000/svg","filter");m.setAttribute("id","sharpShadow"),m.setAttribute("x","-50%"),m.setAttribute("y","-50%"),m.setAttribute("width","200%"),m.setAttribute("height","200%");const g=document.createElementNS("http://www.w3.org/2000/svg","feGaussianBlur");g.setAttribute("stdDeviation","0.5"),g.setAttribute("result","coloredBlur");const _=document.createElementNS("http://www.w3.org/2000/svg","feMerge"),b=document.createElementNS("http://www.w3.org/2000/svg","feMergeNode");b.setAttribute("in","coloredBlur");const k=document.createElementNS("http://www.w3.org/2000/svg","feMergeNode");k.setAttribute("in","SourceGraphic"),_.appendChild(b),_.appendChild(k),m.appendChild(g),m.appendChild(_),y.appendChild(m)}v.querySelector("defs")||v.insertBefore(y,v.firstChild)})(),_x.forEach(y=>{const m=y.name,g=e[m];if(g!==void 0&&y.x>0&&y.y>0){const _=g.toFixed(y.decimal),b=`${m}_value`;v.querySelectorAll(`#${b}_group`).forEach(A=>A.remove());const S=document.createElementNS("http://www.w3.org/2000/svg","g");S.setAttribute("id",`${b}_group`);const j="rgba(0, 0, 0, 0.95)",O="#00ff00",C="rgba(0, 255, 0, 0.4)",M="1",P="url(#ledGlow)",N="10",z=document.createElementNS("http://www.w3.org/2000/svg","text");z.setAttribute("id",b),z.setAttribute("x",y.x+6),z.setAttribute("y",y.y+4),z.setAttribute("font-family","Arial, sans-serif"),z.setAttribute("font-size",N),z.setAttribute("fill",O),z.setAttribute("font-weight","bold"),z.setAttribute("filter",P),z.textContent=`${_}${y.unit}`,v.appendChild(z);const E=z.getBBox();v.removeChild(z);const L=document.createElementNS("http://www.w3.org/2000/svg","rect");L.setAttribute("x",y.x-2),L.setAttribute("y",y.y-8),L.setAttribute("width",E.width+14),L.setAttribute("height",18),L.setAttribute("rx","4"),L.setAttribute("ry","4"),L.setAttribute("fill",j),L.setAttribute("stroke",C),L.setAttribute("stroke-width",M);const F=v.querySelector("defs")||document.createElementNS("http://www.w3.org/2000/svg","defs");if(!v.querySelector("#ledGlow")){const A=document.createElementNS("http://www.w3.org/2000/svg","filter");A.setAttribute("id","ledGlow"),A.setAttribute("x","-50%"),A.setAttribute("y","-50%"),A.setAttribute("width","200%"),A.setAttribute("height","200%");const I=document.createElementNS("http://www.w3.org/2000/svg","feGaussianBlur");I.setAttribute("stdDeviation","2"),I.setAttribute("result","coloredBlur");const D=document.createElementNS("http://www.w3.org/2000/svg","feMerge"),B=document.createElementNS("http://www.w3.org/2000/svg","feMergeNode");B.setAttribute("in","coloredBlur");const W=document.createElementNS("http://www.w3.org/2000/svg","feMergeNode");W.setAttribute("in","SourceGraphic"),D.appendChild(B),D.appendChild(W),A.appendChild(I),A.appendChild(D),F.appendChild(A),v.querySelector("defs")||v.insertBefore(F,v.firstChild)}S.appendChild(L),S.appendChild(z),v.appendChild(S),console.log(`✅ 센서 ${m} 표시 (스타일 ${m}): x=${y.x}, y=${y.y}, 값=${_}${y.unit}`)}}),t.forEach((y,m)=>{const g=Sx[m];if(!g){console.warn(`펌프 ${m} 매핑 정보 없음`);return}console.log(`펌프 ${m} 업데이트:`,y),g.data.forEach(j=>{var W;if(j.x===0||j.y===0)return;const O=`${j.symbolId}_value`;v.querySelectorAll(`#${O}_group`).forEach(X=>X.remove());let M="";if(j.name.includes("Auto/Man mode"))M=y.auto_mode?"AUTO":"MANU";else if(j.name.includes("running hour"))M=`${y.run_hours||0}${j.unit||""}`;else if(j.name.includes("VFD")&&j.name.includes("BYPASS"))M=y.vfd_mode?"VFD":"BYPA";else if(j.name.includes("Hz(VFD)"))M=`${((W=y.frequency)==null?void 0:W.toFixed(1))||"0.0"}${j.unit||""}`;else if(j.type==="pump")return;if(console.log(`펌프 ${m} - ${j.name}: ${M}, 좌표: (${j.x}, ${j.y})`),!M)return;const P=v.querySelector(`#${O}_group`);P&&P.remove();let N="#ffffff";j.name.includes("Auto/Man mode")?N=y.auto_mode?"#00BFFF":"#FF0000":j.name.includes("VFD")&&j.name.includes("BYPASS")?N=y.vfd_mode?"#00BFFF":"#FFA500":(j.name.includes("Hz(VFD)")||j.name.includes("running hour"))&&(N="#FFFFFF");const z="rgba(0, 0, 0, 0.9)",E="9",L="Bahnschrift, sans-serif",F="bold",A=document.createElementNS("http://www.w3.org/2000/svg","text");A.setAttribute("id",O),A.setAttribute("x",j.x+6),A.setAttribute("y",j.y+4),A.setAttribute("font-family",L),A.setAttribute("font-size",E),A.setAttribute("fill",N),A.setAttribute("font-weight",F),A.setAttribute("text-anchor","start"),A.setAttribute("stroke",N),A.setAttribute("stroke-width","0.3"),A.textContent=M,v.appendChild(A);const I=A.getBBox();v.removeChild(A);const D=document.createElementNS("http://www.w3.org/2000/svg","rect");D.setAttribute("x",j.x-1),D.setAttribute("y",j.y-9),D.setAttribute("width",I.width+10),D.setAttribute("height",14),D.setAttribute("rx","3"),D.setAttribute("ry","3"),D.setAttribute("fill",z);const B=document.createElementNS("http://www.w3.org/2000/svg","g");B.setAttribute("id",`${O}_group`),B.appendChild(D),B.appendChild(A),v.appendChild(B)});const _=g.name,b=`impeller-${_}`,k=v.querySelector(`.${b}`),S=v.querySelector(`#${_}`);if(k&&S){const j=S.querySelectorAll("[fill]");y.running?(k.style.animationPlayState="running",j.forEach(O=>{if(!O.closest(".impeller-"+_)||O===k){const C=O.getAttribute("fill");O.hasAttribute("data-original-fill")||O.setAttribute("data-original-fill",C),C.includes("#06b6d4")?O.setAttribute("fill","#1E90FF"):C.includes("#0891b2")?O.setAttribute("fill","#0066CC"):C.includes("#0e7490")?O.setAttribute("fill","#0052A3"):C.includes("url")||O.setAttribute("fill","#1E90FF")}})):(k.style.animationPlayState="paused",j.forEach(O=>{if(!O.closest(".impeller-"+_)||O===k){const C=O.getAttribute("data-original-fill");O.getAttribute("fill").includes("url")||(C&&C.includes("#06b6d4")?O.setAttribute("fill","#94a3b8"):C&&C.includes("#0891b2")?O.setAttribute("fill","#64748b"):C&&C.includes("#0e7490")?O.setAttribute("fill","#475569"):O.setAttribute("fill","#94a3b8"))}})),console.log(`✅ 펌프 ${m} (${_}) 상태: ${y.running?"🔵 운전중 (파란색)":"⚪ 정지 (회색)"}`)}else console.warn(`❌ 펌프 ${m} 요소 없음 - impeller: ${!!k}, group: ${!!S}`)})},d=async(v,w)=>{n&&(await n(v,w)?(alert(`펌프 ${v+1} ${w==="start"?"시작":"정지"} 명령 전송 완료`),o(null)):alert("명령 전송 실패"))};return u.jsxs("div",{className:"dynamic-svg-diagram",children:[u.jsx("div",{ref:r,className:"svg-container"}),l&&u.jsx("div",{className:"pump-popup-overlay",onClick:()=>o(null),children:u.jsxs("div",{className:"pump-popup",onClick:v=>v.stopPropagation(),children:[u.jsxs("div",{className:"pump-popup-header",children:[u.jsxs("h3",{children:[l.index<3?"LT":"SW"," Pump No.",l.index%3+1]}),u.jsx("button",{className:"popup-close",onClick:()=>o(null),children:"×"})]}),u.jsxs("div",{className:"pump-popup-body",children:[u.jsxs("div",{className:"pump-info-row",children:[u.jsx("span",{className:"info-label",children:"상태:"}),u.jsx("span",{className:`info-value ${l.running?"status-running":"status-stopped"}`,children:l.running?"🟢 운전 중":"⚪ 정지"})]}),u.jsxs("div",{className:"pump-info-row",children:[u.jsx("span",{className:"info-label",children:"운전 모드:"}),u.jsx("span",{className:"info-value",style:{color:l.auto_mode?"#00FF00":"#FFA500",fontWeight:"bold"},children:l.auto_mode!==void 0&&l.auto_mode?"AUTO":"MANUAL"})]}),u.jsxs("div",{className:"pump-info-row",children:[u.jsx("span",{className:"info-label",children:"VFD 모드:"}),u.jsx("span",{className:"info-value",style:{color:l.vfd_mode?"#00BFFF":"#FF69B4",fontWeight:"bold"},children:l.vfd_mode!==void 0?l.vfd_mode?"VFD":"BYPASS":"VFD"})]}),u.jsxs("div",{className:"pump-info-row",children:[u.jsx("span",{className:"info-label",children:"주파수:"}),u.jsxs("span",{className:"info-value",children:[((p=l.frequency)==null?void 0:p.toFixed(1))||"0.0"," Hz"]})]}),u.jsxs("div",{className:"pump-info-row",children:[u.jsx("span",{className:"info-label",children:"전력:"}),u.jsxs("span",{className:"info-value",children:[l.power_kw||0," kW"]})]}),u.jsxs("div",{className:"pump-info-row",children:[u.jsx("span",{className:"info-label",children:"평균 전력:"}),u.jsxs("span",{className:"info-value",children:[l.avg_power||0," kW"]})]}),u.jsxs("div",{className:"pump-info-row",children:[u.jsx("span",{className:"info-label",children:"절감 전력:"}),u.jsxs("span",{className:"info-value",children:[((h=l.saved_kwh)==null?void 0:h.toLocaleString())||0," kWh"]})]}),u.jsxs("div",{className:"pump-info-row",children:[u.jsx("span",{className:"info-label",children:"운전 시간:"}),u.jsxs("span",{className:"info-value",children:[((x=l.run_hours)==null?void 0:x.toLocaleString())||0," h"]})]}),u.jsxs("div",{className:"pump-info-row",children:[u.jsx("span",{className:"info-label",children:"ESS 모드:"}),u.jsx("span",{className:"info-value",children:l.ess_mode?"🟢 활성":"⚪ 비활성"})]})]}),u.jsxs("div",{className:"pump-popup-controls",children:[u.jsx("button",{className:"btn-pump-start",onClick:()=>d(l.index,"start"),disabled:l.running,children:"▶️ START"}),u.jsx("button",{className:"btn-pump-stop",onClick:()=>d(l.index,"stop"),disabled:!l.running,children:"⏹️ STOP"})]})]})})]})}const v7={TX7:{labelId:"TX7",x:406,y:293,unit:"°C",decimal:1},TX6:{labelId:"TX6",x:490,y:311,unit:"°C",decimal:1},PX2:{labelId:"Px2",x:485.43,y:470,unit:" Pa",decimal:1},"M/E Load":{labelId:"M/E Load",x:505,y:408,unit:"%",decimal:1}},Px={0:{name:"FAN1",led:"fanLED207",fanId:"fan206",positions:{autoMan:{x:722,y:310},vfd:{x:722,y:321},hz:{x:722,y:334},hour:{x:722,y:345}}},1:{name:"FAN2",led:"fanLED207-9",fanId:"fan205",positions:{autoMan:{x:668,y:310},vfd:{x:668,y:321},hz:{x:668,y:334},hour:{x:668,y:345}}},2:{name:"FAN3",led:"fanLED207-4",fanId:"fan204",positions:{autoMan:{x:352,y:310},vfd:{x:352,y:321},hz:{x:352,y:334},hour:{x:352,y:345}}},3:{name:"FAN4",led:"fanLED207-6",fanId:"fan203",positions:{autoMan:{x:296,y:310},vfd:{x:296,y:321},hz:{x:296,y:334},hour:{x:296,y:345}}}};function Ax({sensors:e={},fans:t=[],equipment:n=[],onCommand:r}){var v,w;const i=$.useRef(null),[a,l]=$.useState(!1),[o,s]=$.useState(null),c=t.length>0?t:n.length>=10?n.slice(6,10):[];$.useRef({}),$.useEffect(()=>{h()},[]);const f=()=>{if(!i.current)return;const y=i.current.querySelector("svg");if(!y)return;[{index:0,name:"FAN1",fanId:"fan206",x:722.323,y:291.019,width:36.4547,height:42.593498},{index:1,name:"FAN2",fanId:"fan205",x:666.649,y:291.019,width:36.360298,height:42.593498},{index:2,name:"FAN3",fanId:"fan204",x:352.676,y:291.68,width:36.4547,height:42.593498},{index:3,name:"FAN4",fanId:"fan203",x:297.002,y:291.68,width:36.3603,height:42.5935}].forEach(g=>{const _=document.createElementNS("http://www.w3.org/2000/svg","rect");_.setAttribute("x",g.x-15),_.setAttribute("y",g.y-47),_.setAttribute("width",g.width*.9),_.setAttribute("height",g.height*1.3),_.setAttribute("fill","transparent"),_.setAttribute("cursor","pointer"),_.setAttribute("data-fan-index",g.index),_.addEventListener("click",()=>{d(g.index)}),y.appendChild(_)})},d=y=>{c[y]&&(s({...c[y],index:y}),console.log(`팬 ${y} 클릭됨`))};$.useEffect(()=>{o&&c[o.index]&&s(y=>({...c[y.index],index:y.index}))},[c]);const p=async(y,m)=>{if(r&&c[y]){const g=c[y],_=await r(g.name,m);alert(_?`✅ ${g.name} ${m==="start_fwd"?"정방향 시작":m==="start_bwd"?"역방향 시작":m==="start"?"시작":"정지"} 명령 성공`:"❌ 명령 실패")}},h=async()=>{try{let m=await(await fetch(`/src/assets/fan_diagram3.svg?t=${Date.now()}`)).text();if(console.log("📄 SVG 파일 로드 완료, g28 제거 시작..."),m=m.replace("</defs>","</defs><style>#g28 { display: none !important; }</style>"),console.log("📝 g28 숨김 스타일 추가 완료"),i.current){i.current.innerHTML=m;const _=i.current.querySelector("svg");_&&(console.log("✅ SVG 로드 완료 (g28 CSS로 숨김 처리)"),f(),[{id:"fan203",index:3,x:297.002,y:291.68,width:36.3603,height:42.5935},{id:"fan204",index:2,x:352.676,y:291.68,width:36.4547,height:42.593498},{id:"fan205",index:1,x:666.649,y:291.019,width:36.360298,height:42.593498},{id:"fan206",index:0,x:722.323,y:291.019,width:36.4547,height:42.593498}].forEach(k=>{const S=k.width/100*.85*.85*.9,j=k.width*0,O=-k.height*.85,C=k.x+j,M=k.y+O;console.log(`${k.id}: use(${k.x}, ${k.y}), scale=${S.toFixed(3)}, offset(${j.toFixed(2)}, ${O.toFixed(2)}), final(${C.toFixed(2)}, ${M.toFixed(2)})`);const P=document.createElementNS("http://www.w3.org/2000/svg","g");P.setAttribute("transform",`translate(${C}, ${M})`);const N=document.createElementNS("http://www.w3.org/2000/svg","g");N.setAttribute("id",`impeller-${k.id}`),N.setAttribute("class","fan-impeller-blades"),[0,72,144,216,288].forEach(F=>{const A=document.createElementNS("http://www.w3.org/2000/svg","path"),I=F*Math.PI/180,D=Math.cos(I),B=Math.sin(I),W=(jr,on)=>{const wn=jr*D-on*B,ja=jr*B+on*D;return[wn*S,ja*S]},[X,Y]=W(0,-12),[le,je]=W(15,-25),[ht,et]=W(25,-45),[V,J]=W(28,-50),[ee,U]=W(22,-52),[ke,re]=W(10,-48),[Ee,Ce]=W(5,-45),[tt,ln]=W(-2,-35),Gn=`M ${X.toFixed(2)} ${Y.toFixed(2)} Q ${le.toFixed(2)} ${je.toFixed(2)}, ${ht.toFixed(2)} ${et.toFixed(2)} Q ${V.toFixed(2)} ${J.toFixed(2)}, ${ee.toFixed(2)} ${U.toFixed(2)} Q ${ke.toFixed(2)} ${re.toFixed(2)}, ${Ee.toFixed(2)} ${Ce.toFixed(2)} Q ${tt.toFixed(2)} ${ln.toFixed(2)}, ${X.toFixed(2)} ${Y.toFixed(2)} Z`;A.setAttribute("d",Gn),A.setAttribute("fill","url(#fan1_realisticBlade)"),A.setAttribute("stroke","#263238"),A.setAttribute("stroke-width",(.8*S).toFixed(2)),A.setAttribute("opacity","0.95"),N.appendChild(A)});const E=document.createElementNS("http://www.w3.org/2000/svg","circle");E.setAttribute("cx","0"),E.setAttribute("cy","0"),E.setAttribute("r",(14*S).toFixed(2)),E.setAttribute("fill","url(#fan1_hubGrad)"),E.setAttribute("stroke","#263238"),E.setAttribute("stroke-width",(1*S).toFixed(2)),N.appendChild(E);const L=document.createElementNS("http://www.w3.org/2000/svg","circle");L.setAttribute("cx","0"),L.setAttribute("cy","0"),L.setAttribute("r",(10*S).toFixed(2)),L.setAttribute("fill","#546e7a"),N.appendChild(L),P.appendChild(N),_.appendChild(P),console.log(`✅ ${k.id} 임펠러 생성 완료 at (${C.toFixed(2)}, ${M.toFixed(2)}), scale: ${S.toFixed(3)}`)})),l(!0)}}catch(y){console.error("❌ SVG 로드 오류:",y)}};$.useEffect(()=>{a&&x()},[e,c,a]);const x=()=>{if(!i.current)return;const y=i.current.querySelector("svg");y&&(console.log("📊 Fan Data:",c),console.log("📡 Sensors:",e),Object.keys(v7).forEach(m=>{const g=v7[m];let _=e[m];if(m==="M/E Load"&&e.PU1!==void 0&&(_=e.PU1),_!==void 0){const b=_.toFixed(g.decimal),k=`${m.replace(/[^a-zA-Z0-9]/g,"_")}_box`,S=`${m.replace(/[^a-zA-Z0-9]/g,"_")}_text`;let j=y.querySelector(`#${k}`),O=y.querySelector(`#${S}`);j&&j.remove(),O&&O.remove();const C=g.x,M=g.y||470,P=38,N=16,z=document.createElementNS("http://www.w3.org/2000/svg","rect");z.setAttribute("id",k),z.setAttribute("x",C-P/2),z.setAttribute("y",M),z.setAttribute("width",P),z.setAttribute("height",N),z.setAttribute("fill","#1a1a1a"),z.setAttribute("stroke","#2a2a2a"),z.setAttribute("stroke-width","0.5"),z.setAttribute("rx","2"),y.appendChild(z);const E=document.createElementNS("http://www.w3.org/2000/svg","text");E.setAttribute("id",S),E.setAttribute("x",C),E.setAttribute("y",M+N/2+3.5),E.setAttribute("text-anchor","middle"),E.setAttribute("fill","#00ff00"),E.setAttribute("font-size","8.5"),E.setAttribute("font-family","Arial, sans-serif"),E.setAttribute("font-weight","bold"),E.textContent=`${b}${g.unit}`,y.appendChild(E)}}),c.forEach((m,g)=>{var A;const _=Px[g];if(!_)return;const b=m.running_fwd||m.running_bwd||m.running||!1,k=m.auto_mode!==void 0?m.auto_mode:!1,S=m.vfd_mode!==void 0?m.vfd_mode:!0,j=y.querySelector(`#impeller-${_.fanId}`);if(j){const I=j.querySelectorAll("path");b?m.running_bwd||!1?(j.style.animation="fanRotate 3s linear infinite reverse",I.forEach(B=>{B.setAttribute("fill","#9370DB"),B.setAttribute("opacity","0.85")}),console.log(`🔄 ${_.fanId} 임펠러 역방향 회전 (보라색)`)):(j.style.animation="fanRotate 3s linear infinite",I.forEach(B=>{B.setAttribute("fill","#1E90FF"),B.setAttribute("opacity","0.95")}),console.log(`✅ ${_.fanId} 임펠러 정방향 회전 (파란색)`)):(j.style.animation="none",I.forEach(D=>{D.setAttribute("fill","#808080"),D.setAttribute("opacity","0.7")}),console.log(`⏸️ ${_.fanId} 임펠러 회전 정지 (회색)`))}const O=y.querySelector(`#${CSS.escape(_.led)}`);O&&O.setAttribute("fill",b?"#00FF00":"#808080");const C=`fan${g}_autoMan`;let M=y.querySelector(`#${C}`);M&&M.remove(),M=document.createElementNS("http://www.w3.org/2000/svg","text"),M.setAttribute("id",C),M.setAttribute("x",_.positions.autoMan.x),M.setAttribute("y",_.positions.autoMan.y),M.setAttribute("text-anchor","middle"),M.setAttribute("fill",k?"#00BFFF":"#FF0000"),M.setAttribute("font-size","9"),M.setAttribute("font-family","Arial, sans-serif"),M.setAttribute("font-weight","bold"),M.textContent=k?"AUTO":"MANU",y.appendChild(M);const P=`fan${g}_vfd`;let N=y.querySelector(`#${P}`);N&&N.remove(),N=document.createElementNS("http://www.w3.org/2000/svg","text"),N.setAttribute("id",P),N.setAttribute("x",_.positions.vfd.x),N.setAttribute("y",_.positions.vfd.y),N.setAttribute("text-anchor","middle"),N.setAttribute("fill",S?"#00BFFF":"#FFA500"),N.setAttribute("font-size","9"),N.setAttribute("font-family","Arial, sans-serif"),N.setAttribute("font-weight","bold"),N.textContent=S?"VFD":"BYPA",y.appendChild(N);const z=`fan${g}_hz`;let E=y.querySelector(`#${z}`);E&&E.remove(),E=document.createElementNS("http://www.w3.org/2000/svg","text"),E.setAttribute("id",z),E.setAttribute("x",_.positions.hz.x),E.setAttribute("y",_.positions.hz.y),E.setAttribute("text-anchor","middle"),E.setAttribute("fill","#FFFFFF"),E.setAttribute("font-size","9"),E.setAttribute("font-family","Arial, sans-serif"),E.setAttribute("font-weight","bold"),E.textContent=`${((A=m.frequency)==null?void 0:A.toFixed(1))||0} Hz`,y.appendChild(E);const L=`fan${g}_hour`;let F=y.querySelector(`#${L}`);F&&F.remove(),F=document.createElementNS("http://www.w3.org/2000/svg","text"),F.setAttribute("id",L),F.setAttribute("x",_.positions.hour.x),F.setAttribute("y",_.positions.hour.y),F.setAttribute("text-anchor","middle"),F.setAttribute("fill","#FFFFFF"),F.setAttribute("font-size","9"),F.setAttribute("font-family","Arial, sans-serif"),F.setAttribute("font-weight","bold"),F.textContent=`${m.run_hours||0} h`,y.appendChild(F)}))};return u.jsxs("div",{className:"fan-diagram-wrapper",children:[u.jsx("div",{className:"fan-diagram-header",children:u.jsx("h2",{children:"🌀 E/R Ventilation System"})}),u.jsx("div",{className:"fan-diagram-content",ref:i}),o&&u.jsx("div",{className:"fan-popup-overlay",onClick:()=>s(null),children:u.jsxs("div",{className:"fan-popup",onClick:y=>y.stopPropagation(),children:[u.jsxs("div",{className:"fan-popup-header",children:[u.jsxs("h3",{children:["E/R Fan No.",o.index+1]}),u.jsx("button",{className:"popup-close",onClick:()=>s(null),children:"×"})]}),u.jsxs("div",{className:"fan-popup-body",children:[u.jsxs("div",{className:"fan-info-row",children:[u.jsx("span",{className:"info-label",children:"상태:"}),u.jsx("span",{className:`info-value ${o.running_fwd||o.running_bwd||o.running?"status-running":"status-stopped"}`,children:o.running_fwd||o.running_bwd||o.running?"🟢 운전 중":"⚪ 정지"})]}),u.jsxs("div",{className:"fan-info-row",children:[u.jsx("span",{className:"info-label",children:"운전 방향:"}),u.jsx("span",{className:"info-value",children:o.running_bwd?"역방향 (Reverse)":o.running_fwd?"정방향 (Forward)":"-"})]}),u.jsxs("div",{className:"fan-info-row",children:[u.jsx("span",{className:"info-label",children:"운전 모드:"}),u.jsx("span",{className:"info-value",children:o.auto_mode!==void 0&&o.auto_mode?"AUTO":"MANUAL"})]}),u.jsxs("div",{className:"fan-info-row",children:[u.jsx("span",{className:"info-label",children:"VFD 모드:"}),u.jsx("span",{className:"info-value",children:o.vfd_mode!==void 0?o.vfd_mode?"VFD":"BYPASS":"VFD"})]}),u.jsxs("div",{className:"fan-info-row",children:[u.jsx("span",{className:"info-label",children:"주파수:"}),u.jsxs("span",{className:"info-value",children:[((v=o.frequency)==null?void 0:v.toFixed(1))||"0.0"," Hz"]})]}),u.jsxs("div",{className:"fan-info-row",children:[u.jsx("span",{className:"info-label",children:"운전 시간:"}),u.jsxs("span",{className:"info-value",children:[((w=o.run_hours)==null?void 0:w.toLocaleString())||0," h"]})]})]}),u.jsxs("div",{className:"fan-popup-controls",children:[u.jsx("button",{className:"btn-fan-start-fwd",onClick:()=>p(o.index,"start_fwd"),disabled:o.running_fwd||o.running_bwd,children:"▶️ 정방향"}),u.jsx("button",{className:"btn-fan-start-bwd",onClick:()=>p(o.index,"start_bwd"),disabled:o.running_fwd||o.running_bwd,children:"◀️ 역방향"}),u.jsx("button",{className:"btn-fan-stop",onClick:()=>p(o.index,"stop"),disabled:!o.running_fwd&&!o.running_bwd&&!o.running,children:"⏹️ 정지"})]})]})})]})}function Mx({sensors:e={},pumps:t=[]}){const[n,r]=$.useState([]),i=50;return $.useEffect(()=>{if(Object.keys(e).length>0){const l={time:new Date().toLocaleTimeString("ko-KR"),TX1:e.TX1||0,TX2:e.TX2||0,TX3:e.TX3||0,TX4:e.TX4||0,TX5:e.TX5||0,TX6:e.TX6||0,TX7:e.TX7||0,DPX1:e.DPX1||0,PU1:e.PU1||0,totalPower:t.reduce((o,s)=>o+(s.power_kw||0),0)};r(o=>{const s=[...o,l];return s.length>i?s.slice(-i):s})}},[e,t]),u.jsxs("div",{className:"trend-chart",children:[u.jsxs("section",{className:"sensor-data-section",children:[u.jsx("h2",{children:"🌡️ 센서 데이터"}),u.jsxs("div",{className:"sensor-grid",children:[u.jsx(Xn,{label:"CSW 펌프 토출 온도 (TX1)",value:e.TX1,unit:"°C",icon:"🌡️"}),u.jsx(Xn,{label:"FW Cooler 1 SW Out (TX2)",value:e.TX2,unit:"°C",icon:"🌡️"}),u.jsx(Xn,{label:"FW Cooler 2 SW Out (TX3)",value:e.TX3,unit:"°C",icon:"🌡️"}),u.jsx(Xn,{label:"FW Cooler FW In (TX4)",value:e.TX4,unit:"°C",icon:"🌡️"}),u.jsx(Xn,{label:"FW Cooler FW Out (TX5)",value:e.TX5,unit:"°C",icon:"🌡️"}),u.jsx(Xn,{label:"CSW 펌프 토출 압력 (DPX1)",value:e.DPX1,unit:"kg/cm²",icon:"💨"})]}),u.jsxs("div",{className:"sensor-grid",style:{marginTop:"1rem"},children:[u.jsx(Xn,{label:"E/R Inside Temp (TX6)",value:e.TX6,unit:"°C",icon:"🌡️"}),u.jsx(Xn,{label:"E/R Outside Temp (TX7)",value:e.TX7,unit:"°C",icon:"🌡️"})]})]}),u.jsxs("div",{className:"chart-header",children:[u.jsx("h2",{children:"📈 실시간 트렌드"}),u.jsxs("p",{children:["최근 ",i,"개 데이터 포인트"]})]}),u.jsxs("div",{className:"charts-grid",children:[u.jsx(cn,{title:"CSW 펌프 토출 온도 (TX1)",data:n,dataKey:"TX1",unit:"°C",color:"#ef4444"}),u.jsx(cn,{title:"FW Cooler 1 SW Out (TX2)",data:n,dataKey:"TX2",unit:"°C",color:"#f97316"}),u.jsx(cn,{title:"FW Cooler 2 SW Out (TX3)",data:n,dataKey:"TX3",unit:"°C",color:"#fb923c"}),u.jsx(cn,{title:"FW Cooler FW In (TX4)",data:n,dataKey:"TX4",unit:"°C",color:"#dc2626"}),u.jsx(cn,{title:"FW Cooler FW Out (TX5)",data:n,dataKey:"TX5",unit:"°C",color:"#06b6d4"}),u.jsx(cn,{title:"CSW 펌프 토출 압력 (DPX1)",data:n,dataKey:"DPX1",unit:"kg/cm²",color:"#3b82f6"}),u.jsx(cn,{title:"E/R Inside Temp (TX6)",data:n,dataKey:"TX6",unit:"°C",color:"#b91c1c"}),u.jsx(cn,{title:"E/R Outside Temp (TX7)",data:n,dataKey:"TX7",unit:"°C",color:"#0891b2"}),u.jsx(cn,{title:"M/E 부하 트렌드 (PU1)",data:n,dataKey:"PU1",unit:"%",color:"#10b981"}),u.jsx(cn,{title:"총 소비 전력",data:n,dataKey:"totalPower",unit:"kW",color:"#f59e0b"})]})]})}function cn({title:e,data:t,dataKey:n,unit:r,color:i}){const a=t.map(f=>f[n]),l=Math.max(...a,1),o=Math.min(...a,0),s=l-o||1,c=a[a.length-1]||0;return u.jsxs("div",{className:"chart-panel",children:[u.jsxs("div",{className:"chart-panel-header",children:[u.jsx("h3",{children:e}),u.jsxs("span",{className:"current-value",style:{color:i},children:[c.toFixed(2)," ",r]})]}),u.jsx("div",{className:"chart-container",children:u.jsxs("svg",{className:"chart-svg",viewBox:"0 0 500 200",children:[u.jsx("line",{x1:"0",y1:"0",x2:"500",y2:"0",stroke:"#334155",strokeWidth:"1"}),u.jsx("line",{x1:"0",y1:"50",x2:"500",y2:"50",stroke:"#334155",strokeWidth:"1",strokeDasharray:"5,5"}),u.jsx("line",{x1:"0",y1:"100",x2:"500",y2:"100",stroke:"#334155",strokeWidth:"1",strokeDasharray:"5,5"}),u.jsx("line",{x1:"0",y1:"150",x2:"500",y2:"150",stroke:"#334155",strokeWidth:"1",strokeDasharray:"5,5"}),u.jsx("line",{x1:"0",y1:"200",x2:"500",y2:"200",stroke:"#334155",strokeWidth:"1"}),a.length>1&&u.jsx("polyline",{fill:"none",stroke:i,strokeWidth:"3",points:a.map((f,d)=>{const p=d/(a.length-1)*500,h=200-(f-o)/s*200;return`${p},${h}`}).join(" ")}),a.map((f,d)=>{const p=d/Math.max(a.length-1,1)*500,h=200-(f-o)/s*200;return u.jsx("circle",{cx:p,cy:h,r:"3",fill:i},d)})]})}),u.jsxs("div",{className:"chart-footer",children:[u.jsxs("span",{children:["최소: ",o.toFixed(2)]}),u.jsxs("span",{children:["최대: ",l.toFixed(2)]})]})]})}function Xn({label:e,value:t,unit:n,icon:r}){return u.jsxs("div",{className:"sensor-card",children:[u.jsx("div",{className:"sensor-icon",children:r}),u.jsxs("div",{className:"sensor-info",children:[u.jsx("div",{className:"sensor-label",children:e}),u.jsxs("div",{className:"sensor-value",children:[t!==void 0?t.toFixed(1):"--"," ",n]})]})]})}function Nx({alarms:e,alarmSummary:t,alarmSoundMuted:n,onToggleMute:r}){const[i,a]=$.useState([]),l=$.useRef(new Set);$.useEffect(()=>{e&&Array.isArray(e)&&a(e)},[e]);const o=i,s=p=>{switch(p){case"critical":return"🔴";case"warning":return"🟡";case"info":return"🟢";default:return"⚪"}},c=p=>{switch(p){case"critical":return"alarm-critical";case"warning":return"alarm-warning";case"info":return"alarm-info";default:return"alarm-normal"}},f=async p=>{if(l.current.has(p)){console.log("⏳ 이미 확인 요청 중:",p);return}try{console.log("✅ 알람 확인 버튼 클릭:",p),l.current.add(p),(await fetch("http://localhost:8001/api/alarms/acknowledge",{method:"POST",headers:{"Content-Type":"application/json"},body:JSON.stringify({alarm_id:p,user:"Operator"})})).ok?console.log("✅ 알람 확인 성공 - WebSocket 업데이트 대기 중"):console.error("❌ 알람 확인 실패")}catch(h){console.error("❌ 알람 확인 오류:",h)}finally{setTimeout(()=>{l.current.delete(p)},2e3)}},d=o.some(p=>!p.acknowledged);return u.jsxs("div",{className:"alarm-panel",children:[u.jsxs("div",{className:`alarm-header ${d?"has-alarms":""}`,children:[u.jsx("h2",{children:"🔔 알람 시스템"}),u.jsxs("div",{className:"alarm-summary-row",children:[u.jsxs("div",{className:"alarm-summary",children:[u.jsxs("span",{className:"summary-item critical",children:["위험: ",(t==null?void 0:t.critical)||0]}),u.jsxs("span",{className:"summary-item warning",children:["경고: ",(t==null?void 0:t.warning)||0]})]}),d&&r&&u.jsx("button",{className:`btn-mute ${n?"muted":""}`,onClick:r,title:n?"경고음 켜기":"경고음 끄기",children:n?"🔇 소리 켜기":"🔊 음소거"})]})]}),u.jsx("div",{className:"alarm-list",children:o.length===0?u.jsx("div",{className:"no-alarms",children:u.jsx("span",{children:"✅ 활성 알람이 없습니다"})}):o.map(p=>u.jsxs("div",{className:`alarm-item ${c(p.level)} ${p.acknowledged?"acknowledged":""}`,children:[u.jsx("div",{className:"alarm-icon",children:s(p.level)}),u.jsxs("div",{className:"alarm-content",children:[u.jsx("div",{className:"alarm-message",children:p.message}),u.jsx("div",{className:"alarm-time",children:new Date(p.time).toLocaleString("ko-KR")})]}),u.jsx("div",{className:"alarm-actions",children:!p.acknowledged&&u.jsx("button",{className:"btn-acknowledge",onClick:()=>f(p.id),children:"확인"})})]},p.id))})]})}function Ex(){const[e,t]=$.useState("temp"),[n,r]=$.useState({swp_op_temp:35,swp_lo_temp:32,swp_hi_temp:38,swp_temp_limit:40,swp_prs:3.5,fwp_1p_op_temp:45,fwp_1p_lo_temp:40,fwp_1p_hi_temp:50,fwp_2p_op_temp:45,fwp_2p_lo_temp:40,fwp_2p_hi_temp:50,swp_adj_cycle:60,swp_adj_hz:5,swp_min_hz:40,swp_max_hz:60,fwp_adj_cycle:60,fwp_adj_hz:5,fwp_min_hz:40,fwp_max_hz:60,fan_adj_cycle:60,fan_adj_hz:5,fan_min_hz:40,fan_max_hz:60,swp_1p_time:240,swp_2p_time:240,swp_op_time:1,swp_speed_limit:300,fwp_1p_chg_time:240,fwp_2p_chg_time:240,fwp_op_time:1,fwp_speed_limit:300,meg_load_lmt1:30,meg_load_lmt2:20,alarm_tx1:30,alarm_tx2:50,alarm_tx3:50,alarm_tx4:50,alarm_tx5:40,alarm_tx6:50,alarm_tx7:40,alarm_px1_low:1.2,alarm_px1_high:4,alarm_pu1:85}),[i,a]=$.useState(!1),l=(o,s)=>{r(c=>({...c,[o]:parseFloat(s)}))};return u.jsxs("div",{className:"settings",children:[u.jsxs("div",{className:"settings-header",children:[u.jsx("h2",{children:"⚙️ 시스템 설정"}),u.jsx("p",{children:"펌프 운전 파라미터 및 제어 설정"})]}),u.jsxs("div",{className:"settings-tabs",children:[u.jsx("button",{className:e==="temp"?"active":"",onClick:()=>t("temp"),children:"🌡️ 온도 설정"}),u.jsx("button",{className:e==="vfd"?"active":"",onClick:()=>t("vfd"),children:"⚡ 주파수 설정"}),u.jsx("button",{className:e==="operation"?"active":"",onClick:()=>t("operation"),children:"🔧 운전 설정"}),u.jsx("button",{className:e==="departure"?"active":"",onClick:()=>t("departure"),children:"🚢 출항 모드"}),u.jsx("button",{className:e==="system"?"active":"",onClick:()=>t("system"),children:"💻 시스템"}),u.jsx("button",{className:e==="alarm"?"active":"",onClick:()=>t("alarm"),children:"🔔 알람 설정"})]}),u.jsxs("div",{className:"settings-content",children:[e==="temp"&&u.jsx(Cx,{settings:n,onChange:l}),e==="vfd"&&u.jsx($x,{settings:n,onChange:l}),e==="operation"&&u.jsx(Tx,{settings:n,onChange:l}),e==="departure"&&u.jsx(zx,{settings:n,onChange:l}),e==="system"&&u.jsx(Ix,{}),e==="alarm"&&u.jsx(Dx,{settings:n,onChange:l})]})]})}function Cx({settings:e,onChange:t}){return u.jsxs("div",{className:"settings-section",children:[u.jsx("h3",{children:"🌊 해수 펌프 온도(TX5) 설정"}),u.jsxs("div",{className:"settings-grid",children:[u.jsx(Q,{label:"운전 온도",value:e.swp_op_temp,unit:"°C",onChange:n=>t("swp_op_temp",n),min:-30,max:100}),u.jsx(Q,{label:"저온 온도",value:e.swp_lo_temp,unit:"°C",onChange:n=>t("swp_lo_temp",n),min:-30,max:100}),u.jsx(Q,{label:"고온 온도",value:e.swp_hi_temp,unit:"°C",onChange:n=>t("swp_hi_temp",n),min:-30,max:100}),u.jsx(Q,{label:"온도 제한",value:e.swp_temp_limit,unit:"°C",onChange:n=>t("swp_temp_limit",n),min:-30,max:100}),u.jsx(Q,{label:"압력 설정",value:e.swp_prs,unit:"kg/cm²",onChange:n=>t("swp_prs",n),min:0,max:10,step:.1})]}),u.jsx("h3",{children:"💧 청수 펌프 온도(TX4) 설정"}),u.jsxs("div",{className:"settings-grid",children:[u.jsxs("div",{className:"settings-subsection",children:[u.jsx("h4",{children:"펌프 1대 운전시"}),u.jsx(Q,{label:"운전 온도",value:e.fwp_1p_op_temp,unit:"°C",onChange:n=>t("fwp_1p_op_temp",n)}),u.jsx(Q,{label:"저온 온도",value:e.fwp_1p_lo_temp,unit:"°C",onChange:n=>t("fwp_1p_lo_temp",n)}),u.jsx(Q,{label:"고온 온도",value:e.fwp_1p_hi_temp,unit:"°C",onChange:n=>t("fwp_1p_hi_temp",n)})]}),u.jsxs("div",{className:"settings-subsection",children:[u.jsx("h4",{children:"펌프 2대 운전시"}),u.jsx(Q,{label:"운전 온도",value:e.fwp_2p_op_temp,unit:"°C",onChange:n=>t("fwp_2p_op_temp",n)}),u.jsx(Q,{label:"저온 온도",value:e.fwp_2p_lo_temp,unit:"°C",onChange:n=>t("fwp_2p_lo_temp",n)}),u.jsx(Q,{label:"고온 온도",value:e.fwp_2p_hi_temp,unit:"°C",onChange:n=>t("fwp_2p_hi_temp",n)})]})]})]})}function $x({settings:e,onChange:t}){return u.jsxs("div",{className:"settings-section",children:[u.jsx("h3",{children:"🌊 해수 펌프 주파수 설정"}),u.jsxs("div",{className:"settings-grid",children:[u.jsx(Q,{label:"조정 주기",value:e.swp_adj_cycle,unit:"초",onChange:n=>t("swp_adj_cycle",n),min:1,max:300}),u.jsx(Q,{label:"조정 주파수",value:e.swp_adj_hz,unit:"Hz",onChange:n=>t("swp_adj_hz",n),min:1,max:10}),u.jsx(Q,{label:"최소 주파수",value:e.swp_min_hz,unit:"Hz",onChange:n=>t("swp_min_hz",n),min:10,max:60}),u.jsx(Q,{label:"최대 주파수",value:e.swp_max_hz,unit:"Hz",onChange:n=>t("swp_max_hz",n),min:30,max:60})]}),u.jsx("h3",{children:"💧 청수 펌프 주파수 설정"}),u.jsxs("div",{className:"settings-grid",children:[u.jsx(Q,{label:"조정 주기",value:e.fwp_adj_cycle,unit:"초",onChange:n=>t("fwp_adj_cycle",n),min:1,max:300}),u.jsx(Q,{label:"조정 주파수",value:e.fwp_adj_hz,unit:"Hz",onChange:n=>t("fwp_adj_hz",n),min:1,max:10}),u.jsx(Q,{label:"최소 주파수",value:e.fwp_min_hz,unit:"Hz",onChange:n=>t("fwp_min_hz",n),min:10,max:60}),u.jsx(Q,{label:"최대 주파수",value:e.fwp_max_hz,unit:"Hz",onChange:n=>t("fwp_max_hz",n),min:30,max:60})]}),u.jsx("h3",{children:"🌀 E/R Fan 주파수 설정"}),u.jsxs("div",{className:"settings-grid",children:[u.jsx(Q,{label:"조정 주기",value:e.fan_adj_cycle,unit:"초",onChange:n=>t("fan_adj_cycle",n),min:1,max:300}),u.jsx(Q,{label:"조정 주파수",value:e.fan_adj_hz,unit:"Hz",onChange:n=>t("fan_adj_hz",n),min:1,max:10}),u.jsx(Q,{label:"최소 주파수",value:e.fan_min_hz,unit:"Hz",onChange:n=>t("fan_min_hz",n),min:10,max:60}),u.jsx(Q,{label:"최대 주파수",value:e.fan_max_hz,unit:"Hz",onChange:n=>t("fan_max_hz",n),min:30,max:60})]})]})}function Tx({settings:e,onChange:t}){return u.jsxs("div",{className:"settings-section",children:[u.jsx("h3",{children:"🔧 펌프 운전 설정"}),u.jsxs("div",{className:"settings-grid",children:[u.jsx(Q,{label:"SWP 1펌프 운전 시간",value:e.swp_1p_time,unit:"분",onChange:n=>t("swp_1p_time",n),min:1,max:1e3}),u.jsx(Q,{label:"SWP 2펌프 운전 시간",value:e.swp_2p_time,unit:"분",onChange:n=>t("swp_2p_time",n),min:1,max:1e3}),u.jsx(Q,{label:"SWP 운전 순서",value:e.swp_op_time,unit:"",onChange:n=>t("swp_op_time",n),min:1,max:6}),u.jsx(Q,{label:"최적속도 운전 시간",value:e.swp_speed_limit,unit:"초",onChange:n=>t("swp_speed_limit",n),min:0,max:600}),u.jsx(Q,{label:"FWP 1펌프 운전 시간",value:e.fwp_1p_chg_time,unit:"분",onChange:n=>t("fwp_1p_chg_time",n),min:1,max:1e3}),u.jsx(Q,{label:"FWP 2펌프 운전 시간",value:e.fwp_2p_chg_time,unit:"분",onChange:n=>t("fwp_2p_chg_time",n),min:1,max:1e3}),u.jsx(Q,{label:"FWP 운전 순서",value:e.fwp_op_time,unit:"",onChange:n=>t("fwp_op_time",n),min:1,max:6}),u.jsx(Q,{label:"최적속도 운전 시간",value:e.fwp_speed_limit,unit:"초",onChange:n=>t("fwp_speed_limit",n),min:0,max:600})]}),u.jsx("h3",{children:"🔥 M/E 부하 설정"}),u.jsxs("div",{className:"settings-grid",children:[u.jsx(Q,{label:"운항 부하 기준값",value:e.meg_load_lmt1,unit:"%",onChange:n=>t("meg_load_lmt1",n),min:0,max:100}),u.jsx(Q,{label:"정박 부하 기준값",value:e.meg_load_lmt2,unit:"%",onChange:n=>t("meg_load_lmt2",n),min:0,max:100})]})]})}function zx({settings:e,onChange:t}){const[n,r]=$.useState(!1);return u.jsxs("div",{className:"settings-section",children:[u.jsx("h3",{children:"🚢 출항 모드 설정"}),u.jsxs("div",{className:"departure-mode-card",children:[u.jsxs("div",{className:"departure-status",children:[u.jsx("span",{className:"status-label",children:"현재 상태:"}),u.jsx("span",{className:`status-badge ${n?"active":"inactive"}`,children:n?"🟢 출항 모드 활성":"⚪ 정상 모드"})]}),u.jsxs("div",{className:"departure-description",children:[u.jsxs("p",{children:[u.jsx("strong",{children:"출항 모드란?"}),u.jsx("br",{}),"선박 출항 시 엔진 부하가 낮을 때 자동으로 ESS 모드로 전환되는 것을 방지합니다."]}),u.jsxs("p",{children:[u.jsx("strong",{children:"해제 조건:"}),u.jsx("br",{}),"M/E 부하가 ",e.meg_load_lmt2,"% 이상일 때 자동으로 정상 모드로 전환됩니다."]})]}),u.jsx("button",{className:`btn-departure ${n?"active":""}`,onClick:()=>r(!n),children:n?"🔓 정상 모드로 전환":"🔒 출항 모드 활성화"})]}),u.jsx("div",{className:"settings-grid",children:u.jsx(Q,{label:"M/E 부하 해제 설정",value:e.meg_load_lmt2,unit:"%",onChange:i=>t("meg_load_lmt2",i),min:0,max:100})})]})}function Ix(){return u.jsxs("div",{className:"settings-section",children:[u.jsx("h3",{children:"💻 시스템 설정"}),u.jsxs("div",{className:"system-info",children:[u.jsxs("div",{className:"info-card",children:[u.jsx("h4",{children:"🔌 PLC 연결 정보"}),u.jsxs("div",{className:"info-row",children:[u.jsx("span",{children:"IP 주소:"}),u.jsx("span",{children:"127.0.0.1"})]}),u.jsxs("div",{className:"info-row",children:[u.jsx("span",{children:"포트:"}),u.jsx("span",{children:"502"})]}),u.jsxs("div",{className:"info-row",children:[u.jsx("span",{children:"프로토콜:"}),u.jsx("span",{children:"Modbus TCP"})]}),u.jsxs("div",{className:"info-row",children:[u.jsx("span",{children:"Node ID:"}),u.jsx("span",{children:"3"})]})]}),u.jsxs("div",{className:"info-card",children:[u.jsx("h4",{children:"📊 시스템 정보"}),u.jsxs("div",{className:"info-row",children:[u.jsx("span",{children:"버전:"}),u.jsx("span",{children:"1.0.0"})]}),u.jsxs("div",{className:"info-row",children:[u.jsx("span",{children:"화면 해상도:"}),u.jsx("span",{children:"1280 x 1024"})]}),u.jsxs("div",{className:"info-row",children:[u.jsx("span",{children:"업데이트 주기:"}),u.jsx("span",{children:"1초"})]})]}),u.jsxs("div",{className:"info-card",children:[u.jsx("h4",{children:"💾 데이터 저장"}),u.jsxs("div",{className:"info-row",children:[u.jsx("span",{children:"데이터 폴더:"}),u.jsx("span",{children:"C:\\HMI_DATA"})]}),u.jsxs("div",{className:"info-row",children:[u.jsx("span",{children:"로그 보관 기간:"}),u.jsx("span",{children:"30일"})]})]})]})]})}function Dx({settings:e,onChange:t}){return u.jsxs("div",{className:"settings-section alarm-settings",children:[u.jsxs("div",{className:"alarm-grid-container",children:[u.jsxs("div",{className:"alarm-column",children:[u.jsx("h4",{children:"🌡️ 온도 센서 (TX1~TX4)"}),u.jsx(Q,{label:"TX1 냉각수 토출",value:e.alarm_tx1,unit:"°C",onChange:n=>t("alarm_tx1",n),min:0,max:100,step:.5}),u.jsx(Q,{label:"TX2 NO.1 쿨러 출구",value:e.alarm_tx2,unit:"°C",onChange:n=>t("alarm_tx2",n),min:0,max:100,step:.5}),u.jsx(Q,{label:"TX3 NO.2 쿨러 출구",value:e.alarm_tx3,unit:"°C",onChange:n=>t("alarm_tx3",n),min:0,max:100,step:.5}),u.jsx(Q,{label:"TX4 청수 입구",value:e.alarm_tx4,unit:"°C",onChange:n=>t("alarm_tx4",n),min:0,max:100,step:.5})]}),u.jsxs("div",{className:"alarm-column",children:[u.jsx("h4",{children:"🌡️ 온도 센서 (TX5~TX7)"}),u.jsx(Q,{label:"TX5 청수 출구",value:e.alarm_tx5,unit:"°C",onChange:n=>t("alarm_tx5",n),min:0,max:100,step:.5}),u.jsx(Q,{label:"TX6 E/R 내부",value:e.alarm_tx6,unit:"°C",onChange:n=>t("alarm_tx6",n),min:0,max:100,step:.5}),u.jsx(Q,{label:"TX7 E/R 외부",value:e.alarm_tx7,unit:"°C",onChange:n=>t("alarm_tx7",n),min:0,max:100,step:.5})]}),u.jsxs("div",{className:"alarm-column",children:[u.jsx("h4",{children:"📊 압력 / ⚡ 부하"}),u.jsx(Q,{label:"PX1 압력 하한",value:e.alarm_px1_low,unit:"bar",onChange:n=>t("alarm_px1_low",n),min:0,max:5,step:.1}),u.jsx(Q,{label:"PX1 압력 상한",value:e.alarm_px1_high,unit:"bar",onChange:n=>t("alarm_px1_high",n),min:0,max:10,step:.1}),u.jsx(Q,{label:"PU1 M/E 부하",value:e.alarm_pu1,unit:"%",onChange:n=>t("alarm_pu1",n),min:0,max:100,step:1})]})]}),u.jsx("div",{className:"alarm-info-compact",children:u.jsx("span",{children:"ℹ️ 온도/압력상한/부하: 초과 시 알람 | 압력하한: 미만 시 알람"})})]})}function Q({label:e,value:t,unit:n,onChange:r,min:i=0,max:a=100,step:l=1}){return u.jsxs("div",{className:"setting-item",children:[u.jsx("label",{children:e}),u.jsxs("div",{className:"setting-input-group",children:[u.jsx("input",{type:"number",value:t,onChange:o=>r(o.target.value),min:i,max:a,step:l}),u.jsx("span",{className:"unit",children:n})]})]})}function Lx({pumps:e=[],fans:t=[],onCommand:n,onPumpCommand:r}){const[i,a]=$.useState(!1),l=async(o,s)=>{a(!0);try{let c=!1;if(n&&o.name)c=await n(o.name,s);else if(r){const d=e.findIndex(p=>p===o);c=await r(d,s)}const f=s==="start"?"시작":s==="start_fwd"?"정방향 시작":s==="start_bwd"?"역방향 시작":"정지";alert(c?`✅ ${o.name} ${f} 명령 성공`:"❌ 명령 실패")}catch(c){alert(`❌ 오류: ${c.message}`)}finally{a(!1)}};return u.jsxs("div",{className:"pump-control unified-mode",children:[u.jsxs("div",{className:"control-header",children:[u.jsx("h2",{children:"⚙️ 운전 제어"}),u.jsx("p",{children:"펌프와 팬을 선택하고 운전 명령을 내릴 수 있습니다."})]}),u.jsxs("div",{className:"control-grid",children:[u.jsxs("section",{className:"control-section",children:[u.jsx("h3",{children:"🌊 해수 펌프 (Sea Water Pump)"}),u.jsx("div",{className:"pump-control-list",children:e.slice(0,3).map((o,s)=>u.jsx(dd,{pump:o,pumpIndex:s,isFan:!1,onStart:()=>l(o,"start"),onStop:()=>l(o,"stop"),disabled:i},s))})]}),u.jsxs("section",{className:"control-section",children:[u.jsx("h3",{children:"💧 청수 펌프 (Fresh Water Pump)"}),u.jsx("div",{className:"pump-control-list",children:e.slice(3,6).map((o,s)=>u.jsx(dd,{pump:o,pumpIndex:s+3,isFan:!1,onStart:()=>l(o,"start"),onStop:()=>l(o,"stop"),disabled:i},s+3))})]}),u.jsxs("section",{className:"control-section",children:[u.jsx("h3",{children:"🌀 Engine Room 팬 (E/R Fan)"}),u.jsx("div",{className:"pump-control-list fan-grid",children:t.map((o,s)=>u.jsx(dd,{pump:o,pumpIndex:s,isFan:!0,onStart:()=>l(o,"start_fwd"),onStartBwd:()=>l(o,"start_bwd"),onStop:()=>l(o,"stop"),disabled:i},s))})]})]})]})}function dd({pump:e,pumpIndex:t,isFan:n,onStart:r,onStartBwd:i,onStop:a,disabled:l}){var c;const o=n?e.running_fwd||e.running_bwd:e.running,s=f=>f&&f.startsWith("SWP")?"#3b82f6":f&&f.startsWith("FWP")?"#10b981":f&&f.startsWith("FAN")?"#a855f7":"#334155";return u.jsxs("div",{className:`pump-control-card ${o?"running":"stopped"}`,style:{border:`2px solid ${s(e.name)}`},children:[u.jsxs("div",{className:"control-card-header",children:[u.jsx("h4",{children:e.name}),u.jsx("span",{className:`status-indicator ${n&&e.running_bwd?"reverse":o?"active":"inactive"}`,children:n?e.running_fwd?u.jsxs(u.Fragment,{children:[u.jsx("span",{className:"rotating-icon",children:"⚙️"})," 정방향"]}):e.running_bwd?u.jsxs(u.Fragment,{children:[u.jsx("span",{className:"rotating-icon reverse",children:"⚙️"})," 역방향"]}):"⚪ 정지":e.running?u.jsxs(u.Fragment,{children:[u.jsx("span",{className:"rotating-icon",children:"⚙️"})," 운전중"]}):"⚪ 정지"})]}),u.jsxs("div",{className:"control-card-info",children:[u.jsxs("div",{className:"info-item",children:[u.jsx("span",{className:"info-label",children:"주파수"}),u.jsxs("span",{className:"info-value",children:[((c=e.frequency)==null?void 0:c.toFixed(1))||0," Hz"]})]}),u.jsxs("div",{className:"info-item",children:[u.jsx("span",{className:"info-label",children:"전력"}),u.jsxs("span",{className:"info-value",children:[e.power_kw||0," kW"]})]})]}),u.jsx("div",{className:"control-buttons",children:n?u.jsxs(u.Fragment,{children:[u.jsxs("div",{className:"direction-toggle",children:[u.jsx("button",{className:`toggle-btn ${e.running_fwd?"active":""}`,onClick:f=>{f.stopPropagation(),r()},disabled:l||e.running_fwd,children:"▶️ 정방향"}),u.jsx("button",{className:`toggle-btn ${e.running_bwd?"active":""}`,onClick:f=>{f.stopPropagation(),i()},disabled:l||e.running_bwd,children:"◀️ 역방향"})]}),u.jsx("button",{className:"btn-stop",onClick:f=>{f.stopPropagation(),a()},disabled:l||!o,children:"⏸️ 정지"})]}):u.jsxs(u.Fragment,{children:[u.jsx("button",{className:"btn-start",onClick:f=>{f.stopPropagation(),r()},disabled:l||e.running,children:"▶️ 시작"}),u.jsx("button",{className:"btn-stop",onClick:f=>{f.stopPropagation(),a()},disabled:l||!e.running,children:"⏸️ 정지"})]})})]})}function Fx({equipment:e=[],pumps:t=[],fans:n=[],onCommand:r,onPumpCommand:i}){const[a,l]=$.useState("control"),o=e.length>0?e:t;return u.jsxs("div",{className:"advanced-control",children:[u.jsxs("div",{className:"control-header",children:[u.jsx("h2",{children:"🎛️ 운전 제어"}),u.jsx("p",{children:"ON/OFF 제어, 운전 모드 전환, PID 제어, VFD 상세 정보"})]}),u.jsxs("div",{className:"control-tabs",children:[u.jsx("button",{className:a==="control"?"active":"",onClick:()=>l("control"),children:"▶️ ON/OFF 제어"}),u.jsx("button",{className:a==="automan"?"active":"",onClick:()=>l("automan"),children:"🔄 운전 모드"}),u.jsx("button",{className:a==="pid"?"active":"",onClick:()=>l("pid"),children:"📐 PID 제어"}),u.jsx("button",{className:a==="vfdinfo"?"active":"",onClick:()=>l("vfdinfo"),children:"⚡ VFD 정보"})]}),u.jsxs("div",{className:"control-content",children:[a==="control"&&u.jsx(Lx,{pumps:t,fans:n,onCommand:r,onPumpCommand:i}),a==="automan"&&u.jsx(Rx,{equipment:o,pumps:t,fans:n,onCommand:r}),a==="pid"&&u.jsx(Bx,{}),a==="vfdinfo"&&u.jsx(Wx,{equipment:o})]})]})}function Rx({equipment:e=[],pumps:t=[],fans:n=[],onCommand:r}){const i=e.length>0?e:t,[a,l]=$.useState({SWP1:{auto:!0,vfd:!0},SWP2:{auto:!0,vfd:!0},SWP3:{auto:!0,vfd:!0},FWP1:{auto:!0,vfd:!0},FWP2:{auto:!0,vfd:!0},FWP3:{auto:!0,vfd:!0},FAN1:{auto:!0,vfd:!0},FAN2:{auto:!0,vfd:!0},FAN3:{auto:!0,vfd:!0},FAN4:{auto:!0,vfd:!0}});$.useEffect(()=>{if(i.length>0){const d={};i.forEach(p=>{d[p.name]={auto:p.auto_mode!==void 0?p.auto_mode:!0,vfd:p.vfd_mode!==void 0?p.vfd_mode:!0}}),l(d),console.log("🔄 모드 상태 동기화:",d)}},[i]);const o=async(d,p,h)=>{if(l(x=>({...x,[d]:{...x[d],[p]:h}})),r){let x="";p==="auto"?x=h?"auto":"manual":p==="vfd"&&(x=h?"vfd":"bypass"),console.log(`🔧 모드 변경: ${d} ${x}`),await r(d,x)?console.log(`✅ ${d} ${x} 모드 설정 완료`):(console.error(`❌ ${d} ${x} 모드 설정 실패`),l(w=>({...w,[d]:{...w[d],[p]:!h}})))}},s=i.slice(0,3),c=i.slice(3,6),f=i.slice(6,10);return u.jsxs("div",{className:"automan-section",children:[u.jsxs("div",{className:"automan-description",children:[u.jsx("h3",{children:"🔄 운전 모드 설정"}),u.jsx("p",{children:"각 장비의 운전 모드(자동/수동)와 VFD 모드를 설정할 수 있습니다."})]}),u.jsxs("div",{className:"mode-grid-3col",children:[u.jsxs("div",{className:"mode-column",children:[u.jsx("h4",{className:"column-title",children:"🌊 해수 펌프 (SWP)"}),s.map((d,p)=>u.jsx(fd,{equipment:d,modes:a[d.name],onSetMode:(h,x)=>o(d.name,h,x),isFan:!1},p))]}),u.jsxs("div",{className:"mode-column",children:[u.jsx("h4",{className:"column-title",children:"💧 청수 펌프 (FWP)"}),c.map((d,p)=>u.jsx(fd,{equipment:d,modes:a[d.name],onSetMode:(h,x)=>o(d.name,h,x),isFan:!1},p+3))]}),u.jsxs("div",{className:"mode-column fan-column",children:[u.jsx("h4",{className:"column-title",children:"🌀 E/R 팬 (FAN)"}),u.jsx("div",{className:"fan-cards-grid",children:f.map((d,p)=>u.jsx(fd,{equipment:d,modes:a[d.name],onSetMode:(h,x)=>o(d.name,h,x),isFan:!0},p+6))})]})]})]})}function fd({equipment:e,modes:t,onSetMode:n,isFan:r=!1}){var l;const i=r?e.running_fwd||e.running_bwd:e.running,a=o=>o&&o.startsWith("SWP")?"#3b82f6":o&&o.startsWith("FWP")?"#10b981":o&&o.startsWith("FAN")?"#a855f7":"#334155";return u.jsxs("div",{className:"pump-mode-card",style:{border:`2px solid ${a(e.name)}`},children:[u.jsxs("div",{className:"mode-card-header",children:[u.jsx("h5",{children:e.name}),u.jsx("span",{className:`status-dot ${i?"running":"stopped"}`})]}),u.jsxs("div",{className:"mode-switches",children:[u.jsxs("div",{className:"mode-switch",children:[u.jsx("span",{className:"switch-label",children:"운전 모드"}),u.jsxs("div",{className:"switch-buttons",children:[u.jsx("button",{className:t!=null&&t.auto?"active":"",onClick:()=>n("auto",!0),children:"🤖 자동"}),u.jsx("button",{className:t!=null&&t.auto?"":"active",onClick:()=>n("auto",!1),children:"👤 수동"})]})]}),u.jsxs("div",{className:"mode-switch",children:[u.jsx("span",{className:"switch-label",children:"VFD 모드"}),u.jsxs("div",{className:"switch-buttons",children:[u.jsx("button",{className:t!=null&&t.vfd?"active":"",onClick:()=>n("vfd",!0),children:"⚡ VFD"}),u.jsx("button",{className:t!=null&&t.vfd?"":"active",onClick:()=>n("vfd",!1),children:"🔌 Bypass"})]})]})]}),u.jsxs("div",{className:"mode-info",children:[u.jsxs("div",{className:"info-row",children:[u.jsx("span",{children:"주파수:"}),u.jsxs("span",{children:[((l=e.frequency)==null?void 0:l.toFixed(1))||0," Hz"]})]}),u.jsxs("div",{className:"info-row",children:[u.jsx("span",{children:"전력:"}),u.jsxs("span",{children:[e.power_kw||0," kW"]})]}),r&&u.jsxs("div",{className:"info-row",children:[u.jsx("span",{children:"방향:"}),u.jsx("span",{children:e.running_fwd?"정방향":e.running_bwd?"역방향":"정지"})]})]})]})}function Bx(){const[e,t]=$.useState({swp_kp:1,swp_ki:.1,swp_kd:.05,swp_setpoint:30,fwp_kp:1,fwp_ki:.1,fwp_kd:.05,fwp_setpoint:75}),n=(r,i)=>{t(a=>({...a,[r]:parseFloat(i)}))};return u.jsxs("div",{className:"pid-section",children:[u.jsxs("div",{className:"pid-description",children:[u.jsx("h3",{children:"📐 PID 제어 파라미터"}),u.jsx("p",{children:"온도 제어를 위한 PID 게인값을 설정합니다."}),u.jsxs("div",{className:"pid-formula",children:[u.jsx("strong",{children:"제어식:"})," Output = Kp × e(t) + Ki × ∫e(t)dt + Kd × de(t)/dt"]})]}),u.jsxs("div",{className:"pid-controller-section",children:[u.jsx("h4",{children:"🌊 해수 펌프 PID 파라미터"}),u.jsxs("div",{className:"pid-grid",children:[u.jsx(qn,{label:"비례 게인 (Kp)",value:e.swp_kp,onChange:r=>n("swp_kp",r),min:0,max:10,step:.1}),u.jsx(qn,{label:"적분 게인 (Ki)",value:e.swp_ki,onChange:r=>n("swp_ki",r),min:0,max:5,step:.01}),u.jsx(qn,{label:"미분 게인 (Kd)",value:e.swp_kd,onChange:r=>n("swp_kd",r),min:0,max:1,step:.01}),u.jsx(qn,{label:"목표값 (Setpoint)",value:e.swp_setpoint,onChange:r=>n("swp_setpoint",r),min:-30,max:100,step:.5,unit:"°C"})]})]}),u.jsxs("div",{className:"pid-controller-section",children:[u.jsx("h4",{children:"💧 청수 펌프 PID 파라미터"}),u.jsxs("div",{className:"pid-grid",children:[u.jsx(qn,{label:"비례 게인 (Kp)",value:e.fwp_kp,onChange:r=>n("fwp_kp",r),min:0,max:10,step:.1}),u.jsx(qn,{label:"적분 게인 (Ki)",value:e.fwp_ki,onChange:r=>n("fwp_ki",r),min:0,max:5,step:.01}),u.jsx(qn,{label:"미분 게인 (Kd)",value:e.fwp_kd,onChange:r=>n("fwp_kd",r),min:0,max:1,step:.01}),u.jsx(qn,{label:"목표값 (Setpoint)",value:e.fwp_setpoint,onChange:r=>n("fwp_setpoint",r),min:0,max:100,step:.5,unit:"°C"})]})]}),u.jsx("div",{className:"pid-footer",children:u.jsx("button",{className:"btn-apply",children:"💾 PID 파라미터 적용"})})]})}function qn({label:e,value:t,onChange:n,min:r,max:i,step:a,unit:l=""}){return u.jsxs("div",{className:"pid-parameter",children:[u.jsx("label",{children:e}),u.jsxs("div",{className:"pid-input-group",children:[u.jsx("input",{type:"number",value:t,onChange:o=>n(o.target.value),min:r,max:i,step:a}),l&&u.jsx("span",{className:"unit",children:l})]}),u.jsx("input",{type:"range",value:t,onChange:o=>n(o.target.value),min:r,max:i,step:a,className:"pid-slider"})]})}function Wx({equipment:e=[]}){const[t,n]=$.useState(0);return u.jsxs("div",{className:"vfdinfo-section",children:[u.jsxs("div",{className:"vfdinfo-description",children:[u.jsx("h3",{children:"⚡ VFD 상세 정보"}),u.jsx("p",{children:"각 장비의 VFD(인버터) 상세 운전 정보를 확인합니다."})]}),u.jsx("div",{className:"pump-selector",children:e.slice(0,6).map((r,i)=>u.jsx("button",{className:`pump-select-btn ${t===i?"active":""}`,onClick:()=>n(i),children:r.name},i))}),u.jsx("div",{className:"pump-selector",style:{marginTop:"0.5rem"},children:e.slice(6,10).map((r,i)=>u.jsx("button",{className:`pump-select-btn ${t===i+6?"active":""}`,onClick:()=>n(i+6),children:r.name},i+6))}),e[t]&&u.jsx(Ux,{equipment:e[t],isFan:t>=6})]})}function Ux({equipment:e,isFan:t=!1}){var r,i,a,l;const n=t?e.running_fwd||e.running_bwd:e.running;return u.jsxs("div",{className:"vfd-detail-card",children:[u.jsxs("div",{className:"vfd-header",children:[u.jsxs("h4",{children:[e.name," VFD 상세 정보"]}),u.jsx("span",{className:`vfd-status ${n?"running":"stopped"}`,children:t?e.running_fwd?"🟢 정방향 운전중":e.running_bwd?"🟡 역방향 운전중":"⚪ 정지":e.running?"🟢 운전중":"⚪ 정지"})]}),u.jsxs("div",{className:"vfd-info-grid",children:[u.jsxs("div",{className:"vfd-info-column",children:[u.jsxs("div",{className:"vfd-info-section",children:[u.jsx("h5",{children:"📊 운전 데이터"}),u.jsx(De,{label:"현재 주파수",value:`${((r=e.frequency)==null?void 0:r.toFixed(1))||0} Hz`}),u.jsx(De,{label:"출력 주파수",value:`${((i=e.frequency)==null?void 0:i.toFixed(1))||0} Hz`}),u.jsx(De,{label:"목표 주파수",value:"60.0 Hz"}),u.jsx(De,{label:"현재 전류",value:`${(e.power_kw*2.5).toFixed(1)} A`}),u.jsx(De,{label:"출력 전압",value:"440 V"}),t&&u.jsx(De,{label:"운전 방향",value:e.running_fwd?"정방향 (FWD)":e.running_bwd?"역방향 (BWD)":"정지"})]}),u.jsxs("div",{className:"vfd-info-section",children:[u.jsx("h5",{children:"⚡ 전력 데이터"}),u.jsx(De,{label:"순시 전력",value:`${e.power_kw||0} kW`}),u.jsx(De,{label:"평균 전력",value:`${e.avg_power||0} kW`}),u.jsx(De,{label:"역률",value:"0.95"}),u.jsx(De,{label:"효율",value:"94.5 %"}),u.jsx(De,{label:"절감률",value:`${e.saved_ratio||0} %`,highlight:!0})]})]}),u.jsxs("div",{className:"vfd-info-column",children:[u.jsxs("div",{className:"vfd-info-section",children:[u.jsx("h5",{children:"🕐 운전 시간"}),u.jsx(De,{label:"ESS 운전 시간",value:`${((a=e.run_hours)==null?void 0:a.toLocaleString())||0} h`}),u.jsx(De,{label:"총 운전 시간",value:`${(e.run_hours*1.5).toLocaleString()||0} h`}),u.jsx(De,{label:"절감 전력량",value:`${((l=e.saved_kwh)==null?void 0:l.toLocaleString())||0} kWh`,highlight:!0})]}),u.jsxs("div",{className:"vfd-info-section",children:[u.jsx("h5",{children:"🛡️ 상태 정보"}),u.jsx(De,{label:"운전 모드",value:e.ess_mode?"ESS 모드":"일반 모드"}),u.jsx(De,{label:"제어 모드",value:"자동"}),u.jsx(De,{label:"VFD 온도",value:"42 °C"}),u.jsx(De,{label:"모터 온도",value:"38 °C"}),u.jsx(De,{label:"알람 상태",value:"정상",success:!0})]})]})]})]})}function De({label:e,value:t,highlight:n,success:r}){return u.jsxs("div",{className:"vfd-info-row",children:[u.jsx("span",{className:"vfd-label",children:e}),u.jsx("span",{className:`vfd-value ${n?"highlight":""} ${r?"success":""}`,children:t})]})}function w6(e){var t,n,r="";if(typeof e=="string"||typeof e=="number")r+=e;else if(typeof e=="object")if(Array.isArray(e)){var i=e.length;for(t=0;t<i;t++)e[t]&&(n=w6(e[t]))&&(r&&(r+=" "),r+=n)}else for(n in e)e[n]&&(r&&(r+=" "),r+=n);return r}function se(){for(var e,t,n=0,r="",i=arguments.length;n<i;n++)(e=arguments[n])&&(t=w6(e))&&(r&&(r+=" "),r+=t);return r}var Hx=Array.isArray,wt=Hx,Gx=typeof ko=="object"&&ko&&ko.Object===Object&&ko,k6=Gx,Vx=k6,Xx=typeof self=="object"&&self&&self.Object===Object&&self,qx=Vx||Xx||Function("return this")(),bn=qx,Kx=bn,Yx=Kx.Symbol,ho=Yx,g7=ho,_6=Object.prototype,Zx=_6.hasOwnProperty,Qx=_6.toString,Ta=g7?g7.toStringTag:void 0;function Jx(e){var t=Zx.call(e,Ta),n=e[Ta];try{e[Ta]=void 0;var r=!0}catch{}var i=Qx.call(e);return r&&(t?e[Ta]=n:delete e[Ta]),i}var eb=Jx,tb=Object.prototype,nb=tb.toString;function rb(e){return nb.call(e)}var ib=rb,x7=ho,ab=eb,lb=ib,ob="[object Null]",sb="[object Undefined]",b7=x7?x7.toStringTag:void 0;function cb(e){return e==null?e===void 0?sb:ob:b7&&b7 in Object(e)?ab(e):lb(e)}var Wn=cb;function ub(e){return e!=null&&typeof e=="object"}var Un=ub,db=Wn,fb=Un,pb="[object Symbol]";function hb(e){return typeof e=="symbol"||fb(e)&&db(e)==pb}var pa=hb,mb=wt,yb=pa,vb=/\.|\[(?:[^[\]]*|(["'])(?:(?!\1)[^\\]|\\.)*?\1)\]/,gb=/^\w*$/;function xb(e,t){if(mb(e))return!1;var n=typeof e;return n=="number"||n=="symbol"||n=="boolean"||e==null||yb(e)?!0:gb.test(e)||!vb.test(e)||t!=null&&e in Object(t)}var J0=xb;function bb(e){var t=typeof e;return e!=null&&(t=="object"||t=="function")}var br=bb;const ha=me(br);var wb=Wn,kb=br,_b="[object AsyncFunction]",Sb="[object Function]",jb="[object GeneratorFunction]",Ob="[object Proxy]";function Pb(e){if(!kb(e))return!1;var t=wb(e);return t==Sb||t==jb||t==_b||t==Ob}var ep=Pb;const te=me(ep);var Ab=bn,Mb=Ab["__core-js_shared__"],Nb=Mb,pd=Nb,w7=function(){var e=/[^.]+$/.exec(pd&&pd.keys&&pd.keys.IE_PROTO||"");return e?"Symbol(src)_1."+e:""}();function Eb(e){return!!w7&&w7 in e}var Cb=Eb,$b=Function.prototype,Tb=$b.toString;function zb(e){if(e!=null){try{return Tb.call(e)}catch{}try{return e+""}catch{}}return""}var S6=zb,Ib=ep,Db=Cb,Lb=br,Fb=S6,Rb=/[\\^$.*+?()[\]{}|]/g,Bb=/^\[object .+?Constructor\]$/,Wb=Function.prototype,Ub=Object.prototype,Hb=Wb.toString,Gb=Ub.hasOwnProperty,Vb=RegExp("^"+Hb.call(Gb).replace(Rb,"\\$&").replace(/hasOwnProperty|(function).*?(?=\\\()| for .+?(?=\\\])/g,"$1.*?")+"$");function Xb(e){if(!Lb(e)||Db(e))return!1;var t=Ib(e)?Vb:Bb;return t.test(Fb(e))}var qb=Xb;function Kb(e,t){return e==null?void 0:e[t]}var Yb=Kb,Zb=qb,Qb=Yb;function Jb(e,t){var n=Qb(e,t);return Zb(n)?n:void 0}var ri=Jb,ew=ri,tw=ew(Object,"create"),Yc=tw,k7=Yc;function nw(){this.__data__=k7?k7(null):{},this.size=0}var rw=nw;function iw(e){var t=this.has(e)&&delete this.__data__[e];return this.size-=t?1:0,t}var aw=iw,lw=Yc,ow="__lodash_hash_undefined__",sw=Object.prototype,cw=sw.hasOwnProperty;function uw(e){var t=this.__data__;if(lw){var n=t[e];return n===ow?void 0:n}return cw.call(t,e)?t[e]:void 0}var dw=uw,fw=Yc,pw=Object.prototype,hw=pw.hasOwnProperty;function mw(e){var t=this.__data__;return fw?t[e]!==void 0:hw.call(t,e)}var yw=mw,vw=Yc,gw="__lodash_hash_undefined__";function xw(e,t){var n=this.__data__;return this.size+=this.has(e)?0:1,n[e]=vw&&t===void 0?gw:t,this}var bw=xw,ww=rw,kw=aw,_w=dw,Sw=yw,jw=bw;function ma(e){var t=-1,n=e==null?0:e.length;for(this.clear();++t<n;){var r=e[t];this.set(r[0],r[1])}}ma.prototype.clear=ww;ma.prototype.delete=kw;ma.prototype.get=_w;ma.prototype.has=Sw;ma.prototype.set=jw;var Ow=ma;function Pw(){this.__data__=[],this.size=0}var Aw=Pw;function Mw(e,t){return e===t||e!==e&&t!==t}var tp=Mw,Nw=tp;function Ew(e,t){for(var n=e.length;n--;)if(Nw(e[n][0],t))return n;return-1}var Zc=Ew,Cw=Zc,$w=Array.prototype,Tw=$w.splice;function zw(e){var t=this.__data__,n=Cw(t,e);if(n<0)return!1;var r=t.length-1;return n==r?t.pop():Tw.call(t,n,1),--this.size,!0}var Iw=zw,Dw=Zc;function Lw(e){var t=this.__data__,n=Dw(t,e);return n<0?void 0:t[n][1]}var Fw=Lw,Rw=Zc;function Bw(e){return Rw(this.__data__,e)>-1}var Ww=Bw,Uw=Zc;function Hw(e,t){var n=this.__data__,r=Uw(n,e);return r<0?(++this.size,n.push([e,t])):n[r][1]=t,this}var Gw=Hw,Vw=Aw,Xw=Iw,qw=Fw,Kw=Ww,Yw=Gw;function ya(e){var t=-1,n=e==null?0:e.length;for(this.clear();++t<n;){var r=e[t];this.set(r[0],r[1])}}ya.prototype.clear=Vw;ya.prototype.delete=Xw;ya.prototype.get=qw;ya.prototype.has=Kw;ya.prototype.set=Yw;var Qc=ya,Zw=ri,Qw=bn,Jw=Zw(Qw,"Map"),np=Jw,_7=Ow,ek=Qc,tk=np;function nk(){this.size=0,this.__data__={hash:new _7,map:new(tk||ek),string:new _7}}var rk=nk;function ik(e){var t=typeof e;return t=="string"||t=="number"||t=="symbol"||t=="boolean"?e!=="__proto__":e===null}var ak=ik,lk=ak;function ok(e,t){var n=e.__data__;return lk(t)?n[typeof t=="string"?"string":"hash"]:n.map}var Jc=ok,sk=Jc;function ck(e){var t=sk(this,e).delete(e);return this.size-=t?1:0,t}var uk=ck,dk=Jc;function fk(e){return dk(this,e).get(e)}var pk=fk,hk=Jc;function mk(e){return hk(this,e).has(e)}var yk=mk,vk=Jc;function gk(e,t){var n=vk(this,e),r=n.size;return n.set(e,t),this.size+=n.size==r?0:1,this}var xk=gk,bk=rk,wk=uk,kk=pk,_k=yk,Sk=xk;function va(e){var t=-1,n=e==null?0:e.length;for(this.clear();++t<n;){var r=e[t];this.set(r[0],r[1])}}va.prototype.clear=bk;va.prototype.delete=wk;va.prototype.get=kk;va.prototype.has=_k;va.prototype.set=Sk;var rp=va,j6=rp,jk="Expected a function";function ip(e,t){if(typeof e!="function"||t!=null&&typeof t!="function")throw new TypeError(jk);var n=function(){var r=arguments,i=t?t.apply(this,r):r[0],a=n.cache;if(a.has(i))return a.get(i);var l=e.apply(this,r);return n.cache=a.set(i,l)||a,l};return n.cache=new(ip.Cache||j6),n}ip.Cache=j6;var O6=ip;const Ok=me(O6);var Pk=O6,Ak=500;function Mk(e){var t=Pk(e,function(r){return n.size===Ak&&n.clear(),r}),n=t.cache;return t}var Nk=Mk,Ek=Nk,Ck=/[^.[\]]+|\[(?:(-?\d+(?:\.\d+)?)|(["'])((?:(?!\2)[^\\]|\\.)*?)\2)\]|(?=(?:\.|\[\])(?:\.|\[\]|$))/g,$k=/\\(\\)?/g,Tk=Ek(function(e){var t=[];return e.charCodeAt(0)===46&&t.push(""),e.replace(Ck,function(n,r,i,a){t.push(i?a.replace($k,"$1"):r||n)}),t}),zk=Tk;function Ik(e,t){for(var n=-1,r=e==null?0:e.length,i=Array(r);++n<r;)i[n]=t(e[n],n,e);return i}var ap=Ik,S7=ho,Dk=ap,Lk=wt,Fk=pa,j7=S7?S7.prototype:void 0,O7=j7?j7.toString:void 0;function P6(e){if(typeof e=="string")return e;if(Lk(e))return Dk(e,P6)+"";if(Fk(e))return O7?O7.call(e):"";var t=e+"";return t=="0"&&1/e==-1/0?"-0":t}var Rk=P6,Bk=Rk;function Wk(e){return e==null?"":Bk(e)}var A6=Wk,Uk=wt,Hk=J0,Gk=zk,Vk=A6;function Xk(e,t){return Uk(e)?e:Hk(e,t)?[e]:Gk(Vk(e))}var M6=Xk,qk=pa;function Kk(e){if(typeof e=="string"||qk(e))return e;var t=e+"";return t=="0"&&1/e==-1/0?"-0":t}var eu=Kk,Yk=M6,Zk=eu;function Qk(e,t){t=Yk(t,e);for(var n=0,r=t.length;e!=null&&n<r;)e=e[Zk(t[n++])];return n&&n==r?e:void 0}var lp=Qk,Jk=lp;function e_(e,t,n){var r=e==null?void 0:Jk(e,t);return r===void 0?n:r}var N6=e_;const Ft=me(N6);function t_(e){return e==null}var n_=t_;const ce=me(n_);var r_=Wn,i_=wt,a_=Un,l_="[object String]";function o_(e){return typeof e=="string"||!i_(e)&&a_(e)&&r_(e)==l_}var s_=o_;const Yr=me(s_);var E6={exports:{}},fe={};/**
 * @license React
 * react-is.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */var op=Symbol.for("react.element"),sp=Symbol.for("react.portal"),tu=Symbol.for("react.fragment"),nu=Symbol.for("react.strict_mode"),ru=Symbol.for("react.profiler"),iu=Symbol.for("react.provider"),au=Symbol.for("react.context"),c_=Symbol.for("react.server_context"),lu=Symbol.for("react.forward_ref"),ou=Symbol.for("react.suspense"),su=Symbol.for("react.suspense_list"),cu=Symbol.for("react.memo"),uu=Symbol.for("react.lazy"),u_=Symbol.for("react.offscreen"),C6;C6=Symbol.for("react.module.reference");function Ut(e){if(typeof e=="object"&&e!==null){var t=e.$$typeof;switch(t){case op:switch(e=e.type,e){case tu:case ru:case nu:case ou:case su:return e;default:switch(e=e&&e.$$typeof,e){case c_:case au:case lu:case uu:case cu:case iu:return e;default:return t}}case sp:return t}}}fe.ContextConsumer=au;fe.ContextProvider=iu;fe.Element=op;fe.ForwardRef=lu;fe.Fragment=tu;fe.Lazy=uu;fe.Memo=cu;fe.Portal=sp;fe.Profiler=ru;fe.StrictMode=nu;fe.Suspense=ou;fe.SuspenseList=su;fe.isAsyncMode=function(){return!1};fe.isConcurrentMode=function(){return!1};fe.isContextConsumer=function(e){return Ut(e)===au};fe.isContextProvider=function(e){return Ut(e)===iu};fe.isElement=function(e){return typeof e=="object"&&e!==null&&e.$$typeof===op};fe.isForwardRef=function(e){return Ut(e)===lu};fe.isFragment=function(e){return Ut(e)===tu};fe.isLazy=function(e){return Ut(e)===uu};fe.isMemo=function(e){return Ut(e)===cu};fe.isPortal=function(e){return Ut(e)===sp};fe.isProfiler=function(e){return Ut(e)===ru};fe.isStrictMode=function(e){return Ut(e)===nu};fe.isSuspense=function(e){return Ut(e)===ou};fe.isSuspenseList=function(e){return Ut(e)===su};fe.isValidElementType=function(e){return typeof e=="string"||typeof e=="function"||e===tu||e===ru||e===nu||e===ou||e===su||e===u_||typeof e=="object"&&e!==null&&(e.$$typeof===uu||e.$$typeof===cu||e.$$typeof===iu||e.$$typeof===au||e.$$typeof===lu||e.$$typeof===C6||e.getModuleId!==void 0)};fe.typeOf=Ut;E6.exports=fe;var d_=E6.exports,f_=Wn,p_=Un,h_="[object Number]";function m_(e){return typeof e=="number"||p_(e)&&f_(e)==h_}var $6=m_;const y_=me($6);var v_=$6;function g_(e){return v_(e)&&e!=+e}var x_=g_;const mo=me(x_);var Jt=function(t){return t===0?0:t>0?1:-1},Ir=function(t){return Yr(t)&&t.indexOf("%")===t.length-1},G=function(t){return y_(t)&&!mo(t)},b_=function(t){return ce(t)},We=function(t){return G(t)||Yr(t)},w_=0,du=function(t){var n=++w_;return"".concat(t||"").concat(n)},Zr=function(t,n){var r=arguments.length>2&&arguments[2]!==void 0?arguments[2]:0,i=arguments.length>3&&arguments[3]!==void 0?arguments[3]:!1;if(!G(t)&&!Yr(t))return r;var a;if(Ir(t)){var l=t.indexOf("%");a=n*parseFloat(t.slice(0,l))/100}else a=+t;return mo(a)&&(a=r),i&&a>n&&(a=n),a},er=function(t){if(!t)return null;var n=Object.keys(t);return n&&n.length?t[n[0]]:null},k_=function(t){if(!Array.isArray(t))return!1;for(var n=t.length,r={},i=0;i<n;i++)if(!r[t[i]])r[t[i]]=!0;else return!0;return!1},si=function(t,n){return G(t)&&G(n)?function(r){return t+r*(n-t)}:function(){return n}};function T1(e,t,n){return!e||!e.length?null:e.find(function(r){return r&&(typeof t=="function"?t(r):Ft(r,t))===n})}var __=function(t,n){return G(t)&&G(n)?t-n:Yr(t)&&Yr(n)?t.localeCompare(n):t instanceof Date&&n instanceof Date?t.getTime()-n.getTime():String(t).localeCompare(String(n))};function $i(e,t){for(var n in e)if({}.hasOwnProperty.call(e,n)&&(!{}.hasOwnProperty.call(t,n)||e[n]!==t[n]))return!1;for(var r in t)if({}.hasOwnProperty.call(t,r)&&!{}.hasOwnProperty.call(e,r))return!1;return!0}function z1(e){"@babel/helpers - typeof";return z1=typeof Symbol=="function"&&typeof Symbol.iterator=="symbol"?function(t){return typeof t}:function(t){return t&&typeof Symbol=="function"&&t.constructor===Symbol&&t!==Symbol.prototype?"symbol":typeof t},z1(e)}var S_=["viewBox","children"],j_=["aria-activedescendant","aria-atomic","aria-autocomplete","aria-busy","aria-checked","aria-colcount","aria-colindex","aria-colspan","aria-controls","aria-current","aria-describedby","aria-details","aria-disabled","aria-errormessage","aria-expanded","aria-flowto","aria-haspopup","aria-hidden","aria-invalid","aria-keyshortcuts","aria-label","aria-labelledby","aria-level","aria-live","aria-modal","aria-multiline","aria-multiselectable","aria-orientation","aria-owns","aria-placeholder","aria-posinset","aria-pressed","aria-readonly","aria-relevant","aria-required","aria-roledescription","aria-rowcount","aria-rowindex","aria-rowspan","aria-selected","aria-setsize","aria-sort","aria-valuemax","aria-valuemin","aria-valuenow","aria-valuetext","className","color","height","id","lang","max","media","method","min","name","style","target","width","role","tabIndex","accentHeight","accumulate","additive","alignmentBaseline","allowReorder","alphabetic","amplitude","arabicForm","ascent","attributeName","attributeType","autoReverse","azimuth","baseFrequency","baselineShift","baseProfile","bbox","begin","bias","by","calcMode","capHeight","clip","clipPath","clipPathUnits","clipRule","colorInterpolation","colorInterpolationFilters","colorProfile","colorRendering","contentScriptType","contentStyleType","cursor","cx","cy","d","decelerate","descent","diffuseConstant","direction","display","divisor","dominantBaseline","dur","dx","dy","edgeMode","elevation","enableBackground","end","exponent","externalResourcesRequired","fill","fillOpacity","fillRule","filter","filterRes","filterUnits","floodColor","floodOpacity","focusable","fontFamily","fontSize","fontSizeAdjust","fontStretch","fontStyle","fontVariant","fontWeight","format","from","fx","fy","g1","g2","glyphName","glyphOrientationHorizontal","glyphOrientationVertical","glyphRef","gradientTransform","gradientUnits","hanging","horizAdvX","horizOriginX","href","ideographic","imageRendering","in2","in","intercept","k1","k2","k3","k4","k","kernelMatrix","kernelUnitLength","kerning","keyPoints","keySplines","keyTimes","lengthAdjust","letterSpacing","lightingColor","limitingConeAngle","local","markerEnd","markerHeight","markerMid","markerStart","markerUnits","markerWidth","mask","maskContentUnits","maskUnits","mathematical","mode","numOctaves","offset","opacity","operator","order","orient","orientation","origin","overflow","overlinePosition","overlineThickness","paintOrder","panose1","pathLength","patternContentUnits","patternTransform","patternUnits","pointerEvents","pointsAtX","pointsAtY","pointsAtZ","preserveAlpha","preserveAspectRatio","primitiveUnits","r","radius","refX","refY","renderingIntent","repeatCount","repeatDur","requiredExtensions","requiredFeatures","restart","result","rotate","rx","ry","seed","shapeRendering","slope","spacing","specularConstant","specularExponent","speed","spreadMethod","startOffset","stdDeviation","stemh","stemv","stitchTiles","stopColor","stopOpacity","strikethroughPosition","strikethroughThickness","string","stroke","strokeDasharray","strokeDashoffset","strokeLinecap","strokeLinejoin","strokeMiterlimit","strokeOpacity","strokeWidth","surfaceScale","systemLanguage","tableValues","targetX","targetY","textAnchor","textDecoration","textLength","textRendering","to","transform","u1","u2","underlinePosition","underlineThickness","unicode","unicodeBidi","unicodeRange","unitsPerEm","vAlphabetic","values","vectorEffect","version","vertAdvY","vertOriginX","vertOriginY","vHanging","vIdeographic","viewTarget","visibility","vMathematical","widths","wordSpacing","writingMode","x1","x2","x","xChannelSelector","xHeight","xlinkActuate","xlinkArcrole","xlinkHref","xlinkRole","xlinkShow","xlinkTitle","xlinkType","xmlBase","xmlLang","xmlns","xmlnsXlink","xmlSpace","y1","y2","y","yChannelSelector","z","zoomAndPan","ref","key","angle"],P7=["points","pathLength"],hd={svg:S_,polygon:P7,polyline:P7},cp=["dangerouslySetInnerHTML","onCopy","onCopyCapture","onCut","onCutCapture","onPaste","onPasteCapture","onCompositionEnd","onCompositionEndCapture","onCompositionStart","onCompositionStartCapture","onCompositionUpdate","onCompositionUpdateCapture","onFocus","onFocusCapture","onBlur","onBlurCapture","onChange","onChangeCapture","onBeforeInput","onBeforeInputCapture","onInput","onInputCapture","onReset","onResetCapture","onSubmit","onSubmitCapture","onInvalid","onInvalidCapture","onLoad","onLoadCapture","onError","onErrorCapture","onKeyDown","onKeyDownCapture","onKeyPress","onKeyPressCapture","onKeyUp","onKeyUpCapture","onAbort","onAbortCapture","onCanPlay","onCanPlayCapture","onCanPlayThrough","onCanPlayThroughCapture","onDurationChange","onDurationChangeCapture","onEmptied","onEmptiedCapture","onEncrypted","onEncryptedCapture","onEnded","onEndedCapture","onLoadedData","onLoadedDataCapture","onLoadedMetadata","onLoadedMetadataCapture","onLoadStart","onLoadStartCapture","onPause","onPauseCapture","onPlay","onPlayCapture","onPlaying","onPlayingCapture","onProgress","onProgressCapture","onRateChange","onRateChangeCapture","onSeeked","onSeekedCapture","onSeeking","onSeekingCapture","onStalled","onStalledCapture","onSuspend","onSuspendCapture","onTimeUpdate","onTimeUpdateCapture","onVolumeChange","onVolumeChangeCapture","onWaiting","onWaitingCapture","onAuxClick","onAuxClickCapture","onClick","onClickCapture","onContextMenu","onContextMenuCapture","onDoubleClick","onDoubleClickCapture","onDrag","onDragCapture","onDragEnd","onDragEndCapture","onDragEnter","onDragEnterCapture","onDragExit","onDragExitCapture","onDragLeave","onDragLeaveCapture","onDragOver","onDragOverCapture","onDragStart","onDragStartCapture","onDrop","onDropCapture","onMouseDown","onMouseDownCapture","onMouseEnter","onMouseLeave","onMouseMove","onMouseMoveCapture","onMouseOut","onMouseOutCapture","onMouseOver","onMouseOverCapture","onMouseUp","onMouseUpCapture","onSelect","onSelectCapture","onTouchCancel","onTouchCancelCapture","onTouchEnd","onTouchEndCapture","onTouchMove","onTouchMoveCapture","onTouchStart","onTouchStartCapture","onPointerDown","onPointerDownCapture","onPointerMove","onPointerMoveCapture","onPointerUp","onPointerUpCapture","onPointerCancel","onPointerCancelCapture","onPointerEnter","onPointerEnterCapture","onPointerLeave","onPointerLeaveCapture","onPointerOver","onPointerOverCapture","onPointerOut","onPointerOutCapture","onGotPointerCapture","onGotPointerCaptureCapture","onLostPointerCapture","onLostPointerCaptureCapture","onScroll","onScrollCapture","onWheel","onWheelCapture","onAnimationStart","onAnimationStartCapture","onAnimationEnd","onAnimationEndCapture","onAnimationIteration","onAnimationIterationCapture","onTransitionEnd","onTransitionEndCapture"],Ds=function(t,n){if(!t||typeof t=="function"||typeof t=="boolean")return null;var r=t;if($.isValidElement(t)&&(r=t.props),!ha(r))return null;var i={};return Object.keys(r).forEach(function(a){cp.includes(a)&&(i[a]=n||function(l){return r[a](r,l)})}),i},O_=function(t,n,r){return function(i){return t(n,r,i),null}},Ls=function(t,n,r){if(!ha(t)||z1(t)!=="object")return null;var i=null;return Object.keys(t).forEach(function(a){var l=t[a];cp.includes(a)&&typeof l=="function"&&(i||(i={}),i[a]=O_(l,n,r))}),i},P_=["children"],A_=["children"];function A7(e,t){if(e==null)return{};var n=M_(e,t),r,i;if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);for(i=0;i<a.length;i++)r=a[i],!(t.indexOf(r)>=0)&&Object.prototype.propertyIsEnumerable.call(e,r)&&(n[r]=e[r])}return n}function M_(e,t){if(e==null)return{};var n={};for(var r in e)if(Object.prototype.hasOwnProperty.call(e,r)){if(t.indexOf(r)>=0)continue;n[r]=e[r]}return n}var M7={click:"onClick",mousedown:"onMouseDown",mouseup:"onMouseUp",mouseover:"onMouseOver",mousemove:"onMouseMove",mouseout:"onMouseOut",mouseenter:"onMouseEnter",mouseleave:"onMouseLeave",touchcancel:"onTouchCancel",touchend:"onTouchEnd",touchmove:"onTouchMove",touchstart:"onTouchStart",contextmenu:"onContextMenu",dblclick:"onDoubleClick"},En=function(t){return typeof t=="string"?t:t?t.displayName||t.name||"Component":""},N7=null,md=null,up=function e(t){if(t===N7&&Array.isArray(md))return md;var n=[];return $.Children.forEach(t,function(r){ce(r)||(d_.isFragment(r)?n=n.concat(e(r.props.children)):n.push(r))}),md=n,N7=t,n};function nn(e,t){var n=[],r=[];return Array.isArray(t)?r=t.map(function(i){return En(i)}):r=[En(t)],up(e).forEach(function(i){var a=Ft(i,"type.displayName")||Ft(i,"type.name");r.indexOf(a)!==-1&&n.push(i)}),n}function St(e,t){var n=nn(e,t);return n&&n[0]}var E7=function(t){if(!t||!t.props)return!1;var n=t.props,r=n.width,i=n.height;return!(!G(r)||r<=0||!G(i)||i<=0)},N_=["a","altGlyph","altGlyphDef","altGlyphItem","animate","animateColor","animateMotion","animateTransform","circle","clipPath","color-profile","cursor","defs","desc","ellipse","feBlend","feColormatrix","feComponentTransfer","feComposite","feConvolveMatrix","feDiffuseLighting","feDisplacementMap","feDistantLight","feFlood","feFuncA","feFuncB","feFuncG","feFuncR","feGaussianBlur","feImage","feMerge","feMergeNode","feMorphology","feOffset","fePointLight","feSpecularLighting","feSpotLight","feTile","feTurbulence","filter","font","font-face","font-face-format","font-face-name","font-face-url","foreignObject","g","glyph","glyphRef","hkern","image","line","lineGradient","marker","mask","metadata","missing-glyph","mpath","path","pattern","polygon","polyline","radialGradient","rect","script","set","stop","style","svg","switch","symbol","text","textPath","title","tref","tspan","use","view","vkern"],E_=function(t){return t&&t.type&&Yr(t.type)&&N_.indexOf(t.type)>=0},C_=function(t,n,r,i){var a,l=(a=hd==null?void 0:hd[i])!==null&&a!==void 0?a:[];return n.startsWith("data-")||!te(t)&&(i&&l.includes(n)||j_.includes(n))||r&&cp.includes(n)},oe=function(t,n,r){if(!t||typeof t=="function"||typeof t=="boolean")return null;var i=t;if($.isValidElement(t)&&(i=t.props),!ha(i))return null;var a={};return Object.keys(i).forEach(function(l){var o;C_((o=i)===null||o===void 0?void 0:o[l],l,n,r)&&(a[l]=i[l])}),a},I1=function e(t,n){if(t===n)return!0;var r=$.Children.count(t);if(r!==$.Children.count(n))return!1;if(r===0)return!0;if(r===1)return C7(Array.isArray(t)?t[0]:t,Array.isArray(n)?n[0]:n);for(var i=0;i<r;i++){var a=t[i],l=n[i];if(Array.isArray(a)||Array.isArray(l)){if(!e(a,l))return!1}else if(!C7(a,l))return!1}return!0},C7=function(t,n){if(ce(t)&&ce(n))return!0;if(!ce(t)&&!ce(n)){var r=t.props||{},i=r.children,a=A7(r,P_),l=n.props||{},o=l.children,s=A7(l,A_);return i&&o?$i(a,s)&&I1(i,o):!i&&!o?$i(a,s):!1}return!1},$7=function(t,n){var r=[],i={};return up(t).forEach(function(a,l){if(E_(a))r.push(a);else if(a){var o=En(a.type),s=n[o]||{},c=s.handler,f=s.once;if(c&&(!f||!i[o])){var d=c(a,o,l);r.push(d),i[o]=!0}}}),r},$_=function(t){var n=t&&t.type;return n&&M7[n]?M7[n]:null},T_=function(t,n){return up(n).indexOf(t)},z_=["children","width","height","viewBox","className","style","title","desc"];function D1(){return D1=Object.assign?Object.assign.bind():function(e){for(var t=1;t<arguments.length;t++){var n=arguments[t];for(var r in n)Object.prototype.hasOwnProperty.call(n,r)&&(e[r]=n[r])}return e},D1.apply(this,arguments)}function I_(e,t){if(e==null)return{};var n=D_(e,t),r,i;if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);for(i=0;i<a.length;i++)r=a[i],!(t.indexOf(r)>=0)&&Object.prototype.propertyIsEnumerable.call(e,r)&&(n[r]=e[r])}return n}function D_(e,t){if(e==null)return{};var n={};for(var r in e)if(Object.prototype.hasOwnProperty.call(e,r)){if(t.indexOf(r)>=0)continue;n[r]=e[r]}return n}function L1(e){var t=e.children,n=e.width,r=e.height,i=e.viewBox,a=e.className,l=e.style,o=e.title,s=e.desc,c=I_(e,z_),f=i||{width:n,height:r,x:0,y:0},d=se("recharts-surface",a);return T.createElement("svg",D1({},oe(c,!0,"svg"),{className:d,width:n,height:r,style:l,viewBox:"".concat(f.x," ").concat(f.y," ").concat(f.width," ").concat(f.height)}),T.createElement("title",null,o),T.createElement("desc",null,s),t)}var L_=["children","className"];function F1(){return F1=Object.assign?Object.assign.bind():function(e){for(var t=1;t<arguments.length;t++){var n=arguments[t];for(var r in n)Object.prototype.hasOwnProperty.call(n,r)&&(e[r]=n[r])}return e},F1.apply(this,arguments)}function F_(e,t){if(e==null)return{};var n=R_(e,t),r,i;if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);for(i=0;i<a.length;i++)r=a[i],!(t.indexOf(r)>=0)&&Object.prototype.propertyIsEnumerable.call(e,r)&&(n[r]=e[r])}return n}function R_(e,t){if(e==null)return{};var n={};for(var r in e)if(Object.prototype.hasOwnProperty.call(e,r)){if(t.indexOf(r)>=0)continue;n[r]=e[r]}return n}var Ve=T.forwardRef(function(e,t){var n=e.children,r=e.className,i=F_(e,L_),a=se("recharts-layer",r);return T.createElement("g",F1({className:a},oe(i,!0),{ref:t}),n)}),Cn=function(t,n){for(var r=arguments.length,i=new Array(r>2?r-2:0),a=2;a<r;a++)i[a-2]=arguments[a]};function B_(e,t,n){var r=-1,i=e.length;t<0&&(t=-t>i?0:i+t),n=n>i?i:n,n<0&&(n+=i),i=t>n?0:n-t>>>0,t>>>=0;for(var a=Array(i);++r<i;)a[r]=e[r+t];return a}var W_=B_,U_=W_;function H_(e,t,n){var r=e.length;return n=n===void 0?r:n,!t&&n>=r?e:U_(e,t,n)}var G_=H_,V_="\\ud800-\\udfff",X_="\\u0300-\\u036f",q_="\\ufe20-\\ufe2f",K_="\\u20d0-\\u20ff",Y_=X_+q_+K_,Z_="\\ufe0e\\ufe0f",Q_="\\u200d",J_=RegExp("["+Q_+V_+Y_+Z_+"]");function eS(e){return J_.test(e)}var T6=eS;function tS(e){return e.split("")}var nS=tS,z6="\\ud800-\\udfff",rS="\\u0300-\\u036f",iS="\\ufe20-\\ufe2f",aS="\\u20d0-\\u20ff",lS=rS+iS+aS,oS="\\ufe0e\\ufe0f",sS="["+z6+"]",R1="["+lS+"]",B1="\\ud83c[\\udffb-\\udfff]",cS="(?:"+R1+"|"+B1+")",I6="[^"+z6+"]",D6="(?:\\ud83c[\\udde6-\\uddff]){2}",L6="[\\ud800-\\udbff][\\udc00-\\udfff]",uS="\\u200d",F6=cS+"?",R6="["+oS+"]?",dS="(?:"+uS+"(?:"+[I6,D6,L6].join("|")+")"+R6+F6+")*",fS=R6+F6+dS,pS="(?:"+[I6+R1+"?",R1,D6,L6,sS].join("|")+")",hS=RegExp(B1+"(?="+B1+")|"+pS+fS,"g");function mS(e){return e.match(hS)||[]}var yS=mS,vS=nS,gS=T6,xS=yS;function bS(e){return gS(e)?xS(e):vS(e)}var wS=bS,kS=G_,_S=T6,SS=wS,jS=A6;function OS(e){return function(t){t=jS(t);var n=_S(t)?SS(t):void 0,r=n?n[0]:t.charAt(0),i=n?kS(n,1).join(""):t.slice(1);return r[e]()+i}}var PS=OS,AS=PS,MS=AS("toUpperCase"),NS=MS;const fu=me(NS);function ye(e){return function(){return e}}const B6=Math.cos,Fs=Math.sin,an=Math.sqrt,Rs=Math.PI,pu=2*Rs,W1=Math.PI,U1=2*W1,Nr=1e-6,ES=U1-Nr;function W6(e){this._+=e[0];for(let t=1,n=e.length;t<n;++t)this._+=arguments[t]+e[t]}function CS(e){let t=Math.floor(e);if(!(t>=0))throw new Error(`invalid digits: ${e}`);if(t>15)return W6;const n=10**t;return function(r){this._+=r[0];for(let i=1,a=r.length;i<a;++i)this._+=Math.round(arguments[i]*n)/n+r[i]}}class $S{constructor(t){this._x0=this._y0=this._x1=this._y1=null,this._="",this._append=t==null?W6:CS(t)}moveTo(t,n){this._append`M${this._x0=this._x1=+t},${this._y0=this._y1=+n}`}closePath(){this._x1!==null&&(this._x1=this._x0,this._y1=this._y0,this._append`Z`)}lineTo(t,n){this._append`L${this._x1=+t},${this._y1=+n}`}quadraticCurveTo(t,n,r,i){this._append`Q${+t},${+n},${this._x1=+r},${this._y1=+i}`}bezierCurveTo(t,n,r,i,a,l){this._append`C${+t},${+n},${+r},${+i},${this._x1=+a},${this._y1=+l}`}arcTo(t,n,r,i,a){if(t=+t,n=+n,r=+r,i=+i,a=+a,a<0)throw new Error(`negative radius: ${a}`);let l=this._x1,o=this._y1,s=r-t,c=i-n,f=l-t,d=o-n,p=f*f+d*d;if(this._x1===null)this._append`M${this._x1=t},${this._y1=n}`;else if(p>Nr)if(!(Math.abs(d*s-c*f)>Nr)||!a)this._append`L${this._x1=t},${this._y1=n}`;else{let h=r-l,x=i-o,v=s*s+c*c,w=h*h+x*x,y=Math.sqrt(v),m=Math.sqrt(p),g=a*Math.tan((W1-Math.acos((v+p-w)/(2*y*m)))/2),_=g/m,b=g/y;Math.abs(_-1)>Nr&&this._append`L${t+_*f},${n+_*d}`,this._append`A${a},${a},0,0,${+(d*h>f*x)},${this._x1=t+b*s},${this._y1=n+b*c}`}}arc(t,n,r,i,a,l){if(t=+t,n=+n,r=+r,l=!!l,r<0)throw new Error(`negative radius: ${r}`);let o=r*Math.cos(i),s=r*Math.sin(i),c=t+o,f=n+s,d=1^l,p=l?i-a:a-i;this._x1===null?this._append`M${c},${f}`:(Math.abs(this._x1-c)>Nr||Math.abs(this._y1-f)>Nr)&&this._append`L${c},${f}`,r&&(p<0&&(p=p%U1+U1),p>ES?this._append`A${r},${r},0,1,${d},${t-o},${n-s}A${r},${r},0,1,${d},${this._x1=c},${this._y1=f}`:p>Nr&&this._append`A${r},${r},0,${+(p>=W1)},${d},${this._x1=t+r*Math.cos(a)},${this._y1=n+r*Math.sin(a)}`)}rect(t,n,r,i){this._append`M${this._x0=this._x1=+t},${this._y0=this._y1=+n}h${r=+r}v${+i}h${-r}Z`}toString(){return this._}}function dp(e){let t=3;return e.digits=function(n){if(!arguments.length)return t;if(n==null)t=null;else{const r=Math.floor(n);if(!(r>=0))throw new RangeError(`invalid digits: ${n}`);t=r}return e},()=>new $S(t)}function fp(e){return typeof e=="object"&&"length"in e?e:Array.from(e)}function U6(e){this._context=e}U6.prototype={areaStart:function(){this._line=0},areaEnd:function(){this._line=NaN},lineStart:function(){this._point=0},lineEnd:function(){(this._line||this._line!==0&&this._point===1)&&this._context.closePath(),this._line=1-this._line},point:function(e,t){switch(e=+e,t=+t,this._point){case 0:this._point=1,this._line?this._context.lineTo(e,t):this._context.moveTo(e,t);break;case 1:this._point=2;default:this._context.lineTo(e,t);break}}};function hu(e){return new U6(e)}function H6(e){return e[0]}function G6(e){return e[1]}function V6(e,t){var n=ye(!0),r=null,i=hu,a=null,l=dp(o);e=typeof e=="function"?e:e===void 0?H6:ye(e),t=typeof t=="function"?t:t===void 0?G6:ye(t);function o(s){var c,f=(s=fp(s)).length,d,p=!1,h;for(r==null&&(a=i(h=l())),c=0;c<=f;++c)!(c<f&&n(d=s[c],c,s))===p&&((p=!p)?a.lineStart():a.lineEnd()),p&&a.point(+e(d,c,s),+t(d,c,s));if(h)return a=null,h+""||null}return o.x=function(s){return arguments.length?(e=typeof s=="function"?s:ye(+s),o):e},o.y=function(s){return arguments.length?(t=typeof s=="function"?s:ye(+s),o):t},o.defined=function(s){return arguments.length?(n=typeof s=="function"?s:ye(!!s),o):n},o.curve=function(s){return arguments.length?(i=s,r!=null&&(a=i(r)),o):i},o.context=function(s){return arguments.length?(s==null?r=a=null:a=i(r=s),o):r},o}function Ro(e,t,n){var r=null,i=ye(!0),a=null,l=hu,o=null,s=dp(c);e=typeof e=="function"?e:e===void 0?H6:ye(+e),t=typeof t=="function"?t:ye(t===void 0?0:+t),n=typeof n=="function"?n:n===void 0?G6:ye(+n);function c(d){var p,h,x,v=(d=fp(d)).length,w,y=!1,m,g=new Array(v),_=new Array(v);for(a==null&&(o=l(m=s())),p=0;p<=v;++p){if(!(p<v&&i(w=d[p],p,d))===y)if(y=!y)h=p,o.areaStart(),o.lineStart();else{for(o.lineEnd(),o.lineStart(),x=p-1;x>=h;--x)o.point(g[x],_[x]);o.lineEnd(),o.areaEnd()}y&&(g[p]=+e(w,p,d),_[p]=+t(w,p,d),o.point(r?+r(w,p,d):g[p],n?+n(w,p,d):_[p]))}if(m)return o=null,m+""||null}function f(){return V6().defined(i).curve(l).context(a)}return c.x=function(d){return arguments.length?(e=typeof d=="function"?d:ye(+d),r=null,c):e},c.x0=function(d){return arguments.length?(e=typeof d=="function"?d:ye(+d),c):e},c.x1=function(d){return arguments.length?(r=d==null?null:typeof d=="function"?d:ye(+d),c):r},c.y=function(d){return arguments.length?(t=typeof d=="function"?d:ye(+d),n=null,c):t},c.y0=function(d){return arguments.length?(t=typeof d=="function"?d:ye(+d),c):t},c.y1=function(d){return arguments.length?(n=d==null?null:typeof d=="function"?d:ye(+d),c):n},c.lineX0=c.lineY0=function(){return f().x(e).y(t)},c.lineY1=function(){return f().x(e).y(n)},c.lineX1=function(){return f().x(r).y(t)},c.defined=function(d){return arguments.length?(i=typeof d=="function"?d:ye(!!d),c):i},c.curve=function(d){return arguments.length?(l=d,a!=null&&(o=l(a)),c):l},c.context=function(d){return arguments.length?(d==null?a=o=null:o=l(a=d),c):a},c}class X6{constructor(t,n){this._context=t,this._x=n}areaStart(){this._line=0}areaEnd(){this._line=NaN}lineStart(){this._point=0}lineEnd(){(this._line||this._line!==0&&this._point===1)&&this._context.closePath(),this._line=1-this._line}point(t,n){switch(t=+t,n=+n,this._point){case 0:{this._point=1,this._line?this._context.lineTo(t,n):this._context.moveTo(t,n);break}case 1:this._point=2;default:{this._x?this._context.bezierCurveTo(this._x0=(this._x0+t)/2,this._y0,this._x0,n,t,n):this._context.bezierCurveTo(this._x0,this._y0=(this._y0+n)/2,t,this._y0,t,n);break}}this._x0=t,this._y0=n}}function TS(e){return new X6(e,!0)}function zS(e){return new X6(e,!1)}const pp={draw(e,t){const n=an(t/Rs);e.moveTo(n,0),e.arc(0,0,n,0,pu)}},IS={draw(e,t){const n=an(t/5)/2;e.moveTo(-3*n,-n),e.lineTo(-n,-n),e.lineTo(-n,-3*n),e.lineTo(n,-3*n),e.lineTo(n,-n),e.lineTo(3*n,-n),e.lineTo(3*n,n),e.lineTo(n,n),e.lineTo(n,3*n),e.lineTo(-n,3*n),e.lineTo(-n,n),e.lineTo(-3*n,n),e.closePath()}},q6=an(1/3),DS=q6*2,LS={draw(e,t){const n=an(t/DS),r=n*q6;e.moveTo(0,-n),e.lineTo(r,0),e.lineTo(0,n),e.lineTo(-r,0),e.closePath()}},FS={draw(e,t){const n=an(t),r=-n/2;e.rect(r,r,n,n)}},RS=.8908130915292852,K6=Fs(Rs/10)/Fs(7*Rs/10),BS=Fs(pu/10)*K6,WS=-B6(pu/10)*K6,US={draw(e,t){const n=an(t*RS),r=BS*n,i=WS*n;e.moveTo(0,-n),e.lineTo(r,i);for(let a=1;a<5;++a){const l=pu*a/5,o=B6(l),s=Fs(l);e.lineTo(s*n,-o*n),e.lineTo(o*r-s*i,s*r+o*i)}e.closePath()}},yd=an(3),HS={draw(e,t){const n=-an(t/(yd*3));e.moveTo(0,n*2),e.lineTo(-yd*n,-n),e.lineTo(yd*n,-n),e.closePath()}},Et=-.5,Ct=an(3)/2,H1=1/an(12),GS=(H1/2+1)*3,VS={draw(e,t){const n=an(t/GS),r=n/2,i=n*H1,a=r,l=n*H1+n,o=-a,s=l;e.moveTo(r,i),e.lineTo(a,l),e.lineTo(o,s),e.lineTo(Et*r-Ct*i,Ct*r+Et*i),e.lineTo(Et*a-Ct*l,Ct*a+Et*l),e.lineTo(Et*o-Ct*s,Ct*o+Et*s),e.lineTo(Et*r+Ct*i,Et*i-Ct*r),e.lineTo(Et*a+Ct*l,Et*l-Ct*a),e.lineTo(Et*o+Ct*s,Et*s-Ct*o),e.closePath()}};function XS(e,t){let n=null,r=dp(i);e=typeof e=="function"?e:ye(e||pp),t=typeof t=="function"?t:ye(t===void 0?64:+t);function i(){let a;if(n||(n=a=r()),e.apply(this,arguments).draw(n,+t.apply(this,arguments)),a)return n=null,a+""||null}return i.type=function(a){return arguments.length?(e=typeof a=="function"?a:ye(a),i):e},i.size=function(a){return arguments.length?(t=typeof a=="function"?a:ye(+a),i):t},i.context=function(a){return arguments.length?(n=a??null,i):n},i}function Bs(){}function Ws(e,t,n){e._context.bezierCurveTo((2*e._x0+e._x1)/3,(2*e._y0+e._y1)/3,(e._x0+2*e._x1)/3,(e._y0+2*e._y1)/3,(e._x0+4*e._x1+t)/6,(e._y0+4*e._y1+n)/6)}function Y6(e){this._context=e}Y6.prototype={areaStart:function(){this._line=0},areaEnd:function(){this._line=NaN},lineStart:function(){this._x0=this._x1=this._y0=this._y1=NaN,this._point=0},lineEnd:function(){switch(this._point){case 3:Ws(this,this._x1,this._y1);case 2:this._context.lineTo(this._x1,this._y1);break}(this._line||this._line!==0&&this._point===1)&&this._context.closePath(),this._line=1-this._line},point:function(e,t){switch(e=+e,t=+t,this._point){case 0:this._point=1,this._line?this._context.lineTo(e,t):this._context.moveTo(e,t);break;case 1:this._point=2;break;case 2:this._point=3,this._context.lineTo((5*this._x0+this._x1)/6,(5*this._y0+this._y1)/6);default:Ws(this,e,t);break}this._x0=this._x1,this._x1=e,this._y0=this._y1,this._y1=t}};function qS(e){return new Y6(e)}function Z6(e){this._context=e}Z6.prototype={areaStart:Bs,areaEnd:Bs,lineStart:function(){this._x0=this._x1=this._x2=this._x3=this._x4=this._y0=this._y1=this._y2=this._y3=this._y4=NaN,this._point=0},lineEnd:function(){switch(this._point){case 1:{this._context.moveTo(this._x2,this._y2),this._context.closePath();break}case 2:{this._context.moveTo((this._x2+2*this._x3)/3,(this._y2+2*this._y3)/3),this._context.lineTo((this._x3+2*this._x2)/3,(this._y3+2*this._y2)/3),this._context.closePath();break}case 3:{this.point(this._x2,this._y2),this.point(this._x3,this._y3),this.point(this._x4,this._y4);break}}},point:function(e,t){switch(e=+e,t=+t,this._point){case 0:this._point=1,this._x2=e,this._y2=t;break;case 1:this._point=2,this._x3=e,this._y3=t;break;case 2:this._point=3,this._x4=e,this._y4=t,this._context.moveTo((this._x0+4*this._x1+e)/6,(this._y0+4*this._y1+t)/6);break;default:Ws(this,e,t);break}this._x0=this._x1,this._x1=e,this._y0=this._y1,this._y1=t}};function KS(e){return new Z6(e)}function Q6(e){this._context=e}Q6.prototype={areaStart:function(){this._line=0},areaEnd:function(){this._line=NaN},lineStart:function(){this._x0=this._x1=this._y0=this._y1=NaN,this._point=0},lineEnd:function(){(this._line||this._line!==0&&this._point===3)&&this._context.closePath(),this._line=1-this._line},point:function(e,t){switch(e=+e,t=+t,this._point){case 0:this._point=1;break;case 1:this._point=2;break;case 2:this._point=3;var n=(this._x0+4*this._x1+e)/6,r=(this._y0+4*this._y1+t)/6;this._line?this._context.lineTo(n,r):this._context.moveTo(n,r);break;case 3:this._point=4;default:Ws(this,e,t);break}this._x0=this._x1,this._x1=e,this._y0=this._y1,this._y1=t}};function YS(e){return new Q6(e)}function J6(e){this._context=e}J6.prototype={areaStart:Bs,areaEnd:Bs,lineStart:function(){this._point=0},lineEnd:function(){this._point&&this._context.closePath()},point:function(e,t){e=+e,t=+t,this._point?this._context.lineTo(e,t):(this._point=1,this._context.moveTo(e,t))}};function ZS(e){return new J6(e)}function T7(e){return e<0?-1:1}function z7(e,t,n){var r=e._x1-e._x0,i=t-e._x1,a=(e._y1-e._y0)/(r||i<0&&-0),l=(n-e._y1)/(i||r<0&&-0),o=(a*i+l*r)/(r+i);return(T7(a)+T7(l))*Math.min(Math.abs(a),Math.abs(l),.5*Math.abs(o))||0}function I7(e,t){var n=e._x1-e._x0;return n?(3*(e._y1-e._y0)/n-t)/2:t}function vd(e,t,n){var r=e._x0,i=e._y0,a=e._x1,l=e._y1,o=(a-r)/3;e._context.bezierCurveTo(r+o,i+o*t,a-o,l-o*n,a,l)}function Us(e){this._context=e}Us.prototype={areaStart:function(){this._line=0},areaEnd:function(){this._line=NaN},lineStart:function(){this._x0=this._x1=this._y0=this._y1=this._t0=NaN,this._point=0},lineEnd:function(){switch(this._point){case 2:this._context.lineTo(this._x1,this._y1);break;case 3:vd(this,this._t0,I7(this,this._t0));break}(this._line||this._line!==0&&this._point===1)&&this._context.closePath(),this._line=1-this._line},point:function(e,t){var n=NaN;if(e=+e,t=+t,!(e===this._x1&&t===this._y1)){switch(this._point){case 0:this._point=1,this._line?this._context.lineTo(e,t):this._context.moveTo(e,t);break;case 1:this._point=2;break;case 2:this._point=3,vd(this,I7(this,n=z7(this,e,t)),n);break;default:vd(this,this._t0,n=z7(this,e,t));break}this._x0=this._x1,this._x1=e,this._y0=this._y1,this._y1=t,this._t0=n}}};function ev(e){this._context=new tv(e)}(ev.prototype=Object.create(Us.prototype)).point=function(e,t){Us.prototype.point.call(this,t,e)};function tv(e){this._context=e}tv.prototype={moveTo:function(e,t){this._context.moveTo(t,e)},closePath:function(){this._context.closePath()},lineTo:function(e,t){this._context.lineTo(t,e)},bezierCurveTo:function(e,t,n,r,i,a){this._context.bezierCurveTo(t,e,r,n,a,i)}};function QS(e){return new Us(e)}function JS(e){return new ev(e)}function nv(e){this._context=e}nv.prototype={areaStart:function(){this._line=0},areaEnd:function(){this._line=NaN},lineStart:function(){this._x=[],this._y=[]},lineEnd:function(){var e=this._x,t=this._y,n=e.length;if(n)if(this._line?this._context.lineTo(e[0],t[0]):this._context.moveTo(e[0],t[0]),n===2)this._context.lineTo(e[1],t[1]);else for(var r=D7(e),i=D7(t),a=0,l=1;l<n;++a,++l)this._context.bezierCurveTo(r[0][a],i[0][a],r[1][a],i[1][a],e[l],t[l]);(this._line||this._line!==0&&n===1)&&this._context.closePath(),this._line=1-this._line,this._x=this._y=null},point:function(e,t){this._x.push(+e),this._y.push(+t)}};function D7(e){var t,n=e.length-1,r,i=new Array(n),a=new Array(n),l=new Array(n);for(i[0]=0,a[0]=2,l[0]=e[0]+2*e[1],t=1;t<n-1;++t)i[t]=1,a[t]=4,l[t]=4*e[t]+2*e[t+1];for(i[n-1]=2,a[n-1]=7,l[n-1]=8*e[n-1]+e[n],t=1;t<n;++t)r=i[t]/a[t-1],a[t]-=r,l[t]-=r*l[t-1];for(i[n-1]=l[n-1]/a[n-1],t=n-2;t>=0;--t)i[t]=(l[t]-i[t+1])/a[t];for(a[n-1]=(e[n]+i[n-1])/2,t=0;t<n-1;++t)a[t]=2*e[t+1]-i[t+1];return[i,a]}function ej(e){return new nv(e)}function mu(e,t){this._context=e,this._t=t}mu.prototype={areaStart:function(){this._line=0},areaEnd:function(){this._line=NaN},lineStart:function(){this._x=this._y=NaN,this._point=0},lineEnd:function(){0<this._t&&this._t<1&&this._point===2&&this._context.lineTo(this._x,this._y),(this._line||this._line!==0&&this._point===1)&&this._context.closePath(),this._line>=0&&(this._t=1-this._t,this._line=1-this._line)},point:function(e,t){switch(e=+e,t=+t,this._point){case 0:this._point=1,this._line?this._context.lineTo(e,t):this._context.moveTo(e,t);break;case 1:this._point=2;default:{if(this._t<=0)this._context.lineTo(this._x,t),this._context.lineTo(e,t);else{var n=this._x*(1-this._t)+e*this._t;this._context.lineTo(n,this._y),this._context.lineTo(n,t)}break}}this._x=e,this._y=t}};function tj(e){return new mu(e,.5)}function nj(e){return new mu(e,0)}function rj(e){return new mu(e,1)}function Ui(e,t){if((l=e.length)>1)for(var n=1,r,i,a=e[t[0]],l,o=a.length;n<l;++n)for(i=a,a=e[t[n]],r=0;r<o;++r)a[r][1]+=a[r][0]=isNaN(i[r][1])?i[r][0]:i[r][1]}function G1(e){for(var t=e.length,n=new Array(t);--t>=0;)n[t]=t;return n}function ij(e,t){return e[t]}function aj(e){const t=[];return t.key=e,t}function lj(){var e=ye([]),t=G1,n=Ui,r=ij;function i(a){var l=Array.from(e.apply(this,arguments),aj),o,s=l.length,c=-1,f;for(const d of a)for(o=0,++c;o<s;++o)(l[o][c]=[0,+r(d,l[o].key,c,a)]).data=d;for(o=0,f=fp(t(l));o<s;++o)l[f[o]].index=o;return n(l,f),l}return i.keys=function(a){return arguments.length?(e=typeof a=="function"?a:ye(Array.from(a)),i):e},i.value=function(a){return arguments.length?(r=typeof a=="function"?a:ye(+a),i):r},i.order=function(a){return arguments.length?(t=a==null?G1:typeof a=="function"?a:ye(Array.from(a)),i):t},i.offset=function(a){return arguments.length?(n=a??Ui,i):n},i}function oj(e,t){if((r=e.length)>0){for(var n,r,i=0,a=e[0].length,l;i<a;++i){for(l=n=0;n<r;++n)l+=e[n][i][1]||0;if(l)for(n=0;n<r;++n)e[n][i][1]/=l}Ui(e,t)}}function sj(e,t){if((i=e.length)>0){for(var n=0,r=e[t[0]],i,a=r.length;n<a;++n){for(var l=0,o=0;l<i;++l)o+=e[l][n][1]||0;r[n][1]+=r[n][0]=-o/2}Ui(e,t)}}function cj(e,t){if(!(!((l=e.length)>0)||!((a=(i=e[t[0]]).length)>0))){for(var n=0,r=1,i,a,l;r<a;++r){for(var o=0,s=0,c=0;o<l;++o){for(var f=e[t[o]],d=f[r][1]||0,p=f[r-1][1]||0,h=(d-p)/2,x=0;x<o;++x){var v=e[t[x]],w=v[r][1]||0,y=v[r-1][1]||0;h+=w-y}s+=d,c+=h*d}i[r-1][1]+=i[r-1][0]=n,s&&(n-=c/s)}i[r-1][1]+=i[r-1][0]=n,Ui(e,t)}}function jl(e){"@babel/helpers - typeof";return jl=typeof Symbol=="function"&&typeof Symbol.iterator=="symbol"?function(t){return typeof t}:function(t){return t&&typeof Symbol=="function"&&t.constructor===Symbol&&t!==Symbol.prototype?"symbol":typeof t},jl(e)}var uj=["type","size","sizeType"];function V1(){return V1=Object.assign?Object.assign.bind():function(e){for(var t=1;t<arguments.length;t++){var n=arguments[t];for(var r in n)Object.prototype.hasOwnProperty.call(n,r)&&(e[r]=n[r])}return e},V1.apply(this,arguments)}function L7(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter(function(i){return Object.getOwnPropertyDescriptor(e,i).enumerable})),n.push.apply(n,r)}return n}function F7(e){for(var t=1;t<arguments.length;t++){var n=arguments[t]!=null?arguments[t]:{};t%2?L7(Object(n),!0).forEach(function(r){dj(e,r,n[r])}):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):L7(Object(n)).forEach(function(r){Object.defineProperty(e,r,Object.getOwnPropertyDescriptor(n,r))})}return e}function dj(e,t,n){return t=fj(t),t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function fj(e){var t=pj(e,"string");return jl(t)=="symbol"?t:t+""}function pj(e,t){if(jl(e)!="object"||!e)return e;var n=e[Symbol.toPrimitive];if(n!==void 0){var r=n.call(e,t);if(jl(r)!="object")return r;throw new TypeError("@@toPrimitive must return a primitive value.")}return(t==="string"?String:Number)(e)}function hj(e,t){if(e==null)return{};var n=mj(e,t),r,i;if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);for(i=0;i<a.length;i++)r=a[i],!(t.indexOf(r)>=0)&&Object.prototype.propertyIsEnumerable.call(e,r)&&(n[r]=e[r])}return n}function mj(e,t){if(e==null)return{};var n={};for(var r in e)if(Object.prototype.hasOwnProperty.call(e,r)){if(t.indexOf(r)>=0)continue;n[r]=e[r]}return n}var rv={symbolCircle:pp,symbolCross:IS,symbolDiamond:LS,symbolSquare:FS,symbolStar:US,symbolTriangle:HS,symbolWye:VS},yj=Math.PI/180,vj=function(t){var n="symbol".concat(fu(t));return rv[n]||pp},gj=function(t,n,r){if(n==="area")return t;switch(r){case"cross":return 5*t*t/9;case"diamond":return .5*t*t/Math.sqrt(3);case"square":return t*t;case"star":{var i=18*yj;return 1.25*t*t*(Math.tan(i)-Math.tan(i*2)*Math.pow(Math.tan(i),2))}case"triangle":return Math.sqrt(3)*t*t/4;case"wye":return(21-10*Math.sqrt(3))*t*t/8;default:return Math.PI*t*t/4}},xj=function(t,n){rv["symbol".concat(fu(t))]=n},hp=function(t){var n=t.type,r=n===void 0?"circle":n,i=t.size,a=i===void 0?64:i,l=t.sizeType,o=l===void 0?"area":l,s=hj(t,uj),c=F7(F7({},s),{},{type:r,size:a,sizeType:o}),f=function(){var w=vj(r),y=XS().type(w).size(gj(a,o,r));return y()},d=c.className,p=c.cx,h=c.cy,x=oe(c,!0);return p===+p&&h===+h&&a===+a?T.createElement("path",V1({},x,{className:se("recharts-symbols",d),transform:"translate(".concat(p,", ").concat(h,")"),d:f()})):null};hp.registerSymbol=xj;function Hi(e){"@babel/helpers - typeof";return Hi=typeof Symbol=="function"&&typeof Symbol.iterator=="symbol"?function(t){return typeof t}:function(t){return t&&typeof Symbol=="function"&&t.constructor===Symbol&&t!==Symbol.prototype?"symbol":typeof t},Hi(e)}function X1(){return X1=Object.assign?Object.assign.bind():function(e){for(var t=1;t<arguments.length;t++){var n=arguments[t];for(var r in n)Object.prototype.hasOwnProperty.call(n,r)&&(e[r]=n[r])}return e},X1.apply(this,arguments)}function R7(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter(function(i){return Object.getOwnPropertyDescriptor(e,i).enumerable})),n.push.apply(n,r)}return n}function bj(e){for(var t=1;t<arguments.length;t++){var n=arguments[t]!=null?arguments[t]:{};t%2?R7(Object(n),!0).forEach(function(r){Ol(e,r,n[r])}):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):R7(Object(n)).forEach(function(r){Object.defineProperty(e,r,Object.getOwnPropertyDescriptor(n,r))})}return e}function wj(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}function kj(e,t){for(var n=0;n<t.length;n++){var r=t[n];r.enumerable=r.enumerable||!1,r.configurable=!0,"value"in r&&(r.writable=!0),Object.defineProperty(e,av(r.key),r)}}function _j(e,t,n){return t&&kj(e.prototype,t),Object.defineProperty(e,"prototype",{writable:!1}),e}function Sj(e,t,n){return t=Hs(t),jj(e,iv()?Reflect.construct(t,n||[],Hs(e).constructor):t.apply(e,n))}function jj(e,t){if(t&&(Hi(t)==="object"||typeof t=="function"))return t;if(t!==void 0)throw new TypeError("Derived constructors may only return object or undefined");return Oj(e)}function Oj(e){if(e===void 0)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return e}function iv(){try{var e=!Boolean.prototype.valueOf.call(Reflect.construct(Boolean,[],function(){}))}catch{}return(iv=function(){return!!e})()}function Hs(e){return Hs=Object.setPrototypeOf?Object.getPrototypeOf.bind():function(n){return n.__proto__||Object.getPrototypeOf(n)},Hs(e)}function Pj(e,t){if(typeof t!="function"&&t!==null)throw new TypeError("Super expression must either be null or a function");e.prototype=Object.create(t&&t.prototype,{constructor:{value:e,writable:!0,configurable:!0}}),Object.defineProperty(e,"prototype",{writable:!1}),t&&q1(e,t)}function q1(e,t){return q1=Object.setPrototypeOf?Object.setPrototypeOf.bind():function(r,i){return r.__proto__=i,r},q1(e,t)}function Ol(e,t,n){return t=av(t),t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function av(e){var t=Aj(e,"string");return Hi(t)=="symbol"?t:t+""}function Aj(e,t){if(Hi(e)!="object"||!e)return e;var n=e[Symbol.toPrimitive];if(n!==void 0){var r=n.call(e,t);if(Hi(r)!="object")return r;throw new TypeError("@@toPrimitive must return a primitive value.")}return String(e)}var $t=32,mp=function(e){function t(){return wj(this,t),Sj(this,t,arguments)}return Pj(t,e),_j(t,[{key:"renderIcon",value:function(r){var i=this.props.inactiveColor,a=$t/2,l=$t/6,o=$t/3,s=r.inactive?i:r.color;if(r.type==="plainline")return T.createElement("line",{strokeWidth:4,fill:"none",stroke:s,strokeDasharray:r.payload.strokeDasharray,x1:0,y1:a,x2:$t,y2:a,className:"recharts-legend-icon"});if(r.type==="line")return T.createElement("path",{strokeWidth:4,fill:"none",stroke:s,d:"M0,".concat(a,"h").concat(o,`
            A`).concat(l,",").concat(l,",0,1,1,").concat(2*o,",").concat(a,`
            H`).concat($t,"M").concat(2*o,",").concat(a,`
            A`).concat(l,",").concat(l,",0,1,1,").concat(o,",").concat(a),className:"recharts-legend-icon"});if(r.type==="rect")return T.createElement("path",{stroke:"none",fill:s,d:"M0,".concat($t/8,"h").concat($t,"v").concat($t*3/4,"h").concat(-$t,"z"),className:"recharts-legend-icon"});if(T.isValidElement(r.legendIcon)){var c=bj({},r);return delete c.legendIcon,T.cloneElement(r.legendIcon,c)}return T.createElement(hp,{fill:s,cx:a,cy:a,size:$t,sizeType:"diameter",type:r.type})}},{key:"renderItems",value:function(){var r=this,i=this.props,a=i.payload,l=i.iconSize,o=i.layout,s=i.formatter,c=i.inactiveColor,f={x:0,y:0,width:$t,height:$t},d={display:o==="horizontal"?"inline-block":"block",marginRight:10},p={display:"inline-block",verticalAlign:"middle",marginRight:4};return a.map(function(h,x){var v=h.formatter||s,w=se(Ol(Ol({"recharts-legend-item":!0},"legend-item-".concat(x),!0),"inactive",h.inactive));if(h.type==="none")return null;var y=te(h.value)?null:h.value;Cn(!te(h.value),`The name property is also required when using a function for the dataKey of a chart's cartesian components. Ex: <Bar name="Name of my Data"/>`);var m=h.inactive?c:h.color;return T.createElement("li",X1({className:w,style:d,key:"legend-item-".concat(x)},Ls(r.props,h,x)),T.createElement(L1,{width:l,height:l,viewBox:f,style:p},r.renderIcon(h)),T.createElement("span",{className:"recharts-legend-item-text",style:{color:m}},v?v(y,h,x):y))})}},{key:"render",value:function(){var r=this.props,i=r.payload,a=r.layout,l=r.align;if(!i||!i.length)return null;var o={padding:0,margin:0,textAlign:a==="horizontal"?l:"left"};return T.createElement("ul",{className:"recharts-default-legend",style:o},this.renderItems())}}])}($.PureComponent);Ol(mp,"displayName","Legend");Ol(mp,"defaultProps",{iconSize:14,layout:"horizontal",align:"center",verticalAlign:"middle",inactiveColor:"#ccc"});var Mj=Qc;function Nj(){this.__data__=new Mj,this.size=0}var Ej=Nj;function Cj(e){var t=this.__data__,n=t.delete(e);return this.size=t.size,n}var $j=Cj;function Tj(e){return this.__data__.get(e)}var zj=Tj;function Ij(e){return this.__data__.has(e)}var Dj=Ij,Lj=Qc,Fj=np,Rj=rp,Bj=200;function Wj(e,t){var n=this.__data__;if(n instanceof Lj){var r=n.__data__;if(!Fj||r.length<Bj-1)return r.push([e,t]),this.size=++n.size,this;n=this.__data__=new Rj(r)}return n.set(e,t),this.size=n.size,this}var Uj=Wj,Hj=Qc,Gj=Ej,Vj=$j,Xj=zj,qj=Dj,Kj=Uj;function ga(e){var t=this.__data__=new Hj(e);this.size=t.size}ga.prototype.clear=Gj;ga.prototype.delete=Vj;ga.prototype.get=Xj;ga.prototype.has=qj;ga.prototype.set=Kj;var lv=ga,Yj="__lodash_hash_undefined__";function Zj(e){return this.__data__.set(e,Yj),this}var Qj=Zj;function Jj(e){return this.__data__.has(e)}var eO=Jj,tO=rp,nO=Qj,rO=eO;function Gs(e){var t=-1,n=e==null?0:e.length;for(this.__data__=new tO;++t<n;)this.add(e[t])}Gs.prototype.add=Gs.prototype.push=nO;Gs.prototype.has=rO;var ov=Gs;function iO(e,t){for(var n=-1,r=e==null?0:e.length;++n<r;)if(t(e[n],n,e))return!0;return!1}var sv=iO;function aO(e,t){return e.has(t)}var cv=aO,lO=ov,oO=sv,sO=cv,cO=1,uO=2;function dO(e,t,n,r,i,a){var l=n&cO,o=e.length,s=t.length;if(o!=s&&!(l&&s>o))return!1;var c=a.get(e),f=a.get(t);if(c&&f)return c==t&&f==e;var d=-1,p=!0,h=n&uO?new lO:void 0;for(a.set(e,t),a.set(t,e);++d<o;){var x=e[d],v=t[d];if(r)var w=l?r(v,x,d,t,e,a):r(x,v,d,e,t,a);if(w!==void 0){if(w)continue;p=!1;break}if(h){if(!oO(t,function(y,m){if(!sO(h,m)&&(x===y||i(x,y,n,r,a)))return h.push(m)})){p=!1;break}}else if(!(x===v||i(x,v,n,r,a))){p=!1;break}}return a.delete(e),a.delete(t),p}var uv=dO,fO=bn,pO=fO.Uint8Array,hO=pO;function mO(e){var t=-1,n=Array(e.size);return e.forEach(function(r,i){n[++t]=[i,r]}),n}var yO=mO;function vO(e){var t=-1,n=Array(e.size);return e.forEach(function(r){n[++t]=r}),n}var yp=vO,B7=ho,W7=hO,gO=tp,xO=uv,bO=yO,wO=yp,kO=1,_O=2,SO="[object Boolean]",jO="[object Date]",OO="[object Error]",PO="[object Map]",AO="[object Number]",MO="[object RegExp]",NO="[object Set]",EO="[object String]",CO="[object Symbol]",$O="[object ArrayBuffer]",TO="[object DataView]",U7=B7?B7.prototype:void 0,gd=U7?U7.valueOf:void 0;function zO(e,t,n,r,i,a,l){switch(n){case TO:if(e.byteLength!=t.byteLength||e.byteOffset!=t.byteOffset)return!1;e=e.buffer,t=t.buffer;case $O:return!(e.byteLength!=t.byteLength||!a(new W7(e),new W7(t)));case SO:case jO:case AO:return gO(+e,+t);case OO:return e.name==t.name&&e.message==t.message;case MO:case EO:return e==t+"";case PO:var o=bO;case NO:var s=r&kO;if(o||(o=wO),e.size!=t.size&&!s)return!1;var c=l.get(e);if(c)return c==t;r|=_O,l.set(e,t);var f=xO(o(e),o(t),r,i,a,l);return l.delete(e),f;case CO:if(gd)return gd.call(e)==gd.call(t)}return!1}var IO=zO;function DO(e,t){for(var n=-1,r=t.length,i=e.length;++n<r;)e[i+n]=t[n];return e}var dv=DO,LO=dv,FO=wt;function RO(e,t,n){var r=t(e);return FO(e)?r:LO(r,n(e))}var BO=RO;function WO(e,t){for(var n=-1,r=e==null?0:e.length,i=0,a=[];++n<r;){var l=e[n];t(l,n,e)&&(a[i++]=l)}return a}var UO=WO;function HO(){return[]}var GO=HO,VO=UO,XO=GO,qO=Object.prototype,KO=qO.propertyIsEnumerable,H7=Object.getOwnPropertySymbols,YO=H7?function(e){return e==null?[]:(e=Object(e),VO(H7(e),function(t){return KO.call(e,t)}))}:XO,ZO=YO;function QO(e,t){for(var n=-1,r=Array(e);++n<e;)r[n]=t(n);return r}var JO=QO,eP=Wn,tP=Un,nP="[object Arguments]";function rP(e){return tP(e)&&eP(e)==nP}var iP=rP,G7=iP,aP=Un,fv=Object.prototype,lP=fv.hasOwnProperty,oP=fv.propertyIsEnumerable,sP=G7(function(){return arguments}())?G7:function(e){return aP(e)&&lP.call(e,"callee")&&!oP.call(e,"callee")},vp=sP,Vs={exports:{}};function cP(){return!1}var uP=cP;Vs.exports;(function(e,t){var n=bn,r=uP,i=t&&!t.nodeType&&t,a=i&&!0&&e&&!e.nodeType&&e,l=a&&a.exports===i,o=l?n.Buffer:void 0,s=o?o.isBuffer:void 0,c=s||r;e.exports=c})(Vs,Vs.exports);var pv=Vs.exports,dP=9007199254740991,fP=/^(?:0|[1-9]\d*)$/;function pP(e,t){var n=typeof e;return t=t??dP,!!t&&(n=="number"||n!="symbol"&&fP.test(e))&&e>-1&&e%1==0&&e<t}var gp=pP,hP=9007199254740991;function mP(e){return typeof e=="number"&&e>-1&&e%1==0&&e<=hP}var xp=mP,yP=Wn,vP=xp,gP=Un,xP="[object Arguments]",bP="[object Array]",wP="[object Boolean]",kP="[object Date]",_P="[object Error]",SP="[object Function]",jP="[object Map]",OP="[object Number]",PP="[object Object]",AP="[object RegExp]",MP="[object Set]",NP="[object String]",EP="[object WeakMap]",CP="[object ArrayBuffer]",$P="[object DataView]",TP="[object Float32Array]",zP="[object Float64Array]",IP="[object Int8Array]",DP="[object Int16Array]",LP="[object Int32Array]",FP="[object Uint8Array]",RP="[object Uint8ClampedArray]",BP="[object Uint16Array]",WP="[object Uint32Array]",xe={};xe[TP]=xe[zP]=xe[IP]=xe[DP]=xe[LP]=xe[FP]=xe[RP]=xe[BP]=xe[WP]=!0;xe[xP]=xe[bP]=xe[CP]=xe[wP]=xe[$P]=xe[kP]=xe[_P]=xe[SP]=xe[jP]=xe[OP]=xe[PP]=xe[AP]=xe[MP]=xe[NP]=xe[EP]=!1;function UP(e){return gP(e)&&vP(e.length)&&!!xe[yP(e)]}var HP=UP;function GP(e){return function(t){return e(t)}}var hv=GP,Xs={exports:{}};Xs.exports;(function(e,t){var n=k6,r=t&&!t.nodeType&&t,i=r&&!0&&e&&!e.nodeType&&e,a=i&&i.exports===r,l=a&&n.process,o=function(){try{var s=i&&i.require&&i.require("util").types;return s||l&&l.binding&&l.binding("util")}catch{}}();e.exports=o})(Xs,Xs.exports);var VP=Xs.exports,XP=HP,qP=hv,V7=VP,X7=V7&&V7.isTypedArray,KP=X7?qP(X7):XP,mv=KP,YP=JO,ZP=vp,QP=wt,JP=pv,eA=gp,tA=mv,nA=Object.prototype,rA=nA.hasOwnProperty;function iA(e,t){var n=QP(e),r=!n&&ZP(e),i=!n&&!r&&JP(e),a=!n&&!r&&!i&&tA(e),l=n||r||i||a,o=l?YP(e.length,String):[],s=o.length;for(var c in e)(t||rA.call(e,c))&&!(l&&(c=="length"||i&&(c=="offset"||c=="parent")||a&&(c=="buffer"||c=="byteLength"||c=="byteOffset")||eA(c,s)))&&o.push(c);return o}var aA=iA,lA=Object.prototype;function oA(e){var t=e&&e.constructor,n=typeof t=="function"&&t.prototype||lA;return e===n}var sA=oA;function cA(e,t){return function(n){return e(t(n))}}var yv=cA,uA=yv,dA=uA(Object.keys,Object),fA=dA,pA=sA,hA=fA,mA=Object.prototype,yA=mA.hasOwnProperty;function vA(e){if(!pA(e))return hA(e);var t=[];for(var n in Object(e))yA.call(e,n)&&n!="constructor"&&t.push(n);return t}var gA=vA,xA=ep,bA=xp;function wA(e){return e!=null&&bA(e.length)&&!xA(e)}var yo=wA,kA=aA,_A=gA,SA=yo;function jA(e){return SA(e)?kA(e):_A(e)}var yu=jA,OA=BO,PA=ZO,AA=yu;function MA(e){return OA(e,AA,PA)}var NA=MA,q7=NA,EA=1,CA=Object.prototype,$A=CA.hasOwnProperty;function TA(e,t,n,r,i,a){var l=n&EA,o=q7(e),s=o.length,c=q7(t),f=c.length;if(s!=f&&!l)return!1;for(var d=s;d--;){var p=o[d];if(!(l?p in t:$A.call(t,p)))return!1}var h=a.get(e),x=a.get(t);if(h&&x)return h==t&&x==e;var v=!0;a.set(e,t),a.set(t,e);for(var w=l;++d<s;){p=o[d];var y=e[p],m=t[p];if(r)var g=l?r(m,y,p,t,e,a):r(y,m,p,e,t,a);if(!(g===void 0?y===m||i(y,m,n,r,a):g)){v=!1;break}w||(w=p=="constructor")}if(v&&!w){var _=e.constructor,b=t.constructor;_!=b&&"constructor"in e&&"constructor"in t&&!(typeof _=="function"&&_ instanceof _&&typeof b=="function"&&b instanceof b)&&(v=!1)}return a.delete(e),a.delete(t),v}var zA=TA,IA=ri,DA=bn,LA=IA(DA,"DataView"),FA=LA,RA=ri,BA=bn,WA=RA(BA,"Promise"),UA=WA,HA=ri,GA=bn,VA=HA(GA,"Set"),vv=VA,XA=ri,qA=bn,KA=XA(qA,"WeakMap"),YA=KA,K1=FA,Y1=np,Z1=UA,Q1=vv,J1=YA,gv=Wn,xa=S6,K7="[object Map]",ZA="[object Object]",Y7="[object Promise]",Z7="[object Set]",Q7="[object WeakMap]",J7="[object DataView]",QA=xa(K1),JA=xa(Y1),eM=xa(Z1),tM=xa(Q1),nM=xa(J1),Er=gv;(K1&&Er(new K1(new ArrayBuffer(1)))!=J7||Y1&&Er(new Y1)!=K7||Z1&&Er(Z1.resolve())!=Y7||Q1&&Er(new Q1)!=Z7||J1&&Er(new J1)!=Q7)&&(Er=function(e){var t=gv(e),n=t==ZA?e.constructor:void 0,r=n?xa(n):"";if(r)switch(r){case QA:return J7;case JA:return K7;case eM:return Y7;case tM:return Z7;case nM:return Q7}return t});var rM=Er,xd=lv,iM=uv,aM=IO,lM=zA,em=rM,tm=wt,nm=pv,oM=mv,sM=1,rm="[object Arguments]",im="[object Array]",Bo="[object Object]",cM=Object.prototype,am=cM.hasOwnProperty;function uM(e,t,n,r,i,a){var l=tm(e),o=tm(t),s=l?im:em(e),c=o?im:em(t);s=s==rm?Bo:s,c=c==rm?Bo:c;var f=s==Bo,d=c==Bo,p=s==c;if(p&&nm(e)){if(!nm(t))return!1;l=!0,f=!1}if(p&&!f)return a||(a=new xd),l||oM(e)?iM(e,t,n,r,i,a):aM(e,t,s,n,r,i,a);if(!(n&sM)){var h=f&&am.call(e,"__wrapped__"),x=d&&am.call(t,"__wrapped__");if(h||x){var v=h?e.value():e,w=x?t.value():t;return a||(a=new xd),i(v,w,n,r,a)}}return p?(a||(a=new xd),lM(e,t,n,r,i,a)):!1}var dM=uM,fM=dM,lm=Un;function xv(e,t,n,r,i){return e===t?!0:e==null||t==null||!lm(e)&&!lm(t)?e!==e&&t!==t:fM(e,t,n,r,xv,i)}var bp=xv,pM=lv,hM=bp,mM=1,yM=2;function vM(e,t,n,r){var i=n.length,a=i,l=!r;if(e==null)return!a;for(e=Object(e);i--;){var o=n[i];if(l&&o[2]?o[1]!==e[o[0]]:!(o[0]in e))return!1}for(;++i<a;){o=n[i];var s=o[0],c=e[s],f=o[1];if(l&&o[2]){if(c===void 0&&!(s in e))return!1}else{var d=new pM;if(r)var p=r(c,f,s,e,t,d);if(!(p===void 0?hM(f,c,mM|yM,r,d):p))return!1}}return!0}var gM=vM,xM=br;function bM(e){return e===e&&!xM(e)}var bv=bM,wM=bv,kM=yu;function _M(e){for(var t=kM(e),n=t.length;n--;){var r=t[n],i=e[r];t[n]=[r,i,wM(i)]}return t}var SM=_M;function jM(e,t){return function(n){return n==null?!1:n[e]===t&&(t!==void 0||e in Object(n))}}var wv=jM,OM=gM,PM=SM,AM=wv;function MM(e){var t=PM(e);return t.length==1&&t[0][2]?AM(t[0][0],t[0][1]):function(n){return n===e||OM(n,e,t)}}var NM=MM;function EM(e,t){return e!=null&&t in Object(e)}var CM=EM,$M=M6,TM=vp,zM=wt,IM=gp,DM=xp,LM=eu;function FM(e,t,n){t=$M(t,e);for(var r=-1,i=t.length,a=!1;++r<i;){var l=LM(t[r]);if(!(a=e!=null&&n(e,l)))break;e=e[l]}return a||++r!=i?a:(i=e==null?0:e.length,!!i&&DM(i)&&IM(l,i)&&(zM(e)||TM(e)))}var RM=FM,BM=CM,WM=RM;function UM(e,t){return e!=null&&WM(e,t,BM)}var HM=UM,GM=bp,VM=N6,XM=HM,qM=J0,KM=bv,YM=wv,ZM=eu,QM=1,JM=2;function eN(e,t){return qM(e)&&KM(t)?YM(ZM(e),t):function(n){var r=VM(n,e);return r===void 0&&r===t?XM(n,e):GM(t,r,QM|JM)}}var tN=eN;function nN(e){return e}var ba=nN;function rN(e){return function(t){return t==null?void 0:t[e]}}var iN=rN,aN=lp;function lN(e){return function(t){return aN(t,e)}}var oN=lN,sN=iN,cN=oN,uN=J0,dN=eu;function fN(e){return uN(e)?sN(dN(e)):cN(e)}var pN=fN,hN=NM,mN=tN,yN=ba,vN=wt,gN=pN;function xN(e){return typeof e=="function"?e:e==null?yN:typeof e=="object"?vN(e)?mN(e[0],e[1]):hN(e):gN(e)}var wr=xN;function bN(e,t,n,r){for(var i=e.length,a=n+(r?1:-1);r?a--:++a<i;)if(t(e[a],a,e))return a;return-1}var kv=bN;function wN(e){return e!==e}var kN=wN;function _N(e,t,n){for(var r=n-1,i=e.length;++r<i;)if(e[r]===t)return r;return-1}var SN=_N,jN=kv,ON=kN,PN=SN;function AN(e,t,n){return t===t?PN(e,t,n):jN(e,ON,n)}var MN=AN,NN=MN;function EN(e,t){var n=e==null?0:e.length;return!!n&&NN(e,t,0)>-1}var CN=EN;function $N(e,t,n){for(var r=-1,i=e==null?0:e.length;++r<i;)if(n(t,e[r]))return!0;return!1}var TN=$N;function zN(){}var IN=zN,bd=vv,DN=IN,LN=yp,FN=1/0,RN=bd&&1/LN(new bd([,-0]))[1]==FN?function(e){return new bd(e)}:DN,BN=RN,WN=ov,UN=CN,HN=TN,GN=cv,VN=BN,XN=yp,qN=200;function KN(e,t,n){var r=-1,i=UN,a=e.length,l=!0,o=[],s=o;if(n)l=!1,i=HN;else if(a>=qN){var c=t?null:VN(e);if(c)return XN(c);l=!1,i=GN,s=new WN}else s=t?[]:o;e:for(;++r<a;){var f=e[r],d=t?t(f):f;if(f=n||f!==0?f:0,l&&d===d){for(var p=s.length;p--;)if(s[p]===d)continue e;t&&s.push(d),o.push(f)}else i(s,d,n)||(s!==o&&s.push(d),o.push(f))}return o}var YN=KN,ZN=wr,QN=YN;function JN(e,t){return e&&e.length?QN(e,ZN(t)):[]}var eE=JN;const om=me(eE);function _v(e,t,n){return t===!0?om(e,n):te(t)?om(e,t):e}function Gi(e){"@babel/helpers - typeof";return Gi=typeof Symbol=="function"&&typeof Symbol.iterator=="symbol"?function(t){return typeof t}:function(t){return t&&typeof Symbol=="function"&&t.constructor===Symbol&&t!==Symbol.prototype?"symbol":typeof t},Gi(e)}var tE=["ref"];function sm(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter(function(i){return Object.getOwnPropertyDescriptor(e,i).enumerable})),n.push.apply(n,r)}return n}function kn(e){for(var t=1;t<arguments.length;t++){var n=arguments[t]!=null?arguments[t]:{};t%2?sm(Object(n),!0).forEach(function(r){vu(e,r,n[r])}):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):sm(Object(n)).forEach(function(r){Object.defineProperty(e,r,Object.getOwnPropertyDescriptor(n,r))})}return e}function nE(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}function cm(e,t){for(var n=0;n<t.length;n++){var r=t[n];r.enumerable=r.enumerable||!1,r.configurable=!0,"value"in r&&(r.writable=!0),Object.defineProperty(e,jv(r.key),r)}}function rE(e,t,n){return t&&cm(e.prototype,t),n&&cm(e,n),Object.defineProperty(e,"prototype",{writable:!1}),e}function iE(e,t,n){return t=qs(t),aE(e,Sv()?Reflect.construct(t,n||[],qs(e).constructor):t.apply(e,n))}function aE(e,t){if(t&&(Gi(t)==="object"||typeof t=="function"))return t;if(t!==void 0)throw new TypeError("Derived constructors may only return object or undefined");return lE(e)}function lE(e){if(e===void 0)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return e}function Sv(){try{var e=!Boolean.prototype.valueOf.call(Reflect.construct(Boolean,[],function(){}))}catch{}return(Sv=function(){return!!e})()}function qs(e){return qs=Object.setPrototypeOf?Object.getPrototypeOf.bind():function(n){return n.__proto__||Object.getPrototypeOf(n)},qs(e)}function oE(e,t){if(typeof t!="function"&&t!==null)throw new TypeError("Super expression must either be null or a function");e.prototype=Object.create(t&&t.prototype,{constructor:{value:e,writable:!0,configurable:!0}}),Object.defineProperty(e,"prototype",{writable:!1}),t&&ef(e,t)}function ef(e,t){return ef=Object.setPrototypeOf?Object.setPrototypeOf.bind():function(r,i){return r.__proto__=i,r},ef(e,t)}function vu(e,t,n){return t=jv(t),t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function jv(e){var t=sE(e,"string");return Gi(t)=="symbol"?t:t+""}function sE(e,t){if(Gi(e)!="object"||!e)return e;var n=e[Symbol.toPrimitive];if(n!==void 0){var r=n.call(e,t);if(Gi(r)!="object")return r;throw new TypeError("@@toPrimitive must return a primitive value.")}return String(e)}function cE(e,t){if(e==null)return{};var n=uE(e,t),r,i;if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);for(i=0;i<a.length;i++)r=a[i],!(t.indexOf(r)>=0)&&Object.prototype.propertyIsEnumerable.call(e,r)&&(n[r]=e[r])}return n}function uE(e,t){if(e==null)return{};var n={};for(var r in e)if(Object.prototype.hasOwnProperty.call(e,r)){if(t.indexOf(r)>=0)continue;n[r]=e[r]}return n}function dE(e){return e.value}function fE(e,t){if(T.isValidElement(e))return T.cloneElement(e,t);if(typeof e=="function")return T.createElement(e,t);t.ref;var n=cE(t,tE);return T.createElement(mp,n)}var um=1,fr=function(e){function t(){var n;nE(this,t);for(var r=arguments.length,i=new Array(r),a=0;a<r;a++)i[a]=arguments[a];return n=iE(this,t,[].concat(i)),vu(n,"lastBoundingBox",{width:-1,height:-1}),n}return oE(t,e),rE(t,[{key:"componentDidMount",value:function(){this.updateBBox()}},{key:"componentDidUpdate",value:function(){this.updateBBox()}},{key:"getBBox",value:function(){if(this.wrapperNode&&this.wrapperNode.getBoundingClientRect){var r=this.wrapperNode.getBoundingClientRect();return r.height=this.wrapperNode.offsetHeight,r.width=this.wrapperNode.offsetWidth,r}return null}},{key:"updateBBox",value:function(){var r=this.props.onBBoxUpdate,i=this.getBBox();i?(Math.abs(i.width-this.lastBoundingBox.width)>um||Math.abs(i.height-this.lastBoundingBox.height)>um)&&(this.lastBoundingBox.width=i.width,this.lastBoundingBox.height=i.height,r&&r(i)):(this.lastBoundingBox.width!==-1||this.lastBoundingBox.height!==-1)&&(this.lastBoundingBox.width=-1,this.lastBoundingBox.height=-1,r&&r(null))}},{key:"getBBoxSnapshot",value:function(){return this.lastBoundingBox.width>=0&&this.lastBoundingBox.height>=0?kn({},this.lastBoundingBox):{width:0,height:0}}},{key:"getDefaultPosition",value:function(r){var i=this.props,a=i.layout,l=i.align,o=i.verticalAlign,s=i.margin,c=i.chartWidth,f=i.chartHeight,d,p;if(!r||(r.left===void 0||r.left===null)&&(r.right===void 0||r.right===null))if(l==="center"&&a==="vertical"){var h=this.getBBoxSnapshot();d={left:((c||0)-h.width)/2}}else d=l==="right"?{right:s&&s.right||0}:{left:s&&s.left||0};if(!r||(r.top===void 0||r.top===null)&&(r.bottom===void 0||r.bottom===null))if(o==="middle"){var x=this.getBBoxSnapshot();p={top:((f||0)-x.height)/2}}else p=o==="bottom"?{bottom:s&&s.bottom||0}:{top:s&&s.top||0};return kn(kn({},d),p)}},{key:"render",value:function(){var r=this,i=this.props,a=i.content,l=i.width,o=i.height,s=i.wrapperStyle,c=i.payloadUniqBy,f=i.payload,d=kn(kn({position:"absolute",width:l||"auto",height:o||"auto"},this.getDefaultPosition(s)),s);return T.createElement("div",{className:"recharts-legend-wrapper",style:d,ref:function(h){r.wrapperNode=h}},fE(a,kn(kn({},this.props),{},{payload:_v(f,c,dE)})))}}],[{key:"getWithHeight",value:function(r,i){var a=kn(kn({},this.defaultProps),r.props),l=a.layout;return l==="vertical"&&G(r.props.height)?{height:r.props.height}:l==="horizontal"?{width:r.props.width||i}:null}}])}($.PureComponent);vu(fr,"displayName","Legend");vu(fr,"defaultProps",{iconSize:14,layout:"horizontal",align:"center",verticalAlign:"bottom"});var dm=ho,pE=vp,hE=wt,fm=dm?dm.isConcatSpreadable:void 0;function mE(e){return hE(e)||pE(e)||!!(fm&&e&&e[fm])}var yE=mE,vE=dv,gE=yE;function Ov(e,t,n,r,i){var a=-1,l=e.length;for(n||(n=gE),i||(i=[]);++a<l;){var o=e[a];t>0&&n(o)?t>1?Ov(o,t-1,n,r,i):vE(i,o):r||(i[i.length]=o)}return i}var Pv=Ov;function xE(e){return function(t,n,r){for(var i=-1,a=Object(t),l=r(t),o=l.length;o--;){var s=l[e?o:++i];if(n(a[s],s,a)===!1)break}return t}}var bE=xE,wE=bE,kE=wE(),_E=kE,SE=_E,jE=yu;function OE(e,t){return e&&SE(e,t,jE)}var Av=OE,PE=yo;function AE(e,t){return function(n,r){if(n==null)return n;if(!PE(n))return e(n,r);for(var i=n.length,a=t?i:-1,l=Object(n);(t?a--:++a<i)&&r(l[a],a,l)!==!1;);return n}}var ME=AE,NE=Av,EE=ME,CE=EE(NE),wp=CE,$E=wp,TE=yo;function zE(e,t){var n=-1,r=TE(e)?Array(e.length):[];return $E(e,function(i,a,l){r[++n]=t(i,a,l)}),r}var Mv=zE;function IE(e,t){var n=e.length;for(e.sort(t);n--;)e[n]=e[n].value;return e}var DE=IE,pm=pa;function LE(e,t){if(e!==t){var n=e!==void 0,r=e===null,i=e===e,a=pm(e),l=t!==void 0,o=t===null,s=t===t,c=pm(t);if(!o&&!c&&!a&&e>t||a&&l&&s&&!o&&!c||r&&l&&s||!n&&s||!i)return 1;if(!r&&!a&&!c&&e<t||c&&n&&i&&!r&&!a||o&&n&&i||!l&&i||!s)return-1}return 0}var FE=LE,RE=FE;function BE(e,t,n){for(var r=-1,i=e.criteria,a=t.criteria,l=i.length,o=n.length;++r<l;){var s=RE(i[r],a[r]);if(s){if(r>=o)return s;var c=n[r];return s*(c=="desc"?-1:1)}}return e.index-t.index}var WE=BE,wd=ap,UE=lp,HE=wr,GE=Mv,VE=DE,XE=hv,qE=WE,KE=ba,YE=wt;function ZE(e,t,n){t.length?t=wd(t,function(a){return YE(a)?function(l){return UE(l,a.length===1?a[0]:a)}:a}):t=[KE];var r=-1;t=wd(t,XE(HE));var i=GE(e,function(a,l,o){var s=wd(t,function(c){return c(a)});return{criteria:s,index:++r,value:a}});return VE(i,function(a,l){return qE(a,l,n)})}var QE=ZE;function JE(e,t,n){switch(n.length){case 0:return e.call(t);case 1:return e.call(t,n[0]);case 2:return e.call(t,n[0],n[1]);case 3:return e.call(t,n[0],n[1],n[2])}return e.apply(t,n)}var eC=JE,tC=eC,hm=Math.max;function nC(e,t,n){return t=hm(t===void 0?e.length-1:t,0),function(){for(var r=arguments,i=-1,a=hm(r.length-t,0),l=Array(a);++i<a;)l[i]=r[t+i];i=-1;for(var o=Array(t+1);++i<t;)o[i]=r[i];return o[t]=n(l),tC(e,this,o)}}var rC=nC;function iC(e){return function(){return e}}var aC=iC,lC=ri,oC=function(){try{var e=lC(Object,"defineProperty");return e({},"",{}),e}catch{}}(),Nv=oC,sC=aC,mm=Nv,cC=ba,uC=mm?function(e,t){return mm(e,"toString",{configurable:!0,enumerable:!1,value:sC(t),writable:!0})}:cC,dC=uC,fC=800,pC=16,hC=Date.now;function mC(e){var t=0,n=0;return function(){var r=hC(),i=pC-(r-n);if(n=r,i>0){if(++t>=fC)return arguments[0]}else t=0;return e.apply(void 0,arguments)}}var yC=mC,vC=dC,gC=yC,xC=gC(vC),bC=xC,wC=ba,kC=rC,_C=bC;function SC(e,t){return _C(kC(e,t,wC),e+"")}var jC=SC,OC=tp,PC=yo,AC=gp,MC=br;function NC(e,t,n){if(!MC(n))return!1;var r=typeof t;return(r=="number"?PC(n)&&AC(t,n.length):r=="string"&&t in n)?OC(n[t],e):!1}var gu=NC,EC=Pv,CC=QE,$C=jC,ym=gu,TC=$C(function(e,t){if(e==null)return[];var n=t.length;return n>1&&ym(e,t[0],t[1])?t=[]:n>2&&ym(t[0],t[1],t[2])&&(t=[t[0]]),CC(e,EC(t,1),[])}),zC=TC;const kp=me(zC);function Pl(e){"@babel/helpers - typeof";return Pl=typeof Symbol=="function"&&typeof Symbol.iterator=="symbol"?function(t){return typeof t}:function(t){return t&&typeof Symbol=="function"&&t.constructor===Symbol&&t!==Symbol.prototype?"symbol":typeof t},Pl(e)}function tf(){return tf=Object.assign?Object.assign.bind():function(e){for(var t=1;t<arguments.length;t++){var n=arguments[t];for(var r in n)Object.prototype.hasOwnProperty.call(n,r)&&(e[r]=n[r])}return e},tf.apply(this,arguments)}function IC(e,t){return RC(e)||FC(e,t)||LC(e,t)||DC()}function DC(){throw new TypeError(`Invalid attempt to destructure non-iterable instance.
In order to be iterable, non-array objects must have a [Symbol.iterator]() method.`)}function LC(e,t){if(e){if(typeof e=="string")return vm(e,t);var n=Object.prototype.toString.call(e).slice(8,-1);if(n==="Object"&&e.constructor&&(n=e.constructor.name),n==="Map"||n==="Set")return Array.from(e);if(n==="Arguments"||/^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n))return vm(e,t)}}function vm(e,t){(t==null||t>e.length)&&(t=e.length);for(var n=0,r=new Array(t);n<t;n++)r[n]=e[n];return r}function FC(e,t){var n=e==null?null:typeof Symbol<"u"&&e[Symbol.iterator]||e["@@iterator"];if(n!=null){var r,i,a,l,o=[],s=!0,c=!1;try{if(a=(n=n.call(e)).next,t!==0)for(;!(s=(r=a.call(n)).done)&&(o.push(r.value),o.length!==t);s=!0);}catch(f){c=!0,i=f}finally{try{if(!s&&n.return!=null&&(l=n.return(),Object(l)!==l))return}finally{if(c)throw i}}return o}}function RC(e){if(Array.isArray(e))return e}function gm(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter(function(i){return Object.getOwnPropertyDescriptor(e,i).enumerable})),n.push.apply(n,r)}return n}function kd(e){for(var t=1;t<arguments.length;t++){var n=arguments[t]!=null?arguments[t]:{};t%2?gm(Object(n),!0).forEach(function(r){BC(e,r,n[r])}):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):gm(Object(n)).forEach(function(r){Object.defineProperty(e,r,Object.getOwnPropertyDescriptor(n,r))})}return e}function BC(e,t,n){return t=WC(t),t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function WC(e){var t=UC(e,"string");return Pl(t)=="symbol"?t:t+""}function UC(e,t){if(Pl(e)!="object"||!e)return e;var n=e[Symbol.toPrimitive];if(n!==void 0){var r=n.call(e,t);if(Pl(r)!="object")return r;throw new TypeError("@@toPrimitive must return a primitive value.")}return(t==="string"?String:Number)(e)}function HC(e){return Array.isArray(e)&&We(e[0])&&We(e[1])?e.join(" ~ "):e}var GC=function(t){var n=t.separator,r=n===void 0?" : ":n,i=t.contentStyle,a=i===void 0?{}:i,l=t.itemStyle,o=l===void 0?{}:l,s=t.labelStyle,c=s===void 0?{}:s,f=t.payload,d=t.formatter,p=t.itemSorter,h=t.wrapperClassName,x=t.labelClassName,v=t.label,w=t.labelFormatter,y=t.accessibilityLayer,m=y===void 0?!1:y,g=function(){if(f&&f.length){var P={padding:0,margin:0},N=(p?kp(f,p):f).map(function(z,E){if(z.type==="none")return null;var L=kd({display:"block",paddingTop:4,paddingBottom:4,color:z.color||"#000"},o),F=z.formatter||d||HC,A=z.value,I=z.name,D=A,B=I;if(F&&D!=null&&B!=null){var W=F(A,I,z,E,f);if(Array.isArray(W)){var X=IC(W,2);D=X[0],B=X[1]}else D=W}return T.createElement("li",{className:"recharts-tooltip-item",key:"tooltip-item-".concat(E),style:L},We(B)?T.createElement("span",{className:"recharts-tooltip-item-name"},B):null,We(B)?T.createElement("span",{className:"recharts-tooltip-item-separator"},r):null,T.createElement("span",{className:"recharts-tooltip-item-value"},D),T.createElement("span",{className:"recharts-tooltip-item-unit"},z.unit||""))});return T.createElement("ul",{className:"recharts-tooltip-item-list",style:P},N)}return null},_=kd({margin:0,padding:10,backgroundColor:"#fff",border:"1px solid #ccc",whiteSpace:"nowrap"},a),b=kd({margin:0},c),k=!ce(v),S=k?v:"",j=se("recharts-default-tooltip",h),O=se("recharts-tooltip-label",x);k&&w&&f!==void 0&&f!==null&&(S=w(v,f));var C=m?{role:"status","aria-live":"assertive"}:{};return T.createElement("div",tf({className:j,style:_},C),T.createElement("p",{className:O,style:b},T.isValidElement(S)?S:"".concat(S)),g())};function Al(e){"@babel/helpers - typeof";return Al=typeof Symbol=="function"&&typeof Symbol.iterator=="symbol"?function(t){return typeof t}:function(t){return t&&typeof Symbol=="function"&&t.constructor===Symbol&&t!==Symbol.prototype?"symbol":typeof t},Al(e)}function Wo(e,t,n){return t=VC(t),t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function VC(e){var t=XC(e,"string");return Al(t)=="symbol"?t:t+""}function XC(e,t){if(Al(e)!="object"||!e)return e;var n=e[Symbol.toPrimitive];if(n!==void 0){var r=n.call(e,t);if(Al(r)!="object")return r;throw new TypeError("@@toPrimitive must return a primitive value.")}return(t==="string"?String:Number)(e)}var za="recharts-tooltip-wrapper",qC={visibility:"hidden"};function KC(e){var t=e.coordinate,n=e.translateX,r=e.translateY;return se(za,Wo(Wo(Wo(Wo({},"".concat(za,"-right"),G(n)&&t&&G(t.x)&&n>=t.x),"".concat(za,"-left"),G(n)&&t&&G(t.x)&&n<t.x),"".concat(za,"-bottom"),G(r)&&t&&G(t.y)&&r>=t.y),"".concat(za,"-top"),G(r)&&t&&G(t.y)&&r<t.y))}function xm(e){var t=e.allowEscapeViewBox,n=e.coordinate,r=e.key,i=e.offsetTopLeft,a=e.position,l=e.reverseDirection,o=e.tooltipDimension,s=e.viewBox,c=e.viewBoxDimension;if(a&&G(a[r]))return a[r];var f=n[r]-o-i,d=n[r]+i;if(t[r])return l[r]?f:d;if(l[r]){var p=f,h=s[r];return p<h?Math.max(d,s[r]):Math.max(f,s[r])}var x=d+o,v=s[r]+c;return x>v?Math.max(f,s[r]):Math.max(d,s[r])}function YC(e){var t=e.translateX,n=e.translateY,r=e.useTranslate3d;return{transform:r?"translate3d(".concat(t,"px, ").concat(n,"px, 0)"):"translate(".concat(t,"px, ").concat(n,"px)")}}function ZC(e){var t=e.allowEscapeViewBox,n=e.coordinate,r=e.offsetTopLeft,i=e.position,a=e.reverseDirection,l=e.tooltipBox,o=e.useTranslate3d,s=e.viewBox,c,f,d;return l.height>0&&l.width>0&&n?(f=xm({allowEscapeViewBox:t,coordinate:n,key:"x",offsetTopLeft:r,position:i,reverseDirection:a,tooltipDimension:l.width,viewBox:s,viewBoxDimension:s.width}),d=xm({allowEscapeViewBox:t,coordinate:n,key:"y",offsetTopLeft:r,position:i,reverseDirection:a,tooltipDimension:l.height,viewBox:s,viewBoxDimension:s.height}),c=YC({translateX:f,translateY:d,useTranslate3d:o})):c=qC,{cssProperties:c,cssClasses:KC({translateX:f,translateY:d,coordinate:n})}}function Vi(e){"@babel/helpers - typeof";return Vi=typeof Symbol=="function"&&typeof Symbol.iterator=="symbol"?function(t){return typeof t}:function(t){return t&&typeof Symbol=="function"&&t.constructor===Symbol&&t!==Symbol.prototype?"symbol":typeof t},Vi(e)}function bm(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter(function(i){return Object.getOwnPropertyDescriptor(e,i).enumerable})),n.push.apply(n,r)}return n}function wm(e){for(var t=1;t<arguments.length;t++){var n=arguments[t]!=null?arguments[t]:{};t%2?bm(Object(n),!0).forEach(function(r){rf(e,r,n[r])}):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):bm(Object(n)).forEach(function(r){Object.defineProperty(e,r,Object.getOwnPropertyDescriptor(n,r))})}return e}function QC(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}function JC(e,t){for(var n=0;n<t.length;n++){var r=t[n];r.enumerable=r.enumerable||!1,r.configurable=!0,"value"in r&&(r.writable=!0),Object.defineProperty(e,Cv(r.key),r)}}function e$(e,t,n){return t&&JC(e.prototype,t),Object.defineProperty(e,"prototype",{writable:!1}),e}function t$(e,t,n){return t=Ks(t),n$(e,Ev()?Reflect.construct(t,n||[],Ks(e).constructor):t.apply(e,n))}function n$(e,t){if(t&&(Vi(t)==="object"||typeof t=="function"))return t;if(t!==void 0)throw new TypeError("Derived constructors may only return object or undefined");return r$(e)}function r$(e){if(e===void 0)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return e}function Ev(){try{var e=!Boolean.prototype.valueOf.call(Reflect.construct(Boolean,[],function(){}))}catch{}return(Ev=function(){return!!e})()}function Ks(e){return Ks=Object.setPrototypeOf?Object.getPrototypeOf.bind():function(n){return n.__proto__||Object.getPrototypeOf(n)},Ks(e)}function i$(e,t){if(typeof t!="function"&&t!==null)throw new TypeError("Super expression must either be null or a function");e.prototype=Object.create(t&&t.prototype,{constructor:{value:e,writable:!0,configurable:!0}}),Object.defineProperty(e,"prototype",{writable:!1}),t&&nf(e,t)}function nf(e,t){return nf=Object.setPrototypeOf?Object.setPrototypeOf.bind():function(r,i){return r.__proto__=i,r},nf(e,t)}function rf(e,t,n){return t=Cv(t),t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function Cv(e){var t=a$(e,"string");return Vi(t)=="symbol"?t:t+""}function a$(e,t){if(Vi(e)!="object"||!e)return e;var n=e[Symbol.toPrimitive];if(n!==void 0){var r=n.call(e,t);if(Vi(r)!="object")return r;throw new TypeError("@@toPrimitive must return a primitive value.")}return String(e)}var km=1,l$=function(e){function t(){var n;QC(this,t);for(var r=arguments.length,i=new Array(r),a=0;a<r;a++)i[a]=arguments[a];return n=t$(this,t,[].concat(i)),rf(n,"state",{dismissed:!1,dismissedAtCoordinate:{x:0,y:0},lastBoundingBox:{width:-1,height:-1}}),rf(n,"handleKeyDown",function(l){if(l.key==="Escape"){var o,s,c,f;n.setState({dismissed:!0,dismissedAtCoordinate:{x:(o=(s=n.props.coordinate)===null||s===void 0?void 0:s.x)!==null&&o!==void 0?o:0,y:(c=(f=n.props.coordinate)===null||f===void 0?void 0:f.y)!==null&&c!==void 0?c:0}})}}),n}return i$(t,e),e$(t,[{key:"updateBBox",value:function(){if(this.wrapperNode&&this.wrapperNode.getBoundingClientRect){var r=this.wrapperNode.getBoundingClientRect();(Math.abs(r.width-this.state.lastBoundingBox.width)>km||Math.abs(r.height-this.state.lastBoundingBox.height)>km)&&this.setState({lastBoundingBox:{width:r.width,height:r.height}})}else(this.state.lastBoundingBox.width!==-1||this.state.lastBoundingBox.height!==-1)&&this.setState({lastBoundingBox:{width:-1,height:-1}})}},{key:"componentDidMount",value:function(){document.addEventListener("keydown",this.handleKeyDown),this.updateBBox()}},{key:"componentWillUnmount",value:function(){document.removeEventListener("keydown",this.handleKeyDown)}},{key:"componentDidUpdate",value:function(){var r,i;this.props.active&&this.updateBBox(),this.state.dismissed&&(((r=this.props.coordinate)===null||r===void 0?void 0:r.x)!==this.state.dismissedAtCoordinate.x||((i=this.props.coordinate)===null||i===void 0?void 0:i.y)!==this.state.dismissedAtCoordinate.y)&&(this.state.dismissed=!1)}},{key:"render",value:function(){var r=this,i=this.props,a=i.active,l=i.allowEscapeViewBox,o=i.animationDuration,s=i.animationEasing,c=i.children,f=i.coordinate,d=i.hasPayload,p=i.isAnimationActive,h=i.offset,x=i.position,v=i.reverseDirection,w=i.useTranslate3d,y=i.viewBox,m=i.wrapperStyle,g=ZC({allowEscapeViewBox:l,coordinate:f,offsetTopLeft:h,position:x,reverseDirection:v,tooltipBox:this.state.lastBoundingBox,useTranslate3d:w,viewBox:y}),_=g.cssClasses,b=g.cssProperties,k=wm(wm({transition:p&&a?"transform ".concat(o,"ms ").concat(s):void 0},b),{},{pointerEvents:"none",visibility:!this.state.dismissed&&a&&d?"visible":"hidden",position:"absolute",top:0,left:0},m);return T.createElement("div",{tabIndex:-1,className:_,style:k,ref:function(j){r.wrapperNode=j}},c)}}])}($.PureComponent),o$=function(){return!(typeof window<"u"&&window.document&&window.document.createElement&&window.setTimeout)},vo={isSsr:o$()};function Xi(e){"@babel/helpers - typeof";return Xi=typeof Symbol=="function"&&typeof Symbol.iterator=="symbol"?function(t){return typeof t}:function(t){return t&&typeof Symbol=="function"&&t.constructor===Symbol&&t!==Symbol.prototype?"symbol":typeof t},Xi(e)}function _m(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter(function(i){return Object.getOwnPropertyDescriptor(e,i).enumerable})),n.push.apply(n,r)}return n}function Sm(e){for(var t=1;t<arguments.length;t++){var n=arguments[t]!=null?arguments[t]:{};t%2?_m(Object(n),!0).forEach(function(r){_p(e,r,n[r])}):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):_m(Object(n)).forEach(function(r){Object.defineProperty(e,r,Object.getOwnPropertyDescriptor(n,r))})}return e}function s$(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}function c$(e,t){for(var n=0;n<t.length;n++){var r=t[n];r.enumerable=r.enumerable||!1,r.configurable=!0,"value"in r&&(r.writable=!0),Object.defineProperty(e,Tv(r.key),r)}}function u$(e,t,n){return t&&c$(e.prototype,t),Object.defineProperty(e,"prototype",{writable:!1}),e}function d$(e,t,n){return t=Ys(t),f$(e,$v()?Reflect.construct(t,n||[],Ys(e).constructor):t.apply(e,n))}function f$(e,t){if(t&&(Xi(t)==="object"||typeof t=="function"))return t;if(t!==void 0)throw new TypeError("Derived constructors may only return object or undefined");return p$(e)}function p$(e){if(e===void 0)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return e}function $v(){try{var e=!Boolean.prototype.valueOf.call(Reflect.construct(Boolean,[],function(){}))}catch{}return($v=function(){return!!e})()}function Ys(e){return Ys=Object.setPrototypeOf?Object.getPrototypeOf.bind():function(n){return n.__proto__||Object.getPrototypeOf(n)},Ys(e)}function h$(e,t){if(typeof t!="function"&&t!==null)throw new TypeError("Super expression must either be null or a function");e.prototype=Object.create(t&&t.prototype,{constructor:{value:e,writable:!0,configurable:!0}}),Object.defineProperty(e,"prototype",{writable:!1}),t&&af(e,t)}function af(e,t){return af=Object.setPrototypeOf?Object.setPrototypeOf.bind():function(r,i){return r.__proto__=i,r},af(e,t)}function _p(e,t,n){return t=Tv(t),t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function Tv(e){var t=m$(e,"string");return Xi(t)=="symbol"?t:t+""}function m$(e,t){if(Xi(e)!="object"||!e)return e;var n=e[Symbol.toPrimitive];if(n!==void 0){var r=n.call(e,t);if(Xi(r)!="object")return r;throw new TypeError("@@toPrimitive must return a primitive value.")}return String(e)}function y$(e){return e.dataKey}function v$(e,t){return T.isValidElement(e)?T.cloneElement(e,t):typeof e=="function"?T.createElement(e,t):T.createElement(GC,t)}var Kt=function(e){function t(){return s$(this,t),d$(this,t,arguments)}return h$(t,e),u$(t,[{key:"render",value:function(){var r=this,i=this.props,a=i.active,l=i.allowEscapeViewBox,o=i.animationDuration,s=i.animationEasing,c=i.content,f=i.coordinate,d=i.filterNull,p=i.isAnimationActive,h=i.offset,x=i.payload,v=i.payloadUniqBy,w=i.position,y=i.reverseDirection,m=i.useTranslate3d,g=i.viewBox,_=i.wrapperStyle,b=x??[];d&&b.length&&(b=_v(x.filter(function(S){return S.value!=null&&(S.hide!==!0||r.props.includeHidden)}),v,y$));var k=b.length>0;return T.createElement(l$,{allowEscapeViewBox:l,animationDuration:o,animationEasing:s,isAnimationActive:p,active:a,coordinate:f,hasPayload:k,offset:h,position:w,reverseDirection:y,useTranslate3d:m,viewBox:g,wrapperStyle:_},v$(c,Sm(Sm({},this.props),{},{payload:b})))}}])}($.PureComponent);_p(Kt,"displayName","Tooltip");_p(Kt,"defaultProps",{accessibilityLayer:!1,allowEscapeViewBox:{x:!1,y:!1},animationDuration:400,animationEasing:"ease",contentStyle:{},coordinate:{x:0,y:0},cursor:!0,cursorStyle:{},filterNull:!0,isAnimationActive:!vo.isSsr,itemStyle:{},labelStyle:{},offset:10,reverseDirection:{x:!1,y:!1},separator:" : ",trigger:"hover",useTranslate3d:!1,viewBox:{x:0,y:0,height:0,width:0},wrapperStyle:{}});var g$=bn,x$=function(){return g$.Date.now()},b$=x$,w$=/\s/;function k$(e){for(var t=e.length;t--&&w$.test(e.charAt(t)););return t}var _$=k$,S$=_$,j$=/^\s+/;function O$(e){return e&&e.slice(0,S$(e)+1).replace(j$,"")}var P$=O$,A$=P$,jm=br,M$=pa,Om=NaN,N$=/^[-+]0x[0-9a-f]+$/i,E$=/^0b[01]+$/i,C$=/^0o[0-7]+$/i,$$=parseInt;function T$(e){if(typeof e=="number")return e;if(M$(e))return Om;if(jm(e)){var t=typeof e.valueOf=="function"?e.valueOf():e;e=jm(t)?t+"":t}if(typeof e!="string")return e===0?e:+e;e=A$(e);var n=E$.test(e);return n||C$.test(e)?$$(e.slice(2),n?2:8):N$.test(e)?Om:+e}var zv=T$,z$=br,_d=b$,Pm=zv,I$="Expected a function",D$=Math.max,L$=Math.min;function F$(e,t,n){var r,i,a,l,o,s,c=0,f=!1,d=!1,p=!0;if(typeof e!="function")throw new TypeError(I$);t=Pm(t)||0,z$(n)&&(f=!!n.leading,d="maxWait"in n,a=d?D$(Pm(n.maxWait)||0,t):a,p="trailing"in n?!!n.trailing:p);function h(k){var S=r,j=i;return r=i=void 0,c=k,l=e.apply(j,S),l}function x(k){return c=k,o=setTimeout(y,t),f?h(k):l}function v(k){var S=k-s,j=k-c,O=t-S;return d?L$(O,a-j):O}function w(k){var S=k-s,j=k-c;return s===void 0||S>=t||S<0||d&&j>=a}function y(){var k=_d();if(w(k))return m(k);o=setTimeout(y,v(k))}function m(k){return o=void 0,p&&r?h(k):(r=i=void 0,l)}function g(){o!==void 0&&clearTimeout(o),c=0,r=s=i=o=void 0}function _(){return o===void 0?l:m(_d())}function b(){var k=_d(),S=w(k);if(r=arguments,i=this,s=k,S){if(o===void 0)return x(s);if(d)return clearTimeout(o),o=setTimeout(y,t),h(s)}return o===void 0&&(o=setTimeout(y,t)),l}return b.cancel=g,b.flush=_,b}var R$=F$,B$=R$,W$=br,U$="Expected a function";function H$(e,t,n){var r=!0,i=!0;if(typeof e!="function")throw new TypeError(U$);return W$(n)&&(r="leading"in n?!!n.leading:r,i="trailing"in n?!!n.trailing:i),B$(e,t,{leading:r,maxWait:t,trailing:i})}var G$=H$;const Iv=me(G$);function Ml(e){"@babel/helpers - typeof";return Ml=typeof Symbol=="function"&&typeof Symbol.iterator=="symbol"?function(t){return typeof t}:function(t){return t&&typeof Symbol=="function"&&t.constructor===Symbol&&t!==Symbol.prototype?"symbol":typeof t},Ml(e)}function Am(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter(function(i){return Object.getOwnPropertyDescriptor(e,i).enumerable})),n.push.apply(n,r)}return n}function Uo(e){for(var t=1;t<arguments.length;t++){var n=arguments[t]!=null?arguments[t]:{};t%2?Am(Object(n),!0).forEach(function(r){V$(e,r,n[r])}):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):Am(Object(n)).forEach(function(r){Object.defineProperty(e,r,Object.getOwnPropertyDescriptor(n,r))})}return e}function V$(e,t,n){return t=X$(t),t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function X$(e){var t=q$(e,"string");return Ml(t)=="symbol"?t:t+""}function q$(e,t){if(Ml(e)!="object"||!e)return e;var n=e[Symbol.toPrimitive];if(n!==void 0){var r=n.call(e,t);if(Ml(r)!="object")return r;throw new TypeError("@@toPrimitive must return a primitive value.")}return(t==="string"?String:Number)(e)}function K$(e,t){return J$(e)||Q$(e,t)||Z$(e,t)||Y$()}function Y$(){throw new TypeError(`Invalid attempt to destructure non-iterable instance.
In order to be iterable, non-array objects must have a [Symbol.iterator]() method.`)}function Z$(e,t){if(e){if(typeof e=="string")return Mm(e,t);var n=Object.prototype.toString.call(e).slice(8,-1);if(n==="Object"&&e.constructor&&(n=e.constructor.name),n==="Map"||n==="Set")return Array.from(e);if(n==="Arguments"||/^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n))return Mm(e,t)}}function Mm(e,t){(t==null||t>e.length)&&(t=e.length);for(var n=0,r=new Array(t);n<t;n++)r[n]=e[n];return r}function Q$(e,t){var n=e==null?null:typeof Symbol<"u"&&e[Symbol.iterator]||e["@@iterator"];if(n!=null){var r,i,a,l,o=[],s=!0,c=!1;try{if(a=(n=n.call(e)).next,t!==0)for(;!(s=(r=a.call(n)).done)&&(o.push(r.value),o.length!==t);s=!0);}catch(f){c=!0,i=f}finally{try{if(!s&&n.return!=null&&(l=n.return(),Object(l)!==l))return}finally{if(c)throw i}}return o}}function J$(e){if(Array.isArray(e))return e}var Nm=$.forwardRef(function(e,t){var n=e.aspect,r=e.initialDimension,i=r===void 0?{width:-1,height:-1}:r,a=e.width,l=a===void 0?"100%":a,o=e.height,s=o===void 0?"100%":o,c=e.minWidth,f=c===void 0?0:c,d=e.minHeight,p=e.maxHeight,h=e.children,x=e.debounce,v=x===void 0?0:x,w=e.id,y=e.className,m=e.onResize,g=e.style,_=g===void 0?{}:g,b=$.useRef(null),k=$.useRef();k.current=m,$.useImperativeHandle(t,function(){return Object.defineProperty(b.current,"current",{get:function(){return console.warn("The usage of ref.current.current is deprecated and will no longer be supported."),b.current},configurable:!0})});var S=$.useState({containerWidth:i.width,containerHeight:i.height}),j=K$(S,2),O=j[0],C=j[1],M=$.useCallback(function(N,z){C(function(E){var L=Math.round(N),F=Math.round(z);return E.containerWidth===L&&E.containerHeight===F?E:{containerWidth:L,containerHeight:F}})},[]);$.useEffect(function(){var N=function(I){var D,B=I[0].contentRect,W=B.width,X=B.height;M(W,X),(D=k.current)===null||D===void 0||D.call(k,W,X)};v>0&&(N=Iv(N,v,{trailing:!0,leading:!1}));var z=new ResizeObserver(N),E=b.current.getBoundingClientRect(),L=E.width,F=E.height;return M(L,F),z.observe(b.current),function(){z.disconnect()}},[M,v]);var P=$.useMemo(function(){var N=O.containerWidth,z=O.containerHeight;if(N<0||z<0)return null;Cn(Ir(l)||Ir(s),`The width(%s) and height(%s) are both fixed numbers,
       maybe you don't need to use a ResponsiveContainer.`,l,s),Cn(!n||n>0,"The aspect(%s) must be greater than zero.",n);var E=Ir(l)?N:l,L=Ir(s)?z:s;n&&n>0&&(E?L=E/n:L&&(E=L*n),p&&L>p&&(L=p)),Cn(E>0||L>0,`The width(%s) and height(%s) of chart should be greater than 0,
       please check the style of container, or the props width(%s) and height(%s),
       or add a minWidth(%s) or minHeight(%s) or use aspect(%s) to control the
       height and width.`,E,L,l,s,f,d,n);var F=!Array.isArray(h)&&En(h.type).endsWith("Chart");return T.Children.map(h,function(A){return T.isValidElement(A)?$.cloneElement(A,Uo({width:E,height:L},F?{style:Uo({height:"100%",width:"100%",maxHeight:L,maxWidth:E},A.props.style)}:{})):A})},[n,h,s,p,d,f,O,l]);return T.createElement("div",{id:w?"".concat(w):void 0,className:se("recharts-responsive-container",y),style:Uo(Uo({},_),{},{width:l,height:s,minWidth:f,minHeight:d,maxHeight:p}),ref:b},P)}),Dv=function(t){return null};Dv.displayName="Cell";function Nl(e){"@babel/helpers - typeof";return Nl=typeof Symbol=="function"&&typeof Symbol.iterator=="symbol"?function(t){return typeof t}:function(t){return t&&typeof Symbol=="function"&&t.constructor===Symbol&&t!==Symbol.prototype?"symbol":typeof t},Nl(e)}function Em(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter(function(i){return Object.getOwnPropertyDescriptor(e,i).enumerable})),n.push.apply(n,r)}return n}function lf(e){for(var t=1;t<arguments.length;t++){var n=arguments[t]!=null?arguments[t]:{};t%2?Em(Object(n),!0).forEach(function(r){eT(e,r,n[r])}):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):Em(Object(n)).forEach(function(r){Object.defineProperty(e,r,Object.getOwnPropertyDescriptor(n,r))})}return e}function eT(e,t,n){return t=tT(t),t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function tT(e){var t=nT(e,"string");return Nl(t)=="symbol"?t:t+""}function nT(e,t){if(Nl(e)!="object"||!e)return e;var n=e[Symbol.toPrimitive];if(n!==void 0){var r=n.call(e,t);if(Nl(r)!="object")return r;throw new TypeError("@@toPrimitive must return a primitive value.")}return(t==="string"?String:Number)(e)}var ci={widthCache:{},cacheCount:0},rT=2e3,iT={position:"absolute",top:"-20000px",left:0,padding:0,margin:0,border:"none",whiteSpace:"pre"},Cm="recharts_measurement_span";function aT(e){var t=lf({},e);return Object.keys(t).forEach(function(n){t[n]||delete t[n]}),t}var il=function(t){var n=arguments.length>1&&arguments[1]!==void 0?arguments[1]:{};if(t==null||vo.isSsr)return{width:0,height:0};var r=aT(n),i=JSON.stringify({text:t,copyStyle:r});if(ci.widthCache[i])return ci.widthCache[i];try{var a=document.getElementById(Cm);a||(a=document.createElement("span"),a.setAttribute("id",Cm),a.setAttribute("aria-hidden","true"),document.body.appendChild(a));var l=lf(lf({},iT),r);Object.assign(a.style,l),a.textContent="".concat(t);var o=a.getBoundingClientRect(),s={width:o.width,height:o.height};return ci.widthCache[i]=s,++ci.cacheCount>rT&&(ci.cacheCount=0,ci.widthCache={}),s}catch{return{width:0,height:0}}},lT=function(t){return{top:t.top+window.scrollY-document.documentElement.clientTop,left:t.left+window.scrollX-document.documentElement.clientLeft}};function El(e){"@babel/helpers - typeof";return El=typeof Symbol=="function"&&typeof Symbol.iterator=="symbol"?function(t){return typeof t}:function(t){return t&&typeof Symbol=="function"&&t.constructor===Symbol&&t!==Symbol.prototype?"symbol":typeof t},El(e)}function Zs(e,t){return uT(e)||cT(e,t)||sT(e,t)||oT()}function oT(){throw new TypeError(`Invalid attempt to destructure non-iterable instance.
In order to be iterable, non-array objects must have a [Symbol.iterator]() method.`)}function sT(e,t){if(e){if(typeof e=="string")return $m(e,t);var n=Object.prototype.toString.call(e).slice(8,-1);if(n==="Object"&&e.constructor&&(n=e.constructor.name),n==="Map"||n==="Set")return Array.from(e);if(n==="Arguments"||/^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n))return $m(e,t)}}function $m(e,t){(t==null||t>e.length)&&(t=e.length);for(var n=0,r=new Array(t);n<t;n++)r[n]=e[n];return r}function cT(e,t){var n=e==null?null:typeof Symbol<"u"&&e[Symbol.iterator]||e["@@iterator"];if(n!=null){var r,i,a,l,o=[],s=!0,c=!1;try{if(a=(n=n.call(e)).next,t===0){if(Object(n)!==n)return;s=!1}else for(;!(s=(r=a.call(n)).done)&&(o.push(r.value),o.length!==t);s=!0);}catch(f){c=!0,i=f}finally{try{if(!s&&n.return!=null&&(l=n.return(),Object(l)!==l))return}finally{if(c)throw i}}return o}}function uT(e){if(Array.isArray(e))return e}function dT(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}function Tm(e,t){for(var n=0;n<t.length;n++){var r=t[n];r.enumerable=r.enumerable||!1,r.configurable=!0,"value"in r&&(r.writable=!0),Object.defineProperty(e,pT(r.key),r)}}function fT(e,t,n){return t&&Tm(e.prototype,t),n&&Tm(e,n),Object.defineProperty(e,"prototype",{writable:!1}),e}function pT(e){var t=hT(e,"string");return El(t)=="symbol"?t:t+""}function hT(e,t){if(El(e)!="object"||!e)return e;var n=e[Symbol.toPrimitive];if(n!==void 0){var r=n.call(e,t);if(El(r)!="object")return r;throw new TypeError("@@toPrimitive must return a primitive value.")}return String(e)}var zm=/(-?\d+(?:\.\d+)?[a-zA-Z%]*)([*/])(-?\d+(?:\.\d+)?[a-zA-Z%]*)/,Im=/(-?\d+(?:\.\d+)?[a-zA-Z%]*)([+-])(-?\d+(?:\.\d+)?[a-zA-Z%]*)/,mT=/^px|cm|vh|vw|em|rem|%|mm|in|pt|pc|ex|ch|vmin|vmax|Q$/,yT=/(-?\d+(?:\.\d+)?)([a-zA-Z%]+)?/,Lv={cm:96/2.54,mm:96/25.4,pt:96/72,pc:96/6,in:96,Q:96/(2.54*40),px:1},vT=Object.keys(Lv),Si="NaN";function gT(e,t){return e*Lv[t]}var Ho=function(){function e(t,n){dT(this,e),this.num=t,this.unit=n,this.num=t,this.unit=n,Number.isNaN(t)&&(this.unit=""),n!==""&&!mT.test(n)&&(this.num=NaN,this.unit=""),vT.includes(n)&&(this.num=gT(t,n),this.unit="px")}return fT(e,[{key:"add",value:function(n){return this.unit!==n.unit?new e(NaN,""):new e(this.num+n.num,this.unit)}},{key:"subtract",value:function(n){return this.unit!==n.unit?new e(NaN,""):new e(this.num-n.num,this.unit)}},{key:"multiply",value:function(n){return this.unit!==""&&n.unit!==""&&this.unit!==n.unit?new e(NaN,""):new e(this.num*n.num,this.unit||n.unit)}},{key:"divide",value:function(n){return this.unit!==""&&n.unit!==""&&this.unit!==n.unit?new e(NaN,""):new e(this.num/n.num,this.unit||n.unit)}},{key:"toString",value:function(){return"".concat(this.num).concat(this.unit)}},{key:"isNaN",value:function(){return Number.isNaN(this.num)}}],[{key:"parse",value:function(n){var r,i=(r=yT.exec(n))!==null&&r!==void 0?r:[],a=Zs(i,3),l=a[1],o=a[2];return new e(parseFloat(l),o??"")}}])}();function Fv(e){if(e.includes(Si))return Si;for(var t=e;t.includes("*")||t.includes("/");){var n,r=(n=zm.exec(t))!==null&&n!==void 0?n:[],i=Zs(r,4),a=i[1],l=i[2],o=i[3],s=Ho.parse(a??""),c=Ho.parse(o??""),f=l==="*"?s.multiply(c):s.divide(c);if(f.isNaN())return Si;t=t.replace(zm,f.toString())}for(;t.includes("+")||/.-\d+(?:\.\d+)?/.test(t);){var d,p=(d=Im.exec(t))!==null&&d!==void 0?d:[],h=Zs(p,4),x=h[1],v=h[2],w=h[3],y=Ho.parse(x??""),m=Ho.parse(w??""),g=v==="+"?y.add(m):y.subtract(m);if(g.isNaN())return Si;t=t.replace(Im,g.toString())}return t}var Dm=/\(([^()]*)\)/;function xT(e){for(var t=e;t.includes("(");){var n=Dm.exec(t),r=Zs(n,2),i=r[1];t=t.replace(Dm,Fv(i))}return t}function bT(e){var t=e.replace(/\s+/g,"");return t=xT(t),t=Fv(t),t}function wT(e){try{return bT(e)}catch{return Si}}function Sd(e){var t=wT(e.slice(5,-1));return t===Si?"":t}var kT=["x","y","lineHeight","capHeight","scaleToFit","textAnchor","verticalAnchor","fill"],_T=["dx","dy","angle","className","breakAll"];function of(){return of=Object.assign?Object.assign.bind():function(e){for(var t=1;t<arguments.length;t++){var n=arguments[t];for(var r in n)Object.prototype.hasOwnProperty.call(n,r)&&(e[r]=n[r])}return e},of.apply(this,arguments)}function Lm(e,t){if(e==null)return{};var n=ST(e,t),r,i;if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);for(i=0;i<a.length;i++)r=a[i],!(t.indexOf(r)>=0)&&Object.prototype.propertyIsEnumerable.call(e,r)&&(n[r]=e[r])}return n}function ST(e,t){if(e==null)return{};var n={};for(var r in e)if(Object.prototype.hasOwnProperty.call(e,r)){if(t.indexOf(r)>=0)continue;n[r]=e[r]}return n}function Fm(e,t){return AT(e)||PT(e,t)||OT(e,t)||jT()}function jT(){throw new TypeError(`Invalid attempt to destructure non-iterable instance.
In order to be iterable, non-array objects must have a [Symbol.iterator]() method.`)}function OT(e,t){if(e){if(typeof e=="string")return Rm(e,t);var n=Object.prototype.toString.call(e).slice(8,-1);if(n==="Object"&&e.constructor&&(n=e.constructor.name),n==="Map"||n==="Set")return Array.from(e);if(n==="Arguments"||/^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n))return Rm(e,t)}}function Rm(e,t){(t==null||t>e.length)&&(t=e.length);for(var n=0,r=new Array(t);n<t;n++)r[n]=e[n];return r}function PT(e,t){var n=e==null?null:typeof Symbol<"u"&&e[Symbol.iterator]||e["@@iterator"];if(n!=null){var r,i,a,l,o=[],s=!0,c=!1;try{if(a=(n=n.call(e)).next,t===0){if(Object(n)!==n)return;s=!1}else for(;!(s=(r=a.call(n)).done)&&(o.push(r.value),o.length!==t);s=!0);}catch(f){c=!0,i=f}finally{try{if(!s&&n.return!=null&&(l=n.return(),Object(l)!==l))return}finally{if(c)throw i}}return o}}function AT(e){if(Array.isArray(e))return e}var Rv=/[ \f\n\r\t\v\u2028\u2029]+/,Bv=function(t){var n=t.children,r=t.breakAll,i=t.style;try{var a=[];ce(n)||(r?a=n.toString().split(""):a=n.toString().split(Rv));var l=a.map(function(s){return{word:s,width:il(s,i).width}}),o=r?0:il(" ",i).width;return{wordsWithComputedWidth:l,spaceWidth:o}}catch{return null}},MT=function(t,n,r,i,a){var l=t.maxLines,o=t.children,s=t.style,c=t.breakAll,f=G(l),d=o,p=function(){var E=arguments.length>0&&arguments[0]!==void 0?arguments[0]:[];return E.reduce(function(L,F){var A=F.word,I=F.width,D=L[L.length-1];if(D&&(i==null||a||D.width+I+r<Number(i)))D.words.push(A),D.width+=I+r;else{var B={words:[A],width:I};L.push(B)}return L},[])},h=p(n),x=function(E){return E.reduce(function(L,F){return L.width>F.width?L:F})};if(!f)return h;for(var v="…",w=function(E){var L=d.slice(0,E),F=Bv({breakAll:c,style:s,children:L+v}).wordsWithComputedWidth,A=p(F),I=A.length>l||x(A).width>Number(i);return[I,A]},y=0,m=d.length-1,g=0,_;y<=m&&g<=d.length-1;){var b=Math.floor((y+m)/2),k=b-1,S=w(k),j=Fm(S,2),O=j[0],C=j[1],M=w(b),P=Fm(M,1),N=P[0];if(!O&&!N&&(y=b+1),O&&N&&(m=b-1),!O&&N){_=C;break}g++}return _||h},Bm=function(t){var n=ce(t)?[]:t.toString().split(Rv);return[{words:n}]},NT=function(t){var n=t.width,r=t.scaleToFit,i=t.children,a=t.style,l=t.breakAll,o=t.maxLines;if((n||r)&&!vo.isSsr){var s,c,f=Bv({breakAll:l,children:i,style:a});if(f){var d=f.wordsWithComputedWidth,p=f.spaceWidth;s=d,c=p}else return Bm(i);return MT({breakAll:l,children:i,maxLines:o,style:a},s,c,n,r)}return Bm(i)},Wm="#808080",Qs=function(t){var n=t.x,r=n===void 0?0:n,i=t.y,a=i===void 0?0:i,l=t.lineHeight,o=l===void 0?"1em":l,s=t.capHeight,c=s===void 0?"0.71em":s,f=t.scaleToFit,d=f===void 0?!1:f,p=t.textAnchor,h=p===void 0?"start":p,x=t.verticalAnchor,v=x===void 0?"end":x,w=t.fill,y=w===void 0?Wm:w,m=Lm(t,kT),g=$.useMemo(function(){return NT({breakAll:m.breakAll,children:m.children,maxLines:m.maxLines,scaleToFit:d,style:m.style,width:m.width})},[m.breakAll,m.children,m.maxLines,d,m.style,m.width]),_=m.dx,b=m.dy,k=m.angle,S=m.className,j=m.breakAll,O=Lm(m,_T);if(!We(r)||!We(a))return null;var C=r+(G(_)?_:0),M=a+(G(b)?b:0),P;switch(v){case"start":P=Sd("calc(".concat(c,")"));break;case"middle":P=Sd("calc(".concat((g.length-1)/2," * -").concat(o," + (").concat(c," / 2))"));break;default:P=Sd("calc(".concat(g.length-1," * -").concat(o,")"));break}var N=[];if(d){var z=g[0].width,E=m.width;N.push("scale(".concat((G(E)?E/z:1)/z,")"))}return k&&N.push("rotate(".concat(k,", ").concat(C,", ").concat(M,")")),N.length&&(O.transform=N.join(" ")),T.createElement("text",of({},oe(O,!0),{x:C,y:M,className:se("recharts-text",S),textAnchor:h,fill:y.includes("url")?Wm:y}),g.map(function(L,F){var A=L.words.join(j?"":" ");return T.createElement("tspan",{x:C,dy:F===0?P:o,key:"".concat(A,"-").concat(F)},A)}))};function pr(e,t){return e==null||t==null?NaN:e<t?-1:e>t?1:e>=t?0:NaN}function ET(e,t){return e==null||t==null?NaN:t<e?-1:t>e?1:t>=e?0:NaN}function Sp(e){let t,n,r;e.length!==2?(t=pr,n=(o,s)=>pr(e(o),s),r=(o,s)=>e(o)-s):(t=e===pr||e===ET?e:CT,n=e,r=e);function i(o,s,c=0,f=o.length){if(c<f){if(t(s,s)!==0)return f;do{const d=c+f>>>1;n(o[d],s)<0?c=d+1:f=d}while(c<f)}return c}function a(o,s,c=0,f=o.length){if(c<f){if(t(s,s)!==0)return f;do{const d=c+f>>>1;n(o[d],s)<=0?c=d+1:f=d}while(c<f)}return c}function l(o,s,c=0,f=o.length){const d=i(o,s,c,f-1);return d>c&&r(o[d-1],s)>-r(o[d],s)?d-1:d}return{left:i,center:l,right:a}}function CT(){return 0}function Wv(e){return e===null?NaN:+e}function*$T(e,t){for(let n of e)n!=null&&(n=+n)>=n&&(yield n)}const TT=Sp(pr),go=TT.right;Sp(Wv).center;class Um extends Map{constructor(t,n=DT){if(super(),Object.defineProperties(this,{_intern:{value:new Map},_key:{value:n}}),t!=null)for(const[r,i]of t)this.set(r,i)}get(t){return super.get(Hm(this,t))}has(t){return super.has(Hm(this,t))}set(t,n){return super.set(zT(this,t),n)}delete(t){return super.delete(IT(this,t))}}function Hm({_intern:e,_key:t},n){const r=t(n);return e.has(r)?e.get(r):n}function zT({_intern:e,_key:t},n){const r=t(n);return e.has(r)?e.get(r):(e.set(r,n),n)}function IT({_intern:e,_key:t},n){const r=t(n);return e.has(r)&&(n=e.get(r),e.delete(r)),n}function DT(e){return e!==null&&typeof e=="object"?e.valueOf():e}function LT(e=pr){if(e===pr)return Uv;if(typeof e!="function")throw new TypeError("compare is not a function");return(t,n)=>{const r=e(t,n);return r||r===0?r:(e(n,n)===0)-(e(t,t)===0)}}function Uv(e,t){return(e==null||!(e>=e))-(t==null||!(t>=t))||(e<t?-1:e>t?1:0)}const FT=Math.sqrt(50),RT=Math.sqrt(10),BT=Math.sqrt(2);function Js(e,t,n){const r=(t-e)/Math.max(0,n),i=Math.floor(Math.log10(r)),a=r/Math.pow(10,i),l=a>=FT?10:a>=RT?5:a>=BT?2:1;let o,s,c;return i<0?(c=Math.pow(10,-i)/l,o=Math.round(e*c),s=Math.round(t*c),o/c<e&&++o,s/c>t&&--s,c=-c):(c=Math.pow(10,i)*l,o=Math.round(e/c),s=Math.round(t/c),o*c<e&&++o,s*c>t&&--s),s<o&&.5<=n&&n<2?Js(e,t,n*2):[o,s,c]}function sf(e,t,n){if(t=+t,e=+e,n=+n,!(n>0))return[];if(e===t)return[e];const r=t<e,[i,a,l]=r?Js(t,e,n):Js(e,t,n);if(!(a>=i))return[];const o=a-i+1,s=new Array(o);if(r)if(l<0)for(let c=0;c<o;++c)s[c]=(a-c)/-l;else for(let c=0;c<o;++c)s[c]=(a-c)*l;else if(l<0)for(let c=0;c<o;++c)s[c]=(i+c)/-l;else for(let c=0;c<o;++c)s[c]=(i+c)*l;return s}function cf(e,t,n){return t=+t,e=+e,n=+n,Js(e,t,n)[2]}function uf(e,t,n){t=+t,e=+e,n=+n;const r=t<e,i=r?cf(t,e,n):cf(e,t,n);return(r?-1:1)*(i<0?1/-i:i)}function Gm(e,t){let n;for(const r of e)r!=null&&(n<r||n===void 0&&r>=r)&&(n=r);return n}function Vm(e,t){let n;for(const r of e)r!=null&&(n>r||n===void 0&&r>=r)&&(n=r);return n}function Hv(e,t,n=0,r=1/0,i){if(t=Math.floor(t),n=Math.floor(Math.max(0,n)),r=Math.floor(Math.min(e.length-1,r)),!(n<=t&&t<=r))return e;for(i=i===void 0?Uv:LT(i);r>n;){if(r-n>600){const s=r-n+1,c=t-n+1,f=Math.log(s),d=.5*Math.exp(2*f/3),p=.5*Math.sqrt(f*d*(s-d)/s)*(c-s/2<0?-1:1),h=Math.max(n,Math.floor(t-c*d/s+p)),x=Math.min(r,Math.floor(t+(s-c)*d/s+p));Hv(e,t,h,x,i)}const a=e[t];let l=n,o=r;for(Ia(e,n,t),i(e[r],a)>0&&Ia(e,n,r);l<o;){for(Ia(e,l,o),++l,--o;i(e[l],a)<0;)++l;for(;i(e[o],a)>0;)--o}i(e[n],a)===0?Ia(e,n,o):(++o,Ia(e,o,r)),o<=t&&(n=o+1),t<=o&&(r=o-1)}return e}function Ia(e,t,n){const r=e[t];e[t]=e[n],e[n]=r}function WT(e,t,n){if(e=Float64Array.from($T(e)),!(!(r=e.length)||isNaN(t=+t))){if(t<=0||r<2)return Vm(e);if(t>=1)return Gm(e);var r,i=(r-1)*t,a=Math.floor(i),l=Gm(Hv(e,a).subarray(0,a+1)),o=Vm(e.subarray(a+1));return l+(o-l)*(i-a)}}function UT(e,t,n=Wv){if(!(!(r=e.length)||isNaN(t=+t))){if(t<=0||r<2)return+n(e[0],0,e);if(t>=1)return+n(e[r-1],r-1,e);var r,i=(r-1)*t,a=Math.floor(i),l=+n(e[a],a,e),o=+n(e[a+1],a+1,e);return l+(o-l)*(i-a)}}function HT(e,t,n){e=+e,t=+t,n=(i=arguments.length)<2?(t=e,e=0,1):i<3?1:+n;for(var r=-1,i=Math.max(0,Math.ceil((t-e)/n))|0,a=new Array(i);++r<i;)a[r]=e+r*n;return a}function Ht(e,t){switch(arguments.length){case 0:break;case 1:this.range(e);break;default:this.range(t).domain(e);break}return this}function Hn(e,t){switch(arguments.length){case 0:break;case 1:{typeof e=="function"?this.interpolator(e):this.range(e);break}default:{this.domain(e),typeof t=="function"?this.interpolator(t):this.range(t);break}}return this}const df=Symbol("implicit");function jp(){var e=new Um,t=[],n=[],r=df;function i(a){let l=e.get(a);if(l===void 0){if(r!==df)return r;e.set(a,l=t.push(a)-1)}return n[l%n.length]}return i.domain=function(a){if(!arguments.length)return t.slice();t=[],e=new Um;for(const l of a)e.has(l)||e.set(l,t.push(l)-1);return i},i.range=function(a){return arguments.length?(n=Array.from(a),i):n.slice()},i.unknown=function(a){return arguments.length?(r=a,i):r},i.copy=function(){return jp(t,n).unknown(r)},Ht.apply(i,arguments),i}function Cl(){var e=jp().unknown(void 0),t=e.domain,n=e.range,r=0,i=1,a,l,o=!1,s=0,c=0,f=.5;delete e.unknown;function d(){var p=t().length,h=i<r,x=h?i:r,v=h?r:i;a=(v-x)/Math.max(1,p-s+c*2),o&&(a=Math.floor(a)),x+=(v-x-a*(p-s))*f,l=a*(1-s),o&&(x=Math.round(x),l=Math.round(l));var w=HT(p).map(function(y){return x+a*y});return n(h?w.reverse():w)}return e.domain=function(p){return arguments.length?(t(p),d()):t()},e.range=function(p){return arguments.length?([r,i]=p,r=+r,i=+i,d()):[r,i]},e.rangeRound=function(p){return[r,i]=p,r=+r,i=+i,o=!0,d()},e.bandwidth=function(){return l},e.step=function(){return a},e.round=function(p){return arguments.length?(o=!!p,d()):o},e.padding=function(p){return arguments.length?(s=Math.min(1,c=+p),d()):s},e.paddingInner=function(p){return arguments.length?(s=Math.min(1,p),d()):s},e.paddingOuter=function(p){return arguments.length?(c=+p,d()):c},e.align=function(p){return arguments.length?(f=Math.max(0,Math.min(1,p)),d()):f},e.copy=function(){return Cl(t(),[r,i]).round(o).paddingInner(s).paddingOuter(c).align(f)},Ht.apply(d(),arguments)}function Gv(e){var t=e.copy;return e.padding=e.paddingOuter,delete e.paddingInner,delete e.paddingOuter,e.copy=function(){return Gv(t())},e}function al(){return Gv(Cl.apply(null,arguments).paddingInner(1))}function Op(e,t,n){e.prototype=t.prototype=n,n.constructor=e}function Vv(e,t){var n=Object.create(e.prototype);for(var r in t)n[r]=t[r];return n}function xo(){}var $l=.7,ec=1/$l,Ti="\\s*([+-]?\\d+)\\s*",Tl="\\s*([+-]?(?:\\d*\\.)?\\d+(?:[eE][+-]?\\d+)?)\\s*",yn="\\s*([+-]?(?:\\d*\\.)?\\d+(?:[eE][+-]?\\d+)?)%\\s*",GT=/^#([0-9a-f]{3,8})$/,VT=new RegExp(`^rgb\\(${Ti},${Ti},${Ti}\\)$`),XT=new RegExp(`^rgb\\(${yn},${yn},${yn}\\)$`),qT=new RegExp(`^rgba\\(${Ti},${Ti},${Ti},${Tl}\\)$`),KT=new RegExp(`^rgba\\(${yn},${yn},${yn},${Tl}\\)$`),YT=new RegExp(`^hsl\\(${Tl},${yn},${yn}\\)$`),ZT=new RegExp(`^hsla\\(${Tl},${yn},${yn},${Tl}\\)$`),Xm={aliceblue:15792383,antiquewhite:16444375,aqua:65535,aquamarine:8388564,azure:15794175,beige:16119260,bisque:16770244,black:0,blanchedalmond:16772045,blue:255,blueviolet:9055202,brown:10824234,burlywood:14596231,cadetblue:6266528,chartreuse:8388352,chocolate:13789470,coral:16744272,cornflowerblue:6591981,cornsilk:16775388,crimson:14423100,cyan:65535,darkblue:139,darkcyan:35723,darkgoldenrod:12092939,darkgray:11119017,darkgreen:25600,darkgrey:11119017,darkkhaki:12433259,darkmagenta:9109643,darkolivegreen:5597999,darkorange:16747520,darkorchid:10040012,darkred:9109504,darksalmon:15308410,darkseagreen:9419919,darkslateblue:4734347,darkslategray:3100495,darkslategrey:3100495,darkturquoise:52945,darkviolet:9699539,deeppink:16716947,deepskyblue:49151,dimgray:6908265,dimgrey:6908265,dodgerblue:2003199,firebrick:11674146,floralwhite:16775920,forestgreen:2263842,fuchsia:16711935,gainsboro:14474460,ghostwhite:16316671,gold:16766720,goldenrod:14329120,gray:8421504,green:32768,greenyellow:11403055,grey:8421504,honeydew:15794160,hotpink:16738740,indianred:13458524,indigo:4915330,ivory:16777200,khaki:15787660,lavender:15132410,lavenderblush:16773365,lawngreen:8190976,lemonchiffon:16775885,lightblue:11393254,lightcoral:15761536,lightcyan:14745599,lightgoldenrodyellow:16448210,lightgray:13882323,lightgreen:9498256,lightgrey:13882323,lightpink:16758465,lightsalmon:16752762,lightseagreen:2142890,lightskyblue:8900346,lightslategray:7833753,lightslategrey:7833753,lightsteelblue:11584734,lightyellow:16777184,lime:65280,limegreen:3329330,linen:16445670,magenta:16711935,maroon:8388608,mediumaquamarine:6737322,mediumblue:205,mediumorchid:12211667,mediumpurple:9662683,mediumseagreen:3978097,mediumslateblue:8087790,mediumspringgreen:64154,mediumturquoise:4772300,mediumvioletred:13047173,midnightblue:1644912,mintcream:16121850,mistyrose:16770273,moccasin:16770229,navajowhite:16768685,navy:128,oldlace:16643558,olive:8421376,olivedrab:7048739,orange:16753920,orangered:16729344,orchid:14315734,palegoldenrod:15657130,palegreen:10025880,paleturquoise:11529966,palevioletred:14381203,papayawhip:16773077,peachpuff:16767673,peru:13468991,pink:16761035,plum:14524637,powderblue:11591910,purple:8388736,rebeccapurple:6697881,red:16711680,rosybrown:12357519,royalblue:4286945,saddlebrown:9127187,salmon:16416882,sandybrown:16032864,seagreen:3050327,seashell:16774638,sienna:10506797,silver:12632256,skyblue:8900331,slateblue:6970061,slategray:7372944,slategrey:7372944,snow:16775930,springgreen:65407,steelblue:4620980,tan:13808780,teal:32896,thistle:14204888,tomato:16737095,turquoise:4251856,violet:15631086,wheat:16113331,white:16777215,whitesmoke:16119285,yellow:16776960,yellowgreen:10145074};Op(xo,zl,{copy(e){return Object.assign(new this.constructor,this,e)},displayable(){return this.rgb().displayable()},hex:qm,formatHex:qm,formatHex8:QT,formatHsl:JT,formatRgb:Km,toString:Km});function qm(){return this.rgb().formatHex()}function QT(){return this.rgb().formatHex8()}function JT(){return Xv(this).formatHsl()}function Km(){return this.rgb().formatRgb()}function zl(e){var t,n;return e=(e+"").trim().toLowerCase(),(t=GT.exec(e))?(n=t[1].length,t=parseInt(t[1],16),n===6?Ym(t):n===3?new vt(t>>8&15|t>>4&240,t>>4&15|t&240,(t&15)<<4|t&15,1):n===8?Go(t>>24&255,t>>16&255,t>>8&255,(t&255)/255):n===4?Go(t>>12&15|t>>8&240,t>>8&15|t>>4&240,t>>4&15|t&240,((t&15)<<4|t&15)/255):null):(t=VT.exec(e))?new vt(t[1],t[2],t[3],1):(t=XT.exec(e))?new vt(t[1]*255/100,t[2]*255/100,t[3]*255/100,1):(t=qT.exec(e))?Go(t[1],t[2],t[3],t[4]):(t=KT.exec(e))?Go(t[1]*255/100,t[2]*255/100,t[3]*255/100,t[4]):(t=YT.exec(e))?Jm(t[1],t[2]/100,t[3]/100,1):(t=ZT.exec(e))?Jm(t[1],t[2]/100,t[3]/100,t[4]):Xm.hasOwnProperty(e)?Ym(Xm[e]):e==="transparent"?new vt(NaN,NaN,NaN,0):null}function Ym(e){return new vt(e>>16&255,e>>8&255,e&255,1)}function Go(e,t,n,r){return r<=0&&(e=t=n=NaN),new vt(e,t,n,r)}function ez(e){return e instanceof xo||(e=zl(e)),e?(e=e.rgb(),new vt(e.r,e.g,e.b,e.opacity)):new vt}function ff(e,t,n,r){return arguments.length===1?ez(e):new vt(e,t,n,r??1)}function vt(e,t,n,r){this.r=+e,this.g=+t,this.b=+n,this.opacity=+r}Op(vt,ff,Vv(xo,{brighter(e){return e=e==null?ec:Math.pow(ec,e),new vt(this.r*e,this.g*e,this.b*e,this.opacity)},darker(e){return e=e==null?$l:Math.pow($l,e),new vt(this.r*e,this.g*e,this.b*e,this.opacity)},rgb(){return this},clamp(){return new vt(Wr(this.r),Wr(this.g),Wr(this.b),tc(this.opacity))},displayable(){return-.5<=this.r&&this.r<255.5&&-.5<=this.g&&this.g<255.5&&-.5<=this.b&&this.b<255.5&&0<=this.opacity&&this.opacity<=1},hex:Zm,formatHex:Zm,formatHex8:tz,formatRgb:Qm,toString:Qm}));function Zm(){return`#${Dr(this.r)}${Dr(this.g)}${Dr(this.b)}`}function tz(){return`#${Dr(this.r)}${Dr(this.g)}${Dr(this.b)}${Dr((isNaN(this.opacity)?1:this.opacity)*255)}`}function Qm(){const e=tc(this.opacity);return`${e===1?"rgb(":"rgba("}${Wr(this.r)}, ${Wr(this.g)}, ${Wr(this.b)}${e===1?")":`, ${e})`}`}function tc(e){return isNaN(e)?1:Math.max(0,Math.min(1,e))}function Wr(e){return Math.max(0,Math.min(255,Math.round(e)||0))}function Dr(e){return e=Wr(e),(e<16?"0":"")+e.toString(16)}function Jm(e,t,n,r){return r<=0?e=t=n=NaN:n<=0||n>=1?e=t=NaN:t<=0&&(e=NaN),new Qt(e,t,n,r)}function Xv(e){if(e instanceof Qt)return new Qt(e.h,e.s,e.l,e.opacity);if(e instanceof xo||(e=zl(e)),!e)return new Qt;if(e instanceof Qt)return e;e=e.rgb();var t=e.r/255,n=e.g/255,r=e.b/255,i=Math.min(t,n,r),a=Math.max(t,n,r),l=NaN,o=a-i,s=(a+i)/2;return o?(t===a?l=(n-r)/o+(n<r)*6:n===a?l=(r-t)/o+2:l=(t-n)/o+4,o/=s<.5?a+i:2-a-i,l*=60):o=s>0&&s<1?0:l,new Qt(l,o,s,e.opacity)}function nz(e,t,n,r){return arguments.length===1?Xv(e):new Qt(e,t,n,r??1)}function Qt(e,t,n,r){this.h=+e,this.s=+t,this.l=+n,this.opacity=+r}Op(Qt,nz,Vv(xo,{brighter(e){return e=e==null?ec:Math.pow(ec,e),new Qt(this.h,this.s,this.l*e,this.opacity)},darker(e){return e=e==null?$l:Math.pow($l,e),new Qt(this.h,this.s,this.l*e,this.opacity)},rgb(){var e=this.h%360+(this.h<0)*360,t=isNaN(e)||isNaN(this.s)?0:this.s,n=this.l,r=n+(n<.5?n:1-n)*t,i=2*n-r;return new vt(jd(e>=240?e-240:e+120,i,r),jd(e,i,r),jd(e<120?e+240:e-120,i,r),this.opacity)},clamp(){return new Qt(e2(this.h),Vo(this.s),Vo(this.l),tc(this.opacity))},displayable(){return(0<=this.s&&this.s<=1||isNaN(this.s))&&0<=this.l&&this.l<=1&&0<=this.opacity&&this.opacity<=1},formatHsl(){const e=tc(this.opacity);return`${e===1?"hsl(":"hsla("}${e2(this.h)}, ${Vo(this.s)*100}%, ${Vo(this.l)*100}%${e===1?")":`, ${e})`}`}}));function e2(e){return e=(e||0)%360,e<0?e+360:e}function Vo(e){return Math.max(0,Math.min(1,e||0))}function jd(e,t,n){return(e<60?t+(n-t)*e/60:e<180?n:e<240?t+(n-t)*(240-e)/60:t)*255}const Pp=e=>()=>e;function rz(e,t){return function(n){return e+n*t}}function iz(e,t,n){return e=Math.pow(e,n),t=Math.pow(t,n)-e,n=1/n,function(r){return Math.pow(e+r*t,n)}}function az(e){return(e=+e)==1?qv:function(t,n){return n-t?iz(t,n,e):Pp(isNaN(t)?n:t)}}function qv(e,t){var n=t-e;return n?rz(e,n):Pp(isNaN(e)?t:e)}const t2=function e(t){var n=az(t);function r(i,a){var l=n((i=ff(i)).r,(a=ff(a)).r),o=n(i.g,a.g),s=n(i.b,a.b),c=qv(i.opacity,a.opacity);return function(f){return i.r=l(f),i.g=o(f),i.b=s(f),i.opacity=c(f),i+""}}return r.gamma=e,r}(1);function lz(e,t){t||(t=[]);var n=e?Math.min(t.length,e.length):0,r=t.slice(),i;return function(a){for(i=0;i<n;++i)r[i]=e[i]*(1-a)+t[i]*a;return r}}function oz(e){return ArrayBuffer.isView(e)&&!(e instanceof DataView)}function sz(e,t){var n=t?t.length:0,r=e?Math.min(n,e.length):0,i=new Array(r),a=new Array(n),l;for(l=0;l<r;++l)i[l]=wa(e[l],t[l]);for(;l<n;++l)a[l]=t[l];return function(o){for(l=0;l<r;++l)a[l]=i[l](o);return a}}function cz(e,t){var n=new Date;return e=+e,t=+t,function(r){return n.setTime(e*(1-r)+t*r),n}}function nc(e,t){return e=+e,t=+t,function(n){return e*(1-n)+t*n}}function uz(e,t){var n={},r={},i;(e===null||typeof e!="object")&&(e={}),(t===null||typeof t!="object")&&(t={});for(i in t)i in e?n[i]=wa(e[i],t[i]):r[i]=t[i];return function(a){for(i in n)r[i]=n[i](a);return r}}var pf=/[-+]?(?:\d+\.?\d*|\.?\d+)(?:[eE][-+]?\d+)?/g,Od=new RegExp(pf.source,"g");function dz(e){return function(){return e}}function fz(e){return function(t){return e(t)+""}}function pz(e,t){var n=pf.lastIndex=Od.lastIndex=0,r,i,a,l=-1,o=[],s=[];for(e=e+"",t=t+"";(r=pf.exec(e))&&(i=Od.exec(t));)(a=i.index)>n&&(a=t.slice(n,a),o[l]?o[l]+=a:o[++l]=a),(r=r[0])===(i=i[0])?o[l]?o[l]+=i:o[++l]=i:(o[++l]=null,s.push({i:l,x:nc(r,i)})),n=Od.lastIndex;return n<t.length&&(a=t.slice(n),o[l]?o[l]+=a:o[++l]=a),o.length<2?s[0]?fz(s[0].x):dz(t):(t=s.length,function(c){for(var f=0,d;f<t;++f)o[(d=s[f]).i]=d.x(c);return o.join("")})}function wa(e,t){var n=typeof t,r;return t==null||n==="boolean"?Pp(t):(n==="number"?nc:n==="string"?(r=zl(t))?(t=r,t2):pz:t instanceof zl?t2:t instanceof Date?cz:oz(t)?lz:Array.isArray(t)?sz:typeof t.valueOf!="function"&&typeof t.toString!="function"||isNaN(t)?uz:nc)(e,t)}function Ap(e,t){return e=+e,t=+t,function(n){return Math.round(e*(1-n)+t*n)}}function hz(e,t){t===void 0&&(t=e,e=wa);for(var n=0,r=t.length-1,i=t[0],a=new Array(r<0?0:r);n<r;)a[n]=e(i,i=t[++n]);return function(l){var o=Math.max(0,Math.min(r-1,Math.floor(l*=r)));return a[o](l-o)}}function mz(e){return function(){return e}}function rc(e){return+e}var n2=[0,1];function ut(e){return e}function hf(e,t){return(t-=e=+e)?function(n){return(n-e)/t}:mz(isNaN(t)?NaN:.5)}function yz(e,t){var n;return e>t&&(n=e,e=t,t=n),function(r){return Math.max(e,Math.min(t,r))}}function vz(e,t,n){var r=e[0],i=e[1],a=t[0],l=t[1];return i<r?(r=hf(i,r),a=n(l,a)):(r=hf(r,i),a=n(a,l)),function(o){return a(r(o))}}function gz(e,t,n){var r=Math.min(e.length,t.length)-1,i=new Array(r),a=new Array(r),l=-1;for(e[r]<e[0]&&(e=e.slice().reverse(),t=t.slice().reverse());++l<r;)i[l]=hf(e[l],e[l+1]),a[l]=n(t[l],t[l+1]);return function(o){var s=go(e,o,1,r)-1;return a[s](i[s](o))}}function bo(e,t){return t.domain(e.domain()).range(e.range()).interpolate(e.interpolate()).clamp(e.clamp()).unknown(e.unknown())}function xu(){var e=n2,t=n2,n=wa,r,i,a,l=ut,o,s,c;function f(){var p=Math.min(e.length,t.length);return l!==ut&&(l=yz(e[0],e[p-1])),o=p>2?gz:vz,s=c=null,d}function d(p){return p==null||isNaN(p=+p)?a:(s||(s=o(e.map(r),t,n)))(r(l(p)))}return d.invert=function(p){return l(i((c||(c=o(t,e.map(r),nc)))(p)))},d.domain=function(p){return arguments.length?(e=Array.from(p,rc),f()):e.slice()},d.range=function(p){return arguments.length?(t=Array.from(p),f()):t.slice()},d.rangeRound=function(p){return t=Array.from(p),n=Ap,f()},d.clamp=function(p){return arguments.length?(l=p?!0:ut,f()):l!==ut},d.interpolate=function(p){return arguments.length?(n=p,f()):n},d.unknown=function(p){return arguments.length?(a=p,d):a},function(p,h){return r=p,i=h,f()}}function Mp(){return xu()(ut,ut)}function xz(e){return Math.abs(e=Math.round(e))>=1e21?e.toLocaleString("en").replace(/,/g,""):e.toString(10)}function ic(e,t){if((n=(e=t?e.toExponential(t-1):e.toExponential()).indexOf("e"))<0)return null;var n,r=e.slice(0,n);return[r.length>1?r[0]+r.slice(2):r,+e.slice(n+1)]}function qi(e){return e=ic(Math.abs(e)),e?e[1]:NaN}function bz(e,t){return function(n,r){for(var i=n.length,a=[],l=0,o=e[0],s=0;i>0&&o>0&&(s+o+1>r&&(o=Math.max(1,r-s)),a.push(n.substring(i-=o,i+o)),!((s+=o+1)>r));)o=e[l=(l+1)%e.length];return a.reverse().join(t)}}function wz(e){return function(t){return t.replace(/[0-9]/g,function(n){return e[+n]})}}var kz=/^(?:(.)?([<>=^]))?([+\-( ])?([$#])?(0)?(\d+)?(,)?(\.\d+)?(~)?([a-z%])?$/i;function Il(e){if(!(t=kz.exec(e)))throw new Error("invalid format: "+e);var t;return new Np({fill:t[1],align:t[2],sign:t[3],symbol:t[4],zero:t[5],width:t[6],comma:t[7],precision:t[8]&&t[8].slice(1),trim:t[9],type:t[10]})}Il.prototype=Np.prototype;function Np(e){this.fill=e.fill===void 0?" ":e.fill+"",this.align=e.align===void 0?">":e.align+"",this.sign=e.sign===void 0?"-":e.sign+"",this.symbol=e.symbol===void 0?"":e.symbol+"",this.zero=!!e.zero,this.width=e.width===void 0?void 0:+e.width,this.comma=!!e.comma,this.precision=e.precision===void 0?void 0:+e.precision,this.trim=!!e.trim,this.type=e.type===void 0?"":e.type+""}Np.prototype.toString=function(){return this.fill+this.align+this.sign+this.symbol+(this.zero?"0":"")+(this.width===void 0?"":Math.max(1,this.width|0))+(this.comma?",":"")+(this.precision===void 0?"":"."+Math.max(0,this.precision|0))+(this.trim?"~":"")+this.type};function _z(e){e:for(var t=e.length,n=1,r=-1,i;n<t;++n)switch(e[n]){case".":r=i=n;break;case"0":r===0&&(r=n),i=n;break;default:if(!+e[n])break e;r>0&&(r=0);break}return r>0?e.slice(0,r)+e.slice(i+1):e}var Kv;function Sz(e,t){var n=ic(e,t);if(!n)return e+"";var r=n[0],i=n[1],a=i-(Kv=Math.max(-8,Math.min(8,Math.floor(i/3)))*3)+1,l=r.length;return a===l?r:a>l?r+new Array(a-l+1).join("0"):a>0?r.slice(0,a)+"."+r.slice(a):"0."+new Array(1-a).join("0")+ic(e,Math.max(0,t+a-1))[0]}function r2(e,t){var n=ic(e,t);if(!n)return e+"";var r=n[0],i=n[1];return i<0?"0."+new Array(-i).join("0")+r:r.length>i+1?r.slice(0,i+1)+"."+r.slice(i+1):r+new Array(i-r.length+2).join("0")}const i2={"%":(e,t)=>(e*100).toFixed(t),b:e=>Math.round(e).toString(2),c:e=>e+"",d:xz,e:(e,t)=>e.toExponential(t),f:(e,t)=>e.toFixed(t),g:(e,t)=>e.toPrecision(t),o:e=>Math.round(e).toString(8),p:(e,t)=>r2(e*100,t),r:r2,s:Sz,X:e=>Math.round(e).toString(16).toUpperCase(),x:e=>Math.round(e).toString(16)};function a2(e){return e}var l2=Array.prototype.map,o2=["y","z","a","f","p","n","µ","m","","k","M","G","T","P","E","Z","Y"];function jz(e){var t=e.grouping===void 0||e.thousands===void 0?a2:bz(l2.call(e.grouping,Number),e.thousands+""),n=e.currency===void 0?"":e.currency[0]+"",r=e.currency===void 0?"":e.currency[1]+"",i=e.decimal===void 0?".":e.decimal+"",a=e.numerals===void 0?a2:wz(l2.call(e.numerals,String)),l=e.percent===void 0?"%":e.percent+"",o=e.minus===void 0?"−":e.minus+"",s=e.nan===void 0?"NaN":e.nan+"";function c(d){d=Il(d);var p=d.fill,h=d.align,x=d.sign,v=d.symbol,w=d.zero,y=d.width,m=d.comma,g=d.precision,_=d.trim,b=d.type;b==="n"?(m=!0,b="g"):i2[b]||(g===void 0&&(g=12),_=!0,b="g"),(w||p==="0"&&h==="=")&&(w=!0,p="0",h="=");var k=v==="$"?n:v==="#"&&/[boxX]/.test(b)?"0"+b.toLowerCase():"",S=v==="$"?r:/[%p]/.test(b)?l:"",j=i2[b],O=/[defgprs%]/.test(b);g=g===void 0?6:/[gprs]/.test(b)?Math.max(1,Math.min(21,g)):Math.max(0,Math.min(20,g));function C(M){var P=k,N=S,z,E,L;if(b==="c")N=j(M)+N,M="";else{M=+M;var F=M<0||1/M<0;if(M=isNaN(M)?s:j(Math.abs(M),g),_&&(M=_z(M)),F&&+M==0&&x!=="+"&&(F=!1),P=(F?x==="("?x:o:x==="-"||x==="("?"":x)+P,N=(b==="s"?o2[8+Kv/3]:"")+N+(F&&x==="("?")":""),O){for(z=-1,E=M.length;++z<E;)if(L=M.charCodeAt(z),48>L||L>57){N=(L===46?i+M.slice(z+1):M.slice(z))+N,M=M.slice(0,z);break}}}m&&!w&&(M=t(M,1/0));var A=P.length+M.length+N.length,I=A<y?new Array(y-A+1).join(p):"";switch(m&&w&&(M=t(I+M,I.length?y-N.length:1/0),I=""),h){case"<":M=P+M+N+I;break;case"=":M=P+I+M+N;break;case"^":M=I.slice(0,A=I.length>>1)+P+M+N+I.slice(A);break;default:M=I+P+M+N;break}return a(M)}return C.toString=function(){return d+""},C}function f(d,p){var h=c((d=Il(d),d.type="f",d)),x=Math.max(-8,Math.min(8,Math.floor(qi(p)/3)))*3,v=Math.pow(10,-x),w=o2[8+x/3];return function(y){return h(v*y)+w}}return{format:c,formatPrefix:f}}var Xo,Ep,Yv;Oz({thousands:",",grouping:[3],currency:["$",""]});function Oz(e){return Xo=jz(e),Ep=Xo.format,Yv=Xo.formatPrefix,Xo}function Pz(e){return Math.max(0,-qi(Math.abs(e)))}function Az(e,t){return Math.max(0,Math.max(-8,Math.min(8,Math.floor(qi(t)/3)))*3-qi(Math.abs(e)))}function Mz(e,t){return e=Math.abs(e),t=Math.abs(t)-e,Math.max(0,qi(t)-qi(e))+1}function Zv(e,t,n,r){var i=uf(e,t,n),a;switch(r=Il(r??",f"),r.type){case"s":{var l=Math.max(Math.abs(e),Math.abs(t));return r.precision==null&&!isNaN(a=Az(i,l))&&(r.precision=a),Yv(r,l)}case"":case"e":case"g":case"p":case"r":{r.precision==null&&!isNaN(a=Mz(i,Math.max(Math.abs(e),Math.abs(t))))&&(r.precision=a-(r.type==="e"));break}case"f":case"%":{r.precision==null&&!isNaN(a=Pz(i))&&(r.precision=a-(r.type==="%")*2);break}}return Ep(r)}function kr(e){var t=e.domain;return e.ticks=function(n){var r=t();return sf(r[0],r[r.length-1],n??10)},e.tickFormat=function(n,r){var i=t();return Zv(i[0],i[i.length-1],n??10,r)},e.nice=function(n){n==null&&(n=10);var r=t(),i=0,a=r.length-1,l=r[i],o=r[a],s,c,f=10;for(o<l&&(c=l,l=o,o=c,c=i,i=a,a=c);f-- >0;){if(c=cf(l,o,n),c===s)return r[i]=l,r[a]=o,t(r);if(c>0)l=Math.floor(l/c)*c,o=Math.ceil(o/c)*c;else if(c<0)l=Math.ceil(l*c)/c,o=Math.floor(o*c)/c;else break;s=c}return e},e}function ac(){var e=Mp();return e.copy=function(){return bo(e,ac())},Ht.apply(e,arguments),kr(e)}function Qv(e){var t;function n(r){return r==null||isNaN(r=+r)?t:r}return n.invert=n,n.domain=n.range=function(r){return arguments.length?(e=Array.from(r,rc),n):e.slice()},n.unknown=function(r){return arguments.length?(t=r,n):t},n.copy=function(){return Qv(e).unknown(t)},e=arguments.length?Array.from(e,rc):[0,1],kr(n)}function Jv(e,t){e=e.slice();var n=0,r=e.length-1,i=e[n],a=e[r],l;return a<i&&(l=n,n=r,r=l,l=i,i=a,a=l),e[n]=t.floor(i),e[r]=t.ceil(a),e}function s2(e){return Math.log(e)}function c2(e){return Math.exp(e)}function Nz(e){return-Math.log(-e)}function Ez(e){return-Math.exp(-e)}function Cz(e){return isFinite(e)?+("1e"+e):e<0?0:e}function $z(e){return e===10?Cz:e===Math.E?Math.exp:t=>Math.pow(e,t)}function Tz(e){return e===Math.E?Math.log:e===10&&Math.log10||e===2&&Math.log2||(e=Math.log(e),t=>Math.log(t)/e)}function u2(e){return(t,n)=>-e(-t,n)}function Cp(e){const t=e(s2,c2),n=t.domain;let r=10,i,a;function l(){return i=Tz(r),a=$z(r),n()[0]<0?(i=u2(i),a=u2(a),e(Nz,Ez)):e(s2,c2),t}return t.base=function(o){return arguments.length?(r=+o,l()):r},t.domain=function(o){return arguments.length?(n(o),l()):n()},t.ticks=o=>{const s=n();let c=s[0],f=s[s.length-1];const d=f<c;d&&([c,f]=[f,c]);let p=i(c),h=i(f),x,v;const w=o==null?10:+o;let y=[];if(!(r%1)&&h-p<w){if(p=Math.floor(p),h=Math.ceil(h),c>0){for(;p<=h;++p)for(x=1;x<r;++x)if(v=p<0?x/a(-p):x*a(p),!(v<c)){if(v>f)break;y.push(v)}}else for(;p<=h;++p)for(x=r-1;x>=1;--x)if(v=p>0?x/a(-p):x*a(p),!(v<c)){if(v>f)break;y.push(v)}y.length*2<w&&(y=sf(c,f,w))}else y=sf(p,h,Math.min(h-p,w)).map(a);return d?y.reverse():y},t.tickFormat=(o,s)=>{if(o==null&&(o=10),s==null&&(s=r===10?"s":","),typeof s!="function"&&(!(r%1)&&(s=Il(s)).precision==null&&(s.trim=!0),s=Ep(s)),o===1/0)return s;const c=Math.max(1,r*o/t.ticks().length);return f=>{let d=f/a(Math.round(i(f)));return d*r<r-.5&&(d*=r),d<=c?s(f):""}},t.nice=()=>n(Jv(n(),{floor:o=>a(Math.floor(i(o))),ceil:o=>a(Math.ceil(i(o)))})),t}function eg(){const e=Cp(xu()).domain([1,10]);return e.copy=()=>bo(e,eg()).base(e.base()),Ht.apply(e,arguments),e}function d2(e){return function(t){return Math.sign(t)*Math.log1p(Math.abs(t/e))}}function f2(e){return function(t){return Math.sign(t)*Math.expm1(Math.abs(t))*e}}function $p(e){var t=1,n=e(d2(t),f2(t));return n.constant=function(r){return arguments.length?e(d2(t=+r),f2(t)):t},kr(n)}function tg(){var e=$p(xu());return e.copy=function(){return bo(e,tg()).constant(e.constant())},Ht.apply(e,arguments)}function p2(e){return function(t){return t<0?-Math.pow(-t,e):Math.pow(t,e)}}function zz(e){return e<0?-Math.sqrt(-e):Math.sqrt(e)}function Iz(e){return e<0?-e*e:e*e}function Tp(e){var t=e(ut,ut),n=1;function r(){return n===1?e(ut,ut):n===.5?e(zz,Iz):e(p2(n),p2(1/n))}return t.exponent=function(i){return arguments.length?(n=+i,r()):n},kr(t)}function zp(){var e=Tp(xu());return e.copy=function(){return bo(e,zp()).exponent(e.exponent())},Ht.apply(e,arguments),e}function Dz(){return zp.apply(null,arguments).exponent(.5)}function h2(e){return Math.sign(e)*e*e}function Lz(e){return Math.sign(e)*Math.sqrt(Math.abs(e))}function ng(){var e=Mp(),t=[0,1],n=!1,r;function i(a){var l=Lz(e(a));return isNaN(l)?r:n?Math.round(l):l}return i.invert=function(a){return e.invert(h2(a))},i.domain=function(a){return arguments.length?(e.domain(a),i):e.domain()},i.range=function(a){return arguments.length?(e.range((t=Array.from(a,rc)).map(h2)),i):t.slice()},i.rangeRound=function(a){return i.range(a).round(!0)},i.round=function(a){return arguments.length?(n=!!a,i):n},i.clamp=function(a){return arguments.length?(e.clamp(a),i):e.clamp()},i.unknown=function(a){return arguments.length?(r=a,i):r},i.copy=function(){return ng(e.domain(),t).round(n).clamp(e.clamp()).unknown(r)},Ht.apply(i,arguments),kr(i)}function rg(){var e=[],t=[],n=[],r;function i(){var l=0,o=Math.max(1,t.length);for(n=new Array(o-1);++l<o;)n[l-1]=UT(e,l/o);return a}function a(l){return l==null||isNaN(l=+l)?r:t[go(n,l)]}return a.invertExtent=function(l){var o=t.indexOf(l);return o<0?[NaN,NaN]:[o>0?n[o-1]:e[0],o<n.length?n[o]:e[e.length-1]]},a.domain=function(l){if(!arguments.length)return e.slice();e=[];for(let o of l)o!=null&&!isNaN(o=+o)&&e.push(o);return e.sort(pr),i()},a.range=function(l){return arguments.length?(t=Array.from(l),i()):t.slice()},a.unknown=function(l){return arguments.length?(r=l,a):r},a.quantiles=function(){return n.slice()},a.copy=function(){return rg().domain(e).range(t).unknown(r)},Ht.apply(a,arguments)}function ig(){var e=0,t=1,n=1,r=[.5],i=[0,1],a;function l(s){return s!=null&&s<=s?i[go(r,s,0,n)]:a}function o(){var s=-1;for(r=new Array(n);++s<n;)r[s]=((s+1)*t-(s-n)*e)/(n+1);return l}return l.domain=function(s){return arguments.length?([e,t]=s,e=+e,t=+t,o()):[e,t]},l.range=function(s){return arguments.length?(n=(i=Array.from(s)).length-1,o()):i.slice()},l.invertExtent=function(s){var c=i.indexOf(s);return c<0?[NaN,NaN]:c<1?[e,r[0]]:c>=n?[r[n-1],t]:[r[c-1],r[c]]},l.unknown=function(s){return arguments.length&&(a=s),l},l.thresholds=function(){return r.slice()},l.copy=function(){return ig().domain([e,t]).range(i).unknown(a)},Ht.apply(kr(l),arguments)}function ag(){var e=[.5],t=[0,1],n,r=1;function i(a){return a!=null&&a<=a?t[go(e,a,0,r)]:n}return i.domain=function(a){return arguments.length?(e=Array.from(a),r=Math.min(e.length,t.length-1),i):e.slice()},i.range=function(a){return arguments.length?(t=Array.from(a),r=Math.min(e.length,t.length-1),i):t.slice()},i.invertExtent=function(a){var l=t.indexOf(a);return[e[l-1],e[l]]},i.unknown=function(a){return arguments.length?(n=a,i):n},i.copy=function(){return ag().domain(e).range(t).unknown(n)},Ht.apply(i,arguments)}const Pd=new Date,Ad=new Date;function Ue(e,t,n,r){function i(a){return e(a=arguments.length===0?new Date:new Date(+a)),a}return i.floor=a=>(e(a=new Date(+a)),a),i.ceil=a=>(e(a=new Date(a-1)),t(a,1),e(a),a),i.round=a=>{const l=i(a),o=i.ceil(a);return a-l<o-a?l:o},i.offset=(a,l)=>(t(a=new Date(+a),l==null?1:Math.floor(l)),a),i.range=(a,l,o)=>{const s=[];if(a=i.ceil(a),o=o==null?1:Math.floor(o),!(a<l)||!(o>0))return s;let c;do s.push(c=new Date(+a)),t(a,o),e(a);while(c<a&&a<l);return s},i.filter=a=>Ue(l=>{if(l>=l)for(;e(l),!a(l);)l.setTime(l-1)},(l,o)=>{if(l>=l)if(o<0)for(;++o<=0;)for(;t(l,-1),!a(l););else for(;--o>=0;)for(;t(l,1),!a(l););}),n&&(i.count=(a,l)=>(Pd.setTime(+a),Ad.setTime(+l),e(Pd),e(Ad),Math.floor(n(Pd,Ad))),i.every=a=>(a=Math.floor(a),!isFinite(a)||!(a>0)?null:a>1?i.filter(r?l=>r(l)%a===0:l=>i.count(0,l)%a===0):i)),i}const lc=Ue(()=>{},(e,t)=>{e.setTime(+e+t)},(e,t)=>t-e);lc.every=e=>(e=Math.floor(e),!isFinite(e)||!(e>0)?null:e>1?Ue(t=>{t.setTime(Math.floor(t/e)*e)},(t,n)=>{t.setTime(+t+n*e)},(t,n)=>(n-t)/e):lc);lc.range;const Pn=1e3,Dt=Pn*60,An=Dt*60,Ln=An*24,Ip=Ln*7,m2=Ln*30,Md=Ln*365,Lr=Ue(e=>{e.setTime(e-e.getMilliseconds())},(e,t)=>{e.setTime(+e+t*Pn)},(e,t)=>(t-e)/Pn,e=>e.getUTCSeconds());Lr.range;const Dp=Ue(e=>{e.setTime(e-e.getMilliseconds()-e.getSeconds()*Pn)},(e,t)=>{e.setTime(+e+t*Dt)},(e,t)=>(t-e)/Dt,e=>e.getMinutes());Dp.range;const Lp=Ue(e=>{e.setUTCSeconds(0,0)},(e,t)=>{e.setTime(+e+t*Dt)},(e,t)=>(t-e)/Dt,e=>e.getUTCMinutes());Lp.range;const Fp=Ue(e=>{e.setTime(e-e.getMilliseconds()-e.getSeconds()*Pn-e.getMinutes()*Dt)},(e,t)=>{e.setTime(+e+t*An)},(e,t)=>(t-e)/An,e=>e.getHours());Fp.range;const Rp=Ue(e=>{e.setUTCMinutes(0,0,0)},(e,t)=>{e.setTime(+e+t*An)},(e,t)=>(t-e)/An,e=>e.getUTCHours());Rp.range;const wo=Ue(e=>e.setHours(0,0,0,0),(e,t)=>e.setDate(e.getDate()+t),(e,t)=>(t-e-(t.getTimezoneOffset()-e.getTimezoneOffset())*Dt)/Ln,e=>e.getDate()-1);wo.range;const bu=Ue(e=>{e.setUTCHours(0,0,0,0)},(e,t)=>{e.setUTCDate(e.getUTCDate()+t)},(e,t)=>(t-e)/Ln,e=>e.getUTCDate()-1);bu.range;const lg=Ue(e=>{e.setUTCHours(0,0,0,0)},(e,t)=>{e.setUTCDate(e.getUTCDate()+t)},(e,t)=>(t-e)/Ln,e=>Math.floor(e/Ln));lg.range;function ii(e){return Ue(t=>{t.setDate(t.getDate()-(t.getDay()+7-e)%7),t.setHours(0,0,0,0)},(t,n)=>{t.setDate(t.getDate()+n*7)},(t,n)=>(n-t-(n.getTimezoneOffset()-t.getTimezoneOffset())*Dt)/Ip)}const wu=ii(0),oc=ii(1),Fz=ii(2),Rz=ii(3),Ki=ii(4),Bz=ii(5),Wz=ii(6);wu.range;oc.range;Fz.range;Rz.range;Ki.range;Bz.range;Wz.range;function ai(e){return Ue(t=>{t.setUTCDate(t.getUTCDate()-(t.getUTCDay()+7-e)%7),t.setUTCHours(0,0,0,0)},(t,n)=>{t.setUTCDate(t.getUTCDate()+n*7)},(t,n)=>(n-t)/Ip)}const ku=ai(0),sc=ai(1),Uz=ai(2),Hz=ai(3),Yi=ai(4),Gz=ai(5),Vz=ai(6);ku.range;sc.range;Uz.range;Hz.range;Yi.range;Gz.range;Vz.range;const Bp=Ue(e=>{e.setDate(1),e.setHours(0,0,0,0)},(e,t)=>{e.setMonth(e.getMonth()+t)},(e,t)=>t.getMonth()-e.getMonth()+(t.getFullYear()-e.getFullYear())*12,e=>e.getMonth());Bp.range;const Wp=Ue(e=>{e.setUTCDate(1),e.setUTCHours(0,0,0,0)},(e,t)=>{e.setUTCMonth(e.getUTCMonth()+t)},(e,t)=>t.getUTCMonth()-e.getUTCMonth()+(t.getUTCFullYear()-e.getUTCFullYear())*12,e=>e.getUTCMonth());Wp.range;const Fn=Ue(e=>{e.setMonth(0,1),e.setHours(0,0,0,0)},(e,t)=>{e.setFullYear(e.getFullYear()+t)},(e,t)=>t.getFullYear()-e.getFullYear(),e=>e.getFullYear());Fn.every=e=>!isFinite(e=Math.floor(e))||!(e>0)?null:Ue(t=>{t.setFullYear(Math.floor(t.getFullYear()/e)*e),t.setMonth(0,1),t.setHours(0,0,0,0)},(t,n)=>{t.setFullYear(t.getFullYear()+n*e)});Fn.range;const Rn=Ue(e=>{e.setUTCMonth(0,1),e.setUTCHours(0,0,0,0)},(e,t)=>{e.setUTCFullYear(e.getUTCFullYear()+t)},(e,t)=>t.getUTCFullYear()-e.getUTCFullYear(),e=>e.getUTCFullYear());Rn.every=e=>!isFinite(e=Math.floor(e))||!(e>0)?null:Ue(t=>{t.setUTCFullYear(Math.floor(t.getUTCFullYear()/e)*e),t.setUTCMonth(0,1),t.setUTCHours(0,0,0,0)},(t,n)=>{t.setUTCFullYear(t.getUTCFullYear()+n*e)});Rn.range;function og(e,t,n,r,i,a){const l=[[Lr,1,Pn],[Lr,5,5*Pn],[Lr,15,15*Pn],[Lr,30,30*Pn],[a,1,Dt],[a,5,5*Dt],[a,15,15*Dt],[a,30,30*Dt],[i,1,An],[i,3,3*An],[i,6,6*An],[i,12,12*An],[r,1,Ln],[r,2,2*Ln],[n,1,Ip],[t,1,m2],[t,3,3*m2],[e,1,Md]];function o(c,f,d){const p=f<c;p&&([c,f]=[f,c]);const h=d&&typeof d.range=="function"?d:s(c,f,d),x=h?h.range(c,+f+1):[];return p?x.reverse():x}function s(c,f,d){const p=Math.abs(f-c)/d,h=Sp(([,,w])=>w).right(l,p);if(h===l.length)return e.every(uf(c/Md,f/Md,d));if(h===0)return lc.every(Math.max(uf(c,f,d),1));const[x,v]=l[p/l[h-1][2]<l[h][2]/p?h-1:h];return x.every(v)}return[o,s]}const[Xz,qz]=og(Rn,Wp,ku,lg,Rp,Lp),[Kz,Yz]=og(Fn,Bp,wu,wo,Fp,Dp);function Nd(e){if(0<=e.y&&e.y<100){var t=new Date(-1,e.m,e.d,e.H,e.M,e.S,e.L);return t.setFullYear(e.y),t}return new Date(e.y,e.m,e.d,e.H,e.M,e.S,e.L)}function Ed(e){if(0<=e.y&&e.y<100){var t=new Date(Date.UTC(-1,e.m,e.d,e.H,e.M,e.S,e.L));return t.setUTCFullYear(e.y),t}return new Date(Date.UTC(e.y,e.m,e.d,e.H,e.M,e.S,e.L))}function Da(e,t,n){return{y:e,m:t,d:n,H:0,M:0,S:0,L:0}}function Zz(e){var t=e.dateTime,n=e.date,r=e.time,i=e.periods,a=e.days,l=e.shortDays,o=e.months,s=e.shortMonths,c=La(i),f=Fa(i),d=La(a),p=Fa(a),h=La(l),x=Fa(l),v=La(o),w=Fa(o),y=La(s),m=Fa(s),g={a:F,A,b:I,B:D,c:null,d:w2,e:w2,f:bI,g:NI,G:CI,H:vI,I:gI,j:xI,L:sg,m:wI,M:kI,p:B,q:W,Q:S2,s:j2,S:_I,u:SI,U:jI,V:OI,w:PI,W:AI,x:null,X:null,y:MI,Y:EI,Z:$I,"%":_2},_={a:X,A:Y,b:le,B:je,c:null,d:k2,e:k2,f:DI,g:XI,G:KI,H:TI,I:zI,j:II,L:ug,m:LI,M:FI,p:ht,q:et,Q:S2,s:j2,S:RI,u:BI,U:WI,V:UI,w:HI,W:GI,x:null,X:null,y:VI,Y:qI,Z:YI,"%":_2},b={a:C,A:M,b:P,B:N,c:z,d:x2,e:x2,f:pI,g:g2,G:v2,H:b2,I:b2,j:cI,L:fI,m:sI,M:uI,p:O,q:oI,Q:mI,s:yI,S:dI,u:nI,U:rI,V:iI,w:tI,W:aI,x:E,X:L,y:g2,Y:v2,Z:lI,"%":hI};g.x=k(n,g),g.X=k(r,g),g.c=k(t,g),_.x=k(n,_),_.X=k(r,_),_.c=k(t,_);function k(V,J){return function(ee){var U=[],ke=-1,re=0,Ee=V.length,Ce,tt,ln;for(ee instanceof Date||(ee=new Date(+ee));++ke<Ee;)V.charCodeAt(ke)===37&&(U.push(V.slice(re,ke)),(tt=y2[Ce=V.charAt(++ke)])!=null?Ce=V.charAt(++ke):tt=Ce==="e"?" ":"0",(ln=J[Ce])&&(Ce=ln(ee,tt)),U.push(Ce),re=ke+1);return U.push(V.slice(re,ke)),U.join("")}}function S(V,J){return function(ee){var U=Da(1900,void 0,1),ke=j(U,V,ee+="",0),re,Ee;if(ke!=ee.length)return null;if("Q"in U)return new Date(U.Q);if("s"in U)return new Date(U.s*1e3+("L"in U?U.L:0));if(J&&!("Z"in U)&&(U.Z=0),"p"in U&&(U.H=U.H%12+U.p*12),U.m===void 0&&(U.m="q"in U?U.q:0),"V"in U){if(U.V<1||U.V>53)return null;"w"in U||(U.w=1),"Z"in U?(re=Ed(Da(U.y,0,1)),Ee=re.getUTCDay(),re=Ee>4||Ee===0?sc.ceil(re):sc(re),re=bu.offset(re,(U.V-1)*7),U.y=re.getUTCFullYear(),U.m=re.getUTCMonth(),U.d=re.getUTCDate()+(U.w+6)%7):(re=Nd(Da(U.y,0,1)),Ee=re.getDay(),re=Ee>4||Ee===0?oc.ceil(re):oc(re),re=wo.offset(re,(U.V-1)*7),U.y=re.getFullYear(),U.m=re.getMonth(),U.d=re.getDate()+(U.w+6)%7)}else("W"in U||"U"in U)&&("w"in U||(U.w="u"in U?U.u%7:"W"in U?1:0),Ee="Z"in U?Ed(Da(U.y,0,1)).getUTCDay():Nd(Da(U.y,0,1)).getDay(),U.m=0,U.d="W"in U?(U.w+6)%7+U.W*7-(Ee+5)%7:U.w+U.U*7-(Ee+6)%7);return"Z"in U?(U.H+=U.Z/100|0,U.M+=U.Z%100,Ed(U)):Nd(U)}}function j(V,J,ee,U){for(var ke=0,re=J.length,Ee=ee.length,Ce,tt;ke<re;){if(U>=Ee)return-1;if(Ce=J.charCodeAt(ke++),Ce===37){if(Ce=J.charAt(ke++),tt=b[Ce in y2?J.charAt(ke++):Ce],!tt||(U=tt(V,ee,U))<0)return-1}else if(Ce!=ee.charCodeAt(U++))return-1}return U}function O(V,J,ee){var U=c.exec(J.slice(ee));return U?(V.p=f.get(U[0].toLowerCase()),ee+U[0].length):-1}function C(V,J,ee){var U=h.exec(J.slice(ee));return U?(V.w=x.get(U[0].toLowerCase()),ee+U[0].length):-1}function M(V,J,ee){var U=d.exec(J.slice(ee));return U?(V.w=p.get(U[0].toLowerCase()),ee+U[0].length):-1}function P(V,J,ee){var U=y.exec(J.slice(ee));return U?(V.m=m.get(U[0].toLowerCase()),ee+U[0].length):-1}function N(V,J,ee){var U=v.exec(J.slice(ee));return U?(V.m=w.get(U[0].toLowerCase()),ee+U[0].length):-1}function z(V,J,ee){return j(V,t,J,ee)}function E(V,J,ee){return j(V,n,J,ee)}function L(V,J,ee){return j(V,r,J,ee)}function F(V){return l[V.getDay()]}function A(V){return a[V.getDay()]}function I(V){return s[V.getMonth()]}function D(V){return o[V.getMonth()]}function B(V){return i[+(V.getHours()>=12)]}function W(V){return 1+~~(V.getMonth()/3)}function X(V){return l[V.getUTCDay()]}function Y(V){return a[V.getUTCDay()]}function le(V){return s[V.getUTCMonth()]}function je(V){return o[V.getUTCMonth()]}function ht(V){return i[+(V.getUTCHours()>=12)]}function et(V){return 1+~~(V.getUTCMonth()/3)}return{format:function(V){var J=k(V+="",g);return J.toString=function(){return V},J},parse:function(V){var J=S(V+="",!1);return J.toString=function(){return V},J},utcFormat:function(V){var J=k(V+="",_);return J.toString=function(){return V},J},utcParse:function(V){var J=S(V+="",!0);return J.toString=function(){return V},J}}}var y2={"-":"",_:" ",0:"0"},qe=/^\s*\d+/,Qz=/^%/,Jz=/[\\^$*+?|[\]().{}]/g;function ae(e,t,n){var r=e<0?"-":"",i=(r?-e:e)+"",a=i.length;return r+(a<n?new Array(n-a+1).join(t)+i:i)}function eI(e){return e.replace(Jz,"\\$&")}function La(e){return new RegExp("^(?:"+e.map(eI).join("|")+")","i")}function Fa(e){return new Map(e.map((t,n)=>[t.toLowerCase(),n]))}function tI(e,t,n){var r=qe.exec(t.slice(n,n+1));return r?(e.w=+r[0],n+r[0].length):-1}function nI(e,t,n){var r=qe.exec(t.slice(n,n+1));return r?(e.u=+r[0],n+r[0].length):-1}function rI(e,t,n){var r=qe.exec(t.slice(n,n+2));return r?(e.U=+r[0],n+r[0].length):-1}function iI(e,t,n){var r=qe.exec(t.slice(n,n+2));return r?(e.V=+r[0],n+r[0].length):-1}function aI(e,t,n){var r=qe.exec(t.slice(n,n+2));return r?(e.W=+r[0],n+r[0].length):-1}function v2(e,t,n){var r=qe.exec(t.slice(n,n+4));return r?(e.y=+r[0],n+r[0].length):-1}function g2(e,t,n){var r=qe.exec(t.slice(n,n+2));return r?(e.y=+r[0]+(+r[0]>68?1900:2e3),n+r[0].length):-1}function lI(e,t,n){var r=/^(Z)|([+-]\d\d)(?::?(\d\d))?/.exec(t.slice(n,n+6));return r?(e.Z=r[1]?0:-(r[2]+(r[3]||"00")),n+r[0].length):-1}function oI(e,t,n){var r=qe.exec(t.slice(n,n+1));return r?(e.q=r[0]*3-3,n+r[0].length):-1}function sI(e,t,n){var r=qe.exec(t.slice(n,n+2));return r?(e.m=r[0]-1,n+r[0].length):-1}function x2(e,t,n){var r=qe.exec(t.slice(n,n+2));return r?(e.d=+r[0],n+r[0].length):-1}function cI(e,t,n){var r=qe.exec(t.slice(n,n+3));return r?(e.m=0,e.d=+r[0],n+r[0].length):-1}function b2(e,t,n){var r=qe.exec(t.slice(n,n+2));return r?(e.H=+r[0],n+r[0].length):-1}function uI(e,t,n){var r=qe.exec(t.slice(n,n+2));return r?(e.M=+r[0],n+r[0].length):-1}function dI(e,t,n){var r=qe.exec(t.slice(n,n+2));return r?(e.S=+r[0],n+r[0].length):-1}function fI(e,t,n){var r=qe.exec(t.slice(n,n+3));return r?(e.L=+r[0],n+r[0].length):-1}function pI(e,t,n){var r=qe.exec(t.slice(n,n+6));return r?(e.L=Math.floor(r[0]/1e3),n+r[0].length):-1}function hI(e,t,n){var r=Qz.exec(t.slice(n,n+1));return r?n+r[0].length:-1}function mI(e,t,n){var r=qe.exec(t.slice(n));return r?(e.Q=+r[0],n+r[0].length):-1}function yI(e,t,n){var r=qe.exec(t.slice(n));return r?(e.s=+r[0],n+r[0].length):-1}function w2(e,t){return ae(e.getDate(),t,2)}function vI(e,t){return ae(e.getHours(),t,2)}function gI(e,t){return ae(e.getHours()%12||12,t,2)}function xI(e,t){return ae(1+wo.count(Fn(e),e),t,3)}function sg(e,t){return ae(e.getMilliseconds(),t,3)}function bI(e,t){return sg(e,t)+"000"}function wI(e,t){return ae(e.getMonth()+1,t,2)}function kI(e,t){return ae(e.getMinutes(),t,2)}function _I(e,t){return ae(e.getSeconds(),t,2)}function SI(e){var t=e.getDay();return t===0?7:t}function jI(e,t){return ae(wu.count(Fn(e)-1,e),t,2)}function cg(e){var t=e.getDay();return t>=4||t===0?Ki(e):Ki.ceil(e)}function OI(e,t){return e=cg(e),ae(Ki.count(Fn(e),e)+(Fn(e).getDay()===4),t,2)}function PI(e){return e.getDay()}function AI(e,t){return ae(oc.count(Fn(e)-1,e),t,2)}function MI(e,t){return ae(e.getFullYear()%100,t,2)}function NI(e,t){return e=cg(e),ae(e.getFullYear()%100,t,2)}function EI(e,t){return ae(e.getFullYear()%1e4,t,4)}function CI(e,t){var n=e.getDay();return e=n>=4||n===0?Ki(e):Ki.ceil(e),ae(e.getFullYear()%1e4,t,4)}function $I(e){var t=e.getTimezoneOffset();return(t>0?"-":(t*=-1,"+"))+ae(t/60|0,"0",2)+ae(t%60,"0",2)}function k2(e,t){return ae(e.getUTCDate(),t,2)}function TI(e,t){return ae(e.getUTCHours(),t,2)}function zI(e,t){return ae(e.getUTCHours()%12||12,t,2)}function II(e,t){return ae(1+bu.count(Rn(e),e),t,3)}function ug(e,t){return ae(e.getUTCMilliseconds(),t,3)}function DI(e,t){return ug(e,t)+"000"}function LI(e,t){return ae(e.getUTCMonth()+1,t,2)}function FI(e,t){return ae(e.getUTCMinutes(),t,2)}function RI(e,t){return ae(e.getUTCSeconds(),t,2)}function BI(e){var t=e.getUTCDay();return t===0?7:t}function WI(e,t){return ae(ku.count(Rn(e)-1,e),t,2)}function dg(e){var t=e.getUTCDay();return t>=4||t===0?Yi(e):Yi.ceil(e)}function UI(e,t){return e=dg(e),ae(Yi.count(Rn(e),e)+(Rn(e).getUTCDay()===4),t,2)}function HI(e){return e.getUTCDay()}function GI(e,t){return ae(sc.count(Rn(e)-1,e),t,2)}function VI(e,t){return ae(e.getUTCFullYear()%100,t,2)}function XI(e,t){return e=dg(e),ae(e.getUTCFullYear()%100,t,2)}function qI(e,t){return ae(e.getUTCFullYear()%1e4,t,4)}function KI(e,t){var n=e.getUTCDay();return e=n>=4||n===0?Yi(e):Yi.ceil(e),ae(e.getUTCFullYear()%1e4,t,4)}function YI(){return"+0000"}function _2(){return"%"}function S2(e){return+e}function j2(e){return Math.floor(+e/1e3)}var ui,fg,pg;ZI({dateTime:"%x, %X",date:"%-m/%-d/%Y",time:"%-I:%M:%S %p",periods:["AM","PM"],days:["Sunday","Monday","Tuesday","Wednesday","Thursday","Friday","Saturday"],shortDays:["Sun","Mon","Tue","Wed","Thu","Fri","Sat"],months:["January","February","March","April","May","June","July","August","September","October","November","December"],shortMonths:["Jan","Feb","Mar","Apr","May","Jun","Jul","Aug","Sep","Oct","Nov","Dec"]});function ZI(e){return ui=Zz(e),fg=ui.format,ui.parse,pg=ui.utcFormat,ui.utcParse,ui}function QI(e){return new Date(e)}function JI(e){return e instanceof Date?+e:+new Date(+e)}function Up(e,t,n,r,i,a,l,o,s,c){var f=Mp(),d=f.invert,p=f.domain,h=c(".%L"),x=c(":%S"),v=c("%I:%M"),w=c("%I %p"),y=c("%a %d"),m=c("%b %d"),g=c("%B"),_=c("%Y");function b(k){return(s(k)<k?h:o(k)<k?x:l(k)<k?v:a(k)<k?w:r(k)<k?i(k)<k?y:m:n(k)<k?g:_)(k)}return f.invert=function(k){return new Date(d(k))},f.domain=function(k){return arguments.length?p(Array.from(k,JI)):p().map(QI)},f.ticks=function(k){var S=p();return e(S[0],S[S.length-1],k??10)},f.tickFormat=function(k,S){return S==null?b:c(S)},f.nice=function(k){var S=p();return(!k||typeof k.range!="function")&&(k=t(S[0],S[S.length-1],k??10)),k?p(Jv(S,k)):f},f.copy=function(){return bo(f,Up(e,t,n,r,i,a,l,o,s,c))},f}function eD(){return Ht.apply(Up(Kz,Yz,Fn,Bp,wu,wo,Fp,Dp,Lr,fg).domain([new Date(2e3,0,1),new Date(2e3,0,2)]),arguments)}function tD(){return Ht.apply(Up(Xz,qz,Rn,Wp,ku,bu,Rp,Lp,Lr,pg).domain([Date.UTC(2e3,0,1),Date.UTC(2e3,0,2)]),arguments)}function _u(){var e=0,t=1,n,r,i,a,l=ut,o=!1,s;function c(d){return d==null||isNaN(d=+d)?s:l(i===0?.5:(d=(a(d)-n)*i,o?Math.max(0,Math.min(1,d)):d))}c.domain=function(d){return arguments.length?([e,t]=d,n=a(e=+e),r=a(t=+t),i=n===r?0:1/(r-n),c):[e,t]},c.clamp=function(d){return arguments.length?(o=!!d,c):o},c.interpolator=function(d){return arguments.length?(l=d,c):l};function f(d){return function(p){var h,x;return arguments.length?([h,x]=p,l=d(h,x),c):[l(0),l(1)]}}return c.range=f(wa),c.rangeRound=f(Ap),c.unknown=function(d){return arguments.length?(s=d,c):s},function(d){return a=d,n=d(e),r=d(t),i=n===r?0:1/(r-n),c}}function _r(e,t){return t.domain(e.domain()).interpolator(e.interpolator()).clamp(e.clamp()).unknown(e.unknown())}function hg(){var e=kr(_u()(ut));return e.copy=function(){return _r(e,hg())},Hn.apply(e,arguments)}function mg(){var e=Cp(_u()).domain([1,10]);return e.copy=function(){return _r(e,mg()).base(e.base())},Hn.apply(e,arguments)}function yg(){var e=$p(_u());return e.copy=function(){return _r(e,yg()).constant(e.constant())},Hn.apply(e,arguments)}function Hp(){var e=Tp(_u());return e.copy=function(){return _r(e,Hp()).exponent(e.exponent())},Hn.apply(e,arguments)}function nD(){return Hp.apply(null,arguments).exponent(.5)}function vg(){var e=[],t=ut;function n(r){if(r!=null&&!isNaN(r=+r))return t((go(e,r,1)-1)/(e.length-1))}return n.domain=function(r){if(!arguments.length)return e.slice();e=[];for(let i of r)i!=null&&!isNaN(i=+i)&&e.push(i);return e.sort(pr),n},n.interpolator=function(r){return arguments.length?(t=r,n):t},n.range=function(){return e.map((r,i)=>t(i/(e.length-1)))},n.quantiles=function(r){return Array.from({length:r+1},(i,a)=>WT(e,a/r))},n.copy=function(){return vg(t).domain(e)},Hn.apply(n,arguments)}function Su(){var e=0,t=.5,n=1,r=1,i,a,l,o,s,c=ut,f,d=!1,p;function h(v){return isNaN(v=+v)?p:(v=.5+((v=+f(v))-a)*(r*v<r*a?o:s),c(d?Math.max(0,Math.min(1,v)):v))}h.domain=function(v){return arguments.length?([e,t,n]=v,i=f(e=+e),a=f(t=+t),l=f(n=+n),o=i===a?0:.5/(a-i),s=a===l?0:.5/(l-a),r=a<i?-1:1,h):[e,t,n]},h.clamp=function(v){return arguments.length?(d=!!v,h):d},h.interpolator=function(v){return arguments.length?(c=v,h):c};function x(v){return function(w){var y,m,g;return arguments.length?([y,m,g]=w,c=hz(v,[y,m,g]),h):[c(0),c(.5),c(1)]}}return h.range=x(wa),h.rangeRound=x(Ap),h.unknown=function(v){return arguments.length?(p=v,h):p},function(v){return f=v,i=v(e),a=v(t),l=v(n),o=i===a?0:.5/(a-i),s=a===l?0:.5/(l-a),r=a<i?-1:1,h}}function gg(){var e=kr(Su()(ut));return e.copy=function(){return _r(e,gg())},Hn.apply(e,arguments)}function xg(){var e=Cp(Su()).domain([.1,1,10]);return e.copy=function(){return _r(e,xg()).base(e.base())},Hn.apply(e,arguments)}function bg(){var e=$p(Su());return e.copy=function(){return _r(e,bg()).constant(e.constant())},Hn.apply(e,arguments)}function Gp(){var e=Tp(Su());return e.copy=function(){return _r(e,Gp()).exponent(e.exponent())},Hn.apply(e,arguments)}function rD(){return Gp.apply(null,arguments).exponent(.5)}const O2=Object.freeze(Object.defineProperty({__proto__:null,scaleBand:Cl,scaleDiverging:gg,scaleDivergingLog:xg,scaleDivergingPow:Gp,scaleDivergingSqrt:rD,scaleDivergingSymlog:bg,scaleIdentity:Qv,scaleImplicit:df,scaleLinear:ac,scaleLog:eg,scaleOrdinal:jp,scalePoint:al,scalePow:zp,scaleQuantile:rg,scaleQuantize:ig,scaleRadial:ng,scaleSequential:hg,scaleSequentialLog:mg,scaleSequentialPow:Hp,scaleSequentialQuantile:vg,scaleSequentialSqrt:nD,scaleSequentialSymlog:yg,scaleSqrt:Dz,scaleSymlog:tg,scaleThreshold:ag,scaleTime:eD,scaleUtc:tD,tickFormat:Zv},Symbol.toStringTag,{value:"Module"}));var iD=pa;function aD(e,t,n){for(var r=-1,i=e.length;++r<i;){var a=e[r],l=t(a);if(l!=null&&(o===void 0?l===l&&!iD(l):n(l,o)))var o=l,s=a}return s}var wg=aD;function lD(e,t){return e>t}var oD=lD,sD=wg,cD=oD,uD=ba;function dD(e){return e&&e.length?sD(e,uD,cD):void 0}var fD=dD;const ju=me(fD);function pD(e,t){return e<t}var hD=pD,mD=wg,yD=hD,vD=ba;function gD(e){return e&&e.length?mD(e,vD,yD):void 0}var xD=gD;const Ou=me(xD);var bD=ap,wD=wr,kD=Mv,_D=wt;function SD(e,t){var n=_D(e)?bD:kD;return n(e,wD(t))}var jD=SD,OD=Pv,PD=jD;function AD(e,t){return OD(PD(e,t),1)}var MD=AD;const ND=me(MD);var ED=bp;function CD(e,t){return ED(e,t)}var $D=CD;const Vp=me($D);var ka=1e9,TD={precision:20,rounding:4,toExpNeg:-7,toExpPos:21,LN10:"2.302585092994045684017991454684364207601101488628772976033327900967572609677352480235997205089598298341967784042286"},qp,Se=!0,Wt="[DecimalError] ",Ur=Wt+"Invalid argument: ",Xp=Wt+"Exponent out of range: ",_a=Math.floor,Cr=Math.pow,zD=/^(\d+(\.\d*)?|\.\d+)(e[+-]?\d+)?$/i,jt,He=1e7,be=7,kg=9007199254740991,cc=_a(kg/be),K={};K.absoluteValue=K.abs=function(){var e=new this.constructor(this);return e.s&&(e.s=1),e};K.comparedTo=K.cmp=function(e){var t,n,r,i,a=this;if(e=new a.constructor(e),a.s!==e.s)return a.s||-e.s;if(a.e!==e.e)return a.e>e.e^a.s<0?1:-1;for(r=a.d.length,i=e.d.length,t=0,n=r<i?r:i;t<n;++t)if(a.d[t]!==e.d[t])return a.d[t]>e.d[t]^a.s<0?1:-1;return r===i?0:r>i^a.s<0?1:-1};K.decimalPlaces=K.dp=function(){var e=this,t=e.d.length-1,n=(t-e.e)*be;if(t=e.d[t],t)for(;t%10==0;t/=10)n--;return n<0?0:n};K.dividedBy=K.div=function(e){return $n(this,new this.constructor(e))};K.dividedToIntegerBy=K.idiv=function(e){var t=this,n=t.constructor;return he($n(t,new n(e),0,1),n.precision)};K.equals=K.eq=function(e){return!this.cmp(e)};K.exponent=function(){return Ie(this)};K.greaterThan=K.gt=function(e){return this.cmp(e)>0};K.greaterThanOrEqualTo=K.gte=function(e){return this.cmp(e)>=0};K.isInteger=K.isint=function(){return this.e>this.d.length-2};K.isNegative=K.isneg=function(){return this.s<0};K.isPositive=K.ispos=function(){return this.s>0};K.isZero=function(){return this.s===0};K.lessThan=K.lt=function(e){return this.cmp(e)<0};K.lessThanOrEqualTo=K.lte=function(e){return this.cmp(e)<1};K.logarithm=K.log=function(e){var t,n=this,r=n.constructor,i=r.precision,a=i+5;if(e===void 0)e=new r(10);else if(e=new r(e),e.s<1||e.eq(jt))throw Error(Wt+"NaN");if(n.s<1)throw Error(Wt+(n.s?"NaN":"-Infinity"));return n.eq(jt)?new r(0):(Se=!1,t=$n(Dl(n,a),Dl(e,a),a),Se=!0,he(t,i))};K.minus=K.sub=function(e){var t=this;return e=new t.constructor(e),t.s==e.s?jg(t,e):_g(t,(e.s=-e.s,e))};K.modulo=K.mod=function(e){var t,n=this,r=n.constructor,i=r.precision;if(e=new r(e),!e.s)throw Error(Wt+"NaN");return n.s?(Se=!1,t=$n(n,e,0,1).times(e),Se=!0,n.minus(t)):he(new r(n),i)};K.naturalExponential=K.exp=function(){return Sg(this)};K.naturalLogarithm=K.ln=function(){return Dl(this)};K.negated=K.neg=function(){var e=new this.constructor(this);return e.s=-e.s||0,e};K.plus=K.add=function(e){var t=this;return e=new t.constructor(e),t.s==e.s?_g(t,e):jg(t,(e.s=-e.s,e))};K.precision=K.sd=function(e){var t,n,r,i=this;if(e!==void 0&&e!==!!e&&e!==1&&e!==0)throw Error(Ur+e);if(t=Ie(i)+1,r=i.d.length-1,n=r*be+1,r=i.d[r],r){for(;r%10==0;r/=10)n--;for(r=i.d[0];r>=10;r/=10)n++}return e&&t>n?t:n};K.squareRoot=K.sqrt=function(){var e,t,n,r,i,a,l,o=this,s=o.constructor;if(o.s<1){if(!o.s)return new s(0);throw Error(Wt+"NaN")}for(e=Ie(o),Se=!1,i=Math.sqrt(+o),i==0||i==1/0?(t=fn(o.d),(t.length+e)%2==0&&(t+="0"),i=Math.sqrt(t),e=_a((e+1)/2)-(e<0||e%2),i==1/0?t="5e"+e:(t=i.toExponential(),t=t.slice(0,t.indexOf("e")+1)+e),r=new s(t)):r=new s(i.toString()),n=s.precision,i=l=n+3;;)if(a=r,r=a.plus($n(o,a,l+2)).times(.5),fn(a.d).slice(0,l)===(t=fn(r.d)).slice(0,l)){if(t=t.slice(l-3,l+1),i==l&&t=="4999"){if(he(a,n+1,0),a.times(a).eq(o)){r=a;break}}else if(t!="9999")break;l+=4}return Se=!0,he(r,n)};K.times=K.mul=function(e){var t,n,r,i,a,l,o,s,c,f=this,d=f.constructor,p=f.d,h=(e=new d(e)).d;if(!f.s||!e.s)return new d(0);for(e.s*=f.s,n=f.e+e.e,s=p.length,c=h.length,s<c&&(a=p,p=h,h=a,l=s,s=c,c=l),a=[],l=s+c,r=l;r--;)a.push(0);for(r=c;--r>=0;){for(t=0,i=s+r;i>r;)o=a[i]+h[r]*p[i-r-1]+t,a[i--]=o%He|0,t=o/He|0;a[i]=(a[i]+t)%He|0}for(;!a[--l];)a.pop();return t?++n:a.shift(),e.d=a,e.e=n,Se?he(e,d.precision):e};K.toDecimalPlaces=K.todp=function(e,t){var n=this,r=n.constructor;return n=new r(n),e===void 0?n:(gn(e,0,ka),t===void 0?t=r.rounding:gn(t,0,8),he(n,e+Ie(n)+1,t))};K.toExponential=function(e,t){var n,r=this,i=r.constructor;return e===void 0?n=Qr(r,!0):(gn(e,0,ka),t===void 0?t=i.rounding:gn(t,0,8),r=he(new i(r),e+1,t),n=Qr(r,!0,e+1)),n};K.toFixed=function(e,t){var n,r,i=this,a=i.constructor;return e===void 0?Qr(i):(gn(e,0,ka),t===void 0?t=a.rounding:gn(t,0,8),r=he(new a(i),e+Ie(i)+1,t),n=Qr(r.abs(),!1,e+Ie(r)+1),i.isneg()&&!i.isZero()?"-"+n:n)};K.toInteger=K.toint=function(){var e=this,t=e.constructor;return he(new t(e),Ie(e)+1,t.rounding)};K.toNumber=function(){return+this};K.toPower=K.pow=function(e){var t,n,r,i,a,l,o=this,s=o.constructor,c=12,f=+(e=new s(e));if(!e.s)return new s(jt);if(o=new s(o),!o.s){if(e.s<1)throw Error(Wt+"Infinity");return o}if(o.eq(jt))return o;if(r=s.precision,e.eq(jt))return he(o,r);if(t=e.e,n=e.d.length-1,l=t>=n,a=o.s,l){if((n=f<0?-f:f)<=kg){for(i=new s(jt),t=Math.ceil(r/be+4),Se=!1;n%2&&(i=i.times(o),A2(i.d,t)),n=_a(n/2),n!==0;)o=o.times(o),A2(o.d,t);return Se=!0,e.s<0?new s(jt).div(i):he(i,r)}}else if(a<0)throw Error(Wt+"NaN");return a=a<0&&e.d[Math.max(t,n)]&1?-1:1,o.s=1,Se=!1,i=e.times(Dl(o,r+c)),Se=!0,i=Sg(i),i.s=a,i};K.toPrecision=function(e,t){var n,r,i=this,a=i.constructor;return e===void 0?(n=Ie(i),r=Qr(i,n<=a.toExpNeg||n>=a.toExpPos)):(gn(e,1,ka),t===void 0?t=a.rounding:gn(t,0,8),i=he(new a(i),e,t),n=Ie(i),r=Qr(i,e<=n||n<=a.toExpNeg,e)),r};K.toSignificantDigits=K.tosd=function(e,t){var n=this,r=n.constructor;return e===void 0?(e=r.precision,t=r.rounding):(gn(e,1,ka),t===void 0?t=r.rounding:gn(t,0,8)),he(new r(n),e,t)};K.toString=K.valueOf=K.val=K.toJSON=K[Symbol.for("nodejs.util.inspect.custom")]=function(){var e=this,t=Ie(e),n=e.constructor;return Qr(e,t<=n.toExpNeg||t>=n.toExpPos)};function _g(e,t){var n,r,i,a,l,o,s,c,f=e.constructor,d=f.precision;if(!e.s||!t.s)return t.s||(t=new f(e)),Se?he(t,d):t;if(s=e.d,c=t.d,l=e.e,i=t.e,s=s.slice(),a=l-i,a){for(a<0?(r=s,a=-a,o=c.length):(r=c,i=l,o=s.length),l=Math.ceil(d/be),o=l>o?l+1:o+1,a>o&&(a=o,r.length=1),r.reverse();a--;)r.push(0);r.reverse()}for(o=s.length,a=c.length,o-a<0&&(a=o,r=c,c=s,s=r),n=0;a;)n=(s[--a]=s[a]+c[a]+n)/He|0,s[a]%=He;for(n&&(s.unshift(n),++i),o=s.length;s[--o]==0;)s.pop();return t.d=s,t.e=i,Se?he(t,d):t}function gn(e,t,n){if(e!==~~e||e<t||e>n)throw Error(Ur+e)}function fn(e){var t,n,r,i=e.length-1,a="",l=e[0];if(i>0){for(a+=l,t=1;t<i;t++)r=e[t]+"",n=be-r.length,n&&(a+=Zn(n)),a+=r;l=e[t],r=l+"",n=be-r.length,n&&(a+=Zn(n))}else if(l===0)return"0";for(;l%10===0;)l/=10;return a+l}var $n=function(){function e(r,i){var a,l=0,o=r.length;for(r=r.slice();o--;)a=r[o]*i+l,r[o]=a%He|0,l=a/He|0;return l&&r.unshift(l),r}function t(r,i,a,l){var o,s;if(a!=l)s=a>l?1:-1;else for(o=s=0;o<a;o++)if(r[o]!=i[o]){s=r[o]>i[o]?1:-1;break}return s}function n(r,i,a){for(var l=0;a--;)r[a]-=l,l=r[a]<i[a]?1:0,r[a]=l*He+r[a]-i[a];for(;!r[0]&&r.length>1;)r.shift()}return function(r,i,a,l){var o,s,c,f,d,p,h,x,v,w,y,m,g,_,b,k,S,j,O=r.constructor,C=r.s==i.s?1:-1,M=r.d,P=i.d;if(!r.s)return new O(r);if(!i.s)throw Error(Wt+"Division by zero");for(s=r.e-i.e,S=P.length,b=M.length,h=new O(C),x=h.d=[],c=0;P[c]==(M[c]||0);)++c;if(P[c]>(M[c]||0)&&--s,a==null?m=a=O.precision:l?m=a+(Ie(r)-Ie(i))+1:m=a,m<0)return new O(0);if(m=m/be+2|0,c=0,S==1)for(f=0,P=P[0],m++;(c<b||f)&&m--;c++)g=f*He+(M[c]||0),x[c]=g/P|0,f=g%P|0;else{for(f=He/(P[0]+1)|0,f>1&&(P=e(P,f),M=e(M,f),S=P.length,b=M.length),_=S,v=M.slice(0,S),w=v.length;w<S;)v[w++]=0;j=P.slice(),j.unshift(0),k=P[0],P[1]>=He/2&&++k;do f=0,o=t(P,v,S,w),o<0?(y=v[0],S!=w&&(y=y*He+(v[1]||0)),f=y/k|0,f>1?(f>=He&&(f=He-1),d=e(P,f),p=d.length,w=v.length,o=t(d,v,p,w),o==1&&(f--,n(d,S<p?j:P,p))):(f==0&&(o=f=1),d=P.slice()),p=d.length,p<w&&d.unshift(0),n(v,d,w),o==-1&&(w=v.length,o=t(P,v,S,w),o<1&&(f++,n(v,S<w?j:P,w))),w=v.length):o===0&&(f++,v=[0]),x[c++]=f,o&&v[0]?v[w++]=M[_]||0:(v=[M[_]],w=1);while((_++<b||v[0]!==void 0)&&m--)}return x[0]||x.shift(),h.e=s,he(h,l?a+Ie(h)+1:a)}}();function Sg(e,t){var n,r,i,a,l,o,s=0,c=0,f=e.constructor,d=f.precision;if(Ie(e)>16)throw Error(Xp+Ie(e));if(!e.s)return new f(jt);for(Se=!1,o=d,l=new f(.03125);e.abs().gte(.1);)e=e.times(l),c+=5;for(r=Math.log(Cr(2,c))/Math.LN10*2+5|0,o+=r,n=i=a=new f(jt),f.precision=o;;){if(i=he(i.times(e),o),n=n.times(++s),l=a.plus($n(i,n,o)),fn(l.d).slice(0,o)===fn(a.d).slice(0,o)){for(;c--;)a=he(a.times(a),o);return f.precision=d,t==null?(Se=!0,he(a,d)):a}a=l}}function Ie(e){for(var t=e.e*be,n=e.d[0];n>=10;n/=10)t++;return t}function Cd(e,t,n){if(t>e.LN10.sd())throw Se=!0,n&&(e.precision=n),Error(Wt+"LN10 precision limit exceeded");return he(new e(e.LN10),t)}function Zn(e){for(var t="";e--;)t+="0";return t}function Dl(e,t){var n,r,i,a,l,o,s,c,f,d=1,p=10,h=e,x=h.d,v=h.constructor,w=v.precision;if(h.s<1)throw Error(Wt+(h.s?"NaN":"-Infinity"));if(h.eq(jt))return new v(0);if(t==null?(Se=!1,c=w):c=t,h.eq(10))return t==null&&(Se=!0),Cd(v,c);if(c+=p,v.precision=c,n=fn(x),r=n.charAt(0),a=Ie(h),Math.abs(a)<15e14){for(;r<7&&r!=1||r==1&&n.charAt(1)>3;)h=h.times(e),n=fn(h.d),r=n.charAt(0),d++;a=Ie(h),r>1?(h=new v("0."+n),a++):h=new v(r+"."+n.slice(1))}else return s=Cd(v,c+2,w).times(a+""),h=Dl(new v(r+"."+n.slice(1)),c-p).plus(s),v.precision=w,t==null?(Se=!0,he(h,w)):h;for(o=l=h=$n(h.minus(jt),h.plus(jt),c),f=he(h.times(h),c),i=3;;){if(l=he(l.times(f),c),s=o.plus($n(l,new v(i),c)),fn(s.d).slice(0,c)===fn(o.d).slice(0,c))return o=o.times(2),a!==0&&(o=o.plus(Cd(v,c+2,w).times(a+""))),o=$n(o,new v(d),c),v.precision=w,t==null?(Se=!0,he(o,w)):o;o=s,i+=2}}function P2(e,t){var n,r,i;for((n=t.indexOf("."))>-1&&(t=t.replace(".","")),(r=t.search(/e/i))>0?(n<0&&(n=r),n+=+t.slice(r+1),t=t.substring(0,r)):n<0&&(n=t.length),r=0;t.charCodeAt(r)===48;)++r;for(i=t.length;t.charCodeAt(i-1)===48;)--i;if(t=t.slice(r,i),t){if(i-=r,n=n-r-1,e.e=_a(n/be),e.d=[],r=(n+1)%be,n<0&&(r+=be),r<i){for(r&&e.d.push(+t.slice(0,r)),i-=be;r<i;)e.d.push(+t.slice(r,r+=be));t=t.slice(r),r=be-t.length}else r-=i;for(;r--;)t+="0";if(e.d.push(+t),Se&&(e.e>cc||e.e<-cc))throw Error(Xp+n)}else e.s=0,e.e=0,e.d=[0];return e}function he(e,t,n){var r,i,a,l,o,s,c,f,d=e.d;for(l=1,a=d[0];a>=10;a/=10)l++;if(r=t-l,r<0)r+=be,i=t,c=d[f=0];else{if(f=Math.ceil((r+1)/be),a=d.length,f>=a)return e;for(c=a=d[f],l=1;a>=10;a/=10)l++;r%=be,i=r-be+l}if(n!==void 0&&(a=Cr(10,l-i-1),o=c/a%10|0,s=t<0||d[f+1]!==void 0||c%a,s=n<4?(o||s)&&(n==0||n==(e.s<0?3:2)):o>5||o==5&&(n==4||s||n==6&&(r>0?i>0?c/Cr(10,l-i):0:d[f-1])%10&1||n==(e.s<0?8:7))),t<1||!d[0])return s?(a=Ie(e),d.length=1,t=t-a-1,d[0]=Cr(10,(be-t%be)%be),e.e=_a(-t/be)||0):(d.length=1,d[0]=e.e=e.s=0),e;if(r==0?(d.length=f,a=1,f--):(d.length=f+1,a=Cr(10,be-r),d[f]=i>0?(c/Cr(10,l-i)%Cr(10,i)|0)*a:0),s)for(;;)if(f==0){(d[0]+=a)==He&&(d[0]=1,++e.e);break}else{if(d[f]+=a,d[f]!=He)break;d[f--]=0,a=1}for(r=d.length;d[--r]===0;)d.pop();if(Se&&(e.e>cc||e.e<-cc))throw Error(Xp+Ie(e));return e}function jg(e,t){var n,r,i,a,l,o,s,c,f,d,p=e.constructor,h=p.precision;if(!e.s||!t.s)return t.s?t.s=-t.s:t=new p(e),Se?he(t,h):t;if(s=e.d,d=t.d,r=t.e,c=e.e,s=s.slice(),l=c-r,l){for(f=l<0,f?(n=s,l=-l,o=d.length):(n=d,r=c,o=s.length),i=Math.max(Math.ceil(h/be),o)+2,l>i&&(l=i,n.length=1),n.reverse(),i=l;i--;)n.push(0);n.reverse()}else{for(i=s.length,o=d.length,f=i<o,f&&(o=i),i=0;i<o;i++)if(s[i]!=d[i]){f=s[i]<d[i];break}l=0}for(f&&(n=s,s=d,d=n,t.s=-t.s),o=s.length,i=d.length-o;i>0;--i)s[o++]=0;for(i=d.length;i>l;){if(s[--i]<d[i]){for(a=i;a&&s[--a]===0;)s[a]=He-1;--s[a],s[i]+=He}s[i]-=d[i]}for(;s[--o]===0;)s.pop();for(;s[0]===0;s.shift())--r;return s[0]?(t.d=s,t.e=r,Se?he(t,h):t):new p(0)}function Qr(e,t,n){var r,i=Ie(e),a=fn(e.d),l=a.length;return t?(n&&(r=n-l)>0?a=a.charAt(0)+"."+a.slice(1)+Zn(r):l>1&&(a=a.charAt(0)+"."+a.slice(1)),a=a+(i<0?"e":"e+")+i):i<0?(a="0."+Zn(-i-1)+a,n&&(r=n-l)>0&&(a+=Zn(r))):i>=l?(a+=Zn(i+1-l),n&&(r=n-i-1)>0&&(a=a+"."+Zn(r))):((r=i+1)<l&&(a=a.slice(0,r)+"."+a.slice(r)),n&&(r=n-l)>0&&(i+1===l&&(a+="."),a+=Zn(r))),e.s<0?"-"+a:a}function A2(e,t){if(e.length>t)return e.length=t,!0}function Og(e){var t,n,r;function i(a){var l=this;if(!(l instanceof i))return new i(a);if(l.constructor=i,a instanceof i){l.s=a.s,l.e=a.e,l.d=(a=a.d)?a.slice():a;return}if(typeof a=="number"){if(a*0!==0)throw Error(Ur+a);if(a>0)l.s=1;else if(a<0)a=-a,l.s=-1;else{l.s=0,l.e=0,l.d=[0];return}if(a===~~a&&a<1e7){l.e=0,l.d=[a];return}return P2(l,a.toString())}else if(typeof a!="string")throw Error(Ur+a);if(a.charCodeAt(0)===45?(a=a.slice(1),l.s=-1):l.s=1,zD.test(a))P2(l,a);else throw Error(Ur+a)}if(i.prototype=K,i.ROUND_UP=0,i.ROUND_DOWN=1,i.ROUND_CEIL=2,i.ROUND_FLOOR=3,i.ROUND_HALF_UP=4,i.ROUND_HALF_DOWN=5,i.ROUND_HALF_EVEN=6,i.ROUND_HALF_CEIL=7,i.ROUND_HALF_FLOOR=8,i.clone=Og,i.config=i.set=ID,e===void 0&&(e={}),e)for(r=["precision","rounding","toExpNeg","toExpPos","LN10"],t=0;t<r.length;)e.hasOwnProperty(n=r[t++])||(e[n]=this[n]);return i.config(e),i}function ID(e){if(!e||typeof e!="object")throw Error(Wt+"Object expected");var t,n,r,i=["precision",1,ka,"rounding",0,8,"toExpNeg",-1/0,0,"toExpPos",0,1/0];for(t=0;t<i.length;t+=3)if((r=e[n=i[t]])!==void 0)if(_a(r)===r&&r>=i[t+1]&&r<=i[t+2])this[n]=r;else throw Error(Ur+n+": "+r);if((r=e[n="LN10"])!==void 0)if(r==Math.LN10)this[n]=new this(r);else throw Error(Ur+n+": "+r);return this}var qp=Og(TD);jt=new qp(1);const pe=qp;function DD(e){return BD(e)||RD(e)||FD(e)||LD()}function LD(){throw new TypeError(`Invalid attempt to spread non-iterable instance.
In order to be iterable, non-array objects must have a [Symbol.iterator]() method.`)}function FD(e,t){if(e){if(typeof e=="string")return mf(e,t);var n=Object.prototype.toString.call(e).slice(8,-1);if(n==="Object"&&e.constructor&&(n=e.constructor.name),n==="Map"||n==="Set")return Array.from(e);if(n==="Arguments"||/^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n))return mf(e,t)}}function RD(e){if(typeof Symbol<"u"&&Symbol.iterator in Object(e))return Array.from(e)}function BD(e){if(Array.isArray(e))return mf(e)}function mf(e,t){(t==null||t>e.length)&&(t=e.length);for(var n=0,r=new Array(t);n<t;n++)r[n]=e[n];return r}var WD=function(t){return t},Pg={},Ag=function(t){return t===Pg},M2=function(t){return function n(){return arguments.length===0||arguments.length===1&&Ag(arguments.length<=0?void 0:arguments[0])?n:t.apply(void 0,arguments)}},UD=function e(t,n){return t===1?n:M2(function(){for(var r=arguments.length,i=new Array(r),a=0;a<r;a++)i[a]=arguments[a];var l=i.filter(function(o){return o!==Pg}).length;return l>=t?n.apply(void 0,i):e(t-l,M2(function(){for(var o=arguments.length,s=new Array(o),c=0;c<o;c++)s[c]=arguments[c];var f=i.map(function(d){return Ag(d)?s.shift():d});return n.apply(void 0,DD(f).concat(s))}))})},Pu=function(t){return UD(t.length,t)},yf=function(t,n){for(var r=[],i=t;i<n;++i)r[i-t]=i;return r},HD=Pu(function(e,t){return Array.isArray(t)?t.map(e):Object.keys(t).map(function(n){return t[n]}).map(e)}),GD=function(){for(var t=arguments.length,n=new Array(t),r=0;r<t;r++)n[r]=arguments[r];if(!n.length)return WD;var i=n.reverse(),a=i[0],l=i.slice(1);return function(){return l.reduce(function(o,s){return s(o)},a.apply(void 0,arguments))}},vf=function(t){return Array.isArray(t)?t.reverse():t.split("").reverse.join("")},Mg=function(t){var n=null,r=null;return function(){for(var i=arguments.length,a=new Array(i),l=0;l<i;l++)a[l]=arguments[l];return n&&a.every(function(o,s){return o===n[s]})||(n=a,r=t.apply(void 0,a)),r}};function VD(e){var t;return e===0?t=1:t=Math.floor(new pe(e).abs().log(10).toNumber())+1,t}function XD(e,t,n){for(var r=new pe(e),i=0,a=[];r.lt(t)&&i<1e5;)a.push(r.toNumber()),r=r.add(n),i++;return a}var qD=Pu(function(e,t,n){var r=+e,i=+t;return r+n*(i-r)}),KD=Pu(function(e,t,n){var r=t-+e;return r=r||1/0,(n-e)/r}),YD=Pu(function(e,t,n){var r=t-+e;return r=r||1/0,Math.max(0,Math.min(1,(n-e)/r))});const Au={rangeStep:XD,getDigitCount:VD,interpolateNumber:qD,uninterpolateNumber:KD,uninterpolateTruncation:YD};function gf(e){return JD(e)||QD(e)||Ng(e)||ZD()}function ZD(){throw new TypeError(`Invalid attempt to spread non-iterable instance.
In order to be iterable, non-array objects must have a [Symbol.iterator]() method.`)}function QD(e){if(typeof Symbol<"u"&&Symbol.iterator in Object(e))return Array.from(e)}function JD(e){if(Array.isArray(e))return xf(e)}function Ll(e,t){return nL(e)||tL(e,t)||Ng(e,t)||eL()}function eL(){throw new TypeError(`Invalid attempt to destructure non-iterable instance.
In order to be iterable, non-array objects must have a [Symbol.iterator]() method.`)}function Ng(e,t){if(e){if(typeof e=="string")return xf(e,t);var n=Object.prototype.toString.call(e).slice(8,-1);if(n==="Object"&&e.constructor&&(n=e.constructor.name),n==="Map"||n==="Set")return Array.from(e);if(n==="Arguments"||/^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n))return xf(e,t)}}function xf(e,t){(t==null||t>e.length)&&(t=e.length);for(var n=0,r=new Array(t);n<t;n++)r[n]=e[n];return r}function tL(e,t){if(!(typeof Symbol>"u"||!(Symbol.iterator in Object(e)))){var n=[],r=!0,i=!1,a=void 0;try{for(var l=e[Symbol.iterator](),o;!(r=(o=l.next()).done)&&(n.push(o.value),!(t&&n.length===t));r=!0);}catch(s){i=!0,a=s}finally{try{!r&&l.return!=null&&l.return()}finally{if(i)throw a}}return n}}function nL(e){if(Array.isArray(e))return e}function Eg(e){var t=Ll(e,2),n=t[0],r=t[1],i=n,a=r;return n>r&&(i=r,a=n),[i,a]}function Cg(e,t,n){if(e.lte(0))return new pe(0);var r=Au.getDigitCount(e.toNumber()),i=new pe(10).pow(r),a=e.div(i),l=r!==1?.05:.1,o=new pe(Math.ceil(a.div(l).toNumber())).add(n).mul(l),s=o.mul(i);return t?s:new pe(Math.ceil(s))}function rL(e,t,n){var r=1,i=new pe(e);if(!i.isint()&&n){var a=Math.abs(e);a<1?(r=new pe(10).pow(Au.getDigitCount(e)-1),i=new pe(Math.floor(i.div(r).toNumber())).mul(r)):a>1&&(i=new pe(Math.floor(e)))}else e===0?i=new pe(Math.floor((t-1)/2)):n||(i=new pe(Math.floor(e)));var l=Math.floor((t-1)/2),o=GD(HD(function(s){return i.add(new pe(s-l).mul(r)).toNumber()}),yf);return o(0,t)}function $g(e,t,n,r){var i=arguments.length>4&&arguments[4]!==void 0?arguments[4]:0;if(!Number.isFinite((t-e)/(n-1)))return{step:new pe(0),tickMin:new pe(0),tickMax:new pe(0)};var a=Cg(new pe(t).sub(e).div(n-1),r,i),l;e<=0&&t>=0?l=new pe(0):(l=new pe(e).add(t).div(2),l=l.sub(new pe(l).mod(a)));var o=Math.ceil(l.sub(e).div(a).toNumber()),s=Math.ceil(new pe(t).sub(l).div(a).toNumber()),c=o+s+1;return c>n?$g(e,t,n,r,i+1):(c<n&&(s=t>0?s+(n-c):s,o=t>0?o:o+(n-c)),{step:a,tickMin:l.sub(new pe(o).mul(a)),tickMax:l.add(new pe(s).mul(a))})}function iL(e){var t=Ll(e,2),n=t[0],r=t[1],i=arguments.length>1&&arguments[1]!==void 0?arguments[1]:6,a=arguments.length>2&&arguments[2]!==void 0?arguments[2]:!0,l=Math.max(i,2),o=Eg([n,r]),s=Ll(o,2),c=s[0],f=s[1];if(c===-1/0||f===1/0){var d=f===1/0?[c].concat(gf(yf(0,i-1).map(function(){return 1/0}))):[].concat(gf(yf(0,i-1).map(function(){return-1/0})),[f]);return n>r?vf(d):d}if(c===f)return rL(c,i,a);var p=$g(c,f,l,a),h=p.step,x=p.tickMin,v=p.tickMax,w=Au.rangeStep(x,v.add(new pe(.1).mul(h)),h);return n>r?vf(w):w}function aL(e,t){var n=Ll(e,2),r=n[0],i=n[1],a=arguments.length>2&&arguments[2]!==void 0?arguments[2]:!0,l=Eg([r,i]),o=Ll(l,2),s=o[0],c=o[1];if(s===-1/0||c===1/0)return[r,i];if(s===c)return[s];var f=Math.max(t,2),d=Cg(new pe(c).sub(s).div(f-1),a,0),p=[].concat(gf(Au.rangeStep(new pe(s),new pe(c).sub(new pe(.99).mul(d)),d)),[c]);return r>i?vf(p):p}var lL=Mg(iL),oL=Mg(aL),sL="Invariant failed";function Jr(e,t){throw new Error(sL)}var cL=["offset","layout","width","dataKey","data","dataPointFormatter","xAxis","yAxis"];function Zi(e){"@babel/helpers - typeof";return Zi=typeof Symbol=="function"&&typeof Symbol.iterator=="symbol"?function(t){return typeof t}:function(t){return t&&typeof Symbol=="function"&&t.constructor===Symbol&&t!==Symbol.prototype?"symbol":typeof t},Zi(e)}function uc(){return uc=Object.assign?Object.assign.bind():function(e){for(var t=1;t<arguments.length;t++){var n=arguments[t];for(var r in n)Object.prototype.hasOwnProperty.call(n,r)&&(e[r]=n[r])}return e},uc.apply(this,arguments)}function uL(e,t){return hL(e)||pL(e,t)||fL(e,t)||dL()}function dL(){throw new TypeError(`Invalid attempt to destructure non-iterable instance.
In order to be iterable, non-array objects must have a [Symbol.iterator]() method.`)}function fL(e,t){if(e){if(typeof e=="string")return N2(e,t);var n=Object.prototype.toString.call(e).slice(8,-1);if(n==="Object"&&e.constructor&&(n=e.constructor.name),n==="Map"||n==="Set")return Array.from(e);if(n==="Arguments"||/^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n))return N2(e,t)}}function N2(e,t){(t==null||t>e.length)&&(t=e.length);for(var n=0,r=new Array(t);n<t;n++)r[n]=e[n];return r}function pL(e,t){var n=e==null?null:typeof Symbol<"u"&&e[Symbol.iterator]||e["@@iterator"];if(n!=null){var r,i,a,l,o=[],s=!0,c=!1;try{if(a=(n=n.call(e)).next,t!==0)for(;!(s=(r=a.call(n)).done)&&(o.push(r.value),o.length!==t);s=!0);}catch(f){c=!0,i=f}finally{try{if(!s&&n.return!=null&&(l=n.return(),Object(l)!==l))return}finally{if(c)throw i}}return o}}function hL(e){if(Array.isArray(e))return e}function mL(e,t){if(e==null)return{};var n=yL(e,t),r,i;if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);for(i=0;i<a.length;i++)r=a[i],!(t.indexOf(r)>=0)&&Object.prototype.propertyIsEnumerable.call(e,r)&&(n[r]=e[r])}return n}function yL(e,t){if(e==null)return{};var n={};for(var r in e)if(Object.prototype.hasOwnProperty.call(e,r)){if(t.indexOf(r)>=0)continue;n[r]=e[r]}return n}function vL(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}function gL(e,t){for(var n=0;n<t.length;n++){var r=t[n];r.enumerable=r.enumerable||!1,r.configurable=!0,"value"in r&&(r.writable=!0),Object.defineProperty(e,Ig(r.key),r)}}function xL(e,t,n){return t&&gL(e.prototype,t),Object.defineProperty(e,"prototype",{writable:!1}),e}function bL(e,t,n){return t=dc(t),wL(e,Tg()?Reflect.construct(t,n||[],dc(e).constructor):t.apply(e,n))}function wL(e,t){if(t&&(Zi(t)==="object"||typeof t=="function"))return t;if(t!==void 0)throw new TypeError("Derived constructors may only return object or undefined");return kL(e)}function kL(e){if(e===void 0)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return e}function Tg(){try{var e=!Boolean.prototype.valueOf.call(Reflect.construct(Boolean,[],function(){}))}catch{}return(Tg=function(){return!!e})()}function dc(e){return dc=Object.setPrototypeOf?Object.getPrototypeOf.bind():function(n){return n.__proto__||Object.getPrototypeOf(n)},dc(e)}function _L(e,t){if(typeof t!="function"&&t!==null)throw new TypeError("Super expression must either be null or a function");e.prototype=Object.create(t&&t.prototype,{constructor:{value:e,writable:!0,configurable:!0}}),Object.defineProperty(e,"prototype",{writable:!1}),t&&bf(e,t)}function bf(e,t){return bf=Object.setPrototypeOf?Object.setPrototypeOf.bind():function(r,i){return r.__proto__=i,r},bf(e,t)}function zg(e,t,n){return t=Ig(t),t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function Ig(e){var t=SL(e,"string");return Zi(t)=="symbol"?t:t+""}function SL(e,t){if(Zi(e)!="object"||!e)return e;var n=e[Symbol.toPrimitive];if(n!==void 0){var r=n.call(e,t);if(Zi(r)!="object")return r;throw new TypeError("@@toPrimitive must return a primitive value.")}return String(e)}var Mu=function(e){function t(){return vL(this,t),bL(this,t,arguments)}return _L(t,e),xL(t,[{key:"render",value:function(){var r=this.props,i=r.offset,a=r.layout,l=r.width,o=r.dataKey,s=r.data,c=r.dataPointFormatter,f=r.xAxis,d=r.yAxis,p=mL(r,cL),h=oe(p,!1);this.props.direction==="x"&&f.type!=="number"&&Jr();var x=s.map(function(v){var w=c(v,o),y=w.x,m=w.y,g=w.value,_=w.errorVal;if(!_)return null;var b=[],k,S;if(Array.isArray(_)){var j=uL(_,2);k=j[0],S=j[1]}else k=S=_;if(a==="vertical"){var O=f.scale,C=m+i,M=C+l,P=C-l,N=O(g-k),z=O(g+S);b.push({x1:z,y1:M,x2:z,y2:P}),b.push({x1:N,y1:C,x2:z,y2:C}),b.push({x1:N,y1:M,x2:N,y2:P})}else if(a==="horizontal"){var E=d.scale,L=y+i,F=L-l,A=L+l,I=E(g-k),D=E(g+S);b.push({x1:F,y1:D,x2:A,y2:D}),b.push({x1:L,y1:I,x2:L,y2:D}),b.push({x1:F,y1:I,x2:A,y2:I})}return T.createElement(Ve,uc({className:"recharts-errorBar",key:"bar-".concat(b.map(function(B){return"".concat(B.x1,"-").concat(B.x2,"-").concat(B.y1,"-").concat(B.y2)}))},h),b.map(function(B){return T.createElement("line",uc({},B,{key:"line-".concat(B.x1,"-").concat(B.x2,"-").concat(B.y1,"-").concat(B.y2)}))}))});return T.createElement(Ve,{className:"recharts-errorBars"},x)}}])}(T.Component);zg(Mu,"defaultProps",{stroke:"black",strokeWidth:1.5,width:5,offset:0,layout:"horizontal"});zg(Mu,"displayName","ErrorBar");function Fl(e){"@babel/helpers - typeof";return Fl=typeof Symbol=="function"&&typeof Symbol.iterator=="symbol"?function(t){return typeof t}:function(t){return t&&typeof Symbol=="function"&&t.constructor===Symbol&&t!==Symbol.prototype?"symbol":typeof t},Fl(e)}function E2(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter(function(i){return Object.getOwnPropertyDescriptor(e,i).enumerable})),n.push.apply(n,r)}return n}function Or(e){for(var t=1;t<arguments.length;t++){var n=arguments[t]!=null?arguments[t]:{};t%2?E2(Object(n),!0).forEach(function(r){jL(e,r,n[r])}):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):E2(Object(n)).forEach(function(r){Object.defineProperty(e,r,Object.getOwnPropertyDescriptor(n,r))})}return e}function jL(e,t,n){return t=OL(t),t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function OL(e){var t=PL(e,"string");return Fl(t)=="symbol"?t:t+""}function PL(e,t){if(Fl(e)!="object"||!e)return e;var n=e[Symbol.toPrimitive];if(n!==void 0){var r=n.call(e,t);if(Fl(r)!="object")return r;throw new TypeError("@@toPrimitive must return a primitive value.")}return(t==="string"?String:Number)(e)}var Dg=function(t){var n=t.children,r=t.formattedGraphicalItems,i=t.legendWidth,a=t.legendContent,l=St(n,fr);if(!l)return null;var o=fr.defaultProps,s=o!==void 0?Or(Or({},o),l.props):{},c;return l.props&&l.props.payload?c=l.props&&l.props.payload:a==="children"?c=(r||[]).reduce(function(f,d){var p=d.item,h=d.props,x=h.sectors||h.data||[];return f.concat(x.map(function(v){return{type:l.props.iconType||p.props.legendType,value:v.name,color:v.fill,payload:v}}))},[]):c=(r||[]).map(function(f){var d=f.item,p=d.type.defaultProps,h=p!==void 0?Or(Or({},p),d.props):{},x=h.dataKey,v=h.name,w=h.legendType,y=h.hide;return{inactive:y,dataKey:x,type:s.iconType||w||"square",color:Kp(d),value:v||x,payload:h}}),Or(Or(Or({},s),fr.getWithHeight(l,i)),{},{payload:c,item:l})};function Rl(e){"@babel/helpers - typeof";return Rl=typeof Symbol=="function"&&typeof Symbol.iterator=="symbol"?function(t){return typeof t}:function(t){return t&&typeof Symbol=="function"&&t.constructor===Symbol&&t!==Symbol.prototype?"symbol":typeof t},Rl(e)}function C2(e){return EL(e)||NL(e)||ML(e)||AL()}function AL(){throw new TypeError(`Invalid attempt to spread non-iterable instance.
In order to be iterable, non-array objects must have a [Symbol.iterator]() method.`)}function ML(e,t){if(e){if(typeof e=="string")return wf(e,t);var n=Object.prototype.toString.call(e).slice(8,-1);if(n==="Object"&&e.constructor&&(n=e.constructor.name),n==="Map"||n==="Set")return Array.from(e);if(n==="Arguments"||/^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n))return wf(e,t)}}function NL(e){if(typeof Symbol<"u"&&e[Symbol.iterator]!=null||e["@@iterator"]!=null)return Array.from(e)}function EL(e){if(Array.isArray(e))return wf(e)}function wf(e,t){(t==null||t>e.length)&&(t=e.length);for(var n=0,r=new Array(t);n<t;n++)r[n]=e[n];return r}function $2(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter(function(i){return Object.getOwnPropertyDescriptor(e,i).enumerable})),n.push.apply(n,r)}return n}function Ne(e){for(var t=1;t<arguments.length;t++){var n=arguments[t]!=null?arguments[t]:{};t%2?$2(Object(n),!0).forEach(function(r){zi(e,r,n[r])}):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):$2(Object(n)).forEach(function(r){Object.defineProperty(e,r,Object.getOwnPropertyDescriptor(n,r))})}return e}function zi(e,t,n){return t=CL(t),t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function CL(e){var t=$L(e,"string");return Rl(t)=="symbol"?t:t+""}function $L(e,t){if(Rl(e)!="object"||!e)return e;var n=e[Symbol.toPrimitive];if(n!==void 0){var r=n.call(e,t);if(Rl(r)!="object")return r;throw new TypeError("@@toPrimitive must return a primitive value.")}return(t==="string"?String:Number)(e)}function xn(e,t,n){return ce(e)||ce(t)?n:We(t)?Ft(e,t,n):te(t)?t(e):n}function ll(e,t,n,r){var i=ND(e,function(o){return xn(o,t)});if(n==="number"){var a=i.filter(function(o){return G(o)||parseFloat(o)});return a.length?[Ou(a),ju(a)]:[1/0,-1/0]}var l=r?i.filter(function(o){return!ce(o)}):i;return l.map(function(o){return We(o)||o instanceof Date?o:""})}var TL=function(t){var n,r=arguments.length>1&&arguments[1]!==void 0?arguments[1]:[],i=arguments.length>2?arguments[2]:void 0,a=arguments.length>3?arguments[3]:void 0,l=-1,o=(n=r==null?void 0:r.length)!==null&&n!==void 0?n:0;if(o<=1)return 0;if(a&&a.axisType==="angleAxis"&&Math.abs(Math.abs(a.range[1]-a.range[0])-360)<=1e-6)for(var s=a.range,c=0;c<o;c++){var f=c>0?i[c-1].coordinate:i[o-1].coordinate,d=i[c].coordinate,p=c>=o-1?i[0].coordinate:i[c+1].coordinate,h=void 0;if(Jt(d-f)!==Jt(p-d)){var x=[];if(Jt(p-d)===Jt(s[1]-s[0])){h=p;var v=d+s[1]-s[0];x[0]=Math.min(v,(v+f)/2),x[1]=Math.max(v,(v+f)/2)}else{h=f;var w=p+s[1]-s[0];x[0]=Math.min(d,(w+d)/2),x[1]=Math.max(d,(w+d)/2)}var y=[Math.min(d,(h+d)/2),Math.max(d,(h+d)/2)];if(t>y[0]&&t<=y[1]||t>=x[0]&&t<=x[1]){l=i[c].index;break}}else{var m=Math.min(f,p),g=Math.max(f,p);if(t>(m+d)/2&&t<=(g+d)/2){l=i[c].index;break}}}else for(var _=0;_<o;_++)if(_===0&&t<=(r[_].coordinate+r[_+1].coordinate)/2||_>0&&_<o-1&&t>(r[_].coordinate+r[_-1].coordinate)/2&&t<=(r[_].coordinate+r[_+1].coordinate)/2||_===o-1&&t>(r[_].coordinate+r[_-1].coordinate)/2){l=r[_].index;break}return l},Kp=function(t){var n,r=t,i=r.type.displayName,a=(n=t.type)!==null&&n!==void 0&&n.defaultProps?Ne(Ne({},t.type.defaultProps),t.props):t.props,l=a.stroke,o=a.fill,s;switch(i){case"Line":s=l;break;case"Area":case"Radar":s=l&&l!=="none"?l:o;break;default:s=o;break}return s},zL=function(t){var n=t.barSize,r=t.totalSize,i=t.stackGroups,a=i===void 0?{}:i;if(!a)return{};for(var l={},o=Object.keys(a),s=0,c=o.length;s<c;s++)for(var f=a[o[s]].stackGroups,d=Object.keys(f),p=0,h=d.length;p<h;p++){var x=f[d[p]],v=x.items,w=x.cateAxisId,y=v.filter(function(S){return En(S.type).indexOf("Bar")>=0});if(y&&y.length){var m=y[0].type.defaultProps,g=m!==void 0?Ne(Ne({},m),y[0].props):y[0].props,_=g.barSize,b=g[w];l[b]||(l[b]=[]);var k=ce(_)?n:_;l[b].push({item:y[0],stackList:y.slice(1),barSize:ce(k)?void 0:Zr(k,r,0)})}}return l},IL=function(t){var n=t.barGap,r=t.barCategoryGap,i=t.bandSize,a=t.sizeList,l=a===void 0?[]:a,o=t.maxBarSize,s=l.length;if(s<1)return null;var c=Zr(n,i,0,!0),f,d=[];if(l[0].barSize===+l[0].barSize){var p=!1,h=i/s,x=l.reduce(function(_,b){return _+b.barSize||0},0);x+=(s-1)*c,x>=i&&(x-=(s-1)*c,c=0),x>=i&&h>0&&(p=!0,h*=.9,x=s*h);var v=(i-x)/2>>0,w={offset:v-c,size:0};f=l.reduce(function(_,b){var k={item:b.item,position:{offset:w.offset+w.size+c,size:p?h:b.barSize}},S=[].concat(C2(_),[k]);return w=S[S.length-1].position,b.stackList&&b.stackList.length&&b.stackList.forEach(function(j){S.push({item:j,position:w})}),S},d)}else{var y=Zr(r,i,0,!0);i-2*y-(s-1)*c<=0&&(c=0);var m=(i-2*y-(s-1)*c)/s;m>1&&(m>>=0);var g=o===+o?Math.min(m,o):m;f=l.reduce(function(_,b,k){var S=[].concat(C2(_),[{item:b.item,position:{offset:y+(m+c)*k+(m-g)/2,size:g}}]);return b.stackList&&b.stackList.length&&b.stackList.forEach(function(j){S.push({item:j,position:S[S.length-1].position})}),S},d)}return f},DL=function(t,n,r,i){var a=r.children,l=r.width,o=r.margin,s=l-(o.left||0)-(o.right||0),c=Dg({children:a,legendWidth:s});if(c){var f=i||{},d=f.width,p=f.height,h=c.align,x=c.verticalAlign,v=c.layout;if((v==="vertical"||v==="horizontal"&&x==="middle")&&h!=="center"&&G(t[h]))return Ne(Ne({},t),{},zi({},h,t[h]+(d||0)));if((v==="horizontal"||v==="vertical"&&h==="center")&&x!=="middle"&&G(t[x]))return Ne(Ne({},t),{},zi({},x,t[x]+(p||0)))}return t},LL=function(t,n,r){return ce(n)?!0:t==="horizontal"?n==="yAxis":t==="vertical"||r==="x"?n==="xAxis":r==="y"?n==="yAxis":!0},Lg=function(t,n,r,i,a){var l=n.props.children,o=nn(l,Mu).filter(function(c){return LL(i,a,c.props.direction)});if(o&&o.length){var s=o.map(function(c){return c.props.dataKey});return t.reduce(function(c,f){var d=xn(f,r);if(ce(d))return c;var p=Array.isArray(d)?[Ou(d),ju(d)]:[d,d],h=s.reduce(function(x,v){var w=xn(f,v,0),y=p[0]-Math.abs(Array.isArray(w)?w[0]:w),m=p[1]+Math.abs(Array.isArray(w)?w[1]:w);return[Math.min(y,x[0]),Math.max(m,x[1])]},[1/0,-1/0]);return[Math.min(h[0],c[0]),Math.max(h[1],c[1])]},[1/0,-1/0])}return null},FL=function(t,n,r,i,a){var l=n.map(function(o){return Lg(t,o,r,a,i)}).filter(function(o){return!ce(o)});return l&&l.length?l.reduce(function(o,s){return[Math.min(o[0],s[0]),Math.max(o[1],s[1])]},[1/0,-1/0]):null},Fg=function(t,n,r,i,a){var l=n.map(function(s){var c=s.props.dataKey;return r==="number"&&c&&Lg(t,s,c,i)||ll(t,c,r,a)});if(r==="number")return l.reduce(function(s,c){return[Math.min(s[0],c[0]),Math.max(s[1],c[1])]},[1/0,-1/0]);var o={};return l.reduce(function(s,c){for(var f=0,d=c.length;f<d;f++)o[c[f]]||(o[c[f]]=!0,s.push(c[f]));return s},[])},Rg=function(t,n){return t==="horizontal"&&n==="xAxis"||t==="vertical"&&n==="yAxis"||t==="centric"&&n==="angleAxis"||t==="radial"&&n==="radiusAxis"},Bg=function(t,n,r,i){if(i)return t.map(function(s){return s.coordinate});var a,l,o=t.map(function(s){return s.coordinate===n&&(a=!0),s.coordinate===r&&(l=!0),s.coordinate});return a||o.push(n),l||o.push(r),o},Mn=function(t,n,r){if(!t)return null;var i=t.scale,a=t.duplicateDomain,l=t.type,o=t.range,s=t.realScaleType==="scaleBand"?i.bandwidth()/2:2,c=(n||r)&&l==="category"&&i.bandwidth?i.bandwidth()/s:0;if(c=t.axisType==="angleAxis"&&(o==null?void 0:o.length)>=2?Jt(o[0]-o[1])*2*c:c,n&&(t.ticks||t.niceTicks)){var f=(t.ticks||t.niceTicks).map(function(d){var p=a?a.indexOf(d):d;return{coordinate:i(p)+c,value:d,offset:c}});return f.filter(function(d){return!mo(d.coordinate)})}return t.isCategorical&&t.categoricalDomain?t.categoricalDomain.map(function(d,p){return{coordinate:i(d)+c,value:d,index:p,offset:c}}):i.ticks&&!r?i.ticks(t.tickCount).map(function(d){return{coordinate:i(d)+c,value:d,offset:c}}):i.domain().map(function(d,p){return{coordinate:i(d)+c,value:a?a[d]:d,index:p,offset:c}})},$d=new WeakMap,qo=function(t,n){if(typeof n!="function")return t;$d.has(t)||$d.set(t,new WeakMap);var r=$d.get(t);if(r.has(n))return r.get(n);var i=function(){t.apply(void 0,arguments),n.apply(void 0,arguments)};return r.set(n,i),i},RL=function(t,n,r){var i=t.scale,a=t.type,l=t.layout,o=t.axisType;if(i==="auto")return l==="radial"&&o==="radiusAxis"?{scale:Cl(),realScaleType:"band"}:l==="radial"&&o==="angleAxis"?{scale:ac(),realScaleType:"linear"}:a==="category"&&n&&(n.indexOf("LineChart")>=0||n.indexOf("AreaChart")>=0||n.indexOf("ComposedChart")>=0&&!r)?{scale:al(),realScaleType:"point"}:a==="category"?{scale:Cl(),realScaleType:"band"}:{scale:ac(),realScaleType:"linear"};if(Yr(i)){var s="scale".concat(fu(i));return{scale:(O2[s]||al)(),realScaleType:O2[s]?s:"point"}}return te(i)?{scale:i}:{scale:al(),realScaleType:"point"}},T2=1e-4,BL=function(t){var n=t.domain();if(!(!n||n.length<=2)){var r=n.length,i=t.range(),a=Math.min(i[0],i[1])-T2,l=Math.max(i[0],i[1])+T2,o=t(n[0]),s=t(n[r-1]);(o<a||o>l||s<a||s>l)&&t.domain([n[0],n[r-1]])}},WL=function(t,n){if(!t)return null;for(var r=0,i=t.length;r<i;r++)if(t[r].item===n)return t[r].position;return null},UL=function(t,n){if(!n||n.length!==2||!G(n[0])||!G(n[1]))return t;var r=Math.min(n[0],n[1]),i=Math.max(n[0],n[1]),a=[t[0],t[1]];return(!G(t[0])||t[0]<r)&&(a[0]=r),(!G(t[1])||t[1]>i)&&(a[1]=i),a[0]>i&&(a[0]=i),a[1]<r&&(a[1]=r),a},HL=function(t){var n=t.length;if(!(n<=0))for(var r=0,i=t[0].length;r<i;++r)for(var a=0,l=0,o=0;o<n;++o){var s=mo(t[o][r][1])?t[o][r][0]:t[o][r][1];s>=0?(t[o][r][0]=a,t[o][r][1]=a+s,a=t[o][r][1]):(t[o][r][0]=l,t[o][r][1]=l+s,l=t[o][r][1])}},GL=function(t){var n=t.length;if(!(n<=0))for(var r=0,i=t[0].length;r<i;++r)for(var a=0,l=0;l<n;++l){var o=mo(t[l][r][1])?t[l][r][0]:t[l][r][1];o>=0?(t[l][r][0]=a,t[l][r][1]=a+o,a=t[l][r][1]):(t[l][r][0]=0,t[l][r][1]=0)}},VL={sign:HL,expand:oj,none:Ui,silhouette:sj,wiggle:cj,positive:GL},XL=function(t,n,r){var i=n.map(function(o){return o.props.dataKey}),a=VL[r],l=lj().keys(i).value(function(o,s){return+xn(o,s,0)}).order(G1).offset(a);return l(t)},qL=function(t,n,r,i,a,l){if(!t)return null;var o=l?n.reverse():n,s={},c=o.reduce(function(d,p){var h,x=(h=p.type)!==null&&h!==void 0&&h.defaultProps?Ne(Ne({},p.type.defaultProps),p.props):p.props,v=x.stackId,w=x.hide;if(w)return d;var y=x[r],m=d[y]||{hasStack:!1,stackGroups:{}};if(We(v)){var g=m.stackGroups[v]||{numericAxisId:r,cateAxisId:i,items:[]};g.items.push(p),m.hasStack=!0,m.stackGroups[v]=g}else m.stackGroups[du("_stackId_")]={numericAxisId:r,cateAxisId:i,items:[p]};return Ne(Ne({},d),{},zi({},y,m))},s),f={};return Object.keys(c).reduce(function(d,p){var h=c[p];if(h.hasStack){var x={};h.stackGroups=Object.keys(h.stackGroups).reduce(function(v,w){var y=h.stackGroups[w];return Ne(Ne({},v),{},zi({},w,{numericAxisId:r,cateAxisId:i,items:y.items,stackedData:XL(t,y.items,a)}))},x)}return Ne(Ne({},d),{},zi({},p,h))},f)},KL=function(t,n){var r=n.realScaleType,i=n.type,a=n.tickCount,l=n.originalDomain,o=n.allowDecimals,s=r||n.scale;if(s!=="auto"&&s!=="linear")return null;if(a&&i==="number"&&l&&(l[0]==="auto"||l[1]==="auto")){var c=t.domain();if(!c.length)return null;var f=lL(c,a,o);return t.domain([Ou(f),ju(f)]),{niceTicks:f}}if(a&&i==="number"){var d=t.domain(),p=oL(d,a,o);return{niceTicks:p}}return null},z2=function(t){var n=t.axis,r=t.ticks,i=t.offset,a=t.bandSize,l=t.entry,o=t.index;if(n.type==="category")return r[o]?r[o].coordinate+i:null;var s=xn(l,n.dataKey,n.domain[o]);return ce(s)?null:n.scale(s)-a/2+i},YL=function(t){var n=t.numericAxis,r=n.scale.domain();if(n.type==="number"){var i=Math.min(r[0],r[1]),a=Math.max(r[0],r[1]);return i<=0&&a>=0?0:a<0?a:i}return r[0]},ZL=function(t,n){var r,i=(r=t.type)!==null&&r!==void 0&&r.defaultProps?Ne(Ne({},t.type.defaultProps),t.props):t.props,a=i.stackId;if(We(a)){var l=n[a];if(l){var o=l.items.indexOf(t);return o>=0?l.stackedData[o]:null}}return null},QL=function(t){return t.reduce(function(n,r){return[Ou(r.concat([n[0]]).filter(G)),ju(r.concat([n[1]]).filter(G))]},[1/0,-1/0])},Wg=function(t,n,r){return Object.keys(t).reduce(function(i,a){var l=t[a],o=l.stackedData,s=o.reduce(function(c,f){var d=QL(f.slice(n,r+1));return[Math.min(c[0],d[0]),Math.max(c[1],d[1])]},[1/0,-1/0]);return[Math.min(s[0],i[0]),Math.max(s[1],i[1])]},[1/0,-1/0]).map(function(i){return i===1/0||i===-1/0?0:i})},I2=/^dataMin[\s]*-[\s]*([0-9]+([.]{1}[0-9]+){0,1})$/,D2=/^dataMax[\s]*\+[\s]*([0-9]+([.]{1}[0-9]+){0,1})$/,kf=function(t,n,r){if(te(t))return t(n,r);if(!Array.isArray(t))return n;var i=[];if(G(t[0]))i[0]=r?t[0]:Math.min(t[0],n[0]);else if(I2.test(t[0])){var a=+I2.exec(t[0])[1];i[0]=n[0]-a}else te(t[0])?i[0]=t[0](n[0]):i[0]=n[0];if(G(t[1]))i[1]=r?t[1]:Math.max(t[1],n[1]);else if(D2.test(t[1])){var l=+D2.exec(t[1])[1];i[1]=n[1]+l}else te(t[1])?i[1]=t[1](n[1]):i[1]=n[1];return i},fc=function(t,n,r){if(t&&t.scale&&t.scale.bandwidth){var i=t.scale.bandwidth();if(!r||i>0)return i}if(t&&n&&n.length>=2){for(var a=kp(n,function(d){return d.coordinate}),l=1/0,o=1,s=a.length;o<s;o++){var c=a[o],f=a[o-1];l=Math.min((c.coordinate||0)-(f.coordinate||0),l)}return l===1/0?0:l}return r?void 0:0},L2=function(t,n,r){return!t||!t.length||Vp(t,Ft(r,"type.defaultProps.domain"))?n:t},Ug=function(t,n){var r=t.type.defaultProps?Ne(Ne({},t.type.defaultProps),t.props):t.props,i=r.dataKey,a=r.name,l=r.unit,o=r.formatter,s=r.tooltipType,c=r.chartType,f=r.hide;return Ne(Ne({},oe(t,!1)),{},{dataKey:i,unit:l,formatter:o,name:a||i,color:Kp(t),value:xn(n,i),type:s,payload:n,chartType:c,hide:f})};function Bl(e){"@babel/helpers - typeof";return Bl=typeof Symbol=="function"&&typeof Symbol.iterator=="symbol"?function(t){return typeof t}:function(t){return t&&typeof Symbol=="function"&&t.constructor===Symbol&&t!==Symbol.prototype?"symbol":typeof t},Bl(e)}function F2(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter(function(i){return Object.getOwnPropertyDescriptor(e,i).enumerable})),n.push.apply(n,r)}return n}function R2(e){for(var t=1;t<arguments.length;t++){var n=arguments[t]!=null?arguments[t]:{};t%2?F2(Object(n),!0).forEach(function(r){JL(e,r,n[r])}):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):F2(Object(n)).forEach(function(r){Object.defineProperty(e,r,Object.getOwnPropertyDescriptor(n,r))})}return e}function JL(e,t,n){return t=eF(t),t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function eF(e){var t=tF(e,"string");return Bl(t)=="symbol"?t:t+""}function tF(e,t){if(Bl(e)!="object"||!e)return e;var n=e[Symbol.toPrimitive];if(n!==void 0){var r=n.call(e,t);if(Bl(r)!="object")return r;throw new TypeError("@@toPrimitive must return a primitive value.")}return(t==="string"?String:Number)(e)}var pc=Math.PI/180,nF=function(t){return t*180/Math.PI},Ze=function(t,n,r,i){return{x:t+Math.cos(-pc*i)*r,y:n+Math.sin(-pc*i)*r}},rF=function(t,n){var r=t.x,i=t.y,a=n.x,l=n.y;return Math.sqrt(Math.pow(r-a,2)+Math.pow(i-l,2))},iF=function(t,n){var r=t.x,i=t.y,a=n.cx,l=n.cy,o=rF({x:r,y:i},{x:a,y:l});if(o<=0)return{radius:o};var s=(r-a)/o,c=Math.acos(s);return i>l&&(c=2*Math.PI-c),{radius:o,angle:nF(c),angleInRadian:c}},aF=function(t){var n=t.startAngle,r=t.endAngle,i=Math.floor(n/360),a=Math.floor(r/360),l=Math.min(i,a);return{startAngle:n-l*360,endAngle:r-l*360}},lF=function(t,n){var r=n.startAngle,i=n.endAngle,a=Math.floor(r/360),l=Math.floor(i/360),o=Math.min(a,l);return t+o*360},B2=function(t,n){var r=t.x,i=t.y,a=iF({x:r,y:i},n),l=a.radius,o=a.angle,s=n.innerRadius,c=n.outerRadius;if(l<s||l>c)return!1;if(l===0)return!0;var f=aF(n),d=f.startAngle,p=f.endAngle,h=o,x;if(d<=p){for(;h>p;)h-=360;for(;h<d;)h+=360;x=h>=d&&h<=p}else{for(;h>d;)h-=360;for(;h<p;)h+=360;x=h>=p&&h<=d}return x?R2(R2({},n),{},{radius:l,angle:lF(h,n)}):null};function Wl(e){"@babel/helpers - typeof";return Wl=typeof Symbol=="function"&&typeof Symbol.iterator=="symbol"?function(t){return typeof t}:function(t){return t&&typeof Symbol=="function"&&t.constructor===Symbol&&t!==Symbol.prototype?"symbol":typeof t},Wl(e)}var oF=["offset"];function sF(e){return fF(e)||dF(e)||uF(e)||cF()}function cF(){throw new TypeError(`Invalid attempt to spread non-iterable instance.
In order to be iterable, non-array objects must have a [Symbol.iterator]() method.`)}function uF(e,t){if(e){if(typeof e=="string")return _f(e,t);var n=Object.prototype.toString.call(e).slice(8,-1);if(n==="Object"&&e.constructor&&(n=e.constructor.name),n==="Map"||n==="Set")return Array.from(e);if(n==="Arguments"||/^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n))return _f(e,t)}}function dF(e){if(typeof Symbol<"u"&&e[Symbol.iterator]!=null||e["@@iterator"]!=null)return Array.from(e)}function fF(e){if(Array.isArray(e))return _f(e)}function _f(e,t){(t==null||t>e.length)&&(t=e.length);for(var n=0,r=new Array(t);n<t;n++)r[n]=e[n];return r}function pF(e,t){if(e==null)return{};var n=hF(e,t),r,i;if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);for(i=0;i<a.length;i++)r=a[i],!(t.indexOf(r)>=0)&&Object.prototype.propertyIsEnumerable.call(e,r)&&(n[r]=e[r])}return n}function hF(e,t){if(e==null)return{};var n={};for(var r in e)if(Object.prototype.hasOwnProperty.call(e,r)){if(t.indexOf(r)>=0)continue;n[r]=e[r]}return n}function W2(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter(function(i){return Object.getOwnPropertyDescriptor(e,i).enumerable})),n.push.apply(n,r)}return n}function Fe(e){for(var t=1;t<arguments.length;t++){var n=arguments[t]!=null?arguments[t]:{};t%2?W2(Object(n),!0).forEach(function(r){mF(e,r,n[r])}):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):W2(Object(n)).forEach(function(r){Object.defineProperty(e,r,Object.getOwnPropertyDescriptor(n,r))})}return e}function mF(e,t,n){return t=yF(t),t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function yF(e){var t=vF(e,"string");return Wl(t)=="symbol"?t:t+""}function vF(e,t){if(Wl(e)!="object"||!e)return e;var n=e[Symbol.toPrimitive];if(n!==void 0){var r=n.call(e,t);if(Wl(r)!="object")return r;throw new TypeError("@@toPrimitive must return a primitive value.")}return(t==="string"?String:Number)(e)}function Ul(){return Ul=Object.assign?Object.assign.bind():function(e){for(var t=1;t<arguments.length;t++){var n=arguments[t];for(var r in n)Object.prototype.hasOwnProperty.call(n,r)&&(e[r]=n[r])}return e},Ul.apply(this,arguments)}var gF=function(t){var n=t.value,r=t.formatter,i=ce(t.children)?n:t.children;return te(r)?r(i):i},xF=function(t,n){var r=Jt(n-t),i=Math.min(Math.abs(n-t),360);return r*i},bF=function(t,n,r){var i=t.position,a=t.viewBox,l=t.offset,o=t.className,s=a,c=s.cx,f=s.cy,d=s.innerRadius,p=s.outerRadius,h=s.startAngle,x=s.endAngle,v=s.clockWise,w=(d+p)/2,y=xF(h,x),m=y>=0?1:-1,g,_;i==="insideStart"?(g=h+m*l,_=v):i==="insideEnd"?(g=x-m*l,_=!v):i==="end"&&(g=x+m*l,_=v),_=y<=0?_:!_;var b=Ze(c,f,w,g),k=Ze(c,f,w,g+(_?1:-1)*359),S="M".concat(b.x,",").concat(b.y,`
    A`).concat(w,",").concat(w,",0,1,").concat(_?0:1,`,
    `).concat(k.x,",").concat(k.y),j=ce(t.id)?du("recharts-radial-line-"):t.id;return T.createElement("text",Ul({},r,{dominantBaseline:"central",className:se("recharts-radial-bar-label",o)}),T.createElement("defs",null,T.createElement("path",{id:j,d:S})),T.createElement("textPath",{xlinkHref:"#".concat(j)},n))},wF=function(t){var n=t.viewBox,r=t.offset,i=t.position,a=n,l=a.cx,o=a.cy,s=a.innerRadius,c=a.outerRadius,f=a.startAngle,d=a.endAngle,p=(f+d)/2;if(i==="outside"){var h=Ze(l,o,c+r,p),x=h.x,v=h.y;return{x,y:v,textAnchor:x>=l?"start":"end",verticalAnchor:"middle"}}if(i==="center")return{x:l,y:o,textAnchor:"middle",verticalAnchor:"middle"};if(i==="centerTop")return{x:l,y:o,textAnchor:"middle",verticalAnchor:"start"};if(i==="centerBottom")return{x:l,y:o,textAnchor:"middle",verticalAnchor:"end"};var w=(s+c)/2,y=Ze(l,o,w,p),m=y.x,g=y.y;return{x:m,y:g,textAnchor:"middle",verticalAnchor:"middle"}},kF=function(t){var n=t.viewBox,r=t.parentViewBox,i=t.offset,a=t.position,l=n,o=l.x,s=l.y,c=l.width,f=l.height,d=f>=0?1:-1,p=d*i,h=d>0?"end":"start",x=d>0?"start":"end",v=c>=0?1:-1,w=v*i,y=v>0?"end":"start",m=v>0?"start":"end";if(a==="top"){var g={x:o+c/2,y:s-d*i,textAnchor:"middle",verticalAnchor:h};return Fe(Fe({},g),r?{height:Math.max(s-r.y,0),width:c}:{})}if(a==="bottom"){var _={x:o+c/2,y:s+f+p,textAnchor:"middle",verticalAnchor:x};return Fe(Fe({},_),r?{height:Math.max(r.y+r.height-(s+f),0),width:c}:{})}if(a==="left"){var b={x:o-w,y:s+f/2,textAnchor:y,verticalAnchor:"middle"};return Fe(Fe({},b),r?{width:Math.max(b.x-r.x,0),height:f}:{})}if(a==="right"){var k={x:o+c+w,y:s+f/2,textAnchor:m,verticalAnchor:"middle"};return Fe(Fe({},k),r?{width:Math.max(r.x+r.width-k.x,0),height:f}:{})}var S=r?{width:c,height:f}:{};return a==="insideLeft"?Fe({x:o+w,y:s+f/2,textAnchor:m,verticalAnchor:"middle"},S):a==="insideRight"?Fe({x:o+c-w,y:s+f/2,textAnchor:y,verticalAnchor:"middle"},S):a==="insideTop"?Fe({x:o+c/2,y:s+p,textAnchor:"middle",verticalAnchor:x},S):a==="insideBottom"?Fe({x:o+c/2,y:s+f-p,textAnchor:"middle",verticalAnchor:h},S):a==="insideTopLeft"?Fe({x:o+w,y:s+p,textAnchor:m,verticalAnchor:x},S):a==="insideTopRight"?Fe({x:o+c-w,y:s+p,textAnchor:y,verticalAnchor:x},S):a==="insideBottomLeft"?Fe({x:o+w,y:s+f-p,textAnchor:m,verticalAnchor:h},S):a==="insideBottomRight"?Fe({x:o+c-w,y:s+f-p,textAnchor:y,verticalAnchor:h},S):ha(a)&&(G(a.x)||Ir(a.x))&&(G(a.y)||Ir(a.y))?Fe({x:o+Zr(a.x,c),y:s+Zr(a.y,f),textAnchor:"end",verticalAnchor:"end"},S):Fe({x:o+c/2,y:s+f/2,textAnchor:"middle",verticalAnchor:"middle"},S)},_F=function(t){return"cx"in t&&G(t.cx)};function lt(e){var t=e.offset,n=t===void 0?5:t,r=pF(e,oF),i=Fe({offset:n},r),a=i.viewBox,l=i.position,o=i.value,s=i.children,c=i.content,f=i.className,d=f===void 0?"":f,p=i.textBreakAll;if(!a||ce(o)&&ce(s)&&!$.isValidElement(c)&&!te(c))return null;if($.isValidElement(c))return $.cloneElement(c,i);var h;if(te(c)){if(h=$.createElement(c,i),$.isValidElement(h))return h}else h=gF(i);var x=_F(a),v=oe(i,!0);if(x&&(l==="insideStart"||l==="insideEnd"||l==="end"))return bF(i,h,v);var w=x?wF(i):kF(i);return T.createElement(Qs,Ul({className:se("recharts-label",d)},v,w,{breakAll:p}),h)}lt.displayName="Label";var Hg=function(t){var n=t.cx,r=t.cy,i=t.angle,a=t.startAngle,l=t.endAngle,o=t.r,s=t.radius,c=t.innerRadius,f=t.outerRadius,d=t.x,p=t.y,h=t.top,x=t.left,v=t.width,w=t.height,y=t.clockWise,m=t.labelViewBox;if(m)return m;if(G(v)&&G(w)){if(G(d)&&G(p))return{x:d,y:p,width:v,height:w};if(G(h)&&G(x))return{x:h,y:x,width:v,height:w}}return G(d)&&G(p)?{x:d,y:p,width:0,height:0}:G(n)&&G(r)?{cx:n,cy:r,startAngle:a||i||0,endAngle:l||i||0,innerRadius:c||0,outerRadius:f||s||o||0,clockWise:y}:t.viewBox?t.viewBox:{}},SF=function(t,n){return t?t===!0?T.createElement(lt,{key:"label-implicit",viewBox:n}):We(t)?T.createElement(lt,{key:"label-implicit",viewBox:n,value:t}):$.isValidElement(t)?t.type===lt?$.cloneElement(t,{key:"label-implicit",viewBox:n}):T.createElement(lt,{key:"label-implicit",content:t,viewBox:n}):te(t)?T.createElement(lt,{key:"label-implicit",content:t,viewBox:n}):ha(t)?T.createElement(lt,Ul({viewBox:n},t,{key:"label-implicit"})):null:null},jF=function(t,n){var r=arguments.length>2&&arguments[2]!==void 0?arguments[2]:!0;if(!t||!t.children&&r&&!t.label)return null;var i=t.children,a=Hg(t),l=nn(i,lt).map(function(s,c){return $.cloneElement(s,{viewBox:n||a,key:"label-".concat(c)})});if(!r)return l;var o=SF(t.label,n||a);return[o].concat(sF(l))};lt.parseViewBox=Hg;lt.renderCallByParent=jF;function OF(e){var t=e==null?0:e.length;return t?e[t-1]:void 0}var PF=OF;const AF=me(PF);function Hl(e){"@babel/helpers - typeof";return Hl=typeof Symbol=="function"&&typeof Symbol.iterator=="symbol"?function(t){return typeof t}:function(t){return t&&typeof Symbol=="function"&&t.constructor===Symbol&&t!==Symbol.prototype?"symbol":typeof t},Hl(e)}var MF=["valueAccessor"],NF=["data","dataKey","clockWise","id","textBreakAll"];function EF(e){return zF(e)||TF(e)||$F(e)||CF()}function CF(){throw new TypeError(`Invalid attempt to spread non-iterable instance.
In order to be iterable, non-array objects must have a [Symbol.iterator]() method.`)}function $F(e,t){if(e){if(typeof e=="string")return Sf(e,t);var n=Object.prototype.toString.call(e).slice(8,-1);if(n==="Object"&&e.constructor&&(n=e.constructor.name),n==="Map"||n==="Set")return Array.from(e);if(n==="Arguments"||/^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n))return Sf(e,t)}}function TF(e){if(typeof Symbol<"u"&&e[Symbol.iterator]!=null||e["@@iterator"]!=null)return Array.from(e)}function zF(e){if(Array.isArray(e))return Sf(e)}function Sf(e,t){(t==null||t>e.length)&&(t=e.length);for(var n=0,r=new Array(t);n<t;n++)r[n]=e[n];return r}function hc(){return hc=Object.assign?Object.assign.bind():function(e){for(var t=1;t<arguments.length;t++){var n=arguments[t];for(var r in n)Object.prototype.hasOwnProperty.call(n,r)&&(e[r]=n[r])}return e},hc.apply(this,arguments)}function U2(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter(function(i){return Object.getOwnPropertyDescriptor(e,i).enumerable})),n.push.apply(n,r)}return n}function H2(e){for(var t=1;t<arguments.length;t++){var n=arguments[t]!=null?arguments[t]:{};t%2?U2(Object(n),!0).forEach(function(r){IF(e,r,n[r])}):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):U2(Object(n)).forEach(function(r){Object.defineProperty(e,r,Object.getOwnPropertyDescriptor(n,r))})}return e}function IF(e,t,n){return t=DF(t),t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function DF(e){var t=LF(e,"string");return Hl(t)=="symbol"?t:t+""}function LF(e,t){if(Hl(e)!="object"||!e)return e;var n=e[Symbol.toPrimitive];if(n!==void 0){var r=n.call(e,t);if(Hl(r)!="object")return r;throw new TypeError("@@toPrimitive must return a primitive value.")}return(t==="string"?String:Number)(e)}function G2(e,t){if(e==null)return{};var n=FF(e,t),r,i;if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);for(i=0;i<a.length;i++)r=a[i],!(t.indexOf(r)>=0)&&Object.prototype.propertyIsEnumerable.call(e,r)&&(n[r]=e[r])}return n}function FF(e,t){if(e==null)return{};var n={};for(var r in e)if(Object.prototype.hasOwnProperty.call(e,r)){if(t.indexOf(r)>=0)continue;n[r]=e[r]}return n}var RF=function(t){return Array.isArray(t.value)?AF(t.value):t.value};function Hr(e){var t=e.valueAccessor,n=t===void 0?RF:t,r=G2(e,MF),i=r.data,a=r.dataKey,l=r.clockWise,o=r.id,s=r.textBreakAll,c=G2(r,NF);return!i||!i.length?null:T.createElement(Ve,{className:"recharts-label-list"},i.map(function(f,d){var p=ce(a)?n(f,d):xn(f&&f.payload,a),h=ce(o)?{}:{id:"".concat(o,"-").concat(d)};return T.createElement(lt,hc({},oe(f,!0),c,h,{parentViewBox:f.parentViewBox,value:p,textBreakAll:s,viewBox:lt.parseViewBox(ce(l)?f:H2(H2({},f),{},{clockWise:l})),key:"label-".concat(d),index:d}))}))}Hr.displayName="LabelList";function BF(e,t){return e?e===!0?T.createElement(Hr,{key:"labelList-implicit",data:t}):T.isValidElement(e)||te(e)?T.createElement(Hr,{key:"labelList-implicit",data:t,content:e}):ha(e)?T.createElement(Hr,hc({data:t},e,{key:"labelList-implicit"})):null:null}function WF(e,t){var n=arguments.length>2&&arguments[2]!==void 0?arguments[2]:!0;if(!e||!e.children&&n&&!e.label)return null;var r=e.children,i=nn(r,Hr).map(function(l,o){return $.cloneElement(l,{data:t,key:"labelList-".concat(o)})});if(!n)return i;var a=BF(e.label,t);return[a].concat(EF(i))}Hr.renderCallByParent=WF;function Gl(e){"@babel/helpers - typeof";return Gl=typeof Symbol=="function"&&typeof Symbol.iterator=="symbol"?function(t){return typeof t}:function(t){return t&&typeof Symbol=="function"&&t.constructor===Symbol&&t!==Symbol.prototype?"symbol":typeof t},Gl(e)}function jf(){return jf=Object.assign?Object.assign.bind():function(e){for(var t=1;t<arguments.length;t++){var n=arguments[t];for(var r in n)Object.prototype.hasOwnProperty.call(n,r)&&(e[r]=n[r])}return e},jf.apply(this,arguments)}function V2(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter(function(i){return Object.getOwnPropertyDescriptor(e,i).enumerable})),n.push.apply(n,r)}return n}function X2(e){for(var t=1;t<arguments.length;t++){var n=arguments[t]!=null?arguments[t]:{};t%2?V2(Object(n),!0).forEach(function(r){UF(e,r,n[r])}):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):V2(Object(n)).forEach(function(r){Object.defineProperty(e,r,Object.getOwnPropertyDescriptor(n,r))})}return e}function UF(e,t,n){return t=HF(t),t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function HF(e){var t=GF(e,"string");return Gl(t)=="symbol"?t:t+""}function GF(e,t){if(Gl(e)!="object"||!e)return e;var n=e[Symbol.toPrimitive];if(n!==void 0){var r=n.call(e,t);if(Gl(r)!="object")return r;throw new TypeError("@@toPrimitive must return a primitive value.")}return(t==="string"?String:Number)(e)}var VF=function(t,n){var r=Jt(n-t),i=Math.min(Math.abs(n-t),359.999);return r*i},Ko=function(t){var n=t.cx,r=t.cy,i=t.radius,a=t.angle,l=t.sign,o=t.isExternal,s=t.cornerRadius,c=t.cornerIsExternal,f=s*(o?1:-1)+i,d=Math.asin(s/f)/pc,p=c?a:a+l*d,h=Ze(n,r,f,p),x=Ze(n,r,i,p),v=c?a-l*d:a,w=Ze(n,r,f*Math.cos(d*pc),v);return{center:h,circleTangency:x,lineTangency:w,theta:d}},Gg=function(t){var n=t.cx,r=t.cy,i=t.innerRadius,a=t.outerRadius,l=t.startAngle,o=t.endAngle,s=VF(l,o),c=l+s,f=Ze(n,r,a,l),d=Ze(n,r,a,c),p="M ".concat(f.x,",").concat(f.y,`
    A `).concat(a,",").concat(a,`,0,
    `).concat(+(Math.abs(s)>180),",").concat(+(l>c),`,
    `).concat(d.x,",").concat(d.y,`
  `);if(i>0){var h=Ze(n,r,i,l),x=Ze(n,r,i,c);p+="L ".concat(x.x,",").concat(x.y,`
            A `).concat(i,",").concat(i,`,0,
            `).concat(+(Math.abs(s)>180),",").concat(+(l<=c),`,
            `).concat(h.x,",").concat(h.y," Z")}else p+="L ".concat(n,",").concat(r," Z");return p},XF=function(t){var n=t.cx,r=t.cy,i=t.innerRadius,a=t.outerRadius,l=t.cornerRadius,o=t.forceCornerRadius,s=t.cornerIsExternal,c=t.startAngle,f=t.endAngle,d=Jt(f-c),p=Ko({cx:n,cy:r,radius:a,angle:c,sign:d,cornerRadius:l,cornerIsExternal:s}),h=p.circleTangency,x=p.lineTangency,v=p.theta,w=Ko({cx:n,cy:r,radius:a,angle:f,sign:-d,cornerRadius:l,cornerIsExternal:s}),y=w.circleTangency,m=w.lineTangency,g=w.theta,_=s?Math.abs(c-f):Math.abs(c-f)-v-g;if(_<0)return o?"M ".concat(x.x,",").concat(x.y,`
        a`).concat(l,",").concat(l,",0,0,1,").concat(l*2,`,0
        a`).concat(l,",").concat(l,",0,0,1,").concat(-l*2,`,0
      `):Gg({cx:n,cy:r,innerRadius:i,outerRadius:a,startAngle:c,endAngle:f});var b="M ".concat(x.x,",").concat(x.y,`
    A`).concat(l,",").concat(l,",0,0,").concat(+(d<0),",").concat(h.x,",").concat(h.y,`
    A`).concat(a,",").concat(a,",0,").concat(+(_>180),",").concat(+(d<0),",").concat(y.x,",").concat(y.y,`
    A`).concat(l,",").concat(l,",0,0,").concat(+(d<0),",").concat(m.x,",").concat(m.y,`
  `);if(i>0){var k=Ko({cx:n,cy:r,radius:i,angle:c,sign:d,isExternal:!0,cornerRadius:l,cornerIsExternal:s}),S=k.circleTangency,j=k.lineTangency,O=k.theta,C=Ko({cx:n,cy:r,radius:i,angle:f,sign:-d,isExternal:!0,cornerRadius:l,cornerIsExternal:s}),M=C.circleTangency,P=C.lineTangency,N=C.theta,z=s?Math.abs(c-f):Math.abs(c-f)-O-N;if(z<0&&l===0)return"".concat(b,"L").concat(n,",").concat(r,"Z");b+="L".concat(P.x,",").concat(P.y,`
      A`).concat(l,",").concat(l,",0,0,").concat(+(d<0),",").concat(M.x,",").concat(M.y,`
      A`).concat(i,",").concat(i,",0,").concat(+(z>180),",").concat(+(d>0),",").concat(S.x,",").concat(S.y,`
      A`).concat(l,",").concat(l,",0,0,").concat(+(d<0),",").concat(j.x,",").concat(j.y,"Z")}else b+="L".concat(n,",").concat(r,"Z");return b},qF={cx:0,cy:0,innerRadius:0,outerRadius:0,startAngle:0,endAngle:0,cornerRadius:0,forceCornerRadius:!1,cornerIsExternal:!1},Vg=function(t){var n=X2(X2({},qF),t),r=n.cx,i=n.cy,a=n.innerRadius,l=n.outerRadius,o=n.cornerRadius,s=n.forceCornerRadius,c=n.cornerIsExternal,f=n.startAngle,d=n.endAngle,p=n.className;if(l<a||f===d)return null;var h=se("recharts-sector",p),x=l-a,v=Zr(o,x,0,!0),w;return v>0&&Math.abs(f-d)<360?w=XF({cx:r,cy:i,innerRadius:a,outerRadius:l,cornerRadius:Math.min(v,x/2),forceCornerRadius:s,cornerIsExternal:c,startAngle:f,endAngle:d}):w=Gg({cx:r,cy:i,innerRadius:a,outerRadius:l,startAngle:f,endAngle:d}),T.createElement("path",jf({},oe(n,!0),{className:h,d:w,role:"img"}))};function Vl(e){"@babel/helpers - typeof";return Vl=typeof Symbol=="function"&&typeof Symbol.iterator=="symbol"?function(t){return typeof t}:function(t){return t&&typeof Symbol=="function"&&t.constructor===Symbol&&t!==Symbol.prototype?"symbol":typeof t},Vl(e)}function Of(){return Of=Object.assign?Object.assign.bind():function(e){for(var t=1;t<arguments.length;t++){var n=arguments[t];for(var r in n)Object.prototype.hasOwnProperty.call(n,r)&&(e[r]=n[r])}return e},Of.apply(this,arguments)}function q2(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter(function(i){return Object.getOwnPropertyDescriptor(e,i).enumerable})),n.push.apply(n,r)}return n}function K2(e){for(var t=1;t<arguments.length;t++){var n=arguments[t]!=null?arguments[t]:{};t%2?q2(Object(n),!0).forEach(function(r){KF(e,r,n[r])}):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):q2(Object(n)).forEach(function(r){Object.defineProperty(e,r,Object.getOwnPropertyDescriptor(n,r))})}return e}function KF(e,t,n){return t=YF(t),t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function YF(e){var t=ZF(e,"string");return Vl(t)=="symbol"?t:t+""}function ZF(e,t){if(Vl(e)!="object"||!e)return e;var n=e[Symbol.toPrimitive];if(n!==void 0){var r=n.call(e,t);if(Vl(r)!="object")return r;throw new TypeError("@@toPrimitive must return a primitive value.")}return(t==="string"?String:Number)(e)}var Y2={curveBasisClosed:KS,curveBasisOpen:YS,curveBasis:qS,curveBumpX:TS,curveBumpY:zS,curveLinearClosed:ZS,curveLinear:hu,curveMonotoneX:QS,curveMonotoneY:JS,curveNatural:ej,curveStep:tj,curveStepAfter:rj,curveStepBefore:nj},Yo=function(t){return t.x===+t.x&&t.y===+t.y},Ra=function(t){return t.x},Ba=function(t){return t.y},QF=function(t,n){if(te(t))return t;var r="curve".concat(fu(t));return(r==="curveMonotone"||r==="curveBump")&&n?Y2["".concat(r).concat(n==="vertical"?"Y":"X")]:Y2[r]||hu},JF=function(t){var n=t.type,r=n===void 0?"linear":n,i=t.points,a=i===void 0?[]:i,l=t.baseLine,o=t.layout,s=t.connectNulls,c=s===void 0?!1:s,f=QF(r,o),d=c?a.filter(function(v){return Yo(v)}):a,p;if(Array.isArray(l)){var h=c?l.filter(function(v){return Yo(v)}):l,x=d.map(function(v,w){return K2(K2({},v),{},{base:h[w]})});return o==="vertical"?p=Ro().y(Ba).x1(Ra).x0(function(v){return v.base.x}):p=Ro().x(Ra).y1(Ba).y0(function(v){return v.base.y}),p.defined(Yo).curve(f),p(x)}return o==="vertical"&&G(l)?p=Ro().y(Ba).x1(Ra).x0(l):G(l)?p=Ro().x(Ra).y1(Ba).y0(l):p=V6().x(Ra).y(Ba),p.defined(Yo).curve(f),p(d)},Z2=function(t){var n=t.className,r=t.points,i=t.path,a=t.pathRef;if((!r||!r.length)&&!i)return null;var l=r&&r.length?JF(t):i;return $.createElement("path",Of({},oe(t,!1),Ds(t),{className:se("recharts-curve",n),d:l,ref:a}))},Xg={exports:{}},eR="SECRET_DO_NOT_PASS_THIS_OR_YOU_WILL_BE_FIRED",tR=eR,nR=tR;function qg(){}function Kg(){}Kg.resetWarningCache=qg;var rR=function(){function e(r,i,a,l,o,s){if(s!==nR){var c=new Error("Calling PropTypes validators directly is not supported by the `prop-types` package. Use PropTypes.checkPropTypes() to call them. Read more at http://fb.me/use-check-prop-types");throw c.name="Invariant Violation",c}}e.isRequired=e;function t(){return e}var n={array:e,bigint:e,bool:e,func:e,number:e,object:e,string:e,symbol:e,any:e,arrayOf:t,element:e,elementType:e,instanceOf:t,node:e,objectOf:t,oneOf:t,oneOfType:t,shape:t,exact:t,checkPropTypes:Kg,resetWarningCache:qg};return n.PropTypes=n,n};Xg.exports=rR();var iR=Xg.exports;const ue=me(iR);var aR=Object.getOwnPropertyNames,lR=Object.getOwnPropertySymbols,oR=Object.prototype.hasOwnProperty;function Q2(e,t){return function(r,i,a){return e(r,i,a)&&t(r,i,a)}}function Zo(e){return function(n,r,i){if(!n||!r||typeof n!="object"||typeof r!="object")return e(n,r,i);var a=i.cache,l=a.get(n),o=a.get(r);if(l&&o)return l===r&&o===n;a.set(n,r),a.set(r,n);var s=e(n,r,i);return a.delete(n),a.delete(r),s}}function sR(e){return e!=null?e[Symbol.toStringTag]:void 0}function J2(e){return aR(e).concat(lR(e))}var cR=Object.hasOwn||function(e,t){return oR.call(e,t)};function li(e,t){return e===t||!e&&!t&&e!==e&&t!==t}var uR="__v",dR="__o",fR="_owner",e5=Object.getOwnPropertyDescriptor,t5=Object.keys;function pR(e,t,n){var r=e.length;if(t.length!==r)return!1;for(;r-- >0;)if(!n.equals(e[r],t[r],r,r,e,t,n))return!1;return!0}function hR(e,t){return li(e.getTime(),t.getTime())}function mR(e,t){return e.name===t.name&&e.message===t.message&&e.cause===t.cause&&e.stack===t.stack}function yR(e,t){return e===t}function n5(e,t,n){var r=e.size;if(r!==t.size)return!1;if(!r)return!0;for(var i=new Array(r),a=e.entries(),l,o,s=0;(l=a.next())&&!l.done;){for(var c=t.entries(),f=!1,d=0;(o=c.next())&&!o.done;){if(i[d]){d++;continue}var p=l.value,h=o.value;if(n.equals(p[0],h[0],s,d,e,t,n)&&n.equals(p[1],h[1],p[0],h[0],e,t,n)){f=i[d]=!0;break}d++}if(!f)return!1;s++}return!0}var vR=li;function gR(e,t,n){var r=t5(e),i=r.length;if(t5(t).length!==i)return!1;for(;i-- >0;)if(!Yg(e,t,n,r[i]))return!1;return!0}function Wa(e,t,n){var r=J2(e),i=r.length;if(J2(t).length!==i)return!1;for(var a,l,o;i-- >0;)if(a=r[i],!Yg(e,t,n,a)||(l=e5(e,a),o=e5(t,a),(l||o)&&(!l||!o||l.configurable!==o.configurable||l.enumerable!==o.enumerable||l.writable!==o.writable)))return!1;return!0}function xR(e,t){return li(e.valueOf(),t.valueOf())}function bR(e,t){return e.source===t.source&&e.flags===t.flags}function r5(e,t,n){var r=e.size;if(r!==t.size)return!1;if(!r)return!0;for(var i=new Array(r),a=e.values(),l,o;(l=a.next())&&!l.done;){for(var s=t.values(),c=!1,f=0;(o=s.next())&&!o.done;){if(!i[f]&&n.equals(l.value,o.value,l.value,o.value,e,t,n)){c=i[f]=!0;break}f++}if(!c)return!1}return!0}function wR(e,t){var n=e.length;if(t.length!==n)return!1;for(;n-- >0;)if(e[n]!==t[n])return!1;return!0}function kR(e,t){return e.hostname===t.hostname&&e.pathname===t.pathname&&e.protocol===t.protocol&&e.port===t.port&&e.hash===t.hash&&e.username===t.username&&e.password===t.password}function Yg(e,t,n,r){return(r===fR||r===dR||r===uR)&&(e.$$typeof||t.$$typeof)?!0:cR(t,r)&&n.equals(e[r],t[r],r,r,e,t,n)}var _R="[object Arguments]",SR="[object Boolean]",jR="[object Date]",OR="[object Error]",PR="[object Map]",AR="[object Number]",MR="[object Object]",NR="[object RegExp]",ER="[object Set]",CR="[object String]",$R="[object URL]",TR=Array.isArray,i5=typeof ArrayBuffer=="function"&&ArrayBuffer.isView?ArrayBuffer.isView:null,a5=Object.assign,zR=Object.prototype.toString.call.bind(Object.prototype.toString);function IR(e){var t=e.areArraysEqual,n=e.areDatesEqual,r=e.areErrorsEqual,i=e.areFunctionsEqual,a=e.areMapsEqual,l=e.areNumbersEqual,o=e.areObjectsEqual,s=e.arePrimitiveWrappersEqual,c=e.areRegExpsEqual,f=e.areSetsEqual,d=e.areTypedArraysEqual,p=e.areUrlsEqual,h=e.unknownTagComparators;return function(v,w,y){if(v===w)return!0;if(v==null||w==null)return!1;var m=typeof v;if(m!==typeof w)return!1;if(m!=="object")return m==="number"?l(v,w,y):m==="function"?i(v,w,y):!1;var g=v.constructor;if(g!==w.constructor)return!1;if(g===Object)return o(v,w,y);if(TR(v))return t(v,w,y);if(i5!=null&&i5(v))return d(v,w,y);if(g===Date)return n(v,w,y);if(g===RegExp)return c(v,w,y);if(g===Map)return a(v,w,y);if(g===Set)return f(v,w,y);var _=zR(v);if(_===jR)return n(v,w,y);if(_===NR)return c(v,w,y);if(_===PR)return a(v,w,y);if(_===ER)return f(v,w,y);if(_===MR)return typeof v.then!="function"&&typeof w.then!="function"&&o(v,w,y);if(_===$R)return p(v,w,y);if(_===OR)return r(v,w,y);if(_===_R)return o(v,w,y);if(_===SR||_===AR||_===CR)return s(v,w,y);if(h){var b=h[_];if(!b){var k=sR(v);k&&(b=h[k])}if(b)return b(v,w,y)}return!1}}function DR(e){var t=e.circular,n=e.createCustomConfig,r=e.strict,i={areArraysEqual:r?Wa:pR,areDatesEqual:hR,areErrorsEqual:mR,areFunctionsEqual:yR,areMapsEqual:r?Q2(n5,Wa):n5,areNumbersEqual:vR,areObjectsEqual:r?Wa:gR,arePrimitiveWrappersEqual:xR,areRegExpsEqual:bR,areSetsEqual:r?Q2(r5,Wa):r5,areTypedArraysEqual:r?Wa:wR,areUrlsEqual:kR,unknownTagComparators:void 0};if(n&&(i=a5({},i,n(i))),t){var a=Zo(i.areArraysEqual),l=Zo(i.areMapsEqual),o=Zo(i.areObjectsEqual),s=Zo(i.areSetsEqual);i=a5({},i,{areArraysEqual:a,areMapsEqual:l,areObjectsEqual:o,areSetsEqual:s})}return i}function LR(e){return function(t,n,r,i,a,l,o){return e(t,n,o)}}function FR(e){var t=e.circular,n=e.comparator,r=e.createState,i=e.equals,a=e.strict;if(r)return function(s,c){var f=r(),d=f.cache,p=d===void 0?t?new WeakMap:void 0:d,h=f.meta;return n(s,c,{cache:p,equals:i,meta:h,strict:a})};if(t)return function(s,c){return n(s,c,{cache:new WeakMap,equals:i,meta:void 0,strict:a})};var l={cache:void 0,equals:i,meta:void 0,strict:a};return function(s,c){return n(s,c,l)}}var RR=Sr();Sr({strict:!0});Sr({circular:!0});Sr({circular:!0,strict:!0});Sr({createInternalComparator:function(){return li}});Sr({strict:!0,createInternalComparator:function(){return li}});Sr({circular:!0,createInternalComparator:function(){return li}});Sr({circular:!0,createInternalComparator:function(){return li},strict:!0});function Sr(e){e===void 0&&(e={});var t=e.circular,n=t===void 0?!1:t,r=e.createInternalComparator,i=e.createState,a=e.strict,l=a===void 0?!1:a,o=DR(e),s=IR(o),c=r?r(s):LR(s);return FR({circular:n,comparator:s,createState:i,equals:c,strict:l})}function BR(e){typeof requestAnimationFrame<"u"&&requestAnimationFrame(e)}function l5(e){var t=arguments.length>1&&arguments[1]!==void 0?arguments[1]:0,n=-1,r=function i(a){n<0&&(n=a),a-n>t?(e(a),n=-1):BR(i)};requestAnimationFrame(r)}function Pf(e){"@babel/helpers - typeof";return Pf=typeof Symbol=="function"&&typeof Symbol.iterator=="symbol"?function(t){return typeof t}:function(t){return t&&typeof Symbol=="function"&&t.constructor===Symbol&&t!==Symbol.prototype?"symbol":typeof t},Pf(e)}function WR(e){return VR(e)||GR(e)||HR(e)||UR()}function UR(){throw new TypeError(`Invalid attempt to destructure non-iterable instance.
In order to be iterable, non-array objects must have a [Symbol.iterator]() method.`)}function HR(e,t){if(e){if(typeof e=="string")return o5(e,t);var n=Object.prototype.toString.call(e).slice(8,-1);if(n==="Object"&&e.constructor&&(n=e.constructor.name),n==="Map"||n==="Set")return Array.from(e);if(n==="Arguments"||/^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n))return o5(e,t)}}function o5(e,t){(t==null||t>e.length)&&(t=e.length);for(var n=0,r=new Array(t);n<t;n++)r[n]=e[n];return r}function GR(e){if(typeof Symbol<"u"&&e[Symbol.iterator]!=null||e["@@iterator"]!=null)return Array.from(e)}function VR(e){if(Array.isArray(e))return e}function XR(){var e={},t=function(){return null},n=!1,r=function i(a){if(!n){if(Array.isArray(a)){if(!a.length)return;var l=a,o=WR(l),s=o[0],c=o.slice(1);if(typeof s=="number"){l5(i.bind(null,c),s);return}i(s),l5(i.bind(null,c));return}Pf(a)==="object"&&(e=a,t(e)),typeof a=="function"&&a()}};return{stop:function(){n=!0},start:function(a){n=!1,r(a)},subscribe:function(a){return t=a,function(){t=function(){return null}}}}}function Xl(e){"@babel/helpers - typeof";return Xl=typeof Symbol=="function"&&typeof Symbol.iterator=="symbol"?function(t){return typeof t}:function(t){return t&&typeof Symbol=="function"&&t.constructor===Symbol&&t!==Symbol.prototype?"symbol":typeof t},Xl(e)}function s5(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter(function(i){return Object.getOwnPropertyDescriptor(e,i).enumerable})),n.push.apply(n,r)}return n}function c5(e){for(var t=1;t<arguments.length;t++){var n=arguments[t]!=null?arguments[t]:{};t%2?s5(Object(n),!0).forEach(function(r){Zg(e,r,n[r])}):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):s5(Object(n)).forEach(function(r){Object.defineProperty(e,r,Object.getOwnPropertyDescriptor(n,r))})}return e}function Zg(e,t,n){return t=qR(t),t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function qR(e){var t=KR(e,"string");return Xl(t)==="symbol"?t:String(t)}function KR(e,t){if(Xl(e)!=="object"||e===null)return e;var n=e[Symbol.toPrimitive];if(n!==void 0){var r=n.call(e,t);if(Xl(r)!=="object")return r;throw new TypeError("@@toPrimitive must return a primitive value.")}return(t==="string"?String:Number)(e)}var YR=function(t,n){return[Object.keys(t),Object.keys(n)].reduce(function(r,i){return r.filter(function(a){return i.includes(a)})})},ZR=function(t){return t},QR=function(t){return t.replace(/([A-Z])/g,function(n){return"-".concat(n.toLowerCase())})},ol=function(t,n){return Object.keys(n).reduce(function(r,i){return c5(c5({},r),{},Zg({},i,t(i,n[i])))},{})},u5=function(t,n,r){return t.map(function(i){return"".concat(QR(i)," ").concat(n,"ms ").concat(r)}).join(",")};function JR(e,t){return nB(e)||tB(e,t)||Qg(e,t)||eB()}function eB(){throw new TypeError(`Invalid attempt to destructure non-iterable instance.
In order to be iterable, non-array objects must have a [Symbol.iterator]() method.`)}function tB(e,t){var n=e==null?null:typeof Symbol<"u"&&e[Symbol.iterator]||e["@@iterator"];if(n!=null){var r,i,a,l,o=[],s=!0,c=!1;try{if(a=(n=n.call(e)).next,t!==0)for(;!(s=(r=a.call(n)).done)&&(o.push(r.value),o.length!==t);s=!0);}catch(f){c=!0,i=f}finally{try{if(!s&&n.return!=null&&(l=n.return(),Object(l)!==l))return}finally{if(c)throw i}}return o}}function nB(e){if(Array.isArray(e))return e}function rB(e){return lB(e)||aB(e)||Qg(e)||iB()}function iB(){throw new TypeError(`Invalid attempt to spread non-iterable instance.
In order to be iterable, non-array objects must have a [Symbol.iterator]() method.`)}function Qg(e,t){if(e){if(typeof e=="string")return Af(e,t);var n=Object.prototype.toString.call(e).slice(8,-1);if(n==="Object"&&e.constructor&&(n=e.constructor.name),n==="Map"||n==="Set")return Array.from(e);if(n==="Arguments"||/^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n))return Af(e,t)}}function aB(e){if(typeof Symbol<"u"&&e[Symbol.iterator]!=null||e["@@iterator"]!=null)return Array.from(e)}function lB(e){if(Array.isArray(e))return Af(e)}function Af(e,t){(t==null||t>e.length)&&(t=e.length);for(var n=0,r=new Array(t);n<t;n++)r[n]=e[n];return r}var mc=1e-4,Jg=function(t,n){return[0,3*t,3*n-6*t,3*t-3*n+1]},e3=function(t,n){return t.map(function(r,i){return r*Math.pow(n,i)}).reduce(function(r,i){return r+i})},d5=function(t,n){return function(r){var i=Jg(t,n);return e3(i,r)}},oB=function(t,n){return function(r){var i=Jg(t,n),a=[].concat(rB(i.map(function(l,o){return l*o}).slice(1)),[0]);return e3(a,r)}},f5=function(){for(var t=arguments.length,n=new Array(t),r=0;r<t;r++)n[r]=arguments[r];var i=n[0],a=n[1],l=n[2],o=n[3];if(n.length===1)switch(n[0]){case"linear":i=0,a=0,l=1,o=1;break;case"ease":i=.25,a=.1,l=.25,o=1;break;case"ease-in":i=.42,a=0,l=1,o=1;break;case"ease-out":i=.42,a=0,l=.58,o=1;break;case"ease-in-out":i=0,a=0,l=.58,o=1;break;default:{var s=n[0].split("(");if(s[0]==="cubic-bezier"&&s[1].split(")")[0].split(",").length===4){var c=s[1].split(")")[0].split(",").map(function(w){return parseFloat(w)}),f=JR(c,4);i=f[0],a=f[1],l=f[2],o=f[3]}}}var d=d5(i,l),p=d5(a,o),h=oB(i,l),x=function(y){return y>1?1:y<0?0:y},v=function(y){for(var m=y>1?1:y,g=m,_=0;_<8;++_){var b=d(g)-m,k=h(g);if(Math.abs(b-m)<mc||k<mc)return p(g);g=x(g-b/k)}return p(g)};return v.isStepper=!1,v},sB=function(){var t=arguments.length>0&&arguments[0]!==void 0?arguments[0]:{},n=t.stiff,r=n===void 0?100:n,i=t.damping,a=i===void 0?8:i,l=t.dt,o=l===void 0?17:l,s=function(f,d,p){var h=-(f-d)*r,x=p*a,v=p+(h-x)*o/1e3,w=p*o/1e3+f;return Math.abs(w-d)<mc&&Math.abs(v)<mc?[d,0]:[w,v]};return s.isStepper=!0,s.dt=o,s},cB=function(){for(var t=arguments.length,n=new Array(t),r=0;r<t;r++)n[r]=arguments[r];var i=n[0];if(typeof i=="string")switch(i){case"ease":case"ease-in-out":case"ease-out":case"ease-in":case"linear":return f5(i);case"spring":return sB();default:if(i.split("(")[0]==="cubic-bezier")return f5(i)}return typeof i=="function"?i:null};function ql(e){"@babel/helpers - typeof";return ql=typeof Symbol=="function"&&typeof Symbol.iterator=="symbol"?function(t){return typeof t}:function(t){return t&&typeof Symbol=="function"&&t.constructor===Symbol&&t!==Symbol.prototype?"symbol":typeof t},ql(e)}function p5(e){return fB(e)||dB(e)||t3(e)||uB()}function uB(){throw new TypeError(`Invalid attempt to spread non-iterable instance.
In order to be iterable, non-array objects must have a [Symbol.iterator]() method.`)}function dB(e){if(typeof Symbol<"u"&&e[Symbol.iterator]!=null||e["@@iterator"]!=null)return Array.from(e)}function fB(e){if(Array.isArray(e))return Nf(e)}function h5(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter(function(i){return Object.getOwnPropertyDescriptor(e,i).enumerable})),n.push.apply(n,r)}return n}function Ke(e){for(var t=1;t<arguments.length;t++){var n=arguments[t]!=null?arguments[t]:{};t%2?h5(Object(n),!0).forEach(function(r){Mf(e,r,n[r])}):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):h5(Object(n)).forEach(function(r){Object.defineProperty(e,r,Object.getOwnPropertyDescriptor(n,r))})}return e}function Mf(e,t,n){return t=pB(t),t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function pB(e){var t=hB(e,"string");return ql(t)==="symbol"?t:String(t)}function hB(e,t){if(ql(e)!=="object"||e===null)return e;var n=e[Symbol.toPrimitive];if(n!==void 0){var r=n.call(e,t);if(ql(r)!=="object")return r;throw new TypeError("@@toPrimitive must return a primitive value.")}return(t==="string"?String:Number)(e)}function mB(e,t){return gB(e)||vB(e,t)||t3(e,t)||yB()}function yB(){throw new TypeError(`Invalid attempt to destructure non-iterable instance.
In order to be iterable, non-array objects must have a [Symbol.iterator]() method.`)}function t3(e,t){if(e){if(typeof e=="string")return Nf(e,t);var n=Object.prototype.toString.call(e).slice(8,-1);if(n==="Object"&&e.constructor&&(n=e.constructor.name),n==="Map"||n==="Set")return Array.from(e);if(n==="Arguments"||/^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n))return Nf(e,t)}}function Nf(e,t){(t==null||t>e.length)&&(t=e.length);for(var n=0,r=new Array(t);n<t;n++)r[n]=e[n];return r}function vB(e,t){var n=e==null?null:typeof Symbol<"u"&&e[Symbol.iterator]||e["@@iterator"];if(n!=null){var r,i,a,l,o=[],s=!0,c=!1;try{if(a=(n=n.call(e)).next,t!==0)for(;!(s=(r=a.call(n)).done)&&(o.push(r.value),o.length!==t);s=!0);}catch(f){c=!0,i=f}finally{try{if(!s&&n.return!=null&&(l=n.return(),Object(l)!==l))return}finally{if(c)throw i}}return o}}function gB(e){if(Array.isArray(e))return e}var yc=function(t,n,r){return t+(n-t)*r},Ef=function(t){var n=t.from,r=t.to;return n!==r},xB=function e(t,n,r){var i=ol(function(a,l){if(Ef(l)){var o=t(l.from,l.to,l.velocity),s=mB(o,2),c=s[0],f=s[1];return Ke(Ke({},l),{},{from:c,velocity:f})}return l},n);return r<1?ol(function(a,l){return Ef(l)?Ke(Ke({},l),{},{velocity:yc(l.velocity,i[a].velocity,r),from:yc(l.from,i[a].from,r)}):l},n):e(t,i,r-1)};const bB=function(e,t,n,r,i){var a=YR(e,t),l=a.reduce(function(w,y){return Ke(Ke({},w),{},Mf({},y,[e[y],t[y]]))},{}),o=a.reduce(function(w,y){return Ke(Ke({},w),{},Mf({},y,{from:e[y],velocity:0,to:t[y]}))},{}),s=-1,c,f,d=function(){return null},p=function(){return ol(function(y,m){return m.from},o)},h=function(){return!Object.values(o).filter(Ef).length},x=function(y){c||(c=y);var m=y-c,g=m/n.dt;o=xB(n,o,g),i(Ke(Ke(Ke({},e),t),p())),c=y,h()||(s=requestAnimationFrame(d))},v=function(y){f||(f=y);var m=(y-f)/r,g=ol(function(b,k){return yc.apply(void 0,p5(k).concat([n(m)]))},l);if(i(Ke(Ke(Ke({},e),t),g)),m<1)s=requestAnimationFrame(d);else{var _=ol(function(b,k){return yc.apply(void 0,p5(k).concat([n(1)]))},l);i(Ke(Ke(Ke({},e),t),_))}};return d=n.isStepper?x:v,function(){return requestAnimationFrame(d),function(){cancelAnimationFrame(s)}}};function Qi(e){"@babel/helpers - typeof";return Qi=typeof Symbol=="function"&&typeof Symbol.iterator=="symbol"?function(t){return typeof t}:function(t){return t&&typeof Symbol=="function"&&t.constructor===Symbol&&t!==Symbol.prototype?"symbol":typeof t},Qi(e)}var wB=["children","begin","duration","attributeName","easing","isActive","steps","from","to","canBegin","onAnimationEnd","shouldReAnimate","onAnimationReStart"];function kB(e,t){if(e==null)return{};var n=_B(e,t),r,i;if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);for(i=0;i<a.length;i++)r=a[i],!(t.indexOf(r)>=0)&&Object.prototype.propertyIsEnumerable.call(e,r)&&(n[r]=e[r])}return n}function _B(e,t){if(e==null)return{};var n={},r=Object.keys(e),i,a;for(a=0;a<r.length;a++)i=r[a],!(t.indexOf(i)>=0)&&(n[i]=e[i]);return n}function Td(e){return PB(e)||OB(e)||jB(e)||SB()}function SB(){throw new TypeError(`Invalid attempt to spread non-iterable instance.
In order to be iterable, non-array objects must have a [Symbol.iterator]() method.`)}function jB(e,t){if(e){if(typeof e=="string")return Cf(e,t);var n=Object.prototype.toString.call(e).slice(8,-1);if(n==="Object"&&e.constructor&&(n=e.constructor.name),n==="Map"||n==="Set")return Array.from(e);if(n==="Arguments"||/^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n))return Cf(e,t)}}function OB(e){if(typeof Symbol<"u"&&e[Symbol.iterator]!=null||e["@@iterator"]!=null)return Array.from(e)}function PB(e){if(Array.isArray(e))return Cf(e)}function Cf(e,t){(t==null||t>e.length)&&(t=e.length);for(var n=0,r=new Array(t);n<t;n++)r[n]=e[n];return r}function m5(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter(function(i){return Object.getOwnPropertyDescriptor(e,i).enumerable})),n.push.apply(n,r)}return n}function Vt(e){for(var t=1;t<arguments.length;t++){var n=arguments[t]!=null?arguments[t]:{};t%2?m5(Object(n),!0).forEach(function(r){qa(e,r,n[r])}):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):m5(Object(n)).forEach(function(r){Object.defineProperty(e,r,Object.getOwnPropertyDescriptor(n,r))})}return e}function qa(e,t,n){return t=n3(t),t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function AB(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}function MB(e,t){for(var n=0;n<t.length;n++){var r=t[n];r.enumerable=r.enumerable||!1,r.configurable=!0,"value"in r&&(r.writable=!0),Object.defineProperty(e,n3(r.key),r)}}function NB(e,t,n){return t&&MB(e.prototype,t),Object.defineProperty(e,"prototype",{writable:!1}),e}function n3(e){var t=EB(e,"string");return Qi(t)==="symbol"?t:String(t)}function EB(e,t){if(Qi(e)!=="object"||e===null)return e;var n=e[Symbol.toPrimitive];if(n!==void 0){var r=n.call(e,t);if(Qi(r)!=="object")return r;throw new TypeError("@@toPrimitive must return a primitive value.")}return(t==="string"?String:Number)(e)}function CB(e,t){if(typeof t!="function"&&t!==null)throw new TypeError("Super expression must either be null or a function");e.prototype=Object.create(t&&t.prototype,{constructor:{value:e,writable:!0,configurable:!0}}),Object.defineProperty(e,"prototype",{writable:!1}),t&&$f(e,t)}function $f(e,t){return $f=Object.setPrototypeOf?Object.setPrototypeOf.bind():function(r,i){return r.__proto__=i,r},$f(e,t)}function $B(e){var t=TB();return function(){var r=vc(e),i;if(t){var a=vc(this).constructor;i=Reflect.construct(r,arguments,a)}else i=r.apply(this,arguments);return Tf(this,i)}}function Tf(e,t){if(t&&(Qi(t)==="object"||typeof t=="function"))return t;if(t!==void 0)throw new TypeError("Derived constructors may only return object or undefined");return zf(e)}function zf(e){if(e===void 0)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return e}function TB(){if(typeof Reflect>"u"||!Reflect.construct||Reflect.construct.sham)return!1;if(typeof Proxy=="function")return!0;try{return Boolean.prototype.valueOf.call(Reflect.construct(Boolean,[],function(){})),!0}catch{return!1}}function vc(e){return vc=Object.setPrototypeOf?Object.getPrototypeOf.bind():function(n){return n.__proto__||Object.getPrototypeOf(n)},vc(e)}var yr=function(e){CB(n,e);var t=$B(n);function n(r,i){var a;AB(this,n),a=t.call(this,r,i);var l=a.props,o=l.isActive,s=l.attributeName,c=l.from,f=l.to,d=l.steps,p=l.children,h=l.duration;if(a.handleStyleChange=a.handleStyleChange.bind(zf(a)),a.changeStyle=a.changeStyle.bind(zf(a)),!o||h<=0)return a.state={style:{}},typeof p=="function"&&(a.state={style:f}),Tf(a);if(d&&d.length)a.state={style:d[0].style};else if(c){if(typeof p=="function")return a.state={style:c},Tf(a);a.state={style:s?qa({},s,c):c}}else a.state={style:{}};return a}return NB(n,[{key:"componentDidMount",value:function(){var i=this.props,a=i.isActive,l=i.canBegin;this.mounted=!0,!(!a||!l)&&this.runAnimation(this.props)}},{key:"componentDidUpdate",value:function(i){var a=this.props,l=a.isActive,o=a.canBegin,s=a.attributeName,c=a.shouldReAnimate,f=a.to,d=a.from,p=this.state.style;if(o){if(!l){var h={style:s?qa({},s,f):f};this.state&&p&&(s&&p[s]!==f||!s&&p!==f)&&this.setState(h);return}if(!(RR(i.to,f)&&i.canBegin&&i.isActive)){var x=!i.canBegin||!i.isActive;this.manager&&this.manager.stop(),this.stopJSAnimation&&this.stopJSAnimation();var v=x||c?d:i.to;if(this.state&&p){var w={style:s?qa({},s,v):v};(s&&p[s]!==v||!s&&p!==v)&&this.setState(w)}this.runAnimation(Vt(Vt({},this.props),{},{from:v,begin:0}))}}}},{key:"componentWillUnmount",value:function(){this.mounted=!1;var i=this.props.onAnimationEnd;this.unSubscribe&&this.unSubscribe(),this.manager&&(this.manager.stop(),this.manager=null),this.stopJSAnimation&&this.stopJSAnimation(),i&&i()}},{key:"handleStyleChange",value:function(i){this.changeStyle(i)}},{key:"changeStyle",value:function(i){this.mounted&&this.setState({style:i})}},{key:"runJSAnimation",value:function(i){var a=this,l=i.from,o=i.to,s=i.duration,c=i.easing,f=i.begin,d=i.onAnimationEnd,p=i.onAnimationStart,h=bB(l,o,cB(c),s,this.changeStyle),x=function(){a.stopJSAnimation=h()};this.manager.start([p,f,x,s,d])}},{key:"runStepAnimation",value:function(i){var a=this,l=i.steps,o=i.begin,s=i.onAnimationStart,c=l[0],f=c.style,d=c.duration,p=d===void 0?0:d,h=function(v,w,y){if(y===0)return v;var m=w.duration,g=w.easing,_=g===void 0?"ease":g,b=w.style,k=w.properties,S=w.onAnimationEnd,j=y>0?l[y-1]:w,O=k||Object.keys(b);if(typeof _=="function"||_==="spring")return[].concat(Td(v),[a.runJSAnimation.bind(a,{from:j.style,to:b,duration:m,easing:_}),m]);var C=u5(O,m,_),M=Vt(Vt(Vt({},j.style),b),{},{transition:C});return[].concat(Td(v),[M,m,S]).filter(ZR)};return this.manager.start([s].concat(Td(l.reduce(h,[f,Math.max(p,o)])),[i.onAnimationEnd]))}},{key:"runAnimation",value:function(i){this.manager||(this.manager=XR());var a=i.begin,l=i.duration,o=i.attributeName,s=i.to,c=i.easing,f=i.onAnimationStart,d=i.onAnimationEnd,p=i.steps,h=i.children,x=this.manager;if(this.unSubscribe=x.subscribe(this.handleStyleChange),typeof c=="function"||typeof h=="function"||c==="spring"){this.runJSAnimation(i);return}if(p.length>1){this.runStepAnimation(i);return}var v=o?qa({},o,s):s,w=u5(Object.keys(v),l,c);x.start([f,a,Vt(Vt({},v),{},{transition:w}),l,d])}},{key:"render",value:function(){var i=this.props,a=i.children;i.begin;var l=i.duration;i.attributeName,i.easing;var o=i.isActive;i.steps,i.from,i.to,i.canBegin,i.onAnimationEnd,i.shouldReAnimate,i.onAnimationReStart;var s=kB(i,wB),c=$.Children.count(a),f=this.state.style;if(typeof a=="function")return a(f);if(!o||c===0||l<=0)return a;var d=function(h){var x=h.props,v=x.style,w=v===void 0?{}:v,y=x.className,m=$.cloneElement(h,Vt(Vt({},s),{},{style:Vt(Vt({},w),f),className:y}));return m};return c===1?d($.Children.only(a)):T.createElement("div",null,$.Children.map(a,function(p){return d(p)}))}}]),n}($.PureComponent);yr.displayName="Animate";yr.defaultProps={begin:0,duration:1e3,from:"",to:"",attributeName:"",easing:"ease",isActive:!0,canBegin:!0,steps:[],onAnimationEnd:function(){},onAnimationStart:function(){}};yr.propTypes={from:ue.oneOfType([ue.object,ue.string]),to:ue.oneOfType([ue.object,ue.string]),attributeName:ue.string,duration:ue.number,begin:ue.number,easing:ue.oneOfType([ue.string,ue.func]),steps:ue.arrayOf(ue.shape({duration:ue.number.isRequired,style:ue.object.isRequired,easing:ue.oneOfType([ue.oneOf(["ease","ease-in","ease-out","ease-in-out","linear"]),ue.func]),properties:ue.arrayOf("string"),onAnimationEnd:ue.func})),children:ue.oneOfType([ue.node,ue.func]),isActive:ue.bool,canBegin:ue.bool,onAnimationEnd:ue.func,shouldReAnimate:ue.bool,onAnimationStart:ue.func,onAnimationReStart:ue.func};function Kl(e){"@babel/helpers - typeof";return Kl=typeof Symbol=="function"&&typeof Symbol.iterator=="symbol"?function(t){return typeof t}:function(t){return t&&typeof Symbol=="function"&&t.constructor===Symbol&&t!==Symbol.prototype?"symbol":typeof t},Kl(e)}function gc(){return gc=Object.assign?Object.assign.bind():function(e){for(var t=1;t<arguments.length;t++){var n=arguments[t];for(var r in n)Object.prototype.hasOwnProperty.call(n,r)&&(e[r]=n[r])}return e},gc.apply(this,arguments)}function zB(e,t){return FB(e)||LB(e,t)||DB(e,t)||IB()}function IB(){throw new TypeError(`Invalid attempt to destructure non-iterable instance.
In order to be iterable, non-array objects must have a [Symbol.iterator]() method.`)}function DB(e,t){if(e){if(typeof e=="string")return y5(e,t);var n=Object.prototype.toString.call(e).slice(8,-1);if(n==="Object"&&e.constructor&&(n=e.constructor.name),n==="Map"||n==="Set")return Array.from(e);if(n==="Arguments"||/^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n))return y5(e,t)}}function y5(e,t){(t==null||t>e.length)&&(t=e.length);for(var n=0,r=new Array(t);n<t;n++)r[n]=e[n];return r}function LB(e,t){var n=e==null?null:typeof Symbol<"u"&&e[Symbol.iterator]||e["@@iterator"];if(n!=null){var r,i,a,l,o=[],s=!0,c=!1;try{if(a=(n=n.call(e)).next,t!==0)for(;!(s=(r=a.call(n)).done)&&(o.push(r.value),o.length!==t);s=!0);}catch(f){c=!0,i=f}finally{try{if(!s&&n.return!=null&&(l=n.return(),Object(l)!==l))return}finally{if(c)throw i}}return o}}function FB(e){if(Array.isArray(e))return e}function v5(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter(function(i){return Object.getOwnPropertyDescriptor(e,i).enumerable})),n.push.apply(n,r)}return n}function g5(e){for(var t=1;t<arguments.length;t++){var n=arguments[t]!=null?arguments[t]:{};t%2?v5(Object(n),!0).forEach(function(r){RB(e,r,n[r])}):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):v5(Object(n)).forEach(function(r){Object.defineProperty(e,r,Object.getOwnPropertyDescriptor(n,r))})}return e}function RB(e,t,n){return t=BB(t),t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function BB(e){var t=WB(e,"string");return Kl(t)=="symbol"?t:t+""}function WB(e,t){if(Kl(e)!="object"||!e)return e;var n=e[Symbol.toPrimitive];if(n!==void 0){var r=n.call(e,t);if(Kl(r)!="object")return r;throw new TypeError("@@toPrimitive must return a primitive value.")}return(t==="string"?String:Number)(e)}var x5=function(t,n,r,i,a){var l=Math.min(Math.abs(r)/2,Math.abs(i)/2),o=i>=0?1:-1,s=r>=0?1:-1,c=i>=0&&r>=0||i<0&&r<0?1:0,f;if(l>0&&a instanceof Array){for(var d=[0,0,0,0],p=0,h=4;p<h;p++)d[p]=a[p]>l?l:a[p];f="M".concat(t,",").concat(n+o*d[0]),d[0]>0&&(f+="A ".concat(d[0],",").concat(d[0],",0,0,").concat(c,",").concat(t+s*d[0],",").concat(n)),f+="L ".concat(t+r-s*d[1],",").concat(n),d[1]>0&&(f+="A ".concat(d[1],",").concat(d[1],",0,0,").concat(c,`,
        `).concat(t+r,",").concat(n+o*d[1])),f+="L ".concat(t+r,",").concat(n+i-o*d[2]),d[2]>0&&(f+="A ".concat(d[2],",").concat(d[2],",0,0,").concat(c,`,
        `).concat(t+r-s*d[2],",").concat(n+i)),f+="L ".concat(t+s*d[3],",").concat(n+i),d[3]>0&&(f+="A ".concat(d[3],",").concat(d[3],",0,0,").concat(c,`,
        `).concat(t,",").concat(n+i-o*d[3])),f+="Z"}else if(l>0&&a===+a&&a>0){var x=Math.min(l,a);f="M ".concat(t,",").concat(n+o*x,`
            A `).concat(x,",").concat(x,",0,0,").concat(c,",").concat(t+s*x,",").concat(n,`
            L `).concat(t+r-s*x,",").concat(n,`
            A `).concat(x,",").concat(x,",0,0,").concat(c,",").concat(t+r,",").concat(n+o*x,`
            L `).concat(t+r,",").concat(n+i-o*x,`
            A `).concat(x,",").concat(x,",0,0,").concat(c,",").concat(t+r-s*x,",").concat(n+i,`
            L `).concat(t+s*x,",").concat(n+i,`
            A `).concat(x,",").concat(x,",0,0,").concat(c,",").concat(t,",").concat(n+i-o*x," Z")}else f="M ".concat(t,",").concat(n," h ").concat(r," v ").concat(i," h ").concat(-r," Z");return f},UB=function(t,n){if(!t||!n)return!1;var r=t.x,i=t.y,a=n.x,l=n.y,o=n.width,s=n.height;if(Math.abs(o)>0&&Math.abs(s)>0){var c=Math.min(a,a+o),f=Math.max(a,a+o),d=Math.min(l,l+s),p=Math.max(l,l+s);return r>=c&&r<=f&&i>=d&&i<=p}return!1},HB={x:0,y:0,width:0,height:0,radius:0,isAnimationActive:!1,isUpdateAnimationActive:!1,animationBegin:0,animationDuration:1500,animationEasing:"ease"},Yp=function(t){var n=g5(g5({},HB),t),r=$.useRef(),i=$.useState(-1),a=zB(i,2),l=a[0],o=a[1];$.useEffect(function(){if(r.current&&r.current.getTotalLength)try{var _=r.current.getTotalLength();_&&o(_)}catch{}},[]);var s=n.x,c=n.y,f=n.width,d=n.height,p=n.radius,h=n.className,x=n.animationEasing,v=n.animationDuration,w=n.animationBegin,y=n.isAnimationActive,m=n.isUpdateAnimationActive;if(s!==+s||c!==+c||f!==+f||d!==+d||f===0||d===0)return null;var g=se("recharts-rectangle",h);return m?T.createElement(yr,{canBegin:l>0,from:{width:f,height:d,x:s,y:c},to:{width:f,height:d,x:s,y:c},duration:v,animationEasing:x,isActive:m},function(_){var b=_.width,k=_.height,S=_.x,j=_.y;return T.createElement(yr,{canBegin:l>0,from:"0px ".concat(l===-1?1:l,"px"),to:"".concat(l,"px 0px"),attributeName:"strokeDasharray",begin:w,duration:v,isActive:y,easing:x},T.createElement("path",gc({},oe(n,!0),{className:g,d:x5(S,j,b,k,p),ref:r})))}):T.createElement("path",gc({},oe(n,!0),{className:g,d:x5(s,c,f,d,p)}))};function If(){return If=Object.assign?Object.assign.bind():function(e){for(var t=1;t<arguments.length;t++){var n=arguments[t];for(var r in n)Object.prototype.hasOwnProperty.call(n,r)&&(e[r]=n[r])}return e},If.apply(this,arguments)}var r3=function(t){var n=t.cx,r=t.cy,i=t.r,a=t.className,l=se("recharts-dot",a);return n===+n&&r===+r&&i===+i?$.createElement("circle",If({},oe(t,!1),Ds(t),{className:l,cx:n,cy:r,r:i})):null};function Yl(e){"@babel/helpers - typeof";return Yl=typeof Symbol=="function"&&typeof Symbol.iterator=="symbol"?function(t){return typeof t}:function(t){return t&&typeof Symbol=="function"&&t.constructor===Symbol&&t!==Symbol.prototype?"symbol":typeof t},Yl(e)}var GB=["x","y","top","left","width","height","className"];function Df(){return Df=Object.assign?Object.assign.bind():function(e){for(var t=1;t<arguments.length;t++){var n=arguments[t];for(var r in n)Object.prototype.hasOwnProperty.call(n,r)&&(e[r]=n[r])}return e},Df.apply(this,arguments)}function b5(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter(function(i){return Object.getOwnPropertyDescriptor(e,i).enumerable})),n.push.apply(n,r)}return n}function VB(e){for(var t=1;t<arguments.length;t++){var n=arguments[t]!=null?arguments[t]:{};t%2?b5(Object(n),!0).forEach(function(r){XB(e,r,n[r])}):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):b5(Object(n)).forEach(function(r){Object.defineProperty(e,r,Object.getOwnPropertyDescriptor(n,r))})}return e}function XB(e,t,n){return t=qB(t),t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function qB(e){var t=KB(e,"string");return Yl(t)=="symbol"?t:t+""}function KB(e,t){if(Yl(e)!="object"||!e)return e;var n=e[Symbol.toPrimitive];if(n!==void 0){var r=n.call(e,t);if(Yl(r)!="object")return r;throw new TypeError("@@toPrimitive must return a primitive value.")}return(t==="string"?String:Number)(e)}function YB(e,t){if(e==null)return{};var n=ZB(e,t),r,i;if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);for(i=0;i<a.length;i++)r=a[i],!(t.indexOf(r)>=0)&&Object.prototype.propertyIsEnumerable.call(e,r)&&(n[r]=e[r])}return n}function ZB(e,t){if(e==null)return{};var n={};for(var r in e)if(Object.prototype.hasOwnProperty.call(e,r)){if(t.indexOf(r)>=0)continue;n[r]=e[r]}return n}var QB=function(t,n,r,i,a,l){return"M".concat(t,",").concat(a,"v").concat(i,"M").concat(l,",").concat(n,"h").concat(r)},JB=function(t){var n=t.x,r=n===void 0?0:n,i=t.y,a=i===void 0?0:i,l=t.top,o=l===void 0?0:l,s=t.left,c=s===void 0?0:s,f=t.width,d=f===void 0?0:f,p=t.height,h=p===void 0?0:p,x=t.className,v=YB(t,GB),w=VB({x:r,y:a,top:o,left:c,width:d,height:h},v);return!G(r)||!G(a)||!G(d)||!G(h)||!G(o)||!G(c)?null:T.createElement("path",Df({},oe(w,!0),{className:se("recharts-cross",x),d:QB(r,a,d,h,o,c)}))},eW=yv,tW=eW(Object.getPrototypeOf,Object),nW=tW,rW=Wn,iW=nW,aW=Un,lW="[object Object]",oW=Function.prototype,sW=Object.prototype,i3=oW.toString,cW=sW.hasOwnProperty,uW=i3.call(Object);function dW(e){if(!aW(e)||rW(e)!=lW)return!1;var t=iW(e);if(t===null)return!0;var n=cW.call(t,"constructor")&&t.constructor;return typeof n=="function"&&n instanceof n&&i3.call(n)==uW}var fW=dW;const pW=me(fW);var hW=Wn,mW=Un,yW="[object Boolean]";function vW(e){return e===!0||e===!1||mW(e)&&hW(e)==yW}var gW=vW;const xW=me(gW);function Zl(e){"@babel/helpers - typeof";return Zl=typeof Symbol=="function"&&typeof Symbol.iterator=="symbol"?function(t){return typeof t}:function(t){return t&&typeof Symbol=="function"&&t.constructor===Symbol&&t!==Symbol.prototype?"symbol":typeof t},Zl(e)}function xc(){return xc=Object.assign?Object.assign.bind():function(e){for(var t=1;t<arguments.length;t++){var n=arguments[t];for(var r in n)Object.prototype.hasOwnProperty.call(n,r)&&(e[r]=n[r])}return e},xc.apply(this,arguments)}function bW(e,t){return SW(e)||_W(e,t)||kW(e,t)||wW()}function wW(){throw new TypeError(`Invalid attempt to destructure non-iterable instance.
In order to be iterable, non-array objects must have a [Symbol.iterator]() method.`)}function kW(e,t){if(e){if(typeof e=="string")return w5(e,t);var n=Object.prototype.toString.call(e).slice(8,-1);if(n==="Object"&&e.constructor&&(n=e.constructor.name),n==="Map"||n==="Set")return Array.from(e);if(n==="Arguments"||/^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n))return w5(e,t)}}function w5(e,t){(t==null||t>e.length)&&(t=e.length);for(var n=0,r=new Array(t);n<t;n++)r[n]=e[n];return r}function _W(e,t){var n=e==null?null:typeof Symbol<"u"&&e[Symbol.iterator]||e["@@iterator"];if(n!=null){var r,i,a,l,o=[],s=!0,c=!1;try{if(a=(n=n.call(e)).next,t!==0)for(;!(s=(r=a.call(n)).done)&&(o.push(r.value),o.length!==t);s=!0);}catch(f){c=!0,i=f}finally{try{if(!s&&n.return!=null&&(l=n.return(),Object(l)!==l))return}finally{if(c)throw i}}return o}}function SW(e){if(Array.isArray(e))return e}function k5(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter(function(i){return Object.getOwnPropertyDescriptor(e,i).enumerable})),n.push.apply(n,r)}return n}function _5(e){for(var t=1;t<arguments.length;t++){var n=arguments[t]!=null?arguments[t]:{};t%2?k5(Object(n),!0).forEach(function(r){jW(e,r,n[r])}):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):k5(Object(n)).forEach(function(r){Object.defineProperty(e,r,Object.getOwnPropertyDescriptor(n,r))})}return e}function jW(e,t,n){return t=OW(t),t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function OW(e){var t=PW(e,"string");return Zl(t)=="symbol"?t:t+""}function PW(e,t){if(Zl(e)!="object"||!e)return e;var n=e[Symbol.toPrimitive];if(n!==void 0){var r=n.call(e,t);if(Zl(r)!="object")return r;throw new TypeError("@@toPrimitive must return a primitive value.")}return(t==="string"?String:Number)(e)}var S5=function(t,n,r,i,a){var l=r-i,o;return o="M ".concat(t,",").concat(n),o+="L ".concat(t+r,",").concat(n),o+="L ".concat(t+r-l/2,",").concat(n+a),o+="L ".concat(t+r-l/2-i,",").concat(n+a),o+="L ".concat(t,",").concat(n," Z"),o},AW={x:0,y:0,upperWidth:0,lowerWidth:0,height:0,isUpdateAnimationActive:!1,animationBegin:0,animationDuration:1500,animationEasing:"ease"},MW=function(t){var n=_5(_5({},AW),t),r=$.useRef(),i=$.useState(-1),a=bW(i,2),l=a[0],o=a[1];$.useEffect(function(){if(r.current&&r.current.getTotalLength)try{var g=r.current.getTotalLength();g&&o(g)}catch{}},[]);var s=n.x,c=n.y,f=n.upperWidth,d=n.lowerWidth,p=n.height,h=n.className,x=n.animationEasing,v=n.animationDuration,w=n.animationBegin,y=n.isUpdateAnimationActive;if(s!==+s||c!==+c||f!==+f||d!==+d||p!==+p||f===0&&d===0||p===0)return null;var m=se("recharts-trapezoid",h);return y?T.createElement(yr,{canBegin:l>0,from:{upperWidth:0,lowerWidth:0,height:p,x:s,y:c},to:{upperWidth:f,lowerWidth:d,height:p,x:s,y:c},duration:v,animationEasing:x,isActive:y},function(g){var _=g.upperWidth,b=g.lowerWidth,k=g.height,S=g.x,j=g.y;return T.createElement(yr,{canBegin:l>0,from:"0px ".concat(l===-1?1:l,"px"),to:"".concat(l,"px 0px"),attributeName:"strokeDasharray",begin:w,duration:v,easing:x},T.createElement("path",xc({},oe(n,!0),{className:m,d:S5(S,j,_,b,k),ref:r})))}):T.createElement("g",null,T.createElement("path",xc({},oe(n,!0),{className:m,d:S5(s,c,f,d,p)})))},NW=["option","shapeType","propTransformer","activeClassName","isActive"];function Ql(e){"@babel/helpers - typeof";return Ql=typeof Symbol=="function"&&typeof Symbol.iterator=="symbol"?function(t){return typeof t}:function(t){return t&&typeof Symbol=="function"&&t.constructor===Symbol&&t!==Symbol.prototype?"symbol":typeof t},Ql(e)}function EW(e,t){if(e==null)return{};var n=CW(e,t),r,i;if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);for(i=0;i<a.length;i++)r=a[i],!(t.indexOf(r)>=0)&&Object.prototype.propertyIsEnumerable.call(e,r)&&(n[r]=e[r])}return n}function CW(e,t){if(e==null)return{};var n={};for(var r in e)if(Object.prototype.hasOwnProperty.call(e,r)){if(t.indexOf(r)>=0)continue;n[r]=e[r]}return n}function j5(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter(function(i){return Object.getOwnPropertyDescriptor(e,i).enumerable})),n.push.apply(n,r)}return n}function bc(e){for(var t=1;t<arguments.length;t++){var n=arguments[t]!=null?arguments[t]:{};t%2?j5(Object(n),!0).forEach(function(r){$W(e,r,n[r])}):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):j5(Object(n)).forEach(function(r){Object.defineProperty(e,r,Object.getOwnPropertyDescriptor(n,r))})}return e}function $W(e,t,n){return t=TW(t),t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function TW(e){var t=zW(e,"string");return Ql(t)=="symbol"?t:t+""}function zW(e,t){if(Ql(e)!="object"||!e)return e;var n=e[Symbol.toPrimitive];if(n!==void 0){var r=n.call(e,t);if(Ql(r)!="object")return r;throw new TypeError("@@toPrimitive must return a primitive value.")}return(t==="string"?String:Number)(e)}function IW(e,t){return bc(bc({},t),e)}function DW(e,t){return e==="symbols"}function O5(e){var t=e.shapeType,n=e.elementProps;switch(t){case"rectangle":return T.createElement(Yp,n);case"trapezoid":return T.createElement(MW,n);case"sector":return T.createElement(Vg,n);case"symbols":if(DW(t))return T.createElement(hp,n);break;default:return null}}function LW(e){return $.isValidElement(e)?e.props:e}function FW(e){var t=e.option,n=e.shapeType,r=e.propTransformer,i=r===void 0?IW:r,a=e.activeClassName,l=a===void 0?"recharts-active-shape":a,o=e.isActive,s=EW(e,NW),c;if($.isValidElement(t))c=$.cloneElement(t,bc(bc({},s),LW(t)));else if(te(t))c=t(s);else if(pW(t)&&!xW(t)){var f=i(t,s);c=T.createElement(O5,{shapeType:n,elementProps:f})}else{var d=s;c=T.createElement(O5,{shapeType:n,elementProps:d})}return o?T.createElement(Ve,{className:l},c):c}function Nu(e,t){return t!=null&&"trapezoids"in e.props}function Eu(e,t){return t!=null&&"sectors"in e.props}function Jl(e,t){return t!=null&&"points"in e.props}function RW(e,t){var n,r,i=e.x===(t==null||(n=t.labelViewBox)===null||n===void 0?void 0:n.x)||e.x===t.x,a=e.y===(t==null||(r=t.labelViewBox)===null||r===void 0?void 0:r.y)||e.y===t.y;return i&&a}function BW(e,t){var n=e.endAngle===t.endAngle,r=e.startAngle===t.startAngle;return n&&r}function WW(e,t){var n=e.x===t.x,r=e.y===t.y,i=e.z===t.z;return n&&r&&i}function UW(e,t){var n;return Nu(e,t)?n=RW:Eu(e,t)?n=BW:Jl(e,t)&&(n=WW),n}function HW(e,t){var n;return Nu(e,t)?n="trapezoids":Eu(e,t)?n="sectors":Jl(e,t)&&(n="points"),n}function GW(e,t){if(Nu(e,t)){var n;return(n=t.tooltipPayload)===null||n===void 0||(n=n[0])===null||n===void 0||(n=n.payload)===null||n===void 0?void 0:n.payload}if(Eu(e,t)){var r;return(r=t.tooltipPayload)===null||r===void 0||(r=r[0])===null||r===void 0||(r=r.payload)===null||r===void 0?void 0:r.payload}return Jl(e,t)?t.payload:{}}function VW(e){var t=e.activeTooltipItem,n=e.graphicalItem,r=e.itemData,i=HW(n,t),a=GW(n,t),l=r.filter(function(s,c){var f=Vp(a,s),d=n.props[i].filter(function(x){var v=UW(n,t);return v(x,t)}),p=n.props[i].indexOf(d[d.length-1]),h=c===p;return f&&h}),o=r.indexOf(l[l.length-1]);return o}var XW=Math.ceil,qW=Math.max;function KW(e,t,n,r){for(var i=-1,a=qW(XW((t-e)/(n||1)),0),l=Array(a);a--;)l[r?a:++i]=e,e+=n;return l}var YW=KW,ZW=zv,P5=1/0,QW=17976931348623157e292;function JW(e){if(!e)return e===0?e:0;if(e=ZW(e),e===P5||e===-P5){var t=e<0?-1:1;return t*QW}return e===e?e:0}var a3=JW,eU=YW,tU=gu,zd=a3;function nU(e){return function(t,n,r){return r&&typeof r!="number"&&tU(t,n,r)&&(n=r=void 0),t=zd(t),n===void 0?(n=t,t=0):n=zd(n),r=r===void 0?t<n?1:-1:zd(r),eU(t,n,r,e)}}var rU=nU,iU=rU,aU=iU(),lU=aU;const wc=me(lU);function eo(e){"@babel/helpers - typeof";return eo=typeof Symbol=="function"&&typeof Symbol.iterator=="symbol"?function(t){return typeof t}:function(t){return t&&typeof Symbol=="function"&&t.constructor===Symbol&&t!==Symbol.prototype?"symbol":typeof t},eo(e)}function A5(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter(function(i){return Object.getOwnPropertyDescriptor(e,i).enumerable})),n.push.apply(n,r)}return n}function M5(e){for(var t=1;t<arguments.length;t++){var n=arguments[t]!=null?arguments[t]:{};t%2?A5(Object(n),!0).forEach(function(r){l3(e,r,n[r])}):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):A5(Object(n)).forEach(function(r){Object.defineProperty(e,r,Object.getOwnPropertyDescriptor(n,r))})}return e}function l3(e,t,n){return t=oU(t),t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function oU(e){var t=sU(e,"string");return eo(t)=="symbol"?t:t+""}function sU(e,t){if(eo(e)!="object"||!e)return e;var n=e[Symbol.toPrimitive];if(n!==void 0){var r=n.call(e,t);if(eo(r)!="object")return r;throw new TypeError("@@toPrimitive must return a primitive value.")}return(t==="string"?String:Number)(e)}var cU=["Webkit","Moz","O","ms"],uU=function(t,n){var r=t.replace(/(\w)/,function(a){return a.toUpperCase()}),i=cU.reduce(function(a,l){return M5(M5({},a),{},l3({},l+r,n))},{});return i[t]=n,i};function Ji(e){"@babel/helpers - typeof";return Ji=typeof Symbol=="function"&&typeof Symbol.iterator=="symbol"?function(t){return typeof t}:function(t){return t&&typeof Symbol=="function"&&t.constructor===Symbol&&t!==Symbol.prototype?"symbol":typeof t},Ji(e)}function kc(){return kc=Object.assign?Object.assign.bind():function(e){for(var t=1;t<arguments.length;t++){var n=arguments[t];for(var r in n)Object.prototype.hasOwnProperty.call(n,r)&&(e[r]=n[r])}return e},kc.apply(this,arguments)}function N5(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter(function(i){return Object.getOwnPropertyDescriptor(e,i).enumerable})),n.push.apply(n,r)}return n}function Id(e){for(var t=1;t<arguments.length;t++){var n=arguments[t]!=null?arguments[t]:{};t%2?N5(Object(n),!0).forEach(function(r){kt(e,r,n[r])}):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):N5(Object(n)).forEach(function(r){Object.defineProperty(e,r,Object.getOwnPropertyDescriptor(n,r))})}return e}function dU(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}function E5(e,t){for(var n=0;n<t.length;n++){var r=t[n];r.enumerable=r.enumerable||!1,r.configurable=!0,"value"in r&&(r.writable=!0),Object.defineProperty(e,s3(r.key),r)}}function fU(e,t,n){return t&&E5(e.prototype,t),n&&E5(e,n),Object.defineProperty(e,"prototype",{writable:!1}),e}function pU(e,t,n){return t=_c(t),hU(e,o3()?Reflect.construct(t,n||[],_c(e).constructor):t.apply(e,n))}function hU(e,t){if(t&&(Ji(t)==="object"||typeof t=="function"))return t;if(t!==void 0)throw new TypeError("Derived constructors may only return object or undefined");return mU(e)}function mU(e){if(e===void 0)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return e}function o3(){try{var e=!Boolean.prototype.valueOf.call(Reflect.construct(Boolean,[],function(){}))}catch{}return(o3=function(){return!!e})()}function _c(e){return _c=Object.setPrototypeOf?Object.getPrototypeOf.bind():function(n){return n.__proto__||Object.getPrototypeOf(n)},_c(e)}function yU(e,t){if(typeof t!="function"&&t!==null)throw new TypeError("Super expression must either be null or a function");e.prototype=Object.create(t&&t.prototype,{constructor:{value:e,writable:!0,configurable:!0}}),Object.defineProperty(e,"prototype",{writable:!1}),t&&Lf(e,t)}function Lf(e,t){return Lf=Object.setPrototypeOf?Object.setPrototypeOf.bind():function(r,i){return r.__proto__=i,r},Lf(e,t)}function kt(e,t,n){return t=s3(t),t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function s3(e){var t=vU(e,"string");return Ji(t)=="symbol"?t:t+""}function vU(e,t){if(Ji(e)!="object"||!e)return e;var n=e[Symbol.toPrimitive];if(n!==void 0){var r=n.call(e,t);if(Ji(r)!="object")return r;throw new TypeError("@@toPrimitive must return a primitive value.")}return String(e)}var gU=function(t){var n=t.data,r=t.startIndex,i=t.endIndex,a=t.x,l=t.width,o=t.travellerWidth;if(!n||!n.length)return{};var s=n.length,c=al().domain(wc(0,s)).range([a,a+l-o]),f=c.domain().map(function(d){return c(d)});return{isTextActive:!1,isSlideMoving:!1,isTravellerMoving:!1,isTravellerFocused:!1,startX:c(r),endX:c(i),scale:c,scaleValues:f}},C5=function(t){return t.changedTouches&&!!t.changedTouches.length},ea=function(e){function t(n){var r;return dU(this,t),r=pU(this,t,[n]),kt(r,"handleDrag",function(i){r.leaveTimer&&(clearTimeout(r.leaveTimer),r.leaveTimer=null),r.state.isTravellerMoving?r.handleTravellerMove(i):r.state.isSlideMoving&&r.handleSlideDrag(i)}),kt(r,"handleTouchMove",function(i){i.changedTouches!=null&&i.changedTouches.length>0&&r.handleDrag(i.changedTouches[0])}),kt(r,"handleDragEnd",function(){r.setState({isTravellerMoving:!1,isSlideMoving:!1},function(){var i=r.props,a=i.endIndex,l=i.onDragEnd,o=i.startIndex;l==null||l({endIndex:a,startIndex:o})}),r.detachDragEndListener()}),kt(r,"handleLeaveWrapper",function(){(r.state.isTravellerMoving||r.state.isSlideMoving)&&(r.leaveTimer=window.setTimeout(r.handleDragEnd,r.props.leaveTimeOut))}),kt(r,"handleEnterSlideOrTraveller",function(){r.setState({isTextActive:!0})}),kt(r,"handleLeaveSlideOrTraveller",function(){r.setState({isTextActive:!1})}),kt(r,"handleSlideDragStart",function(i){var a=C5(i)?i.changedTouches[0]:i;r.setState({isTravellerMoving:!1,isSlideMoving:!0,slideMoveStartX:a.pageX}),r.attachDragEndListener()}),r.travellerDragStartHandlers={startX:r.handleTravellerDragStart.bind(r,"startX"),endX:r.handleTravellerDragStart.bind(r,"endX")},r.state={},r}return yU(t,e),fU(t,[{key:"componentWillUnmount",value:function(){this.leaveTimer&&(clearTimeout(this.leaveTimer),this.leaveTimer=null),this.detachDragEndListener()}},{key:"getIndex",value:function(r){var i=r.startX,a=r.endX,l=this.state.scaleValues,o=this.props,s=o.gap,c=o.data,f=c.length-1,d=Math.min(i,a),p=Math.max(i,a),h=t.getIndexInRange(l,d),x=t.getIndexInRange(l,p);return{startIndex:h-h%s,endIndex:x===f?f:x-x%s}}},{key:"getTextOfTick",value:function(r){var i=this.props,a=i.data,l=i.tickFormatter,o=i.dataKey,s=xn(a[r],o,r);return te(l)?l(s,r):s}},{key:"attachDragEndListener",value:function(){window.addEventListener("mouseup",this.handleDragEnd,!0),window.addEventListener("touchend",this.handleDragEnd,!0),window.addEventListener("mousemove",this.handleDrag,!0)}},{key:"detachDragEndListener",value:function(){window.removeEventListener("mouseup",this.handleDragEnd,!0),window.removeEventListener("touchend",this.handleDragEnd,!0),window.removeEventListener("mousemove",this.handleDrag,!0)}},{key:"handleSlideDrag",value:function(r){var i=this.state,a=i.slideMoveStartX,l=i.startX,o=i.endX,s=this.props,c=s.x,f=s.width,d=s.travellerWidth,p=s.startIndex,h=s.endIndex,x=s.onChange,v=r.pageX-a;v>0?v=Math.min(v,c+f-d-o,c+f-d-l):v<0&&(v=Math.max(v,c-l,c-o));var w=this.getIndex({startX:l+v,endX:o+v});(w.startIndex!==p||w.endIndex!==h)&&x&&x(w),this.setState({startX:l+v,endX:o+v,slideMoveStartX:r.pageX})}},{key:"handleTravellerDragStart",value:function(r,i){var a=C5(i)?i.changedTouches[0]:i;this.setState({isSlideMoving:!1,isTravellerMoving:!0,movingTravellerId:r,brushMoveStartX:a.pageX}),this.attachDragEndListener()}},{key:"handleTravellerMove",value:function(r){var i=this.state,a=i.brushMoveStartX,l=i.movingTravellerId,o=i.endX,s=i.startX,c=this.state[l],f=this.props,d=f.x,p=f.width,h=f.travellerWidth,x=f.onChange,v=f.gap,w=f.data,y={startX:this.state.startX,endX:this.state.endX},m=r.pageX-a;m>0?m=Math.min(m,d+p-h-c):m<0&&(m=Math.max(m,d-c)),y[l]=c+m;var g=this.getIndex(y),_=g.startIndex,b=g.endIndex,k=function(){var j=w.length-1;return l==="startX"&&(o>s?_%v===0:b%v===0)||o<s&&b===j||l==="endX"&&(o>s?b%v===0:_%v===0)||o>s&&b===j};this.setState(kt(kt({},l,c+m),"brushMoveStartX",r.pageX),function(){x&&k()&&x(g)})}},{key:"handleTravellerMoveKeyboard",value:function(r,i){var a=this,l=this.state,o=l.scaleValues,s=l.startX,c=l.endX,f=this.state[i],d=o.indexOf(f);if(d!==-1){var p=d+r;if(!(p===-1||p>=o.length)){var h=o[p];i==="startX"&&h>=c||i==="endX"&&h<=s||this.setState(kt({},i,h),function(){a.props.onChange(a.getIndex({startX:a.state.startX,endX:a.state.endX}))})}}}},{key:"renderBackground",value:function(){var r=this.props,i=r.x,a=r.y,l=r.width,o=r.height,s=r.fill,c=r.stroke;return T.createElement("rect",{stroke:c,fill:s,x:i,y:a,width:l,height:o})}},{key:"renderPanorama",value:function(){var r=this.props,i=r.x,a=r.y,l=r.width,o=r.height,s=r.data,c=r.children,f=r.padding,d=$.Children.only(c);return d?T.cloneElement(d,{x:i,y:a,width:l,height:o,margin:f,compact:!0,data:s}):null}},{key:"renderTravellerLayer",value:function(r,i){var a,l,o=this,s=this.props,c=s.y,f=s.travellerWidth,d=s.height,p=s.traveller,h=s.ariaLabel,x=s.data,v=s.startIndex,w=s.endIndex,y=Math.max(r,this.props.x),m=Id(Id({},oe(this.props,!1)),{},{x:y,y:c,width:f,height:d}),g=h||"Min value: ".concat((a=x[v])===null||a===void 0?void 0:a.name,", Max value: ").concat((l=x[w])===null||l===void 0?void 0:l.name);return T.createElement(Ve,{tabIndex:0,role:"slider","aria-label":g,"aria-valuenow":r,className:"recharts-brush-traveller",onMouseEnter:this.handleEnterSlideOrTraveller,onMouseLeave:this.handleLeaveSlideOrTraveller,onMouseDown:this.travellerDragStartHandlers[i],onTouchStart:this.travellerDragStartHandlers[i],onKeyDown:function(b){["ArrowLeft","ArrowRight"].includes(b.key)&&(b.preventDefault(),b.stopPropagation(),o.handleTravellerMoveKeyboard(b.key==="ArrowRight"?1:-1,i))},onFocus:function(){o.setState({isTravellerFocused:!0})},onBlur:function(){o.setState({isTravellerFocused:!1})},style:{cursor:"col-resize"}},t.renderTraveller(p,m))}},{key:"renderSlide",value:function(r,i){var a=this.props,l=a.y,o=a.height,s=a.stroke,c=a.travellerWidth,f=Math.min(r,i)+c,d=Math.max(Math.abs(i-r)-c,0);return T.createElement("rect",{className:"recharts-brush-slide",onMouseEnter:this.handleEnterSlideOrTraveller,onMouseLeave:this.handleLeaveSlideOrTraveller,onMouseDown:this.handleSlideDragStart,onTouchStart:this.handleSlideDragStart,style:{cursor:"move"},stroke:"none",fill:s,fillOpacity:.2,x:f,y:l,width:d,height:o})}},{key:"renderText",value:function(){var r=this.props,i=r.startIndex,a=r.endIndex,l=r.y,o=r.height,s=r.travellerWidth,c=r.stroke,f=this.state,d=f.startX,p=f.endX,h=5,x={pointerEvents:"none",fill:c};return T.createElement(Ve,{className:"recharts-brush-texts"},T.createElement(Qs,kc({textAnchor:"end",verticalAnchor:"middle",x:Math.min(d,p)-h,y:l+o/2},x),this.getTextOfTick(i)),T.createElement(Qs,kc({textAnchor:"start",verticalAnchor:"middle",x:Math.max(d,p)+s+h,y:l+o/2},x),this.getTextOfTick(a)))}},{key:"render",value:function(){var r=this.props,i=r.data,a=r.className,l=r.children,o=r.x,s=r.y,c=r.width,f=r.height,d=r.alwaysShowText,p=this.state,h=p.startX,x=p.endX,v=p.isTextActive,w=p.isSlideMoving,y=p.isTravellerMoving,m=p.isTravellerFocused;if(!i||!i.length||!G(o)||!G(s)||!G(c)||!G(f)||c<=0||f<=0)return null;var g=se("recharts-brush",a),_=T.Children.count(l)===1,b=uU("userSelect","none");return T.createElement(Ve,{className:g,onMouseLeave:this.handleLeaveWrapper,onTouchMove:this.handleTouchMove,style:b},this.renderBackground(),_&&this.renderPanorama(),this.renderSlide(h,x),this.renderTravellerLayer(h,"startX"),this.renderTravellerLayer(x,"endX"),(v||w||y||m||d)&&this.renderText())}}],[{key:"renderDefaultTraveller",value:function(r){var i=r.x,a=r.y,l=r.width,o=r.height,s=r.stroke,c=Math.floor(a+o/2)-1;return T.createElement(T.Fragment,null,T.createElement("rect",{x:i,y:a,width:l,height:o,fill:s,stroke:"none"}),T.createElement("line",{x1:i+1,y1:c,x2:i+l-1,y2:c,fill:"none",stroke:"#fff"}),T.createElement("line",{x1:i+1,y1:c+2,x2:i+l-1,y2:c+2,fill:"none",stroke:"#fff"}))}},{key:"renderTraveller",value:function(r,i){var a;return T.isValidElement(r)?a=T.cloneElement(r,i):te(r)?a=r(i):a=t.renderDefaultTraveller(i),a}},{key:"getDerivedStateFromProps",value:function(r,i){var a=r.data,l=r.width,o=r.x,s=r.travellerWidth,c=r.updateId,f=r.startIndex,d=r.endIndex;if(a!==i.prevData||c!==i.prevUpdateId)return Id({prevData:a,prevTravellerWidth:s,prevUpdateId:c,prevX:o,prevWidth:l},a&&a.length?gU({data:a,width:l,x:o,travellerWidth:s,startIndex:f,endIndex:d}):{scale:null,scaleValues:null});if(i.scale&&(l!==i.prevWidth||o!==i.prevX||s!==i.prevTravellerWidth)){i.scale.range([o,o+l-s]);var p=i.scale.domain().map(function(h){return i.scale(h)});return{prevData:a,prevTravellerWidth:s,prevUpdateId:c,prevX:o,prevWidth:l,startX:i.scale(r.startIndex),endX:i.scale(r.endIndex),scaleValues:p}}return null}},{key:"getIndexInRange",value:function(r,i){for(var a=r.length,l=0,o=a-1;o-l>1;){var s=Math.floor((l+o)/2);r[s]>i?o=s:l=s}return i>=r[o]?o:l}}])}($.PureComponent);kt(ea,"displayName","Brush");kt(ea,"defaultProps",{height:40,travellerWidth:5,gap:1,fill:"#fff",stroke:"#666",padding:{top:1,right:1,bottom:1,left:1},leaveTimeOut:1e3,alwaysShowText:!1});var xU=wp;function bU(e,t){var n;return xU(e,function(r,i,a){return n=t(r,i,a),!n}),!!n}var wU=bU,kU=sv,_U=wr,SU=wU,jU=wt,OU=gu;function PU(e,t,n){var r=jU(e)?kU:SU;return n&&OU(e,t,n)&&(t=void 0),r(e,_U(t))}var AU=PU;const MU=me(AU);var vn=function(t,n){var r=t.alwaysShow,i=t.ifOverflow;return r&&(i="extendDomain"),i===n},$5=Nv;function NU(e,t,n){t=="__proto__"&&$5?$5(e,t,{configurable:!0,enumerable:!0,value:n,writable:!0}):e[t]=n}var EU=NU,CU=EU,$U=Av,TU=wr;function zU(e,t){var n={};return t=TU(t),$U(e,function(r,i,a){CU(n,i,t(r,i,a))}),n}var IU=zU;const DU=me(IU);function LU(e,t){for(var n=-1,r=e==null?0:e.length;++n<r;)if(!t(e[n],n,e))return!1;return!0}var FU=LU,RU=wp;function BU(e,t){var n=!0;return RU(e,function(r,i,a){return n=!!t(r,i,a),n}),n}var WU=BU,UU=FU,HU=WU,GU=wr,VU=wt,XU=gu;function qU(e,t,n){var r=VU(e)?UU:HU;return n&&XU(e,t,n)&&(t=void 0),r(e,GU(t))}var KU=qU;const c3=me(KU);var YU=["x","y"];function to(e){"@babel/helpers - typeof";return to=typeof Symbol=="function"&&typeof Symbol.iterator=="symbol"?function(t){return typeof t}:function(t){return t&&typeof Symbol=="function"&&t.constructor===Symbol&&t!==Symbol.prototype?"symbol":typeof t},to(e)}function Ff(){return Ff=Object.assign?Object.assign.bind():function(e){for(var t=1;t<arguments.length;t++){var n=arguments[t];for(var r in n)Object.prototype.hasOwnProperty.call(n,r)&&(e[r]=n[r])}return e},Ff.apply(this,arguments)}function T5(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter(function(i){return Object.getOwnPropertyDescriptor(e,i).enumerable})),n.push.apply(n,r)}return n}function Ua(e){for(var t=1;t<arguments.length;t++){var n=arguments[t]!=null?arguments[t]:{};t%2?T5(Object(n),!0).forEach(function(r){ZU(e,r,n[r])}):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):T5(Object(n)).forEach(function(r){Object.defineProperty(e,r,Object.getOwnPropertyDescriptor(n,r))})}return e}function ZU(e,t,n){return t=QU(t),t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function QU(e){var t=JU(e,"string");return to(t)=="symbol"?t:t+""}function JU(e,t){if(to(e)!="object"||!e)return e;var n=e[Symbol.toPrimitive];if(n!==void 0){var r=n.call(e,t);if(to(r)!="object")return r;throw new TypeError("@@toPrimitive must return a primitive value.")}return(t==="string"?String:Number)(e)}function eH(e,t){if(e==null)return{};var n=tH(e,t),r,i;if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);for(i=0;i<a.length;i++)r=a[i],!(t.indexOf(r)>=0)&&Object.prototype.propertyIsEnumerable.call(e,r)&&(n[r]=e[r])}return n}function tH(e,t){if(e==null)return{};var n={};for(var r in e)if(Object.prototype.hasOwnProperty.call(e,r)){if(t.indexOf(r)>=0)continue;n[r]=e[r]}return n}function nH(e,t){var n=e.x,r=e.y,i=eH(e,YU),a="".concat(n),l=parseInt(a,10),o="".concat(r),s=parseInt(o,10),c="".concat(t.height||i.height),f=parseInt(c,10),d="".concat(t.width||i.width),p=parseInt(d,10);return Ua(Ua(Ua(Ua(Ua({},t),i),l?{x:l}:{}),s?{y:s}:{}),{},{height:f,width:p,name:t.name,radius:t.radius})}function z5(e){return T.createElement(FW,Ff({shapeType:"rectangle",propTransformer:nH,activeClassName:"recharts-active-bar"},e))}var rH=function(t){var n=arguments.length>1&&arguments[1]!==void 0?arguments[1]:0;return function(r,i){if(typeof t=="number")return t;var a=G(r)||b_(r);return a?t(r,i):(a||Jr(),n)}},iH=["value","background"],u3;function ta(e){"@babel/helpers - typeof";return ta=typeof Symbol=="function"&&typeof Symbol.iterator=="symbol"?function(t){return typeof t}:function(t){return t&&typeof Symbol=="function"&&t.constructor===Symbol&&t!==Symbol.prototype?"symbol":typeof t},ta(e)}function aH(e,t){if(e==null)return{};var n=lH(e,t),r,i;if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);for(i=0;i<a.length;i++)r=a[i],!(t.indexOf(r)>=0)&&Object.prototype.propertyIsEnumerable.call(e,r)&&(n[r]=e[r])}return n}function lH(e,t){if(e==null)return{};var n={};for(var r in e)if(Object.prototype.hasOwnProperty.call(e,r)){if(t.indexOf(r)>=0)continue;n[r]=e[r]}return n}function Sc(){return Sc=Object.assign?Object.assign.bind():function(e){for(var t=1;t<arguments.length;t++){var n=arguments[t];for(var r in n)Object.prototype.hasOwnProperty.call(n,r)&&(e[r]=n[r])}return e},Sc.apply(this,arguments)}function I5(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter(function(i){return Object.getOwnPropertyDescriptor(e,i).enumerable})),n.push.apply(n,r)}return n}function Te(e){for(var t=1;t<arguments.length;t++){var n=arguments[t]!=null?arguments[t]:{};t%2?I5(Object(n),!0).forEach(function(r){rr(e,r,n[r])}):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):I5(Object(n)).forEach(function(r){Object.defineProperty(e,r,Object.getOwnPropertyDescriptor(n,r))})}return e}function oH(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}function D5(e,t){for(var n=0;n<t.length;n++){var r=t[n];r.enumerable=r.enumerable||!1,r.configurable=!0,"value"in r&&(r.writable=!0),Object.defineProperty(e,f3(r.key),r)}}function sH(e,t,n){return t&&D5(e.prototype,t),n&&D5(e,n),Object.defineProperty(e,"prototype",{writable:!1}),e}function cH(e,t,n){return t=jc(t),uH(e,d3()?Reflect.construct(t,n||[],jc(e).constructor):t.apply(e,n))}function uH(e,t){if(t&&(ta(t)==="object"||typeof t=="function"))return t;if(t!==void 0)throw new TypeError("Derived constructors may only return object or undefined");return dH(e)}function dH(e){if(e===void 0)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return e}function d3(){try{var e=!Boolean.prototype.valueOf.call(Reflect.construct(Boolean,[],function(){}))}catch{}return(d3=function(){return!!e})()}function jc(e){return jc=Object.setPrototypeOf?Object.getPrototypeOf.bind():function(n){return n.__proto__||Object.getPrototypeOf(n)},jc(e)}function fH(e,t){if(typeof t!="function"&&t!==null)throw new TypeError("Super expression must either be null or a function");e.prototype=Object.create(t&&t.prototype,{constructor:{value:e,writable:!0,configurable:!0}}),Object.defineProperty(e,"prototype",{writable:!1}),t&&Rf(e,t)}function Rf(e,t){return Rf=Object.setPrototypeOf?Object.setPrototypeOf.bind():function(r,i){return r.__proto__=i,r},Rf(e,t)}function rr(e,t,n){return t=f3(t),t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function f3(e){var t=pH(e,"string");return ta(t)=="symbol"?t:t+""}function pH(e,t){if(ta(e)!="object"||!e)return e;var n=e[Symbol.toPrimitive];if(n!==void 0){var r=n.call(e,t);if(ta(r)!="object")return r;throw new TypeError("@@toPrimitive must return a primitive value.")}return String(e)}var pn=function(e){function t(){var n;oH(this,t);for(var r=arguments.length,i=new Array(r),a=0;a<r;a++)i[a]=arguments[a];return n=cH(this,t,[].concat(i)),rr(n,"state",{isAnimationFinished:!1}),rr(n,"id",du("recharts-bar-")),rr(n,"handleAnimationEnd",function(){var l=n.props.onAnimationEnd;n.setState({isAnimationFinished:!0}),l&&l()}),rr(n,"handleAnimationStart",function(){var l=n.props.onAnimationStart;n.setState({isAnimationFinished:!1}),l&&l()}),n}return fH(t,e),sH(t,[{key:"renderRectanglesStatically",value:function(r){var i=this,a=this.props,l=a.shape,o=a.dataKey,s=a.activeIndex,c=a.activeBar,f=oe(this.props,!1);return r&&r.map(function(d,p){var h=p===s,x=h?c:l,v=Te(Te(Te({},f),d),{},{isActive:h,option:x,index:p,dataKey:o,onAnimationStart:i.handleAnimationStart,onAnimationEnd:i.handleAnimationEnd});return T.createElement(Ve,Sc({className:"recharts-bar-rectangle"},Ls(i.props,d,p),{key:"rectangle-".concat(d==null?void 0:d.x,"-").concat(d==null?void 0:d.y,"-").concat(d==null?void 0:d.value,"-").concat(p)}),T.createElement(z5,v))})}},{key:"renderRectanglesWithAnimation",value:function(){var r=this,i=this.props,a=i.data,l=i.layout,o=i.isAnimationActive,s=i.animationBegin,c=i.animationDuration,f=i.animationEasing,d=i.animationId,p=this.state.prevData;return T.createElement(yr,{begin:s,duration:c,isActive:o,easing:f,from:{t:0},to:{t:1},key:"bar-".concat(d),onAnimationEnd:this.handleAnimationEnd,onAnimationStart:this.handleAnimationStart},function(h){var x=h.t,v=a.map(function(w,y){var m=p&&p[y];if(m){var g=si(m.x,w.x),_=si(m.y,w.y),b=si(m.width,w.width),k=si(m.height,w.height);return Te(Te({},w),{},{x:g(x),y:_(x),width:b(x),height:k(x)})}if(l==="horizontal"){var S=si(0,w.height),j=S(x);return Te(Te({},w),{},{y:w.y+w.height-j,height:j})}var O=si(0,w.width),C=O(x);return Te(Te({},w),{},{width:C})});return T.createElement(Ve,null,r.renderRectanglesStatically(v))})}},{key:"renderRectangles",value:function(){var r=this.props,i=r.data,a=r.isAnimationActive,l=this.state.prevData;return a&&i&&i.length&&(!l||!Vp(l,i))?this.renderRectanglesWithAnimation():this.renderRectanglesStatically(i)}},{key:"renderBackground",value:function(){var r=this,i=this.props,a=i.data,l=i.dataKey,o=i.activeIndex,s=oe(this.props.background,!1);return a.map(function(c,f){c.value;var d=c.background,p=aH(c,iH);if(!d)return null;var h=Te(Te(Te(Te(Te({},p),{},{fill:"#eee"},d),s),Ls(r.props,c,f)),{},{onAnimationStart:r.handleAnimationStart,onAnimationEnd:r.handleAnimationEnd,dataKey:l,index:f,className:"recharts-bar-background-rectangle"});return T.createElement(z5,Sc({key:"background-bar-".concat(f),option:r.props.background,isActive:f===o},h))})}},{key:"renderErrorBar",value:function(r,i){if(this.props.isAnimationActive&&!this.state.isAnimationFinished)return null;var a=this.props,l=a.data,o=a.xAxis,s=a.yAxis,c=a.layout,f=a.children,d=nn(f,Mu);if(!d)return null;var p=c==="vertical"?l[0].height/2:l[0].width/2,h=function(w,y){var m=Array.isArray(w.value)?w.value[1]:w.value;return{x:w.x,y:w.y,value:m,errorVal:xn(w,y)}},x={clipPath:r?"url(#clipPath-".concat(i,")"):null};return T.createElement(Ve,x,d.map(function(v){return T.cloneElement(v,{key:"error-bar-".concat(i,"-").concat(v.props.dataKey),data:l,xAxis:o,yAxis:s,layout:c,offset:p,dataPointFormatter:h})}))}},{key:"render",value:function(){var r=this.props,i=r.hide,a=r.data,l=r.className,o=r.xAxis,s=r.yAxis,c=r.left,f=r.top,d=r.width,p=r.height,h=r.isAnimationActive,x=r.background,v=r.id;if(i||!a||!a.length)return null;var w=this.state.isAnimationFinished,y=se("recharts-bar",l),m=o&&o.allowDataOverflow,g=s&&s.allowDataOverflow,_=m||g,b=ce(v)?this.id:v;return T.createElement(Ve,{className:y},m||g?T.createElement("defs",null,T.createElement("clipPath",{id:"clipPath-".concat(b)},T.createElement("rect",{x:m?c:c-d/2,y:g?f:f-p/2,width:m?d:d*2,height:g?p:p*2}))):null,T.createElement(Ve,{className:"recharts-bar-rectangles",clipPath:_?"url(#clipPath-".concat(b,")"):null},x?this.renderBackground():null,this.renderRectangles()),this.renderErrorBar(_,b),(!h||w)&&Hr.renderCallByParent(this.props,a))}}],[{key:"getDerivedStateFromProps",value:function(r,i){return r.animationId!==i.prevAnimationId?{prevAnimationId:r.animationId,curData:r.data,prevData:i.curData}:r.data!==i.curData?{curData:r.data}:null}}])}($.PureComponent);u3=pn;rr(pn,"displayName","Bar");rr(pn,"defaultProps",{xAxisId:0,yAxisId:0,legendType:"rect",minPointSize:0,hide:!1,data:[],layout:"vertical",activeBar:!1,isAnimationActive:!vo.isSsr,animationBegin:0,animationDuration:400,animationEasing:"ease"});rr(pn,"getComposedData",function(e){var t=e.props,n=e.item,r=e.barPosition,i=e.bandSize,a=e.xAxis,l=e.yAxis,o=e.xAxisTicks,s=e.yAxisTicks,c=e.stackedData,f=e.dataStartIndex,d=e.displayedData,p=e.offset,h=WL(r,n);if(!h)return null;var x=t.layout,v=n.type.defaultProps,w=v!==void 0?Te(Te({},v),n.props):n.props,y=w.dataKey,m=w.children,g=w.minPointSize,_=x==="horizontal"?l:a,b=c?_.scale.domain():null,k=YL({numericAxis:_}),S=nn(m,Dv),j=d.map(function(O,C){var M,P,N,z,E,L;c?M=UL(c[f+C],b):(M=xn(O,y),Array.isArray(M)||(M=[k,M]));var F=rH(g,u3.defaultProps.minPointSize)(M[1],C);if(x==="horizontal"){var A,I=[l.scale(M[0]),l.scale(M[1])],D=I[0],B=I[1];P=z2({axis:a,ticks:o,bandSize:i,offset:h.offset,entry:O,index:C}),N=(A=B??D)!==null&&A!==void 0?A:void 0,z=h.size;var W=D-B;if(E=Number.isNaN(W)?0:W,L={x:P,y:l.y,width:z,height:l.height},Math.abs(F)>0&&Math.abs(E)<Math.abs(F)){var X=Jt(E||F)*(Math.abs(F)-Math.abs(E));N-=X,E+=X}}else{var Y=[a.scale(M[0]),a.scale(M[1])],le=Y[0],je=Y[1];if(P=le,N=z2({axis:l,ticks:s,bandSize:i,offset:h.offset,entry:O,index:C}),z=je-le,E=h.size,L={x:a.x,y:N,width:a.width,height:E},Math.abs(F)>0&&Math.abs(z)<Math.abs(F)){var ht=Jt(z||F)*(Math.abs(F)-Math.abs(z));z+=ht}}return Te(Te(Te({},O),{},{x:P,y:N,width:z,height:E,value:c?M:M[1],payload:O,background:L},S&&S[C]&&S[C].props),{},{tooltipPayload:[Ug(n,O)],tooltipPosition:{x:P+z/2,y:N+E/2}})});return Te({data:j,layout:x},p)});function no(e){"@babel/helpers - typeof";return no=typeof Symbol=="function"&&typeof Symbol.iterator=="symbol"?function(t){return typeof t}:function(t){return t&&typeof Symbol=="function"&&t.constructor===Symbol&&t!==Symbol.prototype?"symbol":typeof t},no(e)}function hH(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}function L5(e,t){for(var n=0;n<t.length;n++){var r=t[n];r.enumerable=r.enumerable||!1,r.configurable=!0,"value"in r&&(r.writable=!0),Object.defineProperty(e,p3(r.key),r)}}function mH(e,t,n){return t&&L5(e.prototype,t),n&&L5(e,n),Object.defineProperty(e,"prototype",{writable:!1}),e}function F5(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter(function(i){return Object.getOwnPropertyDescriptor(e,i).enumerable})),n.push.apply(n,r)}return n}function Yt(e){for(var t=1;t<arguments.length;t++){var n=arguments[t]!=null?arguments[t]:{};t%2?F5(Object(n),!0).forEach(function(r){Cu(e,r,n[r])}):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):F5(Object(n)).forEach(function(r){Object.defineProperty(e,r,Object.getOwnPropertyDescriptor(n,r))})}return e}function Cu(e,t,n){return t=p3(t),t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function p3(e){var t=yH(e,"string");return no(t)=="symbol"?t:t+""}function yH(e,t){if(no(e)!="object"||!e)return e;var n=e[Symbol.toPrimitive];if(n!==void 0){var r=n.call(e,t);if(no(r)!="object")return r;throw new TypeError("@@toPrimitive must return a primitive value.")}return(t==="string"?String:Number)(e)}var vH=function(t,n,r,i,a){var l=t.width,o=t.height,s=t.layout,c=t.children,f=Object.keys(n),d={left:r.left,leftMirror:r.left,right:l-r.right,rightMirror:l-r.right,top:r.top,topMirror:r.top,bottom:o-r.bottom,bottomMirror:o-r.bottom},p=!!St(c,pn);return f.reduce(function(h,x){var v=n[x],w=v.orientation,y=v.domain,m=v.padding,g=m===void 0?{}:m,_=v.mirror,b=v.reversed,k="".concat(w).concat(_?"Mirror":""),S,j,O,C,M;if(v.type==="number"&&(v.padding==="gap"||v.padding==="no-gap")){var P=y[1]-y[0],N=1/0,z=v.categoricalDomain.sort(__);if(z.forEach(function(Y,le){le>0&&(N=Math.min((Y||0)-(z[le-1]||0),N))}),Number.isFinite(N)){var E=N/P,L=v.layout==="vertical"?r.height:r.width;if(v.padding==="gap"&&(S=E*L/2),v.padding==="no-gap"){var F=Zr(t.barCategoryGap,E*L),A=E*L/2;S=A-F-(A-F)/L*F}}}i==="xAxis"?j=[r.left+(g.left||0)+(S||0),r.left+r.width-(g.right||0)-(S||0)]:i==="yAxis"?j=s==="horizontal"?[r.top+r.height-(g.bottom||0),r.top+(g.top||0)]:[r.top+(g.top||0)+(S||0),r.top+r.height-(g.bottom||0)-(S||0)]:j=v.range,b&&(j=[j[1],j[0]]);var I=RL(v,a,p),D=I.scale,B=I.realScaleType;D.domain(y).range(j),BL(D);var W=KL(D,Yt(Yt({},v),{},{realScaleType:B}));i==="xAxis"?(M=w==="top"&&!_||w==="bottom"&&_,O=r.left,C=d[k]-M*v.height):i==="yAxis"&&(M=w==="left"&&!_||w==="right"&&_,O=d[k]-M*v.width,C=r.top);var X=Yt(Yt(Yt({},v),W),{},{realScaleType:B,x:O,y:C,scale:D,width:i==="xAxis"?r.width:v.width,height:i==="yAxis"?r.height:v.height});return X.bandSize=fc(X,W),!v.hide&&i==="xAxis"?d[k]+=(M?-1:1)*X.height:v.hide||(d[k]+=(M?-1:1)*X.width),Yt(Yt({},h),{},Cu({},x,X))},{})},h3=function(t,n){var r=t.x,i=t.y,a=n.x,l=n.y;return{x:Math.min(r,a),y:Math.min(i,l),width:Math.abs(a-r),height:Math.abs(l-i)}},gH=function(t){var n=t.x1,r=t.y1,i=t.x2,a=t.y2;return h3({x:n,y:r},{x:i,y:a})},m3=function(){function e(t){hH(this,e),this.scale=t}return mH(e,[{key:"domain",get:function(){return this.scale.domain}},{key:"range",get:function(){return this.scale.range}},{key:"rangeMin",get:function(){return this.range()[0]}},{key:"rangeMax",get:function(){return this.range()[1]}},{key:"bandwidth",get:function(){return this.scale.bandwidth}},{key:"apply",value:function(n){var r=arguments.length>1&&arguments[1]!==void 0?arguments[1]:{},i=r.bandAware,a=r.position;if(n!==void 0){if(a)switch(a){case"start":return this.scale(n);case"middle":{var l=this.bandwidth?this.bandwidth()/2:0;return this.scale(n)+l}case"end":{var o=this.bandwidth?this.bandwidth():0;return this.scale(n)+o}default:return this.scale(n)}if(i){var s=this.bandwidth?this.bandwidth()/2:0;return this.scale(n)+s}return this.scale(n)}}},{key:"isInRange",value:function(n){var r=this.range(),i=r[0],a=r[r.length-1];return i<=a?n>=i&&n<=a:n>=a&&n<=i}}],[{key:"create",value:function(n){return new e(n)}}])}();Cu(m3,"EPS",1e-4);var Zp=function(t){var n=Object.keys(t).reduce(function(r,i){return Yt(Yt({},r),{},Cu({},i,m3.create(t[i])))},{});return Yt(Yt({},n),{},{apply:function(i){var a=arguments.length>1&&arguments[1]!==void 0?arguments[1]:{},l=a.bandAware,o=a.position;return DU(i,function(s,c){return n[c].apply(s,{bandAware:l,position:o})})},isInRange:function(i){return c3(i,function(a,l){return n[l].isInRange(a)})}})};function xH(e){return(e%180+180)%180}var bH=function(t){var n=t.width,r=t.height,i=arguments.length>1&&arguments[1]!==void 0?arguments[1]:0,a=xH(i),l=a*Math.PI/180,o=Math.atan(r/n),s=l>o&&l<Math.PI-o?r/Math.sin(l):n/Math.cos(l);return Math.abs(s)},wH=wr,kH=yo,_H=yu;function SH(e){return function(t,n,r){var i=Object(t);if(!kH(t)){var a=wH(n);t=_H(t),n=function(o){return a(i[o],o,i)}}var l=e(t,n,r);return l>-1?i[a?t[l]:l]:void 0}}var jH=SH,OH=a3;function PH(e){var t=OH(e),n=t%1;return t===t?n?t-n:t:0}var AH=PH,MH=kv,NH=wr,EH=AH,CH=Math.max;function $H(e,t,n){var r=e==null?0:e.length;if(!r)return-1;var i=n==null?0:EH(n);return i<0&&(i=CH(r+i,0)),MH(e,NH(t),i)}var TH=$H,zH=jH,IH=TH,DH=zH(IH),LH=DH;const FH=me(LH);var RH=Ok(function(e){return{x:e.left,y:e.top,width:e.width,height:e.height}},function(e){return["l",e.left,"t",e.top,"w",e.width,"h",e.height].join("")}),Qp=$.createContext(void 0),Jp=$.createContext(void 0),y3=$.createContext(void 0),v3=$.createContext({}),g3=$.createContext(void 0),x3=$.createContext(0),b3=$.createContext(0),R5=function(t){var n=t.state,r=n.xAxisMap,i=n.yAxisMap,a=n.offset,l=t.clipPathId,o=t.children,s=t.width,c=t.height,f=RH(a);return T.createElement(Qp.Provider,{value:r},T.createElement(Jp.Provider,{value:i},T.createElement(v3.Provider,{value:a},T.createElement(y3.Provider,{value:f},T.createElement(g3.Provider,{value:l},T.createElement(x3.Provider,{value:c},T.createElement(b3.Provider,{value:s},o)))))))},BH=function(){return $.useContext(g3)},w3=function(t){var n=$.useContext(Qp);n==null&&Jr();var r=n[t];return r==null&&Jr(),r},WH=function(){var t=$.useContext(Qp);return er(t)},UH=function(){var t=$.useContext(Jp),n=FH(t,function(r){return c3(r.domain,Number.isFinite)});return n||er(t)},k3=function(t){var n=$.useContext(Jp);n==null&&Jr();var r=n[t];return r==null&&Jr(),r},HH=function(){var t=$.useContext(y3);return t},GH=function(){return $.useContext(v3)},eh=function(){return $.useContext(b3)},th=function(){return $.useContext(x3)};function na(e){"@babel/helpers - typeof";return na=typeof Symbol=="function"&&typeof Symbol.iterator=="symbol"?function(t){return typeof t}:function(t){return t&&typeof Symbol=="function"&&t.constructor===Symbol&&t!==Symbol.prototype?"symbol":typeof t},na(e)}function VH(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}function XH(e,t){for(var n=0;n<t.length;n++){var r=t[n];r.enumerable=r.enumerable||!1,r.configurable=!0,"value"in r&&(r.writable=!0),Object.defineProperty(e,S3(r.key),r)}}function qH(e,t,n){return t&&XH(e.prototype,t),Object.defineProperty(e,"prototype",{writable:!1}),e}function KH(e,t,n){return t=Oc(t),YH(e,_3()?Reflect.construct(t,n||[],Oc(e).constructor):t.apply(e,n))}function YH(e,t){if(t&&(na(t)==="object"||typeof t=="function"))return t;if(t!==void 0)throw new TypeError("Derived constructors may only return object or undefined");return ZH(e)}function ZH(e){if(e===void 0)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return e}function _3(){try{var e=!Boolean.prototype.valueOf.call(Reflect.construct(Boolean,[],function(){}))}catch{}return(_3=function(){return!!e})()}function Oc(e){return Oc=Object.setPrototypeOf?Object.getPrototypeOf.bind():function(n){return n.__proto__||Object.getPrototypeOf(n)},Oc(e)}function QH(e,t){if(typeof t!="function"&&t!==null)throw new TypeError("Super expression must either be null or a function");e.prototype=Object.create(t&&t.prototype,{constructor:{value:e,writable:!0,configurable:!0}}),Object.defineProperty(e,"prototype",{writable:!1}),t&&Bf(e,t)}function Bf(e,t){return Bf=Object.setPrototypeOf?Object.setPrototypeOf.bind():function(r,i){return r.__proto__=i,r},Bf(e,t)}function B5(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter(function(i){return Object.getOwnPropertyDescriptor(e,i).enumerable})),n.push.apply(n,r)}return n}function W5(e){for(var t=1;t<arguments.length;t++){var n=arguments[t]!=null?arguments[t]:{};t%2?B5(Object(n),!0).forEach(function(r){nh(e,r,n[r])}):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):B5(Object(n)).forEach(function(r){Object.defineProperty(e,r,Object.getOwnPropertyDescriptor(n,r))})}return e}function nh(e,t,n){return t=S3(t),t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function S3(e){var t=JH(e,"string");return na(t)=="symbol"?t:t+""}function JH(e,t){if(na(e)!="object"||!e)return e;var n=e[Symbol.toPrimitive];if(n!==void 0){var r=n.call(e,t);if(na(r)!="object")return r;throw new TypeError("@@toPrimitive must return a primitive value.")}return String(e)}function eG(e,t){return iG(e)||rG(e,t)||nG(e,t)||tG()}function tG(){throw new TypeError(`Invalid attempt to destructure non-iterable instance.
In order to be iterable, non-array objects must have a [Symbol.iterator]() method.`)}function nG(e,t){if(e){if(typeof e=="string")return U5(e,t);var n=Object.prototype.toString.call(e).slice(8,-1);if(n==="Object"&&e.constructor&&(n=e.constructor.name),n==="Map"||n==="Set")return Array.from(e);if(n==="Arguments"||/^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n))return U5(e,t)}}function U5(e,t){(t==null||t>e.length)&&(t=e.length);for(var n=0,r=new Array(t);n<t;n++)r[n]=e[n];return r}function rG(e,t){var n=e==null?null:typeof Symbol<"u"&&e[Symbol.iterator]||e["@@iterator"];if(n!=null){var r,i,a,l,o=[],s=!0,c=!1;try{if(a=(n=n.call(e)).next,t!==0)for(;!(s=(r=a.call(n)).done)&&(o.push(r.value),o.length!==t);s=!0);}catch(f){c=!0,i=f}finally{try{if(!s&&n.return!=null&&(l=n.return(),Object(l)!==l))return}finally{if(c)throw i}}return o}}function iG(e){if(Array.isArray(e))return e}function Wf(){return Wf=Object.assign?Object.assign.bind():function(e){for(var t=1;t<arguments.length;t++){var n=arguments[t];for(var r in n)Object.prototype.hasOwnProperty.call(n,r)&&(e[r]=n[r])}return e},Wf.apply(this,arguments)}var aG=function(t,n){var r;return T.isValidElement(t)?r=T.cloneElement(t,n):te(t)?r=t(n):r=T.createElement("line",Wf({},n,{className:"recharts-reference-line-line"})),r},lG=function(t,n,r,i,a,l,o,s,c){var f=a.x,d=a.y,p=a.width,h=a.height;if(r){var x=c.y,v=t.y.apply(x,{position:l});if(vn(c,"discard")&&!t.y.isInRange(v))return null;var w=[{x:f+p,y:v},{x:f,y:v}];return s==="left"?w.reverse():w}if(n){var y=c.x,m=t.x.apply(y,{position:l});if(vn(c,"discard")&&!t.x.isInRange(m))return null;var g=[{x:m,y:d+h},{x:m,y:d}];return o==="top"?g.reverse():g}if(i){var _=c.segment,b=_.map(function(k){return t.apply(k,{position:l})});return vn(c,"discard")&&MU(b,function(k){return!t.isInRange(k)})?null:b}return null};function oG(e){var t=e.x,n=e.y,r=e.segment,i=e.xAxisId,a=e.yAxisId,l=e.shape,o=e.className,s=e.alwaysShow,c=BH(),f=w3(i),d=k3(a),p=HH();if(!c||!p)return null;Cn(s===void 0,'The alwaysShow prop is deprecated. Please use ifOverflow="extendDomain" instead.');var h=Zp({x:f.scale,y:d.scale}),x=We(t),v=We(n),w=r&&r.length===2,y=lG(h,x,v,w,p,e.position,f.orientation,d.orientation,e);if(!y)return null;var m=eG(y,2),g=m[0],_=g.x,b=g.y,k=m[1],S=k.x,j=k.y,O=vn(e,"hidden")?"url(#".concat(c,")"):void 0,C=W5(W5({clipPath:O},oe(e,!0)),{},{x1:_,y1:b,x2:S,y2:j});return T.createElement(Ve,{className:se("recharts-reference-line",o)},aG(l,C),lt.renderCallByParent(e,gH({x1:_,y1:b,x2:S,y2:j})))}var rh=function(e){function t(){return VH(this,t),KH(this,t,arguments)}return QH(t,e),qH(t,[{key:"render",value:function(){return T.createElement(oG,this.props)}}])}(T.Component);nh(rh,"displayName","ReferenceLine");nh(rh,"defaultProps",{isFront:!1,ifOverflow:"discard",xAxisId:0,yAxisId:0,fill:"none",stroke:"#ccc",fillOpacity:1,strokeWidth:1,position:"middle"});function Uf(){return Uf=Object.assign?Object.assign.bind():function(e){for(var t=1;t<arguments.length;t++){var n=arguments[t];for(var r in n)Object.prototype.hasOwnProperty.call(n,r)&&(e[r]=n[r])}return e},Uf.apply(this,arguments)}function ra(e){"@babel/helpers - typeof";return ra=typeof Symbol=="function"&&typeof Symbol.iterator=="symbol"?function(t){return typeof t}:function(t){return t&&typeof Symbol=="function"&&t.constructor===Symbol&&t!==Symbol.prototype?"symbol":typeof t},ra(e)}function H5(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter(function(i){return Object.getOwnPropertyDescriptor(e,i).enumerable})),n.push.apply(n,r)}return n}function G5(e){for(var t=1;t<arguments.length;t++){var n=arguments[t]!=null?arguments[t]:{};t%2?H5(Object(n),!0).forEach(function(r){$u(e,r,n[r])}):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):H5(Object(n)).forEach(function(r){Object.defineProperty(e,r,Object.getOwnPropertyDescriptor(n,r))})}return e}function sG(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}function cG(e,t){for(var n=0;n<t.length;n++){var r=t[n];r.enumerable=r.enumerable||!1,r.configurable=!0,"value"in r&&(r.writable=!0),Object.defineProperty(e,O3(r.key),r)}}function uG(e,t,n){return t&&cG(e.prototype,t),Object.defineProperty(e,"prototype",{writable:!1}),e}function dG(e,t,n){return t=Pc(t),fG(e,j3()?Reflect.construct(t,n||[],Pc(e).constructor):t.apply(e,n))}function fG(e,t){if(t&&(ra(t)==="object"||typeof t=="function"))return t;if(t!==void 0)throw new TypeError("Derived constructors may only return object or undefined");return pG(e)}function pG(e){if(e===void 0)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return e}function j3(){try{var e=!Boolean.prototype.valueOf.call(Reflect.construct(Boolean,[],function(){}))}catch{}return(j3=function(){return!!e})()}function Pc(e){return Pc=Object.setPrototypeOf?Object.getPrototypeOf.bind():function(n){return n.__proto__||Object.getPrototypeOf(n)},Pc(e)}function hG(e,t){if(typeof t!="function"&&t!==null)throw new TypeError("Super expression must either be null or a function");e.prototype=Object.create(t&&t.prototype,{constructor:{value:e,writable:!0,configurable:!0}}),Object.defineProperty(e,"prototype",{writable:!1}),t&&Hf(e,t)}function Hf(e,t){return Hf=Object.setPrototypeOf?Object.setPrototypeOf.bind():function(r,i){return r.__proto__=i,r},Hf(e,t)}function $u(e,t,n){return t=O3(t),t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function O3(e){var t=mG(e,"string");return ra(t)=="symbol"?t:t+""}function mG(e,t){if(ra(e)!="object"||!e)return e;var n=e[Symbol.toPrimitive];if(n!==void 0){var r=n.call(e,t);if(ra(r)!="object")return r;throw new TypeError("@@toPrimitive must return a primitive value.")}return String(e)}var yG=function(t){var n=t.x,r=t.y,i=t.xAxis,a=t.yAxis,l=Zp({x:i.scale,y:a.scale}),o=l.apply({x:n,y:r},{bandAware:!0});return vn(t,"discard")&&!l.isInRange(o)?null:o},Tu=function(e){function t(){return sG(this,t),dG(this,t,arguments)}return hG(t,e),uG(t,[{key:"render",value:function(){var r=this.props,i=r.x,a=r.y,l=r.r,o=r.alwaysShow,s=r.clipPathId,c=We(i),f=We(a);if(Cn(o===void 0,'The alwaysShow prop is deprecated. Please use ifOverflow="extendDomain" instead.'),!c||!f)return null;var d=yG(this.props);if(!d)return null;var p=d.x,h=d.y,x=this.props,v=x.shape,w=x.className,y=vn(this.props,"hidden")?"url(#".concat(s,")"):void 0,m=G5(G5({clipPath:y},oe(this.props,!0)),{},{cx:p,cy:h});return T.createElement(Ve,{className:se("recharts-reference-dot",w)},t.renderDot(v,m),lt.renderCallByParent(this.props,{x:p-l,y:h-l,width:2*l,height:2*l}))}}])}(T.Component);$u(Tu,"displayName","ReferenceDot");$u(Tu,"defaultProps",{isFront:!1,ifOverflow:"discard",xAxisId:0,yAxisId:0,r:10,fill:"#fff",stroke:"#ccc",fillOpacity:1,strokeWidth:1});$u(Tu,"renderDot",function(e,t){var n;return T.isValidElement(e)?n=T.cloneElement(e,t):te(e)?n=e(t):n=T.createElement(r3,Uf({},t,{cx:t.cx,cy:t.cy,className:"recharts-reference-dot-dot"})),n});function Gf(){return Gf=Object.assign?Object.assign.bind():function(e){for(var t=1;t<arguments.length;t++){var n=arguments[t];for(var r in n)Object.prototype.hasOwnProperty.call(n,r)&&(e[r]=n[r])}return e},Gf.apply(this,arguments)}function ia(e){"@babel/helpers - typeof";return ia=typeof Symbol=="function"&&typeof Symbol.iterator=="symbol"?function(t){return typeof t}:function(t){return t&&typeof Symbol=="function"&&t.constructor===Symbol&&t!==Symbol.prototype?"symbol":typeof t},ia(e)}function V5(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter(function(i){return Object.getOwnPropertyDescriptor(e,i).enumerable})),n.push.apply(n,r)}return n}function X5(e){for(var t=1;t<arguments.length;t++){var n=arguments[t]!=null?arguments[t]:{};t%2?V5(Object(n),!0).forEach(function(r){zu(e,r,n[r])}):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):V5(Object(n)).forEach(function(r){Object.defineProperty(e,r,Object.getOwnPropertyDescriptor(n,r))})}return e}function vG(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}function gG(e,t){for(var n=0;n<t.length;n++){var r=t[n];r.enumerable=r.enumerable||!1,r.configurable=!0,"value"in r&&(r.writable=!0),Object.defineProperty(e,A3(r.key),r)}}function xG(e,t,n){return t&&gG(e.prototype,t),Object.defineProperty(e,"prototype",{writable:!1}),e}function bG(e,t,n){return t=Ac(t),wG(e,P3()?Reflect.construct(t,n||[],Ac(e).constructor):t.apply(e,n))}function wG(e,t){if(t&&(ia(t)==="object"||typeof t=="function"))return t;if(t!==void 0)throw new TypeError("Derived constructors may only return object or undefined");return kG(e)}function kG(e){if(e===void 0)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return e}function P3(){try{var e=!Boolean.prototype.valueOf.call(Reflect.construct(Boolean,[],function(){}))}catch{}return(P3=function(){return!!e})()}function Ac(e){return Ac=Object.setPrototypeOf?Object.getPrototypeOf.bind():function(n){return n.__proto__||Object.getPrototypeOf(n)},Ac(e)}function _G(e,t){if(typeof t!="function"&&t!==null)throw new TypeError("Super expression must either be null or a function");e.prototype=Object.create(t&&t.prototype,{constructor:{value:e,writable:!0,configurable:!0}}),Object.defineProperty(e,"prototype",{writable:!1}),t&&Vf(e,t)}function Vf(e,t){return Vf=Object.setPrototypeOf?Object.setPrototypeOf.bind():function(r,i){return r.__proto__=i,r},Vf(e,t)}function zu(e,t,n){return t=A3(t),t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function A3(e){var t=SG(e,"string");return ia(t)=="symbol"?t:t+""}function SG(e,t){if(ia(e)!="object"||!e)return e;var n=e[Symbol.toPrimitive];if(n!==void 0){var r=n.call(e,t);if(ia(r)!="object")return r;throw new TypeError("@@toPrimitive must return a primitive value.")}return String(e)}var jG=function(t,n,r,i,a){var l=a.x1,o=a.x2,s=a.y1,c=a.y2,f=a.xAxis,d=a.yAxis;if(!f||!d)return null;var p=Zp({x:f.scale,y:d.scale}),h={x:t?p.x.apply(l,{position:"start"}):p.x.rangeMin,y:r?p.y.apply(s,{position:"start"}):p.y.rangeMin},x={x:n?p.x.apply(o,{position:"end"}):p.x.rangeMax,y:i?p.y.apply(c,{position:"end"}):p.y.rangeMax};return vn(a,"discard")&&(!p.isInRange(h)||!p.isInRange(x))?null:h3(h,x)},Iu=function(e){function t(){return vG(this,t),bG(this,t,arguments)}return _G(t,e),xG(t,[{key:"render",value:function(){var r=this.props,i=r.x1,a=r.x2,l=r.y1,o=r.y2,s=r.className,c=r.alwaysShow,f=r.clipPathId;Cn(c===void 0,'The alwaysShow prop is deprecated. Please use ifOverflow="extendDomain" instead.');var d=We(i),p=We(a),h=We(l),x=We(o),v=this.props.shape;if(!d&&!p&&!h&&!x&&!v)return null;var w=jG(d,p,h,x,this.props);if(!w&&!v)return null;var y=vn(this.props,"hidden")?"url(#".concat(f,")"):void 0;return T.createElement(Ve,{className:se("recharts-reference-area",s)},t.renderRect(v,X5(X5({clipPath:y},oe(this.props,!0)),w)),lt.renderCallByParent(this.props,w))}}])}(T.Component);zu(Iu,"displayName","ReferenceArea");zu(Iu,"defaultProps",{isFront:!1,ifOverflow:"discard",xAxisId:0,yAxisId:0,r:10,fill:"#ccc",fillOpacity:.5,stroke:"none",strokeWidth:1});zu(Iu,"renderRect",function(e,t){var n;return T.isValidElement(e)?n=T.cloneElement(e,t):te(e)?n=e(t):n=T.createElement(Yp,Gf({},t,{className:"recharts-reference-area-rect"})),n});function M3(e,t,n){if(t<1)return[];if(t===1&&n===void 0)return e;for(var r=[],i=0;i<e.length;i+=t)r.push(e[i]);return r}function OG(e,t,n){var r={width:e.width+t.width,height:e.height+t.height};return bH(r,n)}function PG(e,t,n){var r=n==="width",i=e.x,a=e.y,l=e.width,o=e.height;return t===1?{start:r?i:a,end:r?i+l:a+o}:{start:r?i+l:a+o,end:r?i:a}}function Mc(e,t,n,r,i){if(e*t<e*r||e*t>e*i)return!1;var a=n();return e*(t-e*a/2-r)>=0&&e*(t+e*a/2-i)<=0}function AG(e,t){return M3(e,t+1)}function MG(e,t,n,r,i){for(var a=(r||[]).slice(),l=t.start,o=t.end,s=0,c=1,f=l,d=function(){var x=r==null?void 0:r[s];if(x===void 0)return{v:M3(r,c)};var v=s,w,y=function(){return w===void 0&&(w=n(x,v)),w},m=x.coordinate,g=s===0||Mc(e,m,y,f,o);g||(s=0,f=l,c+=1),g&&(f=m+e*(y()/2+i),s+=c)},p;c<=a.length;)if(p=d(),p)return p.v;return[]}function ro(e){"@babel/helpers - typeof";return ro=typeof Symbol=="function"&&typeof Symbol.iterator=="symbol"?function(t){return typeof t}:function(t){return t&&typeof Symbol=="function"&&t.constructor===Symbol&&t!==Symbol.prototype?"symbol":typeof t},ro(e)}function q5(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter(function(i){return Object.getOwnPropertyDescriptor(e,i).enumerable})),n.push.apply(n,r)}return n}function it(e){for(var t=1;t<arguments.length;t++){var n=arguments[t]!=null?arguments[t]:{};t%2?q5(Object(n),!0).forEach(function(r){NG(e,r,n[r])}):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):q5(Object(n)).forEach(function(r){Object.defineProperty(e,r,Object.getOwnPropertyDescriptor(n,r))})}return e}function NG(e,t,n){return t=EG(t),t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function EG(e){var t=CG(e,"string");return ro(t)=="symbol"?t:t+""}function CG(e,t){if(ro(e)!="object"||!e)return e;var n=e[Symbol.toPrimitive];if(n!==void 0){var r=n.call(e,t);if(ro(r)!="object")return r;throw new TypeError("@@toPrimitive must return a primitive value.")}return(t==="string"?String:Number)(e)}function $G(e,t,n,r,i){for(var a=(r||[]).slice(),l=a.length,o=t.start,s=t.end,c=function(p){var h=a[p],x,v=function(){return x===void 0&&(x=n(h,p)),x};if(p===l-1){var w=e*(h.coordinate+e*v()/2-s);a[p]=h=it(it({},h),{},{tickCoord:w>0?h.coordinate-w*e:h.coordinate})}else a[p]=h=it(it({},h),{},{tickCoord:h.coordinate});var y=Mc(e,h.tickCoord,v,o,s);y&&(s=h.tickCoord-e*(v()/2+i),a[p]=it(it({},h),{},{isShow:!0}))},f=l-1;f>=0;f--)c(f);return a}function TG(e,t,n,r,i,a){var l=(r||[]).slice(),o=l.length,s=t.start,c=t.end;if(a){var f=r[o-1],d=n(f,o-1),p=e*(f.coordinate+e*d/2-c);l[o-1]=f=it(it({},f),{},{tickCoord:p>0?f.coordinate-p*e:f.coordinate});var h=Mc(e,f.tickCoord,function(){return d},s,c);h&&(c=f.tickCoord-e*(d/2+i),l[o-1]=it(it({},f),{},{isShow:!0}))}for(var x=a?o-1:o,v=function(m){var g=l[m],_,b=function(){return _===void 0&&(_=n(g,m)),_};if(m===0){var k=e*(g.coordinate-e*b()/2-s);l[m]=g=it(it({},g),{},{tickCoord:k<0?g.coordinate-k*e:g.coordinate})}else l[m]=g=it(it({},g),{},{tickCoord:g.coordinate});var S=Mc(e,g.tickCoord,b,s,c);S&&(s=g.tickCoord+e*(b()/2+i),l[m]=it(it({},g),{},{isShow:!0}))},w=0;w<x;w++)v(w);return l}function ih(e,t,n){var r=e.tick,i=e.ticks,a=e.viewBox,l=e.minTickGap,o=e.orientation,s=e.interval,c=e.tickFormatter,f=e.unit,d=e.angle;if(!i||!i.length||!r)return[];if(G(s)||vo.isSsr)return AG(i,typeof s=="number"&&G(s)?s:0);var p=[],h=o==="top"||o==="bottom"?"width":"height",x=f&&h==="width"?il(f,{fontSize:t,letterSpacing:n}):{width:0,height:0},v=function(g,_){var b=te(c)?c(g.value,_):g.value;return h==="width"?OG(il(b,{fontSize:t,letterSpacing:n}),x,d):il(b,{fontSize:t,letterSpacing:n})[h]},w=i.length>=2?Jt(i[1].coordinate-i[0].coordinate):1,y=PG(a,w,h);return s==="equidistantPreserveStart"?MG(w,y,v,i,l):(s==="preserveStart"||s==="preserveStartEnd"?p=TG(w,y,v,i,l,s==="preserveStartEnd"):p=$G(w,y,v,i,l),p.filter(function(m){return m.isShow}))}var zG=["viewBox"],IG=["viewBox"],DG=["ticks"];function aa(e){"@babel/helpers - typeof";return aa=typeof Symbol=="function"&&typeof Symbol.iterator=="symbol"?function(t){return typeof t}:function(t){return t&&typeof Symbol=="function"&&t.constructor===Symbol&&t!==Symbol.prototype?"symbol":typeof t},aa(e)}function ji(){return ji=Object.assign?Object.assign.bind():function(e){for(var t=1;t<arguments.length;t++){var n=arguments[t];for(var r in n)Object.prototype.hasOwnProperty.call(n,r)&&(e[r]=n[r])}return e},ji.apply(this,arguments)}function K5(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter(function(i){return Object.getOwnPropertyDescriptor(e,i).enumerable})),n.push.apply(n,r)}return n}function Le(e){for(var t=1;t<arguments.length;t++){var n=arguments[t]!=null?arguments[t]:{};t%2?K5(Object(n),!0).forEach(function(r){ah(e,r,n[r])}):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):K5(Object(n)).forEach(function(r){Object.defineProperty(e,r,Object.getOwnPropertyDescriptor(n,r))})}return e}function Dd(e,t){if(e==null)return{};var n=LG(e,t),r,i;if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);for(i=0;i<a.length;i++)r=a[i],!(t.indexOf(r)>=0)&&Object.prototype.propertyIsEnumerable.call(e,r)&&(n[r]=e[r])}return n}function LG(e,t){if(e==null)return{};var n={};for(var r in e)if(Object.prototype.hasOwnProperty.call(e,r)){if(t.indexOf(r)>=0)continue;n[r]=e[r]}return n}function FG(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}function Y5(e,t){for(var n=0;n<t.length;n++){var r=t[n];r.enumerable=r.enumerable||!1,r.configurable=!0,"value"in r&&(r.writable=!0),Object.defineProperty(e,E3(r.key),r)}}function RG(e,t,n){return t&&Y5(e.prototype,t),n&&Y5(e,n),Object.defineProperty(e,"prototype",{writable:!1}),e}function BG(e,t,n){return t=Nc(t),WG(e,N3()?Reflect.construct(t,n||[],Nc(e).constructor):t.apply(e,n))}function WG(e,t){if(t&&(aa(t)==="object"||typeof t=="function"))return t;if(t!==void 0)throw new TypeError("Derived constructors may only return object or undefined");return UG(e)}function UG(e){if(e===void 0)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return e}function N3(){try{var e=!Boolean.prototype.valueOf.call(Reflect.construct(Boolean,[],function(){}))}catch{}return(N3=function(){return!!e})()}function Nc(e){return Nc=Object.setPrototypeOf?Object.getPrototypeOf.bind():function(n){return n.__proto__||Object.getPrototypeOf(n)},Nc(e)}function HG(e,t){if(typeof t!="function"&&t!==null)throw new TypeError("Super expression must either be null or a function");e.prototype=Object.create(t&&t.prototype,{constructor:{value:e,writable:!0,configurable:!0}}),Object.defineProperty(e,"prototype",{writable:!1}),t&&Xf(e,t)}function Xf(e,t){return Xf=Object.setPrototypeOf?Object.setPrototypeOf.bind():function(r,i){return r.__proto__=i,r},Xf(e,t)}function ah(e,t,n){return t=E3(t),t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function E3(e){var t=GG(e,"string");return aa(t)=="symbol"?t:t+""}function GG(e,t){if(aa(e)!="object"||!e)return e;var n=e[Symbol.toPrimitive];if(n!==void 0){var r=n.call(e,t);if(aa(r)!="object")return r;throw new TypeError("@@toPrimitive must return a primitive value.")}return String(e)}var Sa=function(e){function t(n){var r;return FG(this,t),r=BG(this,t,[n]),r.state={fontSize:"",letterSpacing:""},r}return HG(t,e),RG(t,[{key:"shouldComponentUpdate",value:function(r,i){var a=r.viewBox,l=Dd(r,zG),o=this.props,s=o.viewBox,c=Dd(o,IG);return!$i(a,s)||!$i(l,c)||!$i(i,this.state)}},{key:"componentDidMount",value:function(){var r=this.layerReference;if(r){var i=r.getElementsByClassName("recharts-cartesian-axis-tick-value")[0];i&&this.setState({fontSize:window.getComputedStyle(i).fontSize,letterSpacing:window.getComputedStyle(i).letterSpacing})}}},{key:"getTickLineCoord",value:function(r){var i=this.props,a=i.x,l=i.y,o=i.width,s=i.height,c=i.orientation,f=i.tickSize,d=i.mirror,p=i.tickMargin,h,x,v,w,y,m,g=d?-1:1,_=r.tickSize||f,b=G(r.tickCoord)?r.tickCoord:r.coordinate;switch(c){case"top":h=x=r.coordinate,w=l+ +!d*s,v=w-g*_,m=v-g*p,y=b;break;case"left":v=w=r.coordinate,x=a+ +!d*o,h=x-g*_,y=h-g*p,m=b;break;case"right":v=w=r.coordinate,x=a+ +d*o,h=x+g*_,y=h+g*p,m=b;break;default:h=x=r.coordinate,w=l+ +d*s,v=w+g*_,m=v+g*p,y=b;break}return{line:{x1:h,y1:v,x2:x,y2:w},tick:{x:y,y:m}}}},{key:"getTickTextAnchor",value:function(){var r=this.props,i=r.orientation,a=r.mirror,l;switch(i){case"left":l=a?"start":"end";break;case"right":l=a?"end":"start";break;default:l="middle";break}return l}},{key:"getTickVerticalAnchor",value:function(){var r=this.props,i=r.orientation,a=r.mirror,l="end";switch(i){case"left":case"right":l="middle";break;case"top":l=a?"start":"end";break;default:l=a?"end":"start";break}return l}},{key:"renderAxisLine",value:function(){var r=this.props,i=r.x,a=r.y,l=r.width,o=r.height,s=r.orientation,c=r.mirror,f=r.axisLine,d=Le(Le(Le({},oe(this.props,!1)),oe(f,!1)),{},{fill:"none"});if(s==="top"||s==="bottom"){var p=+(s==="top"&&!c||s==="bottom"&&c);d=Le(Le({},d),{},{x1:i,y1:a+p*o,x2:i+l,y2:a+p*o})}else{var h=+(s==="left"&&!c||s==="right"&&c);d=Le(Le({},d),{},{x1:i+h*l,y1:a,x2:i+h*l,y2:a+o})}return T.createElement("line",ji({},d,{className:se("recharts-cartesian-axis-line",Ft(f,"className"))}))}},{key:"renderTicks",value:function(r,i,a){var l=this,o=this.props,s=o.tickLine,c=o.stroke,f=o.tick,d=o.tickFormatter,p=o.unit,h=ih(Le(Le({},this.props),{},{ticks:r}),i,a),x=this.getTickTextAnchor(),v=this.getTickVerticalAnchor(),w=oe(this.props,!1),y=oe(f,!1),m=Le(Le({},w),{},{fill:"none"},oe(s,!1)),g=h.map(function(_,b){var k=l.getTickLineCoord(_),S=k.line,j=k.tick,O=Le(Le(Le(Le({textAnchor:x,verticalAnchor:v},w),{},{stroke:"none",fill:c},y),j),{},{index:b,payload:_,visibleTicksCount:h.length,tickFormatter:d});return T.createElement(Ve,ji({className:"recharts-cartesian-axis-tick",key:"tick-".concat(_.value,"-").concat(_.coordinate,"-").concat(_.tickCoord)},Ls(l.props,_,b)),s&&T.createElement("line",ji({},m,S,{className:se("recharts-cartesian-axis-tick-line",Ft(s,"className"))})),f&&t.renderTickItem(f,O,"".concat(te(d)?d(_.value,b):_.value).concat(p||"")))});return T.createElement("g",{className:"recharts-cartesian-axis-ticks"},g)}},{key:"render",value:function(){var r=this,i=this.props,a=i.axisLine,l=i.width,o=i.height,s=i.ticksGenerator,c=i.className,f=i.hide;if(f)return null;var d=this.props,p=d.ticks,h=Dd(d,DG),x=p;return te(s)&&(x=p&&p.length>0?s(this.props):s(h)),l<=0||o<=0||!x||!x.length?null:T.createElement(Ve,{className:se("recharts-cartesian-axis",c),ref:function(w){r.layerReference=w}},a&&this.renderAxisLine(),this.renderTicks(x,this.state.fontSize,this.state.letterSpacing),lt.renderCallByParent(this.props))}}],[{key:"renderTickItem",value:function(r,i,a){var l,o=se(i.className,"recharts-cartesian-axis-tick-value");return T.isValidElement(r)?l=T.cloneElement(r,Le(Le({},i),{},{className:o})):te(r)?l=r(Le(Le({},i),{},{className:o})):l=T.createElement(Qs,ji({},i,{className:"recharts-cartesian-axis-tick-value"}),a),l}}])}($.Component);ah(Sa,"displayName","CartesianAxis");ah(Sa,"defaultProps",{x:0,y:0,width:0,height:0,viewBox:{x:0,y:0,width:0,height:0},orientation:"bottom",ticks:[],stroke:"#666",tickLine:!0,axisLine:!0,tick:!0,mirror:!1,minTickGap:5,tickSize:6,tickMargin:2,interval:"preserveEnd"});var VG=["x1","y1","x2","y2","key"],XG=["offset"];function ei(e){"@babel/helpers - typeof";return ei=typeof Symbol=="function"&&typeof Symbol.iterator=="symbol"?function(t){return typeof t}:function(t){return t&&typeof Symbol=="function"&&t.constructor===Symbol&&t!==Symbol.prototype?"symbol":typeof t},ei(e)}function Z5(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter(function(i){return Object.getOwnPropertyDescriptor(e,i).enumerable})),n.push.apply(n,r)}return n}function ot(e){for(var t=1;t<arguments.length;t++){var n=arguments[t]!=null?arguments[t]:{};t%2?Z5(Object(n),!0).forEach(function(r){qG(e,r,n[r])}):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):Z5(Object(n)).forEach(function(r){Object.defineProperty(e,r,Object.getOwnPropertyDescriptor(n,r))})}return e}function qG(e,t,n){return t=KG(t),t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function KG(e){var t=YG(e,"string");return ei(t)=="symbol"?t:t+""}function YG(e,t){if(ei(e)!="object"||!e)return e;var n=e[Symbol.toPrimitive];if(n!==void 0){var r=n.call(e,t);if(ei(r)!="object")return r;throw new TypeError("@@toPrimitive must return a primitive value.")}return(t==="string"?String:Number)(e)}function Fr(){return Fr=Object.assign?Object.assign.bind():function(e){for(var t=1;t<arguments.length;t++){var n=arguments[t];for(var r in n)Object.prototype.hasOwnProperty.call(n,r)&&(e[r]=n[r])}return e},Fr.apply(this,arguments)}function Q5(e,t){if(e==null)return{};var n=ZG(e,t),r,i;if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);for(i=0;i<a.length;i++)r=a[i],!(t.indexOf(r)>=0)&&Object.prototype.propertyIsEnumerable.call(e,r)&&(n[r]=e[r])}return n}function ZG(e,t){if(e==null)return{};var n={};for(var r in e)if(Object.prototype.hasOwnProperty.call(e,r)){if(t.indexOf(r)>=0)continue;n[r]=e[r]}return n}var QG=function(t){var n=t.fill;if(!n||n==="none")return null;var r=t.fillOpacity,i=t.x,a=t.y,l=t.width,o=t.height,s=t.ry;return T.createElement("rect",{x:i,y:a,ry:s,width:l,height:o,stroke:"none",fill:n,fillOpacity:r,className:"recharts-cartesian-grid-bg"})};function C3(e,t){var n;if(T.isValidElement(e))n=T.cloneElement(e,t);else if(te(e))n=e(t);else{var r=t.x1,i=t.y1,a=t.x2,l=t.y2,o=t.key,s=Q5(t,VG),c=oe(s,!1);c.offset;var f=Q5(c,XG);n=T.createElement("line",Fr({},f,{x1:r,y1:i,x2:a,y2:l,fill:"none",key:o}))}return n}function JG(e){var t=e.x,n=e.width,r=e.horizontal,i=r===void 0?!0:r,a=e.horizontalPoints;if(!i||!a||!a.length)return null;var l=a.map(function(o,s){var c=ot(ot({},e),{},{x1:t,y1:o,x2:t+n,y2:o,key:"line-".concat(s),index:s});return C3(i,c)});return T.createElement("g",{className:"recharts-cartesian-grid-horizontal"},l)}function eV(e){var t=e.y,n=e.height,r=e.vertical,i=r===void 0?!0:r,a=e.verticalPoints;if(!i||!a||!a.length)return null;var l=a.map(function(o,s){var c=ot(ot({},e),{},{x1:o,y1:t,x2:o,y2:t+n,key:"line-".concat(s),index:s});return C3(i,c)});return T.createElement("g",{className:"recharts-cartesian-grid-vertical"},l)}function tV(e){var t=e.horizontalFill,n=e.fillOpacity,r=e.x,i=e.y,a=e.width,l=e.height,o=e.horizontalPoints,s=e.horizontal,c=s===void 0?!0:s;if(!c||!t||!t.length)return null;var f=o.map(function(p){return Math.round(p+i-i)}).sort(function(p,h){return p-h});i!==f[0]&&f.unshift(0);var d=f.map(function(p,h){var x=!f[h+1],v=x?i+l-p:f[h+1]-p;if(v<=0)return null;var w=h%t.length;return T.createElement("rect",{key:"react-".concat(h),y:p,x:r,height:v,width:a,stroke:"none",fill:t[w],fillOpacity:n,className:"recharts-cartesian-grid-bg"})});return T.createElement("g",{className:"recharts-cartesian-gridstripes-horizontal"},d)}function nV(e){var t=e.vertical,n=t===void 0?!0:t,r=e.verticalFill,i=e.fillOpacity,a=e.x,l=e.y,o=e.width,s=e.height,c=e.verticalPoints;if(!n||!r||!r.length)return null;var f=c.map(function(p){return Math.round(p+a-a)}).sort(function(p,h){return p-h});a!==f[0]&&f.unshift(0);var d=f.map(function(p,h){var x=!f[h+1],v=x?a+o-p:f[h+1]-p;if(v<=0)return null;var w=h%r.length;return T.createElement("rect",{key:"react-".concat(h),x:p,y:l,width:v,height:s,stroke:"none",fill:r[w],fillOpacity:i,className:"recharts-cartesian-grid-bg"})});return T.createElement("g",{className:"recharts-cartesian-gridstripes-vertical"},d)}var rV=function(t,n){var r=t.xAxis,i=t.width,a=t.height,l=t.offset;return Bg(ih(ot(ot(ot({},Sa.defaultProps),r),{},{ticks:Mn(r,!0),viewBox:{x:0,y:0,width:i,height:a}})),l.left,l.left+l.width,n)},iV=function(t,n){var r=t.yAxis,i=t.width,a=t.height,l=t.offset;return Bg(ih(ot(ot(ot({},Sa.defaultProps),r),{},{ticks:Mn(r,!0),viewBox:{x:0,y:0,width:i,height:a}})),l.top,l.top+l.height,n)},di={horizontal:!0,vertical:!0,stroke:"#ccc",fill:"none",verticalFill:[],horizontalFill:[]};function qf(e){var t,n,r,i,a,l,o=eh(),s=th(),c=GH(),f=ot(ot({},e),{},{stroke:(t=e.stroke)!==null&&t!==void 0?t:di.stroke,fill:(n=e.fill)!==null&&n!==void 0?n:di.fill,horizontal:(r=e.horizontal)!==null&&r!==void 0?r:di.horizontal,horizontalFill:(i=e.horizontalFill)!==null&&i!==void 0?i:di.horizontalFill,vertical:(a=e.vertical)!==null&&a!==void 0?a:di.vertical,verticalFill:(l=e.verticalFill)!==null&&l!==void 0?l:di.verticalFill,x:G(e.x)?e.x:c.left,y:G(e.y)?e.y:c.top,width:G(e.width)?e.width:c.width,height:G(e.height)?e.height:c.height}),d=f.x,p=f.y,h=f.width,x=f.height,v=f.syncWithTicks,w=f.horizontalValues,y=f.verticalValues,m=WH(),g=UH();if(!G(h)||h<=0||!G(x)||x<=0||!G(d)||d!==+d||!G(p)||p!==+p)return null;var _=f.verticalCoordinatesGenerator||rV,b=f.horizontalCoordinatesGenerator||iV,k=f.horizontalPoints,S=f.verticalPoints;if((!k||!k.length)&&te(b)){var j=w&&w.length,O=b({yAxis:g?ot(ot({},g),{},{ticks:j?w:g.ticks}):void 0,width:o,height:s,offset:c},j?!0:v);Cn(Array.isArray(O),"horizontalCoordinatesGenerator should return Array but instead it returned [".concat(ei(O),"]")),Array.isArray(O)&&(k=O)}if((!S||!S.length)&&te(_)){var C=y&&y.length,M=_({xAxis:m?ot(ot({},m),{},{ticks:C?y:m.ticks}):void 0,width:o,height:s,offset:c},C?!0:v);Cn(Array.isArray(M),"verticalCoordinatesGenerator should return Array but instead it returned [".concat(ei(M),"]")),Array.isArray(M)&&(S=M)}return T.createElement("g",{className:"recharts-cartesian-grid"},T.createElement(QG,{fill:f.fill,fillOpacity:f.fillOpacity,x:f.x,y:f.y,width:f.width,height:f.height,ry:f.ry}),T.createElement(JG,Fr({},f,{offset:c,horizontalPoints:k,xAxis:m,yAxis:g})),T.createElement(eV,Fr({},f,{offset:c,verticalPoints:S,xAxis:m,yAxis:g})),T.createElement(tV,Fr({},f,{horizontalPoints:k})),T.createElement(nV,Fr({},f,{verticalPoints:S})))}qf.displayName="CartesianGrid";function la(e){"@babel/helpers - typeof";return la=typeof Symbol=="function"&&typeof Symbol.iterator=="symbol"?function(t){return typeof t}:function(t){return t&&typeof Symbol=="function"&&t.constructor===Symbol&&t!==Symbol.prototype?"symbol":typeof t},la(e)}function aV(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}function lV(e,t){for(var n=0;n<t.length;n++){var r=t[n];r.enumerable=r.enumerable||!1,r.configurable=!0,"value"in r&&(r.writable=!0),Object.defineProperty(e,z3(r.key),r)}}function oV(e,t,n){return t&&lV(e.prototype,t),Object.defineProperty(e,"prototype",{writable:!1}),e}function sV(e,t,n){return t=Ec(t),cV(e,$3()?Reflect.construct(t,n||[],Ec(e).constructor):t.apply(e,n))}function cV(e,t){if(t&&(la(t)==="object"||typeof t=="function"))return t;if(t!==void 0)throw new TypeError("Derived constructors may only return object or undefined");return uV(e)}function uV(e){if(e===void 0)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return e}function $3(){try{var e=!Boolean.prototype.valueOf.call(Reflect.construct(Boolean,[],function(){}))}catch{}return($3=function(){return!!e})()}function Ec(e){return Ec=Object.setPrototypeOf?Object.getPrototypeOf.bind():function(n){return n.__proto__||Object.getPrototypeOf(n)},Ec(e)}function dV(e,t){if(typeof t!="function"&&t!==null)throw new TypeError("Super expression must either be null or a function");e.prototype=Object.create(t&&t.prototype,{constructor:{value:e,writable:!0,configurable:!0}}),Object.defineProperty(e,"prototype",{writable:!1}),t&&Kf(e,t)}function Kf(e,t){return Kf=Object.setPrototypeOf?Object.setPrototypeOf.bind():function(r,i){return r.__proto__=i,r},Kf(e,t)}function T3(e,t,n){return t=z3(t),t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function z3(e){var t=fV(e,"string");return la(t)=="symbol"?t:t+""}function fV(e,t){if(la(e)!="object"||!e)return e;var n=e[Symbol.toPrimitive];if(n!==void 0){var r=n.call(e,t);if(la(r)!="object")return r;throw new TypeError("@@toPrimitive must return a primitive value.")}return String(e)}function Yf(){return Yf=Object.assign?Object.assign.bind():function(e){for(var t=1;t<arguments.length;t++){var n=arguments[t];for(var r in n)Object.prototype.hasOwnProperty.call(n,r)&&(e[r]=n[r])}return e},Yf.apply(this,arguments)}function pV(e){var t=e.xAxisId,n=eh(),r=th(),i=w3(t);return i==null?null:$.createElement(Sa,Yf({},i,{className:se("recharts-".concat(i.axisType," ").concat(i.axisType),i.className),viewBox:{x:0,y:0,width:n,height:r},ticksGenerator:function(l){return Mn(l,!0)}}))}var io=function(e){function t(){return aV(this,t),sV(this,t,arguments)}return dV(t,e),oV(t,[{key:"render",value:function(){return $.createElement(pV,this.props)}}])}($.Component);T3(io,"displayName","XAxis");T3(io,"defaultProps",{allowDecimals:!0,hide:!1,orientation:"bottom",width:0,height:30,mirror:!1,xAxisId:0,tickCount:5,type:"category",padding:{left:0,right:0},allowDataOverflow:!1,scale:"auto",reversed:!1,allowDuplicatedCategory:!0});function oa(e){"@babel/helpers - typeof";return oa=typeof Symbol=="function"&&typeof Symbol.iterator=="symbol"?function(t){return typeof t}:function(t){return t&&typeof Symbol=="function"&&t.constructor===Symbol&&t!==Symbol.prototype?"symbol":typeof t},oa(e)}function hV(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}function mV(e,t){for(var n=0;n<t.length;n++){var r=t[n];r.enumerable=r.enumerable||!1,r.configurable=!0,"value"in r&&(r.writable=!0),Object.defineProperty(e,L3(r.key),r)}}function yV(e,t,n){return t&&mV(e.prototype,t),Object.defineProperty(e,"prototype",{writable:!1}),e}function vV(e,t,n){return t=Cc(t),gV(e,I3()?Reflect.construct(t,n||[],Cc(e).constructor):t.apply(e,n))}function gV(e,t){if(t&&(oa(t)==="object"||typeof t=="function"))return t;if(t!==void 0)throw new TypeError("Derived constructors may only return object or undefined");return xV(e)}function xV(e){if(e===void 0)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return e}function I3(){try{var e=!Boolean.prototype.valueOf.call(Reflect.construct(Boolean,[],function(){}))}catch{}return(I3=function(){return!!e})()}function Cc(e){return Cc=Object.setPrototypeOf?Object.getPrototypeOf.bind():function(n){return n.__proto__||Object.getPrototypeOf(n)},Cc(e)}function bV(e,t){if(typeof t!="function"&&t!==null)throw new TypeError("Super expression must either be null or a function");e.prototype=Object.create(t&&t.prototype,{constructor:{value:e,writable:!0,configurable:!0}}),Object.defineProperty(e,"prototype",{writable:!1}),t&&Zf(e,t)}function Zf(e,t){return Zf=Object.setPrototypeOf?Object.setPrototypeOf.bind():function(r,i){return r.__proto__=i,r},Zf(e,t)}function D3(e,t,n){return t=L3(t),t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function L3(e){var t=wV(e,"string");return oa(t)=="symbol"?t:t+""}function wV(e,t){if(oa(e)!="object"||!e)return e;var n=e[Symbol.toPrimitive];if(n!==void 0){var r=n.call(e,t);if(oa(r)!="object")return r;throw new TypeError("@@toPrimitive must return a primitive value.")}return String(e)}function Qf(){return Qf=Object.assign?Object.assign.bind():function(e){for(var t=1;t<arguments.length;t++){var n=arguments[t];for(var r in n)Object.prototype.hasOwnProperty.call(n,r)&&(e[r]=n[r])}return e},Qf.apply(this,arguments)}var kV=function(t){var n=t.yAxisId,r=eh(),i=th(),a=k3(n);return a==null?null:$.createElement(Sa,Qf({},a,{className:se("recharts-".concat(a.axisType," ").concat(a.axisType),a.className),viewBox:{x:0,y:0,width:r,height:i},ticksGenerator:function(o){return Mn(o,!0)}}))},ao=function(e){function t(){return hV(this,t),vV(this,t,arguments)}return bV(t,e),yV(t,[{key:"render",value:function(){return $.createElement(kV,this.props)}}])}($.Component);D3(ao,"displayName","YAxis");D3(ao,"defaultProps",{allowDuplicatedCategory:!0,allowDecimals:!0,hide:!1,orientation:"left",width:60,height:0,mirror:!1,yAxisId:0,tickCount:5,type:"number",padding:{top:0,bottom:0},allowDataOverflow:!1,scale:"auto",reversed:!1});function J5(e){return OV(e)||jV(e)||SV(e)||_V()}function _V(){throw new TypeError(`Invalid attempt to spread non-iterable instance.
In order to be iterable, non-array objects must have a [Symbol.iterator]() method.`)}function SV(e,t){if(e){if(typeof e=="string")return Jf(e,t);var n=Object.prototype.toString.call(e).slice(8,-1);if(n==="Object"&&e.constructor&&(n=e.constructor.name),n==="Map"||n==="Set")return Array.from(e);if(n==="Arguments"||/^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n))return Jf(e,t)}}function jV(e){if(typeof Symbol<"u"&&e[Symbol.iterator]!=null||e["@@iterator"]!=null)return Array.from(e)}function OV(e){if(Array.isArray(e))return Jf(e)}function Jf(e,t){(t==null||t>e.length)&&(t=e.length);for(var n=0,r=new Array(t);n<t;n++)r[n]=e[n];return r}var e0=function(t,n,r,i,a){var l=nn(t,rh),o=nn(t,Tu),s=[].concat(J5(l),J5(o)),c=nn(t,Iu),f="".concat(i,"Id"),d=i[0],p=n;if(s.length&&(p=s.reduce(function(v,w){if(w.props[f]===r&&vn(w.props,"extendDomain")&&G(w.props[d])){var y=w.props[d];return[Math.min(v[0],y),Math.max(v[1],y)]}return v},p)),c.length){var h="".concat(d,"1"),x="".concat(d,"2");p=c.reduce(function(v,w){if(w.props[f]===r&&vn(w.props,"extendDomain")&&G(w.props[h])&&G(w.props[x])){var y=w.props[h],m=w.props[x];return[Math.min(v[0],y,m),Math.max(v[1],y,m)]}return v},p)}return a&&a.length&&(p=a.reduce(function(v,w){return G(w)?[Math.min(v[0],w),Math.max(v[1],w)]:v},p)),p},F3={exports:{}};(function(e){var t=Object.prototype.hasOwnProperty,n="~";function r(){}Object.create&&(r.prototype=Object.create(null),new r().__proto__||(n=!1));function i(s,c,f){this.fn=s,this.context=c,this.once=f||!1}function a(s,c,f,d,p){if(typeof f!="function")throw new TypeError("The listener must be a function");var h=new i(f,d||s,p),x=n?n+c:c;return s._events[x]?s._events[x].fn?s._events[x]=[s._events[x],h]:s._events[x].push(h):(s._events[x]=h,s._eventsCount++),s}function l(s,c){--s._eventsCount===0?s._events=new r:delete s._events[c]}function o(){this._events=new r,this._eventsCount=0}o.prototype.eventNames=function(){var c=[],f,d;if(this._eventsCount===0)return c;for(d in f=this._events)t.call(f,d)&&c.push(n?d.slice(1):d);return Object.getOwnPropertySymbols?c.concat(Object.getOwnPropertySymbols(f)):c},o.prototype.listeners=function(c){var f=n?n+c:c,d=this._events[f];if(!d)return[];if(d.fn)return[d.fn];for(var p=0,h=d.length,x=new Array(h);p<h;p++)x[p]=d[p].fn;return x},o.prototype.listenerCount=function(c){var f=n?n+c:c,d=this._events[f];return d?d.fn?1:d.length:0},o.prototype.emit=function(c,f,d,p,h,x){var v=n?n+c:c;if(!this._events[v])return!1;var w=this._events[v],y=arguments.length,m,g;if(w.fn){switch(w.once&&this.removeListener(c,w.fn,void 0,!0),y){case 1:return w.fn.call(w.context),!0;case 2:return w.fn.call(w.context,f),!0;case 3:return w.fn.call(w.context,f,d),!0;case 4:return w.fn.call(w.context,f,d,p),!0;case 5:return w.fn.call(w.context,f,d,p,h),!0;case 6:return w.fn.call(w.context,f,d,p,h,x),!0}for(g=1,m=new Array(y-1);g<y;g++)m[g-1]=arguments[g];w.fn.apply(w.context,m)}else{var _=w.length,b;for(g=0;g<_;g++)switch(w[g].once&&this.removeListener(c,w[g].fn,void 0,!0),y){case 1:w[g].fn.call(w[g].context);break;case 2:w[g].fn.call(w[g].context,f);break;case 3:w[g].fn.call(w[g].context,f,d);break;case 4:w[g].fn.call(w[g].context,f,d,p);break;default:if(!m)for(b=1,m=new Array(y-1);b<y;b++)m[b-1]=arguments[b];w[g].fn.apply(w[g].context,m)}}return!0},o.prototype.on=function(c,f,d){return a(this,c,f,d,!1)},o.prototype.once=function(c,f,d){return a(this,c,f,d,!0)},o.prototype.removeListener=function(c,f,d,p){var h=n?n+c:c;if(!this._events[h])return this;if(!f)return l(this,h),this;var x=this._events[h];if(x.fn)x.fn===f&&(!p||x.once)&&(!d||x.context===d)&&l(this,h);else{for(var v=0,w=[],y=x.length;v<y;v++)(x[v].fn!==f||p&&!x[v].once||d&&x[v].context!==d)&&w.push(x[v]);w.length?this._events[h]=w.length===1?w[0]:w:l(this,h)}return this},o.prototype.removeAllListeners=function(c){var f;return c?(f=n?n+c:c,this._events[f]&&l(this,f)):(this._events=new r,this._eventsCount=0),this},o.prototype.off=o.prototype.removeListener,o.prototype.addListener=o.prototype.on,o.prefixed=n,o.EventEmitter=o,e.exports=o})(F3);var PV=F3.exports;const AV=me(PV);var Ld=new AV,Fd="recharts.syncMouseEvents";function lo(e){"@babel/helpers - typeof";return lo=typeof Symbol=="function"&&typeof Symbol.iterator=="symbol"?function(t){return typeof t}:function(t){return t&&typeof Symbol=="function"&&t.constructor===Symbol&&t!==Symbol.prototype?"symbol":typeof t},lo(e)}function MV(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}function NV(e,t){for(var n=0;n<t.length;n++){var r=t[n];r.enumerable=r.enumerable||!1,r.configurable=!0,"value"in r&&(r.writable=!0),Object.defineProperty(e,R3(r.key),r)}}function EV(e,t,n){return t&&NV(e.prototype,t),Object.defineProperty(e,"prototype",{writable:!1}),e}function Rd(e,t,n){return t=R3(t),t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function R3(e){var t=CV(e,"string");return lo(t)=="symbol"?t:t+""}function CV(e,t){if(lo(e)!="object"||!e)return e;var n=e[Symbol.toPrimitive];if(n!==void 0){var r=n.call(e,t);if(lo(r)!="object")return r;throw new TypeError("@@toPrimitive must return a primitive value.")}return String(e)}var $V=function(){function e(){MV(this,e),Rd(this,"activeIndex",0),Rd(this,"coordinateList",[]),Rd(this,"layout","horizontal")}return EV(e,[{key:"setDetails",value:function(n){var r,i=n.coordinateList,a=i===void 0?null:i,l=n.container,o=l===void 0?null:l,s=n.layout,c=s===void 0?null:s,f=n.offset,d=f===void 0?null:f,p=n.mouseHandlerCallback,h=p===void 0?null:p;this.coordinateList=(r=a??this.coordinateList)!==null&&r!==void 0?r:[],this.container=o??this.container,this.layout=c??this.layout,this.offset=d??this.offset,this.mouseHandlerCallback=h??this.mouseHandlerCallback,this.activeIndex=Math.min(Math.max(this.activeIndex,0),this.coordinateList.length-1)}},{key:"focus",value:function(){this.spoofMouse()}},{key:"keyboardEvent",value:function(n){if(this.coordinateList.length!==0)switch(n.key){case"ArrowRight":{if(this.layout!=="horizontal")return;this.activeIndex=Math.min(this.activeIndex+1,this.coordinateList.length-1),this.spoofMouse();break}case"ArrowLeft":{if(this.layout!=="horizontal")return;this.activeIndex=Math.max(this.activeIndex-1,0),this.spoofMouse();break}}}},{key:"setIndex",value:function(n){this.activeIndex=n}},{key:"spoofMouse",value:function(){var n,r;if(this.layout==="horizontal"&&this.coordinateList.length!==0){var i=this.container.getBoundingClientRect(),a=i.x,l=i.y,o=i.height,s=this.coordinateList[this.activeIndex].coordinate,c=((n=window)===null||n===void 0?void 0:n.scrollX)||0,f=((r=window)===null||r===void 0?void 0:r.scrollY)||0,d=a+s+c,p=l+this.offset.top+o/2+f;this.mouseHandlerCallback({pageX:d,pageY:p})}}}])}();function TV(e,t,n){if(n==="number"&&t===!0&&Array.isArray(e)){var r=e==null?void 0:e[0],i=e==null?void 0:e[1];if(r&&i&&G(r)&&G(i))return!0}return!1}function zV(e,t,n,r){var i=r/2;return{stroke:"none",fill:"#ccc",x:e==="horizontal"?t.x-i:n.left+.5,y:e==="horizontal"?n.top+.5:t.y-i,width:e==="horizontal"?r:n.width-1,height:e==="horizontal"?n.height-1:r}}function B3(e){var t=e.cx,n=e.cy,r=e.radius,i=e.startAngle,a=e.endAngle,l=Ze(t,n,r,i),o=Ze(t,n,r,a);return{points:[l,o],cx:t,cy:n,radius:r,startAngle:i,endAngle:a}}function IV(e,t,n){var r,i,a,l;if(e==="horizontal")r=t.x,a=r,i=n.top,l=n.top+n.height;else if(e==="vertical")i=t.y,l=i,r=n.left,a=n.left+n.width;else if(t.cx!=null&&t.cy!=null)if(e==="centric"){var o=t.cx,s=t.cy,c=t.innerRadius,f=t.outerRadius,d=t.angle,p=Ze(o,s,c,d),h=Ze(o,s,f,d);r=p.x,i=p.y,a=h.x,l=h.y}else return B3(t);return[{x:r,y:i},{x:a,y:l}]}function oo(e){"@babel/helpers - typeof";return oo=typeof Symbol=="function"&&typeof Symbol.iterator=="symbol"?function(t){return typeof t}:function(t){return t&&typeof Symbol=="function"&&t.constructor===Symbol&&t!==Symbol.prototype?"symbol":typeof t},oo(e)}function ey(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter(function(i){return Object.getOwnPropertyDescriptor(e,i).enumerable})),n.push.apply(n,r)}return n}function Qo(e){for(var t=1;t<arguments.length;t++){var n=arguments[t]!=null?arguments[t]:{};t%2?ey(Object(n),!0).forEach(function(r){DV(e,r,n[r])}):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):ey(Object(n)).forEach(function(r){Object.defineProperty(e,r,Object.getOwnPropertyDescriptor(n,r))})}return e}function DV(e,t,n){return t=LV(t),t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function LV(e){var t=FV(e,"string");return oo(t)=="symbol"?t:t+""}function FV(e,t){if(oo(e)!="object"||!e)return e;var n=e[Symbol.toPrimitive];if(n!==void 0){var r=n.call(e,t);if(oo(r)!="object")return r;throw new TypeError("@@toPrimitive must return a primitive value.")}return(t==="string"?String:Number)(e)}function RV(e){var t,n,r=e.element,i=e.tooltipEventType,a=e.isActive,l=e.activeCoordinate,o=e.activePayload,s=e.offset,c=e.activeTooltipIndex,f=e.tooltipAxisBandSize,d=e.layout,p=e.chartName,h=(t=r.props.cursor)!==null&&t!==void 0?t:(n=r.type.defaultProps)===null||n===void 0?void 0:n.cursor;if(!r||!h||!a||!l||p!=="ScatterChart"&&i!=="axis")return null;var x,v=Z2;if(p==="ScatterChart")x=l,v=JB;else if(p==="BarChart")x=zV(d,l,s,f),v=Yp;else if(d==="radial"){var w=B3(l),y=w.cx,m=w.cy,g=w.radius,_=w.startAngle,b=w.endAngle;x={cx:y,cy:m,startAngle:_,endAngle:b,innerRadius:g,outerRadius:g},v=Vg}else x={points:IV(d,l,s)},v=Z2;var k=Qo(Qo(Qo(Qo({stroke:"#ccc",pointerEvents:"none"},s),x),oe(h,!1)),{},{payload:o,payloadIndex:c,className:se("recharts-tooltip-cursor",h.className)});return $.isValidElement(h)?$.cloneElement(h,k):$.createElement(v,k)}var BV=["item"],WV=["children","className","width","height","style","compact","title","desc"];function sa(e){"@babel/helpers - typeof";return sa=typeof Symbol=="function"&&typeof Symbol.iterator=="symbol"?function(t){return typeof t}:function(t){return t&&typeof Symbol=="function"&&t.constructor===Symbol&&t!==Symbol.prototype?"symbol":typeof t},sa(e)}function Oi(){return Oi=Object.assign?Object.assign.bind():function(e){for(var t=1;t<arguments.length;t++){var n=arguments[t];for(var r in n)Object.prototype.hasOwnProperty.call(n,r)&&(e[r]=n[r])}return e},Oi.apply(this,arguments)}function ty(e,t){return GV(e)||HV(e,t)||U3(e,t)||UV()}function UV(){throw new TypeError(`Invalid attempt to destructure non-iterable instance.
In order to be iterable, non-array objects must have a [Symbol.iterator]() method.`)}function HV(e,t){var n=e==null?null:typeof Symbol<"u"&&e[Symbol.iterator]||e["@@iterator"];if(n!=null){var r,i,a,l,o=[],s=!0,c=!1;try{if(a=(n=n.call(e)).next,t!==0)for(;!(s=(r=a.call(n)).done)&&(o.push(r.value),o.length!==t);s=!0);}catch(f){c=!0,i=f}finally{try{if(!s&&n.return!=null&&(l=n.return(),Object(l)!==l))return}finally{if(c)throw i}}return o}}function GV(e){if(Array.isArray(e))return e}function ny(e,t){if(e==null)return{};var n=VV(e,t),r,i;if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);for(i=0;i<a.length;i++)r=a[i],!(t.indexOf(r)>=0)&&Object.prototype.propertyIsEnumerable.call(e,r)&&(n[r]=e[r])}return n}function VV(e,t){if(e==null)return{};var n={};for(var r in e)if(Object.prototype.hasOwnProperty.call(e,r)){if(t.indexOf(r)>=0)continue;n[r]=e[r]}return n}function XV(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}function qV(e,t){for(var n=0;n<t.length;n++){var r=t[n];r.enumerable=r.enumerable||!1,r.configurable=!0,"value"in r&&(r.writable=!0),Object.defineProperty(e,H3(r.key),r)}}function KV(e,t,n){return t&&qV(e.prototype,t),Object.defineProperty(e,"prototype",{writable:!1}),e}function YV(e,t,n){return t=$c(t),ZV(e,W3()?Reflect.construct(t,n||[],$c(e).constructor):t.apply(e,n))}function ZV(e,t){if(t&&(sa(t)==="object"||typeof t=="function"))return t;if(t!==void 0)throw new TypeError("Derived constructors may only return object or undefined");return QV(e)}function QV(e){if(e===void 0)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return e}function W3(){try{var e=!Boolean.prototype.valueOf.call(Reflect.construct(Boolean,[],function(){}))}catch{}return(W3=function(){return!!e})()}function $c(e){return $c=Object.setPrototypeOf?Object.getPrototypeOf.bind():function(n){return n.__proto__||Object.getPrototypeOf(n)},$c(e)}function JV(e,t){if(typeof t!="function"&&t!==null)throw new TypeError("Super expression must either be null or a function");e.prototype=Object.create(t&&t.prototype,{constructor:{value:e,writable:!0,configurable:!0}}),Object.defineProperty(e,"prototype",{writable:!1}),t&&t0(e,t)}function t0(e,t){return t0=Object.setPrototypeOf?Object.setPrototypeOf.bind():function(r,i){return r.__proto__=i,r},t0(e,t)}function ca(e){return nX(e)||tX(e)||U3(e)||eX()}function eX(){throw new TypeError(`Invalid attempt to spread non-iterable instance.
In order to be iterable, non-array objects must have a [Symbol.iterator]() method.`)}function U3(e,t){if(e){if(typeof e=="string")return n0(e,t);var n=Object.prototype.toString.call(e).slice(8,-1);if(n==="Object"&&e.constructor&&(n=e.constructor.name),n==="Map"||n==="Set")return Array.from(e);if(n==="Arguments"||/^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n))return n0(e,t)}}function tX(e){if(typeof Symbol<"u"&&e[Symbol.iterator]!=null||e["@@iterator"]!=null)return Array.from(e)}function nX(e){if(Array.isArray(e))return n0(e)}function n0(e,t){(t==null||t>e.length)&&(t=e.length);for(var n=0,r=new Array(t);n<t;n++)r[n]=e[n];return r}function ry(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter(function(i){return Object.getOwnPropertyDescriptor(e,i).enumerable})),n.push.apply(n,r)}return n}function R(e){for(var t=1;t<arguments.length;t++){var n=arguments[t]!=null?arguments[t]:{};t%2?ry(Object(n),!0).forEach(function(r){Z(e,r,n[r])}):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):ry(Object(n)).forEach(function(r){Object.defineProperty(e,r,Object.getOwnPropertyDescriptor(n,r))})}return e}function Z(e,t,n){return t=H3(t),t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function H3(e){var t=rX(e,"string");return sa(t)=="symbol"?t:t+""}function rX(e,t){if(sa(e)!="object"||!e)return e;var n=e[Symbol.toPrimitive];if(n!==void 0){var r=n.call(e,t);if(sa(r)!="object")return r;throw new TypeError("@@toPrimitive must return a primitive value.")}return(t==="string"?String:Number)(e)}var iX={xAxis:["bottom","top"],yAxis:["left","right"]},aX={width:"100%",height:"100%"},G3={x:0,y:0};function Jo(e){return e}var lX=function(t,n){return n==="horizontal"?t.x:n==="vertical"?t.y:n==="centric"?t.angle:t.radius},oX=function(t,n,r,i){var a=n.find(function(f){return f&&f.index===r});if(a){if(t==="horizontal")return{x:a.coordinate,y:i.y};if(t==="vertical")return{x:i.x,y:a.coordinate};if(t==="centric"){var l=a.coordinate,o=i.radius;return R(R(R({},i),Ze(i.cx,i.cy,o,l)),{},{angle:l,radius:o})}var s=a.coordinate,c=i.angle;return R(R(R({},i),Ze(i.cx,i.cy,s,c)),{},{angle:c,radius:s})}return G3},Du=function(t,n){var r=n.graphicalItems,i=n.dataStartIndex,a=n.dataEndIndex,l=(r??[]).reduce(function(o,s){var c=s.props.data;return c&&c.length?[].concat(ca(o),ca(c)):o},[]);return l.length>0?l:t&&t.length&&G(i)&&G(a)?t.slice(i,a+1):[]};function V3(e){return e==="number"?[0,"auto"]:void 0}var r0=function(t,n,r,i){var a=t.graphicalItems,l=t.tooltipAxis,o=Du(n,t);return r<0||!a||!a.length||r>=o.length?null:a.reduce(function(s,c){var f,d=(f=c.props.data)!==null&&f!==void 0?f:n;d&&t.dataStartIndex+t.dataEndIndex!==0&&t.dataEndIndex-t.dataStartIndex>=r&&(d=d.slice(t.dataStartIndex,t.dataEndIndex+1));var p;if(l.dataKey&&!l.allowDuplicatedCategory){var h=d===void 0?o:d;p=T1(h,l.dataKey,i)}else p=d&&d[r]||o[r];return p?[].concat(ca(s),[Ug(c,p)]):s},[])},iy=function(t,n,r,i){var a=i||{x:t.chartX,y:t.chartY},l=lX(a,r),o=t.orderedTooltipTicks,s=t.tooltipAxis,c=t.tooltipTicks,f=TL(l,o,c,s);if(f>=0&&c){var d=c[f]&&c[f].value,p=r0(t,n,f,d),h=oX(r,o,f,a);return{activeTooltipIndex:f,activeLabel:d,activePayload:p,activeCoordinate:h}}return null},sX=function(t,n){var r=n.axes,i=n.graphicalItems,a=n.axisType,l=n.axisIdKey,o=n.stackGroups,s=n.dataStartIndex,c=n.dataEndIndex,f=t.layout,d=t.children,p=t.stackOffset,h=Rg(f,a);return r.reduce(function(x,v){var w,y=v.type.defaultProps!==void 0?R(R({},v.type.defaultProps),v.props):v.props,m=y.type,g=y.dataKey,_=y.allowDataOverflow,b=y.allowDuplicatedCategory,k=y.scale,S=y.ticks,j=y.includeHidden,O=y[l];if(x[O])return x;var C=Du(t.data,{graphicalItems:i.filter(function(W){var X,Y=l in W.props?W.props[l]:(X=W.type.defaultProps)===null||X===void 0?void 0:X[l];return Y===O}),dataStartIndex:s,dataEndIndex:c}),M=C.length,P,N,z;TV(y.domain,_,m)&&(P=kf(y.domain,null,_),h&&(m==="number"||k!=="auto")&&(z=ll(C,g,"category")));var E=V3(m);if(!P||P.length===0){var L,F=(L=y.domain)!==null&&L!==void 0?L:E;if(g){if(P=ll(C,g,m),m==="category"&&h){var A=k_(P);b&&A?(N=P,P=wc(0,M)):b||(P=L2(F,P,v).reduce(function(W,X){return W.indexOf(X)>=0?W:[].concat(ca(W),[X])},[]))}else if(m==="category")b?P=P.filter(function(W){return W!==""&&!ce(W)}):P=L2(F,P,v).reduce(function(W,X){return W.indexOf(X)>=0||X===""||ce(X)?W:[].concat(ca(W),[X])},[]);else if(m==="number"){var I=FL(C,i.filter(function(W){var X,Y,le=l in W.props?W.props[l]:(X=W.type.defaultProps)===null||X===void 0?void 0:X[l],je="hide"in W.props?W.props.hide:(Y=W.type.defaultProps)===null||Y===void 0?void 0:Y.hide;return le===O&&(j||!je)}),g,a,f);I&&(P=I)}h&&(m==="number"||k!=="auto")&&(z=ll(C,g,"category"))}else h?P=wc(0,M):o&&o[O]&&o[O].hasStack&&m==="number"?P=p==="expand"?[0,1]:Wg(o[O].stackGroups,s,c):P=Fg(C,i.filter(function(W){var X=l in W.props?W.props[l]:W.type.defaultProps[l],Y="hide"in W.props?W.props.hide:W.type.defaultProps.hide;return X===O&&(j||!Y)}),m,f,!0);if(m==="number")P=e0(d,P,O,a,S),F&&(P=kf(F,P,_));else if(m==="category"&&F){var D=F,B=P.every(function(W){return D.indexOf(W)>=0});B&&(P=D)}}return R(R({},x),{},Z({},O,R(R({},y),{},{axisType:a,domain:P,categoricalDomain:z,duplicateDomain:N,originalDomain:(w=y.domain)!==null&&w!==void 0?w:E,isCategorical:h,layout:f})))},{})},cX=function(t,n){var r=n.graphicalItems,i=n.Axis,a=n.axisType,l=n.axisIdKey,o=n.stackGroups,s=n.dataStartIndex,c=n.dataEndIndex,f=t.layout,d=t.children,p=Du(t.data,{graphicalItems:r,dataStartIndex:s,dataEndIndex:c}),h=p.length,x=Rg(f,a),v=-1;return r.reduce(function(w,y){var m=y.type.defaultProps!==void 0?R(R({},y.type.defaultProps),y.props):y.props,g=m[l],_=V3("number");if(!w[g]){v++;var b;return x?b=wc(0,h):o&&o[g]&&o[g].hasStack?(b=Wg(o[g].stackGroups,s,c),b=e0(d,b,g,a)):(b=kf(_,Fg(p,r.filter(function(k){var S,j,O=l in k.props?k.props[l]:(S=k.type.defaultProps)===null||S===void 0?void 0:S[l],C="hide"in k.props?k.props.hide:(j=k.type.defaultProps)===null||j===void 0?void 0:j.hide;return O===g&&!C}),"number",f),i.defaultProps.allowDataOverflow),b=e0(d,b,g,a)),R(R({},w),{},Z({},g,R(R({axisType:a},i.defaultProps),{},{hide:!0,orientation:Ft(iX,"".concat(a,".").concat(v%2),null),domain:b,originalDomain:_,isCategorical:x,layout:f})))}return w},{})},uX=function(t,n){var r=n.axisType,i=r===void 0?"xAxis":r,a=n.AxisComp,l=n.graphicalItems,o=n.stackGroups,s=n.dataStartIndex,c=n.dataEndIndex,f=t.children,d="".concat(i,"Id"),p=nn(f,a),h={};return p&&p.length?h=sX(t,{axes:p,graphicalItems:l,axisType:i,axisIdKey:d,stackGroups:o,dataStartIndex:s,dataEndIndex:c}):l&&l.length&&(h=cX(t,{Axis:a,graphicalItems:l,axisType:i,axisIdKey:d,stackGroups:o,dataStartIndex:s,dataEndIndex:c})),h},dX=function(t){var n=er(t),r=Mn(n,!1,!0);return{tooltipTicks:r,orderedTooltipTicks:kp(r,function(i){return i.coordinate}),tooltipAxis:n,tooltipAxisBandSize:fc(n,r)}},ay=function(t){var n=t.children,r=t.defaultShowTooltip,i=St(n,ea),a=0,l=0;return t.data&&t.data.length!==0&&(l=t.data.length-1),i&&i.props&&(i.props.startIndex>=0&&(a=i.props.startIndex),i.props.endIndex>=0&&(l=i.props.endIndex)),{chartX:0,chartY:0,dataStartIndex:a,dataEndIndex:l,activeTooltipIndex:-1,isTooltipActive:!!r}},fX=function(t){return!t||!t.length?!1:t.some(function(n){var r=En(n&&n.type);return r&&r.indexOf("Bar")>=0})},ly=function(t){return t==="horizontal"?{numericAxisName:"yAxis",cateAxisName:"xAxis"}:t==="vertical"?{numericAxisName:"xAxis",cateAxisName:"yAxis"}:t==="centric"?{numericAxisName:"radiusAxis",cateAxisName:"angleAxis"}:{numericAxisName:"angleAxis",cateAxisName:"radiusAxis"}},pX=function(t,n){var r=t.props,i=t.graphicalItems,a=t.xAxisMap,l=a===void 0?{}:a,o=t.yAxisMap,s=o===void 0?{}:o,c=r.width,f=r.height,d=r.children,p=r.margin||{},h=St(d,ea),x=St(d,fr),v=Object.keys(s).reduce(function(b,k){var S=s[k],j=S.orientation;return!S.mirror&&!S.hide?R(R({},b),{},Z({},j,b[j]+S.width)):b},{left:p.left||0,right:p.right||0}),w=Object.keys(l).reduce(function(b,k){var S=l[k],j=S.orientation;return!S.mirror&&!S.hide?R(R({},b),{},Z({},j,Ft(b,"".concat(j))+S.height)):b},{top:p.top||0,bottom:p.bottom||0}),y=R(R({},w),v),m=y.bottom;h&&(y.bottom+=h.props.height||ea.defaultProps.height),x&&n&&(y=DL(y,i,r,n));var g=c-y.left-y.right,_=f-y.top-y.bottom;return R(R({brushBottom:m},y),{},{width:Math.max(g,0),height:Math.max(_,0)})},hX=function(t,n){if(n==="xAxis")return t[n].width;if(n==="yAxis")return t[n].height},mX=function(t){var n=t.chartName,r=t.GraphicalChild,i=t.defaultTooltipEventType,a=i===void 0?"axis":i,l=t.validateTooltipEventTypes,o=l===void 0?["axis"]:l,s=t.axisComponents,c=t.legendContent,f=t.formatAxisMap,d=t.defaultProps,p=function(y,m){var g=m.graphicalItems,_=m.stackGroups,b=m.offset,k=m.updateId,S=m.dataStartIndex,j=m.dataEndIndex,O=y.barSize,C=y.layout,M=y.barGap,P=y.barCategoryGap,N=y.maxBarSize,z=ly(C),E=z.numericAxisName,L=z.cateAxisName,F=fX(g),A=[];return g.forEach(function(I,D){var B=Du(y.data,{graphicalItems:[I],dataStartIndex:S,dataEndIndex:j}),W=I.type.defaultProps!==void 0?R(R({},I.type.defaultProps),I.props):I.props,X=W.dataKey,Y=W.maxBarSize,le=W["".concat(E,"Id")],je=W["".concat(L,"Id")],ht={},et=s.reduce(function(on,wn){var ja=m["".concat(wn.axisType,"Map")],lh=W["".concat(wn.axisType,"Id")];ja&&ja[lh]||wn.axisType==="zAxis"||Jr();var oh=ja[lh];return R(R({},on),{},Z(Z({},wn.axisType,oh),"".concat(wn.axisType,"Ticks"),Mn(oh)))},ht),V=et[L],J=et["".concat(L,"Ticks")],ee=_&&_[le]&&_[le].hasStack&&ZL(I,_[le].stackGroups),U=En(I.type).indexOf("Bar")>=0,ke=fc(V,J),re=[],Ee=F&&zL({barSize:O,stackGroups:_,totalSize:hX(et,L)});if(U){var Ce,tt,ln=ce(Y)?N:Y,Gn=(Ce=(tt=fc(V,J,!0))!==null&&tt!==void 0?tt:ln)!==null&&Ce!==void 0?Ce:0;re=IL({barGap:M,barCategoryGap:P,bandSize:Gn!==ke?Gn:ke,sizeList:Ee[je],maxBarSize:ln}),Gn!==ke&&(re=re.map(function(on){return R(R({},on),{},{position:R(R({},on.position),{},{offset:on.position.offset-Gn/2})})}))}var jr=I&&I.type&&I.type.getComposedData;jr&&A.push({props:R(R({},jr(R(R({},et),{},{displayedData:B,props:y,dataKey:X,item:I,bandSize:ke,barPosition:re,offset:b,stackedData:ee,layout:C,dataStartIndex:S,dataEndIndex:j}))),{},Z(Z(Z({key:I.key||"item-".concat(D)},E,et[E]),L,et[L]),"animationId",k)),childIndex:T_(I,y.children),item:I})}),A},h=function(y,m){var g=y.props,_=y.dataStartIndex,b=y.dataEndIndex,k=y.updateId;if(!E7({props:g}))return null;var S=g.children,j=g.layout,O=g.stackOffset,C=g.data,M=g.reverseStackOrder,P=ly(j),N=P.numericAxisName,z=P.cateAxisName,E=nn(S,r),L=qL(C,E,"".concat(N,"Id"),"".concat(z,"Id"),O,M),F=s.reduce(function(W,X){var Y="".concat(X.axisType,"Map");return R(R({},W),{},Z({},Y,uX(g,R(R({},X),{},{graphicalItems:E,stackGroups:X.axisType===N&&L,dataStartIndex:_,dataEndIndex:b}))))},{}),A=pX(R(R({},F),{},{props:g,graphicalItems:E}),m==null?void 0:m.legendBBox);Object.keys(F).forEach(function(W){F[W]=f(g,F[W],A,W.replace("Map",""),n)});var I=F["".concat(z,"Map")],D=dX(I),B=p(g,R(R({},F),{},{dataStartIndex:_,dataEndIndex:b,updateId:k,graphicalItems:E,stackGroups:L,offset:A}));return R(R({formattedGraphicalItems:B,graphicalItems:E,offset:A,stackGroups:L},D),F)},x=function(w){function y(m){var g,_,b;return XV(this,y),b=YV(this,y,[m]),Z(b,"eventEmitterSymbol",Symbol("rechartsEventEmitter")),Z(b,"accessibilityManager",new $V),Z(b,"handleLegendBBoxUpdate",function(k){if(k){var S=b.state,j=S.dataStartIndex,O=S.dataEndIndex,C=S.updateId;b.setState(R({legendBBox:k},h({props:b.props,dataStartIndex:j,dataEndIndex:O,updateId:C},R(R({},b.state),{},{legendBBox:k}))))}}),Z(b,"handleReceiveSyncEvent",function(k,S,j){if(b.props.syncId===k){if(j===b.eventEmitterSymbol&&typeof b.props.syncMethod!="function")return;b.applySyncEvent(S)}}),Z(b,"handleBrushChange",function(k){var S=k.startIndex,j=k.endIndex;if(S!==b.state.dataStartIndex||j!==b.state.dataEndIndex){var O=b.state.updateId;b.setState(function(){return R({dataStartIndex:S,dataEndIndex:j},h({props:b.props,dataStartIndex:S,dataEndIndex:j,updateId:O},b.state))}),b.triggerSyncEvent({dataStartIndex:S,dataEndIndex:j})}}),Z(b,"handleMouseEnter",function(k){var S=b.getMouseInfo(k);if(S){var j=R(R({},S),{},{isTooltipActive:!0});b.setState(j),b.triggerSyncEvent(j);var O=b.props.onMouseEnter;te(O)&&O(j,k)}}),Z(b,"triggeredAfterMouseMove",function(k){var S=b.getMouseInfo(k),j=S?R(R({},S),{},{isTooltipActive:!0}):{isTooltipActive:!1};b.setState(j),b.triggerSyncEvent(j);var O=b.props.onMouseMove;te(O)&&O(j,k)}),Z(b,"handleItemMouseEnter",function(k){b.setState(function(){return{isTooltipActive:!0,activeItem:k,activePayload:k.tooltipPayload,activeCoordinate:k.tooltipPosition||{x:k.cx,y:k.cy}}})}),Z(b,"handleItemMouseLeave",function(){b.setState(function(){return{isTooltipActive:!1}})}),Z(b,"handleMouseMove",function(k){k.persist(),b.throttleTriggeredAfterMouseMove(k)}),Z(b,"handleMouseLeave",function(k){b.throttleTriggeredAfterMouseMove.cancel();var S={isTooltipActive:!1};b.setState(S),b.triggerSyncEvent(S);var j=b.props.onMouseLeave;te(j)&&j(S,k)}),Z(b,"handleOuterEvent",function(k){var S=$_(k),j=Ft(b.props,"".concat(S));if(S&&te(j)){var O,C;/.*touch.*/i.test(S)?C=b.getMouseInfo(k.changedTouches[0]):C=b.getMouseInfo(k),j((O=C)!==null&&O!==void 0?O:{},k)}}),Z(b,"handleClick",function(k){var S=b.getMouseInfo(k);if(S){var j=R(R({},S),{},{isTooltipActive:!0});b.setState(j),b.triggerSyncEvent(j);var O=b.props.onClick;te(O)&&O(j,k)}}),Z(b,"handleMouseDown",function(k){var S=b.props.onMouseDown;if(te(S)){var j=b.getMouseInfo(k);S(j,k)}}),Z(b,"handleMouseUp",function(k){var S=b.props.onMouseUp;if(te(S)){var j=b.getMouseInfo(k);S(j,k)}}),Z(b,"handleTouchMove",function(k){k.changedTouches!=null&&k.changedTouches.length>0&&b.throttleTriggeredAfterMouseMove(k.changedTouches[0])}),Z(b,"handleTouchStart",function(k){k.changedTouches!=null&&k.changedTouches.length>0&&b.handleMouseDown(k.changedTouches[0])}),Z(b,"handleTouchEnd",function(k){k.changedTouches!=null&&k.changedTouches.length>0&&b.handleMouseUp(k.changedTouches[0])}),Z(b,"handleDoubleClick",function(k){var S=b.props.onDoubleClick;if(te(S)){var j=b.getMouseInfo(k);S(j,k)}}),Z(b,"handleContextMenu",function(k){var S=b.props.onContextMenu;if(te(S)){var j=b.getMouseInfo(k);S(j,k)}}),Z(b,"triggerSyncEvent",function(k){b.props.syncId!==void 0&&Ld.emit(Fd,b.props.syncId,k,b.eventEmitterSymbol)}),Z(b,"applySyncEvent",function(k){var S=b.props,j=S.layout,O=S.syncMethod,C=b.state.updateId,M=k.dataStartIndex,P=k.dataEndIndex;if(k.dataStartIndex!==void 0||k.dataEndIndex!==void 0)b.setState(R({dataStartIndex:M,dataEndIndex:P},h({props:b.props,dataStartIndex:M,dataEndIndex:P,updateId:C},b.state)));else if(k.activeTooltipIndex!==void 0){var N=k.chartX,z=k.chartY,E=k.activeTooltipIndex,L=b.state,F=L.offset,A=L.tooltipTicks;if(!F)return;if(typeof O=="function")E=O(A,k);else if(O==="value"){E=-1;for(var I=0;I<A.length;I++)if(A[I].value===k.activeLabel){E=I;break}}var D=R(R({},F),{},{x:F.left,y:F.top}),B=Math.min(N,D.x+D.width),W=Math.min(z,D.y+D.height),X=A[E]&&A[E].value,Y=r0(b.state,b.props.data,E),le=A[E]?{x:j==="horizontal"?A[E].coordinate:B,y:j==="horizontal"?W:A[E].coordinate}:G3;b.setState(R(R({},k),{},{activeLabel:X,activeCoordinate:le,activePayload:Y,activeTooltipIndex:E}))}else b.setState(k)}),Z(b,"renderCursor",function(k){var S,j=b.state,O=j.isTooltipActive,C=j.activeCoordinate,M=j.activePayload,P=j.offset,N=j.activeTooltipIndex,z=j.tooltipAxisBandSize,E=b.getTooltipEventType(),L=(S=k.props.active)!==null&&S!==void 0?S:O,F=b.props.layout,A=k.key||"_recharts-cursor";return T.createElement(RV,{key:A,activeCoordinate:C,activePayload:M,activeTooltipIndex:N,chartName:n,element:k,isActive:L,layout:F,offset:P,tooltipAxisBandSize:z,tooltipEventType:E})}),Z(b,"renderPolarAxis",function(k,S,j){var O=Ft(k,"type.axisType"),C=Ft(b.state,"".concat(O,"Map")),M=k.type.defaultProps,P=M!==void 0?R(R({},M),k.props):k.props,N=C&&C[P["".concat(O,"Id")]];return $.cloneElement(k,R(R({},N),{},{className:se(O,N.className),key:k.key||"".concat(S,"-").concat(j),ticks:Mn(N,!0)}))}),Z(b,"renderPolarGrid",function(k){var S=k.props,j=S.radialLines,O=S.polarAngles,C=S.polarRadius,M=b.state,P=M.radiusAxisMap,N=M.angleAxisMap,z=er(P),E=er(N),L=E.cx,F=E.cy,A=E.innerRadius,I=E.outerRadius;return $.cloneElement(k,{polarAngles:Array.isArray(O)?O:Mn(E,!0).map(function(D){return D.coordinate}),polarRadius:Array.isArray(C)?C:Mn(z,!0).map(function(D){return D.coordinate}),cx:L,cy:F,innerRadius:A,outerRadius:I,key:k.key||"polar-grid",radialLines:j})}),Z(b,"renderLegend",function(){var k=b.state.formattedGraphicalItems,S=b.props,j=S.children,O=S.width,C=S.height,M=b.props.margin||{},P=O-(M.left||0)-(M.right||0),N=Dg({children:j,formattedGraphicalItems:k,legendWidth:P,legendContent:c});if(!N)return null;var z=N.item,E=ny(N,BV);return $.cloneElement(z,R(R({},E),{},{chartWidth:O,chartHeight:C,margin:M,onBBoxUpdate:b.handleLegendBBoxUpdate}))}),Z(b,"renderTooltip",function(){var k,S=b.props,j=S.children,O=S.accessibilityLayer,C=St(j,Kt);if(!C)return null;var M=b.state,P=M.isTooltipActive,N=M.activeCoordinate,z=M.activePayload,E=M.activeLabel,L=M.offset,F=(k=C.props.active)!==null&&k!==void 0?k:P;return $.cloneElement(C,{viewBox:R(R({},L),{},{x:L.left,y:L.top}),active:F,label:E,payload:F?z:[],coordinate:N,accessibilityLayer:O})}),Z(b,"renderBrush",function(k){var S=b.props,j=S.margin,O=S.data,C=b.state,M=C.offset,P=C.dataStartIndex,N=C.dataEndIndex,z=C.updateId;return $.cloneElement(k,{key:k.key||"_recharts-brush",onChange:qo(b.handleBrushChange,k.props.onChange),data:O,x:G(k.props.x)?k.props.x:M.left,y:G(k.props.y)?k.props.y:M.top+M.height+M.brushBottom-(j.bottom||0),width:G(k.props.width)?k.props.width:M.width,startIndex:P,endIndex:N,updateId:"brush-".concat(z)})}),Z(b,"renderReferenceElement",function(k,S,j){if(!k)return null;var O=b,C=O.clipPathId,M=b.state,P=M.xAxisMap,N=M.yAxisMap,z=M.offset,E=k.type.defaultProps||{},L=k.props,F=L.xAxisId,A=F===void 0?E.xAxisId:F,I=L.yAxisId,D=I===void 0?E.yAxisId:I;return $.cloneElement(k,{key:k.key||"".concat(S,"-").concat(j),xAxis:P[A],yAxis:N[D],viewBox:{x:z.left,y:z.top,width:z.width,height:z.height},clipPathId:C})}),Z(b,"renderActivePoints",function(k){var S=k.item,j=k.activePoint,O=k.basePoint,C=k.childIndex,M=k.isRange,P=[],N=S.props.key,z=S.item.type.defaultProps!==void 0?R(R({},S.item.type.defaultProps),S.item.props):S.item.props,E=z.activeDot,L=z.dataKey,F=R(R({index:C,dataKey:L,cx:j.x,cy:j.y,r:4,fill:Kp(S.item),strokeWidth:2,stroke:"#fff",payload:j.payload,value:j.value},oe(E,!1)),Ds(E));return P.push(y.renderActiveDot(E,F,"".concat(N,"-activePoint-").concat(C))),O?P.push(y.renderActiveDot(E,R(R({},F),{},{cx:O.x,cy:O.y}),"".concat(N,"-basePoint-").concat(C))):M&&P.push(null),P}),Z(b,"renderGraphicChild",function(k,S,j){var O=b.filterFormatItem(k,S,j);if(!O)return null;var C=b.getTooltipEventType(),M=b.state,P=M.isTooltipActive,N=M.tooltipAxis,z=M.activeTooltipIndex,E=M.activeLabel,L=b.props.children,F=St(L,Kt),A=O.props,I=A.points,D=A.isRange,B=A.baseLine,W=O.item.type.defaultProps!==void 0?R(R({},O.item.type.defaultProps),O.item.props):O.item.props,X=W.activeDot,Y=W.hide,le=W.activeBar,je=W.activeShape,ht=!!(!Y&&P&&F&&(X||le||je)),et={};C!=="axis"&&F&&F.props.trigger==="click"?et={onClick:qo(b.handleItemMouseEnter,k.props.onClick)}:C!=="axis"&&(et={onMouseLeave:qo(b.handleItemMouseLeave,k.props.onMouseLeave),onMouseEnter:qo(b.handleItemMouseEnter,k.props.onMouseEnter)});var V=$.cloneElement(k,R(R({},O.props),et));function J(wn){return typeof N.dataKey=="function"?N.dataKey(wn.payload):null}if(ht)if(z>=0){var ee,U;if(N.dataKey&&!N.allowDuplicatedCategory){var ke=typeof N.dataKey=="function"?J:"payload.".concat(N.dataKey.toString());ee=T1(I,ke,E),U=D&&B&&T1(B,ke,E)}else ee=I==null?void 0:I[z],U=D&&B&&B[z];if(je||le){var re=k.props.activeIndex!==void 0?k.props.activeIndex:z;return[$.cloneElement(k,R(R(R({},O.props),et),{},{activeIndex:re})),null,null]}if(!ce(ee))return[V].concat(ca(b.renderActivePoints({item:O,activePoint:ee,basePoint:U,childIndex:z,isRange:D})))}else{var Ee,Ce=(Ee=b.getItemByXY(b.state.activeCoordinate))!==null&&Ee!==void 0?Ee:{graphicalItem:V},tt=Ce.graphicalItem,ln=tt.item,Gn=ln===void 0?k:ln,jr=tt.childIndex,on=R(R(R({},O.props),et),{},{activeIndex:jr});return[$.cloneElement(Gn,on),null,null]}return D?[V,null,null]:[V,null]}),Z(b,"renderCustomized",function(k,S,j){return $.cloneElement(k,R(R({key:"recharts-customized-".concat(j)},b.props),b.state))}),Z(b,"renderMap",{CartesianGrid:{handler:Jo,once:!0},ReferenceArea:{handler:b.renderReferenceElement},ReferenceLine:{handler:Jo},ReferenceDot:{handler:b.renderReferenceElement},XAxis:{handler:Jo},YAxis:{handler:Jo},Brush:{handler:b.renderBrush,once:!0},Bar:{handler:b.renderGraphicChild},Line:{handler:b.renderGraphicChild},Area:{handler:b.renderGraphicChild},Radar:{handler:b.renderGraphicChild},RadialBar:{handler:b.renderGraphicChild},Scatter:{handler:b.renderGraphicChild},Pie:{handler:b.renderGraphicChild},Funnel:{handler:b.renderGraphicChild},Tooltip:{handler:b.renderCursor,once:!0},PolarGrid:{handler:b.renderPolarGrid,once:!0},PolarAngleAxis:{handler:b.renderPolarAxis},PolarRadiusAxis:{handler:b.renderPolarAxis},Customized:{handler:b.renderCustomized}}),b.clipPathId="".concat((g=m.id)!==null&&g!==void 0?g:du("recharts"),"-clip"),b.throttleTriggeredAfterMouseMove=Iv(b.triggeredAfterMouseMove,(_=m.throttleDelay)!==null&&_!==void 0?_:1e3/60),b.state={},b}return JV(y,w),KV(y,[{key:"componentDidMount",value:function(){var g,_;this.addListener(),this.accessibilityManager.setDetails({container:this.container,offset:{left:(g=this.props.margin.left)!==null&&g!==void 0?g:0,top:(_=this.props.margin.top)!==null&&_!==void 0?_:0},coordinateList:this.state.tooltipTicks,mouseHandlerCallback:this.triggeredAfterMouseMove,layout:this.props.layout}),this.displayDefaultTooltip()}},{key:"displayDefaultTooltip",value:function(){var g=this.props,_=g.children,b=g.data,k=g.height,S=g.layout,j=St(_,Kt);if(j){var O=j.props.defaultIndex;if(!(typeof O!="number"||O<0||O>this.state.tooltipTicks.length-1)){var C=this.state.tooltipTicks[O]&&this.state.tooltipTicks[O].value,M=r0(this.state,b,O,C),P=this.state.tooltipTicks[O].coordinate,N=(this.state.offset.top+k)/2,z=S==="horizontal",E=z?{x:P,y:N}:{y:P,x:N},L=this.state.formattedGraphicalItems.find(function(A){var I=A.item;return I.type.name==="Scatter"});L&&(E=R(R({},E),L.props.points[O].tooltipPosition),M=L.props.points[O].tooltipPayload);var F={activeTooltipIndex:O,isTooltipActive:!0,activeLabel:C,activePayload:M,activeCoordinate:E};this.setState(F),this.renderCursor(j),this.accessibilityManager.setIndex(O)}}}},{key:"getSnapshotBeforeUpdate",value:function(g,_){if(!this.props.accessibilityLayer)return null;if(this.state.tooltipTicks!==_.tooltipTicks&&this.accessibilityManager.setDetails({coordinateList:this.state.tooltipTicks}),this.props.layout!==g.layout&&this.accessibilityManager.setDetails({layout:this.props.layout}),this.props.margin!==g.margin){var b,k;this.accessibilityManager.setDetails({offset:{left:(b=this.props.margin.left)!==null&&b!==void 0?b:0,top:(k=this.props.margin.top)!==null&&k!==void 0?k:0}})}return null}},{key:"componentDidUpdate",value:function(g){I1([St(g.children,Kt)],[St(this.props.children,Kt)])||this.displayDefaultTooltip()}},{key:"componentWillUnmount",value:function(){this.removeListener(),this.throttleTriggeredAfterMouseMove.cancel()}},{key:"getTooltipEventType",value:function(){var g=St(this.props.children,Kt);if(g&&typeof g.props.shared=="boolean"){var _=g.props.shared?"axis":"item";return o.indexOf(_)>=0?_:a}return a}},{key:"getMouseInfo",value:function(g){if(!this.container)return null;var _=this.container,b=_.getBoundingClientRect(),k=lT(b),S={chartX:Math.round(g.pageX-k.left),chartY:Math.round(g.pageY-k.top)},j=b.width/_.offsetWidth||1,O=this.inRange(S.chartX,S.chartY,j);if(!O)return null;var C=this.state,M=C.xAxisMap,P=C.yAxisMap,N=this.getTooltipEventType(),z=iy(this.state,this.props.data,this.props.layout,O);if(N!=="axis"&&M&&P){var E=er(M).scale,L=er(P).scale,F=E&&E.invert?E.invert(S.chartX):null,A=L&&L.invert?L.invert(S.chartY):null;return R(R({},S),{},{xValue:F,yValue:A},z)}return z?R(R({},S),z):null}},{key:"inRange",value:function(g,_){var b=arguments.length>2&&arguments[2]!==void 0?arguments[2]:1,k=this.props.layout,S=g/b,j=_/b;if(k==="horizontal"||k==="vertical"){var O=this.state.offset,C=S>=O.left&&S<=O.left+O.width&&j>=O.top&&j<=O.top+O.height;return C?{x:S,y:j}:null}var M=this.state,P=M.angleAxisMap,N=M.radiusAxisMap;if(P&&N){var z=er(P);return B2({x:S,y:j},z)}return null}},{key:"parseEventsOfWrapper",value:function(){var g=this.props.children,_=this.getTooltipEventType(),b=St(g,Kt),k={};b&&_==="axis"&&(b.props.trigger==="click"?k={onClick:this.handleClick}:k={onMouseEnter:this.handleMouseEnter,onDoubleClick:this.handleDoubleClick,onMouseMove:this.handleMouseMove,onMouseLeave:this.handleMouseLeave,onTouchMove:this.handleTouchMove,onTouchStart:this.handleTouchStart,onTouchEnd:this.handleTouchEnd,onContextMenu:this.handleContextMenu});var S=Ds(this.props,this.handleOuterEvent);return R(R({},S),k)}},{key:"addListener",value:function(){Ld.on(Fd,this.handleReceiveSyncEvent)}},{key:"removeListener",value:function(){Ld.removeListener(Fd,this.handleReceiveSyncEvent)}},{key:"filterFormatItem",value:function(g,_,b){for(var k=this.state.formattedGraphicalItems,S=0,j=k.length;S<j;S++){var O=k[S];if(O.item===g||O.props.key===g.key||_===En(O.item.type)&&b===O.childIndex)return O}return null}},{key:"renderClipPath",value:function(){var g=this.clipPathId,_=this.state.offset,b=_.left,k=_.top,S=_.height,j=_.width;return T.createElement("defs",null,T.createElement("clipPath",{id:g},T.createElement("rect",{x:b,y:k,height:S,width:j})))}},{key:"getXScales",value:function(){var g=this.state.xAxisMap;return g?Object.entries(g).reduce(function(_,b){var k=ty(b,2),S=k[0],j=k[1];return R(R({},_),{},Z({},S,j.scale))},{}):null}},{key:"getYScales",value:function(){var g=this.state.yAxisMap;return g?Object.entries(g).reduce(function(_,b){var k=ty(b,2),S=k[0],j=k[1];return R(R({},_),{},Z({},S,j.scale))},{}):null}},{key:"getXScaleByAxisId",value:function(g){var _;return(_=this.state.xAxisMap)===null||_===void 0||(_=_[g])===null||_===void 0?void 0:_.scale}},{key:"getYScaleByAxisId",value:function(g){var _;return(_=this.state.yAxisMap)===null||_===void 0||(_=_[g])===null||_===void 0?void 0:_.scale}},{key:"getItemByXY",value:function(g){var _=this.state,b=_.formattedGraphicalItems,k=_.activeItem;if(b&&b.length)for(var S=0,j=b.length;S<j;S++){var O=b[S],C=O.props,M=O.item,P=M.type.defaultProps!==void 0?R(R({},M.type.defaultProps),M.props):M.props,N=En(M.type);if(N==="Bar"){var z=(C.data||[]).find(function(A){return UB(g,A)});if(z)return{graphicalItem:O,payload:z}}else if(N==="RadialBar"){var E=(C.data||[]).find(function(A){return B2(g,A)});if(E)return{graphicalItem:O,payload:E}}else if(Nu(O,k)||Eu(O,k)||Jl(O,k)){var L=VW({graphicalItem:O,activeTooltipItem:k,itemData:P.data}),F=P.activeIndex===void 0?L:P.activeIndex;return{graphicalItem:R(R({},O),{},{childIndex:F}),payload:Jl(O,k)?P.data[L]:O.props.data[L]}}}return null}},{key:"render",value:function(){var g=this;if(!E7(this))return null;var _=this.props,b=_.children,k=_.className,S=_.width,j=_.height,O=_.style,C=_.compact,M=_.title,P=_.desc,N=ny(_,WV),z=oe(N,!1);if(C)return T.createElement(R5,{state:this.state,width:this.props.width,height:this.props.height,clipPathId:this.clipPathId},T.createElement(L1,Oi({},z,{width:S,height:j,title:M,desc:P}),this.renderClipPath(),$7(b,this.renderMap)));if(this.props.accessibilityLayer){var E,L;z.tabIndex=(E=this.props.tabIndex)!==null&&E!==void 0?E:0,z.role=(L=this.props.role)!==null&&L!==void 0?L:"application",z.onKeyDown=function(A){g.accessibilityManager.keyboardEvent(A)},z.onFocus=function(){g.accessibilityManager.focus()}}var F=this.parseEventsOfWrapper();return T.createElement(R5,{state:this.state,width:this.props.width,height:this.props.height,clipPathId:this.clipPathId},T.createElement("div",Oi({className:se("recharts-wrapper",k),style:R({position:"relative",cursor:"default",width:S,height:j},O)},F,{ref:function(I){g.container=I}}),T.createElement(L1,Oi({},z,{width:S,height:j,title:M,desc:P,style:aX}),this.renderClipPath(),$7(b,this.renderMap)),this.renderLegend(),this.renderTooltip()))}}])}($.Component);Z(x,"displayName",n),Z(x,"defaultProps",R({layout:"horizontal",stackOffset:"none",barCategoryGap:"10%",barGap:4,margin:{top:5,right:5,bottom:5,left:5},reverseStackOrder:!1,syncMethod:"index"},d)),Z(x,"getDerivedStateFromProps",function(w,y){var m=w.dataKey,g=w.data,_=w.children,b=w.width,k=w.height,S=w.layout,j=w.stackOffset,O=w.margin,C=y.dataStartIndex,M=y.dataEndIndex;if(y.updateId===void 0){var P=ay(w);return R(R(R({},P),{},{updateId:0},h(R(R({props:w},P),{},{updateId:0}),y)),{},{prevDataKey:m,prevData:g,prevWidth:b,prevHeight:k,prevLayout:S,prevStackOffset:j,prevMargin:O,prevChildren:_})}if(m!==y.prevDataKey||g!==y.prevData||b!==y.prevWidth||k!==y.prevHeight||S!==y.prevLayout||j!==y.prevStackOffset||!$i(O,y.prevMargin)){var N=ay(w),z={chartX:y.chartX,chartY:y.chartY,isTooltipActive:y.isTooltipActive},E=R(R({},iy(y,g,S)),{},{updateId:y.updateId+1}),L=R(R(R({},N),z),E);return R(R(R({},L),h(R({props:w},L),y)),{},{prevDataKey:m,prevData:g,prevWidth:b,prevHeight:k,prevLayout:S,prevStackOffset:j,prevMargin:O,prevChildren:_})}if(!I1(_,y.prevChildren)){var F,A,I,D,B=St(_,ea),W=B&&(F=(A=B.props)===null||A===void 0?void 0:A.startIndex)!==null&&F!==void 0?F:C,X=B&&(I=(D=B.props)===null||D===void 0?void 0:D.endIndex)!==null&&I!==void 0?I:M,Y=W!==C||X!==M,le=!ce(g),je=le&&!Y?y.updateId:y.updateId+1;return R(R({updateId:je},h(R(R({props:w},y),{},{updateId:je,dataStartIndex:W,dataEndIndex:X}),y)),{},{prevChildren:_,dataStartIndex:W,dataEndIndex:X})}return null}),Z(x,"renderActiveDot",function(w,y,m){var g;return $.isValidElement(w)?g=$.cloneElement(w,y):te(w)?g=w(y):g=T.createElement(r3,y),T.createElement(Ve,{className:"recharts-active-dot",key:m},g)});var v=$.forwardRef(function(y,m){return T.createElement(x,Oi({},y,{ref:m}))});return v.displayName=x.displayName,v},oy=mX({chartName:"BarChart",GraphicalChild:pn,defaultTooltipEventType:"axis",validateTooltipEventTypes:["axis","item"],axisComponents:[{axisType:"xAxis",AxisComp:io},{axisType:"yAxis",AxisComp:ao}],formatAxisMap:vH});function yX(){const[e,t]=$.useState("alarms"),[n,r]=$.useState([]),[i,a]=$.useState([]),[l,o]=$.useState([]),[s,c]=$.useState(!1);$.useEffect(()=>{e==="alarms"?f():e==="events"?d():e==="operation"&&p()},[e]);const f=async()=>{c(!0);try{const v=await(await fetch("http://localhost:8001/api/alarms/history?limit=100")).json();v.success&&r(v.data)}catch(x){console.error("알람 이력 조회 오류:",x)}finally{c(!1)}},d=async()=>{c(!0);try{const v=await(await fetch("http://localhost:8001/api/events?limit=100")).json();v.success&&a(v.data)}catch(x){console.error("이벤트 로그 조회 오류:",x)}finally{c(!1)}},p=async()=>{c(!0);try{const v=await(await fetch("http://localhost:8001/api/operations")).json();v.success&&o(v.data)}catch(x){console.error("운전 이력 조회 오류:",x)}finally{c(!1)}},h=(x,v)=>{if(!x||x.length===0){alert("내보낼 데이터가 없습니다.");return}const w=Object.keys(x[0]),y=[w.join(","),...x.map(k=>w.map(S=>{const j=k[S];return typeof j=="string"&&j.includes(",")?`"${j}"`:j}).join(","))].join(`
`),m="\uFEFF",g=new Blob([m+y],{type:"text/csv;charset=utf-8;"}),_=document.createElement("a"),b=URL.createObjectURL(g);_.setAttribute("href",b),_.setAttribute("download",`${v}_${new Date().toISOString().slice(0,10)}.csv`),_.style.visibility="hidden",document.body.appendChild(_),_.click(),document.body.removeChild(_)};return u.jsxs("div",{className:"history",children:[u.jsxs("div",{className:"history-header",children:[u.jsx("h2",{children:"📋 이력 관리"}),u.jsx("p",{children:"알람 이력, 이벤트 로그, 운전 이력 조회"})]}),u.jsxs("div",{className:"history-tabs",children:[u.jsx("button",{className:e==="alarms"?"active":"",onClick:()=>t("alarms"),children:"🔔 알람 이력"}),u.jsx("button",{className:e==="events"?"active":"",onClick:()=>t("events"),children:"📝 이벤트 로그"}),u.jsx("button",{className:e==="operation"?"active":"",onClick:()=>t("operation"),children:"⚙️ 운전 이력"})]}),u.jsxs("div",{className:"history-content",children:[s&&u.jsx("div",{className:"loading",children:"데이터 로딩 중..."}),!s&&e==="alarms"&&u.jsx(vX,{data:n,onExport:h}),!s&&e==="events"&&u.jsx(gX,{data:i,onExport:h}),!s&&e==="operation"&&u.jsx(xX,{data:l,onExport:h})]})]})}function vX({data:e,onExport:t}){const[n,r]=$.useState("all"),[i,a]=$.useState(""),[l,o]=$.useState(()=>{const d=new Date;return d.setDate(d.getDate()-30),d.toISOString().slice(0,10)}),[s,c]=$.useState(()=>new Date().toISOString().slice(0,10)),f=$.useMemo(()=>e.filter(d=>{var h;const p=(h=d.time)==null?void 0:h.slice(0,10);return!(p&&(p<l||p>s)||n!=="all"&&d.level!==n||i&&!d.message.toLowerCase().includes(i.toLowerCase()))}),[e,l,s,n,i]);return u.jsxs("div",{className:"alarm-history",children:[u.jsxs("div",{className:"history-controls",children:[u.jsxs("div",{className:"date-range",children:[u.jsx("label",{children:"조회 기간:"}),u.jsx("input",{type:"date",value:l,onChange:d=>o(d.target.value)}),u.jsx("span",{children:"~"}),u.jsx("input",{type:"date",value:s,onChange:d=>c(d.target.value)})]}),u.jsxs("div",{className:"filter-group",children:[u.jsx("label",{children:"등급:"}),u.jsxs("select",{value:n,onChange:d=>r(d.target.value),children:[u.jsx("option",{value:"all",children:"전체"}),u.jsx("option",{value:"critical",children:"위험"}),u.jsx("option",{value:"warning",children:"경고"})]})]}),u.jsx("div",{className:"search-group",children:u.jsx("input",{type:"text",placeholder:"🔍 알람 검색...",value:i,onChange:d=>a(d.target.value)})}),u.jsx("button",{className:"btn-export",onClick:()=>t(f,"alarm_history"),children:"📥 CSV 내보내기"})]}),u.jsx("div",{className:"history-table",children:u.jsxs("table",{children:[u.jsx("thead",{children:u.jsxs("tr",{children:[u.jsx("th",{children:"시간"}),u.jsx("th",{children:"등급"}),u.jsx("th",{children:"메시지"}),u.jsx("th",{children:"확인"})]})}),u.jsx("tbody",{children:f.map(d=>u.jsxs("tr",{children:[u.jsx("td",{children:d.time}),u.jsx("td",{children:u.jsxs("span",{className:`level-badge ${d.level}`,children:[d.level==="critical"&&"🔴 위험",d.level==="warning"&&"🟡 경고"]})}),u.jsx("td",{children:d.message}),u.jsx("td",{children:u.jsx("span",{className:`ack-badge ${d.acknowledged?"ack":"unack"}`,children:d.acknowledged?"✅ 확인됨":"⏳ 대기중"})})]},d.id))})]})}),u.jsxs("div",{className:"history-summary",children:[u.jsxs("div",{className:"summary-item",children:[u.jsx("span",{className:"summary-label",children:"총 알람:"}),u.jsxs("span",{className:"summary-value",children:[f.length,"건"]})]}),u.jsxs("div",{className:"summary-item",children:[u.jsx("span",{className:"summary-label",children:"위험:"}),u.jsxs("span",{className:"summary-value critical",children:[f.filter(d=>d.level==="critical").length,"건"]})]}),u.jsxs("div",{className:"summary-item",children:[u.jsx("span",{className:"summary-label",children:"경고:"}),u.jsxs("span",{className:"summary-value warning",children:[f.filter(d=>d.level==="warning").length,"건"]})]})]})]})}function gX({data:e,onExport:t}){const[n,r]=$.useState("all"),[i,a]=$.useState(()=>{const f=new Date;return f.setDate(f.getDate()-30),f.toISOString().slice(0,10)}),[l,o]=$.useState(()=>new Date().toISOString().slice(0,10)),s=$.useMemo(()=>e.filter(f=>{var p;const d=(p=f.time)==null?void 0:p.slice(0,10);return!(d&&(d<i||d>l)||n!=="all"&&f.type!==n)}),[e,i,l,n]),c=f=>{switch(f){case"control":return"🎮";case"alarm":return"🔔";case"setting":return"⚙️";case"system":return"💻";default:return"📝"}};return u.jsxs("div",{className:"event-history",children:[u.jsxs("div",{className:"history-controls",children:[u.jsxs("div",{className:"date-range",children:[u.jsx("label",{children:"조회 기간:"}),u.jsx("input",{type:"date",value:i,onChange:f=>a(f.target.value)}),u.jsx("span",{children:"~"}),u.jsx("input",{type:"date",value:l,onChange:f=>o(f.target.value)})]}),u.jsxs("div",{className:"filter-group",children:[u.jsx("label",{children:"유형:"}),u.jsxs("select",{value:n,onChange:f=>r(f.target.value),children:[u.jsx("option",{value:"all",children:"전체"}),u.jsx("option",{value:"control",children:"제어"}),u.jsx("option",{value:"alarm",children:"알람"}),u.jsx("option",{value:"setting",children:"설정"}),u.jsx("option",{value:"system",children:"시스템"})]})]}),u.jsx("button",{className:"btn-export",onClick:()=>t(s,"event_history"),children:"📥 CSV 내보내기"})]}),u.jsx("div",{className:"event-list",children:s.length>0?s.map(f=>u.jsxs("div",{className:"event-item",children:[u.jsx("div",{className:"event-icon",children:c(f.type)}),u.jsxs("div",{className:"event-content",children:[u.jsxs("div",{className:"event-header",children:[u.jsx("span",{className:"event-time",children:f.time}),u.jsx("span",{className:"event-user",children:f.user})]}),u.jsx("div",{className:"event-message",children:f.message})]})]},f.id)):u.jsx("div",{className:"no-data-message",children:"해당 기간의 이벤트가 없습니다."})})]})}function xX({data:e,onExport:t}){const[n,r]=$.useState(()=>{const h=new Date;return h.setDate(h.getDate()-30),h.toISOString().slice(0,10)}),[i,a]=$.useState(()=>new Date().toISOString().slice(0,10)),l=$.useMemo(()=>!e||e.length===0?[]:e.filter(h=>{const x=h.date;return x>=n&&x<=i}),[e,n,i]),o=$.useMemo(()=>{if(!l||l.length===0)return[];const h=l.reduce((x,v)=>{const w=v.date;return x[w]||(x[w]={date:w,energy_kwh:0,saved_kwh:0,runtime_hours:0}),x[w].energy_kwh+=v.energy_kwh||0,x[w].saved_kwh+=v.saved_kwh||0,x[w].runtime_hours+=v.runtime_hours||0,x},{});return Object.values(h).sort((x,v)=>new Date(x.date)-new Date(v.date)).map(x=>({...x,date:x.date.slice(5),savings_rate:x.energy_kwh>0?(x.saved_kwh/(x.energy_kwh+x.saved_kwh)*100).toFixed(1):0}))},[l]),s=$.useMemo(()=>{if(!l||l.length===0)return[];const h=l.reduce((x,v)=>{const w=v.equipment_name;return x[w]||(x[w]={name:w,energy_kwh:0,saved_kwh:0}),x[w].energy_kwh+=v.energy_kwh||0,x[w].saved_kwh+=v.saved_kwh||0,x},{});return Object.values(h).sort((x,v)=>x.name.localeCompare(v.name))},[l]),c=(l==null?void 0:l.reduce((h,x)=>h+(x.energy_kwh||0),0))||0,f=(l==null?void 0:l.reduce((h,x)=>h+(x.saved_kwh||0),0))||0,d=(l==null?void 0:l.reduce((h,x)=>h+(x.runtime_hours||0),0))||0,p=c>0?(f/(c+f)*100).toFixed(1):0;return u.jsxs("div",{className:"operation-history",children:[u.jsxs("div",{className:"history-controls",children:[u.jsxs("div",{className:"date-range",children:[u.jsx("label",{children:"조회 기간:"}),u.jsx("input",{type:"date",value:n,onChange:h=>r(h.target.value)}),u.jsx("span",{children:"~"}),u.jsx("input",{type:"date",value:i,onChange:h=>a(h.target.value)})]}),u.jsx("button",{className:"btn-export",onClick:()=>t(l,"operation_history"),children:"📥 CSV 내보내기"})]}),u.jsxs("div",{className:"operation-charts",children:[u.jsxs("div",{className:"chart-section",children:[u.jsx("h4",{children:"📊 일별 절감 전력 추이"}),o.length>0?u.jsx(Nm,{width:"100%",height:250,children:u.jsxs(oy,{data:o,margin:{top:20,right:30,left:20,bottom:5},children:[u.jsx(qf,{strokeDasharray:"3 3",stroke:"#444"}),u.jsx(io,{dataKey:"date",stroke:"#aaa"}),u.jsx(ao,{stroke:"#aaa"}),u.jsx(Kt,{contentStyle:{backgroundColor:"#1a1a2e",border:"1px solid #444"},labelStyle:{color:"#fff"}}),u.jsx(fr,{}),u.jsx(pn,{dataKey:"energy_kwh",name:"소비 전력 (kWh)",fill:"#ff6b6b"}),u.jsx(pn,{dataKey:"saved_kwh",name:"절감 전력 (kWh)",fill:"#4ecdc4"})]})}):u.jsx("div",{className:"chart-placeholder",children:u.jsx("p",{children:"차트는 실제 데이터가 누적되면 표시됩니다"})})]}),u.jsxs("div",{className:"chart-section",children:[u.jsx("h4",{children:"📈 장비별 에너지 현황"}),s.length>0?u.jsx(Nm,{width:"100%",height:Math.max(250,s.length*35),children:u.jsxs(oy,{data:s,layout:"vertical",margin:{top:20,right:30,left:60,bottom:5},children:[u.jsx(qf,{strokeDasharray:"3 3",stroke:"#444"}),u.jsx(io,{type:"number",stroke:"#aaa"}),u.jsx(ao,{dataKey:"name",type:"category",stroke:"#aaa"}),u.jsx(Kt,{contentStyle:{backgroundColor:"#1a1a2e",border:"1px solid #444"},labelStyle:{color:"#fff"}}),u.jsx(fr,{}),u.jsx(pn,{dataKey:"energy_kwh",name:"소비 전력 (kWh)",fill:"#ff6b6b"}),u.jsx(pn,{dataKey:"saved_kwh",name:"절감 전력 (kWh)",fill:"#4ecdc4"})]})}):u.jsx("div",{className:"chart-placeholder",children:u.jsx("p",{children:"장비별 데이터가 없습니다"})})]})]}),u.jsx("div",{className:"operation-table-scroll",children:u.jsxs("table",{children:[u.jsx("thead",{children:u.jsxs("tr",{children:[u.jsx("th",{children:"펌프"}),u.jsx("th",{children:"날짜"}),u.jsx("th",{children:"운전 시간"}),u.jsx("th",{children:"소비 전력"}),u.jsx("th",{children:"절감 전력"}),u.jsx("th",{children:"절감률"})]})}),u.jsx("tbody",{children:l&&l.length>0?l.map((h,x)=>{var v,w,y;return u.jsxs("tr",{children:[u.jsx("td",{children:u.jsx("strong",{children:h.equipment_name})}),u.jsx("td",{children:h.date}),u.jsxs("td",{children:[(v=h.runtime_hours)==null?void 0:v.toFixed(1)," h"]}),u.jsxs("td",{children:[(w=h.energy_kwh)==null?void 0:w.toFixed(1)," kWh"]}),u.jsxs("td",{className:"highlight",children:[(y=h.saved_kwh)==null?void 0:y.toFixed(1)," kWh"]}),u.jsxs("td",{className:"highlight",children:[h.energy_kwh>0?(h.saved_kwh/h.energy_kwh*100).toFixed(1):0,"%"]})]},x)}):u.jsx("tr",{children:u.jsx("td",{colSpan:"6",style:{textAlign:"center",padding:"20px"},children:"해당 기간의 운전 이력이 없습니다."})})}),l&&l.length>0&&u.jsx("tfoot",{children:u.jsxs("tr",{className:"total-row",children:[u.jsx("td",{colSpan:"2",children:u.jsx("strong",{children:"합계"})}),u.jsx("td",{children:u.jsxs("strong",{children:[d.toFixed(1)," h"]})}),u.jsx("td",{children:u.jsxs("strong",{children:[c.toFixed(1)," kWh"]})}),u.jsx("td",{className:"highlight",children:u.jsxs("strong",{children:[f.toFixed(1)," kWh"]})}),u.jsx("td",{className:"highlight",children:u.jsxs("strong",{children:[p,"%"]})})]})})]})})]})}const fs=e=>{switch(e){case 0:return"#10b981";case 1:return"#9e9e9e";case 2:return"#ff9800";case 3:return"#f44336";default:return"#10b981"}},i0=e=>{switch(e){case 0:return"정상";case 1:return"주의";case 2:return"경고";case 3:return"위험";default:return"정상"}},bX=e=>{switch(e){case"rising":return"↑ 상승";case"stable":return"→ 안정";case"falling":return"↓ 하강";default:return"→ 안정"}},wX=T.memo(({vfd:e,onClose:t})=>{var n,r,i,a,l,o,s,c,f,d;return e?u.jsx("div",{className:"popup-overlay",onClick:t,children:u.jsxs("div",{className:"popup-content",onClick:p=>p.stopPropagation(),children:[u.jsxs("div",{className:"popup-header",children:[u.jsxs("h3",{children:[e.name," 상세 진단 정보"]}),u.jsx("button",{className:"popup-close",onClick:t,children:"×"})]}),u.jsxs("div",{className:"popup-body",children:[u.jsxs("div",{className:"popup-summary",style:{borderLeftColor:fs(e.severityLevel)},children:[u.jsx("div",{className:"popup-health-score",style:{color:fs(e.severityLevel)},children:e.healthScore}),u.jsxs("div",{className:"popup-health-info",children:[u.jsxs("div",{className:"popup-status",style:{color:fs(e.severityLevel)},children:[i0(e.severityLevel)," (Lv.",e.severityLevel,")"]}),u.jsx("div",{className:"popup-recommendation",children:e.recommendation})]})]}),u.jsxs("div",{className:"popup-section",children:[u.jsx("h4",{children:"🔧 실시간 운전 데이터"}),u.jsxs("div",{className:"popup-metrics-grid",children:[u.jsxs("div",{className:"popup-metric",children:[u.jsx("span",{className:"popup-metric-label",children:"주파수"}),u.jsxs("span",{className:"popup-metric-value",children:[((n=e.current_frequency_hz)==null?void 0:n.toFixed(1))||0," Hz"]})]}),u.jsxs("div",{className:"popup-metric",children:[u.jsx("span",{className:"popup-metric-label",children:"모터 열부하"}),u.jsxs("span",{className:"popup-metric-value",children:[e.motor_thermal_pct||0," %"]})]}),u.jsxs("div",{className:"popup-metric",children:[u.jsx("span",{className:"popup-metric-label",children:"인버터 열부하"}),u.jsxs("span",{className:"popup-metric-value",children:[e.inverter_thermal_pct||0," %"]})]}),u.jsxs("div",{className:"popup-metric",children:[u.jsx("span",{className:"popup-metric-label",children:"방열판 온도"}),u.jsxs("span",{className:"popup-metric-value",children:[e.heatsink_temperature_c||0," °C"]})]}),u.jsxs("div",{className:"popup-metric",children:[u.jsx("span",{className:"popup-metric-label",children:"모터 전류"}),u.jsxs("span",{className:"popup-metric-value",children:[((r=e.output_current_a)==null?void 0:r.toFixed(1))||0," A"]})]}),u.jsxs("div",{className:"popup-metric",children:[u.jsx("span",{className:"popup-metric-label",children:"DC 링크 전압"}),u.jsxs("span",{className:"popup-metric-value",children:[e.dc_bus_voltage_v||0," V"]})]}),u.jsxs("div",{className:"popup-metric",children:[u.jsx("span",{className:"popup-metric-label",children:"운전 시간"}),u.jsxs("span",{className:"popup-metric-value",children:[e.cumulative_runtime_hours||0," h"]})]}),u.jsxs("div",{className:"popup-metric",children:[u.jsx("span",{className:"popup-metric-label",children:"기동 횟수"}),u.jsxs("span",{className:"popup-metric-value",children:[e.num_starts||0," 회"]})]})]})]}),u.jsxs("div",{className:"popup-section",children:[u.jsx("h4",{children:"⚡ 3상 전류 상태"}),u.jsxs("div",{className:"popup-metrics-grid",children:[u.jsxs("div",{className:"popup-metric",children:[u.jsx("span",{className:"popup-metric-label",children:"U상 전류"}),u.jsxs("span",{className:"popup-metric-value",children:[((i=e.phase_u_current)==null?void 0:i.toFixed(1))||0," A"]})]}),u.jsxs("div",{className:"popup-metric",children:[u.jsx("span",{className:"popup-metric-label",children:"V상 전류"}),u.jsxs("span",{className:"popup-metric-value",children:[((a=e.phase_v_current)==null?void 0:a.toFixed(1))||0," A"]})]}),u.jsxs("div",{className:"popup-metric",children:[u.jsx("span",{className:"popup-metric-label",children:"W상 전류"}),u.jsxs("span",{className:"popup-metric-value",children:[((l=e.phase_w_current)==null?void 0:l.toFixed(1))||0," A"]})]}),u.jsxs("div",{className:"popup-metric",children:[u.jsx("span",{className:"popup-metric-label",children:"불평형률"}),u.jsxs("span",{className:"popup-metric-value",children:[((o=e.current_imbalance_pct)==null?void 0:o.toFixed(1))||0," %"]})]})]})]}),u.jsxs("div",{className:"popup-section",children:[u.jsx("h4",{children:"🔮 예측 분석"}),u.jsxs("div",{className:"popup-metrics-grid",children:[u.jsxs("div",{className:"popup-metric",children:[u.jsx("span",{className:"popup-metric-label",children:"30분 후 예측 온도"}),u.jsxs("span",{className:"popup-metric-value",children:[((s=e.predicted_temp_30min)==null?void 0:s.toFixed(1))||"-"," °C"]})]}),u.jsxs("div",{className:"popup-metric",children:[u.jsx("span",{className:"popup-metric-label",children:"온도 상승률"}),u.jsxs("span",{className:"popup-metric-value",children:[((c=e.temp_rise_rate)==null?void 0:c.toFixed(3))||"-"," °C/min"]})]}),u.jsxs("div",{className:"popup-metric",children:[u.jsx("span",{className:"popup-metric-label",children:"온도 트렌드"}),u.jsx("span",{className:"popup-metric-value",children:bX(e.temp_trend)})]}),u.jsxs("div",{className:"popup-metric",children:[u.jsx("span",{className:"popup-metric-label",children:"이상 점수"}),u.jsx("span",{className:"popup-metric-value",children:((f=e.anomaly_score)==null?void 0:f.toFixed(1))||"-"})]}),u.jsxs("div",{className:"popup-metric",children:[u.jsx("span",{className:"popup-metric-label",children:"수명 잔여율"}),u.jsxs("span",{className:"popup-metric-value",children:[((d=e.remaining_life_percent)==null?void 0:d.toFixed(1))||"-"," %"]})]}),u.jsxs("div",{className:"popup-metric",children:[u.jsx("span",{className:"popup-metric-label",children:"정비 예상"}),u.jsx("span",{className:"popup-metric-value",children:e.estimated_days_to_maintenance?`${e.estimated_days_to_maintenance}일 후`:"-"})]})]})]}),e.anomaly_patterns&&e.anomaly_patterns.length>0&&u.jsxs("div",{className:"popup-section",children:[u.jsx("h4",{children:"⚠️ 이상 패턴"}),u.jsx("div",{className:"popup-anomaly-patterns",children:e.anomaly_patterns.map((p,h)=>u.jsxs("div",{className:"popup-anomaly-item",children:["🔴 ",p]},h))})]})]})]})}):null}),kX=()=>{const[e,t]=$.useState("health"),[n,r]=$.useState(null),[i,a]=$.useState(!0),[l,o]=$.useState(null),[s,c]=$.useState([]),[f,d]=$.useState(null),[p,h]=$.useState("all"),[x,v]=$.useState(null),w=async()=>{try{const N=await(await fetch("http://localhost:8001/api/vfd/diagnostics")).json();N.success&&N.data&&N.data.vfd_diagnostics?(r(N.data),o(null)):N.error==="PLC 연결 안됨"?(r(null),o("PLC 연결 안됨 - VFD 진단 데이터를 표시할 수 없습니다.")):o("VFD 진단 데이터를 사용할 수 없습니다.")}catch(P){o(`데이터 로드 실패: ${P.message}`)}finally{a(!1)}},y=async()=>{try{const P=p!=="all"?`?status=${p}&limit=100`:"?limit=100",z=await(await fetch(`http://localhost:8001/api/vfd/anomalies/history${P}`)).json();z.success&&z.data&&c(z.data)}catch(P){console.error("이상 징후 히스토리 로드 실패:",P)}},m=async()=>{try{const N=await(await fetch("http://localhost:8001/api/vfd/anomalies/statistics?days=30")).json();N.success&&N.data&&d(N.data)}catch(P){console.error("이상 징후 통계 로드 실패:",P)}},g=async P=>{try{(await(await fetch(`http://localhost:8001/api/vfd/acknowledge/${P}`,{method:"POST"})).json()).success&&w()}catch(N){console.error("확인 처리 실패:",N)}},_=async P=>{try{(await(await fetch(`http://localhost:8001/api/vfd/clear/${P}`,{method:"POST"})).json()).success&&w()}catch(N){console.error("해제 처리 실패:",N)}};$.useEffect(()=>{w(),y(),m();const P=setInterval(w,2e3),N=setInterval(y,1e4);return()=>{clearInterval(P),clearInterval(N)}},[]),$.useEffect(()=>{y()},[p]);const b=P=>({SW_PUMP_1:"SWP1",SW_PUMP_2:"SWP2",SW_PUMP_3:"SWP3",FW_PUMP_1:"FWP1",FW_PUMP_2:"FWP2",FW_PUMP_3:"FWP3",ER_FAN_1:"FAN1",ER_FAN_2:"FAN2",ER_FAN_3:"FAN3",ER_FAN_4:"FAN4"})[P]||P,k=P=>P>=98?"#10b981":P>=95?"#9e9e9e":P>=92?"#ff9800":"#f44336",S=$.useCallback(()=>{v(null)},[]);if(i)return u.jsx("div",{className:"vfd-diagnostics-container",children:"로딩 중..."});if(l)return u.jsx("div",{className:"vfd-diagnostics-container",children:u.jsx("div",{className:"error-message",children:l})});if(!n||!n.vfd_diagnostics)return u.jsx("div",{className:"vfd-diagnostics-container",children:"데이터가 없습니다."});const j=Object.entries(n.vfd_diagnostics).map(([P,N])=>({id:P,name:b(P),healthScore:N.health_score||100,severityLevel:N.severity_level||0,...N})),O=j.filter(P=>P.severityLevel>0&&!P.is_cleared),C=()=>u.jsxs("div",{className:"health-status-tab",children:[u.jsxs("section",{className:"vfd-status-cards",children:[u.jsx("h3",{children:"📊 VFD 건강도 현황 (4단계 중증도)"}),u.jsxs("div",{className:"severity-legend",style:{display:"flex",gap:"25px",marginBottom:"20px",padding:"12px 20px",background:"#0f172a",borderRadius:"6px",fontSize:"18px",fontWeight:"500"},children:[u.jsx("span",{style:{color:"#10b981"},children:"● Level 0: 정상 (0-2점)"}),u.jsx("span",{style:{color:"#9e9e9e"},children:"● Level 1: 주의 (3-5점)"}),u.jsx("span",{style:{color:"#ff9800"},children:"● Level 2: 경고 (6-8점)"}),u.jsx("span",{style:{color:"#f44336"},children:"● Level 3: 위험 (9점+)"})]}),u.jsx("div",{className:"vfd-grid",children:j.map(P=>{const N=fs(P.severityLevel),z=i0(P.severityLevel),E=L=>L.startsWith("SWP")?"#3b82f6":L.startsWith("FWP")?"#10b981":L.startsWith("FAN")?"#a855f7":"#334155";return u.jsxs("div",{className:"vfd-card clickable",style:{borderLeft:`4px solid ${N}`,border:`2px solid ${E(P.name)}`,borderLeftWidth:"4px",borderLeftColor:N},onClick:()=>v(P),children:[u.jsx("h4",{children:P.name}),u.jsx("div",{className:"health-score",style:{color:N},children:P.healthScore}),u.jsx("div",{className:"health-label",children:"건강도 점수"}),u.jsxs("div",{className:"status-badge",style:{color:N},children:[z," (Lv.",P.severityLevel,")"]}),u.jsxs("div",{style:{marginTop:"10px",fontSize:"15px",color:"#94a3b8",display:"flex",flexDirection:"column",gap:"5px"},children:[u.jsxs("span",{children:["모터열: ",P.motor_thermal_pct||0,"%"]}),u.jsxs("span",{children:["히트싱크: ",P.heatsink_temperature_c||0,"°C"]})]}),u.jsx("div",{className:"click-hint",children:"클릭하여 상세보기"})]},P.id)})})]}),u.jsxs("div",{className:"bottom-sections",children:[u.jsxs("section",{className:"anomaly-warnings",children:[u.jsx("h3",{children:"⚠️ 이상 징후 탐지"}),O.length>0?u.jsx("div",{className:"warning-list",children:O.map(P=>{const N=P.severityLevel===1?"warning":P.severityLevel===2?"error":"critical",z=P.severityLevel===1?"⚠️":P.severityLevel===2?"🟠":"🔴",E=P.is_acknowledged||!1;return u.jsx("div",{className:`warning-item ${N}`,style:E?{backgroundColor:"rgba(255, 193, 7, 0.15)",borderLeftColor:"#ffc107"}:{},children:u.jsxs("div",{style:{display:"flex",justifyContent:"space-between",alignItems:"center"},children:[u.jsxs("div",{children:[z," ",u.jsx("strong",{children:P.name}),": 건강도 ",P.healthScore," (",i0(P.severityLevel)," Lv.",P.severityLevel,") - ",P.recommendation,E&&u.jsx("span",{style:{marginLeft:"10px",color:"#ffc107"},children:"✓ 확인됨"})]}),u.jsxs("div",{style:{display:"flex",gap:"10px"},children:[!E&&u.jsx("button",{onClick:()=>g(P.id),style:{padding:"6px 12px",backgroundColor:"#3b82f6",color:"white",border:"none",borderRadius:"4px",cursor:"pointer"},children:"확인"}),E&&u.jsx("button",{onClick:()=>_(P.id),style:{padding:"6px 12px",backgroundColor:"#6b7280",color:"white",border:"none",borderRadius:"4px",cursor:"pointer"},children:"해제"})]})]})},P.id)})}):u.jsx("div",{className:"success-message",children:"✅ 모든 VFD가 정상 상태입니다."})]}),u.jsxs("section",{className:"maintenance-section",children:[u.jsx("h3",{children:"🔮 예측 유지보수"}),O.length>0?u.jsx("div",{className:"maintenance-table",children:u.jsxs("table",{children:[u.jsx("thead",{children:u.jsxs("tr",{children:[u.jsx("th",{children:"장비명"}),u.jsx("th",{children:"건강도"}),u.jsx("th",{children:"예상 정비"}),u.jsx("th",{children:"권장 조치"}),u.jsx("th",{children:"우선순위"})]})}),u.jsx("tbody",{children:O.map(P=>{const N=P.maintenance_priority===5?"즉시 점검":P.maintenance_priority===3?"1주일 내 점검":P.maintenance_priority===1?"정기 점검":"정상";return u.jsxs("tr",{children:[u.jsx("td",{children:P.name}),u.jsx("td",{style:{color:k(P.healthScore)},children:P.healthScore}),u.jsx("td",{children:P.estimated_days_to_maintenance?`${P.estimated_days_to_maintenance}일 후`:"-"}),u.jsx("td",{children:P.recommendation}),u.jsx("td",{children:N})]},P.id)})})]})}):u.jsx("div",{className:"info-message",children:"✅ 예정된 유지보수 항목이 없습니다."})]})]})]}),M=()=>{var P,N,z;return u.jsxs("div",{className:"history-tab",children:[f&&u.jsxs("div",{className:"history-stats",children:[u.jsxs("div",{className:"stat-card",children:[u.jsx("div",{className:"stat-value",children:f.total_anomalies||0}),u.jsx("div",{className:"stat-label",children:"최근 30일 발생"})]}),u.jsxs("div",{className:"stat-card",children:[u.jsx("div",{className:"stat-value",style:{color:"#f44336"},children:f.active_anomalies||0}),u.jsx("div",{className:"stat-label",children:"활성 이상 징후"})]}),u.jsxs("div",{className:"stat-card",children:[u.jsx("div",{className:"stat-value",style:{color:"#9e9e9e"},children:((P=f.by_severity)==null?void 0:P[1])||0}),u.jsx("div",{className:"stat-label",children:"주의 (Lv.1)"})]}),u.jsxs("div",{className:"stat-card",children:[u.jsx("div",{className:"stat-value",style:{color:"#ff9800"},children:((N=f.by_severity)==null?void 0:N[2])||0}),u.jsx("div",{className:"stat-label",children:"경고 (Lv.2)"})]}),u.jsxs("div",{className:"stat-card",children:[u.jsx("div",{className:"stat-value",style:{color:"#f44336"},children:((z=f.by_severity)==null?void 0:z[3])||0}),u.jsx("div",{className:"stat-label",children:"위험 (Lv.3)"})]})]}),u.jsx("div",{className:"history-filters",children:["all","ACTIVE","ACKNOWLEDGED","CLEARED","AUTO_CLEARED"].map(E=>u.jsx("button",{onClick:()=>h(E),className:`filter-btn ${p===E?"active":""}`,children:E==="all"?"전체":E==="ACTIVE"?"활성":E==="ACKNOWLEDGED"?"확인됨":E==="CLEARED"?"해제됨":"자동해제"},E))}),u.jsx("div",{className:"history-table-container",children:u.jsxs("table",{className:"history-table",children:[u.jsx("thead",{children:u.jsxs("tr",{children:[u.jsx("th",{style:{width:"180px"},children:"발생 시간"}),u.jsx("th",{style:{width:"100px"},children:"장비"}),u.jsx("th",{style:{width:"100px"},children:"중증도"}),u.jsx("th",{style:{width:"80px"},children:"건강도"}),u.jsx("th",{style:{width:"100px"},children:"상태"}),u.jsx("th",{children:"권고사항"}),u.jsx("th",{style:{width:"100px"},children:"지속시간"})]})}),u.jsx("tbody",{children:s.length>0?s.map((E,L)=>{const F=E.severity_level===1?"#9e9e9e":E.severity_level===2?"#ff9800":"#f44336",A=E.status==="ACTIVE"?"#f44336":E.status==="ACKNOWLEDGED"?"#ffc107":E.status==="CLEARED"?"#10b981":"#60a5fa",I=E.status==="ACTIVE"?"활성":E.status==="ACKNOWLEDGED"?"확인됨":E.status==="CLEARED"?"해제됨":"자동해제";return u.jsxs("tr",{children:[u.jsx("td",{children:new Date(E.occurred_at).toLocaleString("ko-KR")}),u.jsx("td",{children:b(E.equipment_id)}),u.jsxs("td",{style:{color:F},children:["Lv.",E.severity_level," (",E.severity_name,")"]}),u.jsx("td",{style:{color:F},children:E.health_score}),u.jsx("td",{children:u.jsx("span",{className:"status-tag",style:{background:`${A}20`,color:A},children:I})}),u.jsx("td",{className:"recommendation-cell",children:E.recommendations||"-"}),u.jsx("td",{children:E.duration_minutes?`${E.duration_minutes}분`:"-"})]},E.anomaly_id||L)}):u.jsx("tr",{children:u.jsx("td",{colSpan:"7",className:"empty-message",children:"이상 징후 히스토리가 없습니다."})})})]})})]})};return u.jsxs("div",{className:"vfd-diagnostics-container",children:[u.jsxs("div",{className:"sub-tabs",children:[u.jsx("button",{className:`sub-tab ${e==="health"?"active":""}`,onClick:()=>t("health"),children:"📊 VFD 건강도 현황"}),u.jsx("button",{className:`sub-tab ${e==="history"?"active":""}`,onClick:()=>t("history"),children:"📜 이상징후 히스토리"})]}),u.jsx("div",{className:"tab-content",children:e==="health"?u.jsx(C,{}):u.jsx(M,{})}),x&&u.jsx(wX,{vfd:x,onClose:S})]})};function _X({sensors:e={},pumps:t=[],fans:n=[]}){var c;const r=t.slice(0,3),i=t.slice(3,6),a=t.reduce((f,d)=>f+(d.saved_kwh||0),0),l=t.reduce((f,d)=>f+(d.run_hours||0),0),o=t.filter(f=>f.running).length,s=n.filter(f=>f.running_fwd||f.running_bwd).length;return u.jsxs("div",{className:"system-overview-compact",children:[u.jsxs("div",{className:"stats-row",children:[u.jsxs("div",{className:"stat-item",children:[u.jsx("span",{className:"stat-icon",children:"⚡"}),u.jsxs("div",{className:"stat-info",children:[u.jsx("span",{className:"stat-label",children:"총 절감 전력"}),u.jsxs("span",{className:"stat-value",children:[a.toLocaleString()," kWh"]})]})]}),u.jsxs("div",{className:"stat-item",children:[u.jsx("span",{className:"stat-icon",children:"⏱️"}),u.jsxs("div",{className:"stat-info",children:[u.jsx("span",{className:"stat-label",children:"총 운전 시간"}),u.jsxs("span",{className:"stat-value",children:[l.toLocaleString()," h"]})]})]}),u.jsxs("div",{className:"stat-item",children:[u.jsx("span",{className:"stat-icon",children:"🔄"}),u.jsxs("div",{className:"stat-info",children:[u.jsx("span",{className:"stat-label",children:"운전 중인 펌프"}),u.jsxs("span",{className:"stat-value",children:[o," / ",t.length]})]})]}),u.jsxs("div",{className:"stat-item",children:[u.jsx("span",{className:"stat-icon",children:"🌀"}),u.jsxs("div",{className:"stat-info",children:[u.jsx("span",{className:"stat-label",children:"운전 중인 팬"}),u.jsxs("span",{className:"stat-value",children:[s," / ",n.length]})]})]}),u.jsxs("div",{className:"stat-item",children:[u.jsx("span",{className:"stat-icon",children:"🔥"}),u.jsxs("div",{className:"stat-info",children:[u.jsx("span",{className:"stat-label",children:"M/E 부하"}),u.jsxs("span",{className:"stat-value",children:[((c=e.PU1)==null?void 0:c.toFixed(1))||0,"%"]})]})]})]}),u.jsxs("div",{className:"equipment-row",children:[u.jsxs("div",{className:"equipment-group",children:[u.jsx("h3",{children:"🌊 해수 펌프 (SWP)"}),u.jsx("div",{className:"equipment-cards",children:r.map((f,d)=>u.jsx(sy,{pump:f},d))})]}),u.jsxs("div",{className:"equipment-group",children:[u.jsx("h3",{children:"💧 청수 펌프 (FWP)"}),u.jsx("div",{className:"equipment-cards",children:i.map((f,d)=>u.jsx(sy,{pump:f},d))})]})]}),u.jsxs("div",{className:"fan-row",children:[u.jsx("h3",{children:"🌀 Engine Room 팬 (E/R Fan)"}),u.jsx("div",{className:"fan-cards",children:n.map((f,d)=>u.jsx(SX,{fan:f},d))})]})]})}function sy({pump:e}){var a;const t=e.running,n=()=>e.auto_mode&&e.vfd_mode?{text:"ESS",class:"ess-mode"}:e.auto_mode&&!e.vfd_mode?{text:"A/B",class:"auto-bypass-mode"}:!e.auto_mode&&e.vfd_mode?{text:"M/V",class:"manual-vfd-mode"}:{text:"M/B",class:"manual-bypass-mode"},r=l=>l&&l.startsWith("SWP")?"#3b82f6":l&&l.startsWith("FWP")?"#10b981":"#334155",i=n();return u.jsxs("div",{className:`compact-card ${t?"running":"stopped"}`,style:{border:`2px solid ${r(e.name)}`},children:[u.jsxs("div",{className:"compact-header",children:[u.jsxs("span",{className:"compact-name",children:[e.name,u.jsx("span",{className:`impeller-icon ${t?"running":"stopped"}`,children:u.jsxs("svg",{viewBox:"0 0 24 24",width:"40",height:"40",children:[u.jsx("circle",{cx:"12",cy:"12",r:"3",fill:"currentColor"}),u.jsx("path",{d:"M12 2 C14 6 16 8 12 12 C8 8 10 6 12 2",fill:"currentColor"}),u.jsx("path",{d:"M22 12 C18 14 16 16 12 12 C16 8 18 10 22 12",fill:"currentColor"}),u.jsx("path",{d:"M12 22 C10 18 8 16 12 12 C16 16 14 18 12 22",fill:"currentColor"}),u.jsx("path",{d:"M2 12 C6 10 8 8 12 12 C8 16 6 14 2 12",fill:"currentColor"})]})})]}),u.jsx("span",{className:`compact-mode ${i.class}`,children:i.text}),u.jsx("span",{className:`compact-status ${t?"on":"off"}`,children:t?"●":"○"})]}),u.jsxs("div",{className:"compact-body",children:[u.jsxs("div",{className:"compact-row",children:[u.jsx("span",{children:"주파수"}),u.jsxs("span",{className:"value",children:[((a=e.frequency)==null?void 0:a.toFixed(1))||0," Hz"]})]}),u.jsxs("div",{className:"compact-row",children:[u.jsx("span",{children:"전력"}),u.jsxs("span",{className:"value",children:[e.power_kw||0," kW"]})]}),u.jsxs("div",{className:"compact-row highlight",children:[u.jsx("span",{children:"절감률"}),u.jsxs("span",{className:"value",children:[e.saved_ratio||0,"%"]})]})]})]})}function SX({fan:e}){var a;const t=e.running_fwd||e.running_bwd,r=e.auto_mode&&e.vfd_mode?{text:"ESS",class:"ess-mode"}:e.auto_mode&&!e.vfd_mode?{text:"A/B",class:"auto-bypass-mode"}:!e.auto_mode&&e.vfd_mode?{text:"M/V",class:"manual-vfd-mode"}:{text:"M/B",class:"manual-bypass-mode"};return u.jsxs("div",{className:`compact-card ${t?"running":"stopped"}`,style:{border:"2px solid #a855f7"},children:[u.jsxs("div",{className:"compact-header",children:[u.jsxs("span",{className:"compact-name",children:[e.name,u.jsx("span",{className:`fan-icon ${e.running_fwd?"running-fwd":e.running_bwd?"running-bwd":"stopped"}`,children:u.jsxs("svg",{viewBox:"0 0 24 24",width:"40",height:"40",children:[u.jsx("circle",{cx:"12",cy:"12",r:"2.5",fill:"currentColor"}),u.jsx("path",{d:"M12 3 C12 3 15 7 15 9 C15 11 13 12 12 12 C11 12 9 11 9 9 C9 7 12 3 12 3",fill:"currentColor"}),u.jsx("path",{d:"M21 12 C21 12 17 15 15 15 C13 15 12 13 12 12 C12 11 13 9 15 9 C17 9 21 12 21 12",fill:"currentColor"}),u.jsx("path",{d:"M12 21 C12 21 9 17 9 15 C9 13 11 12 12 12 C13 12 15 13 15 15 C15 17 12 21 12 21",fill:"currentColor"}),u.jsx("path",{d:"M3 12 C3 12 7 9 9 9 C11 9 12 11 12 12 C12 13 11 15 9 15 C7 15 3 12 3 12",fill:"currentColor"})]})})]}),u.jsx("span",{className:`compact-mode ${r.class}`,children:r.text}),u.jsx("span",{className:`compact-status ${t?"on":"off"}`,children:t?"●":"○"})]}),u.jsxs("div",{className:"compact-body",children:[u.jsxs("div",{className:"compact-row",children:[u.jsx("span",{children:"주파수"}),u.jsxs("span",{className:"value",children:[((a=e.frequency)==null?void 0:a.toFixed(1))||0," Hz"]})]}),u.jsxs("div",{className:"compact-row",children:[u.jsx("span",{children:"전력"}),u.jsxs("span",{className:"value",children:[e.power_kw||0," kW"]})]}),u.jsxs("div",{className:"compact-row highlight",children:[u.jsx("span",{children:"절감률"}),u.jsxs("span",{className:"value",children:[e.saved_ratio||0,"%"]})]})]})]})}function jX(){return u.jsx("div",{className:"home-container",children:u.jsx("img",{src:"/home_page.png",alt:"ESS HMI Home",className:"home-image"})})}function OX(){const[e,t]=$.useState({}),[n,r]=$.useState([]),[i,a]=$.useState([]),[l,o]=$.useState([]),[s,c]=$.useState([]),[f,d]=$.useState({}),[p,h]=$.useState(!1),[x,v]=$.useState(!1),[w,y]=$.useState(null),[m,g]=$.useState("home"),[_,b]=$.useState(null),[k,S]=$.useState(!1);$.useRef(new Set);const j=$.useRef(new Set);$.useRef(!0);const O=$.useRef(null),C=$.useRef([]);$.useEffect(()=>{const A=new(window.AudioContext||window.webkitAudioContext);console.log("🎵 [App] AudioContext 생성됨, 초기 상태:",A.state),(async()=>{try{await A.resume(),console.log("🔊 [App] AudioContext 즉시 활성화 시도:",A.state)}catch{console.log("⚠️ [App] AudioContext 즉시 활성화 실패, 사용자 인터랙션 필요")}})(),b(A);const D=async()=>{console.log("👆 [App] 사용자 인터랙션 감지, AudioContext 상태:",A.state),A.state==="suspended"&&(await A.resume(),console.log("🔊 [App] AudioContext 활성화됨"),s.some(B=>!B.acknowledged)&&!O.current&&(console.log("🔔 [App] AudioContext 활성화 후 경고음 시작"),P()))};return document.addEventListener("click",D,{once:!0}),document.addEventListener("keydown",D,{once:!0}),()=>{document.removeEventListener("click",D),document.removeEventListener("keydown",D),A&&A.close()}},[]),$.useEffect(()=>(E(),()=>{w&&w.close()}),[]);const M=async()=>{if(!(!_||k))try{_.state==="suspended"&&await _.resume();const I=C.current.filter(X=>!X.acknowledged),D=I.some(X=>X.level==="critical"),B=I.some(X=>X.level==="warning");let W=1;D?W=3:B&&(W=2),console.log(`🔊 [App] 경고음 재생: ${W}번 (Critical: ${D}, Warning: ${B}, 총 미확인: ${I.length})`);for(let X=0;X<W;X++)setTimeout(()=>{const Y=_.createOscillator(),le=_.createGain();Y.connect(le),le.connect(_.destination),Y.frequency.value=880,Y.type="sine",le.gain.setValueAtTime(.3,_.currentTime),le.gain.exponentialRampToValueAtTime(.01,_.currentTime+.15),Y.start(_.currentTime),Y.stop(_.currentTime+.15)},X*200)}catch(A){console.error("❌ [App] 경고음 재생 오류:",A)}},P=()=>{console.log("🔊 [App] 연속 경고음 시작"),O.current&&clearInterval(O.current),M(),O.current=setInterval(()=>{M()},2e3)},N=()=>{console.log("🔇 [App] 연속 경고음 정지"),O.current&&(clearInterval(O.current),O.current=null)},z=()=>{S(!k),k?s.some(I=>!I.acknowledged)&&P():N()};$.useEffect(()=>{C.current=s},[s]),$.useEffect(()=>{const A=s.some(B=>!B.acknowledged),I=new Set(s.filter(B=>!B.acknowledged&&B.level==="critical").map(B=>B.id)),D=Array.from(I).filter(B=>!j.current.has(B));return console.log("🔍 [App] 알람 상태 체크:",{총알람:s.length,미확인알람:A,현재위험알람:I.size,새위험알람:D.length,muted:k,audioContext:!!_,intervalActive:!!O.current}),console.log("📋 [App] 알람 목록:",s.map(B=>({id:B.id,tag:B.tag,level:B.level,message:B.message,acknowledged:B.acknowledged}))),D.length>0&&k&&(console.log("🔴 [App] 새로운 위험 알람 발생 - 음소거 자동 해제",D),S(!1)),j.current=I,A&&_&&!k?O.current||(console.log("🔊 [App] 미확인 알람 감지 - 연속 경고음 시작"),P()):O.current&&(console.log("✅ [App] 모든 알람 확인됨 - 경고음 정지"),N()),()=>{O.current&&N()}},[s,_,k]);const E=()=>{const I=`${window.location.protocol==="https:"?"wss:":"ws:"}//${window.location.hostname}:8001/ws`;console.log("WebSocket 연결 시도:",I);const D=new WebSocket(I);D.onopen=()=>{console.log("✅ WebSocket 연결 성공"),h(!0)},D.onmessage=B=>{var W,X;try{const Y=JSON.parse(B.data);Y.type==="realtime_update"&&(t(Y.sensors),o(Y.equipment||[]),r(Y.pumps||((W=Y.equipment)==null?void 0:W.slice(0,6))||[]),a(((X=Y.equipment)==null?void 0:X.slice(6,10))||[]),c(Y.alarms||[]),d(Y.alarm_summary||{}),v(Y.plc_connected||!1))}catch(Y){console.error("WebSocket 메시지 파싱 오류:",Y)}},D.onerror=B=>{console.error("❌ WebSocket 오류:",B),h(!1),v(!1)},D.onclose=()=>{console.log("WebSocket 연결 종료, 5초 후 재연결..."),h(!1),v(!1),setTimeout(E,5e3)},y(D)},L=async(A,I)=>{try{console.log(`🔧 장비 명령 전송 시도: equipment=${A}, command=${I}`);const D=await fetch("http://localhost:8001/api/equipment/command",{method:"POST",headers:{"Content-Type":"application/json"},body:JSON.stringify({equipment_name:A,command:I})});if(console.log(`📡 응답 상태: ${D.status}`),!D.ok){const W=await D.text();return console.error("❌ HTTP 오류:",D.status,W),alert(`명령 전송 실패: ${D.status}`),!1}const B=await D.json();return console.log("📦 응답 데이터:",B),B.success?(console.log(`✅ ${A} ${I} 명령 성공`),!0):(console.error("❌ 장비 명령 실패:",B),alert("명령 전송 실패"),!1)}catch(D){return console.error("❌ 장비 명령 오류:",D),alert(`오류 발생: ${D.message}`),!1}},F=async(A,I)=>{const D=["SWP1","SWP2","SWP3","FWP1","FWP2","FWP3"];return A>=0&&A<6?await L(D[A],I):!1};return u.jsxs("div",{className:"app",children:[u.jsxs("header",{className:"app-header",children:[u.jsx("h1",{children:"🚢 ESS HMI - Energy Saving System"}),u.jsxs("div",{className:"status-indicator",children:[u.jsx("span",{className:`status-dot ${x?"connected":"disconnected"}`}),u.jsx("span",{children:x?"PLC 연결됨":"PLC 연결 안됨"})]})]}),u.jsxs("nav",{className:"tab-nav",children:[u.jsx("button",{className:m==="home"?"active":"",onClick:()=>g("home"),children:"🏠 홈"}),u.jsx("button",{className:m==="system_overview"?"active":"",onClick:()=>g("system_overview"),children:"📊 운전 현황"}),u.jsx("button",{className:m==="dashboard"?"active":"",onClick:()=>g("dashboard"),children:"💡 에너지 절감 현황"}),u.jsx("button",{className:m==="diagram"?"active":"",onClick:()=>g("diagram"),children:"🔧 냉각수 계통도"}),u.jsx("button",{className:m==="fan_diagram"?"active":"",onClick:()=>g("fan_diagram"),children:"🌀 E/R 환기 계통도"}),u.jsx("button",{className:m==="advanced"?"active":"",onClick:()=>g("advanced"),children:"🎛️ 운전 제어"}),u.jsx("button",{className:m==="vfd_diagnostics"?"active":"",onClick:()=>g("vfd_diagnostics"),children:"🔍 VFD 진단"}),u.jsx("button",{className:m==="trend"?"active":"",onClick:()=>g("trend"),children:"📈 센서 트렌드"}),u.jsx("button",{className:m==="settings"?"active":"",onClick:()=>g("settings"),children:"⚙️ 파라미터 설정"}),u.jsx("button",{className:m==="history"?"active":"",onClick:()=>g("history"),children:"📋 이력"}),u.jsx("button",{className:`${m==="alarm"?"active":""} ${s.some(A=>!A.acknowledged)?"has-unack-alarms":""}`,onClick:()=>g("alarm"),children:"🔔 알람"})]}),u.jsxs("main",{className:"app-content",children:[m==="home"&&u.jsx(jX,{}),m==="dashboard"&&u.jsx(xx,{sensors:e,equipment:l,pumps:n,fans:i}),m==="diagram"&&u.jsx(Ox,{sensors:e,equipment:l,pumps:n,fans:i,onCommand:L,onPumpCommand:F}),m==="fan_diagram"&&u.jsx(Ax,{sensors:e,fans:i,equipment:l,onCommand:L}),m==="advanced"&&u.jsx(Fx,{equipment:l,pumps:n,fans:i,onCommand:L,onPumpCommand:F}),m==="settings"&&u.jsx(Ex,{}),m==="trend"&&u.jsx(Mx,{sensors:e,equipment:l,pumps:n,fans:i}),m==="history"&&u.jsx(yX,{}),m==="alarm"&&u.jsx(Nx,{alarms:s,alarmSummary:f,alarmSoundMuted:k,onToggleMute:z}),m==="vfd_diagnostics"&&u.jsx(kX,{}),m==="system_overview"&&u.jsx(_X,{sensors:e,pumps:n,fans:i})]}),u.jsxs("footer",{className:"app-footer",children:[u.jsx("span",{children:"© 2025 ESS HMI System"}),u.jsxs("span",{children:["마지막 업데이트: ",new Date().toLocaleTimeString("ko-KR")]})]})]})}Bd.createRoot(document.getElementById("root")).render(u.jsx(T.StrictMode,{children:u.jsx(OX,{})}));
