import { FrequentQuestions } from "./FrequentQuestions";
import { OurOffice } from "./OurOffice";
import { SendMessage } from "./SendMessage";

export default function Contact() {
  return (
    <>
      <section className="page-header -type-4 bg-beige-1" style={{ paddingTop: '5rem', paddingBottom: '7rem'}}>
        <div className="container">
          <div className="page-header__content">
            <div className="row">
              <div className="col-auto">
                <div >
                  <h1 className="page-header__title">Contact Us</h1>
                </div>

                <div >
                  <p className="page-header__text">We’re on a mission to deliver engaging, curated<br /> courses at a reasonable price.</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="layout-pt-md layout-pb-lg">
        <div  className="container">
          <div className="row y-gap-50 justify-between">
            <div className="col-xl-5 col-lg-6">
              <OurOffice />
            </div>

            <div className="col-lg-6">
              <SendMessage />
            </div>
          </div>
        </div>
      </section>

      
      <FrequentQuestions />

    </>
  )
}