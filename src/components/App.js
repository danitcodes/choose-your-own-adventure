import React from "react";
import { useSpring, animated } from "react-spring"; //fetch imports
import Screen from "./Screen";
import GameControl from "./GameControl";

function App() {
  const props = useSpring({ opacity: 1, from: { opacity: 0 } }); // define your spring
  return (
    <>
      <GameControl />
    </>
  );
}

export default App;
