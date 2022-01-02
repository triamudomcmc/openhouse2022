import { IAuthContext } from "@lib/auth"
import { updateUser } from "@lib/db"
import { IGameData } from "@pages/game"
import Router from "next/router"

const tickets = ["strong", "brave", "cheerful", "friendship", "passion", "strategist", "restoration", "determination"]

export const submitSkipGame: (auth: IAuthContext | null) => void = async (auth) => {
  auth?.setLoading(true)

  if (auth?.user?.uid) {
    await updateUser(auth?.user?.uid, { ticket: tickets[Math.floor(Math.random() * tickets.length)] }) // random ticket
    Router.push("/ticket")
  }

  auth?.setLoading(false)
}

export const submitGame: (auth: IAuthContext | null, data: IGameData) => void = async (auth, data) => {
  auth?.setLoading(true)

  if (auth?.user?.uid) {
    await updateUser(auth?.user?.uid, { ...data })
    Router.push("/ticket")
  }
  auth?.setLoading(false)
}
