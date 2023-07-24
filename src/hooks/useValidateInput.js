import { useState } from 'react';

const useValidateInput = type => {
  const pattern =
    type === 'email' ? /^[a-zA-Z0-9._-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/ : type === 'password' ? /^.{8,}$/ : /^.{1,}$/;

  const [inputValue, setInputValue] = useState('');
  const [valid, setValid] = useState(true);

  const inputOnChangeHandler = e => {
    setInputValue(e.target.value);
    setValid(pattern.test(e.target.value));
  };

  return [inputValue, inputOnChangeHandler, valid, setValid];
};

export default useValidateInput;
