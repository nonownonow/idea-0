import{V as v}from"./VALUE-Cmb8XLuB.js";import"./jsx-runtime-2xDJh5tt.js";import"./index-CBqU2yxZ.js";import"./_commonjsHelpers-BosuxZz1.js";class t extends Error{constructor(y=t.MESSAGE){super(y)}}t.MESSAGE=`'Iterable' can not used with async function.
If you want to deal with async function, see: [toAsync](https://fxts.dev/docs/toAsync)`;function $(a){return a}const E={component:v,tags:["autodocs"],argTypes:{Value:{description:"```ElementType```"},$value:{description:"값에 포멧을 적용하는 함수 [(타입상세)](/?path=/docs/type--docs#formatter) ```Formatter<D>```"},$valueFormat:{description:"값에 포멧을 적용하는 함수 [```Formatter<D>```](/?path=/docs/types-type--docs#formatter)"}}},e={args:{$value:"Hello <em>world</em>",Value:"div",$valueFormat:$}},r={args:{$value:"Hello <em>world</em>"}},o={args:{$value:"Hello <em>world</em>",$valueFormat:a=>`My ${a}`}};var s,n,l;e.parameters={...e.parameters,docs:{...(s=e.parameters)==null?void 0:s.docs,source:{originalSource:`{
  args: {
    $value: "Hello <em>world</em>",
    Value: "div",
    $valueFormat: identity
  }
}`,...(l=(n=e.parameters)==null?void 0:n.docs)==null?void 0:l.source}}};var c,m,u;r.parameters={...r.parameters,docs:{...(c=r.parameters)==null?void 0:c.docs,source:{originalSource:`{
  args: {
    $value: "Hello <em>world</em>"
  }
}`,...(u=(m=r.parameters)==null?void 0:m.docs)==null?void 0:u.source}}};var d,p,i;o.parameters={...o.parameters,docs:{...(d=o.parameters)==null?void 0:d.docs,source:{originalSource:`{
  args: {
    $value: "Hello <em>world</em>",
    $valueFormat: a => \`My \${a}\`
  }
}`,...(i=(p=o.parameters)==null?void 0:p.docs)==null?void 0:i.source}}};const F=["Default","Polymorphic","WithLabel"];export{e as Default,r as Polymorphic,o as WithLabel,F as __namedExportsOrder,E as default};
