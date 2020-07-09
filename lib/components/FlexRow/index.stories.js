import React from 'react';
// https://github.com/storybookjs/storybook/tree/master/addons/a11y
import { withA11y } from '@storybook/addon-a11y';
// https://github.com/storybookjs/storybook/tree/master/addons/knobs
import { withKnobs } from '@storybook/addon-knobs';

import { Card, FlexRow, FlexItem } from '../../.';

export default {
  title: 'FlexRow',
  component: FlexRow,
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
    <Card.Title>FlexRow Example</Card.Title>
    <Card.Content>
      <FlexRow>
        <FlexItem>
          <LoremText />
        </FlexItem>
        <FlexItem>
          <LoremText />
        </FlexItem>
      </FlexRow>
    </Card.Content>
  </Card>
);

export const AlignItems = () => (
  <Card>
    <Card.Title>FlexRow alignItems Example</Card.Title>
    <Card.Content>
      <FlexRow alignItems="center">
        <FlexItem>
          <LoremText />
          <LoremText />
        </FlexItem>
        <FlexItem>
          <LoremText />
        </FlexItem>
      </FlexRow>
    </Card.Content>
  </Card>
);

export const JustifyContent = () => (
  <Card>
    <Card.Title>FlexRow justifyContent Example</Card.Title>
    <Card.Content>
      <FlexRow justifyContent="center">
        <FlexItem grow={0}>
          <img src="https://placekitten.com/200/300" />
        </FlexItem>
      </FlexRow>
    </Card.Content>
  </Card>
);
