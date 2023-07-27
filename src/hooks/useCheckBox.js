import { useCallback, useState } from "react";
import { Link } from "react-router-dom";
import { styled } from "styled-components";

let id = 1;

// 인자
// text: 체크박스 옆에 나오는 문구들 넘겨 받는다
// termsURL: 약관의 URL을 넘겨받는다. URL이 빈 값일 시, 오른쪽에 약관 동의 링크가 만들어지지 않는다.
// inText: true일 때 약관의 URL이 text에 링크된다.

// 반환값
// CheckBox: text 문구가 옆에 적혀있는 체크 박스 컴포넌트. 
// checked: 체크박스가 체크 되어있는지 여부
// setChecked: checked를 set하는 함수

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

  *{
    color: var(--black);
  }
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
