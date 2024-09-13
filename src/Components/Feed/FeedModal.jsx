import { useEffect } from "react";
import useFetch from "../../Hooks/useFetch";
import styles from "./FeedModal.module.css";
import { PHOTO_GET } from "../../Api/api";
import Error from "../../Interface/Error";
import Loading from "../../Interface/Loading";
import PhotoContent from "../Photo/PhotoContent";

export default function FeedModal({ photo, setModalPhoto }) {
  const { data, error, loading, req } = useFetch();

  useEffect(() => {
    const { url, options } = PHOTO_GET(photo.id);
    req(url, options);
  }, [photo, req]);

  // Sai da tela que mostra a foto com detalhes ao clicar fora
  function handleOutsideClick(event) {
    if (event.target === event.currentTarget) {
      setModalPhoto(null);
    }
  }

  return (
    <div className={styles.modal} onClick={handleOutsideClick}>
      {error && <Error error={error} />}
      {loading && <Loading />}
      {data && <PhotoContent data={data} />}
    </div>
  );
}
