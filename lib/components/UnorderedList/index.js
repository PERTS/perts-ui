// HTML ul element

import React from 'react';
import PropTypes from 'prop-types';
import classNames from 'classnames';
import styled from 'styled-components';
import theme from '../theme';

// Note: In order to use bulleted lists with Font Awesome icons as a replacement
// for the default bullet, the entire Font Awesome css will be imported.
import 'font-awesome/css/font-awesome.min.css';

const ULStyled = styled.ul`
  line-height: ${theme.units.lineHeight};
`;

const UnorderedList = ({ className, ...props }) => {
  const cx = classNames('fa-ul', className);
  return <ULStyled className={cx} {...props} />;
};

UnorderedList.propTypes = {
  // To allow styled-components wrapping.
  className: PropTypes.string,
};

export default UnorderedList;
