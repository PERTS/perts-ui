import PropTypes from 'prop-types';
import styled, { css } from 'styled-components';
import theme from '../theme';

// Styles heavily influecned by Quasar's Grid Row:
// https://quasar.dev/layout/grid/row

export const Col = styled.div`
  height: auto;

  min-width: 0;
  max-width: 100%;

  /* Not specifying cols* will cause the Col to take up remainder of width. */
  width: auto;
  flex: 10000 1 0%;

  ${(props) =>
    props.cols &&
    css`
      width: ${(props.cols / props.theme.units.gridColumns) * 100}%;
      flex: 0 0 auto;
    `};

  ${(props) =>
    props.colsLg &&
    css`
      @media only screen and (max-width: ${props.theme.units
          .gridBreakpointLarge}px) {
        width: ${(props.colsLg / props.theme.units.gridColumns) * 100}%;
        flex: 0 0 auto;
      }
    `};

  ${(props) =>
    props.colsMd &&
    css`
      @media only screen and (max-width: ${props.theme.units
          .gridBreakpointMedium}px) {
        width: ${(props.colsMd / props.theme.units.gridColumns) * 100}%;
        flex: 0 0 auto;
      }
    `};

  ${(props) =>
    props.colsSm &&
    css`
      @media only screen and (max-width: ${props.theme.units
          .gridBreakpointSmall}px) {
        width: ${(props.colsSm / props.theme.units.gridColumns) * 100}%;
        flex: 0 0 auto;
      }
    `};

  ${(props) =>
    props.offset &&
    css`
      margin-left: ${(props.offset / props.theme.units.gridColumns) * 100}%;
    `};

  ${(props) =>
    props.offsetLg &&
    css`
      @media only screen and (max-width: ${props.theme.units
          .gridBreakpointLarge}px) {
        margin-left: ${(props.offsetLg / props.theme.units.gridColumns) * 100}%;
      }
    `};

  ${(props) =>
    props.offsetMd &&
    css`
      @media only screen and (max-width: ${props.theme.units
          .gridBreakpointMedium}px) {
        margin-left: ${(props.offsetMd / props.theme.units.gridColumns) * 100}%;
      }
    `};

  ${(props) =>
    props.offsetSm &&
    css`
      @media only screen and (max-width: ${props.theme.units
          .gridBreakpointSmall}px) {
        margin-left: ${(props.offsetSm / props.theme.units.gridColumns) * 100}%;
      }
    `};

  ${(props) =>
    (props.vAlign || props.hAlign) &&
    css`
      display: flex;
    `};

  ${(props) =>
    props.vAlign &&
    css`
      align-items: ${props.vAlign};
    `};

  ${(props) =>
    props.hAlign &&
    css`
      justify-content: ${props.vAlign};
    `};
`;

Col.propTypes = {
  // Number of columns
  cols: PropTypes.number,
  // Number of columns, at small browser breakpoint
  colsSm: PropTypes.number,
  // Number of columns, at medium browser breakpoint
  colsMd: PropTypes.number,
  // Number of columns, at large browser breakpoint
  colsLg: PropTypes.number,

  // Offset
  offset: PropTypes.number,
  // Offset, at small browser breakpoint
  offsetSm: PropTypes.number,
  // Offset, at medium browser breakpoint
  offsetMd: PropTypes.number,
  // Offset, at large browser breakpoint
  offsetLg: PropTypes.number,

  // Vertical alignment of Col content
  vAlign: PropTypes.string,
  // Horizontal alignment of Col content
  hAlign: PropTypes.string,
};

Col.defaultProps = {
  theme,
};

export default Col;
