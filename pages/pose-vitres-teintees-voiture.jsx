import Layout from "../components/Layout";
import styles from "../styles/vitres.module.scss";
import { content } from "../content/vitres/content";
import Hilights from "../components/Hilights";
import PriceCard from "../components/PriceCard";
import { priceGrid } from "../content/prix/content";
import GallerySwiper from "../components/GallerySwiper";
import { lightData } from "../content/gallery/feux";
import { glassData } from "../content/gallery/glass";
import Head from "next/head";
import Link from "next/link";
import ReviewBox from "../components/ReviewBox";
import { vitreReviews } from "../content/reviews/vitre-reviews";

export default function Vitres() {
  const data = [...glassData, ...lightData];
  return (
    <Layout param="glass_page">
      <Head>
        <title>Pose de vitres teintées à Angers - SolarShield</title>
        <meta
          name="description"
          content="Spécialiste dans la pose de vitres teintées à Angers - film protection solaire et anti-effraction - Prestations proposées à l'atelier : Covering, feux teintés, déchromage"
        />
        <meta
          name="keywords"
          content="FILM PROTECTION SOLAIRE, POSE VITRES TEINT&Eacute;ES, VITRES TEINT&Eacute;ES VOITURE, POSE FILM TEINT&Eacute; VOITURE, VITRES TEINT&Eacute;ES ANGERS, FILM TEINT&Eacute; ANTI-EFFRACTION"
        />
        <meta
          property="og:title"
          content="Pose de vitres teintées à Angers - SolarShield"
        />
        <meta
          property="og:description"
          content="Spécialiste dans la pose de vitres teintées à Angers - film protection solaire et anti-effraction - Prestations proposées à l'atelier : Covering, feux teintés, déchromage"
        />
        <meta property="og:url" content="https://solarshield.fr/vitres" />
      </Head>
      <h1 className="big_title big_title_light">Vitres teintées</h1>
      <section className={styles.hilights}>
        {content.map((object, index) => (
          <Hilights
            key={index}
            src={object.src}
            alt={object.alt}
            text={object.text}
            title={object.title}
          />
        ))}
      </section>

      {/* VIDEO */}

      <div className={styles.parallaxVideo}>
        <video autoPlay muted loop playsInline>
          <source src="/videos/VT.mp4" type="video/mp4" />
        </video>
      </div>

      {/* <div className={styles.parallax}></div> */}
      {/* VIDEO */}
      <section className={styles.prices}>
        <h1 className="big_title big_title_light">Tarifs *</h1>
        <p className={styles.text}>
          Chez <strong>SolarShield©</strong>, la protection des occupants de
          votre véhicule est primordiale. Tous nos films teintés sont métallisés
          et <strong>anti-effraction</strong>, afin de garantir une température
          optimale au sein de l&apos;habitacle durant les fortes chaleurs. Nos
          films solaires vous protègent des regards indiscrets, et retardent
          considérablement la durée de pénétration dans le véhicule.
        </p>
        <p className={styles.text}>
          En cas d&apos;accident, nos films teintés évitent les dommages
          corporels lié à l&apos;explosion du verre.{" "}
          <strong>Le choix de la teinte n&apos;influe pas sur le tarif</strong>.
          Cinq teintes de films sont disponibles à l&apos;atelier.
        </p>
        <p className={styles.text}>
          Les teintes sont calculées en TLV (Transmission de Lumière Visible),
          <strong>5 % </strong>de TLV, <strong>20 %</strong> de TLV,{" "}
          <strong>35 %</strong> de TLV, <strong>50 % </strong>de TLV, et la
          teinte légale transparente (pour les vitres avant).
        </p>
        <p className={styles.text}>
          Temps de pose d&apos;environ <strong>1h30</strong>.{" "}
        </p>
        <p className={styles.text}>
          Si vous souhaitez une protection sur les vitres avant, nous appliquons
          un film transparent <strong>anti-effraction</strong> et légal. Nous
          garantissons la pose sur une durée de <strong>10 ans</strong>.
        </p>
        <div className={styles.price_grid}>
          {priceGrid.map((object, index) => (
            <a key={index} href="https://rdv.solarshield.fr/">
              <PriceCard
                src={object.src}
                sub={object.sub}
                price={object.price}
              />
            </a>
          ))}
        </div>
        <p className={styles.text}>
          * les véhicules avec une côte à l&apos;argus au dessus de 80 000€ sont
          soumis à un devis sur mesure, merci de nous contacter.
        </p>
        <p className={styles.text}>
          * les véhicules d&apos;années de production avant 1998 sont soumis à
          un devis sur mesure, merci de nous contacter.
        </p>
        <p className={styles.text}>
          Poursuivez la personnalisation de votre véhicule grâce à la pose de{" "}
          <Link href="/covering-voiture" passHref>
            <a>covering</a>
          </Link>{" "}
          chez SolarShield.
        </p>
      </section>
      <section className={styles.gallery}>
        <h1 className="big_title big_title_light">
          Nos
          <br />
          réalisations
        </h1>
        <div>
          <GallerySwiper data={data} />
        </div>
      </section>
      <section className={styles.gallery}>
        <h1 className="big_title big_title_light">
          Ils nous ont fait confiance
        </h1>
        <ReviewBox reviews={vitreReviews} />
      </section>
    </Layout>
  );
}
