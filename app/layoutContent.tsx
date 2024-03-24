'use client'

import { Footer } from "@/components/Footer"
import { Header } from "@/components/Header"
import { SideBar } from "@/components/SideBar"
import { useDarkTheme } from "@/context/DarkThemeContext"
import { useSidebar } from "@/context/SidebarContext"

export const BodyPart = ({ children, inter }) => {
  const { isSidebarOpen } = useSidebar();
  const { isDarkTheme } = useDarkTheme();

  return (
    <html lang="en" className={`${isDarkTheme ? '-dark-mode' : ''}`}>
      <body className={inter.className}>
        <div className="barba-container">
          <main className="main-content">
            <Header />
            <div className="content-wrapper js-content-wrapper">
              <div className={`dashboard -home-9 px-0 js-dashboard-home-9 ${isSidebarOpen ? '' : '-is-sidebar-hidden'}`}>
                <SideBar />
                <div className="dashboard__main mt-0">
                  <div className="dashboard__content pt-0 px-15 bg-light-4">
                    {children}
                  </div>
                  <Footer />
                </div>
              </div>
            </div>
          </main>
        </div>
      </body>
    </html>
  )
}
