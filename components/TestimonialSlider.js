/*
 ? https://github.com/Prakhar-002
 ? @copyright Prakhar-002
*/


// testimonial data
const testimonialData = [
  {
    image: '/t-avt-1.png',
    name: 'Sophia Turner',
    position: 'Product Manager at NovaTech',
    message:
      "Their ability to translate our vision into a functional, modern web app was outstanding. The final product boosted user engagement by 40% within the first month.",
  },
  {
    image: '/t-avt-2.png',
    name: 'Liam Mitchell',
    position: 'Founder at Creatix Studio',
    message:
      "Clean code, smooth animations, and a flawless user interface — everything was delivered on time and beyond expectations. This team is truly world-class.",
  },
  {
    image: '/t-avt-3.png',
    name: 'Isabella Reyes',
    position: 'Marketing Director at BloomEdge',
    message:
      "Our digital campaign needed a sleek landing page, and what we got was a high-performing, responsive design that drove a 3x increase in lead conversions. Outstanding work!",
  },
  {
    image: '/t-avt-4.jpg',
    name: 'Kakashi Hatake',
    position: 'UX Designer at WaveMotion',
    message:
      "The collaboration was seamless, and the UI decisions made were both visually appealing and user-centered. It elevated the whole product experience.",
  },
  {
    image: '/t-avt-5.jpg',
    name: 'Ava Collins',
    position: 'Entrepreneur & Content Creator',
    message:
      "They helped me rebrand my personal website with a minimal, interactive layout that perfectly matches my vibe. Super friendly and professional throughout.",
  },
];


// import swiper react components
import { Swiper, SwiperSlide } from 'swiper/react'

// import swiper styles
import 'swiper/css'
import 'swiper/css/navigation'
import 'swiper/css/pagination'

// import required modules
import { Navigation, Pagination } from 'swiper'


// icons
import { FaQuoteLeft } from 'react-icons/fa'
// next image
import Image from 'next/image';

const TestimonialSlider = () => {
  return (
    <Swiper

      navigation={true}
      pagination={{
        clickable: true
      }}
      modules={[Navigation, Pagination]}
      className="h-[400px]"
    >
      {
        testimonialData.map((person, index) => (
          <SwiperSlide key={index}>
            <div className='flex flex-col items-center md:flex-row gap-x-0 h-full px-16'>
              {/* avatar, name, position */}
              <div className='w-full max-w-[300px] flex flex-col xl:justify-center items-center relative mx-auto xl:mx-0'>
                <div className='flex flex-col justify-center text-center'>
                  {/* avatar */}
                  <div className='mb-2 mx-auto'>
                    <Image className='rounded-full' src={person.image} width={100} height={100} alt={person.name} />
                  </div>
                  {/* name */}
                  <div className='text-lg'>{person.name}</div>
                  {/* position */}
                  <div className='text-[12px] uppercase text-white/50'>{person.position}</div>
                </div>
              </div>

              {/* quote & message */}
              <div className=' flex-1 flex flex-col justify-center before:w-[1px] xl:before:bg-white/20 xl:before:absolute xl:before:left-0 xl:before:h-[200px] relative xl:pl-20'>
                {/* quote & icon */}
                <div className='mb-4'>
                  <FaQuoteLeft className='text-4xl xl:text-6xl text-white/20 mx-auto md:mx-0' />
                </div>
                {/* message */}
                <div className='xl:text-lg text-center md:text-left'>{person.message}</div>
              </div>
            </div>
          </SwiperSlide>
        ))
      }
    </Swiper>
  );
};

export default TestimonialSlider;
