# React Position Transformer 📐

[![npm](https://img.shields.io/npm/v/react-position-transformer.svg)](https://www.npmjs.com/package/react-position-transformer)
[![Build Status](https://travis-ci.org/iamjoshellis/react-position-transformer.svg?branch=master)](https://travis-ci.org/iamjoshellis/react-position-transformer)
[![code style: prettier](https://img.shields.io/badge/code_style-prettier-ff69b4.svg)](https://github.com/prettier/prettier)
[![Netlify Status](https://api.netlify.com/api/v1/badges/92ade594-dc7a-4632-8489-43d167f3f22b/deploy-status)](https://app.netlify.com/sites/react-position-transformer/deploys)

Performantly transform one element's position to an others! 🚀

## [Demo](https://react-position-transformer.netlify.com/)

## Usage:
```js
import * as React from 'react';
import Transformer from 'react-position-transformer';

class MyComponent extends React.Component {
  destRef = React.createRef();

  render() {
    return (
      <React.Fragment>
        <div ref={this.destRef}>
          dest
        </div>
        <Transformer
          transition={300}
          transformed={this.props.transformed}
          destRef={this.destRef.current}
        >
          <div>src</div>
        </Transformer>
      </React.Fragment>
    );
  }
}
```

`src` will be "moved" (via css transforms) to `dest` when `transformed === true`.