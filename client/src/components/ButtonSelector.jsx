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
      <button id='1' className='row1 col1' onClick={this.buttonClicked} value={this.state.clicks}>-</button>
      <button id='2' className='row1 col2' onClick={this.buttonClicked} value={this.state.clicks}>-</button>
      <button id='3' className='row1 col3' onClick={this.buttonClicked} value={this.state.clicks}>-</button>
      <button id='4' className='row2 col1' onClick={this.buttonClicked} value={this.state.clicks}>-</button>
      <button id='5' className='row2 col2' onClick={this.buttonClicked} value={this.state.clicks}>-</button>
      <button id='6' className='row2 col3' onClick={this.buttonClicked} value={this.state.clicks}>-</button>
      <button id='7' className='row3 col1' onClick={this.buttonClicked} value={this.state.clicks}>-</button>
      <button id='8' className='row3 col2' onClick={this.buttonClicked} value={this.state.clicks}>-</button>
      <button id='9' className='row3 col3' onClick={this.buttonClicked} value={this.state.clicks}>-</button>
      </div>
      )
  }

  gameOver(){
    
    const row1 = document.getElementsByClassName('row1')

      if ( (row1[0].innerText === '-') || (row1[1].innerText === '-') || (row1[2].innerText === '-')) {
        return
      }
      else if (row1[0].innerText && row1[1].innerText && row1[2].innerText){
        console.log('winner!');
      }
      else{
        return
      }

    


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

    this.gameOver();    

    
  }

}

export default ButtonSelector;