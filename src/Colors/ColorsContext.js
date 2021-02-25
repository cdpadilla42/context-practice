import React from 'react';

export const ColorsContext = React.createContext();

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
