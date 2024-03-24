export const CloseAccount = () => {
  return (
    <>
      <form action="#" className="contact-form row y-gap-30">
        <div className="col-12">
          <div className="text-16 fw-500 text-dark-1">Close account</div>
          <p className="mt-10">Warning: If you close your account, you will be unsubscribed from all your 5 courses, and will lose access forever.</p>
        </div>


        <div className="col-md-7">

          <label className="text-16 lh-1 fw-500 text-dark-1 mb-10">Enter Password</label>

          <input type="text" placeholder="Enter Password" />
        </div>


        <div className="col-12">
          <button className="button -md -purple-1 text-white">Close Account</button>
        </div>
      </form>
    </>
  )
}