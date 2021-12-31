import { PortraitTicket } from "@components/ticket/Portrait"
import { SquareTicket } from "@components/ticket/Square"
import { ticketProps } from "@pages/ticket/[uid]"
import { ticketTypes } from "@types"
import { NextPage } from "next"
import { useRouter } from "next/router"

interface ticketParsedData extends ticketProps {
  size: "portrait" | "square"
}

const TicketImage: NextPage = () => {
  const router = useRouter()
  const query = router?.query

  const data: ticketParsedData = { name: "nark", type: "brave", uid: "5tZbV8PSzLf5Uxt4kyzu0rg9AFW2", size: "portrait" }
  data.name = query?.name as string
  data.type = query?.type as ticketTypes
  data.uid = query?.uid as string
  data.size = query?.size as "portrait" | "square"

  return data.size === "portrait" ? (
    <PortraitTicket width={1080} name={data.name} uid={data.uid} type={data.type} />
  ) : (
    <SquareTicket width={1080} name={data.name} uid={data.uid} type={data.type} />
  )
}

export default TicketImage
