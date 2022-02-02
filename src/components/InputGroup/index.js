import PropTypes from 'prop-types';

import { Container } from './styles';

export function InputGroup({ children }) {
  return (
    <Container>
      {children}
    </Container>
  );
}

InputGroup.propTypes = {
  children: PropTypes.node.isRequired,
};
