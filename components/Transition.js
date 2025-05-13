/*
 ? https://github.com/Prakhar-002
 ? @copyright Prakhar-002
*/

// framer motion
import { animate, delay, motion } from "framer-motion";

// Variant
const transitionVariant = {
  initial: {
    x: '100%',
    width: '100%'
  },
  animate: {
    x: '0%',
    width: '0%'
  },
  exit: {
    x: ['0%', '100%'],
    width: ['0%', '100%']
  }
}


const Transition = () => {
  return (
    <>
      {/* Top Layer - Deep Black Gradient */}
      <motion.div
        className="fixed top-0 bottom-0 right-full w-screen h-screen z-50 bg-[#0a0a0a]"
        variants={transitionVariant}
        initial="initial"
        animate="animate"
        exit="exit"
        transition={{ delay: 0.2, duration: 0.6, ease: 'easeInOut' }}
      />

      {/* Middle Layer - Solid Black Shade */}
      <motion.div
        className="fixed top-0 bottom-0 right-full w-screen h-screen z-40 bg-[#1a1a1a]"
        variants={transitionVariant}
        initial="initial"
        animate="animate"
        exit="exit"
        transition={{ delay: 0.4, duration: 0.6, ease: 'easeInOut' }}
      />

      {/* Bottom Layer - Slightly Lighter Black Shade */}
      <motion.div
        className="fixed top-0 bottom-0 right-full w-screen h-screen z-30 bg-[#2a2a2a]"
        variants={transitionVariant}
        initial="initial"
        animate="animate"
        exit="exit"
        transition={{ delay: 0.6, duration: 0.6, ease: 'easeInOut' }}
      />
    </>
  );
};

export default Transition;
