import Image from "next/image"
import { UserIcon } from "@heroicons/react/outline"
import { useQRCode } from "next-qrcode"
import { useRouter } from "next/router"

import { TicketTemplate } from "@vectors/TicketTemplate"

const TicketGen = () => {
    const QRcode = useQRCode().Image
    const router = useRouter()

    const props = router?.query

    return (
        <div>
            <div className="w-[951px] h-[1638px] relative overflow-x-clip">
              {/* Profile Container */}
              <div className="absolute top-[340px] -right-[30px]">
                <Image src={`/assets/images/profile/${props?.profileIcon ?? "cat"}.png`} width={600} height={600} />
              </div>
              {/*Ticket description*/}
              <div className="flex flex-col absolute top-[507px] left-[84px] text-purple">
                <span className="font-bold text-[84px]">{props?.username}</span>
                <div className="flex flex-col mt-12 font-medium">
                  <span className="leading-[48px] text-[45px]">{props?.firstname}</span>
                  <span className="leading-[48px] text-[45px] mt-[6px]">{props?.lastname}</span>
                </div>
                <div className="flex items-center mt-[12px] mb-36 space-x-3 text-purple">
                  <UserIcon className="w-12 h-12" />
                  <span className="mt-3 text-[48px] leading-[81px] font-medium">{props?.status}</span>
                </div>
              </div>
              <div className="absolute bottom-[588px] left-0 w-full flex justify-center">
               <span className="font-semibold text-purple text-[48px]">{props?.account_id}</span>
              </div>
              {/* QR Container */}
              <div className="absolute w-[312px] h-[312px] left-[90px] bottom-[84px] rounded-3xl">
                <QRcode
                  text={props?.uid as string ?? "f"}
                  options={{
                    type: "image/jpeg",
                    quality: 0.5,
                    level: "M",
                    scale: 4,
                    width: 312,
                    color: {
                      dark: "#000000",
                      light: "#FFFFFF",
                    },
                  }}
                />
              </div>
              <TicketTemplate width="951" height="1638" />
            </div>
        </div>)
}

export default TicketGen
