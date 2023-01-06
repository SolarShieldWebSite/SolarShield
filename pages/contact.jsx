import Layout from "../components/Layout";
import styles from "../styles/contact.module.scss";
import Head from "next/head";
import Link from "next/link";
import JotformEmbed from "react-jotform-embed";

export default function Contact() {
  return (
    <Layout param="contact_page">
      <Head>
        <title>Prise de contact - SolarShield Angers</title>
        <meta
          name="description"
          content="Contactez-nous pour toutes demandes de devis ou diverses demandes concernant la pose de vitres teintées, feux teintés, déchromage, covering"
        />
        <meta
          name="keywords"
          content="DEVIS COVERING, DEVIS D&Eacute;CHROMAGE, CONTACT VITRES TEINT&Eacute;ES, CONTACT FEUX TEINT&Eacute;S"
        />
        <meta
          property="og:title"
          content="Prise de contact - SolarShield Angers"
        />
        <meta
          property="og:description"
          content="Contactez-nous pour toutes demandes de devis ou diverses demandes concernant la pose de vitres teintées, feux teintés, déchromage, covering"
        />
        <meta property="og:url" content="https://solarshield.fr/contact" />
      </Head>
      <h1 className="big_title big_title_light">Contactez-nous</h1>
      <div className={styles.text_block}>
        <p className={styles.text}>
          Découvrez l&apos;ensemble de nos prestations :{" "}
          <Link href="/pose-vitres-teintees-voiture" passHref>
            <a>pose de vitres teintées</a>
          </Link>
          ,{" "}
          <Link href="/pose-vitres-teintees-voiture" passHref>
            <a>pose de feux teintés</a>
          </Link>
          ,{" "}
          <Link href="/covering-voiture" passHref>
            <a>déchromage</a>
          </Link>{" "}
          de votre véhicule ou{" "}
          <Link href="/covering-voiture" passHref>
            <a>covering</a>
          </Link>{" "}
          complet ou partiel.
        </p>
      </div>
      <JotformEmbed src="https://form.jotform.com/221225466226350" />
    </Layout>
  );
}
