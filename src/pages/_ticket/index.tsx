import { PortraitTicket } from "@components/ticket/Portrait"
import { SquareTicket } from "@components/ticket/Square"
import { ticketTypes } from "@types"
import { GetStaticProps, NextPage } from "next"
import { useRouter } from "next/router"

const TicketImage: NextPage<{ name: string; type: ticketTypes; uid: string }> = ({ name, type, uid }) => {
  const router = useRouter()
  const query = router?.query
  const data = JSON.parse(query?.data as string) ?? { name: "nark", type: "brave", uid: "5tZbV8PSzLf5Uxt4kyzu0rg9AFW2" }

  //   if (query.type === 'pot') {
  //     return (
  //       <Portrait
  //         width={1080}
  //         nickname={query.nickname ? query.nickname.toString() : undefined}
  //         wishes={query.wishes ? query.wishes.toString() : undefined}
  //       />
  //     )
  //   }

  //   if (query.type === 'sq') {
  //     return (
  //       <Square
  //         width={1080}
  //         nickname={query.nickname ? query.nickname.toString() : undefined}
  //         wishes={query.wishes ? query.wishes.toString() : undefined}
  //       />
  //     )
  //   }

  //   if (query.type === 'nwsq') {
  //     return (
  //       <SimpleSquare
  //         width={1080}
  //         nickname={query.nickname ? query.nickname.toString() : undefined}
  //       />
  //     )
  //   }

  //   if (query.type === 'nwpot') {
  //     return (
  //       <SimplePortrait
  //         width={1080}
  //         nickname={query.nickname ? query.nickname.toString() : undefined}
  //       />
  //     )
  //   }

  return <PortraitTicket width={256} name={data.name} uid={data.uid} type={data.type} />
}

export default TicketImage
