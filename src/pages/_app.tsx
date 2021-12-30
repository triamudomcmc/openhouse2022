import { Layout } from "@components/common/Layout"
import { Loading } from "@components/common/Loading"
import { MetaData } from "@components/common/Meta"
import { AuthProvider } from "@lib/auth"
import { ToastProvider } from "@lib/toast"
import "@styles/tailwind.css"
import type { AppProps } from "next/app"
import { useRouter } from "next/router"
import { useEffect, useState } from "react"

function MyApp({ Component, pageProps }: AppProps) {
  const router = useRouter()
  const [loading, setLoading] = useState(false)
  // const audioRef = useRef<HTMLAudioElement | null>(null);
  // const [mute, setMute] = useState(true);

  useEffect(() => {
    const handleStart = (url: any) => {
      url !== router.pathname ? setLoading(true) : setLoading(false)
    }
    const handleComplete = (url: any) => {
      // setMute(true);
      setLoading(false)
    }

    router.events.on("routeChangeStart", handleStart)
    router.events.on("routeChangeComplete", handleComplete)
    router.events.on("routeChangeError", handleComplete)
  }, [router])

  return loading ? (
    <Loading />
  ) : (
    <AuthProvider>
      <ToastProvider>
        <MetaData />
        {!(router.pathname === "/game" || router.pathname === "/_ticket") ? (
          <Layout>
            <Component {...pageProps} />
          </Layout>
        ) : (
          <Component {...pageProps} />
        )}
      </ToastProvider>
    </AuthProvider>
  )
}
export default MyApp
