import React from 'react';
// https://github.com/storybookjs/storybook/tree/master/addons/a11y
import { withA11y } from '@storybook/addon-a11y';
// https://github.com/storybookjs/storybook/tree/master/addons/knobs
import { withKnobs, text } from '@storybook/addon-knobs';

import HelloWorld from './';

export default {
  title: 'HelloWorld',
  component: HelloWorld,
  decorators: [withKnobs, withA11y],
};

export const EditableProps = () => <HelloWorld name={text('name')} />;
