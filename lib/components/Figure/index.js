import PropTypes from 'prop-types';
import styled, { css } from 'styled-components';
import theme from '../theme';

const Figure = styled.figure`
  text-align: center;

  figcaption {
    font-size: 0.8em;

    padding: 6px 6px 12px 6px;
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
  responsive: PropTypes.bool,
};

Figure.defaultProps = {
  responsive: true,
  theme,
};

export default Figure;
