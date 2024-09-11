import { useEffect } from "react"
import useFetch from "../../Hooks/useFetch"
import styles from "./FeedModal.module.css"
import { PHOTO_GET } from "../../Api/api"
import Error from "../../Interface/Error"
import Loading from "../../Interface/Loading"
import PhotoContent from "../Photo/PhotoContent"

export default function FeedModal({photo}) {
  const { data, error, loading, req } = useFetch()

  useEffect(() => {
    const {url, options} = PHOTO_GET(photo.id)
    req(url, options)
  }, [photo, req])

  return <div className={styles.modal}>
    {error && <Error error={error}/>}
    {loading && <Loading/>}
    {data && <PhotoContent data={data}/>}
  </div>
}