import Logo from "../UI/Logo";
import Button from "../UI/button/Button";
import Menu from "../menu/Menu";
import styles from "./Header.module.css";

const Header = () => {
  return (
    <header className={styles.header}>
      <Logo />
      <Menu />
      <Button variant={"contact"}>CONTACT US</Button>
    </header>
  );
};

export default Header;
