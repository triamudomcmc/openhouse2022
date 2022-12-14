import '@styles/tailwind.css'
import '@styles/quill.bubble.css'

import { AuthProvider } from "@lib/auth"
import { AppProps } from 'next/app'

function MyApp({ Component, pageProps }: AppProps) {
  return (
    <AuthProvider>
      <link rel="icon" href="/favicon.ico" />
      <Component {...pageProps} />
    </AuthProvider>
  )
}

export default MyApp
