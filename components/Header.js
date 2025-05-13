/*
 ? https://github.com/Prakhar-002
 ? @copyright Prakhar-002
*/

// next image
import Image from "next/image";

// Next link
import Link from "next/link";

// components
import Socials from '../components/Socials'

const Header = () => {
  return (
    <header className="absolute z-30 w-full flex items-center px-16 xl:px-0 xl:h-[90px]">
      <div className="container mx-auto">
        <div className="flex flex-col lg:flex-row justify-between items-center gap-y-5 py-4">
          {/* logo */}
          <Link href={'/'}>
            {/* <Image
              src={'/prakhar-logo.png'}
              width={220}
              height={48}
              priority={true}
            /> */}
            <h2 className="text-[30px]">
              Prakhar <span className="text-white/70 font-extralight">Katiyar</span> <span className="text-accent">.</span>
            </h2>
          </Link>

          {/* Socials */}
          <Socials />
        </div>
      </div>
    </header>
  );
};

export default Header;
