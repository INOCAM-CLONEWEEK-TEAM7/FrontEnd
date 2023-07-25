import { useState } from "react";

const useValidateInput = (type, automatic=true) => {
  const pattern =
    type === "email" ? /^[a-zA-Z0-9._-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/ : type === "password" ? /^.{8,}$/ : /^.{1,}$/;

  const [inputValue, setInputValue] = useState("");
  const [valid, setValid] = useState(true);


  const inputOnChangeHandler = (automatic?
    e => {
      setInputValue(e.target.value);
      setValid(pattern.test(e.target.value));
    }
    :
    e => {
      setInputValue(e.target.value);
    }
  );

  const isValid = () => pattern.test(inputValue);

  const validate = () => {
    setValid(pattern.test(inputValue));
    return pattern.test(inputValue);
  }

  return [inputValue, inputOnChangeHandler, automatic? valid : isValid, setValid, validate];
};

export default useValidateInput;
