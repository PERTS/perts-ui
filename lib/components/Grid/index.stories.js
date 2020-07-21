import React from 'react';
// https://github.com/storybookjs/storybook/tree/master/addons/a11y
import { withA11y } from '@storybook/addon-a11y';
// https://github.com/storybookjs/storybook/tree/master/addons/knobs
import { withKnobs } from '@storybook/addon-knobs';

import { Box, Card, Grid, LoremText } from '../../.';
import styled from 'styled-components';

export default {
  title: 'Grid',
  component: Grid,
  decorators: [withKnobs, withA11y],
};

const Rectangle = styled.pre`
  width: 100%;
  height: ${(props) => (props.height ? props.height : '100px')};
  padding: 6px;
  font-size: 0.8em;
  font-family: 'Courier New', Courier, monospace
  font-weight: 300;
  background: #b793e6;
  border: 1px solid #3532a7;
`;

export const Default = () => (
  <>
    <Card>
      <Card.Content>
        <Grid>
          <Box cols={12}>
            <Rectangle />
          </Box>
        </Grid>

        <Grid>
          <Box cols={6}>
            <Rectangle />
          </Box>
          <Box cols={6}>
            <Rectangle />
          </Box>
        </Grid>

        <Grid>
          <Box cols={4}>
            <Rectangle />
          </Box>
          <Box cols={4}>
            <Rectangle />
          </Box>
          <Box cols={4}>
            <Rectangle />
          </Box>
        </Grid>

        <Grid>
          <Box cols={3}>
            <Rectangle />
          </Box>
          <Box cols={3}>
            <Rectangle />
          </Box>
          <Box cols={3}>
            <Rectangle />
          </Box>
          <Box cols={3}>
            <Rectangle />
          </Box>
        </Grid>

        <Grid>
          <Box cols={3}>
            <Rectangle />
          </Box>
          <Box cols={6}>
            <Rectangle />
          </Box>
          <Box cols={3}>
            <Rectangle />
          </Box>
        </Grid>
      </Card.Content>
    </Card>
  </>
);

export const GridAlignment = () => (
  <>
    <Card>
      <Card.Title>Grid Alignment Horizontal</Card.Title>
      <Card.Content>
        <Grid justifyContent="flex-start">
          <Box cols={3}>
            <Rectangle />
          </Box>
        </Grid>
      </Card.Content>

      <Card.Content>
        <Grid justifyContent="center">
          <Box cols={3}>
            <Rectangle />
          </Box>
        </Grid>
      </Card.Content>

      <Card.Content>
        <Grid justifyContent="flex-end">
          <Box cols={3}>
            <Rectangle />
          </Box>
        </Grid>
      </Card.Content>

      <Card.Content>
        <Grid justifyContent="space-between">
          <Box cols={3}>
            <Rectangle />
          </Box>
          <Box cols={3}>
            <Rectangle />
          </Box>
        </Grid>
      </Card.Content>

      <Card.Content>
        <Grid justifyContent="space-around">
          <Box cols={3}>
            <Rectangle />
          </Box>
          <Box cols={3}>
            <Rectangle />
          </Box>
        </Grid>
      </Card.Content>
    </Card>
    <Card>
      <Card.Title>Grid Alignment Vertical</Card.Title>
      <Card.Content>
        <Grid alignItems="flex-start">
          <Box cols={3}>
            <Rectangle height="300px" />
          </Box>
          <Box cols={3}>
            <Rectangle />
          </Box>
          <Box cols={3}>
            <Rectangle />
          </Box>
          <Box cols={3}>
            <Rectangle />
          </Box>
        </Grid>
      </Card.Content>
      <Card.Content>
        <Grid alignItems="flex-end">
          <Box cols={3}>
            <Rectangle height="300px" />
          </Box>
          <Box cols={3}>
            <Rectangle />
          </Box>
          <Box cols={3}>
            <Rectangle />
          </Box>
          <Box cols={3}>
            <Rectangle />
          </Box>
        </Grid>
      </Card.Content>
      <Card.Content>
        <Grid alignItems="center">
          <Box cols={3}>
            <Rectangle height="300px" />
          </Box>
          <Box cols={3}>
            <Rectangle />
          </Box>
          <Box cols={3}>
            <Rectangle />
          </Box>
          <Box cols={3}>
            <Rectangle />
          </Box>
        </Grid>
      </Card.Content>
    </Card>
  </>
);

export const GridPadding = () => (
  <>
    <Card>
      <Card.Title>Grid sm</Card.Title>
      <Card.Content>
        <Grid sm>
          {[1, 2, 3, 4].map((b) => (
            <Box key={b} cols={3}>
              <Rectangle />
            </Box>
          ))}
        </Grid>
      </Card.Content>
    </Card>

    <Card>
      <Card.Title>Grid md (default)</Card.Title>
      <Card.Content>
        <Grid>
          {[1, 2, 3, 4].map((b) => (
            <Box key={b} cols={3}>
              <Rectangle />
            </Box>
          ))}
        </Grid>
      </Card.Content>
    </Card>

    <Card>
      <Card.Title>Grid lg</Card.Title>
      <Card.Content>
        <Grid lg>
          {[1, 2, 3, 4].map((b) => (
            <Box key={b} cols={3}>
              <Rectangle />
            </Box>
          ))}
        </Grid>
      </Card.Content>
    </Card>
  </>
);

export const GridGrow = () => (
  <>
    <Card>
      <Card.Title>Grid Grow</Card.Title>
      <Card.Content>
        Not specifying a <code>cols*</code> prop will cause the Box to grow to
        fill up the remainder of the width.
      </Card.Content>
      <Card.Content>
        <Grid>
          <Box>
            <Rectangle>&lt;Box&gt;</Rectangle>
          </Box>
          <Box cols={6}>
            <Rectangle>&lt;Box cols=&#123;6&#125;&gt;</Rectangle>
          </Box>
          <Box>
            <Rectangle>&lt;Box&gt;</Rectangle>
          </Box>
        </Grid>
        <Grid>
          <Box>
            <Rectangle>&lt;Box&gt;</Rectangle>
          </Box>
          <Box cols={4}>
            <Rectangle>&lt;Box cols=&#123;3&#125;&gt;</Rectangle>
          </Box>
          <Box>
            <Rectangle>&lt;Box&gt;</Rectangle>
          </Box>
        </Grid>
      </Card.Content>
    </Card>
  </>
);

export const GridOffset = () => (
  <>
    <Card>
      <Card.Title>Grid Offset</Card.Title>
      <Card.Content>
        <Grid>
          <Box cols={6} offset={3}>
            <Rectangle>
              &lt;Box cols=&#123;6&#125; offset=&#123;3&#125;&gt;
            </Rectangle>
          </Box>
        </Grid>
      </Card.Content>
    </Card>
  </>
);

export const ResponsiveGrid = () => (
  <>
    <Card>
      <Card.Title>Responsive Grid</Card.Title>
      <Card.Content>
        <Grid>
          {[1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12].map((b) => (
            <Box key={b} cols={1} colsSm={12} colsMd={6} colsLg={3}>
              <Rectangle />
            </Box>
          ))}
        </Grid>
      </Card.Content>
    </Card>
  </>
);

export const BoxAlignment = () => (
  <>
    <Card>
      <Card.Title>Grid Box Alignment</Card.Title>
      <Card.Content>
        <Grid>
          <Box cols={6}>
            <LoremText />
          </Box>
          <Box cols={6} vAlign="center" hAlign="center">
            Hello
          </Box>
        </Grid>
      </Card.Content>
    </Card>
  </>
);
