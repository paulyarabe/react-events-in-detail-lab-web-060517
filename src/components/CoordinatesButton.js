// Code CoordinatesButton Component Here

import React from 'react'

class CoordinatesButton extends React.Component {

  constructor(props){
    super(props)
  }

  onReceiveCoordinates = (e) => {
    this.props.onReceiveCoordinates([e.clientX, e.clientY])
  }

  render() {
    return (
      <button onClick={this.onReceiveCoordinates}>Coordinates</button>
    );
  }
}

export default CoordinatesButton
