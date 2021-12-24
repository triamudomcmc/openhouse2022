import "@styles/tailwind.css"
import type { AppProps } from "next/app"
import { useRouter } from "next/router"

function MyApp({ Component, pageProps }: AppProps) {
  const { pathname } = useRouter()

  return (
    <>
      <Component {...pageProps} />
    </>
  )
}
export default MyApp
