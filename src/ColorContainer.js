import React, { Component } from 'react';
import './ColorContainer.css';
import ColorBlock from './ColorBlock.js';

class ColorContainer extends Component {
  render(){
    return (
      <div className="ColorContainer">
        <ColorBlock />
      </div>
    );
  }
}

export default ColorContainer;
