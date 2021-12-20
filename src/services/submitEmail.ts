import { IAuthContext } from "@lib/auth"
import Router from "next/router"

export const submitEmail: (auth: IAuthContext | null, email: string) => void = async (auth, email) => {
  auth?.setLoading(true)
  await auth?.sendSigninWithEmail(email, `${window.location.protocol}//${window.location.host}/signup/email/confirm`)
  Router.push("/signup/email/sent")
  auth?.setLoading(false)
}
