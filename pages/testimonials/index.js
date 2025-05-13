/*
 ? https://github.com/Prakhar-002
 ? @copyright Prakhar-002
*/

// components
import TestimonialSlider from "../../components/TestimonialSlider";
import Circles from "../../components/Circles";

// framer - motion
import { motion } from "framer-motion";

// variants
import { fadeIn } from '../../variants'


const Testimonials = () => {
  return (
    <div className="h-full bg-primary/30 text-center">
      <Circles />
      <div className="container mx-auto h-full flex flex-col justify-center">
        {/* title */}
        <motion.h2
          variants={fadeIn('down', 0.2)}
          initial="hidden"
          animate="show"
          exit="hidden"
          className="h2 my-8 xl:mb-0"
        >
          What client <span className="text-accent">say.</span>
        </motion.h2>

        {/* slider */}
        <motion.div
          variants={fadeIn('up', 0.4)}
          initial="hidden"
          animate="show"
          exit="hidden"
        >
          <TestimonialSlider />
        </motion.div>
      </div>
    </div>
  );
};

export default Testimonials;
