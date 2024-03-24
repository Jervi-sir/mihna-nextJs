export const Section1 = () => {
  return (
    <div className="row y-gap-30">
      {
        [
          { title: 'Total Sales', totalAmount: '$10,800', newAdded: '$50', newWhat: 'New Sales', icon: 'icon-coupon' },
          { title: 'Total Courses', totalAmount: '3,759', newAdded: '40+', newWhat: 'New Courses', icon: 'icon-play-button' },
          { title: 'Total Students', totalAmount: '129,786', newAdded: '90+', newWhat: 'New Students', icon: 'icon-graduate-cap' },
          { title: 'Total Instructor', totalAmount: '22,786', newAdded: '290+', newWhat: 'New Instructor', icon: 'icon-online-learning' },
        ].map((e, index) => (
          <div className="col-xl-3 col-md-6">
            <div className="d-flex justify-between items-center py-35 px-30 rounded-16 bg-white -dark-bg-dark-1 shadow-4">
              <div>
                <div className="lh-1 fw-500">{e.title}</div>
                <div className="text-24 lh-1 fw-700 text-dark-1 mt-20">{e.totalAmount}</div>
                <div className="lh-1 mt-25"><span className="text-purple-1">{e.newAdded}</span> {e.newWhat}</div>
              </div>
              <i className={`text-40 ${e.icon} text-purple-1`}></i>
            </div>
          </div>
        ))
      }
    </div>
  )
}