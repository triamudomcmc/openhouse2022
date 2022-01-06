import { AdaptiveBg } from "@components/common/AdaptiveBg"
import { NextPage } from "next"

const Admission: NextPage = () => {
  return (
    <>
      <AdaptiveBg
        primary={{ background: "/images/backgrounds/live.jpg", height: "1024px" }}
        secondary={{ background: "/images/backgrounds/live-mobile.jpg", height: "926px" }}
        mobile={{ background: "/images/backgrounds/live-mobile-default.jpg", height: "926px" }}
        classname="main-section flex p-24"
        element="main"
      >
        <div className="p-4">
          <h1 className="text-white text-5xl sm:text-6xl font-semibold">Admission Info</h1>
        </div>
      </AdaptiveBg>
    </>
  )
}

export default Admission
