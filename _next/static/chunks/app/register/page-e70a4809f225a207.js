(self.webpackChunk_N_E=self.webpackChunk_N_E||[]).push([[11],{93941:function(e,t,r){Promise.resolve().then(r.bind(r,67659))},67659:function(e,t,r){"use strict";r.r(t),r.d(t,{default:function(){return S}});var s=r(57437),n=r(2265),i=r(575),a=r(15671),l=r(22782),o=r(8792),c=r(21270),d=r(82670),u=r(30248),m=r(80244),f=r(67166),x=r(1800),p=r(425),v=r(68855);let b=()=>{let{token:e}=(0,v.a)(),{mutate:t,isPending:r}=(0,p.txP)(),{mutate:s,isPending:n}=(0,p.g5e)();return{registerAccount:(r,s)=>{t({headers:{Authorization:"Bearer ".concat(e)},body:{email:r,accept_external:!0}},{onSettled:()=>{s()}})},isRegisteringLoading:r,activateAccount:(t,r)=>{s({headers:{Authorization:"Bearer ".concat(e)},body:t},{onSettled:()=>{r()}})},isActivationLoading:n}};var h=r(77147);let j=e=>{let{onCodeReceived:t}=e,{registerAccount:r,isRegisteringLoading:n}=b(),p=u.z.object({email:u.z.string({required_error:"Veuillez renseigner votre adresse email"}).email({message:"Veuillez renseigner une adresse email valide"})}),v=(0,d.cI)({resolver:(0,c.F)(p)});return(0,s.jsx)(m.l0,{...v,children:(0,s.jsx)("form",{onSubmit:v.handleSubmit(function(e){r(e.email,()=>{(0,h.Am)({title:"Email envoy\xe9",description:"Un email vous a \xe9t\xe9 envoy\xe9 pour activer votre compte"}),t()})}),children:(0,s.jsx)("div",{className:"flex [&>div]:w-full h-screen",children:(0,s.jsxs)(a.Zb,{className:"rounded-xl border bg-card text-card-foreground shadow max-w-[700px] m-auto text-zinc-700",children:[(0,s.jsxs)(a.Ol,{children:[(0,s.jsx)(a.ll,{className:"text-2xl",children:"Cr\xe9er un compte"}),(0,s.jsx)(a.SZ,{children:"Vous n'avez besoin que de votre email pour commencer"})]}),(0,s.jsxs)(a.aY,{className:"grid gap-4",children:[(0,s.jsx)(f.b,{form:v,name:"email",label:"Email",render:e=>(0,s.jsx)(l.I,{placeholder:"inscription@raid.fr",...e})}),(0,s.jsx)(x.f,{className:"w-full mt-2",isLoading:n,type:"submit",label:"Commencer \xe0 cr\xe9er le compte"}),(0,s.jsxs)("div",{className:"flex flex-row",children:[(0,s.jsxs)("div",{className:"w-full text-center text-sm",children:["Vous avez d\xe9j\xe0 un compte ?"," ",(0,s.jsx)(i.z,{variant:"link",className:"pl-1",type:"button",children:(0,s.jsx)(o.default,{href:"/login",children:"Connectez-vous"})})]}),(0,s.jsxs)("div",{className:"w-full text-center text-sm",children:["Vous avez re\xe7u le code par mail ?"," ",(0,s.jsx)(i.z,{variant:"link",className:"pl-1",onClick:t,type:"button",children:"Continuer"})]})]})]})]})})})})};var g=r(79283),N=r(97988),w=r(47907);let y=e=>{let{onCodeNotReceived:t}=e,{activateAccount:r,isActivationLoading:n}=b(),p=(0,w.useRouter)(),v=u.z.object({activation_code:u.z.string({required_error:"Veuillez renseigner le code d'activation"}).min(8,{message:"Le code d'activation doit contenir 8 caract\xe8res"}),firstname:u.z.string({required_error:"Veuillez renseigner votre pr\xe9nom"}).min(1,{message:"Veuillez renseigner votre pr\xe9nom"}),name:u.z.string({required_error:"Veuillez renseigner votre nom"}).min(1,{message:"Veuillez renseigner votre nom"}),password:u.z.string({required_error:"Veuillez renseigner un mot de passe"}).min(6,{message:"Le mot de passe doit contenir au moins 6 caract\xe8res"})}),j=(0,d.cI)({resolver:(0,c.F)(v)});return(0,s.jsx)(m.l0,{...j,children:(0,s.jsx)("form",{onSubmit:j.handleSubmit(function(e){r({activation_token:e.activation_code,firstname:e.firstname,name:e.name,password:e.password,floor:"Exte"},()=>{(0,h.Am)({title:"Compte cr\xe9\xe9",description:"Votre compte a \xe9t\xe9 cr\xe9\xe9 avec succ\xe8s"}),p.replace("/login")})}),children:(0,s.jsx)("div",{className:"flex [&>div]:w-full h-screen",children:(0,s.jsxs)(a.Zb,{className:"rounded-xl border bg-card text-card-foreground shadow max-w-[700px] m-auto text-zinc-700",children:[(0,s.jsxs)(a.Ol,{children:[(0,s.jsx)(a.ll,{className:"text-xl",children:"Cr\xe9er un compte"}),(0,s.jsx)(a.SZ,{children:"Entrez vos informations pour cr\xe9er un compte"})]}),(0,s.jsx)(a.aY,{children:(0,s.jsxs)("div",{className:"grid gap-4",children:[(0,s.jsx)("div",{className:"grid gap-2 mb-2",children:(0,s.jsx)(f.b,{form:j,name:"activation_code",label:"Code d'activation",render:e=>(0,s.jsx)(l.I,{...e})})}),(0,s.jsx)(g.S,{text:"Informations du compte"}),(0,s.jsxs)("div",{className:"grid grid-cols-2 gap-4 mt-2",children:[(0,s.jsx)(f.b,{form:j,name:"firstname",label:"Pr\xe9nom",render:e=>(0,s.jsx)(l.I,{...e})}),(0,s.jsx)(f.b,{form:j,name:"name",label:"Nom",render:e=>(0,s.jsx)(l.I,{...e})})]}),(0,s.jsx)(f.b,{form:j,name:"password",label:"Mot de passe",render:e=>(0,s.jsx)(N.W,{...e})}),(0,s.jsx)(x.f,{type:"submit",className:"w-full mt-2",label:"Cr\xe9er le compte",isLoading:n}),(0,s.jsxs)("div",{className:"flex flex-row",children:[(0,s.jsxs)("div",{className:"w-full text-center text-sm",children:["Vous avez d\xe9j\xe0 un compte ?"," ",(0,s.jsx)(i.z,{variant:"link",className:"pl-1",type:"button",children:(0,s.jsx)(o.default,{href:"/login",children:"Connectez-vous"})})]}),(0,s.jsxs)("div",{className:"w-full text-center text-sm",children:["Vous n'avez pas re\xe7u le code par mail ? ",(0,s.jsx)(i.z,{variant:"link",className:"pl-1",onClick:t,type:"button",children:"Revenir"})]})]})]})})]})})})})};var S=()=>{let[e,t]=n.useState(!0);return e?(0,s.jsx)(j,{onCodeReceived:()=>t(!1)}):(0,s.jsx)(y,{onCodeNotReceived:()=>t(!0)})}},67166:function(e,t,r){"use strict";r.d(t,{b:function(){return i}});var s=r(57437),n=r(80244);let i=e=>{let{form:t,label:r,name:i,render:a}=e;return(0,s.jsx)(n.Wi,{control:t.control,name:i,render:e=>{let{field:t}=e;return(0,s.jsxs)(n.xJ,{className:"grid gap-2",children:[(0,s.jsx)(n.lX,{children:r}),(0,s.jsx)(n.NI,{children:a(t)}),(0,s.jsx)(n.zG,{})]})}})}},80244:function(e,t,r){"use strict";r.d(t,{NI:function(){return v},Wi:function(){return u},l0:function(){return c},lX:function(){return p},xJ:function(){return x},zG:function(){return b}});var s=r(57437),n=r(2265),i=r(59143),a=r(82670),l=r(1657),o=r(12647);let c=a.RV,d=n.createContext({}),u=e=>{let{...t}=e;return(0,s.jsx)(d.Provider,{value:{name:t.name},children:(0,s.jsx)(a.Qr,{...t})})},m=()=>{let e=n.useContext(d),t=n.useContext(f),{getFieldState:r,formState:s}=(0,a.Gc)(),i=r(e.name,s);if(!e)throw Error("useFormField should be used within <FormField>");let{id:l}=t;return{id:l,name:e.name,formItemId:"".concat(l,"-form-item"),formDescriptionId:"".concat(l,"-form-item-description"),formMessageId:"".concat(l,"-form-item-message"),...i}},f=n.createContext({}),x=n.forwardRef((e,t)=>{let{className:r,...i}=e,a=n.useId();return(0,s.jsx)(f.Provider,{value:{id:a},children:(0,s.jsx)("div",{ref:t,className:(0,l.cn)("space-y-2",r),...i})})});x.displayName="FormItem";let p=n.forwardRef((e,t)=>{let{className:r,...n}=e,{error:i,formItemId:a}=m();return(0,s.jsx)(o._,{ref:t,className:(0,l.cn)(i&&"text-destructive",r),htmlFor:a,...n})});p.displayName="FormLabel";let v=n.forwardRef((e,t)=>{let{...r}=e,{error:n,formItemId:a,formDescriptionId:l,formMessageId:o}=m();return(0,s.jsx)(i.g7,{ref:t,id:a,"aria-describedby":n?"".concat(l," ").concat(o):"".concat(l),"aria-invalid":!!n,...r})});v.displayName="FormControl",n.forwardRef((e,t)=>{let{className:r,...n}=e,{formDescriptionId:i}=m();return(0,s.jsx)("p",{ref:t,id:i,className:(0,l.cn)("text-sm text-muted-foreground",r),...n})}).displayName="FormDescription";let b=n.forwardRef((e,t)=>{let{className:r,children:n,...i}=e,{error:a,formMessageId:o}=m(),c=a?String(null==a?void 0:a.message):n;return c?(0,s.jsx)("p",{ref:t,id:o,className:(0,l.cn)("text-sm font-medium text-destructive",r),...i,children:c}):null});b.displayName="FormMessage"},22782:function(e,t,r){"use strict";r.d(t,{I:function(){return a}});var s=r(57437),n=r(2265),i=r(1657);let a=n.forwardRef((e,t)=>{let{className:r,type:n,...a}=e;return(0,s.jsx)("input",{type:n,className:(0,i.cn)("flex h-10 w-full rounded-md border border-input bg-background px-3 py-2 text-sm ring-offset-background file:border-0 file:bg-transparent file:text-sm file:font-medium placeholder:text-muted-foreground focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:cursor-not-allowed disabled:opacity-50",r),ref:t,...a})});a.displayName="Input"},12647:function(e,t,r){"use strict";r.d(t,{_:function(){return c}});var s=r(57437),n=r(2265),i=r(24602),a=r(57742),l=r(1657);let o=(0,a.j)("text-sm font-medium leading-none peer-disabled:cursor-not-allowed peer-disabled:opacity-70"),c=n.forwardRef((e,t)=>{let{className:r,...n}=e;return(0,s.jsx)(i.f,{ref:t,className:(0,l.cn)(o(),r),...n})});c.displayName=i.f.displayName},1800:function(e,t,r){"use strict";r.d(t,{f:function(){return a}});var s=r(57437),n=r(62177),i=r(575);let a=e=>{let{isLoading:t,type:r,onClick:a,label:l,className:o,variant:c="default"}=e;return(0,s.jsx)(i.z,{variant:c,type:r,onClick:a,className:o,disabled:t,children:t?(0,s.jsx)(n.BGW,{className:"mr-2 h-4 w-4 animate-spin"}):l})}},97988:function(e,t,r){"use strict";r.d(t,{W:function(){return l}});var s=r(57437),n=r(2265),i=r(29908),a=r(1657);let l=n.forwardRef((e,t)=>{let{className:r,type:l,...o}=e,[c,d]=n.useState(!1),u=()=>d(!c);return(0,s.jsxs)("div",{className:"relative",children:[(0,s.jsx)("input",{type:c?"text":"password",className:(0,a.cn)("flex h-10 w-full rounded-md border border-input bg-background px-3 py-2 text-sm ring-offset-background file:border-0 file:bg-transparent file:text-sm file:font-medium placeholder:text-muted-foreground focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:cursor-not-allowed disabled:opacity-50",r),ref:t,...o}),(0,s.jsx)("div",{className:"absolute inset-y-0 right-0 flex cursor-pointer items-center pr-3 text-gray-400",children:c?(0,s.jsx)(i.Rbo,{className:"h-4 w-4",onClick:u}):(0,s.jsx)(i.MBb,{className:"h-4 w-4",onClick:u})})]})});l.displayName="Input"},79283:function(e,t,r){"use strict";r.d(t,{S:function(){return n}});var s=r(57437);r(2265);let n=e=>{let{text:t}=e;return(0,s.jsxs)("div",{className:"relative",children:[(0,s.jsx)("div",{className:"absolute inset-0 flex items-center",children:(0,s.jsx)("span",{className:"w-full border-t"})}),(0,s.jsx)("div",{className:"relative flex justify-center text-xs uppercase",children:(0,s.jsx)("span",{className:"bg-background px-2 text-muted-foreground",children:t})})]})};n.displayName="TextSeparator"},77147:function(e,t,r){"use strict";r.d(t,{Am:function(){return u},pm:function(){return m}});var s=r(2265);let n=0,i=new Map,a=e=>{if(i.has(e))return;let t=setTimeout(()=>{i.delete(e),d({type:"REMOVE_TOAST",toastId:e})},1e6);i.set(e,t)},l=(e,t)=>{switch(t.type){case"ADD_TOAST":return{...e,toasts:[t.toast,...e.toasts].slice(0,1)};case"UPDATE_TOAST":return{...e,toasts:e.toasts.map(e=>e.id===t.toast.id?{...e,...t.toast}:e)};case"DISMISS_TOAST":{let{toastId:r}=t;return r?a(r):e.toasts.forEach(e=>{a(e.id)}),{...e,toasts:e.toasts.map(e=>e.id===r||void 0===r?{...e,open:!1}:e)}}case"REMOVE_TOAST":if(void 0===t.toastId)return{...e,toasts:[]};return{...e,toasts:e.toasts.filter(e=>e.id!==t.toastId)}}},o=[],c={toasts:[]};function d(e){c=l(c,e),o.forEach(e=>{e(c)})}function u(e){let{...t}=e,r=(n=(n+1)%Number.MAX_SAFE_INTEGER).toString(),s=()=>d({type:"DISMISS_TOAST",toastId:r});return d({type:"ADD_TOAST",toast:{...t,id:r,open:!0,onOpenChange:e=>{e||s()}}}),{id:r,dismiss:s,update:e=>d({type:"UPDATE_TOAST",toast:{...e,id:r}})}}function m(){let[e,t]=s.useState(c);return s.useEffect(()=>(o.push(t),()=>{let e=o.indexOf(t);e>-1&&o.splice(e,1)}),[e]),{...e,toast:u,dismiss:e=>d({type:"DISMISS_TOAST",toastId:e})}}}},function(e){e.O(0,[422,310,628,972,631,594,962,971,69,744],function(){return e(e.s=93941)}),_N_E=e.O()}]);