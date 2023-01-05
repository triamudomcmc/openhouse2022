import { useEffect, useState } from "react"
import { useRouter } from "next/router"
import Image from "next/image"
import { useQRCode } from "next-qrcode"
import { TicketTemplate } from "@vectors/TicketTemplate"
import { DownloadIcon } from "@heroicons/react/outline"
import {RefreshIcon, UserIcon} from "@heroicons/react/solid"
import InApp from "detect-inapp"

import { useAuth } from "@lib/auth"
import { getUserData } from "@lib/clientDB"
import { IUserData } from "@ctypes/account"

import { PageContainer } from "@components/account/PageContainer"
import classnames from "classnames"

const Page = () => {
  const { user } = useAuth()
  const router = useRouter()
  const QRcode = useQRCode().Image
  const [loading, setLoading] = useState<boolean>(true)
  const [accountData, setAccountData] = useState<IUserData>()
  const [imgLoading, setImgLoading] = useState(false)

  useEffect(() => {
    const fetcher = async () => {
      const res = await fetch(`/api/qrinfo/${user?.uid}`, {
        headers: {
          req_uid: user?.uid,
        },
      })
      if (res) {
        setAccountData(await res.json())
        setLoading(false)
      }
    }
    if (user?.uid) fetcher()
    // else router.push({pathname: `/auth`, query: { method: 'email' }})
  }, [router, user?.uid])

  const downloadImg = async () => {
    if (imgLoading) return

    const userData = await getUserData(user?.uid)

    const imgUrl = `/api/ticket`

    setImgLoading(true)

    const res = await fetch(imgUrl, {
      method: 'POST',
      body: JSON.stringify({
        uid: userData?.uid,
        profileIcon: userData?.Info?.profileIcon,
        username: userData?.Info?.username,
        firstname: userData?.Info?.firstname,
        lastname: userData?.Info?.lastname,
        status: userData?.Info?.status,
        account_id: userData?.account_id
      })
    })

    if (res.ok) {
      const inapp = new InApp(navigator.userAgent || navigator.vendor)

      if (inapp.browser === "line" || inapp.browser === "messenger" || inapp.browser === "facebook") {
        const a = document.createElement("a")
        a.href = imgUrl
        a.download = `ticket.png`
        document.body.appendChild(a)
        a.click()
        a.remove()
      } else {
        const a = document.createElement("a")
        a.href = window.URL.createObjectURL(await res.blob())
        a.download = `ticket.png`
        document.body.appendChild(a)
        a.click()
        a.remove()
      }
    }

    setImgLoading(false)
  }

  if (loading) return <div>Loading...</div>

  if (user?.uid && accountData)
    return (
      <PageContainer>
        <div className="flex flex-col items-center mt-12 space-y-4">
          <div className="relative">
            {/* Profile Container */}
            <div className="absolute top-[124px] -right-[12px]">
              <Image src={`/assets/images/profile/${user?.Info?.profileIcon ?? "cat"}.png`} width={200} height={200} />
            </div>
            {/*Ticket description*/}
            <div className="flex flex-col absolute top-[169px] left-[28px] text-purple">
              <span className="font-bold text-[28px]">{accountData?.Info?.username}</span>
              <div className="flex flex-col mt-4 font-medium">
                <span className="leading-4">{accountData?.Info?.firstname}</span>
                <span className="leading-4 mt-[2px]">{accountData?.Info?.lastname}</span>
              </div>
              <div className="flex items-center space-x-1 mt-1 mb-12 text-purple">
                <UserIcon className="w-4 h-4" />
                <span className="text-sm font-medium mt-1">{accountData?.Info?.status}</span>
              </div>
            </div>
            <div className="absolute bottom-[196px] left-0 w-full flex justify-center">
              <span className="font-semibold text-purple">{accountData?.account_id}</span>
            </div>
            {/* QR Container */}
            <div className="absolute w-[104px] h-[104px] left-[28px] bottom-[45px] bg-gray-300 rounded-lg">
              <QRcode
                text={user?.uid}
                options={{
                  type: "image/jpeg",
                  quality: 0.5,
                  level: "M",
                  scale: 4,
                  width: 104,
                  color: {
                    dark: "#000000",
                    light: "#ffffff",
                  },
                }}
              />
            </div>
            <TicketTemplate width="317" height="564"/>
          </div>
           <button
            className={classnames("flex text-white rounded-full px-6 items-center py-1.5 space-x-1", imgLoading ? "cursor-wait bg-gray-500" : "cursor-pointer bg-orange")}
            onClick={downloadImg}
          >
             {
               imgLoading ? <RefreshIcon className="w-4 h-4 animate-spin"/> :             <DownloadIcon className="w-4 h-4" />
             }
            <span>Download</span>
          </button>
        </div>
      </PageContainer>
    )
}

export default Page
