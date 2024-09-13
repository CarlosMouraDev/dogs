import { useState } from "react";
import Enviar from "../../Assets/env.svg?react";
import useFetch from "../../Hooks/useFetch";
import { COMMENT_POST } from "../../Api/api";
import Error from "../../Interface/Error"
import styles from './PhotoCommentsForm.module.css';

export default function PhotoCommentsForm({ id, setComments, single }) {
  const {req, error} = useFetch()
  const [comment, setComment] = useState("");

  async function handleSubmit(event) {
    event.preventDefault()
    const {url, options} = COMMENT_POST(id, {comment})
    const {res, json} = await req(url, options)
    if(res.ok) {
      setComment('')
      setComments((comments) => [...comments, json])
    }
  }
  return (
    <form className={`${styles.form} ${single ? styles.single : ''}`} onSubmit={handleSubmit}>
      <textarea
      className={styles.textarea}
      id="comment"
      name="comment"
      placeholder="Comente algo legal :D"
        value={comment}
        onChange={({ target }) => setComment(target.value)}
      />
      <button className={styles.button}>
        <Enviar />
      </button>
      <Error error={error}/>
    </form>
  );
}
