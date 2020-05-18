import React from 'react';
import PropTypes from 'prop-types';
import classNames from 'classnames';
import styled, { css } from 'styled-components';
import theme from '../theme';

import InputField from '../InputField';
import InputFieldError from '../InputFieldError';
import InputFieldLabel from '../InputFieldLabel';

const TextField = ({
  className,
  disabled,
  id,
  error,
  label,
  multiline,
  required,
  ...props
}) => {
  const cx = classNames(className);

  return (
    <InputField className={cx}>
      {label && <InputFieldLabel htmlFor={id}>{label}</InputFieldLabel>}
      <TextFieldContainer>
        <TextFieldStyled
          disabled={disabled}
          error={error}
          id={id}
          label={label}
          as={multiline ? 'textarea' : 'input'}
          {...props}
        />
        {required && <TextFieldRequired />}
      </TextFieldContainer>
      {error && <InputFieldError>{error}</InputFieldError>}
    </InputField>
  );
};

TextField.propTypes = {
  // To allow styled-components wrapping.
  className: PropTypes.string,

  // Whether the radio is disabled.
  disabled: PropTypes.bool,

  // Field error.
  error: PropTypes.any,

  // Field ID.
  id: PropTypes.string.isRequired,

  // Field label.
  label: PropTypes.any.isRequired,

  // Whether the field is a text area (or input, default).
  multiline: PropTypes.bool,

  // Field name.
  name: PropTypes.string.isRequired,

  // onChange handler.
  onChange: PropTypes.func.isRequired,

  // Indicate the field is required. This component does not handle validation.
  required: PropTypes.bool,

  // Number of rows the multiline/textarea should be.
  rows: PropTypes.oneOfType([PropTypes.string, PropTypes.number]),

  // Field value.
  value: PropTypes.string.isRequired,
};

export default TextField;

const TextFieldStyled = styled.input`
  display: flex;
  flex-direction: row;

  width: 100%;
  padding: ${theme.units.fieldPadding};

  border: 1px solid ${theme.colors.grayMedium};
  border-radius: ${theme.units.borderRadius};

  ${(props) =>
    props.disabled &&
    css`
      background: ${theme.colors.fieldBackgroundDisabled};
      color: ${theme.colors.text};

      border: 1px dashed ${theme.colors.grayMedium};

      cursor: not-allowed;
    `};

  ${(props) =>
    props.readOnly &&
    css`
      color: ${theme.colors.textDisabled};
    `};

  ${(props) =>
    props.error &&
    css`
      border-color: ${theme.colors.warning};
    `};

  &:focus {
    outline: 0;
    box-shadow: 0 0 0 5px ${theme.colors.primaryLight};
  }
`;

const TextFieldContainer = styled.div`
  position: relative;
`;

const TextFieldRequired = styled.span`
  position: absolute;
  top: 6px;
  right: 6px;
  height: 8px;
  width: 8px;
  border-radius: 50%;
  background: ${theme.colors.warning};
  content: '';
`;
