/*
 ? https://github.com/Prakhar-002
 ? @copyright Prakhar-002
*/

// Next image
import Image from "next/image";

const TopLeftImg = () => {
  return <div className="absolute left-0 top-0 z-0 w-[200px] xl:w-[400px] opacity-30">
    <Image src='/top-left-img.png' width={400} height={400} alt="top left image" />
  </div>;
};

export default TopLeftImg;
