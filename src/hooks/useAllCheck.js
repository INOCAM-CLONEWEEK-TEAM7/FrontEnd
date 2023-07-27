import { useCallback, useEffect, useState } from "react";
import { styled } from "styled-components";

let id = 1;

// 인자
// musts: 필수 사항들의 체크여부 상태들을 리스트로 넘겨 받는다.
// optionals: 선택 사항들의 체크여부 상태들을 리스트로 넘겨 받는다.
// mustsSetChecks: 필수 사항들의 체크여부 상태를 set하는 함수들을 리스트로 넘겨 받는다.
// optionalSetChecks: 선택 사항들의 체크여부 상태를 set하는 함수들을 리스트로 넘겨 받는다.

// 반환값
// CheckBox: 모두 동의합니다 문구가 옆에 적혀있는 체크 박스 컴포넌트. 해당 체크박스가 체크되면 모든 필수,선택 사항들이 자동으로 체크되며, 필수.선택 사항들 중 하나라도 체크가 취소되면 해당 체크박스의 체크도 취소된다.
// checked: 모두 동의합니다가 체크 되어있는지 여부
// allMustsChecked: 모든 필수 사항들이 체크 되어있는지 여부

const useAllCheck = (musts, optionals, mustsSetChecks, optionalSetChecks) => {
  const [checked, setChecked] = useState(false);
  const [allMustsChecked, setAllMustsChecked] = useState(false);

  useEffect(() => {
    setAllMustsChecked(musts.every(checked => checked));
  }, [musts]);

  useEffect(() => {
    setChecked([...musts, ...optionals].every(checked => checked));
  }, [musts, optionals]);

  const handleCheckOnChange = useCallback(
    e => {
      setChecked(e.target.checked);
      [...mustsSetChecks, ...optionalSetChecks].forEach(setCheck => setCheck(e.target.checked));
    },
    [mustsSetChecks, optionalSetChecks],
  );

  const CheckBox = useCallback(
    ({ checked }) => {
      id++;
      return (
        <CheckBoxContainer>
          <input id={id + "All"} type="checkbox" checked={checked} onChange={handleCheckOnChange} />
          <label htmlFor={id + "All"}>모두 동의합니다.</label>
        </CheckBoxContainer>
      );
    },
    [handleCheckOnChange],
  );

  return [CheckBox, checked, allMustsChecked];
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
    color: var(--black);
  }

  & > a {
    display: inline !important;
    margin: 0 !important;
    text-decoration: underline;
    color: var(--black);
    position: absolute;
    right: 0;
    top: 50%;
    transform: translateY(-50%);
  }
`;

export default useAllCheck;
