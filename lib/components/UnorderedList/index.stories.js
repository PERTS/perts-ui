import React from 'react';
import { withA11y } from '@storybook/addon-a11y';
import { withKnobs, text } from '@storybook/addon-knobs';

import UnorderedList from '.';
import ListItem from '../ListItem';

export default {
  title: 'UnorderedList',
  component: UnorderedList,
  decorators: [withKnobs, withA11y],
};

export const Default = () => (
  <UnorderedList>
    <ListItem>Default Unordered List Item</ListItem>
    <ListItem icon="check">Check Mark</ListItem>
    <ListItem icon="check" iconColor="success">
      Green Check Mark
    </ListItem>
    <ListItem icon="star" iconColor="info">
      Yellow Star
    </ListItem>
    <ListItem icon="warning" iconColor="warning">
      Red Warning Sign
    </ListItem>
    <ListItem icon="circle-o-notch" iconSpin>
      Animated Spinner
    </ListItem>
    <ListItem icon={text('Font Awesome Icon Name', 'star')}>
      Use the StoryBook Knobs Panel to set this icon
    </ListItem>
    <ListItem icon="check">
      Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod
      tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim
      veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea
      commodo consequat.
    </ListItem>
    <ListItem icon="check">
      Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod
      tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim
      veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea
      commodo consequat.
    </ListItem>
    <ListItem icon="check">
      Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod
      tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim
      veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea
      commodo consequat.
    </ListItem>
  </UnorderedList>
);
