import * as React from 'react';

export type Props = {
  destRef: HTMLElement;
  transformed: boolean;
  transition?: number;
  children: React.ReactNode;
};

// https://gist.github.com/aderaaij/a6b666bf756b2db1596b366da921755d
const getComputedTranslateXY = (el: HTMLDivElement) => {
  if (!window.getComputedStyle) return;
  const style = getComputedStyle(el);
  const transform = style.transform || style.webkitTransform;
  let mat = transform.match(/^matrix3d\((.+)\)$/);
  if (mat) return parseFloat(mat[1].split(', ')[13]);
  mat = transform.match(/^matrix\((.+)\)$/);
  return [mat ? parseFloat(mat[1].split(', ')[4]) : 0, mat ? parseFloat(mat[1].split(', ')[5]) : 0];
};

class Transformer extends React.Component<Props> {
  static defaultProps = {
    transition: 0,
  };

  props: Props;

  srcRef = React.createRef<HTMLDivElement>();

  getOffset = () => {
    const { transformed, destRef, transition } = this.props;
    let dx = 0;
    let dy = 0;
    if (transformed && this.srcRef.current && destRef) {
      const rect = this.srcRef.current.getBoundingClientRect();
      const destinationRect = destRef.getBoundingClientRect();
      const transform = getComputedTranslateXY(this.srcRef.current);
      dx = destinationRect.left - rect.left + transform[0];
      dy = destinationRect.top - rect.top + transform[1];
    }
    this.srcRef.current.style.transform = `translate(${dx}px, ${dy}px)`;
    this.srcRef.current.style.transition = `transform ${transition}ms`;
  };

  componentDidMount() {
    if (this.props.transformed && this.srcRef.current) {
      this.srcRef.current.style.opacity = '0';
      this.srcRef.current.style.transition = 'transform 0ms';
      this.getOffset();
    }
    window.setTimeout(() => {
      if (this.srcRef.current) {
        this.srcRef.current.style.opacity = '1';
        this.srcRef.current.style.transition = `transform ${this.props.transition}ms`;
      }
    });
  }

  componentDidUpdate() {
    this.getOffset();
  }

  render() {
    return <div ref={this.srcRef}>{this.props.children}</div>;
  }
}

export default Transformer;
