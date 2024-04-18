import React from "react";
import Cards from "../UI/cards/Cards";
import styles from "./CardsPartOne.module.css";

const CardsPartOne = () => {
  return (
    <div className={styles.CardsPartOne}>
      <Cards text="Weight Lifting" color="#FFE2DE" />
      <Cards text="Running  & Spinning" color="#C4E769" />
      <Cards text="Pumping Iron" color="#62D0DF" />
      <Cards text="Pumping Iron" color="#0052C1" />
    </div>
  );
};

export default CardsPartOne;
