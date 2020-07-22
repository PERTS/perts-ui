// HTML ul element

import React from 'react';
import PropTypes from 'prop-types';
import classNames from 'classnames';
import styled from 'styled-components';
import theme from '../theme';

const UnorderedList = ({ className, ...props }) => {
  const cx = classNames(className);
  return <ULStyled className={cx} {...props} />;
};

UnorderedList.propTypes = {
  // To allow styled-components wrapping.
  className: PropTypes.string,
};

export default UnorderedList;

const ULStyled = styled.ul`
  padding-left: 0;
  margin-left: 2.1em;
  list-style-type: none;
  line-height: ${(props) => props.theme.units.lineHeight};
`;

ULStyled.defaultProps = {
  theme,
};
