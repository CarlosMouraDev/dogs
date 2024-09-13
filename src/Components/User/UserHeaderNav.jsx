import { useContext, useEffect, useState } from "react";
import { NavLink, useLocation, useNavigate } from "react-router-dom";
import { UserContext } from "../../Contexts/UserContext";
import GaleriaSvg from "../../Assets/galeria.svg?react";
import Estatisticas from "../../Assets/statistics.svg?react";
import Adicionar from "../../Assets/add.svg?react";
import Sair from "../../Assets/sair.svg?react";
import styles from "./UserHeaderNav.module.css";
import useMedia from "../../Hooks/useMedia";

export default function UserHeaderNav() {
  const { userLogout } = useContext(UserContext);
  const navigate = useNavigate();
  const mobile = useMedia("(max-width: 40rem)");
  const [mobileMenu, setMobileMenu] = useState(false);

  const { pathname } = useLocation();
  useEffect(() => {
    setMobileMenu(false);
  }, [pathname]);

  function handleLogout() {
    userLogout();
    navigate("/login");
  }

  return (
    <>
      {mobile && (
        <button
          aria-label="Menu"
          className={`${styles.mobileButton} ${
            mobileMenu && styles.mobileButtonActive
          }`}
          onClick={() => setMobileMenu(!mobileMenu)}
        ></button>
      )}
      <nav
        className={`${mobile ? styles.navMobile : styles.nav} ${
          mobileMenu && styles.navMobileActive
        }`}
      >
        <NavLink to="/conta" onClick={() => setMobileMenu(false)} end>
          <GaleriaSvg />
          {mobile && "Minhas fotos"}
        </NavLink>
        <NavLink to="/conta/estatisticas" onClick={() => setMobileMenu(false)}>
          <Estatisticas />
          {mobile && "Estatísticas"}
        </NavLink>
        <NavLink to="/conta/postar" onClick={() => setMobileMenu(false)}>
          <Adicionar />
          {mobile && "Adicionar Foto"}
        </NavLink>
        <button onClick={handleLogout}>
          <Sair />
          {mobile && "Sair"}
        </button>
      </nav>
    </>
  );
}
