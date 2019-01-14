declare module 'react-position-transformer' {
  import * as React from 'react';

  type Props = {
    destRef: HTMLElement;
    transformed: boolean;
    transition?: number;
    children: React.ReactNode;
  };

  class Transformer extends React.Component<> {}
}
