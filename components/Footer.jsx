import Link from "next/link";
import styles from "./Footer.module.scss";
import { useContext } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faAngleRight } from "@fortawesome/free-solid-svg-icons";
import { SolarShieldContext } from "../context/AppContext";
import { footerContent } from "../content/footer/content";

export default function Footer(props) {
  const context = useContext(SolarShieldContext);
  const handleFooterContent = context.footerSwitch;
  console.log(props.param);
  return (
    <>
      <div className={styles.top_section}>
        <img src="/logo_white.svg" alt="logo" width={150} height={100} />
        <p>
          L&apos;atelier, basé à Angers, est ouvert du Mardi au Samedi de 9h à
          18h30.
          <br /> Temps de pose des vitres teintées : environ 1H30.
          Caractéristiques : film solaire anti-effraction, film teinté anti-uv,
          la pose de vitres teintées conservent des températures agréables au
          sein de votre véhicule et protègent également votre anonymat.
        </p>
      </div>

      <div className={styles.footer_content}>
        <div
          className={`${styles.nav_section} ${
            props.covering ? styles.nav_section_dark : styles.nav_section_light
          }`}
        >
          <h4
            className={`small_title ${
              props.covering ? "small_title_dark" : "small_title_light"
            }`}
          >
            Liens utiles
          </h4>
          <nav>
            <ul>
              <li>
                <i>
                  <FontAwesomeIcon icon={faAngleRight} />
                </i>
                <Link href="/">
                  <a>Accueil</a>
                </Link>
              </li>
              <li>
                <i>
                  <FontAwesomeIcon icon={faAngleRight} />
                </i>
                <Link href="/pose-vitres-teintees-voiture">
                  <a>Vitres teintées - feux teintés</a>
                </Link>
              </li>
              <li>
                <i>
                  <FontAwesomeIcon icon={faAngleRight} />
                </i>
                <Link href="/covering-voiture">
                  <a>Covering - déchromage</a>
                </Link>
              </li>
              <li>
                <i>
                  <FontAwesomeIcon icon={faAngleRight} />
                </i>
                <Link href="/vitres-teintees-tesla">
                  <a>Tesla</a>
                </Link>
              </li>
              <li>
                <i>
                  <FontAwesomeIcon icon={faAngleRight} />
                </i>
                <Link href="/tarifs-vitres-teintees">
                  <a>Tarifs</a>
                </Link>
              </li>
              <li>
                <i>
                  <FontAwesomeIcon icon={faAngleRight} />
                </i>
                <Link href="/contact">
                  <a>Contact</a>
                </Link>
              </li>
            </ul>
          </nav>
        </div>
        <div className={styles.adress_section}>
          <div>
            <h4
              className={`small_title ${
                props.covering ? "small_title_dark" : "small_title_light"
              }`}
            >
              A propos
            </h4>
            <p>{handleFooterContent(props.param, footerContent)}</p>
          </div>
          <div>
            <h4
              className={`small_title ${
                props.covering ? "small_title_dark" : "small_title_light"
              }`}
            >
              Solar Shield
            </h4>
            <p>
              Chemin du Bocage <br />
              ZI de la Violette 49240 AVRILLE <br />
              France
            </p>
            <p>
              <strong>Email: </strong> contact.solarshield@gmail.com
            </p>
          </div>
        </div>
      </div>
    </>
  );
}
