import React from 'react';
import { useSpring, animated } from 'react-spring';
import { useDrag } from 'react-use-gesture';

function Pull() {
  const [{ xy }, set] = useSpring(() => ({ xy: [0, 0] }))
  // Set the drag hook and define component movement based on gesture data
  const bind = useDrag(({ down, movement }) => {
    set({ xy: down ? movement : [0, 0] })
  })
  // Bind it to a component
  return (
    <animated.div
      {...bind()}
      style={{
        width: "100px",
        height: "100px",
        background: "hotpink",
        borderRadius: "60%",
        cursor: "-webkit-grab",
        display: "flex",
        alignItems: "left",
        justifyContent: "flex-start",
        whiteSpace: "normal",
        transform: xy.interpolate((x, y) => `translate3d(${x}px, ${y}px, 0)`)
      }}
    />
  )
}

export default Pull;