import React from 'react';
import { storiesOf } from '@storybook/react';
import { number, boolean } from '@storybook/addon-knobs';
import * as S from './styles';

import Transformer from 'react-position-transformer';

const OPTIONS = {
  range: true,
  min: 0,
  max: 100,
  step: 1,
};

const getDestStyle = () => ({
  top: `${number('dest top', 50, OPTIONS)}%`,
  left: `${number('dest left', 50, OPTIONS)}%`,
});

class Story extends React.Component {
  destRef = React.createRef();

  render() {
    return (
      <React.Fragment>
        <S.GlobalStyle />
        <S.Dest ref={this.destRef} style={getDestStyle()}>dest</S.Dest>
        <Transformer
          transition={number('transition (ms)', 0)}
          transformed={boolean('transformed', false)}
          destRef={this.destRef.current}
        >
          <S.Src>src</S.Src>
        </Transformer>
      </React.Fragment>
    );
  }
}

storiesOf('Transformer', module).add('demo', () => <Story />);

