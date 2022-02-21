import PropTypes from 'prop-types';

import { Spinner } from '../Spinner';

import { Container } from './styles';

export function InputGroup({ children, error, isLoading }) {
  return (
    <Container>
      <div className="form-item">
        {children}

        {isLoading && (
          <div className="loader">
            <Spinner size={16} />
          </div>
        )}
      </div>
      {error && <small>{error}</small>}
    </Container>
  );
}

InputGroup.propTypes = {
  children: PropTypes.node.isRequired,
  error: PropTypes.string,
  isLoading: PropTypes.bool,
};

InputGroup.defaultProps = {
  error: null,
  isLoading: false,
};
