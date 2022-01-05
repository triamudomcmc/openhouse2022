import { FC } from "react"
import { Footer } from "./Footer"
import { Nav } from "./Nav"

export const Layout: FC = ({ children }) => {
  return (
    <>
      <Nav />
      <div className="w-full min-h-screen font-display text-white">{children}</div>
      <Footer />
    </>
  )
}
