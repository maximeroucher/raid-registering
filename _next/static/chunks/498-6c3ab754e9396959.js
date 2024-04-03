"use strict";(self.webpackChunk_N_E=self.webpackChunk_N_E||[]).push([[498],{843:function(e,t,n){n.d(t,{Z:function(){return s}});var r=n(2265),o={xmlns:"http://www.w3.org/2000/svg",width:24,height:24,viewBox:"0 0 24 24",fill:"none",stroke:"currentColor",strokeWidth:2,strokeLinecap:"round",strokeLinejoin:"round"};/**
 * @license lucide-react v0.358.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */let i=e=>e.replace(/([a-z0-9])([A-Z])/g,"$1-$2").toLowerCase(),s=(e,t)=>{let n=(0,r.forwardRef)(({color:n="currentColor",size:s=24,strokeWidth:a=2,absoluteStrokeWidth:u,className:l="",children:c,...d},f)=>(0,r.createElement)("svg",{ref:f,...o,width:s,height:s,stroke:n,strokeWidth:u?24*Number(a)/Number(s):a,className:["lucide",`lucide-${i(e)}`,l].join(" "),...d},[...t.map(([e,t])=>(0,r.createElement)(e,t)),...Array.isArray(c)?c:[c]]));return n.displayName=`${e}`,n}},2235:function(e,t,n){n.d(t,{Z:function(){return r}});/**
 * @license lucide-react v0.358.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */let r=(0,n(843).Z)("X",[["path",{d:"M18 6 6 18",key:"1bl5f8"}],["path",{d:"m6 6 12 12",key:"d8bk6v"}]])},4991:function(e,t,n){n.d(t,{M:function(){return r}});function r(e,t,{checkForDefaultPrevented:n=!0}={}){return function(r){if(null==e||e(r),!1===n||!r.defaultPrevented)return null==t?void 0:t(r)}}},7533:function(e,t,n){n.d(t,{B:function(){return a}});var r=n(2265),o=n(4104),i=n(1266),s=n(9143);function a(e){let t=e+"CollectionProvider",[n,a]=(0,o.b)(t),[u,l]=n(t,{collectionRef:{current:null},itemMap:new Map}),c=e+"CollectionSlot",d=r.forwardRef((e,t)=>{let{scope:n,children:o}=e,a=l(c,n),u=(0,i.e)(t,a.collectionRef);return r.createElement(s.g7,{ref:u},o)}),f=e+"CollectionItemSlot",m="data-radix-collection-item";return[{Provider:e=>{let{scope:t,children:n}=e,o=r.useRef(null),i=r.useRef(new Map).current;return r.createElement(u,{scope:t,itemMap:i,collectionRef:o},n)},Slot:d,ItemSlot:r.forwardRef((e,t)=>{let{scope:n,children:o,...a}=e,u=r.useRef(null),c=(0,i.e)(t,u),d=l(f,n);return r.useEffect(()=>(d.itemMap.set(u,{ref:u,...a}),()=>void d.itemMap.delete(u))),r.createElement(s.g7,{[m]:"",ref:c},o)})},function(t){let n=l(e+"CollectionConsumer",t);return r.useCallback(()=>{let e=n.collectionRef.current;if(!e)return[];let t=Array.from(e.querySelectorAll(`[${m}]`));return Array.from(n.itemMap.values()).sort((e,n)=>t.indexOf(e.ref.current)-t.indexOf(n.ref.current))},[n.collectionRef,n.itemMap])},a]}},4104:function(e,t,n){n.d(t,{b:function(){return i},k:function(){return o}});var r=n(2265);function o(e,t){let n=(0,r.createContext)(t);function o(e){let{children:t,...o}=e,i=(0,r.useMemo)(()=>o,Object.values(o));return(0,r.createElement)(n.Provider,{value:i},t)}return o.displayName=e+"Provider",[o,function(o){let i=(0,r.useContext)(n);if(i)return i;if(void 0!==t)return t;throw Error(`\`${o}\` must be used within \`${e}\``)}]}function i(e,t=[]){let n=[],o=()=>{let t=n.map(e=>(0,r.createContext)(e));return function(n){let o=(null==n?void 0:n[e])||t;return(0,r.useMemo)(()=>({[`__scope${e}`]:{...n,[e]:o}}),[n,o])}};return o.scopeName=e,[function(t,o){let i=(0,r.createContext)(o),s=n.length;function a(t){let{scope:n,children:o,...a}=t,u=(null==n?void 0:n[e][s])||i,l=(0,r.useMemo)(()=>a,Object.values(a));return(0,r.createElement)(u.Provider,{value:l},o)}return n=[...n,o],a.displayName=t+"Provider",[a,function(n,a){let u=(null==a?void 0:a[e][s])||i,l=(0,r.useContext)(u);if(l)return l;if(void 0!==o)return o;throw Error(`\`${n}\` must be used within \`${t}\``)}]},function(...e){let t=e[0];if(1===e.length)return t;let n=()=>{let n=e.map(e=>({useScope:e(),scopeName:e.scopeName}));return function(e){let o=n.reduce((t,{useScope:n,scopeName:r})=>{let o=n(e)[`__scope${r}`];return{...t,...o}},{});return(0,r.useMemo)(()=>({[`__scope${t.scopeName}`]:o}),[o])}};return n.scopeName=t.scopeName,n}(o,...t)]}},1260:function(e,t,n){let r;n.d(t,{I0:function(){return y},XB:function(){return f},fC:function(){return p}});var o=n(2110),i=n(2265),s=n(4991),a=n(9586),u=n(1266),l=n(9830);let c="dismissableLayer.update",d=(0,i.createContext)({layers:new Set,layersWithOutsidePointerEventsDisabled:new Set,branches:new Set}),f=(0,i.forwardRef)((e,t)=>{var n;let{disableOutsidePointerEvents:f=!1,onEscapeKeyDown:m,onPointerDownOutside:p,onFocusOutside:y,onInteractOutside:b,onDismiss:E,...w}=e,g=(0,i.useContext)(d),[C,T]=(0,i.useState)(null),S=null!==(n=null==C?void 0:C.ownerDocument)&&void 0!==n?n:null==globalThis?void 0:globalThis.document,[,N]=(0,i.useState)({}),O=(0,u.e)(t,e=>T(e)),M=Array.from(g.layers),[P]=[...g.layersWithOutsidePointerEventsDisabled].slice(-1),k=M.indexOf(P),x=C?M.indexOf(C):-1,L=g.layersWithOutsidePointerEventsDisabled.size>0,R=x>=k,D=function(e,t=null==globalThis?void 0:globalThis.document){let n=(0,l.W)(e),r=(0,i.useRef)(!1),o=(0,i.useRef)(()=>{});return(0,i.useEffect)(()=>{let e=e=>{if(e.target&&!r.current){let r={originalEvent:e};function i(){v("dismissableLayer.pointerDownOutside",n,r,{discrete:!0})}"touch"===e.pointerType?(t.removeEventListener("click",o.current),o.current=i,t.addEventListener("click",o.current,{once:!0})):i()}else t.removeEventListener("click",o.current);r.current=!1},i=window.setTimeout(()=>{t.addEventListener("pointerdown",e)},0);return()=>{window.clearTimeout(i),t.removeEventListener("pointerdown",e),t.removeEventListener("click",o.current)}},[t,n]),{onPointerDownCapture:()=>r.current=!0}}(e=>{let t=e.target,n=[...g.branches].some(e=>e.contains(t));!R||n||(null==p||p(e),null==b||b(e),e.defaultPrevented||null==E||E())},S),A=function(e,t=null==globalThis?void 0:globalThis.document){let n=(0,l.W)(e),r=(0,i.useRef)(!1);return(0,i.useEffect)(()=>{let e=e=>{e.target&&!r.current&&v("dismissableLayer.focusOutside",n,{originalEvent:e},{discrete:!1})};return t.addEventListener("focusin",e),()=>t.removeEventListener("focusin",e)},[t,n]),{onFocusCapture:()=>r.current=!0,onBlurCapture:()=>r.current=!1}}(e=>{let t=e.target;[...g.branches].some(e=>e.contains(t))||(null==y||y(e),null==b||b(e),e.defaultPrevented||null==E||E())},S);return!function(e,t=null==globalThis?void 0:globalThis.document){let n=(0,l.W)(e);(0,i.useEffect)(()=>{let e=e=>{"Escape"===e.key&&n(e)};return t.addEventListener("keydown",e),()=>t.removeEventListener("keydown",e)},[n,t])}(e=>{x!==g.layers.size-1||(null==m||m(e),!e.defaultPrevented&&E&&(e.preventDefault(),E()))},S),(0,i.useEffect)(()=>{if(C)return f&&(0===g.layersWithOutsidePointerEventsDisabled.size&&(r=S.body.style.pointerEvents,S.body.style.pointerEvents="none"),g.layersWithOutsidePointerEventsDisabled.add(C)),g.layers.add(C),h(),()=>{f&&1===g.layersWithOutsidePointerEventsDisabled.size&&(S.body.style.pointerEvents=r)}},[C,S,f,g]),(0,i.useEffect)(()=>()=>{C&&(g.layers.delete(C),g.layersWithOutsidePointerEventsDisabled.delete(C),h())},[C,g]),(0,i.useEffect)(()=>{let e=()=>N({});return document.addEventListener(c,e),()=>document.removeEventListener(c,e)},[]),(0,i.createElement)(a.WV.div,(0,o.Z)({},w,{ref:O,style:{pointerEvents:L?R?"auto":"none":void 0,...e.style},onFocusCapture:(0,s.M)(e.onFocusCapture,A.onFocusCapture),onBlurCapture:(0,s.M)(e.onBlurCapture,A.onBlurCapture),onPointerDownCapture:(0,s.M)(e.onPointerDownCapture,D.onPointerDownCapture)}))}),m=(0,i.forwardRef)((e,t)=>{let n=(0,i.useContext)(d),r=(0,i.useRef)(null),s=(0,u.e)(t,r);return(0,i.useEffect)(()=>{let e=r.current;if(e)return n.branches.add(e),()=>{n.branches.delete(e)}},[n.branches]),(0,i.createElement)(a.WV.div,(0,o.Z)({},e,{ref:s}))});function h(){let e=new CustomEvent(c);document.dispatchEvent(e)}function v(e,t,n,{discrete:r}){let o=n.originalEvent.target,i=new CustomEvent(e,{bubbles:!1,cancelable:!0,detail:n});t&&o.addEventListener(e,t,{once:!0}),r?(0,a.jH)(o,i):o.dispatchEvent(i)}let p=f,y=m},7881:function(e,t,n){n.d(t,{h:function(){return a}});var r=n(2110),o=n(2265),i=n(4887),s=n(9586);let a=(0,o.forwardRef)((e,t)=>{var n;let{container:a=null==globalThis?void 0:null===(n=globalThis.document)||void 0===n?void 0:n.body,...u}=e;return a?i.createPortal((0,o.createElement)(s.WV.div,(0,r.Z)({},u,{ref:t})),a):null})},2642:function(e,t,n){n.d(t,{z:function(){return a}});var r=n(2265),o=n(4887),i=n(1266),s=n(2618);let a=e=>{let{present:t,children:n}=e,a=function(e){var t,n;let[i,a]=(0,r.useState)(),l=(0,r.useRef)({}),c=(0,r.useRef)(e),d=(0,r.useRef)("none"),[f,m]=(t=e?"mounted":"unmounted",n={mounted:{UNMOUNT:"unmounted",ANIMATION_OUT:"unmountSuspended"},unmountSuspended:{MOUNT:"mounted",ANIMATION_END:"unmounted"},unmounted:{MOUNT:"mounted"}},(0,r.useReducer)((e,t)=>{let r=n[e][t];return null!=r?r:e},t));return(0,r.useEffect)(()=>{let e=u(l.current);d.current="mounted"===f?e:"none"},[f]),(0,s.b)(()=>{let t=l.current,n=c.current;if(n!==e){let r=d.current,o=u(t);e?m("MOUNT"):"none"===o||(null==t?void 0:t.display)==="none"?m("UNMOUNT"):n&&r!==o?m("ANIMATION_OUT"):m("UNMOUNT"),c.current=e}},[e,m]),(0,s.b)(()=>{if(i){let e=e=>{let t=u(l.current).includes(e.animationName);e.target===i&&t&&(0,o.flushSync)(()=>m("ANIMATION_END"))},t=e=>{e.target===i&&(d.current=u(l.current))};return i.addEventListener("animationstart",t),i.addEventListener("animationcancel",e),i.addEventListener("animationend",e),()=>{i.removeEventListener("animationstart",t),i.removeEventListener("animationcancel",e),i.removeEventListener("animationend",e)}}m("ANIMATION_END")},[i,m]),{isPresent:["mounted","unmountSuspended"].includes(f),ref:(0,r.useCallback)(e=>{e&&(l.current=getComputedStyle(e)),a(e)},[])}}(t),l="function"==typeof n?n({present:a.isPresent}):r.Children.only(n),c=(0,i.e)(a.ref,l.ref);return"function"==typeof n||a.isPresent?(0,r.cloneElement)(l,{ref:c}):null};function u(e){return(null==e?void 0:e.animationName)||"none"}a.displayName="Presence"},9830:function(e,t,n){n.d(t,{W:function(){return o}});var r=n(2265);function o(e){let t=(0,r.useRef)(e);return(0,r.useEffect)(()=>{t.current=e}),(0,r.useMemo)(()=>(...e)=>{var n;return null===(n=t.current)||void 0===n?void 0:n.call(t,...e)},[])}},9310:function(e,t,n){n.d(t,{T:function(){return i}});var r=n(2265),o=n(9830);function i({prop:e,defaultProp:t,onChange:n=()=>{}}){let[i,s]=function({defaultProp:e,onChange:t}){let n=(0,r.useState)(e),[i]=n,s=(0,r.useRef)(i),a=(0,o.W)(t);return(0,r.useEffect)(()=>{s.current!==i&&(a(i),s.current=i)},[i,s,a]),n}({defaultProp:t,onChange:n}),a=void 0!==e,u=a?e:i,l=(0,o.W)(n);return[u,(0,r.useCallback)(t=>{if(a){let n="function"==typeof t?t(e):t;n!==e&&l(n)}else s(t)},[a,e,s,l])]}},2618:function(e,t,n){n.d(t,{b:function(){return o}});var r=n(2265);let o=(null==globalThis?void 0:globalThis.document)?r.useLayoutEffect:()=>{}},1780:function(e,t,n){n.d(t,{T:function(){return s}});var r=n(2110),o=n(2265),i=n(9586);let s=(0,o.forwardRef)((e,t)=>(0,o.createElement)(i.WV.span,(0,r.Z)({},e,{ref:t,style:{position:"absolute",border:0,width:1,height:1,padding:0,margin:-1,overflow:"hidden",clip:"rect(0, 0, 0, 0)",whiteSpace:"nowrap",wordWrap:"normal",...e.style}})))},1793:function(e,t,n){n.d(t,{R:function(){return a},m:function(){return s}});var r=n(5139),o=n(2041),i=n(326),s=class extends o.F{#e;#t;#n;#r;constructor(e){super(),this.mutationId=e.mutationId,this.#t=e.defaultOptions,this.#n=e.mutationCache,this.#e=[],this.state=e.state||a(),this.setOptions(e.options),this.scheduleGc()}setOptions(e){this.options={...this.#t,...e},this.updateGcTime(this.options.gcTime)}get meta(){return this.options.meta}addObserver(e){this.#e.includes(e)||(this.#e.push(e),this.clearGcTimeout(),this.#n.notify({type:"observerAdded",mutation:this,observer:e}))}removeObserver(e){this.#e=this.#e.filter(t=>t!==e),this.scheduleGc(),this.#n.notify({type:"observerRemoved",mutation:this,observer:e})}optionalRemove(){this.#e.length||("pending"===this.state.status?this.scheduleGc():this.#n.remove(this))}continue(){return this.#r?.continue()??this.execute(this.state.variables)}async execute(e){let t="pending"===this.state.status;try{if(!t){this.#o({type:"pending",variables:e}),await this.#n.config.onMutate?.(e,this);let t=await this.options.onMutate?.(e);t!==this.state.context&&this.#o({type:"pending",context:t,variables:e})}let n=await (this.#r=(0,i.Mz)({fn:()=>this.options.mutationFn?this.options.mutationFn(e):Promise.reject(Error("No mutationFn found")),onFail:(e,t)=>{this.#o({type:"failed",failureCount:e,error:t})},onPause:()=>{this.#o({type:"pause"})},onContinue:()=>{this.#o({type:"continue"})},retry:this.options.retry??0,retryDelay:this.options.retryDelay,networkMode:this.options.networkMode}),this.#r.promise);return await this.#n.config.onSuccess?.(n,e,this.state.context,this),await this.options.onSuccess?.(n,e,this.state.context),await this.#n.config.onSettled?.(n,null,this.state.variables,this.state.context,this),await this.options.onSettled?.(n,null,e,this.state.context),this.#o({type:"success",data:n}),n}catch(t){try{throw await this.#n.config.onError?.(t,e,this.state.context,this),await this.options.onError?.(t,e,this.state.context),await this.#n.config.onSettled?.(void 0,t,this.state.variables,this.state.context,this),await this.options.onSettled?.(void 0,t,e,this.state.context),t}finally{this.#o({type:"error",error:t})}}}#o(e){this.state=(t=>{switch(e.type){case"failed":return{...t,failureCount:e.failureCount,failureReason:e.error};case"pause":return{...t,isPaused:!0};case"continue":return{...t,isPaused:!1};case"pending":return{...t,context:e.context,data:void 0,failureCount:0,failureReason:null,error:null,isPaused:!(0,i.Kw)(this.options.networkMode),status:"pending",variables:e.variables,submittedAt:Date.now()};case"success":return{...t,data:e.data,failureCount:0,failureReason:null,error:null,status:"success",isPaused:!1};case"error":return{...t,data:void 0,error:e.error,failureCount:t.failureCount+1,failureReason:e.error,isPaused:!1,status:"error"}}})(this.state),r.V.batch(()=>{this.#e.forEach(t=>{t.onMutationUpdate(e)}),this.#n.notify({mutation:this,type:"updated",action:e})})}};function a(){return{context:void 0,data:void 0,error:null,failureCount:0,failureReason:null,isPaused:!1,status:"idle",variables:void 0,submittedAt:0}}},4848:function(e,t,n){n.d(t,{F:function(){return l},f:function(){return c}});var r=n(2265),o=["light","dark"],i="(prefers-color-scheme: dark)",s="undefined"==typeof window,a=r.createContext(void 0),u={setTheme:e=>{},themes:[]},l=()=>{var e;return null!=(e=r.useContext(a))?e:u},c=e=>r.useContext(a)?e.children:r.createElement(f,{...e}),d=["light","dark"],f=e=>{let{forcedTheme:t,disableTransitionOnChange:n=!1,enableSystem:s=!0,enableColorScheme:u=!0,storageKey:l="theme",themes:c=d,defaultTheme:f=s?"system":"light",attribute:y="data-theme",value:b,children:E,nonce:w}=e,[g,C]=r.useState(()=>h(l,f)),[T,S]=r.useState(()=>h(l)),N=b?Object.values(b):c,O=r.useCallback(e=>{let t=e;if(!t)return;"system"===e&&s&&(t=p());let r=b?b[t]:t,i=n?v():null,a=document.documentElement;if("class"===y?(a.classList.remove(...N),r&&a.classList.add(r)):r?a.setAttribute(y,r):a.removeAttribute(y),u){let e=o.includes(f)?f:null,n=o.includes(t)?t:e;a.style.colorScheme=n}null==i||i()},[]),M=r.useCallback(e=>{let t="function"==typeof e?e(e):e;C(t);try{localStorage.setItem(l,t)}catch(e){}},[t]),P=r.useCallback(e=>{S(p(e)),"system"===g&&s&&!t&&O("system")},[g,t]);r.useEffect(()=>{let e=window.matchMedia(i);return e.addListener(P),P(e),()=>e.removeListener(P)},[P]),r.useEffect(()=>{let e=e=>{e.key===l&&M(e.newValue||f)};return window.addEventListener("storage",e),()=>window.removeEventListener("storage",e)},[M]),r.useEffect(()=>{O(null!=t?t:g)},[t,g]);let k=r.useMemo(()=>({theme:g,setTheme:M,forcedTheme:t,resolvedTheme:"system"===g?T:g,themes:s?[...c,"system"]:c,systemTheme:s?T:void 0}),[g,M,t,T,s,c]);return r.createElement(a.Provider,{value:k},r.createElement(m,{forcedTheme:t,disableTransitionOnChange:n,enableSystem:s,enableColorScheme:u,storageKey:l,themes:c,defaultTheme:f,attribute:y,value:b,children:E,attrs:N,nonce:w}),E)},m=r.memo(e=>{let{forcedTheme:t,storageKey:n,attribute:s,enableSystem:a,enableColorScheme:u,defaultTheme:l,value:c,attrs:d,nonce:f}=e,m="system"===l,h="class"===s?"var d=document.documentElement,c=d.classList;".concat("c.remove(".concat(d.map(e=>"'".concat(e,"'")).join(","),")"),";"):"var d=document.documentElement,n='".concat(s,"',s='setAttribute';"),v=u?(o.includes(l)?l:null)?"if(e==='light'||e==='dark'||!e)d.style.colorScheme=e||'".concat(l,"'"):"if(e==='light'||e==='dark')d.style.colorScheme=e":"",p=function(e){let t=arguments.length>1&&void 0!==arguments[1]&&arguments[1],n=!(arguments.length>2)||void 0===arguments[2]||arguments[2],r=c?c[e]:e,i=t?e+"|| ''":"'".concat(r,"'"),a="";return u&&n&&!t&&o.includes(e)&&(a+="d.style.colorScheme = '".concat(e,"';")),"class"===s?t||r?a+="c.add(".concat(i,")"):a+="null":r&&(a+="d[s](n,".concat(i,")")),a},y=t?"!function(){".concat(h).concat(p(t),"}()"):a?"!function(){try{".concat(h,"var e=localStorage.getItem('").concat(n,"');if('system'===e||(!e&&").concat(m,")){var t='").concat(i,"',m=window.matchMedia(t);if(m.media!==t||m.matches){").concat(p("dark"),"}else{").concat(p("light"),"}}else if(e){").concat(c?"var x=".concat(JSON.stringify(c),";"):"").concat(p(c?"x[e]":"e",!0),"}").concat(m?"":"else{"+p(l,!1,!1)+"}").concat(v,"}catch(e){}}()"):"!function(){try{".concat(h,"var e=localStorage.getItem('").concat(n,"');if(e){").concat(c?"var x=".concat(JSON.stringify(c),";"):"").concat(p(c?"x[e]":"e",!0),"}else{").concat(p(l,!1,!1),";}").concat(v,"}catch(t){}}();");return r.createElement("script",{nonce:f,dangerouslySetInnerHTML:{__html:y}})}),h=(e,t)=>{let n;if(!s){try{n=localStorage.getItem(e)||void 0}catch(e){}return n||t}},v=()=>{let e=document.createElement("style");return e.appendChild(document.createTextNode("*{-webkit-transition:none!important;-moz-transition:none!important;-o-transition:none!important;-ms-transition:none!important;transition:none!important}")),document.head.appendChild(e),()=>{window.getComputedStyle(document.body),setTimeout(()=>{document.head.removeChild(e)},1)}},p=e=>(e||(e=window.matchMedia(i)),e.matches?"dark":"light")}}]);