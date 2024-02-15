import{j as E}from"./jsx-runtime-2xDJh5tt.js";import{r as f}from"./index-CBqU2yxZ.js";import"./_commonjsHelpers-BosuxZz1.js";function $(e){let u;return typeof e=="string"?u={dangerouslySetInnerHTML:{__html:e}}:u={children:e},u}function g(e){return e}const o=f.forwardRef(function(u,B){const{Value:y="div",$value:v,$valueFormat:A=g}=u;return E(y,{"data-idea-value":"",...$(A(v)),ref:B})});try{o.displayName="VALUE",o.__docgenInfo={description:`- 값의 구조를 구현한 고차 컴포넌트
- Value값으로 다형성이 어떻게 작동하는지는 각 스토리 하단의 HTML탭을 통해 확인할 수 있습니다.
- 아래 description의 타입을 클릭하면 해당 타입의 상세 정의를 확인할 수 있습니다.`,displayName:"VALUE",props:{}}}catch{}class s extends Error{constructor(u=s.MESSAGE){super(u)}}s.MESSAGE=`'Iterable' can not used with async function.
If you want to deal with async function, see: [toAsync](https://fxts.dev/docs/toAsync)`;function h(e){return e}const F={component:o,tags:["autodocs"],argTypes:{Value:{description:"```ElementType```"},$value:{description:"값 [```Primitive```](/?path=/docs/types-type--docs#primitive) "},$valueFormat:{description:"값에 포멧을 적용하는 함수 [```Formatter<D>```](/?path=/docs/types-type--docs#formatter)"}}},r={args:{$value:"Hello <em>world</em>",$valueFormat:h,Value:"div"}},a={args:{$value:"Hello <em>world</em>",Value:"p"}},t={args:{$value:"Hello <em>world</em>",$valueFormat:e=>`My ${e}`}};var n,l,c;r.parameters={...r.parameters,docs:{...(n=r.parameters)==null?void 0:n.docs,source:{originalSource:`{
  args: {
    $value: "Hello <em>world</em>",
    $valueFormat: identity,
    Value: "div"
  }
}`,...(c=(l=r.parameters)==null?void 0:l.docs)==null?void 0:c.source}}};var C,i,d;a.parameters={...a.parameters,docs:{...(C=a.parameters)==null?void 0:C.docs,source:{originalSource:`{
  args: {
    $value: "Hello <em>world</em>",
    Value: 'p'
  }
}`,...(d=(i=a.parameters)==null?void 0:i.docs)==null?void 0:d.source}}};var m,p,D;t.parameters={...t.parameters,docs:{...(m=t.parameters)==null?void 0:m.docs,source:{originalSource:`{
  args: {
    $value: "Hello <em>world</em>",
    $valueFormat: a => \`My \${a}\`
  }
}`,...(D=(p=t.parameters)==null?void 0:p.docs)==null?void 0:D.source}}};const H=["Default","Polymorphic","WithLabel"];export{r as Default,a as Polymorphic,t as WithLabel,H as __namedExportsOrder,F as default};
