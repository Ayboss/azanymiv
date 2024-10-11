"use client";
import { Swiper, SwiperSlide } from "swiper/react";
import card1 from "../../public/img/card1.png";
import card2 from "../../public/img/card2.png";
import card3 from "../../public/img/card3.png";
import card4 from "../../public/img/card4.png";
// Import Swiper styles
import "swiper/css";
import Image from "next/image";

function CardSwiper() {
  return (
    <div className="py-[80px] px-4">
      <Swiper
        spaceBetween={50}
        // slidesPerView={4}
        breakpoints={{
          640: {
            slidesPerView: 2,
            spaceBetween: 5,
          },
          768: {
            slidesPerView: 2,
            spaceBetween: 40,
          },
          1024: {
            slidesPerView: 3,
            spaceBetween: 50,
          },
          1240: {
            slidesPerView: 4,
            spaceBetween: 50,
          },
        }}
        onSlideChange={() => console.log("slide change")}
        onSwiper={(swiper) => console.log(swiper)}
      >
        <SwiperSlide>
          <Image src={card1} alt="card" className="w-full" />
        </SwiperSlide>
        <SwiperSlide>
          <Image src={card2} alt="card" className="w-full" />
        </SwiperSlide>
        <SwiperSlide>
          <Image src={card3} alt="card" className="w-full" />
        </SwiperSlide>
        <SwiperSlide>
          <Image src={card4} alt="card" className="w-full" />
        </SwiperSlide>
        <SwiperSlide>
          <Image src={card1} alt="card" className="w-full" />
        </SwiperSlide>
        <SwiperSlide>
          <Image src={card2} alt="card" className="w-full" />
        </SwiperSlide>
        <SwiperSlide>
          <Image src={card3} alt="card" className="w-full" />
        </SwiperSlide>
        <SwiperSlide>
          <Image src={card4} alt="card" className="w-full" />
        </SwiperSlide>
      </Swiper>
    </div>
  );
}

export default CardSwiper;
