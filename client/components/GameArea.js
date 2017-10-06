import React, {Component} from 'react';
import {connect} from 'react-redux';
import {GameField, PlayerArea, Stack} from '../components';
import { DragDropContext } from 'react-dnd'
import HTML5Backend from 'react-dnd-html5-backend'

class  GameArea extends Component {

  render() {
    return (
      <div style={styles.gameArea}>
        <h1>Game Area</h1>
        <GameField />
        <PlayerArea playerNum={1} />
      </div>
    )
  }
}

const styles = {
  gameArea: {
    alignContent: 'center',
    alignItems: 'center',
    backgroundColor: '#ccc',
    display: 'flex',
    flexDirection: 'column',
    height: '100vh',
    justifyContent: 'space-evenly',
    margin: '0 auto',
    width: '90%',
  }
}

export default DragDropContext(HTML5Backend)(GameArea)