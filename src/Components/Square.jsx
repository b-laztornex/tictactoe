import React from 'react';
import PropTypes from 'prop-types';
import { Button } from 'react-bootstrap';

export function Square({ value, onClick }) {
  return (
    <Button size="lg" variant="outline-dark" onClick={onClick}>
      {value}
    </Button>
  );
}

Square.propTypes = {
  value: PropTypes.string,
  onClick: PropTypes.func,
};

Square.defaultProps = {
  value: null,
  onClick: null,
};

export default Square;
