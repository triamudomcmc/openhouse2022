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
        </Head>
        <body>
          <link rel="preconnect" href="https://fonts.googleapis.com" />
          <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin="anonymous" />
          <link
            href="https://fonts.googleapis.com/css2?family=Noto+Sans+Thai:wght@300;400;500;600;700&family=Prompt:wght@500&display=swap?family=Roboto+Mono&display=swap"
            rel="stylesheet"
          />
          <Main />
          <NextScript />
        </body>
      </Html>
    )
  }
}
