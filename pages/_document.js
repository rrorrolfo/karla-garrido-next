import React from "react";
import Document, { Html, Head, Main, NextScript } from "next/document";
import { ServerStyleSheets } from "@mui/styles";

class MyDocument extends Document {
  render() {
    return (
      <Html lang="es-MX">
        <Head>
          <meta name="theme-color" content="#ffffff" />
          <meta name="msapplication-TileColor" content="#da532c" />
          <meta name="HandheldFriendly" content="true" />

          <meta property="og:site_name" content="Creditamina.mx" />
          <meta property="og:locale" content="es_MX" />
          {/* <meta property="og:image" content="/creditamina-logo-fb.png" /> */}
          {/* <meta property="og:image:type" content="image/png" /> */}
          {/* <meta
            property="og:image:alt"
            content="Préstamos en línea Creditamina logo"
          />
          <meta property="og:image:height" content="200px" />
          <meta property="og:image:width" content="200px" /> */}

          <meta name="keywords" content="" />

          {/* <link rel="icon" href="/favicon.ico" /> */}
          {/* <link
            rel="apple-touch-icon"
            sizes="180x180"
            href="/apple-touch-icon.png"
          />
          <link
            rel="icon"
            type="image/png"
            sizes="32x32"
            href="/favicon-32x32.png"
          />
          <link
            rel="icon"
            type="image/png"
            sizes="16x16"
            href="/favicon-16x16.png"
          /> */}
          {/* <link rel="manifest" href="/manifest.json" type="application/json" />
          <link rel="mask-icon" href="/safari-pinned-tab.svg" color="#5bbad5" /> */}

          <link
            href="https://fonts.googleapis.com/css2?family=Raleway:wght@300;400;700&display=swap"
            rel="stylesheet"
          />
        </Head>
        <body>
          <Main />
          <NextScript />
        </body>
      </Html>
    );
  }
}

MyDocument.getInitialProps = async (ctx) => {
  const sheets = new ServerStyleSheets();
  const originalRenderPage = ctx.renderPage;

  ctx.renderPage = () =>
    originalRenderPage({
      enhanceApp: (App) => (props) => sheets.collect(<App {...props} />),
    });

  const initialProps = await Document.getInitialProps(ctx);

  return {
    ...initialProps,
    styles: [
      ...React.Children.toArray(initialProps.styles),
      sheets.getStyleElement(),
    ],
  };
};

export default MyDocument;
