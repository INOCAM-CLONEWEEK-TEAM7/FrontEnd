import { useState } from "react";

// 인자
// type: "email", "password" 중 하나. 다른 문자열일 시 validate 할 때 빈문자열이 아닌지만 확인
// automatic: true일 시, 인풋값이 바뀔 때 마다 유효성 검사. false일 시, validate함수를 이용해 수동으로 검사.

// 반환값
// inputValue: 인풋 태그의 value로 들어갈 아이
// inputOnChangeHandler: 인풋 태그의 onChange로 들어갈 아이
// valid: 해당 인풋 태그가 유효한지 여부
// validate: 수동 유효성 검사 함수
const useValidateInput = (type, automatic = true) => {
  const pattern =
    type === "email" ? /^[a-zA-Z0-9._-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/ : type === "password" ? /^.{8,}$/ : /^.{1,}$/;

  const [inputValue, setInputValue] = useState("");
  const [valid, setValid] = useState(true);

  const inputOnChangeHandler = automatic
    ? e => {
        setInputValue(e.target.value);
        setValid(pattern.test(e.target.value));
      }
    : e => {
        setInputValue(e.target.value);
      };

  const validate = () => {
    setValid(pattern.test(inputValue));
    return pattern.test(inputValue);
  };

  return [inputValue, inputOnChangeHandler, valid, validate];
};

export default useValidateInput;
