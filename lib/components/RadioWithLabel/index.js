import React from 'react';
import PropTypes from 'prop-types';
import classNames from 'classnames';
import styled, { css } from 'styled-components';
import theme from '../theme';
import { Radio } from '../..';

const RadioWithLabel = ({
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
    <RadioLabel className={cx} checked={checked} disabled={disabled}>
      <Radio
        checked={checked}
        disabled={disabled}
        name={name}
        onChange={onChange}
        value={value}
        {...props}
      />
      <RadioLabelText>{label}</RadioLabelText>
    </RadioLabel>
  );
};

RadioWithLabel.propTypes = {
  // To allow styled-components wrapping.
  className: PropTypes.string,

  // Whether the radio is checked or not.
  checked: PropTypes.bool,

  // Whether the radio is disabled.
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

const RadioLabel = styled.label`
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

RadioLabel.defaultProps = {
  theme,
};

const RadioLabelText = styled.div`
  margin-left: ${(props) => props.theme.units.fieldPadding};
  font-size: ${(props) => props.theme.units.fontSizeBase};
`;

RadioLabelText.defaultProps = {
  theme,
};

RadioLabel.displayName = 'RadioLabel';
RadioLabelText.displayName = 'RadioLabelText';

export default RadioWithLabel;
