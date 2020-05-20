// InputFieldError Component
// Common form field error styles/functionality.
// Note: This is intended for reuse by other perts-ui components.

import styled from 'styled-components';
import theme from '../theme';

const InputFieldError = styled.div`
  margin-top: ${theme.units.fieldPaddingInternal};
  padding: ${theme.units.fieldPadding};

  border-radius: ${theme.units.borderRadius};

  background: ${theme.colors.warning};
  color: ${theme.colors.white};

  text-align: center;
`;

InputFieldError.displayName = 'InputFieldError';

export default InputFieldError;
