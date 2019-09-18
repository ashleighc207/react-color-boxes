import React, { Component } from 'react';
import './ColorContainer.css';
import ColorBlock from './ColorBlock.js';

class ColorContainer extends Component {
  static defaultProps = {
    colorList: ['#C3E4ED', '#68838B', '#63D1F4', '#9AC0CD', '#50A6C2', '#ADD8E6', '#B2DFEE', '#00688B', '#009ACD', '#009ACD', '#0099CC', '#236B8E', '#0198E1', '#B0E2FF', '#4682B4',  '#63B8FF', '#007FFF', '#499DF5', '#104E8B', '#1B3F8B'],
    blockCount: 20
  }
  state = {
    colorList: []
  }
  constructor(props){
    super(props);
    this.changeColor = this.changeColor.bind(this);
  }
  changeColor(){
    let colorArr = [];
    for(let i = 0; i <= this.props.blockCount; i++){
      colorArr.push(this.props.colorList[Math.floor(Math.random()*this.props.colorList.length)])
    }
    this.setState({
      colorList: colorArr
    })
  }
  render(){
    return (
      <div className="ColorContainer">
        <ColorBlock
          colorList={this.props.colorList}
          changeColor={this.changeColor}
        />
      </div>
    );
  }
}

export default ColorContainer;
