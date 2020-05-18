import React, { useState } from 'react';
// https://github.com/storybookjs/storybook/tree/master/addons/a11y
import { withA11y } from '@storybook/addon-a11y';
// https://github.com/storybookjs/storybook/tree/master/addons/knobs
import { withKnobs } from '@storybook/addon-knobs';

import { TextField } from '../../.';

export default {
  title: 'TextField',
  component: TextField,
  decorators: [withKnobs, withA11y],
};

export const Default = () => {
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');

  return (
    <div>
      <TextField
        name="username"
        id="username"
        label="Username"
        value={username}
        placeholder="Enter your username"
        onChange={(e) => setUsername(e.target.value)}
      />
      <TextField
        name="password"
        id="password"
        label="Password"
        value={password}
        placeholder="Enter your password"
        type="password"
        onChange={(e) => setPassword(e.target.value)}
      />
    </div>
  );
};

export const Multiline = () => {
  const [value, setValue] = useState('');

  return (
    <div>
      <TextField
        name="username"
        id="username"
        label="Multiline Textarea"
        value={value}
        placeholder="Enter your username"
        onChange={(e) => setValue(e.target.value)}
        multiline
        rows="4"
      />
    </div>
  );
};

export const Error = () => {
  const [username, setUsername] = useState('');
  const error = !username && 'Please enter a username.';

  return (
    <div>
      <TextField
        name="username"
        id="username"
        label="Username"
        value={username}
        placeholder="Enter your username"
        onChange={(e) => setUsername(e.target.value)}
        required
        error={error}
      />
    </div>
  );
};

export const Disabled = () => {
  const [username, setUsername] = useState('Malcom.Reynolds');

  return (
    <div>
      <TextField
        name="disabledField"
        id="disabledField"
        label="Username (Disabled)"
        value={username}
        placeholder="Enter your username"
        onChange={(e) => setUsername(e.target.value)}
        disabled
      />
    </div>
  );
};

export const ReadOnly = () => {
  const [username, setUsername] = useState('Malcom.Reynolds');

  return (
    <div>
      <TextField
        name="disabledField"
        id="disabledField"
        label="Username (Read Only)"
        value={username}
        placeholder="Enter your username"
        onChange={(e) => setUsername(e.target.value)}
        readOnly
      />
    </div>
  );
};
