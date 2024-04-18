import styles from "./Cards.module.css";
import img from "../../../assets/images/Mask Group (1).jpg";

const Cards = ({ text, color, big }) => {
  const cardClassName = big ? `${styles.big} ${styles.card}` : styles.card;
  return (
    <div
      className={cardClassName}
      style={color ? { backgroundColor: color } : { backgroundImage: `url(${img})` }}
    >
      <p className={styles.line}></p>
      <p className={big ? `${styles.bigText} ${styles.cardText}` : styles.cardText}>
        {text}
      </p>
    </div>
  );
};

export default Cards;
