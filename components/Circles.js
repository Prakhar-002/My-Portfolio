/*
 ? https://github.com/Prakhar-002
 ? @copyright Prakhar-002
*/

// next imag
import Image from "next/image";

const Circles = () => {
  return (
    <div className="w-[200px] xl:w-[300px] absolute -right-16 -bottom-2  animate-pulse duration-75 opacity-30 z-10">
      <Image
        src={'/circles.png'}
        width={260}
        height={200}
        className="w-full h-full"
        alt="circle image"
      />
    </div>
  );
};

export default Circles;
