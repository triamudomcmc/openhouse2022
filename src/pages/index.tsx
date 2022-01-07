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
    </>
  )
}

export default Highlights
