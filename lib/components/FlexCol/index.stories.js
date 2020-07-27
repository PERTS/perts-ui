import React from 'react';
// https://github.com/storybookjs/storybook/tree/master/addons/a11y
import { withA11y } from '@storybook/addon-a11y';
// https://github.com/storybookjs/storybook/tree/master/addons/knobs
import { withKnobs } from '@storybook/addon-knobs';

import { Card, FlexCol, FlexItem, LoremText } from '../../.';

export default {
  title: 'FlexCol',
  component: FlexCol,
  decorators: [withKnobs, withA11y],
};

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
