import React from 'react';
import Header from './Header';
import {useSpring, animated} from 'react-spring'; //fetch imports

function App() {
  const props = useSpring({opacity: 1, from: {opacity: 0}}); // define your spring
  return <animated.div style={props}><h1>I will fade in</h1></animated.div> //tie animated values to view
  // return (
  //   <>
  //     <Header />
  //     {/* app stuff here */}
  //   </>
  // );
}

export default App;