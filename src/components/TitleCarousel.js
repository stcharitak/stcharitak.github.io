import React from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import { Autoplay, EffectCube } from "swiper";
import { v4 as uuidv4 } from "uuid";

import "swiper/css";
import "swiper/css/effect-cube";

export default function TitleCarousel(props) {
  return (
    <Swiper
      effect={"cube"}
      grabCursor={true}
      loop={true}
      autoplay={{
        delay: 5000,
        disableOnInteraction: false,
      }}
      cubeEffect={{
        shadow: false,
        slideShadows: false,
      }}
      pagination={false}
      modules={[EffectCube, Autoplay]}
      className="mySwiper"
    >
      {props.titles.map((title) => {
        return (
          <SwiperSlide key={uuidv4()}>
            <h4>{title}</h4>
          </SwiperSlide>
        );
      })}
    </Swiper>
  );
}
