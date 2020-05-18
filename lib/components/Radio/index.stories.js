import React, { useState } from 'react';
// https://github.com/storybookjs/storybook/tree/master/addons/a11y
import { withA11y } from '@storybook/addon-a11y';
// https://github.com/storybookjs/storybook/tree/master/addons/knobs
import { withKnobs } from '@storybook/addon-knobs';

import { Radio } from '../../.';

export default {
  title: 'Radio',
  component: Radio,
  decorators: [withKnobs, withA11y],
};

export const Default = () => {
  const [checked, setChecked] = useState(true);
  const isChecked = (v) => v === checked;

  return (
    <div>
      <Radio
        name="exampleOptions"
        id="exampleOptionsOption1"
        value="option1"
        checked={isChecked('option1')}
        onChange={() => setChecked('option1')}
      />
      <Radio
        name="exampleOptions"
        id="exampleOptionsOption2"
        value="option2"
        checked={isChecked('option2')}
        onChange={() => setChecked('option2')}
      />
    </div>
  );
};
