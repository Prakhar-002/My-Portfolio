/*
 ? https://github.com/Prakhar-002
 ? @copyright Prakhar-002
*/


// data
const workSlides = {
  slides: [
    {
      images: [
        {
          title: 'Photographer Portfolio',
          path: '/PhotographerProtfolio.jpg',
          gradient: 'from-transparent via-[#96694b] to-[#0f0f10]',
          link: 'https://github.com/Prakhar-002/Photographer-Portfolio',
        },
        {
          title: 'Cook.io',
          path: '/Cook.io.jpg',
          gradient: 'from-transparent via-[#6b2819] to-[#0f0f10]',
          link: 'https://github.com/Prakhar-002/Cook.io-The-Recipe-App',
        },
        {
          title: 'Tvflix',
          path: '/Tvflix.jpg',
          gradient: 'from-transparent via-[#452829] to-[#0f0f10]',
          link: 'https://github.com/Prakhar-002/TVFLIX',
        },
        {
          title: 'Inktale',
          path: '/Inktale.jpg',
          gradient: 'from-transparent via-[#173e72] to-[#0f0f10]',
          link: 'https://github.com/Prakhar-002/INKTALE-The-Blog-Site',
        },
      ],
    },
    {
      images: [
        {
          title: 'Phoenix',
          path: '/Phoenix.jpg',
          gradient: 'from-transparent via-[#125552] to-[#0f0f10]',
          link: 'https://github.com/Prakhar-002/PHOENIX',
        },
        {
          title: 'Wanderlust',
          path: '/Wanderlust.jpg',
          gradient: 'from-transparent via-[#694444] to-[#0f0f10]',
          link: 'https://github.com/Prakhar-002/WANDERLUST',
        },
        {
          title: 'Grilli',
          path: '/Grilli.jpg',
          gradient: 'from-transparent via-[#938558] to-[#0f0f10]',
          link: 'https://github.com/Prakhar-002/GRILLI-The-Food-App',
        },
        {
          title: 'Pixstock',
          path: '/Pixstock.jpg',
          gradient: 'from-transparent via-[#125552] to-[#0f0f10]',
          link: 'https://github.com/Prakhar-002/PIXSTOCK',
        },
      ],
    },
    {
      images: [
        {
          title: 'Devfolio',
          path: '/devfolio.jpg',
          gradient: 'from-transparent via-[#260148] to-[#0f0f10]',
          link: 'https://github.com/Prakhar-002/Devfolio',
        },
        {
          title: 'React Monster Course',
          path: '/react.jpg',
          gradient: 'from-transparent via-[#0f3724] to-[#0f0f10]',
          link: 'https://github.com/Prakhar-002/React-Monster-Course',
        },
        {
          title: 'Leetcode',
          path: '/Leetcode.jpg',
          gradient: 'from-transparent via-[#857433] to-[#0f0f10]',
          link: 'https://github.com/Prakhar-002/LEETCODE',
        },
        {
          title: 'Next.js',
          path: '/next.jpg',
          gradient: 'from-transparent via-[#4c71ae] to-[#0f0f10]',
          link: 'https://github.com/Prakhar-002/Next.js',
        },
      ],
    },
    {
      images: [
        {
          title: 'Java',
          path: '/Java.jpg',
          gradient: 'from-transparent via-[#5a1b56] to-[#0f0f10]',
          link: 'https://github.com/Prakhar-002/JAVA-CODE',
        },
        {
          title: 'Pandas',
          path: '/Pandas.jpg',
          gradient: 'from-transparent via-[#2d2f48] to-[#0f0f10]',
          link: 'https://github.com/Prakhar-002/PANDAS-NUMPY',
        },
        {
          title: 'The Burger King',
          path: '/BurgerKing.jpg',
          gradient: 'from-transparent via-[#c28d61] to-[#0f0f10]',
          link: 'https://github.com/Prakhar-002/GrillBurger',
        },
        {
          title: '3D Animation',
          path: '/3DAnimation.jpg',
          gradient: 'from-transparent via-[#4f3d3c] to-[#0f0f10]',
          link: 'https://github.com/Prakhar-002/3D-Animation-Site',
        },
      ],
    },
  ],
};


// import swiper react components
import { Swiper, SwiperSlide } from 'swiper/react'

// import swiper styles
import 'swiper/css'
import 'swiper/css/free-mode'
import 'swiper/css/pagination'

// import required modules
import { Pagination } from 'swiper'


// icons
import { BsArrowRight } from 'react-icons/bs'
// next image
import Image from 'next/image';
import Link from 'next/link';

const WorkSlider = () => {
  return (
    <Swiper

      spaceBetween={10}

      freeMode={true}
      pagination={{
        clickable: true
      }}
      modules={[Pagination]}
      className="h-[280px] sm:h-[480px]"
    >
      {
        workSlides.slides.map((slide, index) => (
          <SwiperSlide key={index}>
            <div className="grid grid-cols-2 grid-rows-4 gap-4 cursor-pointer">
              {slide.images.map((image, index) => (
                <div key={index} className="relative rounded-lg overflow-hidden flex items-center justify-center group">
                  <div className="relative flex items-center justify-center overflow-hidden group">
                    {/* Image with object-fit to handle different aspect ratios */}
                    <Image
                      src={image.path}
                      width={500}
                      height={300}
                      alt={image.title}
                      className="object-cover w-full h-full"
                    />
                    {/* Overlay gradient */}
                    <Link href={image.link} target="_black">
                      <div className={`absolute inset-0 bg-gradient-to-l ${image.gradient} opacity-0 group-hover:opacity-90 transition-all duration-700`} ></div>
                    </Link>
                    {/* Title */}
                    <div className="absolute bottom-0 translate-y-full group-hover:-translate-y-8 sm:group-hover:-translate-y-14 lg:group-hover:-translate-y-20 transition-all duration-300">
                      <div className="flex items-center gap-x-2 text-[13px] tracking-[0.2em]">
                        {/* Title part 1 */}
                        <div className="delay-100">LIVE</div>
                        {/* Title part 2 */}
                        <div className="translate-y-[500%] group-hover:translate-y-0 transition-all duration-300 delay-150">PROJECT</div>
                        {/* Icon */}
                        <div className="text-xl translate-y-[500%] group-hover:translate-y-0 transition-all duration-300 delay-200">
                          <BsArrowRight />
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </SwiperSlide>

        ))
      }
    </Swiper>
  );
};

export default WorkSlider;
