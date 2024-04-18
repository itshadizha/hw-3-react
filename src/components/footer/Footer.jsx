import styles from "./Footer.module.css";
import img from "../../assets/images/autumn-goodman-242825.png";
import Info from "../UI/info/Info";

const Footer = () => {
  return (
    <div className={styles.footer}>
      <img src={img} alt="" />
      <div className={styles.footerRight}>
        <Info
          title="SOME INFO"
          subtitle="Lorem ipsum dolor sit amet, consectetuer adipiscing ."
        />

        <Info 
          title="ENFOLD HEALTH"
          subtitle="Main Street 1, Olcott
         Buffalo, United States
         
         +555 283 784 333
         office@enfold-health.com"
        />

        <Info
          title="OFFICE HOURS"
          subtitle="Mo-Fr: 8:00-19:00
          Sa: 8:00-14:00
          Su: closed"
        />
      </div>
    </div>
  );
};

export default Footer;
