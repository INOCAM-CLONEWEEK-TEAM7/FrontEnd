import Nav from "../components/common/CategoryNav";
import { useParams } from "react-router-dom";
import ContentsSection from "../components/common/ContentsSection";
import { useEffect, useState } from "react";
import { getNewsesByCategoryP } from "../api/news";
import { useQuery } from "react-query";

function TagPage() {
  const params = useParams();
  const category = params.category;
  console.log(category)

  //페이징 요청할 페이지넘버
  const [pageNum, setPageNum] = useState(0);
  console.log(pageNum)

  //검색결과를 가져올 리엑트 쿼리 
  const { isLoading, isError, data, isSuccess } = useQuery(`${category}${pageNum}`, getNewsesByCategoryP(category,pageNum));

  const [newsList, setNewsList] = useState([]);
  const [ListNum, setListNum] = useState(0);

  //데이터 값을 담아줌
  //////////////////
  useEffect(() => {
    {
      if (isSuccess) {
        setNewsList([...newsList, ...data.data.data.newsList]);
        setListNum(data.data.data.newsCount)
      }
    }
  }, [data])
  ////////////////////

  if (isLoading) {
    return <div>로딩 중...</div>
  }

  if (isError) {
    return <div>에러발생!</div>
  }


  return (
    <div>
      <Nav></Nav>
      <ContentsSection
        data={newsList}
        pageNum={pageNum}
        setPageNum={setPageNum}
        total={ListNum} />

    </div>
  );
}

export default TagPage;
