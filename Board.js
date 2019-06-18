import React, { Component } from 'react'
import Square from './Square'
import Gold from './gold.png'
import Tree from './tree.png'
import Bomb from './bomb.jpg'

class Board extends Component {
  constructor(props) {
    super(props)
      this.state = {
        spaces: ['?', '?', '?', '?', '?', '?', '?', '?', '?'],
        gold: Gold,
        tree: Tree,
        bomb: Bomb,
        message: 'if you dare',
        lose: 'You Lose ... WALK THE PLANK!',
        win: 'You Win ... MY TREASURE IS YOURS!',
        dig: 'Keep Digging LANDLUBBER!',
        bombIndex: Math.floor(Math.random() * 9),
        treasureIndex: Math.floor(Math.random() * 9)
      }
  }

  squareButton = (index) => {
    let {spaces, bombIndex, treasureIndex, message} = this.state

    if(index === bombIndex) {
    spaces[index] = <img src= { this.state.bomb } />

    } else if (index === treasureIndex) {
    spaces[index] = <img src= { this.state.gold } />

    } else {
    spaces[index] = <img src= { this.state.tree } />

    } this.setState({spaces})
  }

  render() {
    let { spaces, message } = this.state
    let square = spaces.map((value, index) => {
      return (

        <Square
          index = { index }
          value = { value }
          squareButton = { this.squareButton }
          lose = { this.lose }
          win = { this.win }
          dig = { this.dig }
          message = { this.message }
        />

      )
    })

    return (
      <div>
      <br/>
      <br/>
      <br/>

        <h1><font color = 'black'>Ahoy Matey!</font>
        <br/>Find My Treasure ... (if you dare)</h1><br/>
        <div id = 'mainBoard'> { square } </div>

      </div>
    )
  }
}

export default Board
