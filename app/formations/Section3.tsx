'use client'
import { useState } from "react";

export const Section3 = () => {
  return (
    <>
      <section className="layout-pt-md layout-pb-md">
        <div className="container">
          <div className="row">
            <div className="col-auto">
              <h2 className="text-24 lh-12">All User Interface courses</h2>
            </div>
          </div>

          <div className="row y-gap-50 pt-60">
            <div className="col-xl-3 col-lg-4 lg:d-none">
              <div className="pr-30 lg:pr-0">

                <div className="sidebar -courses">
                  <LeftFilter title="Category" />
                  <LeftFilter title="Instructors" />
                  <LeftFilter title="Price" isRadio={true} />
                  <LeftFilter title="Level" />
                  <LeftFilter title="Duration" />

                </div>

              </div>
            </div>

            <div className="col-xl-9 col-lg-8">
              <div className="accordion js-accordion">
                <div className="accordion__item">
                  <div className="row y-gap-20 items-center justify-between pb-30">
                    <div className="col-auto">
                      <div className="text-14 lh-12">Showing <span className="text-dark-1 fw-500">250</span> total results</div>
                    </div>

                    <div className="col-auto">
                      <div className="row x-gap-20 y-gap-20">
                        <div className="col-auto">
                          <div className="d-flex items-center">
                            <div className="text-14 lh-12 fw-500 text-dark-1 mr-20">Sort by:</div>

                            <div className="dropdown js-dropdown js-category-active">
                              <div className="dropdown__button d-flex items-center text-14 rounded-8 px-20 py-10 text-14 lh-12" data-el-toggle=".js-category-toggle" data-el-toggle-active=".js-category-active">
                                <span className="js-dropdown-title">Most Popular</span>
                                <i className="icon text-9 ml-40 icon-chevron-down"></i>
                              </div>

                              <div className="toggle-element -dropdown -dark-bg-dark-2 -dark-border-white-10 js-click-dropdown js-category-toggle">
                                <div className="text-14 y-gap-15 js-dropdown-list">

                                  <div><a href="#" className="d-block js-dropdown-link">Animation</a></div>

                                  <div><a href="#" className="d-block js-dropdown-link">Design</a></div>

                                  <div><a href="#" className="d-block js-dropdown-link">Illustration</a></div>

                                  <div><a href="#" className="d-block js-dropdown-link">Business</a></div>

                                </div>
                              </div>
                            </div>

                          </div>
                        </div>

                        <div className="col-auto sm:block lg:hidden xl:hidden">
                          <div className="accordion__button w-unset">
                            <button className="button h-50 px-30 -light-7 text-purple-1">
                              <i className="icon-filter mr-10"></i>
                              Filter
                            </button>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>

                  <div className="accordion__content d-none lg:d-block">
                    <div className="sidebar -courses px-30 py-30 rounded-8 bg-light-3 mb-50">
                      <div className="row x-gap-60 y-gap-40">

                        <RightFilter title="Category" />
                        <RightFilter title="Instructors" />
                        <RightFilter title="Price" isRadio={true} />
                        <RightFilter title="Level" />
                        <RightFilter title="Duration" />

                      </div>
                    </div>
                  </div>
                </div>
              </div>

              <div className="row y-gap-60">
                {
                  [1,1,1,1,1].map((e, index) => (
                    <CardHorizontal key={index} />
                  ))
                }
              </div>
              
              {/* Pagination */}
              <div className="row justify-center pt-90 lg:pt-50">
                <div className="col-auto">
                  <div className="pagination -buttons">
                    <button className="pagination__button -prev">
                      <i className="icon icon-chevron-left"></i>
                    </button>

                    <div className="pagination__count">
                      <a href="#">1</a>
                      <a className="-count-is-active" href="#">2</a>
                      <a href="#">3</a>
                      <span>...</span>
                      <a href="#">67</a>
                    </div>

                    <button className="pagination__button -next">
                      <i className="icon icon-chevron-right"></i>
                    </button>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
};

const CardHorizontal = () => {
  return (
    <>

      <div className="col-12 border-bottom-light">
        <a href="courses-single-1.html" className="coursesCard -type-1 row y-gap-20 flex-row items-center">
          <div className="col-xl-4">
            <div className="coursesCard__image rounded-8 relative">
              <img className="w-1/1 rounded-8" src="img/coursesCards/1.png" alt="image" />
              <div className="coursesCard__image_overlay rounded-8"></div>
            </div>
          </div>

          <div className="col">
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
            <div className="mt-8">Introductory course on web hosting, domain registration, and how you can easily publish and edit your website online.</div>

            <div className="row x-gap-10 y-gap-10 items-center pt-10">
              <div className="col-auto">
                <div className="d-flex items-center">
                  <img src="img/general/avatar-1.png" alt="image" />
                  <div className="ml-10">Ali Tufan</div>
                </div>
              </div>

              <div className="col-auto">
                <div className="d-flex items-center">
                  <img className="mr-8" src="img/coursesCards/icons/1.svg" alt="icon" />
                  <div className="text-14 lh-1">6 lesson</div>
                </div>
              </div>

              <div className="col-auto">
                <div className="d-flex items-center">
                  <img className="mr-8" src="img/coursesCards/icons/2.svg" alt="icon" />
                  <div className="text-14 lh-1">3h 56m</div>
                </div>
              </div>

              <div className="col-auto">
                <div className="d-flex items-center">
                  <img className="mr-8" src="img/coursesCards/icons/3.svg" alt="icon" />
                  <div className="text-14 lh-1">Beginner</div>
                </div>
              </div>

            </div>
          </div>

          <div className="col-auto">
            <div className="line -vertical -h-120 bg-light-5"></div>
          </div>

          <div className="col-auto text-right">
            <div className="text-15 lh-1 fw-500 line-through">$179</div>
            <div className="text-24 lh-1 fw-500 text-dark-1 mt-10">$279</div>
          </div>
        </a>
      </div>
    </>
  )
}

const LeftFilter = ({ title, data = [1,2,3,4], isRadio = false }) => {
  return (
    <>
      <div className="sidebar__item">
        <div className="accordion js-accordion">
          <div className="accordion__item js-accordion-item-active">
            <div className="accordion__button items-center">
              <h6 className="sidebar__title">{ title }</h6>
              <div className="accordion__icon">
                <div className="icon icon-chevron-down"></div>
                <div className="icon icon-chevron-up"></div>
              </div>
            </div>

            <div className="accordion__content" style={{ maxHeight: 'unset' }}>
              <div className="accordion__content__inner">
                <div className="sidebar-checkbox">
                  {
                    data.map((e, index) => (
                    <div className="sidebar-checkbox__item">
                      <div className="form-checkbox">
                        {
                          isRadio 
                          ?
                          <input type="radio" name="radio-2" />
                          :
                          <input type="checkbox" />
                        }
                        <div className="form-checkbox__mark">
                          <div className="form-checkbox__icon icon-check"></div>
                        </div>
                      </div>

                      <div className="sidebar-checkbox__title">Exercise</div>
                      <div className="sidebar-checkbox__count">(12)</div>
                    </div>
                    ))
                  }
                </div>
                <div className="sidebar__more mt-15">
                  <a href="#" className="text-14 fw-500 underline text-purple-1">Show more</a>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  )
}

const RightFilter = ({ title, data = [1, 2, 3, 4], isRadio = false }) => {
  return (
    <div className="col-xl-3 col-lg-4 col-sm-6">
      <div className="sidebar__item">
        <h5 className="sidebar__title">{ title }</h5>
        <div className="sidebar-checkbox" style={{ maxHeight: 'unset' }}>
          {
            data.map((e, index) => (
              <div className="sidebar-checkbox__item">
                <div className="form-checkbox">
                  {
                    isRadio
                    ?
                    <input type="radio" />
                    :
                    <input type="checkbox" />
                  }
                  <div className="form-checkbox__mark">
                    <div className="form-checkbox__icon icon-check"></div>
                  </div>
                </div>

                <div className="sidebar-checkbox__title">Art</div>
                <div className="sidebar-checkbox__count">(18)</div>
              </div>
            ))
          }
        </div>
        <div className="sidebar__more mt-15">
          <a href="#" className="text-14 fw-500 underline text-purple-1">Show more</a>
        </div>
      </div>
    </div>
  )
}