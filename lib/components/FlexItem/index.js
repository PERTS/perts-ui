// import React from 'react';
// const FlexItem = () => <div>FLEXITEM</div>;

import styled from 'styled-components';
import PropTypes from 'prop-types';

const FlexItem = styled.div`
  flex-grow: ${(props) => props.grow};

  margin-bottom: ${(props) => `${props.marginBottom}px`};
  margin-left: ${(props) => `${props.marginLeft}px`};
  margin-right: ${(props) => `${props.marginRight}px`};
  margin-top: ${(props) => `${props.marginTop}px`};

  padding-bottom: ${(props) => `${props.paddingBottom}px`};
  padding-left: ${(props) => `${props.paddingLeft}px`};
  padding-right: ${(props) => `${props.paddingRight}px`};
  padding-top: ${(props) => `${props.paddingTop}px`};
`;

FlexItem.propTypes = {
  grow: PropTypes.number,
  marginBottom: PropTypes.number,
  marginLeft: PropTypes.number,
  marginRight: PropTypes.number,
  marginTop: PropTypes.number,
  paddingBottom: PropTypes.number,
  paddingLeft: PropTypes.number,
  paddingRight: PropTypes.number,
  paddingTop: PropTypes.number,
};

FlexItem.defaultProps = {
  grow: 1,
  marginBottom: 0,
  marginLeft: 0,
  marginRight: 0,
  marginTop: 0,
  paddingBottom: 0,
  paddingLeft: 0,
  paddingRight: 0,
  paddingTop: 0,
};

export default FlexItem;
