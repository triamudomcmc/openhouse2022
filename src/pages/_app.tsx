import "@styles/tailwind.css"
import "@styles/quill.bubble.css"

import { AuthProvider } from "@lib/auth"
import { AppProps } from "next/app"
import { Navbar } from "@components/common/Nav/Navbar"
import { useRouter } from "next/router"

function MyApp({ Component, pageProps }: AppProps) {
  const router = useRouter()

  return (
    <AuthProvider>
      <link rel="icon" href="/favicon.ico" />
       {!(router.pathname.includes('/ticket/')) && <Navbar classname=" z-[99]" />}
      <Component {...pageProps} />
    </AuthProvider>
  )
}

export default MyApp
