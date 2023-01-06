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
        <title>Triamudom Open House 2023</title>
        <meta
          name="description"
          content="งานนิทรรศการประจำปีของโรงเรียนเตรียมอุดมศึกษา พบกับกิจกรรมที่น่าสนใจจากนักเรียนโรงเรียนเตรียมอุดมศึกษา อาทิ แนะแนวการศึกษาต่อ แนะนำสายการเรียน และกิจกรรมจากชมรมต่าง ๆ"
        />
        <meta name="viewport" content="width=device-width, initial-scale=1.0" />

        {/* Open Graph / Facebook  */}
        <meta property="og:type" content="website" />
        <meta property="og:url" content="https://openhouse.triamudom.ac.th/" />
        <meta property="og:title" content="Triam Udom Open House 2023" />
        <meta
          property="og:description"
          content="งานนิทรรศการประจำปีของโรงเรียนเตรียมอุดมศึกษา พบกับกิจกรรมที่น่าสนใจจากนักเรียนโรงเรียนเตรียมอุดมศึกษา อาทิ แนะแนวการศึกษาต่อ แนะนำสายการเรียน และกิจกรรมจากชมรมต่าง ๆ"
        />
        <meta property="og:image" content="/meta/preview.png" />

        {/* Twitter  */}
        <meta property="twitter:card" content="summary_large_image" />
        <meta property="twitter:url" content="https://openhouse.triamudom.ac.th/" />
        <meta property="twitter:title" content="Triam Udom Open House 2023" />
        <meta
          property="twitter:description"
          content="งานนิทรรศการประจำปีของโรงเรียนเตรียมอุดมศึกษา พบกับกิจกรรมที่น่าสนใจจากนักเรียนโรงเรียนเตรียมอุดมศึกษา อาทิ แนะแนวการศึกษาต่อ แนะนำสายการเรียน และกิจกรรมจากชมรมต่าง ๆ"
        />
        <meta property="twitter:image" content="/meta/preview.png" />
      </Head>
      <link rel="icon" href="/favicon.ico" />
      {router?.pathname !== "/ticket" && <Navbar classname=" z-[99]" />}
      <div className="w-full min-h-screen">
        <Component {...pageProps} />
      </div>
      {!(router.pathname === "/ticket") && <Footer />}
    </AuthProvider>
  )
}

// {!(router?.pathname.includes('/ticket') && !(router?.pathname.includes('/account/ticket'))) && <Navbar classname=" z-[99]" />}

export default MyApp
