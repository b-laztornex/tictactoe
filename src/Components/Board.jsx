import React from 'react';
import PropTypes from 'prop-types';
import {
  Container, Row, Col,
} from 'react-bootstrap';
import { Square } from './Square';


export class Board extends React.Component {
  constructor(props) {
    super(props);
    this.state = {};
  }

  renderSquare(i) {
    const { onClick, board } = this.props;
    return <Square value={board[i]} onClick={() => onClick(i)} />;
  }

  render() {
    return (
      <Container>
        <Row className="mb-3">
          <Col xs={4}>
            {this.renderSquare(0)}
          </Col>
          <Col xs={4}>
            {this.renderSquare(1)}
          </Col>
          <Col xs={4}>
            {this.renderSquare(2)}
          </Col>
        </Row>
        <Row className="mb-3">
          <Col xs={4}>
            {this.renderSquare(3)}
          </Col>
          <Col xs={4}>
            {this.renderSquare(4)}
          </Col>
          <Col xs={4}>
            {this.renderSquare(5)}
          </Col>
        </Row>
        <Row className="mb-3">
          <Col xs={4}>
            {this.renderSquare(6)}
          </Col>
          <Col xs={4}>
            {this.renderSquare(7)}
          </Col>
          <Col xs={4}>
            {this.renderSquare(8)}
          </Col>
        </Row>
      </Container>
    );
  }
}

Board.propTypes = {
  board: PropTypes.arrayOf(PropTypes.oneOfType([PropTypes.number])),
  onClick: PropTypes.func,
};

Board.defaultProps = {
  board: null,
  onClick: null,
};


export default Board;
