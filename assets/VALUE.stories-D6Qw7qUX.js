import{V as h,i as y}from"./VALUE-alYwS84T.js";import"./jsx-runtime-2xDJh5tt.js";import"./index-CBqU2yxZ.js";import"./_commonjsHelpers-BosuxZz1.js";const L={component:h,tags:["autodocs"],argTypes:{Value:{description:"```ElementType```"},$value:{description:"값 [```ValueData```](/?path=/docs/type--docs#valuedata) "},$valueFormat:{description:"값에 포멧을 적용하는 함수 [```Formatter<D>```](/?path=/docs/type--docs#formatter)"}}},e={args:{$value:"Hello <em>world</em>",$valueFormat:y,Value:"div"}},a={args:{$value:"Hello <em>world</em>",Value:"p"}},r={args:{$value:"Hello <em>world</em>",$valueFormat:t=>`My ${t}`}},o={args:{$value:"Hello <em>world</em>",children:"HELLO <em>WORLD</em>",$valueFormat:t=>`My ${t}`}};var s,l,m;e.parameters={...e.parameters,docs:{...(s=e.parameters)==null?void 0:s.docs,source:{originalSource:`{
  args: {
    $value: "Hello <em>world</em>",
    $valueFormat: identity,
    Value: "div"
  }
}`,...(m=(l=e.parameters)==null?void 0:l.docs)==null?void 0:m.source}}};var n,c,u;a.parameters={...a.parameters,docs:{...(n=a.parameters)==null?void 0:n.docs,source:{originalSource:`{
  args: {
    $value: "Hello <em>world</em>",
    Value: "p"
  }
}`,...(u=(c=a.parameters)==null?void 0:c.docs)==null?void 0:u.source}}};var d,p,i;r.parameters={...r.parameters,docs:{...(d=r.parameters)==null?void 0:d.docs,source:{originalSource:`{
  args: {
    $value: "Hello <em>world</em>",
    $valueFormat: a => \`My \${a}\`
  }
}`,...(i=(p=r.parameters)==null?void 0:p.docs)==null?void 0:i.source}}};var $,v,g;o.parameters={...o.parameters,docs:{...($=o.parameters)==null?void 0:$.docs,source:{originalSource:`{
  args: {
    $value: "Hello <em>world</em>",
    children: "HELLO <em>WORLD</em>",
    $valueFormat: a => \`My \${a}\`
  }
}`,...(g=(v=o.parameters)==null?void 0:v.docs)==null?void 0:g.source}}};const D=["Default","Polymorphic","WithValueFormat","WithChildren"];export{e as Default,a as Polymorphic,o as WithChildren,r as WithValueFormat,D as __namedExportsOrder,L as default};
