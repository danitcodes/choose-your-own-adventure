import React from 'react';

class GameControl extends React.Component {
  constructor(props){
    super(props);
    this.state = {
      gameStarted: false,
      prompt: "",
      choiceA: "",
      choiceB: "",
      choiceC: "",
      turn: 0
      }
    }

  //repeatable fxns
  goToScreen = () => {
    this.setState({
      gameStarted: true
    })
  }

  changePath = (choice) => {
    if(choice) {
      this.setState({
        prompt: "",
        choiceA: "",
        choiceB: "",
        turn: this.state.turn + 1
      })
    }
  }

  //-> reusableForm toggle
  //-> makeChoice() method
  //-> parallaxScroll() method ??

render() {
  let buttonText = null;
  let currentlyVisibleState = null;

  //if else shtuff around buttonTExt and currentlyVisibleState
  return (
    <>
      {currentlyVisibleState}
      {/* <button></button> */}
    </>
  )
  }
}

export default GameControl;