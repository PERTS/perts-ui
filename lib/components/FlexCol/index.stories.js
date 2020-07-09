import React from 'react';
// https://github.com/storybookjs/storybook/tree/master/addons/a11y
import { withA11y } from '@storybook/addon-a11y';
// https://github.com/storybookjs/storybook/tree/master/addons/knobs
import { withKnobs } from '@storybook/addon-knobs';

import { Card, FlexCol, FlexItem } from '../../.';

export default {
  title: 'FlexCol',
  component: FlexCol,
  decorators: [withKnobs, withA11y],
};

const LoremText = () => (
  <p>
    Lorem ipsum dolor sit amet, consectetur adipiscing elit. Aliquam consequat
    placerat massa, sit amet hendrerit leo fringilla vel. Praesent eget mauris
    volutpat, sodales mi quis, posuere diam. Etiam dictum rhoncus elit, at
    vestibulum velit aliquam id. Fusce id rutrum nunc, sit amet rutrum libero.
    Duis eu dolor lectus. Aenean at libero augue. Suspendisse posuere
    scelerisque leo ut aliquam. Vivamus ut lobortis libero. Donec semper lectus
    quis enim ornare porta. Curabitur pretium est massa, nec varius leo
    tincidunt eu.
  </p>
);

export const Default = () => (
  <Card>
    <Card.Title>FlexCol Example</Card.Title>
    <Card.Content>
      <FlexCol>
        <FlexItem>
          <LoremText />
        </FlexItem>
        <FlexItem>
          <LoremText />
        </FlexItem>
      </FlexCol>
    </Card.Content>
  </Card>
);

export const AlignItems = () => (
  <Card>
    <Card.Title>FlexCol alignItems Example</Card.Title>
    <Card.Content>
      <FlexCol alignItems="center">
        <FlexItem grow={0}>
          <img src="https://placekitten.com/200/300" />
        </FlexItem>
        <FlexItem grow={0}>
          <img src="https://placekitten.com/200/300" />
        </FlexItem>
      </FlexCol>
    </Card.Content>
  </Card>
);
