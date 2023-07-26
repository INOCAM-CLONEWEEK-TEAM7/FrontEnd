import Recommend from "../components/searchPage/Recommend";
import SearchInputBox from "../components/searchPage/SearchInputBox";
import SearchForm from "../components/searchPage/styles/SearchForm";

function SearchPage() {
  const keywordList = ["한미정상회담","간호법","부동산","수단","TV 수신료","반도체"];
  return (
  <SearchForm>
    <SearchInputBox/>
    <Recommend keywordList={keywordList}/>
  </SearchForm>
  )
}

export default SearchPage;
