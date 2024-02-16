import{j as n,a as p,F as i}from"./jsx-runtime-2xDJh5tt.js";import{M as a}from"./index-Cl64DS2Z.js";import{useMDXComponents as r}from"./index-DI5IigMn.js";import"./index-CBqU2yxZ.js";import"./_commonjsHelpers-BosuxZz1.js";import"./iframe-DM7CfbnN.js";import"../sb-preview/runtime.js";import"./index-BtM5VmRH.js";import"./index-Bw8VTzHM.js";import"./index-Cmc67Rxs.js";import"./index-DrFu-skq.js";function o(e){const t=Object.assign({h1:"h1",pre:"pre",code:"code"},r(),e.components);return p(i,{children:[n(a,{}),`
`,n(t.h1,{id:"idea에서-사용되는-타입을-설명하는-문서입니다",children:"iDea에서 사용되는 타입을 설명하는 문서입니다."}),`
`,n(t.pre,{children:n(t.code,{className:"language-typescript",children:`export type ValueData = string | number | boolean;

export type Formatter<T extends ValueData> = (
  value: T,
  key?: string | number
) => ReactNode;

export type PolymorphicComponentProps<
  C extends ElementType,
  P extends object
> = Omit<ComponentPropsWithoutRef<C>, keyof P> & P;

export type PolymorphicComponentPropsWithChildren<
  C extends ElementType,
  P extends object
> = PropsWithChildren<PolymorphicComponentProps<C, P>>;

export type PolymorphicRef<C extends ElementType> =
  ComponentPropsWithRef<C>["ref"];
export type EntryData = [string, ValueData];
`})})]})}function f(e={}){const{wrapper:t}=Object.assign({},r(),e.components);return t?n(t,Object.assign({},e,{children:n(o,e)})):o(e)}export{f as default};
