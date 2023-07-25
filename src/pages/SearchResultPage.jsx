import { styled } from "styled-components";
import { useLocation } from "react-router-dom";
import ContentsSection from "../components/common/ContentsSection";
import ChangeOnHoverButton from "../components/common/styles/ChangeOnHoverButton";
import { useState } from "react";
function SearchResultPage() {

  const location = useLocation();
  const searchParams = new URLSearchParams(location.search);
  console.log(searchParams.get('keyword'))
  const keyword = searchParams.get('keyword')

  //만약 받아온 데이터의 수가 0개면 삼항연산자를 통해 return 부분 변경 
  //확인용 check라는 useState로 확인 
  const [check, setCheck] = useState(false);

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
            <span>{`🦔고슴이 ${12}개 찾았음!`}</span>


            <div className="sorting">
              <ChangeOnHoverButton $bgOnHover={"var(--black)"} $colorOnHover={"var(--white)"} $width={'80px'} $padding={"40"}>최신순</ChangeOnHoverButton>
            </div>
          </ResultHeader>
          <ContentsSection />
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
