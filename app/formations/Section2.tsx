export const Section2 = () => {
  const label = [
    'User Experience Design', 'Figma', 
    'Graphical User Interface', 'Web Design', 
    'Adobe XD', 'Sketch Software', 
    'Webflow', 'Jervi', 
  ]
  return (
    <>
      <section className="layout-pt-md layout-pb-md">
        <div className="container">
          <div className="row">
            <div className="col-auto">
              <h2 className="text-24 lh-12">Popular Instructors</h2>
            </div>
          </div>

          <div className="row x-gap-20 y-gap-20 pt-30">
            {
              label.map((e, index) => (
                <div className="col-auto">
                  <button className="button h-60 px-35 -purple-3 text-purple-1">{ e }</button>
                </div>
              ))
            }
           

          </div>
        </div>
      </section>
    </>
  )
}