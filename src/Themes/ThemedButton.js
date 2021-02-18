import React, { Component } from 'react';
import { ThemeContext } from './theme-context';

class ThemedButton extends Component {
  static contextType = ThemeContext;

  render() {
    const { props, context: theme } = this;
    return (
      <button
        {...props}
        style={{ backgroundColor: theme.background }}
        onClick={this.props.toggleTheme}
      >
        Change the Theme!
      </button>
    );
  }
}

export default ThemedButton;
