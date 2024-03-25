'use client'

import { useState } from "react"

import { AllCourses } from "./AllCourses";
import { Finished } from "./Finished";
import { NotEnrolled } from "./NotEnrolled";

const tabs = ['all-courses', 'finished', 'not-enrolled']

export default function EnrolledCourses() {
  const [currentTab, setCurrentTab] = useState(tabs[0]);

  return (
    <>
      <div className="row pb-50 mb-10">
        <div className="col-auto">
          <h1 className="text-30 lh-12 fw-700">My Courses</h1>
          <div className="mt-10">Lorem ipsum dolor sit amet, consectetur.</div>
        </div>
      </div>

      <div className="row y-gap-30">
        <div className="col-12">
          <div className="rounded-16 bg-white -dark-bg-dark-1 shadow-4 h-100">
            <div className="tabs -active-purple-2 js-tabs">
              <div className="tabs__controls d-flex items-center pt-20 px-30 border-bottom-light js-tabs-controls">
                <button 
                  onClick={() => setCurrentTab(tabs[0])} 
                  className={`text-light-1 lh-12 tabs__button js-tabs-button ml-30 ${currentTab === tabs[0] && 'is-active'}`}
                  type="button"
                >
                  All Courses
                </button>
                <button 
                  onClick={() => setCurrentTab(tabs[1])} 
                  className={`text-light-1 lh-12 tabs__button js-tabs-button ml-30 ${currentTab === tabs[1] && 'is-active'}`}
                  type="button"
                >
                  Finished
                </button>
                <button 
                  onClick={() => setCurrentTab(tabs[2])} 
                  className={`text-light-1 lh-12 tabs__button js-tabs-button ml-30 ${currentTab === tabs[2] && 'is-active'}`}
                  type="button"
                >
                  Not enrolled
                </button>
              </div>

              <div className="tabs__content py-30 px-30 js-tabs-content">
                {
                  currentTab === tabs[0] && <AllCourses />
                }
                {
                  currentTab === tabs[1] && <Finished />
                }
                {
                  currentTab === tabs[2] && <NotEnrolled />
                }
                
              </div>
              
            </div>
          </div>
        </div>
      </div>
    </>
  )
}