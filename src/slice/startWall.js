import React from 'react';

import pieStartWall from '.././math/pieStartWall';
import move from '.././math/move';

export default class StartWall extends React.Component {

  static propTypes = {
    d: React.PropTypes.shape({
      color: React.PropTypes.string,
    }).isRequired,
    rx: React.PropTypes.number.isRequired,
    ry: React.PropTypes.number.isRequired,
    h: React.PropTypes.number.isRequired,
    ir: React.PropTypes.number.isRequired,
    move: React.PropTypes.func
  }

  move = () => this.props.move(this.props.d)

  render() {
    return (
      <path style={{ fill: this.props.d.color, cursor: 'pointer' }}
            d={pieStartWall(this.props.d, this.props.rx, this.props.ry,
              this.props.h, this.props.ir)}
            onClick={this.move}
            stroke="white"
            transform={this.props.moved ?
              `translate(${move(this.props.d, this.props.rx, this.props.ry)})`
              :
              'translate(0,0)'}
      />
    );
  }
}
