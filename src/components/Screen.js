import React from 'react';
import PropTypes from 'prop-types';
import { changePath } from './GameControl';

function Screen(props) {
  return(
    <>
      <div className="screenContainer">
        <div className="outerBox">
          <div className="screen">
            <div className="description">
              <p>
                {props.prompt}
              </p>
            </div>
            <div className="choiceA">
              <button onClick={changePath = ()=>{props.choiceA}}>
                <p>
                  {props.choiceA}
                </p>
              </button>
            </div>
            <div className="choiceB">
              <button onClick={changePath = ()=>{props.choiceB}}>
                <p>
                  {props.choiceB}
                </p>
              </button>
            </div>
            <div className="choiceC">
              <button onClick={changePath = () =>{props.choiceC}}>
                <p>
                  {this.props.choiceC}
                </p>
              </button>
            </div>
          </div>
        </div>
      </div>
    </>
  )
}

Screen.propTypes = {
  gameStarted: PropTypes.bool,
  prompt: PropTypes.string,
  choiceA: PropTypes.string,
  choiceB: PropTypes.string,
  choiceC: PropTypes.string,
  turn: PropTypes.number, //functioning as a screenIdNum
  changePath: PropTypes.func //called on click ??
}

export default Screen;