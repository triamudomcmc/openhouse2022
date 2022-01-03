import {AdaptiveBg} from "@components/common/AdaptiveBg";
import Router from "next/router";
import {ArrowCircleLeftIcon} from "@heroicons/react/outline";

const Schedule = () => {
  return (
    <div>
      <AdaptiveBg primary={{background: "url('images/backgrounds/live.jpg')", height: "1024px"}}
                  secondary={{background: "url('images/backgrounds/live-mobile.jpg')", height: "926px"}}
                  mobile={{background: "url('images/backgrounds/live-mobile-default.jpg')", height: "926px"}}>
        <div className="mt-32 mx-auto max-w-6xl px-6 min-h-screen">
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
            <h1 className="text-5xl font-light text-center">ตารางรายการสด</h1>
          </div>
          <div className="flex flex-wrap justify-between max-w-xl mx-auto">
            <div className="mx-auto sm:mx-0 mt-20 px-2">
              <h1 className="text-[#C898CC] font-black text-2xl mb-6">14 JANUARY 2022</h1>
              <div>
                <div className="flex space-x-3">
                  <div className="relative border-l-2 border-[#C898CC] mt-3">
                    <div className="absolute left-[-5px] w-2 h-2 rounded-full bg-[#C898CC]"/>
                  </div>
                  <h1 className="text-xl font-black">10.00</h1>
                  <div className="mt-1">
                    <h1 className="text-2xl leading-[20px]">จตุรกิฟต์ทอล์ก</h1>
                    <span className="font-thin text-sm text-gray-300">รุ่นพี่จากโครงการพิเศษ</span>
                  </div>
                </div>
                <div className="flex space-x-3 h-[60px]">
                  <div className="relative border-l-2 border-[#C898CC]">
                    <div className="absolute left-[-5px] w-2 h-2 rounded-full bg-[#C898CC] mt-[18px]"/>
                  </div>
                  <div className="flex space-x-3 pt-2">
                    <h1 className="text-xl font-black">10.00</h1>
                    <div className="mt-1">
                      <h1 className="text-2xl leading-[20px]">จตุรกิฟต์ทอล์ก</h1>
                      <span className="font-thin text-sm text-gray-300">รุ่นพี่จากโครงการพิเศษ</span>
                    </div>
                  </div>
                </div>
                <div className="flex space-x-3 h-[60px]">
                  <div className="relative border-l-2 border-[#C898CC]">
                    <div className="absolute left-[-5px] w-2 h-2 rounded-full bg-[#C898CC] mt-[18px]"/>
                  </div>
                  <div className="flex space-x-3 pt-2">
                    <h1 className="text-xl font-black">10.00</h1>
                    <div className="mt-1">
                      <h1 className="text-2xl leading-[20px]">จตุรกิฟต์ทอล์ก</h1>
                      <span className="font-thin text-sm text-gray-300">รุ่นพี่จากโครงการพิเศษ</span>
                    </div>
                  </div>
                </div>
                <div className="flex space-x-3 h-[60px]">
                  <div className="relative border-l-2 border-[#C898CC]">
                    <div className="absolute left-[-5px] w-2 h-2 rounded-full bg-[#C898CC] mt-[18px]"/>
                  </div>
                  <div className="flex space-x-3 pt-2">
                    <h1 className="text-xl font-black">10.00</h1>
                    <div className="mt-1">
                      <h1 className="text-2xl leading-[20px]">จตุรกิฟต์ทอล์ก</h1>
                      <span className="font-thin text-sm text-gray-300">รุ่นพี่จากโครงการพิเศษ</span>
                    </div>
                  </div>
                </div>
                <div className="flex space-x-3 h-[60px]">
                  <div className="relative border-l-2 border-[#C898CC]">
                    <div className="absolute left-[-5px] w-2 h-2 rounded-full bg-[#C898CC] mt-[18px]"/>
                  </div>
                  <div className="flex space-x-3 pt-2">
                    <h1 className="text-xl font-black">10.00</h1>
                    <div className="mt-1">
                      <h1 className="text-2xl leading-[20px]">จตุรกิฟต์ทอล์ก</h1>
                      <span className="font-thin text-sm text-gray-300">รุ่นพี่จากโครงการพิเศษ</span>
                    </div>
                  </div>
                </div>
                <div className="flex space-x-3 h-[60px]">
                  <div className="relative border-l-2 border-[#C898CC]">
                    <div className="absolute left-[-5px] w-2 h-2 rounded-full bg-[#C898CC] mt-[18px]"/>
                  </div>
                  <div className="flex space-x-3 pt-2">
                    <h1 className="text-xl font-black">10.00</h1>
                    <div className="mt-1">
                      <h1 className="text-2xl leading-[20px]">จตุรกิฟต์ทอล์ก</h1>
                      <span className="font-thin text-sm text-gray-300">รุ่นพี่จากโครงการพิเศษ</span>
                    </div>
                  </div>
                </div>
                <div className="flex space-x-3 h-[60px]">
                  <div className="relative border-l-2 border-[#C898CC]">
                    <div className="absolute left-[-5px] w-2 h-2 rounded-full bg-[#C898CC] mt-[18px]"/>
                  </div>
                  <div className="flex space-x-3 pt-2">
                    <h1 className="text-xl font-black">10.00</h1>
                    <div className="mt-1">
                      <h1 className="text-2xl leading-[20px]">จตุรกิฟต์ทอล์ก</h1>
                      <span className="font-thin text-sm text-gray-300">รุ่นพี่จากโครงการพิเศษ</span>
                    </div>
                  </div>
                </div>
                <div className="flex space-x-3 h-[60px]">
                  <div className="relative border-l-2 border-[#C898CC]">
                    <div className="absolute left-[-5px] w-2 h-2 rounded-full bg-[#C898CC] mt-[18px]"/>
                  </div>
                  <div className="flex space-x-3 pt-2">
                    <h1 className="text-xl font-black">10.00</h1>
                    <div className="mt-1">
                      <h1 className="text-2xl leading-[20px]">จตุรกิฟต์ทอล์ก</h1>
                      <span className="font-thin text-sm text-gray-300">รุ่นพี่จากโครงการพิเศษ</span>
                    </div>
                  </div>
                </div>
                <div className="flex space-x-3 h-[60px]">
                  <div className="relative border-l-2 border-[#C898CC]">
                    <div className="absolute left-[-5px] w-2 h-2 rounded-full bg-[#C898CC] mt-[18px]"/>
                  </div>
                  <div className="flex space-x-3 pt-2">
                    <h1 className="text-xl font-black">10.00</h1>
                    <div className="mt-1">
                      <h1 className="text-2xl leading-[20px]">จตุรกิฟต์ทอล์ก</h1>
                      <span className="font-thin text-sm text-gray-300">รุ่นพี่จากโครงการพิเศษ</span>
                    </div>
                  </div>
                </div>
                <div className="flex space-x-3 h-[60px]">
                  <div className="relative border-l-2 border-[#C898CC]">
                    <div className="absolute left-[-5px] w-2 h-2 rounded-full bg-[#C898CC] mt-[18px]"/>
                  </div>
                  <div className="flex space-x-3 pt-2">
                    <h1 className="text-xl font-black">10.00</h1>
                    <div className="mt-1">
                      <h1 className="text-2xl leading-[20px]">จตุรกิฟต์ทอล์ก</h1>
                      <span className="font-thin text-sm text-gray-300">รุ่นพี่จากโครงการพิเศษ</span>
                    </div>
                  </div>
                </div>
                <div className="flex space-x-3 h-[60px]">
                  <div className="relative border-l-2 border-[#C898CC] mb-[36px]">
                    <div className="absolute left-[-5px] w-2 h-2 rounded-full bg-[#C898CC] mt-[18px]"/>
                  </div>
                  <div className="flex space-x-3 pt-2">
                    <h1 className="text-xl font-black">10.00</h1>
                    <div className="mt-1">
                      <h1 className="text-2xl leading-[20px]">จตุรกิฟต์ทอล์ก</h1>
                      <span className="font-thin text-sm text-gray-300">รุ่นพี่จากโครงการพิเศษ</span>
                    </div>
                  </div>
                </div>
              </div>
            </div>
            <div className="mx-auto sm:mx-0 mt-20 px-2">
              <h1 className="text-[#C898CC] font-black text-2xl mb-6">15 JANUARY 2022</h1>
              <div>
                <div className="flex space-x-3">
                  <div className="relative border-l-2 border-[#C898CC] mt-3">
                    <div className="absolute left-[-5px] w-2 h-2 rounded-full bg-[#C898CC]"/>
                  </div>
                  <h1 className="text-xl font-black">10.00</h1>
                  <div className="mt-1">
                    <h1 className="text-2xl leading-[20px]">จตุรกิฟต์ทอล์ก</h1>
                    <span className="font-thin text-sm text-gray-300">รุ่นพี่จากโครงการพิเศษ</span>
                  </div>
                </div>
                <div className="flex space-x-3 h-[60px]">
                  <div className="relative border-l-2 border-[#C898CC]">
                    <div className="absolute left-[-5px] w-2 h-2 rounded-full bg-[#C898CC] mt-[18px]"/>
                  </div>
                  <div className="flex space-x-3 pt-2">
                    <h1 className="text-xl font-black">10.00</h1>
                    <div className="mt-1">
                      <h1 className="text-2xl leading-[20px]">จตุรกิฟต์ทอล์ก</h1>
                      <span className="font-thin text-sm text-gray-300">รุ่นพี่จากโครงการพิเศษ</span>
                    </div>
                  </div>
                </div>
                <div className="flex space-x-3 h-[60px]">
                  <div className="relative border-l-2 border-[#C898CC]">
                    <div className="absolute left-[-5px] w-2 h-2 rounded-full bg-[#C898CC] mt-[18px]"/>
                  </div>
                  <div className="flex space-x-3 pt-2">
                    <h1 className="text-xl font-black">10.00</h1>
                    <div className="mt-1">
                      <h1 className="text-2xl leading-[20px]">จตุรกิฟต์ทอล์ก</h1>
                      <span className="font-thin text-sm text-gray-300">รุ่นพี่จากโครงการพิเศษ</span>
                    </div>
                  </div>
                </div>
                <div className="flex space-x-3 h-[60px]">
                  <div className="relative border-l-2 border-[#C898CC]">
                    <div className="absolute left-[-5px] w-2 h-2 rounded-full bg-[#C898CC] mt-[18px]"/>
                  </div>
                  <div className="flex space-x-3 pt-2">
                    <h1 className="text-xl font-black">10.00</h1>
                    <div className="mt-1">
                      <h1 className="text-2xl leading-[20px]">จตุรกิฟต์ทอล์ก</h1>
                      <span className="font-thin text-sm text-gray-300">รุ่นพี่จากโครงการพิเศษ</span>
                    </div>
                  </div>
                </div>
                <div className="flex space-x-3 h-[60px]">
                  <div className="relative border-l-2 border-[#C898CC]">
                    <div className="absolute left-[-5px] w-2 h-2 rounded-full bg-[#C898CC] mt-[18px]"/>
                  </div>
                  <div className="flex space-x-3 pt-2">
                    <h1 className="text-xl font-black">10.00</h1>
                    <div className="mt-1">
                      <h1 className="text-2xl leading-[20px]">จตุรกิฟต์ทอล์ก</h1>
                      <span className="font-thin text-sm text-gray-300">รุ่นพี่จากโครงการพิเศษ</span>
                    </div>
                  </div>
                </div>
                <div className="flex space-x-3 h-[60px]">
                  <div className="relative border-l-2 border-[#C898CC]">
                    <div className="absolute left-[-5px] w-2 h-2 rounded-full bg-[#C898CC] mt-[18px]"/>
                  </div>
                  <div className="flex space-x-3 pt-2">
                    <h1 className="text-xl font-black">10.00</h1>
                    <div className="mt-1">
                      <h1 className="text-2xl leading-[20px]">จตุรกิฟต์ทอล์ก</h1>
                      <span className="font-thin text-sm text-gray-300">รุ่นพี่จากโครงการพิเศษ</span>
                    </div>
                  </div>
                </div>
                <div className="flex space-x-3 h-[60px]">
                  <div className="relative border-l-2 border-[#C898CC]">
                    <div className="absolute left-[-5px] w-2 h-2 rounded-full bg-[#C898CC] mt-[18px]"/>
                  </div>
                  <div className="flex space-x-3 pt-2">
                    <h1 className="text-xl font-black">10.00</h1>
                    <div className="mt-1">
                      <h1 className="text-2xl leading-[20px]">จตุรกิฟต์ทอล์ก</h1>
                      <span className="font-thin text-sm text-gray-300">รุ่นพี่จากโครงการพิเศษ</span>
                    </div>
                  </div>
                </div>
                <div className="flex space-x-3 h-[60px]">
                  <div className="relative border-l-2 border-[#C898CC]">
                    <div className="absolute left-[-5px] w-2 h-2 rounded-full bg-[#C898CC] mt-[18px]"/>
                  </div>
                  <div className="flex space-x-3 pt-2">
                    <h1 className="text-xl font-black">10.00</h1>
                    <div className="mt-1">
                      <h1 className="text-2xl leading-[20px]">จตุรกิฟต์ทอล์ก</h1>
                      <span className="font-thin text-sm text-gray-300">รุ่นพี่จากโครงการพิเศษ</span>
                    </div>
                  </div>
                </div>
                <div className="flex space-x-3 h-[60px]">
                  <div className="relative border-l-2 border-[#C898CC]">
                    <div className="absolute left-[-5px] w-2 h-2 rounded-full bg-[#C898CC] mt-[18px]"/>
                  </div>
                  <div className="flex space-x-3 pt-2">
                    <h1 className="text-xl font-black">10.00</h1>
                    <div className="mt-1">
                      <h1 className="text-2xl leading-[20px]">จตุรกิฟต์ทอล์ก</h1>
                      <span className="font-thin text-sm text-gray-300">รุ่นพี่จากโครงการพิเศษ</span>
                    </div>
                  </div>
                </div>
                <div className="flex space-x-3 h-[60px]">
                  <div className="relative border-l-2 border-[#C898CC]">
                    <div className="absolute left-[-5px] w-2 h-2 rounded-full bg-[#C898CC] mt-[18px]"/>
                  </div>
                  <div className="flex space-x-3 pt-2">
                    <h1 className="text-xl font-black">10.00</h1>
                    <div className="mt-1">
                      <h1 className="text-2xl leading-[20px]">จตุรกิฟต์ทอล์ก</h1>
                      <span className="font-thin text-sm text-gray-300">รุ่นพี่จากโครงการพิเศษ</span>
                    </div>
                  </div>
                </div>
                <div className="flex space-x-3 h-[60px]">
                  <div className="relative border-l-2 border-[#C898CC] mb-[36px]">
                    <div className="absolute left-[-5px] w-2 h-2 rounded-full bg-[#C898CC] mt-[18px]"/>
                  </div>
                  <div className="flex space-x-3 pt-2">
                    <h1 className="text-xl font-black">10.00</h1>
                    <div className="mt-1">
                      <h1 className="text-2xl leading-[20px]">จตุรกิฟต์ทอล์ก</h1>
                      <span className="font-thin text-sm text-gray-300">รุ่นพี่จากโครงการพิเศษ</span>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </AdaptiveBg>
    </div>
  )
}

export default Schedule
