(self.webpackChunk_N_E=self.webpackChunk_N_E||[]).push([[3],{48952:function(e,a,s){Promise.resolve().then(s.bind(s,81062))},81062:function(e,a,s){"use strict";s.r(a),s.d(a,{default:function(){return T}});var l=s(57437),t=s(42729),r=s(53832),i=s(8792),n=s(8967),d=s(33277),c=s(575),o=s(15671),u=s(5887),m=s(77625),x=s(86909);let f=e=>{let{teams:a,isLoading:s}=e;return(0,l.jsxs)(o.Zb,{className:"xl:col-span-2",children:[(0,l.jsxs)(o.Ol,{className:"flex flex-row items-center",children:[(0,l.jsxs)("div",{className:"grid gap-2",children:[(0,l.jsx)(o.ll,{children:"Equipes"}),(0,l.jsx)(o.SZ,{children:"Aper\xe7u des derni\xe8res \xe9quipes inscrites"})]}),(0,l.jsx)(c.z,{asChild:!0,size:"sm",className:"ml-auto gap-1",children:(0,l.jsxs)(i.default,{href:"/admin/teams",children:["Voir tout",(0,l.jsx)(n.Z,{className:"h-4 w-4"})]})})]}),(0,l.jsx)(o.aY,{children:(0,l.jsxs)(u.iA,{children:[(0,l.jsx)(u.xD,{children:(0,l.jsxs)(u.SC,{children:[(0,l.jsx)(u.ss,{children:"Nom"}),(0,l.jsx)(u.ss,{className:"max-md:hidden",children:"Capitaine"}),(0,l.jsx)(u.ss,{className:"max-md:hidden",children:"Co\xe9quipier"}),(0,l.jsx)(u.ss,{className:"max-md:hidden",children:"Documents"}),(0,l.jsx)(u.ss,{className:"text-right",children:"Inscription"})]})}),(0,l.jsxs)(u.RM,{children:[s&&(0,l.jsx)(l.Fragment,{children:[void 0,void 0,void 0,void 0,void 0].map((e,a)=>(0,l.jsxs)(u.SC,{children:[(0,l.jsx)(u.pj,{children:(0,l.jsx)(m.O,{className:"h-4 w-20"})}),[void 0,void 0,void 0].map((e,a)=>(0,l.jsx)(u.pj,{className:"max-md:hidden",children:(0,l.jsx)(m.O,{className:"h-4 w-20"})},a)),(0,l.jsx)(u.pj,{className:" ml-auto text-right",children:(0,l.jsx)(m.O,{className:"h-4 w-20"})})]},a))}),a&&(0,l.jsx)(l.Fragment,{children:a.toSorted((e,a)=>a.validation_progress%100-e.validation_progress%100).slice(0,5).map(e=>{var a,s,t,r,i,n,c;let o=e.captain.number_of_validated_document+(null!==(n=null===(a=e.second)||void 0===a?void 0:a.number_of_validated_document)&&void 0!==n?n:0),m=e.captain.number_of_document+(null!==(c=null===(s=e.second)||void 0===s?void 0:s.number_of_document)&&void 0!==c?c:0);return(0,l.jsxs)(u.SC,{children:[(0,l.jsx)(u.pj,{children:e.name}),(0,l.jsxs)(u.pj,{className:"max-md:hidden",children:[(0,l.jsxs)("div",{className:"font-medium",children:[null===(t=e.captain)||void 0===t?void 0:t.firstname," ",null===(r=e.captain)||void 0===r?void 0:r.name]}),(0,l.jsx)("div",{className:"text-sm text-muted-foreground max-md:hidden",children:null===(i=e.captain)||void 0===i?void 0:i.email})]}),(0,l.jsx)(u.pj,{className:"max-md:hidden",children:e.second?(0,l.jsxs)(l.Fragment,{children:[(0,l.jsxs)("div",{className:"font-medium",children:[e.second.firstname," ",e.second.name]}),(0,l.jsx)("div",{className:"text-sm text-muted-foreground max-md:hidden",children:e.second.email})]}):(0,l.jsx)("div",{className:"font-medium text-muted-foreground",children:"Non renseign\xe9"})}),(0,l.jsx)(u.pj,{className:"max-md:hidden",children:(0,l.jsx)("div",{className:"flex w-[150px] items-center",children:(0,l.jsxs)(d.C,{variant:"outline",children:[(0,l.jsx)("div",{className:"h-3 w-3",children:(0,l.jsx)(x.Ip,{value:o/m*100,strokeWidth:15,styles:(0,x.y3)({pathColor:"black",strokeLinecap:"round"})})}),(0,l.jsxs)("span",{className:"ml-2",children:[o," /"," ",m," ","valid\xe9s"]})]})})}),(0,l.jsxs)(u.pj,{className:"text-right",children:[null==e?void 0:e.validation_progress.toFixed(0),"%"]})]},e.id)})})]})]})})]})};var h=s(26587),v=s(74251),p=s(13105),j=s(74994),b=s(64848);let g={cssVars:{light:{primary:"240 5.9% 10%"},dark:{primary:"0 0% 98%"}}},N=e=>{let{data:a}=e,{theme:s}=(0,b.F)();return(0,l.jsxs)("div",{children:[(0,l.jsx)(h.h,{className:"min-h-40 md:min-h-80",children:(0,l.jsx)(v.v,{data:a,children:(0,l.jsx)(p.$,{dataKey:"value",radius:[10,10,0,0],style:{fill:"hsl(".concat(null==g?void 0:g.cssVars["dark"===s?"dark":"light"].primary,")"),opacity:1},children:a.map((e,a)=>(0,l.jsx)(j.b,{},"cell-".concat(a+1)))})})}),(0,l.jsx)("div",{className:"flex flex-row mt-1",children:a.map((e,a)=>(0,l.jsxs)("div",{className:"flex flex-col w-full",children:[(0,l.jsx)("span",{className:"text-center font-semibold",children:e.label}),(0,l.jsx)("span",{className:"text-sm text-muted-foreground w-full text-center",children:e.value})]},"cell-".concat(a+1)))})]})};var y=s(99497),w=s(2265),k=s(94845),S=s(1657);let _=w.forwardRef((e,a)=>{let{className:s,...t}=e;return(0,l.jsx)(k.fC,{className:(0,S.cn)("peer inline-flex h-6 w-11 shrink-0 cursor-pointer items-center rounded-full border-2 border-transparent transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 focus-visible:ring-offset-background disabled:cursor-not-allowed disabled:opacity-50 data-[state=checked]:bg-primary data-[state=unchecked]:bg-input",s),...t,ref:a,children:(0,l.jsx)(k.bU,{className:(0,S.cn)("pointer-events-none block h-5 w-5 rounded-full bg-background shadow-lg ring-0 transition-transform data-[state=checked]:translate-x-5 data-[state=unchecked]:translate-x-0")})})});_.displayName=k.fC.displayName;var C=s(55348);let z=e=>{let{teams:a,isLoading:s}=e,[t,r]=(0,w.useState)(!1),{difficultyData:i,meetingPlaceData:n,bikeSizeData:d,tShirtSizeData:c,situationData:u}=function(e,a){var s,l,t,r,i;let n=null==a?void 0:a.filter(a=>e),d=(s=[{value:0,label:"D\xe9couverte"},{value:0,label:"Sportif"},{value:0,label:"Expert"}],e&&s.push({value:0,label:"Non renseign\xe9"}),n&&n.forEach(a=>{"discovery"===a.difficulty?s[0].value++:"sports"===a.difficulty?s[1].value++:"expert"===a.difficulty?s[2].value++:e&&s[3].value++}),s),c=(l=[{value:0,label:"Centrale Lyon"},{value:0,label:"Bellecour"},{value:0,label:"Peu importe"}],e&&l.push({value:0,label:"Non renseign\xe9"}),n&&n.forEach(a=>{switch(a.meeting_place){case"centrale":l[0].value++;break;case"bellecour":l[1].value++;break;case"anyway":l[2].value++;break;default:e&&l[3].value++}}),l);return{difficultyData:d,meetingPlaceData:c,bikeSizeData:(t=[{value:0,label:"XS"},{value:0,label:"S"},{value:0,label:"M"},{value:0,label:"L"},{value:0,label:"XL"}],e&&t.push({value:0,label:"N/A"}),n&&n.map(e=>[e.captain,e.second]).flat(1).forEach(a=>{if(a)switch(a.bike_size){case"XS":t[0].value++;break;case"S":t[1].value++;break;case"M":t[2].value++;break;case"L":t[3].value++;break;case"XL":t[4].value++;break;default:e&&t[5].value++}}),t),tShirtSizeData:(r=[{value:0,label:"XS"},{value:0,label:"S"},{value:0,label:"M"},{value:0,label:"L"},{value:0,label:"XL"}],e&&r.push({value:0,label:"N/A"}),n&&n.map(e=>[e.captain,e.second]).flat(1).forEach(a=>{if(a)switch(a.t_shirt_size){case"XS":r[0].value++;break;case"S":r[1].value++;break;case"M":r[2].value++;break;case"L":r[3].value++;break;case"XL":r[4].value++;break;default:e&&r[5].value++}}),r),situationData:(i=[{value:0,label:"Centrale Lyon"},{value:0,label:"Autre \xe9cole"},{value:0,label:"Partenaire"},{value:0,label:"Autre"}],e&&i.push({value:0,label:"N/A"}),n&&n.map(e=>[e.captain,e.second]).flat(1).forEach(a=>{if(a){var s;switch((0,C.l)(null!==(s=a.situation)&&void 0!==s?s:void 0)){case"centrale":i[0].value++;break;case"otherschool":i[1].value++;break;case"corporatepartner":i[2].value++;break;case"other":i[3].value++;break;default:e&&i[4].value++}}}),i)}}(t,a);return(0,l.jsxs)(o.Zb,{children:[(0,l.jsxs)(o.Ol,{className:"flex flex-row items-center justify-between",children:[(0,l.jsxs)("div",{className:"grid gap-2",children:[(0,l.jsx)(o.ll,{children:"Statistiques"}),(0,l.jsx)(o.SZ,{children:t?"Porte sur toutes les \xe9quipes":"Ne porte que sur les \xe9quipes valid\xe9es"})]}),(0,l.jsx)("div",{className:"items-center space-x-2 grid gap-2",children:(0,l.jsx)(_,{id:"airplane-mode",checked:t,onCheckedChange:r})})]}),(0,l.jsx)(o.aY,{children:(0,l.jsxs)(y.mQ,{defaultValue:"difficulty",children:[(0,l.jsxs)(y.dr,{className:"grid w-full grid-cols-5 mb-6",children:[(0,l.jsx)(y.SP,{value:"difficulty",children:"Parcours"}),(0,l.jsx)(y.SP,{value:"meetingPlace",children:"D\xe9part"}),(0,l.jsx)(y.SP,{value:"bikeSize",children:"VTT"}),(0,l.jsx)(y.SP,{value:"tShirtSize",children:"T-Shirt"}),(0,l.jsx)(y.SP,{value:"situation",children:"Situation"})]}),(0,l.jsx)(y.nU,{value:"difficulty",children:(0,l.jsx)(N,{data:i})}),(0,l.jsx)(y.nU,{value:"meetingPlace",children:(0,l.jsx)(N,{data:n})}),(0,l.jsx)(y.nU,{value:"bikeSize",children:(0,l.jsx)(N,{data:d})}),(0,l.jsx)(y.nU,{value:"tShirtSize",children:(0,l.jsx)(N,{data:c})}),(0,l.jsx)(y.nU,{value:"situation",children:(0,l.jsx)(N,{data:u})})]})})]})};var L=s(41391),R=s(47907),P=s(1146),T=()=>{var e;let{isAdmin:a}=(0,L.a)(),{teams:s,isLoading:i}=(0,P.y)(),n=(0,R.useRouter)(),d=null!==(e=null==s?void 0:s.map(e=>[e.captain,e.second]).flat(1).filter(e=>null!==e))&&void 0!==e?e:[],c=null==d?void 0:d.map(e=>e.payment?1:0).reduce((e,a)=>e+a,0),o=[{title:"Participants inscrits",value:(null==d?void 0:d.length.toString())||"0",description:"personnes ayant commenc\xe9 leur inscription",unit:void 0},{title:"Paiements efectu\xe9s",value:(null==c?void 0:c.toString())||"0",description:"".concat((null==d?void 0:d.length)-c," paiements manquants"),unit:void 0},{title:"Equipes valid\xe9es",value:(null==s?void 0:s.filter(e=>100===e.validation_progress).length.toString())||"0",description:"dossier complet valid\xe9 et pay\xe9",unit:void 0},{title:"Cloture des inscriptions",value:"01/09/2024",description:"x jours restants",unit:void 0}];return a()||n.replace("/?redirect=/admin"),(0,l.jsxs)("div",{className:"flex min-h-screen w-full flex-col",children:[(0,l.jsx)(r.D,{}),(0,l.jsxs)("main",{className:"flex flex-1 flex-col gap-4 p-4 md:gap-8 md:p-8",children:[(0,l.jsx)("div",{className:"grid gap-4 md:grid-cols-2 md:gap-8 lg:grid-cols-4",children:o.map(e=>(0,l.jsx)(t.L,{info:e,isLoaded:!i},e.title))}),(0,l.jsxs)("div",{className:"grid gap-4 md:gap-8 lg:grid-cols-2 xl:grid-cols-3",children:[(0,l.jsx)(f,{teams:s,isLoading:i}),(0,l.jsx)(z,{teams:s,isLoading:i})]})]})]})}},53832:function(e,a,s){"use strict";s.d(a,{D:function(){return x}});var l=s(57437),t=s(8792),r=s(79744),i=s(575),n=s(34645),d=s(50326),c=s(40695),o=s(77625),u=s(41391),m=s(91806);let x=()=>{let{me:e}=(0,u.a)(),a=window.location.pathname;function s(e,s){let r=a===e;return(0,l.jsx)(t.default,{href:e,className:"".concat(r?"text-foreground":"text-muted-foreground"," transition-colors hover:text-foreground"),children:s})}function x(){return(0,l.jsxs)(l.Fragment,{children:[s("/admin","Tableau de bord"),s("/admin/teams","Equipes"),s("/admin/information","Informations")]})}return(0,l.jsxs)("header",{className:"sticky top-0 flex h-16 items-center gap-4 border-b bg-background px-4 md:px-6 z-10",children:[(0,l.jsx)("nav",{className:"hidden flex-col gap-6 text-lg font-medium md:flex md:flex-row md:items-center md:gap-5 md:text-sm lg:gap-6 mx-10 max-md:mx-0 w-full",children:x()}),(0,l.jsxs)(d.yo,{children:[(0,l.jsx)(d.aM,{asChild:!0,children:(0,l.jsxs)(i.z,{variant:"outline",size:"icon",className:"shrink-0 md:hidden",children:[(0,l.jsx)(r.Z,{className:"h-5 w-5"}),(0,l.jsx)("span",{className:"sr-only",children:"Toggle navigation menu"})]})}),(0,l.jsx)(d.ue,{side:"left",children:(0,l.jsx)("nav",{className:"grid gap-6 text-lg font-medium",children:x()})})]}),(0,l.jsx)("div",{className:"flex w-full items-center gap-4 md:ml-auto md:gap-2 lg:gap-4  mx-10 max-md:mx-0",children:(0,l.jsxs)("div",{className:"flex flex-row ml-auto",children:[(0,l.jsxs)(n.h_,{children:[(0,l.jsx)(n.$F,{asChild:!0,children:(0,l.jsx)(i.z,{variant:"ghost",children:(null==e?void 0:e.firstname)===void 0||(null==e?void 0:e.name)===void 0?(0,l.jsx)(l.Fragment,{children:(0,l.jsx)(o.O,{className:"w-24 h-6"})}):(0,l.jsx)(l.Fragment,{children:e.firstname+" "+e.name})})}),(0,l.jsx)(n.AW,{align:"end",children:(0,l.jsx)(n.Xi,{children:(0,l.jsx)(m.s,{})})})]}),(0,l.jsx)("div",{className:"w-4"}),(0,l.jsx)(c.U,{})]})})]})}},42729:function(e,a,s){"use strict";s.d(a,{L:function(){return i}});var l=s(57437),t=s(15671),r=s(77625);let i=e=>{let{info:a,isLoaded:s}=e;return(0,l.jsxs)(t.Zb,{children:[(0,l.jsxs)(t.Ol,{className:"flex flex-row items-center justify-between space-y-0 pb-2",children:[(0,l.jsx)(t.ll,{className:"text-sm font-medium",children:s?(0,l.jsx)("span",{children:a.title}):(0,l.jsx)(r.O,{className:"w-24 h-5"})}),a.unit&&(s?a.unit:(0,l.jsx)(r.O,{className:"w-4 h-4 text-muted-foreground"}))]}),(0,l.jsxs)(t.aY,{children:[(0,l.jsx)("div",{className:"text-2xl font-bold",children:s?a.value:(0,l.jsx)(r.O,{className:"w-[150px] h-6"})}),s?(0,l.jsx)("p",{className:"text-xs text-muted-foreground",children:a.description}):(0,l.jsx)(r.O,{className:"w-[120px] h-4 mt-1"})]})]},a.title)}},33277:function(e,a,s){"use strict";s.d(a,{C:function(){return n}});var l=s(57437);s(2265);var t=s(57742),r=s(1657);let i=(0,t.j)("inline-flex items-center rounded-full border px-2.5 py-0.5 text-xs font-semibold transition-colors focus:outline-none focus:ring-2 focus:ring-ring focus:ring-offset-2",{variants:{variant:{default:"border-transparent bg-primary text-primary-foreground hover:bg-primary/80",secondary:"border-transparent bg-secondary text-secondary-foreground hover:bg-secondary/80",destructive:"border-transparent bg-destructive text-destructive-foreground hover:bg-destructive/80",outline:"text-foreground"}},defaultVariants:{variant:"default"}});function n(e){let{className:a,variant:s,...t}=e;return(0,l.jsx)("div",{className:(0,r.cn)(i({variant:s}),a),...t})}},5887:function(e,a,s){"use strict";s.d(a,{RM:function(){return d},SC:function(){return c},iA:function(){return i},pj:function(){return u},ss:function(){return o},xD:function(){return n}});var l=s(57437),t=s(2265),r=s(1657);let i=t.forwardRef((e,a)=>{let{className:s,...t}=e;return(0,l.jsx)("div",{className:"relative w-full overflow-auto",children:(0,l.jsx)("table",{ref:a,className:(0,r.cn)("w-full caption-bottom text-sm",s),...t})})});i.displayName="Table";let n=t.forwardRef((e,a)=>{let{className:s,...t}=e;return(0,l.jsx)("thead",{ref:a,className:(0,r.cn)("[&_tr]:border-b",s),...t})});n.displayName="TableHeader";let d=t.forwardRef((e,a)=>{let{className:s,...t}=e;return(0,l.jsx)("tbody",{ref:a,className:(0,r.cn)("[&_tr:last-child]:border-0",s),...t})});d.displayName="TableBody",t.forwardRef((e,a)=>{let{className:s,...t}=e;return(0,l.jsx)("tfoot",{ref:a,className:(0,r.cn)("border-t bg-muted/50 font-medium [&>tr]:last:border-b-0",s),...t})}).displayName="TableFooter";let c=t.forwardRef((e,a)=>{let{className:s,...t}=e;return(0,l.jsx)("tr",{ref:a,className:(0,r.cn)("border-b transition-colors hover:bg-muted/50 data-[state=selected]:bg-muted",s),...t})});c.displayName="TableRow";let o=t.forwardRef((e,a)=>{let{className:s,...t}=e;return(0,l.jsx)("th",{ref:a,className:(0,r.cn)("h-12 px-4 text-left align-middle font-medium text-muted-foreground [&:has([role=checkbox])]:pr-0",s),...t})});o.displayName="TableHead";let u=t.forwardRef((e,a)=>{let{className:s,...t}=e;return(0,l.jsx)("td",{ref:a,className:(0,r.cn)("p-4 align-middle [&:has([role=checkbox])]:pr-0",s),...t})});u.displayName="TableCell",t.forwardRef((e,a)=>{let{className:s,...t}=e;return(0,l.jsx)("caption",{ref:a,className:(0,r.cn)("mt-4 text-sm text-muted-foreground",s),...t})}).displayName="TableCaption"},99497:function(e,a,s){"use strict";s.d(a,{SP:function(){return c},dr:function(){return d},mQ:function(){return n},nU:function(){return o}});var l=s(57437),t=s(2265),r=s(64694),i=s(1657);let n=r.fC,d=t.forwardRef((e,a)=>{let{className:s,...t}=e;return(0,l.jsx)(r.aV,{ref:a,className:(0,i.cn)("inline-flex h-10 items-center justify-center rounded-md bg-muted p-1 text-muted-foreground",s),...t})});d.displayName=r.aV.displayName;let c=t.forwardRef((e,a)=>{let{className:s,...t}=e;return(0,l.jsx)(r.xz,{ref:a,className:(0,i.cn)("inline-flex items-center justify-center whitespace-nowrap rounded-sm px-3 py-1.5 text-sm font-medium ring-offset-background transition-all focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:pointer-events-none disabled:opacity-50 data-[state=active]:bg-background data-[state=active]:text-foreground data-[state=active]:shadow-sm",s),...t})});c.displayName=r.xz.displayName;let o=t.forwardRef((e,a)=>{let{className:s,...t}=e;return(0,l.jsx)(r.VY,{ref:a,className:(0,i.cn)("mt-2 ring-offset-background focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2",s),...t})});o.displayName=r.VY.displayName},1146:function(e,a,s){"use strict";s.d(a,{y:function(){return i}});var l=s(425),t=s(41391),r=s(68855);let i=()=>{let{token:e,isTokenExpired:a}=(0,r.a)(),{isAdmin:s}=(0,t.a)(),{data:i,isLoading:n,refetch:d}=(0,l.kAw)({headers:{Authorization:"Bearer ".concat(e)}},{enabled:s()&&!a(),retry:0,queryHash:"getTeams"});return{teams:i,isLoading:n,refetchTeams:d}}},55348:function(e,a,s){"use strict";function l(e){return null==e?void 0:e.split(" : ")[0]}function t(e){let a=null==e?void 0:e.split(" : ");return(null==a?void 0:a.length)===2?a[1]:"Centrale"}s.d(a,{Q:function(){return t},l:function(){return l}})}},function(e){e.O(0,[422,470,536,169,476,590,240,971,69,744],function(){return e(e.s=48952)}),_N_E=e.O()}]);