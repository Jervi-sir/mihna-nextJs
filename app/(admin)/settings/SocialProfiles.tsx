export const SocialProfiles = () => {
  return (
    <>
      <form action="#" className="contact-form row y-gap-30">

        <div className="col-md-6">

          <label className="text-16 lh-1 fw-500 text-dark-1 mb-10">Twitter</label>

          <input type="text" placeholder="Twitter Profile" />
        </div>


        <div className="col-md-6">

          <label className="text-16 lh-1 fw-500 text-dark-1 mb-10">Facebook</label>

          <input type="text" placeholder="Facebook Profile" />
        </div>


        <div className="col-md-6">

          <label className="text-16 lh-1 fw-500 text-dark-1 mb-10">Instagram</label>

          <input type="text" placeholder="Instagram Profile" />
        </div>


        <div className="col-md-6">

          <label className="text-16 lh-1 fw-500 text-dark-1 mb-10">LinkedIn Profile URL</label>

          <input type="text" placeholder="LinkedIn Profile" />
        </div>

        <div className="col-12">
          <button className="button -md -purple-1 text-white">Save Social Profile</button>
        </div>
      </form>
    </>
  )
}