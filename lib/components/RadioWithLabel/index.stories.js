import React, { useState } from 'react';
// https://github.com/storybookjs/storybook/tree/master/addons/a11y
import { withA11y } from '@storybook/addon-a11y';
// https://github.com/storybookjs/storybook/tree/master/addons/knobs
import { withKnobs } from '@storybook/addon-knobs';

import { RadioWithLabel } from '../../.';

export default {
  title: 'RadioWithLabel',
  component: RadioWithLabel,
  decorators: [withKnobs, withA11y],
};

export const Default = () => {
  const [checked, setChecked] = useState('');

  return (
    <div>
      <RadioWithLabel
        name="sandwich"
        label="Gryo"
        value="gyro"
        checked={checked === 'gyro'}
        onChange={() => setChecked('gyro')}
      />

      <RadioWithLabel
        name="sandwich"
        label="Meatball"
        value="meatball"
        checked={checked === 'meatball'}
        onChange={() => setChecked('meatball')}
      />

      <RadioWithLabel
        name="sandwich"
        label="Panini"
        value="panini"
        checked={checked === 'panini'}
        onChange={() => setChecked('panini')}
      />
    </div>
  );
};

export const Disabled = () => {
  const [checked, setChecked] = useState({
    exampleSelected: true,
    exampleUnselected: false,
  });

  return (
    <div>
      <RadioWithLabel
        name="disabledExample"
        label="Selected and Disabled"
        value="exampleSelected"
        checked={checked.exampleSelected}
        onChange={() => setChecked('exampleSelected')}
        disabled={true}
      />

      <RadioWithLabel
        name="disabledExample"
        label="Unselected and Disabled"
        value="exampleUnselected"
        checked={checked.exampleUnselected}
        onChange={() => setChecked('exampleUnselected')}
        disabled={true}
      />
    </div>
  );
};
