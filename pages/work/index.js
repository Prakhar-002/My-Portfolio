/*
 ? https://github.com/Prakhar-002
 ? @copyright Prakhar-002
*/

// Components
import WorkSlider from '../../components/WorkSlider';
import Bulb from '../../components/Bulb';
import Circles from '../../components/Circles';


// Framer motion
import { motion } from 'framer-motion';
import { fadeIn } from '../../variants';

const Work = () => {
  return (
    <div className='h-full bg-primary/30 py-36 flex items-center'>
      <Circles />
      <div className='container mx-auto'>

        <div className='flex flex-col xl:flex-row gap-x-8'>

          {/* Test */}
          <div className='text-center flex xl:w-[30vw] flex-col lg:text-left mb-4 xl:mb-0'>
            <motion.h2
              variants={fadeIn('up', 0.2)}
              initial="hidden"
              animate="show"
              exit="hidden"
              className='h2 mt-8 xl:mt-12'>My Work <span className='text-accent'>.</span></motion.h2>
            <motion.p
              variants={fadeIn('up', 0.6)}
              initial="hidden"
              animate="show"
              exit="hidden"
              className='mb-4 max-w-[400px] mx-auto sm:hidden xl:flex md:mx-0 lg:mx-0'>I build modern, responsive websites and full-stack applications using the MERN stack, Next.js, and Framer Motion — combining performance, clean UI, and rich user interactions to deliver seamless digital experiences aligned with your brand’s goals.</motion.p>
          </div>

          {/* slider */}
          <motion.div
            variants={fadeIn('down', 0.6)}
            initial="hidden"
            animate="show"
            exit="hidden"
            className='w-full xl:max-w-[65%]'>
            <WorkSlider />
          </motion.div>

        </div>

      </div>
      <Bulb />
    </div>
  );
};

export default Work;
