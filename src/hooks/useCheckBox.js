import { useCallback, useState } from "react";
import { Link } from "react-router-dom";
import { styled } from "styled-components";

let id = 1;

const useCheckBox = (text, termsURL, inText) => {
  const [checked, setChecked] = useState(false);

  const handleCheckOnChange = e => {
    setChecked(e.target.checked);
  };

  const CheckBox = useCallback(
    ({ checked }) => {
      id++;
      return termsURL ? (
        inText ? (
          <CheckBoxContainer>
            <input id={id} type="checkbox" checked={checked} onChange={handleCheckOnChange} />
            <label htmlFor={id}>
              <Link to={termsURL} target="_blank" rel="noopener noreferrer">
                {text}
              </Link>
              에 동의합니다.
            </label>
          </CheckBoxContainer>
        ) : (
          <CheckBoxContainer>
            <input id={id} type="checkbox" checked={checked} onChange={handleCheckOnChange} />
            <label htmlFor={id}>{text}</label>
            <Link to={termsURL} target="_blank" rel="noopener noreferrer">
              약관보기
            </Link>
          </CheckBoxContainer>
        )
      ) : (
        <CheckBoxContainer>
          <input id={id} type="checkbox" checked={checked} onChange={handleCheckOnChange} />
          <label htmlFor={id}>{text}</label>
        </CheckBoxContainer>
      );
    },
    [termsURL, text, inText],
  );

  return [CheckBox, checked, setChecked];
};

const CheckBoxContainer = styled.div`
  padding: 0.5rem 0;
  position: relative;

  & > input {
    border: none;
    position: absolute;
  }

  & > label {
    display: block;
    height: 16px;
    padding-left: 2rem;
    line-height: 16px;
    position: relative;
  }

  & a {
    display: inline !important;
    margin: 0 !important;
    text-decoration: underline;
    color: var(--black);
    position: absolute;
    right: 0;
    top: 50%;
    transform: translateY(-50%);
  }

  & > label > a {
    position: static;
    cursor: pointer;
  }
`;

export default useCheckBox;
