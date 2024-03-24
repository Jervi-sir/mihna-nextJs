'use client'

import React from 'react';
import { Swiper, SwiperSlide, useSwiper } from 'swiper/react';
import SwiperCore from 'swiper';
import { Navigation, Pagination, Scrollbar, A11y } from 'swiper/modules';

SwiperCore.use([Navigation, Pagination, Scrollbar, A11y]);

export const Suggestions = () => {
  const swiper = useSwiper();

  return (
    <section className="layout-pt-md layout-pb-lg">
      <div className="container">
        <div className="row">
          <div className="col-auto">

            <div className="sectionTitle ">

              <h2 className="sectionTitle__title ">You May Like</h2>

              <p className="sectionTitle__text ">10,000+ unique online course list designs</p>

            </div>

          </div>
        </div>

        <div className="relative pt-60 lg:pt-50">
          <Swiper
            className='overflow-hidden js-section-slider'
            spaceBetween={30}
            slidesPerView={1}
            loop={true}
            navigation={{
              nextEl: '.swiper-button-next',
              prevEl: '.swiper-button-prev',
            }}
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
                <SwiperSlide>
                  <CardComponent />
                </SwiperSlide>
              ))
            }

            {/* Repeat for each slide as necessary */}
          </Swiper>

          <button onClick={() => swiper.slidePrev()} className="section-slider-nav -prev -dark-bg-dark-2 -white -absolute size-70 rounded-full shadow-5 js-courses-prev">
            <i className="icon icon-arrow-left text-24"></i>
          </button>

          <button onClick={() => swiper.slideNext} className="section-slider-nav -next -dark-bg-dark-2 -white -absolute size-70 rounded-full shadow-5 js-courses-next">
            <i className="icon icon-arrow-right text-24"></i>
          </button>

        </div>
      </div>
    </section>

  )
}

const CardComponent = () => {
  return (
    <>
      <a href="courses-single-1.html" className="coursesCard -type-1 ">
        <div className="relative">
          <div className="coursesCard__image overflow-hidden rounded-8">
            <img className="w-1/1" src="/img/coursesCards/1.png" alt="image" />
            <div className="coursesCard__image_overlay rounded-8"></div>
          </div>
          <div className="d-flex justify-between py-10 px-10 absolute-full-center z-3">

          </div>
        </div>

        <div className="h-100 pt-15">
          <div className="d-flex items-center">
            <div className="text-14 lh-1 text-yellow-1 mr-10">4.5</div>
            <div className="d-flex x-gap-5 items-center">
              <div className="icon-star text-9 text-yellow-1"></div>
              <div className="icon-star text-9 text-yellow-1"></div>
              <div className="icon-star text-9 text-yellow-1"></div>
              <div className="icon-star text-9 text-yellow-1"></div>
              <div className="icon-star text-9 text-yellow-1"></div>
            </div>
            <div className="text-13 lh-1 ml-10">(1991)</div>
          </div>

          <div className="text-17 lh-15 fw-500 text-dark-1 mt-10">Learn Figma - UI/UX Design Essential Training</div>

          <div className="d-flex x-gap-10 items-center pt-10">

            <div className="d-flex items-center">
              <div className="mr-8">
                <img src="/img/coursesCards/icons/1.svg" alt="icon" />
              </div>
              <div className="text-14 lh-1">6 lesson</div>
            </div>

            <div className="d-flex items-center">
              <div className="mr-8">
                <img src="/img/coursesCards/icons/2.svg" alt="icon" />
              </div>
              <div className="text-14 lh-1">3h 56m</div>
            </div>

            <div className="d-flex items-center">
              <div className="mr-8">
                <img src="/img/coursesCards/icons/3.svg" alt="icon" />
              </div>
              <div className="text-14 lh-1">Beginner</div>
            </div>

          </div>

          <div className="coursesCard-footer">
            <div className="coursesCard-footer__author">
              <img src="/img/general/avatar-1.png" alt="image" />
              <div>Ali Tufan</div>
            </div>

            <div className="coursesCard-footer__price">
              <div>$179</div>
              <div>$79</div>
            </div>
          </div>
        </div>
      </a>

    </>
  )
}
