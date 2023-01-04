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
  username: string
  uid: string
  profileIcon: string
  firstname: string
  lastname: string
  status: string
}

export const getStaticProps: GetStaticProps<Ticket> = async ({ params }) => {
  const uid = params?.uid?.toString() || null

  if (uid) {
    const ticketData = await getUserData(uid)

    return {
      props: {
        username: ticketData?.Info?.username ?? null,
        uid: ticketData?.uid ?? null,
        profileIcon: ticketData?.Info?.profileIcon ?? null,
        firstname: ticketData?.Info?.firstname ?? null,
        lastname: ticketData?.Info?.lastname ?? null,
        status: ticketData?.Info?.status ?? null
      },
      revalidate: 3000,
    }
  }

  return {
    props: {
      username: null,
      uid: null,
      profileIcon: null,
      firstname: null,
      lastname: null,
      status: null
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
  const router = useRouter()
  const query = router?.query

    return (
        <div>
          <div className="w-[951px] h-[1638px] relative">
            {/* Profile Container */}
            <div className="absolute top-[340px] -right-[30px]">
              <Image 
                src={`/assets/images/profile/${props.profileIcon ?? 'cat'}.png`} 
                width={600} 
                height={600}
              />
            </div>
            {/*Ticket description*/}
            <div className="flex flex-col absolute top-[507px] left-[84px] text-purple">
              <span className="font-bold text-[84px]">{props.username}</span>
              <div className="flex flex-col mt-12 font-medium">
                <span className="leading-[48px] text-[45px]">{props.firstname}</span>
                <span className="leading-[48px] text-[45px] mt-[6px]">{props.lastname}</span>
              </div>
              <div className="flex items-center mt-[12px] mb-36 space-x-3 text-purple">
                <UserIcon className="w-12 h-12" />
                <span className="mt-3 text-[48px] leading-[81px] font-medium">{props.status}</span>
              </div>
            </div>
            {/* QR Container */}
            <div className="absolute w-[312px] h-[312px] left-[90px] bottom-[84px] rounded-3xl">
              <QRcode
                text={props?.uid}
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
            <TicketTemplate width="951" height="1638"/>
          </div>
        </div>
    )
}