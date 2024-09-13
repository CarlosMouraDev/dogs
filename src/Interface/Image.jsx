import { useState } from "react";
import styles from "./Image.module.css";

export default function Image({ alt, ...props }) {
  const [skeleton, setSkeleton] = useState();

  function handleLoop({ target }) {
    setSkeleton(false);
    target.style.opacity = 1;
  }

  return (
    <div className={styles.wrapper}>
      {skeleton && <div className={styles.skeleton}></div>}
      <img onLoad={handleLoop} className={styles.img} alt={alt} {...props} />
    </div>
  );
}
