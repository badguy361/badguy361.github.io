import React, { useState } from 'react'
import { useSpring, animated } from '@react-spring/web'

export default function Flip() {
  const [flipped, set] = useState(false)
  const { transform, opacity } = useSpring({
    opacity: flipped ? 1 : 0,
    transform: `perspective(600px) rotateX(${flipped ? 180 : 0}deg)`,
    config: { mass: 5, tension: 500, friction: 80 },
  })
  return (
    <div className="myself_container" onClick={() => set(state => !state)}>
      {/* <animated.div
        id="myself" 
        style={{ opacity, transform, rotateX: '180deg' }}
      /> */}
      <animated.div
        id="myself2" 
        style={{ opacity: opacity.to(o => 1 - o), transform }}
        />
      
    </div>
  )
}
