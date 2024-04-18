import React from "react";
import styles from "./SectionSecond.module.css";
import Description from "../UI/description/Description";
import secondPic from "../../assets/images/christopher-campbell-40367.jpg";

const SectionSecond = () => {
  return (
    <div className={styles.sectionSecond}>
      <div className={styles.first_part}>
        <p className={styles.whyUs}>Why Thrive?</p>
        <Description>
          Want to improve your well-being from the comfort of your own couch?
          Are you having trouble finding the right therapist? Here at
          ThriveTalk, our licensed therapists provide the same quality care you
          would get in office from anywhere you can access your laptop or mobile
          phone. Become your best self with ThriveTalk. Start therapy now with a
          licensed therapist!
        </Description>
      </div>

      <img className={styles.secondPic} src={secondPic} alt="" />
    </div>
  );
};

export default SectionSecond;
