import React from 'react';
// https://github.com/storybookjs/storybook/tree/master/addons/a11y
import { withA11y } from '@storybook/addon-a11y';
// https://github.com/storybookjs/storybook/tree/master/addons/knobs
import { withKnobs } from '@storybook/addon-knobs';

import ColorSwatch from '../ColorSwatch';
import { Card } from '../..';
import { colorsBrand, colorsAliases } from '../theme';

export default {
  title: 'Color Palette',
  decorators: [withKnobs, withA11y],
};

export const ColorPalette = () => (
  <Card>
    <Card.Title>Color Palette</Card.Title>
    <Card.Content>
      <ColorSwatch themeColors={colorsBrand} themeAliases={colorsAliases} />
    </Card.Content>
  </Card>
);
