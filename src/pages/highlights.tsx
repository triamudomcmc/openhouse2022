import { AdaptiveBg } from "@components/common/AdaptiveBg"
import { LogoWhite } from "@vectors/Logo"
import Router from "next/router"

const Highlights = () => {
  return (
    <>
      <AdaptiveBg
        primary={{ background: "/images/backgrounds/landing.jpg", height: "1024px" }}
        secondary={{ background: "/images/backgrounds/landing-mobile.jpg", height: "926px" }}
        mobile={{ background: "/images/backgrounds/landing-mobile-default.jpg", height: "926px" }}
        classname="flex font-display items-center"
        element="main"
      >
        <div className="flex flex-col items-start sm:items-center w-full px-8">
          <h1 className="text-[64px] xl:text-[116px] leading-[64px] xl:leading-[156px] font-black tracking-[14px] xl:tracking-[30px]">
            TRIAM UDOM
          </h1>
          <h1 className="text-[40px] xl:text-[70px] tracking-[8px] xl:tracking-[13px] font-light mt-[10px] xl:mt-[-26px]">
            ONLINE OPEN HOUSE 2022
          </h1>
          <h1 className="text-[20px] md:text-[30px] font-thin tracking-[8px] md:tracking-[10px] mt-10">
            14-15 JANUARY
          </h1>
          <div className="flex flex-col items-center">
            <div
              onClick={() => {
                Router.push("/register")
              }}
              className="text-xl font-thin px-16 rounded-full py-3 mt-[50px] md:mt-[80px] cursor-pointer"
              style={{ background: "linear-gradient(267.68deg, #A1677D 4.3%, #EFBB8B 94.12%)" }}
            >
              <h1>เข้าสู่ระบบ</h1>
            </div>
            <LogoWhite className="w-[174px] mt-6 md:mt-16" />
          </div>
        </div>
      </AdaptiveBg>
      <section
        className="flex flex-col items-center py-20 space-y-6 min-h-[480px]"
        style={{
          background:
            "linear-gradient(180deg, #041320 0%, #0A1D2D 2.08%, #0A1D2D 11.46%, #09243A 50.52%, #071A28 100%)",
        }}
      >
        <h1 className="text-[#D6A087] font-black text-5xl text-center">Highlights</h1>
        <div className="flex flex-wrap justify-center">
          <div className="mt-6 mx-3">
            <div className="w-[266px] h-[149px] border border-white rounded-xl" />
            <p className="text-center text-white font-light text-[18px] mt-2">
              LIVE สัมภาษณ์ศิษย์เก่าและคอนเทนต์ <br />
              ที่น่าสนใจอื่น ๆ อีกมากมาย
            </p>
          </div>
          <div className="mt-6 mx-3">
            <div className="w-[266px] h-[149px] border border-white rounded-xl" />
            <p className="text-center text-white font-light text-[18px] mt-2">
              คลิป/บทความที่น่าสนใจ <br />
              จากรุ่นพี่เตรียมอุดมฯ
            </p>
          </div>
          <div className="mt-6 mx-3">
            <div className="w-[266px] h-[149px] border border-white rounded-xl" />
            <p className="text-center text-white font-light text-[18px] mt-2">
              ปรึกษาปัญหา-พูดคุยกับพี่ ๆ <br />
              ได้ในกิจกรรม ZOOM สายการเรียน
            </p>
          </div>
        </div>
      </section>
    </>
  )
}

export default Highlights
