import React from 'react';
import PropTypes from 'prop-types';
import classNames from 'classnames';

import ToggleStyled from './ToggleStyled';
import InputFieldError from '../InputFieldError';
import InputFieldLabel from '../InputFieldLabel';

const Toggle = ({
  checked,
  className,
  error,
  id,
  label,
  labelWidth,
  name,
  onChange,
}) => {
  const cx = classNames(className);

  return (
    <ToggleStyled className={cx} labelWidth={labelWidth}>
      <InputFieldLabel>
        <span className="text">{label}</span>
        <input
          type="checkbox"
          id={id}
          name={name}
          checked={checked}
          onChange={onChange}
        />
        <span className="control"></span>
      </InputFieldLabel>
      {error && <InputFieldError>{error}</InputFieldError>}
    </ToggleStyled>
  );
};

Toggle.propTypes = {
  // Whether the radio is checked.
  checked: PropTypes.bool.isRequired,

  // To allow styled-components wrapping.
  className: PropTypes.string,

  // Field error.
  error: PropTypes.any,

  // Field ID.
  id: PropTypes.string,

  // Field label.
  label: PropTypes.any.isRequired,

  // Width of the field label, in pixels. Default 110.
  labelWidth: PropTypes.number,

  // Field name.
  name: PropTypes.string.isRequired,

  // onChange handler.
  onChange: PropTypes.func.isRequired,
};

Toggle.defaultProps = {
  labelWidth: 110,
};

export default Toggle;
