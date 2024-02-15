import{j as t,a as r,F as m}from"./jsx-runtime-2xDJh5tt.js";import{M as c}from"./index-CvcXehXu.js";import{useMDXComponents as o}from"./index-DI5IigMn.js";import"./index-CBqU2yxZ.js";import"./_commonjsHelpers-BosuxZz1.js";import"./iframe-9i-PYCS8.js";import"../sb-preview/runtime.js";import"./index-BtM5VmRH.js";import"./index-Bw8VTzHM.js";import"./index-Cmc67Rxs.js";import"./index-DrFu-skq.js";function i(n){const e=Object.assign({p:"p",h1:"h1",h2:"h2",pre:"pre",code:"code"},o(),n.components);return r(m,{children:[r(e.p,{children:[t(c,{title:"type"}),";"]}),`
`,t(e.h1,{id:"idea에서-사용되는-타입을-설명하는-문서입니다",children:"iDea에서 사용되는 타입을 설명하는 문서입니다."}),`
`,t(e.h2,{id:"primitive",children:"Primitive"}),`
`,t(e.pre,{children:t(e.code,{children:`type Primitive = string | number | boolean;
`})}),`
`,t(e.h2,{id:"formatter",children:"Formatter"}),`
`,t(e.pre,{children:t(e.code,{className:"language-typescript",children:`type Formatter<T extends Primitive> = (
  value: T,
  key?: string,
  index?: number
) => ReactNode;
`})})]})}function x(n={}){const{wrapper:e}=Object.assign({},o(),n.components);return e?t(e,Object.assign({},n,{children:t(i,n)})):i(n)}export{x as default};
