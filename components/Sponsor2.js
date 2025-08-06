import React from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/pagination";
import { Autoplay } from "swiper";
import styles from "../styles/style.module.css";
import gradients from "../styles/customGradient.module.css";
import cool from "../styles/track.module.css";

const sponsors = [
  {
    name: "JV Micronics",
    img: "/Logo-JV-Micronics.png",
  },
  {
    name: "NUMEREGION's TaraNG",
    img: "/6_Bronze-2.png",
  },
  {
    name: "VVDN Technologies",
    img: "/vvdn-logo.png",
  },
  {
  name:"Mine Instruments Pvt Ltd",
  img:"/mine-electronics-2.png"
}
  // Add more sponsors here
  
];
const SilverSponsor = [
  {
    name: "VVDN Technologies",
    img: "/vvdn-logo.png",
  },
];

const BronzeSponsor=[{
  name:"Mine Instruments Pvt Ltd",
  img:"/mine-electronics-2.png"
}]

const SponsorsSection = () => {
  return (
    <div className=" p-2 mx-2 md:mx-8">
     
      <div
        className={` bg-blue  rounded-lg flex flex-col justify-center items-center `}
      >
       
        <div className="w-full flex justify-center items-center mt-4">
          <Swiper
            slidesPerView={1}
            spaceBetween={30}
            centeredSlides={true}
            loop={true}
            autoplay={{
              delay: 2000,
              disableOnInteraction: false,
            }}
            modules={[Autoplay]}
            className="mySwiper w-[90%] md:w-[70%] h-[100px] lg:h-[300px] bg-blue rounded-lg"
          >
            {sponsors.map((sponsor, index) => (
              <SwiperSlide
                key={index}
                className="text-center text-xl flex flex-col justify-center items-center"
              >
                <div className="w-[150px] md:w-[200px] h-[100px] md:h-[200px] flex justify-center items-center ">
                  <img
                    src={sponsor.img}
                    alt={sponsor.name}
                    className={`${styles.responsive} l` }
                  />
                </div>
                
              </SwiperSlide>
            ))}
          </Swiper>
        </div>
      </div>
      {/* <div
        className={`mt-16 bg-stone-100 shadow-inner rounded-lg flex flex-col justify-center items-center ${cool.coolHover} p-6`}
      >
        <h1 className="text-center font-extrabold text-2xl tracking-wide leading-relaxed md:text-3xl pt-2 text-cyan-600">
          Bronze
        </h1>
        <div className="w-full flex justify-center items-center mt-4">
          <Swiper
            slidesPerView={1}
            spaceBetween={30}
            centeredSlides={true}
            loop={true}
            autoplay={{
              delay: 2000,
              disableOnInteraction: false,
            }}
            modules={[Autoplay]}
            className="mySwiper w-[90%] md:w-[70%] h-[200px] lg:h-[300px] bg-white rounded-lg"
          >
            {BronzeSponsor.map((sponsor, index) => (
              <SwiperSlide
                key={index}
                className="text-center text-xl flex flex-col justify-center items-center"
              >
                <div className="w-[150px] md:w-[200px] h-[150px] md:h-[200px] flex justify-center items-center p-2">
                  <img
                    src={sponsor.img}
                    alt={sponsor.name}
                    className={`${styles.responsive}`}
                  />
                </div>
                <p className="px-2 text-center text-lg md:text-xl font-semibold pt-2">
                  {sponsor.name}
                </p>
              </SwiperSlide>
            ))}
          </Swiper>
        </div>
      </div> */}
    </div>
  );
};

export default SponsorsSection;
