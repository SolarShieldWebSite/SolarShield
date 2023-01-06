import Link from "next/link";
import { useContext } from "react";
import { SolarShieldContext } from "../context/AppContext";
import Hamburger from "./Hamburger";
import styles from "./HamburgerMenu.module.scss";
import Delayed from "./Delayed";

export default function HamburgerMenu() {
  const context = useContext(SolarShieldContext);

  return (
    <div
      className={`${styles.menu} ${
        context.state.isToggle ? styles.active : ""
      }`}
    >
      <div className={styles.toggle} onClick={context.handleToggle}>
        <Hamburger />
      </div>
      <div className={styles.nav_background}></div>
      {context.state.isToggle ? (
        <Delayed>
          <nav className={styles.nav}>
            <ul>
              <li onClick={context.handleToggle}>
                <Link href="/">
                  <a>Accueil</a>
                </Link>
              </li>
              <li onClick={context.handleToggle}>
                <Link href="/pose-vitres-teintees-voiture">
                  <a>Vitres teintées - feux teintés</a>
                </Link>
              </li>
              <li onClick={context.handleToggle}>
                <Link href="/covering-voiture">
                  <a>Covering - déchromage</a>
                </Link>
              </li>
              <li onClick={context.handleToggle}>
                <Link href="/vitres-teintees-tesla">
                  <a>Tesla</a>
                </Link>
              </li>
              <li onClick={context.handleToggle}>
                <Link href="/tarifs-vitres-teintees">
                  <a>Tarifs</a>
                </Link>
              </li>
              <li onClick={context.handleToggle}>
                <Link href="/contact">
                  <a>Contact</a>
                </Link>
              </li>
            </ul>
          </nav>
        </Delayed>
      ) : null}
    </div>
  );
}
