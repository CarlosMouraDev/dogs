import { useContext } from "react";
import { USER_POST } from "../../Api/api";
import useForm from "../../Hooks/useForm";
import Button from "../Forms/Button";
import Input from "../Forms/Input";
import { UserContext } from "../../Contexts/UserContext";
import useFetch from "../../Hooks/useFetch";
import Error from "../../Interface/Error";
import Head from "../../Interface/Head";

export default function LoginCreate() {
  const username = useForm("min");
  const email = useForm("email");
  const password = useForm();

  const { userLogin } = useContext(UserContext);
  const { loading, error, req } = useFetch();

  async function handleSubmit(event) {
    event.preventDefault();
    const { url, options } = USER_POST({
      username: username.value,
      email: email.value,
      password: password.value,
    });
    const { res } = await req(url, options);
    if (res.ok) userLogin(username.value, password.value);
  }

  return (
    <section className="animeLeft">
      <Head title="Crie sua conta" />
      <h1 className="title">Cadastre-se</h1>
      <form onSubmit={handleSubmit}>
        <Input label="Usuário" type="text" name="username" {...username} />
        <Input label="Email" type="email" name="email" {...email} />
        <Input label="Senha" type="password" name="password" {...password} />
        {loading ? (
          <Button disabled>Cadastrando...</Button>
        ) : (
          <Button>Cadastrar</Button>
        )}
        <Error error={error} />
      </form>
    </section>
  );
}
