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
const Pink = ({ children }) => (
  <span style={{ color: "#FF6AC1" }}>{children}</span>
);
const Yellow = ({ children }) => (
  <span style={{ color: "#EFF59B" }}>{children}</span>
);
const Lightblue = ({ children }) => (
  <span style={{ color: "#9AEDFE" }}>{children}</span>
);
const Green = ({ children }) => (
  <span style={{ color: "#57EE89" }}>{children}</span>
);
const Blue = ({ children }) => (
  <span style={{ color: "#57C7FF" }}>{children}</span>
);
const Gray = ({ children }) => (
  <span style={{ color: "#909090" }}>{children}</span>
);

//Goo Blob

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
        <Parallax ref={(ref) => (this.parallax = ref)} pages={5}>
          <ParallaxLayer
            offset={1}
            speed={1}
            style={{ backgroundColor: "#805E73" }}
          />
          {/* {first prompt} */}
          <ParallaxLayer
            offset={1}
            speed={0.1}
            onClick={() => this.parallax.scrollTo(2)}
            style={{
              display: "flex",
              alignItems: "center",
              justifyContent: "center",
            }}
          >
            <h1>Billboard Baggins wakes up on a school day. Are they...</h1>
          </ParallaxLayer>
          <ParallaxLayer offset={1.4} speed={0.8}>
            <button id="btn" onClick={() => this.parallax.scrollTo(2)}>
              Feeling ready for the day
            </button>{" "}
            <br />
            <button id="btn" onClick={console.log("click")}>
              NOT Feeling ready for the day
            </button>
          </ParallaxLayer>
          {/* {second prompt} */}
          <ParallaxLayer offset={2.6} speed={1.5} style={{ opacity: 1 }}>
            {" "}
            <br />
            <button onClick={() => this.parallax.scrollTo(4)}>
              Begrudgingly get up and go find caffeine.
            </button>
            <button onClick={() => this.parallax.scrollTo(4)}>
              Hit Snooze and go back to bed.
            </button>
          </ParallaxLayer>
          <ParallaxLayer
            offset={2}
            speed={1}
            style={{ backgroundColor: "#87BCDE" }}
          />

          {/**Parallax scroll stars, non-twinkling */}
          <ParallaxLayer
            offset={0}
            speed={0}
            factor={3}
            style={{
              backgroundImage: url("stars", true),
              backgroundSize: "cover",
            }}
          />
          <ParallaxLayer
          offset={1}
          speed={0}
          factor={3}>

          </ParallaxLayer>
          <ParallaxLayer>
            {/* first panel stars */}
            <div class="stars"></div>
            <div class="twinkling"></div>
          </ParallaxLayer>
          
          <ParallaxLayer
            offset={2.5}
            speed={-0.4}
            style={{
              display: "flex",
              alignItems: "center",
              justifyContent: "center",
              pointerEvents: "none",
            }}
          >
            <h1>Prompt 7?</h1>
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
          
          <ParallaxLayer
            offset={2}
            speed={-0}
            style={{
              display: "flex",
              alignItems: "center",
              justifyContent: "center",
            }}
            onClick={() => this.parallax.scrollTo(0)}
          >
            <h1>We all have those days... What will Billboard do to wake himself up?</h1>
          </ParallaxLayer>
          <ParallaxLayer
            offset={3}
            speed={-0.3}
            style={{
              backgroundSize: "80%",
              backgroundPosition: "center",
            }}
          ></ParallaxLayer>
        </Parallax>

        {this.state.gameStarted ? (
          <Screen
            prompt={this.state.prompt}
            choiceA={this.state.choiceA}
            choiceB={this.state.choiceB}
            choiceC={this.state.choiceC}
            changePath={this.changePath}
          />
        ) : (
          <div>
            <div className="intro"></div>
            <button onClick={this.goToScreen}>Go to start</button>
            <p></p>
          </div>
        )}
      </>
    );
  }
}

export default GameControl;
