(self.webpackChunk_N_E=self.webpackChunk_N_E||[]).push([[3],{18916:function(e,a,l){Promise.resolve().then(l.bind(l,12471))},12471:function(e,a,l){"use strict";l.r(a),l.d(a,{default:function(){return T}});var s=l(57437),t=l(88252),r=l(59897),i=l(87138),n=l(30338),d=l(79055),c=l(89733),o=l(48185),u=l(47304),f=l(2183),m=l(51242),v=l(16463);let x=e=>{var a;let{teams:l,isLoading:t}=e,r=(0,v.useRouter)();return(0,s.jsxs)(o.Zb,{className:"xl:col-span-2",children:[(0,s.jsxs)(o.Ol,{className:"flex flex-row items-center",children:[(0,s.jsxs)("div",{className:"grid gap-2",children:[(0,s.jsx)(o.ll,{children:"Equipes"}),(0,s.jsxs)(o.SZ,{children:["Aper\xe7u des ",null!==(a=null==l?void 0:l.slice(0,5).length)&&void 0!==a?a:0," \xe9quipes les plus proches de la validation de leur dossier"]})]}),(0,s.jsx)(c.z,{asChild:!0,size:"sm",className:"ml-auto gap-1",children:(0,s.jsxs)(i.default,{href:"/admin/teams",children:["Voir tout",(0,s.jsx)(n.Z,{className:"h-4 w-4"})]})})]}),(0,s.jsx)(o.aY,{children:(0,s.jsxs)(u.iA,{children:[(0,s.jsx)(u.xD,{children:(0,s.jsxs)(u.SC,{children:[(0,s.jsx)(u.ss,{children:"Nom"}),(0,s.jsx)(u.ss,{className:"max-md:hidden",children:"Capitaine"}),(0,s.jsx)(u.ss,{className:"max-md:hidden",children:"Co\xe9quipier"}),(0,s.jsx)(u.ss,{className:"max-md:hidden",children:"Documents"}),(0,s.jsx)(u.ss,{className:"text-right",children:"Inscription"})]})}),(0,s.jsxs)(u.RM,{children:[t&&(0,s.jsx)(s.Fragment,{children:[void 0,void 0,void 0,void 0,void 0].map((e,a)=>(0,s.jsxs)(u.SC,{children:[(0,s.jsx)(u.pj,{className:"h-[78px]",children:(0,s.jsx)(f.O,{className:"h-6 w-24"})}),[void 0,void 0,void 0].map((e,a)=>(0,s.jsx)(u.pj,{className:"max-md:hidden",children:(0,s.jsx)(f.O,{className:"h-6 w-24"})},a)),(0,s.jsx)(u.pj,{children:(0,s.jsx)(f.O,{className:"h-6 w-8 ml-auto"})})]},a))}),l&&(0,s.jsx)(s.Fragment,{children:l.toSorted((e,a)=>a.validation_progress%100-e.validation_progress%100).slice(0,5).map(e=>{var a,l,t,i,n,c;let o=e.captain.number_of_validated_document+(null!==(n=null===(a=e.second)||void 0===a?void 0:a.number_of_validated_document)&&void 0!==n?n:0),f=e.captain.number_of_document+(null!==(c=null===(l=e.second)||void 0===l?void 0:l.number_of_document)&&void 0!==c?c:0);return(0,s.jsxs)(u.SC,{onClick:()=>{var a;return a=e.id,void r.push("/admin/teams?teamId="+a)},children:[(0,s.jsx)(u.pj,{className:"h-[78px]",children:e.name}),(0,s.jsx)(u.pj,{className:"max-md:hidden",children:(0,s.jsxs)("div",{className:"font-medium",children:[null===(t=e.captain)||void 0===t?void 0:t.firstname," ",null===(i=e.captain)||void 0===i?void 0:i.name]})}),(0,s.jsx)(u.pj,{className:"max-md:hidden",children:e.second?(0,s.jsx)(s.Fragment,{children:(0,s.jsxs)("div",{className:"font-medium",children:[e.second.firstname," ",e.second.name]})}):(0,s.jsx)("div",{className:"font-medium text-muted-foreground",children:"Non renseign\xe9"})}),(0,s.jsx)(u.pj,{className:"max-md:hidden",children:(0,s.jsx)("div",{className:"flex items-center w-[110px]",children:(0,s.jsxs)(d.C,{variant:"outline",children:[(0,s.jsx)(m.$,{value:o/f*100}),(0,s.jsxs)("span",{className:"ml-2",children:[o," /"," ",f," ","valid\xe9s"]})]})})}),(0,s.jsxs)(u.pj,{className:"text-right",children:[null==e?void 0:e.validation_progress.toFixed(0),"%"]})]},e.id)})})]})]})})]})};var h=l(35231),p=l(83799),b=l(14725),j=l(68295),g=l(79512);let N={cssVars:{light:{primary:"240 5.9% 10%"},dark:{primary:"0 0% 98%"}}},y=e=>{let{data:a}=e,{theme:l}=(0,g.F)();return(0,s.jsxs)("div",{children:[(0,s.jsx)(h.h,{className:"min-h-40 md:min-h-80",children:(0,s.jsx)(p.v,{data:a,children:(0,s.jsx)(b.$,{dataKey:"value",radius:[10,10,0,0],style:{fill:"hsl(".concat(null==N?void 0:N.cssVars["dark"===l?"dark":"light"].primary,")"),opacity:1},children:a.map((e,a)=>(0,s.jsx)(j.b,{},"cell-".concat(a+1)))})})}),(0,s.jsx)("div",{className:"flex flex-row mt-1",children:a.map((e,a)=>(0,s.jsxs)("div",{className:"flex flex-col w-full",children:[(0,s.jsx)("span",{className:"text-center font-semibold",children:e.label}),(0,s.jsx)("span",{className:"text-sm text-muted-foreground w-full text-center",children:e.value})]},"cell-".concat(a+1)))})]})};var w=l(86864),k=l(2265),S=l(9646),_=l(37440);let C=k.forwardRef((e,a)=>{let{className:l,...t}=e;return(0,s.jsx)(S.fC,{className:(0,_.cn)("peer inline-flex h-6 w-11 shrink-0 cursor-pointer items-center rounded-full border-2 border-transparent transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 focus-visible:ring-offset-background disabled:cursor-not-allowed disabled:opacity-50 data-[state=checked]:bg-primary data-[state=unchecked]:bg-input",l),...t,ref:a,children:(0,s.jsx)(S.bU,{className:(0,_.cn)("pointer-events-none block h-5 w-5 rounded-full bg-background shadow-lg ring-0 transition-transform data-[state=checked]:translate-x-5 data-[state=unchecked]:translate-x-0")})})});C.displayName=S.fC.displayName;var R=l(77504);let L=e=>{let{teams:a,isLoading:l}=e,[t,r]=(0,k.useState)(!1),{difficultyData:i,meetingPlaceData:n,bikeSizeData:d,tShirtSizeData:c,situationData:u}=function(e,a){var l,s,t,r,i;let n=null==a?void 0:a.filter(a=>e),d=(l=[{value:0,label:"D\xe9couverte"},{value:0,label:"Sportif"},{value:0,label:"Expert"}],e&&l.push({value:0,label:"Non renseign\xe9"}),n&&n.forEach(a=>{"discovery"===a.difficulty?l[0].value++:"sports"===a.difficulty?l[1].value++:"expert"===a.difficulty?l[2].value++:e&&l[3].value++}),l),c=(s=[{value:0,label:"Centrale Lyon"},{value:0,label:"Bellecour"},{value:0,label:"Peu importe"}],e&&s.push({value:0,label:"Non renseign\xe9"}),n&&n.forEach(a=>{switch(a.meeting_place){case"centrale":s[0].value++;break;case"bellecour":s[1].value++;break;case"anyway":s[2].value++;break;default:e&&s[3].value++}}),s);return{difficultyData:d,meetingPlaceData:c,bikeSizeData:(t=[{value:0,label:"XS"},{value:0,label:"S"},{value:0,label:"M"},{value:0,label:"L"},{value:0,label:"XL"}],e&&t.push({value:0,label:"N/A"}),n&&n.map(e=>[e.captain,e.second]).flat(1).forEach(a=>{if(a)switch(a.bike_size){case"XS":t[0].value++;break;case"S":t[1].value++;break;case"M":t[2].value++;break;case"L":t[3].value++;break;case"XL":t[4].value++;break;default:e&&t[5].value++}}),t),tShirtSizeData:(r=[{value:0,label:"XS"},{value:0,label:"S"},{value:0,label:"M"},{value:0,label:"L"},{value:0,label:"XL"},{value:0,label:"Non"}],n&&n.map(e=>[e.captain,e.second]).flat(1).forEach(e=>{if(e)switch(e.t_shirt_size){case"XS":r[0].value++;break;case"S":r[1].value++;break;case"M":r[2].value++;break;case"L":r[3].value++;break;case"XL":r[4].value++;break;default:r[5].value++}}),r),situationData:(i=[{value:0,label:"Centrale Lyon"},{value:0,label:"Autre \xe9cole"},{value:0,label:"Partenaire"},{value:0,label:"Autre"}],e&&i.push({value:0,label:"N/A"}),n&&n.map(e=>[e.captain,e.second]).flat(1).forEach(a=>{if(a){var l;switch((0,R.l)(null!==(l=a.situation)&&void 0!==l?l:void 0)){case"centrale":i[0].value++;break;case"otherschool":i[1].value++;break;case"corporatepartner":i[2].value++;break;case"other":i[3].value++;break;default:e&&i[4].value++}}}),i)}}(t,a);return(0,s.jsxs)(o.Zb,{children:[(0,s.jsxs)(o.Ol,{className:"flex flex-col items-center justify-between",children:[(0,s.jsxs)("div",{className:"flex flex-row justify-between w-full",children:[(0,s.jsx)(o.ll,{children:"Statistiques"}),(0,s.jsx)(C,{checked:t,onCheckedChange:r})]}),(0,s.jsx)("div",{className:"ml-auto",children:(0,s.jsx)(o.SZ,{children:t?"Toutes les \xe9quipes":"Equipes valid\xe9es"})})]}),(0,s.jsx)(o.aY,{children:(0,s.jsxs)(w.mQ,{defaultValue:"difficulty",children:[(0,s.jsxs)(w.dr,{className:"grid w-full grid-cols-5 mb-6",children:[(0,s.jsx)(w.SP,{value:"difficulty",children:"Parcours"}),(0,s.jsx)(w.SP,{value:"meetingPlace",children:"D\xe9part"}),(0,s.jsx)(w.SP,{value:"bikeSize",children:"VTT"}),(0,s.jsx)(w.SP,{value:"tShirtSize",children:"T-Shirt"}),(0,s.jsx)(w.SP,{value:"situation",children:"Situation"})]}),(0,s.jsx)(w.nU,{value:"difficulty",children:(0,s.jsx)(y,{data:i})}),(0,s.jsx)(w.nU,{value:"meetingPlace",children:(0,s.jsx)(y,{data:n})}),(0,s.jsx)(w.nU,{value:"bikeSize",children:(0,s.jsx)(y,{data:d})}),(0,s.jsx)(w.nU,{value:"tShirtSize",children:(0,s.jsx)(y,{data:c})}),(0,s.jsx)(w.nU,{value:"situation",children:(0,s.jsx)(y,{data:u})})]})})]})};var P=l(17042),z=l(32897),T=()=>{var e;let{isAdmin:a}=(0,P.a)(),{teams:l,isLoading:i}=(0,z.y)(),n=(0,v.useRouter)(),d=null!==(e=null==l?void 0:l.map(e=>[e.captain,e.second]).flat(1).filter(e=>null!==e))&&void 0!==e?e:[],c=null==d?void 0:d.map(e=>e.payment?1:0).reduce((e,a)=>e+a,0),o=[{title:"Participants inscrits",value:(null==d?void 0:d.length.toString())||"0",description:"inscription d\xe9but\xe9e",unit:void 0},{title:"Paiements efectu\xe9s",value:(null==c?void 0:c.toString())||"0",description:"".concat((null==d?void 0:d.length)-c," paiements manquants"),unit:void 0},{title:"Equipes valid\xe9es",value:(null==l?void 0:l.filter(e=>100===e.validation_progress).length.toString())||"0",description:"dossier complet valid\xe9 et pay\xe9",unit:void 0},{title:"Cloture des inscriptions",value:"01/09/2024",description:"x jours restants",unit:void 0}];return a()||n.replace("/?redirect=/admin"),(0,s.jsxs)("div",{className:"flex min-h-screen w-full flex-col",children:[(0,s.jsx)(r.D,{}),(0,s.jsxs)("main",{className:"flex flex-1 flex-col gap-4 p-4 md:gap-8 md:p-8",children:[(0,s.jsx)("div",{className:"grid gap-4 md:grid-cols-2 md:gap-8 lg:grid-cols-4",children:o.map(e=>(0,s.jsx)(t.L,{info:e,isLoaded:!i},e.title))}),(0,s.jsxs)("div",{className:"grid gap-4 md:gap-8 xl:grid-cols-3",children:[(0,s.jsx)(x,{teams:l,isLoading:i}),(0,s.jsx)(L,{teams:l,isLoading:i})]})]})]})}},88252:function(e,a,l){"use strict";l.d(a,{L:function(){return i}});var s=l(57437),t=l(48185),r=l(2183);let i=e=>{let{info:a,isLoaded:l}=e;return(0,s.jsxs)(t.Zb,{children:[(0,s.jsxs)(t.Ol,{className:"flex flex-row items-center justify-between space-y-0 pb-2",children:[(0,s.jsx)(t.ll,{className:"text-sm font-medium",children:l?(0,s.jsx)("span",{children:a.title}):(0,s.jsx)(r.O,{className:"w-24 h-5"})}),a.unit&&(l?a.unit:(0,s.jsx)(r.O,{className:"w-4 h-4 text-muted-foreground"}))]}),(0,s.jsxs)(t.aY,{children:[(0,s.jsx)("div",{className:"text-2xl font-bold",children:l?a.value:(0,s.jsx)(r.O,{className:"w-[150px] h-6"})}),l?(0,s.jsx)("p",{className:"text-xs text-muted-foreground",children:a.description}):(0,s.jsx)(r.O,{className:"w-[120px] h-4 mt-1"})]})]},a.title)}},79055:function(e,a,l){"use strict";l.d(a,{C:function(){return n}});var s=l(57437);l(2265);var t=l(12218),r=l(37440);let i=(0,t.j)("inline-flex items-center rounded-full border px-2.5 py-0.5 text-xs font-semibold transition-colors focus:outline-none focus:ring-2 focus:ring-ring focus:ring-offset-2",{variants:{variant:{default:"border-transparent bg-primary text-primary-foreground hover:bg-primary/80",secondary:"border-transparent bg-secondary text-secondary-foreground hover:bg-secondary/80",destructive:"border-transparent bg-destructive text-destructive-foreground hover:bg-destructive/80",outline:"text-foreground"}},defaultVariants:{variant:"default"}});function n(e){let{className:a,variant:l,...t}=e;return(0,s.jsx)("div",{className:(0,r.cn)(i({variant:l}),a),...t})}},51242:function(e,a,l){"use strict";l.d(a,{$:function(){return r}});var s=l(57437),t=l(43178);l(70982);let r=e=>{let{value:a}=e;return(0,s.jsx)("div",{className:"h-3 w-3",children:(0,s.jsx)(t.Ip,{value:a,strokeWidth:15,styles:{root:{},path:{stroke:"black",strokeLinecap:"round"},trail:{},text:{},background:{}}})})}},47304:function(e,a,l){"use strict";l.d(a,{RM:function(){return d},SC:function(){return c},iA:function(){return i},pj:function(){return u},ss:function(){return o},xD:function(){return n}});var s=l(57437),t=l(2265),r=l(37440);let i=t.forwardRef((e,a)=>{let{className:l,...t}=e;return(0,s.jsx)("div",{className:"relative w-full overflow-auto",children:(0,s.jsx)("table",{ref:a,className:(0,r.cn)("w-full caption-bottom text-sm",l),...t})})});i.displayName="Table";let n=t.forwardRef((e,a)=>{let{className:l,...t}=e;return(0,s.jsx)("thead",{ref:a,className:(0,r.cn)("[&_tr]:border-b",l),...t})});n.displayName="TableHeader";let d=t.forwardRef((e,a)=>{let{className:l,...t}=e;return(0,s.jsx)("tbody",{ref:a,className:(0,r.cn)("[&_tr:last-child]:border-0",l),...t})});d.displayName="TableBody",t.forwardRef((e,a)=>{let{className:l,...t}=e;return(0,s.jsx)("tfoot",{ref:a,className:(0,r.cn)("border-t bg-muted/50 font-medium [&>tr]:last:border-b-0",l),...t})}).displayName="TableFooter";let c=t.forwardRef((e,a)=>{let{className:l,...t}=e;return(0,s.jsx)("tr",{ref:a,className:(0,r.cn)("border-b transition-colors hover:bg-muted/50 data-[state=selected]:bg-muted",l),...t})});c.displayName="TableRow";let o=t.forwardRef((e,a)=>{let{className:l,...t}=e;return(0,s.jsx)("th",{ref:a,className:(0,r.cn)("h-12 px-4 text-left align-middle font-medium text-muted-foreground [&:has([role=checkbox])]:pr-0",l),...t})});o.displayName="TableHead";let u=t.forwardRef((e,a)=>{let{className:l,...t}=e;return(0,s.jsx)("td",{ref:a,className:(0,r.cn)("p-4 align-middle [&:has([role=checkbox])]:pr-0",l),...t})});u.displayName="TableCell",t.forwardRef((e,a)=>{let{className:l,...t}=e;return(0,s.jsx)("caption",{ref:a,className:(0,r.cn)("mt-4 text-sm text-muted-foreground",l),...t})}).displayName="TableCaption"},86864:function(e,a,l){"use strict";l.d(a,{SP:function(){return c},dr:function(){return d},mQ:function(){return n},nU:function(){return o}});var s=l(57437),t=l(2265),r=l(62447),i=l(37440);let n=r.fC,d=t.forwardRef((e,a)=>{let{className:l,...t}=e;return(0,s.jsx)(r.aV,{ref:a,className:(0,i.cn)("inline-flex h-10 items-center justify-center rounded-md bg-muted p-1 text-muted-foreground",l),...t})});d.displayName=r.aV.displayName;let c=t.forwardRef((e,a)=>{let{className:l,...t}=e;return(0,s.jsx)(r.xz,{ref:a,className:(0,i.cn)("inline-flex items-center justify-center whitespace-nowrap rounded-sm px-3 py-1.5 text-sm font-medium ring-offset-background transition-all focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:pointer-events-none disabled:opacity-50 data-[state=active]:bg-background data-[state=active]:text-foreground data-[state=active]:shadow-sm",l),...t})});c.displayName=r.xz.displayName;let o=t.forwardRef((e,a)=>{let{className:l,...t}=e;return(0,s.jsx)(r.VY,{ref:a,className:(0,i.cn)("mt-2 ring-offset-background focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2",l),...t})});o.displayName=r.VY.displayName},32897:function(e,a,l){"use strict";l.d(a,{y:function(){return i}});var s=l(84980),t=l(17042),r=l(40133);let i=()=>{let{token:e,isTokenExpired:a}=(0,r.a)(),{isAdmin:l}=(0,t.a)(),{data:i,isLoading:n,refetch:d}=(0,s.kAw)({headers:{Authorization:"Bearer ".concat(e)}},{enabled:l()&&!a(),retry:0,queryHash:"getTeams"});return{teams:i,isLoading:n,refetchTeams:d}}},77504:function(e,a,l){"use strict";function s(e){return null==e?void 0:e.split(" : ")[0]}function t(e){let a=null==e?void 0:e.split(" : ");return(null==a?void 0:a.length)===2?a[1]:"Centrale"}l.d(a,{Q:function(){return t},l:function(){return s}})}},function(e){e.O(0,[74,422,756,629,792,547,116,740,579,425,897,971,23,744],function(){return e(e.s=18916)}),_N_E=e.O()}]);