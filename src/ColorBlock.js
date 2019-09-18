import React, { Component } from 'react';
import './ColorBlock.css';

class ColorBlock extends Component {
  constructor(props){
    super(props);
    this.handleClick = this.handleClick.bind(this);
  }
  handleClick(evt){
    this.props.changeColor(this.props.value)
  }

  render(){
    return (
      <div onClick={this.handleClick} className="ColorBlock"
      style={this.props.color}>
      </div>
    );
  }
}

export default ColorBlock;
