'use client'
import React, { useEffect } from 'react';
import { motion } from 'framer-motion';


export const Section5 = () => {
  const slideLeftAnimation = {
    initial: { x: -100, opacity: 0 },
    animate: { x: 0, opacity: 1 },
    transition: { duration: 1 }
  };

  return (
    <section className="layout-pt-md layout-pb-md">
      <div className="container">
        <motion.div className="row y-gap-20 justify-between items-center"
          initial={slideLeftAnimation.initial}
          animate={slideLeftAnimation.animate}
          transition={slideLeftAnimation.transition}>
          <div className="col-lg-6">
            <div className="sectionTitle ">
              <h2 className="sectionTitle__title ">Learn from the best instructors</h2>
              <p className="sectionTitle__text ">Lorem ipsum dolor sit amet, consectetur.</p>
            </div>
            </div>
            <div className="col-auto">
              <a href="instructors-list-1.html" className="button -icon -purple-3 text-purple-1">
                View All Instructors
                <i className="icon-arrow-top-right text-13 ml-10"></i>
              </a>
            </div>
        </motion.div>
        <div className="row y-gap-30 pt-50">
          {
            [1, 2, 3, 4].map((e, index) => (
              <motion.div 
                key={index}
                className="col-lg-3 col-sm-6"
                initial={{ ...slideLeftAnimation.initial}}
                animate={slideLeftAnimation.animate}
                transition={{ ...slideLeftAnimation.transition, delay: 0.2 * index }}
              >
                <div className="teamCard -type-1 -teamCard-hover">
                  <div className="teamCard__image">
                    <img src="img/team/1.png" alt="image" />
                    <div className="teamCard__socials">
                      <div className="d-flex x-gap-20 y-gap-10 justify-center items-center h-100">
                        <a href="#"><i className="icon-facebook text-white"></i></a>
                        <a href="#"><i className="icon-twitter text-white"></i></a>
                        <a href="#"><i className="icon-instagram text-white"></i></a>
                        <a href="#"><i className="icon-linkedin text-white"></i></a>
                      </div>
                    </div>
                  </div>
                  <div className="teamCard__content">
                    <h4 className="teamCard__title">Floyd Miles</h4>
                    <p className="teamCard__text">President of Sales</p>

                    <div className="row items-center y-gap-10 x-gap-10 pt-10">
                      <div className="col-auto">
                        <div className="d-flex items-center">
                          <div className="icon-star text-yellow-1 text-11 mr-5"></div>
                          <div className="text-14 lh-12 text-yellow-1 fw-500">4.5</div>
                        </div>
                      </div>

                      <div className="col-auto">
                        <div className="d-flex items-center">
                          <div className="icon-online-learning text-light-1 text-11 mr-5"></div>
                          <div className="text-14 lh-12">692 Students</div>
                        </div>
                      </div>

                      <div className="col-auto">
                        <div className="d-flex items-center">
                          <div className="icon-play text-light-1 text-11 mr-5"></div>
                          <div className="text-14 lh-12">15 Course</div>
                        </div>
                      </div>

                    </div>
                  </div>
                </div>
              </motion.div>
            ))
          }
        </div>
        <div className="row justify-center text-center pt-60 lg:pt-40">
          <div className="col-auto">
            <p className="lh-1">Want to help people learn, grow and achieve more in life? <a className="text-purple-1 underline" href="instructors-become.html">Become an instructor</a></p>
          </div>
        </div>
      </div>
    </section>
  )
}