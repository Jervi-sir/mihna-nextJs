export const Section2 = () => {
  return (
    <>
      <div className="row y-gap-30 pt-30">
        <div className="col-xl-8 col-md-6">
          <div className="rounded-16 bg-white -dark-bg-dark-1 shadow-4 h-100">
            <div className="d-flex justify-between items-center py-20 px-30 border-bottom-light">
              <h2 className="text-17 lh-1 fw-500">Earning Statistics</h2>
              <div className="">

                <div className="dropdown js-dropdown js-category-active">
                  <div className="dropdown__button d-flex items-center text-14 bg-white -dark-bg-dark-1 border-light rounded-8 px-20 py-10 text-14 lh-12" data-el-toggle=".js-category-toggle" data-el-toggle-active=".js-category-active">
                    <span className="js-dropdown-title">This Week</span>
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
            <div className="py-40 px-30">
              <canvas id="lineChart"></canvas>
            </div>
          </div>
        </div>

        <div className="col-xl-4 col-md-6">
          <div className="rounded-16 bg-white -dark-bg-dark-1 shadow-4 h-100">
            <div className="d-flex justify-between items-center py-20 px-30 border-bottom-light">
              <h2 className="text-17 lh-1 fw-500">Traffic</h2>
              <div className="">

                <div className="dropdown js-dropdown js-category-active">
                  <div className="dropdown__button d-flex items-center text-14 bg-white -dark-bg-dark-1 border-light rounded-8 px-20 py-10 text-14 lh-12" data-el-toggle=".js-category-toggle" data-el-toggle-active=".js-category-active">
                    <span className="js-dropdown-title">This Week</span>
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
            <div className="py-40 px-30">
              <canvas id="pieChart"></canvas>
            </div>
          </div>
        </div>
      </div></>

  )
}