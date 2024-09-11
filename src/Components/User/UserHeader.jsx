import UserHeaderNav from "./UserHeaderNav";
import styles from "./UserHeader.module.css";
import { useLocation } from "react-router-dom";
import { useEffect, useState } from "react";

export default function UserHeader() {
  const [title, setTitle] = useState("");
  const location = useLocation();

  useEffect(() => {
    const { pathname } = location;
    switch (pathname) {
      case "/conta/postar":
        setTitle("Postar Foto");
        break;
      case "/conta/estatisticas":
        setTitle("Estatísticas");
        break;
      case "/conta":
        setTitle("Minha conta");
        break;
      default:
        break;
    }
  }, [location]);

  return (
    <header className={styles.header}>
      <h1 className="title">{title}</h1>
      <UserHeaderNav />
    </header>
  );
}
