(self.webpackChunk_N_E=self.webpackChunk_N_E||[]).push([[341],{4848:function(e,t,s){(window.__NEXT_P=window.__NEXT_P||[]).push(["/job/detail/[_id]",function(){return s(6983)}])},2051:function(e,t,s){"use strict";s.d(t,{Z:function(){return components_ItemForm}});var l=s(5893),n=s(7294),r=s(799),components_Switch=e=>{let{selected:t=!1,onChange:s=()=>{}}=e;return(0,l.jsx)("div",{className:" hover:shadow-lg p-[1px] w-[34px] h-[18px]  ".concat(t?"bg-indigo-900 pl-[17px]":"bg-zinc-400 pl-[1px]"," rounded-[32px] hover:cursor-pointer transition-all"),onClick:()=>s(!t),children:(0,l.jsx)("div",{className:"w-4 h-4 bg-white rounded-[32px]"})})},components_ItemForm=e=>{let{description:t=null,subject:s="Subject",required:i=!1,type:a="input",onChange:c=()=>{},value:o=""}=e,u=(0,n.useRef)(null),[d,f]=(0,n.useState)(!1);return(0,n.useEffect)(()=>{null!==u.current&&(u.current.addEventListener("focusin",()=>f(!0)),u.current.addEventListener("focusout",()=>f(!1)))},[]),(0,l.jsxs)("div",{className:"w-full h-full flex-col justify-start items-start gap-2 inline-flex",children:[(0,l.jsxs)("div",{className:"self-stretch justify-between items-center inline-flex",children:[(0,l.jsx)("div",{className:"text-neutral-600 text-sm font-medium font-['Rubik']",children:s}),i&&(0,l.jsx)("div",{className:"h-3 justify-between items-center flex",children:(0,l.jsx)("div",{className:"text-zinc-400 text-[10px] font-normal font-['Rubik']",children:"Required"})}),"boolean"===a&&(0,l.jsx)("div",{className:"h-3 justify-between items-center flex",children:(0,l.jsx)(components_Switch,{selected:"boolean"==typeof o&&o,onChange:c})})]}),t&&(0,l.jsx)("div",{className:"text-zinc-400 text-xs font-normal font-['Rubik']",children:t}),"input"===a&&(0,l.jsx)(r.Z,{onChange:c,value:"string"==typeof o?o:""}),"textarea"===a&&(0,l.jsx)("textarea",{ref:u,value:"string"==typeof o?o:"",className:"w-full bg-white rounded-lg border ".concat(d?"border-gray-900":"border-gray-300"," outline-none gap-2.5 px-4 py-2 h-[83px] text-sm font-normal font-['Rubik']"),placeholder:"Please Input here.",onChange:e=>{c(e.target.value)}})]})}},6983:function(e,t,s){"use strict";s.r(t);var l=s(5893),n=s(1163),r=s(7294),i=s(1444),a=s(4975),c=s.n(a),o=s(1624),u=s(715),d=s(3622),f=s(8587),x=s(2051),h=s(9883),m=s(3834),p=s(2979);t.default=function(){let e=(0,n.useRouter)(),{_id:t}=e.query,[s,a]=(0,r.useState)({});return(0,r.useEffect)(()=>{c()(t)||(c()(localStorage.getItem("token"))?e.push("/"):p.Z.readJob(t,localStorage.getItem("token")).then(e=>{a(e.data.data)}).catch(t=>i.Am.error(p.Z.getError(t,e))))},[t]),(0,l.jsx)(l.Fragment,{children:(0,l.jsxs)(r.Suspense,{fallback:(0,l.jsx)("div",{children:"Hello"}),children:[(0,l.jsx)(d.Z,{}),(0,l.jsxs)("div",{className:"w-full h-full justify-center items-center flex-col",children:[(0,l.jsx)("img",{src:"/images/unsplash_YwPNWDNZHkg.png",alt:"Header Background Image",className:"w-full absolute -z-[1] h-[184px] opacity-70"}),(0,l.jsx)("div",{className:"w-full h-full justify-center items-center py-8 mx-auto",children:(0,l.jsx)(u.Z,{})})]}),(0,l.jsxs)("div",{className:"w-full h-full py-8 flex-col justify-start items-center gap-8 inline-flex",children:[(0,l.jsxs)("div",{className:"px-[10%] self-stretch h-full rounded-2xl flex-col justify-start items-start gap-8 flex",children:[(0,l.jsxs)("div",{className:"self-stretch p-4 bg-white rounded-2xl justify-start items-start inline-flex",children:[(0,l.jsx)(f.Z,{text:"Home",icon:!0}),(0,l.jsx)(f.Z,{text:"Hire"}),(0,l.jsx)(f.Z,{text:"My Jobs",onClick:()=>e.push("/job/hire")}),(0,l.jsx)(f.Z,{text:"Post New Job",selected:!0})]}),(0,l.jsx)("div",{className:"px-[10%] self-stretch h-full p-6 bg-white rounded-2xl flex-col justify-start items-center gap-3 flex",children:(0,l.jsxs)("div",{className:"self-stretch h-full p-6 rounded-lg border border-black border-opacity-10 flex-col justify-center items-center gap-3 flex",children:[m.Z.JOB_VARIABLE_NAMES.map((e,t)=>(0,l.jsx)(x.Z,{onChange:t=>{s[e]=t,a({...s})},value:s[e],required:!m.Z.JOB_INFO_NAMES[t].endsWith("?"),subject:m.Z.JOB_INFO_NAMES[t],type:m.Z.JOB_INFO_NAMES[t].endsWith("?")?"boolean":m.Z.JOB_INFO_NAMES[t].endsWith("Description")?"textarea":"input"},t)),(0,l.jsxs)("div",{className:"h-8 w-full flex-row float-right justify-start items-end gap-2.5 inline-flex",children:[(0,l.jsx)("div",{className:"h-8 w-full float-left flex-col justify-end items-start gap-2.5 inline-flex",children:(0,l.jsx)(h.Z,{text:"Delete",width:"auto",icon:"/icons/iconoir_delete.svg",color:"secondary",onClick:()=>{p.Z.deleteJob(t,localStorage.getItem("token")).then(t=>{i.Am.success(m.Z.DELETE_SUCCESS),e.push("/job/hire")}).catch(t=>i.Am.error(p.Z.getError(t,e)))}})}),(0,l.jsx)("div",{className:"h-8 w-full float-right flex-col justify-start items-end gap-2.5 inline-flex",children:(0,l.jsx)(h.Z,{text:"Update",width:"auto",icon:"/icons/iconoir_check.svg",color:"primary",onClick:()=>{if(!m.Z.JOB_VARIABLE_NAMES.every(e=>!c()(s[e])))return i.Am.warning(m.Z.EMPTY_DATA);p.Z.updateJob(t,s,localStorage.getItem("token")).then(e=>{i.Am.success(m.Z.UPDATE_SUCCESS)}).catch(t=>i.Am.error(p.Z.getError(t,e)))}})})]})]})})]}),(0,l.jsx)("div",{className:"px-8 w-full",children:(0,l.jsx)(o.Z,{})})]})]})})}}},function(e){e.O(0,[718,157,774,888,179],function(){return e(e.s=4848)}),_N_E=e.O()}]);