import React from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import { v4 as uuidv4 } from "uuid";

import "swiper/css";

import Testimonial from "./Testimonial";

export default function TestimonialCarousel(props) {
  const testimonials = props.testimonials;
  return (
    <>
      <Swiper
        slidesPerView={2}
        spaceBetween={30}
        breakpoints={{
          10: {
            slidesPerView: 1,
            spaceBetween: 20,
          },
          768: {
            slidesPerView: 2,
            spaceBetween: 40,
          },
        }}
        className="mySwiper"
      >
        {testimonials.map((testimonial) => {
          return (
            <SwiperSlide key={uuidv4()}>
              <Testimonial
                text={testimonial.text}
                author={testimonial.author}
              />
            </SwiperSlide>
          );
        })}
      </Swiper>
    </>
  );
}
