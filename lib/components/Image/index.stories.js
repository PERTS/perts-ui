import React from 'react';
// https://github.com/storybookjs/storybook/tree/master/addons/a11y
import { withA11y } from '@storybook/addon-a11y';
// https://github.com/storybookjs/storybook/tree/master/addons/knobs
import { withKnobs } from '@storybook/addon-knobs';

import Image from './';
import Row from '../Row';
import Col from '../Col';
import LoremText from '../LoremText';

export default {
  title: 'Image',
  component: Image,
  decorators: [withKnobs, withA11y],
};

export const Default = () => (
  <div style={{ width: '300px', border: '1px solid purple' }}>
    <Image src="http://placekitten.com/1000/600" alt="" />
  </div>
);

export const SizeDown = () => (
  <div style={{ maxWidth: '300px', border: '1px solid purple' }}>
    <Image src="http://placekitten.com/1000/600" sizeDown alt="" />
  </div>
);

export const SizeUp = () => (
  <Image src="http://placekitten.com/500/300" sizeUp alt="" />
);

export const FullyResponsive = () => (
  <Row>
    <Col colsMd={9} colsSm={12}>
      <LoremText />
    </Col>
    <Col colsMd={3} colsSm={12}>
      <Image src="http://placekitten.com/500/300" sizeDown sizeUp alt="" />
    </Col>
  </Row>
);
