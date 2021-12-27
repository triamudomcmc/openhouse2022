

import { Layout } from "@components/common/Layout"
import { MetaData } from "@components/common/Meta"
import { AuthProvider } from "@lib/auth"
import "@styles/tailwind.css"
import type { AppProps } from "next/app"
import { useRouter } from "next/router"

function MyApp({ Component, pageProps }: AppProps) {
  const { pathname } = useRouter()

  return (
    <AuthProvider>
      <MetaData />
      <Layout>
        <Component {...pageProps} />
      </Layout>
    </AuthProvider>
  )
}
export default MyApp
