(self.webpackChunk_N_E=self.webpackChunk_N_E||[]).push([[3],{48952:function(e,l,a){Promise.resolve().then(a.bind(a,81062))},81062:function(e,l,a){"use strict";a.r(l),a.d(l,{default:function(){return z}});var s=a(57437),i=a(42729),n=a(612),t=a(8792),r=a(8967),d=a(33277),c=a(575),u=a(15671),o=a(5887),m=a(77625),v=a(38815);let x=e=>{var l;let{teams:a,isLoading:i}=e;return(0,s.jsxs)(u.Zb,{className:"xl:col-span-2",children:[(0,s.jsxs)(u.Ol,{className:"flex flex-row items-center",children:[(0,s.jsxs)("div",{className:"grid gap-2",children:[(0,s.jsx)(u.ll,{children:"Equipes"}),(0,s.jsxs)(u.SZ,{children:["Aper\xe7u des ",null!==(l=null==a?void 0:a.slice(0,5).length)&&void 0!==l?l:0," \xe9quipes les plus proches de la validation de leur dossier"]})]}),(0,s.jsx)(c.z,{asChild:!0,size:"sm",className:"ml-auto gap-1",children:(0,s.jsxs)(t.default,{href:"/admin/teams",children:["Voir tout",(0,s.jsx)(r.Z,{className:"h-4 w-4"})]})})]}),(0,s.jsx)(u.aY,{children:(0,s.jsxs)(o.iA,{children:[(0,s.jsx)(o.xD,{children:(0,s.jsxs)(o.SC,{children:[(0,s.jsx)(o.ss,{children:"Nom"}),(0,s.jsx)(o.ss,{className:"max-md:hidden",children:"Capitaine"}),(0,s.jsx)(o.ss,{className:"max-md:hidden",children:"Co\xe9quipier"}),(0,s.jsx)(o.ss,{className:"max-md:hidden",children:"Documents"}),(0,s.jsx)(o.ss,{className:"text-right",children:"Inscription"})]})}),(0,s.jsxs)(o.RM,{children:[i&&(0,s.jsx)(s.Fragment,{children:[void 0,void 0,void 0,void 0,void 0].map((e,l)=>(0,s.jsxs)(o.SC,{children:[(0,s.jsx)(o.pj,{className:"h-20",children:(0,s.jsx)(m.O,{className:"h-6 w-24"})}),[void 0,void 0,void 0].map((e,l)=>(0,s.jsx)(o.pj,{className:"max-md:hidden",children:(0,s.jsx)(m.O,{className:"h-6 w-24"})},l)),(0,s.jsx)(o.pj,{children:(0,s.jsx)(m.O,{className:"h-6 w-8  ml-auto"})})]},l))}),a&&(0,s.jsx)(s.Fragment,{children:a.toSorted((e,l)=>l.validation_progress%100-e.validation_progress%100).slice(0,5).map(e=>{var l,a,i,n,t,r,c;let u=e.captain.number_of_validated_document+(null!==(r=null===(l=e.second)||void 0===l?void 0:l.number_of_validated_document)&&void 0!==r?r:0),m=e.captain.number_of_document+(null!==(c=null===(a=e.second)||void 0===a?void 0:a.number_of_document)&&void 0!==c?c:0);return(0,s.jsxs)(o.SC,{children:[(0,s.jsx)(o.pj,{children:e.name}),(0,s.jsxs)(o.pj,{className:"max-md:hidden",children:[(0,s.jsxs)("div",{className:"font-medium",children:[null===(i=e.captain)||void 0===i?void 0:i.firstname," ",null===(n=e.captain)||void 0===n?void 0:n.name]}),(0,s.jsx)("div",{className:"text-sm text-muted-foreground max-md:hidden",children:null===(t=e.captain)||void 0===t?void 0:t.email})]}),(0,s.jsx)(o.pj,{className:"max-md:hidden",children:e.second?(0,s.jsxs)(s.Fragment,{children:[(0,s.jsxs)("div",{className:"font-medium",children:[e.second.firstname," ",e.second.name]}),(0,s.jsx)("div",{className:"text-sm text-muted-foreground max-md:hidden",children:e.second.email})]}):(0,s.jsx)("div",{className:"font-medium text-muted-foreground",children:"Non renseign\xe9"})}),(0,s.jsx)(o.pj,{className:"max-md:hidden",children:(0,s.jsx)("div",{className:"flex w-[150px] items-center",children:(0,s.jsxs)(d.C,{variant:"outline",children:[(0,s.jsx)(v.$,{value:u/m*100}),(0,s.jsxs)("span",{className:"ml-2",children:[u," /"," ",m," ","valid\xe9s"]})]})})}),(0,s.jsxs)(o.pj,{className:"text-right",children:[null==e?void 0:e.validation_progress.toFixed(0),"%"]})]},e.id)})})]})]})})]})};var h=a(26587),p=a(74251),f=a(13105),j=a(74994),b=a(64848);let g={cssVars:{light:{primary:"240 5.9% 10%"},dark:{primary:"0 0% 98%"}}},N=e=>{let{data:l}=e,{theme:a}=(0,b.F)();return(0,s.jsxs)("div",{children:[(0,s.jsx)(h.h,{className:"min-h-40 md:min-h-80",children:(0,s.jsx)(p.v,{data:l,children:(0,s.jsx)(f.$,{dataKey:"value",radius:[10,10,0,0],style:{fill:"hsl(".concat(null==g?void 0:g.cssVars["dark"===a?"dark":"light"].primary,")"),opacity:1},children:l.map((e,l)=>(0,s.jsx)(j.b,{},"cell-".concat(l+1)))})})}),(0,s.jsx)("div",{className:"flex flex-row mt-1",children:l.map((e,l)=>(0,s.jsxs)("div",{className:"flex flex-col w-full",children:[(0,s.jsx)("span",{className:"text-center font-semibold",children:e.label}),(0,s.jsx)("span",{className:"text-sm text-muted-foreground w-full text-center",children:e.value})]},"cell-".concat(l+1)))})]})};var k=a(99497),S=a(2265),w=a(94845),y=a(1657);let _=S.forwardRef((e,l)=>{let{className:a,...i}=e;return(0,s.jsx)(w.fC,{className:(0,y.cn)("peer inline-flex h-6 w-11 shrink-0 cursor-pointer items-center rounded-full border-2 border-transparent transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 focus-visible:ring-offset-background disabled:cursor-not-allowed disabled:opacity-50 data-[state=checked]:bg-primary data-[state=unchecked]:bg-input",a),...i,ref:l,children:(0,s.jsx)(w.bU,{className:(0,y.cn)("pointer-events-none block h-5 w-5 rounded-full bg-background shadow-lg ring-0 transition-transform data-[state=checked]:translate-x-5 data-[state=unchecked]:translate-x-0")})})});_.displayName=w.fC.displayName;var C=a(55348);let L=e=>{let{teams:l,isLoading:a}=e,[i,n]=(0,S.useState)(!1),{difficultyData:t,meetingPlaceData:r,bikeSizeData:d,tShirtSizeData:c,situationData:o}=function(e,l){var a,s,i,n,t;let r=null==l?void 0:l.filter(l=>e),d=(a=[{value:0,label:"D\xe9couverte"},{value:0,label:"Sportif"},{value:0,label:"Expert"}],e&&a.push({value:0,label:"Non renseign\xe9"}),r&&r.forEach(l=>{"discovery"===l.difficulty?a[0].value++:"sports"===l.difficulty?a[1].value++:"expert"===l.difficulty?a[2].value++:e&&a[3].value++}),a),c=(s=[{value:0,label:"Centrale Lyon"},{value:0,label:"Bellecour"},{value:0,label:"Peu importe"}],e&&s.push({value:0,label:"Non renseign\xe9"}),r&&r.forEach(l=>{switch(l.meeting_place){case"centrale":s[0].value++;break;case"bellecour":s[1].value++;break;case"anyway":s[2].value++;break;default:e&&s[3].value++}}),s);return{difficultyData:d,meetingPlaceData:c,bikeSizeData:(i=[{value:0,label:"XS"},{value:0,label:"S"},{value:0,label:"M"},{value:0,label:"L"},{value:0,label:"XL"}],e&&i.push({value:0,label:"N/A"}),r&&r.map(e=>[e.captain,e.second]).flat(1).forEach(l=>{if(l)switch(l.bike_size){case"XS":i[0].value++;break;case"S":i[1].value++;break;case"M":i[2].value++;break;case"L":i[3].value++;break;case"XL":i[4].value++;break;default:e&&i[5].value++}}),i),tShirtSizeData:(n=[{value:0,label:"XS"},{value:0,label:"S"},{value:0,label:"M"},{value:0,label:"L"},{value:0,label:"XL"}],e&&n.push({value:0,label:"N/A"}),r&&r.map(e=>[e.captain,e.second]).flat(1).forEach(l=>{if(l)switch(l.t_shirt_size){case"XS":n[0].value++;break;case"S":n[1].value++;break;case"M":n[2].value++;break;case"L":n[3].value++;break;case"XL":n[4].value++;break;default:e&&n[5].value++}}),n),situationData:(t=[{value:0,label:"Centrale Lyon"},{value:0,label:"Autre \xe9cole"},{value:0,label:"Partenaire"},{value:0,label:"Autre"}],e&&t.push({value:0,label:"N/A"}),r&&r.map(e=>[e.captain,e.second]).flat(1).forEach(l=>{if(l){var a;switch((0,C.l)(null!==(a=l.situation)&&void 0!==a?a:void 0)){case"centrale":t[0].value++;break;case"otherschool":t[1].value++;break;case"corporatepartner":t[2].value++;break;case"other":t[3].value++;break;default:e&&t[4].value++}}}),t)}}(i,l);return(0,s.jsxs)(u.Zb,{children:[(0,s.jsxs)(u.Ol,{className:"flex flex-row items-center justify-between",children:[(0,s.jsxs)("div",{className:"grid gap-2",children:[(0,s.jsx)(u.ll,{children:"Statistiques"}),(0,s.jsx)(u.SZ,{children:i?"Porte sur toutes les \xe9quipes":"Ne porte que sur les \xe9quipes valid\xe9es"})]}),(0,s.jsx)("div",{className:"items-center space-x-2 grid gap-2",children:(0,s.jsx)(_,{id:"airplane-mode",checked:i,onCheckedChange:n})})]}),(0,s.jsx)(u.aY,{children:(0,s.jsxs)(k.mQ,{defaultValue:"difficulty",children:[(0,s.jsxs)(k.dr,{className:"grid w-full grid-cols-5 mb-6",children:[(0,s.jsx)(k.SP,{value:"difficulty",children:"Parcours"}),(0,s.jsx)(k.SP,{value:"meetingPlace",children:"D\xe9part"}),(0,s.jsx)(k.SP,{value:"bikeSize",children:"VTT"}),(0,s.jsx)(k.SP,{value:"tShirtSize",children:"T-Shirt"}),(0,s.jsx)(k.SP,{value:"situation",children:"Situation"})]}),(0,s.jsx)(k.nU,{value:"difficulty",children:(0,s.jsx)(N,{data:t})}),(0,s.jsx)(k.nU,{value:"meetingPlace",children:(0,s.jsx)(N,{data:r})}),(0,s.jsx)(k.nU,{value:"bikeSize",children:(0,s.jsx)(N,{data:d})}),(0,s.jsx)(k.nU,{value:"tShirtSize",children:(0,s.jsx)(N,{data:c})}),(0,s.jsx)(k.nU,{value:"situation",children:(0,s.jsx)(N,{data:o})})]})})]})};var P=a(41391),O=a(47907),E=a(1146),z=()=>{var e;let{isAdmin:l}=(0,P.a)(),{teams:a,isLoading:t}=(0,E.y)(),r=(0,O.useRouter)(),d=null!==(e=null==a?void 0:a.map(e=>[e.captain,e.second]).flat(1).filter(e=>null!==e))&&void 0!==e?e:[],c=null==d?void 0:d.map(e=>e.payment?1:0).reduce((e,l)=>e+l,0),u=[{title:"Participants inscrits",value:(null==d?void 0:d.length.toString())||"0",description:"personnes ayant commenc\xe9 leur inscription",unit:void 0},{title:"Paiements efectu\xe9s",value:(null==c?void 0:c.toString())||"0",description:"".concat((null==d?void 0:d.length)-c," paiements manquants"),unit:void 0},{title:"Equipes valid\xe9es",value:(null==a?void 0:a.filter(e=>100===e.validation_progress).length.toString())||"0",description:"dossier complet valid\xe9 et pay\xe9",unit:void 0},{title:"Cloture des inscriptions",value:"01/09/2024",description:"x jours restants",unit:void 0}];return l()||r.replace("/?redirect=/admin"),(0,s.jsxs)("div",{className:"flex min-h-screen w-full flex-col",children:[(0,s.jsx)(n.D,{}),(0,s.jsxs)("main",{className:"flex flex-1 flex-col gap-4 p-4 md:gap-8 md:p-8",children:[(0,s.jsx)("div",{className:"grid gap-4 md:grid-cols-2 md:gap-8 lg:grid-cols-4",children:u.map(e=>(0,s.jsx)(i.L,{info:e,isLoaded:!t},e.title))}),(0,s.jsxs)("div",{className:"grid gap-4 md:gap-8 lg:grid-cols-2 xl:grid-cols-3",children:[(0,s.jsx)(x,{teams:a,isLoading:t}),(0,s.jsx)(L,{teams:a,isLoading:t})]})]})]})}},42729:function(e,l,a){"use strict";a.d(l,{L:function(){return t}});var s=a(57437),i=a(15671),n=a(77625);let t=e=>{let{info:l,isLoaded:a}=e;return(0,s.jsxs)(i.Zb,{children:[(0,s.jsxs)(i.Ol,{className:"flex flex-row items-center justify-between space-y-0 pb-2",children:[(0,s.jsx)(i.ll,{className:"text-sm font-medium",children:a?(0,s.jsx)("span",{children:l.title}):(0,s.jsx)(n.O,{className:"w-24 h-5"})}),l.unit&&(a?l.unit:(0,s.jsx)(n.O,{className:"w-4 h-4 text-muted-foreground"}))]}),(0,s.jsxs)(i.aY,{children:[(0,s.jsx)("div",{className:"text-2xl font-bold",children:a?l.value:(0,s.jsx)(n.O,{className:"w-[150px] h-6"})}),a?(0,s.jsx)("p",{className:"text-xs text-muted-foreground",children:l.description}):(0,s.jsx)(n.O,{className:"w-[120px] h-4 mt-1"})]})]},l.title)}},55348:function(e,l,a){"use strict";function s(e){return null==e?void 0:e.split(" : ")[0]}function i(e){let l=null==e?void 0:e.split(" : ");return(null==l?void 0:l.length)===2?l[1]:"Centrale"}a.d(l,{Q:function(){return i},l:function(){return s}})}},function(e){e.O(0,[422,470,536,169,665,397,475,590,228,971,69,744],function(){return e(e.s=48952)}),_N_E=e.O()}]);