import React from 'react';
import PropTypes from 'prop-types';
import classNames from 'classnames';
import styled from 'styled-components';
import theme from '../theme';
import { Checkbox } from '../..';

const CheckboxWithLabel = ({
  className,
  checked,
  label,
  name,
  onChange,
  value,
  ...props
}) => {
  const cx = classNames(className);

  return (
    <CheckboxLabel className={cx} checked={checked}>
      <Checkbox
        checked={checked}
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

  // Field label.
  label: PropTypes.any,

  // Field name.
  name: PropTypes.string,

  // onChange handler.
  onChange: PropTypes.func,

  // Field value.
  value: PropTypes.string,
};

export default CheckboxWithLabel;

const CheckboxLabel = styled.label`
  display: flex;
  flex-direction: row;
  align-items: center;

  margin-bottom: ${theme.units.fieldPadding};
  padding: ${theme.units.fieldPadding};

  cursor: pointer;

  border: 1px solid
    ${(props) =>
      props.checked ? theme.colors.primary : theme.colors.grayMedium};
  border-radius: ${theme.units.borderRadius};

  background: ${(props) =>
    props.checked ? theme.colors.primary : theme.colors.white};

  color: ${(props) => (props.checked ? theme.colors.white : theme.colors.text)};
`;

const CheckboxLabelText = styled.div`
  margin-left: ${theme.units.fieldPadding};
  font-size: ${theme.units.fontSizeBase};
`;
