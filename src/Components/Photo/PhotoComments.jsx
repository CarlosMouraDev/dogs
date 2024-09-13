import { useContext, useEffect, useRef, useState } from "react";
import styles from "./PhotoComments.module.css";
import { UserContext } from "../../Contexts/UserContext";
import PhotoCommentsForm from "./PhotoCommentsForm";

export default function PhotoComments(props) {
  const commentSection = useRef(null)
  const [comments, setComments] = useState(() => props.comments);
  const { login } = useContext(UserContext);

  //Faz os comentários mais recentes serem exibidos primeiro
  useEffect(() => {
    commentSection.current.scrollTop = commentSection.current.scrollHeight
  }, [comments])

  return (
    <>
      <ul ref={commentSection} className={`${styles.comments} ${props.single ? styles.single : ''}`}>
        {comments.map((comment) => (
          <li key={comment.comment_ID}>
            <b>{comment.comment_author}: </b>
            <span>{comment.comment_content}</span>
          </li>
        ))}
      </ul>
      {/* O usuário só verá o input de comentar caso esteja logado */}
      {login && <PhotoCommentsForm id={props.id} single={props.single} setComments={setComments}/>}
    </>
  );
}
