import { useNavigate } from "react-router-dom";
import useValidateInput from "../../hooks/useValidateInput"
import SearchInputField from "./styles/SearchInputField"
import {ReactComponent as RightArrow} from "../../assets/leftArrow.svg"
import { useEffect, useRef } from "react";

function SearchInputBox() {
  const inputRef = useRef();
  const [keyword, keywordOnChange, valid] = useValidateInput();
  const navigate = useNavigate();

  useEffect(() => {
    inputRef.current.focus()
  },[])

  const handleOnEnter = (e) =>{
    if(e.keyCode !== 13)
      return;
    
    if(!valid){
      alert("검색어를 입력해주세요");
    }
    else{
      navigate(`/search/posts?keyword=${keyword}`);
    }
  }
  
  return (
    <SearchInputField>
      <button onClick={()=>navigate("/")}>
        <RightArrow/>
      </button>
      <input placeholder="고슴아 이게 궁금해. (인물, 이슈)" value={keyword} onChange={keywordOnChange} onKeyDown={handleOnEnter} ref={inputRef}/>
    </SearchInputField>
  )
}

export default SearchInputBox