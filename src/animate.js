import {motion, useScroll, useAnimation} from 'framer-motion';
import {React, useEffect} from 'react';
import {useInView} from 'react-intersection-observer';
import './assets/css/style.css';
import 'bootstrap/dist/css/bootstrap.min.css';

const ScrollAnimate = () => {
  const {scrollYProgress} = useScroll();

  return (
    <motion.div
      className='progress-bar'
      style={{scaleX: scrollYProgress, background: '#37b3ed'}}
    />
  );
};

const ScrollView = ({position, content}) => {
  const control = useAnimation();
  const [ref, inView] = useInView();
  const boxVariant = {
    visible: {opacity: 1, y: 0, transition: {duration: 0.8}},
    hidden: {opacity: 0, y: parseInt(position)},
  };

  useEffect(() => {
    if (inView) {
      control.start('visible');
    } else {
      control.start('hidden');
    }
  }, [control, inView]);

  return (
    <motion.div
      ref={ref}
      variants={boxVariant}
      initial='hidden'
      animate={control}
    >
      {content}
    </motion.div>
  );
};

export {ScrollAnimate, ScrollView};
