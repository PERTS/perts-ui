import React, { useState } from 'react';
// https://github.com/storybookjs/storybook/tree/master/addons/a11y
import { withA11y } from '@storybook/addon-a11y';
// https://github.com/storybookjs/storybook/tree/master/addons/knobs
import { withKnobs } from '@storybook/addon-knobs';

import { Button, Card, TextField } from '../..';

export default {
  title: 'Example Usage',
  decorators: [withKnobs, withA11y],
};

export const LoginScreen = () => {
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');
  const [loggingIn, setLoggingIn] = useState(false);

  const simulateLoggingIn = () => {
    setLoggingIn(true);
    setTimeout(() => setLoggingIn(false), 2000);
  };

  return (
    <div>
      <Card>
        <Card.Title>Login</Card.Title>
        <Card.Content>
          <TextField
            name="username"
            id="username"
            label="Username"
            value={username}
            placeholder="Enter your username"
            onChange={(e) => setUsername(e.target.value)}
            disabled={loggingIn}
            error={!username && 'Enter a username'}
            required
          />
          <TextField
            name="password"
            id="password"
            label="Password"
            value={password}
            placeholder="Enter your password"
            type="password"
            onChange={(e) => setPassword(e.target.value)}
            disabled={loggingIn}
            error={!password && 'Enter a password'}
            required
          />
        </Card.Content>
      </Card>

      <Button
        disabled={!username || !password}
        loading={loggingIn}
        onClick={simulateLoggingIn}
      >
        Login
      </Button>
    </div>
  );
};
