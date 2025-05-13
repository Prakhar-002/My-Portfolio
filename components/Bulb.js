/*
 ? https://github.com/Prakhar-002
 ? @copyright Prakhar-002
*/

import Image from "next/image";

const Bulb = () => {
  return <div className="absolute -left-32 -bottom-14 rotate-12 animate-pulse opacity-80 duration-75 z-10 w-[200px] xl:w-[260px]">
    <Image src={'/bulb.png'} width={260} height={200} className="w-full h-full" alt="bulb" />
  </div>;
};

export default Bulb;
