export default function Checkout() {
  return (
    <>
      <section className="page-header -type-1">
        <div className="container">
          <div className="page-header__content">
            <div className="row justify-center text-center">
              <div className="col-auto">
                <div >
                  <h1 className="page-header__title">Shop Checkout</h1>
                </div>
                <div >
                  <p className="page-header__text">We’re on a mission to deliver engaging, curated courses at a reasonable price.</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
      <section className="">
        <div className="container">
          <div className="row y-gap-50">
            <div className="col-lg-8">
              <div className="shopCheckout-form">
                <form action="https://creativelayers.net/themes/educrat-html/post" className="contact-form row x-gap-30 y-gap-30">
                  <div className="col-12">
                    <h5 className="text-20">Billing details</h5>
                  </div>
                  <div className="col-sm-6">
                    <label className="text-16 lh-1 fw-500 text-dark-1 mb-10">First name</label>
                    <input type="text" name="firstName" placeholder="First name" />
                  </div>
                  <div className="col-sm-6">
                    <label className="text-16 lh-1 fw-500 text-dark-1 mb-10">Last name</label>
                    <input type="text" name="lastName" placeholder="Last name" />
                  </div>

                  <div className="col-6">
                    <label className="text-16 lh-1 fw-500 text-dark-1 mb-10">Wilaya *</label>
                    <select className="selectize wide js-selectize">
                      <option value="Alger">Alger</option>
                      <option value="Ain Temochent">Ain Temochent</option>
                    </select>
                  </div>

                  <div className="col-6">
                    <label className="text-16 lh-1 fw-500 text-dark-1 mb-10">House number adn street name</label>
                    <input type="text" name="address" placeholder="House number adn street name" />
                  </div>

                  <div className="col-12">
                    <label className="text-16 lh-1 fw-500 text-dark-1 mb-10">Phone *</label>
                    <input type="text" name="phone" placeholder="Phone *" />
                  </div>

                  <div className="col-12">
                    <label className="text-16 lh-1 fw-500 text-dark-1 mb-10">Email address *</label>
                    <input type="email" name="email" placeholder="Email address *" />
                  </div>

                  <div className="col-12">
                    <h5 className="text-20 fw-500 pt-30">Additional information</h5>
                  </div>
                  <div className="col-12">
                    <label className="text-16 lh-1 fw-500 text-dark-1 mb-10">Order notes (optional)</label>
                    <textarea name="notes" id="form_notes" rows={8} placeholder="Order notes (optional)"></textarea>
                  </div>
                </form>
              </div>
            </div>

            <div className="col-lg-4">
              <div className="">
                <div className="pt-30 pb-15 bg-white border-light rounded-8 bg-light-4">
                  <h5 className="px-30 text-20 fw-500">
                    Your order
                  </h5>

                  <div className="d-flex justify-between px-30 mt-25">
                    <div className="py-15 fw-500 text-dark-1">Product</div>
                    <div className="py-15 fw-500 text-dark-1">Subtotal</div>
                  </div>

                  <div className="d-flex justify-between border-top-dark px-30">
                    <div className="py-15 text-grey">Hoodie x2</div>
                    <div className="py-15 text-grey">$59.00</div>
                  </div>

                  <div className="d-flex justify-between px-30">
                    <div className="py-15 text-grey">Seo Books x 1</div>
                    <div className="py-15 text-grey">$67.00</div>
                  </div>

                  <div className="d-flex justify-between border-top-dark px-30">
                    <div className="py-15 fw-500">Subtotal</div>
                    <div className="py-15 fw-500">$178.00</div>
                  </div>

                  <div className="d-flex justify-between border-top-dark px-30">
                    <div className="py-15 fw-500 text-dark-1">Shipping</div>
                    <div className="py-15 fw-500 text-dark-1">$178.00</div>
                  </div>

                  <div className="d-flex justify-between border-top-dark px-30">
                    <div className="py-15 fw-500 text-dark-1">Total</div>
                    <div className="py-15 fw-500 text-dark-1">$9,218.00</div>
                  </div>
                </div>

                <div className="py-30 px-30 bg-white mt-30 border-light rounded-8 bg-light-4">
                  <h5 className="text-20 fw-500">
                    Payment
                  </h5>

                  <div className="mt-30">
                    <div className="form-radio d-flex items-center">
                      <div className="radio">
                        <input type="radio" name="radio" checked />
                        <div className="radio__mark">
                          <div className="radio__icon"></div>
                        </div>
                      </div>
                      <h5 className="ml-15 text-15 lh-1 fw-500 text-dark-1">Direct bank transfer</h5>
                    </div>
                    <p className="ml-25 pl-5 mt-25">Make your payment directly into our bank account. Please use your Order ID as the payment reference. Your order will not be shipped until the funds have cleared in our account.</p>
                  </div>

                  <div className="mt-30">
                    <div className="form-radio d-flex items-center">
                      <div className="radio">
                        <input type="radio" name="radio" checked />
                        <div className="radio__mark">
                          <div className="radio__icon"></div>
                        </div>
                      </div>
                      <h5 className="ml-15 text-15 lh-1 text-dark-1">Check payments</h5>
                    </div>
                  </div>

                  <div className="mt-30">
                    <div className="form-radio d-flex items-center">
                      <div className="radio">
                        <input type="radio" name="radio" checked />
                        <div className="radio__mark">
                          <div className="radio__icon"></div>
                        </div>
                      </div>
                      <h5 className="ml-15 text-15 lh-1 text-dark-1">Cash on delivery</h5>
                    </div>
                  </div>

                  <div className="mt-30">
                    <div className="form-radio d-flex items-center">
                      <div className="radio">
                        <input type="radio" name="radio" checked />
                        <div className="radio__mark">
                          <div className="radio__icon"></div>
                        </div>
                      </div>
                      <h5 className="ml-15 text-15 lh-1 text-dark-1">PayPal</h5>
                    </div>
                  </div>
                </div>

                <div className="mt-30">
                  <button className="button -md -accent col-12 -uppercase bg-dark-1 text-white">Place Reservation</button>
                </div>
              </div>
            </div>

      
          </div>
        </div>
      </section>
    </>
  )
}