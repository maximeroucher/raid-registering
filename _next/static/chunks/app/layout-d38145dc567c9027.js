(self.webpackChunk_N_E=self.webpackChunk_N_E||[]).push([[185],{1504:function(e,t,r){Promise.resolve().then(r.bind(r,26003))},1657:function(e,t,r){"use strict";r.d(t,{cn:function(){return n}});var s=r(75504),a=r(51367);function n(){for(var e=arguments.length,t=Array(e),r=0;r<e;r++)t[r]=arguments[r];return(0,a.m6)((0,s.W)(t))}},26003:function(e,t,r){"use strict";r.r(t),r.d(t,{default:function(){return _}});var s=r(57437),a=r(81971),n=r.n(a);r(63385);var o=r(73221),i=r(73582),d=r(47082),u=r(2265),l=r(86736),c=r(57742),f=r(52235),p=r(1657);let m=l.zt,x=u.forwardRef((e,t)=>{let{className:r,...a}=e;return(0,s.jsx)(l.l_,{ref:t,className:(0,p.cn)("fixed top-0 z-[100] flex max-h-screen w-full flex-col-reverse p-4 sm:bottom-0 sm:right-0 sm:top-auto sm:flex-col md:max-w-[420px]",r),...a})});x.displayName=l.l_.displayName;let v=(0,c.j)("group pointer-events-auto relative flex w-full items-center justify-between space-x-4 overflow-hidden rounded-md border p-6 pr-8 shadow-lg transition-all data-[swipe=cancel]:translate-x-0 data-[swipe=end]:translate-x-[var(--radix-toast-swipe-end-x)] data-[swipe=move]:translate-x-[var(--radix-toast-swipe-move-x)] data-[swipe=move]:transition-none data-[state=open]:animate-in data-[state=closed]:animate-out data-[swipe=end]:animate-out data-[state=closed]:fade-out-80 data-[state=closed]:slide-out-to-right-full data-[state=open]:slide-in-from-top-full data-[state=open]:sm:slide-in-from-bottom-full",{variants:{variant:{default:"border bg-background text-foreground",destructive:"destructive group border-destructive bg-destructive text-destructive-foreground"}},defaultVariants:{variant:"default"}}),g=u.forwardRef((e,t)=>{let{className:r,variant:a,...n}=e;return(0,s.jsx)(l.fC,{ref:t,className:(0,p.cn)(v({variant:a}),r),...n})});g.displayName=l.fC.displayName,u.forwardRef((e,t)=>{let{className:r,...a}=e;return(0,s.jsx)(l.aU,{ref:t,className:(0,p.cn)("inline-flex h-8 shrink-0 items-center justify-center rounded-md border bg-transparent px-3 text-sm font-medium ring-offset-background transition-colors hover:bg-secondary focus:outline-none focus:ring-2 focus:ring-ring focus:ring-offset-2 disabled:pointer-events-none disabled:opacity-50 group-[.destructive]:border-muted/40 group-[.destructive]:hover:border-destructive/30 group-[.destructive]:hover:bg-destructive group-[.destructive]:hover:text-destructive-foreground group-[.destructive]:focus:ring-destructive",r),...a})}).displayName=l.aU.displayName;let h=u.forwardRef((e,t)=>{let{className:r,...a}=e;return(0,s.jsx)(l.x8,{ref:t,className:(0,p.cn)("absolute right-2 top-2 rounded-md p-1 text-foreground/50 opacity-0 transition-opacity hover:text-foreground focus:opacity-100 focus:outline-none focus:ring-2 group-hover:opacity-100 group-[.destructive]:text-red-300 group-[.destructive]:hover:text-red-50 group-[.destructive]:focus:ring-red-400 group-[.destructive]:focus:ring-offset-red-600",r),"toast-close":"",...a,children:(0,s.jsx)(f.Z,{className:"h-4 w-4"})})});h.displayName=l.x8.displayName;let y=u.forwardRef((e,t)=>{let{className:r,...a}=e;return(0,s.jsx)(l.Dx,{ref:t,className:(0,p.cn)("text-sm font-semibold",r),...a})});y.displayName=l.Dx.displayName;let b=u.forwardRef((e,t)=>{let{className:r,...a}=e;return(0,s.jsx)(l.dk,{ref:t,className:(0,p.cn)("text-sm opacity-90",r),...a})});b.displayName=l.dk.displayName;var N=r(77147);function w(){let{toasts:e}=(0,N.pm)();return(0,s.jsxs)(m,{children:[e.map(function(e){let{id:t,title:r,description:a,action:n,...o}=e;return(0,s.jsxs)(g,{...o,children:[(0,s.jsxs)("div",{className:"grid gap-1",children:[r&&(0,s.jsx)(y,{children:r}),a&&(0,s.jsx)(b,{children:a})]}),n,(0,s.jsx)(h,{})]},t)}),(0,s.jsx)(x,{})]})}var j=r(64848);function S(e){let{children:t,...r}=e;return(0,s.jsx)(j.f,{...r,children:t})}let T=new o.S({queryCache:new i.t({onError:e=>{console.error(e),(0,N.Am)({title:"Erreur",description:"Une erreur est survenue, veuillez r\xe9essayer plus tard",variant:"destructive"})}})});function _(e){let{children:t}=e;return(0,s.jsx)("html",{lang:"en",children:(0,s.jsx)("body",{className:n().className,children:(0,s.jsx)(S,{attribute:"class",defaultTheme:"light",enableSystem:!0,disableTransitionOnChange:!0,children:(0,s.jsx)(u.Suspense,{fallback:(0,s.jsx)("div",{children:"Loading..."}),children:(0,s.jsxs)(d.aH,{client:T,children:[t,(0,s.jsx)(w,{})]})})})})})}},77147:function(e,t,r){"use strict";r.d(t,{Am:function(){return c},pm:function(){return f}});var s=r(2265);let a=0,n=new Map,o=e=>{if(n.has(e))return;let t=setTimeout(()=>{n.delete(e),l({type:"REMOVE_TOAST",toastId:e})},1e6);n.set(e,t)},i=(e,t)=>{switch(t.type){case"ADD_TOAST":return{...e,toasts:[t.toast,...e.toasts].slice(0,1)};case"UPDATE_TOAST":return{...e,toasts:e.toasts.map(e=>e.id===t.toast.id?{...e,...t.toast}:e)};case"DISMISS_TOAST":{let{toastId:r}=t;return r?o(r):e.toasts.forEach(e=>{o(e.id)}),{...e,toasts:e.toasts.map(e=>e.id===r||void 0===r?{...e,open:!1}:e)}}case"REMOVE_TOAST":if(void 0===t.toastId)return{...e,toasts:[]};return{...e,toasts:e.toasts.filter(e=>e.id!==t.toastId)}}},d=[],u={toasts:[]};function l(e){u=i(u,e),d.forEach(e=>{e(u)})}function c(e){let{...t}=e,r=(a=(a+1)%Number.MAX_SAFE_INTEGER).toString(),s=()=>l({type:"DISMISS_TOAST",toastId:r});return l({type:"ADD_TOAST",toast:{...t,id:r,open:!0,onOpenChange:e=>{e||s()}}}),{id:r,dismiss:s,update:e=>l({type:"UPDATE_TOAST",toast:{...e,id:r}})}}function f(){let[e,t]=s.useState(u);return s.useEffect(()=>(d.push(t),()=>{let e=d.indexOf(t);e>-1&&d.splice(e,1)}),[e]),{...e,toast:c,dismiss:e=>l({type:"DISMISS_TOAST",toastId:e})}}},63385:function(){}},function(e){e.O(0,[470,169,586,971,69,744],function(){return e(e.s=1504)}),_N_E=e.O()}]);