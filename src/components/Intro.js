// A "View" component if MVC
//<Header>
//Story intro
//Preliminary graphics
//"Start Game" Button

import React from 'react';
import {useSpring, animated} from 'react-spring';

function Intro() {
  return(
    <>
      <Header />
      <p>This choose-your-own-adventure follows the day in the life of an Epicodus student.</p>
      <Button onClick={goToScreen}></Button>
    </>
  )
}

export default Intro;