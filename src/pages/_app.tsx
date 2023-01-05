import "@styles/tailwind.css"
import "@styles/quill.bubble.css"

import { AuthProvider } from "@lib/auth"
import { AppProps } from "next/app"
import { Navbar } from "@components/common/Nav/Navbar"
import { useRouter } from "next/router"
import { Footer } from "@components/common/Footer"

function MyApp({ Component, pageProps }: AppProps) {
  const router = useRouter()

  return (
    <AuthProvider>
      <link rel="icon" href="/favicon.ico" />
      {router?.pathname !== "/ticket" && <Navbar classname=" z-[99]" />}
      <Component {...pageProps} />
      {!(router.pathname.includes('/ticket/')) && <Footer />}
    </AuthProvider>
  )
}

// {!(router?.pathname.includes('/ticket') && !(router?.pathname.includes('/account/ticket'))) && <Navbar classname=" z-[99]" />}

export default MyApp
