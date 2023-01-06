import styles from "./Hilights.module.scss";

export default function Hilights(props) {
  return (
    <div className={styles.card_container}>
      <img src={props.src} width={210} height={130} alt={props.alt} />
      <h2>{props.title}</h2>
      <p>{props.text}</p>
    </div>
  );
}
