import { IAuthContext } from "@lib/auth"
import Router from "next/router"

export const submitEmail: (auth: IAuthContext | null, email: string) => void = async (auth, email) => {
  auth?.setLoading(true)
  await auth?.sendSigninWithEmail(email, `${window.location.protocol}//${window.location.host}/register/email/confirm`)
  Router.push("/register/email/sent")
  auth?.setLoading(false)
}
