// A "View" component if MVC
//<Header>
//Story intro
//Preliminary graphics
//"Start Game" Button

import React from 'react';
import {useSpring, animated} from 'react-spring';
import {Parallax, ParallaxLayer} from 'react-spring/renderprops-addons'

function Intro() {
  return(
    <>
      <Header />
      <p>This choose-your-own-adventure follows the day in the life of an Epicodus student.</p>
      <Button onClick={goToScreen}></Button>
      {/* <Parallax pages={3} scrolling={false} horizontal ref={ref => (this.parallax = ref)}>
        <ParallaxLayer offset={0} speed={0.5}>
          <span onClick={() => this.parallax.scrollTo(1)}>Layers can contain anything</span>
        </ParallaxLayer>
      </Parallax> */}
    </>
  )
}

export default Intro;