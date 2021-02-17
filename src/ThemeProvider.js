import React, { Component } from 'react';
import { ThemeContext, themes } from './theme-context';
import ThemedButton from './ThemedButton';

class ThemeProvider extends Component {
  state = {
    theme: themes.light,
  };

  toggleTheme = () => {
    this.setState((state) => ({
      theme: state.theme === themes.dark ? themes.light : themes.dark,
    }));
  };

  render() {
    return (
      <ThemeContext.Provider value={this.state.theme}>
        <ThemedButton toggleTheme={this.toggleTheme} />
      </ThemeContext.Provider>
    );
  }
}

export default ThemeProvider;
