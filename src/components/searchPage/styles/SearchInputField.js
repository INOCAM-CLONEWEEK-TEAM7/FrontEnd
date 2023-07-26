import { styled } from "styled-components";

const SearchInputField = styled.fieldset`
  margin: 0 auto;
  position: relative;
  border: 0;
  padding: 0;

  &>button{
    width: 52px;
    height: 52px;
    display: flex;
    justify-content: center;
    align-items: center;
    position: absolute;
    left: .25rem;
    top: 0;
    padding: 0;
    border: none;
    background: none;
    cursor: pointer;  
  }

  &>input{
    display: block;
    width: 100%;
    padding: 10px 40px 11px 1.5rem;
      padding-left: 1.5rem;
    border: 1px solid var(--black);
    border-radius: 0;
    box-sizing: border-box;
    box-shadow: 0;
    font: inherit;
    font-size: inherit;
    color: var(--black);
    transition: all .2s;
    outline: none;
    box-shadow: none;
    padding-left: 56px;
    height: 52px;
    font-size: 1.125rem;
  }

`

export default SearchInputField;
