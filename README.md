<h1 align="center">perts-ui</h1>

<div align="center">
...
</div>

## Installation

## Development Setup

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

*If you make changes to `perts-ui`, you'll need to `npm run build` for those
changes to take affect in the project you are importing into.


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

## Documentation

View the Storybook documentation here.
