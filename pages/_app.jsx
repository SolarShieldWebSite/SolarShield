import AppContext from "../context/AppContext";
import "../styles/globals.scss";
import { useEffect } from "react";
import Script from "next/script";
import * as fbq from "../lib/fpixel";
import * as ga from "../lib/ga";
import { useRouter } from "next/router";
import { clarity } from "react-microsoft-clarity";

function MyApp({ Component, pageProps }) {
  const router = useRouter();

  useEffect(() => {
    fbq.pageview();
    clarity.init("ccpv4knwxd");

    const handleRouteChange = (url) => {
      fbq.pageview(url);
      ga.pageview(url);
    };

    router.events.on("routeChangeComplete", handleRouteChange);

    return () => {
      router.events.off("routeChangeComplete", handleRouteChange);
    };
  }, [router.events]);

  return (
    <AppContext>
      <Script
        id="Facebook_pixel"
        strategy="afterInteractive"
        dangerouslySetInnerHTML={{
          __html: `
          !function(f,b,e,v,n,t,s)
          {if(f.fbq)return;n=f.fbq=function(){n.callMethod?
          n.callMethod.apply(n,arguments):n.queue.push(arguments)};
          if(!f._fbq)f._fbq=n;n.push=n;n.loaded=!0;n.version='2.0';
          n.queue=[];t=b.createElement(e);t.async=!0;
          t.src=v;s=b.getElementsByTagName(e)[0];
          s.parentNode.insertBefore(t,s)}(window, document,'script',
          'https://connect.facebook.net/en_US/fbevents.js');
          fbq('init', ${fbq.FB_PIXEL_ID});
          fbq('track', 'PageView');
          `,
        }}
      />

      <Component {...pageProps} />

      {/* Axeptio */}

      <Script
        id="Axeptio"
        strategy="afterInteractive"
        dangerouslySetInnerHTML={{
          __html: `
          window.axeptioSettings = {
            clientId: "639a26bfa089325e0a164c72",
            cookiesVersion: "solarshield-fr",
          };
           
          (function(d, s) {
            var t = d.getElementsByTagName(s)[0], e = d.createElement(s);
            e.async = true; e.src = "./axeptio-sdk.js";
            t.parentNode.insertBefore(e, t);
          })(document, "script");`,
        }}
      />
    </AppContext>
  );
}

MyApp.getInitialProps = async ({ Component, ctx }) => {
  const pageProps = Component.getInitialProps
    ? await Component.getInitialProps(ctx)
    : {};
  if (Object.keys(pageProps).length > 0) {
    return { pageProps };
  } else {
    return {};
  }
};

export default MyApp;
