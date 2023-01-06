import styles from "./PriceCard.module.scss";

export default function PriceCard(props) {
  return (
    <article className={styles.card}>
      <div className={styles.right}>
        {props.src.map((src, index) => (
          <div key={index} className={styles.logo}>
            <img src={src} width={200} height={100} alt={props.sub[index]} />
            <p>{props.sub[index]}</p>
          </div>
        ))}
      </div>

      <p className={styles.price}>{props.price}€</p>
    </article>
  );
}
