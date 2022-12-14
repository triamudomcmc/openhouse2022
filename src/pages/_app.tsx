import '@styles/tailwind.css'
import '@styles/quill.bubble.css'

import { AuthProvider } from "@lib/auth"
import { AppProps } from 'next/app'
import { Navbar } from '@components/common/Nav/Navbar'

function MyApp({ Component, pageProps }: AppProps) {
  return (
    <AuthProvider>
      <Navbar />
      <Component {...pageProps} />
    </AuthProvider>
  )
}

export default MyApp
