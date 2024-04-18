import Button from "../button/Button";
import Description from "../description/Description";
import styles from "./Intro.module.css";

const Intro = ({ variant, title, subtitle }) => {
  return (
    <div
      className={variant ? `${styles.intro} ${styles.secondUse}` : styles.intro}
    >
      <p className={styles.title}>{title}</p>
      <Description>{subtitle}</Description>
      {/* <p className={styles.subtitle}>{subtitle}</p> */}
      <div className={styles.remain}>
        <Button variant={"whoAmI"}>WHO AM I</Button>
        <p className={styles.question}>WHAT DO I DO</p>
      </div>
    </div>
  );
};

export default Intro;
