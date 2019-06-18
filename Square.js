import React, { Component } from 'react'

class Square extends Component {

  squareButton = () => {
    this.props.squareButton(this.props.index)
  }

  render() {
    let { value, index, message } = this.props
    return (
      <div id = 'mainSquare' onClick = { this.squareButton } >
        { value }
      </div>
    )
  }
}

export default Square
