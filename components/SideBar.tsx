'use client'

import { useSidebar } from "@/context/SidebarContext";
import routes from "@/utils/routes";
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
              {
                [
                  { route: routes.explore, label: 'Explore', icon: 'discovery'},
                  { route: routes.formations, label: 'Formations', icon: 'play-button'},
                  { route: routes.books, label: 'Books', icon: ''},
                  { route: routes.articles, label: 'Articles', icon: ''},
                ].map((e, index) => (
                  <div className={`sidebar__item ${isActive(e.route) ? '-is-active' : ''}`} key={index}>
                    <a href={e.route} className="-dark-sidebar-white d-flex items-center text-17 lh-1 fw-500">
                      <i className={`text-20 icon-${e.icon} mr-15`}></i>
                      { e.label }
                    </a>
                  </div>
                ))
              }
            </div>
          </div>

          {/* Dashboard */}
          <div>
            <div className="text-16 lh-1 fw-500 text-dark-1 mb-30 mt-30">Dashboard ~ User</div>
            <div>
              {
                [
                  { route: routes.enrolled_courses, label: 'My Courses', icon: 'play-button'},
                  { route: routes.wish_list, label: 'Wish List', icon: 'bookmark'},
                ].map((e, index) => (
                  <div className={`sidebar__item ${isActive(e.route) ? '-is-active' : ''}`} key={index}>
                    <a href={e.route} className="-dark-sidebar-white d-flex items-center text-17 lh-1 fw-500">
                      <i className={`text-20 icon-${e.icon} mr-15`}></i>
                      { e.label }
                    </a>
                  </div>
                ))
              }

            </div>
          </div>

          {/* Dashboard */}
          <div>
            <div className="text-16 lh-1 fw-500 text-dark-1 mb-30 mt-30">Dashboard ~ Instructor</div>
            <div>
              {
                [
                  { route: routes.dashboard, label: 'Dashboard', icon: 'explore'},
                  { route: routes.announcements, label: 'Announcements', icon: 'play-button'},
                  { route: routes.create_announcements, label: 'Create Formation', icon: 'list'},
                  { route: routes.messages, label: 'Messages', icon: 'message'},
                  { route: routes.reviews, label: 'Reviews', icon: 'comment'},
                  { route: routes.settings, label: 'Settings', icon: 'setting'},
                ].map((e, index) => (
                  <div className={`sidebar__item ${isActive(e.route) ? '-is-active' : ''}`} key={index}>
                    <a href={e.route} className="-dark-sidebar-white d-flex items-center text-17 lh-1 fw-500">
                      <i className={`text-20 icon-${e.icon} mr-15`}></i>
                      { e.label }
                    </a>
                  </div>
                ))
              }

            </div>
          </div>

          <div className="mt-60">
            <div className="text-16 lh-1 fw-500 text-dark-1 mb-30"></div>

              {
                [
                  { route: routes.about, label: 'About Us', icon: ''},
                  { route: routes.terms_conditions, label: 'Terms and Conditions', icon: ''},
                  { route: routes.contact, label: 'Contact Us', icon: ''},
                  { route: routes.pricing, label: 'Pricing', icon: ''},
                ].map((e, index) => (
                  <div className={`pages rounded-8 ${isActive(e.route) ? '-is-active' : ''}`} key={index}>
                    <a href={e.route} className="d-flex items-center justify-between py-15 px-20 rounded-16 text-16 lh-1 fw-500 -base-sidebar-menu-hover">
                      { e.label }
                    </a>
                  </div>
                ))
              }

          </div>
        </div>
      </div>
    </div>
  )
}