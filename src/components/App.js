import React from 'react';
import {useSpring, animated} from 'react-spring'; //fetch imports
import Screen from './Screen';

function App() {

  const props = useSpring({opacity: 1, from: {opacity: 0}}); // define your spring

  return (
    <> <animated.div style={props}></animated.div>
      {this.state.gameStarted
        ? <Screen prompt={this.state.prompt} choiceA={this.state.choiceA} choiceB={this.state.choiceB} choiceC={this.state.choiceC} changePath={this.changePath}/>
        : <div>
            <div className="intro"></div>
            <button onClick={this.goToScreen}>Go to start</button>
            <p></p>
          </div>
      }
    </>
    );
  }

export default App;