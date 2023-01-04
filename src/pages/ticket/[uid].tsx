import { getUserData } from "@lib/clientDB"
import { TicketTemplate } from "@vectors/TicketTemplate"
import { GetStaticPaths, GetStaticProps, InferGetStaticPropsType } from "next"
import { useQRCode } from "next-qrcode"
import Image from "next/image"
import { UserIcon } from "@heroicons/react/solid"
import { useAuth } from "@lib/auth"
import { useState, useEffect } from "react"
import { IUserData } from "@ctypes/account"
import { useRouter } from "next/router"

interface Ticket {
  name: string
  uid: string
  profile: string
}

export const getStaticProps: GetStaticProps<Ticket> = async ({ params }) => {
  const uid = params?.uid?.toString() || null

  if (uid) {
    const ticketData = await getUserData(uid)

    return {
      props: {
        name: ticketData?.Info?.username ?? null,
        uid: ticketData?.uid ?? null,
        profile: ticketData?.Info?.profile ?? null,
      },
      revalidate: 3000,
    }
  }

  return {
    props: {
      name: null,
      uid: null,
      profile: null,
    },
    revalidate: 5,
  }
}

export const getStaticPaths: GetStaticPaths = async () => {
  return {
    paths: [],
    fallback: "blocking",
  }
}


export default function Ticket(props: InferGetStaticPropsType<typeof getStaticProps>) {
  const QRcode = useQRCode().Image
  const { user } = useAuth()
  const [loading, setLoading] = useState<boolean>(true)
  const [accountData, setAccountData] = useState<IUserData>()
  const router = useRouter()

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

  if (loading) return <div>Loading...</div>

  if(user && accountData)
    return (
        <div>
          <div className="w-[951px] h-[1638px] relative">
            {/* Profile Container */}
            <div className="absolute top-[372px] -right-[36px]">
              <Image src={`/assets/images/profile/${user?.Info?.profileIcon ?? 'cat'}.png`} width={600} height={600} />
            </div>
            {/*Ticket description*/}
            <div className="flex flex-col absolute top-[507px] left-[84px] text-purple">
              <span className="font-bold text-[84px]">{accountData?.Info?.username}</span>
              <div className="flex flex-col mt-12 font-medium">
                <span className="leading-[48px] text-[45px]">{accountData?.Info?.firstname}</span>
                <span className="leading-[48px] text-[45px] mt-[6px]">{accountData?.Info?.lastname}</span>
              </div>
              <div className="flex items-center mt-[12px] mb-36 space-x-3 text-purple">
                <UserIcon className="w-12 h-12" />
                <span className="mt-3 text-[48px] leading-[81px] font-medium">{accountData?.Info?.status}</span>
              </div>
            </div>
            {/* QR Container */}
            <div className="absolute w-[312px] h-[312px] left-[90px] bottom-[84px] rounded-3xl">
              <QRcode
                text={user?.uid}
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
            <TicketTemplate />
          </div>
        </div>
    )

    return<div className="flex flex-col justify-center w-screen h-screen text-center bg-black">hi</div>
}