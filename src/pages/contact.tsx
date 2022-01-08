import { AdaptiveBg } from "@components/common/AdaptiveBg"
import { Facebook } from "@vectors/Facebook"
import { Instagram } from "@vectors/Instagram"
import { Twitter } from "@vectors/Twitter"
import { Youtube } from "@vectors/Youtube"
import Image from "next/image"
import Link from "next/link"

export const Contact = () => {
  return (
    <AdaptiveBg
      primary={{ background: "/images/backgrounds/landing.jpg", height: "1024px", expandTo: "100vh" }}
      secondary={{ background: "/images/backgrounds/landing-mobile.jpg", height: "926px" }}
      mobile={{ background: "/images/backgrounds/landing-mobile-default.jpg", height: "926px" }}
      classname="main-section flex flex-col items-center pb-12"
      element="main"
      id="main"
    >
      <div className="flex flex-col items-center 2xl:w-7/12">
        <div className="max-w-full text-3xl sm:text-6xl font-bold text-center mb-12 text-white">
          <h1 className="pt-6">ช่องทางการติดตาม</h1>
        </div>
        <div className="flex flex-col max-w-full">
          <div className="flex flex-col 2xl:flex-row">
            <div className="flex flex-col text-center 2xl:w-2/3">
              <div className="flex-col">
                <h2 className="text-xl sm:text-3xl font-semibold text-white">ติดตามงานโอเพนเฮาส์</h2>
              </div>
              <div className="flex flex-col justify-center pt-4 text-gray-500 2xl:pr-6 2xl:flex-row 2xl:border-r-2 2xl:border-gray-200">
                <div className="flex flex-col flex-wrap">
                  <a href="https://www.instagram.com/triamudom.oph/" target="_blank" rel="noreferrer">
                    <div className="flex flex-col justify-center px-16 py-4 mx-3 mb-4 text-xs font-semibold bg-white shadow-md 2xl:h-28 2xl:py-8 2xl:px-10 2xl:mb-8 2xl:text-lg rounded-xl 2xl:rounded-3xl l">
                      <div className="flex flex-row items-center justify-center">
                        <Instagram />
                        <h3 className="pl-2">triamudom.oph</h3>
                      </div>
                    </div>
                  </a>
                  <a href="https://www.facebook.com/TriamUdomOPH" target="_blank" rel="noreferrer">
                    <div className="flex flex-col justify-center px-16 py-4 mx-3 mb-4 text-xs font-semibold bg-white shadow-md 2xl:h-28 2xl:py-8 2xl:px-10 2xl:mb-8 2xl:text-lg rounded-xl 2xl:rounded-3xl ">
                      <div className="flex flex-row items-center justify-center">
                        <Facebook />
                        <h3 className="pl-2 2xl:w-32">TRIAM UDOM OPEN HOUSE</h3>
                      </div>
                    </div>
                  </a>
                </div>
                <div className="flex flex-col flex-wrap">
                  <a href="https://twitter.com/triamudomoph" target="_blank" rel="noreferrer">
                    <div className="flex flex-col justify-center px-16 py-4 mx-3 mb-4 text-xs font-semibold bg-white shadow-md 2xl:h-28 2xl:py-8 2xl:px-10 2xl:mb-8 2xl:text-lg rounded-xl 2xl:rounded-3xl ">
                      <div className="flex flex-row items-center justify-center">
                        <Twitter />
                        <h3 className="pl-2">@triamudomoph</h3>
                      </div>
                    </div>
                  </a>
                  <a href="https://www.youtube.com/channel/UCHebOxW-sZkK8IFmmSFXU6Q" target="_blank" rel="noreferrer">
                    <div className="flex flex-col justify-center px-16 py-4 mx-3 mb-4 text-xs font-semibold bg-white shadow-md 2xl:h-28 2xl:py-8 2xl:px-10 2xl:mb-8 2xl:text-lg rounded-xl 2xl:rounded-3xl ">
                      <div className="flex flex-row items-center justify-center">
                        <Youtube />
                        <h3 className="pl-2">@triamudomoph</h3>
                      </div>
                    </div>
                  </a>
                </div>
              </div>
            </div>
            <div className="flex flex-col text-center 2xl:w-1/3">
              <div className="flex flex-col">
                <h2 className="pt-8 text-xl sm:text-3xl font-semibold text-white 2xl:p-0">ติดต่อผู้จัดงาน</h2>
              </div>
              <div className="flex flex-col justify-center pt-4 text-gray-500 2xl:flex-row 2xl:pl-6">
                <div className="flex flex-col flex-wrap">
                  <a href="https://www.instagram.com/tucmc_official" target="_blank" rel="noreferrer">
                    <div className="flex flex-col justify-center px-16 py-4 mx-3 mb-4 text-xs font-semibold bg-white shadow-md 2xl:h-28 2xl:py-8 2xl:px-10 2xl:mb-8 2xl:text-lg rounded-xl 2xl:rounded-3xl ">
                      <div className="flex flex-row items-center justify-center">
                        <Instagram />
                        <h3 className="pl-2">tucmc_official</h3>
                      </div>
                    </div>
                  </a>
                  <a href="https://www.facebook.com/triamudomclubs" target="_blank" rel="noreferrer">
                    <div className="flex flex-col justify-center px-16 py-4 mx-3 mb-4 text-xs font-semibold bg-white shadow-md 2xl:h-28 2xl:py-8 2xl:px-10 2xl:mb-8 2xl:text-lg rounded-xl 2xl:rounded-3xl ">
                      <div className="flex flex-row items-center justify-center">
                        <Facebook />
                        <h3 className="pl-2">TUCMC</h3>
                      </div>
                    </div>
                  </a>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </AdaptiveBg>
  )
}

export default Contact
