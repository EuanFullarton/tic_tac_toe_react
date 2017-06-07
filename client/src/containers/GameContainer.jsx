import React from 'react';
import ButtonSelector from '../components/ButtonSelector';

class GameContainer extends React.Component {
  constructor(props){
    super(props);
    this.state = {
    };
    this.setSelectedButton = this.setSelectedButton.bind(this);
  }

  render(){
    return(
      <div>
      <h2> Tic Tac Toe </h2>
      <ButtonSelector buttons={this.state.buttons} onSelectButton={this.setSelectedButton}/>
      </div>
      );
  }

  setSelectedButton(button){
    this.setState({selectedButton: button})
  }

}

export default GameContainer;

