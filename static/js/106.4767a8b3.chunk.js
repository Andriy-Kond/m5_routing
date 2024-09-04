"use strict";(self.webpackChunkm5_routing=self.webpackChunkm5_routing||[]).push([[106],{88:(e,n,t)=>{t.d(n,{d:()=>s,y:()=>i});const a=[{id:"h-1",name:"Hoodie 1"},{id:"h-2",name:"Hoodie 2"},{id:"h-3",name:"Hoodie 3"},{id:"s-1",name:"Sneakers 1"},{id:"s-2",name:"Sneakers 2"},{id:"s-3",name:"Sneakers 3"},{id:"s-4",name:"Sneakers 4"},{id:"p-1",name:"Pants 1"},{id:"p-2",name:"Pants 2"},{id:"p-3",name:"Pants 3"}],s=()=>a,i=e=>a.find((n=>n.id===e))},106:(e,n,t)=>{t.r(n),t.d(n,{default:()=>m});var a=t(475),s=t(88),i=t(579);const r=function(e){let{value:n,updateFilterInput:t}=e;return(0,i.jsx)(i.Fragment,{children:(0,i.jsx)("input",{type:"text",onChange:e=>t(e.target.value),value:n})})};var d=t(216),o=t(119);const l=o.A.ul`
  display: grid;
  grid-template-columns: repeat(auto-fit, 200px);
  gap: 16px;
`,c=o.A.li`
  border: 1px solid black;
  border-radius: 4px;

  > a {
    text-decoration: none;
  }
`,p=o.A.h3`
  padding: 4px;
  margin-top: 8px;
  margin-bottom: 0;
  color: black;
`;const u=function(e){let{products:n}=e;const t=(0,d.zy)();return(0,i.jsxs)(i.Fragment,{children:[(0,i.jsx)("p",{children:"The PRODUCT LIST element with own self link in PRODUCTS page"}),(0,i.jsx)(l,{children:n.map((e=>(0,i.jsx)(c,{children:(0,i.jsxs)(a.N_,{to:`${e.id}`,state:{from:t},children:[(0,i.jsx)("img",{src:"https://via.placeholder.com/200x100",alt:"plug"}),(0,i.jsxs)(p,{children:[" ",e.name]})]})},e.id)))})]})};const m=function(){var e;const n=(0,s.d)(),[t,d]=(0,a.ok)(),o=null!==(e=t.get("searchValue"))&&void 0!==e?e:"",l=n.filter((e=>e.name.toLowerCase().includes(o.toLowerCase())));return(0,i.jsxs)(i.Fragment,{children:[(0,i.jsx)("p",{children:"The PRODUCTS page"}),(0,i.jsx)(r,{value:o,updateFilterInput:e=>{d(""===e?{}:{searchValue:e})}}),(0,i.jsx)(u,{products:l})]})}}}]);
//# sourceMappingURL=106.4767a8b3.chunk.js.map