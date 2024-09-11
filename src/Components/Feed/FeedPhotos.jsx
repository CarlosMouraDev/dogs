import FeedPhotosItem from "./FeedPhotosItem";
import useFetch from "../../Hooks/useFetch";
import { useEffect } from "react";
import { PHOTOS_GET } from "../../Api/api";
import Error from "../../Interface/Error";
import Loading from "../../Interface/Loading";
import styles from "./FeedPhotos.module.css"

export default function FeedPhotos({setModalPhoto}) {
  const { data, loading, error, req } = useFetch();

  useEffect(() => {
    async function fetchPhotos() {
      const { url, options } = PHOTOS_GET({ page: 1, total: 6, user: 0 });
      const { res, json } = await req(url, options);
      console.log(json);
    }
    fetchPhotos();
  }, [req]);

  if (error) return <Error error={error} />;
  if (loading) return <Loading />;
  if (data) {
    return (
      <div>
        <ul className={`${styles.feed} animeLeft`}>
          {data.map((photo) => (
            <FeedPhotosItem key={photo.id} photo={photo} setModalPhoto={setModalPhoto}/>
          ))}
        </ul>
      </div>
    );
  } else {
    return null;
  }
}
