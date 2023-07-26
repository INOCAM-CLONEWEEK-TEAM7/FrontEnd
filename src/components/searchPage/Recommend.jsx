import { Link } from "react-router-dom"
import RecommendSection from "./styles/RecommendSection"

function Recommend({keywordList}) {
  return (
    <RecommendSection>
      <div>
        <h2>고슴이 추천 키워드</h2>
        {
          keywordList.map((keyword) => <Link to={`/search/posts?keyword=${keyword}`}>{keyword}</Link>)
        }
      </div>
    </RecommendSection>
  )
}

export default Recommend