'use client'

import React, { useEffect } from 'react';
import { Swiper, SwiperSlide } from 'swiper/react';
import SwiperCore from 'swiper';
import { Navigation, Pagination } from 'swiper/modules';
import { getRandomCourses } from '@/services/courses';

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

export const Section2 = () => {

  useEffect(() => {
    getRandomCourses(5)
      .then(courses => console.log('Random courses:', courses))
      .catch(error => console.error('Error fetching courses:', error));
  }, [])
  return (
    <section className="layout-pt-lg layout-pb-md">
      <div className="container">
        <div className="row y-gap-20 justify-between items-center">
          <div className="col-auto">
            <div className="sectionTitle">
              <h2 className="sectionTitle__title">Top Categories</h2>
              <p className="sectionTitle__text">Lorem ipsum dolor sit amet, consectetur.</p>
            </div>
          </div>
        </div>

        {/* Swiper container */}
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
              <SwiperSlide key={index} style={{ height: '16rem' }}>
              <div className="featureCard -type-1 -featureCard-hover-3">
                <div className="featureCard__content">
                  <div className="featureCard__icon">
                    <img src={ e.image } alt="icon" />
                  </div>
                  <div className="featureCard__title">{ e.title }</div>
                  <div className="featureCard__text">{ e.nb_courses }</div>
                </div>
              </div>
            </SwiperSlide>
            ))
          }
         
          {/* Repeat for each slide as necessary */}
        </Swiper>
      </div>
    </section>
  );

};