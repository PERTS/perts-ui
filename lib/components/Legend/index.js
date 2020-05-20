import React from 'react';
import PropTypes from 'prop-types';
import classNames from 'classnames';
import styled from 'styled-components';
import theme from '../theme';

const Legend = ({ className, children }) => {
  const cx = classNames(className);

  return <LegendStyled className={cx}>{children}</LegendStyled>;
};

Legend.propTypes = {
  // To allow styled-components wrapping.
  className: PropTypes.string,

  // Legend content.
  children: PropTypes.any,
};

const LegendStyled = styled.legend`
  width: 100%;
  font-weight: 700;

  margin-bottom: ${theme.units.fieldPadding};
  padding: ${theme.units.fieldPadding};

  background: ${theme.colors.primaryLight};
  background: linear-gradient(
    0deg,
    ${theme.colors.white} 0%,
    ${theme.colors.white} 45%,
    ${theme.colors.primaryLight} 100%
  );
  color: ${theme.colors.text};

  border-radius: ${theme.units.borderRadius};
`;

export default Legend;
