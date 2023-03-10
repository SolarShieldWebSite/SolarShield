import styles from "./BottomCta.module.scss";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faPhone, faMapMarkerAlt } from "@fortawesome/free-solid-svg-icons";
import Link from "next/link";
import { useEffect, useRef } from "react";

export default function BottomCta(props) {
  const bottomCta = useRef(false);

  useEffect(() => {
    function handleCta() {
      let space =
        document.body.getBoundingClientRect().bottom - window.innerHeight;
      if (bottomCta.current && !props.home) {
        bottomCta.current.style.display = space <= 10 ? "none" : "flex";
      }
    }
    window.addEventListener("scroll", handleCta);
    return () => {
      window.removeEventListener("scroll", handleCta);
    };
  }, []);

  return (
    <div
      className={`${styles.cta_container} ${
        props.covering ? styles.cta_container_dark : styles.cta_container_light
      }`}
      ref={bottomCta}
    >
      <button
        className={`${styles.contact} ${
          props.covering ? styles.contact_dark : styles.contact_light
        }`}
      >
        <Link href="tel:0637352810" passHref>
          <i>
            <FontAwesomeIcon icon={faPhone} size="2x" />
          </i>
        </Link>
      </button>
      <Link href="https://rdv.solarshield.fr/" passHref>
        <button
          className={`${styles.rdv} ${
            props.covering ? styles.rdv_dark : styles.rdv_light
          }`}
        >
          Rendez-vous en ligne
        </button>
      </Link>
      <button
        className={`${styles.gps} ${
          props.covering ? styles.gps_dark : styles.gps_light
        }`}
      >
        <Link
          href="https://www.google.com/maps/search/?api=1&query=SolarShield"
          passHref
        >
          <i>
            <FontAwesomeIcon icon={faMapMarkerAlt} size="2x" />
          </i>
        </Link>
      </button>
    </div>
  );
}
