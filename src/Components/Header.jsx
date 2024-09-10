import { Link } from "react-router-dom";
import styles from "./Header.module.css";
import Dog from "../Assets/dogpaw.svg?react";
import { UserContext } from "../Contexts/UserContext";
import { useContext } from "react";

export default function Header() {
  const { data } = useContext(UserContext);

  return (
    <header className={styles.header}>
      <nav className={`${styles.nav} container`}>
        <Link className={styles.logo} to="/" aria-label="Dogs-Home">
          <Dog width="20px" />
        </Link>
        {data ? (
          <Link className={styles.login} to="/conta">
            {data.nome}
          </Link>
        ) : (
          <Link className={styles.login} to="/login">
            Login / Criar
          </Link>
        )}
      </nav>
    </header>
  );
}
