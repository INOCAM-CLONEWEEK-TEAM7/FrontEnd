import { styled } from "styled-components";
import { useLocation } from "react-router-dom";
import ContentsSection from "../components/common/ContentsSection";
import ChangeOnHoverButton from "../components/common/styles/ChangeOnHoverButton";
import { useEffect, useState } from "react";
import { getNewsesBySearchP } from "../api/news";
import { useQuery } from "react-query";
import LoadingPage from "./LoadingPage";
import Recommend from "../components/searchPage/Recommend";

function SearchResultPage() {

  //주소에서 키워드 값 뽑아내는 부분 
  const location = useLocation();
  const searchParams = new URLSearchParams(location.search);
  const keyword = searchParams.get('keyword')

  //페이징 요청할 페이지넘버
  const [pageNum, setPageNum] = useState(0);
  console.log(pageNum)

  //검색결과를 가져올 리엑트 쿼리 
  const { isLoading, isError, data, isSuccess } = useQuery(`search${keyword}${pageNum}`, getNewsesBySearchP(keyword, pageNum), {
    suspense: pageNum ? false : true,
  });

  const [newsList, setNewsList] = useState([]);
  const [ListNum, setListNum] = useState(0);

  //데이터 값을 담아줌
  //////////////////
  useEffect(() => {
    {
      if (isSuccess) {
        console.log(data);
        setNewsList([...newsList, ...(data.data.success ? data.data.data.newsList : [])]);
        setListNum(data.data.success ? data.data.data.newsCount : 0)
        if (data.data.statusCode === 200) {
          setNewsList([...newsList, ...data.data.data.newsList]);
          setListNum(data.data.data.newsCount)
        }
        else {
          setCheck(false)
        }
      }
    }
  }, [data])
  ////////////////////


  const [check, setCheck] = useState(true);

  // if (isLoading) {
  //   return <LoadingPage />
  // }

  if (isError) {
    // 상세 에러 코드 설명이 없어 모두 같이 처리
    alert("에러입니다")
  }

  return (
    <ResultSection>
      {check
        ?
        <>
          <ResultHeader>
            {
              data.data.success ?
                <>
                  <h2>{keyword}의 검색 결과예요.</h2>
                  <span>{`🦔고슴이 ${data.data.data.newsCount}개 찾았음!`}</span>
                  <div className="sorting">
                    <button>
                      최신순
                    </button>

                  </div>
                </>
                :
                <>
                  <h2>
                    {keyword}관련된 이슈를 아직 다루지 않았어요!
                  </h2>
                  <Recommend keywordList={["한미정상회담", "간호법", "부동산", "수단", "TV 수신료", "반도체"]} />
                </>
            }

          </ResultHeader>

          <ContentsSection
            data={newsList}
            pageNum={pageNum}
            setPageNum={setPageNum}
            total={ListNum} />
        </>
        :
        <>
          <ResultHeader>
            <h2>
              <Span>{keyword}</Span>
              {"관련된 이슈를 아직 다루지 않았어요!"}
            </h2>

            <>검색창에서 썼던 고슴이 추천키워드 </>
          </ResultHeader>

        </>
      }

    </ResultSection>
  );
}

export default SearchResultPage;


const ResultSection = styled.section`

`
const ResultHeader = styled.div`
  padding: 0 5% 5% 10%;

  & h2{
    font-size: 2rem;
    color: var(--dark-gray);
  }
  & span{
    font-size: 1.25rem;
    color: var(--black);
  }
  & button{
    background: var(--black);
    color: var(--white);
    font-weight: 700;
    width: 80px;
    cursor: pointer;
    font: inherit;
    position: relative;
    border: 1px solid var(--black);
    padding: .25rem 0;
    outline: none;
  }
`

const Span = styled.span`
  color: darkgray;
` 
