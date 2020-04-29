import React from 'react';

import { StylesAlignVertically } from './';
import HelloWorld from '../HelloWorld';

export default {
  title: 'GlobalStyles',
};

// Unfortunately, I am unable to get components using styled-component's
// createGlobalStyle to work when importing into another project. The following
// error is reported. I'm leaving this code for now so that we can come back to
// it later, because it'd be a nice component to have.
//
// Uncaught Error: Invalid hook call. Hooks can only be called inside of the
// body of a function component. This could happen for one of the following
// reasons:
// 1. You might have mismatching versions of React and the renderer (such as
// React DOM)
// 2. You might be breaking the Rules of Hooks
// 3. You might have more than one copy of React in the same app
// See https://fb.me/react-invalid-hook-call for tips about how to debug and fix
// this problem.

export const AlignVertically = () => (
  <>
    <StylesAlignVertically />
    <HelloWorld />
  </>
);
