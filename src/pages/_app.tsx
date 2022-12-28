import '@styles/tailwind.css'
import '@styles/quill.bubble.css'

import { AuthProvider } from "@lib/auth"
import { AppProps } from 'next/app'
import { Navbar } from '@components/common/Nav/Navbar'

function MyApp({ Component, pageProps }: AppProps) {
  return (
    <AuthProvider>
      <link rel="icon" href="/favicon.ico" />
      <Navbar classname=' z-[99]'/>
      <Component {...pageProps} />
    </AuthProvider>
  )
}

export default MyApp
