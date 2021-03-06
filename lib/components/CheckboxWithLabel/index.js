import React from 'react';
import PropTypes from 'prop-types';
import classNames from 'classnames';
import styled, { css } from 'styled-components';
import theme from '../theme';
import { Checkbox } from '../..';

const CheckboxWithLabel = ({
  className,
  checked,
  disabled,
  label,
  name,
  onChange,
  value,
  ...props
}) => {
  const cx = classNames(className);

  return (
    <CheckboxLabel className={cx} checked={checked} disabled={disabled}>
      <Checkbox
        checked={checked}
        disabled={disabled}
        name={name}
        onChange={onChange}
        value={value}
        {...props}
      />
      <CheckboxLabelText>{label}</CheckboxLabelText>
    </CheckboxLabel>
  );
};

CheckboxWithLabel.propTypes = {
  // To allow styled-components wrapping.
  className: PropTypes.string,

  // Whether the checkbox is checked or not.
  checked: PropTypes.bool,

  // Whether the checkbox is disabled.
  disabled: PropTypes.bool,

  // Field label.
  label: PropTypes.any,

  // Field name.
  name: PropTypes.string,

  // onChange handler.
  onChange: PropTypes.func,

  // Field value.
  value: PropTypes.oneOfType([
    PropTypes.bool,
    PropTypes.number,
    PropTypes.string,
  ]),
};

const CheckboxLabel = styled.label`
  display: flex;
  flex-direction: row;
  align-items: center;

  margin-bottom: ${(props) => props.theme.units.fieldPadding};
  padding: ${(props) => props.theme.units.fieldPadding};

  cursor: ${(props) => (props.disabled ? 'not-allowed' : 'pointer')};

  border: 1px solid
    ${(props) =>
      props.checked
        ? props.theme.colors.primary
        : props.theme.colors.grayMedium};
  border-radius: ${(props) => props.theme.units.borderRadius};

  ${(props) =>
    props.disabled &&
    css`
      border: 1px dashed ${props.theme.colors.grayMedium};
    `};

  background: ${(props) =>
    props.checked ? props.theme.colors.primary : props.theme.colors.white};

  color: ${(props) =>
    props.checked ? props.theme.colors.white : props.theme.colors.text};
`;

CheckboxLabel.defaultProps = {
  theme,
};

const CheckboxLabelText = styled.div`
  margin-left: ${theme.units.fieldPadding};
  font-size: ${theme.units.fontSizeBase};
`;

CheckboxLabelText.defaultProps = {
  theme,
};

CheckboxLabel.displayName = 'CheckboxLabel';
CheckboxLabelText.displayName = 'CheckboxLabelText';

export default CheckboxWithLabel;
