import React from 'react';
// https://github.com/storybookjs/storybook/tree/master/addons/a11y
import { withA11y } from '@storybook/addon-a11y';
// https://github.com/storybookjs/storybook/tree/master/addons/knobs
import { withKnobs } from '@storybook/addon-knobs';

import { Loading } from '../../.';

export default {
  title: 'Loading',
  component: Loading,
  decorators: [withKnobs, withA11y],
};

export const Default = () => <Loading />;
