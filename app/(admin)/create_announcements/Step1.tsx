export const Step1 = () => {
  return (
    <>
      <form className="contact-form row y-gap-30" action="#">

        <div className="col-12">

          <label className="text-16 lh-1 fw-500 text-dark-1 mb-10">Course Title*</label>

          <input type="text" placeholder="Learn Figma - UI/UX Design Essential Training" />
        </div>


        <div className="col-12">

          <label className="text-16 lh-1 fw-500 text-dark-1 mb-10">Short Description*</label>

          <textarea placeholder="Description" rows={7}></textarea>
        </div>


        <div className="col-12">

          <label className="text-16 lh-1 fw-500 text-dark-1 mb-10">Course Description*</label>

          <textarea placeholder="Description" rows={7}></textarea>
        </div>


        <div className="col-md-6">

          <label className="text-16 lh-1 fw-500 text-dark-1 mb-10">What will students learn in your course?*</label>

          <textarea placeholder="Description" rows={7}></textarea>
        </div>


        <div className="col-md-6">

          <label className="text-16 lh-1 fw-500 text-dark-1 mb-10">Requirements*</label>

          <textarea placeholder="Description" rows={7}></textarea>
        </div>


        <div className="col-md-6">

          <label className="text-16 lh-1 fw-500 text-dark-1 mb-10">Course Level*</label>

          <input type="text" placeholder="Select" />
        </div>


        <div className="col-md-6">

          <label className="text-16 lh-1 fw-500 text-dark-1 mb-10">Audio Language*</label>

          <input type="text" placeholder="Select" />
        </div>


        <div className="col-md-6">

          <label className="text-16 lh-1 fw-500 text-dark-1 mb-10">Close Caption*</label>

          <input type="text" placeholder="Select" />
        </div>


        <div className="col-md-6">

          <label className="text-16 lh-1 fw-500 text-dark-1 mb-10">Course Category*</label>

          <input type="text" placeholder="Select" />
        </div>

      </form>
    </>
  )
}