import { PHOTO_DELETE } from "../../Api/api";
import useFetch from "../../Hooks/useFetch";
import styles from "./PhotoDelete.module.css";

export default function PhotoDelete({ id }) {
  const { loading, req } = useFetch();

  async function handleClick() {
    const confirm = window.confirm("Tem certeza que quer deletar essa foto?");
    if (confirm) {
      const { url, options } = PHOTO_DELETE(id);
      const { res } = await req(url, options);
      if (res.ok) window.location.reload();
    }
  }

  // A foto só poderá ser deletada caso o user logado seja o dono do post
  return (
    <>
      {loading ? (
        <button disabled className={styles.delete}>
          Deletar
        </button>
      ) : (
        <button onClick={handleClick} className={styles.delete}>
          Deletar
        </button>
      )}
    </>
  );
}
