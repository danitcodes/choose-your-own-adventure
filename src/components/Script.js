import React from 'react';
import Pug from './img/pug-horse.jpg';
import { useSpring, animated } from 'react-spring';
import './ScriptStyles.css'

export default function Script() {
  const props = useSpring({
    from: { position: 'relative', top: '0%', left: '200px'},
    to: async next => {
      while (1) {
        await next({  top: '0px' })
        await next({  top: '40px' })
      }
    },
  })
  return <animated.div className="script-box" style={props} >
    <img id="pug" src={Pug} alt="A pug riding a toy horse upright wearing a tiny cowboy hat"></img>
  </animated.div>
}