import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import { Autoplay } from "swiper";
import { motion } from "framer-motion";

export default function HomeImageGallery() {
  return (
    <>
      <Swiper
        spaceBetween={0}
        centeredSlides={true}
        loop={true}
        autoplay={{
          delay: 4500,
          disableOnInteraction: false,
        }}
        navigation={false}
        modules={[Autoplay]}
        className="mySwiper bg-stone-500 text-center w-full h-[60vh] md:h-full"
      >
        {[...Array(8)].map((_, i) => (
          <SwiperSlide key={i}>
            <div className="w-full h-full overflow-hidden">
              <motion.img
                initial={{ scale: 1 }}
                animate={{ scale: 1.4 }}
                transition={{
                  duration: 20,
                  repeat: Infinity,
                  repeatType: "reverse",
                  ease: "linear",
                }}
                src={`/p${i + 1}.jpg`}
                className="w-full h-full brightness-75 object-cover"
                alt={`Gallery image ${i + 1}`}
              />
            </div>
          </SwiperSlide>
        ))}
      </Swiper>
    </>
  );
}
