import React from 'react';
import { ColorsContext, colors } from './ColorsContext';

const ColorsProvider = ({ children }) => {
  return (
    <ColorsContext.Provider value={colors.light}>
      {children}
    </ColorsContext.Provider>
  );
};

export default ColorsProvider;
