import Document, { Html, Head, Main, NextScript } from "next/document";
import { FB_PIXEL_ID } from "../lib/fpixel";

class CustomDocument extends Document {
  static async getInitialProps(ctx) {
    const initialProps = await Document.getInitialProps(ctx);
    return { ...initialProps };
  }

  render() {
    return (
      <Html>
        <Head>
          <link
            href="https://fonts.googleapis.com/css2?family=Roboto:wght@300&display=swap"
            rel="stylesheet"
          />
          <noscript>
            <img
              height="1"
              width="1"
              style={{ display: "none" }}
              src={`https://www.facebook.com/tr?id=${FB_PIXEL_ID}&ev=PageView&noscript=1`}
            />
          </noscript>
          <meta
            name="facebook-domain-verification"
            content="nf7raqo23dyu4swi4ndzmdm56gyz3n"
          />
          {/* Global Site Tag (gtag.js) - Google Analytics */}
          <script
            async
            src={`https://www.googletagmanager.com/gtag/js?id=G-XVDM2KWY83`}
          />
          <script
            dangerouslySetInnerHTML={{
              __html: `
            window.dataLayer = window.dataLayer || [];
            function gtag(){dataLayer.push(arguments);}
            gtag('js', new Date());
            gtag('config', 'G-XVDM2KWY83', {
              page_path: window.location.pathname,
            });
          `,
            }}
          />

          {/* Axeptio */}

          <script
            dangerouslySetInnerHTML={{
              __html: `
              window.axeptioSettings = {
                clientId: "639a26bfa089325e0a164c72",
                cookiesVersion: "solarshield-fr",
              };
               
              (function(d, s) {
                var t = d.getElementsByTagName(s)[0], e = d.createElement(s);
                e.async = true; e.src = "//static.axept.io/sdk.js";
                t.parentNode.insertBefore(e, t);
              })(document, "script");`,
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

export default CustomDocument;
