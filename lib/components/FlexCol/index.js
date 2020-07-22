import styled, { css } from 'styled-components';
import PropTypes from 'prop-types';
import theme from '../theme';
import Flex from '../Flex';
import FlexItem from '../FlexItem';

const FlexCol = styled(Flex)`
  flex-direction: column;

  ${(props) =>
    props.alignItems &&
    css`
      align-items: ${props.alignItems};
    `};

  ${(props) =>
    props.justifyContent &&
    css`
      justify-content: ${props.justifyContent};
    `};

  ${FlexItem}:not(:first-child) {
    margin-top: ${(props) =>
      props.spacing !== undefined
        ? `${props.spacing}px`
        : props.theme.units.fieldPadding};
  }

  ${FlexItem}:empty {
    margin-top: 0;
  }
`;

FlexCol.propTypes = {
  alignItems: PropTypes.string,
  justifyContent: PropTypes.string,
  spacing: PropTypes.number,
};

FlexCol.defaultProps = {
  theme,
};

export default FlexCol;
