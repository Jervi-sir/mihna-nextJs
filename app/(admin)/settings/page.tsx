'use client'

import { useState } from "react";
import { EditProfile } from "./EditProfile";
import { Password } from "./Password";
import { SocialProfiles } from "./SocialProfiles";
import { Notifications } from "./Notifications";
import { CloseAccount } from "./CloseAccount";

const tabs = ['Edit Profile', 'Password', 'Social Profiles', 'Notifications', 'Close Account'];

export default function Settings() {
  const [currentTab, setCurrentTab] = useState(tabs[0]);
  return (
    <>
      <div className="row pb-50 mb-10">
        <div className="col-auto">
          <h1 className="text-30 lh-12 fw-700">Settings</h1>
          <div className="mt-10">Lorem ipsum dolor sit amet, consectetur.</div>
        </div>
      </div>

      <div className="row y-gap-30">
        <div className="col-12">
          <div className="rounded-16 bg-white -dark-bg-dark-1 shadow-4 h-100">
            <div className="tabs -active-purple-2 js-tabs pt-0">
              <div className="tabs__controls d-flex x-gap-30 items-center pt-20 px-30 border-bottom-light js-tabs-controls">
                {
                  tabs.map((e, index) => (
                    <button 
                      key={index}
                      onClick={() => setCurrentTab(tabs[index])}
                      className={`tabs__button text-light-1 js-tabs-button ${ currentTab === e && 'is-active'}`} type="button"
                    >
                      { e }
                    </button>
                  ))
                }
              </div>

              <div className="tabs__content py-30 px-30 js-tabs-content">
                <div className="tabs__pane is-active">
                  { currentTab === tabs[0] && <EditProfile />}
                  { currentTab === tabs[1] && <Password />}
                  { currentTab === tabs[2] && <SocialProfiles />}
                  { currentTab === tabs[3] && <Notifications />}
                  { currentTab === tabs[4] && <CloseAccount />}
                  
                </div>

              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  )
}