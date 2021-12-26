import Router from "next/router"
import { motion } from "framer-motion"
import { Flask, Math } from "@vectors/index/gifted"
import { AdaptiveBg } from "@components/common/AdaptiveBg"
import Image from "next/image"

const Programme = ({ name, thainame }: { name: string; thainame: string }) => {
  return (
    <motion.div
      whileHover={{ scale: 1.1 }}
      whileTap={{ scale: 0.9 }}
      onClick={() => {
        Router.push("/programmes/" + name)
      }}
      className="text-center cursor-pointer w-[100px] sm:w-[160px]"
    >
      <div className="w-[100px] sm:w-[160px]">
        <Image width={160} height={160} src={`/images/branches/${name}.png`} />
      </div>
      <h1 className="font-light">{thainame}</h1>
    </motion.div>
  )
}

export default function Home() {
  return (
    <div className="font-display">
      <div>
        <AdaptiveBg
          primary={{ background: "url('images/backgrounds/branches.jpg')", height: "1771px" }}
          secondary={{ background: "url('images/backgrounds/branches-mobile.jpg')", height: "1385px" }}
          mobile={{ background: "url('images/backgrounds/branches-mobile-default.jpg')", height: "926px" }}
        >
          <div className="pl-0 sm:pl-[200px] mx-auto w-max sm:h-[760px]">
            <div className="mt-[130px] sm:mt-[300px] relative w-max">
              <h1 className="text-5xl sm:text-6xl font-semibold leading-[60px] sm:leading-[80px] z-[10] relative w-max">
                มาตามหา
                <br />
                สายการเรียน
                <br />
                ที่คุณอยากจะ
                <br />
                ทำความรู้จักกัน !
              </h1>
              <div className="w-[300px] sm:w-[394px] h-[78px] sm:h-[96px] absolute border-[5px] border-yellow-500 rounded-[50%] rotate-[-6deg] top-[50px] sm:top-[74px] left-[-34px] z-[2]" />
              <h1 className="font-light text-lg sm:text-xl tracking-wider mt-10 w-max">
                คลิกที่ดวงดาวเพื่ออ่านข้อมูลสายการเรียน
              </h1>
            </div>
          </div>
          <div className="flex flex-col sm:flex-row items-center mx-auto justify-evenly max-w-[1440px] mt-10 sm:mt-0">
            <div className="flex flex-row sm:flex-col space-y-0 sm:space-y-20 flex-shrink-0 sm:space-x-0 space-x-6">
              <Programme name={"sci-math"} thainame={"วิทย์-คณิต"} />
              <Programme name={"arts-french"} thainame={"ภาษา-ภาษาฝรั่งเศส"} />
            </div>
            <div className="flex flex-row sm:flex-col space-y-0 sm:space-y-20 sm:mt-20 flex-shrink-0 sm:space-x-0 space-x-6">
              <Programme name={"arts-math"} thainame={"ภาษา-คณิต"} />
              <Programme name={"arts-chinese"} thainame={"ภาษา-ภาษาจีน"} />
            </div>
            <div className="flex flex-row sm:flex-col space-y-0 sm:space-y-20 flex-shrink-0 sm:space-x-0 space-x-6">
              <Programme name={"arts-german"} thainame={"ภาษา-ภาษาเยอรมัน"} />
              <Programme name={"arts-japanese"} thainame={"ภาษา-ภาษาญี่ปุ่น"} />
            </div>
            <div className="flex flex-row sm:flex-col space-y-0 sm:space-y-20 sm:mt-20 flex-shrink-0 sm:space-x-0 space-x-6">
              <Programme name={"arts-espanol"} thainame={"ภาษา-ภาษาสเปน"} />
              <Programme name={"arts-korean"} thainame={"ภาษา-ภาษาเกาหลี"} />
            </div>
          </div>
        </AdaptiveBg>
        <AdaptiveBg
          primary={{ background: "url('images/backgrounds/gifted.jpg')", height: "1124px" }}
          secondary={{ background: "url('images/backgrounds/gifted-mobile.jpg')", height: "926px" }}
          mobile={{ background: "url('images/backgrounds/gifted-mobile-default.jpg')", height: "926px" }}
        >
          <div className="flex lg:flex-row flex-col items-center lg:items-start justify-center space-x-2 lg:mt-[340px] mt-20">
            <div className="relative">
              <h1 className="relative z-[10] text-[48px] font-light tracking-[14px] leading-[54px]">
                Explore
                <br />
                our
                <br />
                <span className="font-semibold">Gifted</span>
                <br />
                programs.
              </h1>
              <div className="w-[214px] h-[67px] absolute border-[3.6px] border-[#DD598F] rounded-[50%] rotate-[-8deg] top-[100px] left-[-10px] z-[2]" />
            </div>
            <div className="space-y-16 lg:mt-0 mt-20">
              <div className="flex flex-row md:space-x-16 space-x-4 items-center md:items-start">
                <div
                  onClick={() => {
                    Router.push("/programmes/gifted-science")
                  }}
                  className="relative bg-white w-[140px] h-[140px] sm:w-[195px] sm:h-[195px] rounded-[31.84px] shadow-md cursor-pointer"
                >
                  <div
                    className="absolute top-[-30px] right-[-30px] w-[90px] h-[90px] sm:w-[126px] sm:h-[126px] rounded-full flex justify-center items-center z-[20]"
                    style={{
                      background: "linear-gradient(214.7deg, #6EB6F8 21.34%, #3144A9 92.79%, #4C97DD 93.46%)",
                      boxShadow: "0px 3.35119px 3.35119px rgba(0, 0, 0, 0.25)",
                    }}
                  >
                    <Flask className="h-[54px] w-[54px] sm:h-[80px] sm:w-[80px]" />
                  </div>
                  <h1 className="absolute bottom-[20px] left-[26px] text-[20px] sm:text-[24.67px] font-semibold text-black">
                    GIFTED-
                    <br />
                    SCIENCE
                  </h1>
                </div>
                <div
                  onClick={() => {
                    Router.push("/programmes/gifted-math")
                  }}
                  className="relative bg-white w-[140px] h-[140px] sm:w-[195px] sm:h-[195px] rounded-[31.84px] shadow-md cursor-pointer"
                >
                  <div
                    className="absolute top-[-30px] right-[-30px] w-[90px] h-[90px] sm:w-[126px] sm:h-[126px] rounded-full flex justify-center items-center"
                    style={{
                      background: "linear-gradient(147.81deg, #379E7F 6.47%, #89C9AA 58.72%, #FFE459 102.08%)",
                      boxShadow: "0px 3.35119px 3.35119px rgba(0, 0, 0, 0.25)",
                    }}
                  >
                    <Math className="h-[54px] w-[54px] sm:h-[80px] sm:w-[80px]" />
                  </div>
                  <h1 className="absolute bottom-[20px] left-[26px] text-[20px] sm:text-[24.67px] font-semibold text-black">
                    GIFTED-
                    <br />
                    MATH
                  </h1>
                </div>
              </div>
              <div className="flex flex-row md:space-x-16 space-x-4 items-center md:items-start">
                <div
                  onClick={() => {
                    Router.push("/programmes/gifted-english")
                  }}
                  className="relative bg-white w-[140px] h-[140px] sm:w-[195px] sm:h-[195px] rounded-[31.84px] shadow-md cursor-pointer"
                >
                  <div
                    className="absolute top-[-30px] right-[-30px] w-[90px] h-[90px] sm:w-[126px] sm:h-[126px] rounded-full flex justify-center items-center z-[20]"
                    style={{
                      background: "linear-gradient(213.77deg, #BA3269 8.06%, #FC81B3 51.26%, #FFDB7D 88.91%)",
                      boxShadow: "0px 3.35119px 3.35119px rgba(0, 0, 0, 0.25)",
                    }}
                  >
                    <span className="text-[60px] sm:text-[73px] font-black">A</span>
                  </div>
                  <h1 className="absolute bottom-[20px] left-[26px] text-[20px] sm:text-[24.67px] font-semibold text-black">
                    GIFTED-
                    <br />
                    ENGLISH
                  </h1>
                </div>
                <div
                  onClick={() => {
                    Router.push("/programmes/gifted-thai")
                  }}
                  className="relative bg-white w-[140px] h-[140px] sm:w-[195px] sm:h-[195px] rounded-[31.84px] shadow-md cursor-pointer"
                >
                  <div
                    className="absolute top-[-30px] right-[-30px] w-[90px] h-[90px] sm:w-[126px] sm:h-[126px] rounded-full flex justify-center items-center"
                    style={{
                      background: "linear-gradient(308.56deg, #B2A0F1 14.77%, #46BECE 86.58%, #8129A0 86.59%)",
                      boxShadow: "0px 3.35119px 3.35119px rgba(0, 0, 0, 0.25)",
                    }}
                  >
                    <span className="text-[70px] sm:text-[88px] font-black">ก</span>
                  </div>
                  <h1 className="absolute bottom-[20px] left-[26px] text-[20px] sm:text-[24.67px] font-semibold text-black">
                    GIFTED-
                    <br />
                    THAI
                  </h1>
                </div>
              </div>
            </div>
          </div>
        </AdaptiveBg>
        <AdaptiveBg
          primary={{ background: "url('images/backgrounds/clubs-index.jpg')", height: "1124px" }}
          secondary={{ background: "url('images/backgrounds/clubs-index-mobile.jpg')", height: "926px" }}
          mobile={{ background: "url('images/backgrounds/clubs-index-mobile-default.jpg')", height: "926px" }}
        >
          <></>
        </AdaptiveBg>
      </div>
    </div>
  )
}
