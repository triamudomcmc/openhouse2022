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
            href="https://fonts.googleapis.com/css2?family=Noto+Sans+Thai:wght@300;400;500;600;700&;800family=Prompt:wght@300;500;600&display=swap?family=Roboto+Mono&display=swap"
            rel="stylesheet"
          />
          <link
            href="https://fonts.googleapis.com/css2?family=Bai+Jamjuree:wght@400;500;600;700;800&display=swap"
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
          <script async src="https://www.googletagmanager.com/gtag/js?id=G-K3262R253B"></script>
          <script
            dangerouslySetInnerHTML={{
              __html: `
			  window.dataLayer = window.dataLayer || [];
			  function gtag(){dataLayer.push(arguments);}
			  gtag('js', new Date());
			  gtag('config', 'G-BP2MQ6QL2W', {
				page_path: window.location.pathname,
			  });
			`,
            }}
          />
        </Head>
        <body>
          <Main />
          <NextScript />
        </body>
      </Html>
    )
  }
}
