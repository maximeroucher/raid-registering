(self.webpackChunk_N_E=self.webpackChunk_N_E||[]).push([[586],{81971:function(e){e.exports={style:{fontFamily:"'__Outfit_85f290', '__Outfit_Fallback_85f290'",fontStyle:"normal"},className:"__className_85f290"}},86736:function(e,t,r){"use strict";r.d(t,{Dx:function(){return Y},aU:function(){return z},dk:function(){return B},fC:function(){return U},l_:function(){return X},x8:function(){return G},zt:function(){return $}});var n=r(14749),a=r(2265),i=r(54887),s=r(44991),o=r(61266),u=r(27533),l=r(84104),c=r(1260),d=r(37881),h=r(12642),f=r(29586),p=r(39830),m=r(9310),y=r(32618),v=r(11780);let w="ToastProvider",[g,E,b]=(0,u.B)("Toast"),[T,C]=(0,l.b)("Toast",[b]),[P,x]=T(w),q=e=>{let{__scopeToast:t,label:r="Notification",duration:n=5e3,swipeDirection:i="right",swipeThreshold:s=50,children:o}=e,[u,l]=(0,a.useState)(null),[c,d]=(0,a.useState)(0),h=(0,a.useRef)(!1),f=(0,a.useRef)(!1);return(0,a.createElement)(g.Provider,{scope:t},(0,a.createElement)(P,{scope:t,label:r,duration:n,swipeDirection:i,swipeThreshold:s,toastCount:c,viewport:u,onViewportChange:l,onToastAdd:(0,a.useCallback)(()=>d(e=>e+1),[]),onToastRemove:(0,a.useCallback)(()=>d(e=>e-1),[]),isFocusedToastEscapeKeyDownRef:h,isClosePausedRef:f},o))};q.propTypes={label:e=>e.label&&"string"==typeof e.label&&!e.label.trim()?Error(`Invalid prop \`label\` supplied to \`${w}\`. Expected non-empty \`string\`.`):null};let D=["F8"],R="toast.viewportPause",M="toast.viewportResume",O=(0,a.forwardRef)((e,t)=>{let{__scopeToast:r,hotkey:i=D,label:s="Notifications ({hotkey})",...u}=e,l=x("ToastViewport",r),d=E(r),h=(0,a.useRef)(null),p=(0,a.useRef)(null),m=(0,a.useRef)(null),y=(0,a.useRef)(null),v=(0,o.e)(t,y,l.onViewportChange),w=i.join("+").replace(/Key/g,"").replace(/Digit/g,""),b=l.toastCount>0;(0,a.useEffect)(()=>{let e=e=>{var t;i.every(t=>e[t]||e.code===t)&&(null===(t=y.current)||void 0===t||t.focus())};return document.addEventListener("keydown",e),()=>document.removeEventListener("keydown",e)},[i]),(0,a.useEffect)(()=>{let e=h.current,t=y.current;if(b&&e&&t){let r=()=>{if(!l.isClosePausedRef.current){let e=new CustomEvent(R);t.dispatchEvent(e),l.isClosePausedRef.current=!0}},n=()=>{if(l.isClosePausedRef.current){let e=new CustomEvent(M);t.dispatchEvent(e),l.isClosePausedRef.current=!1}},a=t=>{e.contains(t.relatedTarget)||n()},i=()=>{e.contains(document.activeElement)||n()};return e.addEventListener("focusin",r),e.addEventListener("focusout",a),e.addEventListener("pointermove",r),e.addEventListener("pointerleave",i),window.addEventListener("blur",r),window.addEventListener("focus",n),()=>{e.removeEventListener("focusin",r),e.removeEventListener("focusout",a),e.removeEventListener("pointermove",r),e.removeEventListener("pointerleave",i),window.removeEventListener("blur",r),window.removeEventListener("focus",n)}}},[b,l.isClosePausedRef]);let T=(0,a.useCallback)(({tabbingDirection:e})=>{let t=d().map(t=>{let r=t.ref.current,n=[r,...function(e){let t=[],r=document.createTreeWalker(e,NodeFilter.SHOW_ELEMENT,{acceptNode:e=>{let t="INPUT"===e.tagName&&"hidden"===e.type;return e.disabled||e.hidden||t?NodeFilter.FILTER_SKIP:e.tabIndex>=0?NodeFilter.FILTER_ACCEPT:NodeFilter.FILTER_SKIP}});for(;r.nextNode();)t.push(r.currentNode);return t}(r)];return"forwards"===e?n:n.reverse()});return("forwards"===e?t.reverse():t).flat()},[d]);return(0,a.useEffect)(()=>{let e=y.current;if(e){let t=t=>{let r=t.altKey||t.ctrlKey||t.metaKey;if("Tab"===t.key&&!r){var n,a,i;let r=document.activeElement,s=t.shiftKey;if(t.target===e&&s){null===(n=p.current)||void 0===n||n.focus();return}let o=T({tabbingDirection:s?"backwards":"forwards"}),u=o.findIndex(e=>e===r);j(o.slice(u+1))?t.preventDefault():s?null===(a=p.current)||void 0===a||a.focus():null===(i=m.current)||void 0===i||i.focus()}};return e.addEventListener("keydown",t),()=>e.removeEventListener("keydown",t)}},[d,T]),(0,a.createElement)(c.I0,{ref:h,role:"region","aria-label":s.replace("{hotkey}",w),tabIndex:-1,style:{pointerEvents:b?void 0:"none"}},b&&(0,a.createElement)(_,{ref:p,onFocusFromOutsideViewport:()=>{j(T({tabbingDirection:"forwards"}))}}),(0,a.createElement)(g.Slot,{scope:r},(0,a.createElement)(f.WV.ol,(0,n.Z)({tabIndex:-1},u,{ref:v}))),b&&(0,a.createElement)(_,{ref:m,onFocusFromOutsideViewport:()=>{j(T({tabbingDirection:"backwards"}))}}))}),_=(0,a.forwardRef)((e,t)=>{let{__scopeToast:r,onFocusFromOutsideViewport:i,...s}=e,o=x("ToastFocusProxy",r);return(0,a.createElement)(v.T,(0,n.Z)({"aria-hidden":!0,tabIndex:0},s,{ref:t,style:{position:"fixed"},onFocus:e=>{var t;let r=e.relatedTarget;null!==(t=o.viewport)&&void 0!==t&&t.contains(r)||i()}}))}),F="Toast",Q=(0,a.forwardRef)((e,t)=>{let{forceMount:r,open:i,defaultOpen:o,onOpenChange:u,...l}=e,[c=!0,d]=(0,m.T)({prop:i,defaultProp:o,onChange:u});return(0,a.createElement)(h.z,{present:r||c},(0,a.createElement)(k,(0,n.Z)({open:c},l,{ref:t,onClose:()=>d(!1),onPause:(0,p.W)(e.onPause),onResume:(0,p.W)(e.onResume),onSwipeStart:(0,s.M)(e.onSwipeStart,e=>{e.currentTarget.setAttribute("data-swipe","start")}),onSwipeMove:(0,s.M)(e.onSwipeMove,e=>{let{x:t,y:r}=e.detail.delta;e.currentTarget.setAttribute("data-swipe","move"),e.currentTarget.style.setProperty("--radix-toast-swipe-move-x",`${t}px`),e.currentTarget.style.setProperty("--radix-toast-swipe-move-y",`${r}px`)}),onSwipeCancel:(0,s.M)(e.onSwipeCancel,e=>{e.currentTarget.setAttribute("data-swipe","cancel"),e.currentTarget.style.removeProperty("--radix-toast-swipe-move-x"),e.currentTarget.style.removeProperty("--radix-toast-swipe-move-y"),e.currentTarget.style.removeProperty("--radix-toast-swipe-end-x"),e.currentTarget.style.removeProperty("--radix-toast-swipe-end-y")}),onSwipeEnd:(0,s.M)(e.onSwipeEnd,e=>{let{x:t,y:r}=e.detail.delta;e.currentTarget.setAttribute("data-swipe","end"),e.currentTarget.style.removeProperty("--radix-toast-swipe-move-x"),e.currentTarget.style.removeProperty("--radix-toast-swipe-move-y"),e.currentTarget.style.setProperty("--radix-toast-swipe-end-x",`${t}px`),e.currentTarget.style.setProperty("--radix-toast-swipe-end-y",`${r}px`),d(!1)})})))}),[S,A]=T(F,{onClose(){}}),k=(0,a.forwardRef)((e,t)=>{let{__scopeToast:r,type:u="foreground",duration:l,open:d,onClose:h,onEscapeKeyDown:m,onPause:y,onResume:v,onSwipeStart:w,onSwipeMove:E,onSwipeCancel:b,onSwipeEnd:T,...C}=e,P=x(F,r),[q,D]=(0,a.useState)(null),O=(0,o.e)(t,e=>D(e)),_=(0,a.useRef)(null),Q=(0,a.useRef)(null),A=l||P.duration,k=(0,a.useRef)(0),K=(0,a.useRef)(A),V=(0,a.useRef)(0),{onToastAdd:I,onToastRemove:N}=P,Z=(0,p.W)(()=>{var e;(null==q?void 0:q.contains(document.activeElement))&&(null===(e=P.viewport)||void 0===e||e.focus()),h()}),j=(0,a.useCallback)(e=>{e&&e!==1/0&&(window.clearTimeout(V.current),k.current=new Date().getTime(),V.current=window.setTimeout(Z,e))},[Z]);(0,a.useEffect)(()=>{let e=P.viewport;if(e){let t=()=>{j(K.current),null==v||v()},r=()=>{let e=new Date().getTime()-k.current;K.current=K.current-e,window.clearTimeout(V.current),null==y||y()};return e.addEventListener(R,r),e.addEventListener(M,t),()=>{e.removeEventListener(R,r),e.removeEventListener(M,t)}}},[P.viewport,A,y,v,j]),(0,a.useEffect)(()=>{d&&!P.isClosePausedRef.current&&j(A)},[d,A,P.isClosePausedRef,j]),(0,a.useEffect)(()=>(I(),()=>N()),[I,N]);let $=(0,a.useMemo)(()=>q?function e(t){let r=[];return Array.from(t.childNodes).forEach(t=>{if(t.nodeType===t.TEXT_NODE&&t.textContent&&r.push(t.textContent),t.nodeType===t.ELEMENT_NODE){let n=t.ariaHidden||t.hidden||"none"===t.style.display,a=""===t.dataset.radixToastAnnounceExclude;if(!n){if(a){let e=t.dataset.radixToastAnnounceAlt;e&&r.push(e)}else r.push(...e(t))}}}),r}(q):null,[q]);return P.viewport?(0,a.createElement)(a.Fragment,null,$&&(0,a.createElement)(L,{__scopeToast:r,role:"status","aria-live":"foreground"===u?"assertive":"polite","aria-atomic":!0},$),(0,a.createElement)(S,{scope:r,onClose:Z},(0,i.createPortal)((0,a.createElement)(g.ItemSlot,{scope:r},(0,a.createElement)(c.fC,{asChild:!0,onEscapeKeyDown:(0,s.M)(m,()=>{P.isFocusedToastEscapeKeyDownRef.current||Z(),P.isFocusedToastEscapeKeyDownRef.current=!1})},(0,a.createElement)(f.WV.li,(0,n.Z)({role:"status","aria-live":"off","aria-atomic":!0,tabIndex:0,"data-state":d?"open":"closed","data-swipe-direction":P.swipeDirection},C,{ref:O,style:{userSelect:"none",touchAction:"none",...e.style},onKeyDown:(0,s.M)(e.onKeyDown,e=>{"Escape"!==e.key||(null==m||m(e.nativeEvent),e.nativeEvent.defaultPrevented||(P.isFocusedToastEscapeKeyDownRef.current=!0,Z()))}),onPointerDown:(0,s.M)(e.onPointerDown,e=>{0===e.button&&(_.current={x:e.clientX,y:e.clientY})}),onPointerMove:(0,s.M)(e.onPointerMove,e=>{if(!_.current)return;let t=e.clientX-_.current.x,r=e.clientY-_.current.y,n=!!Q.current,a=["left","right"].includes(P.swipeDirection),i=["left","up"].includes(P.swipeDirection)?Math.min:Math.max,s=a?i(0,t):0,o=a?0:i(0,r),u="touch"===e.pointerType?10:2,l={x:s,y:o},c={originalEvent:e,delta:l};n?(Q.current=l,H("toast.swipeMove",E,c,{discrete:!1})):W(l,P.swipeDirection,u)?(Q.current=l,H("toast.swipeStart",w,c,{discrete:!1}),e.target.setPointerCapture(e.pointerId)):(Math.abs(t)>u||Math.abs(r)>u)&&(_.current=null)}),onPointerUp:(0,s.M)(e.onPointerUp,e=>{let t=Q.current,r=e.target;if(r.hasPointerCapture(e.pointerId)&&r.releasePointerCapture(e.pointerId),Q.current=null,_.current=null,t){let r=e.currentTarget,n={originalEvent:e,delta:t};W(t,P.swipeDirection,P.swipeThreshold)?H("toast.swipeEnd",T,n,{discrete:!0}):H("toast.swipeCancel",b,n,{discrete:!0}),r.addEventListener("click",e=>e.preventDefault(),{once:!0})}})})))),P.viewport))):null});k.propTypes={type:e=>e.type&&!["foreground","background"].includes(e.type)?Error(`Invalid prop \`type\` supplied to \`${F}\`. Expected \`foreground | background\`.`):null};let L=e=>{let{__scopeToast:t,children:r,...n}=e,i=x(F,t),[s,o]=(0,a.useState)(!1),[u,l]=(0,a.useState)(!1);return function(e=()=>{}){let t=(0,p.W)(e);(0,y.b)(()=>{let e=0,r=0;return e=window.requestAnimationFrame(()=>r=window.requestAnimationFrame(t)),()=>{window.cancelAnimationFrame(e),window.cancelAnimationFrame(r)}},[t])}(()=>o(!0)),(0,a.useEffect)(()=>{let e=window.setTimeout(()=>l(!0),1e3);return()=>window.clearTimeout(e)},[]),u?null:(0,a.createElement)(d.h,{asChild:!0},(0,a.createElement)(v.T,n,s&&(0,a.createElement)(a.Fragment,null,i.label," ",r)))},K=(0,a.forwardRef)((e,t)=>{let{__scopeToast:r,...i}=e;return(0,a.createElement)(f.WV.div,(0,n.Z)({},i,{ref:t}))}),V=(0,a.forwardRef)((e,t)=>{let{__scopeToast:r,...i}=e;return(0,a.createElement)(f.WV.div,(0,n.Z)({},i,{ref:t}))}),I=(0,a.forwardRef)((e,t)=>{let{altText:r,...i}=e;return r?(0,a.createElement)(Z,{altText:r,asChild:!0},(0,a.createElement)(N,(0,n.Z)({},i,{ref:t}))):null});I.propTypes={altText:e=>e.altText?null:Error("Missing prop `altText` expected on `ToastAction`")};let N=(0,a.forwardRef)((e,t)=>{let{__scopeToast:r,...i}=e,o=A("ToastClose",r);return(0,a.createElement)(Z,{asChild:!0},(0,a.createElement)(f.WV.button,(0,n.Z)({type:"button"},i,{ref:t,onClick:(0,s.M)(e.onClick,o.onClose)})))}),Z=(0,a.forwardRef)((e,t)=>{let{__scopeToast:r,altText:i,...s}=e;return(0,a.createElement)(f.WV.div,(0,n.Z)({"data-radix-toast-announce-exclude":"","data-radix-toast-announce-alt":i||void 0},s,{ref:t}))});function H(e,t,r,{discrete:n}){let a=r.originalEvent.currentTarget,i=new CustomEvent(e,{bubbles:!0,cancelable:!0,detail:r});t&&a.addEventListener(e,t,{once:!0}),n?(0,f.jH)(a,i):a.dispatchEvent(i)}let W=(e,t,r=0)=>{let n=Math.abs(e.x),a=Math.abs(e.y),i=n>a;return"left"===t||"right"===t?i&&n>r:!i&&a>r};function j(e){let t=document.activeElement;return e.some(e=>e===t||(e.focus(),document.activeElement!==t))}let $=q,X=O,U=Q,Y=K,B=V,z=I,G=N},11780:function(e,t,r){"use strict";r.d(t,{T:function(){return s}});var n=r(14749),a=r(2265),i=r(29586);let s=(0,a.forwardRef)((e,t)=>(0,a.createElement)(i.WV.span,(0,n.Z)({},e,{ref:t,style:{position:"absolute",border:0,width:1,height:1,padding:0,margin:-1,overflow:"hidden",clip:"rect(0, 0, 0, 0)",whiteSpace:"nowrap",wordWrap:"normal",...e.style}})))},73582:function(e,t,r){"use strict";r.d(t,{t:function(){return o}});var n=r(46063),a=r(4668),i=r(45139),s=r(44614),o=class extends s.l{constructor(e={}){super(),this.config=e,this.#e=new Map}#e;build(e,t,r){let i=t.queryKey,s=t.queryHash??(0,n.Rm)(i,t),o=this.get(s);return o||(o=new a.A({cache:this,queryKey:i,queryHash:s,options:e.defaultQueryOptions(t),state:r,defaultOptions:e.getQueryDefaults(i)}),this.add(o)),o}add(e){this.#e.has(e.queryHash)||(this.#e.set(e.queryHash,e),this.notify({type:"added",query:e}))}remove(e){let t=this.#e.get(e.queryHash);t&&(e.destroy(),t===e&&this.#e.delete(e.queryHash),this.notify({type:"removed",query:e}))}clear(){i.V.batch(()=>{this.getAll().forEach(e=>{this.remove(e)})})}get(e){return this.#e.get(e)}getAll(){return[...this.#e.values()]}find(e){let t={exact:!0,...e};return this.getAll().find(e=>(0,n._x)(t,e))}findAll(e={}){let t=this.getAll();return Object.keys(e).length>0?t.filter(t=>(0,n._x)(e,t)):t}notify(e){i.V.batch(()=>{this.listeners.forEach(t=>{t(e)})})}onFocus(){i.V.batch(()=>{this.getAll().forEach(e=>{e.onFocus()})})}onOnline(){i.V.batch(()=>{this.getAll().forEach(e=>{e.onOnline()})})}}},73221:function(e,t,r){"use strict";r.d(t,{S:function(){return h}});var n=r(46063),a=r(73582),i=r(45139),s=r(1793),o=r(44614),u=class extends o.l{constructor(e={}){super(),this.config=e,this.#t=[],this.#r=0}#t;#r;#n;build(e,t,r){let n=new s.m({mutationCache:this,mutationId:++this.#r,options:e.defaultMutationOptions(t),state:r});return this.add(n),n}add(e){this.#t.push(e),this.notify({type:"added",mutation:e})}remove(e){this.#t=this.#t.filter(t=>t!==e),this.notify({type:"removed",mutation:e})}clear(){i.V.batch(()=>{this.#t.forEach(e=>{this.remove(e)})})}getAll(){return this.#t}find(e){let t={exact:!0,...e};return this.#t.find(e=>(0,n.X7)(t,e))}findAll(e={}){return this.#t.filter(t=>(0,n.X7)(e,t))}notify(e){i.V.batch(()=>{this.listeners.forEach(t=>{t(e)})})}resumePausedMutations(){return this.#n=(this.#n??Promise.resolve()).then(()=>{let e=this.#t.filter(e=>e.state.isPaused);return i.V.batch(()=>e.reduce((e,t)=>e.then(()=>t.continue().catch(n.ZT)),Promise.resolve()))}).then(()=>{this.#n=void 0}),this.#n}},l=r(79555),c=r(17211);function d(e,{pages:t,pageParams:r}){let n=t.length-1;return e.getNextPageParam(t[n],t,r[n],r)}var h=class{#a;#i;#s;#o;#u;#l;#c;#d;constructor(e={}){this.#a=e.queryCache||new a.t,this.#i=e.mutationCache||new u,this.#s=e.defaultOptions||{},this.#o=new Map,this.#u=new Map,this.#l=0}mount(){this.#l++,1===this.#l&&(this.#c=l.j.subscribe(async e=>{e&&(await this.resumePausedMutations(),this.#a.onFocus())}),this.#d=c.N.subscribe(async e=>{e&&(await this.resumePausedMutations(),this.#a.onOnline())}))}unmount(){this.#l--,0===this.#l&&(this.#c?.(),this.#c=void 0,this.#d?.(),this.#d=void 0)}isFetching(e){return this.#a.findAll({...e,fetchStatus:"fetching"}).length}isMutating(e){return this.#i.findAll({...e,status:"pending"}).length}getQueryData(e){let t=this.defaultQueryOptions({queryKey:e});return this.#a.get(t.queryHash)?.state.data}ensureQueryData(e){let t=this.getQueryData(e.queryKey);if(void 0===t)return this.fetchQuery(e);{let r=this.defaultQueryOptions(e),n=this.#a.build(this,r);return e.revalidateIfStale&&n.isStaleByTime(r.staleTime)&&this.prefetchQuery(r),Promise.resolve(t)}}getQueriesData(e){return this.getQueryCache().findAll(e).map(({queryKey:e,state:t})=>[e,t.data])}setQueryData(e,t,r){let a=this.defaultQueryOptions({queryKey:e}),i=this.#a.get(a.queryHash),s=i?.state.data,o=(0,n.SE)(t,s);if(void 0!==o)return this.#a.build(this,a).setData(o,{...r,manual:!0})}setQueriesData(e,t,r){return i.V.batch(()=>this.getQueryCache().findAll(e).map(({queryKey:e})=>[e,this.setQueryData(e,t,r)]))}getQueryState(e){let t=this.defaultQueryOptions({queryKey:e});return this.#a.get(t.queryHash)?.state}removeQueries(e){let t=this.#a;i.V.batch(()=>{t.findAll(e).forEach(e=>{t.remove(e)})})}resetQueries(e,t){let r=this.#a,n={type:"active",...e};return i.V.batch(()=>(r.findAll(e).forEach(e=>{e.reset()}),this.refetchQueries(n,t)))}cancelQueries(e={},t={}){let r={revert:!0,...t};return Promise.all(i.V.batch(()=>this.#a.findAll(e).map(e=>e.cancel(r)))).then(n.ZT).catch(n.ZT)}invalidateQueries(e={},t={}){return i.V.batch(()=>{if(this.#a.findAll(e).forEach(e=>{e.invalidate()}),"none"===e.refetchType)return Promise.resolve();let r={...e,type:e.refetchType??e.type??"active"};return this.refetchQueries(r,t)})}refetchQueries(e={},t){let r={...t,cancelRefetch:t?.cancelRefetch??!0};return Promise.all(i.V.batch(()=>this.#a.findAll(e).filter(e=>!e.isDisabled()).map(e=>{let t=e.fetch(void 0,r);return r.throwOnError||(t=t.catch(n.ZT)),"paused"===e.state.fetchStatus?Promise.resolve():t}))).then(n.ZT)}fetchQuery(e){let t=this.defaultQueryOptions(e);void 0===t.retry&&(t.retry=!1);let r=this.#a.build(this,t);return r.isStaleByTime(t.staleTime)?r.fetch(t):Promise.resolve(r.state.data)}prefetchQuery(e){return this.fetchQuery(e).then(n.ZT).catch(n.ZT)}fetchInfiniteQuery(e){var t;return e.behavior=(t=e.pages,{onFetch:(e,r)=>{let a=async()=>{let r;let a=e.options,i=e.fetchOptions?.meta?.fetchMore?.direction,s=e.state.data?.pages||[],o=e.state.data?.pageParams||[],u=!1,l=t=>{Object.defineProperty(t,"signal",{enumerable:!0,get:()=>(e.signal.aborted?u=!0:e.signal.addEventListener("abort",()=>{u=!0}),e.signal)})},c=e.options.queryFn&&e.options.queryFn!==n.CN?e.options.queryFn:()=>Promise.reject(Error(`Missing queryFn: '${e.options.queryHash}'`)),h=async(t,r,a)=>{if(u)return Promise.reject();if(null==r&&t.pages.length)return Promise.resolve(t);let i={queryKey:e.queryKey,pageParam:r,direction:a?"backward":"forward",meta:e.options.meta};l(i);let s=await c(i),{maxPages:o}=e.options,d=a?n.Ht:n.VX;return{pages:d(t.pages,s,o),pageParams:d(t.pageParams,r,o)}};if(i&&s.length){let e="backward"===i,t={pages:s,pageParams:o},n=(e?function(e,{pages:t,pageParams:r}){return e.getPreviousPageParam?.(t[0],t,r[0],r)}:d)(a,t);r=await h(t,n,e)}else{r=await h({pages:[],pageParams:[]},o[0]??a.initialPageParam);let e=t??s.length;for(let t=1;t<e;t++){let e=d(a,r);r=await h(r,e)}}return r};e.options.persister?e.fetchFn=()=>e.options.persister?.(a,{queryKey:e.queryKey,meta:e.options.meta,signal:e.signal},r):e.fetchFn=a}}),this.fetchQuery(e)}prefetchInfiniteQuery(e){return this.fetchInfiniteQuery(e).then(n.ZT).catch(n.ZT)}resumePausedMutations(){return c.N.isOnline()?this.#i.resumePausedMutations():Promise.resolve()}getQueryCache(){return this.#a}getMutationCache(){return this.#i}getDefaultOptions(){return this.#s}setDefaultOptions(e){this.#s=e}setQueryDefaults(e,t){this.#o.set((0,n.Ym)(e),{queryKey:e,defaultOptions:t})}getQueryDefaults(e){let t=[...this.#o.values()],r={};return t.forEach(t=>{(0,n.to)(e,t.queryKey)&&(r={...r,...t.defaultOptions})}),r}setMutationDefaults(e,t){this.#u.set((0,n.Ym)(e),{mutationKey:e,defaultOptions:t})}getMutationDefaults(e){let t=[...this.#u.values()],r={};return t.forEach(t=>{(0,n.to)(e,t.mutationKey)&&(r={...r,...t.defaultOptions})}),r}defaultQueryOptions(e){if(e._defaulted)return e;let t={...this.#s.queries,...this.getQueryDefaults(e.queryKey),...e,_defaulted:!0};return t.queryHash||(t.queryHash=(0,n.Rm)(t.queryKey,t)),void 0===t.refetchOnReconnect&&(t.refetchOnReconnect="always"!==t.networkMode),void 0===t.throwOnError&&(t.throwOnError=!!t.suspense),!t.networkMode&&t.persister&&(t.networkMode="offlineFirst"),!0!==t.enabled&&t.queryFn===n.CN&&(t.enabled=!1),t}defaultMutationOptions(e){return e?._defaulted?e:{...this.#s.mutations,...e?.mutationKey&&this.getMutationDefaults(e.mutationKey),...e,_defaulted:!0}}clear(){this.#a.clear(),this.#i.clear()}}}}]);