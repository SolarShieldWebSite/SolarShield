import Head from "next/head";
import HamburgerMenu from "./HamburgerMenu";
import styles from "./Layout.module.scss";
import Footer from "./Footer";
import BottomCta from "./BottomCta";
import MediaQuery from "react-responsive";
import DesktopMenu from "./DesktopMenu";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faFacebook, faInstagram } from "@fortawesome/free-brands-svg-icons";
import Link from "next/link";

export default function Layout({ children, home, param, covering }) {
  return (
    <>
      <Head>
        {/* COMMON META TAG */}
        <meta
          name="designer"
          content="Emilien SECHILARIU, esechilariu@yahoo.fr"
        />
        <meta name="publisher" content="Léo LUTTENBACHER" />
        <meta name="language" content="FR" />
        <meta name="category" content="Vitres teintées" />
        <meta name="identifier-URL" content="https://solarshield.fr/" />
        <meta property="og:site_name" content="SolarShield" />
        <meta property="og:type" content="website" />
        <meta property="og:locale" content="fr_FR" />
        <meta property="og:image" content="/logo_white.svg" />
        <link rel="canonical" href="https://solarshield.fr/" />
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify({
              "@context": "http://schema.org",
              "@type": "LocalBusiness",
              name: "SolarShield",
              image: "",
              email: "contact.solarshield@gmail.com",
              sameAs: ["https://www.instagram.com/solar.shield_angers"],
              address: {
                "@type": "PostalAddress",
                addressLocality: "Angers",
                addressCountry: "France",
                postalCode: "49100",
              },
              url: "https://solarshield.fr/",
            }),
          }}
        />
        {/* END COMMON META TAG */}

        {/* FAVICON */}
        <link
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
        />
        <link rel="manifest" href="/site.webmanifest" />
        <link rel="mask-icon" href="/safari-pinned-tab.svg" color="#5bbad5" />
        <meta name="msapplication-TileColor" content="#da532c" />
        <meta name="theme-color" content="#ffffff" />
        {/* CUSTOM FONT */}
        <link
          rel="preload"
          href="/font/eurostile.ttf"
          as="font"
          crossOrigin=""
        />
      </Head>
      <main
        className={`${styles.main} ${
          covering ? styles.main_dark : styles.main_light
        }`}
      >
        {!home ? (
          <div
            className={`${styles.navbar} ${
              covering ? styles.navbar_dark : styles.navbar_light
            }`}
          >
            <div className={styles.logo}>
              <Link href="/" passHref>
                {covering ? (
                  <img
                    src="/logo_gold.svg"
                    height={70}
                    width={140}
                    alt="logo"
                  />
                ) : (
                  <img
                    src="/logo_white.svg"
                    height={70}
                    width={140}
                    alt="logo"
                  />
                )}
              </Link>
            </div>
            <div className={styles.social}>
              <Link href="https://www.facebook.com/solarshieldangers/" passHref>
                <FontAwesomeIcon icon={faFacebook} size="2x" />
              </Link>
              <Link
                href="https://www.instagram.com/solar.shield_angers/?hl=fr"
                passHref
              >
                <FontAwesomeIcon icon={faInstagram} size="2x" />
              </Link>
            </div>
            <MediaQuery maxWidth={900}>
              <div className={styles.nav}>
                <HamburgerMenu />
              </div>
            </MediaQuery>
            <MediaQuery minWidth={901}>
              <DesktopMenu />
            </MediaQuery>
          </div>
        ) : null}
        {children}
        <BottomCta covering={covering} home={home} />
      </main>
      {!home ? (
        <>
          <footer
            className={`${styles.footer} ${
              covering ? styles.footer_dark : styles.footer_light
            }`}
          >
            <Footer param={param} covering={covering} />
          </footer>
          <div className={styles.credits}>
            <p>
              &copy; Copyright <strong>Solar Shield</strong> 2021
            </p>
            <p>Designed by Emilien SECHILARIU</p>
            <p>Coded by Thomas AMOROSO</p>
          </div>
        </>
      ) : null}
    </>
  );
}
