import Link from "next/link";
import styles from "./DesktopMenu.module.scss";

export default function DesktopMenu() {
  return (
    <>
      <ul className={styles.desktop_nav}>
        <li>
          <Link href="/">
            <a className={styles.menu_items}>Accueil</a>
          </Link>
        </li>
        <li>
          <Link href="/pose-vitres-teintees-voiture">
            <a className={styles.menu_items}>Vitres teintées - feux teintés</a>
          </Link>
        </li>
        <li>
          <Link href="/covering-voiture">
            <a className={styles.menu_items}>Covering - déchromage</a>
          </Link>
        </li>
        <li>
          <Link href="/vitres-teintees-tesla">
            <a className={styles.menu_items}>Tesla</a>
          </Link>
        </li>
        <li>
          <Link href="/tarifs-vitres-teintees">
            <a className={styles.menu_items}>Tarifs</a>
          </Link>
        </li>
        <li>
          <Link href="/contact">
            <a className={styles.menu_items}>Contact</a>
          </Link>
        </li>
      </ul>
    </>
  );
}
