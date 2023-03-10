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
        {!home && (
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
                <svg width="0.875em" fontSize="2em" viewBox="0 0 512 512">
                  <path d="M504 256C504 119 393 8 256 8S8 119 8 256c0 123.78 90.69 226.38 209.25 245V327.69h-63V256h63v-54.64c0-62.15 37-96.48 93.67-96.48 27.14 0 55.52 4.84 55.52 4.84v61h-31.28c-30.8 0-40.41 19.12-40.41 38.73V256h68.78l-11 71.69h-57.78V501C413.31 482.38 504 379.78 504 256z" />
                </svg>
              </Link>
              <Link
                href="https://www.instagram.com/solar.shield_angers/?hl=fr"
                passHref
              >
                <svg width="0.875em" fontSize="2em" viewBox="0 0 448 512">
                  <path d="M224.1 141c-63.6 0-114.9 51.3-114.9 114.9s51.3 114.9 114.9 114.9S339 319.5 339 255.9 287.7 141 224.1 141zm0 189.6c-41.1 0-74.7-33.5-74.7-74.7s33.5-74.7 74.7-74.7 74.7 33.5 74.7 74.7-33.6 74.7-74.7 74.7zm146.4-194.3c0 14.9-12 26.8-26.8 26.8-14.9 0-26.8-12-26.8-26.8s12-26.8 26.8-26.8 26.8 12 26.8 26.8zm76.1 27.2c-1.7-35.9-9.9-67.7-36.2-93.9-26.2-26.2-58-34.4-93.9-36.2-37-2.1-147.9-2.1-184.9 0-35.8 1.7-67.6 9.9-93.9 36.1s-34.4 58-36.2 93.9c-2.1 37-2.1 147.9 0 184.9 1.7 35.9 9.9 67.7 36.2 93.9s58 34.4 93.9 36.2c37 2.1 147.9 2.1 184.9 0 35.9-1.7 67.7-9.9 93.9-36.2 26.2-26.2 34.4-58 36.2-93.9 2.1-37 2.1-147.8 0-184.8zM398.8 388c-7.8 19.6-22.9 34.7-42.6 42.6-29.5 11.7-99.5 9-132.1 9s-102.7 2.6-132.1-9c-19.6-7.8-34.7-22.9-42.6-42.6-11.7-29.5-9-99.5-9-132.1s-2.6-102.7 9-132.1c7.8-19.6 22.9-34.7 42.6-42.6 29.5-11.7 99.5-9 132.1-9s102.7-2.6 132.1 9c19.6 7.8 34.7 22.9 42.6 42.6 11.7 29.5 9 99.5 9 132.1s2.7 102.7-9 132.1z" />
                </svg>
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
        )}
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
