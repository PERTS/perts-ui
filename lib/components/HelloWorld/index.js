import React from 'react';
import PropTypes from 'prop-types';

const HelloWorld = ({ name }) => <div>Hello {name}!z1</div>;

HelloWorld.propTypes = {
  name: PropTypes.string,
};

HelloWorld.defaultProps = {
  name: 'World',
};

export default HelloWorld;
