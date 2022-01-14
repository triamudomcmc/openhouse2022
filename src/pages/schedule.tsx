import { AdaptiveBg } from "@components/common/AdaptiveBg"
import Router from "next/router"
import { ArrowCircleLeftIcon } from "@heroicons/react/outline"
import {GetStaticProps} from "next";
import {getDb} from "@lib/firebase-admin";

const zeroPad = (num: number, places: number) => String(num).padStart(places, '0')

export const getStaticProps: GetStaticProps = async () => {
  const data = await getDb().collection("schedule").doc("GSUnaiZv85XPHPWiZOzf").get()
  const schedule = data.get("14").map((e: any) => {

    return {
      name: e.name,
      start: e.start._seconds
    }
  })

  const schedule2 = data.get("15").map((e: any) => {

    return {
      name: e.name,
      start: e.start._seconds
    }
  })


  return {
    props: {
      schedule: {"14": schedule, "15": schedule2}
    },
  }
}

const Schedule = ({schedule}: any) => {
  return (
    <>
      <AdaptiveBg
        primary={{ background: "/images/backgrounds/live.jpg", height: "1024px", expandTo: "100%"  }}
        secondary={{ background: "/images/backgrounds/live-mobile.jpg", height: "926px" }}
        mobile={{ background: "/images/backgrounds/live-mobile-default.jpg", height: "926px" }}
        element="main"
      >
        <div className="mt-32 mx-auto max-w-6xl px-6">
          <div>
            <div
              onClick={() => {
                Router.back()
              }}
              className="absolute flex items-center space-x-2 -mt-16 sm:mt-0 cursor-pointer"
            >
              <ArrowCircleLeftIcon className="w-7 h-7" />
              <span className="text-lg">ย้อนกลับ</span>
            </div>
            <h1 className="font-semibold text-5xl text-center">ตารางรายการสด</h1>
          </div>
          <div className="flex flex-wrap justify-center lg:justify-between max-w-4xl mx-auto">
            <div className="flex flex-col items-center max-w-[400px] mx-auto sm:mx-0 mt-20 px-2">
              <p className="text-[#e9b3ee] font-black text-2xl mb-6">14 JANUARY 2022</p>
              <div>
                {
                  schedule["14"].map((e: any, index: number) => {
                    if (index === 0) {
                      return (
                        <div className="flex space-x-3">
                          <div className="relative border-l-2 border-[#C898CC] mt-3">
                            <div className="absolute left-[-5px] w-2 h-2 rounded-full bg-[#C898CC]" />
                          </div>
                          <p className="text-xl font-black">{zeroPad(new Date(e.start * 1000).getHours(), 2)}:{zeroPad(new Date(e.start * 1000).getMinutes(), 2)}</p>
                          <div className="mt-1">
                            <p className="text-lg leading-[20px] mb-6">{e.name}</p>
                          </div>
                        </div>
                      )
                    }
                    if (index >= schedule["14"].length - 1) {
                      return (
                        <div className="flex space-x-3 h-[60px]">
                          <div className="relative border-l-2 border-[#C898CC] mb-[36px]">
                            <div className="absolute left-[-5px] w-2 h-2 rounded-full bg-[#C898CC] mt-[18px]" />
                          </div>
                          <div className="flex space-x-3 pt-2">
                            <p className="text-xl font-black">{zeroPad(new Date(e.start * 1000).getHours(), 2)}:{zeroPad(new Date(e.start * 1000).getMinutes(), 2)}</p>
                            <div className="mt-1">
                              <p className="text-lg leading-[20px]">{e.name}</p>
                            </div>
                          </div>
                        </div>
                      )
                    }
                    return(
                      <div key={`re-${index}`} className="flex space-x-3 h-[60px]">
                        <div className="relative border-l-2 border-[#C898CC]">
                          <div className="absolute left-[-5px] w-2 h-2 rounded-full bg-[#C898CC] mt-[18px]" />
                        </div>
                        <div className="flex space-x-3 pt-2">
                          <p className="text-xl font-black">{zeroPad(new Date(e.start * 1000).getHours(), 2)}:{zeroPad(new Date(e.start * 1000).getMinutes(), 2)}</p>
                          <div className="mt-1">
                            <p className="text-lg leading-[20px]">{e.name}</p>
                          </div>
                        </div>
                      </div>
                    )
                  })
                }
              </div>
            </div>
            <div className="flex flex-col items-center max-w-[400px] mx-auto sm:mx-0 mt-20 px-2">
              <p className="text-[#C898CC] font-black text-2xl mb-6">15 JANUARY 2022</p>
              <div>
                {
                  schedule["15"].map((e: any, index: number) => {
                    if (index === 0) {
                      return (
                        <div className="flex space-x-3">
                          <div className="relative border-l-2 border-[#C898CC] mt-3">
                            <div className="absolute left-[-5px] w-2 h-2 rounded-full bg-[#C898CC]" />
                          </div>
                          <p className="text-xl font-black">{zeroPad(new Date(e.start * 1000).getHours(), 2)}:{zeroPad(new Date(e.start * 1000).getMinutes(), 2)}</p>
                          <div className="mt-1">
                            <p className="text-lg leading-[20px] mb-6">{e.name}</p>
                          </div>
                        </div>
                      )
                    }
                    if (index >= schedule["15"].length - 1) {
                      return (
                        <div className="flex space-x-3 h-[60px]">
                          <div className="relative border-l-2 border-[#C898CC] mb-[36px]">
                            <div className="absolute left-[-5px] w-2 h-2 rounded-full bg-[#C898CC] mt-[18px]" />
                          </div>
                          <div className="flex space-x-3 pt-2">
                            <p className="text-xl font-black">{zeroPad(new Date(e.start * 1000).getHours(), 2)}:{zeroPad(new Date(e.start * 1000).getMinutes(), 2)}</p>
                            <div className="mt-1">
                              <p className="text-lg leading-[20px]">{e.name}</p>
                            </div>
                          </div>
                        </div>
                      )
                    }
                    return(
                      <div key={`re-${index}`} className="flex space-x-3 h-[60px]">
                        <div className="relative border-l-2 border-[#C898CC]">
                          <div className="absolute left-[-5px] w-2 h-2 rounded-full bg-[#C898CC] mt-[18px]" />
                        </div>
                        <div className="flex space-x-3 pt-2">
                          <p className="text-xl font-black">{zeroPad(new Date(e.start * 1000).getHours(), 2)}:{zeroPad(new Date(e.start * 1000).getMinutes(), 2)}</p>
                          <div className="mt-1">
                            <p className="text-lg leading-[20px]">{e.name}</p>
                          </div>
                        </div>
                      </div>
                    )
                  })
                }
              </div>
            </div>
          </div>
        </div>
      </AdaptiveBg>
    </>
  )
}

export default Schedule
