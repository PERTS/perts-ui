import React from 'react';
import PropTypes from 'prop-types';
import classNames from 'classnames';
import styled from 'styled-components';

const FieldSet = ({ className, children, ...rest }) => {
  const cx = classNames(className);

  return (
    <FieldSetStyled className={cx} {...rest}>
      {children}
    </FieldSetStyled>
  );
};

FieldSet.propTypes = {
  // To allow styled-components wrapping.
  className: PropTypes.string,

  // FieldSet content.
  children: PropTypes.any,
};

const FieldSetStyled = styled.fieldset`
  border: 0;
  padding: 0;
`;

export default FieldSet;
