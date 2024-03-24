export const SendMessage = () => {
  return (
    <>
      <div className="px-40 py-40 bg-white border-light shadow-1 rounded-8 contact-form-to-top">
        <h3 className="text-24 fw-500">Send a Message</h3>
        <p className="mt-25">Neque convallis a cras semper auctor. Libero id faucibus nisl<br /> tincidunt egetnvallis.</p>

        <form className="contact-form row y-gap-30 pt-60 lg:pt-40" action="#">
          <div className="col-12">
            <label className="text-16 lh-1 fw-500 text-dark-1 mb-10">Name</label>
            <input type="text" name="title" placeholder="Name..." />
          </div>
          <div className="col-12">
            <label className="text-16 lh-1 fw-500 text-dark-1 mb-10">Email Address</label>
            <input type="text" name="title" placeholder="Email..." />
          </div>
          <div className="col-12">
            <label className="text-16 lh-1 fw-500 text-dark-1 mb-10">Message...</label>
            <textarea name="comment" placeholder="Message" rows={8}></textarea>
          </div>
          <div className="col-12">
            <button type="submit" name="submit" id="submit" className="button -md -purple-1 text-white">
              Send Message
            </button>
          </div>
        </form>
      </div>

    </>
  )
}