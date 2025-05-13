/*
 ? https://github.com/Prakhar-002
 ? @copyright Prakhar-002
*/

//  next link
import Link from "next/link";

// import 
import {
  RiLinkedinLine,
  RiInstagramLine,
  RiGithubLine,
  RiMailLine,
  RiTwitterLine,
} from 'react-icons/ri'

import { TbBrandLeetcode } from "react-icons/tb";

const Socials = () => {
  return (
    <div className="flex items-center gap-x-5 text-2xl">
      <Link target="_blank" title="Linked in" href={'https://www.linkedin.com/in/prakhar002/'} className="hover:text-accent transition-all duration-300">
        <RiLinkedinLine />
      </Link>
      <Link target="_black" title="Github" href={'https://github.com/Prakhar-002'} className="hover:text-accent transition-all duration-300">
        <RiGithubLine />
      </Link>
      <Link title="Email" href={'mailto:prakhar.katiyar.002@gmail.com'} className="hover:text-accent transition-all duration-300">
        <RiMailLine />
      </Link>
      <Link target="_black" title="Twitter" href={'https://x.com/Prakhar_002'} className="hover:text-accent transition-all duration-300">
        <RiTwitterLine />
      </Link>
      <Link target="_black" title="Instagram" href={'https://github.com/Prakhar-002'} className="hover:text-accent transition-all duration-300">
        <RiInstagramLine />
      </Link>
      <Link target="_black" title="Leetcode" href={'https://leetcode.com/Prakhar-002/'} className="hover:text-accent transition-all duration-300">
        <TbBrandLeetcode />
      </Link>
    </div>
  );
};

export default Socials;
