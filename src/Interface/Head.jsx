import { useEffect } from "react";

export default function head(props) {
  useEffect(()=> {
    document.title
  }, [props])

}