import{a as V,j as d}from"./jsx-runtime-2xDJh5tt.js";import{r as k}from"./index-CBqU2yxZ.js";import{V as i,i as n}from"./VALUE-alYwS84T.js";import"./_commonjsHelpers-BosuxZz1.js";const s=k.forwardRef(function(E,F){const{$entry:[r,h],Entry:f="div",Key:C="div",Value:_="div",$keyFormat:D=n,$valueFormat:T=n}=E;return V(f,{"data-idea-entry":r,ref:F,children:[d(i,{"data-idea-key":r,Value:C,$value:r,$valueFormat:D}),d(i,{"data-idea-value":r,Value:_,$value:h,$valueFormat:T})]})});try{s.displayName="ENTRY",s.__docgenInfo={description:"ENTRY 구조를 구현한 고차 컴포넌트",displayName:"ENTRY",props:{}}}catch{}const Y={component:s,tags:["autodocs"],argTypes:{Entry:{description:"```ElementType```"},Key:{description:"```ElementType```"},Value:{description:"```ElementType```"},$entry:{description:"엔트리 값 [```EntryData```](/?path=/docs/type--docs#entrydata) "},$keyFormat:{description:"키의 포멧을 적용하는 함수 [```Formatter```](/?path=/docs/type--docs#formatter)"},$valueFormat:{description:"값의 포멧을 적용하는 함수 [```Formatter```](/?path=/docs/type--docs#formatter)"}}},t={args:{$entry:["greeting","hello"],Entry:"div",Key:"div",Value:"div",$keyFormat:n,$valueFormat:n}},a={args:{$entry:["greeting","hello"],Entry:"div",Key:"dt",Value:"dd"}},o={args:{$entry:["greeting","hello"],$keyFormat:e=>`My ${e}`,$valueFormat:e=>`${e} world`}};var c,l,y;t.parameters={...t.parameters,docs:{...(c=t.parameters)==null?void 0:c.docs,source:{originalSource:`{
  args: {
    $entry: ["greeting", "hello"],
    Entry: "div",
    Key: "div",
    Value: "div",
    $keyFormat: identity,
    $valueFormat: identity
  }
}`,...(y=(l=t.parameters)==null?void 0:l.docs)==null?void 0:y.source}}};var m,p,u;a.parameters={...a.parameters,docs:{...(m=a.parameters)==null?void 0:m.docs,source:{originalSource:`{
  args: {
    $entry: ["greeting", "hello"],
    Entry: "div",
    Key: "dt",
    Value: "dd"
  }
}`,...(u=(p=a.parameters)==null?void 0:p.docs)==null?void 0:u.source}}};var $,g,v;o.parameters={...o.parameters,docs:{...($=o.parameters)==null?void 0:$.docs,source:{originalSource:'{\n  args: {\n    $entry: ["greeting", "hello"],\n    $keyFormat: a => `My ${a}`,\n    $valueFormat: a => `${a} world`\n  }\n}',...(v=(g=o.parameters)==null?void 0:g.docs)==null?void 0:v.source}}};const A=["Default","Polymorphic","WithLabel"];export{t as Default,a as Polymorphic,o as WithLabel,A as __namedExportsOrder,Y as default};
