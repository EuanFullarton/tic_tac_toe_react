import React from 'react';

class ButtonSelector extends React.Component {
  constructor(props){
    super(props)
    this.state = {
      clicks: 0
    };
    this.buttonClicked = this.buttonClicked.bind(this);
    this.winner = this.winner.bind(this);

  }

  render(){
    return (
      <div id='grid'>
      <button id='1' className='row1' onClick={this.buttonClicked} value={this.state.clicks}>-</button>
      <button id='2' className='row1' onClick={this.buttonClicked} value={this.state.clicks}>-</button>
      <button id='3' className='row1' onClick={this.buttonClicked} value={this.state.clicks}>-</button>
      <button id='4' className='row2' onClick={this.buttonClicked} value={this.state.clicks}>-</button>
      <button id='5' className='row2' onClick={this.buttonClicked} value={this.state.clicks}>-</button>
      <button id='6' className='row2' onClick={this.buttonClicked} value={this.state.clicks}>-</button>
      <button id='7' className='row3' onClick={this.buttonClicked} value={this.state.clicks}>-</button>
      <button id='8' className='row3' onClick={this.buttonClicked} value={this.state.clicks}>-</button>
      <button id='9' className='row3' onClick={this.buttonClicked} value={this.state.clicks}>-</button>
      </div>
      )
  }

  gameOver(){
    
    const row1 = document.getElementsByClassName('row1')
    const row2 = document.getElementsByClassName('row2')
    const row3 = document.getElementsByClassName('row3')
    let grid = document.getElementById('grid');

      if (( (row1[0].innerText === '-') || (row1[1].innerText === '-') || (row1[2].innerText === '-')) && 
         ( (row2[0].innerText === '-') || (row2[1].innerText === '-') || (row2[2].innerText === '-')) &&
         ( (row3[0].innerText === '-') || (row3[1].innerText === '-') || (row3[2].innerText === '-')) &&
         ( (row1[0].innerText === '-') || (row2[0].innerText === '-') || (row3[0].innerText === '-')) && 
         ( (row1[1].innerText === '-') || (row2[1].innerText === '-') || (row3[1].innerText === '-')) &&
         ( (row1[2].innerText === '-') || (row2[2].innerText === '-') || (row3[2].innerText === '-')) &&
         ( (row1[0].innerText === '-') || (row2[1].innerText === '-') || (row3[2].innerText === '-')) &&
         ( (row1[2].innerText === '-') || (row2[1].innerText === '-') || (row3[0].innerText === '-'))
         ) 
      {
          return
      }
      
      else if ((row1[0].innerText !== '-') && (row1[0].innerText === row1[1].innerText) && (row1[1].innerText === row1[2].innerText)){
        console.log('winner row1!');
        this.winner();
      }
      else if ((row2[0].innerText !== '-') && (row2[0].innerText === row2[1].innerText) && (row2[1].innerText === row2[2].innerText)){
        console.log('winner row2!');
        this.winner();
        }
      else if ((row3[0].innerText !== '-') && (row3[0].innerText === row3[1].innerText) && (row3[1].innerText === row3[2].innerText)){
        console.log('winner row3!');
        this.winner();
      }
      else if ((row1[0].innerText !== '-') && (row1[0].innerText === row2[0].innerText) && (row2[0].innerText === row3[0].innerText)){
        console.log('winner col1!');
        this.winner();
      }
      else if ((row1[1].innerText !== '-') && (row1[1].innerText === row2[1].innerText) && (row2[1].innerText === row3[1].innerText)){
        console.log('winner col2!');
        this.winner();
        }
      else if ((row1[2].innerText !== '-') && (row1[2].innerText === row2[2].innerText) && (row2[2].innerText === row3[2].innerText)){
        console.log('winner col3!');
        this.winner();
      }
      else if ((row1[0].innerText !== '-') && ((row1[0].innerText === row2[1].innerText) && (row2[1].innerText === row3[2].innerText)) ||
        ((row1[2].innerText === row2[1].innerText) && (row2[1].innerText === row3[0].innerText)))
      {
        console.log('diagonal win!');
        this.winner();
      }

      else{
        return
      }
  }

  winner(){
    if (this.state.clicks % 2 === 0){
    console.log('X wins!')
    alert('X wins!');
    }
    else {
      console.log('O wins!')
      alert('O wins!');
    }
  }

  draw(){
    alert('Draw!')
  }

  buttonClicked(event){

    const buttonClickedId = event.target.id;
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

    console.log('hey!', this.state.clicks)
    if (this.state.clicks === 8){
      this.draw();
    }
    
    const numberOfClicks = parseInt(event.target.value);
    this.setState({clicks: (numberOfClicks + 1)});

    this.gameOver();    

  }

}

export default ButtonSelector;