import rectangle from "../../assets/images/Rectangle 3.1.png";
import firstPic from "../../assets/images/Mask Group.png";
import styles from "./Content.module.css";
import Logo from "../UI/Logo";
import Intro from "../UI/intro/Intro";

const Content = () => {
  return (
    <div className={styles.content}>
      <Logo variant={"secondUse"} />
      <Intro
        title={"HELPING YOU THRIVE IN ALL AREAS OF LIFE"}
        subtitle={
          "Our highly talented therapists can help you with a range of issues including relationships, sex, PTSD, depression, social anxiety, or even just caring for yourself more."
        }
      />
      <img className={styles.rectangle} src={rectangle} alt="" />
      <img className={styles.firstPic} src={firstPic} alt="" />
    </div>
  );
};

export default Content;
