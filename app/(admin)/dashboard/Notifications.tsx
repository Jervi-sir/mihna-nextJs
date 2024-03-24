export const Notifications = () => {
  return (
    <>
      <div className="rounded-16 bg-white -dark-bg-dark-1 shadow-4 h-100">
        <div className="d-flex justify-between items-center py-20 px-30 border-bottom-light">
          <h2 className="text-17 lh-1 fw-500">Notifications</h2>
        </div>
        <div className="py-30 px-30">
          <div className="y-gap-40">

            <div className="d-flex items-center ">
              <div className="shrink-0">
                <img src="img/dashboard/actions/1.png" alt="image" />
              </div>
              <div className="ml-12">
                <h4 className="text-15 lh-1 fw-500">Your resume updated!</h4>
                <div className="text-13 lh-1 mt-10">1 Hours Ago</div>
              </div>
            </div>

            <div className="d-flex items-center border-top-light">
              <div className="shrink-0">
                <img src="img/dashboard/actions/2.png" alt="image" />
              </div>
              <div className="ml-12">
                <h4 className="text-15 lh-1 fw-500">You changed password</h4>
                <div className="text-13 lh-1 mt-10">1 Hours Ago</div>
              </div>
            </div>

            <div className="d-flex items-center border-top-light">
              <div className="shrink-0">
                <img src="img/dashboard/actions/3.png" alt="image" />
              </div>
              <div className="ml-12">
                <h4 className="text-15 lh-1 fw-500">Your account has been created successfully</h4>
                <div className="text-13 lh-1 mt-10">1 Hours Ago</div>
              </div>
            </div>

            <div className="d-flex items-center border-top-light">
              <div className="shrink-0">
                <img src="img/dashboard/actions/4.png" alt="image" />
              </div>
              <div className="ml-12">
                <h4 className="text-15 lh-1 fw-500">You applied for a job Front-end Developer</h4>
                <div className="text-13 lh-1 mt-10">1 Hours Ago</div>
              </div>
            </div>

            <div className="d-flex items-center border-top-light">
              <div className="shrink-0">
                <img src="img/dashboard/actions/5.png" alt="image" />
              </div>
              <div className="ml-12">
                <h4 className="text-15 lh-1 fw-500">Your course uploaded successfully</h4>
                <div className="text-13 lh-1 mt-10">1 Hours Ago</div>
              </div>
            </div>

          </div>
        </div>
      </div>
    </>
  )
}