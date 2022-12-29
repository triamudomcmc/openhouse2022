import {ArrowCircleLeftIcon} from "@heroicons/react/outline"
import Image from "next/image"
import {UserIcon} from "@heroicons/react/solid"

const Page = () => {
  return (<div className="min-h-screen w-full bg-cream py-24">
    <div className="max-w-4xl mx-auto px-10">
      <div className="text-bright-orange flex space-x-1 items-center">
        <ArrowCircleLeftIcon className="w-5 h-5"/>
        <h1 className="text-sm mt-1 font-normal">ย้อนกลับ</h1>
      </div>
      <div className="flex flex-col items-center mt-14">
        <div className="flex justify-end bg-[#D9D9D9] rounded-full w-[176px] h-[176px] sm:w-[194px] sm:h-[194px]">
          <Image src="/assets/images/profile/babyaraika.png" height={194} width={194}/>
        </div>
        <div className="flex flex-col items-center text-purple mt-4">
          <span className="font-bold text-[28px] tracking-wide">Babyaraika</span>
          <span className="font-medium text-sm -mt-2">ปกรณ์ อิทธิฉันทกิจ</span>
        </div>
        <div className="flex items-center space-x-1 mt-1 mb-12 text-purple">
          <UserIcon className="w-4 h-4"/>
          <span className="text-sm font-medium mt-1">นักเรียน</span>
        </div>
        <div className="w-full max-w-[220px] mx-auto flex flex-col space-y-4">
          <button className="bg-white rounded-full shadow-lg text-deep-turquoise py-2 w-full">
            <span className="text-lg font-semibold">E-Ticket</span>
          </button>
          <button className="bg-white rounded-full shadow-lg text-deep-turquoise py-2 w-full">
            <span className="text-lg font-semibold">สะสมแสตมป์</span>
          </button>
        </div>
      </div>
    </div>
  </div>)
}


export default Page