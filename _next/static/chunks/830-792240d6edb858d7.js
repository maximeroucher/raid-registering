(self.webpackChunk_N_E=self.webpackChunk_N_E||[]).push([[830],{1971:function(e){e.exports={style:{fontFamily:"'__Outfit_85f290', '__Outfit_Fallback_85f290'",fontStyle:"normal"},className:"__className_85f290"}},6736:function(e,t,r){"use strict";r.d(t,{Dx:function(){return U},aU:function(){return Y},dk:function(){return z},fC:function(){return G},l_:function(){return X},x8:function(){return B},zt:function(){return $}});var n=r(2110),s=r(2265),a=r(4887),i=r(4991),o=r(1266),u=r(7533),l=r(4104),c=r(1260),d=r(7881),h=r(2642),f=r(9586),m=r(9830),p=r(9310),y=r(2618),v=r(1780);let w="ToastProvider",[g,b,E]=(0,u.B)("Toast"),[C,T]=(0,l.b)("Toast",[E]),[x,P]=C(w),S=e=>{let{__scopeToast:t,label:r="Notification",duration:n=5e3,swipeDirection:a="right",swipeThreshold:i=50,children:o}=e,[u,l]=(0,s.useState)(null),[c,d]=(0,s.useState)(0),h=(0,s.useRef)(!1),f=(0,s.useRef)(!1);return(0,s.createElement)(g.Provider,{scope:t},(0,s.createElement)(x,{scope:t,label:r,duration:n,swipeDirection:a,swipeThreshold:i,toastCount:c,viewport:u,onViewportChange:l,onToastAdd:(0,s.useCallback)(()=>d(e=>e+1),[]),onToastRemove:(0,s.useCallback)(()=>d(e=>e-1),[]),isFocusedToastEscapeKeyDownRef:h,isClosePausedRef:f},o))};S.propTypes={label:e=>e.label&&"string"==typeof e.label&&!e.label.trim()?Error(`Invalid prop \`label\` supplied to \`${w}\`. Expected non-empty \`string\`.`):null};let M=["F8"],O="toast.viewportPause",q="toast.viewportResume",D=(0,s.forwardRef)((e,t)=>{let{__scopeToast:r,hotkey:a=M,label:i="Notifications ({hotkey})",...u}=e,l=P("ToastViewport",r),d=b(r),h=(0,s.useRef)(null),m=(0,s.useRef)(null),p=(0,s.useRef)(null),y=(0,s.useRef)(null),v=(0,o.e)(t,y,l.onViewportChange),w=a.join("+").replace(/Key/g,"").replace(/Digit/g,""),E=l.toastCount>0;(0,s.useEffect)(()=>{let e=e=>{var t;a.every(t=>e[t]||e.code===t)&&(null===(t=y.current)||void 0===t||t.focus())};return document.addEventListener("keydown",e),()=>document.removeEventListener("keydown",e)},[a]),(0,s.useEffect)(()=>{let e=h.current,t=y.current;if(E&&e&&t){let r=()=>{if(!l.isClosePausedRef.current){let e=new CustomEvent(O);t.dispatchEvent(e),l.isClosePausedRef.current=!0}},n=()=>{if(l.isClosePausedRef.current){let e=new CustomEvent(q);t.dispatchEvent(e),l.isClosePausedRef.current=!1}},s=t=>{e.contains(t.relatedTarget)||n()},a=()=>{e.contains(document.activeElement)||n()};return e.addEventListener("focusin",r),e.addEventListener("focusout",s),e.addEventListener("pointermove",r),e.addEventListener("pointerleave",a),window.addEventListener("blur",r),window.addEventListener("focus",n),()=>{e.removeEventListener("focusin",r),e.removeEventListener("focusout",s),e.removeEventListener("pointermove",r),e.removeEventListener("pointerleave",a),window.removeEventListener("blur",r),window.removeEventListener("focus",n)}}},[E,l.isClosePausedRef]);let C=(0,s.useCallback)(({tabbingDirection:e})=>{let t=d().map(t=>{let r=t.ref.current,n=[r,...function(e){let t=[],r=document.createTreeWalker(e,NodeFilter.SHOW_ELEMENT,{acceptNode:e=>{let t="INPUT"===e.tagName&&"hidden"===e.type;return e.disabled||e.hidden||t?NodeFilter.FILTER_SKIP:e.tabIndex>=0?NodeFilter.FILTER_ACCEPT:NodeFilter.FILTER_SKIP}});for(;r.nextNode();)t.push(r.currentNode);return t}(r)];return"forwards"===e?n:n.reverse()});return("forwards"===e?t.reverse():t).flat()},[d]);return(0,s.useEffect)(()=>{let e=y.current;if(e){let t=t=>{let r=t.altKey||t.ctrlKey||t.metaKey;if("Tab"===t.key&&!r){var n,s,a;let r=document.activeElement,i=t.shiftKey;if(t.target===e&&i){null===(n=m.current)||void 0===n||n.focus();return}let o=C({tabbingDirection:i?"backwards":"forwards"}),u=o.findIndex(e=>e===r);j(o.slice(u+1))?t.preventDefault():i?null===(s=m.current)||void 0===s||s.focus():null===(a=p.current)||void 0===a||a.focus()}};return e.addEventListener("keydown",t),()=>e.removeEventListener("keydown",t)}},[d,C]),(0,s.createElement)(c.I0,{ref:h,role:"region","aria-label":i.replace("{hotkey}",w),tabIndex:-1,style:{pointerEvents:E?void 0:"none"}},E&&(0,s.createElement)(R,{ref:m,onFocusFromOutsideViewport:()=>{j(C({tabbingDirection:"forwards"}))}}),(0,s.createElement)(g.Slot,{scope:r},(0,s.createElement)(f.WV.ol,(0,n.Z)({tabIndex:-1},u,{ref:v}))),E&&(0,s.createElement)(R,{ref:p,onFocusFromOutsideViewport:()=>{j(C({tabbingDirection:"backwards"}))}}))}),R=(0,s.forwardRef)((e,t)=>{let{__scopeToast:r,onFocusFromOutsideViewport:a,...i}=e,o=P("ToastFocusProxy",r);return(0,s.createElement)(v.T,(0,n.Z)({"aria-hidden":!0,tabIndex:0},i,{ref:t,style:{position:"fixed"},onFocus:e=>{var t;let r=e.relatedTarget;null!==(t=o.viewport)&&void 0!==t&&t.contains(r)||a()}}))}),F="Toast",_=(0,s.forwardRef)((e,t)=>{let{forceMount:r,open:a,defaultOpen:o,onOpenChange:u,...l}=e,[c=!0,d]=(0,p.T)({prop:a,defaultProp:o,onChange:u});return(0,s.createElement)(h.z,{present:r||c},(0,s.createElement)(Q,(0,n.Z)({open:c},l,{ref:t,onClose:()=>d(!1),onPause:(0,m.W)(e.onPause),onResume:(0,m.W)(e.onResume),onSwipeStart:(0,i.M)(e.onSwipeStart,e=>{e.currentTarget.setAttribute("data-swipe","start")}),onSwipeMove:(0,i.M)(e.onSwipeMove,e=>{let{x:t,y:r}=e.detail.delta;e.currentTarget.setAttribute("data-swipe","move"),e.currentTarget.style.setProperty("--radix-toast-swipe-move-x",`${t}px`),e.currentTarget.style.setProperty("--radix-toast-swipe-move-y",`${r}px`)}),onSwipeCancel:(0,i.M)(e.onSwipeCancel,e=>{e.currentTarget.setAttribute("data-swipe","cancel"),e.currentTarget.style.removeProperty("--radix-toast-swipe-move-x"),e.currentTarget.style.removeProperty("--radix-toast-swipe-move-y"),e.currentTarget.style.removeProperty("--radix-toast-swipe-end-x"),e.currentTarget.style.removeProperty("--radix-toast-swipe-end-y")}),onSwipeEnd:(0,i.M)(e.onSwipeEnd,e=>{let{x:t,y:r}=e.detail.delta;e.currentTarget.setAttribute("data-swipe","end"),e.currentTarget.style.removeProperty("--radix-toast-swipe-move-x"),e.currentTarget.style.removeProperty("--radix-toast-swipe-move-y"),e.currentTarget.style.setProperty("--radix-toast-swipe-end-x",`${t}px`),e.currentTarget.style.setProperty("--radix-toast-swipe-end-y",`${r}px`),d(!1)})})))}),[k,A]=C(F,{onClose(){}}),Q=(0,s.forwardRef)((e,t)=>{let{__scopeToast:r,type:u="foreground",duration:l,open:d,onClose:h,onEscapeKeyDown:p,onPause:y,onResume:v,onSwipeStart:w,onSwipeMove:b,onSwipeCancel:E,onSwipeEnd:C,...T}=e,x=P(F,r),[S,M]=(0,s.useState)(null),D=(0,o.e)(t,e=>M(e)),R=(0,s.useRef)(null),_=(0,s.useRef)(null),A=l||x.duration,Q=(0,s.useRef)(0),I=(0,s.useRef)(A),K=(0,s.useRef)(0),{onToastAdd:N,onToastRemove:V}=x,Z=(0,m.W)(()=>{var e;(null==S?void 0:S.contains(document.activeElement))&&(null===(e=x.viewport)||void 0===e||e.focus()),h()}),j=(0,s.useCallback)(e=>{e&&e!==1/0&&(window.clearTimeout(K.current),Q.current=new Date().getTime(),K.current=window.setTimeout(Z,e))},[Z]);(0,s.useEffect)(()=>{let e=x.viewport;if(e){let t=()=>{j(I.current),null==v||v()},r=()=>{let e=new Date().getTime()-Q.current;I.current=I.current-e,window.clearTimeout(K.current),null==y||y()};return e.addEventListener(O,r),e.addEventListener(q,t),()=>{e.removeEventListener(O,r),e.removeEventListener(q,t)}}},[x.viewport,A,y,v,j]),(0,s.useEffect)(()=>{d&&!x.isClosePausedRef.current&&j(A)},[d,A,x.isClosePausedRef,j]),(0,s.useEffect)(()=>(N(),()=>V()),[N,V]);let $=(0,s.useMemo)(()=>S?function e(t){let r=[];return Array.from(t.childNodes).forEach(t=>{if(t.nodeType===t.TEXT_NODE&&t.textContent&&r.push(t.textContent),t.nodeType===t.ELEMENT_NODE){let n=t.ariaHidden||t.hidden||"none"===t.style.display,s=""===t.dataset.radixToastAnnounceExclude;if(!n){if(s){let e=t.dataset.radixToastAnnounceAlt;e&&r.push(e)}else r.push(...e(t))}}}),r}(S):null,[S]);return x.viewport?(0,s.createElement)(s.Fragment,null,$&&(0,s.createElement)(L,{__scopeToast:r,role:"status","aria-live":"foreground"===u?"assertive":"polite","aria-atomic":!0},$),(0,s.createElement)(k,{scope:r,onClose:Z},(0,a.createPortal)((0,s.createElement)(g.ItemSlot,{scope:r},(0,s.createElement)(c.fC,{asChild:!0,onEscapeKeyDown:(0,i.M)(p,()=>{x.isFocusedToastEscapeKeyDownRef.current||Z(),x.isFocusedToastEscapeKeyDownRef.current=!1})},(0,s.createElement)(f.WV.li,(0,n.Z)({role:"status","aria-live":"off","aria-atomic":!0,tabIndex:0,"data-state":d?"open":"closed","data-swipe-direction":x.swipeDirection},T,{ref:D,style:{userSelect:"none",touchAction:"none",...e.style},onKeyDown:(0,i.M)(e.onKeyDown,e=>{"Escape"!==e.key||(null==p||p(e.nativeEvent),e.nativeEvent.defaultPrevented||(x.isFocusedToastEscapeKeyDownRef.current=!0,Z()))}),onPointerDown:(0,i.M)(e.onPointerDown,e=>{0===e.button&&(R.current={x:e.clientX,y:e.clientY})}),onPointerMove:(0,i.M)(e.onPointerMove,e=>{if(!R.current)return;let t=e.clientX-R.current.x,r=e.clientY-R.current.y,n=!!_.current,s=["left","right"].includes(x.swipeDirection),a=["left","up"].includes(x.swipeDirection)?Math.min:Math.max,i=s?a(0,t):0,o=s?0:a(0,r),u="touch"===e.pointerType?10:2,l={x:i,y:o},c={originalEvent:e,delta:l};n?(_.current=l,H("toast.swipeMove",b,c,{discrete:!1})):W(l,x.swipeDirection,u)?(_.current=l,H("toast.swipeStart",w,c,{discrete:!1}),e.target.setPointerCapture(e.pointerId)):(Math.abs(t)>u||Math.abs(r)>u)&&(R.current=null)}),onPointerUp:(0,i.M)(e.onPointerUp,e=>{let t=_.current,r=e.target;if(r.hasPointerCapture(e.pointerId)&&r.releasePointerCapture(e.pointerId),_.current=null,R.current=null,t){let r=e.currentTarget,n={originalEvent:e,delta:t};W(t,x.swipeDirection,x.swipeThreshold)?H("toast.swipeEnd",C,n,{discrete:!0}):H("toast.swipeCancel",E,n,{discrete:!0}),r.addEventListener("click",e=>e.preventDefault(),{once:!0})}})})))),x.viewport))):null});Q.propTypes={type:e=>e.type&&!["foreground","background"].includes(e.type)?Error(`Invalid prop \`type\` supplied to \`${F}\`. Expected \`foreground | background\`.`):null};let L=e=>{let{__scopeToast:t,children:r,...n}=e,a=P(F,t),[i,o]=(0,s.useState)(!1),[u,l]=(0,s.useState)(!1);return function(e=()=>{}){let t=(0,m.W)(e);(0,y.b)(()=>{let e=0,r=0;return e=window.requestAnimationFrame(()=>r=window.requestAnimationFrame(t)),()=>{window.cancelAnimationFrame(e),window.cancelAnimationFrame(r)}},[t])}(()=>o(!0)),(0,s.useEffect)(()=>{let e=window.setTimeout(()=>l(!0),1e3);return()=>window.clearTimeout(e)},[]),u?null:(0,s.createElement)(d.h,{asChild:!0},(0,s.createElement)(v.T,n,i&&(0,s.createElement)(s.Fragment,null,a.label," ",r)))},I=(0,s.forwardRef)((e,t)=>{let{__scopeToast:r,...a}=e;return(0,s.createElement)(f.WV.div,(0,n.Z)({},a,{ref:t}))}),K=(0,s.forwardRef)((e,t)=>{let{__scopeToast:r,...a}=e;return(0,s.createElement)(f.WV.div,(0,n.Z)({},a,{ref:t}))}),N=(0,s.forwardRef)((e,t)=>{let{altText:r,...a}=e;return r?(0,s.createElement)(Z,{altText:r,asChild:!0},(0,s.createElement)(V,(0,n.Z)({},a,{ref:t}))):null});N.propTypes={altText:e=>e.altText?null:Error("Missing prop `altText` expected on `ToastAction`")};let V=(0,s.forwardRef)((e,t)=>{let{__scopeToast:r,...a}=e,o=A("ToastClose",r);return(0,s.createElement)(Z,{asChild:!0},(0,s.createElement)(f.WV.button,(0,n.Z)({type:"button"},a,{ref:t,onClick:(0,i.M)(e.onClick,o.onClose)})))}),Z=(0,s.forwardRef)((e,t)=>{let{__scopeToast:r,altText:a,...i}=e;return(0,s.createElement)(f.WV.div,(0,n.Z)({"data-radix-toast-announce-exclude":"","data-radix-toast-announce-alt":a||void 0},i,{ref:t}))});function H(e,t,r,{discrete:n}){let s=r.originalEvent.currentTarget,a=new CustomEvent(e,{bubbles:!0,cancelable:!0,detail:r});t&&s.addEventListener(e,t,{once:!0}),n?(0,f.jH)(s,a):s.dispatchEvent(a)}let W=(e,t,r=0)=>{let n=Math.abs(e.x),s=Math.abs(e.y),a=n>s;return"left"===t||"right"===t?a&&n>r:!a&&s>r};function j(e){let t=document.activeElement;return e.some(e=>e===t||(e.focus(),document.activeElement!==t))}let $=S,X=D,G=_,U=I,z=K,Y=N,B=V},1780:function(e,t,r){"use strict";r.d(t,{T:function(){return i},f:function(){return o}});var n=r(2110),s=r(2265),a=r(9586);let i=(0,s.forwardRef)((e,t)=>(0,s.createElement)(a.WV.span,(0,n.Z)({},e,{ref:t,style:{position:"absolute",border:0,width:1,height:1,padding:0,margin:-1,overflow:"hidden",clip:"rect(0, 0, 0, 0)",whiteSpace:"nowrap",wordWrap:"normal",...e.style}}))),o=i},1793:function(e,t,r){"use strict";r.d(t,{R:function(){return o},m:function(){return i}});var n=r(5139),s=r(2041),a=r(326),i=class extends s.F{#e;#t;#r;#n;constructor(e){super(),this.mutationId=e.mutationId,this.#t=e.defaultOptions,this.#r=e.mutationCache,this.#e=[],this.state=e.state||o(),this.setOptions(e.options),this.scheduleGc()}setOptions(e){this.options={...this.#t,...e},this.updateGcTime(this.options.gcTime)}get meta(){return this.options.meta}addObserver(e){this.#e.includes(e)||(this.#e.push(e),this.clearGcTimeout(),this.#r.notify({type:"observerAdded",mutation:this,observer:e}))}removeObserver(e){this.#e=this.#e.filter(t=>t!==e),this.scheduleGc(),this.#r.notify({type:"observerRemoved",mutation:this,observer:e})}optionalRemove(){this.#e.length||("pending"===this.state.status?this.scheduleGc():this.#r.remove(this))}continue(){return this.#n?.continue()??this.execute(this.state.variables)}async execute(e){let t="pending"===this.state.status;try{if(!t){this.#s({type:"pending",variables:e}),await this.#r.config.onMutate?.(e,this);let t=await this.options.onMutate?.(e);t!==this.state.context&&this.#s({type:"pending",context:t,variables:e})}let r=await (this.#n=(0,a.Mz)({fn:()=>this.options.mutationFn?this.options.mutationFn(e):Promise.reject(Error("No mutationFn found")),onFail:(e,t)=>{this.#s({type:"failed",failureCount:e,error:t})},onPause:()=>{this.#s({type:"pause"})},onContinue:()=>{this.#s({type:"continue"})},retry:this.options.retry??0,retryDelay:this.options.retryDelay,networkMode:this.options.networkMode}),this.#n.promise);return await this.#r.config.onSuccess?.(r,e,this.state.context,this),await this.options.onSuccess?.(r,e,this.state.context),await this.#r.config.onSettled?.(r,null,this.state.variables,this.state.context,this),await this.options.onSettled?.(r,null,e,this.state.context),this.#s({type:"success",data:r}),r}catch(t){try{throw await this.#r.config.onError?.(t,e,this.state.context,this),await this.options.onError?.(t,e,this.state.context),await this.#r.config.onSettled?.(void 0,t,this.state.variables,this.state.context,this),await this.options.onSettled?.(void 0,t,e,this.state.context),t}finally{this.#s({type:"error",error:t})}}}#s(e){this.state=(t=>{switch(e.type){case"failed":return{...t,failureCount:e.failureCount,failureReason:e.error};case"pause":return{...t,isPaused:!0};case"continue":return{...t,isPaused:!1};case"pending":return{...t,context:e.context,data:void 0,failureCount:0,failureReason:null,error:null,isPaused:!(0,a.Kw)(this.options.networkMode),status:"pending",variables:e.variables,submittedAt:Date.now()};case"success":return{...t,data:e.data,failureCount:0,failureReason:null,error:null,status:"success",isPaused:!1};case"error":return{...t,data:void 0,error:e.error,failureCount:t.failureCount+1,failureReason:e.error,isPaused:!1,status:"error"}}})(this.state),n.V.batch(()=>{this.#e.forEach(t=>{t.onMutationUpdate(e)}),this.#r.notify({mutation:this,type:"updated",action:e})})}};function o(){return{context:void 0,data:void 0,error:null,failureCount:0,failureReason:null,isPaused:!1,status:"idle",variables:void 0,submittedAt:0}}},8385:function(e,t,r){"use strict";r.d(t,{S:function(){return f}});var n=r(6063),s=r(4668),a=r(5139),i=r(4614),o=class extends i.l{constructor(e={}){super(),this.config=e,this.#a=new Map}#a;build(e,t,r){let a=t.queryKey,i=t.queryHash??(0,n.Rm)(a,t),o=this.get(i);return o||(o=new s.A({cache:this,queryKey:a,queryHash:i,options:e.defaultQueryOptions(t),state:r,defaultOptions:e.getQueryDefaults(a)}),this.add(o)),o}add(e){this.#a.has(e.queryHash)||(this.#a.set(e.queryHash,e),this.notify({type:"added",query:e}))}remove(e){let t=this.#a.get(e.queryHash);t&&(e.destroy(),t===e&&this.#a.delete(e.queryHash),this.notify({type:"removed",query:e}))}clear(){a.V.batch(()=>{this.getAll().forEach(e=>{this.remove(e)})})}get(e){return this.#a.get(e)}getAll(){return[...this.#a.values()]}find(e){let t={exact:!0,...e};return this.getAll().find(e=>(0,n._x)(t,e))}findAll(e={}){let t=this.getAll();return Object.keys(e).length>0?t.filter(t=>(0,n._x)(e,t)):t}notify(e){a.V.batch(()=>{this.listeners.forEach(t=>{t(e)})})}onFocus(){a.V.batch(()=>{this.getAll().forEach(e=>{e.onFocus()})})}onOnline(){a.V.batch(()=>{this.getAll().forEach(e=>{e.onOnline()})})}},u=r(1793),l=class extends i.l{constructor(e={}){super(),this.config=e,this.#i=[],this.#o=0}#i;#o;#u;build(e,t,r){let n=new u.m({mutationCache:this,mutationId:++this.#o,options:e.defaultMutationOptions(t),state:r});return this.add(n),n}add(e){this.#i.push(e),this.notify({type:"added",mutation:e})}remove(e){this.#i=this.#i.filter(t=>t!==e),this.notify({type:"removed",mutation:e})}clear(){a.V.batch(()=>{this.#i.forEach(e=>{this.remove(e)})})}getAll(){return this.#i}find(e){let t={exact:!0,...e};return this.#i.find(e=>(0,n.X7)(t,e))}findAll(e={}){return this.#i.filter(t=>(0,n.X7)(e,t))}notify(e){a.V.batch(()=>{this.listeners.forEach(t=>{t(e)})})}resumePausedMutations(){return this.#u=(this.#u??Promise.resolve()).then(()=>{let e=this.#i.filter(e=>e.state.isPaused);return a.V.batch(()=>e.reduce((e,t)=>e.then(()=>t.continue().catch(n.ZT)),Promise.resolve()))}).then(()=>{this.#u=void 0}),this.#u}},c=r(9555),d=r(7211);function h(e,{pages:t,pageParams:r}){let n=t.length-1;return e.getNextPageParam(t[n],t,r[n],r)}var f=class{#l;#r;#t;#c;#d;#h;#f;#m;constructor(e={}){this.#l=e.queryCache||new o,this.#r=e.mutationCache||new l,this.#t=e.defaultOptions||{},this.#c=new Map,this.#d=new Map,this.#h=0}mount(){this.#h++,1===this.#h&&(this.#f=c.j.subscribe(async e=>{e&&(await this.resumePausedMutations(),this.#l.onFocus())}),this.#m=d.N.subscribe(async e=>{e&&(await this.resumePausedMutations(),this.#l.onOnline())}))}unmount(){this.#h--,0===this.#h&&(this.#f?.(),this.#f=void 0,this.#m?.(),this.#m=void 0)}isFetching(e){return this.#l.findAll({...e,fetchStatus:"fetching"}).length}isMutating(e){return this.#r.findAll({...e,status:"pending"}).length}getQueryData(e){let t=this.defaultQueryOptions({queryKey:e});return this.#l.get(t.queryHash)?.state.data}ensureQueryData(e){let t=this.getQueryData(e.queryKey);if(void 0===t)return this.fetchQuery(e);{let r=this.defaultQueryOptions(e),n=this.#l.build(this,r);return e.revalidateIfStale&&n.isStaleByTime(r.staleTime)&&this.prefetchQuery(r),Promise.resolve(t)}}getQueriesData(e){return this.getQueryCache().findAll(e).map(({queryKey:e,state:t})=>[e,t.data])}setQueryData(e,t,r){let s=this.defaultQueryOptions({queryKey:e}),a=this.#l.get(s.queryHash),i=a?.state.data,o=(0,n.SE)(t,i);if(void 0!==o)return this.#l.build(this,s).setData(o,{...r,manual:!0})}setQueriesData(e,t,r){return a.V.batch(()=>this.getQueryCache().findAll(e).map(({queryKey:e})=>[e,this.setQueryData(e,t,r)]))}getQueryState(e){let t=this.defaultQueryOptions({queryKey:e});return this.#l.get(t.queryHash)?.state}removeQueries(e){let t=this.#l;a.V.batch(()=>{t.findAll(e).forEach(e=>{t.remove(e)})})}resetQueries(e,t){let r=this.#l,n={type:"active",...e};return a.V.batch(()=>(r.findAll(e).forEach(e=>{e.reset()}),this.refetchQueries(n,t)))}cancelQueries(e={},t={}){let r={revert:!0,...t};return Promise.all(a.V.batch(()=>this.#l.findAll(e).map(e=>e.cancel(r)))).then(n.ZT).catch(n.ZT)}invalidateQueries(e={},t={}){return a.V.batch(()=>{if(this.#l.findAll(e).forEach(e=>{e.invalidate()}),"none"===e.refetchType)return Promise.resolve();let r={...e,type:e.refetchType??e.type??"active"};return this.refetchQueries(r,t)})}refetchQueries(e={},t){let r={...t,cancelRefetch:t?.cancelRefetch??!0};return Promise.all(a.V.batch(()=>this.#l.findAll(e).filter(e=>!e.isDisabled()).map(e=>{let t=e.fetch(void 0,r);return r.throwOnError||(t=t.catch(n.ZT)),"paused"===e.state.fetchStatus?Promise.resolve():t}))).then(n.ZT)}fetchQuery(e){let t=this.defaultQueryOptions(e);void 0===t.retry&&(t.retry=!1);let r=this.#l.build(this,t);return r.isStaleByTime(t.staleTime)?r.fetch(t):Promise.resolve(r.state.data)}prefetchQuery(e){return this.fetchQuery(e).then(n.ZT).catch(n.ZT)}fetchInfiniteQuery(e){var t;return e.behavior=(t=e.pages,{onFetch:(e,r)=>{let s=async()=>{let r;let s=e.options,a=e.fetchOptions?.meta?.fetchMore?.direction,i=e.state.data?.pages||[],o=e.state.data?.pageParams||[],u=!1,l=t=>{Object.defineProperty(t,"signal",{enumerable:!0,get:()=>(e.signal.aborted?u=!0:e.signal.addEventListener("abort",()=>{u=!0}),e.signal)})},c=e.options.queryFn&&e.options.queryFn!==n.CN?e.options.queryFn:()=>Promise.reject(Error(`Missing queryFn: '${e.options.queryHash}'`)),d=async(t,r,s)=>{if(u)return Promise.reject();if(null==r&&t.pages.length)return Promise.resolve(t);let a={queryKey:e.queryKey,pageParam:r,direction:s?"backward":"forward",meta:e.options.meta};l(a);let i=await c(a),{maxPages:o}=e.options,d=s?n.Ht:n.VX;return{pages:d(t.pages,i,o),pageParams:d(t.pageParams,r,o)}};if(a&&i.length){let e="backward"===a,t={pages:i,pageParams:o},n=(e?function(e,{pages:t,pageParams:r}){return e.getPreviousPageParam?.(t[0],t,r[0],r)}:h)(s,t);r=await d(t,n,e)}else{r=await d({pages:[],pageParams:[]},o[0]??s.initialPageParam);let e=t??i.length;for(let t=1;t<e;t++){let e=h(s,r);r=await d(r,e)}}return r};e.options.persister?e.fetchFn=()=>e.options.persister?.(s,{queryKey:e.queryKey,meta:e.options.meta,signal:e.signal},r):e.fetchFn=s}}),this.fetchQuery(e)}prefetchInfiniteQuery(e){return this.fetchInfiniteQuery(e).then(n.ZT).catch(n.ZT)}resumePausedMutations(){return d.N.isOnline()?this.#r.resumePausedMutations():Promise.resolve()}getQueryCache(){return this.#l}getMutationCache(){return this.#r}getDefaultOptions(){return this.#t}setDefaultOptions(e){this.#t=e}setQueryDefaults(e,t){this.#c.set((0,n.Ym)(e),{queryKey:e,defaultOptions:t})}getQueryDefaults(e){let t=[...this.#c.values()],r={};return t.forEach(t=>{(0,n.to)(e,t.queryKey)&&(r={...r,...t.defaultOptions})}),r}setMutationDefaults(e,t){this.#d.set((0,n.Ym)(e),{mutationKey:e,defaultOptions:t})}getMutationDefaults(e){let t=[...this.#d.values()],r={};return t.forEach(t=>{(0,n.to)(e,t.mutationKey)&&(r={...r,...t.defaultOptions})}),r}defaultQueryOptions(e){if(e._defaulted)return e;let t={...this.#t.queries,...this.getQueryDefaults(e.queryKey),...e,_defaulted:!0};return t.queryHash||(t.queryHash=(0,n.Rm)(t.queryKey,t)),void 0===t.refetchOnReconnect&&(t.refetchOnReconnect="always"!==t.networkMode),void 0===t.throwOnError&&(t.throwOnError=!!t.suspense),!t.networkMode&&t.persister&&(t.networkMode="offlineFirst"),!0!==t.enabled&&t.queryFn===n.CN&&(t.enabled=!1),t}defaultMutationOptions(e){return e?._defaulted?e:{...this.#t.mutations,...e?.mutationKey&&this.getMutationDefaults(e.mutationKey),...e,_defaulted:!0}}clear(){this.#l.clear(),this.#r.clear()}}},4848:function(e,t,r){"use strict";r.d(t,{F:function(){return l},f:function(){return c}});var n=r(2265),s=["light","dark"],a="(prefers-color-scheme: dark)",i="undefined"==typeof window,o=n.createContext(void 0),u={setTheme:e=>{},themes:[]},l=()=>{var e;return null!=(e=n.useContext(o))?e:u},c=e=>n.useContext(o)?e.children:n.createElement(h,{...e}),d=["light","dark"],h=e=>{let{forcedTheme:t,disableTransitionOnChange:r=!1,enableSystem:i=!0,enableColorScheme:u=!0,storageKey:l="theme",themes:c=d,defaultTheme:h=i?"system":"light",attribute:v="data-theme",value:w,children:g,nonce:b}=e,[E,C]=n.useState(()=>m(l,h)),[T,x]=n.useState(()=>m(l)),P=w?Object.values(w):c,S=n.useCallback(e=>{let t=e;if(!t)return;"system"===e&&i&&(t=y());let n=w?w[t]:t,a=r?p():null,o=document.documentElement;if("class"===v?(o.classList.remove(...P),n&&o.classList.add(n)):n?o.setAttribute(v,n):o.removeAttribute(v),u){let e=s.includes(h)?h:null,r=s.includes(t)?t:e;o.style.colorScheme=r}null==a||a()},[]),M=n.useCallback(e=>{let t="function"==typeof e?e(e):e;C(t);try{localStorage.setItem(l,t)}catch(e){}},[t]),O=n.useCallback(e=>{x(y(e)),"system"===E&&i&&!t&&S("system")},[E,t]);n.useEffect(()=>{let e=window.matchMedia(a);return e.addListener(O),O(e),()=>e.removeListener(O)},[O]),n.useEffect(()=>{let e=e=>{e.key===l&&M(e.newValue||h)};return window.addEventListener("storage",e),()=>window.removeEventListener("storage",e)},[M]),n.useEffect(()=>{S(null!=t?t:E)},[t,E]);let q=n.useMemo(()=>({theme:E,setTheme:M,forcedTheme:t,resolvedTheme:"system"===E?T:E,themes:i?[...c,"system"]:c,systemTheme:i?T:void 0}),[E,M,t,T,i,c]);return n.createElement(o.Provider,{value:q},n.createElement(f,{forcedTheme:t,disableTransitionOnChange:r,enableSystem:i,enableColorScheme:u,storageKey:l,themes:c,defaultTheme:h,attribute:v,value:w,children:g,attrs:P,nonce:b}),g)},f=n.memo(e=>{let{forcedTheme:t,storageKey:r,attribute:i,enableSystem:o,enableColorScheme:u,defaultTheme:l,value:c,attrs:d,nonce:h}=e,f="system"===l,m="class"===i?"var d=document.documentElement,c=d.classList;".concat("c.remove(".concat(d.map(e=>"'".concat(e,"'")).join(","),")"),";"):"var d=document.documentElement,n='".concat(i,"',s='setAttribute';"),p=u?(s.includes(l)?l:null)?"if(e==='light'||e==='dark'||!e)d.style.colorScheme=e||'".concat(l,"'"):"if(e==='light'||e==='dark')d.style.colorScheme=e":"",y=function(e){let t=arguments.length>1&&void 0!==arguments[1]&&arguments[1],r=!(arguments.length>2)||void 0===arguments[2]||arguments[2],n=c?c[e]:e,a=t?e+"|| ''":"'".concat(n,"'"),o="";return u&&r&&!t&&s.includes(e)&&(o+="d.style.colorScheme = '".concat(e,"';")),"class"===i?t||n?o+="c.add(".concat(a,")"):o+="null":n&&(o+="d[s](n,".concat(a,")")),o},v=t?"!function(){".concat(m).concat(y(t),"}()"):o?"!function(){try{".concat(m,"var e=localStorage.getItem('").concat(r,"');if('system'===e||(!e&&").concat(f,")){var t='").concat(a,"',m=window.matchMedia(t);if(m.media!==t||m.matches){").concat(y("dark"),"}else{").concat(y("light"),"}}else if(e){").concat(c?"var x=".concat(JSON.stringify(c),";"):"").concat(y(c?"x[e]":"e",!0),"}").concat(f?"":"else{"+y(l,!1,!1)+"}").concat(p,"}catch(e){}}()"):"!function(){try{".concat(m,"var e=localStorage.getItem('").concat(r,"');if(e){").concat(c?"var x=".concat(JSON.stringify(c),";"):"").concat(y(c?"x[e]":"e",!0),"}else{").concat(y(l,!1,!1),";}").concat(p,"}catch(t){}}();");return n.createElement("script",{nonce:h,dangerouslySetInnerHTML:{__html:v}})}),m=(e,t)=>{let r;if(!i){try{r=localStorage.getItem(e)||void 0}catch(e){}return r||t}},p=()=>{let e=document.createElement("style");return e.appendChild(document.createTextNode("*{-webkit-transition:none!important;-moz-transition:none!important;-o-transition:none!important;-ms-transition:none!important;transition:none!important}")),document.head.appendChild(e),()=>{window.getComputedStyle(document.body),setTimeout(()=>{document.head.removeChild(e)},1)}},y=e=>(e||(e=window.matchMedia(a)),e.matches?"dark":"light")}}]);