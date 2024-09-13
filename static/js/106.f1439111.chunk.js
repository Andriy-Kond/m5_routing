"use strict";(self.webpackChunkm5_routing=self.webpackChunkm5_routing||[]).push([[106],{88:(e,n,a)=>{a.d(n,{d:()=>s,y:()=>i});const t=[{id:"h-1",name:"Hoodie 1"},{id:"h-2",name:"Hoodie 2"},{id:"h-3",name:"Hoodie 3"},{id:"s-1",name:"Sneakers 1"},{id:"s-2",name:"Sneakers 2"},{id:"s-3",name:"Sneakers 3"},{id:"s-4",name:"Sneakers 4"},{id:"p-1",name:"Pants 1"},{id:"p-2",name:"Pants 2"},{id:"p-3",name:"Pants 3"}],s=()=>t,i=e=>t.find((n=>n.id===e))},106:(e,n,a)=>{a.r(n),a.d(n,{default:()=>m});var t=a(475),s=a(88),i=a(579);var r=a(216),d=a(119);const o=d.A.ul`
  display: grid;
  grid-template-columns: repeat(auto-fit, 200px);
  gap: 16px;
`,l=d.A.li`
  border: 1px solid black;
  border-radius: 4px;

  > a {
    text-decoration: none;
  }
`,c=d.A.h3`
  padding: 4px;
  margin-top: 8px;
  margin-bottom: 0;
  color: black;
`;const p=function(e){let{products:n}=e;const a=(0,r.zy)();return(0,i.jsxs)(i.Fragment,{children:[(0,i.jsx)("p",{children:"The PRODUCT LIST element with own self link in PRODUCTS page"}),(0,i.jsx)(o,{children:n.map((e=>(0,i.jsx)(l,{children:(0,i.jsxs)(t.N_,{to:`${e.id}`,state:{from:a},children:[(0,i.jsx)("img",{src:"https://via.placeholder.com/200x100",alt:"plug"}),(0,i.jsxs)(c,{children:[" ",e.name]})]})},e.id)))})]})};const m=function(){var e;const n=(0,s.d)(),[a,r]=(0,t.ok)(),d=null!==(e=a.get("searchValue"))&&void 0!==e?e:"",o=n.filter((e=>e.name.toLowerCase().includes(d.toLowerCase())));return(0,i.jsxs)(i.Fragment,{children:[(0,i.jsx)("p",{children:"The PRODUCTS page"}),(0,i.jsx)("input",{type:"text",onChange:e=>{return n=e.target.value,void r(""===n?{}:{searchValue:n});var n},value:d}),(0,i.jsx)(p,{products:o})]})}}}]);
//# sourceMappingURL=106.f1439111.chunk.js.map