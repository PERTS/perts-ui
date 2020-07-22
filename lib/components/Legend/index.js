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

  margin-bottom: ${(props) => props.theme.units.fieldPadding};
  padding: ${(props) => props.theme.units.fieldPadding};

  background: ${(props) => props.theme.colors.primaryLight};
  background: linear-gradient(
    0deg,
    ${(props) => props.theme.colors.white} 0%,
    ${(props) => props.theme.colors.white} 45%,
    ${(props) => props.theme.colors.primaryLight} 100%
  );
  color: ${(props) => props.theme.colors.text};

  border-radius: ${(props) => props.theme.units.borderRadius};
`;

LegendStyled.defaultProps = {
  theme,
};

export default Legend;
