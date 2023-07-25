import { useCallback, useEffect, useState } from "react";
import { styled } from "styled-components";

let id = 1;

const useAllCheck = (musts, optionals, mustsSetChecks, optionalSetChecks) => {
  const [checked, setChecked] = useState(false);
  const [allMustsChecked, setAllMustsChecked] = useState(false);
  useEffect(()=>{
    setAllMustsChecked(musts.every((checked)=>checked));
  },[musts]);

  useEffect(()=>{
    setChecked([...musts, ...optionals].every((checked)=>checked));
  },[musts,optionals]);
  

  const handleCheckOnChange = useCallback((e) => {
    setChecked(e.target.checked);
    [...mustsSetChecks, ...optionalSetChecks].forEach((setCheck)=>setCheck(e.target.checked));
  },[mustsSetChecks, optionalSetChecks]);
  
  const CheckBox = useCallback(({checked}) => {
    id++;
    return (
      <CheckBoxContainer>
        <input id={id+'All'} type="checkbox" checked={checked} onChange={handleCheckOnChange}/>
        <label htmlFor={id+'All'}>모두 동의합니다.</label>
      </CheckBoxContainer>
    )
  },[handleCheckOnChange])

  return [CheckBox, checked, allMustsChecked];
}

const CheckBoxContainer = styled.div`
  padding: .5rem 0;
  position: relative;

  &>input{
    border: none;
    position: absolute;
  }

  &>label{
    display: block;
    height: 16px;
    padding-left: 2rem;
    line-height: 16px;
    position: relative;
  }

  &>a{
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