(self.webpackChunk_N_E=self.webpackChunk_N_E||[]).push([[602],{88790:function(e,a,l){Promise.resolve().then(l.bind(l,52089))},52089:function(e,a,l){"use strict";l.r(a),l.d(a,{default:function(){return ed}});var s=l(57437),t=l(15671),n=l(2265),r=l(81006),i=l(63280),c=l(62177),d=l(575),o=l(22782),u=l(1657),m=l(82012),x=l(51014);let h=n.forwardRef((e,a)=>{let{className:l,orientation:t="horizontal",decorative:n=!0,...r}=e;return(0,s.jsx)(x.f,{ref:a,decorative:n,orientation:t,className:(0,u.cn)("shrink-0 bg-border","horizontal"===t?"h-[1px] w-full":"h-full w-[1px]",l),...r})});h.displayName=x.f.displayName;var j=l(33277),f=l(26739);function g(e){let{column:a,title:l,options:t}=e,n=null==a?void 0:a.getFacetedUniqueValues(),r=new Set(null==a?void 0:a.getFilterValue());return(0,s.jsxs)(m.J2,{children:[(0,s.jsx)(m.xo,{asChild:!0,children:(0,s.jsxs)(d.z,{variant:"outline",size:"sm",className:"h-8 border-dashed",children:[(0,s.jsx)(c.SPS,{className:"mr-2 h-4 w-4"}),l,(null==r?void 0:r.size)>0&&(0,s.jsxs)(s.Fragment,{children:[(0,s.jsx)(h,{orientation:"vertical",className:"mx-2 h-4"}),(0,s.jsx)(j.C,{variant:"secondary",className:"rounded-sm px-1 font-normal lg:hidden",children:r.size}),(0,s.jsx)("div",{className:"hidden space-x-1 lg:flex",children:r.size>2?(0,s.jsxs)(j.C,{variant:"secondary",className:"rounded-sm px-1 font-normal",children:[r.size," selected"]}):t.filter(e=>r.has(e.value)).map(e=>(0,s.jsx)(j.C,{variant:"secondary",className:"rounded-sm px-1 font-normal",children:e.label},e.value))})]})]})}),(0,s.jsx)(m.yk,{className:"w-[200px] p-0",align:"start",children:(0,s.jsxs)(f.mY,{children:[(0,s.jsx)(f.sZ,{placeholder:l}),(0,s.jsxs)(f.e8,{children:[(0,s.jsx)(f.rb,{children:"No results found."}),(0,s.jsx)(f.fu,{children:t.map(e=>{let l=r.has(e.value);return(0,s.jsxs)(f.di,{onSelect:()=>{l?r.delete(e.value):r.add(e.value);let s=Array.from(r);null==a||a.setFilterValue(s.length?s:void 0)},children:[(0,s.jsx)("div",{className:(0,u.cn)("mr-2 flex h-4 w-4 items-center justify-center rounded-sm border border-primary",l?"bg-primary text-primary-foreground":"opacity-50 [&_svg]:invisible"),children:(0,s.jsx)(c.nQG,{className:(0,u.cn)("h-4 w-4")})}),e.icon&&(0,s.jsx)(e.icon,{className:"mr-2 h-4 w-4 text-muted-foreground"}),(0,s.jsx)("span",{children:e.label}),(null==n?void 0:n.get(e.value))&&(0,s.jsx)("span",{className:"ml-auto flex h-4 w-4 items-center justify-center font-mono text-xs",children:n.get(e.value)})]},e.value)})}),r.size>0&&(0,s.jsxs)(s.Fragment,{children:[(0,s.jsx)(f.zz,{}),(0,s.jsx)(f.fu,{children:(0,s.jsx)(f.di,{onSelect:()=>null==a?void 0:a.setFilterValue(void 0),className:"justify-center text-center",children:"Clear filters"})})]})]})]})})]})}var p=l(81100),v=l(34645);function N(e){let{table:a}=e;return(0,s.jsxs)(v.h_,{children:[(0,s.jsx)(p.$F,{asChild:!0,children:(0,s.jsxs)(d.z,{variant:"outline",size:"sm",className:"ml-auto hidden h-8 lg:flex",children:[(0,s.jsx)(c.hsZ,{className:"mr-2 h-4 w-4"}),"Colonnes"]})}),(0,s.jsxs)(v.AW,{align:"end",className:"w-[180px]",children:[(0,s.jsx)(v.Ju,{children:"Activer les colonnes"}),(0,s.jsx)(v.VD,{}),a.getAllColumns().filter(e=>void 0!==e.accessorFn&&e.getCanHide()).map(e=>(0,s.jsx)(v.bO,{checked:e.getIsVisible(),onCheckedChange:a=>e.toggleVisibility(!!a),children:function(e){switch(e){case"second":return"Co\xe9quipier";case"captain":return"Capitaine";case"difficulty":return"Parcours";case"meeting_place":return"Lieu de rendez-vous";case"validation_progress":return"Inscription";case"document_progress":return"Documents";default:return e}}(e.id)},e.id))]})]})}var b=l(82084);function w(e){var a,l;let{table:t}=e,n=t.getState().columnFilters.length>0;return(0,s.jsxs)("div",{className:"flex items-center justify-between",children:[(0,s.jsxs)("div",{className:"flex flex-1 items-center space-x-2",children:[(0,s.jsx)(o.I,{placeholder:"Filtrer les \xe9quipes...",value:null!==(l=null===(a=t.getColumn("name"))||void 0===a?void 0:a.getFilterValue())&&void 0!==l?l:"",onChange:e=>{var a;return null===(a=t.getColumn("name"))||void 0===a?void 0:a.setFilterValue(e.target.value)},className:"h-8 w-[150px] lg:w-[250px]"}),t.getColumn("difficulty")&&(0,s.jsx)(g,{column:t.getColumn("difficulty"),title:"Parcours",options:b.n9}),t.getColumn("meeting_place")&&(0,s.jsx)(g,{column:t.getColumn("meeting_place"),title:"Lieu de rendez-vous",options:b.xQ}),n&&(0,s.jsxs)(d.z,{variant:"ghost",onClick:()=>t.resetColumnFilters(),className:"h-8 px-2 lg:px-3",children:["Supprimer",(0,s.jsx)(c.Pxu,{className:"ml-2 h-4 w-4"})]})]}),(0,s.jsx)(N,{table:t})]})}var y=l(18641);function C(e){let{table:a}=e;return(0,s.jsxs)("div",{className:"flex items-center justify-between px-2",children:[(0,s.jsxs)("div",{className:"flex-1 text-sm text-muted-foreground",children:[a.getFilteredSelectedRowModel().rows.length," sur"," ",a.getFilteredRowModel().rows.length," \xe9quipe(s) s\xe9l\xe9ctionn\xe9es."]}),(0,s.jsxs)("div",{className:"flex items-center space-x-6 lg:space-x-8",children:[(0,s.jsxs)("div",{className:"flex items-center space-x-2",children:[(0,s.jsx)("p",{className:"text-sm font-medium",children:"Equipes par page"}),(0,s.jsxs)(y.Ph,{value:"".concat(a.getState().pagination.pageSize),onValueChange:e=>{a.setPageSize(Number(e))},children:[(0,s.jsx)(y.i4,{className:"h-8 w-[70px]",children:(0,s.jsx)(y.ki,{placeholder:a.getState().pagination.pageSize})}),(0,s.jsx)(y.Bw,{side:"top",children:[10,20,30,40,50].map(e=>(0,s.jsx)(y.Ql,{value:"".concat(e),children:e},e))})]})]}),(0,s.jsxs)("div",{className:"flex w-[100px] items-center justify-center text-sm font-medium",children:["Page ",a.getState().pagination.pageIndex+1," sur"," ",a.getPageCount()]}),(0,s.jsxs)("div",{className:"flex items-center space-x-2",children:[(0,s.jsxs)(d.z,{variant:"outline",className:"hidden h-8 w-8 p-0 lg:flex",onClick:()=>a.setPageIndex(0),disabled:!a.getCanPreviousPage(),children:[(0,s.jsx)("span",{className:"sr-only",children:"Go to first page"}),(0,s.jsx)(c.kRt,{className:"h-4 w-4"})]}),(0,s.jsxs)(d.z,{variant:"outline",className:"h-8 w-8 p-0",onClick:()=>a.previousPage(),disabled:!a.getCanPreviousPage(),children:[(0,s.jsx)("span",{className:"sr-only",children:"Go to previous page"}),(0,s.jsx)(c.wyc,{className:"h-4 w-4"})]}),(0,s.jsxs)(d.z,{variant:"outline",className:"h-8 w-8 p-0",onClick:()=>a.nextPage(),disabled:!a.getCanNextPage(),children:[(0,s.jsx)("span",{className:"sr-only",children:"Go to next page"}),(0,s.jsx)(c.XCv,{className:"h-4 w-4"})]}),(0,s.jsxs)(d.z,{variant:"outline",className:"hidden h-8 w-8 p-0 lg:flex",onClick:()=>a.setPageIndex(a.getPageCount()-1),disabled:!a.getCanNextPage(),children:[(0,s.jsx)("span",{className:"sr-only",children:"Go to last page"}),(0,s.jsx)(c.yr4,{className:"h-4 w-4"})]})]})]})]})}var S=l(5887),k=l(47907);function V(e){var a;let{columns:l,data:t}=e,[c,d]=n.useState({}),[o,u]=n.useState({}),[m,x]=n.useState([]),[h,j]=n.useState([]),f=(0,k.useRouter)(),g=(0,r.b7)({data:t,columns:l,state:{sorting:h,columnVisibility:o,rowSelection:c,columnFilters:m},enableRowSelection:!0,onRowSelectionChange:d,onSortingChange:j,onColumnFiltersChange:x,onColumnVisibilityChange:u,getCoreRowModel:(0,i.sC)(),getFilteredRowModel:(0,i.vL)(),getPaginationRowModel:(0,i.G_)(),getSortedRowModel:(0,i.tj)(),getFacetedRowModel:(0,i.o6)(),getFacetedUniqueValues:(0,i.JG)()});return(0,s.jsxs)("div",{className:"space-y-4",children:[(0,s.jsx)(w,{table:g}),(0,s.jsx)("div",{className:"rounded-md border",children:(0,s.jsxs)(S.iA,{children:[(0,s.jsx)(S.xD,{children:g.getHeaderGroups().map(e=>(0,s.jsx)(S.SC,{children:e.headers.map(e=>(0,s.jsx)(S.ss,{colSpan:e.colSpan,children:e.isPlaceholder?null:(0,r.ie)(e.column.columnDef.header,e.getContext())},e.id))},e.id))}),(0,s.jsx)(S.RM,{children:(null===(a=g.getRowModel().rows)||void 0===a?void 0:a.length)?g.getRowModel().rows.map(e=>(0,s.jsx)(S.SC,{"data-state":e.getIsSelected()&&"selected",onClick:()=>{var a;return a=e.original.id,void f.replace("/admin/teams?teamId=".concat(a))},children:e.getVisibleCells().map(e=>(0,s.jsx)(S.pj,{children:(0,r.ie)(e.column.columnDef.cell,e.getContext())},e.id))},e.id)):(0,s.jsx)(S.SC,{children:(0,s.jsx)(S.pj,{colSpan:l.length,className:"h-24 text-center",children:"Pas de r\xe9sultat"})})})]})}),(0,s.jsx)(C,{table:g})]})}var _=l(79024);function z(e){let{column:a,title:l,className:t}=e;return a.getCanSort()?(0,s.jsx)("div",{className:(0,u.cn)("flex items-center space-x-2",t),children:(0,s.jsxs)(v.h_,{children:[(0,s.jsx)(v.$F,{asChild:!0,children:(0,s.jsxs)(d.z,{variant:"ghost",size:"sm",className:"-ml-3 h-8 data-[state=open]:bg-accent",children:[(0,s.jsx)("span",{children:l}),"desc"===a.getIsSorted()?(0,s.jsx)(c.veu,{className:"ml-2 h-4 w-4"}):"asc"===a.getIsSorted()?(0,s.jsx)(c.Hf3,{className:"ml-2 h-4 w-4"}):(0,s.jsx)(c.jnn,{className:"ml-2 h-4 w-4"})]})}),(0,s.jsxs)(v.AW,{align:"start",children:[(0,s.jsxs)(v.Xi,{onClick:()=>a.toggleSorting(!1),children:[(0,s.jsx)(c.Hf3,{className:"mr-2 h-3.5 w-3.5 text-muted-foreground/70"}),"Asc"]}),(0,s.jsxs)(v.Xi,{onClick:()=>a.toggleSorting(!0),children:[(0,s.jsx)(c.veu,{className:"mr-2 h-3.5 w-3.5 text-muted-foreground/70"}),"Desc"]}),(0,s.jsx)(v.VD,{}),(0,s.jsxs)(v.Xi,{onClick:()=>a.toggleVisibility(!1),children:[(0,s.jsx)(c.L52,{className:"mr-2 h-3.5 w-3.5 text-muted-foreground/70"}),"Cacher"]})]})]})}):(0,s.jsx)("div",{className:(0,u.cn)(t),children:l})}function P(e){let{row:a}=e,l=a.original;return(0,s.jsxs)(v.h_,{children:[(0,s.jsx)(v.$F,{asChild:!0,children:(0,s.jsxs)(d.z,{variant:"ghost",className:"flex h-8 w-8 p-0 data-[state=open]:bg-muted",children:[(0,s.jsx)(c.nWS,{className:"h-4 w-4"}),(0,s.jsx)("span",{className:"sr-only",children:"Open menu"})]})}),(0,s.jsxs)(v.AW,{align:"end",className:"w-[160px]",children:[(0,s.jsx)(v.Xi,{children:"Edit"}),(0,s.jsx)(v.Xi,{children:"Make a copy"}),(0,s.jsx)(v.Xi,{children:"Favorite"}),(0,s.jsx)(v.VD,{}),(0,s.jsxs)(v.Ph,{children:[(0,s.jsx)(v.kt,{children:"Parcours"}),(0,s.jsx)(v.TG,{children:(0,s.jsx)(v._x,{value:l.name,children:b.n9.map(e=>(0,s.jsx)(v.qB,{value:e.value,children:e.label},e.value))})})]}),(0,s.jsx)(v.VD,{}),(0,s.jsxs)(v.Xi,{children:["Delete",(0,s.jsx)(v.KM,{children:"⌘⌫"})]})]})]})}var R=l(86909);let F=[{id:"select",header:e=>{let{table:a}=e;return(0,s.jsx)(_.X,{checked:a.getIsAllPageRowsSelected()||a.getIsSomePageRowsSelected()&&"indeterminate",onCheckedChange:e=>a.toggleAllPageRowsSelected(!!e),"aria-label":"Select all",className:"translate-y-[2px]"})},cell:e=>{let{row:a}=e;return(0,s.jsx)(_.X,{checked:a.getIsSelected(),onCheckedChange:e=>a.toggleSelected(!!e),"aria-label":"Select row",className:"translate-y-[2px]"})},enableSorting:!1,enableHiding:!1},{accessorKey:"name",header:e=>{let{column:a}=e;return(0,s.jsx)(z,{column:a,title:"Equipe"})},cell:e=>{let{row:a}=e;return(0,s.jsx)("div",{children:a.getValue("name")})},enableSorting:!1,enableHiding:!1},{accessorKey:"captain",header:e=>{let{column:a}=e;return(0,s.jsx)(z,{column:a,title:"Capitaine"})},cell:e=>{let{row:a}=e,l=a.getValue("captain");return(0,s.jsxs)("div",{className:"flex space-x-2",children:[l.firstname," ",l.name]})},enableSorting:!1},{accessorKey:"second",header:e=>{let{column:a}=e;return(0,s.jsx)(z,{column:a,title:"Co\xe9quiper"})},cell:e=>{let{row:a}=e,l=a.getValue("second");return(0,s.jsx)("div",{className:"flex space-x-2 ".concat(null!=l?l:"text-muted-foreground"),children:l?"".concat(l.firstname," ").concat(l.name):"Non renseign\xe9"})},enableSorting:!1},{accessorKey:"difficulty",header:e=>{let{column:a}=e;return(0,s.jsx)(z,{column:a,title:"Parcours"})},cell:e=>{let{row:a}=e;return(0,s.jsx)("div",{className:"flex space-x-2",children:(0,s.jsx)(j.C,{variant:"outline",children:(0,b.Jg)(b.n9,a.getValue("difficulty"))})})},filterFn:(e,a,l)=>l.includes(e.getValue(a))},{accessorKey:"meeting_place",header:e=>{let{column:a}=e;return(0,s.jsx)(z,{column:a,title:"Lieu de rendez-vous"})},cell:e=>{let{row:a}=e;return(0,s.jsx)("div",{className:"flex space-x-2",children:(0,s.jsx)(j.C,{variant:"outline",children:(0,b.Jg)(b.xQ,a.getValue("meeting_place"))})})},filterFn:(e,a,l)=>l.includes(e.getValue(a))},{accessorKey:"validation_progress",header:e=>{let{column:a}=e;return(0,s.jsx)(z,{column:a,title:"Inscription"})},cell:e=>{let{row:a}=e;return(0,s.jsx)("div",{className:"flex w-[100px] items-center",children:(0,s.jsxs)("span",{children:[a.getValue("validation_progress").toFixed(0),"%"]})})},sortingFn:(e,a,l)=>e.getValue(l)-a.getValue(l)},{accessorKey:"document_progress",header:e=>{let{column:a}=e;return(0,s.jsx)(z,{column:a,title:"Documents"})},cell:e=>{var a,l,t,n;let{row:r}=e,i=r.getValue("captain").number_of_validated_document+(null!==(t=null===(a=r.getValue("second"))||void 0===a?void 0:a.number_of_validated_document)&&void 0!==t?t:0),c=r.getValue("captain").number_of_document+(null!==(n=null===(l=r.getValue("second"))||void 0===l?void 0:l.number_of_document)&&void 0!==n?n:0);return(0,s.jsx)("div",{className:"flex w-[150px] items-center",children:(0,s.jsxs)(j.C,{variant:"outline",children:[(0,s.jsx)("div",{className:"h-3 w-3",children:(0,s.jsx)(R.Ip,{value:i/c*100,strokeWidth:15,styles:(0,R.y3)({pathColor:"text-primary-background",strokeLinecap:"round"})})}),(0,s.jsxs)("span",{className:"ml-2",children:[i," / ",c," ","valid\xe9s"]})]})})},enableSorting:!1},{id:"actions",cell:e=>{let{row:a}=e;return(0,s.jsx)(P,{row:a})}}];var D=l(53832),A=l(1146),I=l(41391),L=l(50326),q=l(425),T=l(68855);let O=e=>{let{token:a,userId:l,isTokenExpired:s}=(0,T.a)(),{isAdmin:t}=(0,I.a)(),{data:n,refetch:r}=(0,q.oiV)({headers:{Authorization:"Bearer ".concat(a)},pathParams:{teamId:e}},{enabled:null!==l&&t()&&!s(),retry:0,queryHash:"getTeamById"});return{team:n,refetchTeam:r}};var M=l(99497),Z=l(68932),X=l(55348);let G=e=>{let{participant:a}=e;return(0,s.jsxs)(t.Zb,{children:[(0,s.jsxs)(t.Ol,{children:[(0,s.jsx)(t.ll,{children:a.firstname+" "+a.name}),(0,s.jsxs)(t.SZ,{children:["dossier particiant complet\xe9 \xe0"," ",a.validation_progress.toFixed(0),"%"]})]}),(0,s.jsxs)(t.aY,{children:[(0,s.jsx)(Z.l,{label:"Addresse",value:a.address}),(0,s.jsx)(Z.l,{label:"Taille de v\xe9lo",value:a.bike_size}),(0,s.jsx)(Z.l,{label:"Taille de t-shirt",value:a.t_shirt_size}),(0,s.jsx)(Z.l,{label:"R\xe9gime alimentaire",value:a.diet}),function(e){var a,l;let t=(0,X.l)(null!==(a=e.situation)&&void 0!==a?a:void 0),n=(0,X.Q)(null!==(l=e.situation)&&void 0!==l?l:void 0);return(0,s.jsxs)(s.Fragment,{children:[(0,s.jsx)(Z.l,{label:"Situation",value:(0,b.Jg)(b.LN,t)}),"otherschool"===t&&(0,s.jsx)(Z.l,{label:"Nom de l'\xe9cole",value:n}),"corporatepartner"===t&&(0,s.jsx)(Z.l,{label:"Nom de l'entreprise",value:n}),"other"===t&&(0,s.jsx)(Z.l,{label:"Autre situation",value:n})]})}(a),(0,s.jsx)(Z.l,{label:"Attestation sur l'honneur",value:a.attestation_on_honour})]})]})},Y=e=>{let{team:a}=e;return(0,s.jsxs)("div",{className:"grid xl:grid-cols-2 gap-4 w-full py-6 grid-cols-1 max-md:p-8 max-md:gap-4",children:[(0,s.jsx)(G,{participant:a.captain}),a.second?(0,s.jsx)(G,{participant:a.second}):(0,s.jsx)(t.Zb,{className:"w-full h-full",children:(0,s.jsx)(t.aY,{className:"w-full h-full mt-3",children:(0,s.jsx)("span",{className:"flex m-auto h-full justify-center items-center text-muted-foreground",children:"Aucun co\xe9quipier n'a \xe9t\xe9 ajout\xe9 \xe0 cette \xe9quipe."})})})]})};var B=l(77625),E=l(80146),H=l(23441);let U=E.fC,K=n.forwardRef((e,a)=>{let{className:l,...t}=e;return(0,s.jsx)(E.ck,{ref:a,className:(0,u.cn)("border-b",l),...t})});K.displayName="AccordionItem";let W=n.forwardRef((e,a)=>{let{className:l,children:t,...n}=e;return(0,s.jsx)(E.h4,{className:"flex",children:(0,s.jsxs)(E.xz,{ref:a,className:(0,u.cn)("flex flex-1 items-center justify-between py-4 font-medium transition-all hover:underline [&[data-state=open]>svg]:rotate-180",l),...n,children:[t,(0,s.jsx)(H.Z,{className:"h-4 w-4 shrink-0 transition-transform duration-200"})]})})});W.displayName=E.xz.displayName;let Q=n.forwardRef((e,a)=>{let{className:l,children:t,...n}=e;return(0,s.jsx)(E.VY,{ref:a,className:"overflow-hidden text-sm transition-all data-[state=closed]:animate-accordion-up data-[state=open]:animate-accordion-down",...n,children:(0,s.jsx)("div",{className:(0,u.cn)("pb-4 pt-0",l),children:t})})});Q.displayName=E.VY.displayName;var J=l(29908);let $=e=>{let{value:a,document:l,index:t,setDocument:n,downloadDocument:r,validateDocument:i,isValidationLoading:o}=e,u=l&&l.validated||!1;return(0,s.jsxs)(K,{value:"item-".concat(t),onClick:()=>{l&&n(l)},children:[(0,s.jsx)(W,{children:(0,s.jsxs)("div",{className:"flex flex-row mr-auto items-center",children:[u&&(0,s.jsx)(J.dZ6,{className:"mr-4"}),a]})}),(0,s.jsx)(Q,{children:l?(0,s.jsxs)("div",{className:"flex grid-cols-2 gap-6",children:[(0,s.jsx)(d.z,{variant:"outline",className:"w-full",onClick:e=>r(l),children:"T\xe9l\xe9charger le document"}),!u&&(0,s.jsx)(d.z,{className:"w-full",onClick:e=>{i(l.id)},disabled:o,children:o?(0,s.jsx)(c.BGW,{className:"mr-2 h-4 w-4 animate-spin"}):"Valider le document"})]}):(0,s.jsx)("span",{className:"text-muted-foreground",children:"Aucun document"})})]})},ee=e=>{var a,l,n,r;let{participant:i,setDocument:c,downloadDocument:d,validateDocument:o,isValidationLoading:u}=e;return(0,s.jsxs)(s.Fragment,{children:[(0,s.jsx)(t.Ol,{children:(0,s.jsxs)(t.ll,{children:[i.firstname," ",i.name]})}),(0,s.jsx)(t.aY,{children:(0,s.jsxs)(U,{type:"single",collapsible:!0,className:"w-full",children:[(0,s.jsx)($,{value:"Carte d'identit\xe9",document:i.id_card,index:0,setDocument:c,downloadDocument:d,validateDocument:o,isValidationLoading:u}),(0,s.jsx)($,{value:"Certificat m\xe9dical",document:i.medical_certificate,index:1,setDocument:c,downloadDocument:d,validateDocument:o,isValidationLoading:u}),(0,s.jsx)($,{value:"R\xe9glement",document:null!==(a=i.raid_rules)&&void 0!==a?a:null,index:2,setDocument:c,downloadDocument:d,validateDocument:o,isValidationLoading:u}),["centrale","otherschool"].includes(null!==(n=(0,X.l)(null!==(l=i.situation)&&void 0!==l?l:void 0))&&void 0!==n?n:"")&&(0,s.jsx)($,{value:"Carte \xe9tudiant",document:null!==(r=i.student_card)&&void 0!==r?r:null,index:3,setDocument:c,downloadDocument:d,validateDocument:o,isValidationLoading:u})]})})]})};var ea=l(99257),el=l(56201),es=l(77147);let et=e=>{let{team:a}=e,{getDocument:l,validateDocument:r,isValidationLoading:i}=(0,el.k)(),{refetchTeam:c}=O(a.id),{refetchTeams:d}=(0,A.y)(),[o,u]=(0,n.useState)(null),[m,x]=(0,n.useState)(null);function h(e,a){let s=e.type,t=l(a.id,s);if(void 0!==t){let e=t.type.split("/")[1],l="".concat(a.firstname,"_").concat(a.name,"_").concat(s,".").concat(e),n=window.URL.createObjectURL(new Blob([t])),r=document.createElement("a");r.href=n,r.setAttribute("download",l),document.body.appendChild(r),r.click()}}function j(e){r(e,()=>{c(),d(),(0,es.Am)({title:"Document valid\xe9 avec succ\xe8s"})})}let f=null==o?void 0:o.type;return(0,s.jsxs)("div",{className:"grid xl:grid-cols-2 gap-4 w-full py-6 grid-cols-1 max-md:p-8 max-md:gap-4",children:[(0,s.jsxs)(t.Zb,{children:[(0,s.jsx)(ee,{participant:a.captain,setDocument:e=>{var l;return l=a.captain.id,void(u(e),x(l))},downloadDocument:e=>h(e,a.captain),validateDocument:j,isValidationLoading:i}),a.second&&(0,s.jsx)(ee,{participant:a.second,setDocument:e=>{var l;return l=a.second.id,void(u(e),x(l))},downloadDocument:e=>h(e,a.second),validateDocument:j,isValidationLoading:i})]}),o&&f&&m&&(0,s.jsx)(ea.s,{userId:m,documentKey:f,id:o.id,file:l(m,f)})]})},en=e=>{let{participant:a,validateCallback:l,isLoading:n}=e;return(0,s.jsxs)(t.Zb,{children:[(0,s.jsx)(t.Ol,{children:(0,s.jsxs)(t.ll,{children:[a.firstname," ",a.name]})}),(0,s.jsx)(t.aY,{children:a.payment?(0,s.jsx)("p",{children:"L'inscription \xe0 \xe9t\xe9 pay\xe9e"}):(0,s.jsx)(d.z,{onClick:e=>l(a.id),disabled:n,className:"w-full",children:n?(0,s.jsx)(c.BGW,{className:"h-4 w-4 animate-spin"}):"Valider le paiement de l'inscription"})})]})},er=()=>{let{token:e}=(0,T.a)(),{mutate:a,isPending:l}=(0,q.t7X)();return{validatePayment:(l,s)=>{a({headers:{Authorization:"Bearer ".concat(e)},pathParams:{participantId:l}},{onSettled:()=>{s()}})},isLoading:l}},ei=e=>{let{team:a}=e,{validatePayment:l,isLoading:n}=er(),{refetchTeam:r}=O(a.id),{refetchTeams:i}=(0,A.y)();function c(e){l(e,()=>{r(),i(),(0,es.Am)({title:"Paiement valid\xe9 avec succ\xe8s"})})}return(0,s.jsxs)("div",{className:"grid xl:grid-cols-2 gap-4 w-full py-6 grid-cols-1 max-md:p-8 max-md:gap-4",children:[(0,s.jsx)(en,{participant:a.captain,validateCallback:c,isLoading:n}),a.second?(0,s.jsx)(en,{participant:a.second,validateCallback:c,isLoading:n}):(0,s.jsx)(t.Zb,{className:"w-full h-full",children:(0,s.jsx)(t.aY,{className:"w-full h-full mt-3",children:(0,s.jsx)("span",{className:"flex m-auto h-full justify-center items-center text-muted-foreground",children:"Aucun co\xe9quipier n'a \xe9t\xe9 ajout\xe9 \xe0 cette \xe9quipe."})})})]})},ec=e=>{let{isOpened:a,onClose:l,teamId:t}=e,{team:n}=O(t),r=(null==n?void 0:n.id)!==t;return(0,s.jsx)(L.yo,{open:a,onOpenChange:l,children:(0,s.jsxs)(L.ue,{side:"team",children:[(0,s.jsx)(L.Tu,{children:r?(0,s.jsxs)(s.Fragment,{children:[(0,s.jsx)(B.O,{className:"h-8 w-32"}),(0,s.jsx)(B.O,{className:"h-4 w-80"})]}):(0,s.jsxs)(s.Fragment,{children:[(0,s.jsx)(L.bC,{children:null==n?void 0:n.name}),(0,s.jsxs)(L.Ei,{children:["Dossier \xe9quipe complet\xe9 \xe0 ",null==n?void 0:n.validation_progress.toFixed(0)," ","%"]})]})}),(0,s.jsx)("div",{className:"p-4"}),(0,s.jsxs)(M.mQ,{defaultValue:"information",className:"",children:[(0,s.jsxs)(M.dr,{className:"grid grid-cols-3 w-[500px]",children:[(0,s.jsx)(M.SP,{value:"information",children:"Informations"}),(0,s.jsx)(M.SP,{value:"document",children:"Documents"}),(0,s.jsx)(M.SP,{value:"payment",children:"Paiement"})]}),r?(0,s.jsx)(B.O,{className:"h-96 w-192 mt-6"}):(0,s.jsxs)(s.Fragment,{children:[(0,s.jsx)(M.nU,{value:"information",children:n&&(0,s.jsx)(Y,{team:n})}),(0,s.jsx)(M.nU,{value:"document",children:n&&(0,s.jsx)(et,{team:n})}),(0,s.jsx)(M.nU,{value:"payment",children:n&&(0,s.jsx)(ei,{team:n})})]})]})]})})};var ed=()=>{let{isAdmin:e}=(0,I.a)(),{teams:a}=(0,A.y)(),l=(0,k.useRouter)(),r=(0,k.useSearchParams)(),[i,c]=(0,n.useState)(!1),[d,o]=(0,n.useState)(null);if(!e()){let e=new URL(window.location.href),a=e.pathname+e.search;l.replace("/?redirect=".concat(a))}let u=r.get("teamId");return u!==d&&(o(u),c(!!u)),(0,s.jsxs)("div",{className:"flex min-h-screen w-full flex-col bg-muted/40",children:[(0,s.jsx)(D.D,{}),(0,s.jsx)("main",{className:"grid flex-1 items-start gap-4 p-4 sm:px-6 sm:py-0 md:gap-8 mt-8",children:(0,s.jsxs)(t.Zb,{children:[(0,s.jsxs)(t.Ol,{children:[(0,s.jsx)(t.ll,{children:"Equipes"}),(0,s.jsx)(t.SZ,{children:"Liste des \xe9quipes enregistr\xe9es"})]}),(0,s.jsx)(t.aY,{children:a&&(0,s.jsx)(V,{data:a,columns:F})})]})}),d&&(0,s.jsx)(ec,{isOpened:i,onClose:function(){c(!1),l.replace("/admin/teams"),o(null)},teamId:d})]})}},53832:function(e,a,l){"use strict";l.d(a,{D:function(){return x}});var s=l(57437),t=l(8792),n=l(79744),r=l(575),i=l(34645),c=l(50326),d=l(40695),o=l(77625),u=l(41391),m=l(91806);let x=()=>{let{me:e}=(0,u.a)(),a=window.location.pathname;function l(e,l){let n=a===e;return(0,s.jsx)(t.default,{href:e,className:"".concat(n?"text-foreground":"text-muted-foreground"," transition-colors hover:text-foreground"),children:l})}function x(){return(0,s.jsxs)(s.Fragment,{children:[l("/admin","Tableau de bord"),l("/admin/teams","Equipes"),l("/admin/information","Informations")]})}return(0,s.jsxs)("header",{className:"sticky top-0 flex h-16 items-center gap-4 border-b bg-background px-4 md:px-6 z-10",children:[(0,s.jsx)("nav",{className:"hidden flex-col gap-6 text-lg font-medium md:flex md:flex-row md:items-center md:gap-5 md:text-sm lg:gap-6 mx-10 max-md:mx-0 w-full",children:x()}),(0,s.jsxs)(c.yo,{children:[(0,s.jsx)(c.aM,{asChild:!0,children:(0,s.jsxs)(r.z,{variant:"outline",size:"icon",className:"shrink-0 md:hidden",children:[(0,s.jsx)(n.Z,{className:"h-5 w-5"}),(0,s.jsx)("span",{className:"sr-only",children:"Toggle navigation menu"})]})}),(0,s.jsx)(c.ue,{side:"left",children:(0,s.jsx)("nav",{className:"grid gap-6 text-lg font-medium",children:x()})})]}),(0,s.jsx)("div",{className:"flex w-full items-center gap-4 md:ml-auto md:gap-2 lg:gap-4  mx-10 max-md:mx-0",children:(0,s.jsxs)("div",{className:"flex flex-row ml-auto",children:[(0,s.jsxs)(i.h_,{children:[(0,s.jsx)(i.$F,{asChild:!0,children:(0,s.jsx)(r.z,{variant:"ghost",children:(null==e?void 0:e.firstname)===void 0||(null==e?void 0:e.name)===void 0?(0,s.jsx)(s.Fragment,{children:(0,s.jsx)(o.O,{className:"w-24 h-6"})}):(0,s.jsx)(s.Fragment,{children:e.firstname+" "+e.name})})}),(0,s.jsx)(i.AW,{align:"end",children:(0,s.jsx)(i.Xi,{children:(0,s.jsx)(m.s,{})})})]}),(0,s.jsx)("div",{className:"w-4"}),(0,s.jsx)(d.U,{})]})})]})}},33277:function(e,a,l){"use strict";l.d(a,{C:function(){return i}});var s=l(57437);l(2265);var t=l(57742),n=l(1657);let r=(0,t.j)("inline-flex items-center rounded-full border px-2.5 py-0.5 text-xs font-semibold transition-colors focus:outline-none focus:ring-2 focus:ring-ring focus:ring-offset-2",{variants:{variant:{default:"border-transparent bg-primary text-primary-foreground hover:bg-primary/80",secondary:"border-transparent bg-secondary text-secondary-foreground hover:bg-secondary/80",destructive:"border-transparent bg-destructive text-destructive-foreground hover:bg-destructive/80",outline:"text-foreground"}},defaultVariants:{variant:"default"}});function i(e){let{className:a,variant:l,...t}=e;return(0,s.jsx)("div",{className:(0,n.cn)(r({variant:l}),a),...t})}},5887:function(e,a,l){"use strict";l.d(a,{RM:function(){return c},SC:function(){return d},iA:function(){return r},pj:function(){return u},ss:function(){return o},xD:function(){return i}});var s=l(57437),t=l(2265),n=l(1657);let r=t.forwardRef((e,a)=>{let{className:l,...t}=e;return(0,s.jsx)("div",{className:"relative w-full overflow-auto",children:(0,s.jsx)("table",{ref:a,className:(0,n.cn)("w-full caption-bottom text-sm",l),...t})})});r.displayName="Table";let i=t.forwardRef((e,a)=>{let{className:l,...t}=e;return(0,s.jsx)("thead",{ref:a,className:(0,n.cn)("[&_tr]:border-b",l),...t})});i.displayName="TableHeader";let c=t.forwardRef((e,a)=>{let{className:l,...t}=e;return(0,s.jsx)("tbody",{ref:a,className:(0,n.cn)("[&_tr:last-child]:border-0",l),...t})});c.displayName="TableBody",t.forwardRef((e,a)=>{let{className:l,...t}=e;return(0,s.jsx)("tfoot",{ref:a,className:(0,n.cn)("border-t bg-muted/50 font-medium [&>tr]:last:border-b-0",l),...t})}).displayName="TableFooter";let d=t.forwardRef((e,a)=>{let{className:l,...t}=e;return(0,s.jsx)("tr",{ref:a,className:(0,n.cn)("border-b transition-colors hover:bg-muted/50 data-[state=selected]:bg-muted",l),...t})});d.displayName="TableRow";let o=t.forwardRef((e,a)=>{let{className:l,...t}=e;return(0,s.jsx)("th",{ref:a,className:(0,n.cn)("h-12 px-4 text-left align-middle font-medium text-muted-foreground [&:has([role=checkbox])]:pr-0",l),...t})});o.displayName="TableHead";let u=t.forwardRef((e,a)=>{let{className:l,...t}=e;return(0,s.jsx)("td",{ref:a,className:(0,n.cn)("p-4 align-middle [&:has([role=checkbox])]:pr-0",l),...t})});u.displayName="TableCell",t.forwardRef((e,a)=>{let{className:l,...t}=e;return(0,s.jsx)("caption",{ref:a,className:(0,n.cn)("mt-4 text-sm text-muted-foreground",l),...t})}).displayName="TableCaption"},99497:function(e,a,l){"use strict";l.d(a,{SP:function(){return d},dr:function(){return c},mQ:function(){return i},nU:function(){return o}});var s=l(57437),t=l(2265),n=l(64694),r=l(1657);let i=n.fC,c=t.forwardRef((e,a)=>{let{className:l,...t}=e;return(0,s.jsx)(n.aV,{ref:a,className:(0,r.cn)("inline-flex h-10 items-center justify-center rounded-md bg-muted p-1 text-muted-foreground",l),...t})});c.displayName=n.aV.displayName;let d=t.forwardRef((e,a)=>{let{className:l,...t}=e;return(0,s.jsx)(n.xz,{ref:a,className:(0,r.cn)("inline-flex items-center justify-center whitespace-nowrap rounded-sm px-3 py-1.5 text-sm font-medium ring-offset-background transition-all focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:pointer-events-none disabled:opacity-50 data-[state=active]:bg-background data-[state=active]:text-foreground data-[state=active]:shadow-sm",l),...t})});d.displayName=n.xz.displayName;let o=t.forwardRef((e,a)=>{let{className:l,...t}=e;return(0,s.jsx)(n.VY,{ref:a,className:(0,r.cn)("mt-2 ring-offset-background focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2",l),...t})});o.displayName=n.VY.displayName},1146:function(e,a,l){"use strict";l.d(a,{y:function(){return r}});var s=l(425),t=l(41391),n=l(68855);let r=()=>{let{token:e,isTokenExpired:a}=(0,n.a)(),{isAdmin:l}=(0,t.a)(),{data:r,isLoading:i,refetch:c}=(0,s.kAw)({headers:{Authorization:"Bearer ".concat(e)}},{enabled:l()&&!a(),retry:0,queryHash:"getTeams"});return{teams:r,isLoading:i,refetchTeams:c}}}},function(e){e.O(0,[422,310,651,470,536,169,476,8,98,618,240,491,971,69,744],function(){return e(e.s=88790)}),_N_E=e.O()}]);