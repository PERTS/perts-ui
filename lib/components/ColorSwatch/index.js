// Provide the `theme.colorsBrand` and `theme.colorsAliases` to generate a color
// swatch that shows the values, names, and any aliases for each theme color.
//
// Note: This isn't intended to be exported from the library. It's a helper
// component for Storybook.

import React from 'react';
import PropTypes from 'prop-types';

import { Col, Row } from '../../';
import Aliases from './Aliases';
import Swatch from './Swatch';

const ColorSwatch = ({ themeColors, themeAliases }) => {
  const themeColorsArray = [];
  const themeAliasesArray = [];

  for (const color in themeColors) {
    themeColorsArray.push({ key: color, value: themeColors[color] });
  }

  for (const color in themeAliases) {
    themeAliasesArray.push({ key: color, value: themeAliases[color] });
  }

  return (
    <Row>
      {themeColorsArray.map((color) => (
        <Col cols={12} key={color.key}>
          <Swatch bgColor={color.value}>
            {color.value} {color.key}
            <Aliases
              colorValue={color.value}
              themeAliasesArray={themeAliasesArray}
            />
          </Swatch>
        </Col>
      ))}
    </Row>
  );
};

ColorSwatch.propTypes = {
  themeColors: PropTypes.object.isRequired,
  themeAliases: PropTypes.object.isRequired,
};

export default ColorSwatch;
