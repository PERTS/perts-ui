import styled, { css } from 'styled-components';
import PropTypes from 'prop-types';
import theme from '../theme';
import Flex from '../Flex';
import FlexItem from '../FlexItem';

const FlexRow = styled(Flex)`
  flex-direction: row;

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
    margin-left: ${(props) =>
      props.spacing !== undefined
        ? `${props.spacing}px`
        : props.theme.units.fieldPadding};
  }

  ${FlexItem}:empty {
    margin-left: 0;
  }
`;

FlexRow.propTypes = {
  alignItems: PropTypes.string,
  justifyContent: PropTypes.string,
  spacing: PropTypes.number,
};

FlexRow.defaultProps = {
  theme,
};

export default FlexRow;
