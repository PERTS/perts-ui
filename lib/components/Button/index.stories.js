import React from 'react';
// https://github.com/storybookjs/storybook/tree/master/addons/a11y
import { withA11y } from '@storybook/addon-a11y';
// https://github.com/storybookjs/storybook/tree/master/addons/knobs
import { withKnobs } from '@storybook/addon-knobs';

import { Button } from '../../.';
import { FaChevronCircleRight } from 'react-icons/fa';

export default {
  title: 'Button',
  component: Button,
  decorators: [withKnobs, withA11y],
};

export const Default = () => (
  <Button onClick={() => alert('clicked')}>Click Me!</Button>
);

export const Secondary = () => (
  <Button onClick={() => alert('clicked')} secondary>
    Click Me!
  </Button>
);

export const CustomIcon = () => (
  <Button onClick={() => alert('clicked')} icon={<FaChevronCircleRight />}>
    Next Page
  </Button>
);

export const Disabled = () => (
  <Button onClick={() => alert('clicked')} disabled>
    Click Me!
  </Button>
);

export const Loading = () => (
  <Button onClick={() => alert('clicked')} loading>
    Click Me!
  </Button>
);
