import React from 'react';

export const colors = {
  light: {
    background: '#fff',
    color: 'black',
  },
  dark: {
    background: 'black',
    color: 'white',
  },
};

export const ColorsContext = React.createContext(colors.light);
