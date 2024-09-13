import styles from "./Footer.module.css";
import Pow from "../../Assets/dogpaw.svg?react";

export default function Footer() {
  return (
    <footer className={styles.footer}>
      <Pow />
      <p>Dogs. Alguns direitos reservados.</p>
    </footer>
  );
}
