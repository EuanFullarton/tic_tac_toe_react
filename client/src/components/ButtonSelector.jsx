import React from 'react';

class ButtonSelector extends React.Component {
  constructor(props){
    super(props)
    // this.handleChange = this.handleChange.bind(this);
  }

  render(){
    return (
      <div id='grid'>
      <button>Test button</button>
      <button>Test button</button>
      <button>Test button</button>
      <button>Test button</button>
      <button>Test button</button>
      <button>Test button</button>
      <button>Test button</button>
      <button>Test button</button>
      <button>Test button</button>
      </div>
      )
  }

}

export default ButtonSelector;