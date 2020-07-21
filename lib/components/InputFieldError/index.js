// InputFieldError Component
// Common form field error styles/functionality.
// Note: This is intended for reuse by other perts-ui components.

import styled from 'styled-components';
import theme from '../theme';

const InputFieldError = styled.div`
  margin-top: ${(props) => props.theme.units.fieldPaddingInternal};
  padding: ${(props) => props.theme.units.fieldPadding};

  border-radius: ${(props) => props.theme.units.borderRadius};

  background: ${(props) => props.theme.colors.warning};
  color: ${(props) => props.theme.colors.white};

  text-align: center;
`;

InputFieldError.defaultProps = {
  theme,
};

InputFieldError.displayName = 'InputFieldError';

export default InputFieldError;
