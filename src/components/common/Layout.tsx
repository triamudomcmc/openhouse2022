import { FC } from "react"
import { Footer } from "./Footer"
import { Nav } from "./Nav"
import { useRouter } from "next/router"

export const Layout: FC = ({ children }) => {
  const router = useRouter()

  return (
    <>
      <Nav theme={router.pathname === "/ticket" ? "dark" : "light"} />
      <div className="antialiased w-full min-h-screen font-display text-white">{children}</div>
      <Footer />
    </>
  )
}
