import { AdaptiveBg } from "@components/common/AdaptiveBg"
import { Flask, Math } from "@vectors/index/gifted"
import { Programme } from "@components/programme"
import { motion } from "framer-motion"
import Link from "next/link"

const Page = () => {
  return (
    <div>
      <AdaptiveBg
        primary={{ background: "/images/backgrounds/branches.jpg", height: "1771px" }}
        secondary={{ background: "/images/backgrounds/branches-mobile.jpg", height: "1385px" }}
        mobile={{ background: "/images/backgrounds/branches-mobile-default.jpg", height: "926px" }}
        element="section"
      >
        <div className="pl-0 sm:pl-[200px] mx-auto w-max sm:h-[680px]">
          <div className="mt-[110px] sm:mt-[300px] relative w-max">
            <p className="text-5xl sm:text-6xl font-semibold leading-[60px] sm:leading-[80px] z-[10] relative w-max">
              มาตามหา
              <br />
              สายการเรียน
              <br />
              ที่คุณอยากจะ
              <br />
              ทำความรู้จักกัน !
            </p>
            <div className="w-[300px] sm:w-[394px] h-[78px] sm:h-[96px] absolute border-[5px] border-yellow-500 rounded-[50%] rotate-[-6deg] top-[50px] sm:top-[74px] left-[-34px] z-[2]" />
            <p className="font-light text-lg sm:text-xl tracking-wider mt-10 w-max">
              คลิกที่ดวงดาวเพื่ออ่านข้อมูลสายการเรียน
            </p>
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
      <div
        style={{
          background:
            "linear-gradient(180deg, rgba(40, 67, 119, 0.15) 0%, rgba(39, 66, 116, 0) 0.01%, rgba(79, 88, 138, 0.0225) 48.74%, rgba(122, 112, 162, 0) 100%)",
        }}
        className="w-full h-[95px] mt-[-42px] bg-white backdrop-filter backdrop-blur-[6px] absolute"
      />
      <AdaptiveBg
        primary={{ background: "/images/backgrounds/gifted.jpg", height: "1124px" }}
        secondary={{ background: "/images/backgrounds/gifted-mobile.jpg", height: "926px" }}
        mobile={{ background: "/images/backgrounds/gifted-mobile-default.jpg", height: "926px" }}
        element="section"
      >
        <div className="flex lg:flex-row flex-col items-center lg:items-start justify-center space-x-2 lg:mt-[340px] mt-20">
          <div className="relative">
            <p className="relative z-[10] text-[48px] font-light tracking-[14px] leading-[54px]">
              Explore
              <br />
              our
              <br />
              <span className="font-semibold">Gifted</span>
              <br />
              programs.
            </p>
            <div className="w-[214px] h-[67px] absolute border-[3.6px] border-[#DD598F] rounded-[50%] rotate-[-8deg] top-[100px] left-[-10px] z-[2]" />
          </div>
          <div className="space-y-16 lg:mt-0 mt-20">
            <div className="flex flex-row md:space-x-16 space-x-4 items-center md:items-start">
              <Link passHref href="/programmes/gifted-science">
                <motion.a
                  whileHover={{ scale: 1.04 }}
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
                  <p className="absolute bottom-[20px] left-[26px] text-[20px] sm:text-[24.67px] font-semibold text-black">
                    GIFTED-
                    <br />
                    SCIENCE
                  </p>
                </motion.a>
              </Link>

              <Link passHref href="/programmes/gifted-math">
                <motion.a
                  whileHover={{ scale: 1.04 }}
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
                  <p className="absolute bottom-[20px] left-[26px] text-[20px] sm:text-[24.67px] font-semibold text-black">
                    GIFTED-
                    <br />
                    MATH
                  </p>
                </motion.a>
              </Link>
            </div>
            <div className="flex flex-row md:space-x-16 space-x-4 items-center md:items-start">
              <Link passHref href="/programmes/gifted-english">
                <motion.a
                  whileHover={{ scale: 1.04 }}
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
                  <p className="absolute bottom-[20px] left-[26px] text-[20px] sm:text-[24.67px] font-semibold text-black">
                    GIFTED-
                    <br />
                    ENGLISH
                  </p>
                </motion.a>
              </Link>

              <Link passHref href="/programmes/gifted-thai">
                <motion.a
                  whileHover={{ scale: 1.04 }}
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
                  <p className="absolute bottom-[20px] left-[26px] text-[20px] sm:text-[24.67px] font-semibold text-black">
                    GIFTED-
                    <br />
                    THAI
                  </p>
                </motion.a>
              </Link>
            </div>
          </div>
        </div>
      </AdaptiveBg>
    </div>
  )
}

export default Page
