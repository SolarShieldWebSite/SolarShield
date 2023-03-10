import Layout from "../components/Layout";
import styles from "../styles/tesla.module.scss";
import PriceCard from "../components/PriceCard";
import { priceGrid } from "../content/prix/content";
import GallerySwiper from "../components/GallerySwiper";
import { teslaData } from "../content/gallery/tesla";
import Head from "next/head";
import Link from "next/link";

export default function Tesla() {
  const object = priceGrid[5];
  return (
    <Layout param="tesla_page">
      <Head>
        <title>Pose de vitres teintées Tesla à Angers - SolarShield</title>
        <meta
          name="description"
          content="Spécialiste dans la pose de vitres teintées Tesla à Angers - Film protection solaire et anti-effraction"
        />
        <meta
          name="keywords"
          content="VITRES TEINT&Eacute;ES TESLA, POSE VITRES TEINT&Eacute;ES TESLA, VITRES TEINT&Eacute;S TESLA ANGERS, FILM TEINT&Eacute; TESLA"
        />
        <meta
          property="og:title"
          content="Pose de vitres teintées Tesla à Angers - SolarShield"
        />
        <meta
          property="og:description"
          content="Spécialiste dans la pose de vitres teintées Tesla à Angers - Film protection solaire et anti-effraction"
        />
        <meta property="og:url" content="https://solarshield.fr/tesla" />
      </Head>
      <h1 className="big_title big_title_light">Prestation tesla model 3</h1>

      {/* VIDEO */}
      <div className={styles.parallaxVideo}>
        <video autoPlay muted loop playsInline>
          <source src="/videos/TESLA.mp4" type="video/mp4" />
        </video>
      </div>
      <div className={styles.text_container}>
        <p className={styles.text}>
          La <strong>Tesla model 3</strong> ne dispose pas de{" "}
          <strong>vitres teintées</strong> d&apos;origine. Il s&apos;avère
          indispensable d&apos;avoir une <strong>protection solaire</strong> sur
          l&apos;immense <strong>lunette arrière</strong> que possède celle-ci.
        </p>
        <p className={styles.text}>
          Chez SolarShield la lunette arrière est réalisée de haut en bas sans
          coupe. Nous réalisons la{" "}
          <strong>pose de film anti-uv et anti-effraction</strong> sur la
          totalité de la lunette et pas seulement sur la partie basse non
          teintée d&apos;origine. Nous appliquons également un{" "}
          <strong>film de protection solaire</strong> sur les vitres arrières et
          les custodes.
        </p>
        <p className={styles.text}>
          Les vitres avants sont en doubles vitrage. Conformément aux
          instructions du constructeur, nous ne posons donc pas de{" "}
          <strong>film de protection solaire</strong> sur celle-ci.
        </p>
        <p className={styles.text}>
          Le forfait <strong>Tesla model 3</strong> est de 270€. Nous
          immobilisons votre véhicule seulement 1h30.
        </p>

        <section>
          <h1 className="big_title big_title_light">Tarif</h1>
          <div className={styles.price}>
            <a href="https://rdv.solarshield.fr/">
              <PriceCard
                src={object.src}
                sub={object.sub}
                price={object.price}
              />
            </a>
          </div>
        </section>
        <section>
          <h1 className="big_title big_title_light">Nos réalisations</h1>
          <GallerySwiper data={teslaData} />
        </section>
        <h2 className={styles.secondary_title}>
          Code promotion chez notre partenaire{" "}
          <Link href="https://www.detailing-maker.com/" passHref>
            <a>Detailing Maker</a>
          </Link>
        </h2>
        <p className={styles.text}>
          Muni de votre facture SolarShield, obtenez 10% de réduction sur
          l&apos;ensemble des prestations de{" "}
          <strong>protections carrosserie</strong> chez notre partenaire{" "}
          <Link href="https://www.detailing-maker.com/" passHref>
            <a>Detailing Maker</a>
          </Link>{" "}
          à Trélazé.
        </p>
        <p className={styles.text}>
          Vous souhaitez protéger votre carrosserie tout en personnalisant
          l&apos;aspect de votre Tesla ? SolarShield vous propose la{" "}
          <Link href="/pose-vitres-teintees-voiture" passHref>
            <a>pose de covering</a>
          </Link>{" "}
          complet ou partiel. Nous mettons en place un projet personnalisé afin
          de répondre au mieux à vos attentes. Nous travaillons avec de nombreux
          fournisseurs de film covering afin de vous proposer un large panel de
          couleurs et de finitions.
        </p>
      </div>
    </Layout>
  );
}
