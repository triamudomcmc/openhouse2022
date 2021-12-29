import { IAuthContext } from "@lib/auth"
import { updateUser } from "@lib/db"
import { IData } from "@pages/register/onboard"
import Router from "next/router"

export const submitRegister: (auth: IAuthContext | null, data: IData) => void = async (auth, data) => {
  auth?.setLoading(true)

  if (auth?.user?.uid) {
    await updateUser(auth?.user?.uid, { ...data, ticket: null })
    Router.push("/game")
  }
  auth?.setLoading(false)
}
