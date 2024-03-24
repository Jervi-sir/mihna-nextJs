'use client'
import React from 'react';
import { Swiper, SwiperSlide } from 'swiper/react';
import SwiperCore from 'swiper';
import 'swiper/css';
import 'swiper/css/pagination';
import 'swiper/css/navigation';
import { Navigation, Pagination } from 'swiper/modules';

SwiperCore.use([Pagination, Navigation]);

export const Section8 = () => {
  const testimonials = [
    {
      id: 1,
      text: 'It is no exaggeration to say this Educrat experience was transformative–both professionally and personally. This workshop will long remain a high point of my life.',
      author: 'Ali Tufan',
      position: 'Product Manager, Apple Inc',
      image: 'img/home-3/testimonials/1.png'
    }, {
      id: 2,
      text: 'Iweto say this Educrat experience was transformative–both professionally and personally. This workshop will long remain a high point of my life.',
      author: 'Ali Tufan',
      position: 'Product Manager, Apple Inc',
      image: 'img/home-3/testimonials/1.png'
    },
    // Repeat for other testimonials
  ];

  return (
    <section className="layout-pt-md layout-pb-lg">
      <div className="container">
        <div className="row y-gap-20 justify-center text-center">
          <div className="col-auto">
            <div className="sectionTitle ">
              <h2 className="sectionTitle__title ">Testimonials</h2>
              <p className="sectionTitle__text ">10,000+ unique online course list designs</p>
            </div>
          </div>
        </div>

        <div className="row justify-center pt-60">
          <div className="col-xl-6 col-lg-8 col-md-10">
            <Swiper
              spaceBetween={30}
              pagination={{
                clickable: true,
                //renderBullet: (index, className) => {
                 // return `<div className="${className} pagination__item"><img src="${testimonials[index].image}" alt="image" /></div>`;
                //},
              }}
              modules={[Pagination]}
              className="mySwiper"
            >
              {testimonials.map((testimonial) => (
                <SwiperSlide key={testimonial.id}>
                  <div className="testimonials -type-2 text-center">
                    <div className="testimonials__icon">
                      <img src="img/misc/quote.svg" alt="quote" />
                    </div>
                    <div className="testimonials__text md:text-20 fw-500 text-dark-1">{testimonial.text}</div>
                    <div className="testimonials__author">
                      <h5 className="text-17 lh-15 fw-500">{testimonial.author}</h5>
                      <div className="mt-5">{testimonial.position}</div>
                    </div>
                  </div>
                </SwiperSlide>
              ))}
            </Swiper>
          </div>
        </div>
      </div>
    </section>
  )
}