import React from "react";
import { Parallax, ParallaxLayer } from "react-spring/renderprops-addons";
import Intro from "./Intro";
import AlarmClock from "./img/alarm_clock.jpg";
import EpicodusLogo from './img/epicodus-logo-300.png';
import Shawn from './img/shawn.png'
import Caterpillar from './img/caterpillar.png';
import Beetle from './img/beetle.png';
import GoBackToBed from './img/go_back_to_bed.jpeg';
import Sunrise from './img/sunrise.jpg';
import PersonShrugging from './img/person_shrugging.png';
import MagicWand from './img/magic-wand.jpg';
import Laptop from './img/laptop_cartoon.png';
import YouTube from './img/YouTube_logo.png';
import Caffeine from './img/caffeine.jpg';
import Pull from './Pull';
import Script from './Script';

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

  render() {
    return (
      <>
      <div style={{backgroundColor: '#04BFBF'}}>
        <div className="intro"></div>
        <button style={{height: '50px', borderRadius: '80%'}} onClick={this.goToScreen}>Go to start</button>
        <p></p>
      </div>
      {/* <Pull
        style={PullStyles}
        /> */}
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
            <div className="stars"></div>
            <div className="twinkling"></div>
          </ParallaxLayer>
          <ParallaxLayer
            offset={1}
            speed={1}
            style={{ backgroundColor: "#805E73", opacity: '60%' }}
          />
        <ParallaxLayer
          offset={0}
          speed={1}
          style={{
            display: "flex",
            alignItems: "right",
            justifyContent: "right",
            height: "150px",
            width: "auto",
            paddingTop: "30px"
          }}
        >
          <img style={{zIndex: 1, marginLeft: '20%'}} src={EpicodusLogo} alt="Epicodus Logo"/>
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
          <Pull
          style={{
            display: "flex",
            alignItems: "left",
            justifyContent: "left",
          }}/>
        </ParallaxLayer>

        {/* {first prompt} */}
        <ParallaxLayer
          offset={1}
          speed={0.3}
          style={{
            display: "flex",
            alignItems: "center",
            justifyContent: "center",
          }}
          >
          <div className="container">
            <h1 style={{zIndex: 3, color: "white", fontSize: "20px", textAlign: 'center', letterSpacing: '10px', textShadow: '4px 4px gray'}}>Billboard Baggins wakes up on a school day. They jump into coding and hit a major bug. What do they do?</h1>
          </div>
        </ParallaxLayer>
        <ParallaxLayer
          offset={1}
          speed={0.5}
          style={{
            display: "flex",
            alignItems: "left",
          }}
        >
          <img style={{zIndex: 1, alignSelf: 'flex-end', height: '120px', width: 'auto', borderRadius: '30%', margin: '100px'}} src={Caffeine} alt="Many mugs of various caffeinated beverages in mugs on a marble counter"/>
          </ParallaxLayer>
        <ParallaxLayer
          offset={1.2}
          speed={0.2}
          style={{
            display: "flex",
            alignItems: "left",
          }}
        >
          <img style={{height: '120px', width: 'auto', borderRadius: "50%", marginLeft: '15%'}} src={AlarmClock} alt="An alarm clock telling you to wake up"></img>
          </ParallaxLayer>
          <ParallaxLayer
            offset={1.7}
            speed={0.5}
            style={{
              display: "flex-end",
              alignItems: "right",
            }}
            >
          </ParallaxLayer>
        <ParallaxLayer
          offset={1.5}
          speed={2}
          style={{
            display: "flex",
            alignItems: "left",
          }}
        >
          <div>
            <button style={{height: '100px', width: '100px', borderRadius: '50%'}} onClick={() => this.parallax.scrollTo(2)}>
          Google the issue and look up some YouTube tutorials!
        </button>
          </div>
          <img style={{height: '200px', width: 'auto', borderRadius: "50%", marginLeft: '75%'}} src={Sunrise} alt="A cartoon rooster crowing at the sunrise"></img>
        </ParallaxLayer>
        <ParallaxLayer
          offset={1.9}
          speed={0.5}
          style={{
            display: "flex",
            alignItems: "left",
          }}
        >
          <img style={{height: '200px', width: 'auto', borderRadius: "90%", marginLeft: '75%'}} src={YouTube} alt="The YouTube Logo"></img>
        </ParallaxLayer>
        {/* {second prompt} */}
        <ParallaxLayer
          offset={1.6}
          speed={-0}
          style={{
            display: "flex",
            alignItems: "center",
            justifyContent: "center",
          }}
        >
          <h1 style={{zIndex: 3, color: "white", fontSize: "20px", textAlign: 'center', letterSpacing: '10px', textShadow: '4px 4px gray'}}>Billboard Baggins can't find what they're looking for... what does he do next?</h1>
        </ParallaxLayer>
        <ParallaxLayer
          offset={2}
          speed={0.6}
        >
          {" "}
          <br />
          <button style={{height: '100px', width: '100px', borderRadius: '50%'}} onClick={() => this.parallax.scrollTo(2.5)}>
            Ask a peer for help!
          </button>
        </ParallaxLayer>
        <ParallaxLayer
          offset={2.2}
          speed={0.7}
        >
          {" "}
          <br />
          <img style={{height: '120px', width: 'auto', borderRadius: "50%", marginLeft: '15%'}} src={PersonShrugging} alt="A cartoon person shrugging"></img>
        </ParallaxLayer>

        <ParallaxLayer
          offset={2.9}
          speed={1}
          style={{ backgroundColor: "#6de0f7", opacity: '60%' }}
        />
        <ParallaxLayer
          offset={2.5}
          speed={0.1}

          style={{
            display: "flex",
            alignItems: "center",
            justifyContent: "center",
          }}
        >
          <div className="container">
            <h1 style={{zIndex: 3, color: "white", fontSize: "20px", textAlign: 'center', letterSpacing: '10px', textShadow: '4px 4px gray'}}>Billboard Baggins asks their buddy Grumbledorf what the issue is with their bug, but comes up with no wisdom... who else could have such wisdom?</h1>
          </div>
        </ParallaxLayer>
      <ParallaxLayer
          offset={2.9}
          speed={1}
        >
          {" "}
          <br />
          <img style={{height: '150px', width: 'auto', borderRadius: "80%", marginLeft: '15%'}} src={Beetle} alt="An cartoon of a beetle"></img>
      </ParallaxLayer>
        <ParallaxLayer
          offset={2.7}
          speed={0.2}
          style={{
            display: "flex",
            alignItems: "center",
            justifyContent: "center",
          }}
        >
            <div style={{ justifyContent: 'space-between',textAlign: 'center', position: 'relative'}}>
              <button style={{height: '100px', width: '100px', borderRadius: '50%'}} id="btn" onClick={() => this.parallax.scrollTo(3.1)}>
                Ask the all-knowing Shawn!!
              </button>{" "}
            </div>
        </ParallaxLayer>
        <ParallaxLayer
          offset={3.1}
          speed={0.6}
        >
          {" "}
          <br />
          <img style={{height: '200px', width: 'auto', borderRadius: "90%", marginLeft: '75%', textShadow: '50px 50px blue'}} src={Shawn} alt="An avatar of an Epicodus instructor, Shawn"></img>
        </ParallaxLayer>
        <ParallaxLayer
          offset={3.2}
          speed={0.2}
          style={{
            display: "flex",
            alignItems: "center",
            justifyContent: "center",
          }}
        >
          <div className="container">
            <h1 style={{ zIndex: 3, color: "white", fontSize: "20px", textAlign: 'center', letterSpacing: '10px', textShadow: '4px 4px gray'}}>Billboard Baggins asks the ever-knowledgeable: Shawn! Unfortunately... this is a bug the likes of which he has never seen! But... he tells Billboard that they are worthy, capable of solving this bug, and that they ARE THE MAGIC!!!</h1>
          </div>
        </ParallaxLayer>
        <ParallaxLayer
          offset={3.8}
          speed={1.2}
        >
          {" "}
          <br />
          <img style={{height: '150px', width: 'auto', borderRadius: "90%", marginLeft: '30%'}} src={Caterpillar} alt="An cartoon of a caterpillar"></img>
        </ParallaxLayer>
        <ParallaxLayer
          offset={4.5}
          speed={0.8}
        >
          {" "}
          <br />
          <img style={{height: '200px', width: 'auto', borderRadius: "80%", marginLeft: '75%'}} src={MagicWand} alt="A magic wand with sparks around it"></img>
        </ParallaxLayer>
        <ParallaxLayer
          offset={3.5}
          speed={0.1}
          style={{
            display: "flex",
            alignItems: "center",
            justifyContent: "center",
          }}
        >
          <div style={{ justifyContent: 'space-between',textAlign: 'center', position: 'relative'}}>
            <button style={{height: '100px', width: '100px', borderRadius: '50%'}} id="btn" onClick={() => this.parallax.scrollTo(4)}>
              You keep trying to solve the problem!
            </button>{" "}
          </div>
        </ParallaxLayer>
        <ParallaxLayer
          offset={4}
          speed={0.7}
        >
          {" "}
          <br />
          <img style={{height: '170px', width: 'auto', borderRadius: "90%", marginLeft: '15%'}} src={Laptop} alt="An cartoon laptop"></img>
        </ParallaxLayer>
          <ParallaxLayer
          offset={4}
          speed={0.1}

          style={{
            display: "flex",
            alignItems: "center",
            justifyContent: "center",
          }}
        >
          <div className="container">
            <h1 style={{ zIndex: '2', color: "white", fontSize: "20px", textAlign: 'center', letterSpacing: '10px', textShadow: '4px 4px gray'}}>Billboard Baggins solves the bug with the help of Shawns Magic!(TM) Turns out they had a capital C in one of their variables that wasn't caught by the terminal... But it looks like it's time for whiteboarding!</h1>
            <h2 style={{zIndex: '3', color: "white", fontSize: "20px", textAlign: 'center', letterSpacing: '5px', textShadow: '2px 2px gray'}}>Good luck! Don't stress and keep in mind: YOU ARE THE MAGIC, FELLOW EPICODUS STUDENT!</h2>
          </div>
        </ParallaxLayer>
        <ParallaxLayer
          offset={4.5}
          speed={0.3}
          style={{
            display: "flex",
            alignItems: "left",
            zIndex: '0'
          }}
        >
          <Script style={{zIndex: "auto"}}/>
          <img style={{zIndex: '0', height: '200px', width: 'auto', borderRadius: "70%", marginLeft: '15%'}} src={GoBackToBed} alt="A cartoon of a young girl sleeping on a whale floating through space"></img>
        </ParallaxLayer>
        <ParallaxLayer
          offset={4.5}
          speed={0.1}

          style={{
            display: "flex",
            alignItems: "center",
            justifyContent: "center",
          }}
        >

          <div style={{ justifyContent: 'space-between',textAlign: 'center', position: 'relative'}}>
            <button style={{backgroundColor: 'rgba(157, 34, 157, 0.8)', height: '100px', width: '100px', borderRadius: '50%', marginBottom: '100px'}} id="btn" onClick={() => this.parallax.scrollTo(1.0)}>
              Start the day over!
            </button>{" "}
          </div>
        </ParallaxLayer>

        </Parallax>
      </>
    );
  }
}

export default GameControl;