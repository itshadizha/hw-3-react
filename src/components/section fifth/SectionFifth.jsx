import styles from "./SectionFifth.module.css";
import CardsTypeTwo from "../UI/cards type two/CardsTypeTwo";

const data = [
  {
    title: "Nutritional Plans",
    subtitle:
      "Nutritional Facts on some shitty things that you don’t care about and even we don’t , I need to replace this copy.",
  },
  {
    title: "Weight Loss",
    subtitle:
      "Nutritional Facts on some shitty things that you don’t care about and even we don’t , I need to replace this copy.",
  },
  {
    title: "Mental Peace",
    subtitle:
      "Nutritional Facts on some shitty things that you don’t care about and even we don’t , I need to replace this copy.",
  },
  {
    title: "Home Training",
    subtitle:
      "Nutritional Facts on some shitty things that you don’t care about and even we don’t , I need to replace this copy.",
  },
  {
    title: "Work/Life Balance",
    subtitle:
      "Nutritional Facts on some shitty things that you don’t care about and even we don’t , I need to replace this copy.",
  },
  {
    title: "Cardio",
    subtitle:
      "Nutritional Facts on some shitty things that you don’t care about and even we don’t , I need to replace this copy.",
  },
];

function SectionFifth() {
  return (
    <div className={styles.SectionFifth} >
      <CardsTypeTwo  items={data} />
    </div>
  );
}

export default SectionFifth;
