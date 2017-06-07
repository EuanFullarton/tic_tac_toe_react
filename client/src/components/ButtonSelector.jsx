import React from 'react';

class ButtonSelector extends React.Component {
  constructor(props){
    super(props)
    this.state = {
      clicks: 0
    };
    this.buttonClicked = this.buttonClicked.bind(this);
  }

  render(){
    return (
      <div id='grid'>
      <button id='1' onClick={this.buttonClicked} value={this.state.clicks}>-</button>
      <button id='2' onClick={this.buttonClicked} value={this.state.clicks}>-</button>
      <button id='3' onClick={this.buttonClicked} value={this.state.clicks}>-</button>
      <button id='4' onClick={this.buttonClicked} value={this.state.clicks}>-</button>
      <button id='5' onClick={this.buttonClicked} value={this.state.clicks}>-</button>
      <button id='6' onClick={this.buttonClicked} value={this.state.clicks}>-</button>
      <button id='7' onClick={this.buttonClicked} value={this.state.clicks}>-</button>
      <button id='8' onClick={this.buttonClicked} value={this.state.clicks}>-</button>
      <button id='9' onClick={this.buttonClicked} value={this.state.clicks}>-</button>
      </div>
      )
  }

  buttonClicked(event){

    const buttonClickedId = event.target.id;
    console.log('id: ', buttonClickedId);

    const buttonToChange = document.getElementById(buttonClickedId);

    if (buttonToChange.innerText !== '-'){
      return;
    }

    if (this.state.clicks === 0){
      buttonToChange.innerText = 'x'
    }
    else if (this.state.clicks % 2 === 0){
      buttonToChange.innerText = 'x'
    }
    else {
      buttonToChange.innerText = 'o'
    }

    console.log('button has been clicked. this: ', this);
    
    const numberOfClicks = parseInt(event.target.value);
    this.setState({clicks: (numberOfClicks + 1)});
    console.log('state: ', this.state.clicks);
    
  }

}

export default ButtonSelector;