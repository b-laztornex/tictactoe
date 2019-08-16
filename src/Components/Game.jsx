import React from 'react';
import {
  Container, Row, Col, ButtonToolbar, ButtonGroup, Button, Image,
} from 'react-bootstrap';
import ninja from '../avatar/ninja.png';
import doctor from '../avatar/doctor.png';
import { Board } from './Board';

export class Game extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      player: true,
      board: Array(9).fill(null),
      history: [],
    };
  }

  handleHistory(item) {
    this.setState({ board: item });
  }

  handleClick(i) {
    const { board, player, history } = this.state;
    const copyBoard = [...board];
    const copyHistory = [...history];
    if (!copyBoard[i]) {
      copyBoard[i] = player ? 'X' : '0';
      copyHistory.push(copyBoard);
      this.setState({ player: !player, board: copyBoard, history: copyHistory });
    }
  }

  render() {
    const { history, board, player } = this.state;
    return (
      <Container>
        <Row>
          <Col xs={6} md={4}>
            {player ? <Image src={ninja} roundedCircle /> : <Image src={doctor} roundedCircle /> }
          </Col>
        </Row>
        <Row>
          <Col xs={12} className="button-toolbar-bg">
            <ButtonToolbar aria-label="History track">
              <ButtonGroup aria-label="First group">
                {history.map((item, index) => <Button size="lg" variant="outline-dark" onClick={() => this.handleHistory(item)}>{index}</Button>)}
              </ButtonGroup>
            </ButtonToolbar>
          </Col>
        </Row>
        <Row>
          <Board board={board} onClick={(i) => this.handleClick(i)} />
        </Row>
      </Container>
    );
  }
}

export default Game;
