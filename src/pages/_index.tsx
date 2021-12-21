import Router from "next/router"
import {motion} from "framer-motion"
import {Flask, Math} from "@vectors/index/gifted";

const Programme = ({name, thainame}: {name: string, thainame: string}) => {
  return (
    <motion.div
      whileHover={{scale: 1.1}}
      whileTap={{scale: 0.9}}
      onClick={() => {
        Router.push("/programmes/"+ name)
      }}
      className="text-center cursor-pointer">
      <img src={`images/branches/${name}.png`} />
      <h1 className="font-light">{thainame}</h1>
    </motion.div>
  )
}

export default function Home() {
  return (
    <div className="font-display">
      <div>
        <div
          style={{
            background: "url('images/backgrounds/branches.jpg')",
            backgroundRepeat: "no-repeat",
            backgroundSize: "cover",
            minHeight: "1771px",
            backgroundPosition: "center",
          }}
          className="overflow-x-hidden min-h-screen pb-20 text-white py-2"
        >
          <div className="pl-[200px] mx-auto w-max h-[760px]">
            <div className="mt-[300px] relative w-max">
              <h1 className="text-6xl font-semibold leading-[80px] z-[10] relative w-max">
                มาตามหา
                <br />
                สายการเรียน
                <br />
                ที่คุณอยากจะ
                <br />
                ทำความรู้จักกัน !
              </h1>
              <div className="w-[394px] h-[96px] absolute border-[5px] border-yellow-500 rounded-[50%] rotate-[-6deg] top-[74px] left-[-34px] z-[2]" />
              <h1 className="font-light text-xl tracking-wider mt-10 w-max">คลิกที่ดวงดาวเพื่ออ่านข้อมูลสายการเรียน</h1>
            </div>
          </div>
          <div className="flex flex-row mx-auto justify-evenly max-w-[1440px]">
            <div className="space-y-20 flex-shrink-0">
              <Programme name={"sci-math"} thainame={"วิทย์-คณิต"}/>
              <Programme name={"arts-french"} thainame={"ภาษา-ภาษาฝรั่งเศส"}/>
            </div>
            <div className="space-y-20 mt-20 flex-shrink-0">
              <Programme name={"arts-math"} thainame={"ภาษา-คณิต"}/>
              <Programme name={"arts-chinese"} thainame={"ภาษา-ภาษาจีน"}/>
            </div>
            <div className="space-y-20 flex-shrink-0">
              <Programme name={"arts-german"} thainame={"ภาษา-ภาษาเยอรมัน"}/>
              <Programme name={"arts-japanese"} thainame={"ภาษา-ภาษาญี่ปุ่น"}/>
            </div>
            <div className="space-y-20 mt-20 flex-shrink-0">
              <Programme name={"arts-espanol"} thainame={"ภาษา-ภาษาสเปน"}/>
              <Programme name={"arts-korean"} thainame={"ภาษา-ภาษาเกาหลี"}/>
            </div>
          </div>
        </div>
        <div
          style={{
            background: "url('images/backgrounds/gifted.jpg')",
            backgroundRepeat: "no-repeat",
            backgroundSize: "cover",
            minHeight: "1124px",
            backgroundPosition: "center",
          }}
          className="overflow-x-hidden min-h-screen pb-20 text-white py-2 flex justify-center">
          <div className="flex lg:flex-row flex-col space-x-2 lg:mt-[340px] mt-20">
            <div className="relative">
              <h1 className="relative z-[10] text-[48px] font-light tracking-[14px] leading-[54px]">
                Explore
                <br/>
                our
                <br/>
                <span className="font-semibold">Gifted</span>
                <br/>
                programs.
              </h1>
              <div className="w-[214px] h-[67px] absolute border-[3.6px] border-[#DD598F] rounded-[50%] rotate-[-8deg] top-[100px] left-[-10px] z-[2]" />
            </div>
            <div className="space-y-16 lg:mt-0 mt-20">
              <div className="flex md:flex-row flex-col md:space-x-16 space-x-0 md:space-y-0 space-y-16 items-center md: items-start">
                <div onClick={() => {Router.push("/programmes/gifted-science")}} className="relative bg-white w-[195px] h-[195px] rounded-[31.84px] shadow-md cursor-pointer">
                  <div className="absolute top-[-30px] right-[-30px] w-[126px] h-[126px] rounded-full flex justify-center items-center" style={{background: "linear-gradient(214.7deg, #6EB6F8 21.34%, #3144A9 92.79%, #4C97DD 93.46%)",
                    boxShadow: "0px 3.35119px 3.35119px rgba(0, 0, 0, 0.25)"}}>
                    <Flask/>
                  </div>
                  <h1 className="absolute bottom-[20px] left-[26px] text-[24.67px] font-semibold text-black">GIFTED-<br/>SCIENCE</h1>
                </div>
                <div onClick={() => {Router.push("/programmes/gifted-math")}} className="relative bg-white w-[195px] h-[195px] rounded-[31.84px] shadow-md cursor-pointer">
                  <div className="absolute top-[-30px] right-[-30px] w-[126px] h-[126px] rounded-full flex justify-center items-center" style={{background: "linear-gradient(147.81deg, #379E7F 6.47%, #89C9AA 58.72%, #FFE459 102.08%)",
                    boxShadow: "0px 3.35119px 3.35119px rgba(0, 0, 0, 0.25)"}}>
                    <Math/>
                  </div>
                  <h1 className="absolute bottom-[20px] left-[26px] text-[24.67px] font-semibold text-black">GIFTED-<br/>MATH</h1>
                </div>
              </div>
              <div className="flex md:flex-row flex-col md:space-x-16 space-x-0 md:space-y-0 space-y-16 items-center md:items-start">
                <div onClick={() => {Router.push("/programmes/gifted-english")}} className="relative bg-white w-[195px] h-[195px] rounded-[31.84px] shadow-md cursor-pointer">
                  <div className="absolute top-[-30px] right-[-30px] w-[126px] h-[126px] rounded-full flex justify-center items-center" style={{background: "linear-gradient(213.77deg, #BA3269 8.06%, #FC81B3 51.26%, #FFDB7D 88.91%)",
                    boxShadow: "0px 3.35119px 3.35119px rgba(0, 0, 0, 0.25)"}}>
                    <span className="text-[73px] font-black">A</span>
                  </div>
                  <h1 className="absolute bottom-[20px] left-[26px] text-[24.67px] font-semibold text-black">GIFTED-<br/>ENGLISH</h1>
                </div>
                <div onClick={() => {Router.push("/programmes/gifted-thai")}} className="relative bg-white w-[195px] h-[195px] rounded-[31.84px] shadow-md cursor-pointer">
                  <div className="absolute top-[-30px] right-[-30px] w-[126px] h-[126px] rounded-full flex justify-center items-center" style={{background: "linear-gradient(308.56deg, #B2A0F1 14.77%, #46BECE 86.58%, #8129A0 86.59%)",
                    boxShadow: "0px 3.35119px 3.35119px rgba(0, 0, 0, 0.25)"}}>
                    <span className="text-[88px] font-black">ก</span>
                  </div>
                  <h1 className="absolute bottom-[20px] left-[26px] text-[24.67px] font-semibold text-black">GIFTED-<br/>THAI</h1>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}
