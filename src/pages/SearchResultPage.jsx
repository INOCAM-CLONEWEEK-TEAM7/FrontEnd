import { styled } from "styled-components";
import { useLocation } from "react-router-dom";
import ContentsSection from "../components/common/ContentsSection";
import ChangeOnHoverButton from "../components/common/styles/ChangeOnHoverButton";
import { useEffect, useState } from "react";
import { getNewsesBySearchP } from "../api/news";
import { useQuery } from "react-query";

function SearchResultPage() {

  //주소에서 키워드 값 뽑아내는 부분 
  const location = useLocation();
  const searchParams = new URLSearchParams(location.search);
  const keyword = searchParams.get('keyword')

  //페이징 요청할 페이지넘버
  const [pageNum, setPageNum] = useState(0);
  console.log(pageNum)

  //검색결과를 가져올 리엑트 쿼리 
  const { isLoading, isError, data, isSuccess } = useQuery(`search${pageNum}`, getNewsesBySearchP(keyword, pageNum));

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


  const [check, setCheck] = useState(true);

  if (isLoading) {
    return <div>로딩 중...</div>
  }

  if (isError) {
    // 상세 에러 코드 설명이 없어 모두 같이 처리
    if(check===true) setCheck(false)
  }

  return (
    <ResultSection>
      {check
        ?
        <>
          <ResultHeader>
            <h2>
              <Span>{keyword}</Span>

              {"의 검색 결과예요."}
            </h2>
            {/* <span>{`🦔고슴이 ${ListNum}개 찾았음!`}</span> */}


            <div className="sorting">
              <ChangeOnHoverButton
                $bgOnHover={"var(--black)"}
                $colorOnHover={"var(--white)"}
                $width={'80px'}
                $padding={"40"}
              >
                최신순
              </ChangeOnHoverButton>
            
            </div>
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
`

const Span = styled.span`
  color: darkgray;
` 
