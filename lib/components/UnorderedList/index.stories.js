import React from 'react';
import { withA11y } from '@storybook/addon-a11y';
import { withKnobs } from '@storybook/addon-knobs';

import UnorderedList from '.';
import ListItem from '../ListItem';
import { FaCheck, FaStar, FaExclamationTriangle } from 'react-icons/fa';

export default {
  title: 'UnorderedList',
  component: UnorderedList,
  decorators: [withKnobs, withA11y],
};

export const Default = () => (
  <UnorderedList>
    <ListItem>Default Unordered List Item</ListItem>
    <ListItem icon={<FaCheck />}>Check Mark</ListItem>
    <ListItem icon={<FaCheck />} iconColor="success">
      Green Check Mark
    </ListItem>
    <ListItem icon={<FaStar />} iconColor="info">
      Yellow Star
    </ListItem>
    <ListItem icon={<FaExclamationTriangle />} iconColor="warning">
      Red Warning Sign
    </ListItem>
    <ListItem icon={<FaCheck />}>
      Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod
      tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim
      veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea
      commodo consequat.
    </ListItem>
    <ListItem icon={<FaCheck />}>
      Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod
      tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim
      veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea
      commodo consequat.
    </ListItem>
    <ListItem icon={<FaCheck />}>
      Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod
      tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim
      veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea
      commodo consequat.
    </ListItem>
  </UnorderedList>
);
