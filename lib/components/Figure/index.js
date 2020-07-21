import PropTypes from 'prop-types';
import styled, { css } from 'styled-components';
import theme from '../theme';

const Figure = styled.figure`
  text-align: center;
  border: 1px solid ${theme.colors.primary};
  background: ${theme.colors.white};
  padding: 6px;

  figcaption {
    font-size: 0.8em;
  }

  ${(props) =>
    props.responsive &&
    css`
      width: 100%;

      img {
        width: 100%;
        max-width: 100%;
      }
    `};
`;

Figure.propTypes = {
  responsive: PropTypes.boolean,
};

Figure.defaultProps = {
  responsive: true,
};

export default Figure;