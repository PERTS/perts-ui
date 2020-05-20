// InputField Component
// Common form field styles/functionality.
// Note: This is intended for reuse by other perts-ui components.

import styled from 'styled-components';
import theme from '../theme';

const InputField = styled.div`
  margin-bottom: ${theme.units.fieldPadding};
`;

InputField.displayName = 'InputField';

export default InputField;
