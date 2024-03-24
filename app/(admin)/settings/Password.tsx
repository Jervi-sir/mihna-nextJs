export const Password = () => {
  return (
    <>
      <form action="#" className="contact-form row y-gap-30">

        <div className="col-md-7">

          <label className="text-16 lh-1 fw-500 text-dark-1 mb-10">Current password</label>

          <input type="text" placeholder="Current password" />
        </div>


        <div className="col-md-7">

          <label className="text-16 lh-1 fw-500 text-dark-1 mb-10">New password</label>

          <input type="text" placeholder="New password" />
        </div>


        <div className="col-md-7">

          <label className="text-16 lh-1 fw-500 text-dark-1 mb-10">Confirm New Password</label>

          <input type="text" placeholder="Confirm New Password" />
        </div>

        <div className="col-12">
          <button className="button -md -purple-1 text-white">Save Password</button>
        </div>
      </form>
    </>
  )
}