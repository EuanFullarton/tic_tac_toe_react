import React from 'react';

class ButtonSelector extends React.Component {
  constructor(props){
    super(props)
    // this.handleChange = this.handleChange.bind(this);
  }

  render(){
    return (
      <div id='grid'>
      <button onClick={this.buttonClicked}>Test button</button>
      <button onClick={this.buttonClicked}>Test button</button>
      <button onClick={this.buttonClicked}>Test button</button>
      <button onClick={this.buttonClicked}>Test button</button>
      <button onClick={this.buttonClicked}>Test button</button>
      <button onClick={this.buttonClicked}>Test button</button>
      <button onClick={this.buttonClicked}>Test button</button>
      <button onClick={this.buttonClicked}>Test button</button>
      <button onClick={this.buttonClicked}>Test button</button>
      </div>
      )
  }

  buttonClicked(){
    console.log('button has been clicked');
  }

}

export default ButtonSelector;