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
    <div className="mt-8 p-2 mx-2 md:mx-8">
      <h1 className="font-extrabold text-4xl md:text-5xl text-center dark:text-gray-100">
        <span className="border-b-4 border-orange-500 dark:border-orange-400 px-0 md:px-8 pb-2">
          Our <span style={{ color: "#0000FF" }}>  Sponsors</span>
        </span>
      </h1>
      <div
        className={`mt-16 bg-gradient-to-r from-indigo-200 via-blue-300 to-blue-200 dark:from-gray-800 dark:via-gray-700 dark:to-gray-800 shadow-inner dark:shadow-gray-900/50 rounded-lg flex flex-col justify-center items-center ${cool.coolHover} p-6`}
      >
        <h1 className="text-center font-extrabold text-2xl tracking-wide leading-relaxed md:text-3xl pt-2 text-cyan-600 dark:text-cyan-400">
          Diamond
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
            className="mySwiper w-[90%] md:w-[70%] h-[200px] lg:h-[300px]  rounded-lg"
          >
            {sponsors.map((sponsor, index) => (
              <SwiperSlide
                key={index}
                className="text-center text-xl flex flex-col justify-center items-center"
              >
                <div className="w-[150px] md:w-[200px] h-[150px] md:h-[200px] flex justify-center items-center p-2">
                  <img
                    src={sponsor.img}
                    alt={sponsor.name}
                    className={`${styles.responsive} dark:opacity-90`}
                  />
                </div>
                <p className="px-2 text-center text-lg md:text-xl font-semibold pt-2 dark:text-gray-200">
                  {sponsor.name}
                </p>
              </SwiperSlide>
            ))}
          </Swiper>
        </div>
      </div>
      <div
        className={`mt-16 shadow-inner dark:shadow-gray-900/50 rounded-lg flex flex-col justify-center items-center ${cool.coolHover} p-6 dark:bg-gray-800`}
      >
        <h1 className="text-center font-extrabold text-2xl tracking-wide leading-relaxed md:text-3xl pt-2 text-cyan-600 dark:text-cyan-400">
          Silver
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
            className="mySwiper w-[90%] md:w-[70%] h-[200px] lg:h-[300px]  rounded-lg"
          >
            {SilverSponsor.map((sponsor, index) => (
              <SwiperSlide
                key={index}
                className="text-center text-xl flex flex-col justify-center items-center"
              >
                <div className="w-[150px] md:w-[200px] h-[150px] md:h-[200px] flex justify-center items-center p-2">
                  <img
                    src={sponsor.img}
                    alt={sponsor.name}
                    className={`${styles.responsive} dark:opacity-90`}
                  />
                </div>
                <p className="px-2 text-center text-lg md:text-xl font-semibold pt-2 dark:text-gray-200">
                  {sponsor.name}
                </p>
              </SwiperSlide>
            ))}
          </Swiper>
        </div>
      </div>

      <div
        className={`mt-16 bg-gradient-to-r from-indigo-200 via-blue-300 to-blue-200 dark:from-gray-800 dark:via-gray-700 dark:to-gray-800 shadow-inner dark:shadow-gray-900/50 rounded-lg flex flex-col justify-center items-center ${cool.coolHover} p-6`}
      >
        <h1 className="text-center font-extrabold text-2xl tracking-wide leading-relaxed md:text-3xl pt-2 text-cyan-600 dark:text-cyan-400">
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
            className="mySwiper w-[90%] md:w-[70%] h-[200px] lg:h-[300px] rounded-lg"
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
                    className={`${styles.responsive} dark:opacity-90`}
                  />
                </div>
                <p className="px-2 text-center text-lg md:text-xl font-semibold pt-2 dark:text-gray-200">
                  {sponsor.name}
                </p>
              </SwiperSlide>
            ))}
          </Swiper>
        </div>
      </div>
    </div>
  );
};

export default SponsorsSection;
