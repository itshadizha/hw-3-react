import ReachUS from "../UI/reach us/ReachUS";
import Description from "../UI/description/Description";
import styles from "./SectionThird.module.css";

const SectionThird = () => {
  return (
    <div className={styles.sectionThird}>
      <div>
      <ReachUS text="ABOUT US" />

      </div>
      <div className={styles.secondPart}>
        <Description variant={"descVariant2"}>
          We want to help you thrive! Whether you are just looking for someone
          to talk to, or are struggling with a mental wellness issue we’re here
          to help. Our highly talented therapists can help you with a range of
          issues including relationships, sex, PTSD, depression, social anxiety,
          or even just caring for yourself more.
        </Description>
        <ReachUS className={styles.help} text="WE CAN HELP YOU WITH" />
      </div>
    </div>
  );
};

export default SectionThird;
