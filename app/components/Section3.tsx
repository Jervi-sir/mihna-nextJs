'use client'

import React from 'react';
import { Swiper, SwiperSlide } from 'swiper/react';
import SwiperCore from 'swiper';
import { Navigation, Pagination } from 'swiper/modules';

SwiperCore.use([Navigation, Pagination]);

const cards = [
  {
    image: 'img/featureCards/1.svg',
    title: 'Design Creative',
    nb_courses: '573+ Courses',
  }, {
    image: 'img/featureCards/2.svg',
    title: 'Sales Marketing',
    nb_courses: '573+ Courses',
  }, {
    image: 'img/featureCards/3.svg',
    title: 'Development IT',
    nb_courses: '573+ Courses',
  }, {
    image: 'img/featureCards/4.svg',
    title: 'Development IT',
    nb_courses: '573+ Courses',
  }, {
    image: 'img/featureCards/5.svg',
    title: 'Personal Development',
    nb_courses: '573+ Courses',
  }, {
    image: 'img/featureCards/6.svg',
    title: 'Finance Accounting',
    nb_courses: '573+ Courses',
  },
]

export const Section3 = () => {
  return (
    <section className="layout-pt-md layout-pb-md">
      <div className="container">
        <div className="tabs -pills">
          <div className="row y-gap-20 justify-between items-end">
            <div className="col-auto">
              <div className="sectionTitle">
                <h2 className="sectionTitle__title">Explore Featured Courses</h2>
                <p className="sectionTitle__text">10,000+ unique online course list designs</p>
              </div>
            </div>

            <div className="col-auto">
              <div className="tabs__controls d-flex justify-center x-gap-10">
                <div>
                  <button className="tabs__button px-20 py-8 rounded-200 -dark-text-white js-tabs-button is-active" data-tab-target=".-tab-item-1" type="button">All</button>
                </div>
              </div>
            </div>
          </div>

          <div className="tabs__content pt-60 lg:pt-50 js-tabs-content">

            <div className="tabs__pane -tab-item-1 is-active">
              <div className="overflow-hidden js-section-slider" data-gap="30" data-slider-cols="xl-4 lg-3 md-2 sm-2">
                <Swiper
                  className='overflow-hidden'
                  spaceBetween={30}
                  slidesPerView={3}
                  loop={true}
                  navigation={{
                    nextEl: '.swiper-button-next',
                    prevEl: '.swiper-button-prev',
                  }}
                  pagination={{
                    el: '.swiper-pagination',
                    clickable: true,
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
                    cards.map((e, index) => (
                      <SwiperSlide key={index} >
                        <CardComponent />
                      </SwiperSlide>
                    ))
                  }
                
                  {/* Repeat for each slide as necessary */}
                </Swiper>


                <button className="section-slider-nav -prev -dark-bg-dark-2 -white -absolute size-70 rounded-full shadow-5 js-prev">
                  <i className="icon icon-arrow-left text-24"></i>
                </button>

                <button className="section-slider-nav -next -dark-bg-dark-2 -white -absolute size-70 rounded-full shadow-5 js-next">
                  <i className="icon icon-arrow-right text-24"></i>
                </button>

              </div>
            </div>

          </div>
        </div>
      </div>
    </section>
  )
}

const CardComponent = () => {
  return (
    <div className='is-in-view'>
      <a href="courses-single-1.html" className="coursesCard -type-1 ">
        <div className="relative">
          <div className="coursesCard__image overflow-hidden rounded-8">
            <img className="w-1/1" src="img/coursesCards/3.png" alt="image" />
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

          <div className="text-17 lh-15 fw-500 text-dark-1 mt-10">Angular - The Complete Guide (2022 Edition)</div>

          <div className="d-flex x-gap-10 items-center pt-10">

            <div className="d-flex items-center">
              <div className="mr-8">
                <img src="img/coursesCards/icons/1.svg" alt="icon" />
              </div>
              <div className="text-14 lh-1">6 lesson</div>
            </div>

            <div className="d-flex items-center">
              <div className="mr-8">
                <img src="img/coursesCards/icons/2.svg" alt="icon" />
              </div>
              <div className="text-14 lh-1">3h 56m</div>
            </div>

            <div className="d-flex items-center">
              <div className="mr-8">
                <img src="img/coursesCards/icons/3.svg" alt="icon" />
              </div>
              <div className="text-14 lh-1">Beginner</div>
            </div>

          </div>

          <div className="coursesCard-footer">
            <div className="coursesCard-footer__author">
              <img src="img/general/avatar-1.png" alt="image" />
              <div>Ali Tufan</div>
            </div>

            <div className="coursesCard-footer__price">
              <div>$179</div>
              <div>$79</div>
            </div>
          </div>
        </div>
      </a>

    </div>
  )
}