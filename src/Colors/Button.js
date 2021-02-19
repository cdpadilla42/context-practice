import React, { Component } from 'react';
import { ColorsContext } from './ColorsContext';

class Button extends Component {
  static contextType = ColorsContext;

  render() {
    return <button style={this.context}>Hello</button>;
  }
}

export default Button;
