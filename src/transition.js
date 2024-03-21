import React, {useState} from 'react';
import {useTransition, animated} from '@react-spring/web';

export default function Transition() {
  const [toggle, setToggle] = useState(false);
  const transitions = useTransition(toggle, {
    from: {opacity: 0},
    enter: {opacity: 1},
    leave: {opacity: 0},
  });

  return (
    <div style={{display: 'flex', height: 40}}>
      <button
        style={{marginRight: 16}}
        onClick={() => setToggle((prev) => !prev)}
      >
        {toggle ? 'Hide' : 'Show'}
      </button>
      {transitions(
          (props, item) =>
            item && (
              <animated.div
                style={{
                  fontSize: 40,
                  lineHeight: 1,
                  ...props,
                }}
              >
                😄
              </animated.div>
            ),
      )}
    </div>
  );
}
