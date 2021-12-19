import { AuthProvider } from "@lib/auth"
import "@styles/tailwind.css"
import type { AppProps } from "next/app"
import { useRouter } from "next/router"

function MyApp({ Component, pageProps }: AppProps) {
  const { pathname } = useRouter()

  return (
    <AuthProvider>
      <Component {...pageProps} />
    </AuthProvider>
  )
}
export default MyApp
