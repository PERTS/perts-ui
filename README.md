<h1 align="center">perts-ui</h1>

<div align="center">
...
</div>

## Installation

From within project directory where you'd like to use `perts-ui`:

```
npm install --save https://github.com/PERTS/perts-ui.git styled-components
```

## Development: Using Storybook

```
npm run storybook
```

Enjoy that hot reloading sweetness http://localhost:6006

## Development: In App

Sometimes, you may want to develop/test changes you're making from directly within the app you're importing `perts-ui` into. To do this, you can utilize [`npm link`](https://docs.npmjs.com/cli/link).

After cloning this repo:

```
cd perts-ui
npm install
npm run build
npm link
npm link perts-ui
```

From within project directory where you'd like to use `perts-ui`:

```
npm link perts-ui
```

Create a `typings.d.ts` in the root of the project directory where you're using `perts-ui`:

```
declare module 'perts-ui';
```

:hand: If you make changes to `perts-ui`, you'll need to `npm run build` for those
changes to take affect in the project you are importing into.

:hand: Don't forget to run `npm unlink` when done so you don't run into conflicts.


## Usage

```jsx
import React from 'react';
import ReactDOM from 'react-dom';
import { Button } from 'perts-ui';

const App = () => (
  <Button onClick={() => alert('Thank you!')}>Click Me!</Button>
);

ReactDOM.render(<App />, document.querySelector('#app'));
```

## Storybook Deployer

[Storybook Deployer](https://github.com/storybookjs/storybook-deployer) allows
you to deploy your Storybook to a static hosting service.

### Automatic Deployment

Codeship has been set up to automatically deploy Storybook on successful builds
of the `master` branch.

### Manual Deployment

You can manually deploy Storybook by running:

```
npm run storybook:deploy
```

Which will make the Storybook available at https://perts.github.io/perts-ui

## Documentation

View the [Storybook documentation](https://perts.github.io/perts-ui).
