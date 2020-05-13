// InputFieldLabel Component
// Common form field label styles/functionality.
// Note: This is intended for reuse by other perts-ui components.

import styled from 'styled-components';
import theme from '../theme';

const InputFieldLabel = styled.label`
  display: inline-block;
  width: 100%;

  margin-bottom: ${theme.units.fieldPaddingInternal};

  font-weight: 700;
  font-size: 0.9rem;

  /* Set line height to elements font-size resuling height. */
  line-height: 1em;
`;

InputFieldLabel.displayName = 'InputFieldLabel';

export default InputFieldLabel;
