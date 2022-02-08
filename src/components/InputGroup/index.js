import PropTypes from 'prop-types';

import { Container } from './styles';

export function InputGroup({ children, error }) {
  return (
    <Container>
      {children}
      {error && <small>{error}</small>}
    </Container>
  );
}

InputGroup.propTypes = {
  children: PropTypes.node.isRequired,
  error: PropTypes.string,
};

InputGroup.defaultProps = {
  error: null,
};
