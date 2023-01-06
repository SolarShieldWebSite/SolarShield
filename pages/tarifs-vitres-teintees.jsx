import Layout from "../components/Layout";
import PriceCard from "../components/PriceCard";
import { priceGrid } from "../content/prix/content";
import styles from "../styles/tarifs.module.scss";
import Head from "next/head";
import Link from "next/link";

export default function Tarifs() {
  return (
    <Layout param="price_page">
      <Head>
        <title>Tarifs vitres teintées à Angers - SolarShield Angers</title>
        <meta
          name="description"
          content="Tarifs des prestations proposées à l'atelier à Angers : Vitres teintées, feux teintés, covering, déchromage"
        />
        <meta
          name="keywords"
          content="VITRES TEINT&Eacute;ES PAS CHER, PRIX COVERING, PRIX VITRES TEINT&Eacute;ES, PRIX FEUX TEINT&Eacute;S, PRIX D&Eacute;CHROMAGE, PRIX VITRES TEINT&Eacute;ES TESLA, FILM TEINT&Eacute; PAS CHER"
        />
        <meta
          property="og:title"
          content="Tarifs vitres teintées à Angers - SolarShield Angers"
        />
        <meta
          property="og:description"
          content="Tarifs des prestations proposées à l'atelier à Angers : Vitres teintées, feux teintés, covering, déchromage"
        />
        <meta property="og:url" content="https://solarshield.fr/tarifs" />
      </Head>
      <h1 className="big_title big_title_light">Tarifs *</h1>
      <div className={styles.tarifs}>
        <p className={styles.text}>
          Chez <strong>SolarShield©</strong>, la protection des occupents de
          votre véhicule est primordiale. Tous nos{" "}
          <strong>films teintés</strong> sont <strong>métallisés</strong> et{" "}
          <strong>anti-effraction</strong>, afin de garantir une{" "}
          <strong>température optimale durant les fortes chaleurs</strong>. Nos{" "}
          <strong>films solaire</strong> vous{" "}
          <strong>protègent des regards indiscrets</strong>, et retardent
          considérablement la durée de pénétration dans le véhicule. En cas
          d&apos;accident, nos films{" "}
          <strong>évitent les dommages corporels</strong> lié à l&apos;explosion
          du verre. Nous <strong>garantissons</strong> la pose sur une durée de{" "}
          <strong>10 ans</strong>.
        </p>
        <p className={styles.text}>
          Le choix de la teinte n&apos;influe pas sur le tarif. Cinq teintes de
          films sont disponibles à l&apos;atelier. Les teintes sont calculées en{" "}
          <strong>TLV</strong> (Transmission de Lumière Visible),5 % de TLV, 20
          % de TLV, 35 % de TLV, 50 % de TLV, et la teinte légale transparente
          (pour les vitres avant). Temps de pose d&apos;environ 1h30.
        </p>

        <p className={styles.text}>
          Si vous souhaitez une protection sur les vitres avant, nous appliquons
          un film transparent <strong>anti-effraction</strong> et{" "}
          <strong>légal</strong>.
        </p>
        <br />
        <br />
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
      </div>
    </Layout>
  );
}
