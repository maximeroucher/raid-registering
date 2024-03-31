"use strict";(self.webpackChunk_N_E=self.webpackChunk_N_E||[]).push([[764],{843:function(e,t,n){n.d(t,{Z:function(){return u}});var r=n(4090),i={xmlns:"http://www.w3.org/2000/svg",width:24,height:24,viewBox:"0 0 24 24",fill:"none",stroke:"currentColor",strokeWidth:2,strokeLinecap:"round",strokeLinejoin:"round"};/**
 * @license lucide-react v0.358.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */let o=e=>e.replace(/([a-z0-9])([A-Z])/g,"$1-$2").toLowerCase(),u=(e,t)=>{let n=(0,r.forwardRef)((n,u)=>{let{color:s="currentColor",size:l=24,strokeWidth:a=2,absoluteStrokeWidth:c,className:d="",children:f,...h}=n;return(0,r.createElement)("svg",{ref:u,...i,width:l,height:l,stroke:s,strokeWidth:c?24*Number(a)/Number(l):a,className:["lucide","lucide-".concat(o(e)),d].join(" "),...h},[...t.map(e=>{let[t,n]=e;return(0,r.createElement)(t,n)}),...Array.isArray(f)?f:[f]])});return n.displayName="".concat(e),n}},2235:function(e,t,n){n.d(t,{Z:function(){return r}});/**
 * @license lucide-react v0.358.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */let r=(0,n(843).Z)("X",[["path",{d:"M18 6 6 18",key:"1bl5f8"}],["path",{d:"m6 6 12 12",key:"d8bk6v"}]])},4991:function(e,t,n){n.d(t,{M:function(){return r}});function r(e,t){let{checkForDefaultPrevented:n=!0}=arguments.length>2&&void 0!==arguments[2]?arguments[2]:{};return function(r){if(null==e||e(r),!1===n||!r.defaultPrevented)return null==t?void 0:t(r)}}},7533:function(e,t,n){n.d(t,{B:function(){return s}});var r=n(4090),i=n(4104),o=n(1266),u=n(9143);function s(e){let t=e+"CollectionProvider",[n,s]=(0,i.b)(t),[l,a]=n(t,{collectionRef:{current:null},itemMap:new Map}),c=e+"CollectionSlot",d=r.forwardRef((e,t)=>{let{scope:n,children:i}=e,s=a(c,n),l=(0,o.e)(t,s.collectionRef);return r.createElement(u.g7,{ref:l},i)}),f=e+"CollectionItemSlot",h="data-radix-collection-item";return[{Provider:e=>{let{scope:t,children:n}=e,i=r.useRef(null),o=r.useRef(new Map).current;return r.createElement(l,{scope:t,itemMap:o,collectionRef:i},n)},Slot:d,ItemSlot:r.forwardRef((e,t)=>{let{scope:n,children:i,...s}=e,l=r.useRef(null),c=(0,o.e)(t,l),d=a(f,n);return r.useEffect(()=>(d.itemMap.set(l,{ref:l,...s}),()=>void d.itemMap.delete(l))),r.createElement(u.g7,{[h]:"",ref:c},i)})},function(t){let n=a(e+"CollectionConsumer",t);return r.useCallback(()=>{let e=n.collectionRef.current;if(!e)return[];let t=Array.from(e.querySelectorAll("[".concat(h,"]")));return Array.from(n.itemMap.values()).sort((e,n)=>t.indexOf(e.ref.current)-t.indexOf(n.ref.current))},[n.collectionRef,n.itemMap])},s]}},4104:function(e,t,n){n.d(t,{b:function(){return o},k:function(){return i}});var r=n(4090);function i(e,t){let n=(0,r.createContext)(t);function i(e){let{children:t,...i}=e,o=(0,r.useMemo)(()=>i,Object.values(i));return(0,r.createElement)(n.Provider,{value:o},t)}return i.displayName=e+"Provider",[i,function(i){let o=(0,r.useContext)(n);if(o)return o;if(void 0!==t)return t;throw Error("`".concat(i,"` must be used within `").concat(e,"`"))}]}function o(e){let t=arguments.length>1&&void 0!==arguments[1]?arguments[1]:[],n=[],i=()=>{let t=n.map(e=>(0,r.createContext)(e));return function(n){let i=(null==n?void 0:n[e])||t;return(0,r.useMemo)(()=>({["__scope".concat(e)]:{...n,[e]:i}}),[n,i])}};return i.scopeName=e,[function(t,i){let o=(0,r.createContext)(i),u=n.length;function s(t){let{scope:n,children:i,...s}=t,l=(null==n?void 0:n[e][u])||o,a=(0,r.useMemo)(()=>s,Object.values(s));return(0,r.createElement)(l.Provider,{value:a},i)}return n=[...n,i],s.displayName=t+"Provider",[s,function(n,s){let l=(null==s?void 0:s[e][u])||o,a=(0,r.useContext)(l);if(a)return a;if(void 0!==i)return i;throw Error("`".concat(n,"` must be used within `").concat(t,"`"))}]},function(){for(var e=arguments.length,t=Array(e),n=0;n<e;n++)t[n]=arguments[n];let i=t[0];if(1===t.length)return i;let o=()=>{let e=t.map(e=>({useScope:e(),scopeName:e.scopeName}));return function(t){let n=e.reduce((e,n)=>{let{useScope:r,scopeName:i}=n,o=r(t)["__scope".concat(i)];return{...e,...o}},{});return(0,r.useMemo)(()=>({["__scope".concat(i.scopeName)]:n}),[n])}};return o.scopeName=i.scopeName,o}(i,...t)]}},1260:function(e,t,n){let r;n.d(t,{I0:function(){return y},XB:function(){return f},fC:function(){return m}});var i=n(2110),o=n(4090),u=n(4991),s=n(9586),l=n(1266),a=n(9830);let c="dismissableLayer.update",d=(0,o.createContext)({layers:new Set,layersWithOutsidePointerEventsDisabled:new Set,branches:new Set}),f=(0,o.forwardRef)((e,t)=>{var n;let{disableOutsidePointerEvents:f=!1,onEscapeKeyDown:h,onPointerDownOutside:m,onFocusOutside:y,onInteractOutside:w,onDismiss:E,...b}=e,g=(0,o.useContext)(d),[C,_]=(0,o.useState)(null),N=null!==(n=null==C?void 0:C.ownerDocument)&&void 0!==n?n:null==globalThis?void 0:globalThis.document,[,M]=(0,o.useState)({}),P=(0,l.e)(t,e=>_(e)),O=Array.from(g.layers),[k]=[...g.layersWithOutsidePointerEventsDisabled].slice(-1),R=O.indexOf(k),T=C?O.indexOf(C):-1,x=g.layersWithOutsidePointerEventsDisabled.size>0,S=T>=R,L=function(e){let t=arguments.length>1&&void 0!==arguments[1]?arguments[1]:null==globalThis?void 0:globalThis.document,n=(0,a.W)(e),r=(0,o.useRef)(!1),i=(0,o.useRef)(()=>{});return(0,o.useEffect)(()=>{let e=e=>{if(e.target&&!r.current){let r={originalEvent:e};function o(){p("dismissableLayer.pointerDownOutside",n,r,{discrete:!0})}"touch"===e.pointerType?(t.removeEventListener("click",i.current),i.current=o,t.addEventListener("click",i.current,{once:!0})):o()}else t.removeEventListener("click",i.current);r.current=!1},o=window.setTimeout(()=>{t.addEventListener("pointerdown",e)},0);return()=>{window.clearTimeout(o),t.removeEventListener("pointerdown",e),t.removeEventListener("click",i.current)}},[t,n]),{onPointerDownCapture:()=>r.current=!0}}(e=>{let t=e.target,n=[...g.branches].some(e=>e.contains(t));!S||n||(null==m||m(e),null==w||w(e),e.defaultPrevented||null==E||E())},N),W=function(e){let t=arguments.length>1&&void 0!==arguments[1]?arguments[1]:null==globalThis?void 0:globalThis.document,n=(0,a.W)(e),r=(0,o.useRef)(!1);return(0,o.useEffect)(()=>{let e=e=>{e.target&&!r.current&&p("dismissableLayer.focusOutside",n,{originalEvent:e},{discrete:!1})};return t.addEventListener("focusin",e),()=>t.removeEventListener("focusin",e)},[t,n]),{onFocusCapture:()=>r.current=!0,onBlurCapture:()=>r.current=!1}}(e=>{let t=e.target;[...g.branches].some(e=>e.contains(t))||(null==y||y(e),null==w||w(e),e.defaultPrevented||null==E||E())},N);return!function(e){let t=arguments.length>1&&void 0!==arguments[1]?arguments[1]:null==globalThis?void 0:globalThis.document,n=(0,a.W)(e);(0,o.useEffect)(()=>{let e=e=>{"Escape"===e.key&&n(e)};return t.addEventListener("keydown",e),()=>t.removeEventListener("keydown",e)},[n,t])}(e=>{T!==g.layers.size-1||(null==h||h(e),!e.defaultPrevented&&E&&(e.preventDefault(),E()))},N),(0,o.useEffect)(()=>{if(C)return f&&(0===g.layersWithOutsidePointerEventsDisabled.size&&(r=N.body.style.pointerEvents,N.body.style.pointerEvents="none"),g.layersWithOutsidePointerEventsDisabled.add(C)),g.layers.add(C),v(),()=>{f&&1===g.layersWithOutsidePointerEventsDisabled.size&&(N.body.style.pointerEvents=r)}},[C,N,f,g]),(0,o.useEffect)(()=>()=>{C&&(g.layers.delete(C),g.layersWithOutsidePointerEventsDisabled.delete(C),v())},[C,g]),(0,o.useEffect)(()=>{let e=()=>M({});return document.addEventListener(c,e),()=>document.removeEventListener(c,e)},[]),(0,o.createElement)(s.WV.div,(0,i.Z)({},b,{ref:P,style:{pointerEvents:x?S?"auto":"none":void 0,...e.style},onFocusCapture:(0,u.M)(e.onFocusCapture,W.onFocusCapture),onBlurCapture:(0,u.M)(e.onBlurCapture,W.onBlurCapture),onPointerDownCapture:(0,u.M)(e.onPointerDownCapture,L.onPointerDownCapture)}))}),h=(0,o.forwardRef)((e,t)=>{let n=(0,o.useContext)(d),r=(0,o.useRef)(null),u=(0,l.e)(t,r);return(0,o.useEffect)(()=>{let e=r.current;if(e)return n.branches.add(e),()=>{n.branches.delete(e)}},[n.branches]),(0,o.createElement)(s.WV.div,(0,i.Z)({},e,{ref:u}))});function v(){let e=new CustomEvent(c);document.dispatchEvent(e)}function p(e,t,n,r){let{discrete:i}=r,o=n.originalEvent.target,u=new CustomEvent(e,{bubbles:!1,cancelable:!0,detail:n});t&&o.addEventListener(e,t,{once:!0}),i?(0,s.jH)(o,u):o.dispatchEvent(u)}let m=f,y=h},7881:function(e,t,n){n.d(t,{h:function(){return s}});var r=n(2110),i=n(4090),o=n(9542),u=n(9586);let s=(0,i.forwardRef)((e,t)=>{var n;let{container:s=null==globalThis?void 0:null===(n=globalThis.document)||void 0===n?void 0:n.body,...l}=e;return s?o.createPortal((0,i.createElement)(u.WV.div,(0,r.Z)({},l,{ref:t})),s):null})},2642:function(e,t,n){n.d(t,{z:function(){return s}});var r=n(4090),i=n(9542),o=n(1266),u=n(2618);let s=e=>{let{present:t,children:n}=e,s=function(e){var t,n;let[o,s]=(0,r.useState)(),a=(0,r.useRef)({}),c=(0,r.useRef)(e),d=(0,r.useRef)("none"),[f,h]=(t=e?"mounted":"unmounted",n={mounted:{UNMOUNT:"unmounted",ANIMATION_OUT:"unmountSuspended"},unmountSuspended:{MOUNT:"mounted",ANIMATION_END:"unmounted"},unmounted:{MOUNT:"mounted"}},(0,r.useReducer)((e,t)=>{let r=n[e][t];return null!=r?r:e},t));return(0,r.useEffect)(()=>{let e=l(a.current);d.current="mounted"===f?e:"none"},[f]),(0,u.b)(()=>{let t=a.current,n=c.current;if(n!==e){let r=d.current,i=l(t);e?h("MOUNT"):"none"===i||(null==t?void 0:t.display)==="none"?h("UNMOUNT"):n&&r!==i?h("ANIMATION_OUT"):h("UNMOUNT"),c.current=e}},[e,h]),(0,u.b)(()=>{if(o){let e=e=>{let t=l(a.current).includes(e.animationName);e.target===o&&t&&(0,i.flushSync)(()=>h("ANIMATION_END"))},t=e=>{e.target===o&&(d.current=l(a.current))};return o.addEventListener("animationstart",t),o.addEventListener("animationcancel",e),o.addEventListener("animationend",e),()=>{o.removeEventListener("animationstart",t),o.removeEventListener("animationcancel",e),o.removeEventListener("animationend",e)}}h("ANIMATION_END")},[o,h]),{isPresent:["mounted","unmountSuspended"].includes(f),ref:(0,r.useCallback)(e=>{e&&(a.current=getComputedStyle(e)),s(e)},[])}}(t),a="function"==typeof n?n({present:s.isPresent}):r.Children.only(n),c=(0,o.e)(s.ref,a.ref);return"function"==typeof n||s.isPresent?(0,r.cloneElement)(a,{ref:c}):null};function l(e){return(null==e?void 0:e.animationName)||"none"}s.displayName="Presence"},9830:function(e,t,n){n.d(t,{W:function(){return i}});var r=n(4090);function i(e){let t=(0,r.useRef)(e);return(0,r.useEffect)(()=>{t.current=e}),(0,r.useMemo)(()=>function(){for(var e,n=arguments.length,r=Array(n),i=0;i<n;i++)r[i]=arguments[i];return null===(e=t.current)||void 0===e?void 0:e.call(t,...r)},[])}},9310:function(e,t,n){n.d(t,{T:function(){return o}});var r=n(4090),i=n(9830);function o(e){let{prop:t,defaultProp:n,onChange:o=()=>{}}=e,[u,s]=function(e){let{defaultProp:t,onChange:n}=e,o=(0,r.useState)(t),[u]=o,s=(0,r.useRef)(u),l=(0,i.W)(n);return(0,r.useEffect)(()=>{s.current!==u&&(l(u),s.current=u)},[u,s,l]),o}({defaultProp:n,onChange:o}),l=void 0!==t,a=l?t:u,c=(0,i.W)(o);return[a,(0,r.useCallback)(e=>{if(l){let n="function"==typeof e?e(t):e;n!==t&&c(n)}else s(e)},[l,t,s,c])]}},2618:function(e,t,n){n.d(t,{b:function(){return i}});var r=n(4090);let i=(null==globalThis?void 0:globalThis.document)?r.useLayoutEffect:()=>{}},1780:function(e,t,n){n.d(t,{T:function(){return u}});var r=n(2110),i=n(4090),o=n(9586);let u=(0,i.forwardRef)((e,t)=>(0,i.createElement)(o.WV.span,(0,r.Z)({},e,{ref:t,style:{position:"absolute",border:0,width:1,height:1,padding:0,margin:-1,overflow:"hidden",clip:"rect(0, 0, 0, 0)",whiteSpace:"nowrap",wordWrap:"normal",...e.style}})))},1793:function(e,t,n){n.d(t,{R:function(){return y},m:function(){return m}});var r,i,o,u,s,l=n(2731),a=n(8146),c=n(5577),d=n(4831),f=n(7920),h=n(5139),v=n(2041),p=n(326),m=(r=new WeakMap,i=new WeakMap,o=new WeakMap,u=new WeakMap,s=new WeakSet,class extends v.F{setOptions(e){this.options={...(0,l._)(this,i),...e},this.updateGcTime(this.options.gcTime)}get meta(){return this.options.meta}addObserver(e){(0,l._)(this,r).includes(e)||((0,l._)(this,r).push(e),this.clearGcTimeout(),(0,l._)(this,o).notify({type:"observerAdded",mutation:this,observer:e}))}removeObserver(e){(0,c._)(this,r,(0,l._)(this,r).filter(t=>t!==e)),this.scheduleGc(),(0,l._)(this,o).notify({type:"observerRemoved",mutation:this,observer:e})}optionalRemove(){(0,l._)(this,r).length||("pending"===this.state.status?this.scheduleGc():(0,l._)(this,o).remove(this))}continue(){var e,t;return null!==(t=null===(e=(0,l._)(this,u))||void 0===e?void 0:e.continue())&&void 0!==t?t:this.execute(this.state.variables)}async execute(e){var t,n,r,i,a,f,h,v,m,y,E,b,g,C,_,N,M,P,O,k;let R="pending"===this.state.status;try{if(!R){(0,d._)(this,s,w).call(this,{type:"pending",variables:e}),await (null===(m=(y=(0,l._)(this,o).config).onMutate)||void 0===m?void 0:m.call(y,e,this));let t=await (null===(E=(b=this.options).onMutate)||void 0===E?void 0:E.call(b,e));t!==this.state.context&&(0,d._)(this,s,w).call(this,{type:"pending",context:t,variables:e})}let g=await (()=>{var t;return(0,c._)(this,u,(0,p.Mz)({fn:()=>this.options.mutationFn?this.options.mutationFn(e):Promise.reject(Error("No mutationFn found")),onFail:(e,t)=>{(0,d._)(this,s,w).call(this,{type:"failed",failureCount:e,error:t})},onPause:()=>{(0,d._)(this,s,w).call(this,{type:"pause"})},onContinue:()=>{(0,d._)(this,s,w).call(this,{type:"continue"})},retry:null!==(t=this.options.retry)&&void 0!==t?t:0,retryDelay:this.options.retryDelay,networkMode:this.options.networkMode})),(0,l._)(this,u).promise})();return await (null===(t=(n=(0,l._)(this,o).config).onSuccess)||void 0===t?void 0:t.call(n,g,e,this.state.context,this)),await (null===(r=(i=this.options).onSuccess)||void 0===r?void 0:r.call(i,g,e,this.state.context)),await (null===(a=(f=(0,l._)(this,o).config).onSettled)||void 0===a?void 0:a.call(f,g,null,this.state.variables,this.state.context,this)),await (null===(h=(v=this.options).onSettled)||void 0===h?void 0:h.call(v,g,null,e,this.state.context)),(0,d._)(this,s,w).call(this,{type:"success",data:g}),g}catch(t){try{throw await (null===(g=(C=(0,l._)(this,o).config).onError)||void 0===g?void 0:g.call(C,t,e,this.state.context,this)),await (null===(_=(N=this.options).onError)||void 0===_?void 0:_.call(N,t,e,this.state.context)),await (null===(M=(P=(0,l._)(this,o).config).onSettled)||void 0===M?void 0:M.call(P,void 0,t,this.state.variables,this.state.context,this)),await (null===(O=(k=this.options).onSettled)||void 0===O?void 0:O.call(k,void 0,t,e,this.state.context)),t}finally{(0,d._)(this,s,w).call(this,{type:"error",error:t})}}}constructor(e){super(),(0,f._)(this,s),(0,a._)(this,r,{writable:!0,value:void 0}),(0,a._)(this,i,{writable:!0,value:void 0}),(0,a._)(this,o,{writable:!0,value:void 0}),(0,a._)(this,u,{writable:!0,value:void 0}),this.mutationId=e.mutationId,(0,c._)(this,i,e.defaultOptions),(0,c._)(this,o,e.mutationCache),(0,c._)(this,r,[]),this.state=e.state||y(),this.setOptions(e.options),this.scheduleGc()}});function y(){return{context:void 0,data:void 0,error:null,failureCount:0,failureReason:null,isPaused:!1,status:"idle",variables:void 0,submittedAt:0}}function w(e){this.state=(t=>{switch(e.type){case"failed":return{...t,failureCount:e.failureCount,failureReason:e.error};case"pause":return{...t,isPaused:!0};case"continue":return{...t,isPaused:!1};case"pending":return{...t,context:e.context,data:void 0,failureCount:0,failureReason:null,error:null,isPaused:!(0,p.Kw)(this.options.networkMode),status:"pending",variables:e.variables,submittedAt:Date.now()};case"success":return{...t,data:e.data,failureCount:0,failureReason:null,error:null,status:"success",isPaused:!1};case"error":return{...t,data:void 0,error:e.error,failureCount:t.failureCount+1,failureReason:e.error,isPaused:!1,status:"error"}}})(this.state),h.V.batch(()=>{(0,l._)(this,r).forEach(t=>{t.onMutationUpdate(e)}),(0,l._)(this,o).notify({mutation:this,type:"updated",action:e})})}}}]);