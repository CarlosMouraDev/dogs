import { useEffect } from "react";

export default function head(props) {
  useEffect(()=> {
    document.title = props.title + ' | Dogs'
    document.querySelector("meta[name='description']")
    .setAttribute('content', props.description || '')
  }, [props])

}