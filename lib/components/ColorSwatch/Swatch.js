import styled from 'styled-components';

const Swatch = styled.div`
  color: ${(props) => props.color};
  background: ${(props) => props.bgColor};

  padding: 20px;
  font-family: monospace;
`;

export default Swatch;
