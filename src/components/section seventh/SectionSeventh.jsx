import styles from "./SectionSeventh.module.css";
import img from "../../assets/images/charles-etoroma-390119.jpg";
import Help from "../UI/help/Help";
const SectionSeventh = () => {
  return (
    <div className={styles.sectionSeventh}>
      <div className={styles.sectionSeventhLeft}>
        <p className={styles.contact}>CONTACT US</p>
        <p className={styles.verbs}>Ready. Set. Smile</p>
        <p className={styles.text}>Take the free online assessment to see if you are a candidate and get started on your journey.</p>
        <Help color="#62D0DF"/>
      </div>
      <img style={{margin:"0"}} src={img} alt="" />
    </div>
  );
};

export default SectionSeventh;
