import {PaperAirplaneIcon} from "@heroicons/react/solid";

const Stream = () => {
  return (
    <div style={{background: "linear-gradient(180deg, #0D0835 0%, #33103F 21.35%, #1C174D 48.96%, #2B2353 72.4%)"}}
         className="min-h-screen pt-24">
      <div className="mx-auto w-[90vw] max-w-[975px]">
        <div className="bg-black w-[90vw] h-[48vw] max-w-[975px] max-h-[548px]">
        </div>
        <div className="flex lg:flex-row flex-col mt-6 lg:space-x-10">
          <div className="lg:w-7/12">
            <div className="">
              <div className="flex items-center space-x-3"><span
                className="text-white bg-red-500 font-semibold tracking-[3px] leading-[21px] sm:text-md text-sm rounded-sm px-[3px]">LIVE</span> <span
                className="text-2xl sm:text-3xl">ร้องเพลงปิ่นหทัย</span></div>
              <div>
                <span className="font-light sm:text-md text-sm">ชื่อชมรมร้องเพลงปิ่นหทัย | 10.30-11.35 น.</span>
              </div>
            </div>
            <p>วิดีโอคำอธิบายวิดีโอคำอธิบายวิดีโอคำอธิบายคำอธิบายวิดีโอคำอธิบายวิดีโอคำอธิบายวิดีโอคำอธิบายคำอธิบายวิดีโอคำอธิบายวิดีโอคำอธิบายวิดีโอคำอธิบายคำอธิบายวิดีโอคำอธิบายวิดีโอคำอธิบายวิดีโอคำอธิบายคำอธิบายวิดีโอคำอธิบายวิดีโอคำอธิบายวิดีโอคำอธิบาย</p>
          </div>
          <div className="flex lg:flex-col md:flex-row flex-col lg:w-5/12 space-y-8 md:space-y-0 lg:space-y-8 mt-8 lg:mt-0">
            <div className="rounded-xl border px-8 py-6 space-y-3 w-full md:w-1/2 lg:w-full">
              <h1>สงสัยอะไรไหม ? พิมพ์ถามคำถามสด ๆ ได้เลย</h1>
              <div className="flex items-center space-x-4">
                <input onChange={(e) => {}} className="border bg-white bg-opacity-20 rounded-full placeholder:text-white py-1 pl-8 w-full border-opacity-40 pr-4"
                       placeholder="ถามคำถามเลย !"/>
                <PaperAirplaneIcon className="rotate-90 w-8 h-8"/>
              </div>
            </div>
            <div className="w-full md:w-1/2 lg:w-full ml-0 md:ml-6 lg:ml-0">
              <h1>รายการต่อไป</h1>
              <div className="rounded-md border bg-white bg-opacity-50 py-2 px-4 flex space-x-4">
                <div>
                  <h1 className="font-semibold">10.00 - 10.10</h1>
                </div>
                <div>
                  <h1 className="text-lg font-semibold leading-[15px] mt-1">พบปะรองวิชาการฯ</h1>
                  <span className="text-sm font-light">ชื่อชมรมร้องเพลงปิ่นหทัย</span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className="w-[98vw] mx-auto border-t mt-24 md:mt-32 pt-20 pb-32">
        <h1 className="text-5xl font-light text-center">ตารางรายการสด</h1>
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
    </div>
  )
}

export default Stream
