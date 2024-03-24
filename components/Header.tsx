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
                  <img className="-light-d-none" src="/img/general/logo.svg" alt="logo" />
                    <img className="-dark-d-none" src="/img/general/logo-dark.svg" alt="logo" />
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
                </div>

                <ProfileToggle />
                
              </div>
            </div>
          </div>
        </div>
    </header>
  )
}

const ProfileToggle = () => {
  return (
    <div className="relative d-flex items-center ml-10">
      <a href="#" data-el-toggle=".js-profile-toggle">
        <img className="size-50" src="/img/misc/user-profile.png" alt="image" />
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
  )
}