import Layout from "../components/Layout";
import styles from "../styles/Home.module.scss";
import Link from "next/link";
import Head from "next/head";
import { useState } from "react";

export default function Home() {
  const [hoveredGlass, setHoveredGlass] = useState(false);
  const [hoveredCovering, setHoveredCovering] = useState(false);
  return (
    <Layout home>
      <Head>
      <title>Pose de vitres teintées & covering à Angers - SolarShield</title>
        <meta
          name="description"
          content="Prestations proposées à l’atelier à Angers : Vitres teintées, feux teintés, covering, déchromage"
        />
        <meta
          name="keywords"
          content="VITRES TEINT&Eacute;ES ANGERS, D&Eacute;CHROMAGE ANGERS, FEUX TEINT&Eacute;S ANGERS, COVERING ANGERS, VITRES TEINT&Eacute;ES, D&Eacute;CHROMAGE, FEUX TEINT&Eacute;S, COVERING"
        />
        <meta
          property="og:title"
          content="Pose de vitres teintées & covering à Angers - SolarShield"
        />
        <meta
          property="og:description"
          content="Prestations proposées à l’atelier à Angers : Vitres teintées, feux teintés, covering, déchromage"
        />
        <meta property="og:url" content="https://solarshield.fr/" />
      </Head>
      <div className={styles.container}>
        <div
          className={`${styles.vitre} ${hoveredGlass ? styles.hovered : null}`}
        >
          <Link href="/pose-vitres-teintees-voiture" passHref>
            <button
              className={styles.vitre_btn}
              onMouseEnter={() => setHoveredGlass(true)}
              onMouseLeave={() => setHoveredGlass(false)}
            >
              Vitres teintées - Feux teintés
            </button>
          </Link>
        </div>
        <div
          className={`${styles.covering} ${
            hoveredCovering ? styles.hovered : null
          }`}
        >
          <Link href="/covering-voiture" passHref>
            <button
              className={styles.covering_btn}
              onMouseEnter={() => setHoveredCovering(true)}
              onMouseLeave={() => setHoveredCovering(false)}
            >
              Covering - Déchromage
            </button>
          </Link>
        </div>
        <div className={styles.logo}>
          <img src="/logo_white.svg" alt="logo" height={150} width={300} />
        </div>
      </div>
    </Layout>
  );
}
