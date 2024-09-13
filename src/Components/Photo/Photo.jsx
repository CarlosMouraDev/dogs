import { useParams } from "react-router-dom";
import useFetch from "../../Hooks/useFetch";
import { useEffect } from "react";
import { PHOTO_GET } from "../../Api/api";
import Error from "../../Interface/Error";
import Loading from "../../Interface/Loading";
import PhotoContent from "./PhotoContent";
import Head from "../../Interface/Head";

export default function Photo() {
  const { id } = useParams();
  const { data, loading, error, req } = useFetch();
  useEffect(() => {
    const { url, options } = PHOTO_GET(id);
    req(url, options);
  }, [req, id]);

  if (error) return <Error error={error} />;
  if (loading) return <Loading />;
  if (data) {
    return (
      <section className="container mainContainer">
        <Head title={data.photo.title} />
        <PhotoContent single={true} data={data} />
      </section>
    );
  } else return null;
}
