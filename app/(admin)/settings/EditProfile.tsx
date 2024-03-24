export const EditProfile = () => {
  return (
    <>
      <div className="row y-gap-20 x-gap-20 items-center">
        <div className="col-auto">
          <img className="size-100" src="img/dashboard/edit/1.png" alt="image" />
        </div>

        <div className="col-auto">
          <div className="text-16 fw-500 text-dark-1">Your avatar</div>
          <div className="text-14 lh-1 mt-10">PNG or JPG no bigger than 800px wide and tall.</div>

          <div className="d-flex x-gap-10 y-gap-10 flex-wrap pt-15">
            <div>
              <div className="d-flex justify-center items-center size-40 rounded-8 bg-light-3">
                <div className="icon-cloud text-16"></div>
              </div>
            </div>
            <div>
              <div className="d-flex justify-center items-center size-40 rounded-8 bg-light-3">
                <div className="icon-bin text-16"></div>
              </div>
            </div>
          </div>
        </div>
      </div>

      <div className="border-top-light pt-30 mt-30">
        <form action="#" className="contact-form row y-gap-30">

          <div className="col-md-6">

            <label className="text-16 lh-1 fw-500 text-dark-1 mb-10">First Name</label>

            <input type="text" placeholder="First Name" />
          </div>


          <div className="col-md-6">

            <label className="text-16 lh-1 fw-500 text-dark-1 mb-10">Last Name</label>

            <input type="text" placeholder="Last Name" />
          </div>


          <div className="col-md-6">

            <label className="text-16 lh-1 fw-500 text-dark-1 mb-10">Phone</label>

            <input type="text" placeholder="Phone" />
          </div>


          <div className="col-md-6">

            <label className="text-16 lh-1 fw-500 text-dark-1 mb-10">Birthday</label>

            <input type="text" placeholder="Birthday" />
          </div>


          <div className="col-md-6">

            <label className="text-16 lh-1 fw-500 text-dark-1 mb-10">Address Line 1</label>

            <input type="text" placeholder="Address Line 1" />
          </div>


          <div className="col-md-6">

            <label className="text-16 lh-1 fw-500 text-dark-1 mb-10">Address Line 2</label>

            <input type="text" placeholder="Address Line 2" />
          </div>


          <div className="col-md-6">

            <label className="text-16 lh-1 fw-500 text-dark-1 mb-10">State</label>

            <input type="text" placeholder="State" />
          </div>


          <div className="col-md-6">

            <label className="text-16 lh-1 fw-500 text-dark-1 mb-10">Country</label>

            <input type="text" placeholder="Country" />
          </div>


          <div className="col-12">

            <label className="text-16 lh-1 fw-500 text-dark-1 mb-10">Personal info</label>

            <textarea placeholder="Text..." rows={7}></textarea>
          </div>


          <div className="col-12">
            <button className="button -md -purple-1 text-white">Update Profile</button>
          </div>
        </form>
      </div>
    </>
  )
}