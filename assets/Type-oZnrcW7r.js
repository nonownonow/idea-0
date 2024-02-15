import{j as t,a as i,F as o}from"./jsx-runtime-2xDJh5tt.js";import{M as c}from"./index-DwJylLci.js";import{useMDXComponents as r}from"./index-DI5IigMn.js";import"./index-CBqU2yxZ.js";import"./_commonjsHelpers-BosuxZz1.js";import"./iframe-6Pqh2cNq.js";import"../sb-preview/runtime.js";import"./index-BtM5VmRH.js";import"./index-Bw8VTzHM.js";import"./index-Cmc67Rxs.js";import"./index-DrFu-skq.js";function a(n){const e=Object.assign({h1:"h1",h2:"h2",pre:"pre",code:"code"},r(),n.components);return i(o,{children:[t(c,{}),`
`,t(e.h1,{id:"idea에서-사용되는-타입을-설명하는-문서입니다",children:"iDea에서 사용되는 타입을 설명하는 문서입니다."}),`
`,t(e.h2,{id:"valuedata",children:"ValueData"}),`
`,t(e.pre,{children:t(e.code,{className:"language-typescript",children:`type ValueData = string | number | boolean;
`})}),`
`,t(e.h2,{id:"entrydata",children:"EntryData"}),`
`,t(e.pre,{children:t(e.code,{className:"language-typescript",children:`type EntryData = [string, ValueData];
`})}),`
`,t(e.h2,{id:"formatter",children:"Formatter"}),`
`,t(e.pre,{children:t(e.code,{className:"language-typescript",children:`type Formatter<T extends ValueData> = (
  value: T,
  key?: string,
  index?: number
) => ReactNode;
`})})]})}function b(n={}){const{wrapper:e}=Object.assign({},r(),n.components);return e?t(e,Object.assign({},n,{children:t(a,n)})):a(n)}export{b as default};
