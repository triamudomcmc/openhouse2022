import { useAuth } from "@lib/auth"
import type { NextPage } from "next"
import Link from "next/link"
import { useRouter } from "next/router"

const Home: NextPage = () => {
  const auth = useAuth()
  const router = useRouter()

  router.push("/clubs")

  return (
    <div className="main-section min-h-screen flex flex-col justify-center align-center">
      {/* <Link href="/register">
        <button className="flex items-center justify-center mx-auto font-display bg-white hover:bg-gray-300 py-auto rounded-full w-80 py-3 mb-6">
          <p className="px-4 text-gray-700">Register</p>
        </button>
      </Link>
      <button
        className="flex items-center justify-center mx-auto font-display bg-white hover:bg-gray-300 py-auto rounded-full w-80 py-3 mb-6"
        onClick={() => auth?.signout()}
      >
        <p className="px-4 text-gray-700">Sign out</p>
      </button> */}
    </div>
  )
}

export default Home
