import { AdaptiveBg } from "@components/common/AdaptiveBg"
import { CountDown } from "@components/common/Countdown"
import { LogoWhite } from "@vectors/Logo"
import Image from "next/image"

const Highlights = () => {
  return (
    <>
      <AdaptiveBg
        primary={{ background: "/images/backgrounds/landing.jpg", height: "1024px", expandTo: "100vh" }}
        secondary={{ background: "/images/backgrounds/landing-mobile.jpg", height: "926px" }}
        mobile={{ background: "/images/backgrounds/landing-mobile-default.jpg", height: "926px" }}
        classname="flex font-display items-center"
        element="main"
      >
        <div className="flex flex-col items-start sm:items-center w-full px-8">
          <h1 className="flex flex-col items-start sm:items-center font-game">
            <span className="text-[64px] xl:text-[116px] leading-[64px] xl:leading-[156px] font-black tracking-[14px] xl:tracking-[21px]">
              TRIAM UDOM
            </span>
            <span className="text-[24px] xl:text-[50px] tracking-[8px] xl:tracking-[11px] font-light mt-[10px] xl:mt-[-26px]">
              ONLINE OPEN HOUSE 2022
            </span>
            <span className="text-[16px] md:text-[30px] font-thin tracking-[8px] md:tracking-[10px] mt-10">
              14-15 JANUARY
            </span>
          </h1>
          <div className="flex flex-col items-start sm:items-center">
            <CountDown />
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
        <div className="flex flex-wrap justify-center items-center">
          <div className="flex flex-col justify-center space-y-4 mt-6 mx-3">
            <Image
              className="border border-white rounded-xl"
              objectFit={"cover"}
              src={"/assets/highlights/live-interview.png"}
              alt="สัมภาษณ์ศิษย์เก่า"
              priority={true}
              width={266}
              height={149}
            />
            <p className="text-center px-4 font-display text-white font-light text-[18px] mt-2">
              LIVE สัมภาษณ์ศิษย์เก่าและคอนเทนต์ <br />
              ที่น่าสนใจอื่น ๆ อีกมากมาย
            </p>
          </div>
          <div className="flex flex-col justify-center space-y-4 mt-6 mx-3">
            <Image
              className="border background-position border-white rounded-xl"
              objectFit={"cover"}
              src={"/assets/highlights/zoom-promotion.jpg"}
              alt="สัมภาษณ์ศิษย์เก่า"
              priority={true}
              width={266}
              height={149}
            />
            <p className="text-center px-4 font-display text-white font-light text-[18px] mt-2">
              ปรึกษาปัญหา-พูดคุยกับพี่ ๆ <br />
              ได้ในกิจกรรม ZOOM สายการเรียน
            </p>
          </div>
          <div className="flex flex-col justify-center space-y-4 mt-6 mx-3">
            <Image
              className="border border-white rounded-xl"
              src={"/assets/highlights/articles.jpg"}
              alt="สัมภาษณ์ศิษย์เก่า"
              priority={true}
              width={266}
              height={149}
            />
            <p className="text-center px-4 font-display text-white font-light text-[18px] mt-2">
              คลิป / บทความที่น่าสนใจ <br />
              จากรุ่นพี่เตรียมอุดมฯ
            </p>
          </div>
        </div>
      </section>
    </>
  )
}

export default Highlights
