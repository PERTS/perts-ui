import React from 'react';
// https://github.com/storybookjs/storybook/tree/master/addons/a11y
import { withA11y } from '@storybook/addon-a11y';
// https://github.com/storybookjs/storybook/tree/master/addons/knobs
import { withKnobs } from '@storybook/addon-knobs';

import { Card } from '../../.';

export default {
  title: 'Card',
  component: Card,
  decorators: [withKnobs, withA11y],
};

export const Default = () => (
  <Card>
    <Card.Title>
      Do you feel comfortable answering these questions honestly? (If no, why
      not?)
    </Card.Title>
    <Card.Content>
      <p>
        Lorem ipsum dolor sit amet, consectetur adipiscing elit. Aliquam
        consequat placerat massa, sit amet hendrerit leo fringilla vel. Praesent
        eget mauris volutpat, sodales mi quis, posuere diam. Etiam dictum
        rhoncus elit, at vestibulum velit aliquam id. Fusce id rutrum nunc, sit
        amet rutrum libero. Duis eu dolor lectus. Aenean at libero augue.
        Suspendisse posuere scelerisque leo ut aliquam. Vivamus ut lobortis
        libero. Donec semper lectus quis enim ornare porta. Curabitur pretium
        est massa, nec varius leo tincidunt eu.
      </p>
    </Card.Content>
    <Card.Content>
      <p>
        Nullam vitae laoreet eros. Etiam nec malesuada odio, tincidunt faucibus
        leo. Nunc elit purus, tincidunt sed urna sit amet, vulputate bibendum
        eros. Interdum et malesuada fames ac ante ipsum primis in faucibus.
        Aenean porttitor sagittis neque, at ullamcorper magna scelerisque a.
        Nullam vitae leo in velit posuere aliquet. Nunc et tempus sapien, vel
        tempor nibh. Orci varius natoque penatibus et magnis dis parturient
        montes, nascetur ridiculus mus.
      </p>
      <p>
        Nam in leo non justo hendrerit dignissim id ut dolor. Etiam placerat
        ultrices lacinia. Integer eleifend ultricies maximus. Vivamus sed mauris
        pellentesque, mollis tortor sit amet, sodales mi. Mauris vitae erat in
        nisl aliquam efficitur id ut sem. Sed nibh odio, fringilla ac congue et,
        venenatis id ipsum. In sodales mauris et tortor luctus hendrerit. Donec
        blandit ipsum tortor, ut porta arcu facilisis sed. Duis eu felis semper,
        pulvinar tortor at, sodales purus. Integer felis justo, dapibus ac
        ligula quis, rhoncus tempus velit. Integer venenatis dolor diam, et
        facilisis nisl vehicula eu. Phasellus varius ut nunc sed commodo. Donec
        nec orci justo. Morbi sit amet lectus commodo, rutrum turpis eu, dapibus
        justo. Pellentesque iaculis tincidunt elit id ullamcorper.
      </p>
    </Card.Content>
  </Card>
);
