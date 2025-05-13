/*
 ? https://github.com/Prakhar-002
 ? @copyright Prakhar-002
*/

// icons
import {
  RxCrop,
  RxPencil2,
  RxDesktop,
  RxReader,
  RxRocket,
  RxArrowTopRight
} from "react-icons/rx";


// data
const serviceData = [
  {
    icon: <RxCrop />,
    title: 'Brand Identity',
    description: 'Designing visual styles that perfectly match your brand vision.',
  },
  {
    icon: <RxPencil2 />,
    title: 'UI/UX Design',
    description: 'Creating clean, modern interfaces focused on user-friendly experiences.',
  },
  {
    icon: <RxDesktop />,
    title: 'Web Development',
    description: 'Developing fast, responsive websites using modern web technologies.',
  },
  {
    icon: <RxReader />,
    title: 'Content Creation',
    description: 'Writing engaging content that aligns with your digital goals and desires.',
  },
  {
    icon: <RxRocket />,
    title: 'SEO Optimization',
    description: 'Boosting your website’s visibility with strategic SEO solutions.',
  },
];



// import swiper react components
import { Swiper, SwiperSlide } from 'swiper/react'

// import swiper styles
import 'swiper/css'
import 'swiper/css/free-mode'
import 'swiper/css/pagination'

// import required modules
import { FreeMode, Pagination } from 'swiper'


const ServiceSlider = () => {
  return (
    <Swiper breakpoints={{
      320: {
        slidesPerView: 1,
        spaceBetween: 15,
      },
      640: {
        slidesPerView: 2,
        spaceBetween: 15,
      },
      780: {
        slidesPerView: 3,
        spaceBetween: 15,
      },

    }}

      freeMode={true}
      pagination={{
        clickable: true
      }}
      modules={[FreeMode, Pagination]}
      className="h-[240px] sm:h-[360px]"
    >
      {
        serviceData.map((item, index) => (
          <SwiperSlide key={index}>
            <div className="bg-[rgba(40,33,20,0.2)] h-max rounded-lg px-6 py-8 flex justify-around sm:flex-col gap-x-6 sm:gap-x-0 group cursor-pointer hover:bg-[rgba(60,50,30,0.5)] transition-all duration-300">
              {/* icons */}
              <div className="text-4xl text-accent mb-4">{item.icon}</div>

              {/* title & desc */}
              <div className="mb-8">
                <div className="mb-2 text-lg">{item.title}</div>
                <p className="max-w-[350px] leading-normal">{item.description}</p>
              </div>

              {/* arrow */}
              <div className="text-3xl">
                <RxArrowTopRight className="group-hover:rotate-45 group-hover:text-accent transition-all duration-300" />
              </div>
            </div>
          </SwiperSlide>
        ))
      }
    </Swiper>
  );
};

export default ServiceSlider;
