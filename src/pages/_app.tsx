import "@styles/tailwind.css"
import "@styles/quill.bubble.css"

import { AuthProvider } from "@lib/auth"
import { AppProps } from "next/app"
import { Navbar } from "@components/common/Nav/Navbar"
import { useRouter } from "next/router"
import { Footer } from "@components/common/Footer"
import Head from "next/head"

function MyApp({ Component, pageProps }: AppProps) {
  const router = useRouter()

  return (
    <AuthProvider>
      <Head>
        <title>Triamudom Openhouse 2023</title>
      </Head>
      <link rel="icon" href="/favicon.ico" />
      {router?.pathname !== "/ticket" && <Navbar classname=" z-[99]" />}
      <div className="min-h-screen w-full">
        <Component {...pageProps} />
      </div>
      {!(router.pathname === "/ticket") && <Footer />}
    </AuthProvider>
  )
}

// {!(router?.pathname.includes('/ticket') && !(router?.pathname.includes('/account/ticket'))) && <Navbar classname=" z-[99]" />}

export default MyApp
