import { AdaptiveBg } from "@components/common/AdaptiveBg"
import { NextPage } from "next"

const Admission: NextPage = () => {
  return (
    <>
      <AdaptiveBg
        primary={{ background: "/images/backgrounds/live.jpg", height: "1024px" }}
        secondary={{ background: "/images/backgrounds/live-mobile.jpg", height: "926px" }}
        mobile={{ background: "/images/backgrounds/live-mobile-default.jpg", height: "926px" }}
        classname="main-section flex flex-col space-y-4 p-24 text-white"
        element="main"
      >
        <div className="p-4 text-center">
          <h1 className="text-5xl sm:text-6xl font-semibold">การสอบเข้า</h1>
          <p className="text-lg sm:text-xl font-light mt-2">โรงเรียนเตรียมอุดมศึกษา</p>
        </div>
        <section className="" id="admisson-schedule">
          <h2 className="text-xl sm:text-2xl font-semibold">กำหนดการสอบเข้า</h2>
        </section>
      </AdaptiveBg>
    </>
  )
}

export default Admission
