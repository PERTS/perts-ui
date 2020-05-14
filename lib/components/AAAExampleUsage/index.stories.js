import React, { useState } from 'react';
// https://github.com/storybookjs/storybook/tree/master/addons/a11y
import { withA11y } from '@storybook/addon-a11y';
// https://github.com/storybookjs/storybook/tree/master/addons/knobs
import { withKnobs } from '@storybook/addon-knobs';

import { Button, Card, CheckboxWithLabel, TextField } from '../..';
import { FaChevronCircleRight } from 'react-icons/fa';

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

export const Form = () => {
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [formValues, setValues] = useState({
    year2: false,
    year4: false,
    none: false,
    other: false,
    otherText: '',
  });

  const simulateSubmit = () => {
    setIsSubmitting(true);
    setTimeout(() => setIsSubmitting(false), 1000);
    setTimeout(
      () =>
        window.alert(
          `Submitting Form Values: ${JSON.stringify(formValues, null, 2)}`,
        ),
      10,
    );
  };

  const toggleValue = (key) =>
    setValues({ ...formValues, [key]: !formValues[key] });

  const setOtherText = (e) =>
    setValues({ ...formValues, otherText: e.target.value });

  return (
    <div>
      <Card>
        <Card.Title>
          Since graduating from high school, which of the following types of
          colleges or universities have you attended other than the school(s)
          you attend currently? (Select all that apply)
        </Card.Title>
        <Card.Content>
          <CheckboxWithLabel
            name="year2"
            label="Community or Junior College"
            checked={formValues.year2}
            disabled={isSubmitting}
            onChange={() => toggleValue('year2')}
          />
          <CheckboxWithLabel
            name="year4"
            label="4-year college or university other than this one"
            checked={formValues.year4}
            disabled={isSubmitting}
            onChange={() => toggleValue('year4')}
          />
          <CheckboxWithLabel
            name="none"
            label="None"
            checked={formValues.none}
            disabled={isSubmitting}
            onChange={() => toggleValue('none')}
          />
          <CheckboxWithLabel
            name="other"
            label="Other"
            checked={formValues.other}
            disabled={isSubmitting}
            onChange={() => toggleValue('other')}
          />
          <TextField
            id="otherText"
            name="otherText"
            label="If Other, Please Specify"
            value={formValues.otherText}
            disabled={!formValues.other}
            onChange={setOtherText}
          />
        </Card.Content>
      </Card>
      <Button
        icon={<FaChevronCircleRight />}
        loading={isSubmitting}
        onClick={simulateSubmit}
      >
        Next Page
      </Button>
    </div>
  );
};
