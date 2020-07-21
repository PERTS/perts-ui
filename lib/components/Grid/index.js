import styled, { css } from 'styled-components';
import theme from '../theme';

export const Grid = styled.div`
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

  margin-top: -${theme.units.gridDefaultGutter}px;
  margin-left: -${theme.units.gridDefaultGutter}px;

  :not(:last-child) {
    margin-bottom: ${theme.units.gridDefaultGutter}px;
  }

  ${(props) =>
    props.sm &&
    css`
      margin-top: -${theme.units.gridDefaultGutter / 2}px;
      margin-left: -${theme.units.gridDefaultGutter / 2}px;
    `}

  ${(props) =>
    props.lg &&
    css`
      margin-top: -${theme.units.gridDefaultGutter * 2}px;
      margin-left: -${theme.units.gridDefaultGutter * 2}px;
    `}

  > * {
    padding-top: ${theme.units.gridDefaultGutter}px;
    padding-left: ${theme.units.gridDefaultGutter}px;

    ${(props) =>
      props.sm &&
      css`
        padding-top: ${theme.units.gridDefaultGutter / 2}px;
        padding-left: ${theme.units.gridDefaultGutter / 2}px;
      `}

    ${(props) =>
      props.lg &&
      css`
        padding-top: ${theme.units.gridDefaultGutter * 2}px;
        padding-left: ${theme.units.gridDefaultGutter * 2}px;
      `}
  }

  opacity: 0.8;
`;

export default Grid;
