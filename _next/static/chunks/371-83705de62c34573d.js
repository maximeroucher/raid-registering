(self.webpackChunk_N_E=self.webpackChunk_N_E||[]).push([[371],{1971:function(e){e.exports={style:{fontFamily:"'__Outfit_85f290', '__Outfit_Fallback_85f290'",fontStyle:"normal"},className:"__className_85f290"}},2869:function(e,t,r){"use strict";r.d(t,{aU:function(){return G},x8:function(){return $},dk:function(){return J},zt:function(){return U},fC:function(){return z},Dx:function(){return B},l_:function(){return Y}});var n=r(2110),i=r(4090),a=r(9542),o=r(4991),s=r(1266),l=r(4104),u=r(9143),c=r(1260),d=r(7881),f=r(2642),h=r(9586),p=r(9830),m=r(9310),y=r(2618);let w=(0,i.forwardRef)((e,t)=>(0,i.createElement)(h.WV.span,(0,n.Z)({},e,{ref:t,style:{position:"absolute",border:0,width:1,height:1,padding:0,margin:-1,overflow:"hidden",clip:"rect(0, 0, 0, 0)",whiteSpace:"nowrap",wordWrap:"normal",...e.style}}))),g="ToastProvider",[E,_,b]=function(e){let t=e+"CollectionProvider",[r,n]=(0,l.b)(t),[a,o]=r(t,{collectionRef:{current:null},itemMap:new Map}),c=e+"CollectionSlot",d=i.forwardRef((e,t)=>{let{scope:r,children:n}=e,a=o(c,r),l=(0,s.e)(t,a.collectionRef);return i.createElement(u.g7,{ref:l},n)}),f=e+"CollectionItemSlot",h="data-radix-collection-item";return[{Provider:e=>{let{scope:t,children:r}=e,n=i.useRef(null),o=i.useRef(new Map).current;return i.createElement(a,{scope:t,itemMap:o,collectionRef:n},r)},Slot:d,ItemSlot:i.forwardRef((e,t)=>{let{scope:r,children:n,...a}=e,l=i.useRef(null),c=(0,s.e)(t,l),d=o(f,r);return i.useEffect(()=>(d.itemMap.set(l,{ref:l,...a}),()=>void d.itemMap.delete(l))),i.createElement(u.g7,{[h]:"",ref:c},n)})},function(t){let r=o(e+"CollectionConsumer",t);return i.useCallback(()=>{let e=r.collectionRef.current;if(!e)return[];let t=Array.from(e.querySelectorAll("[".concat(h,"]")));return Array.from(r.itemMap.values()).sort((e,r)=>t.indexOf(e.ref.current)-t.indexOf(r.ref.current))},[r.collectionRef,r.itemMap])},n]}("Toast"),[T,P]=(0,l.b)("Toast",[b]),[M,x]=T(g),C=e=>{let{__scopeToast:t,label:r="Notification",duration:n=5e3,swipeDirection:a="right",swipeThreshold:o=50,children:s}=e,[l,u]=(0,i.useState)(null),[c,d]=(0,i.useState)(0),f=(0,i.useRef)(!1),h=(0,i.useRef)(!1);return(0,i.createElement)(E.Provider,{scope:t},(0,i.createElement)(M,{scope:t,label:r,duration:n,swipeDirection:a,swipeThreshold:o,toastCount:c,viewport:l,onViewportChange:u,onToastAdd:(0,i.useCallback)(()=>d(e=>e+1),[]),onToastRemove:(0,i.useCallback)(()=>d(e=>e-1),[]),isFocusedToastEscapeKeyDownRef:f,isClosePausedRef:h},s))};C.propTypes={label:e=>e.label&&"string"==typeof e.label&&!e.label.trim()?Error("Invalid prop `label` supplied to `".concat(g,"`. Expected non-empty `string`.")):null};let R=["F8"],D="toast.viewportPause",k="toast.viewportResume",S=(0,i.forwardRef)((e,t)=>{let{__scopeToast:r,hotkey:a=R,label:o="Notifications ({hotkey})",...l}=e,u=x("ToastViewport",r),d=_(r),f=(0,i.useRef)(null),p=(0,i.useRef)(null),m=(0,i.useRef)(null),y=(0,i.useRef)(null),w=(0,s.e)(t,y,u.onViewportChange),g=a.join("+").replace(/Key/g,"").replace(/Digit/g,""),b=u.toastCount>0;(0,i.useEffect)(()=>{let e=e=>{var t;a.every(t=>e[t]||e.code===t)&&(null===(t=y.current)||void 0===t||t.focus())};return document.addEventListener("keydown",e),()=>document.removeEventListener("keydown",e)},[a]),(0,i.useEffect)(()=>{let e=f.current,t=y.current;if(b&&e&&t){let r=()=>{if(!u.isClosePausedRef.current){let e=new CustomEvent(D);t.dispatchEvent(e),u.isClosePausedRef.current=!0}},n=()=>{if(u.isClosePausedRef.current){let e=new CustomEvent(k);t.dispatchEvent(e),u.isClosePausedRef.current=!1}},i=t=>{e.contains(t.relatedTarget)||n()},a=()=>{e.contains(document.activeElement)||n()};return e.addEventListener("focusin",r),e.addEventListener("focusout",i),e.addEventListener("pointermove",r),e.addEventListener("pointerleave",a),window.addEventListener("blur",r),window.addEventListener("focus",n),()=>{e.removeEventListener("focusin",r),e.removeEventListener("focusout",i),e.removeEventListener("pointermove",r),e.removeEventListener("pointerleave",a),window.removeEventListener("blur",r),window.removeEventListener("focus",n)}}},[b,u.isClosePausedRef]);let T=(0,i.useCallback)(e=>{let{tabbingDirection:t}=e,r=d().map(e=>{let r=e.ref.current,n=[r,...function(e){let t=[],r=document.createTreeWalker(e,NodeFilter.SHOW_ELEMENT,{acceptNode:e=>{let t="INPUT"===e.tagName&&"hidden"===e.type;return e.disabled||e.hidden||t?NodeFilter.FILTER_SKIP:e.tabIndex>=0?NodeFilter.FILTER_ACCEPT:NodeFilter.FILTER_SKIP}});for(;r.nextNode();)t.push(r.currentNode);return t}(r)];return"forwards"===t?n:n.reverse()});return("forwards"===t?r.reverse():r).flat()},[d]);return(0,i.useEffect)(()=>{let e=y.current;if(e){let t=t=>{let r=t.altKey||t.ctrlKey||t.metaKey;if("Tab"===t.key&&!r){var n,i,a;let r=document.activeElement,o=t.shiftKey;if(t.target===e&&o){null===(n=p.current)||void 0===n||n.focus();return}let s=T({tabbingDirection:o?"backwards":"forwards"}),l=s.findIndex(e=>e===r);X(s.slice(l+1))?t.preventDefault():o?null===(i=p.current)||void 0===i||i.focus():null===(a=m.current)||void 0===a||a.focus()}};return e.addEventListener("keydown",t),()=>e.removeEventListener("keydown",t)}},[d,T]),(0,i.createElement)(c.I0,{ref:f,role:"region","aria-label":o.replace("{hotkey}",g),tabIndex:-1,style:{pointerEvents:b?void 0:"none"}},b&&(0,i.createElement)(F,{ref:p,onFocusFromOutsideViewport:()=>{X(T({tabbingDirection:"forwards"}))}}),(0,i.createElement)(E.Slot,{scope:r},(0,i.createElement)(h.WV.ol,(0,n.Z)({tabIndex:-1},l,{ref:w}))),b&&(0,i.createElement)(F,{ref:m,onFocusFromOutsideViewport:()=>{X(T({tabbingDirection:"backwards"}))}}))}),F=(0,i.forwardRef)((e,t)=>{let{__scopeToast:r,onFocusFromOutsideViewport:a,...o}=e,s=x("ToastFocusProxy",r);return(0,i.createElement)(w,(0,n.Z)({"aria-hidden":!0,tabIndex:0},o,{ref:t,style:{position:"fixed"},onFocus:e=>{var t;let r=e.relatedTarget;null!==(t=s.viewport)&&void 0!==t&&t.contains(r)||a()}}))}),O="Toast",A=(0,i.forwardRef)((e,t)=>{let{forceMount:r,open:a,defaultOpen:s,onOpenChange:l,...u}=e,[c=!0,d]=(0,m.T)({prop:a,defaultProp:s,onChange:l});return(0,i.createElement)(f.z,{present:r||c},(0,i.createElement)(W,(0,n.Z)({open:c},u,{ref:t,onClose:()=>d(!1),onPause:(0,p.W)(e.onPause),onResume:(0,p.W)(e.onResume),onSwipeStart:(0,o.M)(e.onSwipeStart,e=>{e.currentTarget.setAttribute("data-swipe","start")}),onSwipeMove:(0,o.M)(e.onSwipeMove,e=>{let{x:t,y:r}=e.detail.delta;e.currentTarget.setAttribute("data-swipe","move"),e.currentTarget.style.setProperty("--radix-toast-swipe-move-x","".concat(t,"px")),e.currentTarget.style.setProperty("--radix-toast-swipe-move-y","".concat(r,"px"))}),onSwipeCancel:(0,o.M)(e.onSwipeCancel,e=>{e.currentTarget.setAttribute("data-swipe","cancel"),e.currentTarget.style.removeProperty("--radix-toast-swipe-move-x"),e.currentTarget.style.removeProperty("--radix-toast-swipe-move-y"),e.currentTarget.style.removeProperty("--radix-toast-swipe-end-x"),e.currentTarget.style.removeProperty("--radix-toast-swipe-end-y")}),onSwipeEnd:(0,o.M)(e.onSwipeEnd,e=>{let{x:t,y:r}=e.detail.delta;e.currentTarget.setAttribute("data-swipe","end"),e.currentTarget.style.removeProperty("--radix-toast-swipe-move-x"),e.currentTarget.style.removeProperty("--radix-toast-swipe-move-y"),e.currentTarget.style.setProperty("--radix-toast-swipe-end-x","".concat(t,"px")),e.currentTarget.style.setProperty("--radix-toast-swipe-end-y","".concat(r,"px")),d(!1)})})))}),[Q,q]=T(O,{onClose(){}}),W=(0,i.forwardRef)((e,t)=>{let{__scopeToast:r,type:l="foreground",duration:u,open:d,onClose:f,onEscapeKeyDown:m,onPause:y,onResume:w,onSwipeStart:g,onSwipeMove:_,onSwipeCancel:b,onSwipeEnd:T,...P}=e,M=x(O,r),[C,R]=(0,i.useState)(null),S=(0,s.e)(t,e=>R(e)),F=(0,i.useRef)(null),A=(0,i.useRef)(null),q=u||M.duration,W=(0,i.useRef)(0),K=(0,i.useRef)(q),V=(0,i.useRef)(0),{onToastAdd:I,onToastRemove:N}=M,Z=(0,p.W)(()=>{var e;(null==C?void 0:C.contains(document.activeElement))&&(null===(e=M.viewport)||void 0===e||e.focus()),f()}),X=(0,i.useCallback)(e=>{e&&e!==1/0&&(window.clearTimeout(V.current),W.current=new Date().getTime(),V.current=window.setTimeout(Z,e))},[Z]);(0,i.useEffect)(()=>{let e=M.viewport;if(e){let t=()=>{X(K.current),null==w||w()},r=()=>{let e=new Date().getTime()-W.current;K.current=K.current-e,window.clearTimeout(V.current),null==y||y()};return e.addEventListener(D,r),e.addEventListener(k,t),()=>{e.removeEventListener(D,r),e.removeEventListener(k,t)}}},[M.viewport,q,y,w,X]),(0,i.useEffect)(()=>{d&&!M.isClosePausedRef.current&&X(q)},[d,q,M.isClosePausedRef,X]),(0,i.useEffect)(()=>(I(),()=>N()),[I,N]);let U=(0,i.useMemo)(()=>C?function e(t){let r=[];return Array.from(t.childNodes).forEach(t=>{if(t.nodeType===t.TEXT_NODE&&t.textContent&&r.push(t.textContent),t.nodeType===t.ELEMENT_NODE){let n=t.ariaHidden||t.hidden||"none"===t.style.display,i=""===t.dataset.radixToastAnnounceExclude;if(!n){if(i){let e=t.dataset.radixToastAnnounceAlt;e&&r.push(e)}else r.push(...e(t))}}}),r}(C):null,[C]);return M.viewport?(0,i.createElement)(i.Fragment,null,U&&(0,i.createElement)(L,{__scopeToast:r,role:"status","aria-live":"foreground"===l?"assertive":"polite","aria-atomic":!0},U),(0,i.createElement)(Q,{scope:r,onClose:Z},(0,a.createPortal)((0,i.createElement)(E.ItemSlot,{scope:r},(0,i.createElement)(c.fC,{asChild:!0,onEscapeKeyDown:(0,o.M)(m,()=>{M.isFocusedToastEscapeKeyDownRef.current||Z(),M.isFocusedToastEscapeKeyDownRef.current=!1})},(0,i.createElement)(h.WV.li,(0,n.Z)({role:"status","aria-live":"off","aria-atomic":!0,tabIndex:0,"data-state":d?"open":"closed","data-swipe-direction":M.swipeDirection},P,{ref:S,style:{userSelect:"none",touchAction:"none",...e.style},onKeyDown:(0,o.M)(e.onKeyDown,e=>{"Escape"!==e.key||(null==m||m(e.nativeEvent),e.nativeEvent.defaultPrevented||(M.isFocusedToastEscapeKeyDownRef.current=!0,Z()))}),onPointerDown:(0,o.M)(e.onPointerDown,e=>{0===e.button&&(F.current={x:e.clientX,y:e.clientY})}),onPointerMove:(0,o.M)(e.onPointerMove,e=>{if(!F.current)return;let t=e.clientX-F.current.x,r=e.clientY-F.current.y,n=!!A.current,i=["left","right"].includes(M.swipeDirection),a=["left","up"].includes(M.swipeDirection)?Math.min:Math.max,o=i?a(0,t):0,s=i?0:a(0,r),l="touch"===e.pointerType?10:2,u={x:o,y:s},c={originalEvent:e,delta:u};n?(A.current=u,H("toast.swipeMove",_,c,{discrete:!1})):j(u,M.swipeDirection,l)?(A.current=u,H("toast.swipeStart",g,c,{discrete:!1}),e.target.setPointerCapture(e.pointerId)):(Math.abs(t)>l||Math.abs(r)>l)&&(F.current=null)}),onPointerUp:(0,o.M)(e.onPointerUp,e=>{let t=A.current,r=e.target;if(r.hasPointerCapture(e.pointerId)&&r.releasePointerCapture(e.pointerId),A.current=null,F.current=null,t){let r=e.currentTarget,n={originalEvent:e,delta:t};j(t,M.swipeDirection,M.swipeThreshold)?H("toast.swipeEnd",T,n,{discrete:!0}):H("toast.swipeCancel",b,n,{discrete:!0}),r.addEventListener("click",e=>e.preventDefault(),{once:!0})}})})))),M.viewport))):null});W.propTypes={type:e=>e.type&&!["foreground","background"].includes(e.type)?Error("Invalid prop `type` supplied to `".concat(O,"`. Expected `foreground | background`.")):null};let L=e=>{let{__scopeToast:t,children:r,...n}=e,a=x(O,t),[o,s]=(0,i.useState)(!1),[l,u]=(0,i.useState)(!1);return function(){let e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:()=>{},t=(0,p.W)(e);(0,y.b)(()=>{let e=0,r=0;return e=window.requestAnimationFrame(()=>r=window.requestAnimationFrame(t)),()=>{window.cancelAnimationFrame(e),window.cancelAnimationFrame(r)}},[t])}(()=>s(!0)),(0,i.useEffect)(()=>{let e=window.setTimeout(()=>u(!0),1e3);return()=>window.clearTimeout(e)},[]),l?null:(0,i.createElement)(d.h,{asChild:!0},(0,i.createElement)(w,n,o&&(0,i.createElement)(i.Fragment,null,a.label," ",r)))},K=(0,i.forwardRef)((e,t)=>{let{__scopeToast:r,...a}=e;return(0,i.createElement)(h.WV.div,(0,n.Z)({},a,{ref:t}))}),V=(0,i.forwardRef)((e,t)=>{let{__scopeToast:r,...a}=e;return(0,i.createElement)(h.WV.div,(0,n.Z)({},a,{ref:t}))}),I=(0,i.forwardRef)((e,t)=>{let{altText:r,...a}=e;return r?(0,i.createElement)(Z,{altText:r,asChild:!0},(0,i.createElement)(N,(0,n.Z)({},a,{ref:t}))):null});I.propTypes={altText:e=>e.altText?null:Error("Missing prop `altText` expected on `".concat("ToastAction","`"))};let N=(0,i.forwardRef)((e,t)=>{let{__scopeToast:r,...a}=e,s=q("ToastClose",r);return(0,i.createElement)(Z,{asChild:!0},(0,i.createElement)(h.WV.button,(0,n.Z)({type:"button"},a,{ref:t,onClick:(0,o.M)(e.onClick,s.onClose)})))}),Z=(0,i.forwardRef)((e,t)=>{let{__scopeToast:r,altText:a,...o}=e;return(0,i.createElement)(h.WV.div,(0,n.Z)({"data-radix-toast-announce-exclude":"","data-radix-toast-announce-alt":a||void 0},o,{ref:t}))});function H(e,t,r,n){let{discrete:i}=n,a=r.originalEvent.currentTarget,o=new CustomEvent(e,{bubbles:!0,cancelable:!0,detail:r});t&&a.addEventListener(e,t,{once:!0}),i?(0,h.jH)(a,o):a.dispatchEvent(o)}let j=function(e,t){let r=arguments.length>2&&void 0!==arguments[2]?arguments[2]:0,n=Math.abs(e.x),i=Math.abs(e.y),a=n>i;return"left"===t||"right"===t?a&&n>r:!a&&i>r};function X(e){let t=document.activeElement;return e.some(e=>e===t||(e.focus(),document.activeElement!==t))}let U=C,Y=S,z=A,B=K,J=V,G=I,$=N},3582:function(e,t,r){"use strict";r.d(t,{t:function(){return d}});var n,i=r(2731),a=r(8146),o=r(5577),s=r(6063),l=r(4668),u=r(5139),c=r(4614),d=(n=new WeakMap,class extends c.l{build(e,t,r){var n;let i=t.queryKey,a=null!==(n=t.queryHash)&&void 0!==n?n:(0,s.Rm)(i,t),o=this.get(a);return o||(o=new l.A({cache:this,queryKey:i,queryHash:a,options:e.defaultQueryOptions(t),state:r,defaultOptions:e.getQueryDefaults(i)}),this.add(o)),o}add(e){(0,i._)(this,n).has(e.queryHash)||((0,i._)(this,n).set(e.queryHash,e),this.notify({type:"added",query:e}))}remove(e){let t=(0,i._)(this,n).get(e.queryHash);t&&(e.destroy(),t===e&&(0,i._)(this,n).delete(e.queryHash),this.notify({type:"removed",query:e}))}clear(){u.V.batch(()=>{this.getAll().forEach(e=>{this.remove(e)})})}get(e){return(0,i._)(this,n).get(e)}getAll(){return[...(0,i._)(this,n).values()]}find(e){let t={exact:!0,...e};return this.getAll().find(e=>(0,s._x)(t,e))}findAll(){let e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:{},t=this.getAll();return Object.keys(e).length>0?t.filter(t=>(0,s._x)(e,t)):t}notify(e){u.V.batch(()=>{this.listeners.forEach(t=>{t(e)})})}onFocus(){u.V.batch(()=>{this.getAll().forEach(e=>{e.onFocus()})})}onOnline(){u.V.batch(()=>{this.getAll().forEach(e=>{e.onOnline()})})}constructor(e={}){super(),(0,a._)(this,n,{writable:!0,value:void 0}),this.config=e,(0,o._)(this,n,new Map)}})},5867:function(e,t,r){"use strict";r.d(t,{S:function(){return D}});var n,i,a,o,s,l,u,c,d,f,h,p=r(2731),m=r(8146),y=r(5577),w=r(7354);function g(e,t){var r=(0,w.J)(e,t,"update");return function(e,t){if(t.set){if(!t.get)throw TypeError("attempted to read set only private field");return"__destrWrapper"in t||(t.__destrWrapper={set value(v){t.set.call(e,v)},get value(){return t.get.call(e)}}),t.__destrWrapper}if(!t.writable)throw TypeError("attempted to set read only private field");return t}(e,r)}var E=r(6063),_=r(3582),b=r(5139),T=r(1793),P=r(4614),M=(n=new WeakMap,i=new WeakMap,a=new WeakMap,class extends P.l{build(e,t,r){let n=new T.m({mutationCache:this,mutationId:++g(this,i).value,options:e.defaultMutationOptions(t),state:r});return this.add(n),n}add(e){(0,p._)(this,n).push(e),this.notify({type:"added",mutation:e})}remove(e){(0,y._)(this,n,(0,p._)(this,n).filter(t=>t!==e)),this.notify({type:"removed",mutation:e})}clear(){b.V.batch(()=>{(0,p._)(this,n).forEach(e=>{this.remove(e)})})}getAll(){return(0,p._)(this,n)}find(e){let t={exact:!0,...e};return(0,p._)(this,n).find(e=>(0,E.X7)(t,e))}findAll(){let e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:{};return(0,p._)(this,n).filter(t=>(0,E.X7)(e,t))}notify(e){b.V.batch(()=>{this.listeners.forEach(t=>{t(e)})})}resumePausedMutations(){var e;return(0,y._)(this,a,(null!==(e=(0,p._)(this,a))&&void 0!==e?e:Promise.resolve()).then(()=>{let e=(0,p._)(this,n).filter(e=>e.state.isPaused);return b.V.batch(()=>e.reduce((e,t)=>e.then(()=>t.continue().catch(E.ZT)),Promise.resolve()))}).then(()=>{(0,y._)(this,a,void 0)})),(0,p._)(this,a)}constructor(e={}){super(),(0,m._)(this,n,{writable:!0,value:void 0}),(0,m._)(this,i,{writable:!0,value:void 0}),(0,m._)(this,a,{writable:!0,value:void 0}),this.config=e,(0,y._)(this,n,[]),(0,y._)(this,i,0)}}),x=r(9555),C=r(7211);function R(e,t){let{pages:r,pageParams:n}=t,i=r.length-1;return e.getNextPageParam(r[i],r,n[i],n)}var D=(o=new WeakMap,s=new WeakMap,l=new WeakMap,u=new WeakMap,c=new WeakMap,d=new WeakMap,f=new WeakMap,h=new WeakMap,class{mount(){g(this,d).value++,1===(0,p._)(this,d)&&((0,y._)(this,f,x.j.subscribe(async e=>{e&&(await this.resumePausedMutations(),(0,p._)(this,o).onFocus())})),(0,y._)(this,h,C.N.subscribe(async e=>{e&&(await this.resumePausedMutations(),(0,p._)(this,o).onOnline())})))}unmount(){var e,t;g(this,d).value--,0===(0,p._)(this,d)&&(null===(e=(0,p._)(this,f))||void 0===e||e.call(this),(0,y._)(this,f,void 0),null===(t=(0,p._)(this,h))||void 0===t||t.call(this),(0,y._)(this,h,void 0))}isFetching(e){return(0,p._)(this,o).findAll({...e,fetchStatus:"fetching"}).length}isMutating(e){return(0,p._)(this,s).findAll({...e,status:"pending"}).length}getQueryData(e){var t;let r=this.defaultQueryOptions({queryKey:e});return null===(t=(0,p._)(this,o).get(r.queryHash))||void 0===t?void 0:t.state.data}ensureQueryData(e){let t=this.getQueryData(e.queryKey);if(void 0===t)return this.fetchQuery(e);{let r=this.defaultQueryOptions(e),n=(0,p._)(this,o).build(this,r);return e.revalidateIfStale&&n.isStaleByTime(r.staleTime)&&this.prefetchQuery(r),Promise.resolve(t)}}getQueriesData(e){return this.getQueryCache().findAll(e).map(e=>{let{queryKey:t,state:r}=e;return[t,r.data]})}setQueryData(e,t,r){let n=this.defaultQueryOptions({queryKey:e}),i=(0,p._)(this,o).get(n.queryHash),a=null==i?void 0:i.state.data,s=(0,E.SE)(t,a);if(void 0!==s)return(0,p._)(this,o).build(this,n).setData(s,{...r,manual:!0})}setQueriesData(e,t,r){return b.V.batch(()=>this.getQueryCache().findAll(e).map(e=>{let{queryKey:n}=e;return[n,this.setQueryData(n,t,r)]}))}getQueryState(e){var t;let r=this.defaultQueryOptions({queryKey:e});return null===(t=(0,p._)(this,o).get(r.queryHash))||void 0===t?void 0:t.state}removeQueries(e){let t=(0,p._)(this,o);b.V.batch(()=>{t.findAll(e).forEach(e=>{t.remove(e)})})}resetQueries(e,t){let r=(0,p._)(this,o),n={type:"active",...e};return b.V.batch(()=>(r.findAll(e).forEach(e=>{e.reset()}),this.refetchQueries(n,t)))}cancelQueries(){let e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:{},t=arguments.length>1&&void 0!==arguments[1]?arguments[1]:{},r={revert:!0,...t};return Promise.all(b.V.batch(()=>(0,p._)(this,o).findAll(e).map(e=>e.cancel(r)))).then(E.ZT).catch(E.ZT)}invalidateQueries(){let e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:{},t=arguments.length>1&&void 0!==arguments[1]?arguments[1]:{};return b.V.batch(()=>{var r,n;if((0,p._)(this,o).findAll(e).forEach(e=>{e.invalidate()}),"none"===e.refetchType)return Promise.resolve();let i={...e,type:null!==(n=null!==(r=e.refetchType)&&void 0!==r?r:e.type)&&void 0!==n?n:"active"};return this.refetchQueries(i,t)})}refetchQueries(){var e;let t=arguments.length>0&&void 0!==arguments[0]?arguments[0]:{},r=arguments.length>1?arguments[1]:void 0,n={...r,cancelRefetch:null===(e=null==r?void 0:r.cancelRefetch)||void 0===e||e};return Promise.all(b.V.batch(()=>(0,p._)(this,o).findAll(t).filter(e=>!e.isDisabled()).map(e=>{let t=e.fetch(void 0,n);return n.throwOnError||(t=t.catch(E.ZT)),"paused"===e.state.fetchStatus?Promise.resolve():t}))).then(E.ZT)}fetchQuery(e){let t=this.defaultQueryOptions(e);void 0===t.retry&&(t.retry=!1);let r=(0,p._)(this,o).build(this,t);return r.isStaleByTime(t.staleTime)?r.fetch(t):Promise.resolve(r.state.data)}prefetchQuery(e){return this.fetchQuery(e).then(E.ZT).catch(E.ZT)}fetchInfiniteQuery(e){var t;return e.behavior=(t=e.pages,{onFetch:(e,r)=>{let n=async()=>{var r,n,i,a,o,s;let l;let u=e.options,c=null===(i=e.fetchOptions)||void 0===i?void 0:null===(n=i.meta)||void 0===n?void 0:null===(r=n.fetchMore)||void 0===r?void 0:r.direction,d=(null===(a=e.state.data)||void 0===a?void 0:a.pages)||[],f=(null===(o=e.state.data)||void 0===o?void 0:o.pageParams)||[],h=!1,p=t=>{Object.defineProperty(t,"signal",{enumerable:!0,get:()=>(e.signal.aborted?h=!0:e.signal.addEventListener("abort",()=>{h=!0}),e.signal)})},m=e.options.queryFn&&e.options.queryFn!==E.CN?e.options.queryFn:()=>Promise.reject(Error("Missing queryFn: '".concat(e.options.queryHash,"'"))),y=async(t,r,n)=>{if(h)return Promise.reject();if(null==r&&t.pages.length)return Promise.resolve(t);let i={queryKey:e.queryKey,pageParam:r,direction:n?"backward":"forward",meta:e.options.meta};p(i);let a=await m(i),{maxPages:o}=e.options,s=n?E.Ht:E.VX;return{pages:s(t.pages,a,o),pageParams:s(t.pageParams,r,o)}};if(c&&d.length){let e="backward"===c,t={pages:d,pageParams:f},r=(e?function(e,t){var r;let{pages:n,pageParams:i}=t;return null===(r=e.getPreviousPageParam)||void 0===r?void 0:r.call(e,n[0],n,i[0],i)}:R)(u,t);l=await y(t,r,e)}else{l=await y({pages:[],pageParams:[]},null!==(s=f[0])&&void 0!==s?s:u.initialPageParam);let e=null!=t?t:d.length;for(let t=1;t<e;t++){let e=R(u,l);l=await y(l,e)}}return l};e.options.persister?e.fetchFn=()=>{var t,i;return null===(t=(i=e.options).persister)||void 0===t?void 0:t.call(i,n,{queryKey:e.queryKey,meta:e.options.meta,signal:e.signal},r)}:e.fetchFn=n}}),this.fetchQuery(e)}prefetchInfiniteQuery(e){return this.fetchInfiniteQuery(e).then(E.ZT).catch(E.ZT)}resumePausedMutations(){return C.N.isOnline()?(0,p._)(this,s).resumePausedMutations():Promise.resolve()}getQueryCache(){return(0,p._)(this,o)}getMutationCache(){return(0,p._)(this,s)}getDefaultOptions(){return(0,p._)(this,l)}setDefaultOptions(e){(0,y._)(this,l,e)}setQueryDefaults(e,t){(0,p._)(this,u).set((0,E.Ym)(e),{queryKey:e,defaultOptions:t})}getQueryDefaults(e){let t=[...(0,p._)(this,u).values()],r={};return t.forEach(t=>{(0,E.to)(e,t.queryKey)&&(r={...r,...t.defaultOptions})}),r}setMutationDefaults(e,t){(0,p._)(this,c).set((0,E.Ym)(e),{mutationKey:e,defaultOptions:t})}getMutationDefaults(e){let t=[...(0,p._)(this,c).values()],r={};return t.forEach(t=>{(0,E.to)(e,t.mutationKey)&&(r={...r,...t.defaultOptions})}),r}defaultQueryOptions(e){if(e._defaulted)return e;let t={...(0,p._)(this,l).queries,...this.getQueryDefaults(e.queryKey),...e,_defaulted:!0};return t.queryHash||(t.queryHash=(0,E.Rm)(t.queryKey,t)),void 0===t.refetchOnReconnect&&(t.refetchOnReconnect="always"!==t.networkMode),void 0===t.throwOnError&&(t.throwOnError=!!t.suspense),!t.networkMode&&t.persister&&(t.networkMode="offlineFirst"),!0!==t.enabled&&t.queryFn===E.CN&&(t.enabled=!1),t}defaultMutationOptions(e){return(null==e?void 0:e._defaulted)?e:{...(0,p._)(this,l).mutations,...(null==e?void 0:e.mutationKey)&&this.getMutationDefaults(e.mutationKey),...e,_defaulted:!0}}clear(){(0,p._)(this,o).clear(),(0,p._)(this,s).clear()}constructor(e={}){(0,m._)(this,o,{writable:!0,value:void 0}),(0,m._)(this,s,{writable:!0,value:void 0}),(0,m._)(this,l,{writable:!0,value:void 0}),(0,m._)(this,u,{writable:!0,value:void 0}),(0,m._)(this,c,{writable:!0,value:void 0}),(0,m._)(this,d,{writable:!0,value:void 0}),(0,m._)(this,f,{writable:!0,value:void 0}),(0,m._)(this,h,{writable:!0,value:void 0}),(0,y._)(this,o,e.queryCache||new _.t),(0,y._)(this,s,e.mutationCache||new M),(0,y._)(this,l,e.defaultOptions||{}),(0,y._)(this,u,new Map),(0,y._)(this,c,new Map),(0,y._)(this,d,0)}})}}]);