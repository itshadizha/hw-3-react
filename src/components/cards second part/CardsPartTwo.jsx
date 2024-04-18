import Cards from "../UI/cards/Cards";
import styles from "./CardsPartTwo.module.css";
import img from "../../assets/images/Mask Group (1).jpg";

const CardsPartTwo = () => {
  return (
    <div className={styles.CardsPartTwo}>
      <Cards text="Physical Health" color="#22356F" big={true} />
      <Cards text="Mental Health" color="#0052C1" big={true} />
      {/* <Cards text="Nutrition" big={true} />  */}
      <img className={styles.img} src={img} />
      <p className={styles.line}></p>

      <p className={styles.text}>Nutrition</p>

      <Cards text="Gymnastics" color="#62D0DF" big={true} />
      <Cards text="Crossfit" color="#DEE1FF" big={true} />
      <Cards text="Aerobics" color="#8F00FF" big={true} />
    </div>
  );
};

export default CardsPartTwo;
