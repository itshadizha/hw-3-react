import styles from "./Menu.module.css";

const Menu = () => {
  return (
    <div>
      <ul className={styles.menu}>
        <li>Home</li>
        <li>About</li>
        <li>Services</li>
        <li>Blog</li>
      </ul>
    </div>
  );
};

export default Menu;
