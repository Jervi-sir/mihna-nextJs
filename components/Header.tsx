'use client'
import { useDarkTheme } from "@/context/DarkThemeContext";
import { useSidebar } from "@/context/SidebarContext"

export const Header = () => {
  const { toggleSidebar } = useSidebar();
  const { toggleDarkTheme } = useDarkTheme();
  
  return (
    <header className="header -base-sidebar border-bottom-light bg-white js-header">
      <div className="header__container py-20 px-10">
        <div className="row justify-between items-center">
          <div className="col-auto">
            <div className="d-flex items-center">
              <div className="header__explore text-dark-1">
                <button className="d-flex items-center" onClick={toggleSidebar}>
                  <i className="icon -dark-text-white icon-explore"></i>
                </button>
              </div>

              <div className="header__logo ml-30 md:ml-20">
                <a href="index.html">
                  <img className="-light-d-none" src="img/general/logo.svg" alt="logo" />
                    <img className="-dark-d-none" src="img/general/logo-dark.svg" alt="logo" />
                    </a>
                  </div>

                  <form className="search-field rounded-16 h-50 -reverse-button -w-340 ml-90 xl:ml-20 lg:d-none" action="https://creativelayers.net/themes/educrat-html/post">
                    <input className="bg-light-4 pr-50" type="text" placeholder="What do you want to learn?" />
                      <button className="text-light-1" type="submit">
                        <i className="icon-search text-20"></i>
                      </button>
                  </form>
              </div>
            </div>
            <div className="col-auto">
              <div className="d-flex items-center">
                <div className="d-flex items-center sm:d-none">
                  <div>
                    <button 
                      onClick={toggleDarkTheme}
                      className="text-light-1 d-flex items-center justify-center size-50 rounded-16 -hover-dshb-header-light"
                    >
                      <i className="text-light-1 text-24 icon icon-night"></i>
                    </button>
                  </div>

                  <div className="relative">
                    <button data-maximize className="text-light-1 d-flex items-center justify-center size-50 rounded-16 -hover-dshb-header-light">
                      <i className="text-24 icon icon-maximize"></i>
                    </button>
                  </div>


                  <div className="relative ">
                    <button className="d-flex items-center text-light-1 d-flex items-center justify-center size-50 rounded-16 -hover-dshb-header-light" data-el-toggle=".js-cart-toggle">
                      <i className="text-20 icon icon-basket"></i>
                    </button>

                    <div className="toggle-element js-cart-toggle">
                      <div className="header-cart bg-white -dark-bg-dark-1 rounded-8">
                        <div className="px-30 pt-30 pb-10">

                          <div className="row justify-between x-gap-40 pb-20">
                            <div className="col">
                              <div className="row x-gap-10 y-gap-10">
                                <div className="col-auto">
                                  <img src="img/menus/cart/1.png" alt="image" />
                                </div>

                                <div className="col">
                                  <div className="text-dark-1 lh-15">The Ultimate Drawing Course Beginner to Advanced...</div>

                                  <div className="d-flex items-center mt-10">
                                    <div className="lh-12 fw-500 line-through text-light-1 mr-10">$179</div>
                                    <div className="text-18 lh-12 fw-500 text-dark-1">$79</div>
                                  </div>
                                </div>
                              </div>
                            </div>

                            <div className="col-auto">
                              <button>
                                <img src="img/menus/close.svg" alt="icon" />
                              </button>
                            </div>
                          </div>

                          <div className="row justify-between x-gap-40 pb-20">
                            <div className="col">
                              <div className="row x-gap-10 y-gap-10">
                                <div className="col-auto">
                                  <img src="img/menus/cart/2.png" alt="image" />
                                </div>

                                <div className="col">
                                  <div className="text-dark-1 lh-15">User Experience Design Essentials - Adobe XD UI UX...</div>

                                  <div className="d-flex items-center mt-10">
                                    <div className="lh-12 fw-500 line-through text-light-1 mr-10">$179</div>
                                    <div className="text-18 lh-12 fw-500 text-dark-1">$79</div>
                                  </div>
                                </div>
                              </div>
                            </div>

                            <div className="col-auto">
                              <button>
                                <img src="img/menus/close.svg" alt="icon" />
                               </button>
                            </div>
                          </div>

                        </div>

                        <div className="px-30 pt-20 pb-30 border-top-light">
                          <div className="d-flex justify-between">
                            <div className="text-18 lh-12 text-dark-1 fw-500">Total:</div>
                            <div className="text-18 lh-12 text-dark-1 fw-500">$659</div>
                          </div>

                          <div className="row x-gap-20 y-gap-10 pt-30">
                            <div className="col-sm-6">
                              <button className="button py-20 -dark-1 text-white -dark-button-white col-12">View Cart</button>
                            </div>
                            <div className="col-sm-6">
                              <button className="button py-20 -purple-1 text-white col-12">Checkout</button>
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>


                  <div className="relative">
                    <a href="#" className="d-flex items-center justify-center size-50 rounded-16 -hover-dshb-header-light" data-el-toggle=".js-msg-toggle">
                      <i className="text-24 icon icon-email"></i>
                    </a>
                  </div>

                  <div className="relative">
                    <a href="#" className="d-flex items-center justify-center size-50 rounded-16 -hover-dshb-header-light" data-el-toggle=".js-notif-toggle">
                      <i className="text-24 icon icon-notification"></i>
                    </a>

                    <div className="toggle-element js-notif-toggle">
                      <div className="toggle-bottom -notifications bg-white shadow-4 border-light rounded-8 mt-10">
                        <div className="py-30 px-30">
                          <div className="y-gap-40">

                            <div className="d-flex items-center ">
                              <div className="shrink-0">
                                <img src="img/dashboard/actions/1.png" alt="image" />
                              </div>
                              <div className="ml-12">
                                <h4 className="text-15 lh-1 fw-500 -dark-text-dark-1">Your resume updated!</h4>
                                <div className="text-13 lh-1 mt-10">1 Hours Ago</div>
                              </div>
                            </div>

                            <div className="d-flex items-center border-top-light -dark-border-top-light-5">
                              <div className="shrink-0">
                                <img src="img/dashboard/actions/2.png" alt="image" />
                              </div>
                              <div className="ml-12">
                                <h4 className="text-15 lh-1 fw-500 -dark-text-dark-1">You changed password</h4>
                                <div className="text-13 lh-1 mt-10">1 Hours Ago</div>
                              </div>
                            </div>

                            <div className="d-flex items-center border-top-light -dark-border-top-light-5">
                              <div className="shrink-0">
                                <img src="img/dashboard/actions/3.png" alt="image" />
                              </div>
                              <div className="ml-12">
                                <h4 className="text-15 lh-1 fw-500 -dark-text-dark-1">Your account has been created successfully</h4>
                                <div className="text-13 lh-1 mt-10">1 Hours Ago</div>
                              </div>
                            </div>

                            <div className="d-flex items-center border-top-light -dark-border-top-light-5">
                              <div className="shrink-0">
                                <img src="img/dashboard/actions/4.png" alt="image" />
                              </div>
                              <div className="ml-12">
                                <h4 className="text-15 lh-1 fw-500 -dark-text-dark-1">You applied for a job Front-end Developer</h4>
                                <div className="text-13 lh-1 mt-10">1 Hours Ago</div>
                              </div>
                            </div>

                            <div className="d-flex items-center border-top-light -dark-border-top-light-5">
                              <div className="shrink-0">
                                <img src="img/dashboard/actions/5.png" alt="image" />
                              </div>
                              <div className="ml-12">
                                <h4 className="text-15 lh-1 fw-500 -dark-text-dark-1">Your course uploaded successfully</h4>
                                <div className="text-13 lh-1 mt-10">1 Hours Ago</div>
                              </div>
                            </div>

                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>

                <div className="relative d-flex items-center ml-10">
                  <a href="#" data-el-toggle=".js-profile-toggle">
                    <img className="size-50" src="img/misc/user-profile.png" alt="image" />
                  </a>

                  <div className="toggle-element js-profile-toggle">
                    <div className="toggle-bottom -profile bg-white shadow-4 border-light rounded-8 mt-10">
                      <div className="px-30 py-30">

                        <div className="sidebar -dashboard">

                          <div className="sidebar__item -is-active -dark-bg-dark-2">
                            <a href="dashboard.html" className="d-flex items-center text-17 lh-1 fw-500 -dark-text-white">
                              <i className="text-20 icon-discovery mr-15"></i>
                              Dashboard
                            </a>
                          </div>

                          <div className="sidebar__item ">
                            <a href="dshb-courses.html" className="d-flex items-center text-17 lh-1 fw-500 ">
                              <i className="text-20 icon-play-button mr-15"></i>
                              My Courses
                            </a>
                          </div>

                          <div className="sidebar__item ">
                            <a href="dshb-bookmarks.html" className="d-flex items-center text-17 lh-1 fw-500 ">
                              <i className="text-20 icon-bookmark mr-15"></i>
                              Bookmarks
                            </a>
                          </div>

                          <div className="sidebar__item ">
                            <a href="dshb-messages.html" className="d-flex items-center text-17 lh-1 fw-500 ">
                              <i className="text-20 icon-message mr-15"></i>
                              Messages
                            </a>
                          </div>

                          <div className="sidebar__item ">
                            <a href="dshb-listing.html" className="d-flex items-center text-17 lh-1 fw-500 ">
                              <i className="text-20 icon-list mr-15"></i>
                              Create Course
                            </a>
                          </div>

                          <div className="sidebar__item ">
                            <a href="dshb-reviews.html" className="d-flex items-center text-17 lh-1 fw-500 ">
                              <i className="text-20 icon-comment mr-15"></i>
                              Reviews
                            </a>
                          </div>

                          <div className="sidebar__item ">
                            <a href="dshb-settings.html" className="d-flex items-center text-17 lh-1 fw-500 ">
                              <i className="text-20 icon-setting mr-15"></i>
                              Settings
                            </a>
                          </div>

                          <div className="sidebar__item ">
                            <a href="#" className="d-flex items-center text-17 lh-1 fw-500 ">
                              <i className="text-20 icon-power mr-15"></i>
                              Logout
                            </a>
                          </div>

                        </div>

                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
    </header>
  )
}