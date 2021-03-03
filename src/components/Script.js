import { render } from 'react-dom';
import React from 'react';
import { useSpring, animated } from 'react-spring';

export default function Script() {
  const props = useSpring({
    from: { left: '0%', top: '0%', width: '0%', height: '0%', background: 'lightgreen' },
    to: async next => {
      while (1) {
        await next({ left: '0%', top: '0%', width: '120px', height: '120px', background: 'lightblue' })
        await next({ height: '100px', background: 'lightgreen' })
        await next({ width: '100px', left: '50%', background: 'lightgoldenrodyellow' })
        await next({ top: '0%', height: '80px', background: 'lightpink' })
        await next({ top: '50%', height: '50px', background: 'lightsalmon' })
        await next({ width: '10px', background: 'lightslategrey' })
      }
    },
  })
  return <animated.div className="script-box" style={props} />
}