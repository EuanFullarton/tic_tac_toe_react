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
    const row2 = document.getElementsByClassName('row2')
    const row3 = document.getElementsByClassName('row3')

    const col1 = document.getElementsByClassName('col1')
    const col2 = document.getElementsByClassName('col2')
    const col3 = document.getElementsByClassName('col3')

      if (( (row1[0].innerText === '-') || (row1[1].innerText === '-') || (row1[2].innerText === '-')) && 
         ( (row2[0].innerText === '-') || (row2[1].innerText === '-') || (row2[2].innerText === '-')) &&
         ( (row3[0].innerText === '-') || (row3[1].innerText === '-') || (row3[2].innerText === '-')) &&
         ( (col1[0].innerText === '-') || (col1[1].innerText === '-') || (col1[2].innerText === '-')) && 
         ( (col2[0].innerText === '-') || (col2[1].innerText === '-') || (col2[2].innerText === '-')) &&
         ( (col3[0].innerText === '-') || (col3[1].innerText === '-') || (col3[2].innerText === '-'))) 
      {
          return
      }
      
      else if ((row1[0].innerText === row1[1].innerText) && (row1[1].innerText === row1[2].innerText)){
        console.log('winner row1!');
      }
      else if ((row2[0].innerText === row2[1].innerText) && (row2[1].innerText === row2[2].innerText)){
        console.log('winner row2!');
        }
      else if ((row3[0].innerText === row3[1].innerText) && (row3[1].innerText === row3[2].innerText)){
        console.log('winner row3!');
      }
      
      else if ((col1[0].innerText === col1[1].innerText) && (col1[1].innerText === col1[2].innerText)){
        console.log('winner col1!');
      }
      else if ((col2[0].innerText === col2[1].innerText) && (col2[1].innerText === col2[2].innerText)){
        console.log('winner col2!');
        }
      else if ((col3[0].innerText === col3[1].innerText) && (col3[1].innerText === col3[2].innerText)){
        console.log('winner col3!');
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