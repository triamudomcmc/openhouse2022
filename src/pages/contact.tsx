import { AdaptiveBg } from "@components/common/AdaptiveBg"
import { Facebook } from "@vectors/Facebook"
import { Instagram } from "@vectors/Instagram"
import { Twitter } from "@vectors/Twitter"
import { Youtube } from "@vectors/Youtube"
import { motion } from "framer-motion"
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
      <div className="flex flex-col items-center xl:w-7/12">
        <div className="max-w-full text-3xl sm:text-6xl font-bold text-center mb-12 text-white">
          <h1 className="pt-6 xl:pt-12">ช่องทางการติดตาม</h1>
        </div>
        <div className="flex flex-col max-w-full">
          <div className="flex flex-col xl:flex-row">
            <div className="flex flex-col text-center xl:w-2/3">
              <div className="flex-col">
                <h2 className="text-xl sm:text-3xl font-semibold text-white">ติดตามงานโอเพนเฮาส์</h2>
              </div>
              <div className="flex flex-col justify-center pt-4 text-gray-500 xl:pr-6 xl:flex-row xl:border-r-2 xl:border-gray-200">
                <div className="flex flex-col flex-wrap">
                  <motion.a
                    whileHover={{ scale: 1.02 }}
                    href="https://www.instagram.com/triamudom.oph/"
                    target="_blank"
                    rel="noreferrer"
                  >
                    <div className="flex flex-col justify-center px-8 py-4 mx-3 mb-4 text-xs font-semibold bg-white shadow-md xl:h-28 xl:py-8 xl:px-10 xl:mb-8 xl:text-lg rounded-full xl:rounded-3xl l">
                      <div className="flex flex-row items-center justify-start xl:justify-center pl-[25px] xl:pl-[0] space-x-2 xl:space-x-0">
                        <Instagram />
                        <h3 className="pl-2">triamudom.oph</h3>
                      </div>
                    </div>
                  </motion.a>
                  <motion.a
                    whileHover={{ scale: 1.02 }}
                    href="https://www.facebook.com/TriamUdomOPH"
                    target="_blank"
                    rel="noreferrer"
                  >
                    <div className="flex flex-col justify-center px-8 py-4 mx-3 mb-4 text-xs font-semibold bg-white shadow-md xl:h-28 xl:py-8 xl:px-10 xl:mb-8 xl:text-lg rounded-full xl:rounded-3xl ">
                      <div className="flex flex-row items-center justify-start xl:justify-center pl-[25px] xl:pl-[0] space-x-2 xl:space-x-0">
                        <Facebook />
                        <h3 className="pl-2 xl:w-32">Triam Udom Open House</h3>
                      </div>
                    </div>
                  </motion.a>
                </div>
                <div className="flex flex-col flex-wrap">
                  <motion.a
                    whileHover={{ scale: 1.02 }}
                    href="https://twitter.com/triamudomoph"
                    target="_blank"
                    rel="noreferrer"
                  >
                    <div className="flex flex-col justify-center px-8 py-4 mx-3 mb-4 text-xs font-semibold bg-white shadow-md xl:h-28 xl:py-8 xl:px-10 xl:mb-8 xl:text-lg rounded-full xl:rounded-3xl ">
                      <div className="flex flex-row items-center justify-start xl:justify-center pl-[25px] xl:pl-[0] space-x-2 xl:space-x-0">
                        <Twitter />
                        <h3 className="pl-2">@triamudomoph</h3>
                      </div>
                    </div>
                  </motion.a>
                  <motion.a
                    whileHover={{ scale: 1.02 }}
                    href="https://www.youtube.com/channel/UCHebOxW-sZkK8IFmmSFXU6Q"
                    target="_blank"
                    rel="noreferrer"
                  >
                    <div className="flex flex-col justify-center px-8 py-4 mx-3 mb-4 text-xs font-semibold bg-white shadow-md xl:h-28 xl:py-8 xl:px-10 xl:mb-8 xl:text-lg rounded-full xl:rounded-3xl ">
                      <div className="flex flex-row items-center justify-start xl:justify-center pl-[25px] xl:pl-[0] space-x-2 xl:space-x-0">
                        <Youtube />
                        <h3 className="pl-2 xl:w-32">Triam Udom Open House</h3>
                      </div>
                    </div>
                  </motion.a>
                </div>
              </div>
            </div>
            <div className="flex flex-col text-center xl:w-1/3">
              <div className="flex flex-col">
                <h2 className="pt-8 text-xl sm:text-3xl font-semibold text-white xl:p-0">ติดต่อผู้จัดงาน</h2>
              </div>
              <div className="flex flex-col justify-center pt-4 text-gray-500 xl:flex-row xl:pl-6">
                <div className="flex flex-col flex-wrap">
                  <motion.a
                    whileHover={{ scale: 1.02 }}
                    href="https://www.instagram.com/tucmc_official"
                    target="_blank"
                    rel="noreferrer"
                  >
                    <div className="flex flex-col justify-center px-8 py-4 mx-3 mb-4 text-xs font-semibold bg-white shadow-md xl:h-28 xl:py-8 xl:px-10 xl:mb-8 xl:text-lg rounded-full xl:rounded-3xl ">
                      <div className="flex flex-row items-center justify-start xl:justify-center pl-[25px] xl:pl-[0] space-x-2 xl:space-x-0">
                        <Instagram />
                        <h3 className="pl-2">tucmc_official</h3>
                      </div>
                    </div>
                  </motion.a>
                  <motion.a
                    whileHover={{ scale: 1.02 }}
                    href="https://www.facebook.com/triamudomclubs"
                    target="_blank"
                    rel="noreferrer"
                  >
                    <div className="flex flex-col justify-center px-8 py-4 mx-3 mb-4 text-xs font-semibold bg-white shadow-md xl:h-28 xl:py-8 xl:px-10 xl:mb-8 xl:text-lg rounded-full xl:rounded-3xl ">
                      <div className="flex flex-row items-center justify-start xl:justify-center pl-[25px] xl:pl-[0] space-x-2 xl:space-x-0">
                        <Facebook />
                        <h3 className="pl-2">TUCMC</h3>
                      </div>
                    </div>
                  </motion.a>
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
