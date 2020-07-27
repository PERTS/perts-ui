import React from 'react';
// https://github.com/storybookjs/storybook/tree/master/addons/a11y
import { withA11y } from '@storybook/addon-a11y';
// https://github.com/storybookjs/storybook/tree/master/addons/knobs
import { withKnobs } from '@storybook/addon-knobs';

import { Card, Col, LoremText, Row } from '../../.';
import styled from 'styled-components';

export default {
  title: 'Row',
  component: Row,
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
        <Row>
          <Col cols={12}>
            <Rectangle />
          </Col>
        </Row>

        <Row>
          <Col cols={6}>
            <Rectangle />
          </Col>
          <Col cols={6}>
            <Rectangle />
          </Col>
        </Row>

        <Row>
          <Col cols={4}>
            <Rectangle />
          </Col>
          <Col cols={4}>
            <Rectangle />
          </Col>
          <Col cols={4}>
            <Rectangle />
          </Col>
        </Row>

        <Row>
          <Col cols={3}>
            <Rectangle />
          </Col>
          <Col cols={3}>
            <Rectangle />
          </Col>
          <Col cols={3}>
            <Rectangle />
          </Col>
          <Col cols={3}>
            <Rectangle />
          </Col>
        </Row>

        <Row>
          <Col cols={3}>
            <Rectangle />
          </Col>
          <Col cols={6}>
            <Rectangle />
          </Col>
          <Col cols={3}>
            <Rectangle />
          </Col>
        </Row>
      </Card.Content>
    </Card>
  </>
);

export const RowAlignment = () => (
  <>
    <Card>
      <Card.Title>Row Alignment Horizontal</Card.Title>
      <Card.Content>
        <Row justifyContent="flex-start">
          <Col cols={3}>
            <Rectangle />
          </Col>
        </Row>
      </Card.Content>

      <Card.Content>
        <Row justifyContent="center">
          <Col cols={3}>
            <Rectangle />
          </Col>
        </Row>
      </Card.Content>

      <Card.Content>
        <Row justifyContent="flex-end">
          <Col cols={3}>
            <Rectangle />
          </Col>
        </Row>
      </Card.Content>

      <Card.Content>
        <Row justifyContent="space-between">
          <Col cols={3}>
            <Rectangle />
          </Col>
          <Col cols={3}>
            <Rectangle />
          </Col>
        </Row>
      </Card.Content>

      <Card.Content>
        <Row justifyContent="space-around">
          <Col cols={3}>
            <Rectangle />
          </Col>
          <Col cols={3}>
            <Rectangle />
          </Col>
        </Row>
      </Card.Content>
    </Card>
    <Card>
      <Card.Title>Row Alignment Vertical</Card.Title>
      <Card.Content>
        <Row alignItems="flex-start">
          <Col cols={3}>
            <Rectangle height="300px" />
          </Col>
          <Col cols={3}>
            <Rectangle />
          </Col>
          <Col cols={3}>
            <Rectangle />
          </Col>
          <Col cols={3}>
            <Rectangle />
          </Col>
        </Row>
      </Card.Content>
      <Card.Content>
        <Row alignItems="flex-end">
          <Col cols={3}>
            <Rectangle height="300px" />
          </Col>
          <Col cols={3}>
            <Rectangle />
          </Col>
          <Col cols={3}>
            <Rectangle />
          </Col>
          <Col cols={3}>
            <Rectangle />
          </Col>
        </Row>
      </Card.Content>
      <Card.Content>
        <Row alignItems="center">
          <Col cols={3}>
            <Rectangle height="300px" />
          </Col>
          <Col cols={3}>
            <Rectangle />
          </Col>
          <Col cols={3}>
            <Rectangle />
          </Col>
          <Col cols={3}>
            <Rectangle />
          </Col>
        </Row>
      </Card.Content>
    </Card>
  </>
);

export const RowPadding = () => (
  <>
    <Card>
      <Card.Title>Row sm</Card.Title>
      <Card.Content>
        <Row sm>
          {[1, 2, 3, 4].map((b) => (
            <Col key={b} cols={3}>
              <Rectangle />
            </Col>
          ))}
        </Row>
      </Card.Content>
    </Card>

    <Card>
      <Card.Title>Row md (default)</Card.Title>
      <Card.Content>
        <Row>
          {[1, 2, 3, 4].map((b) => (
            <Col key={b} cols={3}>
              <Rectangle />
            </Col>
          ))}
        </Row>
      </Card.Content>
    </Card>

    <Card>
      <Card.Title>Row lg</Card.Title>
      <Card.Content>
        <Row lg>
          {[1, 2, 3, 4].map((b) => (
            <Col key={b} cols={3}>
              <Rectangle />
            </Col>
          ))}
        </Row>
      </Card.Content>
    </Card>
  </>
);

export const ColGrow = () => (
  <>
    <Card>
      <Card.Title>Col Grow</Card.Title>
      <Card.Content>
        Not specifying a <code>cols*</code> prop will cause the Col to grow to
        fill up the remainder of the width.
      </Card.Content>
      <Card.Content>
        <Row>
          <Col>
            <Rectangle>&lt;Col&gt;</Rectangle>
          </Col>
          <Col cols={6}>
            <Rectangle>&lt;Col cols=&#123;6&#125;&gt;</Rectangle>
          </Col>
          <Col>
            <Rectangle>&lt;Col&gt;</Rectangle>
          </Col>
        </Row>
        <Row>
          <Col>
            <Rectangle>&lt;Col&gt;</Rectangle>
          </Col>
          <Col cols={4}>
            <Rectangle>&lt;Col cols=&#123;3&#125;&gt;</Rectangle>
          </Col>
          <Col>
            <Rectangle>&lt;Col&gt;</Rectangle>
          </Col>
        </Row>
      </Card.Content>
    </Card>
  </>
);

export const ColOffset = () => (
  <>
    <Card>
      <Card.Title>Col Offset</Card.Title>
      <Card.Content>
        <Row>
          <Col cols={6} offset={3}>
            <Rectangle>
              &lt;Col cols=&#123;6&#125; offset=&#123;3&#125;&gt;
            </Rectangle>
          </Col>
        </Row>
      </Card.Content>
    </Card>
  </>
);

export const ResponsiveCol = () => (
  <>
    <Card>
      <Card.Title>Responsive Col</Card.Title>
      <Card.Content>
        <Row>
          {[1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12].map((b) => (
            <Col key={b} cols={1} colsSm={12} colsMd={6} colsLg={3}>
              <Rectangle />
            </Col>
          ))}
        </Row>
      </Card.Content>
    </Card>
  </>
);

export const ColAlignment = () => (
  <>
    <Card>
      <Card.Title>Col Alignment</Card.Title>
      <Card.Content>
        <Row>
          <Col cols={6}>
            <LoremText />
          </Col>
          <Col cols={6} vAlign="center" hAlign="center">
            Hello
          </Col>
        </Row>
      </Card.Content>
    </Card>
  </>
);
