import { Facebook } from "@vectors/Facebook"
import { Instagram } from "@vectors/Instagram"
import { Twitter } from "@vectors/Twitter"
import { Youtube } from "@vectors/Youtube"
import { TUCMCLogo } from "./TUCMCLogo"

export const Footer = () => {
  return (
    <footer className="bg-white w-full pt-10 px-8">
      <div className="flex flex-col sm:flex-row sm:items-start items-center px-0 sm:px-20 justify-between max-w-6xl mx-auto w-full">
        <div className="flex justify-center">
          <div className="sm:text-left text-center space-y-5">
            <div className="text-[#1D3662] font-semibold font-sans">
              <p>TRIAM UDOM ONLINE</p>
              <p className="-mt-1">OPEN HOUSE 2022</p>
            </div>
            <div className="flex space-x-3">
              <Facebook />
              <Instagram />
              <Twitter />
              <Youtube />
            </div>
            <div
              style={{ background: "linear-gradient(97.19deg, #C898CC 0.83%, #666EAD 43.54%, #112D55 99.62%)" }}
              className="px-8 py-2 rounded-full inline-flex font-medium font-display text-white"
            >
              เข้าสู่ระบบ
            </div>
          </div>
        </div>
        <div className="text-[#6B7280] flex flex-col sm:flex-row justify-between w-full max-w-md ml-0 mt-6 sm:mt-0 sm:ml-28">
          <div className="flex flex-col space-y-2 text-center sm:text-right font-display">
            <span>หน้าแรก</span>
            <span>รายการสด</span>
            <span>บทความ</span>
            <span>คลิปวิดีโอ</span>
            <span>ชมรม</span>
          </div>
          <div className="flex flex-col space-y-2 text-center sm:text-right mt-2 sm:mt-0 font-display">
            <span>สายการเรียน</span>
            <span>การสอบเข้า</span>
            <span>เกมค้นหาดวงดาวของคุณ</span>
            <span>การเดินทาง</span>
            <span>ติดต่อ</span>
          </div>
        </div>
      </div>
      <div className="flex justify-center border-t border-gray-400 border-opacity-30 py-5 mt-10">
        <TUCMCLogo className="h-6 sm:h-8" color="#777" />
      </div>
    </footer>
  )
}
