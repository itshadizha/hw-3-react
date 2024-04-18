import ReachUS from "../UI/reach us/ReachUS";
import styles from "./SectionSixth.module.css";
import img from "../../assets/images/linkedin-sales-navigator-402831.jpg";
import Help from "../UI/help/Help";

const SectionSixth = () => {
  return (
    <div className={styles.sectionSixth}>
      <img src={img} />
      <div className={styles.sectionSixthRight}>
        <p style={{color:"rgba(34, 53, 111, 1)"}}>YOU SHOULD ALSO KNOW</p>
        <div className={styles.sectionSixthText}>
          MDD affects more than 16.1 million American adults, or about 6.7%of
          the U.S. population age 18 and older in a given year. We at <span className={styles.logo}>ThriveTalk</span>
          can help you.
        </div>
        <Help color="#FAB63E"/>
      </div>
    </div>
  );
};

export default SectionSixth;
