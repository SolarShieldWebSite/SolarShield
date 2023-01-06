import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faFacebook, faInstagram } from "@fortawesome/free-brands-svg-icons";
import styles from "./Socials.module.scss";
import Link from "next/link";

export default function Socials() {
  return (
    <div className={styles.socials}>
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
  );
}
