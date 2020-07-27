import PropTypes from 'prop-types';
import styled, { css } from 'styled-components/macro';
import theme from '../theme';

// Styles heavily influecned by Quasar's Grid Row:
// https://quasar.dev/layout/grid/row

export const Row = styled.div`
  display: flex;
  flex-direction: row;
  flex-wrap: wrap;

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

  margin-top: -${(props) => props.theme.units.gridDefaultGutter}px;
  margin-left: -${(props) => props.theme.units.gridDefaultGutter}px;

  :not(:last-child) {
    margin-bottom: ${(props) => props.theme.units.gridDefaultGutter}px;
  }

  ${(props) =>
    props.sm &&
    css`
      margin-top: -${props.theme.units.gridDefaultGutter / 2}px;
      margin-left: -${props.theme.units.gridDefaultGutter / 2}px;
    `}

  ${(props) =>
    props.lg &&
    css`
      margin-top: -${props.theme.units.gridDefaultGutter * 2}px;
      margin-left: -${props.theme.units.gridDefaultGutter * 2}px;
    `}

  > * {
    padding-top: ${(props) => props.theme.units.gridDefaultGutter}px;
    padding-left: ${(props) => props.theme.units.gridDefaultGutter}px;

    ${(props) =>
      props.sm &&
      css`
        padding-top: ${props.theme.units.gridDefaultGutter / 2}px;
        padding-left: ${props.theme.units.gridDefaultGutter / 2}px;
      `}

    ${(props) =>
      props.lg &&
      css`
        padding-top: ${props.theme.units.gridDefaultGutter * 2}px;
        padding-left: ${props.theme.units.gridDefaultGutter * 2}px;
      `}
  }
`;

Row.propTypes = {
  // Padding options
  sm: PropTypes.bool,
  md: PropTypes.bool, // default
  lg: PropTypes.bool,

  // Pass through align-items style
  alignItems: PropTypes.string,

  // Pass through justify-content style
  justifyContent: PropTypes.string,
};

Row.defaultProps = {
  theme,
};

export default Row;
