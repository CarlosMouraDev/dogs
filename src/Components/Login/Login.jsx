import { Route, Routes, useNavigate } from "react-router-dom";
import LoginForm from "./LoginForm";
import LoginCreate from "./LoginCreate";
import LoginPasswordLost from "./LoginPasswordLost";
import LoginPasswordReset from "./LoginPasswordReset";
import { useContext, useEffect } from "react";
import { UserContext } from "../../Contexts/UserContext";
import styles from "./Login.module.css";
import NotFound from "../../Interface/NotFound";

export default function Login() {
  const { login } = useContext(UserContext);
  const navigate = useNavigate()

  useEffect(() => {
    if (login === true) {
      navigate('/conta');
    }
  }, [login, navigate]);


  return (
    <section className={styles.login}>
      <div className={styles.forms}>
        <Routes>
          <Route path="/" element={<LoginForm />} />
          <Route path="criar" element={<LoginCreate />} />
          <Route path="perdeu" element={<LoginPasswordLost />} />
          <Route path="resetar" element={<LoginPasswordReset />} />
          <Route path="*" element={<NotFound />} />
        </Routes>
      </div>
    </section>
  );
}
