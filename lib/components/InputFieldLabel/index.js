// InputFieldLabel Component
// Common form field label styles/functionality.
// Note: This is intended for reuse by other perts-ui components.

import styled from 'styled-components';
import theme from '../theme';

const InputFieldLabel = styled.label`
  display: inline-block;

  margin-bottom: ${(props) => props.theme.units.fieldPaddingInternal};

  font-weight: 700;
  /*
    Utilizing rem to scale off html font-size set in fonts.css.
    https://j.eremy.net/confused-about-rem-and-em/
    https://webdesign.tutsplus.com/tutorials/comprehensive-guide-when-to-use-em-vs-rem--cms-23984
  */
  font-size: 0.9rem;

  /* Set line height to elements font-size resuling height. */
  line-height: 1em;
`;

InputFieldLabel.defaultProps = {
  theme,
};

InputFieldLabel.displayName = 'InputFieldLabel';

export default InputFieldLabel;
