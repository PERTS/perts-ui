import React, { useState } from 'react';
// https://github.com/storybookjs/storybook/tree/master/addons/a11y
import { withA11y } from '@storybook/addon-a11y';
// https://github.com/storybookjs/storybook/tree/master/addons/knobs
import { withKnobs } from '@storybook/addon-knobs';

import { CheckboxWithLabel } from '../../.';

export default {
  title: 'CheckboxWithLabel',
  component: CheckboxWithLabel,
  decorators: [withKnobs, withA11y],
};

export const Default = () => {
  const [checked, setChecked] = useState({
    basil: false,
    mozarella: false,
    tomatoes: false,
  });

  return (
    <div>
      <CheckboxWithLabel
        name="toppings"
        label="Basil"
        value="basil"
        checked={checked.basil}
        onClick={() => setChecked({ ...checked, basil: !checked.basil })}
      />

      <CheckboxWithLabel
        name="toppings"
        label="Mozarella"
        value="mozarella"
        checked={checked.mozarella}
        onClick={() =>
          setChecked({ ...checked, mozarella: !checked.mozarella })
        }
      />

      <CheckboxWithLabel
        name="toppings"
        label="Tomatoes"
        value="tomatoes"
        checked={checked.tomatoes}
        onClick={() => setChecked({ ...checked, tomatoes: !checked.tomatoes })}
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
      <CheckboxWithLabel
        name="disabledExample"
        label="Selected and Disabled"
        value="exampleSelected"
        checked={checked.exampleSelected}
        onClick={() =>
          setChecked({ ...checked, exampleSelected: !checked.exampleSelected })
        }
        disabled={true}
      />

      <CheckboxWithLabel
        name="disabledExample"
        label="Unselected and Disabled"
        value="exampleUnselected"
        checked={checked.exampleUnselected}
        onClick={() =>
          setChecked({
            ...checked,
            exampleUnselected: !checked.exampleUnselected,
          })
        }
        disabled={true}
      />
    </div>
  );
};
