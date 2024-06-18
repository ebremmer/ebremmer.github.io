(self.webpackChunk_N_E=self.webpackChunk_N_E||[]).push([[931],{3814:function(e,a,t){Promise.resolve().then(t.bind(t,4759))},4845:function(e,a,t){"use strict";t.r(a),t.d(a,{default:function(){return o}});var r=t(7437),s=t(6648),n=t(9733),l=t(4867);function o(e){var a;let{result:t,goBack:o}=e;return console.log("err",t),(0,r.jsxs)("div",{className:"w-full lg:grid  min-h-screen lg:grid-cols-2 ",children:[(0,r.jsx)("div",{className:"flex flex-1 items-center justify-center rounded-lg border border-dashed shadow-sm",children:(0,r.jsxs)("div",{className:"flex flex-col items-center gap-1 text-center",children:[(0,r.jsx)("h2",{className:"text-2xl font-bold tracking-tight",children:"Wystąpił Błąd!"}),(0,r.jsx)("span",{className:"inline-block h-1 w-10 rounded bg-violet-500 mt-8 mb-6"}),(0,r.jsx)("p",{className:"text-sm text-muted-foreground",children:"Nie możemy dokonać rejestracji na wskutek błędu:"}),(0,r.jsx)("p",{children:(null==t?void 0:null===(a=t.val)||void 0===a?void 0:a.message)||(null==t?void 0:t.err)}),(0,r.jsxs)(n.z,{variant:"outline",className:"mt-8",onClick:o,children:[(0,r.jsx)(l.Y4O,{className:"h-3 w-3 mr-2"}),"Powr\xf3t"]})]})}),(0,r.jsx)("div",{className:"hidden bg-purple-700 lg:block place-content-center",children:(0,r.jsx)("div",{className:"flex justify-center",children:(0,r.jsx)(s.default,{src:"/logo.png",alt:"Image",width:"500",height:"558",className:"h-50% w-50% object-contain dark:brightness-[0.2] dark:grayscale"})})})]})}},4759:function(e,a,t){"use strict";t.r(a),t.d(a,{default:function(){return ev}});var r,s,n,l,o=t(7437),i=t(6648),d=t(7138),c=t(9733),m=t(2265),u=t(9354);let f=m.forwardRef((e,a)=>{let{className:t,type:r,...s}=e;return(0,o.jsx)("input",{type:r,className:(0,u.cn)("flex h-10 w-full rounded-md border border-input bg-background px-3 py-2 text-sm ring-offset-background file:border-0 file:bg-transparent file:text-sm file:font-medium placeholder:text-muted-foreground focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:cursor-not-allowed disabled:opacity-50",t),ref:a,...s})});f.displayName="Input";var x=t(1538),p=t(9343),g=t(8364),h=t(2218);let j=(0,h.j)("text-sm font-medium leading-none peer-disabled:cursor-not-allowed peer-disabled:opacity-70"),N=m.forwardRef((e,a)=>{let{className:t,...r}=e;return(0,o.jsx)(g.f,{ref:a,className:(0,u.cn)(j(),t),...r})});N.displayName=g.f.displayName;let y=p.RV,v=m.createContext({}),w=e=>{let{...a}=e;return(0,o.jsx)(v.Provider,{value:{name:a.name},children:(0,o.jsx)(p.Qr,{...a})})},b=()=>{let e=m.useContext(v),a=m.useContext(z),{getFieldState:t,formState:r}=(0,p.Gc)(),s=t(e.name,r);if(!e)throw Error("useFormField should be used within <FormField>");let{id:n}=a;return{id:n,name:e.name,formItemId:"".concat(n,"-form-item"),formDescriptionId:"".concat(n,"-form-item-description"),formMessageId:"".concat(n,"-form-item-message"),...s}},z=m.createContext({}),k=m.forwardRef((e,a)=>{let{className:t,...r}=e,s=m.useId();return(0,o.jsx)(z.Provider,{value:{id:s},children:(0,o.jsx)("div",{ref:a,className:(0,u.cn)("space-y-2",t),...r})})});k.displayName="FormItem";let _=m.forwardRef((e,a)=>{let{className:t,...r}=e,{error:s,formItemId:n}=b();return(0,o.jsx)(N,{ref:a,className:(0,u.cn)(s&&"text-destructive",t),htmlFor:n,...r})});_.displayName="FormLabel";let C=m.forwardRef((e,a)=>{let{...t}=e,{error:r,formItemId:s,formDescriptionId:n,formMessageId:l}=b();return(0,o.jsx)(x.g7,{ref:a,id:s,"aria-describedby":r?"".concat(n," ").concat(l):"".concat(n),"aria-invalid":!!r,...t})});C.displayName="FormControl",m.forwardRef((e,a)=>{let{className:t,...r}=e,{formDescriptionId:s}=b();return(0,o.jsx)("p",{ref:a,id:s,className:(0,u.cn)("text-sm text-muted-foreground",t),...r})}).displayName="FormDescription";let R=m.forwardRef((e,a)=>{let{className:t,children:r,...s}=e,{error:n,formMessageId:l}=b(),i=n?String(null==n?void 0:n.message):r;return i?(0,o.jsx)("p",{ref:a,id:l,className:(0,u.cn)("text-sm font-medium text-destructive",t),...s,children:i}):null});R.displayName="FormMessage";var I=t(466),P=t(1014),S=t(1282),Y=t(2468),E=t(911),V=t(1712),T=t(6876),Z=t(4817),O=t(3304),F=t(4697);O.fC,O.xz;let D=O.h_;O.x8;let L=m.forwardRef((e,a)=>{let{className:t,...r}=e;return(0,o.jsx)(O.aV,{ref:a,className:(0,u.cn)("fixed inset-0 z-50 bg-black/80  data-[state=open]:animate-in data-[state=closed]:animate-out data-[state=closed]:fade-out-0 data-[state=open]:fade-in-0",t),...r})});L.displayName=O.aV.displayName,m.forwardRef((e,a)=>{let{className:t,children:r,...s}=e;return(0,o.jsxs)(D,{children:[(0,o.jsx)(L,{}),(0,o.jsxs)(O.VY,{ref:a,className:(0,u.cn)("fixed left-[50%] top-[50%] z-50 grid w-full max-w-lg translate-x-[-50%] translate-y-[-50%] gap-4 border bg-background p-6 shadow-lg duration-200 data-[state=open]:animate-in data-[state=closed]:animate-out data-[state=closed]:fade-out-0 data-[state=open]:fade-in-0 data-[state=closed]:zoom-out-95 data-[state=open]:zoom-in-95 data-[state=closed]:slide-out-to-left-1/2 data-[state=closed]:slide-out-to-top-[48%] data-[state=open]:slide-in-from-left-1/2 data-[state=open]:slide-in-from-top-[48%] sm:rounded-lg",t),...s,children:[r,(0,o.jsxs)(O.x8,{className:"absolute right-4 top-4 rounded-sm opacity-70 ring-offset-background transition-opacity hover:opacity-100 focus:outline-none focus:ring-2 focus:ring-ring focus:ring-offset-2 disabled:pointer-events-none data-[state=open]:bg-accent data-[state=open]:text-muted-foreground",children:[(0,o.jsx)(F.Z,{className:"h-4 w-4"}),(0,o.jsx)("span",{className:"sr-only",children:"Close"})]})]})]})}).displayName=O.VY.displayName,m.forwardRef((e,a)=>{let{className:t,...r}=e;return(0,o.jsx)(O.Dx,{ref:a,className:(0,u.cn)("text-lg font-semibold leading-none tracking-tight",t),...r})}).displayName=O.Dx.displayName,m.forwardRef((e,a)=>{let{className:t,...r}=e;return(0,o.jsx)(O.dk,{ref:a,className:(0,u.cn)("text-sm text-muted-foreground",t),...r})}).displayName=O.dk.displayName;let A=m.forwardRef((e,a)=>{let{className:t,...r}=e;return(0,o.jsx)(T.mY,{ref:a,className:(0,u.cn)("flex h-full w-full flex-col overflow-hidden rounded-md bg-popover text-popover-foreground",t),...r})});A.displayName=T.mY.displayName;let J=m.forwardRef((e,a)=>{let{className:t,...r}=e;return(0,o.jsxs)("div",{className:"flex items-center border-b px-3","cmdk-input-wrapper":"",children:[(0,o.jsx)(Z.Z,{className:"mr-2 h-4 w-4 shrink-0 opacity-50"}),(0,o.jsx)(T.mY.Input,{ref:a,className:(0,u.cn)("flex h-11 w-full rounded-md bg-transparent py-3 text-sm outline-none placeholder:text-muted-foreground disabled:cursor-not-allowed disabled:opacity-50",t),...r})]})});J.displayName=T.mY.Input.displayName;let W=m.forwardRef((e,a)=>{let{className:t,...r}=e;return(0,o.jsx)(T.mY.List,{ref:a,className:(0,u.cn)("max-h-[300px] overflow-y-auto overflow-x-hidden",t),...r})});W.displayName=T.mY.List.displayName;let G=m.forwardRef((e,a)=>(0,o.jsx)(T.mY.Empty,{ref:a,className:"py-6 text-center text-sm",...e}));G.displayName=T.mY.Empty.displayName;let K=m.forwardRef((e,a)=>{let{className:t,...r}=e;return(0,o.jsx)(T.mY.Group,{ref:a,className:(0,u.cn)("overflow-hidden p-1 text-foreground [&_[cmdk-group-heading]]:px-2 [&_[cmdk-group-heading]]:py-1.5 [&_[cmdk-group-heading]]:text-xs [&_[cmdk-group-heading]]:font-medium [&_[cmdk-group-heading]]:text-muted-foreground",t),...r})});K.displayName=T.mY.Group.displayName,m.forwardRef((e,a)=>{let{className:t,...r}=e;return(0,o.jsx)(T.mY.Separator,{ref:a,className:(0,u.cn)("-mx-1 h-px bg-border",t),...r})}).displayName=T.mY.Separator.displayName;let q=m.forwardRef((e,a)=>{let{className:t,...r}=e;return(0,o.jsx)(T.mY.Item,{ref:a,className:(0,u.cn)("relative flex cursor-default select-none items-center rounded-sm px-2 py-1.5 text-sm outline-none aria-selected:bg-accent aria-selected:text-accent-foreground data-[disabled=true]:pointer-events-none data-[disabled=true]:opacity-50",t),...r})});q.displayName=T.mY.Item.displayName;var M=t(5569);let B=M.fC,Q=M.xz,U=m.forwardRef((e,a)=>{let{className:t,align:r="center",sideOffset:s=4,...n}=e;return(0,o.jsx)(M.h_,{children:(0,o.jsx)(M.VY,{ref:a,align:r,sideOffset:s,className:(0,u.cn)("z-50 w-72 rounded-md border bg-popover p-4 text-popover-foreground shadow-md outline-none data-[state=open]:animate-in data-[state=closed]:animate-out data-[state=closed]:fade-out-0 data-[state=open]:fade-in-0 data-[state=closed]:zoom-out-95 data-[state=open]:zoom-in-95 data-[side=bottom]:slide-in-from-top-2 data-[side=left]:slide-in-from-right-2 data-[side=right]:slide-in-from-left-2 data-[side=top]:slide-in-from-bottom-2",t),...n})})});U.displayName=M.VY.displayName;var H=t(1276);let X=m.forwardRef((e,a)=>{let{className:t,children:r,...s}=e;return(0,o.jsxs)(H.fC,{ref:a,className:(0,u.cn)("relative overflow-hidden",t),...s,children:[(0,o.jsx)(H.l_,{className:"h-full w-full rounded-[inherit]",children:r}),(0,o.jsx)($,{}),(0,o.jsx)(H.Ns,{})]})});X.displayName=H.fC.displayName;let $=m.forwardRef((e,a)=>{let{className:t,orientation:r="vertical",...s}=e;return(0,o.jsx)(H.gb,{ref:a,orientation:r,className:(0,u.cn)("flex touch-none select-none transition-colors","vertical"===r&&"h-full w-2.5 border-l border-l-transparent p-[1px]","horizontal"===r&&"h-2.5 flex-col border-t border-t-transparent p-[1px]",t),...s,children:(0,o.jsx)(H.q4,{className:"relative flex-1 rounded-full bg-border"})})});$.displayName=H.gb.displayName;let ee=m.forwardRef((e,a)=>{let{className:t,onChange:r,...s}=e;return(0,o.jsx)(E.ZP,{ref:a,className:(0,u.cn)("flex",t),flagComponent:er,countrySelectComponent:et,inputComponent:ea,onChange:e=>null==r?void 0:r(e),...s})});ee.displayName="PhoneInput";let ea=m.forwardRef((e,a)=>{let{className:t,...r}=e;return(0,o.jsx)(f,{className:(0,u.cn)("rounded-e-lg rounded-s-none",t),...r,ref:a})});ea.displayName="InputComponent";let et=e=>{let{disabled:a,value:t,onChange:r,options:s}=e,n=m.useCallback(e=>{r(e)},[r]);return(0,o.jsxs)(B,{children:[(0,o.jsx)(Q,{asChild:!0,children:(0,o.jsxs)(c.z,{type:"button",variant:"outline",className:(0,u.cn)("flex gap-1 rounded-e-none rounded-s-lg px-3"),disabled:a,children:[(0,o.jsx)(er,{country:t,countryName:t}),(0,o.jsx)(S.Z,{className:(0,u.cn)("-mr-2 h-4 w-4 opacity-50",a?"hidden":"opacity-100")})]})}),(0,o.jsx)(U,{className:"w-[300px] p-0",children:(0,o.jsx)(A,{children:(0,o.jsx)(W,{children:(0,o.jsxs)(X,{className:"h-72",children:[(0,o.jsx)(J,{placeholder:"Search country..."}),(0,o.jsx)(G,{children:"No country found."}),(0,o.jsx)(K,{children:s.filter(e=>e.value).map(e=>(0,o.jsxs)(q,{className:"gap-2",onSelect:()=>n(e.value),children:[(0,o.jsx)(er,{country:e.value,countryName:e.label}),(0,o.jsx)("span",{className:"flex-1 text-sm",children:e.label}),e.value&&(0,o.jsx)("span",{className:"text-sm text-foreground/50",children:"+".concat(E.Gg(e.value))}),(0,o.jsx)(Y.Z,{className:(0,u.cn)("ml-auto h-4 w-4",e.value===t?"opacity-100":"opacity-0")})]},e.value))})]})})})})]})},er=e=>{let{country:a,countryName:t}=e,r=V.ZP[a];return(0,o.jsx)("span",{className:"flex h-4 w-6 overflow-hidden rounded-sm bg-foreground/20",children:r&&(0,o.jsx)(r,{title:t})})};er.displayName="FlagComponent";var es=t(6780);let en=(0,h.j)("relative w-full rounded-lg border p-4 [&>svg~*]:pl-7 [&>svg+div]:translate-y-[-3px] [&>svg]:absolute [&>svg]:left-4 [&>svg]:top-4 [&>svg]:text-foreground",{variants:{variant:{default:"bg-background text-foreground",destructive:"border-destructive/50 text-destructive dark:border-destructive [&>svg]:text-destructive"}},defaultVariants:{variant:"default"}}),el=m.forwardRef((e,a)=>{let{className:t,variant:r,...s}=e;return(0,o.jsx)("div",{ref:a,role:"alert",className:(0,u.cn)(en({variant:r}),t),...s})});el.displayName="Alert";let eo=m.forwardRef((e,a)=>{let{className:t,...r}=e;return(0,o.jsx)("h5",{ref:a,className:(0,u.cn)("mb-1 font-medium leading-none tracking-tight",t),...r})});eo.displayName="AlertTitle";let ei=m.forwardRef((e,a)=>{let{className:t,...r}=e;return(0,o.jsx)("div",{ref:a,className:(0,u.cn)("text-sm [&_p]:leading-relaxed",t),...r})});ei.displayName="AlertDescription";var ed=t(4867);function ec(e){let{result:{val:a},goBack:t}=e,[r,s]=(0,m.useState)(!1),[n,l]=(0,m.useState)(!1),[d,u]=(0,m.useState)(!1),[f,x]=(0,m.useState)(!1);return(0,o.jsxs)("div",{className:"w-full lg:grid  min-h-screen lg:grid-cols-2 ",children:[(0,o.jsxs)("div",{className:"flex flex-col px-6 pt-16 min-h-screen bg-slate-50",children:[(0,o.jsx)("h1",{className:"sm:text-3xl text-2xl font-medium title-font mb-4 text-gray-900",children:"Rejestracja przebiegła pomyślnie!"}),(0,o.jsx)("span",{className:"inline-block h-1 w-10 rounded bg-violet-500 mt-8 mb-6"}),(0,o.jsx)("h1",{className:" font-medium title-font mb-4 text-gray-700",children:"Potwierdzamy rejestrację na szkolenie"}),(0,o.jsx)("h2",{className:"font-medium title-font mb-4 text-violet-900",children:a.EventName}),(0,o.jsx)("h1",{className:"font-medium title-font mb-4 text-gray-700",children:"Aby ostatecznie potwierdzić udzał w wydarzeniu proszę dokonać płatności na poniższy numer konta"}),(0,o.jsx)("h2",{className:"font-medium title-font mb-4 text-violet-900",children:(0,o.jsxs)(c.z,{variant:"outline",onClick:()=>{navigator.clipboard.writeText(a.EventPayableAccount),s(!0)},children:[r?(0,o.jsx)(ed.nQG,{className:"h-3 w-3 mr-2"}):(0,o.jsx)(ed.dqY,{className:"h-3 w-3 mr-2"}),a.EventPayableAccount]})}),(0,o.jsx)("h2",{className:"font-medium title-font mb-4 text-gray-700",children:"Odbiorca przelewu"}),(0,o.jsx)("h2",{className:"font-medium title-font mb-4 text-violet-900",children:(0,o.jsxs)(c.z,{variant:"outline",onClick:()=>{navigator.clipboard.writeText("DentalProcess"),l(!0)},children:[n?(0,o.jsx)(ed.nQG,{className:"h-3 w-3 mr-2"}):(0,o.jsx)(ed.dqY,{className:"h-3 w-3 mr-2"}),"DentalProcess"]})}),(0,o.jsx)("h1",{className:"font-medium title-font mb-4 text-gray-700",children:"Kwota"}),(0,o.jsx)("h2",{className:"font-medium title-font mb-4 text-violet-900",children:(0,o.jsxs)(c.z,{variant:"outline",onClick:()=>{navigator.clipboard.writeText(a.DiscountedPrice),u(!0)},children:[d?(0,o.jsx)(ed.nQG,{className:"h-3 w-3 mr-2"}):(0,o.jsx)(ed.dqY,{className:"h-3 w-3 mr-2"}),a.DiscountedPrice.toFixed(2)," ",a.PriceCurrency]})}),(0,o.jsx)("h1",{className:"font-medium title-font mb-4 text-gray-700",children:"Tytuł przelewu"}),(0,o.jsxs)("h2",{className:"font-medium title-font mb-4 text-violet-900",children:[(0,o.jsxs)(c.z,{className:"mb-4 mr-4",variant:"outline",onClick:()=>{navigator.clipboard.writeText("".concat(a.DomainID," ").concat(a.ReferenceKey," ").concat(a.LastName," ").concat(a.FirstName)),x(!0)},children:[f?(0,o.jsx)(ed.nQG,{className:"h-3 w-3 mr-2"}):(0,o.jsx)(ed.dqY,{className:"h-3 w-3 mr-2"}),a.DomainID,"..."]}),(0,o.jsxs)("p",{className:"px-4",children:[a.DomainID," ",a.ReferenceKey," ",a.LastName," ",a.FirstName]})]}),(0,o.jsx)("div",{className:"flex items-center justify-center",children:(0,o.jsxs)(c.z,{variant:"outline",className:"mt-8",onClick:t,children:[(0,o.jsx)(ed.Y4O,{className:"h-3 w-3 mr-2"}),"Powr\xf3t"]})})]}),(0,o.jsx)("div",{className:"hidden bg-purple-900 lg:block place-content-center",children:(0,o.jsx)("div",{className:"flex justify-center",children:(0,o.jsx)(i.default,{src:"/logo.png",alt:"Image",width:"500",height:"558",className:"h-50% w-50% object-contain dark:brightness-[0.2] dark:grayscale"})})})]})}var em=t(4845),eu=t(9772);let ef=eu.Ry({organizationTaxid:eu.Z_().trim().refine(function(e){if("string"!=typeof e)return!1;e=e.replace(/[\ \-]/gi,"");let a=[6,5,7,2,3,4,5,6,7],t=0,r=parseInt(e.substring(9,10)),s=a.length;for(let r=0;r<s;r++)t+=parseInt(e.substr(r,1))*a[r];return t%11===r},{message:"Niepoprawny numer NIP"}).optional().or(eu.i0(""))}),ex=eu.Ry({organization:eu.Z_().trim().min(3,{message:"Nazwa organizacji powinna mieć co najmniej 3 znaki"}).optional().or(eu.i0(""))}),ep=(e,a)=>{let{organizationTaxid:t,organization:r}=e,s=(null==t?void 0:t.trim())||"",n=(null==r?void 0:r.trim())||"";return(console.log("checking organizationTaxid: '".concat(s,"', organization:'").concat(n,"'")),s.length>0&&n.length<1)?(console.log("Jeśli podasz NIP, nazwa organizacji jest wymagana"),a.addIssue({code:eu.NL.custom,message:"Jeśli podasz NIP, nazwa organizacji jest wymagana",path:["organization"],fatal:!0}),eu.C4):n.length>0&&s.length<1?(console.log("Jesli podasz nazwę organizacji, NIP jest wymagany"),a.addIssue({code:eu.NL.custom,message:"Jesli podasz nazwę organizacji, NIP jest wymagany",path:["organizationTaxid"],fatal:!0}),eu.C4):(console.log("all good"),eu.OK)},eg=ex.merge(ef).superRefine(ep),eh=eu.Ry({email:eu.Z_().email("Niepoprawny email"),phone:eu.Z_().refine(E.yf,{message:"Niepoprawny numer telefonu"}),firstName:eu.Z_({required_error:"Podaj imię, umieścimy je na certyfikacie"}).min(3,{message:"Imię powinno mieć co najmniej 3 znaki"}),lastName:eu.Z_({required_error:"Podaj nazwisko, umieścimy je na certyfikacie"}).min(3,{message:"Nazwisko powinno mieć co najmniej 3 znaki"}),streetAddress:eu.Z_().min(5,{message:"Podaj adres, nazwę ulicy, numer budynku i lokalu"}),postalCode:eu.Z_().min(6,{message:"Podaj kod pocztowy"}).regex(/\d{2}-\d{3}/),addressLevel2:eu.Z_().min(3,{message:"Podaj nazwę miejscowości"})}).merge(ef).merge(ex).superRefine(ep);var ej=t(3548),eN=t(7453),ey=t(82);function ev(){let e={eid:"",did:null,err:null,val:null,status:-1},[a,t]=(0,m.useState)(e);(0,m.useEffect)(()=>{let a=new URLSearchParams(document.location.search),r=a.get("e"),s=a.get("did"),n=e;if(s&&(n={...n,did:s}),!r){ey.ZP.capture("no_event_id",{eid:r}),t((0,eN.uM)("Nieznane wydarzenie. Proszę otworzyć rejestrację ze strony wydarzenia"));return}if(r.startsWith("rec")||Number(r)>0){t(n={...n,eid:r});return}ey.ZP.capture("no_valid_event_id",{eid:r}),t((0,eN.uM)("Nieznane wydarzenie. Proszę otworzyć rejestrację ze strony wydarzenia"))},[]);let r=(0,p.cI)({resolver:(0,P.F)(eh),reValidateMode:"onChange",mode:"all"}),s=(0,I.vh)({mask:"___-___-__-__",replacement:{_:/\d/}}),n=(0,I.vh)({mask:"__-___",replacement:{_:/\d/}});async function l(e){let r=await fetch("https://dpr_service_nc.dpsx.workers.dev/api/register",{method:"POST",headers:{"Content-Type":"application/json"},body:a.did?JSON.stringify({eid:a.eid,did:a.did,...e}):JSON.stringify({eid:a.eid,...e})}).then(ew);console.log("Registration result",r),r.ok?t({...r,status:0}):t({...r,status:"Nieoczekiwany błąd serwera"})}return(console.log(a),a.err)?(0,o.jsx)(em.default,{result:a,goBack:function(){t({...e,eid:a.eid,did:a.did})}}):0===a.status?(0,o.jsx)(ec,{result:a.val,goBack:()=>(r.setValue("email",""),r.setValue("phone",""),r.setValue("firstName",""),r.setValue("lastName",""),t({...e,eid:a.eid,did:a.did}))}):(0,o.jsxs)("div",{className:"w-full lg:grid  min-h-screen lg:grid-cols-2 ",children:[r.formState.isSubmitting?(0,o.jsxs)("div",{className:"flex flex-col place-content-center min-h-screen bg-slate-50",children:[(0,o.jsxs)("div",{className:"not-prose relative bg-slate-50 rounded-xl overflow-hidden dark:bg-slate-800/25",children:[(0,o.jsx)("div",{style:{backgroundPosition:"10px 10px"},className:"absolute inset-0 bg-grid-slate-100 [mask-image:linear-gradient(0deg,#fff,rgba(255,255,255,0.6))] dark:bg-grid-slate-700/25 dark:[mask-image:linear-gradient(0deg,rgba(255,255,255,0.1),rgba(255,255,255,0.5))]"}),(0,o.jsx)("div",{className:"relative rounded-xl overflow-auto p-8",children:(0,o.jsx)("div",{className:"flex justify-center",children:(0,o.jsx)("div",{className:"animate-bounce bg-white dark:bg-slate-800 p-2 w-10 h-10 ring-1 ring-slate-900/5 dark:ring-slate-200/20 shadow-lg rounded-full flex items-center justify-center",children:(0,o.jsx)("svg",{className:"w-6 h-6 text-violet-500",fill:"none",strokeLinecap:"round",strokeLinejoin:"round",strokeWidth:"2",viewBox:"0 0 24 24",stroke:"currentColor",children:(0,o.jsx)("path",{d:"M19 14l-7 7m0 0l-7-7m7 7V3"})})})})}),(0,o.jsx)("div",{className:"absolute inset-0 pointer-events-none  rounded-xl "})]}),(0,o.jsx)("div",{className:"flex justify-center",children:(0,o.jsx)("h1",{className:"text-2xl font-bold",children:"Trwa Rejestracja"})})]}):(0,o.jsx)("div",{className:"flex items-center justify-center py-12 bg-slate-50",children:(0,o.jsxs)("div",{className:"mx-auto grid w-[350px] gap-6",children:[(0,o.jsxs)("div",{className:"grid gap-2 text-center",children:[(0,o.jsx)("h1",{className:"text-3xl font-bold",children:"Rejestracja"}),(0,o.jsx)("p",{className:"text-balance text-muted-foreground",children:"Wypełnij formularz, aby zarejestrować się na wydarzenie"})]}),(0,o.jsx)(y,{...r,children:(0,o.jsx)("form",{onSubmit:r.handleSubmit(l),children:(0,o.jsxs)("div",{className:"grid gap-4",children:[(0,o.jsx)(w,{control:r.control,name:"email",render:e=>{let{field:a}=e;return(0,o.jsxs)(k,{className:"flex flex-col items-start",children:[(0,o.jsx)(_,{className:"text-left",children:"Email"}),(0,o.jsx)(C,{className:"w-full",children:(0,o.jsx)(f,{...a,type:"email",autoComplete:"email"})}),(0,o.jsx)(R,{})]})}}),(0,o.jsx)(w,{control:r.control,name:"phone",render:e=>{let{field:a}=e;return(0,o.jsxs)(k,{className:"flex flex-col items-start",children:[(0,o.jsx)(_,{className:"text-left",children:"Numer Telefonu"}),(0,o.jsx)(C,{className:"w-full",children:(0,o.jsx)(ee,{defaultCountry:"PL",placeholder:"Wprowadź numer telefonu",...a})}),(0,o.jsx)(R,{})]})}}),(0,o.jsx)(w,{control:r.control,name:"firstName",render:e=>{let{field:a}=e;return(0,o.jsxs)(k,{className:"flex flex-col items-start",children:[(0,o.jsx)(_,{className:"text-left",children:"Imię"}),(0,o.jsx)(C,{className:"w-full",children:(0,o.jsx)(f,{...a,type:"text",autoComplete:"given-name"})}),(0,o.jsx)(R,{})]})}}),(0,o.jsx)(w,{control:r.control,name:"lastName",render:e=>{let{field:a}=e;return(0,o.jsxs)(k,{className:"flex flex-col items-start",children:[(0,o.jsx)(_,{className:"text-left",children:"Nazwisko"}),(0,o.jsx)(C,{className:"w-full",children:(0,o.jsx)(f,{...a,type:"text",autoComplete:"family-name"})}),(0,o.jsx)(R,{})]})}}),(0,o.jsx)(w,{control:r.control,name:"organizationTaxid",rules:{deps:["organization"]},render:e=>{let{field:a}=e;return(0,o.jsxs)(k,{className:"flex flex-col items-start",children:[(0,o.jsx)(_,{className:"text-left",children:"NIP: Numer Identyfikacji Podatkowej"}),(0,o.jsx)(C,{className:"w-full",children:(0,o.jsx)(f,{...a,ref:s,type:"text",placeholder:"(Opcjonalnie)",autoComplete:"organization-taxid",onChange:e=>{r.setValue("organizationTaxid",e.target.value);let{organization:a,organizationTaxid:t}=r.getValues(),s=eg.safeParse({organization:a,organizationTaxid:t});if(s.error){console.log(s),s.error.issues.forEach(e=>{console.log(e.path.join(".")),r.setError(e.path.join("."),{message:e.message})});return}r.clearErrors(["organization","organizationTaxid"]),console.log('<Input organizationTaxId onChange org:value="'.concat(a,'" validationResult="').concat(JSON.stringify(s),'">'))}})}),(0,o.jsx)(R,{})]})}}),(0,o.jsx)(w,{control:r.control,name:"organization",rules:{deps:["organizationTaxid"]},render:e=>{let{field:a}=e;return(0,o.jsxs)(k,{className:"flex flex-col items-start",children:[(0,o.jsx)(_,{className:"text-left",children:"Nazwa firmy"}),(0,o.jsx)(C,{className:"w-full",children:(0,o.jsx)(f,{...a,type:"text",placeholder:"(Opcjonalnie)",autoComplete:"organization",onChange:e=>{let a=e.target.value;r.setValue("organization",a);let{organization:t,organizationTaxid:s}=r.getValues(),n=eg.safeParse({organization:t,organizationTaxid:s});if(n.error){console.log(n),n.error.issues.forEach(e=>{console.log(e.path.join(".")),r.setError(e.path.join("."),{message:e.message})});return}r.clearErrors(["organization","organizationTaxid"]),console.log('<Input organization onChange orgTaxId:value="'.concat(s,'" validationResult="').concat(JSON.stringify(n),'">'))}})}),(0,o.jsx)(R,{})]})}}),(0,o.jsx)(w,{control:r.control,name:"streetAddress",render:e=>{let{field:a}=e;return(0,o.jsxs)(k,{className:"flex flex-col items-start",children:[(0,o.jsx)(_,{className:"text-left",children:"Adres"}),(0,o.jsx)(C,{className:"w-full",children:(0,o.jsx)(f,{...a,type:"text",placeholder:"Ul. Jana Kochanowskiego 1",autoComplete:"street-address"})}),(0,o.jsx)(R,{})]})}}),(0,o.jsx)(w,{control:r.control,name:"postalCode",render:e=>{let{field:a}=e;return(0,o.jsxs)(k,{className:"flex flex-col items-start",children:[(0,o.jsx)(_,{className:"text-left",children:"Kod Pocztowy"}),(0,o.jsx)(C,{className:"w-full",children:(0,o.jsx)(f,{...a,ref:n,type:"text",placeholder:"50-100",autoComplete:"postal-code"})}),(0,o.jsx)(R,{})]})}}),(0,o.jsx)(w,{control:r.control,name:"addressLevel2",render:e=>{let{field:a}=e;return(0,o.jsxs)(k,{className:"flex flex-col items-start",children:[(0,o.jsx)(_,{className:"text-left",children:"Miejscowość"}),(0,o.jsx)(C,{className:"w-full",children:(0,o.jsx)(f,{...a,type:"text",placeholder:"Wrocław",autoComplete:"address-level2"})}),(0,o.jsx)(R,{})]})}}),(0,o.jsxs)("p",{className:"text-balance text-muted-foreground",children:["Rejestracja oznacza akceptację"," ",(0,o.jsx)(d.default,{href:"https://dentalprocess.pl/regulamin",children:"regulaminu"})]}),!r.formState.isValid&&Object.keys(r.formState.errors).length>0&&(0,o.jsxs)(el,{variant:"destructive",children:[(0,o.jsx)(es.Z,{className:"h-4 w-4"}),(0,o.jsx)(eo,{children:"Błąd"}),(0,o.jsx)(ei,{children:"Formularz zawiera błąd."})]}),(0,o.jsx)(c.z,{type:"submit",className:"w-full",disabled:!r.formState.isValid&&Object.keys(r.formState.errors).length>0,children:"Rejestruj"})]})})})]})}),(0,o.jsx)("div",{className:"hidden bg-purple-900 lg:block place-content-center",children:(0,o.jsx)("div",{className:"flex justify-center",children:(0,o.jsx)(i.default,{src:"/logo.png",alt:"Image",width:"500",height:"558",className:"h-50% w-50% object-contain dark:brightness-[0.2] dark:grayscale"})})})]})}async function ew(e){let a=await (0,ej.Z)(async()=>await e.text()),t=await (0,ej.Z)(async()=>a.val&&JSON.parse(a.val));if(e.ok&&t.ok)return(0,eN.KK)(t.val);{let{status:r,statusText:s}=e;return t.err?{ok:!1,val:{status:r,statusText:s,message:a.val},err:"Nieoczekiwany błąd serwera"}:{ok:!1,val:t.val,err:"Walidacja danych nie powiodła się"}}}(r=n||(n={})).ValidationServerError="Walidacja danych nie powiodła się",r.UnknownServerError="Nieoczekiwany błąd serwera",r.NoEventIdError="Nieznane wydarzenie. Proszę otworzyć rejestrację ze strony wydarzenia",(s=l||(l={}))[s.Initial=-1]="Initial",s[s.Success=0]="Success",s.Error="Nieoczekiwany błąd serwera"},9733:function(e,a,t){"use strict";t.d(a,{z:function(){return d}});var r=t(7437),s=t(2265),n=t(1538),l=t(2218),o=t(9354);let i=(0,l.j)("inline-flex items-center justify-center whitespace-nowrap rounded-md text-sm font-medium ring-offset-background transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:pointer-events-none disabled:opacity-50",{variants:{variant:{default:"bg-primary text-primary-foreground hover:bg-primary/90",destructive:"bg-destructive text-destructive-foreground hover:bg-destructive/90",outline:"border border-input bg-background hover:bg-accent hover:text-accent-foreground",secondary:"bg-secondary text-secondary-foreground hover:bg-secondary/80",ghost:"hover:bg-accent hover:text-accent-foreground",link:"text-primary underline-offset-4 hover:underline"},size:{default:"h-10 px-4 py-2",sm:"h-9 rounded-md px-3",lg:"h-11 rounded-md px-8",icon:"h-10 w-10"}},defaultVariants:{variant:"default",size:"default"}}),d=s.forwardRef((e,a)=>{let{className:t,variant:s,size:l,asChild:d=!1,...c}=e,m=d?n.g7:"button";return(0,r.jsx)(m,{className:(0,o.cn)(i({variant:s,size:l,className:t})),ref:a,...c})});d.displayName="Button"},9354:function(e,a,t){"use strict";t.d(a,{cn:function(){return n}});var r=t(4839),s=t(6164);function n(){for(var e=arguments.length,a=Array(e),t=0;t<e;t++)a[t]=arguments[t];return(0,s.m6)((0,r.W)(a))}}},function(e){e.O(0,[310,716,277,82,463,971,23,744],function(){return e(e.s=3814)}),_N_E=e.O()}]);