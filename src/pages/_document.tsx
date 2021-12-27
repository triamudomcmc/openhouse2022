import NextDocument, { DocumentContext, Head, Html, Main, NextScript } from "next/document"

export default class Document extends NextDocument {
  static async getInitialProps(ctx: DocumentContext) {
    const initialProps = await NextDocument.getInitialProps(ctx)
    return { ...initialProps }
  }

  render() {
    return (
      <Html lang="th">
        <Head>
          <meta charSet="utf-8" />
          <link rel="preconnect" href="https://fonts.googleapis.com" />
          <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin="anonymous" />
          <link
            href="https://fonts.googleapis.com/css2?family=Noto+Sans+Thai:wght@300;400;500;600;700&family=Prompt:wght@500&display=swap?family=Roboto+Mono&display=swap"
            rel="stylesheet"
          />
          <link rel="icon" type="image/x-icon" href="/meta/favicon.ico" />
          <link rel="apple-touch-icon" sizes="180x180" href="/meta/apple-touch-icon.png" />
          <link rel="icon" type="image/png" sizes="32x32" href="/meta/favicon-32x32.png" />
          <link rel="icon" type="image/png" sizes="16x16" href="/meta/favicon-16x16.png" />
          <link rel="manifest" href="/meta/site.webmanifest" />
          <meta name="msapplication-TileColor" content="#da532c" />
          <meta name="theme-color" content="#ffffff" />
          <meta
            name="keywords"
            content="Triam Udom, TUOPH, Triam Udom Online Open House, Triam Udom Open House 2022, Triam Udom Online Open House 2022, TriamOPH2022, triam, tu85, Triamudom85, เตรียมอุดม, เตรียมอุดมฯ, triamOPH"
          />

          {/* Open Graph / Facebook  */}
          <meta property="og:type" content="website" />
          <meta property="og:url" content="https://openhouse.triamudom.ac.th/" />
          <meta property="og:title" content="Triam Udom Online Open House 2022" />
          <meta
            property="og:description"
            content="งานนิทรรศการประจำปีของโรงเรียนเตรียมอุดมศึกษา พบกับกิจกรรมที่น่าสนใจจากนักเรียนโรงเรียนเตรียมอุดมศึกษา อาทิ แนะแนวการศึกษาต่อ แนะนำสายการเรียน และกิจกรรมจากชมรมต่าง ๆ"
          />
          <meta property="og:image" content="/meta/preview.png" />

          {/* Twitter  */}
          <meta property="twitter:card" content="summary_large_image" />
          <meta property="twitter:url" content="https://openhouse.triamudom.ac.th/" />
          <meta property="twitter:title" content="Triam Udom Online Open House 2022" />
          <meta
            property="twitter:description"
            content="งานนิทรรศการประจำปีของโรงเรียนเตรียมอุดมศึกษา พบกับกิจกรรมที่น่าสนใจจากนักเรียนโรงเรียนเตรียมอุดมศึกษา อาทิ แนะแนวการศึกษาต่อ แนะนำสายการเรียน และกิจกรรมจากชมรมต่าง ๆ"
          />
          <meta property="twitter:image" content="/meta/preview.png" />
        </Head>
        <body>
          <Main />
          <NextScript />
        </body>
      </Html>
    )
  }
}
