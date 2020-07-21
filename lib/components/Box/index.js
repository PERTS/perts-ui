import PropTypes from 'prop-types';
import styled, { css } from 'styled-components';
import theme from '../theme';

export const Box = styled.div`
  height: auto;

  min-width: 0;
  max-width: 100%;

  /* Not specifying cols* will cause the Box to take up remainder of width. */
  width: auto;
  flex: 10000 1 0%;

  ${(props) =>
    props.cols &&
    css`
      width: ${(props.cols / theme.units.gridColumns) * 100}%;
      flex: 0 0 auto;
    `};

  ${(props) =>
    props.colsLg &&
    css`
      @media only screen and (max-width: ${theme.units.gridBreakpointLarge}px) {
        width: ${(props.colsLg / theme.units.gridColumns) * 100}%;
        flex: 0 0 auto;
      }
    `};

  ${(props) =>
    props.colsMd &&
    css`
      @media only screen and (max-width: ${theme.units
          .gridBreakpointMedium}px) {
        width: ${(props.colsMd / theme.units.gridColumns) * 100}%;
        flex: 0 0 auto;
      }
    `};

  ${(props) =>
    props.colsSm &&
    css`
      @media only screen and (max-width: ${theme.units.gridBreakpointSmall}px) {
        width: ${(props.colsSm / theme.units.gridColumns) * 100}%;
        flex: 0 0 auto;
      }
    `};

  ${(props) =>
    props.offset &&
    css`
      margin-left: ${(props.offset / theme.units.gridColumns) * 100}%;
    `};

  ${(props) =>
    props.offsetLg &&
    css`
      @media only screen and (max-width: ${theme.units.gridBreakpointLarge}px) {
        margin-left: ${(props.offsetLg / theme.units.gridColumns) * 100}%;
      }
    `};

  ${(props) =>
    props.offsetMd &&
    css`
      @media only screen and (max-width: ${theme.units
          .gridBreakpointMedium}px) {
        margin-left: ${(props.offsetMd / theme.units.gridColumns) * 100}%;
      }
    `};

  ${(props) =>
    props.offsetSm &&
    css`
      @media only screen and (max-width: ${theme.units.gridBreakpointSmall}px) {
        margin-left: ${(props.offsetSm / theme.units.gridColumns) * 100}%;
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

Box.propTypes = {
  cols: PropTypes.number,
  colsSm: PropTypes.number,
  colsMd: PropTypes.number,
  colsLg: PropTypes.number,
  vAlign: PropTypes.string,
  hAlign: PropTypes.string,
};

export default Box;
