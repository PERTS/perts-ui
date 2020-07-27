import React from 'react';
// https://github.com/storybookjs/storybook/tree/master/addons/a11y
import { withA11y } from '@storybook/addon-a11y';
// https://github.com/storybookjs/storybook/tree/master/addons/knobs
import { withKnobs } from '@storybook/addon-knobs';

import { Card, Col, Figure, LoremText, Row } from '../../.';

export default {
  title: 'Figure',
  component: Figure,
  decorators: [withKnobs, withA11y],
};

export const Default = () => (
  <Card>
    <Card.Title>Figure, Default (Responsive)</Card.Title>
    <Card.Content>
      <Row>
        <Col cols={6} colsSm={12}>
          <LoremText />
        </Col>
        <Col cols={6} colsSm={12}>
          <Figure>
            <img src="https://placekitten.com/408/287" alt="" />
            <figcaption>
              Cats are North America&rsquo;s most popular pet. <LoremText />
            </figcaption>
          </Figure>
        </Col>
      </Row>
    </Card.Content>
  </Card>
);

export const NonResponsive = () => (
  <Card>
    <Card.Title>Figure, Forced Non-Responsive</Card.Title>
    <Card.Content>
      <Row>
        <Col cols={6} colsMd={12}>
          <p>
            In some cases, you might want to turn off the responsiveness of the
            Figure component and its image. <LoremText />
          </p>
        </Col>
        <Col cols={6} colsMd={12} hAlign="center">
          <Figure responsive={false}>
            <img src="https://placekitten.com/408/287" alt="" />
            <figcaption>
              Cats are North America&rsquo;s most popular pet.
            </figcaption>
          </Figure>
        </Col>
      </Row>
    </Card.Content>
  </Card>
);
