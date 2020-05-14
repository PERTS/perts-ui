import React from 'react';
import PropTypes from 'prop-types';
import classNames from 'classnames';
import styled from 'styled-components';
import theme from '../theme';

const FieldSet = ({ className, children }) => {
  const cx = classNames(className);

  return <FieldSetStyled className={cx}>{children}</FieldSetStyled>;
};

FieldSet.propTypes = {
  // To allow styled-components wrapping.
  className: PropTypes.string,

  // FieldSet content.
  children: PropTypes.any,
};

const FieldSetStyled = styled.fieldset``;

export default FieldSet;
