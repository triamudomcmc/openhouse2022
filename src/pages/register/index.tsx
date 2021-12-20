import Link from "next/link"
import { useAuth } from "@lib/auth"
import { useState } from "react"
import { TUCMCLogo } from "@components/common/TUCMCLogo"
import { AllMethods } from "@components/register/AllMethods"
import { EmailForm } from "@components/register/emailform"

export type TPages = "all" | "email"

const Register = () => {
  const auth = useAuth()
  const [page, setPage] = useState<TPages>("all")

  return (
    <>
      <main className="relative py-2 w-full min-h-screen bg-gray-900">
        <div className="flex flex-col items-center justify-center h-screen">
          <div>
            <p className="font-display text-3xl text-white text-center font-medium py-2">Register / ลงทะเบียน</p>
            <p className="font-display text-white text-center pb-8">
              Or{" "}
              <Link href="/login" passHref>
                <a className="text-red-400 hover:underline">login here</a>
              </Link>
            </p>
          </div>

          {page === "all" ? <AllMethods setPage={setPage} auth={auth} /> : <EmailForm auth={auth} setPage={setPage} />}
          <TUCMCLogo className="mt-4" />
        </div>
      </main>
    </>
  )
}

export default Register
