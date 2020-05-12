import React, { useState } from 'react';
// https://github.com/storybookjs/storybook/tree/master/addons/a11y
import { withA11y } from '@storybook/addon-a11y';
// https://github.com/storybookjs/storybook/tree/master/addons/knobs
import { withKnobs } from '@storybook/addon-knobs';

import { Checkbox } from '../../.';

export default {
  title: 'Checkbox',
  component: Checkbox,
  decorators: [withKnobs, withA11y],
};

export const Default = () => {
  const [checked, setChecked] = useState(false);
  return (
    <Checkbox
      name="sandwich"
      value="panini"
      checked={checked}
      onClick={() => setChecked(!checked)}
    />
  );
};
