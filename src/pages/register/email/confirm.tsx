import { useAuth } from "@lib/auth"
import { NextPage } from "next"
import { useRouter } from "next/router"
import { useEffect } from "react"

export default function ConfirmMail() {
  const auth = useAuth()
  const router = useRouter()

  useEffect(() => {
    const email = typeof window !== "undefined" ? window?.localStorage?.getItem("emailForSignIn") : null

    if (!email) {
      router.push({
        pathname: "/auth",
        query: {
          method: "email",
        },
      })
    } else {
      auth
        ?.signinWithEmail(email)
        .then(() => {
          router.push("/done")
        })
        .catch((e) => {
          console.log(e)
        })
    }
  }, [router, auth])

  return null
}
