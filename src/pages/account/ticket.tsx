import {TicketTemplate} from "@vectors/TicketTemplate"
import {PageContainer} from "@components/account/PageContainer"
import {DownloadIcon} from "@heroicons/react/outline"
import {UserIcon} from "@heroicons/react/solid"
import Image from "next/image"

const Page = () => {
  return (
    <PageContainer>
      <div className="flex flex-col items-center mt-12 space-y-4">
        <div className="relative">
          {/* Profile Container */}
          <div className="absolute top-[124px] -right-[12px]">
            <Image src={"/assets/images/profile/cat.png"} width={200} height={200}/>
          </div>
          {/*Ticket description*/}
          <div className="flex flex-col absolute top-[169px] left-[28px] text-purple">
            <span className="font-bold text-[28px]">Babyaraika</span>
            <span className="font-bold text-xl -mt-1">ขนมจีนน้ำยา</span>
            <div className="flex flex-col mt-4 font-medium">
              <span className="leading-4">
              ปกรณ์
            </span>
              <span className="leading-4 mt-[2px]">อิทธิฉันทกิจ์</span>
            </div>
            <div className="flex items-center space-x-1 mt-1 mb-12 text-purple">
              <UserIcon className="w-4 h-4"/>
              <span className="text-sm font-medium mt-1">นักเรียน</span>
            </div>
          </div>
          {/* QR Container */}
          <div className="absolute w-[104px] h-[104px] left-[28px] bottom-[45px] bg-gray-300 rounded-lg">
          </div>
          <TicketTemplate/>
        </div>
        <button className="flex text-white bg-orange rounded-full px-6 items-center py-1.5 space-x-1">
          <DownloadIcon className="w-4 h-4"/>
          <span>Download</span>
        </button>
      </div>
    </PageContainer>
  )
}

export default Page