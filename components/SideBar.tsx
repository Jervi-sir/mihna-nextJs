'use client'

import { useSidebar } from "@/context/SidebarContext";

export const SideBar = () => {
  const { isSidebarOpen } = useSidebar();
  return (
    <div className="dashboard__sidebar -base scroll-bar-1 border-right-light lg:px-30">
      <div className="sidebar -base-sidebar">
        <div className="sidebar__inner">
          <div>
            <div className="text-16 lh-1 fw-500 text-dark-1 mb-30">General</div>
            <div>

              <div className="sidebar__item -is-active">
                <a href="/" className="-dark-sidebar-white d-flex items-center text-17 lh-1 fw-500">
                  <i className="text-20 icon-discovery mr-15"></i>
                  Explore
                </a>
              </div>

              <div className="sidebar__item ">
                <a href="/formations" className="-dark-sidebar-white d-flex items-center text-17 lh-1 fw-500">
                  <i className="text-20 icon-play-button mr-15"></i>
                  Formations
                </a>
              </div>

              <div className="sidebar__item ">
                <a href="#" className="-dark-sidebar-white d-flex items-center text-17 lh-1 fw-500">
                  <i className="text-20 icon-book mr-15"></i>
                  Books
                </a>
              </div>

              <div className="sidebar__item ">
                <a href="blog-list-1.html" className="-dark-sidebar-white d-flex items-center text-17 lh-1 fw-500">
                  <i className="text-20 icon-list mr-15"></i>
                  Articles
                </a>
              </div>

            </div>
          </div>

          <div className="mt-60">
            <div className="text-16 lh-1 fw-500 text-dark-1 mb-30"></div>
              <div className="">
                <a href="#" className="d-flex items-center justify-between py-15 px-20 rounded-16 text-16 lh-1 fw-500 -base-sidebar-menu-hover">
                  About Us
                </a>
              </div>
              <div className="">
                <a href="#" className="d-flex items-center justify-between py-15 px-20 rounded-16 text-16 lh-1 fw-500 -base-sidebar-menu-hover">
                  Contact Us
                </a>
              </div>
              <div className="">
                <a href="#" className="d-flex items-center justify-between py-15 px-20 rounded-16 text-16 lh-1 fw-500 -base-sidebar-menu-hover">
                  Pricing
                </a>
              </div>
          </div>
        </div>
      </div>
    </div>
  )
}