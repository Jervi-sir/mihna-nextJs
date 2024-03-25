'use client'

import React from 'react';
import { Swiper, SwiperSlide } from 'swiper/react';
import { Navigation, Pagination, Autoplay } from 'swiper/modules';

import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/pagination';

export const Section6 = () => {
  return (
    <section className="layout-pt-md layout-pb-md">
      <div className="container">
        <div className="row y-gap-20 justify-between items-center">
          <div className="col-lg-6">
            <div className="sectionTitle ">
              <h2 className="sectionTitle__title ">Latest Books</h2>
              <p className="sectionTitle__text ">10,000+ unique online course list designs</p>
            </div>
          </div>
          <div className="col-auto">
            <a href="#" className="button -icon -purple-3 text-purple-1">
              All Courses
              <i className="icon-arrow-top-right text-13 ml-10"></i>
            </a>
          </div>
        </div>

        <div className="pt-60 lg:pt-40">
          <div className="overflow-hidden js-section-slider" data-loop data-gap="30" data-pagination data-slider-cols="xl-6 lg-6 md-4 sm-3 base-2">
            <Swiper
              modules={[Navigation, Pagination, Autoplay]}
              className='overflow-hidden'
              spaceBetween={30}
              slidesPerView={3}
              loop={true}
              navigation={true}
              pagination={{ clickable: true }}
              autoplay={{
                delay: 2000, // Milliseconds between autoplay transitions (2 seconds here)
                disableOnInteraction: false, // Autoplay continues after user interaction
              }}
              breakpoints={{
                640: {
                  slidesPerView: 2,
                },
                768: {
                  slidesPerView: 3,
                },
                1024: {
                  slidesPerView: 5,
                },
              }}
            >
              {/* Swiper slides */}
              {
                [1, 2, 3, 4, 5, 6, 7].map((e, index) => (
                  <SwiperSlide key={index} >
                    <div className="swiper-slide">
                      <div className="">
                        <img className="w-1/1" src="img/books/1.png" alt="book" />
                        <h5 className="text-17 fw-500 mt-15">HTML 5 Maker</h5>

                        <div className="d-flex items-center mt-10">
                          <div className="d-flex x-gap-5">
                            <div className="icon-star text-9 text-yellow-1"></div>
                            <div className="icon-star text-9 text-yellow-1"></div>
                            <div className="icon-star text-9 text-yellow-1"></div>
                            <div className="icon-star text-9 text-yellow-1"></div>
                            <div className="icon-star text-9 text-yellow-1"></div>
                          </div>
                          <div className="text-13 lh-1 ml-10">(1991)</div>
                        </div>

                        <div className="d-flex items-center pt-15">
                          <div className="text-15 lh-1 line-through">$179</div>
                          <div className="text-18 lh-1 text-purple-1 fw-500 ml-10">$79</div>
                        </div>
                      </div>
                    </div>
                  </SwiperSlide>
                ))
              }

              {/* Repeat for each slide as necessary */}
            </Swiper>

            <div className="d-flex x-gap-15 items-center justify-center pt-60 lg:pt-40">
              <div className="col-auto">
                <button className="d-flex items-center text-24 arrow-left-hover js-prev">
                  <i className="icon icon-arrow-left"></i>
                </button>
              </div>
              <div className="col-auto">
                <div className="pagination -arrows js-pagination"></div>
              </div>
              <div className="col-auto">
                <button className="d-flex items-center text-24 arrow-right-hover js-next">
                  <i className="icon icon-arrow-right"></i>
                </button>
              </div>
            </div>

          </div>
        </div>
      </div>
    </section>
  )
}