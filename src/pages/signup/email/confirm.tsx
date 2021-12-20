import { useAuth } from "@lib/auth"
import { NextPage } from "next"
import { useRouter } from "next/router"

const ConfirmMail: NextPage = () => {
  const auth = useAuth()
  const router = useRouter()
  const email = window.localStorage.getItem("emailForSignIn")
  if (!email)
    router.push({
      pathname: "/signup/index",
      query: {
        method: "email",
      },
    })
  else {
    auth?.signinWithEmail(email)
    router.push("/signup/onboard")
  }

  return (
    <div className="py-2">
      <p>done</p>
    </div>
  )
}

export default ConfirmMail
