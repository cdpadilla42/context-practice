import React, { useState } from 'react';
import Button from './Button';
import { colors, ColorsContext } from './ColorsContext';

const ColorsProvider = ({ children }) => {
  const [theme, setTheme] = useState(colors.light);

  function toggleTheme() {
    setTheme((prevState) =>
      prevState === colors.light ? colors.dark : colors.light
    );
  }

  return (
    <ColorsContext.Provider value={theme}>
      <Button onClick={toggleTheme} />
    </ColorsContext.Provider>
  );
};

export default ColorsProvider;
