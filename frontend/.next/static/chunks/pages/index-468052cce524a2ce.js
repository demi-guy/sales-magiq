(self.webpackChunk_N_E=self.webpackChunk_N_E||[]).push([[405],{8312:function(e,t,s){(window.__NEXT_P=window.__NEXT_P||[]).push(["/",function(){return s(7925)}])},9883:function(e,t,s){"use strict";var a=s(5893),n=s(5675),r=s.n(n);let o={primary:{full:"text-slate-200",tonal:"text-indigo-900",outlined:"text-indigo-900",text:"text-indigo-900"},secondary:{full:"text-slate-200",tonal:"text-sky-700",outlined:"text-sky-700",text:"text-sky-700"}},i={primary:{full:"bg-indigo-900",tonal:"bg-slate-300",outlined:"bg-white",text:""},secondary:{full:"bg-sky-700",tonal:"bg-slate-300",outlined:"bg-white",text:""}},c={primary:{full:"hover:opacity-60",tonal:"hover:bg-slate-400",outlined:"bg-white",text:""},secondary:{full:"hover:opacity-60",tonal:"hover:bg-slate-400",outlined:"bg-white",text:""},none:{full:"opacity-60",tonal:"bg-slate-300",outlined:"bg-white",text:""}};t.Z=e=>{let{onClick:t=()=>{},icon:s="none",color:n="none",text:l="Button",variant:d="full",width:u="[100%]",padding:h="px-6 py-2",height:m="8"}=e;return(0,a.jsxs)("div",{onClick:t,className:"".concat("none"===n?"":i[n][d]," transition-all hover:shadow ").concat(c[n][d]," hover:cursor-pointer w-").concat(u," h-").concat(m," ").concat(h," rounded-lg justify-center items-center gap-2.5 transition-all inline-flex ").concat("outlined"===d?"border border-gray-300":""),children:["none"!==s&&(0,a.jsx)(r(),{width:20,height:20,alt:"Button Image",src:s}),l&&(0,a.jsx)("div",{className:("none"===n?"text-neutral-600":o[n][d])+" text-sm font-normal font-['Rubik'] capitalize",children:l})]})}},799:function(e,t,s){"use strict";var a=s(5893),n=s(7294),r=s(5675),o=s.n(r);let i={search:"Search Input Image",date:"Date Input Image",image:"Image Input Image",video:"Video Input Image",password:"Null"},c={search:"search",date:"calendar",image:"image",video:"media",password:"null"},l={search:"Please Input here.",date:"Choose an date",image:"Choose an image",video:"Choose an video",default:"Please Input here.",password:"Please Input here."},d={search:"search",date:"date",image:"file",video:"file",default:"text",password:"password"};t.Z=e=>{let{value:t="",onChange:s=()=>{},type:r="default",placeholder:u,text:h="",width:m="[100%]"}=e,[g,p]=(0,n.useState)(!1),[x,f]=(0,n.useState)(!1),[j,v]=(0,n.useState)(!1),b=(0,n.useRef)(null);return(0,n.useEffect)(()=>{null!==b.current&&(b.current.addEventListener("focusin",()=>v(!0)),b.current.addEventListener("focusout",()=>v(!1)))},[b]),(0,a.jsxs)("div",{className:"transition w-".concat(m," h-8 px-").concat("search"===r?"2":"4"," py-2 bg-white rounded-lg border ").concat(j?" border-gray-900":"border-gray-300"," justify-center items-center gap-2.5 inline-flex"),children:["default"!==r&&"password"!==r&&(0,a.jsx)(o(),{width:18,height:18,src:"/icons/iconoir_"+c[r]+".svg",alt:i[r]}),("file"===d[r]||"date"===r)&&(0,a.jsx)("div",{id:"date"===r?"color-calendar":void 0,className:"w-[100%] px-6 text-neutral-600 text-sm font-normal font-['Rubik'] absolute",children:t||(0,a.jsx)("div",{className:"text-zinc-400",children:u||l[r]})}),(0,a.jsx)("input",{ref:b,className:"w-[100%] text-neutral-600 text-sm font-normal font-['Rubik'] outline-none ".concat("default"===r||"search"===r||"password"===r?"opacity-1 z-0":"opacity-0 z-0"),placeholder:u||l[r],type:"password"===d[r]&&x?"text":d[r],value:t,onClick:()=>{"date"===r&&p(!0)},onChange:e=>{s(e.target.value)}}),g&&(0,a.jsx)(a.Fragment,{children:(0,a.jsx)("div",{className:"custom-calendar",children:(0,a.jsx)("p",{children:"Hello World!"})})}),"password"===r&&(0,a.jsx)(o(),{onClick:()=>f(!x),className:"hover:cursor-pointer",width:18,height:18,src:"/icons/iconoir_eye".concat(x?"-off":"",".svg"),alt:"Eye Icon Image"})]})}},8981:function(e,t,s){"use strict";var a=s(5893),n=s(5675),r=s.n(n);t.Z=e=>{let{withSlogan:t=!1,width:s=407,height:n=43.5}=e;return(0,a.jsxs)("div",{className:"w-[258px] h-7 relative",children:[(0,a.jsx)(r(),{src:"/logos/Logo1.svg",alt:"Logo image",width:s,height:n}),t&&(0,a.jsx)(r(),{src:"/logos/Logo2.svg",width:s,height:n,alt:"Logo image"})]})}},3834:function(e,t){"use strict";t.Z={EMPTY_DATA:"Please fill the data correctly!",INVALID_DATA:"Your info isn't correct. Please check the email and password",ALREADY_EXIST:"The account is already exist with that email!",CONNECTION_FAILED:"Connect to server failed.",SING_IN_SUCCESS:"Success to sign in!",BAD_REQUEST:"You request is wrong!",SERVER_ERROR:"Server has a error! We will correct it very quickly.",SING_UP_SUCCESS:"Success to sign up!",SIGN_UP_FAILED:"Failed to sign up. Please ask to manager.",WELCOME:"Welcome to our sales magiq!",NEED_AUTH:"You have to sign in first.",CREATE_SUCCESS:"Success to create a new job!",UPDATE_SUCCESS:"Success to update a job!",DELETE_SUCCESS:"Success to delete a job!",INVALID_EMAIL:"Invalid email format!",JOB_VARIABLE_NAMES:["companyName","managerName","email","address","city","state","zip","roleType","title","compensationType","salaryAmount","ote","inboundLeads","prospectingRequired","averageOrder","industry","jobDescription","customerSupport","createdDate","expirationDate","status","companyDescription","companyUrl","headerImageUrl"],JOB_INFO_NAMES:["Company Name","Hiring Manager Name","Email","Address","City","State","Zip","Role Type","Title","Compensation Type","Salary Amount","OTE","Inbound Leads?","Prospecting Required?","Average Order","Industry","Job Description","Customer Service/ Success Support?","Created Date","Expiration Date","Status","Company Description","Company URL","Header Image URL"]}},2979:function(e,t,s){"use strict";var a=s(3834),n=s(5121),r=s(4975),o=s.n(r),i=s(129),c=s.n(i);t.Z={signUp:e=>n.Z.post("".concat("https://salesmagiq.onrender.com","/signup"),c().stringify(e)),signIn:e=>n.Z.post("".concat("https://salesmagiq.onrender.com","/signin"),c().stringify(e)),test:e=>n.Z.get("".concat("https://salesmagiq.onrender.com","/test"),{headers:{Authorization:"Bearer ".concat(e)}}),createJob:(e,t)=>n.Z.post("".concat("https://salesmagiq.onrender.com","/jobs"),c().stringify(e),{headers:{Authorization:"Bearer ".concat(t)}}),readJobs:(e,t,s,a)=>n.Z.get("".concat("https://salesmagiq.onrender.com","/jobs?page=").concat(t,"&search=").concat(s,"&selected=").concat(a),{headers:{Authorization:"Bearer ".concat(e)}}),updateJob:(e,t,s)=>n.Z.put("".concat("https://salesmagiq.onrender.com","/jobs/").concat(e),c().stringify(t),{headers:{Authorization:"Bearer ".concat(s)}}),deleteJob:(e,t)=>n.Z.delete("".concat("https://salesmagiq.onrender.com","/jobs"),{headers:{Authorization:"Bearer ".concat(t)}}),readJob:(e,t)=>n.Z.get("".concat("https://salesmagiq.onrender.com","/jobs/").concat(e),{headers:{Authorization:"Bearer ".concat(t)}}),getError:(e,t)=>{if(o()(e.response))return a.Z.CONNECTION_FAILED;switch(e.response.status){case 400:return a.Z.BAD_REQUEST;case 405:return a.Z.INVALID_DATA;case 401:case 403:return t&&t.push("/"),a.Z.NEED_AUTH;case 409:return a.Z.ALREADY_EXIST;case 500:return a.Z.SERVER_ERROR}}}},7925:function(e,t,s){"use strict";s.r(t);var a=s(5893),n=s(5675),r=s.n(n),o=s(1664),i=s.n(o),c=s(1163),l=s(7294),d=s(5756),u=s(1444),h=s(4975),m=s.n(h),g=s(3868),p=s.n(g),x=s(8981),f=s(799),j=s(9883),v=s(2979),b=s(3834);t.default=function(){let e=(0,c.useRouter)(),[t,s]=(0,d.fP)(["jwtToken"]),[n,o]=(0,l.useState)(!0),[h,g]=(0,l.useState)(""),[y,E]=(0,l.useState)("");return(0,l.useEffect)(()=>{m()(t.jwtToken)||v.Z.test(t.jwtToken).then(()=>{localStorage.setItem("token",t.jwtToken),e.push("/job/hire")}).catch(()=>{s("jwtToken",null),localStorage.removeItem("token")})},[]),(0,a.jsx)("div",{className:"w-full h-[100vh] bg-slate-200 justify-center items-center inline-flex",children:(0,a.jsx)("div",{className:"w-[721px] h-[557px]",children:(0,a.jsxs)("div",{className:"w-[721px] h-[557px] self-center grow shrink basis-0 p-6 bg-white rounded-2xl shadow justify-center items-center gap-6 inline-flex",children:[(0,a.jsx)(r(),{className:"self-stretch rounded-lg",width:246,height:509,src:"/images/unsplash_".concat(n?"pVt9j3iWtPM":"HoEYgBL_Gcs",".png"),alt:"Sign image"}),(0,a.jsxs)("div",{className:"grow shrink basis-0 self-stretch pt-6 flex-col justify-start items-center gap-6 inline-flex",children:[(0,a.jsx)("div",{className:"w-[258px] h-7 justify-center items-center inline-flex",children:(0,a.jsx)(x.Z,{})}),(0,a.jsxs)("div",{className:"flex-col justify-start items-center gap-1 flex",children:[(0,a.jsx)("div",{className:"text-sky-700 text-base font-semibold font-['Rubik']",children:n?"Welcome to back":"Create an account"}),(0,a.jsx)("div",{className:"text-zinc-400 text-[10px] font-normal font-['Rubik']",children:n?"Sign in to continue":"Create a new account"})]}),(0,a.jsxs)("div",{className:"self-stretch h-[136px] flex-col justify-start items-center gap-[18px] flex",children:[(0,a.jsxs)("div",{className:"self-stretch h-[59px] flex-col justify-start items-start gap-2.5 flex",children:[(0,a.jsx)("div",{className:"text-neutral-600 text-sm font-normal font-['Rubik']",children:"Email Address"}),(0,a.jsx)(f.Z,{type:"search",onChange:e=>E(e),value:y})]}),(0,a.jsxs)("div",{className:"self-stretch h-[59px] flex-col justify-start items-start gap-2.5 flex",children:[(0,a.jsx)("div",{className:"text-neutral-600 text-sm font-normal font-['Rubik']",children:"User Password"}),(0,a.jsx)(f.Z,{type:"password",onChange:e=>g(e),value:h})]})]}),(0,a.jsx)(j.Z,{text:n?"Login":"Sign Up",color:"primary",onClick:n?()=>{if(m()(h)||m()(y))return u.Am.warning(b.Z.EMPTY_DATA);v.Z.signIn({email:y,password:h}).then(t=>{localStorage.setItem("token",t.data.token),u.Am.success(b.Z.WELCOME),e.push("/job/hire")}).catch(e=>u.Am.error(v.Z.getError(e,null)))}:()=>p()(y)?m()(h)||m()(y)?u.Am.warning(b.Z.EMPTY_DATA):void v.Z.signUp({email:y,password:h}).then(e=>{u.Am.success(b.Z.SING_UP_SUCCESS),o(!0)}).catch(e=>{u.Am.error(b.Z.SIGN_UP_FAILED),console.error(e)}):u.Am.warning(b.Z.INVALID_EMAIL)}),(0,a.jsxs)("div",{className:"self-stretch justify-start items-center gap-3 inline-flex",children:[(0,a.jsx)("div",{className:"grow shrink basis-0 h-[0px] border border-zinc-400"}),(0,a.jsx)("div",{className:"text-zinc-400 text-sm font-normal font-['Rubik']",children:"or"}),(0,a.jsx)("div",{className:"grow shrink basis-0 h-[0px] border border-zinc-400"})]}),(0,a.jsxs)("div",{className:"self-stretch h-[76px] flex-col justify-start items-start gap-3 flex",children:[(0,a.jsxs)("a",{href:"".concat("https://salesmagiq.onrender.com","/google"),className:"bg-white hover:shadow hover:cursor-pointer w-[100%] h-8 px-6 py-2 rounded-lg justify-center items-center gap-2.5 transition-all inline-flex border border-gray-300",children:[(0,a.jsx)(r(),{width:20,height:20,alt:"Button Image",src:"/icons/google-icon.svg"}),(0,a.jsx)("div",{className:"text-indigo-900 text-sm font-normal font-['Rubik'] capitalize",children:"Google"})]}),(0,a.jsx)(j.Z,{icon:"/icons/facebook.svg",text:"Facebook",variant:"outlined",color:"primary"})]}),(0,a.jsxs)("div",{className:"justify-center items-start gap-1 inline-flex",children:[(0,a.jsx)("div",{className:"text-neutral-600 text-sm font-normal font-['Rubik']",children:n?"Don’t have an account?":"Already have an account?"}),(0,a.jsx)("div",{className:"justify-center items-center gap-2.5 flex",children:(0,a.jsx)(i(),{className:"text-blue-500 text-sm font-medium font-['Rubik'] underline",href:"/",onClick:()=>o(!n),children:n?"Sign up":"Log in"})})]})]})]})})})}},4654:function(){}},function(e){e.O(0,[718,374,774,888,179],function(){return e(e.s=8312)}),_N_E=e.O()}]);