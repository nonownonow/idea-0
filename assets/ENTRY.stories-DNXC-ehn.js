import{a as F,j as l}from"./jsx-runtime-2xDJh5tt.js";import{h as n,i as s}from"./VALUE-Cmb8XLuB.js";import"./index-CBqU2yxZ.js";import"./_commonjsHelpers-BosuxZz1.js";const t=function(f){const{Root:v="div",Key:E="div",Value:R="div",$entry:u,$keyFormat:g=s,$valueFormat:h=s}=f;return F(v,{"data-idea-entry":"",children:[l(E,{"data-idea-key":"",...n(g(u[0]))}),l(R,{"data-idea-value":"",...n(h(u[1]))})]})};try{t.displayName="ENTRY",t.__docgenInfo={description:"의 구조를 구현한 고차 컴포넌트",displayName:"ENTRY",props:{$entry:{defaultValue:null,description:"엔트리 형태 = [key, value]",name:"$entry",required:!0,type:{name:"EntryData"}},$keyFormat:{defaultValue:null,description:"키의 포멧을 적용하는 함수",name:"$keyFormat",required:!1,type:{name:"Formatter<E[0]>"}},$valueFormat:{defaultValue:null,description:"값의 포멧을 적용하는 함수",name:"$valueFormat",required:!1,type:{name:"Formatter<E[1]>"}},Root:{defaultValue:null,description:"",name:"Root",required:!1,type:{name:"ElementType"}},Key:{defaultValue:null,description:"",name:"Key",required:!1,type:{name:"ElementType"}},Value:{defaultValue:null,description:"",name:"Value",required:!1,type:{name:"ElementType"}}}}}catch{}const T={component:t,tags:["autodocs"]},e={args:{Root:"h1",$value:"Hello <em>world</em>"}},a={args:{Root:"p",$value:"Hello <em>world</em>"}},r={args:{Root:"h1",$value:"Hello <em>world</em>",$valueFormat:o=>`My ${o}`}};var m,d,i;e.parameters={...e.parameters,docs:{...(m=e.parameters)==null?void 0:m.docs,source:{originalSource:`{
  args: {
    Root: "h1",
    $value: "Hello <em>world</em>"
  }
}`,...(i=(d=e.parameters)==null?void 0:d.docs)==null?void 0:i.source}}};var p,c,y;a.parameters={...a.parameters,docs:{...(p=a.parameters)==null?void 0:p.docs,source:{originalSource:`{
  args: {
    Root: "p",
    $value: "Hello <em>world</em>"
  }
}`,...(y=(c=a.parameters)==null?void 0:c.docs)==null?void 0:y.source}}};var C,D,$;r.parameters={...r.parameters,docs:{...(C=r.parameters)==null?void 0:C.docs,source:{originalSource:`{
  args: {
    Root: "h1",
    $value: "Hello <em>world</em>",
    $valueFormat: a => \`My \${a}\`
  }
}`,...($=(D=r.parameters)==null?void 0:D.docs)==null?void 0:$.source}}};const q=["Default","Polymorphic","WithLabel"];export{e as Default,a as Polymorphic,r as WithLabel,q as __namedExportsOrder,T as default};
