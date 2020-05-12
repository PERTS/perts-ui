import React from 'react';
import PropTypes from 'prop-types';
import classNames from 'classnames';
import styled from 'styled-components';
import theme from '../theme';

const Checkbox = ({ className, checked, disabled, ...props }) => {
  const cx = classNames(className);

  return (
    <CheckboxContainer className={cx} disabled={disabled}>
      <HiddenCheckbox checked={checked} disabled={disabled} {...props} />
      <StyledCheckbox checked={checked}>
        <Icon viewBox="0 0 24 24">
          <polyline points="20 6 9 17 4 12" />
        </Icon>
      </StyledCheckbox>
    </CheckboxContainer>
  );
};

Checkbox.propTypes = {
  // To allow styled-components wrapping.
  className: PropTypes.string,

  // Whether the checkbox is checked.
  checked: PropTypes.bool,

  // Whether the checkbox is disabled.
  disabled: PropTypes.bool,
};

export default Checkbox;

const CheckboxContainer = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;

  cursor: ${(props) => (props.disabled ? 'not-allowed' : 'pointer')};
`;

const Icon = styled.svg`
  fill: none;
  stroke: ${theme.colors.primary};
  stroke-width: 3px;
`;

const HiddenCheckbox = styled.input.attrs({ type: 'checkbox' })`
  /*
    Hide the browser default input UI. Don't use 'display: hidden' or
    'visibility: hidden' because then the input fields will be removed from the
    flow of the page and ignored by screen readers.
  */
  opacity: 0;

  /*
    Absolute so the hidden radio fields doesn't displace other elements.
  */
  position: absolute;

  cursor: ${(props) => (props.disabled ? 'not-allowed' : 'pointer')};
`;

const StyledCheckbox = styled.div`
  width: ${theme.units.checkboxSize};
  height: ${theme.units.checkboxSize};

  background: ${(props) =>
    props.checked ? theme.colors.white : 'transparent'};

  border: 2px solid
    ${(props) => (props.checked ? theme.colors.white : theme.colors.grayDark)};
  border-radius: ${theme.units.borderRadius};

  transition: all 150ms;

  ${HiddenCheckbox}:focus + & {
    box-shadow: 0 0 0 5px ${theme.colors.primaryLight};
  }

  ${Icon} {
    visibility: ${(props) => (props.checked ? 'visible' : 'hidden')};
  }
`;
