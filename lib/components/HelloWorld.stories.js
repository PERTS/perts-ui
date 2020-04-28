import React from 'react';
// https://github.com/storybookjs/storybook/tree/master/addons/knobs
import { withKnobs, text } from '@storybook/addon-knobs';
import HelloWorld from './HelloWorld';

export default {
  title: 'HelloWorld',
  component: HelloWorld,
  decorators: [withKnobs],
};

export const EditableProps = () => <HelloWorld name={text('name')} />;
