import { useState } from "react";

const types = {
  email: {
    regex:
      /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|.(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/,
    message: "Preencha um email válido",
  },
  password: {
    regex:
      /^(?=.*[0-9])(?=.*[a-z])(?=.*[A-Z])([a-zA-Z0-9]{8})$/,
    message: "A senha precisa conter pelo menos 8 caracteres, que contenham um número, um caractere maiusculo e um caractere minusculo",
  },
  num: {
    regex: /^\d{1,3}$/,
    message: 'Valor inválido'
  },
  name: {
    regex: /^[A-Za-z]{1,10}$/,
    message: 'O nome deve conter no máximo 10 letras e somente letras.'
  },
  min: {
    regex: /^[A-Za-z]{8,}$/,
    message: 'O nome deve conter no minimo 8 letras'
  }
};

export default function useForm(type) {
  const [value, setValue] = useState("");
  const [error, setError] = useState("");

  function validate(value) {
    if (type === false) return true;
    if (value.length === 0) {
      setError("Preencha um valor");
      return false;
    } else if (types[type] && !types[type].regex.test(value)) {
      setError(types[type].message);
      return false;
    } else {
      setError(null);
      return true;
    }
  }

  function onChange({ target }) {
    if(error)validate(target.value)
    setValue(target.value);
  }
  return {
    value,
    setValue,
    onChange,
    error,
    validate: () => validate(value),
    onBlur: () => validate(value),
  };
}
