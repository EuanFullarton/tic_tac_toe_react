import React from 'react';

class ButtonSelector extends React.Component {
  constructor(props){
    super(props)
    this.buttonClicked = this.buttonClicked.bind(this);
  }

  render(){
    return (
      <div id='grid'>
      <button value='Test' id='1' onClick={this.buttonClicked}>Test button</button>
      <button id='2' onClick={this.buttonClicked}>Test button</button>
      <button id='3' onClick={this.buttonClicked}>Test button</button>
      <button id='4' onClick={this.buttonClicked}>Test button</button>
      <button id='5' onClick={this.buttonClicked}>Test button</button>
      <button id='6' onClick={this.buttonClicked}>Test button</button>
      <button id='7' onClick={this.buttonClicked}>Test button</button>
      <button id='8' onClick={this.buttonClicked}>Test button</button>
      <button id='9' onClick={this.buttonClicked}>Test button</button>
      </div>
      )
  }

  buttonClicked(event){
    const buttonClickedValue = event.target.value;
    const buttonClickedId = event.target.id;

    console.log('value: ', buttonClickedValue);
    console.log('id: ', buttonClickedId);

    const buttonToChange = document.getElementById(buttonClickedId);
    buttonToChange.innerText = 'Hello';

    console.log('button has been clicked. this = ', this);

  }

}

export default ButtonSelector;