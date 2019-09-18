import React, { Component } from 'react';
import './ColorContainer.css';
import ColorBlock from './ColorBlock.js';

class ColorContainer extends Component {
  static defaultProps = {
    colorList: ['#C3E4ED', '#68838B', '#63D1F4', '#9AC0CD', '#50A6C2', '#ADD8E6', '#B2DFEE', '#00688B', '#009ACD', '#436EEE', '#0099CC', '#236B8E', '#0198E1', '#B0E2FF', '#4682B4',  '#63B8FF', '#007FFF', '#499DF5', '#104E8B', '#1B3F8B'],
    blockCount: 20
  }
  state = {
    colorList: this.props.colorList
  }
  constructor(props){
    super(props);
    this.changeColor = this.changeColor.bind(this);
  }
  changeColor(evt){
    let updatedColorArr = this.state.colorList;
    updatedColorArr[evt] = this.props.colorList[Math.floor(Math.random()*this.props.colorList.length)];

    this.setState({
      colorList: updatedColorArr
    })
  }
  render(){
    return (
      <div>
      <h1 className="ColorContainer--title">Click any square to change it's color</h1>
        <div className="ColorContainer">
          {this.props.colorList.map((color, i) => {
            let style = {backgroundColor: this.state.colorList[i]}
            return <ColorBlock
              color={style}
              changeColor={this.changeColor}
              value={i}
              key={i}
            />
          })}
        </div>
      </div>
    );
  }
}

export default ColorContainer;
