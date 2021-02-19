import React from 'react';
import Button from './Button';
import ColorsProvider from './ColorsProvider';

const Index = () => {
  return (
    <ColorsProvider>
      <Button />
    </ColorsProvider>
  );
};

export default Index;
