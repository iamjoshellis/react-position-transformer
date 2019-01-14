declare module 'react-position-transformer' {
  import * as React from 'react';

  type Props = {
    destRef: HTMLElement;
    transformed: boolean;
    transition?: number;
    children: React.ReactNode;
  };

  export default class Transformer extends React.Component<Props, any> {}
}
