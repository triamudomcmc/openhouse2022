import { AdaptiveBg } from "@components/common/AdaptiveBg"
import { PortraitTicket } from "@components/ticket/Portrait"
import { SquareTicket } from "@components/ticket/Square"
import { ClipboardCopyIcon } from "@heroicons/react/solid"
import { useAuth } from "@lib/auth"
import { useToast } from "@lib/toast"
import { ticketTypes } from "@types"
import { SITE_URL } from "@utils/constants"
import { useWindowDimensions } from "@utils/useWindowDimensions"
import classNames from "classnames"
import { NextPage } from "next"
import { useEffect, useRef, useState } from "react"
const InApp = require("detect-inapp")

const TicketPage: NextPage = () => {
  const [isSquare, setSquareDisplay] = useState(false)
  const [imgLoading, setImgLoading] = useState(false)
  const auth = useAuth()
  const { width } = useWindowDimensions()
  const cardWidth: number = width / 2 < 500 ? (width / 2 < 350 ? 350 : width / 2) : 500

  const toast = useToast()

  const link = `${SITE_URL}/ticket/${auth?.userData?.uid}`
  const permalink = encodeURIComponent(link)

  const text = encodeURIComponent(
    `🚏Get ready for Triam Udom Online Open House 2022 ⟢\n— Interstellar Odyssey 🪐🪄✨\n#TriamUdomOnlineOpenHouse2022 #triamOPH2022\n`
  )
  const tweetUrl = `https://twitter.com/intent/tweet?url=https://${permalink}&via=triamudomoph&text=${text}`
  const facebookUrl = `https://www.facebook.com/sharer/sharer.php?u=${permalink}`

  const downloadImg = async () => {
    if (imgLoading) return
    const imgUrl = `/api/ticket?type=${auth?.userData?.ticket}&name=${encodeURIComponent(
      auth?.userData?.username as string
    )}&uid=${encodeURIComponent(auth?.user?.uid as string)}&size=${isSquare ? "square" : "portrait"}`

    setImgLoading(true)

    const res = await fetch(imgUrl, {
      method: "GET",
      headers: {
        "Content-Type": "application/json",
      },
      credentials: "include",
    })

    if (res.ok) {
      const inapp = new InApp(navigator.userAgent || navigator.vendor)
      if (inapp.browser === "line" || inapp.browser === "messenger" || inapp.browser === "facebook") {
        const a = document.createElement("a")
        a.href = imgUrl
        a.download = `ticket.jpg`
        document.body.appendChild(a)
        a.click()
        a.remove()
      } else {
        const a = document.createElement("a")
        a.href = window.URL.createObjectURL(await res.blob())
        a.download = `ticket.jpg`
        document.body.appendChild(a)
        a.click()
        a.remove()
      }
    }

    setImgLoading(false)
  }

  const switchToSquare = () => {
    setSquareDisplay(true)
  }

  const switchToPortrait = () => {
    setSquareDisplay(false)
  }

  return (
    <AdaptiveBg
      primary={{ background: "url('images/backgrounds/ticket.jpg')", height: "1224px" }}
      secondary={{ background: "url('images/backgrounds/ticket-mobile.jpg')", height: "926px" }}
      mobile={{ background: "url('images/backgrounds/ticket-mobile-default.jpg')", height: "926px" }}
      classname="main-section"
    >
      <div className="flex flex-col items-center space-y-4">
        <h2 className="text-center text-white font-display text-4xl font-semibold">ตั๋วการเดินทางของคุณ</h2>
        <div className="flex flex-row mb-10 space-x-8">
          <div onClick={switchToSquare} className="flex flex-col items-center">
            <div
              className={classNames(
                isSquare ? "bg-pink-200" : "bg-white hover:bg-gray-100",
                "transition-colors flex flex-row items-center justify-center rounded-lg shadow-md cursor-pointer w-20 h-20 md:w-24 md:h-24"
              )}
            >
              <div
                className={classNames(
                  isSquare ? "border-white" : "border-gray-400",
                  "w-12 h-12 border-2 rounded md:w-16 md:h-16 md:rounded-lg"
                )}
              ></div>
            </div>
            <p className="mt-2 text-sm font-medium text-white md:text-base">Square</p>
          </div>
          <div onClick={switchToPortrait} className="flex flex-col items-center">
            <div
              className={classNames(
                !isSquare ? "bg-pink-200" : "bg-white hover:bg-gray-100",
                "transition-colors flex flex-row items-center justify-center rounded-lg shadow-md cursor-pointer w-20 h-20 md:w-24 md:h-24"
              )}
            >
              <div
                className={classNames(
                  !isSquare ? "border-white" : "border-gray-400",
                  "w-8 h-12 border-2 rounded-lg md:w-10 md:h-16"
                )}
              ></div>
            </div>
            <p className="mt-2 text-sm font-medium text-white md:text-base">Portrait</p>
          </div>
        </div>
        {isSquare ? (
          <SquareTicket
            width={cardWidth}
            type={auth?.userData?.ticket as ticketTypes}
            name={auth?.userData?.username as string}
            uid={auth?.user?.uid as string}
          />
        ) : (
          <PortraitTicket
            width={cardWidth}
            type={auth?.userData?.ticket as ticketTypes}
            name={auth?.userData?.username as string}
            uid={auth?.user?.uid as string}
          />
        )}
        <div style={{ width: cardWidth }} className="flex flex-row mt-6 mb-10 space-x-2">
          <a
            className="flex flex-col items-center justify-center w-1/3 py-2 px-1 font-medium text-center text-gray-400 bg-white shadow-lg hover:bg-gray-100 text-xxs md:text-base md:py-4 rounded-xl"
            href={tweetUrl}
            rel="noopener noreferrer"
            target="_blank"
          >
            <svg width="39" height="38" viewBox="0 0 39 38" fill="none" xmlns="http://www.w3.org/2000/svg">
              <g clipPath="url(#clip0_1445_9019)">
                <path
                  d="M19.5137 37.4453C29.7525 37.4453 38.0527 29.1451 38.0527 18.9063C38.0527 8.66741 29.7525 0.367188 19.5137 0.367188C9.27483 0.367188 0.974609 8.66741 0.974609 18.9063C0.974609 29.1451 9.27483 37.4453 19.5137 37.4453Z"
                  fill="#F8B1BF"
                />
                <path
                  d="M30.8688 13.6991C30.0743 14.0514 29.2197 14.2897 28.3235 14.3961C29.2386 13.8478 29.9408 12.9803 30.2723 11.945C29.416 12.4529 28.4672 12.8214 27.4583 13.02C26.6499 12.1591 25.4982 11.6211 24.2229 11.6211C21.7761 11.6211 19.7916 13.6056 19.7916 16.0525C19.7916 16.3998 19.8309 16.7379 19.9069 17.0624C16.2241 16.8777 12.9586 15.1136 10.7729 12.4318C10.3915 13.0861 10.1727 13.8478 10.1727 14.6598C10.1727 16.1969 10.9556 17.5538 12.144 18.3483C11.418 18.3255 10.7342 18.1262 10.137 17.7934C10.1367 17.8122 10.1367 17.8311 10.1367 17.8496C10.1367 19.9967 11.6648 21.7875 13.6916 22.1944C13.3202 22.2961 12.9279 22.35 12.5244 22.35C12.2382 22.35 11.9609 22.3226 11.6906 22.271C12.2544 24.0311 13.8906 25.3124 15.8302 25.3484C14.3133 26.5371 12.4028 27.2454 10.3261 27.2454C9.96915 27.2454 9.61554 27.2245 9.26953 27.1832C11.2296 28.441 13.5594 29.1744 16.0618 29.1744C24.2127 29.1744 28.6702 22.4221 28.6702 16.5657C28.6702 16.3737 28.6659 16.1823 28.6573 15.9926C29.5238 15.368 30.2749 14.5878 30.8688 13.6991Z"
                  fill="white"
                />
              </g>
              <defs>
                <clipPath id="clip0_1445_9019">
                  <rect width="37.0785" height="37.0785" fill="white" transform="translate(0.976562 0.351562)" />
                </clipPath>
              </defs>
            </svg>
            <span className="leading-tight mt-2">Share to Twitter</span>
          </a>
          <a
            target="_blank"
            rel="noopener noreferrer"
            href={facebookUrl}
            className="flex flex-col items-center justify-center w-1/3 py-2 px-1 font-medium text-center text-gray-400 bg-white shadow-lg hover:bg-gray-100 text-xxs md:text-base md:py-4 rounded-xl"
          >
            <svg width="38" height="38" viewBox="0 0 38 38" fill="none" xmlns="http://www.w3.org/2000/svg">
              <g clipPath="url(#clip0_1445_9010)">
                <path
                  fillRule="evenodd"
                  clipRule="evenodd"
                  d="M37.5101 18.8947C37.5101 8.65548 29.2101 0.355469 18.9709 0.355469C8.73166 0.355469 0.431641 8.65548 0.431641 18.8947C0.431641 28.1476 7.21144 35.8173 16.075 37.2078V24.2544H11.3661V18.8947H16.075V14.8105C16.075 10.1646 18.8411 7.59875 23.0773 7.59875C25.1055 7.59875 27.2264 7.96026 27.2264 7.96026V12.5209H24.8904C22.586 12.5209 21.8686 13.9503 21.8686 15.4167V18.8947H27.0095L26.1882 24.2525H21.8686V37.2078C30.7303 35.8173 37.5101 28.1476 37.5101 18.8947Z"
                  fill="#F8B1BF"
                />
              </g>
              <defs>
                <clipPath id="clip0_1445_9010">
                  <rect width="37.0785" height="37.0785" fill="white" transform="translate(0.431641 0.351562)" />
                </clipPath>
              </defs>
            </svg>
            <span className="leading-tight mt-2">Share to Facebook</span>
          </a>
          <button
            className="flex flex-col items-center justify-center w-1/3 py-2 px-1 font-medium text-center text-gray-400 bg-white shadow-lg hover:bg-gray-100 md:justify-between text-xxs md:text-base md:py-4 rounded-xl"
            onClick={downloadImg}
          >
            <svg width="41" height="40" viewBox="0 0 41 40" fill="none" xmlns="http://www.w3.org/2000/svg">
              <path
                fillRule="evenodd"
                clipRule="evenodd"
                d="M20.4744 39.9175C31.3959 39.9175 40.2496 31.0639 40.2496 20.1424C40.2496 9.22084 31.3959 0.367188 20.4744 0.367188C9.55287 0.367188 0.699219 9.22084 0.699219 20.1424C0.699219 31.0639 9.55287 39.9175 20.4744 39.9175ZM22.9463 12.7267C22.9463 11.3615 21.8396 10.2548 20.4744 10.2548C19.1092 10.2548 18.0025 11.3615 18.0025 12.7267L18.0025 21.5904L14.8066 18.3945C13.8413 17.4291 12.2761 17.4291 11.3108 18.3945C10.3455 19.3598 10.3455 20.9249 11.3108 21.8903L18.7265 29.306C19.6918 30.2713 21.257 30.2713 22.2223 29.306L29.638 21.8903C30.6033 20.9249 30.6033 19.3598 29.638 18.3945C28.6726 17.4291 27.1075 17.4291 26.1422 18.3945L22.9463 21.5904V12.7267Z"
                fill="#F8B1BF"
              />
            </svg>
            <span className="leading-tight mt-2">{imgLoading ? "Loading..." : "Download"}</span>
          </button>
        </div>
        <div style={{ width: cardWidth }} className="flex flex-col mt-8 mb-4 space-y-2">
          <p className="text-white mt-4 mb-1 font-display text-xl">แชร์การ์ดต่อ</p>
          <div
            className="flex flex-row justify-between items-center py-2 px-4 rounded-full bg-white cursor-pointer hover:bg-gray-100 active:bg-white transition-colors"
            onClick={() => {
              navigator?.clipboard?.writeText(`${window.location.protocol}//${SITE_URL}/ticket/${auth?.userData?.uid}`)
              toast?.setToast("คัดลอกข้อความสำเร็จ !")
            }}
          >
            <span className="text-pink-300 truncate text-sm w-[90%] overflow-hidden">
              {`${window.location.protocol}//${SITE_URL}/ticket/${auth?.userData?.uid}`}
            </span>
            <ClipboardCopyIcon className="text-pink-300 w-5 h-5" />
          </div>
        </div>
      </div>
    </AdaptiveBg>
  )
}

export default TicketPage
