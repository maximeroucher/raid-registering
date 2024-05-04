(self.webpackChunk_N_E=self.webpackChunk_N_E||[]).push([[425],{24654:function(){},37440:function(e,t,r){"use strict";r.d(t,{cn:function(){return a}});var n=r(44839),o=r(96164);function a(){for(var e=arguments.length,t=Array(e),r=0;r<e;r++)t[r]=arguments[r];return(0,o.m6)((0,n.W)(t))}},84980:function(e,t,r){"use strict";r.d(t,{Uqw:function(){return z},lN0:function(){return L},THV:function(){return es},p5N:function(){return F},B1y:function(){return S},EnB:function(){return _},nzy:function(){return K},gFH:function(){return m},Arm:function(){return el},iEE:function(){return T},fKu:function(){return A},vT9:function(){return H},Zxv:function(){return O},NmN:function(){return X},WUh:function(){return G},UIb:function(){return q},bsA:function(){return Z},TuY:function(){return j},K$j:function(){return er},mzN:function(){return ei},uBv:function(){return ee},RM4:function(){return eo},z2o:function(){return v},NWG:function(){return g},KRD:function(){return k},iqb:function(){return I}});var n=r(40932),o=r(25524);function a(e){return{fetcherOptions:{},queryOptions:{},queryKeyFn:i}}let i=e=>{let t=s(e)?e.path.split("/").filter(Boolean).map(t=>u(t,e.variables.pathParams)):e.path.split("/").filter(Boolean);return l(e)&&t.push(e.variables.queryParams),c(e)&&t.push(e.variables.body),t},u=(e,t)=>e.startsWith("{")&&e.endsWith("}")?t[e.slice(1,-1)]:e,s=e=>!!e.variables.pathParams,c=e=>!!e.variables.body,l=e=>!!e.variables.queryParams;async function d(e){let{url:t,method:r,body:n,headers:o,pathParams:a,queryParams:i,signal:u}=e;try{var s;let e={"Content-Type":"application/json",...o};e["Content-Type"].toLowerCase().includes("multipart/form-data")&&delete e["Content-Type"];let c=await window.fetch("".concat("https://hyperion-3.dev.eclair.ec-lyon.fr").concat(p(t,i,a)),{signal:u,method:r.toUpperCase(),body:n?n instanceof FormData?n:JSON.stringify(n):void 0,headers:e});if(!c.ok){let e;try{e=await c.json()}catch(t){e={status:"unknown",payload:t instanceof Error?"Unexpected error (".concat(t.message,")"):"Unexpected error"}}throw e}if(null===(s=c.headers.get("content-type"))||void 0===s?void 0:s.includes("json"))return await c.json();return await c.blob()}catch(e){throw{name:"unknown",message:e instanceof Error?"Network error (".concat(e.message,")"):"Network error",stack:e}}}let p=function(e){let t=arguments.length>1&&void 0!==arguments[1]?arguments[1]:{},r=arguments.length>2&&void 0!==arguments[2]?arguments[2]:{},n=new URLSearchParams(t).toString();return n&&(n="?".concat(n)),e.replace(/\{\w*\}/g,e=>r[e.slice(1,-1)])+n},f=(e,t)=>d({url:"/users/me",method:"get",...e,signal:t}),m=(e,t)=>{let{fetcherOptions:r,queryOptions:o,queryKeyFn:i}=a(t);return n.a({queryKey:i({path:"/users/me",operationId:"getUsersMe",variables:e}),queryFn:t=>{let{signal:n}=t;return f({...r,...e},n)},...t,...o})},h=(e,t)=>d({url:"/users/create",method:"post",...e,signal:t}),g=e=>{let{fetcherOptions:t}=a();return o.D({mutationFn:e=>h({...t,...e}),...e})},y=(e,t)=>d({url:"/users/activate",method:"post",...e,signal:t}),v=e=>{let{fetcherOptions:t}=a();return o.D({mutationFn:e=>y({...t,...e}),...e})},b=(e,t)=>d({url:"/users/recover",method:"post",...e,signal:t}),k=e=>{let{fetcherOptions:t}=a();return o.D({mutationFn:e=>b({...t,...e}),...e})},w=(e,t)=>d({url:"/users/reset-password",method:"post",...e,signal:t}),I=e=>{let{fetcherOptions:t}=a();return o.D({mutationFn:e=>w({...t,...e}),...e})},x=(e,t)=>d({url:"/raid/participants/{participantId}",method:"get",...e,signal:t}),F=(e,t)=>{let{fetcherOptions:r,queryOptions:o,queryKeyFn:i}=a(t);return n.a({queryKey:i({path:"/raid/participants/{participantId}",operationId:"getRaidParticipantsParticipantId",variables:e}),queryFn:t=>{let{signal:n}=t;return x({...r,...e},n)},...t,...o})},N=(e,t)=>d({url:"/raid/participants/{participantId}",method:"patch",...e,signal:t}),T=e=>{let{fetcherOptions:t}=a();return o.D({mutationFn:e=>N({...t,...e}),...e})},D=(e,t)=>d({url:"/raid/participants",method:"post",...e,signal:t}),q=e=>{let{fetcherOptions:t}=a();return o.D({mutationFn:e=>D({...t,...e}),...e})},R=(e,t)=>d({url:"/raid/teams",method:"get",...e,signal:t}),_=(e,t)=>{let{fetcherOptions:r,queryOptions:o,queryKeyFn:i}=a(t);return n.a({queryKey:i({path:"/raid/teams",operationId:"getRaidTeams",variables:e}),queryFn:t=>{let{signal:n}=t;return R({...r,...e},n)},...t,...o})},C=(e,t)=>d({url:"/raid/teams",method:"post",...e,signal:t}),j=e=>{let{fetcherOptions:t}=a();return o.D({mutationFn:e=>C({...t,...e}),...e})},U=(e,t)=>d({url:"/raid/participants/{participantId}/team",method:"get",...e,signal:t}),S=(e,t)=>{let{fetcherOptions:r,queryOptions:o,queryKeyFn:i}=a(t);return n.a({queryKey:i({path:"/raid/participants/{participantId}/team",operationId:"getRaidParticipantsParticipantIdTeam",variables:e}),queryFn:t=>{let{signal:n}=t;return U({...r,...e},n)},...t,...o})},P=(e,t)=>d({url:"/raid/teams/{teamId}",method:"get",...e,signal:t}),K=(e,t)=>{let{fetcherOptions:r,queryOptions:o,queryKeyFn:i}=a(t);return n.a({queryKey:i({path:"/raid/teams/{teamId}",operationId:"getRaidTeamsTeamId",variables:e}),queryFn:t=>{let{signal:n}=t;return P({...r,...e},n)},...t,...o})},W=(e,t)=>d({url:"/raid/teams/{teamId}",method:"patch",...e,signal:t}),A=e=>{let{fetcherOptions:t}=a();return o.D({mutationFn:e=>W({...t,...e}),...e})},J=(e,t)=>d({url:"/raid/teams/{teamId}",method:"delete",...e,signal:t}),z=e=>{let{fetcherOptions:t}=a();return o.D({mutationFn:e=>J({...t,...e}),...e})},E=(e,t)=>d({url:"/raid/participant/{participantId}/document",method:"post",...e,signal:t}),O=e=>{let{fetcherOptions:t}=a();return o.D({mutationFn:e=>E({...t,...e}),...e})},V=(e,t)=>d({url:"/raid/document/{documentId}",method:"get",...e,signal:t}),L=(e,t)=>{let{fetcherOptions:r,queryOptions:o,queryKeyFn:i}=a(t);return n.a({queryKey:i({path:"/raid/document/{documentId}",operationId:"getRaidDocumentDocumentId",variables:e}),queryFn:t=>{let{signal:n}=t;return V({...r,...e},n)},...t,...o})},B=(e,t)=>d({url:"/raid/document/{documentId}/validate",method:"post",...e,signal:t}),H=e=>{let{fetcherOptions:t}=a();return o.D({mutationFn:e=>B({...t,...e}),...e})},M=(e,t)=>d({url:"/raid/security_file/",method:"post",...e,signal:t}),Z=e=>{let{fetcherOptions:t}=a();return o.D({mutationFn:e=>M({...t,...e}),...e})},Y=(e,t)=>d({url:"/raid/participant/{participantId}/security_file",method:"post",...e,signal:t}),G=e=>{let{fetcherOptions:t}=a();return o.D({mutationFn:e=>Y({...t,...e}),...e})},Q=(e,t)=>d({url:"/raid/participant/{participantId}/payment",method:"post",...e,signal:t}),X=e=>{let{fetcherOptions:t}=a();return o.D({mutationFn:e=>Q({...t,...e}),...e})},$=(e,t)=>d({url:"/raid/teams/{teamId}/invite",method:"post",...e,signal:t}),ee=e=>{let{fetcherOptions:t}=a();return o.D({mutationFn:e=>$({...t,...e}),...e})},et=(e,t)=>d({url:"/raid/teams/join/{token}",method:"post",...e,signal:t}),er=e=>{let{fetcherOptions:t}=a();return o.D({mutationFn:e=>et({...t,...e}),...e})},en=(e,t)=>d({url:"/raid/teams/{teamId}/kick/{participantId}",method:"post",...e,signal:t}),eo=e=>{let{fetcherOptions:t}=a();return o.D({mutationFn:e=>en({...t,...e}),...e})},ea=(e,t)=>d({url:"/raid/teams/merge",method:"post",...e,signal:t}),ei=e=>{let{fetcherOptions:t}=a();return o.D({mutationFn:e=>ea({...t,...e}),...e})},eu=(e,t)=>d({url:"/raid/information",method:"get",...e,signal:t}),es=(e,t)=>{let{fetcherOptions:r,queryOptions:o,queryKeyFn:i}=a(t);return n.a({queryKey:i({path:"/raid/information",operationId:"getRaidInformation",variables:e}),queryFn:t=>{let{signal:n}=t;return eu({...r,...e},n)},...t,...o})},ec=(e,t)=>d({url:"/raid/information",method:"patch",...e,signal:t}),el=e=>{let{fetcherOptions:t}=a();return o.D({mutationFn:e=>ec({...t,...e}),...e})}},89733:function(e,t,r){"use strict";r.d(t,{d:function(){return s},z:function(){return c}});var n=r(57437),o=r(2265),a=r(71538),i=r(12218),u=r(37440);let s=(0,i.j)("inline-flex items-center justify-center whitespace-nowrap rounded-md text-sm font-medium ring-offset-background transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:pointer-events-none disabled:opacity-50",{variants:{variant:{default:"bg-primary text-primary-foreground hover:bg-primary/90",destructive:"bg-red-700 text-destructive-foreground hover:bg-red-700/90",outline:"border border-input bg-background hover:bg-accent hover:text-accent-foreground",secondary:"bg-secondary text-secondary-foreground hover:bg-secondary/80",ghost:"hover:bg-accent hover:text-accent-foreground",link:"text-primary underline-offset-4 hover:underline"},size:{default:"h-10 px-4 py-2",sm:"h-9 rounded-md px-3",lg:"h-11 rounded-md px-8",icon:"h-10 w-10"}},defaultVariants:{variant:"default",size:"default"}}),c=o.forwardRef((e,t)=>{let{className:r,variant:o,size:i,asChild:c=!1,...l}=e,d=c?a.g7:"button";return(0,n.jsx)(d,{className:(0,u.cn)(s({variant:o,size:i,className:r})),ref:t,...l})});c.displayName="Button"},48185:function(e,t,r){"use strict";r.d(t,{Ol:function(){return u},SZ:function(){return c},Zb:function(){return i},aY:function(){return l},eW:function(){return d},ll:function(){return s}});var n=r(57437),o=r(2265),a=r(37440);let i=o.forwardRef((e,t)=>{let{className:r,...o}=e;return(0,n.jsx)("div",{ref:t,className:(0,a.cn)("rounded-lg border bg-card text-card-foreground shadow-sm",r),...o})});i.displayName="Card";let u=o.forwardRef((e,t)=>{let{className:r,...o}=e;return(0,n.jsx)("div",{ref:t,className:(0,a.cn)("flex flex-col space-y-1.5 p-6",r),...o})});u.displayName="CardHeader";let s=o.forwardRef((e,t)=>{let{className:r,...o}=e;return(0,n.jsx)("h3",{ref:t,className:(0,a.cn)("text-2xl font-semibold leading-none tracking-tight",r),...o})});s.displayName="CardTitle";let c=o.forwardRef((e,t)=>{let{className:r,...o}=e;return(0,n.jsx)("p",{ref:t,className:(0,a.cn)("text-sm text-muted-foreground",r),...o})});c.displayName="CardDescription";let l=o.forwardRef((e,t)=>{let{className:r,...o}=e;return(0,n.jsx)("div",{ref:t,className:(0,a.cn)("p-6 pt-0",r),...o})});l.displayName="CardContent";let d=o.forwardRef((e,t)=>{let{className:r,...o}=e;return(0,n.jsx)("div",{ref:t,className:(0,a.cn)("flex items-center p-6 pt-0",r),...o})});d.displayName="CardFooter"},40133:function(e,t,r){"use strict";r.d(t,{a:function(){return b}});var n=r(2265),o=r(42126),a=r(97334),i=r(39099),u=r(89291);let s=(0,i.Ue)()((0,u.mW)((0,u.tJ)(e=>({token:null,refreshToken:null,userId:null,setToken:t=>{let r=t?JSON.parse(atob(t.split(".")[1])).sub:null;e({token:t,userId:r})},setRefreshToken:t=>{e({refreshToken:t})}}),{name:"token-storage"})));var c=r(16463),l=r(64773),d=r(84475),p=r(40832),f=r(40932),m=r(45099);let h="RaidRegistering",g="https://raid-registering.myecl.fr/login",y="https://hyperion-3.dev.eclair.ec-lyon.fr",v=["API"],b=()=>{let e=(0,c.usePathname)(),[t,r]=(0,n.useState)(!1),{token:i,setToken:u,refreshToken:b,setRefreshToken:k,userId:w}=s(),{resetUser:I}=(0,l.L)(),{resetParticipant:x}=(0,d.p)(),{resetInviteToken:F}=(0,p.u)(),[N,T]=(0,n.useState)(!1),D=(0,c.useRouter)(),{codeVerifier:q,setCodeVerifier:R,resetCodeVerifier:_}=(0,m.f)(),C=(0,n.useRef)(null);async function j(e){let t=new TextEncoder().encode(e);return await crypto.subtle.digest("SHA-256",t).then(e=>btoa(Array.from(new Uint8Array(e)).map(e=>String.fromCharCode(e)).join("")).replace(/\+/g,"-").replace(/\//g,"_"))}async function U(e){r(!0);let t=(0,a.stringify)(e);try{let e=await o.Z.post("".concat(y,"/auth/token"),t,{headers:{"Content-Type":"application/x-www-form-urlencoded",Accept:"application/json"}});if(200!=e.status){r(!1);return}let n=e.data;r(!1),u(n.access_token),k(n.refresh_token)}catch(e){console.error(e),r(!1),A()}}async function S(){return t?null:(r(!0),console.log("refreshing tokens"),b)?(await U({grant_type:"refresh_token",client_id:h,refresh_token:b}),b):null}function P(){return!!i&&(i?JSON.parse(atob(i.split(".")[1])).exp:0)<Math.floor(Date.now()/1e3)-60}async function K(e,r){if(console.log("logging in",t),!q||t){console.error("Code verifier not set");return}await U({grant_type:"authorization_code",client_id:h,code:e,redirect_uri:g,code_verifier:q}),T(!0),r&&r(),_()}async function W(){r(!0);let e=function(e){for(var t="",r="ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789",n=r.length,o=crypto.getRandomValues(new Uint8Array(128)),a=0;a<128;a++)t+=r.charAt(Math.floor(o[a]/128*n));return t}(128);R(e);let t="".concat(y,"/auth/authorize?client_id=").concat(h,"&response_type=code&scope=").concat(v.join(" "),"&redirect_uri=").concat(g,"&code_challenge=").concat(await j(e),"&code_challenge_method=S256");window.location.href=t}function A(){u(null),k(null),T(!1),D.replace("/login"),I(),x(),F()}async function J(){return(console.log("getting token from storage"),t)?null:(r(!0),null!==i?(P()||(r(!1),console.log("is token queried",N)),T(!0)):(r(!1),["/login","/recover","/register"].includes(null!=e?e:"")||D.replace("/login")),i)}return(0,f.a)({queryKey:["lookToRefreshToken"],queryFn:()=>(function(){if(console.log("looking to refresh token"),C.current&&clearTimeout(C.current),null===i)return null;console.log("token",i?JSON.parse(atob(i.split(".")[1])).exp:0);let e=(i?JSON.parse(atob(i.split(".")[1])).exp:0)*1e3-Date.now()-6e4;return console.log("time to refresh token",e),e<=0?S():C.current=setTimeout(()=>{S(),C.current=null},e),i})(),retry:0,enabled:N}),(0,f.a)({queryKey:["getTokenFromStorage"],queryFn:()=>J(),retry:0,enabled:!N}),{getTokenFromRequest:W,isLoading:t,token:i,isTokenQueried:N,logout:A,userId:w,isTokenExpired:P,login:K}}},45099:function(e,t,r){"use strict";r.d(t,{f:function(){return a}});var n=r(39099),o=r(89291);let a=(0,n.Ue)()((0,o.mW)((0,o.tJ)(e=>({codeVerifier:void 0,setCodeVerifier:t=>{e({codeVerifier:t,isLoading:!0})},resetCodeVerifier:()=>{e({codeVerifier:void 0,isLoading:!1})},isLoading:!1}),{name:"raid-code-verifier-storage"})))},40832:function(e,t,r){"use strict";r.d(t,{u:function(){return a}});var n=r(39099),o=r(89291);let a=(0,n.Ue)()((0,o.mW)((0,o.tJ)(e=>({InviteToken:void 0,setInviteToken:t=>{e({inviteToken:t})},resetInviteToken:()=>{e({inviteToken:void 0})}}),{name:"raid-invite-token-storage"})))},84475:function(e,t,r){"use strict";r.d(t,{p:function(){return a}});var n=r(39099),o=r(89291);let a=(0,n.Ue)()((0,o.mW)((0,o.tJ)(e=>({participant:void 0,setParticipant:t=>{e({participant:t})},resetParticipant:()=>{e({participant:void 0})}}),{name:"raid-participant-storage"})))},64773:function(e,t,r){"use strict";r.d(t,{L:function(){return a}});var n=r(39099),o=r(89291);let a=(0,n.Ue)()((0,o.mW)((0,o.tJ)(e=>({user:void 0,setUser:t=>{e({user:t})},resetUser:()=>{e({user:void 0})}}),{name:"raid-user-storage"})))}}]);