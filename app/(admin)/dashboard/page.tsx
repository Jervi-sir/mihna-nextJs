import { Notifications } from "./Notifications";
import { PopularInstructor } from "./PopularInstructor";
import { RecentCourses } from "./RecentCourses";
import { Section1 } from "./Section1";
import { Section2 } from "./Section2";

export default function Dashboard() {
  return (
    <>
      <div className="row pb-50 mb-10">
        <div className="col-auto">
          <h1 className="text-30 lh-12 fw-700">Dashboard</h1>
          <div className="mt-10">Lorem ipsum dolor sit amet, consectetur.</div>
        </div>
      </div>

      <Section1 />
      <Section2 />

      <div className="row y-gap-30 pt-30">
        <div className="col-xl-4 col-md-6">
          <PopularInstructor />
        </div>

        <div className="col-xl-4 col-md-6">
          <RecentCourses />
        </div>

        <div className="col-xl-4 col-md-6">
          <Notifications />
        </div>
      </div>
    </>
  )
}