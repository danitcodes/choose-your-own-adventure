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
  //if else shtuff
  return (
    <div className="screenContainer">
      <div className="outerBox">
        <div className="screen">
          <div className="description">
            <p>
              {this.props.prompt}
            </p>
          </div>
          <div className="choiceA">
            <button onClick={()=>{this.props.choiceA}}>
              <p>
                {this.props.choiceA}
              </p>
            </button>
          </div>
          <div className="choiceB">
            <button onClick={()=>{this.props.choiceB}}>
              <p>
                {this.props.choiceB}
              </p>
            </button>
          </div>
          <div className="choiceC">
            <button onClick={()=>{this.props.choiceC}}>
              <p>
                {this.props.choiceC}
              </p>
            </button>
          </div>
        </div>
      </div>
    </div>
    )
  }
}

export default GameControl;