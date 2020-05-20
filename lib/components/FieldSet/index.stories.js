import React from 'react';
// https://github.com/storybookjs/storybook/tree/master/addons/a11y
import { withA11y } from '@storybook/addon-a11y';
// https://github.com/storybookjs/storybook/tree/master/addons/knobs
import { withKnobs } from '@storybook/addon-knobs';

import { Card, FieldSet, Legend, CheckboxWithLabel } from '../../.';

export default {
  title: 'FieldSet',
  component: FieldSet,
  decorators: [withKnobs, withA11y],
};

export const Default = () => (
  <Card>
    <Card.Title>Sandwich Options</Card.Title>
    <Card.Content>
      <FieldSet>
        <Legend>Bread</Legend>
        <CheckboxWithLabel label="Baguette" />
        <CheckboxWithLabel label="Česnica" />
        <CheckboxWithLabel label="Ciabatta" />
      </FieldSet>
      <FieldSet>
        <Legend>Meats</Legend>
        <CheckboxWithLabel label="Brisket" />
        <CheckboxWithLabel label="Chicken" />
        <CheckboxWithLabel label="Lamb" />
      </FieldSet>
    </Card.Content>
  </Card>
);
