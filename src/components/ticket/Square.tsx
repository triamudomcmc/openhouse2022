import { ticketTypes } from "@types"
import { FC } from "react"

export type TicketProps = {
  width: number
  type?: ticketTypes
  name?: string
  uid?: string
}

export const SquareTicket: FC<TicketProps> = ({
  width,
  name = "nark",
  type = "brave",
  uid = "4tZbV8PSzLf5Uxt4kyzu0rg9AFW2",
}) => {
  return <div></div>
}
