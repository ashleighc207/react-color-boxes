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
      <div className="ColorBlock">
        {this.props.colorList.map(color => {
          const styles = {backgroundColor: color}
          console.log(styles)
            return <div onClick={this.handleClick} className="ColorBlock--block"
            style={styles}>
            </div>
        })}
      </div>
    );
  }
}

export default ColorBlock;
