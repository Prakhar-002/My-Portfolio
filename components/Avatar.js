/*
 ? https://github.com/Prakhar-002
 ? @copyright Prakhar-002
*/

// next image
import Image from "next/image";

const Avatar = () => {
  return (
    <div className="hidden xl:flex xl:max-w-none">
      <Image  
        src={'/avatar.png'} 
        width={737} 
        height={678} 
        alt="avatar" 
        className="translate-z-0 w-full h-full"/>
    </div>
  );
};

export default Avatar;
