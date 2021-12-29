import { PortraitTicket } from "@components/ticket/Portrait"
import { SquareTicket } from "@components/ticket/Square"
import { NextPage } from "next"
import { useRouter } from "next/router"

const TicketImage: NextPage = () => {
  const { query } = useRouter()
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

  return <SquareTicket width={512} />
}

export default TicketImage
