import React from "react";
import Screen from "./Screen";
import ReactDOM from "react-dom";
import { useSpring } from "react-spring";
import { Parallax, ParallaxLayer } from "react-spring/renderprops-addons";
import Intro from "./Intro";

const url = (name, wrap = false) =>
  `${
    wrap ? "url(" : ""
  }https://awv3node-homepage.surge.sh/build/assets/${name}.svg${
    wrap ? ")" : ""
  }`;


class GameControl extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      gameStarted: false,
      prompt: "",
      choiceA: "",
      choiceB: "",
      choiceC: "",
      turn: 0,
    };
  }

  //repeatable fxns
  goToScreen = () => {
    this.setState({
      gameStarted: true,
    });
  };

  changePath = (choice) => {
    if (choice) {
      this.setState({
        prompt: "",
        choiceA: "",
        choiceB: "",
        choiceC: "",
        turn: this.state.turn + 1,
      });
    }
  };

  //-> reusableForm toggle
  //-> makeChoice() method
  //-> parallaxScroll() method ??

  render() {
    let buttonText = null;
    let currentlyVisibleState = null;

    //if else shtuff around buttonText and currentlyVisibleState

    return (
      <>
      <div style={{backgroundColor: '#04BFBF'}}>
        <div className="intro"></div>
        <button style={{height: '50px', borderRadius: '80%'}} onClick={this.goToScreen}>Go to start</button>
        <p></p>
      </div>

      <Parallax ref={(ref) => (this.parallax = ref)} pages={5}>

        <ParallaxLayer
            offset={0}
            speed={0}
            factor={5}
            style={{
              backgroundImage: url("stars", true),
              backgroundSize: "cover",
            }}
          />
          {/**Parallax scroll stars, non-twinkling */}
          <ParallaxLayer>
            {/* first panel stars */}
            <div class="stars"></div>
            <div class="twinkling"></div>
          </ParallaxLayer>
          <ParallaxLayer
            offset={1}
            speed={1}
            style={{ backgroundColor: "#805E73" }}
          />
          {/* {first prompt} */}
          <ParallaxLayer
            offset={1}
            speed={0.1}

            style={{
              display: "flex",
              alignItems: "center",
              justifyContent: "center",
            }}
          >
            <h1>Billboard Baggins wakes up on a school day. Are they...</h1>
            <div style={{ justifyContent: 'space-between',textAlign: 'center', position: 'relative'}}>
              <button style={{height: '100px', width: '100px', borderRadius: '50%'}} id="btn" onClick={() => this.parallax.scrollTo(2)}>
                Feeling ready for the day
              </button>{" "}
              <button style={{height: '100px', width: '100px', borderRadius: '50%'}} id="btn" onClick={() => this.parallax.scrollTo(3)}>
                NOT Feeling ready for the day
              </button>
            </div>
          </ParallaxLayer>

          {/* {second prompt} */}
          <ParallaxLayer
            offset={2}
            speed={-0}
            style={{
              display: "flex",
              alignItems: "center",
              justifyContent: "center",
            }}
          >
            <h1>Billboard Baggins is ready for the day! They start coding and hit a Major Bug, what do you do?</h1>
          </ParallaxLayer>
          <ParallaxLayer offset={3} speed={1.5} style={{ opacity: 1 }}>
            {" "}
            <br />
            <button style={{height: '100px', width: '100px', borderRadius: '50%'}} onClick={() => this.parallax.scrollTo(4)}>
              Begrudgingly get up and go find caffeine.
            </button>
            <button style={{height: '100px', width: '100px', borderRadius: '50%'}} onClick={() => this.parallax.scrollTo(5)}>
              Hit Snooze and go back to bed.
            </button>
          </ParallaxLayer>

          {/* {third prompt} */}
          <ParallaxLayer
            offset={4}
            speed={0.1}
            style={{
              display: "flex",
              alignItems: "center",
              justifyContent: "center",
            }}
          >
            <div style={{ justifyContent: 'space-between',textAlign: 'center', position: 'relative'}}>
              <button style={{height: '100px', width: '100px', borderRadius: '50%'}} id="btn" onClick={() => this.parallax.scrollTo(6)}>
                It is a Coffee Day.
              </button>{" "}
              <button style={{height: '100px', width: '100px', borderRadius: '50%'}} id="btn" onClick={() => this.parallax.scrollTo(7)}>
                It is a Tea Day.
              </button>
            </div>
          </ParallaxLayer>
          {/* {fourth prompt} */}
          <ParallaxLayer
            offset={5}
            speed={0.1}
            style={{
              display: "flex",
              alignItems: "center",
              justifyContent: "center",
            }}
          >
            <div style={{ justifyContent: 'space-between',textAlign: 'center', position: 'relative'}}>
              <button style={{height: '100px', width: '100px', borderRadius: '50%'}} id="btn" onClick={() => this.parallax.scrollTo(8)}>
                I feel rested now.
              </button>{" "}
              <button style={{height: '100px', width: '100px', borderRadius: '50%'}} id="btn" onClick={() => this.parallax.scrollTo(9)}>
                I'm still in bed...
              </button>
            </div>
          </ParallaxLayer>

          <ParallaxLayer
            offset={3}
            speed={0.1}
            style={{
              display: "flex",
              alignItems: "center",
              justifyContent: "center",
            }}
          >
            <h1>Billboard Baggins hits snooze for another 15 minutes and gets to stand up two minutes before 8:30am. Are they...</h1>
            <div style={{ justifyContent: 'space-between',textAlign: 'center', position: 'relative'}}>
              <button style={{height: '100px', width: '100px', borderRadius: '50%'}} id="btn" onClick={() => this.parallax.scrollTo(2)}>
                Feeling rested now
              </button>{" "}
              <button style={{height: '100px', width: '100px', borderRadius: '50%'}} id="btn" onClick={() => this.parallax.scrollTo(3)}>
                NOT Feeling rested
              </button>
            </div>
          </ParallaxLayer>

          <ParallaxLayer
            offset={0}
            speed={0.1}
            style={{
              display: "flex",
              alignItems: "center",
              justifyContent: "center",
            }}
          >
            <Intro></Intro>
          </ParallaxLayer>

        </Parallax>
      </>
    );
  }
}

export default GameControl;
