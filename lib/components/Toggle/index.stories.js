import React, { useState } from 'react';
// https://github.com/storybookjs/storybook/tree/master/addons/a11y
import { withA11y } from '@storybook/addon-a11y';
// https://github.com/storybookjs/storybook/tree/master/addons/knobs
import { withKnobs } from '@storybook/addon-knobs';

import { Toggle } from '../../.';

export default {
  title: 'Toggle',
  component: Toggle,
  decorators: [withKnobs, withA11y],
};

export const Default = () => {
  const [checked, setChecked] = useState(false);

  return (
    <div>
      <Toggle
        name="toggleExample"
        id="toggleExample"
        label={`Toggle ${checked ? 'IS' : 'IS NOT'} checked`}
        labelWidth={136}
        checked={checked}
        onChange={() => setChecked(!checked)}
      />
    </div>
  );
};
