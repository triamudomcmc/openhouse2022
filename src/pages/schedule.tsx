import { AdaptiveBg } from "@components/common/AdaptiveBg"
import Router from "next/router"
import { ArrowCircleLeftIcon } from "@heroicons/react/outline"

const Schedule = () => {
  return (
    <>
      <AdaptiveBg
        primary={{ background: "/images/backgrounds/live.jpg", height: "1024px", expandTo: "100vh"  }}
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
          <div className="flex flex-wrap justify-between max-w-xl mx-auto">
            <div className="flex flex-col items-center mx-auto sm:mx-0 mt-20 px-2">
              <p className="text-[#e9b3ee] font-black text-2xl mb-6">14 JANUARY 2022</p>
              <div>
                <div className="flex space-x-3 mb-2 py-2 px-6 border border-white rounded-md">
                  <p className="text-xl font-black">10.00</p>
                  <div className="mt-1">
                    <p className="text-2xl leading-[20px]">จตุรกิฟต์ทอล์ก</p>
                    <span className="font-thin text-sm text-gray-300">รุ่นพี่จากโครงการพิเศษ</span>
                  </div>
                </div>
                <div className="flex space-x-3 py-2 px-6 border border-white rounded-md">
                  <div className="flex space-x-3 pt-2">
                    <p className="text-xl font-black">10.00</p>
                    <div className="mt-1">
                      <p className="text-2xl leading-[20px]">จตุรกิฟต์ทอล์ก</p>
                      <span className="font-thin text-sm text-gray-300">รุ่นพี่จากโครงการพิเศษ</span>
                    </div>
                  </div>
                </div>
                <div className="flex space-x-3 h-[60px]">
                  <div className="relative border-l-2 border-[#C898CC]">
                    <div className="absolute left-[-5px] w-2 h-2 rounded-full bg-[#C898CC] mt-[18px]" />
                  </div>
                  <div className="flex space-x-3 pt-2">
                    <p className="text-xl font-black">10.00</p>
                    <div className="mt-1">
                      <p className="text-2xl leading-[20px]">จตุรกิฟต์ทอล์ก</p>
                      <span className="font-thin text-sm text-gray-300">รุ่นพี่จากโครงการพิเศษ</span>
                    </div>
                  </div>
                </div>
                <div className="flex space-x-3 h-[60px]">
                  <div className="relative border-l-2 border-[#C898CC]">
                    <div className="absolute left-[-5px] w-2 h-2 rounded-full bg-[#C898CC] mt-[18px]" />
                  </div>
                  <div className="flex space-x-3 pt-2">
                    <p className="text-xl font-black">10.00</p>
                    <div className="mt-1">
                      <p className="text-2xl leading-[20px]">จตุรกิฟต์ทอล์ก</p>
                      <span className="font-thin text-sm text-gray-300">รุ่นพี่จากโครงการพิเศษ</span>
                    </div>
                  </div>
                </div>
                <div className="flex space-x-3 h-[60px]">
                  <div className="relative border-l-2 border-[#C898CC]">
                    <div className="absolute left-[-5px] w-2 h-2 rounded-full bg-[#C898CC] mt-[18px]" />
                  </div>
                  <div className="flex space-x-3 pt-2">
                    <p className="text-xl font-black">10.00</p>
                    <div className="mt-1">
                      <p className="text-2xl leading-[20px]">จตุรกิฟต์ทอล์ก</p>
                      <span className="font-thin text-sm text-gray-300">รุ่นพี่จากโครงการพิเศษ</span>
                    </div>
                  </div>
                </div>
                <div className="flex space-x-3 h-[60px]">
                  <div className="relative border-l-2 border-[#C898CC]">
                    <div className="absolute left-[-5px] w-2 h-2 rounded-full bg-[#C898CC] mt-[18px]" />
                  </div>
                  <div className="flex space-x-3 pt-2">
                    <p className="text-xl font-black">10.00</p>
                    <div className="mt-1">
                      <p className="text-2xl leading-[20px]">จตุรกิฟต์ทอล์ก</p>
                      <span className="font-thin text-sm text-gray-300">รุ่นพี่จากโครงการพิเศษ</span>
                    </div>
                  </div>
                </div>
                <div className="flex space-x-3 h-[60px]">
                  <div className="relative border-l-2 border-[#C898CC]">
                    <div className="absolute left-[-5px] w-2 h-2 rounded-full bg-[#C898CC] mt-[18px]" />
                  </div>
                  <div className="flex space-x-3 pt-2">
                    <p className="text-xl font-black">10.00</p>
                    <div className="mt-1">
                      <p className="text-2xl leading-[20px]">จตุรกิฟต์ทอล์ก</p>
                      <span className="font-thin text-sm text-gray-300">รุ่นพี่จากโครงการพิเศษ</span>
                    </div>
                  </div>
                </div>
                <div className="flex space-x-3 h-[60px]">
                  <div className="relative border-l-2 border-[#C898CC]">
                    <div className="absolute left-[-5px] w-2 h-2 rounded-full bg-[#C898CC] mt-[18px]" />
                  </div>
                  <div className="flex space-x-3 pt-2">
                    <p className="text-xl font-black">10.00</p>
                    <div className="mt-1">
                      <p className="text-2xl leading-[20px]">จตุรกิฟต์ทอล์ก</p>
                      <span className="font-thin text-sm text-gray-300">รุ่นพี่จากโครงการพิเศษ</span>
                    </div>
                  </div>
                </div>
                <div className="flex space-x-3 h-[60px]">
                  <div className="relative border-l-2 border-[#C898CC]">
                    <div className="absolute left-[-5px] w-2 h-2 rounded-full bg-[#C898CC] mt-[18px]" />
                  </div>
                  <div className="flex space-x-3 pt-2">
                    <p className="text-xl font-black">10.00</p>
                    <div className="mt-1">
                      <p className="text-2xl leading-[20px]">จตุรกิฟต์ทอล์ก</p>
                      <span className="font-thin text-sm text-gray-300">รุ่นพี่จากโครงการพิเศษ</span>
                    </div>
                  </div>
                </div>
                <div className="flex space-x-3 h-[60px]">
                  <div className="relative border-l-2 border-[#C898CC]">
                    <div className="absolute left-[-5px] w-2 h-2 rounded-full bg-[#C898CC] mt-[18px]" />
                  </div>
                  <div className="flex space-x-3 pt-2">
                    <p className="text-xl font-black">10.00</p>
                    <div className="mt-1">
                      <p className="text-2xl leading-[20px]">จตุรกิฟต์ทอล์ก</p>
                      <span className="font-thin text-sm text-gray-300">รุ่นพี่จากโครงการพิเศษ</span>
                    </div>
                  </div>
                </div>
                <div className="flex space-x-3 h-[60px]">
                  <div className="relative border-l-2 border-[#C898CC] mb-[36px]">
                    <div className="absolute left-[-5px] w-2 h-2 rounded-full bg-[#C898CC] mt-[18px]" />
                  </div>
                  <div className="flex space-x-3 pt-2">
                    <p className="text-xl font-black">10.00</p>
                    <div className="mt-1">
                      <p className="text-2xl leading-[20px]">จตุรกิฟต์ทอล์ก</p>
                      <span className="font-thin text-sm text-gray-300">รุ่นพี่จากโครงการพิเศษ</span>
                    </div>
                  </div>
                </div>
              </div>
            </div>
            <div className="flex flex-col items-center mx-auto sm:mx-0 mt-20 px-2">
              <p className="text-[#C898CC] font-black text-2xl mb-6">15 JANUARY 2022</p>
              <div>
                <div className="flex space-x-3">
                  <div className="relative border-l-2 border-[#C898CC] mt-3">
                    <div className="absolute left-[-5px] w-2 h-2 rounded-full bg-[#C898CC]" />
                  </div>
                  <p className="text-xl font-black">10.00</p>
                  <div className="mt-1">
                    <p className="text-2xl leading-[20px]">จตุรกิฟต์ทอล์ก</p>
                    <span className="font-thin text-sm text-gray-300">รุ่นพี่จากโครงการพิเศษ</span>
                  </div>
                </div>
                <div className="flex space-x-3 h-[60px]">
                  <div className="relative border-l-2 border-[#C898CC]">
                    <div className="absolute left-[-5px] w-2 h-2 rounded-full bg-[#C898CC] mt-[18px]" />
                  </div>
                  <div className="flex space-x-3 pt-2">
                    <p className="text-xl font-black">10.00</p>
                    <div className="mt-1">
                      <p className="text-2xl leading-[20px]">จตุรกิฟต์ทอล์ก</p>
                      <span className="font-thin text-sm text-gray-300">รุ่นพี่จากโครงการพิเศษ</span>
                    </div>
                  </div>
                </div>
                <div className="flex space-x-3 h-[60px]">
                  <div className="relative border-l-2 border-[#C898CC]">
                    <div className="absolute left-[-5px] w-2 h-2 rounded-full bg-[#C898CC] mt-[18px]" />
                  </div>
                  <div className="flex space-x-3 pt-2">
                    <p className="text-xl font-black">10.00</p>
                    <div className="mt-1">
                      <p className="text-2xl leading-[20px]">จตุรกิฟต์ทอล์ก</p>
                      <span className="font-thin text-sm text-gray-300">รุ่นพี่จากโครงการพิเศษ</span>
                    </div>
                  </div>
                </div>
                <div className="flex space-x-3 h-[60px]">
                  <div className="relative border-l-2 border-[#C898CC]">
                    <div className="absolute left-[-5px] w-2 h-2 rounded-full bg-[#C898CC] mt-[18px]" />
                  </div>
                  <div className="flex space-x-3 pt-2">
                    <p className="text-xl font-black">10.00</p>
                    <div className="mt-1">
                      <p className="text-2xl leading-[20px]">จตุรกิฟต์ทอล์ก</p>
                      <span className="font-thin text-sm text-gray-300">รุ่นพี่จากโครงการพิเศษ</span>
                    </div>
                  </div>
                </div>
                <div className="flex space-x-3 h-[60px]">
                  <div className="relative border-l-2 border-[#C898CC]">
                    <div className="absolute left-[-5px] w-2 h-2 rounded-full bg-[#C898CC] mt-[18px]" />
                  </div>
                  <div className="flex space-x-3 pt-2">
                    <p className="text-xl font-black">10.00</p>
                    <div className="mt-1">
                      <p className="text-2xl leading-[20px]">จตุรกิฟต์ทอล์ก</p>
                      <span className="font-thin text-sm text-gray-300">รุ่นพี่จากโครงการพิเศษ</span>
                    </div>
                  </div>
                </div>
                <div className="flex space-x-3 h-[60px]">
                  <div className="relative border-l-2 border-[#C898CC]">
                    <div className="absolute left-[-5px] w-2 h-2 rounded-full bg-[#C898CC] mt-[18px]" />
                  </div>
                  <div className="flex space-x-3 pt-2">
                    <p className="text-xl font-black">10.00</p>
                    <div className="mt-1">
                      <p className="text-2xl leading-[20px]">จตุรกิฟต์ทอล์ก</p>
                      <span className="font-thin text-sm text-gray-300">รุ่นพี่จากโครงการพิเศษ</span>
                    </div>
                  </div>
                </div>
                <div className="flex space-x-3 h-[60px]">
                  <div className="relative border-l-2 border-[#C898CC]">
                    <div className="absolute left-[-5px] w-2 h-2 rounded-full bg-[#C898CC] mt-[18px]" />
                  </div>
                  <div className="flex space-x-3 pt-2">
                    <p className="text-xl font-black">10.00</p>
                    <div className="mt-1">
                      <p className="text-2xl leading-[20px]">จตุรกิฟต์ทอล์ก</p>
                      <span className="font-thin text-sm text-gray-300">รุ่นพี่จากโครงการพิเศษ</span>
                    </div>
                  </div>
                </div>
                <div className="flex space-x-3 h-[60px]">
                  <div className="relative border-l-2 border-[#C898CC]">
                    <div className="absolute left-[-5px] w-2 h-2 rounded-full bg-[#C898CC] mt-[18px]" />
                  </div>
                  <div className="flex space-x-3 pt-2">
                    <p className="text-xl font-black">10.00</p>
                    <div className="mt-1">
                      <p className="text-2xl leading-[20px]">จตุรกิฟต์ทอล์ก</p>
                      <span className="font-thin text-sm text-gray-300">รุ่นพี่จากโครงการพิเศษ</span>
                    </div>
                  </div>
                </div>
                <div className="flex space-x-3 h-[60px]">
                  <div className="relative border-l-2 border-[#C898CC]">
                    <div className="absolute left-[-5px] w-2 h-2 rounded-full bg-[#C898CC] mt-[18px]" />
                  </div>
                  <div className="flex space-x-3 pt-2">
                    <p className="text-xl font-black">10.00</p>
                    <div className="mt-1">
                      <p className="text-2xl leading-[20px]">จตุรกิฟต์ทอล์ก</p>
                      <span className="font-thin text-sm text-gray-300">รุ่นพี่จากโครงการพิเศษ</span>
                    </div>
                  </div>
                </div>
                <div className="flex space-x-3 h-[60px]">
                  <div className="relative border-l-2 border-[#C898CC]">
                    <div className="absolute left-[-5px] w-2 h-2 rounded-full bg-[#C898CC] mt-[18px]" />
                  </div>
                  <div className="flex space-x-3 pt-2">
                    <p className="text-xl font-black">10.00</p>
                    <div className="mt-1">
                      <p className="text-2xl leading-[20px]">จตุรกิฟต์ทอล์ก</p>
                      <span className="font-thin text-sm text-gray-300">รุ่นพี่จากโครงการพิเศษ</span>
                    </div>
                  </div>
                </div>
                <div className="flex space-x-3 h-[60px]">
                  <div className="relative border-l-2 border-[#C898CC] mb-[36px]">
                    <div className="absolute left-[-5px] w-2 h-2 rounded-full bg-[#C898CC] mt-[18px]" />
                  </div>
                  <div className="flex space-x-3 pt-2">
                    <p className="text-xl font-black">10.00</p>
                    <div className="mt-1">
                      <p className="text-2xl leading-[20px]">จตุรกิฟต์ทอล์ก</p>
                      <span className="font-thin text-sm text-gray-300">รุ่นพี่จากโครงการพิเศษ</span>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </AdaptiveBg>
    </>
  )
}

export default Schedule
