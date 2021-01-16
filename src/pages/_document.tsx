import Document, { Head, Main, NextScript, Html } from "next/document";
import metadata from "../../config";

export default class MyDocument extends Document {
  render() {
    return (
      <Html lang="en">
        <Head>
          <link rel="preconnect" href="https://fonts.gstatic.com" />
          <link
            href="https://fonts.googleapis.com/css2?family=Montserrat:wght@400;600;700&family=Poppins:wght@100&display=swap"
            rel="stylesheet"
          />
          <link
            href="https://fonts.googleapis.com/css2?family=Poppins:wght@400;700&display=swap"
            rel="stylesheet"
          />
          <meta name="description" content={metadata.description} />
          <meta name="og:title" property="og:title" content={metadata.title} />
          <meta
            name="og:description"
            property="og:description"
            content={metadata.description}
          />
          <meta name="og:type" property="og:type" content="website" />
          <meta name="og:url" property="og:url" content={metadata.siteUrl} />
          <meta
            name="og:image"
            property="og:image"
            content="images/website-preview.png"
          />
          <meta name="twitter:card" content="summary" />
          <meta name="twitter:creator" content={metadata.author} />
          <meta name="twitter:title" content={metadata.title} />
          <meta name="twitter:description" content={metadata.description} />
          <link rel="shortcut icon" href="favicon.ico" type="image/x-icon" />

          <script
            async
            src={`https://www.googletagmanager.com/gtag/js?id=${metadata.googleAnalyticsTrackingId}`}
          ></script>
          <script
            async
            dangerouslySetInnerHTML={{
              __html: `window.dataLayer = window.dataLayer || [];
              function gtag(){dataLayer.push(arguments);}
              gtag('js', new Date());
              gtag('config', '${metadata.googleAnalyticsTrackingId}');`,
            }}
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
