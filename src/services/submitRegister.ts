import { IAuthContext } from "@lib/auth"
import { IData } from "@pages/register/onboard"
import Router from "next/router"

export const submitRegister: (auth: IAuthContext | null, data: IData) => void = async (auth, data) => {
  auth?.setLoading(true)
  console.log(data)
  //   await auth?.sendSigninWithEmail(email, `${window.location.protocol}//${window.location.host}/register/email/confirm`)
  //   Router.push("/register/email/sent")
  auth?.setLoading(false)
}
