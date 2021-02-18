import React from 'react';

export const themes = {
  light: {
    foreground: '#000000',
    background: '#eeeeee',
  },
  dark: {
    foreground: '#fff',
    background: '#222',
  },
};

export const ThemeContext = React.createContext(themes.dark);
