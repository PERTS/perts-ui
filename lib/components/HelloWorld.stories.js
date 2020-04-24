import React from 'react';
import HelloWorld from './HelloWorld';

export default {
  title: 'HelloWorld',
  component: HelloWorld,
};

export const Default = () => <HelloWorld />;

export const CustomName = () => <HelloWorld name="Tidy" />;
