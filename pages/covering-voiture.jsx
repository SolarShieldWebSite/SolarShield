import GallerySwiper from "../components/GallerySwiper";
import Layout from "../components/Layout";
import styles from "../styles/covering.module.scss";
import Head from "next/head";
import { coveringData } from "../content/gallery/covering";
import ReactJotformEmbed from "react-jotform-embed";
import Link from "next/link";
import ReviewBox from "../components/ReviewBox";
import { coveringReviews } from "../content/reviews/covering-reviews";

export default function Covering() {
  return (
    <Layout param="covering_page" covering>
      <Head>
        <title>Pose de covering voiture à Angers - SolarShield</title>
        <meta
          name="description"
          content="Pose de covering à Angers - Prestations proposées à l’atelier : déchromage, vitres teintées, feux teintés"
        />
        <meta
          name="keywords"
          content="COVERING VOITURE, POSE COVERING ANGERS, POSE COVERING VOITURE"
        />
        <meta
          property="og:title"
          content="Pose de covering voiture à Angers - SolarShield"
        />
        <meta
          property="og:description"
          content="Pose de covering à Angers - Prestations proposées à l’atelier : déchromage, vitres teintées, feux teintés"
        />
        <meta property="og:url" content="https://solarshield.fr/covering" />
      </Head>
      <h1 className="big_title big_title_dark">Covering - déchromage</h1>
      <div className={styles.text_block}>
        <p className={styles.text}>
          Modifiez l&apos;aspect esthétique de votre voiture avec le{" "}
          <strong>covering</strong>. Choisissez parmi un grand nombre de{" "}
          <strong>coloris</strong> et de <strong>matières</strong> en passant
          par le <strong>brillant</strong>, le <strong>mat</strong> ou le{" "}
          <strong>satiné</strong>.
        </p>
      </div>
      <section>
        <GallerySwiper data={coveringData} />
      </section>
      <div className={styles.text_block}>
        <p className={styles.text}>
          Nous travaillons avec plusieurs marques comme <strong>3M</strong>,{" "}
          <strong>Avery</strong>, <strong>Arlon</strong> ou encore{" "}
          <strong>Oracal</strong> afin de vous proposer une qualité optimale.
        </p>
        <p className={styles.text}>
          Nous proposons un <strong>recouvrement complet</strong> de votre
          voiture ou un{" "}
          <strong>covering partiel : déchromage, toit noir</strong> ou des
          éléments comme les <strong>rétroviseurs</strong>. Laissez libre cours
          à votre imagination et soumettez nous votre idée. Nous travaillons
          d&apos;abord votre projet de façon virtuelle avant validation de votre
          part.
        </p>
        <p className={styles.text}>
          Pensez également à la{" "}
          <Link href="/pose-vitres-teintees-voiture" passHref>
            <a>pose de vitres teintées</a>
          </Link>{" "}
          anti-uv et anti-effraction disponible dans notre atelier.
        </p>
        <h2 className="big_title big_title_dark">Demande de devis</h2>
        <p className={styles.text}>
          Expliquez-nous votre projet covering, nous vous recontacterons dans
          les plus brefs délais.
        </p>
      </div>
      <section>
        <ReactJotformEmbed src="https://form.jotform.com/221226307977358" />
      </section>
      <section>
        <h2 className="big_title big_title_dark">
          Ils nous ont fait confiance
        </h2>
        <ReviewBox reviews={coveringReviews} dark />
      </section>
    </Layout>
  );
}
