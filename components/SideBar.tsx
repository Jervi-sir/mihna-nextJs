'use client'

import { useSidebar } from "@/context/SidebarContext";
import { usePathname } from "next/navigation";


export const SideBar = () => {

  const router = usePathname();

  const isActive = (href) => {
    if (href === '/') {
      return router === '/';
    }
    return router.startsWith(href);
  };


  return (
    <div className="dashboard__sidebar -base scroll-bar-1 border-right-light lg:px-30">
      <div className="sidebar -base-sidebar">
        {/* General */}
        <div className="sidebar__inner">
          <div>
            <div className="text-16 lh-1 fw-500 text-dark-1 mb-30">General</div>
            <div>
              <div className={`sidebar__item ${isActive('/') ? '-is-active' : ''}`}>
                <a href="/" className="-dark-sidebar-white d-flex items-center text-17 lh-1 fw-500">
                  <i className="text-20 icon-discovery mr-15"></i>
                  Explore
                </a>
              </div>

              <div className={`sidebar__item ${isActive('/formations') ? '-is-active' : ''}`}>
                <a href="/formations" className="-dark-sidebar-white d-flex items-center text-17 lh-1 fw-500">
                  <i className="text-20 icon-play-button mr-15"></i>
                  Formations
                </a>
              </div>

              <div className={`sidebar__item ${isActive('/books') ? '-is-active' : ''}`}>
                <a href="#" className="-dark-sidebar-white d-flex items-center text-17 lh-1 fw-500">
                  <i className="text-20 icon-book mr-15"></i>
                  Books
                </a>
              </div>

              <div className={`sidebar__item ${isActive('/articles') ? '-is-active' : ''}`}>
                <a href="blog-list-1.html" className="-dark-sidebar-white d-flex items-center text-17 lh-1 fw-500">
                  <i className="text-20 icon-list mr-15"></i>
                  Articles
                </a>
              </div>

            </div>
          </div>

          {/* Dashboard */}
          <div>
            <div className="text-16 lh-1 fw-500 text-dark-1 mb-30 mt-30">Dashboard ~ Instructor</div>
            <div>
              
              <div className={`sidebar__item ${isActive('/dashboard') ? '-is-active' : ''}`}>
                <a href="/dashboard" className="-dark-sidebar-white d-flex items-center text-17 lh-1 fw-500">
                  <i className="text-20 icon-discovery mr-15"></i>
                  Dashboard
                </a>
              </div>

              <div className={`sidebar__item ${isActive('/announcements') ? '-is-active' : ''}`}>
                <a href="/announcements" className="-dark-sidebar-white d-flex items-center text-17 lh-1 fw-500">
                  <i className="text-20 icon-play-button mr-15"></i>
                  Announcements
                </a>
              </div>

              <div className={`sidebar__item ${isActive('/create_announcements') ? '-is-active' : ''}`}>
                <a href="/create_announcements" className="-dark-sidebar-white d-flex items-center text-17 lh-1 fw-500">
                  <i className="text-20 icon-list mr-15"></i>
                  Create Formation
                </a>
              </div>

              <div className={`sidebar__item ${isActive('/messages') ? '-is-active' : ''}`}>
                <a href="/messages" className="-dark-sidebar-white d-flex items-center text-17 lh-1 fw-500">
                  <i className="text-20 icon-message mr-15"></i>
                  Messages
                </a>
              </div>

              <div className={`sidebar__item ${isActive('/reviews') ? '-is-active' : ''}`}>
                <a href="/reviews" className="-dark-sidebar-white d-flex items-center text-17 lh-1 fw-500">
                  <i className="text-20 icon-comment mr-15"></i>
                  Reviews
                </a>
              </div>

              <div className={`sidebar__item ${isActive('/settings') ? '-is-active' : ''}`}>
                <a href="/settings" className="-dark-sidebar-white d-flex items-center text-17 lh-1 fw-500">
                  <i className="text-20 icon-setting mr-15"></i>
                  Settings
                </a>
              </div>

            </div>
          </div>

          <div className="mt-60">
            <div className="text-16 lh-1 fw-500 text-dark-1 mb-30"></div>
              <div className={`pages rounded-8 ${isActive('/about') ? '-is-active' : ''}`}>
                <a href="/about" className="d-flex items-center justify-between py-15 px-20 rounded-16 text-16 lh-1 fw-500 -base-sidebar-menu-hover">
                  About Us
                </a>
              </div>
              <div className={`pages rounded-8 ${isActive('/terms_conditions') ? '-is-active' : ''}`}>
                <a href="/terms_conditions" className="d-flex items-center justify-between py-15 px-20 rounded-16 text-16 lh-1 fw-500 -base-sidebar-menu-hover">
                  Terms and Conditions
                </a>
              </div>
              <div className={`pages rounded-8 ${isActive('/contact') ? '-is-active' : ''}`}>
                <a href="/contact" className="d-flex items-center justify-between py-15 px-20 rounded-16 text-16 lh-1 fw-500 -base-sidebar-menu-hover">
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